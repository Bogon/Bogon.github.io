---
title: Swift中的懒加载模式
permalink: Swift中的懒加载模式
copyright: ture
date: 2020-04-26 11:01:52
keywords: iOS,UIKit,设计模式,抽象,Swift,懒加载模式,重构,object pool design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [懒加载模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---


>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何在 ```Swift``` 中使用惰性属性来提高性能，避免使用可选参数或只是为了使初始化过程更加简洁。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在程式设计中, 惰性初始是一种拖延战术。在第一次需求出现以前，先延迟创建物件、计算值或其它昂贵程序。这通常是以一个旗号来实现，用旗号来标示是否完成其程式。每次请求对象时，会先测试此旗号。如果已完成，直接传回，否则当场执行。
对于此想法更一般的论述，可见惰性求值。对指令式语言，这个模式可能潜藏着危险，尤其是使用共享状态的程式习惯。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以设计模式的观点来说，惰性初始通常会和工厂方法模式合作，这结合了三种构想：

+ 使用一个工厂去得到一个类别的实例（工厂方法模式）。
+ 将实例存在一个集合中，所以下次要求一个实例却有相同参数时，可以得到同一个实例（可和单例模式来做比较）。
+ 在第一次时，使用惰性初始来实例化物件（惰性初始模式）。

<!-- more -->

</br>

# **懒惰的终极指南**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果仅在某个时间点需要某个属性，则可以在其前面加上 ```lazy``` 关键字，以便在初始化过程中将其 ```“excluded”``` ，并且将按需分配其默认值。 这对于创建成本高昂或需要更多时间创建的类型很有用。 这是一个懒惰公主的小故事。 👸💤

``` Swift
class SleepingBeauty {

    init() {
        print("zzz...sleeping...")
        sleep(2)
        print("sleeping beauty is ready!")
    }
}

class Castle {

    var princess = SleepingBeauty()

    init() {
        print("castle is ready!")
    }
}

print("a new castle...")
let castle = Castle()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码段的输出如下所示，但是你可以看到公主睡了很长时间，她也“堵住了”城堡。 🏰

``` 
a new castle...
zzz...sleeping...
sleeping beauty is ready!
castle is ready!
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以通过添加 ```lazy``` 关键字来加快处理速度，因此你的英雄将有时间杀死龙，我们的公主可以睡在她的床上直到需要她为止。

``` Swift
class SleepingBeauty {

    init() {
        print("zzz...sleeping...")
        sleep(2)
        print("sleeping beauty is ready!")
    }
}

class Castle {

    lazy var princess = SleepingBeauty()

    init() {
        print("castle is ready!")
    }
}

print("a new castle...")
let castle = Castle()
castle.princess
```

好多了！ 现在城堡立即为战斗做好了准备，因此王子可以唤醒他所爱的人，并且……他们从此过着幸福的生活。 故事结局。👸 ❤️ 🤴

```
a new castle...
castle is ready!
zzz...sleeping...
sleeping beauty is ready!
```

希望你喜欢童话故事，但让我们做一些真正的编码吧！ 🤓

</br>

# **避免懒加载可选属性**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你在前面的示例中所看到的，可以使用惰性属性来提高 ```Swift``` 代码的性能。 您也可以消除对象中的可选项。 如果你要处理 ```UIView``` 派生类，这将很有用。 例如，如果你的视图层次结构需要 ```UILabel``` ，则通常必须将该属性声明为可选属性或隐式展开的可选存储属性。 让我们通过使用惰性和消除邪恶的可选要求的方式来重新制作此示例。 😈

``` Swift
class ViewController: UIViewController {

    lazy var label: UILabel = UILabel(frame: .zero)

    override func loadView() {
        super.loadView()

        self.view.addSubview(self.label)
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.label.textColor = .black
        self.label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情况还不错，但是我仍然更喜欢将我的视图声明为隐式展开的可选对象。 💀

</br>

# 使用懒加载闭包

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 [```懒加载闭包(lazy closure)```](http://www.xuebaonline.com/Swift%E5%B8%A6%E9%97%AD%E5%8C%85%E7%9A%84%E6%87%92%E6%83%B0%E5%88%9D%E5%A7%8B%E5%8C%96/ "") 将一些代码包装在其中。 与存储的属性相比，懒惰的主要优点是，只有对该变量执行读取操作时，才执行块。 您还可以使用常规存储属性填充 [```惰性属性(lazy property)```](http://www.xuebaonline.com/Swift%20Lazy%E5%B1%9E%E6%80%A7%E5%88%9D%E5%A7%8B%E5%8C%96/ "") 的值。 让我们在实践中看一下。

``` Swift
class ViewController: UIViewController {

    lazy var label: UILabel = {
        let label = UILabel(frame: .zero)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .black
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        return label
    }()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想整理一下init方法，这是一个不错的做法。 你可以将所有对象自定义逻辑放在闭包内。 闭包在读取时自动执行（自我执行的闭包），因此当你调用self.label时，你的代码块将被执行并贴紧：视图将准备就绪。

> ***提示：***\
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你不能在存储的属性中使用 ```self``` ，但是可以使用 ```lazy closure``` 来使用 ```self``` 。 注意：如果你不想造成引用循环和内存泄漏，则应始终使用 ```[unown self]``` 。 ♻️

</br>

# ***使用工厂模式进行 Lazy initialization***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我已经有几篇关于 ```Swift``` 中 [```工厂设计模式```](http://www.xuebaonline.com/tags/%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/ "") 的文章，所以现在我只想向你展示如何使用工厂方法和结合了 ```lazy property``` 的静态工厂。

</br>

## ***工厂方法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不喜欢自动执行的闭包，则可以将代码移出工厂方法，并将其与惰性变量一起使用。 像这样简单：

``` Swift
class ViewController: UIViewController {

    lazy var label: UILabel = self.createCustomLabel()

    private func createCustomLabel() -> UILabel {
        print("called")
        let label = UILabel(frame: .zero)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .black
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        return label
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，工厂方法的工作方式类似于你的惰性属性的私有初始化程序。 让我们更进一步，以便可以稍微提高可重用性...

## ***静态工厂方式***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想在应用程序的多个部分中重复使用这些初始化代码，则将它们初始化为 [```静态工厂(static factory)```](http://www.xuebaonline.com/tags/%E9%9D%99%E6%80%81%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95/ "") 可能是一个好习惯。 例如，这非常适合初始化自定义视图。 另外，创建自定义视图实际上并不是视图控制器任务，因此本示例中的职责更加分离。

``` Swift
class ViewController: UIViewController {

    lazy var label: UILabel = UILabel.createCustomLabel()
}

extension UILabel {

    static func createCustomLabel() -> UILabel {
        let label = UILabel(frame: .zero)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .black
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        return label
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费获得你可以享受静态工厂属性/方法的优点，例如缓存或返回特定的子类型。 挺整洁的！ 👍

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惰性变量是优化代码的一种非常方便的方法，但是它们只能在结构和类上使用。 n你不能将它们用作计算属性，这意味着它们在你每次尝试访问它们时都不会返回闭包块。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个重要的事情是，惰性属性不是线程安全的，因此你必须谨慎使用它们。 另外，你并不总是希望消除隐式解包的可选值，有时候崩溃只是更好的选择！ 🐛

> ***提示：***\
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别偷懒！

...但是请随时使用惰性属性！ 😉