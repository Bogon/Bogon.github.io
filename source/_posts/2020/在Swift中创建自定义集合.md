---
title: 在Swift中创建自定义集合
description: 在Swift中创建自定义集合
permalink: 在Swift中创建自定义集合
copyright: ture
date: 2020-04-26 09:29:52
keywords: iOS,UIKit,设计模式,抽象,Swift,迭代器设计模式,重构,Iterator design pattern,Collections,Collection
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [迭代器设计模式]
    - [Collection]
    - [Collections]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中创建对象或值的集合时，我们通常使用标准库提供的数据结构-例如 ```Array``` ，```Dictionary``` 和 ```Set``` 。 尽管这三个案例涵盖了大多数用例，但有时创建自定义包装器集合可以使你使代码更可预测，并且更不易出错。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此次，让我们看看作为应用程序开发人员的我们如何在 ```Swift``` 中定义此类自定义集合，以及结合枚举的强大功能，如何让我们为自己创建一些非常漂亮的 ```API``` 。

<!-- more -->

</br>

# **删除可选**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像我们在 [```“在Swift中处理非可选的可选内容”```](http://www.xuebaonline.com/%E5%9C%A8Swift%E4%B8%AD%E5%A4%84%E7%90%86%E9%9D%9E%E5%8F%AF%E9%80%89%E9%80%89%E9%A1%B9/ "在Swift中处理非可选的可选内容") 中介绍的那样，减少了在实际需要的值真正需要时使用可选的需求，这确实可以帮助我们避免错误并简化我们的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，集合的问题在于，你通常无法保证它们是否包含一定的值，因此，你往往会遇到很多可选内容和逻辑，这些可选内容和逻辑要求以一种或另一种方式将它们拆开。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们正在为一家杂货店构建应用程序，并且我们希望拥有一个用户界面，该界面可让用户按类别显示所有产品。 要为此类UI创建模型，我们可以使用 ```Dictionary``` ，其使用 ```Category``` 作为其键类型，并使用 ```[Product]``` 作为其值类型，如下所示：

``` Swift
let products: [Category : [Product]] = [
    .dairy: [
        Product(name: "Milk", category: .dairy),
        Product(name: "Butter", category: .dairy)
    ],
    .vegetables: [
        Product(name: "Cucumber", category: .vegetables),
        Product(name: "Lettuce", category: .vegetables)
    ]
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管上述方法有效，但要求我们编写这样的代码，以便例如仅显示所有 ```Product``` ：

``` Swift
if let dairyProducts = products[.dairy] {
    guard !dairyProducts.isEmpty else {
        renderEmptyView()
        return
    }

    render(dairyProducts)
} else {
    renderEmptyView()
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很好，但是可能会更好。 但是，插入新产品变得更加麻烦：

``` Swift
class ShoppingCart {
    private(set) var products = [Category : [Product]]()

    func add(_ product: Product) {
        if var productsInCategory = products[product.category] {
            productsInCategory.append(product)
            products[product.category] = productsInCategory
        } else {
            products[product.category] = [product]
        }
    }
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好消息是，通过创建我们自己的自定义集合，我们可以使上述两个示例变得更好更清晰。 而且，更好的消息是-借助 ```Swift``` 的面向协议的设计-创建这样的集合实际上非常容易！

</br>

# **创建集合**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 标准库中的所有集合都遵循 ```Collection``` 协议，而 ```Collection``` 协议又继承自 ```Sequence``` 协议。 通过使自定义集合符合这两个协议，它可以完全免费地利用所有标准集合操作（例如，迭代和过滤）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从定义自定义 ```ProductCollection``` 的基础开始，这将使我们能够以更好的方式处理产品和类别。

``` Swift
struct ProductCollection {
    typealias DictionaryType = [Category : [Product]]

    // Underlying, private storage, that is the same type of dictionary
    // that we previously was using at the call site
    private var products = DictionaryType()

    // Enable our collection to be initialized with a dictionary
    init(products: DictionaryType) {
        self.products = products
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们将通过实现协议要求使其符合 ```Collection``` 。 我们要做的大多数事情就是简单地将调用转发到基础 ```products``` 字典，然后让它进行“繁重的工作”：

``` Swift
extension ProductCollection: Collection {
    // Required nested types, that tell Swift what our collection contains
    typealias Index = DictionaryType.Index
    typealias Element = DictionaryType.Element

    // The upper and lower bounds of the collection, used in iterations
    var startIndex: Index { return products.startIndex }
    var endIndex: Index { return products.endIndex }

    // Required subscript, based on a dictionary index
    subscript(index: Index) -> Iterator.Element {
        get { return products[index] }
    }

    // Method that returns the next index when iterating
    func index(after i: Index) -> Index {
        return products.index(after: i)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码使用的是 ```Swift 4``` ，这归功于对通用约束的改进（使我们可以更仔细地研究这些改进以及如何在以后的文章中使用类型约束），从而使自定义集合的定义变得更加简单。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们有了一个自定义集合，可以将其用作内置集合之一。 例如，我们可以遍历它：

``` Swift
for (category, productsInCategory) in products {
    ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者在其上使用诸如 ```map``` 的操作：

``` Swift
let categories = productCollection.map { $0.key }
```

</br>

# **自定义集合 API**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们已经为我们的系列奠定了基础，让我们开始向其中添加一些 ```API``` ，使我们能够使我们的产品处理代码更好。 我们将从一个自定义的下标重载开始，该重载使我们无需处理可选项就可以获取或设置一系列产品：

``` Swift
extension ProductCollection {
    subscript(category: Category) -> [Product] {
        get { return products[category] ?? [] }
        set { products[category] = newValue }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还添加一个便捷的 ```API``` ，以轻松地将新 ```product``` 插入我们的收藏夹：

``` Swift
extension ProductCollection {
    mutating func insert(_ product: Product) {
        var productsInCategory = self[product.category]
        productsInCategory.append(product)
        self[product.category] = productsInCategory
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以返回原始的 ```product``` 处理代码，并将其更新为更好的代码。 

``` Swift
let dairyProducts = products[.dairy]

if dairyProducts.isEmpty {
    renderEmptyView()
} else {
    render(dairyProducts)
}
```

下一步：

``` Swift
class ShoppingCart {
    private(set) var products = ProductCollection()

    func add(product: Product) {
        products.insert(product)
    }
}
```

</br>

# **通过 Key 值获取**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好了，到了关键时候！ 由于我们的自定义集合基本上只是字典的包装，因此我们可以轻松地添加对使用字典文字进行初始化的支持。 这样做将使我们能够编写如下代码：

``` Swift
let products: ProductCollection = [
    .dairy: [
        Product(name: "Milk", category: .dairy),
        Product(name: "Butter", category: .dairy)
    ],
    .vegetables: [
        Product(name: "Cucumber", category: .vegetables),
        Product(name: "Lettuce", category: .vegetables)
    ]
]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;太酷了！ 这不仅对减少生产代码中的冗长有用，而且还将使在我们的测试中设置产品集合模拟更加简单。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要做的就是遵守    ```ExpressibleByDictionaryLiteral``` ，它要求我们实现一个带有文字的初始化程序，如下所示：

``` Swift
extension ProductCollection: ExpressibleByDictionaryLiteral {
    typealias Key = Category
    typealias Value = [Product]

    init(dictionaryLiteral elements: (Category, [Product])...) {
        for (category, productsInCategory) in elements {
            products[category] = productsInCategory
        }
    }
}
```

</br>

# **结论**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用自定义集合可能是一种非常强大的工具，可以以一种更加可预测且易于使用的方式来处理一组值。 当您处理多个值时，它不一定总是您的首选解决方案，但在正确的情况下，它确实可以帮助你编写更简洁的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在调试时，了解诸如集合之类的事物的工作方式也非常有帮助，或者使你了解如何优化与集合相关的代码。