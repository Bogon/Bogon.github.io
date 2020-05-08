---
title: 'Advanced Swift系列(十): Collection Protocols'
description: 'Advanced Swift系列(十): Collection Protocols'
permalink: 'Advanced Swift系列(十): Collection Protocols'
copyright: ture
date: 2020-05-08 14:19:07
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Protocols
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Collection Protocols]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%94):%20Structs%20and%20Classes/ "")一章中提到， `Swift `的集合类型（如数组，字典和集合）是在用于处理元素序列的一组丰富抽象之上实现的。 本章全部涉及 `序列和集合协议 `，这些协议构成了该模型的基石。 我们将介绍这些协议的工作方式，为何以其工作方式工作以及如何编写自己的序列和集合。 它有助于在继承图中查看集合协议：


![序列和集合协议](http://q8wtfza4q.bkt.clouddn.com/ascp-stp1.png "标准库中的集合协议层次结构")

<!-- more -->

+ → **Sequence** 提供  `iteration `。它允许你创建一个迭代器，但是 `thereareno `可以保证序列是单遍（例如从标准输入读取）还是多遍（遍历数组）。

+ → **集合扩展序列** 。它确保该序列是多次遍历，它使你可以按其索引查找元素。它还通过其 `SubSequence类型 `（本身就是一个集合）添加了切片功能。

+ → **MutableCollection** 增加了在恒定时间内通过下标突变元素的能力。它不允许你添加或删除元素。  `Array `是 `MutableCollection `，但值得注意的是， `String `不是因为字符不能固定宽度，所以不能保证恒定时间的突变。

+ → **RangeReplaceableCollection** 添加了替换集合中连续元素范围的功能。通过 `扩展 `，它还会添加诸如 `append `， `remove `等方法。许多可变集合也可以进行范围替换，但是也有例外。最值得注意的是， `Set `和 `Dictionary `不符合，但是 `String `和 `Array `这样的类型却符合。

+ → **双向集合** 增加了通过集合向后迭代的能力。例如， `Dictionary `不允许反向迭代且不符合要求，而 `String `则允许。向后迭代对于某些算法至关重要。

+ → **RandomAccessCollection** 扩展了双向集合并增加了使用索引进行计算的能力：这要求以一定距离测量索引和移动索引之间的距离要花费恒定的时间。例如，数组是一个随机访问集合，而字符串则不是：**计算两个字符串索引之间的距离需要线性时间**。

+ → **LazySequenceProtocol** 建模在迭代时懒惰地计算其元素的序列。这对于以函数形式编写算法非常有用：你可以采用无限序列并对其进行过滤，然后采用第一个元素，而所有这些都不会导致后续代码不需要计算元素的（无限）成本。

+ → **LazyCollectionProtocol** 和 **LazySequenceProtocol** 一样，但用于收集。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们将详细介绍每种协议。 当你编写自己的算法时，牢记此协议层次结构可能非常有用：如果你可以针对层次结构的根在其中一个协议上编写算法，则更多类型的算法都可以利用该算法。

# **Sequences**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `序列协议 `位于层次结构的基础上。**序列是一系列相同类型的值，可让你遍历这些值**。 遍历序列的最常见方法是for循环：

``` Swift
for element in someSequence { 
    doSomething(with: element)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举元素的这种看似简单的功能构成了 `Sequence `向协议采用者提供的大量有用操作的基础。 在前面的章节中，我们已经看到了许多。 每当你想出一个取决于顺序访问一系列值的常见操作，你也应该考虑在 `Sequence `之上实现它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `序列协议 `的要求很小。 符合条件的类型必须做的就是提供一个返回迭代器的 `makeIterator（）方法 `：

``` Swift
protocol Sequence {

    associatedtype Element 
    associatedtype Iterator: IteratorProtocol
    func makeIterator() -> Iterator
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 `Sequence `的这个（简化的）定义中，我们可以学到两件事： `Sequence `具有关联的 `Element类型 `，并且它知道如何构造迭代器。 因此，让我们先仔细研究一下迭代器。

## ***Iterators***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**序列通过创建迭代器来提供对其元素的访问**。 迭代器一次生成一个序列的值，并在遍历序列时跟踪其自身的迭代状态。  `IteratorProtocol协议 `中定义的唯一方法是 `next（） `，该方法必须在每次后续调用时返回序列中的下一个元素，或者在序列用尽时返回 `nil `：

``` Swift
protocol IteratorProtocol { 
    associatedtype Element 
    mutating func next() -> Element?
}
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大多数协议都不会以协议结尾，但是有一些协议标准库中的异常： `IteratorProtocol `， `StringProtocol `， `Keyed[En|De]CodingContainerProtocol `和 `Lazy [Collection | Sequence] Protocol `。 这样做是为了避免名称与关联的或具体的类型发生冲突使用无后缀的名称。  `API `设计指南建议协议应为名词或后缀 `-able `， `-ible `或 `-ing `，具体取决于协议的角色。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联的 `Element类型 `指定迭代器生成的值的类型。 例如， `String `的迭代器的元素类型为 `Character `。 通过扩展，迭代器还定义其序列的元素类型。 这是通过对 `Sequence `关联的 `Iterator类型 `进行约束来实现的 `-Iterator.Element == Element `确保两种元素类型相同：

``` Swift
protocol Sequence {
    associatedtype Element 
    associatedtype Iterator: IteratorProtocol
    where Iterator.Element == Element // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，在为自定义序列类型实现迭代器时，只需要关心迭代器即可。 除此之外，你几乎不需要直接使用迭代器，因为 `for循环 `是遍历序列的惯用方式。 实际上，这就是 `for循环 `的工作原理：**编译器为该序列创建一个新的迭代器，并反复对该迭代器进行调用，直到返回nil**。 上面显示的for循环示例实质上是以下内容的简写：

``` Swift
var iterator = someSequence.makeIterator() 
while let element = iterator.next() {
    doSomething(with: element) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**迭代器是单遍构造**。 它们只能进行高级操作，而不能撤消或重置。 要重新开始迭代，请创建一个新的迭代器（实际上，这正是 `Sequence `通过 `makeIterator（） `允许的功能）。 尽管大多数迭代器将生成有限数量的元素并最终从 `next（） `返回 `nil `，但没有什么可以阻止你出售永无止境的无限序列。 实际上，可以想象到的最简单的迭代器（缺少立即返回 `nil `的迭代器）就是一次又一次返回相同值的迭代器：

``` Swift
struct ConstantIterator: IteratorProtocol { 
    typealias Element = Int
    mutating func next() -> Int? {
        return 1 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Element `的显式类型别名是可选的（但通常用于文档目的，特别是在较大的协议中）。 如果我们忽略它，则编译器将从 `next（） `的返回类型推断出 `Element `的具体类型：

``` Swift
struct ConstantIterator: IteratorProtocol { 
    mutating func next() -> Int? {
        return 1 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意， `next（） `方法被声明为变异的。 在这个简单的示例中，这并不是绝对必要的，因为我们的迭代器没有可变状态。 但是，实际上，**迭代器本质上是有状态的**。 几乎所有有用的迭代器都需要可变状态来跟踪其在序列中的位置。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以创建一个 `ConstantConerator `的新实例，并循环它在 `while循环 `中产生的序列，并打印出无穷无尽的流：

``` Swift
var iterator = ConstantIterator() 
while let x = iterator.next() {
    print(x) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一个更详细的例子。  `FibsIterator `产生斐波那契序列。 通过存储即将到来的两个数字，它可以跟踪序列中的当前位置。 然后， `next方法 `返回第一个数字，并更新下一个调用的状态。 像前面的示例一样，此迭代器也产生“无限”流； 它一直生成数字，直到达到整数溢出，然后程序崩溃：

``` Swift
struct FibsIterator: IteratorProtocol { 
    var state = (0, 1)
    mutating func next() -> Int? {
        let upcomingNumber = state.0 state = (state.1, state.0 + state.1) 
        return upcomingNumber
    } 
}
```

## ***Conforming to Sequence***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的 `PrefixIterator `是产生有限序列的迭代器的一个示例，它生成字符串的所有非空前缀（包括字符串本身）。 例如，对于字符串 `“abc” `，它将生成 `“a” `， `“ab” `和 `“abc” `。 它从字符串的开头开始，并在每次调用 `next `时，将返回的字符串的片段增加一个字符，直到到达结尾：

``` Swift

struct PrefixIterator: IteratorProtocol { 
    let string: String
    var offset: String.Index

    init(string: String) { 
        self.string = string
        offset = string.startIndex
    }

    mutating func next() -> Substring? {
        guard offset < string.endIndex else { return nil } 
        string.formIndex(after: &offset)
        return string[..<offset]
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（ `string [.. <offset] `是一种切片操作，它返回起始位置和偏移量之间的子字符串-我们在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%9B%9B):%20%20Functions/ "")一章中看到了部分范围符号，稍后我们将详细讨论切片。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了 `PrefixIterator `，轻松定义随附的 `PrefixSequence类型 `。 同样，不必显式指定关联的 `Iterator `或 `Element类型 `，因为编译器可以从 `makeIterator方法 `的返回类型推断它们：

``` Swift
struct PrefixSequence: Sequence {

    let string: String
    func makeIterator() -> PrefixIterator {
        return PrefixIterator(string: string) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们可以使用for循环遍历所有前缀：

``` Swift
for prefix in PrefixSequence(string: "Hello") { 
    print(prefix)
}
/* 
H
He 
Hel 
Hell 
Hello
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者我们可以执行 `Sequence `提供的任何其他操作：

``` Swift
PrefixSequence(string: "Hello").map { $0.uppercased() }
// ["H", "HE", "HEL", "HELL", "HELLO"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以用相同的方式为 `ConstantIterator `和 `FibsIterator `创建序列。 我们不在这里显示它们，但你可能需要自己尝试一下。 请记住，这些迭代器会创建无限序列。 在 `fibsSequence.prefix（10） `中使用类似于i的构造来分割有限的部分。


## **迭代器和值语义**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，我们看到的**迭代器都具有值语义**。 如果你复制一个副本，则会复制迭代器的整个状态，并且两个实例的行为将彼此独立，如你所愿。 标准库中的大多数迭代器也具有值语义，但是也有例外。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了说明值语义和引用语义之间的区别，我们首先来看一下 `StrideToIterator `。 它是从 `stride（from：to：by :)函数 `返回的序列的基础迭代器。 让我们创建一个 `StrideToIterator `，然后再调用两次：

``` Swift
// A sequence from 0 to 9.
let seq = stride(from: 0, to: 10, by: 1) 
var i1 = seq.makeIterator()
i1.next() // Optional(0)
i1.next() // Optional(1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `i1 `现在准备返回 `2 `。现在，说你要对其进行复制：

``` Swift
var i2 = i1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，原始副本和副本都是独立的，并且在你调用next时都返回2：

``` Swift
i1.next() // Optional(2) 
i1.next() // Optional(3) 
i2.next() // Optional(2) 
i2.next() // Optional(3)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是因为 `StrideToIterator `是一个非常简单的结构，其实现与上面的 `Fibonacci迭代器 `的实现没有太大不同，具有**值语义**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们看一下没有值语义的迭代器。 **AnyIterator是包装另一个迭代器的迭代器，从而“擦除”了基础迭代器的具体类型**。 例如，如果你想隐藏一个复杂的迭代器的具体类型，而该类型会在你的公共API中公开实现细节，那么这可能会很有用。  `AnyIterator `进行此操作的方式是将**基本迭代器包装在内部框对象（引用类型）中**。 （如果你想确切了解其工作原理，请查看[***```“协议”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B9%9D):%20Protocols/ "")一章中有关类型擦除的部分。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要了解为什么这很重要，我们创建一个包装i1的 `AnyIterator `，然后制作一个副本：

``` Swift
var i3 = AnyIterator(i1) 
vari4=i3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，原件和副本不是独立的，因为尽管 `AnyIterator `是一种结构，但它没有值语义。  `框对象AnyIterator `用于**存储其基本迭代器的对象是一个类实例**，当我们将i3分配给i4时，仅复制了对框的引用。 盒子的存储在两个迭代器之间共享。 现在，在i3或i4上对next的任何调用都会增加相同的基础迭代器：

``` Swift
i3.next() // Optional(4) 
i4.next() // Optional(5) 
i3.next() // Optional(6) 
i3.next() // Optional(7)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显然，这可能会导致错误，尽管在实践中极少会遇到此特定问题。 迭代器通常不是你在代码中传递的东西。 你更有可能在本地创建一个（有时是显式的，但大部分是通过 `for循环隐式 `创建的），只需一次使用它就可以遍历元素，然后将其丢弃。 如果发现自己与其他对象共享迭代器，请考虑将迭代器包装在序列中。

## **基于函数的迭代器和序列**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `AnyIterator `具有第二个初始化器，该初始化器直接将下一个函数作为其参数。 与对应的 `AnySequence类型 `一起，这使我们可以 `创建迭代器和序列 `，而无需定义任何新类型。 例如，我们可以将 `Fibonacci迭代器 `定义为返回 `AnyIterator的函数 `：

``` Swift
func fibsIterator() -> AnyIterator<Int> { 
    var state = (0, 1)

    return AnyIterator {
        let upcomingNumber = state.0 
        state = (state.1, state.0 + state.1) 
        return upcomingNumber
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过将状态变量保留在迭代器的下一个闭包之外，并将其捕获在闭包内，闭包可以在每次调用时改变状态。 两个 `Fibonacci迭代器 `之间只有一个功能上的区别：使用自定义结构的定义具有值语义，而使用 `AnyIterator `的定义则没有。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 `AnySequence `提供了一个初始化器，该初始化器接受一个可产生迭代器的函数，因此，由此创建序列变得更加容易：

``` Swift
let fibsSequence = AnySequence(fibsIterator) 
Array(fibsSequence.prefix(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一种选择是使用具有两个变体的序列函数。 第一个 `sequence（first：next :） `返回一个序列，其第一个元素是你传入的第一个参数； 后续元素由传入下一个参数的函数产生。 另一个变体 `sequence（state：next :) `更强大，因为它可以在调用下一个函数之间保持一些任意可变的状态。 我们可以使用它通过一个函数调用来构建斐波那契数列：

``` Swift
let fibsSequence2 = sequence(state: (0, 1)) { state -> Int? in 
    let upcomingNumber = state.0
    state = (state.1, state.0 + state.1)
    return upcomingNumber
}
Array(fibsSequence2.prefix(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

> `sequence（first：next :) `和 `sequence（state：next :) `的返回类型是 `UnfoldSequence `。 该术语来自**函数式编程**，其中相同的操作通常称为展开。 序列函数是要减少的自然对应项（在功能语言中通常称为fold）。 如果 `reduce `将一个序列减小（或折叠）为单个返回值，则 `sequence `展开单个值以生成一个序列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 `AnyIterator `通常看起来比带有长名称的复杂迭代器类型友好，但出于性能方面的考虑，标准库更喜欢自定义迭代器类型。  `AnyIterator `使编译器优化代码变得更加困难，这可能会导致性能损失多达100倍。 Ben在Swift论坛上的一篇文章中详细介绍了这一点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像到目前为止我们看到的所有迭代器一样，序列函数会懒惰地应用其下一个函数，即，下一个值只有在调用者要求时才计算。 这使诸如 `fibsSequence2.prefix（10） `之类的构造起作用。  `prefix（10） `仅询问序列的前（最多）10个元素，然后停止。 如果该序列尝试急切地计算其所有值，则该程序会在整数溢出之前崩溃，然后再运行下一步。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建无限序列的可能性是将序列与集合区分开的一件事，集合不能是无限的。

## ***单遍序列***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**序列不仅限于经典的集合数据结构，例如数组或列表。 网络流，磁盘上的文件，UI事件流以及许多其他类型的数据都可以建模为序列**。 但是，当你多次迭代元素时，并非所有这些元素的行为都像数组。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管斐波那契序列不受其元素遍历的影响（后续遍历再次从零开始），但是表示**网络数据包流的序列是单遍的**； 如果你开始新的迭代，它将不会再次产生相同的值。 但是，两者都是有效的序列，因此文档非常清楚， `Sequence `无法保证多次遍历：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序列协议对一致性类型是否被迭代破坏性消耗没有要求。 因此，不要以为序列上的多个for-in循环会恢复迭代或从头开始：

``` Swift
for element in sequence {
    if ... some condition { break }
}

for element in sequence { 
    // No defined behavior
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不是集合的符合序列可以在第二个for-in循环中生成任意元素序列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也解释了为什么看似平凡的第一个属性仅在集合上可用，而在序列上不可用。 调用属性获取器应该没有副作用，并且只有 `Collection协议 `才能保证安全的多遍迭代。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为单遍序列的示例，请考虑 `readLine函数 `周围的包装，该函数从标准输入中读取行：

``` Swift
let standardIn = AnySequence { 
    return AnyIterator {
        readLine() 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你可以将此序列与 `Sequence `的各种扩展一起使用。 例如，你可以编写 `Unix cat `实用程序的行号版本：

``` Swift
let numberedStdIn = standardIn.enumerated() 
for (i, line) in numberedStdIn {
    print("\(i+1): \(line)") 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举方法将序列包装在新序列中，该序列产生成对的原始序列元素，并从零开始递增数字。就像我们的 `readLine `包装一样，元素是延迟生成的。**基本序列的消耗仅在你使用其迭代器遍历枚举序列时发生，而不是在创建序列时发生**。因此，如果你从命令行运行上述代码，则会看到它在for循环中等待。当你按下回车键时，它将打印你键入的行；它不会等到用 `Control-D `终止输入。尽管如此，每次枚举从 `standardIn `提供一行时，都会消耗标准输入。你无法对其进行两次迭代以获得相同的结果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为序列扩展的作者，你无需考虑序列是否为单遍。但是，如果可能，请尝试使用单遍编写算法。作为序列类型方法的调用者，你绝对应该牢记序列是否为单遍。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个序列是多次通过的确定信号是否它也符合 `Collection `，因为此协议可以保证这一点。反之则不正确。即使标准库中的某些序列不是集合，也可以安全地遍历多次。示例包括 `StrideTo `和 `StrideThrough类型 `，分别由 `stride（from：to：by :) `和 `stride（from：through：by :) `返回。


## ***序列与迭代器之间的关系***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序列和迭代器是如此相似，以至于你可能想知道为什么它们完全需要是单独的类型。 我们不能仅将 `IteratorProtocol功能 `折叠到 `Sequence `中吗？ 对于单遍序列，这确实可以正常工作，例如我们的标准输入示例。 这种序列具有其自身的迭代状态，并且在遍历时会发生变异。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `多遍序列 `（例如数组或我们的斐波那契序列）一定不能被for循环所突变； 它们需要单独的遍历状态，这就是 `迭代器提供的内容（以及遍历逻辑，但也可能存在于序列中） `。  `makeIterator方法 `的目的是 `创建此遍历状态 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*每个迭代器也可以看作是尚未返回的元素的单遍序列*。 实际上，你可以简单地通过以下方法将每个迭代器变成一个序列声明符合性；  `Sequence `带有 `makeIterator `的默认实现，如果符合条件的类型是迭代器，它将返回 `self `：

``` Swift
extension Sequence where Iterator == Self { 
    func makeIterator() -> Self {
        return self
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中的大多数迭代器都符合 `Sequence `。


## **符合序列表**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在[***```“枚举”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%85%AD):%20%20Enums/ "")一章中，我们显示一个链接列表的示例。 我们将其定义为具有 `push和pop `实现的间接枚举。 让我们使列表符合序列。 这是我们的列表类型的更简洁的定义（不使用缺点）：

``` Swift
enum List<Element> {
    case end
    indirect case node(Element, next: List<Element>)
}

extension List {
    mutating func push(_ x: Element) {
        self = .node(x, next: self)
    }

    mutating func pop() -> Element? { 
        switch self {
        case .end: 
            return nil
        case let .node(x, next: tail):
            self = tail
            return x 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还为 `ExpressibleByArrayLiteral `添加了一致性：

``` Swift
extension List: ExpressibleByArrayLiteral {
    public init(arrayLiteral elements: Element...) {
        self = elements.reversed().reduce(into: .end) { partialList, element in
            partialList.push(element)
        }
    } 
}
let list: List = [3,2,1]
/*
node(3, next: List<Swift.Int>.node(2, next: List<Swift.Int>.node(1,
next: List<Swift.Int>.end))) */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在[***```“枚举”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%85%AD):%20%20Enums/ "")中证明 `List `是一个持久数据结构：即使 `List类型 `的变量可以更改其指向的值，但这些值本身是不可变的。 由于这种不可变性，我们可以将List变量用作列表的迭代器。 为了使 `List符合Sequence `，我们只需要为 `next `提供一个实现即可，该实现返回当前元素并将迭代器状态移至下一个元素。 这正是 `pop `的作用：

``` Swift
extension List: IteratorProtocol, Sequence { 
    public mutating func next() -> Element? {
        return pop() 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们不必提供 `makeIterator `实现，因为前面提到的默认序列是自己的迭代器实现。 现在我们可以使用带有 `for ... in `的列表：

``` Swift
let list2: List = ["1", "2", "3"] 
for x in list2 {
    print("\(x) ", terminator: "") 
} 
// 1 2 3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 `Sequence `保持一致还意味着，通过协议扩展的功能，我们可以将 `List `与数十种标准库函数一起使用：

``` Swift
list2.joined(separator: ",") // 1,2,3 
list2.contains("2") // true 
list2.compactMap { Int($0) } // [1, 2, 3]
list2.elementsEqual(["1", "2", "3"]) // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，即使 `List `充当其自己的迭代器，并且迭代器在定义上为单遍，但 `List `仍然是多遍序列。 这是因为for循环和所有其他 `Sequence操作 `在内部调用 `makeIterator `，并且 `List.makeIterator `返回 `self `的副本。 然后，迭代将使用该副本，但是原始的 `List变量 `仍然存在，并指向列表的开头。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在计算机科学理论中，对于某些常见操作，链表比数组更有效。 但是，实际上，利用超快的缓存和（相对）慢的主内存，要在现代计算机体系结构上胜过阵列确实非常困难。 由于阵列对其元素使用连续的内存，因此处理器可以更有效地处理它们。 


# **Collections**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**集合是可以多次无损遍历的多次遍历序列**。集合的元素不仅可以线性遍历，还可以通过带有索引的下标进行访问。集合索引通常是整数，因为它们在数组中。但是，正如我们将看到的那样，索引也可以是不透明的值（如在字典或字符串中），这有时使它们的使用变得不直观。集合的索引始终形成一个有限范围，并具有定义的起点和终点。这意味着与序列不同，集合不能是无限的。每个集合还具有一个关联的SubSequence，该子序列表示该集合的连续切片。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**集合协议建立在Sequence之上**。除了从 `Sequence继承 `的所有方法外，集合还具有其他功能，这些功能要么取决于访问特定位置的元素，要么取决于保证多次遍历迭代，例如 `count属性 `（如果对消耗的单遍序列中的元素计数）顺序，可能会破坏目的）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使你的自定义序列类型不需要集合的特殊功能，你也可以使用集合一致性来向用户表示你的类型是有限的并支持多遍迭代。如果你只想证明序列是多次通过，就必须拿出一个索引有点奇怪。选择合适的索引类型来表示集合中的位置通常是实现索引的最困难的部分 `集合协议 `。进行此设计的原因之一是，Swift团队希望避免潜在的混乱，即对于具有与Sequence相同但语义不同的需求的多遍序列具有不同的协议。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集合在整个标准库中被广泛使用。除了 `Array `， `Dictionary `和 `Set `外， `String及其视图 `都是所有集合， `[Closed]Range（有条件） `和 `UnsafeBufferPointer `也是如此。我们也越来越多地看到标准库外的类型采用了 `Collection协议 `。以这种方式获得了大量新功能的 `Foundation类型 `的两个示例是 `Data `和 `IndexSet `。

## ***自定义集合***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了演示 `Swift `中的集合如何工作，我们将实现我们自己的集合之一。  `Swift标准库 `中没有的最有用的容器类型可能是 `队列 `。  `Swift数组 `可以很容易地用作 `堆栈 `，通过添加 `push和popLast `可以弹出。 但是，它们并不适合用作队列。 你可以将 `push `与 `remove（at：0） `结合使用，但是除去数组的最后一个元素之外的其他任何操作都是 `O（n） `操作-因为**数组保留在连续的内存**中，所以每个元素都必须改组以填补空白 （与弹出最后一个元素不同，这可以在恒定时间内完成）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面是一个非常简单的 `FIFO（先进先出）队列 `，仅在两个数组的顶部实现了入队和出队方法：

``` Swift
/// An efficient variable-size FIFO queue of elements of type  `Element `.
struct FIFOQueue<Element> { 
    private var left: [Element] = [] private 
    var right: [Element] = []
    /// Add an element to the back of the queue.
    /// - Complexity: O(1).

    mutating func enqueue(_ newElement: Element) {
        right.append(newElement) 
    }

    /// Removes front of the queue.
    /// Returns  `nil ` if the queue is empty.
    /// - Complexity: Amortized O(1). 
    mutating func dequeue() -> Element? {
        if left.isEmpty {
            left = right.reversed()
            right.removeAll() 
        }
        return left.popLast() 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此实现使用一种通过使用两个堆栈（两个常规数组）来模拟队列的技术。元素排入队列后，它们被推入“右”堆栈。然后，当元素出队时，它们会从“左”堆栈弹出，并以相反的顺序存放。当左堆栈为空时，右堆栈反转为左堆栈。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会发现出队操作为 `O（1） `的说法有些令人惊讶。当然它包含一个 `O（n） `的反向调用吗？但是，尽管这是正确的，但弹出一个项目所需的总摊销时间是恒定的-在大量的推动和弹出操作中，所有这些操作所花费的时间都是恒定的，即使单个推动或弹出操作的时间可能不是恒定的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样做的关键在于理解反转发生的频率和数量。一种分析这种情况的技术是“银行家的方法”。想象一下，每次将元素放入队列中时，都会将令牌存入银行。单个队列，单个令牌，因此成本不变。然后，当需要将右手堆栈反转到左手堆栈时，你在银行中为排队的每个元素都有一个令牌，然后使用这些令牌来支付反转费用。该帐户永远不会记入借方，因此你花的钱永远不会超过所支付的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种推论很好地解释了为什么每次操作的“摊销”成本在一定时间内都是恒定的，即使单个调用可能不是恒定的。可以使用相同的理由来解释为什么在 `Swift `中将元素追加到数组是一项（摊销后的）恒定时间操作。当阵列的存储空间不足时，它需要分配更大的存储空间并将其所有现有元素复制到其中。但是，由于存储大小成倍增加，因此你可以使用相同的“附加元素，支付令牌，将数组大小加倍，花费所有令牌但不花更多”的参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们有了一个可以使元素入队和出队的容器。下一步是将 `Collection一致性 `添加到 `FIFO Queue `。不幸的是，弄清楚你必须提供以符合协议的最低限度的实现有时在Swift中是令人沮丧的练习。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在撰写本文时， `Collection协议 `具有多达五个关联类型，五个属性，六个实例方法和两个下标：

``` Swift

protocol Collection: Sequence {
    associatedtype Element // Inherited from Sequence. 
    associatedtype Index: Comparable

    // where ... clause omitted.
    var startIndex: Index { get } 
    var endIndex: Index { get }
    associatedtype Iterator = IndexingIterator<Self> 
    associatedtype SubSequence: Collection = Slice<Self>
            where Element == SubSequence.Element, 
                SubSequence == SubSequence.SubSequence
                
    subscript(position: Index) -> Element { get } 
    subscript(bounds: Range<Index>) -> SubSequence { get }

    associatedtype Indices: Collection = 
        DefaultIndices<Self> where Indices == Indices.SubSequence

    var indices: Indices { get } 
    var isEmpty: Bool { get } 
    var count: Int { get }
    func makeIterator() -> Iterator // Inherited from Sequence.

    func index(_ i: Index, offsetBy distance: Int) -> Index
    func index(_ i: Index, offsetBy distance: Int, limitedBy limit: Index) -> Index? func distance(from start: Index, to end: Index) -> Int
    func index(after i: Index) -> Index
    func formIndex(after i: inout Index)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联的 `SubSequence类型 `使用递归约束来指示 `SubSequence `也应该是 `Collection `。它可确保 `SubSequence `的元素与集合中的元素具有相同的类型，并确保 `SubSequence `的 `SubSequence `具有相同的类型。例如， `String `以 `Substring `作为其 `SubSequence `，而 `Substring `以其自身为 `SubSequence `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联的**索引类型也是一个集合**。请注意，为简洁起见，我们省略了关于 `Index `的一长串约束。简而言之，它们可以确保**索引既是指数集合的元素和索引，也是子序列的指数以及指数的指数**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考虑到以上所有要求，遵守 `Collection `似乎是一项艰巨的任务。好吧，事实证明那还不错。请注意，除 `Index `和 `Element `以外的所有关联类型都有默认值，因此除非你的集合类型有特殊要求，否则你无需关心这些默认值。大多数方法，属性和下标也是如此： `Collection上 `的协议扩展提供了默认实现。其中一些扩展具有 `关联类型约束 `，这些约束与协议的默认关联类型匹配。例如，如果 `Collection `的 `Iterator `是 `IndexingIterator <Self> `，则 `Collection `仅提供 `makeIterator方法 `的默认实现：

``` Swift
extension Collection where Iterator == IndexingIterator<Self> { 
    func makeIterator() -> IndexingIterator<Self>
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你决定你的类型应具有其他迭代器类型，则必须实现此方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弄清所需内容和通过默认值提供的内容并不十分困难，但这需要大量的人工工作，除非你非常注意不要忽略任何内容，否则很容易在编译器中陷入烦人的猜谜游戏。 这个过程中最令人沮丧的部分可能是编译器具有所有信息来指导你； 诊断只是不是很有帮助。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;暂时，你最大的希望是找到文档中阐明的最低一致性要求，实际上 `Collection `就是这样：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...要为你的类型添加 `Collection一致性 `，你必须至少声明以下要求：

+ →  `startIndex ` and  `endIndex ` 属性。
+ → 下标提供对你类型的至少只读访问元素。
+ →  `index(after:) ` 用于推进索引无法收集的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，最终，我们达到了以下要求：

``` Swift
protocol Collection: Sequence {
    /// A type representing the sequence's elements.
    associatedtype Element
    /// A type that represents a position in the collection. 
    associatedtype Index: Comparable
    /// The position of the first element in a non-empty collection.
    var startIndex: Index { get }
    /// The collection's "past the end" position---that is, the position one /// greater than the last valid subscript argument.
    var endIndex: Index { get }
    /// Returns the position immediately after the given index.
    func index(after i: Index) -> Index
    /// Accesses the element at the specified position. 
    subscript(position: Index) -> Element { get }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以像这样使 `FIFOQueue `与 `Collection `一致：

``` Swift
extension FIFOQueue: Collection {
    public var startIndex: Int { return 0 }
    public var endIndex: Int { return left.count + right.count }
    public func index(after i: Int) -> Int {
        precondition(i >= startIndex && i < endIndex, "Index out of bounds") 
        returni+1
    }

    public subscript(position: Int) -> Element { 
        precondition((startIndex..<endIndex).contains(position), "Index out of bounds")

        if position < left.endIndex {
            return left[left.endIndex - position - 1] 
        } else {
            return right[position - left.endIndex] 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将 `Int `用作队列的 `索引类型 `。 我们没有为关联类型指定显式类型别名； 就像使用 `Element `一样， `Swift `可以从方法和属性定义中进行推断。 注意，由于索引从头开始返回元素，所以 `Queue.first `返回将出队的下一个项目（因此它是一种窥视）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;队列只有几行，现在有40多种方法和属性可供使用。 我们可以遍历队列：

``` Swift
var queue = FIFOQueue<String>() 
for x in ["1", "2", "foo", "3"] {
    queue.enqueue(x) 
}

for s in queue{
    print(s, terminator: " ")
} // 1 2 foo 3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将队列传递给采用序列的方法：

``` Swift
var a = Array(queue) // ["1", "2", "foo", "3"] 
a.append(contentsOf: queue[2...3])
a // ["1", "2", "foo", "3", "foo", "3"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以调用扩展 `Sequence的方法和属性 `：

``` Swift
queue.map { $0.uppercased() } // ["1", "2", "FOO", "3"] 
queue.compactMap { Int($0) } // [1, 2, 3]
queue.filter { $0.count > 1 } // ["foo"]
queue.sorted() // ["1", "2", "3", "foo"] 
queue.joined(separator: " ") // 1 2 foo 3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以调用扩展 `Collection的方法和属性 `：

``` Swift
queue.isEmpty // false 
queue.count // 4 
queue.first // Optional("1")
```

## ***Array Literals***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当编写类似 `FIFOQueue `的集合时，也很高兴实现 `ExpressibleByArrayLiteral `，就像我们对链接列表类型所做的那样。 这将允许用户使用熟悉的[ `value1，value2等] `语法创建队列。 该协议要求我们实现一个初始化程序，如下所示：

``` Swift
extension FIFOQueue: ExpressibleByArrayLiteral { 
    public init(arrayLiteral elements: Element...) { 
        self.init(left: elements.reversed(), right: [])
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于我们的队列逻辑，我们想反转元素以使其可以在左侧缓冲区中使用。 当然，我们可以只将元素复制到右侧缓冲区，但是由于无论如何我们都将复制元素，因此以相反的顺序复制它们会更有效，这样它们以后就不需要反向出队。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在可以轻松地从 `literals `中创建队列：

``` Swift
let queue2: FIFOQueue = [1,2,3] // FIFOQueue<Int>(left: [3, 2, 1], right: [])
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里强调 `Swift `中 `literals `和 `类型 `之间的区别很重要。 [1,2,3]不是数组。 而是一个数组文字，可以用来创建任何符合 `ExpressibleByArrayLiteral `的类型。 此特定文字包含其他文字（整数文字），它们可以创建符合 `ExpressibleByIntegerLiteral `的任何类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些文字具有 `“默认” `类型-如果你在使用文字时未指定显式类型，则 `Swift `将采用这些类型。 因此，数组常量默认为 `Array `，整数常量默认为 `Int `，浮点常量默认为 `Double `，字符串常量默认为 `String `。 但这只会在没有你另外指定的情况下发生。 例如，上面声明的队列是整数队列，但它可能是其他整数类型的队列：

``` Swift
let byteQueue: FIFOQueue<UInt8> = [1,2,3] // FIFOQueue<UInt8>(left: [3, 2, 1], right: [])
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，文字的类型可以从上下文中推断出来。 例如，如果函数采用可以通过文字创建的类型，则外观如下所示：

``` Swift
func takesSetOfFloats(floats: Set<Float>) { 
    //...
}
takesSetOfFloats(floats: [1,2,3])
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该文字将被解释为 `Set<Float> `，而不是 `Array<Int> `。

## ***关联类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到，除了两个相关类型之外， `Collection `为所有其他类型提供了默认值。采用该协议的类型仅需指定一个元素和一个索引类型。虽然你不必太在意其他关联类型，但是最好对它们进行简要介绍以更好地了解它们的特定用途。让我们一一介绍。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Iterator** — 继承自 `Sequence `。在讨论序列时，我们已经详细讨论了 `迭代器 `。集合的默认迭代器类型是 `IndexingIterator <Self> `。这是一个简单的结构，用于包装集合并使用集合自己的索引来遍历每个元素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中的大多数集合都使用 `IndexingIterator `作为其 `迭代器 `。没有理由为自定义集合编写自己的迭代器类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**SubSequence** —*集合元素的连续切片的类型*。子序列本身就是集合。默认的 `SubSequence类型 `为 `Slice<Self> `，它包装原始集合，并根据基础集合存储切片的开始索引和结束索引。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于集合自定义其 `SubSequence类型 `是有意义的，尤其是如果它可以是 `Self `时（即，集合的一个切片与集合本身具有相同的类型）。基金会的数据就是此类收集的一个例子。我们将在本章稍后详细讨论子序列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**索引** - 集合的 `indexs属性 `的返回类型。它表示一个集合，其中包含所有有效的索引（按升序对下标基本集合进行下标）。请注意，不包含 `endIndex `，因为它表示 `“过去” `位置，因此不是有效的下标参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认类型是想象中的 `DefaultIndices<Self> `。与 `Slice `一样，它是基础集合的简单包装器以及起点和终点索引-它需要保留对基础集合的引用才能提升索引。如果用户在迭代索引的同时对集合进行了突变，这可能会导致意外的性能问题：如果使用写时复制（如标准库中的所有集合都实现）来实现集合，则对该集合的额外引用可能会触发不必要的副本。如果你的自定义集合可以提供不需要保留对基本集合的引用的备用索引类型，那么这是值得进行的优化。对于索引数学不依赖于集合本身的所有集合（例如数组或我们的队列）都是如此。如果索引是整数类型，则可以使用 `Range<Index> `：

``` Swift
extension FIFOQueue: Collection { 
    // ...
    typealias Indices = Range<Int> 
    var indices: Range<Int> {
        return startIndex..<endIndex 
    }
}
```

## ***Indices***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**索引表示集合中的位置**。每个集合都有两个特殊索引： `startIndex `和 `endIndex `。  `startIndex `指定集合的​​第一个元素， `endIndex `是最后一个元素之后的索引。结果， `endIndex `不是有效的下标索引；你可以用它来形成索引的开放范围（ `someIndex .. <endIndex `）或与之比较其他索引，例如作为循环中的中断条件（而 `someIndex <endIndex `）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，我们一直在使用整数作为集合中的索引。  `Array `可以做到这一点，并且（通过一些操作）我们的 `FIFOQueue `类型也可以做到。整数索引非常直观，但并非唯一选择。集合索引的唯一要求是它必须是可比较的，这是表示索引具有定义顺序的另一种方式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以字典为例。似乎字典索引的自然候选者将是它的关键字。毕竟， `键 `是我们用来寻址字典中值的键。但是该键不能成为索引，因为你无法将其前进-无法得知给定键之后的下一个索引是什么。同样，带索引的下标有望直接访问元素，而不会绕开搜索或散列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此， `Dictionary.Index `是一个不透明的值，它指向**字典的内部存储缓冲区中的位置**。实际上，它只是单个 `Int `偏移量的包装，但这是实现的详细信息，对于集合用户而言并没有兴趣。（实际上，实际情况要复杂一些。索引还包含一个突变计数器，该突变计数器使字典能够检测何时使用无效索引对其进行了访问。此外，传递给 `Objective-C API `或从中返回的字典使用了 `NSDictionary `作为它们进行有效桥接的后备存储，这些字典的索引类型是不同的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也解释了为什么用索引下标字典不返回可选值，而用键下标却返回可选值。我们习惯的下标 `（_ key：Key `）是直接在 `Dictionary `上定义的下标运算符的额外重载。它返回一个可选值：

``` Swift
struct Dictionary { 
    ...
    subscript(key: Key) -> Value? 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，使用索引下标是 `Collection协议 `的一部分，并且始终返回非可选值，因为使用无效索引（例如数组上的越界索引）寻址集合被视为程序员错误，并且所以应该崩溃：


``` Swift
protocol Collection {
    subscript(position: Index) -> Element { get }
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 注意返回 `类型Element `。 字典的元素类型是元组类型 `(key: Key, value: Value) `，因此对于 `Dictionary `，此下标返回键值对，而不仅仅是一个值。 这也是为什么在for循环中对字典进行迭代会生成键值对的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "")一章中有关数组索引的部分中，我们讨论了为什么即使对于 `Swift `这样的“安全”语言也不要将每个失败的操作都包装在可选或错误构造中是有意义的。 “如果每个API都会失败，那么你将无法编写有用的代码。 你需要有一些可以依靠并信任的基本基础，才能正确操作。”否则，你的代码将陷入安全检查的泥潭。


## ***无效索引***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **当集合发生突变时，索引可能变得无效**。无效可能意味着索引仍然有效，但现在指向另一个元素，或者该索引不再是该集合的有效索引，并且使用它来访问该集合将被陷阱。当你考虑数组时，这应该直观。附加元素时，所有现有索引均保持有效。删除第一个元素时，到最后一个元素的现有索引将无效。同时，较小的索引仍然“有效”，但是它们指向的元素已更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当添加新的键值对时，字典索引保持稳定，直到字典增长到足以触发重新分配为止。这是因为，随着元素的插入，在需要调整缓冲区大小之前，索引元素在字典存储缓冲区中的位置不会改变，从而迫使所有元素都被重新着色。从字典中删除元素会使索引无效。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **索引应该是一个纯值，只能存储描述元素位置所需的最少信息**。特别是，索引尽可能不应该引用其集合，因为当在循环中对集合进行突变时，索引会干扰写时复制优化。同样，一个集合集通常无法将其 `“自己的” `索引与来自同一类型的另一个集合的索引区分开。同样，这对于数组来说是显而易见的。当然，你可以使用从一个数组派生的整数索引来索引另一个数组：

``` Swift
let numbers = [1,2,3,4]
let squares = numbers.map { $0 * $0 }
let numbersIndex = numbers.firstIndex(of: 4)! // 3 
squares[numbersIndex] // 16
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也适用于不透明的索引类型，例如 `String.Index `。 在此示例中，我们使用一个字符串的 `startIndex `访问另一个字符串的第一个字符：

``` Swift
let hello = "Hello"
let world = "World"
let helloIdx = hello.startIndex 
world[helloIdx] // W
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，你可以做到这一点并不意味着通常是个好主意。 如果我们使用索引下标为空字符串，则该程序将崩溃，因为索引超出范围。 另外，由于字符宽度可变，因此一个字符串中第n个字符的索引可能不会指向另一字符串中的有效字符边界。 我们在[***```字符串```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%83):%20Strings/ "")一章中详细讨论了这一点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，存在合法的用例，可以在集合之间共享索引。 最大的是切片。 集合协议要求基本集合的索引必须指向该集合的一个切片中的同一元素，因此与切片共享索引始终是安全的。

## ***Advancing Indices***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift 3 `引入了对集合处理索引遍历的方式的重大更改。向前或向后前进索引的任务（即从给定索引派生新索引）现在是集合的责任，而直到 `Swift 2 `为止，索引才能够前进。在你以前编写 `someIndex.successor（） `到下一个索引的位置的地方，现在你编写了 `collection.index（after：someIndex） `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift `团队为何决定进行此更改？总之，性能。事实证明，从另一个索引派生索引通常需要有关集合内部的信息。它不适用于数组，在数组中前进索引是一个简单的加法运算。但是，例如，字符串索引需要检查实际的字符数据，因为字符在 `Swift `中具有可变大小。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在旧的自我推进索引模型中，这意味着索引必须存储对集合存储的引用。额外的引用足以击败标准库集合使用的写时复制优化，并且当在迭代过程中对集合进行突变时，将导致不必要的副本。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过允许索引保持纯值，新模型不会出现此问题。从概念上讲，它也更容易理解，并且可以简化自定义索引类型的实现。当你实现自己的索引类型时，请记住，**索引尽可能不要保留对集合的引用**。在大多数情况下，索引可能用一个或两个整数表示，这些整数可以有效地编码元素在集合的基础存储中的位置。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新索引模型的缺点是语法更加冗长。

## ***自定义集合索引***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为具有非整数索引的集合的示例，我们将构建一种对字符串中的单词进行迭代的方法。 当你想将字符串拆分成单词时，最简单的方法是使用 `split（separator：maxSplits：omittingEmptySubsequences :) `。 此方法是在 `Collection `上定义的，它将一个 `collection `转换成一个 `SubSequences数组 `，该数组在提供的分隔符处拆分：

``` Swift
var str = "Still I see monsters"
str.split(separator: " ") // ["Still", "I", "see", "monsters"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码返回一个单词数组。 每个单词的类型均为 `Substring `，这是 `String `的关联 `SubSequence类型 `。 每当你需要拆分集合时， `split方法 `几乎总是适合使用的工具。 但是，它确实有一个缺点：它渴望计算整个数组。 如果你的字符串很大，只需要开头的几个单词，那么效率就不高。 为了提高效率，我们构建了一个 `Words集合 `，该集合不会预先计算所有单词，而是允许我们懒惰地进行迭代。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，找到子字符串中第一个单词的范围。 我们将使用空格作为单词边界，尽管这是一个有趣的练习，以使其可配置。 子字符串可能以任意数量的空格开头，我们跳过了这些空格。  `start `是除去前导空格的子字符串。 然后，我们尝试寻找下一个空间； 如果有空格，我们将其用作单词边界的末尾。 如果找不到更多空间，请使用 `endIndex `：

``` Swift
extension Substring {
    var nextWordRange: Range<Index> {
        let start = drop(while: { $0 == " "})
        let end = start.firstIndex(where: { $0 == " "}) ?? endIndex return start.startIndex..<end
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，“范围”是半开的：“范围”一词不包含上限。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于 `Words集合 `的索引类型，逻辑上的首选是 `Int `：索引i表示集合中的第i个单词。但是，通过基于索引的下标访问元素必须是 `O（1） `操作，并且要找到第i个字，我们必须处理整个字符串（这是O（n）操作）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;索引类型的另一种选择是使用 `String.Index `。集合的 `startIndex `为 `string.startIndex `，其后的索引为下一个单词的开头的索引，依此类推。不幸的是，下标实现会遇到类似的问题：找到单词的结尾也是 `O（n） `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，我们使索引成为 `Range <Substring.Index> `的包装。集合的索引必须是可比较的（由于 `Comparable `继承自 `Equatable `，因此我们也需要实现 `== `）。要比较两个指数，我们只比较范围的下限。一般而言，这不适用于比较范围，但就我们的目的而言，就足够了。通过将 `range属性 `和初始值设定项标记为 `“leprivate” `，我们使 `WordsIndex `为不透明类型；我们集合的用户不了解其内部结构，创建索引的唯一方法是通过集合的界面：

``` Swift
struct WordsIndex: Comparable {

    fileprivate let range: Range<Substring.Index> 
    fileprivate init(_ range: Range<Substring.Index>) {
        self.range = range 
    }
    static func <(lhs: WordsIndex, rhs: WordsIndex) -> Bool {
         return lhs.range.lowerBound < rhs.range.lowerBound
    }

    static func ==(lhs: WordsIndex, rhs: WordsIndex) -> Bool { 
        return lhs.range == rhs.range
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们准备建立Words集合。 它将基础字符串存储为子字符串（我们将在切片部分中了解原因），并提供开始索引和结束索引。 集合协议要求 `startIndex `的复杂度为 `O（1） `。 不幸的是，计算需要 `O（n） `，其中n是字符串开头的空格数。 因此，我们在初始化器中对其进行计算并将其存储，而不是将其定义为已计算的属性。 对于结束索引，我们使用位于基础字符串范围之外的空范围：

``` Swift
struct Words {
    let string: Substring
    let startIndex: WordsIndex

    init(_ s: String) {
        self.init(s[...]) 
    }

    private init(_ s: Substring) {
        self.string = s
        self.startIndex = WordsIndex(string.nextWordRange)
    }

    public var endIndex: WordsIndex { 
        let e = string.endIndex
        return WordsIndex(e..<e)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集合还要求我们提供访问元素的下标。 在这里，我们可以直接使用索引的基础范围。 注意，使用单词的范围作为索引使实现 `O（1） `：

``` Swift
extension Words {
    public subscript(index: WordsIndex) -> Substring {
        return string[index.range] 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为最终的 `Collection `要求，我们需要一种方法来计算给定索引之后的索引。 索引范围的上限指向当前单词之后的位置，因此，除非该位置等于字符串的 `endIndex `（表明我们已到达字符串的末尾），否则我们可以从上边界开始取子字符串，然后 寻找下一个单词范围：

``` Swift
extension Words: Collection {
    public func index(after i: WordsIndex) -> WordsIndex {
        guard i.range.upperBound < string.endIndex else { 
            return endIndex 
        } 
        let remainder = string[i.range.upperBound...]
        return WordsIndex(remainder.nextWordRange)
    } 
}

Array(Words(" hello world test ").prefix(2)) // ["hello", "world"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过一些努力，可以更改Words集合以解决更一般的问题。 首先，我们可以使 `“边界” `一词可配置：我们可以不使用空格，而传入一个函数 `isWordBoundary:(Character) -> Bool `。 其次，代码并不是真正针对字符串的：我们可以将 `String `替换为任何类型的集合。 例如，我们可以重复使用相同的算法，将数据延迟地拆分为可处理的块。

## ***Subsequences***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `集合协议 `具有关联的类型 `SubSequence `，用于返回集合的连续子范围：

``` Swift
extension Collection {
    associatedtype SubSequence: Collection = Slice<Self>
    where Element == SubSequence.Element, SubSequence == SubSequence.SubSequence
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `SubSequence `用作返回原始集合的切片的操作的返回类型：

+ → **prefix** and **suffix** — 接受第一个或最后一个元素
+ → **prefix(while:)** - 从一开始就摄取元素，只要它们符合条件
+ → **dropFirst** and **dropLast** - 返回删除了第一个或最后一个元素的子序列
+ → **drop(while:)** - 在条件消失之前删除元素，然后返回其余元素
+ → **split** -在指定的分隔符元素处拆分序列，并返回子序列数组

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，基于范围的下标运算符采用一定范围的索引并返回相应的切片。 **返回子序列而不是返回元素数组的优点是，不需要新的内存分配，因为子序列共享其基本集合的存储**。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术语“子序列”具有历史背景。 最初， `SubSequence是Sequence协议的关联类型 `。 它已移至 `Swift 5 `中的 `Collection `，因为它并未真正解决 `Sequence `的许多问题，并导致了性能问题。 保留该名称是为了保持与现有代码的向后兼容性，但是在集合的上下文中，术语“切片”通常更合适，并且可以与子序列互换使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认情况下， `Collection `定义为 `Slice <Self> `，但是许多具体类型具有自定义实现：例如， `String `的子序列为 `Substring `，而 `Array `使用特殊的 `ArraySlice类型 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 `SubSequence == Self `，即子序列与基本序列具有相同的类型，有时会很方便，因为这允许你将切片传递到任何需要基本集合的地方。  `Foundation `中的数据类型会执行此操作，因此，当你看到数据实例时，你将无法知道它是独立值（ `startIndex == 0 `且 `endIndex = count `）还是更大的Data实例的切片（非零）索引）。但是，标准库集合具有单独的切片类型。其主要动机是避免意外的内存“泄漏”，该意外的“泄漏”可能是由很小的片段导致其基本集合（可能非常大）存活的时间比预期的更长。将切片设为自己的类型可以更轻松地将其生存期绑定到本地范围。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上面列表中标准库中的示例所示， `SubSequence `和 `[SubSequence] `是切片操作的良好返回类型。以下示例将一个集合拆分为n个元素的批处理。为此，它以n的步长循环遍历集合的索引，切分块并将其添加到新的子序列数组中。如果元素数量不是n的倍数，则最后一批将较小：

``` Swift
extension Collection {
    public func split(batchSize: Int) -> [SubSequence] {
        var result: [SubSequence] = [] 
        var batchStart = startIndex 
        while batchStart < endIndex {
            let batchEnd = index(batchStart, offsetBy: batchSize, limitedBy: endIndex) ?? endIndex

            let batch = self[batchStart ..< batchEnd] 
            result.append(batch)
            batchStart = batchEnd
        }
        return result 
    }
}
let letters = "abcdefg"
let batches = letters.split(batchSize: 3) // ["abc", "def", "g"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于子序列也是一个集合（具有相同的 `Element类型 `），因此我们可以使用我们已经知道的相同集合操作无缝地处理切片操作的结果。 例如，让我们验证所有批次的元素计数是否等于基本集合的元素计数：

``` Swift

let batchesCount = batches.map { $0.count }.reduce(0, +) // 7 
batchesCount == letters.count // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于它们的内存开销非常低，因此子序列非常适合中间值。 但是，由于很小的切片可能会意外使很大的基础集合保持生命的危险，因此不建议永久存储子序列（例如，存储在属性中）或将其传递给可能这样做的其他函数。 为了减少子序列与其基本集合之间的联系，我们可以创建一个全新的集合并将子序列传递给初始化程序，例如 字符串（子字符串）或数组（ `arraySlice `）。

## ***Slices***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有集合均获得切片操作的默认实现，并且下标的重载采用 `Range<Index> `。 这等效于 `list.dropFirst() `：

``` Swift
let words: Words = Words("one two three")
let onePastStart = words.index(after: words.startIndex) 
let firstDropped = words[onePastStart..<words.endIndex] 
Array(firstDropped) // ["two", "three"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 `word[somewhere .. <words.endIndex]（ `从特定点到结尾的切片）和  `word[words.startIndex .. <somewhere] `（从开始至特定点的切片）这样的操作很常见，因此存在变体 在标准库中以更易读的方式执行这些操作：

``` Swift
let firstDropped2 = words.suffix(from: onePastStart) 
// or:
let firstDropped3 = words[onePastStart...]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认情况下， `firstDropped `的类型将不是单词-它将是 `Slice<Words> `。  `Slice `是任何集合之上的轻量级包装。 实现看起来像这样：

``` Swift
struct Slice<Base: Collection>: Collection { 

    typealias Index = Base.Index
    let collection: Base
    var startIndex: Index var endIndex: Index

    init(base: Base, bounds: Range<Index>) { 
        collection = base
        startIndex = bounds.lowerBound 
        endIndex = bounds.upperBound
    }

    func index(after i: Index) -> Index { r
        eturn collection.index(after: i)
    }

    subscript(position: Index) -> Base.Element { 
        return collection[position]
    }

    subscript(bounds: Range<Index>) -> Slice<Base> { 
        return Slice(base: collection, bounds: bounds)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Slice `是一种非常好的默认子序列类型，但是每次你编写自定义集合时，都值得研究是否可以将集合设为自己的子序列。 对于Word，这很容易做到：

``` Swift
extension Words {
    subscript(range: Range<WordsIndex>) -> Words {
        let start = range.lowerBound.range.lowerBound 
        let end = range.upperBound.range.upperBound
        return Words(string[start..<end]) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器从基于范围的下标的返回类型推断出 `SubSequence类型 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对集合及其 `SubSequence `使用相同的类型可使该集合的用户更轻松地生活，因为他们只需要了解一种类型而不是两种类型。 另一方面，对 `“根” `集合及其切片使用不同的类型可以清楚地了解切片何时保留其基本集合的内存，这就是为什么标准库具有 `ArraySlice `和 `Substring `的原因。

## ***子序列与基础集合共享切片***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `集合协议 `的正式要求是**子序列的索引可以与原始集合的索引互换使用**。 该文档指出：
**“一个集合及其切片共享相同的索引。只要自创建切片以来，集合和切片都没有发生突变，则集合中的元素位于切片中与基础集合中相同的索引下。”**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此模型的一个重要含义是，即使使用整数索引，集合的索引也不一定会从零开始。 这是一个数组切片的开始和结束索引的示例：

``` Swift
let cities = ["New York", "Rio", "London", "Berlin", "Rome", "Beijing", "Tokyo", "Sydney"]
let slice = cities[2...4] 
cities.startIndex // 0 
cities.endIndex // 8 
slice.startIndex // 2 
slice.endIndex // 5
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下意外访问 `slice[0] `将使你的程序崩溃。这是始终喜欢在集合中使用x而不是手动索引数学的构造的另一个原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面我们提到，数据是此功能的一个特别危险的示例。由于 `Data `使用整数索引，因此自然会假定索引始终从0开始，但这不是事实，因为 `Data `是其自己的S `ubSequence类型 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要访问索引，则在可能的情况下，对于 `collection.indices `优于手动索引数学-一个例外：如果在迭代其索引时对集合进行了变异，则 `indexs对象 `持有的对原始集合的任何强引用将破坏 `写时复制优化 `，可能会导致生成不需要的副本。根据集合的大小，这可能会对性能产生重大的负面影响。 并非所有集合都使用强烈引用基本集合的 `Indices类型 `，但是许多集合都这样做，因为这就是标准库的 `DefaultIndices类型 `所做的。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了避免**遍历索引时出现不必要的副本**，可以用 `while循环 `替换 `for循环 `，并在每次迭代中手动推进索引，从而避免使用 `indexs属性 `。请记住，如果执行此操作，请始终在 `collection.startIndex `而不是0处开始循环。

## ***Specialized Collections***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像所有精心设计的协议一样， `Collection `努力将其要求保持尽可能小。为了使各种各样的类型成为集合，协议不应该要求一致的类型提供超出实现所需功能绝对必要的类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;两个特别有趣的限制是，**集合不能向后移动索引，并且它不提供任何功能（例如，插入，删除或替换元素）来使集合发生变异**。当然，这并不是说一致性类型不具备这些功能，而只是协议没有对此做出任何假设。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，有些算法还有其他要求，即使只有一些集合可以使用它们，也最好有它们的通用变体。为此，标准库包括四个专用的集合协议，每个协议都以特定方式优化 `Collection `以启用新功能（引号来自标准库文档）：

+ → **BidirectionalCollection** — “支持反向遍历和向前遍历的集合。”
+ → **RandomAccessCollection** - “支持有效的随机访问索引遍历的集合。”
+ → **MutableCollection** - “支持下标分配的集合”。
+ → **RangeReplaceableCollection** - “支持将任意子范围的元素替换为另一个集合的元素的集合。”


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们一一讨论。

### ***BidirectionalCollection***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `BidirectionalCollection `增加了一个但很关键的功能：使用 `index（before :) `方法向后移动索引的功能。 这足以为你的集合提供默认的 `last属性 `，该属性首先匹配：

``` Swift
extension BidirectionalCollection {
    /// The last element of the collection. 
    public var last: Element? {
        return isEmpty ? nil : self[index(before: endIndex)] 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Collection `本身可以提供最后的  `property `，但这不是一个好主意。 为了获得仅转发集合的最后一个元素，你必须一直迭代到最后，即 `O（n） `操作。 为最后一个元素提供一个可爱的小属性会产生误导，因为带有一百万个元素的单链接列表需要很长时间才能获取最后一个元素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中双向集合的一个示例是 `String `。 由于我们在[***```“字符串”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%83):%20Strings/ "")一章中提到的**与Unicode相关的原因**，字符集不能提供对其字符的随机访问，但是你可以从一个字符到另一个字符从头向后移动。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `BidirectionalCollection `还为某些操作增加了更有效的实现，这些操作得益于向后遍历集合，例如 `sufix `， `removeLast `和 `reversed `。 后者不会立即撤消集合，而是返回一个惰性视图：

``` Swift
extension BidirectionalCollection {
    /// Returns a view presenting the elements of the collection in reverse 
    /// order.
    /// - Complexity: O(1)
    public func reversed() -> ReversedCollection<Self> {
        return ReversedCollection(_base: self) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像 `Sequence `上的枚举包装程序一样，不会发生实际的反转。 取而代之的是， `ReversedCollection `保留基本集合并使用自定义索引类型，该自定义索引类型以相反的顺序遍历基本集合。 然后，该集合反转所有索引遍历方法的逻辑，以便向前移动在基本集合中向后移动，反之亦然。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `值语义 `在这种方法的有效性中起着很大的作用。 在构造过程中，包装程序将基本集合 `“复制” `到其自己的存储中，以使原始集合的后续突变不会更改 `ReversedCollection `持有的副本。 这意味着它与返回数组的 `reversed版本 `具有相同的可观察行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中符合 `Collection `的大多数类型也符合 `BidirectionalCollection `。 但是，诸如 `Dictionary `和 `Set `之类的类型却不是这样-主要是因为向前和向后迭代的想法对于固有的无序集合几乎没有意义。

### ***RandomAccessCollection***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `RandomAccessCollection `提供**所有元素中最有效的元素访问-它可以在恒定时间内跳转到任何索引**。为此，一致类型必须能够 `（a） `将索引移动任意距离，并且 `（b） `测量任意两个索引之间的距离，两者均在 `O（1） `时间内。  `RandomAccessCollection `以更严格的约束重新声明其关联的 `Indices `和 `SubSequence类型 `-它们本身都必须是随机访问的—但是在 `BidirectionalCollection `上没有添加任何新要求。但是，采用者必须注意满足记录在案的 `O（1） `复杂性要求。你可以通过提供 `index（_：offsetBy :) `和 `distance（from：to :) `方法的实现，或使用符合 `Strideable `的 `Index类型 `（例如 `Int `）来执行此操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;起初，似乎 `RandomAccessCollection `并没有增加太多。甚至像 `Words `这样的简单的仅向前遍历的集合也可以将索引前进任意距离。但是有很大的不同。对于 `Collection `和 `BidirectionalCollection `， `index（_：offsetBy :) `通过连续增加索引直到到达目的地来进行操作。显然，这需要花费线性时间-行驶的距离越长，行驶所需的时间就越长。另一方面，随机访问集合只能直接移动到目的地。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此功能是许多算法的关键。例如，当你实施通用二进制搜索时，此算法仅限于随机访问集合至关重要–否则，它的效率将远不止从头到尾搜索整个集合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随机访问集合可以在恒定时间内计算其 `startIndex `和 `endIndex `之间的距离，这意味着该集合还可以在开箱即用的恒定时间内计算计数。

### ***MutableCollection***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**可变集合支持就地元素突变**。 它添加到 `Collection `的唯一新要求是，现在单元素下标还必须具有 `setter `。 我们可以为队列类型添加一致性：

``` Swift
extension FIFOQueue: MutableCollection {
    public var startIndex: Int { return 0 }
    public var endIndex: Int { return left.count + right.count }
    public func index(after i: Int) -> Int { 
        returni+1
    }

    public subscript(position: Int) -> Element {
         get {
                precondition((0..<endIndex).contains(position), "Index out of bounds") 
                if position < left.endIndex {
                    return left[left.count - position - 1] 
                } else {
                    return right[position - left.count] 
                }
        } 
        
        set {
            precondition((0..<endIndex).contains(position), "Index out of bounds") 
            if position < left.endIndex {
                left[left.count - position - 1] = newValue 
            } else {
                return right[position - left.count] = newValue 
            }
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，**编译器不允许我们在现有集合的扩展中添加下标设置器； 不允许提供没有getter的setter，也不允许我们重新定义现有的getter**，因此我们必须替换现有的符合 `Collection的扩展程序 `。 现在可以通过下标更改队列：

``` Swift
var playlist: FIFOQueue = ["Shake It Off", "Blank Space", "Style"] playlist.first // Optional("Shake It Off")
playlist[0] = "You Belong With Me"
playlist.first // Optional("You Belong With Me")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `MutableCollection `一致性是许多对就位集合工作的算法的要求。标准库中的示例包括 `就地排序 `， `反转 `和 `swapAt方法 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中相对较少的类型采用 `MutableCollection `。在三种主要集合类型中，只有 `Array `可以。  `MutableCollection `允许**更改集合元素的值，但不能更改集合的长度或元素的顺序**。最后一点解释了为什么 `Dictionary `和 `Set `不符合 `MutableCollection `的原因，尽管它们肯定是可变的数据结构。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `字典和集合 `是 `无序集合 `-就使用集合的代码而言，元素的顺序是不确定的。但是，在内部，即使这些集合也具有由其实现定义的稳定元素顺序。当你通过下标分配对 `MutableCollection `进行变异时，变异元素的索引必须保持稳定，即**索引在索引集合中的位置不得更改**。字典和集无法满足此要求，因为它**们的索引指向存储相应元素的内部存储区中的存储桶**，并且当该**元素发生突变时该存储桶可能会更改**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串也不是 `MutableCollection `，因为**字符串中的字符在字符串缓冲区中的大小没有固定值**。结果，替**换字符可能会花费线性时间**，因为**缓冲区的尾端可能必须向后或向前移动几个字节才能为替换字符腾出空间**。此外，**更改一个字符可能会与相邻的组合字符形成一个新的字形簇，从而在此过程中更改了字符串的计数**。

### ***RangeReplaceableCollection***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于需要添加或删除元素的操作，请使用 `RangeReplaceableCollection `协议。该协议需要两件事：

+ → **Anemptyinitializer** - 这是一个有用的功能，它允许创建相同类型的新空集合。
+ → **AreplaceSubrange（_：with :)** 方法 - 将此范围替换为可替换的 `collection `集合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `RangeReplaceableCollection `是协议扩展功能的一个很好的例子。你实现了一个灵活的方法 `replaceSubrange `，由此你可以免费获得一大堆派生方法：

+ → **append（_ :）** and **append（contentsOf：）** —  `replace endIndex .. <endIndex（即用新的元素替换空的范围） `

+ → **remove（at：）** and **removeSubrange（_ :)** - 使用空集合替换（replacei...iorsubrangewithanempty collection）

+ → **insert(at:)** and **insert(contentsOf:at:)** -用新的元素替换  `i..<i `（即用数组中的该点替换空范围）

+ → **removeAll** - 替换带有空集合的 `startIndex ..<endIndex `

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些方法是协议的要求，这意味着当特定集合类型可以使用有关其实现的知识来更有效地执行这些功能时，它可以**提供自定义版本，其优先级高于默认协议扩展版本**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于我们的队列类型，我们选择了一个非常简单且效率低下的实现。正如我们在定义数据类型时所说的，左堆栈以相反的顺序保存元素。为了有一个简单的实现，我们需要反转所有元素并将它们组合成正确的数组，以便我们可以一次替换整个范围：

``` Swift
extension FIFOQueue: RangeReplaceableCollection { 
    mutating public func replaceSubrange<C: Collection>( _ subrange: Range<Int>, with newElements: C) where C.Element == Element {
        right = left.reversed() + right left.removeAll()
        right.replaceSubrange(subrange, with: newElements) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能想尝试实现一个更有效的版本，该版本查看被替换的范围是否跨越了左右堆栈之间的距离。 在此示例中，我们无需实现空的 `init `，因为 `FIFOQueue `结构默认情况下已经有一个。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 `BidirectionalCollection `和 `RandomAccessCollection `后者对前者进行扩展不同， `RangeReplaceableCollection `不继承自 `MutableCollection `。 它们形成了不同的层次结构。 符合 `RangeReplaceableCollection `但不是 `MutableCollection `的标准库集合的示例为 `String `。 究其原因，可以归结为我们上面所说的关于**索引必须在单元素下标突变期间保持稳定的原因，而String无法保证**。 我们将在[***``` `“字符串”``` `***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%83):%20Strings/ "")一章中进一步讨论这一点。

### ***Composing Capabilities***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以将特殊的集合协议非常优雅地组合成一组严格匹配特定算法要求的约束。 例如，采用标准库中的 `sort方法 `对集合进行排序（与它的非变异同级 `sorted `不同，它返回数组中排序后的元素）。 排序到位要求集合是可变的。 如果你想快速排序，则还需要随机访问。 最后但并非最不重要的一点是，你需要能够将集合的元素彼此进行比较。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结合这些要求，在 `MutableCollection `的扩展中定义了 `sort方法 `，并使用 `RandomAccessCollection `和 `Element：Comparable `作为附加约束：

``` Swift
extension MutableCollection where Self: RandomAccessCollection, Element: Comparable { 
    /// Sorts the collection in place.
    public mutating func sort() { ... }
}
```


# **惰性序列**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库为延迟编程提供了两种协议： `LazySequenceProtocol `和 `LazyCollectionProtocol `。懒惰的编程意味着只在需要时才计算结果，这与急于编程的情况相反，后者是Swift中的默认设置。惰性序列会在序列的生产者和使用者之间造成分隔：你无需预先构建整个序列。相反，一旦消费者要求下一个元素，则惰性序列会产生它。出于性能原因，这既可以用于实现不同的编程样式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们已经看到了许多延迟序列。我们展示了构造斐波那契序列的三个变体：使用自定义迭代器，使用 `AnySequence `和使用 `sequence（first：next :) `方法。这些变体中的每一个都会产生一个无限的惰性值流：仅当使用者调用 `next `时才计算下一个值。这使消费者可以决定需要多少元素。例如，我们可以使用该流的第一个元素或前缀。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;延迟计算序列的一个问题是某些转换需要计算整个序列。例如，回想一下我们对 `standardIn `的定义，这是一个单遍序列，它逐行从标准输入中读取字符串。我们可能只想打印符合特定条件的行。在功能风格上，我们可能会使用过滤器来实现这一目标。但是，由于 `Sequencelter on Sequence `的返回类型是一个数组（必须急切地进行计算），因此该实现只可以在返回结果之前处理整个标准输入。换句话说，结果不再是懒惰的。以下代码将打印所有具有三个以上单词的行，但仅在标准输入发送EOF信号之后：

``` Swift
let filtered = standardIn.filter { 
    $0.split(separator: " ").count > 3
}

for line in filtered { 
    print(line) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理想情况下，我们希望我们的程序在匹配行到达时打印它们。 一种解决方案是切换到更强制的样式：

``` Swift
for line in standardIn {
    guard line.split(separator: " ").count > 3 else { continue } 
    print(line)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想将函数样式与方法链接一起使用而不是for循环，则必须在过滤的项目到达时生成它们，而不是在读取所有输入之后才生成。 换句话说：我们需要构造一个惰性序列。 标准库在 `Sequence `上提供了 `.lazy属性 `，可以帮助我们实现这一目标。 我们可以编写以下代码：

``` Swift

let filtered = standardIn.lazy.filter { 
    $0.split(separator: " ").count > 3
}
for line in filtered { 
    print(line) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `.lazy `的返回类型为 `LazySequence<Self> `。 这意味着 `standardIn.lazy `具有类型 `LazySequence<AnySequence<String >> `。  `LazySequence `在**内部存储了基础序列**，但没有进行任何其他处理。 然后， `LazySequence `上的 `filter方法 `返回 `LazyFilterSequence<AnySequence<String >> `。 在内部，它存储基础序列和传递给过滤器的谓词函数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的代码示例中，这意味着当我们迭代过滤时，将从标准输入中读取行。 无需等待EOF标记，而是立即打印这些行。 此外，没有构造中间阵列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有趣的是，随着程序需求的变化，代码也将如何变化。 例如，让我们仅打印包含三个以上单词的第一行。 使用 `lazy `，我们可以简单地调用 `.first `，同时保持过滤后的定义不变：

``` Swift
let filtered = standardIn.lazy.filter { 
    $0.split(separator: " ").count > 3
}
print(filtered.first ?? "<none>")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果没有延迟，它将从标准输入读取所有行，直到接收到EOF信号，然后才打印第一条匹配的行。 使用 `lazy `时，它只读取直到第一个匹配项为止，而其余的标准输入未处理。 要更改代码以打印前两行，可以将对 `“rst” `的调用更改为 `prexx（2 `）。 与以命令式方式更改相同的代码相比，对这些功能管道进行更改通常更短，更清晰。 例如，下面是相同的代码，一次是懒惰的，另一次是命令式的：

``` Swift
// Functional.
let result = Array(standardIn.lazy.filter { 
    $0.split(separator: " ").count > 3
}.prefix(2))

// Imperative.
var result: [String] = [] 
for line in standardIn {
    guard line.split(separator: " ").count > 3 else { continue } 
    result.append(line)
    if result.count == 2 { break }
}
```

## ***集合的延迟处理***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在常规集合类型（例如数组）上链接多个方法时，惰性序列也可能更有效。 如果你更喜欢功能性的样式，则可能会想编写如下代码：

``` Swift
(1..<100).map { $0 * $0 }.filter { $0 > 10 }.map { "\($0)"}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你习惯于函数式编程时，上面的代码非常清晰并且易于阅读。 但是，它也是低效的：每次对 `map `和 `filter `的调用都会创建一个中间数组，该数组在下一步中将被销毁。 通过在链的开头插入 `.lazy `，不会构造任何中间数组，并且代码的运行速度更快：

``` Swift
(1..<100).lazy.map { $0 * $0 }.filter { $0 > 10 }.map { "\($0)"}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 `.lazy `的代码在未优化的构建中运行速度快了三倍，而运行速度快了八十倍
在 `Swift 5.0 `中使用-O构建时，速度更快。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `LazyCollectionProtocol `通过要求一致类型也是 `Collection `来扩展 `LazySequence `。 在惰性序列中，我们只能延迟生成下一个元素，但是在集合中，我们也可以延迟计算单个元素。 例如，当你在一个惰性集合上进行映射，然后使用下标访问元素时，映射转换仅应用于该一个元素（这里是索引为50的元素）：

``` Swift
let allNumbers = 1..<1_000_000
let allSquares = allNumbers.lazy.map { $0 * $0 }
print(allSquares[50]) // 2500
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用懒惰的集合并不总是性能上的胜利。 有几件事要牢记。 **通过下标访问元素时，每次访问时都会计算该值**。 同样，根据集合必须执行的计算，下标访问可能不再是 `O（1） `。 例如，考虑以下代码：

``` Swift
let largeSquares = allNumbers.lazy.filter { $0 > 1000 }.map { $0 * $0 } print(largeSquares[50]) // 2500
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在执行打印语句之前， `filter `和 `map `都未完成任何实际工作。 由于 `filter `操作， `largeSquares `中的索引50与 `allNumbers `中的索引50不对应。 为了找到正确的元素，过滤器需要通过下标在每次访问中计算前51个元素，这显然不是恒定时间的操作。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**序列和集合协议构成了Swift集合类型的基础**。它们为符合类型提供了数十种常见操作，并充当你自己的通用函数的约束。专用的集合类型（例如 `MutableCollection `或 `RandomAccessCollection `）使你可以对算法的功能和性能要求进行细粒度的控制。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;较高的抽象水平必然会使模型变得复杂，因此，即使不是所有事情都立即有意义，也不要灰心。习惯使用严格的类型系统需要实践，特别是因为通常（经常）辨别编译器要告诉你的内容是一种艺术形式，它迫使你仔细阅读各行。奖励是一个极其灵活的系统，它可以处理从指针到内存缓冲区到破坏性消耗的网络数据包流的所有内容。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种灵活性意味着一旦你对模型进行了内部化处理，你将来会遇到的许多代码就有可能会立即感到熟悉，因为它们基于相同的抽象并支持相同的操作。并且无论何时创建适合 `Sequence `或 `Collection框架 `的自定义类型，都应考虑添加 `一致性 `。对于你和其他使用你的代码的开发人员来说，这将使你的工作更加轻松。


