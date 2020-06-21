---
title: 'Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理'
description: 'Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理'
permalink: 'Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理'
copyright: ture
date: 2020-06-21 13:59:21
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [错误处理]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

所有程序员，特别是熟练的程序员，都需要担心错误处理。 没有错的耻辱。 它们并不意味着你是一个不好的程序员。 关于错误处理，仅表示你承认自己无法控制一切。

在本章中，你将学习错误处理的基础知识：错误处理的内容，实现方式以及何时担心它。

# 什么是错误处理？

错误处理是优雅地失败的艺术。 你可以完全控制自己的代码，但不能完全控制自己代码之外的任何内容。 这包括用户输入，网络连接以及你的应用需要访问的所有外部文件。

想象你在沙漠中，然后决定上网。 你距最近的热点只有数英里。 你没有手机信号。 你打开你的互联网浏览器。 怎么了？ 你的浏览器会死死地永远挂在那儿，还是会立即提醒你无法访问互联网的事实？

在设计应用程序的用户体验以及类和结构的界面时，需要考虑这些因素。 考虑可能出什么问题，以及你希望应用如何响应。

<!-- more -->

# 带有可选选项的第一级错误处理

在深入研究错误处理协议和块之前，你将从最简单的错误处理机制开始。 进行编程时，请务必使用最简单的解决方案。 当更改一行代码可行时，构建复杂的解决方案毫无意义。

## 初始化失败

当你尝试初始化对象时，它可能会失败。 例如，如果你要将String转换为Int，则不能保证它会起作用。

``` Swift
let value = Int("3")          // Optional(3)
let failedValue = Int("nope") // nil
```

如果你使用自己的原始可表示枚举类型，则编译器将为你编写一个失败的初始化器。 要在工作中看到它，请尝试以下操作：

``` Swift
enum PetFood: String {
  case kibble, canned
}
let morning = PetFood(rawValue: "kibble") // Optional(.kibble) 
let snack = PetFood(rawValue: "fuuud!") // nil
```

如你所见，可失败的初始值设定项返回可选值，而不是常规实例。 如果初始化失败，则返回值为nil。

你可以自己创建失败的初始化程序。 试试看：

``` Swift
struct PetHouse {
    let squareFeet: Int
    init?(squareFeet: Int) {
        if squareFeet < 1 {
            return nil
        }
        self.squareFeet = squareFeet 
    }
}
let tooSmall = PetHouse(squareFeet: 0) // nil
let house = PetHouse(squareFeet: 1)    // Optional(Pethouse)
```

要创建一个失败的初始化器，只需将其命名为init？（...），如果失败则返回nil。 通过使用有故障的初始化程序，可以保证实例具有正确的属性，否则将永远不存在。

## 可选链

你是否曾经在Xcode中看到过来自编译器的提示，提示出现了问题，应该添加 ！ 到属性？ 编译器告诉你正在处理一个可选值，并建议你通过强制展开来处理它。

有时强制展开或使用隐式展开的可选选项就可以了。 如果你的UI中有@IBOutlets，则知道在加载视图之后这些元素必须存在。 如果不这样做，则你的应用存在严重问题。 通常，仅当可选内容必须包含值时，才需要强制展开或使用隐式解开的可选内容。 在其他所有情况下，你都在寻求麻烦！

``` Swift
class Pet {
    var breed: String?
    init(breed: String? = nil) {
        self.breed = breed 
    }
}

class Person {
    let pet: Pet
    init(pet: Pet) { 
        self.pet = pet
    } 
}
let delia = Pet(breed: "pug")
let olive = Pet()
let janie = Person(pet: olive)
let dogBreed = janie.pet.breed! // This is bad! Will cause a crash!
```

在这个简单的例子中，没有给奥利夫一个品种。 她是从磅中解救出来的，所以她的品种未知。 但是她仍然是一个甜心。

如果你假设已经设置了她的品种并强行打开此属性，则它将导致程序崩溃。 有一种更好的方法来处理这种情况。

``` Swift
if let dogBreed = janie.pet.breed { 
    print("Olive is a \(dogBreed).")
} else {
    print("Olive’s breed is unknown.") 
}
```

这是非常标准的可选处理，但是你可以利用此结构来执行一些非常复杂的操作。 如果你具有许多具有许多可选属性的复杂数据结构，那么这将非常有用。 注释掉你到目前为止拥有的内容，并从以下几种类型开始：

``` Swift
class Toy {
    enum Kind {
        case ball
        case zombie
        case bone
        case mouse
    }

    enum Sound {
        case squeak
        case bell 
    }

    let kind: Kind
    let color: String
    var sound: Sound?

    init(kind: Kind, color: String, sound: Sound? = nil) { 
        self.kind = kind
        self.color = color
        self.sound = sound
    }
}

class Pet {
    enum Kind {
        case dog
        case cat
        case guineaPig
    }

    let name: String
    let kind: Kind
    let favoriteToy: Toy?

    init(name: String, kind: Kind, favoriteToy: Toy? = nil) { 
        self.name = name
        self.kind = kind
        self.favoriteToy = favoriteToy
    } 
}

class Person {
    let pet: Pet?

    init(pet: Pet? = nil) {
        self.pet = pet 
    }
}
```

许多团队成员都养宠物-但不是全部。 有些宠物有喜欢的玩具，有些则没有。 更进一步的是，其中一些玩具会发出声音，而另一些则不会。

例如，塔米·科隆（Tammy Coron）的邪恶猫有条不紊地密谋她的死亡。

这只猫最喜欢to的玩具（除了塔米）是猫薄荷老鼠。 这个玩具不会发出任何声音。

雷还有另一名团队成员费利佩·马塞蒂（Felipe Marsetti），他住在公寓里，不允许养宠物。

``` Swift
let janie = Person(pet: Pet(name: "Delia", kind: .dog, favoriteToy: Toy(kind: .ball,  color: "Purple", sound: .bell))) 

let tammy = Person(pet: Pet(name: "Evil Cat Overlord", kind: .cat, favoriteToy: Toy(kind: .mouse, color: "Orange")))

let felipe = Person()
```

你想检查团队中的任何成员是否有一只宠物，并且有喜欢的玩具发出声音。 你可以为此使用可选的链接。 通过添加？可以快速遍历一系列可选项目。 在每个可以返回nil的属性或方法之后。 如果链中的任何值为零，则结果也将为零。 因此，你不必测试链中的每个可选项目，而只需测试结果！

例如：

``` Swift
if let sound = janie.pet?.favoriteToy?.sound { 
    print("Sound \(sound).")
} else {
    print("No sound.") 
}
```

珍妮（Janie）的宠物-她的哈巴狗之一，而不仅仅是任何一只老宠物-满足了所有条件，因此可以听到声音。

尝试使用Tammy和Felipe访问声音：

``` Swift
if let sound = tammy.pet?.favoriteToy?.sound { 
    print("Sound \(sound).")
} else {
    print("No sound.") 
}

if let sound = felipe.pet?.favoriteToy?.sound { 
    print("Sound \(sound).")
} else {
    print("No sound.") 
}
```

在此链的每个阶段，编译器都会检查是否存在每个可选属性。

由于Tammy的猫咪玩具没有声音，因此该过程在favouriteToy？之后无法解决。 由于Felipe根本没有宠物，因此该过程在宠物？。

这是很多重复的代码。 如果你想遍历整个团队成员以查找此信息怎么办？

## Map 和 compactMap

假设你要创建一组由团队拥有的宠物。 首先，你需要创建一组团队成员：

``` Swift
let team = [janie, tammy, felipe]
```

你要遍历此数组并提取所有宠物名称。 你可以使用循环，但你已经学到了更好的方法：map。

``` Swift
let petNames = team.map { $0.pet?.name }
```

这通过从阵列中每个团队成员中拉出宠物名称来创建一个新的宠物名称数组。 你想查看这些值是什么，为什么不打印出来？

``` Swift
for pet in petNames {
    print(pet) 
}
```

编译器会生成警告。 查看此打印语句的输出：

``` Swift
Optional("Delia")
Optional("Evil Cat Overlord")
nil
```

w！ 看起来不对。 除了拥有一个不错的名称列表，你还有很多可选值，甚至是零！ 这根本不会做。

你可以采用此数组，对其进行过滤，然后再次调用map来解开所有非nil的值，但这看起来有些复杂。 遍历需要解开并确保不为nil的可选值数组是一种非常常见的操作。

有一个更好的方法可以完成此任务：compactMap。 尝试以下方法：

``` Swift
let betterPetNames = team.compactMap { $0.pet?.name }
for pet in betterPetNames {
    print(pet) 
}
```

你应该看到一个更加有用和用户友好的输出：

``` Swift
 Delia
Evil Cat Overlord
```

通常，compactMap执行常规的映射操作，然后“压缩”或简化结果。 在这种情况下，你将使用compactMap将返回类型[Optional <String>]压缩为更简单的类型[String]。 compactMap的另一个常见用途是将数组的数组转换为单个数组。

到目前为止，你已经了解了如何进行一些非正式的错误处理。 接下来，你将学习有关错误协议的知识，以进行一些正式的错误处理。

# Error protocol

Swift包含错误协议，该协议构成错误处理体系结构的基础。 符合此协议的任何类型都可以用来表示错误。

你可以使用你定义的任何类型来实现Error协议，但是它特别适合枚举。 正如你在第15章“枚举”中所了解的那样，枚举是具有固定实例集的类型，因此它们非常适合表示特定的错误类型。

创建一个新的playground。 你将要建立自己的面包店，并使用它来学习如何使用Error协议引发和处理错误。

将此代码添加到你的playground：

``` Swift
class Pastry {
    let flavor: String
    var numberOnHand: Int

    init(flavor: String, numberOnHand: Int) { 
        self.flavor = flavor
        self.numberOnHand = numberOnHand 
    }
}
enum BakeryError: Error {
    case tooFew(numberOnHand: Int)
    case doNotSell
    case wrongFlavor
}
```

错误协议告诉编译器该枚举可用于表示可以抛出的错误。 在面包店，你可能没有足够的客户想要的每种商品，或者口味可能不正确，或者你可能不会一起出售。

## 抛出错误

这很酷，但是你的程序如何处理这些错误？ 当然会把它们扔！ 这就是你将要看到的实际术语：抛出错误然后发现错误。

将此课程添加到你的playground：

``` Swift
class Bakery {
    var itemsForSale = [
        "Cookie": Pastry(flavor: "ChocolateChip", numberOnHand: 20),
        "PopTart": Pastry(flavor: "WildBerry", numberOnHand: 13),
        "Donut" : Pastry(flavor: "Sprinkles", numberOnHand: 24),
        "HandPie": Pastry(flavor: "Cherry", numberOnHand: 6)
    ]

    func orderPastry(item: String, amountRequested: Int, flavor: String) throws -> Int { 
        guard let pastry = itemsForSale[item] else {
            throw BakeryError.doNotSell 
        }
        
        guard flavor == pastry.flavor else {
            throw BakeryError.wrongFlavor 
        }

        guard amountRequested <= pastry.numberOnHand else { 
            throw BakeryError.tooFew(numberOnHand: pastry.numberOnHand) 
            pastry.numberOnHand -= amountRequested
        }
        return pastry.numberOnHand
    } 
}
```

首先，你需要出售一些物品。 每个项目都需要有风味和适量的手感。 当客户从你那里订购糕点时，他们需要告诉你他们想要什么糕点，他们想要什么口味以及他们想要多少。 客户的需求可能非常高。 ：]

首先，你需要检查你是否携带了客户想要的东西。 如果客户尝试订购带有威化饼的信天翁，则你不希望面包店倒闭。 确认面包店实际携带了客户想要的物品后，你需要检查你是否具有要求的风味，以及是否有足够的物品来满足客户的订单。

如本例所示，你使用throw引发错误。 你引发的错误必须是符合Error的类型的实例。 引发错误并且不立即处理错误的函数（或方法）必须通过在其声明中添加引发来使其清晰。

接下来，尝试你的面包店：

``` Swift
let bakery = Bakery() bakery.orderPastry(item: "Albatross",
                   amountRequested: 1,
                   flavor: "AlbatrossFlavor")
```

上面的代码无法编译。 怎么了？ 哦，对了-你需要抓住错误并采取措施。

## 处理错误

程序引发错误后，你需要处理该错误。 有两种方法可以解决此问题：你可以立即处理错误，也可以将其冒泡到另一个层次。

要选择你的方法，你需要考虑在哪里处理错误最有意义。 如果可以立即处理错误，请这样做。 如果你处于必须警告用户并让其采取措施的情况下，但又有几个函数调用远离用户界面元素，则有必要将错误冒泡直到到达你要的位置为止 可以提醒用户。

什么时候处理错误完全由你决定，但是不选择处理错误是没有选择的。 Swift需要你在链中的某个时刻处理错误，否则你的程序将无法编译。

用以下代码替换上一行代码：

``` Swift
do {
    try bakery.orderPastry(item: "Albatross", amountRequested: 1, flavor: "AlbatrossFlavor") 
}  catch BakeryError.doNotSell {
    print("Sorry, but we don’t sell this item.") 
} catch BakeryError.wrongFlavor {
    print("Sorry, but we don’t carry this flavor.") } 
catch BakeryError.tooFew {
    print("Sorry, we don’t have enough items to fulfill your order.")
}
```

可能引发错误的代码必须始终在创建新作用域的do块内。 更重要的是，必须使用try标记可能引发错误的确切点。 上面的尝试实际上没有任何作用。 它可以提醒你，无论谁阅读你的代码，都可以轻松理解可能出问题的地方。

现在，你正在捕获每种错误情况，并向用户提供有用的反馈，说明你为何无法履行他们的订单。

## 没有看详细的错误

如果你不太在乎错误的详细信息，可以尝试使用吗？ 将函数（或方法）的结果包装在可选的内容中。 然后，该函数将返回nil而不是引发错误。 无需设置do {} catch {}块。

例如：

``` Swift
let remaining = try? bakery.orderPastry(item: "Albatross", amountRequested: 1, flavor: "AlbatrossFlavor")
```

这很不错，写起来也很简短，但是缺点是，如果请求失败，你将不会获得任何详细信息。

## 由于错误而停止程序

有时，你肯定知道你的代码不会失败。 例如，如果你知道自己刚刚放进饼干罐，那你就可以订购一个饼干了。 加：

``` Swift
do {
    try bakery.orderPastry(item: "Cookie", amountRequested: 1, flavor: "ChocolateChip")
} catch {
    fatalError()
}
```

Swift提供了一种简短的方法来编写相同的东西：

``` Swift
try! bakery.orderPastry(item: "Cookie", amountRequested: 1, flavor: "ChocolateChip")
```

它是美味的语法糖，但是请注意，如果违反了“无错误”假设，则程序将暂停。 因此，就像隐式展开的可选内容一样，使用try！时需要格外小心。

# 高级错误处理

很酷，你知道如何处理错误！ 很好，但是如何将错误处理扩展到复杂应用程序的更大范围？

## PugBot

在本章下半部分将要使用的示例项目是PugBot。 PugBot可爱友好，但有时会迷路和困惑。

作为PugBot的程序员，你有责任确保在从PugBot实验室回家的途中不会丢失它。

你将学习如何确保PugBot在偏离路线时抛出错误，以确保找到回家的路。

首先，你需要设置一个枚举，其中包含PugBot可以移动的所有方向：

``` Swift
enum Direction {
  case left
  case right
  case forward
}
```

你还需要一个错误类型来指出可能出什么问题：

``` Swift
enum PugBotError: Error {
  case invalidMove(found: Direction, expected: Direction)
  case endOfPath
}
```

在这里，关联的值用于进一步解释出了什么问题。 运气好的话，你将可以使用它们来挽救丢失的PugBot！

最后但并非最不重要的一点是，创建你的PugBot类：

``` Swift
class PugBot {

    let name: String
    let correctPath: [Direction]
    private var currentStepInPath = 0

    init(name: String, correctPath: [Direction]) { 
        self.correctPath = correctPath
        self.name = name 
    }

    func move(_ direction: Direction) throws {

        guard currentStepInPath < correctPath.count else {
            throw PugBotError.endOfPath 
        }
            
        let nextDirection = correctPath[currentStepInPath]
        guard nextDirection == direction else {
            throw PugBotError.invalidMove(found: direction, expected: nextDirection)
        }
        currentStepInPath += 1
    }

    func reset() {
        currentStepInPath = 0
    }
}
```

创建PugBot时，你可以通过正确的方向告诉它如何回家。 move（_ :)使PugBot向相应的方向移动。 如果程序在任何时候注意到PugBot并未执行应做的操作，则会引发错误。

给你的PugBot测试：

``` Swift
let pug = PugBot(name: "Pug", correctPath: [.forward, .left, .forward, .right])

func goHome() throws { 
    try pug.move(.forward) 
    try pug.move(.left) 
    try pug.move(.forward) 
    try pug.move(.right)
}

do {
    try goHome()
} catch {
    print("PugBot failed to get home.")
}
```

必须成功传递goHome（）中的每个命令，该方法才能成功完成。 抛出错误的那一刻，你的PugBot将停止尝试回家并保持原状，直到你来拯救它。

## 处理多个错误

由于你是一位聪明的开发人员，因此你注意到自己并未处理goHome（）中的错误。 取而代之的是，你还使用抛出标记了该函数，而错误处理则留给了函数调用者。

你可能会受益于可以同时移动PugBot并处理错误的功能，因此你不必每次移动PugBot时都处理错误。

``` Swift
func moveSafely(_ movement: () throws -> ()) -> String { 
    do {
        try movement()
        return "Completed operation successfully."
    } catch PugBotError.invalidMove(let found, let expected) {
        return "The PugBot was supposed to move \(expected), but moved \(found) instead."
    } catch PugBotError.endOfPath {
        return "The PugBot tried to move past the end of the path."
    } catch {
        return "An unknown error occurred." 
    }
}
```

此函数将一个运动函数（如goHome（））或一个包含运动函数调用的闭包作为参数，然后调用它处理所引发的任何错误。

你可能会注意到，必须在末尾添加一个默认案例。 是什么赋予了？ 你已经在PugBotError枚举中用尽了所有用例，那么编译器为什么要麻烦你呢？

不幸的是，目前，Swift的do-try-catch系统不是特定于类型的。 无法告诉编译器它只应包含PugBotErrors。 对于编译器来说，这并不是详尽无遗的，因为它无法处理它所知道的每个可能的错误，因此你仍然需要默认情况。 现在，你可以使用函数安全地处理运动了：

``` Swift
pug.reset() 
moveSafely(goHome)
pug.reset()

moveSafely {
    try pug.move(.forward) 
    try pug.move(.left) 
    try pug.move(.forward) 
    try pug.move(.right)
}
```

多亏了尾随的闭包语法，你的运动调用被完全包装在对moveSafely（_ :)的调用中。 在这里，你的PugBot将安全地回家。

## Rethrows

以throwing闭包作为参数的函数必须做出选择：捕获每个错误或成为throwing函数。 假设你希望实用程序功能连续执行几次特定动作或一组动作。 你可以按以下方式定义此函数：

``` Swift
func perform(times: Int, movement: () throws -> ()) rethrows { 
    for _ in 1...times {
        try movement()
    }
}
```

注意这里的重新抛出。 此函数不处理诸如moveSafely（_ :)之类的错误。 相反，它将错误处理留给函数的调用者，例如goHome（）。 通过使用重新抛出而不是抛出，上面的函数表明它将仅重新抛出传递给它的函数所抛出的错误，而不会重新抛出其自身的错误。 这就是PugBot示例的总结。 现在，让我们看一下异步错误。

# 异步代码的错误处理

do-try-catch机制仅适用于同步代码。 如果你异步执行代码，则不能使用throw引发错误。 Swift涵盖了你，但是你首先需要了解如何使用异步闭包和Grand Central Dispatch（GCD）。

## GCD

现代操作环境是多线程的，这意味着工作可以在多个执行线程上同时进行。例如，所有联网操作都在后台线程中执行，因此它们不会阻止主线程上发生的用户界面。

实际上，由于存在竞争条件，在多线程环境中工作可能非常棘手。例如，当一个线程正在写入一些数据时，另一个线程可能正在尝试读取它并获得一个半生熟的值，但是这种情况非常偶然，这使得诊断此问题非常困难。

你使用同步来缓解竞争条件。尽管Swift还没有本机并发模型，但是GCD框架简化了许多此类问题，因为它是线程之上的抽象，使得后台工作不易出错。

GCD没有提供原始线程给你，而是提供了工作队列的概念。你使用闭包将工作放在队列中，而闭包本身的主体可以将工作分派到另一个GCD队列上。

+ 串行队列按顺序对其执行关闭。

+ 并发队列可以同时调度多个闭包。

GCD队列是线程安全的，因此你可以从任何其他队列向该队列添加闭包。

为了研究这个概念，你将创建一个调度函数execute，该函数在后台队列上运行闭包以执行冗长的计算，然后在完成后将结果传递给主队列上的闭包。你将复制数据而不是共享数据，以避免出现竞争情况。

首先，定义以下功能：

``` Swift
 //1
func log(message: String) {
    let thread = Thread.current.isMainThread ? "Main" : "Background"
    print("\(thread) thread: \(message).") 
}

//2
func addNumbers(upTo range: Int) -> Int { 
    log(message: "Adding numbers...")
    return (1...range).reduce(0, +) 
}
```

这是你所做的：

1. log（message :)使用三元运算符检查当前线程是主线程还是后台队列，然后将消息记录到控制台。

2. addNumbers（upTo :)计算给定范围的数字之和，它表示必须在后台线程上运行的复杂任务。

创建一个队列以在后台运行任务：

``` Swift
let queue = DispatchQueue(label: "queue")
```

在这里，你创建了一个串行队列，任务在FIFO中一次执行一个(先进先出）订单。

>注意：如果你定义了并发队列，则必须处理所有并发问题，这超出了本书的范围。 从特定串行队列分派的工作不需要知道来自同一串行队列中另一个关闭的同时干扰。 并发队列和在队列之间共享公共数据是将来要考虑的另一个问题。 

接下来，创建此方法：

``` Swift
// 1
func execute<Result>(backgroundWork: @escaping () -> Result,
// 2
mainWork: @escaping (Result) -> ()) {
    queue.async {
        let result = backgroundWork() // 3
        DispatchQueue.main.async {
            mainWork(result)
        } 
    }
}
```

这里有很多事情，因此请分步进行：

+ 将函数设为通用，因为backgroundWork闭包返回通用结果，而mainWork闭包使用该结果。 你可以使用@escaping属性标记这两个闭包，因为它们会退出函数-异步使用它们，因此它们在函数返回后会被调用。 默认情况下，闭包是不转义的，这意味着当使用闭包的函数返回时，它将不再使用。

+ 在先前定义的串行队列上异步运行backgroundWork闭包，然后存储其返回值。

+ 在主队列上异步调度mainWork闭包，并使用backgroundWork闭包的结果作为其参数。

是时候看看你的新方法了-将其添加到代码中：

``` Swift
execute(backgroundWork: { addNumbers(upTo: 100) },
        mainWork:       { log(message: "The sum is \($0)") })
```

在这里，你将数字添加到后台线程上，并将结果打印到主线程上的控制台上，得到以下输出：

``` Swift
Background thread: Adding numbers... 
Main thread: The sum is 5050.
```

知道了GCD的工作原理后，就可以处理异步代码的错误了。

## Result

你可以使用Swift标准库中定义的Result类型来捕获异步函数引发的错误。 定义方式如下：

``` Swift
enum Result<Success, Failure> where Failure: Error {
  case success(Success)
  case failure(Failure)
}
```

如你所见，此枚举是通用的，可处理两种类型的结果：成功可以是任何有效的Swift类型，而失败必须符合Error。

让我们看看如何在网站上编辑教程：

``` Swift
// 1
struct Tutorial {
  let title: String
  let author: String
}
// 2
enum TutorialError: Error {
  case rejected
}
// 3
func feedback(for tutorial: Tutorial) -> Result<String, TutorialError> {
    Bool.random() ? .success("published") : .failure(.rejected) 
}
```

上面的代码是这样的：

+ 为教程定义标题和作者。

+ 对于撰写质量不佳或超过4000个单词的拒绝的教程，声明TutorialError。

+ 使用random（）从feedback（for :)返回.success（“ published”）或.failure（.rejected）。

是时候编辑教程了：

``` Swift
func edit(_ tutorial: Tutorial) { 
    queue.async {
    // 1
    let result = feedback(for: tutorial) DispatchQueue.main.async {
        switch result {
            // 2
            case let .success(data):
                print("\(tutorial.title) by \(tutorial.author) was
                    \(data) on the website.")
                    // 3
            case let .failure(error):
                print("\(tutorial.title) by \(tutorial.author) was
                    \(error).")
            } 
        }
    }
}

let tutorial = Tutorial(title: "What’s new in Swift 5.1", author: "Cosmin Pupăză")
edit(tutorial)
```

这是全部的工作方式：

+ 在队列上异步运行feedback（for :)，并存储其结果。

+ 如果发布了教程，则在主队列上异步打印合适的消息。

+ 如果你拒绝本教程，则在主队列上异步处理相应的错误。

如果要使用do-try-catch进行错误处理，也可以将Result用于同步代码：

``` Swift
let result = feedback(for: tutorial)
do {
    let data = try result.get() 
    print("\(tutorial.title) by \(tutorial.author) was
            \(data) on the website.") 
} catch {
    print("\(tutorial.title) by \(tutorial.author) was 
            \(error).")
}
```

在这里，如果没有有效的教程数据，则使用get（）返回result的值并相应地处理错误。

# 关键点

+ 一种类型可以符合Error协议，以与Swift的错误处理系统配合使用。

+ 任何可能引发错误的函数，或调用可能引发错误的函数，都必须标记为throws或rethrows。

+ 调用引发错误的函数时，必须将函数调用嵌入do块中。 在该块中，尝试该函数，如果失败，则捕获错误。

+ 你使用GCD和Result异步处理错误。

+ 相应的函数返回后，可以使用转义的闭包。


