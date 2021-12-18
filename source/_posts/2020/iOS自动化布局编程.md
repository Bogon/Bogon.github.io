---
title: iOS自动化布局编程
description: iOS自动化布局编程
permalink: iOS自动化布局编程
copyright: ture
keywords: 'iOS,Swift,自动化布局,用户体验'
tags:
  - - iOS
  - - Swift
  - - UIKit
categories:
  - - iOS
  - - Swift
  - - UIKit
abbrlink: 64461
date: 2020-04-26 19:42:40
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这个出色的 ```iOS Auto Layout``` 教程中，我将教你如何支持旋转，使用约束，使用图层以及设置拐角半径的动画。

<br>

# **支持旋转**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的应用程序要支持多种设备方向，则应在视图控制器内部实现以下方法。


``` Swift
class ViewController: UIViewController {

    override var shouldAutorotate: Bool {
        return false
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .portrait
    }

    override var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        return .portrait
    }
}
```

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显然，你可以更改返回值以不仅支持纵向，还支持横向模式。 这很容易，但是，如果你的控制器嵌入在导航或选项卡栏控制器内部，则旋转将停止工作。 在这种情况下，你必须继承 ```UINavigationController``` 的子类，并且必须从顶视图控制器返回正确的值。

``` Swift
class NavigationController: UINavigationController {

    override var shouldAutorotate: Bool {
        if let shouldRotate = self.topViewController?.shouldAutorotate {
            return shouldRotate
        }
        return super.shouldAutorotate
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if let orientation = self.topViewController?.supportedInterfaceOrientations {
            return orientation
        }
        return super.supportedInterfaceOrientations
    }

    override var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        if let orientation = self.topViewController?.preferredInterfaceOrientationForPresentation {
            return orientation
        }
        return super.preferredInterfaceOrientationForPresentation
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果具有 ```UITabBarController``` ，则适用相同的逻辑，但必须使用 ```selectedIndex``` 并基于所选视图控制器返回属性，而不是顶视图控制器。

``` Swift
class TabBarController: UITabBarController {

    override var shouldAutorotate: Bool {
        if let viewController = self.viewControllers?[self.selectedIndex] {
            return viewController.shouldAutorotate
        }
        return super.shouldAutorotate
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if let viewController = self.viewControllers?[self.selectedIndex] {
            return viewController.supportedInterfaceOrientations
        }
        return super.supportedInterfaceOrientations
    }

    override var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        if let viewController = self.viewControllers?[self.selectedIndex] {
            return viewController.preferredInterfaceOrientationForPresentation
        }
        return super.preferredInterfaceOrientationForPresentation
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，你的嵌入式控制器就可以控制支持的方向。 哦，顺便说一句，你可以使用此方法更改状态栏样式。

</br>

# **约束**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了 [```了解约束```](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/ "") 和 [```Auto Layout engine```](https://www.raywenderlich.com/160527/auto-layout-tutorial-ios-11-getting-started "") 的当前状态，我们应该回到过去并从头开始。

## ***Springs and struts***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还记得第一部 ```iPhone``` 吗？ 一屏统治一切！ ```320x480```，没有限制，没有适应性，只有帧和边界。 在固定大小的画布上放置视图绝对是理所当然的，这是一个示例。

``` Swift
class ViewController: UIViewController {

    weak var square: UIView!

    var squareFrame: CGRect {
        let midX = self.view.bounds.midX
        let midY = self.view.bounds.midY
        let size: CGFloat = 64
        return CGRect(x: midX-size/2, y: midY-size/2, width: size, height: size)
    }

    override func loadView() {
        super.loadView()

        let square = UIView()
        self.view.addSubview(square)
        self.square = square
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.square.backgroundColor = .yellow
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()

        self.square.frame = self.squareFrame
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```viewDidLayoutSubviews``` 方法可以非常方便地支持旋转，如果边界矩形发生变化，我每次都必须重新计算视图的框架。 你可能会想，这很容易，但是如果你必须支持许多设备尺寸会怎样？

>***算一算！***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于单个对象，进行计算非常容易，但是通常你在屏幕上有多个视图。 这些视图可以相互联系，简单的数学技巧可以使你完全陷入帧计算的混乱之中，你还会喜欢数学吗？ 肯定有更好的办法！

</br>

# **Auto Layout**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果通过```iOS6```为我们带来了布局技术的圣杯。 它是先前系统的完美继承者。 每个人都很快采用了它，这就是为什么苹果工程师在下一版本中完全删除了基于框架的布局```API```的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了开玩笑之外，这是一个新时代的开始，越来越多的设备诞生了，并且由于自动版式的限制，维护视图非常容易。 现在，我们应该使用布局约束来重构前面的示例。

``` Swift
class ViewController: UIViewController {

    weak var square: UIView!

    override func loadView() {
        super.loadView()

        let square = UIView()
        self.view.addSubview(square)
        square.translatesAutoresizingMaskIntoConstraints = false
        self.view.addConstraints([
            NSLayoutConstraint(item: square, attribute: .width, relatedBy: .equal, toItem: nil, attribute: .width, multiplier: 1.0, constant: 64),
            NSLayoutConstraint(item: square, attribute: .height, relatedBy: .equal, toItem: nil, attribute: .height, multiplier: 1.0, constant: 64),
            NSLayoutConstraint(item: square, attribute: .centerX, relatedBy: .equal, toItem: self.view, attribute: .centerX, multiplier: 1.0, constant: 0),
            NSLayoutConstraint(item: square, attribute: .centerY, relatedBy: .equal, toItem: self.view, attribute: .centerY, multiplier: 1.0, constant: 0),
        ])
        self.square = square
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.square.backgroundColor = .yellow
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我们不需要手动计算视图的框架，但是以编程方式创建约束并不是那么方便。 这就是为什么 ```Apple``` 制定了限制格式 [```Visual Format Language```](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/VisualFormatLanguage.html "")。

> **```VFL = WTF?```**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，这个```VFL```非常糟糕，我什至不想演示它，但是无论如何...

``` Swift
class ViewController: UIViewController {

    weak var square: UIView!

    override func loadView() {
        super.loadView()

        let square = UIView()
        self.view.addSubview(square)
        square.translatesAutoresizingMaskIntoConstraints = false

        let views: [String:Any] = ["view": self.view, "subview": square]
        let vertical = NSLayoutConstraint.constraints(withVisualFormat: "V:[view]-(<=1)-[subview(==64)]", options: .alignAllCenterX, metrics: nil, views: views)

        let horizontal = NSLayoutConstraint.constraints(withVisualFormat: "H:[view]-(<=1)-[subview(==64)]", options: .alignAllCenterY, metrics: nil, views: views)
        self.view.addConstraints(vertical)
        self.view.addConstraints(horizontal)
        self.square = square
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.square.backgroundColor = .yellow
    }
}
```

> **```God forbid the engineer who invented this black magic. :)```**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，如你所见，我们肯定存在约束方面的问题。 创建所有约束很糟糕，至少要花很多行代码。 当然，你可以使用神奇的界面生成器，但是如果只是拖动线，那么有趣的地方在哪里呢？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以编程方式创建约束并不比计算框架好，它会导致你达到相同的复杂度甚至更糟，这就是为什么这么多第三方框架活跃起来并最终由```Apple```发出问题的原因。

> **```提示:```**\
我有一篇[```关于掌握自动布局锚点```](http://www.xuebaonline.com/Swift%E6%8E%8C%E6%8F%A1iOS%E8%87%AA%E5%8A%A8%E5%B8%83%E5%B1%80%E9%94%9A%E7%82%B9/ "")的出色文章，如果你想熟悉锚点，强烈建议阅读。 📖

</br>

# **锚点(Anchors)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[```锚点(Anchors)```](http://www.xuebaonline.com/Swift%E4%BD%BF%E7%94%A8%E5%B8%83%E5%B1%80%E9%94%9A%E7%82%B9%E6%B7%BB%E5%8A%A0%E7%BA%A6%E6%9D%9F/ "")的诞生是因为“自动布局”存在一些构造缺陷。

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```NSLayoutAnchor``` 类是用于使用流畅的 ```API``` 创建 ```NSLayoutConstraint``` 对象的工厂类。 使用这些约束可以使用“自动布局”以编程方式定义你的布局。

``` Swift
class ViewController: UIViewController {

    weak var square: UIView!

    override func loadView() {
        super.loadView()

        let square = UIView()
        self.view.addSubview(square)
        square.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            square.widthAnchor.constraint(equalToConstant: 64),
            square.heightAnchor.constraint(equalToConstant: 64),
            square.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            square.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
        ])
        self.square = square
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.square.backgroundColor = .yellow
    }
}
```

***锚点是用于自动布局约束的最佳方法。***

</br>

# **自适应布局(Adaptive layout)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果查看 ```Apple``` 提供的内置应用程序的当前状态，你会发现只有其中一些是响应式/自适应的。 通常，使用集合视图的应用更容易适应更大的屏幕或不同的设备方向。

***始终使用 ```collection views```。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了只是屏幕中心的一个视图之外，你都应该使用集合视图来构建用户界面。 它将为你提供可重用性，更低的内存开销，滚动以及更多好处。 如果你使用的是我的 ```CollectionView``` 微型框架，则甚至不必计算愚蠢的索引位置。

</br>

# **基于图层的自动化布局**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自动布局很棒，但有时你必须直接处理图层。 现在在这种情况下，你仍然必须进行一些计算。 如果要处理视图子类，则可以轻松覆盖 ```bounds``` 属性并更新 ```didSet``` 块中的框架。

``` Swift
override var bounds: CGRect {
    didSet {
        self.gradientLayer.frame = self.bounds
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个选项是在视图控制器中重写 ```viewDidLayoutSubviews``` 方法，并根据新边界设置图层的框架。

``` Swift
override func viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews()

    self.gradientView.gradientLayer.frame = self.gradientView.bounds
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以使用普通的键值监听来观察对象的 ```bounds``` 属性，并根据该属性来更新图层的框架。

``` Swift
// somewhere in the init method
self.addObserver(self, forKeyPath: "bounds", options: .new, context: nil)

override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
    guard keyPath == "bounds" else {
        return super.observeValue(forKeyPath: keyPath, of: object, change: change, context: context)
    }
    self.gradientLayer.frame = self.bounds
}

deinit {
    self.removeObserver(self, forKeyPath: "bounds")
}
```

</br>

# **带有动画的圆角设置**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，如果要在使用基于约束的布局时为视图设置动画，则必须执行类似的操作。

``` Swift
self.widthConstraint.constant = 64
UIView.animate(withDuration: 0.5, animations: {
    self.view.layoutIfNeeded()
}, completion: nil)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，如果要为视图的拐角半径设置动画，则可以始终使用传统方式，并在边界更改上设置图层的 ```cornerRadius``` 属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，自```iOS 10```以来，我们有了这个精美的新 ```UIViewPropertyAnimator API``` 。

``` Swift
self.imageView.layer.cornerRadius = 16
UIViewPropertyAnimator(duration: 2.5, curve: .easeInOut) {
    self.imageView.layer.cornerRadius = 32
}.startAnimation()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这非常简单，你甚至可以应用 ```cornerMask``` 来仅对某些角进行倒圆。 基于图层的布局示例位于本文提供的源代码中，以及每种自动布局技术的完整示例。 
