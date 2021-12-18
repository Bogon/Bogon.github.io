---
title: 'Advanced Swift系列(十三): Interoperability'
description: 'Advanced Swift系列(十三): Interoperability'
permalink: 'Advanced Swift系列(十三): Interoperability'
copyright: ture
keywords: >-
  iOS,Swift,Advanced Swift,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Protocols,Error Handling,Encoding and Decoding,Interoperability
tags:
  - - iOS
  - - Swift
  - - Advanced Swift
  - - Interoperability
  - - Swift 5.0
categories:
  - - iOS
  - - Swift
  - - Advanced Swift
abbrlink: 44058
date: 2020-05-09 11:43:59
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Swift的优势之一是与 C 和 Objective-C 互操作时的低摩擦**。  ` Swift ` 可以自动将 ` Objective-C 类型 ` 桥接到本机 ` Swift 类型 ` ，甚至可以与许多 ` C 类型桥接 ` 。 这使我们可以使用现有的库，并在顶部提供一个不错的界面。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本章中，我们将围绕 ` CommonMarker ` 的 ` C 参考 ` 实现创建一个包装器。  ` CommonMark ` 是 ` Markdown ` 的正式规范， ` Markdown ` 是用于格式化纯文本的流行语法。 如果你曾经在GitHub或Stack Overflow上撰写过文章，则可能使用过 ` Markdown ` 。 在这个实际示例之后，我们将看一下标准库提供的用于处理内存的工具，并了解如何将它们与C代码进行交互。

<!-- more -->

# **Wrapping a C Library**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Swift调用C代码的能力**使我们能够利用现有C库的丰富功能。  ` C API ` 通常很笨拙，内存管理也很棘手，但是在 ` Swift ` 中围绕现有库接口编写包装器通常要容易得多，并且比从头开始构建东西要少。 同时，与完全本机解决方案相比，我们的包装程序的用户在类型安全性或易用性方面将看不到任何区别。 我们需要启动的只是动态库及其C头文件。

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的示例 ` CommonMark C库 ` 是对 ` CommonMark ` 规范的参考实现，该规范已经过快速且经过良好测试。 为了使 ` Swift ` 可以访问 ` CommonMark ` ，我们将采用分层方法。 首先，我们将围绕库公开的不透明类型创建一个非常薄的 ` Swift类 ` 。 然后，我们将用Swift枚举包装此类，以提供一个更加惯用的 ` API ` 。

## ***包管理器设置***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置一个 ` Swift Package Manager ` 项目来导入 ` C库 ` 并不像以前那样复杂，但是它仍然涉及一些步骤。 以下是所需内容的简要说明。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一步是安装[***```cmark库```***](https://github.com/commonmark/cmark "")。 我们使用[***```Homebrew```***](https://brew.sh/ "")作为macOS上的软件包管理器来执行此操作。 打开终端并键入以下命令以安装库：

``` Bash
$ brew install cmark
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你正在运行其他操作系统，请尝试通过系统的程序包管理器安装cmark。 在撰写本文时， ` cmark 0.29.0 ` 是最新版本。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，让我们建立一个新的 ` SwiftPM项目 ` 。 转到存储代码的目录。 然后输入以下命令为项目创建一个子目录并为可执行文件创建一个 ` SwiftPM ` 软件包：

``` Bash
$ mkdir CommonMarkExample
$ cd CommonMarkExample
$ swift package init --type executable
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时，你可以键入 ` swift run ` 来检查一切是否正常。 程序包管理器应构建并运行程序，并显示 ` “ Hello，world！” ` 。 到控制台。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们需要一种方法来告诉 ` Swift ` 关于 ` cmark C库 ` 的信息，以便我们可以从 ` Swift ` 中调用它。 在C语言中，我们 ` #include ` 一个或多个库的头文件，以使它们的声明对我们的代码可见。  ` Swift ` 无法直接处理C头文件； 它期望依赖关系是模块。 为了使 ` Swift编译器 ` 可以看到 ` C或Objective-C库 ` ，该库必须提供 ` Clang模块格式 ` 的模块映射。 其中，模块映射列出了组成模块的头文件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ` cmark ` 没有模块映射，因此我们的下一个任务是为 ` cmark库 ` 创建一个 ` SwiftPM目标 ` 并编写模块映射。 该目标将不包含任何代码； 它的唯一目的是充当 ` cmark库 ` 的模块包装器。
打开 ` Package.swift ` 并对其进行编辑，如下所示：

``` Swift
// swift-tools-version:5.0
import PackageDescription

let package = Package( name: "CommonMarkExample", dependencies: [],
    targets: [
        .target( name: "CommonMarkExample", dependencies: ["Ccmark"]),
        .systemLibrary( name: "Ccmark", pkgConfig: "libcmark", 
            providers: [
                .brew(["cmark"]),
                .apt(["cmark"]), ]
        ),
    ]
)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（为使清单简短，我们删除了注释，默认情况下 ` SwiftPM ` 创建了测试目标；你当然可以保留它们。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将 ` cmark ` 的系统库目标添加到了程序包清单中。在 ` SwiftPM术语 ` 中，系统库是由系统范围的软件包管理器（例如 ` Homebrew ` 或 ` Linux ` 上的 ` APT ` ）安装的库。系统库目标是引用此类库的任何 ` SwiftPM ` 目标。按照惯例，像这样的纯包装模块的名称应以 ` C ` 为前缀，这就是为什么我们将目标命名为 ` Ccmark ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` pkgConfig参数 ` 指定配置文件的名称，程序包管理器可在该文件中找到导入库的标头和库搜索路径。  ` provider ` 指令是可选的。这是安装提示，包管理器可以在未安装目标库时显示。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，我们还必须在包清单中包括 ` “Ccmark” ` 目标作为我们主要可执行目标的依赖项。行依赖项： ` [“Ccmark”] ` 负责这一点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，为系统库目标的源创建一个目录；这是模块映射所在的位置：

``` Bash
$ mkdir Sources/Ccmark
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编写模块映射之前，在新版本中创建一个名为 ` shim.h ` 的 ` C头文件 ` 目录。 它应仅包含以下行：

``` C
#include <cmark.h>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后， ` module.modulemap文件 ` 应如下所示：

``` Swift
module Ccmark [system] { 
    header "shim.h"
    link "cmark"
    export *
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;填充程序头可解决以下限制：模块映射必须包含绝对路径。 另外，你可以省略填充程序，而直接在模块映射中指定 ` cmark ` 头，如头 ` “/usr/local/include/cmark.h” ` 。 但是随后 ` cmark.h ` 的路径将被硬编码到模块映射中。 使用填充程序，程序包管理器从 ` pkg-config ` 文件读取正确的头搜索路径，并将其添加到编译器调用中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，你应该能够导入 ` Ccmark ` 并调用任何 ` cmark API ` 。 将以下代码段添加到 ` main.swift ` 中，以快速检查是否一切正常：

``` Swift
import Ccmark
let markdown = "*Hello World*"
let cString = cmark_markdown_to_html(markdown, markdown.utf8.count, 0)! defer { free(cString) }
let html = String(cString: cString)
print(html)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回终端，运行程序：

``` Bash
$ swift run
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你看到 ` <p> <em> Hello World </em> </p> ` 作为输出，则你刚刚从 ` Swift ` 成功调用了C函数！ 现在我们已经可以正常安装了，我们可以开始编写 ` Swift包装器 ` 了。 （如果你想使用Xcode来编辑和运行代码，则可以使用命令swift包 ` generate-xcodeproj ` 告诉 ` SwiftPM ` 为该包创建一个Xcode项目。）

## ***包装CommonMark库***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们从包装一个具有更好界面的函数开始。  ` cmark_markdown_to_html ` 函数接受 ` Markdown格式 ` 的文本，并以字符串形式返回结果 ` HTML代码 ` 。 C接口如下所示：

``` Swift
/// Convert 'text' (assumed to be a UTF-8 encoded string with length
/// 'len') from CommonMark Markdown to HTML, returning a null-terminated, 
/// UTF-8-encoded string. It is the caller's responsibility
/// to free the returned buffer.
char *cmark_markdown_to_html(const char *text, size_t len, int options);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当 ` Swift ` 导入此声明时，它将在第一个参数中将 ` C字符串 ` 作为 ` UnsafePointer ` 呈现给多个Int8值。 从文档中，我们知道它们应该是 ` UTF-8代码单元 ` 。  ` len参数 ` 采用字符串的长度：

``` Swift
// The function's interface in Swift.
func cmark_markdown_to_html
(_ text: UnsafePointer<Int8>!, _ len: Int, _ options: Int32) -> UnsafeMutablePointer<Int8>!
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，我们希望包装函数可以使用 ` Swift字符串 ` ，因此你可能认为我们需要先将 ` Swift字符串 ` 转换为 ` Int8指针 ` ，然后再将其传递给 ` cmark_markdown_to_html ` 。 但是，在本机字符串和 ` C字符串 ` 之间进行桥接是一种常见的操作，因此 ` Swift ` 会自动执行此操作。 我们一定要小心使用 ` len参数 ` ，因为该函数期望以 ` UTF-8编码的字符串的长度 ` （以字节为单位），而不是字符数。 我们从字符串的 ` utf8视图 ` 中获得了正确的值，我们可以为这些选项传入零：

``` Swift
func markdownToHTML(input: String) -> String {
    let outString = cmark_markdown_to_html(input, input.utf8.count, 0)! 
    defer { free(outString) }
    return String(cString: outString)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意，我们强制解开函数返回的字符串指针。 我们可以放心地这样做，因为我们知道 ` cmark_markdown_to_html ` 总是返回有效的字符串。 通过在方法内部强制展开，库用户可以调用 ` markdownToHTML ` 方法，而不必担心可选项-结果永远不会为零。 这是编译器无法为我们自动完成的工作-没有可空注释的 ` C和Objective-C指针 ` 始终作为隐式解包的可选内容导入 ` Swift ` 中。

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本机 ` Swift字符串 ` 到 ` C字符串 ` 的自动桥接假设你要调用的 ` C函数 ` 期望该字符串采用 ` UTF-8编码 ` 。 在大多数情况下，这是正确的选择，但是如果 ` C API ` 假定使用不同的编码，则你将无法使用自动桥接。 但是，构造其他格式通常很容易。 例如，如果 ` C API ` 需要一个 ` UTF-16代码点 ` 数组，则可以使用 ` Array（string.utf16） ` 。 如果元素类型匹配， ` Swift编译器 ` 将自动将 ` Swift数组 ` 桥接到预期的 ` C数组 ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还要注意，我们在 ` markdownToHTML内部 ` 调用 ` free ` 释放了分配给输出字符串的内存 ` cmark_markdown_to_html ` 。 与 ` C API ` 进行交互时，我们有责任遵守 ` C库 ` 的内存管理规则- ` Swift编译器 ` 无法为此提供帮助。

## ***包装cmark_node类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了直接的 ` HTML输出 ` 之外， ` cmark库 ` 还提供了一种将 ` Markdown文本解析 ` 为**结构化的元素树的方法**。例如，可以将一个简单的文本转换为块级节点的列表，如段落，引号，列表，代码块，标头等。有些块级元素包含其他块级元素（例如，引号可以包含多个段落），而另一些块级元素仅包含内联元素（例如，标头可以包含强调的部分）。任何元素都不能包含两者（例如，列表项的内联元素始终包装在段落元素中）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` C库 ` 使用单个数据类型c ` mark_node ` 来表示任何节点。它是不透明的，意味着该库的作者选择隐藏其定义。我们在头文件中看到的只是对 ` cmark_node ` 进行操作或返回其指针的函数。  ` Swift ` 将这些指针导入为 ` OpaquePointers ` 。 （我们将在本章后面的内容中仔细研究标准库中许多指针类型之间的区别，例如 ` OpaquePointer ` 和 ` UnsafeMutablePointer ` 。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们以原生 ` Swift类型 ` 包装一个节点，以使其更易于使用。正如在[***```“结构和类”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%BA%94):%20Structs%20and%20Classes/ "")一章中看到的那样，每当创建自定义类型时，我们都需要考虑存储语义：该类型是值，还是实例具有身份有意义？在前一种情况下，我们应该支持结构或枚举，而后者则需要一个类。我们的案例很有趣：一方面， ` Markdown文档 ` 的节点是一个值-具有相同元素类型和内容的两个节点应该是无法区分的，因此它们不应具有标识。另一方面，由于我们不了解 ` cmark_node ` 的内部信息，因此没有简单的方法来制作节点的副本，因此我们不能保证值的语义。因此，我们从一个类开始。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;稍后，我们将在此类的顶部编写另一层，以提供具有 ` 值语义的接口 ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当没有引用保留给此类的实例时，我们的类存储不透明指针并释放 ` cmark_node ` 在 ` deinit上 ` 使用的内存。我们 ` 仅在文档级别释放内存 ` ，因为否则我们可能会释放仍在使用的节点。释放文档还将自动递归释放所有子项。以这种方式包装不透明指针将为我们免费提供自动引用计数：

``` Swift
public class Node {
    let node: OpaquePointer
    init(node: OpaquePointer) { 
        self.node = node
    }

    deinit {
        guard type == CMARK_NODE_DOCUMENT else { return } 
        cmark_node_free(node)
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一步是包装 ` cmark_parse_document函数 ` ，该函数分析 ` Markdown文本 ` 并返回文档的根节点。 它采用与 ` cmark_markdown_to_html ` 相同的参数：字符串，其长度和描述解析选项的整数。  ` Swift ` 中 ` cmark_parse_document函数 ` 的返回类型是 ` OpaquePointer ` ，它表示 ` 节点 ` ：

``` Swift
func cmark_parse_document
(_ buffer: UnsafePointer<Int8>!, _ len: Int, _ options: Int32) -> OpaquePointer!
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将函数转换为类的初始化程序：

``` Swift
public init(markdown: String) {
    let node = cmark_parse_document(markdown, markdown.utf8.count, 0)! 
    self.node = node
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再一次，我们强制打开返回的指针，因为我们确定 ` cmark_parse_document ` 不会失败-任何输入字符串都是有效的 ` Markdown ` 。 像许多 ` C API ` ， ` cmark库 ` 没有可空性注释，也没有明确的文档说明哪些指针可以为 ` NULL ` 。 如果你对某个特定的指针是否可为空有疑问，最好通过研究 ` C库 ` 的源代码来验证你的假设。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上所述，有几个有趣的功能可在节点上运行。 例如，有一种返回节点的类型，例如段落或标题：

``` C
cmark_node_type cmark_node_get_type(cmark_node *node);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在Swift中，它看起来像这样：

``` Swift
func cmark_node_get_type(_ node: OpaquePointer!) -> cmark_node_type
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` cmark_node_type ` 是一个 ` C枚举 ` ，包含各种块级和内联的用例 ` Markdown ` 中定义的元素以及一种表示错误的情况：

``` Swift
typedef enum {
    // Error status 
    CMARK_NODE_NONE,
    // Block elements
    CMARK_NODE_DOCUMENT, 
    CMARK_NODE_BLOCK_QUOTE, 
    ...

    // Inline elements
    CMARK_NODE_TEXT, 
    CMARK_NODE_EMPH, 
    ...
} cmark_node_type;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Swift ` 将纯 ` C枚举 ` 作为包含单个 ` UInt32属性 ` 的结构导入。 另外，对于枚举中的每种情况，都会生成一个全局常量：

``` Swift
struct cmark_node_type : RawRepresentable, Equatable { 
    public init(_ rawValue: UInt32)
    public init(rawValue: UInt32)
    public var rawValue: UInt32
}

var CMARK_NODE_NONE: cmark_node_type { get }
var CMARK_NODE_DOCUMENT: cmark_node_type { get } 
...
```

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将 ` C枚举作为结构导入 ` ，因为 ` C ` 中的枚举实际上只是 ` 整数 ` 。  ` Swift ` 必须假定 ` C中的枚举 ` 变量具有任意整数值，这是本机 ` Swift枚举 ` 不旨在处理的。 仅将 ` Apple ` 在其 ` Objective-C框架 ` 中使用的标有 ` NS_ENUM宏 ` 的枚举作为本机 ` Swift枚举 ` 导入。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ` Swift ` 中，节点的类型应为 ` Node数据类型 ` 的属性，因此我们将 ` cmark_node_get_type函数 ` 转换为类的计算属性：

``` Swift
var type: cmark_node_type {
    return cmark_node_get_type(node)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们只需编写 ` node.type ` 即可获取元素的类型。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以访问更多的节点属性。 例如，如果节点是列表，则它可以具有以下两种列表类型之一：项目符号或有序。 所有其他节点的列表类型为 ` “无列表” ` 。 同样， ` Swift ` 将对应的 ` C枚举 ` 表示为结构，每种情况都有一个顶级变量，我们可以编写类似的 ` wrapper属性 ` 。 在这种情况下，我们还提供了一个 ` setter ` ，它将在本章的稍后部分派上用场：

``` Swift
var listType: cmark_list_type {
    get { return cmark_node_get_list_type(node) } 
    set { cmark_node_set_list_type(node, newValue) }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` cmark库 ` 为所有其他节点属性（例如标头级别，受防护的代码块信息以及链接URL和标题）提供了类似的功能。这些属性通常仅对特定类型的节点有意义，我们可以选择提供一个带有可选接口（例如，链接URL）或默认值（例如，默认标头级别为零）的接口。 ` 类型安全性的缺乏 ` 说明了库 ` C API ` 的一个主要弱点，我们可以在 ` Swift ` 中更好地建模。我们将在下面详细讨论。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一些节点也可以有孩子。为了对其进行迭代， ` CommonMark库 ` 提供了功能 ` cmark_node_first_child ` 和 ` cmark_node_next ` 。我们希望 ` Node类 ` 提供其子级数组。为了生成此数组，我们从第一个子项开始，并继续添加子项，直到 ` cmark_node_first_child ` 或 ` cmark_node_next ` 返回 ` nil ` ，从而表示列表的结尾。请注意，从 ` cmark_node_next ` 返回的 ` C空指针 ` 将自动转换为可选的：

``` Swift
var children: [Node] {
    var result: [Node] = []
    var child = cmark_node_first_child(node) 
    while let unwrapped = child {
        result.append(Node(node: unwrapped))
        child = cmark_node_next(child) 
    }
    return result 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还可以选择返回一个 ` 惰性序列 ` 而不是数组（例如，使用 ` sequence ` 或 ` AnySequence ` ）。但是，这种想法有一个问题：节点结构可能会在创建和使用序列之间发生变化。在这种情况下，用于查找下一个节点的迭代器将返回错误的值，甚至崩溃。根据你的用例，返回延迟构造的序列可能正是你想要的，但是如果你的数据结构可以更改，则返回数组是一个更安全的选择。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用这个简单的节点包装器类，从 ` Swift ` 访问 ` CommonMark库 ` 生成的抽象语法树变得更加容易。不必调用诸如 ` cmark_node_get_list_type之类的函数 ` ，我们只需编写 ` node.listType ` 即可获得 ` 自动补全 ` 和 ` 类型安全性 ` 。但是，我们还没有完成。即使 ` Node类 ` 比 ` C函数 ` 更原生， ` Swift ` 允许我们使用带有关联值的枚举以更自然，更安全的方式来表示节点。

## ***Safer Interface***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上所述，有许多节点属性仅适用于某些上下文。 例如，访问列表的 ` headerLevel ` 或代码块的 ` listType ` 没有任何意义。 正如在[***```“枚举”```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E5%85%AD):%20%20Enums/ "")一章中看到的那样，带有关联值的枚举使我们只能指定对每种特定情况有意义的元数据。 我们将为所有可能的内联元素创建一个枚举，并为块级项目创建另一个。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这两个枚举将成为我们库的公共接口，从而将 ` Node类 ` 转换为内部实现细节。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，我们可以强制执行 ` CommonMark文档 ` 的结构。 例如，纯文本元素仅存储一个 ` String ` ，而强调节点包含其他内联元素的数组，但不得包含任何块级子元素。 这是内联元素的枚举：

``` Swift
public enum Inline { 
    case text(text: String) 
    case softBreak
    case lineBreak
    case code(text: String)
    case html(text: String)
    case emphasis(children: [Inline])
    case strong(children: [Inline])
    case custom(literal: String)
    case link(children: [Inline], title: String?, url: String?) 
    case image(children: [Inline], title: String?, url: String?)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于块级项目，对于它们可以包含哪些其他项目也有特定的规则。 段落和标题只能包含内联元素，而块引号始终包含其他块级元素。 我们的块类型对以下约束进行建模：

``` Swift
public enum Block {
    case list(items: [[Block]], type: ListType)
    case blockQuote(items: [Block])
    case codeBlock(text: String, language: String?) 
    case html(text: String)
    case paragraph(text: [Inline])
    case heading(text: [Inline], level: Int)
    case custom(literal: String)
    case thematicBreak
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，列表定义为列表项的数组，其中每个列表项均由 ` Block元素 ` 的数组表示。  ` ListType ` 是一个简单的枚举，它声明列表是有序的还是无序的：

``` Swift
public enum ListType {
    case unordered
    case ordered 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ` 枚举是值类型 ` ，因此该设计还允许我们通过将节点转换为它们的枚举表示形式来将它们视为值。回想一下，用不透明节点指针周围的类包装器是不可能的。我们通过使用初始化程序进行类型转换来遵循 ` API ` 设计指南。我们编写了两对初始化器：一对从 ` Node类 ` 创建 ` Block ` 和 ` Inline值 ` ，另一对从这些枚举重建 ` Node ` 。这使我们能够编写函数来创建或操纵 ` Inline ` 或 ` Block值 ` ，然后在以后重建由 ` Node实例 ` 组成的 ` CommonMark文档 ` ，目的是使用 ` C库 ` 将文档呈现为 ` HTML ` 或 ` Markdown文本 ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，编写一个将 ` Node ` 转换为 ` Inline元素 ` 的初始化程序。我们打开节点的类型并构造相应的 ` Inline值 ` 。例如，对于文本节点，我们获取节点的字符串内容，可通过 ` cmark库 ` 中的 ` literal属性 ` 访问这些内容。我们可以安全地强制拆开文字，因为我们知道文本节点始终具有该值，而其他节点类型可能从文字中返回 ` nil ` 。例如，强调节点和强节点只有子节点，没有字面值。为了解析后者，我们在节点的子节点上进行映射，然后递归调用初始化程序。我们创建一个内联函数 ` inlineChildren ` 而不是复制该代码，仅在需要时才调用。为了简洁起见，我们省略了大多数其他情况。默认情况永远都不会发生，因此，如果发生这种情况，我们选择捕获该程序。这遵循以下约定：通常只应将预期的错误用于返回可选的或使用引发的错误，而不应表示程序员的错误：

``` Swift
extension Inline { 

    init(_ node: Node) {
        let inlineChildren = { 
            node.children.map(Inline.init) 
        } 

        switch node.type {
            case CMARK_NODE_TEXT:
                self = .text(text: node.literal!) 
            case CMARK_NODE_STRONG:
                self = .strong(children: inlineChildren()) 
            case CMARK_NODE_IMAGE:
                self = .image(children: inlineChildren(), title: node.title, url: node.urlString)
            // ... (more cases)
            default:
                fatalError("Unrecognized node: \(node.typeString)")
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;块级元素的转换遵循相同的模式。 请注意，取决于节点类型，块级元素可以将内联元素，列表项或其他块级元素作为子元素。 在 ` cmark_node语法树 ` 中，列表项被一个额外的节点包裹。 我们在 ` Node ` 的 ` listItem属性 ` 中删除该层，并直接返回一个块级元素数组：

``` Swift
extension Block { 
    init(_ node: Node) {
        let parseInlineChildren = { 
            node.children.map(Inline.init) 
        } 
        switch node.type {
            case CMARK_NODE_PARAGRAPH:
                self = .paragraph(text: parseInlineChildren()) 
            case CMARK_NODE_LIST:
                let type: ListType = node.listType == CMARK_BULLET_LIST ? .unordered : .ordered
                self = .list(items: node.children.map { $0.listItem }, type: type) 
            case CMARK_NODE_HEADING:
                self = .heading(text: parseInlineChildren(), level: node.headerLevel) // ... (more cases)
            default:
                fatalError("Unrecognized node: \(node.typeString)") 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，给定一个 ` 文档级Node ` ，我们可以将其转换为 ` Block元素 ` 数组：

``` Swift
extension Node {
    public var elements: [Block] {
        return children.map(Block.init) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Block元素是值 ` ：我们可以自由复制或更改它们，而不必担心引用。这对于操作节点非常强大。由于值从定义上讲并不关心它们的创建方式，因此我们也可以从头开始在代码中创建 ` Markdown语法树 ` ，而无需使用 ` CommonMark库 ` 。类型也更清晰。你不能无意间做一些没有意义的事情（例如访问列表标题），因为编译器不允许这样做。除了使你的代码更安全之外，这是一种非常强大的文档形式-仅查看类型，很显然 ` CommonMark文档 ` 的结构。与注释不同，编译器将确保这种形式的文档永远不会过时。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，编写可在我们的新数据类型上运行的函数非常容易。例如，如果我们想从 ` Markdown文档 ` 中为目录建立所有第一级和第二级标头的列表，我们可以遍历所有子级并检查它们是否为标头并具有正确的级别：

``` Swift
func tableOfContents(document: String) -> [Block] {
    let blocks = Node(markdown: document).children.map(Block.init) ?? [] 
    
    return blocks.filter {
        switch $0 {
            case .heading(_, let level) where level < 3:
                return true 
            default: 
                return false
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们进行更多此类操作之前，让我们解决逆向转换：将 ` “块” ` 转换回 ` “节点 ` ”。 我们需要进行这种转换，因为我们最终希望使用 ` CommonMark库 ` 从我们已构建或处理的 ` Markdown语法树 ` 中生成 ` HTML ` 或其他文本格式，并且该库只能处理 ` cmark_node_type ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的计划是在 ` Node ` 上添加两个初始化器：一个将 ` Inline值转换为节点 ` ，另一个用于 ` 处理Block元素 ` 。 我们首先使用新的初始化程序扩展 ` Node ` ，该初始化程序以指定的类型和子级从头开始创建新的 ` cmark_node ` 。 回想一下，我们编写了一个 ` deinit ` ，它释放树的根节点（并递归释放其所有子节点）。 此反初始化将确保最终释放我们在此处分配的节点：

``` Swift
extension Node {
    convenience init(type: cmark_node_type, children: [Node] = []) {
        self.init(node: cmark_node_new(type)) 
        for child in children {
            cmark_node_append_child(node, child.node) 
        }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们经常需要创建纯文本节点或具有多个子节点的节点，因此，我们添加三个便捷的初始化程序可以简化操作：

``` Swift
extension Node {

    convenience init(type: cmark_node_type, literal: String) {
        self.init(type: type)
        self.literal = literal
    }

    convenience init(type: cmark_node_type, blocks: [Block]) { 
        self.init(type: type, children: blocks.map(Node.init))
    }

    convenience init(type: cmark_node_type, elements: [Inline]) {
        self.init(type: type, children: elements.map(Node.init)) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们可以使用刚刚定义的便捷初始化程序来编写转换初始化程序。 我们打开输入并创建具有正确类型的节点。 这是内联元素的版本：

``` Swift
extension Node {
    convenience init(element: Inline) {
        switch element { 
            case .text(let text):
                self.init(type: CMARK_NODE_TEXT, literal: text) 
            case .emphasis(let children):
                self.init(type: CMARK_NODE_EMPH, elements: children) 
            case .html(let text):
                self.init(type: CMARK_NODE_HTML_INLINE, literal: text) 
            case .custom(let literal):
                self.init(type: CMARK_NODE_CUSTOM_INLINE, literal: literal) 
            case let .link(children, title, url):
                self.init(type: CMARK_NODE_LINK, elements: children) self.title = title
                self.urlString = url
            // ... (more cases)
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从块级元素创建节点非常相似。 唯一稍微复杂一点的情况是列表。 回想一下，在上述从 ` Node ` 到 ` Block ` 的转换中，我们删除了 ` CommonMark库 ` 用于表示列表的多余节点，因此我们需要将其添加回：

``` Swift
extension Node {
    convenience init(block: Block) {
        switch block {
            case .paragraph(let children):
                self.init(type: CMARK_NODE_PARAGRAPH, elements: children) 
            case let .list(items, type):
                let listItems = items.map { Node(type: CMARK_NODE_ITEM, blocks: $0) } self.init(type: CMARK_NODE_LIST, children: listItems)
                listType = type == .unordered ? CMARK_BULLET_LIST : CMARK_ORDERED_LIST 
            case .blockQuote(let items):
                self.init(type: CMARK_NODE_BLOCK_QUOTE, blocks: items) 
            case let .codeBlock(text, language):
                self.init(type: CMARK_NODE_CODE_BLOCK, literal: text)
                fenceInfo = language
            // ... (more cases)
        } 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，为了为用户提供一个不错的界面，我们定义了一个公共初始化程序，该初始化程序接收一组块级元素并生成一个文档节点，然后可以将其渲染为不同的输出格式之一：

``` Swift
extension Node {
    public convenience init(blocks: [Block]) {
        self.init(type: CMARK_NODE_DOCUMENT, blocks: blocks) 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们可以双向进行：我们可以加载文档，将其转换为 ` [Block]元素 ` ，修改这些元素，然后将它们变回 ` Node ` 。 这使我们能够编写从 ` Markdown提取信息 ` 甚至动态更改 ` Markdown ` 的程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过首先在 ` C库（Node类） ` 周围创建一个瘦包装器，我们从基础 ` C API ` 中抽象了转换。 这使我们可以专注于提供一种感觉像惯用的 ` Swift ` 的界面。 整个项目可在[***```GitHub```***](https://github.com/objcio/commonmark-swift/releases/tag/advanced-swift-version-4 "")上找到。

# **底层类型概述**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准库中有许多类型可以提供对 ` 内存的底层访问 ` 。它们的纯粹数量可能令人不知所措，令人生畏的名字也可能令人难以置信，例如 ` UnsafeMutableRawBufferPointer ` 。好消息是，它们的名称保持一致，因此可以从名称中推断出每种类型的目的。以下是最重要的命名部分：

+ → **托管类型** 具有自动内存管理。编译器将为你分配，初始化和释放内存。

+ → **unsafe类型** 避免了Swift的安全特性，例如边界检查或使用前初始化保证。它还不提供自动内存管理功能-你必须显式分配，初始化，取消初始化和取消分配内存。

+ → **缓冲区类型** 适用于多个（连续存储）的元素，而不是单个元素，并提供Collection接口。

+ → **指针类型** 具有指针语义（就像指针一样）。

+ → **原始类型** 包含未类型化的数据。相当于C中的void *。名称中不包含原始类型的类型具有类型化数据，并且在其元素类型上具有通用性。

+ → **可变类型** 允许对内存点进行更改。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要直接访问内存，而无需与 ` C交互 ` ，则可以使用 ` ManagedBuffer类 ` 分配内存。这类似于标准库在后台使用的集合类型来管理其内存。它由单个标头值（用于存储数据，例如元素数）和元素的连续内存组成。它还具有一个容量属性，该属性与实际元素的数量不同：例如，一个计数为17的数组可能拥有一个缓冲区容量为32，这意味着在 ` Array ` 必须分配更多内存之前，可以再添加15个元素。还有一个称为 ` ManagedBufferPointer的变体 ` ，但它在标准库之外没有很多应用程序，将来可能会被删除。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时你需要执行手动内存管理。例如，你可能希望将 ` Swift对象 ` 传递给 ` C函数 ` ，以期以后检索它。为了解决 ` C缺少闭包 ` 的问题，​​使用 ` 回调（函数指针）的C API ` 通常会带一个附加的上下文参数（通常是 ` 无类型的指针 ` ，即 ` void * ` ），然后将其传递给回调。当你从 ` Swift ` 调用这样的函数时，能够将本机 ` Swift对象作为上下文值传递 ` 会很方便，但是 ` C ` 无法直接处理 ` Swift对象 ` 。这是 ` Unmanaged类型 ` 的来源。它是类实例的包装，它提供了指向我们可以传递给 ` C ` 的自身的原始指针。由于非托管包装的对象位于 ` Swift ` 的内存管理系统之外，因此，我们必须注意平衡保留并手动释放呼叫。我们将在下一部分中查看一个示例。

## ***指针***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了我们已经看到的 ` OpaquePointerType ` 之外， ` Swift ` 还提供了八种指针类型，它们映射到不同的 ` C指针类 ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` 基本类型UnsafePointer ` 与 ` C ` 中的 ` const指针 ` 相似。它在指向的内存数据类型上具有通用性，因此 ` UnsafePointer<Int> ` 对应于 ` const int * ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意， ` C ` 区分 ` const int * ` （指向不可变数据的可变指针，即你不能使用此指针写入指向的数据）和 ` int * const ` （不可变指针，即你不能更改此指针指向的位置） ）。  ` Swift ` 中的 ` UnsafePointer ` 等同于以前的变体。与往常一样，你可以通过使用 ` var ` 或 ` let声明变量 ` 来控制指针本身的可变性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用初始化程序从其他一种指针类型创建一个 ` UnsafePointer ` 。  ` Swift ` 还支持一种特殊语法，用于调用带有不安全指针的函数。你可以通过使用与号作为前缀将正确类型的任何可变变量传递给此类函数，从而使其成为 ` in-out ` 表达式：

``` Swift
var x = 5
func fetch(p: UnsafePointer<Int>) -> Int {
    return p.pointee 
}

fetch(p: &x) // 5
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这看起来与我们在函数一章中介绍的 ` inout参数 ` 完全一样，并且它的工作方式类似-尽管在这种情况下，由于指针是不可更改的，因此不会通过此值将任何内容传递回调用方。  ` Swift ` 会在后台创建并传递给函数的指针仅在函数调用期间才有效。 不要尝试从函数返回指针并在函数返回后访问它-结果是不确定的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一个可变的变体，名为 ` UnsafeMutablePointer ` 。 该结构的工作方式类似于常规的非 ` const C指针 ` 。 你可以取消引用指针并更改内存的值，然后通过 ` in-out表达式 ` 将其传递回调用方：

``` Swift

func increment(p: UnsafeMutablePointer<Int>) { 
    p.pointee += 1
}
var y = 0 
increment(p: &y) y // 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当我们分配一个指向 ` NSRange的指针 ` 以从 ` Foundation API ` 返回值的目的时，我们在[***```字符串```***](https://www.xuebaonline.com/Advanced%20Swift%E7%B3%BB%E5%88%97(%E4%B8%83):%20Strings/ "")一章中看到了另一个示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除了使用 ` in-out表达式 ` 外，还可以使用 ` UnsafeMutablePointer直接分配内存 ` 。  ` Swift ` 中分配内存的规则类似于 ` C ` 中的规则：*分配内存后，首先需要对其进行初始化，然后才能使用它*。 完成使用指针后，你需要释放内存：

``` Swift
// Allocate and initialize memory for two Ints.
let z = UnsafeMutablePointer<Int>.allocate(capacity: 2) 
z.initialize(repeating: 42, count: 2)
z.pointee // 42
// Pointer arithmetic:
(z+1).pointee = 43
// Subscripts:
z[1] // 43
// Deallocate the memory.
z.deallocate()
// Don't access pointee after deallocate.
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果指针的 ` Pointee类型 ` （指向的数据类型）是需要内存管理的非平凡类型（例如，类或包含类的结构），则还必须在调用 ` deallocate ` 之前调用 ` deinitialize ` 。初始化和取消初始化方法执行使 ` ARC ` 起作用的引用计数操作。忘记调用取消初始化会 ` 导致内存泄漏 ` 。更糟糕的是，不使用初始化功能（例如，通过指针的下标为未初始化的内存分配值）会触发各种不确定的行为或崩溃。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ` C API ` 中，指向没有特定元素类型（ ` void * ` 或 ` const void * ` ）的字节序列的指针也很常见。  ` Swift ` 中对应的对应类型是 ` UnsafeMutableRawPointer ` 和 ` UnsafeRawPointer类型 ` 。使用 ` void * ` 的 ` C API `   ` const void * ` 被作为这些类型导入。除非你确实需要对原始字节进行操作，否则通常会直接将这些类型转换为 ` Unsafe[Mutable]Pointer ` 或其他类型的变体，例如 ` load(fromByteOffset：as :) ` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与 ` C ` 不同， ` Swift ` 使用可选参数来区分可为空和不可为空的指针。只有具有可选指针类型的值才能表示空指针。在幕后， ` UnsafePointer<T> ` 和 ` Optional<UnsafePointer<T >> ` 的内存布局完全相同。编译器足够聪明，可以将 ` .none ` 情况映射到 ` null指针 ` 的全零位模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时， ` C API ` 具有不透明的指针类型。例如，在 ` cmark库 ` 中，我们看到类型 ` cmark_node * ` 被导入为 ` OpaquePointer ` 。由于 ` cmark_node ` 的定义未显示在 ` C库 ` 的头文件中，因此 ` Swift编译器 ` 不知道该类型的内存布局，这就是为什么它无法让我们访问指针对象的内存。你可以使用初始化程序将不透明指针转换为其他指针。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ` Swift ` 中，我们通常使用 ` Array类型 ` 来连续存储值序列。在 ` C语言 ` 中，通常将数组作为指向第一个元素和元素计数的指针返回。如果要使用这样的序列作为集合，可以将序列转换为 ` Array ` ，但这会复制元素。这通常是一件好事（因为一旦将它们放入数组中，这些元素就由 ` Swift运行时 ` 管理）。但是，有时你不想复制每个元素。对于这些情况，有 ` Unsafe[Mutable]BufferPointer ` 类型。使用指向起始元素的指针和计数来初始化它们。从那时起，你将拥有一个（可变的）随机访问集合。缓冲区指针使使用 ` C集合 ` 更加容易。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` Array ` 带有 ` Unsafe[Mutable]BufferPointer方法 ` ，这些方法可通过缓冲区指针提供（可变）对数组存储缓冲区的访问。这些 ` API ` 允许你将元素批量复制到数组中或从数组中复制元素，或放弃边界检查，这可以提高循环性能。  ` Swift 5 ` 以 ` withContiguous[Mutable]StorageIfAvailable ` 的形式在通用上下文中提供了这些方法。请注意，使用其中一种方法，就可以避免 ` Swift集合 ` 执行的所有常规安全检查。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后， ` Unsafe[Mutable]RawBufferPointer类型 ` 使处理原始内存作为集合变得更加容易（它们提供了与 ` Foundation ` 中的 ` Data类型 ` 等效的底层功能）。


# **闭包作为C回调**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们来看一个使用指针的 ` C API ` 的具体示例。 我们的目标是为 ` C标准库 ` 中的 ` qsort排序功能 ` 编写一个 ` Swift ` 包装器。 在 ` Swift ` 的 ` Darwin模块 ` 中导入的类型（或者，如果你使用的是 ` Linux ` ，则为 ` Glibc ` ）如下所示：

``` Swift
public func qsort(
    _ __base: UnsafeMutableRawPointer!, // array to be sorted
    _ __nel: Int, // number of elements
    _ __width: Int, // size per element
    _ __compar: @escaping @convention(c) (UnsafeRawPointer?, UnsafeRawPointer?) // comparator function 
-> Int32)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手册页（ ` man qsort ` ）描述了如何使用 ` qsort函数 ` ：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` qsort() `  和 ` heapsort() `  函数对一组 ` nel对象 ` 进行排序，这些对象的初始成员由 ` base ` 指向。 每个对象的大小由宽度指定。\
\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数组基的内容根据 ` compar ` 所指向的比较函数以升序排序，该函数需要两个参数来指向要比较的对象。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个包装函数，该函数使用 ` qsort ` 对 ` Swift字符串 ` 数组进行排序：

``` Swift
func qsortStrings(array: inout [String]) {
    qsort(&array, array.count, MemoryLayout<String>.stride) { a, b in
        let l = a!.assumingMemoryBound(to: String.self).pointee 
        let r = b!.assumingMemoryBound(to: String.self).pointee
        if  r>l {return-1} else if r==l {return0} else { return 1 }
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看一下传递给 ` qsort ` 的每个参数：

+ → 第一个参数指向数组中第一个元素的指针，该元素应排序到位。将 ` Swift数组 ` 传递给采用 ` UnsafePointer ` 的函数时，编译器可以自动将 ` Swift数组 ` 转换为 ` C样式 ` 的指针。我们必须使用 ` ＆ ` 前缀，因为它是 ` UnsafeMutableRawPointer ` （ ` C ` 声明中的 ` * base ` ）。如果该函数不需要更改其输入，并且在 ` C ` 中将其声明为 ` const void * base ` ，则无需使用 ` ＆ ` 号。这与 ` Swift函数 ` 中 ` inout参数 ` 的区别相匹配；常规参数不使用 ` ＆ ` 符，但 ` inout参数 ` 需要使用 ` ＆ ` 前缀。

+ → 其次，我们必须提供元素的数量。这很容易；我们可以使用数组的 ` count属性 ` 。

+ → 第三，要获得宽度，请使用 ` MemoryLayout.stride ` ，而不是 ` MemoryLayout.size ` 。在 ` Swift ` 中， ` MemoryLayout.size ` 返回类型的真实大小，但是当在内存中定位元素时，平台对齐规则可能会导致相邻元素之间的间隙。跨度是类型的大小，加上一些填充（可能为零）以弥补此差距。对于字符串，当前在 ` Apple平台 ` 上的大小和跨度是相同的，但是并非所有类型都如此-例如， ` （Int32，Bool） ` 元组的大小为5，而跨度为8。从 ` C ` 到 ` Swift ` 的代码，你可能想在 ` C ` 中使用 ` sizeof ` 的情况下编写 ` MemoryLayout.stride ` 。

+ → 最后一个参数即指向可用于比较数组中两个元素的函数。 `  Swift ` 自动将 ` Swift函数类型 ` 桥接到 ` C函数指针 ` ，因此我们可以传递任何具有匹配签名的函数。但是，有一个很大的警告： ` C函数指针仅仅是指针 ` ；他们无法捕获任何值。因此，编译器将只允许你提供不捕获任何外部状态的函数（例如，没有局部变量和泛型）。  ` Swift ` 使用 ` @convention（c）属性 ` 表示这一点。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比较函数接受两个原始指针。这样的 ` UnsafeRawPointer ` 可以是任何内容的指针。我们必须处理 ` UnsafeRawPointer ` （而不是 ` UnsafePointer<String> ` ）的原因是因为 ` C没有泛型 ` 。但是，我们知道我们传递给 ` String ` ，因此我们可以将其解释为指向 ` String的指针 ` 。我们还知道指针在这里永远不会为零，因此我们可以安全地强制展开它们。最后，函数需要返回一个 ` Int32 ` ：如果第一个元素大于第二个元素，则为正数；如果它们相等，则为零；如果第一个元素小于第二个元素，则为负数。

# **使它通用**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建另一个适用于不同类型元素的包装很容易； 我们可以复制并粘贴代码，然后将 ` String ` 更改为其他类型，然后完成。 但是我们应该真正使代码通用。 这是我们达到 ` C函数指针 ` 的极限的地方。 下面的代码无法编译，因为比较功能已成为一个闭包。 现在，它从其范围之外捕获事物。 更具体地说，它捕获了比较运算符和相等运算符，对于每个运算符，运算符均不同。 我们对此无能为力-我们只是遇到了 ` C ` 的固有限制：

``` Swift
extension Array where Element: Comparable { 
    mutating func quicksort() {
    // Error: a C function pointer cannot be formed
    // from a closure that captures generic parameters.
    qsort(&self, self.count, MemoryLayout<Element>.stride) { a, b in
        
        let l = a!.assumingMemoryBound(to: Element.self).pointee 
        let r = b!.assumingMemoryBound(to: Element.self).pointee 
        if r>l {return-1} else if r==l {return0} else { return 1 }
    }
} 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考虑这种限制的一种方法是像编译器一样思考。  ` C函数指针 ` 只是**内存中指向代码块的地址**。 对于没有上下文的函数，此地址将是静态的，并且在编译时就可以知道。 但是，在使用泛型函数的情况下，会传入一个额外的参数（泛型类型）。因此，没有专用泛型函数的固定地址。 闭包也一样。 即使编译器可以以这样的方式重写闭包，将其作为函数指针传递时，无法自动完成内存管理-无法知道何时释放闭包。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，对于许多 ` C程序员 ` 来说，这也是一个问题。在 ` macOS ` 上，有一个名为 ` qsort_b ` 的 ` qsort变体 ` ，它使用一个块-一个闭包-而不是函数指针作为最后一个参数。如果我们在上面的代码中将 ` qsort ` 替换为 ` qsort_b ` ，它将编译并正常运行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，由于块不是 ` C标准 ` 的一部分，因此 ` qsort_b ` 在大多数平台上均不可用。除了 ` qsort ` 之外，其他功能也可能没有基于块的变体。大多数与回调一起使用的 ` C API ` 提供了不同的解决方案。他们将额外的 ` UnsafeRawPointer ` 作为参数，并将该指针传递给回调函数。然后， ` API ` 的用户可以使用此参数将任意数据传递给回调函数的每次调用。  ` qsort ` 也有一个变体 ` qsort_r ` ，它正是这样做的。它的类型签名包括一个额外的参数 ` thunk ` ，即 ` UnsafeMutableRawPointer ` 。请注意，此参数也已添加到比较函数指针的类型，因为 ` qsort_r ` 在每次调用时将值传递给该函数：

``` Swift
public func qsort_r(
    _ __base: UnsafeMutableRawPointer!,
    _ __nel: Int,
    _ __width: Int,
    _ __thunk: UnsafeMutableRawPointer!,
    _ __compar: @escaping @convention(c)
    (UnsafeMutableRawPointer?, UnsafeRawPointer?, UnsafeRawPointer?)
-> Int32 )
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们的目标平台上没有 ` qsort_b ` ，则可以使用 ` qsort_r ` 在 ` Swift ` 中重建其功能。 只要将其强制转换为 ` UnsafeRawPointer ` ，就可以将所需的任何内容作为 ` thunk参数 ` 传递。 在我们的例子中，我们想通过比较闭包。 回想一下， ` Unmanaged类型 ` 可以在本机 ` Swift对象 ` 和原始指针之间架起桥梁，这正是我们想要的。 由于非托管仅适用于类，因此我们还需要一个简单的 ` Box类 ` ，我们可以将闭包包装在：

``` Swift
class Box<A> { 
    var unbox: A
    init(_ value: A) {
        self.unbox = value 
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用此方法，我们可以开始编写我们的 ` qsort_b变体 ` 。 为了遵循 ` C的命名方案 ` ，我们调用函数 ` qsort_block ` 。 实施方法如下：

``` Swift
typealias Comparator = (UnsafeRawPointer?, UnsafeRawPointer?) -> Int32 

func qsort_block(_ array: UnsafeMutableRawPointer, _ count: Int,
_ width: Int, _ compare: @escaping Comparator) {
    let box = Box(compare) // 1
    let unmanaged = Unmanaged.passRetained(box) // 2 
    defer {
        unmanaged.release() // 6 
    }
    qsort_r(array, count, width, unmanaged.toOpaque()) { (ctx, p1, p2) -> Int32 in // 3
        let innerUnmanaged = Unmanaged<Box<Comparator>>.fromOpaque(ctx!) // 4
        let comparator = innerUnmanaged.takeUnretainedValue().unbox // 4 
        return comparator(p1, p2) // 5
    } 
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该函数执行以下步骤：

+ 1.将比较器闭包放入Box实例中。
+ 2.然后，将框包装在 ` Unmanaged实例 ` 中。 ` Pass Retained ` 调用确保保留box实例，这样它就不会过早地释放（记住，你有责任使放入Unmanaged实例中的对象保持活动状态）。
+ 3.接下来，它调用 ` qsort_r ` ，将指向 ` Unmanaged对象 ` 的指针作为 ` thunk参数 ` 传递（Unmanaged.to Opaque返回指向其自身的原始指针）。
+ 4.在 ` qsort_r ` 的回调中，它将原始指针转换回非托管对象，提取框，然后将闭包解开框。确保不修改包装对象的引用计数。该流程与步骤1到步骤3完全相反，因为从Opaque返回一个Unmanaged对象，take Unretained Value 提取Box实例，然后对开闭包进行解包。
+ 5.之后，它使用应该比较的两个元素调用比较器函数。
+ 6.最后，在 ` qsort_r ` 返回之后，在 ` defer块 ` 中，它释放了 ` box实例 ` ，因为我们不再需要它了。这样可以平衡从步骤2开始的保留操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们可以修改我们的 ` qsortWrapper函数 ` 以使用 ` qsort_block ` ，并为 ` C标准库 ` 中的 ` qsort算法 ` 提供一个不错的通用接口：

``` Swift
extension Array where Element: Comparable { 
    mutating func quicksort() {
        qsort_block(&self, self.count, MemoryLayout<Element>.stride) { a, b in 
            let l = a!.assumingMemoryBound(to: Element.self).pointee
            let r = b!.assumingMemoryBound(to: Element.self).pointee 
            if r>l { return-1 } else if r==l { return0 } else { return 1 } 
        }
    } 
}

var numbers = [3, 1, 4, 2] 
numbers.quicksort() 
numbers // [1, 2, 3, 4]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ` C标准库 ` 中的排序算法似乎需要很多工作。 毕竟， ` Swift ` 的内置排序功能更容易使用，并且在大多数情况下更快。 确实是这样，但是还有很多其他有趣的 ` C API ` ，我们可以使用相同的技术将它们包装成类型安全的通用接口。

# **概括**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ` Swift ` 中从头开始重写现有的 ` C库 ` 当然很有趣，但这可能不是你最好的时间使用方式（除非你为了学习而这样做，这真是太棒了）。 那里有很多经过测试的 ` C代码 ` ，而将其全部扔掉将是巨大的浪费。  ` Swift ` 非常擅长与 ` C代码 ` 进行交互，那么为什么不利用这些功能呢？ 话虽如此，无可否认，大多数 ` C API ` 在  ` Swift `  运行良好。 此外，在整个代码库中分布 ` C结构 ` （例如指针和手动内存管理）可能不是一个好主意。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写一个小的包装程序来内部处理不安全的部件，并公开一个惯用的 ` Swift界面 ` （正如我们在本章中针对 ` Markdown库 ` 所做的那样），可以为你提供两全其美的优势：你无需重新发明轮子（即编写一个完整的轮子  ` Markdown解析器 ` ），但对于使用该 ` API ` 的开发人员而言，它是100％原生的。

</br>

***
***


# **Final Words**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望你喜欢我们的Swift之旅。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管很年轻，但是 `Swift` 已经是一门复杂的语言。在一本书中涵盖所有方面是一项艰巨的任务，更不用说希望读者记住所有内容。但是，即使你没有立即将所学的所有知识投入实际使用，我们也有信心，对你的语言有更好的了解，可以使你成为更出色的程序员。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你从本书中删除一件事，我们希望它是`Swift`的许多高级方面，可以帮助你编写更好，更安全，更具表现力的代码。虽然你可以编写与`Objective-C`，`Java`或`C＃`并没有太大区别的`Swift代码`，但我们希望使你相信，`枚举`，`泛型`和`一流函数之类`的功能可以极大地改善你的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift 5`的标题功能是在`Apple平台`上达到稳定的`ABI`（应用程序二进制接口）。展望未来，使用`Swift 5编译`的任何库都将在以后的`Swift版本`中可用，并且运行时和标准库现在包含在OS中，而不是每个应用程序包中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在过去的几年中，归纳出稳定（且永不过时）的ABI所需的所有内部数据格式，占用了Swift团队的大量资源。既然这项工作已经完成，我们可以期望将新的精力集中在改进`Swift`面向公众的部分上。不必担心保持标准库的二进制大小很小（因为它现在已在磁盘和内存中的所有进程之间共享）也为向标准库添加更多功能提供了可能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Swift`仍在迅速改善。尽管大规模破坏源代码的变革时代已经过去，但我们预计未来几年将在以下几个方面进行重大改进：

+ → 明确的 [***```内存所有权模型```***](https://github.com/apple/swift/blob/master/docs/OwnershipManifesto.md "") 将允许开发人员使用所有权要求注释函数自变量。目的是为编译器提供所需的所有信息，从而避免在将值传递给函数时产生不必要的复制。我们已经在`Swift 4`和`5`中逐步引入了由编译器强制执行的独占内存访问，这已经看到了其中的第一部分。

+ → 关于为 `Swift` [***```添加一流的并发支持```***](https://gist.github.com/lattner/31ed37682ef1576b16bca1432ea9f782 "") 的讨论仍处于初期阶段，这是一个需要数年才能完成的项目。不过，我们很有可能会获得基于协程的异步/等待模型，这种模型在不久的将来会在其他语言中流行。

+ → 将 [***```有关类型及其属性的元数据```***](https://github.com/apple/swift/blob/master/docs/ABI/TypeMetadata.rst "") 编译到二进制文件中。调试工具已经在使用此信息，但是尚无任何公共API可以访问它。这些数据的存在为更强大的反射和自省功能打开了大门，这些功能远远超出了当前 `Mirror类型` 所能做的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想改变这些功能以及其他功能的效果，请记住，`Swift`正在公开开发中。考虑加入[***```Swift论坛```***](https://forums.swift.org/ "")，并将你的观点添加到讨论中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，我们鼓励你利用Swift是开源的这一事实。如果你有疑问，文档没有答案，则源代码通常可以为你提供答案。如果到此为止，你将可以毫无疑问地浏览[***```标准库源文件```***](https://github.com/apple/swift/tree/master/stdlib/public/core "")。
