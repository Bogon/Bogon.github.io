---
title: 'Advanced Swift系列(一): Build-in Collections'
description: 'Advanced Swift系列(一): Build-in Collections'
permalink: 'Advanced Swift系列(一): Build-in Collections'
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

```Swift``` 数组具有 ```map方法``` ，该方法从函数世界中采用
编程。 使用 ***map*** 的操作完全相同：

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Element``` 是数组包含的任何类型的 ```通用占位符``` ，而 ```T``` 是表示元素转换结果的 ```新占位符``` 。  ```map``` 功能本身并不关心 ```元素``` 和 ```T``` 是什么。 他们可以是任何东西。 转换元素的具体 ```类型T``` 由 ```调用者传递给映射的转换函数的返回类型定义``` 。 有关通用参数的详细信息，请参见 ```“通用”``` 一章。

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确实，此方法的签名应为
```func map <T>（__ transform：（Element）throws-> T）rethrows-> [T]```，表示映射将转换功能可能抛出的任何错误转发给调用者。 我们将在 ```“错误”``` 一章中对此进行详细介绍，但是在这里，为简单起见，我们省略了错误处理注释。 如果需要，您可以在GitHub的Swift存储库中检出 ```Sequence.map``` 的源代码。

### ***用函数参数化行为***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使您已经熟悉 ```map``` ，也请花点时间考虑一下 ```map``` 的实现。 是什么使它如此通用却如此有用？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```map``` 设法将 样板 与每次调用的功能区分开来，即每次调用之间都没有变化，即逻辑上如何精确转换每个元素。 它通过调用者提供的参数来完成此操作： ```转换函数``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在整个标准库中都可以找到这种 参数化行为模式 。 例如，在 ```Array``` （以及其他种类的集合）上有十几个单独的方法，它们带有一个函数来自定义其行为：

+ → **```map```** and **```flatMap```** - 转换元素
+ → **```**filter```** - 仅包含某些元素
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
其中一些功能具有默认行为。  sort 会在元素具有可比性时按升序排序（除非另行指定），并且只要元素是等价的， contains 就可以接受一个值进行检查。这些默认值有助于使代码更具可读性。升序排序是很自然的，因此 ```array.sort（）``` 的含义很直观，而 ```array.firstIndex（of：“ foo”）``` 比
```array.firstIndex{$ 0 ==“ foo”}```。

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









