---
title: Swift关于Dependency Injection (DI)
description: Swift关于Dependency Injection (DI)
permalink: Swift关于Dependency Injection (DI)
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,依赖注入设计模式,重构, dependency injection design pattern'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 依赖注入设计模式
  - - Dependency Injection
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 11437
date: 2020-04-25 17:13:51
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 为我们许多人打开了函数式编程的世界。 但这仍然是面向对象的语言，而不是功能的语言。 我们的主要工具 ```Cocoa frameworks``` 是面向对象的。 因此，我们自己可能仍然会继续编写面向对象的代码。 这样做的问题是实际上很难编写设计良好的面向对象的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有很多不同的设计原则，例如 ```SOLID``` ，```KISS``` ，```DRY``` 等（ ```YAGNI``` ， ```RAP``` ，```CQS``` ），甚至更多的设计模式。 至少对于我来说，有这么多不同的原理和模式这一事实意味着，即使有可能，良好的面向对象设计也很难。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;依赖注入本身不是我刚才提到的 ```SOLID``` 原则的一部分。 但这与他们所有人息息相关。 不幸的是，依赖注入的概念被许多误解所包围。


<!-- more -->


>维基百科为我们提供了非常复杂的定义：\
“在软件工程中，依赖性注入是一种软件设计模式，可实现控制反转以解决依赖性。”  - ```Wikipedia```

> 还有几句话……相反，一些开发人员说依赖注入只是传递一个实例变量。\
“依赖注入实际上只是传递一个实例变量。”  - ```James Shore```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他人则认为这是某种奇巧淫技，需要使用复杂而缓慢的框架，或者它仅与测试有关，只会使代码更难以理解。 我会说所有这些都是对依赖注入的误解。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我将尽我所能使其更加清晰，并展示我对依赖注入的了解。 我将尝试展示如何进行依赖注入。 不仅如此，我们不应该这样做。

</br>

# **为什么要依赖注射？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，让我们看看依赖注入首先要解决的问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编程中，我们总是必须处理不同种类和级别的抽象。他们无处不在。接口，方法，闭包，甚至是具体的类型和变量名称-它们都是抽象的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了实现良好的代码设计，使用适当的抽象非常重要，因为它们会使我们的代码松散耦合。这意味着我们代码的不同组件可以替换为其他实现，而不会影响其他组件。当我们的代码松散耦合时，它变得更容易测试，更容易扩展，更容易重用，更容易并行开发。所有这些使维护变得更容易。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;松耦合代码是依赖注入的主要目标。它使我们能够编写松耦合的代码。因此，它使测试，扩展和重用代码变得更加容易。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多时候，仅在单元测试中讨论依赖注入。实际上，它极大地提高了可测试性，尤其是在 ```Swift``` 中。但是实际情况要广泛得多。如果我们的最终目标不仅是对某些类进行单元测试，还需要松散的耦合并使代码可维护，那么我们将需要付出更多的努力，而不仅仅是传递实例变量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管从本质上讲，依赖注入实际上是关于传递实例变量，或者说将依赖传递给它们的使用者更好。这是第一步，也是每个第一步中最重要的一步。但这只是一个故事的一部分。还有第二步，甚至第三步。这些步骤使仅传递变量和依赖注入之间有所不同。

</br>

# **依赖注射模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们从第一步开始。 有几种模式可以将依赖关系传递给消费者：

+ 构造函数注入
+ 属性注入
+ 方法注入
+ 环境语境

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看看来自 ```Cocoa frameworks``` 的示例的使用。

</br>

# **CONSTRUCTOR注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是从 **```CoreData```** 注入构造函数的示例：

``` Swift
class NSPersistentStore : NSObject {

    init(
        persistentStoreCoordinator root: NSPersistentStoreCoordinator?, 
        configurationName name: String?, 
        URL url: NSURL, 
        options: [NSObject: AnyObject]?
    )
        
    var persistentStoreCoordinator: NSPersistentStoreCoordinator? { get }
    
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，持久性存储协调器的实例与其他一些参数一起传递给 ```NSPersistentStore``` 的构造函数。 然后，对协调器的引用将被存储，并且在运行时无法更改。

> 通过构造函数注入，我们将依赖项作为构造函数参数传递并将其存储在只读属性中。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管在 ```Cocoa frameworks``` 中没有太多构造函数注入的示例，但这是注入依赖关系的首选方法。 因为它是最容易实现的，所以可以确保始终存在依赖项，并且在运行时不会更改依赖项，这使它更加安全。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是在某些情况下，构造函数注入是不可能的或不合适的。 在这些情况下，我们应该使用属性注入。

</br>

# **属性注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任何 ```iOS``` 应用程序中到处都有这种模式。 例如，委托模式通常使用属性注入来实现。

``` Swift
extension UIViewController {

    weak public var transitioningDelegate: UIViewControllerTransitioningDelegate?
            
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，这里的视图控制器公开了用于转换委托的可写属性，如果要覆盖 ```dafault``` 行为，我们可以随时更改它。

>使用属性注入，消费者通过可写属性获得其依赖关系，该属性也具有一些默认值。

</br>

# **本地和外部默认设置**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果存在良好的本地默认依赖关系，则应使用属性注入。 “本地”表示在同一模块中定义。 nil也是理想的本地默认值，它只是使依赖项成为可选项。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当实现来自单独的模块时，它是外来的。然后，我们不应将其用作默认值。而且我们不应该将属性注入用于这种依赖性。相反，我们应该使用构造函数注入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想象一下，传递委托的默认实现不是在 ```UIKit``` 中定义的，而是在其他框架中定义的。然后，即使我们从不使用此 ```API``` ，也始终需要链接到该框架。 ```UIKit``` 与该框架紧密结合。它拖延了这种无用的依赖性。我们自己的代码也会发生同样的情况，这将使重用变得更加困难。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与构造函数注入属性注入进行比较可能更容易理解，并且使我们的 ```API``` 看起来更灵活。但是与此同时，它可能更难以实现，并使我们的代码更脆弱。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们需要适当的默认实现或以适当的方式处理可选值，这可能会导致带有可选包装的可选代码混乱。其次，我们不能将属性定义为不可变的。因此，如果我们不想在设置后就对其进行更改，则需要确保在运行时而不是在编译时进行更改。另外，我们可能需要同步对其进行访问，以防止出现线程问题。由于这些原因，如果我们可以使用构造函数注入，那么我们应该首选属性注入。

</br>

# **方法注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一个模式，方法注入，就像将参数传递给方法一样简单。 例如，这里是 ```NSCoding``` 协议：

``` Swift
public protocol NSCoding {

    public func encodeWithCoder(aCoder: NSCoder)
    
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每次将该方法称为不同的实例，甚至可以将 ```NSCoder``` 的实现作为参数传递。

>使用方法注入依赖关系作为参数传递给方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当依赖关系随每个方法调用而变化时，或者当依赖关系是暂时的并且不需要在方法范围之外保持对它的引用时，通常使用方法注入。

# **AMBIENT CONTEXT**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后一种模式-环境上下文-在 ```Cocoa``` 中很难找到。 ```NSURLCache``` 可能是最接近的示例。

``` Swift
public class NSURLCache : NSObject {

    public class func setSharedURLCache(cache: NSURLCache)
    
    public class func sharedURLCache() -> NSURLCache
    
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，在这里我们可以将 ```NSURLCach``` 的任何子类设置为共享实例，然后使用静态 ```getter``` 访问它。 这是它与不可写的单例的主要区别。

>使用静态方法或具有某些默认值的静态可写属性来实现AMBIENT CONTEXT。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此模式仅应用于表示一些跨领域关注点的真正通用依赖项，例如日志记录，无性，访问时间和日期等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```AMBIENT CONTEXT``` 有其自身的优势。 它使依赖关系始终可访问，并且不会污染 ```API```。 非常适合跨领域的关注。 但是在其他情况下，它并不能证明其缺点。 它使依赖关系隐式化，并表示可能不是您想要的全局可变状态。

因此，如果依赖性不是真正通用的，那么我们应该考虑使用其他DI模式。

# ***关注点分离***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会注意到，所有这些模式都非常简单，它们共享一个共同的原则-关注点分离。我们从依赖的使用者中消除了几项责任：使用什么具体实现，如何配置它以及如何管理其生命周期。这使我们可以轻松地在不同的上下文或测试中替换依赖关系，更改其生存期策略，例如使用共享或单独的实例，或更改依赖关系的构造方式。所有这些都无需改变其消费者。这使消费者不再依赖于它们，从而使它们更易于重用，扩展，开发和测试。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些模式的明显副作用是，现在我们代码的每个用户都需要提供其定义。但是他们如何得到它们？如果他们直接创建它们，那么它们将与那些依赖关系紧密地联系在一起。因此，我们只是将问题移到另一个地方。这个问题将我们带到了所谓的“合成根”（Compound Root）问题上。

</br>

# **COMPOSITION ROOT**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```COMPOSITION ROOT``` 是将应用程序不同层的组件连接在一起的地方。 拥有复合根的主要目的是将配置逻辑与我们其余的代码分开，并以通用的方式在定义明确的位置进行配置。 拥有一段代码，单个职责就是配置其他组件。 创建依赖关系并将其注入到构造函数或属性中只能在“合成根目录”中完成。

![COMPOSITION ROOT](http://cdn.xuebaonline.com/di-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 理想情况下，应用程序中应该有一个```COMPOSITION ROOT```，并且它应该靠近应用程序入口点。 就像这张图一样。 但是不必使用单个方法或类来实现。 它可以包含所需的多个类和方法，直到它们在同一组件层中在一起为止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 这是VIPER示例应用程序中 ```COMPOSITION ROOT``` 的示例实现。

``` Swift
class AppDependencies {
    init() {
        configureDependencies()
    }
    
    func configureDependencies() {
        // Root Level Classes
        let coreDataStore = CoreDataStore()
        let clock = DeviceClock()
        let rootWireframe = RootWireframe()
        
        // List Module Classes
        let listPresenter = ListPresenter()
        let listDataManager = ListDataManager()
        let listInteractor = ListInteractor(dataManager: listDataManager, clock: clock)
        ...    
        listInteractor.output = listPresenter
        listPresenter.listInteractor = listInteractor
        listPresenter.listWireframe = listWireframe
        listWireframe.addWireframe = addWireframe
        ...
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，我们有一些根类，仅管理窗口根视图控制器的根线框以及一些待办事项列表的单独组件，例如演示者，交互器，线框。 然后，我们将它们全部连接在一起。 它全部在一类中实现。 我们使用此类的唯一地方是应用程序委托：

``` Swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    
    let appDependencies = AppDependencies()

    func application(
        application: UIApplication, 
        didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
        
        appDependencies.installRootViewControllerIntoWindow(window!)
        
        return true
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，我们首先创建依赖项类，它将配置所有组件并将它们连接在一起。 然后，我们只调用一个在窗口中设置根视图控制器的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，将通过一个调用在此处创建整个对象图，并且稍后将在运行时创建的唯一对象是视图控制器和视图。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，关于DI的文章或讨论中通常不会讨论不幸的成分根。 但这可能是依赖注入的最重要部分之一。 如果我们能够做到这一点，我们已经走了很长一段路。

>正确实现DI的最大挑战是将所有具有依赖项的类移至Composition Root。 - Mark Seeman

# **反模式**

但是，由于在尝试正确实现某些模式时经常会发生这种情况，因此我们很容易以反模式结束。 因此，现在让我们进入黑暗的一面，看看什么是常见的DI反模式。

# **控制怪胎**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一个是控制狂。 那就是当我们根本不使用DI的时候。 依赖项的使用者何时控制创建依赖项的方式和时间。 每当使用者在 ```Composition Root``` 之外的任何地方使用构造函数直接或间接获得依赖项时，都会发生这种情况。 例如，在其自己的构造函数中或仅在需要时使用。

``` Swift
class RecipesService {

    let repository: RecipesRepository
    
    init() {
        self.repository = CoreDataRecipesRepository()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这是否意味着根本不允许我们使用构造函数？ 当然不是。 这取决于我们构建的依赖类型。

# **稳定和波动的依赖**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它们有两种-稳定的和易变的。当涉及到稳定的依赖关系时，我们不必担心直接在其使用者内部构造它们。但是我们应该避免对不稳定的依赖项这样做。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;什么是易失性依赖项？需要某种特定环境设置（例如数据库或网络访问）的任何依赖项。实现不确定性行为的依赖项是易变的，例如，如果它们使用随机数，依赖于时间或实现加密，则它们是易变的。当我们期望依赖项将被替换或者由于它是并行开发而尚未准备就绪时，它也是易变的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;易失性依赖项的症状是它们禁用了一些宽松的耦合好处。如果依赖关系不允许我们并行测试，扩展，重用或开发我们的代码，则应将其视为易变的。否则，它是一个稳定的依赖项。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，首先，我们需要了解依赖项是易失性还是​​稳定的，并在其易失性时使用“依赖项注入”模式注入它。

# **Bastard 注入**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一个反模式称为 ```Bastard``` 注入。 当我们有让我们为测试提供依赖关系的构造函数以及在生产中使用默认实现的另一个构造函数时，就会发生这种情况。 在 ```Swift``` 中，我们可以使用以下示例中的默认参数轻松地做到这一点。

``` Swift
class RecipesService {

    let repository: RecipesRepository
    
    init(repository: RecipesRepository = CoreDataRecipesRepository()) {
        self.repository = repository
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从某一方面来看，这种模式提高了可测试性。 这种反模式的问题是使用默认的外部默认值-在其他模块中定义。 这使我们的代码可测试，但与另一个模块紧密耦合。 如果默认实现是本地的，则此反模式的影响会小得多。 也许最好将其重构为属性注入。 但是，当默认实现是外部实现时，我们应该使用构造函数注入，并且不要为此参数提供默认值。 相反，我们应该在 ```“Composition Root”``` 中提供它。 这样我们就不会失去任何灵活性，而是避免与另一个模块紧密耦合。

# **服务定位器**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我要讨论的最后一个反模式是服务定位器。 服务定位器是某些服务的通用名称，我们可以查询以前在其中注册的不同对象。 这是最棘手的反模式，因为它可以使我们感到一切都很好。 许多开发人员甚至根本不认为它是反模式。 但是 ```Service Locator``` 实际上与依赖注入相反。

让我们看一个例子：

``` Swift
let locator = ServiceLocator.sharedInstance

locator.register( { CoreDataRecipesRepository() }, 
                    forType: RecipesRepository.self)

class RecipesService {

    let repository: RecipesRepository
    
    init() {
        let locator = ServiceLocator.sharedInstance
        self.repository = locator.resolve(RecipesRepository.self)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在此示例中，我们提供了一些可以使用静态属性访问的服务。然后，对于我们的依赖关系类型，我们注册一个产生一些具体实例的工厂。然后，我们在需要时向此服务询问我们的依赖关系，而不是使用构造函数或属性注入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;似乎 ```Service Locator``` 提供了依赖注入的所有好处。它提高了可扩展性和可测试性，因为我们可以注册依赖的另​​一种实现而无需更改其使用者。它将配置与使用分开，还支持并行开发。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是它没有几个主要缺点。它使依赖项隐式而不是显式，从而隐藏了真实类的复杂性。为了能够使用此类，我们现在需要了解其内部详细信息。我们没有看到它的依赖关系，只会在运行时或通过检查其实现或文档来找到它们的依赖关系。借助服务定位器，我们的代码也与之紧密结合。这完全破坏了可重用性，并使代码的可维护性降低。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于这些原因，我倾向于认为 ```Service Locator``` 是一种反模式。而不是使用它，我们应该显式定义依赖项，使用 ```DI``` 模式注入它们，并使用 ```Composition Root``` 将它们连接在一起。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们总结一下到那时为止我们已经讨论过的内容。我们讨论了依赖注入用于实现松散耦合，这使我们的代码更易于维护。我们讨论了不同的 ```DI``` 模式，其中应该优先选择构造函数注入。我们讨论了什么是本地和外部依赖关系以及什么是稳定和易失性依赖关系。我们还讨论了应避免的常见 ```DI``` 反模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这一点上，我们使用 ```DI``` 模式将依赖关系明确化，并将所有配置移到了 ```Composition Root``` 中，这已经是我们实现目标的一大步-松散耦合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是我们的代码还没有完全耦合。下一步是使用抽象对依赖关系进行建模。让我们记住 ```SOLID``` 原则之一。

</br>

# **依赖反转原理（DIP）**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;依赖反转原则说，高级代码不应依赖于低级代码，它们都应依赖于抽象，而抽象不应依赖于细节。关键是该类及其依赖项应处于相同的抽象级别。如果我们有一些服务，它不应该依赖于具体的API存储库或数据库存储库，因为它们属于较低层。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，我们不应依赖通过 ```Alamofire``` 实现的 ```API``` 存储库或通过 ```CoreData``` 或 ```Realm``` 实现的数据库存储库。因为这将使我们的代码与特定的实现紧密结合。相反，我们应该依靠更高级别的抽象。服务和存储库都应依赖于该抽象。因此，较高和较低级别之间的依赖性方向是相反的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们应该遵循这一原则来松散耦合代码。依赖注入不仅是我们之前讨论的模式。它要求同时应用模式和依赖倒置原则。没有这些，我们将无法获得松耦合的所有好处。

> ***DI = DI patterns + DIP***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常说，松散耦合是通过针对接口而不是针对实现进行编程来实现的。

> ***编程到接口而不是实现（设计模式：可重用的面向对象软件的元素***）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是依赖倒置原则说它不是关于接口，而是关于抽象。 松耦合并不意味着到处都有接口或协议。 因为并非总是接口是好的和可重用的抽象。

> ***编程为 ~~接口~~ 抽象***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接口（或协议）只是一种我们可以用来对抽象进行建模的语言构造。 这是我们的代码与之通信的一种方式。 但这并不能保证良好和可重用的抽象，这是松散耦合的关键。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基类有时可以和协议一样好的抽象。 当然，大多数时候我们可能会使用协议对抽象进行建模。 但是在各处引入协议时要小心。 它可能是不需要的独立级别。 在Swift协议中，有时会比较麻烦。

> ***Interfaces are not abstractions - Mark Seeman*** 

![Interfaces&&abstractions](http://cdn.xuebaonline.com/di-stp2.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你在构造函数中传递依赖项或使用属性或方法注入时-您应将其作为抽象传递（同样，不必使用协议）。 如果使用 ```ambinet ```上下文，则相同。 它不仅是一些共享的静态实例，还应该是抽象的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，依赖注入和松散耦合不仅可以通过依赖注入模式来实现，而且可以通过依赖反转原理以及使用抽象对依赖关系进行建模来实现。

</br>

# **控制和DI容器的反转**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，使用另一种设计原则，我们还可以采取进一步的措施。该原理称为控制反转。通常将其视为框架的定义特征。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们使用库时，流程是“正常的”，我们从代码中调用库。但是在框架的情况下，它是倒置的-框架使用不同的回调方法调用我们的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并且我们可以将这一原理应用于使用特殊框架来管理依赖项。通常，这些框架称为依赖注入容器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有许多不同的容器可用。实际上，大多数人可能甚至不知道使用了一个DI容器。它是 ```Interface Builder``` 。在 ```Interface Builder``` 中，我们可以通过接口或基类使用 ```@IBOutlet``` 拖放任何 ```NSObject``` 并对其进行引用。与视图控制器相同。我们可以将情节提要和 ```Xibs``` 视为视图控制器的工厂。 ```Interface Builder```是 ```XML``` 配置样式的示例。当然，它不是功能齐全的 ```DI``` 容器，也不是其主要目标，但仍然可以用于该目的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你访问 ```CocoaPods``` 并搜索“依赖注入”，则会发现很多不同的开源 ```DI``` 容器。也许甚至太多了。但是你会注意到，其中只有少数成功和流行。让我们简短地看一下其中的两个-一个来自 ```Objective-C``` ，另一个来自 ```Swift``` 。

</br>

# **TYPHOON**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一个是 ***[```Typhoon```](http://typhoonframework.org "")*** ，它可能是 ```Cocoa``` 开发者中最受欢迎的DI容器。 它具有相对简单且文档齐全的 ```API``` ，具有许多强大的功能。 它得到了良好的维护和支持，并且仍将继续改进。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就 ```API``` ```Typhoon``` 而言，构件是称为程序集的对象。 这是此类装配接口的示例。 它看起来像一个简单的工厂。

``` Swift
public class APIClientAssembly: TyphoonAssembly {
    
    public dynamic func apiClient() -> AnyObject { 
        ... 
    }
    
    public dynamic func session() -> AnyObject { 
        ... 
    }
    
    public dynamic func logger() -> AnyObject { 
        ... 
    }
    

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是在实现中，不是返回某种类型的具体实例（如从工厂方法中返回），而是返回 ```TyphoonDefinition``` ，它描述了在请求实例时应如何创建该实例。 应该使用什么初始化以及使用什么参数，应该注入什么属性。

``` Swift
public dynamic func apiClient() -> AnyObject {
    return TyphoonDefinition.withClass(APIClientImp.self) { definition in
        
        definition.useInitializer(#selector(APIClientImp.init(session:))) {
            initializer in
            
            initializer.injectParameterWith(self.session())
        }
        
        definition.injectProperty("logger", with: self.logger())
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，我们定义 ```API Client``` 将使用 ```init（session :)``` 构造函数创建，并且其 ```session``` 参数将由同一程序集提供。 我们还定义了将由同样的程序集提供的 ```logger``` 实例注入 ```logger``` 属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以为组件定义不同的范围或生命周期策略。 例如，对于 ```Singleton``` 范围， ```Typhoon``` 将仅创建一个 ```logger``` 实例。

``` Swift
public dynamic func session() -> AnyObject {
    return TyphoonDefinition.withClass(NSURLSession.self) { definition in
        definition.useInitializer(#selector(NSURLSession.sharedSession))
    }
}
    
public dynamic func logger() -> AnyObject {
    return TyphoonDefinition.withClass(ConsoleLogger.self) { definition in
        definition.scope = .Singleton
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要从程序集中获取某种类型的实例，我们首先将其激活，然后仅调用其接口方法。 激活后，组装方法将不返回 ```TyphoonDefinitions``` ，而是返回根据我们提供的规则创建的实例。

``` Swift
let assembly = APIClientAssembly().activate()

let apiClient = assembly.apiClient() as! APIClient
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使这项工作有效， ```Typhoon``` 大量使用了 ```Objective-C``` 运行时。 ```在使用Objective-C``` 运行时的 ```Swift``` 应用程序中看起来并不正确。 我们仍然可以在 ```Swift``` 以及 ```Objective-C``` 中使用 ```Typhoon``` 。 但是，我们将面临一些问题：

+ 需要子类 ```NSObject``` 并使用 ```@objc``` 定义协议
+ 注射过程中调用的方法应该是动态的
+ 需要类型转换
+ 并非所有功能都可以在 ```Swift``` 中使用
+ ```Swift``` 的 ```API``` 太冗长

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Typhoon``` 团队最近宣布，他们开始着手于纯粹的 ```Swift``` 实施，而我迫不及待地想看看他们会提出什么建议。 但是现在我不会在纯 ```Swift``` 代码库中以当前状态使用 ```Typhoon``` 。 尤其是当本机解决方案已经很少时。

# **DIP**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***[```Dip```](https://github.com/AliSoftware/Dip "")*** 是其中之一。 它仅在 ```Swift``` 中工作，根本不需要 ```Objective-C``` 运行时。 实际上，它甚至没有对 ```Foundation``` 的引用，因此我们可以在可以使用 ```Swift``` 的任何平台上使用它。 它也是类型安全的，与 ```Typhoon``` 相比实现起来并不复杂。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 就 ```API``` 而言，它采用的方法对于其他平台上的 ```DI``` 容器而言更为传统，并遵循“注册解析”模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们用于 ```Typhoon``` 的相同示例。

``` Swift
let container = DependencyContainer()

container.register { 
    try APIClientImp(session: container.resolve()) as APIClient 
}
.resolveDependencies { container, client in
    client.logger = try container.resolve()
}

container.register { NSURLSession.sharedSession() as NetworkSession }
container.register(.Singleton) { ConsoleLogger() as Logger }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们将 ```APIClientImp``` 注册为 ```APIClient``` 协议的实现。 容器还将解析构造器参数，并且在创建实例时将设置 ```logger``` 属性。 对于会话参数容器，它将使用共享的 ```URL``` 会话，对于记录器，它将创建一个单例实例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，当我们需要获取 ```APIClient``` 的实例时，我们只需调用容器的 ```resolve``` 方法：

``` Swift
let apiClient = try! container.resolve() as APIClient
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会注意到，该 ```API``` 与我们在 ```Service Locator``` 中看到的几乎相同。 但这与 ```API``` 或实现无关，而与我们如何使用它有关。 如果您不想将容器用作服务定位器，请记住，只能在 ```“Composition Root”``` 中调用它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Dip``` 还提供了一些很酷的功能，例如自动接线。 例如，我们可以定义要自动注入的 ```logger``` 属性。 容器将首先创建 ```APIClient``` 实例，然后使用其镜像查找 ```logger``` 属性并将真实实例注入其中。

``` Swift
class APIClientImp: APIClient {

    private let _logger = Injected<Logger>()
    
    var logger: Logger? { return _logger.value }
    
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，当我们使用其构造函数注册 ```APIClient``` 而不是调用 ```resolve``` 获取 ```NetworkSession``` 参数时，我们只是说我们要使用传递给工厂闭包的第一个参数。 然后容器将推断出它的类型并为我们解决。

``` Swift
class APIClientImp: APIClient {
    init(session: NetworkSession) { ... }
}

container.register { APIClientImp(session: $0) as APIClient }
```

这样可以大大简化配置。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们比较 ```“Typhoon”``` 和 ```“Dip”``` 的基本特征，我们会注意到它们共享大多数特征。 尽管它没有像 ```Objective-C``` 一样强大的运行时功能，但是在 ```Swift``` 中几乎可以实现相同的功能似乎令人惊讶。 但是，泛型和类型推断实际上是其中的重点。

|                                             | Typhoon  | Dip   |
| :---                                        | :----:   | ----: |
| **Constructor, property, method injection** | ✔︎        | ✔︎     |
| **Lifecycle management**                    | ✔︎        | ✔︎     |
| **Circular dependencies**                   | ✔︎        | ✔︎     |
| **Runtime arguments**                       | ✔︎        | ✔︎     |
| **Named definitions**                       | ✔︎        | ✔︎     |
| **Storyboards integration**                 | ✔︎        | ✔︎     |
| **Auto-wiring**                             | ✔︎        | ✔︎     |
| **Thread safety**                           | ✘        | ✔︎     |
| **Interception**                            | ✔︎        | ✘     |
| **Infrastructure**                          | ✔︎        | ✘     |

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会问，当我自己可以做时，为什么需要使用 ```Typhoon``` 或 ```Dip``` 或任何其他 ```DI``` 容器。 我可以建议的理由很少。 它们提供了与情节提要板的轻松集成，可以为您管理有时可能很棘手的组件生命周期，可以简化某些配置， ```Typhoon``` 还使用 ```NSProxy``` 和其他一些附加功能提供了轻松的拦截功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是请记住， ```DI``` 容器是可选的，并且依赖注入与使用 ```DI``` 容器不同。

> ***DI ≠ DI Container***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在新项目中，我们可以根据需要从它开始，但是在旧代码库中，我们应该首先使用依赖注入模式，组合根和依赖反转原理对其进行重构，然后查看是否需要DI容器（在大多数情况下，回答将为“否”）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您具有复杂的配置，并且发现自己实现了一些类似 ```DI``` 容器的方法来简化它们，或者需要它提供的一些其他功能，那么可能会受益于使用现有的实现。但是，如果您对自己的工厂还可以的话-它的工厂很棒，请继续使用它们。不要仅仅为了使用 ```DI``` 容器而使用它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```DI``` 本身也是如此。对于在何处应用它以及需要解耦系统的哪些部分，要保持理性。不要尝试解决你尚未遇到的问题。也许你永远不会拥有它们，或者当你真正面对它们时，现在解决它们的方式将不合适。最后， ```DI``` 只是达到目的的一种手段，就像我们使用的任何其他模式或技术一样。它本身不是目标。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我想提到一些有用的资源，你可以在其中找到有关DI和一些相关主题的更多信息。

</br>

+ [```“Dependency Injection in .Net” by Mark Seeman```](https://www.manning.com/books/dependency-injection-in-dot-net "")
+ [```Mark Seeman’s blog```](https://ilya.puchka.me/dependency-injection-in-swift/ "")
+ [```objc.io Issue 15: Testing. Dependency Injection, by Jon Reid```](https://www.objc.io/issues/15-testing/dependency-injection/ "")
+ [```“DIP in the wild”```](https://martinfowler.com/articles/dipInTheWild.html "")
+ [```Non-DI code == spaghetti code?```](http://www.loosecouplings.com/2011/02/non-di-code-spaghetti-code.html "")

***
---

+ [```"Dependency Injection in .Net" Mark Seeman```](https://www.manning.com/books/dependency-injection-in-dot-net "") ↩︎

+ [```https://github.com/mutualmobile/VIPER-SWIFT/blob/master/VIPER-SWIFT/Classes/AppDependencies.swift```](https://github.com/mutualmobile/VIPER-SWIFT/blob/master/VIPER-SWIFT/Classes/AppDependencies.swift "") ↩︎

+ [```http://blog.ploeh.dk/2010/12/02/Interfacesarenotabstractions/```](http://blog.ploeh.dk/2010/12/02/Interfacesarenotabstractions/ "") ↩︎