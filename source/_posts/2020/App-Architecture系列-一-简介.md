---
title: 'App Architecture系列(一):  简介'
description: 'App Architecture系列(一):  简介'
permalink: 'App Architecture系列(一):  简介'
copyright: ture
keywords: >-
  iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Protocols,Error Handling,Encoding and Decoding,Interoperability,App
  Architecture
tags:
  - - iOS
  - - Swift
  - - App Architecture
  - - Introduction
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - App Architecture
abbrlink: 47937
date: 2020-05-09 17:11:29
---


# **介绍**

## ***应用架构***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应用程序体系结构是软件设计的一个分支，与应用程序的结构有关。 更具体地说，它既研究了如何将应用程序划分为不同的接口和概念层，又研究了在这些不同组件之间以及内部的不同操作所采取的控制流和数据流路径。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们经常使用简单的框图来说明应用程序的体系结构。 例如，`Apple`的`Model-View-Controller（MVC）`模式描述了三层：模型，视图和控制器层。

![MVC](http://cdn.xuebaonline.com/aain-stp1.png "MVC 体系结构")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上图中的块显示了模式的不同命名层-MVC项目中编写的大多数代码都适合这些层之一。 箭头显示各层如何连接。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，一个简单的框图几乎无法解释该模式在实践中的预期工作方式。这是因为应用程序架构包括对组件如何构造，事件如何在各层中流动，组件应具有相互间的编译时引用或运行时引用，应如何读取或更改不同组件中的数据以及状态改变应采用哪些路径的期望 应用程序结构。

<!-- more -->

## ***模型和视图***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在最高层次上，应用程序体系结构是一组基本类别，不同的应用程序组件被划分为这些类别。我们将这些不同的类别称为层：**符合一些基本规则和职责的接口和其他代码的集合**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些类别中最常见的是模型层和视图层。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模型层是对应用程序内容的抽象描述，不依赖于应用程序框架（如`UIKit`）。因此，它为程序员提供了完全的控制权。模型层通常既包含模型对象（Recordings应用程序中的示例包括文件夹和录音）又包含协调对象（例如，将数据持久保存在磁盘上的对象，例如示例应用程序中的Store）。模型中保留在磁盘上的部分称为文档模型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视图层是依赖于应用程序框架的部分，使模型层可见并且用户可交互，从而将模型层转变为应用程序。在编写iOS应用程序时，视图层几乎总是直接使用`UIKit`。但是，正如我们将看到的，某些体系结构具有环绕UIKit的不同视图层。对于某些定制应用程序，尤其是游戏。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，**模型或视图实例由结构或枚举**而不是对象表示。区别在实践中很重要，但是当我们在模型层中讨论对象，结构和枚举时，我们将它们全部称为三个模型对象，对于视图对象也是如此，它们可能表现为对象，结构或枚举为好。”

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视图对象通常形成一个单一的视图层次结构，其中所有对象都以树状结构连接在一起，屏幕在树干上，屏幕在窗口内，分支和叶子上的视图越来越小。同样，视图控制器通常形成视图控制器层次结构。同时，模型对象不一定形成层次结构-程序中的模型之间可能没有联系。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写视图时，通常是指单个视图对象，例如按钮或标签。编写模型时，通常是指单个模型对象，例如`Recording`或`Folder实例`。在有关该主题的大多数文献中，“模型”根据上下文的含义不同。这可能意味着模型层，模型层中的具体对象，文档模型或模型层中的离散文档。以冗长为代价，我们在本书中尝试阐明不同的含义。

### ***为什么模型和视图的类别如此重要？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，可以在模型和视图层之间没有分隔的情况下编写应用程序。 例如，在一个简单的模态对话框中，通常没有单独的模型数据。 相反，当点击“确定”按钮时，我们直接从用户界面元素读取状态。 通常，尽管没有单独的模型层，但很难确保程序中的动作是根据任何一致的规则进行的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定义模型层的最重要原因是在我们的程序中只有一个真实的来源，它是干净且行为良好的，不受应用程序框架的实现细节的约束。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应用程序框架提供了可用来构建应用程序的基础结构。 在本书中，我们使用Cocoa（具体来说，是UIKit，AppKit或WatchKit，具体取决于目标平台）作为应用程序框架。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果模型层与应用程序框架保持分离，我们可以在应用程序范围之外完全使用它。 我们可以在单独的测试工具中轻松运行它，也可以使用其他应用程序框架编写新的视图层，并在应用程序的Android，macOS或Windows版本中使用我们的模型层。

## **应用程序是反馈回路**


