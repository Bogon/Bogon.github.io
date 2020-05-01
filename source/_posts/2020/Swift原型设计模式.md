---
title: Swift原型设计模式
description: Swift原型设计模式
permalink: Swift原型设计模式
copyright: ture
date: 2020-04-25 15:49:06
keywords: iOS,UIKit,设计模式,抽象,Swift,原型设计模式,重构, prototype design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [原型设计模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型设计模式用于创建基础对象的克隆，因此让我们看一些用Swift编写的实际示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型模式是 [创建型模式](https://zh.wikipedia.org/wiki/%E5%89%B5%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F "创建型模式") 的一种，其特点在于通过“复制”一个已经存在的实例来返回新的实例,而不是新建实例。被复制的实例就是我们所称的“原型”，这个原型是可定制的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型模式多用于创建复杂的或者耗时的实例，因为这种情况下，复制一个已经存在的实例使程序运行更高效；或者创建值相等，只是命名不一样的同类数据。


<!-- more -->

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在软件工程中，创建型模式是处理对象创建的设计模式，试图根据实际情况使用合适的方式创建对象。基本的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建型模式由两个主导思想构成。一是将系统使用的具体类封装起来，二是隐藏这些具体类的实例创建和结合的方式。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建型模式又分为对象创建型模式和类创建型模式。对象创建型模式处理对象的创建，类创建型模式处理类的创建。详细地说，对象创建型模式把对象创建的一部分推迟到另一个对象中，而类创建型模式将它对象的创建推迟到子类中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也是一种创新的设计模式，当你对一个对象进行非常基本的配置并且想要将这些预定义值提供（复制）给另一个对象时，这很有用。 基本上，你是从原型对象制作复制。 😊😊😊

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种方法有一些好处，例如，你不必继承子类，但可以单独配置复制。 这也意味着，如果你要使用原型，则可以删除一堆样板代码（配置）。 🤔

``` Swift
class Paragraph {

    var font: UIFont
    var color: UIColor
    var text: String

    init(font: UIFont = UIFont.systemFont(ofSize: 12),
         color: UIColor = .darkText,
         text: String = "") {

        self.font = font
        self.color = color
        self.text = text
    }

    func clone() -> Paragraph {
        return Paragraph(font: self.font, color: self.color, text: self.text)
    }
}

let base = Paragraph()

let title = base.clone()
title.font = UIFont.systemFont(ofSize: 18)
title.text = "This is the title"

let first = base.clone()
first.text = "This is the first paragraph"

let second = base.clone()
second.text = "This is the second paragraph"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上面的代码所示，实现只是几行代码。 你只需要一个默认的初始化程序和一个复制方法。 一切都将在 ```init``` 方法中针对原型对象进行预配置，并且你可以使用 ```clone``` 方法进行复制，但这时很明显……

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们再看一个例子：

``` Swift
class Paragraph {

    var font: UIFont
    var color: UIColor
    var text: String

    init(font: UIFont = UIFont.systemFont(ofSize: 12),
         color: UIColor = .darkText,
         text: String = "") {

        self.font = font
        self.color = color
        self.text = text
    }

    func clone() -> Paragraph {
        return Paragraph(font: self.font, color: self.color, text: self.text)
    }
}

let base = Paragraph()

let title = base.clone()
title.font = UIFont.systemFont(ofSize: 18)
title.text = "This is the title"

let first = base.clone()
first.text = "This is the first paragraph"

let second = base.clone()
second.text = "This is the second paragraph"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你打算获取已知对象状态的快照，则原型设计模式也很有用。 例如，在绘图应用程序中，你可以将形状类作为原型，可以开始向其添加路径，有时甚至可以从中创建快照。 你可以继续处理新对象，但这将使你能够在将来的任何时间返回到保存状态。 🎉

当你的应用程序不依赖于创建，合成和表示对象的方法时，应考虑选择它，以及至少下列各项之一：
+ 在运行时创建对象
+ 你想避免工厂的复杂层次结构
+ 对象只能有很少的状态

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，就是 ```Swift``` 中的原型设计模式。 🐿