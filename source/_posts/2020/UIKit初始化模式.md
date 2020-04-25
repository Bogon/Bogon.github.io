---
title: UIKit初始化模式
permalink: UIKit初始化模式
date: 2020-04-25 08:05:14
keywords: iOS,UIKit,设计模式,初始化
copyright: ture
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> 了解UIKit中两个常用类的初始化过程。了解UIViewcontroller和UIView初始化模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UIKit``` 是在iOS开发过程中必须也是使用频次最高的一个类库，里面包含了许多与用户直接交互的控件比如：```UIView```, ```UITableView```, ```UIScrollView``` 等。在收到用户交互的设计图之后，我们要合理的使用这些控件，就能编写出交互良好的应用。

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了类库中包含的基础控件之外，我们也能够对控件根据业务需要进行整合，也就是设计出一套适用于本公司的组件，提高开发速度。

# ** ```UIViewController``` 初始化 ** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，```UIViewController``` 的初始化非常简单。如果要完全控制，则只需要重写一些方法。这取决于你使用何种方式调用 ```init``` ，如果你使用一个 ```storyboard``` 初始化控制器，那么 ```init（coder）``` 是你所需要的。如果你尝试从外部 ```nib``` 文件启动控制器，则将调用 ```init（nib，bundle）``` 。你还有第三个选择，你可以通过代码以编程方式初始化控制器。简而言之，为了进行合理的初始化过程，这是你必须要做的。

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面介绍两种 ```UIViewControllers``` 的初始化模式，第一种只是一个常见的init函数，在每种情况下都可以调用该函数来初始化控制器。

``` Swift
import UIKit

class ViewController: UIViewController {

    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    init() {
        super.init(nibName: nil, bundle: nil)

        self.initialize()
    }

    func initialize() {
        //do your stuff here
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以在之后的子类中隐藏 ```init（nib，bundle）``` 和 ```init（coder）``` 方法。在子类中不必重写 ```init（nib，bundle）```，并且可以将 ```init（coder）``` 标记为默认初始化程序。这个似乎是有点棘手的解决方案，使用起来不是很方便，但确实可以完成 ```ViewController``` 的初始化。

``` Swift

import UIKit

class ViewController: UIViewController {

    init() {
        super.init(nibName: nil, bundle: nil)

        self.initialize()
    }

    required convenience init?(coder aDecoder: NSCoder) {
        self.init(coder: aDecoder)

        self.initialize()
    }

    func initialize() {
        //do your stuff here
    }
}

class MyFutureViewController: ViewController {

    override init() {
        super.init()
    }
}
let vc = MyFutureViewController()

```
___


</br>

# ** ```UIView``` 初始化 ** 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们通常为 ```UIView``` 创建一个通用的初始化程序，以使初始化过程更加轻松，使用起来更加方便。还会在该初始值设定项方法中将 ```translate autoresizing mask``` 属性设置为 ```false``` ，因为它是2017年，没有人再使用 ```spring＆struts``` 了。