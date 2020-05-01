---
title: Swift枚举值
description: Swift枚举值
permalink: Swift枚举值
copyright: ture
date: 2020-04-30 08:58:50
keywords: iOS,Swift,架构,Xcode,可重用,enum
tags:
    - [iOS]
    - [Swift]
    - [enum]
categories:
    - [iOS]
    - [Swift]
    - [enum]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本快速教程中，我将向您展示如何使用以 `````Swift 4````` 编写的通用解决方案获取 `````Swift枚举类型````` 的所有可能值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 ```Swift 4.2``` 开始，您只需遵循 ```CaseIterable协议``` ，即可获得 ```allCases静态属性``` 。 应该将 ```Swift``` 语言版本升级到最新版本。 🎉🎉🎉

``` Swift
enum ABC: String, CaseIterable {
    case a, b, c
}

print(ABC.allCases.map { $0.rawValue })
```

<!-- more -->

</br>

# **EnumCollection协议方法**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们需要定义一个新的 ```EnumCollection协议``` ，然后在其上进行协议扩展，因此您根本不必编写太多代码。

``` Swift
public protocol EnumCollection: Hashable {
    static func cases() -> AnySequence<Self>
    static var allValues: [Self] { get }
}

public extension EnumCollection {

    public static func cases() -> AnySequence<Self> {
        return AnySequence { () -> AnyIterator<Self> in
            var raw = 0
            return AnyIterator {
                let current: Self = withUnsafePointer(to: &raw) { $0.withMemoryRebound(to: self, capacity: 1) { $0.pointee } }
                guard current.hashValue == raw else {
                    return nil
                }
                raw += 1
                return current
            }
        }
    }

    public static var allValues: [Self] {
        return Array(self.cases())
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从现在开始，您只需要使枚举类型符合 ```EnumCollection协议``` ，就可以使用全新的 ```case方法``` 和 ```allValues属性``` ，其中将包含给定枚举的所有可能值。

``` Swift
enum Weekdays: String, EnumCollection {
    case sunday, monday, tuesday, wednesday, thursday, friday, saturday
}

for weekday in Weekdays.cases() {
    print(weekday.rawValue)
}

print(Weekdays.allValues.map { $0.rawValue.capitalized })
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，枚举的基本类型需要为 ```Hashable``` ，但这并不重要。 但是，此解决方案就像 ```Swift 4``` 一样过去时，请考虑将项目升级到 ```Swift5``` 。 👋

