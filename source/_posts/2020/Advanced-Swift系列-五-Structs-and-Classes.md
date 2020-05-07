---
title: 'Advanced Swift系列(五): Structs and Classes'
description: 'Advanced Swift系列(五): Structs and Classes'
permalink: 'Advanced Swift系列(五): Structs and Classes'
copyright: ture
date: 2020-05-07 09:22:01
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Structs,Classes
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Structs and Classes]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在设计数据类型时，`Swift`让我们在表面上看起来相似的两个替代方案之间进行选择：**结构和类**。 两者都可以具有存储和计算的属性，并且都可以具有在其上定义的方法。 此外，两者都具有初始化程序，我们可以在它们上定义扩展，并使它们符合协议。 有时，当我们将class关键字更改为struct或反之时，我们的代码甚至会继续编译。 但是，表面上的相似性具有欺骗性，因为结构和类具有根本不同的行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**结构是值类型**，而**类是引用类型**。 即使我们不这么认为，我们都对日常工作中值和引用行为的熟悉。 在下一节中，我们将尝试利用这种隐含的理解来对值类型和一般引用类型之间的正式区别以及结构和类之间的形式区别有所了解。

<!-- more -->

# **值类型和引用类型**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从最简单的类型之一开始：整数。 考虑以下代码：

``` Swift
var a:Int = 3 
var b=a 
b+=1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在的值是什么？ 可以肯定地说，即使我们将b增加到4，我们都希望a仍然保持值3。其他任何事情都将是一个很大的惊喜。 这确实是正确的：

``` Swift
a // 3 
b // 4
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种行为是**值类型的本质：赋值复制值**。 换句话说，**每个值类型变量都拥有自己的独立值**。 如果类型以这种方式运行，则它也被称为**具有值语义**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查看标准库中Int的定义，我们确实可以看到它是一个结构（因此具有值语义）：

``` Swift
public struct Int: FixedWidthInteger, SignedInteger { 
    ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在继续之前，让我们退后一步，从更底层的角度看待这种行为。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们所说的“变量”是什么意思？ 我们可以说**变量是内存中某个位置的名称**，其中包含某种类型的值。 在上面的示例中，我们使用名称`a`指代`Int类型`的内存中当前持有值3的位置。第二个变量b是内存中不同位置的名称，同等Int类型并包含该值 初始分配后为3。 语句b + = 1然后获取存储在称为b的内存位置中的值，将其加1，然后将其写回到内存中的同一位置。 因此，b现在包含值4。由于增量语句仅修改b变量的值，因此a不受此语句影响。

![Memeory](http://q8wtfza4q.bkt.clouddn.com/awsc-stp1.png "值类型变量是直接包含值的内存中位置的名称。")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值类型的特征在于变量和值之间的这种直接关系：**值（也称为值类型的实例）直接位于变量后面的内存中的位置**。 这适用于简单的值类型（例如整数），也适用于更复杂的类型（例如具有多个属性的自定义结构）（在机器代码级别上，由于编译器的优化，这可能不成立，但对开发人员而言是不透明的，因此我们的描述是 语义上最不准确）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们来看一下视图类，作为典型引用类型的示例：

``` Swift
var view1 = UIView(frame: CGRect(x: 0, y: 0, width: 100, height: 100)) 
var view2 = view1
view2.frame.origin = CGPoint(x: 50, y: 50)
view1.frame.origin // (50, 50)
view2.frame.origin // (50, 50)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管我们为`view2.frame.origin`分配了新的原点，但我们自然希望`view1`的框架也发生变化。 实际上，在某种意义上，我们希望`view1`和`view2`是同一件事–它们都代表我们在屏幕上看到的相同视图。 这是说```UIView是引用类型```，并且`view1`和`view2`变量包含指向内存中相同底层UIView实例的引用的一种随意的说法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们重新分配view2变量时，就像这样，
``` Swift
view2 = UILabel()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`view1`仍引用以前创建的视图，而`view2变量`现在引用新创建的标签实例。 换句话说，重新分配`已更改了view2变量指向的实例（或对象）`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是引用类型的本质：***变量本身不包含“事物”（例如，UIView或URLSession的实例），而是对其的引用***。 其他变量也可以包含对同一基础实例的引用，并且该实例可以通过其任何引用变量进行突变。具有这些属性的类型也被称为具有**参考语义**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与值类型相比，间接作用级别更高。 值类型变量包含值本身时，引用类型变量包含指向其他位置值的引用。 这种间接允许我们在程序的不同部分之间共享对对象的访问。

![Memeory](http://q8wtfza4q.bkt.clouddn.com/awsc-stp2.png "引用类型变量包含指向内存中其他地方实际实例的指针。")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们以定义的自定义类型为例，从一个类开始观察值类型和引用类型的不同行为：

``` Swift
class ScoreClass {
    var home: Int
    var guest: Int

    init(home: Int, guest: Int) {
        self.home = home
        self.guest = guest 
    }
}
var score1 = ScoreClass(home: 0, guest: 0) 
var score2 = score1
score2.guest += 1
score1.guest // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变量`score1`和`score2`都引用了相同的`Score`基础实例。 因此，通过`score2`变量更改来宾的分数也会更改我们通过`score1`访问来宾的分数时看到的值。 我们还可以将`score2`传递给执行突变的函数：

``` Swift

func scoreGuest(_ score: ScoreClass) { 
    score.guest += 1
}
scoreGuest(score1) 
score1.guest // 2 
score2.guest // 2
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们改为将分数类型定义为结构，则行为会改变：

``` Swift
struct ScoreStruct {
    var home: Int
    var guest: Int
    // Memberwise initializer synthesized by the compiler.
}
var score3 = ScoreStruct(home: 0, guest: 0) 
var score4 = score1
score4.guest += 1
score3.guest // 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在上面的整数中看到的那样，将结构分配给另一个变量会创建该值的独立副本。因此，通过score2变量更改来宾的分数不会影响来宾在score1中的分数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用Score版本的结构版本，我们无法定义与上面类似的```classGuest函数```相同的``scoreGuest函数``。首先，将值类型作为函数的参数传递会创建该值的独立副本，就像分配给变量一样。其次，函数参数在函数中是不变的（就像使用let声明的变量一样），因此我们无法更改其属性。要创建类似的函数，我们必须使用``inout参数``，我们将在下一部分“突变”中介绍该参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们希望对``结构和类``的行为的初步概述能够突出它们的不同性质，尽管它们在语法和共享功能上相似。在本章的其余部分，我们将探讨结构与类之间的权衡。尽管类是功能更强大的工具，但其功能却要付出一定的代价。另一方面，结构有更多的限制，但是这些限制也可能是有益的。

# ***变种***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在控制可变性方面，结构和类有很大的不同。 刚开始时这可能并不直观，但是鉴于**结构是值类型和类是引用类型之间的区别是有道理的**。 作为示例，我们将再次从上方使用`ScoreClass`和`ScoreStruct`类型：

``` Swift
class ScoreClass {
    var home: Int
    var guest: Int

    init(home: Int, guest: Int) {
        self.home = home
        self.guest = guest 
    }
}
struct ScoreStruct {
    var home: Int
    var guest: Int
    // Memberwise initializer synthesized by the compiler.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;两个版本都有使用var关键字声明的home和guest属性。 如果我们创建两者的实例并将其存储在var变量中，则可以自由更改属性：

``` Swift
var scoreClass = ScoreClass(home: 0, guest: 0) 
var scoreStruct = ScoreStruct(home: 0, guest: 0) 
scoreClass.home += 1
scoreStruct.guest += 1
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，在变更类别和struct版本之间，有一个重要的区别：**struct突变始终是我们要突变的变量的局部变量，即仅更改了局部变量scoreStruct的值**。 **更改类实例具有潜在的全局影响：任何持有相同实例引用的人都将受到更改的影响**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果将实例存储在let变量中，我们仍然可以更改类实例，但不能更改struct实例：

``` Swift

let scoreClass = ScoreClass(home: 0, guest: 0) 
let scoreStruct = ScoreStruct(home: 0, guest: 0) 
scoreClass.home += 1 // works 
scoreStruct.guest += 1
// Error: Left side of mutating operator isn't mutable: 
// 'scoreStruct' is a 'let' constant.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**使用let声明变量意味着初始化后不能更改其值**。由于scoreClass变量的值是对ScoreClass实例的引用，因此这仅意味着我们无法为ScoreClass变量分配其他引用。但是，要对我们创建的ScoreClass实例的属性进行突变，就无需对scoreClass的值进行突变。我们只使用scoreClass中的引用来获取实例，在该实例中我们可以更改属性，因为它们在类中被声明为var。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就结构而言，它的工作原理大不相同。由于**结构是值类型**，因此scoreStruct变量不仅包含对其他地方实例的引用；还包括对实例的引用。实际上，它实际上包含ScoreStruct实例本身。由于在初始分配后无法更改let变量的值，因此即使在结构中使用var声明属性，我们也无法再对其进行更改。原因是**在结构上更改属性在语义上等同于将整个新的结构实例分配给变量**。所以上面的例子：

``` Swift
scoreStruct.guest += 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;等效于：

``` Swift
scoreStruct = ScoreStruct(home: scoreStruct.home, guest: scoreStruct.guest + 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这不仅适用于更改struct实例的直接属性，还适用于更改任何嵌套属性。 例如，为矩形原点的x坐标分配一个新值在语义上等同于为该变量分配一个全新的矩形值：

``` Swift
var rect = CGRect(origin: .zero, size: CGSize(width: 100, height: 100)) rect.origin.x = 10 // this is the same as...
rect = CGRect(origin: CGPoint(x: 10, y: 0), size: rect.size)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果使用let声明属性，但是使用var声明scoreClass和scoreStruct变量，会发生什么？

``` Swift
class ScoreClass {
    let home: Int
    let guest: Int

    init(home: Int, guest: Int) {
        self.home = home
        self.guest = guest 
    }
}
struct ScoreStruct { 
    let home: Int
    let guest: Int
}

var scoreClass = ScoreClass(home: 0, guest: 0)
var scoreStruct = ScoreStruct(home: 0, guest: 0) 
scoreClass.home += 1
// Error: Left side of mutating operator isn't mutable: 
// 'home' is a 'let' constant.
scoreStruct.guest += 1
// Error: Left side of mutating operator isn't mutable: 
// 'guest' is a 'let' constant.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使使用var声明scoreClass，该突变在类情况下也将失败。 原因是变量声明上的var仅意味着我们可以更改变量的值。 但是，在类情况下，变量的值是对实例的引用，因此我们可以更改引用：

``` Swift
scoreClass = ScoreClass(home: 2, guest: 1) // works
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，我们无法更改scoreClass所引用实例的home属性，因为该属性已用let定义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;突变在struct情况下也失败：由于使用let定义了属性，因此即使scoreStruct是var，我们也无法再使用它们来更改scoreStruct中的值。 但是，我们仍然可以为someStruct变量分配一个新的结构：

``` Swift
scoreStruct = ScoreStruct(home: 2, guest: 1) // works
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，如果我们使用let定义属性和变量，则编译器将不再允许进行任何形式的更改：我们无法将新实例分配给someClass或someStruct变量，也无法更改实例属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们建议默认在结构中使用var属性。这允许通过使用var或let在变量级别上控制结构实例的可变性，从而为你提供更大的灵活性。与类相反，在结构中使用var属性不会引入潜在的全局可变状态，因为突变struct属性实际上只会创建一个具有更改字段的结构的副本。即使在实例存储在var变量中的情况下，let也应谨慎而有意地用于在初始化后实际上不应该进行更改的属性（例如，因为对单个属性进行更改会使结构进入无效状态）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理解let和var属性和变量的所有不同组合的关键是要记住两点：

+ →类变量的值是对实例的引用，而结构变量的值是结构实例本身。
+ →甚至通过多个级别的嵌套更改适当的结构，就像将整个新的结构实例分配给变量一样。

# **变异方法**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**使用 `func关键字` 定义的结构体的常规方法不能使该结构体的任何属性发生突变**。 这是因为默认情况下，隐式传递给每个方法的self参数是不可变的。 我们必须明确地说要使用func来创建允许突变的方法：

``` Swift
extension ScoreStruct { 
    mutating func scoreGuest() {
        self.guest += 1 
    }
}

var scoreStruct2 = ScoreStruct(home: 0, guest: 0) 
scoreStruct2.scoreGuest()
scoreStruct2.guest // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在一种变异方法中，我们可以将self视为var，因此只要我们也使用var声明了self的属性，就可以对其进行更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**编译器使用`mutating关键字`作为标记来决定哪些方法不能在let常量上调用**。 我们只能在用var声明的变量上调用变异方法，因为调用变异方法就像为变量分配新值（事实上，在变异方法中也可以为self赋一个全新的值）。 如果我们尝试在let变量上调用`mutating方法`，则编译器
会显示一个错误，即使该方法实际上并未使自身发生变异-变异注释足以禁止调用。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;属性和下标设置器是隐式变异的。 在极少数情况下，你想使用不可变的setter来实现计算属性（例如，因为你的结构是全局资源的包装器，而setter仅突变全局状态），则可以使用不变异的set来注释setter。 编译器允许你在let常量上调用此类setter。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类没有也不需要突变方法：如上所述，即使通过let声明的变量，我们也可以对类实例的属性进行突变。 同样，self的行为类似于类的方法中的let变量。 我们无法重新分配self，但是只要使用var声明这些属性，就可以使用它来改变self所引用实例的属性。

# **输入参数**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面我们提到，结构上的变异方法可以访问可变的`self`，因此可以更改self上的任何var属性。 使用`inout参数`，我们可以编写可以改变其参数中任何一个参数的函数，而不仅仅是self。 举例来说，让我们将`mutation ScoreGuest`方法编写为自由函数：

``` Swift
func scoreGuest(_ score: ScoreStruct) {
    score.guest += 1
    // Error: Left side of mutating operator isn't mutable:
    // 'score' is a 'let' constant.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认情况下，函数参数（如let变量）是不可变的。 当然，我们可以将参数复制到本地var中，但是对该变量进行更改不会影响传入的原始值。要解决此问题，我们将`inout关键字`添加到参数的类型中：

``` Swift
func scoreGuest(_ score: inout ScoreStruct) { 
    score.guest += 1
}

var scoreStruct3 = ScoreStruct(home: 0, guest: 0)
scoreGuest(&scoreStruct) 
scoreStruct3.guest // 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使用`inout参数`调用scoreGuest函数，我们必须做两件事：首先，必须将作为inout参数传递的变量定义为var，其次，必须在变量名前加上`＆`传递给函数时。所需的`＆字符`使调用站点很清楚该函数现在可以更改此变量的值了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管`“＆”号`可以使你想起`C`或`Objective-C`中的操作符地址，或者`C ++`中的引用传递，但这不是这种情况。 **`inout参数`与常规参数一样作为副本传递**，但在函数返回时会被复制回。换句话说，当函数多次更改inout参数时，调用者将仅看到一个更改，因为新值将被复制回去。按照相同的逻辑，即使函数根本不更改其`inout参数`，调用方仍将看到一个突变（即，`将触发任何willSet和didSet观察者`）。

# **生命周期**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**在生命周期管理方面，结构和类非常不同**。在这方面，结构要简单得多，因为它们不能有多个所有者。它们的生存期与包含该结构的变量的生存期相关。当变量超出范围时，将释放其内存，并且结构消失。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，一个类的实例可以由多个所有者引用，这需要更复杂的内存管理模型。 Swift使用自动引用计数（ARC）来跟踪对特定实例的引用数。当引用计数下降到零时（因为所有保存引用的变量都超出范围或已设置为nil），Swift运行时将调用对象的`deinit`并释放内存。因此，可以使用类对最终释放时执行清理工作的共享实体进行建模，例如文件句柄（必须在某个时候关闭其基础文件描述符）或视图控制器（可能需要进行各种清理工作） ，例如取消注册观察员）。

## ***Reference Cycles***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;引用周期是指两个或多个对象之间相互强烈引用，以防止它们被释放（除非开发人员明确中断周期）。这会造成内存泄漏，并阻止执行潜在的清理任务。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于结构是简单的值，因此无法在它们之间创建引用循环（因为没有对结构的引用）。一方面，这是一个优点，而另一方面，它是一个局限性：无需担心，但也意味着我们无法使用结构为循环数据结构建模。对于类，相反的情况适用：由于同一个实例可以具有多个所有者，因此我们可以使用类为周期性数据结构建模，但是我们必须注意不要创建引用周期。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;引用循环可以采用多种形式-从两个相互强烈引用的对象，到由许多对象和对对象进行闭合的闭包组成的复杂循环。我们首先来看一个涉及窗口及其根视图的简单示例：

``` Swift
// First version
class Window {
    var rootView: View?
}

class View {
    var window: Window 
    init(window: Window) {
        self.window = window 
    }
}

var window: Window? = Window() // refcount: 1
window = nil // refcount: 0, deallocating
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在第一行之后，引用计数为1。 当我们将变量设置为nil时，Window实例的引用计数为零，并且实例被释放。 但是，如果我们还创建一个视图并将其分配给窗口的rootView属性，则引用计数永远不会再降为零。 让我们逐行跟踪参考计数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，创建窗口。 窗口的引用计数现在为1：

``` Swift
var window: Window? = Window() // window: 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，创建视图并保留对窗口的强烈引用，因此窗口的引用计数现在为2，视图的引用计数为1：

``` Swift
var view: View? = View(window: window!) // window: 2, view: 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将视图分配为窗口的rootView会使视图的引用计数增加一。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，视图和窗口的引用计数均为2：

``` Swift
window?.rootView = view // window: 2, view: 2
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将两个变量都设置为nil之后，它们的引用计数仍为1：

``` Swift
view = nil // window: 2, view: 1 
window = nil // window: 1, view: 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使无法再通过变量访问它们，它们也会相互引用。 这称为循环引用，当处理类似图形的数据结构时，我们需要非常注意通过周期造成内存泄漏的可能性。 由于循环引用的关系，这两个对象在程序的生存期内将永远不会被释放。

## ***弱引用***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了打破循环引用，我们需要使引用之一变弱或失去所有权。 将对象分配给弱变量不会改变其引用计数。 Swift中的弱引用始终为零：一旦释放了所引用的对象，变量将自动设置为nil-这就是为什么弱引用必须始终是可选的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了修复上面的示例，我们将使窗口的rootView属性变弱，这意味着它不会强引用该视图，因此，一旦取消分配该视图，它将自动变为nil。 要查看发生了什么，我们可以在类的反初始化器中添加一些打印语句。 在类取消分配之前，将调用deinit：

``` Swift
// Second version
class Window {
    weak var rootView: View? 
    deinit {
        print("Deinit Window") 
    }
}

class View {
    var window: Window 
    init(window: Window) {
        self.window = window 
    }

    deinit {
        print("Deinit View")
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在下面的代码中，我们再次创建一个窗口和一个视图。 和以前一样，视图强烈引用该窗口。 但是由于该窗口的rootView被声明为弱，因此该窗口不再强烈引用该视图。 这样，我们没有引用循环，并且当我们将变量设置为nil时，两个对象都被释放了：

``` Swift
var window: Window? = Window()
var view: View? = View(window: window!) 
window?.rootView = view
window = nil
view = nil
/*
Deinit View Deinit Window
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弱引用在与代表一起工作时非常有用，这在`Cocoa`中很常见。 委托对象（例如表格视图）需要对其委托的引用，但它不应拥有委托，因为这很可能会创建一个循环引用。 因此，委托引用通常较弱，并且另一个对象（例如，视图控制器）负责确保委托在需要的时间内待命。

## ***Unowned References***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，有时我们会希望使用非严格的参考，这不是可选的。 例如，也许我们知道视图将始终有一个窗口（因此该属性不应是可选的），但我们不希望视图强烈引用该窗口。 在这些情况下，有一个 ```unowned``` 关键字：

``` Swift
// Third version
class Window {
    var rootView: View? 

    deinit {
        print("Deinit Window") 
    }
}
class View {
    unowned var window: Window 
    
    init(window: Window) {
        self.window = window 
    }
    deinit {
        print("Deinit View")
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在下面的代码中，我们可以看到两个对象都被释放了，如上一个示例中的弱引用：

``` Swift
var window: Window? = Window()
var view: View? = View(window: window!) 
window?.rootView = view
view = nil
window = nil
/*
Deinit Window Deinit View
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于 ```Unowned References``` ，我们有责任确保 ```“referencee”``` 的寿命超过 ```“referencer”``` 的时间。 在此示例中，我们必须确保窗口不在视图中。 如果在访问视图和未拥有的变量之前将窗口释放，则程序将崩溃。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，这与未定义的行为不同。 Swift运行时在对象中保留第二个引用计数，以跟踪未拥有的引用。 当所有强引用都消失时，该对象将释放其所有资源（例如，对其他对象的任何引用）。 但是，对象本身的内存仍将保留在那里，直到所有未拥有的引用也都消失了。 内存被标记为无效（有时也称为僵尸内存），并且每当我们尝试访问未拥有的引用时，都会发生运行时错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以通过使用 ```unowned（不安全）``` 来规避此保护措施。 如果我们访问标记为未拥有（不安全）的无效引用，则会得到不确定的行为。

# **Closures and Reference Cycles**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift中，类并不是唯一的引用类型。 **函数（也包括闭包）也是引用类型**。 **如果一个闭包捕获到一个持有引用类型的变量，则该闭包将保持对其的强引用**。 在上一个示例旁边，这是将**引用循环**引入代码的另一种主要方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常的模式是这样的：对象A引用对象B，但是对象B存储了一个引用对象A的闭包（实际上，引用循环可能涉及多个中间对象和闭包）。 作为示例，我们从上方向窗口类添加可选的onRotate回调：

``` Swift
class Window {
    weak var rootView: View? 
    var onRotate: (() -> ())? = nil
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们配置onRotate回调并在其中使用视图，则我们引入了一个参考周期：

``` Swift
var window: Window? = Window()
var view: View? = View(window: window!) 
window?.onRotate = {
    print("We now also need to update the view: \(view)") 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该视图引用该窗口，该窗口引用该回调，而该回调引用该视图：

![Memeory](http://q8wtfza4q.bkt.clouddn.com/awsc-stp3.png "视图，窗口和回调之间的引用周期")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以在三个位置中断此引用周期（每个位置对应于上图中的箭头）：

+ →我们可以使该视图对窗口的引用变弱。不幸的是，该窗口将被立即释放，因为没有其他引用可以使该窗口保持活动状态。
+ →最好不要在轮换属性上标记弱，但```Swift```不能将函数属性标记为弱。
+ →我们可以通过使用弱捕获视图的捕获列表来确保关闭视图不会严格引用该视图。 在此示例中，这是唯一正确的选项。

``` Swift
window?.onRotate = { [weak view] in
    print("We now also need to update the view: \(view)")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;捕获列表所要做的不仅仅是将变量标记为弱变量或未拥有变量。 例如，如果我们想要一个弱引用窗口的变量，我们可以在捕获列表中对其进行初始化，或者甚至可以定义完全不相关的变量，如下所示：

``` Swift
window?.onRotate = { [weak view, weak myWindow=window, x=5*5] in 
    print("We now also need to update the view: \(view)")
    print("Because the window \(myWindow) changed")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这与在闭包上方定义变量几乎相同，除了在捕获列表中，变量的范围仅是闭包的范围。 在闭包之外无法使用。

## ***在Unowned引用和弱引用之间进行选择***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该在自己的API中使用 `Unowned引用` 还是 `弱引用` ？最终，这个问题归结为所涉及对象的生命周期。如果对象具有独立的生存期（也就是说，如果你无法假设哪个对象的寿命超过另一个），则弱引用是唯一安全的选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，如果你可以保证未严格引用的对象与它的对应对象具有相同的生存期，或者将始终超过该对象的生存期，则 `Unowned所有权引用` 通常会更方便。这是因为它不一定是可选的，并且可以使用let声明变量，而**弱引用必须始终是可选的var**。相同寿命的情况非常普遍，尤其是当两个对象具有父子关系时。当父母通过强引用来控制孩子的一生时，并且你可以保证没有其他对象知道该孩子，则该孩子对其父的反向引用始终是 `Unowned` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与弱引用相比，`Unowned` 引用的开销也较小，因此访问属性或在 `Unowned` 引用上调用方法的速度会稍快一些。就是说，这仅是非常关键性能的代码路径中的一个因素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，首选 `Unowned` 引用的不利之处在于，如果你在生命周期假设中犯了一个错误，则程序可能会崩溃。就个人而言，我们经常发现自己更喜欢 `weak` ，即使可以使用 `Unowned`  ，因为前者迫使我们明确检查引用在每个使用点是否仍然有效。特别是在重构代码时，很容易打破以前的使用期限假设并引入崩溃的错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是也有一个争论，就是始终使用修饰符来捕获你希望代码具有的生命周期特征，以使其明确。如果以后你或其他人以使这些假设无效的方式更改代码，则可以认为硬崩溃是提醒你注意问题的明智方法-假设你在测试期间发现了错误。

## ***在结构和类之间决定***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设计类型时，我们必须考虑是否必须在程序的不同部分之间共享这种类型的特定实例的所有权，或者是否可以互换使用多个实例，只要它们表示相同的值即可。**要共享特定实例的所有权，我们必须使用一个类。否则，我们可以使用一个结构**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，URL的实例不能共享，因为URL是一个结构。每次我们将URL分配给变量或将URL传递给函数时，编译器都会进行复制。但是，这不是问题，因为如果两个URL实例表示相同的URL，我们认为它们是可以互换的。这同样适用于其他结构，例如整数，布尔值和字符串：我们不在乎两个整数或两个字符串是否由同一块内存支持；我们关心它们是否代表相同的价值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相比之下，我们不认为两个UIView实例是可互换的。即使它们的所有属性都相同，它们仍然在视图层次结构的不同位置代表屏幕上的不同`“对象”`。因此，UIView被建模为一个类，以便我们可以将对特定实例的引用传递给程序的多个部分：特定视图由其超级视图引用，但也可以由其子视图作为其超级视图引用。此外，我们可以存储对该视图的其他引用，例如在视图控制器中。可以通过所有引用来操纵同一个视图实例，并且这些更改会自动通过所有引用反映出来。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话虽如此，**当我们设计不需要共享所有权的类型时，我们不必使用结构**。我们还可以将其建模为一个类，从而可能提供不可变的`API`，以便**该类型本质上具有值语义**。从这个意义上讲，我们可以只使用类而不必大幅度改变我们设计程序的方式。当然，我们会失去一些围绕可变性的编译时强制性要求，并且可能会产生额外的引用计数操作费用，但是我们可以使其正常运行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，如果我们没有可用的类（或一般的引用），我们将失去共享所有权的整个概念，我们将不得不从头到尾重新设计我们的程序（假设我们依靠在上课之前）。因此，尽管我们可以将结构建模为具有一些折衷的类，但情况不一定相反。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结构是我们工具箱中的一种工具，故意比类功能要弱。作为回报，结构提供了简单性：没有引用，没有生命周期，没有子类型。这意味着我们不不得不担心引用循环，通过共享引用产生的副作用和竞争条件以及继承规则（仅举几个例子）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，结构有望带来更好的性能，尤其是对于较小的值。例如，如果Int是一个类，则Ints数组将占用更多内存来存储对实际实例的引用（指针），以及每个实例所需的额外开销（例如，存储其引用计数）。更重要的是，遍历该数组的速度会慢得多，因为代码将必须遵循每个元素的附加间接级别，因此可能无法有效利用CPU缓存，尤其是在内存中的位置将Int实例分配得完全不同的情况下。

## ***Classes with Value Semantics***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面我们概述了结构具有`值语义`（即`每个变量包含一个独立的值`），而类具有引用语义（即`多个变量都可以指向同一个基础类实例`）。 没错，我们可以编写行为更像值类型的不可变类，并且可以编写实际上表现得不像值类型的结构-至少乍一看。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当编写一个类时，我们可以将其锁定到其引用语义不再对其行为产生影响的程度。 首先，我们将所有属性声明为let，使它们不可变。 然后我们将类定为final，以禁止子类化，以防止潜在的子类重新引入任何可变行为：

``` Swift
final class ScoreClass {
    let home: Int
    let guest: Int

    init(home: Int, guest: Int) {
        self.home = home
        self.guest = guest 
    }
}
let score1 = ScoreClass(home: 0, guest: 0)
let score2 = score1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score1和score2变量仍然包含对同一基础ScoreClass实例的引用-这毕竟是类的工作方式。 但是，出于所有实际目的，我们可以使用score1和score2就像它们包含独立的值一样，因为基础实例无论如何都是完全不可变的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，`Foundation`中的`NSArray类`。 `NSArray`本身不公开任何变异`API`，因此其实例实际上可以当作值使用。 由于`NSArray`有一个可变的子类`NSMutableArray`，因此实际情况要复杂一些，如果我们自己创建`NSArray实例`，就不能假设我们真的在处理`NSArray实例`。 这就是为什么我们在上述类中将我们的类声明为`“ nal”`，也是为什么建议在对它进行其他任何处理之前，先从不受控制的`API`中复制收到的`NSArray`的原因。


## ***Structs with Reference Semantics***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，包含引用类型属性的结构也表现出令人惊讶的行为。 让我们扩展 `ScoreStruct` 类型，使其包括一个计算`属性pretty`，它为当前分数提供格式正确的字符串：

``` Swift
struct ScoreStruct {
    var home: Int
    var guest: Int
    let scoreFormatter: NumberFormatter
    init(home: Int, guest: Int) {
        self.home = home
        self.guest = guest
        scoreFormatter = NumberFormatter() 
        scoreFormatter.minimumIntegerDigits = 2
    }

    var pretty: String {
        let h = scoreFormatter.string(from: home as NSNumber)! 
        let g = scoreFormatter.string(from: guest as NSNumber)! return "\(h) – \(g)"
    } 
}
let score1 = ScoreStruct(home: 2, guest: 1) 
score1.pretty // 02 – 01
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在初始化程序中，我们创建一个数字格式化程序，即使分数小于10，该数字格式化程序也将显示至少两个整数。我们在pretty属性中使用此格式化程序以生成格式化的输出。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们制作一份score1的副本，然后在该副本上重新配置数字格式器：

``` Swift
let score2 = score1 
score2.scoreFormatter.minimumIntegerDigits = 3
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管我们对score2进行了更改，但score1.pretty的输出也发生了变化：

``` Swift
score1.pretty // 002 – 001
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原因是`NumberFormatter`是一个类，即结构中的`scoreFormatter`属性包含对数字格式器实例的引用。当我们将`score1`分配给新的`score2`变量时，将复制一份`score1`。但是，结构的副本是其所有属性值的副本，而`scoreFormatter`的值仅是引用。因此，score2中的ScoreStruct值包含对与score1相同的基础数字格式化程序实例的引用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从技术上讲，`ScoreStruct`仍然具有值语义：**当你将实例分配给另一个变量或将其作为函数参数传递时，将复制整个值**。但是，这取决于我们认为是什么值。如果我们故意将引用存储为该结构的属性之一，也就是说，我们正在将引用本身视为值，那么上面的结构将准确显示预期的行为。但是我们可能希望该结构包括数字格式化程序实例本身，以便副本具有自己的格式化程序。在这种情况下，上述结构的行为是不正确的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了避免上面示例中的意外行为，我们可以将类型更改为类（以使该类型的用户不希望使用值语义），也可以将数字格式化程序设置为私有实现细节，以便不能更改它。但是，后者并不是一个完美的解决方案：我们仍然可以（偶然地）在类型上公开其他公共方法，该方法将在内部改变数字格式器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们建议在结构中存储引用时要非常小心，因为这样做通常会导致意外的行为。但是，在某些情况下，有意存储引用是你的有意需求，而正是你真正需要的是存储引用，主要是作为性能优化的实现细节。在下一部分中，我们将介绍一个示例，其中涵盖了**写时复制**。

# **写时复制优化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值类型需要大量复制，因为赋值或将其作为函数参数传递会创建一个副本。 尽管编译器会尝试在此方面保持聪明，并在可以证明这样做安全的情况下避免使用副本，但是值类型的作者可以进行另一项优化，那就是使用称为``写时复制``的技术来实现该类型。 这对于可容纳大量数据的类型尤其重要，例如标准库的集合类型（数组，字典，集合和字符串）。 它们都是使用写时复制实现的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;写入时复制意味着结构中的数据最初在多个变量之间共享； **数据复制将推迟到实例更改其数据之前**。 由于数组是使用写时复制实现的，因此，如果我们创建一个数组并将其分配给另一个变量，则该数组的数据实际上尚未被复制：

``` Swift
var x = [1, 2, 3] 
var y=x
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在内部，`x和y中的数组值包含对同一内存缓冲区的引用`。 该缓冲区是存储数组实际元素的位置。 但是，在我们对x（或y）进行突变的那一刻，数组检测到它正在与一个或多个其他变量共享其缓冲区，并在应用突变之前复制了缓冲区。 这意味着我们可以独立地对两个变量进行突变，而元素的潜在昂贵副本仅在必须执行以下操作时发生：

``` Swift
x.append(5) 
y.removeLast() 
x // [1, 2, 3, 5]
y // [1, 2]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于自己的类型，写时复制行为并不是免费的； 我们必须自己实现它，就像标准库为其集合类型实现它一样。 但是，仅在极少数情况下才需要为自定义结构实现写时复制，因为标准库已经提供了处理大量数据的最常见类型。 即使我们定义了一个可以包含大量数据的结构，我们也经常会使用内置的集合类型在内部表示此数据，因此，我们将从其写时复制优化中受益。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，了解如何实现写时复制有助于总体上了解Swift的集合类型的行为以及我们应注意的一些极端情况。

## ***Copy-On-Write Tradeoffs***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在研究写时复制的实现之前，我们要注意写时复制有其自身的权衡。**值类型的优点之一是它们不会产生引用计数的开销**。但是，**写时复制结构依赖于内部存储引用，并且对于创建的每个结构副本，内部引用计数都必须增加**。因此，我们实际上是在放弃值类型的优势-无需进行引用计数-以减轻值类型的另一属性-复制语义的潜在成本。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;递增或递减引用计数是一个相对较慢的操作（例如，与将几个字节复制到堆栈上的另一个位置相比），因为此类操作必须是线程安全的，因此会导致锁定开销。由于标准库中的所有可变大小类型（数组，字典，集合和字符串）内部都依赖于写时复制，因此包含这些类型属性的所有结构也会在每个副本上产生引用计数成本，甚至可能多次当类型包含多个此类属性时（这是一个例外，最大长度为15个UTF-8代码单元的小字符串，Swift为此进行了优化，避免了完全分配后备缓冲区的情况）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个实际的例子来自SwiftNIO项目：一个HTTP请求曾经在SwiftNIO中被建模为一个结构，并且包含多个属性，例如HTTP方法，标头等。当复制这样的结构时，不仅所有结构都被复制了。字段必须复制，但是所有内部数组，字典和字符串的引用计数也必须增加。与传递建模为类的HTTP请求相比，传递此类值（这是非常常见的操作）时，此开销导致性能显着降低（因为对类的引用所需要的数据量较少）比HTTP请求结构的所有字段进行复制，并且只需要更新一个引用计数）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面，我们将探讨在这种特殊情况下如何使用写时复制技术结合两个方面的优势：值语义和使用类的性能优势。 SwiftNIO团队的Johannes Weiss在[***```dotSwift 2019```***](https://www.youtube.com/watch?v=iLDldae64xE "")上也发表了精彩的演讲。

## ***Implementing Copy-On-Write***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们从HTTP请求结构的极其简化的版本开始：

``` Swift
struct HTTPRequest {
    var path: String
    var headers: [String: String] // other fields omitted...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了最大程度地减少上面概述的引用计数开销，我们首先将所有属性包装在私有存储类中：

``` Swift
struct HTTPRequest { fileprivate class Storage {
    var path: String
    var headers: [String: String]

    init(path: String, headers: [String: String]) {
        self.path = path
        self.headers = headers }
    }

    private var storage: Storage

    init(path: String, headers: [String: String]) { 
        storage = Storage(path: path, headers: headers)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，我们的`HTTPRequest结构`仅包含一个属性，存储，并且只需要对内部存储实例的一个引用计数在复制时就递增。 为了公开内部存储实例的私有路径和标头属性，我们将计算的属性添加到struct中：

``` Swift
extension HTTPRequest { 
    var path: String {
        get { 
            return storage.path 
        }
        set { 
            /* to do */ 
        } 
    }

    var headers: [String: String] {

        get { 
            return storage.headers 
        }
        set { 
            /* to do */ 
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重要的部分是这些属性的设置器的实现：我们不应该仅在内部存储实例上设置新值，因为此对象可能在多个变量之间共享。 由于将请求的数据存储在类实例中应该是私有的实现细节，因此我们必须确保基于类的结构的行为与原始结构完全相同。 这意味着，更改HTTP请求变量的属性仅应更改该变量的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一步，每次调用`setter`时，我们都可以创建内部存储类的副本。 要进行复制，我们在存储上添加一个复制方法：

``` Swift
extension HTTPRequest.Storage {
    func copy() -> HTTPRequest.Storage {
        print("Making a copy...") // For debugging
        return HTTPRequest.Storage(path: path, headers: headers) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们可以在设置新值之前将当前存储的副本分配给storage属性：

``` Swift
extension HTTPRequest { 
    var path: String {
        get {
            return storage.path
        } 
        set {
            storage = storage.copy()
            storage.path = newValue
         }
    }

    var headers: [String: String] {
        get {
            return storage.headers
        } 
        set {
            storage = storage.copy()
            storage.headers = newValue 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，HTTPRequest结构完全由类实例支持，但它仍显示值语义，就好像其所有属性都是结构本身的属性一样：

``` Swift
let req1 = HTTPRequest(path: "/home", headers: [:]) 
var req2 = req1
req2.path = "/users"
assert(req1.path == "/home") // passes
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，当前的实现仍然效率低下。 无论何时有任何其他变量引用相同的存储，我们都会在进行更改时创建内部存储的副本：

``` Swift
var req = HTTPRequest(path: "/home", headers: [:]) 
for x in 0..<5{
    req.headers["X-RequestId"] = "\(x)" 
}
/*
Making a copy... 
Making a copy... 
Making a copy... 
Making a copy... 
Making a copy...
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每次我们更改请求时，都会制作另一个副本。 但是所有这些副本都是不必要的； req中只有一个HTTPRequest值引用了内部存储实例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了提供有效的写时复制行为，我们需要知道对象（在本例中为Storage实例）是否被唯一引用，即，它是否具有单个所有者。 如果是这样，我们可以在适当位置修改对象。 否则，我们将在修改对象之前创建该对象的副本。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以使用`isKnownUniquelyReferenced`函数来查找引用是否只有一个所有者。 如果将Swift类的实例传递给此函数，并且没有其他人对象有很强的引用，该函数返回true。 如果还有其他强引用，则返回false。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用`isKnownUniquelyReferenced`时，有几点需要牢记：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该函数是线程安全的，但是你必须确保该变量正在从另一个线程访问正在传递的代码。 （isKnownUniquelyReferenced在这方面并不特殊；此限制适用于Swift中的每个inout参数。）换句话说，`isKnownUniquelyReferenced`不能防止竞争条件-此代码并不安全，因为两个队列同时对同一变量进行了变异。

``` Swift
var numbers = [1, 2, 3] 
queue1.async { 
    numbers.append(4) 
} 

queue2.async { 
    numbers.append(5) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`isKnownUniquelyReferenced`使用`inout参数`，因为这是Swift中在函数参数上下文中引用变量的唯一方法。 如果正常传递了参数，则在调用函数时，编译器将始终创建一个副本，这意味着永远无法在函数体内唯一引用要测试的对象。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不考虑Unowned引用和弱引用，即我们必须确保不存在对所讨论实例的此类引用。`isKnownUniquelyReferenced`不适用于`Objective-C`类。 要解决此限制，我们可以在Swift类中包装一个Objective-C类实例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用此知识，我们现在可以编写`HTTPRequest`的变体，以检查存储是否在更改之前被唯一引用。 为了避免在每个属性设置器中编写这些检查，我们将逻辑包装在`storageForWriting`属性中：

``` Swift
extension HTTPRequest {

    private var storageForWriting: HTTPRequest.Storage {
        mutating get {
            if !isKnownUniquelyReferenced(&storage) {
                self.storage = storage.copy() 
            }
        return storage
         }
    }

    var path: String {
        get { return storage.path }
        set { storageForWriting.path = newValue }
    }

    var headers: [String: String] {
        get { return storage.headers }
        set { storageForWriting.headers = newValue } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了测试我们的代码，让我们再次编写循环：

``` Swift
var req = HTTPRequest(path: "/home", headers: [:]) 
var copy = req
for x in 0..<5 {
    req.headers["X-RequestId"] = "\(x)" 
} 
// Making a copy...
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;debug语句仅打印一次：当我们第一次更改req时。 在随后的迭代中，将检测到唯一性，并且不会复制任何副本。 结合由编译器完成的优化，写时复制避免了大多数不必要的值类型副本。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们了解了结构（值类型）和类（引用类型）尽管具有相同的功能，但它们在行为上有根本不同。 **值类型变量仅包含值，对每个变量的每个赋值或将其传递给函数都会创建该值的副本**。 另一方面，引**用类型变量包含对实际值的引用。 将其分配给另一个变量或将其传递给函数将创建引用的副本，而不是基础值本身**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经讨论了如何通过`let`和`var`来控制可变性，`mutant关键字`如何工作以及如何使用`inout参数`。 最后，我们展示了**写入时复制优化**（标准库中的许多类型都使用过）可以工作，以及如何为自己的结构实现该功能。
