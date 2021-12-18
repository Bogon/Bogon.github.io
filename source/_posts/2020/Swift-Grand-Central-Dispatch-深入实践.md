---
title: Swift Grand Central Dispatch 深入实践
permalink: Swift Grand Central Dispatch 深入实践
copyright: ture
keywords: 'iOS,Swift,Grand Central Dispatch,multi-threading,Queues,tasks,groups'
description: Swift Grand Central Dispatch 深入实践
tags:
  - - iOS
  - - Swift
  - - Grand Central Dispatch
categories:
  - - iOS
  - - Swift
  - - Grand Central Dispatch
abbrlink: 24082
date: 2020-04-30 10:32:15
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解 ```Swift``` 中 ```GCD框架``` 的 ```多线程原理``` 。 我保证，将所有需要的 ```队列``` ， ```任务``` ， ```组``` 进行分组。

</br>

# **适用于初学者的GCD并发教程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```Grand Central Dispatch （GCD，或仅调度）```***](https://developer.apple.com/documentation/dispatch "")框架基于基础 ```线程池设计模式``` 。 这意味着系统会生成固定数量的线程-基于某些因素（例如 ```CPU内核``` ），它们始终可用，等待任务同时执行。 🚦

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在运行时创建线程是一项昂贵的任务，因此 [***```GCD```***](https://www.raywenderlich.com/148513/grand-central-dispatch-tutorial-swift-3-part-1 "") 会将任务组织到特定队列中，稍后，将在池中适当且可用的线程上执行等待这些队列中的任务。 这种方法导致了出色的性能和较低的执行延迟。 我们可以说 [***```Dispatch框架```***](https://www.swiftbysundell.com/posts/a-deep-dive-into-grand-central-dispatch-in-swift "") 是一个非常快速，高效的并发框架，专为现代多核硬件和需求而设计。

<!-- more -->

</br>

# **并发，多任务，CPU内核，并行性和线程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理器可以以编程方式运行你执行的任务，通常称为编码，开发或编程。  ```CPU内核``` 执行的代码是线程。因此，你的应用程序将创建一个由线程组成的进程。 🤓

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过去，处理器只有一个内核，一次只能处理一个任务。稍后引入了 ```时间片``` ，因此 ```CPU``` 可以使用上下文切换并发执行线程。随着时间的流逝，处理器获得了更多的功能和内核，因此它们能够使用并行机制实现真正的多任务处理。 ⏱

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今， ```CPU``` 是一个功能非常强大的单元，它每秒能够执行数十亿个任务（周期）。由于这种 ```高可用性速度``` ，英特尔引入了一种称为超线程的技术。他们将 ```CPU时钟周期``` 划分为同时运行的（通常是两个）进程之间的时间，因此可用线程的数量实际上增加了一倍。 📈

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，并发执行可以通过各种技术来实现，但是你不必太在意。如何解决并发性取决于 ```CPU体系结构``` ，操作系统的任务是为底层线程池产生多少线程。  ```GCD框架``` 将隐藏所有复杂性，但是了解基本原理始终是一件好事。 👍

</br>

# **同步和异步执行**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个工作项都可以 ```同步或异步执行``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你听说过 ```阻塞代码``` 和 ```非阻塞代码``` 吗？ 这是这里相同的情景。 使用同步任务，你将阻止执行队列，但是使用异步任务，你的调用将立即返回，并且队列可以继续执行其余任务（或Apple调用的工作项）。 🚧

## ***同步执行***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当工作项与 ```sync方法``` 同步执行时，程序将等到执行完成后再返回方法调用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果函数具有返回值，则它很可能是同步的，因此 ```func load() -> String``` 可能会阻塞正在运行的代码，直到资源完全加载并返回。

## ***异步执行***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当使用 ```async方法``` 异步执行工作项时，该方法调用立即返回。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Completion blocks``` 是异步方法的很好选择，例如，如果你查看此方法 ```func load（completion：（String）-> Void）```，则可以看到它没有返回类型，但是函数的结果通过 ```Block``` 返回 ```(Block 回调)``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个典型的用例，如果你必须等待方法内部的某些事情（例如，从磁盘读取大文件的内容），则不希望由于 ```IO操作``` 缓慢而 ```阻塞CPU``` 。 在系统从物理硬盘驱动器中读取文件时，可能还会执行其他任务，而这些任务根本不会占用 ```大量IO``` （算术运算等）。 💾

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```分派队列``` ，你可以同步或异步执行代码。 同步执行时，队列等待工作，异步执行时，代码立即返回，而无需等待任务完成。 ⚡️

</br>

# **Dispatch queues**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我之前提到的， ```GCD``` 将 ```任务组织成队列``` ，就像在购物中心的队列一样。 在每个调度队列上，将按照将任务添加到队列中的相同顺序执行任务- ```FIFO``` ：该行中的第一个任务将首先执行-但你应注意，不能保证完成的顺序。 任务将根据代码复杂度完成。 因此，如果你将两个任务添加到队列中，先是慢任务，然后是快任务，则快任务可以在慢任务之前完成。 ⌛️

## ***串行和并发队列***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有两种类型的调度队列。  ```串行队列``` 可以一次执行一个任务，这些队列可用于同步对特定资源的访问。 另一方面， ```并发队列``` 可以同时并行执行一个或多个任务。  ```串行队列``` 就像商场中只有一个收银员的一条生产线， 并发队列 就像是一条拆分成两个或更多收银员的单条生产线。 💰

## ***主队列，全局队列和定制队列***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```主队列``` 是一个 ```串行队列``` ， ```主队列``` 上的每个任务都在 ```主线程``` 上运行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```全局队列``` 是系统提供的通过操作系统共享的 ```并发队列``` 。 恰好有四个按高优先级，默认优先级，低优先级以及 ```IO限制``` 的后台队列进行组织。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```定制队列``` 可以由用户创建。 通过指定 ```服务质量属性（QoS）``` ， ```自定义并发队列``` 始终映射到全局队列之一。 在大多数情况下，如果要并行运行任务，建议使用 ```全局并发队列``` 之一，则应仅创建 ```自定义串行队列``` 。

## ***系统提供的队列***

+ Serial main queue
+ Concurrent global queues
+ high priority global queue
+ default priority global queue
+ low priority global queue
+ global background queue (io throttled)

## ***按服务质量定制队列***

+ **userInteractive** (UI updates) -> serial main queue
+ **userInitiated** (async UI related tasks) -> high priority global queue
+ **default** -> default priority global queue
+ **utility** -> low priority global queue
+ **background** -> global background queue
+ **unspecified** (lowest) -> low priority global queue

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从理论上已经足够，让我们看看如何在实际中使用 ```Dispatch框架``` ！ 🎬

</br>

# **如何在Swift中使用DispatchQueue类？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是使用 ```Swift 3``` 提供的全新 ```GCD语法``` 从上方获取所有队列的方法。请注意，除非要使用 ```并发队列``` ，否则应始终使用 ```全局并发队列``` 而不是创建自己的 ```全局并发队列``` 。 通过 ```barriers``` 进行锁定以实现 [***```线程安全```***](http://basememara.com/creating-thread-safe-arrays-in-swift/ "") ，稍后再进行介绍。 😳

## ***如何获得队列？***

``` Swift
import Dispatch

DispatchQueue.main
DispatchQueue.global(qos: .userInitiated)
DispatchQueue.global(qos: .userInteractive)
DispatchQueue.global(qos: .background)
DispatchQueue.global(qos: .default)
DispatchQueue.global(qos: .utility)
DispatchQueue.global(qos: .unspecified)
DispatchQueue(label: "com.theswiftdev.queues.serial")
DispatchQueue(label: "com.theswiftdev.queues.concurrent", attributes: .concurrent)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在任务完成后，在 ```后台队列``` 上执行任务并更新 ```主队列``` 上的 ```UI``` 是使用 ```Dispatch队列``` 非常容易的一项。

``` Swift
DispatchQueue.global(qos: .background).async {
    // do your job here

    DispatchQueue.main.async {
        // update ui here
    }
}
```

## ***在队列上同步和异步调用***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;队列上的 ```同步和异步方法``` 之间没有太大区别。  ```Sync``` 只是一个带有信号量（稍后说明）的异步调用，该信号量等待返回值。 同步呼叫将被阻止，另一方面，异步呼叫将立即返回。 🎉

``` Swift
let q = DispatchQueue.global()

let text = q.sync {
    return "this will block"
}
print(text)

q.async {
    print("this will return instantly")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本上，如果你需要返回值，请使用 sync ，但在其他所有情况下，请使用 async 。 **死锁警告**：***永远不要在主队列上调用同步，因为它会导致死锁和崩溃。*** 如果你正在寻找一种在 ```主队列/线程上``` 进行 ```同步调用``` 的安全方法，则可以使用此代码段。 👌

***```不要从串行队列的线程在串行队列上调用sync！```***

## ***延迟执行***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 ```Dispatch框架``` 简单地延迟代码执行。

``` Swift
DispatchQueue.main.asyncAfter(deadline: .now() + .seconds(2)) {
    //this code will be executed only after 2 seconds have been passed
}
```

## ***执行并发循环***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```调度队列``` 仅允许你同时执行迭代。

``` Swift
DispatchQueue.concurrentPerform(iterations: 5) { (i) in
    print(i)
}
```

## ***Debugging***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哦，顺便说一句，它仅用于调试目的，但是你可以使用此扩展名来返回当前队列的名称。 不要在生产代码中使用！！！

``` Swift
extension DispatchQueue {
    static var currentLabel: String {
        return String(validatingUTF8: __dispatch_queue_get_label(nil))!
    }
}
//print(DispatchQueue.currentLabel)
```

</br>

# **在Swift中使用DispatchWorkItem**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```DispatchWorkItem``` 封装了可以执行的工作。 可以将工作项目分派到 ```DispatchQueue``` 上和 ```DispatchGroup``` 中。 也可以将 ```DispatchWorkItem``` 设置为 ```DispatchSource``` 事件，注册或取消处理程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，就像使用工作项进行操作一样，你可以取消正在运行的任务。 工作项也可以在任务完成时通知队列。

``` Swift
var workItem: DispatchWorkItem?
workItem = DispatchWorkItem {
    for i in 1..<6 {
        guard let item = workItem, !item.isCancelled else {
            print("cancelled")
            break
        }
        sleep(1)
        print(String(i))
    }
}

workItem?.notify(queue: .main) {
    print("done")
}

DispatchQueue.global().asyncAfter(deadline: .now() + .seconds(2)) {
    workItem?.cancel()
}
DispatchQueue.main.async(execute: workItem!)
// you can use perform to run on the current queue instead of queue.async(execute:)
//workItem?.perform()
```

</br>

# **与 DispatchGroups 并发的任务**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，你需要执行多个网络调用以构造视图控制器所需的数据？ 这是 ```DispatchGroup``` 可以为你提供帮助的地方。 你所有长时间运行的后台任务都可以同时执行，当一切准备就绪时，你会收到通知。 请注意，你必须使用线程安全的数据结构，因此请务必在同一线程上修改数组！ 😅

``` Swift
func load(delay: UInt32, completion: () -> Void) {
    sleep(delay)
    completion()
}

let group = DispatchGroup()

group.enter()
load(delay: 1) {
    print("1")
    group.leave()
}

group.enter()
load(delay: 2) {
    print("2")
    group.leave()
}

group.enter()
load(delay: 3) {
    print("3")
    group.leave()
}

group.notify(queue: .main) {
    print("done")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，你始终必须在该组上平衡 进入 和 离开 调用。 调度组还使我们能够跟踪不同工作项的完成情况，即使它们在不同队列中运行也是如此。

``` Swift
let group = DispatchGroup()
let queue = DispatchQueue(label: "com.theswiftdev.queues.serial")
let workItem = DispatchWorkItem {
    print("start")
    sleep(1)
    print("end")
}

queue.async(group: group) {
    print("group start")
    sleep(2)
    print("group end")
}
DispatchQueue.global().async(group: group, execute: workItem)

// you can block your current queue and wait until the group is ready
// a better way is to use a notification block instead of blocking
//group.wait(timeout: .now() + .seconds(3))
//print("done")

group.notify(queue: .main) {
    print("done")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以使用调度组进行的另一件事：假设你在执行一些实际工作时正在显示动画效果很好的加载指示器。 可能发生的是工作完成得比你预期的快，并且指示符动画无法完成。 为了解决这种情况，你可以添加一个小的延迟任务，以便小组等待直到两个任务都完成。 😎

``` Swift
let queue = DispatchQueue.global()
let group = DispatchGroup()
let n = 9
for i in 0..<n {
    queue.async(group: group) {
        print("\(i): Running async task...")
        sleep(3)
        print("\(i): Async task completed")
    }
}
group.wait()
print("done")
```

</br>

# **信号量(Semaphores)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```信号量 ```只是一个变量，用于处理并发系统中的资源共享。 这是一个非常强大的对象，下面是 ```Swift``` 中的一些重要示例。

## ***如何使异步任务同步？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;答案很简单，你可以使用信号量！

``` Swift
enum DispatchError: Error {
    case timeout
}

func asyncMethod(completion: (String) -> Void) {
    sleep(2)
    completion("done")
}

func syncMethod() throws -> String {

    let semaphore = DispatchSemaphore(value: 0)
    let queue = DispatchQueue.global()

    var response: String?
    queue.async {
        asyncMethod { r in
            response = r
            semaphore.signal()
        }
    }
    semaphore.wait(timeout: .now() + 5)
    guard let result = response else {
        throw DispatchError.timeout
    }
    return result
}

let response = try? syncMethod()
print(response)
```

## ***锁定/单次访问资源***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想避免 ```race condition``` 问题，则可能要使用互斥。 这可以通过使用信号量对象来实现，但是如果你的对象需要大量读取功能，则应考虑基于 ```dispatch barrier``` 的解决方案。 😜

``` Swift
class LockedNumbers {

    let semaphore = DispatchSemaphore(value: 1)
    var elements: [Int] = []

    func append(_ num: Int) {
        self.semaphore.wait(timeout: DispatchTime.distantFuture)
        print("appended: \(num)")
        self.elements.append(num)
        self.semaphore.signal()
    }

    func removeLast() {
        self.semaphore.wait(timeout: DispatchTime.distantFuture)
        defer {
            self.semaphore.signal()
        }
        guard !self.elements.isEmpty else {
            return
        }
        let num = self.elements.removeLast()
        print("removed: \(num)")
    }
}

let items = LockedNumbers()
items.append(1)
items.append(2)
items.append(5)
items.append(3)
items.removeLast()
items.removeLast()
items.append(3)
print(items.elements)
```

## ***等待多个任务完成***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像调度组一样，如果多个任务完成，你还可以使用信号量对象来获得通知。 你只需要等待...

``` Swift
let semaphore = DispatchSemaphore(value: 0)
let queue = DispatchQueue.global()
let n = 9
for i in 0..<n {
    queue.async {
        print("run \(i)")
        sleep(3)
        semaphore.signal()
    }
}
print("wait")
for i in 0..<n {
    semaphore.wait()
    print("completed \(i)")
}
print("done")
```

## ***使用信号量批量执行***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以创建类似于行为的线程池，以使用调度信号量来模拟有限的资源。 因此，例如，如果你想从服务器下载大量图像，则可以每次运行一批。 非常方便。 🖐

``` Swift
print("start")
let sem = DispatchSemaphore(value: 5)
for i in 0..<10 {
    DispatchQueue.global().async {
        sem.wait()
        sleep(2)
        print(i)
        sem.signal()
    }
}
print("end")
```

</br>

# **DispatchSource对象**

***```调度源是一种基本数据类型，可协调特定底层系统事件的处理。```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信号，描述符，进程，端口，计时器等。 一切都通过 [***```调度源```***](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/GCDWorkQueues/GCDWorkQueues.html "") 对象处理。 我真的不想深入细节，这是相当底层的东西。 你可以使用调度源监视文件，端口，信号。 请只阅读苹果官方文档。 📄

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我只想在此使用 [***```调度源计时器```***](https://www.cocoawithlove.com/blog/2016/07/30/timer-problems.html "") 来举例说明。

``` Swift
let timer = DispatchSource.makeTimerSource()
timer.schedule(deadline: .now(), repeating: .seconds(1))
timer.setEventHandler {
    print("hello")
}
timer.resume()
```

</br>

# **使用调度框架的线程安全**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果涉及多线程代码，则 [***```线程安全性```***](https://zh.wikipedia.org/wiki/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8 "") 是不可避免的主题。 在开始时，我提到在GCD的内部有一个线程池。 每个线程都有一个与之关联的运行循环对象，你甚至可以手动运行它们。 如果手动创建线程，则会将运行循环自动添加到该线程。

``` Swift
let t = Thread {
    print(Thread.current.name ?? "")
     let timer = Timer(timeInterval: 1, repeats: true) { t in
         print("tick")
     }
     RunLoop.current.add(timer, forMode: .defaultRunLoopMode)

    RunLoop.current.run()
    RunLoop.current.run(mode: .commonModes, before: Date.distantPast)
}
t.name = "my-thread"
t.start()

//RunLoop.current.run()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你不应该这样做，仅出于演示目的，请始终使用 ```GCD队列``` ！

## ***Queue != Thread***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```GCD队列``` 不是线程，如果你在并发队列上运行多个异步操作，则代码可以在满足需求的任何可用线程上运行。

***```线程安全就是要避免混乱的变量状态```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想象一下 ```Swift``` 中的可变数组。 可以从任何线程进行修改。 那不是很好，因为如果数组不是线程安全的，最终其中的值将像地狱一样被弄乱。 例如，多个线程试图将值插入数组。 怎么了？ 如果它们并行运行，将首先添加哪个元素？ 现在，这就是为什么有时需要创建线程安全资源的原因。

## ***串行队列***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 ```串行队列``` 强制执行 ```互斥``` 。 队列中的所有任务将连续运行（以 ```FIFO顺序``` ），一次仅运行一个进程，任务必须互相等待。 解决方案的一大缺点是 ```速度``` 。 🐌

``` Swift
let q = DispatchQueue(label: "com.theswiftdev.queues.serial")

q.async() {
  // writes
}

q.sync() {
  // reads
}
```

## ***使用 barriers 的并发队列***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果为异步方法提供了额外的标志，则可以将 ```barriers``` 任务发送到队列。 如果这样的任务到达队列，它将确保在 ```barriers``` 任务完成之前不会执行任何其他操作。 综上所述， ```barriers``` 任务是并发队列的同步（点）任务。 使用异步 ```barriers``` 进行写入，使用同步块进行读取。 😎

``` Swift
let q = DispatchQueue(label: "com.theswiftdev.queues.concurrent", attributes: .concurrent)

q.async(flags: .barrier) {
  // writes
}

q.sync() {
  // reads
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在线程安全的环境中，此方法将导致读取速度极快。 你还可以使用串行队列，信号量，锁定它们都取决于你当前的情况。 🤐

</br>

# **一些反模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须非常小心 [***```死锁```***](https://zh.wikipedia.org/wiki/%E6%AD%BB%E9%94%81 "") ， [***```竞态条件```***](https://zh.wikipedia.org/wiki/%E7%AB%B6%E7%88%AD%E5%8D%B1%E5%AE%B3 "") 和 [***```读者作家```***](https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem "") 的问题。 通常在串行队列上调用 ```sync方法``` 会给你带来很多麻烦。 另一个问题是 ```线程安全性``` ，但是我们已经介绍了该部分。 😉

``` Swift
let queue = DispatchQueue(label: "com.theswiftdev.queues.serial")

queue.sync {
    // do some sync work
    queue.sync {
        // this won't be executed -> deadlock!
    }
}

//What you are trying to do here is to launch the main thread synchronously from a background thread before it exits. This is a logical error.
//https://stackoverflow.com/questions/49258413/dispatchqueue-crashing-with-main-sync-in-swift?rq=1
DispatchQueue.global(qos: .utility).sync {
    // do some background task
    DispatchQueue.main.sync {
        // app will crash
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须非常小心 [***```死锁```***](https://zh.wikipedia.org/wiki/%E6%AD%BB%E9%94%81 "") ， [***```竞态条件```***](https://zh.wikipedia.org/wiki/%E7%AB%B6%E7%88%AD%E5%8D%B1%E5%AE%B3 "") 和 [***```读者作家```***](https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem "") 的问题。 通常在串行队列上调用 ```sync方法``` 会给你带来很多麻烦。 另一个问题是 ```线程安全性``` ，但是我们已经介绍了该部分。 😉
 ```Dispatch框架``` （又名GCD）是一个了不起的框架，它具有如此巨大的潜力，并且确实需要一些时间来掌握它。 真正的问题是，为了将并发编程提升到一个全新的高度，苹果将采取什么道路？ 承诺或等待，也许是全新的东西，希望我们能在 ```Swift 6``` 中看到一些东西。

