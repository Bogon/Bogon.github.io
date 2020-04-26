---
title: Swift初始化模式
permalink: Swift初始化模式
copyright: ture
date: 2020-04-26 16:53:01
keywords: iOS,UIKit,设计模式,抽象,Swift,初始化模式,重构,init patterns
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [初始化模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终指南，如何在指定的，方便的，可使用的初始化工具等帮助下初始化你的 ```Swift``` 数据类型。

# **什么是初始化？**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [```初始化(英文: Initialization)```](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/Initialization.html#//apple_ref/doc/uid/TP40014097-CH18-ID203 "") 是准备使用的类，结构或枚举实例的过程。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个过程是通过初始化程序来处理的，初始化程序只是一种特殊的函数，通常为它们保留 ```init``` 关键字-因此您不必使用 ```func``` 关键字-通常您不会从初始化程序中返回任何值 。

<!-- more -->

</br>

# **初始化属性**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类和结构必须在创建该类或结构的实例时将其所有存储的属性设置为适当的初始值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先想象一个非常简单的结构，它只有两个属性。

``` Swift
struct Point {
    let x: Int
    let y: Int
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，上面的规则说我们必须初始化所有属性，因此让我们通过创建第一个 ```init``` 方法来实现。

``` Swift
struct Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像其他所有 ```Swift``` 函数一样。 现在我们可以创建我们的第一点了。

``` Swift
let p1 = Point(x: 1, y: 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，如果它们是变量而不是常量，则不必初始化隐式解包的可选属性和可选属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相同的逻辑适用于类，你可以通过将 ```struct``` 关键字更改为 ```class``` 来尝试。 但是结构是值类型，类是引用类型，这种差异将为我们提供两种类型的独特功能。

</br>

# **成员初始化（仅适用于结构）**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于 ```struct``` 的好处是，如果你不提供自己的 ```init``` 方法，则编译器将免费生成一个逐成员的 ```init``` 。 但是有很多问题。 生成的方法将包含除具有默认值的常量以外的所有属性（也为可选属性），并且它将具有内部访问类型，因此在其他模块中将不可见。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果任何结构的存储属性都是私有的，则该结构类型的默认成员初始化器被视为私有的。 同样，如果结构的任何存储属性是文件专用的，则初始化程序是文件专用的。 否则，初始化程序的访问级别为 ```internal``` 。

``` Swift
struct Point {
    let x: Int
    let y: Int
    var key: Int!
    let label: String? = "zero"
}
let p1 = Point(x: 0, y: 0, key: 0) // provided by the memberwise init
```

</br>

# **初始化失败**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时情况可能会出错，并且你不想创建坏的或无效的对象，例如，你想从有效点列表中过滤掉 ```origo``` 。

``` Swift
struct Point {
    let x: Int
    let y: Int

    init?(x: Int, y: Int) { // ? marks that this could fail
        if x == 0 && y == 0 {
            return nil
        }
        self.x = x
        self.y = y
    }
}
let p1 = Point(x: 0, y: 0) // nil
let p2 = Point(x: 1, y: 1) // valid point
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以通过 ```rawValues``` 初始化从 ```RawRepresentable``` 协议传递的枚举，这也是一个失败的初始化模式：

``` Swift
enum Color: String {
    case red
    case blue
    case yellow
}

let c1 = Color(rawValue: "orange") // nil, no such case
let c2 = Color(rawValue: "red") // .red
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以使用 ```init！``` 而不是``` init ?``` ，这将创建实例的隐式展开的可选类型。 请注意，类也可以具有失败的初始化器。


</br>

# **初始化纯Swift类**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你知道类是 ```Swift``` 编程语言中的本机类型。 你甚至不必导入 ```Foundation``` 框架即可创建全新的类。 这是由纯 ```Swift``` 类表示的完全相同的 ```Point``` 对象：

``` Swift
class Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}
let p1 = Point(x: 1, y: 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次我们不得不自己提供 ```init``` 方法，因为类没有成员初始化器。 它们是引用类型和继承逻辑，因此为它们生成成员初始化方法会更加复杂。

</br>

# **默认初始化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于 ```Swift``` 类，如果为所有存储的属性提供默认值，即使是可选属性，也将免费获得内部默认初始化程序。 实际上，它看起来像这样：

``` Swift
class Point {
    let x: Int = 1
    let y: Int = 1
}
let p1 = Point()
```

或者，如果我们遵循前面的示例：

``` Swift
class Point {
    let x: Int = 0
    let y: Int = 0
    var key: Int!
    let label: String? = "zero"
}
let p1 = Point()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这感觉太不对了。 为什么一个点具有键和标签属性？ 拥有一个可能具有额外属性的子对象会很好。 现在该通过类继承来重构此代码了。

</br>

# **指定的初始值设定项(Designated initializer)**

> ***提示：***\
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[```指定的初始化器(Designated initializer)```](http://www.codingexplorer.com/designated-initializers-convenience-initializers-swift/ "") 是类的主要初始化器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;换句话说，它没有用便捷关键字标记。 一个类也可以具有多个指定的初始化器。 因此，让我们继续我们的 ```Point``` 类，它将成为 ```NamedPoint``` 类的超类。

``` Swift
class Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) { // this is the designated initializer
        self.x = x
        self.y = y
    }
}

class NamedPoint: Point {

    let label: String?

    init(x: Int, y: Int, label: String?) { // designated
        self.label = label

        super.init(x: x, y: y)
    }

    init(point: Point, label: String?) { // also designated
        self.label = label
        super.init(x: point.x, y: point.y) // delegating up
    }
}

let p1 = NamedPoint(x: 1, y: 1, label: "first")
let p2 = NamedPoint(point: Point(x: 1, y: 1), label: "second")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定的初始值设定项必须始终从其直接超类调用指定的初始值设定项，因此你必须委托链。 但是首先，我们必须按照初始化的第一条规则来初始化所有属性。 因此，这意味着 ```Swift``` 语言具有两个阶段的初始化过程。

***两阶段初始化***

+ 每个存储的属性由引入它的类分配一个初始值。
+ 每个类都有机会自定义其存储的属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，根据这些规则，首先我们必须初始化 ```label``` 属性，然后进行委托，然后才有机会做其他事情。

</br>

# **便捷初始化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它们是用于简化初始化的初始化程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，例如在前面的例子中，如果我们可以为 ```x``` 和 ```y``` 等于数字的点设置一个初始化器。 在某些情况下，这将非常方便。

``` Swift
class Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
    convenience init(z: Int) {
        self.init(x: z, y: z) // we're calling the designated init
    }
}
let p1 = Point(z: 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;便捷初始化程序必须调用同一类中另一个 ```"convenience"``` 初始化程序，但是您不必写出关键字，实际上，这些 ```init``` 方法略有不同，你可以从一个到另一个进行调出，这就是为什么它看起来一样的原因。

``` Swift
struct Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }

    init(z: Int) {
        self.init(x: z, y: z)
    }
}

var p1 = Point(z: 1)
```

</br>

# **必需的初始值设定项(Required initializer)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你在类中标记了一个必需的初始化器，则所有直接类（必须在每个级别中都标记为必需）也必须实现该类的子类。

``` Swift
class Point {
    let x: Int
    let y: Int

    required init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

class NamedPoint: Point {
    let label: String?

    required init(x: Int, y: Int) {
        self.label = nil

        super.init(x: x, y: y)
    }
}

let p1 = NamedPoint(x: 1, y: 1)
```

</br>

# **覆盖初始化器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中，默认情况下不会为子类继承初始化器。 如果要为父类已经具有的子类提供相同的初始化程序，则必须使用 ```override``` 关键字。

``` Swift
class Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

class NamedPoint: Point {
    let label: String?

    override init(x: Int, y: Int) {
        self.label = nil

        super.init(x: x, y: y)
    }
}

let p1 = NamedPoint(x: 1, y: 1)
```

***初始化继承有两个规则，这是第一个...***

> ```提示:```\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的子类没有定义任何指定的初始值设定项，它将自动继承其所有超类指定的初始值设定项。

***...还有第二个：***
> ```提示:```\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的子类提供了其所有超类指定的初始值设定项的实现（通过按规则1继承它们，或通过提供自定义实现作为其定义的一部分），则它会自动继承所有超类便利的初始值设定项。


</br>

# **取消初始化**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在取消分配类实例之前，将立即调用反初始化程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，如果你想在类终止时进行一些手动清理，这就是你要寻找的方法。 在大多数情况下，你不必担心内存管理，因为 ```ARC``` 会为你完成。

``` Swift
class Point {
    let x: Int
    let y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }

    deinit {
        print("Point is clenaed up.")
    }
}

var p1: Point? = Point(x: 1, y: 1)
p1 = nil //deinit is being called
```





