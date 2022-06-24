---
title: go 每日一问
description: go 每日一问
permalink: go 每日一问
copyright: true
keywords: 'go,进阶,学习'
tags:
  - go
categories:
  - go
abbrlink: 48711
date: 2022-06-13 20:10:44
---

# 基础类
## ***2022-06-13*** 
问：与其他语言相比，使用 `Go` 有什么好处？
+ 与其他作为学术实验开始的语言不同，Go 代码的设计是务实的。每个功能 和语法决策都旨在让程序员的生活更轻松。
+ Golang 针对并发进行了优化，并且在规模上运行良好。
+ 由于单一的标准代码格式，Golang 通常被认为比其他语言更具可读性。
+ 自动垃圾收集明显比 Java 或 Python 更有效，因为它与程序同时执行。

<!--more-->

## ***2022-06-14*** 
问：`Golang` 使用什么数据类型(都有哪些数据类型)?
+ 布尔型
+ 数字类型(整数、浮点数)
+ 字符串类型
+ 错误类型(error)
+ 派生类型
  + `Pointer`(指针类型)
  + `Method`(函数类型)
  + `Interface`(接口类型)
  + `struct`(结构体)
  + `Array`
  + `Slice`
  + `Map`
  + `Channel`

## ***2022-06-15*** 
问：`Go` 程序中的包是什么?
**包** (`pkg`) 是 `Go` 工作区中包含 `Go` 源文件或其他包的目录。源文件中的每个函数、变量和类型都存储在链接包中。每个 `Go` 源文件都属于一个包，该包在文件顶部使用以下命令声明:
`package <packagename>` 。

## ***2022-06-16*** 
问：`Go` 支持什么形式的类型转换? 将整数转换为浮点数?
`Go` 支持 ***显式类型转换*** 以满足其严格的类型要求。

## ***2022-06-17*** 
问：`Go` 程序中的包是什么?
**包** (`pkg`) 是 `Go` 工作区中包含 `Go` 源文件或其他包的目录。源文件中的每个函数、变量和类型都存储在链接包中。每个 `Go` 源文件都属于一个包，该包在文件顶部使用以下命令声明:
`package <packagename>` 。

## ***2022-06-18*** 
问：什么是 `Goroutine`? 如何停止它?
+ 将要并发执行的任务包装成一个函数，调用函数的时候加上 `go` 关键字，就能够开启一个 `goroutine` 去执行该函数的任务。
+ `goroutine` 对应的函数执行完，该 `goroutine` 就结束了。
+ 程序启动的时候会自动创建一个 `goroutine` 去执行 `main` 函数。
+ `main` 函数结束了，那么程序就结束了，由该程序启动的所有其他 `goroutine` 也都结束了。

+ `goroutine` 对应的函数执行结束了， `goroutine` 就结束了。
+ `main` 函数执行结束了，由 `main` 函数启动的 `goroutine` 也都结束了。


## ***2022-06-19*** 
问： [如何在运行时检查变量类型?](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-typecheck/)
类型开关(`Type Switch`)是在运行时检查变量类型的最佳方式。类型开关按类型 而不是值来评估变量。每个 `Switch` 至少包含一个 `case` 用作条件语句，如果没 有一个 `case` 为真，则执行 `default` 。

## ***2022-06-20*** 
问： [Go 两个接口之间可以存在什么关系?](https://draveness.me/golang/docs/part2-foundation/ch04-basic/golang-interface/)
如果两个接口有相同的方法列表，那么他们就是等价的，可以相互赋值。如果 接口 A 的方法列表是接口 B 的方法列表的子集，那么接口 B 可以赋值给接口 A。接口查询是否成功，要在运行期才能够确定。

## ***2022-06-21*** 
问： [Go 当中同步锁有什么特点?作用是什么?](https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-sync-primitives/)
同步锁的特点：
+ `Mutex`：当一个 `Goroutine`（协程）获得了 `Mutex` 后，其他 `Gorouline`（协程）就只能进入等待之中，除非该 `gorouline` 释放了该 `Mutex` 。

+ `RWMutex`（读写锁）：`RWMutex` 在读锁占用的情况下，会阻止写，但不阻止读；`RWMutex` 在写锁占用情况下，会阻止任何其他 `goroutine`（读和写）进来，整个锁相当于由该 `goroutine`（协程）独占。
> 同步锁的作用：保证资源在使用时的独有性，不会因为并发而导致数据错乱，保证系统并发时的稳定性。

## ***2022-06-22*** 
问： [`Go` 语言当中 `Channel`(通道)有什么特点，需要注意什么?](https://zhuanlan.zhihu.com/p/391210771)

如果给一个 `nil` 的 `channel` 发送数据，会造成永远阻塞。
如果从一个 `nil` 的 channel 中接收数据，也会造成永久阻塞。 给一个已经关闭的 `channel` 发送数据， 会引起 `panic`
从一个已经关闭的 `channel` 接收数据， 如果缓冲区中为空，则返回一个 零 值。

## ***2022-06-23*** 
问：`Go` 语言中 `cap` 函数可以作用于哪些内容?
可以作用于的类型有:
+ `array`(数组)
+ `slice`(切片)
+ `channel`(通道)

## ***2022-06-24*** 
问：`goconvey` 是什么? 一般用来做什么? [github: goconvey]((https://github.com/smartystreets/goconvey))
+ `goconvey` 是一个支持 `Golang` 的单元测试框架
+ `goconvey`能够自动监控文件修改并启动测试，并可以将测试结果实时输出到 `Web` 界面
+ `goconvey` 提供了丰富的断言简化测试用例的编写