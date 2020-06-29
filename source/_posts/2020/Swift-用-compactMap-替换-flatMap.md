---
title: Swift 用 compactMap 替换 flatMap
permalink: Swift 用 compactMap 替换 flatMap
copyright: ture
date: 2020-04-30 17:18:07
keywords: iOS,Swift,函数式编程,map,flatMap,compactMap,Functional Programming
description: Swift 用 compactMap 替换 flatMap
tags:
    - [iOS]
    - [Swift]
    - [函数式编程]
categories:
    - [iOS]
    - [Swift]
    - [函数式编程]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Xcode 9.3``` 随附的 ```Swift 4.1``` 带来了对 ```Swift语言``` 和 ```Swift标准库``` 的更多更改。 苹果原本打算将其作为对 ```Swift 4.0``` 的源兼容升级，但我遭到一次源代码更改的打击，我猜这将是广泛的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在不建议在序列（如 ```Array``` ）上使用 ```flatMap``` 来过滤映射到 ```nil``` 的任何内容，并由 ```compactMap``` 取代。

# **改变的简短版本**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你是否正在使用 ```flatMap``` 从可选数组中删除 ```nil```：

``` Swift
let names: [String?] = ["Tom", nil, "Peter", nil, "Harry"]
let valid = names.flatMap { $0 }
// ["Tom", "Peter", "Harry"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Xcode 9.3``` 显示了以这种方式使用 ```flatMap``` 的弃用警告：

![flatMap](https://cdn.xuebaonline.com/rfc-stp1.png "")

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Xcode``` 建议的修复程序将 ```flatMap``` 重命名为 ```compactMap``` ：

``` Swift
let names: [String?] = ["Tom", nil, "Peter", nil, "Harry"]
let valid = names.compactMap { $0 }
// ["Tom", "Peter", "Harry"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要你在带有闭包的序列上使用 ```flatMap``` 并返回可选值，该方法就适用。 所以这也被弃用了：

``` Swift
let words = ["53", "nine", "hello","0"]
let values = words.flatMap { Int($0) }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用 ```compactMap``` 替换 ```flatMap``` 会删除弃用警告：

``` Swift
let values = words.compactMap { Int($0) } // Returns [Int]
// [53, 0]
```

</br>

# **More**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**首先， ```Swift 4.1 ```不会弃用 ```flatMap``` 的所有用法-只有一种情况正在改变。** ```Swift 4.0``` 在三种情况下可以使用 ```flatMap``` ：

+ 在具有返回序列的闭包的序列上使用 ```flatMap``` ：

``` Swift
Sequence.flatMap<S>(_ transform: (Element) -> S)
  -> [S.Element] where S : Sequence
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我认为这可能是我在 Swift 中遇到的 ```flatMap``` 的首次使用。 使用它对序列的每个元素应用闭包并展平结果：

``` Swift
let scores = [[5,2,7], [4,8], [9,1,3]]
let allScores = scores.flatMap { $0 }
// [5, 2, 7, 4, 8, 9, 1, 3]

let passMarks = scores.flatMap { $0.filter { $0 > 5} }
// [7, 8, 9]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift 4.1``` 不会更改 ```flatMap``` 的用法。

+ 在可选值上使用 ```flatMap```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;闭包采用可选值的 ```非null值``` ，并返回可选值。 如果原始可选参数为 ```nil``` ，则 ```flatMap``` 返回 ```nil``` ：

``` Swift
Optional.flatMap<U>(_ transform: (Wrapped) -> U?) -> U?

let input: Int? = Int("8")
let passMark: Int? = input.flatMap { $0 > 5 ? $0 : nil}
// Optional(8)
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift 4.1``` 不会更改 ```flatMap``` 的用法。

+ 在带有返回可选项的闭包的序列上使用 ```flatMap``` 。

``` Swift
Sequence.flatMap<U>(_ transform: (Element) -> U?) -> U?
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是 ```Swift 4.1（Xcode 9.3```） 替换为 ```compactMap``` 的 ```flatMap``` 的使用。

``` Swift
let names: [String?] = ["Tom", nil, "Peter", nil, "Harry"]
let counts = names.compactMap { $0?.count }
// [3, 5, 5]
```

</br>

# **重点是什么？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总而言之，当 ```plain map``` 可以完成此工作时，似乎可以减少对 ```flatMap``` 的滥用：

``` Swift
let myNames: [String] = ["John", "Joe", "Jack"]

// No need to flatMap (or compactMap)
let myCounts = myNames.flatMap { $0.count }
// [4, 3, 4]

// map is enough
let myCounts = myNames.map { $0.count }
// [4, 3, 4]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将名称更改为 ··· 的想法是为了更好地描述该功能的作用。 映射序列，然后通过从结果中删除 ```值为nil的元素``` 进行压缩。 ```Swift``` 的未来版本可能还会为我们提供从通常情况下从序列中删除 ```nil值``` 的紧凑函数。

</br>

# **扩展阅读**

+ [***```SE-0187 Introduce Sequence.compactMap(_:)```***](https://github.com/apple/swift-evolution/blob/master/proposals/0187-introduce-filtermap.md "")

