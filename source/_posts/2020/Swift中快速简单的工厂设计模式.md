---
title: Swift中快速简单的工厂设计模式
permalink: Swift中快速简单的工厂设计模式
copyright: ture
date: 2020-04-25 13:15:16
keywords: iOS,UIKit,设计模式,构造函数,Swift,工厂模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [工厂模式]
    - [构造函数]
    - [静态工厂方法]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次，我们来讨论简单的工厂设计模式，该模式使用Swift以一种非常简单的方式封装对象创建。

# **使用 switch-case 实现简单的工厂模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种模式的目标是封装一些经常变化的东西。 想象一下应用程序的调色板。 你可能必须每天根据设计师的最新习惯来更改颜色。 如果你不得不手动搜索和替换每个单独的颜色代码实例，那将给你带来极大的不便。 因此，让我们在Swift中创建一个简单的工厂，该工厂可以根据给定的样式返回颜色。 🎩


<!-- more -->

``` Swift
class ColorFactory {

    enum Style {
        case text
        case background
    }

    func create(_ style: Style) -> UIColor {
        switch style {
        case .text:
            return .black
        case .background:
            return .white
        }
    }
}

let factory = ColorFactory()
let textColor = factory.create(.text)
let backgroundColor = factory.create(.background)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这真的很有用，尤其是涉及复杂的对象初始化过程时。 您还可以定义一个协议，并使用 ```switch-case``` 块返回实现所需接口的各种实例类型。 🚦

``` Swift
protocol Environment {
    var identifier: String { get }
}

class DevEnvironment: Environment {
    var identifier: String { return "dev" }
}

class LiveEnvironment: Environment {
    var identifier: String { return "live" }
}

class EnvironmentFactory {

    enum EnvType {
        case dev
        case live
    }

    func create(_ type: EnvType) -> Environment {
        switch type {
        case .dev:
            return DevEnvironment()
        case .live:
            return LiveEnvironment()
        }
    }
}

let factory = EnvironmentFactory()
let dev = factory.create(.dev)
print(dev.identifier)

```

因此，有关简单工厂设计模式的几件事要记住：

+ 通过分离初始化和使用逻辑，有助于松耦合
+ 它只是包装可以经常更改的东西的包装器
+ 可以使用枚举和开关盒在Swift中实现简单的工厂
+ 如果您计划返回不同的对象（POP🎉），请使用协议
+ 保持简单🏭

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种模式将创建与实际用法分开，并将职责移至特定角色，因此，如果发生某些变化，你只需要修改工厂即可。 你可以保留所有测试，而其他所有功能则完全不受影响。 强大而简单！ 💪

