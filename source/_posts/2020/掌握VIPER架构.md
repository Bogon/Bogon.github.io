---
title: 掌握VIPER架构
permalink: 掌握VIPER架构
copyright: ture
date: 2020-04-29 09:39:33
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```Swift``` 使用一些 ```面向协议``` 的编程技术来掌握 ```VIPER架构设计模式``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在写了关于 [***```VIPER的最佳实践```***](http://www.xuebaonline.com/%E9%80%82%E7%94%A8%E4%BA%8EiOS%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98%E7%9A%84VIPER%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/ "") 之后，我对代码库进行了一些更改。 我已经想到了这些想法，但是却没有足够的时间正确地实施它们。 

</br>

# **VIPER协议**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我希望每个 ```模块组件``` 都有一个通用接口。 这就是为什么我为以下内容创建 ```简单协议``` 的原因：

+ **View**
+ **Interactor**
+ **Presenter**
+ **Entity**
+ **Router**
+ **Module**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，通过这种方式，我的 ```路由器对象``` 正在实现 ```路由器协议``` ，因此，如果在其上进行扩展，则每一个都将具有该特定功能。 这是一个很小但非常令人愉快的功能，使我的模块比以前更强大。 老实说，我从一开始就应该拥有这种功能，但是无论如何从现在开始就应该是这样。 😬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此举意味着将我的 ```VIPER协议``` 组织到一个自定义框架中，因此我使用这些组件创建了一个。 你可以在 [***```github```***](https://github.com/CoreKit/VIPER "") 上找到它，这是一个非常基本的应用程序，可以随时使用，只需在项目中导入 ```VIPER``` 。

<br>

# **模块协议**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自从我使用 ```VIPER``` 以来，它非常渴望实现一个自定义模块，以在 ```iOS``` 上呈现系统默认警报消息。 你知道 ```UIAlertController``` 是我正在谈论的那个。 

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们为什么不为路由器创建协议，以便可以在其他所有路由器上实现该协议，也可以简单地在它们上调用 ```show（alert :)``` ？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我喜欢这种方法，因此我们已经建立了它。 原来，它真是太棒了。 因此，我们为模块路由器引入了新协议，实现了默认协议扩展，并且路由器现在能够显示错误消息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，你也可以将相同的模式用于许多其他（相似）的事物。 基本实现如下所示，希望你能理解。 💡

``` Swift
import VIPER

class AlertModule: Module {
    /* ... */
}

protocol AlertModuleRouter: class {

    func show(alert: AlertEntity)
}

extension AlertModuleRouter where Self: Router {

    func show(alert: AlertEntity) {
        /* ... */
    }
}

// MARK: - other module

protocol MyModuleRouter: Router, AlertModuleRouter {

    // show(alert:) is now available from this router too
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，该技术也可以用于其他 ```VIPER组件``` ，实现起来非常容易，并且 ```面向协议``` 的方法为我们带来了巨大的方便。 🏆

</br>

# **Presenter to presenter interactions**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我也对参与模块通信流程中的委托实现的位置改变了想法。 在上一篇文章中，我告诉你我将委托存储在路由器上，但是后来我意识到委托主要与业务逻辑有关，因此我只是将它们移到了 ```presenter层``` 。 🤷‍♂️

``` Swift
import VIPER

protocol AModulePresenterDelegate {
    func didDoSomething()
}

class AModule: Module {

    func build(with delegate: AModulePresenterDelegate? = nil) -> UIViewController {
        // insert classic viper stuff here

        presenter.delegate = delegate

        /* ... */

        return view
    }
}

class AModulePresenter: Presenter {

    func someAction() {
        self.delegate?.didDoSomething()
        self.router?.dismiss()
    }
}

// MARK: - other module

class BModulePresenter: Presenter, AModulePresenterDelegate {

    func didDoSomething() {
        print("Hello from module A!")
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，你可以跳过整个路由器层，并且所有与业务相关的逻辑都将在 ```presenter层``` 中实现，这应该是唯一的方法。 🤪

</br>

# **Entities**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了服务层之外，有时使用带有一些额外的元数据的实体包装对于模型对象是非常有用的。 这就是为什么我也创建了一个实体协议，并开始在我的模块中使用它的原因。 例如，可以打开链接的 ```Web视图模块``` 可以具有带有标题和内容 ```url``` 属性的 ```WebViewEntity``` 。 😅

``` Swift
import VIPER

struct AlertEntity: Entity {
    let title: String
    let message: String
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的示例 ```提示信息模块``` 可以将 ```AlertEntity``` 与某些属性一起使用，这些属性可以定义标题，消息或按钮。 这样，你就不必真正考虑将这些对象放在哪里，因为它们是真正的 ```VIPER实体``` 。

</br>

# **IO协议**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我想尝试的想法，但是基本概念有点像我想为 ```VIPER模块``` 层分离输入和输出协议。 同样，这种 IO 差异也可以反映在服务层上（也许将来服务层中的整个对象“ mess”将用作IO实体），一团糟，我的意思是，其中可能存在太多对象 服务/对象目录，因此这意味着它们也可以按模块（也称为实体）进行分组。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，我正在考虑像 ```RequestEntity``` ， ```ResponseEntity``` 这样的服务通信，对于 ```VIPER层``` 通信，我可以想象两个单独的协议，例如。  ```PresenterInput``` ， ```PresenterOutput``` 。 我们将看到，但是乍一看，这似乎是一件过度设计的事情。

<br>

# **VIPER与[*]**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有！请不要认为x优于y。架构和设计模式是简单的工具，可用于使你的生活更轻松。如果你不喜欢x，则应尝试y，但不要怪x，因为那是你的个人看法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我目前最喜欢的架构是 ```VIPER``` ，那又如何呢？也许在一两年之内，我会爱上反应式编程而发疯。真的重要吗？我不这么认为。过去，我已经学习并尝试了很多东西，甚至不记得了。 🧠

