---
title: Go 入门篇：3、Go 重要概念
description: Go 入门篇：3、Go 重要概念
permalink: Go 入门篇：3、Go 重要概念
copyright: true
keywords: 'linux,mysql,Linux,ubuntu,go,Go'
tags:
  - - 基础语法
categories:
  - - Go 入门篇
abbrlink: 17838
date: 2021-12-24 11:36:54
---

如果已经完成了前面两个部分的学习，应该已经对当前的 `go` 语言有了一个完整的认识。为了加深理解，还需要对 `go` 语言中的重要概念加深理解，熟练掌握。学习新语言，基础一定是要打牢固的。

# 包

***每个 `Go` 程序都是由包构成的。*** 程序从 `main` 包开始运行。本程序通过导入路径 `"fmt"` 和 `"math/rand"` 来使用这两个包。
按照约定，包名与导入路径的最后一个元素一致。例如，`"math/rand"` 包中的源码均以 `package rand` 语句开始。

示例程序如下：
```Go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}
```