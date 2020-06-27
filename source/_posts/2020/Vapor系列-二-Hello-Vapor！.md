---
title: 'Vapor系列 (二) :  Hello Vapor！'
description: 'Vapor系列 (二) :  Hello Vapor！'
permalink: 'Vapor系列 (二) :  Hello Vapor！'
copyright: ture
date: 2020-06-21 20:19:30
keywords: iOS,Swift,Swift Vapor,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型,Vapor4.0,Hello Vapor
tags:
    - [Vapor 4.0]
    - [Hello Vapor]
    - [Swift 5.0]
categories:
    - [Vapor 4.0]
---

本章包含有关如何安装所有必需组件以在Linux和macOS上构建服务器端Swift应用程序的详细说明。 您将遇到一些命令行工具，这些工具可以帮助您作为后端开发人员的日常生活，并且我们将使用Swift Package Manager创建我们的第一个Vapor项目。 我们还将设置Vapor工具箱，它是一个方便的小工具，可以帮助您基于模板引导项目。 在最后一部分中，我们将简要介绍Vapor应用程序的体系结构。

# 安装SWIFT

您需要的第一件事是可以运行Linux的Mac或PC。如果您使用Mac，则应该获得最新的macOS版本10.15.4，建议在PC上使用Ubuntu 18.04，但16.04版本也支持Swift 5.2和Vapor 4。为了创建Vapor应用程序，您必须先安装Swift。 Vapor 4仅与Swift 5.2或更高版本兼容。

# Swift On MacOS

Swift及其所有依赖项都与macOS上的Xcode捆绑在一起。可从Mac App Store免费下载最新版本的开发人员工具。下载完成后，您必须打开Xcode才能完成安装。首次启动后，Xcode将在Mac上安装一些其他开发人员工具，您可能必须输入密码才能继续安装。该过程完成后，您就可以在macOS上使用Swift了。

<!-- more -->

# 在Linux上切换

在Linux（建议使用Ubuntu 18.04）上，您应该至少安装Swift 5.2.1，因为官方5.2发行版中存在一些会导致严重性能问题的错误。您可以使用lsb_release命令检查您的Linux版本：

``` Bash
lsb_release -a
```

这将打印出系统信息，然后您应该从swift.org下载最新的Swift版本。 您可以右键单击下载链接进行复制，然后使用curl或wget通过命令行获取压缩的发行文件。

在提取存档之前，我们必须安装一些其他依赖项：

``` Bash
sudo apt-get install clang libicu-dev
```

现在，您可以使用tar命令解压缩下载的档案：

``` Bash
tar xzf swift-<VERSION>-<PLATFORM>.tar.gz
```

最后一步是导出二进制文件的位置：

``` Bash
export PATH=/path/to/swift:"${PATH}"
```

现在您可以编写一些Swift代码了。

# 验证SWIFT版本

现在您应该可以在两个平台上使用Swift了。 您可以通过在命令行中输入以下内容来验证安装：

``` Bash
swift --version
Apple Swift version 5.2 (swiftlang-1103.0.32.1 clang-1103.0.32.29) Target: x86_64-apple-darwin19.4.0
```

这很容易，但是我想向您展示另一个工具，因为它是在您的操作系统上管理Swift版本的跨平台解决方案。

# SWIFT版本管理器

Swift版本管理器（也称为swiftenv）使您可以轻松安装多个Swift版本并在其中进行切换。 它可以安装在两个平台上，只需克隆它即可：

``` Bash
git clone https://github.com/kylef/swiftenv.git ~/.swiftenv
```

下一步是配置环境。

如果您使用的是Linux，则默认外壳可能是Bash。 您可以输入以下命令来设置swiftenv的环境：

``` Bash
echo 'export SWIFTENV_ROOT="$HOME/.swiftenv"' >> ~/.bash_profile 
echo 'export PATH="$SWIFTENV_ROOT/bin:$PATH"' >> ~/.bash_profile 
echo 'eval "$(swiftenv init -)"' >> ~/.bash_profile
```

ZSH是macOS 10.15的默认外壳，您应该运行以下命令来设置swiftenv的环境：

``` Bash
echo 'export SWIFTENV_ROOT="$HOME/.swiftenv"' >> ~/.zshenv 
echo 'export PATH="$SWIFTENV_ROOT/bin:$PATH"' >> ~/.zshenv 
echo 'eval "$(swiftenv init -)"' >> ~/.zshenv
```

您可以列出所有可用的Swift语言版本：

``` Swift
swiftenv install --list
```

运行以下命令以安装特定的Swift版本：

``` Bash
swiftenv install <version>
```

swiftenv命令可以做更多的事情，它还支持本地Swift版本，因此您可以在计算机上进行多次安装。 官方网站上有完整的手册。

# 我的第一个 Vapor APP

Swift软件包管理器（SPM）是一个开源工具，可以帮助您管理和分发作为软件包的Swift代码，它是Swift基础结构的一部分，因此您无需安装其他任何东西。 它通过利用编译和链接各个源文件，管理依赖项，版本控制等需求的方式为您提供帮助。Xcode 11与软件包管理器集成在一起，可在Linux和所有主要的Apple平台上运行。 您可以使用SPM启动一个新的Swift项目，让我们创建一个新的myProject目录并初始化一个包。

``` Bash
swift package init --type=executable
```

此命令将创建一个新的可执行项目。 让我们看一下文件结构。

![""](https://cdn.xuebaonline.com/vapor-2-stp1.png "")

默认情况下，“源”文件夹将用作生成源。 每个目标在Sources目录中都有其专用的位置。 在这里可以放置您的Swift文件。 在我们的例子中，myProject目标只有一个名为main.swift的源文件。 这是我们的可执行myProject目标的主要入口点。

我现在不想过多地谈论Tests目录，您应该只知道测试目标的源文件位于Tests文件夹下。 有专门的章节说明了使用Vapor的新测试框架进行测试的所有内容。

您可以使用以下命令来构建和运行该应用程序：

``` Bash
swift run VaporLearning
```

![""](https://cdn.xuebaonline.com/vapor-2-stp2.png "")

这将打印出著名的“你好，世界！” 文本。 您也可以通过打开Package.swift文件从Xcode运行项目，或者可以生成专用的项目文件。 您可以在下面的几节中详细了解差异。

# 了解包清单文件

[***```清单文件```***](https://theswiftdev.com/the-swift-package-manifest-file/ "") 始终以打包工具版本声明行开头。接下来，您必须导入PackageDescription框架，这将允许您定义有关软件包的一些详细信息。程序包定义始终以名称开头。 （可选）您可以通过添加platform参数来缩小支持的版本。 Vapor 4仅支持macOS 10.15，因此需要在软件包文件中包含此文件。软件包清单中还有其他三个重要部分。

程序包可以具有外部依赖性。您可以通过添加本地或远程git存储库URL在依赖项部分下指定这些URL。您还应该明确告诉所需的软件包版本。每个软件包都应遵循语义版本约定。可以从仅包含较小更改的特定版本使用版本，您可以使用分支，也可以确切地说出您要使用哪个版本。有很多可能性来设置所需的正确选项。

该软件包也有其自己的目标。这些是模块或测试套件的基本构建块。目标可以依赖于其他目标或来自外部依赖项的产品。您还可以设置目标在磁盘上的路径，从构建过程中排除源文件，或指定要构建的文件。目标可以具有自定义构建配置，可以选择传递c，cxx，swift和链接器设置。

包装的最后一个组成部分是产品部分。产品由目标依赖组成。当前，您可以构建两种类型的产品。可执行文件是可以使用命令行运行的二进制文件。库产品是其他人可以作为依赖项包含的东西。您创建静态和动态库。

# HELLO VAPOR

现在是时候开始使用Vapor了，所以让我向您展示一个将库集成到全新的可执行程序包中的有效示例。 我们只需要将框架添加为依赖项即可。 如果添加更多第三方，则依存关系的顺序无关紧要。

``` Swift
/**
* FILE:
* Package.swift */
// swift-tools-version:5.2
import PackageDescription
let package = Package( 
    name: "VaporLearning", 
    platforms: [ 
        .macOS(.v10_15) 
    ],
    products: [
        .executable(name: "VaporLearning", targets: ["VaporLearning"]),
    ], 
    dependencies: [
     .package(url: "https://github.com/vapor/vapor.git", from: "4.5.0"), 
    ],
    targets: [
        .target(name: "VaporLearning", dependencies: [
        .product(name: "Vapor", package: "vapor") ]),
        .testTarget(name: "VaporLearningTests", dependencies: ["VaporLearning"]), 
    ]
)
```

现在，如果您从Xcode编辑Package.swift文件，则只需保存该文件，Xcode将开始设置所需的依赖项。 这可能需要一段时间，但是您可以在边栏上跟踪进度。 如果您在Xcode之外工作，则可以使用命令行更新程序包依赖项。 您可以使用以下方法获取所有必需的依赖项：

``` Swift
swift package update
```

现在，让我们更改main.swift文件。

``` Swift
/**
* FILE:
* Sources/myProject/main.swift */
import Vapor
var env = try Environment.detect() 
let app = Application(env)
defer { app.shutdown() }
app.get { req in "Hello Vapor!" } 
try app.run()
```

这个小片段足以使一个简单的Web服务器返回hello输出。 我们导入Vapor框架，然后尝试根据过程信息中的输入参数和其他环境变量来检测工作环境。 我们只需定义一个应用程序对象，该对象基本上就是我们的Web服务器实例。 一旦应用程序完成运行，我们必须将其关闭，我们可以在defer块中执行此操作。 我们还必须注册一条路线，因此，如果有人请求我们的服务器地址，我们可以通过“ Hello Vapor！”进行响应。 文本。 最后一步是运行应用程序，这意味着我们正在尝试监听默认的8080端口。

如果您按Xcode中的播放按钮，则可以运行第一个Vapor应用程序。 您可以使用命令行来构建和运行该应用程序：

``` Bash
swift run VaporLearning
```

![""](https://cdn.xuebaonline.com/vapor-2-stp4.png "")

![""](https://cdn.xuebaonline.com/vapor-2-stp5.png "")

run命令将首先构建程序包，然后将执行VaporLearning产品。 或者，您可以先构建应用程序，然后手动从构建文件夹运行它：

``` Bash
swift build ./.build/debug/myProject
```

在您喜欢的浏览器中访问http://localhost:8080/。 您应该看到Hello Vapor！信息。 恭喜，您刚完成了第一个Vapor应用程序。

# 工作目录
如果通过Xcode运行项目，则可能需要设置自定义工作目录，否则应用程序将在被诅咒的位置DerivedData中查找资产。 如果您使用带有默认配置的模板引擎或公共文件中间件，这可能会导致一些问题，因为系统找不到正确的路由。 为了解决这个问题，您只需单击停止按钮旁边的目标名称，然后选择“编辑方案...”菜单项。 选择左侧的“运行”菜单项，然后单击“选项”选项卡。

![""](https://cdn.xuebaonline.com/vapor-2-stp6.png "")

单击“使用自定义工作目录”复选框，然后选择要使用的文件夹。 现在，如果再次构建，框架将使用所选目录来加载资源文件，您应该注意到相关警告从控制台输出中消失了。

# Vapor工具箱

使用Swift Package Manager入门Vapor并不是引导新Vapor项目的唯一方法。 有一个名为Vapor toolbox的项目，您可以安装该项目以节省一些时间。 您可以在所有受支持的平台上从源代码构建工具箱：

``` Bash
git clone https://github.com/vapor/toolbox.git 
cd toolbox
git checkout <desired version>
swift build -c release --disable-sandbox
mv .build/release/vapor /usr/local/bin
```

或者，您可以使用 brew 包装管理器。

``` Bash
brew install vapor/tap/vapor
```

随时删除以前创建的SPM项目。 我们将使用Vapor工具箱生成一个新的工具箱，从现在开始我们将使用它。

``` Bash
vapor new VaporLearning
```

您应该注意，vapor4尚未完全准备就绪。 如果您使用brew安装工具箱，则可能必须安装beta版本，否则vapor命令将默认情况下使用Vapor 3项目模板。 另一个选择是将--branch = 4标志传递给上面的命令，以使用最新的v4模板。

``` Bash
vapor new VaporLearning --branch=4
```

![""](https://cdn.xuebaonline.com/vapor-2-stp3.png "")

它会向您询问有关Fluent的信息，这是ORM层，但是现在您可以回答no，并且在没有数据库连接支持的情况下生成starter项目。

该工具箱是用于创建新项目的非常方便的辅助工具。 您可以通过分叉原始api模板存储库来使用自己的模板，但这不是必需的。

Vapor工具箱还为常见任务提供快捷方式和帮助。 您还可以使用vapor build命令来构建您的项目，然后运行Steam来执行它。 如果您不想弄乱makefile或直接与Swift Package Manager工具进行交互，则这很有用。 如果要了解有关工具箱的更多信息，可以输入vapor --help。

# PACKAGE.SWIFT VS XCODE项目

如前所述，每个软件包都有一个名为Package.swift的清单文件。 如果已安装Xcode，则可以双击它直接从IDE中编辑软件包的内容。 这真的很方便，因为Xcode具有针对Swift源文件的内置语法突出显示和自动补全功能。 它可以自动解决程序包依赖性，因此您不必从终端手动运行update命令。

您还可以通过运行以下清单来基于清单生成新的Xcode项目文件：

``` Swift
swift package generate-xcodeproj
```

这将创建一个新的 .xcodeproj 文件供您使用。 运行 vapor update -y 几乎等同于依次执行swift软件包更新和swift软件包 generate-xcodeproj 命令。 真正的问题是您应该只单击 Package.manifest 文件还是应生成一个Xcode项目文件？

两种方法之间的主要区别在于，如果生成 .xcodeproj 文件，则依赖关系将动态链接，但是如果使用 Package.swift 文件，则系统将使用静态链接。 不必为此担心，只需双击清单文件即可。 如果您打算使用具有保留系统名称的程序包，例如John Sundell的Ink，则动态链接可能会引起一些问题。 如果生成的Xcode项目遇到类似的问题，则应该使用静态链接。

# 项目的解剖

对于初学者来说，了解Vapor项目的构建方式是最重要的。让我们检查项目模板文件。我会快速引导您完成所有事情。与我们的手工制作包相比，第一个区别是项目模板包含两个主要目标。第一个称为App，第二个称为Run目标。

您将在Sources目录中找到每个目标的源代码。运行可执行目标是一切的开始。它将加载App库，并使用正确的配置和环境变量启动Vapor后端服务器。它仅包含一个可以执行的main.swift文件。

应用目标是您放置实际的后端应用代码的位置。默认情况下，这是一个库包，您可以将其导入到Run可执行目标中。应用程序本身使用环境来检测所需的运行模式。这可以是以下之一：生产，开发或测试。这是Vapor应用程序具有专用运行目标的主要原因之一。库方法有助于以不同的模式启动服务器。

我们必须仔细检查Sources/App文件夹中的两个重要文件。

configure.swift文件包含应用程序的所有主要配置。在这里您可以自定义应用程序。在这里，您应该注册所有各种服务，使用中间件，设置路由器对象等。例如，如果您要使用数据库连接，静态文件托管服务或模板引擎，则可以使用public configure进行设置。功能。

Services 使您可以注册，配置和初始化应用程序中可能需要的任何内容。服务是Vapor中的“低级”构建块，服务框架是Vapor的依赖项注入（也称为控制反转）实现。大多数底层组件都作为服务编写。路由器是一项服务，中间件系统是一项服务，数据库连接是一项服务，甚至HTTP服务器引擎也被实现为一项服务。

该服务层非常强大，因为您可以配置或替换配置文件中的任何内容，因此只有几个硬编码元素，但是所有内容都可以自定义。在Vapor 4中，依赖项注入API完全基于Swift扩展，通常可以在应用程序上将服务作为属性来访问。这为我们提供了额外的安全性。让编译器完成艰苦的工作总是很不错的，再加上这种方式，使服务更容易发现，因为类型系统通常都知道一切。

可以在routes.swift文件中添加路由器的实际路由。路由只是将URL路径组件连接到请求处理程序。换句话说，路由是指应用程序的端点如何响应客户端请求。我们可以说路由是将您的代码与API端点连接起来的服务。您可以在route函数中定义这些连接。例如，在模板项目中，hello路由意味着我们应该使用“ Hello，world！”响应任何传入的HTTP GET请求。字符串作为响应。状态代码当然是200，返回的字符串是主体。如果您不太了解网络层的工作方式，请至少阅读此HTTP Wiki页面。

关于Vapor架构，您还应该了解几件事。如果创建一个新项目并选择使用Fluent，您会看到模板项目包含三个附加文件，并且路由器和配置文件都稍长一点。

Controllers 是代码组织工具。借助它们，您可以将相关的API端点分组在一起。在示例项目中，有一个TodoController，它负责为todo模型提供CRUD响应处理程序。路由器使用此控制器连接端点，并且控制器可以使用可用的数据库连接来查询（创建，请求，更新，删除）适当的模型。

Models 代表与Fluent数据库抽象（ORM）库有关的数据库条目。在示例项目中，Todo模型将数据库方案的名称定义为静态属性。数据库表中的每个字段在实体中都有一个对应的属性。这些属性用称为属性包装器的特殊标记。通过这些属性包装器，您可以自定义数据库列的名称和行为。

Migrations 可以创建或更改数据库的方案。 模型存储在预定义的数据库表中，这些迁移脚本可帮助您管理基础表定义。 例如，如果您需要在模型中引入新字段，则可以通过实施新迁移来根据需要更改数据库。 您还必须使用自定义参数启动服务器才能执行迁移。

在接下来的章节中，我们将学习有关控制器，模型和迁移的更多信息。

通常在项目目录中还有两个文件夹。 Public文件夹是存放所有公共可用资产的地方，例如样式表（CSS文件），JavaScript代码或图像。 Resources目录是视图模板文件的默认位置，例如，Leaf模板引擎默认情况下使用Resources/Views文件夹搜索模板。 您可以创建这些文件夹，如果尚不存在，将来我们将需要它们。

# 摘要

到本章末，我们已经学习了如何设置工作环境来创建，构建和运行Vapor项目。 

Swift和所有开发人员工具都已深度集成到Xcode中，但是使用Swift Version Manager是管理工具链安装的最佳方法。 使用Vapor工具箱引导一个新的Vapor项目真的很简单，但是由于Swift Package Manager是关键组件，并且将在越来越多的Apple平台上使用它，因此强烈建议您熟悉它。 这就是为什么我们对软件包清单文件格式和可用命令有所了解的原因。 在最后一部分，我们讨论了基于Vapor的后端应用程序的体系结构，因此我们准备构建一些更有趣的东西。
