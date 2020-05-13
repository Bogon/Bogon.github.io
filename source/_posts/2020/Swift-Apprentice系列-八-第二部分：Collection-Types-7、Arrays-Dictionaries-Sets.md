---
title: 'Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets'
description: 'Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets'
permalink: 'Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets'
copyright: ture
date: 2020-05-12 18:09:10
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Arrays, Dictionaries,Sets]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

# **可变集合与不可变集合**

就像你以前阅读过的类型（例如Int或String）一样，在创建集合时，必须将其声明为常量或变量。

如果集合创建后不需要更改，则应通过let将其声明为常量来使其不可变。 另外，如果你需要添加，删除或更新集合中的值，则应通过将其声明为var变量来创建可变集合。

## ***Arrays***

数组是你在Swift中会遇到的最常见的集合类型。 像常规变量和常量一样，对数组进行类型化，并像简单列表一样存储多个值。

在创建第一个数组之前，请花一些时间详细考虑什么是数组以及为什么要使用一个数组。

<!-- more -->

### ***什么是数组？***

**数组是相同类型的值的有序集合**。 数组中的元素为零索引，这意味着第一个元素的索引为0，第二个元素的索引为1，依此类推。 知道了这一点，你可以得出最后一个元素的索引是数组中值的数量减去一。

![playground](http://q8wtfza4q.bkt.clouddn.com/sasb-ads-stp1.png "")

此数组中有五个元素，索引为0–4。

所有值均为String类型，因此你不能将非字符串类型添加到包含字符串的数组中。 请注意，同一值可以出现多次。

### ***数组什么时候有用？***

当你要按特定顺序存储项目时，数组很有用。 你可能需要对元素进行排序，或者可能需要按索引获取元素，而无需遍历整个数组。

例如，如果你要存储高分数据，则顺序很重要。 你可能希望最高的分数排在列表的第一位（即索引0），然后是第二高的分数，依此类推。

### ***创建数组***

创建数组的最简单方法是使用数组文字。 这是提供数组值的简洁方法。 数组文字是由逗号分隔并用方括号括起来的值的列表。

``` Swift
let evenNumbers = [2, 4, 6, 8]
```

由于数组文字仅包含整数，因此Swift会将evenNumbers的类型推断为Int值的数组。 此类型写为[Int]。 方括号内的类型定义了数组可以存储的值的类型，当你将元素添加到数组时，编译器将强制执行该类型。

例如，如果你尝试添加字符串，则编译器将返回错误，并且你的代码将无法编译。 可以使用空数组文字[]创建一个空数组。 由于编译器无法从中推断出类型，因此你需要使用类型注释来使类型明确：

``` Swift
var subscribers: [String] = []
```

也可以创建一个数组并将其所有值都设置为默认值：

``` Swift
let allZeros = Array(repeating: 0, count: 5) // [0, 0, 0, 0, 0]
```

最好将不会更改的数组声明为常量。 例如，考虑以下数组：

``` Swift
let vowels = ["A", "E", "I", "O", "U"]
```

元音是一个字符串数组，其值不能更改。 但这很好，因为元音列表不会经常更改！

### ***访问元素***

除非你知道如何从数组中获取值，否则能够创建数组是没有用的。 在本节中，你将学习几种访问数组元素的不同方法。

### ***使用属性和方法***

假设你要创建纸牌游戏，并且想要将玩家的姓名存储在一个阵列中。 随着玩家加入或离开游戏，列表将需要更改，因此你需要声明一个可变数组：

``` Swift
var players = ["Alice", "Bob", "Cindy", "Dan"]
```

在此示例中，players是可变数组，因为你已将其分配给变量。

在游戏开始之前，你需要确保有足够的玩家。 你可以使用isEmpty属性检查是否至少有一个玩家：

``` Swift
print(players.isEmpty) 
// > false
```

>注意：你将在第11章“属性”中了解有关属性的所有信息。 现在，只需将它们视为内置在值中的变量即可。 要访问属性，请在保存该值的常量或变量的名称之后放置一个点，并在其后跟随要访问的属性的名称。

阵列不为空，但是你至少需要两个玩家才能开始游戏。 你可以使用count属性获取玩家人数：

``` Swift
if players.count < 2 {
    print("We need at least two players!")
} else {
    print("Let’s start!") 
}
// > Let’s start!
```

现在该开始游戏了！ 你确定播放顺序是按数组中名称的顺序进行的。 你将如何获得第一个玩家的名字？

数组提供第一个属性来获取数组的第一个对象：

``` Swift
var currentPlayer = players.first
```

打印currentPlayer的值揭示了一些有趣的东西：

``` Swift
print(currentPlayer as Any)
// > Optional("Alice")
```

该属性实际上首先返回一个可选参数，因为如果数组为空，则first将返回nil。 print（）方法实现currentPlayer是可选的并生成警告。 要取消显示警告，只需将“ Any”添加为要打印的类型。 同样，数组具有last属性，该属性返回数组中的最后一个值；如果数组为空，则返回nil：

``` Swift
print(players.last as Any) 
// > Optional("Dan")
```

从数组获取值的另一种方法是调用min()。 此方法返回数组中具有最低值的元素，而不是最低索引！ 如果数组包含字符串，则它将返回按字母顺序排列的最低字符串，在这种情况下为“ Alice”：

``` Swift
currentPlayer = players.min() print(currentPlayer as Any) 
// > Optional("Alice")
```

>注意：你将在第12章“方法”中了解有关方法的所有信息。 现在，只需将它们视为内置在值中的函数即可。 若要调用方法，请在保存该值的常量或变量的名称后放置一个点，并在其后跟随要调用的方法的名称。 就像使用函数一样，在调用方法时，即使它为空，也不要忘记包含参数列表。

显然，first和min()不会总是返回相同的值。 例如：

``` Swift
print([2, 3, 1].first as Any) // > Optional(2)
print([2, 3, 1].min() as Any) // > Optional(1)
```

你可能已经猜到了，数组还具有max()方法。

>注意：first和last属性以及min()和max()方法并不是数组唯一的。 除了许多其他类型外，每种集合类型都具有这些属性和方法。 阅读第16章“协议”中的协议，你将学到更多有关此行为的信息。

现在你已经知道如何获得第一位玩家，接下来将宣布该玩家是谁：

``` Swift
if let currentPlayer = currentPlayer {
  print("\(currentPlayer) will start")
}
// > Alice will start
```

你可以使用if来解开从min()返回的可选内容； 否则，该语句将打印Optional（“ Alice”）将开始，这不是你想要的。

如果要获取第一个，最后一个，最小或最大元素，这些属性和方法将很有帮助。 但是，如果无法使用这些属性或方法之一获得所需的元素怎么办？

### ***使用下标***

访问数组中元素的最方便方法是使用下标语法。 此语法使你可以通过使用方括号内的索引直接访问任何值：

``` Swift
var firstPlayer = players[0]
print("First player is \(firstPlayer)")
// > First player is "Alice"
```

由于数组的索引为零，因此你可以使用索引0来获取第一个对象。 你可以使用更大的索引来获取数组中的下一个元素，但是如果尝试访问的索引超出数组的大小，则会出现运行时错误。

``` Swift
var player = players[4]
// > fatal error: Index out of range
```

你收到此错误，因为播放器仅包含四个字符串。 索引4代表第五个元素，但是此数组中没有第五个元素。

使用下标时，不必担心可选项，因为尝试访问不存在的索引不会返回nil； 它只会导致运行时错误。

### ***使用可数范围制作ArraySlice***

你可以将下标语法与可计数范围一起使用，以从数组中获取多个值。 例如，如果你想吸引下两名玩家，可以这样做：

``` Swift
let upcomingPlayersSlice = players[1...2] 
print(upcomingPlayersSlice[1], upcomingPlayersSlice[2]) 
// > "Bob Cindy\n"
```

常量即将到来的PlayersSlice实际上是原始数组的ArraySlice。 这种类型差异的原因是要弄清楚即将到来的PlayersSlice与玩家共享存储空间。

你使用的范围是1 ... 2，代表数组中的第二项和第三项。 只要起始值小于或等于结束值且在数组范围内，就可以在此处使用索引。

从ArraySlice制作一个全新的，零索引的Array也很容易，如下所示：

``` Swift
let upcomingPlayersArray = Array(players[1...2]) 
print(upcomingPlayersArray[0], upcomingPlayersArray[1]) 
// > "Bob Cindy\n"
```

### ***检查元素***

你可以使用contains(_ :)检查数组中是否存在至少一个特定元素，如果它在数组中找到该元素，则返回true，否则返回false。

你可以使用此策略编写一个函数来检查给定玩家是否在游戏中：

``` Swift
func isEliminated(player: String) -> Bool {
    !players.contains(player) 
}
```

现在，你可以在需要检查球员是否被淘汰时随时使用此功能：

``` Swift
print(isEliminated(player: "Bob"))
// > false
```

你甚至可以使用ArraySlice测试特定范围内元素的存在：

``` Swift
players[1...3].contains("Bob") // true
```

现在你可以从数组中获取数据，是时候来看看可变数组以及如何更改其值了。

### ***修改数组***

你可以对可变数组进行各种更改，例如添加和删除元素，更新现有值以及将元素移动到不同的顺序。 在本部分中，你将看到如何使用数组来匹配游戏中发生的事情。

#### ***追加元素***

如果新玩家想加入游戏，他们需要注册并将他们的名字添加到数组中。 伊莱（Eli）是第一个加入现有四名球员的球员。 你可以使用append(_ :)方法将Eli添加到数组的末尾：

``` Swift
players.append("Eli")
```

如果你尝试附加字符串以外的任何内容，则编译器将显示错误。 请记住，数组只能存储相同类型的值。 另外，append(_ :)仅适用于可变数组。

下一位加入游戏的玩家是吉娜（Gina）。 你可以使用+=运算符将她添加到游戏中：

``` Swift
players += ["Gina"]
```

该表达式的右侧是一个包含单个元素的数组：字符串“ Gina”。 通过使用`+=`，你可以将该数组的元素附加到播放器。

现在，数组如下所示：

``` Swift
print(players)
// > ["Alice", "Bob", "Cindy", "Dan", "Eli", "Gina"]
```

在这里，你向数组添加了一个元素，但是通过在Gina的后面添加更多名称，你可以看到使用+=运算符添加多个项目会多么容易。

#### ***插入元素***

此纸牌游戏的不成文规则是，玩家的姓名必须按字母顺序排列。 此列表中缺少以字母F开头的玩家。幸运的是，弗兰克刚到。 你想将他添加到Eli和Gina之间的列表中。 为此，可以使用insert(_：at :)方法：

``` Swift
players.insert("Frank", at: 5)
```

at参数定义要在何处添加元素。 请记住，数组是零索引的，所以索引5是Gina的索引，导致她随着Frank的到来而上升。

#### ***移除元素***

在比赛中，其他玩家发现Cindy和Gina作弊。 他们应该从游戏中删除！ 你知道Gina在玩家列表中排在最后，因此你可以使用removeLast()方法轻松删除她：

``` Swift
var removedPlayer = players.removeLast() 
print("\(removedPlayer) was removed")
// > Gina was removed
```

这个方法有两件事：它删除最后一个元素，然后返回它，以防万一你需要打印它或将其存储在其他位置（例如在作弊器阵列中）！

要从游戏中删除Cindy，你需要知道存储她名字的确切索引。 查看玩家列表，你会发现她在列表中排名第三，因此她的指数为2。

``` Swift
removedPlayer = players.remove(at: 2) 
print("\(removedPlayer) was removed") 
// > Cindy was removed
```

但是，如果你还不知道该元素的索引，该如何获取呢？ 有一种方法！ firstIndex(of :)返回元素的第一个索引，因为数组可能包含相同值的多个副本。 如果该方法找不到元素，则返回nil。

### ***遍历数组***

天色已经晚了，所以玩家决定停下来过夜，明天继续。 同时，你会将他们的分数保存在单独的数组中。 了解字典后，你将研究一种更好的方法，但是现在你可以继续使用数组：

``` Swift
let scores = [2, 2, 8, 6, 1, 2, 1]
```

在玩家离开之前，你要打印仍在游戏中的玩家的名字。 你可以使用第4章“高级控制流”中介绍的for-in循环来执行此操作：

``` Swift
for player in players {
  print(player)
}
// > Anna
// > Brian
// > Craig
// > Dan
// > Donna
// > Eli
// > Franklin
```

此代码遍历了玩家的所有元素，从索引0到players.count-1，并显示其值。 在第一次迭代中，player等于数组的第一个元素； 在第二次迭代中，它等于数组的第二个元素； 依此类推，直到循环打印出数组中的所有元素为止。

如果需要每个元素的索引，则可以遍历数组的enumerated（）方法的返回值，该方法返回带有每个元素的索引和值的元组：

``` Swift
for (index, player) in players.enumerated() {
    print("\(index + 1). \(player)") 
}
// > 1. Anna
// > 2. Brian
// > 3. Craig
// > 4. Dan
// > 5. Donna
// > 6. Eli
// > 7. Franklin
```

现在，你可以使用刚刚学习的技术来编写一个函数，该函数将整数数组作为输入并返回其元素的总和：

``` Swift
func sumOfElements(in array: [Int]) -> Int { 
    var sum = 0
    for number in array {
        sum += number
    }
    return sum 
}
```

你可以使用此功能来计算玩家得分的总和：

``` Swift
print(sumOfElements(in: scores))
// > 22
```

### ***数组操作的时间复杂度***

**数组作为连续块存储在内存中**。这意味着，如果数组中有十个元素，则十个值都将彼此相邻存储。考虑到这一点，以下是各种阵列操作的性能成本：

**访问元素**：获取元素的成本很便宜，这意味着它发生在固定或恒定的时间内。有时这被写为O（1）。由于所有值都是顺序的，因此可以轻松使用随机访问并在特定索引处获取值；编译器只需要知道数组从何处开始以及要获取的索引。

**插入元素**：添加元素的复杂度取决于添加新元素的位置：
+ 如果添加到数组的开头，则Swift需要的时间与数组的大小成正比，因为它必须将所有元素都移一个以腾出空间。这称为线性时间，有时写为O（n）。

+ 同样，如果添加到数组的中间，则该索引上的所有值都需要移入。这样做将需要n / 2次运算，因此时间复杂度仍与数组或O（n）的大小成线性关系。

+ 如果使用append将元素添加到数组的末尾并有空间，则将占用O（1）。如果没有空间，Swift将需要在其他地方腾出空间并复制整个数组，然后再添加新元素，这将占用O（n）。但是平均情况是O（1），因为大多数情况下数组未满。

**删除元素**：删除元素会在删除元素所在的位置留下一个空白。数组中的所有元素必须是顺序的，因此需要通过向前移动元素来弥合此间隙。

复杂度类似于插入元素：如果要从末尾删除元素，则这是O（1）操作。否则，复杂度为O（n）。

**搜索元素**：如果你要搜索的元素是数组中的第一个元素，则搜索将在一次操作后结束。如果该元素不存在，则需要执行N次操作，直到意识到找不到该元素。平均而言，搜索元素将执行n/2次操作，因此搜索的复杂度为O（n）。

在学习字典和集合时，你会发现它们的性能特征与数组有何不同。这样可以提示你针对特定案例使用哪种集合类型。

## ***Dictionaries***

**字典是对的无序集合**，其中每个对都包含一个键和一个值。

如下图所示，**键是唯一的**。 相同的键不能在字典中出现两次，但是不同的键可能指向相同的值。 **所有键必须具有相同的类型，并且所有值都必须具有相同的类型**。

![playground](http://q8wtfza4q.bkt.clouddn.com/sasb-ads-stp2.png "")

当你想通过标识符查找值时，字典很有用。 例如，本书的目录将章节名称映射到其页码，从而可以轻松跳至你要阅读的章节。

这与数组有何不同？ 对于数组，只能按其索引获取值，该索引必须是整数，并且所有索引必须是顺序的。 在字典中，键可以是任何类型，并且没有特定的顺序。

### ***创建字典***

创建字典的最简单方法是使用字典文字。 这是用逗号分隔的键值对的列表，括在方括号中。

对于以前的纸牌游戏，可以使用字典文字来代替使用两个数组将玩家映射到他们的得分：

``` Swift
var namesAndScores = ["Anna": 2, "Brian": 2, "Craig": 8, "Donna": 6]
print(namesAndScores)
// > ["Craig": 8, "Anna": 2, "Donna": 6, "Brian": 2]
```

在此示例中，字典的类型被推断为[String：Int]。 这意味着namesAndScores是一个字典，其中字符串作为键，而整数作为值。

当你打印字典时，你会发现配对之间没有特定的顺序。 请记住，与数组不同，**字典是无序的**！

空的字典文字看起来像这样：[：]。 你可以使用它来清空现有字典，如下所示：

``` Swift
namesAndScores = [:]
```

...或创建一个新字典，如下所示：

``` Swift
var pairs: [String: Int] = [:]
```

这里需要使用类型注释，因为**编译器无法从空字典文字推断出字典的类型**。

创建字典后，可以定义其容量：

``` Swift
pairs.reserveCapacity(20)
```

当你知道字典需要存储多少数据时，使用reserveCapacity(_ :)是提高性能的一种简便方法。

### ***访问值***

与数组一样，有几种访问字典值的方法。

#### ***使用下标***

字典支持下标访问值。 与数组不同，你不是通过索引访问值，而是**通过键访问值**。 例如，如果你想获得安娜的分数，则可以输入：

``` Swift
namesAndScores = ["Anna": 2, "Brian": 2, "Craig": 8, "Donna": 6]
// Restore the values
print(namesAndScores["Anna"]!) // 2
```

请注意，返回类型是可选的。 字典会检查键安娜是否存在一对，如果存在，则返回其值。

如果字典找不到键，它将返回nil。

``` Swift
namesAndScores["Greg"] // nil
```

对于数组，越界下标访问会导致运行时错误，但是字典不同，因为它们的结果都包装在可选变量中。 使用可选选项的下标访问功能非常强大。 你可以找到特定的玩家是否在游戏中，而不必遍历所有键，就像使用数组时必须做的那样。

#### ***使用属性和方法***

字典（如数组）符合Swift的`Collection协议`。 因此，它们共享许多相同的属性。 例如，数组和字典都具有`isEmpty`和`count属性`：

``` Swift
namesAndScores.isEmpty // false 
namesAndScores.count // 4
```

>注意：如果只想知道字典中是否包含元素，最好使用isEmpty属性。 字典需要遍历所有值以计算计数。 相反，无论有多少值，isEmpty始终在恒定时间内运行。

### ***修改字典***

创建字典并访问其内容非常容易，但是如何对其进行修改呢？

#### ***添加对***

鲍勃想加入游戏。

在让他加入之前，先看看他的详细信息：

``` Swift
var bobData = [
  "name": "Bob",
  "profession": "Card Player",
  "country": "USA"
]
```

该词典的类型为[String：String]，并且可变，因为它已分配给变量。 想象一下，你收到了有关Bob的更多信息，并且想将其添加到词典中。 这是你的操作方式：

``` Swift
bobData.updateValue("CA", forKey: "state")
```

使用下标，甚至还有更短的添加对的方法：

``` Swift
bobData["city"] = "San Francisco"
```

鲍勃（Bob）是专业的纸牌玩家 到目前为止，他听起来还不错。

#### ***更新值***

过去看来，鲍勃在玩纸牌时被骗。 他不仅是专业人士，而且是卡鲨！ 他要求你更改他的名字和专业，所以没人会认出他。

因为鲍勃似乎渴望改变自己的方式，所以你同意。 首先，你将他的名字从Bob更改为Bobby：

``` Swift
bobData.updateValue("Bobby", forKey: "name") // Bob
```

在阅读有关添加对时，你已经在上面看到了此方法。 为什么返回字符串Bob？ updateValue(_：forKey :)用新值替换给定键的值，并返回旧值。 如果密钥不存在，则此方法将添加一对新密钥并返回nil。

与添加一样，通过使用下标，你可以使用更少的代码来完成此操作：

``` Swift
bobData["profession"] = "Mailman"
```

像updateValue(_：forKey :)一样，此代码更新此密钥的值，或者，如果该密钥不存在，则创建一个新对。

#### ***删除对***

Bob –er 抱歉，Bobby仍然不安全，他希望你删除所有有关他的下落的信息：

``` Swift
bobData.removeValue(forKey: "state")
```

此方法将从字典中删除键状态及其关联的值。


如你所料，有一种使用下标的较短方法：

``` Swift
bobData["city"] = nil
```

将nil分配为键的关联值会将其从字典中删除。

>注意：如果你使用的字典的值是可选类型，则dictionary [key] = nil仍会完全删除该键。 如果要保留键并将值设置为nil，则必须使用updateValue方法。

### ***遍历字典***

当你要遍历字典时，for-in循环也可以使用。 但是由于字典中的项目是成对的，因此你需要使用元组：

``` Swift
for (player, score) in namesAndScores {
    print("\(player) - \(score)") 
}
// > Craig - 8 
// > Anna - 2 
// > Donna - 6 
// > Brian - 2
```

也可以仅对键进行迭代：

``` Swift
for player in namesAndScores.keys {
  print("\(player), ", terminator: "") // no newline
}
print("") // print one final newline
// > Craig, Anna, Donna, Brian,
```

你可以使用字典的values属性以相同的方式仅迭代值。

### ***字典操作的时间复杂度***

为了能够检查字典的工作方式，你需要了解什么是哈希以及哈希如何工作。**散列是将值（字符串，整数，双精度，布尔等）转换为数字值（称为散列值）的过程**。然后，可以使用此值快速查找哈希表中的值。

Swift字典对键有类型要求。**key必须是可哈希的**，否则会出现编译器错误。

幸运的是，在Swift中，**所有基本类型都已经可以哈希并且具有哈希值**。此值必须是确定性的-意味着给定值必须始终返回相同的哈希值。无论你为某个字符串计算哈希值多少次，它始终会给出相同的值。但是，永远不要保存哈希值，因为每次运行程序时哈希值都会不同。

这是各种字典操作的性能。出色的性能取决于具有良好的散列函数，可以避免值冲突。如果你的哈希功能差，则下面的所有操作都会退化为线性时间或O（n）性能。幸运的是，内置类型具有出色的通用Hashable实现。

**访问元素**：获取键的值是恒定时间操作或O（1）。

**插入元素**：要插入元素，字典需要计算键的哈希值，然后根据该哈希存储数据。这些都是O（1）操作。

**删除元素**：同样，字典需要计算哈希值，以准确知道在哪里可以找到元素，然后将其删除。这也是O（1）操作。

**搜索元素**：如上所述，访问元素具有恒定的时间复杂度，因此搜索的复杂度也为O（1）。

尽管所有这些时间复杂度都比数组优越，但请记住，使用字典时会丢失订单信息。

## ***Sets***

**集合是相同类型的唯一值的无序集合**。 当你要确保某个项目在集合中出现的次数不超过一次并且项目的顺序不重要时，这可能非常有用。

![playground](http://q8wtfza4q.bkt.clouddn.com/sasb-ads-stp3.png "")

上面的“设置”插图中有4个字符串。 请注意，这些元素没有顺序。

### ***创建集合***

你可以通过写Set并在尖括号内键入类型来显式声明一个set：

``` Swift
let setOne: Set<Int> = [1]
```

#### ***设置字面量***

集合没有自己的文字。 你可以使用数组文字来创建具有初始值的集合。 考虑以下示例：

``` Swift
let someArray = [1, 2, 3, 1]
```

这是一个数组。 那么如何使用数组文字来创建集合呢？ 像这样：

``` Swift
var explicitSet: Set<Int> = [1, 2, 3, 1]
```

你必须将变量明确声明为Set。 但是，你可以让编译器像这样推断元素类型：

``` Swift
var someSet = Set([1, 2, 3, 1])
```

要查看实际使用的集合的最重要功能，请打印你刚刚制作的集合创建：

``` Swift
print(someSet)
// > [2, 3, 1] but the order is not defined
```

首先，你可以看到没有特定的顺序。 其次，尽管你创建的集合具有两个值1实例，但该值仅出现一次。 请记住，***一组值必须唯一***。

### ***访问元素***

你可以使用contains(_ :)检查特定元素的存在：

``` Swift
print(someSet.contains(1)) // > true 
print(someSet.contains(4)) // > false
```

你还可以使用first和last属性，它们返回集合中的一个元素。 但是，由于集合是无序的，因此你将无法确切知道要获得哪个项目。

#### ***添加和删除元素***

你可以使用insert(_ :)将元素添加到集合中。 如果元素已经存在，则该方法不执行任何操作。

``` Swift
someSet.insert(5)
```

你可以像这样从集合中删除元素：

``` Swift
let removedElement = someSet.remove(1) 
print(removedElement!)
// > 1
```

remove(_ :)返回已删除的元素（如果它在集合中），否则返回nil。

### ***集合操作的时间复杂度***

集具有与字典非常相似的实现，并且它们还要求元素是可哈希的。 所有操作的运行时间与字典相同。

# **关键点**

集合

+ 是相同类型的唯一值的无序集合。
+ 当你需要了解集合中是否包含某些内容时，此功能最为有用。

字典
+ 是键值对的无序集合。
+ 这些键都是同一类型，而值都是同一类型。
+ 使用下标获取值以及添加，更新或删除对。
+ 如果键不在词典中，则查找返回nil。
+ 词典的键必须是符合`Hashable协议`的类型。
+ 基本的Swift类型（例如String，Int，Double）可直接使用Hash。

数组：
+ 是相同类型的值的有序集合。
+ 使用下标或许多属性和方法之一来访问和更新元素。
+ 当心访问超出范围的索引。
