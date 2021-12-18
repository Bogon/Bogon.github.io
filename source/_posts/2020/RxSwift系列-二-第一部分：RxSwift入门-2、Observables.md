---
title: 'RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables'
description: 'RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables'
permalink: 'RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables'
copyright: ture
keywords: 'iOS,Swift,RxSwift'
tags:
  - - iOS
  - - RxSwift
categories:
  - - iOS
  - - RxSwift
abbrlink: 34958
date: 2020-08-27 16:28:22
---

现在，你已经了解了RxSwift的一些基本概念，是时候开始尝试并观察可观察对象了。

在本章中，你将遍历创建和订阅可观察对象的几个示例。 在现实世界中对某些可观察物的使用似乎有点晦涩难懂，但请放心，你将掌握重要技能并了解很多有关RxSwift中可用的可观察物类型的信息。 在本书的其余部分以及以后的内容中，你都将使用这些技能！

# 入门

在本章中，你将使用一个已经建立的Xcode项目，其中包括一个运动场和RxSwift框架。 首先，打开“终端”应用程序，导航到本章的起始文件夹，然后导航到RxPlayground项目文件夹。 最后，通过输入以下命令来运行bootstrap.sh脚本：

``` Bash
./bootstraph.sh
```

<!-- more -->

引导过程将花费几秒钟； 请记住，每次你要打开此playground项目时，都需要重复上述步骤。 你不能直接打开playground文件或工作区。

在“项目”导航器中选择“ RxSwiftPlayground”，你应该看到以下内容：

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-1.png "")

在Project导航器中的Sources文件夹中向下滚动Playground页面，然后选择SupportCode.swift。 它包含以下辅助函数示例（of :)：

``` Swift
public func example(of description: String, action: () -> Void) {
	print("\n--- Example of:", description, "---")
	action()
}
```

在阅读本文的过程中，将使用该功能封装不同的示例。 你将很快看到如何使用此功能。

但是，在你深入了解这一点之前，现在可能是回答问题的好时机：什么是Observables？

# 什么是Observables？

Observables是Rx的核心。 你将花费一些时间来讨论什么是Observables，如何创建Observables物以及如何使用它们。

你会看到“Observables”，“可观察的序列”和“序列”在Rx中互换使用。 而且，实际上，它们都是同一件事。 你甚至可能会偶尔看到偶尔出现的“信息流”，特别是来自不同反应式编程环境来RxSwift的开发人员。 “ Stream”也指同一件事，但是在RxSwift中，所有很酷的孩子都称其为序列(sequence)，而不是流。 在RxSwift中...

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-2.png "")

...或适用于序列的内容。 可观察对象只是一个序列，具有一些特殊功能。 这些权力之一（实际上是最重要的权力）是异步的。 可观察对象在一段时间内会产生事件，该过程称为发射。 事件可以包含值，例如数字或自定义类型的实例，或者它们可以被识别为手势，例如轻击。

概念化的最佳方法之一是使用大理石图，这些图只是在时间轴上绘制的值。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-3.png "")

左右箭头代表时间，而带数字的圆圈代表序列的元素。 元素1将被发射，一段时间将被发射，然后2和3将被发射。 你问多少时间？ 它可能在可观察对象的整个生命周期中的任何时候出现，从而使你进入可观察对象的生命周期。

# Observables的生命周期

在上一个大理石图中，可观察到的发射了三个元素。 当可观察对象发出一个元素时，它会在下一个事件中发出它。

这是另一个大理石图，这次包括一个竖线，代表此可观察道路的尽头。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-4.png "")

该可观察的对象发出三个轻击事件，然后结束。 这被称为完成事件，因为它已终止。 例如，也许水龙头在被忽略的景象上。 重要的是可观察对象已经终止，并且不再发出任何东西。 这是正常终止。 但是，有时候情况可能会出错。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-5.png "")

该大理石图发生错误； 它由红色X表示。Observable发出了一个错误事件，其中包含错误。 这与可观察项通常以完成事件终止时没有什么不同。 如果一个可观察对象发出一个错误事件，它也会被终止并且不能再发出其他任何事件。

快速回顾一下：
+ 一个可观察对象发出包含元素的下一个事件。
+ 它可以继续执行此操作，直到发出终止事件为止。 例如 错误事件或完成事件。
+ 可观察的对象终止后，将不再发出事件。

直接从RxSwift源代码获取示例，这些事件表示为枚举情况：

``` Swift
/// Represents a sequence event.
///
/// Sequence grammar:
/// **next\* (error | completed)**
public enum Event<Element> {
    /// Next element is produced.
    case next(Element)
    /// Sequence terminated with an error.
    case error(Swift.Error)
    /// Sequence completed successfully.
    case completed
}
```

在这里，你可以看到.next事件包含某些Element的实例，.error事件包含Swift.Error的实例，而.completed事件只是停止事件，不包含任何数据。

现在，你了解了什么是可观察对象以及它的作用，接下来，你将创建一些可观察对象，以观察它们的实际作用。

# 创建observables

从当前文件切换回RxSwiftPlayground并添加以下代码：

``` Swift
example(of: "just, of, from") {
    // 1
    let one = 1
    let two = 2
    let three = 3

    // 2
    let observable = Observable<Int>.just(one)
}
```

你在上面的代码中执行的操作如下：

1.定义将在以下示例中使用的整数常量。

2.使用带有一个整数的just方法创建一个Int类型的可观察序列。

恰当地命名了just，因为它所做的只是创建一个仅包含单个元素的可观察序列。 只是Observable的类型方法。 但是，在Rx中，方法称为“运算符”。 你们中间的鹰眼也许可以猜到接下来要结帐的运营商。

将此代码添加到example（of :)的结尾闭包中：

``` Swift
let observable2 = Observable.of(one, two, three)
```

这次，你没有明确指定类型。 你可能会认为，因为你给了它几个整数，所以[Int]的类型是Observable。

按住Option键并单击observable2以显示其推断的类型，你会看到它是Int的Observable，而不是数组：

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-6.png "")

这是因为of运算符采用可变参数，而Swift能够基于该参数推断Observable的类型。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-7.png "")

如果你要创建一个可观察的数组，则只需将数组传递。
将此代码添加到示例的底部：

```Swift
let observable3 = Observable.of([one, two, three])
```

按住Option键单击observable3，你会发现它确实是[Int]的Observable。 just运算符还可以将数组作为其单个元素，乍一看似乎有点奇怪。 但是，数组是单个元素，而不是其内容。

你可以用来创建可观察值的另一个运算符来自。 将此代码添加到示例的底部：

```Swift
let observable4 = Observable.from([one, two, three])
```

from运算符可从类型化元素数组创建可观察的单个元素。 按住Option键单击observable4，你会看到它是一个Int的Observable，而不是[Int]。 from运算符仅采用一个数组。

你的控制台目前可能看起来光秃秃的。 那是因为除了示例标题之外，你没有打印其他任何内容。 是时候通过订阅可观察变量来改变它了。

# 订阅observables

作为iOS开发人员，你可能熟悉NotificationCenter。 它向观察者广播通知，这与RxSwift Observables不同。 这是一个UIKeyboardDidChangeFrame通知的观察者示例，其处理程序为尾随闭包：

```Swift
let observer = NotificationCenter.default.addObserver(
 forName: UIResponder.keyboardDidChangeFrameNotification,
 object: nil,
 queue: nil) { notification in
    // Handle receiving notification
}
```

订阅可观察的RxSwift非常相似； 你称观察者为可观察者。 因此，你可以使用subscribe（）代替addObserver（）。 与NotificationCenter不同，NotificationCenter的开发人员通常仅使用其.default单例实例，而Rx中的每个可观察实例均不同。

更重要的是，可观察对象在拥有订阅者之前不会发送事件或执行任何工作。

记住，可观察的实际上是一个序列定义。 订阅可观察对象实际上更像是在Swift标准库的Iterator上调用next（）。

```Swift
let sequence = 0..<3
var iterator = sequence.makeIterator()
while let n = iterator.next() {
 print(n)
}
/* Prints:
 0
 1
 2
 */
```

不过，订阅可观察项目比这更简化。 你还可以为可观察到的每种事件类型添加处理程序。 回想一下，可观察对象会发出.next，.error和.completed事件。 .next事件将要发送的元素传递给处理程序，而.error事件包含一个错误实例。

要查看实际效果，请将这个新示例添加到你的playground； 将代码插入上一个示例的大括号后的位置：

```Swift
example(of: "subscribe") {
 let one = 1
 let two = 2
 let three = 3

 let observable = Observable.of(one, two, three)
}
```

这与上一个示例类似，除了这次只是使用of运算符。 现在，在此示例的结尾处添加以下代码，以订阅可观察的代码：

```Swift
observable.subscribe { event in
 print(event)
}
```

>注意：只要有输出，控制台就会自动出现，但是你可以通过从菜单中选择“视图”▸“调试区域”▸“激活控制台”来手动显示它。 这是操场上的打印语句显示其输出的地方。

按住Option键单击“订阅”运算符，你会看到它使用了一个转义闭包，该闭包采用了Int类型的Event，并且不返回任何内容，subscribe返回了Disposable。 你很快就会涉及一次性用品。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-8.png "")

订阅的结果是可观察到的每个事件都会打印出来。

```
--- Example of: subscribe ---
next(1)
next(2)
next(3)
completed
```

可观察对象为每个元素发出.next事件，然后发出.completed事件，最后终止。 当使用可观察对象时，通常比起事件本身，你对.next事件发出的元素更感兴趣。

要查看你如何访问它们，请使用以下代码替换上面的订阅代码：

```Swift
observable.subscribe { event in
    if let element = event.element {
        print(element)
    }
}
```

事件具有元素属性。 这是一个可选值，因为只有.next事件包含一个元素。 因此，你可以使用可选绑定来解包元素（如果元素不是nil的话）。 现在，仅打印元素，不打印包含元素的事件，也不打印.completed事件。

```
1
2
3
```

这是一个不错的模式，而且使用频率很高，以至于RxSwift中都有一个快捷方式。
对于可观察到的每种事件，都有一个订阅操作符：next，error和completed。

替换以前的订阅代码：

```Swift
observable.subscribe(onNext: { element in
    print(element)
})
```

>注意：如果你在Xcode首选项中打开了代码完成建议，则可能会要求你提供其他事件的处理程序。 现在忽略这些。

现在，你只处理.next事件元素，而忽略其他所有内容。 onNext闭包接收.next事件的元素作为参数，因此你不必像以前一样从事件中手动检索它。

你已经了解了如何创建一个元素和多个元素的可观察值。 但是可观察到的零元素呢？ 空运算符创建一个零元素可观察序列。 它只会发出一个.completed事件。

将此新示例添加到你的playground：

```Swift
example(of: "empty") {
 let observable = Observable<Void>.empty()
}
```

如果无法推断出可观察对象，则必须将其定义为特定类型。 因此，由于empty没有从中推断出类型的信息，因此必须显式定义类型。

在这种情况下，Void和其他任何东西一样好。 将此代码添加到示例中以进行订阅：

```Swift
observable.subscribe(
 // 1
 onNext: { element in
    print(element)
 },

 // 2
 onCompleted: {
    print("Completed")
 }
)
```

依次采用每个编号的注释：

1.处理.next事件，就像在上一个示例中一样。

2..completeed事件不包含元素，因此只需打印一条消息即可。

在控制台中，你会看到empty只发出一个.completed事件：

```Swift
--- Example of: empty ---
Completed
```

但是，可观察的空值有什么用？ 好吧，当你要返回可立即终止或故意为零的可观察值时，它们很方便。

与空运算符相反，从不运算符会创建一个不发出任何东西且永不终止的可观察对象。 它可以用来表示无限的持续时间。 将此示例添加到你的playground：

```Swift
example(of: "never") {
    let observable = Observable<Any>.never()

    observable.subscribe(
    onNext: { element in
        print(element)
    },
    onCompleted: {
        print("Completed")
    }
    )
}
```

除了示例标题外，什么都没有打印。 甚至没有“完成”。 你怎么知道这是否有效？ 坚持这种好奇心，直到挑战部分。

到目前为止，你一直在使用显式元素或值的可观测对象，但是也可以从一系列值中生成可观测对象。

将此示例添加到你的playground：

```Swift
example(of: "range") {
    // 1
    let observable = Observable<Int>.range(start: 1, count: 10)

    observable
    .subscribe(onNext: { i in
    // 2
    let n = Double(i)
    let fibonacci = Int(((pow(1.61803, n) - pow(0.61803, n)) /
    2.23606).rounded())
    print(fibonacci)
    })
}
```

分节介绍：

1.使用范围运算符创建一个可观察值，该运算符采用一个起始整数值和一个要生成的连续整数计数。

2.计算并打印每个发射元素的第n个斐波那契数。 与onNext处理程序相比，实际上有一个更好的地方放代码来转换发射的元素。 你将在第7章“转换运算符”中对此进行了解。

除never（）示例外，到目前为止，你一直在使用可观察对象，它们自动发出.completed事件并自然终止。 这使你可以专注于创建和订阅可观察物的机制，但是这也简化了在地毯下订阅可观察物的重要方面。 现在该进行一些整理工作，然后继续处理此方面。

# 处置和终止

请记住，可观察对象在收到订阅之前不会做任何事情。 订阅触发了可观察对象的工作，该工作会发出新事件，直到发出.error或.completed事件并终止。 你可以通过取消对可观察对象的订阅来使其手动终止。

将此新示例添加到你的playground：

```Swift
example(of: "dispose") {
 // 1
 let observable = Observable.of("A", "B", "C")

 // 2
 let subscription = observable.subscribe { event in
 // 3
 print(event)
 }
}
```

很简单：

1.创建一个可观察的字符串。

2.订阅可观察对象，这一次将返回的Disposable保存为称为预订的本地常量。

3.在处理程序中打印每个发出的事件。

要显式取消订阅，请在其上调用dispose()。 在取消订阅或将其处置后，当前示例中的observable将停止发出事件。

将此代码添加到示例的底部：

```Swift
subscription.dispose()
```

单独管理每个订阅将很乏味，因此RxSwift包含DisposeBag类型。 处理袋可容纳一次性用品-通常使用
.disposed(by :)方法-并在将要释放的处理袋上将对每个调用dispose()。 将此新示例添加到你的playground：

```Swift
example(of: "DisposeBag") {
    // 1
    let disposeBag = DisposeBag()

    // 2
    Observable.of("A", "B", "C")
    .subscribe { // 3
        print($0)
    }
    .disposed(by: disposeBag) // 4
}
```

此代码的工作原理如下：

1.创建一个处理袋。

2.创建一个可观察的。

3.订阅可观察对象，并使用默认参数名称$ 0打印输出发出的事件，而不是显式定义参数名称。

4.将订阅的返回值添加到disposeBag。

这是你最常使用的模式：创建并订阅可观察的内容，然后立即将订阅添加到处理包中。

为什么要打扰一次性用品呢？
如果你忘记为处理袋添加订阅，或者在完成订阅后手动在其上调用dispose，或者以其他方式导致可观察对象终止，则可能会泄漏内存。

如果你忘记了，请不要担心； Swift编译器应警告你有关未使用的一次性物品。
在前面的示例中，你已经创建了带有特定.next事件元素的可观察对象。使用create运算符是指定可观察的事件将向订阅者发出的所有事件的另一种方法。

将此新示例添加到你的playground：

```Swift
example(of: "create") {
    let disposeBag = DisposeBag()

    Observable<String>.create { observer in

    }
}
```

create运算符采用一个名为subscribe的参数。 它的工作是提供可观察的调用订阅的实现。 换句话说，它定义了将发送给订户的所有事件。 按住Option键单击“创建”。

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-9.png "")

subscription参数是一个转义的闭包，它使用AnyObserver并返回Disposable。 AnyObserver是一种通用类型，它有助于将值添加到可观察序列上，然后将其发送给订户。

将create的实现更改为以下内容：

``` Swift
Observable<String>.create { observer in
 // 1
 observer.onNext("1")

 // 2
 observer.onCompleted()

 // 3
 observer.onNext("?")

 // 4
 return Disposables.create()
}
```

这是逐场播放：

1.在观察者上添加一个.next事件。 onNext（_ :)是on（.next（_ :)）的便捷方法。

2.将.completed事件添加到观察者。 同样，onCompleted是on（.completed）的便捷方法。

3.在观察者上添加另一个.next事件。

4.退回一次性用品。

>注意：最后一步，返回一个Disposable，可能看起来很奇怪，但是请记住，订阅操作符返回一个表示该订阅的disposable。 在这里，Disposables.create（）是一个空的一次性对象，但是某些一次性对象具有副作用。

你是否认为第二个onNext元素（？）可以发送给订阅者？ 为什么或者为什么不？

要查看你是否猜对了，请在create实现后的下一行添加以下代码，以订阅可观察的内容：

```Swift
.subscribe(
 onNext: { print($0) },
 onError: { print($0) },
 onCompleted: { print("Completed") },
 onDisposed: { print("Disposed") }
)
.disposed(by: disposeBag)
```

你已经订阅了Observable，并使用了默认的参数名称（分别用于分别传递给onNext和onError处理程序的element和error参数）来实现所有处理程序。 结果是打印出第一个.next事件元素“ Completed”和“ Disposed”。 第二个.next事件不会打印，因为可观察对象发出了一个.completed事件，并在将其添加到序列中之前终止。

```Swift
--- Example of: create ---
1
Completed
Disposed
```

如果向观察者添加错误，将会发生什么？ 在示例顶部添加以下代码：

```Swift
enum MyError: Error {
 case anError
}
```

你已经创建了一个错误类型，且仅包含一个错误anError。 接下来，在observer.onNext和observer.onCompleted调用之间添加以下代码行：

```Swift
observer.onError(MyError.anError)
```

可观察对象发出错误，然后终止：

```Swift
--- Example of: create ---
1
anError
Disposed
```

如果你既未发出.complete事件也未发出.error事件，并且未将订阅添加到disposeBag中，该怎么办？ 注释掉observer.onError，observer.onCompleted和disposed（由：disposeBag）代码行找出。

这是完整的实现：

```Swift
example(of: "create") {

    enum MyError: Error {
        case anError
    }

    let disposeBag = DisposeBag()

    Observable<String>.create { observer in
        // 1
        observer.onNext("1")

        // observer.onError(MyError.anError)

        // 2
        // observer.onCompleted()

        // 3
        observer.onNext("?")

        // 4
        return Disposables.create()
    }
    .subscribe(
    onNext: { print($0) },
    onError: { print($0) },
    onCompleted: { print("Completed") },
    onDisposed: { print("Disposed") }
    )
    // .disposed(by: disposeBag)
}
```

恭喜，你刚刚泄漏了内存！ 可观察者将永远不会完结，而可弃者将永远不会被丢弃。

```Swift
--- Example of: create ---
1
?
```

如果你无法忍受此示例处于泄漏状态，请随意取消添加.completed事件的行或向disposeBag添加预订的行的注释。

# 建立可观察的工厂

与其创建一个等待订阅者等待的可观察对象，不如创建一个可观察工厂，为每个订阅者提供一个新的观察对象。
将此新示例添加到你的playground：

```Swift
example(of: "deferred") {
    let disposeBag = DisposeBag()

    // 1
    var flip = false

    // 2
    let factory: Observable<Int> = Observable.deferred {

        // 3
        flip.toggle()

        // 4
        if flip {
            return Observable.of(1, 2, 3)
        } else {
            return Observable.of(4, 5, 6)
        }
    }
}
```

解释如下：

1.创建一个布尔标志以翻转可观察到的返回。

2.使用延迟运算符创建Int工厂的可观察对象。

3.切换翻转，每次订阅工厂时都会使用。

4.根据翻转是true还是false，返回不同的可观察值。

从外部看，可观察工厂与常规可观察工厂没有区别。 将此代码添加到示例的底部以四次订阅工厂：

```Swift
for _ in 0...3 {
    factory.subscribe(onNext: {
        print($0, terminator: "")
    })
    .disposed(by: disposeBag)
    print()
}
```

每次你订阅工厂，都会得到相反的观察结果。 你得到123，然后是456，并且每次创建新订阅时，模式都会重复：

```Swift
--- Example of: deferred ---
123
456
123
456
```

# 使用特质

特质是可观察到的行为，其行为集比常规可观察到的要窄。它们的使用是可选的；你可以在可能使用特征的任何地方使用常规可观察的东西。它们的目的是提供一种方法，以将你的意图更清楚地传达给代码的读者或API的使用者。使用特征暗示的上下文可以帮助你使你的代码更直观。

RxSwift具有三种特征：Single，Maybe和Completable。在不了解它们的情况下，你能猜出每个人的专业性如何吗？

单打将发出.success（value）或.error事件。 .success（value）实际上是.next和.completed事件的组合。这对于一次成功，产生一个值或失败的过程很有用，例如下载数据或加载它从磁盘。

Completable将仅发出.completed或.error事件。它不发出任何值。当你只关心操作成功完成或失败（例如文件写入）时，可以使用completable。

最后，也许是“单一且可完成”的混搭。它可以发出.success（value）、. completed或.error。如果你需要执行一个可能成功或失败的操作，并且有选择地返回成功值，那么Maybe是你的方便之选。

你将有机会在第4章“实践中的可观察对象和主题”及以后的内容中进一步研究特质。现在，你将学习一个基本示例，该示例使用单个示例从Playground的Resources文件夹中名为Copyright.txt的文本文件中加载一些文本，因为谁不时会不喜欢某些法文？

![RxSwiftPlayground](http://cdn.xuebaonline.com/rxswift-1-2-10.png "")

将此示例添加到你的 playground：

```Swift
example(of: "Single") {
    // 1
    let disposeBag = DisposeBag()
    // 2
    enum FileReadError: Error {
        case fileNotFound, unreadable, encodingFailed
    }

    // 3
    func loadText(from name: String) -> Single<String> {
        // 4
        return Single.create { single in

        }
    }
}
```

这是你在此代码中执行的操作：

1.创建一个处理袋，以备后用。

2.定义一个错误枚举，以对从磁盘上的文件读取数据时可能发生的一些可能的错误进行建模。

3.实现从磁盘上的文件加载文本的功能，该文件返回Single。

4.创建并返回一个Single。

将此代码添加到create闭包中以完成实现：

```Swift
// 1
let disposable = Disposables.create()
// 2
guard let path = Bundle.main.path(forResource: name, ofType: "txt") else
{
 single(.error(FileReadError.fileNotFound))
 return disposable
}
// 3
guard let data = FileManager.default.contents(atPath: path) else {
 single(.error(FileReadError.unreadable))
 return disposable
}
// 4
guard let contents = String(data: data, encoding: .utf8) else {
 single(.error(FileReadError.encodingFailed))
 return disposable
}
// 5
single(.success(contents))
return disposable
```

从顶部：

1.create方法的subscription闭包必须返回一个一次性对象（按住Option键并单击create可以自己查看），因此你在此处创建一个将在不同点返回。

2.获取文件名的路径，否则将“找不到文件”错误添加到Single上，并返回你创建的一次性文件。

3.从该路径的文件中获取数据，或在Single上添加不可读的错误，然后返回一次性文件。

4.将数据转换为字符串； 否则，将编码失败错误添加到Single上，然后返回一次性对象。 开始在这里看到一个模式？

5.到此为止了吗？ 成功将内容添加到Single中，然后返回一次性物品。

现在，你可以使用此功能。 将此代码添加到示例中：

```Swift
// 1
loadText(from: "Copyright")
// 2
.subscribe {
    // 3
    switch $0 {
        case .success(let string):
            print(string)
        case .error(let error):
            print(error)
    }
}
.disposed(by: disposeBag)
```

在这里，你：

1.调用loadText（from :)，传递文本文件的根名称。

2.订阅返回的单曲。

3.打开事件，如果成功则打印字符串，否则则打印错误。

你应该看到打印到控制台的文件中的文本，与 playground 底部的版权注释相同：

```Swift
--- Example of: Single ---
Copyright (c) 2019 Razeware LLC
...
```

尝试将文件名更改为其他名称，则应该打印出“找不到文件”错误。
