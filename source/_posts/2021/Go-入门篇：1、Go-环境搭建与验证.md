---
title: Go 入门篇：1、Go 环境搭建与验证
description: Go 入门篇：1、Go 环境搭建与验证
permalink: Go 入门篇：1、Go 环境搭建与验证
copyright: true
date: 2021-12-13 16:49:22
keywords: linux,mysql,Linux,ubuntu,go,Go
tags:
    - [环境搭建与验证]
categories:
    - [Go 入门篇]
---

# Go 开发环境配置
[官方二进制发行版](https://github.com/golang/go) 可支持FreeBSD、Linux、Mac OS X和Windows操作系统以及32位（386）和64位（amd64）的 x86 处理器架构。

## Linux、Mac OS X 和 FreeBSD 的安装包

+ [下载此压缩包](https://go-zh.org/doc/install)并提取到 `/usr/local` 目录，在 `/usr/local/go` 中创建 `Go目录树`。例如：

```Bash
tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```

该压缩包的名称可能不同，这取决于你安装的Go版本和你的操作系统以及处理器架构。
> （此命令必须作为root或通过 sudo 运行。）

+ 要将 `/usr/local/go/bin` 添加到 `PATH` 环境变量， 你需要将此行添加到你的 `/etc/profile`（全系统安装）或 `$HOME/.profile` 文件中：

```Bash
export PATH=$PATH:/usr/local/go/bin
```

## 安装到指定位置
`Go` 二进制发行版假定它们会被安装到 `/usr/local/go` （或Windows下的 `c:\Go`）中，但也可将`Go`工具安装到不同的位置。 此时你必须设置 `GOROOT` 环境变量来指出它所安装的位置。

<!--more-->

例如，若你将`Go`安装到你的`home`目录下，你应当将以下命令添加到 `$HOME/.profile` 文件中：

```Bash
export GOROOT=$HOME/go
export PATH=$PATH:$GOROOT/bin
```
> 注：GOROOT 仅在安装到指定位置时才需要设置。

## Mac OS X安装包
打开此包文件 并跟随提示来安装 `Go` 工具。该包会将Go发行版安装到 `/usr/local/go` 中。

此包应该会将 `/usr/local/go/bin` 目录放到你的 `PATH` 环境变量中。 要使此更改生效，你需要重启所有打开的终端回话。

## Windows
对于`Windows`用户，`Go`项目提供两种安装选项（从源码安装除外）： `zip`压缩包需要你设置一些环境变量，而实验性`MSI`安装程序则会自动配置你的安装。

# 测试安装环境
通过构建一个简单的程序来检查Go的安装是否正确，具体操作如下：

首先创建一个名为 `hello.go` 的文件，并将以下代码保存在其中：

```Go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

接着通过 `go `工具运行它：

```Bash
$ go run hello.go
hello, world
```

若你看到了 `“hello, world”` 信息，那么你的`Go`已被正确安装。

# 卸载 Go
要从你的系统中移除既有的`Go`安装，需删除 `go 目录`。 在 `Linux`、`Mac OS X`、和 `FreeBSD` 系统下通常为 `/usr/local/go`， 在 `Windows` 下则为 `c:\Go`。

你也应当从你的 `PATH` 环境变量中移除 `Go` 的 `bin` 目录。 在 `Linux` 和 `FreeBSD` 下你应当编辑 `/etc/profile` 或 `$HOME/.profile`。 若你是通过 `Mac OS X` 包安装的 `Go`，那么你应当移除 `/etc/paths.d/go` 文件。

# 如何使用Go编程(小试牛刀)

## 代码的组织

### 工作空间
go 工具为公共代码仓库中维护的开源代码而设计。 无论你会不会公布代码，该模型设置工作环境的方法都是相同的。

Go代码必须放在工作空间内。它其实就是一个目录，其中包含三个子目录：

+ src 目录包含Go的源文件，它们被组织成包（每个目录都对应一个包），
+ pkg 目录包含包对象，
+ bin 目录包含可执行命令。

go 工具用于构建源码包，并将其生成的二进制文件安装到 `pkg` 和 `bin` 目录中。

`src` 子目录通常包会含多种版本控制的代码仓库（例如`Git`或`Mercurial`）， 以此来跟踪一个或多个源码包的开发。

以下例子展现了实践中工作空间的概念：

```Bash
bin/
	streak                         # 可执行命令
	todo                           # 可执行命令
pkg/
	linux_amd64/
		code.google.com/p/goauth2/
			oauth.a                # 包对象
		github.com/nf/todo/
			task.a                 # 包对象
src/
	code.google.com/p/goauth2/
		.hg/                       # mercurial 代码库元数据
		oauth/
			oauth.go               # 包源码
			oauth_test.go          # 测试源码
	github.com/nf/
		streak/
		.git/                      # git 代码库元数据
			oauth.go               # 命令源码
			streak.go              # 命令源码
		todo/
		.git/                      # git 代码库元数据
			task/
				task.go            # 包源码
			todo.go                # 命令源码
```

此工作空间包含三个代码库（goauth2、streak 和 todo），两个命令（streak 和 todo） 以及两个库（oauth 和 task）。
命令和库从不同的源码包编译而来。

### GOPATH 环境变量
`GOPATH` 环境变量指定了你的工作空间位置。它或许是你在开发`Go`代码时， 唯一需要设置的环境变量。

首先创建一个工作空间目录，并设置相应的 `GOPATH`。你的工作空间可以放在任何地方， 在此文档中我们使用 `$HOME/work`。注意，它绝对不能和你的`Go`安装目录相同。 （另一种常见的设置是 `GOPATH=$HOME`。）
```Bash
$ mkdir $HOME/work
$ export GOPATH=$HOME/work
```

作为约定，请将此工作空间的 `bin` 子目录添加到你的 `PATH` 中：
```Bash
$ export PATH=$PATH:$GOPATH/bin
```
> To learn more about setting up the GOPATH environment variable, please see [go help gopath](https://go-zh.org/cmd/go/#hdr-GOPATH_environment_variable).

### 包路径
标准库中的包有给定的短路径，比如 `"fmt"` 和 `"net/http"`。 对于你自己的包，你必须选择一个基本路径，来保证它不会与将来添加到标准库， 或其它扩展库中的包相冲突。
如果你将你的代码放到了某处的源码库，那就应当使用该源码库的根目录作为你的基本路径。 例如，若你在 `GitHub` 上有账户 `github.com/user` 那么它就应该是你的基本路径。
注意，在你能构建这些代码之前，无需将其公布到远程代码库上。只是若你某天会发布它， 这会是个好习惯。在实践中，你可以选择任何路径名，只要它对于标准库和更大的`Go`生态系统来说， 是唯一的就行。
我们将使用 `github.com/user` 作为基本路径。在你的工作空间里创建一个目录， 我们将源码存放到其中：

```Bash
$ mkdir -p $GOPATH/src/github.com/user
```

### 你的第一个程序
要编译并运行简单的程序，首先要选择包路径（我们在这里使用  `github.com/user/hello`），并在你的工作空间内创建相应的包目录：

```Bash
$ mkdir $GOPATH/src/github.com/user/hello
```

接着，在该目录中创建名为 `hello.go` 的文件，其内容为以下Go代码：

```Go
package main

import "fmt"

func main() {
	fmt.Printf("Hello, world.\n")
}
```
现在你可以用 `go` 工具构建并安装此程序了：
```Bash
$ go install github.com/user/hello
```

设置 `go mod`:
```Bash
go mod init github.com/user/hello
```

注意，你可以在系统的任何地方运行此命令。`go` 工具会根据 `GOPATH` 指定的工作空间，在 `github.com/user/hello` 包内查找源码。

若在从包目录中运行 `go install`，也可以省略包路径：

```Bash
$ cd $GOPATH/src/github.com/user/hello
$ go install
```
此命令会构建 `hello` 命令，产生一个可执行的二进制文件。 接着它会将该二进制文件作为 `hello`（在 Windows 下则为 hello.exe）安装到工作空间的 bin 目录中。 在我们的例子中为 `$GOPATH/bin/hello`，具体一点就是 `$HOME/go/bin/hello`。

go 工具只有在发生错误时才会打印输出，因此若这些命令没有产生输出， 就表明执行成功了。

现在，你可以在命令行下输入它的完整路径来运行它了：

```Bash
$ $GOPATH/bin/hello
Hello, world.
```

若你已经将 `$GOPATH/bin` 添加到 `PATH` 中了，只需输入该二进制文件名即可：

```Bash
$ hello
Hello, world.
```

若你使用源码控制系统，那现在就该初始化仓库，添加文件并提交你的第一次更改了。 再次强调，这一步是可选的：你无需使用源码控制来编写Go代码。

```Bash
$ cd $GOPATH/src/github.com/user/hello
$ git init
Initialized empty Git repository in /home/user/work/src/github.com/user/hello/.git/
$ git add hello.go
$ git commit -m "initial commit"
[master (root-commit) 0b4507d] initial commit
 1 file changed, 1 insertion(+)
  create mode 100644 hello.go
```

将代码推送到远程仓库就留作读者的练习了。

### 你的第一个库
让我们编写一个库，并让 `hello` 程序来使用它。

同样，第一步还是选择包路径（我们将使用 `github.com/user/stringutil`） 并创建包目录：

```Bash
$ mkdir $GOPATH/src/github.com/user/stringutil
```

接着，在该目录中创建名为 `reverse.go` 的文件，内容如下：

```Go
// stringutil 包含有用于处理字符串的工具函数。
package stringutil

// Reverse 将其实参字符串以符文为单位左右反转。
func Reverse(s string) string {
	r := []rune(s)
	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}
```


设置 `go mod`:
```Bash
go mod init github.com/user/stringutil
```

现在用 `go build` 命令来测试该包的编译：

```Bash
$ go build github.com/user/stringutil
```

当然，若你在该包的源码目录中，只需执行：
```Bash
$ go build
```

即可。这不会产生输出文件。想要输出的话，必须使用 `go install` 命令，它会将包的对象放到工作空间的 `pkg` 目录中。

确认 `stringutil` 包构建完毕后，修改原来的 `hello.go` 文件（它位于 `$GOPATH/src/github.com/user/hello` ）去使用它：

```Go
package main

import (
	"fmt"

	"github.com/user/stringutil"
)

func main() {
	fmt.Printf(stringutil.Reverse("!oG ,olleH"))
}
```

无论是安装包还是二进制文件，`go` 工具都会安装它所依赖的任何东西。 因此当我们通过

```Bash
$ go install github.com/user/hello
```

来安装 `hello` 程序时，`stringutil` 包也会被自动安装。

运行此程序的新版本，你应该能看到一条新的，反向的信息：

```Bash
$ hello
Hello, Go!
```

做完上面这些步骤后，你的工作空间应该是这样的：

```Bash
bin/
	hello                 # 可执行命令
pkg/
	linux_amd64/          # 这里会反映出你的操作系统和架构
		github.com/user/
			stringutil.a  # 包对象
src/
	github.com/user/
		hello/
			hello.go      # 命令源码
		stringutil/
			reverse.go       # 包源码
```
注意 `go install` 会将 `stringutil.a` 对象放到 `pkg/linux_amd64` 目录中，它会反映出其源码目录。 这就是在此之后调用 go 工具，能找到包对象并避免不必要的重新编译的原因。 linux_amd64 这部分能帮助跨平台编译，并反映出你的操作系统和架构。

`Go` 的可执行命令是静态链接的；在运行 `Go` 程序时，包对象无需存在。

### 包名
`Go` 源文件中的第一个语句必须是
```Bash
package 名称
```

这里的 名称 即为导入该包时使用的默认名称。 （一个包中的所有文件都必须使用相同的名称。）
`Go` 的约定是包名为导入路径的最后一个元素：作为 `“crypto/rot13”` 导入的包应命名为 `rot13` 。

可执行命令必须使用 `package main`。
***链接成单个二进制文件的所有包，其包名无需是唯一的，只有导入路径（它们的完整文件名）才是唯一的。***
共多关于 `Go` 的命名约定见 [实效 `Go` 编程](https://go-zh.org/doc/effective_go.html#%E5%90%8D%E7%A7%B0)。

### 测试
`Go` 拥有一个轻量级的测试框架，它由 `go test` 命令和 `testing` 包构成。

你可以通过创建一个名字以 `xxx_test.go` 结尾的，包含名为 `TestXXX` 且签名为 `func (t *testing.T)` 函数的文件来编写测试。 测试框架会运行每一个这样的函数；若该函数调用了像 `t.Error` 或 `t.Fail` 这样表示失败的函数，此测试即表示失败。

我们可通过创建文件 `$GOPATH/src/github.com/user/stringutil/reverse_test.go` 来为 `stringutil` 添加测试，其内容如下：

```Go
package stringutil

import "testing"

func TestReverse(t *testing.T) {
	cases := []struct {
		in, want string
	}{
		{"Hello, world", "dlrow ,olleH"},
		{"Hello, 世界", "界世 ,olleH"},
		{"", ""},
	}
	for _, c := range cases {
		got := Reverse(c.in)
		if got != c.want {
			t.Errorf("Reverse(%q) == %q, want %q", c.in, got, c.want)
		}
	}
}
```

接着使用 `go test` 运行该测试：
```Bash
$ go test github.com/user/stringutil
ok  	github.com/user/stringutil 0.165s
```

同样，若你在包目录下运行 `go` 工具，也可以忽略包路径
```Bash
$ go test
ok  	github.com/user/stringutil 0.165s
```

### 远程包
像 `Git` 或 `Mercurial` 这样的版本控制系统，可根据导入路径的描述来获取包源代码。`go` 工具可通过此特性来从远程代码库自动获取包。例如，本文档中描述的例子也可存放到 `Google Code` 上的 `Mercurial` 仓库 `code.google.com/p/go.example` 中，若你在包的导入路径中包含了代码仓库的 `URL` ，`go get` 就会自动地获取、 构建并安装它：
```Bash
$ go get github.com/golang/example/hello
$ $GOPATH/bin/hello
Hello, Go examples!
```
若指定的包不在工作空间中，`go get` 就会将会将它放到 `GOPATH` 指定的第一个工作空间内。（若该包已存在，`go get` 就会跳过远程获取， 其行为与 `go install` 相同）
在执行完上面的 `go get` 命令后，工作空间的目录树看起来应该是这样的：

```
bin/
	hello                 # 可执行命令
pkg/
	linux_amd64/
		code.google.com/p/go.example/
			stringutil.a     # 包对象
		github.com/user/
			stringutil.a     # 包对象
src/
	code.google.com/p/go.example/
		hello/
			hello.go      # 命令源码
		stringutil/
			reverse.go       # 包源码
			reverse_test.go  # 测试源码
	github.com/user/
		hello/
			hello.go      # 命令源码
		stringutil/
			reverse.go       # 包源码
			reverse_test.go  # 测试源码
```

`hello` 命令及其依赖的 `stringutil` 包都托管在 `Google Code` 上的同一代码库中。`hello.go` 文件使用了同样的导入路径约定， 因此 `go get` 命令也能够定位并安装其依赖包。

```Go
import "github.com/golang/example/stringutil"
```

遵循此约定可让他人以最简单的方式使用你的Go包。 

### 接下来做什么

关于如何编写清晰、地道的 `Go` 代码的技巧，见 [实效Go编程](https://go-zh.org/doc/effective_go.html)。

要学习`Go`语言，请跟随 [Go语言之旅](https://go-zh.org/doc/code.html)。

关于Go语言的深入性文章及其库和工具，见[文档页面](https://go-zh.org/doc/#articles)。

# 如何使用 go module 导入本地包

导入本地包方式：

因为这两个包可在也可不在同一个项目路径下，如果不在同一级目录，你想要导入本地包，并且这些包也没有发布到远程的 `github` 或其他代码仓库地址。这个时候我们就需要在 `go.mod` 文件中使用 `replace` 指令。
在调用方也就是 `stringutil/go.mod` 中按如下方式指定使用相对路径来寻找 `stringutil` 这个包。

`stringutil/go.mod`内容如下：

```Go
module github.com/stringutil

go 1.15

require "github.com/stringutil" v0.0.0
replace "github.com/stringutil" => "../stringutil"
```