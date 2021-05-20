---
title: Swift tips
description: Swift tips
permalink: Swift tips
copyright: true
date: 2021-03-15 09:27:13
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,CFArray,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced Classes,面试题
tags:
    - [iOS]
    - [Swift]
    - [开发技巧]
categories:
    - [iOS]
    - [Swift]
    - [开发技巧]
---

# 开发技巧——01 创建仅执行次的代码片段

```Swift
/// 代码定义
lazy var onceCode: Void = { [weak self] in
	// TODO……

}()

/// 在调用处调用
onceCode
```

# 开发技巧——02 xcrun: error: unable to find utility "xctest"

在使用 `Vapor`  作为服务端框架式，在执行 `swift package update` 时，有时会收到如下错误：
``` Bash
/usr/bin/xcrun --sdk macosx --find xctest output:
    xcrun: error: unable to find utility "xctest", not a developer tool or in PATH
```

解决办法，在终端中执行如下命令皆可解决：
```Bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```
