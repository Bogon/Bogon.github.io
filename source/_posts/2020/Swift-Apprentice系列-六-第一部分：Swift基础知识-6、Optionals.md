---
title: 'Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals'
description: 'Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals'
permalink: 'Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals'
copyright: ture
date: 2020-05-12 17:35:23
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Optionals
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Optionals]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

到目前为止，你处理的所有变量和常量都有具体的值。 当你有一个字符串变量（例如var name）时，它具有与之关联的字符串值，例如“ Hello Swift”。 它可能是一个空字符串，例如“”，但仍然可以引用一个值。

<!-- more -->

这就是Swift的内置安全功能之一：如果类型为Int或String，那么可以保证有一个实际的整数或字符串。

本章将向你介绍可选对象的概念，可选对象是一种特殊的Swift类型，它不仅可以表示值，还可以表示值的缺失。 在本章的最后，你将了解为什么需要可选选项以及如何安全地使用它们。

# **介绍nil**

有时，表示缺少值很有用。 设想一个场景，你需要参考一个人的身份信息； 你想存储此人的姓名，年龄和职业。 名称和年龄都是必须具有价值的东西-每个人都有。 但是并不是每个人都受雇，因此缺乏职业价值是你需要能够处理的。

在不知道选填项的情况下，这可能是你代表该人的姓名，年龄和职业的方式：

``` Swift
var name = "Hello Swift"
var age = 30
var occupation = "Software Developer & Author"
```

但是，如果我失业了怎么办？ 也许我已经中了彩票，想完全放弃工作（我希望！）。 在这种情况下，能够引用缺少值会很有用。

你为什么不能只使用一个空字符串？ 你可以，但是可选是更好的解决方案。 继续阅读以了解原因。

## ***前哨值***

**表示特殊条件（例如缺少值）的值称为前哨值，或者简称为特殊值**。 这就是上一个示例中的空字符串。

让我们看另一个例子。 假设你的代码向服务器请求了某些内容，然后使用变量来存储所有返回的错误代码：

``` Swift
var errorCode = 0
```

在成功的情况下，你表示没有零错误。这意味着0是一个前哨值。

就像占用空字符串一样，它可以工作，但是对于程序员而言，这可能会造成混乱，因为它会随意窃取值。 0实际上可能是有效的错误代码，或者如果服务器更改了响应方式，则可能在将来。无论哪种方式，如果不咨询有关特殊值的文档，你都无法完全确定服务器没有返回错误。

在这两个示例中，如果有一个特殊的类型可以表示缺少值，那就更好了。这样一来，当一个值存在而一个值不存在时，编译器便可以检查你了。

**Nil是缺少值的名称**，你将了解Swift如何以一种相当优雅的方式将这个概念直接整合到语言中。

其他一些编程语言仅包含哨兵值。有些对象（如Objective-C）具有nil的概念，但这仅是nil的同义词。这只是另一个哨兵价值。

Swift引入了一个全新的可选类型，该类型处理值可能为零的可能性。如果你要处理的是非可选类型，则可以保证它具有值，而不必担心具有特殊含义的前哨值。同样，如果使用的是可选类型，则知道必须处理nil情况。它消除了使用前哨值引入的歧义。

# **引入optionals**

可选选项是Swift既代表值又不存在值的解决方案。 允许使用可选值来保存值或nil。

可以将可选内容视为一个框：它要么只包含一个值，要么为空。 如果不包含值，则表示包含nil。 盒子本身总是存在的。 它总是在那里供你打开并查看内部。

![“playground”](http://q8wtfza4q.bkt.clouddn.com/sasb-o-stp1.png "")

另一方面，字符串或整数周围没有此框。 相反，总会有一个值，例如“ hello”或42。请记住，非可选类型必须保证具有实际值。

>注意：那些学习过物理的人可能现在正在思考薛定谔的猫。 可选方案有点类似，只是这不是生死攸关的问题！

你可以使用以下语法声明可选类型的变量：

``` Swift
var errorCode: Int?
```

此声明与标准声明之间的唯一区别是类型末尾的问号。 在这种情况下，errorCode是“可选的Int”。 这意味着变量本身就像一个包含Int或nil的盒子。

>注意：你可以在任何类型之后添加问号以创建可选类型。 据说此可选类型包装了常规的非可选类型。 例如，可选类型String？ 包装字符串类型。 换句话说：String类型的可选框？ 保存String或nil。\
另外，请注意必须如何使用类型注释使可选类型显式（在这里：Int？）。 不能从初始化值推断出可选类型，因为这些值是常规，非可选类型或nil，可以与任何可选类型一起使用。

设置值很简单。 你可以将其设置为Int，如下所示：

``` Swift
errorCode = 100
```

或者你可以将其设置为nil，如下所示：

``` Swift
errorCode = nil
```

此图可以帮助你直观地了解正在发生的事情：

![“playground”](http://q8wtfza4q.bkt.clouddn.com/sasb-o-stp2.png "")


可选框始终存在。 当你为变量分配100时，你将在该框中填充值。 当你为变量分配nil时，你将清空该框。

花几分钟考虑一下这个概念。 当你阅读本章的其余部分并开始使用可选选项时，框类比将是一个很大的帮助。

## ***解包可选***

可选参数的存在是件好事，但你可能想知道如何查看框内的内容并操纵其中包含的值。

看看打印出可选值时会发生什么：

``` Swift
var result: Int? = 30
print(result)
```

打印以下内容：

``` Swift
Optional(30)
```

>注意：你还将在此行上看到一条警告，提示“表达式从'Int？隐式强制'。 去任何”。 这是因为Swift会警告你在Any类型的位置使用了可选参数，因为这通常意味着你做错了什么。 要使警告静音，你可以将代码更改为print（结果为Any）。

那不是你真正想要的-尽管如果你考虑一下，那是有道理的。 你的代码已打印该框。 结果说：“结果是一个可选值，包含值30”。

若要查看可选类型与非可选类型的区别，请查看如果尝试使用结果（就像普通整数一样）会发生什么：

``` Swift
print(result + 1)
```

此代码触发错误：

``` Swift
Value of optional type 'Int?' must be unwrapped to a value of
type 'Int'
```

它不起作用，因为你正尝试向框中添加一个整数，而不是向框中的值添加一个整数，而是向框本身添加一个整数。 那没有道理。

## ***强制解包***

错误消息给出了解决方案的指示：它告诉你必须将可选包装拆开。 你需要从框中解开该值。 就像圣诞节！

让我们看看它是如何工作的。 请考虑以下声明：

``` Swift
var authorName: String? = "Matt Galloway"
var authorAge: Int? = 30
```

你可以使用两种不同的方法来解开这些可选选项。 第一个称为强制展开，你可以这样执行：

``` Swift
var unwrappedAuthorName = authorName!
print("Author is \(unwrappedAuthorName)")
```

此代码打印：

``` Swift
 Author is Matt Galloway
```

这就是你的期望。

变量名称后的感叹号告诉编译器你想在框内查看并取出该值。 结果是包装类型的值。 这意味着unwrappedAuthorName的类型为String，而不是String?。

使用“ force”一词和感叹号！ 可能会向你传达一种危险感，应该这样。

你应该谨慎使用“ force”。 要了解原因，请考虑当可选值不包含值时会发生什么情况：

``` Swift
authorName = nil
print("Author is \(authorName!)")
```

此代码产生以下错误，你将在控制台中看到该错误：

>发生错误是因为变量在尝试展开时不包含任何值。 更糟糕的是，你在运行时而不是在编译时收到此错误，这意味着你仅在碰巧使用无效输入执行此代码时才注意到该错误。

更糟糕的是，如果此代码位于应用程序内部，则运行时错误将导致应用程序崩溃！

你怎么能安全地玩呢？

要在此处停止运行时错误，你可以将检查可选包装的代码包装起来，如下所示：

``` Swift
if authorName != nil {
  print("Author is \(authorName!)")
} else {
    print("No author.") 
}
```

if语句检查可选值是否包含nil。 如果不是，则表示它包含你可以解开的值。

该代码现在是安全的，但仍然不够完美。 如果你依靠这项技术，则每次打开包装选件时都必须记住检查nil。 这将开始变得乏味，有一天你会忘记，并再次导致运行时错误。

然后回到绘图板！

## ***可选绑定***

Swift包含称为可选绑定的功能，该功能使你可以安全地访问可选内部的值。 你可以这样使用它：

``` Swift
if let unwrappedAuthorName = authorName {
    print("Author is \(unwrappedAuthorName)")
} else {
    print("No author.") 
}
```

你会立即注意到这里没有感叹号。 此可选绑定摆脱了可选类型。 如果可选的值包含一个值，则该值将被解包并存储在常数unwrappedAuthorName中或绑定到该常数。 然后，if语句执行第一段代码，你可以在其中安全地使用unwrappedAuthorName，因为它是常规的非可选String。

如果可选参数不包含值，则if语句执行else块。 在这种情况下，unwrappedAuthorName变量甚至不存在。

你可以看到可选绑定比强制展开安全得多，并且在可选选项可能为nil时应使用它。 仅当保证可选值包含值时，才需要强制展开。

由于命名很困难，因此通常的做法是为解包后的常数赋予与可选名称相同的名称（从而为该可选名称添加阴影）：

``` Swift
if let authorName = authorName {
  print("Author is \(authorName)")
} else {
    print("No author.") 
}
```

你甚至可以同时解开多个值，如下所示：

``` Swift
if let authorName = authorName, let authorAge = authorAge {
    print("The author is \(authorName) who is \(authorAge) years old.")
} else {
    print("No author or no age.") 
}
```

这段代码解包了两个值。 当两个可选参数都包含一个值时，它将仅执行语句的if部分。

你可以将多个可选内容与其他布尔检查结合使用。 例如：

``` Swift
if let authorName = authorName, let authorAge = authorAge, authorAge >= 40 {
    print("The author is \(authorName) who is \(authorAge) years old.")
} else {
    print("No author or no age or age less than 40.") 
}
```

在这里，你解开名称和年龄，并检查年龄是否大于或等于40。if语句中的表达式仅在name为非nil且age为非nil且age大于或大于or时才为true。 等于40。

现在，你知道如何安全地查看可选内容并提取其值（如果存在）。

# **介绍guard**

有时你想检查条件，仅在条件为真时才继续执行函数，例如使用可选参数时。 想象一下一个从网络中获取一些数据的函数。 如果网络中断，则获取可能会失败。 封装此行为的常用方法是使用可选参数，如果获取成功，则该参数将具有一个值，否则将为nil。

Swift具有有用而强大的功能，可以在以下情况下提供帮助：保护声明。 现在让我们用这个人为的例子来看看它：

``` Swift
func guardMyCastle(name: String?) {
  guard let castleName = name else {
    print("No castle!")
    return
    }
    // At this point, `castleName` is a non-optional String
  print("Your castle called \(castleName) was guarded!")
}
```

保护语句包括保护，后跟一个条件，该条件可以同时包含布尔表达式和可选绑定，其次是else，然后是代码块。如果条件为假，则else覆盖的代码块将执行。在条件为假的情况下执行的代码块必须返回。如果你不小心忘记了，编译器将阻止你-这是guard语句的真正美。你可能会听到程序员在谈论函数的“快乐之路”。这是你期望在大多数时间发生的路径。遵循的任何其他路径可能是由于错误或函数应返回比预期更早的其他原因所致。

Guard语句确保幸福的道路仍然在代码的左侧；这通常被认为是一件好事，因为它使代码更易于阅读和理解。另外，由于guard语句必须在false情况下返回，因此Swift编译器知道，如果条件为true，则在该函数的其余部分中，在guard语句的条件中检查的所有内容都必须为true。这意味着编译器可以进行某些优化。你无需了解这些优化的工作原理，甚至不必说它们是什么，因为Swift旨在为用户提供友好且快速的设计。

你可以简单地使用if-let绑定，并在nil为零的情况下返回。但是，当你使用Guard时，你明确表示如果Guard中的语句为false，则必须返回该值，因此编译器可以确保你已添加返回。编译器为你提供了一些不错的安全性！

让我们来看一个更“真实的世界”示例中的守卫。考虑以下功能：

``` Swift
func calculateNumberOfSides(shape: String) -> Int? { 
    switch shape {
        case "Triangle":
            return 3
        case "Square":
            return 4
        case "Rectangle":
            return 4
        case "Pentagon":
            return 5
        case "Hexagon":
            return 6
        default:
            return nil
    }
}
```

此函数采用形状名称，并返回该形状具有的边数。 如果形状未知，或者你传递的不是形状，则返回nil。

你可以像这样使用此功能：

``` Swift
func maybePrintSides(shape: String) {
    let sides = calculateNumberOfSides(shape: shape)
    if let sides = sides {
        print("A \(shape) has \(sides) sides.")
    } else {
        print("I don’t know the number of sides for \(shape).") 
    }
}
```

这没什么问题，它会起作用。

但是，可以使用如下保护语句编写相同的逻辑：

``` Swift
func maybePrintSides(shape: String) {
    guard let sides = calculateNumberOfSides(shape: shape) else {
        print("I don’t know the number of sides for \(shape).")
        return
    }
    print("A \(shape) has \(sides) sides.") 
}
```

当你的功能变得更加复杂时，Guard就会真正发挥作用。 你可能在功能顶部有多个保护装置，可以正确设置初始条件。 你会看到它在Swift代码中得到了广泛的使用。

## ***nil合并***

有一种非常方便的替代方法来解开可选项。 无论何时，只要你想从可选值中获取一个值，就可以使用它；对于nil，则使用默认值。 这称为nil合并。 运作方式如下：

``` Swift
var optionalInt: Int? = 10
var mustHaveResult = optionalInt ?? 0
```

nil合并发生在第二行，带有双问号（??），称为nil合并运算符。 这行意味着mustHaveResult将等于optionalInt内的值，或者如果optionalInt包含nil则为0。 在此的示例mustHaveResult包含具体的Int值10。

前面的代码等效于以下代码：

``` Swift
var optionalInt: Int? = 10
var mustHaveResult: Int
if let unwrapped = optionalInt {
    mustHaveResult = unwrapped
} else {
    mustHaveResult = 0
}
```

将optionalInt设置为nil，如下所示：

``` Swift
optionalInt = nil
mustHaveResult = optionalInt ?? 0
```

现在mustHaveResult等于0。

# **关键点**

+ nil表示没有值。
+ 非可选变量和常量永远不会为零。
+ 可选变量和常量类似于可以包含值或为空（零）的框。
+ 要使用可选内部的值，必须首先将其从可选中解包。
+ 解开可选值的最安全方法是使用可选绑定或零合并。 仅在适当时使用强制展开，因为这可能会产生运行时错误。
+ 你可以保护let绑定可选项。 如果绑定失败，编译器将强制你退出当前函数（或暂停执行）。 这样可以确保你的程序永远不会使用未初始化的值执行。


