---
title: 'Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols'
description: 'Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols'
permalink: 'Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Protocols
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 63882
date: 2020-05-28 17:24:44
---

在本系列中，你学习了三种命名类型：结构，类和枚举。 还有另一种要学习的命名类型：协议。

与其他命名类型不同，协议不会定义你直接实例化的任何内容。 相反，它们定义实际具体类型符合的接口或蓝图。 使用协议，你可以定义一组具体类型可以实现的通用属性和行为。

从本系列开始，你就一直在幕后使用协议。 在本章中，你将学习有关协议的详细信息，并了解它们为何对Swift编程至关重要。

# 协议介绍

定义协议的方式与定义任何其他命名类型一样。 在游乐场中输入以下内容：

``` Swift
protocol Vehicle {
    func accelerate()
    func stop() 
}
```

<!-- more -->

关键字协议后跟协议名称，后跟带有协议成员的花括号。 你会发现最大的区别是该协议不包含任何实现。

这意味着你无法直接实例化Vehicle：

![协议实例化失败示例](http://cdn.xuebaonline.com/sasb-protocol-stp1.png "")

而是**使用协议在其他类型上强制使用方法和属性**。 你在此处定义的概念类似于车辆的概念-它可以加速和停止。

# 协议语法

**协议可以由类，结构或枚举采用-当另一种类型采用协议时，则必须实现该协议中定义的方法和属性。 一旦类型实现了协议的所有成员，就说该类型符合该协议**。

声明你的类型符合协议的方式。 在操场上，定义一个符合Vehicle的新类：

``` Swift
class Unicycle: Vehicle {
  var peddling = false
  func accelerate() {
    peddling = true
  }
func stop() {
    peddling = false
  }
}
```

你在命名类型的名称后加上冒号，并遵循要遵循的协议名称。 该语法可能看起来很熟悉，因为它与使一个类继承自另一个类所使用的语法相同。 在此示例中，Unicycle符合Vehicle协议。

请注意，它看起来像类继承，但不是。 结构和枚举也可以使用此语法符合协议。

如果你要从上面的Unicycle类中删除stop（）的定义，由于Unicycle尚未完全符合Vehicle协议，Swift将显示错误。

![协议](http://cdn.xuebaonline.com/sasb-protocol-stp2.png "")

稍后，我们将详细介绍实现协议的细节，但是首先，你将了解定义协议时可以实现的目标。

# 协议中的方法

在上面的Vehicle协议中，你定义了一对方法，accelate（）和stop（），所有与Vehicle相符的类型都必须实现。

你可以在协议上定义方法，就像在带参数和返回值的任何类，结构或枚举上定义方法一样：

``` Swift
enum Direction {
  case left
    case right
}
protocol DirectionalVehicle {
    func accelerate()
    func stop()
    func turn(_ direction: Direction) 
    func description() -> String
}
```

有一些差异需要注意。 你实际上并未定义方法的任何实现。 这是为了帮助你强制接口和代码严格分离，因为该协议本身并不假设任何符合该协议的类型的实现细节。

另外，协议中定义的方法不能包含默认参数：

``` Swift
protocol OptionalDirectionVehicle {
    // Build error!
    func turn(_ direction: Direction = .left) 
}
```

要将方向作为可选参数提供，你将明确定义方法的两个版本：

``` Swift
protocol OptionalDirectionVehicle {
    func turn()
    func turn(_ direction: Direction) 
}
```

请记住，当你遵循OptionalDirectionVehicle时，将需要同时实现turn()和turn(_ :)。 如果你仅使用默认参数实现一个函数，则Xcode不会满意，它将要求你添加其他方法。

>注意：这并不是真正创建带有可选参数的方法。 要完全实现这一点，协议扩展是你想要的。 你将在第25章“基于协议的编程”中了解更多有关它们的信息。

# 协议中的属性

你还可以在协议中定义属性：

``` Swift
protocol VehicleProperties {
  var weight: Int { get }
  var name: String { get set }
}
```

在协议中定义属性时，必须将它们显式标记为get或get set，这与声明计算属性的方式有些相似。 但是，就像方法一样，你不包含任何属性实现。

你必须在属性上标记get和set的事实表明，协议不知道属性的实现，这意味着它不对属性的存储进行任何假设。 你可以将这些属性要求实现为计算属性或常规变量。 协议所要求的全部是，如果该属性仅具有get要求，则该属性是可读的；如果同时具有get和set要求，则该属性是可读且可写的。

即使该属性仅具有获取要求，你仍然可以将其实现为存储属性或可读写计算属性，因为协议中的要求仅为最低要求。

# 协议中的初始化器

虽然协议本身无法初始化，但是它们可以声明符合类型的初始化器：

``` Swift
protocol Account {
  var value: Double { get set }
  init(initialAmount: Double)
  init?(transferAccount: Account)
}
```

在上面的“帐户”协议中，你将两个初始化程序定义为协议的一部分。 这的行为与你预期的很相似，因为任何符合Account的类型都必须具有这些初始化程序。 **如果你使用带有类类型的必需初始化程序来遵守协议，则这些初始化程序必须使用required关键字**：

``` Swift
class BitcoinAccount: Account {
  var value: Double
  required init(initialAmount: Double) {
    value = initialAmount
  }
    required init?(transferAccount: Account) { 
        guard transferAccount.value > 0.0 else {
            return nil
        }
        value = transferAccount.value 
    }
}
var accountType: Account.Type = BitcoinAccount.self
let account = accountType.init(initialAmount: 30.00) 
let transferAccount = accountType.init(transferAccount: account)!
```

# 协议继承

车辆协议包含一组可应用于任何类型车辆的方法，例如自行车，汽车，雪地摩托甚至飞机！

你可能希望定义一个协议，该协议包含车辆的所有质量，但也特定于带轮车辆。 为此，你可以拥有从其他协议继承的协议，就像你可以拥有从其他类继承的类一样：

``` Swift
protocol WheeledVehicle: Vehicle {
  var numberOfWheels: Int { get }
  var wheelSize: Double { get set }
}
```

现在，你标记为符合WheeledVehicle协议的任何类型都将在括号中定义所有成员，以及Vehicle的所有成员。 与子类一样，你标记为WheeledVehicle的任何类型与协议Vehicle都具有is-a关系。

# 实现协议

如你所见，当你声明自己的类型符合协议时，你必须实现协议中声明的所有要求：

``` Swift
class Bike: Vehicle {
  var peddling = false
  var brakesApplied = false
  func accelerate() {
    peddling = true
    brakesApplied = false
  }
  func stop() {
    peddling = false
    brakesApplied = true
  }
}
```

Bike类实现了Vehicle中定义的所有方法。 如果未定义accelerator()或stop()，则会收到一个生成错误。

**定义协议可确保任何符合协议的类型都将具有你在协议中定义的所有成员**。

# 实现属性

回想一下，协议中的属性附带有一个get（可能）和set的要求，并且一致的类型必须至少符合这些要求。

将自行车升级到轮式车辆：

``` Swift
class Bike: WheeledVehicle {
    let numberOfWheels = 2
    var wheelSize = 16.0 
    var peddling = false
    var brakesApplied = false
    func accelerate() {
        peddling = true
        brakesApplied = false
    }
    func stop() {
        peddling = false
        brakesApplied = true
    }
}
```

numberOfWheels常数满足get要求。 wheelSize变量同时满足获取和设置要求。

协议只要你实现它们，就不在乎你如何实现它们的要求。 你可以选择实现获取要求的方法是：

+ 常量存储的属性。
+ 变量存储属性。
+ 只读的计算属性。
+ 读写计算属性。

用于实现get和set属性的选择仅限于变量存储属性或读写计算属性。

# 协议中的关联类型

你还可以将关联的类型添加为协议成员。 在协议中使用associatedtype时，你只是在说明该协议中使用了一种类型，而没有指定其应为哪种类型。 由协议采用者决定确切的类型。

这使你可以为类型赋予任意名称，而无需确切指定最终将成为哪种类型：

``` Swift
protocol WeightCalculatable {
  associatedtype WeightType
  var weight: WeightType { get }
}
```

这将权重类型的决定委托给具体的实现。 你可以在下面的两个示例中查看其工作方式：

``` Swift
class HeavyThing: WeightCalculatable {
    // This heavy thing only needs integer accuracy
    typealias WeightType = Int
    var weight: Int { 100 }
}

class LightThing: WeightCalculatable {
    // This light thing needs decimal places
    typealias WeightType = Double
    var weight: Double { 0.0025 } 
}
```

在这些示例中，你将使用typealias明确显示关联的类型。 通常不需要这样做，因为编译器经常可以推断出类型。 在前面的示例中，权重的类型使关联类型明确，因此你可以删除类型别名。

你可能已经注意到，WeightCalculatable的合同现在会根据采用类型中相关类型的选择而变化。 请注意，这会阻止你将协议用作简单的变量类型，因为编译器无法提前知道WeightType是什么。

``` Swift
// Build error!
// protocol 'WeightCalculatable' can only be used as a generic 
// constraint because it has Self or associated type requirements.
let weightedThing: WeightCalculatable = LightThing()
```

你将在下一章中全面了解泛型约束。

# 实现多种协议

一个类只能从单个类继承-这是“单个继承”的属性。 相反，可以使一个类（结构或枚举）符合你想要的多种协议！

假设没有创建从Vehicle继承的WheeledVehicle协议，而是让Wheeled拥有了自己的协议。

``` Swift
protocol Wheeled {
  var numberOfWheels: Int { get }
  var wheelSize: Double { get set }
}
class Bike: Vehicle, Wheeled {
  // Implement both Vehicle and Wheeled
}
```

协议支持“多重一致性”，因此你可以将任意数量的协议应用于定义的类型。 在上面的示例中，Bike类现在必须实现Vehicle和Wheeled协议中定义的所有成员。

# 协议组成

在上一节中，你学习了如何实现多种协议。 有时你需要一个函数来采用必须符合多种协议的数据类型。 这就是协议组成的来源。想象一下，你需要一个需要访问Vehicle协议的stop（）函数和Wheeled协议的numberOfWheels属性的函数。 你可以使用＆组成运算符执行此操作。

``` Swift
func roundAndRound(transportation: Vehicle & Wheeled) { 
    transportation.stop()
    print("The brakes are being applied to
        \(transportation.numberOfWheels) wheels.")
}

roundAndRound(transportation: Bike())
// The brakes are being applied to 2 wheels.
```

# 扩展和协议一致性

你还可以使用带有扩展名的协议。 这样，你就可以将协议一致性添加到不一定要拥有的类型中。 考虑下面的简单示例，该示例向String添加了自定义协议：

``` Swift
protocol Reflective {
  var typeName: String { get }
}
extension String: Reflective {
    var typeName: String {
        "I’m a String"
    } 
}
let title = "Swift Apprentice!" 
title.typeName // I’m a String
```

即使String是标准库的一部分，你仍然可以使String符合Reflective协议。

使用扩展的另一个优点是，你可以将**协议采用与必要的方法和属性很好地组合在一起，而不必让大量的协议弄乱你的类型定义**。

以下代码将Vehicle的采用划分为AnotherBike的扩展：

``` Swift
class AnotherBike: Wheeled { 
    var peddling = false
    let numberOfWheels = 2
    var wheelSize = 16.0
}

extension AnotherBike: Vehicle {
    func accelerate() {
            peddling = true
    }
    func stop() {
        peddling = false
    }
}
```

该扩展对通过Vehicle加速和停止。 如果要从AnotherBike中删除Vehicle协议，则只需删除完全采用该协议的扩展名即可。

>注意：**你不能在扩展程序中声明存储的属性**。 你仍然可以在原始类型声明中声明存储的属性，并使协议符合扩展中采用的任何协议，但是由于扩展的限制，在扩展中完全实现协议并不总是可能的。

# 要求参考语义

值类型（结构和枚举）和引用类型（类）都可以采用协议，因此你可能想知道协议是否具有引用或值语义。

事实是……这取决于！ 如果你将一个类或结构的实例分配给协议类型的变量，则该实例或结构的实例将表达与其定义的类型相匹配的值或引用语义。

为了说明，请以下面的简单命名示例协议为例，该协议以结构和类的形式实现：

``` Swift
protocol Named {
    var name: String { get set }
}

class ClassyName: Named {
  var name: String
  init(name: String) {
self.name = name }
}

struct StructyName: Named {
  var name: String
}
```

如果要给Named变量分配引用类型的实例，则会看到引用语义的行为：

``` Swift
var named: Named = ClassyName(name: "Classy")
var copy = named
named.name = "Still Classy" named.name // Still Classy 
copy.name // Still Classy
```

同样，如果分配值类型的实例，则会看到值语义的行为：

``` Swift
named = StructyName(name: "Structy")
copy = named
named.name = "Still Structy?" named.name // Still Structy? 
copy.name // Structy
```

情况并非总是如此清晰。 你会注意到，在大多数情况下，**Swift将优先使用值语义而不是引用语义**。 如果你要设计一个协议专门供类采用，那么最好在将该协议用作类型时要求Swift使用引用语义。

``` Swift
protocol Named: class {
  var name: String { get set }
}
```

通过使用上面的类约束，你指示仅类可以采用此协议。 这清楚表明Swift应该使用引用语义。

>注意：你可以在第24章“值类型和值语义”中了解有关值类型和引用类型语义之间区别的更多信息。

# 协议：不止语法

如你所见，协议使你可以为一致性类型指定许多语法要求。 但是，它们不能（也永远不会）让你指定编译器可以检查的所有可能的要求。 例如，协议可能需要为操作指定复杂性要求（O（1）vs O（n））。 它只能通过在注释中说明来做到这一点。 对你而言，重要的是要理解协议正确符合的所有要求。

# 标准库中的协议

Swift标准库广泛使用协议，可能会让你感到惊讶。 了解协议在Swift中所扮演的角色可以帮助你编写干净，解耦的“ Swifty”代码。

## Equatable

一些最简单的代码使用==运算符比较两个整数：

``` Swift
let a = 5
let b = 5
a == b // true
```

你可以对字符串执行相同的操作：

``` Swift
let swiftA = "Swift"
let swiftB = "Swift"
swiftA == swiftB // true
```

但是你不能在任何类型上使用==。 假设你编写了一个类来代表团队的记录，并想确定两个记录是否相等：

``` Swift
class Record {
    var wins: Int
    var losses: Int
    init(wins: Int, losses: Int) { 
        self.wins = wins
        self.losses = losses 
    }
}

let recordA = Record(wins: 10, losses: 5)
let recordB = Record(wins: 10, losses: 5)
recordA == recordB // Build error!
```

你不能将==运算符应用于刚定义的类。 但是，对等式运算符的使用并不仅仅是为Int和String之类的标准Swift类型保留的“魔术”； 它们是结构，就像Record。 这意味着你可以将此操作符的使用扩展到你自己的代码！

Int和String都符合标准库中的Equatable协议，该协议定义了一个静态方法：

``` Swift
protocol Equatable {
    static func ==(lhs: Self, rhs: Self) -> Bool 
}
```

你可以像下面这样将此协议应用于Record：

``` Swift
extension Record: Equatable {
    static func ==(lhs: Record, rhs: Record) -> Bool {
        lhs.wins == rhs.wins &&
        lhs.losses == rhs.losses 
    }
}
```

在这里，你正在定义（或重载）==运算符以比较两个Record实例。 在这种情况下，如果两个记录的胜负次数相同，则它们相等。

现在，你可以使用==运算符比较两种Record类型，就像使用String或Int一样：

``` Swift
recordA == recordB // true
```

## Comparable

相等的子协议是可比较的：

``` Swift
protocol Comparable: Equatable {
    static func <(lhs: Self, rhs: Self) -> Bool 
    static func <=(lhs: Self, rhs: Self) -> Bool 
    static func >=(lhs: Self, rhs: Self) -> Bool 
    static func >(lhs: Self, rhs: Self) -> Bool
}
```

除了等于运算符==，Comparable还要求你为类型重载比较运算符<，<=，>和> =。 实际上，你通常只提供<，因为标准库可以使用==和<的实现为你实现<=，>和> =。

使记录采用可比性，如下所示：

``` Swift
extension Record: Comparable {
    static func <(lhs: Record, rhs: Record) -> Bool {
        if lhs.wins == rhs.wins {
            return lhs.losses > rhs.losses 
        }
        return lhs.wins < rhs.wins 
    }
}
```

如果第一条记录的获胜次数少于第二条记录，或者获胜次数相等但损失次数更多，则此实现<认为一条记录比另一条记录少。

## “free”功能

虽然==和<本身很有用，但是Swift库为符合Equatable和Comparable的类型提供了许多“免费”函数和方法。

对于你定义的任何包含Comparable类型的集合（例如Array），你都可以访问标准库一部分的方法，例如sort（）：

``` Swift
let teamA = Record(wins: 14, losses: 11)
let teamB = Record(wins: 23, losses: 8)
let teamC = Record(wins: 23, losses: 9)
var leagueRecords = [teamA, teamB, teamC]
leagueRecords.sort()
// {wins 14, losses 11} 
// {wins 23, losses 9}
// {wins 23, losses 8}
```

由于你为Record提供了比较两个值的功能，因此标准库包含了对Records数组进行排序所需的所有信息！ 如你所见，实现Comparable和Equatable可为你提供大量工具：

``` Swift
leagueRecords.max() // {wins 23, losses 8} 
leagueRecords.min() // {wins 14, losses 11} 
leagueRecords.starts(with: [teamA, teamC]) // true 
leagueRecords.contains(teamA) // true
```

## 其他有用的协议

虽然学习整个Swift标准库对于你作为Swift开发人员的成功并不重要，但还有一些其他重要协议对几乎所有项目都是有用的。

### Hashable

哈希协议是Equatable的子协议，它是你要用作字典关键字的任何类型的要求。 对于值类型（结构，枚举），编译器将自动为你生成Equatable和Hashable一致性，但是对于引用（类）类型，你需要自己进行操作。 幸运的是，这很容易。

哈希值可帮助你快速查找集合中的元素。 为了使其工作，等于==的值还必须具有相同的哈希值。 由于哈希值的数量有限，因此非相等值具有相同哈希值的可能性很有限。 哈希值背后的数学非常复杂，但是你可以让Swift为你处理细节。 只要确保你使用哈希器将==比较中包含的所有内容也合并在一起即可。

例如：

``` Swift
class Student {
    let email: String
    let firstName: String
    let lastName: String
    init(email: String, firstName: String, lastName: String) { 
        self.email = email
        self.firstName = firstName
        self.lastName = lastName
    } 
}

extension Student: Hashable {
    static func ==(lhs: Student, rhs: Student) -> Bool {
        lhs.email == rhs.email && lhs.firstName == rhs.firstName && lhs.lastName == rhs.lastName
    }
    func hash(into hasher: inout Hasher) { 
        hasher.combine(email) hasher.combine(firstName) hasher.combine(lastName)
    } 
}
```

你使用电子邮件，名字和姓氏作为平等的基础。 哈希的一个很好的实现是使用所有这些属性，方法是使用传入的Hasher类型将它们组合在一起。hash对正确组合值进行了繁重的工作。

现在，你可以将学生类型用作字典中的键：

``` Swift
let john = Student(email: "johnny.appleseed@apple.com", firstName: "Johnny", lastName: "Appleseed")
let lockerMap = [john: "14B"]
```

### CustomStringConvertible

非常方便的CustomStringConvertible协议可帮助你记录和调试实例。

当你在诸如Student之类的实例上调用print（）时，Swift打印出模糊的描述：

``` Swift
print(john)
// Student
```

好像你还不知道那样！ CustomStringConvertible协议仅具有描述属性要求。 此属性可自定义实例在print（）语句和调试器中的显示方式：

``` Swift
protocol CustomStringConvertible {
  var description: String { get }
}
```

通过在Student类型上采用CustomStringConvertible，可以提供更具可读性的表示形式。

``` Swift
extension Student: CustomStringConvertible {
  var description: String {
    "\(firstName) \(lastName)"
  }
}
print(john)
// Johnny Appleseed
```

CustomDebugStringConvertible与CustomStringConvertible相似：它的行为与CustomStringConvertible完全相同，只是它还定义了debugDescription。 结合使用CustomDebugStringConvertible和debugPrint（）可以仅在调试配置中打印到输出。


# 关键点

+ 协议定义了类，结构和枚举可以采用的契约。

+ 通过采用协议，要求通过以下方式符合协议的类型实现协议的所有方法和属性。

+ 类型可以采用任何数量的协议，从而允许子类不允许的准多重继承。

+ 你可以将扩展名用于协议采用和一致性。

+ Swift标准库广泛使用协议。 你可以使用许多例如你自己命名的类型上的Equatable和Hashable。
