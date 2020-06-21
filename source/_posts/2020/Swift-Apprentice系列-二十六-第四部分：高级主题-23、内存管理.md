---
title: 'Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理'
description: 'Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理'
permalink: 'Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理'
copyright: ture
date: 2020-06-21 15:16:28
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Enumerations,Protocols,Generics,访问控制和代码组织,自定义运算符，下标和键路径,模式匹配,错误处理,Encoding 和 Decoding Types,内存管理
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [内存管理]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

在探讨类生存期和自动引用计数（ARC）时，你在第14章“高级类”中探讨了基本内存管理。 在大多数情况下，Swift中的内存管理无需你费力就可以立即使用。

但是，在某些情况下，ARC无法推断对象之间的正确关系。 那就是你进来的地方。

在本章中，你将重新研究引用循环的概念，并学习有关为类和闭包解决它们的知识。 你还将学习如何在闭包中使用捕获列表来捕获来自合并范围的值。 在本章结束时，你将掌握打破引用循环的技巧，但是在达到这一点之前，你将首先学习如何形成引用循环。

# 类的引用循环

相互拥有强引用的两个类实例会创建一个强引用周期，从而导致内存泄漏。 那是因为每个实例都能使另一个实例保持活动状态，因此它们的引用计数永远不会达到零。


<!-- more -->

例如，我们的网站上有许多一流的编程教程，其中的大多数都在你看到之前由编辑人员进行了仔细审查。 你可以使用以下课程为这些教程建模：

``` Swift
class Tutorial {
    let title: String
    var editor: Editor?
    
    init(title: String) {
        self.title = title
    }
    
    deinit {
        print("Goodbye tutorial \(title)!")
    }
}
```

除标题外，教程可能还具有编辑器，因此将其标记为可选。 请记住，从第14章“高级类”开始，Swift会在从内存中释放对象并且其引用计数变为零之前自动调用反初始化器。

现在，你已经为每个教程定义了一个编辑器，你需要声明一个Editor类，如下所示：

``` Swift
class Editor {
    let name: String
    var tutorials: [Tutorial] = []

    init(name: String) {
        self.name = name 
    }

    deinit {
        print("Goodbye editor \(name)!")
    }
}
```

每个编辑器都有一个名称和他们已编辑的教程的列表。 tutorials属性是一个数组，因此你可以添加它。

现在定义一个全新的发行教程和一个编辑器，以确保它符合我们的高标准：

``` Swift
do {
  let tutorial = Tutorial(title: "Memory management")
  let editor = Editor(name: "Ray")
}
```

它们被放置在一个范围内（使用do {}创建），这样，一旦它们超出范围，对它们的引用就会被丢弃，并且它们会被正确地释放。 一切正常。

当你改为在两个对象之间建立关系时，会发生某些事情，如下所示：

``` Swift
do {
    let tutorial = Tutorial(title: "Memory management") 
    let editor = Editor(name: "Ray")
    tutorial.editor = editor editor.tutorials.append(tutorial)
}
```

尽管两个对象都超出范围，但不会调用反初始化程序，并且控制台上不会显示任何内容-真可惜！ 那是因为你刚刚在本教程及其相应的编辑器之间创建了一个引用循环。 即使你不再需要这些对象，也不会从内存中释放它们。

既然你了解了引用循环的发生方式，就可以打破它们。 使用弱引用援救！

# 弱引用

弱引用是在对象所有权上不起作用的引用。 使用它们的好处在于，它们会自动检测基础对象何时消失。 这就是为什么总是使用可选类型声明它们的原因。 一旦参考计数达到零，它们将变为零。

教程不一定总是分配有编辑器，因此将其建模为可选类型是有意义的。 另外，教程不拥有编辑器，因此使其成为弱引用也是很有意义的。 将Tutorial类中的属性声明更改为以下内容：

``` Swift
weak var editor: Editor?
```

使用弱关键字可以破坏引用循环。

这两个反初始化器现在都运行，并将以下输出打印到控制台：

``` Swift
 Goodbye editor Ray!
Goodbye tutorial Memory management!
```

>注意：你不能将弱引用定义为常量，因为在底层对象消失时，它会在运行时设置为nil。

# 无主引用

你还有另一种打破引用周期的方法：无主引用，其行为与弱引用类似，因为它们不会更改对象的引用计数。

但是，与弱引用不同，它们总是希望有一个值-你不能将它们声明为可选值。 这样想：没有作者就不可能存在教程。 必须有人为编辑器写单词。 ：]同时，教程没有“拥有”作者，因此该参考不应该拥有。

修改Tutorial类，如下所示：

``` Swift
class Tutorial {
    let title: String
    let author: Author
    weak var editor: Editor?

    init(title: String, author: Author) { 
        self.title = title
        self.author = author 
    }

    deinit {
        print("Goodbye tutorial \(title)!")
    }
}
```

也添加以下Author类：

``` Swift
class Author {
    let name: String
    var tutorials: [Tutorial] = []
    init(name: String) {
        self.name = name 
    }

    deinit {
        print("Goodbye author \(name)!")
    }
}
```

在这里，你可以保证教程中始终有一个作者，因此Author不会声明为可选。 另一方面，教程是一个变量，因此可以在初始化后对其进行修改。

但是，错误仍然存在于你的代码中。 该教程还没有作者。 修改其声明，如下所示：

``` Swift
do {
    let author = Author(name: "Cosmin")
    let tutorial = Tutorial(title: "Memory management", author: author)
    let editor = Editor(name: "Ray")
    author.tutorials.append(tutorial) 
    tutorial.editor = editor editor.tutorials.append(tutorial)
}
```

在这里，你释放编辑器，但不释放其余对象。 你将在本教程及其对应的作者之间进行另一个引用循环。 网站上的每个教程都有一位作者。 这里没有匿名作者！ 该教程的author属性非常适合作为无人参考的参考，因为它永远不会为零。 将Tutorial类中的属性声明更改为以下内容：

``` Swift
class Tutorial {
  unowned let author: Author
  // original code
}
```

该代码使用无主关键字破坏了引用循环。 所有deinit方法都运行，并将以下输出打印到控制台：

``` Swift
Goodbye editor Ray!
Goodbye author Cosmin!
Goodbye tutorial Memory management!
```

这就是课程的引用循环。 现在让我们看一下带有闭包的引用循环。


#闭包的引用循环

你在第8章“带闭包的集合迭代”中了解到，闭包从封装范围中捕获值。 ***由于Swift是一种安全的语言，因此闭包可延长其使用的任何对象的生命周期，以确保这些对象是活动的和有效的。 这种自动安全性很好，但是这样做的缺点是，如果你延长了本身捕获闭包的对象的寿命，则可能会无意中创建一个引用循环。 闭包是引用类型本身。***

例如，将一个用于计算教程描述的属性添加到Tutorial类中，如下所示：

``` Swift
lazy var description: () -> String = {
    "\(self.title) by \(self.author.name)" 
}
```

**请记住，只有在首次使用后才分配惰性属性，并且只有在初始化后才能使用self。**

将教程的描述打印到控制台。 在教程对象的声明之后添加以下代码：

``` Swift
print(tutorial.description())
```

你在教程对象和通过捕获自我来关闭，因此仅运行作者的deinit方法。

要打破这一循环，你需要了解一种称为捕获列表的语言功能。

>注意：Swift需要在闭包内部使用self。 很好地提醒你，正在捕获对当前对象的引用。 此规则的唯一例外是非转义的闭包，你已在第21章“错误处理”中了解到。

## 捕获列表

**捕获列表是一种语言功能，可帮助你精确控制闭包如何延长其所引用对象的寿命。** 简单来说，它们是闭包捕获的变量列表。 捕获列表将出现在闭包的最开始，在所有参数之前。

首先，考虑以下没有捕获列表的代码段：

``` Swift
var counter = 0
var f = { print(counter) }
counter = 1
f()
```

闭包f（）打印计数器变量的更新值1，因为它引用了计数器变量。 现在添加一个捕获列表[c =计数器]：

``` Swift
counter = 0
f = { [c = counter] in print(c) }
counter = 1
f()
```

在大多数情况下，你不必费心创建新的变量名，例如c。 速记捕获列表[counter]创建一个遮盖原始计数器的局部变量counter。

``` Swift
counter = 0
f = { [counter] in print(counter) }
counter = 1
f()
```

在这种情况下，由于counter是带阴影的副本，因此闭包f（）也会输出0。

处理对象时，请记住，“常量”对于引用类型具有不同的含义。 对于引用类型，捕获列表将使闭包捕获并存储存储在捕获变量中的当前引用。 通过该引用对对象所做的更改仍将在闭包外部可见。 准备再次打破一些引用循环了吗？ 好！ 这次，你将使用-你猜对了-捕获列表。

### Unowned self

确定教程描述的闭包捕获了自己的强引用，并创建了引用循环。 由于从内存中释放教程对象后就不存在闭包，因此self永远不会为零，因此你可以使用捕获列表将强引用更改为无主引用。

``` Swift
lazy var description: () -> String = { [unowned self] in
    "\(self.title) by \(self.author.name)" 
}
```

没有更多引用循环！ 所有的deinit方法都像以前一样工作，并将以下内容输出到控制台：

``` Swift
Memory management by Cosmin
Goodbye editor Ray!
Goodbye author Cosmin!
Goodbye tutorial Memory management!
```

### Weak self

在某些情况下，你可能无法将自己捕获为无主引用，因为它可能会变成 nil。 考虑以下示例：

``` Swift
let tutorialDescription: () -> String do {
  let author = Author(name: "Cosmin")
  let tutorial = Tutorial(title: "Memory management", author: author) tutorialDescription = tutorial.description
}
print(tutorialDescription())
```

上面的代码使你的游乐场崩溃，因为你在do结束时取消了教程和作者的分配。 在描述捕获列表中将无人为自己更改为弱可解决此问题：

``` Swift
lazy var description: () -> String = { [weak self] in
    "\(self?.title) by \(self?.author.name)" 
}
```

这将产生以下奇怪的输出：

``` Swift
nil by nil
```

[weak self]表示封闭不会延长自我的寿命。 如果表示自我的基础对象消失，则将其设置为nil。 该代码不再崩溃，但会生成警告，你可以修复。

### strong-weak模式

强弱模式也不会延长self的寿命，但是会在进入闭包后将弱引用转换为强引用：

``` Swift
lazy var description: () -> String = { [weak self] in
    guard let self = self else {
        return "The tutorial is no longer available." 
    }
    return "\(self.title) by \(self.author.name)" 
}
```

guard会将弱引用转换为强引用 （如果不是nil的话），因此可以保证生活到封闭结束。 如果这次self为零，并且先前的警告已消失，则打印适当的消息。

# 关键点

+ 如果引用在生命周期的某个时刻可能变为零，则使用弱引用来破坏强引用周期。

+ 当你知道一个引用始终具有一个值并且永远不会为nil时，请使用一个无主引用来打破一个强引用周期。

+ 你必须在封闭的身体内部使用自我。 这是Swift编译器向你暗示的一种方式，你需要注意不要进行循环引用。

+ 捕获列表定义了如何捕获闭包中的值和引用。

+ 强弱模式将弱引用转换为强引用。


