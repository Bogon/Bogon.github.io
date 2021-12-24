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

<!--more-->

# 导入

此代码用圆括号组合了导入，这是 `“分组”` 形式的导入语句。
当然你也可以编写多个导入语句，例如：
```Go
import "fmt"
import "math"
```
不过使用分组导入语句是更好的形式。

示例：
```Go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}
```

# 导出名

在 `Go` 中，如果一个名字以大写字母开头，那么它就是已导出的。例如，`Pizza` 就是个已导出名，`Pi` 也同样，它导出自 `math` 包。
`pizza` 和 `pi` 并未以大写字母开头，所以它们是未导出的。
在导入一个包时，你只能引用其中已导出的名字。任何“未导出”的名字在该包外均无法访问。

# 函数

+ 函数可以没有参数或接受多个参数。注意类型在变量名 之后。
+ 当连续两个或多个函数的已命名形参类型相同时，除最后一个类型以外，其它都可以省略。

	```Go
	x int, y int
	被缩写为
	x, y int
	```

+ 多值返回 函数可以返回任意数量的返回值。

+ 命名返回值
	`Go` 的返回值可被命名，它们会被视作定义在函数顶部的变量。
	返回值的名称应当具有一定的意义，它可以作为文档使用。
	没有参数的 `return` 语句返回已命名的返回值。也就是 直接 返回。
	直接返回语句应当仅用在下面这样的短函数中。在长的函数中它们会影响代码的可读性。