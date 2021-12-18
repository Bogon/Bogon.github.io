---
title: Swift生成器模式
description: Swift生成器模式
permalink: Swift生成器模式
copyright: ture
keywords: 'iOS,UIKit,设计模式,初始化,Swift,生成器模式,重构'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 生成器模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 18636
date: 2020-04-25 11:24:29
---

> 了解如何在Swift中实现生成器模式，以隐藏创建具有许多单独属性的对象的复杂性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```iOS``` 开发中，会使用到很多设计模式，[生成器模式](https://zh.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E5%99%A8%E6%A8%A1%E5%BC%8F "生成器模式") 也叫构建器模式，我们也会经常用到。在以下的行文过程中均使用生成器模式来表述。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生成器模式（英：Builder Pattern）是一种设计模式，又名：建造模式，是一种对象构建模式。它可以将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象。

<!-- more -->

</br>

# **生成器模式如何工作？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生成器模式可以通过多种方式实现，但是如果你了解该模式的主要目标，那实际上就没有关系：

> **Builder设计模式的目的是将复杂对象的构造与其表示分开。**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，如果你有一个具有很多属性的对象，想隐藏初始化过程的复杂性，可以编写一个生成器并通过该生成器构造该对象。 它可以像控制整个构建过程的构建方法或外部类一样简单。 这完全取决于给定的环境。 🏗

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，我们对该设计模式有一个详细的认知，让我们来看一下使用实例和强大的 ```Swift``` 编程语言的生成器模式！ 💪

</br>

# **简单的 Emitter 生成器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SKEmitterNode``` 是一个很好的例子。 如果要创建自定义 ```Emitter``` 并以编程方式设置属性（通常用于 ```SpriteKit``` 游戏），则像这样的 ```Emitter``` 生成器类可能是一个合理的解决方案。 👾

``` Swift
class EmitterBuilder {

    func build() -> SKEmitterNode {
        let emitter = SKEmitterNode()
        emitter.particleTexture = SKTexture(imageNamed: "MyTexture")
        emitter.particleBirthRate = 100
        emitter.particleLifetime = 60
        emitter.particlePositionRange = CGVector(dx: 100, dy: 100)
        emitter.particleSpeed = 10
        emitter.particleColor = .red
        emitter.particleColorBlendFactor = 1
        return emitter
    }
}

EmitterBuilder().build()
```

</br>

# **简单的 theme 生成器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 让我们远离游戏，想象一下你正在为UIKit应用程序创建一个主题引擎，该引擎具有许多自定义字体，颜色等。生成器对于构造独立主题可能很有用。 🔨

``` Swift
struct Theme {
    let textColor: UIColor?
    let backgroundColor: UIColor?
}

class ThemeBuilder {

    enum Style {
        case light
        case dark
    }

    func build(_ style: Style) -> Theme {
        switch style {
        case .light:
            return Theme(textColor: .black, backgroundColor: .white)
        case .dark:
            return Theme(textColor: .white, backgroundColor: .black)
        }
    }
}

let builder = ThemeBuilder()
let light = builder.build(.light)
let dark = builder.build(.dark)
```

</br>

# **“Chained” URL构建器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用这种方法，你可以通过多种方法配置对象，并且每个方法都将返回相同的生成器对象。 这样，您可以链接配置，并在最后一步构建最终对象实例。 ⛓

``` Swift
class URLBuilder {

    private var components: URLComponents

    init() {
        self.components = URLComponents()
    }

    func set(scheme: String) -> URLBuilder {
        self.components.scheme = scheme
        return self
    }

    func set(host: String) -> URLBuilder {
        self.components.host = host
        return self
    }

    func set(port: Int) -> URLBuilder {
        self.components.port = port
        return self
    }

    func set(path: String) -> URLBuilder {
        var path = path
        if !path.hasPrefix("/") {
            path = "/" + path
        }
        self.components.path = path
        return self
    }

    func addQueryItem(name: String, value: String) -> URLBuilder  {
        if self.components.queryItems == nil {
            self.components.queryItems = []
        }
        self.components.queryItems?.append(URLQueryItem(name: name, value: value))
        return self
    }

    func build() -> URL? {
        return self.components.url
    }
}

let url = URLBuilder()
    .set(scheme: "https")
    .set(host: "localhost")
    .set(path: "api/v1")
    .addQueryItem(name: "sort", value: "name")
    .addQueryItem(name: "order", value: "asc")
    .build()
```

</br>

# **director 类的生成器模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 让我们认识一下 ```director``` 实例。 使构建器与确切的配置部分解耦。 因此，举例来说，你可以制作带有圆圈的游戏，但是后来如果你改变主意并想使用正方形，那相对容易。 你只需要创建一个新的生成器，其他所有内容都可以相同。 🎬

``` Swift
protocol NodeBuilder {
    var name: String { get set }
    var color: SKColor { get set }
    var size: CGFloat { get set }

    func build() -> SKShapeNode
}

protocol NodeDirector {
    var builder: NodeBuilder { get set }

    func build() -> SKShapeNode
}

class CircleNodeBuilder: NodeBuilder {
    var name: String = ""
    var color: SKColor = .clear
    var size: CGFloat = 0

    func build() -> SKShapeNode {
        let node = SKShapeNode(circleOfRadius: self.size)
        node.name = self.name
        node.fillColor = self.color
        return node
    }
}

class PlayerNodeDirector: NodeDirector {

    var builder: NodeBuilder

    init(builder: NodeBuilder) {
        self.builder = builder
    }

    func build() -> SKShapeNode {
        self.builder.name = "Hello"
        self.builder.size = 32
        self.builder.color = .red
        return self.builder.build()
    }
}

let builder = CircleNodeBuilder()
let director = PlayerNodeDirector(builder: builder)
let player = director.build()
```

# **基于Block的构建器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 一种更快捷的方法是使用 ```Block``` 而不是生成器类来配置对象。 当然，我们可以争论这是否仍然是生成器模式...😛

``` Swift
extension UILabel {

    static func build(block: ((UILabel) -> Void)) -> UILabel {
        let label = UILabel(frame: .zero)
        block(label)
        return label
    }
}

let label = UILabel.build { label in
    label.translatesAutoresizingMaskIntoConstraints = false
    label.text = "Hello wold!"
    label.font = UIFont.systemFont(ofSize: 12)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 请注意，生成器的实现可能会因具体实例而异。 有时，生成器模式与工厂模式结合在一起。 对此，几乎每个人都以不同的方式解释它，但是我认为这不是问题。 设计模式是精心设计的准则，但有时你必须这么做。



