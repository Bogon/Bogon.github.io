---
title: iOS项目架构：使用VIPER
description: iOS项目架构：使用VIPER
permalink: iOS项目架构：使用VIPER
copyright: ture
date: 2020-04-28 16:58:57
keywords: iOS,Swift,VIPER, 架构, architecture, 可重用
tags:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
categories:
    - [iOS]
    - [Swift]
    - [VIPER]
    - [架构设计]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发 ```iOS``` 应用时，请务必考虑应使用哪种 ```iOS项目架构``` 。 大多数开发人员使用 ```Apple``` 建议的模式：所谓的```MVC（模型-视图-控制器）架构```。 但是， ```MVC``` 本身已经建立了完善的缺陷。 一方面，由于其简单性，它甚至可以使最有经验的工程师将不属于视图或模型的任何代码放入控制器的逻辑中–在控制器中生成大量代码，并真正压缩视图和模型 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这篇文章中，我们将介绍 ```VIPER``` ，这是 ```MVC``` 的一种流行替代品，它可以帮助你克服其限制，同时保持代码模块化和组织良好，从而改善开发过程。


<!-- more -->

</br>

# **什么是VIPER？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```VIPER``` 是 ```View``` ， ```Interactor``` ， ```Presenter``` ， ```Entity``` 和 ```Router``` 的反义词。 基本上，这是一种实施 ```“单一责任原则”``` 的方法，可以为你的 ```iOS``` 项目创建更简洁，更模块化的结构。 这种模式背后的思想是隔离应用程序的依赖关系，以平衡实体之间的职责委派。 这是通过使用以下体系结构来实现的：

![什么是VIPER？](http://q8wtfza4q.bkt.clouddn.com/vu-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上图说明了 ```VIPER``` 体系结构，其中每个块对应于具有特定任务，输入和输出的对象。 将这些块视为装配线中的工人：工人完成对某个对象的工作后，该对象将传递给下一个工人，直到完成产品为止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;块之间的连接表示对象之间的关系，以及它们之间传递的信息类型。 从一个实体到另一个实体的通信是通过协议进行的，我们将在本文中进一步说明。

</br>

# **iOS项目架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考虑到 ```VIPER``` 架构的真正目的，现在重要的是要多了解每个部分以及它们的职责。 为此，我们将开发一个基本应用程序（代码也可在 [***```GitHub```***](https://github.com/pedrohperalta/Articles-iOS-VIPER "") 上找到），该应用程序从 ```REST API``` 中获取文章列表，并在用户屏幕上显示这些文章。

## ***View***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```iOS``` 应用程序中的 ```VIPER``` ```View``` 是一个 ```UIViewController``` ，其中包含一个子视图，该子视图可以通过编程方式实现，也可以使用接口生成器 ```（IB）``` 来实现。 它的唯一责任是显示演示者要告诉的内容，并处理用户与屏幕的交互。 当用户触发任何需要处理的事件时， ```View``` 会简单地将其委托给 ```Presenter``` ，并等待响应以告知下一步应显示什么。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们的商品可视化应用程序的 ```“View”``` 在 ```Swift``` 中的代码：

``` Swift
/*
 * Protocol that defines the view input methods.
 */
protocol ArticlesViewInterface: class {
    func showArticlesData(articles: [Article])
    func showNoContentScreen()
}

/*
 * A view responsible for displaying a list
 * of articles fetched from some source.
 */
class ArticlesViewController : UIViewController, ArticlesViewInterface
{
    // Reference to the Presenter's interface.
    var presenter: ArticlesModuleInterface!

    /*
     * Once the view is loaded, it sends a command
     * to the presenter asking it to update the UI.
     */
    override func viewDidLoad() {
        super.viewDidLoad()
        self.presenter.updateView()
    }

    // MARK: ArticlesViewInterface

    func showArticlesData(articles: [Article]) {
        self.articles = articles
        self.tableView.reloadData()
    }

    func showNoContentScreen() {
        // Show custom empty screen.
    }
}
```

## ***Presenter***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Presenter``` 的工作就像 ```VIPER``` 模块主要部分之间的桥梁。 一种方式是，它接收来自 ```View``` 的输入事件，并通过向 ```Interactor``` 请求数据来对它们做出反应。 另一方面，它接收来自 ```Interactor``` 的数据结构，在该数据上应用视图逻辑以准备内容，最后告诉视图显示什么。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们的文章可视化应用程序的 ```Presenter``` 的示例：

``` Swift
/*
 * Protocol that defines the commands sent from the View to the Presenter.
 */
protocol ArticlesModuleInterface: class {
    func updateView()
    func showDetailsForArticle(article: Article)
}


/*
 * Protocol that defines the commands sent from the Interactor to the Presenter.
 */
protocol ArticlesInteractorOutput: class {
    func articlesFetched(articles: [Article])
}


/*
 * The Presenter is also responsible for connecting
 * the other objects inside a VIPER module.
 */
class ArticlesPresenter : ArticlesModuleInterface, ArticlesInteractorOutput
{
    // Reference to the View (weak to avoid retain cycle).
    weak var view: ArticlesViewInterface!

    // Reference to the Interactor's interface.
    var interactor: ArticlesInteractorInput!

    // Reference to the Router
    var wireframe: ArticlesWireframe!


    // MARK: ArticlesModuleInterface

    func updateView() {
        self.interactor.fetchArticles()
    }

    func showDetailsForArticle(article: Article) {
        self.wireframe.presentDetailsInterfaceForArticle(article)
    }

    // MARK: ArticlesInteractorOutput

    func articlesFetched(articles: [Article]) {
        if articles.count > 0 {
            self.articles = articles
            self.view.showArticlesData(articles)
        } else {
            self.view.showNoContentScreen()
        }
    }
}
```

## ***Interactor***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将此对象视为特定模块内用例的集合。  ```Interactor``` 包含与实体相关的所有业务逻辑，并且应完全独立于用户界面 ```（UI）``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的 ```Article Visualization``` 应用程序中，一个用例示例是从服务器获取文章列表。 进行请求，处理响应并将其转换为实体（在本例中为商品对象）是 ```Interactor``` 的责任。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一旦 ```Interactor``` 完成运行某些任务，它将通知 ```Presenter``` 获得的结果。 要牢记的一件重要事情是，发送给 ```Presenter``` 的数据不应实现任何业务逻辑，因此 ```Interactor``` 提供的数据应整洁并可以使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的文章可视化应用程序中， ```Interactor``` 将负责从 ```API``` 提取文章：

``` Swift
/*
 * Protocol that defines the Interactor's use case.
 */
protocol ArticlesInteractorInput: class {
    func fetchArticles()
}


/*
 * The Interactor responsible for implementing
 * the business logic of the module.
 */
class ArticlesInteractor : ArticlesInteractorInput
{
    // Url to the desired API.
    let url = "https://www.myendpoint.com"

    // Reference to the Presenter's output interface.
    weak var output: ArticlesInteractorOutput!


    // MARK: ArticlesInteractorInput

    func fetchArticles() {
        Alamofire.request(.GET, url).responseArray { (response: Response) in
            let articlesArray = response.result.value
            self.output.articlesFetched(articlesArray!)
        }
    }
}
```

## ***Entity***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Entity``` 可能是 ```VIPER``` 结构中最简单的元素。 它封装了不同类型的数据，通常在其他 ```VIPER``` 组件中被视为有效负载。 需要注意的一件事是实体与数据访问层不同，后者应由交互器处理。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的 ```Article Visualization ```应用程序中， ```Article``` 类将是 ```Entity``` 的示例：

``` Swift
class Article
{
    var date: String?
    var title: String?
    var website: String?
    var authors: String?
    var content: String?
    var imageUrl: String?
}
```

## ***Router***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```VIPER``` 架构中的最后一个，也许是最特殊的元素是 ```Router``` ，它负责模块之间的导航逻辑，以及模块的发生方式（例如，定义用于呈现屏幕的动画，或者应如何完成两个屏幕之间的转换） ）。它从 ```Presenters``` 接收输入命令，说出应该路由到哪个屏幕。另外， ```Router``` 应负责将数据从一个屏幕传递到另一个屏幕。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Router``` 应实施一个协议，该协议定义特定模块的所有导航可能性。很好，因为它可以仅查看 ```Router``` 的协议即可快速概览应用程序可以采用的所有路径。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ```iOS``` 框架的限制，只有 ```ViewController``` 可以在屏幕之间执行转换，因此 ```Router``` 必须包含对模块控制器或其任何子级的引用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们的 ```Router``` 在“文章可视化”应用程序中的外观（请注意，该路由器被广泛称为 ```“Wireframe”``` ）。

``` Swift
/*
 * Protocol that defines the possible routes from the Articles module.
 */
protocol ArticlesWireframeInput {
    func presentDetailsInterfaceForArticle(article: Article)
}


/*
 * The Router responsible for navigation between modules.
 */
class ArticlesWireframe : NSObject, ArticlesWireframeInput
{
    // Reference to the ViewController (weak to avoid retain cycle).
    weak var articlesViewController: ArticlesViewController!

    // Reference to the Router of the next VIPER module.
    var detailsWireframe: DetailsWireframe!


    // MARK: ArticlesWireframeInput

    func presentDetailsInterfaceForArticle(article: Article) {
        // Create the Router for the upcoming module.
        self.detailsWireframe = DetailsWireframe()

        // Sends the article data to the next module's Presenter.
        self.sendArticleToDetailsPresenter(self.detailsWireframe.detailsPresenter, article: article)

        // Presents the next View.
        self.detailsWireframe.presentArticleDetailsInterfaceFromViewController(self.articlesViewController)
    }


    // MARK: Private

    private func sendArticleToDetailsPresenter(detailsPresenter: DetailsPresenter, article: Article) {
        detailsPresenter.article = article
    }
}
```

</br>

# **什么时候应该使用VIPER？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在创建具有发展潜力的项目时，重要的是要考虑一个可以很好地扩展并允许许多开发人员同时无缝地进行工作的结构- ```MVC``` 结构可能不足以保持你的项目充分组织 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发人员发现自己调试大型类确实很常见，例如试图在大海捞针中找针。 通过 ```VIPER``` 建议的对象之间的松散耦合，你会注意到：

+ 通过崩溃报告更容易跟踪问题（由于“单一责任原则”）
+ 添加新功能更容易
+ 源代码将更加干净，紧凑和可重用
+ 与其他开发团队的冲突更少
+ 由于你的 ```UI``` 逻辑与业务逻辑是分开的，因此编写自动化测试（！）更容易。

</br>

# **什么时候不应该使用VIPER？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于你要解决的每个问题，你都应使用最适合你需求的工具。 由于涉及的元素数量众多，因此该体系结构在启动新项目时会产生开销（尽管从长远来看，这在很大程度上会得到回报），因此 ```VIPER``` 对于不打算扩展的小型项目而言可能是一个过大的杀伤力。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果团队不完全保持 ```VIPER``` 结构的一致性，那么你最终会遇到 ```MVC-VIPER``` 混合问题，这可能会令人头疼–因此在继续使用 ```VIPER``` 之前，请确保团队完全同步。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```VIPER``` 是一种非常酷的 ```iOS``` 项目架构模式，例如 ```MVP``` 和 ```MVVM``` 。 