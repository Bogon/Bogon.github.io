---
title: 'Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations'
description: 'Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations'
permalink: 'Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Enumerations
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 47820
date: 2020-05-22 16:50:49
---

作为开发人员的一天，你会意识到自己被笔记本电脑俘虏了。 决心打破常规，你将决定徒步跋涉长途跋涉。 当然，你需要一张将要遇到的地形图。 既然是21世纪，并且你精通Swift，那么你将完成一个最终项目：一个自定义地图应用。

在你进行编码时，你认为如果可以将基本方向表示为变量（北，南，东，西），那将会很不错。 但是用代码实现此目的的最佳方法是什么？

你可以将每个值表示为整数，如下所示：

+ North:1
+ South:2
+ East:3
+ West:4

你可以看到，如果你或你的用户碰巧以不同的顺序思考这些指示，那么如何迅速将其弄糊涂。 “ 3又意味着什么？” 为了缓解这种情况，你可以将值表示为字符串，如下所示：

+ North:"north" 
+ South:"south" 
+ East:"east"
+ West:"west"

<!-- more -->

但是，字符串的麻烦在于该值可以是任何字符串。如果你的应用收到“启动”而不是“北方”的通知，该怎么办？此外，输入“ nrth”这样的错字也很容易。

如果有一种方法可以创建一组相关的，经过编译器检查的值，那不是很好吗？如果你发现自己朝着...方向前进，则需要使用枚举。

**枚举是定义普通类型并允许你以类型安全的方式使用值的相关值的列表**。如果你的代码需要一个方向指令，并且你尝试传递诸如10.7之类的浮点数或诸如“ Souuth”之类的拼写错误的方向，则编译器将捕获你的错误。

除了基本指示外，其他相关值的好例子还有颜色（黑色，红色，蓝色），名片套装（心形，黑桃色，球棒，菱形）和角色（管理员，编辑者，读者）。

Swift中的枚举比其他语言（例如C或Objective-C）更强大。它们与你在前几章中了解的结构和类类型共享功能。枚举可以具有方法和计算的属性，同时充当便利的状态机。

在本章中，你将学习枚举的工作原理以及何时有用。作为奖励，你最终将发现什么是可选的。提示：它们是用枚举实现的！

# 你的第一个枚举

你的挑战：构建一个功能，该功能将根据月份确定学校的学期。 解决此问题的一种方法是使用字符串数组，并将学期与switch语句匹配：

``` Swift
let months = ["January", "February", "March", "April", "May",
              "June", "July", "August", "September", "October",
              "November", "December"]
func semester(for month: String) -> String {
    switch month {
        case "August", "September", "October", "November", "December":
            return "Autumn"
        case "January", "February", "March", "April", "May":
            return "Spring"
        default:
            return "Not in the school year"
    }
}
semester(for: "April") // Spring
```

在playground上运行此代码，你可以看到该函数正确返回“ Spring”。 但是正如我在简介中提到的那样，你可以轻松地键入一个字符串。 解决此问题的更好方法是枚举。

# 声明一个枚举

要声明枚举，请列出所有可能的成员值作为case子句：

``` Swift
enum Month {
  case january
  case february
  case march
  case april
  case may
  case june
  case july
  case august
  case september
  case october
  case november
  case december
}
```

此代码创建一个名为Month的新枚举，其中包含12个可能的成员值。 普遍接受的最佳做法是像属性一样，以一个小写的首字母开头每个成员值。

你可以通过将case子句折叠成一行来简化代码，每个值之间用逗号分隔：

``` Swift
enum Month {
  case january, february, march, april, may, june, july, august,
  september, october, november, december
}
```

看起来既时髦又简单。 到目前为止，一切都很好。

# 解密函数中的枚举

你可以重写确定学期的函数，以便它使用枚举值而不是字符串匹配。

``` Swift
func semester(for month: Month) -> String {
    switch month {
        case Month.august, Month.september, Month.october, Month.november, Month.december: 
            return "Autumn"
        case Month.january, Month.february, Month.march, Month.april, Month.may:
            return "Spring"
        default:
            return "Not in the school year"
    }
}
```

由于Swift是强类型的并且使用类型推断，因此可以通过在编译器已经知道类型的地方删除枚举名称来
简化semester（for :)。 保留点前缀，但丢失枚举名称，如以下switch语句内的情况所示：

``` Swift
func semester(for month: Month) -> String {
    switch month {
        case .august, .september, .october, .november, .december:
            return "Autumn"
        case .january, .february, .march, .april, .may:
            return "Spring"
        default:
            return "Not in the school year"
    }
}
```

另外，请记住，switch语句必须包含所有情况。 否则，编译器会警告你。 当案例模式为String元素时，你需要一个默认的case，因为不可能创建案例来匹配每个可能的String值。 但是，枚举可以匹配的值有限。 因此，如果对于枚举的每个成员值都有大小写，则可以安全地删除switch语句的默认大小写：

``` Swift
func semester(for month: Month) -> String {
    switch month {
        case .august, .september, .october, .november, .december:
            return "Autumn"
        case .january, .february, .march, .april, .may:
            return "Spring" 
        case .june, .july:
            return "Summer"
    }
}
```

更具可读性。 摆脱默认设置还有另一个巨大的好处。 如果在将来的更新中，有人在.Mone枚举中添加了.undecember或.duodecember，则编译器会自动将此标志和其他任何switch语句标记为非穷举性，从而使你可以处理此特定情况。

你可以在playground上测试此功能，如下所示：

``` Swift
var month = Month.april 
semester(for: month) // "Spring"

month = .september 
semester(for: month) // "Autumn"
```

month的变量声明使用完整的枚举类型和值。 在第二个分配中，可以使用速记.september，因为编译器已经知道类型。 最后，你将两个月都传递给semester（for :)，其中switch语句分别返回字符串“ Spring”和“ Autumn”。

# 代码完成可防止输入错误

使用枚举而不是字符串的另一个优点是，你的成员值永远不会出现错字。 Xcode提供代码完成功能：

![代码提示](http://cdn.xuebaonline.com/sasb-enum-stp1.png "")

而且，如果你确实错误拼写了一个枚举值，则编译器将抱怨一个错误，这样一来，即使你不认识自己的错误，也不会走得太远：

![代码提示](http://cdn.xuebaonline.com/sasb-enum-stp2.png "")

# Raw values

与C中的枚举值不同，默认情况下，Swift枚举值不由整数支持。 这意味着一月本身就是值。

但是你可以简单地通过在枚举声明中声明原始值来将原始值与每个枚举用例相关联：

``` Swift
enum Month: Int {
```

Swift枚举非常灵活：你可以指定其他原始值类型，例如String，Float或Character。 与C语言一样，如果你使用整数并且没有像在此处那样指定值，那么Swift将自动分配值0、1、2和更高。

在这种情况下，一月份的原始值最好是1，而不是0。要指定自己的原始值，请使用=赋值运算符：

``` Swift
enum Month: Int {
  case january = 1, february = 2, march = 3, april = 4, may = 5,
  june = 6, july = 7, august = 8, september = 9,
  october = 10, november = 11, december = 12
}
```

该代码为每个枚举情况分配一个整数值。

这里还有一个方便的捷径：如果你提供第一个值，编译器将自动增加值，而忽略其余的值：

``` Swift
enum Month: Int {
  case january = 1, february, march, april, may, june, july,
  august, september, october, november, december
}
```

你可以单独使用枚举值，如果不想，则永远不要引用原始值。 但是，如果你确实需要原始值，它们将在幕后出现！

# 获取原始值

具有原始值的枚举实例具有方便的rawValue属性。 设置好原始值后，你的枚举将具有一定的顺序感，并且你可以计算出冬季休假前的剩余月份数：

## 用原始值初始化

你可以使用原始值通过初始化程序实例化枚举值。 你可以使用init（rawValue :)进行此操作，但是如果以后尝试使用该值，则会收到错误消息：

``` Swift
let fifthMonth = Month(rawValue: 5)
monthsUntilWinterBreak(from: fifthMonth) // Error: not unwrapped
```

无法保证枚举中存在你提交的原始值，因此初始化程序会返回一个可选值。 带有rawValue：参数的枚举初始值设定项是可失败的初始值设定项，这意味着如果出现问题，初始值设定项将返回nil。

如果你在自己的项目中使用这些原始值初始值设定项，请记住它们会返回可选项。 如果不确定原始值是否正确，则需要检查nil或使用可选绑定。 在这种情况下，值5必须正确，因此强制打开可选的包装是适当的：

``` Swift
let fifthMonth = Month(rawValue: 5)!
monthsUntilWinterBreak(from: fifthMonth) // 7
```

这样更好！ 你使用了感叹号！来强制打开可选包装。 现在没有错误了，monthsUntilWinterBreak（from :)返回7。

# 字符串原始值

与增加Int原始值的便捷技巧类似，如果你指定String的原始值类型，则会获得另一种自动转换。 假设你正在构建一个新闻应用程序，其中每个部分都有标签。 每个部分都有一个图标。 图标是部署枚举的好机会，因为它们的性质有限，它们是：

``` Swift
// 1
enum Icon: String {
    case music
    case sports
    case weather
    var filename: String {
        // 2
        "\(rawValue).png"
    }
}
let icon = Icon.weather icon.filename // weather.png
```

这是这段代码中发生的事情：

+ 1.枚举使用String原始值类型。
+ 2.在枚举定义内调用rawValue等效于调用self.rawValue。 由于原始值是一个字符串，因此你可以使用它来构建文件名。

请注意，你不必为每个成员值指定一个字符串。 如果你将枚举的原始值类型设置为String而不自己指定任何原始值，则编译器将使用枚举用例名称作为原始值。 filename计算属性将为你生成一个图像资产名称。 现在，你可以在应用中获取并显示标签图标的图像。

接下来，让我们跳回到处理数字原始值，并学习如何将枚举用于银行业务。

## 无序原始值

整数原始值不必按递增顺序排列。 硬币是一个很好的用例：

``` Swift
enum Coin: Int {
  case penny = 1
  case nickel = 5
  case dime = 10
  case quarter = 25
}
```

你可以实例化此类型的值并照常访问其原始值：

``` Swift
let coin = Coin.quarter 
coin.rawValue // 25
```

# 关联值

关联值将Swift枚举的表现力提升到了一个新水平。 它们使你可以将自定义值（或多个值）与每个枚举case相关联。

以下是关联值的一些独特品质：

+ 1.每个枚举案例都有零个或多个关联值。
+ 2.每个枚举案例的关联值都有其自己的数据类型。
+ 3.你可以使用标签名称定义关联的值，就像命名函数参数一样。

枚举可以具有原始值或关联值，但不能同时具有两者。

在最后一个小型运动中，你定义了一个硬币钱包。 假设你将钱拿到银行存了。 然后，你可以去ATM取款：

``` Swift
var balance = 100
func withdraw(amount: Int) {
    balance -= amount 
}
```

自动柜员机绝不会让你提取的资金超过你的提款额，因此需要一种方法让你知道交易是否成功。 你可以将其实现为具有关联值的枚举：

每个案例都有一个必填的值。 对于成功案例，关联的Int将保持新余额； 对于错误情况，关联的String将具有某种错误消息。

然后，你可以重写withdraw函数以使用枚举案例：

``` Swift
func withdraw(amount: Int) -> WithdrawalResult { 
    if amount <= balance {
        balance -= amount
        return .success(newBalance: balance) 
    } else {
        return .error(message: "Not enough money!") 
    }
}
```

现在你可以执行提款并处理结果：

``` Swift
let result = withdraw(amount: 99)
switch result {
    case .success(let newBalance):
        print("Your new balance is: \(newBalance)") 
    case .error(let message):
        print(message)
}
```

注意你如何使用let绑定读取关联的值。 关联值不是你可以自由访问的属性，因此你需要像这样的绑定才能读取它们。 请记住，新绑定的常量newBalance和message对于切换条件而言是本地的。 尽管通常会这样做，但它们不必与关联值具有相同的名称。

你会在调试控制台中看到“你的新余额为：1”。

许多现实环境通过访问枚举中的关联值来起作用。 例如，Internet服务器经常使用枚举来区分请求类型：

``` Swift
enum HTTPMethod {
  case get
  case post(body: String)
}
```

在银行帐户示例中，你想在枚举中检查多个值。 在只有一个的地方，可以在if case或guard case语句中使用模式匹配。 运作方式如下：

``` Swift
let request = HTTPMethod.post(body: "Hi there") 
guard case .post(let body) = request else {
  fatalError("No message was posted")
}
print(body)
```

在此代码中，guard - case 检查以查看请求是否包含枚举后案例，如果是，则读取并绑定关联的值。

你还将看到在错误处理中使用的枚举。 银行帐户示例有多种情况，但只有一种通用错误情况以及关联的字符串。 在第21章“错误处理”中，你将了解如何设置具有多种情况的枚举以涵盖单个错误情况。

# 枚举作为状态机

枚举是状态机的一个示例，这意味着它一次只能是单个枚举值，而永远不能是单个枚举值。 友好的交通信号灯很好地说明了这一概念：

``` Swift
enum TrafficLight {
  case red, yellow, green
}
let trafficLight = TrafficLight.red
```

正常工作的交通信号灯永远不会同时变成红色和绿色。 你可以在其他现代设备中观察此状态机的行为，这些设备遵循预定的操作序列以响应一系列事件。 状态机的示例包括：

+ 当客户存入适当金额的钱时，自动售货机分发苏打水。
+ 电梯，可在下降之前使骑手从较高的楼层落下。
+ 密码锁需要按正确的顺序输入密码。

为了正常运行，这些设备取决于枚举的保证，即一次只能处于一种状态。

# 遍历所有Case

有时你想遍历枚举中的所有情况。 这很容易做到：

``` Swift
enum Pet: CaseIterable {
  case cat, dog, bird, turtle, fish, hamster
}
for pet in Pet.allCases {
    print(pet) 
}
```

遵循CaseIterable协议时，枚举将获得一个名为allCases的类方法，该方法可让你按声明的顺序遍历每种情况。 打印：

``` Swift
cat
dog
bird
turtle
fish
hamster
```

# 没有任何情况的枚举

在第12章“方法”中，你学习了如何为一组相关类型方法创建名称空间。 该章中的示例如下所示：

``` Swift
struct Math {
    static func factorial(of number: Int) -> Int {
        (1...number).reduce(1, *) 
    }
}
let factorial = Math.factorial(of: 6) // 720
```

你当时可能尚未意识到的一件事是，你可以创建Math的实例，如下所示：

``` Swift
let math = Math()
```

数学实例没有任何用途，因为它完全是空的。 它没有任何存储的属性。 在这种情况下，更好的设计实际上是将Math从结构转换为枚举：

``` Swift
enum Math {
    static func factorial(of number: Int) -> Int {
        (1...number).reduce(1, *) 
    }
}
let factorial = Math.factorial(of: 6) // 720
```

现在，如果你尝试创建实例，则编译器将给你一个错误：

``` Swift
let math = Math() // ERROR: No accessible initializers
```

没有案例的枚举有时称为 **uninhabited types** 或 **bottom types** 。

正如你在本章开始所学到的那样，枚举功能非常强大。 他们可以执行结构可以执行的大多数操作，包括使用自定义初始化程序，计算的属性和方法。 但是，为了创建枚举的实例，必须将成员值分配为状态。 如果没有成员值，那么你将无法创建实例。

在这种情况下（适合双关语），它非常适合你。 没有理由拥有Math的实例。 你应该做出设计决定，即永远不会存在该类型的实例。

这样可以防止将来的开发人员意外创建实例，并有助于按预期的方式强制使用它。 因此，总而言之，如果存在无价值的实例会造成混淆，请选择一种不区分大小写的枚举。

# Optionals

由于你已经完成了有关枚举的课程，因此现在是时候让你了解一个小秘密了。 Swift语言功能一直在你的鼻子下面一直使用枚举：可选！ 在本节中，你将探讨其基本机制。

可选的行为就像容器中什么都没有的容器：

``` Swift
var age: Int?
age = 17
age = nil
```

Optionals实际上是两种情况的枚举：

+ .none表示没有价值。
+ .some表示存在一个值，该值作为关联值附加到枚举案例中。

你已经看到，你可以通过带有switch语句的可选内容提取关联的值：

``` Swift
switch age { 
    case .none:
        print("No value") 
    case .some(let value):
        print("Got a value: \(value)")
}
```

你会在调试控制台中看到“ No value”消息。

尽管可选变量实际上是幕后的枚举，但是Swift使用可选绑定，？来隐藏实现细节。 和！ 运算符，以及诸如nil之类的关键字。

``` Swift
let optionalNil: Int? = .none 
optionalNil == nil // true 
optionalNil == .none // true
```

如果你在playground上尝试此操作，将会看到nil和.none是等效的。

在第17章“泛型”中，你将学到更多有关可选的基本机制的知识，包括如何编写自己的代码以使其与可选的功能相同。

现在你知道了可选选项的工作原理，下次需要值容器时，你将拥有正确的工具来完成这项工作。

# 关键点
+ **枚举**是定义通用类型的互斥情况的列表。
+ 枚举为老式整数值提供了类型安全的替代方法。
+ 你可以使用枚举来处理响应，存储状态和封装值。
+ CaseIterable使你可以循环浏览所有案例。
+ **Uninhabited enumerations** 的枚举可用作名称空间，并防止创建实例。


