---
title: '后端实践一:开发环境搭建VMware下安装Ubuntu18.04'
description: '后端实践一:开发环境搭建VMware下安装Ubuntu18.04'
permalink: '后端实践一:开发环境搭建VMware下安装Ubuntu18.04'
date: 2020-04-17 09:17:13
copyright: ture
keywords: 后端,开发环境,Ubuntu18.04,安装,VMware,开发环境搭建
tags:
    - [Server]
    - [Ubuntu]
    - [VMware]
categories:
    - [Server]
    - [Vapor4.0]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Mac``` 环境下使用 ```VMware``` 安装 ```Ubuntu 18.04``` 的主要目的是用于对后端开发框架：```Vapor 4.0``` 的实践。由于 ```Vapor 4.0``` 框架支持 ```MacOS``` 和 ```Ubuntu``` ，所以实践时间，以使用 ```Ubuntu``` 为主。

<!-- more -->

>VMware  的下载和安装这里就不在赘述，自行下载安装即可。


# **下载 ```Ubuntu``` 的 ```ISO``` 文件**
## 国内有很多镜像源，这里选用[网易的镜像源](http://mirrors.163.com/ubuntu-releases/ "网易的镜像源")。
这里建议使用 ```Ubuntu 18.04 ``` 版本，按照图示下载即可。

![网易镜像源](http://q8wtfza4q.bkt.clouddn.com/163-source.png "")

本次安装中使用的镜像为：[```ubuntu-18.04.4-live-server-amd64.iso```](http://mirrors.163.com/ubuntu-releases/18.04/ubuntu-18.04.4-live-server-amd64.iso "Ubuntu18.04")。

![Ubuntu1804](http://q8wtfza4q.bkt.clouddn.com/Ubuntu-1804-server.png "")

# **```VMware``` 虚拟机配置**
在使用 ```VMware``` 安装 ```Ubuntu ```虚拟机时，按照引导安装即可。
## 打开 ```VMware``` 软件
> 根据提示我们在准备安装时，选择**自定义安装**。

![自定义安装](http://q8wtfza4q.bkt.clouddn.com/vm-1stp.png "")

## 选择虚拟的操作系统
这里选择 ```Linux``` -> ```Ubuntu``` 64位。
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为我们下载的系统就是 ```Ubuntu 18.04``` 64位。还有很重要的一点，因为安装这个操作系统的目的是作为 ```Vapor 4.0``` 的服务器，所以在选用操作系统时，我们不需要图形界面。

![选择操作系统类型](http://q8wtfza4q.bkt.clouddn.com/vm-2stp.png "")

## 选择固件类型
选择固件类型其实就是选择磁盘引导方式。
> 相对这两种方式进一步了解，可自行查资料。

![选择引导方式](http://q8wtfza4q.bkt.clouddn.com/vm-3stp.png "")

## 选择虚拟磁盘
选择虚拟磁盘为虚拟操作系统在本机上开辟操作磁盘的空间。
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为不会再虚拟机上做比较大的文件操作， ```20G``` 的磁盘空间已经够用。在开辟磁盘空间时，开辟的是空间使用上限，在虚拟操作系统文件所占用的空间以实际使用为准，并不是开辟了多少，就是用多少。

![选择虚拟磁盘](http://q8wtfza4q.bkt.clouddn.com/vm-4stp.png "")

## 完成配置
点击继续即可完成虚拟机配置。
> 虚拟机配置采用 ```VMWare``` 提供的默认配置即可，不用过多的操作。

![完成配置](http://q8wtfza4q.bkt.clouddn.com/vm-5stp.png "")

## 保存虚拟机文件
点击保存将虚拟机文件保存在默认文件夹中。
> 文件的保存位置可以是默认位置，也可以是自定义的位置。

![完成配置](http://q8wtfza4q.bkt.clouddn.com/vm-6stp.png "")


# **安装 ```Ubuntu 18.04 ```**
在使用 ```VMware``` 完成对 ```Ubuntu ```虚拟机配置时，即会进入系统的安装界面。

## 开启 ```CD/DVD``` ，并选取镜像
在完成对虚拟机配置之后，进入到引导界面，开启 ```CD/DVD``` ，并加载镜像。
> 因为启动时未加载系统镜像，所在期初会出现引导出错的问题。

![引导失败](http://q8wtfza4q.bkt.clouddn.com/vm-7stp.png "")

> 开启CD/DVD，并加载镜像。

![加载镜像](http://q8wtfza4q.bkt.clouddn.com/vm-8stp.png "")

## 选择系统引导语言
镜像加载完成，选择系统引导语言的默认语言。
> 安装系统的提示比较简单，也见名知意，所以在安装的全过程，我们均会使用英文完成安装。

![选择系统引导语言](http://q8wtfza4q.bkt.clouddn.com/vm-9stp.png "")

## 选择系统语言
镜像加载完成，选择操作系统的默认语言。
> 因为是作为服务器使用，为了避免以后因为字符编码上造成不必要的麻烦，这里选择英文。

![选择系统语言](http://q8wtfza4q.bkt.clouddn.com/vm-10stp.png "")

## 选择键盘布局
选择键盘布局默认选择英文键盘。
> 键盘布局选择英文，大部分的笔记本、台式电脑键盘采用英文布局。

![选择键盘布局](http://q8wtfza4q.bkt.clouddn.com/vm-11stp.png "")

## 网络设置
网络设置主要是设置操作系统的网络链接方式，这里采用默认跟随本机网络变化。
> 因为是在虚拟软件中使用操作系统，网络配置采用默认配置。

![网络设置](http://q8wtfza4q.bkt.clouddn.com/vm-12stp.png "")

## 代理设置
系统需要一个代理接口联网，默认网络链接走本机。
> 代理网络可以设置链接特定的网络中，比如公司内网。

![代理设置](http://q8wtfza4q.bkt.clouddn.com/vm-13stp.png "")

## 设置系统镜像
这里的镜像是软件包的镜像源。
> 在安装的过程中使用默认的软件包镜像源，后续推荐替换的国内镜像。

![设置系统镜像](http://q8wtfza4q.bkt.clouddn.com/vm-14stp.png "")

## 设置文件系统
文件系统设置采用默认设置。
> 选取使用整个磁盘空间。

![设置文件系统](http://q8wtfza4q.bkt.clouddn.com/vm-15stp.png "")

> 文件系统采用系统推荐的默认方式配置。

![设置文件系统](http://q8wtfza4q.bkt.clouddn.com/vm-16stp.png "")

> 文件系统分区采用默认的分区方式。

![设置文件系统](http://q8wtfza4q.bkt.clouddn.com/vm-17stp.png "")

## 个人信息设置
个人信息设置主要是设置 ```root ``` 账户密码，服务器名称，登录账户及密码。
> 完成设置信息之后，建议对该信息进行备份保存。

![个人信息设置](http://q8wtfza4q.bkt.clouddn.com/vm-18stp.png "")

## ```OpenSSH``` 设置
OpenSSH可是系统支持远程登录，远程操作。
> 建议安装，在以后的操作中会比较方便，远程操作软件推荐 ```SecureCRT``` 。

![OpenSSH设置](http://q8wtfza4q.bkt.clouddn.com/vm-19stp.png "")

## 服务软件
这里可以选择性的安装。
> 针对自己想用的软件进行安装，建议用到什么安装什么。

![服务软件一览](http://q8wtfza4q.bkt.clouddn.com/vm-20stp.png "")

## 安装系统
完成所有的配置之后，系统机会进入安装界面，安装过程比较久。
> 系统安装时间会长一些，具体看各自电脑配置。

![安装系统](http://q8wtfza4q.bkt.clouddn.com/vm-21stp.png "")

# **登录 ```Ubuntu18.04```**
完成安装之后，系统就会进入终端，输入用户名和密码进入系统。

## 输入用户信息
输入用户名和密码，按照提示输入。
> 在 ```2.9``` 中的用户信息，就是需要的登录信息。

![输入用户信息](http://q8wtfza4q.bkt.clouddn.com/vm-22stp.png "")

> 成功进入 ```Ubuntu``` 系统中。

![输入用户信息](http://q8wtfza4q.bkt.clouddn.com/vm-23stp.png "")

# **```Ubuntu 18.04``` 个性化配置**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后续会加入一些实用的小技巧：国内的软件源，远程登录、配置数据库、安装 ```Vapor 4.0``` 开发环境等。