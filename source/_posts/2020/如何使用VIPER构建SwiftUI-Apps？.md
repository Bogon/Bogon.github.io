---
title: 如何使用VIPER构建SwiftUI Apps？
description: 如何使用VIPER构建SwiftUI Apps？
permalink: 如何使用VIPER构建SwiftUI Apps？
copyright: ture
keywords: 'iOS,Swift,VIPER, 架构, architecture, 可重用,SwiftUI'
tags:
  - - iOS
  - - Swift
  - - VIPER
  - - 架构设计
  - - SwiftUI
categories:
  - - iOS
  - - Swift
  - - VIPER
  - - 架构设计
  - - SwiftUI
abbrlink: 10168
date: 2020-04-29 10:17:21
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这篇文章中，我将向你展示如何在真实的 ```iOS应用程序``` 示例中将 ```SwiftUI``` 与 ```VIPER架构``` 结合起来。

</br>

# **SwiftUI-初学者**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网上确实有成百上千的 ```SwiftUI``` 教程，但是我只能找到一两个专门针对现实用例的东西，而不是像在 ```SwiftUI``` 中配置/制作X这样的较小细节。！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我对 ```SwiftUI``` 也有自己的 “挣扎” ，因为我的集合视图框架的结构与编写 ```SwiftUI``` 代码的方式完全相同。😂

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，我从零开始就知道会有大量新的 ```SwiftUI``` 教程到来，并且每个人都会对新的声明性 ```UI框架``` 大肆宣传，但是老实说，我已经有了通用的工具包。这就是为什么我不想写它。坦率地说， 比起 ```SwiftUI``` 更喜欢 ```Combine``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，因为到底是什么让我们尝试了新事物，并且我对 ```SwiftUI``` 如何适合我的应用程序构建方法感到好奇，所以我开始根据这些视图创建新的 ```VIPER模板``` 。我还想使用最新的新框架制作一个有用的，可扩展的，模块化的实际应用示例。 😛

<!-- more -->

</br>

# **了解现代VIPER架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我在过去两年中一直使用 ```VIPER架构``` 。 有人说“这太复杂了”或“这不适合小型团队”。 我只能告诉他们一个字：扯！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我相信我已经创建了一种现代且相对简单的模式，几乎可以用于任何东西。得益于简洁的架构和 ```SOLID原理``` ，学习 ```VIPER``` 肯定会提高你的代码质量。你将更好地了解较小的部分如何协同工作并相互交流。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孤立的较小组件可以加快开发速度，因为你只需一次做一点工作，而且你可以为特定的事物创建测试，这对于可测试性和代码覆盖率来说是一个巨大的胜利（你不必运行你的应用程序始终都在运行，如果你想测试某些东西，则可以使用你只需要的模块）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我通常使用一个非常简单的代码生成器来启动新模块，这样我可以节省很多时间。如果你必须独自处理项目，则模块生成器和预定义的结构甚至可以为你节省更多时间。而且，如果遵循基本 ```VIPER规则``` ，你真的不会弄乱搞乱项目结构。 ⏰

</br>

# **VIPER到底是什么？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你以前从未听说过 ```VIPER``` ，首先应该知道 ```VIPER模块``` 包含以下组件：
+ **Vi**ew = UIViewController子类或SwiftUI视图
+ **I**nteractor = 以正确的格式提供所需的数据
+ **P**resenter = 独立于UI的业务逻辑（具体操作）
+ **E**ntity = 数据对象（有时模块中不存在）
+ **R**outer = 建立视图控制器层次结构（显示，显示，关闭等）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这些文件旁边，我总是有一个模块文件，其中我定义了一个模块构建器，该构建器从上面的组件中构建了整个组件，在该文件中，我还定义了特定于模块的协议。 我通常将这些协议称为接口，它们使使用依赖注入可以替换任何组件成为可能。 这样，我们可以在单元测试中使用模拟对象来测试任何东西。

> **```提示:```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有人说带有 ```Builder``` 的 ```VIPER模块``` 称为 ```VIPER/B```。 我认为模块文件是存储模块构建器对象，模块接口和模块委托（如果需要的话）的理想场所。

</br>

# **面向协议的VIPER架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，关键是连接 ```View-Interactor-Presenter-Router``` 的6个主要协议。 这些协议确保 ```VIPER组件``` 看不到超出要求的内容。 🐛

``` Swift
View-to-Presenter
Presenter-to-View

Router-to-Presenter
Presenter-to-Router

Interactor-to-Presenter
Presenter-to-Interactor


Module
# ---
builds up pointers and returns a UIViewController


View implements View-to-Presenter
# ---
strong presenter as Presenter-to-View-interface


Presenter implements Presenter-to-Router, Presenter-to-Interactor, Presenter-to-View
# ---
strong router as Router-to-Presenter-interface
strong interactor as Interactor-to-Presenter-interface
weak view as View-to-Presenter-interface


Interactor implements Interactor-to-Presenter
# ---
weak presenter as Presenter-to-Interactor-interface


Router implemenents Presenter-to-Router
# ---
weak presenter as Presenter-to-Router-interface
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，视图（可以是 ```UIViewController``` 子类）牢固地保持了 ```presenter``` ，并且 ```presenter``` 将保留 ```interactor``` 和 ```router``` 类。 其他所有东西都是弱指针，因为我们不喜欢持有。 乍一看似乎有些复杂，但是在编写了最初的几个模块之后，你将发现将逻辑组件彼此分离是多么的好。 🐍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，并非所有内容都是 ```VIPER模块``` 。 不要尝试将你的 ```API通信层``` 或 ```CoreLocation服务``` 编写为模块，因为这类东西是独立的，例如：服务。 我将在下一篇文章中介绍它们，但现在，我们仅关注 ```VIPER模块``` 的剖析。

</br>

# **Swift 5中的VIPER实现**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你准备好编写一些 ```Swift``` 代码了吗？ 好吧，让我们创建一些通用的 ```VIPER接口``` ，以后可以扩展它们，不要担心不会那么难。 😉

``` Swift
// MARK: - interfaces

public protocol RouterPresenterInterface: class {

}

public protocol InteractorPresenterInterface: class {

}

public protocol PresenterRouterInterface: class {

}

public protocol PresenterInteractorInterface: class {

}

public protocol PresenterViewInterface: class {

}

public protocol ViewPresenterInterface: class {

}

// MARK: - viper

public protocol RouterInterface: RouterPresenterInterface {
    associatedtype PresenterRouter

    var presenter: PresenterRouter! { get set }
}

public protocol InteractorInterface: InteractorPresenterInterface {
    associatedtype PresenterInteractor

    var presenter: PresenterInteractor! { get set }
}

public protocol PresenterInterface: PresenterRouterInterface & PresenterInteractorInterface & PresenterViewInterface {
    associatedtype RouterPresenter
    associatedtype InteractorPresenter
    associatedtype ViewPresenter

    var router: RouterPresenter! { get set }
    var interactor: InteractorPresenter! { get set }
    var view: ViewPresenter! { get set }
}

public protocol ViewInterface: ViewPresenterInterface {
    associatedtype PresenterView

    var presenter: PresenterView! { get set }
}

public protocol EntityInterface {

}

// MARK: - module

public protocol ModuleInterface {

    associatedtype View where View: ViewInterface
    associatedtype Presenter where Presenter: PresenterInterface
    associatedtype Router where Router: RouterInterface
    associatedtype Interactor where Interactor: InteractorInterface

    func assemble(view: View, presenter: Presenter, router: Router, interactor: Interactor)
}

public extension ModuleInterface {

    func assemble(view: View, presenter: Presenter, router: Router, interactor: Interactor) {
        view.presenter = (presenter as! Self.View.PresenterView)

        presenter.view = (view as! Self.Presenter.ViewPresenter)
        presenter.interactor = (interactor as! Self.Presenter.InteractorPresenter)
        presenter.router = (router as! Self.Presenter.RouterPresenter)

        interactor.presenter = (presenter as! Self.Interactor.PresenterInteractor)

        router.presenter = (presenter as! Self.Router.PresenterRouter)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联类型只是特定类型的占位符，通过使用通用接口设计，我可以使用通用模块接口扩展来组装模块，如果缺少某些协议，则应用程序将崩溃，就像我尝试初始化不良模块一样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我喜欢这种方法，因为它使我省去了许多样板模块构建器代码。 同样，所有内容都将具有基本协议，因此我可以以一种真正整洁的面向协议的方式扩展任何内容。 无论如何，如果你不了解泛型没什么大不了的，那么在实际的模块实现中，你将几乎无法满足它们。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么实际模块的代码如何？

``` Swift
// TodoModule.swift

// MARK: - router

protocol TodoRouterPresenterInterface: RouterPresenterInterface {

}

// MARK: - presenter

protocol TodoPresenterRouterInterface: PresenterRouterInterface {

}

protocol TodoPresenterInteractorInterface: PresenterInteractorInterface {

}

protocol TodoPresenterViewInterface: PresenterViewInterface {

}

// MARK: - interactor

protocol TodoInteractorPresenterInterface: InteractorPresenterInterface {

}

// MARK: - view

protocol TodoViewPresenterInterface: ViewPresenterInterface {

}


// MARK: - module builder

final class TodoModule: ModuleInterface {

    typealias View = TodoView
    typealias Presenter = TodoPresenter
    typealias Router = TodoRouter
    typealias Interactor = TodoInteractor

    func build() -> UIViewController {
        let view = View()
        let interactor = Interactor()
        let presenter = Presenter()
        let router = Router()

        self.assemble(view: view, presenter: presenter, router: router, interactor: interactor)

        router.viewController = view

        return view
    }
}


// TodoPresenter.swift

final class TodoPresenter: PresenterInterface {
    var router: TodoRouterPresenterInterface!
    var interactor: TodoInteractorPresenterInterface!
    weak var view: TodoViewPresenterInterface!
}

extension TodoPresenter: TodoPresenterRouterInterface {

}

extension TodoPresenter: TodoPresenterInteractorInterface {

}

extension TodoPresenter: TodoPresenterViewInterface {

}

// TodoInteractor.swift

final class TodoInteractor: InteractorInterface {
    weak var presenter: TodoPresenterInteractorInterface!
}

extension TodoInteractor: TodoInteractorPresenterInterface {

}

// TodoRouter.swift

final class TodoRouter: RouterInterface {
    weak var presenter: TodoPresenterRouterInterface!
    weak var viewController: UIViewController?
}

extension TodoRouter: TodoRouterPresenterInterface {

}

// TodoView.swift

final class TodoView: UIViewController, ViewInterface {
    var presenter: TodoPresenterViewInterface!
}

extension TodoView: TodoViewPresenterInterface {

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```VIPER模块``` 由五个文件组成，与我的旧方法相比，这是一个巨大的改进（我为单个模块使用了9个文件，这仍然比2000行代码的大规模视图控制器要好，但是是的，它的文件很多 ...😂）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果需要，可以使用 [***```VIPER协议库```***](https://github.com/corekit/viper "") ，也可以将这些接口复制并粘贴到你的项目中。 我还有一个完全用 ```Swift``` 编写的 [***```VIPER模块生成器```***](https://github.com/corekit/vipera "") ，它可以基于此模板生成模块（或者你可以自己创建）。

<br>

# **如何创建VIPER接口？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一起看一个示例流程，请考虑以下示例：

``` Swift
protocol TodoRouterPresenterInterface: RouterPresenterInterface {
    func dismiss()
}

// MARK: - presenter

protocol TodoPresenterRouterInterface: PresenterRouterInterface {

}

protocol TodoPresenterInteractorInterface: PresenterInteractorInterface {
    func didLoadWelcomeText(_ text: String)
}

protocol TodoPresenterViewInterface: PresenterViewInterface {
    func ready()
    func close()
}

// MARK: - interactor

protocol TodoInteractorPresenterInterface: InteractorPresenterInterface {
    func startLoadingWelcomeText()
}

// MARK: - view

protocol TodoViewPresenterInterface: ViewPresenterInterface {
    func setLoadingIndicator(visible: Bool)
    func setWelcomeText(_ text: String)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视图在某个时间点在 ```presenter``` 上调用 ```ready（）``` ，因此 ```presenter``` 可以开始。首先，它通过调用 ```setLoadingIndicator（visible：true）``` 告诉视图显示加载指示符，然后要求 ```interactor``` 异步加载start欢迎文本```(startLoadingWelcomeText（）)```。数据返回到 ```interactor``` 之后，它可以使用 ```didLoadWelcomeText（“”）``` 方法通知 ```presenter``` 。现在， ```presenter``` 可以使用相同的方法 ```setLoadingIndicator（visible：false）``` 和 ```false``` 参数告诉视图隐藏加载指示器，并使用``` setWelcomeText（“”）``` 显示欢迎文本。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个用例是有人点击视图上的按钮以关闭控制器。该视图在 ```presenter``` 上调用close（）， ```presenter``` 只需在 ```router``` 上调用 ```dismiss（）``` 。在要求 ```router``` 关闭视图控制器之前，演示者还可以做其他事情（例如清理一些资源）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我希望你能得到例子，自己动手做所有的事情，这是一个很好的练习任务。当然，你可以利用区块，承诺或全新的 ```Combine框架``` 使你的生活更轻松。例如，你可以在某些异步数据加载完成后自动通知演示者。 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，既然你对现代 ```VIPER架构``` 有了基本的了解，就可以讨论如何用 ```SwiftUI``` 替换传统的 ```ViewController``` 子类。

<br>

# **如何设计基于VIPER的SwiftUI应用程序？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```SwiftUI``` 是相当独特的。 视图是结构，因此我们的通用 ```VIPER协议``` 需要进行一些更改才能使所有功能正常工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你要做的第一件事是摆脱 ```ViewPresenterInterface``` 协议。 接下来，你可以从 ```PresenterInterface``` 中删除 ```view属性``` ，因为我们将使用可观察的 ```view-model模式``` 来自动更新数据视图。 最后的修改是你必须从 ```ModuleInterface``` 扩展内的 ```assemble函数``` 的默认实现中删除 ```view``` 参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以我提到了一个视图模型，让我们做一个。 为了简单起见，我将使用 ```Bool``` 来指示是否出了问题，但是你可以使用其他视图，也可以使用独立的 ```VIPER模块``` 来显示 ```提示消息``` 。

``` Swift
import Combine
import SwiftUI

final class TodoViewModel: ObservableObject {

    let objectWillChange = ObservableObjectPublisher()

    @Published var error: Bool = false {
        willSet {
            self.objectWillChange.send()
        }
    }

    @Published var todos: [TodoEntity] = [] {
       willSet {
            self.objectWillChange.send()
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此类符合 ```ObservableObject``` ，它使 ```SwiftUI``` 可以检查更新并在发生某些更改时重新呈现视图层次结构。 你只需要具有 ```ObservableObjectPublisher``` 类型的属性，并从字面上发送一条消息（如果发生某些更改会触发此消息，从而触发视图中的自动更新）。 🔥

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```TodoEntity``` 只是一个基本结构，它遵循一堆协议，例如 ```SwiftUI``` 的新 ```Identifiable``` ，因为我们希望在列表中显示实体。

``` Swift
import Foundation
import SwiftUI

struct TodoEntity: EntityInterface, Codable, Identifiable {
    let id: Int
    let title: String
    let completed: Bool
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 基本的 ```SwiftUI``` 视图仍将实现 ```ViewInterface``` ，并且将具有对 ```presenter``` 的引用。 我们的 ```view-model属性``` 还将在这里使用 ```@ObservedObject``` 属性包装器进行标记。 到目前为止的代码是这样的：

``` Swift
import SwiftUI

struct TodoView: ViewInterface, View {

    var presenter: TodoPresenterViewInterface!

    @ObservedObject var viewModel: TodoViewModel

    var body: some View {
        Text("SwiftUI ❤️ VIPER")
    }
}
```

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```presenter``` 还将拥有一个弱的 ```var viewModel：TodoViewModel！``` 参考以能够更新视图模型。 好像我们通过使用视图模型在视图和 ```presenter``` 之间存在双向通信流。 在我看来很好。 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想在视图层次结构中传递一些数据，我们还可以使用全新的 ```@EnvironmentObject``` 。 你只需在环境对象中实现与对视图模型相同的观察协议即可。 例如：

``` Swift
import Foundation
import Combine

final class TodoEnvironment: ObservableObject {

    let objectWillChange = ObservableObjectPublisher()

    @Published var title: String = "Todo list" {
       willSet {
            self.objectWillChange.send()
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，让我向你展示如何实现模块构建器，因为这非常棘手。 你必须使用新的通用 ```UIHostingController``` ，这是一个 ```UIViewController``` 子类，因此可以在完成模块构建后将其返回。

``` Swift
final class TodoModule: ModuleInterface {
    typealias View = TodoView
    typealias Presenter = TodoPresenter
    typealias Router = TodoRouter
    typealias Interactor = TodoInteractor

    func build() -> UIViewController {
        let presenter = Presenter()
        let interactor = Interactor()
        let router = Router()

        let viewModel = TodoViewModel()
        let view = View(presenter: presenter, viewModel: viewModel)
            .environmentObject(TodoEnvironment())
        presenter.viewModel = viewModel

        self.assemble(presenter: presenter, router: router, interactor: interactor)

        let viewController = UIHostingController(rootView: view)
        router.viewController = viewController
        return viewController
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从现在开始放在一起只是小菜一碟。 如果需要，你可以挑战自己构建东西，而无需下载 [**```最终项目```**](https://github.com/theswiftdev/tutorials/tree/master/iOS/VIPERAndSwiftUI "")。 🍰






