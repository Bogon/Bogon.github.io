---
title: 如何使用 Combine Publishers和Subscribers通过URLSession下载文件？
description: 如何使用 Combine Publishers和Subscribers通过URLSession下载文件？
permalink: 如何使用 Combine Publishers和Subscribers通过URLSession下载文件？
copyright: ture
date: 2020-05-01 12:26:06
keywords:
tags:
categories:
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```URLSessionDownloadTask``` 和 ```Swift``` 中的 ```Combine框架``` 将远程图像异步加载到 ```UIImageView``` 中。

</br>

# **一个简单的图像下载器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 ```URL下载资源``` 似乎是一项艰巨的任务，但这真的那么容易吗？ 这要看情况。 如果必须 [***```下载和解析```***](http://www.xuebaonline.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Codable%20protocol%E5%9C%A8Swift%E4%B8%AD%E8%A7%A3%E6%9E%90JSON%EF%BC%9F/ "") 只有几个KB的 ```JSON文件``` ，则可以采用经典方式，也可以对 [***```Combine框架中的URLSession对象```***](http://www.xuebaonline.com/Swift%20URLSession%20&&%20Combine%20framework/ "") 使用新的 ```dataTaskPublisher``` 方法。

## **不良做法⚠️**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用一些快速且肮脏的方法从互联网上获取一些较小的数据。 这些方法的问题在于你必须处理大量线程和队列。 幸运的是，使用 [***```Dispatch框架```***](http://www.xuebaonline.com/%E6%B7%B1%E5%85%A5%E4%BA%86%E8%A7%A3Swift%E4%B8%AD%E7%9A%84Grand%20Central%20Dispatch/ "") 有很多帮助，因此你可以将阻止功能转换为非阻止功能。 🚧

``` Swift
let url = URL(string: "https://jsonplaceholder.typicode.com/todos/1")!

// Synchronous download using Data & String
do {
    // get the content as String synchronously
    let content = try String(contentsOf: url)
    print(content)

    // get the content of the url as Data synchronously
    let data = try Data(contentsOf: url)
}
catch {
    print(error.localizedDescription)
}


// Turning sync to async
DispatchQueue.global().async { [weak self] in
    //this is happening on a background thread
    do {
        let content = try String(contentsOf: url)
        DispatchQueue.main.async {
            //this is happening on the main thread
            print(content)
        }
    }
    catch {
        print(error.localizedDescription)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Apple``` 在其 [***```官方数据文档```***](https://developer.apple.com/documentation/foundation/nsdata/1547245-datawithcontentsofurl "") 中做了一个重要说明，即你不应该使用这些方法来下载 ```非文件URL``` ，但是仍然有人在教导/使用这些不良做法，但是为什么呢？ 😥

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***```Don't use this synchronous method to request network-based URLs.```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的建议是：始终使用 [***```URLSession```***](https://developer.apple.com/documentation/foundation/urlsession "") 来执行与网络相关的数据传输。 创建数据任务很简单，默认情况下是异步操作，回调在后台线程上运行，因此默认情况下不会阻塞任何内容。 现代网络 ```API``` 在 ```iOS``` 上确实不错，在99％的情况下，你不再需要 [***```Alamofire```***](https://github.com/alamofire/alamofire "") 来完成这些任务。 对依赖说不！ 🚫

``` Swift
// The best approach without using Combine
URLSession.shared.dataTask(with: url) { data, response, error in
    // do your stuff here...
    DispatchQueue.main.async {
        // do something on the main queue
    }
}.resume()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要使用其他 ```HTTP方法``` （而不是 ```GET``` ），发送特殊的标头（凭证，接受策略等）或在正文中提供额外的数据，则还需要提及，首先需要构造一个 ```URLRequest对象``` 。 你只能使用 ```URLSession API``` 发送这些自定义请求。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Apple平台``` 上 ，你将不再被允许使用不安全的 ```HTTP协议``` 。 如果要访问不带安全层 ```（HTTPS）的URL``` ，则必须禁用 [***```应用程序传输安全性```***](https://developer.apple.com/security/ "") 。

## ***数据任务的问题***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大文件（例如图像）呢？ 让我向你展示一些教程，然后再进行深入研究：


+ [***```UIImageView, Load UIImage from remote URL```***](https://stackoverflow.com/questions/47030822/uiimageview-load-uiimage-from-remote-url "")
+ [***```Loading an image into UIImage asynchronously```***](https://stackoverflow.com/questions/9786018/loading-an-image-into-uiimage-asynchronously "")
+ [***```How to load a remote image URL into UIImageView```***](https://www.hackingwithswift.com/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview "")
+ [***```How To Downloading Image from server URL on Swift 4?```***](https://iosdevcenters.blogspot.com/2018/06/how-to-downloading-image-from-server.html "")
+ [***```Downloading UIImage via AlamofireImage?```***](https://stackoverflow.com/questions/46199203/downloading-uiimage-via-alamofireimage "")
+ [***```Loading images from URL in Swift```***](https://medium.com/swlh/loading-images-from-url-in-swift-2bf8b9db266 "")
+ [***```How do I load an image by URL on iOS device using Swift?```***](https://www.tutorialspoint.com/how-do-i-load-an-image-by-url-on-ios-device-using-swift "")
+ [***```UIImageView and UIImage. Load Image From Remote URL.```***](http://swiftdeveloperblog.com/code-examples/uiimageview-and-uiimage-load-image-from-remote-url/ "")
+ [***```Asynchronously Loading Images in SwiftUI```***](https://www.youtube.com/watch?v=DnZvlanmpNE "")
+ [***```How to load remote image in SwiftUI```***](https://onmyway133.github.io/blog/How-to-load-remote-image-in-SwiftUI/ "")
+ [***```Loading/Downloading image from URL on Swift```***](http://www.xuebaonline.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Combine%20Publishers%E5%92%8CSubscribers%E9%80%9A%E8%BF%87URLSession%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%EF%BC%9F/ "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大文件（例如图像）呢？ 让我向你展示一些教程，然后再进行深入研究：
出于所有应有的尊重，我认为以上所有这些链接实际上都是加载远程映像的不良示例。 当然，他们可以完成工作，而且实施起来也很容易，但是也许我们应该涵盖整个故事……🤐

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于与远程服务器的小型交互，可以使用U ```RLSessionDataTask类``` 将响应数据接收到内存中（与使用 ```URLSessionDownloadTask类``` 不同，后者将数据直接存储到文件系统中）。 数据任务非常适合调用 ```Web服务端点``` 之类的用途。

## ***URLSessionDataTask和URLSessionDownloadTask有什么区别？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们仔细阅读文档，很明显， **数据任务** 不是下载大型资源的合适人选。 该类旨在仅请求较小的对象，因为基础数据将被加载到内存中。 另一方面，下载任务将响应的内容保存在磁盘上（而不是内存），并且你将收到本地文件URL，而不是数据对象。 事实证明，从数据任务转移到下载任务将对你的内存消耗产生巨大影响。 我有一些数字。 📈

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我使用这两种方法下载了以下[***```图像文件（6000x4000px×13.1MB```***](https://images.unsplash.com/photo-1554773228-1f38662139db "")）。 我做了一个基于Swift 5.1项目的全新情节提要。 基本的RAM使用量约为52MB，当我使用 ```URLSessionDataTask类``` 获取图像时，内存使用量跃升至82MB。 将数据任务转换为下载任务仅使基本内存大小增加了约4MB（总计约56MB），这是一项重大改进。

``` Swift
let url = URL(string: "https://images.unsplash.com/photo-1554773228-1f38662139db")!


// data task
URLSession.shared.dataTask(with: url) { [weak self] data, response, error in
    guard let data = data else {
        return
    }
    DispatchQueue.main.async {
        self?.imageView.image = UIImage(data: data)
    }
}.resume()


// download task
URLSession.shared.downloadTask(with: url) { [weak self] url, response, error in
    guard
        let cache = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first,
        let url = url
    else {
        return
    }

    do {
        let file = cache.appendingPathComponent("\(UUID().uuidString).jpg")
        try FileManager.default.moveItem(atPath: url.path,
                                         toPath: file.path)
        DispatchQueue.main.async {
            self?.imageView.image = UIImage(contentsOfFile: file.path)
        }
    }
    catch {
        print(error.localizedDescription)
    }
}.resume()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我使用 ```UIImageView``` 渲染图像时，数据任务的内存占用量约为118MB（总计：〜170MB），下载任务的内存占用约为93MB（总计：〜145MB）。 快速摘要：

+ 数据任务：〜30MB
+ 带有渲染的数据任务：〜118MB
+ 下载任务：〜4MB
+ 带有渲染的下载任务：〜93MB

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望你明白我的意思。 请不要忘记， ```Foundation网络层``` 附带了四种类型的会话任务。 你应该始终使用适合工作的合适的工具。 我们可以说 [***```URLSessionDataTask与URLSessionDownloadTask之间的区别```***](https://stackoverflow.com/questions/20604910/what-is-difference-between-nsurlsessiondatatask-vs-nsurlsessiondownloadtask "") 是：大量内存（在这种情况下，大约25MB的RAM）。

> ***```提示：```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 [***```Kingfisher```***](https://github.com/onevcat/Kingfisher "") 或 [***```SDWebImage```***](https://github.com/SDWebImage/SDWebImage "") 下载和处理远程图像。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会说这是一个边缘情况，因为大多数图像（甚至是高清图像）最大都只有几百千字节。 不过，我的主要收获是我们可以做得更好，如果可能的话，我们应该始终这样做。 🤓

</br>

# **使用 Combine 下载图像**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```WWDC19``` 上，Apple宣布了 ```Combine框架``` ，该框架为我们带来了一些 ```Foundation对象``` 的一些新扩展。 现代需要现代API，对吗？ 如果你已经熟悉了很好的新SDK，但是如果你不知道这种声明式功能响应性疯狂到底是什么，那么你应该阅读我有关 [***```Combine框架```***](http://www.xuebaonline.com/Swift%20URLSession%20&&%20Combine%20framework/ "") 的综合教程。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Combine``` 的第一个版本附带了一个不错的 ```dataSessionPublisher扩展``` 方法，用于 ```URLSession类``` 。 等一下，其他人呢？ 没有下载任务发布者？ 我们现在应该做什么？ 🤔

## ***如何编写自定义 Publisher？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```SwiftLee```***](https://twitter.com/twannl "") 有一个很好的关于 [***```Combine的教程```***](https://www.avanderlee.com/swift/custom-combine-publisher/ "") ，可以帮助你处理UIControl事件。  [***```Donny Wals```***](https://twitter.com/donnywals "") 的另一本很棒的读物（甚至比第一本更好）是关于 [***```理解发布者和订阅者```***](https://www.donnywals.com/understanding-combines-publishers-and-subscribers/ "") 的。 这是一篇写得很好的文章，你绝对应该检查一下，我强烈建议你阅读。 🤘🏻

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们开始创建自己的 ```DownloadTaskPublisher``` 。 如果在 ```Xcode``` 中命令+单击 ```dataTaskPublisher``` 方法，则可以看到相应的界面。 右下方还有一个 ```DataTaskPublisher``` 结构。 基于该模板，我们可以创建自己的扩展程序。 同一数据任务方法有两种变体，我们将复制此行为。 我们需要的另一件事是 ```DownloadTaskPublisher``` 结构，我将首先向你展示Swift代码，然后我们将讨论实现细节。

``` Swift
extension URLSession {

    public func downloadTaskPublisher(for url: URL) -> URLSession.DownloadTaskPublisher {
        self.downloadTaskPublisher(for: .init(url: url))
    }

    public func downloadTaskPublisher(for request: URLRequest) -> URLSession.DownloadTaskPublisher {
        .init(request: request, session: self)
    }

    public struct DownloadTaskPublisher: Publisher {

        public typealias Output = (url: URL, response: URLResponse)
        public typealias Failure = URLError

        public let request: URLRequest
        public let session: URLSession

        public init(request: URLRequest, session: URLSession) {
            self.request = request
            self.session = session
        }

        public func receive<S>(subscriber: S) where S: Subscriber,
            DownloadTaskPublisher.Failure == S.Failure,
            DownloadTaskPublisher.Output == S.Input
        {
            let subscription = DownloadTaskSubscription(subscriber: subscriber, session: self.session, request: self.request)
            subscriber.receive(subscription: subscription)
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Publisher``` 可以将输出或失败消息发送给附加的订阅者。 你必须为每种类型创建一个新的类型别名，因为它们都是协议级别上定义的通用约束。 接下来，我们将存储会话和请求对象供以后使用。 协议一致性的最后一部分是你必须实现 ```receive <S>（subscriber：S）``` 通用方法。 此方法负责通过订阅对象附加新的订阅者。 嗯...什么？ 🤨

> ***```提示：```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Combine``` 中的 ```publisher/subscriber``` 关系在第三个对象（订阅）中得到巩固。 创建订阅者并订阅发布者时，发布者将创建订阅对象，并将订阅的引用传递给订阅者。 然后，订阅者将向订阅请求多个值，以开始接收这些值。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```publisher``` 和 ```subscriber``` 通过 ```Subscription``` 连接。  ```subscriber``` 仅创建 ```Subscription``` 并将其传递给 ```subscriber``` 。  ```Subscription``` 包含将为 ```subscriber``` 获取新数据的逻辑。 订阅服务器接收订阅，值和完成（成功或失败）。

+ **订阅者** 订阅 **发布者**
+ **发布者** 创建一个 **订阅**
+ **发布者** 将此 **订阅** 提供给 **订阅者**
+ **订阅者** 要求 **订阅** 提供一些值
+ **订阅** 尝试收集值（成功或失败）
+ **订阅** 根据需求策略将值发送给 **订阅者**
+ 如果发生错误，订阅会将失败完成发送给 **订阅者**
+ 如果没有更多可用值， **订阅** 将发送完成


## ***如何编写自定义 Subscription？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好了，是时候为我们的小型基于 ```Combine``` 的下载器创建订阅了，我认为，如果我们将最后的代码片段放在一起，你将理解这三个对象之间的关系。 🧩

``` Swift
extension URLSession {

    final class DownloadTaskSubscription<SubscriberType: Subscriber>: Subscription where
        SubscriberType.Input == (url: URL, response: URLResponse),
        SubscriberType.Failure == URLError
    {
        private var subscriber: SubscriberType?
        private weak var session: URLSession!
        private var request: URLRequest!
        private var task: URLSessionDownloadTask!

        init(subscriber: SubscriberType, session: URLSession, request: URLRequest) {
            self.subscriber = subscriber
            self.session = session
            self.request = request
        }

        func request(_ demand: Subscribers.Demand) {
            guard demand > 0 else {
                return
            }
            self.task = self.session.downloadTask(with: request) { [weak self] url, response, error in
                if let error = error as? URLError {
                    self?.subscriber?.receive(completion: .failure(error))
                    return
                }
                guard let response = response else {
                    self?.subscriber?.receive(completion: .failure(URLError(.badServerResponse)))
                    return
                }
                guard let url = url else {
                    self?.subscriber?.receive(completion: .failure(URLError(.badURL)))
                    return
                }
                do {
                    let cacheDir = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first!
                    let fileUrl = cacheDir.appendingPathComponent((UUID().uuidString))
                    try FileManager.default.moveItem(atPath: url.path, toPath: fileUrl.path)
                    _ = self?.subscriber?.receive((url: fileUrl, response: response))
                    self?.subscriber?.receive(completion: .finished)
                }
                catch {
                    self?.subscriber?.receive(completion: .failure(URLError(.cannotCreateFile)))
                }
            }
            self.task.resume()
        }

        func cancel() {
            self.task.cancel()
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订户具有输入和失败类型。订阅者只能订阅具有相同类型的发布者。发布者的输出和失败类型必须与订阅输入和失败类型相同。这次我们不能使用 ```associatedType``` ，但是我们必须使用where子句创建一个对这些要求有约束的通用值。其背后的原因是我们不知道哪种订阅者将订阅此订阅。可以是A类或B类，谁知道...🤷️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们必须在 ```init方法``` 中传递一些属性，将它们存储为实例变量（请谨慎使用类，如果适用，则应使用weak）。最后，我们通过遵守需求政策来实施价值请求方法。需求只是一个数字。它告诉我们最多可以发送回给订户多少个值。在我们的例子中，我们将拥有最大1的值，因此，如果需求大于零，那么我们就走了。你可以通过在订阅者上调用各种接收方法来向订阅者发送消息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须手动发送带有 ```.finished``` 或 ```.failure（T）```值的完成事件。同样，我们必须在完成块返回之前移动下载的临时文件，否则我们将完全丢失它。这次，我将简单地将文件移动到应用程序缓存目录。免费取消是结束电池耗尽操作的好方法。你只需要实现一个自定义的 ```cancel（）```方法。在我们的例子中，我们可以在底层 ```URLSessionDownloadTask``` 上调用相同的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而已。我们已经准备好自定义发布者和订阅。想尝试一下吗？

## ***如何创建自定义 Subscriber ？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设有4种订阅。 你可以使用 ```.sink``` 或 ```.assign``` 方法进行新的订阅，还有一个名为 ```Subject``` 的东西，可以为发布者事件进行订阅，或者可以构建自己的 ```Subscriber对象``` 。 如果选择此路径，则可以使用 ```.subscribe方法``` 来关联发布者和订阅者。 你还可以订阅主题。

``` Swift
final class DownloadTaskSubscriber: Subscriber {
    typealias Input = (url: URL, response: URLResponse)
    typealias Failure = URLError

    var subscription: Subscription?

    func receive(subscription: Subscription) {
        self.subscription = subscription
        self.subscription?.request(.unlimited)
    }

    func receive(_ input: Input) -> Subscribers.Demand {
        print("Subscriber value \(input.url)")
        return .unlimited
    }

    func receive(completion: Subscribers.Completion<Failure>) {
        print("Subscriber completion \(completion)")
        self.subscription?.cancel()
        self.subscription = nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的 ```subscriber``` 将只打印输出值。 我们必须非常小心地进行内存管理。 收到的订阅将存储为强属性，但是当发布者发送完成事件时，我们应取消订阅并删除引用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当值到达时，我们必须返回需求。 在我们的情况下，这并不重要，因为我们只有1个传入值，但是如果你想限制发布者，则可以使用例如 ```.max（1）``` 作为需求。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下是使用 ```Swift 5.1``` 编写的所有 ```Combine订阅者``` 类型的快速示例代码：

``` Swift
class ViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!

    static let url = URL(string: "https://images.unsplash.com/photo-1554773228-1f38662139db")!

    static var defaultValue: (url: URL, response: URLResponse) = {
        let fallbackUrl = URL(fileURLWithPath: "fallback-image-path")
        let fallbackResponse = URLResponse(url: fallbackUrl, mimeType: "foo", expectedContentLength: 1, textEncodingName: "bar")
        return (url: fallbackUrl, response: fallbackResponse)
    }()

    @Published var value: (url: URL, response: URLResponse) = ViewController.defaultValue
    let subject = PassthroughSubject<(url: URL, response: URLResponse), URLError>()
    let subscriber = DownloadTaskSubscriber()

    var sinkOperation: AnyCancellable?

    var assignOperation: AnyCancellable?
    var assignSinkOperation: AnyCancellable?

    var subjectOperation: AnyCancellable?
    var subjectSinkOperation: AnyCancellable?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.sinkExample()
        self.assignExample()
        self.subjectExample()
        self.subscriberExample()
    }

    func sinkExample() {
        self.sinkOperation = URLSession.shared
            .downloadTaskPublisher(for: ViewController.url)
            .sink(receiveCompletion: { completion in
                print("Sink completion: \(completion)")
            }) { value in
                print("Sink value: \(value.url)")
            }
    }

    func assignExample() {
        self.assignSinkOperation = self.$value.sink { value in
            print("Assign value: \(value.url)")
        }

        self.assignOperation = URLSession.shared
            .downloadTaskPublisher(for: ViewController.url)
            .replaceError(with: ViewController.defaultValue)
            .assign(to: \.value, on: self)
    }

    func subjectExample() {
        self.subjectSinkOperation = self.subject.sink(receiveCompletion: { completion in
            print("Subject completion: \(completion)")
        }) { value in
            print("Subject value: \(value.url)")
        }

        self.subjectOperation = URLSession.shared
            .downloadTaskPublisher(for: ViewController.url)
            .subscribe(self.subject)
    }

    func subscriberExample() {
        URLSession.shared
            .downloadTaskPublisher(for: ViewController.url)
            .subscribe(DownloadTaskSubscriber())
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真的很好, 我们可以使用自定义的基于 ```Combine``` 的 ```URLSession扩展名``` 下载文件。

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要忘记 **存储** ```AnyCancellable指针``` ，否则在你可以从链/流中接收任何内容之前，将重新分配整个 ```Combine操作``` 。

## ***把所有的操作放在一起***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我保证可以使用图片下载器，所以让我解释一下整个流程。 我们有一个自定义的下载任务发布者，它将在本地保存我们的删除图像文件，并返回一个包含文件url和响应的元组。 ✅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我将简单地假设url后面有一个有效的图像，并且服务器返回了一个有效的响应，因此我将把发布者的输出映射到 ```UIImage对象``` 。 我还将用后备图像值替换任何类型的错误。 在实际的应用程序中，你应该始终对 ```URLResponse对象``` 进行一些额外的检查，但是为了简单起见，我暂时将其跳过。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后一件事是使用返回的图像更新我们的图像视图。 由于这是一个UI任务，它应该在主线程上发生，因此我们必须使用 ```receive（on :)``` 操作来切换上下文。 如果要在 ```Combine框架``` 中了解有关调度程序的更多信息，则应[***```阅读Vadim Bulavin的文章```***] (https://www.vadimbulavin.com/understanding-schedulers-in-swift-combine-framework/ "") 。 这是一颗宝石。 💎

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你未在某些 ```appleOS版本``` 上接收到值，则可能是因为在2019年12月前后，“合并”中发生了更改。你应检查以下链接： [***```link1```***](https://forums.swift.org/t/combine-receive-on-runloop-main-loses-sent-value-how-can-i-make-it-work/28631/47 "") ， [***```link2```***](https://heckj.github.io/swiftui-notes/#coreconcepts-lifecycle "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，这是可能的图像下载操作的最终Swift代码，简单而声明性。 👍

``` Swift
class ViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!

    var operation: AnyCancellable?

    override func viewDidLoad() {
        super.viewDidLoad()

        let url = URL(string: "https://images.unsplash.com/photo-1554773228-1f38662139db")!

        self.operation = URLSession.shared
            .downloadTaskPublisher(for: url)
            .map { UIImage(contentsOfFile: $0.url.path)! }
            .replaceError(with: UIImage(named: "fallback"))
            .receive(on: DispatchQueue.main)
            .assign(to: \.image, on: self.imageView)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们可以显示图像。 哎呀，但是等等...还有改进的余地。 缓存呢？ 再加上一个 ```6000x4000``` px的图片对于一个小显示器来说是巨大的，我们不应该首先调整图像的大小/缩放比例吗？ 如果我要使用列表中的图像会发生什么，我不应该在用户滚动时取消下载任务吗？ 😳

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也许我会在即将到来的教程中写这些问题，但是我认为这是结束本文的重点。 

