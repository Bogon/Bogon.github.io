---
title: 'Vapor系列 (五) :  使用session进行authentication'
description: 'Vapor系列 (五) :  使用session进行authentication'
permalink: 'Vapor系列 (五) :  使用session进行authentication'
copyright: ture
date: 2020-06-23 09:11:32
keywords: iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0,Hello Vapor,Leaf,创建博客数据库,Authentication,Session
tags:
    - [Vapor 4.0]
    - [Authentication]
    - [Session]
    - [Swift 5.0]
categories:
    - [Vapor 4.0]
---

在本章中，我们将集中精力构建基于会话的Web身份验证层。 用户将能够使用表单登录，并且将借助于会话cookie和使用Fluent的持久会话存储来检测已经登录的用户。 本章的最后一部分是关于重构我们的视图层，并为将在下一章中实现的更健壮的表单构建解决方案做准备。

# 用户模块

如果我们希望能够使用给定的电子邮件和密码组合登录，则必须为用户对象创建一个模型。 我们将使用以下UserModel实体：

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Models/UserModel.swift */
import Vapor 
import Fluent

final class UserModel: Model {

    static let schema = "user_users"
    struct FieldKeys {
        static var email: FieldKey { "email" } 
        static var password: FieldKey { "password" }
    }

    // MARK: - fields
    @ID() var id: UUID?
    @Field(key: FieldKeys.email) var email: String 
    @Field(key: FieldKeys.password) var password: String

    init() { }

    init(id: UserModel.IDValue? = nil, email: String, password: String) {
        self.id = id
        self.email = email 
        self.password = password
    } 
}
```


<!-- more -->

在使用模型之前，我们需要进行相应的迁移才能为用户创建表。 我们将对电子邮件字段施加唯一约束。 所有密码都将作为加密字符串存储。 切勿在数据库中存储纯文本密码，并始终检查哪种是最好的加密算法。 我们还将使用一个默认用户为用户表添加种子。 当然，您应该尽快更改密码，但这将是一个起点。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Migrations/UserMigration_v1_0_0.swift */
import Vapor 
import Fluent

struct UserMigration_v1_0_0: Migration {
    private func users() -> [UserModel] { 
        [ 
            UserModel(email: "mail.tib@gmail.com", password: try! Bcrypt.hash("ChangeMe1")),
            UserModel(email: "zhangsan@gmail.com", password: try! Bcrypt.hash("ChangeMe2")),
        ] 
    }
    func prepare(on db: Database) -> EventLoopFuture<Void> { 
        db.eventLoop.flatten([
            db.schema(UserModel.schema) 
            .id()
            .field(UserModel.FieldKeys.email, .string, .required) 
            .field(UserModel.FieldKeys.password, .string, .required) 
            .unique(on: UserModel.FieldKeys.email)
            .create(),
    ]) .flatMap {
        self.users().create(on: db) }
    }

    func revert(on database: Database) -> EventLoopFuture<Void> { 
        database.eventLoop.flatten([
            database.schema(UserModel.schema).delete(), ])
    } 
}
```

请注意，当您使用命令行在macOS下运行迁移（快速运行运行迁移）时，BCrypt存在一个已知的错误，该应用将无法执行数据库迁移，但由于细分错误而崩溃： 11错误。 迁移与Xcode一起使用时，应在方案配置下添加migration参数。

我们还需要一个UserModule文件来注册我们的路由器和我们的迁移，只需遵循与之前相同的模式，这就是最终模块的样子：

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserModule.swift */
import Vapor 
import Fluent

struct UserModule: Module {

    var router: RouteCollection? { UserRouter() }
    var migrations: [Migration] { 
        [ UserMigration_v1_0_0(), ]
    } 
}
```

创建一个新的UserRouter，我们现在将启动功能保留为空。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserRouter.swift */
import Vapor

struct UserRouter: RouteCollection {
    
    let controller = UserFrontendController()

    func boot(routes: RoutesBuilder) throws {

    } 
}
```

用户模块的最后一个组件是前端控制器：

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserFrontendController.swift *
*/
import Vapor 
import Fluent

struct UserFrontendController { 

}
```

我们上面创建的代码是模块的样板代码。 有一种更好的方法可以从头开始生成新模块，您将在后面的几章中了解到。

# 实施登录流程

会话是存储在后端某处的实体。 该存储可以是内存中存储，Fluent数据库存储或独立的Redis服务器。 内存存储是默认的会话存储驱动程序，但可能会出现问题。 重新启动服务器时，所有会话都将消失，如果服务器崩溃，也会发生相同的情况。

我们可以使用redis服务器，但是这需要一些额外的设置，因为我们不希望博客负担很重，因此使用常规数据库存储就可以了。 使用Fluent可以更改基于默认内存的会话驱动程序。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
import Leaf
import Fluent
import FluentSQLiteDriver 
import Vapor

public func configure(_ app: Application) throws { //...
    app.sessions.use(.fluent) 
    app.migrations.add(SessionRecord.migration) 
    app.middleware.use(app.sessions.middleware)

    let modules: [Module] = [ UserModule(), FrontendModule(), BlogModule(), ]
    //...
}
```

第一行告诉Vapor框架它应该使用Fluent会话驱动程序，它基本上只是默认数据库存储中的一个表。第二行为此基础_fluent_sessions表添加了新的迁移。也许在将来的版本中，这将是自动完成的，这将是理想的方案，但是现在您必须这样做。

配置的最后一行使用系统驱动程序和配置来注册SessionsMiddleware。该中间件将尝试从本地存储在客户端的会话cookie中加载会话数据。会话cookie只是将会话标识符存储在客户端，而没有其他数据。与会话相关的所有内容都存储在服务器上的数据库表中。

请注意，我们还将UserModule添加到了模块数组中。这是设置模块的路由和迁移所必需的。现在，通过添加migration参数以迁移模式运行该应用程序。 Vapor将创建所有必需的数据库表。

那么我们如何通过网站登录？我们需要一个登录表单，该表单可以将登录数据发布到给定的URL。让我们使用Leaf快速地实现一个目标。我们可以将此新的login.leaf文件放置在其他模板文件旁边。

建立表单非常简单，我们可以使用一些基本的HTML元素。表单元素具有操作和方法属性。该操作是提交事件将在其中发送数据的目标URL。该方法是用于发送表单字段的HTTP方法，只能发布和获取。

``` Html
/**
* FILE:
* Resources/Views/login.leaf */
#extend("index"): 
    #export("body"):
        <section class="wrapper">
            <form action="/sign-in" method="post">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="" class="field">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="" class="field">
                <input type="submit" class="submit" value="Submit"> 
            </form>
        </section> 
    #endexport
#endextend
```

这将是面对前端登录表单的用户，因此我们必须扩展索引模板。 我们只需要两个输入字段，一个用于电子邮件，一个用于密码，以及一个提交按钮即可将数据发送到给定的URL。 您可以为此使用输入元素。

现在，如果我们渲染此模板并按下Submit按钮，浏览器将使用表单字段的URLEncoded内容对/sign-in端点执行POST HTTP请求。 我们需要两个端点来使一切正常。 一个端点将负责表单呈现，另一个端点将通过POST请求处理表单提交。

在将这些端点添加到路由器之前，让我们先讨论一下身份验证器。 身份验证器是一种中间件，如果请求中存在必要的数据，它将尝试使用可身份验证的对象进行签名。 可认证对象可以是模型。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Models/UserModel.swift */
extension UserModel: Authenticatable {}
```

身份验证数据存储在req.auth属性中，此请求身份验证对象上定义了登录名和注销方法以帮助您进行工作。 您必须知道req.auth变量与req.session属性不等效。

想要登录的用户应首先提供正确的电子邮件和密码组合。 这是基于凭据的身份验证，我们将编写一个CredentialsAuthenticator，它可以检查传入的表单参数并在输入有效的情况下登录用户。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Authenticators/UserModelCredentialsAuthenticator.swift */
import Vapor 
import Fluent

struct UserModelCredentialsAuthenticator: CredentialsAuthenticator {
    struct Input: Content { 
        let email: String 
        let password: String
    }

    typealias Credentials = Input

    func authenticate(credentials: Credentials, for req: Request) -> EventLoopFuture<Void> {
        UserModel.query(on: req.db) 
        .filter(\.$email == credentials.email) 
        .first()
        .map {
            do { 
                if  let user = $0, try Bcrypt.verify(credentials.password, created: user.password) {
                    req.auth.login(user)
                } 
            }
            catch {
            // do nothing...
            } 
        }
    } 
}
```

输入是Content对象，它是Vapor对可以从传入请求中解码或编码为响应的内容的定义。 vapor有多种类型的内容，有JSON和URLEncoded内容编码器和解码器。 当用户按下提交按钮时，HTML表单将发送URLEncoded数据。

验证功能接收凭据，并尝试在数据库中查找具有有效密码的现有用户。 如果找到一条记录，我们可以调用req.auth.login方法，这会将我们的用户对象保存到auth存储中，其余处理程序可以检查是否存在现有的经过身份验证的UserModel。

现在，我们可以为登录流程创建路由，因为身份验证器是中间件，我们可以使用组功能，然后使用控制器处理传入的发布请求。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserRouter.swift */
import Vapor
struct UserRouter: RouteCollection {

    let controller = UserFrontendController() 
    func boot(routes: RoutesBuilder) throws {
        routes.get("sign-in", use: self.controller.loginView) 
        
        routes.grouped(UserModelCredentialsAuthenticator()).post("sign-in", use: self.controller.login)
    } 
}
```

控制器具有两个主要功能，loginView应该已经很熟悉了。 login方法是发布请求处理程序，它是表单操作处理程序。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserFrontendController.swift */
import Vapor 
import Fluent
struct UserFrontendController {

    func loginView(req: Request) throws -> EventLoopFuture<View> { 
        struct Context: Encodable {
            let title: String 
        }

        let context = Context(title: "Char's Blog - Sign in")
        return req.view.render("login", context) 
    }
    
    func login(req: Request) throws -> Response {
        guard let user = req.auth.get(UserModel.self) else {
            throw Abort(.unauthorized) 
        }
        req.session.authenticate(user)
        return req.redirect(to: "/") 
    }
}
```

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Models/UserModel.swift */
extension UserModel: SessionAuthenticatable { 
    typealias SessionID = UUID
    var sessionID: SessionID { self.id! } 
}
```

sessionID将使用模型标识符来唯一标识用户。您可以使用其他任何方法，但这是最简单的解决方案。

现在，我们可以通过登录表单对用户进行身份验证并将其保存到会话存储中，我们需要一种从存储中检索相同用户的方法。这样，我们便可以通过登录表单提供凭据来确定用户之前是否已登录，并且可以在前端显示一些与用户相关的数据。

SessionAuthenticator可以检查会话cookie的值，并根据该值对用户进行身份验证。 Cookies是使用HTTP标头传输的，身份验证器协议会自动从您的请求中解析会话标识符。默认情况下，HTTP协议是无状态的，会话存储被设计为通过各种页面或使用Cookie的请求来传递状态信息。

UserModelSessionAuthenticator应该检查数据库是否存在与给定SessionID关联的有效用户，如果存在则登录返回的用户。我们可以将此新的身份验证器放入用户模块内的新Authenticators文件夹中。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/Authenticators/UserModelSessionAuthenticator.swift */
import Vapor 
import Fluent

struct UserModelSessionAuthenticator: SessionAuthenticator {
    typealias User = UserModel
    func authenticate(sessionID: User.SessionID, for req: Request) -> EventLoopFuture<Void> {
        User.find(sessionID, on: req.db)
        .map { user in 
            if let user = user {
                req.auth.login(user) 
            }
        } 
    }
}
```

所以现在我们有了我们的身份验证器，最后我们可以注册其余路由。 我们仍然必须在用户模块内实现注销功能。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserRouter.swift */
import Vapor

struct UserRouter: RouteCollection {
    
    let controller = UserFrontendController()

    func boot(routes: RoutesBuilder) throws { 
        //...
        routes.grouped(UserModelSessionAuthenticator()).get("logout", use: self.controller.logout)
    } 
}
```

该端点将使用SessionAuthenticator，因为我们只想注销先前已验证并存储在会话存储中的用户。

``` Swift
/**
* FILE:
* Sources/App/Modules/User/UserFrontendController.swift */
import Vapor 
import Fluent

struct UserFrontendController { 
    //...
    func logout(req: Request) throws -> Response { 
        req.auth.logout(UserModel.self) 
        req.session.unauthenticate(UserModel.self) 
        return req.redirect(to: "/")
    } 
}
```

我们还可以检查loginView方法中是否存在登录用户，然后将浏览器重定向到另一个端点，甚至获取用户数据并呈现不同的视图，我不会在此处添加此逻辑，但我将显示您如何在其他控制器中执行此操作。 以后随时实施它是一个好习惯。

![""](http://cdn.xuebaonline.com/vapor-5-stp1.png "")

# 我是经过认证的吗？

因此，从理论上讲，我们可以使用用户模块中的端点登录和注销。 现在让我们稍微改变一下主页，以便我们可以尝试一下我们刚刚构建的内容。 我们将从更改home.leaf模板开始：

``` Swift
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
        <section class="wrapper">
            #if(email != nil):
                <b>#(email)</b> is logged in <a href="/logout">Logout</a> 
            #else:
                <a href="/sign-in">Sign in</a>
            #endif
        </section>
    #endexport 
#endextend
```

我们只是检查是否有电子邮件属性，这将是一个很好的指示。 如果存在电子邮件地址，我们可以在电子邮件旁边显示注销链接，否则，我们应该显示一个登录按钮，该按钮会将我们带到登录屏幕。 让我们更改FrontendController内部的homeView方法以支持此逻辑。

``` Swift
/**
* FILE:
* Sources/App/Modules/Frontend/FrontendController.swift */
import Foundation 
import Vapor

struct FrontendController {
    func homeView(req: Request) throws -> EventLoopFuture<View> { 
        var email: String?
        if let user = req.auth.get(UserModel.self) {
            email = user.email 
        }

        struct Context: Encodable { 
            let title: String
            let header: String
            let message: String 
            let email: String?
        }

        let context = Context(title: "myPage - Home", header: "Hi there,", message: "welcome to my awesome page!", email: email)
        return req.view.render("home", context) 
    }
    //...
}
```

我们还必须在路由处理程序之前添加会话身份验证器。

``` Swift
/**
* FILE:
* Sources/App/Modules/Frontend/FrontendRouter.swift *
*/
import Vapor

struct FrontendRouter: RouteCollection {
    let controller = FrontendController()

    func boot(routes: RoutesBuilder) throws { 
        routes.grouped(UserModelSessionAuthenticator()).get(use: self.controller.homeView)
    } 
}
```

哦，我几乎忘了向您展示CSS文件，添加以下行，以便一切看起来都不错：

``` Css
/**
* FILE:
* Public/css/frontend.css
* (append code snippet to the file) */
label {
    display: block;
    margin-bottom: 8px; 
}
input {
    display: block;
    padding: 8px; 
    margin-bottom: 16px; 
    font-size: 16px;
}
input.field {
    background: #fff;
    color: #000;
}
input.submit { 
    border-width: 4px; 
    border-style: solid; 
    padding: 8px 16px;
} 
input.submit:hover {
    cursor: pointer; 
}
input.submit { 
    color: #fff;
    background: #2B7DF6;
    border-color: #2B7DF6; 
}
input.submit:hover { 
    background: #555BCF; 
    border-color: #555BCF;
}
/* dark mode colors */
@media (prefers-color-scheme: dark) { 
    input.field {
        background: #000;
        color: #fff; 
    }
    input.submit { 
        color: #fff;
        background: #3386F7;
        border-color: #3386F7; }
    input.submit:hover { 
        background: #5B61DE; 
        border-color: #5B61DE;
    } 
}
```

启动服务器，然后尝试使用预先创建的用户帐户登录。 您还可以调出检查器并查看本地cookie存储。 每次您执行注销操作时，会话标识符都应更改。

![""](http://cdn.xuebaonline.com/vapor-5-stp2.png "")

# 更好的视图层次

到目前为止，一切都还不错，尽管我不喜欢我们代码库中的一件事。 视图文件夹中挤满了来自所有不同模块的视图。 从长远来看，这将是混乱的，特别是如果我们有更多的模块。 让我们为此做准备。

您可以通过配置rootDirectory覆盖Leaf模板的默认位置。 确实不错，但我们想拆分视图模板文件夹并在相应模块下移动文件。 如果创建实现LeafFiles协议的自定义文件对象，则可以执行此操作。 我将首先展示给您，然后再说明。

``` Swift
/**
* FILE:
* Sources/App/Modules/ModularViewFiles.swift */
import Vapor 
import Leaf

struct ModularViewFiles: LeafFiles {

    let workingDirectory: String 
    let modulesDirectory: String 
    let alternateDirectory: String 
    let nioLeafFiles: NIOLeafFiles
    
    init(workingDirectory: String,
        modulesDirectory: String = "Sources/App/Modules",
        alternateDirectory: String = "Resources",
        fileio: NonBlockingFileIO) {
        self.workingDirectory = workingDirectory 
        self.modulesDirectory = modulesDirectory 
        self.alternateDirectory = alternateDirectory 
        self.nioLeafFiles = NIOLeafFiles(fileio: fileio)
    }

    func file(path: String, on eventLoop: EventLoop) -> EventLoopFuture<ByteBuffer> { 
        let viewsDir = "Views"
        let resourcesPath = self.alternateDirectory + "/" + viewsDir
        let ext = ".leaf"
        let name = path.replacingOccurrences(of: ext, with: "") 
        let resourceFile = resourcesPath + name + ext
        if FileManager.default.fileExists(atPath: resourceFile) {
            return self.nioLeafFiles.file(path: self.workingDirectory + resourceFile, on: eventLoop)
        }
        
        let components = name.split(separator: "/")
        let pathComponents = [String(components.first!), viewsDir] + components.dropFirst().map { String($0) } 
        
        let moduleFile = self.modulesDirectory + "/" + pathComponents.joined(separator: "/") + ext
        return self.nioLeafFiles.file(path: self.workingDirectory + moduleFile, on: eventLoop)
    } 
}
```

我已将此结构放置在App/Modules文件夹中。 这段代码使您可以在Modules/[module-name]/Views文件夹下查找视图。 这将使我们能够将视图文件移动到相应的模块目录下。 关于此自定义文件查找工具的另一件整洁的事情是，如果在Resources/Views文件夹下存在一个具有相同名称的视图，则它将加载该视图，而不是模块下的视图。 让我向您展示它在实践中是如何工作的。

我们必须使用上面的结构在Leaf上设置新文件实现，还必须在Leaf配置对象上分配新的根目录。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
import Leaf
import Fluent
import FluentSQLiteDriver 
import Vapor

public func configure(_ app: Application) throws {
    //...
    app.views.use(.leaf)
    app.leaf.cache.isEnabled = app.environment.isRelease

    let workingDirectory = app.directory.workingDirectory 
    app.leaf.configuration.rootDirectory = "/"

    app.leaf.files = ModularViewFiles(workingDirectory: workingDirectory, fileio: app.fileio)

    //...
} 
```
现在，如果您构建并运行该应用程序，则所有内容都应像以前一样工作。 很好，我们的模块化视图加载器在后台运行，但是现在我们可以做得更好。

将每个视图文件移到正确的模块文件夹下，并大写其名称。 由于我们正在构建网站的前端，因此可以将frontend模块下的主要视图仅放置在views目录中，但是对于其他模块，我们将所有内容都放在Views/Frontend文件夹下。 稍后，当我们创建管理界面时，这将帮助我们根据范围将视图分开。 这就是文件结构的外观。

``` Swift
- Frontend/Views: Home.leaf, Index.leaf
- Blog/Views/Frontend: Blog.leaf, Post.leaf 
- User/Views/Frontend: Login.leaf
```

您还应该在控制器中更改render方法，因为我们将文件移动到了新位置，所以我们必须使用这些文件作为引用：

``` Swift
- FrontendController: "Frontend/Home"
- BlogFrontendController: "Blog/Frontend/Blog", "Blog/Frontend/Post" 
- UserFrontendController: "User/Frontend/Login"
```

在每个模板视图中（当然在基本Index.leaf文件中除外），用#extend（“Frontend/Index”）替换#extend（“index”）标签。准备就绪后，只需构建并运行该应用程序，您应该会看到没有任何更改，但是现在所有的Leaf文件都绑定到一个特定的模块。这是封装模块和开发模板的好方法。

现在，关于此解决方案的神奇之处在于，您仍然可以将视图放置在resources目录下。如果这样做，它将覆盖位于模块内部的模块。让我们尝试通过将User/Views/Frontend/Login.leaf文件复制到Resources/Views/User/Frontend/Login.leaf位置来制作一个文件。更改电子邮件标签，例如到电子邮件地址并刷新登录页面。您应该看到使用了更改后的视图。

稍后，我们稍后将使用一个部署脚本，该脚本可以将每个单个视图文件移动到Resources/Views文件夹中，并且仅在开发模式下启用此模块化视图解决方案。我相信这是使用Leaf构建结构良好的模板层次结构的好方法。如果需要，您还可以在此解决方案的顶部实现多模板支持。

# 摘要

本章分为三个主要部分。 在第一部分中，我们根据之前学过的原理创建了一个新模块。 在第二部分中，我们使用身份验证层扩展了该用户模块的功能，并使用Fluent驱动程序扩展了持久会话。 在拥有基本的登录系统之后，我们意识到视图已失控，因此我们将其分组为模块来解决该问题。 本章主要是关于为我们的管理系统创建基础块。 在接下来的几章中，我们将构建一个完整的内容管理系统（CMS），使我们可以创建，更新或删除存储在数据库中的模型。