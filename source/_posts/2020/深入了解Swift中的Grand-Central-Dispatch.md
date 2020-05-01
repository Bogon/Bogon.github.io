---
title: 深入了解Swift中的Grand Central Dispatch
description: 深入了解Swift中的Grand Central Dispatch
permalink: 深入了解Swift中的Grand Central Dispatch
copyright: ture
date: 2020-04-30 15:02:22
keywords: iOS,Swift,Grand Central Dispatch,multi-threading,Queues,tasks,groups
tags:
    - [iOS]
    - [Swift]
    - [Grand Central Dispatch]
categories:
    - [iOS]
    - [Swift]
    - [Grand Central Dispatch]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```Grand Central Dispatch```***](https://developer.apple.com/reference/dispatch "")（简称GCD）是大多数 ```Swift开发人员``` 使用无数次的基本技术之一。 它主要是因为能够在不同的并发队列上分派工作而闻名，并且经常用于编写如下代码：

``` Swift
DispatchQueue.main.async {
    // Run async code on the main queue
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是事实证明，如果我们再深入一点， ```GCD``` 还提供了一套并非所有人都知道的真正强大的API和功能。 本周，让我们超越 ```async {}``` ，看看在某些情况下GCD确实非常有用，以及它如何为许多其他（更常见的） ```Foundation API``` 提供更简单（更“迅速”）的选项。


<!-- more -->

</br>

# **使用DispatchWorkItem延迟可取消的任务**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于 ```GCD``` 的一个常见误解是 ```“一旦安排了无法取消的任务，就需要使用Operation API” ```。 虽然过去确实如此，但在 ```iOS 8``` 和 ```macOS 10.10``` 中引入了 ```DispatchWorkItem``` ，它以非常易于使用的API提供了此确切功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们的用户界面具有搜索栏，当用户键入字符时，我们会通过调用后端进行搜索。 由于用户可以快速键入内容，因此我们不希望立即启动网络请求（这可能会浪费大量数据和服务器容量），而我们将对这些事件进行“反跳”操作，而仅执行请求 一旦用户没有输入0.25秒。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是 ```DispatchWorkItem``` 的用处。通过将我们的请求代码封装在一个工作项中，无论何时将其替换为新的请求代码，我们都可以轻松地将其取消，如下所示：

``` Swift
class SearchViewController: UIViewController, UISearchBarDelegate {
    // We keep track of the pending work item as a property
    private var pendingRequestWorkItem: DispatchWorkItem?

    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        // Cancel the currently pending item
        pendingRequestWorkItem?.cancel()

        // Wrap our request in a work item
        let requestWorkItem = DispatchWorkItem { [weak self] in
            self?.resultsLoader.loadResults(forQuery: searchText)
        }

        // Save the new work item and execute it after 250 ms
        pendingRequestWorkItem = requestWorkItem
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(250),
                                      execute: requestWorkItem)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在上面看到的，由于 ```尾随闭包语法``` 以及 ```GCD``` 导入 ```Swift``` 的效果，在 ```Swift``` 中使用 ```DispatchWorkItem``` 实际上比必须使用 ```Timer``` 或 ```Operation``` 简单得多。 我们不需要使用 ```@objc``` 标记的方法或 ```#selector``` - 都可以使用闭包来完成。

</br>

# **使用DispatchGroup分组和链接任务**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时我们需要执行一组操作，然后才能继续执行逻辑。 例如，假设我们需要先从一组数据源中加载数据，然后才能创建模型。 不必自己跟踪所有数据源，我们可以轻松地将工作与 ```DispatchGroup``` 同步。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使用调度组 还为我们提供了一个很大的优势，因为我们的任务可以在单独的队列中同时运行。 这使我们能够从简单开始，然后在需要时轻松添加并发，而无需重写任何任务。 我们要做的就是在调度组上均衡地调用 ```enter()``` 和 ```leave()``` ，以使其同步我们的任务。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一个示例，在该示例中，我们从本地存储， ```iCloud Drive``` 和后端系统加载笔记，然后将所有结果合并到一个 ```NoteCollection``` 中：

``` Swift
// First, we create a group to synchronize our tasks
let group = DispatchGroup()

// NoteCollection is a thread-safe collection class for storing notes
let collection = NoteCollection()

// The 'enter' method increments the group's task count…
group.enter()
localDataSource.load { notes in
    collection.add(notes)
    // …while the 'leave' methods decrements it
    group.leave()
}

group.enter()
iCloudDataSource.load { notes in
    collection.add(notes)
    group.leave()
}

group.enter()
backendDataSource.load { notes in
    collection.add(notes)
    group.leave()
}

// This closure will be called when the group's task count reaches 0
group.notify(queue: .main) { [weak self] in
    self?.render(collection)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码有效，但是其中有很多重复项。 让我们将其重构为 ```Array的扩展``` ，使用 ```DataSource协议``` 作为 ```其Element类型``` 的同类型约束：

``` Swift
extension Array where Element == DataSource {
    func load(completionHandler: @escaping (NoteCollection) -> Void) {
        let group = DispatchGroup()
        let collection = NoteCollection()

        // De-duplicate the synchronization code by using a loop
        for dataSource in self {
            group.enter()
            dataSource.load { notes in
                collection.add(notes)
                group.leave()
            }
        }

        group.notify(queue: .main) {
            completionHandler(collection)
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过以上扩展，我们现在可以将之前的代码简化为：

``` Swift
let dataSources: [DataSource] = [
    localDataSource,
    iCloudDataSource,
    backendDataSource
]

dataSources.load { [weak self] collection in
    self?.render(collection)
}
```

非常好，紧凑！ 👍

# **用DispatchSemaphore等待异步任务**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 ```DispatchGroup``` 提供了一种同步一组异步操作而又保持异步的好方法，但 ```DispatchSemaphore``` 提供了一种同步等待一组异步任务的方法。 这在命令行工具或脚本中非常有用，因为我们没有应用程序运行循环，而只是在全局上下文中同步执行直到完成。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像 ```DispatchGroup``` 一样， ```信号量API``` 非常简单，因为我们只通过调用 ```wait()``` 或 ```signal()``` 来增加或减少内部计数器。 在 ```signal()``` 之前调用 ```wait() ```将阻塞当前队列，直到接收到信号为止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们在之前的 ```Array扩展``` 中创建另一个重载，该重载同步返回 ```NoteCollection``` ，否则将引发错误。 我们将重用以前基于 ```DispatchGroup``` 的代码，而仅使用 ```信号量``` 协调该任务。

``` Swift
extension Array where Element == DataSource {
    func load() throws -> NoteCollection {
        let semaphore = DispatchSemaphore(value: 0)
        var loadedCollection: NoteCollection?

        // We create a new queue to do our work on, since calling wait() on
        // the semaphore will cause it to block the current queue
        let loadingQueue = DispatchQueue.global()

        loadingQueue.async {
            // We extend 'load' to perform its work on a specific queue
            self.load(onQueue: loadingQueue) { collection in
                loadedCollection = collection

                // Once we're done, we signal the semaphore to unblock its queue
                semaphore.signal()
            }
        }

        // Wait with a timeout of 5 seconds
        semaphore.wait(timeout: .now() + 5)

        guard let collection = loadedCollection else {
            throw NoteLoadingError.timedOut
        }

        return collection
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Array``` 上使用上述新方法，我们现在可以在脚本或命令行工具中同步加载笔记，如下所示：

``` Swift
let dataSources: [DataSource] = [
    localDataSource,
    iCloudDataSource,
    backendDataSource
]

do {
    let collection = try dataSources.load()
    output(collection)
} catch {
    output(error)
}
```

</br>

# **使用DispatchSource观察文件中的更改**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想提出的 ```GCD``` 的最后一个“鲜为人知”的功能是 **它如何提供一种观察文件系统中文件更改** 的方法。 像 ```DispatchSemaphore``` 一样，如果我们要自动响应用户正在编辑的文件，则在脚本或命令行工具中这可能是超级有用的。 这使我们能够轻松构建具有 ```“实时编辑”``` 功能的开发人员工具。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调度源有几种不同的变体，具体取决于我们要观察的内容。 在这种情况下，我们将使用 ```DispatchSourceFileSystemObject``` ，它使我们可以观察文件系统中的事件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一个简单的 ```FileObserver``` 的示例实现，该示例实现使我们附加一个闭包，以在每次更改给定文件时运行该闭包。 它通过使用 ```fileDescriptor``` 和 ```DispatchQueue``` 创建调度源来执行观察，并使用 ```Files``` 引用要观察的文件来工作：

``` Swift
class FileObserver {
    private let file: File
    private let queue: DispatchQueue
    private var source: DispatchSourceFileSystemObject?

    init(file: File) {
        self.file = file
        self.queue = DispatchQueue(label: "com.myapp.fileObserving")
    }

    func start(closure: @escaping () -> Void) {
        // We can only convert an NSString into a file system representation
        let path = (file.path as NSString)
        let fileSystemRepresentation = path.fileSystemRepresentation

        // Obtain a descriptor from the file system
        let fileDescriptor = open(fileSystemRepresentation, O_EVTONLY)

        // Create our dispatch source
        let source = DispatchSource.makeFileSystemObjectSource(
            fileDescriptor: fileDescriptor,
            eventMask: .write,
            queue: queue
        )

        // Assign the closure to it, and resume it to start observing
        source.setEventHandler(handler: closure)
        source.resume()
        self.source = source
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们现在可以像这样使用 ```FileObserver``` ：

``` Swift
let observer = try FileObserver(file: file)

observer.start {
    print("File was changed")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想象一下可以使用此工具构建的所有出色的开发人员工具！ 😀

</br>

# **结论**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Grand Central Dispatch``` 是一个非常强大的框架，其功能远不止最初看起来的样子。 希望这篇文章激发了你对它的用途的想象力，我建议你下次尝试执行我们在本文中介绍的任务之一时尝试一下。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我看来，直接使用 ```GCD``` 实际上可以简化许多基于 ```Timer``` 或 ```OperationQueue``` 的代码，以及使用第三方异步框架。🚀
