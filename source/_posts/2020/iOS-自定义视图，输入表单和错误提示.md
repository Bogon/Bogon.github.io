---
title: iOS 自定义视图，输入表单和错误提示
permalink: iOS 自定义视图，输入表单和错误提示
copyright: ture
date: 2020-04-30 20:02:00
keywords: iOS,Swift,输入表单,iOS库
tags:
    - [iOS]
    - [Swift]
categories:
    - [iOS]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于以编程方式创建自定义视图的一些建议，以及关于为什么使用集合视图构建表单的真相。

</br>

# **如何不为iOS应用构建表单？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从一个诚实的声明开始：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```为iOS应用构建输入表单```***](http://www.xuebaonline.com/%E4%B8%BAiOS%E5%BA%94%E7%94%A8%E6%9E%84%E5%BB%BA%E8%BE%93%E5%85%A5%E8%A1%A8%E5%8D%95/ "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事实是，这种表格构建方法仅在单元格始终在屏幕上可见的情况下才有效，这种情况很少见。 我在处理当前项目时发现了此问题，并且当单元格超出框架时，某些字段不断消失，并且将光标移至下一个输入字段停止了工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***```可重用性和内存效率并不总是你想要的。```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;似乎 ```UICollectionView``` 并不是制作输入表单的最佳解决方案，因为恒定的单元可重用性会弄乱某些预期的行为。 它对于具有“一千个元素”的列表仍然很好，但是对于输入表单，我不再推荐这种技术。 是的，我的错，对此感到抱歉...😬

<!-- more -->

</br>

# **在犯错中学习**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长话短说，我犯了一个错误，在你的开发人员职业生涯中，你可能也会收获很多。 这会使你成为一个不好的程序员吗？ 一点也不。 我们是人类，我们不断犯越来越小的错误，但是...

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的错误将永远存在，但是你可以从中学到很多东西。 仅当你一次又一次地犯同样的错误，或者你甚至没有意识到自己在做错事情时，问题才会开始。 退后一步，从更大的角度看问题确实是很难的。 有时你只需要其他人为你指出问题，但是负面反馈也可能会很痛苦。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，我不想太哲学，这是一个Swift开发者博客。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我学到的一些东西：

+ 我的想法并不总是奏效的🤣
+ 与其他人一起编码/工作总是更好
+ 有时“ padawan”会教“大师”😉
+ 专业的质量检查团队可以为你节省很多时间
+ [***```VIPER 是我的架构的杀手锏```***](http://www.xuebaonline.com/iOS%20VIPER%E6%9E%B6%E6%9E%84%E6%B7%B1%E5%85%A5%E5%AE%9E%E8%B7%B5/ "")，而不是 [***```UIcollection视图```***](http://www.xuebaonline.com/Swift%20UICollectionView%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/ "")
+ 基于UICollectionView的表单构建不起作用...
+ ...但是集合视图框架仍然适用于复杂的界面
+ 有一些专用时间来编码美化和重构
+ 以编程方式使用视图子类（或将来的SwiftUI）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后一点是最有趣的一点，让我解释一下原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仅来自代码的自定义视图子类


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以编程方式创建 ```UIView子类``` 是一项相对容易的任务。 你可以加载一个 ```nib文件``` ，也可以直接从代码中加载它。 几周前，我学到了一个新技巧，就是在我使用 ```Swift``` 创建新子类时一直困扰着我：

 > 如果根本不使用IB，为什么还要执行 ```init（coder :) ```？

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有 ```init（frame :)``` 到底发生了什么，我不想再处理这两个 ```init``` 方法，因为我正在使用自动布局，并且我完全试图忽略混乱的 ```Storyboard``` 中的界面生成器 和 ```nibs``` 。

 ``` Swift
 class View: UIView {

    @available(*, unavailable)
    override init(frame: CGRect) {
        super.init(frame: frame)

        self.initialize()
    }

    @available(*, unavailable)
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

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决方案：将这些愚蠢的 ··· 标记为不可用，因此没有人可以使用它们。 唯一的做法将是你自己的 ··· ，如果你像我一样对如此混乱的初始化过程感到恼火，则这是一种缓解。 😤

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你有了自己的基类，可以将其用作将来视图的父级。 当然，你几乎需要对每个UI元素（例如标签，按钮，文本字段等）执行相同的操作。这需要大量工作，但从长远来看，这是完全值得的。

``` Swift
import UIKit

class TitleLabel: Label {

    override func initialize() {
        super.initialize()

        self.textAlignment = .center
        self.font = UIFont.preferredFont(forTextStyle: .largeTitle)
        self.textColor = .systemBlue
    }

    func constraints(in view: UIView, padding: CGFloat = 8) -> [NSLayoutConstraint] {
        [
            self.topAnchor.constraint(equalTo: view.topAnchor, constant: padding),
            self.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: padding),
            self.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -1 * padding),
        ]
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个好的做法是为每个自定义用户界面组件都具有子类，例如主按钮，辅助按钮，标题标签，标题标签等。这样，你不必在视图控制器中配置视图，再加上 你可以使用一些辅助方法将常用约束放入子类中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，你还可以进行一些扩展，这些扩展可以帮助你进行视图配置。 你知道，就像 ```SwiftUI``` 中的修饰符一样。 你甚至可以重新创建完全相同的语法。 基本行为将不同，但这是另一回事。 📚

</br>

# **iOS中的表单新生成器怎么样？**

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我有一个全新的但仍然非常相似的解决方案。 我使用的是视图子类，而不是集合视图组件，而且集合视图已被 ```UIScrollView + UIStackView``` 组合替换。 🐐

``` Swift
class ViewController: UIViewController {

    weak var scrollView: ScrollView!
    weak var stackView: VerticalStackView!

    override func loadView() {
        super.loadView()

        let scrollView = ScrollView()
        self.view.addSubview(scrollView)
        self.scrollView = scrollView
        NSLayoutConstraint.activate([/*...*/])

        let stackView = VerticalStackView()
        self.scrollView.addSubview(stackView)
        self.stackView = stackView
        NSLayoutConstraint.activate([/*...*/])
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.title = "StackForm"
        self.navigationController?.navigationBar.prefersLargeTitles = true

        let email = EmailTextField(id: "email-input", placeholder: "Email")
        self.stackView.addArrangedSubview(email)

        let password = PasswordTextField(id: "password-input", placeholder: "Password")
        self.stackView.addArrangedSubview(password)

        let submit = SubmitButton(id: "submit-button", title: "Submit")
        .onTouch { [weak self] _ in self?.submit() }
        self.stackView.addArrangedSubview(submit)
    }

    func submit() {
        guard
            let email = (self.view.view(withId: "email-input") as? UITextField)?.text,
            let password = (self.view.view(withId: "password-input") as? UITextField)?.text
        else {
            return
        }
        print("Account: \(email) - \(password)")
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我仍在使用相同的 [***```视图识别技术```***](http://www.xuebaonline.com/Swift%20%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%9A%84%E8%A7%86%E5%9B%BE/ "") ，而且我仍然更喜欢使用类似 ```SwiftUI``` 的 ```.onTouch``` 操作处理程序。 你可能会问：

***```为什么不简单地使用SwiftUI？```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好吧，事实是 ```SwiftUI``` 仅是 ```iOS13``` ，如今大约只有55％的采用率，这是主要原因之一，但是 ```SwiftUI``` 还是不完整的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我正在尝试尽可能地接近 ```SwiftUI``` ，因此过渡到时候来的时候会减少痛苦。  ```SwiftUI``` 将会很棒，但是仍然是一个巨大的飞跃。 有时，我认为Apple只是出于市场/开发人员的需求而奔波（是的，我们是非常耐心的动物）。 第一步，也许一个围绕UIKit / AppKit的简单包装框架而没有整个声明性语法会是一个更好的主意...谁知道... CoreKit-> AppleKit？ 🤔

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，你可以从 [***```GitHub```***](https://github.com/theswiftdev/tutorials "") 下载 ```Swift 5``` 中最新的表单构建解决方案的工作示例。 只需在存储库中查找 ```StackForm``` 文件夹。
