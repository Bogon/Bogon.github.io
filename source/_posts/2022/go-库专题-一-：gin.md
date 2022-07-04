---
title: go 库专题(一)：gin
description: go 库专题(一)：gin
permalink: go 库专题(一)：gin
copyright: true
date: 2022-07-04 06:50:06
keywords: 'go,进阶,学习,框架,API,Gin,gin'
tags:
  - go
  - gin
categories:
  - go
---

`Gin` 是一个 `Golang` 的微框架，基于 `httprouter` ，封装比较优雅，`API` 友好，源码注释比较明确。具有快速灵活，容错率高，高性能等特点。框架更像是一些常用函数或者工具的集合。借助框架开发，不仅可以省去很多常用的封装带来的时间，也有助于团队的编码风格和形成规范。

`Gin` 包括以下几个主要的部分：

+ 设计精巧的路由/中间件系统；
+ 简单好用的核心上下文 `Context`；
+ 附赠工具集(`JSON/XML` 响应, 数据绑定与校验等)。

`Gin` 是一个 Golang 写的 `web` 框架，，它提供了类似 `martini` 但更好性能(路由性能约快40倍)的 `API` 服务。

<!--more-->

