---
title: 深入研究Swift框架
description: 深入研究Swift框架
permalink: 深入研究Swift框架
copyright: ture
date: 2020-04-29 16:26:23
keywords: iOS,Swift,架构,architecture,可重用,Swift Package Manager
tags:
    - [iOS]
    - [Swift]
    - [架构设计]
    - [Swift Package Manager]
categories:
    - [iOS]
    - [Swift]
    - [架构设计]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解有关 ```Swift模块``` ， ```库``` ， ```软件包``` ， ```封闭源框架``` ， ```命令行工具``` 等的一切。

</br>

# **基本定义**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，你应该对基本术语有清楚的了解。 如果你已经知道模块，程序包，库或框架之间的区别，则可以跳过本节。 但是，如果你对这些事情仍然有一些困惑，请继续阅读，你将不会后悔。 😉

## ***Package***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个包由 ```Swift``` 源文件和清单文件组成。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;包是 ```Swift``` 源文件的集合。 如果你使用的是 ```Swift Package Manager ```，则还必须提供一个清单文件才能制作一个真正的软件包。 如果你想了解更多有关此工具的信息，请查看我的 ```Swift Package Manager``` 教程。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示例：这是你的 ```package``` ：

``` Swift
Sources
    my-source-file.swift
Package.swift
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以查看 ``Apple`` 提供的开源 ```swift-corelibs-foundation``` 软件包，该软件包用于构建 ```Swift``` 的 ```Foundation框架``` 。

<!-- more -->


## ***Library***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;库是程序可以链接到的目标文件的打包集合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，库是一堆编译后的代码。 你可以创建两种库：

+ static
+ dynamic

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从非常简单的角度来看，它们之间的唯一区别就是 ```“集成”``` 的方法。 将它们链接到你的项目。 在我进一步介绍该过程之前，首先我们应该讨论目标文件。

## ***Mach-O文件格式***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了创建程序，开发人员将源代码转换为目标文件。 然后将目标文件打包到可执行代码或静态库中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译源文件时，基本上是在使用 ```Mach-O（MachObject）``` 文件格式来制作目标文件。 这些文件是应用程序，框架和库（动态和静态）的核心构建块。

## ***链接库***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;链接是指从多个目标文件创建单个可执行文件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;换一种说法：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编译器创建完所有目标文件后，将调用另一个程序将它们捆绑到可执行程序文件中。 该程序称为链接器，而将它们捆绑到可执行文件中的过程称为链接。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;链接只是将你所有的目标文件组合成一个可执行文件，并解决所有外部问题，因此系统将能够调用二进制文件中的所有函数。

**静态链接**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，该库的源代码将被复制到应用程序的源代码中。 这将导致一个较大的可执行文件，它将花费更多的时间来加载，因此二进制文件的启动时间会更慢。 哦，我是否提到过，如果你尝试多次链接同一库，由于符号重复，该过程将失败？

![静态链接](http://cdn.xuebaonline.com/sf-stp1.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种方法也有优点，例如，可执行文件将始终包含正确版本的库，并且仅将那些真正使用过的部分复制到主应用程序中，因此你不必加载全部内容，但是 在某些情况下，似乎动态链接会更好。

## ***动态链接***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```动态库``` 未嵌入到二进制源中，而是在运行时加载的。 这意味着，由于使用了轻量级的二进制文件，因此应用程序可以更小，并且启动时间可以大大缩短。 免费提供的动态库可以与多个可执行文件共享，因此它们可以减少内存占用。 这就是为什么有时将它们称为共享库的原因。

![动态链接](http://cdn.xuebaonline.com/sf-stp2.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，如果动态库不可用-或可用，但该版本不兼容-你的应用程序将无法运行或崩溃。 另一方面，这可能是一个优势，因为动态库的作者可以发布修补程序，而你的应用程序可以从中受益，而无需重新编译。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幸运的是，像 ```UIKit``` 这样的系统库总是可用的，因此你不必太担心这个问题...

## ***Framework***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;框架是分层目录，它将共享资源（例如动态共享库，nib文件，图像文件，本地化字符串，头文件和参考文档）封装在一个程序包中。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们简化一下：框架是打包成捆绑有一些额外 ```assets``` ，用于版本控制的元描述的 ```静态``` 或 ```动态库``` 。  ```UIKit``` 是一个需要图像 ```assets``` 来显示某些 ```UI元素``` 的框架，并且具有版本描述，通过这种方式， ```UIKit``` 的版本与 ```iOS``` 的版本相同。

## ***Module***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift``` 将代码组织到模块中。 每个模块都指定一个名称空间，并强制执行访问控制，以便可以在模块外部使用该代码的哪些部分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```import``` 关键字，你实际上是将 ```外部模块``` 导入到你的 ```项目``` 中。 在Swift中，你始终使用框架作为模块，但是让我们回顾一下，来了解为什么我们完全需要 ```模块``` 。

``` Swift
import UIKit
import my-awesome-module
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在使用模块之前，你必须将框架标头直接导入代码中，并且还必须在 ```Xcode``` 中手动链接框架的二进制文件。  ```#import宏``` 实际上将整个已解析的依赖项结构复制粘贴到你的代码中，然后编译器对该庞大的源文件进行了处理。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个脆弱的系统，宏定义可能会出错，你很容易破坏其他框架。 这就是定义带前缀的大写超长宏名称的原因，例如： ```NS_MYSUPERLONGMACRONAME```  ...😒

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有另一个问题：复制粘贴会导致不可扩展的编译时间。 为了解决这个问题，预编译的头文件 ```（PCH）``` 诞生了，但这只是部分解决方案，因为它们污染了名称空间（你知道是否将 ```UIKit``` 导入 ```PCH``` 文件中，它随处可见），而且没有人真正维护过 他们。

## ***Modules & module maps***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经有了 ```模块映射``` （定义什么样的头文件是模块的一部分以及什么是实现的二进制文件），我们已经封装了模块化框架。 🎉它们分别编译一次，头文件定义 ```接口（API）```，并且（自动）链接包含实现的 ```dylib文件``` 。 在编译期间（可伸缩性）无需解析框架头，因此本地宏定义不会破坏任何内容。 模块可以包含子模块（继承），而你不必在 ```（Xcode）``` 项目中显式链接它们，因为 ```.modulemap文件``` 包含构建系统所需的所有信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在你知道导入 ```Foundation``` 或 ```导入UIKit``` 时会发生什么。

</br>

# **Command line tools**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既然你知道整个 ```动态模块化框架``` 系统背后的逻辑，我们就应该开始研究使该基础架构成为可能的工具。

> ***```提示：```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总是阅读手册页。 RTFM！ 如果你不喜欢阅读太多内容，可以从gitlab下载示例项目并打开的 ```makefile``` 。 将有3个主要类别：```C```， ```Swift``` 和 ```Xcode``` 项目示例。

## ***clang***

>***```the Clang C, C++, and Objective-C compiler```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Clang``` 是 ```C语言``` （ ```C``` ， ```C++``` ， ```Objective-C``` ）的前端编译器。 如果你在大学期间曾经尝试使用 ```gcc``` 编译 ```C代码``` ，你可以想象 ```clang``` 与 ```gcc``` 差不多，但如今它可以做更多的事情。

``` C
clang -c main.c -o main.o #compiles a C source file
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**LLVM** ：编译器后端系统，可以编译和优化由 ```clang``` 或 ```Swift``` 编译器生成的中间表示 ```（IR）``` 代码。 它是独立于语言的，现在让我们说 ```LLVM``` 为你的 ```可执行文件``` 制作最终的 ```机器代码``` 。

## ***swiftc***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift编译器``` 对此没有手动输入，但是不用担心，只需启动 ```swiftc -h``` 并看看能为你提供什么。

``` C
swiftc main.swift #compiles a Swift source file
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，此工具实际上是可以将 ```Swift源文件``` 编译为 ```Mach-O``` 或最终 ```可执行文件``` 的工具。

## ***ar***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```ar``` 实用程序创建并维护组合成档案的文件组。 创建归档文件后，可以添加新文件，并且可以提取，删除或替换现有文件。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，简而言之，你可以将 ```Mach-O文件``` 压缩为一个文件。

``` bash
ar -rcs myLibrary.a *.o
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```ar``` 的帮助下，你可以创建 ```静态库文件``` ，但是如今 ```libtool``` 具有相同的功能。

## ***ranlib***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```ranlib``` 生成指向档案内容的索引，并将其存储在档案中。 索引列出了由可重定位目标文件的归档成员定义的每个符号。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Ranlib``` 可以在 ```静态库``` 中创建一个索引文件，因此当你要使用库时，事情将会变得更快。

``` bash
ranlib myLibrary.a
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此， ```ranlib＆ar``` 是维护 ```静态库``` 的工具，通常 ```ar``` 负责维护索引，并且你不必再运行 ```ranlib``` 。 但是，还有一个更好的管理 ```静态（和动态）库``` 的选择，你应该学习...

## ***libtool***

> ***```创建类库```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```libtool``` 可以创建 ```动态链接的库``` 或 ```静态链接的（归档）库``` 。 该带有 ```-static``` 选项的工具旨在替换 ```ar＆ranlib``` 。

``` bash
libtool -static *.o -o myLibrary.a
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今， ```libtool``` 是构建库文件的主要选项，如果你是本主题的话，一定要学习该工具。 你可以检查示例项目的 ```makefile``` 以获得更多信息，或者通常可以阅读手册（```man libtool```）。 😉

## ***ld***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```ld命令``` 组合了几个目标文件和库，解析引用，并生成输出文件。  ```ld``` 可以产生最终的 ```链接映像``` （ ```可执行文件``` ， ```dylib``` 或 ```bundle``` ）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们简单点：这是 ```链接器工具``` 。

``` bash
ld main.o -lSystem -LmyLibLocation -lmyLibrary -o MyApp
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它可以将多个文件链接到一个实体中，因此你可以从 ```Mach-O``` 制作 ```可执行二进制文件``` 。  ```链接``` 是必需的，因为系统需要从链接的库中解析每种方法的地址。 换句话说，可执行文件将能够运行，并且所有功能都可以调用。 📱

## ***nm***

> ***```显示名称列表（符号表）```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```nm``` ，你可以查看文件中包含哪些符号。

``` Swift
nm myLibrary.a
# 0000000000001000 A __mh_execute_header
#                  U _factorial
# 0000000000001f50 T _main
#                  U _printf
#                  U dyld_stub_binder
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从输出中可以看到，某些符号与某些内存地址相关联。 具有地址的地址实际上已给出，所有其他地址都来自其他库（它们尚未解析）。 因此，这意味着它们将在运行时解决。 另一个选择是你必须链接它们。 😅

## ***otool***

> ***```目标文件显示工具```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 ```otool``` ，你可以检查 ```Mach-O文件``` 或 ```库``` 的内容。

``` bash
otool -L myLibrary.a
otool -tV myLibrary.a
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，你可以列出 ```链接``` 的库，或查看文件的 ```反汇编``` 文本内容。 如果你熟悉 ```Mach-O文件格式``` ，那么它是一个非常有用的工具，也是对现有应用程序进行 ```逆向工程``` 的好工具。

## ***lipo***

> ***```创建通用文件或对其进行操作```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借助 ```lipo``` 工具，你可以创建通用（多体系结构）文件。 通常，此工具用于创建通用框架。

``` bash
lipo -create -output myFramework.framework devices.framework simulator.framework
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设想以下情形：你为 ```arm7``` 和 ```i386``` 都构建了类库。 在真实设备上，你需要发布 ```arm7版本``` ，但对于 ```iOS模拟器```  ，你将需要 ```i386版本``` 。 在 ```lipo``` 的帮助下，你可以将这些体系结构组合为一个，并交付该框架，因此最终不必再担心此问题。

</br>

# **Xcode相关工具**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些工具也可以从命令行调用，但是它们与 ```Xcode``` 的关系比以前更多。 让我们快速了解一下。

## ***xcode-select***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管理 ```Xcode``` 和 ```BSD工具``` 。 如果你的计算机上具有多个版本的 ```Xcode``` ，则此工具可以轻松地在各个版本提供的开发人员工具之间切换。

``` bash
xcode-select --switch path/to/Xcode.app
```

## ***xcrun***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行或找到开发工具和属性。 使用 ```xcrun``` ，你基本上可以运行任何可以通过 ```Xcode``` 管理的内容。

``` bash
xcrun simctl list #list of simulators
```

## ***codesign***

> ***```创建和操作代码签名```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它可以选择适当的签名对你的应用程序进行签名。 通常，在引入自动签名之前尝试对应用程序进行签名时，此操作失败。

``` bash
codesign -s "Your Company, Inc." /path/to/MyApp.app
    codesign -v /path/to/MyApp.app
```

## ***xcodebuild***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;构建 ```Xcode``` 项目和 ```workspaces```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它将解析 ```Xcode项目``` 或 ```workspaces``` 文件，并基于该文件执行适当的 ```buid命令``` 。

``` bash
xcodebuild -project Example.xcodeproj -target Example
    xcodebuild -list
    xcodebuild -showsdks
```

</br>

# **如何使iOS的封闭源通用FATtened（多体系结构）Swift框架？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以我们在这里，整篇文章都是为了学习本教程背后的逻辑而写的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我不想重新发明轮子。 但是，我想为你提供一些更详细的说明，并对脚本进行一些修改。

## ***Thin vs. fat frameworks***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Thin frameworks``` 仅包含一种体系结构的编译代码。 另一方面，```fat frameworks``` 包含用于多种体系结构的 ```“slices”``` 。 架构基本上被称为片，例如 ```i386``` 或 ```arm7 slice``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```slice``` 这意味着，如果仅针对 ```i386``` 和 ```x86_64架构编译框架``` ，则该框架仅在模拟器上有效，而在实际设备上则失败。 因此，如果你想构建一个真正的通用框架，则必须为所有现有架构进行编译。

## ***构建一个 fat framework***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我对你有个好消息。 你只需要一个构建阶段脚本和一个聚合目标即可构建一个多体系结构框架。 在这里，从原始文章中无耻地撕下来，进行了一些额外的更改...😁

``` bash
set -e
BUILD_PATH="${SRCROOT}/build"
DEPLOYMENT_PATH="${SRCROOT}"
TARGET_NAME="Console-iOS"
FRAMEWORK_NAME="Console"
FRAMEWORK="${FRAMEWORK_NAME}.framework"
FRAMEWORK_PATH="${DEPLOYMENT_PATH}/${FRAMEWORK}"

# clean the build folder
if [ -d "${BUILD_PATH}" ]; then
    rm -rf "${BUILD_PATH}"
fi

# build the framework for every architecture using xcodebuild
xcodebuild -target "${TARGET_NAME}" -configuration Release \
    -arch arm64 -arch armv7 -arch armv7s \
    only_active_arch=no defines_module=yes -sdk "iphoneos"

xcodebuild -target "${TARGET_NAME}" -configuration Release \
    -arch x86_64 -arch i386 \
    only_active_arch=no defines_module=yes -sdk "iphonesimulator"

# remove previous version from the deployment path
if [ -d "${FRAMEWORK_PATH}" ]; then
    rm -rf "${FRAMEWORK_PATH}"
fi

# copy freshly built version to the deployment path
cp -r "${BUILD_PATH}/Release-iphoneos/${FRAMEWORK}" "${FRAMEWORK_PATH}"

# merge all the slices and create the fat framework
lipo -create -output "${FRAMEWORK_PATH}/${FRAMEWORK_NAME}" \
    "${BUILD_PATH}/Release-iphoneos/${FRAMEWORK}/${FRAMEWORK_NAME}" \
    "${BUILD_PATH}/Release-iphonesimulator/${FRAMEWORK}/${FRAMEWORK_NAME}"

# copy Swift module mappings for the simulator
cp -r "${BUILD_PATH}/Release-iphonesimulator/${FRAMEWORK}/Modules/${FRAMEWORK_NAME}.swiftmodule/" \
    "${FRAMEWORK_PATH}/Modules/${FRAMEWORK_NAME}.swiftmodule"

# clean up the build folder again
if [ -d "${BUILD_PATH}" ]; then
    rm -rf "${BUILD_PATH}"
fi

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以使用 ```lipo``` 工具检查创建的框架。

``` bash
lipo -info Console.framework/Console
    #Architectures in the fat file: Console.framework/Console are: x86_64 i386 armv7 armv7s arm64
```

## ***用法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你只需要将全新的框架嵌入到要使用的项目中并设置一些路径即可。 

![静态链接](http://cdn.xuebaonline.com/sf-stp3.png "")

## ***提交至App Store***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```fat frameworks``` 只有一个问题。 它们也包含模拟器的切片。 如果要向应用商店提交应用，则必须从框架中切断与模拟器相关的代码库。 其背后的原因是，没有真正的实际设备需要此代码块，那么为什么要提交它呢？

``` bash
APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

# remove unused architectures from embedded frameworks
find "$APP_PATH" -name '*.framework' -type d | while read -r FRAMEWORK
do
    FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
    FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
    echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"

    EXTRACTED_ARCHS=()

    for ARCH in $ARCHS
    do
        echo "Extracting $ARCH from $FRAMEWORK_EXECUTABLE_NAME"
        lipo -extract "$ARCH" "$FRAMEWORK_EXECUTABLE_PATH" -o "$FRAMEWORK_EXECUTABLE_PATH-$ARCH"
        EXTRACTED_ARCHS+=("$FRAMEWORK_EXECUTABLE_PATH-$ARCH")
    done

    echo "Merging extracted architectures: ${ARCHS}"
    lipo -o "$FRAMEWORK_EXECUTABLE_PATH-merged" -create "${EXTRACTED_ARCHS[@]}"
    rm "${EXTRACTED_ARCHS[@]}"

    echo "Replacing original executable with thinned version"
    rm "$FRAMEWORK_EXECUTABLE_PATH"
    mv "$FRAMEWORK_EXECUTABLE_PATH-merged" "$FRAMEWORK_EXECUTABLE_PATH"

done
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个小脚本将删除框架中所有不必要的片段，因此你可以通过 ```iTunes Connect``` 提交应用程序，而不会出现任何问题。 （哈哈哈。😅）

> ***```提示： ```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 你必须将此最后一个脚本添加到应用程序的 ```build phases``` 中。

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如果你想熟悉幕后的工具，本文将为你展示基础知识。 😉

















