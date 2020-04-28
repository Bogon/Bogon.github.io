---
title: Swift结合Xib文件自定义UIView
permalink: Swift结合Xib文件自定义UIView
copyright: ture
date: 2020-04-28 11:02:25
keywords: iOS,Swift,Xib,用户体验, 自定义UIView
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自定义UIView]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你是否想学习如何加载 ```xib``` 文件以创建自定义视图对象？ 好吧，这个 ```UIKit``` 教程只适合你用 ```Swift``` 编写。

***使用界面生成器创建自定义视图。🤷‍♂️***

</br>

# **加载 ``Xib`` 文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```xib``` 文件的内容是一件非常容易的事。 你可以使用以下两种方法来加载文件的内容（也称为视图层次结构）。

``` Swift
let view = UINib(nibName: "CustomView", bundle: .main).instantiate(withOwner: nil, options: nil).first as! UIView
// let view = Bundle.main.loadNibNamed("CustomView", owner: nil, options: nil)!.first as! UIView // does the same as above
view.frame = self.view.bounds
self.view.addSubview(view)
```


<!-- more -->


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码片段将简单地从 ```xib``` 文件中实例化视图对象。 你可以在视图层次结构中拥有多个根对象，但是这次让我们选择第一个并使用它。 我假设在 ```99％``` 的情况下，这是获取定制设计视图所需的条件。 你还可以使用上述任何解决方案扩展 ```UIView``` 对象，以创建通用视图加载器。 以后再说吧...😊

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种方法非常简单且便宜，但是有一个小缺点。 你无法获取视图的命名指针（出口），而只能获取根对象。 如果你将设计元素放到屏幕上，那很好，但是如果你需要显示动态数据，那么你可能还希望伸手去拿基础视图。 😃

</br>

# **``Outlets & Actions`` 自定义视图**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，从 ```xib``` 文件加载自定义视图的正确方法如下所示：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在你的自定义视图对象中，你实例化 ```xib``` 文件的方式与我在此处告诉你的方式完全相同。 👆唯一的区别是你不需要使用方法返回的对象数组，而必须通过接口构建器连接视图对象，使用文件所有者作为参考点，再加上自定义容器视图出口， 它将包含你需要的一切。 🤨

``` Swift
// note: view object is from my previous tutorial, with autoresizing masks disabled
class CustomView: View {

    // this is going to be our container object
    @IBOutlet weak var containerView: UIView!

    // other usual outlets
    @IBOutlet weak var textLabel: UILabel!

    override func initialize() {
        super.initialize()

        // first: load the view hierarchy to get proper outlets
        let name = String(describing: type(of: self))
        let nib = UINib(nibName: name, bundle: .main)
        nib.instantiate(withOwner: self, options: nil)

        // next: append the container to our view
        self.addSubview(self.containerView)
        self.containerView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            self.containerView.topAnchor.constraint(equalTo: self.topAnchor),
            self.containerView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.containerView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            self.containerView.trailingAnchor.constraint(equalTo: self.trailingAnchor),
        ])
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，这里的 ```initialize``` 方法只是将 ```self``` 的所有者加载到 ```nib``` 文件中。 加载过程完成后，将使用 ```xib文件``` 中的适当值填充出口指针。 我们需要做的最后一件事。 甚至 ```xib文件``` 中的视图都 ```“以编程方式”``` 连接到我们的自定义视图对象，但从视觉上看并不是这样。 因此，我们必须将容器视图添加到视图层次结构中。 🤐

![xib文件](http://q8wtfza4q.bkt.clouddn.com/xu-stp1.jpg "")


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要使用自定义视图对象，只需在视图控制器内部从该对象创建一个新实例，最后随意将其添加为子视图！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建议使用自动布局。😅

``` Swift
class ViewController: UIViewController {

    weak var customView: CustomView!

    override func loadView() {
        super.loadView()

        let customView = CustomView()
        self.view.addSubview(customView)
        NSLayoutConstraint.activate([
            customView.topAnchor.constraint(equalTo: self.view.topAnchor),
            customView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor),
            customView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            customView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor),
        ])
        self.customView = customView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.customView.textLabel.text = "Lorem ipsum"
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是这样，现在你有了一个可以正常工作的自定义 ```UIView``` 对象，该对象可以加载 ```xib``` 文件以使用其内容。  🤪

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一件事。 如果你不喜欢以编程方式处理视图，或者只是不想弄乱 ```loadView``` 方法，只需将其完全删除即可。 接下来，将 ```@IBOutlet``` 关键字放在自定义视图类变量之前。 使用 ```IB``` 打开情节提要，然后将新的 ```UIView``` 元素拖放到控制器上并连接自定义视图插座。 💫

![xib文件](http://q8wtfza4q.bkt.clouddn.com/xu-stp2.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们来谈谈 ```IBAction``` ，它们的工作原理与你期望使用控制器时完全相同。 你可以简单地将按钮连接到自定义视图，然后将操作委派给自定义视图类。 如果要将触摸或特定操作转发给控制器，则应使用委托模式或使用简单的块。 😎

</br>

# **所有权/容器视图**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以从视图实例中省略所有 ```xib``` 加载机制。 我们可以创建一组扩展，以便拥有一个漂亮的视图加载器，并带有来自 ```xib``` 文件的自定义视图类。 这样，你就不再需要容器视图，文件所有者也可以从游戏中删除，这与 ```Apple``` 创建的表和集合的可重用单元格大致相同。 🍎

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该知道，以这种方式你将无法再以编程方式使用默认的 ```UIView``` 初始化方法，因为xib文件将负责初始化过程。 同样，如果你尝试使用情节提要或 ```xib``` 文件中的这种自定义视图，则将无法使用出口，因为不会加载视图类的对应 ```xib``` 。 否则，如果你尝试多次加载它，则会陷入无限循环，最终你的应用程序将崩溃。 😈

``` Swift
import UIKit

extension UINib {
    func instantiate() -> Any? {
        return self.instantiate(withOwner: nil, options: nil).first
    }
}

extension UIView {

    static var nib: UINib {
        return UINib(nibName: String(describing: self), bundle: nil)
    }

    static func instantiate(autolayout: Bool = true) -> Self {
        // generic helper function
        func instantiateUsingNib<T: UIView>(autolayout: Bool) -> T {
            let view = self.nib.instantiate() as! T
            view.translatesAutoresizingMaskIntoConstraints = !autolayout
            return view
        }
        return instantiateUsingNib(autolayout: autolayout)
    }
}

class CustomView: UIView {

    @IBOutlet weak var textLabel: UILabel!
}

// usage (inside a view controller for example)
// let view = CustomView.instantiate()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像这次使用表或集合视图单元格一样，你必须在视图对象而不是文件所有者上设置自定义视图类。 你必须连接网点，基本上你已完成了所有工作。 🤞

![xib文件](http://q8wtfza4q.bkt.clouddn.com/xu-stp3.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从现在开始，你应该始终在自定义视图对象上使用实例化方法。 好消息是该函数是通用的，返回正确的实例类型，并且高度可重用。 哦，顺便说一句。 我已经提到了坏消息...🤪

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过重写 ```awakeAfter``` 还有另一种技术，但是我不再依赖该解决方案了。 在大多数情况下，你只需将“文件的所有者”设置为自定义视图，然后使用一个容器，这是一个安全的选择。 如果你有特殊需要，则可能需要第二种方法，但是请谨慎使用。 😉