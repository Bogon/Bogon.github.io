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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您到达正在读取的文件末尾时，可能不返回值是预期的结果，如以下C代码片段所示：

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


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，````vec.end()```` 是容器 ```“末尾一个”``` 的迭代器； 这是一个特殊的迭代器，您可以检查容器的末端，但绝对不要用它来访问值-类似于 ```Swift中``` 集合的 ```endIndex``` 。 函数使用它来指示容器中不存在这样的值。

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是这种方法是有问题的。返回的结果看起来和感觉像是真正的价值。 ```int -1``` 仍然是有效的整数，但是您永远都不想将其打印出来。 ```vec.end（）```是一个迭代器，但是如果您尝试使用它，结果是不确定的。每个人都喜欢在Java程序引发 ```NullPointerException``` 时看到 ```堆栈转储``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```Java``` 不同，```Objective-C``` 允许将消息发送为 ```nil``` 。只要运行时保证从消息到 ```nil``` 的返回值始终等于零，即对象返回类型为 ```nil``` ，数字类型为0，依此类推，这是 ```“安全的”``` 。如果邮件返回一个结构，则会将其所有成员初始化为零。考虑到这一点，请考虑以下片段以查找子字符串：

``` Swift
NSString *someString = ...
if ([someString rangeOfString:@"Swift"].location != NSNotFound) {
NSLog(@"Someone mentioned Swift!"); }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果 ```someString``` 为 ```nil``` （无论是偶然还是有意）， ```rangeOfString：``` 消息将返回零的 ```NSRange``` 。 因此，其 ```.location``` 将为零，并且与 ```NSNotFound``` （定义为 ```NSIntegerMax``` ）的不等式比较将成功。 因此， ```if语句``` 的正文将在不应该执行的情况下执行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```空引用``` 引起了很多问题，以托尼·霍亚尔（Tony Hoare）（于1965年创建）为荣，称它们为“十亿美元的错误”：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当时，我正在设计第一个全面的类型系统，以面向对象的语言（ALGOL W）进行引用。 我的目标是确保对引用的所有使用都绝对安全，并进行检查由编译器自动执行。 但是我忍不住要插入空引用的诱惑，仅仅是因为它很容易实现。 这导致了无数的错误，漏洞和系统崩溃，在最近四十年中可能造成十亿美元的痛苦和破坏。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前哨值 的另一个问题是它们需要先验知识。 有时，社区中会广泛使用成语，例如 C++```结束迭代器``` 或 ```Objective-C``` 中的错误处理约定。 如果不存在此类规则，或者您不了解这些规则，则必须参考文档。 而且，该函数无法表明它不会失败。 如果调用返回一个指针，则该指针可能永远不会为零。 但是，除非阅读文档，否则无法说出任何内容，即使如此，该文档也可能是错误的。

# **用枚举替换前哨值**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，每个好的程序员都知道魔术数字是不好的。 大多数语言都支持某种枚举类型，这是表示类型的一组离散可能值的更安全方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 使用 ```“关联值”``` 的概念进一步枚举。 这些是枚举值，也可以具有与其关联的另一个值。 我们将在 ```“枚举”``` 一章中详细介绍枚举。 现在，仅需将 ```Optional``` 定义为枚举就足够了：

``` Swift
enum Optional<Wrapped> { 
    case none
    case some(Wrapped)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检索枚举的关联值的唯一方法是通过模式匹配-例如，在 ```switch``` 或 ```if case let``` 语句中。 与哨兵值不同，在不显式检查和拆包的情况下，您不能不小心使用嵌入在 ```Optional``` 中的值。

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

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为 ```可选参数``` 是 ```Swift``` 的基础，所以有很多语法支持整理一下： ```Optional<Index>``` 可以写成 ```Index``` 吗？ 可选参数符合 ```ExpressibleByNilLiteral``` ，因此您可以编写 ```nil``` 而不是 ```.none``` ； 和非可选值（例如idx）会在需要时自动“提升”为可选值，以便您可以编写 ```return idx``` 而不是 ```return .some（idx）```。
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

