---
title: 'Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流'
description: 'Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流'
permalink: 'Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流'
copyright: ture
date: 2020-05-11 21:47:54
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,基本控制流
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [基本控制流]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

编写计算机程序时，你需要能够告诉计算机在不同情况下应该做什么。 例如，如果用户点击加法按钮，计算器应用将需要做一件事，而如果用户点击减法按钮，则计算器应用将需要做另一件事。

用计算机编程术语来说，这个概念称为控制流，之所以这样命名，是因为程序的流是由各种方法控制的。 在本章中，你将学习如何使用语法控制流程来制定程序中的决策和重复执行任务。 你还将了解布尔值（代表真值和假值），以及如何使用它们比较数据。

# **比较运算符**

你现在已经看到了几种类型，例如Int，Double和String。 在这里，你将了解另一种类型，可以通过比较运算符比较值。

<!-- more -->

当执行比较时（例如，寻找两个数字中的较大者），答案是对还是错。 Swift为此提供了一种数据类型！ 它被称为布尔（Bool），是布尔（Boolean）的缩写，在一个名叫乔治·布尔（George Boole）的聪明人发明了围绕真假概念的整个数学领域之后。

这是在Swift中使用布尔值的方式：

``` Swift
let yes: Bool = true
let no: Bool = false
```

而且由于Swift的类型推断，你可以省去类型注释：

``` Swift
let yes = true
let no = false
```

布尔值只能是`true`或`false`，用关键字true和false表示。 在上面的代码中，你使用关键字设置每个常量的状态。

# **布尔运算符**

布尔通常用于比较值。 例如，你可能有两个值，并且想知道它们是否相等：它们是（true）或不是（false）。

在Swift中，你可以使用等于运算符执行此操作，该运算符由`==`表示：

``` Swift
let doesOneEqualTwo = (1 == 2)
```

Swift推断dosOneEqualTwo是Bool。 显然，1不等于2，因此dosOneEqualTwo将为false。
同样，你可以使用 **!=运算符** 找出两个值是否不相等：

``` Swift
let doesOneNotEqualTwo = (1 != 2)
```

这次比较是正确的，因为1不等于2，所以OneNotEqualTwo也将是正确的。

前缀 `!运算符`，也称为`非运算符`，将true切换为false，将false切换为true。 编写以上内容的另一种方法是：

``` Swift
let alsoTrue = !(1 == 2)
```

因为1不等于2，所以（1 == 2）为假，然后！ 将其翻转为真实。
另外两个运算符可让你确定一个值是大于（>）还是小于（<）另一个值。 你可能会从数学中学到这些：

``` Swift
let isOneGreaterThanTwo = (1 > 2)
let isOneLessThanTwo = (1 < 2)
```

而且不是火箭科学能得出的结论是，OneOneGreaterThanTwo将等于false，isOneLessThanTwo将等于true。

还有一个运算符，可让你测试一个值是否小于或等于另一个值：`<=`。 它是`<`和`==`的组合，因此如果第一个值小于或等于第二个值，则将返回true。

同样，有一个运算符可让你测试一个值是否大于或等于另一个值-你可能已经猜到它是`>=`。

# **布尔逻辑**

上面的每个示例仅测试一种情况。 当乔治·布尔（George Boole）发明布尔运算符时，他的计划远不及这些不起眼的开始。 他发明了布尔逻辑，使你可以组合多个条件以形成一个结果。

合并条件的一种方法是使用AND。 当你将两个布尔值与在一起时，结果是另一个布尔值。 如果两个输入布尔值均为true，则结果为true。 否则，结果为假。

在Swift中，布尔AND的运算符是&&，使用方式如下

``` Swift
let and = true && true
```

在这种情况下，将为真。 如果右侧的任何一个值为false，则和将为false。

组合条件的另一种方法是使用OR。 当你将两个布尔值或在一起时，如果输入布尔值中的任何一个为true，则结果为true。 仅当两个输入布尔值均为假时，结果才为假。

在Swift中，布尔值OR的运算符是`||`，如下所示：

``` Swift
let or = true || false
```

在这种情况下，还是将是真的。 如果右侧的两个值均为false，则或为false。 如果两者都是正确的，那么或仍然正确。

在Swift中，布尔逻辑通常应用于多个条件。 也许你想确定两个条件是否成立？ 在这种情况下，你将使用AND。 如果你仅关心两个条件之一是否成立，则可以使用OR。

例如，考虑以下代码：

``` Swift
let andTrue = 1 < 2 && 4 > 3
let andFalse = 1 < 2 && 3 > 4
let orTrue = 1 < 2 || 3 > 4
let orFalse = 1 == 2 || 3 == 4
```

这些条件中的每一个都测试两个单独的条件，并将它们与AND或OR组合在一起。

也可以使用布尔逻辑来组合两个以上的比较。 例如，你可以像这样形成一个复杂的比较：

``` Swift
let andOr = (1 < 2 && 3 > 4) || 1 < 4
```

括号消除了表达式的歧义。 首先，Swift计算括号内的子表达式，然后按照以下步骤计算完整表达式：

``` Swift
1. (1 < 2 && 3 > 4) || 1 < 4 
2. (true && false) || true 
3. false || true
4. true
```

# **字符串相等**

有时你想确定两个字符串是否相等。 例如，一个在照片中给动物命名的儿童游戏需要确定玩家是否正确回答。

在Swift中，你可以使用标准等于运算符==比较字符串，其方式与比较数字完全相同。 例如：

``` Swift
let guess = "dog"
let dogEqualsCat = guess == "cat"
```

这里，dogEqualsCat是一个布尔值，在这种情况下等于false，因为“ dog”不等于“ cat”。 简单！

就像数字一样，你不仅可以比较是否相等，还可以确定一个值大于或小于另一个值。 例如：

``` Swift
let order = "cat" < "dog"
```

此语法检查一个字符串是否按字母顺序排在另一个字符串之前。 在这种情况下，顺序等于true，因为“ cat”在“ dog”之前。

>注意：你将在第9章“字符串”中了解有关字符串相等的更多信息。 当字符串包含特殊字符时，会出现一些有趣的事情。

# **切换布尔**

布尔通常用于表示“开”或“关”状态。 在这种情况下，通常会在状态之间切换状态。 例如，你可以使用布尔（Bool）来表示应用程序中电灯开关的状态，并在状态“开”和“关”之间切换。

对于这些情况，有一种简便的方法可以将布尔从正确转换为错误，然后再返回。 像这样：

``` Swift
 var switchState = true
switchState.toggle() // switchState = false 
switchState.toggle() // switchState = true
```

在这里，名为switchState的变量从true开始。 然后，一次切换后，它变为假。 再次切换之后，将其再次设置为true。

>注意：这里的toggle（）是对函数的调用。 你将在第5章“函数”中详细了解这些内容，并在第12章“方法”中将其应用于类型。

# **if语句**

控制程序流的第一种也是最常见的方法是使用if语句，该语句仅在满足特定条件时才允许程序执行操作。 例如，考虑以下内容：

``` Swift
if 2 > 1 {
    print("Yes, 2 is greater than 1.") 
}
```

这是一个简单的if语句。 如果条件为真，则该语句将在花括号之间执行代码。 如果条件为假，则该语句将不会在花括号之间执行代码。 就这么简单！

你可以扩展if语句以提供代码，以防条件变为假。 这称为else子句。 这是一个例子：

``` Swift
let animal = "Fox"
if animal == "Cat" || animal == "Dog" { 
    print("Animal is a house pet.")
} else {
    print("Animal is not a house pet.") 
}
```

在这里，如果动物等于“猫”或“狗”，则该语句将运行第一段代码。 如果animal不等于“ Cat”或“ Dog”，则该语句将在if语句的else部分中运行该块，并将以下内容打印到调试区域：

``` Swift
 Animal is not a house pet.
```

但是，如果使用if语句，则可以做得更多。 有时你要检查一种情况，然后再检查另一种情况。 这是else-if起作用的地方，它将另一个if语句嵌套在前一个if语句的else子句中。

你可以这样使用它：

``` Swift
let hourOfDay = 12
var timeOfDay = ""
if hourOfDay < 6 {
  timeOfDay = "Early morning"
} else if hourOfDay < 12 {
  timeOfDay = "Morning"
} else if hourOfDay < 17 {
  timeOfDay = "Afternoon"
} else if hourOfDay < 20 {
  timeOfDay = "Evening"
} else if hourOfDay < 24 {
  timeOfDay = "Late evening"
} else {
  timeOfDay = "INVALID HOUR!"
}
print(timeOfDay)
```

这些嵌套的if语句一个接一个地测试多个条件，直到找到真实条件为止。 无论随后的else-if条件是否为真，仅执行与该第一个真条件相关的代码。 换句话说，你的条件顺序很重要！

你可以在末尾添加else子句，以处理没有条件成立的情况。如果不需要，则else子句是可选的；在此示例中，你确实需要它，以确保在打印时timeOfDay具有有效值。

在此示例中，if语句采用代表一天中某个小时的数字，并将其转换为代表该小时所属的一天中的一部分的字符串。使用24小时制，按顺序检查语句，一次检查一次：

+ 首先检查小时是否小于6。如果是，则表示清晨。
+ 如果小时数不少于6，则语句继续执行第一个else -if语句，在该语句中检查小时数是否小于12。
+ 然后，如果条件证明是错误的，则该语句将检查小时数，以查看小时数是否小于17，然后小于20，然后小于24。
+ 最后，如果小时数超出范围，该语句会将信息打印到控制台。

在上面的代码中，hourOfDay常数为12。因此，代码将输出以下内容：

``` Swift
 Afternoon
```

请注意，即使hourOfDay <20和hourOfDay <24条件也都为true，该语句仅执行条件为true的第一个块； 在这种情况下，使用hourOfDay <17条件的块。

# **短路**

关于if语句的一个重要事实是，当多个布尔条件由AND（&&）或OR（||）分隔时会发生什么。

考虑以下代码：

``` Swift
if 1 > 2 && name == "Matt Galloway" {
    // ...
}
```

if语句的第一个条件 1> 2为false。 因此，整个表达永远不可能是真实的。

因此，Swift甚至不会费心检查表达式的第二部分，即名称检查。 同样，请考虑以下代码：

``` Swift
if 1 < 2 || name == "Matt Galloway" {
    // ...
}
```

由于1 <2为真，因此整个表达式也必须为真。 因此，再次不执行名称检查。 当你开始处理更复杂的数据类型时，这将派上用场。

# **封装变量**

if语句引入了一个新的概念范围，这是一种通过使用花括号封装变量的方法。 假设你要计算向客户收取的费用。 这是你达成的交易：

``` Swift
You earn $25 for every hour up to 40 hours, and $50 for every hour thereafter.
```

使用Swift，你可以通过以下方式计算费用：

``` Swift
var hoursWorked = 45
var price = 0
if hoursWorked > 40 {
    let hoursOver40 = hoursWorked - 40 
    price += hoursOver40 * 50 
    hoursWorked -= hoursOver40
}
price += hoursWorked * 25
print(price)
```

这段代码会计算小时数，并检查是否超过40小时。如果是，代码将计算40小时以上的小时数并将其乘以$ 50，然后将结果加到价格中。 然后，代码从工作小时数中减去40个小时以上的小时数。 它将剩余的工作时间乘以$ 25，然后将其加到总价中。

在上面的示例中，结果如下：

``` Swift
 1250
```

有趣的是if语句中的代码。 有一个新的小时数声明声明hoursOver40，用于存储超过40的小时数。显然，你可以在if语句中使用它。 但是，如果你尝试在上述代码的末尾使用它，会发生什么？

``` Swift
...
print(price)
print(hoursOver40)
```

这将导致以下错误：

``` Swift
 Use of unresolved identifier 'hoursOver40'
```

此错误通知你，只允许在其创建范围内使用`hoursOver40`常量。 在这种情况下，if语句引入了一个新的作用域，因此当该作用域完成时，你将无法再使用该常数。

但是，每个作用域都可以使用其父作用域中的变量和常量。 在上面的示例中，if语句内部的范围使用你在父范围中创建的`price`和`hoursWorked`变量。

# **三元条件运算符**

现在，我想介绍一个新的运算符，你在“类型和运算”中没有看到过。 它称为三元条件运算符，与if语句相关。

如果要确定两个变量的最小值和最大值，可以使用if语句，如下所示：

``` Swift
let a = 5
let b = 10
let min: Int
if a < b {
    min = a 
} else {
    min = b 
}
    
let max: Int
if a > b {
    max = a
} else {
    max = b 
}
```

到现在为止，你已经知道了它是如何工作的，但是其中有很多代码。 如果可以将其缩小到几行，那不是很好吗？ 好吧，多亏三元条件运算符，你可以！

三元条件运算符接受条件并返回两个值之一，具体取决于条件是对还是错。 语法如下：

``` Swift
(<CONDITION>) ? <TRUE VALUE> : <FALSE VALUE>
```

你可以使用此运算符重写上面的长代码块，如下所示：

``` Swift
let a = 5
let b = 10
let min = a < b ? a : b
let max = a > b ? a : b
```

在第一个示例中，条件是`a<b`。 如果为true，则分配回min的结果将为a的值； 如果为假，则结果为b的值。

我相信你会同意这简单得多！ 这是一个有用的运算符，你会经常使用它。

# **Loops**

循环是Swift多次执行代码的方式。 在本节中，你将学习一种循环类型：while循环。 如果你知道另一种编程语言，就会发现一些概念，甚至可能是熟悉的语法。

## ***while循环***

当条件为真时，while循环将重复一段代码。 你可以通过以下方式创建while循环：

``` Swift
 while <CONDITION> {
    <LOOP CODE> 
}
```

循环检查每次迭代的条件。 如果条件为真，则循环执行并继续进行另一个迭代。 如果条件为假，则循环停止。 就像if语句，而while循环引入了作用域。

最简单的while循环采用以下形式：

``` Swift
while true { }
```

这是一个while循环，永远不会结束，因为条件始终为true。 当然，你永远不会编写这样的while循环，因为你的程序将永远旋转！ 这种情况称为无限循环，虽然它可能不会导致程序崩溃，但很可能会导致计算机死机。

这是while循环的更有用的示例：

``` Swift
var sum = 1
while sum < 1000 {
  sum = sum + (sum + 1)
}
```

该代码计算出一个数学序列，直到该值大于1000。

循环执行如下：

+ 在迭代1之前：sum = 1，循环条件= true
+ 迭代1之后：sum = 3，循环条件= true
+ 迭代2之后：sum = 7，循环条件= true
+ 迭代3之后：sum = 15，循环条件= true
+ 迭代4之后：sum = 31，循环条件= true
+ 迭代5之后：sum = 63，循环条件= true
+ 迭代6之后：sum = 127，循环条件= true
+ 迭代7之后：sum = 255，循环条件= true
+ 迭代8之后：sum = 511，循环条件= true
+ 迭代9之后：sum = 1023，循环条件= false

在第九次迭代之后，sum变量为1023，因此sum <1000的循环条件变为假。 此时，循环停止。


## ***重复循环***

while循环的一种变体称为repeat-while循环。 它与while循环的不同之处在于，条件是在循环的末尾而不是开始时求值的。 你可以这样构造一个`repeat-while循环`：

``` Swift
 repeat {
  <LOOP CODE>
} while <CONDITION>
```

这是上一部分的示例，但是使用了一个while循环：

``` Swift
sum = 1
repeat {
  sum = sum + (sum + 1)
} while sum < 1000
```

在此示例中，结果与之前相同。 但是，情况并非总是如此-在不同的情况下，你可能会得到不同的结果。

考虑以下while循环：

``` Swift
sum = 1
while sum < 1 {
  sum = sum + (sum + 1)
}
```

考虑相应的`repeat-while循环`，该循环使用相同的条件：

``` Swift
sum = 1
repeat {
  sum = sum + (sum + 1)
} while sum < 1
```

对于常规while循环，从一开始就sum<1为假。 这意味着将无法到达循环的主体！ sum的值等于1，因为该循环不会执行任何迭代。

在重复循环的情况下，总和等于3，因为循环执行一次。

## ***打破循环***

有时你想尽早摆脱困境。 你可以使用break语句执行此操作，该语句立即停止循环的执行，并在循环后继续执行代码。

例如，考虑以下代码：

``` Swift
sum = 1
while true {
    sum = sum + (sum + 1)
    if sum >= 1000 {
        break
    } 
}
```

在这里，循环条件为真，因此循环通常会永远迭代。 但是，中断表示一旦总和大于或等于1000，while循环将退出。

你已经了解了如何以不同的方式编写相同的循环，这说明在计算机编程中，通常有许多方法可以达到相同的结果。

你应该选择最容易阅读的方法，并以最佳方式传达你的意图。 你将通过足够的时间和实践来内部采用这种方法。

# **关键点**

+ 你使用布尔数据类型Bool表示对与错。
+ 全部返回布尔值的比较运算符为：\
\
![computer的工作方式](https://cdn.xuebaonline.com/sasb-bcf-stp1.png "")

+ 你可以使用布尔逻辑（&&和||）组合比较条件。
+ 你使用if语句根据条件做出简单的决定。
+ 在if语句中使用else和else-if，将决策范围扩展到单个条件之外。
+ 短路确保仅评估布尔表达式的最少必需部分。
+ 你可以使用三元运算符（a？b：c）代替简单的if语句。
+ 变量和常量属于某个范围，超出范围不能使用他们。 范围从其父级继承可见变量和常量。
+ while循环使你可以多次执行特定任务，直到满足条件为止。
+ 重复循环始终至少执行一次循环。
+ break语句使你可以跳出循环。