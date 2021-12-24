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

	```Go
	package main

	import "fmt"

	func split(sum int) (x, y int) {
		x = sum * 4 / 9
		y = sum - x
		return
	}

	func main() {
		fmt.Println(split(17))
	}
	```

# 变量
`var` 语句用于声明一个变量列表，跟函数的参数列表一样，类型在最后。

+ 变量的初始化
	变量声明可以包含初始值，每个变量对应一个。
	如果初始化值已存在，则可以省略类型；变量会从初始值中获得类型。

+ 短变量声明
	在函数中，简洁赋值语句 `:=` 可在类型明确的地方代替 `var` 声明。
	函数外的每个语句都必须以关键字开始（`var`, `func` 等等），因此 `:=` 结构不能在函数外使用。
	```Go
	package main

	import "fmt"

	func main() {
		var i, j int = 1, 2
		k := 3
		c, python, java := true, false, "no!"

		fmt.Println(i, j, k, c, python, java)
	}
	```

# 基本类型
`Go` 的基本类型有

	bool
	string
	int  int8  int16  int32  int64
	uint uint8 uint16 uint32 uint64 uintptr
	byte // uint8 的别名
	rune // int32 的别名 // 表示一个 Unicode 码点
	float32 float64
	complex64 complex128

`int`, `uint` 和 `uintptr` 在 `32` 位系统上通常为 `32` 位宽，在 `64` 位系统上则为 `64` 位宽。 当你需要一个整数值时应使用 `int` 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。
```Go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)
}
```

+ 零值
	没有明确初始值的变量声明会被赋予它们的 零值。
	```Go
	零值是：
		数值类型为 0，
		布尔类型为 false，
		字符串为 ""（空字符串）。
	```

+ 类型转换
	表达式 T(v) 将值 v 转换为类型 T。

	一些关于数值的转换：
	```Go
	var i int = 42
	var f float64 = float64(i)
	var u uint = uint(f)
	```
	或者，更加简单的形式：
	```Go
	i := 42
	f := float64(i)
	u := uint(f)
	```
	与 `C` 不同的是，`Go` 在不同类型的项之间赋值时需要显式转换。试着移除例子中 `float64` 或 `uint` 的转换看看会发生什么。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	func main() {
		var x, y int = 3, 4
		var f float64 = math.Sqrt(float64(x*x + y*y))
		var z uint = uint(f)
		fmt.Println(x, y, z)
	}
	```

+ 类型推导
	在声明一个变量而不指定其类型时（即使用不带类型的 `:=` 语法或 `var =` 表达式语法），变量的类型由右值推导得出。

	当右值声明了类型时，新变量的类型与其相同：
	```Go
	var i int
	j := i // j 也是一个 int
	```
	不过当右边包含未指明类型的数值常量时，新变量的类型就可能是 `int`, `float64` 或 `complex128` 了，这取决于常量的精度：
	```Go
	i := 42           // int
	f := 3.142        // float64
	g := 0.867 + 0.5i // complex128
	```
	尝试修改示例代码中 `v` 的初始值，并观察它是如何影响类型的。


+ 常量
	常量的声明与变量类似，只不过是使用 `const` 关键字。
	常量可以是字符、字符串、布尔值或数值。
	常量不能用 `:= `语法声明。
	```Go
	package main
	import "fmt"
	const Pi = 3.14
	func main() {
		const World = "世界"
		fmt.Println("Hello", World)
		fmt.Println("Happy", Pi, "Day")

		const Truth = true
		fmt.Println("Go rules?", Truth)
	}
	```

+ 数值常量
	数值常量是高精度的 **值**。
	一个未指定类型的常量由上下文来决定其类型。
	(`int` 类型最大可以存储一个 `64` 位的整数，有时会更小。)
	(`int` 可以存放最大64位的整数，根据平台不同有时会更少。)
	```Go
	package main
	import "fmt"

	const (
		// 将 1 左移 100 位来创建一个非常大的数字
		// 即这个数的二进制是 1 后面跟着 100 个 0
		Big = 1 << 100
		// 再往右移 99 位，即 Small = 1 << 1，或者说 Small = 2
		Small = Big >> 99
	)

	func needInt(x int) int { return x*10 + 1 }
	func needFloat(x float64) float64 {
		return x * 0.1
	}

	func main() {
		fmt.Println(needInt(Small))
		fmt.Println(needFloat(Small))
		fmt.Println(needFloat(Big))
	}
	```

# for
`Go` 只有一种循环结构：`for` 循环。

基本的 `for` 循环由三部分组成，它们用分号隔开：
+ 初始化语句：在第一次迭代前执行
+ 条件表达式：在每次迭代前求值
+ 后置语句：在每次迭代的结尾执行

初始化语句通常为一句短变量声明，该变量声明仅在 `for` 语句的作用域中可见。
一旦条件表达式的布尔值为 `false`，循环迭代就会终止。
注意：和 C、Java、JavaScript 之类的语言不同，Go 的 for 语句后面的三个构成部分外没有小括号， **大括号 { } 则是必须的**。
```Go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)
}
```

+ 初始化语句和后置语句是可选的。
	```Go
	package main

	import "fmt"

	func main() {
		sum := 1
		for ; sum < 1000; {
			sum += sum
		}
		fmt.Println(sum)
	}
	```

+ `for` 是 `Go` 中的 `“while”`
	此时你可以去掉分号，因为 `C` 的 `while` 在 `Go` 中叫做 `for`。
	```Go
	package main

	import "fmt"

	func main() {
		sum := 1
		for sum < 1000 {
			sum += sum
		}
		fmt.Println(sum)
	}
	```

+ 无限循环
	如果省略循环条件，该循环就不会结束，因此无限循环可以写得很紧凑。
	```Go
	package main

	func main() {
		for {
		}
	}
	```


# if
`Go` 的 `if` 语句与 `for` 循环类似，表达式外无需小括号 `( )` ，而大括号 `{ } `则是必须的。
```Go
package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}
```

+ if 的简短语句
	同 `for` 一样， `if` 语句可以在条件表达式前执行一个简单的语句。
	该语句声明的变量作用域仅在 `if` 之内。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	func pow(x, n, lim float64) float64 {
		if v := math.Pow(x, n); v < lim {
			return v
		}
		return lim
	}

	func main() {
		fmt.Println(
			pow(3, 2, 10),
			pow(3, 3, 20),
		)
	}
	```

+ if 和 else
	在 `if` 的简短语句中声明的变量同样可以在任何对应的 `else `块中使用。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	func pow(x, n, lim float64) float64 {
		if v := math.Pow(x, n); v < lim {
			return v
		} else {
			fmt.Printf("%g >= %g\n", v, lim)
		}
		// 这里开始就不能使用 v 了
		return lim
	}

	func main() {
		fmt.Println(
			pow(3, 2, 10),
			pow(3, 3, 20),
		)
	}
	```

# switch
`switch` 是编写一连串 `if - else` 语句的简便方法。它运行第一个值等于条件表达式的 `case` 语句。

`Go` 的 `switch` 语句类似于 `C`、`C++`、`Java`、`JavaScript` 和 `PHP` 中的，不过 `Go` 只运行选定的 `case`，而非之后所有的 `case`。 实际上，`Go` 自动提供了在这些语言中每个 `case` 后面所需的 `break` 语句。 除非以 `fallthrough` 语句结束，否则分支会自动终止。 `Go` 的另一点重要的不同在于 `switch` 的 `case` 无需为常量，且取值不必为整数。
```Go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```

+ `switch` 的求值顺序
`switch` 的 `case` 语句从上到下顺次执行，直到匹配成功时停止。
	```Go
	（例如，
		switch i {
		case 0:
		case f():
		}
	在 i==0 时 f 不会被调用。）
	```
	```Go
	package main

	import (
		"fmt"
		"time"
	)

	func main() {
		fmt.Println("When's Saturday?")
		today := time.Now().Weekday()
		switch time.Saturday {
		case today + 0:
			fmt.Println("Today.")
		case today + 1:
			fmt.Println("Tomorrow.")
		case today + 2:
			fmt.Println("In two days.")
		default:
			fmt.Println("Too far away.")
		}
	}
	```

+ 没有条件的 `switch`
	没有条件的 `switch` 同 `switch true` 一样。
	这种形式能将一长串 `if-then-else` 写得更加清晰。
	```Go
	package main

	import (
		"fmt"
		"time"
	)

	func main() {
		t := time.Now()
		switch {
		case t.Hour() < 12:
			fmt.Println("Good morning!")
		case t.Hour() < 17:
			fmt.Println("Good afternoon.")
		default:
			fmt.Println("Good evening.")
		}
	}
	```

# defer
`defer` 语句会将函数推迟到外层函数返回之后执行。
推迟调用的函数其参数会立即求值，但直到外层函数返回前该函数都不会被调用。
```Go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

+ `defer` 栈
	推迟的函数调用会被压入一个栈中。当外层函数返回时，被推迟的函数会按照后进先出的顺序调用。
	```Go
	package main

	import "fmt"

	func main() {
		fmt.Println("counting")

		for i := 0; i < 10; i++ {
			defer fmt.Println(i)
		}

		fmt.Println("done")
	}
	```

