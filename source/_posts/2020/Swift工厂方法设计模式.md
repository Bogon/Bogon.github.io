---
title: Swift工厂方法设计模式
description: Swift工厂方法设计模式
permalink: Swift工厂方法设计模式
copyright: ture
keywords: 'iOS,UIKit,设计模式,构造函数,Swift,工厂方法设计模式,重构'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 工厂方法设计模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 56631
date: 2020-04-25 15:16:57
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工厂方法设计模式是一种专用的非静态方法，用于隐藏对象的创建逻辑。 让我们用Swift做吧！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工厂方法模式（英语：Factory method pattern）是一种实现了“工厂”概念的面向对象设计模式。就像其他创建型模式一样，它也是处理在不指定对象具体类型的情况下创建对象的问题。工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。


<!-- more -->

# **工厂方法只是一种非静态方法**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面对现实，这种模式只是通常由简单协议和类支持的一种方法。 从一个非常简单的示例开始：想象一个可以为您的服务端点创建基本URL的类。 我们称之为服务工厂。 😅

``` Swift
class ServiceFactory {
    func createProductionUrl() -> URL {
        return URL(string: "https://localhost/")!
    }
}
let factory = ServiceFactory()
factory.createProductionUrl()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会想，这甚至不接近工厂方法模式，但请稍候...让我们通过为服务类创建协议以及返回 ```URL``` 的协议，使事情变得有些复杂。 现在，我们可以将基本生产环境url协议实现为一个单独的类，并从生产服务工厂类返回该特定实例。 只需检查一下代码即可：

``` Swift
protocol ServiceFactory {
    func create() -> Service
}

protocol Service {
    var url: URL { get }
}

class ProductionService: Service {
    var url: URL { return URL(string: "https://localhost/")! }
}

class ProductionServiceFactory: ServiceFactory {
    func create() -> Service {
        return ProductionService()
    }
}

let factory = ProductionServiceFactory()
let request = factory.create()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么我们将所有逻辑分为两类和协议？ 请相信我去耦是一件好事。 从现在开始，你可以轻松编写带有虚拟 ```url``` 的模拟服务。 显然，这需要一个匹配的工厂类。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些模拟实例还将实现服务协议，因此你可以以相对轻松的方式添加新类型，而无需更改原始代码库。 工厂方法解决了简单工厂模式的一个特定问题。 如果列表（ ```switch-case``` 的列表）太长，那么只有一个工厂就很难维护新对象。 工厂方法通过引入多个工厂对象来解决此问题。