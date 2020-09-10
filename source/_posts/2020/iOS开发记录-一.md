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