---
title: 'Advanced Swift系列(二): Build-in Collections'
description: 'Advanced Swift系列(二): Build-in Collections'
permalink: 'Advanced Swift系列(二): Build-in Collections'
copyright: ture
date: 2020-05-05 13:44:31
keywords: iOS,Swift,Advanced Swift,Swift学习, Swift进阶
tags:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
    - [Build-in Collections]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Advanced Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在任何编程语言中，元素的 ```集合``` 都是最重要的数据类型之一。 对各种容器的良好语言支持对程序员的工作效率和幸福感有很大影响。  ```Swift``` 特别强调序列和集合-标准库的大部分内容都专门针对该主题，因此我们有时会觉得它处理的很少。 生成的模型比您可能习惯于其他语言的模型具有更高的 ```可扩展性``` ，但是它也相当复杂。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们将介绍 ```Swift``` 附带的主要 ```集合类型``` ，重点是如何有效地和惯用地使用它们。 在本书后面的 ```“集合协议”``` 一章中，我们将爬上 ```抽象阶梯``` ，并了解 ```标准库``` 中的 ```集合协议``` 如何工作。

# **Arrays**

## ***Arrays and Mutability***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```数组``` 是 ```Swift``` 中最常见的 ```集合``` 。  ```数组``` 是所有具有 **```相同类型的元素的有序容器```** ，它提供对每个元素的随机访问。 例如，要创建一个数字数组，我们可以编写以下代码：

``` Swift
// The Fibonacci numbers
let fibs = [0, 1, 1, 2, 3, 5]
```

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果尝试修改上面定义的数组（例如，使用 ```append（_ :)``` ），则会出现编译错误。 这是因为使用 ```let``` 将数组定义为常量。 在很多情况下，这是正确的做法。 它可以防止我们意外更改数组。 如果我们希望数组为变量，则必须使用 ```var``` 进行定义：

``` Swift
var mutableFibs = [0, 1, 1, 2, 3, 5]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以轻松地附加单个元素或元素序列：

``` Swift
mutableFibs.append(8) 
mutableFibs.append(contentsOf: [13, 21]) 
mutableFibs // [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区分 ```var``` 和 ```let``` 有很多好处。 用 ```let``` 定义的常数是 ```不可变的``` ，因此更容易推论。 什么时候
您读了一个类似 ```let fibs= ... ```的声明，您知道 ```fibs``` 的值将永远不会改变-不变性由编译器强制执行。 这在阅读时有很大帮助
通过代码。 但是，请注意，这仅适用于具有 **值语义** 的类型。 包含对类实例的引用的 ```let变量``` 可确保该引用永远不会改变，即，您不能将其他对象分配给该变量。 但是，参考指向的对象可以更改。 我们将在 ```“结构和类”``` 一章中详细介绍这些差异。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```标准库``` 中的所有集合类型一样， ```数组``` 也具有 **值语义** 。 将现有数组分配给另一个变量时，将复制数组内容。 例如，在以下代码片段中， ```x``` 从未修改：

``` Swift
var x = [1,2,3] 
var y=x 
y.append(4)
y // [1, 2, 3, 4] 
x // [1, 2, 3]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语句 ```var y = x``` 复制了 ```x``` ，因此将 ```4``` 附加到 ```y``` 不会更改 ```x-x``` 的值仍为[1、2、3]。 当您将数组传递给函数时，也会发生同样的事情。 该函数接收数组的本地副本，并且所做的任何更改都不会影响调用者。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将此与 ```Foundation``` 中 ```NSArray``` 采取的可变性方法进行比较。  ```NSArray``` 没有变异方法-要变异数组，您需要一个 ```NSMutableArray``` 。 但是，仅仅因为您拥有一个不变的 ```NSArray引用``` 并不意味着该数组无法在您的下方进行突变：

``` Swift
let a = NSMutableArray(array: [1,2,3]) 
// I don't want to be able to mutate b. 
let b: NSArray = a
// But it can still be mutated — via a. 
a.insert(4, at: 3)
b // ( 1, 2, 3, 4 )
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正确的写法是在分配后手动创建一个副本：

``` Swift
let c = NSMutableArray(array: [1,2,3]) 
// I don't want to be able to mutate d. 
let d = c.copy() as! NSArray
c.insert(4, at: 3) 
d // ( 1, 2, 3 )
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的示例中，很明显，我们需要进行复制-毕竟是可变的。 但是，当在 ```方法和函数``` 之间传递数组时，这并不总是那么容易看到。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中，只有一种数组类型，而 ```可变性``` 是通过使用 ```var``` 而不是 ```let声明``` 来控制的。 但是没有引用共享-当您使用 ```let声明``` 第二个数组时，可以确保它永远不会改变。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制作如此多的副本可能会造成性能问题，但是实际上， ```Swift标准库``` 中的所有集合类型都是使用称为 ```写时复制的技术``` 实现的，**该技术可确保仅在必要时才复制数据**。 因此，在我们的示例中，**x和y共享内部存储**，直到调用点 **```y.append```** 。 在“结构和类”一章中，我们将更深入地研究 **值语义** ，包括如何为自己的类型实现**写时复制**：

## ***Array Indexing***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift Array``` 可提供您期望的所有常规操作，例如 ```isEmpty``` 和 ```count``` 。 数组还允许通过下标直接访问特定索引处的元素，例如 ```fibs[3]``` 。 请记住，在通过下标获取元素之前，需要确保索引在范围之内。 提取索引3的元素，最好确保数组中至少包含四个元素。 否则，您的程序将崩溃，
即因致命错误而中止。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 有很多使用数组的方式，而无需您计算索引：

+ →是否希望遍历整个数组？ 用于数组中的x
+ →是否想对数组的第一个元素进行总体评估？ 对于array.dropFirst（）中的x
+ →是否想对所有最后五个要素进行评估？ 对于array.dropLast（5）中的x
+ →想要对数组中的所有元素进行编号？ 用于array.enumerated（）中的（num，element）
+ →是否想找到特定元素的位置？
 如果让idx =array.􏰀rstIndex{someMatchingLogic（$ 0）}
+ →想要在数组中转换所有元素？ array.map {someTransformation（$ 0）}
+ →是否只想获取与特定标准匹配的元素？ array.􏰀lter{someCriteria（$ 0）}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 希望阻止您进行 索引数学运算 的另一个迹象是，从 ```Swift 3``` 的语言中删除了传统的C风格的 ```for循环``` 。手动摆弄索引会产生很多漏洞，因此通常最好避免使用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是有时您必须使用索引。 对于数组索引，期望的是，当您这样做时，您会非常仔细地考虑过索引计算背后的逻辑。 因此必须解开下标操作的值可能是过大的
—这意味着您不信任您的代码。 但是您确实有可能信任代码，所以您可能会求助于对结果进行强制包装，因为您知道索引必须有效。 这是（a）令人讨厌的，并且（b）是要养成的不良习惯。 当强制展开成为常规操作时，最终您将滑倒并强制展开您不想要的东西。 因此，为避免这种习惯成为常规，数组不给您选择的余地。

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管可以说对下标操作进行响应以控制崩溃的下标操作可以称为不安全，但这只是安全性的一个方面。 就内存安全而言，下标是绝对安全的-标准库集合始终执行边界检查，以防止越界索引进行未经授权的内存访问。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他操作的行为有所不同。 第一个和最后一个属性返回一个可选值，如果数组为空，则为 ```nil``` 。  ```first``` 等于 ```isEmpty``` 吗？ 无：```self[0]```。 同样，如果您在空数组上调用 ```removeLast``` 方法，则会捕获该方法，而如果数组不为空，则 ```popLast``` 将仅删除并返回最后一个元素，否则它将不执行任何操作并返回 ```nil``` 。 您要使用哪一个取决于您的用例。 当您将数组作为堆栈使用时，您可能总是希望结合使用检查空和删除最后一个条目。 另一方面，如果您已经知道数组是否为空，那么处理可选对象就很麻烦了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章的后面，当我们谈论字典时，我们将再次遇到这些折衷。 此外，有一整章专门介绍可选内容。

## ***转换数组***

### ***map***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常需要对数组中的每个值执行转换。 每个程序员都写过类似的代码数百次：创建一个新的数组，遍历现有数组中的所有元素，对一个元素执行操作，并将该操作的结果附加到新数组中。 例如，以下代码对整数数组求平方：

``` Swift
var squared: [Int] = [] 
for fib in fibs {
    squared.append(fib * fib) 
}
squared // [0, 1, 1, 4, 9, 25]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Swift``` 数组具有 ```map方法``` ，该方法从函数世界中采用编程。 使用 ***map*** 的操作完全相同：


``` Swift
let squares = fibs.map{ fib in fib*fib }
squares // [0, 1, 1, 4, 9, 25]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此版本具有三个主要优点。当然要短一些。错误的余地也更少了。但更重要的是，它更清楚：所有杂物都已消除。一旦习惯了无所不在地查看和使用 map ，它就可以作为信号-您看到 map 后，便会立即知道发生了什么：**一个函数将应用于每个元素，并返回经过转换的元素的新数组**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不再需要使用 ```var``` 来声明平方，因为我们不再对它进行变异-它会从完整形成的 map 中提供，因此我们可以在适当的情况下使用 ```let声明平方``` 。并且由于可以从传递给 ```map``` 的函数中推断内容的类型，因此不再需要明确键入 ```squares``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```map方法``` 并不难编写-只是将for循环的样板部分包装为通用函数的问题。这是一种可能的实现方式（尽管在Swift中，它实际上是 ```Sequence协议``` 的扩展，我们将在Collection Protocols一章中介绍）：

``` Swift
extension Array {
func map<T>(_ transform: (Element) -> T) -> [T] {

    var result: [T] = [] 
    result.reserveCapacity(count) 
    for x in self{
        result.append(transform(x)) 
    }

    return result
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Element``` 是数组包含的任何类型的 ```通用占位符``` ，而 ```T``` 是表示元素转换结果的 ```新占位符``` 。 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```map``` 功能本身并不关心 ```元素``` 和 ```T``` 是什么。 他们可以是任何东西。 转换元素的具体 ```类型T``` 由 ```调用者传递给映射的转换函数的返回类型定义``` 。 有关通用参数的详细信息，请参见 ```“通用”``` 一章。


>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确实，此方法的签名应为```func map <T>（__ transform：（Element）throws-> T）rethrows-> [T]```，表示映射将转换功能可能抛出的任何错误转发给调用者。 我们将在 ```“错误”``` 一章中对此进行详细介绍，但是在这里，为简单起见，我们省略了错误处理注释。 如果需要，您可以在 ```GitHub``` 的 ```Swift``` 存储库中检出 ```Sequence.map``` 的源代码。

### ***用函数参数化行为***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使您已经熟悉 ```map``` ，也请花点时间考虑一下 ```map``` 的实现。 是什么使它如此通用却如此有用？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```map``` 设法将 样板 与每次调用的功能区分开来，即每次调用之间都没有变化，即逻辑上如何精确转换每个元素。 它通过调用者提供的参数来完成此操作： ```转换函数``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在整个标准库中都可以找到这种 参数化行为模式 。 例如，在 ```Array``` （以及其他种类的集合）上有十几个单独的方法，它们带有一个函数来自定义其行为：

+ → **```map```** and **```flatMap```** - 转换元素
+ → **```filter```** - 仅包含某些元素
+ → **```allSatisfy```** — 满足条件的测试要素
+ → **```reduce```** — 将元素折叠为合计值
+ → **```forEach```** —访问
+ → **```sort（by :)```**， **```sorted（by :```**) ， **```lexicographicallyPrecedes（_：by :)```** 和 **```partition（by :)```** —重新排列元素
+ → **```firstIndex（where :) ```**，**```lastIndex（where :)```**，**```first（where :)```**，**```last（where :)```**和 **```contains（where :)```**  — 元素是否存在？
+ → **```min（by :)```** 和 **```max（by :)```** -查找最小的 **```mumormaximumo```** 元素
+ → **```elementsEqual（_：by :)```** 和 **```starts（with：by :)```**  — 比较元素到另一个元素
数组
+ → **```split（whereSeparator :)```** - 将元素分解为多个数组
+ → **```prefix（while :) ```**- 只要条件成立，就从头开始采集元素
+ → **```drop（while :)```** -在条件变为真之前丢弃元素，然后返回其余元素（类似于 ```prefix``` ，但这返回相反的值）
+ → **```removeAll（where :)```** - 删除符合条件的要素

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有这些功能的目标是消除代码中不感兴趣的部分的混乱情况，例如创建新数组和对源数据进行 for循环 。取而代之的是，用一个描述正在做什么的单词来代替混乱。这将重要的代码（程序员想要表达的逻辑）带到了最前沿。
其中一些功能具有默认行为。  sort 会在元素具有可比性时按升序排序（除非另行指定），并且只要元素是等价的， contains 就可以接受一个值进行检查。这些默认值有助于使代码更具可读性。升序排序是很自然的，因此 ```array.sort（）``` 的含义很直观，而 ```array.firstIndex（of：“ foo”）``` 比 ```array.firstIndex{$ 0 ==“ foo”}```。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是在每种情况下，这些只是常见情况的简写。元素不必具有可比性或相等性，也不必比较整个元素-您可以按年龄对一组人进行排序```（people.sort {$ 0.age <$ 1.age}）```或检查是否该数组包含未成年人```（people.contains {$ 0.age <18}）```。您还可以比较元素的某种变换。例如，公认的低效率不区分大小写和语言环境的排序可以通过 ```people.sort {$ 0.name.uppercased（）<$ 1.name.uppercased（）```} 执行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有其他用途相似的功能，它们也需要指定其行为的功能，但这些功能不在标准库中。您可以轻松地自己定义它们（并且可以尝试）：
+ → **```accumulate```** - 将组合元素合并到一个运行值数组中（减少，但返回每个临时组合的数组）
+ → **```count（where :)```** - 计算要匹配的元素数（这应该是Swift 5.0标准库的一部分，但是由于与count属性的名称冲突而延迟；不过可能会在后续发行版中重新引入）
+ → **```indexs（where :)```** - 返回与条件匹配的条件（类似于 ```firstIndex（where :)```，但它并不止于第一个）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果发现自己遍历一个数组以在代码中多次执行相同或相似的任务，请考虑为 ```Array``` 编写一个简短的扩展。例如，以下代码将数组拆分为相邻的相等元素的组：

``` Swift
let array: [Int] = [1, 2, 2, 2, 3, 4, 4]
var result: [[Int]] = array.isEmpty ? [] : [[array[0]]]
for (previous, current) in zip(array, array.dropFirst()) {
    if previous == current { 
        result[result.endIndex-1].append(current)
    } else { 
        result.append([current])
    } 
}
result // [[1], [2, 2, 2], [3], [4, 4]]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过根据应用程序之间不同的逻辑（决定在何处拆分数组）提取成对在相邻元素对中成对循环遍历数组的代码来形式化此算法。 我们使用函数参数来允许调用者自定义后者：

``` Swift
extension Array {
func split(where condition: (Element, Element) -> Bool) -> [[Element]] {
    var result: [[Element]] = array.isEmpty ? [] : [[self[0]]] 
    for (previous, current) in zip(self, self.dropFirst()) {
        if condition(previous, current) {
            result.append([current]) }
        else {
            result[result.endIndex-1].append(current) }
        }
    return result }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这使我们可以将 ```for循环``` 替换为以下内容：

``` Swift
let parts = array.split { $0 != $1 }
parts // [[1], [2, 2, 2], [3], [4, 4]]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，在这种特殊情况下，我们甚至可以写：

``` Swift
let parts2 = array.split(where: !=)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这具有我们为 ```map``` 描述的所有相同优势。 使用 ```split（where :)``` 的示例比使用 ```for循环``` 的示例更具可读性； 即使 ```for循环``` 很简单，您仍然必须在脑子里遍历循环，这是一个小的精神负担。 使用 ```split（where :)``` 引入错误的机会更少（例如，意外忘记了数组为空的情况），它允许您使用 ```let``` 而不是 ```var声明``` 结果变量。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本书的后面，我们将详细介绍扩展集合和使用功能。

### ***Mutation and Stateful Closures***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遍历数组时，可以使用 ```map``` 产生副作用（例如，将元素插入到一些查找表中）。 我们不建议您这样做。 看一下以下内容：

``` Swift
array.map { 
    item in table.insert(item)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这在看起来像数组转换的构造中隐藏了副作用（查找表的 ```mutation``` ）。 如果您看到以上类似的内容，那么很明显
使用普通的 ```for循环``` 而不是诸如 ```map之类``` 的函数的情况。 在这种情况下， ```forEach方法``` 也比 ```map``` 更合适，但是它有其自身的问题，因此我们稍后再讨论 ```forEach``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行副作用不同于故意赋予封闭局部状态，这是一种特别有用的技术。 除了有用之外， ```闭包``` （可以捕获超出范围范围内的变量并对其进行突变的函数）的强大功能也是与 ```高阶函数``` 结合使用时的强大工具。 例如，可以使用 ```map``` 和 ```有状态``` 的 ```闭包``` 来实现上述累加函数，如下所示：

``` Swift
extension Array {
    func accumulate<Result>(_ initialResult: Result,
    _ nextPartialResult: (Result, Element) -> Result) -> [Result] {
        var running = initialResult return map { next in
            running = nextPartialResult(running, next)
            return running 
        }
    } 
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这将创建一个临时变量来存储运行值，然后在计算过程中使用 ```map``` 创建一个运行值数组：

``` Swift
[1,2,3,4].accumulate(0, +) // [1, 3, 6, 10]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，此代码假定 ```map``` 在整个序列上按顺序执行其转换。 就我们上面的 ```map``` 而言，确实如此。 但是有些实现可能会无序地转换序列，例如，同时执行元素转换的实现。 ```map``` 的官方标准库版本没有指定是否按顺序转换序列，尽管看起来可以这么做。

### ***filter***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个非常常见的操作是获取一个数组并创建一个仅包含符合特定条件的元素的新数组。 过滤器方法捕获在数组上循环并选择与给定谓词匹配的元素的模式：

``` Swift
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.filter { num in num % 2 == 0 } // [2, 4, 6, 8, 10]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将 ```Swift``` 的速记符号用于闭包表达式的参数，以使其更短。 不用命名 ```num参数``` ，我们可以这样编写上面的代码：

``` Swift
nums.filter { $0 % 2 == 0 } // [2, 4, 6, 8, 10]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于非常短的 ```闭包``` ，这可能更具可读性。 如果 ```闭包``` 更为复杂，则像我们之前所做的那样，显式命名几乎总是一个更好的主意。 这实际上是个人喜好问题，一目了然地选择更易读的选项。 一个好的经验法则是：如果闭包整齐地适合一行，则速记参数名称是一个很好的选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过组合 ```map``` 和 ```filter``` ，我们可以在数组上编写很多操作，而不必引入单个中间变量。 结果代码将变得更短，更易于阅读。 例如，要查找所有小于100的偶数平方，我们可以映射范围 ```1..<10``` 以便平方其成员，然后可以滤除所有奇数：

``` Swift
(1..<10).map { $0 * $0 }.filter { $0 % 2 == 0 } // [4, 16, 36, 64]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```filter``` 的实现类似于 ```map``` ：

``` Swift
extension Array {
    func filter(_ isIncluded: (Element) -> Bool) -> [Element] {
        var result: [Element] = []
        for x in self where isIncluded(x) {
            result.append(x) 
        }
    return result 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个快速的性能提示：如果您发现自己写了如下内容，那就停下来！

``` Swift
bigArray.filter { someCondition }.count > 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```filter``` 将创建一个全新的数组并处理该数组中的每个元素。 但这是不必要的。 这段代码只需要检查一个元素是否匹配，在这种情况下， ```contains（where :)``` 就可以完成工作：

``` Swift
bigArray.contains { someCondition }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这要快得多，有两个原因：它不会为过滤的元素创建一个全新的数组，只是为了对它们进行计数，并且它会在找到第一个匹配项后立即退出。 通常，仅在需要所有结果时才使用 ```filter``` 。

### ***reduce***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```map``` 和 ```filter``` 都采用一个数组，并产生一个新的修改后的数组。 但是，有时您可能希望将所有元素组合为一个新值。 例如，总结所有元素，我们可以编写以下代码：

``` Swift
let fibs = [0, 1, 1, 2, 3, 5]
var total = 0 
for num in fibs {
    total = total + num 
}
total // 12
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```reduce方法``` 采用这种模式，并抽象出两个部分：初始值（在这种情况下为零），以及组合中间值（总计）和元素（num）的函数。 使用 ```reduce``` ，我们可以编写如下相同的示例：

``` Swift
let sum = fibs.reduce(0) { total, num in 
    total + num 
} // 12
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运算符也是函数，因此我们也可以编写相同的示例，如下所示：

``` Swift
fibs.reduce(0, +) // 12
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```reduce``` 的输出类型不必与元素类型相同。 例如，如果要将整数列表转换为字符串，每个数字后跟一个逗号和一个空格，则可以执行以下操作：

``` Swift
fibs.reduce("") { str, num in 
    str + "\(num), " 
} // 0, 1, 1, 2, 3, 5,
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是 ```reduce``` 的实现：

``` Swift
extension Array {
func reduce<Result>(_ initialResult: Result,
_ nextPartialResult: (Result, Element) -> Result) -> Result {
    var result = initialResult 
    for x in self {
        result = nextPartialResult(result, x) 
    }
    return result 
    }
}

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个性能提示： ```reduce``` 非常灵活，通常会看到它用于构建阵列和执行其他操作。 例如，您可以仅使用 ```reduce``` 来实现 ```map``` 和 ```filter``` ：

``` Swift
extension Array {
func map2<T>(_ transform: (Element) -> T) -> [T] {
    return reduce([]) {
        $0 + [transform($1)]
    } 
}

func filter2(_ isIncluded: (Element) -> Bool) -> [Element] { 
    return reduce([]) {
        isIncluded($1) ? $0 + [$1] : $0 }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这很漂亮，它的好处是不需要那些讨厌的命令循环。 但是 ```Swift``` 不是 ```Haskell``` ， ```Swift数组``` 也不是列表。 这里发生的事情是，每次执行合并功能时，都会通过将转换后的元素或包含的元素附加到前一个元素来创建一个全新的数组。 这意味着这两个实现都是 ```O（n2）``` ，而不是 ```O（n）``` -随着数组长度的增加，这些函数所花费的时间成倍增加。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有另一个 ```reduce``` 的版本，它的类型不同。 更具体地说，用于组合中间结果和元素的函数将 ```Result``` 作为 ```inout``` 参数：

``` Swift
public func reduce<Result>(into initialResult: Result, _ updateAccumulatingResult:
(_ partialResult: inout Result, Element) throws -> () ) rethrows -> Result
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在 ```“结构和类”``` 一章中详细讨论 ```inout参数``` ，但是现在，将 ```inout Result参数``` 视为可变参数：我们可以在函数中对其进行修改。 这使我们能够以更有效的方式编写过滤器：

``` Swift
extension Array {
func filter3(_ isIncluded: (Element) -> Bool) -> [Element] {
        return reduce(into: []) { result, element in 
            if isIncluded(element) {
                result.append(element) 
            }
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```inout``` 时， 编译器 不必每次都创建一个新数组，因此 ```filter``` 的这个版本也是 ```O(n)```。 当编译器内联调用 ```reduce(into: _ :)``` 时，生成的代码通常与使用 ```for循环``` 时相同。

### ***A Flattening map***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时，您想映射一个数组，其中转换函数将返回另一个数组而不是单个元素。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，假设我们有一个函数 ```extractLinks``` ，该函数接受 ```Markdown文件``` 并返回一个数组，其中包含文件中所有链接的 ```URL``` 。 函数签名如下所示：

``` Swift
func extractLinks(markdownFile: String) -> [URL]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们有一堆 ```Markdown文件``` ，并且想要将所有文件中的链接提取到单个数组中，我们可以尝试编写诸如 ```markdownFiles.map(extractLinks)``` 之类的东西。 但这会返回包含 ```URL``` 的 ```array of arrays``` ：每个文件一个 ```array of arrays``` 。 现在，您可以执行映射，取回一个数组，然后调用 ```join``` 将结果展平为单个数组：

``` Swift
let markdownFiles: [String] = // ...
let nestedLinks = markdownFiles.map(extractLinks) 
let links = nestedLinks.joined()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```flatMap方法``` 将映射和展平这两个操作组合到一个步骤中。 因此 ```markdownFiles.flatMap(extractLinks)``` 将 ```Markdown文件``` 数组中的所有 ```URL``` 作为单个数组返回。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Map\flatMap``` 的签名几乎与map相同，不同之处在于其转换函数返回一个数组。 该实现使用 ```append（contentsOf :)``` 而不是```append（_ :)```来展平结果数组：

``` Swift
extension Array {
    func flatMap<T>(_ transform: (Element) -> [T]) -> [T] {
        var result: [T] = [] 
        for x in self{
            result.append(contentsOf: transform(x)) 
        }
        return result 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```flatMap``` 的另一个很好的用例是组合来自不同数组的元素。 要获取两个数组中所有可能的元素对，请在一个数组上使用 ```flatMap``` ，然后在内部转换函数中在另一个数组上进行映射：

``` Swift
let suits = ["♠", "♥", "♣", "♦"]
let ranks = ["J", "Q", "K", "A"]
let result = suits.flatMap { suit in
        ranks.map { rank in (suit, rank)
        } 
    }
/*
[("♠", "J"), ("♠", "Q"), ("♠", "K"), ("♠", "A"), ("♥", "J"), ("♥",
"Q"), ("♥", "K"), ("♥", "A"), ("♣", "J"), ("♣", "Q"), ("♣", "K"),
("♣", "A"), ("♦", "J"), ("♦", "Q"), ("♦", "K"), ("♦", "A")]
 */
```

### ***使用 forEach 进行迭代***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要讨论的最后一个操作是 ```forEach``` 。 它几乎像 ```for循环``` 一样工作：传入的函数对序列中的每个元素执行一次。 与 ```map``` 不同， ```forEach``` 不会返回任何内容-它专门用于产生副作用。 首先，以机械方式将循环替换为 ```forEach``` ：

``` Swift
for element in [1, 2, 3] { 
    print(element)
}

[1, 2, 3].forEach { element in 
    print(element)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这不是一个大的胜利，但是如果您要执行的操作是对集合中每个元素的单个函数调用，则可能会很方便。 将函数名传递给 ```forEach``` 而不是 ```传递闭包表达式``` 可以导致代码更清晰，更简洁。 例如，如果您要在 ```iOS``` 上编写视图控制器，并想向主视图添加一个子视图数组，则可以只使用 ```theViews.forEach（view.addSubview）```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是， ```for循环``` 和 ```forEach``` 之间有一些细微的差异。 例如，如果 ```for循环``` 中包含 ```return语句``` ，则使用 ```forEach重写``` 它可以显着改变代码的行为。 考虑以下示例，该示例是使用带 ```where条件``` 的 ```for循环``` 编写的：

``` Swift
extension Array where Element: Equatable { 
    func firstIndex(of element: Element) -> Int? {
        for idx in self.indices where self[idx] == element { 
            return idx
        }
        return nil
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们无法直接在 ```forEach``` 构造中复制 ```where子句``` ，因此我们可能会（错误地）使用 ```flter重写``` 此子句：

``` Swift
extension Array where Element: Equatable {
    func firstIndex_foreach(of element: Element) -> Int? {
        self.indices.filter { idx in
            self[idx] == element }.forEach { idx in
                return idx
            }
        return nil
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```forEach闭包``` 内部的返回值不会从外部函数中返回； 它仅从闭包本身返回。 在这种情况下，我们可能已经找到了该错误，因为编译器会生成一条警告，指出未使用 return语句 的参数，但是您不应依赖它来发现所有此类问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，请考虑以下示例：

``` Swift
(1..<10).forEach { number in 
    print(number) 
    if number>2 {
        return
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在还不能立即打印出输入范围内的所有数字。  ```return``` 语句不会中断循环； 而是从 ```闭包``` 中返回，从而开始 ```forEachs``` 实现中循环的新迭代。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些情况下，例如上面的 ```addSubview``` 示例， ```forEach``` 可能比 ```for循环``` 更好。 但是，由于返回的行为不明显，因此建议不要将 ```forEach``` 的大多数其他用法用于其他用途。 只需使用常规的 ```for循环``` 即可。

### ***数组切片***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了通过下标访问数组的单个元素（例如fibs[0]）之外，我们还可以通过下标检索一系列元素。 例如，要获取除数组的第一个元素以外的所有元素，我们可以执行以下操作：

``` Swift
let slice = fibs[1...]
slice // [1, 1, 2, 3, 5]
type(of: slice) // ArraySlice<Int>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从第二个元素开始，这使我们获得了数组的一部分。 结果的类型是 ```ArraySlice``` ，而不是 ```Array``` 。  ```ArraySlice``` 是阵列视图。 它由原始数组支持，但仅提供切片视图。 因此，创建切片不会占据太多资源-不会复制数组元素。

![ArraySlice](http://q8wtfza4q.bkt.clouddn.com/asbc-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```ArraySlice类型``` 具有与 ```Array``` 定义的方法相同的方法（因为两者都遵循相同的协议，最重要的是 ```Collection``` ），因此您可以像使用数组一样使用切片。 如果确实需要将切片转换为数组，则可以从切片中构造一个新数组：

``` Swift
let newArray = Array(slice) 
type(of: newArray) // Array<Int>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请务必记住，切片使用的索引与其基集合使用的索引相同，以引用特定的元素。 因此，切片索引不一定从零开始。 例如，我们上面创建的 ```fibs[1 ...]``` ```slice``` 的第一个元素在索引1处，错误地访问 ```slice [0]``` 将使我们的程序崩溃，并超出范围。 如果您使用索引，即使您要处理的是索引，我们也建议您始终以 ```startIndex``` 和 ```endIndex属性``` 为基础进行计算
普通数组，其中 ```0``` 和 ```count-1``` 也可以解决问题。 这种隐含的假设以后很容易打破，这太容易了。

</br>

# **Dictionaries**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个关键数据结构是 **字典** 。 **词典包含具有相应值的唯一键**。 通过其键检索值平均需要花费固定时间，而在数组中搜索特定元素则随数组大小线性增长。 与数组不同，**字典没有顺序**。 在 ```for循环``` 中枚举 ```键/值对``` 的顺序是不确定的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以下示例中，我们将字典用作智能手机应用程序中虚构设置屏幕的模型数据。 屏幕由一系列设置组成，每个单独的设置都有一个名称（我们字典中的键）和一个值。 值可以是几种数据类型之一，例如文本，数字或布尔值。 我们使用带有关联值的枚举对此建模：

``` Swift
enum Setting { 
    case text(String) 
    case int(Int) 
    case bool(Bool)
}
let defaultSettings: [String:Setting] = [ 
    "Airplane Mode": .bool(false), 
    "Name": .text("My iPhone"),
]
defaultSettings["Name"] // Optional(Setting.text("My iPhone"))
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们使用下标来获取设置的值。 字典查找始终返回一个可选值-当 **指定的键不存在时，它返回 nil** 。 将此与数组进行比较，这些**数组通过使程序崩溃来响应越界访问**。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字典还具有一个下标，该下标带有一个索引（与通常的下标带有一个键相反），这是它们与 ```Collection协议``` 一致的一部分。 与数组下标一样，使用无效索引调用该下标时会捕获陷阱。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种差异的基本原理是数组索引和字典键的用法非常不同。 我们已经看到，实际上很少需要直接使用数组索引的情况。 而且，如果这样做，通常会以某种方式直接从数组派生数组索引（例如，从 ```0 ..<array.count``` 之类的范围）； 因此，使用**无效索引是程序员错误**。 另一方面，字典键通常来自某些来源，而不是要订阅的字典。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与数组不同，**字典也是稀疏** 的。 ***键“名称”下的值的存在不会告诉您键“地址”是否也存在***。

## ***Mutating Dictionaries***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就像数组一样，使用 ```let定义的字典是不可变的``` ：**不能 添加，删除或更改任何条目** 。 就像数组一样，我们可以使用 ```var定义可变的变体``` 。 要从字典中删除值，我们可以使用下标将其设置为 nil 或 ```调用removeValue（forKey :)```。 后者还会返回已删除的值，如果键不存在，则返回 ```nil``` 。 如果我们要使用不可变的字典并对其进行更改，则必须制作一个副本：

``` Swift
var userSettings = defaultSettings 
userSettings["Name"] = .text("Jared's iPhone") 
userSettings["Do Not Disturb"] = .bool(true)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请再次注意， ```defaultSettings``` 的**值没有改变**。 与删除键一样，通过下标更新的替代方法是 ```updateValue（_：forKey :)``` 方法，该方法返回先前的值（如果有）：

``` Swift
let oldName = userSettings
.updateValue(.text("Jane's iPhone"), forKey: "Name")
userSettings["Name"] 
// Optional(Setting.text("Jane\'s iPhone")) 
oldName
 // Optional(Setting.text("Jared\'s iPhone"))
```

## ***Useful Dictionary Methods***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想将默认设置字典与用户已更改的任何自定义设置结合起来怎么办？ 自定义设置应覆盖默认设置，但生成的字典仍应包括尚未自定义的所有键的默认值。 本质上，我们***要合并两个字典，其中要合并的字典会覆盖重复的键***。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字典有一个 **```merge（_：uniquingKeysWith :)方法```** ，该方法将要合并的键值对和一个指定如何将两个值与同一键组合的函数。 我们可以使用它来将一个字典合并为另一个字典，如以下示例所示：

``` Swift
var settings = defaultSettings
let overriddenSettings: [String:Setting] = ["Name": .text("Jane's iPhone")] 
settings.merge(overriddenSettings, uniquingKeysWith: { $1 })
settings
// ["Name": Setting.text("Jane\'s iPhone"), "Airplane Mode": Setting.bool(false)]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的示例中，我们使用 ```{$1}``` 作为组合两个值的策略。 换句话说，如果键同时存在于设置和 ```overriddenSettings``` 中，则使用 ```overriddenSettings``` 中的值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以从```（Key，Value）```对序列中构造一个新字典。 如果我们保证键是唯一的，则可以使用 ```Dictionary（uniqueKeysWithValues :) ```。 但是，如果我们有一个键可以多次存在的序列，则需要像上面一样提供一个函数来组合相同键的两个值。 例如，要计算元素在序列中出现的频率，我们可以映射每个元素，将其与1组合，然后从所得的元素频率对中创建字典。 如果我们遇到同一键的两个值（换句话说，如果我们多次看到相同的元素），则只需使用 ```+``` 将 ```frequencies``` 相加：

``` Swift
extension Sequence where Element: Hashable { var frequencies: [Element:Int] {
    let frequencyPairs = self.map { ($0, 1) }
        return Dictionary(frequencyPairs, uniquingKeysWith: +) 
    }
}
let frequencies = "hello".frequencies // ["h": 1, "e": 1, "l": 2, "o": 1] frequencies.filter { $0.value > 1 } // ["l": 2]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个有用的方法是在字典的值上映射。 因为 ```Dictionary``` 是一个 ```Sequence``` ，所以它已经具有一个产生数组的 ```map方法``` 。 但是，有时我们希望保持 ```字典结构``` 完整，只变换其值。 ```mapValues方法``` 执行此操作：

``` Swift
let settingsAsStrings = settings.mapValues { setting -> String in switch setting {
    case .text(let text): return text
    case .int(let number): return String(number) 
    case .bool(let value): return String(value)
    }
}
settingsAsStrings // ["Name": "Jane\'s iPhone", "Airplane Mode": "false"]
```

## ***Hashable Requirement***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**字典是哈希表**。字典根据密钥的 ```hashValue``` 在其**基础存储阵列中为其分配位置**。这就是为什么 ```Dictionary``` 要求其 ```Key类型符合Hashable协议``` 的原因。标准库中的所有基本数据类型（包括字符串，整数，浮点数和布尔值）都已经具备。此外，如果其他**许多类型的元素是可哈希的，则它们会自动变为可哈希的，例如数组，集合和可选对象**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了保持性能，**哈希表要求存储在其中的类型提供良好的哈希函数，不会产生太多冲突**。编写出色的哈希函数以将其输入均匀地分布在整个整数范围内并不容易。幸运的是，我们几乎不需要自己做。在许多情况下，编译器都可以生成```Hashable一致性```，即使这不适用于特定类型，标准库也带有自定义类型可以插入的内置哈希函数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于**结构和枚举**，只要它们本身由可```哈希类型```组成，```Swift```可以自动为我们合成```可哈希一致性```。如果一个结构的所有存储属性都是可哈希的，则该结构本身可以符合 ```Hashable``` ，而无需我们编写手动实现。类似地，仅包含可哈希散列的关联值的枚举可以遵循（没有关联值的枚举甚至符合Hashable，而无需明确声明该符合性）。这不仅可以节省初始实施工作，而且还可以在添加或删除属性时自动使实施保持最新。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您无法利用自动的 ```Hashable综合功能``` （因为您正在编写一个类，或者您的自定义结构具有一个或多个出于散列目的而应被忽略的存储属性），则首先需要将 ```Equatable类型``` 设置为 ```Equatable``` 。然后，您可以实现 ```Hashable协议的hash（into :)``` 要求（不建议使用旧的pre-Swift 4.2以前的实现hashValue属性的方法）。此方法接收一个 ```哈希器``` ，该哈希器包装通用 ```哈希函数``` 并在客户端将数据馈入哈希函数时捕获哈希函数的状态。哈希器具有一个 ```combination方法``` ，该方法接受任何可哈希值。您应该通过以下方式将所有类型的基本组件送入哈希器
让他们一一结合。基本组成部分是构成该类型实体的属性-您通常需要排除可以延迟重新创建的瞬态属性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您应使用相同的基本组件进行相等性检查，因为以下重要不变式必须成立：**两个相等的实例（由==实现定义）必须具有相同的哈希值**。反之则不成立：两个具有相同哈希值的实例不一定会相等地进行比较。考虑到只有有限数量的不同哈希值，而许多可哈希类型（如字符串）实际上具有无限基数，这是有道理的。


>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库的通用哈希函数使用随机种子作为其输入之一。 换句话说，在每个程序执行时，字符串“abc”的哈希值将有所不同。 随机种子植入是一种安全措施，可防止有针对性的无序哈希拒绝服务攻击。 自字典并按其在哈希表中存储的顺序设置其元素的迭代，并且由于此顺序由哈希值确定，因此这意味着同一代码在每次启动时都会产生不同的迭代顺序。 如果您需要确定性的哈希值（例如用于测试），则可以通过设置环境变量 ```SWIFT_DETERMINISTIC_HASHING = 1``` 来禁用随机种子设置，但在生产环境中请勿这样做。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，在**使用没有值语义的类型时要格外小心（例如可变对象）作为字典键**。 如果您在将对象用作字典键后以某种方式对其进行了更改（即更改其哈希值和/或相等性），则您将无法在字典中再次找到该对象。 现在，词典将对象存储在错误的插槽中，从而有效地破坏了其内部存储。 值类型不是问题，因为字典中的键不会共享副本的存储空间，因此无法从外部进行突变。

</br>

# **Sets**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中的第三个主要集合类型是 ```Set``` 。 **集合是元素的无序集合，每个元素仅出现一次**。 本质上，***您可以将集合视为仅存储键而没有值的字典***。 与字典一样，```集合是通过哈希表实现的```，并且具有相似的性能特征和要求。 测试集合中的成员资格值是一项恒定时间操作，并且集合元素必须是可哈希的，就像字典键一样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您需要有效地测试成员资格（对数组进行```O（n）```操作）并且元素的顺序并不重要，或者需要确保集合不包含重复项时，请使用集合而不是数组。 ```Set``` 符合 ```ExpressibleByArrayLiteral协议```，这意味着我们可以使用以下数组文字对其进行初始化：

``` Swift
let naturals: Set = [1, 2, 3, 2] 
naturals // [2, 3, 1] 
naturals.contains(3) // true 
naturals.contains(0) // false
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，数字2在集合中仅出现一次； 副本甚至都不会被插入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像所有集合一样，集合支持我们已经看到的常见操作：您可以遍历 ```for循环``` 中的元素，映射或过滤它们，并执行其他所有操作。

## ***设置代数***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾名思义， ```Set``` 与 ```集合``` 的数学概念密切相关。 它支持您在数学课中学习的所有常见设置操作。 例如，我们可以从另一组减去一组：

``` Swift
let iPods: Set = ["iPod touch", "iPod nano", "iPod mini", "iPod shuffle", "iPod classic"]
let discontinuedIPods: Set = ["iPod mini", "iPod classic", "iPod nano", "iPod shuffle"]
let currentIPods = iPods.subtracting(discontinuedIPods) // ["iPod touch"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以形成两个集合的交集，即找到两个集合中的所有元素：

``` Swift
let touchscreen: Set = ["iPhone", "iPad", "iPod touch", "iPod nano"] let iPodsWithTouch = iPods.intersection(touchscreen)
// ["iPod touch", "iPod nano"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;或者，我们可以形成两个集合的并集，即将它们合并为一个集合（当然，删除重复项）：

``` Swift

var discontinued: Set = ["iBook", "PowerBook", "Power Mac"]
discontinued.formUnion(discontinuedIPods)
discontinued
/*
["iPod shuffle", "Power Mac", "iBook", "iPod classic", "PowerBook",
"iPod mini", "iPod nano"] */
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，我们使用了变异变体 ```formUnion``` 来变异原始集合（结果，原始集合必须用var声明）。 几乎所有设置操作都具有 ```非变异形式``` 和 ```变异形式``` ，后者具有形式前缀。 要进行更多设置操作，请查看 ```SetAlgebra协议``` 。

## ***索引集和字符集***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Set``` 和 ```OptionSet``` 是标准库中唯一符合 ```SetAlgebra的类型``` ，但是 ```Foundation``` 中两个有趣的类型也采用了此协议： ```IndexSet``` 和 ```CharacterSet``` 。这两件事都可以追溯到很久以前的 ```Swift``` 时代。现在，这些和其他 ```Objective-C类``` 作为功能齐全的值类型被桥接到 ```Swift``` 中的方式（在此过程中采用通用的标准库协议）是很棒的，因为它们会使 ```Swift开发人员``` 立即感到熟悉。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```IndexSet``` 代表一组正整数值。当然，您可以使用 ```Set<Int>``` 来完成此任务，但是 ```IndexSet``` 的存储效率更高，因为它内部使用了一系列范围。假设您有一个包含1,000个元素的表视图，并且想使用一个集合来管理用户选择的行的索引。```Set<Int>``` 最多需要存储1,000个元素，具体取决于选择的行数。另一方面， ```IndexSet``` 存储连续的范围 ，因此表中前500行的选择仅需要存储两个整数（选择的上下限）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，作为 ```IndexSet的用户``` ，您不必担心内部结构，因为它完全隐藏在熟悉的 ```SetAlgebra``` 和 ```Collection接口``` 后面。 （除非您想直接在范围上工作，也就是说， ```IndexSet``` 通过其本身是一个集合的 ```rangeView属性``` 向它们公开一个视图。）例如，您可以向索引集添加一些范围，然后映射到索引好像它们是个人成员一样：

``` Swift
var indices = IndexSet()
indices.insert(integersIn: 1..<5)
indices.insert(integersIn: 11..<15)
let evenIndices = indices.filter { $0 % 2 == 0 } // [2, 4, 12, 14]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```CharacterSet``` 是存储一组 ```Unicode代码点``` 的等效方法。 通常用于检查特定字符串是否仅包含来自特定字符子集的字符，例如字母数字或十进制数字。 但是，与 ```IndexSet``` 不同， ```CharacterSet``` 不是集合。 从 ```Objective-C``` 导入的 ```CharacterSet``` 名称在 ```Swift``` 中是不幸的，因为 ```CharacterSet``` 与 ```Swift``` 的 ```Character类型``` 不兼容。 更好的名称是 ```UnicodeScalarSet``` 。 我们将在 ```“字符串”``` 一章中进一步讨论 ```CharacterSet``` 。

## **在闭包内部使用Set**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```字典和集合``` 可以是在函数内部使用的非常方便的数据结构，即使您没有将它们暴露给调用者也是如此。 例如，如果要在 ```Sequence``` 上编写扩展名以检索序列中的所有唯一元素，则可以轻松地将元素放入集合中并返回其内容。 但是，这将不稳定：由于集合没有定义的顺序，因此输入元素可能会在结果中重新排序。 为了解决这个问题，我们可以编写一个扩展，通过使用内部Set进行记录来维护顺序：

``` Swift
extension Sequence where Element: Hashable { 
    func unique() -> [Element] {
        var seen: Set<Element> = [] 
        return filter { element in
            if seen.contains(element) { 
                return false
            }else{ 
                seen.insert(element) return true
            } 
        }
    } 
}

[1,2,3,12,1,3,4,5,6,4,6].unique() // [1, 2, 3, 12, 4, 5, 6]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的方法使我们能够找到序列中的所有唯一元素，同时仍然保持原始顺序（约束条件是元素必须是可哈希的）。 在闭包内部，我们传递给 ```filter``` ，我们引用在闭包外部定义的变量，从而在闭包的多次迭代中保持状态。 在 ```“函数”``` 一章中，我们将更详细地介绍这种技术。

</br>

# **Ranges**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Ranges是值的间隔**，由其上下限定义。 您可以使用以下两个范围运算符来创建范围：```..<``` 用于不包含上限的半开范围，而 ```...``` 用于包含两个范围的封闭范围：

``` Swift
// 0 to 9, 10 is not included.
let singleDigitNumbers = 0..<10 Array(singleDigitNumbers) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // "z" is included.
let lowercaseLetters = Character("a")...Character("z")
There are also prefix and postfix variants of these operators, which are used to express one-sided ranges:
let fromZero = 0...
let upToZ = ..<Character("z")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有五种不同的具体类型代表范围，每种类型捕获对值的不同约束。 两种最基本的类型是 ```Range``` （使用 ..<创建的半开范围 ）和 ```ClosedRange``` （使用...创建的）。 两者都有一个通用的 ```Bound参数``` ：**唯一的要求是Bound必须是Comparable**。 例如，上面的 ```lowercaseLetter``` s表达式的类型为``` ClosedRange<Character> ```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;范围上最基本的操作是测试它是否包含某些元素：

``` Swift
singleDigitNumbers.contains(9) // true lowercaseLetters.overlaps("c"..<"f") // true
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;半开和封闭范围有单独的类型，因为两者都有一个位置：
+ → ```Onlyahalf-openrange``` 可以表示一个空间隔（当降低时，
上限相等，如5 .. <5）。
+ → 只能在一个封闭范围内包含其元素类型的最大值（例如0 ...Int.max）。 半开范围总是要求至少一个可表示的值大于该范围内的最大值。

## ***Countable Ranges***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;范围似乎很自然地适合作为序列或集合。 实际上，您可以遍历整数范围或将其视为集合：

``` Swift

for i in 0..<10 {
    print("\(i)", terminator: " ")
} 
// 0 1 2 3 4 5 6 7 8 9 singleDigitNumbers.last // Optional(9)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是并非所有范围都可以这种方式使用。 例如，编译器不会让我们迭代一系列字符：

``` Swift
// Error: Type 'Character' does not conform to protocol 'Strideable'.
for c in lowercaseLetters { 
    ...
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（对字符进行迭代的原因并不像看起来与 ```Unicode``` 一样简单。在 ```“字符串”``` 一章中将详细讨论此问题。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里发生了什么？ 范围仅在其元素类型符合 ```Strideable``` 时（即您可以通过添加偏移量从一个元素跳转到另一元素）且步幅步骤本身是整数，才有条件地符合 ```collection协议``` 。

``` Swift
extension Range: Sequence where Bound: Strideable, Bound.Stride: SignedInteger { /* ... */ }

extension Range: Collection, BidirectionalCollection,RandomAccessCollection
where Bound: Strideable, Bound.Stride: SignedInteger { /* ... */ }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（我们将在 ```“collection协议”``` 一章中深入介绍 ```“Sequence”``` ```，“collection”``` ， ```“双向collection”``` 和 ```“随机访问collection”协议``` 。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;换句话说，范围必须是可计数的，以便对其进行迭代。可计数范围（即与约束匹配）的有效边界包括整数和指针类型，但**不包括浮点类型，因为该类型的跨度受到整数约束**。如果需要迭代连续的浮点值，则可以使用 ```stride（from：to：by）``` 和 ```stride（from：through：by）``` 函数创建这样的序列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift 4.1和4.2中引入条件协议一致性之前，标准库包括名为 ```CountableRange``` 和 ```CountableClosedRange``` 的具体类型，用于区分 ```可计数范围``` 和 ```不可计数范围``` 。这些名称仍作为类型别名存在，以实现向后兼容。您还可以将它们用作一系列范围加约束的简写，如标准库中的注释所示：

``` Swift
// Note: this is not for compatibility only; it is considered useful
// shorthand.
public typealias CountableRange<Bound: Strideable> = Range<Bound>
where Bound.Stride : SignedInteger

```

## ***Partial Ranges***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过使用 ```...``` 或 ```..<``` 作为前缀或后缀运算符来构造部分范围。 这些范围之所以称为局部范围，是因为它们缺少边界之一。 例如， ```0 ...``` 描述了一个从零开始且没有上限的范围。 共有三种：

``` Swift
let fromA: PartialRangeFrom<Character> = Character("a")...
let throughZ: PartialRangeThrough<Character> = ...Character("z") let upto10: PartialRangeUpTo<Int> = ..<10
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ```CountableRange``` 是具有可跨越元素类型的范围的类型别名一样 ```CountablePartialRangeFrom``` 是 ```PartialRangeFrom``` 的类型别名，但约束更严格。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们迭代可计数的 ```PartialRangeFrom``` 时，迭代从 ```lowerBound``` 开始并重复调用 ```advanced（by：1）``` 。 如果在 ```for循环``` 中使用此范围，则必须小心添加中断条件，以免最终陷入无限循环（否则计数器溢出时会崩溃）。 无论 ```PartialRangeThrough``` 和 ```PartialRangeUpTo``` 如何迭代，无论它们的元素类型是否可跨越，都因为它们没有下限而无法迭代。

## ***Range Expressions***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有五个范围类型均符合 ```RangeExpression协议``` 。 该协议本身很小，足以在本书中印刷。 它允许您询问元素是否包含在范围内，并给出一个集合，它可以为您计算完全指定的范围：

``` Swift
public protocol RangeExpression {
    associatedtype Bound: Comparable
    func contains(_ element: Bound) -> Bool
    func relative<C>(to collection: C) -> Range<Bound>
    where C: Collection, Self.Bound == C.Index 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于缺少下界的部分范围， ```relative（to :)``` 方法将集合的 ```startIndex``` 添加为下界。 对于缺少上限的部分范围，该方法将使用集合的 ```endIndex``` 。 部分范围使切片集合的语法非常紧凑：

``` Swift
let arr = [1,2,3,4] 
arr[2...] // [3, 4] 
arr[..<1] // [1]
arr[1...2] // [2, 3]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之所以可行，是因为 ```Collection协议``` 中的相应下标声明采用 ```RangeExpression``` 而不是五个具体范围类型之一。 您甚至可以忽略两个边界，以获取整个集合的一部分：

``` Swift
arr[...] // [1, 2, 3, 4]
type(of: arr[...]) // ArraySlice<Int>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（这是标准库中的一种特殊情况。这种无界范围尚不是有效的 ```RangeExpression``` ，但最终应成为一个范围。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果可能，请尝试复制标准库的方法，并使您自己的函数采用 ```RangeExpressio``` n而不是具体的范围类型。 并非总是可能的，因为除非您处于集合的上下文中，否则该协议不会使您能够访问范围的边界，但是如果是这样，则可以为 ```API``` 的使用者提供更大的自由来传递任何形式的 他们喜欢的范围表达。

</br>

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们看到了许多不同的集合：```数组```，```字典```，```集合```，```索引集```和```范围```。 我们还研究了每个集合所具有的许多方法。 我们了解了 ```Swift``` 的内置集合如何使您可以通过 ```let和var``` 控制 ```可变性``` ，还了解了如何理解所有不同的 ```Range类型``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在 ```“Collection协议”``` 中重新访问本章的主题，在此我们将深入讨论 ```Swift``` 的 ```Collection所基于的协议``` 。