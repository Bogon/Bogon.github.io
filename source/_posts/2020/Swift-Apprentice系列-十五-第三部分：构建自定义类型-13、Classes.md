---
title: 'Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes'
description: 'Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes'
permalink: 'Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes'
copyright: ture
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes
tags:
  - - iOS
  - - Swift
  - - Swift Apprentice
  - - Classes
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Swift Apprentice
abbrlink: 37792
date: 2020-05-13 15:19:35
---

结构向你介绍了命名类型。 在本章中，你将熟悉类，它们非常类似于结构-它们被命名为具有属性和方法的类型。

你将学习**类是与值类型相对的引用类型，而不是值类型**，并且与结构类相比，它们具有明显不同的功能和优点。 虽然你经常会在应用中使用结构来表示值，但通常会使用类来表示对象。

但是，价值与目标的真正含义是什么？

# **创建类**

考虑一下Swift中的以下类定义：

``` Swift
class Person {
    var firstName: String
    var lastName: String

    init(firstName: String, lastName: String) { 
        self.firstName = firstName
        self.lastName = lastName 
    }

    var fullName: String {
        "\(firstName) \(lastName)"
    }
}
let john = Person(firstName: "Johnny", lastName: "Appleseed")
```

很简单！ 定义与其结构对应几乎完全相同可能会让你感到惊讶。 关键字class后跟该类的名称，花括号中的所有内容均为该类的成员。

<!-- more -->

但是，你还可以看到类和结构之间的一些区别：上面的类定义了一个将firstName和lastName都设置为初始值的初始化程序。 与结构不同，**类不会自动提供成员初始化器-这意味着你必须自己提供它**。 如果你忘记提供初始化程序，Swift编译器会将其标记为错误：

![playground](http://cdn.xuebaonline.com/sasb-c-stp1.png "")

除了默认初始化外，类和结构的初始化规则非常相似。 类初始化程序是标记为init的函数，并且必须在init结束之前为所有存储的属性分配初始值。

类初始化还有很多，但是你必须等到第14章“高级类”，它将介绍继承的概念及其对初始化规则的影响。 本章将使用基本的类初始化程序，以便你可以熟悉Swift中的类。

# **引用类型**

在Swift中，结构的实例是不可变的值，而类的实例是可变的对象。 类是引用类型，因此类类型的变量不存储实际的实例，而是将对位置的引用存储在存储实例的内存中。

如果你创建的SimplePerson类实例仅具有以下名称：

``` Swift
class SimplePerson {
  let name: String
  init(name: String) {
    self.name = name 
  }
}
var var1 = SimplePerson(name: "John")
``` 

在内存中看起来像这样：

![playground](http://cdn.xuebaonline.com/sasb-c-stp2.png "")

如果要创建一个新变量var2并为其分配var1的值：

``` Swift
var var2 = var1
```

然后，var1和var2内部的引用将引用内存中的相同位置：

![playground](http://cdn.xuebaonline.com/sasb-c-stp3.png "")

相反，将结构作为值类型存储实际值，从而可以直接访问它。 用以下结构替换SimplePerson类实现：

``` Swift
struct SimplePerson {
  let name: String
}
```

在内存中，该变量不会引用内存中的位置，但该值将排他地属于var1：

![playground](http://cdn.xuebaonline.com/sasb-c-stp4.png "")

在这种情况下，赋值var var2 = var1将复制var1的值：

![playground](http://cdn.xuebaonline.com/sasb-c-stp5.png "")

值类型和引用类型各有其独特的优点和缺点。 在本章的后面，你将考虑在给定情况下使用哪种类型的问题。 现在，让我们研究一下类和结构如何在后台运行。

# **堆与栈**

当创建引用类型（例如类）时，**系统会将实际实例存储在称为堆的内存区域中**。诸如*结构之类的值类型的实例驻留在称为栈的内存区域中*，除非该值是类实例的一部分，在这种情况下，该值与其他类实例一起存储在堆中。

堆和栈在任何程序的执行中都起着至关重要的作用。对它们是什么以及它们如何工作的一般理解将帮助你可视化类和结构之间的功能差异：

+ 系统使用堆栈将任何内容存储在执行的直接线程中；它由CPU严格管理和优化。当函数创建变量时，堆栈将存储该变量，然后在函数退出时销毁它。由于堆栈的组织非常严格，因此非常高效，因此非常快。

+ 系统使用堆存储引用类型的实例。堆通常是一个很大的内存池，系统可以从中请求并动态分配内存块。生命周期是灵活而动态的。

堆不会像栈一样自动销毁其数据；为此，还需要进行其他工作。与在堆栈上相比，这会使在堆上创建和删除数据的过程变慢。

也许你已经弄清楚了它与结构和类的关系。看一下下图：

![playground](http://cdn.xuebaonline.com/sasb-c-stp6.png "")

+ 创建类的实例时，你的代码请求堆上的一块内存来存储实例本身。 这是图表右侧实例中的名字和姓氏。 它将内存的地址存储在堆栈上的命名变量中； 这就是存储在图表左侧的参考。

+ 创建结构实例（不属于类实例的一部分）时，该实例本身存储在堆栈中，并且从不涉及堆。

现在，你已经了解了堆和栈的动态特性，这足以理解你将在类中使用的引用语义，但还不足以要求专业知识。 ：]

# **使用引用**

在第10章“结构”中，你了解了使用结构和其他值类型时涉及的复制语义。 使用该章中的Location和DeliveryArea结构，这里有一些提醒：

``` Swift
struct Location {
    let x: Int
    let y: Int 
}
struct DeliveryArea {
    var range: Double
    let center: Location
}
var area1 = DeliveryArea(range: 2.5,
var area2 = area1 print(area1.range) // 2.5 print(area2.range) // 2.5
area1.range = 4 print(area1.range) // 4.0 print(area2.range) // 2.5
center: Location(x: 2, y: 4))
```

当你将area1的值分配给area2时，area2会收到area1值的副本。 这样，当area1.range收到新值4时，数字仅反映在area1中，而area2仍具有原始值2.5。

由于类是引用类型，因此当你分配给类类型的变量时，系统不会复制该实例； 它仅复制引用。

将之前的代码与以下代码进行比较：

``` Swift
var homeOwner = john
john.firstName = "John" // John wants to use his short name! 
john.firstName // "John"
homeOwner.firstName // "John"
```

如你所见，john和homeOwner真正具有相同的值！

类实例之间的这种隐含共享在传递事物时产生了一种新的思维方式。 例如，如果john对象发生更改，则所有引用john的内容都会自动看到更新。 如果使用的是结构，则必须单独更新每个副本，否则它的旧值仍为“ Johnny”。

# **对象身份**

在前面的代码示例中，很容易看到john和homeOwner指向同一个对象。 代码简短，两个引用均被命名为变量。 如果你想查看变量后面的值是John怎么办？

你可能会考虑检查firstName的值，但是你怎么知道它是你要查找的John而不是冒名顶替者？ 或更糟糕的是，如果约翰再次改名怎么办？

在Swift中，`===运算符使`你可以检查一个对象的身份是否等于另一个对象的身份：

``` Swift
john === homeOwner // true
```

就像==运算符检查两个值是否相等一样，===标识运算符比较两个引用的内存地址。 它告诉你引用的值是否相同。 也就是说，它们指向堆上的同一数据块。

这意味着此===运算符可以区分你要查找的John和冒名顶替的John之间的区别：

``` Swift
let imposterJohn = Person(firstName: "Johnny",
                          lastName: "Appleseed")
john === homeOwner // true
john === imposterJohn // false
imposterJohn === homeOwner // false
// Assignment of existing variables changes the instances the variables reference.
homeOwner = imposterJohn
john === homeOwner // false
homeOwner = john
john === homeOwner // true
```

当你不能依靠常规等式（==）来比较和标识你关心的对象时，这特别有用：

``` Swift
// Create fake, imposter Johns. Use === to see if any of these imposters are our real John.
var imposters = (0...100).map { _ in
  Person(firstName: "John", lastName: "Appleseed")
}
// Equality (==) is not effective when John cannot be identified by his name alone
imposters.contains {
    $0.firstName == john.firstName && $0.lastName == john.lastName 
} // true
```

通过使用标识运算符，你可以验证引用本身是否相等，并将我们的真实约翰与其他人分开：

``` Swift
// Check to ensure the real John is not found among the imposters.
imposters.contains {
    $0 === john
} // false
// Now hide the "real" John somewhere among the imposters.
imposters.insert(john, at: Int.random(in: 0..<100))
    // John can now be found among the imposters.
    imposters.contains { $0 === john
} // true
// Since `Person` is a reference type, you can use === to grab the real John out of the list of imposters and modify the value. 
// The original `john` variable will print the new last name! 
if let indexOfJohn = imposters.firstIndex(where: { $0 === john }) {         
    imposters[indexOfJohn].lastName = "Bananapeel"
}
john.fullName // John Bananapeel
```

实际上，你可能会发现在日常Swift中不会使用身份运算符===。 重要的是要了解它的功能以及它对引用类型的属性的说明。

# **方法和可变性**

如前所述，类的实例是可变的对象，而结构的实例是不可变的值。 以下示例说明了这种差异：

``` Swift
 struct Grade {
    let letter: String
    let points: Double
    let credits: Double
}

class Student {
    var firstName: String
    var lastName: String
    var grades: [Grade] = []
    init(firstName: String, lastName: String) { 
        self.firstName = firstName
        self.lastName = lastName 
    }
    func recordGrade(_ grade: Grade) {
        grades.append(grade) 
    }
}
let jane = Student(firstName: "Jane", lastName: "Appleseed") 
let history = Grade(letter: "B", points: 9.0, credits: 3.0) 
var math = Grade(letter: "A", points: 16.0, credits: 4.0)
jane.recordGrade(history) 
jane.recordGrade(math)
```

请注意，recordGrade（_ :)可以通过在末尾添加更多值来改变数组的等级。 尽管这会更改当前对象，但不需要关键字mutating。

如果你尝试过使用结构体，则可能会遇到编译器错误，因为结构体是不可变的。 请记住，当你**更改结构的值时，不是在修改值，而是在创建新值。 关键字变异标记方法用新值替换当前值**。 **对于类，不使用此关键字，因为实例本身是可变的**。

# **可变性和常数**

前面的示例可能会让你想知道即使jane被定义为常量，如何也可以对其进行修改。 定义常量时，不能更改常量的值。 如果你回想起有关值类型与引用类型的讨论，请务必记住，对于引用类型，该值是一个引用。

![playground](http://cdn.xuebaonline.com/sasb-c-stp7.png "")

红色“ reference1”的值是存储在jane中的值。 此值是一个引用，并且因为jane被声明为常量，所以此引用是常量。 如果你试图将另一个学生分配给简，则会出现编译器错误：

``` Swift
 // Error: jane is a `let` constant
jane = Student(firstName: "John", lastName: "Appleseed")
```

如果改为将jane声明为变量，则可以在堆上为其分配Student的另一个实例：

``` Swift
 var jane = Student(firstName: "Jane", lastName: "Appleseed")
jane = Student(firstName: "John", lastName: "Appleseed")
```

在将另一个Student分配给jane之后，jane后面的参考值将更新为指向新的Student对象。

![playground](http://cdn.xuebaonline.com/sasb-c-stp8.png "")

由于没有东西会引用原始的“ Jane”对象，因此它的内存将被释放以在其他地方使用。 你将在第23章“内存管理”中了解更多信息。

可以通过使用常量来保护类的任何单个成员免遭修改，但是由于引用类型本身不被视为值，因此不能整体保护它们免受突变的影响。

# **了解状态和副作用**

由于**类的本质是它们都可以被引用并且是可变的**，因此存在许多可能性，也涉及程序员的许多问题。 请记住：**如果用新值更新类实例，则对该实例的每个引用也将看到新值**。

你可以利用此优势。 也许你将学生实例传递给运动队，成绩单和班级名册。 想象所有这些实体都需要知道学生的成绩，并且由于它们都指向同一个实例，因此当实例记录它们时，它们都会看到新的成绩。

![playground](http://cdn.xuebaonline.com/sasb-c-stp9.png "")

**共享的结果是类实例具有状态**。 状态变化有时可能很明显，但往往不是。

为了说明这一点，请在Student类中添加一个credits属性。

``` Swift
var credits = 0.0
```

并更新recordGrade（_ :)以使用此新属性：

``` Swift
func recordGrade(_ grade: Grade) { 
    grades.append(grade)
    credits += grade.credits 
}
```

在这个经过稍微修改的Student示例中，recordGrade（_ :)现在将积分数添加到credits属性中。 调用recordGrade（_ :)具有更新积分的副作用。

现在，观察副作用如何导致不明显的行为：

``` Swift
jane.credits // 7
// The teacher made a mistake; math has 5 credits
math = Grade(letter: "A", points: 20.0, credits: 5.0) 
jane.recordGrade(math)
jane.credits // 12, not 8!
```

修改过的Student类的编写者这样做的天真之处在于，假设相同的成绩不会被记录两次！

由于类实例是可变的，因此你需要注意共享引用周围的意外行为。

尽管在这样的小示例中令人困惑，但随着类的大小和复杂性的增加，可变性和状态可能会变得极为混乱。

对于此类学生来说，这种情况会更加常见，该类可缩放到20个存储的属性并具有10个方法。

# **使用扩展名扩展类**

如你在结构中所见，可以使用extension关键字重新打开类以添加方法和计算属性。 将fullName计算属性添加到Student：

``` Swift
extension Student {
  var fullName: String {
    "\(firstName) \(lastName)"
  }
}
```

也可以使用继承将功能添加到类中。 你甚至可以将新存储的属性添加到继承的类。 你将在下一章中详细探讨该技术。

# **何时使用类与结构**

现在你知道了类和结构之间的区别和相似之处，你可能想知道“我怎么知道使用哪个？”

## ***值与对象***
尽管没有严格的规则，所以你应该考虑值与引用语义之间的关系，并使用结构作为值，将类用作具有标识的对象。

对象是引用类型的实例，并且此类实例具有标识的含义，即每个对象都是唯一的。仅仅因为它们拥有相同的状态，就不会将两个对象视为相等。因此，你可以使用===来查看对象是否真正相等，而不仅仅是包含相同的状态。相反，如果值类型的实例是相同的值，则将它们视为相等。

例如：交付范围是一个值，因此你将其实现为结构。学生是对象，因此你可以将其实现为类。用非技术术语来说，即使两个学生的名字相同，也不会将其视为相等！

## ***速度***

速度是一回事，因为**结构依赖于较快的堆栈**，而**类则依赖于较慢的**堆。如果你有更多实例（数百个或更多），或者这些实例仅在内存中存在很短时间，则倾向于使用结构。如果你的实例在内存中的生命周期更长，或者你将创建相对较少的实例，则堆上的类实例不会产生太多开销。

例如，你将使用一个结构来计算基于许多基于GPS的航路点的行驶路线的总距离，例如你在第10章“结构”中使用的“位置”结构。你会创建许多航路点，但是在修改路线时会很快创建和销毁它们。

你也可以为对象使用一个类来存储路线历史记录，因为每个用户只有一个对象，并且在用户的整个生命周期中都可能使用相同的历史记录对象。

## ***极简主义方法***

另一种方法是仅使用你需要的内容。如果你的数据永远不会改变，或者你需要简单的数据存储，请使用结构。如果需要更新数据，并且需要数据包含逻辑来更新其自身的状态，请使用类。通常，最好从结构开始。如果以后需要某个类的附加功能，则只需将结构转换为一个类。

# **结构与类回顾**

## ***结构体***
+ 对于表示值很有用。
+ 隐式复制值。
+ 用let声明时变得完全不变。
+ 快速内存分配（堆栈）。

## ***类***

+ 用于表示具有身份的对象。
+ 隐式共享对象。
+ 即使使用let声明，内部也可以保持可变。
+ 较慢的内存分配（堆）。

# **关键点**

+ 与结构一样，类是可以具有属性和方法的命名类型。
+ 类使用分配时共享的引用。
+ 类实例称为对象。
+ 对象是可变的。
+ 可变性引入状态，这会增加管理对象时的复杂性。
+ 需要引用语义时使用类； 值语义的结构。

