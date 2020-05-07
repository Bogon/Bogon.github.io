---
title: 'Advanced Swift系列(四):  Functions'
description: 'Advanced Swift系列(四):  Functions'
permalink: 'Advanced Swift系列(四):  Functions'
copyright: ture
date: 2020-05-06 18:53:44
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Functions
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Functions]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

# **总览**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在打开本章之前，让我们回顾一下有关功能的要点。如果你已经熟悉一流的功能，请随时跳到下一部分。但是，如果你甚至不确定它们，请通读以下内容。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要了解 ```Swift中的函数``` 和 ```闭包``` ，你实际上需要理解三件事，大致按此重要性顺序排列：
+ 1.可以将函数分配给变量，并传入和传出其他函数作为参数，就像 ```Int``` 或 ```String``` 一样。
+ 2.函数可以捕获存在于其本地范围之外的变量。
+ 3.有两种创建功能的功能–使用 ```关键字``` 或 ```{}```。 ```Swift```调用后一个闭包表达式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，刚接触闭包主题的人会以相反的顺序来讲，可能会错过这些要点之一，或者他们将 ```闭包``` 和 ```闭包表达``` 这两个术语混为一谈，这可能会引起很多混乱。这是三足凳，如果你错过了以上三点之一，当你尝试坐下时会跌倒。

## ***可以将函数分配给变量，并可以将其他函数作为参数传入和传出***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与许多现代语言一样，在 ```Swift``` 中，功能被称为 ```“一流的对象”``` 。 你可以将函数分配给变量，也可以将它们传入和传出其他函数，以供以后调用。


<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是最重要的了解。 对于函数式编程，“获取”类似于在C语言中的“获取”指针。如果你不太了解这一部分，那么其他所有内容都将成为噪音。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从一个简单地输出整数的函数开始：

``` Swift
func printInt(i: Int) { 
    print("You passed \(i).")
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要将函数分配给变量 ```funVar``` ，我们仅使用函数名称作为值。 请注意，函数名称后没有括号：

``` Swift
let funVar = printInt
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以使用 ```funVar变量``` 调用 ```printInt函数``` 。 注意使用变量名称后的括号：

``` Swift
funVar(2) // You passed 2.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样值得注意的是，我们不能在 ```funVar``` 调用中包含参数标签，而 ```printInt``` 调用则需要参数标签，就像``` printInt（i：2）``` 一样。  ```Swift``` 仅允许在函数声明中使用参数标签； 标签未包含在函数的类型中。 这意味着你目前无法将参数标签分配给函数类型的变量，尽管在以后的 ```Swift版本``` 中这可能会发生变化。
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以编写一个以函数作为参数的函数：

``` Swift
func useFunction(function: (Int) -> () ) { 
    function(3)
}
useFunction(function: printInt) // You passed 3.
useFunction(function: funVar) // You passed 3.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么能够处理这么大的功能呢？ 因为它使你能够轻松编写 ```“高阶”函数``` ，这些函数将函数作为参数并以有用的方式应用它们，如我们在[**```“内置集合”```**](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "") 一章中所见。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数还可以返回其他函数：

``` Swift
func returnFunc() -> (Int) -> String { 
    func innerFunc(i: Int) -> String {
        return "You passed \(i)." 
        }
        return innerFunc
}
let myFunc = returnFunc() myFunc(3) // You passed 3.
```

## ***函数可以捕获存在于其局部范围之外的变量***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当函数引用超出其范围的变量时，这些变量将被捕获并留在它们周围，否则它们将超出范围并被销毁。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了看到这一点，让我们重新访问 ```returnFunc函数``` ，但是添加一个每次调用时都会增加的计数器：

``` Swift
func counterFunc() -> (Int) -> String { 
    var counter = 0
    func innerFunc(i: Int) -> String {
        counter += i // counter is captured
        return "Running total: \(counter)" 
    }
    return innerFunc 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，```counter```（作为 ```counterFunc``` 的局部变量）会在 ```return语句``` 之后超出范围，并被销毁。 相反，由于它是由 ```innerFunc``` 捕获的，因此Swift运行时将使其保持活动状态，直到捕获它的函数被销毁为止。 我们可以多次调用内部函数，并且看到运行总数增加了：

``` Swift
let f = counterFunc() 
f(3) // Running total: 3 
f(4) // Running total: 7
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果再次调用 ```counterFunc()``` ，将创建并捕获一个新的 ```counter变量``` ：

``` Swift
let g = counterFunc() 
g(2) // Running total: 2 
g(2) // Running total: 4
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这不会影响我们的第一个功能，该功能仍然具有自己捕获的counter版本：

``` Swift
f(2) // Running total: 9
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将这些函数及其捕获的变量组合起来，就像具有单个方法（函数）和某些成员变量（捕获的变量）的类实例一样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编程术语中，**函数和捕获变量的环境的组合称为闭包**。 因此，上面的f和g是闭包的示例，因为它们捕获并使用在其外部声明的非局部变量（计数器）。

## **可以使用{}语法为闭包表达式声明函数**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中，你可以通过两种方式定义函数。 一种是使用 ```func关键字``` 。 另一种方法是使用 ```闭包表达式``` 。 考虑使用以下简单函数将数字加倍：

``` Swift
func doubler(i: Int) -> Int { 
    return i*2
}
[1, 2, 3, 4].map(doubler) // [2, 4, 6, 8]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是使用闭包表达式语法编写的相同函数。 和以前一样，我们可以将其传递给 ```map``` ：

``` Swift
let doublerAlt = { (i: Int) -> Int in return i*2 } 
[1, 2, 3, 4].map(doublerAlt) // [2, 4, 6, 8]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以将声明为 ```闭包表达式的函数``` 视为 ```函数文字``` ，就像 ``1`` 和 `“hello”` 是整数和字符串文字一样。 它们也是匿名的-它们没有命名，与func关键字不同。 可以使用它们的唯一方法是在创建它们时将它们分配给变量（就像我们在doubler中所做的那样），或者将它们传递给另一个函数或方法。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以使用匿名函数的第三种方式：你可以直接在内部调用函数，作为定义该函数的同一表达式的一部分。 这对于定义初始化需要多行的属性很有用。 我们将在下面的惰性属性部分中看到一个示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```闭包表达式``` 声明的 ```doubler``` 和之前使用 **func关键字声明的doubler完全等效** ，除了上面提到的参数标签处理方式不同。 与某些语言不同，它们甚至存在于相同的`“命名空间”`中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么 ```{}``` 语法有用呢？ 为什么不每次都使用`func`？ 好吧，它可以紧凑得多，尤其是在编写快速函数以传递给其他函数（例如map）时。 这是我们的doubler `map`示例，其格式简短得多：

``` Swift
[1, 2, 3].map { $0 * 2 } // [2, 4, 6]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这看起来非常不同，因为我们利用了 `Swift` 的多项功能来制作代码更简洁。 在这里，它们一一对应：

+ 1.如果你要传递的闭包参数不正确，则无需先将其存储在本地变量中。可以认为这就像将数字表达式（例如5 * i）传递给以Int作为参数的函数一样。

+ 2.如果编译器可以从上下文中推断出类型，则无需指定它。在我们的示例中，传递给map的函数采用一个Int（根据数组元素的类型推断）并返回一个Int（根据乘法表达式的类型推断）。

+ 3.如果closureexpression的主体包含与leexpression相同的值，它将自动返回该表达式的值，你可以不使用该返回值。

+ 4.Swift自动为该函数的参数提供缩写名称-第一个为 $0 ，第二个为 $1 ，依此类推。

+ 5.如果无法执行该函数的闭包表达式，则可以将表达式移到函数调用括号之外。如果你有多行闭包表达式，那么这种尾随的闭包语法非常有用，因为它更类似于常规函数定义或其他块语句，例如 if expr {}。

+ 6.最后，如果功能没有其他说法，则可以关闭在函数名称后的所有括号之间都不要加上括号。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用这些规则，我们可以将下面的表达式简化为上面所示的形式：

``` Swift
[1, 2, 3].map( { (i: Int) -> Int in return i * 2 } ) 
[1, 2, 3].map( { i in return i * 2 } )
[1, 2, 3].map( { i in i * 2 } )
[1, 2, 3].map( { $0 * 2 } )
[1, 2, 3].map() { $0 * 2 } 
[1, 2, 3].map{$0*2}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不熟悉 ```Swift``` 的语法以及一般的 ```函数式编程``` ，那么这些紧凑的函数声明乍一看似乎令人生畏。但是随着你对语法和函数式编程风格的逐渐熟悉，它们会开始变得更加自然，并且你将欣赏消除混乱的功能，从而可以更清楚地看到代码在做什么。一旦你习惯于阅读这样编写的代码，与使用常规for循环编写的等效代码相比，一目了然地进行解析。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时， ```Swift``` 需要帮助来 ```推断类型``` 。有时，你可能会出错，并且类型不是你认为应该的。如果你在尝试提供 ```闭包表达式``` 时遇到神秘的错误，最好写出完整的表格（上面的第一个版本）并附上类型。在许多情况下，这将有助于弄清问题出在哪里。完成长格式编译后，再次将类型一一取出，直到编译器抱怨为止。如果错误是你的错误，则将在此过程中修复你的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 也会坚持让你有时更露骨。例如，你不能完全忽略输入参数。假设你想要一个随机数数组。一种快速的方法是使用仅生成随机数的函数映射范围。但是，你必须提供一个参数。在这种情况下，你可以使用 `_` 来指示编译器你确认有一个参数，但是你并不关心它是什么：

``` Swift
(0..<3).map { _ in Int.random(in: 1..<100) } // [3, 63, 60]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你需要显式键入变量时，不必在闭包内进行操作 closure表达。 例如，尝试定义不带任何类型的 ```isEven``` ：

``` Swift
let isEven = { $0 % 2 == 0 }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面，将 ```isEven``` 的类型推断为 `（Int）-> Bool `，就像让 `i = 1` 推断为 ```Int``` 一样，因为 ```Int``` 是整数文字的默认类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是因为标准库中的类型别名 ```IntegerLiteralType``` ：

``` Swift
protocol ExpressibleByIntegerLiteral { associatedtype IntegerLiteralType
/// Create an instance initialized to `value`. init(integerLiteral value: IntegerLiteralType)
}
/// The default type for an otherwise-unconstrained integer literal.
typealias IntegerLiteralType = Int
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要定义自己的类型别名，它将覆盖默认的别名，然后更改此行为：

``` Swift
change this behavior:
typealias IntegerLiteralType = UInt32 let i = 1 // i will be of type UInt32.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这几乎肯定是一个坏主意。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，如果你需要另一版本的 ```isEven版本``` ，则可以在**闭包表达式**中键入参数和返回值：

``` Swift
let isEvenAlt = { (i: Int8) -> Bool in i % 2 == 0 }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是你也可以从闭包外部提供上下文：

``` Swift

let isEvenAlt2: (Int8) -> Bool = { $0 % 2 == 0 } 
let isEvenAlt3 = { $0 % 2 == 0 } as (Int8) -> Bool
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于闭包表达式最常用于现有输入或输出类型的某些上下文中，因此通常不需要添加显式类型，但是知道你可以执行此操作很有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，最好将isEven的通用版本定义为适用于任何整数的计算属性：

``` Swift
extension BinaryInteger {
    var isEven: Bool { 
        return self % 2 == 0 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，我们可以选择将所有Integer类型的isEven变量定义为自由函数：

``` Swift
func isEven<T: BinaryInteger>(_ i: T) -> Bool { returni%2==0
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想将该自由函数分配给变量，那么这也就意味着你必须锁定它正在操作的特定类型。 变量不能包含通用函数-只能是特定的一个：

``` Swift
let int8IsEven: (Int8) -> Bool = isEven
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于命名的最后一点。 请务必记住，用 ```func``` 声明的函数可以是闭包，就像用 ```{}``` 声明的函数一样。 请记住，**闭包是与任何捕获的变量组合的函数**。 虽然用**{}创建的函数称为闭包表达式**，但人们通常将此语法称为**闭包**。 但是请不要感到困惑，并认为使用闭包表达式语法声明的函数与其他函数不同-没什么不同。 它们既是函数，也可以是闭包。

# **Flexibility through Functions**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "")一章中，我们讨论了通过将函数作为参数传递来对行为进行参数化。 让我们来看另一个例子：排序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift中对集合进行排序很简单：

``` Swift
let myArray = [3, 1, 2] 
myArray.sorted() // [1, 2, 3]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共有四种排序方法：`非变异变体sorted(by :)` 和 `变异sor(by :)` ，对于默认不以升序对可比较事物进行排序且不带参数的版本，将其乘以2。 对于最常见的情况，你只需要 `sorted()` 。 而且，如果你想以其他顺序排序，只需提供一个函数即可：

``` Swift
myArray.sorted(by: >) // [3, 2, 1]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的元素不符合 ```Comparable``` , 但你还可以提供函数像元组一样有一个 `<运算符` ：

``` Swift
var numberStrings = [(2, "two"), (1, "one"), (3, "three")] 
numberStrings.sort(by: <)
numberStrings // [(1, "one"), (2, "two"), (3, "three")]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，如果你想按一些任意条件排序，则可以提供更复杂的功能：

``` Swift

let animals = ["elephant", "zebra", "dog"] animals.sorted { lhs, rhs in
let l = lhs.reversed()
let r = rhs.reversed()
return l.lexicographicallyPrecedes(r)
}
// ["zebra", "dog", "elephant"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是最后一项功能-使用任何比较功能对集合进行排序的能力-使Swift排序如此强大。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将此与`Objective-C`中的排序方式进行比较。如果要使用`Foundation`对数组进行排序，则会遇到一长串不同的选项：有些排序方法将选择器，块或函数指针作为比较谓词，或者可以传入`NSSortDescriptors`数组定义排序标准。所有这些功能都提供了很大的灵活性和功能，但是却以复杂性为代价-无法选择 **“仅根据默认顺序进行常规排序”** 。 `Foundation`中的某些变体（例如，将块作为比较谓词的方法）与`Swift`的`sorted（by :)`方法基本相同；其他版本（例如带有排序描述符数组的版本）则充分利用了`Objective-C`的动态特性，从而获得了一种非常灵活和强大的（如果是弱类型的）`API`，该`API`无法直接移植到`Swift`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift`中仍然支持`选择器`和`动态调度`，但是`Swift标准库`倾向于使用基于`函数`的方法。在本节中，我们将演示如何**使用函数作为参数以及将函数作为数据如何以完全类型安全的方式复制相同的功能**。让我们看一个受苹果文档中`“排序描述符编程主题”`指南启发的复杂示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们首先定义一个`Person`类型。因为我们想展示`Objective-C`强大的运行时系统是如何工作的，所以我们必须使该对象成为`NSObject子类`（在纯`Swift`中，结构可能是更好的选择）。我们还使用`@objcMembers`对该类进行注释，以使所有成员对`Objective-C`可见：

``` Swift
@objcMembers
final class Person: NSObject {
    let first: String 
    let last: String
    let yearOfBirth: Int

    init(first: String, last: String, yearOfBirth: Int) {
        self.first = first
        self.last = last
        self.yearOfBirth = yearOfBirth
        // super.init() implicitly called here
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还定义了一系列具有不同姓名和出生年月的人：

``` Swift
let people = [
Person(first: "Emily", last: "Young", yearOfBirth: 2002), 
Person(first: "David", last: "Gray", yearOfBirth: 1991), 
Person(first: "Robert", last: "Barnes", yearOfBirth: 1985), 
Person(first: "Ava", last: "Barnes", yearOfBirth: 2000), 
Person(first: "Joanne", last: "Miller", yearOfBirth: 1994), 
Person(first: "Ava", last: "Barnes", yearOfBirth: 1998),
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要首先按姓氏，然后按名字，最后按出生年份对这个数组进行排序。 订购应遵守用户的语言环境设置。 `NSSortDescriptor`对象描述了如何对对象进行排序，我们可以使用它们来表示各个排序标准（使用`localizedStandardCompare`作为符合区域设置的比较器方法）：

``` Swift
let lastDescriptor = NSSortDescriptor(key: #keyPath(Person.last), ascending: true,
selector: #selector(NSString.localizedStandardCompare(_:)))

let firstDescriptor = NSSortDescriptor(key: #keyPath(Person.first), ascending: true,
selector: #selector(NSString.localizedStandardCompare(_:)))

let yearDescriptor = NSSortDescriptor(key: #keyPath(Person.yearOfBirth), ascending: true)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要对数组进行排序，我们可以在`NSArray`上使用`sortedArray（using :)`方法。 这需要一个排序描述符列表。 为了确定两个元素的顺序，该方法首先使用第一个排序描述符并使用该结果。 但是，如果根据第一个描述符，两个元素相等，则使用第二个描述符，依此类推：

``` Swift
let descriptors = [lastDescriptor, firstDescriptor, yearDescriptor]
(people as NSArray).sortedArray(using: descriptors)
/*
[Ava Barnes (1998), Ava Barnes (2000), Robert Barnes (1985),
David Gray (1991), Joanne Miller (1994), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排序描述符使用了`Objective-C`的两个运行时功能：首先，键是一个`Objective-C`的键路径，它实际上只是一个包含属性名称链表的字符串。不要将这些与`Swift 4`中引入的`Swift`的本机（强类型）键路径混淆。我们将在下文中对后者进行更多说明。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Objective-C`运行时的第二个功能是```键值编码```，它可以在运行时查找键的值。选择器参数带有一个选择器（它实际上也只是描述方法名称的字符串）。在运行时，选择器用于查找比较功能，当比较两个对象时，使用该比较功能比较键的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是运行时编程的一种很酷的用法，尤其是当你意识到可以例如在用户单击列标题的情况下在运行时构建排序描述符数组时。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们如何使用`Swift`的排序功能来复制此功能？复制排序的各个部分很简单-例如，如果你想使用`localizedStandardCompare`对数组进行排序：

``` Swift
var strings = ["Hello", "hallo", "Hallo", "hello"]
strings.sort { $0.localizedStandardCompare($1) == .orderedAscending } strings // ["hallo", "Hallo", "hello", "Hello"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你只想使用一个对象的单个属性进行排序，那也很简单：

``` Swift
people.sorted { $0.yearOfBirth < $1.yearOfBirth }
/*
[Robert Barnes (1985), David Gray (1991), Joanne Miller (1994),
Ava Barnes (1998), Ava Barnes (2000), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，当将可选属性与`localizedStandardCompare`之类的方法结合使用时，这种方法效果不佳–丑陋得很快。 例如，考虑按文件扩展名对文件名数组进行排序（使用[***```“可选”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "")一章中的fileExtension属性）：

``` Swift
var files = ["one", "file.h", "file.c", "test.h"] 
files.sort { l, r in r.fileExtension.flatMap {
    l.fileExtension?.localizedStandardCompare($0) } == .orderedAscending 
}
files // ["one", "file.c", "file.h", "test.h"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这很丑。 稍后，我们将使排序时使用可选选项更加容易。 但是，到目前为止，我们甚至都没有尝试过按多个属性进行排序。 要按姓氏，然后按名字排序，我们可以使用标准库的`lexicographicallyPrecedes`方法。 这需要两个序列，并通过遍历每一对元素直到找到一个不相等的元素来执行电话簿样式的比较。 因此，我们可以构建元素的两个数组并使用`lexicographicallyPrecedes`进行比较。 此方法还需要一个函数来执行比较，因此我们将对`localizedStandardCompare`的使用放在函数中：

``` Swift

people.sorted { p0, p1 in
    let left = [p0.last, p0.first]
    let right = [p1.last, p1.first]
    return left.lexicographicallyPrecedes(right) {
        $0.localizedStandardCompare($1) == .orderedAscending 
    }
}
/*
[Ava Barnes (2000), Ava Barnes (1998), Robert Barnes (1985),
David Gray (1991), Joanne Miller (1994), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此，我们几乎以几乎相同的行数复制了原始排序的功能。 但是仍然有很多改进的余地：每次比较的数组构建效率都很低，比较是硬编码的，使用这种方法我们无法真正按照`yearOfBirth`进行排序。

# **Functions as Data**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们退后一步，而不是编写一个我们可以用来排序的更复杂的函数。 上面的排序描述符更加清晰，但是它们使用运行时编程。 我们编写的函数未使用运行时编程，但编写（和读取）起来并不那么容易。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**排序描述符是描述对象顺序的一种方式**。 代替将信息存储为类，我们可以定义一个函数来描述对象的顺序。 最简单的定义是采用两个对象，如果顺序正确，则返回 `true` 。 这也正是标准库的`sort（by :)`和`sorted（by :)`方法作为参数的类型。 让我们定义一个通用类型别名来描述`排序描述符`：

``` Swift
/// A sorting predicate that returns `true` if the first
/// value should be ordered before the second. 
typealias SortDescriptor<Root> = (Root, Root) -> Bool
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，我们可以定义一个排序描述符，该描述符按出生年份比较两个`Person`对象，或者一个按姓氏排序的排序描述符：

``` Swift
let sortByYear: SortDescriptor<Person> = { 
    $0.yearOfBirth < $1.yearOfBirth 
} 

let sortByLastName: SortDescriptor<Person> = {
    $0.last.localizedStandardCompare($1.last) == .orderedAscending 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无需手动编写排序描述符，我们可以编写一个生成它们的函数。 我们不得不两次写相同的属性是不好的：在`sortByLastName`中，我们很容易犯了一个错误，并且意外地将 `$0.last` 与 `$1.first` 进行了比较。 另外，编写这些排序描述符也很麻烦； 要按名字排序，最简单的方法是复制并粘贴`sortByLastName`定义并进行修改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了可以复制和粘贴外，我们还可以使用带有类似于`NSSortDescriptor`的接口定义函数，而无需进行运行时编程。 此函数将函数键作为第一个参数：给定要排序的数组元素，它返回排序描述符正在处理的属性的值。 然后使用`areInIncreasingOrder`函数比较两个值。 最后，即使类型别名稍微掩盖了这个事实，返回类型也是一个函数：

``` Swift
/// Builds a `SortDescriptor` function from a sorting predicate
/// and a `key` function that, given an element to compare, produces /// the value that should be used by the sorting predicate.
func sortDescriptor<Root, Value>(
key: @escaping (Root) -> Value,
by areInIncreasingOrder: @escaping (Value, Value) -> Bool) -> SortDescriptor<Root>
{
    return { areInIncreasingOrder(key($0), key($1))  } 
}
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关键功能描述了如何深入到`Root类型`的元素并提取与一个特定排序步骤相关的`Value类型`的值。 它与`Swift 4`中引入的`Swift`本机键路径有很多共通之处，这就是我们借用通用参数命名的原因—根和值—来自`KeyPath类型`。 在本章的后面，我们将讨论如何使用`Swift`的键路径重写排序描述符。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这允许我们以不同的方式定义 `sortByYear` ：

``` Swift
let sortByYearAlt: SortDescriptor<Person> = sortDescriptor(key: { $0.yearOfBirth }, by: <)
people.sorted(by: sortByYearAlt)
/*
[Robert Barnes (1985), David Gray (1991), Joanne Miller (1994),
Ava Barnes (1998), Ava Barnes (2000), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们甚至可以定义一个适用于所有`Comparable类型`的重载变量：

``` Swift
func sortDescriptor<Root, Value>(key: @escaping (Root) -> Value) -> SortDescriptor<Root> where Value: Comparable
{
return { key($0) < key($1) }
}
let sortByYearAlt2: SortDescriptor<Person> =
sortDescriptor(key: { $0.yearOfBirth })
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的两个`sortDescriptor变体`都可以使用返回布尔值的函数，因为这是标准库的比较谓词约定。 另一方面，像`localizedStandardCompare`这样的`Foundation API`则希望使用三向比较结果值（升序，降序或相等）。 添加对此的支持也很容易：

``` Swift
func sortDescriptor<Root, Value>( key: @escaping (Root) -> Value, ascending: Bool = true,
by comparator: @escaping (Value) -> (Value) -> ComparisonResult)
-> SortDescriptor<Root> {
    return { lhs, rhs in
        let order: ComparisonResult = ascending
        ? .orderedAscending
        : .orderedDescending
        return comparator(key(lhs))(key(rhs)) == order
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使我们能够以更短更清楚的方式编写`sortByFirstName`：

``` Swift
let sortByFirstName: SortDescriptor<Person> =
sortDescriptor(key: { $0.first }, by: String.localizedStandardCompare)
people.sorted(by: sortByFirstName)
/*
[Ava Barnes (2000), Ava Barnes (1998), David Gray (1991),
Emily Young (2002), Joanne Miller (1994), Robert Barnes (1985)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此`SortDescriptor`与`NSSortDescriptor`变体一样具有表现力，但类型安全，并且不依赖于运行时编程。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前，我们只能使用单个`SortDescriptor函数`对数组进行排序。 如果你回想起基于`NSSortDescriptor`的示例，我们使用了`NSArray.sortedArray（using :)`方法对具有多个比较运算符的数组进行排序。 我们可以轻松地向`Array`甚至`Sequence协议`添加类似的方法。 但是，我们必须添加两次：一次用于`sort的变异变体`，一次用于`sort的非变异变体`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们采用了不同的方法，因此我们不必编写更多扩展：我们编写了一个将多个排序描述符合并为一个排序描述符的函数。 它的工作方式类似于`sortedArray（using :)`方法：首先，它尝试第一个描述符并使用该比较结果。 但是，如果结果相等，它将使用第二个描述符，依此类推，直到描述符用完为止：

``` Swift
func combine<Root>
(sortDescriptors: [SortDescriptor<Root>]) -> SortDescriptor<Root> { 
    return { lhs, rhs in
        for areInIncreasingOrder in sortDescriptors {
            if areInIncreasingOrder(lhs, rhs) { return true }
            if areInIncreasingOrder(rhs, lhs) { return false } 
        }
        return false
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们终于可以复制初始示例：

``` Swift
let combined: SortDescriptor<Person> = combine(
sortDescriptors: [sortByLastName, sortByFirstName, sortByYear]
)
people.sorted(by: combined)
/*
[Ava Barnes (1998), Ava Barnes (2000), Robert Barnes (1985),
David Gray (1991), Joanne Miller (1994), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们最终获得了与`Foundation版本`相同的行为和功能，但是我们的解决方案更安全，并且在`Swift`中更加惯用。由于`Swift版本`不依赖运行时编程，因此编译器还可以更好地对其进行优化。另外，我们可以将其与结构或`非Objective-C`对象一起使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于函数的方法的一个缺点是函数是不透明的。我们可以使用`NSSortDescriptor`并将其打印到控制台，然后获得有关排序描述符的一些信息：`键路径，选择器名称和排序顺序`。我们基于功能的方法无法做到这一点。如果需要这些信息很重要，我们可以将函数包装在结构或类中，并存储其他调试信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种将`函数用作数据的方法`（将它们存储在数组中并在运行时构建这些数组）开辟了新的动态行为水平，这是一种像`Swift`这样的面向静态类型的面向编译时的语言仍然可以复制其中一些内容的方法。诸如`Objective-C`或`Ruby`之类的语言的动态行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还看到了编写结合其他功能的功能的有用性，这是功能编程的组成部分之一。例如，我们的`Combine（sortDescriptors :)`函数采用了一组排序描述符，并将它们组合为一个排序描述符。这是一项非常强大的技术，具有许多不同的应用程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，我们甚至可以编写一个自定义运算符来组合两个排序函数：

``` Swift
infix operator <||> : LogicalDisjunctionPrecedence
func <||><A>(lhs: @escaping (A,A) -> Bool, rhs: @escaping (A,A) -> Bool)
-> (A,A) -> Bool {
    return{ x,yin
        if lhs(x, y) { return true }
        if lhs(y, x) { return false }
        // Otherwise they're the same, so we check for the second condition. 
        if rhs(x, y) { return true }
        return false
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在大多数情况下，编写自定义运算符不是一个好主意。 自定义运算符通常比函数难读，因为运算符没有易于解释的名称。 但是，当少量使用它们时，它们可能会非常强大。 上面的运算符允许我们重写组合的排序示例，如下所示：

``` Swift
let combinedAlt = sortByLastName <||> sortByFirstName <||> sortByYear people.sorted(by: combinedAlt)
/*
[Ava Barnes (1998), Ava Barnes (2000), Robert Barnes (1985),
David Gray (1991), Joanne Miller (1994), Emily Young (2002)] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这读起来很清楚，也许也比替代方法更简洁地表达了代码的意图，但前提是你（和代码的所有其他阅读者）已经深深理解了操作员的含义。与自定义运算符相比，我们更喜欢`Combine（sortDescriptors :)`函数。在呼叫站点更清晰，最终使代码更具可读性。除非你编写的是特定于域的高度代码，否则自定义运算符可能会过分杀人。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Foundation版本`与我们的版本相比仍然具有一个功能优势：它可以处理可选内容，而无需编写更多代码。例如，如果我们将`Person`的最后一个属性设为可选字符串，则无需在使用`NSSortDescriptor`的排序代码中进行任何更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于函数的版本需要一些额外的代码。你可能会猜到接下来会发生什么：我们再一次编写一个接受一个函数并返回一个函数的函数。我们可以使用一个常规的比较函数（例如`localizedStandardCompare`），该函数对两个字符串起作用，然后将其转换为一个对两个字符串进行可选的函数。如果两个值均为零，则它们相等。如果左侧为零，但右侧不是，则它们在上升，反之亦然。最后，如果它们都不为零，我们可以使用`compare函数`对它们进行比较：

``` Swift
func lift<A>(_ compare: @escaping (A) -> (A) -> ComparisonResult) -> (A?) -> (A?) -> ComparisonResult
{
    return { lhsin { rhs in
            switch (lhs, rhs) {
                case (nil, nil): return .orderedSame 
                case (nil, _): return .orderedAscending 
                case (_, nil): return .orderedDescending 
                case let (l?, r?): return compare(l)(r)
            }
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使我们可以将常规比较函数`“提升”`到可选对象的域中，并且可以与我们的`sortDescriptor`函数一起使用。 如果你从前回想起`files数组`，则通过`fileExtension`对其进行排序确实很丑陋，因为我们不得不处理可选参数。 但是，有了我们的新举升功能，它又可以干净了：

``` Swift
let compare = lift(String.localizedStandardCompare)
let result = files.sorted(by: sortDescriptor(key: { $0.fileExtension },
by: compare))
result // ["one", "file.c", "file.h", "test.h"]
```

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以为返回布尔的函数编写类似版本的`lift`。 正如我们在[***```“可选内容”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "")一章中看到的那样，标准库不再提供诸如`>的比较运算符`作为可选内容。 删除它们是因为如果你不小心使用它们可能会导致令人惊讶的结果。 布尔值的`lift`变量使你可以轻松使用现有的运算符，并在需要功能时使其成为可选函数。

# **Functions as Delegates**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Delegates``` 他们无处不在。 这条消息深深打入了```Objective-C（和Java）```程序员的脑海：**使用协议（接口）进行回调**。 你定义一个`协议`，你的`所有者实现该协议`，然后将其注册为你的委托，以便获取回调。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果委托协议仅包含一个方法，则可以将存储委托对象的属性替换为直接存储回调函数的属性。 但是，要记住一些折衷方案。

## ***Delegates, Cocoa Style***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，以与`Cocoa`定义其无数个委托协议相同的方式创建一个协议。 来自`Objective-C`的大多数程序员多次编写这样的代码：

``` Swift
protocol AlertViewDelegate: AnyObject { 
    func buttonTapped(atIndex: Int)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`AlertViewDelegate`被定义为`仅类协议`（通过从`AnyObject`继承），因为我们希望我们的`AlertView类`保留对委托的弱引用。 这样，我们就不必担心引用周期。 `AlertView`永远不会强烈保留其委托，因此，即使委托（直接或间接）对警报视图有很强的引用，一切都很好。 如果委托被取消初始化，则委托属性将自动变为nil：

``` Swift
class AlertView {
    var buttons: [String]
    weak var delegate: AlertViewDelegate?
    init(buttons: [String] = ["OK", "Cancel"]) { 
        self.buttons = buttons
    }
    func fire() { 
        delegate?.buttonTapped(atIndex: 1)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们处理课程时，这种模式非常有效。 例如，假设我们有一个`ViewController类`，该类初始化警报视图并将其自身设置为委托。 由于该代表被标记为弱者，因此我们无需担心循环引用：

``` Swift
class ViewController: AlertViewDelegate { 
    let alert: AlertView
    init() {
        alert = AlertView(buttons: ["OK", "Cancel"]) 
        alert.delegate = self
    }
    func buttonTapped(atIndex index: Int) { 
        print("Button tapped: \(index)")
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常的做法是始终将代表属性标记为 ***```weak```***。 这个约定使内存管理的推理变得非常容易，因为实现委托协议的类不必担心创建```循环引用```。

## ***使用结构的Delegate***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时我们可能想要一个由结构体实现的委托协议。 使用`AlertViewDelegate`的当前定义，这是不可能的，因为它是仅类的协议。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过不将`AlertViewDelegate`定义为仅`类协议`来放松其定义。 另外，我们将`buttonTapped（atIndex :)`方法标记为变异。 这样，当方法被调用时，结构可以自行变异：

``` Swift
protocol AlertViewDelegate {
    mutating func buttonTapped(atIndex: Int)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还必须更改`AlertView`，因为委托属性不能再弱了：

``` Swift
class AlertView {
    var buttons: [String]
    var delegate: AlertViewDelegate?
    init(buttons: [String] = ["OK", "Cancel"]) { 
        self.buttons = buttons
    }
    func fire() { 
        delegate?.buttonTapped(atIndex: 1)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们为委托属性分配一个对象，则将强引用该对象。 特别是在与````Delegate````合作时， ```strong reference``` 意味着我们很有可能在某个时候引入循环引用。 但是，我们现在可以使用结构。 例如，我们可以创建一个记录所有按钮点击的结构：

``` Swift
struct TapLogger: AlertViewDelegate {
    var taps: [Int] = []
    mutating func buttonTapped(atIndex index: Int) {
        taps.append(index) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;起初，似乎一切正常。 我们可以创建一个警报视图和一个记录器，然后将两者连接起来。如果我们在触发事件后查看```logger.taps```，则该数组仍为空：

``` Swift
let alert = AlertView() 
var logger = TapLogger() 
alert.delegate = logger 
alert.fire()
logger.taps // []
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们分配给 `alert.delegate` 时，`Swift`复制了该结构。 因此，这些 `taps` 不是记录在记录器中，而是记录在`alert.delegate`中。 更糟糕的是，当我们分配值时，我们失去了价值的类型。 为了获取信息，我们需要使用条件类型转换：

``` Swift
if let theLogger = alert.delegate as? TapLogger { 
    print(theLogger.taps)
}
// [1]
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显然，这种方法行不通。 使用类时，创建引用循环很容易；使用结构时，原始值不会发生突变。 简而言之：使用结构时，委托协议没有多大意义。

## ***用函数代替 Delegates***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果委托协议仅定义了一个方法，我们可以简单地将委托属性替换为直接存储回调函数的属性。 在我们的情况下，这可以是一个可选的 `buttonTapped属性` ，默认情况下为`nil`：

``` Swift
class AlertView {
    var buttons: [String]
    var buttonTapped: ((_ buttonIndex: Int) -> ())?
    init(buttons: [String] = ["OK", "Cancel"]) { 
        self.buttons = buttons
    }
    func fire() { 
        buttonTapped?(1)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数类型的`（_ buttonIndex：Int）->（）`表示法有点奇怪，因为内部名称 `buttonIndex` 与代码中的其他地方无关。 上面我们提到，不幸的是，函数类型没有参数标签； 但是，它们可以具有显式的空白参数标签和内部参数名称。 这是经过官方批准的解决方法，可以在函数类型标签中提供参数以用于文档编制，直到Swift支持更好的方法为止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;和以前一样，我们可以创建一个`logger结构`，然后创建一个警报视图实例和一个`logger`变量：

``` Swift
struct TapLogger { 
    var taps: [Int] = []
    mutating func logTap(index: Int) { 
        taps.append(index)
    } 
}
let alert = AlertView() 
var logger = TapLogger()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，我们不能简单地将 `logTap方法` 分配给 `buttonTapped属性` 。 Swift编译器告诉我们“不允许部分应用`'mutating'方法”`：

``` Swift
alert.buttonTapped = logger.logTap // Error
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的代码中，尚不清楚应在作业中执行什么操作。 记录器是否被复制？ 还是应该buttonTapped改变原始变量（即记录器被捕获）？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使这项工作有效，我们必须将赋值的右边包装在一个闭包中。 这样做的好处是非常清楚地表明，我们现在正在捕获原始的logger变量（而不是值），并且正在对其进行突变：

``` Swift
alert.buttonTapped = { logger.logTap(index: $0) }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个好处是，现在取消了命名的耦合：回调属性称为`buttonTapped`，而实现该属性的函数称为`logTap`。 除了方法之外，我们还可以指定一个匿名函数：

``` Swift
alert.buttonTapped = { print("Button \($0) was tapped") }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将回调与类结合使用时，有一些警告。 让我们回到我们的视图控制器示例。 在其初始值设定项中，视图控制器现在可以将其`buttonTapped方法`分配给警报视图的回调处理程序，而不必将自己分配为警报视图的委托：

``` Swift
class ViewController { 
    let alert: AlertView
    init() {
        alert = AlertView(buttons: ["OK", "Cancel"]) 
        alert.buttonTapped = self.buttonTapped(atIndex:)
    }
    func buttonTapped(atIndex index: Int) { 
        print("Button tapped: \(index)")
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`alert.buttonTapped = self.buttonTapped（atIndex :)`行看起来像是一个无辜的任务，但是请注意：我们刚刚创建了一个引用循环！ 对对象的实例方法的每个引用（例如示例中的`self.buttonTapped`）都隐式捕获对象。 要了解为什么必须这样做，请考虑警报视图的角度：当警报视图调用存储在其`buttonTapped属性`中的回调函数时，该函数必须以某种方式“知道”它需要调用哪个对象的实例方法，即 仅存储对`ViewController.buttonTapped（atIndex :)`的引用而不知道实例是不够的。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将`self.buttonTapped（atIndex :)`缩短为`self.buttonTapped`或仅仅为`buttonTapped`; 所有这三个都指同一个功能。 可以省略参数标签，只要这样做不会造成歧义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了避免强引用，通常需要将方法调用包装在另一个弱捕获对象的闭包中：

``` Swift
alert.buttonTapped = { [weak self] index in 
    self?.buttonTapped(atIndex: index)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，警报视图就不会强烈引用视图控制器。 如果我们可以保证警报视图的生命周期与视图控制器相关联，那么另一种选择是使用无所有权而不是弱项。 弱，如果警报视图超出视图控制器，则在调用函数时`self`在闭包内为`nil`。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你查看了`ViewController.buttonTapped`表达式的类型，你会注意到它是`（ViewController）->（Int）->（）`。 发生什么事了？在幕后，实例方法被建模为以下函数：
给定实例，返回另一个函数，然后对该函数进行操作实例。 `someVC.buttonTapped`实际上只是编写`ViewController.buttonTapped（someVC）`的另一种方式-这两个表达式都返回一个`（Int）->（）`类型的函数，而该函数是一个已强烈捕获`someVC实例`的闭包。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如我们所见，`协议和回调函数`之间存在一定的权衡。协议增加了一些冗长性，但是具有弱委托的纯类协议无需担心引入引用循环。用函数替换委托可以增加很多灵活性，并允许你使用结构和匿名函数。但是，在处理类时，需要注意不要引入引用循环。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，当你需要多个紧密相关的回调函数时（例如，为表视图提供数据时），将它们按协议分组在一起而不是单独进行回调会很有帮助。另一方面，当使用协议时，单个类型必须实现所有方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要取消注册委托或函数回调，我们可以简单地将其设置为nil。当我们的类型存储委托或回调数组时该怎么办？使用基于类的委托，我们可以简单地从委托列表中删除一个对象。使用回调函数，这并不是那么简单。我们无法添加功能，因此需要添加额外的基础架构以进行注销。

## ***输入参数和突变方法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在`Swift`中`inout参数`前面使用的`“＆”`可能会给你印象，特别是如果你具有`C`或`C ++`背景的话，`inout参数`本质上是通过**引用**。 但事实并非如此。 ```inout```是***按值传递和复制回传，而不是按引用传递***。 引用Swift编程语言：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inout参数具有一个值，该值传递给函数，由函数修改，然后从函数传递回以替换原始值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了了解可以将哪种表达式作为`inout参数传递`，我们需要区分左值和右值。 左值描述内存位置。 `lvalue`是“左值”的缩写，因为左值是可以出现在赋值左侧的表达式。 例如，`array [0]`是一个左值，因为它描述了数组中第一个元素的存储位置。 右值描述一个值。 2 + 2是一个值，它描述了值4。 你不能在赋值语句的左侧输入2 + 2或4。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于`inout参数`，你只能传递左值，因为突变右值没有意义。 在常规函数和方法中使用inout参数时，需要明确地传入它们：每个左值都必须以`＆`开头。 例如，当我们调用增量函数（需要一个`inout Int`）时，我们可以通过在变量前面加上一个`＆符号`来传递变量：

``` Swift
func increment(value: inout Int) { 
    value += 1
}
var i=0 
increment(value: &i)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果使用`let定义变量`，则不能将其用作左值。 这是有道理的，因为我们不允许对`let变量`进行突变； 我们只能使用“可变”左值：

``` Swift
let y:Int = 0 
increment(value: &y) // Error
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了变量之外，还有一些其他东西也是左值。 例如，我们还可以传入数组下标（如果使用var定义了数组）：

``` Swift
var array = [0, 1, 2] 
increment(value: &array[0]) 
array // [1, 1, 2]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，这适用于每个下标（包括你自己的自定义下标），只要它们都定义了get和set即可。 同样，我们可以将属性用作左值，但前提是它们必须同时定义get和set：

``` Swift
struct Point { 
    var x: Int 
    var y: Int
}
var point = Point(x: 0, y: 0) 
increment(value: &point.x) 
point // Point(x: 1, y: 0)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果属性是只读的（即，只有get可用），我们不能将其用作`inout参数`：

``` Swift
extension Point {
    var squaredDistance: Int {
        return x*x + y*y 
    }
}
increment(value: &point.squaredDistance) // Error
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运算符也可以取`inout值`，但为简单起见，在调用时不需要“与”号； 我们只指定左值。 例如，让我们重新添加后缀增量运算符，该运算符在Swift 3中已删除：

``` Swift
postfix func ++(x: inout Int) { 
    x+=1
}
point.x++
point // Point(x: 2, y: 0)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变异算子甚至可以与可选链结合使用。 在这里，我们将增量操作链接到字典下标访问：

``` Swift
var dictionary = ["one": 1] 
dictionary["one"]?++ 
dictionary["one"] // Optional(2)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，如果键查询返回nil，则不会执行++运算符。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器可以优化`inout变量`以通过引用传递，而不是复制进出。 但是，文档中明确指出我们不应该依赖此行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在下一章`“结构和类”`中回到`inout`，在这里我们将探讨采用`inout参数`的变异方法和函数之间的相似之处。

## ***嵌套函数和inout***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以在嵌套函数内使用`inout参数`，但是`Swift`会确保你的用法是安全的。 例如，你可以定义一个嵌套函数（`使用func或使用闭包表达式`）并安全地更改`inout参数`：

``` Swift
func incrementTenTimes(value: inout Int) { 
    func inc() {
        value += 1 
    }
    for _ in 0..<10 { 
        inc()
    } 
}

var x=0 
incrementTenTimes(value: &x) 
x // 10
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，不允许你使该`inout参数`转义（在本章的最后，我们将详细讨论`转义函数`）：

``` Swift
func escapeIncrement(value: inout Int) -> () -> () { 
    func inc() {
        value += 1 
    }
    // Error: nested function cannot capture inout parameter // and escape.
    return inc
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鉴于`inout值`在函数返回之前被复制回去，因此这是有道理的。 如果我们以后能以某种方式修改它，应该怎么办？ 该值是否应该在某个时候复制回去？ 如果源不存在怎么办？ 让编译器验证这一点对安全至关重要。

## ***When & Doesn’t Mean inout***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说到不安全的函数，你应该了解`＆`的其他含义：**将函数参数转换为不安全的指针**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果函数将`UnsafeMutablePointer`作为参数，则可以使用`＆`将变量传递给它，类似于使用`inout参数`的方式。 但是在这里，你实际上是通过**引用传递的-实际上是通过指针传递的**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是增量，写成`采用不安全的可变指针`而不是`inout`：

``` Swift
func incref(pointer: UnsafeMutablePointer<Int>) -> () -> Int { 
    // Store a copy of the pointer in a closure.
    return {
        pointer.pointee += 1
        return pointer.pointee 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们将在后面的章节中讨论的那样，Swift数组隐式地衰减到指针，以使C的互操作性变得轻松愉快。 现在，假设你传入一个超出范围的数组，然后再调用结果函数：

``` Swift
let fun: () -> Int 
do{
    var array = [0]
    fun = incref(pointer: &array) 
}
fun()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这打开了令人兴奋的未定义行为的世界。 在测试中，以上代码在每次运行时都打印不同的值：有时为0，有时为1，有时为140362397107840 —有时会导致运行时崩溃。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的道义是：知道你要传递的内容。 附加`＆`时，你可能正在调用安全的 `Swift inout语义`，或者将可怜的变量转换为不安全指针的残酷世界。 在处理不安全的指针时，请特别注意变量的生命周期。 我们将在“互操作性”一章中对此进行更详细的介绍。

## ***Properties***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有两种不同于常规方法的特殊方法：`计算属性和下标`。 计算属性看起来像常规属性，但是它
不使用任何内存来存储其值。 取而代之的是，每次访问属性时都会动态计算该值。 计算属性实际上只是一种具有异常定义和调用约定的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看看定义属性的各种方法。 我们将从代表GPS轨迹的结构开始。 它将所有记录的点存储在称为record的数组中：

``` Swift
import CoreLocation

struct GPSTrack {
    var record: [(CLLocation, Date)] = []
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想让record属性对外部只读，而对内部只读，则可以使用 `private（set）` 或`fileprivate（set）`修饰符：

``` Swift
struct GPSTrack {
    private(set) var record: [(CLLocation, Date)] = []
}
``` 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要访问GPS轨迹中的所有时间戳，我们创建一个计算属性：

``` Swift
extension GPSTrack {
    /// Returns all the timestamps for the GPS track.
    /// - Complexity: O(*n*), where *n* is the number of points recorded. 
    var timestamps: [Date] {
        return record.map { $0.1 } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们未指定设置器，因此`timestamps属性为只读`。 结果未缓存； 每次你访问该属性时，它都会计算结果。 《Swift API设计指南》建议你记录每个非 O(1) 的计算属性的复杂性，因为调用者可能会假设访问属性需要花费固定时间。

## ***Change Observers***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以实现`willSet`和`didSet`处理程序，以使属性和变量在每次设置属性时都被调用（即使值不变）。 分别在存储新值之前和之后立即调用它们。 一种有用的情况是使用`Interface Builder`时：我们可以实现`didSet`来了解何时连接`IBOutlet`，然后可以在处理程序中执行其他配置。 例如，如果我们想在标签可用时设置标签的文本颜色，则可以执行以下操作：

``` Swift
class SettingsController: UIViewController { 
    @IBOutlet weak var label: UILabel? {
        didSet {
            label?.textColor = .black
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必须在属性的声明位置定义观察者-你不能在扩展名中追溯添加观察者。 因此，它们是该类型设计人员的工具，而不是用户的工具。 `willSet和didSet`处理程序本质上是**定义一对属性的简写：一个提供存储的私有存储属性，以及一个公共计算属性，其`setter`在将值存储到存储属性之前和/或之后执行附加工作。** 这与`Foundation`中的键值观察机制有根本的区别，**Foundation中的键值观察机制通常由对象的使用者用来观察内部变化**，而无论类的设计者是否打算这样做。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，你可以**覆盖子类中的属性以添加观察者**。 这是一个例子：

``` Swift
class Robot { 
    enum State {
        case stopped, movingForward, turningRight, turningLeft 
    }
    var state = State.stopped 
}

class ObservableRobot: Robot { 
    override var state: State {
        willSet {
            print("Transitioning from \(state) to \(newValue)")
        } 
    }
}

var robot = ObservableRobot()
robot.state = .movingForward 
// Transitioning from stopped to movingForward
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这仍然与变更观察者作为类型的内部特征的本质保持一致。 如果不允许，则子类可以通过使用执行其他工作的计算后的`setter覆盖存储`的属性来达到相同的效果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些功能的实现反映了用法上的差异。 `KVO`使用`Objective-C运行时将观察者动态添加到类的setter中`，这在当前版本的`Swift`中是不可能实现的，尤其是对于`值类型`。 `Swift`中的**属性观察是纯粹的编译时功能**。


## ***惰性存储属性***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**惰性地初始化值**是一种常见的模式，`Swift`具有一个特殊的```关键字lazy来定义惰性属性```。 请注意，必须始终将惰性属性声明为`var`，因为直到 ***初始化完成后才可能设置其初始值***。 `Swift`有一个严格的规则，即在实例的初始化完成之前，让常量必须具有一个值。 惰性修饰符是记忆的一种非常特定的形式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，如果我们有一个显示`GPSTrack`的视图控制器，则可能需要一个轨迹的预览图像。 通过使该属性变得懒惰，我们可以将昂贵的图像生成推迟到第一次访问该属性时：

``` Swift
class GPSTrackViewController: UIViewController { 
    var track: GPSTrack = GPSTrack()

    lazy var preview: UIImage = { 
        for point in track.record {
        // Do some expensive computation.
    }
    return UIImage(/* ... */) }()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，我们是如何定义`lazy属性`的：它是一个闭包表达式，它返回要存储的值（在本例中为图像）。 首次访问该属性时，将执行闭包（请注意结尾处的括号），并将其返回值存储在该属性中。 这是懒惰属性的常见模式，该属性需要初始化多个衬垫。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于惰性变量需要存储，因此我们需要在`GPSTrackViewController`的定义中定义惰性属性。 与计算属性不同，**扩展中无法定义存储属性和惰性属性**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果`track`属性更改，则预览不会自动失效。 让我们看一个更简单的例子，看看发生了什么。 我们有一个`Point结构`，并将`distanceFromOrigin`存储为一个惰性计算属性：

``` Swift

struct Point {
    var x: Double
    var y: Double
    private(set) lazy var distanceFromOrigin: Double
    = (x*x + y*y).squareRoot()
    init(x: Double, y: Double) { 
        self.x = x
        self.y = y
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建点时，我们可以访问`distanceFromOrigin属性`，它将计算值并将其存储以供重用。 但是，如果我们随后更改`x`值，则该值不会反映在`distanceFromOrigin`中：

``` Swift
var point = Point(x: 3, y: 4) 
point.distanceFromOrigin // 5.0 
point.x += 10 
point.distanceFromOrigin // 5.0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请务必注意这一点。 解决该问题的一种方法是在`x`和`y`的`didSet属性观察器`中重新计算`distanceFromOrigin`，但是`distanceFromOrigin`不再是真正的懒惰了：它会在x或y每次更改时进行计算。 当然，在此示例中，解决方案很简单：我们应该从一开始就将`distanceFromOrigin`设置为常规的（非延迟）计算属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`访问惰性属性`是一项变异操作，因为该属性的初始值是在首次访问时设置的。 当一个结构包含一个惰性属性时，访问该惰性属性的结构的任何所有者都必须因此将包含该结构的变量声明为`var`，因为访问该属性意味着有可能对其容器进行突变。 因此，这是不允许的：

``` Swift
let immutablePoint = Point(x: 3, y: 4) 
immutablePoint.distanceFromOrigin
// Error: Cannot use mutating getter on immutable value.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;强制所有想要访问惰性属性的Point类型用户使用var是一个巨大的不便，这通常会使**惰性属性不适用于结构**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，请注意，```lazy关键字不会执行任何线程同步```。如果在计算该值之前多个线程同时访问一个惰性属性，则该计算可能会执行一次以上，同时还会产生任何副作用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift的开源时代初期，Swift团队提出了一种使用`“行为”注释属性`的通用机制。 ```Property``` 行为从未得到实施，但是这个想法在2019年以所谓的 Property 代表提案的形式返回。如果实现，则可以将当前的原始语言功能（如属性观察器和惰性属性）从编译器移至标准库（或第三方库），从而使编译器的复杂性降低，并允许所有开发人员添加自己的属性实现模式。 ```Property``` 代表提案未通过其最初的Swift Evolution审查，但我们可能会在以后的Swift版本中看到此功能或类似功能。

# **下标**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经在标准库中看到了下标。 例如，我们可以像这样执行字典查找：`dictionary [key]`。 这些下标在很大程度上是函数和计算属性的混合体，具有自己的特殊语法。 像函数一样，它们也接受参数。 像计算的属性一样，它们可以是只读的（使用get）或读写的（使用get set）。 就像普通函数一样，我们可以通过提供具有不同类型的多个变体（属性无法实现）来重载它们。 例如，数组默认具有两个下标-一个用于访问单个元素，另一个用于获取切片（准确地说，这些是在`Collection协议`中声明的）：

``` Swift

let fibs = [0, 1, 1, 2, 3, 5] 
let first = fibs[0] // 0 
fibs[1..<3] // [1, 1]
```

## ***自定义下标***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以为自己的类型添加下标支持，也可以使用新的下标重载来扩展现有类型。 举例来说，让我们定义一个`Collection`下标，该下标接受一个索引列表并返回这些索引处所有元素的数组：

``` Swift
extension Collection {
    subscript(indices indexList: Index...) -> [Element] {
        var result: [Element] = [] 
        for index in indexList {
            result.append(self[index]) 
        }
        return result 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，我们如何使用显式参数标签将下标与标准库中的下标区分开。 三个点表示`indexList`是可变参数。 调用方可以传递零个或多个指定类型（此处是集合的索引类型）的逗号分隔值。 在函数内部，参数可以作为数组使用。

我们可以这样使用新的下标：

``` Swift
Array("abcdefghijklmnopqrstuvwxyz")[indices: 7, 4, 11, 11, 14] // ["h", "e", "l", "l", "o"]
```

## ***高级下标***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下标不限于单个参数。 我们已经看到了一个带多个参数的下标示例：带键和默认值的字典下标。 如果你有兴趣，请在Swift源代码中查看其实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下标的参数或返回类型也可以是通用的。 考虑类型为[String：Any]的异构字典：

``` Swift
var japan: [String: Any] = [ 
    "name": "Japan", 
    "capital": "Tokyo",
    "population": 126_440_000, 
    "coordinates": [
        "latitude": 35.0,
        "longitude": 139.0
    ]
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想在此字典中更改嵌套值，例如 坐标的纬度，你会发现这并不容易：

``` Swift
// Error: Type 'Any' has no subscript members.
japan["coordinates"]?["latitude"] = 36.0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，这是可以理解的。 表达式`japan [“coordinate”]`的类型为 `Any?` ，因此
你可能会在应用嵌套下标之前尝试将其转换为字典：

``` Swift
// Error: Cannot assign to immutable expression.
(japan["coordinates"] as? [String: Double])?["latitude"] = 36.0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这不仅变得很难看，而且也行不通。 问题是你无法通过类型转换（表达式）来对变量进行突变`Japan [“coordinates”] as? [String：Double]` 不再是左值。 你必须先将嵌套字典存储在本地变量中，然后对该变量进行突变，然后将本地变量分配回顶级关键字。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过使用通用下标扩展`Dictionary`来做得更好，该通用下标将所需的目标类型作为第二个参数并尝试在下标实现中进行强制转换：

``` Swift
extension Dictionary {
    subscript<Result>(key: Key, as type: Result.Type) -> Result? {
        get {
            return self[key] as? Result
        } 
        set {
            // Delete existing value if caller passed nil.
            guard let value = newValue else { 
                self[key] = nil
                return
            }
            // Ignore if types don't match.
            guard let value2 = value as? Value else { 
                return
            }
            self[key] = value2 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们不再需要向下转换下标返回的值，因此突变操作将转到顶级字典变量：

``` Swift
japan["coordinates", as: [String: Double].self]?["latitude"] = 36.0 
japan["coordinates"] // Optional(["longitude": 139.0, "latitude": 36.0])
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通用下标使这成为可能，但你会注意到此示例中的最终语法仍然很丑陋。 Swift通常不太适合处理像该字典这样的异构集合。 在大多数情况下，最好为数据定义自己的自定义类型（例如，此处为“国家/地区”结构），并将这些类型与`Codable兼容`，以将值与数据传输格式进行相互转换。

# **Key Paths**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift 4`在语言中增加了**关键路径**的概念。key路径是对属性的未调用引用，类似于未应用的方法引用。关键路径在`Swift`的类型系统中填补了一个相当大的漏洞；以前，无法以引用方法（例如`String.uppercased`）的方式引用类型的属性（例如`String.count`）。尽管使用了相同的名称，但是`Swift`的键路径与`Objective-C`和`Foundation`中使用的键路径有很大不同。稍后我们将有更多话要说。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;键路径表达式以反斜杠开头，例如 `\String.count`。必须使用**反斜杠来区分键路径和可能存在的同名类型属性**（假设`String`也具有静态`count属性`，那么`String.count`将返回该属性的值）。`类型推断`也可以在键路径表达式中使用：如果编译器可以从上下文中推断类型名称，则可以省略类型名称，这会导致 `\.count`。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鉴于键路径和函数类型引用是如此紧密地相关，因此不幸的是，`Swift`的语法不同。即使这样，Swift团队也表示有兴趣在将来的版本中为函数类型引用采用反斜杠语法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义，**键路径描述了从根值开始的贯穿值层次结构的路径**。例如，给定以下“人员”和“地址”类型，`\Person.address.street`是解析人员街道地址的关键路径：

``` Swift
struct Address { 
    var street: String 
    var city: String 
    var zipCode: Int
}

struct Person {
    let name: String
    var address: Address
}

let streetKeyPath = \Person.address.street
// Swift.WritableKeyPath<Person, Swift.String>
let nameKeyPath = \Person.name // Swift.KeyPath<Person, Swift.String>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**key路径可以由存储和计算的属性的任意组合以及可选的链接运算符组成**。 编译器会自动为所有类型生成一个新的`[keyPath：]`下标。 你可以使用此下标“调用”key路径，即在给定实例上访问其描述的属性。 因此，`“Hello”[keyPath: \.count]`等效于 `“Hello” .count` 。 或者，对于我们当前的示例：

``` Swift
let simpsonResidence = Address(street: "1094 Evergreen Terrace", city: "Springfield", zipCode: 97475)
var lisa = Person(name: "Lisa Simpson", address: simpsonResidence) 
lisa[keyPath: nameKeyPath] // Lisa Simpson
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你看一下上面两个键路径变量的类型，你会注意到 `nameKeyPath` 的类型为 `KeyPath <Person，String>`（即可以应用于Person并产生String的强类型键路径） ，而streetKeyPath的类型为WritableKeyPath。 因为形成后一个键路径的所有属性都是可变的，所以键路径本身允许基础值的改变：

``` Swift
lisa[keyPath: streetKeyPath] = "742 Evergreen Terrace"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对nameKeyPath进行相同操作会产生错误，因为底层property是不可变的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关键路径不仅可以描述属性，我们也可以使用它们来描述下标。 例如，以下语法可用于提取数组中第二个人值的名称：

``` Swift
var bart = Person(name: "Bart Simpson", address: simpsonResidence) 
let people = [lisa, bart]
people[keyPath: \.[1].name] // Bart Simpson
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相同的语法也可以用于在关键路径中包括字典下标。

## ***关键路径可以用函数建模***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从基本类型`Root`映射到`Value类型`的属性的密钥路径与类型`（Root）-> Value`的函数非常相似，或者对于可写密钥路径，有一对用于获取和设置值的函数。 相对于此类功能（语法除外）的主要好处是，它们是值。 你可以测试键路径是否相等并将它们用作字典键（它们符合`Hashable`），并且可以确保键路径是无状态的，这与可能捕获可变状态的函数不同。 正常功能无法实现所有这些功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过将一个key路径附加到另一个key路径，也可以构成key路径。 请注意，类型必须匹配：如果你以从A到B的键路径开头，则附加的键路径必须具有B的根类型，然后生成的键路径将从A映射到附加键路径的值类型， 说C：

``` Swift
// KeyPath<Person, String> + KeyPath<String, Int> = KeyPath<Person, Int>
let nameCountKeyPath = nameKeyPath.appending(path: \.count) 
// Swift.KeyPath<Person, Swift.Int>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们重新编写本章前面的排序描述符，以使用键路径代替函数。 我们之前将`sortDescriptor`定义为采用函数，（根）->值：

``` Swift
typealias SortDescriptor<Root> = (Root, Root) -> Bool

func sortDescriptor<Root, Value>(key: @escaping (Root) -> Value)
-> SortDescriptor<Root> where Value: Comparable {
    return { key($0) < key($1) } 
}
// Usage
let streetSD: SortDescriptor<Person> = sortDescriptor { $0.address.street }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以添加一个变体，用于从键路径构造排序描述符。 我们使用下标以获取值的关键路径：

``` Swift
func sortDescriptor<Root, Value>(key: KeyPath<Root, Value>) -> SortDescriptor<Root> where Value: Comparable {
    return { $0[keyPath: key] < $1[keyPath: key] }
}
// Usage
let streetSDKeyPath: SortDescriptor<Person> = sortDescriptor(key: \.address.street)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然有一个采用关键路径的`sortDescriptor构造函数`很有用，但它并没有为我们提供灵活性功能。 关键路径依赖于可比值。 仅使用关键路径，我们就无法轻松地按不同的谓词进行排序（例如，执行不区分大小写的本地化比较）。

## ***可写关键路径***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可写关键路径是特殊的。 你可以使用它来读取或写入值。 因此，它等效于一对函数：一个用于获取属性` ((Root) -> Value)`，另一个用于设置属性 `((inout Root，Value) -> Void)` 。 可写关键路径比只读关键路径要大得多。 首先，它们以简洁的语法捕获了大量代码。 将`streetKeyPath`与等效的`getter`和`setter`对进行比较：

``` Swift
let streetKeyPath = \Person.address.street

let getStreet: (Person) -> String = { person in 
    return person.address.street
}

let setStreet: (inout Person, String) -> () = { person, newValue in
    person.address.street = newValue 
}

// Setter usage
lisa[keyPath: streetKeyPath] = "1234 Evergreen Terrace" 
setStreet(&lisa, "1234 Evergreen Terrace")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可写键路径对于数据绑定特别有用，在数据绑定中，你想将两个属性彼此绑定：当属性一更改时，属性二应自动更新，反之亦然。例如，你可以将`model.name`属性绑定到`textField.text`。 `API`的用户需要指定如何读取和写入`model.name`和`textField.text`，而关键路径仅用于捕获和写入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还需要一种观察属性变化的方法。为此，我们在`Cocoa`中使用键值观察机制，这意味着该示例仅适用于类，并且仅适用于`Apple平台`。 `Foundation`提供了一种类型安全的`KVO API`，该`API`隐藏了`Objective-C键路径`的字符串类型世界。 `NSObject`方法`observe（_：options：changeHandler :)`观察键路径（作为强类型`Swift键路径`传递），并在属性更改时调用更改处理程序。**不要忘记将你要观察的任何属性标记为`@objc动态`**。否则，KVO将无法正常工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的目标是在两个`NSObject之间实现双向绑定`，但让我们从单向绑定开始：每当观察到的`self`属性发生变化时，我们也会更改另一个对象。关键路径使我们可以使代码在所涉及的特定属性上通用—调用者指定了两个对象和两个关键路径，此方法将处理其余的工作：

``` Swift
extension NSObjectProtocol where Self: NSObject { 
    func observe<A, Other>(_ keyPath: KeyPath<Self, A>, writeTo other: Other, _ otherKeyPath: ReferenceWritableKeyPath<Other, A>) -> NSKeyValueObservation where A: Equatable, Other: NSObjectProtocol {
    return observe(keyPath, options: .new) { _, change in
        guard let newValue = change.newValue, other[keyPath: otherKeyPath] != newValue else {
            return // prevent endless feedback loop }
            other[keyPath: otherKeyPath] = newValue
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码段中有很多要解压的内容。 首先，我们在`NSObject`的每个子类上定义此方法，然后通过扩展`NSObjectProtocol`（而不是NSObject）来使用`Self`。 `ReferenceWritableKeyPath`就像`WritableKeyPath`一样，但是它也允许我们编写使用`let声明`的引用变量（与其他变量一样）。 （我们稍后将对此进行详细说明。）为避免不必要的写入，我们仅在值更改后才写入其他值。 `NSKeyValueObservation`返回值是调用者可以用来控制观察的生存期的令牌：当释放该对象或调用者调用其`invalidate`方法时，观察停止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;给定`observe（_：writeTo：__ :)`，双向绑定非常简单； 我们在两个对象上都调用`observe`，并返回两个观察标记：

``` Swift
extension NSObjectProtocol where Self: NSObject {
    func bind<A, Other>(_ keyPath: ReferenceWritableKeyPath<Self,A>, to other: Other, _ otherKeyPath: ReferenceWritableKeyPath<Other,A>) ->  (NSKeyValueObservation, NSKeyValueObservation) where A: Equatable, Other: NSObject {
        let one = observe(keyPath, writeTo: other, otherKeyPath)
        let two = other.observe(otherKeyPath, writeTo: self, keyPath) return (one,two)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以构造两个不同的对象-Person和TextField，并将name和text属性彼此绑定：

``` Swift
final class Person: NSObject {
    @objc dynamic var name: String = ""
}

class TextField: NSObject {
    @objc dynamic var text: String = ""
}

let person = Person()
let textField = TextField()
let observation = person.bind(\.name, to: textField, \.text) person.name = "John"
textField.text // John
textField.text = "Sarah"
person.name // Sarah
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你来自函数式编程，那么可写的键路径可能会让你想起镜头。 它们紧密相关：从`WritableKeypath <Root，Value>`，你可以创建`Lens <Root，Value>`。 镜头在纯函数式语言（例如Haskell或PureScript）中很有用，但在Swift中却没有那么有用，因为Swift内置了可变性。

## ***关键路径层次结构***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密钥路径有五种不同的类型，每种都为前一种增加了更多的精度和功能：

+ → **AnyKeyPath** 类似于功能类型`（Any）-> Any?`。
+ → **PartialKeyPath<Source>** 类似于` typeoffunction（Source）-> Any?`。
+ → **KeyPath<Source，Target>** 与 `typeoffunction（Source）-> Target`相似。
+ → **WritableKeyPath<Source，Target>** 与一对功能类型类似`（Source）->Target`和` (Source，Target) -> ()`。
+ → **ReferenceWritableKeyPath<Source，Target>** 与类型为 `(Source) ->Target`和 `(Source，Target) -> ()` 的一对函数相似。第二个函数可以用`Target`更新`Source`值，并且仅在`Source`是引用类型时才起作用。必须区分`WritableKeyPath`和`\ReferenceWritableKeyPath`，因为前者的设置者必须将参数`inout传入`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前，此关键路径层次结构被实现为类层次结构。理想情况下，这些将是`协议`，但是Swift的泛型系统缺少一些使之可行的功能。故意将类层次结构保持关闭状态，以便在将来的发行版中对此进行更改而不会破坏现有代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们之前所看到的，关键路径与函数不同：**它们遵循Hashable**，将来也可能遵循`Codable`。这就是为什么我们说`AnyKeyPath`类似于函数`（Any）-> Any`。虽然我们可以将键路径转换为其相应的功能，但我们并不总是朝着另一个方向发展。

## ***与Objective-C相比的关键路径***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在`Foundation`和`Objective-C`中，关键路径被建模为字符串（我们称这些`Foundation`关键路径是为了将它们与Swift的关键路径区分开）。由于`Foundation键路径是字符串`，因此它们没有附加任何类型信息。从某种意义上讲，它们类似于`AnyKeyPath`。如果基础密钥路径拼写错误，格式不正确，或者类型不匹配，则程序可能会崩溃。 （Swift中的#keyPath指令有助于解决拼写错误；编译器可以检查是否存在具有指定名称的属性。）Swift的`KeyPath`，`WritableKeypath`和`ReferenceWritableKeyPath`在构造上是正确的：它们不能被拼写错误并且它们不会允许输入类型错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当功能可能更好时，许多`Cocoa API`使用（基础）键路径。这在某种程度上是一个历史产物：`匿名函数`（或块，正如`Objective-C`所称的）是一个相对较新的功能，而关键路径的存在时间更长。在将块添加到`Objective-C`之前，要表示类似于功能`{$ 0.address.street}`的东西并不容易，只是使用关键路径`“address.street”`。

## ***未来发展方向***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关键路径仍在积极讨论中，未来它们可能会变得更加强大。 一种可能的功能是通过可编码协议进行序列化。 这将使我们能够将关键路径保留在磁盘上，通过网络发送它们，等等。 一旦我们可以访问关键路径的结构，就可以进行自省。 例如，我们可以使用键路径的结构来构造类型正确的数据库查询。 如果类型可以自动提供指向其属性的键路径数组，则可以用作```运行时反射API```的基础。

# **Autoclosures**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们都熟悉逻辑``AND运算符&&``如何评估其参数。 它首先评估其左操作数，如果评估结果为`false`，则立即返回。 仅当左侧操作数的值为`true`时，才对右侧操作数的值进行评估。 毕竟，如果左操作数的计算结果为false，则整个表达式都无法计算为true。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此行为称为`短路`。 例如，如果我们要检查条件是否满足数组的第一个元素，则可以编写以下代码：

``` Swift
let evens = [2,4,6]
if !evens.isEmpty && evens[0] > 10 {
// Perform some work.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的代码段中，我们依赖于短路：只有在第一个条件成立的情况下才会进行数组查找。 如果没有短路，此代码将在空数组上崩溃。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写此特定示例的更好方法是使用if let绑定：

``` Swift
if let first = evens.first, first > 10 { 
    // Perform some work.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是短路的另一种形式：仅当第一个条件成功时才评估第二个条件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在几乎所有语言中，```&&``` 和 ```||``` 都会短路 语言中内置了运算符。 但是，通常无法定义自己的具有相同行为的运算符或函数。 如果语言支持一流的功能，我们可以通过提供匿名功能而不是值来伪造短路。 例如，假设我们要在Swift中定义一个 ```and函数``` ，使其具有与```&&运算符```相同的行为：

``` Swift
func and(_ l: Bool, _ r: () -> Bool) -> Bool { 
    guard l else { return false }
    return r()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的函数首先检查l的值，如果l的值为false，则返回false。 仅当l为true时，它才返回闭包r中的值。 但是，使用它比使用```&&运算符```稍微麻烦一些，因为正确的操作数现在必须是一个函数：

``` Swift
if and(!evens.isEmpty, { evens[0] > 10 }) { 
    // Perform some work.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift具有一个很好的功能，可以使其更漂亮。 我们可以使用```@autoclosure属性```来告诉编译器它应该在闭包表达式中包装一个特定的参数。 和的定义与上面几乎相同，除了添加的```@autoclosure```批注：

``` Swift
func and(_ l: Bool, _ r: @autoclosure () -> Bool) -> Bool { 
    guard l else { return false }
    return r()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，and的用法现在要简单得多，因为我们不需要将第二个参数包装在闭包中。 我们可以像调用常规Bool参数一样调用它，并且编译器透明地将参数包装在闭包表达式中：

``` Swift
if and(!evens.isEmpty, evens[0] > 10) {
     // Perform some work.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使我们能够定义自己的具有短路行为的函数和运算符。 例如，像``??``这样的运算符 和``！？`` （如“可选”一章中定义的）现在很容易编写。 在标准库中，`assert`和`fatalError`之类的函数也使用自动关闭功能，以便仅在真正需要时才评估参数。 通过将断言条件的评估从调用位置推迟到断言函数的主体，可以将这些潜在的昂贵操作完全剥离到不需要它们的优化构建中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写日志记录功能时，自动关闭也可以派上用场。 例如，下面是你编写自己的日志函数的方法，该函数仅在条件为`true`时才评估日志消息：

``` Swift
func log(ifFalse condition: Bool, message: @autoclosure () -> (String),
file: String = #file, function: String = #function, line: Int = #line) {
    guard !condition else { return }
    print("Assertion failed: \(message()), \(file):\(function) (line \(line))")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这意味着你可以在作为消息参数传递的表达式中执行昂贵的计算，如果不使用该值，则不会产生评估成本。 日志功能还使用调试标识符`＃file`，`＃function`和 `#line`。 他们是当作为默认参数传递给函数时特别有用，因为它们将在调用站点上`接收文件名，函数名和行号的值`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，请谨慎使用自动关闭功能。 他们的行为违反了正常的预期-例如，如果由于表达式包含在自动闭合中而没有执行表达式的副作用。 引用Apple的Swift书：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过度使用自动关闭功能会使你的代码难以理解。 上下文和函数名称应清楚表明评估被推迟。


# **@escaping 批注**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能已经注意到，编译器要求你在某些闭包表达式中（而不是在其他闭包表达式中）明确声明要访问self。例如，我们需要在网络请求的完成处理程序中使用显式的`self`，而不必在传递给 `map或filter` 的闭包中对`self`进行显式的显示。两者之间的区别在于，闭包是存储供以后使用（如网络请求），还是仅在函数范围内同步使用（如`map和filter`）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果将闭包存储在某个地方（例如存储在某个属性中）以供以后调用，则称该`闭包正在转义`。相反，从**不离开函数本地范围的闭包是不可转义的**。使用转义，编译器迫使我们明确地在闭包表达式中使用`self`，因为无意间强力捕获self是引用周期最常见的原因之一。无法转义的闭包无法创建永久的引用循环，因为在返回定义的函数时，该循环会自动销毁。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认情况下，**闭包参数是不转义的**。如果要存储闭包以供以后使用，则需要将闭包参数标记为 ***```@escaping```***。编译器将对此进行验证：除非你将闭包参数标记为``@escaping``，否则它**将不允许你存储闭包**（例如，将其返回给调用者）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在排序描述符示例中，有多个函数参数需要 **@escaping属性**：

``` Swift
func sortDescriptor<Root, Value>( key: @escaping (Root) -> Value, by areInIncreasingOrder: @escaping (Value, Value) -> Bool) -> SortDescriptor<Root> {
    Overusing autoclosures can make your code hard to understand. The context and function name should make it clear that evaluation is being deferred.
    return { areInIncreasingOrder(key($0), key($1)) } 
}
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift 3之前，是另一回事：转义是默认设置，你可以选择将结束标记为`@noescape`。 当前行为更好，因为默认情况下它是安全的：现在需要一个函数参数明确注释以表示参考循环的潜力。 ```@escaping```注释是对开发人员调用该函数的警告。 编译器还可以更好地优化非转义的闭包，使快速路径成为必要时必须明确偏离的规范。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**请注意，默认情况下的非转义规则仅适用于功能参数**，然后**仅适用于紧邻参数位置的功能类型**。 这意味着具**有函数类型的存储属性始终在转义**（这很有意义）。 令人惊讶的是，对于用作参数但包装在其他类型（例如元组或可选）中的函数也是如此。 由于在这种情况下闭包不再是立即参数，因此它会**自动转义**。 因此，你无法编写带有函数参数的函数，其中参数既是可选参数也是非转义参数。 在许多情况下，可以通过为闭包提供默认值来避免使参数成为可选参数。 如果不可能，一种解决方法是使用重载来编写该函数的两个变体-一个带有可选的（转义）函数参数，而另一个带有非可选的，非转义参数：

``` Swift
func transform(_ input: Int, with f: ((Int) -> Int)?) -> Int { 
    print("Using optional overload")
    guard let f = f else { return input }
    return f(input)
}

func transform(_ input: Int, with f: (Int) -> Int) -> Int { 
    print("Using non-optional overload")
    return f(input)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，用`nil参数`（或可选类型的变量）调用函数将使用可选变量，而传递文字闭包表达式将调用非转义，非可选重载：


``` Swift
transform(10, with: nil) // Using optional overload
transform(10) { $0 * $0 } // Using non-optional overload
```

## ***withoutActuallyEscaping***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会遇到这样的情况，你知道闭包无法逃脱，但编译器无法证明它，从而迫使你添加```@escaping```批注。 为了说明这一点，让我们看一下标准库文档中的示例。 我们在`Array`上编写了`allSatisfy方法`的自定义实现，该方法在内部使用数组的惰性视图（不要与上面讨论的惰性属性混淆）。 然后，我们将过滤器应用于惰性视图，并检查是否有任何元素通过过滤器（即，至少有一个元素不满足谓词）。 我们的第一次尝试导致编译错误：

``` Swift
extension Array {
    func allSatisfy2(_ predicate: (Element) -> Bool) -> Bool {
        // Error: Closure use of non-escaping parameter 'predicate' // may allow it to escape.
        return self.lazy.filter({ !predicate($0) }).isEmpty
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在`“Collection协议”`一章中详细介绍`延迟CollectionAPI`。 到目前为止，只要知道惰性视图就可以将后续转换（例如传递给filter的闭包）存储在内部属性中，以便以后应用。 这要求传入的任何闭包都必须转义，这是导致错误的原因，因为我们的谓词参数是不转义的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过用`@escaping注释参数`来解决此问题，但是在这种情况下，我们知道闭包不会逃脱，因为惰性集合视图的生命周期与函数的生命周期绑定在一起。 `Swift`为这种情况提供了逃生舱口，其形式为`noActuallyEscaping`函数。 它允许你将非转义的闭包传递给期望转义的函数。 这样可以编译并正常工作：

``` Swift
extension Array {
    func allSatisfy2(_ predicate: (Element) -> Bool) -> Bool {
        return withoutActuallyEscaping(predicate) { escapablePredicate in  
            self.lazy.filter { !escapablePredicate($0) }.isEmpty
        } 
    }
}
let areAllEven = [1,2,3,4].allSatisfy2 { $0 % 2 == 0 } // false 
let areAllOneDigit = [1,2,3,4].allSatisfy2 { $0 < 10 } // true
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，懒惰的实现并没有比`allSatisfy`的标准库的实现效率更高，后者使用简单的for循环，并且不需要`ActuallyEscaping`就不需要。 懒惰的实现仅用于演示以下情况：我们知道闭包不会逃逸，但编译器无法证明这一点。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，你使用的是不使用“实际转义”功能进入不安全区域。 允许闭包的副本从调用中转义到`withoutActuallyEscaping`会导致未定义的行为。


# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数是`Swift`中的一流对象。 将函数视为数据可以使我们的代码更灵活。 我们已经看到了如何用简单的函数代替运行时编程。 我们比较了实现委托的不同方法。 我们已经研究了变异函数和inout参数，以及计算属性（实际上是一种特殊的函数）。 最后，我们讨论了`@autoclosure`和`@escaping属性`。 在有关 ***```泛型和协议```*** 的章节中，我们将提出更多在Swift中使用函数的方式，以获得更大的灵活性。

