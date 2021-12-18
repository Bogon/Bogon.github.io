---
title: 'Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)'
description: 'Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)'
permalink: 'Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding
  和 Decoding Types,内存管理,值类型和值语义,面向协议编程(OOP)
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 面向协议编程(OOP)
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 21354
date: 2020-06-21 16:20:38
---

苹果公司宣布Swift为第一种面向协议的编程语言。 引入协议扩展使此声明成为可能。

尽管协议从一开始就已在Swift中出现，但此公告以及Apple对协议进行了重载的标准库的更改，都会影响你对类型的思考方式。 扩展协议是全新编程风格的关键！

简而言之，**面向协议的编程强调对协议进行编码，而不是对特定的类，结构或枚举进行编码**。 它通过**打破旧的协议规则并允许你在协议本身上编写协议实现来实现此目的**。

本章向你介绍协议扩展和面向协议的编程的功能。 在此过程中，你将学习如何使用默认实现，类型约束，mixin和特征来极大地简化代码。

<!-- more -->

# 引入协议扩展

你已经在前面的章节中看到了扩展程序。 它们使你可以向类型添加其他方法和计算属性：

``` Swift
extension String {
  func shout() {
    print(uppercased())
  }
}
"Swift is pretty cool".shout()
```

在这里，你要扩展String类型本身以添加一个新方法。 你可以扩展任何类型，包括你自己没有写的类型。 一个类型上可以有任意数量的扩展名。

你可以使用以下语法定义协议扩展：

``` Swift
protocol TeamRecord {
  var wins: Int { get }
  var losses: Int { get }
  var winningPercentage: Double { get }
}
extension TeamRecord {
  var gamesPlayed: Int {
    wins + losses
  }
}
```

与扩展类，结构或枚举的方式类似，使用关键字扩展名，后跟要扩展的协议的名称。 在扩展名的花括号内，你可以在协议上定义其他成员。

与协议本身相比，协议扩展定义的最大区别在于扩展包括成员的实际实现。 在上面的示例中，你定义了一个名为gamePlayed的新计算属性，该属性将获胜和失败结合起来以返回已玩游戏的总数。

尽管你尚未为采用该协议的具体类型编写代码，但是可以在其扩展名中使用协议的成员。 这是因为编译器知道，任何符合TeamRecord的类型都将具有TeamRecord所需的所有成员。

现在，你可以编写一个采用TeamRecord的简单类型，并使用gamesPlayed而不需要重新实现它。

``` Swift
struct BaseballRecord: TeamRecord {
  var wins: Int
  var losses: Int
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses)
  }
}
let sanFranciscoSwifts = BaseballRecord(wins: 10, losses: 5) sanFranciscoSwifts.gamesPlayed // 15
```

由于BaseballRecord符合TeamRecord，因此你可以访问在协议扩展中定义的gamesPlayed。

你可以看到协议扩展对定义协议的“自由”行为有多大用处-但这仅仅是开始。 接下来，你将学习协议扩展如何为协议本身的成员提供实现。

## 默认实现

协议为采用该协议的任何类型定义合同。 如果协议定义了方法或属性，则采用该协议的任何类型都必须实现该方法或属性。 考虑另一个TeamRecord类型的示例：

``` Swift
struct BasketballRecord: TeamRecord {
  var wins: Int
  var losses: Int
  let seasonLength = 82
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses)
  }
}
```

BasketballRecord和BaseballRecord都具有winningPercentage的相同实现。 你可以想象大多数TeamRecord类型将以相同的方式实现此属性。 这可能会导致很多重复的代码。

幸运的是，Swift有一个快捷方式：

``` Swift
extension TeamRecord {
  var winningPercentage: Double {
           Double(wins) / Double(wins + losses)
  }
}
```

虽然这很像你在上一个示例中定义的协议扩展，但是区别在于winningPercentage是TeamRecord协议本身的成员，而gamesPlayed不是。 在扩展中实现协议成员将为该成员创建默认实现。

你已经看到了函数的默认参数，这类似于：如果你未在类型中实现winingPercentage，它将使用协议扩展提供的默认实现。

换句话说，你不再需要在采用TeamRecord的类型上显式实现winningPercentage：

``` Swift
struct BasketballRecord: TeamRecord {
  var wins: Int
  var losses: Int
  let seasonLength = 82
}
let minneapolisFunctors = BasketballRecord(wins: 60, losses: 22) minneapolisFunctors.winningPercentage
```

默认实现使你可以向协议添加功能，同时大大减少重复代码或“样板”代码。

默认实现不会阻止类型单独实现协议成员。 某些团队记录的获胜百分比公式可能略有不同，例如一项可能将平局包括在内的运动：

``` Swift
struct HockeyRecord: TeamRecord {
  var wins: Int
  var losses: Int
  var ties: Int
  // Hockey record introduces ties, and has
  // its own implementation of winningPercentage
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses + ties)
  }
}
```

现在，如果你在HockeyRecord值类型的TeamRecord上调用winningPercentage，它将根据获胜，失败和平局来计算获胜百分比。

如果你在没有自己实现的其他类型上调用winningPercentage，则它将退回到默认实现：

# 了解协议扩展调度

定义协议扩展时要牢记一个重要的陷阱。 如果**类型在协议扩展中定义了方法或属性，而未在协议本身中声明，则静态分派将发挥作用。 这意味着所使用方法的属性的实现取决于变量或常量的类型，而不是实例的动态类型**。

假设你定义了一个类似于TeamRecord的协议，称为WinLoss：

``` Swift
protocol WinLoss {
  var wins: Int { get }
  var losses: Int { get }
}
```

...并声明以下扩展名：

``` Swift
extension WinLoss {
    var winningPercentage: Double {
        Double(wins) / Double(wins + losses)
    } 
}
```

...被以下类型采用：

``` Swift
struct CricketRecord: WinLoss {
  var wins: Int
  var losses: Int
  var draws: Int
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses + draws)
  }
}
```

观察使用获胜的百分比属性时会发生什么：

``` Swift
let miamiTuples = CricketRecord(wins: 8, losses: 7, draws: 1)
let winLoss: WinLoss = miamiTuples
miamiTuples.winningPercentage // 0.5 
winLoss.winningPercentage // 0.53 !!!
```

即使miamiTuples和winLoss包含相同的实例，你也会看到不同的结果。 这是因为静态分派基于常量的类型选择实现：miamiTuples的CricketRecord和winLoss的WinLoss。

如果WinLoss协议中定义了winningPercentage，则扩展程序不会添加新成员。 它只是为协议中已声明的成员提供默认实现。 在这种更常见的情况下，使用动态分配，实现的选择取决于实例的实际类型，而不是常量或变量的类型。

你已经在第14章“高级类”中看到了动态调度的实际效果，它是用于覆盖属性和类层次结构中的方法的调度方法。

# 类型约束

对于TeamRecord上的协议扩展，你可以在winningPercentage和gamePlayed的实现中使用TeamRecord协议的成员，例如获胜和失败。 就像在struct，class或enum的扩展中一样，你编写代码的方式就像是在扩展类型的内部编写一样。

当你编写协议扩展时，还需要考虑其他方面：采用类型也可以是任意数量的其他类型。 换句话说，当一个类型采用TeamRecord时，它也很可能也采用Comparable，CustomStringConvertible，甚至是你自己编写的另一个协议！

使用Swift，你可以编写仅在采用协议的类型也是你指定的另一种类型时使用的扩展名。 通过在协议扩展上使用类型约束，你可以在扩展实现内使用其他类型的方法和属性。

采取以下类型约束示例：

``` Swift
protocol PostSeasonEligible {
  var minimumWinsForPlayoffs: Int { get }
}
extension TeamRecord where Self: PostSeasonEligible {
  var isPlayoffEligible: Bool {
    wins > minimumWinsForPlayoffs
  }
}
```

你有一个新的协议PostSeasonEligible，该协议定义了minimumWinsForPlayoffs属性。 神奇之处在于TeamRecord的扩展名，该扩展名对Self：PostSeasonEligible具有类型约束，它将对所有也采用PostSeasonEligible的TeamRecord采用者应用扩展名。

将类型约束应用于TeamRecord扩展意味着在扩展中，自身被称为TeamRecord和PostSeasonEligible。 这意味着你可以使用在这两种类型上定义的属性和方法。 你还可以使用类型约束在特定类型组合上创建默认实现。 考虑一下HockeyRecord的情况，它在其记录中引入了联系以及winningPercentage的另一种实现方式：

``` Swift
struct HockeyRecord: TeamRecord {
  var wins: Int
  var losses: Int
  var ties: Int
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses + ties)
  }
}
```

在比冰球更多的比赛中都可以打领带，因此你可以制定一种协议，而不必将其与一项特定的运动相结合：

``` Swift
 protocol Tieable {
  var ties: Int { get }
}
```

使用类型约束，你还可以为winingPercentage设置默认实现，特别是对于同时为TeamRecord和Tieable的类型：

``` Swift
extension TeamRecord where Self: Tieable {
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses + ties)
  }
}
```

现在，无论是TeamRecord还是Tieable的任何类型，都无需显式实现将平局因素考虑在内的winningPercentage：

``` Swift
struct RugbyRecord: TeamRecord, Tieable {
  var wins: Int
  var losses: Int
  var ties: Int
}
let rugbyRecord = RugyRecord(wins: 8, losses: 7, ties: 1) 
rugbyRecord.winningPercentage // 0.5
```

你可以看到，结合使用协议扩展和受约束的协议扩展，可以提供适用于非常特殊情况的默认实现。

# 面向协议的好处

面向协议编程的好处到底是什么？

## 编程接口，而不是实现

通过专注于协议而不是实现，你可以将代码协定应用于任何类型，甚至包括不支持继承的协定。 假设你要实现TeamRecord作为基类。

``` Swift
class TeamRecordBase {
  var wins = 0
  var losses = 0
  var winningPercentage: Double {
    Double(wins) / Double(wins + losses)
  }
}
// Will not compile: inheritance is only possible with classes.
struct BaseballRecord: TeamRecordBase {
}
```

此时，只要你处理团队记录，你就将被困在课程上。 如果要在关系中添加关系，则必须在子类中添加关系：

``` Swift
class HockeyRecord: TeamRecordBase {
  var ties = 0
  override var winningPercentage: Double {
    Double(wins) / Double(wins + losses + ties)
  }
}
```

或者，你必须创建另一个基类，从而加深你的类层次结构：

``` Swift
class TieableRecordBase: TeamRecordBase {
  var ties = 0
  override var winningPercentage: Double {
    Double(wins) / Double(wins + losses + ties)
  }
}
class HockeyRecord: TieableRecordBase {
}
class CricketRecord: TieableRecordBase {
}
```

反之，如果你想处理任何有赢，输和平的记录，那么通常会使用最低分母的基类进行编码：

``` Swift
extension TieableRecordBase {
  var totalPoints: Int {
    (2 * wins) + (1 * ties)
  }
}
```

这迫使你“编码为实现，而不是接口”。 如果你想比较两支球队的战绩，那么你所关心的就是胜利与失败。 不过，对于班级，你需要对碰巧定义赢和输的特定基类进行操作。

我敢肯定，如果你突然需要支持某些运动的部门得失，那你会不想听呢！ ：]

使用协议，你无需担心特定的类型，甚至不必担心事物是类还是结构。 你只关心某些通用属性和方法的存在。

## 特性，混合和多重继承

谈到支持一次性的功能（例如分区的胜利或失败），协议的真正好处之一是它们允许多种继承形式。

创建类型时，可以使用协议用所需的所有独特特征来装饰它：

``` Swift
protocol TieableRecord {
  var ties: Int { get }
}
protocol DivisionalRecord {
  var divisionalWins: Int { get }
  var divisionalLosses: Int { get }
}
protocol ScoreableRecord {
  var totalPoints: Int { get }
}
extension ScoreableRecord where Self: TieableRecord, Self: TeamRecord {
  var totalPoints: Int {
    (2 * wins) + (1 * ties)
  }
}

struct NewHockeyRecord: TeamRecord, TieableRecord, DivisionalRecord, CustomStringConvertible, Equatable {
    var wins: Int
    var losses: Int
    var ties: Int
    var divisionalWins: Int
    var divisionalLosses: Int
    var description: String {
        "\(wins) - \(losses) - \(ties)" 
    }
}
```

NewHockeyRecord是一个TeamRecord和一个TieableRecord，可跟踪部门的得失，与==一起使用并定义其自己的CustomStringConvertible描述！

以这种方式使用协议被描述为使用特征或混合。 这些术语反映你可以使用协议和协议扩展将其他行为或特征添加或混合到类型中。

## 简单

当你编写计算所得的属性来计算获胜百分比时，你只需要获胜，亏损和平局。 编写代码以打印人的全名时，只需要一个名字和姓氏即可。

如果要编写代码以在更复杂的对象内执行这些任务，则很容易犯错误将其与不相关的代码耦合：

``` Swift
var winningPercentage: Double {
  var percent = Double(wins) / Double(wins + losses)
  // Oh no! Not relevant!
    above500 = percent > 0.5 return percent
}
```

出于某种原因，板球可能需要高于500的财产，而冰球则不需要。 但是，这使得功能非常特定于特定运动。

你看到了此功能的协议扩展版本多么简单：它完成了一次计算。 具有可以在所有类型中使用的简单默认实现，可以将通用代码放在一个地方。

你无需知道采用协议的类型是HockeyRecord，StudentAthlete或类，struct或枚举。 由于协议扩展中的代码仅在协议本身上运行，因此符合该协议的任何类型也将符合你的代码。

你会在编码的生活中一遍又一遍地发现，简单的代码会减少错误的代码。 ：]

# 为什么Swift是面向协议的语言

你已经了解了协议和协议扩展的功能，但是你可能想知道：Swift是一种面向协议的语言，这到底意味着什么？

协议扩展极大地影响了你编写表达性代码和解耦代码的能力-协议扩展支持的许多设计模式都反映在Swift语言本身中。

首先，你可以将面向协议的编程与面向对象的编程进行对比。 后者专注于对象的概念以及它们如何相互作用。 因此，该类是所有面向对象语言的中心。

尽管类是Swift的一部分，但你会发现它们只是标准库的一小部分。 相反，Swift主要建立在结构和协议的集合上。 你可以在许多Swift的核心类型（例如Int和Array）中看到这一点的重要性。 考虑数组的定义：

``` Swift
// From the Swift standard library
public struct Array<Element> : RandomAccessCollection,
MutableCollection {
// ...
}
```

数组是结构的事实当然意味着它是一种值类型，但这也意味着它不能被子类化，也不能是超类。 Array不是从通用基类继承行为，而是采用协议来定义其许多更通用的功能。

数组是一个MutableCollection，它也是一个Collection。多亏协议扩展，Array可以通过成为Collection来获得每个Collection共有的众多属性和方法，例如first，count或isEmpty。
由于具有通用约束的许多协议扩展，假设该元素的类型符合Equatable，则可以split（）一个Array或找到index（of :)一个元素。

这些实现都在Swift标准库的协议扩展中定义。通过在协议扩展中实现它们，可以将这些行为视为混合，而无需在每种采用的类型上明确地重新实现。

定义行为的修饰使Array和Dictionary（又一个Collection）在某些方面相似，而在其他方面有所不同。如果Swift使用子类化，则Dictionary和Array要么共享一个公共基类，要么根本不共享。使用协议和面向协议的编程，你可以将它们都视为集合。

通过围绕协议而不是特定的类，结构或枚举进行设计，你的代码将立即具有更高的可移植性和解耦性-方法现在适用于多种类型，而不是一种特定类型。你的代码也更具凝聚力，因为它仅对你要扩展的协议中的属性和方法及其类型约束起作用。并且它忽略了符合它的任何类型的内部细节。

了解面向协议的编程是一项强大的技能，它将帮助你成为更好的Swift开发人员，并为你提供思考如何设计代码的新方法。

>注意：更多中立的Swift开发人员会将Swift称为“多范式”语言。 你已经了解了继承和面向对象的技术，现在已经了解了面向协议的编程； Swift可以轻松处理这两个问题！

协议和面向协议的编程是Swift语言的基础。例如，泛型系统使用协议来精确指定所使用的泛型类型的类型要求。如果在某些语言中具有m个数据结构和对这些数据结构进行操作的n种算法，则需要m * n个代码块来实现它们。使用Swift，使用协议，你只需要编写m + n个块即可，无需重复。面向协议的编程为你提供了典型的面向对象编程的所有优点，同时又避免了大多数陷阱。

下次你面对编程任务时，请查看是否可以找出正在使用的基础协议。这样做将使你获得一个更灵活和可扩展的解决方案。最初，你可能会发现先进行具体工作然后提取协议会更容易。随着你的经验越来越丰富，你甚至可以在开始编码之前就开始看到协议，就像Neo看到红色连衣裙一样容易。

# 关键点

+ 协议扩展使你可以编写协议的实现代码，甚至可以在协议要求的方法上编写默认实现。

+ 协议扩展是面向协议的编程的主要驱动程序，可让你编写可在符合协议的任何类型上运行的代码。

+ 协议扩展上的类型约束提供了更多的上下文，并使你可以编写更专业的实现。

+ 你可以使用特征和混合来装饰类型，以扩展行为而无需继承。

+ 协议使用得当，会促进代码的重用和封装。