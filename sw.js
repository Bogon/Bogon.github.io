/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f312556a94a80bd95f27f67002c7c296"],["/2020年iOS面试题总结(三)/index.html","aea8ee444b56b11242f8da3c0bb5dceb"],["/2020年iOS面试题总结(二)/index.html","0ee1f7071cf57c9731309f400276dc69"],["/Advanced Swift系列(一): Swift 简介/index.html","b79b79992e8430e6a5470f0a7d1dc44d"],["/Advanced Swift系列(七): Strings/index.html","87490e94b37ba3f009be0c1351f76158"],["/Advanced Swift系列(三):  Optionals/index.html","fb0336cafd06fa6b37673f7f1329ef9a"],["/Advanced Swift系列(九): Protocols/index.html","b82f9707fe71e058a446d0db135b88f7"],["/Advanced Swift系列(二): Build-in Collections/index.html","b7c95e08d9a083359422eae3cbec0c2c"],["/Advanced Swift系列(五): Structs and Classes/index.html","34d2652a4f7b25a1440099fa4a9b1d3d"],["/Advanced Swift系列(八): Generics/index.html","6364a36a57bc42c932493b892e595bec"],["/Advanced Swift系列(六):  Enums/index.html","917be1cf9c4cb2f439de9304320bdf93"],["/Advanced Swift系列(十): Collection Protocols/index.html","271a3e8ed3eb55fd8ef15e9767a19d9d"],["/Advanced Swift系列(十一): Error Handling/index.html","725c41463d39a43954a14c1f6e9a0cc0"],["/Advanced Swift系列(十三): Interoperability/index.html","51b48994e3865e987456ab7efb573fa8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1db906371ef20d6008f77bf67b0d727f"],["/Advanced Swift系列(四):  Functions/index.html","6ba0b83a3ab6c9487b5632f12beb52b2"],["/App Architecture系列(一):  简介/index.html","5545ccf2ffed4e45bb4466b96602cc73"],["/CocoaPods 设定版本说明/index.html","c8cc80b80e8a0e03ce6f8a563365f4e4"],["/Functional Swift 初探/index.html","6c42cc6eb05cb8b25d781ae6b572c361"],["/Git 使用小技巧/index.html","0b02ca5243bcd704a6558cffaccf4cd5"],["/Go Protobuf 初探/index.html","3054dbde11c39ee3bee89acf840502b9"],["/Go mysql Tips/index.html","8f9d1bac5f4a8829a91b2b9cf23b2b46"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","c652e80ddc0673feb73ebd784f95f6dc"],["/Go 入门篇：2、Go 实效编程/index.html","cf21914329ecd9ff0bf68dd8899f04bf"],["/Go 入门篇：3、Go 重要概念/index.html","4c109c6381d796fcbc07fdd4bbea400a"],["/Go 基本语法初探(一)/index.html","2bb8cf8ba48eb5c2a04f4d8e9855a907"],["/Linux VIM 命令及操作小结/index.html","19169dae55a0819b0cf2b2ee8029155a"],["/MySQL 基本操作/index.html","b2d5a40c35f1ffd9fb7ddb41a5342553"],["/MySQL-列类型和数据完整性/index.html","d3fe9d78d19fd045636dc069eb91b7f4"],["/MySQL-数据库设计和查询语句/index.html","75171dd77c5f05917d165712290b0010"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","7a3bb5f2eab20cb9502aa5ee2370b154"],["/NSCODER和SWIFT初始化/index.html","f9e94b21f1fc42d140ed40e75f8f40f1"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","6e8af5cc16fda5ceff344d002ee41d62"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","2f6c82556420154f02e48df00782127e"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ea960102a97c78caf1452fc84b9ab6b9"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","1d2babb7b99775d599263b1151367cfc"],["/Sqlite 使用Tips/index.html","cba8668e67c4eafe45541ba9a5cc21d1"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","38cf4fde71d371fedac4cdb0db8b123d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","cf2b80cf6fc6f6ba3dda55dff9b2efbc"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","1750db8f0395c4578d1ef42827a27e38"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","af2be0aa8f6191e75668d2723a31f009"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","86e9a4360833cb54b8ae10fdb6c0ecfc"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f42396fc502b3d68f2b13bbb012ac94f"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","07813ef676ff4b2be2c44c96cd0209d7"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d5e7364e8ffce5141504be6ac3872cd9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","900e679871d18cc987cf694c1d57a21f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","30a2ede98c2ed49eaaa01ec8c09ad698"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5f5b4b6e3062d256dea9aa897ace0a67"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","f778d394f7ccbc31a009a363cd90ec84"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","1fa0630c0b0f4aec7d18657a82560bbe"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","cc5888edc1762c2e7394efb2fc817b29"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","94c857599433e5d2bfcc67372a32fd8c"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","c18a801cd27a102b2cf6fddf7108972e"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4e76cdfc9ae37beacfb7063bff27be92"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","858ce9c8e1f6dd5ba40890c8e4e6f254"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","75c9075dcd556b97cd498db748b7e360"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","3cee43a6e9f4b9c8c220d1158012a09b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","f4607d069f12e715efb1453f6050b661"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6b4ed0320d08723beabb602fad9ada88"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c897c5db5ebf25a10ae44de4c9559ec3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8457fcd397a58af57dd1651549a22cb6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e4a0787b1ff43a7ab858c56f3472316b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","e1f5e17b9290e9a662bc1760474d75bb"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","1d49a91f8ba2a6fd220590c39b9408b3"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","4328b65513ac82e29b4546805ede9c6b"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","464dbf81de3d2ca4d831031fccd100fa"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b599609de94531d51ca4b426217854a0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a8508b8488000a353b046ce466bd1ca4"],["/Swift CompactMap vs flatMap：差异说明/index.html","73574ab7ddbc9cb6db39d65f4b1eb633"],["/Swift Grand Central Dispatch 深入实践/index.html","159ebb125aefeeda91dcdbc90633bc69"],["/Swift Lazy属性初始化/index.html","5c6865ee62a2346cb0b60bd7b1dcdbf3"],["/Swift Promises 初体验/index.html","719b86817dfec192b3b031f43049cf2e"],["/Swift Promises 探究/index.html","2c324d8c89ab2ce32c4aac5ecfd8f9d2"],["/Swift UICollectionView使用指南/index.html","ac4961fcdb53b4ea4f3c5ed2556906fa"],["/Swift URLSession && Combine framework/index.html","e0f824a4ac58e263bd42a6e4eb5fa986"],["/Swift tips/index.html","54bf0b274a9d6e26e1177d91492ee1d4"],["/Swift 三方库：GRDB 使用指北/index.html","fe08b1c7374ee092e3d5b21273d0a0ed"],["/Swift 唯一识别的视图/index.html","9fe2e79ba711d64166ff641151d91754"],["/Swift 如何学习现代UIKit？/index.html","4439083c8e74811989edee0a6fc6578d"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","437220bbb7215b9ba9e21f0d65073d36"],["/Swift 用 compactMap 替换 flatMap/index.html","d332fe209733d1380d3bbd558093aa96"],["/Swift 选择和播放视频/index.html","55140537181e00a7376b245fb077c127"],["/SwiftUI 系列(一)：1、 简介/index.html","5ef7034d5fe48f38c13289c2ce881ae2"],["/Swift中UIColor最佳实践/index.html","ee7be13a294ad36f0365cdf1475964b0"],["/Swift中快速简单的工厂设计模式/index.html","e47dcece5de94c6246cd730a4681bd32"],["/Swift中构造函数与静态工厂方法的比较/index.html","c58fe8e17a6003bea4a0eae5a858eb50"],["/Swift中的UITableView教程/index.html","1a19da753063fd75c5d99523e9ee289b"],["/Swift中的懒加载模式/index.html","d6c73862eb94e96c917d0f18e5b84da7"],["/Swift中的模块和挂钩/index.html","46e2fb566bd6f3385d05e5fcd3eb1f35"],["/Swift使用布局锚点添加约束/index.html","acdcb1e6ab98d13640ec1fe1096a079d"],["/Swift依赖注入设计模式/index.html","c86eb803de256a988b4691b07bb463e0"],["/Swift关于Dependency Injection (DI)/index.html","b0a06aa617bc77b4baa85ccfca8a516a"],["/Swift初始化模式/index.html","5ab878ece3514862925ebf6446c7644c"],["/Swift单例模式/index.html","f1165733328cb265a12c1a34f2c612a8"],["/Swift原型设计模式/index.html","8400768b6b452a5c4ac8bc9b3201ab64"],["/Swift命令设计模式/index.html","6571b0b19f0fa72cf1e68e0be0246042"],["/Swift外观设计模式/index.html","f889252b514df01a7d85aa70d78cc3eb"],["/Swift委托设计模式/index.html","93a1c427ea5689ffd2451d7afbb5495a"],["/Swift对象池设计模式/index.html","95cc220d0c81433cd1b8876b5552bc74"],["/Swift工厂方法设计模式/index.html","2c4273043aac707bf271e2d917071c2a"],["/Swift带闭包的懒惰初始化/index.html","9f3fd2873ef6b61ead82e55204e6f56b"],["/Swift抽象工厂设计模式/index.html","359150f9284f18c8afe023915f47cb29"],["/Swift掌握iOS自动布局锚点/index.html","9efaef1591524a01aed8812a4d767e4b"],["/Swift支持旋转的自适应单元格/index.html","9a6750d8391f192802e24a227135a32b"],["/Swift枚举值/index.html","83dbb0d0029aaafaace0cae88dace29c"],["/Swift生成器模式/index.html","d1c324c5e5b703c063fe06e6121705b2"],["/Swift结合Xib文件自定义UIView/index.html","45a0aeee1e1403da21d33f0b358a3b2a"],["/Swift编写的20个iOS库(一)/index.html","d158c83e1822ba736e753d4cc9a6cda6"],["/Swift迭代器设计模式/index.html","8fa9db1eadc967525b353c76aa2c2c80"],["/Swift适配器设计模式/index.html","2624f64535f72a852596400436104333"],["/Swift静态工厂设计模式/index.html","60efa6e564739a231325d5a211e4d889"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","def0e5979baaee0cc4431d7dffd7f91c"],["/UICollectionView data source and delegates/index.html","92f24051399e24fad6668d16a7b25ac8"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","675aa12ba69455116d8169648af02d5a"],["/UIKit初始化模式/index.html","d19f96dd5c60e5e47e9657b3ffe63e71"],["/Ubuntu18.04替换国内源/index.html","6d89fa20f0510310c50bfbc6bcc0e19c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2c94915555883923315ca7f520a10b4d"],["/Vapor系列 (一) :  Vapor 初探/index.html","a4a4aa19fb5e0f1e72ae6a01569dd39e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","09c42d3a978d27dae335797175fb5f91"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2ee0fd7187b5cbf37abf2cf5c93969f4"],["/Vapor系列 (五) :  使用session进行authentication/index.html","68923d8b680058898811e8ce6987dcda"],["/Vapor系列 (四) :  创建博客数据库/index.html","2001c403ebf0025d2b9ffa185d1f4ba4"],["/Vapor系列(六): 徒手撸一个CMS/index.html","4c4f56b3db4e418d475e652f64a89924"],["/WKWebView与Native交互注意事项/index.html","d5e384c79f0f3bcf72d280ccab7e2bf4"],["/Xcode扩展/index.html","376d4073e210c6150d443c8475f996f8"],["/about/index.html","869388ec8d9657e4fc6645e45dc809ac"],["/appleOS的Networking示例/index.html","2294c20638fcd5b06c8cbc8a3fd09010"],["/archives/2020/03/index.html","a6912f487a331e6050c835c1e4af4e3b"],["/archives/2020/04/index.html","c91c1b88504be7f0fd82a4a66166b559"],["/archives/2020/04/page/2/index.html","7986d3afd57e73d65d087da39ca74b6d"],["/archives/2020/04/page/3/index.html","97ec7698270d4ac75dd1843b76413e43"],["/archives/2020/04/page/4/index.html","7b2c2d694af7af0d7e85d764f8e93fc8"],["/archives/2020/04/page/5/index.html","8713d0a92e970e5dce6b111baeda0a08"],["/archives/2020/04/page/6/index.html","e683e371e2485f9382e6c4e9d5fed855"],["/archives/2020/04/page/7/index.html","7d03cc1f3cdcc63f27cb26a8a4f5fd26"],["/archives/2020/04/page/8/index.html","e58ba66fded1b5f29ccb600549095859"],["/archives/2020/05/index.html","3468316706d192887beaecc02e6047b2"],["/archives/2020/05/page/2/index.html","da7213d1fd14b56962f204a752bb2262"],["/archives/2020/05/page/3/index.html","fb4b7b8e699b845d3dc118cdc191f21d"],["/archives/2020/05/page/4/index.html","e7d7736dc27e0a2d38619508ee21bf07"],["/archives/2020/05/page/5/index.html","9238b3a303f4295a60ac8bbbe9627dae"],["/archives/2020/06/index.html","aeaeb915434b9075bf3f87cbf4513f6b"],["/archives/2020/06/page/2/index.html","f78a377d9511b90c4f178f285d4d9462"],["/archives/2020/08/index.html","26891d4984d35521760f94acd5e08e08"],["/archives/2020/09/index.html","0c00b548e34368ca8fbdad8fee31fa68"],["/archives/2020/10/index.html","1f51d291878110df5aa85074c8ac1ecf"],["/archives/2020/11/index.html","b370d4bff7e17bd4057a9b5d5af53c3b"],["/archives/2020/12/index.html","98c3f53abddb2fed088386b7e85d4035"],["/archives/2020/index.html","9978383f1a3e91c5e61c5f8fb7cd6a1a"],["/archives/2020/page/10/index.html","97af949507944335eabb976fe4d269f1"],["/archives/2020/page/11/index.html","f5a84b0e3da871a929eef5807877e55f"],["/archives/2020/page/12/index.html","a5bed4b0902a0e449c016047f46feb07"],["/archives/2020/page/13/index.html","c962be1f1e27b234d7c163a5c505fba7"],["/archives/2020/page/14/index.html","dfe1580c4e7c60e85a3e65f19e4b254f"],["/archives/2020/page/15/index.html","9050742ffdcbc7cf2a51274bf9d6e367"],["/archives/2020/page/2/index.html","d4210c1373859bbfaeb4e922d2a5585e"],["/archives/2020/page/3/index.html","193226f7c0963763b0beaceb9264704b"],["/archives/2020/page/4/index.html","c681d96ac41482976f1e8934a66951b4"],["/archives/2020/page/5/index.html","0a05689a91e7eea2f5b0c6cade5e1563"],["/archives/2020/page/6/index.html","1a073d6c74c81b0ae4a99425aebaaa64"],["/archives/2020/page/7/index.html","e07d2c3421173db1e2a129e4b49883ae"],["/archives/2020/page/8/index.html","d3e6db03b1175c740990fc318729abfa"],["/archives/2020/page/9/index.html","20c851055864f38d15e62dab8ba415f6"],["/archives/2021/03/index.html","9679100a5301617f251fa291a47f5d8f"],["/archives/2021/04/index.html","3ddd509701f2400c8cdbc85e742343db"],["/archives/2021/05/index.html","87f09701d36a05d582931ed130920f33"],["/archives/2021/06/index.html","15b0224f541896c2c779598826ef04d3"],["/archives/2021/07/index.html","6149749647aed6d4673002a0a840078e"],["/archives/2021/08/index.html","245a3fe07b5a8022ba1fde7b1c2d9342"],["/archives/2021/09/index.html","6ce629ec5388911215a4a011cdacbfac"],["/archives/2021/11/index.html","270f20dbff1759a009ce5368bfff69ab"],["/archives/2021/12/index.html","39435887df1a3e7eb01284eab944bade"],["/archives/2021/index.html","ec853fe2a4e37aaf9426822ff18a2d85"],["/archives/2021/page/2/index.html","38073d9c1b35d8f9088f6ae661a9edf7"],["/archives/2021/page/3/index.html","a4859cf36f63c59bd210d0a84a0e0ed1"],["/archives/2022/03/index.html","052883842a7425c98b08bef96d92eefa"],["/archives/2022/04/index.html","7f8d7c1db1ac1d1db23bb576151e959a"],["/archives/2022/05/index.html","a028f16ff5c904d57e1d74a2db1206d0"],["/archives/2022/06/index.html","d14800d07eb1a8c1f9a5d704782cb090"],["/archives/2022/07/index.html","7c7cba76c8fcdeda28bdd03906904280"],["/archives/2022/index.html","5089d9f56d1d98e2281458a6c337a6b2"],["/archives/index.html","4ec5c45ab16ff08a7f0f4171d152db1a"],["/archives/page/10/index.html","c135569eb92409e09844b1f4bd428b10"],["/archives/page/11/index.html","329b99adc77bb54ca8b5cc0a9bd8de8e"],["/archives/page/12/index.html","ac6177349f4a07b227abdc0fad92a0ba"],["/archives/page/13/index.html","ac2e66cfd617de13f44db4da3da3073e"],["/archives/page/14/index.html","aacdd2aee3a0ff74d2718df18e08d10e"],["/archives/page/15/index.html","1c8314c8638a02c3ba63fb7b675d3964"],["/archives/page/16/index.html","0fc90b4093aa966d84bec6fb082f367c"],["/archives/page/17/index.html","caa7643d84aae7ce4f4c5bedd02b6454"],["/archives/page/18/index.html","b4834b39aecee5820ee82e75938a293d"],["/archives/page/2/index.html","b3a98928a04ac7c3f442e088d49cd4b1"],["/archives/page/3/index.html","7853fe2e39d0fd390fa01ddd5823cf6f"],["/archives/page/4/index.html","32201a730d5538577b4142d2d30136b9"],["/archives/page/5/index.html","3121fbd6bb3fdd8b549bc6f2def4bd79"],["/archives/page/6/index.html","266831f9edbeaeaff4d3672d8b524eac"],["/archives/page/7/index.html","3179edac868ffedad0d5ed899c6a80db"],["/archives/page/8/index.html","9eef91eb46aa290d6dd469d0ecbc9687"],["/archives/page/9/index.html","889603875aa2d7a1d8ae90da26c2c68a"],["/bugly 上传dYSM文件小记/index.html","01d72f1cba30fe834f39db5c91a3635d"],["/categories/Advanced-Swift/index.html","1cbe8839d9e341c5d68c0daa351f98d0"],["/categories/Advanced-Swift/page/2/index.html","0144f8b8af51f6a9e53906e5daddb18e"],["/categories/App-Architecture/index.html","93fb66a73d5462ca33d15dbf50ca2316"],["/categories/Array/index.html","ca2e1ce985f68c7715bb8e27326d5f3e"],["/categories/CocoaPods/index.html","6df805ad870d1c68e3738e4ad0e5957f"],["/categories/Codable-protocol/index.html","293b7fc64142e3b9babd587ef80a86e0"],["/categories/Combine-framework/index.html","2dfb2fcdb420b977194fdb210fcefe84"],["/categories/Combine/index.html","73261d3e70bbff2b0631880c26a60af3"],["/categories/GRDB/index.html","4c98bf3806beec29bc3d4dbf01b2d607"],["/categories/Go-入门篇/index.html","96e337151d51f03b6b4b483c37e36c75"],["/categories/Grand-Central-Dispatch/index.html","88d7ee9ed3842d5e1c1e9ee0d7309f7d"],["/categories/Homebrew/index.html","a680b54801614553f8cd8e4394fea9d1"],["/categories/Linux/index.html","25f1a0030b3d198ea88b5262e619884f"],["/categories/MySQL/index.html","7c077dd593092c9063e8cd38497dd1b1"],["/categories/Promises/index.html","941119d315746d425f7bc451f773985e"],["/categories/Protobuf/index.html","74f69e4cedc52b3bcd4f899898068384"],["/categories/Result-Type/index.html","8842561a92cc9e5d230c35451a019823"],["/categories/RxSwift/index.html","3935cf81feb8a694c7f44ecdb24e26a8"],["/categories/Server/index.html","b64a22abcd2a3b2f7827db3a7e6d190d"],["/categories/Sqlite/index.html","ab24f0e85f85a53cb30c961c9fb73ad5"],["/categories/Swift-Apprentice/index.html","5026dc4b525261b8f3df7159e9c9188c"],["/categories/Swift-Apprentice/page/2/index.html","2fde76b05e079b1fa606c341f6376cfb"],["/categories/Swift-Apprentice/page/3/index.html","b81ddc460439ccd33ceae88e8075e1a3"],["/categories/Swift-源码阅读/index.html","f447b1b1027c3d8adfc0a57288cd7fb0"],["/categories/Swift/index.html","4ddb83df887494eafc8bf562179bd3ce"],["/categories/Swift/page/10/index.html","e656718a3ed05d73cc4f18fc97b78842"],["/categories/Swift/page/11/index.html","0b34d2c8811f9819163463f1c57d5348"],["/categories/Swift/page/12/index.html","09cc849fe5895574c9a73c227c167c06"],["/categories/Swift/page/13/index.html","45f9971a763ee63bb17637807137abdd"],["/categories/Swift/page/14/index.html","94adf51e0518e15f1b25884694ea2c49"],["/categories/Swift/page/2/index.html","666e6a7edcfbb7934544ef034c6f2113"],["/categories/Swift/page/3/index.html","6863989768078003bc30194606735605"],["/categories/Swift/page/4/index.html","1624bffa0926e149e6117a6ddaf2ca41"],["/categories/Swift/page/5/index.html","7e85370499e81bafeecc4cf6777b7171"],["/categories/Swift/page/6/index.html","fcaf217b7676e8484fe45e137287f002"],["/categories/Swift/page/7/index.html","7743ea3b7ee6493a4356a087833679ec"],["/categories/Swift/page/8/index.html","58e4794cafb3649bd991dde9f695bcfd"],["/categories/Swift/page/9/index.html","905286bc93973afb130809c171721b7e"],["/categories/Swift5-2/index.html","c6785e9c82805a30e6d01c11b7962279"],["/categories/SwiftLint/index.html","26f19294cf217ab4c60f78d1e98279d8"],["/categories/SwiftUI/index.html","e420291e6f032f05be622168c164fc78"],["/categories/UICollectionView/index.html","081e3246a43697852bf4aeb9ff883076"],["/categories/UIImagePickerController/index.html","1e46eb9c5725519352743671903aaa7a"],["/categories/UIKit/index.html","b80837f11847404e9cfecf671203cc1e"],["/categories/UIKit/page/2/index.html","c2e95c5655b4ca4c169ee59ceca66a91"],["/categories/UIKit/page/3/index.html","3f0c9e3fcfc700d3a18927a9e7f78252"],["/categories/UIKit/page/4/index.html","6bc4fc5c085ef9ff8a0fd7bad00f44af"],["/categories/UIKit/page/5/index.html","6e301c36852f867e185ee4eb32f96754"],["/categories/UITableView/index.html","e106e0b5c4ff23da9582373ca1e3e094"],["/categories/Ubuntu18-04/index.html","8ec830b42018d75fe4c9381a3e21ba1f"],["/categories/Ubuntu软件源/index.html","a31b0ffc2543282f08cdd3e665dac2a3"],["/categories/Uniquely-identifying-views/index.html","887cba47c5c907b6efd82971f588b71a"],["/categories/VIPER/index.html","8183963cdc68f2e2b98775624ed6c638"],["/categories/Vapor-4-0/index.html","4d270488dcbd9478621e021c76359b47"],["/categories/Vapor4-0/index.html","997ebf561b820555869b654e903a5959"],["/categories/Vim/index.html","d44e805a480c6bc4d55c3b4ef4e48c54"],["/categories/WKWebView/index.html","166436b5a89b1e38958e2f602718e02c"],["/categories/Xcode/index.html","8d97c52e9a6598cc6dbbf72ad21b58c8"],["/categories/appleOS-Networking/index.html","9aa1a63e12655e8fe76c214909cce68f"],["/categories/bugly/index.html","0da0e1bb901de5d150fbcea2bfcbe29c"],["/categories/enum/index.html","91961857e8b592918270571d33c88c6d"],["/categories/git/index.html","3a6178253a8302e9142522e9bb192dcf"],["/categories/go/index.html","52b4f3d8506dc27063b5c79495f0f775"],["/categories/go/interface/index.html","72dba4ee14f28fd240d8cce7d60cfbca"],["/categories/hexo/index.html","95da94e08ca0c271a87ba19857f48e87"],["/categories/iCloud/index.html","cdf6c1daa322386cd86548f861638807"],["/categories/iOS/index.html","6e78a0f7908cba23bf81d563303f0300"],["/categories/iOS/page/10/index.html","01500b2926d123c2a7ba2d05734c9377"],["/categories/iOS/page/11/index.html","88e846372c5e711db2cf9750430ffbf2"],["/categories/iOS/page/12/index.html","848f6c8f14355a354e06e7c75ef19f7e"],["/categories/iOS/page/13/index.html","6f2eaee534e80b95720dd794d3a37d89"],["/categories/iOS/page/14/index.html","03dd1ec90a79d424abde601edfc96608"],["/categories/iOS/page/2/index.html","06288500d4167cb64ff2b78f7e3e2dfc"],["/categories/iOS/page/3/index.html","7268ea084f9a7de2589f354d0ae15951"],["/categories/iOS/page/4/index.html","ced60552e2cd03e605e9954e3e0521a3"],["/categories/iOS/page/5/index.html","9c6c2cfb599caa3103ec5242907242b9"],["/categories/iOS/page/6/index.html","ea6835c03e1e6226231f7f84df98abf5"],["/categories/iOS/page/7/index.html","74fc0d5c279188783c967727a6abff0e"],["/categories/iOS/page/8/index.html","8c9c782bd5fe97da4af5c7c506b4103c"],["/categories/iOS/page/9/index.html","988f953fac2b787256c35a0ecad4f118"],["/categories/iOS面试题/index.html","14917ce64a4e2b90018f580890249759"],["/categories/index.html","a5889397339ed515a5ec5ebaf9ff9e59"],["/categories/random/index.html","e33238c4e65e943698ae7c31d2eed28a"],["/categories/三方类库/index.html","0488428cab7f569f4ccf9068f38f8051"],["/categories/函数式编程/index.html","8ca5101947629a5eb506c880933bd1ec"],["/categories/子类化样式/index.html","9c9e13193956b82c38ed36c9bdc9d1cf"],["/categories/开发技巧/index.html","17429600eaa288892a8f47ffe8c80fd7"],["/categories/开发记录/index.html","63ca57b974a02ffcbfe652c18aeeb41f"],["/categories/数据库/index.html","498b0d8552b8e9b538a11eee8f5a79b9"],["/categories/架构设计/index.html","6186136f97e87d7a84b9045e5d1871d5"],["/categories/测试/index.html","9ab213227827dc425d29b01a22e533df"],["/categories/用户体验/index.html","6686bf14599978dfa1dbee8967ca052e"],["/categories/用户协议与隐私政策/index.html","9650981d43e96c114809f81d733c3b80"],["/categories/组件化/SDK/index.html","4c1a0b19dd6a552a8b889292b03bc04e"],["/categories/组件化/index.html","53cdae61adc0b91823883413434f9ace"],["/categories/组件化/模块化/index.html","acfd3224b18d142396820a8b489fb5cf"],["/categories/设计模式/index.html","0836bfe9d41052a8f52aa62adb7ac02c"],["/categories/设计模式/page/2/index.html","7d3c13eb1ea18d3d683b34960eadae43"],["/categories/设计模式/page/3/index.html","5728502483a36001375f9f4d5d749adf"],["/categories/逆向/index.html","83d8ce0cbd197543bbe715720679cfda"],["/css/main.css","a3627bcc71084d7735c57aa11ab74c5a"],["/go moudle 导入本地包/index.html","2e0b6c75e97cee8a430725e2f4bd06d6"],["/go 库专题(一)：gin/index.html","28badf12896dc2403dae5b108083994f"],["/go 每日一问/index.html","768cfa2cfa4d0c0748cc63576b6813ef"],["/hexo部署失败/index.html","fa7012544e9595ef1cef3ff592e3d2f5"],["/iOS 15 适配/index.html","eee3365a57cad0aaee18362be6f67846"],["/iOS VIPER架构深入实践/index.html","9b08a39a616b44033af188da99d2e0c6"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","b5cc00abfea8ffbb519dfe34f3c51875"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","d59799f1a8ce51006f38520c76e8ae70"],["/iOS 自定义视图，输入表单和错误提示/index.html","de8ee541468cb42d2cef8b6338ae8382"],["/iOS如何使用iCloud文档？/index.html","58893b81b66797db597a207922f7f1de"],["/iOS子类化样式/index.html","cccb851a219b8cca3217298f0e57d4a4"],["/iOS开发记录<一>/index.html","d14770f68e0d6f0bf5e8bbba3d72016e"],["/iOS自动化布局编程/index.html","b2ea907255a384024bcdbc936240ea6d"],["/iOS自定义转场(By Swift)/index.html","c26897a021858ae870389c71daa5d9cd"],["/iOS项目架构：使用VIPER/index.html","e045493bfe3323dc0dea4a9a2dab7a09"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2c980ef9d342876352bfd5a9a2877555"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","28c0568a1f4aaf8892c4851312144bae"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","97e974e76f5cf88a44ada86c0e014aad"],["/page/10/index.html","3b95558f1b0d70429b6e7ca1a76f1e77"],["/page/11/index.html","b20ee2636c750afce09ee8c445abf90c"],["/page/12/index.html","6b2a716fdb5ae8c6fac01db2e3d74e6c"],["/page/13/index.html","22c0a75f0a6f4585dfb815e471bba877"],["/page/14/index.html","4361179f72138a9a4e48c12ad3897e37"],["/page/15/index.html","77de82c26f236da0a83a89c511d98629"],["/page/16/index.html","7eb7bb8272cfcada94a75d0ac6b78dfb"],["/page/17/index.html","8adf20c3217fb3646fba2eeee5695291"],["/page/18/index.html","e3597f9d98ebfa5cb1c0847536c00fdb"],["/page/2/index.html","e13a0026f64f1395b793b7fd2833e691"],["/page/3/index.html","958cf989ffd38aaba60aae1be92c8af3"],["/page/4/index.html","bae9d3c6d0feb913d90529590048cfc0"],["/page/5/index.html","b22af952e244b6a680c4bc49a3862068"],["/page/6/index.html","a054d1f8c0abba7b6df573fb7ae1f8d5"],["/page/7/index.html","91fd752999771d60ec136d3425a79218"],["/page/8/index.html","dfe0fa68200ca25cb1de99ad5ff6fbd9"],["/page/9/index.html","40431fa1cb530b3e239ffca33e8d539c"],["/schedule/index.html","be4263ffd04c10e2a325862d2bda340e"],["/storyAppPrivacy/index.html","2c6f591fffb77598da87e2c7d0497aae"],["/sw-register.js","b214ab63a4857d89b15e7b2fb2f7ae11"],["/swift 专题：函数/index.html","ca323ac416123b3b62f58642d55aaa5b"],["/swift 专题：闭包/index.html","a88fb41b9d77e3b8982967eebfb84546"],["/tags/Advanced-Classes/index.html","02b853f31f8b144282af20312e7fe7fd"],["/tags/Advanced-Swift/index.html","282c71f18e357e019d06d4faec8cdfdf"],["/tags/Advanced-Swift/page/2/index.html","0449eb5a22b97ff54a9c0b6c95f0892e"],["/tags/App-Architecture/index.html","8f63ddc1bc825a4c73ae4249bb3dd301"],["/tags/Array/index.html","4394e90a18be347a3594d34acaa7bf44"],["/tags/Arrays-Dictionaries-Sets/index.html","b79e4a634791309f798b0130d77738a6"],["/tags/Authentication/index.html","eadd370e9fe360a2bf9e85773c097f59"],["/tags/Build-in-Collections/index.html","8420e52a224abdfa30a8e5c8b1125286"],["/tags/Building-Your-Own-Types/index.html","46eaf9170626b9d4a55643633f18a38e"],["/tags/CMS/index.html","52882915b1ea4f256a8062e3c1bbbc48"],["/tags/Classes/index.html","dd6f613bf7194ec089ff9e00a58022de"],["/tags/CocoaPods/index.html","822e51abb4d7abb94a6dcdd7924100c9"],["/tags/Codable-protocol/index.html","e7f1c79c296a1fd84f0d274da5aa5770"],["/tags/Collection-Iteration-with-Closures/index.html","b3ffc87359e2ebedb07b9c7e428c859e"],["/tags/Collection-Protocols/index.html","d6bc357cdfe751bd234e9583296bb588"],["/tags/Collection-Types/index.html","3c66c8f886565537c12c9aefa28926bf"],["/tags/Collection/index.html","8af67050200e4d53178c362fab5687d8"],["/tags/Collections/index.html","75558a717148894fb35fc55ef4cef44d"],["/tags/Combine-framework/index.html","b25b0e67dffd09b02e3c6652d7caca32"],["/tags/Combine/index.html","09728030819566d1c87f02b3b20a3ecd"],["/tags/Dependency-Injection/index.html","8f84e7f112ce09e073460984e2fb3780"],["/tags/Encoding-Decoding-Types/index.html","1a7c375fc3b42300b5df44ab6de6523a"],["/tags/Encoding-and-Decoding/index.html","043a8be0413e90ba6e674862e9227d93"],["/tags/Enumerations/index.html","f269fc017aec985389a22f7a87e75315"],["/tags/Enums/index.html","b8a8afc9b0e806c6c5552ac4161d5b16"],["/tags/Error-Handling/index.html","448b73ee7115e77dcb562c3862a2ce68"],["/tags/Functions/index.html","9f9de6c370b7b1034d41a4c1df0fa37e"],["/tags/GO/index.html","7cc1fd775efedf6e105409d194aba777"],["/tags/GRDB/index.html","5c98a7447a2f91287305078b22306a21"],["/tags/Generics/index.html","a44ea815360e3f38632e178ec7a51071"],["/tags/Grand-Central-Dispatch/index.html","856da476214cd5596b51c0e464fb9e27"],["/tags/Hello-Vapor/index.html","ef23df76468759718707c441c2611c58"],["/tags/Homebrew/index.html","01dc4a7e8f6d4f0e1a9b06857d2aa591"],["/tags/Interoperability/index.html","7e3e74593641feacf311b5e965790c78"],["/tags/Introduction/index.html","774b7972f7543a245569c6ae9909825e"],["/tags/Leaf/index.html","4aa0a1904bd548cb4996788000c7746c"],["/tags/Linux/index.html","5600f9329efc4d44881c84b8519b886a"],["/tags/MAC/index.html","891809d87dbbc254ed6c8e44262e7462"],["/tags/Methods/index.html","5f3b00f8517a7d3d201f6668e92bf29b"],["/tags/Modules-And-Hooks/index.html","61ab9b2fcd88fd32c8cd1a891933f237"],["/tags/MySQL/index.html","a924ebdc63d3b676332a5d2e7c07cccc"],["/tags/Optionals/index.html","f91b1917bf4266bb37f6d618cbc34596"],["/tags/Promises/index.html","3ea76bdca5f7db6eac2a2db546813657"],["/tags/Properties/index.html","77c39dc82d4a4809a6c1f4ea78894e15"],["/tags/Protobuf/index.html","dd047bf3351f105a28a9e68e370d5172"],["/tags/Protocols/index.html","b1f973e93974890ca842a738b55d28d3"],["/tags/Result-Type/index.html","f88afff432b014c922e899000bfa6e89"],["/tags/RxSwift/index.html","a9481ca24fdb274d7f4ad8d36edd0266"],["/tags/Server/index.html","ea5ed68a1e583958f834379a12faf8ff"],["/tags/Session/index.html","679ea0e8cff83ba48674f7e184382252"],["/tags/Sqlite/index.html","8155db100eaa2d7d8382f0ddc92a9a97"],["/tags/Strings/index.html","3b4706d01d8890bed86660be96a77386"],["/tags/Structs-and-Classes/index.html","c7f9800b8c4ac3053a1f8afa8cf44830"],["/tags/Structures/index.html","428a4b6cdec6f656ed51612ee2b12d39"],["/tags/Swift-5-0/index.html","e34e90967807d78e98c5a9714da5ee12"],["/tags/Swift-5-0/page/2/index.html","9e81d414638d0d3b4240243828afe3fa"],["/tags/Swift-5-0/page/3/index.html","8f75075811d715aad3b2e85b8fcb8a4b"],["/tags/Swift-5-0/page/4/index.html","7778fa7069cb38a10da17373f3330985"],["/tags/Swift-5-0/page/5/index.html","e6845753ba9cba4a7723d0445619ea8e"],["/tags/Swift-Apprentice/index.html","fc4deb7b7725c63c950cd6f1ac3ad0fd"],["/tags/Swift-Apprentice/page/2/index.html","a4546643028244384090a1eaaf26e96b"],["/tags/Swift-Apprentice/page/3/index.html","83e93c0e616359d343ebf8f36dfd922b"],["/tags/Swift-Package-Manager/index.html","560c1b8646733b3a646c404caa5a57ac"],["/tags/Swift-源码阅读/index.html","921ad026b5cdfd233460a8a533414632"],["/tags/Swift/index.html","23ad92321be4dd82e01ef12447d20c42"],["/tags/Swift/page/10/index.html","5a3131ee7f3c415da0a3ffab4b09af4e"],["/tags/Swift/page/11/index.html","b353c31dfa7240c54389054c5180271b"],["/tags/Swift/page/12/index.html","703f4776cb808295fa6d9b986a8e020b"],["/tags/Swift/page/13/index.html","c5b5032666395906ecec640bc5b1ba80"],["/tags/Swift/page/14/index.html","f82b3c755fa872320c9fde010bcd11af"],["/tags/Swift/page/2/index.html","771e0303f8ec0a65185453f49ef50efb"],["/tags/Swift/page/3/index.html","e2f18d9737e385abcc4b8bc63ce53597"],["/tags/Swift/page/4/index.html","fb844c0be4a802f79cf9f198d94fe622"],["/tags/Swift/page/5/index.html","03bd82f68617d2c0305199728bb63c32"],["/tags/Swift/page/6/index.html","286adfb6d32fc7251ae443921525269f"],["/tags/Swift/page/7/index.html","52164533f3841e5b07a06716fefce840"],["/tags/Swift/page/8/index.html","26f9fd37f84d74339728a42f23e20863"],["/tags/Swift/page/9/index.html","9e7015232224647f974bf80de8904c62"],["/tags/SwiftLint/index.html","a3dac103377ed00782d07ff6108367af"],["/tags/SwiftUI/index.html","ecdb9593bc63420780af754cfb362972"],["/tags/UICollectionView/index.html","3a8151d17d6c8ac9e1774c4f3dc6ce7b"],["/tags/UIColor/index.html","2e0296540bffb3b86ab3d902a46687bd"],["/tags/UIImagePickerController/index.html","8108cf4262fb93bb4a73cc17a60b9f4f"],["/tags/UIKit/index.html","237a750be6aa46ced72e52f700087bcf"],["/tags/UIKit/page/2/index.html","f843b428d5cebd7cbf2acf72329e4234"],["/tags/UIKit/page/3/index.html","8bcff73b10721148c55a4640fe269564"],["/tags/UIKit/page/4/index.html","2550a2d31393eb928d003b9ddc609472"],["/tags/UIKit/page/5/index.html","93f6264618491bcba8e5b7f7c3e37a6d"],["/tags/UITableView/index.html","07e3f0169c49417b8d64b5021d3226cd"],["/tags/Ubuntu/index.html","4362fca477f3fb91c208537b6af4dff2"],["/tags/Uniquely-identifying-views/index.html","04a6c3119c3683a52a59948705095047"],["/tags/VIPER/index.html","b767cc7fefc95b51a7583c561bdc32e7"],["/tags/VMware/index.html","969ab2f6df261ea8c5116f44eaa6f5b7"],["/tags/Vapor-4-0/index.html","ea1ab03f7bb80eff8bea0946ca24fd87"],["/tags/Vapor-初探/index.html","e8612ce4bc008437d41ef0fed9c94eea"],["/tags/Vim/index.html","d0f9eb96ff0182ecc26d9a8c7aa429ad"],["/tags/WKWebView/index.html","f1e4ee5cd1a7221536e1322fff89db4a"],["/tags/Xcode/index.html","4531e57fb2170f91985a69983740108a"],["/tags/appleOS-Networking/index.html","96c9e1c72493735f93109a63cf759430"],["/tags/bugly/index.html","215cb0fe2f82f88547355783cc588545"],["/tags/enum/index.html","69e97ccc626606e4633a1fc2a80752ef"],["/tags/gin/index.html","5a52bd73308b3e2fb60e486b64a3006d"],["/tags/git/index.html","3e7e928ea511a565be847866f7158c35"],["/tags/hexo/index.html","b3be246c14b446db9931b9a6c270bf4a"],["/tags/iCloud/index.html","15b987daea3b9d106edcdffdc27904af"],["/tags/iOS/index.html","8d73b30e70ad19d6b1c16d9565722fda"],["/tags/iOS/page/10/index.html","6b455ffdaa9ace7946b85e08eabb5365"],["/tags/iOS/page/11/index.html","546e263886198711bde3d8e79ff1c817"],["/tags/iOS/page/12/index.html","08f84827a9fb997f6aa229ba505624b4"],["/tags/iOS/page/13/index.html","bf6533034b47af65f84bc0a7fd636b4d"],["/tags/iOS/page/14/index.html","0caa049b8f03d86065fd69eb36723516"],["/tags/iOS/page/2/index.html","6f35c43b7af8ab5e4a7440843e415f90"],["/tags/iOS/page/3/index.html","ce2578338dc475fd1ffcd4c68c7066a9"],["/tags/iOS/page/4/index.html","b4a1f2cfb9e1a4bdda8c5977bf9c3881"],["/tags/iOS/page/5/index.html","1ab49105e3b16a3ce0ee14604466b1ff"],["/tags/iOS/page/6/index.html","0f2bf3fad8fe429df1e9f2842e4bcde5"],["/tags/iOS/page/7/index.html","08e9600045a0771be037b90dcfc7f399"],["/tags/iOS/page/8/index.html","d0642736ba1c4f72b3bc58c472efab3e"],["/tags/iOS/page/9/index.html","f69d3b357d9adf37f6c4707a848c6bbd"],["/tags/iOS面试题/index.html","55da77e225c282b669a4d0406d8e3c0b"],["/tags/index.html","537eaa619b5572898752eb2c3dc9d1d7"],["/tags/interface/index.html","61b15c2fdffc6446eefc2d34816916ac"],["/tags/non-optional/index.html","10197506e1c61aacd98faebd6b2805d5"],["/tags/package/index.html","356e7526ca6217ec5cc219ba385c586e"],["/tags/random/index.html","f198b0b964a9649460131c819cc8c75e"],["/tags/transition/index.html","5628ff47344780c9327b44c775dcd654"],["/tags/三方类库/index.html","e1f12cebc23de6ef35e96cdee3951349"],["/tags/依赖注入设计模式/index.html","54773abea8e321ea8d8fb5341b672acd"],["/tags/值类型和值语义/index.html","4819297c04ef61695d4209a7e32ee2a6"],["/tags/内存管理/index.html","efe4fe0ce90cad35a9caebd0f65bc0ed"],["/tags/冒烟测试与回归测试/index.html","c80883aeeeb46120eba0df9bdd4049b9"],["/tags/函数式编程/index.html","6b708fec26ab50fe98b03febfa326bb8"],["/tags/创建博客数据库/index.html","3a0f1f061e9aa11e35db4f475e316135"],["/tags/初始化模式/index.html","4ce6e7047a82d1c8c3c9ed99d1a0f1f5"],["/tags/单例模式/index.html","2d55f65f7c7b375bb62f5141d032169b"],["/tags/原型设计模式/index.html","d0562eb1325fb311d8f90bf2ea115232"],["/tags/命令设计模式/index.html","f9fa2d13eeeea3715f9aec1b28904ce2"],["/tags/基本控制流/index.html","127cf22d3d1ba13be8664d7691a1be5e"],["/tags/基础语法/index.html","1b468ecd47d5ed87e57efae462df1b0e"],["/tags/外观设计模式/index.html","79c1763287e8c5a76be60a5c7753e9fb"],["/tags/委托设计模式/index.html","4ab4a25f9dd0112be99e15c256b140f6"],["/tags/子类化样式/index.html","673d7b52397c6d7e49dd482b51253408"],["/tags/对象池设计模式/index.html","4803ad90c2df8788ce24bcac1da7b23f"],["/tags/工厂方法设计模式/index.html","05190307ab4f600981e986d875f6ebf3"],["/tags/工厂模式/index.html","890bd4199a74abfac7a88e64f4c2b70f"],["/tags/工厂设计模式/index.html","ec4e4c32b227c1daac7fa78c02155817"],["/tags/开发技巧/index.html","465d157f7b0eaa883a6a9a176375a239"],["/tags/开发记录/index.html","031c91235cc39430f668e8746de9540c"],["/tags/懒加载模式/index.html","d985c011e82ac5d71bb552b75f86de8c"],["/tags/抽象工厂设计模式/index.html","ead4149a5cf05581261fc91b9841bf18"],["/tags/数据库/index.html","9908e05f049101b6a33e1a72526641fb"],["/tags/构造函数/index.html","fcfd4282fafda91165718a20392048ba"],["/tags/架构设计/index.html","975505f9ce2e21c4855249675b44da14"],["/tags/模块化/index.html","610c6553c7165dc1f7a1d9c5690b1dd1"],["/tags/模式匹配/index.html","e180fc17ffa0192e3954cd1582dd206a"],["/tags/环境搭建与验证/index.html","b59ec03d566cc2e62864194e692900d4"],["/tags/生成器模式/index.html","5a57ec30c432536498fcb232454fc278"],["/tags/用户体验/index.html","09f917c26cecbfcb05e61c2be313c00c"],["/tags/用户协议与隐私政策/index.html","73eedf9ff604491320ac77d5217b283d"],["/tags/类型与操作/index.html","61beb0df5d9a3b0cc949efc38d4c22e1"],["/tags/组件化/index.html","c342bdf64a0237e8d2fd7cbc3ec5c8df"],["/tags/自动化布局/index.html","ceee80de0ef850ea0b679e7b2e87c579"],["/tags/自定义UIView/index.html","eca11cd64d1357635a171aec8d78f3aa"],["/tags/自定义转场/index.html","2fc6f1414aff5c10ec6bd4281deaeaea"],["/tags/自适应布局/index.html","f0a0a87eebab9f53a244f3cad66f64bd"],["/tags/表达式、变量和常量/index.html","b8d4f2b4730d2b8aaa7c72911d1ac1a4"],["/tags/设计模式/index.html","3cb4a857bc7221664f951fd75dc79349"],["/tags/设计模式/page/2/index.html","cf42a74449fe9df80218abb435a46a24"],["/tags/设计模式/page/3/index.html","57463b52b0045f7f94ed5b0a2145f791"],["/tags/访问控制和代码组织/index.html","236e569cbbe03472778f22d767a4652c"],["/tags/运算符，下标和键路径/index.html","4d36eae78e6146270e53a01eda3a6744"],["/tags/迭代器设计模式/index.html","28771318d87acff5d3bda7a7766900c6"],["/tags/适配器设计模式/index.html","e63d4857005fe87f5f0033ef6c1bdd34"],["/tags/逆向/index.html","1929c922dcbf39fd40207150d7dc0454"],["/tags/错误处理/index.html","5adae569dfa3f4e573af7241410d2259"],["/tags/静态工厂方法/index.html","9970624d5fd8a7d5d20d491510c3e45a"],["/tags/面向协议编程-OOP/index.html","696b8592555b80862ebcc3e8bb64794e"],["/tags/高级主题/index.html","42a44ab1a27bc76123e12a8427a627bd"],["/tags/高级协议和泛型/index.html","c78595746afc765ae93b74324edc3c27"],["/tags/高级控制流/index.html","cec0af1218e3367e87c1e7817ad4c6e9"],["/xcode 常用的快捷键/index.html","73b65c40429ed46dc80e571be88a35f3"],["/为iOS应用构建输入表单/index.html","dd1e5d87256c45ca1f207a6a114160e0"],["/产品开发的幕后花絮/index.html","00db9298e6ae142d63b31d152221e5b1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c74dda0cdcb4573f6199ad9b71b82f57"],["/冒烟测试与回归测试/index.html","e008b8f680fea969e214146ba670c2c2"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","22678312f0f8b4d0aadd9c8240c9bea6"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a8be0e48adad671515a219297818a0f2"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","96d2b2fc7fd19912f62007d3aa871f05"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a01fe7310999bc407856ef66d5fd1196"],["/在Swift中创建自定义集合/index.html","f405889fa407316fcc90f34314a02d2b"],["/在Swift中处理非可选选项/index.html","3b2d1dfa8acd1b9fc7688cde46ba52fa"],["/在Swift中生成随机数/index.html","ad308fb3316842668344465897d30645"],["/在Swift中重构单例模式用法/index.html","3925e794f93fe97dc4eae5fe8c820f02"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","1fff19e61ae0d941230fb9314fd871fa"],["/如何为VIPER编写服务？/index.html","fa8372fdc11d7d118e78523e74fffce6"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","b98c6f11de1cb37965b4a84f233d30cd"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","db706c866dbd1a378ac721ebc8e352cb"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","436e59c853ab113cd3ca1cbea1fec81b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","3a95bcb5f61a6a3b85859c3a1a43c398"],["/掌握VIPER架构/index.html","0a7676f936aa8b2772162f5f48445161"],["/揭秘 WordPress Hook 系统/index.html","c68dda495399009d644c3865bf239836"],["/比较工厂设计模式/index.html","6db95da5b72059016d0b7eba0af70d90"],["/深入了解Swift中的Grand Central Dispatch/index.html","742cd13e4c3d4ef0dce3d8d7bf49436b"],["/深入研究Swift框架/index.html","9ba66af63fab7373513d989f6a41acfd"],["/组件化插件化与模块化/index.html","5adbeb1ed248d3a72a49d719deb9e58c"],["/组件设计与SDK开发基本规范/index.html","98c9d5649b6a6b21944703346ccf01c5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7d37eee78a336724c0064c5e35072fef"],["/选择Swift而不是Objective-C的5个理由/index.html","d59faf8bc8cf78afe7b416697ec7ed12"]];
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
