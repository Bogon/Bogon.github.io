---
title: iOS开发记录<一>
description: iOS开发记录<一>
permalink: iOS开发记录<一>
copyright: ture
date: 2020-09-07 09:24:07
keywords: iOS,Swift,开发技巧,问题
tags:
    - [iOS]
    - [开发记录]
categories:
    - [iOS]
    - [开发记录]
---

# 1、自定义键盘去除iPad上方的工具栏

```Swift
import Foundation
import DeviceKit

extension UITextField {
    /// ipad 下隐藏工具栏
    func hiddenInputAssistantItem() {
        /// 如果是ipad需要进行快捷栏隐藏
        if Device.current.isPad {
            let inputAssistantItem =  self.inputAssistantItem
            inputAssistantItem.leadingBarButtonGroups = [UIBarButtonItemGroup]()
            inputAssistantItem.trailingBarButtonGroups = [UIBarButtonItemGroup]()
        }
    }
    
}
```

# 2、推送播放自定义声音设置以及注意事项


# 3、UIView的重绘及布局刷新，触发刷新事件

https://www.jianshu.com/p/e9ca7dfb5d72

# 4、iOS UIWebView 和 WKWebView 的 cookie 获取,设置,删除
https://my.oschina.net/u/4391811/blog/3252616

# 5、NSUserDefaults存储失败原因及解析
https://blog.csdn.net/Ado_add/article/details/75298990

# 6、iOS 获取状态栏、导航栏、tabBar高度
https://www.jianshu.com/p/507c89d456e1


# 7、Swift4.2及以上版本 新特性详解 Hashable 和 Hasher

https://www.jianshu.com/p/0b688dd4c67c

# 8、Swift 延迟执行dispatch_after

```Swift
DispatchQueue.main.asyncAfter(deadline: .now()+0.5, execute: 
{
    self.backgroundView()?.removeFromSuperview()
    self.setBackgroundView(backgroundView: nil)
})
```

# 9、iOS-模拟器全屏（Simulator Fullscreen）

iOS中模拟器支持分屏功能，只需要简单的一行命令：
```Bash
defaults write com.apple.iphonesimulator AllowFullscreenMode -bool YES
```
[Fullscreen Xcode and Simulator](https://dev.to/zdnk/-fullscreen-xcode-and-simulator-42ng)

# 10、ld: framework not found Xcode编译报错

出现这种原因是Link Binary With Libraries还存在某些包的.a文件的引用删除即可。

![ld: framework not found Xcode编译报错](http://cdn.xuebaonline.com/record-1-1-2.png "")

# 11、UIImage显示原始颜色或渲染成任意颜色

UIImage的对象有一个方法:imageWithRenderingMode:可以修改图片的渲染模式，其参数是一个枚举值，分别是：
```Swift
UIImageRenderingModeAutomatic        // 根据图片的使用环境和所处的绘图上下文自动调整渲染模式。  
UIImageRenderingModeAlwaysOriginal   // 始终绘制图片原始状态，不使用Tint Color。  
UIImageRenderingModeAlwaysTemplate   // 始终根据Tint Color绘制图片，忽略图片的颜色信息
```
一般导航栏上的图片会根据导航栏的TintColor渲染成统一的颜色，这样即使导航栏的颜色不同，也可以使用同一套切图。
如果我们希望图片始终显示成原来的原色，在设置的时候，我们把渲染模式改成UIImageRenderingModeAlwaysOriginal即可。

```Objc
UIButton *backButton = [[UIButton alloc] initWithFrame:CGRectMake(10, 20, 30, 44)];
UIImage *image = [[UIImage imageNamed:@"back"] imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];  
// 设置根据TintColor渲染图片
// [backButton setTintColor: kColorBlue];
[backButton.imageView setTintColor:kColorBlue];  // 设置TintColor  两种都可以
[backButton setImage:image forState:UIControlStateNormal];  
[backButton addTarget:self action:@selector(back) forControlEvents:UIControlEventTouchUpInside];
```

# 12、NotificaitonCenter 发出通知的问题
NotificationCenter.default.post 发出具体的通知事件之后，我们需要关注和注意以下几点：
    
+ 当前发出通知的所处的线程(主线程/子线程)
+ 添加Observer的位置，接收到通知之后，刷新UI代码一定要在 ```main-thread``` 进行中

**NotificationCenterde 特点可以总结为：在哪个线程发出通知，接收方会在发出通知的线程中处理通知。所以涉及到 UI 刷新的问题，一定要将该部分业务代码放置在 主线程 中。**

# 13、Swift 只执行一次的代码

声明仅执行一次：

```Swift
lazy var onceCode: Void = { [weak self] in
         // 写下想要执行一次的代码
        log("onceCode……")

}()
```