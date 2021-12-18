---
title: 'Advanced Swift系列(十一): Error Handling'
description: 'Advanced Swift系列(十一): Error Handling'
permalink: 'Advanced Swift系列(十一): Error Handling'
copyright: ture
keywords: >-
  iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Protocols,Error Handling
tags:
  - - iOS
  - - Swift
  - - Advanced Swift
  - - Error Handling
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Advanced Swift
abbrlink: 26355
date: 2020-05-08 19:27:02
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为程序员，我们经常必须处理出现问题的地方：网络连接可能会断开，预期存在的文件可能不存在，依此类推。良好地处理故障是将好程序与坏程序区分开的无形因素之一，但是我们经常倾向于将错误处理视为从属任务，这是后来要添加的内容（随着最后期限的临近，这种情况通常会被削减）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而且我们知道了：错误处理可能会很混乱，并且编写快乐路径的代码通常会更有趣。更为重要的是，编程语言提供了一种良好的错误处理体系结构，可以支持程序员执行此任务。我们认为这样的体系结构应该提供以下一些内容：

+ → **简洁** 。抛出错误的代码不应淹没幸福道路的代码。
+ → **传播** 。错误发生的地方不应该接受处理。通常，如果要从错误中恢复的逻辑与错误发生的地方相距甚远，通常会更好。错误处理体系结构应该使在调用堆栈中将错误传达到适当级别变得容易。优点是使中间函数（调用引发函数，但既不引发也不处理错误的函数）易于传递错误而又不需要进行大的语法更改。
+ → **文档** 。程序员可以轻松确定发生错误的位置以及可能发生的错误。
+ → **安全** 。程序员可以忽略意外错误。
+ → **通用性** 。指定可以进行错误抛出和处理的机制

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在所有情况下都可以使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们将在本章中看到的那样， ` Swift ` 的本机错误处理体系结构具有 ` throw ` ， ` try ` 和 ` catch ` 得分，满分为3.5分（满分为5分），它无法编码函数可以抛出的错误，并且不通用，因为它不适用于基于回调的异步 ` API ` 。相比之下，作为替代错误处理方法的 ` Result类型 ` 确实缺少抛出功能，但在简明性，传播性和安全性方面却稍差一些（仅投掷函数需要尝试）。

# **错误类别**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术语 ` “错误” ` 和 ` “故障” ` 可能意味着各种情况。让我们尝试提出一些 ` “可能出错的地方” ` ，通过我们通常在代码中的处理方式来区分它们：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**预期错误**是程序员期望（或应该期望）在正常操作期间发生的故障。其中包括网络问题（网络连接永远不会100％可靠），或者用户输入的字符串格式错误。我们可以通过失败原因的复杂性进一步细分预期的错误：

+ → **普通错误** 。某些操作完全符合预期的故障条件。例如，当你在字典中查找某个键时，该键要么存在（成功），要么不存在（失败）。在 ` Swift ` 中，我们倾向于从具有单个清晰且通常使用的 ` “未找到” ` 或 ` “无效输入” ` 错误条件的函数中返回可选值。返回丰富的错误值不会为调用者提供比可选值中已有的更多信息。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假定失败原因对于调用者来说是显而易见的，则可选项在简洁性（部分原因在于可选项的语法糖），安全性（我们必须在使用它之前必须拆开值），文档（函数具有可选返回类型）方面表现良好），传播（可选的链接）和通用性（可选的选项无处不在）。

+ → **Richerrors** 。网络和文件系统操作是比“出了点问题”需要更多实质性错误信息的任务示例。在这种情况下，有很多不同的情况可能会失败，并且程序员会经常根据失败的类型做出不同的反应（例如，程序可能希望在超时时重试请求，但如果URL则向用户显示错误）不存在）。此类错误是本章的重点。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管大多数可失败的标准库API返回的都是小错误（即可选错误），但Codable系统使用的错误丰富。编码和解码具有许多不同的错误条件，准确的错误信息对于客户找出错误原因非常有价值。编码和解码方法都带有抛出注释，以告知调用方为处理错误做准备。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**意外错误**。程序员无法预期的情况发生了，这使得继续下去变得困难或不可能。这通常意味着程序员做出的假设（“这永远不可能发生”）被证明是错误的。标准库遵循此模式的示例包括访问具有越界索引的数组，创建一个上限小于下限的范围并除以零。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ` Swift ` 中处理意外错误的通常方法是让程序崩溃，因为继续执行未知程序状态将是不安全的。而且，这些情况被认为是应该在测试中发现的程序员错误-处理它们例如是不适当的。通过向用户显示错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在代码中，我们使用断言（即 ` assert ` ， ` precondition ` 或 ` fatalError ` ）来验证我们的期望，并在假设不成立的情况下进行陷阱。我们在[***```“可选”```***]( "")一章中介绍了这些功能。断言是识别代码中的错误的好工具。如果使用得当，它们会在程序处于意想不到的状态时尽早向你显示。它们也是有用的文档工具：每个 ` assert ` 或 ` precondition ` 调用都使作者对程序状态的（通常是隐式的）假设对其他代码阅读者可见。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;断言永远不要用来表示预期的错误-这样做会使程序无法优雅地处理这些错误，因为程序无法从断言中恢复。相反，也应避免使用可选的或抛出函数来指出程序员错误的相反方法，因为与从源头上渗透到程序的其他层相比，从源头上抓住一个错误的假设会更好。

# **Result Type**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在详细介绍 ` Swift ` 的内置错误处理之前，让我们讨论 ` Result类型 ` 。  ` Result ` 已添加到 ` Swift 5 ` 的标准库中，但是自从 ` Swift ` 的第一个发行版以来，它的变体在Swift社区中很流行。 了解 ` Result ` 如何用于传达错误将阐明你在删除语法糖时 ` Swift ` 的错误处理的工作方式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回想一下“[***```枚举”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%85%AD):%20%20Enums/ "")一章， ` Result ` 是一个形状类似于 ` “可选” ` 的枚举-与 ` “可选” ` 一样， ` “Result” ` 有两种情况。 这些案例具有不同的名称，成功和失败，但是它们具有相同的功能，而对于 ` Optional ` 没有。 与 ` Optional ` 的区别在于 ` Result.failure ` 也具有关联的值，该值允许 ` Result实例 ` 携带丰富的错误信息：

``` Swift
enum Result<Success, Failure: Error> { 
    case success(Success)
    case failure(Failure)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还要注意，故障案例有效负载的通用参数被限制在错误协议中，以传达其预期用途，作为错误值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Optional ` 和 ` Result ` 之间的区别应该使你想到我们在上面所做的琐碎错误和丰富错误之间的区别。 这不是巧合； 我们可以以相同的方式将 ` Result ` 用于富错误， ` Optional ` 用于返回琐碎的错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们正在编写一个从磁盘读取文件的函数。 第一次尝试，我们可以使用可选的接口。 因为读取文件可能失败，所以我们希望能够返回 ` nil ` ：

``` Swift
func contentsOrNil(ofFile filename: String) -> String?
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的函数签名非常简单，但是它并没有告诉我们任何有关读取文件失败的原因。 该文件不存在吗？ 还是我们没有正确的权限？ 这是一个失败原因很重要的示例。 让我们为可能的错误情况定义一个枚举：

``` Swift
enum FileError: Error { 
    case fileDoesNotExist 
    case noPermission
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们可以更改函数的类型以返回 ` Result ` ，即字符串 ` （success） ` 或 ` FileError（failure） ` ：

``` Swift
func contents(ofFile filename: String) -> Result<String, FileError>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数的调用者可以切换返回值，并根据返回的特定错误做出不同的反应。 在下面的代码中，如果读取成功，我们将尝试读取文件并打印内容。 在失败的情况下，我们为每种可能的错误打印量身定制的错误消息：

``` Swift
let result = contents(ofFile: "input.txt") 
switch result {
    case let .success(contents):
        print(contents)
    case let .failure(error):
        switch error {
            case .fileDoesNotExist:
                print("File not found") 
            case .noPermission:
                print("No permission") 
        }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，两个嵌套的 ` switch语句 ` 都不要求使用默认情况-编译器可以验证我们是否在所有可能的值上进行了详尽的切换。 这个之所以有效，是因为 ` FileError ` 是一个枚举。 如果我们使用 ` Result<String，Error> ` 作为函数的返回类型，则必须包括默认大小写。

# **Throwing and Catching**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Swift ` 的内置错误处理与上一节中基于结果的方法有很多共同之处，尽管语法有很大不同。 现在，我们没有为函数提供 ` Result ` 返回类型以表明它可能失败，而是将其标记为 ` throw ` 。 对于每个 ` throwing函数 ` ，编译器将验证调用方是否捕获了错误或传播了错误。 将上面的 ` contents（ofFile :) ` 函数转换为 ` throws语法 ` ，如下所示：

``` Swift
func contents(ofFile filename: String) throws -> String
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调用 ` throwing函数 ` 时，除非我们用 ` try ` 注释调用，否则我们的代码将不会编译。  ` try关键字 ` 表示函数可能向编译器和代码读取器引发错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调用 ` throwing函数 ` 也会迫使我们决定如何处理错误。 我们可以使用 ` do/catch ` 来处理错误，也可以通过使用 ` throws注释调用 ` 函数本身来在调用堆栈中传播错误。 可以有多个 ` catch子句 ` ，并且 ` catch子句 ` 支持模式匹配以捕获特定的错误类型或值。 在下面的示例中，我们显式捕获 ` fileDoesNotExist ` 案例，然后在 ` catchall ` 子句中处理所有其他错误。 在 ` catchall ` 子句中，编译器会自动提供一个名为 ` error ` 的变量（类似于属性的 ` willSet ` 处理程序中的隐式newValue变量）：

``` Swift
do{
    let result = try contents(ofFile: "input.txt") print(result)
} catch FileError.fileDoesNotExist { 
    print("File not found")
} catch {
    print(error)
    // Handle any other error.
}
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;误处理语法可能看起来很熟悉。 许多其他语言使用相同的 ` try ` ， ` catch ` 和 ` throw关键字 ` 进行异常处理。 尽管有相似之处，但是 ` Swift ` 中的错误处理并不会增加通常与异常相关的运行时成本。 编译器将 ` throw ` 视为常规返回，使两个代码路径都非常快。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在错误中公开更多信息，可以使用带有关联值的枚举。 例如，文件解析库可能会像下面这样模拟其错误条件：

``` Swift
enum ParseError: Error {
    case wrongEncoding
    case warning(line: Int, message: String)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举是为错误值建模的常用选择，但请注意，我们也可以使用 ` struct ` 或 ` class ` ； 符合 ` Error协议 ` 的任何类型都可以用作引发函数中的错误。 而且由于 ` Error协议 ` 没有要求，因此任何类型都可以选择符合它，而无需执行额外的工作。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于快速测试或原型，有时发现符合String很有用到错误，可以使用以下这种方法： ` 扩展字符串 ` ： ` 错误{} ` 。\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样做使我们可以将任何错误消息直接视为错误值，例如抛出“找不到文件”。 我们不建议将其用于生产代码，尤其是因为不建议将你不拥有的类型与你不拥有的协议相一致（有关更多信息，请参见[***```协议```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B9%9D):%20Protocols/ "")一章）。 但这对于REPL会话或类似环境来说是一个不错的小技巧。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的解析函数的类型如下所示：

``` Swift
func parse(text: String) throws -> [String]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，如果我们想解析一个字符串，我们可以再次使用模式匹配来区分错误情况。 在警告情况下，我们可以将行号和警告消息绑定到变量，就像在 ` switch ` 语句中所做的那样：

``` Swift
do{
    let result = try parse(text: "{ \"message\": \"We come in peace\" }")
    print(result)
} catch ParseError.wrongEncoding {
    print("Wrong encoding")
} catch let ParseError.warning(line, message) {
    print("Warning at line \(line): \(message)") } 
catch {
    preconditionFailure("Unexpected error: \(error)") 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果斜视这段代码的整体形状，包括成功路径和失败路径的单独部分以及使用模式匹配来绑定值，则它看起来与切换 ` Result值 ` 非常相似。 并行并非偶然- `  ` Swift的错误处理 `  ` 从本质上讲是一种更好的语法，用于创建和解开类似结果的值。

# **输入错误和未输入错误**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上一节中关于执行/捕获代码的某些事情感觉不太正确。即使我们绝对确定唯一可能发生的错误是 ` ParseError类型 ` （我们将对其进行详尽处理），我们仍然需要编写 ` final catch子句 ` 以说服编译器我们已捕获所有可能的错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是因为 ` Swift ` 的本机错误处理使用未类型化的错误-我们只能将函数标记为 ` throws ` ，但是无法指定它将抛出的错误。结果，编译器始终需要使用 ` catchall子句 ` 来证明所有错误都已被详尽捕获。  ` Swift Core团队 ` 是故意使错误处理类型化的，这是一个明智的设计决策。理由是，在大多数情况下，详尽的错误处理是不切实际且不希望的；通常，你可能只关心一个或两个特定的错误（如果有的话），并且可以处理 ` catchall子句 ` 中的所有其他错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面， ` Result类型 ` 使用类型化的错误： ` Result ` 有两个通用参数，成功和失败，后者指定错误值的具体类型。早先，此功能使我们可以在 ` Result<String，FileError> ` 上进行详尽的切换。再举一个例子，这是 ` parse（text :) ` 函数的一个变体，我们用 ` Result <[String]，ParseError> ` 返回类型替换了 ` throws注释 ` 。由于具体的错误类型，此功能还可以彻底切换其故障情况：

``` Swift
func parse(text: String) -> Result<[String], ParseError>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift核心团队为什么决定接受将非类型化错误用于内置错误处理和带有类型化错误的 ` Result类型 ` 之间的这种不匹配？ 毕竟，核心团队也可能选择了带有未类型化失败案例的 ` Result变体 ` ，即失败案例可能是任何 ` Error值 ` 的结果。 好吧，事实证明，我们拥有的 ` Result类型 ` 实际上是支持两种模式的混合类型。 如果你不想使用具体的错误类型，则可以指定 ` Result<...，Error> ` 接受任何错误值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此， ` Result ` 确实为我们提供了 ` 类型错误和非类型错误 ` 之间的选择。 折衷方案是，未类型化失败类型的 ` Result ` 需要比其他类型多一些的类型化输入，因为我们必须拖拽 ` Error参数 ` 。 如果这让你感到困扰，则始终可以为带有未键入错误的 ` Result类型 ` 创建类型别名：

``` Swift
typealias UResult<Success> = Result<Success, Error>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一下，我们可以编写 ` Result<...，Error> ` 的事实利用了 ` Error协议 ` 的一些特殊编译器魔术。 我们看到了失败参数被限制为错误：

``` Swift
enum Result<Success, Failure: Error>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ` Swift协议 ` 通常不符合其自身，因此类型 ` Result<...，Error> ` 的变量将无法满足 ` Failure：Error ` 约束。为了允许以这种方式将 ` Result ` 与 ` 未类型化的错误 ` 一起使用，Swift团队在编译器中添加了一种特殊情况，允许对 ` Error（但没有其他协议） ` 进行自我整合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们有了一个支持具体错误类型的 ` Result类型 ` ，很有可能在以后的 ` Swift版本 ` 中将此功能也添加到本机错误处理模型中。在此之前，对于要让编译器验证是否已捕获所有可能的错误的代码，将 ` Result ` 与类型错误一起使用是一个不错的选择。如果并且当我们到处都遇到类型错误时，几乎可以肯定的是，指定函数可以抛出的具体错误类型的能力将成为一项可选功能，而不是必需的功能。这是因为类型化错误具有重大缺点：

+ → 具体错误类型使组合投掷功能和聚集错误变得更加困难。任何调用了多个其他抛出函数的函数要么必须在调用堆栈中传播多个错误类型，要么必须提出一个新的自定义错误类型以汇总来自较低级别的错误。这将很快失去控制。我们稍后会在 ` “链接错误” ` 部分中再次讨论。

+ → 严格类型的错误使库无法扩展。例如，每次函数都会添加新的错误条件，这将是破坏源代码的更改对于所有彻底捕获错误的客户。为了保持与不同库版本的二进制兼容性，客户端必须无论如何都要向所有 ` do/catch语句 ` 添加默认用例，这与它们对非冻结枚举所必须执行的操作类似。仅这个问题就足以说明为什么 ` Cocoa之类 ` 的框架可能永远不会键入错误。

+ → 与详尽的切换清单不同，通常没有必要，也不可行的是，详尽地捕获下降的错误状况。考虑执行网络请求时有多少不同的地方可能出问题-程序员几乎不可能对每个可能的问题做出有意义的反应。大多数程序可能会显式处理少量错误，并具有通用的错误处理程序，其余的则可能仅记录错误或将其呈现给用户。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于错误是无类型的，因此务必记录函数可能引发的错误类型。 为此，Xcode在文档标记中支持 ` Throws关键字 ` 。 这是一个例子：

``` Swift
/// Opens a text file and returns its contents.
///
/// - Parameter filename: The name of the file to read. 
/// - Returns: The file contents, interpreted as UTF-8.
/// - Throws:  ` FileError `  if the file does not exist or
/// the process doesn't have read permissions. 
func contents(ofFile filename: String) throws -> String
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按住 ` Option键 ` 单击函数名称时出现的“快速帮助”弹出窗口现在将包含一个额外的部分，用于引发错误。

# **不可忽略的错误**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章的简介中，我们将安全性确定为良好的错误处理系统的一个因素。 使用内置错误处理的一大好处是，编译器将确保你在调用可能抛出的函数时不会忽略错误情况。 对于 ` Result ` ，情况并非总是如此。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，考虑诸如 ` Data.write(to：options：) ` （用于将字节写入文件）或 ` FileManager.removeItem(at：) ` （用于删除文件）之类的 ` Foundation ` 方法：

``` Swift
extension Data {
    func write(to url: URL, options: Data.WritingOptions = []) throws
}

extension FileManager {
    func removeItem(at URL: URL) throws
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果这些方法改用基于结果的错误处理，则它们的声明将如下所示：

``` Swift
extension Data {
    func write(to url: URL, options: Data.WritingOptions = []) -> Result<(), Error>
}

extension FileManager {
    func removeItem(at URL: URL) -> Result<(), Error>
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些方法的特殊之处在于我们称它们为副作用，而不是它们的返回值-实际上，这两种方法都没有有意义的返回值，只是“操作成功或未成功”。 使用基于结果的变体，程序员通过编写如下代码很容易（偶然或故意）忽略任何失败：

``` Swift
_ = FileManager.default.removeItem(at: url)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，在调用基于 ` throws ` 的变体时，编译器会强制我们在尝试之前添加 ` try前缀 ` 。 编译器还要求我们要么将该调用包装在 ` do/catch块 ` 中，要么将错误传播到调用堆栈中。 这使程序员和代码的其他读者立即清楚该操作可能失败，并且编译器将迫使我们处理该错误。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 ` Result<()，Error> ` 对于函数的返回类型可能不是一个很好的选择，但它通常用于基于回调的错误报告（在抛出不可用的情况下，我们将在 ` “异步代码中的错误” ` 部分中看到） 成功案例没有有意义的有效负载时。 空元组（或Void）是一种具有唯一可能值的类型（令人困惑的是，使用了相同的拼写类型和唯一值）。 因此，成功案例除“操作成功”外不携带其他信息。

# **错误转换**

## ***在throw和Optional之间转换***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误和可选参数都是函数发出异常信号的非常常见的方式。 在本章的简介中，我们为你提供了有关如何确定应为自己的功能使用哪种模式的一些建议。 你最终将要处理很多错误和可选参数，并且将结果传递给其他 ` API ` 通常常常需要在抛出函数和可选值之间来回转换。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` try?关键字 ` 使我们可以忽略抛出函数的错误，并将返回值转换为可选值； 可选参数告诉我们函数是否成功：

``` Swift
if let result = try? parse(text: input) { 
    print(result)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ` try?  ` 意味着我们收到的信息比以前少了：我们只知道函数是否返回了成功的值或它是否返回了一些错误-有关该错误的特定信息被丢弃了。 换句话说，从可选函数到抛出的函数，我们必须提供一个错误值，以防可选函数为 ` nil ` 。 这是 ` Optional ` 的扩展程序，它会自行展开并在发现 ` nil ` 时抛出给定的错误：

``` Swift
extension Optional {
/// Unwraps  ` self `  if it is non- ` nil ` .
/// Throws the given error if  ` self `  is  ` nil ` . 
    func or(error: Error) throws -> Wrapped {
        switch self {
            case let x?: return x 
            case nil: throw error 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个用法示例：

``` Swift
do{
    let int = try Int("42").or(error: ReadIntError.couldNotRead)
} catch { 
    print(error)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与多个try语句结合使用时，或在已标记为throws的函数内工作时，此功能很有用。在单元测试中，它也是一种有用的模式。如果将测试方法标记为 ` throw ` 并在其中抛出错误，则 ` XCTest框架 ` 会自动使测试失败。如果你的测试依赖于非零的可选继续进行，则可以使用上述模式解开可选的内容，如果可选的测试结果在一行中为零，则测试失败。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否存在 ` try?关键字 ` 可能与 ` Swift ` 的理念相矛盾，后者不应该忽略错误。但是，你仍然必须显式编写 ` try? ` ，因此编译器会强制你确认你的操作并将其显式显示给代码的其他阅读者。 ` try? ` 如果你对错误消息不感兴趣，则是一个合法的选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尝试的第三种方式： ` try！ ` 当你知道不可能出现错误结果时，将使用此方法。就像强制展开为零的可选值一样，请 ` try！ ` 如果你的假设在运行时错误，则会导致崩溃。

## ***在 throws 和 Result 之间转换***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到使用 ` throws ` 进行 ` Result ` 和错误处理实际上是同一枚硬币的两个方面。 除了处理类型错误和未类型错误的区别外，你还可以将 ` Result值 ` 视为 ` throwing函 ` 数的精确结果（即可以存储或传递的值）。 考虑到这种双重性，标准库提供了在两种表示形式之间进行转换的方法也就不足为奇了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要调用 ` throwing函数 ` 并将其结果包装在 ` Result ` 中，请使用 ` init（catching :) ` 初始化程序，该初始化程序将使用 ` throwing函数 ` 并将其转换为 ` Result ` 。 实现看起来像这样：

``` Swift
extension Result where Failure == Swift.Error {
    /// Creates a new result by evaluating a throwing closure, capturing the 
    /// returned value as a success, or any thrown error as a failure. 
    init(catching body: () throws -> Success) {
        do{
            self = .success(try body())
        } catch {
            self = .failure(error)
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个例子：

``` Swift
let encoder = JSONEncoder()
let encodingResult = Result { try encoder.encode([1, 2]) } // success(5 bytes) 
type(of: encodingResult) // Result<Data, Error>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想将错误延迟到以后再处理或将结果传递给另一个函数，这将很有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;反向操作称为 ` Result.get（） ` 。 它评估（即切换）结果并将失败情况视为要抛出的错误。 这是实现：

``` Swift
extension Result {}
    public func get() throws -> Success {
        switch self {
            case let .success(success):
                return success
            case let .failure(failure):
                throw failure 
        }
    } 
}
```

# **Chaining Errors**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;连续调用多个故障功能是很常见的。 例如，一个操作可以分为多个子任务，其中一个子任务的结果成为下一个任务的输入。 每个子任务都可能因错误而失败，因此，如果引发错误，则整个操作应立即中止。

## ***Chaining throws***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并非所有的错误处理系统都能很好地处理上述用例，但是 ` Swift ` 的内置错误处理在这方面大放异彩。 在将返回值传递给下一个函数之前，无需使用嵌套的i ` f语句 ` 或类似的结构来对返回值进行包装； 我们只需将所有函数调用放在单个 ` do/catch块 ` 中（或将它们包装在 ` throwing函数 ` 中）。 发生的第一个错误将中断链，并将控制切换到 ` catch块 ` （或将错误传播到调用者）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个包含三个子任务的操作示例：

``` Swift
func complexOperation(filename: String) throws -> [String] { 
    let text = try contents(ofFile: filename)
    let segments = try parse(text: text)
    return try process(segments: segments)
}
```

## ***Chaining Result***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将使用 ` Result类型 ` 时，将基于尝试的干净示例与等效代码进行比较。 如果手动进行操作，则链接多个返回 ` Result的函数 ` 将耗费大量精力； 我们首先调用第一个函数并切换其返回值，如果成功，则可以将展开的值传递给第二个函数并重新开始。 只要一个函数返回 ` .failure ` ，链就会中断，并且我们会通过立即将失败返回给调用者来短路：

``` Swift
func complexOperation1(filename: String) -> Result<[String], Error> { 
    let result1 = contents(ofFile: filename)
    switch result1 {
        case .success(let text):
            let result2 = parse(text: text) 
            switch result2 {
                case .success(let segments):
                    return process(segments: segments) .mapError { $0 as Error }
                case .failure(let error):
                    return .failure(error as Error)
            }
        case .failure(let error):
            return .failure(error as Error)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这很快就会变得很丑陋，因为链中的每个其他函数都需要另一个嵌套的 ` switch语句 ` 。 还要注意，我们必须在每个交换机中复制相同的故障路径。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在尝试重构此代码之前，让我们再来看一下如何处理上述代码中的失败案例。 这些是在我们的示例中代表三个子任务的函数的签名：

``` Swift
func contents(ofFile filename: String) -> Result<String, FileError> 
func parse(text: String) -> Result<[String], ParseError>
func process(segments: [String]) -> Result<[String], ProcessError>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些函数中的每一个都有不同的失败类型： ` FileError ` ， ` ParseError ` 和 ` ProcessError ` 。当我们逐步处理子任务链时，我们不仅要关心转换成功类型（从 ` String ` 转换为 ` [String] ` ，再转换为 ` [String] ` ）；我们还必须注意将故障类型转换为聚合类型（在此示例中仅是 ` Error ` ，但可能是其他具体类型）。我们可以在代码的三个地方看到错误转换：

+ →  ` return.failure（errorasError） ` 将错误值从其具体类型转换为 ` Error ` 。我们可以在这里省略 ` as Error ` 部分-编译器会隐式添加它，但是添加它说明了实际情况。

+ → 对于链的最后一步，我们只能简单地写返回流程（段：细分），因为流程（段）的返回类型与所需的返回类型不兼容， ` Result <[String]，Error> ` -我们必须使用 ` mapError方法 ` （它是 ` Result类型 ` 的一部分）再次转换失败类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不管严格错误类型引入的复杂性如何，我们都应该重构嵌套的 ` switch语句 ` 的混乱。幸运的是， ` Result ` 包含执行此操作的功能。上面代码中我们多次使用的模式-切换结果，或者使用未包装的成功值调用链中的下一步，或者在遇到失败时中止操作-正是 ` Result ` 的 ` flatMap方法 ` 所做的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的结构与我们在[***```Optionals```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "")一章中介绍的 ` flatMap方法 ` 相同。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用 ` flatMap ` 替换开关可以显着清理代码。实际上，最终结果是相当优雅的，即使不如基于基于 ` throws ` 的示例那么干净：

``` Swift
func complexOperation2(filename: String) -> Result<[String], Error> {       
    return contents(ofFile: filename).mapError { $0 as Error }
    .flatMap { text in parse(text: text).mapError { $0 as Error } } 
    .flatMap { segments in
        process(segments: segments).mapError { $0 as Error } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意，我们仍然必须处理不兼容的故障类型。  ` Result ` 的 ` map ` 和 ` flatMap方法 ` 仅转换成功案例，而使失败案例的类型保持不变。 并且只有在所有涉及的 ` Result类型 ` 都具有相同的 ` Failure类型 ` 时，才能链接多个 ` map ` 或 ` flatMap ` 操作。 我们通过几个 ` mapError ` 调用在示例中实现了这一点； 他们的任务是将特定错误转换为错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在本节中讨论的示例很好地说明了严格类型的错误可能会带来问题，并且可能经常造成更多的麻烦。 如果没有 ` mapError ` 调用，基于 ` flatMap ` 的代码肯定会更具可读性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更重要的是，聚合功能最终还是擦除了具体的错误类型，因此调用堆栈上方的实际错误处理代码甚至无法利用这些类型。

# **异步代码中的错误**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不幸的是， ` Swift ` 的内置错误处理不适用于使用回调函数将错误传递回调用者的异步 ` API ` 。 我们来看一个异步计算大量函数并在计算完成后回调代码的函数：

``` Swift
func compute(callback: (Int) -> ())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过提供回调函数来调用该函数。 回调将结果作为唯一参数接收：

``` Swift
compute { number in 
    print(number)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们如何将错误集成到该设计中？ 如果可选参数为错误提供了足够的信息（即只有一个简单的错误条件），我们可以指定回调函数接收可选整数，如果失败，该整数将为 ` nil ` ：

``` Swift
func computeOptional(callback: (Int?) -> ())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，在回调中，我们必须解开可选的内容，例如 通过使用 ` ?? 操作符 ` ：

``` Swift
computeOptional { numberOrNil in 
    print(numberOrNil ?? -1)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想向回调报告更具体的错误怎么办？ 这个函数签名似乎是一个自然的解决方案：

``` Swift
func computeThrows(callback: (Int) throws -> ())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这不能满足我们的要求。 这种类型的含义完全不同。 它没有表示计算可能失败，而是表示回调本身可能引发错误。 当我们尝试将此错误尝试重写为使用 ` Result ` 的版本时，问题变得更加明显：

``` Swift
func computeResult(callback: (Int) -> Result<(), Error>)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也不正确-我们需要将 ` Int参数 ` 包装在 ` Result ` 中，而不是在回调的返回类型中。 最后，这是正确的解决方案：

``` Swift
func computeResult(callback: (Result<Int, Error>) -> ())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本机错误处理与基于回调的API的不兼容性说明了一方面的 ` throws ` 与另一方面的 ` Optional ` 和 ` Result ` 之间的关键区别：**只有后者是我们可以自由传递的值，而throws则没有那么灵活**。 我们喜欢约书亚·埃蒙斯（Joshua Emmons）所说的话：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看到，抛出和返回一样，只能在一个方向上起作用。 起来 我们可以向调用方抛出一个错误“向上”，但是我们不能向我们调用的另一个函数抛出错误“向下”作为参数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将错误“向下”传递给延续函数的能力正是我们在异步上下文中所需要的。 不幸的是，目前尚没有明确的方法来编写带有抛出异常的上述变体。 我们能做的最好的就是将 ` Int ` 包装在另一个 ` throwing函数 ` 中。 这使签名更加复杂：

``` Swift
func compute(callback: (() throws -> Int) -> ())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于调用者而言，使用此变体也变得更加困难。 为了获取整数，回调现在必须调用 ` throwing函数 ` 。 这是调用方必须执行错误检查的位置：

``` Swift
compute { (resultFunc: () throws -> Int) in 
    do{
        let result = try resultFunc()
        print(result) } 
    catch {
        print("An error occurred: \(error)") 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这行得通，但绝对不是惯用的 ` Swift ` ； **结果是进行异步错误处理的方法**。 不幸的是，这会与使用掷的同步功能造成阻抗不匹配。  ` Swift ` 设想的本机并发模型可能会扩展 ` throws模型 ` 以在异步上下文中工作，但是在撰写本文时，尚不清楚何时会发生。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在此之前，我们始终将 ` Result ` 用于可能失败的回调。 通过将 ` Result ` 包含在标准库中，这种在开发人员社区中已经很成熟的实践得到了该语言的正式祝福。 当然，这与具有两个空参数（ ` 成功对象和错误对象 ` ）的完成处理程序的 ` Objective-C ` 风格相比更胜一筹。

# **使用延迟进行处理**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;许多编程语言都具有 ` try/finally构造 ` ，无论何时是否引发错误，总是在函数返回时执行带有 ` finally ` 标记的块。  ` Swift中 ` 的 ` defer关键字 ` 具有类似的用途，但工作方式略有不同。 与最后一样，无论退出原因是什么，退出示波器始终都会执行 ` defer块 ` -无论是因为成功返回值，由于发生错误还是任何其他原因。 这使得 ` defer ` 是执行所需清理工作的好选择。 与最终不同，延迟块不需要先行尝试或执行块，并且在将其放置在代码中的位置方面更加灵活。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从本章开始再回顾一下 ` content（ofFile :) ` 函数，并看一下使用 ` defer ` 的可能实现：

``` Swift

func contents(ofFile filename: String) throws -> String { 
    let file = open(filename, O_RDONLY)
    defer { 
        close(file) 
    }
    return try load(file: file)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二行中的 ` defer块 ` 确保函数返回时关闭文件，而不管文件是成功完成还是引发错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管 ` defer ` 通常与错误处理一起使用，但它在其他情况下也很有用-例如，当你要将代码的初始化和清理（例如打开和关闭文件）的代码保持在一起时。 将相关行并排放置可以使你的代码更具可读性，尤其是在较长的函数中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果在同一作用域中有多个 ` defer语句 ` ，则以相反的顺序执行； 你可以将它们视为堆栈。 首先，延迟块以相反的顺序运行可能会感到奇怪。 但是，如果我们看一下执行数据库查询的示例，那应该很快就有意义了：

``` Swift
let database = try openDatabase(...)
defer { closeDatabase(database) }
let connection = try openConnection(database) 
defer { closeConnection(connection) }
let result = try runQuery(connection, ...)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码必须首先打开数据库并建立与数据库的连接，然后才能最终运行查询。 如果抛出错误（例如，在 ` runQuery ` 调用期间），则清理资源的方法需要相反。 我们要先关闭连接，然后再关闭数据库。 因为 ` defer语句 ` 是反向运行的，所以这会自动发生。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在程序控制转移到 ` defer语句 ` 出现的作用域之外之前，将执行 ` defer块 ` 。即使 ` return语句 ` 的值也要在相同作用域中的任何 ` defer块 ` 运行之前进行评估。 在将变量的先前值返回给调用方之后，你可以利用此行为来对变量进行突变。 在下面的示例中，递增函数在返回值之前使用 ` defer ` 来递增捕获的计数器变量的值：

``` Swift
var counter = 0
func increment() -> Int { 
    defer { counter += 1 } 
    return counter
}
increment() // 0
counter // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你浏览标准库的源代码，则将不时看到此模式。 编写不延迟的相同逻辑将需要声明一个局部变量以临时存储 ` counter ` 的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些情况下，不会执行 ` defer语句 ` ：当你的程序出现段错误或引发致命错误（例如使用 ` fatalError ` 或通过强制展开 ` nil ` ）时，所有执行都会立即停止。

# **Rethrowing**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于以其他函数作为参数的函数（例如 ` map或filter ` ）， ` throwing函数 ` 的存在带来了问题。 在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "")一章中，我们讨论了数组上的假设过滤器方法的类型（实际过滤器在 ` Sequence ` 上定义，并且稍微复杂一些）：

``` Swift
func filter(_ isIncluded: (Element) -> Bool) -> [Element]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此定义有效，但有一个缺点：编译器将不接受任何作为谓词传递的 ` throwing函数 ` ，因为 ` isIncluded ` 参数未标记为 ` throws ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们来看一个例子，该限制成为一个问题。 我们首先编写一个检查文件有效性的函数（对于该示例，该函数用来决定文件是否有效的因素）并不重要。  ` checkFile函数 ` 或者返回一个布尔值（对于有效值为true，对于无效值为false），或者如果在检查文件时出现问题，则抛出错误：

``` Swift
func checkFile(filename: String) throws -> Bool
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们有一个文件名数组，并且想过滤掉无效文件。 自然地，我们想使用 ` filter ` 来做到这一点，但是编译器不允许这样做，因为 ` checkFile ` 是一个 ` throwing函数 ` ：

``` Swift
let filenames: [String] = ...
// Error: Call can throw but is not marked with 'try'. let validFiles = filenames.filter(checkFile)
We could work around the issue by handling the error locally inside the filter predicate:
let validFiles = filenames.filter { filename in 
    do{
        return try checkFile(filename: filename) 
    } catch {
        return false
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这非常不方便，甚至可能不是我们想要的—上面的代码通过捕获错误并返回 ` false ` 默默地忽略错误，但是如果我们想在发生错误时中止整个操作该怎么办？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一种解决方案是标准库使用 ` filter ` 声明中的 ` throws注释谓词函数 ` ：

``` Swift
func filter(_ isIncluded: (Element) throws -> Bool) throws -> [Element]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这会起作用，但同样会带来不便，因为现在每次 ` filter ` 的调用都变成了需要 ` try（或try！） ` 注释的 ` throwing ` 调用。对标准库中的每个高阶函数执行此操作会导致代码包含在 ` try关键字 ` 中，从而破坏了 ` try ` 的主要目的，**try的主要目的是使代码的读者可以快速区分抛出和非抛出调用**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一种选择是定义两个版本的过滤器：一个抛出，一个不抛出。除了 ` try注释 ` 之外，它们的实现是相同的。然后，我们可以依靠编译器为每次调用选择最佳的重载。这样比较好，因为它可以使呼叫站点保持干净，但仍然很浪费。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幸运的是， ` Swift ` 以 ` rethrows关键字 ` 的形式提供了更好的解决方案。使用重新抛出注释功能可以告诉编译器该函数仅在其函数参数抛出错误时才会抛出错误。因此，过滤器的真实方法签名如下所示：

``` Swift
func filter(_ isIncluded: (Element) throws -> Bool) rethrows -> [Element]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;谓词函数仍标记为 ` throws ` ，表示调用方可以传递 ` throwing函数 ` 。 在其实现中，过滤器必须使用 ` try ` 来调用谓词。 重新抛出注释可确保过滤器将谓词函数抛出的错误传播到调用堆栈中，但是过滤器永远不会自行抛出错误。 这样，当调用方传入非抛出谓词函数时，编译器就可以免除使用 ` try ` 调用 ` filter ` 的要求。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中几乎所有带有函数参数的序列和集合函数都带有重新抛出注释，但有一个重要的例外：我们在[***```“集合协议”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%8D%81):%20Collection%20Protocols/ "")一章中讨论的惰性集合方法通常不支持抛出，因为 ` throws ` 不会。 与异步代码很好地混合。

# **将错误桥接到Objective-C**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objective-C没有类似于 ` “throws and try” ` 的机制。（Objective-C确实具有使用这些相同关键字的异常处理，但是Objective-C中的异常仅应用于指示程序员错误。在普通应用中，你很少会遇到Objective-C异常。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取而代之的是， ` Cocoa ` 中的常见模式是发生错误时方法返回 ` NO ` 或 ` nil ` 。 失败的方法还会将对 ` NSError指针 ` 的引用作为额外的参数。 他们可以使用此指针将具体的错误信息传递回调用方。 例如， ` contents（ofFile :) ` 方法在 ` Objective-C ` 中如下所示：

``` Swift
- (NSString *)contentsOfFile(NSString *)􏰀lename error:(NSError **)error;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Swift ` 会自动将遵循此模式的方法转换为 ` throws语法 ` 。 由于不再需要使用 ` error参数 ` ，因此 ` BOOL ` 返回类型已更改为 ` Void ` 。 上面的方法是这样导入的：

``` Swift
func contents(ofFile filename: String) throws -> String
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自动转换适用于所有使用此结构的 ` Objective-C方法 ` 。 其他 ` NSError参数 ` （例如，在将错误返回到完成块中的调用者的 ` 异步API ` 中）桥接到 ` Error协议 ` ，因此通常不需要直接与 ` NSError ` 进行交互。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你将 ` Swift ` 错误传递给 ` Objective-C ` 方法，它将被桥接回 ` NSError ` 。 由于所有 ` NSError对象 ` 都必须具有域字符串和整数错误代码，因此运行时将在必要时生成默认值，使用合格的类型名称作为域，并为错误代码从零开始枚举枚举。 （可选）你可以通过使你的类型符合 ` CustomNSError协议 ` 来提供自己的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，我们可以这样扩展 ` ParseError ` ：

``` Swift
extension ParseError: CustomNSError {
    static let errorDomain = "io.objc.parseError"
    var errorCode: Int {
        switch self {
            case .wrongEncoding: return 100 
            case .warning(_, _): return 200
        }
    }
    var errorUserInfo: [String: Any] { 
        return [:]
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以类似的方式，你可以为以下两个协议之一或全部添加一致性，以提供与Cocoa约定更好的互操作性：

+ → **LocalizedError** - 提供描述错误的本地化消息（ ` errorDescription ` ），发生错误的原因（ ` failureReason ` ），如何恢复的提示（ ` recoverySuggestion ` ）和其他帮助文本（ ` helpAnchor ` ）。
+ → **RecoverableError** - 描述用户可以通过提供一个或多个 ` recoveryOptions ` 并在用户请求时执行恢复来恢复的错误。这主要在使用 ` AppKit ` 的 ` macOS应用 ` 中使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使不符合 ` LocalizedError ` ，每个符合 ` Error ` 的类型都具有 ` localizedDescription属性 ` ，你可以在自己的类型中覆盖该属性。但是，由于 ` LocalizedDescription ` 不是 ` Error协议 ` 的要求，因此该属性不会动态分配。除非你还符合 ` LocalizedError ` ，否则你的自定义 ` localizedDescription ` 将不会被 ` Objective-C API ` 或 ` Error存在类 ` 中包装的值使用。编写 ` Cocoa ` 应用程序时，应始终对传递给 ` Cocoa API ` 的错误类型实施 ` LocalizedError协议 ` 。有关动态调度和存在性的更多信息，请参阅[***```“协议”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B9%9D):%20Protocols/ "")一章。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当Apple在 ` Swift 2.0 ` 中引入其错误处理模型时，社区中的许多人对此表示怀疑。引发使用未类型化错误的事实被视为与语言其他部分中严格输入的不必要偏离。毫不奇怪， ` Swift团队 ` 非常仔细地考虑了这一点，并故意处理了未键入的错误。我们也对此表示怀疑，但事后看来，我们认为Swift团队被证明是正确的，尤其是因为开发人员社区对错误处理模型的广泛认可。现在，我们有了一个带有通用故障类型的 ` Result类型 ` ，将来很有可能会添加强类型错误处理作为选择加入功能，并更好地支持异步错误和将错误作为值传递。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` 错误处理 ` 是 ` Swift ` 是一种实用语言的一个很好的例子，它首先针对最常见的用例进行了优化。与坚持使用基于 ` Result ` 和 ` flatMap ` 的“更纯”的功能样式相比，使习惯于C样式语言的开发人员保持语法熟悉是一个更重要的目标-尽管现在也可以在标准库中使用这些样式。错误处理模型的设计遵循Swift的一个共同主题：目标是以友好的命令式语法包装安全的“功能性”概念（另一个示例是值类型的可变性模型）。我们希望最终引入异步/等待式并发模型，包括在异步函数中支持抛出式错误处理，将是朝着这个方向迈出的又一步。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，我们有很多可能的选择来处理代码中的意外情况。当我们无法继续时，可以使用 ` fatalError ` 或 ` 断言 ` 。如果我们对错误的类型不感兴趣，或者只有一种错误，则可以使用可选选项。当我们需要一种以上的错误或想要提供其他信息时，可以使用 ` Swift ` 的内置错误或 ` Result类型 ` 。
