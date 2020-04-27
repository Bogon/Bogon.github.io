---
title: Swift掌握iOS自动布局锚点
permalink: Swift掌握iOS自动布局锚点
copyright: ture
date: 2020-04-26 20:10:50
keywords: iOS,Swift,自动化布局,用户体验
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自动化布局]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寻找使用布局锚点的最佳实践吗？ 让我们学习如何使用 ```Swift``` 以正确的方式使用 ```iOS``` 自动布局系统。

# **以代码方式创建视图和约束**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我想回顾一下 ```UIViewController``` 生命周期方法，你可能对其中一些方法很熟悉。 它们按以下顺序被调用：

+ ```loadView```
+ ```viewDidLoad```
+ ```viewWillAppear```
+ ```viewWillLayoutSubviews```
+ ```viewDidLayoutSubviews```
+ ```viewDidAppear```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在自动布局之前，你必须在 ```viewDidLayoutSubviews``` 方法内进行布局计算，但是由于这是专业的自动布局教程，因此我们仅关注 ```loadView``` 和 ```viewDidLoad``` 方法。 🤓

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些是使用自动布局创建视图层次结构的基本规则：

+ 永远不要自己手动计算帧！
+ 使用 ```.zero``` 初始化视图 ```frame```
+ 将 ```translatesAutoresizing```, ```MaskIntoConstraints``` 设置为 ```false```
+ 使用 ```addSubview``` 将视图添加到视图层次结构
+ 创建并激活你的布局约束 ```NSLayoutConstraint.activate```
+ 使用 ```loadView``` 代替 ```viewDidLoad``` 创建具有约束的视图
+ 通过使用弱引用来管理内存管理
+ 在 ```viewDidLoad``` 中设置所有其他属性，例如背景色等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理论足够，下面是一个简短的示例：

``` Swift
class ViewController: UIViewController {

    weak var testView: UIView!

    override func loadView() {
        super.loadView()

        let testView = UIView(frame: .zero)
        testView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(testView)
        NSLayoutConstraint.activate([
            testView.widthAnchor.constraint(equalToConstant: 64),
            testView.widthAnchor.constraint(equalTo: testView.heightAnchor),
            testView.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            testView.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
        ])
        self.testView = testView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.testView.backgroundColor = .red
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很简单吧？ 只需几行代码，你就可以得到一个大小固定的中心对齐视图，并带有专用的类属性引用。 如果通过接口构建器创建完全相同的对象，则调用 ```loadView``` 方法，但是你必须设置对该视图的 ```@IBOutlet``` 引用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没关系，请随意选择。 有时我喜欢和 ```IB``` 一起玩，但是在大多数情况下，我更喜欢编程的做事方式。 😛

</br>

# **常见的UIKit自动布局约束用例**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我只使用布局锚。 你可能会浪费时间使用 ```visual format language``` ，但这绝对是死胡同。 因此，请记住我的话：仅使用锚点或堆栈视图，请勿使用其他任何视图！ 😇

这是我用来创建漂亮布局的最常见模式。 😉

## ***设置固定宽度或高度***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一个是最简单的一个：将视图的高度或宽度设置为固定点。

``` Swift
testView.widthAnchor.constraint(equalToConstant: 320),
testView.heightAnchor.constraint(equalToConstant: 240),
```

## ***设定长宽比***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置视图的纵横比只是将宽度限制为高度，反之亦然，你可以通过 ```multiplier``` 简单地定义倍数。

``` Swift
testView.widthAnchor.constraint(equalToConstant: 64),
testView.widthAnchor.constraint(equalTo: testView.heightAnchor, multiplier: 16/9),
```

## ***水平和垂直居中***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将视图居中放置在另一个视图中是一件很简单的事情，为此需要特定的锚点。

``` Swift
testView.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
testView.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
```


## ***伸展 | 用边距填充内部视图***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里唯一棘手的部分是，对于常量，尾部约束和底部约束的行为与顶部和前部约束略有不同。 通常，你必须使用负值，但经过几次尝试，你将在这里理解逻辑。 😅

``` Swift
testView.topAnchor.constraint(equalTo: self.view.topAnchor, constant: 32),
testView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor, constant: 32),
testView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor, constant: -32),
testView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor, constant: -32),
```

## ***比例宽度或高度***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不想使用常量值，可以使用 ```multiplier``` 。

``` Swift
testView.widthAnchor.constraint(equalTo: self.view.widthAnchor, multiplier: 1/3),
testView.heightAnchor.constraint(equalTo: self.view.heightAnchor, multiplier: 2/3),
```

## ***使用 safe area layout***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用最新的 ```iPhone``` ，你将需要一些指南，以确保你安全无虞。 这就是视图具有 ```safeAreaLayoutGuide``` 属性的原因。 调出安全区域指南后，即可获得所有常用锚。 💪

``` Swift
testView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
testView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
testView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor),
testView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
```

</br>

# **带有动画的布局约束**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有约束的动画很容易，你不应该相信别人会说什么。 我制定了一些规则和示例，可以帮助你理解为约束的常量值设置动画效果以及切换各种约束的基本原理。 👍

**规则**：

+ 将标准 ```UIView``` 动画与 ```layoutIfNeeded``` 一起使用
+ 始终先停用约束
+ 遵守停用的约束
+ 玩得开心！ 😛


约束动画示例：

``` Swift
class ViewController: UIViewController {

    weak var testView: UIView!
    weak var topConstraint: NSLayoutConstraint!
    var bottomConstraint: NSLayoutConstraint!
    var heightConstraint: NSLayoutConstraint!

    override func loadView() {
        super.loadView()

        let testView = UIView(frame: .zero)
        testView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(testView)

        let topConstraint = testView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor)
        let bottomConstraint = testView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor)

        NSLayoutConstraint.activate([
            topConstraint,
            testView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
            testView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor),
            bottomConstraint,
        ])

        let heightConstraint = testView.heightAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.5)

        self.testView = testView
        self.topConstraint = topConstraint
        self.bottomConstraint = bottomConstraint
        self.heightConstraint = heightConstraint
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.testView.backgroundColor = .red

        let tap = UITapGestureRecognizer(target: self, action: #selector(self.tapped))
        self.view.addGestureRecognizer(tap)
    }

    @objc func tapped() {
        if self.topConstraint.constant != 0 {
            self.topConstraint.constant = 0
        }
        else {
            self.topConstraint.constant = 64
        }

        if self.bottomConstraint.isActive {
            NSLayoutConstraint.deactivate([self.bottomConstraint])
            NSLayoutConstraint.activate([self.heightConstraint])

        }
        else {
            NSLayoutConstraint.deactivate([self.heightConstraint])
            NSLayoutConstraint.activate([self.bottomConstraint])
        }

        UIView.animate(withDuration: 0.25) {
            self.view.layoutIfNeeded()
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，还算不错：适应性强并且支持多种设备屏幕尺寸。 🤔

</br>

# **如何为iOS创建自适应布局？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果公司内置的 ```iOS``` 应用程序中都难以适应自适应布局。 如果你查看使用收藏夹视图制作的应用程序（例如照片），则在每个设备上的布局都可以。 但是，还有其他一些-我认为-在更大的屏幕上是可怕的经历。 ```#just use collectionview``` 所有内容。 🤐

## ***支持旋转***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自适应布局的第一步是支持多种设备方向。 你可以查看我以前有关iOS自动布局的文章，其中有很多关于旋转支持，在自动布局区域内使用图层等方面的好文章。

## ***特征集合***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二步是调整特征集合。  ```UITraitCollection``` 可以为你分组所有特定于环境的特征，例如尺寸类别，显示比例，用户界面 ```idom``` 等。 大多数时候，你将不得不检查垂直和水平尺寸类别。 有设备尺寸类别的参考以及 ```Apple``` 所做的所有可能的变化，请参阅下面的外部资源部分。 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的这个小段 ```Swift``` 代码示例演示了如何检查尺寸类别，以便为紧凑型和常规屏幕设置不同的布局。

``` Swift
class ViewController: UIViewController {

    weak var testView: UIView!

    var regularConstraints: [NSLayoutConstraint] = []
    var compactConstraints: [NSLayoutConstraint] = []

    override func loadView() {
        super.loadView()

        let testView = UIView(frame: .zero)
        testView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(testView)

        self.regularConstraints = [
            testView.widthAnchor.constraint(equalToConstant: 64),
            testView.widthAnchor.constraint(equalTo: testView.heightAnchor),
            testView.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            testView.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
        ]

        self.compactConstraints = [
            testView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            testView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
            testView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor),
            testView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
        ]

        self.activateCurrentConstraints()

        self.testView = testView
    }

    private func activateCurrentConstraints() {
        NSLayoutConstraint.deactivate(self.compactConstraints + self.regularConstraints)

        if self.traitCollection.verticalSizeClass == .regular {
            NSLayoutConstraint.activate(self.regularConstraints)
        }
        else {
            NSLayoutConstraint.activate(self.compactConstraints)
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.testView.backgroundColor = .red
    }

    // MARK: - rotation support

    override var shouldAutorotate: Bool {
        return true
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .allButUpsideDown
    }

    override var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        return .portrait
    }

    // MARK: - trait collections

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)

        self.activateCurrentConstraints()
    }
}
```

## ***设备检测***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以通过 ```UIDevice``` 类检查用户界面 ```idom``` （是 ```iPhone``` 还是 ```iPad``` ？），以基于该设备设置例如字体大小。 📱

``` Swift
UIDevice.current.userInterfaceIdiom == .pad
```

## ***屏幕尺寸***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确定你的环境的另一个选项是检查屏幕的大小。 你可以检查原始像素数或以 ```points``` 为单位的相对大小。

``` Swift
//iPhone X
UIScreen.main.nativeBounds   // 1125x2436
UIScreen.main.bounds         // 375x812
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常我会尽力遵守这些规则。 我真的不记得一个场景，在这种情况下，我需要的不只是上面列出的所有内容。 😉