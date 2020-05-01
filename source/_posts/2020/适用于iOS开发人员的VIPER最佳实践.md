---
title: 适用于iOS开发人员的VIPER最佳实践
description: 适用于iOS开发人员的VIPER最佳实践
permalink: 适用于iOS开发人员的VIPER最佳实践
copyright: ture
date: 2020-04-28 20:12:33
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本教程中，我将向你展示有关如何构建完全基于 ```Swift``` 的基于 ```VIPER``` 的 ```iOS``` 应用程序的完整指南。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这篇文章有点过时了，请期待很快会有新版本...

</br>

# **VIPER入门**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，你应该阅读 [***```关于VIPER架构本身的文章（理论上更深入） ```***](http://www.xuebaonline.com/iOS%20VIPER%E6%9E%B6%E6%9E%84%E6%B7%B1%E5%85%A5%E5%AE%9E%E8%B7%B5/ "")。 这是一个相当不错的文章，解释了所有 ```VIPER组件``` 和 ```内存管理``` 。  ⭐️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，那篇文章的问题在于，我还没有向你展示真正的技术细节。 用于实现 ```VIPER``` 的 ```Swift``` 代码。 在使用该体系结构进行了整整一年的项目之后，现在我终于可以与你分享我所有的最佳实践。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们开始创建一个全新的 ```Xcode``` 项目，使用单视图应用程序模板，将该项目命名（  ```VIPER最佳实践``` ），使用 ```Swift``` ，现在你准备好进行下一步，以制作出色的 ```“企业级” iOS 应用``` 。

<!-- more -->

</br>

# **生成VIPER模块**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;永远不要手动创建模块，始终使用代码生成器，因为这是一项重复性的任务，这很无聊，而且你应该专注于比制作样板代码更重要的事情。 你可以使用轻量级模块生成器：

[***```VIPERA```***](https://github.com/binarybirds/swift-template "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只需从 ```github``` 下载或克隆存储库即可。你可以通过运行``` swift run install --with-templates``` 安装二进制工具。这会将 ```vipera``` 应用程序安装在 ```/usr/local/bin/``` 下，并将基本模板安装在 ```〜/.vipera``` 目录下。你也可以使用自己的模板，但是现在我将使用默认模板。 🔨

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我通常从名为 ```Main``` 的模块开始，这是应用程序的根视图。你可以通过在项目目录中调用 ```vipera Main``` 来生成它，因此生成器可以为模板文件中的标题注释使用正确的项目名称。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过应用我的 ```Xcode``` 约定来稍微整理项目结构，这意味着资源将转到 ```Assets文件夹``` ，所有 ```Swift``` 文件都将移至 ```Sources``` 目录。如今，我还更改了 ```AppDelegate.swift ```文件，并为 ```UIApplicationDelegate``` 协议进行了单独的扩展。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Sources``` 目录下创建一个 ```Modules组``` （也有一个物理文件夹），并将新生成的 ```Main模块``` 移到该组下。现在，通过从 ```Assets文件夹``` 中为当前目标选择 ```Info.plist``` 文件来解决项目问题。还要删除 ```Main Interface``` ，然后你可以安全地删除 ```Main.storyboard``` 和 ```ViewController.swift``` 文件，因为我们根本不需要它们。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```AppDelegate.swift``` 文件中，你必须将 ```Main模块``` 的视图控制器设置为根视图控制器，因此它看起来应该像这样：

``` Swift
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder {

    var window: UIWindow?
}

extension AppDelegate: UIApplicationDelegate {

    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = MainModule().buildDefault()
        self.window?.makeKeyAndVisible()

        return true
    }
}
```

恭喜，你已经创建了第一个 ```VIPER模块``` ！ 🎉

</br>

# **UITabBarController & VIPER**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于在 ```VIPER模块``` 中使用 ```UITabBarController``` ，我有一个非常简单的解决方案。首先，让我们生成一些新模块，这些模块将成为 ```Tabs``` 。我将使用 ```JSONPlaceholder服务``` ，所以让我们为每个资源设想一个单独的选项卡：帖子，相册，照片，待办事项（具有相同的模块名称）。全部生成它们，然后将其移动到 ```modules文件夹``` 中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们再生成一个称为 ```Home的模块``` 。这将实现我们的 ```UITabBarController``` 。如果你愿意，可以将 ```Main模块``` 用于此目的，但我想保留该动画的目的，以便在加载屏幕和 ```Home模块``` 之间进行巧妙的转换（这完全取决于你的需求）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，我们要实现的主要逻辑是：主视图将通知 ```presenter``` 有关 ```viewDidAppear``` 事件的信息， ```presenter``` 将要求 ```router``` 显示 ```Home模块``` 。  ```Home模块```  的视图将是 ```UITabBarController``` 的子类，它还将通知其 ```presenter``` 有关 ```viewDidLoad``` 的信息，并且 ```presenter``` 将使用其 ```router``` 请求适当的 ```tabs``` 。

这是没有接口的代码：

``` Swift
class MainDefaultView: UIViewController {

    var presenter: MainPresenter?

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        self.presenter?.viewDidAppear()
    }
}

extension MainDefaultPresenter: MainPresenter {

    func viewDidAppear() {
        self.router?.showHome()
    }
}

extension MainDefaultRouter: MainRouter {

    func showHome() {
        let viewController = HomeModule().buildDefault()
        self.viewController?.present(viewController, animated: true, completion: nil)
    }
}


extension HomeDefaultView: HomeView {

    func display(_ viewControllers: [UIViewController]) {
        self.viewControllers = viewControllers
    }
}

// MARK: - Home module

extension HomeDefaultPresenter: HomePresenter {

    func setupViewControllers() {
        guard let controllers = self.router?.getViewControllers() else {
            return
        }
        self.view?.display(controllers)
    }

}

extension HomeDefaultRouter: HomeRouter {

    func getViewControllers() -> [UIViewController] {
        return [
            PostsModule().buildDefault(),
            AlbumsModule().buildDefault(),
            PhotosModule().buildDefault(),
            TodosModule().buildDefault(),
        ].map { UINavigationController(rootViewController: $0) }
    }
}

class HomeModule {

    func buildDefault() -> UIViewController {
        /* ... */

        presenter.setupViewControllers()

        return view
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“主页”模块构建器函数内部还有另外一行可触发 ```presenter``` 设置正确的视图控制器。 那只是因为在初始化过程完成之前调用了 ```UITabBarController```   ```viewDidLoad``` 方法。 这种行为是完全没有加载的，但是我认为这是为了保持对视图引用。 😊

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，现在你在项目中有一个适当的选项卡栏，已集成为 ```VIPER模块``` 。 现在是时候从服务器中获取一些数据了，这是另一个重要的教训：不是所有的东西都是 ```VIPER模块``` 。

</br>

# **Services & Entities**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会注意到，我的模块中没有实体。 我通常将 ```API``` ， ```CoreData``` 和 ```许多其他数据``` 提供程序包装为服务。 这样，所有相关实体都可以被抽象化，因此可以轻松地替换服务（例如，使用模拟），并且我所有的 ```interactors``` 都可以通过协议定义使用该服务，而无需了解底层实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一件事是，如果我不得不处理异步代码，我总是使用 [***```promise```***](https://github.com/corekit/promises "") 库。 其背后的原因很简单：与使用回调和可选的结果元素相比，它更优雅。 你也应该学习 ```promise``` 。 因此，这是我围绕 ```JSONPlaceholder API``` 实现服务的一部分：

``` Swift
protocol Api {

    func posts() -> Promise<[Post]>
    func comments(for post: Post) -> Promise<[Comment]>
    func albums() -> Promise<[Album]>
    func photos(for album: Album) -> Promise<[Photo]>
    func todos() -> Promise<[Todo]>
}

// MARK: - entities

struct Post: Codable {

    let id: Int
    let title: String
    let body: String
}

// MARK: - API implementation

class JSONPlaceholderService {

    var baseUrl = URL(string: "https://jsonplaceholder.typicode.com/")!

    enum Error: LocalizedError {
        case invalidStatusCode
        case emptyData
    }

    private func request<T>(path: String) -> Promise<T> where T: Decodable {
        let promise = Promise<T>()
        let url = baseUrl.appendingPathComponent(path)
        print(url)
        URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                promise.reject(error)
                return
            }
            guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
                promise.reject(Error.invalidStatusCode)
                return
            }
            guard let data = data else {
                promise.reject(Error.emptyData)
                return
            }
            do {
                let model = try JSONDecoder().decode(T.self, from: data)
                promise.fulfill(model)
            }
            catch {
                promise.reject(error)
            }
        }.resume()
        return promise
    }
}

extension JSONPlaceholderService: Api {

    func posts() -> Promise<[Post]> {
        return self.request(path: "posts")
    }

    /* ... */
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，我在这里有一个模拟服务实现，因此我可以轻松地测试所需的一切。 如何在这些服务之间切换？ 好吧，我有一个共享的（单人-不要讨厌我，这是完全可以的）应用程序类，我主要将其用于样式设计，但我也将与依赖项注入 ```（DI）``` 相关的代码放在了那里。 这样，我可以为 ```VIPER模块``` 传递适当的服务对象。

``` Swift
class App {

    static let shared = App()

    private init() {

    }

    var apiService: Api {
        return JSONPlaceholderService()
    }
}

// MARK: - module

class PostsModule {

    func buildDefault() -> UIViewController {
        let view = PostsDefaultView()
        let interactor = PostsDefaultInteractor(apiService: App.shared.apiService)

        /* ... */

        return view
    }
}

// MARK: - interactor

class PostsDefaultInteractor {

    weak var presenter: PostsPresenter?

    var apiService: Api

    init(apiService: Api) {
        self.apiService = apiService
    }
}

extension PostsDefaultInteractor: PostsInteractor {

    func posts() -> Promise<[Post]> {
        return self.apiService.posts()
    }

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用其他100种方法来执行此操作，但是我目前更喜欢这种方法。 通过这种方式， ```interactors``` 可以直接使用一些额外的细节来调用服务，例如过滤器，订单，排序等。基本上，该服务只是端点周围的高级概念包装，并且 ```interactors``` 为该接口创建经过微调（更好）的 ```API``` 给 ```presenter``` 。

</br>

# **promises**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实施业务逻辑是 ```presenter``` 的任务。 我总是使用 ```Promise``` ，因此基本的 ```Presenter``` 实现只能异步加载一些内容并显示结果，否则错误（加上加载指示符）只有几行。 我一直在尝试通过在视图上使用相同的协议命名约定来实现三个基本的 ```UI堆栈元素``` （加载，数据，错误）。 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在视图方面，我使用的是很好的旧的集合视图逻辑，这大大减少了我必须编写的代码量。 你可以采用传统方式，毕竟为表或集合视图实现一些数据源和委托方法并不是很多代码。 这是我的视图示例：

``` Swift
extension PostsDefaultPresenter: PostsPresenter {

    func viewDidLoad() {
        self.view?.displayLoading()
        self.interactor?.posts()
        .onSuccess(queue: .main) { posts  in
            self.view?.display(posts)
        }
        .onFailure(queue: .main) { error in
            self.view?.display(error)
        }
    }
}

// MARK: - view

class PostsDefaultView: CollectionViewController {

    var presenter: PostsPresenter?

    init() {
        super.init(nibName: nil, bundle: nil)

        self.title = "Posts"
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.presenter?.viewDidLoad()
    }
}

extension PostsDefaultView: PostsView {

    func displayLoading() {
        print("loading...")
    }

    func display(_ posts: [Post]) {
        let grid = Grid(columns: 1, margin: UIEdgeInsets(all: 8))

        self.source = CollectionViewSource(grid: grid, sections: [
            CollectionViewSection(items: posts.map { PostViewModel($0) })
        ])
        self.collectionView.reloadData()
    }

    func display(_ error: Error) {
        print(error.localizedDescription)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```cell``` 和 ```ViewModel``` 在 ```VIPER模块``` 之外，我倾向于将 ```App文件夹``` 专用于自定义应用程序特定的视图， ```extensions``` ， ```view models``` 等。

``` Swift
class PostCell: CollectionViewCell {

    @IBOutlet weak var textLabel: UILabel!
}


class PostViewModel: CollectionViewViewModel<PostCell, Post> {

    override func config(cell: PostCell, data: Post, indexPath: IndexPath, grid: Grid) {
        cell.textLabel.text = data.title
    }

    override func size(data: Post, indexPath: IndexPath, grid: Grid, view: UIView) -> CGSize {
        let width = grid.width(for: view, items: grid.columns)
        return CGSize(width: width, height: 64)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没什么特别的，如果你想了解更多有关此集合视图架构的信息，可以看看这篇文章 [***```掌握集合视图的教程```***](http://www.xuebaonline.com/Swift%20UICollectionView%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/ "") 。

<br>

# **模块通讯**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个重要的教训是学习如何在两个 ```VIPER模块``` 之间进行通信。 通常，我使用简单的变量-如果必须将信息发送回原始模块，则使用 ```delegates``` -在构建方法中传递。 我还将向你展示一个非常简单的示例。

``` Swift
class PostsDefaultRouter {

    weak var presenter: PostsPresenter?
    weak var viewController: UIViewController?
}

extension PostsDefaultRouter: PostsRouter {

    func showComments(for post: Post) {
        let viewController = PostDetailsModule().buildDefault(with: post, delegate: self)
        self.viewController?.show(viewController, sender: nil)
    }
}

extension PostsDefaultRouter: PostDetailsModuleDelegate {

    func toggleBookmark(for post: Post) {
        self.presenter?.toggleBookmark(for: post)
    }
}

// MARK: - details


protocol PostDetailsModuleDelegate: class {
    func toggleBookmark(for post: Post)
}

class PostDetailsModule {

    func buildDefault(with post: Post, delegate: PostDetailsModuleDelegate? = nil) -> UIViewController {
        let view = PostDetailsDefaultView()
        let interactor = PostDetailsDefaultInteractor(apiService: App.shared.apiService,
                                                      bookmarkService: App.shared.bookmarkService)
        let presenter = PostDetailsDefaultPresenter(post: post)

        /* ... */

        return view
    }
}

class PostDetailsDefaultRouter {

    weak var presenter: PostDetailsPresenter?
    weak var viewController: UIViewController?
    weak var delegate: PostDetailsModuleDelegate?
}

extension PostDetailsDefaultRouter: PostDetailsRouter {

    func toggleBookmark(for post: Post) {
        self.delegate?.toggleBookmark(for: post)
    }
}


class PostDetailsDefaultPresenter {

    var router: PostDetailsRouter?
    var interactor: PostDetailsInteractor?
    weak var view: PostDetailsView?

    let post: Post

    init(post: Post) {
        self.post = post
    }
}

extension PostDetailsDefaultPresenter: PostDetailsPresenter {

    func reload() {
        self.view?.setup(with: self.interactor!.bookmark(for: self.post))

        //display loading...
        self.interactor?.comments(for: self.post)
        .onSuccess(queue: .main) { comments in
            self.view?.display(comments)
        }
        .onFailure(queue: .main) { error in
            //display error...
        }
    }

    func toggleBookmark() {
        self.router?.toggleBookmark(for: self.post)
        self.view?.setup(with: self.interactor!.bookmark(for: self.post))
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```builder``` 方法中，我可以访问 ```VIPER模块``` 的每个组件，因此我可以将变量简单地传递到指定的位置（对于 ```delegates``` 参数也是如此）。 我通常在 ```presenter``` 上设置输入变量，在 ```router``` 上设置 ```delegates``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常是 ```presenter``` 需要原始模块中的数据，我喜欢将 ```delegates``` 存储在 ```router``` 上，因为如果导航模式发生更改，我根本就不需要更改 ```presenter``` 。 这只是个人喜好，但我喜欢代码中的风格。 在一篇文章中很难写下这些东西，所以我建议从 [***```github```***](https://github.com/theswiftdev/tutorials "") 下载完成的示例代码。

<br>

# 总结

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，在此 ```VIPER体系结构``` 教程中，我正在使用各种设计模式。 有人说这没有灵丹妙药，但我相信我发现了一种非常了不起的方法，可以利用我的优势在短时间内构建高质量的应用程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将 ```VIPVM架构``` 与 ```MVVM``` 与 ```Promises``` 结合在一起，可以将每个零件放在正确的位置。 工程过度？ 也许。 对我来说，这是值得的开销。 你怎么看待这件事？ 