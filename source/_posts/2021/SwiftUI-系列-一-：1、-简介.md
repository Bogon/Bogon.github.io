---
title: SwiftUI 系列(一)_1、 简介
description: SwiftUI 系列(一)：1、 简介
permalink: SwiftUI 系列(一)：1、 简介
copyright: true
date: 2021-08-27 15:03:55
keywords: iOS,Swift,SwiftUI,Swift学习,Swift进阶,Diving Into SwiftUI,初探SwiftUI
tags:
    - [iOS]
    - [Swift]
    - [SwiftUI]
categories:
    - [iOS]
    - [Swift]
    - [SwiftUI]
---

> “SwiftUI is an innovative, exceptionally simple way to build user interfaces across all Apple platforms with the power of Swift.”
>	—— Apple

`SwiftUI` 是苹果相关开发的新方式。2014年，在多年使用 `Objective-C` 编程应用程序之后，苹果推出了一种新的开源语言: `Swift`，震惊了世界。自发布以来，`Swift` 不断更新和发展，最终成为当今最受欢迎和最强大的编程语言之一。

2019年 `SwiftUI` 的推出为该行业的范式转变创造了另一个机会。在多年使用 `UIKit`和 `AppKit` 来创建用户界面之后，`SwiftUI` 为你的应用程序提供了一种全新的 `UI` 创建方式。在很多方面，`SwiftUI` 都比它的前辈更简单、更强大，更重要的是，它在苹果生态系统中是跨平台的。

不过，最重要的一点是 `SwiftUI` 的声明性。多年来，开发人员一直在使用命令式编程模型，处理状态管理问题和复杂的代码。但是现在，我们提供了一种声明性的、直接的方法来构建令人惊叹的用户界面。别担心;如果你喜欢使用 `UIKit` 或 `AppKit` ，请放心，你可以将这些框架与你的 `SwiftUI` 代码集成在一起。

<!--more-->

SwiftUI 仍有改进的空间; 正如Swift从1.0版开始就必须不断发展一样，SwiftUI也将如此。但正如Swift已经成为先进的现代编程语言的行业标准之一，SwiftUI肯定也会走同样的道路。

这里会分享创建用户界面的新方法的所有提示和技巧。你́会发现SwiftUI提供了什么，它是多么强大，开始使用它是多么快速和容易。

创建一个小的颜色匹配游戏。该应用程序的目标是通过从RGB颜色空间中选择颜色来尝试匹配随机生成的颜色:
![](https://github.com/Bogon/mysql_manual/blob/main/SwiftUI/Section1/s_s_1_2_1.png?raw=true)

在本篇中，您将:
+ 学习如何使用Xcode画布创建你的UI与它的代码并排，并看看他们如何保持同步。对一边的更改总是会更新另一边。
+ 为图片中的滑块创建一个可重用的视图。
+ 了解@State属性，并在状态值改变时使用它们更新你的UI。
+ 呈现提示以显示用户的分数。是时候开始了!

# SwiftUI 入门
从章节材料中打开**SwiftUI/RGBullsEye**启动项目。
在项目导航器中，打开**RGBullsEye**组，看看这里是什么: **AppDelegate.swift**，你可能已经习惯了，现在是**RGBullsEyeApp.swift**。这将从**ContentView()**创建应用程序的**WindowGroup**:
```Swift
@main
struct RGBullsEyeApp: App {
    var body: some Scene {
    	WindowGroup {
    	    ContentView()
    	}
    } 
}
```

**@main**属性意味着这个结构体包含应用程序的入口点。应用程序协议负责生成实际运行的静态 **main** 函数。当应用程序启动时，它会显示 **ContentView** 的这个实例，它在 **ContentView.swift** 中定义。它是一个符合 **View** 协议的结构:
```Swift
struct ContentView: View {
  var body: some View {
    Text("Hello, world!")
      .padding()
    } 
}
```

这是 **SwiftUI** 声明 **ContentView** 的主体包含一个显示 **Hello World** 的 **Text** 视图。**padding()** 修饰符在文本周围添加10个点填充。

有一个 **Model** 组包含了定义带有属性和方法的 **Game** 结构的文件，以及一个用于包装红色、绿色和蓝色值的RGB结构。**Color** 扩展提供了一个自定义初始化器来从 **RGB** 结构创建一个 **Color** 视图。

# 预览 **ContentView**
在 **ContentView.swift** 中，在 **ContentView** 结构体下面，**ContentView_Previews** 包含一个包含 **ContentView** 实例的视图:
```Swift
struct ContentView_Previews : PreviewProvider {
  static var previews: some View {
    ContentView()
  }
}
```

在这里，您可以为预览指定示例数据，并可以比较不同的屏幕和字体大小。但是预览在哪里呢?
代码旁边有一大块空白，上面是这样的:
![](https://github.com/Bogon/mysql_manual/blob/main/SwiftUI/Section1/s_s_1_2_2.png?raw=true)

默认情况下，预览使用当前活动的方案。
点击 **Resume** 并等待一段时间来查看预览:
![](https://github.com/Bogon/mysql_manual/blob/main/SwiftUI/Section1/s_s_1_2_3.png?raw=true)

点击文本显示填充框。
> 注意:如果你没有看到 **Resume** 按钮，点击编辑器选项按钮并选择 **Canvas** 如下图：
> 	![](https://github.com/Bogon/mysql_manual/blob/main/SwiftUI/Section1/s_s_1_2_4.png?raw=true)

如果您仍然没有看到 **Resume** 按钮，请确保您正在运行 **macOS Catalina(10.15)** 或更高版本。
> 注意:你可以使用非常有用的键盘快捷键 ***Option-Command-P***，而不是点击 **Resume** 按钮。即使在您更改视图中的某些内容后，**Resume** 按钮没有立即显示，它也可以完成页面刷新。

# 自定义界面

你的 **SwiftUI** 应用程序没有 **storyboard** 或视图控制器。**ContentView.swift** 接管了他们的工作。你可以使用任何代码和拖拽对象库的组合来创建你的 **UI**，并且你可以直接在你的代码中执行类似故事板的操作!最棒的是，一切都保持同步!

**SwiftUI** 是**声明性的**:你声明你想要的**UI**外观，然后 **SwiftUI** 将你的声明转换成高效的代码来完成任务。苹果鼓励您创建尽可能多的视图，以保持您的代码易于阅读。特别推荐可重用的参数化视图。这就像将代码提取到函数中一样，您将在本章的后面创建一个函数。

在这里，主要使用**canvas**，类似于在**Interface Builder (IB)**中布局你的**UI**。

## **SwiftUI** 关键词
在开始创建视图之前，您需要了解一些词汇表。

+ **Canvas** 和 **Minimap** :要获得完整的**SwiftUI**体验，你至少需要**Xcode 11**和**macOS 10.15**。然后你就可以在**canvas**中预览应用的视图，以及代码编辑器。此外，你还可以使用你的代码的**Minimap**:它不会出现在我的截图中，因为我隐藏了它: **Editor long ▸ HideMinimap**。

•修改器:你可以调用修改器方法来修改前景色、字体、填充等等，而不是设置UIKit对象的属性或属性。

•容器视图:如果你以前使用过堆栈视图，你会发现在SwiftUI中使用HStack和VStack容器视图创建这个应用的UI非常容易。还有其他容器视图，包括ZStack和Group。你将在第7章“介绍堆栈和容器”中了解它们。 
