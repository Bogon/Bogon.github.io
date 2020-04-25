---
title: Swift中快速简单的工厂设计模式
permalink: Swift中快速简单的工厂设计模式
copyright: ture
date: 2020-04-25 13:15:16
keywords: iOS,UIKit,设计模式,构造函数,Swift,工厂模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [工厂模式]
    - [构造函数]
    - [静态工厂方法]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次，我们来讨论简单的工厂设计模式，该模式使用Swift以一种非常简单的方式封装对象创建。

# **使用 switch-case 实现简单的工厂模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种模式的目标是封装一些经常变化的东西。 想象一下应用程序的调色板。 你可能必须每天根据设计师的最新习惯来更改颜色。 如果你不得不手动搜索和替换每个单独的颜色代码实例，那将给你带来极大的不便。 因此，让我们在Swift中创建一个简单的工厂，该工厂可以根据给定的样式返回颜色。 🎩


<!-- more -->

