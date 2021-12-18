---
title: 'Advanced Swift系列(九): Protocols'
description: 'Advanced Swift系列(九): Protocols'
permalink: 'Advanced Swift系列(九): Protocols'
copyright: ture
keywords: 'iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型编程,多态'
tags:
  - - iOS
  - - Swift
  - - Advanced Swift
  - - Protocols
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Advanced Swift
abbrlink: 11230
date: 2020-05-08 13:08:48
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当使用 `泛型类型 `时，我们经常想约束它们的 `泛型参数 `。将 `泛型 `与 `协议 `一起使用有许多不同的原因。以下是一些常见示例：

+ → 你可以使用一个 `协议名称 `来构建一个 `算法 `，该 `算法 `取决于 `sona类型 `是一个数字（无论具体的数字类型如何）或一个集合。通过根据 `协议进行编程 `，所有符合类型的类型都可以接收新功能。

+ → 你可以在 `协议 `中使用不同的 `“后端”抽象协议 `。你可以针对随后由 `不同类型 `实现的 `协议进行编程 `。例如，绘图程序可以使用 `Drawable协议 `，并由 `SVG渲染器 `和 `Core Graphics渲染器 `实现。同样，跨平台代码可以将 `Platform协议 `与 `Linux `， `macOS `和 `iOS的特定实例 `一起使用。

+ → 你可以使用 `协议 `使 `代码可测试 `。更具体地说，当你编写使用协议而不是具体类型的代码时，可以在测试中用另一个具体实现替换一个具体实现。


<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift `中的 `协议声明 `了一组正式的要求。例如， `Equatable协议 `要求一致性类型实现 `==运算符 `。这些要求可以包括 `方法 `， `初始化程序 `， `关联的类型 `， `属性 `和 `继承的协议 `。某些协议还具有其他要求，这些要求在 `Swift `的类型系统中无法体现。例如，集合协议期望通过下标访问元素是O（1）。 （只要记录在案，你就可以偏离O（1）。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们来看一下 `Swift `的一些主要协议功能。在本章中，我们将深入讨论所有这些功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift `中的协议可以通过更多 `功能进行扩展 `。最简单的示例是 `Equatable `：它需要实现 `==运算符，但随后添加！=运算符 `，该运算符使用 `== `的定义。同样， `Sequence协议 `几乎没有要求（你需要提供一种制作迭代器的方法），但是通过扩展添加了许多方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `协议 `还可 `具有条件扩展 `，以添加需要其他约束的 `API `。例如， `Collection协议 `具有方法 `max（） `，该方法仅适用于 `元素类型符合Comparable的集合 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `协议 `可以 `继承其他协议 `。例如， `Hashable `指定符合它的任何类型也必须是 `Equatable `的。同样， `RangeReplaceableCollection `从 `Collection `继承，而 `Collection `又从 `Sequence `继承。换句话说，我们可以形成 `协议层次结构 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，协议可以组合在一起。例如， `Codable `是标准库中的一个类型别名，由 `Encodable和Decodable `组成。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些情况下， `协议一致性 `取决于 `其他一致性 `。例如，当且仅当其元素类型符合 `Equatable `时，数组才符合 `Equatable `。这称为 `条件一致性 `：**数组与等式的一致性取决于其元素是否符合等式**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `协议 `可以声明 `关联类型 `，并且需要一**个符合类型才能为这些关联类型指定具体类型**。例如， `IteratorProtocol协议 `定义了一个 `关联的类型Element `，并且符合 `IteratorProtocol `的每种类型都定义了其 `Element类型 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上所有功能均不限于标准库；我们也可以在我们自己的协议中使用它们。尽管在 `Swift `中 `面向协议的编程 `是必不可少的，但我们也想提一个警告。**每个协议都添加了一层抽象**，有时，这可能会导致难以理解的代码。同时，使用协议有时可以大大简化代码。在这里找到一个良好的平衡需要一些经验。

# **Protocol Witnesses**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们希望本部分可以帮助你更好地了解 `协议的工作方式 `。 我们通过想象没有协议的Swift来做到这一点。 例如，假设我们要在 `Array `上编写一个方法来测试所有元素是否相等。 没有 `Equatable协议 `，我们需要显式传递一个比较函数：

``` Swift
extension Array {
    func allEqual(_ compare: (Element, Element) -> Bool) -> Bool {
        guard let f = first else { return true } 
        for el in dropFirst() {
            guard compare(f, el) else { return false } 
        }
        return true
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使事情更加正式，我们可以围绕该函数创建包装器类型，以表示其作为相等函数的作用：

``` Swift
struct Eq<A> {
    let eq: (A, A) -> Bool
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以创建 `Eq `的实例，以比较各种具体类型的值，例如 `Int `。 我们将这些值称为平等的明确见证：

``` Swift
let eqInt: Eq<Int> = Eq { $0 == $1 }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这又是 `allEqual `，但是现在使用 `Eq `而不是普通函数。 请注意，我们使用 `通用元素类型 `，以确保所有类型匹配：

``` Swift
extension Array {
    func allEqual(_ compare: Eq<Element>) -> Bool {
        guard let f = first else { return true } 
        for el in dropFirst() {
            guard compare.eq(f, el) else { return false } 
        }
        return true
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然 `Eq类型 `似乎有些晦涩，但它反映了协议在幕后的工作方式：当向通用类型添加 `Equatable约束 `时，只要 `构造该类型的具体实例 `，就会传递协议见证。 对于 `Equatable `，此协议见证方恰好包含 `==运算符 `以比较两个值。 编译器会根据你选择的具体类型自动传递此协议见证。 这是使用协议而非显式 `explicit witnesses `的 `allEqual版本 `：

``` Swift
extension Array where Element: Equatable { 
    func allEqual() -> Bool {
        guard let f = first else { return true } 
        for el in dropFirst() {
            guard f == el else { return false } 
        }
        return true
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们也可以向 `Eq `添加扩展名。 例如，如果能够确定两个值是否相等，我们还可以编写一种方法来测试两个值的不相等性：

``` Swift
extension Eq {
    func notEqual(_ l: A, _ r: A) -> Bool {
        return !eq(l,r) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这类似于 `协议扩展 `：我们利用 `eq `存在的事实，并可以在此之上构建更多功能。 在 `Equatable协议 `上写相同的扩展看起来几乎是相同的。 而不是使用A，我们使用隐式通用参数Self，它是符合类型的占位符：

``` Swift
extension Equatable {
    static func notEqual(_ l: Self, _ r: Self) -> Bool {
        return !(l == r) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这正是标准库为 `Equatable类型 `实现 `！=运算符 `的方式。

## ***条件符合***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要为数组编写一个 `Eq版本 `，我们需要一种比较两个元素的方法。 我们可以将 `eqArray编写 `为函数，并将显式见证作为值传递：

``` Swift
func eqArray<El>(_ eqElement: Eq<El>) -> Eq<[El]> { 
    return Eq { arr1, arr2 in
        guard arr1.count == arr2.count else { return false } 
        for (l, r) in zip(arr1, arr2) {
            guard eqElement.eq(l, r) else { return false } 
        }
        return true
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，这直接对应于 `Swift `中的条件一致性。 例如，这是标准库如何使数组符合 `Equatable `的方式：

``` Swift
extension Array: Equatable where Element: Equatable { 
    static func ==(lhs: [Element], rhs: [Element]) -> Bool {
        fatalError("Implementation left out") 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;添加 `Element `必须符合 `Equatable的约束 `等同于将参数 `eqElement `添加到上述 `eqArray函数 `。 在扩展中，我们现在可以使用 `==运算符 `比较两个元素。 最大的区别是使用协议时，协议见证程序是自动传递的。

## ***协议继承***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift `还支持 `协议继承 `。 例如，可比协议也需要任何符合类型才能符合 `Equatable `。 这也称为 `精炼 `。 换句话说： `Comparable refines Equatable `：

``` Swift
public protocol Comparable : Equatable { 
    static func < (lhs: Self, rhs: Self) -> Bool 
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们不带协议的虚构 `Swift `版本中，我们还可以通过为 `Comparable `创建显式见证类型并在其中包含 `Equatable `以及 `lessThan函数 `来表达这一概念：

``` Swift
struct Comp<A> {
    let equatable: Eq<A>
    let lessThan: (A, A) -> Bool
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再次，这非常类似于协议从其他协议继承时协议见证的工作方式。 在 `Comp `的扩展中，我们现在可以同时使用 `Eq `和 `lessThan `：

``` Swift
extension Comp {
    func greaterThanOrEqual(_ l: A, _ r: A) -> Bool {
        return lessThan(r, l) || equatable.eq(l, r) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传递明确的 `explicit witnesses `的概念是一种有用的思维模型，有助于理解编译器在内部所做的事情。 当我们陷入尝试解决协议问题时，我们发现它特别有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，请记住，这两种方法并不完全等效。 虽然我们可以创建无限数量的具有相同类型的显式见证值，但一个类型最多只能符合一个协议。与明确的 `explicit witnesses `不同，这些一致性会自动传递出去。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果每种类型允许多个一致性，则编译器将不得不想出一种方法来选择最合适的一致性。 结合条件一致性等功能，这很快就变得很复杂。 因此，为了避免这种复杂性，Swift不允许多个一致性。

## ***使用协议进行设计***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本节中，我们将介绍一个由两种具体类型实现的 `绘图协议 `的示例：我们可以将 `绘图渲染 `为 `SVG `或 `Apple核心图形框架 `的图形上下文中。 让我们从定义椭圆和矩形要求的协议开始：

``` Swift
protocol DrawingContext {
    mutating func addEllipse(rect: CGRect, fill: UIColor) 
    mutating func addRectangle(rect: CGRect, fill: UIColor)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;符合 `CGContext `很简单； 我们设置填充颜色，然后填充指定的形状：

``` Swift
extension CGContext: DrawingContext {
    func addEllipse(rect: CGRect, fill fillColor: UIColor) {
        setFillColor(fillColor.cgColor)
        fillEllipse(in: rect) 
    }
    
    func addRectangle(rect: CGRect, fill fillColor: UIColor) { 
        setFillColor(fillColor.cgColor)
        fill(rect)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，符合我们的 `SVG类型 `也不是很复杂。 我们将矩形转换为一组 `XML属性 `，并将 `UIColor `转换为十六进制字符串（例如， `白色变为#ffffff `）：

``` Swift
extension SVG: DrawingContext {
    mutating func addEllipse(rect: CGRect, fill: UIColor) {
        var attributes: [String:String] = rect.svgEllipseAttributes 
        attributes["fill"] = String(hexColor: fill) 
        append(Node(tag: "ellipse", attributes: attributes))
    }

    mutating func addRectangle(rect: CGRect, fill: UIColor) { 
        var attributes: [String:String] = rect.svgAttributes 
        attributes["fill"] = String(hexColor: fill) 
        append(Node(tag: "rect", attributes: attributes))
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（ `SVG `， `CGRect.svgAttributes `， `CGRect.svgEllipseAttributes `和 `String.init（hexColor :) `的定义未在此处显示；对于示例而言，它们的定义并不重要。）

## ***协议扩展***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift协议 `的主要功能之一是 `协议扩展 `。 一旦知道如何绘制椭圆，我们还可以添加扩展名以围绕中心点绘制圆。 我们这样做是对 `DrawingContext `的扩展：

``` Swift
extension DrawingContext {
    mutating func addCircle(center: CGPoint, radius: CGFloat, fill: UIColor) {
        let diameter = radius * 2
        let origin = CGPoint(x: center.x - radius, y: center.y - radius) let size = CGSize(width: diameter, height: diameter)
        let rect = CGRect(origin: origin, size: size)
        addEllipse(rect: rect.integral, fill: fill)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要使用以上内容，我们可以在 `DrawingContext `上编写另一个扩展，该扩展在一个较大的黄色正方形上方呈现一个蓝色圆圈：

``` Swift
extension DrawingContext { 
    mutating func drawSomething() {
        let rect = CGRect(x: 0, y: 0, width: 100, height: 100) 
        addRectangle(rect: rect, fill: .yellow)
        let center = CGPoint(x: rect.midX, y: rect.midY) 
        addCircle(center: center, radius: 25, fill: .blue)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过将方法编写为 `DrawingContext `的扩展，我们现在可以在 `SVG `和 `CGContext `实例上都调用它。 这是整个 `Swift标准库 `中使用的一项技术：**遵守协议需要实现一些方法，然后你可以通过该协议的扩展“免费”获得更多功能**。

## ***自定义协议扩展***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将 `方法 `添加为 `协议扩展 `并不会使它成为协议要求的一部分。 这可能会导致棘手的行为。 回到我们的示例，我们想利用 `SVG `对 `圆的内置支持 `，即 `SVG `中的圆应绘制为“圆”而不是“椭圆”。 让我们将特殊的 `addCircle方法 `添加到我们的 `SVG `实现中：

``` Swift
extension SVG {
    mutating func addCircle(center: CGPoint, radius: CGFloat, fill: UIColor) {
        let attributes = [
        "cx": "\(center.x)",
        "cy": "\(center.y)",
        "r": "\(radius)",
        "fill": String(hexColor: fill),
        ]
        append(Node(tag: "circle", attributes: attributes)) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们创建 `SVG类型 `的变量并对其调用 `addCircle `时，将调用上述方法：

``` Swift

var circle = SVG()
circle.addCircle(center: .zero, radius: 20, fill: .red) 
circle
/*
<svg>
<circle cx="0.0" cy="0.0" fill="#ff0000" r="20.0"/> </svg>
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;毫不奇怪。 但是，当我们在 `Drawing `（包含对 `addCircle `的调用）上调用 `drawSomething（） `时，将不会调用上述方法。 请注意，生成的 `SVG语法 `包含一个椭圆标记，而不是我们打算具有的 `circle标记 `：

``` Swift
var drawing = SVG() 
drawing.drawSomething() 
drawing
/*
<svg>
<rect fill="#ffff00" height="100.0" width="100.0" x="0.0" y="0.0"/> <ellipse cx="50.0" cy="50.0" fill="#0000ff" rx="25.0" ry="25.0"/> </svg>
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与以前相比，这种行为可能非常令人惊讶。 要了解发生了什么，我们首先将 `drawSomething扩展 `重写为具有 `显式泛型 `的自由函数。 这具有与我们之前编写的 `协议扩展完全相同 `的语义：

``` Swift
func drawSomething<D: DrawingContext>(context: inout D) { 
    let rect = CGRect(x: 0, y: 0, width: 100, height: 100) 
    context.addRectangle(rect: rect, fill: .yellow)
    let center = CGPoint(x: rect.midX, y: rect.midY) 
    context.addCircle(center: center, radius: 25, fill: .blue)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，通用参数 `D `被限制为 `DrawingContext `。这意味着编译器在调用它时将传递 `DrawingContext协议 `的协议见证。 `explicit witnesses `仅包含协议的要求，即 `addRectangle `和 `addEllipse `方法。由于 `addCircle方法 `仅在扩展程序中定义，而不在协议中定义，因此它不包含在见证中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题的关键在于，只有 `explicit witnesses `的方法才能以一致的类型动态地分派给特定的具体实现，因为 `explicit witnesses `是运行时唯一可用的动态信息。要求中的非要求通用上下文始终以静态方式分派给协议扩展中定义的实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结果，当我们从 `drawSomething函数 `中调用 `addCircle `时，它将被静态分派到协议的扩展中。编译器根本无法生成将调用动态分派到 `SVG `上的扩展所必需的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了获得动态调度行为，我们应该使 `addCircle成为协议 `的要求：

``` Swift
protocol DrawingContext {
    mutating func addEllipse(rect: CGRect, fill: UIColor)
    mutating func addRectangle(rect: CGRect, fill: UIColor)
    mutating func addCircle(center: CGPoint, radius: CGFloat, fill: UIColor)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `协议扩展 `中现有的 `addCircle `实现现在成为需求的默认实现。 由于存在默认实现，因此我们无需执行任何其他操作即可编译我们的代码。 现在 `addCircle `是协议的一部分，它也是协议 `explicit witnesses `的一部分，当我们使用 `SVG值 `调用 `drawSomething `时，将调用正确的自定义实现：

``` Swift
var drawing2 = SVG() 
drawing2.drawSomething() 
drawing2
/*
<svg>
<rect fill="#ffff00" height="100.0" width="100.0" x="0.0" y="0.0"/> <circle cx="50.0" cy="50.0" fill="#0000ff" r="25.0"/>
</svg>
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `具有默认实现的协议方法 `有时在 `Swift社区 `中称为 `自定义点 `。 符合类型会收到默认实现，但是如果愿意，可以覆盖它。 标准库广泛使用定制点。 一个示例是用于计算两个集合索引之间的距离的 `distance（from：to :) `方法。 默认实现是O（n）操作，因为它会遍历集合的所有索引。 因为 `distance（from：to :) `是自定义点，所以可以提供更有效实现的集合类型（例如Array）能够覆盖默认实现。

## ***协议组成***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**协议也可以组合在一起**。 标准库中的一个示例是 `Codable `。 这是 `可编码和可解码的类型 `别名：

``` Swift
typealias Codable = Decodable & Encodable
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这意味着我们可以编写以下函数，并且在其主体内，我们可以利用两种协议在使用值时：

``` Swift
func useCodable<C: Codable>(value: C) { 
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以将 `组合可编码 `和 `可分解 `视为新协议，然后使用类型别名将其命名为 `可编码 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的绘图示例中，我们可能要渲染一些属性字符串（这些字符串中的子范围通过格式设置，例如强调，字体和颜色）。 但是， `SVG `本身不支持属性字符串（但 `Core Graphics `支持）。 与其向我们的 `DrawingContext协议 `中添加方法，不如创建一个单独的协议：

``` Swift
protocol AttributedDrawingContext {
    mutating func draw(_ str: NSAttributedString, at: CGPoint)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，我们可以使 `CGContext符合新协议 `，但不必添加 `SVG `支持。 然后，我们可以将两种协议结合起来，例如，将 `DrawingContext扩展 `名限制为也符合 `AttributedDrawingContext `的类型：

``` Swift
extension DrawingContext where Self: AttributedDrawingContext { 
    mutating func drawSomething2() {
        let size = CGSize(width: 200, height: 100)
        addRectangle(rect: .init(origin: .zero, size: size), fill: .red) draw(NSAttributedString(string: "hello"), at: CGPoint(x: 50,y: 50))
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，我们可以编写带有 `显式泛型的函数 `。 像以前一样，这在语义上等同于上述方法：

``` Swift
func drawSomething2<C: DrawingContext & AttributedDrawingContext>( _ c: inout C)
{
// ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议组合功能非常强大，可以选择不由每种兼容类型实现的功能。

### ***协议继承***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了在使用时构成协议之外，我们还可以让**协议彼此继承。** 例如，我们可以这样编写 `AttributedDrawingContext `的定义：

``` Swift
protocol AttributedDrawingContext: DrawingContext { 
    mutating func draw(_ str: NSAttributedString, at: CGPoint)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此定义要求符合 `AttributedDrawingContext `的任何类型也应符合 `DrawingContext `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**协议继承和协议组成**都有其用例。 例如， `可比较协议 `继承自 `Equatable `。 这意味着它可以添加诸如 `> = `和 `<= `之类的定义，而只需要使用符合类型的类型来实现 `< `。 在 `Codable `的情况下，让 `Encodable `从 `Decodable继承 `或以其他方式继承是没有道理的。 但是，定义一个名为 `Codable `的新协议是有道理的，该协议同时继承于 `Encodable `和 `Decodable `。 实际上，写作  `typealias Codable = Encodable＆Decodable ` 在语义上等效于编写协议 `Codable：Encodable，Decodable {} `。 类型别名稍微轻巧一些，可以清楚地看出， `Codable `只是这两种协议的组合，并没有添加任何功能。

## ***关联类型的协议***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;某些协议不仅需要 `方法 `， `属性 `和 `初始化程序 `，还需要：它们需要一种或多种相关类型才能有用。 这可以通过使用**关联的类型**来实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管我们并不经常在自己的代码中编写带有 `关联类型的协议 `，但是 `标准库 `却大量使用 `关联类型 `。 标准库中最小的示例之一是 `IteratorProtocol协议 `。 它具有要迭代的元素的关联类型，以及用于获取下一个元素的单个方法：

``` Swift
protocol IteratorProtocol { 
    associatedtype Element mutating func next() -> Element?
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `集合协议 `具有五种关联类型，其中许多具有默认值。例如， `SubSequence关联类型 `的默认值为 `Slice <Self> `。这是另一个定制点：将定制类型与Collection匹配时，你可以坚持默认设置并节省一些实现工作。但是，某些集合通常出于性能或便利性的考虑而覆盖它（例如， `String `使用 `Substring `作为 `SubSequence `）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本节中，我们将**使用具有 `关联类型 `的 `协议 `来重新实现 `UIKit `状态恢复机制**的小版本。在 `UIKit `中， `状态恢复 `采用视图控制器和视图的层次结构，并在应用程序暂停时将其状态序列化。在下次启动该应用程序时， `UIKit `会尝试恢复该应用程序的状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将使用 `协议 `来表示视图控制器，而不是使用类层次结构。在实际的实现中， `ViewController协议 `将有很多方法，但是为了简单起见，我们将其设为空协议：

``` Swift
protocol ViewController {}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，我们可以创建一个视图控制器来显示消息。 视图控制器的状态由一系列消息和当前滚动位置组成。 我们将状态建模为嵌套结构并使其符合 `Codable `：

``` Swift
class MessagesVC: ViewController, Restorable { 
    typealias State = MessagesState
    struct MessagesState: Codable { 
        var messages: [String] = []
        var scrollPosition: CGFloat = 0
    }
    var state: MessagesState = MessagesState() 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，我们不必按照一致性声明 `typealias State； ` 编译器足够聪明，可以通过查看 `state属性的类型 `来解决这一问题。 我们还可以将 `MessagesState `重命名为 `State `，一切将继续进行。

## ***关联类型的条件一致性***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;某些类型仅在满足某些条件时才符合协议。 正如我们在条件符合性部分中所看到的，当且仅当其元素符合 `Equatable `时， `Array `才符合 `Equatable `。 条件也可以使用有关关联类型的信息。 例如， `Range `具有通用 `参数Bound `。 当且仅当 `Bound `是 `Strideable `并且 `Bound `的 `Stride `（与Strideable相关的一种类型）符合Si `gnedInteger `时， `Range才符合Sequence `。

``` Swift
extension Range: Sequence
    where Bound: Strideable, Bound.Stride: SignedInteger
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，即使在标准库中，这种复杂的约束也是例外。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们假设的 `UI框架 `中，我们还有拆分视图控制器，它们在两个子视图控制器上通用：

``` Swift
class SplitViewController<Master: ViewController, Detail: ViewController> { 
    var master: Master
    var detail: Detail

    init(master: Master, detail: Detail) {
        self.master = master
        self.detail = detail 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设拆分视图控制器没有自己的状态，我们可以合并两个子视图控制器的状态。 理想情况下，我们想写  `var state：（Master.State，Detail.State） `，但是可惜的是，元组不符合 `Codable `，甚至没有条件（实际上， `元组不符合任何协议 `）。 相反，我们必须编写自己的通用Pair结构。 然后，我们可以有条件地使其符合 `Codable `：

``` Swift
struct Pair<A, B>: Codable where A: Codable, B: Codable { 
    var left: A
    var right: B

    init(_ left: A, _ right: B) {
        self.left = left
        self.right = right 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，要使 `SplitViewController `符合 `Restorable `，我们必须同时要求 `Master `和 `Detail `也都是 `Restorable `的。 我们不是将状态保存在我们的 `SplitViewController `中，而是从两个视图控制器中计算出来，而不是设置一个局部变量，而是将突变立即转发给这两个孩子：

``` Swift

extension SplitViewController: Restorable where Master: Restorable, Detail: Restorable
{
    var state: Pair<Master.State, Detail.State> {
        get {
            return Pair(master.state, detail.state)
        } 

        set {
            master.state = newValue.left
            detail.state = newValue.right 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如我们在条件符合性部分中指出的， `任何类型最多只能符合一次协议 `。 也就是说，对于 `“ Master” `为“ `可还原” `但 `“ Detail” `为 `“不可还原” `，我们没有任何其他符合性，反之亦然。

# **Existentials**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;严格来说，**协议不能在Swift中用作具体类型**。 它们只能**用于约束通用参数**。 令人惊讶的是，以下代码可以编译（我们以上面的 `DrawingContext协议 `为例）：

``` Swift
let context: DrawingContext = SVG()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们使用诸如具体类型的协议时，编译器会在后台为该协议创建一个包装类型，称为 `存在类 `。  `let context： `对于诸如 `let context：Any <DrawingContext> `之类的东西， `DrawingContext `本质上是语法糖。 尽管此语法不存在，但编译器会创建一个 `Any `框（大32字节），并为每个协议添加8字节协议见证。 我们可以像上面的例子一样验证它：

``` Swift
MemoryLayout<Any>.size // 32 
MemoryLayout<DrawingContext>.size // 40
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;协议周围的这个框也称为 `存在容器 `。 编译器必须创建这些容器，因为它必须在编译时知道类型的大小。 由于具有不同大小的不同类型可以符合协议（例如，所有类均具有指针的大小，而结构或枚举根据其内容而具有不同的大小），因此将协议包装在一个存在的容器中 创建一个大小恒定的类型，以便编译器将值分配到内存中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以看到，存在容器的大小随着我们使用的协议数量的增加而增加。 例如， `Codable `是 `Encodable `和 `Decodable `的简写，因此我们希望Any容器的 `Codable `存在的大小为32字节，而协议 `explicit witnesses `的大小为2乘8字节：

``` Swift
MemoryLayout<Codable>.size // 48
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们创建一个 `Codables数组 `时，无论我们使用哪种具体类型，编译器都知道每个元素的大小为48个字节。 例如，对于具有三个元素的数组，必须分配144个字节：

``` Swift
let codables: [Codable] = [Int(42), Double(42), "fourtytwo"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们只能使用 `Encodable `和 `Decodable API `来处理 `codables数组 `的元素（在运行时使用 `as `， `as？ `或 `is `进行转换之前），因为元素的具体类型被存在的容器隐藏了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，**存在项可以与受约束的通用参数互换使用**。 请考虑以下两个功能：

``` Swift
func encode1(x: Encodable) { }
func encode2<E: Encodable>(x: E) { }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然我们可以用符合 `Encodable `的任何类型调用这两个函数，但令人惊讶的是它们并不等效。对于 `encode1 `，编译器会将参数包装在 `Encodable存在容器 `中。这种包装会降低性能，并且如果包装的值太大而无法直接放入存在对象中，则可能需要额外的内存分配调用。也许更重要的是，由于对包装值的所有方法调用都必须经过存在者的见证表，因此存在主义者阻止进一步的优化。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面，对于 `泛型函数 `，编译器可以为某些或所有类型调用了 `encode2 `的类型生成专用版本。这些专业化可以达到与我们要传递的每种具体类型的函数手动重载功能相同的性能。与采用存在方式的版本相比，缺点是编译时间更长且二进制文件更大。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在大多数代码中，存在性容器的开销不是问题，但在优化对性能至关重要的代码时，记住这一点可能很有用。如果你成千上万次地调用一个编码函数，你可能会发现 `encode2 `的速度要快得多。

## ***存在和关联类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 `Swift 5 `中，**存在性仅限于没有关联类型且没有自我约束的协议**。 要了解原因，请考虑以下示例：

``` Swift
let collections: [Collection] = ["foo", [1]]
// Error: protocol 'Collection' can only be used as a generic constraint 
// because it has Self or associated type requirements.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码没有意义：没有关联的 `Element类型 `，我们将无法使用 `Collection `。 目前，这是一个严格的限制，但是也许在以后的 `Swift `版本中，我们将能够编写如下所示的代码：

``` Swift
// Not real syntax
let collections: [any Collection where .Element == Character] = ["foo", ["b"]]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具有自我约束的协议也有相同的限制，即它们在他们的要求。 例如，考虑以下代码：

``` Swift
let cmp: Comparable = 15 // Compile error
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 `Comparable `（及其继承的 `Equatable协议 `）中定义的运算符期望两个参数完全相同。 如果可以声明类型为 `Comparable `的变量，则你可能希望能够在这些值上调用 `Comparable API `，即执行以下操作：

``` Swift
(15 as Comparable) < ("16" as Comparable)
// Error: binary operator '<' cannot be applied to two 'Comparable' operands.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，这段代码没有任何意义，因为无法比较整数和字符串。 因此，***编译器禁止具有关联类型约束的协议（或使用Self的协议，实际上类似于关联类型）的协议存在***。

## ***Type Erasers***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使我们在使用具有 `“self” `要求或相关类型的协议时无法编写存在性，也可以编写具有类似功能的类型： `Type Erasers `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，考虑以下表达式：

``` Swift
let seq = [1, 2, 3].lazy.filter { $0 > 1 }.map { $0 * 2 }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其类型为 `LazyMapSequence <LazyFilterSequence <[Int]>，Int> `。 随着更多操作的链接，类型变得更加复杂。 有时，我们可能想要删除该类型，然后“仅”返回带有 `Int元素 `的 `Sequence `。 虽然我们无法使用存在的形式来表达这一点，但是我们可以使用 `AnySequence `隐藏基础类型：

``` Swift
let anySeq = AnySequence(seq)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `anySeq `的类型是 `AnySequence <Int> `。 尽管它更易于阅读并且具有相同的接口，但要付出代价：使用 `AnySequence `将增加另一种间接方式，并且比直接使用基础序列慢。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库为其多种协议提供类型擦除器：例如，还有 `AnyCollection `和 `AnyHashable `。 在本节的其余部分，我们将介绍针对可恢复协议的类型橡皮擦的简单实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初次尝试时，我们可能会编写如下所示的 `AnyRestorable `。 但是，这是行不通的，因为底层的 `R `在通用参数中可见-我们什么都没赢：

``` Swift
struct AnyRestorable<R: Restorable> { 
    var restorable: R
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相反，我们希望 `AnyRestorable `仅在  `State ` 内通用。 为了使 `AnyRestorable `符合 `Restorable `，我们还需要 `state属性 `。 我们将使用与标准库相同的实现技术：它使用三个类来实现单个类型的橡皮擦。 首先，我们将创建一个类 `AnyRestorableBoxBase `，该类通过使用 `fatalError `实现状态来符合协议。 此类是实现的私有类，绝不能直接创建：

``` Swift
class AnyRestorableBoxBase<State: Codable>: Restorable { 
    internal init() { }

    public var state: State {
        get { fatalError() }
        set { fatalError() } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们创建一个 `AnyRestorableBoxBase `的子类，该子类在 `R `上具有通用性。使类型擦除有效的特殊技巧是将 `AnyRestorableBoxBase `的通用参数限制为与 `R.State `相同：

``` Swift
class AnyRestorableBox<R: Restorable>: AnyRestorableBoxBase<R.State> { 
    var r:R

    init(_ r: R) { 
        self.r = r
    }
    override var state: R.State { 
        get { return r.state }
        set { r.state = newValue }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;子类关系意味着我们可以创建 `AnyRestorableBox `的实例，但是我们将其用作 `AnyRestorableBoxBase `。 由于后一类符合 `Restorable `，因此我们可以立即将其用作 `Restorable `。 最后一步，我们创建一个 `包装类AnyRestorable `，该包装类隐藏 `AnyRestorableBox `：

``` Swift
class AnyRestorable<State: Codable>: Restorable {
    let box: AnyRestorableBoxBase<State>

    init<R>(_ r: R) where R: Restorable, R.State == State {
        self.box = AnyRestorableBox(r) 
    }

    var state: State {
        get { return box.state }
        set { box.state = newValue }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，在编写类型擦除器时，应注意包括协议中的所有方法。 尽管编译器会有所帮助，但当我们忘记包含协议中包含但具有默认实现的方法时，它不会指出。 在类型橡皮擦中，我们不应依赖默认的实现，而应始终调用基础类型的实现，因为它可能已被自定义。

# **追溯一致性**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift协议 `的主要功能之一是**可以回顾协议的类型**。例如，在本章开始时，我们使 `CGContext `符合我们的 `Drawable协议 `。在使类型符合协议时，我们应始终确保自己是该类型的所有者或该类型的所有者协议（或两者）。不建议将你不拥有的类型与你不拥有的协议相一致。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，在撰写本文时， `Core Location框架 `的 `CLLocationCoordinate2D `不符合 `Codable协议 `。即使我们自己添加一致性很容易，但是当 `Apple `决定将 `CLLocationCoordinate2D `符合 `Codable `时，我们的实现可能会中断。在这种情况下， `Apple `可能会选择其他实现，因此，我们将不再能够反序列化现有文件格式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当两个单独的程序包使一个类型符合同一协议时，也会发生一致性冲突。当 `SourceKit-LSP `和 `SwiftPM `都将 `Range `设置为 `Codable `时，都具有不同的约束，就会发生此问题。 （从Swift 5开始， `标准库为Range提供了Codable一致性 `。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了解决这些潜在问题，我们经常可以使用包装器类型并在其中添加条件一致性。例如，我们可以围绕 `CLLocationCoordinate2D创建包装器结构 `，并使包装器符合 `Codable `。我们将在 `“编码和解码” `一章中看到一个示例。

# 概括

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Swift的协议可以与Swift的泛型一起使用，以编写可重用，可扩展的代码**。  `协议扩展 `， `条件一致性 `和 `关联类型 `等高级功能使我们能够对复杂的接口进行建模。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像任何抽象一样，协议可以使代码更简单，但是它们也可以产生相反的效果：我们肯定已经看到（并编写了）由于过度使用协议而变得难以理解的代码。 在许多情况下，可以使用值或函数以更简单的方式编写代码。 明确的协议见证人可以提供从协议到价值级别的首次转换。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们希望Swift将来会在协议中增加更多功能。 例如，在Swift 5.1中期望不透明的结果类型，而在将来的发行版中，期望具有 `关联类型 `和 `语法改进的协议的存在性 `作为改进 `泛型UI `的一部分。



