---
title: 'Advanced Swift系列(六):  Enums'
description: 'Advanced Swift系列(六):  Enums'
permalink: 'Advanced Swift系列(六):  Enums'
copyright: ture
date: 2020-05-07 11:51:48
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Enums
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Enums]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在上一章中讨论过的结构和类是记录类型的示例。一条记录由零个或多个字段（属性）组成，每个字段都有自己的类型。元组也属于此类：元组实际上是功能较少的轻量级匿名结构。记录是一个很明显的概念，我们认为它们是理所当然的。几乎所有的编程语言都允许你定义这种复合类型（BASIC的早期版本和原始Lisp可能是最著名的例外）。即使没有语言支持，即使汇编程序员也一直使用记录的概念在内存中构造数据。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift的一个或多个枚举属于根本不同的类别，有时称为标记联合或变量类型。尽管其概念与记录一样强大，但对变体的支持在主流编程语言中却很少普及。但是，它们在函数式语言中很常见，并已在诸如Rust的较新语言中流行。我们认为，枚举是Swift的最佳功能之一。

<!-- more -->

# **总览**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个枚举由零个或多个 ```case``` 组成，每个 ```case``` 都有一个可选的元组样式的关联值列表。 在本章中，我们有时会使用单数形式当我们谈论单个 ```case```  的关联值时，称为“关联值”。 一个 ```case```  可以具有多个关联值，但是你可以将它们视为一个元组。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个简单的枚举，没有关联的值来表示段落的对齐方式：

``` Swift
enum TextAlignment { 
    case left
    case center
    case right
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在 [***```“可选”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "") 一章中看到，“可选”是一个通用枚举，包含两种情况：“无”和“有”。 在某些情况下，具有与框值相关的值：

``` Swift
@_frozen enum Optional<Wrapped> { 
    /// The absence of a value.
    case none
    /// The presence of a value, stored as `Wrapped`.
    case some(Wrapped) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（暂时忽略```@_frozen```属性。稍后我们将在“Frozen and Non-Frozen Enums”中进行讨论。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Result类型```的目的是代表操作的成功或失败，其形状类似，但是为失败情况添加了第二个关联值（和相应的通用参数），从而使其能够捕获详细的错误信息：

``` Swift
enum Result<Success, Failure: Error> { 
    /// A success, storing a `Success` value. 
    case success(Success)
    /// A failure, storing a `Failure` value. 
    case failure(Failure)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在“错误处理”一章中详细讨论“结果”，并且还将在本章的许多示例中使用它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以通过指定其中一个 ```case```  来创建枚举值，以及该 ```case```  的关联值（如果有）的值：

``` Swift
let alignment = TextAlignment.left
let download: Result<String, NetworkError> = .success("<p>Hello world!</p>")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意，在第二行中，我们必须提供完整的类型注释，包括所有通用参数。 诸如`Result.success（htmlText）`之类的表达式会产生错误，除非编译器可以从上下文中推断出另一个通用参数的具体类型`Failure`。 一旦指定了完整的类型，我们就可以使用前导点语法依靠类型推断。 （NetworkError的定义未在此处显示。）

# **枚举是值类型**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**枚举是值类型**，就像结构一样。它们具有结构几乎具有的所有相同功能：

+ →枚举具有方法，计算的属性和下标。 
+ →方法可以声明为变异或非变异。
+ →你可以编写扩展名。
+ →枚举符合协议。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，枚举不能具有存储的属性。一个枚举的状态完全由其大小写以及该大小写的关联值表示。将关联的值视为特定情况下的存储属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举上的变异方法的工作方式与它们对结构相同。我们在[***```《结构和类》```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%94):%20Structs%20and%20Classes/ "")一章中介绍，在一个变异方法中，自我被传出并因此变得可变。由于枚举没有存储的属性，并且无法直接更改 ```case```  的关联值，因此我们通过直接向self分配新值来更改枚举。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举不需要显式的初始化程序，因为初始化枚举变量的通常方法是为其分配大小写。但是，可以在类型定义或扩展名中添加其他`“便捷”`初始化程序。例如，使用`Foundation`的`Locale API`，我们可以向`TextAlignment`枚举添加一个初始化程序，该初始化程序为给定的语言环境设置默认的文本对齐方式：

``` Swift
extension TextAlignment { 
    init(defaultFor locale: Locale) {
        guard let language = locale.languageCode else { // Default value if language is n/a.
        self = .left
        return
    }
    switch Locale.characterDirection(forLanguage: language) { 
        case .rightToLeft:
            self = .right
        // Left is the default for everything else.
        case .leftToRight, .topToBottom, .bottomToTop, .unknown:
            self = .left 
        @unknown default:
            self = .left 
        }
    } 
}

let english = Locale(identifier: "en_AU") TextAlignment(defaultFor: english) // left let arabic = Locale(identifier: "ar_EG") 
TextAlignment(defaultFor: arabic) // right
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（我们将在`“Frozen and Non-Frozen Enums”`部分介绍`@unknown`默认 ```case```  ）。

# **Sum Types and Product Types**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`枚举值`正好包含其中一种情况（如果有，则加上该情况的关联值）。实际上，在`Swift`成立之初（首次公开发布之前），枚举曾经被称为`“一个”`，后来被称为`“联合”`。更具体地说，`“结果”`值包含成功值或失败值，但不包含两者（且永不包含）。相反，记录类型的实例包含其所有字段的值：`（String，Int）`元组包含一个字符串和一个整数。 （请注意，此处我们讨论的是具有多个字段的复合记录； UInt8也是一个结构，你可能会说它将实例限制为`“ 0 ... 255之一”`。但这不是我们的意思。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种对`“或”`关系进行建模的能力非常独特，这正是枚举非常有用的原因。它使我们能够编写更安全，更具表达力的代码，从而在通常无法用结构，元组或类清晰地表达的情况下，充分利用强类型的优势。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们说`“相当独特”`是因为`协议和子类`可以用于相同的目的，尽管折衷和应用情况非常不同。协议类型的变量（也称为存在变量）可以是符合协议的任何类型的变量。同样，`iOS`上的`UIView类型`的对象也可以引用`UIView`的任何`直接或间接子`类，例如`UILabel`或`UIButton`。使用此类对象时，我们可以使用在基本类型上定义的公共接口（等效于在枚举上定义的调用方法），也可以尝试将实例向下转换为具体的子类型，以访问该子类型唯一的数据（相当于切换一个枚举）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不同之处在于哪种方法更常见（通过`协议和类的公共接口进行动态调度`，为枚举进行切换），以及构造具有的特定功能和局限性。例如，枚举的情况列表是固定的，不能追溯扩展，而你始终可以使一个类型符合协议或添加另一个子类（尽管跨模块边界的子类是受限制的，除非你明确声明一个类为open ）。是否这个自由是理想的，甚至是必需的，取决于要解决的问题。作为值类型，枚举通常也更轻量且更适合于建模“普通旧值”。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;两类类型（`“或”和“与”`）与加法和乘法的数学概念之间有着巧妙的对应关系。知道它对于成为一名优秀的Swift程序员并不是必不可少的，但是在设计自定义类型时，我们发现它很有帮助。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;术语`“类型”`有许多可能的定义。这里是一个：**类型是其实例可以假设的所有可能值或 ```inhabitants``` 的集合**。布尔有两个 ```inhabitants``` ，即假和真。 `UInt8`有 2^8 = 256个 ```inhabitants``` 。 `Int64`有264位 ```inhabitants``` ，约合18.4亿 ```inhabitants``` 。诸如`String`之类的类型有无数的 ```inhabitants``` -你总是可以通过添加一个字符来创建另一个字符串（至少直到你填满计算机的内存为止）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在考虑两个布尔字段的元组：（布尔，布尔）。有多少 ```inhabitants``` 这个类型有吗？答案是四个：（假，假），（真，假），（假，真）和（真，真）。除了这四个值，不可能构造其他任何类型的值。如果我们添加另一个布尔（布尔，布尔，布尔）怎么办？由于前四个 ```inhabitants``` 中的每一个都可以分别与false和true结合使用，因此 ```inhabitants``` 的数量增加了一倍，达到8个。当然，这不仅适用于布尔。 （布尔，UInt8）对具有2×256 = 512个 ```inhabitants``` ，因为256个UInt8 ```inhabitants``` 中的每一个都可以与两个布尔值之一配对。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般而言，元组（或结构或类）的 ```inhabitants``` 数量等于其成员的 ```inhabitants``` 产品。因此，结构，类和元组也称为 ```product types```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将此与枚举进行对比。 这是一个包含三种情况的枚举：

``` Swift
enum PrimaryColor { 
    case red
    case yellow
    case blue
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种类型有三个 ```inhabitants``` ，每个 ```case```  一个。 除了`.red`，`.yellow`或`.blue`之外，无法构造其他任何`PrimaryColor值`。 如果将关联的值添加到组合中会发生什么？ 让我们添加第四种情况，该情况允许我们指定介于0（黑色）和255（白色）之间的灰度值：

``` Swift
enum ExtendedColor { 
    case red
    case yellow
    case blue
    case gray(brightness: UInt8) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仅.gray ```case``` 就有256个可能的值，导致整个枚举的3 + 256 = 259个 ```inhabitants``` 。 一般而言，一个枚举的 ```inhabitants``` 人数等于其 ```case``` 中所有 ```inhabitants``` 的总数。 这就是为什么枚举也称为求和类型的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将字段添加到结构中会使可能的状态数量成倍增加，通常非常大。 将 ```case```  添加到枚举只会添加一个额外的 ```inhabitants``` （或者，如果 ```case```  具有关联值，则为其 ```inhabitants``` ）。 这是编写安全代码的非常有用的属性。 本章后面的`“用枚举设计”`部分是关于如何在我们的代码中利用此属性的。

# **Pattern Matching**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了对枚举值做一些有用的事情，我们通常必须检查其大小写并提取关联的值。以```Optionals```为例：涉及```Optionals```的每个操作（如```if-let绑定```，```Optional链接```或调用```Optional.map```）都是解开某些 ```case``` 的关联值并进一步处理它的简写。如果检查的值为无，则该操作通常会中止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检查枚举的最常见方法是使用```switch语句```，它使我们可以将一个值与单个语句中的多个候选值进行比较。作为额外的好处，```switch```具有方便的语法，用于将值与特定情况进行比较并一次性提取关联的值。这种机制称为模式匹配。模式匹配不是```switch```语句专用的，但它们是其最突出的用例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```模式匹配```非常有用，因为它使我们能够通过数据结构而不是仅通过其内容来分解数据结构。将纯匹配与值绑定结合在一起的能力使其特别强大。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```switch语句```中的每种情况都以与输入值匹配的一个或多个模式开头。模式描述值的结构。例如，以下示例中的模式```.success（42，_```）与枚举的成功 ```case``` 匹配，其中关联值是一对第一个元素等于42的对。下划线是通配符模式-该对的第二个元素可以是任何值。除了简单匹配，我们还可以提取复合值的一部分并将其绑定到变量。模式```.failure（let error）```匹配失败情况，并将关联的值绑定到新的局部常量错误：

``` Swift
let result: Result<(Int, String), Error> = ...
switch result {
    case .success(42, _):
        print("Found the magic number!") 
    case .success(_):
        print("Found another number") 
    case .failure(let error):
        print("Error: \(error)") 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一下[***```Swift支持的模式类型```***](https://docs.swift.org/swift-book/ReferenceManual/Patterns.html "")。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**通配符模式** - 下划线_匹配任何值并忽略它。通配符通常用于忽略关联值的一部分，而匹配另一部分。我们在上面看到了一个带有```.success（42，_）```的示例。在```switch```语句中，```case _```等效于默认关键字：两者都匹配任何值，并且仅在```switch```的最后一种情况下才有意义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**元组模式** — 用逗号分隔的零个或多个子模式列表匹配元组。例如，```（let x，0，_）```将一个具有三个元素的元组匹配，其中第二个元素为0，并将第一个元素绑定到x。元组模式本身仅与元组的结构匹配，即用括号括起来的逗号分隔值。元组内容是分别匹配的子模式（在此示例中，为值绑定模式，表达模式和通配符模式）。元组模式对于在单个```switch```语句中切换多个值非常有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**枚举大小写模式**  —匹配指定的枚举大小写。该模式可以包括关联值的子模式，无论是用于相等性检查``（.success（42））``还是用于值绑定```（.failure（让错误））```。要忽略关联的值，请使用下划线或完全忽略模式，例如```.success（_）```和```.success```是等效的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```枚举 ```case``` 模式```是提取枚举的关联值或与 ```case``` 匹配而忽略关联值的唯一方法。 （用于与特定情况进行比较（具有特定的关联值），你也可以在if语句中使用==（假设枚举是等值的。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**值绑定模式** - 将匹配值的部分或全部绑定到新的常数或变量。语法为`someIdentifier`或`varsomeIdentifier`。新变量的作用域是出现在其中的大小写块。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为单个模式中多个值绑定的简写，你可以在模式前添加一个let前缀，而不是对每个绑定重复let。模式让（x，y）和（让x，让y）等价。注意在单个模式中使用值绑定和相等匹配时的细微差别：模式（let x，y）将元组的第一个元素绑定到新常量，但将元组的第二个元素与现有变量y比较。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要将值绑定与绑定值必须满足的其他条件结合起来，可以使用where子句扩展值绑定模式。例如，
.success（let httpStatus）其中`200 .. <300〜= httpStatus`仅匹配关联值落在指定范围内的成功值。至关重要的是，`where子句`是在值绑定步骤之后求值的，因此我们可以在`where子句`中使用绑定变量。 （有关`模式匹配运算符〜=`的更多信息，请参见下面的表达式模式。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果在一 ```case``` 例中包含多个模式，则所有模式在其值绑定中必须使用相同的名称和类型。假设你要切换以下枚举：

``` Swift
enum Shape {
    case line(from: Point, to: Point)
    case rectangle(origin: Point, width: Double, height: Double) 
    case circle(center: Point, radius: Double)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，每个 ```case``` 的关联值都包含形状的原点，但是其他参数根据形状的种类而有所不同。 尽管如此，仍可以使用包含三种模式的单个case语句提取形状的原点：

``` Swift
switch shape {
    case .line(let origin, _), .rectangle(let origin, _, _), .circle(let origin, _):
        print("Origin point:", origin) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，你不能包含其他值绑定，例如圆的半径，因为当其中一种模式匹配时，编译器保证每个绑定变量都包含一个有效值。因此，编译器必须能够为每个变量分配一个有效值，并且如果形状变为直线或矩形，则它不能针对半径执行此操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**可选模式** — 通过使用熟悉的问号语法提供语法糖，用于匹配和展开可选值。模式让价值`？`等价于`.some（let value）`，即当可选参数为非`nil`时匹配，并将未包装的值绑定到常量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在[***```“可选内容”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "") 一章中看到的那样，我们也可以使用`nil`来匹配可选内容的`none`大小写。该速记不需要特殊的编译器魔术。因为标准库包括〜=运算符的重载，用于将可选内容与`nil`进行比较，所以它可以用作正则表达式模式（请参见下文）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**类型转换模式**-如果值的运行时类型与指定的类型或该类型的子类相同，则模式为`SomeType`匹配。 `let`值作为`SomeType`执行相同的检查，并将匹配的值强制转换为指定的类型，而只是检查类型：

``` Swift

let input: Any = ... switch input {
    case let integer as Int: ... // integer has type Int.
    case let string as String: ... // string has type String.
    default: fatalError("Unexpected runtime type: \(type(of: input)")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**表达式模式** - 通过将输入值和模式提供给在标准库中定义的模式匹配运算符`〜=`来与表达式匹配。 `Equatable类型`的`〜=`的默认实现转发到`==`; 这就是简单的相等性检查在模式中的工作方式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库还提供范围的`〜=重载`。 这使得检查值是否落在范围内（尤其是与单面范围组合时）的非常好的语法成为可能。 以下switch语句测试数字是正数，负数还是零：

``` Swift
let randomNumber = Int8.random(in: .min...(.max)) 
switch randomNumber {
    case ..<0: 
        print("\(randomNumber) is negative") 
    case 0: 
        print("\(randomNumber) is zero")
    case 1...: 
        print("\(randomNumber) is positive") 
    default: 
        fatalError("Can never happen")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，编译器迫使我们包括默认情况，因为它无法确定这三个具体情况涵盖了所有可能的输入（即使它们确实涵盖了），并且`switch语句`必须始终是详尽的。 我们将在“用枚举设计”部分中详细讨论穷举性检查。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`重载〜=运算符`不仅限于标准库。 我们可以通过为自定义类型`重载〜=来扩展模式匹配系统`。 实现`〜=的函数`必须具有以下形状：

``` Swift
func ~=(pattern: ???, value: ???) -> Bool
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**参数类型**可以自由选择（甚至不必相同）。 编译器将选择最适合输入值类型的重载。 对于编译器遇到的每个表达式模式，编译器都会评估表达式模式`〜= value`，其中`value`是我们要切换的值，而`pattern`是`case语句`中的模式。 如果表达式返回`true`，则匹配成功。 参数的类型可以自由选择。 编译器将选择最适合输入类型的实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们应该注意，除了玩具示例之外，我们从未发现有必要以这种方式`扩展模式匹配`。 标准库很好地涵盖了基础知识，而超出基础知识的任何内容都因无法将基于自定义`〜=的模式匹配`与`值绑定和通配符模式相结合`而遭受太多痛苦。

## ***上下文中的模式匹配***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**模式匹配**是**从枚举中提取关联值的唯一方法**。但是模式匹配不是枚举所独有的，也不是`switch语句`独有的。实际上，一个简单的赋值（例如let x = 1）可以看作是赋值运算符左侧与右侧表达式匹配的值绑定模式。其他模式匹配示例包括：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**解构作业中的元组**，例如`let（word，pi）=（“ Hello”，3.1415）`-并循环执行，例如字典`{...}`中的（键，值）。请注意，for循环不使用let来表示值绑定。在这种情况下，默认情况下，所有`标识符都是值绑定`。 for循环还支持where子句。例如，对于1 ... 10中的n，其中`n.isMultiple（of：3）{...}`仅执行3、6和9的循环体。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`元组模式`可以嵌套以破坏嵌套元组中的值，但是当嵌套元组具有标签时，有时你需要通过在模式中重复这些标签来帮助编译器（这不是必需的）。例如，仅在你包含外部元组的`key：和value：`标签，而`offset：和element：`标签的情况下才对`dictionary.enumerated（）{...}`中的`（num，（key：k，value：v））`进行编译可以省略。这是一个已知错误，将在Swift 5.1中修复。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用通配符忽略我们不感兴趣的值。例如，对于1中的_... 3，执行三次循环时不会为循环计数器创建变量，并且 `_ = someFunction（）`在我们要执行具有副作用的函数时会禁止编译器的“未使用的结果”警告。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在catch子句中捕获错误：`do {...}`将let错误作为`NetworkError {...}`捕获。有关更多信息，请参见错误处理一章。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`if case和guard case语句`类似于仅包含一个`case`的`switch语句`。这些有时是有用的，因为它们需要的行数少于 `switch` ，尽管我们在很多情况下更喜欢后者，以便利用编译器的详尽性检查。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`if / guard case [let]`的语法通常是`Swift`新手的一大障碍。我们认为这是因为它使用`赋值运算符=`进行基本的比较操作，并且仅可选地包括`值绑定`。例如，以下测试枚举是否为特定情况，但忽略关联值：

``` Swift
let color: ExtendedColor = ...
if case .gray = color { 
    print("Some shade of gray")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以将赋值运算符认为是`“执行右侧值与左侧模式的模式匹配”`。 当你包含使用相同语法的值绑定（仅`添加let或var`）时，它将变得更加清晰：

``` Swift
if case .gray(let brightness) = color { 
    print("Gray with brightness \(brightness)")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果让`x = x`用于可选内容的语法，则与熟悉的代码没有太大区别。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`for case`和`while case循环`的工作方式与`if case`类似。 它们仅允许你在模式匹配成功时执行循环。 有关示例，请参阅[***```“可选”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "")一章。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，`闭包表达式`中的参数列表有时看起来像模式，因为它们还`支持某种元组分解`。 例如，即使传递给`map`的函数被指定为具有单个`Element参数`（`Dictionary.Element`是（Key，Value）），我们也可以在字典上映射并在`转换闭包内`使用（key，value）参数列表 元组类型）：

``` Swift
dictionary.map { (key, value) in 
    ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，（ ```(key, value)``` 看起来像元组，但不是），它是一个包含两个项目的函数参数列表。 之所以可以将**参数组内的元组解包，是由于编译器中的特殊处理与模式匹配无关**。 如果没有此功能，我们将不得不使用单项参数列表（例如`{element in ...}`），然后在单独的行中将`element`（现在是真正的元组）分解为键和值。

# **Designing with Enums**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于**枚举与结构和类属于不同的类型类别**，因此它们适合于不同的设计模式。 而且，由于真正的总和类型在主流编程语言中相对较少（如果正在迅速增长），因此你可能不像传统的面向对象方法那样习惯使用它们。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们看一下我们可以在代码中使用的一些模式，以充分利用枚举。 我们将其分为六个要点：

+ 1.彻底切换
+ 2.不可能的非法状态
+ 3.用建模的状态
+ 4.在枚举和结构之间进行选择
+ 5.枚举和协议之间的平行
+ 6.使用枚举模型递归数据结构

## ***彻底切换***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在大多数情况下，对于具有`多个if条件条件`的`if case语句`，`switch`只是更方便的语法。除了语法差异外，还有一个重要的区别：**switch语句必须是详尽无遗的，即它的大小写必须覆盖所有可能的输入值**。编译器强制执行此操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**穷举性检查是编写安全代码并随着程序更改而保持代码正确性的重要工具**。每次将 ```case``` 添加到现有枚举时，编译器都会提醒你切换该枚举的所有位置，并需要处理新 ```case``` 。不对`if语句`执行穷举检查，也不能在包含默认情况的`switch语句`中使用穷举检查-由于默认值匹配任何值，因此这种开关永远不能穷举。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，我们建议你尽可能避免在`switch语句`中使用默认情况。你无法完全避免它们，因为编译器并不总是很聪明，无法确定一组情况是否实际上是详尽的。当我们切换一个`Int8`时，我们在上面看到了一个例子，我们的范围模式涵盖了所有可能的值。编译器只会在安全方面犯错误，也就是说，绝不会将一组非穷尽的模式报告为穷举性（除非编译器实现中存在错误）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，在切换枚举时，假阴性并不是问题。穷举检查对于以下类型是完全可靠的：

+ → 布尔
+ → 枚举，只要详尽检查了任何关联的值，或者你将它们与匹配任何值的模式（通配符或值绑定模式）相匹配
+ → 仔细检查元组的成员类型

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一个例子。 在这里，我们切换上面定义的`Shape枚举`：

``` Swift
let shape: Shape = ... 

switch shape {
    case let .line(from, to) where from.y == to.y: 
        print("Horizontal line")
    case let .line(from, to) where from.x == to.x: 
        print("Vertical line")
    case .line(_, _): 
        print("Oblique line")
    case .rectangle, .circle: 
        print("Rectangle or circle")
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们包括两个where子句，将水平线（等于y坐标）和垂直线（等于x坐标）视为特例。这两种情况不足以完全覆盖`.line`情况，因此我们需要另一个能够捕获所有剩余行的情况。尽管我们不希望在此处区分`.rectangle和.circle`，但与使用默认大小写情况相比，我们更愿意明确列出其余情况，因为这使我们能够利用**穷举性检查**的优势。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，编译器还验证了交换机中的每个模式都具有其权重。如果编译器可以证明某个模式永远不会匹配，则会发出警告，因为该模式已经被一个或多个前面的模式完全覆盖。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果枚举和使用该枚举的代码同步发展（即，每次将一个 ```case``` 添加到枚举时，切换该枚举的代码都可以同时更新），则穷举检查具有最大的优势。如果你可以访问程序依赖项的源代码并且该程序及其依赖项一起编译，则通常会如此。当以二进制形式分发库时，事情变得更加复杂，并且使用该库的程序必须准备好使用比该程序编译时已知的版本更高的库。在这种情况下，即使在其他详尽的开关中，也有必要始终包含默认情况。我们将在本章稍后的“Frozen and Non-Frozen Enums”部分中再次讨论这一点。

## ***不可能的非法状态***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用静态类型的编程语言（例如Swift）有很多充分的理由。 性能是一种：**编译器对程序中变量类型的了解越多，生成代码的速度就越快（通常）**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样重要的另一个原因是**类型可以指导开发人员如何使用API**。 如果将错误类型的值传递给函数，则编译器将立即抱怨。 我们可能将这种技术称为编译器驱动的开发-将编译器视为不是你必须与之抗衡的敌人，而是将其视为一种通过使用类型信息将你神奇地引导至正确解决方案的工具：

+ → 仔细选择输入和输出类型的函数可减少使用空间，因为类型为函数的行为建立了`“上限”`。 例如，如果你要实现一个以非可选对象作为参数的函数，则可以确保该对象在函数体内永远不会为零。 效果如何取决于我们可以如何严格限制类型以仅接受有效值。 枚举通常是精确定义允许值范围的理想工具。

+ → **静态检查的类型可以防止某些错误类别**；因为违反类型系统设置的约束而无法编译的代码将永远不必在运行时处理。

+ → **类型的文档永远同步**。不像注释那样，人们在修改代码时可能会忘记更新，这些类型是程序的组成部分，并且始终是最新的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，并不是每个方面都可以在类型系统中表示出来。例如，`Swift`不提供任何传达功能纯净（即没有副作用）或其性能特征的支持。这就是为什么我们仍然需要文档的原因，开发人员在更新现有代码时必须注意不要违反文档记载的保证。但是很明显，可以从编译器获得的帮助量随类型系统的功能而增长。 （我们应该注意，编程语言当然有可能超越它。向编译器提供更多信息需要开发人员进行更多工作，尽管通常会有所帮助，但有时可能会妨碍你解决实际任务。此外，更精细针对特定用例调整类型，你需要编写更多代码以在类型之间转换值。我们认为`Swift`尚未达到这一点，但没有免费的午餐。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们建议你设计自定义类型，以便最大程度地从编译器中获得帮助：**使用类型可以使非法状态无法表示**。之前我们在```Sum Types```和```Product Types```部分中看到，将一个个案添加到一个枚举中将为该类型恰好增加一个可能的值。你无法获得比这更细粒度的信息，这使得枚举对此非常有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;规范的示例是```Optional```，在所有情况下都不会为包装类型添加一个 ```inhabitants```。这正是在不诉诸哨兵价值观的情况下表示缺乏价值所需要的。我们在[***```“可选”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "") 一章中讨论了带有哨兵值的问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一下一个`API`，它比上面的指南难用，它比它应该使用的难。 `Apple`的`iOS SDK`中异步操作（例如执行网络请求）的常见模式是将完成处理程序（回调函数）传递给你所调用的方法。然后，该方法将在任务完成时调用处理程序，并传递操作结果。由于大多数异步操作都可能失败，因此结果通常可以是表示成功的某个值，例如服务器的响应或错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考虑`Apple`的`Core Location框架`中的地址解析`API`。你为其传递一个地址字符串和一个回调函数。地理编码器与服务器联系，该服务器返回地址的匹配地标对象。然后，地理编码器会使用地标或错误调用完成处理程序：

``` Swift
class CLGeocoder {
    func geocodeAddressString(_ addressString: String,
    completionHandler: @escaping ([CLPlacemark]?, Error?) -> Void) 
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;观察完成处理程序的类型，```([CLPlacemark]?, Error?) -> Void``` 。它的两个参数都是可选的。这意味着该功能可以有四种可能的状态与调用方通信：`（.some，.none）`，`（.none，.some）`，`（.ome，.some）`或`（.none，.none）`。 （这是一个简化的视图； `.some`状态确实具有无限多个可能的值，但我们只关心它们是`nil`还是`nonnil`。）问题在于，在四个合法状态中，只有前两个状态在实践中有意义。如果开发人员收到一系列地标和错误，应该怎么办？更糟糕的是，如果两个值都返回零，该怎么办？编译器在这里无法为你提供帮助，因为类型的精度不如预期。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，`Apple`在实现此方法时可能会小心，不要再返回这些无效状态之一，因此在实践中永远不会发生。但是`API`的用户不能确定这一点，即使今天是正确的，也不能保证在下一个`SDK版本`中它仍然是正确的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果`地理编码API`用 `Result <[CLPlacemark]，Error>` 值替换了两个可选参数，则它将对开发人员更加友好：

``` Swift
extension CLGeocoder {
    func geocodeAddressString(_ addressString: String,
    completionHandler: @escaping (Result<[CLPlacemark], Error>) -> Void) {
        // ...
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Result类型表示成功或失败，但从不表示成功和失败。**通过使用一种使无效状态无法表示的类型，API变得更易于使用，并且由于编译器不允许它们，因此根本不会发生所有潜在的错误。苹果的许多`iOS API`均未利用`Swift`的类型系统，因为它们是用`Objective-C`编写的，而`Object-C`的概念不等同于带有关联值的枚举。但这并不意味着我们无法在`Swift`中做得更好。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写函数时，请仔细考虑参数和返回类型。你可以将类型约束为有效的输入和输出值的集合越紧密，编译器可以为你（实现函数时）和`API`用户（调用时）提供更多帮助。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一下，到目前为止，我们一直忽略了`地理编码API`中的另一个有趣状态：如果返回的地标数组为空怎么办？文档似乎说这永远都不会发生，即，如果服务器找不到与输入字符串匹配的内容，则该函数将返回错误。但是还有另一种可能的解释：一个空数组可能表明请求本身已成功（没有网络错误等），但未找到匹配项。仅查看类型，我们就无法确定哪种解释正确。如果我们想对类型系统中的第一个解释进行编码，则需要一个数组类型，该类型可以提供编译时保证永远不会为空。标准库不提供此功能，但我们可以编写自己的库。基本思想是编写一个结构，该结构对数组的第一个元素（称为head）使用单独的属性，对其余元素（尾部）使用标准数组（可以为空）：

``` Swift
struct NonEmptyArray<Element> { 
    private var head: Element 
    private var tail: [Element]
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于`head`是非可选的，因此无法创建不包含至少一个元素的`NonEmptyArray`值。 `NonEmptyArray`的完整实现应符合`Array`采用的所有相同协议，尤其是`Collection`。 这将使它与普通数组一样方便使用-有时甚至更方便，因为我们可以重载某些`Collection API`（例如，第一个和最后一个）以返回非可选值。 如果你想尝试一下吗，请查看Brandon Williams和Stephen Celis编写的`NonEmpty库`。 这种模式的实现在包装的集合类型上是通用的（例如，你也可以有一个非空字符串）。 有关`Swift的Collection集协议`的深入讨论，请参阅```“Collection协议”```一章。

## ***使用枚举建模状态***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将使非法值无法代表的这一目标应用于应用程序设计的另一个主要方面：**如何在程序中建立状态模型**。程序的状态是给定时间点所有变量的内容，加上（隐式）其当前的执行状态，即正在运行的线程和正在执行的指令。状态“记住”诸如应用程序处于哪种模式，正在显示哪些数据，当前正在处理的用户交互等内容。除了最琐碎的程序之外，所有程序都是有状态的：**执行特定指令时，接下来会发生什么取决于系统所处的当前状态**。（`HTTP是无状态协议的示例`，这意味着服务器必须处理HTTP请求而无需考虑先前的请求Web开发人员必须使用Cookie之类的功能来记住多个请求的状态。但是，即使HTTP是无状态的，处理HTTP请求的程序仍然可以保持其内部状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程序运行时，它会响应外部事件（例如用户交互或来自网络的传入数据）而更改其状态。这可以在开发人员无需过多考虑的情况下隐式地发生-毕竟，状态突变一直在发生。但是随着应用程序变得越来越复杂，最好有意识地定义程序（或其子系统之一）可能处于的状态以及状态之间的合法过渡。**系统可以处于的状态集也称为其状态空间**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尝试使程序的状态空间尽可能小。状态空间越小，开发人员的工作就越容易-状态空间越小，减少了代码必须处理的情况。由于枚举对有限数量的状态进行建模，因此它们是建模状态和状态之间转换的理想选择。而且，由于每个状态（或枚举案例）都带有自己的数据（以关联值的形式），因此很容易使非法状态组合无法表示，就像我们在上一节中看到的那样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（我们应该注意，程序的状态空间在技术上很可能是无限大的，特别是如果你接受文本或上传的图像等形式的用户输入。这些数据类型自然地具有无限或几乎无限多个 ```inhabitants```。但是就像在上一节中，我们仅关心值是否为nil或nonnil，这是通常不是问题。大多数系统状态的基本部分通常是有限的，而且数量通常很少。否则，我们将无法在代码中对它们进行建模。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一个例子。假设我们正在编写一个聊天应用程序。当用户打开聊天频道时，该应用应在从网络加载消息列表时显示微调框。网络请求完成后，如果请求失败，则UI会转换为显示消息或显示错误。
首先，让我们考虑一下如何在不使用枚举的情况下以传统方式为应用程序状态建模（从技术上讲，我们仍在使用枚举，因为我们将使用可选选项，但你会明白的）。我们可以使用三个变量-在网络请求进行时将其设置为true的布尔值，以及消息列表和错误的两个可选值：

``` Swift
struct StateStruct {
    var isLoading: Bool
    var messages: [Message]? 
    var error: Error?
}
// Set initial state.
var structState = StateStruct(isLoading: true, messages: nil, error: nil)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加载时，消息和错误均应为零，然后在网络请求完成时为其中之一分配一个值。它们绝不能同时为非`nil`，当任何一个为`非nil`时，`isLoading`也不应为`true`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回想一下我们关于总和类型与产品类型以及如何确定一种类型的 ```inhabitants```数量的讨论。 `StateStruct结构`是一种产品类型，具有2×2×2 = 8个可能的状态：布尔值true或false的任意组合，以及两个可选值中的任一个的none或some的任何组合（再次，我们忽略了的无限多个状态某些情况，因为它们与本次讨论无关）。这是一个问题，因为我们的应用程序仅需要处理这八个状态中的三个：`加载`，显`示消息列表或显示错误`）。其他五个是无效的组合，如果我们正确编写程序，就永远不会发生这种组合，但是我们不能期望编译器会提供任何帮助来避免创建无效状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我们将状态建模为自定义枚举，并加载，加载和失败三种状态：

``` Swift
enum StateEnum {
    case loading
    case loaded([Message])
    case failed(Error) 
}
// Set initial state.
var enumState = StateEnum.loading
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你会立即注意到，设置初始状态变得更加简洁，因为我们不必担心与初始状态无关的属性。 此外，我们完全消除了以无效状态结束的机会。 由于每个状态都有自己的关联数据，因此加载和失败的关联值不必是可选的。 结果，除非我们的代码中实际上有一个·，否则不可能转换到失败状态。（对于装入状态，事情不太清楚，因为你始终可以分配一个空数组，但这并不是你很可能会意外地执行的操作。）当程序处于特定状态时，我们可以确定所有该状态的必要数据也可用。 我们的`StateEnum枚举`充当状态机的基础。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**枚举不是完整的有限状态机，因为它们缺乏指定非法状态转换的能力**-例如，在我们的简单示例中，应该不可能从加载状态转换为失败状态，反之亦然。 实际上，除非拥有所有关联数据的有效值，否则无法实例化状态几乎是一样好的：在一个设计良好的程序中，不太可能在代码中找到很多地方状态可用，但转换到该状态仍然是无效操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，每次我们的代码需要访问某些状态相关的数据（例如`messages数组`）时，我们现在都被迫切换状态枚举以提取关联的值。 有时可能会感到不便，因为`switch语法`过于笨拙。 但这是一项重要的安全功能，因为它迫使我们始终处理所有可能的状态-至少在遵守准则的情况下，不要在switch语句中使用默认情况。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，你可能已经注意到，我们开始时使用的结构以及我们替换为它的枚举并不是建模此状态的唯一方法。 实际上，`StateStruct.isLoading`属性是多余的，因为在我们的设计中，当且仅当消息和错误均为零时，`isLoading`才为true。 我们可以使`isLoading`计算属性不丢失任何内容：

``` Swift
struct StateStruct2 {
    var messages: [Message]? var error: Error?
    var isLoading: Bool {
        get { 
            return messages == nil && error == nil 
        } 
        set {
            messages = nil
            error = nil 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样可以将可能的状态数从8种减少到4种，仅留下一个无效状态（当消息和错误为非零时）—并不完美，但是比我们开始时要好。通常很难注意到这样的冗余属性，但这是类型的 ```inhabitants```与代数之间的联系真正可以帮助我们的地方。如本例所示，如果我们确定我们的自定义类型有2×2×2个 ```inhabitants```，但其中只有三个有效，那么很容易看出其中一个因素是多余的：2×2足以容纳三个州，因此必须有可能消除一种成分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具有两个互斥的可选值的模式可能还会使你想起上一节中用Result <[CLPlacemark]，Error>替换的示例（[CLPlacemark] ?, Error？）。将相同的模式应用于我们的示例将产生Result <[Message]，Error>，但是请注意，两种情况并不完全相同。聊天应用需要第三个状态“正在加载”，其中消息和错误均为零。将Result嵌套在一个可选变量中可以完成此操作（回想一下，将一个类型包装在一个可选变量中总是会恰好增加一个 ```inhabitants```），从而得到我们状态的这种替代表示形式：

``` Swift
/// nil means "loading."
typealias State2 = Result<[Message], Error>?
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这等效于我们的自定义枚举，即它是一种具有三个状态且这些状态的有效载荷相同的类型。 （`Result <[Message] ?, Error>`是另一个等效的变体。）但是从语义上讲，这可以说是一个较弱的解决方案，因为尚不能立即清楚nil代表“加载”状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的示例仅将应用程序的单个子系统的状态建模为枚举。但是你可以进一步推动这种模式，并将整个程序的状态建模为单个枚举-通常，该程序具有大量嵌套的枚举和破坏该枚举的结构。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指出各个子系统的状态。这个想法是有一个单一的变量来捕获程序的全部状态。所有状态更改都会通过一个变量，你可以观察到该变量（例如，使用`didSet`），以在状态更改时更新应用的用户界面。这种设计还可以轻松地将整个应用程序状态写入磁盘，并在下次启动时将其读回，从而使你可以免费进行状态还原。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管你可以将整个应用程序状态建模为枚举，但按状态枚举模式的好处是你无需全力以赴即可从中受益。你可以从转换单个子系统（例如一个视图控制器）开始，然后看看它是如何工作的。然后，通过将子系统的状态枚举包装在一个新的枚举（每个子系统有一个案例）中，逐步向上处理层次结构。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总而言之，**枚举非常适合建模状态**。它可以在很大程度上防止无效状态，并且将子系统（甚至整个程序）的整个状态都保留在单个变量中，使状态转换不易出错。此外，穷举切换使编译器可以在添加新状态或更改其关联值时指出需要更新的代码路径。

## ***在枚举和结构之间选择***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在本章前面讨论了枚举和结构如何具有非常不同的属性：枚举值恰好表示其情况之一（加上其关联值），而结构值表示其所有属性的值。 尽管存在这些差异，但是遇到可以使用枚举或结构解决的问题并不少见。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将使用枚举和结构为分析事件创建数据类型。 这是枚举变量：

``` Swift
enum AnalyticsEvent {
    case loginFailed(reason: LoginFailureReason) 
    case loginSucceeded
    ... // more cases.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后使用几个计算属性扩展该枚举，这些属性将切换该枚举并返回该类型的用户所需的数据，即应发送到服务器的实际字符串和字典：

``` Swift
extension AnalyticsEvent { 
    var name: String {
        switch self {
        case .loginSucceeded:
        return "loginSucceeded" case .loginFailed:
        return "loginFailed" // ... more cases.
    }
    var metadata: [String: String] { 
        switch self {
            // ...
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，我们可以将相同的分析事件建模为结构，将其名称和元数据存储在两个属性中。 我们提供静态方法（与上面的枚举情况相对应）来创建特定事件的实例：

``` Swift
struct AnalyticsEvent {
    let name: String
    let metadata: [String : String]

    private init(name: String, metadata: [String: String] = [:]) { 
        self.name = name
        self.metadata = metadata
    }

    static func loginFailed(reason: LoginFailureReason) -> AnalyticsEvent { 
        return AnalyticsEvent(
                name: "loginFailed"
            metadata: ["reason" : String(describing: reason)] )
    }
    static let loginSucceeded = AnalyticsEvent(name: "loginSucceeded") 
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们已将初始化方法声明为私有方法，因此公共接口与```enum变体```相同：在``enum``公开`.loginFailed（reason :)`或`.loginSucceeded`之类的情况下，该结构公开静态方法或属性。名称和元数据属性在两种变体中都可用，既可以作为计算属性（在枚举中），也可以作为存储属性（在`struct`中）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，每个版本的`AnalyticsEvent类型`都有其独特的特征，根据你的要求，这些特征可能成为优点或缺点：

+ → 如果我们将结构的初始化程序设为内部或公共状态，则该结构可以扩展到其他文件或什至具有附加静态方法或属性的其他模块中，从而向API添加新的分析事件。枚举变体无法做到这一点：你无法追溯地向枚举添加新案例。

+ → 枚举可以更精确地对数据建模；它只能代表其预定义的情况，而该结构可能在其两个属性中表示无限数量的值。如果要对事件进行进一步处理（例如合并事件序列），则枚举的精度和安全性会派上用场。
+ → 该结构可以拥有私有的`“用例”`（即并非对所有客户端可见的静态方法或静态属性），而枚举的用例始终具有与枚举本身相同的可见性。

+ → 你可以在整个枚举上进行详尽的切换，以确保事件类型不为错。但是由于切换枚举的严格性，向该枚举添加其他事件类型对于此API的用户来说是潜在的破坏源代码的更改，而你可以将新事件类型的静态方法添加到结构中，而不影响其他代码。

## **枚举与协议之间的并行**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乍一看，枚举和协议似乎并没有太多共同点。 但是实际上，这两个概念之间存在一些有趣的相似之处。 在`“求和类型和乘积类型”`部分中，我们提到了**枚举不是唯一可以表达“一种”关系的构造； 协议也可以用于此目的**。 在本节中，我们将看一个例子，并讨论这两种方法之间的差异。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从本章前面使用的类型开始-一个枚举，以在绘图应用程序中建模许多不同的形状：

``` Swift
enum Shape {
    case line(from: Point, to: Point)
    case rectangle(origin: Point, width: Double, height: Double) 
    case circle(center: Point, radius: Double)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;形状可以是直线，矩形或圆形。 为了将这些形状渲染到 `Core Graphics` 上下文中，我们在扩展中添加了 `render` 方法。 实现必须切换自我并针对每种情况执行适当的绘图命令：

``` Swift
extension Shape {
    func render(into context: CGContext) {
        switch self {
            case let .line(from, to): 
                // ...
            case let .rectangle(origin, width, height): 
                // ... 
            case let .circle(center, radius): 
                // ...
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，我们可以使用协议将形状定义为可以将自身呈现到`Core Graphics`上下文中的任何类型：

``` Swift
protocol Shape {
    func render(into context: CGContext)
}
``` 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们上面以枚举形式表示的形状类型现在变为符合`Shape协议`的具体类型。 每个符合类型的类型都实现自己的`render（into :)`方法：

``` Swift
struct Line: Shape { 
    var from: Point 
    var to: Point

    func render(into context: CGContext) {
         /* ... */ 
    } 
}

struct Rectangle: Shape { 
    var origin: Point
    var width: Double
    var height: Double

    func render(into context: CGContext) { 
        /* ... */ 
    }
}
// `Circle` type omitted.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管在功能上是等效的，但有趣的是要考虑如何使用`枚举或协议`来组织这两种方法，以及如何使用新功能对其进行扩展。基于枚举的实现按方法分组：所有类型的`CGContext`呈现代码都位于`render（into :)`方法中的单个`switch`语句中。另一方面，基于协议的实现按“案例”进行分组：每种具体的形状类型都实现其自己的`render（into :)`方法，其中包含其特定的渲染代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就可扩展性而言，这将产生重要的后果：`使用enum变体`，我们可以轻松添加新的渲染方法，例如`渲染为SVG文件`-稍后在`Shape的扩展中`，甚至在其他模块中也是如此。但是，除非我们控制包含枚举声明的源代码，否则我们无法向枚举添加新的形状。即使我们可以更改枚举的定义，对于切换该枚举的所有方法，添加新的用例也将是一项破坏源代码的更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，我们可以轻松地使用`协议变体添加新的形状`：我们只需创建一个新结构并将其符合`Shape协议`即可。但是，除了修改原始的`Shape协议`外，我们无法添加新的渲染方法，因为我们无法在协议声明之外添加新的协议要求。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（我们可以在扩展程序中向协议中添加新方法，但是正如我们将在```“协议”```一章中看到的那样，扩展方法通常不适合向协议中添加新功能，因为它们不会动态分配。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事实证明，在这种情况下，```枚举和协议具有互补的优点和缺点```。每个解决方案在一个维度上都是可扩展的，而在另一个维度上则缺乏灵活性。如果API的声明及其用法在同一模块中发生，枚举和协议之间的可扩展性差异就不那么重要了。不过，如果你在编写库代码，则应考虑扩展性的哪个维度更重要：**添加新案例或添加新方法**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你对跨模块边界的可扩展性这一特定问题感兴趣，请查看我们与布兰登·凯斯（Brandon Kase）录制的有关该主题的[***```Swift Talk集```***](https://talk.objc.io/episodes/S01E88-extensible-libraries-1-enums-vs-classes "")。在这些情节中，我们探索了一种使我们能够同时在两个维度上获得可扩展性的技术。

## ***使用枚举为递归数据结构建模***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**枚举非常适合建模递归数据结构**，即`“包含”`自身的数据结构。 想一想树的结构：一棵树有多个分支，每个分支是另一棵树，它再次分支成多个子树，依此类推，直到到达叶子为止。 许多常见的数据格式是树结构，例如 HTML，XML和JSON。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为递归数据结构的一个示例，让我们实现一个比树还要简单的结构：`一个单链表`。 链接列表节点是以下两件事之一：**具有值和对下一个节点的引用的节点，或指示列表结尾的节点**。 `“或”`或`“或”`关系强烈表明求和类型（即枚举）非常适合为该数据结构定义类型。 这是在其元素上通用的List类型的定义：

``` Swift
/// A singly linked list.
enum List<Element> {
    case end
    indirect case node(Element, next: List<Element>)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，间接关键字是进行此编译所必需的。 间接告诉编译器将节点的情况表示为参考，从而使递归起作用。 要了解原因，请记住**枚举是值类型**。 值类型不能包含自身，因为允许它在计算类型的大小时会产生无限递归。 编译器必须能够确定每种类型的固定大小和有限大小。 将递归的情况作为参考来解决此问题，因为参考增加了一个间接级别。 编译器知道任何引用的存储大小始终为8字节（在64位系统上）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**间接语法仅适用于枚举**。 如果它不可用，或者我们想对递归结构建模，我们可以通过将递归值装在类中来复制相同的行为，从而手动创建间接寻址。 这是一个通用类，可用作任何值的参考框：

``` Swift
final class Box<A> {
    var unbox: A

    init(_ value: A) { 
        self.unbox = value 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，我们可以编写List枚举而不使用间接的：

``` Swift
enum BoxedList<Element> {
    case end
    case node(Element, next: Box<BoxedList<Element>>)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们必须一直执行手动装箱和拆箱操作，因此该枚举的使用不太方便，但它几乎等同于“列表”类型。 之所以说“几乎”，是因为间接点从整个节点case移到关联值的下一个元素，而完全相同的解决方案会将整个关联值包装在框中，如下所示：`case node(Box<(Element, next: BoxedList<Element>)>)` 。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以将间接添加到枚举声明本身，即间接枚举列表`{...}`。 这是一种较短的语法，用于在所有具有关联值的情况下启用间接寻址（间接仅应用于关联值，而从未应用于枚举用于区分其情况的标记位）。 对于我们的List类型，这两个变量都是等效的，因为没有与值关联但不应该间接存储的个案。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;展望未来，我们将继续利用原始列表枚举，该枚举可利用间接枚举。 手动装箱的弯路只是为了向你显示间接只是语法糖，而不是编译器魔术。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们讨论一下如何使用`List枚举`。 我们通过创建一个新节点将元素添加到列表的前面，并将下一个值设置为当前节点：

``` Swift
let emptyList = List<Int>.end
let oneElementList = List.node(1, next: emptyList) 
// node(1, next: List<Swift.Int>.end)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使此过程更容易一些，我们可以创建一个用于添加元素的方法。 我们将此方法命名为`cons`，因为这是Lisp中的操作的名称（它是`“construct”`的缩写，将元素添加到列表的前面有时称为`“consing”`）：

``` Swift
extension List {
    /// Return a new list by prepending a node with value `x` to the 
    /// front of a list.
    func cons(_ x: Element) -> List {
        return .node(x, next: self) 
    }
}
// A 3-element list, of (3 2 1).
let list = List<Int>.end.cons(1).cons(2).cons(3)
/*
node(3, next: List<Swift.Int>.node(2, next: List<Swift.Int>.node(1,
next: List<Swift.Int>.end))) */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;链接语法可以清楚地说明列表的构造方式，但也很丑陋。 我们可以为`ExpressibleByArrayLiteral`添加一致性，以便能够使用数组文字初始化列表。 该实现首先反转输入数组（因为列表是从末尾开始构建的），然后使用`reduce`从`.end`节点开始将`reduce`元素逐个添加到列表中：

``` Swift
extension List: ExpressibleByArrayLiteral { 
    public init(arrayLiteral elements: Element...) {
        self = elements.reversed().reduce(.end) { 
            partialList, element in partialList.cons(element)
        } 
    }
}
let list2: List = [3,2,1]
/*
node(3, next: List<Swift.Int>.node(2, next: List<Swift.Int>.node(1,
next: List<Swift.Int>.end))) */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此列表类型具有一个有趣的属性：`“持久”`。 节点是不可变的，一旦创建，就无法更改它们。 将另一个元素包含在列表中不会复制该列表。 它只是为你提供了一个链接到现有列表前面的新节点。
这意味着两个列表可以共享一条尾巴：

![Memeory](http://q8wtfza4q.bkt.clouddn.com/aseu-stp1.png "List Sharing")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;列表的不变性在这里很关键。 如果可以更改列表（例如，删除最后一个条目或更新节点中保留的元素），则此共享将是一个问题-x可能会更改列表，而更改会影响y。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，我们可以在List上定义诱变方法来推送和弹出元素：

``` Swift
extension List {
    mutating func push(_ x: Element) {
        self = self.cons(x) 
    }
    mutating func pop() -> Element? { 
        switch self {
            case .end: 
                return nil
            case let .node(x, next: tail):
                self = tail
                return x 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是我们不是只说清单必须是不变的，才能使持久性发挥作用吗？ 它怎么有突变方法？ 这些变异方法不会更改列表。 相反，它们只是更改变量引用的列表部分：

``` Swift
var stack: List<Int> = [3, 2, 1] 
var a = stack
var b = stack
a.pop() // Optional(3) 
stack.pop() // Optional(3) 
stack.push(4)
b.pop() // Optional(3) 
b.pop() // Optional(2) 
stack.pop() // Optional(4) s
tack.pop() // Optional(2)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变异方法使我们可以更改self所引用的值，但是这些值本身（列表的节点）是不可变的。 从这个意义上讲，通过间接，变量已成为列表的迭代器：

![Memeory](http://q8wtfza4q.bkt.clouddn.com/aseu-stp2.png "List Iteration")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在`“Collection协议”`一章中，我们将回到使用列表作为迭代器的想法，在此我们使列表枚举与序列协议保持一致。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，你可以使用let而不是var来声明变量，在这种情况下，变量将是常量（即，设置后便无法更改其持有的值）。 但是让我们来谈谈变量，而不是值。 根据定义，值是恒定的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，这只是事物运作方式的逻辑模型。 实际上，这些节点实际上位于彼此指向的内存中。 而且它们占用了空间，如果不再需要, Swift使用自动引用计数（ARC）进行管理，并为不再使用的节点释放内存：

![Memeory](http://q8wtfza4q.bkt.clouddn.com/aseu-stp3.png " List Memory Management")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于递归枚举的另一个示例，请查看`“互操作性”`一章，在该章节中，我们使用枚举构建表示`Markdown文本`的数据结构。 你会注意到，尽管我们建立的两个枚举都是递归的，但它们不需要`indirect`关键字。 这是因为它们的子节点是数组。 由于数组在内部使用引用类型作为其存储，因此它们已经提供了所需的间接级别，从而使间接不必要。

# **Raw Values**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时最好将枚举的每种情况与数字或其他值相关联。 默认情况下，`C`或`Objective-C`中的枚举都是这样的-实际上，它们实际上只是整数。` Swift枚举`不能与任意整数互换，但是我们可以选择声明枚举的大小写与原始值之间的一对一映射。 这对于与`C API`互操作或以`JSON之类`的数据格式对枚举值进行编码很有用（我们将在`“编码和解码”`一章中讨论的`Codable系统`可以自动为具有`原始值的枚举合成Codable一致性`） ）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;给出枚举原始值包括将原始值类型（由冒号与类型名称分隔）添加到类型声明中。 然后，你可以使用赋值语法为每种情况分配一个原始值。 这是原始状态类型为`Int`的`HTTP状态代码`的枚举示例：

``` Swift
enum HTTPStatus: Int { 
    case ok = 200
    case created = 201
    // ...
    case movedPermanently = 301
    // ...
    case notFound = 404
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个案例必须具有唯一的原始值。 如果我们不提供一种或多种情况的值，则编译器将尝试选择合理的默认值。 在这个例子中，我们可以省略所创建案例的显式原始值分配。 编译器会通过增加前一个案例的原始值来选择相同的值201。

## ***The RawRepresentable Protocol***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原始可表示类型获得两个新的API：`rawValue属性`和失败的初始化程序 `(init?(rawValue:))` 。 这些在`RawRepresentable协议`中声明（编译器自动为具有原始值的枚举实现此协议）：

``` Swift
/// A type that can be converted to and from an associated raw value.
protocol RawRepresentable {
    /// The type of the raw values, such as Int or String. associatedtype RawValue
    init?(rawValue: RawValue)
    var rawValue: RawValue { get } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初始化程序可能失败，因为对于每个`RawValue类型`的居民，可能没有一个有效的符合类型的值。 例如，只有几十个整数是有效的`HTTP状态代码`。 对于所有其他输入，`HTTPStatus.init？（rawValue :)`必须返回nil：

``` Swift
HTTPStatus(rawValue: 404) // Optional(HTTPStatus.notFound) 
HTTPStatus(rawValue: 1000) // nil 
HTTPStatus.created.rawValue // 201
```

## ***RawRepresentable Conformance***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上述将原始值分配给枚举的语法仅适用于一组有限的类型； 原始值类型可以是字符串，字符或任何整数或浮点类型。 这涵盖了很多用例，但这并不意味着这些类型是唯一可能的原始值类型。 因为以上语法只是 `RawRpresentable一致性` 的语法糖，所以如果需要更大的灵活性，始终可以选择手动实现一致性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的示例定义一个枚举，该枚举表示逻辑坐标系中的点，其中x和y坐标可以采用介于-1（左/下）和1（右/上）之间的值。 该坐标系有点类似于`Apple`的`Core Animation框架`中`CALayer`的`anchorPoint属性`。 我们使用一对整数作为原始值类型，并且由于便捷语法不支持元组，因此我们手动实现`RawRepresentable`：

``` Swift
enum AnchorPoint { 
    case center
    case topLeft 
    case topRight 
    case bottomLeft 
    case bottomRight
}

extension AnchorPoint: RawRepresentable {
    typealias RawValue = (x: Int, y: Int)

    var rawValue: (x: Int, y: Int) { 
        switch self {
            case .center: return (0, 0)
            case .topLeft: return (-1, 1)
            case .topRight: return (1, 1) 
            case .bottomLeft: return (-1, -1) 
            case .bottomRight: return (1, -1) 
        }
    }

    init?(rawValue: (x: Int, y: Int)) { 
        switch rawValue {
            case (0, 0): self = .center 
            case (-1, 1): self = .topLeft
            case (1, 1): self = .topRight 
            case (-1, -1): self = .bottomLeft 
            case (1, -1): self = .bottomRight 
            default: return nil
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这还需要编写一些代码，但这并不困难。 这正是编译器在自动`RawRepresentable`综合中为我们生成的代码。 不足为奇的是，在两种情况下，枚举用户的行为都是相同的：

``` Swift
AnchorPoint.topLeft.rawValue // (x: -1, y: 1) 
AnchorPoint(rawValue: (x: 0, y: 0)) // Optional(AnchorPoint.center) 
AnchorPoint(rawValue: (x: 2, y: 1)) // nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手动实现`RawRepresentable`时要注意的一件事是**重复的原始值的分配**。 自动综合要求原始值是唯一的-重复会导致编译错误。 但是，在手动实施中，编译器不会阻止你为多个枚举案例返回相同的原始值。 使用重复的原始值可能有充分的理由（例如，当枚举使用多个大小写作为彼此的同义词时，也许是为了向后兼容），但这是例外。 切换枚举总是匹配枚举的大小写，而不匹配原始值。 换句话说，即使一个案例具有相同的原始价值，你也无法将其匹配。

## ***RawRepresentable用于结构和类***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，`RawRepresentable`不仅限于枚举； 你还可以遵循结构或类。 对于为保护类型安全而引入的简单包装类型，`RawRepresentable一致性`通常是一个不错的选择。 例如，程序可以使用字符串在内部表示用户ID。 最好直接定义一种新的UserID类型，以防止与其他字符串变量意外混合，而不是直接使用String。 仍然可以使用字符串初始化UserID并提取其字符串值。 `RawRepresentable`非常适合以下要求：

``` Swift
struct UserID: RawRepresentable { 
    var rawValue: String
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里，`rawValue属性`满足两个协议要求之一，但是第二个要求（初始化程序）的实现又去了哪里呢？ 它由`Swift`的针对结构的自动成员初始化器提供。 编译器足够聪明，可以接受（不失败的）`init（rawValue :)`作为协议所需的失败初始化程序的实现。 这具有很好的副作用，即从字符串创建UserID时，我们不必处理可选参数。 如果要验证输入字符串（也许并非所有字符串都是有效的用户ID），我们都必须为`init？（rawValue :)`提供我们自己的实现。

### ***原始值的内部表示***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了添加的`RawRepresentable API`和自动可编码综合之外，带有原始值的枚举实际上与所有其他枚举没有什么不同。 特别是，具有原始值的枚举将保留其完整的类型标识。 与C语言不同，在C语言中，你可以将任意整数值分配给枚举类型的变量，而带有Int原始值的Swift枚举不会“成为”整数。 枚举实例只能具有的值是枚举的大小写。 获取原始值的唯一方法是通过`rawValue`和`init？（rawValue :) API`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拥有原始值也不会改变枚举的内存表示形式。 我们可以通过定义一个带有String原始值的枚举并查看类型的大小来验证这一点：

``` Swift
enum MenuItem: String { 
    case undo = "Undo" 
    case cut = "Cut"
    case copy = "Copy" 
    case paste = "Paste"
}

MemoryLayout<MenuItem>.size // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MenuItem类型只有一个字节大。 这告诉我们MenuItem实例不在内部存储原始值-如果是这样，则必须至少大16个字节（在64位平台上为String的大小）。 rawValue的编译器生成的实现就像一个计算属性一样，类似于上面显示的AnchorPoint的实现。

## **Enumerating Enum Cases**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的 `Sum Types and Product Types `中，我们讨论了一种类型的居民：类型实例可以具有的所有可能值的集合。 将这些值作为一个集合来操作通常很有用，例如 遍历它们或计数它们。 `CaseIterable协议`通过添加名为`allCases`的静态属性（即在类型而非实例上调用的属性）来对此功能进行建模：

``` Swift
/// A type that provides a collection of all of its values.
protocol CaseIterable { 
    associatedtype AllCases: Collection
    where AllCases.Element == Self 
    static var allCases: AllCases { get }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于没有关联值的枚举，编译器可以自动生成`CaseIterable实现`。 我们要做的就是声明符合性。 让我们对上一部分中的`MenuItem类型`进行此操作：

``` Swift
enum MenuItem: String, CaseIterable { 
    case undo = "Undo"
    case cut = "Cut"
    case copy = "Copy"
    case paste = "Paste" 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为`allCases属性`是一个`Collection`，所以它具有你从数组和其他集合中了解的所有常规属性和功能。 在以下示例中，我们使用`allCases`获取所有菜单项的计数并将其转换为适合在用户界面中显示的字符串（为简单起见，我们将原始值直接用作菜单项标题； 实际应用会将原始值用作存储本地化标题的查找表的键）：

``` Swift
MenuItem.allCases
// [MenuItem.undo, MenuItem.cut, MenuItem.copy, MenuItem.paste] 
MenuItem.allCases.count // 4
MenuItem.allCases.map { $0.rawValue } // ["Undo", "Cut", "Copy", "Paste"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与其他编译器综合协议实现（例如`Equatable`和`Hashable`）相似，自动生成的`CaseIterable一致性`的最大好处不是代码本身的困难（编写手动实现很简单），而是由编译器生成的代码这一事实。 始终保持最新状态–每次添加或删除案例时都必须更新手动一致性，这很容易忘记。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`CaseIterable协议`没有在`allCases集合`中规定值的特定顺序，但是`CaseIterable`的文档保证了合成的一致性按声明顺序提供了案例。

## ***Manual CaseIterable Conformance***


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`CaseIterable`对于没有关联值的纯枚举特别有用，并且这些是自动编译器综合涵盖的唯一类型。 这是有道理的，因为向枚举添加关联的值会使枚举可能具有无限数量的居民数量。 但是，只要我们能提出一种产生所有居民集合的方法，我们就始终可以手动实现一致性。 实际上，我们甚至不限于枚举。 尽管名称`CaseIterable`和`allCases`暗示此功能主要用于枚举（没有其他类型具有大小写），但是编译器很乐意接受符合该协议的结构或类。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写手动`CaseIterable`实现的最简单类型之一是`Bool`：

``` Swift
extension Bool: CaseIterable { 
    public static var allCases: [Bool] {
        return [false, true] 
    }
}
Bool.allCases // [false, true]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一些整数类型也是很好的匹配。 请注意，`allCases`的返回类型不必是数组，它可以是任何`Collection`。 当一个范围可以用更少的内存表示同一集合时，生成每个可能的整数的数组将是非常浪费的：

``` Swift
extension UInt8: CaseIterable {
    public static var allCases: ClosedRange<UInt8> {
        return .min ... .max 
    }
}
UInt8.allCases.count // 256
UInt8.allCases.prefix(3) + UInt8.allCases.suffix(3) // [0, 1, 2, 253, 254, 255]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按照相同的逻辑，如果你要为具有大量居民的类型或生成值非常昂贵的类型编写 ```CaseIterable``` 实现，请考虑返回一个惰性集合，以免预先执行不必要的工作。 我们将在`“Collection协议”`一章中讨论延迟收集。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，这两个示例都忽略了通用规则，即不将你不拥有的类型与你不拥有的协议相一致。 在生产代码中违反此规则之前，请考虑与此相关的权衡。 有关更多信息，请参阅协议一章。

# **Frozen and Non-Frozen Enums**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们反复强调，枚举的最佳品质之一是能够在其上进行彻底切换。很明显，如果编译器在编译时知道枚举可能具有的所有可能情况，则只能执行其详尽性检查。对于与切换它们的代码在同一模块中的枚举声明，这确实是正确的。如果枚举声明位于另一个库中，但是该库与客户端代码一起编译，也是如此-每次添加或删除大小写时，枚举声明和客户端代码都将重新编译，从而允许编译器重新检查所有switch语句。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，在某些情况下，我们希望从以二进制形式链接到程序的模块中切换枚举。标准库是最突出的例子：即使标准库的源代码是免费提供的，我们通常也会使用`Swift`发行版或操作系统附带的二进制文件。 Swift附带的其他库（包括`Foundation`和`Dispatch`）也是如此。最后，`Apple`和其他公司希望以二进制形式发布Swift库。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以标准库类型为例，假设我们要在代码中切换`DecodingError`实例。从`Swift 5.0`开始，`DecodingError`是一个枚举，它具有四种情况来指示不同的错误情况：

``` Swift

let error: DecodingError = ...

// Exhaustive at compile time, but possibly not at runtime.
switch error {
    case .typeMismatch: ... 
    case .valueNotFound: ... 
    case .keyNotFound: ... 
    case .dataCorrupted: ... 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着`Codable`系统的扩展，未来的Swift版本也将添加更多的案例。但是，如果我们构建了一个包含此代码的应用程序并将其交付给客户，则其中的某些客户最终可能会在具有包含另一个`DecodingError`案例的较新`Swift版本`的较新`OS`上运行该可执行文件。在这种情况下，我们的程序会崩溃，因为它遇到了无法处理的条件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**一个将来可能会获得新案例的枚举称为非冻结枚举**。为了使程序能够抵抗非冻结枚举的更改，从另一个模块切换非冻结枚举的代码必须始终包含默认子句，以便能够处理将来的情况。在Swift 5.0中，如果省略默认情况，则编译器仅发出警告（不是错误），但这只是暂时的情况，使现有代码的迁移更加容易。在将来的版本中它将成为错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你接受编译器的警告修复程序，则会注意到它在默认情况下添加了`@unknown属性`：

``` Swift
switch error { ...
    case .dataCorrupted: ... 
    @unknown default:
    // Handle unknown cases.
    ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`@unknown default`在运行时的行为类似于普通的`default`子句，但这也向编译器发出信号，表明默认情况仅用于处理在编译时未知的枚举情况。如果默认大小写与编译时已知的大小写匹配，我们仍会收到警告。这意味着我们将来在较新的库接口上重新编译程序时，仍然可以从穷举检查中受益。如果自上次更新以来将一个案例添加到库API中，我们将收到警告以更新所有`switch`语句以显式处理新案例。` @unknown`默认值可为你提供两全其美的优势：**编译时穷举性检查和运行时安全性**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在`Swift 5.0`中，仅对标准库，`Apple框架`的`Swif`t叠加层以及从`C`和`Objective-C`导入的枚举启用了`冻结和非冻结枚举`之间的区别。标准库和覆盖以特殊的弹性模式编译，该模式由`-enable-resilience`编译器标志触发。弹性库中的枚举（即旨在维护版本之间的二进制兼容性的库）默认情况下未冻结。还有一个未记录的属性`@_frozen`，用于将特定的枚举声明标记为冻结。通过使用此属性，库的开发人员保证永远不会在该枚举中添加其他大小写，否则将破坏二进制兼容性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中的冻结枚举示例包括`“Optional”`和`“Result”`；如果它们没有冻结，那么切换它们将始终需要一个默认子句，这将是一个很大的麻烦。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着`Swift`的用于构建弹性库的功能集在将来的版本中不断发展，很可能每个人都可以选择构建弹性二进制库。在撰写本文时，正在审查一项实现此目的的`Swift Evolution`提案，其中包括将`@frozen`属性（现在带有正式的，非下划线的名称）公开。

# **技巧和窍门**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们以一些提示和技巧结束本章。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽量避免嵌套`switch语句`。 你可以使用元组一次切换多个值。 例如，假设你要基于两个布尔值设置变量。 一次又一次地切换`Bools`，需要重复内部开关，这很快就变得很丑陋：

``` Swift
let isImportant: Bool = ... 
let isUrgent: Bool = ...
let priority: Int 
switch isImportant { 
    case true:
        switch isUrgent {
            case true: 
                priority = 3 
            case false: 
                priority = 2 
        }
    case false:
        switch isUrgent {
            case true: 
                priority = 1 
            case false: 
                priority = 0 
        }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将两个`Bools`放入一个元组并进行切换会更短且更易读：

``` Swift
let priority2: Int
switch (isImportant, isUrgent) { 
    case (true, true): 
        priority2 = 3 
    case (true, false): 
        priority2 = 2 
    case (false, true): 
        priority2 = 1 
    case (false, false): 
        priority2 = 0 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**利用明确的初始化检查**。再看一下前面的代码示例。这种在切换之前声明但不初始化let常量，然后在每种情况下都进行初始化的模式，利用了编译器的明确初始化检查功能。编译器会验证变量在首次使用前是否已完全初始化-如果我们忘记在一个或多个代码路径中进行初始化，它将发出错误。这种样式比将优先级设为`var`并为其分配两次（一次在声明站点，然后再次在开关内部）的天真的选择要安全得多。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像`if`一样，`switch`是一个语句，而不是一个表达式，尽管我们经常希望它是后者。 `Swift`没有方便的语法来设置由于切换枚举而导致的变量。在每种情况下，在`switch`语句之前声明一个常量并分配给它是我们所能做的最好的事情。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;避免将枚举案例命名为 `none ` or `some`。这些是枚举案例的诱人名称；但是，由于在模式匹配上下文中与`Optional`的案例名称可能会发生冲突，因此我们建议你避免使用它们。因此，这是一个有问题的枚举定义：

``` Swift
enum Selection { 
    case none 
    case some 
    case all
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们有一个类型为`Selection`的变量？ （即可选），并希望将其与模式匹配：

``` Swift
var optionalSelection: Selection? = ...
if case .some = optionalSelection { 
    // Some items selected? Or?
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它只匹配`Selection.some`还是匹配`Optional.some`，即任何非nil值？ 答案是后者，但这很容易出错，特别是考虑到Swift喜欢将非可选值隐式提升为可选值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于带有保留字的案例名称，请使用反引号。 如果你使用某些关键字作为案例名称（例如默认名称），则类型检查器会抱怨，因为它无法解析代码。 你可以将单词包装在反引号中以使用它：

``` Swift
enum Strategy {
    case custom
    case `default` // requires backticks.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样做的好处是，在类型检查器可以消除你的意思歧义的地方，不需要反引号。 这是完全正确的：

``` Swift
let strategy = Strategy.default
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举大小写可以像工厂方法一样使用。 如果枚举案例具有关联的值，则案例名称将单独构成具有签名`（AssocValue）-> Enum`的函数。 使用此枚举来表示两种颜色空间（RGB或灰度）之一中的颜色：

``` Swift
enum OpaqueColor {
    case rgb(red: Float, green: Float, blue: Float) 
    case gray(intensity: Float)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`OpaqueColor.rgb`是一个函数，它需要三个Float并产生一个`OpaqueColor`：

``` Swift
OpaqueColor.rgb // (Float, Float, Float) -> OpaqueColor
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以将这些函数传递给高阶函数，例如`map`。 在这里，我们通过将枚举案例直接传递给`map`作为工厂方法来创建从黑色到白色的灰度颜色渐变：

``` Swift
let gradient = stride(from: 0.0, through: 1.0, by: 0.25).map(OpaqueColor.gray) /*
[OpaqueColor.gray(intensity: 0.0), OpaqueColor.gray(intensity: 0.25),
OpaqueColor.gray(intensity: 0.5), OpaqueColor.gray(intensity: 0.75), OpaqueColor.gray(intensity: 1.0)]
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**不要使用关联的值来伪造存储的属性。 改用结构。** 枚举不能存储属性。 这听起来像是一个重大限制，但事实并非如此。 如果考虑一下，添加`类型T`的存储属性实际上与为每种情况添加相同类型的关联值没有什么不同。 例如，让我们通过为每种情况指定一个更多的关联值，从上方将`alpha`通道添加到我们的`OpaqueColor类型`：

``` Swift
enum AlphaColor {
    case rgba(red: Float, green: Float, blue: Float, alpha: Float) 
    case gray(intensity: Float, alpha: Float)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以，但是现在从`AlphaColor实例`中提取`Alpha`量不是很方便-我们必须切换该实例并从每种情况中提取值，即使我们知道每个`AlphaColor`都具有`Alpha成分`。 我们可以将此逻辑包装在一个计算属性中，但是更好的解决方案可能是首先避免该问题-让我们将原始的`OpaqueColor`枚举包装在结构中，并将`alpha`用作该结构的存储属性：

``` Swift
struct Color {
    var color: OpaqueColor 
    var alpha: Float
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一种通用模式：当你看到一个枚举，其中每个个案的有效载荷中都有相同的数据时，请考虑将枚举包装在结构中并拉出公用属性。 这会改变结果类型的形状，但不会改变其基本性质。 与在数学方程式中排除一个公因子相同：`a×b + a×c = a×（b + c）`。 与代数的对应关系就是为什么总和与乘积类型的总称是`“代数数据类型”`的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**不要过度使用相关的值要素。** 在本章中，我们将关联值与多个元组样式的组件一起使用，例如`OpaqueColor.rgb（red：green：blue :)`。 这对于简短的示例很方便，但是在生产代码中，针对每种情况编写自定义结构通常是更好的选择。 比较上面我们在“模式匹配”部分中使用的`Shape类型`的两个版本。 首先，这是原始的元组样式：

``` Swift
enum Shape {
    case line(from: Point, to: Point)
    case rectangle(origin: Point, width: Double, height: Double) 
    case circle(center: Point, radius: Double)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一种选择，每个案例有一个自定义结构：

``` Swift
struct Line {
    var from: Point 
    var to: Point
}

struct Rectangle { 
    var origin: Point 
    var width: Double 
    var height: Double
}

struct Circle {
    var center: Point 
    var radius: Double
}

enum Shape2 {
    case line(Line)
    case rectangle(Rectangle) 
    case circle(Circle)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后一个示例首先需要编写一些代码，但是它将清除`enum声明`以及`switch语句`中的模式。 此外，这些结构具有自己的标识； 我们可以扩展它们并使它们符合协议。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用无大小写的枚举作为名称空间。 除了由模块形成的隐式名称空间之外，`Swift`并没有内置的名称空间。我们可以将枚举用作“假”名称空间。 由于类型定义可以嵌套，因此外部类型充当它们包含的所有声明的名称空间。 正如我们在[***```“可选内容”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%89):%20%20Optionals/ "")一章中看到的，没有实例化的枚举（例如从不）不能被实例化。 这使空无一枚枚举的枚举成为定义自定义名称空间的最佳选择。 标准库也这样做，例如使用Unicode“命名空间”：

``` Swift
/// A namespace for Unicode utilities.
public enum Unicode { 
    public struct Scalar {
        internal var _value: UInt32
        // ...
    }
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不幸的是，无大小写的枚举并不是缺少适当名称空间的完美解决方案：**协议不能嵌套在其他声明中**，这就是为什么相关标准库协议命名为`UnicodeCodec`而不是`Unicode.Codec`的原因。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**枚举是求和类型**。 在定义自定义类型时，枚举是避免纯粹基于产品类型的设计的有害状态组合爆炸的重要工具。 仔细考虑类型的居民有助于我们做出更好的设计决策。 如果你需要一种精确地针对你要解决的问题（例如，为程序状态建模）的类型，则枚举或嵌套枚举和结构的组合通常是最佳选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与更熟悉的记录类型相比，枚举适合于不同的设计模式。 你的目标应该是使非法程序状态无法在你的类型中表示。 这减少了代码必须准备处理的状态集，并使编译器在编写新代码时为你提供指导。 尽可能利用编译器的详尽性检查。
