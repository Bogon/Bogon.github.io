---
title: 'Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型'
description: 'Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型'
permalink: 'Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding
  和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP),高级协议和泛型
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 高级协议和泛型
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 31671
date: 2020-06-21 16:46:48
---

本章介绍协议和泛型的更高级用法。 在上一章中所学内容的基础上，你将使协议具有对Self的约束，其他关联类型甚至递归约束。

在本章的后面，你将发现协议的一些问题，并使用类型擦除和不透明的返回类型解决它们。

# 现有协议

在本章中，你会看到一些看似与Swift无关的花哨的单词，但是类型系统专家使用这些术语。 知道这一术语对你很有帮助，并且意识到这没什么大不了的。

存在类型就是这样一种术语。 幸运的是，它是你已经知道并使用过的东西的名称。 这只是通过协议访问的具体类型。

把它放到playground上：

``` Swift
protocol Pet {
  var name: String { get }
}
struct Cat: Pet {
  var name: String
}
```


<!-- more -->

在此代码中，宠物协议规定宠物必须具有名称。 然后，你创建了一个符合Pet的具体类型Cat。 现在像这样创建一只猫：

``` Swift
var somePet: Pet = Cat(name: "Whiskers")
```

在这里，你定义了一个类型为Pet而不是具体类型Cat的变量somePet。 这里的Pet是一种存在类型-它是一个抽象概念，一个协议，是指存在的具体类型，结构。

为简单起见，从现在开始，我们将其称为协议类型。 这些协议类型看起来很像面向对象编程中的抽象基类，但是你也可以将它们应用于枚举和结构。

# 不存在的协议

如果协议具有关联的类型，则不能将其用作存在的类型。 例如，如果你这样更改Pet：

``` Swift
protocol Pet {
  associatedtype Food
  var name: String { get }
}
```

突然，你不能再实例化。

尽管存在这些缺点，关联类型还是非常有用的。 考虑第16章“协议”中的示例：

``` Swift
protocol WeightCalculatable {
  associatedtype WeightType
  var weight: WeightType { get }
}
```

该协议定义了不将权重固定为一种特定类型的权重。 你可以创建一个将WeightType设置为Int或Double或所需类型的类（或结构）。 例如：

``` Swift
class HeavyThing: WeightCalculatable {
    // This heavy thing only needs integer accuracy
    typealias WeightType = Int
    var weight: Int {
        100
    } 
}
class LightThing: WeightCalculatable {
  // This light thing needs decimal places
  typealias as WeightType = Double
    var weight: Double {
        0.0025
    } 
}
```

这里的重点是任何你想要的部分。 没有什么可以阻止你将WeightType定义为字符串，甚至完全不定义其他内容。 ：]

``` Swift
class StringWeightThing: WeightCalculatable {
    typealias WeightType = String
    var weight: String {
        "That doesn't make sense"
    } 
}

class CatWeightThing: WeightCalculatable {
  typealias WeightType = Cat
  var weight: Cat {
    Cat(name: "What is this cat doing here?")
  }
}
```

## 将协议限制为特定类型

当你第一次考虑创建此协议时，你希望它通过数字定义权重，并且以这种方式使用时效果很好。 简直就是道理！

但是那是你使用自己的协议的时候。 如果你想围绕它编写通用代码，而通用系统对WeightType的功能一无所知，则你实际上无法对其进行任何类型的计算。

在这种情况下，你想添加一个约束，要求WeightCalculatable为数字：

``` Swift
protocol WeightCalculatable {
  associatedtype WeightType: Numeric
  var weight: WeightType { get }
}
```

这将使字符串和猫的体重类型无效：

![""](http://cdn.xuebaonline.com/as-agp-stp1.png "")

现在，你可以编写在计算中使用权重的通用函数。 为什么不开始善加利用呢？ 这样写：

``` Swift
extension WeightCalculatable {
    static func +(left: Self, right: Self) -> WeightType {
        left.weight + right.weight 
    }
}
var heavy1 = HeavyThing()
var heavy2 = HeavyThing()
heavy1 + heavy2 // 200
var light1 = LightThing()
heavy1 + light1 // the compiler detects your coding error
```

现在，任何符合WeightCalculatable的东西都必须具有一个表示数字的WeightType。 你可以将数字功能直接添加到协议中。

另外，请注意，当你尝试添加两种不同的权重类型时，它不起作用。 这是因为+运算符具有两个相同类型的参数：Self。 这是符合协议的类型。

## 表达类型之间的关系

接下来，看看如何使用类型约束来表达类型之间的关系。

假设你要为生产工厂建模。 输入以下代码即可开始：

``` Swift
protocol Product {}

protocol ProductionLine  {
    func produce() -> Product 
}

protocol Factory {
  var productionLines: [ProductionLine] {get}
}

extension Factory {
    func produce() -> [Product] {
        var items: [Product] = []
        productionLines.forEach { items.append($0.produce()) } 
        print("Finished Production") 
        print("-------------------")
        return items
    } 
}
```

在这里，你可以为产品，生产产品的生产线以及具有生产线的工厂定义协议。 你还可以通过Produce（）扩展Factory，从而为工厂中的每条生产线生产一个产品。

接下来，定义一些具体类型：

``` Swift
struct Car: Product {
    init() {
        print("Producing one awesome Car * ") 
    }
}
struct CarProductionLine: ProductionLine { 
    func produce() -> Product {
        Car() 
    }
}
struct CarFactory: Factory {
  var productionLines: [ProductionLine] = []
}
```

现在，你具有“产品”，“生产线”和“工厂”的具体类型。 现在，你可以开始制造过程：

``` Swift
var carFactory = CarFactory() 
carFactory.productionLines = [CarProductionLine(), CarProductionLine()]
carFactory.produce()
```

使用此代码，你创建了一个工厂，为其提供了两条生产线，并告诉它一次开始生产。 到目前为止，一切都很好！ 现在尝试这个：

``` Swift
struct Chocolate: Product {
    init() {
        print("Producing one chocolate bar + ") 
    }
}
struct ChocolateProductionLine: ProductionLine { 
    func produce() -> Product {
        Chocolate()
    }
}
var oddCarFactory = CarFactory() 
oddCarFactory.productionLines = [CarProductionLine(),ChocolateProductionLine()]
oddCarFactory.produce()
```

汽车工厂的巧克力在做什么？ 这有什么意义？

汽车厂对汽车和巧克力生产线的混合没有任何问题，因为它们都符合ProductionLine。

但是FDA永远不会批准在制造汽车的同一家工厂生产的巧克力。 你如何指定每个工厂只能生产一种类型的产品？

首先，从一组新的协议重新开始，这次使用关联的类型：

``` Swift
protocol Product {
    init() 
}

protocol ProductionLine {
    associatedtype ProductType
    func produce() -> ProductType 
}

protocol Factory {
    associatedtype ProductType
    func produce() -> [ProductType] 
}
```

产品现在包含init（），因此生产线可以创建新产品，而不必知道该产品的具体类型。

你的汽车和巧克力类型保持不变：

``` Swift
struct Car: Product {
    init() {
        print("Producing one awesome Car * ") 
    }
}
struct Chocolate: Product{
    init() {
        print("Producing one Chocolate bar + ")
    }
}
```

你可以创建一个通用的单一生产线和工厂，而无需创建特定的汽车和巧克力生产线和工厂：

``` Swift
struct GenericProductionLine<P: Product>: ProductionLine { 
    func produce() -> P {
        P() 
    }
}

struct GenericFactory<P: Product>: Factory {
    var productionLines: [GenericProductionLine<P>] = []
    func produce() -> [P] {
        var newItems: [P] = []
        productionLines.forEach { newItems.append($0.produce()) } 
        print("Finished Production")
        print("-------------------")
        return newItems
    }
}
```

请注意如何使用通用类型P来确保生产线生产的产品类型与工厂相同。 你还可以将P约束为Product，以便它必须具有默认的初始化程序。

你现在可以按照以下方式创建汽车工厂：

``` Swift
var carFactory = GenericFactory<Car>() 
carFactory.productionLines = [GenericProductionLine<Car>(),GenericProductionLine<Car>()]
carFactory.produce()
```

要创建巧克力工厂，只需将<Car>更改为<Chocolate>。

# 递归协议

你可以在该协议本身内使用协议类型，这称为递归协议。 例如，你可以按以下方式对图形类型进行建模：

``` Swift
 protocol GraphNode {
  var connectedNodes: [GraphNode] { get set }
}
```

GraphNode是一种具有自身数组的setter和getter的类型。

再举一个例子，考虑一个俄罗斯套娃，也就是俄罗斯套娃。 木制娃娃是空心的，打开时会发现另一个娃娃，打开时会包含另一个娃娃，打开时会包含另一个娃娃，打开时会包含另一个娃娃。 所有年龄段的人都很有趣。

接下来，你将使用Swift类型为类似的玩偶建模。

``` Swift
protocol Matryoshka {
  var inside: Matryoshka {get set}
}
class HandCraftedMatryoshka: Matryoshka {
  var inside: Matryoshka?
}
class MachineCraftedMatryoshka: Matryoshka {
  var inside: Matryoshka?
}
```

在这里，你可以看到娃娃的两个不同类别。 一种是手工制作，另一种是机械制作。 它们的形状相似但不相同。

``` Swift
var handMadeDoll = HandCraftedMatryoshka()
var machineMadeDoll = MachineCraftedMatryoshka() 
handMadeDoll.inside = machineMadeDoll // This shouldn't fit
```

当你有两种不同类型的洋娃娃并尝试将其中一种放入另一个洋娃娃时，它不适合。 两个玩偶的比例和设计都不同。

之前，你了解了Self，在这里非常有用：

``` Swift
protocol Matryoshka: AnyObject {
  var inside: Self? { get set }
}
final class HandCraftedMatryoshka: Matryoshka {
  var inside: HandCraftedMatryoshka?
}
final class MachineCraftedMatryoshka: Matryoshka {
  var inside: MachineCraftedMatryoshka?
}
```

**请注意，在协议上添加了类约束AnyObject，并在类上添加了final关键字。**

**结构不能具有递归属性，因为它们是值类型。 因此，你必须将Matryoshkas实现为类。**

**此外，final关键字可确保子类不能覆盖属性并返回其他类型。**

通过这些更改，混合了两种类型的玩偶的代码现在无效：

``` Swift
handMadeDoll.inside = machineMadeDoll // compile error
```

再一次，Swift编译器使你免于做一些毫无意义的事情可能会导致一个微妙的，难以发现的错误。

# 异构集合

Swift集合是同构的； 也就是说，它们的元素必须是单一类型。 在本节中，你将学习如何使用特殊类型Any来模拟异构集合。 你将以WeightCalculatable为例：

``` Swift
protocol WeightCalculatable {
  associatedtype WeightType: Numeric
  var weight: WeightType { get }
}
```

尝试定义一个WeightCalculatable对象数组：

``` Swift
var array1: [WeightCalculatable] = [] // compile error
var array2: [HeavyThing] = []
var array3: [LightThing] = []
```

在这三个示例中，第一个仅指协议。 其他参考实现协议的具体类。

不幸的是，第一个示例不起作用，因为WeightCalculatable是不完整的类型。 它内部有一个孔，因为它需要你指定关联的类型。

接下来，添加VeryHeavyThing并尝试将重物和非常重的东西混合在同一数组中：

``` Swift
class VeryHeavyThing: WeightCalculatable {
    // This heavy thing only needs integer accuracy
    typealias WeightType = Int
    var weight: Int {
        9001
    } 
}
var heavyList = [HeavyThing(), VeryHeavyThing()] // error
```

Xcode现在建议你将此数组声明为[Any]：

![""](http://cdn.xuebaonline.com/as-agp-stp2.png "")

任何对象都可以代表任何类型，因此它可用于创建异构数组。 但是，它确实要付出代价。

如果你不想完全丢失有关元素的所有类型信息怎么办？ 可能可以使用as？测试每个元素，但这变得非常混乱且容易出错。 在此示例中，你知道两个重物都具有相同的关联类型Int。 你能以某种方式利用这些知识吗？

这就是抢救**类型擦除**的地方。

## 类型擦除

当你要创建不同项目的列表时，应使用每个元素将遵循的类型来定义列表。

或者，你可以采取捷径并说[Any]。 但是，如果不显式下调所有内容，你将不了解数组中的内容。

通过这种设计，你可能不愉快地发现用户添加了根本不应该存在的类型。 这是可能的，因为Any会擦除所有类型信息并现在接受任何实例。

要解决此问题，你可以创建一个自定义替代类型，该替代类型将删除大多数细节，但保留重要部分。

例如，这是一种你可以用作重物的超类的类型：

``` Swift
class AnyHeavyThing<T: Numeric>: WeightCalculatable {
    var weight: T {
        123
    } 
}
```

现在，你有了一个具体类型，任何HeavyThing都应该子类化。

``` Swift
class HeavyThing2: AnyHeavyThing<Int> {
    override var weight: Int {
        100
    } 
}

class VeryHeavyThing2: AnyHeavyThing<Int> {
    override var weight: Int {
        9001
    } 
}
```

关键的观察是，无论派生类如何，类都是具有相同大小的引用类型。 此基类类型将清除派生类的详细信息。 虽然这种方法需要一些额外的输入方式，但总比完全没有输入类型信息要好。

``` Swift
var heavyList2 = [HeavyThing2(), VeryHeavyThing2()] 
heavyList2.forEach { print($0.weight) }
```

目前，Swift不允许你定义[AnyHeavyThing <Numeric>]，因为每个元素都可能具有不同的大小和类型。 仅允许你使用具体类型或现有协议类型。

## 不透明的返回类型

类型擦除的目的是隐藏有关具体类型的不重要的细节，但仍使用协议来传达类型的功能。

你可以使用前面看到的生产工厂示例进行说明。

创建一个用于构建生产工厂的类类型。 并在此类课程中决定工厂将生产什么产品。 它负责创建生产线，库存，员工，预算...该工厂的所有麻烦。

你从事该项目的同事不必知道所有这些实现细节。 只是有一家工厂，它才能生产产品。

在实施之前，请回顾前面的示例。

``` Swift
var carFactory = GenericFactory<Car>() 
carFactory.productionLines = [GenericProductionLine<Car>(),GenericProductionLine<Car>()]
carFactory.produce()

var chocolateFactory = GenericFactory<Chocolate>() chocolateFactory.productionLines = [GenericProductionLine<Chocolate>(),GenericProductionLine<Chocolate>()] 
chocolateFactory.produce()
```

这是你建立工厂的方式，不允许你添加错误的产品。 它运行得很好，但是谁拥有工厂实例，谁都知道它是什么样的工厂。 这可能比你要公开的信息更多。

牛逼，尝试建造一个神秘的工厂。

``` Swift
func makeFactory() -> Factory { // compile error
  GenericFactory<Car>()
}
let myFactory = makeFactory()
```

噢，由于它的关联类型，Swift不允许这样使用Factory。 这正是不透明返回类型解决的问题。 通过将返回类型更改为某些Factory，错误将消失。

``` Swift
 func makeFactory() -> some Factory { // compiles!
  GenericFactory<Car>()
}
```

尽管知道你返回的确切具体类型，编译器仍将此信息隐藏在Factory协议后面。 换句话说，它知道这是GenericFactory <Car>，但是你的所有用户看到的是它是工厂。

要强调这一事实，请尝试编写以下函数：

``` Swift
func makeFactory(isChocolate: Bool) -> some Factory { 
    if isChocolate {
        return GenericFactory<Chocolate>()
    } else {
        return GenericFactory<Car>()
    }
}
```

由于编译器必须能够在编译时确定具体类型，因此不会进行编译。

只知道这是一个工厂会限制你可以执行的操作，在这种情况下，你可能想返回预先填充了某些生产线的工厂，如下所示：

``` Swift
func makeFactory(numberOfLines: Int) -> some Factory { 
    let factory = GenericFactory<Car>()
    for _ in 0..<numberOfLines {
        factory.productionLines.append(GenericProductionLine<Car>()) 
    }
    return factory
}
```

你还可以将值作为实现许多协议的对象返回：

``` Swift
func makeEquatableNumeric() -> some Numeric & Equatable {
    return 1 
}
let someVar = makeEquatableNumeric()
let someVar2 = makeEquatableNumeric()
print(someVar == someVar2) // prints true
print(someVar + someVar2) // prints 2
print(someVar > someVar2) // error
```

前两个条件正常工作。 第一个要求符合Equatable，它由返回类型明确定义。 第二行也需要数字。 但是第三个需要符合可比性。 尽管实际类型是Comparable整数，但是此信息未在返回类型中公开。

不透明的返回类型允许你使用只能用作一般约束的协议，就像普通的存在性类型一样。

# 关键点

+ 你可以将协议用作存在和通用约束。

+ 存在使你可以多态使用一种类型，例如基类。

+ 通用约束表示类型所需的功能，但是你不能多态使用它们。

+ 关联类型使协议通用。它们在保持类型严格性的同时提供了极大的灵活性。

+ 约束可以在许多情况下使用，甚至可以递归使用。

+ 类型擦除是一种在保留重要的类型信息的同时隐藏具体细节的方法。

+ 不透明的返回类型使你只能返回具体类型的协议信息。

+ 你编写的代码越通用，你将可以使用更多的地方。

这就是包装！泛型将帮助你减少代码的耦合，并减少对特定类型的依赖。协议，扩展和关联的类型将使你能够编写可组合和可重用的类型，这些类型可在各种情况下一起使用以解决更广泛的问题。
