---
title: '后端实践二:Ubuntu18.04安装最新版Swift5.2'
permalink: '后端实践二:Ubuntu18.04安装最新版Swift5.2'
date: 2020-04-17 14:51:16
copyright : ture
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

通过文章《[后端实践一:开发环境搭建VMware下安装Ubuntu18.04](http://www.xuebaonline.com/%E5%90%8E%E7%AB%AF%E5%AE%9E%E8%B7%B5%E4%B8%80:%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAVMware%E4%B8%8B%E5%AE%89%E8%A3%85Ubuntu18.04/ "后端实践一:开发环境搭建VMware下安装Ubuntu18.04")》可以完成在  ```mac``` 上搭建起可用的 ```Ubuntu 18.04``` 的服务器。接下来我们要在此基础上完善 ```Vapor 4.0``` 的开发环境。


>Ubuntu 18.04 安装 Swift 5.2.2 ，可在 Vapor 官网的引导完成。这篇文章就是讲解如何完成在 Ubuntu 上安装最新版本 Swift，构建出一个强大的云端服务器。

# **```Ubuntu``` 系统环境搭建**
## 连接服务器
> 这里使用的SecureCRT作为终端连接服务器，也可以使用 ```iTerm2``` 连接服务器。

<!-- more -->

使用 ```SecureCRT ``` 提供的远程登录功能连接 ```Ubuntu``` 服务器的配置信息：

![SecureCRT](http://q8wtfza4q.bkt.clouddn.com/swift-1stop.png "")

使用 ```SecureCRT``` 终端使用系统自带的远程登录功能连接 ```Ubuntu``` 服务器：

![使用SecureCRT](http://q8wtfza4q.bkt.clouddn.com/swift-2stp.png "")

![使用SecureCRT](http://q8wtfza4q.bkt.clouddn.com/swift-3stp.png "")

使用 ```iTerm2``` 终端使用系统自带的远程登录功能连接Ubuntu 服务器：

![iTerm2](http://q8wtfza4q.bkt.clouddn.com/swift-4stp.png "")

查看当前服务器系统版本：

``` bash
lsb_release -a
```

## 安装依赖库
> Swift 依赖一些三方类库。

必须安装的依赖：

``` bash
sudo apt-get update
sudo apt-get install clang libicu-dev -y
sudo apt-get install libcurl3 libpython2.7 libpython2.7-dev
```

## 安装 ```Swift```
在 [Swift.org](https://swift.org/download/#releases) 查找我们要安装的Swift对应版本的Toolchain，复制下载链接。
> 在写这篇文章时最新版的Swift是v5.2.2。

找到对应系统以及对应版本[下载链接](https://swift.org/builds/swift-5.2.2-release/ubuntu1804/swift-5.2.2-RELEASE/swift-5.2.2-RELEASE-ubuntu18.04.tar.gz)：

![下载链接](http://q8wtfza4q.bkt.clouddn.com/swift-5stp.png "")

可以采用两种下载方式：

+ 在本机上使用上方链接，下载 ```Toolchain``` ，上传到 ```Ubuntu``` 服务器上，完成后续安装；
+ 在 ```Ubuntu``` 上使用 ```wget url``` 的方式直接在服务器上安装。

接下来 使用  ```wget url``` 下载 ```swift``` 安装包，并解压:
``` bash
wget https://swift.org/builds/swift-5.2.2-release/ubuntu1804/swift-5.2.2-RELEASE/swift-5.2.2-RELEASE-ubuntu18.04.tar.gz 
```

解压 ```swift``` 到文件夹:

``` bash
tar -xvzf swift-5.2.2-RELEASE-ubuntu18.04.tar.gz
```
将解压的文件保存在 ```share``` 目录下:

``` bash
sudo mv swift-5.2.2-RELEASE-ubuntu18.04 /usr/share/swift
```

## 配置 ```Swift``` 环境变量
完成以上操作即完成了 ```swift``` 的的安装，为了更方便的使用 ```Swift``` ，需要配置其在全局任意目录下可使用。

配置 ```Swift``` 环境变量:

``` bash
echo "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc
```

## 验证是否成功

检查当前系统的 ```Swift``` 版本:

``` bash
swift -version
```

+ 如果出现 ``` Command 'swift' not found ...``` 该提示，关闭连接终端，重新连接服务器，再次执行上述命令。

![installSuccess](http://q8wtfza4q.bkt.clouddn.com/swift-6stp.png "")

# **运行 ``` Swift ``` 程序**
## 在终端运行程序，简单测试环境是否达建成功。

在终端输入：

``` bash
swift
```
此时进入到终端界面。

编辑一段 ```Swift``` 程序代码：

``` swift
var a = 12, b = 13, c = a + b
```

在终端输入以下命令退出编辑模式：

``` swift
:exit
```
![Swift](http://q8wtfza4q.bkt.clouddn.com/swift-7stp.png "")

# **总结**
完成 ``` Swift``` 在 ```Ubuntu``` 环境下的配置，接下来可以配置 ```Vapor 4.0``` 的开发环境。
