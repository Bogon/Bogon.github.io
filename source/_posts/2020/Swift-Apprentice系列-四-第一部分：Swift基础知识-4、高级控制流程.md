---
title: 'Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流'
description: 'Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流'
permalink: 'Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流'
copyright: ture
keywords: 'iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,高级控制流程'
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 高级控制流
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 8883
date: 2020-05-12 15:07:46
---

在上一文中，你学习了如何使用`if语句`和`while循环`的决策能力来控制执行流程。 在本章中，你将继续学习如何控制执行流程。 你将了解另一个称为for循环的循环。

循环听起来可能不太有趣，但在计算机程序中很常见。 例如，你可能具有从云下载图像的代码。 通过循环，你可以运行多次以下载整个照片库。 或者，如果你的游戏包含多个由计算机控制的角色，则可能需要循环遍历每个角色，并确保它知道接下来要做什么。

你还将了解switch语句，在Swift中它特别强大。 他们让你检查一个值并根据该值决定要做什么。 与某些`高级Swift功能`（例如`模式匹配`）一起使用时，它们的功能异常强大。

# **可数范围**

在深入研究for循环语句之前，你需要了解`Countable Range数据类型`，该数据类型使你可以表示一系列可计数的整数。 让我们看一下两种类型的范围。

<!-- more -->

首先，存在可数的封闭范围，你可以这样表示：

``` Swift
let closedRange = 0...5
```

三个点（...）表示此范围已关闭，这意味着范围从0到5（含）。 这就是数字（0、1、2、3、4、5）。

其次，有很多可打开的半开范围，你可以这样表示：

``` Swift
let halfOpenRange = 0..<5
```

在这里，将三个点替换为两个点和一个小于号（.. <）。 半开表示范围是从0到但不包括5。即数字（0、1、2、3、4）。

开放和半开放范围必须始终增加。 换句话说，第二个数字必须始终大于或等于第一个。 可数范围通常用于循环和switch语句，这意味着在本章的其余部分中，你还将使用范围！

# **随机插曲**

编程中的一个普遍需求是能够生成随机数。 Swift提供了该语言内置的功能，非常方便！

例如，假设有一个应用需要模拟模具的滚动。 你可能需要做一些事情，直到六分。 既然你知道了while循环，就可以使用`random功能`做到这一点。 你可以这样做：

``` Swift
 while Int.random(in: 1...6) != 6 {
  print("Not a six")
}
```

>注意：这里的`random(in :)`是对函数的调用。 你将在第5文“函数”中详细了解这些内容，并在第12文“方法”中将其应用于类型。

# **For loops**

在上一章中，你研究了while循环。 现在你已经了解了范围，是时候来看看另一种类型的循环：for循环。 这可能是最常见的循环，你将使用它运行代码一定次数。

你可以这样构建一个for循环：

``` Swift
 for <CONSTANT> in <COUNTABLE RANGE> {
    <LOOP CODE> 
}
```

循环以for关键字开头，后跟为循环常数指定的名称（稍后会详细介绍），然后是in，然后是要循环通过的范围。 这是一个例子：

``` Swift
let count = 10
var sum = 0
for i in 1...count {
    sum += i 
}
```

在上面的代码中，for循环遍历范围1进行计数。 在第一次迭代中，我将等于范围内的第一个元素：1.每次循环，我都会递增直到等于count； 循环将执行最后一次，然后结束。

>注意：如果你使用半开范围，则最后一次迭代将看到i等于count-1。

在循环内部，将i添加到sum变量； 它运行10次以计算序列1 + 2 + 3 + 4 + 5 + ...一直到10。

以下是每次迭代的常数i和变量和的值：

+ 迭代开始1：i = 1，sum = 0
+ 迭代开始2：i = 2，sum = 1
+ 迭代开始3：i = 3，sum = 3
+ 迭代开始4：i = 4，sum = 6+ 迭代开始5：i = 5，sum = 10
+ 迭代开始6：i = 6，sum = 15
+ 迭代开始7：i = 7，sum = 21
+ 迭代的开始8：i = 8，sum = 28
+ 迭代开始9：i = 9，sum = 36
+ 迭代10的开始：i = 10，总和= 45
+ 迭代10之后：sum = 55

就范围而言，i常数仅在for循环的范围内可见，这意味着它在循环之外不可用。

>注意：如果你数学上很精明，可能会注意到此示例计算的是三角形数。 快速说明：http://bbc.in/ 1O89TGP

Xcode的 “playground” 为你提供了可视化此类迭代的便捷方法。 将鼠标悬停在结果窗格中的总和+ = i线上，你会在右侧看到一个白点。 将鼠标悬停在该点上以显示加号（+）按钮：

![playground](http://cdn.xuebaonline.com/sasb-acf-stp1.png "")

单击此加号（+）按钮，Xcode将在playground代码编辑器中的线下显示一个图形：

![playground](http://cdn.xuebaonline.com/sasb-acf-stp2.png "")

此图使你可以在循环迭代时可视化sum变量。

最后，有时你只想循环一定次数，因此你不需要完全需要使用循环常数。

在这种情况下，你可以使用下划线表示你忽略它，如下所示：

``` Swift
sum = 1
var lastSum = 0
for _ in 0..<count { 
    let temp = sum
    sum = sum + lastSum 
    lastSum = temp
}
```

此代码不需要循环常量； 循环只需要运行一定次数。 在这种情况下，范围是0到（但不包括）count，并且是半开的。 这是编写运行一定次数的循环的常用方法。 也可以仅在特定条件下执行迭代。 例如，假设你想计算一个类似于三角数的和，但仅针对奇数：

``` Swift
sum = 0
for i in 1...count where i % 2 == 1 {
    sum += i 
}
```

前一个循环在for循环语句中有一个where子句。 循环仍会遍历范围1内的所有值进行计数，但仅在where条件为true时才执行循环的代码块； 在这种情况下，我很奇怪。

## ***继续并标记为语句***

有时，你可能希望跳过特定情况下的循环迭代，而不会完全脱离循环。 你可以使用continue语句执行此操作，该语句立即结束循环的当前迭代并开始下一个迭代。

>注意：在许多情况下，你可以使用刚学到的更简单的where子句。 continue语句为你提供了更高级别的控制，使你可以决定何时何地跳过迭代。

以8 x 8网格为例，其中每个单元格包含行的值乘以列。 乘法表看起来很多行，不是吗？

![playground](http://cdn.xuebaonline.com/sasb-acf-stp3.png "")

假设你要计算所有单元格的总和，但不包括所有偶数行，如下所示：

![playground](http://cdn.xuebaonline.com/sasb-acf-stp4.png "")

使用for循环，可以实现以下目的：

``` Swift
sum = 0
for row in 0..<8 { 
    if row % 2 == 0 {
        continue
    }
    for column in 0..<8 {
        sum += row * column
    }
}
```

当模2的行等于0时，该行是偶数。 在这种情况下，继续操作会使for循环跳到下一行。 就像break一样，continue适用于for循环和while循环。

第二个代码示例将计算所有单元格的总和，不包括那些列大于或等于行的单元格。

为了说明这一点，它应该汇总以下单元格：

![playground](http://cdn.xuebaonline.com/sasb-acf-stp5.png "")

使用for循环，可以实现以下目的：

``` Swift
sum = 0
rowLoop: for row in 0..<8 { 
    columnLoop: for column in 0..<8 {
        if row == column {
        continue rowLoop
        }
        sum += row * column
  }
}
```

前面的代码块使用了标记的语句，将两个循环分别标记为rowLoop和columnLoop。 当行等于内部columnLoop内部的列时，外部rowLoop将继续。

你可以将带有此类标记的语句与break配合使用以突破特定循环。 通常，中断并继续最内层的循环工作，因此如果要操作外层循环，则需要使用带标签的语句。

# **Switch语句**

你还可以通过switch语句控制流。 它根据变量或常量的值执行不同的代码。 这是一个作用于整数的switch语句：

``` Swift
let number = 10
switch number {
    case 0:
    print("Zero")
    default:
    print("Non-zero") 
}   
```

在此示例中，代码将打印以下内容：

``` Swift
 Non-zero
```

该switch语句的目的是确定一个数字是否为零。 它将变得更加复杂-我保证！

要处理特定的情况，请使用情况，后跟要检查的值（在这种情况下为0）。然后，使用default表示所有其他值应发生的情况。

这是另一个示例：

``` Swift
switch number {
    case 10:
        print("It’s ten!") 
    default:
        break
}
```

这次你检查10，在这种情况下，你将打印一条消息。 其他值不应该发生。 如果你不希望任何情况发生，请使用break语句。 这告诉Swift，你的意思是不要在此处编写任何代码，并且什么也不会发生。 案例永远不能为空，因此即使只是休息，你也必须编写一些代码！

当然，switch语句还可以使用整数以外的数据类型。 它们适用于任何数据类型！

这是打开字符串的示例：

``` Swift
let string = "Dog"
switch string {
    case "Cat", "Dog":
        print("Animal is a house pet.") 
    default:
        print("Animal is not a house pet.") 
}
```

这将打印以下内容：

``` Swift
 Animal is a house pet.
```

在此示例中，你为案例提供了两个值，这意味着如果该值等于“ Cat”或“ Dog”，则该语句将执行案例。

## ***高级switch语句***

你还可以为switch语句提供不止一种情况。 在上一章中，你看到了一个if语句，该语句使用多个else子句将一天中的一个小时转换为描述一天中该部分的字符串。 你可以使用switch语句更简洁地重写它，如下所示：

``` Swift
let hourOfDay = 12
var timeOfDay = ""
switch hourOfDay {
    case 0, 1, 2, 3, 4, 5:
        timeOfDay = "Early morning"
    case 6, 7, 8, 9, 10, 11:
        timeOfDay = "Morning"
    case 12, 13, 14, 15, 16:
        timeOfDay = "Afternoon"
    case 17, 18, 19:
        timeOfDay = "Evening"
    case 20, 21, 22, 23:
        timeOfDay = "Late evening"
    default:
        timeOfDay = "INVALID HOUR!"
}
print(timeOfDay)
```

此代码将打印以下内容：

``` Swift
 Afternoon
```

还记得范围吗？ 好了，你可以使用范围来简化此switch语句。 你可以使用范围重写以上代码：

``` Swift
switch hourOfDay { 
    case 0...5:
        timeOfDay = "Early morning" 
    case 6...11:
        timeOfDay = "Morning" 
    case 12...16:
        timeOfDay = "Afternoon" 
    case 17...19:
        timeOfDay = "Evening" 
    case 20..<24:
        timeOfDay = "Late evening"
    default:
        timeOfDay = "INVALID HOUR!"
}
```

这比在所有情况下单独写出每个值更简洁。

如果存在多个案例，该语句将执行第一个匹配的案例。 你可能会同意，此示例比使用if语句更为简洁明了。

同样，它也略为精确，因为if语句方法未解决负数，此处正确地将其视为无效。

也可以根据值的属性将个案与条件匹配。 如你在第2章“类型和操作”中所了解的那样，你可以使用模运算符来确定整数是偶数还是奇数。

考虑以下代码：

``` Swift
switch number {
    case let x where x % 2 == 0:
        print("Even")
    default:
        print("Odd")
}
```

这将打印以下内容：

``` Swift
 Even
```

该switch语句使用let-where语法，这意味着仅当某个条件为true时，大小写才匹配。 let部分将值绑定到名称，而where部分提供布尔条件，该条件必须为true才能匹配大小写。

在此示例中，你设计了大小写匹配的情况，如果值是偶数（即模2的值等于0）。

**根据条件匹配值的方法称为模式匹配。**

在前面的示例中，绑定引入了不必要的常数x； 它只是数字的别称。

你可以在where子句中使用数字，并用下划线替换绑定以忽略它。

``` Swift
switch number {
    case _ where number % 2 == 0:
        print("Even")
    default:
        print("Odd")
}
```

# **部分匹配**

可以使用具有匹配效果的switch语句的另一种方法如下：

``` Swift
let coordinates = (x: 3, y: 2, z: 5)
switch coordinates {
    case (0, 0, 0): // 1
        print("Origin")
    case (_, 0, 0): // 2
        print("On the x-axis.") 
    case (0, _, 0): // 3
        print("On the y-axis.") 
    case (0, 0, _): // 4
        print("On the z-axis.") 
    default: // 5
        print("Somewhere in space")
}
```

该switch语句使用部分匹配。 以下是每种情况的工作顺序：

+ 1.精确匹配值是（0，0，0）的情况。 这就是3D空间的起源。
+ 2.匹配y = 0，z = 0和x的任何值。 这意味着坐标在x轴上。
+ 3.匹配x = 0，z = 0和y的任何值。 这意味着坐标在y轴上。
+ 4.匹配x = 0，y = 0和z的任何值。 这意味着坐标在z轴上。
+ 5.匹配其余坐标。

你使用下划线表示你不在乎价值。 如果你不想忽略该值，则可以将其绑定并在switch语句中使用它。

这是如何执行此操作的示例：

``` Swift
switch coordinates {
    case (0, 0, 0):
        print("Origin")
    case (let x, 0, 0):
        print("On the x-axis at x = \(x)") 
    case (0, let y, 0):
        print("On the y-axis at y = \(y)") 
    case (0, 0, let z):
        print("On the z-axis at z = \(z)") 
    case let (x, y, z):
        print("Somewhere in space at x = \(x), y = \(y), z = \(z)")
}
```

在这里，轴案例使用let语法提取相关值。 然后，代码使用字符串插值来打印值以构建字符串。

请注意，你在此switch语句中不需要默认值。 这是因为最后一种情况实质上是默认情况； 它匹配任何东西，因为元组的任何部分都没有约束。 如果switch语句将所有可能的值及其大小写用尽，则不需要默认值。

还要注意如何使用单个let绑定元组的所有值：let（x，y，z）与（let x，let y，let z）相同。

最后，你可以使用之前看到的相同的让位语法来匹配更复杂的情况。 例如：

``` Swift
switch coordinates {
    case let (x, y, _) where y == x:
        print("Along the y = x line.") 
    case let (x, y, _) where y == x * x:
        print("Along the y = x^2 line.") 
    default:
        break
}
```

在这里，你匹配了“ y等于x”和“ y等于x平方”的线。 这些就是switch语句的基础！

# **关键点**

+ 你可以使用可数范围来创建整数序列，并递增以从一个值移至另一个值。
+ 封闭范围包括起始值和结束值。
+ 半开范围包括起始值，并在结束值前停一档。
+ For循环可让你遍历一个范围。
+ continue语句使你可以完成循环的当前迭代并开始下一个迭代。
+ 带标签的语句使你可以使用break并在外部循环上继续。
+ 你可以使用switch语句来确定要运行的代码，具体取决于变量或常数。
+ switch语句的功能来自利用模式匹配来使用复杂规则比较值。
