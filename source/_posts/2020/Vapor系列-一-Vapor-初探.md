---
title: 'Vapor系列 (一) :  Vapor 初探'
description: 'Vapor系列 (一) :  Vapor 初探'
permalink: 'Vapor系列 (一) :  Vapor 初探'
copyright: ture
keywords: >-
  iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding
  和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0
tags:
  - - Vapor 4.0
  - - Vapor 初探
  - - Swift 5.0
categories:
  - - Vapor 4.0
abbrlink: 10784
date: 2020-06-21 20:03:57
---

本章是对服务器端Swift世界的介绍，解释了Swift作为通用编程语言的发展。 我们将讨论该语言的优点和缺点，并讨论为什么Swift是构建后端应用程序的理想选择。 我们将探索Swift生态系统和开源运动，这些运动使得有可能在Linux上创建必要的工具以将Swift变成服务器端语言。 你将了解Vapor，这是本书中将要使用的最流行的Web应用程序框架。

# SWIFT编程语言

Swift是一种兼顾性能的现代，交互式，类型安全的编程语言。该语言的开发由Chris Lattner于2010年开始。该语言的首次公开展示是在2014年的Apple全球开发者大会（WWDC）活动上。大约一年后，它在 [***```GitHub```***](https://github.com/apple/swift/ "") 上开源。多年来，斯威夫特获得了如此多的爱与恨。在早期，由于语言快速变化，编译时间慢，ABI不稳定，缺乏适当的开发人员工具等等，因此受到了广泛的批评。

另一方面，人们喜欢Swift，因为它是一种非常快速的编译语言，这得益于 [***```LLVM```***](http://llvm.org/ "") 基础架构，编译器可以在后台做出一些明智的决定，以获得最佳性能，这就是我们甚至可以将Swift与C进行比较的众多原因之一。在速度方面。它与C系列语言具有很好的互操作性。 Swift具有良好的 [***```内存管理```***](https://docs.swift.org/swift-book/LanguageGuide/MemorySafety.html "") 工具，默认情况下为你提供内存安全性。该语言使用自动引用计数（ [***```ARC```***](https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html "") ），因此不需要垃圾收集器。

<!-- more -->

Swift在某种程度上是其他语言的所有优点的混合体。在Swift中，你可以使用面向对象编程（OOP）范例编写应用程序，但是它也具有仅适用于其他函数式编程语言的某些功能。 Swift被设计为一种通用语言，因此你可以使用它来构建应用程序，服务器，脚本甚至操作系统。 Swift的语法与流行的JavaScript语言非常相似。这意味着Swift就像脚本语言一样易于使用，而不会牺牲任何性能。你可以使用类，结构，枚举，协议，函数，闭包，泛型等。在过去的几年中，该语言增加了许多新功能。

Swift现在已经5岁了，因此我们可以放心地将它视为成熟的语言。过去，缺乏ABI和模块稳定性是许多开发人员的巨大痛苦。幸运的是，Swift编译器基础结构得到了很大的改进，工具也越来越好，并且5.1版既是ABI也是模块稳定的。 Swift的性能非常好，它的内存占用很小，语言本身非常轻巧，但是能够构建出令人惊奇的东西。 Swift迅速成为发展最快的编程语言之一。

# SWIFT生态系统

Swift的开源是Apple的一项大胆举措，因为他们有使用封闭源代码技术的悠久历史。由于这项努力，Swift可以在社区的帮助下更快地成长。 Swift编程语言有一个官方网站。它不仅是一个简单的下载页面，手册和语言说明网站，而且还包含有关编译器，标准库，程序包管理器，核心库，REPL和调试器的信息。它还为服务器端工作组提供了帮助。

由于Swift是开源的，因此任何人都可以为该语言做出贡献。为了首先提交更改，你必须提交提案。接下来，你的提案将由核心团队审核。这个过程称为Swift进化。 Swift进化仪表板是你可以跟踪语言进化建议的地方。这是一个公共网站，你可以使用GitHub上的Swift Evolution存储库提交自己的想法。

作为Xcode开发人员工具的一部分，macOS上正式支持Swift，但Linux也可以使用Swift，官方支持即将推出。刚刚宣布，Swift也将在Windows上提供。这意味着该语言可以在所有主要操作系统上使用。你可以从官方网站下载最新版本。

Swift非常受欢迎，它仍在积极开发中，社区提供了很多帮助，因此很明显，Apple通过开源该语言做出了明智的决定。该公司还发布了许多组件，这些组件是语言基础结构的一部分。苹果还维护LLVM项目的自定义分支，以为Swift构建必要的调试器工具。

- [***```The Swift Programming Language```***](https://github.com/apple/swift "") - Swift
- [***```The LLVM Project```***](https://github.com/apple/llvm-project "")  - debugger
- [***```Standard Library Preview```***](https://github.com/apple/swift-standard-library-preview/ "")  - stdlib (evolution) preview
- [***```The Foundation Project```***](https://github.com/apple/swift-corelibs-foundation "")  - Foundation
- [***```The libdispatch Project```***](https://github.com/apple/swift-corelibs-libdispatch "")  - Dispatch (GCD)
- [***```The XCTest Project```***](https://github.com/apple/swift-corelibs-xctest "")  - XCTest
- [***```Swift Package Manager```***](https://github.com/apple/swift-package-manager "")  - SPM
- [***```Swift Xcode Playground Support ```***](https://github.com/apple/swift-xcode-playground-support "") - PlaygroundSupport

这些存储库是开源Swift基础架构的基本组成部分。 Apple几乎根据Apache 2.0许可证提供了所有产品，因此，如果你要做出贡献，请记住这一点。

开放源代码语言使在Linux上使用Swift成为可能。当前的基础结构使你可以创建功能强大的多线程后端服务器，该服务器的性能可能优于许多其他流行的解决方案。

最初，一个大问题是在Linux上没有用于构建服务器端应用程序的标准解决方案。当时，Swift还是一种年轻且不稳定的语言，每年也都发生了很大的变化。 Linux上的Foundation框架有很多漏洞，因此开发人员难以应付，有时他们在Swift中从底层为低级网络任务进行自定义实现，或者围绕现有C库创建包装。

老实说，这不是维持稳定后端应用程序的理想环境。这些都是大多数服务器端框架逐渐消失的原因。
后来，Swift服务器工作组诞生了，旨在帮助和协调社区中所有服务器端Swift应用程序开发工作。它有一个核心团队，成员身份基于贡献。过去，IBM是一个重要的贡献者，但是不幸的是，从2020年初开始，他们没有参与这项工作。好消息是，开发人员社区似乎足够大且活跃，足以填补这一空白。

苹果还意识到，由于缺乏统一的底层异步网络框架，Swift难以在服务器上使用。迫切需要功能强大的服务器端网络工具，包括具有HTTP和Web套接字服务支持的安全性和加密功能（用于基于SSL / TLS的安全传输）。苹果为此秘密开发了SwiftNIO，它改变了一切。诺曼·毛勒（Norman Maurer）是Netty的幕后功臣，Netty是一个低级异步事件驱动的应用程序框架，旨在为服务器和客户端提供高性能（非阻塞IO）和可伸缩性。 SwiftNIO基于Netty的基础，但是完全是用Swift为服务器编写的。

看来苹果和服务器端工作组都对SwiftNIO有了一些实际计划。它已经是许多开源项目的基础，它还在2019年初获得了对HTTP / 2协议的支持，这使其在社区中更加流行。 SSWG为开放源代码项目提供了一个孵化过程，使其成为在服务器上开发Swift应用程序的标准推荐解决方案。你可以在swift.org上检查当前涉及的项目。

过去，构建服务器端Swift框架是一场艰苦的工作，由于这些极端条件，许多现有框架无法继续开发。早期，Perfect框架非常流行，但后来逐渐被放弃。 Kitura是第二大框架，它得到了IBM的大力支持，因此人们寄予厚望。不幸的是，IBM于2019年底正式关闭了该项目。有一些较小的框架，Zewo随时间增长了很多，但是没有一个像Vapor那样成功。

# Vapor框架

Vapor是在SwiftNIO之上构建的社区驱动的服务器端Swift Web框架。这是一个开源项目，在GitHub上有约1.85万颗星。 Tanner Nelson和Logan Wright是该项目的主要作者，也是SSWG的核心成员。 Vapor有一个成熟的生态系统，其工具设计精良，每个工具仅专注于特定的任务子集。

Vapor具有后端开发人员构建服务器端应用程序所需的一切。该框架具有防弹解决方案，可用于使用Trie节点路由器处理路由，编写交互式CLI工具，解析和序列化多部分和url编码的数据，用户身份验证，并且还具有Web套接字支持。

Vapor的对象关系映射（ORM）框架称为Fluent，它通过为Swift开发人员编写的抽象层支持多个数据库驱动程序，例如SQLite，PostgreSQL，MySQL，MongoDB，使Swift开发人员可以轻松使用数据库操作，而无需使用Swift的最新语言功能。编写SQL查询。

Leaf是为Vapor制作的具有表现力，性能和可扩展性的模板引擎。它的速度很快，因为渲染管道是异步的，因此语法非常易于学习，你可以在几个小时内熟悉Leaf。很棒的是，你可以使用自己的自定义标签扩展可用的Leaf标签集。

Vapor 4还具有全新的任务队列系统，可让你在单独的流程中为长期运行的任务安排作业处理程序。队列处理程序可以通过使用Redis内存存储驱动程序来工作。没有Queue软件包的Redis可在你的Vapor应用程序中使用。

JSON Web令牌在当今非常流行，并且Vapor有一个名为JWT的新程序包，使它们真正易于使用。使用该软件包，你只需几行代码就可以生成，签名和验证JWT令牌，而不会被加密所困扰。

如果你为前端（BFF）编写后端，则必须将其设计为对iOS客户端具有一流的支持。一个特定的问题是向设备发送推送通知消息。幸运的是，Vapor具有针对APNS的内置解决方案-使用APNSwift软件包的Apple Push Notification提供程序。

Vapor 4还提供其他一些新功能，例如异步HTTP客户端，对编写命令行脚本的强大支持，全新的服务配置接口，HTTP2，流，同步内容，背压，正常关闭等。该社区还在构建许多有用的组件，你应该在此处查看库。

官方的Vapor资料库托管在GitHub上，你可以始终参考每个主要Vapor版本的官方文档，但是由于Vapor 4是相当新的，有时你必须查看源代码或在Discord上询问社区。找到拼图的缺失部分。Vapor人非常友好和乐于助人。

# 摘要

在本章中，我们涵盖了整个Swift生态系统，并了解了服务器端工作组如何帮助改进该语言的开源后端工具。 服务器端框架的历史是一个冒险的旅程，但是正如你所看到的，是否涉及构建后端应用程序，Vapor是一个不错的选择。 就像Swift一样，Vapor Web框架在一段时间内发生了很大的变化，但是由于Swift和SwiftNIO，它现在已经是一个成熟的工具，具有所需的性能，并且社区获得了大量的支持者，可以使项目长期存在 时间。 Vapor的生态系统非常庞大，因此你一定会找到所需的组件。 在下一章中，我们将设置必要的工具来构建我们的第一个Vapor应用程序。


