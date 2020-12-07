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

你已掌握了什么是可观察对象，如何创建可观察对象，如何订阅它以及完成后如何处理。 可观察对象是RxSwift的基本组成部分，但是开发应用程序时的普遍需求是在运行时将新值手动添加到可观察对象上，然后将其发送给订阅者。 你想要的东西既可以充当可观察对象，又可以充当观察者角色。 那就是所谓的元素。

在本篇中，你将学习RxSwift中不同类型的元素，了解如何处理每个元素，以及为什么要根据一些常见用例选择一个元素。 你还将学习 ```relay``` ， ```relay``` 是围绕元素的包装。

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

这将在元素上放置一个新字符串。 但是，由于没有观察者，因此尚未打印出任何内容。 通过订阅该元素来创建一个。 将以下代码添加到示例中：

```Swift
let subscriptionOne = subject
 .subscribe(onNext: { string in
 	print(string)
})
```
就像上一章一样，你创建了对元素的订阅，打印.next事件。 但是，nuthin仍然显示在Xcode的输出控制台中。 这不是很有趣吗？ 你很快就会了解不同的元素类型，从而了解更多有关为什么发生这种情况的信息。


<!-- more -->

这里发生的是PublishSubject仅向当前订阅者发出。 因此，如果你以前没有向其添加内容时订阅过，那么你订阅时就不会得到它。 想想树木倒下的比喻。 如果一棵树倒下而没人在那里听到，这是否使你的非法伐木业务成功了？

要解决问题，请将此代码添加到示例的末尾：

```Swift
subject.on(.next("1"))
```

请注意，由于你将发布元素定义为String类型，因此只有字符串可能会放在上面。现在，由于subject具有订阅者，它将发出附加值：

```
--- Example of: PublishSubject ---
1
```

以类似于订阅运算符的方式，on(.next(_ :)）是你添加将新的.next事件传递给元素，并将元素作为参数传递。就像订阅，提供元素的快捷语法。将以下代码添加到示例中：

```Swift
subject.onNext("2")
```

onNext（_ :)与on（.next（_））的作用相同。在眼睛上更容易一点。和现在2也被打印了。

``` Swift
--- Example of: PublishSubject ---
1
2
```

有了这个温柔的介绍，现在是时候学习所有元素。

# 什么是subjects？

Subjects既充当可观察者又充当观察者。你之前看过他们如何接收事件，也可以订阅。该元素收到了.next事件，并且每个收到事件后，它就会转身并将其发送给其订阅者。
RxSwift中有四种元素类型，还有两种包装元素的 ```relay``` 类型：
+ PublishSubject：开始为空，仅向订阅者发出新元素。
+ BehaviorSubject：从初始值开始，然后重播它或最新的元素以
新订户。
+ ReplaySubject：使用缓冲区大小初始化，并将维护元素的缓冲区
达到该大小并重新播放给新订户。
+ AsyncSubject：仅在序列中最后一个.next事件，并且仅当
元素收到一个.completed事件。这是很少使用的元素，而你
在本书中不会使用它。为了完整起见，在此列出。
+ PublishRelay和BehaviorRelay：这些包装它们的相对元素，但仅接受.next事件。你根本无法在 ```relay``` 上添加.completed或.error事件，因此它们非常适合非终止序列。

依次进行这些操作，你将学到更多有关元素的知识，relays，以及下一步如何使用它们。

> 注意：你是否注意到了本章中介绍的其他导入RxCocoa？嗯...这是原因：这些relays取代了一个称为变量的类，该类在RxSwift中定义，但现在已弃用。但是，relays在RxCocoa，即使它们包装了RxSwift中定义的元素。这本书本章将介绍relays，因为它们与元素非常相似，但其余部分RxCocoa在后面的章节中介绍。

# 处理发布元素

当你只是希望订阅者收到新通知时，发布元素会派上用场从订阅点开始的事件，直到取消订阅或元素已以.completed或.error事件终止。
在下面的大理石图中，第一行是发布元素，第二行是第三行是订户。向上的箭头表示订阅，而向下的箭头表示发出的事件。

![RxSwiftPlayground](https://cdn.xuebaonline.com/rxswift-3-1-1.png "")

将1添加订阅后，第一个订阅者订阅，因此它没有收到事件。不过，它确实得到了2和3。而且因为第二个订阅者没有加入有趣的是，直到添加2之后，它只会得到3。

返回playground，将此代码添加到同一示例的底部：

```Swift
let subscriptionTwo = subject
    .subscribe { event in
        print("2)", event.element ?? event)
    }
 ```

事件具有可选的element属性，它将包含发出的元素.next事件。你可以在此处使用nil-coalescing运算符来打印元素（如果存在）是一个否则，你将打印事件。

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

这是你所做的：
+ 使用on（.completed）的便捷方法，将.completed事件置于元素上。 这有效地终止了对象的可观察序列。
+ 在元素上添加另一个元素。 不过，由于元素已经终止，因此不会发出和打印。
+ 完成后，别忘了处理订阅！
+ 订阅元素，这次将其一次性用品添加到处理袋中。

也许新订户3）将使元素重新投入使用吗？ 不，但是你仍然会收到.completed事件。

```Swift
2) completed
3) completed
```

实际上，订阅一旦终止，就会将其停止事件重新发送给将来的订阅者。 因此，在代码中包括停止事件的处理程序是个好主意，不仅可以在终止时通知你，还可以在你订阅时已经终止的情况下得到通知。
有时这可能是导致细微错误的原因，所以要当心！

在对时间敏感的数据建模时（例如在在线出价应用中），你可以使用发布元素。 提醒上午10:01参加的用户，在上午9:59拍卖仅剩1分钟，这没有任何意义。 也就是说，除非你喜欢出价应用程序的1星评价。

有时你想让新订阅者知道什么是最新发出的元素，即使该元素是在订阅之前发出的。 为此，你有一些选择。

# Working with behavior subjects

行为元素的工作方式与发布元素类似，不同之处在于行为元素将重播新订户的最新.next事件。 看看这个大理石图：

![Behavior Subjects](https://cdn.xuebaonline.com/behavior_subjects-001.png "")

从顶部开始的第一行是元素。 第二行的第一个订阅者在1之后但2之前订阅，因此订阅后立即获得1，然后在元素发出时获得2和3。 同样，第二个订阅者在2之后但3之前订阅，因此它立即得到2，然后在发出时得到3。

在最后一个示例之后，将此代码添加到你的 `playground` ：

``` Swift
// 1
enum MyError: Error {
 case anError
}
// 2
func print<T: CustomStringConvertible>(label: String, event: Event<T>) {
    print(label, (event.element ?? event.error) ?? event)
}
// 3
example(of: "BehaviorSubject") {
    // 4
    let subject = BehaviorSubject(value: "Initial value")
    let disposeBag = DisposeBag()
}
```

这是逐场播放：

1.定义一个错误类型，以在接下来的示例中使用。

2.在上一示例中扩展使用三元运算符，你将创建一个辅助函数来打印元素（如果存在），错误（如果存在其中之一）或事件本身。 多么方便！

3.开始一个新的示例。

4.创建一个新的BehaviorSubject实例。 其初始化程序采用初始值。

> 注意：由于BehaviorSubject总是发出最新的元素，因此如果不提供初始值就无法创建元素。 如果你无法在创建时提供初始值，则可能意味着你需要使用PublishSubject。

接下来，将以下代码添加到示例中：

```Swift
subject
 .subscribe {
    print(label: "1)", event: $0)
 }
 .disposed(by: disposeBag)
```

你在创建元素后立即订阅该元素。 由于没有其他元素被添加到元素，因此它向订户重放其初始值。

```Swift
--- Example of: BehaviorSubject ---
1) Initial value
```

现在，在先前的订阅代码之前，但在元素的定义之后，插入以下代码：

```Swift
subject.onNext("X")
```

X会被打印出来，因为现在它是进行订阅时的最新元素。

```Swift
--- Example of: BehaviorSubject ---
1) X
```

将以下代码添加到示例的末尾。 但是首先，查看它，看看是否可以确定要打印的内容：

```Swift
// 1
subject.onError(MyError.anError)
// 2
subject
 .subscribe {
 print(label: "2)", event: $0)
 }
 .disposed(by: disposeBag)
```

分节介绍：

1.将错误事件添加到元素。

2.创建对该元素的新订阅。

你是否知道错误事件将被打印两次，每个订阅一次？
如果是这样，那就继续吧！

```Swift
1) anError
2) anError
```

当你想用最新数据预填充视图时，行为元素很有用。 例如，你可以将用户个人资料屏幕中的控件绑定到行为元素，以便在应用程序获取新数据时可以使用最新值来预填充显示内容。

但是，如果你想展示更多的最新价值怎么办？ 例如，在搜索屏幕上，你可能想要显示最近使用的五个搜索词。 这是重放元素进入的地方。

# Working with replay subjects

重播元素将临时缓存或缓冲它们发出的最新元素，直到你选择的指定大小。 然后，他们将向新订户重播该缓冲区。

下图显示了一个缓冲区大小为2的重播元素。

![Behavior Subjects](https://cdn.xuebaonline.com/behavior_subjects-002.png.png "")

第一个订阅者（中线）已经订阅了重放元素（顶行），因此它会在元素发出时得到它们。 第二个订阅者（底行）在2之后订阅，因此它被重播1和2。
请记住，使用重播元素时，此缓冲区将保留在内存中。 你绝对可以在这里开枪，例如，如果为某种类型的重播元素设置了较大的缓冲区大小，则其实例每个实例都占用大量内存，例如图像。

要注意的另一件事是创建一系列项目的重放元素。 每个发出的元素将是一个数组，因此缓冲区大小将缓冲多个数组。 如果你不小心的话，很容易在这里造成内存压力。

将此新示例添加到你的游乐场：

```Swift
example(of: "ReplaySubject") {
    // 1
    let subject = ReplaySubject<String>.create(bufferSize: 2)
    let disposeBag = DisposeBag()
    // 2
    subject.onNext("1")
    subject.onNext("2")
    subject.onNext("3")
    // 3
    subject
        .subscribe {
            print(label: "1)", event: $0)
    }
    .disposed(by: disposeBag)
 
    subject
        .subscribe {
            print(label: "2)", event: $0)
    }
    .disposed(by: disposeBag)
}
```

从顶部：

1.创建一个缓冲区大小为2的新重放元素。重放类型使用create（bufferSize :)类型方法进行初始化。

2.在元素上添加三个元素。

3.创建对该元素的两个订阅。

最近的两个元素都向两个订户重放。 1永远不会发出，因为在任何人订阅之前，将2和3添加到具有2缓冲区大小的重播元素上。

```Swift
--- Example of: ReplaySubject ---
1) 2
1) 3
2) 2
2) 3
```

接下来，将以下代码添加到示例中：

```Swift
subject.onNext("4")
subject
 .subscribe {
    print(label: "3)", event: $0)
 }
 .disposed(by: disposeBag)
```

使用此代码，你可以在元素上添加另一个元素，然后为其创建新的订阅。 前两个订阅将正常接收该元素，因为在将新元素添加到元素时它们已经被订阅，而新的第三个订阅者将向其重播最后两个缓冲的元素。

```Swift
1) 4
2) 4
3) 3
3) 4
```

到现在为止，你在这些方面已经相当不错了，因此在这里不要感到惊讶。 如果你将扳手拧入作品，会发生什么？ 在创建第三个订阅之前，在元素上加4之后立即添加以下代码行：

```Swift
subject.onError(MyError.anError)
```

这可能会让你感到惊讶。 如果是这样，那没关系。 生活充满惊喜。

```Swift
1) 4
2) 4
1) anError
2) anError
3) 3
3) 4
3) anError
```

这里发生了什么？ 重播元素因错误而终止，它将像你已经看到的元素一样重新发送给新订阅者。 但是缓冲区也仍然悬而未决，因此在重新发出stop事件之前，它也会被重放给新的订户。

添加错误后立即添加以下代码行：

```Swift
subject.dispose()
```

通过事先在重播元素上显式调用dispose()，新订户将仅收到一个错误事件，指示该元素已被处理。

```Swift
3) Object `RxSwift.ReplayMany<Swift.String>` was already disposed.
```

通常不需要在这样的重播元素上显式调用dispose()，因为如果你将订阅添加到处理包中（并避免创建任何强大的参考周期），那么所有内容都会被处理掉，并且 当所有者（例如，视图控制器或视图模型）被释放时，被释放。

意识到这些极端情况的小陷阱真是太好了。

> 注意：如果你想知道什么是ReplayMany，它是一种内部类型，用于创建重放元素。

通过使用发布，行为或重播元素，你应该能够为任何需求建模。

# Working with relays

如前所述， ```relay``` 器在保留元素的同时保持其重放行为。 与其他元素（以及通常的可观察对象）不同，你可以使用accept（_ :)方法将值添加到 ```relay``` 上。 换句话说，你不使用onNext（_ :)。 这是由于 ```relay``` 只能接受值，并且你不能在它们上添加.error或.completed事件。
PublishRelay包装一个PublishSubject，而BehaviorRelay包装一个BehaviorSubject。

使 relays 与被包裹的主体区别开的是，保证 relays 永不终止。

将此新示例添加到你的 `playground` ：

```Swift
example(of: "PublishRelay") {
 let relay = PublishRelay<String>()

 let disposeBag = DisposeBag()
}
```

除了名称之外，这里与创建 `PublishSubject` 无关。 但是，为了将新值添加到发布 `relay` 上，你将使用accept（_ :)方法。 将此代码添加到你的示例中：

```Swift
relay.accept("Knock knock, anyone home?")
```

尚无订阅者，因此未发出任何消息。 创建一个订户，然后在 `relay` 上添加另一个值：

```Swift
relay
 .subscribe(onNext: {
 print($0)
 })
 .disposed(by: disposeBag)
relay.accept("1")
```

输出与创建发布元素而不是 relay 一样：

```Swift
--- Example of: PublishRelay ---
1
```
无法将.error或.complete事件添加到 relay 。 任何尝试都会产生编译器错误（无需将此代码添加到你的 `playground` ，它将无法工作）。

```Swift
relay.accept(MyError.anError)
relay.onCompleted()
```

请记住，发布 relay 只是包装发布元素并像它们一样工作，除了接受部分，它们不会终止。 有趣的东西怎么样？ 跟我的小朋友BehaviorRelay打个招呼。

行为 relay 也不会以.completed或.error事件终止。 因为它包装了行为元素，所以会创建一个具有初始值的行为 relay ，并且它将向新订户重播其最新值或初始值。 但是，relay 的特殊功能是可以向其询问其当前值。 此功能以一种有用的方式桥接了命令式和响应式。

将此新示例添加到你的 playground ：

```Swift
example(of: "BehaviorRelay") {
 // 1
 let relay = BehaviorRelay(value: "Initial value")
 let disposeBag = DisposeBag()

 // 2
 relay.accept("New initial value")

 // 3
 relay
 .subscribe {
 print(label: "1)", event: $0)
 }
 .disposed(by: disposeBag)
}
```

这是你这次要执行的操作：

1.创建一个具有初始值的 `relay` 。 可以推断 `relay` 的类型，但是你可以将类型明确声明为 `BehaviorRelay <String>（value：“ Initial value”）`。

2.在 `relay` 上添加一个新元素。
3.订阅 `relay` 。

订阅获取最新值。

```Swift
--- Example of: BehaviorRelay ---
1) New initial value
```

接下来，把下面代码添加到示例代码中：

```Swift
// 1
relay.accept("1")
// 2
relay
 .subscribe {
 print(label: "2)", event: $0)
 }
 .disposed(by: disposeBag)
// 3
relay.accept("2")
```

从上面代码中，我们可以看出：

1. 添加一个新的元素到 relay 中；
2. 创建一个订阅者订阅relay；
3. 添加另外的一个新元素到relay中。

已经发生订阅1)的接收到添加到 relay 中的新元素1。 新订阅在订阅时会获得相同的值，因为它是最新的值。
当两个订阅添加到 relay 中时，它们都将收到2。

```Swift
1) 1
2) 1
1) 2
2) 2
```

最后，将以下代码片段添加到最后一个示例中：

```Swift
print(relay.value)
```

如前所述，relay 使你可以直接访问其当前值。 在这种情况下，添加到 relay 上的最新值为2，因此它将被打印到控制台上。

```Swift
2
```

在将命令式与响应式联系起来时，这将会非常有帮助。 你将在本章的第二个挑战中进行尝试。

relay 具有多种功能。 你可以订阅它们，以便在发出新的.next事件时能够做出反应，就像其他任何元素一样。 它们可以满足一次性的需求，例如当你只需要检查当前值而无需订阅接收更新时。






