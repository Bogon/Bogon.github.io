---
title: Swift单例模式
permalink: Swift单例模式
date: 2020-04-25 10:13:37
keywords: iOS,UIKit,设计模式,初始化,Swift,单例模式
copyright: ture
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [单例模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Singleto```n 是有史以来最受争议的设计模式。了解在 ```iOS``` 项目中使用 ```Swift``` 单例类的正确方法。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 每个人都在批评的单例模式，大多数人都将其称为反模式。但是单例模式到底是什么，为什么这么差呢？

<!-- more -->

# **Singleton 是什么?** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于简单，这是一种非常流行且普遍采用的模式。在整个应用程序生命周期中，单例类只能有一个实例。单个实例只能通过静态属性访问，并且初始化后的对象通常在全局范围内共享。这就像一个全局变量。 🌏

# **全局变量和状态**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单例模式的声誉很差，因为他们共享全局可变的状态。即使在经验丰富的开发人员圈子中，始终会担心使用 ```global``` 关键字。全局状态和变量是副作用的温床。可以从程序的任何位置访问全局变量，因此使用它们的类将变为有状态，不安全，紧密耦合且难以调试。出于明显的原因，通过这种方式与对象共享状态不是一个好习惯。 🤮

# **Singleton 的副作用**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 你应该尽可能确定范围和隔离变量，并最大程度地减少代码的状态性。这将消除副作用，使您的代码更安全地使用。考虑以下示例：

``` Swift
var global = 0

// method is written by someone else
func square(_ x: Int) -> Int {
    global = x
    return x * x
}

global = 1;
var result = square(5)
result += global //we assume that global is 1
print(result) //wtf 30 it should be 26
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```square``` 方法由其他人编写，由于某种原因，他们希望将输入存储在相同的全局变量中。现在，当您调用该函数时，除非您查看他的代码，否则您将一无所获。想象一下，在一个由多个代码作者编写的具有大量oop类的项目中的此类问题……GOOD LUCK! 🐛🐛🐛


# **单例对象的生命周期**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 单例创建一次并永久存在，它们的工作几乎就像全局变量一样，这就是为什么你必须格外小心。你应该仅使用在应用程序整个生命周期内都能维持的单例状态来管理这些状态。例如，特定于用户的会话通常是不好的做法，你应该重新考虑设计。另外，默认情况下，Swift也不是线程安全的，因此，如果你使用单例，则还必须为多线程问题做好准备。但是，如果它们因此造成问题，我们难道不应该完全避免它们吗？答案是不。 🚫

# **我们应该在什么时候使用单例类**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，```UIApplication``` 很可能是单例的，因为应该只有一个应用程序实例，并且该实例应该一直存在，直到你将其关闭为止。这就是单例的完美例子。另一个用例可以是 ```Logger``` 类。使用单例是安全的，因为无论记录器是否打开，你的应用程序的行为都不会有所不同。没有其他人会拥有或管理记录器，并且你只会将信息传递到记录器中，因此状态不会混乱。**结论：对于单例模式的使用，控制台或记录器类是完全可以接受的方案。** 👏

``` Swift
Console.default.notice("Hello I'm a singleton!")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apple 框架中有很多“单一”（并非一切都是真正的单例对象）用例，这是一个简短列表，因此您可以从中获得一些启发：

+ HTTPCookieStorage.shared
+ URLCredentialStorage.shared
+ URLSessionConfiguration.default
+ URLSession.shared
+ FileManager.default
+ Bundle.main
+ UserDefaults.standard
+ NotificationCenter.default
+ UIScreen.main
+ UIDevice.current
+ UIApplication.shared
+ MPMusicPlayerController.systemMusicPlayer
+ GKLocalPlayer.localPlayer（）
+ SKPaymentQueue.default（）
+ WCSession.default
+ CKContainer.default（）
+ etc

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到许多管理器类以单例形式实现，例如网络，位置或核心数据管理器，但是这些对象通常不应该是单例，仅仅是因为它可以是多个单例。 💩

**单例模式可能非常有用，但应谨慎使用。**

如果要将某个类变成单例，请问自己以下问题：

+ 还有其他任何东西拥有，管理或负责吗？
+ 是否将只有一个实例？
+ 它会是一个全局状态变量吗？
+ 我真的应该使用全局共享对象吗？
+ 是否应该贯穿整个应用程序生命周期？
+ 有其他选择吗？


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果以上所有内容的答案都是肯定的，那么您可以“安全地”使用单例或全局变量来存储数据。 🎉🎉🎉

# **如何使用Swift创建一个单例?**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中创建单例对象确实很容易，但是在应用此设计模式之前，请务必三思而后行，并考虑其他选择。

``` Swift
class Singleton {

    static let shared = Singleton()

    private init() {
        // don't forget to make this private
    }
}
let singleton = Singleton.shared
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今，我总是创建一个特定的单例对象，称为App。通过这种方式，我可以将与应用程序相关的全局状态属性连接到那个单例中。命名约定也有助于关联和理解其中的内容。 💡

# **如何消除单例?**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果还有其他方法，则应在大约90％的情况下使用该方法。单例模式最常见的替代解决方案是依赖注入。首先，你应该将单例方法抽象为协议，然后，如果仍然需要，可以将其用作默认实现。现在，您可以将单例或[重构的对象](http://www.xuebaonline.com/%E5%9C%A8Swift%E4%B8%AD%E9%87%8D%E6%9E%84%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E7%94%A8%E6%B3%95/ "重构对象")注入正确的位置。这样，你的代码就可以使用协议的模拟对象进行测试，甚至可以忽略单例本身。 😎

``` Swift 

typealias DataCompletionBlock = (Data?) -> Void

// 1. abstract away the required functions
protocol Session {
    func make(request: URLRequest, completionHandler: @escaping DataCompletionBlock)
}

// 2. make your "singleton" conform to the protocol
extension URLSession: Session {

    func make(request: URLRequest, completionHandler: @escaping DataCompletionBlock) {
        let task = self.dataTask(with: request) { data, _, _ in
            completionHandler(data)
        }
        task.resume()
    }
}

class ApiService {

    var session: Session

    // 3. using dependency injection with the "singleton" object
    init(session: Session = URLSession.shared) {
        self.session = session
    }

    func load(_ request: URLRequest, completionHandler: @escaping DataCompletionBlock) {
        self.session.make(request: request, completionHandler: completionHandler)
    }
}

// 4. create mock object

class MockedSession: Session {

    func make(request: URLRequest, completionHandler: @escaping DataCompletionBlock) {
        completionHandler("Mocked data response".data(using: .utf8))
    }
}

// 5. write your tests
func test() {
    let api = ApiService(session: MockedSession())
    let request = URLRequest(url: URL(string: "https://localhost/")!)
    api.load(request) { data in
        print(String(data: data!, encoding: .utf8)!)
    }
}
test()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像你看到的，单例模式非常容易实现，但是很难决定其应用程序形式。我并不是说这是一种反模式，因为显然不是这样，但是如果你打算使用单例模式，请当心。 😉