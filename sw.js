/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","cdfc8f5e8bb2ff77a3c825acfc3ad76f"],["/2020年iOS面试题总结(三)/index.html","e9f814b2c6913b09ae997ba0e1659f39"],["/2020年iOS面试题总结(二)/index.html","6d68e51b27f269ef236ede1a9b5656b7"],["/Advanced Swift系列(一): Swift 简介/index.html","721111fccbdbd3577aeb8c1f9506183d"],["/Advanced Swift系列(七): Strings/index.html","2d359f323337e0c56e60cbe0386d8530"],["/Advanced Swift系列(三):  Optionals/index.html","d8e6f57aa36cbb2a38a161c94ae0e9d5"],["/Advanced Swift系列(九): Protocols/index.html","081ba5e6dea28c9b02fc3bbca220aa50"],["/Advanced Swift系列(二): Build-in Collections/index.html","c63162cea93e4339981f93962a3b1250"],["/Advanced Swift系列(五): Structs and Classes/index.html","335de393b81bb85d25748fbf001cc535"],["/Advanced Swift系列(八): Generics/index.html","2d998ebff2bf6ecf536396f7de8b3e0a"],["/Advanced Swift系列(六):  Enums/index.html","d0f3276557149fb8f99ee391a6bbeaa8"],["/Advanced Swift系列(十): Collection Protocols/index.html","44f8c82e3880b0306a0cedd4914702e2"],["/Advanced Swift系列(十一): Error Handling/index.html","a1dc04d59b80a4d6cae6ace07021e506"],["/Advanced Swift系列(十三): Interoperability/index.html","fa00574c0ca7ceb76c61d3bb12f7abc3"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ccf4476e49c33e73157e786dbd37d190"],["/Advanced Swift系列(四):  Functions/index.html","dcee508bfb65404c41db251f3b48b19e"],["/App Architecture系列(一):  简介/index.html","008e815d5284fe4b4116122e790ee4e7"],["/Functional Swift 初探/index.html","35e5c9d1ec7680efacf3ac6801b7aecc"],["/Git 使用小技巧/index.html","63581965d142ed9b04be59688d654cb0"],["/Go 基本语法初探(一)/index.html","15a0619cf3d9bf185d3a2b4684e2604c"],["/Linux VIM 命令及操作小结/index.html","961ff423d9073eb2ef34ea8f8da2a125"],["/MySQL 基本操作/index.html","b0624fadfdc9e9d40f92856be59c340a"],["/MySQL-列类型和数据完整性/index.html","2e0baecd418bee55005f2f78eb88a897"],["/MySQL-数据库设计和查询语句/index.html","a20ee7dd2b5ded5f03f14fc56dcb7627"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b86517491f497d7a795d0a551dc7c0ca"],["/NSCODER和SWIFT初始化/index.html","2979b65958ce2de67492eb180f98491d"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","9a70f923cabf7714dfd309f11d1c7445"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b88b7e6870a8a63d3367c64454b91b14"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ef6f8fd1912c2a9da6b5be926b60df71"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","586dafde9285654ea2c1142f9e227775"],["/Sqlite 使用Tips/index.html","e968c68f3ee00f47b4c7253d6acff89a"],["/Swift 5使用UIImagePickerController拾取图像/index.html","32a9c789a15f78640deeac481412ff1a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","2c632fe69f7a6c9b3374c89ec3e7fdc0"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","8516236a17ade3736071d4a083bd20f7"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d56e040ac63441bdfc9d87f2a16c1f0d"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","484dff2a4c247fbaa5e00ac9f1b26987"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d588afdf63e458dbdb81cdf371d05db2"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","e72bc0c0988e8323b6fb2517431fb648"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c5c5a59ba40cfe549a7f2a26600d2960"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d4b7c94c8a7d6afcd0467de8b2793be7"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b8a63a602bd63f1698b58560d6e5faa1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","812157a584a426c47c7572a25a9a0cb3"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a60c18549e3c2143f6a41c5ce4aa47f2"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","bdb430ca09f426afcd622fd21a0f0fe4"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","d9f3b2772a5f16cd5720bf6931e07179"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","362e69bb967be41708ed775d9065892b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","5aaae657e63f84877b4ae5978180d00f"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","abcef21705d9d39788c40d8e939c589b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","7bf246bf9c53d2c2219a35e986c6f4b9"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","45d75d6eb38fca09544db4789b45f974"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","3200efb1b812d3f65f4ba93fad0a58b6"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","869be1b96a330c5d4ff5a5c5e8650043"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","03f1b545ef885c882495eacfe8280206"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","07e9346785ae7f50b3d2302c51cbc269"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","ced19b2abebef5dd0f0041c73919b19f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ee1d643ce17b3ae4a5cd4efa5d764233"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0120fc427c3c07decb230bb336cda4a5"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6dec4944180023e25a78bcf6b53878fe"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","691153e16cca0182e658d8b2c935c197"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","50cc4b7d683662a274e6af4e13231cf3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","5416f79ead6ae5f3cc62014fbaea4fbd"],["/Swift CompactMap vs flatMap：差异说明/index.html","c8f182f60fdd1e09ae36af18a8797d3d"],["/Swift Grand Central Dispatch 深入实践/index.html","e38822f0f47e944ad108e0f9dd2ecd63"],["/Swift Lazy属性初始化/index.html","f52d3e08afedba065f1ad82aeb0ff03b"],["/Swift Promises 初体验/index.html","f3e198c116d4fc99e19050893de3af1a"],["/Swift Promises 探究/index.html","224dd9a6582622998d4b6c842200a4b4"],["/Swift UICollectionView使用指南/index.html","07b6734d96e82ff14196d2916772a84a"],["/Swift URLSession && Combine framework/index.html","0dad4f09a152dbbb2ce37411366eb1ef"],["/Swift tips/index.html","0e6ca4597fbabd389b91764c19fa96ee"],["/Swift 唯一识别的视图/index.html","1cd446ddafb9546661320d3e8e54727b"],["/Swift 如何学习现代UIKit？/index.html","b22ee53f4392cd5d5a095619b578b46e"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","8e8f6f12bcdbb55fdd56e6592230df2b"],["/Swift 用 compactMap 替换 flatMap/index.html","0b48b574fca6126a2192b5fe4d4f2212"],["/Swift 选择和播放视频/index.html","24f6d3f881064ff6c93321620c09c56b"],["/Swift中UIColor最佳实践/index.html","8d7b7aed1cbfca753a995e34a6655ae9"],["/Swift中快速简单的工厂设计模式/index.html","b77ab80985e1fb0289a3eea7428a870f"],["/Swift中构造函数与静态工厂方法的比较/index.html","69899d4503284c4e6a2dceaf1c28d5a6"],["/Swift中的UITableView教程/index.html","95322689cdd390d1124a5ca717bbd8f9"],["/Swift中的懒加载模式/index.html","42a59134bec526b3bbe3971641cc3e5b"],["/Swift中的模块和挂钩/index.html","18d91b6fca4b7bf3e499493270d743a1"],["/Swift使用布局锚点添加约束/index.html","a7fc1b51836049eac3ce44583b5bc64d"],["/Swift依赖注入设计模式/index.html","17e9e72f24276da9a083ec88abeaee8e"],["/Swift关于Dependency Injection (DI)/index.html","54a6dc801538bd5e0966f6229f92ef71"],["/Swift初始化模式/index.html","6b4de10f602a0d240ad7ad2e1c7ddd02"],["/Swift单例模式/index.html","db9473201144e0336528bed0137b4037"],["/Swift原型设计模式/index.html","0ddd6cffb8494c8f7d7cb07627b34673"],["/Swift命令设计模式/index.html","e418e717246acc89466a2bbecbee6766"],["/Swift外观设计模式/index.html","a4ff255d29c17b5129852828d2f76c40"],["/Swift委托设计模式/index.html","fc093461aac1c4ab8f181707f156b5bc"],["/Swift对象池设计模式/index.html","6294362a51912d33f8805f3ad73d473e"],["/Swift工厂方法设计模式/index.html","c7b71a765b1ef66497ef436943b29951"],["/Swift带闭包的懒惰初始化/index.html","06ab9c9cff68dc1d469e63721300d013"],["/Swift抽象工厂设计模式/index.html","9332b76391fa4ce9fd57d38b0c1db86b"],["/Swift掌握iOS自动布局锚点/index.html","8e134ce5a6c0add6146b9f4ccf42096c"],["/Swift支持旋转的自适应单元格/index.html","beeeaa00c43c73a0d622473e4b8b4187"],["/Swift枚举值/index.html","6d2481868fd42f6e48f3d9ff8461e737"],["/Swift生成器模式/index.html","41ca340b2d953d204baf588cd79fced2"],["/Swift结合Xib文件自定义UIView/index.html","fda95452a51384254a4b0c84e277795b"],["/Swift编写的20个iOS库(一)/index.html","f5ea976eb1080a501b99901ad5a60959"],["/Swift迭代器设计模式/index.html","4471b2595954546b7f08337e59adc959"],["/Swift适配器设计模式/index.html","0e65209749e3d1dec6395cb510adaafe"],["/Swift静态工厂设计模式/index.html","705a327f7d1c1fc2cea10e437e5ac622"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1d244343421158ac6dc46a6801003b92"],["/UICollectionView data source and delegates/index.html","be47091b197cc4a9b1593617cef4a626"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b1a7bbcc16555bd03c775970c57d5221"],["/UIKit初始化模式/index.html","a90bc80f6e8ee082576b23c21da7b47a"],["/Ubuntu18.04替换国内源/index.html","cbf81440066ceee115f58c8c40a26c48"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f69989cc294b0ac0fdb5e3920a68eba6"],["/Vapor系列 (一) :  Vapor 初探/index.html","e63aa0b61d0ff6b99085d1f589295ae0"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c7f9498fbe1af9e0e13630473f5518cf"],["/Vapor系列 (二) :  Hello Vapor！/index.html","3fa2fe148ba3cdb278ee60a027749440"],["/Vapor系列 (五) :  使用session进行authentication/index.html","0f8ed7b899c832e9216e24970f0e607e"],["/Vapor系列 (四) :  创建博客数据库/index.html","3953cab7279139eb2207deacd54f6f90"],["/Vapor系列(六): 徒手撸一个CMS/index.html","1c2986691411486e1a917c4e0c528672"],["/WKWebView与Native交互注意事项/index.html","d86cba7c790a1e24d457ea88d2331ed2"],["/Xcode扩展/index.html","db349ed0bf36b96e2ee05a0c70d81a12"],["/about/index.html","2682de97f09899a8d96b2f3f0d16c143"],["/appleOS的Networking示例/index.html","23097c5235224ae9f8e2c5e56ad1eb81"],["/archives/2020/03/index.html","d62f8ce9fe4c4c4251f84c9da2d216fc"],["/archives/2020/04/index.html","994c21e74856ce6d0d6a5bc977ddefb9"],["/archives/2020/04/page/2/index.html","a33ee5d71c09cd8f83c62f451f41fd18"],["/archives/2020/04/page/3/index.html","46cb7f9188543a5bae2ca0005801fd05"],["/archives/2020/04/page/4/index.html","a2a970df70f761636f1c818a431cde34"],["/archives/2020/04/page/5/index.html","8ccfbaf2ec9ef6b61dfab9df621e3812"],["/archives/2020/04/page/6/index.html","d6ea3b6c836681505dfd20584ad46a2c"],["/archives/2020/04/page/7/index.html","183c96e0a097d3f9de92d14b3fa6f2de"],["/archives/2020/04/page/8/index.html","336c2f8a42f3bee5ec102f8bd0a1f791"],["/archives/2020/05/index.html","d545d69a8b4631505cf241963d0c899f"],["/archives/2020/05/page/2/index.html","566dee44957179f7780b420f6c3d9cce"],["/archives/2020/05/page/3/index.html","fadf91d735fa15f23600635f1c094cb3"],["/archives/2020/05/page/4/index.html","62e36c824f6c42c8e5ab90c3067cc867"],["/archives/2020/05/page/5/index.html","d58a74a69aaa8ab486bde837c4c8a1da"],["/archives/2020/06/index.html","03eed3b1c6eb94bb2d9a7304d027bc6b"],["/archives/2020/06/page/2/index.html","e872d302d7bcc1a8ec9dd780f18eda6c"],["/archives/2020/08/index.html","fce9b0303b065cec95ac21aa83a54ddf"],["/archives/2020/09/index.html","ba3b389bbe26e3d3e1c8d0ee4f0beb1b"],["/archives/2020/10/index.html","9d4252369c77b661f1c56f1443964ccb"],["/archives/2020/11/index.html","e0d66219aecd9ea59210c5544676a722"],["/archives/2020/12/index.html","610e109fb3197ad20556388798f8d1df"],["/archives/2020/index.html","2b7719a6e13b079d3ea8b01cc7bc1cf7"],["/archives/2020/page/10/index.html","b3753192cce85c79d3e114092ae5b1b7"],["/archives/2020/page/11/index.html","1e376274fafb9c4a21d800bd6a1209c9"],["/archives/2020/page/12/index.html","9da4d966bec1c84dcdb6bacec1a202a2"],["/archives/2020/page/13/index.html","27e3b32d19c35e7cec1fcff41b83ed71"],["/archives/2020/page/14/index.html","608bba9ecf64d09cadca04a758057af9"],["/archives/2020/page/15/index.html","1c512f4026dc77ecc6c2a60b8f8d48fe"],["/archives/2020/page/2/index.html","456b0e9c1ba3b2cf7230be1d977eb321"],["/archives/2020/page/3/index.html","1b020264973929a3b8488a803f71a847"],["/archives/2020/page/4/index.html","f6d901a99a414f3db25b8afc35945323"],["/archives/2020/page/5/index.html","c646f1a06f5b7dd5d8a1ea30a9721e83"],["/archives/2020/page/6/index.html","9c8cebded759b3b9a0f1415f60c4436e"],["/archives/2020/page/7/index.html","745045291948568b177f03319780ab73"],["/archives/2020/page/8/index.html","8f3ef9296bbe5e400ec786b814c450ae"],["/archives/2020/page/9/index.html","e97e0ea9325b80ef0b1bb4fa34cf8910"],["/archives/2021/03/index.html","c457f74ea5816a1ec4bdb99ac70f404d"],["/archives/2021/04/index.html","dd2405d039057d8aa67d8c9c0649f503"],["/archives/2021/05/index.html","da4236d676e10cb0ed6d7045e82261ec"],["/archives/2021/index.html","7f05b0286575651d52f6abe462cbd4ad"],["/archives/index.html","4b145e70f76fa5734fe7ebaab4a20089"],["/archives/page/10/index.html","f98d2dbd2522503744aa5d5c62428541"],["/archives/page/11/index.html","5d5cbee1bff5eb324ab41ca16b635d5b"],["/archives/page/12/index.html","b9401d9618e9b87f4e70128ab1c296ee"],["/archives/page/13/index.html","6d87be313a5d292358a120093a4362ac"],["/archives/page/14/index.html","19aa0a6edc4981ae14e213cd031f558d"],["/archives/page/15/index.html","2deb82a8431387566189e8a929b972e0"],["/archives/page/16/index.html","18e737db3ec8c4fdabdc641718604b05"],["/archives/page/2/index.html","a651792ad930ace2a955c9f64961bedc"],["/archives/page/3/index.html","a870ef8c41bef51e09b7d49c47534844"],["/archives/page/4/index.html","a3b6e13e121ff44d2466d65a047929a0"],["/archives/page/5/index.html","faa4f009acd2d7c152462f2692e34877"],["/archives/page/6/index.html","959ffe54a621433834079494524c1f0b"],["/archives/page/7/index.html","b30238894d68ba11f96068d83e65bbb4"],["/archives/page/8/index.html","61bcdb23e2b3302f3efc048abb17c03a"],["/archives/page/9/index.html","37608e0fd552e7fb94bcf4e057b3777c"],["/bugly 上传dYSM文件小记/index.html","c15e8dac5c880a987896eaa44202715a"],["/categories/Advanced-Swift/index.html","ad0ba41483daec499a8e3e41be8ad467"],["/categories/Advanced-Swift/page/2/index.html","b4c9b6c082c9619349c137f105aa3894"],["/categories/App-Architecture/index.html","4ec9ebf5544a0224df4aac08930bd225"],["/categories/Array/index.html","a74b4ce7038f1c980903220b8510d30a"],["/categories/Codable-protocol/index.html","169575934415a7e61000bc2335aff42f"],["/categories/Combine-framework/index.html","bb32da884fe9f795d5b06d349d7ddd5e"],["/categories/Combine/index.html","3bd1238cfd9c7830288467ed15a5d7a7"],["/categories/Go/index.html","5973e1044e7807f641b395c9d87cc829"],["/categories/Grand-Central-Dispatch/index.html","4b749c08d954b0fefc477b727e68591e"],["/categories/Hexo/index.html","18d553cda920674ad5f0fef4c7b3b29e"],["/categories/Homebrew/index.html","f95170b2a4fda79d3295facf99dae1d0"],["/categories/Linux/index.html","a6fec307f378a30c1a1f2fb093a83e43"],["/categories/MySQL/index.html","f1ba96fa3fcc4e7d93d8bca524ec019e"],["/categories/Promises/index.html","1e1cf97e6454eb68601c3b1069d6abf9"],["/categories/Result-Type/index.html","5402880be4263bcfcd1771d0c7cf720a"],["/categories/RxSwift/index.html","bb482313d6e44e85ba5ce4a3628db104"],["/categories/Server/index.html","912e4e84e1e78f8a9b6912a5b9d55062"],["/categories/Swift-Apprentice/index.html","2e0f183dc1510cdb09e3ec8d0718265c"],["/categories/Swift-Apprentice/page/2/index.html","c214cc2fc81d3291bc8694fb4b70ca22"],["/categories/Swift-Apprentice/page/3/index.html","c6baf15bfcd15796a1daf1cd2bf69280"],["/categories/Swift-源码阅读/index.html","1c84837e1bf54ca68a5b04c15a5021e7"],["/categories/Swift/index.html","ebcec9f781e53eae61b42877873db90a"],["/categories/Swift/page/10/index.html","3bb4ee77c0bb7366ee2201812b35a255"],["/categories/Swift/page/11/index.html","73b61442c7b55f859b3a47ce6b344fbb"],["/categories/Swift/page/12/index.html","3f8d28254b434ae88aeced466ca6ea15"],["/categories/Swift/page/13/index.html","a87e6237e6d5cf395d05bcb80d30d6f0"],["/categories/Swift/page/2/index.html","31470d66d23e8dc257aaa9bbde9d0483"],["/categories/Swift/page/3/index.html","83a903ccde12de3df7407d5dbc2f65a3"],["/categories/Swift/page/4/index.html","699cfe77a1ab210c144b4f44450f6a6d"],["/categories/Swift/page/5/index.html","0c25694cfbfebe4aaa3a349af84f7ace"],["/categories/Swift/page/6/index.html","1420a9492f3072cdcd2876598f11a115"],["/categories/Swift/page/7/index.html","5963fddd54defb39f3e88dbe430e67c1"],["/categories/Swift/page/8/index.html","4adfd04b8353c841b92a8f79989100df"],["/categories/Swift/page/9/index.html","021fca0e412c2bb8146876d213070418"],["/categories/Swift5-2/index.html","3cb932c8774dba817ccb551755d823e7"],["/categories/SwiftLint/index.html","80e5710061038683b90281ac4173d1fe"],["/categories/SwiftUI/index.html","fd2a549c188c30bd3df853b5d38ac660"],["/categories/UICollectionView/index.html","00665dbcf563fc5183c5ba2ef5f83b19"],["/categories/UIImagePickerController/index.html","f9e3e71df6c3f0bea77c030d3ed4be24"],["/categories/UIKit/index.html","311bb2a95f9805b7016c9a82da98b985"],["/categories/UIKit/page/2/index.html","c7b7e3dc72d3515879d87979d542edf3"],["/categories/UIKit/page/3/index.html","f704a520707b611ee10ca8af6f8a95df"],["/categories/UIKit/page/4/index.html","8731e13a5fbde15bc42158ced21b0dea"],["/categories/UIKit/page/5/index.html","1ec4b4b332cb8ea1bc8a7f21d060713d"],["/categories/UITableView/index.html","a613cb0ba0b6bddba2e939f82975a6c1"],["/categories/Ubuntu18-04/index.html","f6658f60f3ae34b3a15982e51b7a6409"],["/categories/Ubuntu软件源/index.html","b05009cee4289219f5efe779042a0c00"],["/categories/Uniquely-identifying-views/index.html","dadbbd3874e940040a472b283488cf82"],["/categories/VIPER/index.html","ef45593fc06b3e57b23f4ccdb0c781fa"],["/categories/Vapor-4-0/index.html","36e5586e19c5ae6952b0c172ace40871"],["/categories/Vapor4-0/index.html","964ca7f3b580c6a5ad14b5bcad175d86"],["/categories/Vim/index.html","7e45c99825f49bfec683aba3bdf32e32"],["/categories/Xcode/index.html","08591b22185b7b0614797812fc201a34"],["/categories/appleOS-Networking/index.html","f69976c3c62484d3c9a24967b51eb944"],["/categories/bugly/index.html","1f1245c7c84dfd33cfbdceeef3db33f1"],["/categories/enum/index.html","fb2d4e0fc27d17171538d4c5e238c610"],["/categories/git/index.html","46375e85490eddd1556f9b5bbad8bffc"],["/categories/iCloud/index.html","2776d8a993079a2276e071e1d62c6ca9"],["/categories/iOS/index.html","7adb4578532836aa22a5d14d4c5adff7"],["/categories/iOS/page/10/index.html","cf5e81f0905de7804288d652c354a52c"],["/categories/iOS/page/11/index.html","4aa7011a449a72fc75fdfd9aebcaa0a0"],["/categories/iOS/page/12/index.html","848b2d061f488cad89aaf6e6271b2ac8"],["/categories/iOS/page/13/index.html","47b267fd1f796af8a6faf60336a45cb5"],["/categories/iOS/page/2/index.html","562c4e474d9b259b35edfb6b88825917"],["/categories/iOS/page/3/index.html","92e04938e01a27e23edeb8f047365994"],["/categories/iOS/page/4/index.html","a2fefde4a38c9b16eba92bad685b6e20"],["/categories/iOS/page/5/index.html","99d95b60c8c6da4eb9fd9141ae95c7fb"],["/categories/iOS/page/6/index.html","4f2998a57d37f05c96a0d77b4b23e9f2"],["/categories/iOS/page/7/index.html","3d5eb9421c27e0ea3b510a62cee1e223"],["/categories/iOS/page/8/index.html","079bf4d835ae4370e5eb2ca974c6ed96"],["/categories/iOS/page/9/index.html","fd34654cb4399302179846c241404c85"],["/categories/iOS面试题/index.html","aafeed5ed07ab74c0b4ec4e700802c90"],["/categories/index.html","f30046ba5009e6ada3885669e2a5d8a6"],["/categories/random/index.html","9c09ca226204b91e0b91a74eb2673f87"],["/categories/三方类库/index.html","0e0f9dd3349df5d4003533bf7dd2f696"],["/categories/函数式编程/index.html","0c89552c7a72e2fe594fc963ea8d4d02"],["/categories/子类化样式/index.html","4d6f2e7d7e4e391a95069f93c6facc47"],["/categories/开发技巧/index.html","0c70219bcd31cb8caa0ef21841e7d909"],["/categories/开发记录/index.html","71cfcc34e3d428a943f17cc14b402c01"],["/categories/技术支持/index.html","36ef02396e36c51308c012c9f4acbe8e"],["/categories/数据库/index.html","885f93073856c4474a1a64b333843bf6"],["/categories/架构设计/index.html","a5adff83d9e965f57bdd14316e78cbb9"],["/categories/测试/index.html","2b1bfa6fbc85623430707ed0a39c2439"],["/categories/用户体验/index.html","93505fa89e64dc069504a96b260ffc42"],["/categories/用户协议与隐私政策/index.html","f9794ea340032b876c5c4e15323b86f4"],["/categories/设计模式/index.html","e90ec43470240213d98d07ed5c94d229"],["/categories/设计模式/page/2/index.html","008468ad7eed8c0c607c7f2a7c2787b0"],["/categories/设计模式/page/3/index.html","3122812955038dbb8e3c9aed0d331699"],["/css/main.css","fa4bbe8809998f21046fcc5eef003ba1"],["/hello-world/index.html","5f6259dafd48b5328050a7c87ee21c88"],["/hexo部署失败/index.html","e640bc49891a1cbf160181f3e3e62501"],["/iOS VIPER架构深入实践/index.html","a7ccef51e7fd622aa9fdf057337db08d"],["/iOS 自定义视图，输入表单和错误提示/index.html","51334f2d78018f48ae09b50516d511ad"],["/iOS如何使用iCloud文档？/index.html","e9aca15afddb9ddc9e13437cdcc22905"],["/iOS子类化样式/index.html","d662d7e4b03cb7021793a45380e00aea"],["/iOS开发记录<一>/index.html","1d21c373d1d3c718416087c757cd1449"],["/iOS自动化布局编程/index.html","def0727e11e019690735a844a5622ff0"],["/iOS自定义转场(By Swift)/index.html","3e847dd66694e8f30bd71ca82cd47b0d"],["/iOS项目架构：使用VIPER/index.html","5f722f416550244202eb2a49b4a87efd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f8f3d142f85123947c0ae5191d6b4efc"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","fb260cae1e7392c26ca13cdb1ebfb590"],["/page/10/index.html","3c93948e4f22a146181a7ee08a21667c"],["/page/11/index.html","80c168b5ee2b1f3f32236bcae351cb56"],["/page/12/index.html","7a62f429732837eef8ee89bea8cb17b3"],["/page/13/index.html","dbb0fc26b4138686622f552b8d458630"],["/page/14/index.html","b42a638f393ba1b4b704594ac58fe680"],["/page/15/index.html","7f7dc329500cdc83f17cfbe3a2875902"],["/page/16/index.html","42734a391fee7b3d9099c03bcd15bb1c"],["/page/2/index.html","c94668fc44db2db956c7ca0660fc4752"],["/page/3/index.html","4b7fba08ce09e8dbb03eb5394f5f7a3f"],["/page/4/index.html","323d773611d5feec16dc6a8e28bdae19"],["/page/5/index.html","f8ba52128a3910ce3b3646389f3e5c07"],["/page/6/index.html","c069487ddd203292a17a9d8cc9f87802"],["/page/7/index.html","4532d32a66c671a6b0ae3a144e41dc5e"],["/page/8/index.html","ca0a73481563c19004fe49adc12274f4"],["/page/9/index.html","0ec8e0328a3f0869e18436135411c529"],["/schedule/index.html","0e4871dc14cef1eab92964695432be2b"],["/storyAppPrivacy/index.html","69fe52a2170f27cb4b7525b7386effff"],["/sw-register.js","f15c38841527877a86edaa665d457467"],["/tags/Advanced-Classes/index.html","64716d6de020ee43c93d3b16e6c692fc"],["/tags/Advanced-Swift/index.html","f838342e3130585e92463be0147ca064"],["/tags/Advanced-Swift/page/2/index.html","42d825697a8f7d3da27a4cdf09d75c09"],["/tags/App-Architecture/index.html","9d36fd2daa2ee8b9c0aa54ff31de98ac"],["/tags/Array/index.html","45eab4cd614b1fd8b649d9a14b8dbf2b"],["/tags/Arrays-Dictionaries-Sets/index.html","a5983a84fbc8ebac98cf8d0bfeb34bca"],["/tags/Authentication/index.html","825fe1421e8c420e5951e1b7f65d93ca"],["/tags/Build-in-Collections/index.html","bc9d075d997cb18afcf9c1663c1b8806"],["/tags/Building-Your-Own-Types/index.html","484ffec73e011a239795b4f8b7981d6d"],["/tags/CMS/index.html","5131dbb9e4b7145aceb4b00961e461a6"],["/tags/Classes/index.html","3b2656b528ade79e571c941d8f64d7a6"],["/tags/Codable-protocol/index.html","e87b1014846f5e414088b2e1f46f448f"],["/tags/Collection-Iteration-with-Closures/index.html","1e4599d8950d7a5e0e019079ad92ddc0"],["/tags/Collection-Protocols/index.html","a469745cc2f577aabf1a356b5f35aa65"],["/tags/Collection-Types/index.html","85061db9b9d03203183ed2391bd42705"],["/tags/Collection/index.html","32ea795012610c6764f692f50b30ac55"],["/tags/Collections/index.html","b63636fa5bba1e164a703c18caa1f850"],["/tags/Combine-framework/index.html","581a05545e5800a4f613a5b843f8fdb4"],["/tags/Combine/index.html","a6edbc31bf6a4199bc5e1bd0861481aa"],["/tags/Dependency-Injection/index.html","dd55950b35c63b4c19c5281510868a27"],["/tags/Encoding-Decoding-Types/index.html","c0ccf9b85d6251a174ac3615f2866d96"],["/tags/Encoding-and-Decoding/index.html","8a0e815a42d8834b2ddd3a63ee547a13"],["/tags/Enumerations/index.html","d8a2021025e070847af8e73a8b146891"],["/tags/Enums/index.html","e96c03c53fac3b8729b265ab58154ff9"],["/tags/Error-Handling/index.html","60f566ac78fbe3680194da053b5601d8"],["/tags/Functions/index.html","a317d898dde1bfd9f0e7926b726eddc5"],["/tags/Generics/index.html","d6892e65f87e0a97db3da5c4827517c7"],["/tags/Go/index.html","e8e3599dc75c9f0e2f914588b3e0f301"],["/tags/Grand-Central-Dispatch/index.html","b40387e03a6edd3f65be202d17f80e95"],["/tags/Hello-Vapor/index.html","45281004e1909cee5e28018b818f7a87"],["/tags/Homebrew/index.html","01d02e956e0c7b6c72adf2e78e5fb900"],["/tags/Interoperability/index.html","158eec56129fd18bb27af1e622d0195a"],["/tags/Introduction/index.html","39da37e61376caf0caa5401cbe75b7c4"],["/tags/Leaf/index.html","bd51f474cf0ade66d4e3afb770d1752d"],["/tags/Linux/index.html","7274daa7df9d8987e8dcb419ca05a8d7"],["/tags/Methods/index.html","4a7bc78b1d418350bd5d986b8b202939"],["/tags/Modules-And-Hooks/index.html","d6b4864ca30b3f38079bcb799144d2eb"],["/tags/MySQL/index.html","57596dadd3852f946ee20a5c8d08d221"],["/tags/Optionals/index.html","9488f857d963eaf72c76e03f7631f253"],["/tags/Promises/index.html","4b5f762ebe17089ba65c2d7827e7f00b"],["/tags/Properties/index.html","26e3a111241dc33d34386913a7302da2"],["/tags/Protocols/index.html","52f178b693a9d6a427d7a6eee45b92b7"],["/tags/Result-Type/index.html","c9bd2de5f813fb04293f6bbd6d978201"],["/tags/RxSwift/index.html","38ff78a09b74a6b7cf6610cc54513000"],["/tags/Server/index.html","a13ccee2316c2260c7e4d9e29e903ac6"],["/tags/Session/index.html","466765209b7becdd82d73df3cfbc35c2"],["/tags/Strings/index.html","7ea97fa39bd16fcb3feb560d307e4992"],["/tags/Structs-and-Classes/index.html","7837b026a5b5852a6a6f8fa172266732"],["/tags/Structures/index.html","2dec4490da1b5f7cd0417735c05dbfd0"],["/tags/Swift-5-0/index.html","68298e832c438eb358208e648413f627"],["/tags/Swift-5-0/page/2/index.html","36f9ae12490146bc1539e44903f04424"],["/tags/Swift-5-0/page/3/index.html","b64ca5114def9ab48e2b9a67ee23678e"],["/tags/Swift-5-0/page/4/index.html","341833c3ad50db5caf82c85cbf9e851e"],["/tags/Swift-5-0/page/5/index.html","b2851c6d5eb89a0478805d9f68481d74"],["/tags/Swift-Apprentice/index.html","7d26c568d63843493e6e9d8296d5e413"],["/tags/Swift-Apprentice/page/2/index.html","abb711ea6f5cd9d070492789ecd4e120"],["/tags/Swift-Apprentice/page/3/index.html","450e8051d4600a5ba2265036f7c72794"],["/tags/Swift-Package-Manager/index.html","823b6e91fe22d46c314cb17fe62f6c76"],["/tags/Swift-源码阅读/index.html","4cfe15a28d37fe3164ebd374fddad888"],["/tags/Swift/index.html","f127f9751cf632788b53a1997940aab7"],["/tags/Swift/page/10/index.html","1ed6b227b466685ba2870c698bead729"],["/tags/Swift/page/11/index.html","8cf129c0d0f81446b626b9e3c05618e2"],["/tags/Swift/page/12/index.html","42995a50a6e65ba7b0d8312c39e3d628"],["/tags/Swift/page/13/index.html","69e267703e244dcf71c2071361b2b5f0"],["/tags/Swift/page/2/index.html","299e973e20eaa0cf64b0a9f243fa3e4c"],["/tags/Swift/page/3/index.html","1f0961753803af3911a248d219d0c085"],["/tags/Swift/page/4/index.html","c4db4e485268a643416f82ceb4ae612d"],["/tags/Swift/page/5/index.html","9edd7012d4a0faded6c753e2266e97aa"],["/tags/Swift/page/6/index.html","61f21745ebe927070c86d36f1cb174a4"],["/tags/Swift/page/7/index.html","d5c3c018c617422ad6c39931aaab3a95"],["/tags/Swift/page/8/index.html","4c5ddc3e7181941ca03d3a42cf73909a"],["/tags/Swift/page/9/index.html","f814427b02c03d836c781404b25b8b2f"],["/tags/SwiftLint/index.html","e900c8e9125bec224c321a70b4a23627"],["/tags/SwiftUI/index.html","e765f4ad4ab6e216a0d3fd6fec0247ed"],["/tags/UICollectionView/index.html","26458ad0a1527ced48b6ad98f8688e62"],["/tags/UIColor/index.html","728957a4495536846ba9a054d30133cc"],["/tags/UIImagePickerController/index.html","96c9e8eb2a98894789bb4cdba34405ae"],["/tags/UIKit/index.html","7119c4bc34ff125efd3c2d5e2beace94"],["/tags/UIKit/page/2/index.html","c645da1d17925ba6e10b19c58a310d9d"],["/tags/UIKit/page/3/index.html","dc1e9edf6501ba94e75c6fd8ac351634"],["/tags/UIKit/page/4/index.html","c00329fc52abad0e2867831434438803"],["/tags/UIKit/page/5/index.html","8c50f55ed98849347459cb2b2cdce6ce"],["/tags/UITableView/index.html","ff8af9771fc438eca5364308a0c2e113"],["/tags/Ubuntu/index.html","8379e387ec6233b632340a95db484c4d"],["/tags/Uniquely-identifying-views/index.html","1778265eeb374858a8070cb42eeae238"],["/tags/VIPER/index.html","10403586a05b0a6d5e2b4f18c9ec10f1"],["/tags/VMware/index.html","98bf8e7447094aebd02fde6e1c3cbc3d"],["/tags/Vapor-4-0/index.html","e8e83bd05119256949f07c0abf59a28a"],["/tags/Vapor-初探/index.html","9e2f89db66ddf4ba8d92d824bb3420fa"],["/tags/Vim/index.html","0f28300122d56e4fba51d55617e34fc6"],["/tags/Xcode/index.html","94d896c44808b8a2ed82a75db296aaca"],["/tags/appleOS-Networking/index.html","a31f81b67260ff4dc586c3b1a1c759f3"],["/tags/bugly/index.html","d850b920df6a8975b7d2b3290541aee1"],["/tags/enum/index.html","9382a8ec32d4cc81a43bd461a1466b7c"],["/tags/git/index.html","978c7e9bca4557eaaa4f23ecf971976d"],["/tags/hexo/index.html","fe25c37ff5fcf2a4ddc4ef69722ebdb2"],["/tags/iCloud/index.html","4293234ff8bb9c912deb1b0a6d4f1515"],["/tags/iOS/index.html","8c7a28b634b163cc419a5db9586f876d"],["/tags/iOS/page/10/index.html","64b4ce6155be2d963ca9261c567038de"],["/tags/iOS/page/11/index.html","48ed02d3c694a73fd5304a5e835fccf1"],["/tags/iOS/page/12/index.html","2a2f06d1169cf4f11ef5f275926e9d34"],["/tags/iOS/page/13/index.html","41bb79c969a7bcc8e0e5e15747c11c67"],["/tags/iOS/page/2/index.html","543137b9c58c101844b5c790495eb37b"],["/tags/iOS/page/3/index.html","98f9a08e604d10f4f8206db39edd328e"],["/tags/iOS/page/4/index.html","d0d7fec4724335d2747ff9f2b5b89644"],["/tags/iOS/page/5/index.html","52f95bc40a4fdb099992d58690f539b5"],["/tags/iOS/page/6/index.html","ac35579dc757312c5ce6155a60c579dc"],["/tags/iOS/page/7/index.html","97446bcc3fb10dd92d15fd9d739b192e"],["/tags/iOS/page/8/index.html","d6e5a7d3b1baf202bb4a264a8f7b3e2e"],["/tags/iOS/page/9/index.html","9399cfc1918325f71e6902dceacc17ff"],["/tags/iOS面试题/index.html","b1c5f5ce85db9f8848e531ec2a125017"],["/tags/index.html","bb0a557f6a6b94f93e0851e1f736b53e"],["/tags/non-optional/index.html","33845092ccc1b07effe8a3fd348f6b7c"],["/tags/random/index.html","641548cafc3dbb3c1780cf86e05e2760"],["/tags/transition/index.html","c96cb4dce982893d4692dc7a23353ef7"],["/tags/三方类库/index.html","0b90c3157c5ce19c2358d476ff54f56b"],["/tags/依赖注入设计模式/index.html","695002d7c2bc19148f0863e14a2efb3e"],["/tags/值类型和值语义/index.html","555d01b1c50d9a805b3092e6d862fe98"],["/tags/内存管理/index.html","9219f959ce9f32ecbe21860b138ecb0e"],["/tags/冒烟测试与回归测试/index.html","fc053b242de06907ce8b6e0fce13a7d6"],["/tags/函数式编程/index.html","b1f2388b8c6d4ed6e8ffd7617a6cc66b"],["/tags/创建博客数据库/index.html","ccf990faa9f0d86b85929efdc9fa3a71"],["/tags/初始化模式/index.html","f45644b7359633db21dbd8d017207b34"],["/tags/单例模式/index.html","072abbe30152fb1ebdf8098f007753a5"],["/tags/原型设计模式/index.html","c9810c4e7ff914b028baaeadfd3b33f7"],["/tags/命令设计模式/index.html","d2dd7758cadadc65613fe39700cdd7e2"],["/tags/基本控制流/index.html","501dd54b8f11908b62cfdc8711b1b867"],["/tags/外观设计模式/index.html","bbfeb7d8db0afcceb6b7fc070e365607"],["/tags/委托设计模式/index.html","8b48ced6cd20e2cfeb178ddb1cd0c68b"],["/tags/子类化样式/index.html","4a74523b0052dea7fbe7ddc8f81cca4c"],["/tags/对象池设计模式/index.html","f24a3a020b3f76265e58bbeec471875c"],["/tags/工厂方法设计模式/index.html","9eee2e93c36ddf42b5cf4c8c68156707"],["/tags/工厂模式/index.html","a5af945e45f4b2733473c9839598cfc1"],["/tags/工厂设计模式/index.html","9328f2867bff33a49149d415b65218cb"],["/tags/开发技巧/index.html","10baed76f6a00c8732aeda43600b0f21"],["/tags/开发记录/index.html","0de3d4d1aa310a23cded63768fa7fbd2"],["/tags/懒加载模式/index.html","96d569372f940c2b1a13f66cb5a809a8"],["/tags/技术支持/index.html","1199f44c212489070b3a2af1dc920a26"],["/tags/抽象工厂设计模式/index.html","4bc89a33195bd12eb33f3a8f25681497"],["/tags/数据库/index.html","db1eba5ec6589fae3e97d9d1d9de0019"],["/tags/构造函数/index.html","9425796c483726bca4a8954101dc9b72"],["/tags/架构设计/index.html","bd447759ed0f103a515fd21184c73540"],["/tags/模式匹配/index.html","6a512076ded49a1983881bf5ba27b8c4"],["/tags/生成器模式/index.html","ed3d2e8b41fd178e165e26a95fc8672e"],["/tags/用户体验/index.html","91df67735dfd8d7d5951ec511a96e2b8"],["/tags/用户协议与隐私政策/index.html","9b1692f7d2aec98066bfb5d8820989dc"],["/tags/类型与操作/index.html","d918a1d15bddc21eb819eca33ffb7c2f"],["/tags/自动化布局/index.html","5b01428c86fb4891d719d151c02b50c6"],["/tags/自定义UIView/index.html","35fb33ad766ef9e677e69380384ce662"],["/tags/自定义转场/index.html","40645e0b94aa0b3ce83d8d08ef4ca680"],["/tags/自适应布局/index.html","f92f738a249d8cb280e1d49432f75fb5"],["/tags/表达式、变量和常量/index.html","8201d130a3ef7ba66741068082141546"],["/tags/设计模式/index.html","b8148bfe6906bd8bf36ad90aaae5935b"],["/tags/设计模式/page/2/index.html","687f1ed6acef1dfd9af35fa282cf201f"],["/tags/设计模式/page/3/index.html","77bb47742986f0b746ac16ba67a86acd"],["/tags/访问控制和代码组织/index.html","0594f92c77beb44d183c2ca019dd9719"],["/tags/运算符，下标和键路径/index.html","9bf0b0523895f441501b2f01788a82e1"],["/tags/迭代器设计模式/index.html","e7e709207bfc85de4af773cbe2f4e219"],["/tags/适配器设计模式/index.html","de95c5576c59709c2b665cd2a77113b1"],["/tags/错误处理/index.html","2ddef4aeefabcd68efd29591a212c8c6"],["/tags/静态工厂方法/index.html","8d9449c1e2fb06f1206e4a765e6175d0"],["/tags/面向协议编程-OOP/index.html","ab2a1f41c8fba3ba96e359dabb33ed5e"],["/tags/高级主题/index.html","4e08f2d9dcc1c21d6d54868b068bef78"],["/tags/高级协议和泛型/index.html","6477142bf5a94bda5362530fa85f8b90"],["/tags/高级控制流/index.html","3fa4caf0ee967f797fa1608ec2e50d62"],["/为iOS应用构建输入表单/index.html","7d586f697ddcfe1be86b86231bf01e23"],["/产品开发的幕后花絮/index.html","c3511eef8c1be9c7892d340a86464bb8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","d41406062d8ad39dda859ec76118e81a"],["/冒烟测试与回归测试/index.html","450f3232dbf5867299260257117da43e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6d76d2c015257a9cf1ccad070a0dceb4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","66d966aa076368539c03ab6f23c3f4cf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d0634ecdb6e0aad81f9e3a530e1ce382"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","5aa1de31f5b3f447fe629912c6c403ad"],["/在Swift中创建自定义集合/index.html","91805e93aeda4271c592f39b13bd0acb"],["/在Swift中处理非可选选项/index.html","29032daa43c3f574933570e4ae87a721"],["/在Swift中生成随机数/index.html","b6aa63008bca90a354c477385e7ac629"],["/在Swift中重构单例模式用法/index.html","08d5ef0224754aff9e1acac1c5dd5d6f"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","118b7ec7abac52e1edca85004f7ce8cc"],["/如何为VIPER编写服务？/index.html","f5649e5fd50f0ca6b8ebe55f5cec4f63"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","479087531dd054f36309217d6707a46a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","77242371f191b7e8806fddbdb755f699"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","37f175c4c76d4993087c274ad27a3647"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bfe490fa2abbd3e9cb4210c1eec1a17a"],["/掌握VIPER架构/index.html","cf741cf9918aa69e9caa735b57f40825"],["/揭秘 WordPress Hook 系统/index.html","d6b6e609638980147ced110a48328500"],["/比较工厂设计模式/index.html","7c7322a88ac25b2d0bfdf430feab415b"],["/深入了解Swift中的Grand Central Dispatch/index.html","bd1beea0b1b48014f74ba4f589450fa5"],["/深入研究Swift框架/index.html","5ddce9bd2ddcd929af41ca89ff9145d6"],["/美豫直聘技术支持/index.html","e489b3304f7800c4890c5095f08c850b"],["/美豫直聘用户协议与隐私政策/index.html","23fcfaaeb0800316a126e08e873a138c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","161a6804370083a7d8e4f3e339f1fb23"],["/选择Swift而不是Objective-C的5个理由/index.html","7193d6600ece5549375758e09d05482f"]];
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
