---
title: Swift Lazy属性初始化
description: Swift Lazy属性初始化
permalink: Swift Lazy属性初始化
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,Lazy属性初始化,重构,Lazy Property Initializationpattern'
tags:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
  - - 懒加载模式
categories:
  - - iOS
  - - 设计模式
  - - UIKit
  - - Swift
abbrlink: 64512
date: 2020-04-26 15:37:12
---


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift中什么是惰性存储属性？ 你应该如何以及何时使用它？ 快速入门指南，需要记住的一些关键点。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先回顾一下在 ```Swift``` 中声明和初始化存储属性的最常用方法：

# **直接分配**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过直接分配初始值来对常量和变量存储的属性进行初始化的最简单形式：

``` Swift
// constant
let fontSize: CGFloat = 24.0

// variable
var spacing: CGFloat = 16.0

// Optional
var title: String?
```

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，默认情况下，可选参数初始化为 ```nil``` 。 我喜欢将恒定的魔术数字（如 ```fontSize``` ）收集到一个结构中，使它们成为静态的：

``` Swift
private struct ViewMetrics {
  static let fontSize: CGFloat = 24.0
  ...
}

titleLabel.font = ViewMetrics.fontSize
```

</br>

# **使用初始化器**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你没有将初始值分配给存储属性作为其定义的一部分，则必须在初始化程序中进行设置。 引用《 Swift编程语言》指南：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类和结构必须在创建该类或结构的实例时将其所有存储的属性设置为适当的初始值。 存储的属性不能处于不确定状态。

``` Swift
class Book {
  let title: String

  init(title: String) {
    self.title = title
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当属性始终采用相同的初始值时，最好在声明属性时进行设置，而不要在初始化程序中进行设置。

</br>

# **使用闭包**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当初始值需要更多设置时，闭包是一个不错的选择。 我发现闭包样式比许多初始化程序代码更可取，因为它使设置接近属性声明。

``` Swift
let button: UIButton = {
  let button = UIButton(type: .system)
  button.titleLabel?.font = UIFont.systemFont(ofSize: ViewMetrics.fontSize)
  ...
  return button
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初始化包含属性的类型时，将调用一次闭包。 闭包的返回值分配给该属性。 不要忘记尾随（）来执行关闭。

</br>

# **懒加载方式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当初始值创建起来开销相对较大时时，通常会使用惰性初始化。 仅在确定需要时才创建值。 如果你是从 ```Objective-C``` 转到 ```Swift``` 的，那么您可能会熟悉使用 ```getter``` 仅在首次使用属性时才对其进行延迟初始化的技术：

``` Swift
- (NSNumberFormatter *)decimalFormatter {
  if (_decimalFormatter == nil) {
    _decimalFormatter = [[NSNumberFormatter alloc] init];
    [_decimalFormatter setNumberStyle:NSNumberFormatterDecimalStyle];        
  }
  return _decimalFormatter;
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么 ```Swift``` 中的惰性属性呢？ ```Swift``` 属性没有后备实例变量（如 ```_decimalFormatter``` ）。 要在 ```Swift``` 中延迟初始化属性，请添加 ```lazy``` 关键字：

``` Swift
lazy var decimalFormatter: NumberFormatter = {
  let formatter = NumberFormatter()
  formatter.numberStyle = .decimal
  return formatter
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，惰性属性始终为 ```var``` 。 当访问属性时，可以在初始化完成后调用该闭包。

</br>

# **访问属性**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惰性属性初始化的另一个常见用法是，当初始值取决于初始化实例的属性或方法时。 例如，使用闭包设置对象，此堆栈视图可以作为 ```let constant``` 属性使用：

``` Swift
let stackView: UIStackView = {
  let stackView = UIStackView()
  stackView.spacing = ViewMetrics.spacing
  return stackView
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请记住，在初始化期间调用了闭包，因此你尚不能使用 ```self``` 来访问实例的任何属性或方法。 如果你需要访问 ```self``` ，则必须将 ```let``` 替换为 ```lazy var``` ：

```Swift
var spacing: CGFloat = 16.0  {
  didSet {
    stackView.spacing = spacing
  }
}

lazy var stackView: UIStackView = {
  let stackView = UIStackView()
  stackView.spacing = spacing
  ...
  return stackView
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，在对象初始化之后执行关闭操作，因此你可以通过 ```self``` 完全访问实例属性和方法。 这是声明诸如用户界面组件之类的便捷方式。 将任何常见配置移至单独的方法或类扩展：

``` Swift
var buttonFontSize: CGFloat = 18.0 { ... }

private lazy var redButton: UIButton = {
  return UILabel.colorButton(title: "Red", color: .red, fontSize: buttonFontSize)
}()

private lazy var blueButton: UIButton = {
  return UILabel.colorButton(title: "Blue", color: .blue, fontSize: buttonFontSize)
}()
```

</br>

# **要点**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需要记住的一些关键点并不明显，并且经常引起混乱（至少对我而言）：

+ 引用闭包内的其他实例属性或方法时，无需编写self。
+ 闭包不会逃逸，因此你无需使用 ```weak self``` 避免形成循环引用。
+ 初始化之前，如果属性可以被多个线程访问，请小心。 无法保证只有在设置初始值之前有多个线程同时访问该属性时才将其初始化一次。