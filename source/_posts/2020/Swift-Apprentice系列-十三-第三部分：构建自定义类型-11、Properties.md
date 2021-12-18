---
title: 'Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties'
description: 'Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties'
permalink: 'Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Properties
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Properties
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 60914
date: 2020-05-13 13:26:55
---

在上一章中，你了解到通过将相关的属性和行为分组为结构化类型，结构使你成为一名更高效的程序员。

在下面的示例中，Car结构具有两个属性： 都是存储字符串值的常量：

``` Swift
struct Car {
  let make: String
  let color: String
}
```

**这些值称为属性**。 Car的两个属性都是存储的属性，这意味着它们存储Car的每个实例的实际字符串值。 一些属性计算值而不是存储它们。

换句话说，**没有为它们分配实际的内存，而是在你每次访问它们时都会对其进行实时计算。 自然地，这些被称为计算属性**。

在本章中，你将学习这两种属性。 你还将学习使用属性的其他一些巧妙技巧，例如如何监**视属性值的更改**以及如何**延迟存储属性的初始化**。

<!-- more -->

# **属性存储**

正如你可能在引言中的示例中所猜到的那样，你已经熟悉存储属性的许多功能。

要进行审查，假设你正在构建通讯簿。 你需要的常用单位是联系人。

``` Swift
struct Contact {
  var fullName: String
  var emailAddress: String
}
```

你可以一遍又一遍地使用此结构，让你构建联系人数组，每个联系人都有不同的值。 你要存储的属性是个人的全名和电子邮件地址。

![playground](http://cdn.xuebaonline.com/sasb-p-stp1.png "")

这些是Contact结构的属性。 你为每种数据类型都提供一种数据类型，但是由于计划在初始化时分配值，因此选择不分配默认值。 毕竟，每个Contact实例的值都将不同。

请记住，Swift会根据你在结构中定义的属性为你自动创建一个初始化程序：

``` Swift
 var person = Contact(fullName: "Grace Murray", emailAddress: "grace@navy.mil")
```

你可以使用点符号来访问各个属性：

``` Swift
let name = person.fullName // Grace Murray
let email = person.emailAddress // grace@navy.mil
```

你可以为属性分配值，只要将它们定义为变量，并且父实例存储在变量中即可。 格蕾丝结婚后，她改了姓：

``` Swift
 person.fullName = "Grace Hopper"
let grace = person.fullName // Grace Hopper
```

如果你想防止值更改，则可以使用let将属性定义为常量，如下所示：

``` Swift
struct Contact {
  var fullName: String
  let emailAddress: String
}
// Error: cannot assign to a constant
person.emailAddress = "grace@gmail.com"
```

初始化此结构的实例后，你将无法更改emailAddress。


# **默认值**

如果可以对类型初始化时属性的值进行合理假设，则可以为该属性指定默认值。

为联系人创建默认名称或电子邮件地址没有任何意义，但可以想象一下，你添加了一个新的媒体资源关系来指明联系人是哪种类型：

``` Swift
struct Contact {
  var fullName: String
  let emailAddress: String
  var relationship = "Friend"
}
```

通过在关系的定义中分配值，可以为该属性提供默认值。 除非你将关系的值更改为“工作”或“家庭”之类的东西，否则创建的任何联系人都将自动成为朋友。

Swift将注意到你默认设置了哪些属性，并使用默认设置的参数创建了成员初始化程序，因此除非你愿意，否则无需指定它们。

``` Swift
 var person = Contact(fullName: "Grace Murray", emailAddress: "grace@navy.mil")
person.relationship // friend

 var boss = Contact(fullName: "Ray Wenderlich", emailAddress: "ray@raywenderlich.com", relationship: "Boss")
```

如果需要，你可以选择指定关系，否则将取值为“ Friend”。

# **计算属性**

存储的属性当然是最常见的，但是也有一些要计算的属性，这仅表示它们在返回值之前执行计算。

**虽然存储的属性可以是常量或变量**，但必须将计算的属性定义为变量。

计算属性还必须包括类型，因为编译器需要知道作为返回值的期望值。

![playground](http://cdn.xuebaonline.com/sasb-p-stp2.png "")

电视的测量值是计算属性的理想用例。 电视屏幕尺寸的行业定义不是屏幕的高度或宽度，而是对角线尺寸：

``` Swift
struct TV {
  var height: Double
  var width: Double
  // 1
  var diagonal: Int {
    // 2
    let result = (height * height + width * width).squareRoot().rounded()
    // 3
    return Int(result)
  }
}
``` 

让我们一次一步地通过这段代码：

+ 1.你将Int类型用于对角线属性。尽管高度和宽度均为Double，但电视尺寸通常会标榜为不错的整数，例如50英寸而不是49.52英寸。你可以使用大括号将计算所得属性的计算括起来，而不是像通常为存储的属性分配值那样分配赋值运算符=。

+ 2.正如你在本书前面所看到的，几何图形可以派上用场；一旦有了宽度和高度，就可以使用勾股定理来计算对角线的长度。你可以使用四舍五入的方法使用标准规则对值进行四舍五入：如果十进制为0.5或更大，则将其四舍五入；否则，将四舍五入。否则，它会四舍五入。

+ 3.现在你已经获得了适当的四舍五入数字，你可以将其作为整数返回。如果不先四舍五入就将结果直接转换为Int，结果将被截断，因此109.99将变成109。

计算属性不存储任何值；它们根据计算返回值。从结构外部，可以像存储属性一样访问计算属性。
使用电视尺寸计算进行测试：

``` Swift
 var tv = TV(height: 53.93, width: 95.87) let size = tv.diagonal // 110
```

你有一台110英寸电视。 假设你决定不喜欢标准的电影长宽比，而是选择方形屏幕。 切掉一些屏幕宽度以使其等于高度：

``` Swift
 tv.width = tv.height
let diagonal = tv.diagonal // 76
```

现在，你只有一个76英寸的方形屏幕。 计算属性会根据新宽度自动提供新值。

# **Getter and setter**

你在上一节中编写的计算属性称为只读计算属性。 它具有一个代码块来计算属性的值，称为getter。

还可以使用两个代码块来创建可读写的计算属性：getter和setter。

此设置器的工作原理与你预期的不同。

由于计算所得的属性没有位置存储值，因此设置器通常会设置一个或间接更多相关的存储属性：

``` Swift
var diagonal: Int {
    // 1
    get { // 2
        let result = (height * height + width * width).squareRoot().rounded()
        return Int(result)
    }
    set { // 3
        let ratioWidth = 16.0
        let ratioHeight = 9.0
        // 4
        let ratioDiagonal = (ratioWidth * ratioWidth + ratioHeight * ratioHeight).squareRoot()
        height = Double(newValue) * ratioHeight / ratioDiagonal width =  height * ratioWidth / ratioHeight
    } 
}
```

这是这段代码中发生的事情：

+ 1.因为要包含一个setter，所以现在必须明确说明哪些计算包含getter和哪个setter，因此你需要在每个代码块周围加上花括号，并在其前面加上get或set。只读计算属性不需要这种特殊性，因为它们的单个代码块暗含了一个getter。

+ 2.你使用与之前相同的代码来获取计算值。

+ 3.对于setter，你通常必须做出某种假设。在这种情况下，请为屏幕比例提供合理的默认值。

+ 4.给定对角线和比率，用于计算高度和宽度的公式有点深。你可以花一些时间来解决它们，但是我已经为你完成了肮脏的工作，并在此处提供了它们。要重点关注的重要部分是：

    + newValue常量使你可以使用分配期间传递的任何值。

    + 请记住，newValue是一个Int，因此要在Double的计算中使用它，必须首先将其转换为Double。

    + 完成计算后，即可分配电视结构的高度和宽度属性。

现在，除了直接设置高度和宽度之外，还可以通过设置对角线计算属性来间接设置它们。 设置此值时，设置器将计算并存储高度和宽度。

请注意，setter中没有return语句-它仅修改其他存储的属性。 设置好设置器后，你将获得一个漂亮的小屏幕尺寸计算器：

``` Swift
 tv.diagonal = 70
let height = tv.height // 34.32... 
let width = tv.width // 61.01...
```

现在，你终于可以找到可以装入机柜的最大电视了-非常欢迎。 ：]

# **类型属性**

在上一节中，你学习了如何将存储和计算的属性与特定类型的实例相关联。 电视实例上的属性与电视实例上的属性是分开的。

但是，**类型本身也可能需要所有实例共有的属性。 这些属性称为类型属性**。

想象一下，你正在构建具有多个关卡的游戏。 每个级别都有一些属性或存储的属性：

``` Swift
struct Level {
  let id: Int
  var boss: String
  var unlocked: Bool
}
let level1 = Level(id: 1, boss: "Chameleon", unlocked: true)
let level2 = Level(id: 2, boss: "Squid", unlocked: false)
let level3 = Level(id: 3, boss: "Chupacabra", unlocked: false)
let level4 = Level(id: 4, boss: "Yeti", unlocked: false)
```

你可以使用type属性存储玩家解锁每个级别时的游戏进度。 使用修饰符static声明类型属性：

``` Swift
struct Level {
  static var highestLevel = 1
  let id: Int
  var boss: String
  var unlocked: Bool
}
```

在这里，highestLevel是Level本身而不是实例的属性。 这意味着你无法在实例上访问此属性：

``` Swift
 // Error: you can’t access a type property on an instance
let highestLevel = level3.highestLevel
```

相反，你可以通过类型本身访问它：

``` Swift
let highestLevel = Level.highestLevel // 1
```

使用类型属性意味着你可以从应用程序或算法的代码中的任何位置检索相同的存储属性值。 可从游戏的任何级别或任何其他位置（例如主菜单）访问游戏的进度。

# **属性监听**

对于你的关卡实现，当玩家解锁新关卡时自动设置最高级别会很有用。 为此，你需要一种聆听属性更改的方法。 值得庆幸的是，在属性更改之前和之后都有几个属性观察器被调用。

**当属性即将更改时，将调用willSet观察器，而在属性更改后，将调用didSet观察器**。 它们的语法类似于getter和setter：

``` Swift
struct Level {
  static var highestLevel = 1
  let id: Int
  var boss: String
  var unlocked: Bool {
    didSet {
        if unlocked && id > Self.highestLevel {
            Self.highestLevel = id }
        } 
    }
}
```

现在，当玩家解锁新关卡时，如果关卡达到新的最高水平，它将更新highestLevel类型属性。这里有几件事要注意：

+ 你可以从didSet观察器内部访问unlocked的值。请记住，在设置值之后，didSet会被调用。

+ 即使你位于该类型的实例中，你仍必须使用类型名称前缀访问类型属性。你必须使用全名Level.highestLevel而不是仅使用highestLevel来表示你正在访问类型属性。你还可以在类型内将静态属性称为Self.highestLevel。这是首选方法，因为即使你将类型的名称更改为其他名称，例如GameLevel，代码仍然可以使用。

**willSet和didSet观察者仅可用于存储的属性。**如果你想听听对计算属性的更改，只需将相关代码添加到属性的设置器中即可。

另外，请记住，**在初始化期间设置属性时，不会调用willSet和didSet观察器**。**仅当你为完全初始化的实例分配新值时，它们才会被调用**。这意味着**属性观察者仅对变量属性有用**，因为常量属性仅在初始化期间设置。在var之间选择，并根据需要进行调整。

# **限制变量**

你还可以使用属性观察器来限制变量的值。 假设你有一个灯泡，它只能承受流过灯丝的最大电流。

``` Swift
struct LightBulb {
  static let maxCurrent = 40
  var current = 0 {
    didSet {
            if current > LightBulb.maxCurrent {
                    print("""
                        Current is too high,
            falling back to previous setting.
                        """)
                current = oldValue
            } 
        }
    } 
}
```

在此示例中，如果流入灯泡的电流超过最大值，它将恢复为上一次成功的值。 请注意，didSet中有一个有用的oldValue常量，因此你可以访问以前的值。

试试看：

``` Swift
var light = LightBulb() 
light.current = 50
var current = light.current // 0 
light.current = 40
current = light.current // 40
```

你尝试将灯泡设置为50安培，但灯泡拒绝了该输入。 太酷了！

>注意：**不要将属性观察者与getter和setter混淆。 存储的属性可以具有didSet或willSet观察者。 计算属性具有一个getter和一个可选的setter。** 即使语法相似，这些也是完全不同的概念！

# 惰性属性

如果你拥有可能需要花费一些时间才能计算出的属性，那么在你真正需要该属性之前，你不希望放慢速度。 向惰性存储属性打个招呼。 这对于下载用户的个人资料图片或进行认真的计算非常有用。

看一下在圆周计算中使用pi的Circle结构示例：

``` Swift
struct Circle {
    lazy var pi = { ((4.0 * atan(1.0 / 5.0)) - atan(1.0 / 239.0)) * 4.0 }()
    var radius = 0.0
    var circumference: Double {
        mutating get {
            pi * radius * 2
        }
    }
    init(radius: Double) {
        self.radius = radius 
    }
}
```

在这里，你不信任标准库提供的pi值； 你想自己计算。

你可以使用其初始化程序创建一个新的Circle，并且pi计算尚未运行：

``` Swift
 var circle = Circle(radius: 5) // got a circle, pi has not been
run
```

pi的计算会耐心等待，直到你需要它为止。 仅当你要求圆周属性时，才会计算pi并为其分配一个值。

``` Swift
 let circumference = circle.circumference // 31.42 // also, pi now has a value
```

既然你拥有鹰眼，你就会注意到pi使用{}()模式来计算其值，即使它是存储的属性也是如此。尾括号立即在闭合花括号内执行代码。但是由于pi被标记为惰性，因此此计算将推迟到你首次访问该属性时进行。

为了进行比较，周长是计算得出的属性，因此每次访问时都会进行计算。如果半径发生变化，你希望圆周的值也会发生变化。 **pi作为惰性存储属性，仅在第一次计算**。太好了，因为谁愿意一次又一次地计算相同的东西？

lazy属性必须是用var定义的变量，而不是用let定义的常量。首次初始化结构时，该属性实际上没有任何值。然后，当代码的某些部分请求该属性时，将计算其值。因此，即使该值仅更改一次，你仍然可以使用var。

这是代码的两个更高级的功能：

+ 由于pi的值发生变化，因此圆周getter必须标记为变异。访问pi的值会更改结构的值。
+ 由于pi是结构的存储属性，因此你需要一个自定义初始化程序仅使用半径。请记住，结构的自动初始化程序包括所有存储的属性。

现在不用担心这些高级功能。在下一章中，你将了解有关`mutating关键字`和自定义初始化程序的更多信息。笼罩你的思想的重要部分是惰性存储属性的工作方式。其余的细节是橱窗装饰，你会及时适应。

# **关键点**

+ 属性是属于命名类型的变量和常量。

+ 存储的属性分配内存以存储值。

+ 计算属性是在你的代码每次请求它们时都会计算的，并且不会作为值存储在内存中。

+ 静态修饰符标记的类型属性对于特定类型的所有实例都是通用的。

+ lazy修饰符可防止在你的代码首次使用它之前计算存储属性的值。 当属性的初始值需要大量计算时，或者直到初始化对象后才知道属性的初始值时，你需要使用延迟初始化。



