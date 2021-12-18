---
title: VIPER体系结构：我们的最佳实践，像老板一样构建应用程序
description: VIPER体系结构：我们的最佳实践，像老板一样构建应用程序
permalink: VIPER体系结构：我们的最佳实践，像老板一样构建应用程序
copyright: ture
keywords: 'iOS,Swift,VIPER, 架构, architecture, 可重用'
tags:
  - - iOS
  - - Swift
  - - VIPER
  - - 架构设计
categories:
  - - iOS
  - - Swift
  - - VIPER
  - - 架构设计
abbrlink: 55568
date: 2020-04-28 17:06:59
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Cheesecake Labs``` 的开发团队使用 ```VIPER``` 进行 ```iOS``` 和 ```Android``` 移动应用程序开发已有一年多了，我们喜欢这种简洁的架构！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本文使用 ```VIPER``` 样板中的代码示例总结了关于 ```VIPER``` 架构的最佳实践。 这里使用的代码示例在 ```Swift``` 中，但是提到的所有概念都可以应用于使用 ```Java``` 或 ```Kotlin``` 用 ```VIPER``` 开发的 ```Android``` 项目。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你仍然需要熟悉基本的 ```VIPER``` 概念以及该体系结构如何使你的代码更具组织性和可伸缩性，建议你阅读以下文章：

+ [***```最常见的移动应用程序设计模式之间的比较```***](https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52 "")
+ [***```在iOS上使用VIPER的第一步的绝佳指南```***](https://www.ckl.io/blog/ios-project-architecture-using-viper "")
+ [***```适用于Android的VIPER架构上的独特内容```***](https://cheesecakelabs.com/blog/using-viper-architecture-android/ "")

<!-- more -->


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么，你准备好学习有关如何使用 ```VIPER``` 构建应用程序的最佳实践吗？

</br>

# **真正的VIPER模块解耦的项目结构**

![真正的VIPER模块解耦的项目结构](http://cdn.xuebaonline.com/va-stp1.png "VIPER的iOS文件夹结构")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你会看到，我们将所有 ```VIPER``` 的模块保持尽可能的分离，从而使我们免于在项目扩展或规格更改时遇到的麻烦。 如果删除其中任何一个，则仅在引用该模型的路由器上会出现一些错误，而在 ```Views``` , ```Presenters```, ```Interactors```,``` Data Managers``` , ```Entity``` 上则不会。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帮助你真正分离模块的一个关键点是将所有实体保留在单独的文件夹中，将它们链接到项目本身而不是任何特定模块。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，使用数据管理器执行 ```API``` 请求和操作本地数据库是增加项目组织的一种极好的方法，但需要注意以下几点：

+ 将数据管理器保留在 ```Utils``` 文件夹中，将其与模块分开；
+ 将类似实体（例如用户，个人档案和公司档案）的方法分组到一个 ```Data Manager``` 中，以避免为每个实体创建一个 ```Data Manager``` 的开销；
+ 将每个 ```Data Manager``` 分为 ```Local``` 和 ```API``` 类，以使 ```Interactors``` 上的代码更具可读性：

``` Swift
class MainSearchInteractor {

    // Properties
    weak var output: MainSearchInteractorOutput?
    var apiDataManager = ProfileApiDataManager()
    var localDataManager = ProfileLocalDataManager()
}

extension MainSearchInteractor: MainSearchUseCase {

    // Code below show how interactor get data from API and then saves it on local DB with separate data managers
    func searchProducts(with searchTerm: String, onPage page: Int) {

        self.apiDataManager.searchProducts(with: searchTerm, forPage: page) { (products) in
            if let products = products {
                self.localDataManager.updateSearchResultFavorites(products) { (products) in
                    self.output?.onFetchProductsSuccess(Array(products), shouldAppend: page != 1)
                }
            } else {
                self.output?.onFetchProductsSuccess(nil, shouldAppend: page != 1)
            }
        }
    }
}
```

</br>

# **生成VIPER的文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你已经使用 ```VIPER``` 进行过开发，那么你将无法创建一个简单的屏幕（在导航栏上具有三个标签）所需的所有 ```20+``` 个 ```Swift``` 文件。 但是，隧道尽头有一个亮点：这个令人惊叹的 ```Xcode插件``` ，只需单击三下，即可自动为一个模块生成所有 ```VIPER``` 文件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你认为太多，请使用 [***```Generamba```***](https://github.com/strongself/Generamba "") ： ```Generamba``` ：一种代码生成器，旨在从终端创建 ```VIPER``` 模块，非常容易为其他任何类定制。

</br>

# **用协议定义 contracts**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像对我们人类一样，```VIPER contracts``` 是两方（模块组件）之间关于协议所产生的权利（方法）和义务（论据）的自愿协议。 在 ```Cheesecake Labs``` ，我们使用协议定义模块组件可以从同一模块上的其他组件调用的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，例如，在开始为新的 ```View``` 或 ```Presenter``` 编写代码之前，请考虑两个组件之间的信息流，并首先在 ```Contract``` 上声明其方法。

``` Swift
// MainSearchContract.swift
import Foundation

protocol MainSearchView: BaseView {
    func showCustomError(_ message: String?)
    func updateVisibility(onSearchController willBeActive: Bool)
    func showSearchResult(_ products: [Product]?, shouldAppend: Bool)
}

protocol MainSearchPresentation: class {
    func onViewDidLoad()
    func onWillPresentSearchController()
    func onSearchTermChanged(to searchTerm: String)
    func onProductFavoriteChanged(_ product: Product, to isFavorite: Bool)
    func onProductSelected(_ product: Product)
    func onInfiniteScrollTriggered()
}

protocol MainSearchUseCase: class {
    func searchProducts(with searchTerm: String, onPage page: Int)
    func updateProductFavorited(_ product: Product, to newValue: Bool)
}

protocol MainSearchInteractorOutput: class {
    func onFetchProductsSuccess(_ products: [Product]?, shouldAppend: Bool)
    func onFetchProductsFailure(message: String)
}

protocol MainSearchWireframe: class {
    func showProductScreen(delegate: ProductScreenDelegate, product: Product?)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面提到的 ```Xcode插件``` 还将创建具有所有协议的 ```ModuleNameContract.swift``` 文件，等待你声明必要的方法。 一旦定义了这些协议，就可以完全控制 ```VIPER``` 模块各组件之间的信息流。

</br>

# **在路由器上自动进行模块初始化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在显示 ```VIPER``` 模块的视图之前，你需要确保所有组件均已正确初始化。 我可以想到至少三种非常不同的方法，但是下面的流程是我们想出的最佳选择。 这里的王牌是每个路由器上都有一个静态函数，用于初始化自己的模块以及一些 ```UIViewController``` 和 ```UIStoryboard``` 扩展。 然后，如果 ```模块A``` 要提供 ```模块B``` ：

+ ```模块A``` 的路由器将调用 ```模块B``` 的静态函数来初始化其所有组件，并返回一个视图。
+ ```模块A``` 的路由器显示 ```模块B``` 的视图。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就如此容易。 在自己的路由器上拥有模块初始化代码将消除大量的代码重复，特别是对于大型项目。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你需要一次创建这些扩展：

``` Swift
// ReusableView.swift
protocol ReusableView: class {}

extension ReusableView {
    static var reuseIdentifier: String {
        return String(describing: self)
    }
}
// UIViewController.swift
extension UIViewController: ReusableView { }
// UIStoryboard.swift
extension UIStoryboard {
    func instantiateViewController() -> T where T: ReusableView {
        return instantiateViewController(withIdentifier: T.reuseIdentifier) as! T
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，在每个 ```VIPER模块``` 的 ```路由器``` 上保留初始化代码：

``` Swift
// MainSearchRouter.swift
class MainSearchRouter {

    // MARK: Properties
    weak var view: UIViewController?

    // MARK: Static methods
    static func setupModule() -> MainSearchViewController {
        let viewController = UIStoryboard(name: MainSearchViewController.storyboardName, bundle: nil).instantiateViewController() as MainSearchViewController
        let presenter = MainSearchPresenter()
        let router = MainSearchRouter()
        let interactor = MainSearchInteractor()

        viewController.presenter =  presenter

        presenter.view = viewController
        presenter.router = router
        presenter.interactor = interactor

        router.view = viewController

        interactor.output = presenter

        return viewController
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看来似乎有很多步骤，但有个好消息：前述插件对我们也能实现自动化！ 🙂

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，如果要将 ```UITabBarController``` 或 ```UIPageViewController``` 装入 ```VIPER``` 架构，则需要采取一些其他步骤。 如果你需要任何帮助，请在此信息上发表评论，我会为你准备一个特定的 ```Gist``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亲爱的读者，如果你到目前为止已经提出了建议，那么你确实渴望获得知识。 因此，我将为你提供3条建议，以确保你完全了解路由器的职责：

+ 如果你需要在用户单击按钮时打开 ```URL``` ，请在路由器上调用 ```UIApplication.shared.openURL（url）``` ，因为你正在导航（即路由）到当前模块之外；
+ 社交媒体共享也使用相同的概念：从 ```Router``` 调用 ```UIActivityViewController``` ，因为 ```iOS``` 会将用户从当前模块发送到 ```View``` 或 ```app``` ；
+ 如果你仅要调用操作表来获得用户输入，那就是添加到当前模块中的UI组件。 因此，你可以从 ```View``` 中调用它，并从 ```UIAlertController``` 享受直接的回调。

</br>

# **使用 delegates 在 VIPER 模块之间发送数据**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能已经遇到了这样的情况： ```模块A``` 上的一个字段填充有 ```模块B``` 的所选项目。因此，当用户单击该字段时， ```模块A``` 调用 ```模块B``` ，而 ```模块B``` 通过以下方式将所选项目返回给现有的 ```模块A``` ： ```delegates``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代表们是在 ```VIPER``` 模块之间来回发送信息的绝佳方法：

``` Swift
// 1. Declare which messages can be sent to the delegate

// ProductScreenDelegate.swift
protocol ProductScreenDelegate {
//Add arguments if you need to send some information
    func onProductScreenDismissed()
    func onProductSelected(_ product: Product?)
}

// 2. Call the delegate when you need to send him a message

// ProductPresenter.swift
class ProductPresenter {

    // MARK: Properties
    weak var view: ProductView?
    var router: ProductWireframe?
    var interactor: ProductUseCase?
    var delegate: ProductScreenDelegate?
}

extension ProductPresenter: ProductPresentation {

    //View tells Presenter that view disappeared
    func onViewDidDisappear() {

        //Presenter tells its delegate that the screen was dismissed
        delegate?.onProductScreenDismissed()
    }
}

// 3. Implement the delegate protocol to do something when you receive the message

// ScannerPresenter.swift
class ScannerPresenter: ProductScreenDelegate {

    //Presenter receives the message from the sender
    func onProductScreenDismissed() {

        //Presenter tells view what to do once product screen was dismissed
        view?.startScanning()
    }
    ...
}

// 4. Link the delegate from the Product presenter in order to proper initialize it

// File ScannerRouter.swift
class ProductRouter {

    static func setupModule(delegate: ProductScreenDelegate?) -> ProductViewController {
        ...
        let presenter = ScannerPresenter()

        presenter.view = view
        presenter.interactor = interactor
        presenter.router = router
        presenter.delegate = delegate // Add this line to link the delegate
        ...
        }
}
```

</br>

# **避免使用 dictionaries 在VIPER组件之间传递数据**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想 ```100％``` 兼容 ```VIPER架构``` ，最好使用 ```POSO（普通老式Swift对象）``` 在 ```VIPER``` 的组件之间发送信息。 但是在 ```VIPER组件``` 之间发送实体本身可以很好地工作，并且消除了创建 ```POSO``` 的开销。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，如果你不想在项目开始成长和变化时迷失键名，请避免使用字典发送此数据。

<br>

# **专注于VIPER**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想充分利用此架构，请务必让你的团队与 ```VIPER模块``` 中每个组件的职责保持完全同步。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使在了解了每个特定组件的作用之后，我们的团队仍然面临一些疑问，这主要是受以前在 ```MVC``` 方面的经验影响。

+ 视图是处理 UI元素 的视图：它导入 ```UIKit``` 并从其模块中实现有关 ```UI元素``` 的所有逻辑。 例如， ```TableView``` 逻辑是在视图上实现的。 如果要使代码更具可读性，请在扩展名上拆分 ```TableView``` 逻辑。 如果要使你的项目更加简洁，请使用 ```TableViewDataManager``` 。
+ ```presenter``` 不会导入 ```UIKit``` ，也不会处理 ```UI元素``` ，但是会以视图所需的格式准备数据，并根据视图中的 ```UI事件``` 做出决定。 不要在 ```presenter``` 上操纵任何 ```UI元素``` ，它不应处理它们。
+ ```Interactor``` 也可以准备数据，但要用于数据库。 例如，一旦 ```ApiDataManager``` 提取了一些数据， ```Interactor``` 就可以在要求 ```LocalDataManager``` 保存数据之前进行一些排序或过滤。 但是请注意， ```Interactor``` 不了解 ```视图``` ，因此不知道应如何为视图准备数据。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品团队决定从你的项目中删除功能吗？ 还是你的小型项目开始变得庞大？ 使用正确的 ```VIPER架构``` ，避免将来出现麻烦！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自动化 ```VIPER文件``` 创建和模块初始化将消除使用该工具的开销（乍看之下很复杂），但架构清晰而出色。 ```Android开发人员``` 也可以使用它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到，我们的 VIPER架构 方法实际上是由 ```VIPRC模块``` ***（View-Interactor-Presenter-Router-Contract）*** 组成的，而实体与模块以及数据管理器是分离的。 我知道 ```VIPRC``` 这个名字一点也不性感，但是它可以让你像老板一样构建应用程序。