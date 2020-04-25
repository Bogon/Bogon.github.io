---
title: Swift静态工厂设计模式
permalink: Swift静态工厂设计模式
copyright: ture
date: 2020-04-25 11:48:39
keywords: iOS,UIKit,设计模式,初始化,Swift,工厂模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [工厂模式]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本文中，我们一起看一下有关 [静态工厂设计模式](https://zh.wikipedia.org/wiki/%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95 "静态工厂设计模式") 的知识，并展示一些使用Swift编程语言的用例。

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工厂方法模式（英语：Factory method pattern）是一种实现了“工厂”概念的面向对象设计模式。就像其他创建型模式一样，它也是处理在不指定对象具体类型的情况下创建对象的问题。工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。” 

<!-- more -->


> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建一个对象常常需要复杂的过程，所以不适合包含在一个复合对象中。创建对象可能会导致大量的重复代码，可能会需要复合对象访问不到的信息，也可能提供不了足够级别的抽象，还可能并不是复合对象概念的一部分。工厂方法模式通过定义一个单独的创建对象的方法来解决这些问题。由子类实现这个方法来创建具体类型的对象。

</br>

# **静态工厂模式示例**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对象创建中的有些过程包括决定创建哪个对象、管理对象的生命周期，以及管理特定对象的创建和销毁的概念。

## **命名构造函数**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于静态装饰模式的第一个好处是，每个静态装饰方法都可以有一个名称。 ```Apple``` 在其 ```UIColor``` 类实现中使用此模式来创建诸如 ```.red``` ，```.yellow``` 等的命名颜色。请注意，```Swift``` 中的实现实际上不是方法，而是静态属性，它返回实际实例。

``` Swift
public extension TimeInterval {
    public static var second: TimeInterval { return 1 }
    public static var minute: TimeInterval { return 60 }
    public static var hour: TimeInterval { return 3_600 }
    public static var day: TimeInterval { return 86_400 }
    public static var week: TimeInterval { return 604_800 }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果很难记住一天或一周是几秒钟，为什么不为它创建一个命名初始化器。 看到 ```TimeInterval.week``` 比 ```604_800``` 好得多。 😅

</br>

## **缓存对象**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;静态工厂模式的下一个优点是，为了更好地使用内存，它可以支持缓存。 这样，如果你通过静态构造函数（也称为[静态工厂方法](http://www.xuebaonline.com/Swift%E4%B8%AD%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%8E%E9%9D%99%E6%80%81%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83/ "Swift中构造函数与静态工厂方法的比较")）对其进行初始化，则可以限制所创建对象的数量。 🏭

``` Swift
class Service {

    var name: String

    // MARK: - cache

    private static var cache: [String:Service] = [:]

    private static func cached(name: String) -> Service {
        if Service.cache[name] == nil {
            Service.cache[name] = Service(named: name)
        }
        return Service.cache[name]!
    }

    // MARK: - static factory

    static var local: Service {
        return Service.cached(name: "local")
    }

    static var remote: Service {
        return Service.cached(name: "remote")
    }

    // MARK: - init

    init(named name: String) {
        self.name = name
    }
}
```

</br>

## **本地初始化范围**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于静态工厂方法的另一个好处是，你可以将类的初始化限制为私有作用域。 换句话说，只能通过静态工厂方法进行对象创建。 你只需要将 ```init``` 方法设为私有。

``` Swift
public final class Service {

    var name: String

    private init(name: String) {
        self.name = name
    }

    public static var local: Service {
        return Service(name: "local")
    }

    public static var remote: Service {
        return Service(name: "remote")
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **请注意，您可以使用 ```final＆static``` 关键字限制子类化。 如果要允许子类化，则应删除 ```final``` 并为属性使用 ```class``` 关键字而不是 ```static``` ，这样子类可以覆盖工厂方法。** 🤔

</br>

## **静态返回任何数据**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 静态工厂也可以返回给定对象的子类型，但是为什么我们不更进一步呢？ 你还可以从静态方法返回任何类型的数据，我知道这似乎是一种作弊，因为我不是在这里创建 ```UIColor``` 的实例，但是我相信在这里值得一提这个方法，静态工厂。 有时，这个技术可能非常有用。 😛

``` Swift
extension UIColor {

    private static func image(with color: UIColor) -> UIImage {
        let rect = CGRect(x: 0, y: 0, width: 1, height: 1)
        UIGraphicsBeginImageContext(rect.size)
        let context = UIGraphicsGetCurrentContext()!
        context.setFillColor(color.cgColor)
        context.fill(rect)
        let img = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return img!
    }

    static var redImage: UIImage {
        return UIColor.image(with: .red)
    }
}
```

