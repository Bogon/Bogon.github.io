---
title: iOS VIPER架构深入实践
permalink: iOS VIPER架构深入实践
copyright: ture
date: 2020-04-28 16:52:14
keywords: iOS,Swift,VIPER, 架构, architecture, 可重用, tutorial
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```VIPER``` 架构编写可伸缩的 ```iOS``` 代码，并牢记一些 ```MVVM``` 和 ```MVC``` 技巧和协调器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在软件工程中，[***```设计模式（design pattern）```***](https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_(%E8%AE%A1%E7%AE%97%E6%9C%BA) "") 是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案。这个术语是由埃里希·伽玛（Erich Gamma）等人在1990年代从建筑设计领域引入到计算机科学的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设计模式并不直接用来完成代码的编写，而是描述在各种不同情况下，要怎么解决问题的一种方案。面向对象设计模式通常以类别或对象来描述其中的关系和相互作用，但不涉及用来完成应用程序的特定类别或对象。设计模式能使不稳定依赖于相对稳定、具体依赖于相对抽象，避免会引起麻烦的紧耦合，以增强软件设计面对并适应变化的能力。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并非所有的软件模式都是设计模式，设计模式特指软件“设计”层次上的问题。还有其他非设计模式的模式，如架构模式。同时，算法不能算是一种设计模式，因为算法主要是用来解决计算上的问题，而非设计上的问题。

<!-- more -->

</br>

# **Swift 设计模式和 iOS 架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件设计模式基本上是关于如何解决特定（但通常是结合业务场景）情况的通用模板。 结构模式对整个代码库影响更大，它们是高级通用模板。 请记住一件事：
> 架构没有好坏之分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选择的武器仅取决于情况，但你知道一切都是相对的。 让我们快速快速地了解所有 ```iOS``` 设计模式和体系结构，并开始学习 [***```VIPER```***](http://www.xuebaonline.com/iOS%E9%A1%B9%E7%9B%AE%E6%9E%B6%E6%9E%84%EF%BC%9A%E4%BD%BF%E7%94%A8VIPER/ "") 。 🐍

</br>

## ***Swift 设计模式***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从基础开始吧？ 如果不熟悉 ```UIKit``` ，我们会发现发明了许多设计模式，也许你已经知道其中一些。 但是，嘿，由于我们没有太多时间，我想谈谈 [***```VIPER```***](http://www.xuebaonline.com/VIPER%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%EF%BC%9A%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%EF%BC%8C%E5%83%8F%E8%80%81%E6%9D%BF%E4%B8%80%E6%A0%B7%E6%9E%84%E5%BB%BA%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F/ "") ，让我们看看使用 ```MVC``` 模式构建 ```UIKit``` 应用程序的基本原理。

## ***MVC***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模型-视图-控制器（Massive-View-Controller）模式是一个基本概念。 通常，你有一个庞大的UIViewController子类，该子类控制所有视图并收集需要为最终用户显示的每个模型。 例如，你从控制器使用URLSession或Alamofire调用API终结点，进行响应数据验证和格式化，然后在视图控制器上实现表或集合视图委托，因此基本上所有应用程序逻辑都在该单一的，装满了悲惨的视图控制器中 类。 这会为你敲响钟声吗？ 🙄

## ***MVVM***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意识到问题之后，你可以做的第一件事就是将数据转换或绑定部分外包给单独的类。 这就是 ```Miscrosoft``` 的聪明人发明了 ```Model-View-ViewModel``` 体系结构模式的方式。 现在，你已经接近了一步，你的数据模型和视图可以在距离控制器域很远的闪亮新文件中的一个全新的高度上“聚在一起”。 但是，此模式不会清除视图控制器内部的所有剩余内容。 请记住，你仍然必须向视图控制器提供数据，处理所有不同的状态。

## ***MVP***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们从视图控制器中移走所有数据加载和演示文稿的东西，然后将它们放到神奇地称为 ```Presenter``` 的新类中，该怎么办？ 听起来不错，视图控制器可以拥有新的 ```presenter``` 实例，从此以后我们可以过上幸福的生活。 来吧，我们真的应该将其重命名为有史以来最有价值的模式！ 😉

## ***协调器模式***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还是应该简单地将其称为“逆模型视图展示者”模式？ 看起来，这很重要，协调员在这个演进过程中处于一个全新的高度，但是他们还有很多事情要做。 这违反了“单一职责”原则，因为现在你必须管理表示上下文，数据存储，路由以及协调器或子协调器中的所有 ```differnet``` 状态。但是，最后，你的视图控制器没有任何剩余的负担 它可以直接专注于工作，这是什么？ 🙃
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用与 ```UIKit``` 相关的内容呈现视图，并转发事件。

</br>

# **VIPER架构**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，不要仅仅因为有人滥用而认为VIPER不好。我认为这是一个令人惊讶的惊人建筑！你只需要适当地学习它，这很困难，因为缺少好的教程。每个人都在比较架构，但这不是人们应该做的。据我所知，``MVP`` 适用于带有几个屏幕的小型应用程序，你永远不要对这些应用程序使用 ```VIPER``` 。如果你的应用不断增长，越来越多的组件加入游戏，那么真正的问题就开始了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你打算编写一个小型应用程序，则从 ```MVC``` 开始。稍后，你可以使用 ```MVVM``` 解决大型视图控制器的问题，但是如果你想将其进一步发展，可以始终使用MVP或协调器模式来保持可维护性。完全没问题，直到有一天你意识到代码中塞满了实用程序类，管理器，处理程序和所有废话对象。听起来很熟悉？ 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我之前提到的那样，没有糟糕的架构之类的东西。只有错误的选择，这导致我们难以维护的代码库。因此，让我指导你完成你想知道的最有用的设计模式，以编写真正可扩展的 ```iOS``` 应用程序：具有模块构建器的 ```VIPER = VIPER（B）```。

</br>

# **了解VIPER**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```VIPER``` 体系结构基于单一责任原则 ```（S.O.L.I.D.）```，这使我们进入了干净体系结构的理论。 假设 ```VIPERB``` 模块的核心组件为以下组件：

## ***View***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它是接口层，表示 ```UIKit``` 文件，主要是 ```UIViewController``` 子类和所有其他内容。 视图不执行与业务逻辑相关的任何操作，只是演示者使用的演示和事件转发层。 由于视图只是纯视图控制器，因此你可以使用 ```MVVM``` 原理或数据管理器来使你的项目更加简洁。

## ***Interactor(互动者)***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交互器负责从模型层检索数据，其实现完全独立于用户界面。 重要的是要记住，数据管理器（网络，数据库，传感器）不是 ```VIPER``` 的一部分，因此它们被视为独立的组件（服务），它们来自 ```VIPER``` 模块领域，可以作为交互器的依赖项注入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Interactor``` 可以准备或转换来自服务层的数据。 例如，它可以在要求正确的网络服务实现请求或保存数据之前进行一些排序或过滤。 但是请记住，交互器不了解视图，因此它不知道应如何为视图准备数据，这就是 ```Presenter``` 的作用。 🙄

## ***Presenter***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```UIKit``` 独立类，以视图所需的格式准备数据并基于视图中的 ```UI``` 事件做出决定，这就是为什么有时将其称为事件处理程序的原因。 这是 ```VIPER``` 模块的核心类，因为它还与 ```Interactor``` 通信并调用路由器进行线框图（也就是提供一个新模块或关闭当前模块）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它是唯一与几乎所有其他组件进行通信的类。 那只是演示者的工作，因此它不应该对 ```UIKit``` 或低级数据模型一无所知。 基本上，这是应用程序的核心，或者有人会说这是实现所有业务逻辑的地方。 💜

## ***Entity***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;普通模型类，主要由交互器使用。 通常，我在 ```VIPER``` 模块结构之外（在服务层中）定义它们，因为这些实体在系统中共享。 我们可以按模块将它们分开，但是通常我不喜欢这种方法，因为例如。 所有 ```CoreData``` 模型都可以生成到一个地方。 如果使用 ```Swagger``` 或类似工具，则同样适用。

## ***Router***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```UIKit``` 类的应用程序的导航逻辑。 例如，如果在 ```iPad``` 应用程序中使用相同的iPhone视图，则唯一可能改变的是路由器如何构建结构。 这使你可以保留所有其他内容，但路由器保持不变。 它还会监听来自演示者的导航流更改，因此，如果需要，它将显示正确的屏幕。 同样，如果你需要在路由器内部打开一个外部 ```URL``` 调用 ```UIApplication.shared.openURL（url）``` ，因为这也是一个路由操作，那么使用 ```UIActivityViewControlle``` r进行社交媒体共享的逻辑也相同。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，如果你必须在 ```VIPER``` 模块之间传递数据，则感觉是在路由器中执行此操作的正确位置。 我通常使用委托模式在两个模块之间进行通信，因此我养成了在路由器中调用委托函数的习惯。 📲

## ***Builder***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有些人正在使用路由器来构建整个模块，但是我不喜欢这种方法。 这就是为什么我总是使用单独的模块构建器类的原因。 唯一的责任是通过对所有外部服务使用依赖注入来构建完整的模块。 它还可以构建同一模块的模拟或其他版本。 如果涉及单元测试，那将非常有帮助。 完全有道理。 👍

## ***并非一切都是 VIPER 模块***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，如果要从 ```UIView``` 创建通用子类，请不要尝试将其填充到上面的组件中。 你应该在 ```VIPER modules``` 文件夹之外创建一个位置，并将其放置在该位置。 有些用例具有特定的类，最好不要进行 ```VIPERized``` ！ 😉

## ***服务和应用程序代码***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的应用程序通常有3个单独的层。 模块，服务和应用程序。 所有 ```VIPER``` 模块都位于 ```“Modules”``` 文件夹中。 与网络或数据相关的所有内容都转到 ```“Services”``` 文件夹（ ```api服务``` ，```核心数据服务```，```位置服务```等），然后根据当前环境在模块构建器中使用（例如，用于测试的模拟实现）。 其余所有东西（例如视图子类和其他与 ```UI``` 相关的对象，特定于应用程序的样式或设计方面的东西）都放在 ```App``` 目录中。

</br>

# **如何编写VIPER代码？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在开始使用该体系结构之前，我无法充分强调学习这种体系结构的重要性。 我认为，如果有人误解了 ```VIPER``` 并开始将视图逻辑放到演示者中，事情就会变得很糟糕。 如果你以前在 ```VIPER``` 方面有过糟糕的经验，请考虑一下这句话：不要怪工具，怪木匠。 🔨

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你遵循 ```VIPER``` 的规则，那么非常单一的组件将进入正确的位置。

## ***模块生成***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;永远不要开始手动创建 ```VIPER``` 模块，你应该始终使用代码生成器，因为（不幸的）每个模块都需要大量样板代码。乍一看似乎很不幸，但这才是该架构真正的力量所在。如果发生特定问题，开发人员团队的所有成员都将知道在哪里寻找。如果是视图问题，则必须修复视图；如果涉及导航问题，则是路由器问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现有许多代码生成器解决方案（其中一个著名的是 ```Generamba``` ），但是我制作了自己的小 ```Swift``` 工具来生成 ```VIPER``` 模块。这真是该死的轻量级，但确实非常有用（它利用模板来生成新模块），我称之为：```VIPERA``` 。 （毒蛇蛇的匈牙利名字...哈哈😂）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你只需克隆/下载存储库并运行 ```swift run install --with-templates``` 即可使其工作。从现在开始，你只需运行```vipera MyModule``` 即可基于默认模板生成新模块。作为第二个参数，你可以传递自己的模板目录名称（可以在```〜/ .vipera```文件夹下创建自己的模板，也可以更改默认模板）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本模板的结构非常简单，我没有为每一层创建子文件夹，而是在不同位置分离了接口和默认实现。这让我有点理智，因为大多数 ```VIPER``` 模板似乎只是由于项目结构而具有很大的威慑力。

## ***命名约定***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;几乎为每个 ```VIPER``` 组件都定义了协议。 每个协议都将以模块名称作为前缀，并且除了层名称（例如 ```MyModuleRouter``` ， ```MyModulePresenter``` ）外，它将没有任何其他后缀。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认实现用于基本方案，每个协议实现均遵循 ```ModuleName + Default + Layer``` 命名约定。 因此，例如 ```MyModuleDefaultRouter``` 或 ```MyModuleDefaultPresenter``` 。

## ***使用 delegates 进行模块间通信***

流程是这样的：

**Router / Presenter**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Presenter``` 可以使用路由器协议定义发送路由器事件。

**Presenter / Interactor**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Interactor``` 可以通过演示者的界面通知演示者，并且演示者可以使用 ```Interactor``` 协议内部定义的方法来调用交互者。

**Presenter / View**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视图通常具有 ```setter``` 方法来更新其在视图协议上定义的内容。 它还可以通过演示者协议将传入或加载事件通知 ```Presenter``` 。

## ***模块之间的数据传输***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想象一个列表，你选择一个项目并转到新的控制器场景。 为了使之成为可能，你必须在 ```VIPER``` 模块之间至少传递一个唯一的标识符。

通常这样做是这样的：

+ 该视图使用 ```ID``` 调用 ```Presenter``` 上的 ```didSelect``` 方法
+  ```Presenter``` 使用 ```routeFor（id）``` 方法将 ```ID``` 转发到路由器
+ 路由器调用构建器使用 ```ID``` 来构建新模块
+ 生成器使用 ```id``` 生成新模块
+ 路由器使用其视图显示新模块（控制器）
+ 新模块将ID传递给需要它的每个人（路由器，演示者）
+ 新模块的演示者获取ID
+ 新模块的 ```Interactor``` 加载数据并将其提供给 ```Presenter```
+ 新模块的 ```Presenter``` 为视图提供数据并进行展示
+ 出现详细信息屏幕，其中包含适当的数据。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你以模态形式显示控制器，则还可以将原始路由器作为委托传递，因此可以在需要时正确关闭它。 😎

## ***内存管理***

长话短说：

+ ```builder``` 不持有任何对象。
+ ```Router``` 对 ```Views``` 和 ```Presenter``` 保持弱引用。
+ ```Presenter``` 强持有 ```Router```和  ```Interactor``` 
+ ```Interactor``` 对```Presenter``` 的 弱引用
+ 该 ```Views``` 对 ```Presenter``` 强引用
+ ```UIKit``` 持有 ```views```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该在提供的示例中进行检查，没有泄漏-希望如此-在你返回或关闭模块后，所有内容都会顺利顺利地释放。 🤞

</br>

# **结论：我应该学习VIPER吗？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 ```VIPER``` 因其复杂性而备受批评，但我只能说值得努力学习正确的原理。 你会发现使用 ```VIPER``` 而不是忽略它会有更多的好处。

## ***优点***
+ **简单性** -适用于大型团队的复杂项目
+ **可扩展性** -无缝同时工作
+ **可重用性** -根据角色分离应用程序组件
+ **一致性** -模块框架，关注点分离
+ **清晰度** -单一职责（SOLID）
+ **可测试性** -分离的小类，TDD，更好的代码覆盖率
+ **接口** -模块独立性，定义明确的范围
+ **错误修复** -更容易跟踪问题，查找错误和问题
+ **源代码控制** -文件更小，冲突更少，代码更简洁
+ **容易** -代码库看起来很相似，熟悉项目代码更快

## ***缺点***
+ **详细程度** -每个模块很多文件
+ **复杂性** -许多协议和委托
+ **On-boarding** -缺乏适当的VIPER知识
+ **Engagement** -VIPER很糟糕，因为它很复杂！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我写了一篇后续文章，介绍了我在此过程中学到的VIPER最佳实践。👨💻



