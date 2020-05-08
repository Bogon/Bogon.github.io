---
title: 'Advanced Swift系列(七): Strings'
description: 'Advanced Swift系列(七): Strings'
permalink: 'Advanced Swift系列(七): Strings'
copyright: ture
date: 2020-05-07 17:07:24
keywords: iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Strings
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Strings]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有现代编程语言都支持  `Unicode字符串  `，但这通常仅意味着本机字符串类型可以存储  `Unicode  `数据-不能保证像获取字符串长度这样的简单操作都将返回“有意义的”结果。实际上，大多数语言以及使用这些语言编写的大多数字符串处理代码都对Unicode固有的复杂性表现出一定程度的否认。这可能会导致一些令人不愉快的错误。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `Swift  `的字符串实现经过了英勇的努力，以尽可能地实现  `Unicode  `正确。   `Swift  `中的字符串是  `字符值的集合  `，其中字符是文本的人类阅读者会认为是单个字符的字符，无论它由多少个  `Unicode标量  `组成。结果，所有标准的  `Collection  `操作（如  `count或prefix（5）  `）都在用户感知的字符级别上工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这对于正确性来说是很棒的，但是要付出代价，主要是因为不熟悉。如果你习惯于使用其他语言的带有整数索引的字符串，那么  `Swift  `的设计乍一看似乎很笨拙，这使你想知道：为什么我不能写  `str [999]  `来访问字符串的千位字符？为什么  `str[idx + 1]  `没有得到下一个字符？为什么我不能遍历一系列字符值，例如   `“a” ...“ z”  `？它还对性能有影响：  `字符串不支持随机访问，即跳转到任意字符不是O(1)操作  `。不可能是-当字符的宽度可变时，如果不查看前面的所有字符，字符串将不知道第n个字符的存储位置。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们将详细讨论  `字符串架构  `，以及在  `功能  `和  `性能  `方面充分利用  `Swift字符串  `的一些技术。但是，我们将首先概述所需的  `Unicode术语  `。

<!-- more -->

# **Unicode**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事情曾经是如此简单。   `ASCII字符串  `是一个介于  `0到127之间的整数序列  `。如果将它们存储在8位字节中，你甚至还有一点空余！由于每个字符的大小都是固定的，因此  `ASCII字符串  `可以是**随机访问的**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，如果你使用英语以外的其他语言或针对非美国受众，则  `ASCII  `还不够。其他国家/地区和语言需要其他字符（即使是英语为英语的英国也需要  `£符号  `）。他们中的大多数人需要的字符数超过了7位。   `ISO 8859  `占用了额外的位，并定义了  `ASCII  `范围以上的16种不同编码，例如第1部分（  `ISO 8859-1，又名Latin-1  `），涵盖了几种西欧语言；第5部分，介绍使用西里尔字母的语言。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，这仍然是有限的：如果你想使用  `ISO 8859  `用土耳其语写有关古希腊的文字，那么你就不走运了，因为你需要选择第7部分（拉丁语/希腊语）或第9部分（土耳其语） 。而且八位仍然不足以编码多种语言。例如，第6部分（拉丁语/阿拉伯语）未包含书写阿拉伯文字（如乌尔都语或波斯语）所需的字符。同时，越南语（基于拉丁字母，但带有大量变音符号组合）只能通过替换下半部分的少数  `ASCII字符  `而适合八位。对于其他东亚语言，这甚至不是一种选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你使用固定宽度编码的空间不足时，你可以选择：**增大大小或切换到可变宽度编码**。最初，  `Unicode  `被定义为  `2字节固定宽度格式  `，现在称为  `UCS-2  `。这是在现实开始之前的，并且被接受的是即使两个字节（即约65,000个代码点）也不够用，而对于大多数用途来说，四个字节效率低下。因此，今天  `Unicode  `是一种  `可变宽度格式  `，它在两种不同的意义上是可变的：

+ → 单个字符（也称为扩展图字符集）由一个或多个Unicode标量组成。
+ → 由一个或多个代码单位编码的 scalar。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要理解原因，我们需要弄清楚这些术语的含义。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Unicode  `的基本构建块是代码点：  `Unicode  `代码空间中的整数值，范围从  `0到0x10FFFF  `（十进制表示法：  `1,114,111  `）。   `Unicode  `中的每个字符或其他脚本单位都分配有唯一的代码点。在  `Unicode 12.1  `（于2019年5月发布）中，目前仅使用了  `110万  `个可用代码点中的  `138,000  `个，因此有很大的空间容纳更多表情符号。代码点通常以带有  `“U +”  `前缀的十六进制表示法编写。例如，欧元符号位于代码点  `U+20AC  `（或  `十进制的8364  `）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Unicode标量  `与代码点几乎相同，但不完全相同。它们是所有代码点，除了  `0xD800到0xDFFF  `范围内的  `2,048  `个替代代码点（UTF-16编码用来表示大于  `65,535  `的代码点）。标量在  `Swift字符串  `文字中表示为   `“\u{xxxx}”  `，其中  `xxxx代表十六进制数字  `。因此欧元符号可以在  `Swift  `中写为  `“€”  `或   `“\u{20AC}”  `。相应的  `Swift类型  `是  `Unicode.Scalar  `，它是  `UInt32  `值的包装。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以使用不同的编码方式来编码相同的  `Unicode数据  `（即  `标量序列  `），其中最常见的是  `UTF-8  `和  `UTF-16  `。**编码中的最小实体称为代码单元**。   `UTF-8编码  `具有8位宽的代码单元，而  `UTF-16具有16位宽的代码单元  `。   `UTF-8  `的另一个好处是可以向后移动与8位ASCII兼容-这一功能帮助它取代了  `ASCII  `，成为网络上和文件格式中最受欢迎的编码。代码单位与代码点或标量不同，因为单个标量通常使用多个代码单位进行编码。由于存在超过一百万个潜在代码点，因此  `UTF-8  `只需  `1-4个代码单元  `（一到四个字节）即可对单个标量进行编码，而  `UTF-16  `则需要一个或两个代码单元（两个或四个字节）。   `Swift  `将  `UTF-8  `和  `UTF-16代码单元  `分别表示为  `UInt8  `和  `UInt16值  `（别名为  `Unicode.UTF8.CodeUnit  `和  `Unicode.UTF16.CodeUnit  `）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要用单个代码单位表示每个标量，你需要一个  `21位编码方案  `，该方案通常会四舍五入为  `32位  `，即  `UTF-32  `。这就是  `Unicode.Scalar  `在  `Swift  `中所做的事情。但是，即使那样也不能为你提供固定宽度的编码：在  `“字符”  `方面，  `Unicode  `仍然是可变宽度的格式。用户在屏幕上显示的  `“单个字符”  `可能需要多个标量组合在一起。此类用户感知字符的  `Unicode术语  `是一个（扩展的）字素簇。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标量如何形成字素簇的规则决定了文本的分割方式。例如，如果你敲击键盘上的  `Backspace键  `，则你希望文本编辑器精确删除一个字素簇，即使该  `“字符”  `由多个  `Unicode标量  `组成，每个标量可能在其中使用不同数量的代码单元。文本在内存中的表示。字形簇在  `Swift  `中用  `Character类型  `表示，只要可以形成单个用户感知的字符，它就可以编码任意数量的标量。我们将在下一部分中看到一些示例。

# **字素簇和规范对等**

## ***组合标记***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解 `String `如何处理 `Unicode `数据的一种快速方法是查看两种编写 `é `的不同方法。  `Unicode `将  `U+00E9 `（带小写的拉丁小写字母e）定义为单个值。 但是，你也可以将其写为纯字母  `e ` ，后跟 `U+0301 `，并加上重音符号。 在这两种情况下，显示的都是 `é `，并且用户可能有一个合理的期望，即显示为 `“résumé” `的两个字符串不仅彼此相等，而且具有六个字符的“长度”，无论使用哪种技术在任一字符中产生 `é `。 它们将是 `Unicode `规范所描述的规范等效项。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 `Swift `中，这正是你得到的行为：

``` Swift
let single = "Pok\u{00E9}mon" // Pokémon 
let double = "Poke\u{0301}mon" // Pokémon
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它们都显示相同：

``` Swift
(single, double) // ("Pokémon", "Pokémon")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;两者的字符数相同：

``` Swift
single.count // 7 double.count // 7
``` 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，它们也比较相等：

``` Swift
single == double // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有下拉至基础表示的视图，你才能看到它们是不同的：

``` Swift
single.unicodeScalars.count // 7 
double.unicodeScalars.count // 8
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将其与 `Foundation `中的 `NSString `进行比较：两个字符串不相等，并且 `length `属性（许多 `Objective-C `程序员可能会用来计算要在屏幕上显示的字符数）会得出不同的结果：

``` Swift
let nssingle = single as NSString nssingle.length // 7
let nsdouble = double as NSString nsdouble.length // 8
nssingle == nsdouble // false
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里， `== `被定义为用于比较两个对象的版本：

``` Swift
extension NSObject: Equatable {
    static func ==(lhs: NSObject, rhs: NSObject) -> Bool {
        return lhs.isEqual(rhs) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于 `NSString `，这将在 `UTF-16 `代码单元的级别上进行字面比较，而不是一个等效但组成不同的字符。 其他语言的大多数字符串 `API `也会以这种方式工作。 如果你确实想对两个 `NSString `执行规范比较，则必须使用 `NSString.compare（_ :) `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，比较代码单元有一个很大的好处：更快！ 通过 `utf8 `视图，使用 `Swift字符串 `仍然可以实现以下效果：

``` Swift
single.utf8.elementsEqual(double.utf8) // false
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么 `Unicode `完全支持同一字符的多种表示形式？ 预组合字符的存在使 `Unicode `代码点的开放范围与 `Latin-1兼容 `，后者已经具有 `é `和 `ñ `等字符。 尽管可能很难处理，但它使两种编码之间的转换变得简单快捷。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而且，抛弃预先合成的表格也无济于事，因为合成不仅会成对出现。 你可以一起写多个变音符号。 例如， `约鲁巴语（Yoruba） `具有字符 `ọ́ `，可以用三种不同的方式书写：通过用点组成 `ó `，或用尖点组成,，或用尖点和点组成 `o `。 对于最后一个，这两个变音符号可以处于任何顺序！ 所以这些都相等：

``` Swift
let chars: [Character] = [ 
    "\u{1ECD}\u{300}", // ọ́ 
    "\u{F2}\u{323}", // ọ́ 
    "\u{6F}\u{323}\u{300}", // ọ́ 
    "\u{6F}\u{300}\u{323}" //ọ́
]
let allEqual = chars.dropFirst().allSatisfy { $0 == chars.first } // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，可以无限地添加一些变音符号。 一个著名的互联网模因很好地说明了这一点：

``` Swift
let zalgo = "so̐ ͜ ͅoͯ ͟n̽ ̢ ͇̫͉̰ͪ"
zalgo.count // 4 
zalgo.utf8.count // 68
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的代码中， `zalgo.count `（正确）返回4，而 `zalgo.utf8.count `返回68。如果你的代码不能与网状模因一起正常使用，那有什么用，真的吗？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你处理的所有字符串均为 `纯ASCII `时， `Unicode `的字素打破规则甚至会影响你： `CR + LF `（在Windows中通常用作换行符的回车符和换行符）是单个字素：

``` Swift
// CR+LF is a single Character.
let crlf = "\r\n" 
crlf.count // 1
```

## ***Emoji***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在各种其他编程语言中，包含表情符号的字符串也可能令人惊讶。 为许多表情符号分配了 `Unicode标量 `，这些标量不适合单个 `UTF-16代码单元 `。 将字符串表示为 `UTF-16代码单元 `集合的语言（例如Java或C＃）会说字符串“:joy:”是两个“字符”长。 Swift可以正确处理这种情况：

``` Swift
let oneEmoji = ":joy:" // U+1F602 
oneEmoji.count // 1
```

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，重要的是字符串如何暴露给程序，而不是如何存储在内存中。  `Swift `使用 `UTF-8 `作为 `非ASCII字符串 `的内部编码，但这是实现细节。 公用API基于字素簇。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他表情符号由多个标量组成。 表情符号标志是与 `ISO国家/地区代码 `相对应的两个区域指示器符号的组合。 ` Swift `将标志正确地视为一个字符(:cn::it:)：

``` Swift
let flags = ":cn: :it:" 
flags.count // 2
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要检查字符串组成的 `Unicode标量 `，请使用 `unicodeScalars视图 `。 在这里，我们以代码点的通用格式将标量值格式化为十六进制数字：

``` Swift
flags.unicodeScalars.map {  
    "U+\(String($0.value, radix: 16, uppercase: true))" 
}
// ["U+1F1E7", "U+1F1F7", "U+1F1F3", "U+1F1FF"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肤色将基本字符与五个肤色修改器（例如 :facepunch:，或4型肤色修改器）之一结合使用，以产生最终的表情符号（例如:person_with_blond_hair:）。 同样，Swift可以正确处理此问题：

``` Swift
let skinTone = " " //  
skinTone.count // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描绘家庭和夫妇的表情符号（例如和）对 `Unicode标准体系 `提出了另一个挑战。 由于性别和群体人数的无数可能组合，为每种变化提供单独的代码点是有问题的。 结合每个人独特的肤色，就不可能了。  `Unicode `通过指定这些表情符号实际上是多个表情符号的序列以及不可见的零宽度连接符（ZWJ）字符（U+200D）来解决此问题。 因此，家庭实际上是男人 + ZWJ +女人+ ZWJ +女孩+ ZWJ +男孩。 ZWJ用作操作系统的指示符，它应使用单个字形（如果有）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以验证这确实是怎么回事：

``` Swift

let family1 = " "
let family2 = " \u{200D}   \u{200D}   \u{200D} "
family1 == family2 // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再一次，Swift足够聪明，可以将这样的序列视为单个角色：

``` Swift
family1.count // 1 
family2.count // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016年推出的针对职业的新表情符号也是ZWJ序列。例如，女消防员由女性+ ZWJ +消防车组成，而男性卫生工作者由男性+ ZWJ + Aesculapius staff的职员组成。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将这些序列渲染为单个字形是操作系统的任务。在2019年的Apple平台上，操作系统包括 `Unicode序列子集 `的字形标准列为“推荐用于一般互换”（RGI），即“最有可能在多个平台上得到广泛支持的标准”。当没有字形可用于语法上有效的序列时，文本呈现系统将退回以将每个组件呈现为单独的字形。请注意，这可能会导致用户感知的字符与Swift视为字素簇的字符“在另一个方向上”不匹配；到目前为止，所有示例都与编程语言中字符过多有关，但在这里我们看到了相反的情况。例如，包含肤色的家族序列当前不属于RGI子集。但是，即使操作系统将这样的序列渲染为多个字形，Swift仍会将其视为单个字符，因为Unicode文本分段规则与渲染无关：

``` Swift
// Family with skin tones is rendered as multiple glyphs // on most platforms in 2019.
let family3 = " \u{200D} \u{200D}   \u{200D} " // But Swift still counts it as a single Character. 
family3.count // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一下，微软已经可以将此图形和其他变体呈现为单个字形，并且其他操作系统供应商几乎肯定会很快推出。 但是问题仍然存在：无论字符串API的设计多么仔细，文本都非常复杂，以至于它可能永远无法抓住所有极端情况。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过去， `Swift `难以跟上 `Unicode `更改的步伐。  `Swift 3 `误处理了肤色和ZWJ序列，因为其字素破坏算法基于旧版本的 `Unicode标准 `。 从Swift 4开始，Swift使用操作系统的 `ICU库 `。 因此，当用户更新其操作系统时，你的程序将自动采用新的 `Unicode规则 `。 当然，另一方面，你不能依靠用户看到与开发期间相同的行为。 例如，当你在Linux上部署服务器端Swift代码时，代码的行为可能会有所不同，因为Linux发行版可能附带的ICU版本与开发计算机的版本不同。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本节讨论的示例中，我们将字符串的长度作为代理，以解决当某种语言没有考虑到 `Unicode `的全部复杂性时可能出错的各种情况。 只是想一想，一个简单的任务（例如，反转字符串）可能会以一种编程语言产生，当字符串包含组成的字符序列时，该编程语言不会通过字素簇处理字符串。 这不是一个新问题，但是表情符号爆炸使由草率的文本处理引起的错误更有可能浮出水面，即使你的用户群主要是说英语，也会出现草率的文本处理问题。 错误的数量也增加了：十年前，一个重音符号变差会导致一个错误的产生，弄乱一个现代表情符号很容易导致结果偏离10个或更多“字符”。 例如，一个四人家庭表情符号的长度为 `11（UTF-16） `或 `25（UTF-8） `个代码单位：

``` Swift
family1.count // 1 
family1.utf16.count // 11 
family1.utf8.count // 25
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并不是说其他语言根本没有 `Unicode `正确的API，大多数语言都没有。 例如， `NSString `具有 `enumerateSubstrings `方法，可用于通过字素簇在字符串中遍历。 但是违约很重要。 Swift的工作重点是默认情况下做正确的事。 而且，如果你需要降低到较低的抽象级别，则 `String `提供的视图可让你直接在 `Unicode标量 `或代码单元上进行操作。 我们将在下面详细介绍。

# **Strings and Collections**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如我们所见，**String是Character值的集合**。 在Swift成立的头三年，String在符合和不符合 `Collection协议 `之间来回走动。 不增加一致性的理由是，程序员希望所有通用的集合处理算法都是完全安全且Unicode正确的，这不一定对所有边缘情况都适用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;举一个简单的例子，你可以假设如果连接两个集合，则结果集合的长度将是两个源集合的长度之和。 但是，如果第一个字符串的后缀形成带有第二个字符串前缀的字素簇，则这不适用于字符串：

``` Swift
let flagLetterJ = "🇯 " 
let flagLetterP = "🇵 "
let flag = flagLetterJ + flagLetterP //
flag.count // 1
flag.count == flagLetterJ.count + flagLetterP.count // false
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为此，在 `Swift 2 `和 `Swift 3 `中， `String `本身不是一个 `Collection `。 字符集合视图已移至字符属性，与其他集合视图类似： `unicodeScalars `， `utf8 `和 `utf16 `。 选择一个特定的视图会提示你确认你已进入收集处理模式，并且应考虑将要运行的算法的后果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，对于某些与实际代码几乎不相关的极端情况，这种更改导致的可用性和可学习性的损失远远超过了正确性的获得（除非你正在编写文本编辑器）。 因此String在Swift 4中再次成为 `Collection `。

## ***双向而非随机访问***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，出于上一节中的示例应该清楚的原因， `String `不是随机访问集合。当知道特定字符串的第n个字符在哪里时，会涉及评估该字符之前有多少个Unicode标量呢？因此， `String `仅符合 `BidirectionalCollection `。你可以从字符串的任意一端开始，向前或向后移动，并且代码将查看相邻字符的组成，并跳过正确的字节数。但是，你需要一次上下迭代一个字符。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编写字符串处理代码时，请记住这一点对性能的影响。依靠随机访问来维持其性能保证的算法与 `Unicode字符串 `不是很好的匹配。考虑使用此 `String扩展名 `来生成字符串前缀列表，该扩展名的工作方式是生成一个从零到字符串长度的整数范围，然后在该范围内映射以为每个长度创建前缀：

``` Swift
extension String {
    var allPrefixes1: [Substring] {
        return (0...count).map(prefix) 
    }
}
let hello = "Hello"
hello.allPrefixes1 // ["", "H", "He", "Hel", "Hell", "Hello"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这段代码看起来很简单，但是效率很低。 它首先在字符串上遍历一次以计算长度，这很好。 但是然后，对 `prefix `的n +1个调用中的每一个都是另一个O（n）操作，因为 `prefix `总是从头开始，并且必须按照自己的方式工作通过字符串来计算所需的字符数。 在另一个线性循环内运行一个线性过程意味着该算法偶然为O（n2）-随着字符串长度的增加，该算法花费的时间成倍增加。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果可能的话，高效的字符串算法应该只遍历一个字符串，然后对字符串索引进行操作以表示其感兴趣的子字符串。以下是该算法的一个更好的版本：

``` Swift
extension String {
    var allPrefixes2: [Substring] {
        return [""] + indices.map { index in self[...index] } 
    }
}
hello.allPrefixes2 // ["", "H", "He", "Hel", "Hell", "Hello"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码还必须遍历字符串一次以生成索引集合。 但是一旦完成， `map `内部的下标操作为O（1）。 这使得整个算法为O（n）。

## ***范围可替换，不可更改***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串也符合 `RangeReplaceableCollection `。 这是一个如何替换字符串的一部分的示例，该过程将首先根据字符串索引确定适当的范围，然后调用 `replaceSubrange `。 替换字符串的长度可以不同，甚至可以为空（这等效于调用 `removeSubrange `）：

``` Swift
var greeting = "Hello, world!"
if let comma = greeting.firstIndex(of: ",") {
    greeting[..<comma] // Hello
    greeting.replaceSubrange(comma..., with: " again.") 
}
greeting // Hello again.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串不提供的一种类似于集合的功能是 `MutableCollection `。除了get之外，该协议还向集合添加了一个功能-单元素下标集的功能。这并不是说字符串不是可变的-正如我们刚刚看到的那样，它们具有几种突变方法。但是，你不能使用下标运算符替换单个字符。原因回到了可变长度字符。就像 `Array `一样，大多数人可能会发现单元素下标更新将在恒定时间内发生。但是，由于字符串中的字符宽度可能可变，因此更新单个字符可能会花费与字符串长度成比例的线性时间：更改单个元素的宽度将需要在内存中向上或向下调整所有后面的元素。此外，替换后的索引将通过改组变得无效，这同样是不直观的。由于这些原因，即使你传递的范围只是一个字符，也必须使用 `replaceSubrange `。

## ***字符串索引***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
大多数编程语言都使用整数来下标字符串，例如 `str [5] `将返回str的第六个“字符”（无论该语言对“字符”的想法是什么）。  `Swift `不允许这样做。为什么？答案现在应该听起来对你很熟悉：下标应该花固定的时间（根据集合协议的要求直观地），并且如果不查看前面的所有字节，则查找第n个字符是不可能的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
 `String.Index `是 `String及其视图使用的索引类型 `，它是一个不透明的值，实际上将字节偏移量存储在字符串的内存表示形式（通常为UTF-8）中。如果要计算第n个字符的索引并必须从字符串的开头开始，它仍然是O（n）操作，但是一旦有了有效的索引，对字符串进行下标将只需要O（1）时间。至关重要的是，**在现有索引之后查找下一个索引也很快，因为你可以从现有索引的字节偏移量开始-无需再次回到起始位置**。这就是为什么按顺序（向前或向后）遍历字符串中的字符有效的原因。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
字符串索引操作基于与其他集合相同的 `Collection API `。很容易错过这种对等关系，因为到目前为止我们使用的收藏最多—数组—使用整数索引，我们通常使用简单的算术来操作它们。  `index（after :) `方法返回下一个字符的索引：

``` Swift
let s = "abcdef"
let second = s.index(after: s.startIndex) 
s[second] // b
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
你可以通过 `index（_：offsetBy :) `方法一次性自动遍历多个字符：

``` Swift
// Advance 4 more characters.
let sixth = s.index(second, offsetBy: 4) 
s[sixth] // f
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
如果存在前进到字符串末尾的风险，则可以添加一个 `limitedBy： `参数。 如果在达到目标索引之前达到极限，则该方法返回nil：

``` Swift
let safeIdx = s.index(s.startIndex, offsetBy: 400, limitedBy: s.endIndex) safeIdx // nil
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
毫无疑问，这比简单的整数索引所需的代码更多，但这就是重点。 如果 `Swift `允许对字符串进行整数下标，那么无意编写极其低效的代码（例如通过在循环内使用整数下标）的诱惑将太大。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
不过，对于那些习惯于使用固定宽度字符的人来说，在 `Swift `中使用字符串乍一看似乎具有挑战性-在没有整数索引的情况下如何导航？ 确实，一些看似简单的任务（例如提取字符串的前四个字符）可能会变成这样的怪诞现象：

``` Swift
s[..<s.index(s.startIndex, offsetBy: 4)] // abcd
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
但是值得庆幸的是，能够通过 `Collection接口 `访问该字符串还意味着你可以使用几种有用的技术。 在 `Array `上运行的大多数方法也可以在 `String `上运行。 使用 `prefix方法 `，同一件事看起来更加清晰：

``` Swift
s.prefix(4) // abcd
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
（请注意，任何一个表达式都返回一个 `Substring `；你可以通过以下方式将其转换回 `String： `将其包装在 `String.init `中。 我们将在下一节中进一步讨论子字符串。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
作为稍微复杂一点的示例，可以从日期字符串中提取月份为完全完成而无需对字符串进行任何下标操作：

``` Swift
let date = "2019-09-01" 
date.split(separator: "-")[1] // 09 
date.dropFirst(5).prefix(2) // 09
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与往常一样，请记住，如果替换字符串的某些部分的结果可能令人惊讶在原始字符串中形成带有相邻字符的新字素簇。
要查找特定字符，可以使用 `firstIndex(of: ) `：

``` Swift
var hello = "Hello!"
if let idx = hello.firstIndex(of: "!") {
    hello.insert(contentsOf: ", world", at: idx) 
}
hello // Hello, world!
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `insert(contentsOf: at:) `方法在给定索引之前插入另一个具有相同元素类型的集合（例如字符串的字符）。 这不必是另一个 `String `； 你可以轻松地将字符数组插入字符串中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，有些任务不能仅通过对字符串使用 `Collection API `来完成： `解析CSV文件 `就是一个很好的例子。 我们不能简单地用逗号分隔一行，因为逗号也可能出现在用引号引起来的值中。 为了解决这样的任务，我们可以逐个字符地遍历字符串，同时跟踪某些状态。 本质上，我们正在编写一个非常简单的解析器：

``` Swift
func parse(csv: String) -> [[String]] { 
    var result: [[String]] = [[]]
    var currentField = ""
    var inQuotes = false
    for c in csv {
        switch (c, inQuotes) { 
            // ...
        }
    }
    return result 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们将结果创建为字符串数组的数组。 每行由一个字符串数组表示，并且CSV字符串可以包含许多行。 当我们遍历字符串时，currentField变量充当缓冲区来收集一个字段的字符。 最后，inQuotes布尔值可跟踪我们当前是否在带引号的字符串中。 这是我们用于此简单解析器的唯一状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们要为 `switch语句 `填写案例：

+ → **(“,”，false)** - 引号之外的逗号发送当前字段
+ → **(“ \ n”, false)** - 引号外的逗号替换当前行
+ → **(“\”“, _)** - 引号括起来的布尔型
+ → **默认值** -在所有其他情况下，我们都将当前字符附加到 `currentField `

``` Swift
func parse(csv: String) -> [[String]] { 
    // ...
    for c in csv {
        switch (c, inQuotes) { 
            case (",", false):
                result[result.endIndex-1].append(currentField)
                currentField.removeAll() case ("\n", false):
                result[result.endIndex-1].append(currentField) currentField.removeAll()
                result.append([])
            case ("\"", _):
                inQuotes = !inQuotes
                default: currentField.append(c)
        } 
    }
    result[result.endIndex-1].append(currentField)
    return result 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(我们正在创建一个临时元组，以一次切换两个值。你可能还记得[***```Enums```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%85%AD):%20%20Enums/ "")一章中的这项技术。)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在for循环之后，由于 `CSV字符串 `可能不会以换行符结尾，因此在返回结果之前，我们仍然必须最后一次附加 `currentField `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们尝试一个示例的 `CSV解析器 `：

``` Swift
let csv = #"""
"Values in quotes","can contain , characters" "Values without quotes work as well:",42 """#
parse(csv: csv)
/*
[["Values in quotes", "can contain , characters"],
["Values without quotes work as well:", "42"]] */
```

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的字符串文字使用扩展的定界符语法（将字符串文字包含在＃个字符中），这使我们能够在字符串文字中编写引号而不必对其进行转义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能够编写像这样的小型解析器可以大大提高你的字符串处理技能。这样，使用 `Collection API `甚至正则表达式很难或不可能完成的任务通常变得很简单。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的 `CSV解析器 `尚未完成，但已经很有用。这很短，因为我们不必跟踪很多状态；只有一个布尔变量。通过一些额外的工作，我们可以忽略空行，忽略带引号的字段周围的空格，并支持在带引号的字段内对引号进行转义（通过使用两个引号字符）。然后，我们将使用枚举明确区分所有可能的状态，而不是使用单个布尔值来跟踪解析器的状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，我们添加到解析器的状态越多，在实现中就容易出错。因此，仅在非常简单的分析任务中才建议在单个循环中进行这种分析。如果我们必须跟踪更多状态，则必须改变策略，从在单个循环中编写所有内容到将解析器分解为多个功能。

## ***Substrings***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与所有集合一样， `String `具有名为 `Substring `的特定切片或 `SubSequence类型 `。 子字符串非常类似于 `ArraySlice： `它是具有不同起始索引和结束索引的基本字符串的视图。 子字符串共享其基本字符串的文本存储。 切片字符串的好处是非常便宜的操作。 在以下示例中创建 `firstWord `变量不需要昂贵的副本或内存分配：

``` Swift
let sentence = "The quick brown fox jumped over the lazy dog." 
let firstSpace = sentence.firstIndex(of: " ") ?? sentence.endIndex 
let firstWord = sentence[..<firstSpace] // The
type(of: firstWord) // Substring
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `廉价切片 `在循环中非常重要，在循环中，你遍历整个（可能很长）字符串以提取其分量。 诸如查找文本中所有单词的出现或 `解析CSV文件之类 `的任务都浮现在脑海。 在这种情况下，非常有用的字符串处理操作是拆分。 ` split方法 `是在 `Collection `和返回子序列的数组（即 `[Substring] `）。 其最常见的变体定义如下：

``` Swift
extension Collection where Element: Equatable {
    public func split(separator: Element, maxSplits: Int = Int.max,
    omittingEmptySubsequences: Bool = true) -> [SubSequence] 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以像这样使用它：

``` Swift
let poem = """
Over the wintry
forest, winds howl in rage with no leaves to blow. """
let lines = poem.split(separator: "\n")
// ["Over the wintry", "forest, winds howl in rage", "with no leaves to blow."] 
type(of: lines) // Array<Substring>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这可以起到类似于 `component(separatedBy: ) `方法的作用， `String `从 `NSString `继承，并添加了有关是否删除空组件的配置。 同样，不复制输入字符串。 此外，由于 `split `的另一种变体需要关闭，因此它不仅可以比较字符，还可以做更多的事情。 这是原始自动换行算法的示例，其中的闭包捕获了到目前为止的行长计数：

``` Swift
extension String {
    func wrapped(after maxLength: Int = 70) -> String {
        var lineLength = 0
        let lines = self.split(omittingEmptySubsequences: false) { character in
            if character.isWhitespace && lineLength >= maxLength {      
                lineLength = 0
                return true
            } else { 
                lineLength += 1 
                return false
            } 
        }
        return lines.joined(separator: "\n") 
    }
}
sentence.wrapped(after: 15)
/*
The quick brown fox jumped over the lazy dog.
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，考虑编写采用多个分隔符序列的版本：

``` Swift
extension Collection where Element: Equatable {
    func split<S: Sequence>(separators: S) -> [SubSequence]
    where Element == S.Element {
        return split { separators.contains($0) } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，你可以编写以下内容：

``` Swift
"Hello, world!".split(separators: ",! ") // ["Hello", "world"]
```

## ***StringProtocol***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;子字符串具有与字符串几乎相同的接口。 这是通过一个通用的协议 `StringProtocol `来实现的，这两种类型都符合。 由于几乎整个字符串 `API `都是在 `StringProtocol上定义 `的，因此你可以像处理 `String `一样使用 `Substring `。 不过，在某些时候，你必须将子字符串转换回 `String实例 `； 与所有切片一样，子字符串仅用于短期存储，以避免在操作过程中产生昂贵的副本。 操作完成后，如果要存储结果或将结果传递给另一个子系统，则应创建一个新的 `String `。 你可以通过使用子字符串初始化 `String `来完成此操作，如本例所示：

``` Swift
func lastWord(in input: String) -> String? {
    // Process the input, working on substrings.
    let words = input.split(separators: [",", " "])
    guard let lastWord = words.last else { 
        return nil 
    }
    // Convert to String for return.
    return String(lastWord) 
}
lastWord(in: "one, two, three, four, five") // Optional("five")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阻止长期存储子字符串的理由是，**子字符串始终保留在整个原始字符串上**。即使原始字符串的生命周期通常已经结束，代表巨大字符串的单个字符的子字符串也会将整个字符串保存在内存中。因此，**子字符串的长期存储将有效地导致内存泄漏，因为即使原来的字符串不再可用，它们也必须保留在内存中**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过在操作过程中使用子字符串，并仅在最后创建新的字符串，我们将副本推迟到最后一刻，并确保仅产生那些实际需要的副本的成本。在上面的示例中，我们将整个（可能很长的）字符串拆分为子字符串，但是最后只花了一个短子字符串的单个副本的费用。 （请暂时忽略此算法的有效性；从最后开始迭代，直到找到第一个分隔符将是更好的方法。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遇到仅在要传递字符串时仅接受子字符串的函数的情况比较少见-大多数函数应采用字符串或任何符合 `StringProtocol的类型 `。但是，如果确实需要传递 `Substring `，最快的方法是使用 `range运算符 `对字符串进行下标...，而不指定任何边界：

``` Swift
// Substring with identical start and end index as the base string.
let substring = sentence[...]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定义Words集合时，我们已经在关于 **```集合协议```** 的章节中看到了这样的示例。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Substring类型 `是在 `Swift 4 `中引入的。在 `Swift 3 `中， `String.CharacterView `曾经是它自己的切片类型。 这样做的好处是用户只需要了解一种类型，但这意味着存储的子字符串即使在正常情况下也可以保留整个原始字符串缓冲区。 通过引入 `Substring `， `Swift `在便利性方面付出了小小的损失，换来了廉价的切片操作和可预测的内存使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会想充分利用 `StringProtocol `的存在，并将所有 `API `转换为采用 `StringProtocol实例 `而不是纯字符串。 但是Swift团队的建议是不要这样做：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的一般建议是坚持使用String。 大多数API仅使用String而不是通用即可（这本身会付出一定的代价），因此使用String会更加简单明了，并且在少数情况下需要用户转换并不是很大的负担。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此规则的例外是极有可能与子字符串一起使用的 `API `，同时又无法进一步推广到 `Sequence `或 `Collection级别 `。 标准库中的一个示例是 `joind方法 `。 标准库为符合 `StringProtocol `的元素的序列提供了重载：

``` Swift
extension Sequence where Element: StringProtocol {
    /// Returns a new string by concatenating the elements of the sequence, 
    /// adding the given separator between each element.
    public func joined(separator: String = "") -> String
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使你可以直接在子字符串数组上调用 `join `（例如，从拆分调用中获得），而不必映射到数组并将每个子字符串复制到新字符串中。 这样更方便，更快。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接受字符串并将其转换为数字的数字类型初始值设定项也采用 `StringProtocol `值。 同样，如果要处理子字符串数组，这特别方便：

``` Swift
let commaSeparatedNumbers = "1,2,3,4,5"
let numbers = commaSeparatedNumbers.split(separator: ",")
.compactMap { Int($0) } 
numbers // [1, 2, 3, 4, 5]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于子字符串旨在缩短寿命，因此通常不建议从函数中返回子字符串，除非我们谈论的是返回切片的 `Sequence API `或 `Collection API `。如果你编写了只对字符串有意义的类似函数，则让该函数返回一个子字符串会告诉读者它没有进行复制。创建需要内存分配的新字符串的函数（例如 `uppercased（） `）应始终返回 `String实例 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要使用新功能扩展 `String `，请将扩展名放在 `StringProtocol `上是使 `String `和 `Substring `之间的 `API `表面保持一致的一个好主意。  `StringProtocol `明确设计为可以在以前扩展 `String `时使用。如果要将现有扩展名从 `String `移到 `StringProtocol `，则唯一要做的更改是将 `self `的任何传递替换为采用 `String（self） `的具体 `String `的 `API `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是请记住， `StringProtocol `不能用作你自己的自定义字符串类型的一致性目标。该文档明确警告它：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要声明与 `StringProtocol `的新一致性。 仅标准库的 `String `和 `Substring类型 `是有效的符合类型。

## ***编码单元视图***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，有必要降低到较低的抽象水平，并直接对 `Unicode标量 `或代码单元进行操作，而不要对 `Swift字符 `（即字素簇）进行操作。字符串为此提供了三个视图： `unicodeScalars `， `utf8 `和 `utf16 `。像 `String `一样，它们是双向集合，支持所有熟悉的操作。与子字符串一样，视图共享字符串的存储空间；它们只是以不同的方式表示基础字节。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有几种常见原因导致你需要处理其中一种视图。首先，也许你实际上需要代码单元，可能是为了呈现到 `UTF-8编码 `的网页中，还是与需要特定编码的非 `Swift API `进行互操作。或者，你可能需要有关特定格式字符串的信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，假设你正在编写一个 `Twitter客户端 `。尽管 `Twitter API `期望字符串采用 `UTF-8编码 `，但 `Twitter `的字符计数算法是基于 `NFC标准化的标量 `（至少以前是这样的-该算法最近变得越来越复杂，但我们会坚持使用就本例而言，是先前的方法。）因此，如果要向用户显示他们还剩下多少个字符，可以采用以下方法：

``` Swift

let tweet = "Having   in a cafe\u{301} in   and enjoying the   ."
let characterCount = tweet.precomposedStringWithCanonicalMapping
    .unicodeScalars.count 
characterCount // 46
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `NFC规范化 `将基本字母和组合标记（例如 `“cafe\u{301}” `中的e加重音）一起转换为它们的预组合形式。  `precomposedStringWithCanonicalMapping `属性在 `Foundation `中定义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `UTF-8 `是用于 `存储文本 `或 `通过Internet发送文本的事实上的标准 `。 由于 `utf8视图 `是一个集合，因此你可以使用它将原始 `UTF-8字节 `传递给其他任何接受字节序列的 `API `，例如 `Data `或 `Array `的初始化程序：

``` Swift
let utf8Bytes = Data(tweet.utf8) 
utf8Bytes.count // 62
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串的 `UTF-8视图 `在所有代码单元视图中的开销也最小，因为 `UTF-8 `是 `Swift字符串 `的本机内存格式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意， `utf8集合 `不包含结尾的空字节。 如果需要以空值结尾的表示形式，请在字符串上使用 `withCString `方法或 `utf8CString属性 `。 后者返回一个字节数组：

``` Swift
let nullTerminatedUTF8 = tweet.utf8CString 
nullTerminatedUTF8.count // 63
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `withCString方法 `调用你提供的函数，该函数提供了一个指向以 `Null `结尾的字符串的 `UTF-8 `内容的指针。 如果你需要调用期望使用 `char * `的 `C API `，这将非常有用。 在许多情况下，你甚至不需要显式的 `withCString调用 `，因为编译器可以自动将 `Swift字符串 `转换为C字符串以进行函数调用。 例如，这是对C标准库中 `strlen函数 `的调用：

``` Swift
strlen(tweet) // 62
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在 `“互操作性” `一章中看到更多示例。在大多数情况下（如果字符串的基础存储已经是UTF-8），这种转换几乎没有成本，因为 `Swift `可以将直接指针传递到字符串存储中的C语言。如果字符串具有不同的内存编码，则编译器将自动插入代码以对内容进行代码转换并将所述内容复制到临时缓冲区中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `utf16视图 `具有特殊意义，因为 `Foundation API `传统上将字符串视为 `UTF-16代码单元 `的集合。虽然 `NSString `接口透明地桥接到 `Swift.String `，从而为你隐式处理了转换，但其他基金会API（例如 `NSRegularExpression `或 `NSAttributedString `）通常希望输入的是UTF-16数据。我们将在“字符串和基础”部分中看到一个示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用代码单元视图的第二个原因是，对代码单元而不是完全组成的字符进行操作会更快。这是因为 `Unicode字素 `破坏算法相当复杂，并且需要额外的提前行才能识别下一个字素簇的开始。但是，近年来，将String作为字符进行遍历的速度越来越快，因此，请务必测量（相对较小的）加速是否值得失去Unicode正确性。下拉至其中一个代码单元视图后，必须确保你的特定算法可以在此基础上正常工作。例如， `使用UTF-8视图解析JSON应该没问题 `，因为解析器感兴趣的所有特殊字符（例如逗号，引号或花括号）都可以在单个代码单元中表示； JSON数据中的某些字符串可能包含复杂的表情符号序列都没关系。另一方面，如果你希望搜索算法找到搜索字符串的不同归一化形式，则在代码单元视图中查找字符串中所有单词的出现均无法正常工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `代码单元视图均未提供的一项理想功能是随机访问 `。结果是String及其视图与需要随机访问的算法不匹配。绝大多数的字符串处理任务应该可以在顺序遍历中正常工作，特别是因为算法始终可以存储其希望能够在恒定时间内重新访问的片段的子字符串。如果你绝对需要随机访问，则始终可以将字符串本身或其中的一个视图转换为数组并对其进行处理，就像使用  `Array(str) ` 或 ` Array(str.utf8) ` 一样。

## ***索引共享***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串及其视图共享相同的索引类型 `String.Index `。 这意味着你可以使用从字符串派生的索引对视图之一进行下标。 在下面的示例中，我们在字符串中搜索“é”（由两个标量，字母e和重音组成）。 结果索引引用Unicode标量视图中的第一个标量：

``` Swift
let pokemon = "Poke\u{301}mon" // Pokémon 
if let index = pokemon.firstIndex(of: "é") {
    let scalar = pokemon.unicodeScalars[index] // e
    String(scalar) // e 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要你沿抽象阶梯走下去（从字符到标量再到UTF-8或UTF-16代码单元），此方法就很好用。 采用另一种方法可能会产生令人惊讶的结果，因为并非其中一个代码单元视图中的每个有效索引都在Character边界上：

``` Swift
let family = " "
// This initializer creates an index at a UTF-16 offset.
let someUTF16Index = String.Index(utf16Offset: 2, in: family)
family[someUTF16Index] //
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String.Index具有一组用于在视图之间转换索引的方法  `(samePosition(in: )) ` 和失败的初始化器  `(String.Index.init?(_：within :)) ` 。 如果给定索引在指定视图中没有确切的对应位置，则它们返回 `nil `。 例如，尝试将标量视图中合并重音的位置转换为字符串中的有效索引会失败，因为合并字符在字符串中没有自己的位置：

``` Swift
if let accentIndex = pokemon.unicodeScalars.firstIndex(of: "\u{301}") {     
    accentIndex.samePosition(in: pokemon) // nil
}
```

## ***Strings and Foundation***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift `的 `String类型 `与其基金会对应的 `NSString `有非常密切的关系。可以使用 `as运算符 `将任何 `String实例 `桥接到 `NSString `，采用或返回NSString的 `Objective-C API `会自动转换为使用String。但这还不是全部。从Swift 5.0开始，String仍然缺少NSString拥有的许多功能。由于字符串是这种基本类型，并且经常不得不转换为 `NSString `会很烦人，因此String会受到编译器的特殊对待：导入 `Foundation `时， `NSString成员 `可以在String实例上直接访问，这使Swift字符串的功能大大增强了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拥有附加功能无疑是一件好事，但使用字符串可能会使你感到困惑。一方面，如果你忘记导入 `Foundation `，你可能会想知道为什么某些方法不可用。基金会作为 `Objective-C框架 `的历史也趋向于使 `NSString API `在标准库旁边显得有些不合时宜，即使仅仅是因为不同的命名约定也是如此。最后但并非最不重要的一点是，两个库的功能集之间的重叠有时意味着存在两个名称完全不同的```API```，它们执行几乎相同的任务。如果你是一位长期的 `Cocoa开发人员 `，并且在 `Swift `出现之前就已经学习了 `NSString API `，那么这可能没什么大不了的，但是对于新手来说，这将是令人困惑的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经看到了一个示例- `Foundation中标准库 `的 `split方法 `与 `components（separatedBy :) `的比较-还有许多其他不匹配之处： `Foundation `使用 `CompareResult枚举 `作为比较谓词，而标准库是围绕布尔谓词设计的；诸如 `trimmingCharacters（in :) `和 `components（separatedBy :) `之类的方法将 `CharacterSet `作为参数，这在Swift中是不幸的错误称呼（稍后会详细介绍）；极其强大的 `enumerateSubstrings（in：options：_ :)方法 `可以遍历大量字素簇，单词，句子或段落中的字符串，可以处理相应的 `标准库API `使用子字符串的字符串和范围。 （标准库还可以提供与延迟序列相同的功能，这非常酷。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的示例枚举字符串中的单词。每个发现的单词都会调用一次回调闭包：

``` Swift
let sentence = """
The quick brown fox jumped \ over the lazy dog.
"""
var words: [String] = []
sentence.enumerateSubstrings(in: sentence.startIndex..., options: .byWords) { (word, range, _, _) in
    guard let word = word else { return } words.append(word)
}
words
// ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要获得导入到String中的所有 `NSString成员 `的概述，请在Swift源代码存储库中检出文件[***```NSStringAPI.swift```***](https://github.com/apple/swift/blob/swift-5.0-RELEASE/stdlib/public/SDK/Foundation/NSStringAPI.swift "")。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 `Swift字符串（UTF-8） `和 `NSString（UTF-16） `的本地内存编码之间不匹配，因此当 `Swift字符串 `必须桥接到NSString时，会产生额外的性能成本。 这意味着将原生Swift字符串传递给诸如 `enumerateSubstrings（in：options：using :)之类 `的 `Foundation API `可能不如传递 `NSString `那样快-该方法可能假定能够以UTF- 在固定时间内偏移16个偏移量，但这将是对Swift字符串的线性时间操作。 为了减轻这种影响，Swift实现了复杂的索引缓存以实现摊销的恒定时间特性。

## ***其他与字符串相关的Foundation API***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;综上所述，原生 `NSString API `通常适合与 `Swift字符串 `配合使用，因为大多数桥接工作都是为你完成的。许多其他处理字符串的 `Foundation API `都很难使用，因为Apple尚未为它们编写特殊的 `Swift覆盖 `。考虑一下 `NSAttributedString `，这是用于以格式表示富文本的 `Foundation类 `。要从Swift成功使用归因字符串，你必须注意以下几点：

+ → 有两个类 -  `NSAttributedString `用于不可变字符串， `NSMutableAttributedString `用于可变字符串。它们具有引用语义，而不是Swift的标准集合具有值语义。

+ → 尽管虽然所有 `NSAttributedStringAPI `最初都采用了 `NSStringnowtakea Swift.String `，但整个API仍基于 `NSString的UTF-16代码单元集合 `的概念，并且String和NSString之间的频繁桥接可能会带来意外的性能损失。有关详细信息，请参阅[***```WWDC 2018 的会议229```***](https://developer.apple.com/videos/play/wwdc2018/229/?time=1978 "")。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，用于查询特定位置的格式设置属性的 `attributes（at：Int，effectiveRange：NSRangePointer？） `方法期望整数索引（以UTF-16单位度量），而不是 `String.Index `，并且有效指针通过指针返回是一个 `NSRange `，而不是 `Range <String.Index> `。对于传递给 `NSMutableAttributedString.addAttribute（_：value：range :) `的范围，情况也是如此。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `NSRange `是包含两个整数字段，位置和长度的结构：

``` Swift
public struct NSRange { 
    public var location: Int 
    public var length: Int
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在字符串的上下文中，字段以UTF-16代码单位指定字符串段。 与以前的版本相比，Swift 4使使用·的工作稍微容易一些，因为现在有了用于在  `Range<String.Index> ` 和  `NSRange ` 之间进行转换的初始化程序； 但是，这不会缩短来回翻译所需的额外代码。 以下是有关如何创建和修改属性字符串的示例：

``` Swift
let text = " 👉 Click here for more info." 
let linkTarget = URL(string: "https://www.youtube.com/watch?v=DLzxrzFCyOs"! 
// Object is mutable despite  `let ` (reference semantics).
let formatted = NSMutableAttributedString(string: text)
    // Modify attributes of a part of the text.
    if let linkRange = formatted.string.range(of: "Click here") {
    // Convert Swift range to NSRange.
    // Note that the start of the range is 3 because the preceding emoji // character doesn't fit in a single UTF-16 code unit.
    let nsRange = NSRange(linkRange, in: formatted.string) // {3, 10} // Add the attribute.
    formatted.addAttribute(.link, value: linkTarget, range: nsRange)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此代码将链接添加到字符串的“单击此处”部分。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在属性字符串中查询特定字符的格式设置属性是这样的：

``` Swift
// Query attributes at start of the word "here."
if let queryRange = formatted.string.range(of: "here") {
    // Convert Swift range to NSRange.
    let nsRange = NSRange(queryRange, in: formatted.string)
    // Prepare NSRange variable to receive effective attributes range. 
    var attributesRange = NSRange()
    // Execute query.
    let attributes = formatted.attributes(at: nsRange.location,
    effectiveRange: &attributesRange) 
    attributesRange // {3, 10}
    // Convert NSRange back to Range<String.Index>.
    if let effectiveRange = Range(attributesRange, in: formatted.string) {  // The substring spanned by the attribute. 
        formatted.string[effectiveRange] // Click here
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们认为你会同意，要使这段代码看起来像是惯用的Swift，还有很长的路要走。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了 `NSAttributedString `，另一个具有非常相似的阻抗失配的 `Foundation类 `是 `NSRegularExpression `。  `Swift `可能会在不久的将来获得本机正则表达式语法，但是在那之前，我们将不得不使用笨拙的 `Foundation API `。

## ***Ranges of Characters***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（强制转换为 `Character `很重要，因为字符串文字的默认类型是String；我们需要告诉类型检查器我们想要一个 `Character范围 `。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "")一章中讨论了失败的原因：字符不符合 `Strideable协议 `，这是使范围变得可计数并因此成为集合的要求。 你可以对一个字符范围进行的操作就是将其他字符与该字符进行比较，即检查一个字符是否在该范围内：

``` Swift
lowercaseLetters.contains("A") // false 
lowercaseLetters.contains("é") // false
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可数范围的概念确实有意义的一种类型是 `Unicode.Scalar `，至少在你坚持使用 `ASCII `或 `Unicode `目录的其他顺序良好的子集的情况下。 标量在其代码点值中具有明确定义的顺序，并且在任何两个边界之间始终存在有限数量的标量。  `Unicode `标量默认情况下不是“可扩展的”，但我们可以追溯添加一致性：

``` Swift
extension Unicode.Scalar: Strideable { 
    public typealias Stride = Int
    public func distance(to other: Unicode.Scalar) -> Int { 
        return Int(other.value) - Int(self.value)
    }
    public func advanced(by n: Int) -> Unicode.Scalar { 
        return Unicode.Scalar(UInt32(Int(value) + n))!
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（我们忽略了这样的事实，即代代码点 `0xD800 `到 `0xDFFF `不是有效的 `Unicode标量值 `。构造与该区域重叠的范围是程序员的错误。）

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将你不拥有的类型与你不拥有的协议相一致可能会产生问题，通常不建议这样做，因为如果你使用的其他库添加相同的扩展名，或者如果原始供应商以后添加了相同的一致性，则可能会导致冲突。 一个可能不同的实现）。 创建包装类型并将协议一致性添加到该类型通常是一个更好的主意。 我们将在“协议”一章中对此进行更深入的介绍。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为 `Unicode `添加可跨越的一致性。标量允许我们使用一系列 `Unicode标量 `作为生成字符数组的一种非常方便的方式：

``` Swift
let lowercase = ("a" as Unicode.Scalar)..."z" 
Array(lowercase.map(Character.init))
/*
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] */
```

# **CharacterSet**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一下最后一种有趣的 `Foundation类型 `，那就是 `CharacterSet `。 我们已经在[***```“内置集合”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%8C):%20Build-in%20Collections/ "")一章中提到过，该结构实际上应称为 `UnicodeScalarSet `，因为它就是这样：一种有效的数据结构，用于表示 `Unicode标量集 `。 它与字符类型完全不兼容。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过使用几个复杂的表情符号创建一个集合来说明这一点。 似乎该集合仅包含我们放入的两个表情符号，但是测试第三个表情符号的成员资格是成功的，因为消防员表情符号实际上是女性+ ZWJ +消防车的序列：

``` Swift
let favoriteEmoji = CharacterSet("     ".unicodeScalars) // Wrong! Or is it?
favoriteEmoji.contains("   ") // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `CharacterSet `提供了许多工厂初始化程序，例如 `.alphanumerics `和 `.whitespacesAndNewlines `。 其中大多数对应于正式的 `Unicode字符 `类别（为每个代码点分配了一个类别，例如“字母”或“无间距标记”）。 类别涵盖所有脚本，而不仅仅是 `ASCII `或 `Latin-1 `，因此这些预定义集中的成员数通常很大。 由于 `CharacterSet符合SetAlgebra `，因此我们可以通过使用诸如联合或相交之类的集合操作来组合多个字符集。

## ***Unicode属性***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Swift 5 `中， `CharacterSet `的部分功能已集成到 `Unicode.Scalar `中。我们不再需要 `Foundation类型 `来测试正式 `Unicode类 `别中的成员资格的标量，因为现在这些已直接作为 `Unicode.Scalar `上的属性公开。  `isEmoji `或 `isWhitespace `。 为避免使主要 `Unicode.Scalar `名称空间混乱， `Unicode属性 `在名称属性下命名：

``` Swift
(" " as Unicode.Scalar).properties.isEmoji // true 
("∫∫" as Unicode.Scalar).properties.isMath // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请查看[***```Unicode.Scalar.Properties```***](https://developer.apple.com/documentation/swift/unicode/scalar/properties "")的文档以获取完整列表。 这些属性大多数都是布尔型的，但不是全部：诸如age（引入标量时的Unicode版本），name（正式的Unicode名称），numericalValue（适用于具有自己代码点的分数） 或非拉丁文字中的数字）和generalCategory（描述标量的“一阶，最常用的分类”的枚举）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，列出组成字符串的每个标量的代码点，名称和常规类别，只需要一点点字符串格式即可：

``` Swift
"I’m a  😀 .".unicodeScalars.map { scalar -> String in
    let codePoint = "U+\(String(scalar.value, radix: 16, uppercase: true))"

    let name = scalar.properties.name ?? "(no name)"
    return "\(codePoint): \(name) – \(scalar.properties.generalCategory)" 
}.joined(separator: "\n")
/*
U+49: LATIN CAPITAL LETTER I – uppercaseLetter
U+2019: RIGHT SINGLE QUOTATION MARK – finalPunctuation U+6D: LATIN SMALL LETTER M – lowercaseLetter
U+20: SPACE – spaceSeparator
U+61: LATIN SMALL LETTER A – lowercaseLetter
U+20: SPACE – spaceSeparator
U+1F469: WOMAN – otherSymbol
U+1F3FD: EMOJI MODIFIER FITZPATRICK TYPE-4 – modifierSymbol U+200D: ZERO WIDTH JOINER – format
U+1F692: FIRE ENGINE – otherSymbol
U+2E: FULL STOP – otherPunctuation
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `Unicode标量 `属性级别较低，有意使用 `Unicode标准 `有时含糊的术语。 在 `“角色” `级别上设置相似的类别通常很有用，因此Swift 5还为“角色”添加了许多相关属性。 这里有些例子：

``` Swift
Character("4").isNumber // true 
Character("$").isCurrencySymbol // true 
Character("\n").isNewline // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与Unicode标量属性不同，“字符”上的这些类别不是Unicode规范的正式组成部分，因为Unicode仅对标量进行分类，而不对扩展字素簇进行分类。 标准库尽最大努力提供有关字符性质的明智信息，但是由于支持的脚本数量众多，并且Unicode具有将标量以无限组合的方式进行组合的能力，因此这些类别并不精确，可能与其他工具或编程不匹配语言提供。 它们也可能随着时间而发展。

## ***字符串和字符的内部结构***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与标准库中的其他集合类型一样，**字符串是具有值语义的写时复制集合**。 String实例存储对缓冲区的引用，该缓冲区保存实际的字符数据。复制字符串时（通过赋值）或通过将其传递给函数）或创建子字符串，所有这些实例共享同一缓冲区。仅当某个实例与一个或多个其他实例共享其字符缓冲区时发生突变时，才复制字符数据。有关写时复制的更多信息，请参见[***```“结构和类”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%94):%20Structs%20and%20Classes/ "")一章。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从Swift 5开始，String使用 `UTF-8作为本机Swift字符串 `的内存表示形式。如果你需要最佳性能，则可以利用这些知识来发挥自己的优势-遍历UTF-8视图可能比UTF-16或Unicode标量视图快一点。同样，UTF-8是大多数字符串处理的自然格式，因为来自文件或Web的大多数源数据都使用UTF-8编码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 `Objective-C `接收的字符串由 `NSString `支持。在这种情况下，NSString直接充当Swift字符串的缓冲区，以提高桥接效率。当NSString支持的String发生突变时，它将转换为原生Swift字符串。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于最多 `15个UTF-8代码单元 `（或在32位平台上为10个代码单元）的小字符串，有一项特殊的优化措施，可避免完全分配后备缓冲区。由于字符串的宽度为16个字节，因此可以内联存储小字符串的代码单元。尽管15个UTF-8代码单元听起来可能不多，但足以容纳很多字符串。例如，在JSON之类的机器可读格式中，许多键和值（例如数字和布尔值）都适合此长度，特别是因为它们通常仅使用ASCII字符。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个小的字符串优化还用于 `Character类型 `的内部表示（从[***```标准库源简化```***](https://github.com/apple/swift/blob/swift-5.0-RELEASE/stdlib/public/core/Character.swift%23L65 "")）：

``` Swift
public struct Character { 
    internal var _str: String
    internal init(unchecked str: String) { 
        self._str = str
        // ...
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，一个字符在内部表示为长度为一的字符串。 在 `Swift 5 `进行小字符串优化之前， `Character类型 `本身实现了两层策略：可内联存储63位以下的字符，而将较大的字符存储在缓冲区中。 从Swift 5.0开始，**Character仅依靠小字符串优化来达到类似的效果**。

## ***String Literals***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们一直在互换使用 `String（“ blah”） `和 `“ blah” `，但它们是不同的。 “”是字符串文字，就像 `“集合协议” `一章中介绍的数组文字一样。你可以通过遵 `ExpressibleByStringLiteral `，从字符串文字中初始化类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字符串文字比数组文字稍微复杂一点，因为它们属于三个协议的层次结构的一部分： `ExpressibleByStringLiteral `， `ExpressibleByExtendedGraphemeClusterLiteral `和 `ExpressibleByUnicodeScalarLiteral `。每个都定义一个用于从每种文字创建类型的 `init `，但是除非你真的需要根据是否从单个标量/集群创建值而需要细粒度的逻辑，否则你只需要实现字符串版本即可；其他的则由引用字符串文字初始值设定项的默认实现覆盖。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为采用 `ExpressibleByStringLiteral协议 `的自定义类型的示例，我们定义了 `SafeHTML `类型。这实际上只是一个字符串包装，但具有附加的类型安全性。当我们使用这种类型的值时，我们可以确保它包含的潜在危险 `HTML标记 `已被转义，以免造成安全风险：

``` Swift
extension String {
var htmlEscaped: String {
    // Replace all opening and closing brackets.
    // A "real" implementation would be more complicated. 
    return replacingOccurrences(of: "<", with: "&lt;")
            .replacingOccurrences(of: ">", with: "&gt;") }
}
struct SafeHTML {
    private(set) var value: String
    init(unsafe html: String) { 
        self.value = html.htmlEscaped
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以使用这种类型来确保视图的 `API `仅接受正确转义的值。 缺点是我们将不得不在 `SafeHTML `的代码中手动包装许多字符串文字。 幸运的是，我们可以遵循 `ExpressibleByStringLiteral `来避免这种开销：

``` Swift
extension SafeHTML: ExpressibleByStringLiteral { 
    public init(stringLiteral value: StringLiteralType) {
        self.value = value 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设代码中的字符串文字始终是安全的（这是一个合理的假设，因为我们自己输入了字符串文字）：

``` Swift
let safe: SafeHTML = "<p>Angle brackets in literals are not escaped</p>" 
// SafeHTML(value: "<p>Angle brackets in literals are not escaped</p>")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面，我们必须明确指定 `SafeHTML类型 `，否则 `safe `将为 `String类型 `。 但是，我们可以在编译器已经知道类型的上下文中省略显式类型，例如属性分配或函数调用。

## ***String Interpolation***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自开始以来，字符串插值即将表达式放入字符串文字中（例如“a*b = \(a * b)”）。 Swift 5引入了一个公共API，以利用字符串插值来定制类型。 我们可以使用此API从上面改进SafeHTML类型。 我们经常不得不编写包含HTML标签的字符串文字，并在两者之间添加一些用户输入数据：

``` Swift

let input = ... // received from user, unsafe! 
let html = "<li>Username: \(input)</li>"
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入必须转义，因为它来自不受信任的来源，但是字符串文字段应保持不变，因为我们要在其中编写HTML标签。我们可以通过为 `SafeHTML类型 `实现自定义字符串插值规则来实现此目的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift的字符串插值API由两个协议组成： `ExpressibleByStringInterpolation `和 `StringInterpolationProtocol `。前者必须采用应通过字符串插值构造的类型。后者可以采用相同的类型，也可以采用单独的类型，并且包含几种逐步构建字符串插值值的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `ExpressibleByStringInterpolation `继承自 `ExpressibleByStringLiteral `，我们在上面已经使它符合 `SafeHTML类型 `。因此，我们可以通过实现可以从 `StringInterpolationProtocol `值构造 `SafeHTML值 `的初始化程序，来立即符合 `ExpressibleByStringInterpolation `。在此示例中，我们将使用相同的类型 `SafeHTML `来符合 `StringInterpolationProtocol `：

``` Swift
extension SafeHTML: ExpressibleByStringInterpolation { 
    init(stringInterpolation: SafeHTML) {
        self.value = stringInterpolation.value 
    }
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `StringInterpolationProtocol `协议具有三个要求： `初始化程序 `， `appendLiteral方法 `和 `一个或多个appendInterpolation方法 `。  `Swift `具有符合此协议的默认类型 `DefaultStringInterpolation `，该类型处理我们从标准库免费获得的字符串插值。 我们想提供一个带有 `appendInterpolation方法 `的自定义类型，该方法可以对插值进行转义：

``` Swift
extension SafeHTML: StringInterpolationProtocol { 
    init(literalCapacity: Int, interpolationCount: Int) {
        self.value = "" 
    }
    mutating func appendLiteral(_ literal: String) { 
        value += literal
    }
    mutating func appendInterpolation<T>(_ x: T) { 
        self.value += String(describing: x).htmlEscaped
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初始化程序通知插值类型有关存储所有组合文字所需的近似容量，以及我们必须期望的插值次数。 我们忽略这两个参数，只用一个空字符串初始化值。 但是，如果出于性能方面的考虑，我们可以使用此信息提前保留容量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `appendLiteral方法 `只是将字符串追加到 `value属性 `，因为默认情况下我们认为字符串文字是安全的（就像上面的 `ExpressibleByStringLiteral `一样）。  `appendInterpolation（_ :) `方法采用任何类型的输入参数，并且使用 `String（describing :) `将其转换为字符串。 在将此字符串附加到 `value `之前，我们先对其进行转义。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 `appendInterpolation方法 `的参数上没有标签，因此可以像使用 `Swift `的默认字符串插值一样使用它：

``` Swift
let unsafeInput = "<script>alert('Oops!')</script>"
let safe: SafeHTML = "<li>Username: \(unsafeInput)</li>" 
safe
/*
SafeHTML(value: "<li>Username: &lt;script&gt;alert(\'Oops!\')&lt;/script&gt;</li>")
*/
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器将插值后的字符串转换为对自定义 `StringInterpolationProtocol类型 `的一系列 `appendLiteral `和 `appendInterpolation `调用，使我们有机会按自己认为合适的方式存储此数据。处理完所有文字和插值段后，将结果值传递到 `init（stringInterpolation :) `初始化程序以创建 `SafeHTML值 `。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的例子中，我们选择使 `ExpressibleByStringInterpolation `和 `StringInterpolationProtocol `都使用相同的类型，因为它们共享相同的结构（都只需要一个字符串属性）。但是，当构建字符串插值所需的数据结构与通过插值构造的类型的结构不同时，使用单独类型的功能将很有用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管我们可以用字符串插值做更多的事情。本质上， `\（...） `语法是 `appendInterpolation `方法调用的简写，即我们可以使用多个参数和标签。我们可以利用此行为来添加“原始”插值，该插值允许我们插值而不转义它们：

``` Swift
extension SafeHTML {
    mutating func appendInterpolation<T>(raw x: T) {
        self.value += String(describing: x) 
    }
}
let star = "<sup>*</sup>"
let safe2: SafeHTML = "<li>Username\(raw: star): \(unsafeInput)</li>" 
safe2
/*
SafeHTML(value: "<li>Username<sup>*</sup>: &lt;script&gt;alert(\'Oops!\')&lt;/script&gt;</li>") */
```

## ***自定义字符串说明***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诸如 `print `， `String（describing :) `和字符串插值之类的函数可以采用任何类型，无论如何。 即使没有任何自定义，你返回的结果也可以接受，因为结构默认情况下会打印其属性：

``` Swift
let safe: SafeHTML = "<p>Hello, World!</p>" 
print(safe)
// prints out SafeHTML(value: "<p>Hello, World!</p>")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再说一遍，你可能需要一些漂亮的东西，特别是如果你的类型包含不想显示的私有变量时。 但是不要害怕！ 在传递给打印时，只需一分钟即可为你的自定义类型提供格式良好的输出：

``` Swift
extension SafeHTML: CustomStringConvertible { 
    var description: String {
        return value 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，如果有人通过各种方式将 `SafeHTML值 `转换为字符串（将其与诸如 `print `之类的流函数一起使用，将其传递给 `String（describing :) `或在某些字符串插值中使用），它将仅打印其字符串值：

``` Swift
print(safe) // <p>Hello, World!</p>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一个 `CustomDebugStringConvertible `，可以在有人调用 `String（reflecting :) `时实现，以提供用于调试目的的不同输出格式：

``` Swift
extension SafeHTML: CustomDebugStringConvertible { 
    var debugDescription: String {
        return "SafeHTML: \(value)" 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果未实现 `CustomDebugStringConvertible `，则 `String（rectioning :) `会回退到使用 `CustomStringConvertible `，反之亦然。同样，如果 `CustomStringConvertible `不可用，则 `String（describing :) `会退回到 `CustomDebugStringConvertible `。通常，如果你的类型简单，则不值得实施 `CustomDebugStringConvertible `。但是，如果你的自定义类型是容器，则礼貌地遵守 `CustomDebugStringConvertible `以便打印该类型所包含元素的调试版本。并且，如果出于调试目的在打印时做任何与众不同的事情，请确保也实现 `CustomStringConvertible `。但是，如果你的 `description `和 `debugDescription `的实现是相同的，则可以选择其中一个而忽略另一个。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便说一句，即使通过 `String（describing :) `进行调用， `Array `也会始终打印出其元素的调试描述。原因是数组的描述无论如何都不会呈现给用户，因此可以优化描述的输出以进行调试。而且，如果没有带引号的 `String.description `省略，则空字符串数组将看起来是错误的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鉴于符合 `CustomStringConvertible `意味着类型具有漂亮的打印输出，你可能会想编写类似以下通用函数的内容：

``` Swift
func doSomethingAttractive<T: CustomStringConvertible>(with value: T) { 
    // Print out something incorporating value, safe in the knowledge
    // it will print out sensibly.
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是你不应该以这种方式使用 `CustomStringConvertible `。 你不必使用类型来确定它们是否具有 `description属性 `，而应该使用 `String（describing :) `来代替，如果类型不符合协议，则应使用难看的输出。 这将永远不会失败任何类型。 而且，只要你编写的不是一个非常简单的类型，这就是实现 `CustomStringConvertible `的一个很好的理由。 只需要几行。

## ***文字输出流***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中的打印和转储功能会将文本记录到标准输出中。 这是如何运作的？ 这些函数的默认版本转发给名为 `print（_：to :) `和 `dump（_：to :) `的重载。  `to： `参数是输出目标； 它可以是符合 `TextOutputStream协议 `的任何类型：

``` Swift
public func print<Target: TextOutputStream>
(_ items: Any..., separator: String = " ", terminator: String = "\n", to output: inout Target)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库维护一个内部文本输出流，该流将流到它的所有内容写入标准输出。 你还能写些什么？ 嗯，字符串是标准库中唯一一个输出流的类型：

``` Swift
vars=""
let numbers = [1,2,3,4] 
print(numbers, to: &s) 
s // [1, 2, 3, 4]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要将打印和转储功能的输出重新路由到字符串中，此功能很有用。 顺便说一句，标准库还利用输出流来允许Xcode捕获所有标准输出日志记录。 看一下标准库中的此全局变量声明：

``` Swift
public var _playgroundPrintHook: ((String) -> Void)?
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果非零，则 `print `将使用特殊的输出流，该输出流会将所有已打印的内容都路由到标准输出和此函数。 该声明甚至是公开的，因此你可以将其用于自己的恶作剧：

``` Swift
var printCapture = "" 
_playgroundPrintHook = { text in
    printCapture += text 
}
print("This is supposed to only go to stdout") 
printCapture // This is supposed to only go to stdout
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是不要依赖它！ 它完全没有记录，并且我们不知道当你重新分配Xcode时哪些功能会中断。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以制作自己的输出流。 该协议只有一个要求：一种写方法，该方法接受一个字符串并将其写入流中。 例如，此输出流缓冲写入数组：

``` Swift
struct ArrayStream: TextOutputStream { 
    var buffer: [String] = []
    mutating func write(_ string: String) {
        buffer.append(string) 
    }
}
var stream = ArrayStream()
print("Hello", to: &stream)
print("World", to: &stream)
stream.buffer // ["", "Hello", "\n", "", "World", "\n"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该文档明确允许写入输出流的函数在每个写入操作中多次调用 `write（_ :) `。 因此，上例中的数组缓冲区包含用于换行符甚至是空字符串的单独元素。 这是打印功能的实现细节，在将来的版本中可能会更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一种可能性是扩展 `Data `，以使其采用流，并将其写入为 `UTF-8编码 `的输出：

``` Swift
extension Data: TextOutputStream {
    mutating public func write(_ string: String) {
        self.append(contentsOf: string.utf8) 
    }
}

var utf8Data = Data()
var string = "café" utf8Data.write(string)
Array(utf8Data) // [99, 97, 102, 195, 169]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输出流的源可以是符合 `TextOutputStreamable协议 `的任何类型。 该协议需要通用方法 `write（to :) `，该方法可以接受任何符合 `TextOutputStream的类型 `并将其自身写入其中。 在标准库中， `String `， `Substring `， `Character `和 `Unicode.Scalar `符合 `TextOutputStreamable `，但你也可以为自己的类型添加符合性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如我们所见，在内部，打印在标准输出上使用了一些符合 `TextOutputStream的包装器 `。 你可以为标准错误编写类似的内容，例如：

``` Swift
struct StdErr: TextOutputStream { 
    mutating func write(_ string: String) {
        guard !string.isEmpty else { return }

    // Strings can be passed directly into C functions that take a // const char* — see the interoperability chapter for more! 
    fputs(string, stderr)
    } 
}

var standarderror = StdErr() 
print("oops!", to: &standarderror)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流还可以保持状态，它们可以潜在地转换其输出，并且可以将它们链接在一起。 以下输出流用给定的替换项替换了所有出现的指定短语。 像 `String `一样，它也符合 `TextOutputStreamable `，使其成为文本流操作的目标和源：

``` Swift
struct ReplacingStream: TextOutputStream, TextOutputStreamable { 

    let toReplace: KeyValuePairs<String, String>
    private var output = ""

    init(replacing toReplace: KeyValuePairs<String, String>) { 
        self.toReplace = toReplace
    }

    mutating func write(_ string: String) {
        let toWrite = toReplace.reduce(string) { partialResult, pair in
                partialResult.replacingOccurrences(of: pair.key, with: pair.value) 
        }
        print(toWrite, terminator: "", to: &output) 
    }
    func write<Target: TextOutputStream>(to target: inout Target) {     
        output.write(to: &target)
    }
}

var replacer = ReplacingStream(replacing: [
"in the cloud": "on someone else's computer"
])
let source = "People find it convenient to store their data in the cloud."
print(source, terminator: "", to: &replacer)
var output = ""
print(replacer, terminator: "", to: &output)
output
// People find it convenient to store their data on someone else's computer.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码中使用 `KeyValuePairs `代替常规字典。 如果你希望能够使用 `[key：value] `文字语法，但又不想使用 `Dictionary `会带来两个副作用，那就是很有用：消除重复的键和重新排列键。  `KeyValuePairs `是配对数组的不错选择即 `[（key，value）] `，允许调用者使用更方便的 `[：] `语法。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift中的字符串与几乎所有其他主流编程语言中的字符串都非常不同。当你习惯于有效地将字符串作为代码单元的数组使用时，需要花一些时间才能将心态切换到Swift的将Unicode正确性优先于简单性的方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，我们认为Swift是正确的选择。 Unicode文本比其他语言假装的要复杂得多。从长远来看，避免原本要编写的错误所节省的时间可能会超过取消学习整数索引所花费的时间。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们习惯于随机访问“字符”，以至于我们可能没有意识到在字符串处理代码中真正需要此功能的情况很少。我们希望本章中的示例能使你相信，对于大多数常见操作而言，简单的有序遍历非常合适。强制你明确说明要使用的字符串表示形式—字形簇，Unicode标量，UTF-8代码单元或UTF-16代码单元
—是另一项安全措施；你的代码的读者将不胜感激。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;克里斯·拉特纳（Chris Lattner）在2016年7月概述Swift字符串实现的目标时，他以以下观点告终：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的目标是比Perl更好地处理字符串！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift 5 `还不存在-缺少太多理想的功能，包括将更多的字符串 `API `从 `Foundation `转移到标准库，对正则表达式的本地语言支持以及用于格式化和解析字符串的 `API `。 好消息是， `Swift `团队已表示有兴趣在将来解决所有这些主题。 现在，完成用于内存中表示的从 `UTF-16 `切换到 `UTF-8 `的艰巨任务已经完成，重点将转移到充实API。




