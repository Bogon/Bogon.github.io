/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","883fc8eda8bef67956cb5d5278919ec0"],["/2020年iOS面试题总结(三)/index.html","89a7079fe62ee1098a506d83d04d897e"],["/2020年iOS面试题总结(二)/index.html","eab743a0520a96641dc77f07748de320"],["/Advanced Swift系列(一): Swift 简介/index.html","c60d8baebbfffe5879204ceef92c09d7"],["/Advanced Swift系列(七): Strings/index.html","59f8ce8ced09abf2bdea02eb488ec521"],["/Advanced Swift系列(三):  Optionals/index.html","894d04bfeda19c6b017be2f32d8c8d05"],["/Advanced Swift系列(九): Protocols/index.html","1a27a2735a1fdc2625c637e1d5afe2ff"],["/Advanced Swift系列(二): Build-in Collections/index.html","af01584284a17679ec8ee19687472282"],["/Advanced Swift系列(五): Structs and Classes/index.html","01d04a1fb28e219484a60673a974cb20"],["/Advanced Swift系列(八): Generics/index.html","007aacfc4f50eef6b19e078f9184ffc1"],["/Advanced Swift系列(六):  Enums/index.html","16941f7da80400c0731d95bb4628433e"],["/Advanced Swift系列(十): Collection Protocols/index.html","8b5a0e06230f74a266e92b5c9f87d3c0"],["/Advanced Swift系列(十一): Error Handling/index.html","f789b3c8905d1e35a05b71a0e3d5be9f"],["/Advanced Swift系列(十三): Interoperability/index.html","84eaa502b31ad6cee0ae61027ee4d1e2"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fefa973e53a442f10ff9779b1e9307d9"],["/Advanced Swift系列(四):  Functions/index.html","d4101aac749396029a5acdc21b2240fc"],["/App Architecture系列(一):  简介/index.html","0d1ea526cd86781c34b9dd375fd9b05a"],["/CocoaPods 设定版本说明/index.html","bac3e5f5b4cd9ee1279b7b77864bda08"],["/Functional Swift 初探/index.html","43c03b31a76a76aa233bcbfbb36ac3a1"],["/Git 使用小技巧/index.html","e4c26612d03b0685c82fd41b1081a87b"],["/Go Protobuf 初探/index.html","72aa5a7590c1d838636a6eb48ec54d8e"],["/Go mysql Tips/index.html","d99796c2ca8e2146ae7c9adf9b78deaf"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","a05394e3bbf26b8f6d2620bd15cf1be0"],["/Go 入门篇：2、Go 实效编程/index.html","2c47b65208cad2a8c401a8d60dad4a96"],["/Go 入门篇：3、Go 重要概念/index.html","521e837342e6d97505daf63f1e4d46ba"],["/Go 基本语法初探(一)/index.html","4fcf7055595c64d982e3007a8c202278"],["/Linux VIM 命令及操作小结/index.html","01a75e47638063788e1a10ca7d495c9b"],["/MySQL 基本操作/index.html","ff482a8cbc549936c59ef5689f54cd9a"],["/MySQL-列类型和数据完整性/index.html","3d10fa98e038c53ff1027fd87c356e89"],["/MySQL-数据库设计和查询语句/index.html","8c3485e8e3f5ba53f0094e40eddaa84b"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","d0341234cd72b9e514d5db1ffbe56187"],["/NSCODER和SWIFT初始化/index.html","d85019d056d590f340ca21b2fc0b7e74"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","5c10e2ce1db04a93af28fe37517944ad"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","71481fe61be43e730102472ce032a617"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","be06ec823e1acf4e2022db1a13c6153f"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","2c903daab3a9dbee1a39966a405e5ec4"],["/Sqlite 使用Tips/index.html","5e3a343207a55915db8772fee408118b"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","3216e4a26892500bf1d457925c5110a5"],["/Swift 5使用UIImagePickerController拾取图像/index.html","23192eb6d9270938d508ddeb8621633c"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","f1245227b332ca30a30a7e08a427fb52"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","d7743915c5b53b1bfff3a57ef3609866"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0e433744f23dfa4c7911bae1e384a55f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","48392cddf2be2cc86133cff6b574f31c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","37040ca9df9e46d42c0807eddb8cbb8c"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","9f37667f98e357e2bf4dc0101fe7ef6f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","f7e8a7a411894b95f269a675fa80a260"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6206e41f59756e84a918c4d9993c67ce"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","4a7b59211b2d74d4e56f58514c4da7d9"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","095bd9247560f9adf61ab145d147465a"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","07e8616097160c7b7b10ec29dab351ff"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","908cc4a87bd47c10de8545781044d5f7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","800c73edb25f0b54eeaca80089728e42"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","478d7d657b96bd1bf6d8d06afb8d371e"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d8005e6c9e1babe8f564d8c6f43c5b22"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","ec997ede86fc7bf8eecd292fe53b83ac"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","71cc9f0100a27faa38150218c3b81be4"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","a1826e9ee71d6124174748dd8b75b1a1"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d713202f0ce548f256097bd4bcfc26c7"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d31bca798487ba8920830a8cd464cc5f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","15674f02c0ac5f6552936a784e709271"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","e28a221c36be475e353f870054c3db93"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","0961d56bcdef7e107ac9664ea563e8b1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","996f78fa2fa31642c618d6048a2db750"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","28401f79bb4c7bd82fab0f6c340bfda5"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6f6c7794b05a3e748c76f15c4c7117d8"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2bf7edc71a7dd258bc84b0eb05f16701"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","a32e06b6c4a716a0fa755882d654baff"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0d75ed0f251535885334dc3774624d6a"],["/Swift CompactMap vs flatMap：差异说明/index.html","19f8b92ff2666d8a3cb588a52e22ad05"],["/Swift Grand Central Dispatch 深入实践/index.html","d262095d166a6fb09cd0f04eadc928bb"],["/Swift Lazy属性初始化/index.html","ad97c45c74bded445980b54dd4343184"],["/Swift Promises 初体验/index.html","b27695ef94176520d35b768ab4ebea79"],["/Swift Promises 探究/index.html","ce71ddb1b71adec484e1f84f976dd1f1"],["/Swift UICollectionView使用指南/index.html","3edfbff759efa5ace50fbc768afbd901"],["/Swift URLSession && Combine framework/index.html","8ce16b92d3111739759f1543d166d1b5"],["/Swift tips/index.html","b85983d362d5d65695f30e69a9b7a0d6"],["/Swift 三方库：GRDB 使用指北/index.html","9a124d6ca5cebb448d162020e8a98a10"],["/Swift 唯一识别的视图/index.html","e16490a02cae82cc1c92e27e9a0d484b"],["/Swift 如何学习现代UIKit？/index.html","10ac6b5500bfc0039b2721b51e8629ee"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","ef4b0399c546ced238277edb3d247382"],["/Swift 用 compactMap 替换 flatMap/index.html","4e89331555275518c61344c446bfb155"],["/Swift 选择和播放视频/index.html","96f0b3a753adeccfb54cad2b84f576c4"],["/SwiftUI 系列(一)：1、 简介/index.html","41f2a2a9dd5fafc779cdffdd69e7640c"],["/Swift中UIColor最佳实践/index.html","8f725c955bc95bb50c876e8fce6c73c5"],["/Swift中快速简单的工厂设计模式/index.html","9d4dcea3d1ee1fe3e7b2a101ed61dd30"],["/Swift中构造函数与静态工厂方法的比较/index.html","3fa2b8ef2ead48fcc692b40df78b1046"],["/Swift中的UITableView教程/index.html","94579dd555f526422b9d3e0bd544b9ec"],["/Swift中的懒加载模式/index.html","f26a8921606e53d053083b82efeaa044"],["/Swift中的模块和挂钩/index.html","c6f273c24d81c3b8f8ddc9165c064c6a"],["/Swift使用布局锚点添加约束/index.html","a4ccc1d1197ca9bdc89597c4bd98d1ef"],["/Swift依赖注入设计模式/index.html","197805562d3fed3502206395822f0aed"],["/Swift关于Dependency Injection (DI)/index.html","ca7fabf244093dafea43cad85e866604"],["/Swift初始化模式/index.html","98a0b15ca21f46e7edd193beb8f107f6"],["/Swift单例模式/index.html","704f9872501a652bcf62195f9acb7647"],["/Swift原型设计模式/index.html","a46d1d79fab6cbb94d2d646e0416c7a2"],["/Swift命令设计模式/index.html","ca97296dc834a306b1da48d835c6fd59"],["/Swift外观设计模式/index.html","124a86f3dbf30166c4e3069d7e6bbb63"],["/Swift委托设计模式/index.html","9d3995b6534cb76dd9968d537f52e679"],["/Swift对象池设计模式/index.html","3418a75527bc9e013a70acc5af37e2c9"],["/Swift工厂方法设计模式/index.html","33bae77093e0b00685c847261a054b23"],["/Swift带闭包的懒惰初始化/index.html","1fdaa3afd49d67d203ec52305b5b7d96"],["/Swift抽象工厂设计模式/index.html","f94d617f362f8b342151b3539d675016"],["/Swift掌握iOS自动布局锚点/index.html","d82b5bb1c78f026c772b8b412a902e02"],["/Swift支持旋转的自适应单元格/index.html","2b1dfc3cd7c045e2bc709f0f10067dbf"],["/Swift枚举值/index.html","04a422ae6d2fbacd48c01ef629fffd44"],["/Swift生成器模式/index.html","af6fdc2095c7f3202e5fccc34ad966be"],["/Swift结合Xib文件自定义UIView/index.html","06311aa3c702ae7decef777914a19394"],["/Swift编写的20个iOS库(一)/index.html","83344374bf691a6428cd463480b8794b"],["/Swift迭代器设计模式/index.html","d38cfc9bae9e45531b072f4f4e764600"],["/Swift适配器设计模式/index.html","5e1be9a9250c218c9fd319483031020b"],["/Swift静态工厂设计模式/index.html","889e6cf5f141cc96a350de09706cfe78"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","ed2c93e9145143629d3bc43d9e091f7a"],["/UICollectionView data source and delegates/index.html","6062c4ddc0c0205f22279da1b1c629be"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","8e33a80ff328b3558b05d5bb4deff0e5"],["/UIKit初始化模式/index.html","9f1cb3c160e6c4ede4489b05f96292a3"],["/Ubuntu18.04替换国内源/index.html","7411cb3e4b2b905c04248e9099aceaa5"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","23b354b813c0335d645dc69fe5c63510"],["/Vapor系列 (一) :  Vapor 初探/index.html","48ead2d0d99571f0df46dc555c8c5a98"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","a1505e7e8ce7294aff60ba0ab94a738c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","0f882faef3f1261b69698cab4fae9804"],["/Vapor系列 (五) :  使用session进行authentication/index.html","bbfb9410e9f60189dd765fdc310edf4b"],["/Vapor系列 (四) :  创建博客数据库/index.html","546664993304b842e40b24a4ba746ec0"],["/Vapor系列(六): 徒手撸一个CMS/index.html","684fc0228385c4fb4511b880f1e194d2"],["/WKWebView与Native交互注意事项/index.html","854aeb23532ef04d3feceb4acbc29b2b"],["/Xcode扩展/index.html","a179f1f1f819c79fbf922b64beb84bd8"],["/about/index.html","608ca3bc97a2d9eb56a1567025ce75ef"],["/appleOS的Networking示例/index.html","77756480ff513852b9d6d8c5cd0b71d4"],["/archives/2020/03/index.html","b6fb36358c9cfcc92d31bc89451b66d4"],["/archives/2020/04/index.html","5a96ee11fedbe5138ccc46073a832991"],["/archives/2020/04/page/2/index.html","46c55e2e6069425e8508fda3e6a71290"],["/archives/2020/04/page/3/index.html","9e00ffe949d08a5b25dab6e7048bf621"],["/archives/2020/04/page/4/index.html","ccf955ad167fe8ad011464f3dab4bfac"],["/archives/2020/04/page/5/index.html","2b7d1d3e8b77173c6dc2e9e43694dd10"],["/archives/2020/04/page/6/index.html","b1f9b1057f935517d1919bcbf4318f85"],["/archives/2020/04/page/7/index.html","9d906919274063b1365c2f06098a0aeb"],["/archives/2020/04/page/8/index.html","8aff10376d846ea063698967f3c05f64"],["/archives/2020/05/index.html","f79edc7c0354fdfca0d541e07e9835e9"],["/archives/2020/05/page/2/index.html","ea8bf027375fe868fb2d4edec318cf6d"],["/archives/2020/05/page/3/index.html","06cbccc7b958a82c574cc11547a21896"],["/archives/2020/05/page/4/index.html","0c5006141202de5b26e79ead0359f95d"],["/archives/2020/05/page/5/index.html","e6a5738d970d26be71e3bb80bcefdd25"],["/archives/2020/06/index.html","bcfe677e2475aa47e3ad78fb959fcb28"],["/archives/2020/06/page/2/index.html","a08cdc63024086337e947c87a03465f0"],["/archives/2020/08/index.html","2ab73104b5d70431876b186a810275e4"],["/archives/2020/09/index.html","bb3d61fdd30b8db375258b62ca10f7e6"],["/archives/2020/10/index.html","7257bfe16dc011d2fc94a1bed5f72d82"],["/archives/2020/11/index.html","a36e2086f7246736d0b377263e31c861"],["/archives/2020/12/index.html","6e153541609a2babea1753b35ed75d47"],["/archives/2020/index.html","c800bd5a416d63b3209eb32db86d83d2"],["/archives/2020/page/10/index.html","eec8735fa2478491dc98b7f0977d13a1"],["/archives/2020/page/11/index.html","54d1627034b8fe9c8fd4c0cd9e815b4c"],["/archives/2020/page/12/index.html","d7bae369394d8bd055ddbb4f049fb974"],["/archives/2020/page/13/index.html","73a6d6ff191850d51433bda19b1461b5"],["/archives/2020/page/14/index.html","f7ad5134dedd650fccb7f579c98c97a6"],["/archives/2020/page/15/index.html","4fd3d1c3a63519d0908d7dc0b235af8b"],["/archives/2020/page/2/index.html","fd2453b97a4db0e3069e984331f0ef9e"],["/archives/2020/page/3/index.html","b62b4963a16ba86f83e0df2341c9a38d"],["/archives/2020/page/4/index.html","cfcc1149e077fb1f42e4dc071d05314a"],["/archives/2020/page/5/index.html","d694b923ba867e6073c97ff757150c7a"],["/archives/2020/page/6/index.html","c183d6ae32aed924a11d77b8c1f2fe67"],["/archives/2020/page/7/index.html","fd0da68c658d5284c8eeb73e1a7abf97"],["/archives/2020/page/8/index.html","637f6a12df7e6da6a5dbeaeb21e1e1bc"],["/archives/2020/page/9/index.html","92bec5e1e21a1d269f84444ce4eef034"],["/archives/2021/03/index.html","c53b3646ab9f026f0dc9efc7b78c5e94"],["/archives/2021/04/index.html","5203fdddc365ce79bde9e547cefda643"],["/archives/2021/05/index.html","5d9aeac3ea13dfc44e374f1955170195"],["/archives/2021/06/index.html","a5a3c7700e831d0447e81c251b6521a6"],["/archives/2021/07/index.html","03e289813fd691e658a75e5a99f60f0f"],["/archives/2021/08/index.html","68fce771393378b8b7b7410c87c5062f"],["/archives/2021/09/index.html","25dbe409377dc1a90041b7e89eb6c354"],["/archives/2021/11/index.html","9ff9f28ecf86c3fe585628e19c8c21e1"],["/archives/2021/12/index.html","cb4720c7f811ec3aac41852726cf9fe5"],["/archives/2021/index.html","92d0b484ef8dce53c42b35ce9d32f227"],["/archives/2021/page/2/index.html","1d3c4e484ea49dd1123a0b67cac4eb25"],["/archives/2021/page/3/index.html","8d3943603dd5003a5f74aa27e0c489a0"],["/archives/2022/03/index.html","009855c278457f74a2940e892a77bcf6"],["/archives/2022/04/index.html","b24ed005714bf67b72a937e0295a353d"],["/archives/2022/05/index.html","9561c13816a8b39c736d4bd5a453133e"],["/archives/2022/06/index.html","75946ce94729c36218aad2ce4ca03240"],["/archives/2022/index.html","9d49b47dbd3df914d152808494ab970d"],["/archives/index.html","72ff1f80128737b4f08b04e57bb45905"],["/archives/page/10/index.html","8d9ae47fcb09fd39fb2831c7a9ab8159"],["/archives/page/11/index.html","717d06cfa5ee909ce3a0220d31058772"],["/archives/page/12/index.html","28c47ca718334413dc92b17eee7b7f9e"],["/archives/page/13/index.html","628f915c47cabd8933d79da2ed6757a8"],["/archives/page/14/index.html","2499140562187f66410e6957f079db2d"],["/archives/page/15/index.html","a5f998fc427a1b2701b72ec1a8646ca8"],["/archives/page/16/index.html","745bd4bb4578e002eaf7c242a98b12fb"],["/archives/page/17/index.html","73677494d8d52b9cddd308585f620057"],["/archives/page/18/index.html","f3a0f973b1cf2d21eccdc3851ba54f57"],["/archives/page/2/index.html","4f4c799b8b7ca42cd0690b17c4e84f43"],["/archives/page/3/index.html","dadb4d40038842d706077c48ae827304"],["/archives/page/4/index.html","9f8b3dddd353c4612cb19c6374345e75"],["/archives/page/5/index.html","7d847503d0d64d768a722c25c392a372"],["/archives/page/6/index.html","9092f57947b2c6e7583946cd5fa1f6ad"],["/archives/page/7/index.html","dfceb85d92b8ed3704509ccda618515c"],["/archives/page/8/index.html","ef9511a39b6f0ec15ed45def4a6a382b"],["/archives/page/9/index.html","eac3e8929bd6c63d4fa1765485cacedf"],["/bugly 上传dYSM文件小记/index.html","5138e07c08e1730c113072cf8484c185"],["/categories/Advanced-Swift/index.html","dfa09da9805535dc569e7cf6a19088e6"],["/categories/Advanced-Swift/page/2/index.html","9d930e685c0af3b7015e0d2bea732191"],["/categories/App-Architecture/index.html","15e1aca646d55637127a30eb553ee204"],["/categories/Array/index.html","846a4b585414ec09a6554f917a59cf20"],["/categories/CocoaPods/index.html","88da5a6b51cb969309ffdd22730ae8ec"],["/categories/Codable-protocol/index.html","e4ca4055416a519445fb80f7efdee995"],["/categories/Combine-framework/index.html","02820645abc217bcfedc42598a6c3225"],["/categories/Combine/index.html","e9c9f622fe0d1642ca3e30c70d3d8236"],["/categories/GRDB/index.html","cda567e4ebfd995afdc48b4d361611a7"],["/categories/Go-入门篇/index.html","17d28445d863fdb4b4b27db74722eb1b"],["/categories/Grand-Central-Dispatch/index.html","4cfbc66f856a758a7ac7368ac2892187"],["/categories/Homebrew/index.html","29bcd66d1d9559204ba151405e608345"],["/categories/Linux/index.html","9e593d9cb32affd01f920737f6a5517c"],["/categories/MySQL/index.html","8bee92ad7689a4023fdcf8fe69b3a311"],["/categories/Promises/index.html","1359569646316c36deef088127eace87"],["/categories/Protobuf/index.html","d08e1c22bdb503bb4f8fcd06d0748686"],["/categories/Result-Type/index.html","dab61adb5417eb4fe505421d4501c6a9"],["/categories/RxSwift/index.html","af42991d8b237c9994cdb4b5908a75cc"],["/categories/Server/index.html","06344471a62d1e2f7580310e82108a83"],["/categories/Sqlite/index.html","45c0b34d907f6847b9fd653864c390d7"],["/categories/Swift-Apprentice/index.html","a320a52407c24c0b91d6af656988ca0a"],["/categories/Swift-Apprentice/page/2/index.html","820d9c95ba9067b496a9c90c9e3fd534"],["/categories/Swift-Apprentice/page/3/index.html","3a7a58d8a45a5377657376b9d98f7441"],["/categories/Swift-源码阅读/index.html","b1f3a1e57a3065a435250acc5eac32fe"],["/categories/Swift/index.html","0f19eea5b4386d4755d8c67a51b2bf56"],["/categories/Swift/page/10/index.html","2663a706859a44aea5e1bb8a433f60a7"],["/categories/Swift/page/11/index.html","4e308705f1bb8602d467b61e6b0fff3b"],["/categories/Swift/page/12/index.html","b56e5d72337f9c88d9b9384c6ac1ac19"],["/categories/Swift/page/13/index.html","2330a706fb8adb446e64aa4f90d50a38"],["/categories/Swift/page/14/index.html","a3ecba4cf5d30324677a818b46d8e97c"],["/categories/Swift/page/2/index.html","0964eecf0f125fb1ca447cdd64ae1496"],["/categories/Swift/page/3/index.html","7a76f533ae51f6a10f23f608b28df4de"],["/categories/Swift/page/4/index.html","d379201153b9a616e1a6d34223c469cd"],["/categories/Swift/page/5/index.html","7070f2038ad1e0161fa062ecaac4f229"],["/categories/Swift/page/6/index.html","055d5485e02862f7a1df80b37b1ea97b"],["/categories/Swift/page/7/index.html","090551bdd69febd9c1038b905f630ef1"],["/categories/Swift/page/8/index.html","bca74200945fb70dd6ce80c1f45a3288"],["/categories/Swift/page/9/index.html","279ebb4d00993d65f55ba52161569f63"],["/categories/Swift5-2/index.html","e530862b7e2afa200a71768ebe6c9186"],["/categories/SwiftLint/index.html","8cde7e43c9c58537639c51891ac17ed4"],["/categories/SwiftUI/index.html","53c618dd311692390cf852cc90bed552"],["/categories/UICollectionView/index.html","d57bd992c953d6d42be9acce679be4d4"],["/categories/UIImagePickerController/index.html","cfefd48dfa14916c9c349ddfc8ec5ef3"],["/categories/UIKit/index.html","eec5be16232c3214e531aeba8952e95b"],["/categories/UIKit/page/2/index.html","b9cf9fa6c8eb7cacd058ad96e415fbee"],["/categories/UIKit/page/3/index.html","c6be0813ce50377907bf1eaf85d01285"],["/categories/UIKit/page/4/index.html","fb36e0198507136ccbdfc339d69a46ea"],["/categories/UIKit/page/5/index.html","04c09ddf6423a90b5e126ad1c661dc61"],["/categories/UITableView/index.html","f4f82553919744df20d20eac3951b210"],["/categories/Ubuntu18-04/index.html","2050ef6a60bf20617be80c7daade287f"],["/categories/Ubuntu软件源/index.html","10706cff94234c8769b2e0493bef3d4c"],["/categories/Uniquely-identifying-views/index.html","52003d7060ecf5c722c43b8fc9371286"],["/categories/VIPER/index.html","d482e1b0ab89b7a9102a8299b9f8febb"],["/categories/Vapor-4-0/index.html","a3604d1c22a105011ef0c6e32a390a8c"],["/categories/Vapor4-0/index.html","4bc1c997dafcd8940dd0c2acd71d9828"],["/categories/Vim/index.html","b6208a0aec4faaddec4095d47ff41c80"],["/categories/WKWebView/index.html","2ce05ac387b0cb51a717f831d8010a14"],["/categories/Xcode/index.html","cc3d8e02eb6803cbb90da015c35317a0"],["/categories/appleOS-Networking/index.html","7a7fd32b58206d8facee5ca2f9e4a4d9"],["/categories/bugly/index.html","add7c5875a78e937882c175a40444e99"],["/categories/enum/index.html","ae79b5467db394e407ea86e21317a8db"],["/categories/git/index.html","693e12a3e83fa0cfc4288f126b96396b"],["/categories/go/index.html","c0aa198f2883485c800176c10bb37025"],["/categories/go/interface/index.html","2abfefe2add6f698cce7ae6606c32fcb"],["/categories/hexo/index.html","bc29c487c5de5eb02adb4725ffafb4c3"],["/categories/iCloud/index.html","c13655b95bc734fd9c1386ae60e21b1f"],["/categories/iOS/index.html","bb92a709b2c04c1989b8c965ffb43b36"],["/categories/iOS/page/10/index.html","3c9fcd3adb9db1454af49e1c052c9689"],["/categories/iOS/page/11/index.html","784747786e2650cfe8c963677a4d1616"],["/categories/iOS/page/12/index.html","ce5281ea9e084ff00bb89d7b521c4694"],["/categories/iOS/page/13/index.html","cda5f6dc631781aced66e71ba5a093f7"],["/categories/iOS/page/14/index.html","411cb7586bfa7704b2bc5d21507c538a"],["/categories/iOS/page/2/index.html","20b287817d046ae895a6a50971a18533"],["/categories/iOS/page/3/index.html","21d9e310d61145b98f449d190e689650"],["/categories/iOS/page/4/index.html","e6055d60bdf58f9932b0a0ae6d4968b3"],["/categories/iOS/page/5/index.html","f5323828b252ba392a9379aab441bd36"],["/categories/iOS/page/6/index.html","9d4cdb30904274c4daec3c3667099995"],["/categories/iOS/page/7/index.html","273b2a6566386e6d6619a16d71f48dad"],["/categories/iOS/page/8/index.html","6449374089e3a5847b215eda8369facd"],["/categories/iOS/page/9/index.html","9021d85a8b7817b13477c3d0f8ac509c"],["/categories/iOS面试题/index.html","1b0c78225284dc419a8b3ac878929745"],["/categories/index.html","c08f5341962c360f49bba1470adb169e"],["/categories/random/index.html","8b23f36ec41ab2f3aa712cb7c29051b8"],["/categories/三方类库/index.html","eae0c35bde9d7bd1c684664d8c5d4dcb"],["/categories/函数式编程/index.html","74a53f7078683a930c491b35be898f9a"],["/categories/子类化样式/index.html","40da973874767c3be63fc79a6d0abab1"],["/categories/开发技巧/index.html","58f11a15cc77fa9df58b97b35f7763bf"],["/categories/开发记录/index.html","de33f351a06f9fd2a531f98cc2f4d3da"],["/categories/数据库/index.html","99a08ad2334b183d7001c8a3d6e4122b"],["/categories/架构设计/index.html","43c168841fdc67305790cfdf81d7917a"],["/categories/测试/index.html","c10e8af8595f90bce6401ee272fdb130"],["/categories/用户体验/index.html","336efe1ae4049446b43bc190f82f407d"],["/categories/用户协议与隐私政策/index.html","9f5e37e8b7e93dd86879332bead9ba39"],["/categories/组件化/SDK/index.html","7dcb40a47234e4a9aaf9b2b20f324ef0"],["/categories/组件化/index.html","d5a46fee638258a8b9c16b0f42a9fec7"],["/categories/组件化/模块化/index.html","da698fbffa71808eeb102874e49ee5d7"],["/categories/设计模式/index.html","5b5a7e81ef1151ad55707047e5852a35"],["/categories/设计模式/page/2/index.html","13a4cf73e51de7aed70435b1ac3d362f"],["/categories/设计模式/page/3/index.html","3afba933d5663856dc0ccfa591a048d3"],["/categories/逆向/index.html","87215cddb4a2792f601e153292eee1f8"],["/css/main.css","f85bb6b656c6a91b8cc2435c898070b3"],["/go moudle 导入本地包/index.html","a05db1a1b1ceea3ef595442837f12b74"],["/go 每日一问/index.html","db8ff377e59145e9cd09c2a584723574"],["/hexo部署失败/index.html","2a295eeb3ee172cc96172d359d7382a3"],["/iOS 15 适配/index.html","c66114ddbd4f90315a0252e11bafc16e"],["/iOS VIPER架构深入实践/index.html","53b3b8a5f75b0193ac14f5cec4962704"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","8b8f3047707b154aed94ec5301c1c7d7"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","27d8530043fb31f4138a01fa61230572"],["/iOS 自定义视图，输入表单和错误提示/index.html","b25df81a5eb661a14bd0ecb09b9fa298"],["/iOS如何使用iCloud文档？/index.html","f3cd60220c1f26b365288ce73240817d"],["/iOS子类化样式/index.html","bcfbcc40722cfe04a191ec8ac6dc9351"],["/iOS开发记录<一>/index.html","4e1963929187bd98be0a80c4d5d76ff3"],["/iOS自动化布局编程/index.html","7ce21f4b4ef367e14555e64ff0d41a12"],["/iOS自定义转场(By Swift)/index.html","2318565ba1dc47c3ae8303055f07318c"],["/iOS项目架构：使用VIPER/index.html","28212cef1c23ffc6667d956c4ecb805d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9f4ff8f8b525a906b1173d0ae3bff8f1"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","49e388482feb337f72901d0d1c9e3049"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","733bd2cfe378208603c7c7cdf1799b3b"],["/page/10/index.html","3addad639c5cb571164043dd30ceea84"],["/page/11/index.html","6fef2479ab80c76bc9928eb83e99b970"],["/page/12/index.html","cddea0ca991c41e65c3bf0b305b973c2"],["/page/13/index.html","d24bf308163d46a81b36a99ce633c263"],["/page/14/index.html","74619e3fefe4ae0d012254d5ee999c8d"],["/page/15/index.html","79994a859d79417f19e4310372da3646"],["/page/16/index.html","1f415a99fc0fabcecf76f4454a117d8e"],["/page/17/index.html","455b7e8e2c17ed69e99738e1fc4834f2"],["/page/18/index.html","020c9561b192457a0628291cc375028f"],["/page/2/index.html","e1976ae028fcf4ab41a1e1c9463382bc"],["/page/3/index.html","3108c6f145dc816dab913a8bf548752d"],["/page/4/index.html","238b249b95f3ead9914fb60d21759ad1"],["/page/5/index.html","b94fd6baf0a0e01d1ec87c376e28ce41"],["/page/6/index.html","cf82f737b8e8115dee4b1e1bc44aede4"],["/page/7/index.html","c1071fd6f1c98b67f7fc3b8553b9630b"],["/page/8/index.html","dcda30d4f7cf11a1b9e5434c00452226"],["/page/9/index.html","9db3d40debb798afe4d7126ff77d0654"],["/schedule/index.html","458682ce346f6fbd2810cb0b329ff3a7"],["/storyAppPrivacy/index.html","0bcb9fb2d8b38fa13666f58e5dfd2144"],["/sw-register.js","57e81f72b010eaebb997a926896c8880"],["/swift 专题：函数/index.html","5c05282161288c451ebe638cc72417f2"],["/swift 专题：闭包/index.html","2f2fd984543703329f56c8fdfb180103"],["/tags/Advanced-Classes/index.html","7f2c515edbf87f50fabfa45aec7cfa9d"],["/tags/Advanced-Swift/index.html","0ea79c498b01bc995dc1de838432458b"],["/tags/Advanced-Swift/page/2/index.html","457d1e38e051ff1359f7d32af60f7154"],["/tags/App-Architecture/index.html","b0a2190ae67347dd400267d863b9e2f5"],["/tags/Array/index.html","c04a02301adf5bea76cc5f69720b41a1"],["/tags/Arrays-Dictionaries-Sets/index.html","3633e9f9e836055528fcc6ba9a56994e"],["/tags/Authentication/index.html","50c121620c38e5def2eb4bbe89bdc0ca"],["/tags/Build-in-Collections/index.html","5a0def93b75c111d6ec975191965dadb"],["/tags/Building-Your-Own-Types/index.html","1675b34e7b51de1301aaf280f8f179a4"],["/tags/CMS/index.html","775cc8bc039bae2ffb8cc984b14dfe07"],["/tags/Classes/index.html","98e7bc377bb1dcccb63b172c0327b687"],["/tags/CocoaPods/index.html","539ceec6f40a78dd569787544a1d5523"],["/tags/Codable-protocol/index.html","df6bda660ea1d4c8e0c18fc1865dcce5"],["/tags/Collection-Iteration-with-Closures/index.html","0473c42cb7c9bcda6aea69680a02ecee"],["/tags/Collection-Protocols/index.html","6560e0190bd6b61d2fd0980d05f92b26"],["/tags/Collection-Types/index.html","bdc59870367272513ce1391ebd5f38e3"],["/tags/Collection/index.html","7755a4a091584727bdf500b29a2e5f54"],["/tags/Collections/index.html","9a67ee8e15d570411b030a81464bc435"],["/tags/Combine-framework/index.html","97396502b21f57d2dedecc6570932930"],["/tags/Combine/index.html","8a54e83289f72faa98354e0b3bca01d2"],["/tags/Dependency-Injection/index.html","7df88da85ccaaf87538f6035c5aa4a13"],["/tags/Encoding-Decoding-Types/index.html","d729b1383d321988894a2b7540b35265"],["/tags/Encoding-and-Decoding/index.html","f84f5faf7526ef08a50d06e0c0258023"],["/tags/Enumerations/index.html","5eeb9a566a88dfd9ebd5c719f6963485"],["/tags/Enums/index.html","24a1a2887207bfe75b864f3d52e4f7e2"],["/tags/Error-Handling/index.html","25481fa775f9632269472b5ce39046cb"],["/tags/Functions/index.html","99ca9a562de99cd875c458d66b11925f"],["/tags/GO/index.html","2b43299f43b7731b8d8ef503aa1891df"],["/tags/GRDB/index.html","eaf5517f92b96ff94c0889fc00a8043d"],["/tags/Generics/index.html","83338fa9772218021d5d956bf7550fbd"],["/tags/Grand-Central-Dispatch/index.html","0dabe846b741d9f43e4bd8e100f15958"],["/tags/Hello-Vapor/index.html","5eb5a2a49e7a3dbdb64ee2a0a9f1b0ef"],["/tags/Homebrew/index.html","70bd00071cbabee7f60907c355114eab"],["/tags/Interoperability/index.html","6f133add77c8c2745edc131dcfdfd53f"],["/tags/Introduction/index.html","356271163a5859c23c7267b5a0e59054"],["/tags/Leaf/index.html","6aa8d9658a59c35df711ec7abecba633"],["/tags/Linux/index.html","70a7784c18e5900ffc8039a725e4db56"],["/tags/MAC/index.html","26ee68c6da2e532ebfaf7830d0614fe1"],["/tags/Methods/index.html","05c7c0fabc04c8d8d086ff17eb3d4667"],["/tags/Modules-And-Hooks/index.html","6acf8d34ee1d42b7f4c21e61f079f069"],["/tags/MySQL/index.html","5e2208ab5044d71d7a10a25c2a1b6beb"],["/tags/Optionals/index.html","6c71252bf6729ababd5604c085701db5"],["/tags/Promises/index.html","5a320eb5c0e8235efeaef0643bc71ba9"],["/tags/Properties/index.html","2319c6e6ba79f1398816511952993547"],["/tags/Protobuf/index.html","b43ba5977fa43b097ed8b9367676669d"],["/tags/Protocols/index.html","4e09d6ee069e1f37cd07eb81425b8fa6"],["/tags/Result-Type/index.html","fd8bad5c4730a8f94f52ae44865206df"],["/tags/RxSwift/index.html","720b2683397bf294844c16ec737601a7"],["/tags/Server/index.html","290206d6146158306a85872ca41b539a"],["/tags/Session/index.html","10731eea6868c34ab6ce80e90e072879"],["/tags/Sqlite/index.html","a7999cb92397318f91960087ca4d5a96"],["/tags/Strings/index.html","de24282931107bdc01f779c8d94e1470"],["/tags/Structs-and-Classes/index.html","5d525b335117655070ed54af58b4b31d"],["/tags/Structures/index.html","68239c1404b9ebb443c98d4c7d900a5f"],["/tags/Swift-5-0/index.html","c991e148ea04153459f01efb7a6b37af"],["/tags/Swift-5-0/page/2/index.html","bb76f074cbb454e46c6cd496702e8d86"],["/tags/Swift-5-0/page/3/index.html","a06f95c759bd19f41e1d286e9e02df5d"],["/tags/Swift-5-0/page/4/index.html","1e8c2c24994cdab76c66d41410520254"],["/tags/Swift-5-0/page/5/index.html","8d20c3563fa2f927429d965ddb576d6b"],["/tags/Swift-Apprentice/index.html","8b1afc33339a80e2796f0e6c643f61e9"],["/tags/Swift-Apprentice/page/2/index.html","8c74822617e2fa4790522a4669bd7859"],["/tags/Swift-Apprentice/page/3/index.html","c78f40b60588d08a164fd77833f81e0b"],["/tags/Swift-Package-Manager/index.html","21a6629c3f24ea283aaf01ce8edf35b7"],["/tags/Swift-源码阅读/index.html","4f99a72c76c2275916a2d2cce0d15c2a"],["/tags/Swift/index.html","a31b1dc4a6b985d174a09bda0ce4c250"],["/tags/Swift/page/10/index.html","ef902063ff9e5958560af5d4728ea055"],["/tags/Swift/page/11/index.html","ab2d4e096bc33a2c0053687f92c989db"],["/tags/Swift/page/12/index.html","d0e2318e80a2f275173a8778666996c6"],["/tags/Swift/page/13/index.html","9e718016980534c5b40f94e1dc246778"],["/tags/Swift/page/14/index.html","6f767a1113345527ff8efd3364c5ce32"],["/tags/Swift/page/2/index.html","1e9c958fde86880737a1c4e15809e635"],["/tags/Swift/page/3/index.html","1b27e6e43c7ce3c505a4d23ff468529b"],["/tags/Swift/page/4/index.html","34d4cf5e09c8492e36e2ece84438161b"],["/tags/Swift/page/5/index.html","8aef948f5f63b7e8815cdaa45e325c75"],["/tags/Swift/page/6/index.html","1feb050f9a3dc9481d9626559eeaca67"],["/tags/Swift/page/7/index.html","cc9536acec148cadd5d6f2a1758e5e21"],["/tags/Swift/page/8/index.html","15ef960d5dc6c56d803ef0ca6a761fdd"],["/tags/Swift/page/9/index.html","580f54565fe83655bca6abe396d21bac"],["/tags/SwiftLint/index.html","937e41f67d7a73029682b23808723c80"],["/tags/SwiftUI/index.html","acc637cfff7c81e8140579161b8c0bab"],["/tags/UICollectionView/index.html","a220da3a933858e7b44123517ed9c955"],["/tags/UIColor/index.html","bb8dbd1841c4aad2e93b6ade3df19333"],["/tags/UIImagePickerController/index.html","68d70e85fc0186e6616f439af5e94503"],["/tags/UIKit/index.html","8d32fc6436986453654df7c28dbfeccb"],["/tags/UIKit/page/2/index.html","b5b7d0f18c7f2d63efe5b7c6f4249c72"],["/tags/UIKit/page/3/index.html","d987ff9abb509da10c5511fca6087259"],["/tags/UIKit/page/4/index.html","06cd8dd73b3418d223c1b309b1b0d817"],["/tags/UIKit/page/5/index.html","f4fff612ab94763d10153ae5cbe8c2fc"],["/tags/UITableView/index.html","2edec796bda66f27d6ee6128c50f4a5d"],["/tags/Ubuntu/index.html","232bc3ce736f6bb334d23ef96cb7d961"],["/tags/Uniquely-identifying-views/index.html","98ca396e7792d42b5f71477ea21fdbcb"],["/tags/VIPER/index.html","8af5da1565f91fbc043469cf5cb6722e"],["/tags/VMware/index.html","965e151ee0e8f4dd3428a62cd32564cb"],["/tags/Vapor-4-0/index.html","cebea58d9c441b1a499d0c8346128515"],["/tags/Vapor-初探/index.html","6ade21199cfde98b2856f07137cc8883"],["/tags/Vim/index.html","1a92e3f435ebcccf6ea774d0b4e67831"],["/tags/WKWebView/index.html","984625953ea5658b1675dcce5da944b5"],["/tags/Xcode/index.html","f55931097e08255132447d106f33e017"],["/tags/appleOS-Networking/index.html","cee005baa8c89e76cbc1688bdb9c3511"],["/tags/bugly/index.html","1cb7f55415bbde8d51e9c6b610c59dcf"],["/tags/enum/index.html","9ee4589dbee37c0953c32bd46697144f"],["/tags/git/index.html","6cad1db30965225e763652807ff69fca"],["/tags/hexo/index.html","319c81305d0f2fac6dd957ad9126301b"],["/tags/iCloud/index.html","58419be86b5afd5d59bb8844945917ed"],["/tags/iOS/index.html","200acc44012aa679d6d885fafef63d58"],["/tags/iOS/page/10/index.html","b96383a39cac843a948638b6cd2a8329"],["/tags/iOS/page/11/index.html","9d11fc065fb280582ff4b83b325a339f"],["/tags/iOS/page/12/index.html","ca99d0fb16298ec41831d39ebc3ee1e0"],["/tags/iOS/page/13/index.html","89fe11ce77bc5b952d8a66302b6f0a8b"],["/tags/iOS/page/14/index.html","f71c2b4dbc176d0d6c7f3be8ed151c28"],["/tags/iOS/page/2/index.html","486d24ce6c76ec4c36cad14bb8f166c2"],["/tags/iOS/page/3/index.html","11c78d2864dd78b3a51fa044ac1a02bd"],["/tags/iOS/page/4/index.html","a627830107704ee77cded0dd35e845c0"],["/tags/iOS/page/5/index.html","154d81f61d60240971a15e261b22f47d"],["/tags/iOS/page/6/index.html","d906fa9cf91e0d781e743c738f986fb3"],["/tags/iOS/page/7/index.html","c42f1584eaec194120428ad43b62bf06"],["/tags/iOS/page/8/index.html","bcc06254446295217e376eaee858cb8b"],["/tags/iOS/page/9/index.html","eb4db1adaff12802db02b2dfab9c42aa"],["/tags/iOS面试题/index.html","ff609675149cfb333d311c0676ac2153"],["/tags/index.html","2407a6a19c53565a0c7ee9f26c42b792"],["/tags/interface/index.html","c1432fb67ef505c83c1f595e74af34f2"],["/tags/non-optional/index.html","83f535ea71ef99db5312e91920388d6e"],["/tags/package/index.html","c52cab6369a85b70b13994bf3b619541"],["/tags/random/index.html","97c73bd752719bb33c82d07090da788e"],["/tags/transition/index.html","9472224a47104cb276d82a3adbaa9fbd"],["/tags/三方类库/index.html","d61c217ae980eb737d7fc8db5b847ea5"],["/tags/依赖注入设计模式/index.html","0ef9a2730068f78df1aac1995a6ecedb"],["/tags/值类型和值语义/index.html","24f469335adcda2465210ef00a1cfe66"],["/tags/内存管理/index.html","f63eb968ff298fd91e596d7e676f76c2"],["/tags/冒烟测试与回归测试/index.html","4f3c1b71d134cbafeb03461d7c52bd17"],["/tags/函数式编程/index.html","ef25a8dc250ba1d4487ff8d638095da6"],["/tags/创建博客数据库/index.html","206003ef21f7ebec07b80fb6f84413a2"],["/tags/初始化模式/index.html","59b69011765823381543d5895152191d"],["/tags/单例模式/index.html","4d152a1009e9fe450fed13f46a530a10"],["/tags/原型设计模式/index.html","afa8a9fcccae1e3ed08c407c58e13056"],["/tags/命令设计模式/index.html","a3905f228ecd584c317227f205b96374"],["/tags/基本控制流/index.html","df1b6fcdff11e884be03ffc51e24f521"],["/tags/基础语法/index.html","ff79f4a3bf107bb73627fae1842a2a5c"],["/tags/外观设计模式/index.html","2f843139b4e8bc6176bbbb4f74160710"],["/tags/委托设计模式/index.html","903579e8b965cf341ff00fda7af6bce8"],["/tags/子类化样式/index.html","fce0aa3cc922e5f182b111d339011fdd"],["/tags/对象池设计模式/index.html","de735b246d13c47acaab5bea1022705c"],["/tags/工厂方法设计模式/index.html","8729cf93d06124b665668584fb135e1b"],["/tags/工厂模式/index.html","4c7ec8b3073b953471284f9ae42cd692"],["/tags/工厂设计模式/index.html","f19cf94c7476565c744f6fdd15119b3e"],["/tags/开发技巧/index.html","3c3fd01028f2f753f827eca23732846a"],["/tags/开发记录/index.html","e11624e1b228e505b9bd6ea6831f2462"],["/tags/懒加载模式/index.html","4200d7a9449d4192b0cb20c85cf3317f"],["/tags/抽象工厂设计模式/index.html","cc2290906ad493ad28e375f77ba5cdf3"],["/tags/数据库/index.html","80107150341081dec4543049b5d0786c"],["/tags/构造函数/index.html","df6a7e555e185e35bed6407491619d17"],["/tags/架构设计/index.html","24caf0d9a558e780e4edacec433fc98a"],["/tags/模块化/index.html","ed0a80f490963603d13e19ab22ccd4f1"],["/tags/模式匹配/index.html","2e6268bfcbcc15216a4b2aab460ba178"],["/tags/环境搭建与验证/index.html","e0079abb1547bff29a6523439ffc994c"],["/tags/生成器模式/index.html","2bd132f2d775e8533e8e45e39c6cc395"],["/tags/用户体验/index.html","102a7483c60814a636c61a4c38d349fa"],["/tags/用户协议与隐私政策/index.html","ef17e558ed9979633d4a62819222493e"],["/tags/类型与操作/index.html","efd2ae7e7395a8d87ed10af5a4c25dcb"],["/tags/组件化/index.html","9022f0edde5aaddc87c68bd0b4a730a2"],["/tags/自动化布局/index.html","a1784e91587ac345bc4b959f55d87df7"],["/tags/自定义UIView/index.html","6f9edd84bbaa37d45439846d96f2884d"],["/tags/自定义转场/index.html","8400736ca4ab4ba0ef688579160fc8f5"],["/tags/自适应布局/index.html","e911904a2a6db32c7af62592f1d85d05"],["/tags/表达式、变量和常量/index.html","5c3773a6ebf1b35e861d4c8e662f1800"],["/tags/设计模式/index.html","ff185c41390ffa5f234bd66fe62f9406"],["/tags/设计模式/page/2/index.html","c505d1bd69125ae59d8ea1fddb1b50eb"],["/tags/设计模式/page/3/index.html","a543cb306d0cb246cd275b4573ed4b94"],["/tags/访问控制和代码组织/index.html","d5662c29c37c9aa12e2d5150486801b0"],["/tags/运算符，下标和键路径/index.html","59c2535bc001b4966204d38fae08e75b"],["/tags/迭代器设计模式/index.html","557f4ec21229e3fb8960af19ee18f59a"],["/tags/适配器设计模式/index.html","3dcf329201e07253c9368119a9b04eb8"],["/tags/逆向/index.html","a9b5c25762dda875a13ef96f799cb9e8"],["/tags/错误处理/index.html","da7fdc1630ade5a0942e40d359fd6286"],["/tags/静态工厂方法/index.html","13e0c25e99c3a3cc116f879e30b2e3bb"],["/tags/面向协议编程-OOP/index.html","d639afdc5babfd26a4fc26c365838507"],["/tags/高级主题/index.html","314ba2df879a7576ca70ae341e689349"],["/tags/高级协议和泛型/index.html","ad0f18a74757ef924eed5e5757041589"],["/tags/高级控制流/index.html","6ed1b6e02e3e3558ca719c3aa44618ec"],["/xcode 常用的快捷键/index.html","7cf2ed31ff82fe2e8b443eb0d9ff7637"],["/为iOS应用构建输入表单/index.html","c45078fe4a197e98ab0a88d646722f3e"],["/产品开发的幕后花絮/index.html","359a232777992c0748b5ce1e25d3b8cb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","23f309c18fc9bf45b84c2ef2a7295dba"],["/冒烟测试与回归测试/index.html","a3bf797fa55f8036bd3d65a06ffc4bdc"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f43d1d3603dcbd1238c0738c0dd9345e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","27ffa928f84a88b00e073b26c97aa4f0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a1d3891469975a25d05783c1361564b2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","ffdc0ad634ec31ceeecc31448df68c22"],["/在Swift中创建自定义集合/index.html","09c7f2d0e88f6bbcee06cb353b8fa569"],["/在Swift中处理非可选选项/index.html","b6f0eee1aca21dd1e071c8c1c019f335"],["/在Swift中生成随机数/index.html","914f90f677335c200ea21f5b97f7506d"],["/在Swift中重构单例模式用法/index.html","a50b8c1d2c3af7def1cb2db12e79f5c3"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","dd770c3e091824a7201e49da0f05f9c6"],["/如何为VIPER编写服务？/index.html","6f93311e978e4ea9b52e0a42ee027fb0"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e00b3178f6d0230c1b1f179c3d3b3023"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3236353aaf78fbe671bb6b7bd87675f4"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5cc30227cbd45b6b0618dbb692a74de9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","2e078509c256911d1126300e7cf069ee"],["/掌握VIPER架构/index.html","80aa98b4a5b07fd0af8def68487733fd"],["/揭秘 WordPress Hook 系统/index.html","085808e412db59faa0abe1d42b8a0670"],["/比较工厂设计模式/index.html","ba8f8a535eb502a64e3990d65f2ea79f"],["/深入了解Swift中的Grand Central Dispatch/index.html","ec11d279e557f8a9d2662dc786cdc5fa"],["/深入研究Swift框架/index.html","1333c3eb64ed2ce3483969983e839876"],["/组件化插件化与模块化/index.html","f8d2152c7689e6694aaa15d6f1e4a800"],["/组件设计与SDK开发基本规范/index.html","ba2ebf4464d3c69cd0dd32fe654ca200"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c785a05103753a4656c72f9badcda44f"],["/选择Swift而不是Objective-C的5个理由/index.html","f06f48068c89a9692eecd5f47af9609d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
