---
title: Swift tips
description: Swift tips
permalink: Swift tips
copyright: true
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,CFArray,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced
  Classes,面试题
tags:
  - - iOS
  - - Swift
  - - 开发技巧
categories:
  - - iOS
  - - Swift
  - - 开发技巧
abbrlink: 16980
date: 2021-03-15 09:27:13
---

# 开发技巧01 创建仅执行次的代码片段

```Swift
/// 代码定义
lazy var onceCode: Void = { [weak self] in
	// TODO……

}()

/// 在调用处调用
onceCode
```

# 开发技巧02 xcrun: error: unable to find utility "xctest"

在使用 `Vapor`  作为服务端框架式，在执行 `swift package update` 时，有时会收到如下错误：
``` Bash
/usr/bin/xcrun --sdk macosx --find xctest output:
    xcrun: error: unable to find utility "xctest", not a developer tool or in PATH
```

解决办法，在终端中执行如下命令皆可解决：
```Bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

<!--more-->

# 开发技巧03 调整导航栏item边距办法
iOS 11之后的版本在实际的工程实践中会出现调整导航栏左右按钮距离左右边框的间距，总是会出现距离左右边距 `8px`，具体形成这种结果的原因可以使用一些辅助工具查看一下导航的图层，但是操作图层又过于繁琐。下面给出一个简单的实现：
> 控件布局是可以超出父控件距离的，也就是说,可以使用一个 `UIView` 包裹真正用于显示的 `View` ,然后将 `子View` 的 `x` 设置偏移也就可以解决了。

实现代码示例，具体的实现看各自工程实践经验( `extension`, `NavigationItem`, `NavigationBar`)：
```Swift
import UIKit

extension UIViewController{
  func setNavigatorLeftItem(customView:UIView) {
        var view:UIView
        if #available(iOS 11, *){
            let padding:CGFloat = 20
            let frame = customView.frame
            view = UIView(frame: CGRect(x: 0, y: 0, width: frame.width + padding, height: frame.height))
            customView.frame = customView.frame.offsetBy(dx: -padding, dy: 0)
            view.addSubview(customView)
            
        }else{
            view = customView
        }
        let item = UIBarButtonItem.init(customView: view)
        self.navigationItem.leftBarButtonItem = item
    }
}
```

# 开发技巧04 UIGestureRecognizer 视图添加手势之后，指定子视图响应事件
例如：只希望添加手势的视图响应事件，其他子视图均不响应事件
```Swift
/// add  UITapGestureRecognizer
let tap = UITapGestureRecognizer.init(target: self, action: #selector(tapEvent))
tap.delegate = self
view.isUserInteractionEnabled = true
view.addGestureRecognizer(tap)

/// fliter enable reponse view
/// MARK: - UIGestureRecognizerDelegate
extension xxxxxxController: UIGestureRecognizerDelegate {
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
        let m_xxxxxxView: xxxxxxView = getxxxxxxView()
        if touch.view?.isDescendant(of: m_xxxxxxView) ?? false {
            return false
        }
        
        let m_xxxxxxComponent: xxxxxxComponent = getxxxxxxComponent()
        if touch.view?.isDescendant(of: m_xxxxxxComponent) ?? false {
            return false
        }
        return true
    }
}
```

# 开发技巧05 pod install 安装失败部分库提示：443
例如：在安装过程中，会出现部分三方库提示：443

在`Podfile`中增加或删除某个`pod`后, 也是使用这个命令. 而不是`pod update`.

每次运行`pod install`命令, 下载并安装新的`pod`时, 它会为`Podfile.lock`文件中的每个`pod`写入已安装的版本. 此文件跟踪每个`pod`的已安装版本并锁定这些版本(`.lock`命名因此而来).

当运行`pod install`，它只解析`Podfile.lock`中尚未列在其中的`pod`的依赖库.

对于已经在`Podfile.lock`中列出的`pod`, `Podfile.lock`不会尝试检查是否有更新的版本.

对于尚未在`Podfile.lock`中列出的`pod`, 会搜索与`Podfile`（如中所述`pod 'MyPod', '~>1.2'`）匹配的版本或最新的版本.

> 注: 第一次运行 `pod install` 的时候, `.xcworkspace` 项目和 `Pods` 目录还不存在, `pod install` 命令也会创建.
> `xcworkspace` 和 `Pods` 目录, 但这是 `pod instal`l 命令的顺带作用，而不是它的主要作用.

建议使用如下命令安装：
```Bash
pod install --verbose --no-repo-update
```

# 开发技巧06 **Swiftgen 创建图片管理**
[Swiftgen](https://github.com/SwiftGen/SwiftGen)安装方式和官网给出的使用方法。
根据个人习惯和工程经验，推荐下面方式来使用 `Swiftgen`。

+ 通过 `Homebrew` 安装 `Swiftgen`：
    ```Bash
    $ brew update
    $ brew install swiftgen
    ```
+ 创建 配置文件

    现在项目中与图片资源文件夹同级目录下创建一个 `swiftgen.yml` (或者使用命令：`swiftgen config init`)。格式如下：
    
    ```Yaml
        strings:
        inputs: Resources/Base.lproj
        outputs:
            - templateName: structured-swift5
            output: Generated/Strings.swift
        xcassets:
        inputs:
            - Resources/Images.xcassets
            - Resources/MoreImages.xcassets
            - Resources/Colors.xcassets
        outputs:
            - templateName: swift5
            output: Generated/Assets.swift
    ```

    也可以简化配置文件如下：
    ```Yaml
    xcassets:
      inputs: Assets.xcassets
      outputs:
        templateName: swift5
        output: Generated/Images.swift
    ```

+ 在终端执行如下命令完成对资源的初始化：
    ```Bash
    swiftgen config lint
    ```

    或者是在项目 ```Yaml``` 配置文件所在位置添加执行脚本文件 ```generate_images.sh``` ：
    ```Bash
    swiftgen config lint
    ```

+ 执行脚本文件之后如果出现如下提示信息，那么限制性最下方语句生成文件夹和文件：
    ```Bash 提示信息
    Linting swiftgen.yml
    > Common parent directory used for all input paths:  <none>
    > Common parent directory used for all output paths: <none>
    > 1 entry for command xcassets:
        $ swiftgen xcassets --templateName swift5 --output Generated/Images.swift Assets.xcassets
    ```

    执行完提示命令之后会出现如下提示：
    ```Bash
     $ swiftgen xcassets --templateName swift5 --output Generated/Images.swift Assets.xcassets
        > swiftgen: warning: This command is deprecated in favor of `swiftgen run xcassets`
        File written: Generated/Images.swift
    ```
    
+ 即表示创建成功，可以使用直接使用了，在项目中使用该资源的案例如下：
    ```Bash
    Asset.texting.image  语法格式如下：Asset.(Assets.xcassets 中图片名称).image
    ```

+ 如此便完成的 `Swiftgen` 整体设置。

# 开发技巧07 **App 锁屏、解锁监听**
官网提供了两个事件分别用于监听锁屏和解锁。
```Swift 
/// screen locked
func applicationProtectedDataWillBecomeUnavailable(_ application: UIApplication) {
    /// TODO……
}

/// screen unlock
func applicationProtectedDataDidBecomeAvailable(_ application: UIApplication) {
    /// TODO……
}
```

# 开发技巧08 **could not execute support code to read Objective-C class data in the process.**
在开发过程中很少出现此类错误，但是也会偶尔出现如下问题：`warning: could not load any Objective-C class information. This will significantly reduce the quality of type information available.`
原因分析：一般是 ***死循环*** 引起此类问题，遇到此类问题记得排查方法调用上是否引起了循环调用。
> 懒加载的时候: 一定不要用self., 若用 self. 会造成死循环。

# 开发技巧09 **极光推送设置别名，退出登录设置别名依然会收到推送信息**
在使用别名的推送设置中，我们会使用一下用户个人信息中的一个唯一标识来设置该用户的在极光推送系统的中的唯一标识，下面代码是设置用户别名：
```Swift
/// 设置推送别名
JPUSHService.setAlias("唯一标识", completion: { (index, alias, idx) in
    print("index = \(index), alias = \(alias ?? "nil - nil"), idx = \(idx)")
}, seq: 1)
```
遇到的问题：在用户退出登录，我们期望退出登录的用户设别不需要收到该别名的推送。
而事实上极光 API 设置别名的规则是：***这个接口是覆盖逻辑，而不是增量逻辑。即新的调用会覆盖之前的设置。*** 所以我们设置为空字符串并不能清除该设备在极光系统里的标识。
解决办法：我们需要设置一个在本业务系统中永远不会推送到的字符串作为别名来覆盖这个设备在激极光系统里的标识。
```Swift
/// 设置推送别名  设置一个永远不会推送到别名
JPUSHService.setAlias("0000000000", completion: { (index, alias, idx) in
    //print("index = \(index), alias = \(alias ?? "nil - nil"), idx = \(idx)")
}, seq: 1)
```

# 开发技巧10 **真机调试包在Xcode中的地址**
`Xcode` 真机调试包在系统中的地址: 
```/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport```

# 开发技巧11 ***使用类库 PromiseKit ***
小技巧：使用类似的类库时候，需要注意，安装 `Core` 之后，按需引入相应的模块，防止无用类库过多引起的包大小问题。
```Bash
-> PromiseKit (6.15.3)
   Promises for Swift & ObjC.
   pod 'PromiseKit', '~> 6.15.3'
   - Homepage: http://mxcl.dev/PromiseKit/
   - Source:   https://github.com/mxcl/PromiseKit.git
   - Versions: 6.15.3, 6.15.2, 6.15.1, 6.15.0, 6.14.0, 6.13.1, 6.13.0, 6.12.0, 6.11.0, 6.10.0, 6.9.0, 6.8.5, 6.8.4, 6.8.3, 6.8.2, 6.8.1, 6.8.0, 6.7.1, 6.7.0, 6.6.1, 6.6.0, 6.5.3,
   6.5.2, 6.5.1, 6.5.0, 6.4.1, 6.4.0, 6.3.5, 6.3.4, 6.3.3, 6.3.0, 6.2.8, 6.2.7, 6.2.6, 6.2.5, 6.2.4, 6.2.3, 6.2.1, 6.2.0, 6.1.2, 6.1.1, 6.1.0, 6.0.3, 6.0.2, 6.0.1, 6.0.0, 4.5.2,
   4.5.1, 4.5.0, 4.4.4, 4.4.3, 4.4.2, 4.4.0, 4.3.2, 4.3.1, 4.2.2, 4.2.0, 4.1.7, 4.1.4, 4.1.3, 4.1.2, 4.1.0, 4.0.5, 4.0.4, 4.0.3, 4.0.1, 4.0.0, 3.5.3, 3.5.2, 3.5.1, 3.5.0, 3.4.4,
   3.4.3, 3.4.2, 3.4.1, 3.4.0, 3.3.0, 3.2.1, 3.2.0, 3.1.1, 3.1.0, 3.0.3, 3.0.2, 3.0.1, 3.0.0, 2.2.1, 2.2.0, 2.1.3, 2.1.2, 2.1.1, 2.1.0, 2.0.6, 2.0.5, 2.0.4, 2.0.3, 2.0.2, 2.0.1,
   2.0.0, 1.7.7, 1.7.6, 1.7.5, 1.7.4, 1.7.2, 1.7.1, 1.7.0, 1.6.0, 1.5.3, 1.5.2, 1.5.1, 1.5.0, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.0, 1.2.5, 1.2.4, 1.2.3, 1.2.2, 1.2, 1.0.3, 1.0.2,
   1.0.1, 1.0, 0.9.21, 0.9.19, 0.9.18, 0.9.17.1, 0.9.17, 0.9.16.6, 0.9.16.5, 0.9.16.4, 0.9.16.3, 0.9.16.2, 0.9.16.1, 0.9.16, 0.9.15.3, 0.9.15.2, 0.9.15.1, 0.9.15, 0.9.14.3,
   0.9.14.2, 0.9.14.1, 0.9.14, 0.9.13.2, 0.9.13.1, 0.9.13, 0.9.11.1, 0.9.11, 0.9.10, 0.9.9, 0.9.8.1, 0.9.8, 0.9.7.5, 0.9.7.4, 0.9.7.3, 0.9.7.2, 0.9.7.1, 0.9.7, 0.9.6, 0.9.5,
   0.9.4, 0.9.3, 0.9.2, 0.9.1, 0.9.0 [edu-git-cocoapods-specs repo]
   - Subspecs:
     - PromiseKit/Accounts (6.15.3)
     - PromiseKit/Alamofire (6.15.3)
     - PromiseKit/AddressBook (6.15.3)
     - PromiseKit/AssetsLibrary (6.15.3)
     - PromiseKit/AVFoundation (6.15.3)
     - PromiseKit/Bolts (6.15.3)
     - PromiseKit/CloudKit (6.15.3)
     - PromiseKit/CoreBluetooth (6.15.3)
     - PromiseKit/CorePromise (6.15.3)
     - PromiseKit/CoreLocation (6.15.3)
     - PromiseKit/EventKit (6.15.3)
     - PromiseKit/Foundation (6.15.3)
     - PromiseKit/HealthKit (6.15.3)
     - PromiseKit/HomeKit (6.15.3)
     - PromiseKit/MapKit (6.15.3)
     - PromiseKit/MessageUI (6.15.3)
     - PromiseKit/OMGHTTPURLRQ (6.15.3)
     - PromiseKit/Photos (6.15.3)
     - PromiseKit/QuartzCore (6.15.3)
     - PromiseKit/Social (6.15.3)
     - PromiseKit/StoreKit (6.15.3)
     - PromiseKit/SystemConfiguration (6.15.3)
     - PromiseKit/UIKit (6.15.3)
     - PromiseKit/UIImagePickerController (6.15.3)
     - PromiseKit/WatchConnectivity (6.15.3)
```

```
structures use the stack(栈) and classes use the heap(堆)。
```

```Generics
This design both preserves type information and constrains the arguments to be the same type as the return type. 
```

```@autoclosure
Decorating a parameter type with @autoclosure causes the compiler to wrap arguments in a closure automatically. 
```

``` Rethrows
func ifelse<V>(_ condition: Bool,
               _ valueTrue: @autoclosure () throws -> V,
               _ valueFalse: @autoclosure () throws -> V) rethrows -> V {
  condition ? try valueTrue() : try valueFalse()
}

Rethrows propagates the error of any failing closure to the caller. If none of the closure parameters throw, it deduces the function is non-throwing and doesn’t need to be marked with try.
```

```@inlinable
You don’t want to pay the cost of an extra layer of abstraction, and the implementation will never change, so it makes sense to mark the function @inlinable. This added keyword hints to the compiler that the body of the method should be directly included in the client code without the overhead of calling a function.
```
swiftc -O -emit-assembly ifelse.swift > ifelse.asm