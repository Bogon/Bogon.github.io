---
title: 为iOS应用构建输入表单
permalink: 为iOS应用构建输入表单
copyright: ture
keywords: 'iOS,Swift,输入表单,iOS库'
description: 为iOS应用构建输入表单
tags:
  - - iOS
  - - Swift
categories:
  - - iOS
  - - Swift
abbrlink: 45995
date: 2020-04-30 19:42:53
---

了解如何使用更新的集合视图视图模型框架构建复杂的表单，而无需使用 ```Swift``` 。

> **```提示:```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此方法不起作用，因为表单中的单元格将被重用，这会导致某些不一致的情况…… [***```请阅读我的其他文章```***](http://www.xuebaonline.com/iOS%20%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%86%E5%9B%BE%EF%BC%8C%E8%BE%93%E5%85%A5%E8%A1%A8%E5%8D%95%E5%92%8C%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA/ "") 。🤷‍♂️

</br>

# **CollectionView和输入表单**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[***```CollectionView框架```***](https://github.com/corekit/collectionview "") 刚刚进行了巨大更新。有很多新变化，但是最大的改进之一是我处理视图模型的方式。过去，你必须在视图模型中使用长函数名，包括通用视图和模型类名。如果你曾经阅读过 [***```最终UICollectionView指南```***](http://www.xuebaonline.com/Swift%20UICollectionView%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/ "") ，那么你应该了解我在说什么。好消息：我现在有一种更好的解决方案！ 😉

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此更新不仅可以清理很多代码，还可以添加自定义视图模型处理程序，因此我可以以一种非常简单的方式与输入字段，切换等交互。另一个巨大的改进是，我开始使用视图标识符。那是偶然的发现，我只想寻找 [***```一种通过标签识别视图的替代解决方案```***](http://www.xuebaonline.com/Swift%20%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%9A%84%E8%A7%86%E5%9B%BE/ "") ，然后我有了一个绝妙的主意：为什么不也通过id查找单元格呢？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结果，我现在可以使用框架来创建表单。我仍然相信集合视图是大多数应用程序的最终构建块。是的，你仍然可以说没有灵丹妙药，但是如果此解决方案可以覆盖我90％的用例，那很好。毕竟，大多数应用程序只是以一种不错的或不太好的方式可视化 ```JSON数据``` 。 🤷‍♂️

</br>

# **可重复使用的表单组件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们使用全新的框架来构建表单。 首先，你需要使用包管理器对其进行集成。 我真的希望在几周内我们可以使用 ```Swift Package Manager``` ，直到比你应该使用 ```CocoaPods``` 或 ```carthage``` 为止。

``` Swift
# cocoapods
source 'https://github.com/CoreKit/CocoaPods.git'
pod 'CollectionView', '~> 2.0.0'

# carthage
github "CoreKit/CollectionView" "2.0.0"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在让我们为输入字段创建一个可重用的单元格。 可以像往常一样随意使用 ```xib文件``` ，实现上的唯一区别是，我将在 ```reset方法``` 中删除目标侦听器。 我们稍后将在视图模型中添加一个。 🎯

``` Swift
import Foundation
import CollectionView

class InputCell: Cell {

    @IBOutlet weak var textField: UITextField!

    override func reset() {
        super.reset()

        self.textField.removeTarget(nil, action: nil, for: .editingChanged)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我还将创建一个简单的实体，用于在表单字段为空时显示占位符并存储输入字段的实际值，我们将其称为 ```InputEntity``` 。

``` Swift
import Foundation

struct InputEntity {
    var placeholder: String
    var value: String?
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在最困难的部分是：在视图和模型之间建立连接。

``` Swift
import Foundation
import CollectionView

class InputViewModel: ViewModel<InputCell, InputEntity> {

    var editingChangeHandler: ViewModelHandler?

    override var height: CGFloat {
        return 60
    }

    override func updateView() {
        self.view?.textField.placeholder = self.model.placeholder
        self.view?.textField.text = self.model.value

        self.view?.textField.addTarget(self,
                                       action: #selector(self.editingChanged(_:)),
                                       for: .editingChanged)
        self.view?.textField.addTarget(self,
                                       action: #selector(self.editingDidEnd(_:)),
                                       for: .editingDidEnd)
    }

    func onEditingChange(_ handler: @escaping ViewModelHandler) -> Self {
        self.editingChangeHandler = handler
        return self
    }

    @objc func editingChanged(_ textField: UITextField) {
        self.model.value = textField.text
        self.editingChangeHandler?(self)
    }

    @objc func editingDidEnd(_ textField: UITextField) {
        print("nothing-to-do-here-now...")
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个非常复杂的视图模型，但是它也可以做很多事情。 你应该了解的第一件事是 ```ViewModelHandler``` ，它基本上是可以在视图模型中使用的通用别名。 它使你能够传递回调的类型安全视图模型。 你稍后会看到。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二个主要更改是 ```updateView方法``` ，该方法用于基于来自模型的数据来更新视图。 我还将目标侦听器添加到视图中，以便可以直接在 ```view-model类``` 内部处理用户输入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```onEditingChange``` 方法是视图模型的 ```“公共” api``` 。 我现在使用on前缀将处理程序和侦听器添加到我的视图模型。 如果发生更改事件，它将基本上调用存储的块。 你可以根据需要添加任意数量的事件处理程序块。 我真的希望你能掌握这种方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一件事：现在返回单元格的高度是单线！ 🎊

</br>

# **Composing forms and more**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，该计划将具有一个包含两个输入字段的输入表单。 一个用于电子邮件地址，另一个将用于密码。 诀窍是，这次我不会向你展示整个代码，但是你必须弄清楚其余的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，我将向你展示制作自己的表单所需的所有知识，甚至包括一些复杂的表单。 不用担心，这只是几行代码。

``` Swift
import UIKit
import CollectionView

class ViewController: CollectionViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        let grid = Grid(columns: 1, margin: UIEdgeInsets(all: 16), padding: .zero)
        self.collectionView.source = .init(grid: grid, [
            [
                InputViewModel(id: "email-input", .init(placeholder: "Email", value: nil))
                .onEditingChange { viewModel in
                    guard let passwordViewModel = viewModel.by(id: "password-input") as? InputViewModel else {
                        return
                    }
                    passwordViewModel.model.value = viewModel.model.value ?? ""
                    passwordViewModel.updateView()
                },
                InputViewModel(id: "password-input", .init(placeholder: "Password", value: nil)),
            ],
        ])
        self.collectionView.reloadData()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你曾经使用过集合视图框架，那么你应该知道我一直使用网格系统，因为我真的不喜欢计算数字。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源是一组按部分分组的视图模型。这里唯一有趣的部分是，现在可以使用节和视图模型的数组来初始化源。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你使用和标识符初始化一个视图模型，则以后可以通过ID查询该视图模型。这正是在编辑更改处理程序块内发生的事情。每个视图模型都可以通过id返回其他一些视图模型。默认情况下，视图模型是类型安全的，由于通用的 ```ViewModelHandler``` 别名， ```viewModel``` 也在块内传递。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在这个小示例中，如果你在第一个输入字段中键入内容，则完全相同的文本将出现在第二个文本字段中。你可以在需要时按ID获取所有视图模型。例如，如果你必须提交此表单，则可以使用相同的方法来获取电子邮件和密码字段。

</br>

# **建立登录表单**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我要求你使用我的框架自行构建一个登录表单。 我保证不超过30分钟的工作时间。 我将向你展示我将使用的最终视图控制器，因此这可能会给你一些帮助。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想稍微增加点趣味，甚至可以添加一个复选框以接受隐私策略。 这里的主要思想是你应该为表单中的每个项目创建可重用的组件。 因此，例如，具有相应视图模型的 ```ToggleView``` 是一种很好的方法（也适用于按钮）。 🤫

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是最终的提示，你只需要创建自己的视图模型和视图即可。

``` Swift
import UIKit
import CollectionView

class ViewController: CollectionViewController {

    enum Ids: String {
        case email = "email-input"
        case password = "password-input"
        case privacyPolicy = "privacy-policy-checkbox"
        case submit = "submit-button"
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        let grid = Grid(columns: 1, margin: UIEdgeInsets(all: 16), padding: .zero)
        self.collectionView.source = .init(grid: grid, [
            [
                InputViewModel(id: Ids.email.rawValue, .init(placeholder: "Email", value: nil))
                .onEditingEnd { viewModel in
                    guard let passwordViewModel = viewModel.by(id: Ids.password.rawValue) as? InputViewModel else {
                        return
                    }
                    passwordViewModel.view?.textField.becomeFirstResponder()
                },
                InputViewModel(id: Ids.password.rawValue, .init(placeholder: "Password", value: nil, secure: true))
                .onEditingEnd { viewModel in
                    viewModel.view?.textField.endEditing(true)
                },
            ],
            [
                ToggleViewModel(id: Ids.privacyPolicy.rawValue, .init(label: "Privacy policy", value: false))
                .onValueChange { viewModel in
                    guard let submitViewModel = viewModel.by(id: Ids.submit.rawValue) as? ButtonViewModel else {
                        return
                    }
                    var model = submitViewModel.model
                    model.enabled = viewModel.model.value
                    submitViewModel.model = model
                    submitViewModel.updateView()
                },
            ],
            [
                ButtonViewModel(id: Ids.submit.rawValue, .init(title: "Submit", enabled: false))
                .onSubmit { viewModel in
                    guard
                        let emailViewModel = viewModel.by(id: Ids.email.rawValue) as? InputViewModel,
                        let passwordViewModel = viewModel.by(id: Ids.password.rawValue) as? InputViewModel
                    else {
                        return
                    }
                    /* ... */
                },
            ],
        ])
        self.collectionView.reloadData()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到此为止，这是一个几乎完整的登录表单，仅包含几行代码。 当然有一个基础框架，但是如果你检查 [***```源代码```***](https://github.com/corekit/collectionview "") ，你实际上会发现它不包含任何被视为黑魔法的东西。 💫