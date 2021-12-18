---
title: Swift迭代器设计模式
description: Swift迭代器设计模式
permalink: Swift迭代器设计模式
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,迭代器设计模式,重构, Iterator design pattern'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 迭代器设计模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 12975
date: 2020-04-26 09:13:26
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过使用一些 [```自定义序列```](http://www.xuebaonline.com/%E5%9C%A8Swift%E4%B8%AD%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9B%86%E5%90%88/ "自定义序列")（符合 ```Swift``` 标准库中的 ```IteratorProtocol``` ），学习迭代器设计模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在面向对象编程里，[迭代器模式](https://zh.wikipedia.org/wiki/%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F "迭代器模式") 是一种设计模式，是一种最简单也最常见的设计模式。它可以让用户透过特定的接口访问容器中的每一个元素而不用了解底层的实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次，我将重点介绍迭代器设计模式。 该模式在 [```Swift标准库```](https://developer.apple.com/documentation/swift/swift_standard_library "Swift标准库") 中大量使用，如果你需要创建迭代器，有一些协议可以为你提供支持，但是老实说：我从来没有直接实现过这种模式。 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事实是，在99％的用例中，你将永远不必处理这种模式，因为对 ```Swift``` 中直接内置的迭代器提供了惊人的支持。 始终使用序列，数组，字典而不是直接实现此模式，但是很高兴知道事情是如何进行的。 🙃

<!-- more -->

</br>

# **什么是迭代器设计模式？**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义，该模式使你可以迭代一组元素。 这是其中一种定义：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供一种在不暴露其基础表示的情况下顺序访问聚合对象的元素的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长话短说，迭代器为你提供了一个界面，无论你在后台如何实现这些集合，都可以使你对集合进行迭代。 这是上面使用字符串迭代器的理论的快速示例。

``` Swift
import Foundation

protocol StringIterator {
    func next() -> String?
}

class ArrayStringIterator: StringIterator {

    private let values: [String]
    private var index: Int?

    init(_ values: [String]) {
        self.values = values
    }

    private func nextIndex(for index: Int?) -> Int? {
        if let index = index, index < self.values.count - 1 {
            return index + 1
        }
        if index == nil, !self.values.isEmpty {
            return 0
        }
        return nil
    }

    func next() -> String? {
        if let index = self.nextIndex(for: self.index) {
            self.index = index
            return self.values[index]
        }
        return nil
    }
}


protocol Iterable {
    func makeIterator() -> StringIterator
}

class DataArray: Iterable {

    private var dataSource: [String]

    init() {
        self.dataSource = ["🐶", "🐔", "🐵", "🦁", "🐯", "🐭", "🐱", "🐮", "🐷"]
    }

    func makeIterator() -> StringIterator {
        return ArrayStringIterator(self.dataSource)
    }
}

let data = DataArray()
let iterator = data.makeIterator()

while let next = iterator.next() {
    print(next)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，它们有两个主要协议和一个非常简单的实现。 现在，我们的 ```DataArray``` 类的行为就像一个真实的数组，可以通过使用循环来迭代基础元素。 让我们抛开理论，通过使用实际的 ```Swift标准库组件``` 从上面重新实现示例。 😉

</br>

# **Swift 中的自定义序列**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 具有内置的序列协议，可帮助你创建迭代器。 在 ```Swift``` 中实现自己的序列就是通过创建自定义迭代器对象来隐藏基础数据结构。 你只需存储当前索引，并在每次调用下一个函数时根据该索引返回下一个元素。 😛

``` Swift
import Foundation

struct Emojis: Sequence {
    let animals: [String]

    func makeIterator() -> EmojiIterator {
        return EmojiIterator(self.animals)
    }
}

struct EmojiIterator: IteratorProtocol {

    private let values: [String]
    private var index: Int?

    init(_ values: [String]) {
        self.values = values
    }

    private func nextIndex(for index: Int?) -> Int? {
        if let index = index, index < self.values.count - 1 {
            return index + 1
        }
        if index == nil, !self.values.isEmpty {
            return 0
        }
        return nil
    }

    mutating func next() -> String? {
        if let index = self.nextIndex(for: self.index) {
            self.index = index
            return self.values[index]
        }
        return nil
    }
}

let emojis = Emojis(animals: ["🐶", "🐔", "🐵", "🦁", "🐯", "🐭", "🐱", "🐮", "🐷"])
for emoji in emojis {
    print(emoji)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，[```Sequence protocol```](https://developer.apple.com/documentation/swift/sequence "Sequence protocol") 与第一个示例中使用的自定义可迭代协议的通用对应项。   [```IteratorProtocol```](https://developer.apple.com/documentation/swift/iteratorprotocol "IteratorProtocol") 有点像之前使用的字符串迭代器协议，但是更加迅捷，当然也更通用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以，这很棒。 最后，你知道如何创建自定义序列。 如果你想隐藏数据结构并提供通用的可迭代接口，那么这很好。 想象一下，如果你将要开始使用字典而不是使用数组来存储命名的表情符号而没有用于包装它们的迭代器，将会发生什么。 🤔

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我想谈谈 ```Swift标准库``` 中还有另外一个超级有用的东西。 没错，一个抽象级别的应用，我们看这里：

</br>

# **Swift 中的自定义集合**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[```Collections```](https://developer.apple.com/documentation/swift/collection "Collections") 是序列之外的第一步。 它们内部的元素可以通过下标访问，它们还定义了 ```startIndex``` 和 ```endIndex``` ，而且集合中的各个元素可以多次访问。 听起来不错？ 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时创建 [```自定义集合类型```]( "自定义集合类型") 可能很有用。 例如，如果你想消除可选值。 想象一下分类的收藏夹机制，对于每个类别，您都有一系列的收藏夹，因此你必须处理空的和不存在的案例。 使用自定义集合，你可以将多余的代码隐藏在自定义数据结构中，并为应用程序的其余部分提供一个简洁的界面。 😍

``` Swift
class Favorites {

    typealias FavoriteType = [String: [String]]

    private(set) var list: FavoriteType

    public static let shared = Favorites()

    private init() {
        self.list = FavoriteType()
    }
}


extension Favorites: Collection {

    typealias Index = FavoriteType.Index
    typealias Element = FavoriteType.Element

    var startIndex: Index {
        return self.list.startIndex
    }
    var endIndex: Index {
        return self.list.endIndex
    }

    subscript(index: Index) -> Iterator.Element {
        return self.list[index]
    }

    func index(after i: Index) -> Index {
        return self.list.index(after: i)
    }
}

extension Favorites {

    subscript(index: String) -> [String] {
        return self.list[index] ?? []
    }

    func add(_ value: String, category: String) {
        if var values = self.list[category] {
            guard !values.contains(value) else {
                return
            }
            values.append(value)
            self.list[category] = values
        }
        else {
            self.list[category] = [value]
        }
    }

    func remove(_ value: String, category: String) {
        guard var values = self.list[category] else {
            return
        }
        values = values.filter { $0 == value }

        if values.isEmpty {
            self.list.removeValue(forKey: category)
        }
        else {
            self.list[category] = values
        }
    }
}


Favorites.shared.add("apple", category: "fruits")
Favorites.shared.add("pear", category: "fruits")
Favorites.shared.add("apple", category: "fruits")

Favorites.shared["fruits"]

Favorites.shared.remove("apple", category: "fruits")
Favorites.shared.remove("pear", category: "fruits")
Favorites.shared.list
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我知道，这是一个非常简单的示例，但它说明了为什么集合比纯序列更高级。 此外，在下面的链接中，有很好的演示，演示了精心编写的收藏集。 随时了解有关隐藏在Swift标准库中（不是那么深）的这些超级协议和自定义数据类型的更多信息。 🤐