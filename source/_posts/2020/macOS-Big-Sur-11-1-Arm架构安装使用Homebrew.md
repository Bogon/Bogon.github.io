---
title: macOS Big Sur 11.1 Arm架构安装使用Homebrew
description: macOS Big Sur 11.1 Arm架构安装使用Homebrew
permalink: macOS Big Sur 11.1 Arm架构安装使用Homebrew
copyright: true
date: 2020-12-18 19:54:56
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced Classes,面试题,Homebrew
tags:
    - [Homebrew]
categories:
	- [Homebrew]
---

安装Hombrew国内脚本版

```Bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

会将Homebrew安装在intel架构的默认目录下

```Bash
/usr/local/ 
```

在m1芯片 arm架构下的Big Sur系统下运行


<!-- more -->

（例：比如安装lrzsz）

brew install lrzsz

>  提示：Error: Cannot install in Homebrew on ARM processor in Intel default prefix (/usr/local)!
>
> Please create a new installation in /opt/homebrew using one of the"Alternative Installs" from: https://docs.brew.sh/Installation 
>
> You can migrate your previously installed formula list with: brew bundle dump

大多数应用其实是可以使用的，Homebrew只是限制了应用所在的路径，无需重新下载直接复制一个到/opt/Homebrew

新路径的使用

alias abrew="/opt/homebrew/bin/brew"

旧的可以不管他，直接brew就可以用，有的人重新定义了

alias xbrew="arch -x86_64 /usr/local/bin/brew"

这样，使用abrew命令，就可以在arm下使用了，大部分应用应该是没问题的。

 

本次主要是为了配置iterm2使用lrzsz，需修改脚本中的路径为新路径的，脚本也可放到其他位置，注意同步修改iterm2中的配置。

lrzsz部分参考：

https://blog.csdn.net/JENREY/article/details/103478953

 

参考：

https://realazy.com/til/2020-11-21-homebrew-on-macbook-pro-m1.html
