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

# 指针
`Go` 拥有指针。指针保存了值的内存地址。
类型 `*T` 是指向 `T` 类型值的指针。其零值为 `nil`。
`var p *int`
`&` 操作符会生成一个指向其操作数的指针。
```Go
i := 42
p = &i
```
`*` 操作符表示指针指向的底层值。
```Go
fmt.Println(*p) // 通过指针 p 读取 i
*p = 21         // 通过指针 p 设置 i
```
这也就是通常所说的 `“间接引用”`或 `“重定向”`。
与 `C` 不同，`Go` 没有指针运算。
```Go
package main

import "fmt"

func main() {
	i, j := 42, 2701

	p := &i         // 指向 i
	fmt.Println(*p) // 通过指针读取 i 的值
	*p = 21         // 通过指针设置 i 的值
	fmt.Println(i)  // 查看 i 的值

	p = &j         // 指向 j
	*p = *p / 37   // 通过指针对 j 进行除法运算
	fmt.Println(j) // 查看 j 的值
}
```

# 结构体
一个结构体（`struct`）就是一组字段（`field`）。
```Go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})
}
```
+ 结构体字段
	结构体字段使用点号来访问。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		X int
		Y int
	}

	func main() {
		v := Vertex{1, 2}
		v.X = 4
		fmt.Println(v.X)
	}
	```

+ 结构体指针
	结构体字段可以通过结构体指针来访问。
	如果我们有一个指向结构体的指针 `p`，那么可以通过 `(*p).X` 来访问其字段 `X`。不过这么写太啰嗦了，所以语言也允许我们使用**隐式间接引用**，直接写 `p.X` 就可以。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		X int
		Y int
	}

	func main() {
		v := Vertex{1, 2}
		p := &v
		p.X = 1e9
		fmt.Println(v)
	}
	```
 
+ 结构体文法
	结构体文法通过直接列出字段的值来新分配一个结构体。
	使用 Name: 语法可以仅列出部分字段。（字段名的顺序无关。）
	特殊的前缀 `&` 返回一个指向结构体的指针。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		X, Y int
	}

	var (
		v1 = Vertex{1, 2}  // 创建一个 Vertex 类型的结构体
		v2 = Vertex{X: 1}  // Y:0 被隐式地赋予
		v3 = Vertex{}      // X:0 Y:0
		p  = &Vertex{1, 2} // 创建一个 *Vertex 类型的结构体（指针）
	)

	func main() {
		fmt.Println(v1, p, v2, v3)
	}
	```

# 数组
类型 `[n]T` 表示拥有 `n` 个 `T` 类型的值的数组。

表达式
```Ho
var a [10]int
```
会将变量 `a` 声明为拥有 `10` 个整数的数组。

数组的长度是其类型的一部分，因此数组不能改变大小。这看起来是个限制，不过没关系，`Go` 提供了更加便利的方式来使用数组。
```Go
package main

import "fmt"

func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}
```

# 切片
每个数组的大小都是固定的。而切片则为数组元素提供动态大小的、灵活的视角。在实践中，切片比数组更常用。

类型 `[]T` 表示一个元素类型为 `T` 的切片。

切片通过两个下标来界定，即一个上界和一个下界，二者以冒号分隔：
```Go
a[low : high]
```
它会选择一个半开区间，包括第一个元素，但排除最后一个元素。

以下表达式创建了一个切片，它包含 `a` 中下标从 `1` 到 `3` 的元素：
```Go
a[1:4]
```

```Go
package main

import "fmt"

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4]
	fmt.Println(s)
}
```

+ 切片就像数组的引用
	**切片并不存储任何数据，它只是描述了底层数组中的一段**。
	***更改切片的元素会修改其底层数组中对应的元素***。
	**与它共享底层数组的切片都会观测到这些修改**。
	```Go
	package main

	import "fmt"

	func main() {
		names := [4]string{
			"John",
			"Paul",
			"George",
			"Ringo",
		}
		fmt.Println(names)

		a := names[0:2]
		b := names[1:3]
		fmt.Println(a, b)

		b[0] = "XXX"
		fmt.Println(a, b)
		fmt.Println(names)
	}
	```

+ 切片文法
	切片文法类似于没有长度的数组文法。
	这是一个数组文法：
	```Go
	[3]bool{true, true, false}
	```
	下面这样则会创建一个和上面相同的数组，然后构建一个引用了它的切片：
	```Go
	[]bool{true, true, false}
	```
	```Go
	package main

	import "fmt"

	func main() {
		q := []int{2, 3, 5, 7, 11, 13}
		fmt.Println(q)

		r := []bool{true, false, true, true, false, true}
		fmt.Println(r)

		s := []struct {
			i int
			b bool
		}{
			{2, true},
			{3, false},
			{5, true},
			{7, true},
			{11, false},
			{13, true},
		}
		fmt.Println(s)
	}
	```

+ 切片的默认行为
	在进行切片时，你可以利用它的默认行为来忽略上下界。
	**切片下界的默认值为 0，上界则是该切片的长度**。

	对于数组
	```Go
	var a [10]int
	```
	来说，以下切片是等价的：
	```Go
	a[0:10]
	a[:10]
	a[0:]
	a[:]
	```
	```Go
	package main

	import "fmt"

	func main() {
		s := []int{2, 3, 5, 7, 11, 13}

		s = s[1:4]
		fmt.Println(s)

		s = s[:2]
		fmt.Println(s)

		s = s[1:]
		fmt.Println(s)
	}
	```

+ 切片的长度与容量
	切片拥有 长度 和 容量。
	切片的长度就是它所包含的元素个数。
	切片的容量是从它的第一个元素开始数，到其底层数组元素末尾的个数。
	切片 `s` 的长度和容量可通过表达式 `len(s)` 和 `cap(s)` 来获取。
	```Go
	package main

	import "fmt"

	func main() {
		s := []int{2, 3, 5, 7, 11, 13}
		printSlice(s)

		// 截取切片使其长度为 0
		s = s[:0]
		printSlice(s)

		// 拓展其长度
		s = s[:4]
		printSlice(s)

		// 舍弃前两个值
		s = s[2:]
		printSlice(s)
	}

	func printSlice(s []int) {
		fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
	}
	```

+ `nil` 切片
	切片的零值是 `nil`。
	`nil` 切片的长度和容量为 `0` 且没有底层数组。
	```Go
	package main

	import "fmt"

	func main() {
		var s []int
		fmt.Println(s, len(s), cap(s))
		if s == nil {
			fmt.Println("nil!")
		}
	}
	```

+ 用 `make` 创建切片
	切片可以用内建函数 `make` 来创建，这也是你创建动态数组的方式。

	`make` 函数会分配一个元素为零值的数组并返回一个引用了它的切片：
	```Go
	a := make([]int, 5)  // len(a)=5
	```
	要指定它的容量，需向 `make` 传入第三个参数：
	```Go
	b := make([]int, 0, 5) // len(b)=0, cap(b)=5

	b = b[:cap(b)] // len(b)=5, cap(b)=5
	b = b[1:]      // len(b)=4, cap(b)=4
	```
	```Go
	package main

	import "fmt"

	func main() {
		a := make([]int, 5)
		printSlice("a", a)

		b := make([]int, 0, 5)
		printSlice("b", b)

		c := b[:2]
		printSlice("c", c)

		d := c[2:5]
		printSlice("d", d)
	}

	func printSlice(s string, x []int) {
		fmt.Printf("%s len=%d cap=%d %v\n",
			s, len(x), cap(x), x)
	}
	```

+ 切片的切片
	切片可包含任何类型，甚至包括其它的切片。
	```Go
	package main

	import (
		"fmt"
		"strings"
	)

	func main() {
		// 创建一个井字板（经典游戏）
		board := [][]string{
			[]string{"_", "_", "_"},
			[]string{"_", "_", "_"},
			[]string{"_", "_", "_"},
		}

		// 两个玩家轮流打上 X 和 O
		board[0][0] = "X"
		board[2][2] = "O"
		board[1][2] = "X"
		board[1][0] = "O"
		board[0][2] = "X"

		for i := 0; i < len(board); i++ {
			fmt.Printf("%s\n", strings.Join(board[i], " "))
		}
	}
	```

+ 向切片追加元素
	为切片追加新的元素是种常用的操作，为此 `Go` 提供了内建的 `append` 函数。内建函数的 [文档](https://go-zh.org/pkg/builtin/#append) 对此函数有详细的介绍。
	```Go
	func append(s []T, vs ...T) []T
	```
	`append` 的第一个参数 `s` 是一个元素类型为 `T` 的切片，其余类型为 `T` 的值将会追加到该切片的末尾。

	`append` 的结果是一个包含原切片所有元素加上新添加元素的切片。

	当 `s` 的底层数组太小，不足以容纳所有给定的值时，它就会分配一个更大的数组。返回的切片会指向这个新分配的数组。
	```Go
	package main

	import "fmt"

	func main() {
		var s []int
		printSlice(s)

		// 添加一个空切片
		s = append(s, 0)
		printSlice(s)

		// 这个切片会按需增长
		s = append(s, 1)
		printSlice(s)

		// 可以一次性添加多个元素
		s = append(s, 2, 3, 4)
		printSlice(s)
	}

	func printSlice(s []int) {
		fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
	}
	```

# Range
`for` 循环的 `range` 形式可遍历切片或映射。

当使用 `for` 循环遍历切片时，每次迭代都会返回两个值。第一个值为当前元素的下标，第二个值为该下标所对应元素的一份副本。
```Go
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}
```

+ range（续）
	可以将下标或值赋予 `_` 来忽略它。
	```Go
	for i, _ := range pow
	for _, value := range pow
	```
	若你只需要索引，忽略第二个变量即可。
	```Go
	for i := range pow
	```
	```Go
	package main

	import "fmt"

	func main() {
		pow := make([]int, 10)
		for i := range pow {
			pow[i] = 1 << uint(i) // == 2**i
		}
		for _, value := range pow {
			fmt.Printf("%d\n", value)
		}
	}
	```

# 映射
**映射将键映射到值**。
映射的零值为 `nil` `。nil` 映射既没有键，也不能添加键。
`make` 函数会返回给定类型的映射，并将其初始化备用。
```Go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
}
```

+ 映射的文法
	映射的文法与结构体相似，不过必须有键名。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		Lat, Long float64
	}

	var m = map[string]Vertex{
		"Bell Labs": Vertex{
			40.68433, -74.39967,
		},
		"Google": Vertex{
			37.42202, -122.08408,
		},
	}

	func main() {
		fmt.Println(m)
	}
	```

+ 映射的文法（二）
	若顶级类型只是一个类型名，你可以在文法的元素中省略它。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		Lat, Long float64
	}

	var m = map[string]Vertex{
		"Bell Labs": {40.68433, -74.39967},
		"Google":    {37.42202, -122.08408},
	}

	func main() {
		fmt.Println(m)
	}
	```

+ 修改映射
	在映射 `m` 中插入或修改元素：
	```Go
	m[key] = elem
	```
	获取元素：
	```Go
	elem = m[key]
	```
	删除元素：
	```Go
	delete(m, key)
	```
	通过双赋值检测某个键是否存在：
	```Go
	elem, ok = m[key]
	```
	若 `key` 在 `m` 中，`ok` 为 `true` ；否则，`ok` 为 `false`。
	若 `key` 不在映射中，那么 `elem` 是该映射元素类型的零值。
	同样的，当从映射中读取某个不存在的键时，结果是映射的元素类型的零值。

	注 ：若 `elem` 或 `ok` 还未声明，你可以使用短变量声明：
	```Go
	elem, ok := m[key]
	```

	```Go
	package main

	import "fmt"

	func main() {
		m := make(map[string]int)

		m["Answer"] = 42
		fmt.Println("The value:", m["Answer"])

		m["Answer"] = 48
		fmt.Println("The value:", m["Answer"])

		delete(m, "Answer")
		fmt.Println("The value:", m["Answer"])

		v, ok := m["Answer"]
		fmt.Println("The value:", v, "Present?", ok)
	}
	```

# 函数值
函数也是值。它们可以像其它值一样传递。
函数值可以用作函数的参数或返回值。

```Go
package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```

+ 函数的闭包
	`Go` 函数可以是一个闭包。闭包是一个函数值，它引用了其函数体之外的变量。该函数可以访问并赋予其引用的变量的值，换句话说，该函数被这些变量“绑定”在一起。

	例如，函数 `adder` 返回一个闭包。每个闭包都被绑定在其各自的 `sum` 变量上。
	```Go
	package main

	import "fmt"

	func adder() func(int) int {
		sum := 0
		return func(x int) int {
			sum += x
			return sum
		}
	}

	func main() {
		pos, neg := adder(), adder()
		for i := 0; i < 10; i++ {
			fmt.Println(
				pos(i),
				neg(-2*i),
			)
		}
	}
	```

# 方法
`Go` 没有类。不过你可以为结构体类型定义方法。
方法就是一类带特殊的 *接收者* 参数的函数。
方法接收者在它自己的参数列表内，位于 `func` 关键字和方法名之间。
在此例中，`Abs` 方法拥有一个名为 `v`，类型为 `Vertex` 的接收者。
```Go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

+ 方法即函数
	记住：***方法只是个带接收者参数的函数***。
	现在这个 `Abs` 的写法就是个正常的函数，功能并没有什么变化。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type Vertex struct {
		X, Y float64
	}

	func Abs(v Vertex) float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func main() {
		v := Vertex{3, 4}
		fmt.Println(Abs(v))
	}
	```

+ 方法（二）
	你也可以为非结构体类型声明方法。
	在此例中，我们看到了一个带 `Abs` 方法的数值类型 `MyFloat`。
	你只能为在同一包内定义的类型的接收者声明方法，而不能为其它包内定义的类型（包括 `int` 之类的内建类型）的接收者声明方法。
	（译注：就是接收者的类型定义和方法声明必须在同一包内；不能为内建类型声明方法。）
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type MyFloat float64

	func (f MyFloat) Abs() float64 {
		if f < 0 {
			return float64(-f)
		}
		return float64(f)
	}

	func main() {
		f := MyFloat(-math.Sqrt2)
		fmt.Println(f.Abs())
	}
	```

+ 指针接收者
	你可以为指针接收者声明方法。

	这意味着对于某类型 `T`，接收者的类型可以用 `*T` 的文法。（此外，`T` 不能是像 `*int` 这样的指针。）

	例如，这里为 `*Vertex` 定义了 `Scale` 方法。

	指针接收者的方法可以修改接收者指向的值（就像 `Scale` 在这做的）。由于方法经常需要修改它的接收者，指针接收者比值接收者更常用。

	试着移除第 `16` 行 `Scale` 函数声明中的 `*`，观察此程序的行为如何变化。

	若使用值接收者，那么 `Scale` 方法会对原始 `Vertex` 值的副本进行操作。（对于函数的其它参数也是如此。）`Scale` 方法必须用指针接受者来更改 `main` 函数中声明的 `Vertex` 的值。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type Vertex struct {
		X, Y float64
	}

	func (v Vertex) Abs() float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func (v *Vertex) Scale(f float64) {
		v.X = v.X * f
		v.Y = v.Y * f
	}

	func main() {
		v := Vertex{3, 4}
		v.Scale(10)
		fmt.Println(v.Abs())
	}
	```

+ 指针与函数
	现在我们要把 `Abs` 和 `Scale` 方法重写为函数。

	同样，我们先试着移除掉第 16 的 *。你能看出为什么程序的行为改变了吗？要怎样做才能让该示例顺利通过编译？
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type Vertex struct {
		X, Y float64
	}

	func Abs(v Vertex) float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func Scale(v *Vertex, f float64) {
		v.X = v.X * f
		v.Y = v.Y * f
	}

	func main() {
		v := Vertex{3, 4}
		Scale(&v, 10)
		fmt.Println(Abs(v))
	}
	```

+ 方法与指针重定向
	比较前两个程序，你大概会注意到带指针参数的函数必须接受一个指针：
	```Go
	var v Vertex
	ScaleFunc(v, 5)  // 编译错误！
	ScaleFunc(&v, 5) // OK
	```
	而以指针为接收者的方法被调用时，接收者既能为值又能为指针：
	```Go
	var v Vertex
	v.Scale(5)  // OK
	p := &v
	p.Scale(10) // OK
	```
	对于语句 `v.Scale(5)`，即便 `v` 是个值而非指针，带指针接收者的方法也能被直接调用。 也就是说，由于 `Scale` 方法有一个指针接收者，为方便起见，`Go` 会将语句 `v.Scale(5)` 解释为 `(&v).Scale(5)`。
	```Go
	package main

	import "fmt"

	type Vertex struct {
		X, Y float64
	}

	func (v *Vertex) Scale(f float64) {
		v.X = v.X * f
		v.Y = v.Y * f
	}

	func ScaleFunc(v *Vertex, f float64) {
		v.X = v.X * f
		v.Y = v.Y * f
	}

	func main() {
		v := Vertex{3, 4}
		v.Scale(2)
		ScaleFunc(&v, 10)

		p := &Vertex{4, 3}
		p.Scale(3)
		ScaleFunc(p, 8)

		fmt.Println(v, p)
	}
	```

+ 方法与指针重定向（二）
	同样的事情也发生在相反的方向。
	接受一个值作为参数的函数必须接受一个指定类型的值：
	```Go
	var v Vertex
	fmt.Println(AbsFunc(v))  // OK
	fmt.Println(AbsFunc(&v)) // 编译错误！
	```
	而以值为接收者的方法被调用时，接收者既能为值又能为指针：
	```Go
	var v Vertex
	fmt.Println(v.Abs()) // OK
	p := &v
	fmt.Println(p.Abs()) // OK
	```
	这种情况下，方法调用 `p.Abs()` 会被解释为 `(*p).Abs()`。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type Vertex struct {
		X, Y float64
	}

	func (v Vertex) Abs() float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func AbsFunc(v Vertex) float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func main() {
		v := Vertex{3, 4}
		fmt.Println(v.Abs())
		fmt.Println(AbsFunc(v))

		p := &Vertex{4, 3}
		fmt.Println(p.Abs())
		fmt.Println(AbsFunc(*p))
	}
	```

+ 选择值或指针作为接收者
	使用指针接收者的原因有二：
	首先，方法能够修改其接收者指向的值。
	其次，这样可以避免在每次调用方法时复制该值。若值的类型为大型结构体时，这样做会更加高效。

	在本例中，`Scale` 和 `Abs` 接收者的类型为 `*Vertex`，即便 `Abs` 并不需要修改其接收者。
	通常来说，所有给定类型的方法都应该有值或指针接收者，但并不应该二者混用。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type Vertex struct {
		X, Y float64
	}

	func (v *Vertex) Scale(f float64) {
		v.X = v.X * f
		v.Y = v.Y * f
	}

	func (v *Vertex) Abs() float64 {
		return math.Sqrt(v.X*v.X + v.Y*v.Y)
	}

	func main() {
		v := &Vertex{3, 4}
		fmt.Printf("Before scaling: %+v, Abs: %v\n", v, v.Abs())
		v.Scale(5)
		fmt.Printf("After scaling: %+v, Abs: %v\n", v, v.Abs())
	}
	```

# 接口
**接口类型 是由一组方法签名定义的集合**。
接口类型的变量可以保存任何实现了这些方法的值。
注意: 示例代码的 `22` 行存在一个错误。由于 `Abs` 方法只为 `*Vertex` （指针类型）定义，因此 `Vertex`（值类型）并未实现 `Abser`。
```Go
package main

import (
	"fmt"
	"math"
)

type Abser interface {
	Abs() float64
}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f  // a MyFloat 实现了 Abser
	a = &v // a *Vertex 实现了 Abser

	// 下面一行，v 是一个 Vertex（而不是 *Vertex）
	// 所以没有实现 Abser。
	a = v

	fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

+ 接口与隐式实现
	类型通过实现一个接口的所有方法来实现该接口。既然无需专门显式声明，也就没有 `implements` 关键字。
	隐式接口从接口的实现中解耦了定义，这样接口的实现可以出现在任何包中，无需提前准备。
	因此，也就无需在每一个实现上增加新的接口名称，这样同时也鼓励了明确的接口定义。
	```Go
	package main

	import "fmt"

	type I interface {
		M()
	}

	type T struct {
		S string
	}

	// 此方法表示类型 T 实现了接口 I，但我们无需显式声明此事。
	func (t T) M() {
		fmt.Println(t.S)
	}

	func main() {
		var i I = T{"hello"}
		i.M()
	}
	```

+ 接口值
	接口也是值。它们可以像其它值一样传递。
	接口值可以用作函数的参数或返回值。
	在内部，接口值可以看做包含值和具体类型的元组：
	```Go
	(value, type)
	```
	接口值保存了一个具体底层类型的具体值。
	接口值调用方法时会执行其底层类型的同名方法。
	```Go
	package main

	import (
		"fmt"
		"math"
	)

	type I interface {
		M()
	}

	type T struct {
		S string
	}

	func (t *T) M() {
		fmt.Println(t.S)
	}

	type F float64

	func (f F) M() {
		fmt.Println(f)
	}

	func main() {
		var i I

		i = &T{"Hello"}
		describe(i)
		i.M()

		i = F(math.Pi)
		describe(i)
		i.M()
	}

	func describe(i I) {
		fmt.Printf("(%v, %T)\n", i, i)
	}
	```


> 复习到这里： https://tour.go-zh.org/methods/11