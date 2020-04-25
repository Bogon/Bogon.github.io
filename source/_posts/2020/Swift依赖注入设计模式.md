---
title: Swift依赖注入设计模式
permalink: Swift依赖注入设计模式
copyright: ture
date: 2020-04-25 16:52:06
keywords: iOS,UIKit,设计模式,抽象,Swift,依赖注入设计模式,重构, dependency injection design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [依赖注入设计模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用Swift学习依赖注入模式,使用DI编写松耦合代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我真的很喜欢James Shore的这句话：依赖注入意味着给对象一个实例变量，如此而已。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我看来，学习依赖注入要稍微复杂一点，但是如果你将问题弄清楚，你将意识到实现 [DI模式](http://www.xuebaonline.com/Swift%E5%85%B3%E4%BA%8EDependency%20Injection%20(DI)/ "DI模式") 就像给对象实例变量一样简单。 别开玩笑，这确实是理所当然的，但是许多开发人员使它过于复杂，并在错误的位置使用了注入。 💉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习DI并不是关于实现细节，而是关于你将如何使用该模式。 依赖项注入有四个小变化，让我们通过使用真实的示例进行遍历，这些示例将帮助你了解何时使用依赖项注入。 现在抓住键盘！ 💻

<!-- more -->

</br>

# **了解依赖注入(dependency injection)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我之前提到的，DI是一个简单概念，你实际上并不需要外部库或框架来开始使用它。假设你有两个单独的对象。对象A要使用对象B。向你的第一个依赖发送一个消息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果将对象B硬编码为对象A，那将是不好的，因为从那时起，如果没有B，就无法使用A。现在将其扩展到约100个对象级别。如果你对此问题不采取任何措施，那么你会毫无头绪。 🍝

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，主要目标是创建尽可能多的独立对象，或者创建一些松散耦合的代码，以提高可重用性和可测试性。关注分离和去耦也是在这里使用，因为在大多数情况下，你应该从字面上将逻辑功能分离为独立的对象。 🤐

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，从理论上讲，两个对象都应该只做一件特定的事情，并且它们之间的依赖关系通常是通过通用描述符（协议）实现的，而无需对具体实例进行硬编码。为此，使用依赖注入可以提高代码质量，因为可以在不更改其他对象实现的情况下替换依赖。这对于模拟，测试，重用等很有用。

</br>

# **如何在Swift中进行DI？**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 是一种了不起的编程语言，对协议和面向对象的原理都提供了出色的支持。 它也具有强大的功能，但是现在让我们忽略它。 依赖关系注入可以通过多种方式完成，但是在本教程中，我将只关注一些基本的，没有任何外部依赖关系注入的基础知识。 😂

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好吧，让我们从一个协议开始，但这只是因为 ```Swift``` 不会向公众公开 ```Encoder``` ，但是我们在演示中需要类似的东西。

``` Swift
protocol Encoder {
    func encode<T>(_ value: T) throws -> Data where T: Encodable
}
extension JSONEncoder: Encoder { }
extension PropertyListEncoder: Encoder { }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;属性列表和JSON编码器已经实现了此方法，我们只需要扩展对象以符合我们的全新协议即可。

# **Custructor 注入**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;依赖项注入的最常见形式是构造函数注入或基于初始化的注入。 主要的思路是通过初始化程序传递依赖关系，并将该对象存储在（私有只读/不可变）属性变量中。 这里的主要好处是，在对象创建之前，你的对象将具有所有依赖关系，以使其正常工作。 🔨

``` Swift
class Post: Encodable {

    var title: String
    var content: String

    private var encoder: Encoder

    private enum CodingKeys: String, CodingKey {
        case title
        case content
    }

    init(title: String, content: String, encoder: Encoder) {
        self.title = title
        self.content = content
        self.encoder = encoder
    }

    func encoded() throws -> Data {
        return try self.encoder.encode(self)
    }
}

let post = Post(title: "Hello DI!", content: "Constructor injection", encoder: JSONEncoder())

if let data = try? post.encoded(), let encoded = String(data: data, encoding: .utf8) {
    print(encoded)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以在构造函数中为编码器指定一个 ```defult``` 值，但是你应该担心恶意注入反模式！ 这意味着如果默认值来自另一个模块，则你的代码将与该模块紧密耦合。 所以请三思！ 🤔

</br>

# **属性注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时很难进行初始化初始化注入，因为你的类必须从系统类继承。 如果你必须使用视图或控制器，这将使过程变得非常困难。 对于这种情况，一个好的解决方案是使用基于属性的注入设计模式。 也许你不能完全控制初始化，但是你始终可以控制属性。 唯一的缺点是，你必须先检查该属性是否已显示（已设置），然后再进行任何操作。 🤫

``` Swift
class Post: Encodable {

    var title: String
    var content: String

    var encoder: Encoder?

    private enum CodingKeys: String, CodingKey {
        case title
        case content
    }

    init(title: String, content: String) {
        self.title = title
        self.content = content
    }

    func encoded() throws -> Data {
        guard let encoder = self.encoder else {
            fatalError("Encoding is only supported with a valid encoder object.")
        }
        return try encoder.encode(self)
    }
}

let post = Post(title: "Hello DI!", content: "Property injection")
post.encoder = JSONEncoder()

if let data = try? post.encoded(), let encoded = String(data: data, encoding: .utf8) {
    print(encoded)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```iOS``` 框架中有很多属性注入模式，委托模式通常是这样实现的。 另外一个很大的好处是这些属性可以是可变的，因此你可以即时替换它们。 ✈️

# **方法注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果只需要一次依赖关系，则实际上不需要将其存储为对象变量。 除了可以使用初始化参数或公开的可变属性，你还可以将依赖项作为方法参数传递，这种方法称为方法注入或基于参数的注入。 👍

``` Swift
class Post: Encodable {

    var title: String
    var content: String

    init(title: String, content: String) {
        self.title = title
        self.content = content
    }

    func encode(using encoder: Encoder) throws -> Data {
        return try encoder.encode(self)
    }
}

let post = Post(title: "Hello DI!", content: "Method injection")

if let data = try? post.encode(using: JSONEncoder()), let encoded = String(data: data, encoding: .utf8) {
    print(encoded)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每次调用此方法时，你的依赖关系可能会有所不同，不需要从该依赖关系中保留引用，因此将仅在本地方法范围内使用它。

</br>

# **上下文语境**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的最后一个模式非常危险。 它仅应用于与多个对象实例一起共享的通用依赖项。 日志，分析或缓存机制就是一个很好的例子。 🚧

``` Swift
class Post: Encodable {

    var title: String
    var content: String

    init(title: String, content: String) {
        self.title = title
        self.content = content
    }

    func encoded() throws -> Data {
        return try Post.encoder.encode(self)
    }


    private static var _encoder: Encoder = PropertyListEncoder()

    static func setEncoder(_ encoder: Encoder) {
        self._encoder = encoder
    }

    static var encoder: Encoder {
        return Post._encoder
    }
}

let post = Post(title: "Hello DI!", content: "Ambient context")
Post.setEncoder(JSONEncoder())

if let data = try? post.encoded(), let encoded = String(data: data, encoding: .utf8) {
    print(encoded)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上下文语境有一些缺点。 它可能很适合横切关注点，但会创建隐式依赖关系并表示全局可变状态。 强烈不建议这样做，你应该首先考虑其他依赖注入方式，但是有时它可能非常适合你。
 