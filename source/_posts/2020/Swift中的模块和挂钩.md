---
title: Swift中的模块和挂钩
description: Swift中的模块和挂钩
permalink: Swift中的模块和挂钩
copyright: ture
date: 2020-04-26 17:32:28
keywords: iOS,UIKit,设计模式,抽象,Swift,模块,挂钩,重构,Modules and hooks
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [Modules And Hooks]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

了解如何使用以 ```Swift``` 编写的松耦合模块插件系统通过新功能扩展应用程序。

# **模块（插件）如何工作？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你可以创建可以在不知彼此的情况下一起工作的对象，那会很酷吗？ 想象一下，你正在构建一个动态表单。 根据一些内部条件，将使用来自启用模块的数据来构成字段。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，你拥有模块 ```A``` ，```B``` ，```C``` ，其中 ```A``` 为您提供字段 ```1、2、3```，```B``` 模块负责字段4、5，而 ```C``` 是字段6的提供者。现在，如果您关闭 ```B```， 您应该只能看到字段1、2、3和6。如果已打开所有内容，则应该看到从1到6的所有字段。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将完全相同的模式应用于许多事物。 试想一下最大的插件生态系统之一。 ```WordPress``` 使用 [```钩子(英文：hooks)```](https://www.sitepoint.com/wordpress-hook-system/ "") 来扩展核心功能。 这些都是基于我上面刚刚提到的概念。 这是 [```事件驱动的体系结构设计模式(英文：Event-driven architecture)```](https://en.wikipedia.org/wiki/Event-driven_architecture "") 的一部分。 现在的问题是，我们如何使用 ```Swift``` 实现类似的东西？ 🤔

<!-- more -->

</br>

# **钩子系统的实现**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们从带有调用点的协议开始。 模块管理器将调用此方法，以按名称调用正确的钩子函数。 我们将传递参数字典，因此我们的钩子可以有参数。 我们在这里使用 ```Any``` 类型作为值，因此你可以在给定键下将任何内容作为参数发送。

``` Swift
protocol Module {
    func invoke(name: String, params: [String: Any]) -> Any?
}

extension Module {
    func invoke(name: String, params: [String: Any]) -> Any? { nil }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们使用基于表单示例的简化版本来实现我们的模块。 🤓

``` Swift
class A: Module {

    func invoke(name: String, params: [String: Any]) -> Any? {
        switch name {
        case "example_form":
            return self.exampleFormHook()
        default:
            return nil
        }
    }

    private func exampleFormHook() -> [String] {
        ["Field 1", "Field 2", "Field 3"]
    }
}

class B: Module {
    func invoke(name: String, params: [String: Any]) -> Any? {
        switch name {
        case "example_form":
            return self.exampleFormHook()
        default:
            return nil
        }
    }

    private func exampleFormHook() -> [String] {
        ["Field 4", "Field 5"]
    }
}

class C: Module {
    func invoke(name: String, params: [String: Any]) -> Any? {
        switch name {
        case "example_form":
            return self.exampleFormHook()
        default:
            return nil
        }
    }

    private func exampleFormHook() -> [String] {
        ["Field 6"]
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们需要一个模块管理器，可以使用模块数组对其进行初始化。 该管理器将负责在每个模块上调用正确的调用方法，并将以类型安全的方式处理返回的响应。 我们将立即实现两个 ```invoke``` 方法版本。 一个用于合并结果，另一个用于返回挂钩的第一个结果。


**你可以尝试实现一个可以使用 ```&&``` 运算符合并 ```Bool``` 值的版本。**

这是我们使用两种通用方法的模块管理器实现：

``` Swift
struct ModuleManager {

    let  modules: [Module]
    
    func invokeAllHooks<T>(_ name: String, type: T.Type, params: [String: Any] = [:]) -> [T] {
        let result = self.modules.map { module in
            module.invoke(name: name, params: params)
        }
        return result.compactMap { $0 as? [T] }.flatMap { $0 }
    }

    func invokeHook<T>(_ name: String, type: T.Type, params: [String: Any] = [:]) -> T? {
        for module in self.modules {
            let result = module.invoke(name: name, params: params)
            if result != nil {
                return result as? T
            }
        }
        return nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 ```invokeAllHooks``` 方法将通用类型的数组合并在一起。 这是我们可以使用基础钩子方法收集他所有表单字段的方法。

``` Swift
let manager1 = ModuleManager(modules: [A(), B(), C()])
let form1 = manager1.invokeAllHooks("example_form", type: String.self)
print(form1) // 1, 2, 3, 4, 5, 6

let manager2 = ModuleManager(modules: [A(), C()])
let form2 = manager2.invokeAllHooks("example_form", type: String.self)
print(form2) // 1, 2, 3, 6
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```invokeHook``` 方法，你可以实现类似的行为，例如责任链设计模式。 响应程序链的工作方式非常相似，```Apple``` 几乎在每个平台上都使用响应程序来处理 ```UI``` 事件。 让我通过更新模块 ```B``` 向你展示它的工作方式。

``` Swift
class B: Module {
    func invoke(name: String, params: [String: Any]) -> Any? {
        switch name {
        case "example_form":
            return self.exampleFormHook()
        case "example_responder":
            return self.exampleResponderHook()
        default:
            return nil
        }
    }

    private func exampleFormHook() -> [String] {
        ["Field 4", "Field 5"]
    }
    
    private func exampleResponderHook() -> String {
        "Hello, this is module B."
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们在两个管理器上使用 ```invokeHook``` 方法触发新的 ```example_responder``` 挂钩，我们将看到结果完全不同。

``` Swift
if let value = manager1.invokeHook("example_responder", type: String.self) {
    print(value) // Hello, this is module B.
}

if let value = manager2.invokeHook("example_responder", type: String.self) {
    print(value) // this won't be called at all...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在第一种情况下，由于我们在其中一个模块中为此钩子实现了一个实现，因此将显示返回值，因此可以进行打印。 在第二种情况下，没有模块可以处理该事件，因此不会执行条件内的块。 告诉你，就像一个响应链。 😜

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用模块或插件是将代码的某些部分解耦的有效方法。 我真的很喜欢钩子函数，因为它们可以为应用程序中的几乎所有内容提供扩展点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将其与动态模块加载器混合使用，你将在 ```Vapor``` 之上拥有一个完全可扩展的下一代后端解决方案。 你可以独立于模块使用已编译的核心系统，以后可以仅升级整个组件的某些部分而无需接触其他部分。
