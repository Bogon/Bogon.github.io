---
title: '小程序: [CSS] 布局小技巧'
description: '小程序: [CSS] 布局小技巧'
permalink: '小程序: [CSS] 布局小技巧'
copyright: true
date: 2022-12-02 12:35:09
keywords:CSS,小程序,布局
tags:
  - 小程序
  - CSS
categories:
  - 小程序
  - CSS
---

最近对小程序比较感兴趣于是就花时间对这这部分把玩一下，跟移动端的布局还是有一些区别的。就把使用过程中的一些小技巧记录下来。

# Flex 布局 
对 flex 进一步了解，请移步：[Flex 语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 。

<!--more-->

## 三等分中间间距
笔者想实现下面的布局：
![flex](https://github.com/Bogon/blog_images/blob/main/css_flex/flex-01.png?raw=true)

实现代码 `HTML`、`CSS` 如下:
```HTML
<view class="switchBar">
	<view class="switch-item">全部</view>
	<view class="switch-item">钟点房</view>
	<view class="switch-item">办公室</view>
</view>
```

```CSS
.switchBar {
  margin: 0rpx 60rpx 0rpx;
  display: flex;
  background-color: #F3F6FD;
  height: 88rpx;
  align-items: center;
  border-radius: 30rpx;
  font-size: 28rpx;
  justify-content: center;
}

.switch-item {
  flex: 1;
  display: flex;
  justify-content: center;
}
```