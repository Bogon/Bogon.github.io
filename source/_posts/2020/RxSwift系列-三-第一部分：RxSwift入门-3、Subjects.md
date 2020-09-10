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

你已掌握了什么是可观察对象，如何创建可观察对象，如何订阅它以及完成后如何处理。 可观察对象是RxSwift的基本组成部分，但是开发应用程序时的普遍需求是在运行时将新值手动添加到可观察对象上，然后将其发送给订阅者。 你想要的东西既可以充当可观察对象，又可以充当观察者角色。 那就是所谓的主题。

在本篇中，你将学习RxSwift中不同类型的主题，了解如何处理每个主题，以及为什么要根据一些常见用例选择一个主题。 你还将学习中继，中继是围绕主题的包装。

我们待会再拆开！

# 开始

在入门项目文件夹RxPlayground中运行./bootstrap.sh，它将打开本章的项目，然后在项目导航器中选择RxSwiftPlayground。 你将从一个简单的例子开始，为泵加注。 将以下代码添加到你的 playground ：

```Swift
example(of: "PublishSubject") {
	let subject = PublishSubject<String>()
}
```

你刚刚创建了一个PublishSubject。 它之所以得名，是因为它像报纸发行商一样，会接收信息，然后转过来将其发布给订阅者，可能是先修改了某些信息之后。 它是String类型，因此只能接收和发布字符串。 初始化后，就可以接收字符串了。

将以下代码添加到你的示例中:

```Swift
subject.onNext("Is anyone listening?")
```

这将在主题上放置一个新字符串。 但是，由于没有观察者，因此尚未打印出任何内容。 通过订阅该主题来创建一个。 将以下代码添加到示例中：

```Swift
let subscriptionOne = subject
 .subscribe(onNext: { string in
 	print(string)
})
```
就像上一章一样，你创建了对主题的订阅，打印.next事件。 但是，nuthin仍然显示在Xcode的输出控制台中。 这不是很有趣吗？ 你很快就会了解不同的主题类型，从而了解更多有关为什么发生这种情况的信息。

这里发生的是PublishSubject仅向当前订阅者发出。 因此，如果你以前没有向其添加内容时订阅过，那么你订阅时就不会得到它。 想想树木倒下的比喻。 如果一棵树倒下而没人在那里听到，这是否使你的非法伐木业务成功了？

要解决问题，请将此代码添加到示例的末尾：

```Swift
subject.on(.next("1"))
```

请注意，由于您将发布主题定义为String类型，因此只有字符串可能会放在上面。现在，由于subject具有订阅者，它将发出附加值：

```
--- Example of: PublishSubject ---
1
```

以类似于订阅运算符的方式，on(.next(_ :)）是您添加将新的.next事件传递给主题，并将元素作为参数传递。就像订阅，提供主题的快捷语法。将以下代码添加到示例中：

```Swift
subject.onNext("2")
```

onNext（_ :)与on（.next（_））的作用相同。在眼睛上更容易一点。和现在2也被打印了。




