---
title: 'Vapor系列 (四) :  创建博客数据库'
description: 'Vapor系列 (四) :  创建博客数据库'
permalink: 'Vapor系列 (四) :  创建博客数据库'
copyright: ture
date: 2020-06-22 12:14:10
keywords: iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0,Hello Vapor,Leaf,创建博客数据库
tags:
    - [Vapor 4.0]
    - [创建博客数据库]
    - [Swift 5.0]
categories:
    - [Vapor 4.0]
---

您将了解Fluent ORM框架以及使用此类工具而不是编写原始数据库查询的优势。 我们将设置由SQLite驱动程序支持的Fluent，并使用Swift中的属性包装器对数据库字段进行建模。 我们将为数据库提供种子，熟悉迁移脚本并在网站上进行一些更改，以便它可以查询本地数据库中的博客文章并使用Leaf呈现它们。

# 从Fluent入手

首先，我们必须添加Fluent作为依赖项。 Fluent是数据库引擎之上的抽象层。 主要实现分为独立的Swift包。 Fluent附带了几个数据库驱动程序，每个数据库驱动程序都有自己的SPM存储库。 在此示例中，我们将使用SQLite驱动程序。

让我们将新的依赖项添加到Package.swift文件中：

``` Swift
/**
* FILE:
* Package.swift */
// swift-tools-version:5.2
import PackageDescription
let package = Package( name: "myProject", 
    platforms: [
    .macOS(.v10_15) ],
    dependencies: [
        // 💧 A server-side Swift web framework.
        .package(url: "https://github.com/vapor/vapor.git", from: "4.5.0"), 
        .package(url: "https://github.com/vapor/leaf.git", from: "4.0.0-rc.1"), 
        .package(url: "https://github.com/vapor/fluent.git", from: "4.0.0-rc"), 
        .package(url: "https://github.com/vapor/fluent-sqlite-driver.git", from:  "4.0.0-rc") ],
    targets: [
        .target(name: "App", dependencies: [
        .product(name: "Leaf", package: "leaf"),
        .product(name: "Fluent", package: "fluent"),
        .product(name: "FluentSQLiteDriver", package: "fluent-sqlite-driver"), .product(name: "Vapor", package: "vapor"),
    ]),
    .target(name: "Run", dependencies: ["App"]), .testTarget(name: "AppTests", dependencies: [
        .target(name: "App"),
        .product(name: "XCTVapor", package: "vapor"), ])
    ]
)
```

<!-- more -->

一旦更新了软件包或Xcode已准备好进行解析过程，就可以通过导入框架开始使用Fluent。 Fluent软件包包含Vapor的扩展，FluentKit是实际的抽象层，而Fluent[db]Driver是给定数据库驱动程序的实现。 您不必显式导入FluentKit。

``` Swift
/**
* FILE:
* Sources/App/configure.swift */
import Leaf
import Fluent
import FluentSQLiteDriver 
import Vapor

public func configure(_ app: Application) throws {
    app.databases.use(.sqlite(.file("db.sqlite")), as: .sqlite)
    //...
}
```

在配置文件中，您必须同时导入Fluent和FluentSQLiteDriver程序包，但这是唯一必须导入特定驱动程序实现的地方。 SQLite数据库可以将数据保存到内存或文件存储中，我们将对其进行配置，以将所有内容持久保存到db.sqlite文件中。

好消息是，这是您唯一需要与基础驱动程序进行交互的文件。 从现在开始，您只需要在其他任何地方导入抽象Fluent模块，就可以通过ORM框架使用数据库了。 如果要切换到新的数据库驱动程序，只需更改配置即可。 我们将在下一章中进行。

# 使用模型

建模博客数据库的下一步是创建一个实体，该实体将代表博客文章的类别。 模型基本上是数据库中的表行。 使用Fluent框架，编写模型定义是一件容易的事，我们只需要遵循Model协议即可。 BlogCategoryModel.swift文件应放在Models目录下的blog模块中，并且应如下所示：

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Models/BlogCategoryModel.swift */
import Vapor 
import Fluent
final class BlogCategoryModel: Model {
    
    static let schema = "blog_categories"
    
    struct FieldKeys {
        static var title: FieldKey { "title" }
    }

    @ID() var id: UUID?

    @Field(key: FieldKeys.title) 
    var title: String 
    @Children(for: \.$category) 
    var posts: [BlogPostModel]
    
    init() { }
    
    init(id: UUID? = nil, title: String) { 
        self.id = id
        self.title = title 
    }
}
```

您需要创建一个架构属性，该属性是将要存储这些实体的数据库表的名称。每行的名称将使用新的FieldKey类型定义。我总是喜欢将所有键作为静态变量的结构。在迁移过程中，您可以使用这些键来创建基础数据库方案。

字段是Swift的属性，使用属性包装器表示查询的标识符和更复杂的映射。这意味着数据库字段标记有来自Fluent框架的特殊属性包装器。 @ID包装器用于创建唯一标识符。 @Field包装器可用于设置常规字段以及相应的键作为数据库列。 @Children和@Parent包装器都用于在关系之间创建链接。每个属性包装器都有一个关联的字段键。

模型应具有唯一的标识符字段。在最新版本的Fluent中，UUID是用于此目的的首选类型，但您也可以使用Int或其他类型，但我不建议这样做。当前，UUID是唯一适用于所有驱动程序的id类型。

作为字段，您可以使用Swift编程语言中的任何类型，可以存储字符串，数字，枚举甚至复杂的JSON对象。您可以在有关Fluent的文章中阅读有关受支持类型的更多信息。 Model实例的最后一步是实现必要的init方法。模型始终被定义为类，您必须手动创建这些init方法，值得寻找一些可以为您生成的Xcode扩展。

基于我们所知道的，BlogPostModel应该看起来像这样：

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Models/BlogPostModel.swift */
import Vapor 
import Fluent

final class BlogPostModel: Model {

    static let schema: String = "blog_posts"
    struct FieldKeys {
        static var title: FieldKey { "title" }
        static var slug: FieldKey { "slug" }
        static var image: FieldKey { "image" }
        static var excerpt: FieldKey { "excerpt" } 
        static var date: FieldKey { "date" }
        static var content: FieldKey { "content" } 
        static var categoryId: FieldKey { "category_id" }
    }

    @ID() var id: UUID?
    @Field(key: FieldKeys.title) var title: String
    @Field(key: FieldKeys.slug) var slug: String
    @Field(key: FieldKeys.image) var image: String
    @Field(key: FieldKeys.excerpt) var excerpt: String
    @Field(key: FieldKeys.date) var date: Date
    @Field(key: FieldKeys.content) var content: String
    @Parent(key: FieldKeys.categoryId) var category: BlogCategoryModel

    init() { }
    
    init(id: UUID? = nil, title: String, slug: String, image: String, excerpt: String, date: Date, content: String, categoryId: UUID)
    {
        self.id = id
        self.title = title
        self.slug = slug
        self.image = image 
        self.excerpt = excerpt 
        self.date = date
        self.content = content 
        self.$category.id = categoryId
    } 
}
```

几乎相同的模式，只是我们将类别标记为@Parent，因为我们希望能够在类别下放置多个帖子，所以这是一对多关系，其中帖子用@Children标记 包装器使用另一个对象的关键路径。 稍后，我们将更多地讨论关系和关键路径，但现在就可以使用了。 在开始使用这些模型之前，我们必须创建一些迁移。

# 数据库迁移

迁移是创建，更新或删除一个或多个数据库表的过程。 换句话说，改变数据库架构的一切都是迁移。 您应该知道您可以注册多个迁移脚本，并且Vapor将按字母顺序运行它们，这就是为什么我更喜欢对它们进行语义版本控制。

如果使用SQL数据库，则必须创建具有预定义架构的表来存储数据。 迁移是此架构创建的过程。 您可以使用迁移脚本来更改架构，例如，如果您在模型上引入了新属性，或者使用基本条目为数据库添加了种子。 换句话说，迁移正在为模型准备数据库。 让我们看一下如何为博客模块创建迁移。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Migrations/BlogMigration_v1_0_0.swift */
import Foundation 
import Fluent

struct BlogMigration_v1_0_0: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> { 
        database.eventLoop.flatten([
            database.schema(BlogCategoryModel.schema) 
            .id()
            .field(BlogCategoryModel.FieldKeys.title, .string, .required)
            .create(), 
        database.schema(BlogPostModel.schema)
            .id()
            .field(BlogPostModel.FieldKeys.title, .string, .required) 
            .field(BlogPostModel.FieldKeys.slug, .string, .required) 
            .field(BlogPostModel.FieldKeys.image, .string, .required) 
            .field(BlogPostModel.FieldKeys.excerpt, .string, .required) 
            .field(BlogPostModel.FieldKeys.date, .datetime, .required) 
            .field(BlogPostModel.FieldKeys.content, .string, .required)
            .field(BlogPostModel.FieldKeys.categoryId, .uuid) 
            .foreignKey(BlogPostModel.FieldKeys.categoryId,
                references: BlogCategoryModel.schema, 
                .id, 
                onDelete: DatabaseSchema.ForeignKeyAction.setNull, 
                onUpdate: .cascade)
            .unique(on: BlogPostModel.FieldKeys.slug) 
            .create(),
        ]) 
    }

    func revert(on database: Database) -> EventLoopFuture<Void> { 
        database.eventLoop.flatten([
            database.schema(BlogCategoryModel.schema).delete(),
            database.schema(BlogPostModel.schema).delete(), ])
    } 
}
```

通过模式构建器建立模型的结构。在数据库对象上，您可以通过提供名称来定义模式，然后必须列出要用作存储空间的具有给定类型的所有字段。通过使用eventLoop上的.flatten方法将它们组合在一起，可以一次创建多个方案。迁移也可以撤消，这就是为什么必须实现还原方法的原因。

最后，您可以使用.foreignKey方法将约束添加到字段。如果关系发生更改，约束可以更新您的数据库。您可以在删除和更新操作上设置自己的首选项。例如，如果删除父类别，则可以删除所有子类别，或将引用子类别设置为null。您还可以通过在字段上施加唯一约束来确保字段唯一。

在实施种子数据迁移之前，首先需要一个自定义的日期格式化程序，该程序可以将日期转换为年份字符串，反之亦然。这是因为我们仅将给定博客文章的年份存储为日期。您可以将此日期格式扩展名放在App/Extensions/DateFormatter+year.swift下。

``` Swift
/**
* FILE:
* Sources/App/Extensions/DateFormatter+Year.swift */
import Foundation 

extension DateFormatter {
    static var year: DateFormatter = { 
        let formatter = DateFormatter() 
        formatter.dateFormat = "y" 
        return formatter
    }() 
}
```

现在，我们可以将先前定义的伪数据转换为数据库种子。 我们只需要构造BlogPostModel对象，而不是先前使用的虚拟BlogPost对象。 您也可以删除该结构，因为我们不再需要它。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Migrations/BlogMigration_v1_0_0.swift */
import Foundation 
import Fluent

struct BlogMigration_v1_0_0: Migration {
    private func uncategorizedPosts(for category: BlogCategoryModel) -> [BlogPostModel] {              
        [
            BlogPostModel(title: "California",
                slug: "california",
                image: "/images/posts/03.jpg",
                excerpt: "Voluptates ipsa eos sit distinctio.",
                date: DateFormatter.year.date(from: "2015")!,
                content: "Et non reiciendis et illum corrupti. Et ducimus optio
                    commodi molestiae quis ipsum consequatur. A fugit amet amet qui tenetur. Aut voluptates ut labore consectetur temporibus consectetur. Perferendis et neque id minima voluptatem temporibus a dolor. Eos nihil dignissimos consequuntur et consequuntur nam.",
                categoryId: category.id!),
        ] 
    }
        private func islandPosts(for category: BlogCategoryModel) -> [BlogPostModel] { [
            BlogPostModel(title: "Indonesia", slug: "indonesia",
                image: "/images/posts/05.jpg",
                excerpt: "Et excepturi id harum ipsam doloremque.",
                date: DateFormatter.year.date(from: "2019")!,
                content: "Accusantium amet vero numquam tenetur sit quidem ut.
                    Officiis in iste adipisci corporis. Nisi aut consequatur laudantium et veritatis aut amet officiis. Repellat sapiente quis cupiditate veniam est. Est tempora molestiae voluptatum excepturi eum. Eos provident labore quidem ipsam.",
                categoryId: category.id!),

            BlogPostModel(title: "Mauritius", slug: "mauritius",
                image: "/images/posts/04.jpg",
                excerpt: "Pariatur debitis quod occaecati quidem. ", 
                date: DateFormatter.year.date(from: "2016")!,
                content: "Enim et a ex quisquam qui sed fuga consectetur. Dolorem et eum non dicta modi tempora facilis. Totam doloremque. Libero   consequuntur et distinctio esse a provident est sunt. Rerum  quibusdam blanditiis optio dolores repudiandae magni autem consectetur. Fugit quis sed autem.",
                categoryId: category.id!),

            BlogPostModel(title: "The Maldives", slug: "the-maldives",
                image: "/images/posts/02.jpg",
                excerpt: "Possimus est labore recusandae asperiores fuga sequisit.",
                date: DateFormatter.year.date(from: "2014")!,
                content: "Dignissimos mollitia doloremque omnis repellendus quibusdam ut amet. Autem vitae enim consequuntur. Quis quo esse numquam doloremque esse.
                Neque accusantium sint tempore distinctio. Dolorem quibusdam et ab impedit necessitatibus cum. Eius voluptatem ducimus velit non.",
                categoryId: category.id!),
            BlogPostModel(title: "Sri Lanka", slug: "sri-lanka",
                image: "/images/posts/01.jpg",
                excerpt: "Ratione est quo nemo dolor placeat dolore.",
                date: DateFormatter.year.date(from: "2014")!,
                content: "Deserunt nulla culpa aspernatur ea a accusantium quia
                quibusdam. Ducimus delectus ea ipsa quisquam aut in deleniti quia. Error aliquam harum earum. Quos dignissimos dolores ratione illo. Dolores velit sunt sed quas quis itaque sit omnis. Molestias explicabo aut eum amet blanditiis quia similique soluta.",
            ] 
    }
}
```

您可以使用种子功能在现有类别下创建帖子。 所有这些都应该在准备使用架构之后发生。 在Flatten数组中完成块之后，我们可以使用.flatMap函数执行其他操作。 通过这种方法，可以在迁移期间将必要的数据模型创建为表行：

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Migrations/BlogMigration_v1_0_0.swift */
import Foundation 
import Fluent

struct BlogMigration_v1_0_0: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> { 
        database.eventLoop.flatten([
        //...
        ]).flatMap {
            let defaultCategory = BlogCategoryModel(title: "Uncategorized") 
            let islandsCategory = BlogCategoryModel(title: "Islands") 
            return [defaultCategory, islandsCategory].create(on: database) 
                    .flatMap { [unowned defaultCategory] in
                            let posts = self.uncategorizedPosts(for: defaultCategory) + self.islandPosts(for: islandsCategory)
                        return posts.create(on: database) 
                    }
        } 
    }
    //...
}
```

最后一步是注册我们的迁移脚本，以便应用程序可以在需要时运行它。 为此，我们可以简单地更改configure方法，但是在继续前进之前，我们将稍作改动。

在上一章中，我们已将路由器注册在配置文件中。 到目前为止，每个模块都有一个路由器，似乎它们也可以进行迁移。 我们应该意识到这是一个命令模式，这就是为什么我们可以创建一个协议来表示这些东西的原因。
在Modules目录中创建一个名为Module.swift的新文件。

``` Swift
/**
* FILE:
* Sources/App/Modules/Module.swift */
import Vapor 
import Fluent

protocol Module {
    var router: RouteCollection? { get } 
    var migrations: [Migration] { get }
    func configure(_ app: Application) throws
}

extension Module {
    var router: RouteCollection? { nil }
    var migrations: [Migration] { [] }

    func configure(_ app: Application) throws {
        for migration in self.migrations {
            app.migrations.add(migration)
        }
        if let router = self.router {
            try router.boot(routes: app.routes) 
        }
    }
}
```

模块是可以返回路由器，迁移脚本的东西。 您将看到，稍后我们将使用其他一些扩展接口。 应用程序可以使用协议上定义的配置方法遍历模块并配置所有内容。 我们可以为configure方法提供默认实现，因此模块不必这样做。

现在，在Frontend目录中实现一个FrontendModule对象文件。
   
``` Swift
/**
* FILE:
* Sources/App/Modules/Frontend/FrontendModule.swift */
import Vapor 
import Fluent

struct FrontendModule: Module {
    var router: RouteCollection? { 
        FrontendRouter()
    } 
}
```

下一个是Blog文件夹中的BlogModule。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogModule.swift *
*/
import Vapor 
import Fluent

struct BlogModule: Module {
    var router: RouteCollection? { 
        BlogRouter()
    }
    var migrations: [Migration] { 
        [BlogMigration_v1_0_0(), ]
    } 
}
```

最后，我们将稍稍更改配置文件，可以随时删除原始路由注册，因为从现在开始，该模块将处理所有事情。

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
    let modules: [Module] = [ FrontendModule(), BlogModule(), ]
    for module in modules {
        try module.configure(app)
    } 
}
```

现在我们准备迁移数据库。

您应该知道，如果您运行该应用程序，则默认情况下它将执行一个称为serve的命令，但是您不必显式提供serve参数。 此命令负责启动基础HTTP服务器，当您运行应用程序时，serve命令将使用给定的主机名和端口开始侦听。 这是Vapor中的默认命令。

为了运行迁移，您已经使用migration参数启动了应用程序，这将运行迁移脚本而不是启动Web服务器。

``` Bash
swift run Run migrate
```

![""](https://cdn.xuebaonline.com/vapor-4-stp2.png "")

或者，您可以在Xcode的“编辑方案”菜单下设置命令行参数：

![""](https://cdn.xuebaonline.com/vapor-4-stp1.png "")

如果使用此迁移参数运行该应用程序，则会看到提示，您必须确认迁移。您可以通过在运行应用程序时提供--auto-migrate标志作为额外的参数来跳过确认。

如果您使用的是Xcode，则可以简单地复制方案并为每个方案设置不同的参数。这样，您只需选择例如迁移方案，而不是运行/myProject方案。

在第一次迁移期间，Fluent将创建一个名为_fluent_migrations的内部表。迁移系统正在使用该查找表来检测哪些迁移已经执行，以及下次运行migration命令时需要完成哪些迁移。

迁移脚本正在分批执行。当您运行迁移命令时，这是一个批处理。每个需要运行的迁移脚本都将具有相同的批次标识符。下次运行迁移命令时，Vapor将检查查找表，它确定需要执行的操作，增加批次标识符，运行新的迁移并将其保存在表中。

您可以通过运行带有--revert标志的migration命令来还原最后一批迁移。 这将仅还原最后一批迁移，因此您可能必须运行多次才能还原所有内容。 或者，您可以从磁盘上删除整个SQLite数据库文件，这将重置所有内容。

数据库文件将在工作目录下创建。 浏览SQLite文件非常容易，您可以下载并使用https://sqlitebrowser.org 应用程序，也可以通过brew cask install db-browser-for-sqlite命令安装它。

# 查询和渲染

现在，我们可以使用种子数据进行工作迁移了，我们可以开始使用Fluent检索模型了。 另一件事是，我不喜欢使用直接来自Fluent层的模型来渲染视图，但我更喜欢有一个ViewContext对象，可以安全地将其作为Leaf的上下文项传递。 这是因为模型可以包含敏感信息，只考虑带有密码哈希的用户，最好定义一个可编码的视图上下文并将数据库模型映射到其中。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Models/BlogCategoryModel.swift */

extension BlogCategoryModel {
    struct ViewContext: Encodable { 
        var id: String
        var title: String
    
        init(model: BlogCategoryModel) { 
            self.id = model.id!.uuidString 
            self.title = model.title
        } 
    }
    var viewContext: ViewContext { 
        .init(model: self) 
    } 
}
```

ViewContext结构是一个Encodable对象，具有基于模型的属性。 您可以将该扩展名放在模型旁边，在这种情况下，不需要新文件。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/Models/BlogPostModel.swift */
extension BlogPostModel {
    struct ViewContext: Encodable { 
        var id: String
        var title: String 
        var slug: String 
        var image: String 
        var excerpt: String 
        var date: String 
        var content: String

        init(model: BlogPostModel) { 
            self.id = model.id!.uuidString 
            self.title = model.title 
            self.slug = model.slug 
            self.image = model.image s
            elf.excerpt = model.excerpt
            self.date = DateFormatter.year.string(from: model.date)
            self.content = model.content
        }
    }
        
    var viewContext: ViewContext { 
        .init(model: self) 
    } 
}
```

这是一项很无聊且重复的任务，但是请相信我，长期的努力是值得的。 我总是从视图上下文对象中忽略关系，因为在某些情况下会引起问题。 我有一个更好的方法来处理该问题，我将在短短几秒钟内向您展示。 在BlogFrontendController中，我们必须进行一些更改：

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogFrontendController.swift */
struct BlogFrontendController {
    func blogView(req: Request) throws -> EventLoopFuture<View> { 
        struct Context: Encodable {
            struct PostWithCategory: Encodable {
                    var category: BlogCategoryModel.ViewContext 
                    var post: BlogPostModel.ViewContext
            }
            let title: String
            let items: [PostWithCategory]
        }

        return BlogPostModel.query(on: req.db) 
                .sort(\.$date, .descending) 
                .with(\.$category)
                .all()
                .mapEach { 
                    Context.PostWithCategory(category: $0.category.viewContext, post: $0.viewContext) }
                .flatMap { 
                    let context = Context(title: "myPage - Blog", items: $0) 
                    return req.view.render("blog", context) } 
    }
}
```

您应该注意的第一件事是我们正在创建一个新的PostWithCategory结构。这是博客文章和相关类别对象的容器。我们可以将这些项目存储在Context对象中。

接下来，我们可以在Model上使用静态查询方法，以从数据库表中请求实体。这将返回一个查询构建器实例，您可以通过添加各种过滤器，限制和排序选项来进行调整。使用with方法，可以将关系对象加载到模型中。 all方法将执行查询，并将请求的行作为Model对象返回。稍后我们将看到更多数据库查询示例。

我们可以使用mapEach函数将每个项目转换为新的项目。在我们的例子中，我们需要上下文项来呈现视图。这整个链返回一个EventLoopF​​uture，因此我们可以使用flatMap方法使用该块中的项目来呈现视图。

现在，我们只需要稍微更改一下相应的博客视图，因为items数组现在是PostWithCategory对象，因此我们可以使用点语法访问post＆category。

``` Swift
/**
* FILE:
* Resources/Views/blog.leaf */
#extend("index"): 
    #export("body"):
    <section id="blog" class="wrapper"> 
        <h2>Blog</h2>
        #for(item in items):
            <article>
                <a href="/#(item.post.slug)">
                <img src="#(item.post.image)"> 
                <h3>#(item.post.title) (#(item.post.date))</h3>
                <p>#(item.post.excerpt)</p>
                <p class="category">#(item.category.title)</p>
                </a> 
            </article>
        #endfor
    </section>
    #endexport 
#endextend
```

接下来，对细节页面执行几乎完全相同的操作。 确保这次导入Fluent框架，否则编译器将告诉您.filter()行是错误的，因为表达式的类型是模棱两可的，没有更多上下文。

``` Swift
/**
* FILE:
* Sources/App/Modules/Blog/BlogFrontendController.swift */
import Fluent

struct BlogFrontendController {
    func postView(req: Request) throws -> EventLoopFuture<Response> { 
        struct Context: Encodable {
            struct PostWithCategory: Encodable {
                var category: BlogCategoryModel.ViewContext 
                var post: BlogPostModel.ViewContext
            }
            let title: String
            let item: PostWithCategory
        }

        let slug = req.url.path.trimmingCharacters(in: .init(charactersIn: "/"))
        return BlogPostModel.query(on: req.db) 
                .filter(\.$slug == slug) 
                .with(\.$category)
                .first()
                .flatMap { post in
                    guard let post = post else {
                        return req.eventLoop.future(req.redirect(to: "/")) 
                    }
                    let item = Context.PostWithCategory(category: post.category.viewContext, post: post.viewContext)
                    let context = Context(title: "myPage - \("post.title")", item: item)
                    return req.view.render("post", context).encodeResponse(for: req) }
    } 
}
```

PostWithCategory结构是多余的，我们可以简单地将其从上下文中移出，这样就不会重复任何代码。无论如何，我们使用与以前相同的方法来请求博客文章模型，但是这次我们通过搜索一个条目来过滤列表。

与Fluent查询构建器相关的几乎所有内容都使用Swift键路径。键路径是一种特殊类型，可以通过在属性名称前使用\字符来构造它。在这种情况下，我们始终使用\。$ <field>表达式来引用fields属性包装器的键路径。乍一看这有点奇怪，但是您可以习惯它。

使用$前缀，您可以访问属性包装器本身，而无需$符号，则可以引用属性的keyPath。当我们使用Fluent过滤某些内容时，我们通常希望到达属性包装器，因此框架可以使用存储在包装器上的字段名称和包装的值来基于它们创建查询字符串。

在过滤博客文章列表之后，我们加载类别对象并请求结果的第一个元素。如果没有这样的元素，我们只需重定向到主屏幕。否则，我们可以将博客文章转换为视图上下文，并在模板中使用它。

顺便说一下，我们也必须更改post.leaf文件：

``` CSS
/**
* FILE:
* Resources/Views/post.leaf */
#extend("index"): 
    #export("body"):
    <section id="blog" class="wrapper">
        <img src="#(item.post.image)"> 
        <h2>#(item.post.title) (#(item.post.date))</h2> 
        <p>#(item.post.excerpt)</p>
        <p class="category">#(item.post.category)</p> 
        <p>#(item.post.content)</p>
    </section>
    #endexport 
#endextend
```

现在，我们可以安全地删除旧的BlogPost.swift和BlogRepository.swift文件。 再次运行该应用程序，但是如果您使用的是Xcode，请不要忘记禁用migration参数。 您应该看到博客现在正在使用真实的SQLite数据库运行。

# 摘要

在本章中，我们探讨了Fluent的工作方式，已成功地将博客存储迁移到了正常的SQLite数据库中。 我们已经了解了模式构建器以及它们如何帮助我们为模型创建类型安全的SQL数据库表。 我们还学习了很多有关通过属性包装器使用各种字段类型和关系对数据库实体建模的知识。 除了当前的模块化结构之外，我们还引入了Module协议，并且了解了为什么使用分离的视图模型来呈现Fluent实体是一件好事。