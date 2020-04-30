---
title: Swift编写的20个iOS库(一)
permalink: Swift编写的20个iOS库(一)
copyright: ture
date: 2020-04-30 17:37:45
keywords: iOS,Swift,函数式编程,iOS库
tags:
    - [iOS]
    - [Swift]
    - [三方类库]
categories:
    - [iOS]
    - [Swift]
    - [三方类库]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我在 ```github``` 上收集了最好的开源 ```Swift框架``` ，这些框架将帮助你在2020年加快移动应用程序的开发速度。更多精彩的类库持续更新中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，最好使用第三方框架而不是重新发明轮子，但是你首先要提出一些重要问题：

+ 我真的需要 ```library``` 吗？
+ 我应该怎么用？
+ 它会得到支持吗？
+ 如果是 ```bug``` 怎么办？ 🐛

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在项目中添加依赖项也会导致技术负担。 不要懒惰，首先学习基础技术（或者至少阅读它，或者问一个真正了解它的人），如果你确定该框架是一个不错的选择，那就给它一个机会。 在此列表中，我尝试收集了大多数开发人员社区使用的面向未来的，可靠的，知名的iOS库。 ⭐️


<!-- more -->

</br>

**```选择标准```**

+ 该框架必须用 ```Swift``` 编写
+ 库不应该是特定于设计的（对此有 ```cocoacontrols``` ）
+ 它应该是一个运行时框架，而不是一个工具包（也就是导入 ```XY``` ）
+ 应该有一些程序包管理器支持（ ```Carthage``` ， ```CocoaPods``` ， ```SPM``` ）
+ 它必须支持 ```Swift``` 的最新主要版本
+ ```github``` 上必须至少有 ```1000颗星星``` 

</br>

# **🌎与网络相关的库**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正在连接...

## [***```Alamofire```***](https://github.com/Alamofire/Alamofire "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Alamofire``` 是用 ```Swift``` 编写的 ```HTTP网络库``` 。

## [***```Kingfisher```***](https://github.com/onevcat/Kingfisher "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Kingfisher``` 是一个功能强大的 ```纯Swift库``` ，用于从 **Web下载和缓存图像** 。 它为你提供了使用 ```纯Swift``` 方法在下一个应用程序中处理远程图像的机会。

## [***```Starscream```***](https://github.com/daltoniam/Starscream "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Starscream``` 是 ```Swift``` 中符合标准的 ```WebSocket``` （ [***```RFC 6455```***](http://tools.ietf.org/html/rfc6455 "") ）客户端库。

</br>

# **📦服务器端Swift**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;听...

## [***```Vapor```***](https://github.com/vapor/vapor "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Vapor``` 是 ```Swift``` 的 **Web框架** 。 它为你的下一个网站， ```API``` 或 ```云项目``` 提供了精美而易用的基础。

## [***```SwiftNIO```***](https://github.com/apple/swift-nio "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SwiftNIO``` 是跨平台的 **异步事件驱动的网络应用程序框架** ，用于快速开发可维护的高性能协议服务器和客户端。

</br>

# **🔨响应式编程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Streams``` ,  ```observers``` , 等...


## [***```ReactiveCocoa```***](https://github.com/ReactiveCocoa/ReactiveCocoa "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ```ReactiveSwift``` 提供了可组合的，声明性的和灵活的基元，这些基元是围绕随着时间流逝的价值流这一宏伟概念而构建的。 这些原语可用于统一表示常见的可可和通用编程模式，这些模式从根本上是一种观察行为。

## [***```RxSwift```***](https://github.com/ReactiveX/RxSwift "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Rx``` 是通过 ```Observable <Element>``` 接口表示的通用计算抽象。 这是 ```Rx``` 的 ```Swift版本``` 。

</br>

# **🦋动画**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UIView.animated...```

## [***```Hero```***](https://github.com/HeroTransitions/Hero "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Hero``` 是用于构建 ```iOS视图控制器过渡``` 的库。 它在 ```UIKit``` 繁琐的 ```过渡API``` 之上提供了一个声明性层-使自定义过渡对于开发人员而言是一项轻松的任务。


## [***```Spring```***](https://github.com/MengTo/Spring "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 一个库，用于简化 ```Swift``` 中的 ```iOS动画``` 。

</br>

# **📐自动布局助手**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Anchors vs...```

## [***```SnapKit```***](https://github.com/SnapKit/SnapKit "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SnapKit``` 是一种 ```DSL``` ，可在 ```iOS``` 和 ```OS X``` 上简化自动布局。

## [***```TinyConstraints```***](https://github.com/roberthein/TinyConstraints "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```TinyConstraints``` 是使 ```Auto Layout``` 更适合人类使用的语法糖。

</br>

# **❌测试**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```TDD FTW...```

## [***```Quick```***](https://github.com/Quick/Quick"")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Quick``` 是 ```Swift``` 和 ```Objective-C``` 的行为驱动开发框架。

## [***```Nimble```***](https://github.com/Quick/Nimble "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使用 ```Nimble``` 表示 ```Swift``` 或 ```Objective-C``` 表达式的预期结果。

</br>

# **⚙️实用工具**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我错过了什么？

## [***```PromiseKit```***](https://github.com/mxcl/PromiseKit  "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```PromiseKit``` 是对任何具有 ```swiftc``` 平台的 **Promise的深思熟虑和完整的实现** 。

## [***```CryptoSwift```***](https://github.com/krzyzanowskim/CryptoSwift  "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```CryptoSwift``` 是在 ```Swift``` 中实现的越来越多的标准和**安全密码算法**集合。

## [***```SwiftDate```***](https://github.com/malcommac/SwiftDate "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SwiftDate``` 是确定的工具链，可在所有 ```Apple平台``` 上甚至在 ```Linux``` 和 ```Vapor``` 或 ```Kitura``` 等 ```Swift Server Side框架``` 上操纵和显示日期和时区。

## [***```SwiftyBeaver```***](https://github.com/SwiftyBeaver/SwiftyBeaver "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在 ```Swift 2、3和4、5``` 中开发和发布期间的便捷日志记录。

## [***```Swinject```***](https://github.com/Swinject/Swinject "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swinject``` 是 ```Swift``` 的轻量级 ```依赖注入框架``` 。

## [***```SwiftyJSON```***](https://github.com/SwiftyJSON/SwiftyJSON "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SwiftyJSON```  使你可以轻松地在 ```Swift``` 中处理 ```JSON数据``` 。


</br>

# **总结**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你正在寻找更多的 ```Swift库``` ，则可以随时在 [***```github```***](https://github.com/topics/swift "") 上探索最受欢迎的 ```Swift库``` ，请记住：**始终通过包管理器连接你的依赖项**。 😉