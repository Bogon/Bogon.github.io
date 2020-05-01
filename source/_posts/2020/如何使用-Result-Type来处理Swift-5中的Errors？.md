---
title: 如何使用 Result Type来处理Swift 5中的Errors？
permalink: 如何使用 Result Type来处理Swift 5中的Errors？
copyright: ture
date: 2020-04-30 15:21:39
keywords: iOS,Swift,Result Type,Errors,tutorial
description: 如何使用 Result Type来处理Swift 5中的Errors？
tags:
    - [iOS]
    - [Swift]
    - [Result Type]
categories:
    - [iOS]
    - [Swift]
    - [Result Type]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从本教程中，你可以学习如何使用带有新 ```result type``` 的 ```do-try-catch``` 语法来处理 ```Swift``` 中的错误。

</br>

# **Swift中的错误处理**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自第一个 ```Swift``` 版本以来，处理错误的方式发生了很大变化。 第一个重大里程碑发生在 ```Swift 2``` 中， ```Apple``` 彻底改进了错误管理。 如今，你可以使用 ```do``` ， ```try``` ， ```catch``` ， ```throw``` ， ```throws``` ， ```rethrows``` 关键字来代替处理讨厌的 ```NSError指针``` ，因此这是该语言的一个受欢迎的补充。 现在，在 ```Swift 5``` 中，我们通过将 ```Result类型``` 作为内置泛型引入了另一个巨大的飞跃。 首先，让我向你展示 ```Swift编程语言``` 中所有错误处理的最佳实践，接下来，我将通过使用结果来处理错误，向你展示一些很棒的东西。 🚧



<!-- more -->


## ***错误指示器***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于简单的情况，你始终可以使用可选值来指示发生了一些不良情况。 而且， ```guard``` 声明在这种情况下也非常有用。

``` Swift
let zeroValue = Int("0")! // Int
let nilValue = Int("not a number") // Int?

guard let number = Int("6") else {
    fatalError("Ooops... this should always work, so we crash.")
}
print(number)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不太在意错误的根本类型，则可以使用这种方法，但是有时情况会变得更加复杂，因此你可能需要一些有关该问题的详细信息。 无论如何，你始终可以通过调用 ```fatalError方法``` 来停止执行，但是如果这样做，那么你的应用程序将崩溃。 💥

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停止执行过程还有其他几种方法，但这可能是一个独立的帖子的主题，因此这里只是可用方法的快速备忘单：

``` Swift
precondition(false, "ouch")
preconditionFailure("ouch")
assert(false, "ouch")
assertionFailure("ouch")
fatalError("ouch")
exit(-1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前提条件和断言之间的主要区别在于，断言仅在调试版本中起作用，而前提条件始终被评估（即使在发行版本中）。 如果条件再次失败，则这两种方法都会触发致命错误。 是错误的。 ⚠️

## ***通过使用Error协议抛出异常***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以通过简单地确认内置错误协议来定义自己的错误类型。 通常，大多数开发人员都使用枚举来定义不同的原因。 如果你符合 ```LocalizedError协议``` ，则还可以有一个自定义错误消息。 现在你可以抛出自定义错误了，如果你想引发类型错误，只需使用 ```throw关键字``` ，但是如果在函数中这样做，则必须使用 ```throws``` 将该函数标记为 ```throwing函数``` 关键字。 🤮

``` Swift
enum DivisionError: Error {
    case zeroDivisor
}

extension DivisionError: LocalizedError {
    public var errorDescription: String? {
        switch self {
        case .zeroDivisor:
            return "Division by zero is quite problematic. " +
                   "(https://en.wikipedia.org/wiki/Division_by_zero)"
        }
    }
}

func divide(_ x: Int, by y: Int) throws -> Int {
    guard y != 0 else {
        throw DivisionError.zeroDivisor
    }
    return x / y
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很好，因此上面的除法函数可以生成自定义错误消息。 如果除数为零，则会抛出 ```zeroDivision错误``` 情况。 现在，设想以下情形：你正在尝试从磁盘读取文件的内容。 可能存在与权限或文件存在等相关的多种错误。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重新抛出函数和方法可以使用 ```rethrows关键字``` 声明函数或方法，以表明仅当函数参数之一抛出错误时，它才会抛出错误。 这些功能和方法称为重新抛出函数和重新抛出方法。 抛出函数和方法必须至少具有一个抛出函数参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，所以 ```throwing函数``` 可以发出不同的错误类型，还可以传播所有参数错误，但是我们如何处理（或者我应该说：捕获）这些错误？

## ***do-try-catch语法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你只需要尝试执行一个 ```throwing函数``` 。 因此，不要相信 ```master``` ，肯定会有尝试的空间！ 开玩笑吧？ 😅

``` Swift
do {
    let number = try divide(10, by: 0)
    print(number)
}
catch let error as DivisionError {
    print("Division error handler block")
    print(error.localizedDescription)
}
catch {
    print("Generic error handler block")
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，语法非常简单，你有一个 ```do块``` ，你可以在其中尝试执行 ```throwing函数``` ，如果出现问题，则可以在不同的 ```catch块``` 中处理错误。 默认情况下，每个 ```catch块``` 内都有一个 ```error属性``` ，因此你不必手动定义一个。 但是，可以通过在 ```catch关键字``` 旁边使用 ```let error as MyType``` ```sytnax``` 强制转换特定错误类型的 ```catch块``` 。 因此，始终先尝试，不要只是做！ 🤪

## ***try, try? and try!之间的差异***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如前所述，你可以简单地尝试调用在 ```do-catch块``` 内引发错误的函数。 如果函数触发某种错误，则可以将错误处理逻辑放入 ```catch块``` 中。 这非常简单明了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，如果你不太在意潜在的错误，则可以使用 ```try？``` 将你的 ```throwing函数``` 结果简单地转换为可选结果。 使用这种方法，如果发生不好的情况，你将得到零结果，否则，将按预期返回常规值。 这是上面使用 ```try？``` 的示例：

``` Swift
guard let number = try? divide(10, by: 2) else {
    fatalError("This should work!")
}
print(number) // 5
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一种技术是通过使用 ```try!``` 来防止错误传播，但是你必须格外小心，因为如果 ```“尝试功能”``` 的执行失败，你的应用程序将崩溃。 因此，仅在绝对确定该函数不会引发错误时使用。 ⚠️

``` Swift
let number = try! divide(10, by: 2) // This will work for sure!
print(number)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些地方可以使用强制尝试，但在大多数情况下，应使用适当的错误处理程序在替代路径上。

> **```提示:```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift 5``` 中嵌套可选吗？ 值将被展平为单个可选值。  [***```SE-0230```***](https://github.com/apple/swift-evolution/blob/master/proposals/0230-flatten-optional-try.md "") 是已经实施的建议，可能会破坏一些现有的 ```Swift``` 代码。 

## ***Swift 错误也不例外***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift编译器``` 总是要求你捕获所有引发的错误，因此永远不会发生未处理错误的情况。 我不是在谈论空的 ```catch块``` ，而是在处理未处理的 ```throw函数``` ，因此，如果没有 ```do-catch``` 伙伴，你将无法尝试。 与例外相比，这是一个主要区别。 同样，当引发错误时，执行将仅退出当前作用域。 异常通常会释放堆栈，这可能导致内存泄漏，但是 ```Swift错误``` 并非如此。 👍

</br>

# 介绍 Result Type

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift 5``` 引入了期待已久的通用``` result type``` 。 这意味着错误处理可以更加简单，而无需添加你自己的结果实现。 让我通过使用 ```Result``` 向你展示我们之前的除法函数。

``` Swift
func divide(_ x: Int, by y: Int) -> Result<Int, DivisionError> {
    guard y != 0 else {
        return .failure(.zeroDivisor)
    }
    return .success(x / y)
}

let result = divide(10, by: 2)
switch result {
case .success(let number):
    print(number)
case .failure(let error):
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 中的 ```结果类型``` 基本上是具有 ```.success``` 和 ```.failure``` 情况的通用枚举。 如果调用成功，则可以传递通用值；如果调用失败，则可以传递错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的一个主要优点是结果返回的错误是 ```类型安全``` 的。  抛出函数 可以抛出任何类型的错误，但是在这里，你可以从实现中看到，如果发生不好的情况， ```DivisionError``` 将返回。 另一个好处是，即使没有默认情况，你也可以使用穷举开关块来 ```“遍历”``` 所有可能的错误情况。 这样编译器可以使你安全，例如。 如果要在枚举声明中引入新的错误类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，通过使用 ```Result类型``` ，很明显，我们可以获取 ```结果数据``` 或 ```强类型错误``` 。 不可能两者都获得，但是这比使用 ```throwing函数``` 更好吗？ 好吧，让我们散开吧！

``` Swift
func divide(_ x: Int, by y: Int, completion: ((() throws -> Int) -> Void)) {
    guard y != 0 else {
        completion { throw DivisionError.zeroDivisor }
        return
    }
    completion { return x / y }
}

divide(10, by: 0) { calculate in
    do {
        let number = try calculate()
        print(number)
    }
    catch {
        print(error.localizedDescription)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内在封闭！ 完成处理程序接受抛出函数，因此我们可以将抛出的错误传播到外部处理程序了！ 🤬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个选择是，我们完全消除了抛出错误，并因此使用了一个可选参数，但是在这种情况下，我们回到 ```square one``` 。 没有基础的错误类型。

``` Swift
func divide(_ x: Int, by y: Int, completion: (Int?) -> Void) {
    guard y != 0 else {
        return completion(nil)
    }
    completion(x / y)
}

divide(10, by: 0) { result in
    guard let number = result else {
        fatalError("nil")
    }
    print(number)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，我们到了这里，但是这次我们也将错误添加为 ```闭包参数``` 。 你应该注意，两个参数都必须是可选的。

``` Swift
func divide(_ x: Int, by y: Int, completion: (Int?, Error?) -> Void) {
    guard y != 0 else {
        return completion(nil, DivisionError.zeroDivisor)
    }
    completion(x / y, nil)
}

divide(10, by: 0) { result, error in
    guard error == nil else {
        fatalError(error!.localizedDescription)
    }
    guard let number = result else {
        fatalError("Empty result.")
    }
    print(number)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，让我们介绍一下结果，以便我们可以从之前的代码中消除可选参数。

``` Swift
func divide(_ x: Int, by y: Int, completion: (Result<Int, DivisionError>) -> Void) {
    guard y != 0 else {
        return completion(.failure(.zeroDivisor))
    }
    completion(.success(x / y))
}

divide(10, by: 0) { result in
    switch result {
    case .success(let number):
        print(number)
    case .failure(let error):
        print(error.localizedDescription)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;强类型错误，无可选。 通过使用 ```Result类型``` ，更好地处理 ```异步函数``` 中的错误。 如果你认为大多数应用程序都在进行某种形式的联网，并且结果通常是 ```JSON响应``` ，那么你已经必须使用可选参数（响应，数据，错误），并且你还有抛出 ```JSONDecoder``` 的方法...可以 等待新的API！ ❤️

## ***在Swift 5中使用Result类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经知道结果类型基本上是带有通用 ```.succes（T）``` 和 ```.failure（Error）``` 例的枚举，但是我想在这里向你展示更多。 例如，你可以使用以下抛出函数创建结果类型：

``` Swift
let result = Result {
    return try divide(10, by: 2)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也可以通过调用 ```get函数``` 来转换回结果值。

``` Swift
do {
    let number = try result.get()
    print(number)
}
catch {
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，还有用于转换成功值的 ```map``` ， ```flatMap``` ，如果你要转换失败，也可以使用 ```mapError``` 或 ```flatMapError``` 方法。 😎

``` Swift
let result = divide(10, by: 2) // Result<Int, DivisionError>
let mapSuccess = result.map { divide($0, by: 2) } // Result<Result<Int, DivisionError>, DivisionError>
let flatMapSuccess = result.flatMap { divide($0, by: 2) } // Result<Int, DivisionError>
let mapFailure = result.mapError { NSError(domain: $0.localizedDescription, code: 0, userInfo: nil) }
let flatMapFailure = result.flatMapError { .failure(NSError(domain: $0.localizedDescription, code: 0, userInfo: nil)) }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是 ```Swift 5``` 中的 ```Result类型``` 。正如你所看到的，直接在语言中内置通用实现非常强大。 现在我们有了结果，我只希望有更高种类的类型或 ```异步/等待``` 实现。 👍



