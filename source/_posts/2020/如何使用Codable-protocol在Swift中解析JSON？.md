---
title: 如何使用Codable protocol在Swift中解析JSON？
permalink: 如何使用Codable protocol在Swift中解析JSON？
copyright: ture
date: 2020-04-30 09:05:14
keywords: iOS,Swift,架构,Codable protocol,可重用,解析JSON
tags:
    - [iOS]
    - [Swift]
    - [Codable protocol]
categories:
    - [iOS]
    - [Swift]
    - [Codable protocol]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本 ```Swift``` 教程中，我想为你提供一个有关使用 ```URLSession``` 和 ```Codable协议``` 获取和解析 ```JSON``` 数据的示例。

</br>

# **依存关系**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，有关依赖的几句话。 从 ```Swift 4``` 开始，你不需要任何依赖来解析 ```JSON数据``` ，因为内置的协议可以处理所有事情。 如果你仍在使用某种第三方，则为简单起见，一定要放弃它。 顺便说一句，在将任何外部依赖项添加到项目中之前，请三思。 🤔

<!-- more -->

</br>

# **Networking**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的任务仅仅是从 ```Web``` 上通过 ```HTTP``` 加载某种 ```JSON文档``` ，那么-你完全不需要 ```Alamofire``` 。 你可以使用内置的 ```URLSession类``` 进行请求，并获取所需的一切。  ```Foundation网络堆栈``` 已经是一个复杂且非常有用的堆栈，不要通过额外的层使事情变得更加复杂。

</br>

# **JSON 解析**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，在简短的介绍之后，让我们深入研究一下，并从 [***```JSONPlaceholder```***](https://jsonplaceholder.typicode.com/ "")   ```Web服务``` 获取一些 ```假JSON数据``` 。 我将把整个东西放在这里，你可以选择它，将其复制并粘贴到 ```Swift playground``` 文件中。

``` Swift
import Foundation
import PlaygroundSupport

PlaygroundPage.current.needsIndefiniteExecution = true

struct Post: Codable {

    enum CodingKeys: String, CodingKey {
        case id
        case title
        case body
        case userIdentifier = "userId"
    }

    let id: Int
    let title: String
    let body: String
    let userIdentifier: Int
}

let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!

URLSession.shared.dataTask(with: url) { data, response, error in
    if let error = error {
        print("Error: \(error.localizedDescription)")
        PlaygroundPage.current.finishExecution()
    }
    guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
        print("Error: invalid HTTP response code")
        PlaygroundPage.current.finishExecution()
    }
    guard let data = data else {
        print("Error: missing data")
        PlaygroundPage.current.finishExecution()
    }

    // feel free to uncomment this for debugging data
    // print(String(data: data, encoding: .utf8))

    do {
        let decoder = JSONDecoder()
        let posts = try decoder.decode([Post].self, from: data)

        print(posts.map { $0.title })
        PlaygroundPage.current.finishExecution()
    }
    catch {
        print("Error: \(error.localizedDescription)")
        PlaygroundPage.current.finishExecution()
    }
}.resume()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，从 ```Web``` 下载和 ```解析JSON``` 是一项非常简单的任务。 整个代码段约为 ```50行``` 。 当然，这只是概念上的证明，但是它有效，并且你不需要任何 ```依赖``` 。 它是 ```纯Swift``` 和 ```Foundation``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Codable协议``` -实际上是 ```Encodable＆Decodable协议``` 的复合类型别名-使在 ```Swift``` 中解析 ```JSON数据``` 的过程变得神奇。 💫

> **```提示:```**\
为了减少一些输入，你还可以直接使用这些 [***```amazing Xcode extensions```***](https://gitlab.com/-/users/terms?redirect=%2Ftheswiftdev%2Fawesome-xcode-extensions "") 从JSON结构生成最终对象。