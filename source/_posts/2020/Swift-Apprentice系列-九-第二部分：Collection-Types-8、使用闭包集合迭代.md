---
title: 'Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代'
description: 'Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代'
permalink: 'Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代'
copyright: ture
date: 2020-05-12 20:58:28
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Collection Iteration with Closures]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

之前，你了解了函数。 但是**Swift还有另一个对象**，可以用来将代码分解为可重用的块：**闭包**。 当处理集合时，它们变得特别有用。

**闭包只是一个没有名称的函数**。 你可以将其分配给变量，然后像其他任何值一样传递给它。 本章向你展示闭包的便捷性和实用性。

# **了解闭包**

闭包之所以如此命名，是因为它们能够 **“封闭”闭包自身范围内的变量和常量。 这仅意味着闭包可以访问，存储和操作来自周围上下文的任何变量或常量的值**。 据说在**闭包体内使用的变量和常量已被闭包捕获**。

你可能会问：“如果闭包是没有名称的函数，那么如何使用它们呢？” 要使用闭包，你首先必须将其分配给变量或常量。

这是一个可以包含闭包的变量的声明：

``` Swift
var multiplyClosure: (Int, Int) -> Int
```

multipleClosure采用两个Int值并返回一个Int。 注意，这与函数的变量声明完全相同。 就像我说的，闭包只是一个没有名称的函数。 **闭包的类型是函数类型**。

<!-- more -->

为了使声明可以在playground上编译，你需要提供一个初始定义，如下所示：

``` Swift
var multiplyClosure = { (a: Int, b: Int) -> Int in
    return a * b 
}
```

这看起来类似于函数声明，但有细微的差别。 这里有相同的参数列表`->符号`和返回类型。 但是对于闭包，这些元素显示在大括号内，并且在返回类型之后有一个`in关键字`。

定义完闭包变量后，就可以像使用一个函数一样使用它，如下所示：

``` Swift
let result = multiplyClosure(4, 2)
```

正如你所期望的，结果等于8。尽管如此，还是有细微的差别。

请注意，闭包如何没有参数的外部名称。 你无法像使用功能那样设置它们。

## ***速记语法***

与功能相比，闭包设计为轻巧的。 有许多方法可以缩短其语法。 首先，就像普通函数一样，如果闭包包含单个return语句，则可以省略return关键字，如下所示：

``` Swift
multiplyClosure = { (a: Int, b: Int) -> Int in
    a*b 
}
```

接下来，你可以使用Swift的类型推断，通过删除类型信息来进一步缩短语法：

``` Swift
multiplyClosure = { (a, b) in
    a*b 
}
```

记住，你已经将multipleClosure声明为使用两个Int并返回一个Int的闭包，因此你可以让Swift为你推断这些类型。

最后，如果需要，你甚至可以省略参数列表。 Swift让你可以从零开始按数字引用每个参数，如下所示：

``` Swift
multiplyClosure = {
    $0 * $1 
}
```

参数列表，返回类型和in关键字均已消失，新的闭包声明比原始的闭包声明短得多。 像这样的带编号的参数实际上仅应在闭合短而甜美时才使用，例如上面的参数。

如果参数列表更长，则记住每个编号参数所指的内容可能会造成混淆。 在这些情况下，应使用命名语法。

考虑以下代码：

``` Swift
func operateOnNumbers(_ a: Int, _ b: Int, operation: (Int, Int) -> Int) -> Int {
  let result = operation(a, b)
  print(result)
  return result
}
```

这将声明一个名为operatorOnNumbers的函数，该函数将Int值作为其前两个参数。 第三个参数被命名为operation并且是函数类型。 operatorOnNumbers本身返回一个Int。

然后，你可以使用带有闭包的operatorOnNumbers，如下所示：

``` Swift
let addClosure = { (a: Int, b: Int) in
    a+b 
}
operateOnNumbers(4, 2, operation: addClosure)
```

请记住，**闭包只是没有名称的函数**。 因此，得知你还可以将函数作为operateOnNumbers的第三个参数传入，你应该不会感到惊讶，如下所示：

``` Swift
func addFunction(_ a: Int, _ b: Int) -> Int {
    a+b 
}
operateOnNumbers(4, 2, operation: addFunction)
```

无论操作是函数还是闭包，都以相同的方式调用operateOnNumbers。

闭合语法的功能再次派上用场。 你可以使用operateOnNumbers函数调用内联定义闭包，如下所示：

``` Swift
 operateOnNumbers(4, 2, operation: { (a: Int, b: Int) -> Int in
    return a + b 
})
```

无需定义闭包并将其分配给局部变量或常量。 你只需在将闭包作为参数传递给函数的位置就声明其正确！

但是请记住，你可以简化闭包语法以删除许多样板代码。 因此，你可以将上述内容简化为以下内容：

``` Swift
operateOnNumbers(4, 2, operation: { $0 + $1 })
```

实际上，你甚至可以更进一步。 +运算符只是一个需要两个参数并返回一个结果，因此你可以编写：

``` Swift
operateOnNumbers(4, 2, operation: +)
```

还有一种简化语法的方法，但是只有当闭包是传递给函数的最后一个参数时，才可以这样做。 在这种情况下，可以将闭包移到函数调用之外：

``` Swift
operateOnNumbers(4, 2) {
    $0 + $1 
}
```

这可能看起来很奇怪，但它与先前的代码段相同，只不过你已删除操作标签并将花括号拉到了函数调用参数列表之外。 这称为**尾随闭包语法**。

## ***没有返回值的闭包***

到目前为止，你看到的所有闭包都采用了一个或多个参数并返回了值。 但是，就像函数一样，不需要关闭就可以执行这些操作。 声明不带参数且不返回任何内容的闭包的方法如下：

``` Swift
let voidClosure: () -> Void = {
  print("Swift Apprentice is awesome!")
}
voidClosure()
```

闭合的类型为()->void。 空括号表示没有参数。 你必须声明一个返回类型，因此Swift知道你正在声明一个闭包。 这就是Void派上用场的地方，它的含义恰如其名：闭包不返回任何内容。

>注意：Void实际上只是()的类型别名。 这意味着你可以将 ()-> Void编写为()->()。 但是，函数的参数列表必须始终用括号括起来，因此Void->()或Void-> Void无效。

## ***从闭包作用域中捕获***

最后，让我们回到闭包的定义特征：**它可以从自己的作用域中访问变量和常量**。

>注意：回想一下，作用域定义了可访问实体（变量，常量等）的范围。 你看到了if-语句引入的新作用域。 闭包还引入了一个新范围，并继承了对其定义范围可见的所有实体。

例如，采取以下闭包：

``` Swift
var counter = 0
let incrementCounter = {
    counter += 1 
}
```

crementCounter非常简单：它递增计数器变量。 计数器变量在闭包外部定义。 闭包能够访问变量，因为闭包在与变量相同的范围内定义。 据说闭包捕获计数器变量。 它对变量所做的任何更改在闭包的内部和外部均可见。

假设你调用了5次闭包，如下所示：

``` Swift
incrementCounter()
incrementCounter()
incrementCounter()
incrementCounter()
incrementCounter()
```

在这五次调用之后，计数器将等于5。

**闭包可用于从封装范围捕获变量的事实可以非常有用**。 例如，你可以编写以下函数：

``` Swift
func countingClosure() -> () -> Int { 
    var counter = 0
    let incrementCounter: () -> Int = {
    counter += 1
        return counter
    }
    return incrementCounter
}
```

此函数不带参数，并返回一个闭包。 它返回的闭包不带任何参数，并返回一个Int。

从此函数返回的闭包将在每次调用时增加其内部计数器。 每次调用此函数时，都会得到一个不同的计数器。

例如，可以这样使用：

``` Swift
let counter1 = countingClosure()
let counter2 = countingClosure()
counter1() // 1
counter2() // 1
counter1() // 2
counter1() // 3
counter2() // 2
```

该函数创建的两个计数器是互斥的，并且是独立计数的。 整齐！

# **使用闭包自定义排序**

当你开始更深入地研究集合时，闭包便会派上用场。 在第7章中，你使用了数组的sort方法对数组进行排序。 通过指定闭包，你可以自定义事物的排序方式。 你调用sorted（）以获得数组的排序版本，如下所示：

``` Swift
let names = ["ZZZZZZ", "BB", "A", "CCCC", "EEEEE"] 
names.sorted()
// ["A", "BB", "CCCC", "EEEEE", "ZZZZZZ"]
```

通过指定自定义闭包，可以更改数组排序方式的详细信息。 指定`尾随闭包`，如下所示：

``` Swift
names.sorted {
    $0.count > $1.count 
}
// ["ZZZZZZ", "EEEEE", "CCCC", "BB", "A"]
```

现在，该数组按字符串的长度排序，长字符串在前。

## ***使用闭包遍历集合***

在Swift中，集合实现了一些通常与函数式编程相关的非常方便的功能。 这些功能采用功能的形式，你可以将其应用于集合以对其执行操作。

操作包括诸如转换每个元素或滤除某些元素之类的事情。

正如你现在将看到的，所有这些功能都使用了闭包。

这些功能中的第一个功能使你可以遍历集合中的元素并执行如下操作：

``` Swift
let values = [1, 2, 3, 4, 5, 6] 
values.forEach {
  print("\($0): \($0*$0)")
}
```

这将遍历集合中的每个项目，并打印值及其平方。

另一个功能允许你过滤掉某些元素，如下所示：

``` Swift
var prices = [1.5, 10, 4.99, 2.30, 8.19]
let largePrices = prices.filter {
    $0 > 5 
}
```

在这里，你将创建一个Double数组，以表示商店中商品的价格。 要过滤出大于$ 5的价格，请使用过滤器功能。 该函数如下所示：

``` Swift
func filter(_ isIncluded: (Element) -> Bool) -> [Element]
```

这意味着filter采用单个参数，这是一个采用Element并返回Bool的闭包（或函数）。 然后，过滤器函数返回一个元素数组。 在这种情况下，元素是指数组中项目的类型。 在上面的示例中，双打。

**闭包的工作是根据是否应保留值来返回true或false**。 从filter返回的数组将包含闭包为其返回true的所有元素。

在你的示例中，largePrices将包含：

``` Swift
(10, 8.19)
```

>注意：**从过滤器（以及所有这些函数）返回的数组是一个新数组。 原始文件完全没有被修改**。

如果你只对满足特定条件的第一个元素感兴趣，则可以使用first（where :)。 例如，使用尾随闭包：

``` Swift
let largePrice = prices.first {
    $0 > 5 
}
```

在这种情况下，largePrice将为10。但是，还有更多！

假设你要出售商品，并且想将所有商品都打折到原始价格的90％。 有一个方便的名为map的函数可以实现此目的：

``` Swift
let salePrices = prices.map {
    $0 * 0.9 
}
```

map函数将执行闭包，在数组中的每个项目上执行它，并返回一个包含每个结果并保持顺序的新数组。 在这种情况下，salePrices将包含：

``` Swift
[1.35, 9, 4.491, 2.07, 7.371]
```

map功能也可用于更改类型。 你可以这样做：

``` Swift
let userInput = ["0", "11", "haha", "42"]
let numbers1 = userInput.map {
    Int($0) 
}
```

这需要用户输入的一些字符串，并将它们转换为Int？数组。 它们必须是可选的，因为从String到Int的转换可能会失败。

如果要过滤掉无效（丢失）的值，可以像这样使用compactMap：

``` Swift
let numbers2 = userInput.compactMap {
    Int($0) 
}
```

这与map几乎相同，除了它创建一个Int数组并扔掉缺少的值。

另一个方便的功能称为reduce。 此函数采用一个起始值和一个结束符。 闭包采用两个值：当前值和数组中的元素。 闭包返回下一个应作为当前值参数传递给闭包的值。

可以将其与prices数组一起使用以计算总数，如下所示：

``` Swift
let sum = prices.reduce(0) {
    $0 + $1 
}
```

初始值为0。然后，闭包将计算当前值与当前迭代值之和。 因此，你可以计算数组中所有值的总和。 在这种情况下，总和为：

``` Swift
26.98
```

既然你已经看到了过滤，映射和归约，希望借助闭包的语法，你将意识到这些功能的强大功能。 在仅几行代码中，你已经从集合中计算出了非常复杂的值。

这些功能也可以与字典一起使用。 想象一下，你通过词典将价格映射到该价格下的物料数量来代表商店中的库存。 你可以使用它来计算股票的总价值，如下所示：

``` Swift
let stock = [1.5: 5, 10: 2, 4.99: 20, 2.30: 5, 8.19: 30] 
let stockSum = stock.reduce(0) {
    $0 + $1.key * Double($1.value) 
}
```

在这种情况下，reduce函数的第二个参数是一个命名元组，其中包含来自字典元素的键和值。 需要进行值的类型转换才能执行计算。

在这里，结果是：

``` Swift
384.5
```

reduce的另一种形式称为reduce(into：_ :)。 将集合简化为数组或字典时，可以使用它，例如：

``` Swift
let farmAnimals = ["#": 5, "$": 10, "%": 50, "!": 1] 
let allAnimals = farmAnimals.reduce(into: []) { (result, this: (key: String, value: Int)) in 
    for _ in 0 ..< this.value {
        result.append(this.key)
    } 
}
```

它的工作方式与其他版本完全相同，只是你不从闭包中返回任何内容。 相反，每次迭代都会为你提供一个可变的值。 这样，在此示例中，仅创建和添加了一个数组，在某些情况下，使reduce(into：_ :)更有效。

如果你需要分割一个数组，则可以使用其他一些函数有帮助的。 第一个函数是dropFirst，其工作原理如下：

``` Swift
let removeFirst = prices.dropFirst() 
let removeFirstTwo = prices.dropFirst(2)
```

dropFirst函数采用一个默认值为1的参数，并返回一个数组，该数组具有从前端删除的所需数量的元素。 结果如下：

``` Swift
removeFirst = [10, 4.99, 2.30, 8.19] 
removeFirstTwo = [4.99, 2.30, 8.19]
```

就像dropFirst一样，也存在dropLast，它从数组末尾删除元素。 它是这样的：

``` Swift
let removeLast = prices.dropLast() 
let removeLastTwo = prices.dropLast(2)
```

这些结果与你期望的一样：

``` Swift
removeLast = [1.5, 10, 4.99, 2.30] 
removeLastTwo = [1.5, 10, 4.99]
```

你可以只选择数组的第一个或最后一个元素，如下所示：

``` Swift
let firstTwo = prices.prefix(2) 
let lastTwo = prices.suffix(2)
```

在这里，前缀从数组的前面返回所需数量的元素，后缀从数组的后面返回所需数量的元素。 该函数的结果是：

``` Swift
firstTwo = [1.5, 10] 
lastTwo = [2.30, 8.19]
```

最后，你可以使用闭包限定的removeAll()或无条件地删除集合中的所有元素：

``` Swift
prices.removeAll() { $0 > 2 } // prices is now [1.5] 
prices.removeAll() // prices is now an empty array
```

## ***Lazy collections***

有时你可以拥有一个庞大的集合，甚至可能是无限的，但是你希望能够以某种方式进行操作。 一个具体的例子是所有素数。 那显然是一组无限的数字。 那么，你该如何处理呢？ 输入惰性集合。

考虑到你可能想计算前十个质数。 为此，你可以执行以下操作：

``` Swift
func isPrime(_ number: Int) -> Bool {
    if number == 1 { return false }
    if number == 2 || number == 3 { return true }
    for i in 2...Int(Double(number).squareRoot()) {
        if number % i == 0 { return false }
    }
    return true
}

var primes: [Int] = [] 
var i = 1
while primes.count < 10 {
    if isPrime(i) {
        primes.append(i) 
    }
    i += 1 
}
primes.forEach { print($0) }
```

这将创建一个检查数字是否为质数的函数。 然后，它使用它来生成前十个质数的数组。

>注意：用于计算是否为质数的函数不是一个很好的函数！ 这是一个很深的主题，远远超出了本章的范围。 如果你感到好奇，那么我建议你先阅读有关Eratosthenes筛的信息。

这行得通，但如本章前面所述，功能更好。 获取前十个质数的功能方法是具有所有质数的序列，然后使用prefix()获取前十个质数。 但是，如何有一个无限长的序列并获取其prefix()？ 在这里，你可以使用惰性操作告诉Swift在需要时按需创建集合。

让我们来看看它的实际效果。 你可以这样重写上面的代码：

``` Swift
let primes = (1...).lazy 
    .filter { isPrime($0) } 
    .prefix(10)
primes.forEach { print($0) }
```

请注意，你从完全开放式集合1 ...开始，这意味着1直到无穷为止（或者更确切地说，就是Int类型可以容纳的最大整数！）。 然后，你使用lazy告诉Swift你希望它成为一个lazy集合。 然后，使用filter()和prefix()过滤素数并选择前十个。

在这一点上，该序列完全没有生成。 没有检查素数。 仅在第二条语句primes.forEach上评估序列并打印出前十个质数。 整齐！ ：]

当集合巨大（甚至无限）或生成成本很高时，惰性集合非常有用。 它可以保存计算，直到恰好在需要时为止。

用闭包结束了集合迭代！


# **关键点**

+ 闭包是没有名称的函数。 可以将它们分配给变量，并作为参数传递给函数。

+ 闭包具有简化的语法，这使它们比其他功能更易于使用。

+ 闭包可以从其周围的上下文中捕获变量和常量。

+ 闭包可用于指示如何对集合进行排序。

+ 集合上存在一组方便的函数，可用于迭代集合并对其进行转换。 转换包括将每个元素映射到一个新值，过滤掉某些值并将集合减少到单个值。

+ 仅当严格需要时，才可以使用惰性集合来评估集合，这意味着你可以轻松处理大型，昂贵或潜在无限的集合。


