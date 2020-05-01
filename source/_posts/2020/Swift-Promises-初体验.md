---
title: Swift Promises 初体验
permalink: Swift Promises 初体验
copyright: ture
date: 2020-04-30 20:44:45
keywords: iOS,Swift,Promises,iOS库
tags:
    - [iOS]
    - [Swift]
    - [Promises]
categories:
    - [iOS]
    - [Swift]
    - [Promises]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你想要了解的有关 ```futures``` 和 ```promises``` 的一切。 关于 ```Swift``` 中异步编程的初学者指南。

</br>

# **同步与异步执行**

> 编写异步代码是构建应用程序中最难的部分之一。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```同步执行``` 和 ```异步执行``` 之间到底有什么区别？ 好了，我已经在 [***```Dispatch框架教程```***](http://www.xuebaonline.com/%E6%B7%B1%E5%85%A5%E4%BA%86%E8%A7%A3Swift%E4%B8%AD%E7%9A%84Grand%20Central%20Dispatch/ "") 中对此进行了解释，但是这里有一个简短的回顾。 同步函数通常会阻塞当前线程，并在以后返回一些值。 一个异步函数将立即返回并将结果值传递给完成处理程序。 你可以使用GCD框架在给定队列上异步执行任务同步。 让我给你看一个简单的例子：

<!-- more -->

``` Swift
func aBlockingFunction() -> String {
    sleep(.random(in: 1...3))
    return "Hello world!"
}

func syncMethod() -> String {
    return aBlockingFunction()
}

func asyncMethod(completion block: @escaping ((String) -> Void)) {
    DispatchQueue.global(qos: .background).async {
        block(aBlockingFunction())
    }
}

print(syncMethod())
print("sync method returned")
asyncMethod { value in
    print(value)
}
print("async method returned")

// "Hello world!"
// "sync method returned"
// "async method returned"
// "Hello world!"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见， ```async方法``` 完全在后台队列上运行，该函数不会阻塞当前线程。 这就是为什么异步方法可以立即返回的原因，因此你将始终在最后一个 ```hello``` 输出之前看到 ```return``` 输出。 存储异步方法的完成块以供以后执行，这就是为什么可以在原始函数返回之后以回调方式返回字符串值的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不使用其他队列会怎样？ 完成块将在当前队列上执行，因此你的函数将对其进行阻止。 这将有点异步，但是实际上你只是将返回值移到完成块中。

``` Swift
func syncMethod() -> String {
    return "Hello world!"
}

func fakeAsyncMethod(completion block: ((String) -> Void)) {
    block("Hello world!")
}

print(syncMethod())
print("sync method returned")
fakeAsyncMethod { value in
    print(value)
}
print("fake async method returned")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本文中，我真的不想集中讨论完成块，这可能是一篇独立的文章，但是如果你在并发模型上仍然遇到问题，或者你不了解任务和线程的工作方式，则应该阅读一下 很少研究。

</br>

# **回调地狱**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;异步代码有什么问题？ 还是编写异步代码的结果是什么？ 简短的答案是，你必须使用完成块（回调）才能处理将来的结果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更详细的答案是管理回调很糟糕。 你必须要小心，因为在一个块中你可以轻松地创建一个 ```retain-cycle``` ，因此你必须将变量作为弱引用或 ```unowned references``` 来传递。 另外，如果必须使用多个异步方法，那将是非常的痛苦。 🐴

``` Swift
struct Todo: Codable {
    let id: Int
    let title: String
    let completed: Bool
}

let url = URL(string: "https://jsonplaceholder.typicode.com/todos")!

URLSession.shared.dataTask(with: url) { data, response, error in
    if let error = error {
        fatalError("Network error: " + error.localizedDescription)
    }
    guard let response = response as? HTTPURLResponse else {
        fatalError("Not a HTTP response")
    }
    guard response.statusCode <= 200, response.statusCode > 300 else {
        fatalError("Invalid HTTP status code")
    }
    guard let data = data else {
        fatalError("No HTTP data")
    }

    do {
        let todos = try JSONDecoder().decode([Todo].self, from: data)
        print(todos)
    }
    catch {
        fatalError("JSON decoder error: " + error.localizedDescription)
    }
}.resume()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码段是一个简单的 ```异步HTTP数据请求``` 。 如你所见，其中涉及许多可选值，而且，如果要使用自己的类型，则必须执行一些 ```JSON解析``` 。 这只是一个请求，但是如果你需要从第一个元素中获取一些详细信息怎么办？ 让我们写一个助手！ ＃没有🤫

``` Swift
func request(_ url: URL, completion: @escaping ((Data) -> Void)) {
    URLSession.shared.dataTask(with: url) { data, response, error in
        if let error = error {
            fatalError("Network error: " + error.localizedDescription)
        }
        guard let response = response as? HTTPURLResponse else {
            fatalError("Not a HTTP response")
        }
        guard response.statusCode <= 200, response.statusCode > 300 else {
            fatalError("Invalid HTTP status code")
        }
        guard let data = data else {
            fatalError("No HTTP data")
        }
        completion(data)
    }.resume()
}


let url = URL(string: "https://jsonplaceholder.typicode.com/todos")!
request(url) { data in
    do {
        let todos = try JSONDecoder().decode([Todo].self, from: data)
        guard let first = todos.first else {
            return
        }
        let url = URL(string: "https://jsonplaceholder.typicode.com/todos/\(first.id)")!
        request(url) { data in
            do {
                let todo = try JSONDecoder().decode(Todo.self, from: data)
                print(todo)
            }
            catch {
                fatalError("JSON decoder error: " + error.localizedDescription)
            }
        }
    }
    catch {
        fatalError("JSON decoder error: " + error.localizedDescription)
    }
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看到？ 我的问题是我们正在慢慢地向兔子洞下移动。 现在，如果我们有第三个请求怎么办？ 一定不行！ 你必须将所有内容再嵌套一层，而且还必须传递必要的变量，例如。 ```weak``` 或 ```unowned``` 的视图控制器引用，因为在某个时间点，你必须根据结果更新整个UI。 必须有更好的方法来解决此问题。 🤔

</br>

# **Results vs futures vs promises?**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```result type```***](http://www.xuebaonline.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Result%20Type%E6%9D%A5%E5%A4%84%E7%90%86Swift%205%E4%B8%AD%E7%9A%84Errors%EF%BC%9F/ "") 是在 ```Swift 5``` 中引入的，它对于从公式中消除可选因子非常有用。 这意味着你不必处理可选的数据和可选的错误类型，但是结果就是其中之一。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Futures** 基本上代表着 ```Futures``` 的价值。 基础值可以是例如结果，并且应具有以下状态之一：

+ **pending** - 尚无价值，正在等待...
+ **fulfilled** - 成功，现在结果有价值
+ **rejected** - 失败并出现错误

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据定义， ```futures``` 不应由最终用户编写。 这意味着开发人员不应创建，实现或拒绝开发者。 但是，如果是这样，并且我们遵守规则，我们将如何制作 ```futures``` ？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们向他们保证。 你必须创建一个 ```Promise``` ，基本上是一个 ```futures``` 的包装，可以根据需要编写（实现，拒绝）或转换。 你不写 ```futures``` ，而是 ```Promise``` 。 但是，有些框架允许你取回 ```Promise``` 的 ```futures values``` ，但你根本不应该写那个 ```futures``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;足够的理论，你准备好爱上 ```Promise``` 了吗？ ❤️

</br>

# **Promises 101-入门指南**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们使用 [***```promise框架```***](https://github.com/CoreKit/Promises "") 重构前面的示例！

``` Swift
extension URLSession {

    enum HTTPError: LocalizedError {
        case invalidResponse
        case invalidStatusCode
        case noData
    }

    func dataTask(url: URL) -> Promise<Data> {
        return Promise<Data> { [unowned self] fulfill, reject in
            self.dataTask(with: url) { data, response, error in
                if let error = error {
                    reject(error)
                    return
                }
                guard let response = response as? HTTPURLResponse else {
                    reject(HTTPError.invalidResponse)
                    return
                }
                guard response.statusCode <= 200, response.statusCode > 300 else {
                    reject(HTTPError.invalidStatusCode)
                    return
                }
                guard let data = data else {
                    reject(HTTPError.noData)
                    return
                }
                fulfill(data)
            }.resume()
        }
    }
}

enum TodoError: LocalizedError {
    case missing
}

let url = URL(string: "https://jsonplaceholder.typicode.com/todos")!
URLSession.shared.dataTask(url: url)
.thenMap { data in
    return try JSONDecoder().decode([Todo].self, from: data)
}
.thenMap { todos -> Todo in
    guard let first = todos.first else {
        throw TodoError.missing
    }
    return first
}
.then { first in
    let url = URL(string: "https://jsonplaceholder.typicode.com/todos/\(first.id)")!
    return URLSession.shared.dataTask(url: url)
}
.thenMap { data in
    try JSONDecoder().decode(Todo.self, from: data)
}
.onSuccess { todo in
    print(todo)
}
.onFailure(queue: .main) { error in
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刚刚发生什么事了？ 好吧，我整理了在 ```URLSession对象``` 上实现的数据任务方法的扩展版本。 当然，如果你需要网络层的更多信息，则可以返回 ```HTTP结果``` 或仅返回状态代码以及数据。 你可以使用新的响应数据模型，甚至可以使用元组。 🤷‍♂️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，更有趣的部分是源的下半部分。 如你所见，我正在调用全新的 ```dataTask方法``` ，该方法返回 ```Promise <Data> ```对象。 正如我之前提到的，诺言可以转换。 还是我应该说： ```chained``` ？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Chaining promises``` 是优于回调的最大优势。 源代码看起来不再像是带有疯狂压痕和尝试捕获块的金字塔，而是更像是一连串的动作。 在每一步中，你都可以将先前的结果值转换为其他值。 如果你熟悉一些功能范例，那么将很容易理解以下内容：

+ **```thenMap```** 是 Promise 上的 map
+ **```then```** 基本上是 Promise 上的 flatMap 
+ **```onSuccess```** 仅当链中一切正常时才调用 onSuccess
+ **```onFailure```** 仅当链中发生某些错误时，才会调用onFailure
+ **```always```** 始终运行，无论结果如何

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要获取 ```主队列``` ，则可以像通过 ```onFailure``` 方法一样，通过队列参数进行传递，但是它适用于链中的每个元素。 以上这些功能只是冰山一角。 你还可以进入一条链， ```validate``` 结果，对其进行 ```timeout``` 或从失败的 ```promises``` 中 ```recover``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一个 ```Promises命名空间``` ，用于其他有用的方法，例如 ```zip``` ，它可以将 ```2、3或4种不同类型的promise``` 压缩在一起。 就像 ```Promises.all方法``` 一样， ```zip函数``` 会等到每个 ```promises``` 都完成后，再在一个块中为你提供所有 ```promises``` 的结果。

``` Swift
//executing same promises from the same kind, eg. [Promise<Data>]
Promises.all(promises)
.thenMap { arrayOfResults in
    // e.g. [Data]
}
//zipping together different kind of promises, eg. Proimse<[Todos]>, Promise<Todo>;
Promises.zip(promise1, promise2)
.thenMap { result1, result2 in
    //e.g [Todos], Todo
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还值得一提的是， ```Promises名称空间``` 下有一个 ```first``` ， ```delay``` ， ```timeout``` ， ```race``` ， ```wait``` 和 ```retry``` 方法。 也可以随意使用它们，有时它们也非常有用和强大。 💪

</br>

#  **Promises 有两个问题**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一个问题是 **取消** 。 你不能简单地取消 ```running Promises``` 。 这是可行的，但是它需要一些高级技术或某些说“ hacky”技术。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二个是 **异步/等待** 。 如果你想了解更多有关它的信息，则应该阅读Chis Lattner的[***```并发宣言```***](https://gist.github.com/lattner/31ed37682ef1576b16bca1432ea9f782 "")，因此我们只能说这两个关键字可以在代码中添加一些语法糖。 你将不再需要多余的行（然后是 ```thenMap``` ， ```onSuccess``` ， ```onFailure``` ），这样你就可以专注于代码了。 我真的希望我们能在 ```Swift 6 ```中得到类似的东西，这样我就可以永久丢弃 ```Promise库``` 。 哦，顺便说一句， **libraries** ...

</br>

# **Promise 值得一看**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这篇文章值得一读 [***```Promises In Swift```***]( "")。 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```github``` 上有很多 ```promise库``` ，但是如果我不得不从中选择（而不是我自己的实现），我肯定会选择以下其中一个：

+ [**```PromiseKit```**](https://github.com/mxcl/PromiseKit "") - 最受欢迎的一款
+ [**```Promises```**](https://github.com/google/promises "")  - Google的，功能丰富，也很受欢迎
+ [**```Promise```**](https://github.com/khanlou/promise "") - 小，但基于```JavaScript Promises/A+```规范
+ [**```SwiftNIO```**](https://github.com/apple/swift-nio "") - 不是一个实际的 ```Promise库``` ，但是它在后台有一个编写精美的基于事件循环的 ```Promise``` 实现

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专家提示：不要尝试制作自己的 **Promise框架** ，因为多线程非常困难，而且你也不想弄乱线程和锁。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Promise** 确实会上瘾。 一旦开始使用它们，就无法简单地返回并使用回调编写异步代码了。 😅

