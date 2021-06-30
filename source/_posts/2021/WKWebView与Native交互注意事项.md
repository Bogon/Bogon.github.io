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

https://zhuanlan.zhihu.com/p/24990222

h5页面占用内存过大时，会引起白屏。解决方法如下：

解决方法一：借助 WKNavigtionDelegate
当h5页面即将白屏时，会调用- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView NS_AVAILABLE(10_11, 9_0){
}方法，我们只需在这个方法中重新加载webview即可，此时url不为空。

- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView NS_AVAILABLE(10_11, 9_0){
[webView reload];
}
解决方法二：检测 webView.title 是否为空
有时白屏不会调用方法一的方法，另一种现象是当webview白屏时，webview.title =nil.我们可以在viewWillAppear方法中判断title是否为nil。进而重新加载webview


- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    if (self.webView.title == nil) {        
        [self.webView reload];
    }
}

作者：iOS程序媛ing
链接：https://www.jianshu.com/p/06b5fa4b9489
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。