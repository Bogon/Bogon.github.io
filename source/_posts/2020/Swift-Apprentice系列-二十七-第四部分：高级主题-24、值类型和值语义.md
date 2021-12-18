---
title: 'Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义'
description: 'Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义'
permalink: 'Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding
  和 Decoding Types,内存管理,值类型和值语义
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 值类型和值语义
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 43243
date: 2020-06-21 15:42:40
---

Swift支持两种类型：*值类型和引用类型*。***结构和枚举是值类型，而类和函数是引用类型***。这些类型的行为不同。你期望值类型产生的行为是值语义的结果。当类型支持值语义时，你可以通过仅查看该变量来推断该变量的值，因为与其他变量的交互不会影响该变量。

类型保证了变量的独立性，从而排除了大量的错误。这就是为什么大多数Swift标准库类型都支持值语义的原因，为什么要导入许多可可类型以提供值语义的原因，以及为什么应该在适当的时候使用值语义的原因。也就是说，值语义并不总是适当的选择，它们可能需要一些微妙的处理才能正确支持。

本章将定义值语义，展示如何对其进行测试，并解释它们何时合适。你将学习如何使用值类型，引用类型或两者的混合来使用值语义构建类型。你将学习巧妙的混合类型如何通过值语义的简单界面和内部引用类型的效率来提供两全其美的方法。

# 值类型与引用类型

值和引用类型的分配行为不同，这只是Swift在将值分配给变量时所做的工作的名称。 分配值是常规的，每次你分配给全局变量，局部变量或属性时都会发生。 你还可以在调用函数时进行分配，从而有效地为函数的参数分配一个值。

<!-- more -->

## 引用类型

引用类型使用按引用分配。 当变量是引用类型时，将实例分配给变量会将其设置为引用该实例。 如果另一个变量已经在引用该实例，则这两个变量在赋值后现在都引用同一实例，如下所示：

![""](http://cdn.xuebaonline.com/sa-vr-stp1.png "")

**由于两个变量都指向同一实例，因此你可以使用一个变量来更改该实例，并在另一个实例中查看更改的效果。**

假设你经营一家油漆店，将油漆卖给风景画家，画家和建筑商。 你正在构建库存应用程序以跟踪涂料。

从简单的颜色和油漆抽象开始：

``` Swift
struct Color: CustomStringConvertible {
    var red, green, blue: Double
    
    var description: String {
        "r: \(red) g: \(green) b: \(blue)"
    }
}
// Preset colors
extension Color {
    static var black = Color(red: 0, green: 0, blue: 0) 
    static var white = Color(red: 1, green: 1, blue: 1) 
    static var blue = Color(red: 0, green: 0, blue: 1) 
    static var green = Color(red: 0, green: 1, blue: 0) // more ...
}

// Paint bucket abstraction
class Bucket {
    var color: Color
    var isRefilled = false
    
    init(color: Color) {
        self.color = color 
    }

    func refill() {
        isRefilled = true
    }
}
```

风景画家喜欢画天空，因此你的商店里有一桶蓝色油漆，侧面贴有“ azure”标签。 房屋油漆工也喜欢这种颜色，但他们称其为“墙蓝色”。 在同一存储桶的另一侧，你还有另一个标签为“ wall blue”。

你的库存应用中的代码反映了以下内容：


``` Swift
let azurePaint = Bucket(color: .blue)
let wallBluePaint = azurePaint wallBluePaint.isRefilled // => false, initially 
azurePaint.refill()
wallBluePaint.isRefilled // => true, unsurprisingly!
```

当你调用azurePaint.refill（）时，你还要重新填充wallBluePaint，因为这两个变量都引用同一实例。

实际上，这两个变量现在相互依赖。 任何变量的值就是它所引用的实例的值。 这两个变量引用相同的实例，因此每个变量的值取决于另一个变量的值。 改变一个可能会改变另一个。 这两个变量是同一存储桶的两个名称。

## 值类型

但是，***值类型使用按副本分配***。 将实例分配给值类型的变量将复制该实例并设置该变量以容纳该新实例。 因此，**在每次分配后，变量都拥有一个实例，该实例拥有全部所有权**。

外观如下：

![""](http://cdn.xuebaonline.com/sa-vr-stp2.png "")

在上面的示例中，Color是一种值类型，因此将值分配给wallBlue会创建azure持有的实例的副本。

现在，每个变量都是独立的，因此你不必担心其他变量可能会对其进行更改。 例如，假设画家的口味发生了变化，他们决定在深色的蓝色阴影下墙壁看起来更好。 如果调用方法wallBlue.darken（）来更改wallBlue的颜色，则不会影响天蓝色的含义。

``` Swift
extension Color {
    mutating func darken() {
        red *= 0.9; green *= 0.9; blue *= 0.9 
    }
}
var azure = Color.blue
var wallBlue = azure
azure // r: 0.0 g: 0.0 b: 1.0
wallBlue.darken()
azure // r: 0.0 g: 0.0 b: 1.0 (unaffected)
```

为了继续进行比喻，这些值类型变量与其在可以更改其内容的同一个油漆桶中使用不同的名称不同，更像是在颜色样本色板上打印的名称。 每个名称仅与一种颜色相关联，因为它是颜色本身的名称。

# 定义值语义

关于基本值类型（例如Color或Int）的好处不是复制分配行为本身，而是这种行为所产生的保证。

**这种保证是，影响变量值的唯一方法是通过变量本身。** 如果类型承诺，则该类型支持值语义。

要测试类型是否支持值语义，请在如下代码段中考虑它：

``` Swift
var x = MysteryType()
var y = x
exposeValue(x) // => initial value derived from x
// {code here which uses only y}
exposeValue(x) // => final value derived from x
// Q: are the initial and final values different?
```

如果“仅使用y”的代码可以影响x的值，则MysteryType不支持值语义。

价值语义的一个好处是它们有助于局部推理，因为要找出变量如何获得其价值，你只需要考虑与该变量互动的历史即可。 **价值语义世界是一个简单的世界，其中变量具有值，而这些变量不会相互影响**。

## 什么时候更喜欢值语义

什么时候应该设计一种类型来支持值语义？尽管它们很方便，但值语义是否合适取决于类型应该建模的类型。

***值语义很适合表示惰性的描述性数据-数字，字符串和物理量（例如角度，长度或颜色）；数学对象，例如向量和矩阵；纯二进制数据；最后是这些价值的集合，以及由这些价值构成的大型丰富结构，例如媒体。***

**引用语义非常适合表示程序或世界中的不同项目**。例如：程序中的构造，例如特定的按钮或内存缓冲区；在协调某些其他对象中起特定作用的对象；或现实世界中的特定人或物体。

这里的基本逻辑是，**可引用项都是对象，这意味着它们都具有不同的标识**。两个人的所有生理属性可能都是相似的，但他们仍然是截然不同的人。两个缓冲区可以容纳相等的字节模式，但是它们仍然是不同的缓冲区。

但是**值语义列表中的项目都是值**。他们缺乏认同感，因此谈论两个相等但截然不同的事物毫无意义。如果我们同意x等于5，就不再有关于它等于5的问题。五是五。

一种常见的模式是，将诸如Person之类的模型类型定义为参考类型，以反映它是具有标识的对象，同时将其加载描述对象的各种值属性（例如age，hairColor等）。

**当程序必须表示许多不同的项目（例如Persons）时，或者当程序的不同部分需要围绕同一项目进行协调（例如设备的屏幕或UIApplication实例本身）时，引用类型是表示这些项目的自然工具。**

整个UIKit使用引用类型，因为运行应用程序代码需要参考的主要内容之一是其他代码。因此，你拥有描述屏幕视图的UIView，描述屏幕的UIScreen，描述提供框架服务的对象的NSNotificationCenter等等。

# 实现值语义

现在假设你确实需要值语义。如果要定义类型，应如何实施？方法取决于类型的细节。在本节中，你将一一考虑各种情况。

## 情况1：原始值类型

像Int这样的原始值类型会自动支持值语义。这是因为按副本分配确保每个变量都拥有其自己的实例（因此，其他任何变量都不能影响该实例），并且因为实例本身在结构上是独立的。也就是说，该实例独立于任何其他实例定义其自己的值，因此没有其他实例可以影响其值。

直觉是，一个Int直接由位模式表示，这些位被整体复制而不涉及任何外部。

## 情况2：复合值类型

复合值类型（例如struct或enum）遵循以下简单规则：如果struct的所有存储属性都支持值语义，则该结构支持值语义。

你可以通过查看Swift如何执行实例复制来证明该规则。 Swift复制结构实例时，会创建一个复制实例，就好像它直接将原始实例的所有存储属性分配给复制实例的属性一样。这是直接分配，因为它不会调用任何属性观察器。

由于你要分配的是值类型的结构，因此分配给变量将保存分配的实例的副本。并且由于实例的属性具有值语义，因此复制实例的属性将是唯一可以修改其实例的变量。因此，从中可以看出，assigned-to变量是修改其实例或它依赖的任何其他实例的唯一方法，因此是修改其自身值的唯一方法。证明！

如果类型是枚举，则类似于：实例副本被定义为具有相同的枚举成员，并且好像该成员的关联值是直接从现有实例的关联值中分配的。

顺便说一句，由于Array <Element>提供的语义与具有Element类型的属性的结构相同，因此这种情况还可以告诉你数组是否支持值语义。它们可以，但前提是其元素类型可以。

## 情况3：参考类型

引用类型也可以具有值语义。

要了解如何操作，请记住，如果影响变量值的唯一方法是通过该变量，则该类型具有值语义。通常，只能通过两种方式更改引用类型的变量的值，方法是分配给变量，使其引用不同的实例，或者修改实例本身。

第一种方法通过变量工作，因此值语义允许它。但是第二种方法（修改实例）可能会受到另一个变量的影响，因此你需要防止它保留值语义。

解决方案很简单：**要使用值语义定义引用类型，必须将其定义为不可变的**。换句话说，进行构建以免初始化后更改实例的值。为此，必须确保其所有存储属性都是恒定的，并且仅使用具有值语义的类型。

许多基本的UIKit实用程序类型都采用这种模式。例如，考虑以下处理UIImage的代码：

``` Swift
var a = UIImage(named:"smile.jpg") 
var b = a
computeValue(b) // => something doSomething(a)
computeValue(b) // => same thing!
```

因为UIImage是不可变的，所以没有可能的函数doSomething（a）会导致computeValue（b）更改其返回的值。可能会问b是指a的副本还是对a实例的引用，但这并不重要。

UIImage类型具有许多属性（scale，capInsets，renderingMode等），但是由于它们都是只读的，因此你无法修改实例。因此，一个变量无法影响另一个变量。但是，如果其属性之一不是恒定的，则设置该属性将使实例发生变异并破坏不变量-这种共享公共实例的结构共享将是不安全的。

出于这个原因，UIImage与许多可可类型一起被定义为不可变的，因为***不可变的引用类型具有值语义***。

## 情况4：包含可变的值类型

最后一种情况是混合类型：**包含可变引用类型的值类型**。这是最微妙的情况，但也许是最有价值的情况。它允许将值类型的简单编程模型与引用类型的效率优势结合在一起。

要查看失败的原因，请再次查看实例复制规则：

+ 复制混合类型的实例时，将直接分配其所有属性。
+ 但是，由于任何引用类型属性都是通过对副本的引用分配的，因此副本属性和原始属性的实例将引用同一共享实例。

实例及其副本互不相同，但是它们的值彼此依赖，因为这种结构共享的属性会影响它们的两个值。

一个示例和一个图表将最好地说明这一点。 返回到你的油漆店，假设你想使用一种类型来定义绘画项目的计划，该计划指定提供主要颜色的桶并指定点缀颜色：

``` Swift
struct PaintingPlan { 
    // a value type, containing ... 
    // a value type
    var accent = Color.white
    // a mutable reference type
    var bucket = Bucket(color: .blue)
}
```

你可能希望通过从绘画计划开始，然后对其进行修改，从而为艺术品定义计划。 由于PaintingPlan是一种结构（一种值类型），因此你可能希望通过分配一个新变量然后修改该变量来实现。

不幸的是，由于它是一个包含引用类型的结构，因此分配不会创建真正独立的副本。

在房屋计划中更改颜色时，在艺术品计划中更改颜色，因为它们共享相同的存储桶。

``` Swift
let artPlan = PaintingPlan()
let housePlan = artPlan
artPlan.bucket.color // => blue
// for house-painting only we fill the bucket with green paint housePlan.
bucket.color = Color.green
artPlan.bucket.color // => green. oops!
```

这是由于油漆桶实例的隐式结构共享：

![""](http://cdn.xuebaonline.com/sa-vr-stp3.png "")

由于这种结构上的共享，PaintingPlan是一种值类型，但缺少值语义。

### 写时复制来拯救

解决办法是什么？ 第一步在于认识到**值语义是相对于访问级别定义的**。 **值的语义取决于你可以对变量进行哪些更改，以及如何对其进行查看，这取决于设置器的访问级别和变量类型的变异函数**。 因此，类型可以为所有客户端代码（例如，可以访问内部或公共成员）提供值语义，同时不为可以访问其私有成员的代码提供值语义。

因此，在混合类型中保留值语义的技巧是定义类型，以使其用户永远无法看到突变对所包含的引用类型属性的影响。 本示例将可变引用类型设为私有，并提供一个控制读写的接口：

``` Swift
struct PaintingPlan { 
    // a value type, containing ... 
    // a value type
    var accent = Color.white
    // a private reference type, for "deep storage" 
    private var bucket = Bucket()
    // a pseudo-value type, using the deep storage
    var bucketColor: Color {
        get {
                bucket.color 
        }
        set {
                bucket = Bucket(color: newValue)
        }
    } 
}
```

为了能够访问私有成员的代码，此结构包含可变的引用类型属性存储桶，破坏了值的语义。但是对于具有内部访问权限或更高访问权限的客户端，类型的行为就像具有值语义的结构一样，具有两个属性accentColor和bucketColor。

读取bucketColor只是调用从私有引用类型属性存储桶读取的计算属性getter，该存储桶用作后备存储。苹果有时也将其称为间接存储或深度存储。分配给bucketColor会调用计算的属性设置器，该设置器旨在保留PaintingPlan值的独立性。每当用户修改bucketColor时，设置器都会创建一个新的间接存储实例，即一个新的Bucket来支持它。

效果是，分配值PaintingPlan不会像简单的值类型那样在分配时立即复制后备存储。实例将共享其后备存储一段时间。但是，每个实例似乎都始终拥有自己的后备存储，因为它会在需要时立即创建自己的唯一后备存储。

这种模式称为写时复制（COW），因为系统仅在你尝试写入变量时复制后备存储。

但是，这有什么意义呢？关键是性能。假设后备存储很大。当你仅从变量读取时，实例可以共享相同的后备存储，使用更少的存储并节省了复制它的计算成本。

但是，一旦你使用变量使实例变异（写入实例），系统便会执行复制后备存储的工作，以确保修改不会影响其他变量。这样可以最大程度地减少即时存储和计算成本，仅将它们推迟到需要时才使用。

如果后备存储库足够大，可以进行此优化，那么几乎可以肯定值得进行进一步的优化，并且对后备存储库进行就地突变（如果未在其他地方共享）。这比创建新商店并丢弃旧商店要便宜。

为此，你的值类型需要一种方法来判断它是否唯一地引用给定的后备存储。标准库函数isKnownUniquelyReferenced为此提供了相应的功能：

``` Swift
struct PaintingPlan { 
    // a value type, containing ... 
    // ... as above ...
    // a computed property facade over deep storage
    // with copy-on-write and in-place mutation when possible 
    var bucketColor: Color {
        get {
                bucket.color 
            }
        set {
            if isKnownUniquelyReferenced(&bucket) {
                bucket.color = bucketColor
            } else {
                bucket = Bucket(color: newValue)
            }
        } 
    }
}
```

Swift标准库广泛使用此技术。

实际上，许多Swift值类型都不是原始值类型，而是混合的类型，它们看起来像原始值类型，因为它们提供值语义，并依赖有效的COW实现来实现。 Swift语言本身依赖于COW，有时会推迟实例的复制，直到编译器可以推断出突变需要它为止。

### 侧边栏：属性包装器

从上面可以看到，写时复制模式是冗长的。 你需要为后备存储（存储桶），保留值语义（bucketColor）的计算属性以及在getter和setter中的棘手的写时复制逻辑本身定义私有的，存储的引用类型属性。 如果PaintingPlan包含数十个此类属性，则它将重复出现。

你可以使用属性包装器简化此过程，从而使你可以概括多种属性实现模式。 写时复制模式就是一个很好的例子。 使用CopyOnWriteColor属性包装器，可以使用以下简单代码替换上面的代码：

``` Swift
struct PaintingPlan {
    var accent = Color.white
    @CopyOnWriteColor var bucketColor = .blue 
}
```

这样可以轻松创建数十个写时复制属性。 它是如何工作的？
`@CopyOnWriteColor var bucketColor = .blue`行由编译器自动扩展为以下内容：

``` Swift
private var _bucketColor = CopyOnWriteColor(wrappedValue: .blue)
var bucketColor: Color {
    get { _bucketColor.wrappedValue }
    set { _bucketColor.wrappedValue = newValue } 
}
```

你可以看到它是如何复制我们原始版本的一部分。 有内部计算属性（bucketColor）和私有存储属性（_bucketColor）。 但是所有棘手的逻辑都去哪儿了？ 它位于专用的自定义属性包装器类型CopyOnWriteColor中。 这就是定义自定义@CopyOnWriteColor属性的内容。 这是_bucketColor的类型，它拥有实际的后备存储并实现逻辑这是它的定义：

``` Swift
@propertyWrapper
struct CopyOnWriteColor {
    init(wrappedValue: Color) {
        self.bucket = Bucket(color: wrappedValue) 
    }
        
    private var bucket: Bucket
    var wrappedValue: Color {
            get {
                bucket.color 
            }
            set {
                if isKnownUniquelyReferenced(&bucket) {
                    bucket.color = newValue 
                } else {
                    bucket = Bucket(color:newValue)
            }
        } 
    }
}
```

在PaintingPlan中，将.blue的初始值分配给bucketColor时，这实际上会初始化属性包装器CopyOnWriteColor，该包装器定义了存储桶中的真实后备存储。 而且，当你在PaintingPlan中访问bucketColor时，你会调用getter和setter来访问属性包装器的计算所得属性wrapdValue。 并依次访问该函数，调用你在CopyOnWriteColor中定义的计算属性，这些计算属性实现与原始实现相同的写时复制逻辑。

起初有点不透明，因为通过计算属性进行委派有两个级别，但是从根本上讲，这是普通的旧代码重用。 好处是你只需编写一次棘手的写时复制逻辑，并在每次使用custom属性时都引用它，因此你可以更轻松地编写复杂的绘画计划：

``` Swift
struct PaintingPlan {
    var accent = Color.white
    @CopyOnWriteColor var bucketColor = .blue 
    @CopyOnWriteColor var bucketColorForDoor = .blue 
    @CopyOnWriteColor var bucketColorForWalls = .blue // ...
}
```

属性包装程序可以是通用的，从而使它们更加可重用，因为你很快就会在挑战中进行探索。

## 值语义小贴士

总而言之，这是确定类型是否具有值语义或如何​​定义自己的类型的诀窍：

对于引用类型（类）：
+ 类型必须是不可变的，因此要求其所有属性都是常数，并且必须是具有值语义的类型。

对于值类型（结构或枚举）：

+ 像Int这样的原始值类型始终具有值语义。

+ 如果使用属性定义结构类型，则该结构的所有属性都具有值语义时将具有值语义。

+ 同样，如果你定义一个具有关联值的枚举类型，则如果其所有关联值都具有值语义，则该类型将具有值语义。

对于COW值类型-结构或枚举：

+ 选择“值语义访问级别”，即将公开的访问级别保留值语义的接口。

+ 记录所有可变的引用类型属性，因为这些属性会破坏自动值语义。将其访问级别设置为低于值语义级别。

+ 在值语义访问级别或更高级别定义所有的setter和mutating函数，以使它们从不实际修改这些引用类型属性的共享实例，而是将实例的副本分配给引用类型属性。

# 关键点

+ 值类型和引用类型的分配行为不同。值类型使用按副本分配；引用类型使用按引用分配。此行为描述了变量是复制还是引用分配给它的实例。

+ 这种分配行为不仅影响变量，还影响函数调用。

+ 值类型可帮助你使用值语义实现类型。如果分配给变量似乎创建了一个完全独立的实例，则该类型具有值语义。在这种情况下，影响变量值的唯一方法是通过变量本身，你可以简单地考虑变量，就好像实例和引用不存在一样。

+ 原始值类型和不可变引用类型自动具有值语义。包含引用类型的值类型（例如混合类型）只有通过这种方式进行设计，才具有值语义。例如，它们可能只共享不可变的属性，或者在它们发生突变时私下复制共享的组件。

+ 结构共享是指不同的实例引用有助于其价值的共同支持实例。由于多个实例可以依赖一个大型共享实例，因此可以节省存储空间。但是，如果一个实例可以修改共享后备实例，则它可以间接修改其他实例的值，以使不同的实例不完全独立，从而破坏了值的语义。

+ 写时复制是一种优化模式，其中类型依赖于结构共享，但也仅在其自身发生突变时才通过复制其后备实例来保留值的语义。这样可以在只读情况下提高引用类型的效率，同时在读写情况下可以减少实例复制的成本。

+ 如果你将引用类型定义为完全不可变的，则它们也具有值语义，这意味着它们在初始化后无法修改。为此，只要它们的所有存储属性都是只读的并且其自身具有值语义的类型就足够了。

