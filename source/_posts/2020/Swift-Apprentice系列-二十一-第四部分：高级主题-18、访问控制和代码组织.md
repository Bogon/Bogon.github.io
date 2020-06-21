---
title: 'Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织'
description: 'Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织'
permalink: 'Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织'
copyright: ture
date: 2020-05-28 19:00:29
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [访问控制和代码组织]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

可以使用属性，方法，初始化器甚至其他嵌套类型声明Swift类型。这些元素可以被视为代码的接口，有时也称为API或应用程序编程接口。

随着代码复杂性的增加，控制此接口已成为软件设计的重要组成部分。你可能希望创建用作代码“帮助器”的方法，或设计用于跟踪不需要的内部状态（作为代码界面的一部分）的属性。

Swift通过称为访问控制的功能区解决了这些问题，该功能区使你可以控制代码的可见界面。访问控制使你（库作者）可以向用户隐藏实现的复杂性。

这种隐藏的内部状态有时称为不变式，你的公共接口应始终保持不变。防止直接访问模型的内部状态并保持不变性是一种称为封装的基本软件设计概念。在本章中，你将学习什么是访问控制，它解决的问题以及如何应用它。

<!-- more -->

# 由于缺乏访问控制而引入的问题

想象一下，你正在编写银行库。 该库将帮助你的客户（其他银行）编写他们的银行软件。

在Playground上，从以下协议开始：

``` Swift
/// A protocol describing core functionality for an account
protocol Account {
  associatedtype Currency
  var balance: Currency { get }
  func deposit(amount: Currency)
  func withdraw(amount: Currency)
}
```

此代码包含“帐户”，该协议描述了任何帐户应具有的功能-存款，提取和检查资金余额的能力。

现在，使用以下代码添加符合条件的类型：

``` Swift
typealias Dollars = Double
/// A U.S. Dollar based "basic" account.
class BasicAccount: Account {
    var balance: Dollars = 0.0

    func deposit(amount: Dollars) {
        balance += amount
    }

    func withdraw(amount: Dollars) {
        if amount <= balance {
            balance -= amount } else {
            balance = 0 
        }
    } 
}
```

此类一致的类BasicAccount通过简单地从余额中添加或减去余额（以美元表示，Double的别名）来实现deposit（amount :)和withdraw（amount :)。 尽管此代码非常简单，但是你可能会注意到一个小问题。 Account协议中的balance属性被设计为只读的-换句话说，它只有一个get定义。

但是，BasicAccount的实现要求将余额声明为变量，以便在存入或提取资金时可以更新该值。

没有什么可以阻止其他代码直接为平衡分配新值：

``` Swift
// Create a new account
let account = BasicAccount()

// Deposit and withdraw some money
account.deposit(amount: 10.00) account.withdraw(amount: 5.00)

// ... or do evil things!
account.balance = 1000000.00
```

不好了！ 即使你精心设计了Account协议以仅能存入或提取资金，BasicAccount的实现细节（允许其更新自己的余额）也可以由任何代码使用。

幸运的是，你可以使用访问控制来限制代码对其他类型，文件甚至软件模块可见的范围！

>注意：访问控制不是一项安全功能，它可以保护你的代码免受恶意黑客的攻击。 相反，如果用户尝试直接访问可能损害不变性并因此影响正确性的实现详细信息，它可以通过生成有用的编译器错误来表达意图。

# 引入访问控制

你可以通过在属性，方法或类型声明的前面放置修饰符关键字来添加访问修饰符。
将访问控制修饰符private（set）添加到BasicAccount中的balance定义中：

``` Swift
private(set) var balance: Dollars
```

上面的`access`修饰符放在属性声明之前，并在括号中包含可选的`get/set`修饰符。 在此示例中，将平衡设置器设为私有。

你将很快介绍private的详细信息，但是你已经可以看到它的实际使用：你的代码不再可以编译！

通过将private添加到属性设置器中，可以使使用代码无法访问该属性。

这表明了访问修饰符的根本好处：访问仅限于需要访问或应该具有访问权限的代码，而不受限于没有访问权限的代码。有效地，访问控制使你可以控制代码的可访问界面，同时定义实现所需行为所需的任何属性，方法或类型。

上面简短示例中使用的private修饰符是Swift中可以使用的几种访问修饰符之一：

+ `private`：仅可访问定义类型，同一源文件中所有嵌套类型和该类型的扩展名。
+ `fileprivate`：可在定义该文件的源文件中的任何位置访问。
+ `internal`：可在定义模块的任何位置访问。这是默认的访问级别。
+ `public`：可从定义该模块的模块中的任何位置以及导入该模块的另一个软件模块访问。
+ `open`：与public相同，另外具有被另一个模块中的代码覆盖的功能。

接下来，你将了解有关这些修饰符，何时使用它们以及如何将它们应用于代码的更多信息。

## Private

私有访问修饰符将限制对其定义的实体以及其中的任何嵌套类型（也称为“词法范围”）的访问。 同一源文件中类型的扩展名也可以访问该实体。

为了演示，请通过扩展BasicAccount的行为以创建CheckingAccount来继续你的银行库：

``` Swift
class CheckingAccount: BasicAccount {
    private let accountNumber = UUID().uuidString
    class Check {
        let account: String
        var amount: Dollars
        private(set) var cashed = false
        
        func cash() {
            cashed = true
        }
        
        init(amount: Dollars, from account: CheckingAccount) { 
            self.amount = amount
            self.account = account.accountNumber 
        }
    } 
}
```

CheckingAccount的accountNumber声明为私有。 CheckingAccount还具有嵌套的Check类型，可以在其初始值设定项中读取accountNumber的私有值。

>注意：在此示例中，UUID类用于生成唯一的帐号。 该课程是Foundation的一部分，所以不要忘记导入它！

支票帐户也应该能够写支票和现金支票。 将以下方法添加到CheckingAccount：

``` Swift
func writeCheck(amount: Dollars) -> Check? { 
    guard balance > amount else {
    return nil
    }

    let check = Check(amount: amount, from: self) withdraw(amount: check.amount)
    return check
}
func deposit(_ check: Check) { 
    guard !check.cashed else {
        return
    }
    deposit(amount: check.amount)
    check.cash() 
}
```

虽然CheckingAccount仍然可以进行基本的存款和提款，但现在也可以写和存入支票！ 方法writeCheck（amount :)在提取金额和创建支票之前先检查是否有足够的余额，如果支票已经兑现，则deposit（_ :)将不会存入支票。

让约翰给简写支票，在Playground上尝试一下此代码：

``` Swift
// Create a checking account for John. Deposit $300.00
let johnChecking = CheckingAccount() johnChecking.deposit(amount: 300.00)
// Write a check for $200.00
let check = johnChecking.writeCheck(amount: 200.0)!
// Create a checking account for Jane, and deposit the check.
let janeChecking = CheckingAccount() janeChecking.deposit(check) janeChecking.balance // 200.00
// Try to cash the check again. Of course, it had no effect on 
// Jane’s balance this time :]
janeChecking.deposit(check)
janeChecking.balance // 200.00
```

当然，此代码效果很好。 真实的故事是这段代码无法做到的。 请记住，访问控制使你可以控制代码的接口。 查看自动完成窗口显示为CheckingAccount界面的内容.

accountNumber被视为CheckingAccount的实现详细信息，在使用代码中不可见。同样，Check将现金的设置者设为私有，并要求消费者使用cash（）代替.

此接口为Check提供了一种让消费者将支票标记为已兑现的方式，但反之则不行！ 换句话说，无法兑现支票。

最后，即使在CheckingAccount上看不到accountNumber，任何持有Check的人都可以访问该号码：

虽然account属性是从CheckingAccount获取其值的，但这只是另一个实现细节。 重要的是访问修饰符使代码可以塑造自己的接口，而与实现该接口的代码无关。

## Fileprivate

与private紧密相关的是fileprivate，它允许访问与实体在同一文件中编写的任何代码，而不是private提供的同一文件中的相同词法作用域和扩展名。

你将使用刚刚创建的两个新文件进行尝试！

目前，没有什么可以阻止不阅读文档的随意编码者自己创建Check。 在你的安全代码中，你希望支票仅源自CheckingAccount，以便它可以跟踪余额。

在Check类中，尝试将private修饰符添加到初始化程序中：

``` Swift
 private init(amount: Dollars, from account: CheckingAccount) { //...
```

虽然这可以防止不良代码创建支票，但你会注意到，它也可以阻止CheckingAccount创建支票。 可以从词法范围内的任何内容访问私有实体，但是在这种情况下，CheckingAccount是Check范围之外的一步。 幸运的是，这是fileprivate非常有用的地方。

将初始化程序替换为fileprivate：

``` Swift
 fileprivate init(amount: Dollars, from account: CheckingAccount) { //...
```

现在，CheckingAccount仍然可以编写支票，但是你无法在其他任何地方创建支票。

fileprivate修饰符非常适合源文件中“具有内聚性”的代码。 也就是说，代码紧密相关或具有足够的通用目的，可以共享但受保护的访问。 Check和CheckingAccount是两种内聚类型的示例。

## Internal, public and open

使用private和fileprivate，你可以防止其他类型和文件访问代码。 这些访问修饰符从内部默认访问级别修改了访问权限。

内部访问级别意味着可以从定义实体的软件模块中的任何位置访问实体。 在这本书中，你已经将所有代码编写在一个Playground文件中，这意味着它们都在同一个模块中。

在将代码添加到Playground的Sources目录中时，你有效地创建了Playground消费的模块。 使用Xcode设计Playground的方式，Sources目录中的所有文件都是一个模块的一部分，而Playground中的所有内容都是另一个使用Sources文件夹中的模块的模块。

### Internal

回到Playground上，取消注释处理约翰向简写支票的代码：

``` Swift
// Create a checking account for John. Deposit $300.00
let johnChecking = CheckingAccount() 
johnChecking.deposit(amount: 300.00) // ...
```

由于CheckingAccount未指定访问修饰符，因此将其视为内部修饰符，因此使用定义了它的模块的Playground无法访问它。

结果是Swift尝试使用CheckingAccount类型时显示生成错误。

为了解决这个问题，你将必须了解public和open access修饰符。

> 注意：由于internal是默认访问级别，因此你无需显式声明内部代码。 是否在定义中使用内部关键字取决于样式和偏好。

### Public

为了使CheckingAccount在你的Playground可见，你需要将访问级别从内部更改为公共。 定义实体的模块外部的代码可以查看和使用公共实体。

将公共修饰符添加到CheckingAccount类中：

``` Swift
public class CheckingAccount: BasicAccount {
```

你还需要将公共帐户添加到BasicAccount中，因为CheckingAccount将其子类化：

``` Swift
public class BasicAccount: Account
```

现在，Playground上将可以识别CheckingAccount，但你仍然无法实例化它。

虽然类型本身现在是公共的，但其成员仍在内部，因此在模块外部不可用。 你需要向要成为模块界面一部分的所有实体添加公共修饰符。

首先向BasicAccount和CheckingAccount添加公共初始化程序：

``` Swift
// In BasicAccount:
public init() { }
// In CheckingAccount:
public override init() { }
```

接下来，在BasicAccount中，将公共帐户添加到余额，存款（金额：）和取款（金额：）。 你还需要公开Dollars类型别名，因为该类型别名现在已在公共方法中使用。

最后，在CheckingAccount中，将public添加到writeCheck（amount :)，deposit（_ :)和Check类。 保存所有文件。 你会发现一切都已构建并运行！

>注意：即使BasicAccount采用了“帐户”，你可能会注意到Playground看不到“帐户”，也不知道BasicAccount符合该帐户。 如果协议本身不可访问，则协议一致性对使用方模块将是不可见的。

### Open

现在，CheckingAccount及其公共成员对Playground可见，你可以按设计使用银行界面。

好吧-差不多了！ 银行库应提供一组通用帐户（例如支票帐户），但也可以对银行可能具有的任何特殊类型的帐户进行扩展。

在你的Playground中，创建一个将BasicAccount子类化的累积利息的SavingsAccount：

``` Swift
class SavingsAccount: BasicAccount {
    var interestRate: Double
    init(interestRate: Double) {
        self.interestRate = interestRate 
    }
    func processInterest() {
        let interest = balance * interestRate
        deposit(amount: interest)
    }
}
```

虽然BasicAccount被声明为公共的，并且可以在Playground上访问，但是当尝试对BasicAccount进行子类化时，Swift将显示生成错误.

对于要由另一个模块中的代码覆盖的类，方法或属性，需要将其声明为open。 打开Account.swift并将classBasicAccount类的公共访问修饰符替换为open：

``` Swift
open class BasicAccount: Account { //..
```

你看到这一切在一起吗？ 你使用BasicAccount的公共和开放许可子类设计的界面提供了新类型的帐户。 这些子类可以使用withdraw（amount :)和deposit（amount :)，因为它们是公共的。 取而代之的是，withdraw（amount :)和deposit（amount :)的实现是安全的，因为它们只是公开的，而不是开放的！

想象一下，是否可以覆盖withdraw（amount :)和deposit（amount :)：

``` Swift
override func deposit(amount: Dollars) {
    // LOL
    super.deposit(amount: 1_000_000.00) 
}
```

如果你要创建库，则通常希望限制覆盖方法和属性的功能，以免造成其他意外情况。 开放访问修饰符使你可以显式控制其他模块对代码执行的操作。

# 将代码组织到扩展中

访问控制的主题是这样的想法，即你的代码应松散地耦合并且具有高度的内聚性。 松散耦合的代码限制了一个实体对另一实体的了解程度，这反过来又使你的代码的不同部分更少地依赖于其他实体。 正如你先前所学，高度紧密的代码可帮助紧密相关的代码协同工作以完成任务。

与扩展程序一起使用时，访问修饰符之类的Swift功能可以帮助你组织代码并鼓励良好的软件设计。

## 行为扩展

Swift中的有效策略是按行为将代码组织成扩展。 你甚至可以将访问修饰符应用于扩展本身，这将有助于你将整个代码部分归类为公共，内部或私有。

首先向CheckingAccount添加一些基本的欺诈防护。 将以下属性添加到CheckingAccount：

``` Swift
private var issuedChecks: [Int] = []
private var currentCheck = 1
```

这些将跟踪由支票帐户写的支票。

接下来，添加以下私人扩展名：

``` Swift
private extension CheckingAccount {
    func inspectForFraud(with checkNumber: Int) -> Bool {
        issuedChecks.contains(checkNumber) 
    }

    func nextNumber() -> Int { 
        let next = currentCheck currentCheck += 1 
        return next
    } 
}
```

CheckingAccount可以使用这两种方法来确定支票号，并确认它实际上是由该帐户发行的。

值得注意的是，此扩展被标记为私有。 ***私有扩展会将其所有成员隐式标记为私有***。 这些欺诈防护工具仅供CheckingAccount使用-你绝对不希望其他代码增加currentCheck编号！ 将这两种方法放在一起还可以连接两种相关的凝聚方法。 你自己和其他维护代码的人都清楚这两者是紧密结合的，有助于解决一项常见任务。

## 通过协议一致性扩展

另一种有效的技术是基于协议一致性来组织扩展。 你已经在第16章“协议”中看到了这种技术。 例如，通过添加以下扩展名，使CheckingAccount符合CustomStringConvertible：

``` Swift
extension CheckingAccount: CustomStringConvertible {
  public var description: String {
    "Checking Balance: $\(balance)"
  }
}
```

此扩展实现CustomStringConvertible，更重要的是：
+ 使其说明很明显是CustomStringConvertible的一部分。
+ 不利于遵守其他协议。
+ 可以轻松移除，而不会对CheckingAccount的其余部分造成附带损害。
+ 容易被骗！

## available()

如果你查看SavingsAccount，你会发现你可以滥用processInterest（），方法是多次调用它，并反复增加对该帐户的兴趣。 为了使此功能更安全，你可以向该帐户添加PIN。

将一个pin属性添加到SavingsAccount，并确保初始化程序和processInterest（）方法将此PIN作为参数。 该类应如下所示：

``` Swift
class SavingsAccount: BasicAccount {
    var interestRate: Double
    private let pin: Int
    init(interestRate: Double, pin: Int) { 
        self.interestRate = interestRate
        self.pin = pin 
        }
    func processInterest(pin: Int) { 
        if pin == self.pin {
        let interest = balance * interestRate
        deposit(amount: interest)
        }
    } 
}
```

你对新的安全层感到非常满意。 但是，将更新后的代码发送到银行后，你会生气。 该银行的代码现在无法编译，因为它使用的是旧的SavingsAccount类。

为防止破坏使用旧实现的代码，你需要弃用该代码而不是替换它。 幸运的是，Swift对此具有内置支持。

还原初始化程序和processInterest（）的旧实现，并在初始化程序之前添加以下代码：

``` Swift
 @available(*, deprecated, message: "Use init(interestRate:pin:)
instead")
```

而这行代码在processInterest（）之前：

``` Swift
 @available(*, deprecated, message: "Use processInterest(pin:)
instead")
```

现在这些方法仍然可以按预期工作，但是当有人尝试使用它们时，Xcode会使用你的自定义消息生成警告.

参数中的星号表示此弃用会影响哪些平台。 它接受值*，iOS，iOSMac，tvOS或watchOS。 第二个参数详细说明此方法是否已弃用，重命名或不可用。

## 不透明的返回类型

假设你需要为银行库的用户创建一个公共API。 你需要创建一个名为createAccount的函数，该函数将创建一个新帐户并返回该帐户。 该API的要求之一是隐藏实现细节，以便鼓励客户端编写通用代码。 这意味着你不应该公开要创建的帐户类型，无论是BasicAccount，CheckingAccount还是SavingsAccount。 取而代之的是，你只返回一些符合协议帐户的实例。

为了实现这一点，你需要首先将“帐户”协议公开。 打开Account.swift并将public修饰符添加到协议Account之前。 现在回到你的Playground并插入以下代码：

``` Swift
 func createAccount() -> Account {
  CheckingAccount()
}
```

为了解决这个问题，你可以在返回类型之前添加一些关键字，因此它看起来像这样：

``` Swift
 func createAccount() -> some Account {
  CheckingAccount()
}
```

这是一种不透明的返回类型，它使函数可以在不公开类类型的情况下确定要返回的Account类型。

你将在第26章“高级协议和泛型”中了解有关此功能的更多信息。

# Swift Package Manager

组织代码的另一种有效方法是使用Swift Package Manager（简称SwiftPM）。 SwiftPM使你可以“打包”模块，以便你或其他开发人员可以轻松地在其代码中使用它。

例如，实现从Web下载图像的逻辑的模块在许多项目中很有用。 无需将代码复制并粘贴到需要图像下载功能的所有项目中，你可以导入此模块并重新使用它。

Swift Package Manager超出了本书的范围，但是你可以在这里阅读更多内容：https：//swift.org/package-manager/。

# Testing

想象一下，有新的工程师加入你的团队来处理你的银行库。 这些工程师的任务是更新SavingsAccount类以支持贷款。 为此，他们将需要更新所编写代码的基本功能。 这是有风险的，因为他们不熟悉代码，而且更改可能会给现有逻辑带来错误。 防止这种情况发生的好方法是编写单元测试。

单元测试是一段代码，其目的是测试你现有的代码是否按预期工作。 例如，你可能编写了一个测试，将$ 100存入新帐户，然后验证余额确实为$ 100。

乍一看听起来像是过分杀人，但是当许多工程师正在开发一个代码库时，或者当你回去修改很久以前编写的代码时，单元测试可以帮助你验证你没有破坏任何东西。

## 创建测试类

为了编写单元测试，首先需要导入XCTest框架。 将其添加到Playground的顶部：

``` Swift
import XCTest
```

接下来，你需要创建一个新类，它是XCTestCase的子类：

## Writing tests

准备好测试课程后，就该添加一些测试了。 测试应涵盖代码的核心功能和一些边缘情况。 首字母缩写词FIRST描述了有效单元测试的一组简明标准。 这些标准是：

+ 快速：测试应该快速运行。
+ 独立/隔离：测试不应相互共享状态。
+ 可重复：每次运行测试时，你应该获得相同的结果。
+ 自我验证：测试应完全自动化。 输出应为“通过”或“失败”。
+ 及时：理想情况下，应在编写测试代码之前编写测试（测试驱动开发）。

将测试添加到测试类非常容易-只需添加一个以单词test开头，不带参数且不返回任何内容的函数。

``` Swift
 func testSomething() {
}
```

恭喜你！ 你刚刚编写了第一个测试。

要在Playground上实际运行测试，请将其添加到底部的底部BankingTests类。

``` Swift
BankingTests.defaultTestSuite.run()
```

现在运行Playground，你会看到类似的内容打印到控制台上：

``` Swift
Test Suite 'BankingTests' started at ...
Test Case '-[__lldb_expr_2.BankingTests testSomething]' started. 
Test Case '-[__lldb_expr_2.BankingTests testSomething]' passed (0.837 seconds).
Test Suite 'BankingTests' passed at ...
Executed 1 test, with 0 failures (0 unexpected) in 0.837 (0.840) seconds
```

测试通过了，这并不奇怪，因为目前它什么都不做。

## XCTAssert

XCTAssert函数在测试中用于断言满足某些条件。 例如，你可以验证某个值大于零或对象不是nil。 这是一个如何检查新帐户余额是否为零的示例。 以此替换testSomething方法：

``` Swift
func testNewAccountBalanceZero() {
    let checkingAccount = CheckingAccount()
    XCTAssertEqual(checkingAccount.balance, 0) 
}
```

方法XCTAssertEqual验证两个参数是否相等，否则将无法通过测试。 请注意，测试名称是如何明确说明测试内容的。

如果你现在要运行Playground，它将显示在控制台中：

``` Swift
Test Case '-[__lldb_expr_4.BankingTests testNewAccountBalanceZero]' started.
Test Case '-[__lldb_expr_4.BankingTests testNewAccountBalanceZero]' passed (0.030 seconds).
```

太好了，你的测试通过了！ 如果有人进行更改而无意中导致新帐户以零以外的余额开始，则测试将失败。 为什么不测试呢？ 打开文件Account.swift，找到此行

``` Swift
public private(set) var balance: Dollars = 0.0
```

并将0.0替换为1.0。 现在在Playground上进行测试，你应该看到此打印到控制台：

``` Swift
error: -[BankingTests testNewAccountBalanceZero] : XCTAssertEqual failed: ("1.0") is not equal to ("0.0")
```

你可以看到测试失败，甚至可以告诉你测试失败的原因！ 这是单元测试的真正力量。 从现在开始，你的帐户代码将免受此类错误的影响。

现在继续操作，将可变余额返回为0.0，然后再添加一个测试：

``` Swift
func testCheckOverBudgetFails() {
    let checkingAccount = CheckingAccount()
    let check = checkingAccount.writeCheck(amount: 100) 
    XCTAssertNil(check)
}
```

你能弄清楚该测试的作用吗？ 它创建一个新帐户，然后尝试写一张100美元的支票。 帐户余额为零，因此此测试验证写支票失败，并且实际上返回nil。

## @testable

导入Foundation时，Swift会为该模块引入公共接口。 对于你的银行应用程序，你可以创建一个可以导入的银行模块。 这使你可以查看公共界面。 但是你可能想使用XCTAssert检查内部状态。 你可以在测试代码中做到这一点，而不是公开不应该公开的内容：

``` Swift
@testable import Banking
```

这使你的内部界面可见。 （注意：私有API仍然是私有的。）这是一个很好的测试工具，但是你绝对不要在生产代码中这样做。 始终坚持在那里的公共API。

## setUp和tearDown方法

你会注意到，这两种测试方法都首先创建一个新的支票帐户，并且你编写的许多测试可能会执行相同的操作。 幸运的是，有一个setUp方法。 此方法在每次测试之前执行，其目的是初始化测试运行所需的状态。

将其添加到BankingTests类的顶部：

``` Swift
var checkingAccount: CheckingAccount!
override func setUp() { 
    super.setUp()
    checkingAccount = CheckingAccount()
}
```

并从这两个测试中删除lettingAccount = CheckingAccount（）行。

类似于在每次测试之前执行setUp的方式一样，tearDown在每次测试之后运行，而不管测试是否通过。 当你需要释放获得的资源或需要重置对象的状态时，这是很好的选择。 例如，你可以将CheckingAccount实例的余额重置为零。 不需要这样做，因为setUp将初始化新帐户，但是出于示例的原因，你可以添加它。

将其添加到setUp方法下面：

``` Swift
override func tearDown() {
    checkingAccount.withdraw(amount: checkingAccount.balance)
    super.tearDown() 
}
```

你可以在 https://developer.apple.com/documentation/xctest 中了解有关单元测试的更多信息。

# 关键点

+ 访问控制修饰符是私有，文件私有，内部，公共和开放的。 内部访问级别是默认级别。

+ 修饰符可用于控制代码的可见界面并隐藏复杂性。

+ 专用和文件专用保护代码分别防止其他类型或文件中的代码访问。

+ public和open允许从另一个模块访问代码。 open修饰符还允许实体被其他模块覆盖。

+ 将访问修饰符应用于扩展时，该扩展的所有成员都将获得该访问级别。

+ 标记协议一致性的扩展名不能具有访问修饰符。

+ 通过弃用API，可用的关键字可用于开发库。

+ 你使用单元测试来验证你的代码是否按预期工作。

+ @testable import可让你测试内部API。