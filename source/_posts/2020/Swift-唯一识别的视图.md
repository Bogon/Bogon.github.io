---
title: Swift 唯一识别的视图
permalink: Swift 唯一识别的视图
copyright: ture
date: 2020-04-28 16:24:22
keywords: iOS,Swift,唯一识别的视图, 用户体验, Uniquely identifying views, 可重用
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [Uniquely identifying views]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [Uniquely identifying views]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用基于字符串的 ```UIView``` 标识符而不是标签。 如果你厌倦了标记视图，请查看这些替代解决方案。

</br>

# **第一种方法：accessibility to the rescue!**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长话短说，我很讨厌用愚蠢的数字值标记视图，因此我寻求一种更好的替代解决方案来解决我的问题。 事实证明，有一个名为 ```accessibilityIdentifier``` 的属性可以完成这项工作。

``` Swift
extension UIView {

    var id: String? {
        get {
            return self.accessibilityIdentifier
        }
        set {
            self.accessibilityIdentifier = newValue
        }
    }

    func view(withId id: String) -> UIView? {
        if self.id == id {
            return self
        }
        for view in self.subviews {
            if let view = view.view(withId: id) {
                return view
            }
        }
        return nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我对 ```UIView``` 类进行了简单的扩展，因此现在我可以使用适当的字符串值来唯一地标识视图层次结构中的任何视图对象。 这是一个很好的解决方案，现在我可以以一种非常不错的方式命名我的 ```views``` 。 免费将名称存储在 ```accessibilityIdentifier``` 下将对 ```UI``` 测试带来好处。 😉

</br>

# **第二种方法：using enums**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要思想是为每个视图标识符都具有一个基于 ```Int``` 的枚举，因此基本上你可以使用 ```tag``` 属性存储枚举的 ```rawValue``` 。 它仍然不如上面的那个好，但是比依赖纯整数更安全。 😬

``` Swift
enum ViewIdentifier: Int {
    case submitButton
}

extension UIView {

    var identifier: ViewIdentifier? {
        set {
            if let value = newValue {
                self.tag = value.rawValue
            }
        }
        get {
            return ViewIdentifier(rawValue: self.tag)
        }
    }

    func view(withId id: ViewIdentifier) -> UIView? {
        return self.viewWithTag(id.rawValue)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老实说，在我将第一个代码片段复制并粘贴到本文之后，我只是想出了第二种方法，但是到底是什么，也许有人会喜欢它。 😂