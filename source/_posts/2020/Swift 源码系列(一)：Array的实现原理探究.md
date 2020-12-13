---
title: Swift 源码系列(一)：Array的实现原理探究
description: Swift 源码系列(一)：Array的实现原理探究
permalink: Swift 源码系列(一)：Array的实现原理探究
copyright: ture
date: 2020-12-12 09:20:00
keywords: iOS,Swift,Swift 源码,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection, Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced Classes,面试题,Swift 源码系列(一)：Array的实现原理探究
tags:
    - [iOS]
    - [Swift]
	  - [Array]
    - [Swift 源码阅读]
categories:
    - [iOS]
    - [Swift]
	  - [Array]
    - [Swift 源码阅读]
---

​		使用一项新的技术之后，使用时间愈长就对内部实现原理愈感到好奇。基于难以压抑的好奇心，决定花点时间对这门语言一些实现一探究竟。

​		阅读源码之前需要准备一些资料：

+ `Swift` 源代码：**https://github.com/apple/swift**
+ `Swift` 版本：**5.3**
+ 阅读文件：`swift-master/stdlib/public/core/Array.swift` 

# 前言

​		阅读这个文件的原因是最近接手一个比较棘手的项目，之所以棘手原因是前任开发者开发起来过于随意，其中的一些小细节疏漏了，导致本来已经比较艰难的项目更是雪上加霜。尤其是在数组的使用上沿用 `Objective-C` 的用法，由于 `Swift` 被称为是 **高效、安全**，在实现上有差别，在使用上也需要注意一些细节，所以就对 ```Swift``` 中 `Array` 的具体实现一探究竟。

​		在这个文件中，一开头我们看到这样一句话：“Three generic, mutable array-like types with value semantics.”。大概意思就是具有值语义的三种通用的可变数组类型。而且是一个有序可随机访问的集合。

我们可以总结出 `Swift` 中  `Array` 特点：

+ 值类型

+ 通用(支持多种数据类型存储)

+ 可变

+ 有序

+ 可随机访问

  
> `Array<Element>` is like `ContiguousArray<Element>` when `Element` is not a reference type or an Objective-C existential. Otherwise, it may use an `NSArray` bridged from Cocoa for storage.

源文件中的注释描述的比较清晰，如果 `Array` 中的元素为非引用类型或者非 `Objective-C` 扩展的类型，其存储和使用和使用方式与 `ContiguousArray` 一直。否则会将其桥接转换成 `NSArray` 存储。



<!---more--->



> Arrays are one of the most commonly used data types in an app. You use arrays to organize your app's data. Specifically, you use the `Array` type  to hold elements of a single type, the array's `Element` type. An array can store any kind of elements---from integers to strings to classes.

`Array` 使用来存储想要保存的任意数据，但是使用时需要注意其特点：

+ 内部元素类型一致
+ 数据类型单一
+ 任意类型的元素

> Swift makes it easy to create arrays in your code using an array literal: simply surround a comma-separated list of values with square brackets. Without any other information, Swift creates an array that includes the specified values, automatically inferring the array's `Element` type. 



# 创建数组

1、创建 `Array` 方式很简单，可以直接使用 `[]` 将元素使用 `,` 分开的元素放入其中即可完成一个数组的创建。在没有执行数组元素类型的情况下，`Swift` 中推断出元素数组中元素类型。

```Swift 
// An array of 'Int' elements
let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15]

// An array of 'String' elements
let streets = ["Albemarle", "Brandywine", "Chesapeake"]
```

2、也可以在声明中执行元素类型来创建一个空数组。

```Swift 
// Shortened forms are preferred
var emptyDoubles: [Double] = []

// The full type name is also allowed
var emptyFloats: Array<Float> = Array()
```

3、也可以使用固定数目的默认值进行预初始化的数组：`Array(repeating:count:)` 。

```Swift
var digitCounts = Array(repeating: 0, count: 10)
print(digitCounts)
// Prints "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
```

# 访问数组元素

1、当需要对数组的所有元素执行某种操作时，请使用 `for`-`in` 循环遍历数组的内容。

```Swift
for street in streets {
    print("I don't live on \(street).")
}
// Prints "I don't live on Albemarle."
// Prints "I don't live on Brandywine."
// Prints "I don't live on Chesapeake."
```

2、是否是空数组（ `isEmpty` ）

使用 `isEmpty` 属性来快速检查一个数组是否有任何数组元素，或使用count属性查找数组中的元素数。

```Swift
if oddNumbers.isEmpty {
    print("I don't know any odd numbers.")
} else {
    print("I know \(oddNumbers.count) odd numbers.")
}
// Prints "I know 8 odd numbers."
```

3、访问第一个或者是最后一个元素

使用 `first` 和 `last` 属性可以安全地访问数组的 第一个和最后一个元素的值。如果数组为空，则这些属性为  `“nil”` 。

```Swift
if let firstElement = oddNumbers.first, let lastElement = oddNumbers.last {
    print(firstElement, lastElement, separator: ", ")
}
// Prints "1, 15"

print(emptyDoubles.first, emptyDoubles.last, separator: ", ")
// Prints "nil, nil"
```

4、使用下标访问元素

​		通过下标访问单个数组元素。非空数组的第一个元素始终位于索引 0 。使用从0到但不包括数组计数的任何整数为数组添加下标。使用负数或等于或大于 `count` 的索引会触发运行时错误。

```Swift
print(oddNumbers[0], oddNumbers[3], separator: ", ")
// Prints "1, 7"

print(emptyDoubles[0])
// Triggers runtime error: Index out of range
```

# 添加元素

1、在数组尾部添加(单个、多个)元素

使用`append（_ :)`方法将单个元素添加到数组的末尾。通过将另一个数组或任何类型的序列传递给 `append（contentsOf:)` 方法来同时添加多个元素。

```Swift
var students = ["Ben", "Ivy", "Jordell"]

students.append("Maxime")
students.append(contentsOf: ["Shakia", "William"])
// ["Ben", "Ivy", "Jordell", "Maxime", "Shakia", "William"]
```

2、在数组指定位置添加(单个、多个)元素

使用 `insert（_：at :)` 方法添加单个元素，并通过使用 `insert（contentsOf：at :)` 来从另一个集合或数组文字中插入多个元素，从而在数组中间添加新元素。该索引处的元素和以后的索引将移后以腾出空间。

```Swift
students.insert("Liam", at: 3)
// ["Ben", "Ivy", "Jordell", "Liam", "Maxime", "Shakia", "William"]
```

# 删除元素

1、使用下标移除元素

使用 `remove(at:) ` 、`removeSubrange(_:) ` 、 `removeLast()` 方法移除数组中的元素。

```Swift
// Ben's family is moving to another state
students.remove(at: 0)
// ["Ivy", "Jordell", "Liam", "Maxime", "Shakia", "William"]

// William is signing up for a different class
students.removeLast()
// ["Ivy", "Jordell", "Liam", "Maxime", "Shakia"]
```

2、替换元素

可以将一个新值赋值给数组某个下标所存储的值。

```Swift
if let i = students.firstIndex(of: "Maxime") {
    students[i] = "Max"
}
// ["Ivy", "Jordell", "Liam", "Max", "Shakia"]
```

# 数组扩容

​		每个数组都保留特定数量的内存来保存其内容。当向数组中添加元素并且该数组开始超出其保留容量时，该数组会***分配更大的内存区域，并将其元素复制到新的存储中***。新存储是旧存储的倍数储存空间的大小。这种***指数增长策略意味着追加元素的时间恒定，平均许多追加操作的性能。触发重新分配的追加操作会降低性能，但是随着数组变大，它们的发生频率会越来越低。***

​		如果你知道大约需要存储多少个元素，请在添加到数组之前使用 `reserveCapacity（_ :)` 方法，以避免中间重新分配。使用 `capacity` 和 `count` 属性来确定在不分配更大存储空间的情况下，数组可以存储多少元素。

> `C、C++` 中数组的扩容方式可以去了解一下。在上文中已经提到。数组的频繁扩容是比较损耗性能，所在开发中尽可能避免这样的操作。

​		对于大多数 `“元素”` 类型的数组，此存储是连续的内存块。对于元素类型为类或 `@objc` 协议类型的数组，此存储可以是连续的内存块或 `NSArray` 的实例。因为 `NSArray` 的任意子类都可以变成 `Array` ，所以在这种情况下不能保证表示和效率。



# 修改拷贝的数组

​		每个数组都有一个独立的值，其中包括其所有元素的值。对于整数和其他结构等简单类型，这意味着当你更改一个数组中的值时，该元素的值在数组的任何副本中均不会更改。

```Swift
var numbers = [1, 2, 3, 4, 5]
var numbersCopy = numbers
numbers[0] = 100
print(numbers)
// Prints "[100, 2, 3, 4, 5]"
print(numbersCopy)
// Prints "[1, 2, 3, 4, 5]"
```

​		如果数组中的元素是类的实例，则语义是相同的，尽管它们最初可能看起来有所不同。在这种情况下，存储在数组中的值是对位于数组外部的对象的引用。如果在一个数组中更改对对象的引用，则只有***该数组对新对象具有引用***。但是，如果两个数组包含对同一对象的引用，则可以从两个数组观察对该对象的属性的更改。

```Swift
// An integer type with reference semantics
class IntegerReference {
    var value = 10
}
var firstIntegers = [IntegerReference(), IntegerReference()]
var secondIntegers = firstIntegers

// Modifications to an instance are visible from either array
firstIntegers[0].value = 100
print(secondIntegers[0].value)
// Prints "100"

// Replacements, additions, and removals are still visible
// only in the modified array
firstIntegers[0] = IntegerReference()
print(firstIntegers[0].value)
// Prints "10"
print(secondIntegers[0].value)
// Prints "100"
```

​		数组与标准库中的所有可变大小集合一样，都使用***写时复制***优化。数组的多个副本共享同一存储，直到你修改其中一个副本为止。发生这种情况时，要修改的数组将用其唯一拥有的副本替换其存储，然后对其进行适当修改。有时会进行优化以减少复制量。

​		这意味着，如果一个数组正在与其他副本共享存储，则对该数组进行的第一个变异操作会产生复制该数组的成本。作为其存储唯一所有者的数组可以在适当位置执行变异操作。

​		在下面的示例中，将创建一个 `“numbers”` 数组以及共享同一存储的两个副本。当原始的 `numbers` 数组被修改时，它会在进行修改之前为其存储创建唯一的副本。在对 `“numbers”` 进行进一步修改的同时，两个副本继续共享原始存储。

```Swift
var numbers = [1, 2, 3, 4, 5]
var firstCopy = numbers
var secondCopy = numbers

// The storage for 'numbers' is copied here
numbers[0] = 100
numbers[1] = 200
numbers[2] = 300
// 'numbers' is [100, 200, 300, 4, 5]
// 'firstCopy' and 'secondCopy' are [1, 2, 3, 4, 5]
```

# `Array` 和 `NSArray` 桥接

​		当你需要访问需要使用 `NSArray` 实例而不是 `Array` 中的数据的 `API` 时，请使用类型转换运算符 `(as)` 桥接你的实例。为了使桥接成为可能，数组的 `“元素”` 类型必须是类，`“@objc”` 协议（从 `Objective-C` 导入或带有 `“@objc”` 属性标记的协议）或桥接到的类型，基础类型。

​		以下示例显示了如何将 `Array` 实例桥接到 `NSArray` ，以使用 `write(to：atomically :)` 方法。在这个例子中，可以将 `colors` 数组桥接到 `NSArray` ，因为 `colors` 数组的 `String` 元素桥接到 `NSString` 。另一方面，编译器阻止桥接 `moreColors` 数组，因为它的 `Element `类型是 `Optional <String>` ，它不会桥接到 `Foundation` 类型。

```Swift
let colors = ["periwinkle", "rose", "moss"]
let moreColors: [String?] = ["ochre", "pine"]

let url = URL(fileURLWithPath: "names.plist")
(colors as NSArray).write(to: url, atomically: true)
// true

(moreColors as NSArray).write(to: url, atomically: true)
// error: cannot convert value of type '[String?]' to type 'NSArray'
```

​		如果数组的元素已经是一个类或 `@objc` 协议的实例，则从 `Array` 桥接到 `NSArray` 会占用 `O(1)` 时间和 `O(1)` 空间。否则，将花费 `O(n)` 的时间和空间复杂度。

​		当目标数组的元素类型是类或 `@objc` 协议时，从 `NSArray` 桥接到 `Array` 首先在对象上调用 `copy(with :)`（在 `Objective-C` 中为 `copyWithZone:` ）方法。数组以获取不可变的副本，然后执行耗时 O(1) 的其他 `Swift` 备注事项。对于已经是不可变的 `NSArray` 实例，通常在 O(1) 时间返回 `copy(with :)` 相同的数组；否则，复制性能未指定。如果 `copy(with :)` 返回相同的数组，则 `NSArray` 和`Array` 的实例将使用相同的写时复制优化共享存储，该优化是在 `Array` 的两个实例共享存储时使用的。

​		当目标数组的元素类型是桥接到 `Foundation` 类型的非类类型时，从 `NSArray` 到 `Array` 的桥接将在 O(n) 时间内将元素的桥接副本复制到连续存储中。例如，从 `NSArray` 到 `Array <Int>` 的桥接执行了这样的复制。访问 `Array` 实例的元素时，不需要进一步的桥接。

> 注意：`ContiguousArray `和 `ArraySlice` 类型不是桥接的；这些类型的实例始终具有连续的内存块作为存储空间。



# 序列化数组

1、创建一个包含有序元素的数组。

你可以使用此初始化程序从符合 `Sequence` 协议的任何其他类型创建数组。例如，你可能想创建一个从1到7的整数的数组。请在某个范围内使用此初始化程序，而不要在数组文字中键入所有这些数字。

```Swift
let numbers = Array(1...7)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 6, 7]"
```

你还可以使用此初始化程序将复杂的序列或集合类型转换回数组。例如，***字典的 `“keys”` 属性不是具有自己存储空间的数组，它是一个集合，仅当它们被访问时才从字典中映射其元素，从而节省了分配数组所需的时间和空间。***但是，如果您需要将这些键传递给采用数组的方法，请使用此初始值设定项将该列表从其 `LazyMapCollection<Dictionary <String，Int> , Int>` 类型转换为简单的 `[String]` 。

```Swift
func cacheImagesWithNames(names: [String]) {
    // custom image loading and caching
}

let namedHues: [String: Int] = ["Vermillion": 18, "Magenta": 302,
        "Gold": 50, "Cerise": 320]
let colorNames = Array(namedHues.keys)
cacheImagesWithNames(colorNames)

print(colorNames)
// Prints "["Gold", "Cerise", "Magenta", "Vermillion"]"
```

函数实现：

```Swift
/// - Parameter s: The sequence of elements to turn into an array.
@inlinable
public init<S: Sequence>(_ s: S) where S.Element == Element {
  self = Array(
    _buffer: _Buffer(
      _buffer: s._copyToContiguousArray()._buffer,
      shiftedToStartIndex: 0))
}
```

2、创建一个包含指定数量的单个重复值的新数组。

这是创建一个数组的示例，该数组用五个包含字母 *Z* 的字符串初始化。

```Swift
let fiveZs = Array(repeating: "Z", count: 5)
print(fiveZs)
// Prints "["Z", "Z", "Z", "Z", "Z"]"
```

函数实现：

```Swift
/// - Parameters:
/// - repeatedValue: The element to repeat.
/// - count: The number of times to repeat the value passed in the
/// `repeating` parameter. `count` must be zero or greater.
@inlinable
@_semantics("array.init")
public init(repeating repeatedValue: Element, count: Int) {
  var p: UnsafeMutablePointer<Element>
  (self, p) = Array._allocateUninitialized(count)
  for _ in 0..<count {
    p.initialize(to: repeatedValue)
    p += 1
  }
  _endMutation()
}

@inline(never)
@usableFromInline
internal static func _allocateBufferUninitialized(
  minimumCapacity: Int
) -> _Buffer {
  let newBuffer = _ContiguousArrayBuffer<Element>(
    _uninitializedCount: 0, minimumCapacity: minimumCapacity)
  return _Buffer(_buffer: newBuffer, shiftedToStartIndex: 0)
}
```

3、创建一个指定容量但是未进行初始化的数组

构造一个 `count` 未初始化元素的数组。

函数实现：

```Swift
@inlinable
internal init(_uninitializedCount count: Int) {
  _precondition(count >= 0, "Can't construct Array with count < 0")
  // Note: Sinking this constructor into an else branch below causes an extra
  // Retain/Release.
  _buffer = _Buffer()
  if count > 0 {
    // Creating a buffer instead of calling reserveCapacity saves doing an
    // unnecessary uniqueness check. We disable inlining here to curb code
    // growth.
    _buffer = Array._allocateBufferUninitialized(minimumCapacity: count)
    _buffer.mutableCount = count
  }
  // Can't store count here because the buffer might be pointing to the
  // shared empty array.
}
```

4、构造字面量 `Array` 的入口；构建并返回一个 `“count”` 未初始化元素的数组。

函数实现：

```Swift
@inlinable
@_semantics("array.uninitialized")
internal static func _allocateUninitialized(
  _ count: Int
) -> (Array, UnsafeMutablePointer<Element>) {
  let result = Array(_uninitializedCount: count)
  return (result, result._buffer.firstElementAddress)
}
```

5、使用给定的 `“Storage”` 返回一个 `“count”` 个未初始化元素的数组，以及一个指向第一个元素的未初始化内存的指针。

函数实现：

```Swift
/// - Precondition: `storage is _ContiguousArrayStorage`.
@inlinable
@_semantics("array.uninitialized")
internal static func _adoptStorage(
  _ storage: __owned _ContiguousArrayStorage<Element>, count: Int
) -> (Array, UnsafeMutablePointer<Element>) {

  let innerBuffer = _ContiguousArrayBuffer<Element>(
    count: count,
    storage: storage)

  return (
    Array(
      _buffer: _Buffer(_buffer: innerBuffer, shiftedToStartIndex: 0)),
      innerBuffer.firstElementAddress)
}
```

6、终止构造字面量数组入口：释放仅包含未初始化元素的Array。

函数实现：

```Swift
@inlinable
internal mutating func _deallocateUninitialized() {
  // Set the count to zero and just release as normal.
  // Somewhat of a hack.
  _buffer.mutableCount = 0
}
```



# 基础变动(***basic mutations***)

1、保留足够的空间来存储指定数量的元素。

如果要向数组中添加已知数量的元素，请使用此方法避免多次重新分配。 此***方法确保数组具有唯一的，可变的，连续的存储，并至少为请求的元素数量分配了空间。***

在具有桥接存储的数组上调用 `reserveCapacity(_ :) `方法会触发向连续存储的复制，即使现有存储中有空间可以存储 `minimumCapacity` 元素。

出于性能原因，新分配的存储的大小可能大于请求的容量。 使用数组的 `“capacity”` 属性来确定新存储的大小。

2、保留阵列的几何增长策略

如果你实现了一个动态增长的数组支持的自定义数据结构，那么在调用 `reserveCapacity（_ :) `方法可能会导致性能不及预期。 数组需要遵循几何分配模式来添加元素，以实现摊销后的恒定时间性能。 `Array` 类型的 `append(_ :)` 和 `append(contentsOf :) `方法会为你处理此细节，但是 `reserveCapacity(_ :)` 只会分配你告诉它的空间（填充到 舍入值），仅此而已。 这避免了过度分配，但可能导致插入不具有摊销的恒定时间性能。

以下代码声明了“值”，一个整数数组和 `“addTenQuadratic()”` 函数，该函数在每次调用时将另外十个值添加到“值”数组中。

```Swift
var values: [Int] = [0, 1, 2, 3]

// Don't use 'reserveCapacity(_:)' like this
func addTenQuadratic() {
    let newCount = values.count + 10
    values.reserveCapacity(newCount)
    for n in values.count..<newCount {
        values.append(n)
    }
}
```

对 `“reserveCapacity(_ :)”` 的调用通过 `“addTenQuadratic()”`（线性增长），每次传递时，`“ values”` 数组的容量都会增加恰好10个元素。 该函数可能会衰减到在 `values.count` 中呈线性的性能，而不是对多个调用求平均值时具有恒定的时间。 几乎可以肯定这不是你想要的。

在这种情况下，最简单的解决方法通常是简单地删除对 `reserveCapacity(_ :)` 的调用，并让 `append(_ :)` 方法为你增加数组。

```Swift
func addTen() {
    let newCount = values.count + 10
    for n in values.count..<newCount {
        values.append(n)
    }
}
```

2、如果你需要更多地控制数组的容量，你实现自定义的几何增长策略，将计算的大小传递给 `“reserveCapacity(_ :)”` 。

函数实现：

```swift
/// - Parameter minimumCapacity: The requested number of elements to store.
///
/// - Complexity: O(*n*), where *n* is the number of elements in the array.
@inlinable
@_semantics("array.mutate_unknown")
public mutating func reserveCapacity(_ minimumCapacity: Int) {
  _reserveCapacityImpl(minimumCapacity: minimumCapacity,
                       growForAppend: false)
  _endMutation()
}
```

3、保留足够的空间来存储 `“minimumCapacity”` 元素。 如果需要分配一个新的缓冲区，并且 `growForAppend` 为 `true` ，则使用 `'_growArrayCapacity'` 计算新的容量，但至少保持为 `'minimumCapacity'` 。

函数实现：

```Swift
@_alwaysEmitIntoClient
internal mutating func _reserveCapacityImpl(
  minimumCapacity: Int, growForAppend: Bool
) {
  let isUnique = _buffer.beginCOWMutation()
  if _slowPath(!isUnique || _buffer.mutableCapacity < minimumCapacity) {
    _createNewBuffer(bufferIsUnique: isUnique,
                     minimumCapacity: Swift.max(minimumCapacity, _buffer.count),
                     growForAppend: growForAppend)
  }
  _internalInvariant(_buffer.mutableCapacity >= minimumCapacity)
  _internalInvariant(_buffer.mutableCapacity == 0 ||
                     _buffer.isUniquelyReferenced())
}
```

4、创建一个新缓冲区，替换当前缓冲区。

如果 `bufferIsUnique` 为true，则假定该数组唯一引用该缓冲区，并且将元素（而不是复制）移动到新缓冲区。

`“minimumCapacity”` 是新容量的下限。

如果 `growForAppend` 为true，则使用 `_growArrayCapacity` 计算新容量，但至少保持为 `minimumCapacity 。

函数实现：

```Swift
@_alwaysEmitIntoClient
internal mutating func _createNewBuffer(
  bufferIsUnique: Bool, minimumCapacity: Int, growForAppend: Bool
) {
  _internalInvariant(!bufferIsUnique || _buffer.isUniquelyReferenced())
  _buffer = _buffer._consumeAndCreateNew(bufferIsUnique: bufferIsUnique,
                                         minimumCapacity: minimumCapacity,
                                         growForAppend: growForAppend)
}
```

5、将当前缓冲区的内容复制到新的唯一可变缓冲区。
新缓冲区的计数设置为 `“oldCount”` ，新缓冲区的容量足以容纳 `“ oldCount” +1` 个元素。

函数实现：

```Swift
@inline(never)
@inlinable // @specializable
internal mutating func _copyToNewBuffer(oldCount: Int) {
  let newCount = oldCount + 1
  var newBuffer = _buffer._forceCreateUniqueMutableBuffer(
    countForNewBuffer: oldCount, minNewCapacity: newCount)
  _buffer._arrayOutOfPlaceUpdate(&newBuffer, oldCount, 0)
}

@inlinable
@_semantics("array.make_mutable")
internal mutating func _makeUniqueAndReserveCapacityIfNotUnique() {
  if _slowPath(!_buffer.beginCOWMutation()) {
    _createNewBuffer(bufferIsUnique: false,
                     minimumCapacity: count + 1,
                     growForAppend: true)
  }
}

@inlinable
@_semantics("array.mutate_unknown")
internal mutating func _reserveCapacityAssumingUniqueBuffer(oldCount: Int) {
  // Due to make_mutable hoisting the situation can arise where we hoist
  // _makeMutableAndUnique out of loop and use it to replace
  // _makeUniqueAndReserveCapacityIfNotUnique that preceeds this call. If the
  // array was empty _makeMutableAndUnique does not replace the empty array
  // buffer by a unique buffer (it just replaces it by the empty array
  // singleton).
  // This specific case is okay because we will make the buffer unique in this
  // function because we request a capacity > 0 and therefore _copyToNewBuffer
  // will be called creating a new buffer.
  let capacity = _buffer.mutableCapacity
  _internalInvariant(capacity == 0 || _buffer.isMutableAndUniquelyReferenced())

  if _slowPath(oldCount + 1 > capacity) {
    _createNewBuffer(bufferIsUnique: capacity > 0,
                     minimumCapacity: oldCount + 1,
                     growForAppend: true)
  }
}

@inlinable
@_semantics("array.mutate_unknown")
internal mutating func _appendElementAssumeUniqueAndCapacity(
  _ oldCount: Int,
  newElement: __owned Element
) {
  _internalInvariant(_buffer.isMutableAndUniquelyReferenced())
  _internalInvariant(_buffer.mutableCapacity >= _buffer.mutableCount + 1)

  _buffer.mutableCount = oldCount + 1
  (_buffer.mutableFirstElementAddress + oldCount).initialize(to: newElement)
}
```

6、向数组末尾添加元素

可以使用 `append(_:)` 在可变数组的末尾添加一个新的元素。

```Swift
var numbers = [1, 2, 3, 4, 5]
numbers.append(100)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 100]"
```

因为数组使用指数策略增加了分配的容量，所以在对 `append(_ :)` 方法的多次调用中求平均值时，将单个元素追加到数组是O(1)操作。 当数组具有附加容量并且不与其他实例共享其存储时，追加元素为O(1)。 当***数组需要在追加之前重新分配存储或与另一个副本共享其存储时，追加为O(*n*)，其中*n*是数组的长度。***

函数实现：

```Swift
/// - Parameter newElement: The element to append to the array.
///
/// - Complexity: O(1) on average, over many calls to `append(_:)` on the
///   same array.
@inlinable
@_semantics("array.append_element")
public mutating func append(_ newElement: __owned Element) {
  // Separating uniqueness check and capacity check allows hoisting the
  // uniqueness check out of a loop.
  _makeUniqueAndReserveCapacityIfNotUnique()
  let oldCount = _buffer.mutableCount
  _reserveCapacityAssumingUniqueBuffer(oldCount: oldCount)
  _appendElementAssumeUniqueAndCapacity(oldCount, newElement: newElement)
  _endMutation()
}
```

7、将序列的元素添加到数组的末尾

使用此方法可将序列的元素附加到此数组的末尾。 此示例将 `Range <Int>` 实例的元素附加到整数数组。

```Swift
var numbers = [1, 2, 3, 4, 5]
numbers.append(contentsOf: 10...15)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]"
```

函数实现：

```Swift
@inlinable
@_semantics("array.append_contentsOf")
public mutating func append<S: Sequence>(contentsOf newElements: __owned S)
  where S.Element == Element {

  defer {
    _endMutation()
  }

  let newElementsCount = newElements.underestimatedCount
  _reserveCapacityImpl(minimumCapacity: self.count + newElementsCount,
                       growForAppend: true)

  let oldCount = _buffer.mutableCount
  let startNewElements = _buffer.mutableFirstElementAddress + oldCount
  let buf = UnsafeMutableBufferPointer(
              start: startNewElements, 
              count: _buffer.mutableCapacity - oldCount)

  var (remainder,writtenUpTo) = buf.initialize(from: newElements)
  
  // trap on underflow from the sequence's underestimate:
  let writtenCount = buf.distance(from: buf.startIndex, to: writtenUpTo)
  _precondition(newElementsCount <= writtenCount, 
    "newElements.underestimatedCount was an overestimate")
  // can't check for overflow as sequences can underestimate

  // This check prevents a data race writing to _swiftEmptyArrayStorage
  if writtenCount > 0 {
    _buffer.mutableCount = _buffer.mutableCount + writtenCount
  }

  if _slowPath(writtenUpTo == buf.endIndex) {

    // A shortcut for appending an Array: If newElements is an Array then it's
    // guaranteed that buf.initialize(from: newElements) already appended all
    // elements. It reduces code size, because the following code
    // can be removed by the optimizer by constant folding this check in a
    // generic specialization.
    if newElements is [Element] {
      _internalInvariant(remainder.next() == nil)
      return
    }

    // there may be elements that didn't fit in the existing buffer,
    // append them in slow sequence-only mode
    var newCount = _buffer.mutableCount
    var nextItem = remainder.next()
    while nextItem != nil {
      _reserveCapacityAssumingUniqueBuffer(oldCount: newCount)

      let currentCapacity = _buffer.mutableCapacity
      let base = _buffer.mutableFirstElementAddress

      // fill while there is another item and spare capacity
      while let next = nextItem, newCount < currentCapacity {
        (base + newCount).initialize(to: next)
        newCount += 1
        nextItem = remainder.next()
      }
      _buffer.mutableCount = newCount
    }
  }
}

@inlinable
@_semantics("array.reserve_capacity_for_append")
internal mutating func reserveCapacityForAppend(newElementsCount: Int) {
  // Ensure uniqueness, mutability, and sufficient storage.  Note that
  // for consistency, we need unique self even if newElements is empty.
  _reserveCapacityImpl(minimumCapacity: self.count + newElementsCount,
                       growForAppend: true)
  _endMutation()
}

@inlinable
@_semantics("array.mutate_unknown")
public mutating func _customRemoveLast() -> Element? {
  _makeMutableAndUnique()
  let newCount = _buffer.mutableCount - 1
  _precondition(newCount >= 0, "Can't removeLast from an empty Array")
  let pointer = (_buffer.mutableFirstElementAddress + newCount)
  let element = pointer.move()
  _buffer.mutableCount = newCount
  _endMutation()
  return element
}
```

8、删除并返回指定位置的元素

跟随指定位置的所有元素将向上移动以缩小间隙。

```Swift
var measurements: [Double] = [1.1, 1.5, 2.9, 1.2, 1.5, 1.3, 1.2]

let removed = measurements.remove(at: 2)

print(measurements)

// Prints "[1.1, 1.5, 1.2, 1.5, 1.3, 1.2]"
```

函数实现：

```Swift
/// - Parameter index: The position of the element to remove. `index` must
///   be a valid index of the array.
/// - Returns: The element at the specified index.
///
/// - Complexity: O(*n*), where *n* is the length of the array.
@inlinable
@discardableResult
@_semantics("array.mutate_unknown")
public mutating func remove(at index: Int) -> Element {
  _makeMutableAndUnique()
  let currentCount = _buffer.mutableCount
  _precondition(index < currentCount, "Index out of range")
  _precondition(index >= 0, "Index out of range")
  let newCount = currentCount - 1
  let pointer = (_buffer.mutableFirstElementAddress + index)
  let result = pointer.move()
  pointer.moveInitialize(from: pointer + 1, count: newCount - index)
  _buffer.mutableCount = newCount
  _endMutation()
  return result
}
```

9、在指定的位置插入一个新元素

新元素将插入当前位于指定索引处的元素之前。 如果将数组的 `endIndex` 属性作为 `index` 参数传递，则新元素将附加到数组中。

```Swift
var numbers = [1, 2, 3, 4, 5]
numbers.insert(100, at: 3)
numbers.insert(200, at: numbers.endIndex)

print(numbers)
// Prints "[1, 2, 3, 100, 4, 5, 200]"
```

函数实现：

```Swift
/// - Parameter newElement: The new element to insert into the array.
/// - Parameter i: The position at which to insert the new element.
///   `index` must be a valid index of the array or equal to its `endIndex`
///   property.
///
/// - Complexity: O(*n*), where *n* is the length of the array. If
///   `i == endIndex`, this method is equivalent to `append(_:)`.
@inlinable
public mutating func insert(_ newElement: __owned Element, at i: Int) {
  _checkIndex(i)
  self.replaceSubrange(i..<i, with: CollectionOfOne(newElement))
}
```

10、从数组中删除所有的元素

函数实现：

```Swift
/// - Parameter keepCapacity: Pass `true` to keep the existing capacity of
///   the array after removing its elements. The default value is
///   `false`.
///
/// - Complexity: O(*n*), where *n* is the length of the array.
@inlinable
public mutating func removeAll(keepingCapacity keepCapacity: Bool = false) {
  if !keepCapacity {
    _buffer = _Buffer()
  }
  else {
    self.replaceSubrange(indices, with: EmptyCollection())
  }
}
```

# 数组实现相关算法

1、相同类型数组的+和+=实现。 此操作与这些操作符的操作符声明（指定该类型作为首选此操作符的位置）相结合，可帮助表达式类型检查器加快在同一表达式中大量使用该操作符的情况。

算法实现：

```Swift
extension Array {
  @inlinable
  public static func + (lhs: Array, rhs: Array) -> Array {
    var lhs = lhs
    lhs.append(contentsOf: rhs)
    return lhs
  }

  @inlinable
  public static func += (lhs: inout Array, rhs: Array) {
    lhs.append(contentsOf: rhs)
  }
}
```

2、 `Array(unsafeUninitializedCapacity:initializingWith:)` 和 `ContiguousArray(unsafeUninitializedCapacity:initializingWith:)` 的函数实现

```Swift
@inlinable
internal init(
  _unsafeUninitializedCapacity: Int,
  initializingWith initializer: (
    _ buffer: inout UnsafeMutableBufferPointer<Element>,
    _ initializedCount: inout Int) throws -> Void
) rethrows {
  var firstElementAddress: UnsafeMutablePointer<Element>
  (self, firstElementAddress) =
    Array._allocateUninitialized(_unsafeUninitializedCapacity)

  var initializedCount = 0
  var buffer = UnsafeMutableBufferPointer<Element>(
    start: firstElementAddress, count: _unsafeUninitializedCapacity)
  defer {
    // Update self.count even if initializer throws an error.
    _precondition(
      initializedCount <= _unsafeUninitializedCapacity,
      "Initialized count set to greater than specified capacity."
    )
    _precondition(
      buffer.baseAddress == firstElementAddress,
      "Can't reassign buffer in Array(unsafeUninitializedCapacity:initializingWith:)"
    )
    self._buffer.mutableCount = initializedCount
    _endMutation()
  }
  try initializer(&buffer, &initializedCount)
}
```

2、创建具有指定容量的数组，然后使用覆盖该数组未初始化内存的缓冲区调用给定的闭包

在闭包内部，将 `“ initializedCount”` 参数设置为由闭包初始化的元素数。 在闭包执行结束时，必须初始化 `“ buffer [0 .. <initializedCount]”` 范围内的内存，并且必须对 `“ buffer [initializedCount ...]”` 范围内的内存进行未初始化。 即使`initializer`闭包引发错误，此后置条件也必须成立。

函数实现：

```Swift
/// - Note: While the resulting array may have a capacity larger than the
///   requested amount, the buffer passed to the closure will cover exactly
///   the requested number of elements.
///
/// - Parameters:
///   - unsafeUninitializedCapacity: The number of elements to allocate
///     space for in the new array.
///   - initializer: A closure that initializes elements and sets the count
///     of the new array.
///     - Parameters:
///       - buffer: A buffer covering uninitialized memory with room for the
///         specified number of elements.
///       - initializedCount: The count of initialized elements in the array,
///         which begins as zero. Set `initializedCount` to the number of
///         elements you initialize.
@_alwaysEmitIntoClient @inlinable
public init(
  unsafeUninitializedCapacity: Int,
  initializingWith initializer: (
    _ buffer: inout UnsafeMutableBufferPointer<Element>,
    _ initializedCount: inout Int) throws -> Void
) rethrows {
  self = try Array(
    _unsafeUninitializedCapacity: unsafeUninitializedCapacity,
    initializingWith: initializer)
}
```

3、调用带有指向数组连续存储的指针闭包

通常，优化器可以消除数组算法中的边界检查，但是当失败时，在传递给闭包的缓冲区指针上调用相同的算法可以让你以安全为代价。

下面的示例演示如何遍历缓冲区指针的内容：

```Swift
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.withUnsafeBufferPointer { buffer -> Int in
    var result = 0
    for i in stride(from: buffer.startIndex, to: buffer.endIndex, by: 2) {
        result += buffer[i]
    }
    return result
}
// 'sum' == 9
```

作为参数传递给 `“ body ”` 的指针仅在执行 `“ withUnsafeBufferPointer(_ :)”` 期间有效。 不要存储或返回指针供以后使用。

函数实现:

```Swift
/// - Parameter body: A closure with an `UnsafeBufferPointer` parameter that
///   points to the contiguous storage for the array.  If no such storage exists, it is created. If
///   `body` has a return value, that value is also used as the return value
///   for the `withUnsafeBufferPointer(_:)` method. The pointer argument is
///   valid only for the duration of the method's execution.
/// - Returns: The return value, if any, of the `body` closure parameter.
@inlinable
public func withUnsafeBufferPointer<R>(
  _ body: (UnsafeBufferPointer<Element>) throws -> R
) rethrows -> R {
  return try _buffer.withUnsafeBufferPointer(body)
}
```

4、使用指向数组的可变连续存储的指针来调用给定的闭包

通常，优化器可以消除数组算法中的边界检查，但是当失败时，在传递给闭包的缓冲区指针上调用相同的算法可以让你以安全为代价。

以下示例显示了如何将 `UnsafeMutableBufferPointer` 参数的内容修改为 `body` 来更改数组的内容：

```Swift
var numbers = [1, 2, 3, 4, 5]
numbers.withUnsafeMutableBufferPointer { buffer in
    for i in stride(from: buffer.startIndex, to: buffer.endIndex - 1, by: 2) {
        buffer.swapAt(i, i + 1)
    }
}
print(numbers)
// Prints "[2, 1, 4, 3, 5]"
```

函数实现：

```Swift
/// The pointer passed as an argument to `body` is valid only during the
/// execution of `withUnsafeMutableBufferPointer(_:)`. Do not store or
/// return the pointer for later use.
///
/// - Warning: Do not rely on anything about the array that is the target of
///   this method during execution of the `body` closure; it might not
///   appear to have its correct value. Instead, use only the
///   `UnsafeMutableBufferPointer` argument to `body`.
///
/// - Parameter body: A closure with an `UnsafeMutableBufferPointer`
///   parameter that points to the contiguous storage for the array.
///    If no such storage exists, it is created. If `body` has a return value, that value is also
///   used as the return value for the `withUnsafeMutableBufferPointer(_:)`
///   method. The pointer argument is valid only for the duration of the
///   method's execution.
/// - Returns: The return value, if any, of the `body` closure parameter.
@_semantics("array.withUnsafeMutableBufferPointer")
@inlinable // FIXME(inline-always)
@inline(__always) // Performance: This method should get inlined into the
// caller such that we can combine the partial apply with the apply in this
// function saving on allocating a closure context. This becomes unnecessary
// once we allocate noescape closures on the stack.
public mutating func withUnsafeMutableBufferPointer<R>(
  _ body: (inout UnsafeMutableBufferPointer<Element>) throws -> R
) rethrows -> R {
  _makeMutableAndUnique()
  let count = _buffer.mutableCount

  // Ensure that body can't invalidate the storage or its bounds by
  // moving self into a temporary working array.
  // NOTE: The stack promotion optimization that keys of the
  // "array.withUnsafeMutableBufferPointer" semantics annotation relies on the
  // array buffer not being able to escape in the closure. It can do this
  // because we swap the array buffer in self with an empty buffer here. Any
  // escape via the address of self in the closure will therefore escape the
  // empty array.

  var work = Array()
  (work, self) = (self, work)

  // Create an UnsafeBufferPointer over work that we can pass to body
  let pointer = work._buffer.mutableFirstElementAddress
  var inoutBufferPointer = UnsafeMutableBufferPointer(
    start: pointer, count: count)

  // Put the working array back before returning.
  defer {
    _precondition(
      inoutBufferPointer.baseAddress == pointer &&
      inoutBufferPointer.count == count,
      "Array withUnsafeMutableBufferPointer: replacing the buffer is not allowed")

    (work, self) = (self, work)
    _endMutation()
  }

  // Invoke the body.
  return try body(&inoutBufferPointer)
}

@inlinable
public __consuming func _copyContents(
  initializing buffer: UnsafeMutableBufferPointer<Element>
) -> (Iterator,UnsafeMutableBufferPointer<Element>.Index) {

  guard !self.isEmpty else { return (makeIterator(),buffer.startIndex) }

  // It is not OK for there to be no pointer/not enough space, as this is
  // a precondition and Array never lies about its count.
  guard var p = buffer.baseAddress
    else { _preconditionFailure("Attempt to copy contents into nil buffer pointer") }
  _precondition(self.count <= buffer.count, 
    "Insufficient space allocated to copy array contents")

  if let s = _baseAddressIfContiguous {
    p.initialize(from: s, count: self.count)
    // Need a _fixLifetime bracketing the _baseAddressIfContiguous getter
    // and all uses of the pointer it returns:
    _fixLifetime(self._owner)
  } else {
    for x in self {
      p.initialize(to: x)
      p += 1
    }
  }

  var it = IndexingIterator(_elements: self)
  it._position = endIndex
  return (it,buffer.index(buffer.startIndex, offsetBy: self.count))
}
```

5、用指定集合中的元素替换一系列元素

此方法具有从数组中删除指定范围的元素并将新元素插入相同位置的作用。 新元素的数量不必与要删除的元素的数量匹配。

在这个例子中，整数数组中间的三个元素被 `Repeated <Int>` 实例的五个元素代替。

```Swift
var nums = [10, 20, 30, 40, 50]
nums.replaceSubrange(1...3, with: repeatElement(1, count: 5))
print(nums)
// Prints "[10, 1, 1, 1, 1, 1, 50]"
```

如果你将零长度范围作为 `“ subrange”` 参数传递，则此方法会将 `“ newElements”` 的元素插入 `“ subrange.startIndex”` 。 最好是调用`insert（contentsOf：at：）`方法。
同样，如果你将零长度的集合作为·“ newElements”·参数传递，则此方法将删除给定子范围内的元素，而无需替换。 最好调用`removeSubrange（_ :)`方法。

函数实现：

```Swift
/// - Parameters:
///   - subrange: The subrange of the array to replace. The start and end of
///     a subrange must be valid indices of the array.
///   - newElements: The new elements to add to the array.
///
/// - Complexity: O(*n* + *m*), where *n* is length of the array and
///   *m* is the length of `newElements`. If the call to this method simply
///   appends the contents of `newElements` to the array, this method is
///   equivalent to `append(contentsOf:)`.
@inlinable
@_semantics("array.mutate_unknown")
public mutating func replaceSubrange<C>(
  _ subrange: Range<Int>,
  with newElements: __owned C
) where C: Collection, C.Element == Element {
  _precondition(subrange.lowerBound >= self._buffer.startIndex,
    "Array replace: subrange start is negative")

  _precondition(subrange.upperBound <= _buffer.endIndex,
    "Array replace: subrange extends past the end")

  let eraseCount = subrange.count
  let insertCount = newElements.count
  let growth = insertCount - eraseCount

  _reserveCapacityImpl(minimumCapacity: self.count + growth,
                       growForAppend: true)
  _buffer.replaceSubrange(subrange, with: insertCount, elementsOf: newElements)
  _endMutation()
}
```

6、返回一个布尔值，该值指示两个数组是否包含相同顺序的相同元素

函数实现：

```Swift
/// You can use the equal-to operator (`==`) to compare any two arrays
/// that store the same, `Equatable`-conforming element type.
///
/// - Parameters:
///   - lhs: An array to compare.
///   - rhs: Another array to compare.
@inlinable
public static func ==(lhs: Array<Element>, rhs: Array<Element>) -> Bool {
  let lhsCount = lhs.count
  if lhsCount != rhs.count {
    return false
  }

  // Test referential equality.
  if lhsCount == 0 || lhs._buffer.identity == rhs._buffer.identity {
    return true
  }


  _internalInvariant(lhs.startIndex == 0 && rhs.startIndex == 0)
  _internalInvariant(lhs.endIndex == lhsCount && rhs.endIndex == lhsCount)

  // We know that lhs.count == rhs.count, compare element wise.
  for idx in 0..<lhsCount {
    if lhs[idx] != rhs[idx] {
      return false
    }
  }

  return true
}
```

7、通过将这些值的必需成分输入给定的哈希值来对其进行哈希处理

函数实现：

```Swift
/// - Parameter hasher: The hasher to use when combining the components
///   of this instance.
@inlinable
public func hash(into hasher: inout Hasher) {
  hasher.combine(count) // discriminator
  for element in self {
    hasher.combine(element)
  }
}
```

调用给定的闭包，并使用指针指向数组的可变连续存储的基础字节。
数组的 `“Element”` 类型必须是 `“trivial type”` ，可以仅进行逐位复制而无需任何间接或引用计数操作。 通常，不包含强引用或弱引用的本机Swift类型以及导入的C结构和枚举都是微不足道的。
下面的示例将byteValues数组中的字节复制到numbers中，即Int数组：

```Swift
var numbers: [Int32] = [0, 0]
var byteValues: [UInt8] = [0x01, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00]

numbers.withUnsafeMutableBytes { destBytes in
    byteValues.withUnsafeBytes { srcBytes in
        destBytes.copyBytes(from: srcBytes)
    }
}
// numbers == [1, 2]
```

函数实现：

```Swift
/// The pointer passed as an argument to `body` is valid only for the
/// lifetime of the closure. Do not escape it from the closure for later
/// use.
///
/// - Warning: Do not rely on anything about the array that is the target of
///   this method during execution of the `body` closure; it might not
///   appear to have its correct value. Instead, use only the
///   `UnsafeMutableRawBufferPointer` argument to `body`.
///
/// - Parameter body: A closure with an `UnsafeMutableRawBufferPointer`
///   parameter that points to the contiguous storage for the array.
///    If no such storage exists, it is created. If `body` has a return value, that value is also
///   used as the return value for the `withUnsafeMutableBytes(_:)` method.
///   The argument is valid only for the duration of the closure's
///   execution.
/// - Returns: The return value, if any, of the `body` closure parameter.
@inlinable
public mutating func withUnsafeMutableBytes<R>(
  _ body: (UnsafeMutableRawBufferPointer) throws -> R
) rethrows -> R {
  return try self.withUnsafeMutableBufferPointer {
    return try body(UnsafeMutableRawBufferPointer($0))
  }
}
```

8、使用指向数组连续存储的基础字节的指针来调用给定的闭包



数组的 `“Element”` 类型必须是 `“trivial type”` ，可以仅进行逐位复制而无需任何间接或引用计数操作。 通常，不包含强引用或弱引用的本机Swift类型以及导入的C结构和枚举都是微不足道的。

以下示例将numbers数组的字节复制到UInt8的缓冲区中：

```Swift
var numbers = [1, 2, 3]
var byteBuffer: [UInt8] = []
numbers.withUnsafeBytes {
    byteBuffer.append(contentsOf: $0)
}
// byteBuffer == [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, ...]
```

函数实现：

```Swift
/// - Parameter body: A closure with an `UnsafeRawBufferPointer` parameter
///   that points to the contiguous storage for the array.
///    If no such storage exists, it is created. If `body` has a return value, that value is also
///   used as the return value for the `withUnsafeBytes(_:)` method. The
///   argument is valid only for the duration of the closure's execution.
/// - Returns: The return value, if any, of the `body` closure parameter.
@inlinable
public func withUnsafeBytes<R>(
  _ body: (UnsafeRawBufferPointer) throws -> R
) rethrows -> R {
  return try self.withUnsafeBufferPointer {
    try body(UnsafeRawBufferPointer($0))
  }
}
```

# ` Cocoa Array` ->` Swift Array` 的桥接实现

我们在这里隔离` Cocoa Array` ->` Swift Array` 的桥接，以便将来我们可以桥接 ` Cocoa Array` 。 我们需要此功能以ABI安全的方式进行桥接。 即使这看起来没用，也不要删除！

```Swift
@usableFromInline internal
func _bridgeCocoaArray<T>(_ _immutableCocoaArray: AnyObject) -> Array<T> {
  return Array(_buffer: _ArrayBuffer(nsArray: _immutableCocoaArray))
}
```

尝试将源NSArray转换为我们的本机缓冲区类型。 如果成功，则在其周围创建一个新的“ Array”并返回该数组。 否则返回“ nil”。
注意：此函数存在于此处，因此Foundation不必知道Array的实现详细信息



# 数组初始化

在 `Array` 内部实现中，有这样一段代码，代码中强调使用 `_buffer` 进行数组的初始化：

```Swift
@inlinable
@_semantics("array.init.empty")
public init() {
  _buffer = _Buffer()
}
```

对 `_Buffer` 数据结构分析，其定义是：

![](https://cdn.xuebaonline.com/array_im_01.png)



待续……