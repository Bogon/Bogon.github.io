---
title: iOS VIPER架构深入实践
permalink: iOS VIPER架构深入实践
copyright: ture
date: 2020-04-28 16:52:14
keywords: iOS,Swift,VIPER, 架构, architecture, 可重用, tutorial
tags:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
categories:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```VIPER``` 架构编写可伸缩的 ```iOS``` 代码，并牢记一些 ```MVVM``` 和 ```MVC``` 技巧和协调器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在软件工程中，[***```设计模式（design pattern）```***](https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_(%E8%AE%A1%E7%AE%97%E6%9C%BA) "") 是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案。这个术语是由埃里希·伽玛（Erich Gamma）等人在1990年代从建筑设计领域引入到计算机科学的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设计模式并不直接用来完成代码的编写，而是描述在各种不同情况下，要怎么解决问题的一种方案。面向对象设计模式通常以类别或对象来描述其中的关系和相互作用，但不涉及用来完成应用程序的特定类别或对象。设计模式能使不稳定依赖于相对稳定、具体依赖于相对抽象，避免会引起麻烦的紧耦合，以增强软件设计面对并适应变化的能力。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并非所有的软件模式都是设计模式，设计模式特指软件“设计”层次上的问题。还有其他非设计模式的模式，如架构模式。同时，算法不能算是一种设计模式，因为算法主要是用来解决计算上的问题，而非设计上的问题。

<!-- more -->

</br>

# **Swift 设计模式和 iOS 架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件设计模式基本上是关于如何解决特定（但通常是结合业务场景）情况的通用模板。 结构模式对整个代码库影响更大，它们是高级通用模板。 请记住一件事：
> 架构没有好坏之分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选择的武器仅取决于情况，但您知道一切都是相对的。 让我们快速快速地了解所有 ```iOS``` 设计模式和体系结构，并开始学习 [***```VIPER```***](http://www.xuebaonline.com/iOS%E9%A1%B9%E7%9B%AE%E6%9E%B6%E6%9E%84%EF%BC%9A%E4%BD%BF%E7%94%A8VIPER/ "") 。 🐍

</br>

# **Swift 设计模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从基础开始吧？ 如果不熟悉 ```UIKit``` ，我们会发现发明了许多设计模式，也许您已经知道其中一些。 但是，嘿，由于我们没有太多时间，我想谈谈 VIPER ，让我们看看使用 ```MVC``` 模式构建 ```UIKit``` 应用程序的基本原理。