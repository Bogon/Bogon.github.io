---
title: 'Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径'
description: 'Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径'
permalink: 'Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 运算符，下标和键路径
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 22809
date: 2020-06-21 12:41:23
---

你已经在第16章 [```“协议”```](https://www.xuebaonline.com/Swift%20Apprentice%E7%B3%BB%E5%88%97%20(%E5%8D%81%E5%85%AB)%20:%20%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%EF%BC%9A%E6%9E%84%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%20-%2016%E3%80%81Protocols/ "") 中学习了运算符重载的基础知识，在该章中，你实现了Equatable和Comparable协议，并向标准运算符添加了自定义行为。

但是，在某些情况下，重载标准运算符根本不够。 本章将向你展示如何从头开始创建自定义运算符并定义自己的下标，这是计算属性的一种特殊情况。 你将使用下标声明自己的快捷方式，以访问自定义类型的元素，并提供键路径作为对象属性的动态引用。

# 自定义运算符

当你要定义没有为其设计其他标准运算符的自定义行为时，可以声明自己的运算符。 例如，考虑求幂。 由于乘幂运算意味着重复乘法，因此你可能会重载乘法运算符，但这会造成混淆：运算符被设计为仅执行一种类型的运算，并且在这种情况下，你使用同一运算符来执行两种不同的操作。


<!-- more -->

因此，你将定义自己的指数运算符，首先仅针对特定类型，然后通过使其通用来对其进行扩展。 在此之前，你需要了解一些有关运算符类型的理论。 是时候潜水了！

## 运算符类型

运算符有三种主要类型：一元，二进制和三元运算符。

+ 一元运算符只能使用一个操作数，并且如果出现在操作数之后，则定义为后缀，如果出现在操作数之前，则定义为前缀。 逻辑非运算符是一元前缀运算符，强制解包运算符是一元后缀。 你在第3章“基本控制流”和第6章“可选”中了解了它们。

+ 二进制运算符可用于两个操作数，并且是不固定的，因为它们出现在两个操作数之间。 所有算术运算符（+，-，*，/，％），比较运算符（==，！=，<，>，<=，> =）和大多数逻辑运算符（&&，||）都是二进制中缀 。

+ 三元运算符使用三个操作数。 你已经在第3章“基本控制流”中了解了条件运算符。 这是Swift中唯一的三元运算符。

## 定义自己的运算符

让我们逐步完成从头开始创建新运算符的过程。 我们将创建一个求幂。 由于是自定义名称，因此你可以自己选择名称。 尽管最好使用许多其他Unicode字符，但通常最好坚持使用/，=，-，+，！，*，％，<，>，＆，|，^和？字符。 请记住，你将不得不经常键入它，因此击键次数越少越好。 由于乘幂是在引擎盖下反复乘法的，因此最好选择能反映这一点的东西。 我们将使用**，因为其他一些语言也使用该名称。

现在输入运算符的类型。 **运算符可用于两个操作数，因此它是一个中缀（二进制）运算符。

这是运算符签名的样子：

``` Swift
infix operator **
```

这里没什么好想的：运营商的名称和类型与operator关键字捆绑在一行代码中。 对于运算符的实现，一个简单的例子如下：

``` Swift
func **(base: Int, power: Int) -> Int { 
    precondition(power >= 2)
    var result = base
    for _ in 2...power {
        result *= base
    }
    return result
}
```

该函数接受Int类型的两个参数，并使用循环，范围和通配符将第一个参数提高为第二个参数的幂。 注意操作中的乘法赋值运算符。

>注意：你可以使用通配符模式来丢弃循环的值。 你将在第20章“模式匹配”中进一步了解它以及其他模式匹配技术。

现在测试你的全新运算符：

``` Swift
let base = 2
let exponent = 2
let result = base ** exponent
```

## 复合赋值运算符

大多数内置运算符都有相应的复合分配版本。 对幂运算符执行相同的操作：

``` Swift
infix operator **=
func **=(lhs: inout Int, rhs: Int) {
  lhs = lhs ** rhs
}
```

运算符的名称为** =，并且为前缀，就像之前创建的幂运算符一样。 它没有返回类型，而是在你要修改的操作数类型的前面使用inout关键字。 你已经在第5章“函数”中看到了inout的实际操作。 该函数直接更改inout参数，因为它是通过引用传递的。

这是运算符的工作方式：

``` Swift
var number = 2
number **= exponent
```

你的自定义运算符确实很酷，但它仅适用于Int。 是时候让它变得通用了！

## 泛型运算符

你希望幂运算符适用于所有类型的整数类型。 如下更新你的运算符实现：

``` Swift
func **<T: BinaryInteger>(base: T, power: Int) -> T { 
    precondition(power >= 2)
    var result = base
    for _ in 2...power {
        result *= base
    }
    return result
}
func **=<T: BinaryInteger>(lhs: inout T, rhs: Int) {
  lhs = lhs ** rhs
}
```

注意通用参数上的BinaryInteger类型约束。 这里需要此约束，因为函数主体中使用的* =运算符在任何类型T上均不可用。但是，在所有符合BinaryInteger协议的类型上都可用。 该函数的主体与以前相同，这是因为泛型运算符与其非泛型等效函数执行相同的操作。

你之前的代码仍然可以使用。 既然运算符是通用的，请使用Int以外的其他类型对其进行测试：

``` Swift
let unsignedBase: UInt = 2
let unsignedResult = unsignedBase ** exponent

let base8: Int8 = 2
let result8 = base8 ** exponent

let unsignedBase8: UInt8 = 2
let unsignedResult8 = unsignedBase8 ** exponent

let base16: Int16 = 2
let result16 = base16 ** exponent

let unsignedBase16: UInt16 = 2
let unsignedResult16 = unsignedBase16 ** exponent

let base32: Int32 = 2
let result32 = base32 ** exponent

let unsignedBase32: UInt32 = 2
let unsignedResult32 = unsignedBase32 ** exponent

let base64: Int64 = 2
let result64 = base64 ** exponent

let unsignedBase64: UInt64 = 2
let unsignedResult64 = unsignedBase64 ** exponent
```

幂运算符现在适用于所有整数类型：Int，UInt，Int8，UInt8，Int16，UInt16，Int32，UInt32，Int64和UInt64。

>注意：你也可以使用Foundation框架中的pow（_：_ :)函数进行幂运算，但不适用于所有上述类型。 但是，它确实处理负数和分数指数，并且像在朴素的实现中那样被写为O（log）而不是O（n）。

## 优先性和关联性

你闪亮的新自定义运算符似乎可以正常工作，但是如果在复杂的表达式中使用它，Swift将不知道如何处理：

``` Swift
2 * 2 ** 3 ** 2 // Does not compile!
```

为了理解此表达式，Swift需要以下有关你的运算符：

+ 优先级：乘法应该在求幂之前还是之后？
+ 关联性：应该从左到右还是从右到左进行连续的幂运算？

没有这些信息，让Swift理解你的代码的唯一方法是添加括号。

``` Swift
2 * (2 ** (3 ** 2))
```

这些括号告诉Swift，求幂应该在乘法之前，从右到左进行。 如果总是这样，则可以使用优先级组定义此行为。

将你的运算符定义更改为以下内容：

``` Swift
precedencegroup ExponentiationPrecedence {
  associativity: right
  higherThan: MultiplicationPrecedence
}
infix operator **: ExponentiationPrecedence
```

在这里，你正在为你的幂运算符创建一个优先级组，告诉Swift它是右关联的，并且比乘法具有更高的优先级。

Swift现在可以理解你的表情，即使没有括号也可以：

``` Swift
2 * 2 ** 3 ** 2
```
也许那是一件好事，也许不是。 你可以选择进行关联：
没有，并强制用户使用括号将内容明确显示。 自定义运算符就可以了。 是时候玩一些下标了！

# Subscripts

你已经在第7章“数组，字典，集合”中使用下标来检索数组和字典的元素。 现在是时候学会创建自己的下标了。 可以将它们视为重载[]运算符，以提供用于访问集合，类，结构或枚举的元素的快捷方式。

下标语法如下：

``` Swift
subscript(parameterList) -> ReturnType { 
    get {
        // return someValue of ReturnType
    }
    set(newValue) {
        // set someValue of ReturnType to newValue
    } 
}
```

如你所见，下标的行为类似于函数和计算的属性：

+ 下标的原型看起来像函数的签名：它具有参数列表和返回类型，但是你可以使用下标关键字代替func关键字和函数名称。 下标可能具有可变参数，但不能使用inout或默认参数，也不能引发错误。 你将在第21章“错误处理”中详细了解错误。

+ 下标的主体看起来像一个计算属性：它既有getter也有setter。 setter是可选的，因此下标可以是读写的也可以是只读的。 你可以省略设置者的newValue默认参数； 其类型与下标的返回类型相同。 仅在要更改其名称时才声明它。

理论足够多！ 将下标添加到定义的Person类中，如下所示：

``` Swift
class Person {
  let name: String
  let age: Int
    init(name: String, age: Int) { 
        self.name = name
        self.age = age 
    }
}
```

Person类具有两个存储的属性：String类型的名称和Int类型的age，以及用于启动操作的指定初始化程序。

现在假设我要立即创建自己的版本，如下所示：

``` Swift
let me = Person(name: "Cosmin", age: 33)
```

最好使用下标访问我的特征：

``` Swift
me["name"]
me["age"]
me["gender"]
```

如果运行此命令，Xcode将输出以下错误：

``` Swift
Type "Person" has no subscripts members
```

每当你使用方括号运算符时，你实际上都会在幕后调用下标。 默认情况下，你的班级没有定义任何下标，因此你必须自己声明它们。

将以下代码添加到具有扩展名的Person类中：

``` Swift
extension Person {
    subscript(key: String) -> String? {
        switch key {
            case "name":
                return name
            case "age":
                return "\(age)"
            default:
                return nil
        } 
    }
}
```

下标会根据你提供的密钥返回一个可选字符串：返回密钥的相应属性值，或者如果不使用有效密钥，则返回nil。 开关必须详尽无遗，因此你需要使用默认情况。

下标是只读的，因此它的整个主体都是吸气剂-你无需使用get关键字明确声明。

上面的测试代码现在可以使用：

``` Swift
me["name"]
me["age"]
me["gender"]
```

并输出：

``` Swift
Cosmin
33
nil
```

## 下标参数

即使在声明下标时不使用下划线，调用下标时也不必使用名称作为下标的参数。 如果要更具体地添加外部参数名称，例如：

``` Swift
 subscript(key key: String) -> String? {
  // original code
}
```

参数名称现在出现在下标调用中：

``` Swift
 me[key: "name"]
me[key: "age"]
me[key: "gender"]
```

如果要向下标添加更多上下文，请为外部参数使用描述性名称，而不要使用其本地对应名称：

``` Swift
subscript(property key: String) -> String? {
  // original code
}
me[property: "name"]
me[property: "age"]
me[property: "gender"]
```

## 静态下标

你可以在Swift中为自定义类型定义静态下标：

``` Swift
class File {
    let name: String
    
    init(name: String) {
        self.name = name 
    }

    // 1
    static subscript(key: String) -> String { 
        switch key {
            case "path":
                return "custom path"
            default:
                return "default path"
        }
    } 
}
// 2
File["path"]
File["PATH"]
```

这是全部的工作方式：

1.使用static创建静态下标，该下标返回默认或自定义路径
文件。

2.在文件而不是文件实例上调用下标。

## 动态成员查找

你可以使用动态成员查找为你的类型提供任意的点语法。 考虑以下：

``` Swift
// 1
@dynamicMemberLookup
class Instrument {
    let brand: String
    let year: Int
    private let details: [String: String]
    
    init(brand: String, year: Int, details: [String: String]) { 
        self.brand = brand
        self.year = year
        self.details = details
    }

    // 2
    subscript(dynamicMember key: String) -> String { 
        switch key {
            case "info":
                return "\(brand) made in \(year)."
            default:
                return details[key] ?? ""
        } 
    }
}
// 3
let instrument = Instrument(brand: "Roland", year: 2019,details: ["type": "acoustic","pitch": "C"])
instrument.info 
instrument.pitch
```

逐步执行上面的代码：

+ 将Instrument标记为@dynamicMemberLookup，以为其下标启用点语法。

+ 通过实现下标（dynamicMember :)使Instrument符合@dynamicMemberLookup。

+ 使用点语法调用以前实现的下标。 它返回详细信息的内容或有关Instrument的更多信息。

在此处使用```@dynamicMemberLookup```可以将详细信息字典的内容用作属性，从而提高了可读性。

但是请注意，编译器会在运行时评估动态成员调用，因此你将失去通常的编译时安全性。 例如，此编译过程没有任何抱怨：

``` Swift
guitar.dlfksdf // Returns ""
```

尽管可以将```@dynamicMemberLookup```用于其他目的，但其主要目的是支持与动态语言（如Python或Ruby）进行交互。 你应该谨慎使用它，因为它会阻止编译器检查其先前在编译时可以识别的整个错误类别。

``` Swift
instrument.brand // "Roland" 
instrument.year // 2019
```

派生类从其基类继承动态成员查找：

``` Swift
class Guitar: Instrument {}
let guitar = Guitar(brand: "Fender", year: 2019, details: ["type": "electric", "pitch": "C"])
guitar.info
```

你可以使用点语法来调用Guitar下标，因为Guitar是一种Instrument，并且Instrument实现@dynamicMemberLookup。

你也可以在Swift中为类下标使用动态成员查找。 它们的行为就像静态下标，你可以在子类中覆盖它们：

``` Swift
// 1
@dynamicMemberLookup
class Folder {
    let name: String

    init(name: String) {
        self.name = name 
    }
    
    // 2
    class subscript(dynamicMember key: String) -> String { 
        switch key {
            case "path":
                return "custom path"
            default:
                return "default path"
        } 
    }
}
// 3
Folder.path 
Folder.PATH
```

这是这里发生的事情：

+ 将Folder标记为@dynamicMemberLookup，以为自定义下标启用点语法。

+ 使用类和动态成员查找创建一个类下标，该下标返回Folder的默认或自定义路径。

+ 使用点语法调用Folder上的下标。

下标易于使用和实现。 它们生活在计算属性和方法之间。 但是，请注意不要过度使用它们。 与计算的属性和方法不同，下标没有名称来表明其意图。 下标几乎专门用于访问集合的元素，因此，不要将下标用于不相关且不直观的内容，以免混淆代码的读者！

# Keypaths

关键路径使你可以存储对属性的引用。 例如，这是你在我们的网站上建模教程的方式：

``` Swift
class Tutorial {
    let title: String
    let author: Person
    let details: (type: String, category: String)

    init(title: String, author: Person,
    details: (type: String, category: String)) {
        self.title = title 
        self.author = author 
        self.details = details
    } 
}
let tutorial = Tutorial(title: "Object Oriented Programming in Swift", author: me, details: (type: "Swift", category: "iOS"))
```

每个教程都有特定的标题，作者，类型和类别。 使用键路径，你可以获得这样的教程标题：

``` Swift
 let title = \Tutorial.title
let tutorialTitle = tutorial[keyPath: title]
```

首先，使用反斜杠为Tutorial类的title属性创建键路径，然后使用keyPath（_ :)下标访问其对应的数据。

关键路径可以访问多个级别的属性：

``` Swift
 let authorName = \Tutorial.author.name
var tutorialAuthor = tutorial[keyPath: authorName]
```

你还可以在Swift中为元组使用键路径：

``` Swift
let type = \Tutorial.details.type
let tutorialType = tutorial[keyPath: type]
let category = \Tutorial.details.category
let tutorialCategory = tutorial[keyPath: category]
```

在这里，你可以使用键路径从教程的详细信息中获取类型和类别。

## 附加键路径

你可以通过添加到现有的关键路径来创建新的关键路径，如下所示：

``` Swift
let authorPath = \Tutorial.author
let authorNamePath = authorPath.appending(path: \.name) 
tutorialAuthor = tutorial[keyPath: authorNamePath]
```

你可以使用appending（path :)方法将新的密钥路径添加到已经定义的authorPath中，并推断出密钥路径的基本类型。

## 设定属性

键路径可以更改属性值。 假设你设置了自己的自动点唱机来播放自己喜欢的歌曲：

``` Swift
class Jukebox {
    var song: String
    init(song: String) {
        self.song = song 
    }
}
let jukebox = Jukebox(song: "Nothing Else Matters")
```

你将歌曲属性声明为变量，因为你最好的朋友来拜访并想听她喜欢的歌曲：

``` Swift
let song = \Jukebox.song
jukebox[keyPath: song] = "Stairway to Heaven"
```

你使用歌曲的密钥路径为你的朋友更改歌曲，现在每个人都很高兴！

## 键路径成员查找

你可以对键路径使用动态成员查找：

``` Swift
// 1
struct Point {
    let x, y: Int 
}
// 2
@dynamicMemberLookup
struct Circle {
  let center: Point
  let radius: Int
    // 3
    subscript(dynamicMember keyPath: KeyPath<Point, Int>) -> Int {
        center[keyPath: keyPath]
    }
}
// 4
let center = Point(x: 1, y: 2)
let circle = Circle(center: center, radius: 1) 
circle.x
circle.y
```

此代码的作用如下：

+ 用x和y坐标声明一个Point类型。

+ 使用@dynamicMemberLookup注释Circle，以为其子脚本启用点语法。

+ 创建一个下标，该下标使用键路径从Circle访问中心属性。

+ 使用动态成员查找而不是圆形的呼叫中心属性关键路径。

如你所见，使用键路径比使用属性要复杂得多。 使用键路径，访问属性分为两步：

+ 首先，确定所需的属性并创建一个密钥路径。

+ 然后，使用keypath下标将此键路径传递给实例，以访问所选属性。

好处是你可以参数化代码中使用的属性。 无需对它们进行硬编码，你可以将它们存储在变量中作为键路径。 你甚至可以由用户决定要使用哪些属性！

# 关键点
+ 从头开始创建全新的运算符时，请记住自定义运算符的口头禅：功能强大，责任重大。 确保自定义运算符的额外认知开销会为自己带来报酬。

+ 为自定义运算符选择适当的类型：后缀，前缀或中缀。

+ 不要忘记定义任何相关的运算符，例如复合赋值运算符，用于自定义运算符。

+ 使用下标使方括号运算符重载类，结构和枚举。

+ 使用键路径创建对属性的动态引用。

+ 使用动态成员查找为下标和键路径提供点语法。
