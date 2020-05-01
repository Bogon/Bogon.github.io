---
title: Swift中构造函数与静态工厂方法的比较
description: Swift中构造函数与静态工厂方法的比较
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

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当实例化对象时，哪个更好：构造函数还是静态工厂方法？ 我们来看一看。

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

这是使用构造函数制作 ```red tomato``` 颜色对象的方法：

``` Swift
Color tomato = new Color(255, 99, 71);
```

这是使用静态工厂方法的方法：
``` Swift
Color tomato = Color.makeFromPalette(255, 99, 71);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```makeFromPalette（）``` 在语义上比新的 ```Color（）``` 更丰富。 如果我们将它们传递给构造函数，谁知道这三个数字意味着什么。 但是“palette”可以帮助我们立即解决所有问题。

但是，正确的解决方案是使用多态和封装，以将问题分解为几个语义丰富的类：

``` Swift
interface Color {}
class HexColor implements Color {
    private final int hex;
    HexColor(int h) {
        this.hex = h;
    }
}
class RGBColor implements Color {
    private final Color origin;
    RGBColor(int red, int green, int blue) {
        this.origin = new HexColor(
            red << 16 + green << 8 + blue
        );
    }
}
```

现在，我们使用类的构造函数：

``` Swift
Color tomato = new RGBColor(255, 99, 71);
```

</br>

# **缓存**

假设我在应用程序中的多个位置需要一个 ```red tomato``` ：

``` Swift
Color tomato = new Color(255, 99, 71);
// ... sometime later
Color red = new Color(255, 99, 71);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此创建两个对象，这显然是低效的，因为它们是相同的。 最好将第一个实例保留在内存中的某个位置，并在第二个调用到达时将其返回。 静态工厂方法可以解决这个问题：

``` Swift
Color tomato = Color.makeFromPalette(255, 99, 71);
// ... sometime later
Color red = Color.makeFromPalette(255, 99, 71);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后在 ```Color``` 内的某个地方，保存一个私有静态 ```Map``` ，其中已实例化了所有对象：

``` Swift
class Color {
    private static final Map < Integer, Color > CACHE =
        new HashMap < > ();
    private final int hex;
    static Color makeFromPalette(int red, int green, int blue) {
        final int hex = red << 16 + green << 8 + blue;
        return Color.CACHE.computeIfAbsent(
            hex, h - > new Color(h)
        );
    }
    private Color(int h) {
        return new Color(h);
    }
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是非常高效的。 对于像我们的 ```Color``` 这样的对象，问题可能不会那么明显，但是当对象较大时，其实例化和垃圾回收可能会浪费大量时间。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，有一种面向对象的方法可以解决此问题。 我们只是介绍了一个新的类 ```Palette``` ，它将变成一个颜色存储区：

``` Swift
class Palette {
    private final Map < Integer, Color > colors =
        new HashMap < > ();
    Color take(int red, int green, int blue) {
        final int hex = red << 16 + green << 8 + blue;
        return this.computerIfAbsent(
            hex, h - > new Color(h)
        );
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们一次创建一个 ```Palette``` 实例，并要求它在每次需要时向我们返回一种颜色：

``` Swift
Color tomato = palette.take(255, 99, 71);
// Later we will get the same instance:
Color red = palette.take(255, 99, 71);
```

**没有静态方法，没有静态属性。**

</br>

# **子类型**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们的 ```Color``` 类具有 ```lighter()``` 方法，该方法应该将颜色转移到下一个可用的 ```lighter``` 上：

``` Swift
class Color {
    protected final int hex;
    Color(int h) {
        this.hex = h;
    }
    public Color lighter() {
        return new Color(hex + 0x111);
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，有时更希望通过一组可用的 ```Pantone``` 颜色选择下一种较浅的颜色：

``` Swift
class PantoneColor extends Color {
    private final PantoneName pantone;
    PantoneColor(String name) {
        this(new PantoneName(name));
    }
    PantoneColor(PantoneName name) {
        this.pantone = name;
    }
    @Override
    public Color lighter() {
        return new PantoneColor(this.pantone.up());
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们创建一个静态工厂方法，该方法将决定哪种 ```Color``` 实现最适合我们：

``` Swift
class Color {
    private final String code;
    static Color make(int h) {
        if (h == 0xBF1932) {
            return new PantoneColor("19-1664 TPX");
        }
        return new RGBColor(h);
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如果要求使用真正的红色，我们将返回 ```PantoneColor``` 的一个实例。 在所有其他情况下，它只是标准的 ```RGBColor``` 。 该决定是通过静态工厂方法做出的。 这就是我们所说的：

``` Swift
Color color = Color.make(0xBF1932);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 由于构造函数只能返回在其中声明的类，因此不可能对构造函数执行相同的 ```“forking”``` 。静态方法具有返回 ```Color``` 的任何子类型所需的所有自由。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 但是，在面向对象的世界中，我们可以而且必须以不同的方式去做。 首先，我们将 ```Color``` 设置为接口：

``` Swift
interface Color {
    Color lighter();
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们将需要的构造方法移至其自己的类 ```Colors``` ，就像在上一个示例中所做的那样：

``` Swift
class Colors {
    Color make(int h) {
        if (h == 0xBF1932) {
            return new PantoneColor("19-1664-TPX");
        }
        return new RGBColor(h);
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而且我们将使用 ```Colors``` 类的实例，而不是 ```Color``` 内部的静态方法：

``` Swift
colors.make(0xBF1932);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，这仍然不是真正的面向对象的思维方式，因为我们正在将决策权从它所属的对象上移开。 通过静态工厂方法 ```make（```）或新类 ```Colors``` （实际上并不重要），我们将对象分成两部分。 第一部分是对象本身，第二部分是决策算法，它位于其他地方。
面向对象的设计是将逻辑放入 ```PantoneColor``` 类的对象中，该对象将装饰原始的RGBColor：

``` Swift
class PantoneColor {
    private final Color origin;
    PantoneColor(Color color) {
        this.origin = color;
    }
    @Override
    public Color lighter() {
        final Color next;
        if (this.origin.hex() == 0xBF1932) {
            next = new RGBColor(0xD12631);
        } else {
            next = this.origin.lighter();
        }
        return new PantoneColor(next);
    }
)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们创建一个 ```RGBColor``` 实例，并使用 ```PantoneColor``` 装饰它：

``` Swift
Color red = new PantoneColor(
    new RGBColor(0xBF1932)
);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要求红色返回较浅的颜色，它返回 ```Pantone``` 调色板中的一种，而不是仅在 ```RGB``` 坐标中较浅的颜色：

``` Swift
Color lighter = red.lighter(); // 0xD12631
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，这个示例是原始的，如果我们真的希望它适用于所有 ```Pantone``` 颜色，则需要进一步改进。 逻辑必须保留在类内部，而不是外部，静态工厂方法甚至其他补充类中。 当然，我在说的是属于这个特定类的逻辑。 如果与类实例的管理有关，则可以有容器和存储，就像上面的上一个示例一样。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总而言之，我强烈建议您不要使用静态方法，尤其是当它们要替换对象构造函数时。 通过其构造函数生成对象是任何面向对象软件中最“神圣”的时刻，请不要错过它的美丽。