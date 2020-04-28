---
title: iOS子类化样式
permalink: iOS子类化样式
copyright: ture
date: 2020-04-28 16:03:15
keywords: iOS,Swift,子类化样式, 用户体验, Styling by subclassing, 可重用
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [子类化样式]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [子类化样式]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何通过使用 ```Swift``` 中的 ```UIKit``` 框架中的自定义视图子类来设计和构建 ***可重用*** 的用户界面元素。

</br>

# **问题：UI，UX，设计**

***```建立用户界面是工作中最难的部分！```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之：设计是找出适合特定问题的最佳解决方案的过程。图形设计通常是指在画布或纸上的物理图形。 ```UX``` 实际上就是用户与应用程序交互的方式，换句话说：“客户”旅程的整体虚拟体验。 ```UI``` 是他/她将通过触摸屏幕看到并与之交互的可见界面。 👆

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我不得不戴上设计师的帽子（甚至是开发者的帽子），我必须告诉你，在大多数情况下，弄清和实现适当的用户界面是最具挑战性的问题。如今的前端系统（移动，平板电脑甚至台式机应用程序）只是来自 ```service``` / ```API```的一些 ```JSON``` 数据之上的漂亮叠加层。 🤷‍♂️

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么这么难？好吧，我相信，如果你想成为一名优秀的设计师，那么你也需要适当的工程思维。你必须能够观察整个系统（大图），构造一致的 ```UI``` 元素（实际上到处看起来都是一样的），基于功能规范计划所需的体验等等。成为艺术家，跳出思维框框，并能够向他人解释（描述）你的想法也是一个基本要求。 🤯

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在告诉我，哪个行业的工作最艰辛？是的，如今免费提供的每个人都是设计师，有些公司根本不雇用这类专家，而只是让开发人员完成工作。无论如何，让我们专注于如何通过使用 ```Swift``` 中的子类来创建漂亮且可重用的设计实现。 👍

</br>

# **外观，主题和样式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我几乎没有使用 ```UIAppearance API``` 。 这是个人喜好，但是我想直接在视图实例上设置设计属性，例如 ```font```，```textColor```，```backgroundColor```。 尽管在某些情况下，我发现外观代理非常好，但是仍然存在一些问题。 也许这将随着 ```iOS 13``` 以及期待已久的 ```dark mode``` 的到来而改变。
 
>***``` Dear Apple please make an auto switch based on day / night cycles (you know like the sunset, sunrise option in the home app). 🌙```***

+ ***样式*** 是指定单个视图外观的属性的集合。
+ ***主题*** 是应用于整个应用程序的一组外观相似的视图样式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今，我通常会创建一些预定义的样式元素集，最可能是字体，颜色，但有时还会是图标等。我喜欢采用以下结构：

**Fonts**

+ title
+ heading
+ subheading
+ body
+ small


**Colors**

+ title
+ heading
+ background

**Icons**

+ back
+ share

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以有更多的元素，但是为了简单起见，让我们使用嵌套结构通过一个非常简单的 ```Swift``` 解决方案来实现这些元素：

``` Swift
struct App {

    struct Fonts {
        static let title = UIFont.systemFont(ofSize: 32)
        static let heading = UIFont.systemFont(ofSize: 24)
        static let subheading = UIFont.systemFont(ofSize: 20)
        static let body = UIFont.systemFont(ofSize: 16)
        static let small = UIFont.systemFont(ofSize: 14)
    }

    struct Colors {
        static let title = UIColor.blue
        static let heading = UIColor.black
        static let background = UIColor.white
    }

    struct Icons {
        static let back = UIImage(named: "BackIcon")!
        static let share = UIImage(named: "ShareIcon")!
    }

}

//usage example:
App.Fonts.title
App.Colors.background
App.Icons.back
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，我得到了一个非常简单的语法，这很好，虽然这不会让我进行动态样式设置，所以我无法在浅色/深色主题之间切换，但是我真的不介意，因为在大多数情况下 这不是必需的。 😅

***Structs vs enums:***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我可以使用枚举代替具有静态属性的结构，但是在这种情况下，我喜欢这种方法的简单性。 我不想弄乱接受枚举的原始值或扩展名。 这只是个人喜好。

**如果你必须支持多个主题怎么办？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这不是什么大问题，你可以根据需要定义协议，并根据需要实施所需的主题协议。 真正的问题是，当你必须在主题之间切换时，因为必须刷新/重新加载整个UI。 ♻️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有一些最佳做法，例如，可以使用 ```NSNotificationCenter``` 类来通知应用程序中的每个视图/控制器在发生主题更改时进行刷新。 另一个解决方案是简单地重新初始化应用程序的整个 ```UI``` ，因此这意味着你基本上从头开始使用全新的 ```rootViewController``` 。 😱

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，如果你需要这样的内容，请查看下面的链接，但是如果你只想在应用程序中支持暗模式，建议你等到第一个 ```iOS 13 beta``` 发布。 也许 ```Apple``` 会提供一些新颖的 ```API``` 来简化事情。

</br>

# **自定义视图作为样式元素**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们有了定义字体，颜色和其他基本构建块的好方法，是时候将这些样式应用于实际的 ```UI``` 元素了。 当然，你可以使用 ```UIAppearance API``` ，但是例如，你不能简单地通过外观代理设置自定义字体。 😢

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一件事是我喜欢设计的一致性。 因此，如果标题是我的应用程序中某处的蓝色 ```32pt``` 粗体系统字体，我也希望该元素在其他地方都遵循相同的准则。 我通过为每个应用了自定义样式的单个 ```view``` 元素创建子类来解决此问题。 因此，例如：

+ TitleLabel (blue color, 32pt system font)
+ HeadingLabel (blue color, 24pt system font)
+ StandardButton (blue background)
+ DestructiveButton (red background)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你有子类，并且正在使用代码中的自动布局约束，则另一件好事是，你可以将所有约束创建逻辑直接放入子类本身。 让我给你看一个例子：

``` Swift
import UIKit

class TitleLabel: UILabel {

    override init(frame: CGRect) {
        super.init(frame: frame)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    init() {
        super.init(frame: .zero)

        self.initialize()
    }

    func initialize() {
        self.translatesAutoresizingMaskIntoConstraints = false
        self.textColor = App.Colors.title
        self.font = App.Fonts.title
    }

    func constraints(in view: UIView) -> [NSLayoutConstraint] {
        return [
            self.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            self.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16),
            self.centerYAnchor.constraint(equalTo: view.centerYAnchor),
        ]
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我只需要设置一次 ```font＆textColor``` 属性，因此在完成视图初始化之后，我可以确保 ```TitleLabel``` 的每个实例看起来都完全相同。 用法也很简单，你只需要在接口构建器中设置类名，或者可以像这样简单地创建视图：

``` Swift
// loadView method in a view controller...
let titleLabel = TitleLabel()
self.view.addSubview(titleLabel)
NSLayoutConstraint.activate(titleLabel.constraints(in: self.view))
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢这种方法的地方是我的约束将在正确的位置，因此它们不会膨胀我的视图控制器的 ```loadView``` 方法。 你还可以根据当前情况使用额外的参数创建多个约束变量，因此它可以针对每种情况进行扩展。 👍

</br>

# **视图初始化很难**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该解决方案的缺点是，由于界面构建器的支持，视图初始化有点混乱。 你必须子类化每种视图类型（按钮，标签等），并一次又一次地复制并粘贴初始化方法。 我已经有一些有关此的文章，请查看下面的链接。 👇

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了解决这个问题，我通常以为自己的样式视图创建一个父类来结束。 这是我的标签的抽象基类的示例：

``` Swift
class Label: UILabel {

    override init(frame: CGRect) {
        super.init(frame: frame)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    init() {
        super.init(frame: .zero)

        self.initialize()
    }

    func initialize() {
        self.translatesAutoresizingMaskIntoConstraints = false
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以从现在开始，我只需要重写 ```initialize``` 方法。

``` Swift
class TitleLabel: Label {

    override func initialize() {
        super.initialize()

        self.font = App.Fonts.title
        self.textColor = App.Colors.title
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看，它好多了，因为我不再需要处理所需的视图初始化方法，默认情况下，自动调整大小功能也将关闭。 ❤️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我从本课程中学到的最后一点是，如果涉及到 ```UIKit``` 框架，则不必担心类和面向对象的编程。 如果在正确的地方使用面向协议的编程（也就是函数式编程），那将是很好的选择，但是由于 ```UIKit``` 确实是一个 ```OOP``` 框架，所以我相信遵循这些范式而不是选择某些笨拙的方式还是更好的。 🤪