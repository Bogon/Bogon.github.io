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

``` Swift
--- Example of: PublishSubject ---
1
2
```

有了这个温柔的介绍，现在是时候学习所有主题。

# 什么是subjects？

Subjects既充当可观察者又充当观察者。您之前看过他们如何接收事件，也可以订阅。该主题收到了.next事件，并且每个收到事件后，它就会转身并将其发送给其订阅者。
RxSwift中有四种主题类型，还有两种包装主题的中继类型：
+ PublishSubject：开始为空，仅向订阅者发出新元素。
+ BehaviorSubject：从初始值开始，然后重播它或最新的元素以
新订户。
+ ReplaySubject：使用缓冲区大小初始化，并将维护元素的缓冲区
达到该大小并重新播放给新订户。
+ AsyncSubject：仅在序列中最后一个.next事件，并且仅当
主题收到一个.completed事件。这是很少使用的主题，而您
在本书中不会使用它。为了完整起见，在此列出。
+ PublishRelay和BehaviorRelay：这些包装它们的相对主题，但仅接受.next事件。您根本无法在中继上添加.completed或.error事件，因此它们非常适合非终止序列。

依次进行这些操作，您将学到更多有关主题的知识，relays，以及下一步如何使用它们。

> 注意：您是否注意到了本章中介绍的其他导入RxCocoa？嗯...这是原因：这些relays取代了一个称为变量的类，该类在RxSwift中定义，但现在已弃用。但是，relays在RxCocoa，即使它们包装了RxSwift中定义的主题。这本书本章将介绍relays，因为它们与主题非常相似，但其余部分RxCocoa在后面的章节中介绍。

# 处理发布元素

当您只是希望订阅者收到新通知时，发布主题会派上用场从订阅点开始的事件，直到取消订阅或主题已以.completed或.error事件终止。
在下面的大理石图中，第一行是发布主题，第二行是第三行是订户。向上的箭头表示订阅，而向下的箭头表示发出的事件。

![RxSwiftPlayground](https://cdn.xuebaonline.com/rxswift-3-1-1.png "")

将1添加订阅后，第一个订阅者订阅，因此它没有收到事件。不过，它确实得到了2和3。而且因为第二个订阅者没有加入有趣的是，直到添加2之后，它只会得到3。

返回playground，将此代码添加到同一示例的底部：

```Swift
let subscriptionTwo = subject
    .subscribe { event in
        print("2)", event.element ?? event)
    }
 ```

事件具有可选的element属性，它将包含发出的元素.next事件。您可以在此处使用nil-coalescing运算符来打印元素（如果存在）是一个否则，您将打印事件。

正如预期的那样，subscribeTwo尚未打印任何内容，因为它在1和2被发射了。现在添加以下代码：

```Swift
subject.onNext("3")
```

3打印两次，一次为subscriptionOne，一次为subscriptionTwo。

```Swift
3
2) 3
```

添加此代码以终止subscriptionOne，然后将另一个.next事件添加到该对象：

```Swift
subscriptionOne.dispose()
subject.onNext("4")
```

因为已处理subscriptionOne，所以仅为预订2）打印值4。

```Swift
2) 4
```

当发布对象收到.completed或.error事件时，也称为停止事件，它将向新订阅者发出该stop事件，并且不再发出.next事件。但是，它将停止事件重新发送给将来的订户。将此代码添加到例：

```Swift
// 1
subject.onCompleted()
// 2
subject.onNext("5")
// 3
subscriptionTwo.dispose()
let disposeBag = DisposeBag()
// 4
subject
 .subscribe {
    print("3)", $0.element ?? $0)
 }.disposed(by: disposeBag)
subject.onNext("?")
```

这是您所做的：
+ 使用on（.completed）的便捷方法，将.completed事件置于主题上。 这有效地终止了对象的可观察序列。
+ 在主题上添加另一个元素。 不过，由于主题已经终止，因此不会发出和打印。
+ 完成后，别忘了处理订阅！
+ 订阅主题，这次将其一次性用品添加到处理袋中。

也许新订户3）将使主题重新投入使用吗？ 不，但是您仍然会收到.completed事件。

```Swift
2) completed
3) completed
```

实际上，订阅一旦终止，就会将其停止事件重新发送给将来的订阅者。 因此，在代码中包括停止事件的处理程序是个好主意，不仅可以在终止时通知您，还可以在您订阅时已经终止的情况下得到通知。
有时这可能是导致细微错误的原因，所以要当心！

在对时间敏感的数据建模时（例如在在线出价应用中），您可以使用发布主题。 提醒上午10:01参加的用户，在上午9:59拍卖仅剩1分钟，这没有任何意义。 也就是说，除非您喜欢出价应用程序的1星评价。

有时您想让新订阅者知道什么是最新发出的元素，即使该元素是在订阅之前发出的。 为此，您有一些选择。

# Working with behavior subjects


