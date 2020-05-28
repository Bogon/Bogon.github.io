---
title: 'Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes'
description: 'Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes'
permalink: 'Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes'
copyright: ture
date: 2020-05-13 15:53:20
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced Classes
tags:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
    - [Advanced Classes]
    - [Swift 5.0]
categories:
    - [iOS]
    - [Swift]
    - [Swift Apprentice]
---

上一章向你介绍了在Swift中定义和使用类的基础知识。 类是引用类型，可用于支持传统的面向对象编程。

类引入了继承，覆盖，多态性，这使其适合于此目的。 这些额外的功能需要特别考虑初始化，类层次结构以及了解内存中的类生命周期。

本章将向你介绍Swift中类的优点，并帮助你了解如何创建更复杂的类。

# **介绍继承**

在上一章中，你看到了Grade结构和一对班级示例：Person和Student。

``` Swift
struct Grade {
    var letter: Character
    var points: Double
    var credits: Double
}

class Person {
    var firstName: String
    var lastName: String
    init(firstName: String, lastName: String) { 
        self.firstName = firstName
        self.lastName = lastName 
    }
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
```


<!-- more -->

不难看出“人”与“学生”之间存在冗余。 也许你还注意到，学生就是人！

这个简单的案例演示了类继承的思想。 就像在现实世界中一样，你可以将学生视为一个人，你可以用以下代码替换原始的Student类实现，从而在代码中表示相同的关系：

``` Swift
class Student: Person {
    var grades: [Grade] = []
    func recordGrade(_ grade: Grade) { 
        grades.append(grade)
    } 
}
```

在此修改的示例中，Student类现在从Person继承，在命名Student后用冒号表示，然后是Student继承的类，在本例中为Person。

通过继承，学生自动获取在Person类中声明的属性和方法。 在代码中，可以说一个学生是一个人是准确的。

现在，通过减少重复的代码，你可以创建具有Person的所有属性和方法的Student对象：

``` Swift
let john = Person(firstName: "Johnny", lastName: "Appleseed")
let jane = Student(firstName: "Jane", lastName: "Appleseed")
john.firstName // "John" 
jane.firstName // "Jane"
```

此外，只有Student对象将具有Student中定义的所有属性和方法：

**从另一个类继承的类称为子类或派生类，从其继承的类称为超类或基类。**

子类化的规则非常简单：

+ Swift类只能从另一个类继承，这一概念称为“单一”遗产。
+ 子类化的深度没有限制，这意味着你可以从类中子类化

这也是一个子类，如下所示：

``` Swift
class BandMember: Student {
    var minimumPracticeTime = 2
}

class OboePlayer: BandMember {
    // This is an example of an override, which we’ll cover soon. 
    override var minimumPracticeTime: Int {
        get { super.minimumPracticeTime * 2 } 
        set {
            super.minimumPracticeTime = newValue / 2 
        }
    } 
}
```

子类链称为类层次结构。 在此示例中，层次结构为OboePlayer-> BandMember-> Student-> Person。 类层次结构类似于家谱。 因此，超类也称为其子类的父类。

# **多态性**

学生/人员关系证明了计算机科学概念，即多态性。 简而言之，多态是一种编程语言根据上下文对对象进行不同处理的能力。

OboePlayer当然是OboePlayer，但它也是一个Person。 由于它是从Person派生的，因此可以在任何使用Person对象的地方使用OboePlayer对象。

此示例演示如何将OboePlayer视为Person：

``` Swift
func phonebookName(_ person: Person) -> String {
    "\(person.lastName), \(person.firstName)" 
}
let person = Person(firstName: "Johnny", lastName: "Appleseed")
let oboePlayer = OboePlayer(firstName: "Jane", lastName: "Appleseed")
phonebookName(person) // Appleseed, Johnny
phonebookName(oboePlayer) // Appleseed, Jane
```

由于OboePlayer是从Person派生的，因此它是对phonebookName（_ :)函数的有效输入。 更重要的是，该函数不知道传入的对象不是常规Person。 它只能观察在Person基类中定义的OboePlayer元素。

利用**类继承提供的多态性特性**，Swift根据上下文对oboePlayer指向的对象进行不同的处理。 当你具有不同的类层次结构但想要在通用类型或基类上运行的代码时，这特别有用。

# **运行时层次结构检查**

现在，你正在使用多态进行编码，你可能会发现以下情况：变量后面的特定类型可能不同。 例如，你可以将变量hallMonitor定义为Student：

``` Swift
var hallMonitor = Student(firstName: "Jill", lastName: "Bananapeel")
```

但是，如果hallMonitor是更多派生的类型，例如OboePlayer，该怎么办？

``` Swift
hallMonitor = oboePlayer
```

由于hallMonitor定义为Student，因此编译器不允许你尝试为更派生的类型调用属性或方法。
幸运的是，Swift提供了as运算符来将属性或变量视为另一种类型：

+ as：转换为在编译时成功的特定类型，例如转换为超类型。
+ as ?：可选的向下转换（到子类型）。 如果向下转换失败，则表达式的结果为nil。
+ as !：强制降档。 如果向下失败，程序将崩溃。 很少使用它，并且只有在你确定投射永远不会失败时才使用。

这些可以在各种情况下用于将hallMonitor视为BandMember，或将oboePlayer视为来源较少的Student。

``` Swift
oboePlayer as Student
(oboePlayer as Student).minimumPracticeTime // ERROR: No longer a band member!
hallMonitor as? BandMember
(hallMonitor as? BandMember)?.minimumPracticeTime // 4 (optional)
hallMonitor as! BandMember // Careful! Failure would lead to a runtime crash.
(hallMonitor as! BandMember).minimumPracticeTime // 4 (force unwrapped)
```

可选的 downcast as? 在let或guard语句中特别有用：

``` Swift
if let hallMonitor = hallMonitor as? BandMember {
  print("This hall monitor is a band member and practices
  at least \(hallMonitor.minimumPracticeTime) hours per week.")
}
```

你可能想知道在什么情况下可以单独使用as运算符。 任何对象都包含其父类的所有属性和方法，那么将其强制转换为已经存在的对象有什么用？

Swift具有强大的类型系统，对特定类型的解释可能会影响静态分派，也就是决定在编译时使用哪个操作的过程。

听起来令人困惑？ 让我们来看一个例子。

假设你有两个具有相同名称和参数名称的函数，用于两种不同的参数类型：

``` Swift
func afterClassActivity(for student: Student) -> String {
    "Goes home!"
}
func afterClassActivity(for student: BandMember) -> String {
  "Goes to practice!"
}
```

如果要将oboePlayer传递到afterClassActivity（for :)，将调用以下哪个实现？ 答案在于Swift的调度规则，在这种情况下，它将选择OboePlayer中采用的更具体的版本。

相反，如果你将oboePlayer强制转换为Student，则Student版本将被称为：

``` Swift
 afterClassActivity(for: oboePlayer) // Goes to practice!
afterClassActivity(for: oboePlayer as Student) // Goes home!
```

# **继承，方法和覆盖**

子类接收其超类中定义的所有属性和方法，以及子类为其自身定义的所有其他属性和方法。 从这个意义上说，子类是可加的。

例如，你看到Student类可以添加其他属性和方法来处理学生的成绩。 这些属性和方法可用于任何Person类实例，但可完全用于Student子类。

除了创建自己的方法外，子类还可以覆盖其超类中定义的方法。 再举一个例子，假设学生运动员如果三门或三门以上的课程不及格，就没有资格参加体育项目。 这意味着你需要以某种方式跟踪成绩不佳的情况，例如：

``` Swift
class StudentAthlete: Student {
    var failedClasses: [Grade] = []
    override func recordGrade(_ grade: Grade) { 
        super.recordGrade(grade)
        if grade.letter == "F" {
            failedClasses.append(grade) 
        }
    }

    var isEligible: Bool {
        failedClasses.count < 3 
    }
}
```

在此示例中，StudentAthlete类覆盖了recordGrade（_ :)，因此它可以跟踪学生失败的任何课程。 StudentAthlete具有自己的计算属性isEligible，该属性使用此信息来确定运动员的资格。
**覆盖方法时，在方法声明之前使用override关键字**。

如果你的子类具有与其父类相同的方法声明，但是省略了override关键字，则Swift将发出编译器错误：

![playground](https://cdn.xuebaonline.com/sasb-ac-stp1.png "")

这非常清楚地表明一种方法是否覆盖了现有方法。

# super介绍

你可能还注意到覆盖方法中的super.recordGrade（grade）行。 super关键字类似于self，除了它将在最近的实现超类中调用该方法。 在StudentAthlete中的recordGrade（_ :)示例中，调用super.recordGrade（grade）将执行Student类中定义的方法。

还记得继承如何让你使用名字和姓氏属性定义Person并避免在子类中重复这些属性吗？ 同样，能够调用超类方法意味着你可以编写代码以在Student中记录一次成绩，然后根据需要在子类中对其进行“调用”。

尽管并不总是必需的，但在Swift中重写方法时，调用super通常很重要。 super调用将在成绩数组中记录成绩本身，因为该行为在StudentAthlete中没有重复。 调用super也是一种避免在StudentAthlete和Student中重复代码的方法。

# **何时调用Super**

你可能会注意到，恰恰在你调用super时，可能会对覆盖的方法产生重要影响。

假设你用以下版本替换StudentAthlete类中重写的recordGrade（_ :)方法，该版本每次记录成绩时都会重新计算不合格的类：

``` Swift
override func recordGrade(_ grade: Grade) { 
    var newFailedClasses: [Grade] = []
    for grade in grades {
        if grade.letter == "F" {
            newFailedClasses.append(grade) 
        }
    }
    failedClasses = newFailedClasses
    super.recordGrade(grade)
}
```

此版本的recordGrade（_ :)使用grades数组查找失败类的当前列表。 如果你发现以上代码中的错误，那就好了！ 由于你最后一次调用超级类，因此如果新的grade.letter为F，则该代码将无法正确更新failedClasses。

最佳做法是在覆盖时先调用方法的super版本。 这样，超类将不会受到其子类引入的任何副作用，并且该子类将不需要知道超类的实现细节。

# **防止继承**

有时你会想要禁止特定类的子类。**Swift为你提供了final关键字，以确保一个类永远不会获得子类**：

``` Swift
 final class FinalStudent: Person {}
class FinalStudentAthlete: FinalStudent {} // Build error!
```

通过将FinalStudent类标记为final，可以告诉编译器阻止任何类从FinalStudent继承。 这可以提醒你-或你团队中的其他人！ -该类并非设计为具有子类。

此外，如果要允许一个类具有子类，但又要防止单个方法被覆盖，则可以将单个方法标记为最终方法：

``` Swift
class AnotherStudent: Person {
    final func recordGrade(_ grade: Grade) {} 
}
class AnotherStudentAthlete: AnotherStudent {
    override func recordGrade(_ grade: Grade) {} // Build error! 
}
```

最初将你编写的任何新类标记为final有好处。 这告诉编译器不需要寻找更多的子类，这可以缩短编译时间，并且还要求你在决定对先前标记为final的类进行子类化时非常明确。 你将在第18章“访问控制和代码组织”中了解有关控制谁可以覆盖类的更多信息。

# **继承和类初始化**

上一章简要介绍了类初始化器，它们与struct对应物类似。 对于子类，关于如何设置实例还有更多注意事项。

>注意：在本章的讨论区中，我将Student和StudentAthlete重命名为NewStudent和NewStudentAthlete，以使两个版本并排运行。

修改StudentAthlete类以添加运动员参加的运动列表：

``` Swift
class StudentAthlete: Student {
  var sports: [String]
  // original code
}
```

由于运动没有初始值，因此StudentAthlete必须在其自己的初始值设定项中提供一个：

``` Swift
class StudentAthlete: Student {
    var sports: [String]
    init(sports: [String]) {
        self.sports = sports
        // Build error - super.init isn’t called before 
        //  returning from initializer
    }
  // original code
}
```

哦！ 编译器抱怨你在初始化程序的末尾没有调用super.init：

![playground](https://cdn.xuebaonline.com/sasb-ac-stp2.png "")

子类中的初始化程序需要调用super.init，因为没有它，超类将无法为其所有存储的属性（在这种情况下为firstName和lastName）提供初始状态。

让编译器满意：

``` Swift
class StudentAthlete: Student {
    var sports: [String]
    init(firstName: String, lastName: String, sports: [String]) { 
        self.sports = sports
        super.init(firstName: firstName, lastName: lastName) 
    }
  // original code
}
```

现在，初始化程序将调用其超类的初始化程序，并且构建错误已消失。 请注意，初始化程序现在需要一个firstName和一个lastName来满足调用Person初始化程序的要求。

你还可以在初始化sports属性后调用super.init，强制执行的规则。

# **两阶段初始化**

由于Swift要求所有存储的属性都必须具有初始值，因此子类中的初始化程序必须遵守Swift的两阶段初始化约定。

+ 第一阶段：初始化类实例中从类层次结构的底部到顶部的所有存储属性。 在第一阶段完成之前，你无法使用属性和方法。

+ 第二阶段：现在，你可以使用属性和方法，以及需要使用self的初始化。

如果没有两阶段初始化，则类上的方法和操作可能会在初始化之前与属性进行交互。

在类层次结构的基类中初始化所有存储的属性后，就会发生从第一阶段到第二阶段的过渡。

在子类初始化程序的范围内，你可以认为这是在调用super.init之后产生的。

![playground](https://cdn.xuebaonline.com/sasb-ac-stp3.png "")

这又是StudentAthlete班，运动员会自动获得入门等级：

``` Swift
class StudentAthlete: Student {
    var sports: [String]
    init(firstName: String, lastName: String, sports: [String]) {
        // 1
        self.sports = sports
        // 2
        let passGrade = Grade(letter: "P", points: 0.0, credits: 0.0)
        super.init(firstName: firstName, lastName: lastName) // 4
        recordGrade(passGrade)
}
  // original code
}
```

上面的初始化程序显示了两阶段的初始化操作。

+ 1.首先，初始化StudentAthlete的sports属性。 这是初始化第一阶段的一部分，必须在调用超类初始化程序之前尽早完成。

+ 2.尽管你可以为成绩等创建局部变量，但仍不能调用recordGrade（_ :)，因为该对象仍处于第一阶段。
+ 3.调用super.init。 当返回时，你知道你还初始化了层次结构中的每个类，因为在每个级别都应用了相同的规则。
+ 4.在super.init返回之后，初始化器处于阶段2，因此你调用recordGrade（_ :)。

# **Required和便利的初始值设定项**

你已经知道一个类中可以有多个初始化程序，这意味着你可以从子类中调用任何这些初始化程序。

通常，你会发现你的类具有各种初始化程序，它们只是提供一种“便捷”的方式来初始化对象：

``` Swift
class Student {
    let firstName: String
    let lastName: String
    var grades: [Grade] = []
    init(firstName: String, lastName: String) { 
        self.firstName = firstName
        self.lastName = lastName 
    }
    init(transfer: Student) { 
        self.firstName = transfer.firstName
        self.lastName = transfer.lastName 
    }
    func recordGrade(_ grade: Grade) {
        grades.append(grade) 
    }
}
```

在此示例中，可以使用另一个Student对象构建Student类。 也许学生换了专业？ 两个初始化程序都完全设置了名字和姓氏。

Student的子类在调用super.init时可能依赖于基于Student的初始化程序。 此外，子类甚至可能不提供使用名字和姓氏进行初始化的方法。

你可能会决定基于名字的第一个和最后一个初始化器非常重要，以至于希望所有子类都可以使用它。
Swift通过称为必需的初始化器的语言功能支持此功能。

``` Swift
class Student {
    let firstName: String
    let lastName: String
    var grades: [Grade] = []
    required init(firstName: String, lastName: String) { 
        self.firstName = firstName
        self.lastName = lastName 
    }
    // original code
}
```

在上面的Student的修改版本中，第一个和最后一个基于名称的初始化程序已标记为required关键字。 此关键字将强制Student的所有子类实现此初始化程序。

现在，在Student上有一个必需的初始化程序，StudentAthlete也必须重写并实现它。

``` Swift
class StudentAthlete: Student {
    // Now required by the compiler!
    required init(firstName: String, lastName: String) {
        self.sports = []
        super.init(firstName: firstName, lastName: lastName) 
    }
    // original code
}
``` 

请注意，对于**必需的初始值设定项，无需使用override关键字**。 取而代之的是，必须使用`required关键字`来确保StudentAthlete的任何子类仍实现此必需的初始化程序。


你还可以将初始化程序标记为便捷初始化程序：

``` Swift
class Student {
    convenience init(transfer: Student) {
        self.init(firstName: transfer.firstName, lastName: transfer.lastName)
    }
  // original code
}
```

编译器强制便捷初始化程序调用非便捷初始化程序（直接或间接），而不是处理存储属性本身的初始化。 非便利的初始化程序称为指定的初始化程序，并且受两阶段初始化规则的约束。 你在前面的示例中编写的所有初始化程序实际上都是指定的初始化程序。

如果仅将初始化器用作初始化对象的简便方法，则可能希望将初始化器标记为方便，但是你仍然希望它利用你指定的初始化器之一。

以下是使用指定的初始化和便捷初始化的编译器规则的摘要：

+ 1.指定的初始化程序必须从其直接超类调用指定的初始化程序。
+ 2.便利初始化程序必须从同一类调用另一个初始化程序。
+ 3.便利初始化程序必须最终调用指定的初始化程序。

# **什么时候以及为什么要继承**

本章向你介绍了类继承，以及子类支持的众多编程技术。

但是你可能会问，“我什么时候应该继承？”

很少有对或错的答案，因此你需要了解各种折衷方案，以便针对特定情况做出明智的决定。

以Student和StudentAthlete类为例，你可能决定将StudentAthlete的所有特征简单地放入Student中：

``` Swift
class Student: Person {
  var grades: [Grade]
  var sports: [Sport]
  // original code
}
```

实际上，这可以解决你所有需要的用例。 不参加体育运动的学生只会拥有一个空的体育运动数组，并且可以避免子类化带来的一些额外复杂性。

## ***单一责任***

在软件开发中，被称为“单一责任原则”的准则指出，任何类都应具有单个关注点。 在“学生/学生运动员”中，你可能会争辩说，封装仅对学生运动员有意义的职责不是学生班的工作。

## ***强类型***

子类创建一个附加类型。 使用Swift的类型系统，你可以根据学生运动员而不是普通学生的对象声明属性或行为：

``` Swift
class Team {
    var players: [StudentAthlete] = []
    var isEligible: Bool {
        for player in players {
            if !player.isEligible {
                return false
            } 
        }
        return true
    } 
}
```

一个团队有一些学生运动员。 如果你尝试将常规的Student对象添加到玩家数组中，则类型系统将不允许这样做。 这可能很有用，因为编译器可以帮助你强制执行系统的逻辑和要求。

## ***共享基类***

你可以通过具有互斥行为的类多次对共享基类进行子类化：

``` Swift
// A button that can be pressed.
class Button {
    func press() {}
}
// An image that can be rendered on a button
class Image {}
// A button that is composed entirely of an image.
class ImageButton: Button {
    var image: Image
    init(image: Image) {
        self.image = image 
    }
}
// A button that renders as text.
class TextButton: Button {
    var text: String
    init(text: String) {
        self.text = text 
    }
}
```

在此示例中，你可以想象许多Button子类，它们仅共享可以被按下的事实。 ImageButton和TextButton类可能使用不同的机制来呈现给定的按钮，因此它们可能必须实现自己的行为来处理印刷。

你可以在这里看到如何在Button类中存储图像和文本-更不用说可能存在的任何其他类型的按钮-很快将变得不切实际。 Button与按下行为有关，而子类处理按钮的实际外观和感觉是有意义的。

## ***可扩展性***

有时你需要扩展你不拥有的代码的行为。 在上面的示例中，Button可能是你正在使用的框架的一部分，因此你无法修改或扩展源代码以适合你的特定情况。

但是，你可以将Button子类化，并添加你的自定义子类，以用于需要Button类型对象的代码。

>注意：除了将一个类标记为final外，还可以使用访问控制（将在第18章“访问控制和代码组织”中学习）来指定是否可以将类的任何成员作为子类（也称为覆盖）。 - 或不。

## **身分识别**

最后，重要的是要了解类和类层次结构是什么对象的模型。 如果你的目标是在类型之间共享行为（对象可以做的事情），那么你应该更倾向于使用协议而不是子类。 你将在第16章“协议”中了解协议。

# **了解类的生命周期**

在上一章中，你了解了对象是在内存中创建的，并且它们存储在堆中。堆上的对象不会自动销毁，因为堆只是一个巨大的内存池。如果没有调用堆栈的实用程序，流程将无法自动知道某个内存将不再使用。
在Swift中，决定何时清理堆上未使用对象的机制称为引用计数。简而言之，每个对象都有一个引用计数，该引用计数随该对象的引用而针对每个常量或变量递增，并在每次删除引用时递减。

>注意：你可能会在其他书籍和在线资源中看到称为“保留计数”的参考计数。他们指的是同一件事！

当引用计数达到零时，这意味着该对象现在被丢弃，因为系统中没有任何对象保留对该对象的引用。发生这种情况时，Swift会清理对象。

这是一个对象的参考计数如何变化的演示。请注意，在此示例中仅创建了一个实际对象；一个对象有很多引用。

``` Swift
var someone = Person(firstName: "Johnny", lastName: "Appleseed")
// Person object has a reference count of 1 (someone variable)
var anotherSomeone: Person? = someone
// Reference count 2 (someone, anotherSomeone)
var lotsOfPeople = [someone, someone, anotherSomeone, someone]
// Reference count 6 (someone, anotherSomeone, 4 references in
lotsOfPeople)
anotherSomeone = nil
// Reference count 5 (someone, 4 references in lotsOfPeople)
lotsOfPeople = []
// Reference count 1 (someone)
```

现在，我们创建另一个对象，并使用该引用替换某人。

``` Swift
 someone = Person(firstName: "Johnny", lastName: "Appleseed")
// Reference count 0 for the original Person object!
// Variable someone now references a new object
```

在此示例中，你无需自己做任何工作即可增加或减少对象的引用计数。 这是因为Swift具有称为自动引用计数或ARC的功能。

虽然某些较旧的语言要求你在代码中增加和减少引用计数，但是Swift编译器会在编译时自动添加这些调用。

>注意：如果你使用的是C之类的低级语言，则需要手动释放不再使用的内存。 诸如Java和C＃之类的高级语言使用了称为垃圾回收的东西。 在这种情况下，在清除不再使用的对象之前，该语言的运行时将在你的进程中搜索对对象的引用。 垃圾收集虽然比ARC更强大，但其内存利用率和性能成本却被Apple认为对于移动设备或通用系统语言不可接受。

# **反初始化**

当对象的引用计数达到零时，Swift会将其从内存中删除，并将该内存标记为空闲。

反初始化是类上的一种特殊方法，当对象的引用计数达到零但在Swift将其从内存中删除之前，该方法会运行。

修改人员，如下所示：

``` Swift
class Person {
    // original code
    deinit {
        print("\(firstName) \(lastName) is being removed
          from memory!")
    }
}
```

就像init是类初始化中的一种特殊方法一样，deinit是一种处理去初始化的特殊方法。 与init不同，deinit不是必需的，而是由Swift自动调用的。 你也不需要覆盖它或在其中调用超级。 Swift将确保调用每个类的反初始化器。

如果添加此反初始化程序，则会看到消息Johnny Appleseed已从内存中删除！ 运行前面的示例后，在调试区域中单击“确定”。

你可以根据自己的需要在反初始化器中进行操作。 当对象超出范围时，通常会使用它来清理其他资源，将状态保存到磁盘或执行你可能想要的任何其他逻辑。

# **保持周期和弱引用**

由于Swift中的类依靠引用计数将其从内存中删除，因此了解循环引用的概念很重要。

在学生类中添加代表同学（例如，实验室合作伙伴）和反初始化器的字段，如下所示：

``` Swift
class Student: Person {
  var partner: Student?
  // original code
  deinit {
    print("\(firstName) is being deallocated!")
  }
}
var alice: Student? = Student(firstName: "Alice", lastName: "Appleseed")
var bob: Student? = Student(firstName: "Bob", lastName: "Appleseed")
alice?.partner = bob bob?.partner = alice
```

现在，假设爱丽丝和鲍勃都辍学了：

``` Swift
 alice = nil
bob = nil
```

如果你在操场上跑步，你会发现看不到Alice / Bob正在被释放的消息，而Swift不会调用deinit。 这是为什么？

爱丽丝（Alice）和鲍勃（Bob）互相引用，因此引用计数永远不会达到零！ 更糟的是，通过为nice和bob分配nil，不再有对初始对象的引用。 这是循环引用的经典案例，这会导致称为内存泄漏的软件错误。

由于内存泄漏，即使其实际生命周期已经结束，也无法释放内存。 循环引用是内存泄漏的最常见原因。 幸运的是，有一种方法可以使Student对象可以引用另一个Student而又不倾向于循环引用，这是通过使引用变弱来实现的：

``` Swift
class Student: Person {
  weak var partner: Student?
  // original code
}
```

这个简单的修改将伙伴变量标记为弱，这意味着该变量中的引用将不参与引用计数。 当引用不是很弱时，它称为强引用，这是Swift中的默认设置。 必须将弱引用声明为可选类型，以便在释放所引用的对象时，该引用自动变为nil。

# **关键点**

+ 类继承是类的最重要特征之一，并且可以实现多态。

+ 子类化是一个强大的工具，但最好知道何时进行子类化。 子类，当你要扩展对象时，可以从子类和超类之间的“是”关系中受益，但要注意继承的状态和深层的类层次结构。

+ 当你覆盖子类中的方法时，关键字override使你清楚。

+ 关键字final可用于防止类被子类化。

+ Swift类使用两阶段初始化作为安全措施来确保所有存储属性在使用之前被初始化。

+ 类实例具有自己的生命周期，这些生命周期由其引用控制计数。

+ 自动参考计数或ARC为你处理参考计数自动，但是请务必注意循环引用。
