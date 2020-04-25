---
title: Swift抽象工厂设计模式
permalink: Swift抽象工厂设计模式
copyright: ture
date: 2020-04-25 15:26:13
keywords: iOS,UIKit,设计模式,抽象,Swift,抽象工厂设计模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [抽象工厂设计模]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们将工厂方法与简单的工厂外观结合起来：这是用Swift语言编写的抽象工厂设计模式！

[抽象工厂模式](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82 "抽象工厂模式")（英语：Abstract factory pattern）是一种软件开发设计模式。抽象工厂模式提供了一种方式，可以将一组具有同一主题的单独的工厂封装起来。在正常使用中，客户端程序需要创建抽象工厂的具体实现，然后使用抽象工厂作为接口来创建这一主题的具体对象。客户端程序不需要知道（或关心）它从这些内部的工厂方法中获得对象的具体类型，因为客户端程序仅使用这些对象的通用接口。抽象工厂模式将一组对象的实现细节与他们的一般使用分离开来。


<!-- more -->

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;举个例子来说，比如一个抽象工厂类叫做DocumentCreator（文档创建器），此类提供创建若干种产品的接口，包括createLetter()（创建信件）和createResume()（创建简历）。其中，createLetter()返回一个Letter（信件），createResume()返回一个Resume（简历）。系统中还有一些DocumentCreator的具体实现类，包括FancyDocumentCreator和ModernDocumentCreator。这两个类对DocumentCreator的两个方法分别有不同的实现，用来创建不同的“信件”和“简历”（用FancyDocumentCreator的实例可以创建FancyLetter和FancyResume，用ModernDocumentCreator的实例可以创建ModernLetter和ModernResume）。这些具体的“信件”和“简历”类均继承自抽象类，即Letter和Resume类。客户端需要创建“信件”或“简历”时，先要得到一个合适的DocumentCreator实例，然后调用它的方法。一个工厂中创建的每个对象都是同一个主题的（“fancy”或者“modern”）。客户端程序只需要知道得到的对象是“信件”或者“简历”，而不需要知道具体的主题，因此客户端程序从抽象工厂DocumentCreator中得到了Letter或Resume类的引用，而不是具体类的对象引用。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“工厂”是创建产品（对象）的地方，其目的是将产品的创建与产品的使用分离。抽象工厂模式的目的，是将若干抽象产品的接口与不同主题产品的具体实现分离开。这样就能在增加新的具体工厂的时候，不用修改引用抽象工厂的客户端代码。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用抽象工厂模式，能够在具体工厂变化的时候，不用修改使用工厂的客户端代码，甚至是在运行时。然而，使用这种模式或者相似的设计模式，可能给编写代码带来不必要的复杂性和额外的工作。正确使用设计模式能够抵消这样的“额外工作”。

# **Swift抽象工厂**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽象工厂模式提供了一种封装一组具有共同主题的单个工厂而无需指定其具体类的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，抽象工厂可以为你创建相关对象的族。 该实现通常结合简单的工厂和工厂方法原理。 单个对象是通过工厂方法创建的，而整个对象都包装在一个“抽象”的简单工厂中。 现在检查代码！ 😅

``` Swift
// service protocols
protocol ServiceFactory {
    func create() -> Service
}

protocol Service {
    var url: URL { get }
}

// staging
class StagingService: Service {
    var url: URL { return URL(string: "https://dev.localhost/")! }
}

class StagingServiceFactory: ServiceFactory {
    func create() -> Service {
        return StagingService()
    }
}

// production
class ProductionService: Service {
    var url: URL { return URL(string: "https://live.localhost/")! }
}

class ProductionServiceFactory: ServiceFactory {
    func create() -> Service {
        return ProductionService()
    }
}

// abstract factory
class AppServiceFactory: ServiceFactory {

    enum Environment {
        case production
        case staging
    }

    var env: Environment

    init(env: Environment) {
        self.env = env
    }

    func create() -> Service {
        switch self.env {
        case .production:
            return ProductionServiceFactory().create()
        case .staging:
            return StagingServiceFactory().create()
        }
    }
}

let factory = AppServiceFactory(env: .production)
let service = factory.create()
print(service.url)

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上代码看到的，使用抽象工厂将影响整个应用程序逻辑，而工厂方法仅对本地部分产生影响。 实现可能会有所不同，例如你也可以为抽象工厂创建一个独立的协议，但是在此示例中，我想使事情尽可能简单。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽象工厂通常用于实现对象独立性。 例如，如果你使用通用接口用 ```Swift``` 编写了多个不同的 ```SQL``` 数据库连接器（ ```PostgreSQL``` ，```MySQL``` 等），则可以随时使用此模式在它们之间轻松切换。 可以将类似的逻辑应用于具有类似情况的业务。 🤔