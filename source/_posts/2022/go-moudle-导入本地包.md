---
title: go moudle 导入本地包
description: go moudle 导入本地包
permalink: go moudle 导入本地包
copyright: true
date: 2022-05-11 08:13:35
keywords: go,moudle,package,file,interface
tags:
	- go
	- package
	- interface
categories:
	- go
	- interface
---

# 包

## 包的定义 => `package` 关键字，包名通常和目录名一致，不能包含 `-`

+ 一个文件夹就是一个包
+ 文件夹里面放的都是 `.go` 文件

## 包的导入 => `import`

+ 包导入路径是从 `$GOPATH/src/` 后面的路径开始写起
+ 单行导入
+ 多行导入
+ 给导入的包起别名
+ 匿名导入 => `sql` 包导入时会提及

<!--more-->

## 包中标识符(`变量名\函数名\结构体名\常量…`)可见性 => 标识符首字母大写标识对外可见

`init()` 
+ 包导入的时候会自动执行
+ 一个包里面只有一个 `init()`函数
+ `init()` 没有参数也没有返回值，也不能直接调用
+ 多个包的 `init` 执行顺序
+ 一般用于一些初始化操作…

# 接口
接口是一种类型，一种抽象的类型。
接口就是你要实现的方法的清单。

## 接口的定义
```Go
type mover interface {
	方法的签名(参数) 返回值
}
```

## 接口的实现
实现了接口的所有方法就是实现了这个接口。
实现了接口就可以当成这个接口类型的变量。

## 接口变量
实现了一个万能的变量，可以保存所有实现了我这个接口的类型的值。
通常是作为函数的参数出现。

## 空接口

```Go
interface{}: 空接口
```
接口中没有定义任何方法，也就是任意类型都实现空接口。任何类型都可以存放在空接口中。

用途：
+ 作为函数参数。
+ `map[string]interface{}`

## 接口底层

+ 动态类型

+ 动态值

## 类型断言

做类型断言的前提是一定要是一个接口类型的变量。

```Go
方式一：
x.(T)
实例：
var a interface{} // 定义一个 空接口变量

a = 100
// 判断 a 保存的值具体的类型
// 类型断言
v, ok := a.(int)
if !ok {
	fmt.Println("猜错了…")
} else {
	fmt.Println(v)
}
```

```Go
方式二：
使用 `switch` 来做

实例：
// switch
switch a.(type) {
case int8:
	fmt.Println("int8")
case int16:
	fmt.Println("int16")
case string:
	fmt.Println("string")
case int:
	fmt.Println("int")
case bool:
	fmt.Println("bool")
default:
	fmt.Println("滚~")
}
```

# 文件操作

## 打开/关闭文件

小细节需要注意的地方，在打开文件时候，会返回 文件指针 和 错误信息，`defer` 的执行顺序很关键。一定要注意写法。
```Go
file, err := os.Open("./xxx.txt")
// ❌ defer file.Close()  此时如果打开文失败，则file 为nil，再次执行 defer 就会报错 panic 空指针。
if err != nil {
	fmt.Println("open file error: ", err)
	return
}
defer file.Close()
```

## 读文件
读取文件三种方式：
+ `fileObj.Read()`
+ `bufio`
+ `ioutil`

## 写文件

```Go
file, err := os.openFile()
file.write/writeString

bufio

ioutil
```