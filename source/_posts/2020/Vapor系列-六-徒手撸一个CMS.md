---
title: 'Vapor系列(六): 徒手撸一个CMS'
description: 'Vapor系列(六): 徒手撸一个CMS'
permalink: 'Vapor系列(六): 徒手撸一个CMS'
copyright: ture
keywords: >-
  iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding
  和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0,Hello
  Vapor,Leaf,创建博客数据库,CMSAuthentication,Session
tags:
  - - Vapor 4.0
  - - CMS
  - - Swift 5.0
categories:
  - - Vapor 4.0
abbrlink: 31710
date: 2020-06-23 16:38:43
---

本章都是关于使用管理界面构建内容管理工具。 我们将为完全独立于Web前端的管理员视图创建一个模块。 CMS将支持基于Leaf模板并使用Swift代码进行验证的具有可重用表单的列表，创建，更新和删除功能。 模型将被持久化到数据库中，我们将使用中间件来保护管理端点。

# 管理模块

就像前端一样，管理模块是一个特殊的模块。 这些模块是其他模块的“框架”。 它们提供了主要的布局模板，其他模块可以挂接到这些容器中。 例如，前端具有一个索引模板，该模板由Web前端上的所有页面（例如博客或登录屏幕）使用。 管理模块将为管理页面提供类似的索引模板。 在Admin/Views文件夹中创建一个名为Index.leaf的新文件，其内容如下：

``` Html
/**
* FILE:
* Sources/App/Modules/Admin/Views/Index.leaf */
<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="robots" content="noindex">
        <title>#(title)</title>
        <link rel="stylesheet" href="/css/frontend.css">
        <link rel="stylesheet" href="/css/admin.css">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"> 
    </head>
    <body> 
        <header>
            <a href="/" id="logo">
                <img src="/images/logo.png"> 
                <h1>Char's Blog - 管理员</h1>
            </a>
            <nav id="navigation">
                <a href="/" target="_blank">Site</a> &middot; 
                <a href="/admin">Admin</a> &middot;
                <a href="/logout">Logout</a>
            </nav> 
        </header>
        <main>
            <div id="main-content">
            #import("body")
            </div> 
        </main>
        <script src="/javascript/admin.js"></script> 
    </body>
</html>
```


<!-- more -->

主管理模板与前端稍有不同。 第一个变化是机器人有了一个新的meta标签，因为我们不想对管理页面进行索引。 不像任何机器人都可以访问这些机器人，我们会加以保护，但让我们保持这种方式。

我们也在这里链接frontend.css文件，但这可能是常见内容的共享CSS文件。 我们还包括一个新的admin.css样式表，其中将包含特定于管理员的样式。 菜单结构与前端不同，我们在最后添加了一个新的admin.js文件。 请在“公共”文件夹中创建这些新文件。

我们还将需要类似主屏幕的内容管理系统。 让我们在Admin/Views文件夹中的索引视图旁边添加一个新的Home.leaf模板。

``` Css
/**
* FILE:
* Sources/App/Modules/Admin/Views/Home.leaf */
#extend("Admin/Index"): 
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

现在，创建一个新的AdminController，它可以呈现CMS的主屏幕。

``` Swift

/**
* FILE:
* Sources/App/Modules/Admin/Controllers/AmdminController.swift */
import Vapor
struct AdminController {
    func homeView(req: Request) throws -> EventLoopFuture<View> { 
        let user = try req.auth.require(UserModel.self)

        struct Context: Encodable { 
            let title: String
            let header: String
            let message: String
        }
        let context = Context(title: "myPage - Admin", header: "Hi \(user.email)", message: "welcome to the CMS!") 
        return req.view.render("Admin/Home", context)
    } 
}
```

如前所述，管理员视图仅对经过身份验证的用户可用，这就是为什么我们需要从身份验证层要求UserModel的原因。 由于我们将拥有用户数据，因此欢迎您以个性化的消息欢迎已登录的用户。

使用模块目录中新创建的AdminRouter.swift文件连接此管理控制器。 我们可以使用上一章中创建的用户模块中的会话身份验证器中间件。

``` Swift
/**
* FILE:
* Sources/App/Modules/Admin/AdminRouter.swift */
import Vapor
struct AdminRouter: RouteCollection {
    let controller = AdminController()
    func boot(routes: RoutesBuilder) throws {
        routes.grouped(UserModelSessionAuthenticator()).get("admin", use: self.controller.homeView)
    } 
}
```

稍后，您将看到还有其他一些中间件可以从字面上保护受保护的路由，如果用户未通过身份验证，则可以将他们重定向到其他地方。

要完成该模块，我们应该在Admin文件夹中创建一个新的AdminModule.swift文件，并返回路由器实例。

``` Swift
/**
* FILE:
* Sources/App/Modules/Admin/AdminModule.swift */
import Vapor 
import Fluent

struct AdminModule: Module {
    var router: RouteCollection? { AdminRouter() }
}
```

我们必须在configure.swift文件中注册这个新模块，以使工作正常。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
public func configure(_ app: Application) throws { 
        //...
    let modules: [Module] = [ UserModule(), FrontendModule(), AdminModule(), BlogModule(),
    ]
    //...
}
```

现在我们可以更改Frontend/Home模板，我们应该在此处放置一个链接，以供登录用户使用，以便他们只需单击即可进入管理界面。

``` Html
/**
* FILE:
* Sources/App/Modules/Frontend/Views/Home.leaf */

#extend("Frontend/Index"): 
    #export("body"):
        <section class="wrapper"> 
            <h2>#(header)</h2>
        </section>
        <section class="wrapper">
            <p>#(message)</p>
        </section>
        <section class="wrapper">
            #if(email != nil):
                <p><b>#(email)</b> 已登录.</p>
                <a href="/admin">Admin</a> &middot; 
                <a href="/logout">Logout</a> 
            #else:
                <a href="/sign-in">登录</a>
            #endif
        </section>
    #endexport 
#endextend
```

运行该应用程序，使用默认用户帐户登录，然后单击管理菜单。 现在，我们有了CMS的基础。 这些步骤现在应该已经很熟悉了，最后我们可以继续前进并建立一些实际的内容管理屏幕。