---
title: appleOS的Networking示例
permalink: appleOS的Networking示例
copyright: ture
date: 2020-04-30 09:17:29
keywords: iOS,Swift,架构,Bonjour,UDP/TCP sockets,streams,CoreBluetooth,watch APIs
tags:
    - [iOS]
    - [Swift]
    - [appleOS Networking]
categories:
    - [iOS]
    - [Swift]
    - [appleOS Networking]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何将 ```Bonjour``` 与 ```UDP/TCP套接字```， ```streams``` 一起使用，以及如何通过 ```CoreBluetooth``` 或 ```watch API``` 进行通信。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想学习如何使用 [***```Bonjour```***](https://help.dyn.com/bonjour-and-dns-discovery/ "") 发现服务在设备之间 [***```建立网络连接```***](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Articles/UsingSocketsandSocketStreams.html#//apple_ref/doc/uid/CH73-SW2 "") ，那么你来对地方了。 在这篇文章中，我将向你展示基础知识，例如，你将能够从 ```手表``` 或 ```iOS设备``` 制作遥控器，以便将数据直接发送到任何 ```tvOS``` 或 ```macOS``` 机器。

<!-- more -->

</br>

# **多平台开发**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要创建支持多个平台的应用程序，则可能要针对 ```macOS``` ， ```iOS``` ， ```watchOS``` ， ```tvOS``` 以及 ```Linux``` 。 下面的代码段将帮助你检测正在使用的当前平台。

``` Swift
#if os(iOS)
    let platform = "iOS"
#elseif os(macOS)
    let platform = "macOS"
#elseif os(watchOS)
    let platform = "watchOS"
#elseif os(tvOS)
    let platform = "tvOS"
#elseif os(Linux)
    let platform = "linux"
#else
    let platform = "unknown"
#endif

print(platform)
```

</br>

# **Network connection 101**

## ***Bonjour发现服务***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Bonjour``` ，也称为零配置网络，可使用 ```行业标准IP协议``` 在局域网上自动发现设备和服务。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，基本上，你可以使用 [***```Bonjour```***](https://www.eltima.com/dev/post/99996366184/using-bonjour-in-swift "") 在本地网络上找到网络设备。 如果你想弄清楚连接到 ```LAN的设备列表``` ，这将非常方便。 使用 ```NetService类``` 将帮助你检测具有它们支持的可用服务的所有设备。 整个 ```Bonjour API``` 相对较小且编写良好。 从服务器方面，你只需创建 ```NetService对象```  ，并通过 ```NetServiceDelegate监听``` 传入的连接。

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须与所有设备/模拟器都在同一WiFi网络上。


## ***TCP 连接***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```TCP``` 在通过 ```IP网络``` 进行通信的主机上运行的应用程序之间，提供可靠，有序且经过错误检查的八位位组（字节）流交付。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借助 [***```TCP```***](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE "") ，你可以建立可靠的网络连接。  Foundation 中有一个 Stream类 ，可帮助你在设备之间来回发送数据。 如果你具有可以正常使用的 NetServiceDelegate 连接形式，则只需侦听流事件以通过 StreamDelegate 处理传入数据。 我不想详细介绍，只需下载 [***```示例代码```***](https://gitlab.com/theswiftdev/networking-for-appleos "") 并亲自检查一下即可。

## ***UDP 连接***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 [***```UDP```***](https://developer.apple.com/library/archive/samplecode/UDPEcho/Listings/Read_Me_About_UDPEcho_txt.html "") ，计算机应用程序可以将消息（在这种情况下称为数据报）发送到 ```Internet协议（IP）网络``` 上的其他主机。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果查看有关 [***```UDP```***](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE "") 的文章，你会清楚地看到与 ```TCP``` 的主要区别在于该协议不能保证你数据传输的安全。 数据可能无序到达或重复到达，这是处理这些情况的任务，但是 ```UDP``` 很快。 如果要构建文件传输应用程序，则绝对应该使用 ```TCP``` ，但是例如控制实时动作游戏 ```UDP``` 就足够了。

## ***CocoaAsyncSocket***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个库非常好用，对于所有想快速建立网络连接的人来说，它可能是最好的选择，因为与实现委托相比，它所需的代码更少。 当然，你仍然需要在整个内容上方添加 ```Bonjour层``` ，但这很好。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你使用的是 [***```CocoaAsyncSocket```***](https://github.com/robbiehanson/CocoaAsyncSocket "") ，你会发现该 ```API``` 很简单，只有5分钟后，我才能相对容易地了解发生了什么，并且能够通过网络发送消息。 它支持所有 ```Apple平台``` ，你可以使用 ```Carthage``` 或 ```CocoaPods``` 无缝集成。

## ***CoreBluetooth APIs***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我对 ```CoreBluetooth框架API``` 并不是很熟悉，这就是为什么我基本上只是遵循并把这个 [***```tutsplus.com```***](https://code.tutsplus.com/tutorials/ios-7-sdk-core-bluetooth-theoretical-overview--mobile-20728 "") 代码示例移植到 ```Swift 4``` 的原因。老实说，我觉得 ```API``` 与所有这些凌乱的委托函数过于复杂。 如果必须在 ```CoreBluetooth``` 或 ```CocoaAsyncSocket``` 之间进行选择，那么我会选择最后一个。 所以，是的，显然我不是蓝牙专家，但是这个小项目对 ```CB框架``` 内部的工作原理是一个很好的第一印象。

## ***WatchConnectivity framework***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在 ```iOS``` 和 ```watchOS``` 之间进行通信，则可能会使用 ```WatchConnectivity框架``` ，尤其是 ```WKSession类``` 。 它实际上并没有那么复杂，只需几行代码，你就可以将手表的信息发送到 ```iPhone``` 。 你可以阅读 [***```这篇文章```***](https://www.hackingwithswift.com/read/37/8/communicating-between-ios-and-watchos-wcsession "") ，但是，如果下载 [***```源代码```***](https://gitlab.com/theswiftdev/networking-for-appleos "")，则在包中将发现几乎相同的内容。