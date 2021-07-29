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


+ `WKWebView` 添加 `Web` 调试控制台
原生 `WKWebView` 在加载本地或者是远程页面时，需要在客户端调试远程 `Web` 页面，这是可以使用腾讯技术团队提供的 [vConsole](https://github.com/Tencent/vConsole)， 在客户端进行集成就可在客户端看到网页中的各种信息，方便与原生和网页端的调试。
在客户端集成要做的事情很简单，无需网页端集成，按照如下步骤即可完成设置，在手机端打开控制台：
    + 打开 [`vConsole`](https://unpkg.com/vconsole/dist/vconsole.min.js) 地址，无需对代码做任何处理，直接保存重命名比如: `vConsole.js`，并在文件末尾添加如下语句保存；
        ```JS
        let vConsole = new VConsole();console.log("test");
        ```
    + 在工程中建立文件件如：`vConsole` ，将保存的文件放到文件中，拉入到工程中；
    + 在 `WKWebView` 中设置并执行如下语句保证网页加载完成后将控制台加载出来：
        ```Swift
        let m_vConsolePath: String = Bundle.main.path(forResource: "vConsole.js", ofType: nil)!
        let m_vConsoleName: String = try! String(contentsOfFile: m_vConsolePath, encoding: .utf8)
        let m_vConsoleScript: WKUserScript = WKUserScript(source: m_vConsoleName, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        m_userContentController.addUserScript(m_vConsoleScript)
        ```
    + 完成设置，可以使用控制台进行前端调试。
        ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/5blog_images/b_wk_01.png)


+ 拦截 `WKWebview` 中的弹窗( `alert()`、`promt`)
需要给其挂上代理 `wkWebView.uiDelegate = self` ，然后实现下方代理 `(WKUIDelegate)` 方法：
```Swift
/*! @abstract Notifies your app that the DOM window object's close() method completed successfully.
  @param webView The web view invoking the delegate method.
  @discussion Your app should remove the web view from the view hierarchy and update
  the UI as needed, such as by closing the containing browser tab or window.
  */
func webViewDidClose(_ webView: WKWebView) {
    /// TODO……
}

/*! @abstract Displays a JavaScript alert panel.
    @param webView The web view invoking the delegate method.
    @param message The message to display.
    @param frame Information about the frame whose JavaScript initiated this
    call.
    @param completionHandler The completion handler to call after the alert
    panel has been dismissed.
    @discussion For user security, your app should call attention to the fact
    that a specific website controls the content in this panel. A simple forumla
    for identifying the controlling website is frame.request.URL.host.
    The panel should have a single OK button.
    
    If you do not implement this method, the web view will behave as if the user selected the OK button.
    */
func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
    completionHandler()     /// must implement, othervise crash
}

/*! @abstract Displays a JavaScript confirm panel.
    @param webView The web view invoking the delegate method.
    @param message The message to display.
    @param frame Information about the frame whose JavaScript initiated this call.
    @param completionHandler The completion handler to call after the confirm
    panel has been dismissed. Pass YES if the user chose OK, NO if the user
    chose Cancel.
    @discussion For user security, your app should call attention to the fact
    that a specific website controls the content in this panel. A simple forumla
    for identifying the controlling website is frame.request.URL.host.
    The panel should have two buttons, such as OK and Cancel.

    If you do not implement this method, the web view will behave as if the user selected the Cancel button.
    */
func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
    completionHandler(true)
}

/*! @abstract Displays a JavaScript text input panel.
 @param webView The web view invoking the delegate method.
 @param prompt The prompt to display.
 @param defaultText The initial text to display in the text entry field.
 @param frame Information about the frame whose JavaScript initiated this call.
 @param completionHandler The completion handler to call after the text
 input panel has been dismissed. Pass the entered text if the user chose
 OK, otherwise nil.
 @discussion For user security, your app should call attention to the fact
 that a specific website controls the content in this panel. A simple forumla
 for identifying the controlling website is frame.request.URL.host.
 The panel should have two buttons, such as OK and Cancel, and a field in
 which to enter text.

 If you do not implement this method, the web view will behave as if the user selected the Cancel button.
 */
func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Void) {
    completionHandler(nil)
    
}
```