---
title: 'App Architecture系列(一):  简介'
description: 'App Architecture系列(一):  简介'
permalink: 'App Architecture系列(一):  简介'
copyright: ture
date: 2020-05-09 17:11:29
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Protocols,Error Handling,Encoding and Decoding,Interoperability,App Architecture
tags:
    - [iOS]
    - [Swift]
    - [App Architecture]
    - [Introduction]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [App Architecture]
---


# **介绍**

## ***应用架构***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应用程序体系结构是软件设计的一个分支，与应用程序的结构有关。 更具体地说，它既研究了如何将应用程序划分为不同的接口和概念层，又研究了在这些不同组件之间以及内部的不同操作所采取的控制流和数据流路径。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们经常使用简单的框图来说明应用程序的体系结构。 例如，`Apple`的`Model-View-Controller（MVC）`模式描述了三层：模型，视图和控制器层。

![MVC](http://q8wtfza4q.bkt.clouddn.com/aain-stp1.png "MVC 体系结构")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上图中的块显示了模式的不同命名层-MVC项目中编写的大多数代码都适合这些层之一。 箭头显示各层如何连接。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，一个简单的框图几乎无法解释该模式在实践中的预期工作方式。这是因为应用程序架构包括对组件如何构造，事件如何在各层中流动，组件应具有相互间的编译时引用或运行时引用，应如何读取或更改不同组件中的数据以及状态改变应采用哪些路径的期望 应用程序结构。

<!-- more -->

## ***模型和视图***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在最高层次上，应用程序体系结构是一组基本类别，不同的应用程序组件被划分为这些类别。我们将这些不同的类别称为层：**符合一些基本规则和职责的接口和其他代码的集合**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些类别中最常见的是模型层和视图层。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模型层是对应用程序内容的抽象描述，不依赖于应用程序框架（如`UIKit`）。因此，它为程序员提供了完全的控制权。模型层通常既包含模型对象（Recordings应用程序中的示例包括文件夹和录音）又包含协调对象（例如，将数据持久保存在磁盘上的对象，例如示例应用程序中的Store）。模型中保留在磁盘上的部分称为文档模型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视图层是依赖于应用程序框架的部分，使模型层可见并且用户可交互，从而将模型层转变为应用程序。在编写iOS应用程序时，视图层几乎总是直接使用UIKit。但是，正如我们将看到的，某些体系结构具有环绕UIKit的不同视图层。对于某些定制应用程序，尤其是游戏。