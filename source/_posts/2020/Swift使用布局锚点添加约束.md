---
title: Swift使用布局锚点添加约束
description: Swift使用布局锚点添加约束
permalink: Swift使用布局锚点添加约束
copyright: ture
date: 2020-04-26 20:12:24
keywords: iOS,Swift,自动化布局,用户体验
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自动化布局]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Auto Layout``` 经常引起抱怨的是，语法以编程方式创建约束的方式多么繁琐和难以理解。 幸运的是，```iOS 9``` 做了很多改进。 ```堆栈视图``` 消除了我们在典型布局中创建许多约束的需要。 相比较而言，布局锚点和布局指南的引入却被忽略了，但同样有用。 从《 Apple自动版面指南》中：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以编程方式创建约束时，你有三个选择：可以使用 ```layout anchors``` ，可以使用 ```NSLayoutConstraint``` 类，或者可以使用可视格式语言。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我将再次看一下布局指南，但是现在这里是我关于使用布局锚点在代码中轻松创建约束的说明：

<!-- more -->

</br>

# **创建约束**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先提醒一下使用 ```NSLayoutConstraint``` 类方法创建约束的方式。 假设我们有一个堆栈视图，我们想要固定到视图控制器顶级视图的左右边距：

``` Swift
NSLayoutConstraint(item: stackView,
  attribute: .leading,
  relatedBy: .equal,
  toItem: view,
  attribute: .leadingMargin,
  multiplier: 1,
  constant: 0).isActive = true

NSLayoutConstraint(item: stackView,
  attribute: .trailing,
  relatedBy: .equal,
  toItem: view,
  attribute: .trailingMargin,
  multiplier: 1,
  constant: 0).isActive = true
  ```

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以将堆栈视图固定在顶部布局指南下方，以免被导航栏隐藏：

  ``` Swift
  NSLayoutConstraint(item: stackView,
  attribute: .top,
  relatedBy: .equal,
  toItem: topLayoutGuide,
  attribute: .bottom,
  multiplier: 1,
  constant: 8.0).isActive = true
  ```

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我认为我们可以同意，这既不美观也不容易理解（ ```Objective-C``` 版本更糟）。 在我看来，使用 ***Visual Format Language*** 并不是更好：

  ``` Swift
  let views: [String: AnyObject] =
  ["stackView" : stackView,
   "topLayoutGuide" : topLayoutGuide]

let h = NSLayoutConstraint.constraints(
  withVisualFormat: "|-[stackView]-|",
  options: [],
  metrics: nil,
  views: views)
NSLayoutConstraint.activate(h)

let v = NSLayoutConstraint.constraints(
  withVisualFormat: "V:|[topLayoutGuide]-[stackView]",
  options: [],
  metrics: nil,
  views: views)
NSLayoutConstraint.activate(v)
```

</br>

# **使用 ```Layout Anchors``` 创建约束**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;布局锚点使创建约束更加容易。 从文档中：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```NSLayoutAnchor``` 类是用于使用流畅的 ```API``` 创建 ```NSLayoutConstraint``` 对象的工厂类。 使用这些约束可以使用“自动布局”以编程方式定义你的布局。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;布局锚点是 ```UIView```（或```UILayoutGuide``` ）上的属性。 每个属性都是 ```NSLayoutAnchor``` 的子类，其方法可直接为其他相同类型的布局锚创建约束。 ```UIView``` 具有十二种不同的布局锚点属性，可用于创建水平，垂直或基于大小的约束：

## ***水平约束***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于创建水平约束的  ```NSLayoutXAxisAnchor``` 类型的布局锚点：

+ ```centerXAnchor```
+ ```leadingAnchor``` 和 ```trailingAnchor```
+ ```leftAnchor``` 和 ```rightAnchor```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，创建约束以使两个视图居中对齐：

``` Swift
// Swift
myView.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
```

``` Swift
// Objective-C
[self.myView.centerXAnchor constraintEqualToAnchor:self.view.centerXAnchor].active = YES;
```

***请注意如何从一个视图上的锚点开始并为另一个视图上的锚点创建约束。***

## ***垂直约束***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于创建垂直约束的 ```NSLayoutYAxisAnchor``` 类型的布局锚点：

+ ```centerYAnchor```
+ ```bottomAnchor``` 和 ```topAnchor```
+ ```firstBaselineAnchor``` 和 ```lastBaselineAnchor```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，要在间距恒定的两个视图的顶部和底部锚点之间创建约束：

``` Siwft
// Swift
myView.bottomAnchor.constraint(equalTo: view.topAnchor,
       constant: 8).isActive=true
```

``` Swift
// Objective-C
[self.myView.bottomAnchor constraintEqualToAnchor:self.view.topAnchor
      constant:8.0].active = YES;
```

## ***基于 Size 的约束***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```NSLayoutDimension``` 类型的布局锚，用于创建基于 ```Size``` 的约束：

+ ```heightAnchor``` 和 ```widthAnchor```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，为视图创建宽度约束：

``` Swift
// Swift
myView.widthAnchor.constraint(equalToConstant: 50.0).isActive = true
```

``` Swift
// Objective-C
[self.myView.widthAnchor constraintEqualToConstant:50.0].active = YES;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个示例，使用 ```multiplier``` 使一个视图的高度是另一个视图的高度的两倍：

``` Swift
// Swift
myView.heightAnchor.constraint(equalTo: otherView.heightAnchor,
       multiplier: 2.0).isActive = true
```

``` Swift
// Objective-C
[self.myView.heightAnchor constraintEqualToAnchor:self.otherView.heightAnchor 
      multiplier:2.0].active = YES;
```

## ***视图边距***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UIView``` 没有用于创建堆栈视图约束时使用的前，后边距的布局锚。 相反，```iOS 9``` 添加了两个新属性， ```layoutMarginGuide``` 和可读 ```readableContentGuide``` ，它们又具有布局锚点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，要将子视图的前沿约束到父视图的前面：

``` Swift
// Swift
let margins = view.layoutMarginsGuide    
myView.leadingAnchor.constraint(equalTo: margins.leadingAnchor).isActive = true
```

``` Swift
// Objective-C
UILayoutGuide *margins = self.view.layoutMarginsGuide;
[self.myView.leadingAnchor constraintEqualToAnchor:
      margins.leadingAnchor].active = YES;
```

## ***顶部和底部布局***

> **```提示:```** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顶部和底部布局指南已由 ```iOS 11``` 中的 ```“Safe Area Layout Guide ”``` 代替。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你要相对于顶部或底部 ```UIKit``` 工具栏定位内容时，视图控制器具有 ```topLayoutGuide``` 和 ```bottomLayoutGuide``` 属性。 从 ```iOS 9``` 开始，这两个属性均符合 ```UILayoutSupport```  协议，该协议为 ```bar``` 提供了 ```bottomAnchor``` ， ```topAnchor``` 和 ```heightAnchor``` 属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，要将视图放置在顶部布局指南底部下方8个点处：

``` Swift
// Swift
    myView.topAnchor.constraint(equalTo: topLayoutGuide.bottomAnchor,
       constant: 8.0).isActive = true
```

``` Swift
// Objective-C
    [self.stackView.topAnchor constraintEqualToAnchor:self.topLayoutGuide.bottomAnchor
       constant:8.0].active = YES;
```

## ***控件组合布局***

**那么我们如何使用布局锚创建堆栈视图约束？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们获得父视图的 ```leading``` 和 ```trailing``` 边距：

``` Swift
let margins = view.layoutMarginsGuide
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们创建 ```leading``` 和 ```trailing```  水平约束：

``` Swift
stackView.leadingAnchor.constraint(equalTo: margins.leadingAnchor).isActive = true
stackView.trailingAnchor.constraint(equalTo: margins.trailingAnchor).isActive = true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们使用视图控制器的 ```topLayoutGuide``` 属性将堆栈视图固定在导航栏下方的8点处：

``` Swift
stackView.topAnchor.constraint(equalTo: topLayoutGuide.bottomAnchor,
          constant: 8.0).isActive = true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Objective-C``` 版本稍微冗长一些，但仍有很大改进：

``` Swift
UILayoutGuide *margins = self.view.layoutMarginsGuide;

[self.stackView.leadingAnchor
      constraintEqualToAnchor:margins.leadingAnchor].active = YES;
[self.stackView.trailingAnchor
      constraintEqualToAnchor:margins.trailingAnchor].active = YES;

[self.stackView.topAnchor
      constraintEqualToAnchor:self.topLayoutGuide.bottomAnchor
      constant:8.0].active = YES;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与以前的代码相比，我发现更容易理解这些约束的意图。

</br>

# **了解更多**

+ [**```Programmatically Creating Constraints (Apple Auto Layout Guide)```**](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/ProgrammaticallyCreatingConstraints.html "")
+ [**```WWDC 2015 Session 219 Mysteries of Auto Layout, Part 2```**](https://developer.apple.com/videos/play/wwdc2015/219/ "")


