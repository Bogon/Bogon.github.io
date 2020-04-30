---
title: Swift CompactMap vs flatMap：差异说明
permalink: Swift CompactMap vs flatMap：差异说明
copyright: ture
date: 2020-04-30 17:08:16
keywords: iOS,Swift,函数式编程,map,flatMap,compactMap,Functional Programming
tags:
    - [iOS]
    - [Swift]
    - [函数式编程]
categories:
    - [iOS]
    - [Swift]
    - [函数式编程]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```CompactMap``` 和 ```flatMap``` 有什么区别？何时使用它们？  ```Swift 4.1``` 在 [***```提案0187```***](https://github.com/apple/swift-evolution/blob/master/proposals/0187-introduce-filtermap.md "") 中引入了这种新方法：引入 ```Filtermap``` 可以在 ```flatMap``` 用例中获得更多的清晰度。

</br>

# **何时使用compactMap**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当转换产生可选值时，使用此方法接收非可选值数组。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以下示例中查看 ```map``` 和 ```compactMap``` 之间的区别：

<!-- more -->


``` Swift
let scores = ["1", "2", "three", "four", "5"]

let mapped: [Int?] = scores.map { str in Int(str) }
// [1, 2, nil, nil, 5] - Two nil values as "three" and "four" are strings.

let compactMapped: [Int] = scores.compactMap { str in Int(str) }
// [1, 2, 5] - The nil values for "three" and "four" are filtered out.
```

</br>

# **何时使用flatMap**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当转换为每个元素生成序列或集合时，请使用此方法来接收单级集合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以下示例中查看 ```map``` 与 ```flatMap``` 之间的区别：

``` Swift
let scoresByName = ["Henk": [0, 5, 8], "John": [2, 5, 8]]

let mapped = scoresByName.map { $0.value }
// [[0, 5, 8], [2, 5, 8]] - An array of arrays
print(mapped)

let flatMapped = scoresByName.flatMap { $0.value }
// [0, 5, 8, 2, 5, 8] - flattened to only one array
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上， ```s.flatMap(transform)``` 等效于 ```Array(s.map(transform).joined())``` 。

</br>

# **compactMap vs flatMap**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的一般经验法则提醒您编写代码时的注意事项：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在序列上使用并具有返回可选值的转换，请使用 ```compactMap``` 。 如果没有，则 ```map``` 或 ```flatMap``` 应该会为您提供所需的结果。

## ***命名为compactMap的原因***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管有人提议引入 ```filterMap``` 作为方法名，但是 ```Swift团队``` 还是决定使用 ```compactMap``` 。 读懂他们的动机可以使事情变得很多，并解释该方法的功能。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```“filterMap”``` 是其他编程语言中有先例的名称，尤其是功能性语言，但有些人强烈认为该名称具有误导性，因为作为一个组合操作，它并不是一个过滤器或地图。 在替代方案中，最受支持的方案似乎是 ```“ compactMap”``` ，它基于 ```“ compact”``` 的先例， ```compactMap``` 是来自其他语言（尤其是Ruby）的一种操作，它返回输入的副本而没有 ```nil值``` 。 ```Swift``` 目前没有这样的操作，事实上，目前尚无法表达它。 但是，核心团队同意添加是一个合理的操作，并且 ```“ compactMap”``` 是该操作的好名字。



