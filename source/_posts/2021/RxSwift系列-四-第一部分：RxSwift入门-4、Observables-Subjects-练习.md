---
title: 'RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习'
description: 'RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习'
permalink: 'RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习'
copyright: true
keywords: 'iOS,Swift,RxSwift'
tags:
  - - iOS
  - - RxSwift
categories:
  - - iOS
  - - RxSwift
abbrlink: 4957
date: 2021-04-12 10:23:02
---

到此为止，已经了解了可观察性和不同类型的 `Subjects` 的工作原理，并且学习了如何在 `Swift playground` 上进行创建和练习。
但是，要在日常开发情况下看到可观察对象的实际使用可能会有些挑战，例如将UI绑定到数据模型，或者展示一个新的控制器并从中获取输出。

这次一起尝试使用新的观察者对象，实践新的实例。

在这一节中，我们将使用 `RxSwift` 和你新的可观察对象的超能力创建一个应用程序，让用户创建漂亮的照片拼贴-响应式。