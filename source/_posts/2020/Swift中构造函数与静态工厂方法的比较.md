---
title: Swift中构造函数与静态工厂方法的比较
permalink: Swift中构造函数与静态工厂方法的比较
copyright: ture
date: 2020-04-25 12:19:43
keywords:  iOS,UIKit,设计模式,构造函数,Swift,静态工厂模式,重构
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [工厂模式]
    - [构造函数]
    - [静态工厂方法]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当实例化对象时，哪个更好：构造函数还是静态工厂方法？ 我们来看一看。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 我相信Joshua Bloch 在他的非常不错的书 《Effective Java》 中首先说了它：与构造函数相比，静态工厂方法是实例化对象的首选方法。 我不同意。 不仅因为我相信静态方法是纯粹的邪恶，而且主要是因为在这种特殊情况下，它们形成好的方法，使我们认为我们必须偏向使用它们。


<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从面向对象的角度分析推理并弄清楚其原因。这是一个具有一个主要构造函数和两个次要构造函数的类：

``` Swift 
class Color {
    private final int hex;
    Color(String rgb) {
        this(Integer.parseInt(rgb, 16));
    }
    Color(int red, int green, int blue) {
        this(red << 16 + green << 8 + blue);
    }
    Color(int h) {
        this.hex = h;
    }
}
```

这是带有三个静态工厂方法的类似类：

``` Swift
class Color {
    private final int hex;
    static Color makeFromRGB(String rgb) {
        return new Color(Integer.parseInt(rgb, 16));
    }
    static Color makeFromPalette(int red, int green, int blue) {
        return new Color(red << 16 + green << 8 + blue);
    }
    static Color makeFromHex(int h) {
        return new Color(h);
    }
    private Color(int h) {
        return new Color(h);
    }
}
```

你更喜欢哪一个？

根据Joshua Bloch的说法，使用静态工厂方法而不是构造函数具有三个基本优点（实际上有四个优点，但是第四个不再适用于Java）：

+ 他们有名字。
+ 他们可以缓存。
+ 它们可以是子类型。

我认为，如果设计错误，那么这三者都是很合理的。 它们是解决问题的好办法。 让我们一一介绍。

# **命名存在**

