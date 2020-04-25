---
title: Swift委托设计模式
permalink: Swift委托设计模式
copyright: ture
date: 2020-04-25 16:39:15
keywords:  iOS,UIKit,设计模式,抽象,Swift,委托设计模式,重构, delegate design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [委托设计模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;委托设计模式是通过 ```Swift``` 中的通用接口（协议）在两个对象之间进行通信的相对简单的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[委托模式](https://zh.wikipedia.org/wiki/%E5%A7%94%E6%89%98%E6%A8%A1%E5%BC%8F "委托模式")（delegation pattern）是软件设计模式中的一项基本技巧。在委托模式中，有两个对象参与处理同一个请求，接受请求的对象将请求委托给另一个对象来处理。委托模式是一项基本技巧，许多其他的模式，如状态模式、策略模式、访问者模式本质上是在更特殊的场合采用了委托模式。委托模式使得我们可以用聚合来替代继承。


<!-- more -->

</br>

# **在Swift中实现委派**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你将需要一个委托协议，一个实际委托任务的委托人以及一个实现委托协议并完成 **“老板”** 所要求的实际工作的委托对象。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如：客户端报告一个错误。 项目经理会创建一个问题，并告诉一位开发人员尽快解决问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的场景就是委托👆。 在某个时刻发生了事件，因此委托人（经理）使用外部资源（开发人员）使用一个公共接口（描述双方的问题）来完成某件事（修复🐛）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了演示委托在现实生活中的工作方式，我举了一个非常简单的例子。 我将使用类似的方法（因为Xcode游乐场仍然每1-5分钟冻结一次），就像我对命令模式所做的那样，但是此方法的目的几乎是完全不同的，因为我们正在谈论委托模式。 😅

``` Swift
#!/usr/bin/env swift

import Foundation


protocol InputDelegate {

    var shouldContinueListening: Bool { get }

    func didStartListening()
    func didReceive(input: String)
}


class InputHandler {

    var delegate: InputDelegate?

    func listen() {
        self.delegate?.didStartListening()

        repeat {
            guard let input = readLine() else {
                continue
            }
            self.delegate?.didReceive(input: input)
        }
        while self.delegate?.shouldContinueListening ?? false
    }
}


struct InputReceiver: InputDelegate {

    var shouldContinueListening: Bool {
        return true
    }

    func didStartListening() {
        print("👻 Please be nice and say \"hi\", if you want to leave just tell me \"bye\":")
    }

    func didReceive(input: String) {
        switch input {
        case "hi":
            print("🌎 Hello world!")
        case "bye":
            print("👋 Bye!")
            exit(0)
        default:
            print("🔍 Command not found! Please try again:")
        }
    }
}

let inputHandler = InputHandler()
let inputReceiver = InputReceiver()
inputHandler.delegate = inputReceiver
inputHandler.listen()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是你可以在 ```Swift``` 中创建自己的委托模式的方式。 你可以想象，```Apple``` 正在使用 ```UICollectionViewDataSource``` ，```UICollectionViewDelegate``` 等在后台做同样的事情。你只需实现委托，它们将提供协议和委托人。 🤔

</br>

# **弱属性，委托和类**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内存管理是非常重要的事情，因此值得一提的是，所有的类委托都应该是 **弱引用**，否则你将 **很难管理器生命周期，易引起内存泄露**，这一点必须注意。 😱

``` Swift
protocol InputDelegate: class { /*...*/ }

class InputHandler {

    weak var delegate: InputDelegate?

    /*...*/
}

class InputReceiver: InputDelegate {
    /*...*/
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是修改后的 ```Swift``` 代码段，但是现在使用一个类作为委托。 你只需要稍微更改协议和委托者内部的属性即可。 如果要将类分配为委托，请始终使用弱引用该变量。 ⚠️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如代码中展示的，委托模式很容易，但是很危险。 它通过提供可以由实现委托（有时是数据源）协议的任何人使用的公共接口来帮助解耦。