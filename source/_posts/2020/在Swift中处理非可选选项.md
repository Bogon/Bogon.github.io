---
title: 在Swift中处理非可选选项
description: 在Swift中处理非可选选项
permalink: 在Swift中处理非可选选项
copyright: ture
keywords: >-
  iOS,UIKit,设计模式,抽象,Swift,迭代器设计模式,重构,Iterator design
  pattern,optionals,non-optional
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 迭代器设计模式
  - - optionals
  - - non-optional
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 47251
date: 2020-04-26 09:49:49
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选参数可以说是 ```Swift``` 最重要的功能之一，也是将其与 ```Objective-C``` 之类的语言区分开来的关键。 通过被迫处理可能为 ```nil``` 的情况，我们倾向于编写更具可预测性和较少错误的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，有时可选参数可能会使你处于一个很难处理的局面，在程序员看来，你知道（或至少在假设之下）某个变量在使用时始终为 ```non-nil``` ，即使它是 可选类型。 就像在视图控制器中处理视图时一样：

``` Swift
class TableViewController: UIViewController {
    var tableView: UITableView?

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView = UITableView(frame: view.bounds)
        view.addSubview(tableView!)
    }

    func viewModelDidUpdate(_ viewModel: ViewModel) {
        tableView?.reloadData()
    }
}
```
<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下， ```Swift``` 程序员会在与制表符和空格几乎相同的程度上存在分歧。 有人说：
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“由于它是可选的，因此你应该始终正确地解开它，使用 ```let``` 或 ```guard let``` 。”

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而其他人会朝完全不同的方向说：
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“由于你知道变量将不会为 ```nil``` ，请强制将其解包（使用！）。 崩溃比处于不确定状态要好。”

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本上，我们在这里谈论的是是否进行 [```防御性编程(英文：defensive programming)```](https://zh.wikipedia.org/wiki/%E9%98%B2%E5%BE%A1%E6%80%A7%E7%BC%96%E7%A8%8B "防御性编程")。 我们是否试图从不确定的状态中恢复，还是仅仅放弃并崩溃？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我必须对这个问题给出一个二元的答案，那么我肯定会选择后者。 未定义状态会导致很难发现错误，可能会导致不必要的代码执行，而采用防御性编程只会导致难以推理的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，我宁愿不必给出二进制答案，而是研究一些可用于以更细微的方式解决此问题的技术。 

</br>

# **真的可选吗？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变量和属性是可选的，但实际上是程序逻辑所必需的，实际上是体系结构缺陷的征兆。 如果需要某些东西，到没有它会使你处于不确定状态-它不是可选的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管在某些情况下（例如与某些系统 ```API``` 进行交互时），确实很难避免使用可选项--在许多情况下，我们可以使用某些技术来摆脱可选项。

</br>

# **懒加载(lazy)比非可选的(non-optionally optional)要好**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一种避免使用属性的可选选项的方法，即通过使用惰性属性来避免在创建父对象之后需要创建值的属性（例如，视图控制器中的视图-应该在 ```loadView()``` 或 ```viewDidLoad()``` 中创建）。 惰性属性可以是非可选的，但仍不需要在其父级的初始值设定项中创建。 它将在首次访问时创建。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从之前更新 ```TableViewController``` ，以对其表视图使用对属性进行懒加载：

``` Swift
class TableViewController: UIViewController {
    lazy var tableView = UITableView()

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.frame = view.bounds
        view.addSubview(tableView)
    }

    func viewModelDidUpdate(_ viewModel: ViewModel) {
        tableView.reloadData()
    }
}
```

没有可选项，没有不确定的状态！ 🎉

</br>

# **适当的依赖项管理要比非可选的可选项好**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选项的另一个常见用法是打破 [```循环依赖关系(circular dependencies)```](https://en.wikipedia.org/wiki/Circular_dependency "循环依赖关系") 。 有时您可能会遇到 ```A``` 依赖于 ```B``` ，但 ```B``` 也依赖于 ```A``` 的情况。类似于此设置：

``` Swift
class UserManager {
    private weak var commentManager: CommentManager?

    func userDidPostComment(_ comment: Comment) {
        user.totalNumberOfComments += 1
    }

    func logOutCurrentUser() {
        user.logOut()
        commentManager?.clearCache()
    }
}

class CommentManager {
    private weak var userManager: UserManager?

    func composer(_ composer: CommentComposer
                  didPostComment comment: Comment) {
        userManager?.userDidPostComment(comment)
        handle(comment)
    }

    func clearCache() {
        cache.clear()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在上面看到的，我们在 ```UserManager``` 和 ```CommentManager``` 之间具有循环依赖关系，其中它们都不假定彼此拥有所有权，但是它们在逻辑上仍然相互依赖。 那只是等待发生的错误！ 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了解决上述问题，我们改为让 ```CommentComposer``` 充当中间人，并负责通知 ```UserManager``` 和 ```CommentManager``` 已做出评论：

``` Swift
class CommentComposer {
    private let commentManager: CommentManager
    private let userManager: UserManager
    private lazy var textView = UITextView()

    init(commentManager: CommentManager,
         userManager: UserManager) {
        self.commentManager = commentManager
        self.userManager = userManager
    }

    func postComment() {
        let comment = Comment(text: textView.text)
        commentManager.handle(comment)
        userManager.userDidPostComment(comment)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，```UserManager``` 可以拥有对 ```CommentManager``` 的强引用，而没有循环引用（或依赖)：

``` Swift
class UserManager {
    private let commentManager: CommentManager

    init(commentManager: CommentManager) {
        self.commentManager = commentManager
    }

    func userDidPostComment(_ comment: Comment) {
        user.totalNumberOfComments += 1
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们再次删除了所有可选内容，并提供了可预测的代码！ 🎉

</br>

# **崩溃**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的示例中，我们看到了一些示例，在这些示例中我们可以调整代码以通过删除可选选项来消除不确定性。 但是，有时候这是不可能的。 假设你正在加载包含应用程序配置的本地 ```JSON``` 文件。 这本质上是一项可能会失败的操作，因此我们将需要添加一些错误处理。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果配置无法加载，则继续执行程序会使应用程序处于未定义状态，因此在这种情况下可能会引发崩溃。 这样，我们可以获得崩溃报告，并希望我们的 ```tests & QA``` 检查流程能够早于解决此问题并将其传递给用户。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么，我们如何崩溃？ 最简单的解决方案是简单地使用 ```! operator``` ，强制解开可选选项，如果它包含 ```nil``` 则导致崩溃：

``` Swift
let configuration = loadConfiguration()!
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管这种方法很简单，但缺点是很大。 如果此代码开始崩溃，我们将得到的错误消息是：

``` Swift
fatal error: unexpectedly found nil while unwrapping an Optional value
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误消息不会告诉我们错误的原因和发生位置，也没有提供解决方法的线索。 相反，让我们结合使用 ```guard``` 语句和 ```preconditionFailure()``` 函数，以自定义消息退出。

``` Swift
guard let configuration = loadConfiguration() else {
    preconditionFailure("Configuration couldn't be loaded. " +
                        "Verify that Config.JSON is valid.")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用以上方法崩溃时，我们将获得更多有用的错误消息：

``` Swift
fatal error: Configuration couldn’t be loaded. Verify that Config1.JSON is valid.: file ~/DemoApp/Sources/AppDelegate.swift, line 17
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以采取明确的措施来解决该问题，并且我们确切知道它在代码库中的位置！ 🚀

</br>

# **更多**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进行上面的 ```guard-let-preconditionFailure``` 操作可能会有些乏味，并且确实会使代码难于遵循。 我们真的不想在代码中留出如此大的空间，这样的特殊情况-我们要专注于我们的逻辑。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的解决方案是 ```Require``` 。 它在 ```Optional``` 上添加了一个简单的 ```require()``` 方法，可以完成上述操作，但是使调用站点更加整洁。 使用 ```Require``` 时，上述配置加载代码如下所示：

``` Swift
let configuration = loadConfiguration().require(hint: "Verify that Config.JSON is valid")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果失败，它将给我们以下错误消息：

``` Swift
fatal error: Required value was nil. Debugging hint: Verify that Config1.JSON is valid: file ~/DemoApp/Sources/AppDelegate.swift, line 17
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Require``` 的另一个优点是，它还将引发 ```NSException``` 以及调用 ```preconditionFailure``` ，这将使崩溃报告工具（如 ```Crashlytics``` ）能够提取崩溃的所有元数据。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想在代码中使用  [```Require```](https://github.com/JohnSundell/Require "Require") ，它是 [```GitHub```](https://github.com/JohnSundell/Require "Require") 上的开源代码。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;综上所述，这些是我在 ```Swift``` 中处理非可选可选内容的技巧：

+ 懒加载(lazy)比非可选的(non-optionally optional)要好
+ 适当的依赖项管理要比非可选的可选项好
+ 当您需要使用非可选的可选选项时，正常崩溃
