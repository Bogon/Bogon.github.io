---
title: 'Advanced Swift系列(十二):  Encoding and Decoding'
description: 'Advanced Swift系列(十二):  Encoding and Decoding'
permalink: 'Advanced Swift系列(十二):  Encoding and Decoding'
copyright: ture
date: 2020-05-08 22:02:53
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Protocols,Error Handling,Encoding and Decoding
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Encoding and Decoding]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将程序的内部数据结构序列化为某种数据交换格式，反之亦然，这是最常见的编程任务之一。 Swift将这些操作称为  ` 编码和解码  ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ` Codable系统  ` （以其基本  ` “协议”  ` 命名，实际上是类型别名）是一种标准化设计，用于对所有自定义类型都可以选择的数据进行编码和解码。它围绕三个主要目标进行设计：

+ → **通用性** - 应该使用结构，枚举和类。
+ → **类型安全性** - 诸如JSON之类的交换格式经常被弱类型，而你的代码应使用强类型数据结构。
+ → **减少样板文件** — 开发人员必须编写尽可能小的重复“适配器代码”，以使自定义类型参与系统的编译器应自动为你生成此代码。

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型通过  ` 遵循可编码和/或可解码协议  ` 声明其被（反）序列化的能力。这些协议中的每一个都只有一个要求—   ` Encodable  ` 定义了一个  ` encode（to :)  ` 方法，其中值对自身进行编码，而  ` Decodable  ` 指定用于从序列化数据创建实例的初始化程序：

``` Swift
/// A type that can encode itself to an external representation.
public protocol Encodable {
    /// Encodes this value into the given encoder. 
    public func encode(to encoder: Encoder) throws
}

/// A type that can decode itself from an external representation.
public protocol Decodable {
    /// Creates a new instance by decoding from the given decoder. 
    public init(from decoder: Decoder) throws
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为大多数采用一种的类型也将采用另一种，所以标准库提供了  ` Codable类型  ` 别名作为这两种方法的简写：

``` Swift
public typealias Codable = Decodable & Encodable
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有基本的标准库类型（包括Bool，数字类型和字符串）都是开箱即用的，包括可选项，数组，字典，集合和范围在内，都可以进行编码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可编码元素。最后，苹果框架使用的许多常见数据类型（包括数据，日期，URL，CGPoint和CGRect）都采用了  ` Codable  ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拥有可编码类型的值后，你可以创建一个编码器，并告诉编码器将该值序列化为目标格式，例如JSON。在相反的方向上，解码器获取序列化的数据，然后将其转换回原始类型的实例。从表面上看，对应的编码器和解码器协议并不比可编码和可解码复杂得多。编码器或解码器的中心任务是管理存储序列化数据的容器的层次结构。除非你编写自己的编码器，否则你几乎不必直接与  ` Encoder  ` 和  ` Decoder协议  ` 进行交互，但是，当你要自定义自己的类型如何编码自己时，需要了解此结构和三种容器。我们将在下面看到许多示例。

# **最小的例子**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从一个最小的示例开始，该示例说明了如何使用  ` Codable系统  ` 将自定义类型的实例编码为  ` JSON  ` 。

## ***自动整合***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使自己的类型之一成为可编码就像将其与  ` Codable  ` 兼容一样容易。 如果所有类型的存储属性本身都是可编码的，则  ` Swift编译器  ` 将自动生成实现  ` Encodable  ` 和  ` Decodable协议  ` 的代码。 此协调结构存储GPS位置：

``` Swift
struct Coordinate: Codable { 
    var latitude: Double
    var longitude: Double
    // Nothing to implement here.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为两个存储的属性都已经是可编码的，所以采用可编码协议足以满足编译器的要求。 同样，我们现在可以编写一个利用  ` Coordinate  ` 的  ` Codable一致性  ` 的地标结构：

``` Swift
struct Placemark: Codable { 
    var name: String
    var coordinate: Coordinate 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器合成的代码不可见，但是在本章稍后，我们将对其进行逐段分析。现在，将生成的代码像对待标准库中协议的默认实现那样对待，例如  ` Sequence.drop（while :)  ` -你可以免费获得默认行为，但是可以选择提供自己的实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代码生成与  ` “默认”  ` 默认实现之间唯一的实质区别是后者是标准库的一部分，而可编码代码合成的逻辑则存在于编译器中。将代码移动到标准库中将需要比  ` Swift  ` 当前具有更多功能的反射API，即使它们存在，运行时反射也将带来其自身的权衡（例如，反射通常较慢）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管如此，将尽可能多的语言定义移出编译器并移入库仍然是  ` Swift  ` 的既定目标。总有一天，我们可能会获得一个强大的宏系统，该宏系统的功能足以将整个  ` Codable系统  ` 移至标准库中，但这至少要等上几年。在此之前，编译器代码合成是解决此问题的一种务实解决方案，并且它具有除  ` Codable  ` 之外的其他应用程序-相同的设计用于结构和枚举的自动  ` Equatable  ` 和  ` Hashable  ` 一致性，以及用于枚举的  ` CaseIterable一致性  ` 。

# **Encoding**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift随附了两个内置编码器  ` JSONEncoder  ` 和  ` PropertyListEncoder  ` （它们是在  ` Foundation  ` 中定义的，而不是在标准库中定义的）。 此外，可编码类型与  ` Cocoa  ` 的  ` NSKeyedArchiver  ` 兼容。 我们将重点介绍  ` JSONEncoder  ` ，因为JSON是最常见的格式。
这是我们如何将一组地标值编码为JSON的方法：

``` Swift
let places = [
Placemark(name: "Berlin", coordinate:
Coordinate(latitude: 52, longitude: 13)), Placemark(name: "Cape Town", coordinate: Coordinate(latitude: -34, longitude: 18))
]
do{
    let encoder = JSONEncoder()
    let jsonData = try encoder.encode(places) // 129 bytes 
    let jsonString = String(decoding: jsonData, as: UTF8.self)
    /*
    [{"name":"Berlin","coordinate":{"longitude":13,"latitude":52}}, {"name":"Cape Town","coordinate":{"longitude":18,"latitude":-34}}] */
} catch {
    print(error.localizedDescription) 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际的编码步骤极其简单：创建和（可选）配置编码器，并将其值传递给编码器。   ` JSON编码器  ` 以  ` Data实例  ` 的形式返回字节的集合，然后我们将其转换为要显示的字符串。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了用于配置输出格式（按字母顺序对漂亮打印和/或键进行排序）的属性外，  ` JSONEncoder  ` 还提供了用于格式化日期（包括  ` ISO 8601  ` 或  ` Unix纪元时间戳  ` ）和数据值的自定义选项。（例如Base64），以及应如何处理特殊的浮点值（无穷大和NaN）。我们甚至可以使用编码器的  ` keyEncodingStrategy  ` 选项来指定应将密钥转换为蛇形格式，或者可以指定自己的自定义密钥转换函数。这些选项始终适用于要编码的值的整个层次结构，即，你不能使用它们来指定一种类型的  ` Date  ` 应该遵循与另一种类型不同的编码方案。如果需要这种粒度，则必须为受影响的类型编写自定义的  ` Codable  ` 实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值得注意的是，所有这些配置选项都是特定于  ` JSONEncoder  ` 的。其他编码器将具有不同的选项（或根本没有）。甚至  ` encode（_ :)方法  ` 也是特定于编码器的，并且未在任何协议中定义。其他编码器可能会决定将  ` String  ` 甚至  ` URL  ` 返回到编码文件，而不是返回  ` Data值  ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，  ` JSONEncoder  ` 甚至不符合  ` Encoder协议  ` 。而是封装了一个名为  ` _JSONEncoder  ` 的私有类，该类实现了  ` 协议并完成了实际的编码工作  ` 。之所以这样设计，是因为顶级编码器应提供与在编码过程中传递给可编码类型的  ` Encoder对象  ` 完全不同的API（即，一种用于启动编码过程的方法）。清晰地分离这些任务意味着客户端只能访问在任何给定情况下都合适的API-例如，可编码类型不能在编码过程的中间重新配置编码器，因为公共配置  ` API  ` 仅在顶部显示电平编码器。

# **Decoding**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ` JSONEncoder  ` 的解码对应项是  ` JSONDecoder  ` 。 解码遵循与编码相同的模式：**创建一个解码器并将其传递给某些东西进行解码**。   ` JSONDecoder  ` 期望一个包含  ` UTF-8编码  ` 的  ` JSON文本  ` 的  ` Data实例  ` ，但是正如我们在编码器中看到的那样，其他解码器可能具有不同的接口：

``` Swift
do{
    let decoder = JSONDecoder()
    let decoded = try decoder.decode([Placemark].self, from: jsonData)
    // [Berlin (lat: 52.0, lon: 13.0), Cape Town (lat: -34.0, lon: 18.0)] type(of: decoded) // Array<Placemark>
    decoded == places // true
} catch { 
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，  ` decoder.decode（_：from :)  ` 具有两个参数。除了输入数据，我们还必须指定我们希望返回的类型（此处为  ` [Placemark] .self  ` ）。这允许完全编译时类型的安全。从弱类型的JSON数据到我们在代码中使用的具体数据类型的繁琐转换是在幕后进行的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使解码类型成为解码方法的显式参数是一个有意的设计选择。这并不是严格必要的，因为编译器可以在许多情况下自动推断正确的类型，但是Swift团队认为，提高清晰度和避免歧义比最大程度的简洁更为重要。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与编码相比，错误处理在解码期间极为重要。可能出错的事情太多了，从丢失数据（  ` JSON  ` 输入中缺少必填字段），键入不匹配项（服务器意外将数字编码为字符串）到完全损坏的数据。查看有关  ` DecodingError类型  ` 的文档，以了解可能发生的其他错误。

# **编码过程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你只想使用  ` Codable系统  ` ，并且默认行为适合你，则可以立即停止阅读。 但是要了解如何自定义类型的获取方式编码，我们需要更深入地挖掘。 编码过程如何工作？ 当我们将类型与  ` Codable  ` 一致时，编译器实际上会合成什么代码？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你启动编码过程时，编码器将调用自身的实参作为值，然后调用被编码值的  ` encode（to：Encoder）  ` 方法。 然后，值的责任是将其自己编码为合适的任何格式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的示例中，我们将一个地标值数组传递给JSON编码器：

``` Swift
let jsonData = try encoder.encode(places)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编码器（或更确切地说，它的私有主力  ` _JSONEncoder  ` ）现在将调用  ` place.encode（to：self）  ` 。 数组如何知道如何以编码器可以理解的格式对自身进行编码？

## ***Containers***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一下编码器协议，看看编码器提供的接口与要编码的值：

``` Swift
/// A type that can encode values into a native format for external representation.
public protocol Encoder {
    /// The path of coding keys taken to get to this point in encoding. 
    var codingPath: [CodingKey] { get }
    /// Any contextual information set by the user for encoding.
    var userInfo: [CodingUserInfoKey: Any] { get }
    /// Returns an encoding container appropriate for holding
    /// multiple values keyed by the given key type.
    func container<Key: CodingKey>(keyedBy type: Key.Type) -> KeyedEncodingContainer<Key>
    /// Returns an encoding container appropriate for holding 
    /// multiple unkeyed values.
    func unkeyedContainer() -> UnkeyedEncodingContainer 
    /// Returns an encoding container appropriate for holding 
    /// a single primitive value.
    func singleValueContainer() -> SingleValueEncodingContainer 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;暂时忽略  ` encodingPath  ` 和  ` userInfo  ` ，显然**Encoder本质上是编码容器的提供者**。 容器是编码器存储区中的沙盒视图。 通过为每个要编码的值创建一个新容器，编码器可以确保这些值不会覆盖彼此的数据。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共有三种类型的容器：

+ → **Keyedcontainers** 编码键值对。想一想  ` keyedcontain  ` 时代的一种特殊字典。密钥容器是迄今为止最流行的容器。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;键控编码容器中的键是强类型的，这提供了类型安全性和自动完成功能。编码器在编写其目标格式（例如JSON）时最终会将密钥转换为字符串（或整数），但这对客户端代码而言是隐藏的。更改类型提供的键是自定义其编码方式的最简单方法。我们将在下面看到一个示例。

+ → **Unkeyed** 容器依次编码多个值，省略键。请考虑编码值的数组。因为没有用于标识值的键，所以解码容器必须注意以与编码顺序相同的顺序对值进行解码。

+ → **单值容器** 将其编码为单值。你要使用这些完全由单个属性定义的类型。示例包括基本类型，例如  ` Int  ` 或  ` RawRepresentable  ` 可作为基本值的枚举。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于这三种容器类型中的每一种，都有一个协议定义了容器通过其接收要编码的值的接口。这是  ` SingleValueEncodingContainer  ` 的定义：

``` Swift
/// A container that can support the storage and direct encoding of a single /// non-keyed value.
public protocol SingleValueEncodingContainer {
    /// The path of coding keys taken to get to this point in encoding.
    var codingPath: [CodingKey] { get } 
    /// Encodes a null value.
    mutating func encodeNil() throws
    /// Base types.
    mutating func encode(_ value: Bool) throws 
    mutating func encode(_ value: Int) throws 
    mutating func encode(_ value: Int8) throws 
    mutating func encode(_ value: Int16) throws 
    mutating func encode(_ value: Int32) throws
    mutating func encode(_ value: Int64) throws 
    mutating func encode(_ value: UInt) throws 
    mutating func encode(_ value: UInt8) throws 
    mutating func encode(_ value: UInt16) throws 
    mutating func encode(_ value: UInt32) throws 
    mutating func encode(_ value: UInt64) throws 
    mutating func encode(_ value: Float) throws 
    mutating func encode(_ value: Double) throws 
    mutating func encode(_ value: String) throws
    mutating func encode<T: Encodable>(_ value: T) throws 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，该协议主要为各种类型声明了一系列的  ` encode（_ :)  ` 重载：  ` Bool  ` ，  ` String  ` ，  ` 整数  ` 和  ` 浮点类型  ` 。 还有一种用于编码空值的变体。 每个编码器和解码器都必须支持这些原始类型，并且所有可编码类型最终都必须可简化为这些类型之一。 引入  ` Codable系统  ` 的Swift Evolution提议说：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些重载为可编码内容提供了强大的静态类型保证（防止意外尝试对无效类型进行编码），并提供了用户可以依赖的所有编码器和解码器通用的原始类型列表。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任何不是基本类型之一的值都将导致通用的  ` encode<T：Encodable>  ` 重载。 在该容器中，容器最终将调用参数的  ` encode（to：Encoder）  ` 方法，并且整个过程将从上一层向下开始，直到只剩下原始类型。 但是容器可以自由地处理具有特殊要求的类型。 例如，此时  ` _JSONEncoder  ` 检查是否正在编码必须遵循已配置的编码策略的  ` Data值  ` ，例如  ` Base64  ` （Data的默认行为是将自身编码为UInt8字节的无密钥容器）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ` UnkeyedEncodingContainer  ` 和  ` KeyedEncodingContainerProtocol  ` 具有与  ` SingleValueEncodingContainer  ` 相同的结构，但是它们提供了一些其他功能，例如能够创建嵌套容器。 如果要为另一种数据格式编写编码器和解码器，则大部分工作都包括实现这些容器。

# **值如何自我编码**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回到我们的示例，我们正在编码的顶级类型是  ` Array<Placemark>  ` 。 一个无密钥的容器是一个数组的完美匹配（毕竟，数组是一个顺序的值列表），因此该数组向编码器要求一个。 然后，数组在其元素上进行迭代，并将每个元素编码到容器中。 以下是此过程在代码中的外观：

``` Swift
extension Array: Encodable where Element: Encodable { 
    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer() 
        for element in self {
            try container.encode(element) 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数组元素是地标实例。 我们已经看到，对于非基本类型，容器将继续调用每个值的  ` encode（to :)  ` 方法。

# **综合代码**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们添加  ` Codable一致性  ` 时，这将使我们进入编译器为  ` Placemark结构  ` 合成的代码。 让我们逐步介绍它。

## ***Coding Keys***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器生成的第一件事是一个名为  ` CodingKeys  ` 的私有嵌套枚举：

``` Swift
struct Placemark {
    // ...
    private enum CodingKeys: CodingKey { 
        case name
        case coordinate
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;枚举为该结构的每个存储属性都包含一个格。 这些案例是密钥编码容器的密钥。 与字符串键相比，这些强类型键更安全，更方便使用，因为编译器会发现拼写错误。 但是，编码器最终必须能够将键转换为字符串或整数以进行存储。 处理这些转换是  ` CodingKey协议  ` 的任务：

``` Swift
/// A type that can be used as a key for encoding and decoding.
public protocol CodingKey {
    /// The string to use in a named collection (e.g. a string-keyed dictionary). 
    var stringValue: String { get }
    /// The value to use in an integer-indexed collection
    /// (e.g. an int-keyed dictionary).
    var intValue: Int? { get }
    init?(stringValue: String)
    init?(intValue: Int)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有键必须提供字符串表示形式。 （可选）键类型还可以提供与整数之间的转换。 编码器可以选择使用整数键（如果效率更高），但是他们也可以随意忽略它们并坚持使用字符串键（就像  ` JSONEncoder  ` 一样）。 默认的编译器综合代码仅生成字符串键。

## ***encode(to :)方法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是编译器为  ` Placemark结构  ` 的  ` encode(to :)  ` 方法生成的代码：

``` Swift
struct Placemark: Codable { 
    // ...
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self) 
        try container.encode(name, forKey: .name)
        try container.encode(coordinate, forKey: .coordinate)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与数组版本的主要区别在于，  ` Placemark  ` 会将其自身编码为键控容器。对于大多数具有多个属性的  ` 复合数据类型（结构和类  ` ），键控容器是正确的选择（值得注意的例外：  ` Range  ` 使用非键控容器对上下限进行编码）。请注意，当代码请求键控容器时，代码如何将  ` CodingKeys.self  ` 传递给编码器。所有后续将命令编码到此容器中必须指定相同类型的  ` key  ` 。由于键类型通常是所编码类型的私有键，因此在手动实现  ` encode(to :)  ` 方法时几乎不可能意外地使用另一种类型的编码键。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编码过程的最终结果是一棵嵌套容器的树，  ` JSON编码器  ` 可以将其转换为其目标格式：带键的容器成为JSON对象  ` ({...}）  ` ，无键容器成为  ` JSON数组  ` （  ` [...]  ` ），单值容器根据其数据类型转换为数字，布尔值，字符串或  ` null  ` 。

## ***init(from :)初始化器***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编当我们从  ` try json.decode（[:Placemark].self, jsonData）  ` 调用  ` try解码器  ` 时，解码器会使用  ` Decodable  ` 中定义的初始化程序创建我们传入的类型的实例（此处为  ` [Placemark]  ` ）。 像编码器一样，解码器管理一棵解码容器树，该容器可以是三种常见的类型中的任何一种：有键，无键或单值容器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，将解码的每个值递归地遍历容器层次结构，并使用从其容器中解码的值初始化其属性。 如果在任何步骤都抛出错误（例如，由于类型不匹配或缺少值），则整个过程将失败并显示错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是由编译器生成的解码初始值设定项查找地标的方式：

``` Swift
struct Placemark: Codable { 
    // ...
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
        coordinate = try container.decode(Coordinate.self, forKey: .coordinate)
    } 
}
```

# **手动符合**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的类型有特殊要求，则始终可以自己实现可编码和可解码要求。 很好的是，自动代码合成不是一无所有的东西-你可以选择要覆盖的内容，并从编译器中获取其余内容。

## ***自定义编码键***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;控制类型如何编码自身的最简单方法是编写自定义  ` CodingKeys枚举  ` （顺便说一句，它不一定是枚举，尽管只有枚举可以获取  ` CodingKey协议  ` 的综合实现）。 提供自定义编码键是更改类型编码方式的非常简单和声明性的方式。 它使我们能够：

+ → 通过给出一个人为的字符串值来重命名编码输出中的字段，
+ → 通过从枚举中删除所有键来跳过所有字段。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要分配不同的名称，我们还必须给枚举一个显式的  ` String原始值类型  ` 。 例如，这会将名称映射到  ` JSON  ` 输出中的  ` “标签”  ` ，同时保持坐标映射不变：

``` Swift
struct Placemark2: Codable { 
    var name: String
    var coordinate: Coordinate
    private enum CodingKeys: String, CodingKey { 
        case name = "label"
        case coordinate
    }
    // Compiler-synthesized encode and decode methods
    // will use overridden CodingKeys.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而且这将跳过地标的名称，仅对  ` GPS  ` 坐标进行编码，因为我们没有在枚举中包含名称键：

``` Swift
struct Placemark3: Codable {
    var name: String = "(Unknown)" 
    var coordinate: Coordinate
    private enum CodingKeys: CodingKey {
        case coordinate 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意我们必须分配给  ` name属性  ` 的默认值。 没有它，当编译器检测到无法在初始值设定项中为名称分配值时，  ` Decodable  ` 的代码生成将失败。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编码过程中的跳过属性对于瞬态值非常有用，这些瞬态值可以轻松地重新计算或存储起来并不重要，例如缓存或备忘录化的昂贵计算。 编译器足够聪明，可以自行过滤掉  ` 惰性属性  ` ，但是如果你将常规存储的属性用于瞬态值，则可以自己进行操作。

## ***自定义encoding(to :)和init(from :)实现***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要更多控制权，则总是可以选择自己实现  ` encode（to :)  ` 或  ` init（from :)  ` 。 例如，考虑解码器如何处理可选值。   ` JSONEncoder  ` 和  ` JSONDecoder  ` 可以开箱即用地处理可选项。 也就是说，如果目标类型的属性是可选的，那么如果输入数据中不存在相应的值，则解码器将正确跳过它。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是地标类型的另一种定义，其中的坐标属性是可选的：

``` Swift
struct Placemark4: Codable { 
    var name: String
    var coordinate: Coordinate?
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们的服务器可以向我们发送缺少“坐标”字段的JSON数据：

``` Swift
let validJSONInput = """ [
{ "name" : "Berlin" },
{ "name" : "Cape Town" } ]
"""
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们要求  ` JSONDecoder  ` 将输入解码为  ` Placemark4  ` 值数组时，它将自动将坐标值设置为  ` nil  ` 。 到目前为止，一切都很好。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，  ` JSONDecoder  ` 对于输入数据的结构可能会非常挑剔，即使与预期格式的微小偏差也会触发解码错误。 现在假设服务器已配置为发送一个空的  ` JSON对象  ` 以表示缺少的可选值，因此它将发送以下  ` JSON  ` ：

``` Swift
let invalidJSONInput = """ 
[
    {
        "name" : "Berlin", 
        "coordinate": {}
    } 
]
"""
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们尝试对此进行解码时，期望坐标对象内的“纬度”和“经度”字段的解码器会越过空对象并失败，并出现  ` .keyNotFound  ` 错误：

``` Swift
do{
    let inputData = invalidJSONInput.data(using: .utf8)!
    let decoder = JSONDecoder()
    let decoded = try decoder.decode([Placemark4].self, from: inputData)
} catch { 
    print(error.localizedDescription)
    // The data couldn’t be read because it is missing.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使此工作有效，我们可以覆盖  ` Decodable初始化  ` 程序并显式捕获我们期望的错误：

``` Swift
struct Placemark4: Codable { 
    var name: String
    var coordinate: Coordinate?
    // encode(to:) is still synthesized by compiler.
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.name = try container.decode(String.self, forKey: .name) 
        do {
            self.coordinate = try container.decodeIfPresent(Coordinate.self, forKey: .coordinate)
        } catch DecodingError.keyNotFound { 
            self.coordinate = nil
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，解码器可以成功解码错误的JSON：

``` Swift
do{
    let inputData = invalidJSONInput.data(using: .utf8)!
    let decoder = JSONDecoder()
    let decoded = try decoder.decode([Placemark4].self, from: inputData) decoded // [Berlin (nil)]
} catch { 
    print(error.localizedDescription)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，其他错误，例如完全损坏的输入数据或名称字段的任何问题，仍会抛出。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果只影响一种或两种类型，但这种扩展不能很好地进行，则这种自定义选项是不错的选择。 如果一种类型具有多种属性，则即使你只需要自定义一个字段，也必须为每个字段编写手动代码。 有关在Codable系统范围内如何处理混乱数据的更多提示，你可能需要阅读Dave Lyon关于该主题的文章。 Dave针对此问题提出了一个[***```基于通用协议的解决方案```***](http://davelyon.net/2017/08/16/jsondecoder-in-the-real-world "")。 而且，如果你可以控制输入，那么总要从源头上解决问题（使服务器发送有效的JSON）总比在后期处理格式错误的数据要好。

# **常见编码任务**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本节中，我们将讨论你可能希望使用  ` Codable系统  ` 解决的一些常见任务，以及可能遇到的潜在问题。

## ***使你无法编码的类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们要用  ` Core Location框架  ` 中的  ` CLLocationCoordinate2D  ` 替换我们的  ` Coordinate类型  ` 。   ` CLLocationCoordinate2D  ` 具有与  ` Coordinate  ` 完全相同的结构，因此不要重新发明轮子是有意义的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题在于  ` CLLocationCoordinate2D  ` 不符合  ` Codable  ` 。 结果，编译器现在（正确）抱怨它不再能够合成  ` Placemark5  ` 的  ` Codable一致性  ` ，因为其属性之一不是  ` Codable  ` 本身：

``` Swift
import CoreLocation

struct Placemark5: Codable {
    var name: String
    var coordinate: CLLocationCoordinate2D
}
// Error: cannot automatically synthesize 'Decodable'/'Encodable' 
// because 'CLLocationCoordinate2D' does not conform.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管类型是在另一个模块中定义的，但我们可以使  ` CLLocationCoordinate2D编码  ` 吗？ 在扩展中添加缺少的一致性会产生错误：

``` Swift
extension CLLocationCoordinate2D: Codable { }
// Error: implementation of 'Encodable' cannot be automatically 
// synthesized in an extension in a different file to the type.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Swift只会针对类型定义本身或在同一文件的扩展名中指定的一致性生成代码-在这种情况下，我们必须手动实现协议**。 但是，即使不存在此限制，将追溯编码添加到我们不拥有的类型中也不是一个好主意。 如果Apple决定在将来的SDK版本中自己提供一致性该怎么办？ Apple的实现方式可能与我们的实现方式不兼容，这意味着使用我们的版本编码的值无法使用Apple的代码进行解码，反之亦然。 这是一个问题，因为解码器无法知道应该使用哪种实现，它只能看到应该解码  ` CLLocationCoordinate2D类型  ` 的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果公司的一名开发人员  ` Itai Ferber  ` 编写了  ` Codable系统  ` 的大部分代码，他给出了以下建议：

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我实际上会更进一步，建议你每次打算使用  ` Encodable或Decodable  ` 扩展别人的类型时，几乎都应该为它编写一个包装器结构，除非你有合理的保证，该类型将永远不会尝试符合 这些协议本身。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在下一节中，我们将看到一个使用包装器结构的示例。 对于我们当前的问题，我们来看一个稍有不同（但同样安全）的解决方案：我们将为  ` Placemark5  ` 提供我们自己的  ` Codable实现  ` ，在该实现中，我们将直接对纬度和经度值进行编码。 这有效地对编码器和解码器隐藏了  ` CLLocationCoordinate2D类型  ` 的存在； 从他们的角度看，好像纬度和经度属性是直接在  ` Placemark5  ` 上定义的：

``` Swift
extension Placemark5 {

    private enum CodingKeys: String, CodingKey {
        case name
        case latitude = "lat" 
        case longitude = "lon"
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self) 
        try container.encode(name, forKey: .name)
        // Encode latitude and longitude separately.
        try container.encode(coordinate.latitude, forKey: .latitude) 
        try container.encode(coordinate.longitude, forKey: .longitude)
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self) 
        self.name = try container.decode(String.self, forKey: .name)
        // Reconstruct CLLocationCoordinate2D from lat/lon. 
        self.coordinate = CLLocationCoordinate2D(
            latitude: try container.decode(Double.self, forKey: .latitude),
            longitude: try container.decode(Double.self, forKey: .longitude))
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个示例为我们提供了一个很好的思路，即如果编译器没有为我们生成每种类型的代码，那么就必须为每种类型编写样板代码（并且此处仍缺少  ` CodingKey协议  ` 的综合实现）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，我们可以使用嵌套容器对坐标进行编码。   ` KeyedDecodingContainer  ` 有一个名为  ` nestedContainer（keyedBy：forKey :)  ` 的方法，该方法创建一个单独的带键容器（具有单独的编码键类型）并将其存储在提供的键下。 我们将为嵌套键添加第二个枚举，并将纬度和经度值编码到嵌套容器中（此处仅显示  ` Encodable实现  ` ；   ` Decodable  ` 遵循相同的模式）：

``` Swift
struct Placemark6: Encodable {
    var name: String
    var coordinate: CLLocationCoordinate2D

    private enum CodingKeys: CodingKey { 
        case name
        case coordinate
    }

    // The coding keys for the nested container.
    private enum CoordinateCodingKeys: CodingKey { 
        case latitude
        case longitude
    }

    func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self) 
    try container.encode(name, forKey: .name)

    var coordinateContainer = container.nestedContainer( keyedBy: CoordinateCodingKeys.self, forKey: .coordinate)

    try coordinateContainer.encode(coordinate.latitude, forKey: .latitude)
    
    try coordinateContainer.encode(coordinate.longitude, forKey: .longitude)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用这种方法，我们将可以有效地重新创建在原始  ` Placemark结构  ` 中使用  ` Coordinate类型  ` 进行编码的方式，而无需将嵌套类型完全暴露给  ` Codable系统  ` 。 在两种情况下，生成的  ` JSON  ` 是相同的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我们必须为这两种选择编写的代码量很大。 对于此特定示例，我们建议采用另一种方法，即坚持使用我们自定义的  ` Coordinate结构  ` 进行存储和  ` Codable一致性  ` ，并将  ` CLLocationCoordinate2D类型  ` 作为计算属性公开给客户端。 由于  ` _coordinate私有属性  ` 是可编码的，因此我们免费获得  ` 可编码的一致  ` 性； 我们要做的就是在  ` CodingKeys枚举  ` 中重命名其键。 而且，面向客户的坐标属性具有客户所需的类型，但是  ` Codable系统  ` 将忽略它，因为它是计算属性：

``` Swift
struct Placemark7: Codable {
    var name: String
    private var _coordinate: Coordinate

    var coordinate: CLLocationCoordinate2D {
        get {
            return CLLocationCoordinate2D(latitude: _coordinate.latitude, longitude: _coordinate.longitude) 
        }
        set {
            _coordinate = Coordinate(latitude: newValue.latitude,
            longitude: newValue.longitude) 
        }
    }
        
    private enum CodingKeys: String, CodingKey { 
        case name
        case _coordinate = "coordinate"
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种方法在这种情况下效果很好，因为  ` CLLocationCoordinate2D  ` 是一个简单的类型，并且在它和我们的自定义类型之间进行转换很容易。

# **使类可编码**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在上一节中看到，有可能（但不建议）将任何值类型追溯到  ` Codable  ` 。 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为一般规则，  ` Codable系统  ` 对于类很好地起作用，但是子类的潜在存在增加了另一层次的复杂性。 如果我们尝试使  ` UIColor  ` 符合  ` Decodable  ` ，会发生什么？ （我们暂时忽略可编码，因为
与本次讨论无关 我们可以在以后添加它。）我们从约旦·罗斯（Jordan Rose）在快速演进邮件列表上的消息中得到了这个示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ` UIColor  ` 的自定义  ` Decodable  ` 实现可能如下所示：

``` Swift
extension UIColor: Decodable {

    private enum CodingKeys: CodingKey {
        case red 
        case green 
        case blue 
        case alpha
    }
    // Error: initializer requirement 'init(from:)' can only be satisfied
    // by a   ` required  `  initializer in the definition of non-final class 'UIColor'
    // etc.
    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self) 
        let red = try container.decode(CGFloat.self, forKey: .red)
        let green = try container.decode(CGFloat.self, forKey: .green) 
        let blue = try container.decode(CGFloat.self, forKey: .blue)
        let alpha = try container.decode(CGFloat.self, forKey: .alpha)

        self.init(red: red, green: green, blue: blue, alpha: alpha) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该代码无法编译，并且存在多个错误，最终归结为一个无法解决的冲突：只有必需的初始化程序才能满足协议要求，并且可能不会在扩展中添加所需的初始化程序； 必须在类定义中直接声明它们。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必需的初始化程序（标记为  ` required关键字  ` ）指示每个子类都必须实现的初始化程序。 必须要求在协议中定义的初始化程序的规则可确保与所有协议要求一样，可以在子类上动态调用它们。 编译器必须保证这样的代码可以工作：

``` Swift
func decodeDynamic(_ colorType: UIColor.Type, from decoder: Decoder)    throws -> UIColor { 
    return try colorType.init(from: decoder)
}
let color = decodeDynamic(SomeUIColorSubclass.self, from: someDecoder)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了使这种动态分配生效，编译器必须在类的分配表中为初始化程序创建一个条目。编译类定义时，将以固定的大小创建该类的非最终方法表。扩展程序无法追溯添加条目。这就是为什么仅在类定义中允许所需的初始化程序的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长话短说：无法追溯非最终  ` class  ` 与  ` Codable  ` 。在我们上面引用的邮件列表消息中，Jordan讨论了许多场景，详细介绍了  ` Swift  ` 将来如何实现此目的-从允许所需的初始化程序为最终的（然后，无需在分派表中输入），到添加运行时检查，该检查将捕获子类是否没有提供所需的初始化程序调用的指定初始化程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是即使那样，我们仍然必须处理这样一个事实，即向你不拥有的类型添加  ` Codable一致性  ` 是有问题的。与上一节一样，推荐的方法是为  ` UIColor  ` 编写包装器结构并将其编码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从编写一个小的扩展程序开始，该扩展程序使从  ` UIColor  ` 值中提取红色，绿色，蓝色和Alpha分量更容易。现有的  ` getRed（_：green：blue：alpha :)方法  ` 使用指针将结果传递回调用者，因为  ` Objective-C  ` 不支持将元组作为返回类型。我们可以在Swift中做得更好：

``` Swift
extension UIColor {
    var rgba: (red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat)? {
        var red: CGFloat = 0.0
        var green: CGFloat = 0.0
        var blue: CGFloat = 0.0
        var alpha: CGFloat = 0.0

        if getRed(&red, green: &green, blue: &blue, alpha: &alpha) {
            return (red: red, green: green, blue: blue, alpha: alpha) 
        } else {
            return nil
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在我们的  ` encode（to :)  ` 实现中使用  ` rgba属性  ` 。 请注意，  ` rgba的类型是可选的元组  ` ，因为并非所有  ` UIColor实例  ` 都可以表示为  ` RGBA组件  ` 。 如果有人尝试编码无法转换为RGBA的颜色（例如，基于图案图像的颜色），我们将抛出编码错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们的  ` UIColor.CodableWrapper结构  ` 的完整实现（我们在  ` UIColor  ` 中为该结构命名空间以使两者之间的关系清晰可见）：

``` Swift
extension UIColor {

    struct CodableWrapper: Codable {
        var value: UIColor

        init(_ value: UIColor) { 
            self.value = value
        }
        enum CodingKeys: CodingKey { 
            case red
            case green
            case blue
            case alpha 
        }

        func encode(to encoder: Encoder) throws {
        // Throw error if color isn't convertible to RGBA. 
        guard let (red, green, blue, alpha) = value.rgba else {
            let errorContext = EncodingError.Context( codingPath: encoder.codingPath, debugDescription:
            "Unsupported color format: \(value)" )
            throw EncodingError.invalidValue(value, errorContext) 
        }

        var container = encoder.container(keyedBy: CodingKeys.self) 
        try container.encode(red, forKey: .red)
        try container.encode(green, forKey: .green)
        try container.encode(blue, forKey: .blue)
        try container.encode(alpha, forKey: .alpha) }

        init(from decoder: Decoder) throws {
            let container = try decoder.container(keyedBy: CodingKeys.self) let red = try container.decode(CGFloat.self, forKey: .red)
            let green = try container.decode(CGFloat.self, forKey: .green) 
            let blue = try container.decode(CGFloat.self, forKey: .blue)
            let alpha = try container.decode(CGFloat.self, forKey: .alpha)
            self.value = UIColor(red: red, green: green, blue: blue, alpha: alpha) 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们应该注意，这种实现方式并不完美，因为它在编码过程中会将所有颜色转换为  ` RGB颜色  ` 空间。 以后再解码该值时，即使你最初编码的颜色位于灰度颜色空间中，也总是会获得RGB颜色。 由于没有公共的  ` UIColor API  ` 来标识颜色所在的颜色空间，因此更好的实现方式是必须使用基础  ` CGColor  ` 来标识颜色的颜色空间模型（例如  ` RGB或灰度  ` ），然后对颜色空间模型和对所讨论的色彩空间有意义的组件。 解码时，你必须先对色彩空间模型进行解码，然后才能知道在解码容器中还可以找到其他哪些键。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;包装器结构方法的一大缺点是，在编码之前和解码之后，你必须在  ` UIColor和包装器  ` 之间手动进行转换。 假设你要编码一个  ` UIColor值  ` 数组：

``` Swift
let colors: [UIColor] = [ 
    .red,
    .white,
    .init(displayP3Red: 0.5, green: 0.4, blue: 1.0, alpha: 0.8), 
    .init(hue: 0.6, saturation: 1.0, brightness: 0.8, alpha: 0.9),
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你必须先将该数组映射到  ` UIColor.CodableWrapper  ` ，然后才能将其传递给编码器：

``` Swift
let codableColors = colors.map(UIColor.CodableWrapper.init)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而且，任何存储  ` UIColor的类型  ` 都将不再参与自动代码合成。 定义如下类型会产生错误，因为  ` UIColor  ` 不是可编码的：

``` Swift
// Error: cannot automatically synthesize 'Encodable'/'Decodable'.
struct ColoredRect: Codable { 
    var rect: CGRect
    var color: UIColor
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们如何用最少的代码解决这个问题？ 就像在上一节中所做的一样，我们将添加类型为  ` UIColor.CodableWrapper  ` 的私有属性，该属性充当颜色值的存储，并且将  ` color  ` 设为已计算的属性，并在其访问器中转发给  ` _color  ` 。 我们还需要添加一个初始化程序。 最后，我们将提供自己的编码键枚举，将用于对颜色值进行编码的键从默认的  ` “ _color”  ` 更改为  ` “ color”  ` （此步骤是可选的）：

``` Swift
struct ColoredRect: Codable {
    var rect: CGRect
    // Storage for color.
    private var _color: UIColor.CodableWrapper 
    var color: UIColor {
        get { return _color.value }
        set { _color.value = newValue } }

        init(rect: CGRect, color: UIColor) {
        self.rect = rect
        self._color = UIColor.CodableWrapper(color)
    }

    private enum CodingKeys: String, CodingKey { 
        case rect
        case _color = "color"
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对  ` ColoredRect值  ` 数组进行编码将产生以下  ` JSON  ` 输出：

``` Swift
let rects = [ColoredRect(rect: CGRect(x: 10, y: 20, width: 100, height: 200), color: .yellow)]
do {
    let encoder = JSONEncoder()
    let jsonData = try encoder.encode(rects)
    let jsonString = String(decoding: jsonData, as: UTF8.self)
    // [{"color":{"red":1,"alpha":1,"blue":0,"green":1},"rect":[[10,20],[100,200]]}]
} catch { 
    print(error.localizedDescription)
}
```

## ***使枚举可编码***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器可以为  ` RawRepresentable枚举  ` （其  ` RawValue类型  ` 是“本地”可编码类型之一）（即  ` Bool  ` ，  ` String  ` ，  ` Float  ` ，  ` Double  ` 或  ` 整数类型之一  ` ）综合  ` Raw  ` 表示的  ` Codable一致性  ` 。 对于其他枚举（例如具有关联值的枚举），你需要手动实现要求。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让  ` Either枚举  ` 与  ` Codable一致  ` 。 这是一种非常常见的类型，用于对值进行建模，该值可以是通用类型A的某个值，也可以是另一种类型B的某个值：

``` Swift
enum Either<A, B> { 
    case left(A)
    case right(B)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们可以依赖于通用参数A和B本身是可编码的，那么我们只能为  ` Either  ` 编写一个明智的  ` Codable实现  ` 。 没有这个约束，我们将不知道如何编码或解码枚举的关联值。 因此，可编码一致性必须以A和B的一致性为条件：

``` Swift
extension Either: Codable where A: Codable, B: Codable { 

    private enum CodingKeys: CodingKey {
        case left
        case right 
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self) 

        switch self {
            case .left(let value):
                try container.encode(value, forKey: .left) 
            case .right(let value):
                try container.encode(value, forKey: .right) 
        }
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        if let leftValue = try container.decodeIfPresent(A.self, forKey: .left) {
            self = .left(leftValue) }else{
            let rightValue = try container.decode(B.self, forKey: .right)
            self = .right(rightValue) 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在  ` encode(to :)  ` 中，我们检查是否有一个  ` lef  ` t或  ` right  ` 值，并将其编码在相应的键下。 同样，  ` init（from :)  ` 初始化程序使用容器的  ` encodeIfPresent方法  ` 检查容器是否具有左键值。 如果没有，它将无条件地解码右key，因为必须存在两个key之一。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到目前为止，应该已经很熟悉编码和解码值的集合。 让我们使用  ` PropertyListEncoder  ` 和  ` PropertyListDecoder  ` 进行更改：

``` Swift
let values: [Either<String, Int>] = [ 
    .left("Forty-two"),
    .right(42)
]

do {
    let encoder = PropertyListEncoder() encoder.outputFormat = .xml
    let xmlData = try encoder.encode(values)
    let xmlString = String(decoding: xmlData, as: UTF8.self)
    /*
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd"> <plist version="1.0">
    <array>
    <dict>
    <key>left</key>
    <string>Forty-two</string> </dict>
    <dict>
    <key>right</key>
    <integer>42</integer> </dict>
    </array> </plist>
    */
    let decoder = PropertyListDecoder()
    let decoded = try decoder.decode([Either<String, Int>].self, from: xmlData) 
    /*
    [Either<Swift.String, Swift.Int>.left("Forty-two"), 
    Either<Swift.String, Swift.Int>.right(42)]
    */
} catch { 
    print(error.localizedDescription)
}
```

## ***解码多态集合***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到，解码器要求我们传入要解码的值的具体类型。 这很直观：解码器需要一个具体的类型来确定要调用的初始化程序，并且由于编码数据通常不包含类型信息，因此调用者必须提供该类型。 专注于强类型化的结果是，解码步骤中没有多态性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们要对视图数组进行编码，其中实际实例是  ` UIView子类  ` ，例如  ` UILabel  ` 或  ` UIImageView  ` ：

``` Swift
let views: [UIView] = [label, imageView, button]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（让我们暂时假设  ` UIView  ` 及其所有子类都符合  ` Codable  ` ，他们目前还没有。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们先对这个数组进行编码然后再对其进行解码，那么它就不会以相同的形式出现-数组元素的具体类型将无法生存。 解码器只会产生普通的  ` UIView对象  ` ，因为它所知道的只是解码数据的类型
必须是  ` [UIView].self  ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么我们如何编码这样的**多态对象集合**呢？ 最好的选择是定义一个枚举，每个子类要支持一个大小写。 枚举案例的有效负载存储实际对象：

``` Swift
enum View {
    case view(UIView) 
    case label(UILabel)
    case imageView(UIImageView)
    // ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们必须手动编写一个  ` Codable实现  ` ，该实现遵循与上一节中的  ` Either枚举  ` 类似的模式：

+ → 在编码过程中，我们应在所有情况下切换需要编码的对象类型，然后在单独的键下对对象的类型和对象本身进行编码。

+ → 在解码过程中，我们应该先解码类型信息，然后选择要初始化的具体类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们应该编写两个方便的函数来将  ` UIView  ` 封装在  ` View值  ` 中，反之亦然。这样，将源数组传递到编码器并从解码器获取它仅需要一个映射。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，这不是动态解决方案；每当我们要支持另一个子类时，我们都必须手动更新  ` View枚举  ` 。这很不方便，但是我们必须明确命名我们的代码可以接受的所有类型，这确实是有道理的。任何其他情况都将带来潜在的安全风险，因为攻击者可以使用可操纵的存档实例化程序中的未知对象。

# **Recap**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只需最少的代码（至少在通常情况下），就可以在程序的本机类型和通用数据格式之间无缝转换，这是Swift的一大亮点。如果你可以在客户端和服务器上同时使用Swift，那么  ` Codable系统  ` 将变得更加强大：在各处使用相同的类型可确保所有平台都将生成兼容的编码格式。总是可以覆盖默认行为，尽管有时在你需要处理尚未定义的非编码类型时有时会带来不便。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你将系统用于其设计的任务时，该系统会发光-以完全类型安全的方式使用已知格式的统一数据。 Swift会竭尽所能隐藏你从传统JSON解析器中获得的松散类型的类似于字典的数据。在极少数情况下，你宁愿使用  ` [String：Any]  ` 字典（也许是因为你不知道确切的数据格式），不要尝试不必要地将两个世界交织在一起。通过  ` JSONSerialization  ` 的老式方法仍然存在。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们仅讨论了传统的归档任务，但是有必要在框外进行思考，以找到可以从标准化的将值简化为原始数据的方法中获益的应用程序，反之亦然。例如，你可以使用  ` Decodable系统  ` 代替反射来从可解码值生成  ` SQL查询  ` 。或者，你可以编写一个解码器，该解码器可以为每种原始数据类型生成随机值，并使用该解码器为单元测试生成随机测试数据。


