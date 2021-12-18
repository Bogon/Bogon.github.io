---
title: Swift外观设计模式
description: Swift外观设计模式
permalink: Swift外观设计模式
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,外观设计模式,重构,facade design pattern'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 外观设计模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 2848
date: 2020-04-26 10:30:49
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;外观设计模式是复杂子系统上的简化界面。 展示一个使用 ```Swift``` 的快速实例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[```外观模式（Facade pattern）```](https://zh.wikipedia.org/wiki/%E5%A4%96%E8%A7%80%E6%A8%A1%E5%BC%8F "外观模式") ，是软件工程中常用的一种软件设计模式，它为子系统中的一组接口提供一个统一的高层接口，使得子系统更容易使用。



<!-- more -->

![外观设计模式](http://cdn.xuebaonline.com/fp-stp1.png "")

+ 结构
    + Facade

        这个外观类为子系统中Packages 1、2、3提供一个共同的对外接口
    + Clients

        客户对象通过一个外观接口读写子系统中各接口的数据资源。
    + Packages
        
        客户可以通过外观接口读取的内部库。


</br>

# **什么是外观设计模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;外观设计模式名字的由来是源于建筑结构的术语。
> one exterior side of a building, usually the front

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在软件开发中，此定义可以转换为外部所有内容，隐藏所有内部部分。 因此，外观的主要目的是在一些更复杂的丑陋外观上提供漂亮的API。 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，如果你有两个或多个单独的子系统需要一起工作以完成某种任务，则外观设计模式会很方便。 它可以隐藏底层的复杂性，再加上如果隐藏方法内部发生任何更改，则外观的界面仍然可以保持不变。 👍

</br>

# **外观设计模式实例**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我让我们想象一个带有切换按钮的应用程序，该按钮可以打开或关闭特定设置。 如果用户点击它，我们将更改默认存储中的基础设置值，此外，我们还希望播放声音作为给定输入的额外反馈。 这是三个不同的东西组合在一起。 🎶

``` Swift
func toggleSettings() {
    // change underlying settings value
    let settingsKey = "my-settings"

    let originalValue = UserDefaults.standard.bool(forKey: settingsKey)
    let newValue = !originalValue

    UserDefaults.standard.set(newValue, forKey: settingsKey)
    UserDefaults.standard.synchronize()

    // positive feedback sound
    AudioServicesPlaySystemSound(1054);

    // update UI
    self.switchButton.setOn(newValue, animated: true)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;恭喜，我们已经创建了最简单的外观！ 如果你对这段代码熟悉，则意味着您过去已经使用了 ```Facade``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，事情可能会更加复杂，例如，如果你有一个 ```Web``` 服务，并且需要上传一些数据和附件文件，那么你还可以编写一个 ```Facade``` 来隐藏子系统的底层复杂性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;外观设计模式确实很容易创建，有时你甚至不会注意到正在使用外观模式，但是它们对于隐藏，解耦或简化事物非常有用。 😉

</br>

# 更多阅读

<br>

+ [```Design Patterns in Swift #3: Facade and Adapter```](https://www.appcoda.com/design-pattern-structural/ "")

+ [```Top 5 Design Patterns in Swift for iOS App Development```](https://rubygarage.org/blog/swift-design-patterns "")
