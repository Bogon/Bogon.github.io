---
title: Swift命令设计模式
description: Swift命令设计模式
permalink: Swift命令设计模式
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,命令设计模式,重构, command design pattern'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 命令设计模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 50462
date: 2020-04-25 16:12:58
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;命令设计模式是众多设计模式中的一种，也比较常用。 这是用Swift编写的命令设计模板的一个小例子。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[命令模式](https://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F "命令模式")（英语：Command pattern）是一种设计模式，它尝试以对象来代表实际行动。命令对象可以把行动(action) 及其参数封装起来，于是这些行动可以被：

+ 重复多次
+ 取消（如果该对象有实现的话）
+ 取消后又再重做

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些都是现代大型应用程序所必须的功能，即“撤销”及“重复”。除此之外，可以用命令模式来实现的功能例子还有：
+ 交易行为
+ 进度列
+ 向导
+ 用户界面按钮及功能表项目
+ 线程 pool
+ 宏收录

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想为稍后将要执行的不同操作提供一个通用界面，那么该命令模式将非常方便。 通常，它是一个对象，其中包含正确运行基础操作所需的所有信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;命令通常用于处理用户界面操作，创建撤消管理器或管理事务。 让我们通过使用表情符号创建命令行参数处理程序来查看 ```Swift``` 中的命令模式实现。 💾

``` Swift
#!/usr/bin/env swift

import Foundation

protocol Command {
    func execute()
}

class HelpCommand: Command {

    func execute() {
        Help().info()
    }
}

class Help {

    func info() {
        print("""

             🤖 Commander 🤖
                  v1.0

        Available commands:

            👉 help      This command
            👉 ls        List documents

        Bye! 👋

        """)
    }
}

class ListCommand: Command {

    func execute() {
        List().homeDirectoryContents()
    }
}

class List {

    func homeDirectoryContents() {
        let fileManager = FileManager.default
        guard let documentsURL = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first else {
            print("Could not open documents directory")
            exit(-1)
        }
        do {
            let fileURLs = try fileManager.contentsOfDirectory(at: documentsURL, includingPropertiesForKeys: nil)
            print("\n\t📁 Listing documents directory:\n")
            print(fileURLs.map { "\t\t💾 " + $0.lastPathComponent }.joined(separator: "\n\n") + "\n" )
        }
        catch {
            print(error.localizedDescription)
            exit(-1)
        }

    }
}

class App {

    var commands: [String:Command] = [:]

    init() {
        self.commands["help"] = HelpCommand()
        self.commands["ls"] = ListCommand()
    }

    func run() {
        let arguments = CommandLine.arguments[1...]

        guard let key = arguments.first, self.commands[key] != nil else {
            print("Usage: ./command.swift [\(self.commands.keys.joined(separator: "|"))]")
            exit(-1)
        }

        self.commands[key]!.execute()
    }
}

App().run()
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果保存此文件，只需在终端窗口中键入 ```./file-name.swift``` 即可运行它。 ```Swift``` 编译器将负责其余的工作。 ⚒

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;命令设计模式的实际用例：

+ 各种按钮动作
+ 集合/表视图选择操作
+ 在控制器之间导航
+ 历史记录管理/撤消管理器
+ 交易行为
+ 进度管理

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如你所了解那样，该模式可以应用于多个区域。 苹果为此专门制作了一个名为 ```NSInvocation``` 的特定类，但不幸的是，由于它的动态行为，它在 ```Swift``` 中不可用。 没什么大不了的，你始终可以制定自己的协议和实现，在大多数情况下，你只需要一个包装基础命令逻辑的额外类即可。 😛