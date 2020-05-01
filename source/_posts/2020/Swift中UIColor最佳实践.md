---
title: Swift中UIColor最佳实践
description: Swift中UIColor最佳实践
permalink: Swift中UIColor最佳实践
copyright: ture
date: 2020-04-28 10:02:18
keywords: iOS,Swift,UIColor,用户体验
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [UIColor]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解什么是颜色模型，如何将十六进制值转换为 ```UIColor``` 并返回，如何生成随机颜色，以及在哪里可以找到漂亮的调色板。

</br>

# **什么是色彩模型和色彩空间？**

色彩模型是描述颜色的方法。

+ RGB-红色+绿色+蓝色
+ HSB-色相+饱和度+亮度

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有其他几种颜色模型，但是如果你要处理 ```iOS``` 颜色，则应该熟悉上面的两种。 通常，你将使用 ```RGBA``` 和 ```HSBA``` 颜色模型，这些颜色模型基本上与上面的扩展相同，其中字母A代表字母 ```Alpha``` 。 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色彩空间是可以在介质中显示或复制的一组颜色（无论是存储，打印还是显示）。 例如，```sRGB``` 是红色，绿色和蓝色的一组特定强度，它定义了可以通过混合红色，绿色和蓝色的这些范围来再现的颜色。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从理论上已经足够，让我们做一些色彩魔术吧！ 💫💫💫


<!-- more -->

</br>

# **如何在 ``Swift`` 中使用 ``RGBA`` 和 ``HSBA`` 值处理 ``UIColor`` 对象？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还记得旧的 ```Windows``` 时代的旧 ```Paint``` 程序吗？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我经常使用 ```Microsoft Paint``` ，并且喜欢它。 😅

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那时，在没有任何 ```CS``` 知识的情况下，我一直想知道必须选择的0到255之间的数字。 如果你使用 ```RGB``` 颜色，通常会以相同的方式定义颜色，除了在 ```iOS``` 中，值介于0和1之间，但这只是 ```255``` 的一部分的不同表示。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，你可以使用相同的逻辑使用 ```RGB``` 代码制作颜色。

``` Swift
UIColor(red: CGFloat(128)/CGFloat(255),
        green: CGFloat(128)/CGFloat(255),
        blue: CGFloat(128)/CGFloat(255),
        alpha: 1)
// this is just about the same gray color but it's more readable
UIColor(red: 0.5, green: 0.5, blue: 0.5, alpha: 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，你也可以使用HSB值，几乎相同的逻辑适用于这些值，除了色相从 ```0'``` 到 ```360```（由于实际的色轮）之外，但是饱和度和亮度以“百分比百分比”格式 ```0-100``` 进行测量 ，因此，如果将它们映射到浮点值，则必须考虑这些数字。

``` Swift
UIColor(hue: CGFloat(120)/CGFloat(360), saturation: 0.5, brightness: 0.5, alpha: 1)
UIColor(hue: 0.3, saturation: 0.5, brightness: 0.5, alpha: 1)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在让我们扭转这种情况，让我向你展示如何在扩展的帮助下从实际的 ```UIColor``` 实例取回这些组件。

``` Swift
public extension UIColor {
    public var rgba: (red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat) {
        var r: CGFloat = 0
        var g: CGFloat = 0
        var b: CGFloat = 0
        var a: CGFloat = 0
        self.getRed(&r, green: &g, blue: &b, alpha: &a)
        return (r, g, b, a)
    }

    public var hsba: (hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat) {
        var h: CGFloat = 0
        var s: CGFloat = 0
        var b: CGFloat = 0
        var a: CGFloat = 0
        self.getHue(&h, saturation: &s, brightness: &b, alpha: &a)
        return (h, s, b, a)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，这里是如何从 ```UIColor``` 读取红色，绿色蓝色斜线色调饱和度亮度和 ```alpha``` 分量的方法。 通过这个小巧的扩展名，你可以简单地获取组件值并通过其专有名称使用它们。


``` Swift
UIColor.yellow.rgba.red
UIColor.yellow.hsba.hue
```

</br>

# **如何在 ``Swift`` 中将 ``UIColor`` 对象的十六进制颜色转换为 ``RGB`` ，反之亦然？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iOS开发人员101课程，第一个问题：

+ 我该如何从十六进制字符串创建UIColor？
+ 如何将十六进制颜色转换为UIColor？
+ 如何使用十六进制字符串制作UIColor？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，也许这些不是第一个问题，但是绝对是常见问题。 答案很简单：通过扩展。 对于你的需求，我有一个非常好的解决方案，它将处理大多数情况，例如仅使用1、2、3或6个十六进制值。

``` Swift
public extension UIColor {

    public convenience init(hex: Int, alpha: CGFloat = 1.0) {
        let red = CGFloat((hex & 0xFF0000) >> 16) / 255.0
        let green = CGFloat((hex & 0xFF00) >> 8) / 255.0
        let blue = CGFloat((hex & 0xFF)) / 255.0

        self.init(red: red, green: green, blue: blue, alpha: alpha)
    }

    public convenience init(hex string: String, alpha: CGFloat = 1.0) {
        var hex = string.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

        if hex.hasPrefix("#") {
            let index = hex.index(hex.startIndex, offsetBy: 1)
            hex = String(hex[index...])
        }

        if hex.count < 3 {
            hex = "\(hex)\(hex)\(hex)"
        }

        if hex.range(of: "(^[0-9A-Fa-f]{6}$)|(^[0-9A-Fa-f]{3}$)", options: .regularExpression) != nil {
            if hex.count == 3 {

                let startIndex = hex.index(hex.startIndex, offsetBy: 1)
                let endIndex = hex.index(hex.startIndex, offsetBy: 2)

                let redHex = String(hex[..<startIndex])
                let greenHex = String(hex[startIndex..<endIndex])
                let blueHex = String(hex[endIndex...])

                hex = redHex + redHex + greenHex + greenHex + blueHex + blueHex
            }

            let startIndex = hex.index(hex.startIndex, offsetBy: 2)
            let endIndex = hex.index(hex.startIndex, offsetBy: 4)
            let redHex = String(hex[..<startIndex])
            let greenHex = String(hex[startIndex..<endIndex])
            let blueHex = String(hex[endIndex...])

            var redInt: CUnsignedInt = 0
            var greenInt: CUnsignedInt = 0
            var blueInt: CUnsignedInt = 0

            Scanner(string: redHex).scanHexInt32(&redInt)
            Scanner(string: greenHex).scanHexInt32(&greenInt)
            Scanner(string: blueHex).scanHexInt32(&blueInt)

            self.init(red: CGFloat(redInt) / 255.0,
                      green: CGFloat(greenInt) / 255.0,
                      blue: CGFloat(blueInt) / 255.0,
                      alpha: CGFloat(alpha))
        }
        else {
            self.init(red: 0.0, green: 0.0, blue: 0.0, alpha: 0.0)
        }
    }

    var hexValue: String {
        var color = self

        if color.cgColor.numberOfComponents < 4 {
            let c = color.cgColor.components!
            color = UIColor(red: c[0], green: c[0], blue: c[0], alpha: c[1])
        }
        if color.cgColor.colorSpace!.model != .rgb {
            return "#FFFFFF"
        }
        let c = color.cgColor.components!
        return String(format: "#%02X%02X%02X", Int(c[0]*255.0), Int(c[1]*255.0), Int(c[2]*255.0))
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是如何与多种输入形式一起使用的方法：

``` Swift
let colors = [
    UIColor(hex: "#cafe00"),
    UIColor(hex: "cafe00"),
    UIColor(hex: "c"),
    UIColor(hex: "ca"),
    UIColor(hex: "caf"),
    UIColor(hex: 0xcafe00),
]
let values = colors.map { $0.hexValue }
print(values) //["#CAFE00", "#CAFE00", "#CCCCCC", "#CACACA", "#CCAAFF", "#CAFE00"]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我已经尝试过复制 ```CSS``` 规则的行为，因此，如果像 ```#ffffff``` 这样的后继字符串（你可以仅使用f，因为＃是可选的），你将可以减少字符的自由度。 你还可以提供整数，这只是一个简单的“重载”便捷初始化方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，```.hexValue``` 将返回 ```UIColor``` 实例的字符串表示形式。 👏👏👏

</br>

# **如何在 ``Swift`` 中生成随机的 ``UIColor`` ？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于初学者来说，这也是一个非常普遍的问题，我真的不想通过深入的说明在这里浪费时间，```arc4random（）```只是在做它的工作，输出是一种很好的随机生成的颜色。

``` Swift
public extension UIColor {
    public static var random: UIColor {
        let max = CGFloat(UInt32.max)
        let red = CGFloat(arc4random()) / max
        let green = CGFloat(arc4random()) / max
        let blue = CGFloat(arc4random()) / max

        return UIColor(red: red, green: green, blue: blue, alpha: 1.0)
    }
}
```

</br>

# **如何在 ``Swift`` 中用单色创建一个 ``1x1`` 像素的大 ``UIImage`` 对象？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我正在使用此技巧来设置 ```UIButton``` 对象的背景颜色。 原因是状态管理。 如果按下按钮，则背景图像将变暗，因此用户将获得视觉反馈。 但是，通过直接设置 ```UIButton``` 实例的背景颜色将无法正常工作，并且事件上的颜色也不会发生任何变化。 👆

``` Swift
public extension UIColor {
    public var imageValue: UIImage {
        let rect = CGRect(origin: .zero, size: CGSize(width: 1, height: 1))
        UIGraphicsBeginImageContext(rect.size)
        let context = UIGraphicsGetCurrentContext()!
        context.setFillColor(self.cgColor)
        context.fill(rect)
        let newImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return newImage!
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码段将根据源颜色生成一个 ```1x1``` 像素的图像对象。 你可以使用它，但这是带有按钮背景的示例：

``` Swift
button.setBackgroundImage(UIColor.red.imageValue, for: .normal)
```

</br>

# **在线调色板**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你找不到合适的颜色吗？ 没问题，这些链接将帮助你选择合适的链接并获得一些启发。 另外，如果你正在寻找平面UI颜色或材料设计颜色，这些是应该首先前往的正确链接。

+ [***```HTML Color Names```***](https://www.w3schools.com/colors/colors_names.asp "")
+ [***```Color Hunt```***](http://colorhunt.co/ "")
+ [***```Flat UI Colors```***](https://flatuicolors.com/ "")
+ [***```flatuicolorpicker```***](http://www.flatuicolorpicker.com/ "")
+ [***```Material Design Colors```***](https://www.materialui.co/colors "")

> ***``提示:``***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很重要的事情：亲爱的设计师，请永远不要尝试对 ``iOS`` 应用程序使用 ```material design principles``` 。 谢谢。

</br>

# **在线转换颜色**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，有一些很棒的在线颜色转换器工具，如果你正在寻找一个很棒的工具，则应该首先尝试这些工具。

+ [***```uicolor.xyz```***](uicolor.xyz "")
+ [***```rgb.to```***](rgb.to "")
+ [***```colorizer.org```***](colorizer.org "")

</br>

# **管理 ``UIColors``**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你的应用程序目标是 ```iOS 11+``` ，则可以使用 ```asset catalogs``` 来组织你的调色板，但是如果你需要低于 ```iOS 11``` ，我建议你使用带有静态 ```UIColor``` 属性的枚举或结构。 如今，我通常在做这样的事情。

``` Swift
class App {
    struct Color {
        static var green: UIColor { return UIColor(hex: 0x4cd964) }
        static var yellow: UIColor { return UIColor(hex: 0xffcc00) }
        static var red: UIColor { return UIColor(hex: 0xff3b30) }
    }

    /* ... */
}

App.Color.yellow
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常，我将结构中的字体，颜色等分组在一起，但这只是一种处理方式。 你也可以使用 [***```R.swift```***](https://github.com/mac-cain13/R.swift "") 之类的东西或你喜欢的任何东西。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是这样，我想我已经涵盖了有关UIColor的大多数基本问题。 😉


