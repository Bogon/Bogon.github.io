---
title: 在Swift中重构单例模式用法
permalink: 在Swift中重构单例模式用法
copyright: ture
date: 2020-04-25 10:38:47
keywords: iOS,UIKit,设计模式,初始化,Swift,单例模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [单例模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> 清洁，模块化和可测试代码库的小技巧。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在软件开发中，不鼓励使用单例，并且对此表示反对，但这是有充分理由的。 它们很难测试或无法测试，并且在其他类中隐式使用它们时会纠缠你的代码库，从而使代码重用变得困难。 在大多数情况下，单例模式无非是对全局易变状态的保存。 每个人至少知道这是一个糟糕的主意。 但是，[单例模式](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F "单例模式") 有时是不可避免和必要的错误。 我们如何以一种干净，模块化和可测试的方式将它们合并到我们的代码中？

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单例模式，也叫单子模式，是一种常用的软件设计模式，属于创建型模式的一种。在应用这个模式时，单例对象的类必须保证只有一个实例存在。许多时候整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为。比如在某个服务器程序中，该服务器的配置信息存放在一个文件中，这些配置数据由一个单例对象统一读取，然后服务进程中的其他对象再通过这个单例对象获取这些配置信息。这种方式简化了在复杂环境下的配置管理。 

<!-- more -->

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实现单例模式的思路是：一个类能返回对象一个引用(永远是同一个)和一个获得该实例的方法（必须是静态方法，通常使用getInstance这个名称）；当我们调用这个方法时，如果类持有的引用不为空就返回这个引用，如果类保持的引用为空就创建该类的实例并将实例的引用赋予该类保持的引用；同时我们还将该类的构造函数定义为私有方法，这样其他处的代码就无法通过调用该类的构造函数来实例化该类的对象，只有通过该类提供的静态方法来得到该类的唯一实例。



# **单例模式无处不在** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在 ```Apple``` 平台上，```Cocoa``` 和 ```Cocoa Touch``` 框架中到处都有单例。 有 ```UIApplication.shared```，```FileManager.default```，```NotificationCenter.default```，```UserDefaults.standard```，```URLSession.shared``` 等。 设计模式甚至在 ```Cocoa``` 核心能力指南中都有自己的部分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 当你隐式引用这些（以及你自己的）单例时，将增加更改代码所需的工作量。 这也使测试代码变得困难或不可能，因为无法从使用它们的类之外更改或模拟这些单例。 这是你在iOS应用中都会看到的内容：

``` Swift
class MyViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        let currentUser = CurrentUserManager.shared.user
        if currentUser != nil {
            // do something with current user
        }

        let mySetting = UserDefaults.standard.bool(forKey: "mySetting")
        if mySetting {
            // do something with setting
        }

        URLSession.shared.dataTask(with: URL(string: "http://someResource")!) { (data, response, error) in
            // handle response
        }
    }
}
```


</br>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 这就是我所说 隐式引用 的意思-你只需在类中直接使用单例。 我们可以做得更好。 在Swift中，有一种轻量级，简便且影响小的方式来改善这一点。 Swift也使其使用起来更加优雅。


# **依赖注入**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 简而言之，答案是 [**依赖注入**](https://en.wikipedia.org/wiki/Dependency_injection "依赖注入") 。 该原则表明你应该设计类和函数，以使所有输入都是显式的。 如果你重构上面的代码片段以使用依赖项注入，它将看起来像这样：

``` Swift
class MyViewController: UIViewController {

    let userManager: CurrentUserManager
    let defaults: UserDefaults
    let urlSession: URLSession

    init(userManager: CurrentUserManager, defaults: UserDefaults, urlSession: URLSession) {
        self.userManager = userManager
        self.defaults = defaults
        self.urlSession = urlSession
        super.init(nibName: nil, bundle: nil)
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        let currentUser = userManager.user
        if currentUser != nil {
            // do something with current user
        }

        let mySetting = defaults.bool(forKey: "mySetting")
        if mySetting {
            // do something with setting
        }

        urlSession.dataTask(with: URL(string: "http://someResource")!) { (data, response, error) in
            // handle response
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此类不再隐式（或显式）依赖于任何单例。 它显式依赖于 ```CurrentUserManager```， ```UserDefaults``` 和 ```URLSession``` ，但是有关这些依赖项的任何内容均表示它们是单例。 这个细节不再重要，但是功能保持不变。 视图控制器仅知道这些对象的实例存在。 在需要使用该对象时，你可以传递单例。 同样，从类的角度来看，此细节无关紧要。

``` Swift
let controller = MyViewController(userManager: .shared, defaults: .standard, urlSession: .shared)

present(controller, animated: true, completion: nil)
```

**特别提示：```Swift``` 类型推断在这里起作用。 除了编写 ```URLSession.shared```，您还可以编写 ```.shared``` 。**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要提供其他默认值（例如，如果你需要与[应用组共享数据](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionScenarios.html#//apple_ref/doc/uid/TP40014214-CH21-SW6 "应用组内共享数据")），则更改起来很容易。 实际上，你不必更改此类中的任何代码。 而不传递 ```UserDefaults.standard```，而是传递 ```UserDefaults（suiteName：“ com.myApp”）```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，在单元测试中，你现在可以传递这些类的其他实例。 在Swift中无法进行真正的模拟，但是有一些解决方法。 这取决于您要如何构造代码。 你可以为 ```CurrentUserManager``` 使用协议，然后可以在测试中“模拟”该协议。 你可以为 ```UserDefaults``` 提供构造的方法类进行测试。 你可以将 ```URLSession``` 设置为可选，并在测试中传递 ```nil```。

# **重构陷阱**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能对这个想法很感兴趣，现在你想解开并解放陷入困境的代码库。尽管依赖注入是理想的选择，并且可以为你提供更纯净的对象模型，但是实现它通常很困难。更重要的是，在首次编写代码时，很少会设计出适应这种情况的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们上面重构的内容现在更具模块化和可测试性-但确实存在问题。 ```MyViewController``` 的初始值设定项曾经是空的 ```（init（））``` ，但现在需要三个参数。每个调用位置都必须更改。构造此方法的干净而正确的方法是将实例从上到下或从以前的视图控制器传递到此实例。这将需要将数据从对象图的根传递到所有子类。特别是在iOS中，当你将数据从视图控制器传递到视图控制器时，这可能会引起很多麻烦。尤其是传统代码库将难以立即实现如此大的更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大多数类（尤其是视图控制器）的初始化程序都需要更改。当你意识到必须重构整个应用程序时，这种更改变得异常困难。要么一切都将被破坏，要么仅某些类将被更新以进行依赖注入，而其他一些类将继续隐式引用单例。这种不一致可能在将来引起问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在复杂、大型的旧版代码库中，这样的重构可能根本不可行-至少不能同时进行，而且也不能没有回归。因此，你可能会争辩说，你根本不应该重构并忍受这种情况。然后需要几个月或几年的时间你您必须支持多个用户-现在在实现切换帐户时 ```CurrentUserManager``` 无法正常工作。你如何应对？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有一种更为先进的方式，也有一种从一开始就设计你要使用的类以适应下一次此类变化的方法。

# **默认参数值**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢的Swift功能之一是默认参数值。 它们非常有用，可以为你的代码带来很大的灵活性。 使用默认参数，你可以解决上述问题，而不必担心依赖注入问题，也不会在代码库中引入过多的复杂性。 也许你的应用程序实际上只有一个用户，所以实现所有这种依赖注入是不必要的开销。

你可以给单例设置默认参数：

``` Swift
class MyViewController: UIViewController {

    init(userManager: CurrentUserManager = .shared, defaults: UserDefaults = .standard, urlSession: URLSession = .shared) {
        self.userManager = userManager
        self.defaults = defaults
        self.urlSession = urlSession
        super.init(nibName: nil, bundle: nil)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，从方法调用的角度来看，初始化程序没有改变。 但是类本身存在很大的差异，它现在使用依赖项注入，不再引用单例。

``` Swift
let controller = MyViewController()

present(controller, animated: true, completion: nil)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你从此更改中学到了什么？你可以使用此模式重构每个类，而无需更新任何调用的地方。语义上或功能上都没有改变。但是，你的类也在使用依赖注入。他们只是在内部使用实例。你可以如上所述测试它们并维护一个灵活的模块化API，同时公共接口保持不变。本质上，你可以继续在代码库中工作，就好像什么都没有改变一样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果有时间传入自定义非空参数，你可以执行此操作而无需更改任何类。你只需要更新调用的位置即可。此外，如果你决定使用成熟的依赖关系注入并从上至下传递每个单个依赖关系，则只需删除默认参数并从上方传递依赖关系。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果需要，你甚至可以选择加入或选择退出任何默认值。在以下示例中，我们提供了自定义 ```UserDefaults```，但保留了 ```CurrentUserManager``` 和 ```URLSession``` 的默认参数。

``` Swift
let appGroupDefaults = UserDefaults(suiteName: "com.myApp")!

let controller = MyViewController(defaults: appGroupDefaults)

present(controller, animated: true, completion: nil)
```

</bar>


# **结论**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 使这种“部分”依赖注入变得很方便实用。通过为类添加新属性和带有默认值的初始化参数，你可以使你的代码具有更大的模块化和可测试性，而不必重构，也不必完全使用成熟的依赖项注入。如果从一开始就设计这样的类，那么你会发现自己写出 ```bug``` 的概率降低了很多-当你遇到 ```bug``` 是，将更容易定位和解决。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 除了此处的简单示例（类，结构，枚举，函数）之外，你还可以将这些概念和设计应用于代码的所有区域。 ```Swift``` 中的每个函数都可以采用默认参数值。通过花一些时间来思考未来可能发生的变化，我们可以创建可以轻松适应变化的类型和功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 构建和设计好的软件意味着编写**易于更改**但**难以破解的代码**。这就是依赖项注入的动机，而 ```Swift``` 的默认参数可以帮助你快速，轻松且优雅地实现这一目标。




