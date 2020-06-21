---
title: 'Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配'
description: 'Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配'
permalink: 'Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配'
copyright: ture
date: 2020-06-21 13:18:34
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [模式匹配]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

实际上，你已经看到了模式匹配的实际应用。 在第4章“高级控制流”中，使用switch语句在不同情况下匹配数字和字符串。 这是一个简单的示例，但是在该主题上还有很多值得探索的地方。

你将深入了解其基本机制，并进一步了解Swift编译器如何解释你键入的代码。

Swift是一种多范式语言，可让你构建功能全面，可用于生产的，面向对象的软件。 Swift的设计师从诸如Haskell和Erlang的更多功能样式语言中借鉴了一些技巧。

模式匹配是这些功能语言的基础。 它使你不必键入更长且可读性更差的语句来评估条件。

假设你有一个x，y和z轴值的坐标：

``` Swift
let coordinate = (x: 1, y: 0, z: 0)
```

<!-- more -->

这两个代码片段将实现相同的结果：

``` Swift
// 1
if (coordinate.y == 0) && (coordinate.z == 0) {
    print("along the x-axis")
}
// 2
if case (_, 0, 0) = coordinate {
    print("along the x-axis") 
}
```

第一个选项深入研究了元组的内部，并进行了冗长的相等比较。 它还使用逻辑&&运算符来确保两个条件都成立。

使用模式匹配的第二种选择简洁明了。

以下各节将向你展示如何以及何时使用代码中的模式。

# 模式介绍

模式提供规则以匹配值。 你可以在切换用例以及if，while，guard和for语句中使用模式。 你还可以在变量和常量声明中使用模式。

信不信由你，你已经看到了另一个带有协调元组声明的模式示例。 通过用括号之间的逗号分隔值（如（x，y，z））来构造元组。 编译器将理解该模式是指三个值的元组：x，y和z。 元组具有复合值的结构。

单个值也具有结构。 数字42是单个值，从本质上来说是可识别的。

**模式定义值的结构。 模式匹配使你可以相互检查值。**

> 注意：值的结构不引用结构类型。 尽管它们使用相同的词，但它们是不同的概念。 可能是语言匮乏的症状！

# 基本模式匹配

在本部分中，你将看到模式匹配的一些常见用法。

## If 和 guard

到目前为止，你都使用了普通的old if和guard语句。 你可以使用大小写条件将它们转换为模式匹配语句。 下面的示例显示了如何使用带有条件条件的if语句：

``` Swift
func process(point: (x: Int, y: Int, z: Int)) -> String { 
    if case (0, 0, 0) = point {
        return "At origin"
    }
    return "Not at origin"
}
let point = (x: 0, y: 0, z: 0)
let status = process(point: point) // At origin
```

在该代码中，所有三个轴都匹配零值。

Guard语句中的case条件达到相同的效果：

``` Swift
func process(point: (x: Int, y: Int, z: Int)) -> String { 
    guard case (0, 0, 0) = point else {
        return "Not at origin"
    }
    // guaranteed point is at the origin
    return "At origin"
}
```

在一种情况下，先写模式，后跟等号=，然后写要与模式匹配的值。 如果你希望匹配单个模式，则if语句和保护语句效果最佳。

## Switch

如果你想匹配多个模式，则switch语句是你最好的朋友。 你可以像这样重写processPoint（）：

``` Swift
func process(point: (x: Int, y: Int, z: Int)) -> String { 
    // 1
    let closeRange = -2...2 let midRange = -5...5 // 2
    switch point {
        case (0, 0, 0):
            return "At origin"
        case (closeRange, closeRange, closeRange):
            return "Very close to origin"
        case (midRange, midRange, midRange):
            return "Nearby origin"
        default:
            return "Not near origin"
    }
}
let point = (x: 15, y: 5, z: 3)
let status = process(point: point) // Not near origin
```

该代码引入了两个新概念：

+ 你可以匹配数字范围。

+ switch语句允许多种情况匹配模式。

switch语句比if语句还具有优势，因为它进行了详尽的检查。 编译器保证你在switch语句结束之前已经检查了所有可能的值。

同样，请记住，switch语句将以匹配的第一种情况条件退出。 这就是为什么你将midRange条件放在第二位的原因。 即使midRange条件与closeRange值匹配，除非前一个条件失败，否则不会进行评估。 默认情况是包罗万象。 如果在所有其他情况下都没有匹配项，则将执行默认情况。

## for

for循环在元素集合中搅动。 模式匹配可以充当过滤器：

``` Swift
let groupSizes = [1, 5, 4, 6, 2, 1, 3]
for case 1 in groupSizes {
  print("Found an individual") // 2 times
}
```

在此示例中，该数组提供了学校教室的工作组大小列表。 循环的实现仅针对与值1匹配的数组中的元素运行。由于鼓励班级中的学生而不是他们自己进行团队合作，因此你可以隔离尚未找到伙伴的人。

# 模式

既然你已经看到了一些模式匹配的基本示例，那么让我们来谈谈可以匹配的模式。

## 通配符模式

重新查看在本章开始时看到的示例，在该示例中，你要检查（x，y，z）元组坐标的值是否在x轴上：

``` Swift
if case (_, 0, 0) = coordinate {
    // x can be any value. y and z must be exactly 0.
    print("On the x-axis") // Printed! 
}
```

在这种情况下，模式使用下划线_来匹配x分量的任何值，而y和z分量的值恰好为0。

## 值绑定模式

价值绑定模式听起来比实际中复杂得多。 你只需使用var或让我们在匹配模式时声明变量或常量。

然后，你可以在执行块中使用变量或常量的值：

``` Swift
if case (let x, 0, 0) = coordinate {
    print("On the x-axis at \(x)") // Printed: 1 
}
```

在这种情况下，模式与x轴上的任何值匹配，然后将其x分量绑定到名为x的常量以在执行块中使用。

如果要绑定多个值，则可以多次编写let，或者甚至更好地将let移到元组之外：

``` Swift
if case let (x, y, 0) = coordinate {
    print("On the x-y plane at (\(x), \(y))") // Printed: 1, 0 
}
```

通过将let放在元组的外部，编译器将绑定找到的所有未知常量名称。

## 标识符模式

标识符模式比值绑定模式更为直接。 标识符模式是常量名或变量名本身。 在上面的示例中，这就是模式中的x。 你告诉编译器，“当找到（something，0，0）的值时，将某物分配给x。”

由于标识符模式是值绑定模式的子模式，因此该描述与你之前看到的内容交织在一起。

## 元组模式

你已经使用了另一种奖金模式-你知道吗？ 元组不仅仅是括号之间的一系列逗号分隔值：它实际上是逗号分隔的模式。 在示例元组模式（某物，0，0）中，内部模式是（标识符，表达式，表达式）。

你将在本章末了解表情模式。 目前，重要的一点是，元组模式将许多模式组合为一个，并可以帮助你编写简洁的代码。

## 枚举案例模式

在第15章“枚举”中，你了解了如何匹配枚举的成员值：

``` Swift
enum Direction {
  case north, south, east, west
}
let heading = Direction.north
if case .north = heading {
    print("Don’t forget your jacket") // Printed! 
}
```

可以想象，枚举案例模式与枚举值匹配。 在此示例中，case .north仅与枚举的.north值匹配。

枚举案例模式有其神奇之处。 将其与值绑定模式结合使用时，可以从枚举中提取关联的值：

``` Swift
enum Organism {
  case plant
  case animal(legs: Int)
}
let pet = Organism.animal(legs: 4)
switch pet {
    case .animal(let legs):
        print("Potentially cuddly with \(legs) legs") // Printed: 4
    default:
        print("No chance for cuddles")
}
```

在该代码中，.animal的关联值绑定到名为legs的常数。 你可以在该条件的执行块内的打印调用中引用支腿常量。

关联值被锁定在枚举值中，直到你使用值绑定模式来提取它们为止.

## 可选模式

说到可选，还有一个可选模式。 可选模式包括一个标识符模式，后跟一个问号。 你可以在使用枚举用例模式的相同位置使用此模式。

你可以将迷你练习的解决方案重写为：

``` Swift
for case let name? in names {
  print(name) // 4 times
}
```

可选模式是用于包含可选值的枚举用例模式的语法糖。 语法糖仅意味着编写相同内容的一种更愉快的方式。

## “Is”类型转换模式

通过在大小写条件下使用is运算符，可以检查实例是否为特定类型。 何时使用此功能的一个示例是通过JSON导出进行解析。 如果你不熟悉，JSON基本上是一个包含所有不同类型的数组，你可以在Swift中将其写为[Any]。 Web API和网站开发人员大量使用JSON。

因此，从网络API解析数据时，你需要检查每个值是否属于特定类型：

``` Swift
let response: [Any] = [15, "George", 2.0]
for element in response {
    switch element {
        case is String:
            print("Found a string") // 1 time
        default:
            print("Found something else") // 2 times
    }
 }
```

使用此代码，你会发现其中一个元素是String类型的。 但是你无法在实现中访问该String的值。 这就是救援的下一个模式。

## “As”类型转换模式

as运算符将is类型转换模式与值绑定模式组合在一起。 扩展上面的示例，你可以编写这样的情况：

``` Swift
for element in response {
    switch element {
        case let text as String:
            print("Found a string: \(text)") // 1 time
        default:
            print("Found something else") // 2 times
    }
}
```

因此，当编译器找到可以转换为String的对象时，编译器会将值绑定到文本常量。


# 进阶模式

你已经完成了以上所有模式！ 到目前为止，你在本章中学到的知识将带你成为一名开发人员。 在接下来的部分中，你将学习一些修饰符技巧，使你可以进一步整合代码。

## Qualifying with where

你可以通过在线检查一元条件来指定where条件以进一步过滤匹配项。 在第4章“高级控制流”中，你看到了这样的示例：

``` Swift
for number in 1...9 {
    switch number {
        case let x where x % 2 == 0:
            print("even") // 4 times
        default:
            print("odd") // 5 times
    }
}
```

如果上面代码中的数字可以被二等分，则第一种情况匹配。

你可以通过枚举以更复杂的方式利用其中的位置。 假设你正在编写一个游戏，想要保存每个级别的玩家进度：

``` Swift
enum LevelStatus {
  case complete
  case inProgress(percent: Double)
  case notStarted
}

let levels: [LevelStatus] = [.complete, .inProgress(percent: 0.9), .notStarted]
for level in levels {
    switch level {
        case .inProgress(let percent) where percent > 0.8 :
            print("Almost there!")
        case .inProgress(let percent) where percent > 0.5 :
            print("Halfway there!")
        case .inProgress(let percent) where percent > 0.2 :
            print("Made it through the beginning!")
        default:
            break
    } 
}
```

在此代码中，游戏中的一个级别当前正在进行中。 该级别与第一种情况匹配，即90％完成并打印“ Almost there！”。

## 用逗号链接

你在第4章“高级控制流”中了解到的另一件事是如何在单例情况下匹配多个模式。 这是一个与你之前看到的类似的示例：

``` Swift
func timeOfDayDescription(hour: Int) -> String { 
    switch hour {
        case 0, 1, 2, 3, 4, 5:
            return "Early morning"
        case 6, 7, 8, 9, 10, 11:
            return "Morning"
        case 12, 13, 14, 15, 16:
            return "Afternoon"
        case 17, 18, 19:
            return "Evening"
        case 20, 21, 22, 23:
            return "Late evening"
        default:
            return "INVALID HOUR!"
    }
}
let timeOfDay = timeOfDayDescription(hour: 12) // Afternoon
```

在这里，你会看到几种在每种情况下都匹配的标识符模式。 你可以在每个逗号后面的模式中使用在前面的模式中绑定的常量和变量。 这是对可爱动物测试的改进：

``` Swift
if case .animal(let legs) = pet, case 2...4 = legs { 
        print("potentially cuddly") // Printed!
} else {
    print("no chance for cuddles")
}
```

逗号之前的第一个模式将枚举的关联值绑定到常量分支。 在第二种模式中，在逗号之后，腿常数的值与范围匹配。

Swift的if语句功能惊人。 if语句可以有多个条件，以逗号分隔。 条件分为以下三类之一：

+ 简单的逻辑测试，例如：foo == 10 || bar > baz。

+ 可选绑定，例如：let foo = maybeFoo。

+ 模式匹配，例如：case .bar（let something）= theValue。

条件按照定义的顺序进行评估。 在运行时，将不会评估失败条件之后的任何条件。 这是一个复杂的if语句的虚构示例：

``` Swift
enum Number {
  case integerValue(Int)
  case doubleValue(Double)
  case booleanValue(Bool)
}

let a = 5
let b = 6
let c: Number? = .integerValue(7) 
let d: Number? = .integerValue(8)
if a != b {
  if let c = c {
    if let d = d {
        if case .integerValue(let cValue) = c { 
            if case .integerValue(let dValue) = d {
                    if dValue > cValue {
                        print("a and b are different") // Printed!
                        print("d is greater than c") // Printed!
                        print("sum: \(a + b + cValue + dValue)") // 26
                    } 
                }
            }
        }
    } 
}
```

将所有这些if语句嵌套在另一个语句中被称为厄运金字塔。 相反，你可以在连续逗号后立即使用展开和绑定的值：

``` Swift
if  a != b, 
    let c = c,
    let d = d,
    case .integerValue(let cValue) = c, case .integerValue(let dValue) = d, dValue > cValue {
        print("a and b are different") // Printed!
        print("d is greater than c") // Printed!
        print("sum: \(a + b + cValue + dValue)") // Printed: 26
}
```

因此，现在你可以看到，模式匹配可以与简单的逻辑条件和可选的绑定结合在一个if语句中。 你的代码看起来已经很优雅了！

## 自定义元组

在本章中，你了解了元组模式如何与三维坐标（x，y，z）匹配。 准备好匹配时，你可以创建一个即时元组表达式。

这是一个执行此操作的元组：

``` Swift
let name = "Bob"
let age = 23
if case ("Bob", 23) = (name, age) {
  print("Found the right Bob!") // Printed!
}
```

在这里，你将名称和年龄常数组合成一个元组，并将它们一起评估。

另一个这样的示例涉及带有用户名和密码字段的登录表单。 用户因不完整填写字段然后单击“提交”而臭名昭著。 在这些情况下，你想向用户显示一条特定的错误消息，指示缺少的字段，如下所示：

``` Swift
var username: String?
var password: String?
switch (username, password) {
    case let (username?, password?):
        print("Success! User: \(username) Pass: \(password)")
    case let (username?, nil):
        print("Password is missing. User: \(username)") 
    case let (nil, password?):
        print("Username is missing. Pass: \(password)") 
    case (nil, nil):
        print("Both username and password are missing")  // Printed!
}
```

## 通配符的乐趣

使用通配符模式的一种有趣方式是在for循环的定义内：

``` Swift
for _ in 1...3 {
  print("hi") // 3 times
}
```

该代码执行其动作三遍。 下划线_表示你无需使用序列中的每个值。 如果你发现自己需要重复操作，这是编写代码的一种干净方法。

### 验证可选项是否存在

``` Swift
let user: String? = "Bob" guard let _ = user else {
    print("There is no user.")
    fatalError()
}
print("User exists, but identity not needed.") // Printed!
```

在此代码中，你检查以确保用户具有值。 你使用下划线表示目前，你不在乎其包含的值。

即使你可以做某事，也并不意味着你应该这样做。 在不关心值的情况下验证可选值的最佳方法是：

``` Swift
guard user != nil else { 
    print("There is no user.")
    fatalError()
}
```

在这里，user != nil与让 _ = user 具有相同的作用，但目的更加明显。

### 组织一个if-else-if

在应用程序开发中，视图由矩形定义。 这是简化版：

``` Swift
struct Rectangle {
  let width: Int
  let height: Int
  let background: String
}
let view = Rectangle(width: 15, height: 60, background: "Green") 
switch view {
    case _ where view.height < 50:
        print("Shorter than 50 units") 
    case _ where view.width > 20:
        print("Over 50 tall, & over 20 wide") 
    case _ where view.background == "Green":
        print("Over 50 tall, at most 20 wide, & green") // Printed!
    default:
        print("This view can’t be described by this example") 
}
```

你可以将此代码编写为一系列if语句。 使用switch语句时，很明显每个条件都是一个案例。 请注意，每种情况都使用带有限定where子句的下划线。

## 表达式模式

到目前为止，你已经掌握了所有的模式匹配技能，终于可以开始学习引擎盖下的内容了。表达式模式很简单，但是，它是如此强大。

在本章的开头，你看到了示例元组模式（x，0、0）。你了解到，在内部，元组是逗号分隔的模式列表。你还了解到x是标识符模式，而0则是表达式模式的示例。因此，该元组的内部模式是（标识符，表达式，表达式）。

表达式模式将值与模式匹配运算符〜=进行比较。当比较返回true时，匹配成功。如果值是同一类型，则公共==等号运算符将执行比较。在第16章“协议”中，你学习了如何为自己的命名类型实现Equatable和==。

当值的类型不同或类型未实现Equatable协议时，将使用〜=模式匹配运算符。

例如，编译器使用〜=运算符检查整数值是否落在范围内。该范围肯定不是整数，因此编译器不能使用==运算符。但是，你可以概念化检查Int是否在范围内的想法。这就是〜=模式匹配运算符出现的地方：

``` Swift
let matched = (1...10 ~= 5) // true
```

与定义案例条件时一样，模式必须位于操作员的左侧，而值应位于操作员的右侧。 等效情况如下所示：

``` Swift
if case 1...10 = 5 {
    print("In the range")
}
```

该if case语句在功能上等同于上一个示例中使用〜=运算符。

### 重载〜=

你可以重载〜=运算符以提供你自己的自定义表达式匹配行为。 你将在数组和整数之间实现模式匹配，以检查整数是否是数组的元素。 值2应该匹配模式[0，1，2，3]。 使用标准库，你将在以下代码上看到错误：

``` Swift
let list = [0, 1, 2, 3]
let integer = 2
let isInArray = (list ~= integer) // Error!
if case list = integer { // Error!
  print("The integer is in the array")
} else {
  print("The integer is not in the array")
}
```

当然，你可以检查整数是否在数组中，如下所示：

``` Swift
let isInList = list.contains(integer) // true
```

但是最好使用模式匹配，以便你可以在switch语句中检查是否匹配。 你可以使用以下代码实现缺少的模式匹配器：

``` Swift
// 1
func ~=(pattern: [Int], value: Int) -> Bool { // 2
    for i in pattern {
        if i == value {
            // 3
            return true
        } 
    }
    // 4
    return false
}
```

这是正在发生的事情：
+ 该函数将一个整数数组作为其模式参数和一个整数作为其value参数。 该函数返回一个布尔值。
+ 在实现中，一个for循环遍历数组中的每个元素。
+ 如果该值等于当前数组元素，则该函数立即返回true，并且函数实现内不再运行任何代码。
+ 如果for循环结束而没有任何匹配，则该函数返回false。

现在，模式匹配运算符已被重载，表达式你之前看到的模式现在可以正确匹配且没有错误。

``` Swift
let isInArray = (list ~= integer) // true
if case list = integer {
  print("The integer is in the array") // Printed!
} else {
  print("The integer is not in the array")
}
```

你现在是匹配忍者的模式！ 掌握了模式之后，你就可以编写清晰，简洁，易读的代码了。

# 关键点

+ 模式代表值的结构。

+ 模式匹配可以帮助你编写比其他逻辑条件更可读的代码。

+ 模式匹配是从枚举值中提取关联值的唯一方法。




