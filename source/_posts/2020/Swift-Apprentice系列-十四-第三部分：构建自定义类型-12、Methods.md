---
title: 'Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods'
description: 'Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods'
permalink: 'Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods'
copyright: ture
date: 2020-05-13 13:56:50
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Methods]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

在上一章中，你了解了属性，这些属性是作为结构一部分的常量和变量。 正如你已经看到的，方法仅仅是驻留在结构内部的函数。

在本章中，你将仔细研究方法和初始化程序。 与属性一样，你将开始设计更复杂的结构。 你在本章中学到的东西将适用于所有命名类型的方法，包括类和枚举，你将在后面的章节中看到。

# **方法更新**

还记得Array.removeLast()吗？ 它从数组实例中弹出最后一项：

``` Swift
var numbers = [1, 2, 3] 
numbers.removeLast() 
numbers // [1, 2]
```

<!-- more -->

![playground](https://cdn.xuebaonline.com/sasb-m-stp1.png "")

诸如removeLast()之类的方法可帮助你控制结构中的数据。

# **将方法与计算属性进行比较**

使用计算的属性，你在上一章中看到可以从结构内部运行代码。 听起来很像一种方法。 有什么不同？ 这实际上取决于样式，但是有一些有用的想法可以帮助你做出决定。 当方法执行工作时，属性保存你可以获取和设置的值。 有时，当方法的唯一目的是返回单个值时，这种区分变得模糊。

![playground](https://cdn.xuebaonline.com/sasb-m-stp2.png "")

问问自己是否想要设置值并获得值。 计算属性可以在内部具有一个setter组件来写入值。 要考虑的另一个问题是该计算是否需要大量计算或从数据库中读取。 即使是简单的值，一种方法也可以帮助你向未来的开发人员表明该调用在时间和计算资源上都是昂贵的。 如果调用便宜（如固定时间O（1）），则坚持使用计算属性。

# **将函数转换为方法**

要探索方法和初始化程序，你将为日期创建一个简单的模型，称为SimpleDate。 请注意，Apple的Foundation库包含一个强大的，可立即投入生产的Date类，该类可以正确处理所有处理日期和时间的微妙错综复杂的情况。

在下面的代码中，如何将monthsUntilWinterBreak(date :)转换为方法？

``` Swift
let months = ["January", "February", "March",
              "April", "May", "June",
              "July", "August", "September",
              "October", "November", "December"]

struct SimpleDate {
  var month: String
}
func monthsUntilWinterBreak(from date: SimpleDate) -> Int { 
    months.firstIndex(of: "December")! -
    months.firstIndex(of: date.month)! 
}
```

>注意：此示例很脆弱，因为它强制解开可能无效的索引。 你不希望在生产代码中执行此操作。 另外，如果你生活在南半球，你可能会对结果感到失望。 处理时间很难。 ：]

制作方法就像在结构定义内部移动函数一样容易：

``` Swift
struct SimpleDate {
    var month: String
    func monthsUntilWinterBreak(from date: SimpleDate) -> Int { 
        months.firstIndex(of: "December")! - 
        months.firstIndex(of: date.month)!
    } 
}
```

方法没有识别关键字； 它实际上只是命名类型内部的一个函数。 你可以使用点语法在实例上调用方法，就像对属性一样：

``` Swift
let date = SimpleDate(month: "October") 
date.monthsUntilWinterBreak(from: date) // 2
```

就像属性一样，一旦你开始输入方法名称，Xcode就会提供建议。 你可以使用键盘上的向上和向下箭头键选择一个，然后按Tab即可自动完成调用：

![playground](https://cdn.xuebaonline.com/sasb-m-stp3.png "")

如果花一分钟时间考虑一下此代码，你将意识到该方法的定义很尴尬。 必须有替代方法来访问实例存储的内容，而不是将实例本身作为参数传递给方法。 调用它会更好：

``` Swift
date.monthsUntilWinterBreak() // Error!
```

# **介绍Self**

在上一章中，你已经使用**Self（用大写S拼写）作为从结构内部访问静态属性的方法**。 现在我们看一下小写的self。 结构定义就像一个蓝图，而实例是一个真实的对象。 要访问实例的值，请在结构内部使用关键字self。 Swift编译器将其作为秘密参数传递到你的方法中。 方法定义转换为：

``` Swift
// 1
func monthsUntilWinterBreak() -> Int { // 2
    months.firstIndex(of: "December")! -
    months.firstIndex(of: self.month)! 
}
```

发生了以下变化：

1.现在，方法定义中没有参数。

2.在实现中，将self替换为旧的参数名称。

你现在可以在不传递参数的情况下调用方法：

``` Swift
date.monthsUntilWinterBreak（）// 2
```

看起来更干净了！ 你可以简化代码的另一件事是移除self：

self是你对实例的引用，但是大多数情况下你不需要使用它，因为如果你仅使用变量名，Swift就会理解你的意图。 尽管你始终可以使用self来访问当前实例的属性和方法，但是大多数时候你并不需要。 在monthsUntilWinterBreak（）中，你可以只说month而不是self.month：

``` Swift
 months.firstIndex(of: "December")! - months.firstIndex(of: month)!
```

大多数程序员仅在需要时才使用self，例如，在局部变量和具有相同名称的属性之间进行歧义。 稍后，你将获得更多使用自我的练习。

# **初始化器简介**

你已经在上一章中了解了初始化器，但让我们以新发现的方法知识再次对其进行研究。

初始化程序是你用来创建新实例的特殊方法。 他们忽略了func关键字甚至名字。 而是使用init。 初始值设定项可以具有参数，但不一定必须如此。

现在，当你创建SimpleDate结构的新实例时，必须为month属性指定一个值：

``` Swift
let date = SimpleDate(month: "January")
```

虽然编译器现在给你一个错误，但是你可以提供无参数的初始化程序。

通过实现init，你可以使用默认值创建最直接的初始化路径。

``` Swift
struct SimpleDate {
    var month: String
    init() {
        month = "January"
    }
    func monthsUntilWinterBreak() -> Int { 
        months.firstIndex(of: "December")! -
        months.firstIndex(of: month)! 
    }
}
```

这是该代码中发生的事情：

+ 1.init（）定义既不需要func关键字也不需要名称。 你总是使用类型的名称来调用初始化程序。
+ 2.与函数一样，初始化器必须具有参数列表，即使该列表为空。
+ 3.在初始化程序中，为结构的所有存储属性分配值。
+ 4.初始化程序从不返回值。 它的任务只是初始化一个新实例。 

现在，你可以使用简单的初始化程序来创建实例：

``` Swift
let date = SimpleDate()
date.month // January 
date.monthsUntilWinterBreak() // 11
```

你可以在初始值设定项中测试对值的更改：

``` Swift
init() {
  month = "March"
}
```

monthsUntilWinterBreak()的值将相应更改：

``` Swift
let date = SimpleDate() date.month // March 
date.monthsUntilWinterBreak() // 9
```

当你考虑此处的实现时，良好的用户体验优化将使初始化程序根据今天的日期使用默认值。

将来，你将可以检索当前日期。 最终，你将使用Foundation库中的Date类来处理日期。

在充分利用这些库提供的所有功能之前，让我们从头开始继续实现自己的SimpleDate类型。

# **结构中的初始化器**

初始化程序确保在实例可以使用之前设置所有属性：

``` Swift
struct SimpleDate {
    var month: String
    var day: Int

    init() {
        month = "January"
        day = 1 
    }
    func monthsUntilWinterBreak() -> Int { 
        months.firstIndex(of: "December")! -
        months.firstIndex(of: month)! 
    }
}
```

如果你尝试在不设置day属性的情况下创建初始化程序，则编译器会抱怨。

通过创建甚至一个自定义初始化程序，你就放弃了使用自动成员初始化程序的选项。 回想一下，自动生成的成员初始化器按顺序接受所有属性作为SimpleDate结构的参数，例如init（month：day :)。 编写自定义初始化程序时，编译器将废弃自动创建的初始化程序。

因此，此代码目前无法正常工作：

``` Swift
let valentinesDay = SimpleDate(month: "February", day: 14) // Error!
```

相反，你必须使用参数定义自己的初始化程序：

``` Swift
init(month: String, day: Int) { 
    self.month = month
    self.day = day 
}
```

在该代码中，你将传入的参数分配给结构的属性。 请注意，如何使用self来告诉编译器你所指的是属性而不是本地参数。

在简单的初始化程序中，不需要self：

``` Swift
init() {
    month = "January"
    day = 1 
}
```

在该代码中，没有与属性名称相同的参数。 因此，对于编译器来说，了解你所指的属性是不需要self的。

使用复杂的初始化程序后，你可以像调用自动生成的初始化程序一样调用新的初始化程序：

``` Swift
let valentinesDay = SimpleDate(month: "February", day: 14) 
valentinesDay.month // February
valentinesDay.day // 14
```

# **默认值和初始值设定项**

如你所料，有一种更简单的方法来实现无参数的初始化程序或空的初始化程序。

设置属性的默认值时，自动成员初始化程序将考虑默认值。

在你的结构中，删除两个初始化器，然后添加月份和日期的默认值：

``` Swift
struct SimpleDate {
    // 1
    var month = "January"
    var day = 1
    //2
    func monthsUntilWinterBreak() -> Int { 
        months.firstIndex(of: "December")! -
        months.firstIndex(of: month)! }
}
```

这是该代码中发生的事情：

1.现在，两个属性都具有一个合理的默认值：1月1日。

2.两个初始化程序init（）和init（month：day :)均已删除。 ...瞧，不用初始化程序！

即使initalizer消失了，你仍然可以使用两种初始化样式：

``` Swift
let newYearsDay = SimpleDate() 
newYearsDay.month // January newYearsDay.day // 1
let valentinesDay = SimpleDate(month: "February", day: 14) 
valentinesDay.month // February
valentinesDay.day // 14
```

这是因为你没有声明任何自定义初始化程序，所以可以使用成员自动初始化程序。 因为这些参数是属性，所以它为你提供了init（month：day）。 但是，也足够聪明地意识到属性在声明时具有默认值，因此不需要将其传递给初始化程序。 这也是你获取init（）的方式。 最酷的是，你还可以混合和匹配，只传递你需要设置的属性：

``` Swift
let octoberFirst = SimpleDate(month: "October") 
octoberFirst.month // October
octoberFirst.day // 1
let januaryTwentySecond = SimpleDate(day: 22) 
januaryTwentySecond.month // January 
januaryTwentySecond.day // 22
```

在该代码中，你仅将月份传递给了第一个实例，仅将日期传递给了第二个实例。 很漂亮，,！

# **引入变异方法**

结构中的方法不能更改实例的值，除非将其标记为变异。 你可以想象SimpleDate结构中的方法可以进行到第二天：

``` Swift
mutating func advance() {
    day += 1 
}
```

>注意：上面的实现是天真地编写advance()的方法，因为它没有考虑到月底发生的情况。 在本章末尾的挑战中，你将创建一个更强大的版本。

**mutating关键字标记了一种更改结构值的方法**。 由于结构是一种值类型，因此每次将其传递给应用程序时，系统都会将其复制。 如果方法更改了属性之一的值，则原始实例和复制的实例将不再等效。

**通过将方法标记为mutate，你还告诉Swift编译器不得在常量上调用此方法**。 这就是Swift知道在编译时允许哪些方法以及拒绝哪些方法的方式。 如果在结构的常量实例上调用`mutating方法`，则编译器会将其标记为必须先更正的错误，然后才能运行程序。

对于变异方法，Swift像常规方法一样秘密地自我传递。 但是对于变异方法，self会被标记为`inout参数`。 **变异方法内部发生的一切都会影响外部依赖类型的所有内容**。

# **类型方法**

像类型属性一样，你可以使用**类型方法来访问所有实例中的数据**。 你可以在类型本身而不是实例上调用类型方法。 要定义类型方法，请在其前面加上**static修饰符**。

类型方法对于通常与类型有关的事情很有用，而不是与特定实例有关的事情。

例如，你可以使用类型方法将相似的方法分组为一个结构：

``` Swift
struct Math {
    // 1
    static func factorial(of number: Int) -> Int { // 2
        (1...number).reduce(1, *) 
    }
}
// 3
Math.factorial(of: 6) // 720
```

你可能会对诸如阶乘之类的东西进行自定义计算。 不用一堆独立的函数，你可以将相关函数作为结构中的类型方法组合在一起。 据说该结构充当命名空间。

这是正在发生的事情：
+ 1.使用static声明类型方法，该方法接受一个整数并返回一个整数。
+ 2.实现使用称为reduce（_：_ :)的高阶函数。 它有效地遵循了计算阶乘的公式：“从1到n的所有整数的乘积”。 你可以使用for循环来编写此代码，但是高阶函数以更简洁的方式表达你的意图。
+ 3.你在Math上而不是在该类型的实例上调用type方法。

![playground](https://cdn.xuebaonline.com/sasb-m-stp4.png "")

收集到结构中的类型方法将有利地用Xcode编码完成。 在此示例中，你可以通过键入Math来查看所有可用的math实用程序方法。

![playground](https://cdn.xuebaonline.com/sasb-m-stp5.png "")


# **通过扩展添加到现有结构**

有时你想向结构中添加功能，但又不想弄乱原来的定义。 有时你无法添加功能，因为你无权访问源代码。 可以打开一个现有结构（甚至你没有源代码的结构），并向其中添加方法，初始化程序和计算属性。 这对代码组织很有用，第18章“访问控制和代码组织”中将对此进行详细讨论。 这样做与使用关键字extension一样容易。

在操场的底部，在Math的定义之外，使用扩展名添加一个名为primeFactors（of :)的类型方法：

``` Swift
extension Math {
static func primeFactors(of value: Int) -> [Int] {
    // 1
    var remainingValue = value
    // 2
    var testFactor = 2
    var primes: [Int] = []
    // 3
    while testFactor * testFactor <= remainingValue {
      if remainingValue % testFactor == 0 {
        primes.append(testFactor)
        remainingValue /= testFactor
      } else {
        testFactor += 1
      }
    }
    if remainingValue > 1 {
        primes.append(remainingValue) }
        return primes
    }
}
```

此方法找到给定数字的素因。 例如，81返回[3，3，3，3]。 这是代码中发生的事情：

+ 1.作为参数传入的值被分配给可变变量剩余值，以便在计算运行时可以对其进行更改。
+ 2.testFactor从两个开始，并将被分为剩余值。
+ 3.逻辑运行循环，直到用完剩余值。 如果它平均分配（表示没有余数），则将testFactor的值留作主要因素。 如果没有平均分配，则testFactor会增加以进行下一个循环。

该算法是蛮力的，但是确实包含一个优化：testFactor的平方永远不应该大于剩余值。 如果是，则剩余值本身必须是素数，并将其添加到素数列表中。

现在，你已在Math中添加了一种方法，而无需更改其原始定义。 验证扩展名是否可以使用以下代码：

``` Swift
Math.primeFactors(of: 81) // [3, 3, 3, 3]
```

非常漂亮！ 你将看到在实践中如何发挥作用。

>注意：**在扩展中，你不能将存储的属性添加到现有结构中，因为这会改变结构的大小和内存布局并破坏现有代码**。

# **使用扩展保留编译器生成的初始化程序**

通过SimpleDate结构，你看到添加了自己的init()之后，编译器生成的成员初始化器就会消失。事实证明，如果将init()添加到SimpleDate的扩展中，则可以同时保留两者：

``` Swift
struct SimpleDate {
    var month = "January"
    var day = 1
    func monthsUntilWinterBreak() -> Int { 
        months.firstIndex(of: "December")! -
        months.firstIndex(of: month)! 
    }

    mutating func advance() {
        day += 1 
    }
}
extension SimpleDate {
    init(month: Int, day: Int) {
        self.month = months[month-1]
        self.day = day 
    }
}
```

init（month：day :)被添加到SimpleDate，而无需牺牲自动生成的成员初始化器。 万岁！

# **关键点**

+ 方法是与类型关联的函数。

+ 方法是定义类型功能的行为。

+ 一种方法可以使用关键字self来访问实例的数据。

+ 初始化程序创建类型的新实例。 它们看起来很像被称为init且没有返回值的方法。

+ 类型方法将行为添加到类型而不是该类型的实例。 要定义类型方法，请在其前面加上static修饰符。

+ 你可以打开现有结构，并使用扩展名向其添加方法，初始化程序和计算属性。

+ 通过在扩展中添加自己的初始化程序，可以保留编译器的结构成员明智的初始化程序。

+ 方法可以存在于所有命名的类型中-结构，类和枚举。
