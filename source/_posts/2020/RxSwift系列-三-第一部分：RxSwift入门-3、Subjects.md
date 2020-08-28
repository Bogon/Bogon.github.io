---
title: 'RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects'
description: 'RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects'
permalink: 'RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects'
copyright: ture
date: 2020-08-28 16:10:27
keywords: iOS,Swift,RxSwift
tags:
    - [iOS]
    - [RxSwift]
categories:
    - [iOS]
    - [RxSwift]
---

您已掌握了什么是可观察对象，如何创建可观察对象，如何订阅它以及完成后如何处理。 可观察对象是RxSwift的基本组成部分，但是开发应用程序时的普遍需求是在运行时将新值手动添加到可观察对象上，然后将其发送给订阅者。 您想要的东西既可以充当可观察对象，又可以充当观察者角色。 那就是所谓的主题。

在本篇中，您将学习RxSwift中不同类型的主题，了解如何处理每个主题，以及为什么要根据一些常见用例选择一个主题。 您还将学习中继，中继是围绕主题的包装。

我们待会再拆开！