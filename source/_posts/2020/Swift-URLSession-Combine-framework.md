---
title: Swift URLSession && Combine framework
permalink: Swift URLSession && Combine framework
copyright: ture
keywords: 'iOS,Swift,URLSession,Combine framework'
description: Swift URLSession && Combine framework
tags:
  - - iOS
  - - Swift
  - - Combine framework
categories:
  - - iOS
  - - Swift
  - - Combine framework
abbrlink: 23193
date: 2020-05-01 10:12:32
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用带有 ```基础网络``` 的全新 ```Combine框架``` 发出 ```HTTP请求``` 并解析响应。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这将是一个非常简短但希望非常有用的教程，它讲述了我如何开始利用 [***```Combine框架```***](https://heckj.github.io/swiftui-notes/ "") 来缓慢替换 ```Promise库``` 。 🤫

</br>

# **API & data structure**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们将需要某种API进行连接，像往常一样，我将对以下数据模型使用我最喜欢的 [***```JSONPlaceholder```***](https://jsonplaceholder.typicode.com/ "") 服务：

``` Swift
enum HTTPError: LocalizedError {
    case statusCode
    case post
}

struct Post: Codable {

    let id: Int
    let title: String
    let body: String
    let userId: Int
}

struct Todo: Codable {

    let id: Int
    let title: String
    let completed: Bool
    let userId: Int
}
```


<!-- more -->


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，没有什么特别的，只是一些基本的 ```Codable元素``` 和一个简单的错误，如果某件事失败，我们希望显示一些错误。 ❌

</br>

# **传统方式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中执行 ```HTTP请求``` 非常容易，你可以将内置的共享 ```URLSession``` 与简单的数据任务结合使用，然后响应一下。 当然，你可能想检查有效的状态码，如果一切正常，则可以使用 ```Foundation``` 中的 ```JSONDecoder``` 对象来 [***```解析响应JSON```***](http://www.xuebaonline.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Codable%20protocol%E5%9C%A8Swift%E4%B8%AD%E8%A7%A3%E6%9E%90JSON%EF%BC%9F/ "") 。

<!-- more -->

``` Swift
//somewhere in viewDidLoad
let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!

let task = URLSession.shared.dataTask(with: url) { data, response, error in
    if let error = error {
        fatalError("Error: \(error.localizedDescription)")
    }
    guard let response = response as? HTTPURLResponse, response.statusCode == 200 else {
        fatalError("Error: invalid HTTP response code")
    }
    guard let data = data else {
        fatalError("Error: missing response data")
    }

    do {
        let decoder = JSONDecoder()
        let posts = try decoder.decode([Post].self, from: data)
        print(posts.map { $0.title })
    }
    catch {
        print("Error: \(error.localizedDescription)")
    }
}
task.resume()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要忘记继续 **执行** 数据任务，否则该请求将根本不会触发。 🔥

</br>

# **Data tasks && the Combine framework**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在你可以看到传统的 ```“基于块”``` 的方法很好，但是我们可以在这里做些更好的事情吗？ 你知道吗，就像将整个事物描述成一个链条一样，就像我们过去对 ```Promises``` 所做的那样？ 从 ```iOS13``` 开始，借助惊人的 ```Combine框架``` ，你实际上可以超越！ 😃

***```我最喜欢组合的部分是内存管理和取消。```***

## ***合并数据任务***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，最常见的示例通常是以下示例：

``` Swift
private var cancellable: AnyCancellable?
//...
self.cancellable = URLSession.shared.dataTaskPublisher(for: url)
.map { $0.data }
.decode(type: [Post].self, decoder: JSONDecoder())
.replaceError(with: [])
.eraseToAnyPublisher()
.sink(receiveValue: { posts in
    print(posts.count)
})
//...
self.cancellable?.cancel()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我喜欢代码 ```“解释自己”``` 的方式：

+ 首先，我们为你的 Publisher 制作一个可取消的存储
+ 然后，我们创建一个全新的数据任务 publisher 对象
+ 映射响应，我们只关心数据部分（忽略错误）
+ 使用 JSONDecoder 解码数据的内容
+ 如果有任何问题，请使用一个空数组
+ 消除基本复杂性到简单的 AnyPublisher 
+ 使用接收器显示有关最终值的一些信息
+ 可选：你可以随时取消网络请求

## ***Error handling***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们介绍一些 [***```错误处理```***](https://medium.com/codequest/error-handling-in-combine-b6150a9fc2a7 "") ，因为我不喜欢隐藏错误的想法。 发出带有实际错误消息的警报要好得多，不是吗？ 🤔

``` Swift
enum HTTPError: LocalizedError {
    case statusCode
}

self.cancellable = URLSession.shared.dataTaskPublisher(for: url)
.tryMap { output in
    guard let response = output.response as? HTTPURLResponse, response.statusCode == 200 else {
        throw HTTPError.statusCode
    }
    return output.data
}
.decode(type: [Post].self, decoder: JSONDecoder())
.eraseToAnyPublisher()
.sink(receiveCompletion: { completion in
    switch completion {
    case .finished:
        break
    case .failure(let error):
        fatalError(error.localizedDescription)
    }
}, receiveValue: { posts in
    print(posts.count)
})
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，这次我们检查响应代码，如果出现问题，则抛出错误。 现在，由于 ```publisher``` 可能会导致错误状态，因此 ```sink``` 具有另一个变体，你可以在其中检查整个操作的结果，以便在那里进行自己的错误操作，例如显示警报。 🚨

## ***将结果分配给属性***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个常见的模式是将响应存储在视图控制器中某个位置的内部变量中。 你可以简单地通过使用 ```assign函数``` 来做到这一点。

``` Swift
class ViewController: UIViewController {

    private var cancellable: AnyCancellable?

    private var posts: [Post] = [] {
        didSet {
            print("posts --> \(self.posts.count)")
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!

        self.cancellable = URLSession.shared.dataTaskPublisher(for: url)
        .map { $0.data }
        .decode(type: [Post].self, decoder: JSONDecoder())
        .replaceError(with: [])
        .eraseToAnyPublisher()
        .assign(to: \.posts, on: self)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非常简单，你还可以使用 ```didSet``` 属性观察器来获取有关更改的通知。

## ***分组多个请求***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过去，发送多个请求是一个痛苦的过程。 现在我们有了 ```Compose``` ，使用 ```Publishers.Zip``` 可以轻松完成此任务。 你可以将多个请求合并在一起，然后等待它们都完成。 🤐

``` Swift
let url1 = URL(string: "https://jsonplaceholder.typicode.com/posts")!
let url2 = URL(string: "https://jsonplaceholder.typicode.com/todos")!

let publisher1 = URLSession.shared.dataTaskPublisher(for: url1)
.map { $0.data }
.decode(type: [Post].self, decoder: JSONDecoder())

let publisher2 = URLSession.shared.dataTaskPublisher(for: url2)
.map { $0.data }
.decode(type: [Todo].self, decoder: JSONDecoder())

self.cancellable = Publishers.Zip(publisher1, publisher2)
.eraseToAnyPublisher()
.catch { _ in
    Just(([], []))
}
.sink(receiveValue: { posts, todos in
    print(posts.count)
    print(todos.count)
})
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 现在我们和以前一样，只是将两个 ```publishers``` 压缩在一起。

## ***请求依赖***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 有时，你必须从给定的URL加载资源，然后使用另一个资源以其他方式扩展对象。 我说的是请求依赖，如果没有 ```Combine``` ，这将是一个很大的问题，但是现在你可以将两个 ```HTTP调用``` 与几行 ```Swift``` 代码链接在一起。 让我给你演示：

``` Swift
override func viewDidLoad() {
    super.viewDidLoad()

    let url1 = URL(string: "https://jsonplaceholder.typicode.com/posts")!

    self.cancellable = URLSession.shared.dataTaskPublisher(for: url1)
    .map { $0.data }
    .decode(type: [Post].self, decoder: JSONDecoder())
    .tryMap { posts in
        guard let id = posts.first?.id else {
            throw HTTPError.post
        }
        return id
    }
    .flatMap { id in
        return self.details(for: id)
    }
    .sink(receiveCompletion: { completion in

    }) { post in
        print(post.title)
    }
}

func details(for id: Int) -> AnyPublisher<Post, Error> {
    let url = URL(string: "https://jsonplaceholder.typicode.com/posts/\(id)")!
    return URLSession.shared.dataTaskPublisher(for: url)
        .mapError { $0 as Error }
        .map { $0.data }
        .decode(type: Post.self, decoder: JSONDecoder())
        .eraseToAnyPublisher()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的技巧是你可以将一个 ```publisher``` **```flatMap```** 映射到另一个 ```publisher``` 。

</br>

# 总结

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Combine``` 是一个了不起的框架，它可以完成很多工作，但是肯定有一些学习过程。 可悲的是，仅当你针对 ```iOS13或更高版本``` 时才可以使用它（这意味着你有一年的时间来学习框架的每一点），因此在采用这种新技术之前请三思而后行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还应该注意，当前没有 [***```上载和下载任务publisher```***]( "") ，但是你可以制定自己的解决方案，直到Apple正式发布某些东西。  🤞

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我真的很喜欢 ```Apple``` 如何实现 ··· 的一些概念，我迫不及待地希望 ```Combine``` 成为具有 ```Linux``` 支持的开源软件包。 ❤️


