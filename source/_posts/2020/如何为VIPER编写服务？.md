---
title: 如何为VIPER编写服务？
description: 如何为VIPER编写服务？
permalink: 如何为VIPER编写服务？
copyright: ture
date: 2020-04-29 11:02:56
keywords: iOS,Swift,VIPER, 架构, architecture, 可重用
tags:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
categories:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并非所有内容都是 ```VIPER模块``` 。 在本文中，我将向你展示如何使用 ```Swift``` 将 ```服务层``` 与 ```模块``` 分离。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我可以想象你刚刚开始编写第一个 [***```VIPER模块```***](http://www.xuebaonline.com/iOS%20VIPER%E6%9E%B6%E6%9E%84%E6%B7%B1%E5%85%A5%E5%AE%9E%E8%B7%B5/ "") ，你可能会想：我应该把所有与用户界面都不相关的所有 ```网络通信``` ， ```CoreLocation``` ， ```CoreData``` 或 ```“任何服务”``` 代码放在哪里？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我通常将它们称为 API ， 位置 ， 存储即服务 ，因为它们为你的 模块 提供某种信息。 另外，它们可以封装基础层，为 VIPER模块 提供定义明确的 API接口 。 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，但是 ```interactors``` 呢？ 我不应该在这里实现这种东西吗？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好吧，我的答案是否定的，因为 ```服务``` 和 ```interactors``` 之间存在重大差异。 虽然服务只是一个“虚拟”包装器，但例如 一个 ```RESTful API``` ，另一个围绕 ```CoreData存储``` ， ```interactors``` 可以使用它们两者通过API请求某种数据，并使用存储服务将其保存在本地。  ```interactors``` 还可以在 ```数据传输对象（DTO）``` 和实体之间进行排序，过滤和转换，稍后将对其进行更多介绍。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，理论足够了，让我们创建一个新服务。

<!-- more -->

</br>

# **服务接口**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次如协议目标编程范式所示：            ```通过定义协议开始设计我们的系统。```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的第一个服务将是对所有服务而言非常简单的服务：

``` Swift
protocol ServiceInterface: class {
    func setup()
}

extension ServiceInterface {

    func setup() {
        // do nothing...
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在服务初始化过程中将为每个服务调用安装程序。 我们可以扩展基本服务，因此我们不必实现此方法，而仅当我们确实必须执行某些操作（例如设置 ```CoreData堆栈``` ）时才可以实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们可以提供我们的 ```API``` 服务，在这种情况下，我将实现一个虚拟端点，该端点使用带有 ```URLSession``` 的新 ```Combine框架``` 加载一些数据，但是当然你也可以使用完成块或 ```Promises``` 。

``` Swift
protocol ApiServiceInterface: ServiceInterface {

    func todos() -> AnyPublisher<[TodoObject], HTTP.Error>
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今，我正在为所有与网络相关的内容使用 ```HTTP``` 名称空间，例如请求方法，响应，错误等。可以根据需要随意扩展它。

``` Swift
enum HTTP {

    enum Method: String {
        case get
        //...
    }
    enum Error: LocalizedError {
        case invalidResponse
        case statusCode(Int)
        case unknown(Swift.Error)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，它非常轻巧，但是非常方便。 我们还没有谈论过 ```TodoObject``` 。 这将是我们的第一个 ```DTO``` 。 😱

</br>

# **数据传输对象**

> ```数据传输对象（DTO）是在进程之间承载数据的对象。 -维基百科```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，我们谈论的不是流程，而是 ```服务``` 和 [***```VIPER模块```***](http://www.xuebaonline.com/%E6%8E%8C%E6%8F%A1VIPER%E6%9E%B6%E6%9E%84/ "") 。 它们存在，因此我们可以将服务层与模块分离。  ```interactor``` 可以将 ```DTO``` 转换为 ```模块实体``` ，因此 ```VIPER模块``` 的所有其他部分将完全独立于服务。 值得一提的是， ```DTO``` 通常非常简单，在 ```RESTful API``` 服务中， ```DTO``` 可以实现 ```Codable``` 接口，仅此而已；对于 ```CoreData``` ， ```DTO``` 只能是 ```NSManagedObject``` 子类。

``` Swift
struct TodoObject: Codable {
    let id: Int
    let title: String
    let completed: Bool
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以使用简单的 ```DTO``` 包装请求参数。 例如，你可以使用可以包含一些过滤器或排序参数的 ```TodoRequestObject``` 。 你可能会注意到，我始终在 ```DTO``` 中使用对象后缀，这是个人喜好，但这有助于我将它们与实体区分开。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进一步介绍一下：你可以使用 ```SPM``` 将整个服务层作为封装的 ```Swift软件包发布``` ，从Xcode 11开始，这些软件包都受本机支持，因此，如果你仍在使用 ```CocoaPods``` ，则应考虑迁移到 ```Swift软件包管理器``` ，如下所示： 尽快。

</br>

# **实现 Service**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在开始构建真实的服务实现之前，最好有一个用于演示或测试目的的假冒产品。 我之所以称其为伪造的，是因为我们将返回固定数量的伪造数据，但这与我们的实际实现很接近。 如果我们的请求将包括过滤或排序，那么此伪造的实现服务应像最终响应那样对我们的响应进行过滤或排序。

``` Swift
final class FakeApiService: ApiServiceInterface {

    var delay: TimeInterval

    init(delay: TimeInterval = 1) {
        self.delay = delay
    }

    private func fakeRequest<T>(response: T) -> AnyPublisher<T, HTTP.Error> {
        return Future<T, HTTP.Error> { promise in
            promise(.success(response))
        }
        .delay(for: .init(self.delay), scheduler: RunLoop.main)
        .eraseToAnyPublisher()
    }

    func todos() -> AnyPublisher<[TodoObject], HTTP.Error> {
        let todos = [
            TodoObject(id: 1, title: "first", completed: false),
            TodoObject(id: 2, title: "second", completed: false),
            TodoObject(id: 3, title: "third", completed: false),
        ]
        return self.fakeRequest(response: todos)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想给假对象增加一些延迟，因为它可以帮助我测试 ```UI堆栈``` 。 [***```如何解决不良用户界面```***](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/ "") 你绝对应该阅读它，因为它很棒，它将帮助你设计更好的产品。 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;继续前进，这是该服务的实际“实际”实现：

``` Swift
final class MyApiService: ApiServiceInterface {

    let baseUrl: String

    init(baseUrl: String) {
        self.baseUrl = baseUrl
    }

    func todos() -> AnyPublisher<[TodoObject], HTTP.Error> {
        let url = URL(string: self.baseUrl + "todos")!
        var request = URLRequest(url: url)
        request.httpMethod = HTTP.Method.get.rawValue.uppercased()

        return URLSession.shared.dataTaskPublisher(for: request)
        .tryMap { data, response in
            guard let httpResponse = response as? HTTPURLResponse else {
                throw HTTP.Error.invalidResponse
            }
            guard httpResponse.statusCode == 200 else {
                throw HTTP.Error.statusCode(httpResponse.statusCode)
            }
            return data
        }
        .decode(type: [TodoObject].self, decoder: JSONDecoder())
        .mapError { error -> HTTP.Error in
            if let httpError = error as? HTTP.Error {
                return httpError
            }
            return HTTP.Error.unknown(error)
        }
        .eraseToAnyPublisher()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题是我们可以做得更好，但是为了简单起见，我将“一起”实现。 我不喜欢隐式解包的 ```url``` 和其他许多小细节，但是出于学习目的，这是完全可以的。 😛

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以现在最大的问题是，如何将事情放在一起？ 我的意思是我们有一个有效的服务实现，一个伪造的服务实现，但是如果不将伪造的代码运送到生产环境中，我们应该怎么把所有东西放到一个真正的Xcode项目中呢？

</br>

# **目标环境**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，你将具有现场生产环境，开发环境，也许是测试环境，以及用于QA，UAT或演示目的的其他环境。 对于这些环境，情况可能会有所不同，例如最终的 ```API URL ```或应用程序图标等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次，我将建立一个具有3个独立环境的项目：

+ Production
+ Development
+ Fake

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你从一个新项目开始，则默认情况下将有一个主要（非测试）目标。 你可以通过右键单击目标来复制它。 让我们做两次。

![Production](http://q8wtfza4q.bkt.clouddn.com/ws-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我通常为目标和方案名称加上后缀，但生产环境除外，在生产环境中，我使用“基本名称”而不使用``` -Production``` 后缀。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如你在屏幕截图上所看到的，我具有用于环境的基本文件夹结构。 每个目标都必须有一个单独的 ```Info.plist``` 文件，因此我将它们放入适当的 ```Assets``` 文件夹中。 ```FakeApiService.swift``` 只是伪造目标的一部分，其他所有文件都是共享的。 等等， ```ServiceBuilder``` 到底是什么？

</br>

# **依赖注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多种环境意味着我们必须为每个构建目标使用正确的服务（或配置）。 为此，我正在使用依赖项注入设计模式。 服务构建者只是有助于实现此目标的协议。 它定义了如何根据环境设置服务。 让我告诉你它是如何工作的。

``` Swift
protocol ServiceBuilderInterface {

    var api: ApiServiceInterface { get }

    func setup()
}

extension ServiceBuilderInterface {

    func setup() {
        self.api.setup()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，对于每个目标（环境），我都在实际的 ```ServiceBuilder.swift``` 文件中实现 ```ServiceBuilderInterface``` ，因此可以根据需要设置服务。

``` Swift
final class ServiceBuilder: ServiceBuilderInterface {

    lazy var api: ApiServiceInterface = {
        // this can be the url of the development server
        MyApiService(baseUrl: "https://jsonplaceholder.typicode.com")
    }()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我通常有一个基本的 ```service-interactor``` 类，它将在初始化过程中接收所有服务。 因此，我可以轻松地交换任何东西。

``` Swift
class ServiceInteractor {

    let services: ServiceBuilderInterface

    init(services: ServiceBuilderInterface = App.shared.services) {
        self.services = services
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DI很不错，但是我不想重复太多，这就是为什么要为此属性提供默认值的原因，该属性位于我唯一的 ```单例类App``` 中。 我知道，单例是邪恶的，但是我已经在这里有了一个反模式，所以再引入一个并没有关系，对吗？🤔

``` Swift
final class App {

    let services = ServiceBuilder()

    // MARK: - singleton

    static let shared = App()

    private init() {
        // do nothing...
    }

    // MARK: - api

    func setup() {
        self.services.setup()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要进行测试，此设置非常有用。 如果要测试一个 ```interactor``` ，则可以简单地模拟所有服务。 它也很干净，因为你可以像这样在 ```interactor``` 中访问方法：```self.services.api.todos（）``` 。

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以对模块应用相同的模式，例如，你可以拥有一个实现 ```ModuleBuilderInterface``` 的 ```ModuleBuilder``` ，并且所有 ```routers``` 都可以通过 ```DI``` 来拥有它们，因此你不必使用构建就从头开始初始化所有内容 模块的功能。 😉

</br>

# **对象，模型，实体，...是什么？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于命名约定的一点建议（我一直都将它们用作后缀）：

+ Object
+ Entity
+ Model

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我的字典中，对象始终是 ··· ，它仅存在于服务层中。 这是一个愚蠢的傻子，没有比提供一个不错的 ```Swiftish API``` 多的目的。 这意味着你不必处理 ```JSON对象``` 或类似的疯狂对象，但是你可以直接使用这些对象，通常很高兴拥有此功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```实体``` 与 ```VIPER模块``` 相关。 其目的是充当可在视图， ```interactor``` ， ```presenter``` ， ```router``` 之间传递的通信对象，或充当另一个模块的参数。 它可以封装模块所需的本地内容。 这意味着，如果服务层（可能是 ```DTO``` ）中的某些内容发生变化，则你的模块将能够工作，则只需对齐 ```interactor``` 即可。 😬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模型是指视图模型，它是我在 ```UICollectionView``` 类之上的基于 ```组件``` 的 ```UI``` 构建方法的一部分。 如果你想了解更多信息，则应该查看链接，其语法与 ```SwiftUI``` 非常相似，但显然不那么高级。 总之，模型始终具有呈现视图所需的数据，仅此而已。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我希望这篇小文章能帮助你更好地构建应用程序。 由于你必须设计应用程序，因此 ```VIPER``` 有时可能会遇到很多问题。 使用这类服务是分离所有不同的API连接，传感器等的好方法，最后请记住：
```并非所有内容都是 VIPER模块 。```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 [***```GitHub```***](https://github.com/theswiftdev/tutorials "") 上的下载本文的源文件。👏


