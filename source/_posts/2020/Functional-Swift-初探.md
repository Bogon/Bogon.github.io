---
title: Functional Swift 初探
permalink: Functional Swift 初探
copyright: ture
date: 2020-04-30 15:52:43
keywords: iOS,Swift,函数式编程,map,flatMap,compactMap,reduce,filter,Functional Programming
description: Functional Swift 初探
tags:
    - [iOS]
    - [Swift]
    - [函数式编程]
categories:
    - [iOS]
    - [Swift]
    - [函数式编程]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您将永远只需要学习一个高阶函数，例如： ```map``` ， ```flatMap``` ， ```compactMap``` ， ```reduce``` ， ```filter``` 等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```函数式编程```***](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B "")（英语：functional programming）或称 ```函数程序设计``` 、 ```泛函编程``` ，是一种 ```编程范式``` ，它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ演算（lambda calculus）为该语言最重要的基础。而且，λ演算的函数可以接受函数当作输入（引数）和输出（传出值）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比起 ```指令式编程``` ， ```函数式编程``` 更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。


<!-- more -->

</br>

# 函数式编程说明

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先让我强调一件事：***```不要害怕函数式编程！```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使您是新手开发人员，也会看到 ```函数式编程``` 并不像您想象的那么难。 如果您仅学习基础知识，则可以节省大量时间，并可以帮助您编写更好的应用程序。 FP范例的主要概念是通过以特殊方式使用函数来消除可变状态和数据。 💫

## ***一等公民： 函数***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果编程语言将函数视为一等的公民（与我们期望的类型行为相同），我们就说它具有一等的函数。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这意味着该语言支持将函数作为参数传递给其他函数，将它们作为其他函数的值返回，并将其分配给变量或存储在数据结构中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中，您可以使用函数指针， ```闭包（匿名函数）``` ，因此，是的， ```Swift``` 基本上是一种真正的函数式语言。 示例：

``` Swift
// an old-school function
func hello() {
    print("Hello!")
}

// it's a block!
let hi: () -> Void = {
    print("Hi!")
}

// this points to a function
let function = hello
// this is a copy of the closure
let block = hi

hello() // simple function call
function() // call through "function pointer"

hi() // simple closure call
block() // closure call through another variable

// closure parameter
func async(completion: () -> Void) {
    // usually we'd do something here first...
    completion()
}

// calling the method with a closure
async(completion: {
    print("Completed.")
})
// trailing closure syntax
async {
    print("Completed.")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，有时我将闭包称为块，为简单起见，让我们假装它们是完全相同的东西，并且不要过多地讨论细节。 🙄

## ***函数组成，柯里化和可变参数***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```组成函数``` 基本上是将一个函数的输出传递给另一个函数。 这不是那么有趣，我们一直都在做。 另一方面， ```泛函函数``` 是一个更令人兴奋的话题。 基本上， ```柯里化``` 将具有多个参数的函数转换为具有一个参数和返回函数的函数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```柯里化``` 有什么用？ 好吧，有人说这只是语法糖，有人说这很有用，因为您可以将逻辑拆分为更小的，更专业的块。 无论您是否发现 ```柯里化``` 有用，我都取决于您，但是我认为这是一种非常有趣的技术，值得学习 ```柯里化``` 的基础知识。 🍛

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用可变参数表示接受零个或多个指定类型的值。 因此，这意味着您可以使用可变参数Int参数输入任意数量的整数。 创建可变参量非常简单，只需在类型之后添加三个点即可。让我们来看一下这些事情：

``` Swift
// function composition
func increment(_ x: Int) -> Int {
    return x + 1
}
let x = increment(increment(increment(increment(10))))
print(x)


// function currying
func decrement(_ x: Int) -> (Int) -> Int {
     return { $0 * x }
}
let y = decrement(10)(1)
print(y)


// this is a variadic function that accepts a block as a parameter
func variadic(_ blocks: (() -> Void)...) {
    for block in blocks {
        block()
    }
}

// it means you can pass as many parameters as you want...
variadic({ print("a") }, { print("b") }, { print("c") })

// lol, trailing closure syntax works with variadic block params.
variadic {
    print("d")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这几乎是 ```Swift``` 功能功能的快速介绍。 当然，您可以添加更多参数（但仅允许使用一个可变参数），使用泛型等等，但在深入探讨之前，让我们稍等一下。 🏊‍♂️

## ***高阶函数***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果至少满足以下规则之一，则该函数为高阶函数：

+ 将一个或多个函数作为参数
+ 返回一个函数作为其结果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;换句话说，甚至在 ```Swift``` 中：

``` Swift
// a function that takes another function as a parameter
func transform(value: Int, _ transformation: (Int) -> Int) -> Int {
    return transformation(value)
}
let x = transform(value: 10) { value -> Int in
    return value * 2
}
print(x)

// a function that returns another function
func increase(withMultiplication shouldMultiply: Bool) -> (Int, Int) -> Int {
    func add(_ x: Int, _ y: Int) -> Int { return x + y }
    func multiply(_ x: Int, _ y: Int) -> Int { return x * y }
    return shouldMultiply ? multiply : add
}

let y = increase(withMultiplication: true)(10, 10)
print(y)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，正如您所看到的，它不像魔术，我们只是在传递函数。 乍一看，语法似乎很复杂，但是请相信我，这并不难。 如果遇到麻烦，请尝试为函数类型定义自己的类型别名，这将使代码更具可读性。 ```typealias VoidBlock = () -> Void ```👍

## ***一般函数***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您试图概括 ```高阶函数``` ，就会出现真正的问题。 在涉及 ```泛型``` 的情况下，语法看起来有些混乱。  ```Gererics（又称参数多态性）``` 使我们可以抽象出常规类型。 因此，例如：

``` Swift
// this only works for integers
func chooseInt(_ x: Int, or y: Int) -> Int {
    return Bool.random() ? x : y
}

// whoa, this is a generic function
func choose<T>(_ x: T, or y: T) -> T {
    return Bool.random() ? x : y
}

let x = chooseInt(1, or: 2)
print(x) // 1 or 2, but who knows this for sure

let y = choose("heads", or: "tails")
print(y) // maybe heads or maybe tails
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的示例中，我们抽象了带有泛型T类型的整数类型，该类型可以是任何类型。 如果我们以字符串作为第一个参数调用泛型函数，则所有剩余的T类型都将用作字符串。 这有意义吗？ 如果是，那么恭喜您，现在您知道什么是通用函数。 🎊

## ***容器和箱子📦***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从一个通用框开始。 您可以将任何值放入盒子中（就像您在现实生活中使用的普通纸箱一样），您始终可以打开盒子并使用 ```value属性``` 直接从内部获取值。

``` Swift
struct Box<T> {

    let value: T

    init(_ value: T) {
        self.value = value
    }
}

let x = Box<Int>(360)
print(x.value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，继续讲一些理论，但是我保证我会做的很简短，因为已经用简单的 [***```解释了函子，代名词和单子```***](http://www.russbishop.net/monoids-monads-and-functors "") 。 我将尽力使它变得更加简单。 😉

### ***Functors***

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函子是可以调用 ```map``` 的容器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接受挑战！ 让我们用 box 类型做一个函子，但是映射到底是什么呢？ 好吧，它基本上将一个值转换为另一个值。 您可以提供自己的转换方法，在该方法中，您将接收原始值作为参数，并且必须以相同或不同的类型返回“新”值。 编码时间！

``` Swift
extension Box {
    func map<U>(_ transformation: (T) -> U) -> Box<U> {
        return Box<U>(transformation(self.value))
    }
}

let x = Box<Int>(360)
let y = x.map { "\($0) degrees" }
print(y.value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此 ```map``` 只是一个通用的 ```高阶函数``` ！ 只是一个 ```高阶函数``` ...🤔只是一个函数传递给另一个函数。 哦，这是唯一可行的，因为 ```Swift``` 支持 ```first-class``` 的函数！ 现在您懂了！ 没什么神奇的，只是功能！

### ***单子***

>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Monad``` 是可以调用 ```flatMap``` 的容器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这很容易。  ```flatMap``` 是一种函数，可以转换值，然后将其重新包装为原始容器类型。 就像地图一样，但是您必须在转换函数中提供容器。 我将向您展示实现：

``` Swift
extension Box {
    func flatMap<U>(_ transformation: (T) -> Box<U>) -> Box<U> {
        return transformation(self.value)
    }
}

let x = Box<Int>(360)
let y = x.flatMap { Box<String>("\($0) degrees") }
print(y.value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您准备好迎接更复杂的事情了吗？ 😅

### ***应用程式***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [***```Applicatives```***](https://kandelvijaya.com/2018/03/25/functorapplicativemonad/#orgff1f53e "") 可让您将转换功能放入容器中。 因此，只有在可以将转换函数应用到包装的值中之后，才必须首先包装转换函数。 这意味着您还必须在转换之前 ```“取消装箱”``` 值。 解释事情是一项艰巨的工作，让我在Swift中尝试一下：

``` Swift
extension Box {
    func apply<U>(_ transformation: Box<(T) -> U>) -> Box<U> {
        return Box<U>(transformation.value(self.value))
    }
}

let x = Box<Int>(360)

let transformation = Box<((Int) -> String)>({ x -> String in
    return "\(x) degrees"
})

let y = x.apply(transformation)
print(y.value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如您所见，这一切都取决于容器，因此，如果您想使用一个看上去有点不同的 ```apply函数``` 扩展 ```Optional枚举``` 。 容器化很难！ 🤪

快速回顾：

>Container = M Functor = map(f: T -> U) -> M Monad = flatMap(f: T -> M) -> M Applicative = apply(f: M U)>) -> M

### ***更高种类的类型***

> 其他高阶类型的想法是使多态函数成为first-class

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，这尚未在 ```Swift编程语言``` 中实现，并且不会成为 ```swift 5发行版 ```的一部分，但是您可以通过一些技巧在 Swift中 模拟 [***```HKT功能```***](https://stackoverflow.com/questions/52905485/how-to-declare-protocol-for-hkt-in-swift "") 。 老实说，我真的不想现在再谈论更高种类的类型，因为如果您想拥有更多类似的内容，这可能是下一章功能性编程教程中的核心话题。 😉

### ***Futures***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们谈谈 ```Futures``` 。 根据定义，它们是对尚未计算值的只读引用。 换句话说：```future``` 是一个尚不存在的结果的占位符对象。 对于异步编程，这可能超级有用。 您是否听说过回调地狱？ 😈

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```future``` 基本上是一个通用的 ```result wrapper``` ，结合了回调和一些额外的状态管理。 ```Futures``` 既是函子又是单子，这意味着您通常可以在其上同时调用 ```map``` 和 ```flatMap``` ，但是由于 ```Futures``` 的只读性质，您通常必须做出 [***```promise```***](https://stackoverflow.com/questions/14541975/whats-the-difference-between-a-future-and-a-promise "") 才能创建新的 ```Future对象``` 。 您可以在 ```Swift-NIO``` 中找到一个非常不错的实现。 😎

### ***Promises***

> 一个 ```Promises``` 是一个可写的单任务容器，它完成了 ```Futures``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，您必须做出 ```Promises``` 而不是 ```Futures``` ，因为 ```Futures``` 是按设计只读的。  ```Promises``` 是可以完成未来的唯一对象（通常只有一次）。 我们可以说，将来的结果将始终由其他人设置（私有结果变量），而 ```Promises``` （基础的 ```Futures``` ）将由您设置，因为它具有公共拒绝和解决方法。 🚧

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一些 ```promise``` 还实现了 ```future接口``` ，因此这意味着您可以在 ```promise``` 上直接调用 ```map``` ， ```flatMap``` （通常都称为简单的重载then方法）。 此外，您还可以捕获错误并使用 ```Promise``` 做更多伟大的事情，可以随时查看我简单的 ```Promise``` 实现或事实上的标准 [***```PromiseKit```***](https://github.com/mxcl/PromiseKit "") 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您准备好使用一些功能强大的 ```Swift代码``` 了吗？

</br>

# **Swift 5中的函数式编程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在该练习我们所学的知识了。 在本节中，我将介绍 ```Swift 5``` 中最受欢迎的函数方法，并向您展示一些最佳实践。

## ***map***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 中的 ```map函数``` 适用于所有 ```Sequence类型``` ，而 ```Swift 5``` 中全新的 ```Result类型``` 也具有 ```map函数``` ，因此您可以根据需要转换这些类型的值，在某些情况下，这非常好。 这里有一些例子：

``` Swift
// array
let numbers = Array(0...100)
numbers.map { $0 * 10 } // 0, 10, 20 ... 1000
numbers.map(String.init) // "0", "1", "2" ... "100"


// dictionary
let params: [String: Any] = [
    "sort": "name",
    "order": "desc",
    "limit": 20,
    "offset": 2,
]

// mapValues is basically map for the dictionary values
let queryItems = params.mapValues { "\($0)" }
                       .map(URLQueryItem.init)


// set
let fruits = Set<String>(arrayLiteral: "apple", "banana", "pear")
fruits.map { $0.capitalized }

// range
(0...100).map(String.init)
```

## ***flatMap***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```flatMap``` 方法在实现地图功能的大多数类型上也可用。 本质上， ```flatMap``` 做以下事情： 映射 和 ```flattens``` 。 这意味着您将获得扁平化的子数组数组。 让我告诉你它是如何工作的：

``` Swift
// flatMap
let groups = [
    "animals": ["🐔", "🦊", "🐰", "🦁"],
    "fruits": ["🍎", "🍉", "🍓", "🥝"]
]
let emojis = groups.flatMap { $0.value }
// "🐔", "🦊", "🐰", "🦁", "🍎", "🍉", "🍓", "🥝"
```

## ***compactMap***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么， [***```flatMap和compactMap有什么关系```***](http://www.xuebaonline.com/Swift%20CompactMap%20vs%20flatMap%EF%BC%9A%E5%B7%AE%E5%BC%82%E8%AF%B4%E6%98%8E/ "") 呢？ 过去， ```flatMap``` 可以用于从数组中删除可选元素，但是从 ```Swift 4.1``` 开始，有一个名为 ```compactMap``` 的新函数可以用于此目的。 在大多数情况下，编译器会警告您将 [***```flatMap 替换为 compactMap```***](http://www.xuebaonline.com/Swift%20%E7%94%A8%20compactMap%20%E6%9B%BF%E6%8D%A2%20flatMap/ "") 。

``` Swift
// compactMap
[1, nil, 3, nil, 5, 6].compactMap { $0 } // 1, 3, 5, 6

let possibleNumbers = ["1", "two", "3", "four", "five", "6"]
possibleNumbers.compactMap { Int($0) } //1, 3, 6
```

## ***reduce***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```reduce``` 方法是一个强大的工具。 它可以用于将集合中的所有元素合并为一个元素。 例如，您可以使用它来汇总元素，但是将元素与初始组件结合在一起也非常方便。

``` Swift
let sum = (0...100).reduce(0, +)
print(sum) //5050

let cats = ["🦁", "🐯", "🐱"]
cats.reduce("Cats: ") { sum, cat in "\(sum)\(cat)"} // Cats: 🦁🐯🐱


let basketballScores = [
    "team one": [2,2,3,2,3],
    "team two": [3,2,3,2,2],
]

let points = basketballScores.reduce(0) { sum, element in
    return sum + element.value.reduce(0, +)
}
print(points) // 24 (team one + team two scores together)
```

## ***filter***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以使用 ```filter方法``` 过滤 [***```sequences```***](https://medium.com/@JLHLonline/superpowered-sequences-a009ccc1ae43 "")  ，这很明显！ 您可以为每个元素定义一个条件块，如果条件为true，则给定元素将包含在结果中。 这就像循环遍历元素并挑选一些元素。 🤪


``` Swift
let evenNumbers = (0...100).filter { $0.isMultiple(of: 2) }
let oddNumbers = (0...100).filter { !evenNumbers.contains($0) }

let numbers = [
    "odd": oddNumbers,
    "even": evenNumbers,
]

let luckyThirteen = numbers
.filter { element in
    return element.key == "odd"
}
.mapValues { element in
    return element.filter { $0 == 13 }
}
```

## ***promises***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我喜欢 ```promises``` ，如果您不知道 ```promises``` 如何运作，也应该学习它们。 否则，您仍然可以使用 [***```Dispatch框架```***](http://www.xuebaonline.com/Swift%20Grand%20Central%20Dispatch%20%E6%B7%B1%E5%85%A5%E5%AE%9E%E8%B7%B5/ "") ，但我更喜欢 ```Promise``` ，因为使用 ```Promise框架``` 使传递变量更加容易。 正如我之前在事实上的标准中提到的是 ```PromiseKit``` ，但这对于我的口味来说有点太复杂了，我也更喜欢我的 ```promise方法``` 名称，如下所示：

``` Swift
Promise<String> { fulfill, reject in
    fulfill("Hello")
}
.thenMap { result in
    return result + " World!"
}
.then { result in
    return Promise<String>(value: result)
}
.tap { result in
    print("debug: \(result)")
}
.onSuccess(queue: .main) { result in
    print(result)
}
.onFailure { error in
    print(error.localizedDescription)
}
.always {
    print("done!")
}
```

</br>

# **下一步是什么？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在项目中尝试使用这些新的技能。
