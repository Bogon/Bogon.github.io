---
title: iOS如何使用iCloud文档？
permalink: iOS如何使用iCloud文档？
copyright: ture
date: 2020-04-30 09:38:51
keywords: iOS,Swift,架构,iCloud,UDP/TCP sockets,streams,CoreBluetooth
description: iOS如何使用iCloud文档？

tags:
    - [iOS]
    - [Swift]
    - [iCloud]
categories:
    - [iOS]
    - [Swift]
    - [iCloud]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用最新版本的 ```Swift编程语言``` 通过共享的 ```iCloud驱动器文件夹``` 同步文件和数据。

</br>

# **iCloud驱动器项目设置教程**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从为 ```iOS``` 创建一个新项目开始。 你可以选择单视图应用程序模板，不必太担心基于文档的应用程序，因为在本教程中，我们根本不会涉及 ```UIDocument类``` 。 🤷‍♂️

<!-- more -->


![UIDocument类](http://q8wtfza4q.bkt.clouddn.com/iu-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一步是启用 ```iCloud功能``` ，它将为你生成一个新的权利文件。 另外，你还必须在 ```Apple开发者网站``` 上为 ```appID启用``` ```iCloud应用程序服务``` 。 你还应该分配将用于存储数据的 ```iCloud容器``` 。 只需单击几下，但你必须手动执行此操作。 💩

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你需要有效的 ```Apple Developer Program``` 成员身份才能设置高级应用程序功能，例如 ```iCloud支持``` 。 因此，你必须每年支付$99。 🤑

![UIDocument类](http://q8wtfza4q.bkt.clouddn.com/iu-stp2.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，我相信现在你已经有了启用 ```iCloud功能``` 和应用程序服务的正确的 ```iOS应用程序标识符``` 。 下一步是最后一步，你必须将这几行添加到 ```Info.plist``` 文件中，以便定义要使用的 ```iCloud驱动器容器（文件夹名称）``` 。 请注意，一个应用程序可以有多个容器。

``` Swift
<key>NSUbiquitousContainers</key>
<dict>
    <key>iCloud.com.tiborbodecs.teszt</key>
    <dict>
        <key>NSUbiquitousContainerIsDocumentScopePublic</key>
        <true/>
        <key>NSUbiquitousContainerName</key>
        <string>Teszt</string>
        <key>NSUbiquitousContainerSupportedFolderLevels</key>
        <string>Any</string>
    </dict>
</dict>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们准备继续进行一些实际的编码。 💻

<br>

# **iCloud drive 容器中的文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```Swift``` 使用 ```iCloud文件``` 相对容易。 基本上，你只需要获取 ```iCloud驱动器``` 容器的基本 ```URL``` ，就可以做任何你想做的事情。 🤔但是，我将向你展示一些最佳做法和技巧。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，你必须检查你的容器文件夹是否已经存在，如果不存在，则应使用 ```FileManager类``` 手动创建它。 我还为容器基本 ```URL``` 设置了“快捷方式”变量，因此我不必再次写所有这些长单词。 😅

``` Swift
var containerUrl: URL? {
    return FileManager.default.url(forUbiquityContainerIdentifier: nil)?.appendingPathComponent("Documents")
}
// check for container existence
if let url = self.containerUrl, !FileManager.default.fileExists(atPath: url.path, isDirectory: nil) {
    do {
        try FileManager.default.createDirectory(at: url, withIntermediateDirectories: true, attributes: nil)
    }
    catch {
        print(error.localizedDescription)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```iCloud驱动器``` 容器内的路径很简单，你可以将路径组件附加到基本 ```URL``` 并根据需要使用该确切的 ```位置URL``` 。

``` Swift
let myDocumentUrl = self.containerUrl?
        .appendingPathComponent(subDirectory)
        .appendingPathComponent(fileName)
        .appendingPathExtension(fileExtension)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选择现有文件也非常简单。 你可以使用 ```UIKit``` 中的内置文档选择器类。 这里只有两个 ```catches``` 。 🤦‍♂️

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，你需要提供要访问的文档的类型。 你听说过 [***```UTI```***](https://developer.apple.com/library/content/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319-CH201-SW1 "") 吗？ 事实是，你必须为每种文件类型找到合适的 ```统一类型标识符``` ，而不是提供扩展名或 ```mime-type``` 或一些常用的东西。 🧠

``` Swift
let picker = UIDocumentPickerViewController(documentTypes: ["public.json"], in: .open)
picker.delegate = self
picker.modalPresentationStyle = .fullScreen
self.present(picker, animated: true, completion: nil)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二个要点是，在开始读取所选文件之前，你必须对其进行 ```“解锁”``` 。 可以通过调用 ```startAccessingSecurityScopedResource``` 方法来完成。 不要忘记调用 ```stopAccessingSecurityScopedResource``` 方法，否则事情将变得不平衡。 你不要那个，相信我！ 🧤

``` Swift
func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
    guard
        controller.documentPickerMode == .open,
        let url = urls.first,
        url.startAccessingSecurityScopedResource()
    else {
        return
    }
    defer {
        url.stopAccessingSecurityScopedResource()
    }
    // do some work with the url
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他一切都按你的预期工作。 你可以通过 ```文件API``` 或使用 ```UIDocumentPickerViewController``` 实例将文件直接保存到容器中。 这是一些最常见的 ```api调用``` ，可用于处理文件。

``` Swift
// string
try string.write(to: url, atomically: true, encoding: .utf8)
try String(contentsOf: url)

// data
try data.write(to: url, options: [.atomic])
try Data(contentsOf: url)

// file manager
FileManager.default.copyItem(at: local, to: url)
FileManager.default.removeItem(at: url)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以读写任何类型的字符串，数据。 通过使用 ```FileManager``` ，你可以复制，移动，删除项目或更改文件属性。 你存储在 ```iCloud驱动器``` 中的所有文档都可以在每台设备上使用。 显然，你必须使用 ```iCloud帐户登录``` ，并具有足够的免费存储空间。 💰

<br>

# **Debugging**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你更改设置中的某些内容，则可能还需要增加内部版本号，以便将更改通知操作系统。 💡

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```Mac``` 上，所有 ```iCloud驱动器文件/容器``` 都位于 ```Mobile Documents``` 目录内用户的 ```Library文件夹``` 下。 你只需使用 ```Terminal``` 或 ```Finder``` 到那里并列出所有文件即可。 专业提示：寻找隐藏的东西！ 😉

``` bash
cd ~/Library/Mobile\ Documents
ls -la
# ls -la|grep tiborbodecs
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以通过使用以下命令来监视 ```CloudDocs``` 守护程序的活动：

``` bash
# man brctl
brctl log --wait --shorten
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输出日志将告诉你同步期间实际发生的情况。

![UIDocument类](http://q8wtfza4q.bkt.clouddn.com/iu-stp3.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我建议你检查 ```brctl``` 命令的手动输入，因为还有其他一些标志可以调试问题更加容易。 🤐
