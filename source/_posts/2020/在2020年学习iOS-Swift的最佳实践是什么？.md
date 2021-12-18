---
title: 在2020年学习iOS / Swift的最佳实践是什么？
description: 在2020年学习iOS / Swift的最佳实践是什么？
permalink: 在2020年学习iOS / Swift的最佳实践是什么？
copyright: ture
keywords: 'iOS,Swift,2020,最佳实践'
tags:
  - - iOS
  - - Swift
categories:
  - - iOS
  - - Swift
abbrlink: 33784
date: 2020-05-01 11:15:03
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你正在学习 ```iOS开发``` 吗？ 寻找 ```Swift``` 最佳做法？ 这是开始作为移动应用程序开发人员的旅程的正确位置。

</br>

# **Hello Swift!**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习编程语言很困难。 即使经过十多年的软件开发人员经验，仍然觉得自己只是在摸索。 我对底层汇编代码不了解，也不知道如何使用着色器等创建3D游戏。 仍然，我们每天都在学习新的东西。 这是终生的旅程，道路上充满了障碍，但是如果你继续前进，你会发现路的尽头有金子。 我仍然喜欢用纯代码来创建新东西。 😍

***```Everyone can code```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刚开始时，你会感觉必须学习一百万件事，但你不必担心，因为时间是你的朋友。 每天你都会学到一些新知识，这些新知识将帮助你前进以实现下一个目标。 我相信这里最重要的是获得乐趣。 如果因为无法理解某件事而感到沮丧，请寻求帮助或休息一下。  ```Swift社区``` 是一群很棒的人，每个人都非常有帮助，因此，如果你选择这种编程语言来实现你的想法，那么你将遇到一些很棒的人。


<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，让我向你展示开始 ```Swift应用程序开发人员``` 所需要的条件。👨💻

</br>

# **Hardware**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开始你的 ```Apple开发人员``` 职业所需的第一件事是 ```Mac``` 。 不幸的是， ```Mac``` 如今是非常昂贵的机器，当前的 ```MacBook系列（Air和Pro都具有完全损坏的蝶形键盘机制）``` 。 希望这将很快改变。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想说，你应该使用蝴蝶前款式，如果你想便宜的话，可以寻找二手市场。 否则，你可以使用 ```Mac mini``` ，但是如果你购买 ```Mac mini ```，则应考虑显示器，键盘和鼠标等额外费用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你没有足够的资金，则应该使用一些高端设备，例如新的 ```MacBook Pro 16“``` ， ```iMac Pro``` 或只是购买 ```Mac Pro``` 。尽管如此，你始终应该选择配备SSD的计算机。 2020年，基本的iMac配备了极其慢的HDD。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个选择是建立一个 ```hackintosh``` ，但是恕我直言，这是你最糟糕的事情。 你将不会获得相同的经验，而且你将在与系统的斗争中挣扎很多。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会听说有传言说 ```iPad``` 和 ```Swift playgrounds``` 会很好。 老实说，事实并非如此。 即使使用 ```Linux机器``` ，你也可以玩耍并学习 Swift编程语言 ，但是如果你要制作自己的 ```iOS/iPadOS/macOS/watchOS``` 应用程序，则肯定需要 ```Mac``` 。

</br>

# **Software**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，你拥有一台不错的 ```Mac``` 。 让我们看看如果你要开始开发 iOS应用程序 ，将需要哪种软件。 你可能听说过苹果的操作系统是 ```macOS``` 。 首先，如果你以前从未使用过 Mac ，则应该熟悉系统本身。 当我购买第一台 ```MacBook Pro``` 时，我花了大约一周的时间来习惯所有应用程序，系统快捷方式和其他所有功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不想自己搞定一切，那么你来对地方了。 让我逐步介绍一下作为专业移动/后端开发人员在我的工作中使用的每个应用程序和工具。

## ***Terminal***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该习惯的最重要的事情是终端（控制台）应用程序。 如果你之前从未听说过终端，则应该只寻找初学者指南教程，但是我强烈建议你至少学习真正的基本命令。

## ***Brew & cask***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该在新 ```Mac``` 上安装的第一件事是 [***```Homebrew```***](https://brew.sh/ "") 。 如果你以前使用过 ```linux``` ，可能会发现此工具很熟悉（它也可以在 ```linux``` 上运行）。 根据 ```Max Howell``` （创作者）：

> **```适用于macOS（或Linux）的缺少的包管理器.```**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还可以通过使用 ```cask子命令``` 将常规应用程序与 ```brew安装``` 在一起。 例如：

``` bash
brew cask install firefox
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我更喜欢创建一个我一直使用的工具列表，所以当我重新安装计算机时，我只需将这些命令复制并粘贴到终端中，我就或多或少地准备好恢复过程。 如果必须从头开始重新安装 ```macOS``` ，这将非常方便。

## ***MAS***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会注意到，我已经为 ```Terminal``` 安装了一些软件。 如果你不喜欢``` App Store``` 的界面，则可以安装 [***```MAS（一种辅助工具）```***](https://github.com/mas-cli/mas "") 。 借助它，你可以使用终端命令安装商店中所有可用的内容。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```GitHub``` 上的自述文件非常好，你应该仔细阅读。 无论如何，你都不需要 ```mas-cli``` 来进行 ```iOS``` 开发，但是由于它确实很方便，所以我建议你进行检查。

## ***Xcode***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你肯定需要的第一工具是 [**```Xcode```**](https://developer.apple.com/xcode/ "") 。 还有一个名为 [**```AppCode```**](https://www.jetbrains.com/objc/ "") 的IDE工具，但它总是落后于其他社区，绝大多数社区都喜欢 ```Xcode``` 。 🔨

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每年都会发布具有全新功能的 ```Xcode新版本``` 。 我建议使用最新版本（也应始终升级现有项目以支持最新版本）。 你可以从 ```App Store``` 获取 ```Xcode``` ，它是完全免费的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在你的机器上安装 ```Xcode``` 会花费很多时间，但是几个小时后不用担心，它可以帮助你编写第一个 ```iOS应用程序``` 。 所以要耐心点。 :)

## ***Git***

> Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个开发人员都应使用适当的 [***```版本控制系统（又名Git）```***](https://en.wikipedia.org/wiki/Version_control "") 。  ```Git``` 是事实上的版本控制标准工具，你可以在大约15分钟内[***```学习基础知识```***](https://try.github.io/levels/1/challenges/1 "")。 当然，掌握它会花费更长的时间，但是完全值得一试。

## ***GitHub***

***```GitHub是基于Web的托管服务，用于使用git进行版本控制。```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老实说， ```GitHub``` 不再只是一个存储库托管服务，它是一个完整的平台，具有用于问题管理，项目计划，持续集成支持等的工具。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```GitHub``` 为你提供了针对个人的公共和私有 ```Git存储库``` 的 **免费服务** 。 在2019年，它被Microsoft收购（每个人都担心这一变化，因为MS拥有破坏良好服务的历史），但到目前为止，他们推出了许多令人惊叹的新功能。 立即获取免费帐户！

</br>

# **使用Swift进行iOS应用开发**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我相信 ```Swift``` 在过去5年中已发展成为稳定且成熟的语言。 如果你考虑一下，这是编写具有前瞻性的iOS应用程序的唯一好选择。 你显然应该忘记 ```Objective-C``` ，因为苹果已经做出了选择。 最终， ```Swift``` 将成为 ```Apple``` 支持的唯一编程语言，已经有一些Swift框架“仅”。 只需看看 [***```SwiftUI```***](https://developer.apple.com/xcode/swiftui/ "") 。 我的意思是，尽管该框架与基于 ```Objective-C``` 的项目100％兼容，但你无法在 ```Objective-C``` 中编写 ```SwiftUI视图``` 。

## ***依赖管理***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些时候，你不想自己编写所有内容，因为你希望快速进步。 这是外部程序包出现的地方。 听我的劝告：

***```切勿手动连接第三方库```***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Swift软件包管理器``` 本地集成到 ```Xcode``` 中。 过去， ```CocoaPods``` 是iOS项目的最终依赖性管理器（有些人更喜欢 ```Carthage``` ），但是如今使用 ```SPM``` 更好。 如果你需要集成外部库， ```SwiftPM``` 是2020年的正确选择。如果你不知道它的工作方式，则应该阅读我有关[***```如何使用 Swift Package Manager 的综合教程```***]( "")。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去年，我还写了一篇相当受欢迎的文章，介绍用 [***```Swift 编写的最好/最受欢迎的iOS库```***](http://www.xuebaonline.com/Swift%E7%BC%96%E5%86%99%E7%9A%8420%E4%B8%AAiOS%E5%BA%93(%E4%B8%80)/ "")。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，如果你不知道从哪里开始以及将哪些内容集成到 ```Swift项目``` 中，则应该阅读我的博客文章，因为它仍然是最新的。 幸运的是，这些事情并没有经常改变。

## ***应用架构***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为即将到来的 ```iOS项目``` 选择正确的架构是最困难的事情之一。另一个正在建立你的用户界面，但让我们将该主题保留。你永远不应该害怕架构。即使你选择 ```MVC``` ， ```MVP``` ， ```MVVM``` 或 ```VIPER``` ，你也可以拥有一个编写良好的应用程序结构。这一点非常重要，因为你不想让2000多行 [***```面条式代码 ```***](https://zh.wikipedia.org/wiki/%E9%9D%A2%E6%9D%A1%E5%BC%8F%E4%BB%A3%E7%A0%81 "")的视图控制器使自己将来感到生气，但它会带来一些讨厌的副作用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么，你应该如何选择架构？由于它们很多，因此你甚至可以随机选择一个。好吧，这是iOS开发人员之间的真正辩论。我最喜欢的是 ```VIPER``` ，尽管因此我受到了很多批评。老实说，我真的对此不抱任何想法，因为它对我（和我的团队）有用。不管你是否使用普通的 ```旧MVC``` ，直到它可以解决你的问题时，它才真正重要。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你是一个完全初学者，请不要从 ```VIPER``` 开始，除非你可以陪伴可以回答你所有问题的人。我在这里的建议只是简单地坐下来，仔细考虑你想要实现的目标并制定基本计划。当然，如果你熟悉这些模式会很有帮助，但是到最后，你会意识到它们都是由人为制作的，而且都不完美。 🤔

## ***Xcode约定***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我为 Xcode 制定了一些非常 [***```基本的约定```***]( "") ，如果你不知道如何组织项目，则应检查这些约定。 如果你不熟悉 ```Xcode格式``` ，目标，方案，则应在互联网上搜索这样的教程，其中有一些关于整个过程的充分说明的示例。

## ***使用文件夹表示Xcode中的组***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你知道，就像在现实生活中一样，你不会将所有衣服都扔到架子上，对吗？ 井井有条是创建一个好的项目的唯一方法。 幸运的是， ```Apple``` 也意识到了这一点，现在默认情况下，组以硬盘上的物理文件夹表示。

## ***始终尝试修复每个警告***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存在警告是有原因的，但是你绝不应在生产代码中留下任何警告。 如果你想变得更激进，可以在Xcode中使用build标志将[***```警告视为错误```***](http://iosdevelopertips.com/xcode/treat-warnings-as-errors.html "")。 打开它！ 消除所有警告！ 哈哈，不要那样做，但是你应该始终尝试修正所有警告。

## ***Don't let your code to grow on you***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你知道这种尴尬的情况，当你打开源文件并开始滚动时，滚动，并且你需要做更多的滚动。 是的，通常这是一个巨大的视图控制器问题，你已经知道自己永远迷路了。 如果到了这一步，你可以尝试通过引入一个新对象来重构代码，该对象可以接管控制器类的某些功能。

## ***不要重新发明轮子***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果有最佳实践，请使用它。 开始编码之前，应始终查找问题。 在开始编码之前，你还应该仔细考虑问题。 请记住：你并不是唯一一个遇到编码问题的人，我几乎可以保证有人已经遇到了与你正在处理的问题完全相同的问题。  ```StackOverflow``` 是寻找解决方案的正确地方。 利用社区的力量，不要害怕在互联网上或从你的同事那里提问，但是不要期望别人会解决你的问题，那就是你的工作。

</br>


# **给初学者的建议 Swift**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本节中，我将为你提供一些有关如何编写正确的Swift代码的快速建议。我知道我无法在此列表中包含所有内容，但我认为这些是一些非常重要的内容。

## ***了解如何编写正确的异步代码***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看，如果你知道厄运的“伟大” [***```Pyramid of Doom```***](http://www.thomashanning.com/the-pyramid-of-doom/ "") 是什么，那么你就会知道我在说什么。你最终将要编写异步代码，大多数API都有异步方法。甚至一个简单的网络任务也是异步的。从一开始就学习如何编写正确的异步代码是明智之举。

## ***你可以选择几种方法。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，你可以通过使用完工块去上学。这是学习该概念的好方法，你可以练习很多，但是有很多更好的方法可以在2020年编写好的异步代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Promises** 是异步任务的高级抽象，它们会让你的生活变得更加美好。你真正的力量来自于你可以使用功能性方法进行链接和转换的事实。 ```Promises``` 是惊人的，但实际上并没有内置的取消支持。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以执行 **NSOperation** 任务，但是如果你想使用一些语法糖，建议你使用 **Promises** 。我的问题是，如果必须在操作之间传递数据，则必须创建一个新的操作来执行此操作，但是作为这种不便的交换，它们可以在队列上运行，它们可以具有优先级和依赖性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我相信全新的 **Combine框架** 是2020年处理异步代码的最佳方法。

## ***仅在必要时使用单例***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它们是万恶之源。老实说，尽量避免单例。如果你想处理混合状态和不可测试的代码，请与它们一起使用，但是如果你接受我的建议，你的生活会更好。如果你不知道如何避免单例模式，请进行一些研究。网上有很多关于该主题的精彩文章。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个例外：如果你特别在寻找共享状态（例如缓存机制）或本地存储对象（例如UserDefaults），则可以使用单例。否则不要使用单例。

## ***不要创建 helpers（或 managers）***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你需要 ```helpers``` 课程，那么你做错了！每个对象在你的代码库中都有其自己的位置， ```helpers``` 是无用的，对任何事情都没有好处。重新思考，重新定义，重构（如果需要），但不惜一切代价避免使用辅助类。了解 ```Swift设计模式``` 或绘制有关模型的图表，但请相信我，代码中没有帮助者的位置。

## ***避免副作用和全局状态***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用全局变量是一个非常糟糕的做法。最终，你的代码的某些部分将覆盖global属性，并且事情将变得一团糟。你只需消除这些全局变量即可避免产生副作用。使功能正常运行也是改善代码的一种好方法。

## ***写一些测试***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应该始终编写测试，我并不是说你应该使用 ```TDD``` ，但是 ```单元测试``` 是一种好习惯。他们将帮助你考虑可能的错误，并验证你的代码库。 UI测试也很适合验证用户界面，此外，如果不必运行手动测试，则可以节省大量时间。

</br>

# **非技术技能**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我知道这是一个清单。不要害怕，你不必一次学习所有内容。开始你的iOS生涯不仅是学习新知识，还应该在旅途中玩得开心。 😊

## ***时间***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要有耐心和一致。始终每天指定固定的时间进行编码。仅仅半个小时就没关系，如果每天都这样做，就会养成一个习惯，数字也会累加。在这个繁忙的世界中，很难找到时间真正专注于某些事情，但是如果你真的想学习如何编写Swift代码，这是你需要采取的最重要的步骤。

## ***动机***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你有“梦想”，那么上进很容易。你要构建一个应用程序吗？你是否想学习如何在Swift中写东西？你想找到更好的工作吗？你想为孩子们制作游戏吗？所有这些都可以成为巨大的动力。当你不断遇到障碍时，问题就开始了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要害怕！成为程序员意味着有时你会尝试并失败。如果你想成为一名真正的优秀开发人员，则应该从这些错误中吸取教训，并在第二次做得更好。当然，你也会从其他人那里学到很多东西，但是有时你必须解决自己的问题。

## ***目标***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要试图追求一个真正的大目标。庆祝小小的成功故事和成就。你还应该为“今天”所做的事情感到自豪。忘记这些小事情很容易，但是开发一个应用程序或学习一种新的编程语言是一个长期的项目。如果你没有时间可以庆祝，那么你最终将失去对“项目”的动力和兴趣。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想学习Swift，我认为这三件事是最重要的非技术技能。每天都有自己专用的时间编写代码。从梦想中获得动力（跟随大局），同时也庆祝你取得的每一个小小的成功故事。循序渐进，你会发现没有什么是你不能学的。无论如何，技术技能只是次要的……🤷️

</br>

# **Swift 社区很棒**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很高兴看到仍然有很多专职人员继续撰写有关 ```iOS/Swift``` 开发的优缺点的文章。 这是2020年你应该知道的最佳资源。

## ***最佳iOS / Swift教程网站***

+ [***```Ray Wenderlich```***](https://www.raywenderlich.com/ "")
+ [***```nshipster.com```***](https://nshipster.com/ "")
+ [***```objc.io```***](https://www.objc.io/blog/ "")
+ [***```AppCoda```***](https://www.appcoda.com/ "")
+ [***```pointfree.co```***](https://www.pointfree.co/ "")

## ***最佳iOS / Swift博客***

+ [***```Paul Hudson```***](https://hackingwithswift.com/ "")
+ [***```John Sundell```***](https://www.swiftbysundell.com/ "")
+ [***```Antoine van der Lee```***](https://www.avanderlee.com/ "")
+ [***```Vadim Bulavin```***](https://www.vadimbulavin.com/ "")
+ [***```Keith Harrison```***](https://useyourloaf.com/ "")

+ [***```Majid Jabrayilov```***](https://swiftwithmajid.com/ "")
+ [***```Bart Jacobs```***](https://cocoacasts.com/ "")
+ [***```Soroush Khanlou```***](http://khanlou.com/ "")
+ [***```Erica Sadun```***](https://ericasadun.com/ "")
+ [***```Andrew Bancroft```***](https://www.andrewcbancroft.com/ "")

## ***最佳iOS / Swift新闻通讯***

+ [***```iOS Goodies```***](http://ios-goodies.com/ "")
+ [***```iOS Dev Weekly```***](https://iosdevweekly.com/ "")
+ [***```Swift Developments```***](https://andybargh.com/swiftdevelopments/ "")
+ [***```Indie iOS focus weekly```***](http://indieiosfocus.com/ "")

## ***最佳iOS / Swift播客***

+ [***```iOS Dev Discussions```***](https://podcasts.apple.com/us/podcast/ios-dev-discussions-sean-allen/id1426167395 "")
+ [***```Swift over Coffee```***](https://podcasts.apple.com/us/podcast/swift-over-coffee/id1435076502 "")
+ [***```Swift by Sundell```***](https://swiftbysundell.com/podcast/ "")
+ [***```iPhreaks```***](https://devchat.tv/iphreaks/ "")

## ***最佳iOS / Swift播客***

+ [***```iOS Dev Discussions```***](https://podcasts.apple.com/us/podcast/ios-dev-discussions-sean-allen/id1426167395 "")
+ [***```Swift over Coffee```***](https://podcasts.apple.com/us/podcast/swift-over-coffee/id1435076502 "")
+ [***```Swift by Sundell```***](https://swiftbysundell.com/podcast/ "")
+ [***```iPhreaks```***](https://devchat.tv/iphreaks/ "")


## ***关注Twitter帐户***

+ [***```Ankit Aggarwal```***](https://twitter.com/aciidb0mb3r "")
+ [***```Harlan Haskins```***](https://twitter.com/harlanhaskins "")
+ [***```Nate Cook```***](https://twitter.com/nnnnnnnn "")
+ [***```Slava Pestov```***](https://twitter.com/slava_pestov "")
+ [***```Ted Kremenek```***](https://twitter.com/tkremenek "")
+ [***```JP Simard```***](https://twitter.com/simjp "")
+ [***```Daniel Dunbar```***](https://twitter.com/daniel_dunbar "")
+ [***```Doug Gregor```***](https://twitter.com/dgregor79 "")
+ [***```Joe Groff```***](https://twitter.com/jckarter "")
+ [***```Ben Cohen```***](https://twitter.com/AirspeedSwift "")
+ [***```Tanner Wayne Nelson```***](https://twitter.com/tanner0101 "")
+ [***```Ash Furrow```***](https://twitter.com/ashfurrow "")
+ [***```Ole Begemann```***](https://twitter.com/olebegemann "")
+ [***```Bart Jacobs```***](https://twitter.com/_bartjacobs "")
+ [***```Dave Verwer```***](https://twitter.com/daveverwer "")
+ [***```Ray Wenderlich```***](https://twitter.com/rwenderlich "")
+ [***```objc.io```***](https://twitter.com/objcio "")
+ [***```NSHipster```***](https://twitter.com/NSHipster "")
+ [***```Krzysztof Zabłocki```***](https://twitter.com/merowing_ "")
+ [***```Marcin Krzyzanowski```***](https://twitter.com/krzyzanowskim "")
+ [***```Peter Steinberger```***](https://twitter.com/steipete "")
+ [***```Chris Eidhof```***](https://twitter.com/chriseidhof "")
+ [***```soroush```***](https://twitter.com/khanlou "")
+ [***```ericasadun```***](https://twitter.com/ericasadun "")
+ [***```Chris Lattner```***](https://twitter.com/clattner_llvm "")
+ [***```John Siracusa```***](https://twitter.com/siracusa "")
+ [***```Sean Allen```***](https://twitter.com/siracusa "")
+ [***```Marco Arment```***](https://twitter.com/marcoarment "")
+ [***```Paul Hudson```***](https://twitter.com/twostraws "")
+ [***```John Sundell```***](https://twitter.com/johnsundell "")


