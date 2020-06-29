---
title: 'Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings'
description: 'Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings'
permalink: 'Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings'
copyright: ture
date: 2020-05-13 08:47:09
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Strings]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

到目前为止，你已经简要了解了String类型提供的用于表示文本的类型。 文本是一种非常常见的数据类型：人们的名字； 他们的地址； 一本书的话。 所有这些都是应用程序可能需要处理的文本示例。 值得深入了解String的工作原理和功能。

本章通常会加深你对字符串的了解，尤其是在Swift中字符串的工作方式。 Swift是在正确处理Unicode字符的同时保持最大可预测性能的几种语言之一。

# **字符串作为集合**

在第2章“类型和操作”中，你学习了什么是字符串以及什么字符集和代码点。 概括地说，它们定义了映射数字到它所代表的字符。 现在是时候深入了解String类型了。

将字符串概念化为字符集合非常容易。 因为字符串是集合，所以你可以执行以下操作：

``` Swift
let string = "Matt"
for char in string {
  print(char)
}
```

<!-- more -->

这将分别打印出Matt的每个字符。 简单吧？ 你还可以使用其他收集操作，例如：

``` Swift
let stringLength = string.count
```

这将为你提供字符串的长度。

现在假设你要获取字符串中的第四个字符。 你可能会想做这样的事情：

``` Swift
let fourthChar = string[3]
```

但是，如果执行此操作，则会收到以下错误消息：

``` Swift
'subscript' is unavailable: cannot subscript String with an Int,
see the documentation comment for discussion
```

这是为什么？ 简短的答案是因为字符没有固定大小，因此无法像数组一样进行访问。 为什么不？ 现在该通过介绍一个字素簇来进一步绕开字符串的工作方式了。

# **字素簇**

如你所知，字符串由Unicode字符集合组成。 到目前为止，你已经考虑到一个代码点正好等于一个字符，反之亦然。 但是，术语“字符”是相当宽松的。

可能令人惊讶，但是有两种方法可以表示某些字符。 例如，咖啡馆中的é，它是带有重音符号的e。 你可以使用一个或两个字符来表示此字符。

代表此字符的单个字符是代码点233。两个字符的情况是一个单独的e，后跟一个尖音组合字符，这是一种特殊字符，可修改前一个字符。

因此，你可以通过以下两种方式之一用重音来表示e：

![playground](https://cdn.xuebaonline.com/sasb-s-stp1.png "")

第二个图中的这两个字符的组合形成了由Unicode标准定义的所谓的字素簇。 当想到一个字符时，实际上可能是在想到一个字素簇。 字素簇由Swift类型的Character表示。

组合字符的另一个示例是用于更改某些表情符号肤色的特殊字符。

![playground](https://cdn.xuebaonline.com/sasb-s-stp2.png "")

在这里，竖起大拇指的表情符号后跟一个肤色组合字符。 在支持它的平台（包括iOS和macOS）上，渲染的表情符号是一个单竖起大拇指的角色，并应用了肤色。

现在，让我们看看当字符串用作集合时，这对字符串意味着什么。 考虑以下代码：

``` Swift
let cafeNormal = "café"
let cafeCombining = "cafe\u{0301}"
cafeNormal.count // 4 
cafeCombining.count // 4
```

这两个计数都等于4，因为Swift将字符串视为字素簇的集合。 你可能还会注意到，评估字符串的长度需要线性时间，因为你需要遍历所有字符来确定有多少个字素簇。 仅凭外观就无法知道字符串在内存中有多大。

>注意：在上面的代码中，尖括号组合字符是使用Unicode速记写的，即\ u，后跟用大括号括起来的十六进制代码点。 你可以使用此速记来编写任何Unicode字符。 我必须在这里使用它作为组合字符，因为无法在键盘上键入该字符！

但是，你可以通过字符串上的unicodeScalars视图访问字符串中的基础Unicode代码点。 此视图本身也是一个集合。 因此，你可以执行以下操作：

``` Swift
cafeNormal.unicodeScalars.count // 4 
cafeCombining.unicodeScalars.count // 5
```


在这种情况下，你会看到预期的计数差异。 

你可以像下面这样遍历此Unicode标量视图：

``` Swift
for codePoint in cafeCombining.unicodeScalars {
    print(codePoint.value) 
}
```

这将按预期打印以下数字列表：

``` Swift
99
97
102
101
769
```

## ***索引字符串***

如你先前所见，索引到字符串以获取某个字符（err，我的意思是字素簇）并不像使用整数下标那样简单。 Swift希望你知道引擎盖下发生了什么，因此它需要更冗长的语法。

你必须对特定的字符串索引类型进行操作才能索引到字符串。 例如，你获得代表字符串开头的索引，如下所示：

``` Swift
let firstIndex = cafeCombining.startIndex
```

如果你在操场上单击firstIndex，你会注意到它的类型为String.Index，而不是整数。

然后，你可以使用该值来获取该索引处的Character（字素簇），如下所示：

``` Swift
let firstChar = cafeCombining[firstIndex]
```

在这种情况下，firstChar当然将为c。 该值的类型是Character其中是一个字素簇。

同样，你可以像这样获得最后一个字素簇：

``` Swift
let lastIndex = cafeCombining.endIndex 
let lastChar = cafeCombining[lastIndex]
```

但是，如果这样做，则会在控制台上出现致命错误（以及代码中的EXC_BAD_INSTRUCTION错误）：

``` Swift
Fatal error: String index is out of bounds
```

发生此错误的原因是endIndex实际上是字符串末尾的1。 你需要这样做以获得最后一个字符：

``` Swift
let lastIndex = cafeCombining.index(before: cafeCombining.endIndex)
let lastChar = cafeCombining[lastIndex]
```

在这里，你要在结束索引之前获取索引，然后在该索引处获取字符。 另外，你可以像这样偏移第一个字符：

``` Swift
let fourthIndex = cafeCombining.index(cafeCombining.startIndex, offsetBy: 3)
let fourthChar = cafeCombining[fourthIndex]
```

在这种情况下，fourChar是预期的。

但是，你知道，在这种情况下，é实际上是由多个代码点组成的。 你可以通过unicodeScalars视图，以与在String上相同的方式在Character类型上访问这些代码点。 因此，你可以执行以下操作：

``` Swift
fourthChar.unicodeScalars.count // 2 
fourthChar.unicodeScalars.forEach { codePoint in
    print(codePoint.value) 
}
```

这次你使用的是forEach函数，以遍历Unicode标量视图。 计数为2，并且按预期方式，循环输出：

``` Swift
101 
769
```

## ***结合字符相等***

组合字符会使字符串的相等性更加棘手。 例如，考虑使用单个é字符和组合字符一次编写的café一词，如下所示：

![playground](https://cdn.xuebaonline.com/sasb-s-stp3.png "")

这两个字符串在逻辑上当然是相等的。 当它们在屏幕上打印时，它们使用相同的标志符号，并且外观完全相同。 但是它们以不同的方式表示在计算机内部。 许多编程语言会认为这些字符串不相等，因为这些语言通过将代码点一一比较来工作。 Swift认为默认情况下这些字符串相等。 让我们看看实际情况。

``` Swift
let equal = cafeNormal == cafeCombining
```

在这种情况下，equal是正确的，因为两个字符串在逻辑上是相同的。

**Swift中的字符串比较使用一种称为规范化的技术。在检查相等性之前，Swift会规范化两个字符串，这意味着它们将转换为使用相同的特殊字符表示形式**。

只要将两个字符串都转换为相同的样式，Swift进行规范化的方式就无关紧要-使用单个字符还是使用组合字符。 规范化完成后，Swift可以比较各个字符以检查是否相等。

考虑到某个字符串中有多少个字符，相同的规范化也起作用。你在前面看到过，使用单个é字符的café和使用e加组合重音符的café的长度相同。

## ***字符串作为双向集合***

有时你想反转一个字符串。 通常这样可以使你向后迭代。 幸运的是，Swift通过一种名为reversed()的方法，拥有一种相当简单的方式来做到这一点：

``` Swift
let name = "Matt"
let backwardsName = name.reversed()
```

但是backwardsName的类型是什么？ 如果你说的是String，那你就错了。 它实际上是一个`ReversedCollection<String>`。 这是Swift做出的一个相当聪明的优化。 它不是一个具体的String，而是一个反向集合。 可以将其视为所有集合的精简包装，使你可以像反过来使用集合一样，而不会导致额外的内存使用。

然后，你可以像使用任何其他字符串一样访问向后字符串中的每个Character，如下所示：

``` Swift
let secondCharIndex = backwardsName.index(backwardsName.startIndex, offsetBy: 1)
let secondChar = backwardsName[secondCharIndex] // "t"
```

但是，如果你实际上想要一个字符串怎么办？ 好吧，你可以通过从反向集合初始化String来做到这一点，如下所示：

``` Swift
let backwardsNameString = String(backwardsName)
```

这将从反转的集合中创建一个新的String。 但是，当你这样做时，最终将使用其自己的内存存储对原始字符串进行反向复制。 留在反向集合域中可以节省内存空间，如果你不需要整个反向字符串，也可以这样做。

# **原始字符串**

当你要避免特殊字符或字符串插值时，原始字符串很有用。 相反，你输入的完整字符串将成为字符串。 为了说明这一点，请考虑以下原始字符串：

``` Swift
 let raw1 = #"Raw "No Escaping" \(no interpolation!). Use all the \ you want!"#
print(raw1)
```

要表示原始字符串，请将字符串括在＃符号中。 此代码打印：

``` Swift
Raw "No Escaping" \(no interpolation!). Use all the \ you want!
```

如果你不使用＃符号，则此字符串将尝试使用插值并且不会编译，因为“没有插值！” 无效的Swift。 如果要在代码中包含＃，也可以这样做。 你可以使用任意数量的＃符号，只要它们的开始和结束都匹配即可，如下所示：

``` Swift
let raw2 = ##"Aren’t we "# clever"## print(raw2)
```

打印：

``` Swift
Aren’t we "# clever
```

如果要对原始字符串使用插值怎么办。 你能做到吗？

``` Swift
let can = "can do that too"
let raw3 = #"Yes we \#(can)!"#
print(raw3)
```

打印：

``` Swift
Yes we can do that too!
```

Swift团队似乎已经想到了带有原始字符串的所有内容。

## ***Substrings***

操纵字符串时，你经常需要做的另一件事是生成子字符串。 也就是说，将字符串的一部分拉出自己的值。 这可以在Swift中使用带有下标范围的下标来完成。

例如，考虑以下代码：

``` Swift
let fullName = "Matt Galloway"
let spaceIndex = fullName.firstIndex(of: " ")!
let firstName = fullName[fullName.startIndex..<spaceIndex] // "Matt"
```

这段代码找到代表第一个空格的索引（这里使用一个力解开，因为你知道存在）。 然后，它使用范围来查找起始索引和空间索引（不包括空间）之间的字素簇。

现在是时候介绍一种你从未见过的新型范围：开放式范围。 这种类型的范围仅使用一个索引，并假定另一个索引是集合的开始或结束。

最后一行代码可以通过使用开放式范围来重写：

``` Swift
let firstName = fullName[..<spaceIndex] // "Matt"
```

这次我们省略了fullName.startIndex，Swift将推断出这就是你的意思。

同样，你也可以使用单边范围从某个索引处开始，然后到达集合的末尾，如下所示：

``` Swift
let lastName = fullName[fullName.index(after: spaceIndex)...] // "Galloway"
```

用子字符串指出一些有趣的事情。 如果查看它们的类型，那么你将看到它们的类型为String.`SubSequence而不是String`。 此**String.SubSequence实际上只是Substring的类型别名**，这意味着Substring是实际的类型，而String.SubSequence是别名。

就像使用反向字符串一样，你可以通过执行以下操作将此子字符串强制为字符串：

``` Swift
let lastNameString = String(lastName)
```

这种额外的Substring类型的原因是一个狡猾的优化。子字符串与从其切片的父字符串共享存储。这意味着在分割字符串的过程中，不会占用额外的内存。然后，当你希望将子字符串作为字符串时，可以显式创建一个新字符串，并将内存复制到该新字符串的新缓冲区中。

Swift的设计人员可能默认情况下会执行此复制行为。但是，通过使用单独的Substring类型，Swift可以非常明确地说明正在发生的事情。好消息是String和Substring几乎共享所有相同的功能。直到你将Substring返回或传递给另一个需要String的函数之前，你甚至可能都不知道正在使用哪种类型。在这种情况下，你可以简单地从子字符串中显式初始化一个新的字符串。

希望很明显，Swift对字符串很自以为是，并且在实现字符串方面非常谨慎。携带是一门重要的知识，因为琴弦是复杂的野兽并且经常使用。正确使用API​​很重要-这是一种轻描淡写的做法。 ：]

## ***字符属性***

你在本章前面遇到了字符类型。 此类型有一些相当有趣的属性，可让你自省相关字符并了解其语义。
让我们看一些属性。

首先是简单地找出该字符是否属于ASCII字符集。 你可以这样实现：

``` Swift
let singleCharacter: Character = "x" 
singleCharacter.isASCII
```

>注意：ASCII代表美国信息交换标准代码。 它是固定宽度的7位代码，用于表示Bell Labs在1960年代开发的字符串。 由于其历史和重要性，因此将标准的8位Unicode编码（UTF-8）创建为ASCII的超集。 你将在本章后面了解有关UTF-8的更多信息。

在这种情况下，结果为true，因为“ x”确实在ASCII字符集中。 但是，如果你对诸如“＆”（即“ party face”表情符号）之类的东西执行此操作，那么你将得到错误的结果。

接下来是检查是否有空格。 这很有用，因为空白在诸如编程语言之类的东西中经常具有含义。

你可以这样实现：

``` Swift
let space: Character = " " 
space.isWhitespace
```

同样，这里的结果将是正确的。

接下来是检查某物是否为十六进制数字。 如果你要解析某些文本并想知道某项是否为有效的十六进制，这将很有用。 你可以这样实现：

``` Swift
let hexDigit: Character = "d" 
hexDigit.isHexDigit
```

在这种情况下，结果为true，但是如果将其更改为选中“ s”，则结果为false。

最后，一个相当强大的属性是能够将字符转换为其数值。 听起来很简单，例如将字符“ 5”转换为数字5。但是，它也适用于非拉丁字符。 例如：

``` Swift
let thaiNine: Character = "๙" 
thaiNine.wholeNumberValue
```

在这种情况下，结果为9，因为这是数字9的泰语字符。 整齐！ ：]

这只是在刮擦Character属性的表面。 这里有太多的事情要经过，但是你可以在Swift的发展提案中阅读更多内容，该提案增加了这些内容。

# **Encoding**

到目前为止，你已经了解了什么是字符串，并探索了如何使用它们，但是还没有涉及字符串的存储或编码方式。

字符串由Unicode代码点的集合组成。这些代码点的范围是数字0到1114111（或十六进制的0x10FFFF）。这意味着，表示一个代码点所需的最大位数为21。

但是，如果你只使用低代码点，例如你的文本仅包含拉丁字符，那么每个代码点仅使用8位就可以摆脱困境。

大多数编程语言中的数字类型具有可寻址的2的幂的大小，例如8位，16位和32位。这是因为计算机由数十亿个关闭或打开的晶体管组成；他们只是喜欢2的幂！

在选择如何存储字符串时，可以选择以32位类型（如UInt32）存储每个单独的代码点。因此，你的String类型将由[UInt32]（UInt32数组）支持。这些UInt32中的每一个都是所谓的代码单元。但是，你会浪费空间，因为并不需要所有这些位，尤其是在字符串仅使用低代码点的情况下。

这种存储字符串的方式称为字符串的编码。上面描述的此特定方案称为UTF-32。但是，由于它的内存使用效率很低，因此很少使用。

## ***UTF-8***

一种更常见的方案称为UTF-8。而是使用8位代码单元。 UTF-8受欢迎的原因之一是，它与古老的纯英语7位ASCII编码完全兼容。但是，如何存储需要8位以上的代码点呢？这就是编码的魔力所在。

如果代码点最多需要7位，则它仅由一个代码单元表示，并且与ASCII相同。但是对于7位以上的代码点，一种方案起作用了，该方案使用最多4个代码单元来表示代码点。

对于8到11位的代码点，使用2个代码单元。第一个代码单元的前3位为110。其余5位为代码点的前5位。第二个代码单元的起始2位为10。其余6位为代码点的其余6位。

例如，代码点0x00BD表示1⁄2字符。二进制为10111101，使用8位。在UTF-8中，这将包含2个代码单元11000010和10111101。

为了说明这一点，请考虑下图：

![playground](https://cdn.xuebaonline.com/sasb-s-stp4.png "")

当然，也支持高于11位的代码点。 根据以下方案，12至16位代码点使用3个UTF-8代码单元，而17至21位代码点使用4个UTF-8代码单元：

![playground](https://cdn.xuebaonline.com/sasb-s-stp5.png "")

每个x替换为代码点中的位。

在Swift中，你可以通过utf8视图访问UTF-8字符串编码。 例如，考虑以下代码：

``` Swift
let char = "\u{00bd}" 
for i in char.utf8 {
    print(i) 
}
```

utf8视图是一个集合，就像unicodeScalars视图一样。 它的值是构成字符串的UTF-8代码单元。 在这种情况下，它是一个字符，即我们上面讨论的那个字符。

上面的代码将打印以下内容：

``` Swift
194 
189
```

如果你拔出计算器（或具有出色的心理算术思维），则可以按预期验证它们分别是11000010和10111101！

现在考虑一个更复杂的示例，你将在本节的稍后部分再次参考。 采取以下字符串：

``` Swift
+1⁄2⇨'
```

并遍历它包含的UTF-8代码单元：

``` Swift
let characters = "+\u{00bd}\u{21e8}\u{1f643}" 
for i in characters.utf8 {
    print("\(i) : \(String(i, radix: 2))")
}
```

这次，print语句将打印出十进制数和二进制数。 它打印以下内容，并在拆分的字素簇中添加换行符：

``` Swift
43 : 101011

194 : 11000010
189 : 10111101

226 : 11100010
135 : 10000111
168 : 10101000

240 : 11110000
159 : 10011111
153 : 10011001
131 : 10000011
```

随意验证这些确实正确。 请注意，第一个字符使用1个代码单位，第二个字符使用2个代码单位，依此类推。

因此，UTF-8比UTF-32紧凑得多。 对于此字符串，你使用了10个字节来存储4个代码点。 在UTF-32中，这将是16个字节（每个代码单元4个字节，每个代码点1个代码单元，4个代码点）。

不过，UTF-8有一个缺点。 要处理某些字符串操作，你需要检查每个字节。 例如，如果要跳到第n个代码点，则需要检查每个字节，直到超过n-1个代码点为止。 你不能简单地跳入缓冲区，因为你不知道必须跳多远。

## ***UTF-16***

有另一种有用的编码，即UTF-16。是的，你猜对了。它使用16位代码单元！

这意味着最多16位的代码点使用1个代码单位。但是，如何表示17到21位的代码点呢？这些使用称为代理对的方案。这是2个UTF-16代码单元，彼此相邻时，代表16位以上范围内的代码点。

Unicode中为这些代理对代码点保留了一个空格。它们分为低和高替代。高代理范围从0xD800到0xDBFF，低代理范围从0xDC00到0xDFFF。

也许听起来是倒过来的-但是这里的高低是指此替代代表的原始代码点的比特。

从你之前看到的字符串中取出颠倒的面部表情符号。它的代码点是0x1F643。要找出此代码点的代理对，请应用以下算法：

+ 1.减去0x10000以得到0xF643或二进制的0000 1111 0110 0100 0011。
+ 2.将这20位分成两部分。这将为你提供0000 1111 01和10 0100 0011。
+ 3.取第一个并添加0xD800，得到0xD83D。这是你的最高代理。
+ 4.取第二个并添加0xDC00，得到0xDE43。这是你的低代理。

因此，在UTF-16中，该倒置的面部表情符号由代码单元0xD83D表示，后跟0xDE43。整齐！

与UTF-8一样，Swift允许你通过utf16视图访问UTF-16代码单元，如下所示：

``` Swift
for i in characters.utf16 {
  print("\(i) : \(String(i, radix: 2))")
}
```

在这种情况下，将打印以下内容，并再次向换行的字素簇添加换行符：

``` Swift
43 : 101011

189 : 10111101

8680 : 10000111101000

55357 : 1101100000111101
56899 : 1101111001000011
```

如你所见，唯一需要使用多个代码单元的代码点是最后一个，这就是你的上下表情符号。 不出所料，这些值是正确的！

因此，对于UTF-16，这次你的字符串使用10个字节（5个代码单元，每个代码单元2个字节），与UTF-8相同。 但是，UTF-8和UTF-16的内存使用情况通常不同。 例如，由7位或更少位的代码点组成的字符串在UTF-16中所占空间将是在UTF-8中所占空间的两倍。

对于由7位或更少位的代码点组成的字符串，该字符串必须完全由该范围内包含的那些拉丁字符组成。 甚至“£”符号也不在此范围内！ 因此，UTF-16和UTF-8的内存使用量通常是可比的。

Swift字符串视图使String类型的编码不可知-Swift是执行此操作的仅有的语言之一。 在内部，它实际上使用UTF-16，因为它在内存使用和操作复杂性之间达到了一个最佳点。

## ***在编码视图之间转换索引***

如前所述，你可以使用索引来访问字符串中的字素簇。 例如，使用上面的相同字符串，你可以执行以下操作：

``` Swift
let arrowIndex = characters.firstIndex(of: "\u{21e8}")! 
characters[arrowIndex] // ⇨
```

在这里，arrowIndex的类型为String.Index，用于获取该索引处的Character。

你可以在unicodeScalars，utf8和utf16视图中将此索引转换为与此字形簇的开始有关的索引。 你可以在String.Index上使用samePosition（in :)方法执行此操作，如下所示：

``` Swift
if let unicodeScalarsIndex = arrowIndex.samePosition(in: characters.unicodeScalars) {
    characters.unicodeScalars[unicodeScalarsIndex] // 8680 
}

if let utf8Index = arrowIndex.samePosition(in: characters.utf8) {
    characters.utf8[utf8Index] // 226
}

if let utf16Index = arrowIndex.samePosition(in: characters.utf16) {
    characters.utf16[utf16Index] // 8680 
}
```

unicodeScalarsIndex的类型为String.UnicodeScalarView.Index。 该字素簇仅由一个代码点表示，因此在unicodeScalars视图中，返回的标量是唯一的代码点。 如果字符是由两个代码点组成的，例如你在前面看到的e与，组合，则上面代码中返回的标量将只是“ e”。

同样，utf8Index的类型为String.UTF8View.Index，该索引处的值是用于表示此代码点的第一个UTF-8代码单元。 utf16Index类型为String.UTF16View.Index的情况也是如此。

# **关键点**

+ 字符串是字符类型的集合。

+ 字符是字素簇，由一个或多个代码点组成。

+ 组合字符是以某种方式更改前一个字符的字符。

+ 你使用特殊（非整数）索引将字符串下标到某个字形簇。

+ Swift的规范化使用确保了字符串的比较可用于组合字符。

+ 分割字符串会产生一个类型为Substring的子字符串，该子字符串与其父String共享存储空间。

+ 你可以通过初始化新的字符串并传递子字符串来将子字符串转换为字符串。

+ Swift String具有一个称为unicodeScalars的视图，该视图本身是组成该字符串的各个Unicode代码点的集合。

+ 有多种编码字符串的方法。 UTF-8和UTF-16最受欢迎。

+ 编码的各个部分称为代码单元。 UTF-8使用8位代码单元，而UTF-16使用16位代码单元。

+ Swift的String具有名为utf8和utf16的视图，这些视图是集合，使你可以获取给定编码中的各个代码单元。

