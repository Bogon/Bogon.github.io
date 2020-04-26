---
title: Swift适配器设计模式
permalink: Swift适配器设计模式
copyright: ture
date: 2020-04-25 18:45:18
keywords: iOS,UIKit,设计模式,抽象,Swift,适配器设计模式,重构, adapter design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [适配器设计模式]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过使用真实示例和 ```Swift``` 中的适配器设计模式，将不兼容的对象转换为目标接口或类。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在设计模式中，适配器模式（英语：adapter pattern）有时候也称包装样式或者包装(wrapper)。将一个类的接口转接成用户所期待的。一个适配使得因接口不兼容而不能在一起工作的类能在一起工作，做法是将类自己的接口包裹在一个已存在的类中。


<!-- more -->

# **结构**

有两种类型的适配器模式：

+ **对象适配器模式**

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种适配器模式中，适配器容纳一个它包裹的类的实例。在这种情况下，适配器调用被包裹对象的物理实体。

    ![对象适配器模式](http://q8wtfza4q.bkt.clouddn.com/adp-stp1.png "对象适配器模式")

<br>

+ **类适配器模式**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种适配器模式下，适配器继承自已实现的类（一般多重继承）。

![类适配器模式](http://q8wtfza4q.bkt.clouddn.com/adp-stp2.png "类适配器模式")

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适配器是一种结构设计模式，允许具有不兼容接口的对象一起工作。 换句话说，它转换对象的接口以使其适应不同的对象。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，适配器可以将一件事转换为另一件事，有时也称为包装器，因为它可以包装对象并在其周围提供一个新接口。 就像特定接口或旧类的软件加密狗一样。 

<br>

# **适配器设计模式的实现**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Swift``` 中创建适配器实际上是一件非常容易的事情。 你只需要创建一个新对象，将旧对象“装箱”到其中，并在新类或结构上实现所需的接口即可。 换句话说，包装器对象将是我们的适配器，通过包装另一个适配器对象来实现目标接口。

## **Adaptee**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们正在适应特定目标的对象（例如，老式的USB-A端口）。

## **Adapter**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个包装原始对象并产生由某些目标接口指定的新要求的对象（这完成了实际工作，也就是上面的小软件狗）。

## **Target**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是我们要与（我们的 ```USB-C``` 插座）适配器一起使用的对象。

<br>

# **如何在Swift中使用适配器模式？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在代码中集成第三方库，则可以使用适配器，但是其接口与你的要求不匹配。 例如，你可以围绕整个 ```SDK```或后端 ```API``` 端点创建包装器，以创建一个公分母。 👽

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我的示例中，我将使用适配器类包装 ```EKEvent``` 对象，以实现全新的协议。 📆

``` Swift
import Foundation
import EventKit

// our target protocol
protocol Event {
    var title: String { get }
    var startDate: String { get }
    var endDate: String { get }
}

// adapter (wrapper class)
class EventAdapter {

    private lazy var dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy. MM. dd. HH:mm"
        return dateFormatter
    }()

    private var event: EKEvent

    init(event: EKEvent) {
        self.event = event
    }
}

// actual adapter implementation
extension EventAdapter: Event {

    var title: String {
        return self.event.title
    }
    var startDate: String {
        return self.dateFormatter.string(from: event.startDate)
    }
    var endDate: String {
        return self.dateFormatter.string(from: event.endDate)
    }
}

// let's create an EKEvent adaptee instance
let dateFormatter = DateFormatter()
dateFormatter.dateFormat = "MM/dd/yyyy HH:mm"

let calendarEvent = EKEvent(eventStore: EKEventStore())
calendarEvent.title = "Adapter tutorial deadline"
calendarEvent.startDate = dateFormatter.date(from: "07/30/2018 10:00")
calendarEvent.endDate = dateFormatter.date(from: "07/30/2018 11:00")

// now we can use the adapter class as an Event protocol, instead of an EKEvent
let adapter = EventAdapter(event: calendarEvent)
// adapter.title
// adapter.startDate
// adapter.endDate
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个用例是当你必须使用几个现有的最终类或结构，但它们缺少某些功能，并且你想在它们之上构建一个新的目标接口时。 有时，实现包装程序来处理这种混乱情况是一个不错的选择。 🤷‍♂️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是适配器设计模式的全部内容。 通常，用 ```Swift``` 或任何其他编程语言实现它确实很容易，但是它非常有用，有时是不可避免的。 孩子们，请记住：不要在加密狗上太用力！😉