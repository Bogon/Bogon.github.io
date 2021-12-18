---
title: 'Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics'
description: 'Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics'
permalink: 'Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Generics
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 18682
date: 2020-05-28 18:14:55
---

事实是，你已经了解泛型。 每次使用Swift数组时，你都在使用泛型。 这甚至可能给人一种印象，即泛型是关于集合的，但是这种印象既不正确也不具有误导性。 在本章中，你将学习泛型的基础知识，从而为理解如何编写自己的泛型代码奠定坚实的基础。 最后，你将使用这个新视角回头看看Swift标准库中的泛型类型-数组，字典和可选类。

# 泛型简介

首先，你将考虑如何为宠物及其饲养员建模。 你可以为每个变量使用不同的值，或者为每个变量使用不同的类型。 你会发现，通过使用类型而不是值，Swift类型检查器可以在编译时对代码进行推理。 你不仅需要在运行时减少工作量，而且还可以捕获如果仅使用值就可能陷入雷达之下的问题。 你的代码也运行得更快。


<!-- more -->

## 其他值定义的值

假设你经营一家只出售猫狗的宠物店，并且你想使用Swift游乐场为该业务建模。 首先，定义一个类型PetKind，它可以容纳与你出售的两种宠物相对应的两个可能的值：

``` Swift
enum PetKind {
    case cat
    case dog
}
```

到目前为止，一切都很好。 现在，假设你不仅要建模动物，还要建模照顾宠物的雇员，宠物饲养者。 你的员工非常专业。 有些饲养员只照看猫，而另一些只照看狗。

因此，你定义了一个KeeperKind类型，如下所示：

``` Swift
 struct KeeperKind {
  var keeperOf: PetKind
}
```

然后，你可以通过以下方式初始化catKeeper和dogKeeper：

``` Swift
let catKeeper = KeeperKind(keeperOf: .cat) 
let dogKeeper = KeeperKind(keeperOf: .dog)
```

关于你如何建立店铺模型，有两点需要注意。

首先，通过改变类型的值来代表不同种类的宠物和饲养员。宠物种类只有一种（PetKind），饲养员种类只有一种（KeeperKind）。不同种类的宠物仅由PetKind类型的不同值表示，就像不同种类的饲养者由KeeperKind类型的不同值表示一样。

其次，一个可能值范围确定了另一个可能值范围。具体地说，可能的KeeperKind值的范围反映了可能的PetKind值的范围。

如果你的商店开始出售鸟类，你只需在PetKind枚举中添加.bird成员，即可立即初始化一个描述鸟类饲养者的值KeeperKind（keeperOf：.bird）。而且，如果你开始出售一百种宠物，那么你马上就可以代表一百种宠物。

相反，你可以定义第二个不相关的枚举而不是KeeperKind：

``` Swift
enum EnumKeeperKind {
  case catKeeper
  case dogKeeper
}
```

在这种情况下，除了你总是不断地更新一种类型以反映另一种类型的努力之外，没有其他方法可以强制这种关系。 如果你添加了PetKind.snake但忘记添加EnumKeeperKind.snakeKeeper，那么事情将一发不可收拾。

但是，使用KeeperKind，你可以通过PetKind类型的属性显式建立关系。 每个可能的PetKind值都暗示一个对应的KeeperKind值。 或者，你可以说，可能的PetKind值集定义了可能的KeeperKind值集。

总而言之，你可以这样描述关系：

![建立关系示例](http://cdn.xuebaonline.com/sasb-Generics-stp1.png "")

## 其他类型定义的类型

上面的模型从根本上通过改变类型的值来工作。 现在，考虑通过另一种方式对宠物到饲养员系统进行建模。

假设你没有定义代表各种宠物的单一类型PetKind，而是选择为出售的每种宠物定义不同的类型。

如果你采用的是面向对象的风格，那就是一个合理的选择，在这种风格中，你可以为每种宠物使用不同的方法来模拟宠物的行为。 然后，你将具有以下优势：

``` Swift
class Cat {}
class Dog {}
```

现在你如何代表相应种类的饲养员？ 你可以简单地编写以下内容：

``` Swift
class KeeperForCats {}
class KeeperForDogs {}
```

但这不好。 这种方法与手动定义KeeperKind值的并行枚举具有完全相同的问题-它依赖于你为每种宠物强制实施一种饲养员的必需域关系。

你真正想要的是一种声明关系的方法，就像你为值建立的关系一样。

你想声明每种可能的宠物类型都暗示着相应的饲养员类型的存在，你要描述的对应关系如下：

![建立关系示例](http://cdn.xuebaonline.com/sasb-Generics-stp2.png "")

你想确定每种可能的宠物类型都定义了一个相应的饲养员类型。 但是你不想手动执行此操作。 你想要一种为所有管家自动定义一组新类型的方法。

事实证明，这正是泛型的用途！

# 泛型类型剖析

**泛型提供了一种使用一组类型定义一组新类型的机制**。 在你的示例中，你可以为管家定义通用类型，如下所示：

``` Swift
class Keeper<Animal> {}
```

根据需要，此定义立即定义所有相应的keeper类型：

![建立关系示例](http://cdn.xuebaonline.com/sasb-Generics-stp3.png "")

你可以通过创建它们的值并在初始化程序中指定整个类型来验证这些类型是真实的：

``` Swift
var aCatKeeper = Keeper<Cat>()
```

这里发生了什么？ 首先，Keeper是泛型类型的名称。

但你可能会说，泛型根本不是真正的类型。 它更像是制作实类型或具体类型的秘诀。 如果你尝试单独实例化此错误，则表明存在此错误：

``` Swift
var aKeeper = Keeper() // compile-time error!
```

编译器在这里抱怨，因为它不知道你想要什么样的守护者。尖括号中的Animal是type参数，用于指定你要饲养的动物的类型。

一旦提供了所需的类型参数（如Keeper <Cat>中一样），通用Keeper便成为新的具体类型。即使Keeper <Cat>是从相同的通用类型开始的，它们也与Keeper <Dog>不同。这些产生的具体类型称为泛型类型的专业化。

总结一下机制，要定义一个像Keeper <Animal>这样的泛型类型，你只需要选择通泛型类型的名称和type参数。类型参数的名称应阐明类型参数与泛型类型之间的关系。你会不时遇到诸如T（“ Type”（类型的缩写））之类的名称，但是当type参数具有明显的角色（例如Animal）时，应避免使用这些名称。

一次，通用类型Keeper <Animal>定义了一系列新类型。这些都是Keeper <Animal>的所有专业知识，它们可以代替类型参数Animal的所有可能的具体类型暗示。

请注意，Keeper类型目前根本不存储任何内容，甚至无法以任何方式使用Animal类型。**本质上，泛型是系统定义类型集的一种方法**。

# 使用类型参数

不过，通常情况下，你需要使用类型参数来做一些事情。

假设你想更好地跟踪个人。 首先，你丰富类型定义以包括标识符，例如名称。 这使每个值都代表单个动物或饲养员的身份：

``` Swift
class Cat {
    var name: String
    init(name: String) {
        self.name = name 
    }
}

class Dog {
    var name: String
    init(name: String) {
        self.name = name 
    }
}

class Keeper<Animal> {
    var name: String
    init(name: String) {
        self.name = name 
    }
}
```

你还想跟踪哪个饲养员照顾哪些动物。 假设每个饲养员在早上负责一只动物，在下午负责另一只动物。 你可以通过添加上午和下午动物的属性来表达这一点。 但是这些属性应该具有什么类型？

显然，如果特定的饲养员仅管理狗，那么这些属性只能容纳狗。 如果是猫，那就是猫。 一般而言，如果是动物饲养员，则早上和下午的动物属性应为动物类型。

为了表达这一点，你只需要使用以前仅区分你的keeper类型本质的type参数：

``` Swift
class Keeper<Animal> {
    var name: String
    var morningCare: Animal
    var afternoonCare: Animal

    init(name: String, morningCare: Animal, afternoonCare: Animal) {
        self.name = name
        self.morningCare = morningCare 
        self.afternoonCare = afternoonCare
    } 
}
```

通过在上面通用类型定义的正文中使用动物，你可以表示早上和下午的动物必须是饲养员最了解的动物。

正如函数参数成为要在函数定义主体中使用的常量一样，你可以在整个类型定义中使用诸如Animal之类的类型参数。 你可以在Keeper <Animal>的定义中的任何位置使用type参数存储的属性以及计算的属性，方法签名或嵌套类型。

现在，当你实例化Keeper时，Swift将确保在编译时，上午和下午的类型相同：

``` Swift
let jason = Keeper(name: "Jason", morningCare: Cat(name: "Whiskers"), afternoonCare: Cat(name: "Sleepy"))
```

在这里，饲养员杰森（Jason）在早上管理猫胡须，在下午管理猫困。 杰森的类型是Keeper <Cat>。 请注意，你不必为type参数指定值。

因为你使用Cat的实例作为morningCare和morningCare的值，所以Swift知道jason的类型应为Keeper <Cat>。

# 类型约束

在Keeper的定义中，标识符Animal是类型参数，它是某些实际类型的命名占位符，稍后将提供。
这很像func feed（cat：Cat）{/ * open can等... * /}这样的简单函数中的参数cat。 但是，在调用此函数时，你不能简单地将任何参数传递给该函数。 你只能传递Cat类型的值。

目前，你可以提供任何类型的饲养动物，甚至包括与String或Int之类的动物完全不同的东西。
不好 你想要的是类似于函数的东西，你可以在其中限制哪些类型的类型可以填充type参数。 在Swift中，你可以使用各种类型约束来执行此操作。

**类型约束的简单类型直接应用于类型参数**，它看起来像这样：

``` Swift
class Keeper<Animal: Pet> {
   /* definition body as before */
}
```

在这里，约束为：Pet要求分配给Animal的类型必须是Pet的子类（如果Pet是一个类），或者必须实现Pet协议（如果Pet是一个协议）。

例如，你可以通过使用上面的修订的Keeper定义来强制实施这些限制，同时还可以重新定义Cat和其他动物以实施Pet，或使用扩展名追溯协议的模型一致性。

``` Swift
protocol Pet {
  var name: String { get }  // all pets respond to a name
}
extension Cat: Pet {}
extension Dog: Pet {}
```

之所以有效，是因为Cat和Dog已经实现了名称存储属性。

另一种更复杂和通用的类型约束使用通用的where子句。 此子句可以约束类型参数以及关联的类型，从而使你可以在泛型类型之上定义丰富的关系。

此外，你还可以将此where子句附加到扩展名。 为了说明这一点，假设你希望所有的Cat数组都支持meow（）方法。

你可以使用扩展名来指定当数组的Element是Cat时，数组会提供meow（）：

``` Swift
extension Array where Element: Cat {
    func meow() {
       forEach { print("\($0.name) says meow!") } 
    }
}
```

你甚至可以指定类型仅在满足某些约束时才应遵循某种协议。 假设任何可以喵叫的东西都是可喵叫的。 你可以这样写：如果每个数组的元素都为Meowable，则如下所示：

``` Swift
protocol Meowable {
    func meow() 
}

extension Cat: Meowable {
    func meow() {
        print("\(self.name) says meow!") 
    }
}

extension Array: Meowable where Element: Meowable {
    func meow() {
        forEach { $0.meow() } 
    }
}
```

这称为条件一致性，这是一种微妙但功能强大的组合机制。

# Arrays

虽然原始的Keeper类型说明通用类型不需要存储任何内容或使用其类型参数，但通用类型的最常见示例却同时做到了。 当然，这是数组类型。

对通用数组的需求是发明泛型类型的最初动机的一部分。 由于许多程序需要同质的数组，因此泛型数组使所有代码更安全。 一旦编译器在代码的某一点推断（或告知）数组元素的类型，它就可以在程序运行之前在代码的其他点发现任何偏差。

你一直以来都在使用Array，但仅使用语法糖：[Element]而不是Array <Element>。 考虑这样声明的数组：

``` Swift
  let animalAges: [Int] = [2,5,7,9]
```

这等效于以下内容：

``` Swift
let animalAges: Array<Int> = [2,5,7,9]
```

Array <Element>和[Element]完全可以互换。 所以你甚至可以调用数组的默认初始化程序，方法是编写[Int]()而不是Array <Int>()。 由于Swift数组仅允许对元素序列进行索引访问，因此它们对其元素类型没有任何要求。 但这并非总是如此。

# Dictionaries

Swift泛型允许多种类型的参数以及对它们的复杂限制。 这些使你可以将泛型类型和协议与关联的类型一起使用，以对复杂的算法和数据结构进行建模。 字典就是一个简单的例子。

正如在其声明中看到的那样，Dictionary在逗号分隔的通用参数列表中有两个类型参数，它们位于尖括号之间。

``` Swift
struct Dictionary<Key: Hashable, Value> // etc..
```

键和值代表字典的键和值的类型。 类型约束Key：Hashable要求用作字典关键字的任何类型都是可哈希的，因为字典是一个哈希映射，并且必须哈希其关键字才能启用快速查找。

要实例化具有多个类型参数的字典等类型，只需提供一个逗号分隔的类型参数列表：

``` Swift
let intNames: Dictionary<Int, String> = [42: "forty-two"]
```

与数组一样，字典在Swift中也得到了一些特殊的处理，因为它们是内置的并且相当常见。 你已经看到了简写符号[Key：Value]，还可以使用类型推断：

``` Swift
let intNames2: [Int: String] = [42: "forty-two", 7: "seven"] 
let intNames3 = [42: "forty-two", 7: "seven"]
```

# Optionals

最后，不提及泛型就不会完整讨论泛型。 可选选项是作为枚举实现的，但它们也只是另一个通用类型，你可以自己定义。

假设你正在编写一个应用程序，该应用程序可以让用户以某种形式输入生日，但并不需要。 你可能会很方便地定义枚举类型，如下所示：

``` Swift
enum OptionalDate {
  case none
  case some(Date)
}
```

同样，如果允许其他形式但不要求用户输入姓氏，则可以定义以下类型：

``` Swift
enum OptionalString {
  case none
  case some(String)
}
```

然后，你可以使用这些类型的属性捕获用户已进入或未进入结构的所有信息：

``` Swift
struct FormResults {
  // other properties here
  var birthday: OptionalDate
  var lastName: OptionalString
}
```

而且，如果你发现自己重复执行用户可能无法提供的新数据类型的操作，则有时需要将其概括为一个通用类型，该通用类型表示“可能存在的某种特定类型的值”的概念。 ”。 因此，你需要编写以下内容：

``` Swift
enum Optional<Wrapped> {
  case none
  case some(Wrapped)
}
```

此时，你应该已经复制了Swift自己的Optional <Wrapped>类型，因为它非常接近Swift标准库中的定义！ 事实证明，Optional <Wrapped>几乎是一种普通的旧泛型类型，就像你可以自己编写的那样。

为什么关了”？ 如果你仅通过写出可选类型的完整类型来与它们进行交互，那么它只会是普通的老式通用类型，如下所示：

``` Swift
var birthdate: Optional<Date> = .none 
if birthdate == .none {
  // no birthdate
}
```

但是，当然，写这样的东西更加普遍和常规：

``` Swift
var birthdate: Date? = nil
if birthdate == nil {
  // no birthdate
}
```

实际上，这两个代码块说的完全一样。 第二种依赖于对可选内容的特殊语言支持：Optional？ 用于指定可选类型Optional <Wrapped>和nil的简写语法，nil表示专门用于任何类型的Optional <Wrapped>的.none值。

与数组和字典一样，使用此语法，可选内容在语言中享有特权，从而使使用它们更加简洁。 但是所有这些功能都提供了更方便的方法来访问基础类型，该基础类型只是通用的枚举类型。

# 泛型函数参数

函数也可以是泛型的。 函数的类型参数列表位于函数名称之后。 然后，你可以在定义的其余部分中使用泛型参数。

此函数接受两个参数并交换其顺序：

``` Swift
func swapped<T, U>(_ x: T, _ y: U) -> (U, T) {
    (y, x) 
}
swapped(33, "Jay")  // returns ("Jay", 33)
```

泛型函数定义演示了有关语法的一个令人困惑的方面：同时具有类型参数和函数参数。 你既具有类型参数<T，U>的通用参数列表，又具有功能参数列表（_ x：T，_ y：U）。

将类型参数视为编译器的参数，编译器使用它来定义一个可能的函数。 就像你的通用Keeper类型意味着编译器可以制作狗饲养者和猫饲养者以及任何其他类型的饲养者一样，编译器现在可以为任意两种类型制作非通用的专用交换函数供你使用。

# 关键点

+ 泛型在Swift中无处不在：可选，数组，字典，其他集合结构以及大多数基本运算符（如+和==）。

+ 泛型通过类型参数表达类型级别上的系统变异，这些参数范围涵盖可能的具体类型。

+ 泛型就像编译器的函数。 它们在编译时进行评估，并产生新类型，这些新类型是泛型类型的专业化。

+ 泛型类型本身并不是真正的类型，而更像是用于定义新类型的配方，程序或模板。

+ Swift提供了丰富的类型约束系统，可让你指定各种类型参数所允许的类型。




