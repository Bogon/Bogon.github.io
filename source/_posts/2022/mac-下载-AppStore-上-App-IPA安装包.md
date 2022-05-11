---
title: mac 下载 AppStore 上 App IPA安装包
description: mac 下载 AppStore 上 App IPA安装包
permalink: mac 下载 AppStore 上 App IPA安装包
copyright: true
keywords: 'iOS,IPA,下载,MAC,逆向'
tags:
  - - iOS
  - - MAC
  - - 逆向
categories:
  - - iOS
  - - 逆向
abbrlink: 6892
date: 2022-04-15 16:48:48
---

在需要研究一些`app`的时候我们希望直接能拿到这个软件的安装包，在`iOS`上就是 `"xxx.ipa"`。下面的步骤帮助我们获取一个`app`的`bundleID`，然后使用工具下载安装包。这样我们就能对目标`app`进行研究。

# 用 `Mac`自带工具 `Console`
查看 `bundle id`，已经装在 `iphone` 里面的 `app`:

+ 用数据线连接手机和`Mac`.
+ 打开 `Mac` 应用`Console`.
+ 在左侧栏`Devices`中，选择你的设备
+ 运行你要查看的`APP`.
+ 在搜索栏里面输入`App`的名字.
+ 你可以看到在`process`列中找到`SpringBoard`， `Message`列中找到 `Bootstrapping`，点击这一行， `bundleId` 类似于`com.xxxx.xxx.kids`。

<!--more-->

# 下载 ipatool 工具

```Bash
`-c` 去哪个市场下载？ `CN`对应国内`App Store`，`US`对应美区`App Store`
```


## 授权
```Bash
ipatool auth login
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/download_ipa/1.png)


## 搜索应用
```Bash
ipatool search --limit 1 多多视频 -c CN
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/download_ipa/2.png)


## 下载应用
```Bash
ipatool download -b com.whyx.rrsp.concept -c CN
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/download_ipa/3.png)

下载完成的 `ipa` 目录在：`/Users/XXXX`。