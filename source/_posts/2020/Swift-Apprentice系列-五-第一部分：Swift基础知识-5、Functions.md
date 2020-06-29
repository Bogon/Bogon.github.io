---
title: 'Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions'
description: 'Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions'
permalink: 'Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions'
copyright: ture
date: 2020-05-12 16:48:17
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Functions
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Functions]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

函数是许多编程语言的核心部分。 简而言之，函数可以让你定义执行任务的代码块。 然后，只要你的应用需要执行该任务，就可以运行该函数，而不必在各处复制和粘贴相同的代码。

在本章文中，你将学习如何编写自己的函数，并直接了解Swift如何使它们易于使用。

# **函数基础**

假设你有一个经常需要打印姓名的应用程序。 你可以编写一个函数来做到这一点：

``` Swift
func printMyName() {
    print("My name is 123.") 
}
```

上面的代码称为函数声明。 你可以使用func关键字定义一个函数。 之后是函数的名称，后跟括号。 你将在下一部分中详细了解这些括号的必要性。

<!-- more -->

括号后是一个大括号，接着是要在函数中运行的代码，然后是一个大括号。 定义函数后，可以像这样使用它：

``` Swift
printMyName()
```

打印出以下内容：

``` Swift
My name is 123.
```

如果你怀疑你已经在上一章中使用过某个功能，那是对的！ print确实是一项功能，它可以将你提供给控制台的文本打印出来。 这将很好地引导至下一部分，在该部分中，你将学习如何将数据传递给函数以及如何将数据取回。

## ***函数参数***

在前面的示例中，该函数仅打印出一条消息。 很好，但是有时你需要对函数进行参数化，这使函数根据通过其参数传递给它的数据而执行不同的操作。

例如，考虑以下功能：

``` Swift
func printMultipleOfFive(value: Int) {
  print("\(value) * 5 = \(value * 5)")
}
printMultipleOfFive(value: 10)
```

在这里，你可以在函数名称，名称为value和类型为Int的括号内看到一个参数的定义。 在任何函数中，括号都包含所谓的参数列表。 在声明和调用函数时都需要这些括号，即使参数列表为空。 此功能将打印出任何给定的5的倍数。 在该示例中，你使用参数10调用该函数，因此该函数将输出以下内容：

``` Swift
 10 * 5 = 50
```

>注意：注意不要混淆术语“parameter”和“argument”。 函数在其parameters列表中声明其参数。 调用函数时，你将值作为函数arguments的参数提供。

你可以更进一步，使功能更通用。 使用两个参数，该函数可以打印出任意两个值的倍数。

``` Swift
func printMultipleOf(multiplier: Int, andValue: Int) {
  print("\(multiplier) * \(andValue) = \(multiplier *
andValue)")
}
printMultipleOf(multiplier: 4, andValue: 2)
```

现在，在函数名称后面的括号内有两个参数：一个名为乘数，另一个名为andValue，两者均为Int类型。

请注意，调用函数时，需要将参数列表中的标签应用于自变量。 在上面的示例中，你需要将multiplier：放在乘数之前，将andValue：放在要相乘的值之前。

在Swift中，你应该尝试使函数调用像句子一样读起来。 在上面的示例中，你将阅读以下代码的最后一行：

``` Swift
Print multiple of multiplier 4 and value 2
```

你可以通过为参数指定其他外部名称来使其更加清晰。 例如，你可以更改andValue参数的名称：

``` Swift
 func printMultipleOf(multiplier: Int, and value: Int) {
    print("\(multiplier) * \(value) = \(multiplier * value)") 
}
printMultipleOf(multiplier: 4, and: 2)
```

你可以通过在参数名称前面写入外部名称来分配其他名称。 在此示例中，参数的内部名称现在为value，而函数调用中的外部名称（参数标签）现在为and。 你可以按以下方式阅读新通话：

``` Swift
Print multiple of multiplier 4 and 2
```

下图说明了函数声明中外部和内部名称的来源：

![playground](https://cdn.xuebaonline.com/sasb-f-stp1.png "")

其背后的想法是允许你以类似句子的方式使函数调用可读，但在函数本身内仍具有表达性名称。 你可能像这样编写了上面的函数：

``` Swift
func printMultipleOf(multiplier: Int, and: Int)
```

这在函数调用时具有很好的可读性，效果相同。 但是，现在函数内部的参数也称为and。 在长函数中，拥有这样一个通用名称的参数可能会造成混淆。

如果你完全不需要外部名称，则可以使用下划线_，如前几章所述：

``` Swift
func printMultipleOf(_ multiplier: Int, and value: Int) {
  print("\(multiplier) * \(value) = \(multiplier * value)")
}
printMultipleOf(4, and: 2)
```

这使其更具可读性。 现在，函数调用如下所示：

``` Swift
Print multiple of 4 and 2
```

如果愿意，可以更进一步，并将_用作所有参数，如下所示：

``` Swift
func printMultipleOf(_ multiplier: Int, _ value: Int) {
  print("\(multiplier) * \(value) = \(multiplier * value)")
}
printMultipleOf(4, 2)
```

在此示例中，所有参数都没有外部名称。 但这说明了如何明智地使用下划线。 在这里，你的表达式仍然可以理解，但是在没有外部参数名称的情况下，带有许多参数的更复杂的函数可能会变得混乱和笨拙。 想象一下，如果一个函数有五个参数！

你还可以为参数提供默认值：

``` Swift
func printMultipleOf(_ multiplier: Int, _ value: Int = 1) {
  print("\(multiplier) * \(value) = \(multiplier * value)")
}
printMultipleOf(4)
```

差异是第二个参数之后的= 1，这意味着如果第二个参数未提供任何值，则默认为1。

因此，此代码显示以下内容：

``` Swift
 4*1=4
```

当你希望参数在大多数情况下都是一个特定值时，使用默认值会很有用，并且在调用函数时可以简化代码。

## ***返回值***

到目前为止，你已经看到的所有功能都执行了一个简单的任务：打印出一些东西。 函数也可以返回一个值。 函数的调用者可以将返回值分配给变量或常量，或直接在表达式中使用它。

这意味着你可以使用函数来处理数据。 你只需通过参数输入数据，对其进行操作然后返回即可。

定义返回值的函数的方法如下：

``` Swift
func multiply(_ number: Int, by multiplier: Int) -> Int {
  return number * multiplier
}
let result = multiply(4, by: 2)
```

要声明一个函数返回一个值，你可以在括号组之后和左括号之前添加一个->，后跟返回值的类型。 在此示例中，该函数返回一个Int。

在函数内部，你可以使用return语句返回值。 在此示例中，你将返回两个参数的乘积。

也可以通过使用元组返回多个值：

``` Swift
func multiplyAndDivide(_ number: Int, by factor: Int) -> (product: Int, quotient: Int) {
  return (number * factor, number / factor)
}
let results = multiplyAndDivide(4, by: 2) 
let product = results.product
let quotient = results.quotient
```

此函数返回两个参数的乘积和商：它返回一个元组，其中包含两个带有适当成员值名称的Int值。
通过元组返回多个值的能力是使使用Swift成为一种乐趣的众多原因之一。 正如你很快就会看到的那样，它是一项非常有用的功能。

实际上，你可以通过删除返回值来简化这两个函数，如下所示：

``` Swift
func multiply(_ number: Int, by multiplier: Int) -> Int {
  number * multiplier
}
func multiplyAndDivide(_ number: Int, by factor: Int) -> (product: Int, quotient: Int) {
  (number * factor, number / factor)
}
```

你可以执行此操作，因为该函数是单个语句。 如果函数中包含更多行代码，则你将无法执行此操作。 此功能背后的想法是，在如此简单的功能中，它是如此明显，并且返回方式会影响可读性。

对于更长的函数，你需要返回，因为你可能会使函数在许多不同的地方返回。

## ***高级参数处理***

默认情况下，函数参数是常量，这意味着它们不能被修改。 为了说明这一点，请考虑以下代码：

``` Swift
func incrementAndPrint(_ value: Int) { 
    value += 1
    print(value)
}
```

这会导致错误：

``` Swift
Left side of mutating operator isn't mutable: 'value' is a 'let'
constant
```

参数值等效于用let声明的常量。 因此，当函数尝试对其进行递增时，编译器将发出错误。

需要注意的重要一点是，**Swift在将值传递给函数之前先将其复制，这种行为称为“按值传递”**。

>注意：按值传递和复制是你到目前为止在本书中看到的所有类型的标准行为。 在第13章“类”中，你将看到将事物传递给函数的另一种方法。

通常你想要这种行为。 理想情况下，函数不会更改其参数。 如果确实如此，那么你将无法确定参数的值，并且可能在代码中做出错误的假设，从而导致错误的数据。

有时，你确实希望让函数直接更改参数，这种行为称为 **“复制入复制出”** 或 **“按值调用结果”**。 你可以这样做：

``` Swift
func incrementAndPrint(_ value: inout Int) { 
    value += 1
    print(value)
}
```

在参数类型指示该参数应复制到该函数中使用的本地副本之前，先输入inout，然后在该函数返回时将其复制回。

你需要对函数调用进行一些微调以完成此示例。 在参数前添加与号（＆），以便在函数调用处清楚你正在使用复制输入复制输出：

``` Swift
 var value = 5
incrementAndPrint(&value)
print(value)
```

现在，该函数可以根据需要更改值。 本示例将打印以下内容：

``` Swift
6 
6
```

**函数递增值，函数完成后将保留其修改后的数据**。 值进入函数并再次返回，因此关键字为**inout**。

在某些情况下，**编译器可以将输入复制输出复制简化为所谓的“按引用传递”**。 参数值未复制到参数中。 相反，该参数将保留对原始值存储器的引用。 此优化可满足复制入复制的所有要求，同时消除了对复制的需求。

# **重载**

你是否注意到在前面的示例中，如何对多个不同的功能使用相同的功能名称？

``` Swift
func printMultipleOf(multiplier: Int, andValue: Int) 
func printMultipleOf(multiplier: Int, and value: Int) 
func printMultipleOf(_ multiplier: Int, and value: Int) 
func printMultipleOf(_ multiplier: Int, _ value: Int)
```

**这称为重载，可让你使用单个名称定义相似的函数**。

但是，编译器仍必须能够分辨出这些函数之间的区别。 每当你调用一个函数时，都应该始终清楚要调用哪个函数。 这通常是**通过参数列表中的差异来实现**的：

+ 不同数量的参数。
+ 不同的参数类型。
+ 不同的外部参数名称，例如printMultipleOf的情况。 

你还可以根据其他返回类型重载函数名称，如下所示：

``` Swift
func getValue() -> Int {
    31
}
func getValue() -> String {
  "Matt Galloway"
}
``` 

在这里，有两个称为`getValue()` 的函数，它们返回不同的类型。 一个为Int，另一个为String。

使用这些要复杂一些。 考虑以下：

``` Swift
let value = getValue()
```

Swift如何知道要调用哪个`getValue()`？ 答案是，不是。 而且它将打印以下错误：

``` Swift
error: ambiguous use of 'getValue()'
```

无法知道该调用谁。 这是鸡和蛋的情况。 目前尚不清楚什么是类型值，因此Swift不知道要调用哪个getValue()或getValue()的返回类型。

为了解决这个问题，你可以声明你想要的值是什么类型，如下所示：

``` Swift
let valueInt: Int = getValue()
let valueString: String = getValue()
```

这将在第一个实例中正确调用getValue()的Int版本，在第二个实例中正确调用getValue()的String版本。

值得注意的是，应谨慎使用重载。 仅将重载用于行为相关且相似的函数。

如上例所示，当仅返回类型被重载时，你松开类型推断，因此不建议这样做。

# **函数用作变量**

这可能令人惊讶，但是Swift中的函数仅仅是另一种数据类型。 你可以将它们分配给变量和常量，就像可以使用任何其他类型的值（例如Int或String）一样。

要查看其工作原理，请考虑以下功能：

``` Swift
func add(_ a: Int, _ b: Int) -> Int {
    a+b 
}
```

此函数采用两个参数并返回其值的总和。 你可以将此函数分配给变量，如下所示：

``` Swift
var function = add
```

此处，变量的名称为function，其类型推断为(Int, Int) ->
Int 你分配给它的add函数的Int值。

注意函数类型`（Int，Int）-> Int`的编写方式与你在函数声明中编写参数列表并返回类型。

在此，函数变量是具有两个Int参数并返回Int的函数类型。

现在，你可以像使用add一样使用function变量，如下所示：

``` Swift
function(4, 2)
```

返回6。

现在考虑以下代码：

``` Swift
func subtract(_ a: Int, _ b: Int) -> Int {
    a-b 
}
```

在这里，你声明另一个接受两个Int参数并返回Int的函数。 你可以将函数变量从before设置为新的减法函数，因为参数列表和减法的返回类型与函数变量的类型兼容。

``` Swift
function = subtract
function(4, 2)
```

这次，对函数的调用返回2。

可以将函数分配给变量的事实很方便，因为这意味着你可以将功能传递给其他功能。 这是一个实际的例子：

``` Swift
func printResult(_ function: (Int, Int) -> Int, _ a: Int, _ b: Int) {
  let result = function(a, b)
  print(result)
}
printResult(add, 4, 2)
```

printResult具有三个参数：

+ 1. function是具有两个Int参数并返回一个Int的函数类型，这样声明：（Int，Int）-> Int。
+ 2. a是Int类型的。
+ 3. b是Int类型。

printResult调用传入的函数，并向其中传递两个Int参数。 然后将结果打印到控制台：

``` Swift
 6
```

能够将功能传递给其他功能非常有用，并且可以帮助你编写可重用的代码。 你不仅可以传递数据进行操作，还可以将函数作为参数传递，这也意味着你可以灵活地执行代码。

## ***无返回值***

某些功能永远不会将控制权返回给调用者。例如，考虑一个旨在使应用程序崩溃的函数。也许这听起来很奇怪，所以让我解释一下：如果应用程序将要使用损坏的数据，通常最好崩溃而不是继续进入未知的潜在危险状态。函数fatalError（“终止原因”）是此类函数的示例。它会打印出致命错误的原因，然后停止执行以防止进一步损坏。

不可返回函数的另一个示例是处理事件循环的函数。事件循环是每个现代应用程序的核心，它们从用户那里获取输入并在屏幕上显示事物。事件循环服务来自用户的请求，然后将这些事件传递给应用程序代码，这又导致信息显示在屏幕上。然后，循环循环返回并为下一个事件服务。

这些事件循环通常是通过调用一个永不返回的函数在应用程序中启动的。对iOS或macOS应用进行编码后，遇到`UIApplicationMain`或`NSApplicationMain`时，请回头考虑本段。

Swift会向编译器抱怨一个函数永远不会返回，就像这样：

``` Swift
func noReturn() -> Never { 
    
}
```

请注意特殊的返回类型从不，表示该函数将永不返回。

如果你编写此代码，则会出现以下错误：

``` Swift
返回类型为'Never'的无人居住的函数在所有路径上都缺少对另一个永不返回函数的调用
```

这是一个漫长的说法，即该函数在返回自身之前不会调用另一个“不返回”函数。 当到达末尾时，该函数返回到调用它的位置，这违反了Never返回类型的约定。

无法返回的粗略但诚实的函数实现如下：

``` Swift
func infiniteLoop() -> Never { 
    while true {
    
    } 
}
```

你可能想知道为什么要打扰这种特殊的返回类型。 之所以有用，是因为编译器知道该函数永远不会返回，因此可以在生成调用该函数的代码时进行某些优化。 从本质上讲，调用该函数的代码无需在该函数调用后进行任何操作，因为它知道该函数永远不会在应用程序终止之前终止。

## ***编写好的函数***

函数使你可以解决许多问题。 最好做一个简单的任务，使它们更容易混合，匹配和建模为更复杂的行为。

使功能易于使用和理解！ 给它们定义明确的输入，每次产生相同的输出。 你会发现，独立进行良好，干净，简单的功能的推理和测试更加容易。

# **给函数添加注释**

所有优秀的软件开发人员都记录其代码。 ：]

对函数进行文档记录是确保以后再返回代码或与他人共享时可以理解的重要步骤，而无需仔细阅读代码。

幸运的是，Swift提供了一种非常简单的方法来记录功能，这些功能与Xcode的代码完成和其他功能很好地集成在一起。

它使用Swift之外许多其他语言使用的事实上的Doxygen注释标准。 让我们看一下如何记录函数：

``` Swift
/// Calculates the average of three values
/// - Parameters:
/// - a: The first value.
/// - b: The second value.
/// - c: The third value.
/// - Returns: The average of the three values.
func calculateAverage(of a: Double, and b: Double, and c: Double) -> Double {
  let total = a + b + c
  let average = total / 3
  return average
}
calculateAverage(of: 1, and: 3, and: 5)
```

你可以使用Triple- /代替通常的double //。 然后第一行是函数功能的描述。 接下来是参数列表，最后是返回值的描述。

如果你忘记了文档注释的格式，只需突出显示该功能，然后在Xcode中按“ Option-Command- /”即可。 Xcode编辑器将为你插入一个注释模板，然后你可以填写。

创建此类代码文档时，你会发现注释将Xcode中的字体从通常的等宽字体更改为。 整洁吧？ 是的，但是还有更多。

首先，代码完成时会显示你的文档，如下所示：

![playground](https://cdn.xuebaonline.com/sasb-f-stp2.png "")

另外，你还可以按住Option键并单击函数名，然后在方便的弹出框中显示你的文档，如下所示：

![playground](https://cdn.xuebaonline.com/sasb-f-stp3.png "")

这两个都是非常有用的，你应该考虑记录所有功能，尤其是那些经常使用或复杂的功能。 将来，你稍后会感谢你。 ：]

# **关键点**
+ 你可以使用一个函数来定义一个任务，该任务可以执行多次，而无需多次编写代码。
+ 函数可以采用零个或多个参数，并可以选择返回一个值。
+ 你可以在函数参数中添加外部名称以更改你使用的标签在函数调用中，也可以使用下划线表示无标签。
+ 参数作为常量传递，除非你将其标记为inout，在这种情况下，它们将被复制和复制。
+ 函数可以使用不同的参数使用相同的名称。 这称为超载。
+ 函数可以具有特殊的从不返回类型，以通知Swift该函数将永不退出。
+ 你可以将函数分配给变量，然后将其传递给其他函数。
+ 努力创建功能明确的名称，并具有可重复输入和输出的一项工作。
+ 可以通过使用///在函数前面加上注释部分来创建函数文档。

