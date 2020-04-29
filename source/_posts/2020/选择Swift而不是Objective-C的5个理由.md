---
title: 选择Swift而不是Objective-C的5个理由
permalink: 选择Swift而不是Objective-C的5个理由
copyright: ture
date: 2020-04-29 18:56:05
keywords: iOS,Swift,架构,architecture,可重用,Objective-C
tags:
    - [iOS]
    - [Swift]
categories:
    - [iOS]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在进行 ```iOS开发``` 时，最大的问题之一是你应该使用 ```Objective-C``` 还是 ```Swift``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，编程语言的寿命比你预期的更长。 但是，开发人员无法继续使用过时的方法。 他们需要了解所有最新的发展和趋势，这有时意味着做出艰难的选择。 在进行 ```iOS开发``` 时，最大的问题之一是你应该使用 ```Objective-C``` 还是 ```Swift``` 。

</br>

# **语言历史**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天， ```Objective-C``` 是一种用于开发 ```iPhone应用程序``` 的语言。但是，这种语言创建于1980年代。该语言已获得 ```史蒂夫·乔布斯（Steve Jobs ）```的 ```NeXT Computer Inc.``` 的许可，用于开发 ```NeXTStep框架``` 。随着时间的流逝，它成为了 ```Apple``` 创造的许多标志性产品的基础。  ```Objective-C``` 基于两种语言： ```Smalltalk``` 和 ```C``` 。它使用来自 ```C语言``` 的语法进行非面向对象的操作，使用来自 ```Smalltalk``` 的语法进行面向对象的操作。  ```Objective-C``` 的主要优点之一是该语言不是新语言，并且开发人员已经对其进行了多年的测试。


<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 由苹果公司于2014年发布。据 ```蒂姆·库克（Tim Cook）``` 称，新语言在发布后一个月内被下载了超过1100万次。根据 ```TIOBE Index``` ， ```Swift``` 在2015年成为增长最快的语言。该语言是免费的，所有人均可使用，因此毫不奇怪，它在 ```iOS开发人员``` 中迅速流行。  ```Swift 5.0``` 于 2019年 发布。它具有一个稳定的二进制接口，可在包括 ```macOS``` ， ```tvOS``` 和 ```watchOS``` 在内的不同 ```Apple``` 平台上很好地运行。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Objective-C``` 基础框架是许多 ```Swift``` 功能的基础。 例如， ```Swift``` 数据桥接到 ```NSData``` 。 但是， ```Swift``` 还具有许多 ```Objective-C``` 所没有的独特功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift 5``` 发布后，其 ```核心库``` 已集成到 ```iOS``` ， ```macOS``` ， ```watchOS``` 和 ```tvOS版本``` 中。 因此，由于包含了库，因此为这些平台创建的应用现在可以较小。 稳定的应用程序二进制接口也使 ```Apple``` 可以跨平台提供支持。 但是， ```Apple``` 继续支持 ```Objective-C``` ，因此许多开发人员需要做出选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哪种语言对企业更具成本效益且更易于使用？ 这是选择 ```Swift``` 而不是 ```Objective-C``` 的一些充分理由。

</br>

# **Swift易于阅读**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Objective-C``` 要求你使用带有 ```“ @”``` 符号的关键字来制作 ```NSString``` 文字。 这样一来，计算机就可以将 ```NSString``` 对象与常规 ```C``` 中使用的元素区分开。鉴于 ```Swift``` 不是基于 ```C``` 的，因此你无需使用任何标记对象，因此 ```Swift``` 可以统一所有关键字。 这是用 ```Objective-C``` 和 ```Swift``` 编写的代码：

``` Objective-C
// Objective-C
const int count = 10;
double price = 23.55;

NSString *firstMessage = @"Swift is awesome. ";
NSString *secondMessage = @"What do you think?";
NSString *message = [NSString stringWithFormat: @"%@%@", firstMessage, secondMessage];

NSLog(message)
```

``` Swift
// Swift
let count = 10
var price = 23.55

let firstMessage = "Swift is awesome. "
let secondMessage = "What do you think?."
let message = firstMessage + secondMessage

print(message)
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 还摆脱了传统约定。 例如，你不需要在条件表达式中使用括号或在分行中使用分号。  ```Swift``` 使用标准方法，将列表和参数括在括号内，并用逗号分隔。 因此， ```Swift``` 是一种更具表现力的语言。 它更干净，并且简化了语法和语法。

</br>

# **Swift 是 互动的**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借助 ```Swift Playgrounds ```，开发人员可以快速测试其代码，而无需编译大块代码或创建完整的应用程序。 ```Playgrounds``` 上可以直观地呈现数据，以便程序员可以当场检查和更改其代码。 感谢最新的 ```Xcode IDE``` ，开发人员可以使用简单的编辑器进行实验，该编辑器包括带有图像，线条和最终视图的面板。

</br>

# **Swift更安全**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```Objective-C``` 时，如果调用带有未初始化指针变量的方法，则不会发生任何事情。 在这种情况下，表达式变为空运算。 尽管它不会崩溃，但它引起了许多错误，因为无操作会导致不可预测的行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 具有 ```静态类型系统``` 。 当程序员使用 ```nil``` 可选值时，它通过触发运行时崩溃来确保可预测的行为。 由于这种方法，错误修复过程变得更加容易，因为迅速迫使开发人员立即修复所有问题。 运行时崩溃在包含 ```nil``` 可选值的代码行上停止，因此可以更快地修复错误。

</br>

# **Swift更易于维护**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 ```C``` 不发展，那么 ```Objective-C``` 就不会发展。 程序员必须维护两个代码文件，以提高可执行应用程序开发的效率和构建时间。  ```Swift``` 不需要两个文件。  ```LLVM编译器``` 和 ```Xcode``` 可以在了解依赖关系的情况下自动执行增量构建。 因此，你可以忘记将实现文件与头文件分开的重复任务。  ```Swift``` 将实现文件 ```.m``` 和标头 ```.h``` 替换为单个代码文件``` -.swift``` 。 但是，它将仍然生成你可以在 ```Xcode``` 中看到的接口文件。

</br>

# **统一内存管理**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 支持跨 ```面向对象``` 和 ```过程``` 代码路径的 ```自动引用计数（ARC）``` 。 尽管 ```Objective-C``` 在面向对象的代码和 ```Cocoa API``` 中都支持 ```ARC``` ，但它仍然不适用于其他 ```API``` ，例如 ```Core Graphics``` 和过程 ```C代码``` 。 因此，程序员在使用低级 ```API``` 时负责处理内存管理。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 消除了 ```Objective-C``` 中常见的大量内存泄漏，使开发人员可以专注于开发新功能和核心应用逻辑。 在 ```Swift``` 中，即使使用较低级别的 ```API``` ， ```ARC``` 也可以跨面向对象和过程的代码工作。  ```Swift``` 使 ```Apple``` 能够解决高性能和自动内存管理的问题，从而提高了生产率。 此外，垃圾收集器不会清理未使用的内存，这在用户输入和响应式图形的情况下是非常重要的因素。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 ```Apple``` 仍然为 ```老派开发人员``` 提供``` Objective-C``` 支持，但是 ```Swift``` 提供了许多不可忽视的优势。 它更安全，所需的代码更少，并且更简单。  ```Swift``` 使程序员可以忘记与 ```Objective-C``` 中使用的过时方法相关的许多问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想要节省时间和金钱的开发人员应该选择 ```Swift``` 作为一种更有效的语言。
尽管编程语言的消亡速度很慢，但是可以期望 ```Swift``` 完全替代 ```C``` 来在 ```Apple``` 平台上进行编程。  ```Swift``` 不仅从 ```Objective-C``` 继承了许多有用的组件，而且还引入了一组新功能，这些功能允许开发人员编写更可靠的代码，从而使程序员可以避免进行大量重复性工作，而将精力集中在更全局的任务上。