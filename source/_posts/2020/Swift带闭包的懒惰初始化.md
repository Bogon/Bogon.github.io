---
title: Swift带闭包的懒惰初始化
description: Swift带闭包的懒惰初始化
permalink: Swift带闭包的懒惰初始化
copyright: ture
keywords: 'iOS,UIKit,设计模式,抽象,Swift,带闭包的懒惰初始化,重构,Lazy Property Initializationpattern'
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
abbrlink: 51872
date: 2020-04-26 15:55:06
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何创建具有模块化和可读性的对象。

# **使用初衷**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```iOS``` 之旅的开始，我遵循了 ```YouTube``` 上的教程。 我看到一些使用如下所示的方法来创建 ```UI``` 对象。

``` Swift
let makeBox: UIView = {
 let view = UIView()
 return view
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为学习者，我复制了练习并使用了它。 但是，有一天，有人问我：“为什么要添加 ```{}``` ，为什么 ```（）``` 末尾存在？ 它是计算属性吗？” 我无法回答。


<!-- more -->

</br>

# **学习的目标**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有三个目标。 首先，了解如何使用上述非常规方式初始化对象。 其次，了解何时在 ```Swift``` 中使用惰性 ```var``` 。 最后，如何最终正确使用它。

## ***先决条件***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了充分理解文章中的内容，我强烈建议您熟悉以下主题。

+ [```Closures```](https://blog.bobthedeveloper.io/no-fear-closure-in-swift-3-with-bob-72a10577c564?gi=bfa929c89fa9 "")
+ [```Capture List and retention cycle [weak self]```](https://blog.bobthedeveloper.io/swift-retention-cycle-in-closures-and-delegate-836c469ef128 "")
+ Descent Object Oriented Programming

</br>

# **创建UI组件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我解释上述非常规方法之前，让我们先回顾一下你的过去。 为了在 ```Swift``` 中创建一个按钮，你可能已经做了类似的事情。

``` Swift
// Determine Size
let buttonSize = CGRect(x: 0, y: 0, width: 100, height: 100)
// Create Instance
let bobButton = UIButton(frame: buttonSize)
bobButton.backgroundColor = .black
bobButton.titleLabel?.text = "Bob"
bobButton.titleLabel?.textColor = .white
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设你必须创建其他三个按钮，你可能必须复制上面的代码，然后将名称从 ```bobButton``` 更改为 ```bobbyButton``` 。这非常繁琐。

``` Swift
// New Button
let bobbyButton = UIButton(frame: buttonSize)
bobbyButton.backgroundColor = .black
bobbyButton.titleLabel?.text = "Bob"
bobbyButton.titleLabel?.textColor = .white
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使事情变得容易一些，你可以：

![带闭包的懒惰初始化](http://cdn.xuebaonline.com/xcode-edit-all.gif "这也适用于键盘快捷键：ctrl-cmd-e")

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以使用快捷键：ctrl-cmd-e，完成上述操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不想重复这样创建，则可以创建一个函数：

``` Swift
func createButton(enterTitle: String) -> UIButton {
 let button = UIButton(frame: buttonSize)
 button.backgroundColor = .black
 button.titleLabel?.text = enterTitle
 return button
}

createButton(enterTitle: "Yoyo") //  👍
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，在 ```iOS``` 开发中，很少有自定义按钮看起来相似的情况。 因此，一个函数可能需要更多的参数，包括背景颜色，标题，边框半径，阴影等。 你的功能可能最终看起来像：

``` Swift
func createButton(title: String, borderWidth: Double, backgrounColor, ...) -> Button
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使你向函数添加默认参数，上面的代码也不是理想的选择。 它降低了可读性。 因此，最好还是保留上面乏味的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，有什么方法可以使它减少乏味和更有条理？ 当然。 我们已经调查了你的过去—现在该加紧步伐，展望你的未来。

</br>

# **引入非常规方式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以非常规的方式创建UI组件之前，让我们首先回答最初问题: ```{}``` 是什么意思，它是计算属性吗？

***不，这只是一个封闭块。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，让我们演示如何使用闭包创建对象。 我们将设计一个名为 ```Human``` 的结构。

``` Swift
struct Human {
 init() {
  print("Born 1996")
 }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，这就是创建带闭包的对象的方式：

``` Swift
let createBob = { () -> Human in
 let human = Human()
 return human
}

let babyBob = createBob() // "Born 1996"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```仅说明一下，createBob``` 是一个类型为 ```（）-> Human``` 的闭包。 您已经通过调用 ```createBob（）``` 创建了一个名为 ```babyBob``` 的实例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，你必须创建两个常量： ```createBob``` 和 ```babyBob``` 。 如果你想在一个语句中做所有事情怎么办？ 

``` Swift
let bobby = { () -> Human in
 let human = Human()
 return human
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，闭包块通过在末尾添加 ```（）``` 来执行自身，而 ```bobby``` 现在附加了一个 ```Human``` 对象。 很好的东西。

***你已经了解了如何使用闭包块初始化对象。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们来创建一个 ```UI``` 对象，该对象应该与上面的示例相似。

``` Swift
let bobView = { () -> UIView in
 let view = UIView()
 view.backgroundColor = .black
 return view
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;太好了，我们可以缩短它的时间。 实际上，我们不需要指定封闭块的类型。 相反，我们要做的就是指定实例的类型，例如 ```bobView``` 。

``` Swift
let bobbyView: UIView = {
 let view = UIView()
 view.backgroundColor = .black
 return view
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 能够基于关键字 ```return``` 推断出闭包块是 ```（）-> UIView``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，看看。 上面的示例应该看起来与我担心的“非常规方式”相同。

</br>

# **闭包初始化的好处**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 我们讨论了创建对象的乏味以及使用函数引起的问题。 在你的脑海中，你肯定在想：“为什么我应该改用闭包？”

## ***容易复制***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不喜欢使用 ```Storyboard``` ，我喜欢复制和粘贴 ```UI``` 对象。 实际上，我的计算机中有一个“库”。 让我们假设库中有一个如下所示的按钮。

``` Swift
let myButton: UIButton = {
 let button = UIButton(frame: buttonSize)
 button.backgroundColor = .black
 button.titleLabel?.text = "Button"
 button.titleLabel?.textColor = .white
 button.layer.cornerRadius = 1
 button.layer.masksToBounds = true
return button
}()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我要做的就是复制整行，然后将 ```myButton``` 的名称更改为 ```newButton``` 以供使用。 如果不使用闭包方法，则可能不得不将 ```button``` 的名称更改为 ```newButton``` 7–8次。 我们可以使用上面的 ```Xcode``` 快捷方式，但为什么不使其更简单。

## ***代码更整洁***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于将对象组合在一起，看代码更加直观。 比较一下：

``` Swift
// Init with Closure
let leftCornerButton: UIButton = {
 let button = UIButton(frame: buttonSize)
 button.backgroundColor = .black
 button.titleLabel?.text = "Button"
 button.titleLabel?.textColor = .white
 button.layer.cornerRadius = 1
 button.layer.masksToBounds = true
return button
}()
let rightCornerButton: UIButton = {
 let button = UIButton(frame: buttonSize)
 button.backgroundColor = .black
 button.titleLabel?.text = "Button"
 button.titleLabel?.textColor = .white
 button.layer.cornerRadius = 1
 button.layer.masksToBounds = true
return button
}()
```
*```比较```*

``` Swift
// Init With Fingers
let leftCornerButton = UIButton(frame: buttonSize)
leftCornerButton.backgroundColor = .black
leftCornerButton.titleLabel?.text = "Button"
leftCornerButton.titleLabel?.textColor = .white
leftCornerButton.layer.cornerRadius = 1
leftCornerButton.layer.masksToBounds = true
let rightCornerButton = UIButton(frame: buttonSize)
rightCornerButton.backgroundColor = .black
rightCornerButton.titleLabel?.text = "Button"
rightCornerButton.titleLabel?.textColor = .white
rightCornerButton.layer.cornerRadius = 1
rightCornerButton.layer.masksToBounds = true

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管使用闭包创建对象要多加几行，但我感到有点不知所措，因为我只需要向按钮添加属性，而不必向 ```rightCornerButton``` 或 ```leftCornerButton``` 添加属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，如果按钮的名称更具描述性，那么创建带有闭包块的对象通常需要较少的行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你已经实现了第一个目标。 恭喜你

## ***延迟初始化应用***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你已经走了很长一段路。 现在该实现本教程的第二个目标。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能在下面看到了类似的内容：

``` Swift
class IntenseMathProblem {
 lazy var complexNumber: Int = {
  // imagine it requires a lot of CPU
  1 * 1
 }()
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惰性允许您执行的操作是，仅当你尝试访问 ```complexNumber``` 属性时，才会计算 ```complexNumber``` 属性。 例如:

``` Swift
let problem = IntenseMathProblem
problem()  // No value for complexNumber
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前， ```complexNumber``` 没有值。 但是，一旦你访问该媒体资源，

``` Swift
problem().complexNumber // Now returns 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惰性变量经常用于对数据库进行排序并从任何后端服务中获取数据，因为你绝对不想在创建对象时对所有内容进行计算和排序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，你的手机会崩溃，因为该物体过大且RAM无法处理。

</br>

# **应用**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面只是 ```lazy var``` 的一个应用。

## ***排序***

``` Swift
class SortManager {
 lazy var sortNumberFromDatabase: [Int] = {
  // Sorting logic
  return [1, 2, 3, 4]
 }()
}
```

## ***图像压缩***

``` Swift
class CompressionManager {
 lazy var compressedImage: UIImage = {
  let image = UIImage()
  // Compress the image
  // Logic
  return image
 }()
}
```

</br>

# **懒加载规则**

+ 你不能将lazy与let一起使用，因为它没有初始值，并且在以后访问它时才可以达到。
+ 你不能将其与计算属性一起使用，因为当你修改与惰性属性有关系的任何变量时，总是会重新计算计算属性（需要CPU）。
+ 惰性仅对结构或类的成员有效

</br>

# **懒加载能捕获**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，如果你已阅读上一篇有关[```“封闭和委托中的循环引用”```](https://blog.bobthedeveloper.io/swift-retention-cycle-in-closures-and-delegate-836c469ef128 "")的文章，您可能会感到奇怪。 让我们测试一下。 创建一个名为 ```BobGreet``` 的类。 它具有两个属性：名称为 ```String``` 的名称和问候语也为 ```String``` 的问候语，但使用闭包块进行了初始化。

``` Swift
class BobGreet {
    var name = "Bob the Developer"
    lazy var greeting: String = {
        return "Hello, \(self.name)"
    }()
    deinit {
        print("I'm gone, bruh 🙆‍")}
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;封闭块可能对 ```BobGuest``` 强引用，但让我们尝试取消分配。

``` Swift
var bobGreet: BobGreet? = BobGreet()
bobGreet?.greeting
bobGreet = nil // I'm gone, bruh 🙆‍
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无需担心 ```[unown self]``` 闭包块没有对该对象的引用。 取而代之的是，它只是在封闭块内复制自身。 

