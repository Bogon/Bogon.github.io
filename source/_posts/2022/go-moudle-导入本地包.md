---
title: go moudle 导入本地包
description: go moudle 导入本地包
permalink: go moudle 导入本地包
copyright: true
keywords: 'go,moudle,package,file,interface,goroutine'
tags:
  - go
  - package
  - interface
categories:
  - go
  - interface
abbrlink: 35642
date: 2022-05-11 08:13:35
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

# 反射
接口类型的变量底层分类两个部分：动态类型和动态值。
反射的作用： `json` 等数据解析\ORM等工具…

## 反射的两个方法
+ `relfect.TypeOf()`
+ `relfect.ValueOf()`

# `goroutine`

+ 将要并发执行的任务包装成一个函数，调用函数的时候加上 `go` 关键字，就能够开启一个 `goroutine` 去执行该函数的任务。
+ `goroutine` 对应的函数执行完，该 `goroutine` 就结束了。
+ 程序启动的时候会自动创建一个 `goroutine` 去执行 `main` 函数。
+ `main` 函数结束了，那么程序就结束了，由该程序启动的所有其他 `goroutine` 也都结束了。

## `goroutine` 启动
```Go

func hello(i int) {
	fmt.Println("hello, world~ id: ", i)
}

// 程序启动之后会启动一个 main goroutine
func main() {
	for i := 0; i < 100; i++ {
		// go hello(i) // 单独开启一个 goroutine 去执行 hello 函数(任务)
		go func(i int) {
			fmt.Println(i) // 用的是函数传递进来的，不是外面的i
		}(i)
	}
	fmt.Println("main")
	time.Sleep(time.Second)
	// main 函数结束了，由main函数启动的goroutine 也就结束了
}
```

## `goroutine` 什么时间结束？
+ `goroutine` 对应的函数执行结束了， `goroutine` 就结束了。
+ `main` 函数执行结束了，由 `main` 函数启动的 `goroutine` 也都结束了。

## `sync.WaitGroup`
`var wg sync.WaitGroup`
+ `wg.Add(1)` 计数器 +1
+ `wg.Done()` 计数器-1
+ `wg.Wait()` 等待

##  `goroutine` 调度模型
`goroutine` 的本质: `GMP` 
+ `G`: `goroutine`
+ `M`: 
+ `P`:

## `goroutine` 与 操作系统线程(`OS线程`)的区别
`goroutine` 是用户态的线程，比内核态的线程更加轻量级一些，初始化时之占用2k的空间，可以轻松开启是十万个 `goroutine` 也不会崩内存。

`M:N`： 把 `m` 个 `goroutine` 分配给 `n` 个操作系统线程去执行。

### `runtime.GOMAXPROCS`
`Go1.5` 之后默认操作系统的逻辑核心数，默认跑满 `CPU` 。
`runtime.GOMAXPROCS(1)` ： 只占用一个内核。

### `work pool` 模式
开启一定数量的 `goroutine` 去干活。
# math/rand
```Go
func f() {
	rand.Seed(time.Now().UnixNano())	// 保证每次执行的时候产生的随机数都有点不一样
	for i := 0; i < 5; i++ {
		r1 := rand.Int() // int64 随机数
		r2 := rand.Intn(10)
		fmt.Println(r1, "  ", r2)
	}
}
```

# `channel`
通过 `channel` 实现多个 `goroutine` 之间的通信。
`CSP`：通过通信来共享内存。

`channel` 是一种类型，一种引用类型。 `make` 函数初始化之后才能使用。（`slice`、`map`、`channel`）

## `chan` 声明与初始化
```go
var b chan int // 需要指定通道中元素的类型
```
+ ***`chan` 必须 `make` 函数初始化之后才可以使用！！！***
```go
b = make(chan int) // 不带有缓存的通道的初始化
b = make(chan int, 3) // 带有缓存的通道的初始化
```

## `chan` 的操作
箭头标识数据流动的方向。
+ `<-` : 发送值 `ch1 <- 1`
+ `->` : 接收值 `<- ch1`
+ `close()` : 关闭

```Go
for {
	x, ok := <-ch
	if !ok {
		break
	}
	fmt.Println(x)
}

for x := range ch {
	fmt.Println(x)
}
```

## 单向通道
通常作为函数的参数，只读通道：`<-ch` 只写通道：`ch<- int` 。

## `select` 
同一时刻有多个通道接收数据。

使用 `select` 语句能提高代码的可读性。
+ 可处理一个或多个 `channel` 的发送/接收操作。
+ 如果多个 `case` `同时满足，select` 会随机选择一个。
+ 对于没有 `case` 的 `select{}` 会一直等待，可用于阻塞 `main` 函数。

# `package sync` 包内容
## 互斥锁
`sync.Mutex` 是一个结构体，是一个值类型，给函数传参数的时候要传递指针。
### 两个用法
```Go
var lock sync.Mutex
lock.Lock()	 // 加锁
lock.Unlock()	// 解锁
```

### 为什么要加锁？
防止同一时刻多个 `goroutine` 操作同一个资源。

## 读写互斥锁
### 应用场景
适用于读多写少的场景下。

###  优点
+ 读的 goroutine 来了获取的是读取锁，后续的 goroutine 能读不能写。
+ 写的 goroutine 来了获取的是写锁，后续的 goroutine 不管是读写都要等待获取锁。

### 使用
```Go
var rwLock sync.RWMutex
rwLock.RLock()	// 获取读锁
rwLock.RUnlock()  // 释放读锁

rwLock.Lock()	// 获取写锁
rwLock.Unlock()	// 释放写锁
```

## 等待组
`sync.WaitGroup` 用来等 `goroutine` 执行完成再继续。
同时是一个结构体，是一个值类型，给函数传参数的时候要传递指针。

### 使用
```Go
var wg sync.WaitGroup

wg.Add(1)	// 开启介几个 goroutine 就加几个计数
wg.Done()	// 在goroutine 对应的函数中，函数要结束的时候表示 goroutine 完成，计数器 -1
wg.Wait()	// 阻塞，等待所有的 goroutine 都结束
```

## **`sync.Once`**
### 使用场景
某些函数只需要执行一次的时候就可以使用 `sync.Once` 。
比如并发，博客中加载图片

```Go
var once sync.Once

once.Do()	// 接受一个没有参数也没有返回值的函数，如果需要可以使用闭包
```

## **`sync.Map`**
### 使用场景
并发操作一个 `map` 的时候，内置的 `map` 不是并发安全的。

### 使用
是一个开箱即用的并发安全的 `map` 。
```Go
var syncMap sync.Map

// Map[Key] = value
syncMap.Store(key, value)
syncMap.Load(key)
syncMap.LoadOrStore()
syncMap.Delete()
syncMap.Range()
```

## 原子操作
`go` 语言中内置了一些针对内置的基本数据类型的一些并发安全的操作。

```Go
var i int64 = 10
atomic.AddInt64(&i, 1)
```

# 网络编程
`OSI` 七层模型

`http`: 超文本传输协议。
规定了：浏览器和服务器之间通信的规则。
`HTML`: 超文本标记语言
学习 `HTML` 就是学习标记的符号、标签。

`CSS`: 层叠样式表
+ 规定了 `HTML` 中标签的具体样式(颜色\背景\大小\位置\浮动)

`JsvsScript`: 一种跑在浏览器上的编程语言。

## **`http.Client`**

# 测试
开发自己给自己的代码写测试。
测试函数覆盖率：100%
测试代码覆盖率：60%

## 单元测试
`xxxccc.go`
单元测试文件必须是 `xxx/ccc_text.go` 。
`go` 内置的测试工具：
```Go
go test
```

单元测试函数的格式：
```Go
import "testing"
// Test开头的后缀名
func TestSplit(t *testing.T) {
	t.Fatal()
}
```

## 性能测试/基准测试
函数格式：
```Go
func BenchmarkSplit(b *testing.B) {
	// b.N 被测试函数执行的次数
}
```
执行命令：`go test -bench -v`

## 并行测试
### `setup` 和 `teardown`

### `pprof`
记录 `CPU` 快照信息。
记录 内存的快照信息。

# `flag`

## `os.Args` 
```Go
./xxx a b c
```

`osArgs:["./xxx", "a", "b", "c"]`

## flag 标准库
### 声明变量
```Go
./xxx -name="asd" -age=120
```

```Go
nameVal := flag.String("name", "qwed", "请输入你的名字") // 返回是对象的指针变量

var nameVal2 string
flag.StringVar(&nameVal2, "name", "qwed", "请输入你的名字")	// 把一个已经存在的变量绑定到命令行
flag.TypeVar()

//flag 参数
```

必须要调用：
```Go
flag.Parse() // 解析命令行传入的参数，赋值给对应的变量
```

其他方法：
```Go
flag.Args()	// 返回命令行参数后的其他参数，以[]string类型
flag.NArg()	// 返回命令行参数后的其他参数个数
flag.NFlag() // 返回使用命令行参数个数
```



# 今日分享
***`注释`*** \ ***`日志`*** \ ***`单元测试`*** 

# MySQL
## 数据库
常见的数据库：`sqlite`、`MySQL`、`SQLServer`、`postgreSQL`、`Oracle`
`MySQL` 主流的关系型数据库，类似的还有 `postgSQL` 。
关系型数据库：
用表来存储一类数据。
表结构设计的三大范式：《漫画数据库》


## MySQL 知识点
`SQL` 语句

`DDL`：操作数据库
`DML`：表的增删改查
`DCL`：操作权限

## 数据库引擎
`MySQL` 支持插件式的存储引擎。
常见的存储引擎：`MyISAM` 和 `InnoDB`。

`MyISAM`：
+ 查询速度快
+ 只支持表锁
+ 不支持事务

`InnoDB`： 
+ 整体速度快
+ 支持表锁和行锁
+ 支持事务

### 事务
把多个 SQL 操作当成一个整体。

事务的特点：
ACID：
+ 原子性：事务要么成功，要么失败，没有中间状态
+ 一致性：数据库的完整性没有被破坏
+ 隔离性：事务之间的操作时互相隔离的
	+ 隔离的四个级别
+ 持久性：事务操作的结果是不会丢失的

索引：
索引的原理是啥：B树和B+树
索引的类型
索引的命中
分库分表
`SQL` 注入
`SQL` 慢查询优化

`MySQL` 主从：
	`binlog`

`MySQL` 读写分离


## `Go` 操作 `MySQL`
`database/sql` 原生支持连接池，是并发安全的。
这个标准库没有具体的实现，只是列出了一些需要第三方库实现的具体内容。

### 下载驱动
```Go
go get -u github.com/go-sql-driver/mysql
```

`go get` 包的路径就是下载 地方的依赖。
将第三方依赖默认保存在： `$GOPATH/src/` 下面。

### 使用

# Redis
KV数据库

`Redis` 用处：
+ `cache` 缓存
+ 简单队列
+ 排行榜



# NSQ
Go 语言开发的轻量级的消息队列。

# 包的依赖管理 go moudle
Go1.11 之后引入的三方包管理工具。

## goproxy
设置代理，下载类库更快。
```Go
export GOPROXY=https://goproxy.cn		// mac

SET GOPROXY=https://goproxy.cn	// windows
```

## go.mod 文件
记录当前项目依赖的第三方包信息和版本信息。
第三方的依赖包都下载到 `$GOPATH/pkg/mod` 目录下。

## go.sum文件
详细报名和版本信息。

## 常用命令
```Go
go mod init	[包名]// 初始化信息
go mod tidy	// 检查包里面的依赖去更新 go.mod 文件中的依赖
go get 
go mod download	// 下载
```

# Context
非常重要。
如何优雅的控制子 goroutine 的退出？

## 两个默认值
```Go
context.Backgroud()
context.TODO()
```

## 四个方法
```Go
context.WithCancel(context.Backgroud())
context.WithDeadline(context.Backgroud(), time.time)
context.WithTimeout(context.Backgroud(), time.Duration)
context.WithValue(context.Backgroud(), key, value)
```

# 服务端 Agent 开发
`zookkeepr`、`kafka` 部署文档:

## `Kafka`
+ `Kafka` 集群的架构：
	+ `broker`
	+ `topic`
	+ `partition`: 分区，把同一个 `topic` 分成不同的分区，提高负载
		+ `leader`: 分区的主节点
		+ `follower`: 分区的从节点
	+ `Consumer Group`
+ 生产者向 Kafka 写入数据的流程

+ kafka 选择分区的模式
	+ 制定分区
	+ 指定key， ，kafka 根据key做hash决定写入哪个分区
	+ 轮询模式

+ 生产者向 kafka 发送数据的模式(3种)
	+ 0：把数据发送给leader就结束，效率高、安全性底
	+ 1：把数据发送给leader，等待leader返回ACK
	+ all：把数据发送给leader，确保follower从leader拉取数据回复ACK给leader，leader在回复ACK，安全性最高。

+ 为什么kafka 快？

logAgent的工作流程：
+ 读取日志 `tailf` 三方库
+ 向kafka中写日志 `sarama` 写日志库




## Kafaka 和 zookeeper 

## tail 介绍
kafka 终端读取数据：
```Bash
./bin/kafka-console-consumer.sh --bootstrop-server=127.0.0.1:9092 --topic=web_log
```

熟练使用：`gopkg.in/ini.v1`

## 日志收集项目
### 为什么要自己写不用 `ELK` ？
`ELK`: 部署的时候麻烦，每一个 `filebeat` 都需要配置一个配置文件。
使用 `etcd` 来管理被收集的日志。

## `etcd`
### 使用 `etcd` 优化日志收集项目。
启动 etcd ：
```Bash
# 启动 zookeeper
./bin/zookeeper-server-start.sh config/zookeeper.properties
# 启动 kafka
./bin/kafka-server-start.sh config/server.properties
# 启动 etcd
./etcd
```

### `Raft` 协议 
+ 选举
+ 日志复制机制
+ 异常处理
+ `zookeeper` 的 `zad` 协议的区别

# 类库学习介绍
+ `gin`: 网络请求框架
+ `multitemplate`: 加载本地自定义模板 `https://github.com/gin-contrib/multitemplate`