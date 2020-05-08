---
title: 'Advanced Swift系列(八): Generics'
description: 'Advanced Swift系列(八): Generics'
permalink: 'Advanced Swift系列(八): Generics'
copyright: ture
date: 2020-05-08 12:27:24
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Generics,泛型编程,多态
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Generics]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `泛型编程 `是**一种在保持类型安全的同时编写可重用代码的技术**。例如，标准库使用通用编程来使 `sort方法 `采用自定义比较器功能，同时确保比较器的参数类型与要排序的序列的元素类型匹配。同样，数组在其包含的元素种类上是通用的，以便提供用于访问和更改数组内容的类型安全的API。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们谈论 `Swift `中的 `泛型编程 `时，通常是指使用 `泛型进行编程 `（在 `Swift `的语法中以尖括号表示，例如 `Array <Int> `）。但是，了解泛型存在的更广泛的上下文会有所帮助。 `泛型是多态性的一种形式 `。 `多态性意味着使用可与多种类型一起使用的单个接口或名称 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至少有四个不同的概念可以根据 `多态编程 `进行分组：

+ → 我们可以定义具有相同名称但不同类型的多种方法。例如，在[***```“函数”```***]( https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%9B%9B):%20%20Functions/"")一章中，我们定义了三个不同的名为 `sortDescriptor `的函数，所有**这些函数都有不同的参数类型。这称为重载，或更具体地讲，称为临时多态**。

+ → 当功能或方法属于 `C类 `时，我们也可以传递 `C的子类 `。这称为 `亚型多态性 `。

+ → 当函数具有通用参数（用尖括号括起来）时，我们称为通用函数（同样对于通用类型或通用方法）。这称为参数多态性。通用参数也称为通用。

+ → 我们可以 `定义协议 `并使其符合多种类型。这是临时多态性的另一种（更结构化的）形式，我们将在 `“协议” `一章中进行讨论。

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于解决特定问题的概念通常取决于品味。在本章中，我们将讨论第三种技术， `参数多态性 `。泛型通常与协议一起使用以指定对泛型参数的约束。我们将在 `“协议” `一章中看到有关此示例，但本章仅关注**泛型**。

# **通用类型**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以编写的最通用的函数是身份函数，即返回其输入不变的函数：

``` Swift
func identity<A>(_ value: A) -> A { 
    return value
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份函数具有单个通用类型：对于我们选择的任何A，它的类型都是  `(A)->A ` 。但是，身份函数具有无限数量的具体类型（没有通用参数的类型，例如 `Int `， `Bool ` 和 `String `）。 例如，如果我们选择A为 `Int `，则具体类型为 `(Int)-> Int `; 如果我们选择A为  `(String-> Bool) ` ，则其类型为  `((String）-> Bool) -> (String) -> Bool `; 等等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数和方法不是唯一的泛型类型。 我们还可以具有通用的 `结构 `， `类 `和 `枚举 `。 例如，这是可选的定义：

``` Swift
enum Optional<Wrapped> { 
    case none
    case some(Wrapped)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们说 `Optional `是 `泛型类型 `。 当为 `Wrapped `选择一个值时，我们得到一个具体的类型。 例如， `Optional <Int> `或 `Optional <UIView> `都是具体类型。 我们可以将 `Optional `视为类型构造函数：给定具体类型（例如Int），它将构造不同的具体类型（例如 `Optional <Int> `）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们查看标准库时，我们看到有许多具体类型，但也有许多 `泛型类型 `（例如： `数组 `， `字典 `和 `结果 `）。  `Array类型 `只有一个 `通用参数Element `。 这意味着我们可以选择任何具体类型并使用它来创建数组。 我们还可以创建自己的泛型类型。 例如，下面的枚举描述了一个在节点上具有值的二叉树：

``` Swift
enum BinaryTree<Element> {
    case leaf
    indirect case node(Element, l: BinaryTree<Element>, r: BinaryTree<Element>)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `BinaryTree `是具有单个 `通用参数Element `的通用类型。 要创建具体类型，我们必须为 `Element选择 `一个具体类型。 例如，我们可以选择 `Int `：

``` Swift
let tree: BinaryTree<Int> = .node(5, l: .leaf, r: .leaf)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们想将一个 `泛型类型 `转换为一个 `具体类型 `时，我们**必须为每个泛型参数选择一个确切的具体类型**。 创建数组时，你可能已经熟悉此限制。 例如，当我们创建一个空数组时，我们需要提供一个显式类型； 否则，Swift不知道为其元素使用哪种具体类型：

``` Swift
// Type annotation is required.
var emptyArray: [String] = []
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，除非你为数组的 `“Element” `明确选择一种类型，否则 `Swift `不允许你将具有不同具体类型的值放入数组中。 默认情况下，编译器建议选择 `“Any” `：

``` Swift
let multipleTypes: [Any] = [1, "foo", true]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在通用函数部分中讨论 `Any `。

## ***扩展通用类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `通用参数Element `在 `BinaryTree `范围内的任何位置都可用。 例如，在 `BinaryTree `上编写扩展时，我们可以自由地使用 `Element `，就好像它是一种具体类型一样。 让我们添加一个方便的初始值设定项，它使用 `Element `作为其参数：

``` Swift
extension BinaryTree { 
    init(_ value: Element) {
        self = .node(value, l: .leaf, r: .leaf) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个计算属性，它收集树中的所有值并将它们作为数组返回：

``` Swift
extension BinaryTree { 
    var values: [Element] {
        switch self { 
            case .leaf: 
                return []
            case let .node(el, left, right):
                return left.values + [el] + right.values
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们在 `BinaryTree<Int> `上调用值时，我们将返回一个整数数组：

``` Swift
tree.values // [5]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以添加通用方法。 例如，我们可以添加 `map `，它具有一个名为 `T `的附加泛型参数，用于**表示转换函数的返回类型和转换后的树的元素类型**。 因为我们在 `BinaryTree `的扩展中定义 `map `，所以我们仍然可以使用通用的 `Element参数 `：

``` Swift
extension BinaryTree {
    func map<T>(_ transform: (Element) -> T) -> BinaryTree<T> {
        switch self { 
            case .leaf:
                return .leaf
            case let .node(el, left, right):
                return .node(transform(el), l: left.map(transform), r: right.map(transform))
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为 `Element `和 `T `都 `不受协议约束 `，所以我们可以为它们选择所需的任何具体类型。 我们甚至可以为两个通用参数选择具有相同的具体类型：

``` Swift
let incremented: BinaryTree<Int> = tree.map { $0 + 1 }
// node(6, l: BinaryTree<Swift.Int>.leaf, r: BinaryTree<Swift.Int>.leaf)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是我们也可以选择不同的类型。 在此示例中， `Element `为 `Int `，但 `T `为 `String `：

``` Swift
let stringValues: [String] = tree.map { "\($0)" }.values // ["5"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 `Swift `中，许多集合都是通用的（例如： `数组 `， `集合 `和 `字典 `）。 但是， `泛型 `不仅对集合有用。 它们还在整个 `Swift标准库 `中使用。 例如：

+ →  `Optional ` 使用通用参数来包装类型。
+ →  `Result ` 具有两个通用参数-代表成功的值，并且另一个代表错误。
+ →  `Unsafe[Mutable] ` 类型不通用的。
+ →  `Key paths ` 是根类型和结果值类型的通用。
+ →  `Ranges ` 是  `bounds ` 的泛型。

## **Generics vs. Any**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `泛型 `和 `Any `经常用于相似的目的，但是它们的行为却大不相同。 在没有泛型的语言中， `Any `通常用于实现同一目的，但类型安全性较低。 这通常意味着使用 `运行时编程 `（例如 `自省 `和 `动态强制转换 `）从 `Any类型 `的变量中提取具体类型。 泛型可用于解决许多相同的问题，但具有 `编译时检查的附加优点 `，可避免 `运行时开销 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在阅读代码时， `泛型 `可以帮助我们了解 `方法或函数 `的功能。 例如，考虑数组上 `reduce `的类型：

``` Swift
extension Array {
    func reduce<Result>(_ initial: Result, _ combine: (Result, Element) -> Result) -> Result 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不用看实现，我们仅凭类型签名就可以了解很多（假设 `reduce `拥有明智的实现）：

+ → 首先，我们知道减少的结果是通用的，这也是返回类型。(  `Result ` 是通用参数的名称。请不要将其与枚举标准库的 `Result `混淆。）
+ → 查看输入参数，我们可以看到该函数采用了 `Result类型 `的值，以及将 `Result `和 `Element组合 `为新 `Result `的方法。
+ → 因为返回类型为 `Result `，所以减小的返回值必须是初始值或调用合并器的返回值。
+ → 如果数组为空，则放弃元素值，因此只能返回初始值。
+ → 如果数组不是空的，则该类型具有一些实现的自由：该方法可以返回初始值而无需查看元素（尽管这在不明智的实现上会有所边界），或者该方法可以与其中一个元素（例如，第一个或最后一个元素）调用 `Combine `或重复使用所有元素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，存在无限数量的其他可能的实现。例如，该实现可以仅对某些元素调用合并。它可以使用运行时类型自省，更改某些全局状态或进行网络调用。但是，这些东西都不能视为明智的实现，并且由于 `reduce `是在标准库中定义的，因此可以确定它具有明智的实现。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在考虑使用 `Any `定义的相同方法：

``` Swift
extension Array {
    func reduce(_ initial: Any, _ combine: (Any, Any) -> Any) -> Any
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使我们仅考虑明智的实现，这种类型的信息也少得多。 仅通过查看类型，我们就无法真正分辨出第一个参数与返回值之间的关系。 同样，也不清楚将参数传递给合并函数的顺序。 甚至还不清楚合并功能是否用于合并结果和元素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从某种意义上说，函数或方法越通用，其作用就越小。 调用身份功能。 它是如此通用，以至于只有一种明智的实现：

``` Swift
func identity<A>(_ value: A) -> A { 
    return value
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据我们的经验，泛型类型在阅读代码时有很大的帮助。 更具体地说，当我们看到一个非常通用的函数或方法（如 `reduce或map `）时，我们不必猜测它的作用：**可能的实现次数受类型的限制**。

# **泛型设计**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `泛型 `在程序设计期间非常有用，因为它们可以帮助**排除共享功能并减少样板**。 在本节中，我们将重构非通用的网络代码，通过使用通用来提取通用功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在 `URLSession loadUser `上编写一个扩展名，该扩展名将从网络服务中获取当前用户的个人资料并将其解析为User数据类型。 首先，我们构造 `URL `并启动数据任务。 在任务的完成处理程序中，如果发生错误或没有可用数据，我们将抛出该错误； 否则，我们将使用 `Codable基础结构 `对数据进行解码（我们将在 `“编码和解码” `一章中进行讨论）。 我们在对 `Result（catching :) `初始化程序的调用中将抛出代码包装在完成处理程序中，该初始化程序将创建一个 `Result值 `，该值可以传递给 `loadUser `自己的完成回调：

``` Swift
extension URLSession {
    func loadUser(callback: @escaping (Result<User, Error>) -> ()) {
        let userURL = webserviceURL.appendingPathComponent("/profile") dataTask(with: userURL) { data, response, error in
            callback( Result {
            iflete=error{throwe}
            guard let d = data else { throw NoDataError() } 
            return try JSONDecoder().decode(User.self, from: d)
        }) 
        }.resume()
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想重用相同的函数来加载不同的类型（例如 `BlogPost `），则实现方式几乎相同。 我们必须更改三件事： `类型签名 `， `URL `和 `JSONDecoder.decode（_：from :) `调用中的表达式 `User.self `。 但是有一种更好的方法- `通过用泛型参数替换具体类型的User `，我们可以使我们的加载方法成为 `泛型 `，而大多数实现都保持不变。 同时，我们没有直接解析JSON，而是添加了另一个要加载的参数：一个解析函数，该函数知道如何将从Web服务返回的数据解析为A类型的值（稍后我们将看到） 给我们很大的灵活性）：

``` Swift
extension URLSession {
    func load<A>(url: URL, parse: @escaping (Data) throws -> A,
        callback: @escaping (Result<A, Error>) -> ()) { dataTask(with: url) { data, response, error in
            callback(Result {
                iflete=error{throwe}
                guard let d = data else { throw NoDataError() } 
                return try parse(d)
            }) 
        }.resume()
    } 
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新的加载功能将 `URL `和解析功能作为参数，因为这些输入现在取决于要加载的特定端点。 此重构遵循我们在[***```内置集合```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "") {＃parameterizing-with-functions}中对地图和其他标准库方法所看到的相同策略：

+ 1.识别常见的任务模式（从 `HTTPURL `加载数据并解析响应）。
+ 2.提取执行该任务的模板代码。
+ 3.允许客户端通过通用参数和函数自变量注入随调用而变化的内容（要加载的特定URL以及如何解析响应）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以使用两个不同的端点调用load，并且几乎没有代码重复：

``` Swift
let profileURL = webserviceURL.appendingPathComponent("profile") URLSession.shared.load(url: profileURL, parse: {
    try JSONDecoder().decode(User.self, from: $0) 
}) { print($0) }

let postURL = webserviceURL.appendingPathComponent("blog") 
URLSession.shared.load(url: postURL, parse: {
    try JSONDecoder().decode(BlogPost.self, from: $0) 
}) { print($0) }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为一个 `URL `和用于解析从该URL返回的数据的解析函数自然地属于在一起，所以将它们组合在一起成为 `Resource结构 `是有意义的：

``` Swift
struct Resource<A> { 
    let url: URL
    let parse: (Data) throws -> A 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下是定义为资源的两个相同端点：

``` Swift
let profile = Resource<User>(url: profileURL, parse: { try JSONDecoder().   decode(User.self, from: $0)
})
let post = Resource<BlogPost>(url: postURL, parse: {
    try JSONDecoder().decode(BlogPost.self, from: $0) 
})
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 `Resource `的 `parse函数 `对 `JSON解码 `一无所知，因此我们也可以使用 `Resource `来表示其他类型的资源。 例如，我们可以创建用于加载图像或XML数据的资源。 另一方面，增加的灵活性意味着所有 `JSON资源 `都必须在其解析函数中重复相同的 `JSON解码代码 `。 为了避免每个 `JSON资源 `中的重复，我们创建了一个方便的初始化程序，该初始化程序的条件是A是可解码的（我们将在下一章中详细讨论条件一致性）。 初始化程序使用通用参数来解码正确的类型：

``` Swift
extension Resource where A: Decodable { 
    init(json url: URL) {
        self.url = url self.parse = { data in
            try JSONDecoder().decode(A.self, from: data) 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使我们能够以更短的方式定义相同的资源：

``` Swift
let profile = Resource<User>(json: profileURL)
let blogPost = Resource<BlogPost>(json: postURL)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们编写一个采用 `Resource值 `的 `load方法 `的版本：

``` Swift
extension URLSession {
    func load<A>(_ r: Resource<A>, callback: @escaping (Result<A, Error>) -> ()) {
        dataTask(with: r.url) { data, response, err in 
        callback(Result {
            if let e = err { throwe }
            guard let d = data else { throw NoDataError() } 
            return try r.parse(d)
        }) 
    }.resume()
} 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以使用配置文件资源调用 `load `，并且在回调中，我们将收到 `User值 `或错误：

``` Swift
URLSession.shared.load(profile) { result in 
    print(result)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建通用 `Resource类型 `的好处是，我们**使代码更易于测试**。 资源是完全同步的，这使得对**单元测试**进行解析变得容易。  `URLSession `上的 `load方法 `仍然是异步的，因此仍然很难测试。 但是，现在异步已被隔离在一个方法中，而不是在多个方法中。

# **概括**

在本章的过程中，我们看到了 `泛型 `如何允许多态-更具体地说，是 `参数多态 `。 泛型可以在很多地方使用：我们可以编写 `泛型类型 `， `泛型函数 `和 `泛型下标 `。 但是 `泛型不仅对集合类型有用 `。 例如，在标准库中，诸如 `Optional `和 `Result之类 `的类型是通用的。 同样，在我们自己的代码中，我们可以使用泛型来抽象出特定的细节并实现明确的职责分离。
