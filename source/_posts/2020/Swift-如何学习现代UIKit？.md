---
title: Swift 如何学习现代UIKit？
permalink: Swift 如何学习现代UIKit？
copyright: ture
date: 2020-04-28 16:31:06
keywords: iOS,Swift,UIKit, 用户体验, 学习, 可重用, SwiftUI
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [SwiftUI]

categories:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [SwiftUI]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与我一起采取第一步，学习如何使用 ```UIKit``` 框架构建用户界面。 在 ```Swift``` 中以编程方式编写，不适用 ```storyboards``` 。

</br>

# **UI frameworks in 2020**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我总是告诉所有人，工作中最困难的部分是建立适当的用户界面。 提供最佳的用户体验可能是一项挑战，因为设计师必须遵循人机界面指南，设计出美观的设计，有时还要与客户打交道，以为最终用户找到最佳解决方案。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```Swift``` 实现图形用户界面的可用选项有哪些？

<!-- more -->

</br>

# **SwiftUI**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果在 ```2019年``` 发布了```SwiftUI```，该框架仍然热脆，或者我应该说半熟吗？ 在 ```WWDC``` 宣布之后，很多人立即开始使用 ```SwiftUI``` ，我对最初的反馈感到非常不满意。 ```SwiftUI``` 是未来，这是肯定的。 我相信 ```Apple``` 会在框架上做出很多努力，以使其更好。 从概念上讲，它已经很不错了，实现很简单，但是我仍然面临的最大问题是，我还没有看到 ```SwiftUI``` 如何改善我的日常工作。 🤔

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;声明性接口定义是当今的热门话题，但是我们真的需要它吗？ 我的意思是，基本原型制作速度非常快，但是，如果你必须解决复杂的问题（甚至是一些琐碎的问题，例如设置滚动视图的偏移），则必须与系统抗争或提出自己的 ```UIViewRepresentable``` 对象。

***```The truth is: if you choose SwiftUI you still have to interact a LOT with UIKit as well.```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，人们有各种各样的需求。 由于 ```Flutter``` ＆ ```React Native```，恕我直言 ```SwiftUI``` 在这里。 开发人员喜欢这些框架。 苹果必须想出一种新的解决方案来与他们抗衡，因为他们希望越来越多的有才华的 ```Swift``` 编码器能够在 ```iOS``` 应用程序上本机工作，而不是在混合应用程序上工作。 从新手的角度来看，选择 ```SwiftUI``` 确实很迷人。 即使在这个早期阶段，我仍然可以给你留下深刻的印象。

## ***是否可以学习 SwiftUI?***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是的，绝对可以，如果你已经熟悉 ```UIKit``` ，那就去学习 ```SwiftUI``` 。 如果你完全没有 ```UIKit``` 的经验，你仍然可以精通 ```SwiftUI``` ，但是你可能会发现自己在寻找很多与 ```UIKit``` 相关的问题。 🔍

## ***你应该学习SwiftUI还是UIKit？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好吧，知道我所知道的我将从UIKit开始。 “和这个酷孩子在一起”确实很诱人，但是值得跳过整个课程吗？这也是我的想法：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我要说的是 ```SwiftUI``` 的存在并没有以某种方式使 ```UIKit``` 变得过时：如果你打算在未来三年内获得 ```iOS``` 开发工作，那么知道如何使用 ```UIKit``` 将会是一项必然的要求。

</br>

# **UIKit**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```UIKit``` 现在可在以下平台上使用：```iOS（iPadOS）```，```tvOS```，```macOS（Catalyst）```。 除了```watchOS``` 以外，几乎所有这些都已包含在内。 该框架本身是一个巨大的框架，因为它包含了你可以在 ```iOS``` 上看到和使用的每个基本构建块。 它不仅是视图，还包括控制器，导航，响应器等等。

## ***你应该从哪里开始学习UIKit？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你是否正在寻找现代 ```UIKit``` 教程？ 好吧，这可能非常困难，因为大多数书籍和课程都已过时。 但是，我必须推荐一个 ```肖恩·艾伦（Sean Allen）``` 真正有用的视频课程。 他正在构建一个完整的应用程序，向你教授网络基础知识，集合视图，搜索控制器的适当状态管理以及许多小型实践，如果你想开始作为 ```iOS``` 开发人员的职业，这些实践将非常有用。 这就像一个面试的外卖项目教程。 真的很有用！ 🎬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以选择加入我的行列，并每周学习UIKit的工作原理。 我将发布有关过去学习的所有最佳实践的文章。 这将是100％用最新版本的Swift编写的，没有 ```storyboards``` 或 ```nibs``` 。 这些将是更长的文章，每一次我将专注于对现实项目有用的实践课程。 有什么计划？

**我即将发布的UIKit教程***

+ 如何使用UIKit启动iOS项目？

    项目设置，基本UIKit概念，AppDelegate，SceneDelegate

+ 了解UIKit导航的工作方式

    UINavigationController，UITabBarController，UISplitViewController，UIPageViewController

+ 关于UIViewController类的所有信息

    UIViewController生命周期，子类化，使用子视图控制器的合成

+  UIView基础知识，使用自定义视图

    UIView生命周期，布局系统，自定义UIView子类，有关图层的一些知识

+ 具有UILabel，UIButton，UIImageView的布局锚点

    了解如何通过使用布局锚点和基本的UIKit组件来构建屏幕

+ 使用不同的数据源修改UITableView

    使用搜索字段，远程图像加载等。

+  UI堆栈，状态，警报，过渡，动画

    UIAlertController，UIActivityIndi​​catorView和一些奇特的效果

+ 使用UICollectionView构建复杂的用户界面

    合成布局，再加上我对基于SwiftUI的可重用单元格有了新的疯狂想法...

+ 使用UIStackView和UIScrollView创建复杂的输入表单

    使用：UITextField，UISlider，UIStepper，UIDatePicker，UISegmentedControl，UISwitch

+ 支持更大的屏幕，iPad，macOS（Catalyst）和黑暗模式

    Windows，适应性，拖放基础，触摸识别器

*请注意：这只是一个基本框架，将来内容可能会有所不同。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我计划在今年晚些时候发布第一期。 当我准备好内容之后，每个星期你都应该期待有一篇新的 ```UIKit``` 文章，其中包含一些可以自己解决的小任务（也许你需要做一些研究工作）。

</br>

# **你首选的学习方法是什么？**

+ ***图书***
+ ***```Swift playground books```***
+ ***视频课程***
+ ***撸代码实践***
