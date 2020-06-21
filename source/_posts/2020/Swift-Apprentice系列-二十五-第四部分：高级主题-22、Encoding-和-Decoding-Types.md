---
title: 'Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types'
description: 'Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types'
permalink: 'Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types'
copyright: ture
date: 2020-06-21 14:49:57
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Encoding & Decoding Types]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

在几种情况下，你需要将数据保存到文件或通过网络发送。 在本章中，你将学习如何通过将实例转换为另一种表示形式（例如字符串或字节流）来实现这些任务。 此过程称为编码，也称为序列化。
将数据转换为实例的反向过程称为解码或反序列化。

假设你有一个要写入文件的实例。 实例本身无法按原样写入文件，因此你需要将其编码为另一种表示形式，例如字节流：

![""](https://cdn.xuebaonline.com/sp-ed-stp1.png "")

数据编码并保存到文件后，可以使用解码器随时将其转换为实例：

![""](https://cdn.xuebaonline.com/sp-ed-stp2.png "")



<!-- more -->


# Encodable & Decodable protocols

可编码协议由可以编码为另一种表示形式的类型使用。 它声明了一个方法：

``` Swift
func encode(to: Encoder) throws
```

...如果该类型的所有存储属性都由编译器为你生成也符合Encodable。 你将在本章后面的内容中了解更多信息。 

可解码协议由可以解码的类型使用。 它只声明一个初始值设定项：

``` Swift
init(from decoder: Decoder) throws
```

到本章末，你将知道何时以及如何实现这些方法。

# 什么是Codable？

Codable是一种类型可以遵循的协议，声明可以对其进行编码和解码。 它基本上是可编码和可解码协议的别名。

``` Swift
typealias Codable = Encodable & Decodable
```

# 自动编码和解码

Swift中有许多可立即使用的类型：Int，String，Date，Array以及标准库和Foundation框架中的许多其他类型。 如果希望你的类型是可编码的，则最简单的方法是遵循Codable并确保其所有存储属性也可编码。

举例来说，假设你拥有一家玩具工厂，并且拥有此结构来存储员工数据：

``` Swift
struct Employee {
    var name: String
    var id: Int 
}
```

你需要做的就是能够对该类型进行编码和解码以符合Codable协议，例如：

``` Swift
struct Employee: Codable {
    var name: String
    var id: Int 
}
```

哇，那很容易。 之所以能够做到这一点，是因为名称（字符串）和ID（整数）都是可编码的。

当你仅使用已编码的类型时，此方法效果很好。 但是，如果你的类型包括其他自定义类型作为属性怎么办？ 例如，查看你的Employee结构，假设它还具有可选的favoriteToy属性：

``` Swift
struct Employee: Codable {
  var name: String
  var id: Int
  var favoriteToy: Toy?
}
struct Toy: Codable {
  var name: String
}
```

通过确保玩具也符合Codable，你还可以维护员工与Codable的总体符合性。

如果所有集合类型都包含可编码类型，则它们也可以是可编码的，例如Array和Dictionary。

# 编码和解码自定义类型

你可以编码或解码几种表示形式，例如XML或属性列表。 在本部分中，你将学习如何使用Swift的JSONEncoder和JSONDecoder类对JSON进行编码和解码。

JSON表示JavaScript对象表示法，并且是序列化数据的最流行方法之一。 它易于被人类阅读，也便于计算机解析和生成。

例如，如果要将Employee类型的实例编码为JSON，则可能看起来像这样：

``` Swift
{ "name": "John Appleseed", "id": 7 }
```

你可以轻松了解Employee实例在序列化为JSON之前的外观。

# JSONEncoder & JSONDecoders

拥有可编码类型后，可以使用JSONEncoder将类型转换为可写入文件或通过网络发送的数据。 假设你有以下员工实例：

``` Swift
let toy1 = Toy(name: "Teddy Bear");
let employee1 = Employee(name: "John Appleseed", id: 7, favoriteToy: toy1)
```

约翰的生日快到了，你想给他他最喜欢的玩具作为礼物。 你需要将此数据发送到礼品部门。 在进行此操作之前，你需要对其进行编码，如下所示：

``` Swift
 let jsonEncoder = JSONEncoder()
let jsonData = try jsonEncoder.encode(employee1)
```

你会发现你需要使用try，因为encode（_ :)可能会失败并引发错误。

如果你尝试像这样打印jsonData：

``` Swift
print(jsonData)
```

你会看到Xcode省略了数据，仅提供jsonData中的字节数。 很好，因为jsonData包含不可读的employee1表示形式。 如果你想以字符串形式创建此JSON的可读版本，则可以使用String初始化程序：

``` Swift
let jsonString = String(data: jsonData, encoding: .utf8)! 
print(jsonString)
// {"name":"John Appleseed","id":7,"favoriteToy":{"name":"Teddy Bear"}}
```

现在，你可以使用其特殊的礼物API将json数据或json字符串发送到礼物部门。

如果要将JSON数据解码回实例，则需要使用JSONDecoder：

``` Swift
let jsonDecoder = JSONDecoder()
let employee2 = try jsonDecoder.decode(Employee.self, from: jsonData)
```

请注意，你需要使用Employee.self告诉解码器要解码的类型。

根据设计，它是在编译时指定的，因为它可以防止安全漏洞，外部人可能会尝试注入你不期望的类型。 Swift也自然地偏爱静态类型，因此也可以很好地发挥作用。

# 使用CodingKeys重命名属性

事实证明，礼品部门API要求员工ID显示为employeeId而不是id。 幸运的是，Swift提供了解决此类问题的方法。

## CodingKey协议和CodingKeys枚举

符合CodingKey协议的CodingKeys枚举，可让你重命名特定的属性，以防序列化格式不符合API的要求。

像这样添加嵌套的枚举CodingKeys：

``` Swift
struct Employee: Codable {
  var name: String
  var id: Int
  var favoriteToy: Toy?

  enum CodingKeys: String, CodingKey {
    case id = "employeeId"
    case name
    case favoriteToy
  }
}
```

这里有几件事要注意：

+ CodingKeys是你类型中的嵌套枚举。

+ 它必须符合CodingKey。

+ 你还需要String作为原始类型，因为键必须是字符串或整数。

+ 即使你不打算重命名它们，也必须在枚举中包括所有属性。

+ 默认情况下，此枚举由编译器创建，但是当你需要重命名键时，需要自己实现。

现在，如果你打印JSON，你将看到ID已更改为employeeId。

``` Swift
{ "employeeId": 7, "name": "John Appleseed", "favoriteToy":
{"name": "Teddy Bear"}}
```

## 手动编码和解码

你尝试将数据发送到礼品部门，然后数据再次被拒绝。 这次，他们声称你要发送给员工的礼物的信息不应位于嵌套类型内，而应作为称为礼物的属性。 因此，JSON实际上应如下所示：

``` Swift
{ "employeeId": 7, "name": "John Appleseed", "gift": "Teddy
Bear" }
```

在这种情况下，你将无法使用CodingKeys，因为你需要更改JSON的结构，而不仅是重命名属性。 你需要编写自己的编码和解码逻辑。

### 编码功能

如本章前面所述，可编码实际上只是可编码和可解码协议的一种类型。 你需要实现encode（to：Encoder）并描述如何对每个属性进行编码。

听起来可能很复杂，但是非常简单。 首先，更新CodingKeys以使用钥匙礼物而不是favoriteToy：

``` Swift
enum CodingKeys: String, CodingKey {
  case id = "employeeId"
  case name
  case gift
}
```

然后，你需要删除Employee与Codable的一致性并添加以下扩展名：

``` Swift
extension Employee: Encodable {
  func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self) 
        try container.encode(name, forKey: .name)
        try container.encode(id, forKey: .id)
        try container.encode(favoriteToy?.name, forKey: .gift)
    } 
}
```

首先，将编码器的容器放回原处，从而可以通过钥匙访问编码器的存储视图。 注意如何选择要为哪些键编码的属性。 重要的是，你将favoriteToy？.name展平为.gift键。 如果立即停止，则会出现以下错误：

``` Swift
'Employee' does not conform to expected type 'Decodable'
```

这是因为你删除了对Codable的一致性，而仅添加了对Encodable的一致性。 现在，你可以注释掉将jsonString解码为employee2的代码。 如果再次打印jsonString，将得到以下信息：

``` Swift
{"name":"John Appleseed","gift":"Teddy Bear","employeeId":7}
```

### 解码功能

数据到达礼品部门后，需要将其转换为部门系统中的实例。 显然，礼品部门需要一个解码器。 将以下代码添加到你的游乐场，以使Employee符合Decodable，从而也符合Codable：

``` Swift
extension Employee: Decodable {
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self) 
        name = try values.decode(String.self, forKey: .name)
        id = try values.decode(Int.self, forKey: .id)
        if let gift = try values.decode(String?.self, forKey: .gift) {
            favoriteToy = Toy(name: gift)
        } 
    }
}
```

在这里，你执行的操作与使用解码器的键控存储容器进行编码方法相反。

### encodeIfPresent & decodeIfPresent

事实证明，并非所有员工都有喜欢的玩具。 在这种情况下，encode方法将创建一个如下所示的JSON：

``` Swift
{"name":"John Appleseed","gift":null,"employeeId":7}
```

为了解决这个问题，你可以使用encodeIfPresent，这样encode方法将如下所示：

``` Swift
extension Employee: Encodable {
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self) 
        try container.encode(name, forKey: .name)
        try container.encode(id, forKey: .id)
        try container.encodeIfPresent(favoriteToy?.name, forKey: .gift)
    } 
}
```

现在，如果员工没有喜欢的玩具，则JSON中将不会包含礼物密钥。 接下来，使用decodeIfPresent更新解码器：

``` Swift
extension Employee: Decodable {
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self) 
        name = try values.decode(String.self, forKey: .name)
        id = try values.decode(Int.self, forKey: .id)
        
        if let gift = try values.decodeIfPresent(String.self, forKey: .gift) {
                favoriteToy = Toy(name: gift)
        }
    } 
}
```

## 编写编码器和解码器的测试

如果你随时更改编码器而忘记更新解码器（反之亦然），则在运行时可能会收到讨厌的错误消息。 为了避免这种情况，建议你编写单元测试，以确保你不会破坏编码或解码逻辑。

为此，你需要首先导入XCTest框架。 将其添加到playground的顶部：

``` Swift
   import XCTest
```

然后，你应该添加一个测试类并实现setUp方法来初始化JSONEncoder和JSONDecoder。 同时初始化一个Toy和一个Employee实例，以便你可以使用它们。

在playground的尽头添加：

``` Swift
class EncoderDecoderTests: XCTestCase {
    var jsonEncoder: JSONEncoder!
    var jsonDecoder: JSONDecoder!
    var toy1: Toy!
    var employee1: Employee!

    override func setUp() {
        super.setUp()
        jsonEncoder = JSONEncoder()
        jsonDecoder = JSONDecoder()
        toy1 = Toy(name: "Teddy Bear")
        employee1 = Employee(name: "John Appleseed", id: 7, favoriteToy: toy1)
    } 
}
```

下一步是添加测试本身。 请记住，所有测试都必须从测试开始。

将此添加到EncoderDecoderTests类中。 这些方法的内容应该看起来很熟悉，因为它主要是你以前学习如何使用编码器和解码器时所写内容的副本。

``` Swift
func testEncoder() {
    let jsonData = try? jsonEncoder.encode(employee1) 
    XCTAssertNotNil(jsonData, "Encoding failed")

    let jsonString = String(data: jsonData!, encoding: .utf8)!
    XCTAssertEqual(jsonString, "{\"name\":\"John Appleseed\",
    \"gift\":\"Teddy Bear\",\"employeeId\":7}")
}

func testDecoder() {
    let jsonData = try! jsonEncoder.encode(employee1)
    let employee2 = try? jsonDecoder.decode(Employee.self, from:
    jsonData)
    XCTAssertNotNil(employee2)
    XCTAssertEqual(employee1.name, employee2!.name) 
    XCTAssertEqual(employee1.id, employee2!.id) 
    XCTAssertEqual(employee1.favoriteToy?.name, employee2!.favoriteToy?.name)
}
```

这里最重要的是XCTAssert方法的使用。 他们保证逻辑是正确的，并且你的编码器和解码器工作正常。

开始使用测试只缺少一件事。 如第18章所述，要让playground实际运行测试，请将其添加到playground的末尾：

``` Swift
EncoderDecoderTests.defaultTestSuite.run()
```

一旦运行了playground，你应该会看到类似于以下内容的内容：

``` Swift
Test Suite 'EncoderDecoderTests' started at ...
Test Case '-[__lldb_expr_2.EncoderDecoderTests testDecoder]' started.
Test Case '-[__lldb_expr_2.EncoderDecoderTests testDecoder]' passed (0.781 seconds).
Test Case '-[__lldb_expr_2.EncoderDecoderTests testEncoder]' started.
Test Case '-[__lldb_expr_2.EncoderDecoderTests testEncoder]' passed (0.004 seconds).
Test Suite 'EncoderDecoderTests' passed at ...
Executed 2 tests, with 0 failures (0 unexpected) in 0.785 (0.788) seconds
```

# 关键点

+ 你需要先编码（或序列化）实例，然后才能将其保存到文件或通过网络发送它。

+ 你需要解码（或反序列化）以将其作为实例从文件或网络中恢复。

+ 你的类型应符合Codable协议以支持编码和解码。

+ 如果你存储的所有类型的属性都是Codable，则编译器可以自动为你实现Codable的要求。

+ JSON是现代应用程序和Web服务中最常见的编码，你可以使用JSONEncoder和JSONDecoder在JSON中对类型进行编码和解码。

+ Codable非常灵活，可以自定义以处理几乎所有有效的JSON。

+ Codable可与JSON以外的序列化格式一起使用。
