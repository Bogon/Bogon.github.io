---
title: '后端实践三:Ubuntu18.04安装Vapor4.0'
description: '后端实践三:Ubuntu18.04安装Vapor4.0'
permalink: '后端实践三:Ubuntu18.04安装Vapor4.0'
date: 2020-04-17 16:52:46
copyright: ture
keywords: 后端,Ubuntu,Ubuntu18.04,安装,Vapor,Vapor4.0,Swift
tags:
    - [Server]
    - [Ubuntu]
    - [Swift]
categories:
    - [Vapor4.0]
    - [Ubuntu18.04]
    - [Swift5.2]
    - [Server]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过文章《[后端实践二:Ubuntu18.04安装最新版Swift5.2](http://www.xuebaonline.com/%E5%90%8E%E7%AB%AF%E5%AE%9E%E8%B7%B5%E4%BA%8C:Ubuntu18.04%E5%AE%89%E8%A3%85%E6%9C%80%E6%96%B0%E7%89%88Swift5.2/ "后端实践二:Ubuntu18.04安装最新版Swift5.2")》可以在 Ubuntu18.04 的服务器上顺利安装最新版本的 ```Swift``` 。我们参照 [官网文档](https://docs.vapor.codes/3.0/install/ubuntu/ "") 安装 ```Vapor4.0``` 的开发环境。

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;官网上的文档跟开发维护的速度有一定的版本误差，所以现在在官网上看到的安装方法是针对 ```Vapor(>3.0 && < 4.0)``` 的版本。由于版本间差异比较大，在实践过程中，只会关注到 ```Vapor(>=4.0)``` 以上版本的新特性。在创建工程和引入依赖库的过程中也会出现微小的差别，我们在后续的实践中会总结到。

# **验证 Swift 安装** 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们通过访问 ```Swift.org```，可以得到一份如何在 ```Linux``` 上安装 ```Swift``` 的文档。我们完成对 ```Swift``` 的安装之后，在终端中输入如下命令：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- more -->

如果在终端中输出如下信息：

``` swift
Apple Swift version 4.1.0 (swiftlang-900.0.69.2 clang-900.0.38)
Target: x86_64-apple-macosx10.9
```
那么标识我们在 ```Linux``` 上成功安装 ```Swift```。

# **安装 Vapor Toolbox**

在 ```Vapor 4.0``` 发布之前，在 ```Linux``` 上安装，只需要在终端中敲入如下命令即可：


``` bash
curl -sL apt.vapor.sh -o apt.vapor.sh
```

这个执行安装的命令已经被废弃。


## ```Toolbox``` 源代码

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于之后的版本中，不在将该文件托管至软件源，所以我们在安装时需要做出如下操作获取到 ```Toolbox``` 源代码到本地文件夹中：


下载 ```Toolbox``` 源代码：

``` bash
git clone https://github.com/vapor/toolbox.git
```


![Toolbox](https://cdn.xuebaonline.com/tl-1stp.png "")


## 编译 ```Vapor``` 可执行文件

进入到 ```Toolbox``` 工程的根目录：

``` bash
cd toolbox/
```

编译 ```Toolbox```  发布版本：

``` swift
swift build -c release
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于获取的源代码中缺少部分文件，期间或存在报错发现 ```Toolbox``` 中没有 ```LinuxMain.swift``` 文件在 ```Tests``` 文件夹中，这时我们进入到 ```XCTest``` 文件夹中。

![Vapor](https://cdn.xuebaonline.com/tl-2stp.png "")



创建 ```LinuxMain.swift``` 文件:

``` bash
touch LinuxMain.swift
```

编辑 ```LinuxMain.swift``` 文件:

``` bash
vim LinuxMain.swift
```

向 ```LinuxMain.swift``` 文件中添加测试代码:

``` swift
import XCTest
@testable import AppTests

XCTMain([testCase(AppTests.allTests)])
```

保存修改：

``` bash
:wq!
```

重新执行如下命令，完成编译：


``` bash
swift build -c release
```

![Vapor](https://cdn.xuebaonline.com/tl-3stp.png "")

找到编译成功的 ```Vapor``` 文件

>执行完 ```build``` 命令之后，会在输出的文件中生成一个可执行的二进制文件。

查找 ```Vapor``` 所在的目录：

``` bash
find . -name vapor
```

>这时会看到输出一个类似如下的文件夹 ```.build/x86_64-unknown-linux/release/vapor``` ,这个文件夹里就是我们要使用到的文件 ```Vapor``` 。


![Vapor](https://cdn.xuebaonline.com/tl-4stp.png "")

配置 ```Vapor``` 的环境变量

将包含可执行文件 ```Vapor``` 的文件目录添加在 ```PATH``` 中。

配置 ```Vapor``` 环境变量：

``` bash
sudo cp vapor /usr/local/bin/
```

验证是否配置成功：

``` bash
vapor --help
```

![Vaporhelp](https://cdn.xuebaonline.com/tl-5stp.png "")

# **总结**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此 ```Vapor 4.0``` 的环境配置已经完成。由于 ```3.0``` 和 ```4.0``` 版本差异比较大，在配置方面也有差异。在创建项目时更需要加上 ```branch=4``` 等。后续会加入：创建第一个 ```Hello World``` 工程。