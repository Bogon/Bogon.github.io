---
title: 'Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures'
description: 'Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures'
permalink: 'Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Structures
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 63319
date: 2020-05-13 10:23:14
---

你已经介绍了Swift的一些基本构建块。 有了变量，条件，字符串，函数和集合，你就可以征服世界！ 好吧，差不多。

大多数执行复杂任务的程序都受益于更高级别的抽象。 除了Int，String或Array外，大多数程序都使用特定于手头任务领域的新类型。 例如，跟踪照片或联系人的需求比到目前为止所看到的简单类型更为重要。

本章介绍结构，这是你将学习的第一种命名类型。 **结构是可以存储命名属性并定义其自身行为的类型**。 像字符串，整数或数组一样，你可以定义自己的结构来创建要在代码中使用的命名类型。 在本章的最后，你将了解如何定义和使用自己的结构。

你将开始尝试比萨的自定义类型。

<!-- more -->

# 介绍结构体

假设你住在一个名为Pizzaville的小镇。 如你所料，Pizzaville以其惊人的比萨而闻名。 你拥有Pizzaville最受欢迎（最快）的比萨外卖餐厅-“ Swift Pizza”。

![playground](http://cdn.xuebaonline.com/sasb-struct-stp1.png "")

作为一家餐厅的所有者，你的送货区域有限。 你想编写一个程序来计算潜在客户是否在交付驱动程序的范围内。 程序的第一个版本可能如下所示：

``` Swift
let restaurantLocation = (2, 4) 
let restaurantRange = 2.5
// Pythagorean Theorem ( )

func distance(from source: (x: Int, y: Int), to target: (x: Int, y: Int)) -> Double { 
    let distanceX = Double(source.x - target.x)
    let distanceY = Double(source.y - target.y)
    return (distanceX * distanceX + distanceY * distanceY).squareRoot()
}
```

``` Swift
func isInDeliveryRange(location: (x: Int, y: Int)) -> Bool { 
    let deliveryDistance = distance(from: location, to: restaurantLocation)
    return deliveryDistance < restaurantRange
}
```

很简单吧？ distance(from：to :)将计算你与披萨的距离。 isInDeliveryRange(location :)仅在你距离不太远的情况下才会返回true。

![playground](http://cdn.xuebaonline.com/sasb-struct-stp2.png "")

成功的比萨外卖业务最终可能会扩展到多个地点，这给可交付使用的计算器带来了轻微的变化。 用以下代码替换现有代码：

``` Swift
let restaurantLocation = (2, 4) 
let restaurantRange = 2.5
let otherRestaurantLocation = (7, 8) 
let otherRestaurantRange = 1.5
// Pythagorean Theorem ( )
func distance(from source: (x: Int, y: Int), to target: (x: Int, y: Int)) -> Double { 
    let distanceX = Double(source.x - target.x)
    let distanceY = Double(source.y - target.y)
    return (distanceX * distanceX + distanceY * distanceY).squareRoot()
}

func isInDeliveryRange(location: (x: Int, y: Int)) -> Bool { 
    let deliveryDistance = distance(from: location, to: restaurantLocation)
    let secondDeliveryDistance = distance(from: location, to:  otherRestaurantLocation)
    return deliveryDistance < restaurantRange || secondDeliveryDistance < otherRestaurantRange
}
```

isInDeliveryRange(location :)检查两个位置，以查看是否可以从任一位置获取披萨。

最终，不断增长的客户数量将迫使该公司扩展业务，不久后可能会发展到总共10家门店！ 那呢 你是否不断更新功能以检查所有这些坐标和范围集？

![playground](http://cdn.xuebaonline.com/sasb-struct-stp2.png "")


你可能会短暂考虑创建一个x/y坐标元组数组来跟踪你的披萨餐厅，但这既难以阅读又难以维护。 幸运的是，Swift提供了其他工具来帮助你简化问题。

# **你的第一个结构**

结构是Swift中的命名类型之一，它允许你封装相关的属性和行为。 你可以声明一个新类型，为其命名，然后在代码中使用它。

在比萨饼业务的示例中，你一直在使用x/y坐标元组来表示位置。

作为结构的第一个示例，将位置从元组提升为结构类型：

``` Swift
struct Location {
    let x: Int
    let y: Int 
}
```

此代码块演示了定义结构的基本语法。 在这种情况下，代码声明了一个名为Location的类型，该类型结合了x和y坐标。

**基本语法以struct关键字开头，后跟类型名称和一对花括号。 花括号之间的所有内容都是该结构的成员**。

在“位置”中，成员x和y均为属性。 属性是声明为类型一部分的常量或变量。 该类型的每个实例将具有这些属性。 这意味着在我们的示例中，每个位置都将同时具有x和y属性。

你可以实例化结构并将其存储在常量或变量中，就像你使用过的其他任何类型一样：

``` Swift
let storeLocation = Location(x: 2, y: 4)
```

要创建Location值，请在括号中使用类型名称和参数列表。 此参数列表提供了一种指定属性x和y的值的方法。 这是一个初始化程序的示例。

**初始化程序强制所有属性都已设置，然后再开始使用它们。 这是Swift的关键安全功能之一。** 意外使用未初始化的变量是其他语言中的大量错误来源。 Swift的另一个便捷功能是，你无需在Location类型中声明此初始值设定项。 Swift会自动为具有参数列表中所有属性的结构提供初始化程序。 在第12章“方法”中，你将学到更多有关初始化程序的知识。

你可能还记得，其中涉及范围也很广，而且由于比萨业务在不断发展，因此与不同餐厅相关的范围可能会有所不同。 你可以创建另一个结构来代表餐厅的交付区域，如下所示：

``` Swift
struct DeliveryArea {
  let center: Location
  var radius: Double
}
var storeArea = DeliveryArea(center: storeLocation, radius: 4)
```

现在有一个名为DeliveryArea的新结构，其中包含一个恒定的center属性和一个radius可变属性。 如你所见，你可以在结构值内包含一个结构值； 在这里，你将Location类型用作DeliveryArea结构的center属性的类型。

# **访问成员**

定义好DeliveryArea并将其实例化后，你可能想知道如何使用这些值。 就像处理字符串，数组和字典一样，你使用点语法来访问成员：

``` Swift
print(storeArea.radius) // 4.0
```

你甚至可以使用点语法访问成员的成员：

``` Swift
print(storeArea.center.x) // 2
```

与使用点语法读取值的方式类似，你也可以为其分配值。 如果一个比萨饼位置的传递半径变大，则可以将新值分配给现有属性：

``` Swift
storeArea.radius = 250
```

将属性定义为常量还是变量确定是否可以更改它。 在这种情况下，你可以分配给`radius`，因为你是用var声明的。 另一方面，你用let声明了center，因此你无法对其进行修改。

你的DeliveryArea结构允许更改披萨餐厅的送达范围，但不能更改其位置！

除了选择属性应为变量还是常量之外，如果还希望在初始化后对其进行修改，则还必须将结构本身声明为变量：

``` Swift
let fixedArea = DeliveryArea(center: storeLocation, radius: 4)
// Error: Cannot assign to property
fixedArea.radius = 250
```

即使使用var声明了radius，但封闭类型fixedArea仍为常量，因此无法更改。 编译器正确地发出错误。 将fixedArea从let常量更改为var变量以使其可变。

现在，你已经学习了如何控制结构中属性的可变性。

# **介绍方法**

使用某些结构的功能，你现在可以制作一个类似以下内容的披萨交付范围计算器：

``` Swift
let areas = [
    DeliveryArea(center: Location(x: 2, y: 4), radius: 2.5),
    DeliveryArea(center: Location(x: 9, y: 7), radius: 4.5) 
]

func isInDeliveryRange(_ location: Location) -> Bool { 
    for area in areas {
        let distanceToStore = distance(from: (area.center.x, area.center.y), to: (location.x, location.y))
        if distanceToStore < area.radius {
            return true
        } 
    }
    return false
}

let customerLocation1 = Location(x: 8, y: 1)
let customerLocation2 = Location(x: 5, y: 5)
print(isInDeliveryRange(customerLocation1)) // false
print(isInDeliveryRange(customerLocation2)) // true
```

在此示例中，有一个数组，一个区域以及一个使用该数组确定用户位置是否在这些区域中的任何一个中的函数。

你想了解一家特定餐厅的相关信息。 如果DeliveryArea可以告诉你餐厅是否可以送货到某个地点，那就太好了。

就像结构可以具有常量和变量一样，它也可以定义自己的函数。 在你的操场上，找到DeliveryArea的实现。 在右花括号前，添加以下代码：

``` Swift
func contains(_ location: Location) -> Bool { 
    let distanceFromCenter = distance(from: (center.x, center.y), to: (location.x, location.y))
    return distanceFromCenter < radius
}
```

这段代码定义了一个包含的函数，该函数现在是DeliveryArea的成员。 作为类型成员的函数称为方法。 注意如何包含使用当前位置的中心和半径属性。 对属性和结构内部其他成员的隐式访问使方法不同于常规函数。 你将在第12章中详细了解方法。

就像其他结构成员一样，你可以使用点语法来访问方法：

``` Swift
let area = DeliveryArea(center: Location(x: 5, y: 5), radius: 4.5)
let customerLocation = Location(x: 2, y: 2) 
area.contains(customerLocation) // true
```

# **结构即值**

术语“值”在Swift中涉及结构时具有重要意义，这是因为结构会创建所谓的值类型。

**值类型是其实例在分配时复制的类型。**

``` Swift
var a = 5
var b = a
print(a) // 5
print(b) // 5
a = 10
print(a) // 10
print(b) // 5
```

赋值复制行为意味着将a分配给b时，a的值将复制到b中。 这就是为什么将=读为“assign”（而不是“等于”）很重要的原因（你使用==来计算均等）。


除了DeliveryArea结构，相同的原理如何：

``` Swift
var area1 = DeliveryArea(center: Location(x: 2, y: 4), radius: 2.5)
var area2 = area1
print(area1.radius) // 2.5
print(area2.radius) // 2.5
area1.radius = 4 print(area1.radius) // 4.0 
print(area2.radius) // 2.5
```

与前面的示例一样，area2.radius不会选择在area1.radius中设置的新值。 断开连接演示了使用结构的值语义。 当你为area2分配area1的值时，它将获得该值的精确副本。 area1和area2仍然完全独立！ 由于采用了值语义和复制功能，因此结构很安全，因此你无需担心值会被另一段代码共享并有可能在背后被更改。

# **结构无处不在**

你看到了Location结构和一个简单的Int如何共享相同的赋值复制行为。 它们共享行为，因为它们都是值类型，并且都具有值语义。

你知道结构代表值，那么Int到底是什么？ 如果要查看Swift库中Int的定义，你可能会有些惊讶：

``` Swift
public struct Int : FixedWidthInteger, SignedInteger {
    // ...
}
```

**Int类型也是一种结构**。 实际上，许多标准Swift类型都定义为结构，例如：Double，String，Bool，Array和Dictionary。 正如你将在以后的章节中了解的那样，结构的值语义相对于其引用类型对应项还具有许多其他优点，这使其成为表示核心Swift类型的理想选择。

# **符合协议**

你可能已经注意到上面Swift标准库中Int定义的一些不熟悉的部分。 在声明Int之后，立即出现类型`FixedWidthInteger`和`SignedInteger`：

``` Swift
public struct Int : FixedWidthInteger, SignedInteger {
    // ...
}
```

这些类型称为协议。 通过在声明Int时将它们放在冒号后面表示你声明Int符合这些协议。
协议包含一组合规类型必须满足的要求。 标准库中的一个简单示例`CustomStringConvertible`：

``` Swift
public protocol CustomStringConvertible {
    /// A textual representation of this instance.
  public var description: String { get }
}
```

该协议包含一个属性要求：`描述`。 该文档将描述称为“此实例的文本表示形式”。

如果要修改DeliveryArea以使其符合CustomStringConvertible，则将需要添加带有实例的“文本表示形式”的`description属性`。 立即尝试。 将DeliveryArea更改为：

``` Swift
struct DeliveryArea: CustomStringConvertible {
  let center: Location
  var radius: Double
  var description: String {
"""
Area with center: (x: \(center.x), y: \(center.y)), radius: \(radius)
"""
}
func contains(_ location: Location) -> Bool {
        distance(from: center, to: location) < radius
  }
func overlaps(with area: DeliveryArea) -> Bool { distance(from: center, to: area.center) <=
(radius + area.radius) }
}
```

description属性的值包含中心半径和当前半径。 响应其他地方的更改而更新的值称为计算属性。
在下一章中，你将学到有关计算属性的所有知识以及更多内容！

那么，遵守协议到底是做什么的呢？ 因为任何符合CustomStringConvertible的类型都必须定义描述，所以你可以对符合CustomStringConvertible的任何类型的任何实例调用description。Swift标准库通过print（）函数利用了这一点。 该函数将在控制台中使用描述，而不是嘈杂的默认描述：

``` Swift
print(area1) // Area with center: (x: 2, y: 4), radius: 4.0 
print(area2) // Area with center: (x: 2, y: 4), radius: 2.5
```

任何命名类型都可以使用协议来扩展其行为。 在这种情况下，你使结构符合Swift标准库中定义的协议。 在第16章“协议”中，你将学习有关定义，使用和遵守协议的更多信息。

# **关键点**

+ 结构是可以在代码中定义和使用的命名类型。

+ 结构是值类型，这意味着它们的值在分配时被复制。

+ 你使用点语法来访问诸如结构之类的命名类型的成员。

+ 命名类型可以具有自己的变量和函数，称为属性和方法。

+ 遵守协议要求实现该协议所需的属性和方法。




