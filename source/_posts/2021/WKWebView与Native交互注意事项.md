---
title: WKWebView与Native交互注意事项
description: WKWebView与Native交互注意事项
permalink: WKWebView与Native交互注意事项
copyright: true
date: 2021-05-20 09:22:53
keywords:
tags:
categories:
---

h5页面占用内存过大时，会引起白屏。解决方法如下：

+ 解决方法一：借助 `WKNavigtionDelegate`
当h5页面即将白屏时，会调用 `- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView NS_AVAILABLE(10_11, 9_0){}` 方法，我们只需在这个方法中重新加载 `webview` 即可，此时 `url` 不为空。

```Swift
- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView NS_AVAILABLE(10_11, 9_0){
    [webView reload];
}
```

<!--more-->

+ 解决方法二：检测 `webView.title` 是否为空
有时白屏不会调用方法一的方法，另一种现象是当 `webview` 白屏时，`webview.title = nil` . 我们可以在 `viewWillAppear` 方法中判断 `title` 是否为 `nil` 。进而重新加载 `webview` 。

```Swift
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    if (self.webView.title == nil) {        
        [self.webView reload];
    }
}
```

+ `WkWebview` 使用比较复杂的地方便在于 `iOS 9.0 ~ iOS 14.0` 的 `cookie` 管理问题。从`WKWebview` 引入到目前对 `cookie` 的管理机制存在一定的差异，在这种差异之下管理cookie就存在。


# 1

## 2

### 3

`Wkview`

*wedw*

**wqdwd**

***wdwed***

> xmkwmdxowenoicn

wdcokwmneocnwoec
+ wsnxmown c
+ wkdemowne
- skdmodwendo
    + wlkmdxowken
        + dwkmcowem

```Swift

```

[wsndxiwned](http://www.baidu.com)

[](https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc)