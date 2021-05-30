---
title: 'Vapor系列 (三) : 使用Leaf构建网站'
description: 'Vapor系列 (三) : 使用Leaf构建网站'
permalink: 'Vapor系列 (三) : 使用Leaf构建网站'
copyright: ture
date: 2020-06-21 21:11:47
keywords: iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0,Hello Vapor,Leaf
tags:
    - [Vapor 4.0]
    - [Leaf]
    - [Swift 5.0]
categories:
    - [Vapor 4.0]
---

在本章中，我们将使用Leaf模板引擎构建我们的第一个网站。 我们将编写一些基本的HTML和CSS代码，并学习如何使用上下文将Swift对象与模板引擎连接。 您将了解使用变量，条件，如何遍历对象的Leaf文件的语法，我们将扩展基本模板以为我们的网站提供可重用的框架。 我们将使用帖子列表和详细信息页面构建博客布局。

# 从Leaf开始

Leaf是一个轻量级但功能强大的模板引擎，具有受Swift启发的语法。 您可以使用它为前端网站生成动态HTML页面。 使用模板引擎有其自身的优势，首先您不必将Swift代码与HTML，CSS甚至JavaScript代码混合使用。 分离视图层总是一件好事，但这也意味着您可以实现同一事物的多个视图。 您可以为您的网站提供主题支持。 通过创建Leaf模板，您还必须编写许多HTML代码。 如果您已经熟悉HTML，那么您会发现Leaf非常易于学习和使用。

首先，如果还没有，请使用Vapor工具箱生成一个新项目。 接下来，我们需要将Leaf包作为依赖项添加到Package.swift文件中：

<!-- more -->


``` Swift
/**
* FILE:
* Package.swift *
*/
// swift-tools-version:5.2
import PackageDescription
let package = Package( 
    name: "leafProject", platforms: [
    .macOS(.v10_15) ],
    dependencies: [
        // 💧 A server-side Swift web framework.
        .package(url: "https://github.com/vapor/vapor.git", from: "4.5.0"), 
        .package(url: "https://github.com/vapor/leaf.git", from: "4.0.0-rc.1"),
    ], 
    targets: [
        .target(name: "App", dependencies: [ 
            .product(name: "Vapor", package: "vapor"), 
            .product(name: "Leaf", package: "leaf"),
    ]),
    .target(name: "Run", dependencies: ["App"]), 
        .testTarget(name: "AppTests", dependencies: [
        .target(name: "App"),
        .product(name: "XCTVapor", package: "vapor"), 
        ])
    ]
)
```

现在，您应该再次运行swift软件包更新命令，或者等到Xcode获取新的软件包依赖项。 该过程完成后，我们应该使用configure.swift文件中的以下行来配置Leaf：

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
import Vapor 
import Leaf

public func configure(_ app: Application) throws { 
    app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))
    app.views.use(.leaf)
    app.leaf.cache.isEnabled = app.environment.isRelease
    try routes(app) 
}
```

configure方法的第一行启用了一个中间件，该中间件可以为名为Public的目录中的文件提供服务。中间件基本上是一种功能，它将在每次请求处理程序之前执行。因此，在我们的情况下，如果浏览器要求提供文件，例如样式表，脚本或图像，则FileMiddleware可以在公共目录中查找该文件。如果文件存在，内容将作为响应返回。这非常适合提供静态资产，但是请注意，配置目录中的所有内容都可以通过服务器公开使用，因此请不要在其中放置敏感数据。

在下一行中，我们告诉我们的应用程序它应该使用Leaf模板引擎来呈现我们的视图。模板文件默认位于资源/视图目录下。您也可以通过配置渲染器来更改此路径，但是现在我们可以接受了。

最后，我们将更改Leaf的默认缓存行为。这对于调试和测试目的非常有用，因为如果不修改模板文件就无需缓存，则只需重新加载浏览器窗口即可立即看到更改。否则，如果启用了缓存，则必须重新启动整个Vapor应用程序服务器以反映更改。

您应该知道存在三种类型的环境。在尝试编写应用程序代码时，开发环境非常有用，因为在开发人员模式下运行时会打开许多​​调试功能。在发布应用程序时应使用生产环境，可以通过isRelease属性检查该环境。在发布模式下，日志记录减少，调试和其他警告信息被禁用，因此您的服务器可以更快地响应传入的请求。第三个是测试，用于单元测试中，您可以通过检测环境来设置伪造的服务和数据。

仅需几行代码，您就可以使用Leaf。在项目文件夹中，创建一个新的Resources/Views目录和一个名为index.leaf的文件，其内容如下：

``` Html
/**
* FILE:
* Resources/Views/index.leaf */

<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="stylesheet" href="/css/frontend.css"> 
        <title>#(title)</title>
    </head>

    <body> 
        <main>
            <section class="wrapper"> 
                <h1>#(body)</h1>
            </section> 
        </main>
    </body> 
</html>
```

此文件是我们的索引HTML模板。 Leaf使您能够将特定标签放入HTML代码。 这些标记始终以＃符号开头。 您可以将它们视为预处理器宏。 Leaf渲染器将处理模板文件，并用实际值替换＃（变量）占位符以打印出来。

Xcode无法为Leaf文件选择正确的语法突出显示，但是您可以为它们使用HTML语法着色。 只需单击编辑器▸语法着色▸HTML菜单项。 不幸的是，如果关闭IDE，则必须为每个模板文件再次执行此操作。

在项目目录中，创建一个包含frontend.css文件的Public/css文件夹结构。 CSS是描述HTML文档的视觉样式的样式表。 您可以使用W3Schools网站了解有关此格式的更多信息。 样式表的第一部分将包含本章中将使用的所有元素的一些基本样式。

``` CSS

/**
* FILE:
* Public/css/frontend.css */

* {
    margin: 0;
    padding: 0; 
}
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Helvetica", "Segoe UI", Roboto, Ubuntu; 
    font-size: 16px;
    line-height: 1.5em; 
}
hr {
    margin: 15px 0px; 
    border: none; 
    border-width: 0.5px; 
    border-style: solid;
} 
a {
    text-decoration: none; 
}
img {
    width: 100%;
}
h1 {
    font-size: 28px; 
}
h2 {
    font-size: 24px;
}
h3 {
    font-size: 20px; 
}
.wrapper {
    margin: 16px auto; 
    max-width: 800px;
}
header {
    text-align: 
    center;
    padding: 16px; 
}
header img { 
    width: 64px;
}
header nav {
    margin-top: 16px;
    margin-bottom: 16px; 
}
main {
    margin-top: 16px;
}
#main-content {
    padding: 0px 16px; 
}
#blog article { 
    margin: 32px 0px;
}
```

我还将向您展示一些基本的媒体查询，因为我们正计划创建一个移动优先响应设计。 **主要思想是通过定义[**```CSS断点```**](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/ "")将各种屏幕尺寸组合在一起**。 以移动设备为先的方法意味着您首先要为移动设备设计，然后将样式变体应用于更大的屏幕。 如果我们需要处理特定的用例，我们可以简单地将代码放入正确的媒体查询块中。

``` CSS
/**
* FILE:
* Public/css/frontend.css
* (insert after previous snippet) */

@media (max-width: 599px) {} 
@media (min-width: 600px) {} 
@media (min-width: 900px) {} 
@media (min-width: 1200px) {} 
@media (min-width: 1800px) {}
```

我总是将所有彩色部分放在单独的部分中。 这是因为我们当然想增加对明暗模式的支持。 以下是浅色的变体：

``` CSS
/**
* FILE:
* Public/css/frontend.css
* (insert after previous snippet) */

body {
    background: #fff; color: #222;
}
hr {
    border-color: #ccc; }
a {
    color: #2B7DF6;
} 
a:hover {
    color: #555BCF; 
}
a:visited {
    color: #A35CD7;
}
header {
    background: #efefef; 
}
header h1 { 
    color: #000;
}
```

为深色模式创建版本相对容易，您必须复制并粘贴所有颜色定义，然后将其放置在可以检测配色方案首选项的媒体查询中。

``` CSS
/**
* FILE:
* Public/css/frontend.css
* (insert after previous snippet) */
@media (prefers-color-scheme: dark) { 
    body {
        background: #222;
        color: #fff; 
    }
    hr {
        border-color: #333;
    } 
    a {
        color: #3386F7; }
    a:hover {
        color: #5B61DE;
    } 
    a:visited {
        color: #B365EA; }
    header {
        background: #000;
    }
    header h1 {
        color: #fff; 
    }
}
```

最后一步是稍微改变我们的路由器并返回渲染的视图。 Leaf只是Vapor框架抽象View层的实现。 您可以使用req.view.render方法呈现任何内容。 这将使用先前配置的Leaf引擎读取模板文件，然后使用上下文对象对其进行呈现。 可以创建自己的视图渲染引擎，但这是一个高级主题。

``` Swift

/**
* FILE:
* Sources/App/routes.swift */

import Vapor
func routes(_ app: Application) throws {
    app.get { req -> EventLoopFuture<View> in 
        struct Context: Encodable {
            let title: String
            let body: String 
        }
        
        let context = Context(title: "myProject - Leaf", body: "Hello Leaf!")
        return req.view.render("index", context) 
    }
}
```

![""](http://cdn.xuebaonline.com/vapor-3-stp1.png "")

![""](http://cdn.xuebaonline.com/vapor-3-stp2.png "")

render方法的第一个参数是叶子文件的名称（不带扩展名）。作为第二个参数，您可以传递符合可编码协议的任何内容。它是一个通用参数，因此我们可以使用字符串，可编码对象数组或任何符合协议要求的东西。通常，我创建一个本地Context结构，因为这是您传递的视图上下文，但是有时我将其称为视图模型。

奇怪的是，我们正在返回一个EventLoopF​​uture<View>对象。这是一个特殊值，表示将来某个时间点将可用的对象。 Leaf正在以非阻塞异步方式呈现模板，这就是它返回此类对象的原因。在以后的章节中，我们将使用futures并作出更多promises，但是现在请记住，EventLoopF​​uture是具有futures value的通用对象。

render方法还将设置一些其他标题。 Content-Type将设置为text/html，因此您的浏览器可以将页面呈现为HTML网站。如果您使用的是更高版本，请使用命令行或Xcode运行该应用程序，但请不要忘记设置自定义工作目录，否则服务器将找不到您的模板和公共文件。

# 博客的页面层次结构

如果您打算建立一个多页的网站，那么分割模板将是必不可少的。 我们可以创建可重复使用的零件，您可以通过导出共享这些零件以供以后使用。 我们可以使用Leaf建立亲子关系。 在下面的示例中，我们将制作三个单独的页面，我们必须更新index.leaf基本模板，因为这将成为整个网站的主要内容框架。

``` CSS
/**
* FILE:
* Resources/Views/index.leaf */
<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <title>#(title)</title>
        <link rel="stylesheet" href="/css/frontend.css">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    </head> 
    <body>
        <header>
            <a href="/" id="logo">
                <img src="/images/logo.png">
                <h1>myPage</h1> 
            </a>
            <nav id="navigation">
                <a href="/">Home</a> &middot;
                <a href="/blog">Blog</a> &middot;
                <a href="#" onClick="javascript:about();">About</a>
            </nav> 
        </header>
        <main>
            <div id="content">
                #import("body")
            </div> 
        </main>
        <script src="/javascript/frontend.js"></script> 
    </body>
</html>
```

它确实与我们先前的版本相似，但是我们添加了一个带有徽标和标题的新标题部分，以及一些导航链接，这些链接将帮助我们在子页面之间进行切换。 在内容部分，您应该注意到#import("body")标记。 这称为扩展点，子模板可以在其中嵌入其内容。

该索引模板将在所有子页面中重复使用，因此我们不必复制和粘贴所有到处都是相同的通用HTML代码。 这是一种从上到下的方法，您可以在其中定义外框并指定子级可以在其中添加一些额外内容的位置。 子模板将扩展此基本模板并导出body变量。

最后，我们将在公共目录中嵌入一些javascript，请创建相应的文件夹和一个空的frontend.js文件，不用担心，我们稍后将使用它。

# 主页

主页将非常简单。 仅用几行代码，我们将扩展基本模板并定义自定义主体结构。 如前所述，home.leaf模板扩展了index.leaf模板并导出自定义主体值。 您也可以在此子模板中使用变量，这是它的外观：

``` CSS
/**
* FILE:
* Resources/Views/home.leaf */
#extend("index"): 
    #export("body"):
        <section class="wrapper"> 
            <h2>#(header)</h2>
        </section>
        <section class="wrapper">
            <p>#(message)</p> 
        </section>
    #endexport 
#endextend
```

现在该渲染整个页面了。我们不必处理body参数，因为它已经在子模板中导出了。导出意味着您正在定义它，因此我们仅需传递标题，标头和消息上下文变量以及最终渲染的正确值即可。您可以在两个模板中使用变量，但不要忘记将在Leaf文件中使用的每个键作为视图上下文传递。

可以创建一个继承链，例如索引▸页面▸欢迎。多级模板很好，如果您从上方遵循相同的模式，则可以为视图创建一个不错的层次结构。请记住，您应始终为整个层次结构中使用的每个单个Leaf变量提供上下文值，否则会收到错误消息。

让我们开始思考模块。我已经提到过，Vapor应用程序可以具有模型，控制器，迁移脚本等等。模块是将这些组件组合在一起的东西。我们的第一个模块将称为Frontend，它将负责呈现网站的主页。在Sources/App目录下创建一个新的Modules/Frontend结构。从现在开始，我们将所有与前端相关的代码放入该文件夹中。

我们将使用专用的FrontendController对象将渲染逻辑与路由分开。您可以将此控制器放入同名的文件中，通常大多数结构和类都有其专用的Swift文件，以后也可以遵循此约定。您可以创建一个功能与该功能块相同的签名，而不是完成功能块，然后再将此方法连接到路由。

``` Swift
/**
* FILE:
* Sources/App/Modules/Frontend/FrontendController.swift */
import Vapor
struct FrontendController {

     func homeView(req: Request) throws -> EventLoopFuture<View> { 
        struct Context: Encodable {
            let title: String 
            let header: String 
            let message: String
        }

        let context = Context(title: "Char's Blog - 首页",
        header: "大家好,",
        message: "欢迎大家访问我的博客!") 
        return req.view.render("home", context)
    } 
}
```

我们应该做的下一件事是在路由器和控制器之间建立连接。 我们不会将所有内容简单地放入路由或配置文件中，而是拥有一个独立的路由器。 如果您有很多路由，则最好使用RouteCollection协议将它们分成集合。 该协议具有启动功能，您必须使用路由对象而不是应用程序来实现和注册路由。

您可以像以前一样在route对象上使用相同的get方法。 在RoutesBuilder上为所有HTTP方法（获取，发布，放置，删除等）定义了可用的帮助程序功能。 您还可以按路径组件或中间件对路由进行分组。 路由组可用于连接具有相同功能的相同名称空间下的端点。

您也可以输入一个特定的路径组件作为第一个参数，但是在本例中，我们将把HomeView方法从FrontendController连接到主要端点。

``` Swift
/**
* FILE:
* Sources/App/Modules/Frontend/FrontendRouter.swift */
import Vapor
struct FrontendRouter: RouteCollection {
    let controller = FrontendController()
    func boot(routes: RoutesBuilder) throws { 
        routes.get(use: self.controller.homeView)
    } 
}
```

现在我们必须在配置方法中启动路由器。 这是一种不错的方法，因为您可以拥有多个路由器并注册所需的数量。 引导方法需要一个路由构建器，我们可以传递app.routes属性，它将很好地工作。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
public func configure(_ app: Application) throws { 
    //...
    let router = FrontendRouter()
    try router.boot(routes: app.routes) 
}
```

运行该应用程序，您应该会看到一个不错的小主页，该主页使用了通过模板引擎组合在一起的两个模板文件。

![""](http://cdn.xuebaonline.com/vapor-3-stp3.png "")

![""](http://cdn.xuebaonline.com/vapor-3-stp4.png "")

# 博客列表

由于我们使用模块化架构构建应用程序，因此我们不能简单地将与博客相关的内容放入Frontend模块中。 在我们的案例中，前端模块有些特殊，因为它为我们提供了呈现网站的主要元素。 它包含索引模板，通用样式表和javascript文件。 前端将显示的所有其他内容均取决于此模块。

我们将不得不创建一个名为Blog的新模块。 每个模块都将遵循我们之前创建的相同模式。 这意味着我们将拥有专用的路由器和控制器。 这次我们将从首先注册路由器开始。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
import Vapor import Leaf
public func configure(_ app: Application) throws { 
    //...
    let routers: [RouteCollection] = [ FrontendRouter(), BlogRouter(),
    ]
    for router in routers {
        try router.boot(routes: app.routes) 
    }
}
```

我们将必须与控制器一起为Blog模块创建一个路由器对象。 我们要注册的唯一途径是博客视图。 这位于保存为BlogRouter.swift的博客模块目录中。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogRouter.swift */
import Vapor
struct BlogRouter: RouteCollection {
    let controller = BlogFrontendController()
    func boot(routes: RoutesBuilder) throws { 
        routes.get("blog", use: self.controller.blogView)
    } 
}
```

BlogFrontendController将负责处理Web上公开可用的所有与博客相关的路由。 这就是为什么它被称为Web前端控制器。 稍后，我们将使用相同的逻辑来创建其他类型的内容渠道。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogFrontendController.swift */
import Vapor

struct BlogFrontendController {
    func blogView(req: Request) throws -> EventLoopFuture<View> { 
        struct Context: Encodable {
            let title: String
            let posts: [BlogPost] 
        }
        let posts = BlogRepository().publishedPosts()

        let context = Context(title: "myPage - Blog", posts: posts) 
        return req.view.render("blog", context)
    }
}
```

我们在这里做的和以前完全一样。 这次的唯一区别是我们更改了上下文，因为我们将传递一个Encodable BlogPost对象数组。 该结构将被重用，因此我们将其放入模块目录下的单独BlogPost.swift文件中。 这是基本博客文章的可能数据表示形式：

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogPost.swift */
import Foundation
struct BlogPost: Encodable { 
    let title: String
    let slug: String
    let image: String
    let excerpt: String 
    let date: String
    let category: String? 
    let content: String
}
```

Title是博客文章的标题，我们将使用slug字段为文章提供一个漂亮的SEO友好URL。 我准备了一些可以从原始资料中获取的图像。 将它们放在Public/images/posts目录下。 我们将这些名称存储在image字段下。 摘录将显示在列表中，发布日期是给定帖子的发布日期。 Category是一个可选字符串，我们将其用作将帖子分组在一起的类别。 内容将显示在帖子详细信息页面上。

我们如何存储这些博客文章？ 好了，现在我们将拥有一个BlogRepository结构并对所有内容进行硬编码。 您可以在Blog模块中创建一个新文件来存储该对象。 在下一章中，我们将使用SQLite数据库，稍后再迁移到PostgreSQL存储。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogRepository.swift */
import Vapor
struct BlogRepository {
    func publishedPosts() -> [BlogPost] { 
        [
        BlogPost(title: "Indonesia", slug: "indonesia",
            image: "/images/posts/05.jpg",
            excerpt: "Et excepturi id harum ipsam doloremque.",
            date: "2019",
            category: "Islands",
            content: "Accusantium amet vero numquam tenetur sit quidem ut.
            Officiis in iste adipisci corporis. Nisi aut consequatur laudantium et veritatis aut amet officiis. Repellat sapiente quis cupiditate veniam est. Est tempora molestiae voluptatum excepturi eum. Eos provident labore quidem ipsam."),

        BlogPost(title: "Mauritius", slug: "mauritius",
            image: "/images/posts/04.jpg",
            excerpt: "Pariatur debitis quod occaecati quidem. ",
            date: "2016",
            category: "Islands",
            content: "Enim et a ex quisquam qui sed fuga consectetur. Dolorem et
            eum non dicta modi tempora facilis. Totam dolores repudiandae magni autem doloremque. Libero consequuntur et distinctio esse a consectetur. Fugit quis sed provident est sunt. Rerum quibusdam blanditiis optio autem."),

        BlogPost(title: "California", slug: "california",
            image: "/images/posts/03.jpg",
            excerpt: "Voluptates ipsa eos sit distinctio.",
            date: "2015",
            category: nil,
            content: "Et non reiciendis et illum corrupti. Et ducimus optio
            commodi molestiae quis ipsum consequatur. A fugit amet amet qui tenetur. Aut voluptates ut labore consectetur temporibus consectetur. Perferendis et neque id minima voluptatem temporibus a dolor. Eos nihil dignissimos consequuntur et consequuntur nam."),

        BlogPost(title: "The Maldives", slug: "the-maldives",
            image: "/images/posts/02.jpg",
            excerpt: "Possimus est labore recusandae asperiores fuga sequisit.",
            date: "2014",
            category: "Islands",
            content: "Dignissimos mollitia doloremque omnis repellendus quibusdam ut amet. Autem vitae enim consequuntur. Quis quo esse numquam doloremque esse. Neque accusantium sint tempore distinctio. Dolorem quibusdam et ab impedit necessitatibus cum. Eius voluptatem ducimus velit non."),

        BlogPost(title: "Sri Lanka", slug: "sri-lanka",
            image: "/images/posts/01.jpg", 
            excerpt: "Ratione est quo nemo date: "2014",
            category: "Islands",
            content: "Deserunt nulla culpa quibusdam. Ducimus delectus ea ipsa  quisquam aut in dolor placeat dolore deleniti quia. Error aliquam harum  earum. Quos dignissimos dolores ratione illo. Dolores velit sunt sed quas  quis itaque sit omnis. Molestias explicabo aut eum amet blanditiis quia  similique soluta."),
        ]
    } 
}
```

最后一步是创建我们的blog.leaf模板。 就像其他所有Leaf文件一样，此文件位于Resources/Views目录下。 我们将在此视图中遍历博客文章并呈现可用的文章数据。

``` Html
/**
* FILE:
* Resources/Views/blog.leaf */
#extend("index"): 
    #export("body"):
        <section id="blog" class="wrapper"> 
            <h2>Blog</h2>

        #for(post in posts):
        <article>
            <a href="/#(post.slug)">
                <img src="#(post.image)"> 
                <h3>#(post.title)</h3> 
                <p>#(post.excerpt)</p> 
                #if(post.category != nil):
                    <p class="category">#(post.category)</p> 
                #else:
                    <p class="category">Uncategorized</p> 
                #endif
            </a> 
        </article>
        #endfor

        </section>
    #endexport 
#endextend
```

如果将可编码项的数组传递给视图上下文对象，则可以使用#for标记对它们进行迭代。 如果数组中的元素是对象，则可以通过点表示法访问它们的属性。 否则，您可以简单地打印出给定名称的值。 您可以使用#if标签检查变量是否存在，＃else部分是可选的，但是在Leaf中，您始终必须使用#end[tag]闭包来关闭标签。
运行该应用程序并导航到/blog页面，您应该看到帖子列表。

![""](http://cdn.xuebaonline.com/vapor-3-stp5.png "")

# 博客条目页面

在本章中，我们要做的最后一件事是为博客文章详细信息页面实现SEO友好的路由。 这意味着我们将使用唯一的段代码作为URL的路径，以查看每篇文章的详细信息页面。

首先，您应该知道可以使用路由处理程序捕获所有路由，并且.anything路径组件。 还有一个.catchall大小写，这两者之间的唯一区别是，任何内容（*）都是路径组件的单个匹配项，但是catch all（**）大小写实际上会捕获第一个/字符之后的所有内容 包括其他子路径，例如/foo/bar/。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogRouter.swift */
import Vapor
struct BlogRouter: RouteCollection {
    let controller = BlogFrontendController() 
    func boot(routes: RoutesBuilder) throws {
        routes.get("blog", use: self.controller.blogView)
        routes.get(.anything, use: self.controller.postView) 
    }
}
```

在我们的例子中，.anything模式就足够了，接下来将视图处理程序添加到控制器中。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogFrontendController.swift */
import Vapor
struct BlogFrontendController {
    //...
    func postView(req: Request) throws -> EventLoopFuture<Response> {
        let posts = BlogRepository().publishedPosts()
        let slug = req.url.path.trimmingCharacters(in: .init(charactersIn: "/")) guard let post = posts.first(where: { $0.slug == slug }) else {
            return req.eventLoop.future(req.redirect(to: "/")) 
        }

        struct Context: Encodable { 
            let title: String
            let post: BlogPost
        }
        let context = Context(title: "Char's Blog - \(post.title)", post: post) 
        return req.view.render("post", context).encodeResponse(for: req)
    } 
}
```

您可以通过req.url.path属性访问URL的路径。我们应该先修剪它，因为我们不关心尾部的斜杠和斜杠，接下来，我们可以过滤博客文章，以查看是否有匹配给定路线的文章。这次，如果以后使用回复，如果没有匹配项，我们将重定向到主页。否则，我们将使用Leaf渲染帖子。

由于重定向方法返回响应，因此我们必须最后将视图编码为响应对象。通过调用.encodeResponse函数，可以轻松完成此操作。渲染的视图将使用当前请求转换为新的HTTP响应。

在Vapor中，您将不得不与futures和promises进行大量合作。再说一次，futures是future某个时间点将要存在的future value的一般表示。

futures具有关联状态以跟踪value的进度。future 是 padding，直到未为其分配值。如果value到达，我们就说future 是 fulfilled了。否则，如果发生错误，则future处于拒绝状态。

vapor正在使用SwiftNIO库中的EventLoopF​​uture对象。您可以使用req.eventLoop.future（value）方法轻松地创建具有满足值的Future，如果要返回错误，只需将其作为错误参数传递给带有命名参数的Future方法：.future （错误：myError）。

每个fature都与事件循环相关联，事件循环是在多线程环境中保持理智环境的低级解决方案。让我们保持这种方式，随着我们对vapor世界的深入研究，您会习惯它们。

fature的好处是您可以使用功能方法对其进行转换。它们的工作方式几乎与映射数组相同。 map和flatMap都可以在EventLoopF​​uture类型上使用，但是稍后在使用Fluent时将在实践中使用它们。

回到我们的帖子详细信息，这是post.leaf文件的一种可能的实现。

``` Html
/**
* FILE:
* Resources/Views/post.leaf */
#extend("index"): 
    #export("body"):
        <section id="blog" class="wrapper">
            <img src="#(post.image)"> 
            <h2>#(post.title) (#(post.date))</h2> 
            <p>#(post.excerpt)</p> 
            #if(post.category != nil):
                <p class="category">#(post.category)</p> 
            #else:
                <p class="category">Uncategorized</p> #endif
            <hr>
            <p>#(post.content)</p> 
        </section>
    #endexport 
#endextend
```

使用Xcode或命令行构建并运行该应用程序。 在浏览器窗口中，单击其中一篇博客文章，希望您应该能够阅读全文。

![""](http://cdn.xuebaonline.com/vapor-3-stp6.png "")

从SEO角度来看，这种方法非常好，因为URL干净。 这是排名中最重要的因素之一。 作为实践，您可以使用一些其他元信息来扩展index.leaf模板，以支持丰富的预览。

那最后一个菜单项呢？ 让我们使用在教程开始时创建的空的frontend.js文件。 我们将仅显示警报，但是您当然可以使用此模板为网站添加一些精美的动画。

``` JS
/**
* FILE:
* Public/javascript/frontend.js */
function about() { 
    alert("Char's Blog\n\nversion 1.0.0");
}
```

那是About菜单，暂时还不算什么，但是我希望这个示例为您提供有关如何导入和使用javascript文件的基本思想。 您可以使用jQuery或其他任何方式来改善生活，但是在本书中，我们仅打算编写Vanilla JavaScript。

# 摘要

本章都是关于Vapor和Leaf模板引擎的入门。 Leaf确实很容易上手，您只需要记住几个标签，大多数时候您会发现自己编写HTML，CSS或javascript代码。 我们已经看到了如何创建模块来分离应用程序中的各个组件。 模块是真正强大的代码组织工具，使用独立的路由器和控制器可帮助我们在任何地方维护干净的代码。 我们还了解了路由的基础知识，并对future进行了一些尝试。 在下一章中，我们将重点介绍如何使用Fluent将博客条目持久保存到本地SQLite数据库中。