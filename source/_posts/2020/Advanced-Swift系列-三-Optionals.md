---
title: 'Advanced Swift系列(三):  Optionals'
description: 'Advanced Swift系列(三):  Optionals'
permalink: 'Advanced Swift系列(三):  Optionals'
copyright: ture
date: 2020-05-05 18:40:00
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Optionals
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Optionals]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

# **Sentinel Values**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编程中一种非常常见的模式是具有可能会或可能不会返回值的操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你到达正在读取的文件末尾时，可能不返回值是预期的结果，如以下C代码片段所示：

``` Swift
int ch;
while ((ch = getchar()) != EOF) {
printf("Read character %c\n", ch); }
printf("Reached end-of-file\n");
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```EOF``` 只是 ```-1``` 的 ```#define``` 。 只要文件中有更多字符， ```getchar``` 返回它们。 但是，如果到达文件末尾，则 ```getchar``` 返回 ```-1``` 。 或者也许不返回任何值表示 ```“未找到”``` ，如下面的 ```C++``` 所示：

``` C++
auto vec = {1, 2, 3};
auto iterator = std::find(vec.begin(), vec.end(), someValue); 
if (iterator != vec.end()) {
    std::cout << "vec contains " << *iterator << std::endl; 
}
```


<!-- more -->


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，````vec.end()```` 是容器 ```“末尾一个”``` 的迭代器； 这是一个特殊的迭代器，你可以检查容器的末端，但绝对不要用它来访问值-类似于 ```Swift中``` 集合的 ```endIndex``` 。 函数使用它来指示容器中不存在这样的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者可能由于函数处理过程中出现问题而无法返回该值。 可能最臭名昭著的例子是空指针的例子。 这个看起来不错的 ```Java代码``` 很可能会抛出 ```NullPointerException``` ：

``` Swift
int i = Integer.getInteger("123")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碰巧 ```Integer.getInteger``` 不会将字符串解析为整数，而是获取名为 ```“123”``` 的系统属性的整数值。 此属性可能不存在，在这种情况下， ```getInteger``` 返回 ```null``` 。 然后，将 ```null``` 拆箱为 ```int``` 时， ```Java``` 会引发异常。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或在 ```Objective-C``` 中使用以下示例：

``` Swift
[[NSString alloc] initWithContentsOfURL:url encoding:NSUTF8StringEncoding error:&error];
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该初始化程序可能返回 nil ，在这种情况下（只有在这种情况下），才应该检查 错误指针 。如果初始化程序返回非 nil ，则不能保证错误指针有效。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以上所有示例中，该函数均返回一个特殊的 “魔术”值 ，以表示该函数尚未返回实际值。这样的魔术值称为 “前哨值” 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是这种方法是有问题的。返回的结果看起来和感觉像是真正的价值。 ```int -1``` 仍然是有效的整数，但是你永远都不想将其打印出来。 ```vec.end（）```是一个迭代器，但是如果你尝试使用它，结果是不确定的。每个人都喜欢在Java程序引发 ```NullPointerException``` 时看到 ```堆栈转储``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```Java``` 不同，```Objective-C``` 允许将消息发送为 ```nil``` 。只要运行时保证从消息到 ```nil``` 的返回值始终等于零，即对象返回类型为 ```nil``` ，数字类型为0，依此类推，这是 ```“安全的”``` 。如果邮件返回一个结构，则会将其所有成员初始化为零。考虑到这一点，请考虑以下片段以查找子字符串：

``` Swift
NSString *someString = ...
if ([someString rangeOfString:@"Swift"].location != NSNotFound) {
NSLog(@"Someone mentioned Swift!"); }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 ```someString``` 为 ```nil``` （无论是偶然还是有意）， ```rangeOfString：``` 消息将返回零的 ```NSRange``` 。 因此，其 ```.location``` 将为零，并且与 ```NSNotFound``` （定义为 ```NSIntegerMax``` ）的不等式比较将成功。 因此， ```if语句``` 的正文将在不应该执行的情况下执行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```空引用``` 引起了很多问题，以托尼·霍亚尔（Tony Hoare）（于1965年创建）为荣，称它们为“十亿美元的错误”：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当时，我正在设计第一个全面的类型系统，以面向对象的语言（ALGOL W）进行引用。 我的目标是确保对引用的所有使用都绝对安全，并进行检查由编译器自动执行。 但是我忍不住要插入空引用的诱惑，仅仅是因为它很容易实现。 这导致了无数的错误，漏洞和系统崩溃，在最近四十年中可能造成十亿美元的痛苦和破坏。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前哨值 的另一个问题是它们需要先验知识。 有时，社区中会广泛使用成语，例如 C++```结束迭代器``` 或 ```Objective-C``` 中的错误处理约定。 如果不存在此类规则，或者你不了解这些规则，则必须参考文档。 而且，该函数无法表明它不会失败。 如果调用返回一个指针，则该指针可能永远不会为零。 但是，除非阅读文档，否则无法说出任何内容，即使如此，该文档也可能是错误的。

# **用枚举替换前哨值**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，每个好的程序员都知道魔术数字是不好的。 大多数语言都支持某种枚举类型，这是表示类型的一组离散可能值的更安全方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 使用 ```“关联值”``` 的概念进一步枚举。 这些是枚举值，也可以具有与其关联的另一个值。 我们将在 ```“枚举”``` 一章中详细介绍枚举。 现在，仅需将 ```Optional``` 定义为枚举就足够了：

``` Swift
enum Optional<Wrapped> { 
    case none
    case some(Wrapped)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检索枚举的关联值的唯一方法是通过模式匹配-例如，在 ```switch``` 或 ```if case let``` 语句中。 与哨兵值不同，在不显式检查和拆包的情况下，你不能不小心使用嵌入在 ```Optional``` 中的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，代替返回哨兵值，而不是返回 ```find``` 的 ```Swift``` 等效项-称为 ```firstIndex（of :)``` -返回一个 ```Optional <Index>``` ，其实现与此类似：

``` Swift
extension Collection where Element: Equatable {
    func firstIndex(of element: Element) -> Optional<Index> { 
        var idx = startIndex
        while idx != endIndex {
        if self[idx] == element { 
            return .some(idx)
        }

        formIndex(after: &idx) }
        // Not found, return .none.
        return .none
    }
}
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为 ```可选参数``` 是 ```Swift``` 的基础，所以有很多语法支持整理一下： ```Optional<Index>``` 可以写成 ```Index``` 吗？ 可选参数符合 ```ExpressibleByNilLiteral``` ，因此你可以编写 ```nil``` 而不是 ```.none``` ； 和非可选值（例如idx）会在需要时自动“提升”为可选值，以便你可以编写 ```return idx``` 而不是 ```return .some（idx）```。
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语法糖可以有效掩饰 ```Optional类型``` 的真实性质。 值得记住的是，这没有什么不可思议的。 它只是一个普通的枚举，如果不存在，则可以自己定义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，用户无法在检查值是否有效之前错误地使用该值：

``` Swift
var array = ["one", "two", "three"]
let idx = array.firstIndex(of: "four")
// Compile-time error: remove(at:) takes an Int, not an Optional<Int>. array.remove(at: idx)
Instead, you’re forced to “unwrap” the optional in order to get at the index within, assuming you didn’t get none back:
var array = ["one", "two", "three"] 
    switch array.index(of: "four") { 
        case .some(let idx):
            array.remove(at: idx)
        case .none:
            break // Do nothing.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个 ```switch语句``` 写出了可选方法的枚举语法，包括在某些情况下解压缩关联的值。 这对安全性很有好处，但阅读或书写时却不太愉快。 更简洁的选择是使用？ 模式后缀语法以匹配一些可选值，并且可以使用 ```nil``` 文字不匹配任何值：

``` Swift
switch array.index(of: "four") {
    case let idx?: // Equivalent to .some(let idx)
        array.remove(at: idx) 
    case nil:
        break // Do nothing. 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这仍然很笨拙。 让我们看一下其他所有可以使你的可选处理简短明了的方法，具体取决于你的用例。


# **Optionals 技术之旅**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选语言还内置了许多额外的支持。 如果你已经写了一段时间的 ```Swift``` ，下面的一些示例可能看起来很简单，但是确保你对所有这些概念都非常了解非常重要，因为我们会在整本书中不断地使用它们。

## ***if let***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```if let``` 的可选绑定距离上面的 ```switch``` 语句仅一小步之遥。  ```if let语句检查可选值``` 是否为非nil，如果是，则解开可选值。  ```idx``` 的类型为 ```Int（非可选）``` ，并且 ```idx``` 仅在 ```if let语句``` 的范围内可用：

``` Swift
var array = ["one", "two", "three", "four"] 
if let idx = array.index(of: "four") {
    array.remove(at: idx)
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以将布尔子句与 ```if``` 一起使用。 因此，假设你不想删除该元素（如果它恰巧是数组中的第一个元素）：

``` Swift
if let idx = array.index(of: "four"), idx != array.startIndex { 
        array.remove(at: idx)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以在同一条 **if语句中绑定多个值** 。 更重要的是，以后的条目可以依靠以前的条目成功解包。 当你要多次调用返回自身可选值的函数时，这非常有用。 例如，如果你的URL格式错误或数据不是图像，则以下示例中的 ```URL``` 和 ```UIImage初始化``` 程序均“失败”，即它们可以返回 ```nil``` 。 数据初始值设定项可能会引发错误，并且通过使用 ```try?``` ，我们也可以将其转换为可选项。 这三个都可以链接在一起，如下所示：

``` Swift
let urlString = "https://www.objc.io/logo.png" 
if let url = URL(string: urlString), let data = try? Data(contentsOf: url), let image = UIImage(data: data) {
    let view = UIImageView(image: image)
    PlaygroundPage.current.liveView = view 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以在同一 ```if语句``` 中 ```自由混合``` 和 ```匹配可选``` 绑定， ```布尔子句``` 和 ```case let``` 绑定。

## ***while let***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```if let语句``` 位于 ```while let``` 中非常相似-一个循环，当其条件返回 ```nil``` 时终止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库的 ```readLine函数``` 从标准输入返回一个可选字符串。 一旦输入结束，它将返回 ```nil``` 。 因此，要实现与 ```Unix cat命令``` 非常基本的等效功能，请在 ```let``` 中使用：

``` Swift
while let line = readLine() { 
    print(line)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像在 ```if let语句``` 中一样，你始终可以将 ```Boolean子句``` 添加到可选绑定中。 因此，如果要在 EOF 或空白行上终止此循环，请添加一个子句以检测空字符串。 请注意，一旦条件为假，循环就会终止（你可能会错误地认为布尔条件的作用类似于过滤器）：

``` Swift
while let line = readLine(), !line.isEmpty { 
    print(line)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们将在 ```“Collection协议”``` 一章中看到的那样， ```seq循环``` 中的 ```for x``` 要求 ```seq符合Sequence``` 。 该协议提供了一个 ```makeIterator方法``` ，该方法返回一个迭代器，该迭代器又具有下一个方法。  ```next``` 返回值，直到序列用尽，然后返回 ```nil``` 。 而 ```let``` 是理想的选择：

``` Swift
let array = [1, 2, 3]
var iterator = array.makeIterator() 
while let i = iterator.next() {
    print(i, terminator: " ")
} // 1 2 3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，鉴于 ```for循环``` 实际上只是 ```while循环``` ，因此即使它们具有 ```where关键字``` ，它们也支持布尔子句也就不足为奇了：

``` Swift
for i in 0..<10  where i%2==0 { 
    print(i, terminator: " ") 
} // 0 2 4 6 8
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，上面的 ```where子句``` 与 ```while循环``` 中的 ```Boolean子句``` 不同。 在 ```while循环``` 中，一旦值为 ```false``` ，迭代就会停止，而在 ```for循环``` 中，其作用类似于 ```filter``` 。 如果我们使用 ```while``` 重写上面的 ```for循环``` ，则看起来像这样：

``` Swift
var iterator2 = (0..<10).makeIterator() 
while let i = iterator2.next() {
    guard i%2==0 else {
        continue
    }
    print(i) 
}
```

## ***双嵌套可选***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是时候指出可选包装的类型本身可以是可选的，这导致嵌套在可选对象内部的可选对象。 要了解为什么这不仅是一种奇怪的情况，还是编译器应自动合并的原因，请假设你有一个数字字符串数组，你希望将其转换为整数。 你可以通过地图运行它们以进行转换：

``` Swift
let stringNumbers = ["1", "2", "three"]
let maybeInts = stringNumbers.map { Int($0) } // [Optional(1), Optional(2), nil]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你有了一个 ```Optional<Int>``` 数组-即Int？ —因为 ```Int.init（String）``` 可能失败，因为字符串可能不包含有效的整数。 在这里，最后一个条目将为 ```nil``` ，因为“ 3”不是整数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当使用 ```for遍历``` 数组时，你应该正确地希望每个元素都是一个可选的整数，因为也许 ```Ints``` 包含以下内容：

``` Swift
for maybeInt in maybeInts { 
    // maybeInt is an Int?
    // Two numbers and a `nil`.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在考虑到 ```for ... in``` 的实现是上述 ```while循环``` 技术的简写。 从 ```iterator.next（）``` 返回的内容将是 ```Optional<Optional<Int>``` 或 ```Int？```  —因为 ```next``` 将序列中的每个元素都包装在可选元素内。  ```while``` 让我们将其解包以检查它是否为 ```nil``` ，而当它为非 ```nil``` 时，绑定解开的值并运行主体：

``` Swift
var iterator = maybeInts.makeIterator() 
while let maybeInt = iterator.next() {
    print(maybeInt, terminator: " ") 
}
// Optional(1) Optional(2) nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当循环到达最后一个元素-“三”中的nil时， ```next``` 返回的是一个非nil值： ```.some（nil）``` 。 它将解包此内容，并将其中的内容（零）绑定到也许 ```Int``` 。 没有嵌套的可选选项，这将是不可能的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，如果你只想使用 ```for循环``` 非零值，则可以使用大小写模式匹配：

``` Swift
for case let i? in maybeInts { 
        // i will be an Int, not an Int? print(i, terminator: " ")
}
// 1 2

// Or only the nil values:
for case nil in maybeInts {
    // Will run once for each nil. print("No value")
}
// No value
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使用 ```x？```  的“模式”，仅匹配 ```非nil值``` 。 这是 ```.some（x）``` 的简写，因此循环可以这样写：

``` Swift
letj=5 
if case0..<10=j {
    print("\(j) within range") 
} // 5 within range
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在 ```“枚举”``` 一章中深入讨论 ```模式匹配``` 。

## ***if var and while var***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以让 ````var```` 与 ```if``` ， ```while和for``` 一起使用，而不是让。 这使你可以在语句主体内对变量进行突变：

``` Swift
let number = "1"
if var i = Int(number) {
    i+=1
    print(i) 
} // 2
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是请注意，我将是本地副本； 对我的任何更改都不会影响原始可选内容中的值。 可选值是值类型，展开它们会在其中复制值。

## ***Scoping of Unwrapped Optionals***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，限制只能访问其已定义的if块中的 ```Unwrapped变量``` 。 例如，对数组采用 ```first属性``` ，该属性返回第一个元素的可选值，或者在数组为空时返回nil。 这是以下常见代码的便捷缩写：

``` Swift
let array = [1,2,3] 
if !array.isEmpty { 
    print(array[0])
}
// Outside the block, the compiler can't guarantee that array[0] is valid.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最好使用 ```first属性``` ，因为你必须解开可选参数才能使用它-你不能无意间忘记：

``` Swift
if let firstElement = array.first { 
    print(firstElement)
}
// Outside the block, you can't use firstElement.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解开的值仅在 ```if let块``` 内部可用。 很好，但是如果if语句的目的是在不满足某些条件时尽早退出函数，这是不切实际的。 提早退出可以避免烦人的嵌套或稍后在函数中重复检查。 你可能会编写以下内容：

``` Swift
func doStuff(withArray a: [Int]) { 
    if a.isEmpty {
        return
    }
// Now use a[0] or a.first! safely.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里， ```if let``` 绑定将不起作用，因为在 ```if块``` 之后，绑定变量将不在范围内。 但是，你仍然可以确保该数组将至少包含一个元素，因此即使语法仍然没有吸引力，强制展开第一个元素也是安全的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在绑定的范围之外使用未包装的可选选项的一种方法是依靠 ```Swift的延迟初始化``` 功能。 考虑下面的示例，该示例从 ```URL和NSString``` 重新实现 ```pathExtension属性``` 的一部分：

``` Swift
extension String {
    var fileExtension: String? {
        let period: String.Index
        if let idx = lastIndex(of: ".") {
            period = idx } else {
            return nil
        }
        let extensionStart = index(after: period) 
        return String(self[extensionStart...])
    } 
}
"hello.txt".fileExtension // Optional("txt")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器检查你的代码，以确认只有两种可能的路径：一种在该路径中函数早返回，而另一种在路径中正确初始化。 周期不能为零（这不是可选的）或未初始化（Swift不允许你使用尚未初始化的变量）。 因此，在if语句之后，可以编写代码，而无需完全担心可选项。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，前两个示例非常丑陋。 确实，我们需要的是某种不让步的方法，而这正是 ```guard``` 所允许的：

``` Swift
func doStuff(withArray a: [Int]) {
    guard let firstElement = a.first else {
        return
    }
    // firstElement is unwrapped here.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二个例子变得更加清晰：

``` Swift
extension String {
    var fileExtension: String? {
        guard let period = lastIndex(of: ".") else { 
            return nil
        }
        let extensionStart = index(after: period) 
        return String(self[extensionStart...])
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任何内容都可以放在 ```else子句``` 中，包括多个语句，就像 ```if ... else``` 。 唯一的要求是 ```else块``` 必须离开当前范围。 这可能意味着返回，引发错误或调用 ```fatalError（``` 或任何其他返回Never的函数）。 如果 ```guard``` 处于循环状态，则也可以允许中断或继续。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回类型为 ```Never的函数``` 不会向编译器发出永不返回的信号。有两种常见的函数可以执行此操作：中止程序的函数，例如 ```fatalError``` ；以及在程序整个生命周期内运行的程序，例如 ```dispatchMain``` 。编译器使用此信息进行控制流诊断。例如， ```guard语句``` 的 ```else分支``` 必须退出当前作用域或调用这些永不返回的函数之一。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从来没有所谓的 **```uninhabited type```** 。此类型没有有效值，因此无法构造。从不与 ```Result``` 结合使用
在一般情况下。例如，如果通用 ```API``` 期望值的类型为 ```Result<A，E>```（ 其中A和E是通用参数），则可以传入 ```Result<...，Never>``` 以表示此具体 ```Result实例``` 永远不会包含失败，因为无法构造这样的值。而且，声明为返回无人居住类型的函数永远不会正常返回。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中，无人居住的类型被实现为没有大小写的枚举：

``` Swift
  public enum Never { }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除非你为 ```fatalError``` 或 ```preconditionFailure``` 编写包装，否则通常不需要定义自己的永不返回的函数。 一个有趣的用例是在编写新代码时：假设你正在处理复杂的 ```switch语句``` ，逐渐填充所有用例，并且编译器用错误消息轰炸你，指出空用例标签或缺少返回值，而你要做的只是专注于你正在处理的一种情况。 在这种情况下，对 f```atalError（）``` 的一些精心放置的调用可能会产生奇迹，使编译器静音。 考虑编写一个名为 ```unimplemented（）``` 的函数，以便更好地传达这些调用的临时性：

``` Swift
func unimplemented() -> Never {
fatalError("This code path is not implemented yet.")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```swift``` 精心区分了不同的 ```“nothingness”``` 。 除了 ```nil``` 和 ```Never``` ，还有 ```Void``` ，这是另一种写空元组的方法：

``` Swift
public typealias Void = ()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Void``` 或 ```（）``` 最常见的用法是不返回任何内容的函数类型，但它也具有其他应用程序。 例如，考虑一个反应式编程框架，该框架以 ```Observable<T>类型 ```对事件流进行建模，其中 T 描述了所发射事件的有效负载类型。 文本字段对象可能会提供一个 ```Observable<String> ```，它会在用户每次编辑文本时触发一个事件。 类似地，当用户点击按钮时，按钮对象发送事件，但没有其他要发送的有效负载-其事件流的类型应为 ```Observable<（）>``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如戴维·史密斯（David Smith）所说， ```Swift``` 在 **“缺物”（nil）** ， **“无物”（void）** 和 **“不可能的事物”（Never）** 之间进行了仔细的区分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像 ```if``` 一样， ```guard``` 不仅限于绑定。  ```Guard``` 可以采取任何可能在常规 ```if语句``` 中找到的条件，因此可以使用它重写空数组示例：

``` Swift
func doStuff2(withArray a: [Int]) { 
    guard !a.isEmpty else { 
        return 
    } // Now use a[0] or a.first! safely.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与可选的 ```binding case``` 不同，此 ```guard``` 不是一个大胜利-实际上，它比原始版本更为冗长。 但是仍然值得考虑在任何提早退出的情况下进行此操作。 对于一个，有时（尽管不是这种情况），布尔条件的求逆可以使事情变得更清楚。 此外，当阅读代码。 它说：**“只有在满足以下条件时，我们才会继续。”** 最后， ```Swift编译器``` 将检查你是否确实要退出当前作用域，如果不存在，则会引发编译错误。 因此，即使在 ```if可行的情况下``` ，我们也建议你 **使用防护功能** 。

## ***Optional Chaining***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Objective-C``` 中，向 ```nil``` 发送消息是无操作的。 在 ```Swift``` 中，可以通过 ```“Optional Chaining”``` 实现相同的效果：

``` Swift
delegate?.callback()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是与 ```Objective-C``` 不同， ```Swift编译器``` 将迫使你确认接收方可能为 ```nil``` 。 问号 向读者明确表示该方法可能不会被调用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你通过可选链接调用的方法返回结果时，该结果也将是可选的。 考虑以下代码，以了解为什么一定要这样：

``` Swift
let str: String? = "Never say never"
// We want upper to be the uppercase string. let upper: String
if str!=nil {
    upper = str!.uppercased() 
} else {
    // No reasonable action to take at this point.
    fatalError("No idea what to do now...") 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 ```str``` 不为 ```nil``` ，则 ```upper``` 将具有所需的值。 但是，如果 ```str``` 为 ```nil``` ，则不能将 ```upper``` 设置为一个值。 因此，在可选链接的情况下， ```upper2``` 必须是可选的，以便考虑 ```str``` 可能为零的可能性：

``` Swift
let upper2 = str?.uppercased() // Optional("NEVER SAY NEVER")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义，你可以在可选值上链接调用：

``` Swift
let lower = str?.uppercased().lowercased() // Optional("never say never")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这看起来可能有点令人惊讶。 我们不是只是说可选链接的结果是可选的吗？ 那为什么不需要一个 ```？``` 。 在 ```uppercased（）``` 之后？ 这是因为可选链接是 ```“flattening”``` 操作。 如果 ```str？.uppercased（）``` 返回了可选内容，而你在其上调用了 ```？.lowercased（）``` ，那么从逻辑上讲，你将获得可选的可选内容。 但是，你只需要一个常规的可选内容，因此我们编写第二个链接调用而没有问号，以表示已捕获可选内容的事实。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，如果大写的方法本身返回了一个可选的，那么你将需要添加第二个 ```？``` 表示你正在链接该可选内容。 例如，让我们使用名为 ```half的计算属性扩展Int类型``` 。 此属性返回将整数除以二的结果，但前提是该数字足够大以被除。 当数字小于2时，它返回 ```nil``` ：

``` Swift
extension Int { 
    var half: Int? {
        guard self<-1||self>1 else {
            return nil
        }
        return self / 2 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为调用 ```half``` 返回一个可选结果，所以我们需要继续输入 ```？``` 反复调用时。 毕竟，在每一步，该函数都可能返回 ```nil``` ：

``` Swift
20.half?.half?.half // Optional(2)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，编译器仍然足够聪明，可以为我们简化结果类型。 上面的表达式的类型是 ```Int？```  而不是你可能期望的 ```Int???``` 。 后者将为你提供更多信息-即，链的哪一部分发生了故障-但也会使处理结果变得更加麻烦，从而破坏了可选链的便利性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选链接也适用于下标，例如：

``` Swift
let dictOfArrays = ["nine": [0, 1, 2, 3]] 
dictOfArrays["nine"]?[3] // Optional(3)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，你可以使用可选链接来调用可选功能：

``` Swift
let dictOfFunctions: [String: (Int, Int) -> Int] = [ "add": (+),
"subtract": (-)
]
dictOfFunctions["add"]?(1, 1) // Optional(2)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在类通常存储回调函数以便在事件发生时通知其所有者的典型回调情况下，这很方便。 考虑一个 ```TextField类``` ：

``` Swift
class TextField {
    private(set) var text = ""
    var didChange: ((String) -> ())?
    // Event handler called by the framework.
    func textDidChange(newText: String) { 
        text = newText
        // Trigger callback if non-nil. didChange?(text)
    } 
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```didChange属性``` 存储一个 回调函数 ，每次用户编辑文本时，该文本字段都会调用该函数。 由于文本字段的所有者不必注册回调，因此该属性为可选； 其初始值为nil。 当需要调用回调的时候（在上面的 ```textDidChange``` 方法中），可选链接使我们能够以非常紧凑的方式进行调用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你甚至可以通过可选链进行分配。 假设你有一个可选变量，并且如果非零，则希望更新其属性之一：

``` Swift
struct Person { 
    var name: String 
    var age: Int
}

var optionalLisa: Person? = Person(name: "Lisa Simpson", age: 8) // Increment age if non-nil.

if optionalLisa != nil {
    optionalLisa!.age += 1 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是相当冗长和丑陋的。 请注意，在这种情况下，你不能使用可选绑定。 由于 ```Person``` 是一个结构，因此是一个值类型，因此绑定变量是原始值的本地副本； 改变前者不会改变后者：

``` Swift
if var lisa = optionalLisa {
    // Mutating lisa doesn't change optionalLisa. 
    lisa.age += 1
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 ```Person``` 是一个 ```class``` ，这将起作用。 我们将在 ```“结构和类”``` 一章中进一步讨论 值和引用类型 之间的区别。 无论如何，它仍然太冗长。 相反，你可以分配给链接的可选值，如果它不是nil，分配将通过：

``` Swift
optionalLisa?.age += 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此功能一个奇怪的（但合乎逻辑的）边缘情况是它可以直接分配给可选值。 这是完全正确的：

``` Swift
var a:Int?=5 
a?=10
a // Optional(10)

var b: Int? = nil 
b?=10
b // nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意 ```a = 10``` 和 ```a``` 之间的细微差别吗 ```？=10``` 。前者无条件分配新值，而后者仅在 ```a``` 的值在赋值前为**非nil时才执行赋值**。

# **nil-Coalescing Operator**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，你想打开一个可选的包装并将 ```nil``` 替换为一些默认值。 这是 ```nil-coalescing``` 运算符的工作：

``` Swift
let stringteger = "1"
let number = Int(stringteger) ?? 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果字符串可以转换为整数，则数字将是该整数，并且不会被包装。 如果不是，则 ```Int.init``` 返回 ```nil``` ，将替换默认值0。 所以 ```lhs ?? rhs``` 类似于代码 ```lhs！= nil？ h！：rhs``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你使用另一种语言来学习 ```Swift``` ，你可能会认为 ```nil-coalescing``` 运算符与三元运算符非常相似 ```（a？b：c）``` 。 例如，要从可能为空的数组中获取第一个元素，可以编写以下代码：

``` Swift
let array = [1,2,3] !array.isEmpty ? array[0] : 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ```Swift数组``` 提供的第一个属性为 ```nil``` （如果该数组为空），因此你可以使用 ```nil-coalescing运算符``` ：

``` Swift
array.first ?? 0 // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这更加清晰明了-意图（抓住数组中的第一个元素）在前面，默认设置在末尾，并带有 ```??``` 。 表示 “这是默认值” 。 将其与三元运算符版本进行比较，三元运算符版本首先以检查开始，之后是值，最后是默认值。 而且检查被否定了（替代方法是将默认值放在中间，将实际值放在最后）。 而且，与可选选项一样，我们无法忘记 first是可选的 ，并且在没有检查的情况下意外地使用了它，因为如果你尝试这样做，编译器将会阻止你。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要你发现要检查自己的语句以确保该语句有效，便是一个好兆头，可选选项将是一个更好的解决方案。 假设你要检查的是数组范围内的值，而不是一个空数组：

``` Swift
array.count > 5 ? array[5] : 0 // 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与“第一个和最后一个”不同，按索引从数组中取出元素不会返回可选的。 但是很容易 ```扩展Array``` 以添加此功能：

``` Swift
extension Array {
    subscript(guarded idx: Int) -> Element? {
        guard (startIndex..<endIndex).contains(idx) else { 
            return nil
        }
        return self[idx] 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你可以编写以下内容：

``` Swift
array[guarded: 5] ?? 0 // 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Coalescing``` 也可以链接在一起-因此，如果你有多个可能的可选选项，并且要选择第一个非nil值，可以按顺序编写它们：

``` Swift
let i: Int? = nil
let j: Int? = nil letk:Int?=42
i ?? j ?? k ?? 0 // 42
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，如果你遇到双重嵌套的可选内容，并且想使用 ```??``` ， 运算符，你必须小心区分  ```b ?? c（链接）``` 和 ```（a ?? b）?? c``` （展开内层然后再展开外层）：

``` Swift
let s1: String?? = nil
(s1 ?? "inner") ?? "outer" // inner let s2: String?? = .some(nil)
(s2 ?? "inner") ?? "outer" // outer
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想到了 ```??```  运算符类似于 ```“or”语句``` ，你可以将带有多个子句的 ```if let``` 视为 ```“and”``` 语句：

``` Swift
if let n = i, let m = j { }
// similar to if i != nil && j != nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像 ```|| 运算符``` ， ```?? 操作员``` 使用短路：当我们写 ```l ?? r``` ，仅当左侧为零时才评估运算符的右侧。 之所以可行，是因为运算符的函数声明将 ```@autoclosure``` 用作其第二个参数。 我们将在 ```“功能”``` 一章中详细讨论 ```autoclosures``` 的工作原理。

# **在字符串插值中使用Optionals**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能已经注意到，当你打印可选值或在字符串插值表达式中使用一个值时，编译器会发出警告：

``` Swift
let bodyTemperature: Double? = 37.0 let bloodGlucose: Double? = nil
print(bodyTemperature) // Optional(37.0)
// Warning: Expression implicitly coerced from 'Double?' to Any. 
print("Blood glucose level: \(bloodGlucose)") // Blood glucose level: nil 
// Warning: String interpolation produces a debug description
// for an optional value; did you mean to make this explicit?
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这通常很有用，因为 `“ Optional（...）”` 或 `“ nil”` 很容易意外地潜入显示给用户的文本中。永远不要在面向用户的字符串中直接使用可选选项，并且**始终先将其解包**。由于所有类型都可以在字符串插值中使用（包括 `Optional` ），因此编译器无法将其设置为硬错误-警告实际上是它可以做的最好的事情。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，你可能希望在字符串插值中使用可选参数（例如，记录其值以进行调试），在这种情况下，警告可能会变得很烦人。编译器提供了几个修复程序来消除警告：用 ```as Any添加显式强制转换``` ，用 **```!```** 强制解包该值。 （如果确定不能为nil），则将其包装在String中（描述：），或使用 ```nil-coalescing运算符``` 提供默认值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后者通常是一种快速而美观的解决方案，但它有一个缺点：``??`` 两侧的类型都没有 ``？``表达式必须匹配，因此你为 `Double` 提供的默认值？必须为 ```Double类型``` 。由于最终目的是将表达式转换为字符串，因此，如果你可以首先提供字符串作为默认值，那将很方便。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift` 的 `？运算符` 不支持这种类型的不匹配-毕竟，如果双方没有相同的基本类型，表达式的类型将是什么？但是添加你自己的运算符很容易，尤其是在字符串插值中使用可选参数的目的。命名为 `???` ：

``` Swift
infix operator ???: NilCoalescingPrecedence

public func ???<T>(optional: T?, defaultValue: @autoclosure () -> String) -> String
{
    switch optional {
        case let value?: 
            return String(describing: value) 
        case nil: 
            return defaultValue()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这需要任何可选的 `T` 吗？ 左侧是一个字符串，右侧是一个字符串。 如果可选参数为 ```非nil``` ，我们将其解包并返回其字符串描述。 否则，我们返回默认值传入的字符串。 @autoclosure 批注确保仅在需要时才评估第二个操作数。 在 ```“函数”``` 一章中，我们将对此进行更详细的介绍。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以编写以下内容，并且不会收到任何编译器警告：

``` Swift
print("Body temperature: \(bodyTemperature ??? "n/a")") // Body temperature: 37.0
print("Blood glucose level: \(bloodGlucose ??? "n/a")")
// Blood glucose level: n/a
```

## ***Optional map***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们有一个字符数组，我们想将第一个元素转换为字符串：

``` Swift
let characters: [Character] = ["a", "b", "c"] 
String(characters[0]) // a
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果字符可能为空，则仅当数组为非空时，才可以使用 ```if``` 来创建字符串：

``` Swift
var firstCharAsString: String? = nil 
if let char = characters.first {
    firstCharAsString = String(char) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，现在，如果数组包含至少一个元素，则 ```firstCharAsString``` 将包含该元素作为 ```String``` 。 但是，如果不是这样，则 ```firstCharAsString``` 将为nil。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种模式（采取可选方式，然后将其转化为nil）会很普遍，以至于在可选方式上有一种方法可以做到这一点。 它称为 ```map``` ，它具有一个表示如何转换可选内容的函数。 这是上面的功能，使用 ```map``` 重写：

``` Swift
let firstChar = characters.first.map { String($0) } // Optional("a")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，此 ```map``` 非常类似于数组或其他序列上的 ```map``` 。 但是，它不是对一系列值进行运算，而是对一个值进行运算：可能的值 ```内部可选``` 。 你可以将可选值视为零个或一个值的集合，而 map 则不对零值进行任何处理或将其转换为零。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是在可选项目上实现 ```map``` 的一种方法：

``` Swift
extension Optional {
    func map<U>(transform: (Wrapped) -> U) -> U? {
        guard let value = self else { 
            return nil 
        }
        return transform(value) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你已经想要一个可选结果时，可选映射特别好。 假设你想编写另一个 ```reduce数组变体``` 。 它不使用初始值，而是使用数组中的第一个元素（在某些语言中，这可能称为 ```reduce1``` ，但我们称其为 **reduce并依赖于重载** ）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于数组可能为空，结果需要是可选的-如果没有初始值，还可能是什么？ 你可以这样写：

``` Swift
extension Array {
    func reduce(_ nextPartialResult: (Element, Element) -> Element)
    -> Element? {
        // first will be nil if the array is empty.
        guard let fst = first else { 
            return nil 
        }
        return dropFirst().reduce(fst, nextPartialResult) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以像这样使用它：

``` Swift
[1, 2, 3, 4].reduce(+) // Optional(10)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于可选 ```map``` 如果可选为 ```nil``` 则返回 ```nil``` ，因此我们的 ```reduce变量``` 可以是使用单个 ```return语句（无保护）重写``` ：

``` Swift
extension Array {
    func reduce_alt(_ nextPartialResult: (Element, Element) -> Element)
    -> Element? {
        return first.map {
            dropFirst().reduce($0, nextPartialResult)
        } 
    }
}
```

## ***Optional fiatMap***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在 [***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "") 一章中所看到的那样，通常希望使用一个函数来映射一个集合，该函数可以返回一个集合，但将结果作为单个数组而不是数组来收集。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，如果你想对可选值执行映射，但是转换函数也具有可选结果，则最终会出现一个双重嵌套的可选项。 例如，当你想将字符串数组的第一个元素作为数字来获取时，请在数组上使用 ```first``` 然后映射将其转换为数字：

``` Swift
let stringNumbers = ["1", "2", "3", "foo"]
let x = stringNumbers.first.map { Int($0) } // Optional(Optional(1))
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题在于，由于 ```map``` 返回一个可选值（first可能为nil），而 ```Int(someString)``` 返回一个可选项（字符串可能不是整数），因此x的类型将为 Int?? 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```flatMap``` 会将结果展平为单个可选内容。 结果，y的类型将为 ```Int?```：

``` Swift
let y = stringNumbers.first.flatMap { Int($0) } // Optional(1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，你可以使用 ```if let``` 编写此代码，因为以后绑定的值可以是根据先前的计算：

``` Swift
if let a = stringNumbers.first, let b = Int(a) { 
    print(b)
} // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这表明 ```flatMap``` 和 ```if let``` 非常相似。 在本章的前面，我们看到了一个使用多 ```if-let语句``` 的示例。 我们可以改用 ```map``` 和 ```flatMap``` 重写它：

``` Swift
let urlString = "https://www.objc.io/logo.png" 
let view = URL(string: urlString)
    .flatMap { try? Data(contentsOf: $0) }
    .flatMap { UIImage(data: $0) }
    .map { UIImageView(image: $0) }

if let view= view { 
    PlaygroundPage.current.liveView = view
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选链接也与 ```flatMap``` 非常相似： ```i？.advance（by：1）``` 本质上等效于 ```i.flatMap {$ 0.advance（by：1）}``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们已经证明了多重 ```if-let语句``` 等效于 ```flatMap``` ，因此我们可以在另一个方面实现一个：

``` Swift
extension Optional {
    func flatMap<U>(transform: (Wrapped) -> U?) -> U? {
        if let value = self, let transformed = transform(value) { 
            return  transformed
        }
        return nil
    } 
}
```

## ***用compactMap过滤掉nil***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你有一个序列，并且其中包含可选序列，则可能不需要关心 ```nil值``` 。 实际上，你可能只想忽略它们。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设你只想处理字符串数组中的数字。 使用可选的模式匹配，可以轻松地在for循环中完成此操作：

``` Swift
let numbers = ["1", "2", "3", "foo"] varsum=0
for case let i? in numbers.map({ Int($0) }) {
    sum+=i 
}
sum // 6
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能还想使用 ```??```  将 ```nils``` 替换为零：

``` Swift
numbers.map { Int($0) }.reduce(0) { $0 + ($1 ?? 0) } // 6
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但实际上，你只需要一个可 **过滤nil并解开非nil值的map版本** 。 在序列上输入标准库的 ```compactMap``` ，它会执行以下操作：

``` Swift
numbers.compactMap { Int($0) }.reduce(0, +) // 6
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要定义我们自己的 ```compactMap版本``` ，我们首先映射整个数组，然后我们过滤掉非nil值，最后解开每个元素：

``` Swift
extension Sequence {
    func compactMap<B>(_ transform: (Element) -> B?) -> [B] {
        return lazy.map(transform).filter { $0 != nil }.map { $0! } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在实现中，我们使用 ```lazy``` 将数组的**实际创建推迟到最后一刻**。 这可能是 ```微优化``` ，但对于较大的序列可能是值得的。 使用惰性可以节省多个中间阵列的分配。 不过，标准库在其 ```compactMap``` 实施中并未执行此操作。 在 ```“Collection协议”``` 一章中，我们将详细介绍**惰性序列和集合**。

## ***Equating Optionals***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，你并不关心某个值是否为nil，而只是是否包含某个值：

``` Swift
let regex = "^Hello$" // ...
if regex.first == "^" {
// Match only the start of the string.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，值是否为nil无关紧要-如果字符串为空，则第一个字符不能是尖号，因此你不想运行该块。 但是你仍然想要第一个的保护和简单性。 替代方案如果 `!regex.isEmpty && regex [regex.startIndex] == "^"` ，那太可怕了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码依靠两件事来工作。 首先， ```Optional``` 符合 ```Equatable``` ，但仅当 ```Wrapped类型``` 也符合 ```Equatable``` 时：

``` Swift
extension Optional: Equatable where Wrapped: Equatable { static func ==(lhs: Wrapped?, rhs: Wrapped?) -> Bool {
    switch (lhs, rhs) {
        case (nil, nil): 
        return true
        case let (x?, y?): 
        return x == y case (_?, nil), (nil, _?): return false 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比较两个可选参数时，有四种可能：它们都为nil，或者它们都具有值，或者一个或另一个为nil。 ```switch``` 详尽地测试了所有四种可能性（因此不需要默认子句）。 它定义两个nil彼此相等，nil永不等于non-nil，如果两个非nil值的展开值相等，则两个nil值相等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这只是故事的一半。 注意，我们不必编写以下内容：

``` Swift
if regex.first == Optional("^") { // or: == .some("^") 
    // Match only the start of the string.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是因为每当你有一个非可选值时， ```Swift``` 总是愿意将其提升为可选值，以使类型匹配。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种隐式转换对于编写清晰，紧凑的代码非常有用。 假设没有这样的转换，但是为了使调用者感觉更好，你需要一个 ==版本 ，该版本在可选类型和非可选类型之间都起作用。 你必须编写三个单独的版本：

``` Swift
// Both optional.
func == <T: Equatable>(lhs: T?, rhs: T?) -> Bool 
// lhs non-optional.
func == <T: Equatable>(lhs: T, rhs: T?) -> Bool 
// rhs non-optional.
func == <T: Equatable>(lhs: T?, rhs: T) -> Bool
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，相反，只有第一个版本是必需的，并且编译器将在必要时转换为可选参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，我们在整本书中都一直依赖此功能。例如，当我们实现可选映射时，我们转换了内部值并返回了它。但是 map 的返回值是可选的。编译器自动为我们转换了值-我们不必编写 `return Optional(transform(value))` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 代码始终依赖于此**隐式转换**。例如，按键查找字典下标将返回可选键（键可能不存在）。但这在分配时也需要一个可选的选项-下标必须同时采用和接受相同的类型。没有隐式转换，你将不得不编写
 `myDict["someKey"] = Optional(someValue)` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，如果你想知道在分配nil值时使用基于键的下标分配的字典会发生什么情况，那么答案就是要删除键。这可能很有用，但也意味着你在处理带有可选值类型的字典时需要格外小心。考虑一下这个字典：

``` Swift
var dictWithNils: [String: Int?] = [ "one": 1,
"two": 2,
"none": nil
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字典有三个键，其中一个键的值为nil。 假设我们也想将“ two”键的值设置为nil。 这不会这样做：

``` Swift
dictWithNils["two"] = nil
dictWithNils // ["one": Optional(1), "none": nil]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，它将删除“two”键。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要更改key的值，你必须编写以下内容之一（它们都可以工作，因此，请选择你认为较清晰的那个）：

``` Swift
dictWithNils["two"] = Optional(nil)
dictWithNils["two"] = .some(nil)
dictWithNils["two"]? = nil
dictWithNils // ["one": Optional(1), "two": nil, "none": nil]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，上面的第三个版本与其他两个版本略有不同。 之所以有效，是因为字典中已经有“ two”键，因此，如果成功提取它，它将使用可选链接来设置其值。 现在，尝试使用不存在的 key ：

``` Swift
dictWithNils["three"]? = nil 
dictWithNils.index(forKey: "three") // nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你会看到什么都不会被更新/插入。

# **Comparing Optionals**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```==``` 相似，对于可选项，曾经有 `<` ， `>` ， `<=` 和 `>=` 的实现。 对于 ```Swift 3.0``` ，将这些比较运算符作为可选项删除了，因为它们很容易产生意外的结果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，`nil<.some(_)` 将返回true。 结合高阶函数或可选链接，这可能非常令人惊讶。 考虑以下示例：

``` Swift
let temps = ["-459.67", "98.6", "0", "warm"]
let belowFreezing = temps.filter { Double($0) < 0 }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 `Double("warm")` 将返回nil并且nil小于0，因此它将包含在下面的冻结温度中。 这确实是出乎意料的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要可选项之间的不等式关系，则现在必须首先解开值，从而明确说明应如何处理nil值。 我们将在 ```“函数”``` 一章中显示一个示例，其中定义了一个通用函数，该函数将常规比较函数“提升”到可选域中。

# **何时强制展开**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了所有这些用于清晰地展开可选内容的技术，何时应该使用 `！` ，强制展开运算符 `？` 对此在互联网上散布着很多意见，包括 `“从不”` ， `“每当使代码更清晰时”` 和 `“何时无法避免”` 。 我们提出以下规则，其中涵盖了大多数规则：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;采用 ！ 当你确定某个值不会为零时，就希望你的程序崩溃。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，从上面开始执行 ```compactMap``` ：

``` Swift
extension Sequence {
    func compactMap<B>(_ transform: (Element) -> B?) -> [B] {
        return lazy.map(transform).filter { $0 != nil }.map { $0! } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，这 `$0` 是不可能的！ 内部映射永远不会达到零，因为在上一步中所有nil元素都被过滤掉了。 通过遍历数组并将非nil值添加到数组中，可以肯定地编写此函数来消除强制展开运算符。 但是 ```filter/map``` 版本更干净，也许更清晰，所以`！` 是有道理的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，这些情况很少见。 如果你完全掌握了本章介绍的所有展开技术，那么比强制展开有更好的方法。 每当你发现自己想要达到`！`时，就应该退后一步，想知道是否真的没有其他选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为另一个示例，请考虑以下代码，该代码以匹配特定条件的值获取字典中的所有键：

``` Swift
let ages = [
"Tim": 53,"Angela":54,"Craig":44, "Jony": 47, "Chris": 37, "Michael": 34,
] 
ages.keys
.filter { name in ages[name]! < 50 }
.sorted()
// ["Chris", "Craig", "Jony", "Michael"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再次，`！ `是非常安全的-由于所有键都来自字典，因此不可能从字典中丢失键。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，你也可以重写该语句，以完全不需要进行强制拆包。 利用字典将自身表示为键值序列的事实
对，你可以过滤此序列，然后在 ```map``` 中运行以删除值：

``` Swift
ages.filter { (_, age) in age < 50 } 
.map { (name, _) in name } 
.sorted()
// ["Chris", "Craig", "Jony", "Michael"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该版本甚至可以带来性能上的好处，因为它避免了不必要的键查找。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，有时候生活会给你一个可选的选择，并且你肯定会知道它不是零。 可以肯定的是，你宁愿让程序崩溃而不是继续，因为遇到nil值意味着你的逻辑中存在一个非常讨厌的错误。 在这种情况下比继续进行陷阱更好，所以`！` 在一个方便的角色中充当组合的拆包或错误运算符。 与仅使用nil链接或合并运算符在地毯下扫除理论上不可能的情况相比，此方法通常是更好的方法。

# **改进强制展开错误消息**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也就是说，即使你强制展开可选值，你也可以使用除`！`以外的其他选项。 当程序出错时，你在输出日志中获得的原因说明不多。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会发表评论，说明为何有理由进行强制解包。 那么，为什么不将该注释也用作错误消息呢？  ```!!``` 当应用程序退出时，它将解包与提供更具描述性的错误消息结合在一起记录：

``` Swift
infix operator !!
    func !! <T>(wrapped: T?, failureText: @autoclosure () -> String) -> T { if let x=wrapped {
        return x
    }
    fatalError(failureText())
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你可以编写更具描述性的错误消息，包括你希望能够解开的值：

``` Swift
let s = "foo"
let i = Int(s) !! "Expecting integer, got \"\(s)\""
```

# **声明调试版本**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管如此，即使在发布版本上崩溃也仍然是一个大胆的举措。 通常，你可能更喜欢在调试和测试构建期间声明，但是在生产环境中，你将替换为有效的默认值-可能为nil或空数组。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入 ```interrobang``` 运算符 `!?`。 我们定义了此运算符，以便在失败的展开操作时断言，并在断言在释放模式下未触发时替换默认值：

``` Swift
infix operator !?
func !?<T: ExpressibleByIntegerLiteral>
(wrapped: T?, failureText: @autoclosure () -> String) -> T
{
    assert(wrapped != nil, failureText()) return wrapped ?? 0
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，以下内容将在调试时声明，但在发行版中显示0：

``` Swift
lets="20"
let i = Int(s) !? "Expecting integer, got \"\(s)\""
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他字面可转换协议的重载可以广泛覆盖可以默认：

``` Swift
func !?<T: ExpressibleByArrayLiteral>
(wrapped: T?, failureText: @autoclosure () -> String) -> T
{
    assert(wrapped != nil, failureText()) return wrapped ?? []
}

func !?<T: ExpressibleByStringLiteral>
(wrapped: T?, failureText: @autoclosure () -> String) -> T
{
    assert(wrapped != nil, failureText())
    return wrapped ?? "" 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于要提供其他显式默认值的情况，或者对于非标准类型，可以定义一个带有一对的版本-默认值和错误文本：

``` Swift
func !?<T>(wrapped: T?,
nilDefault: @autoclosure () -> (value: T, text: String)) -> T
{
    assert(wrapped != nil, nilDefault().text) return wrapped ?? nilDefault().value
}
// Asserts in debug, returns 5 in release.
Int(s) !? (5, "Expected integer")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于可选的链接方法调用返回 ```Void``` 的方法 ```return Void ?``` ，因此你也可以编写非通用版本来检测可选链何时变为 ```nil``` ，从而导致无操作：

``` Swift
func !?(wrapped: ()?, failureText: @autoclosure () -> String) { 
    assert(wrapped != nil, failureText())
}
var output: String? = nil
output?.write("something") !? "Wasn't expecting chained nil here"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有三种方法可以停止执行。 第一个选项 ```fatalError``` 接收消息并无条件停止执行。 第二个选项 ```assert``` ，检查条件和消息，如果条件评估为 `false` ，则停止执行。 在发行版本中，断言被删除-不检查条件（并且永远不会停止执行）。 第三个选项是前置条件，它具有与 `assert` 相同的接口，但是不会从发行版本中删除，因此，如果条件评估为 `false` ，则会停止执行。


# **隐式展开的 Optionals**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没错：**隐式解包**的可选对象—带有感叹号的类型，例如 ```UIView！``` -仍然是可选的，尽管在你使用它们时会自动将其自动展开。既然我们知道强制拆包将使你的应用程序永远无效，那么为什么你会使用它们呢？好吧，确实有两个原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原因1：暂时是因为你正在调用未经审计的可空性的`Objective-C`代码，或者是正在调用没有`Swift`特定注释的`C库`。

v甚至存在隐式展开的可选参数的唯一原因是使与`Objective-C`和`C`的互操作性更容易。当然，在第一天开始针对现有的`Objective-C`代码库编写`Swift`时，任何返回引用的`Objective-C`方法都将转换为隐式解包的可选方法。由于在`Objective-C`的整个生命周期中，都没有办法表明引用是可为空的，因此除了假定任何返回引用的调用都可能返回`nil`引用之外，别无选择。但是实际上很少有`Objective-C API`返回`null`引用，因此自动将它们公开为可选参数会非常令人讨厌。由于每个人都习惯于处理`Objective-C对象`的`“可能为空”`的世界，因此隐式展开的可选对象是一个合理的折衷方案。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，你会在未经审核的桥接`Objective-C`代码中看到它们。但是，你永远都不会看到纯粹的本机`Swift API`返回**隐式可选**（或将其传递给回调）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原因2：因为在定义的时间段内，值非常短地为`nil`，然后再也不会为`nil`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最常见的情况是两阶段初始化。在你的类准备就绪时，隐式包装的可选变量都将具有值。这就是 `Xcode / Interface Builder` 在视图控制器生命周期中使用它们的原因：在`Cocoa`和`Cocoa Touch`中，视图控制器延迟地创建其视图，因此存在一个时间窗口-在初始化视图控制器之后但在加载视图之前—当视图对象尚未创建时，其出口引用。

# **隐含的选择性行为**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 **隐式解包** 的可选变量通常表现为非可选值，但你仍然可以使用大多数拆包技术像可选变量一样安全地处理它们— `chaining`，`nil-coalescing`，`映射`，或将它们与nil进行比较都可以相同：

``` Swift
var s: String! = "Hello" 
s?.isEmpty // Optional(false) 
if let s = s { print(s) } // Hello 
s=nil
s ?? "Goodbye" // Goodbye
```

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***Optional*** 被吹捧为`Swift`编写更安全代码的最大功能之一，我们当然同意。但是，如果你考虑一下，真正的突破不是可选的，而是非可选的。几乎每种主流语言都有 `“null”` 或 `“nil”` 的概念；他们大多数人所没有的就是能够将值声明为`“永不零”`。或者，或者，某些类型（如`Objective-C`或`Java`中的非类类型）是`“总是非零”`，这迫使开发人员想出魔术值来表示缺少值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其输入和输出经过精心设计并考虑到可选元素的`API`更具表现力，更易于使用；由于类型包含更多信息，因此无需参考文档。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在本章中展示的所有解包技术都是`Swift`试图使桥接可选值和非可选值的两个世界尽可能轻松地进行的尝试。你应该使用哪种方法通常取决于个人喜好。



