---
title: iOS自定义转场(By Swift)
description: iOS自定义转场(By Swift)
permalink: iOS自定义转场(By Swift)
copyright: ture
date: 2020-04-27 11:50:09
keywords: iOS,Swift,Push,用户体验, 转场,transition,自定义转场
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自定义转场]
    - [transition]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本文中，你将学习如何使用自定义转场和百分比驱动的交互来替换 ```Push``` ，```pop``` 和模式动画。

</br>

# **UIKit自定义过渡API-理论知识**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在进行 [**```自定义转换```**](https://developer.apple.com/videos/play/wwdc2013/218/ "") 的过程中涉及许多类和委托，让我们快速地完成这些项目，然后再进行一些编码。

</br>

## ***UIViewControllerTransitioningDelegate*** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个视图控制器都可以有一个过渡委托，在该委托实现中，你可以提供自定义动画和交互控制器。 这些对象将负责实际的动画处理，并且可以在此委托中将代码“注入” ```UIKit``` 框架。 💉💉💉

<!-- more -->

</br>

## ***UINavigationControllerDelegate***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;导航控制器委托还具有两种方法，用于自定义推送和弹出动画。 它与视图控制器的过渡委托几乎相同，但是稍后你将看到它的作用。 💥

</br>

## ***UINavigationController.Operation***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;导航控制器操作只是一个枚举，其中包含导航动画的“方向”。 通常按下或弹出。

> **```提示:```** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以模态方式呈现和关闭某些内容与在导航堆栈中推送和弹出视图控制器并不完全相同。 稍后再详细介绍。

</br>

## ***UIViewControllerAnimatedTransitioning***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些对象由过渡委托返回，因此基本上这是实现精美的自定义视图动画的地方。 😉

</br>

## ***UIViewControllerContextTransitioning***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该上下文封装了有关过渡的所有信息，你可以从该对象获取参与的视图，控制器以及更多其他信息。 过渡上下文可供你在动画期间使用。

</br>

## ***UIPercentDrivenInteractiveTransition***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在一个视图控制器和另一个视图控制器之间驱动交互式动画的对象。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，这是一种神奇的功能，使你能够神奇地用手指从屏幕边缘向后（如果你改变主意了）来回滑动导航控制器。 📱

</br>

# **编码自定义过渡动画**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 让我们做一些实际的编码！ 我将向你展示如何在导航堆栈内的视图控制器之间制作基本的淡入淡出动画。 首先，我们将从推动画开始。

``` Swift
open class FadePushAnimator: NSObject, UIViewControllerAnimatedTransitioning {

    open func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        return 0.5
    }

    open override func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard
            let toViewController = transitionContext.viewController(forKey: .to)
        else {
            return
        }
        transitionContext.containerView.addSubview(toViewController.view)
        toViewController.view.alpha = 0

        let duration = self.transitionDuration(using: transitionContext)
        UIView.animate(withDuration: duration, animations: {
            toViewController.view.alpha = 1
        }, completion: { _ in
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
        })
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，创建自定义过渡动画非常简单。 你只需要实现两个委托方法。 其中一个将返回动画的持续时间，而另一个将包含实际的过渡。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过渡上下文提供了一个自定义 ```containterView``` 对象，你可以在动画中使用它，也可以像我之前提到的那样从该对象中获取参与的视图和控制器。 现在，让我们反转该动画。 👈

``` Swift
open class FadePopAnimator: CustomAnimator {

    open func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        return 0.5
    }

    open override func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard
            let fromViewController = transitionContext.viewController(forKey: .from),
            let toViewController = transitionContext.viewController(forKey: .to)
        else {
            return
        }

        transitionContext.containerView.insertSubview(toViewController.view, belowSubview: fromViewController.view)

        let duration = self.transitionDuration(using: transitionContext)
        UIView.animate(withDuration: duration, animations: {
            fromViewController.view.alpha = 0
        }, completion: { _ in
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
        })
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，你只需要实现导航控制器的委托方法即可替换内置的UIKit系统动画。 🛠

``` Swift
extension MainViewController: UINavigationControllerDelegate {

    func navigationController(_ navigationController: UINavigationController,
                              animationControllerFor operation: UINavigationController.Operation,
                              from fromVC: UIViewController,
                              to toVC: UIViewController) -> UIViewControllerAnimatedTransitioning? {
        switch operation {
        case .push:
            return FadePushAnimator()
        case .pop:
            return FadePopAnimator()
        default:
            return nil
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，你不必制作两个单独的类（ ```pop``` 和 ```push``` ），也可以通过操作并在单个动画 ```tarnsitioning``` 类中实现动画。

</br>

# **Percent Driven Interactive Transition**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，现在你知道了如何实现自定义过渡，但现在该使其具有交互性了！ 该过程非常简单，你只需要一个手势识别器和适当的委托方法即可使事情正常进行。 ⌨️

``` Swift
class DetailViewController: UIViewController {

    var interactionController: UIPercentDrivenInteractiveTransition?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = .lightGray

        let edge = UIScreenEdgePanGestureRecognizer(target: self,
                                                    action: #selector(self.handleEdgePan(_:)))
        edge.edges = .left
        self.view.addGestureRecognizer(edge)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        self.navigationController?.delegate = self
    }

    @objc func handleEdgePan(_ gesture: UIScreenEdgePanGestureRecognizer) {
        let translate = gesture.translation(in: gesture.view)
        let percent = translate.x / gesture.view!.bounds.size.width

        switch gesture.state {
        case .began:
            self.interactionController = UIPercentDrivenInteractiveTransition()
            self.navigationController?.popViewController(animated: true)
        case .changed:
            self.interactionController?.update(percent)
        case .ended:
            let velocity = gesture.velocity(in: gesture.view)

            if percent &gt; 0.5 || velocity.x &gt; 0 {
                self.interactionController?.finish()
            }
            else {
                self.interactionController?.cancel()
            }
            self.interactionController = nil
        default:
            break
        }
    }
}

extension DetailViewController: UINavigationControllerDelegate {

    /* ... */

    func navigationController(_ navigationController: UINavigationController,
                              interactionControllerFor animationController: UIViewControllerAnimatedTransitioning)
        -> UIViewControllerInteractiveTransitioning? {

        return self.interactionController
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在将要弹出的控制器内部，你可以拥有导航控制器的委托的所有权，并使用左屏幕边缘平移手势识别器实现交互式过渡控制器。 整个代码通常进入 ```UIPercentDrivenInteractiveTransition``` 的新子类中，但是为了简单起见，这次我们将跳过该部分，并使用这个非常简单的解决方案。  😅

</br>

# **Navigation vs modal presentation**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，让我们快速介绍另一件事：为视图控制器自定义模式演示动画。 自定义导航堆栈动画和模式表示样式之间存在微小差异。 如果要自定义视图控制器转换，通常会执行以下操作。 👍

``` Swift
class DetailViewController: UIViewController {

     /* ... */

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        super.prepare(for: segue, sender: sender)

        guard let controller = segue.destination as? ModalViewController else {
            return
        }

        controller.transitioningDelegate = self
        controller.modalPresentationStyle = .custom
        controller.modalPresentationCapturesStatusBarAppearance = true
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用我们已经拥有的相同对象的过渡委托来了。

``` Swift
extension DetailViewController: UIViewControllerTransitioningDelegate {

    func animationController(forPresented presented: UIViewController,
                             presenting: UIViewController,
                             source: UIViewController) -> UIViewControllerAnimatedTransitioning? {
        return FadePushAnimator()
    }

    func animationController(forDismissed dismissed: UIViewController) -> UIViewControllerAnimatedTransitioning? {
        return FadePopAnimator()
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你运行代码并提供模态视图控制器，则可以正常工作。 当你尝试关闭显示的视图控制器时，会发生此问题。 整个应用程序将转为死亡黑屏（BSOD）。 🖥

***```(pop != dismiss) && (push != present)```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须修改pop动画才能支持模态解雇动画。 简而言之：问题在于放置视图和内存管理。

``` Swift
open class FadePopAnimator: NSObject, UIViewControllerAnimatedTransitioning {

    public enum TransitionType {
        case navigation
        case modal
    }

    let type: TransitionType
    let duration: TimeInterval

    public init(type: TransitionType, duration: TimeInterval = 0.25) {
        self.type = type
        self.duration = duration

        super.init()
    }

    open func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        return self.duration
    }

    open override func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        guard
            let fromViewController = transitionContext.viewController(forKey: .from)
        else {
            return
        }

        if self.type == .navigation, let toViewController = transitionContext.viewController(forKey: .to) {
            transitionContext.containerView.insertSubview(toViewController.view, belowSubview: fromViewController.view)
        }

        let duration = self.transitionDuration(using: transitionContext)
        UIView.animate(withDuration: duration, animations: {
            fromViewController.view.alpha = 0
        }, completion: { _ in
            transitionContext.completeTransition(!transitionContext.transitionWasCancelled)
        })
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最简单的解决方案是引入一个新属性，以便你可以基于该标志来决定是否弹出视图控制器。 现在，你也可以安全地将相同的动画器用于模态显示的视图控制器。 😬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，导航栏将始终使用淡入淡出的动画，但遗憾的是无法自定义。 另外，我进行了自定义的模态演示，并且所有内容都在使用交互式过渡。 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，如果你不想手动实现自定义动画效果，则可以使用 [***```Hero```***](https://github.com/lkzhao/Hero "") 优雅的过渡库。


