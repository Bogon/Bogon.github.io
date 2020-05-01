---
title: Ubuntu18.04替换国内源
description: Ubuntu18.04替换国内源
permalink: Ubuntu18.04替换国内源
date: 2020-04-17 12:58:13
copyright: ture
keywords: 后端,开发环境,Ubuntu18.04,国内源,阿里源,中科大源,清华源
tags:
    - [Server]
    - [Ubuntu]
    - [VMware]
categories:
    - [Server]
    - [Vapor4.0]
    - [Ubuntu18.04]
    - [Ubuntu软件源]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再国内使用国外的软件源普遍会比较慢，但是国内也有很多的软件源可供选择。在修改软件源之前，查看系统软件源版本：

***查看版本：***
``` bash
lsb_release -c 
```

<!-- more -->

***备份系统源配置文件：***

在修改之前要对系统的配置文件做好备份，这是个好习惯。
``` bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

# **阿里源**
## 更新源的配置文件
下面是软件源的配置文件，将如下代码添加到sources.list中：
``` bash
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multivers
```
 ## 更新
 执行如下命令，完成系统源的更新：
 ``` bash
 sudo apt-get update
 sudo apt-get upgrade
 ```
 
 # **中科大源**
 ## 更新源的配置文件
下面是软件源的配置文件，将如下代码添加到sources.list中：
``` bash
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```
 ## 更新
 执行如下命令，完成系统源的更新：
 ``` bash
 sudo apt-get update
 sudo apt-get upgrade
 ```

# **163源**
 ## 更新源的配置文件
下面是软件源的配置文件，将如下代码添加到sources.list中：
``` bash
deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
```
 ## 更新
 执行如下命令，完成系统源的更新：
 ``` bash
 sudo apt-get update
 sudo apt-get upgrade
 ```

# **清华源**
 ## 更新源的配置文件
下面是软件源的配置文件，将如下代码添加到sources.list中：
``` bash
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```
 ## 更新
 执行如下命令，完成系统源的更新：

 ``` bash
 sudo apt-get update
 sudo apt-get upgrade
 ```

 # **总结**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Ubuntu18.04的配置中，更新了系统的软件源，国内源推荐使用清华源。
