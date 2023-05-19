---
title: ubuntu根目录空间爆满的排查方法
description: ubuntu根目录空间爆满的排查方法
permalink: ubuntu根目录空间爆满的排查方法
copyright: true
abbrlink: 15493
date: 2023-05-06 18:02:58
keywords:
tags:
categories:
---

根目录可用空间过少，我查看之后发现，装系统时分了20G，现在只有不到1G可用，当时人就麻了

排查方法
确定那个文件首先进入根目录中，输入命令
sudo du --max-depth=1 -h，之后看一下哪个文件的大小最离谱，我这边是var目录，于是 cd var
再次输入上面的du 命令，发现是lib目录比较大
进入lib，发现dockr目录占用了特别大的空间，再次进入之
发现是volumes目录占用了8g空间，百度删除之
