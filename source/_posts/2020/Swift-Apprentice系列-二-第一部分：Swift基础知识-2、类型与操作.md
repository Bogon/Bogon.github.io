---
title: 'Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作'
description: 'Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作'
permalink: 'Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作'
copyright: ture
keywords: 'iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,类型与操作'
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - 类型与操作
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 55833
date: 2020-05-11 20:55:24
---

既然你知道如何执行基本操作以及如何使用这些操作来处理数据，那么该是时候了解有关类型的更多信息了。 形式上，类型描述了一组值以及可以对它们执行的操作。 在本章中，你将学习如何处理不同的类型，包括用于表示文本的字符串。 你将学习有关如何在类型之间进行转换的知识，还将介绍类型推断，这使你作为程序员的生活变得更加简单。 最后，你将学习元组，该元组允许你创建由任意类型的多个值组成的自己的类型。

# **类型转换**

有时，你将使用一种格式的数据，并且需要将其转换为另一种格式。 尝试此操作的天真的方法是这样的：

``` Swift
 var integer: Int = 100
var decimal: Double = 12.5 
integer = decimal
```

<!-- more -->

如果你尝试执行此操作并在第三行吐出错误，Swift将会抱怨：

``` Swift
 Cannot assign value of type 'Double' to type 'Int'
```

某些编程语言没有那么严格，它们会默默地执行这样的转换。 经验表明，这种无声的自动转换是软件错误的来源，通常会损害性能。 Swift不允许你将一种类型的值分配给另一种，并避免了这些问题。

请记住，计算机依靠我们的程序员来告诉他们该怎么做。 在Swift中，这包括显式地进行类型转换。 如果你希望进行转换，则必须这样说！

除了简单地分配外，你还需要明确地说要转换类型。 你可以这样做：

``` Swift
integer = Int(decimal)
```

现在，第三行的任务明确地告诉`Swift`你想要从原始类型`Double`转换为新类型`Int`。

>注意：在这种情况下，将十进制值分配给整数会导致精度下降：整数变量最终以值12而不是12.5结束。 这就是为什么重要的是要明确。 Swift希望确保你知道自己在做什么，并且通过执行类型转换可能最终会丢失数据。

# **混合类型的运算符**

到目前为止，你只看到运算符对整数或双精度数独立起作用。 但是，如果你有一个整数要乘以双倍数怎么办？

你可能认为你可以这样做：

``` Swift
let hourlyRate: Double = 19.5
let hoursWorked: Int = 10
let totalCost: Double = hourlyRate * hoursWorked
```

如果尝试这样做，则会在最后一行出现错误：

``` Swift
cannot be applied to operands of type 'Double' and 'Int'
```

这是因为在`Swift`中，你无法将`*运算符`应用于混合类型。 此规则也适用于其他算术运算符。 乍一看似乎令人惊讶，但是`Swift`很有帮助。

`Swift`会要求你明确要`Int`乘以`Double`时的含义，因为结果只能是一种类型。 你是否希望结果为Int，在执行乘法运算之前将Double转换为Int？ 还是希望结果为Double，在执行乘法之前将Int转换为Double？

在此示例中，你希望结果为`Double`。 你不需要`Int`，因为在这种情况下，`Swift`会将`hourlyRate`常量转换为`Int`以执行乘法，将其舍入到`19`并失去`Double`的精度。

你需要告诉`Swift`，你希望它将`hoursWorked`常数视为`Double`，如下所示：

``` Swift
let totalCost: Double = hourlyRate * Double(hoursWorked)
```

现在，当Swift将它们相乘时，每个操作数都将是Double，因此totalCost也是Double。

# **类型推断**

到目前为止，在本书中，每次你看到一个变量或常量声明时，都伴随有类型注释。 你可能会问自己，为什么需要麻烦编写`：Int`和`：Double`，因为赋值的右侧已经是`Int`或`Double`。 可以肯定的是，这是多余的； 你的疯狂聪明的大脑无需太多工作就能看到这一点。

事实证明，`Swift编译器`也可以推断出这一点。 你不需要一直告诉它的类型，它可以自己弄清楚。 这是通过称为类型推断的过程完成的。 并非所有的编程语言都具有这种功能，但是`Swift`却具有这种功能，这是`Swift`语言功能的关键组成部分。

因此，你可以在大多数看到该类型的地方简单地放置该类型。 例如，考虑以下常量声明：

``` Swift
let typeInferredInt = 42
```

有时检查变量或常量的推断类型很有用。 你可以在操场上通过按住`Option键`并单击变量或常量的名称来执行此操作。 Xcode将显示如下所示的弹出框：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp1.png "")

Xcode通过给你声明没有类型推断时必须使用的声明来告诉你推断的类型。 在这种情况下，类型为Int。

它也适用于其他类型：

``` Swift
let typeInferredDouble = 3.14159
```

按住Option键单击会显示以下内容：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp2.png "")

由此可见，类型推断并不是魔术。 Swift只是在很容易地做你的大脑。 不使用类型推断的编程语言常常会感到冗长，因为每次声明变量或常量时都需要指定通常显而易见的类型。

> 注意：在后面的章节中，你将学习一些更复杂的类型，有时Swift不能推断出这些类型。 不过，这种情况很少见，在本书的大多数代码示例中，你都会看到类型推断，除非我们想为你突出显示类型。

有时，你想要定义一个常量或变量，并确保它是某种类型，即使你要为其分配的是另一种类型。 前面已经了解了如何从一种类型转换为另一种类型。 例如，考虑以下内容：

``` Swift
let wantADouble = 3
```

在这里，Swift会将`wantADouble`的类型推断为`Int`。 但是，如果你要`Double`怎么办？

你可以做的第一件事是：

``` Swift
let actuallyDouble = Double(3)
```

就像你之前使用类型转换看到的一样。

另一种选择是根本不使用类型推断，并执行以下操作：

``` Swift
let actuallyDouble: Double = 3
```

第三种选择是这样的：

``` Swift
let actuallyDouble = 3 as Double
```

就像以前一样，它使用了一个你从未见过的新关键字。 它还执行类型转换，你将在整本书中看到这一点。

>注意：文字值（例如3）没有类型。 只有在表达式中使用它们或将它们分配给常量或变量时，Swift才能为其推断类型。\
\
不包含小数点的文字数字值既可以用作Int也可以用作Double。 这就是为什么你可以将值3实际分配给constantDouble的原因。\
\
确实包含小数点的文字数字值不能为整数。 这意味着如果我们从以下内容开始，就可以避免整个讨论：
\
let wantADouble = 3.0\
抱歉! ：]

# **Strings**

数字是编程中必不可少的，但数字并不是你需要在应用中使用的唯一数据类型。 文本也是一种非常常见的数据类型，例如人们的姓名，住所，甚至是书中的单词。 所有这些都是应用程序可能需要处理的文本示例。

大多数计算机编程语言都以称为字符串的数据类型存储文本。 本章向你介绍了字符串，首先向你介绍了字符串的概念，然后向你展示了如何在Swift中使用它们。

## ***计算机如何表示字符串***

计算机将字符串视为单个字符的集合。 在本书的第1章中，你了解了数字是CPU的语言，并且所有语言（无论使用哪种编程语言）都可以简化为原始数字。 字符串没有什么不同！

这听起来可能很奇怪。 字符如何成为数字？ 从根本上说，计算机需要能够将字符翻译成计算机自己的语言，并且可以通过为每个字符分配不同的数字来实现。 这形成了从字符到数字的双向映射，称为字符集。

当你按下键盘上的字符键时，实际上是在向计算机传达字符号。 你的文字处理器应用程序将该数字转换为字符图片，最后将图片呈现给你。

## ***Unicode***

孤立地，计算机可以自由选择喜欢的任何字符集映射。 如果计算机希望字母a等于数字10，那就也可以。 但是，当计算机开始互相交谈时，它们需要使用公共字符集。

如果两台计算机使用不同的字符集，则当一台计算机将字符串传输到另一台计算机时，他们最终会认为字符串包含不同的字符。

这些年来，已经有几种标准，但是最现代的标准是Unicode。 它定义了当今几乎所有计算机都使用的字符集映射。

>注意：你可以在其官方网站http：// unicode.org/上阅读有关Unicode的更多信息。

例如，考虑`cafe`这个词。 `Unicode`标准告诉我们，该单词的字母应映射为数字，如下所示：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp3.png "")

与每个字符关联的数字称为代码点。 因此，在上面的示例中，c使用代码点99，a使用代码点97，依此类推。

当然，Unicode不仅适用于英语中使用的简单拉丁字符，例如c，a，f和e。 它还使你可以映射来自世界各地语言的字符。 你可能已经知道，caf这个词源于法语，它被写成café。 Unicode映射这些字符的方式如下：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp4.png "")

这是一个使用汉字的示例（根据Google翻译，这表示“计算机编程”）：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp5.png "")

你可能听说过表情符号，它们是可以在文字中使用的小图片。 这些图片实际上只是普通字符，并且也通过Unicode映射。 例如：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp6.png "")

这只是两个字符。 这些代码点的数量非常大，但每个代码点仍然仅仅是一个代码点。 计算机认为这些与其他两个字符没有区别。

>注意：“表情符号”一词来自日语，其中“ e”表示图片，“ moji”表示字符。

# **Swift中的字符串**

像任何好的编程语言一样，`Swift`可以直接使用字符和字符串。 它分别通过数据类型`Character`和`String`进行操作。 在本部分中，你将了解这些数据类型以及如何使用它们。

## ***Characters and strings***

字符数据类型可以存储一个字符。 例如：

``` Swift
let characterA: Character = "a"
```

这将存储字符a。 它可以容纳任何字符-甚至是表情符号：

``` Swift
let characterDog: Character = "! "
```

但是，此数据类型被设计为仅包含单个字符。 另一方面，String数据类型存储多个字符。 例如：

``` Swift
let stringDog: String = "Dog"
```

就这么简单！ 此表达式的右侧是所谓的`字符串字面量`; 它是表示字符串的`Swift`语法。

当然，这里也适用类型推断。 如果你在上述声明中删除类型，那么Swift会做正确的事情，并将stringDog设为String常量：

``` Swift
let stringDog = "Dog" // Inferred to be of type String
```

>注意：Swift中没有字符文字。 一个字符只是一个长度为一的字符串。 但是，Swift会将任何字符串文字的类型推断为String，因此，如果要使用Character，则必须使类型明确。

## ***Concatenation***

除了创建简单的字符串，你还可以做更多的事情。 有时你需要操纵一个字符串，而一种常见的操作方式是将其与另一个字符串组合。

在Swift中，你可以通过一种非常简单的方式来执行此操作：通过使用加法运算符。 正如可以添加数字一样，可以添加字符串：

``` Swift
 var message = "Hello" + " my name is "
let name = "Matt"
message += name // "Hello my name is Matt"
```

你需要将message声明为变量而不是常量，因为你要对其进行修改。 你可以像第一行一样将字符串文字加在一起，也可以像最后一行那样将字符串变量或常量加在一起。

也可以在字符串中添加字符。 但是，Swift对类型的严格性意味着这样做时必须明确，就像当一个数字是Int而另一个是Double时，在处理数字时必须一样。

要将字符添加到字符串，请执行以下操作：

``` Swift
 let exclamationMark: Character = "!"
message += String(exclamationMark) // "Hello my name is Matt!"
```

使用此代码，你可以在将字符添加到消息之前将其显式转换为字符串。


## ***Interpolation***

你还可以使用插值来构建字符串，这是一种特殊的`Swift语法`，可让你以易于阅读的方式构建字符串：

``` Swift
 message = "Hello my name is \(name)!" // "Hello my name is
Matt!"
```

我相信你会同意，这比上一节中的示例更具可读性。 它是字符串文字语法的扩展，在其中你可以将字符串的某些部分替换为其他值。 你将要插入的值括在括号中，并带有反斜杠。

此语法的工作方式与从其他数据类型（例如数字）构建字符串的方式相同：

``` Swift
 let oneThird = 1.0 / 3.0
let oneThirdLongString = "One third is \(oneThird) as a decimal."
```

在此，你可以在插值中使用Double。 在此代码的结尾，你的`oneThirdLongString`常量将包含以下内容：

``` Swift
One third is 0.3333333333333333 as a decimal.
```

当然，实际上是需要无限个字符才能将三分之一表示为十进制，因为它是重复的十进制。 使用Double进行字符串插值无法使你控制结果字符串的精度。 这是使用字符串插值法的不幸后果：使用简单，但无法自定义输出。

## ***多行字符串***

Swift有一种巧妙的方式来表达包含多行的字符串。 当你需要在代码中放入很长的字符串时，这可能会非常有用。

你可以这样做：

``` Swift
let bigString = """
    You can have a string 
    that contains multiple lines
    by
    doing this.
"""
print(bigString)
```

三个双引号表示这是一个多行字符串。 方便地，第一行和最后的新行不会成为字符串的一部分。 由于你不必在字符串的同一行上将三个双引号引起来，因此它变得更加灵活。
在上述情况下，它将打印以下内容：

``` Swift
You can have a string
that contains multiple
lines
by
doing this.
```

请注意，多行字符串文字中的两个空格的边距已从结果中去除。 Swift会查看最后三个双引号行中前导空格的数量。 以此为基准，Swift要求其上方的所有行至少都具有足够的空间，以便可以将其从每行中删除。 这使你可以使用漂亮的缩进来格式化代码，而不会影响输出。

# **元组**

有时，数据成对或三元组出现。 一个示例是2D网格上的一对（x，y）坐标。 类似地，在3D网格上的一组坐标由x值，y值和z值组成。 在Swift中，你可以通过使用元组以非常简单的方式表示此类相关数据。

**元组是一种表示由多个类型的值组成的数据的类型**。 你可以根据需要在元组中包含任意多个值。 例如，你可以定义一对2D坐标，其中每个轴值都是整数，如下所示：

``` Swift
let coordinates: (Int, Int) = (2, 3)
```

坐标类型为（Int，Int）。 元组中值的类型（在本例中为Int）用逗号分隔并用括号括起来。 创建元组的代码几乎相同，每个值都用逗号分隔并用括号括起来。

类型推断也可以推断元组类型：

``` Swift
let coordinates = (2, 3)
```

你可以类似地创建Double值的元组，如下所示：

``` Swift
 let coordinatesDoubles = (2.1, 3.5)
// Inferred to be of type (Double, Double)
```

或者，你可以混合并匹配组成元组的类型，如下所示：

``` Swift
 let coordinatesMixed = (2.1, 3)
// Inferred to be of type (Double, Int)
```

以下是在元组中访问数据的方法：

``` Swift
let x1 = coordinates.0 
let y1 = coordinates.1
```

你可以按元素在元组中的位置（从零开始）进行引用。 因此，在此示例中，x1等于2，y1等于3。

>注意：从零开始是计算机编程中的一种常见做法，称为零索引。 

在前面的示例中，可能并不立即显而易见，索引0处的第一个值是x坐标，索引2处的第二个值是y坐标。 这是另一个说明，为什么始终以避免混淆的方式命名变量很重要。

幸运的是，Swift允许你命名元组的各个部分，并且你可以清楚地知道每个部分代表什么。 例如：

``` Swift
let coordinatesNamed = (x: 2, y: 3)
// Inferred to be of type (x: Int, y: Int)
```

在这里，代码注释了`interfacesNamed`的值，以包含元组每个部分的标签。

然后，当你需要访问元组的每个部分时，可以按其名称访问它：

``` Swift
let x2 = coordinatesNamed.x 
let y2 = coordinatesNamed.y
```

这更加清晰和易于理解。 通常，命名元组的组成部分很有帮助。

如果要同时访问元组的多个部分，如上面的示例，则还可以使用简写语法来简化它：

``` Swift
let coordinates3D = (x: 2, y: 3, z: 1)
let (x3, y3, z3) = coordinates3D
```

这将声明三个新常量x3，y3和z3，并依次将元组的每个部分分配给它们。 该代码等效于以下代码：

``` Swift
let coordinates3D = (x: 2, y: 3, z: 1) 
let x3 = coordinates3D.x
let y3 = coordinates3D.y
let z3 = coordinates3D.z
```

如果要忽略元组的某个元素，可以用下划线替换声明的相应部分。 例如，如果你正在执行2D计算，但想忽略坐标3D的z坐标，则可以编写以下内容：

``` Swift
let (x4, y4, _) = coordinates3D
```

这行代码仅声明x4和y4。 _很特殊，仅表示你现在忽略此部分。

>注意：你会发现你可以在整个Swift中使用下划线（也称为通配符运算符）来忽略值。

# **很多数字类型**

你一直使用`Int`表示整数。在大多数现代硬件上，Int用64位表示，而在较旧的或更受资源限制的系统上用32位表示。 `Swift`提供了更多使用不同存储量的数字类型。对于整数，可以使用显式带符号的类型`Int8`，`Int16`，`Int32`，`Int64`。这些类型分别消耗1、2、4和8个字节的存储空间。这些类型中的每一种都使用1位来表示符号。

如果只处理非负值，则可以使用一组显式的无符号类型。这些包括`UIn​​t8`，`UInt16`，`UInt32`和`UInt64`。虽然你不能用这些表示负值，但额外的1位使你可以表示比带符号的对应值大两倍的值。

这是不同整数类型及其以字节为单位的存储大小的摘要。大多数时候，你只想使用一个`Int`。

如果你的代码正在与使用这些更精确大小之一的另一软件进行交互，或者你需要针对存储大小进行优化，则这些功能将非常有用。

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp7.png "")

你一直使用Double来代表小数。 Swift提供的Float类型具有比Double小的范围和精度，但需要一半的存储空间。 现代硬件已经针对Double进行了优化，因此除非有充分的理由使用Float，否则它应该是你的首选。

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp8.png "")


大多数时候，你只会使用Int和Double来表示数字，但是有时你可能会偶尔遇到其他类型。

例如，假设你需要将一个Int16与一个UInt8和一个Int32加在一起。 你可以这样做：

``` Swift
let a: Int16 = 12
let b: UInt8 = 255
let c: Int32 = -100000
let answer = Int(a) + Int(b) + Int(c)  // answer is an Int
```

# **类型别名**

Swift的一个有用功能是能够创建自己的类型，该类型实际上是另一种类型的别名。 这意味着你可以做的是为你的类型指定一个更有用的名称，以描述其含义，但实际上，它只是另一种类型。 这称为类型别名。

创建类型别名很简单，如下所示：

``` Swift
typealias Animal = String
```

这将创建一个称为动物的新类型。 当编译器看到此类型时，它只是将其视为String。 因此，你可以执行以下操作：

``` Swift
let myPet: Animal = "Dog"
```

现在这似乎不太有用，但是有时类型可能会变得复杂，并且为它们创建别名可以为它们提供更简单，更明确的名称。 例如，你可以执行以下操作：

``` Swift
typealias Coordinates = (Int, Int)
let xy: Coordinates = (2, 4)
```
这将创建一个称为Coordinates的类型，该类型是一个包含两个Int的元组，然后使用它。

随着你看到越来越多的Swift，你将看到类型别名如何变得非常强大并简化代码。

# **Protocols**

即使有十二种不同的数字类型，它们也很容易理解和使用，因为它们都大致支持相同的运算。 换句话说，一旦你知道如何使用Int，就可以直接使用任何一种口味。

Swift真正的最大特点之一是它使用所谓的**协议将类型通用性**的思想形式化。 通过学习协议，你可以立即了解使用该协议的整个类型家族的工作方式。

在整数的情况下，功能可以如下所示：

![computer的工作方式](http://cdn.xuebaonline.com/sasb-to-stp9.png "")

箭头表示符合（有时称为通过）协议。 虽然此图未显示整数类型遵循的所有协议，但它使你可以了解事物的组织方式。

Swift是第一种基于协议的语言。 当你开始理解作为类型基础的协议时，你可以通过其他语言无法实现的方式来利用系统。

到本书结尾，你将熟悉现有协议，甚至创建自己的协议。



