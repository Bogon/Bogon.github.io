/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f29ab38cd1613bfb483f3db5e1d33e19"],["/2020年iOS面试题总结(三)/index.html","ef21ecd53e5fde42e94b3d3747a7f451"],["/2020年iOS面试题总结(二)/index.html","9ddd98d2143e74e6a8c51b28104e4f73"],["/2022 iOS 面试题(附答案)/index.html","2d29d001e57be1e94ce4106b96baaabc"],["/Advanced Swift系列(一): Swift 简介/index.html","10b4fb259ebe69e806ba6ece77700872"],["/Advanced Swift系列(七): Strings/index.html","ecc4d620ebf83c574a33c727daa424a5"],["/Advanced Swift系列(三):  Optionals/index.html","e464fa359a75c9c1b652cdce4764b436"],["/Advanced Swift系列(九): Protocols/index.html","0b1ec09fa303d95264d67b812bd1196e"],["/Advanced Swift系列(二): Build-in Collections/index.html","44fd7e5914170dae9f619dbf6443e7c7"],["/Advanced Swift系列(五): Structs and Classes/index.html","967665e25675d977e77e68802b1f932d"],["/Advanced Swift系列(八): Generics/index.html","5105ba646a45fa962d479ba31d5ce472"],["/Advanced Swift系列(六):  Enums/index.html","5a6a7db7446bdc3c8fcba3e33d0566dd"],["/Advanced Swift系列(十): Collection Protocols/index.html","e8c4bbe2535b5e4363a273f33b6a928a"],["/Advanced Swift系列(十一): Error Handling/index.html","908947f57f2aa30ed0d691f6c428f3c4"],["/Advanced Swift系列(十三): Interoperability/index.html","78c6321fb1004b332668f67c68cf1815"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1040ea1e759b65a29517dc2c1f674a56"],["/Advanced Swift系列(四):  Functions/index.html","9aa791b97fb61cef41da10e74fc9e170"],["/App Architecture系列(一):  简介/index.html","be2f4531dd87d2d44cdff230ef2626f8"],["/CocoaPods 设定版本说明/index.html","c1e2cbde60dff5a7abe8703ea39c80b1"],["/Docker 启动 MySQL 指北/index.html","8899406fb637cb3de4630053b47fb3a6"],["/Functional Swift 初探/index.html","7b9674058a9d0c9cfdb49e000ac143c7"],["/Git 使用小技巧/index.html","78c861de21cbb3005a8974f0ccb63ced"],["/Go Protobuf 初探/index.html","f30530031b593f7ccd0cf2c23c4889e1"],["/Go mysql Tips/index.html","ae9070d603b88e16952e2544254f6d50"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","ae382a608e147a2370595d86197a4a3e"],["/Go 入门篇：2、Go 实效编程/index.html","c1f88a82f2d74d11ede6fbdfeca0f5d4"],["/Go 入门篇：3、Go 重要概念/index.html","3845ba3e71614a1c79bd0327f3264322"],["/Go 基本语法初探(一)/index.html","ba1e4a13ac1631dc65ebb345d2d531fa"],["/Linux VIM 命令及操作小结/index.html","8a2bb45101b49e1332f8a248b4ff9536"],["/MySQL Tips/index.html","63a99d787baf6aff9f5f4808c23a3264"],["/MySQL 基本操作/index.html","22c3e20975b26b7c6673e61744a079f1"],["/MySQL-列类型和数据完整性/index.html","26068a3ec4209e5f263c5e1c53b213a3"],["/MySQL-数据库设计和查询语句/index.html","11cd7a4aa608fd9115cdb38b45bc9c73"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","852cbf9e24b404535e1a46501694c013"],["/NSCODER和SWIFT初始化/index.html","cdb036bd83af7c2ddf05e51ad8d4db40"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","6c366f85a3da39fb506b2decd23e70cf"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","143e858d4c9cbd3ea9ad4ffcdeee7c87"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","be02a01a4ded29c667a0727d68d66683"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","37665ae1bf6b303f06c8001b2d94ac0a"],["/Sqlite 使用Tips/index.html","b335c15cd3917367128fd0b9f31a5794"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","fbb45fddbe7b16d99ea66790c65e6028"],["/Swift 5使用UIImagePickerController拾取图像/index.html","2a701fe64f40149c50c397a70c595107"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","07ada99400e317c916df55a9937a5c22"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","811f0a114c57f47908af1ccd48652305"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","5f1dd743835aa1b57b057bca3fc020c4"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3b70f5a63e00becb1cb3f17a87514d92"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","702c045c252e29613b641e73c023e76c"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","bc3218aa7e753d2ca51c4f51effb2828"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","a3deb576b9db1e9ec356c5be29d127a3"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","87c0dbd49963083264e224cd55266f8f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b35f6258878817d22a973a73ab1fdfe6"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","f0eb8ba7a3f2741e4042fc73120b0ead"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a97384fe113d8f745444c865e2fb8b34"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","1e2e87bbb3f501aabbcd9e99c3ad7011"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","3fa6ccd9c3c1c4b5728c359ba7fabb5d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","7677f3bddd311c70d6514af3b752da6f"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","3ead6840d0f281ca9c508ab92f22a4a3"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","267bce38ac5d2fee807d5d2f66de3a71"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c7f45583ac71d76290e8a2e58b52b8fc"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","9cd0e981f3c5a939f32dddc38b30c1a6"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","62971469661989d728db8d0f6bd035ef"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4e1ee459f6de2bed00b7835305b827a0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","b7831860c1a89aafdf2fc5dc4fb2a35c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","1c8fdb1bfd150e1a745f82959ab52b6c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","60759fded9277d67b67a1a83c3fa4b37"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6ca79e1944c860aa28e31a4e7b699660"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","f27a59a1cda1f85dba9ca2d0ab13dfa9"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ce9d21feb65005fa156a40ec8a2172fc"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0c21865a076df2c0b48de4a7d9de52fd"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e04fa843b2a69169a8447d65728fccbe"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","ebf84fe68b9e99b7f6f19e8008b1288e"],["/Swift CompactMap vs flatMap：差异说明/index.html","e6cfb53e5b86d44687dbfe3f6430c2ff"],["/Swift Grand Central Dispatch 深入实践/index.html","4109d4ba6b8be3bfd8c393b7579a8025"],["/Swift Lazy属性初始化/index.html","8fc1b9ec6d14236b29c46fd85a16c61f"],["/Swift Promises 初体验/index.html","7c7c1bab5ec5cb45ed951053acce1cf5"],["/Swift Promises 探究/index.html","458726d9a052f3ba027ea0cf1e9021be"],["/Swift UICollectionView使用指南/index.html","af059c5e35cdfe4fc54fe45ef33a1bf8"],["/Swift URLSession && Combine framework/index.html","c8cbf57abf34cdc7d79796f9af01dbb4"],["/Swift tips/index.html","4c8a6279ec6dc4266eacd4e278822362"],["/Swift 三方库：GRDB 使用指北/index.html","cacc6f84524bbc22471160aa99f76f9a"],["/Swift 唯一识别的视图/index.html","9355af61f5f008273590c4039d1f340e"],["/Swift 如何学习现代UIKit？/index.html","b3685725daccbe03ccbd593076cca7d3"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","90fc25668d0949b7491706dcdd895c62"],["/Swift 用 compactMap 替换 flatMap/index.html","8634e98936a80ea5f53cb9cc0fd14d5d"],["/Swift 选择和播放视频/index.html","25e631c00d9e2a78c9249404c7de4301"],["/SwiftUI 系列(一)：1、 简介/index.html","15829e1ac3dbb5ab6aee0bf05e17a87e"],["/Swift中UIColor最佳实践/index.html","c33ac3f1227234c3d2cfb560e9815196"],["/Swift中快速简单的工厂设计模式/index.html","f11f1c77b43d2196c4974171b6dd008f"],["/Swift中构造函数与静态工厂方法的比较/index.html","2b8ae6ede4b8c61bfa9b791dc503c173"],["/Swift中的UITableView教程/index.html","e623311652d0ab6d6e4b452058288e61"],["/Swift中的懒加载模式/index.html","7215b2220e5e483cbcb212ddb959ca4c"],["/Swift中的模块和挂钩/index.html","9ff7d76b1a19c776da84be607e042f8c"],["/Swift使用布局锚点添加约束/index.html","7e56fe578f164df8bbff56ffc31a080f"],["/Swift依赖注入设计模式/index.html","3217e49ab0326110bf3758ffcc7a5657"],["/Swift关于Dependency Injection (DI)/index.html","bc8898f4fbde2e2a261a12761a34b5cc"],["/Swift初始化模式/index.html","3604faa3428c05099ec5433d7b95082d"],["/Swift单例模式/index.html","6efeb2189ee0ad80c8dccec0bc323781"],["/Swift原型设计模式/index.html","ff061d836505f7d99b3e42573722d2b9"],["/Swift命令设计模式/index.html","9b73d6a0e38b04366516029ec7d01a21"],["/Swift外观设计模式/index.html","029268f17aed014583f41ab0462cebb1"],["/Swift委托设计模式/index.html","29402faa2b8165cf7c1379fc9a185df7"],["/Swift对象池设计模式/index.html","3f07779ef89946ec5b79eb0e26a05da0"],["/Swift工厂方法设计模式/index.html","a1321ba1d8cf7109271ce912f41a2a2b"],["/Swift带闭包的懒惰初始化/index.html","b1f319dac26d0f76b9aa6d80e96a7911"],["/Swift抽象工厂设计模式/index.html","4e219853d1b925722b4a77de585cb97d"],["/Swift掌握iOS自动布局锚点/index.html","2ef32504ce58d95f62cd5226a46bd8b8"],["/Swift支持旋转的自适应单元格/index.html","91800bb018532ee732464a9e1545774f"],["/Swift枚举值/index.html","bd3301af43e4720cd28cf2c11cf2d3d5"],["/Swift生成器模式/index.html","0032b3cfd94a1662fa1ad99b16b091c0"],["/Swift结合Xib文件自定义UIView/index.html","0880e3dbedf28fe49184c2e4127f7bbe"],["/Swift编写的20个iOS库(一)/index.html","69cbbf2df2379b2049f2f97ddf081b5c"],["/Swift迭代器设计模式/index.html","cc27f29f6cc224b2994ca2c0ef23adb7"],["/Swift适配器设计模式/index.html","4458096299807e45efd9d49c8adcda58"],["/Swift静态工厂设计模式/index.html","a11774786d620d219d1b178a22119e03"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","646391af1dbbe3fc66ac34eb40034d20"],["/UICollectionView data source and delegates/index.html","86d177d572a94fb1c4459c6da336b65f"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","9cde6cdffaa0faf676830704d72ef8ce"],["/UIKit初始化模式/index.html","f365edfd86b6360fcc3e9f474e4b8847"],["/Ubuntu18.04替换国内源/index.html","059ed341964f7ad1d8fd5b4a19e8c850"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e41bbe5736ea318464b292c768ed0827"],["/Vapor系列 (一) :  Vapor 初探/index.html","d968bd7655f9d7514370a674a16f7806"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9a71085c55d966ae0f9a6c28db46eb1f"],["/Vapor系列 (二) :  Hello Vapor！/index.html","cd79a8c14991aa67bc44d8cdf57a83f8"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a744b329065836c710e404a914696f2d"],["/Vapor系列 (四) :  创建博客数据库/index.html","34b760e8e466fe1b1bc16ca09c86f3cd"],["/Vapor系列(六): 徒手撸一个CMS/index.html","4e935f5b9c7181060131711fedbc1c01"],["/WKWebView与Native交互注意事项/index.html","b39743cf1e96742b02ab0aff33ad2a59"],["/Xcode扩展/index.html","e2320a3bdf0f60736945f88c68540531"],["/about/index.html","ddc12c0d56b1d26d7d75e3acca5df385"],["/appleOS的Networking示例/index.html","7fe5722684e1cd87266dc5e2fef50167"],["/archives/2020/03/index.html","55d81bc7b8a48f8b1f2becb395e6c4e3"],["/archives/2020/04/index.html","0b08ab827f60a5921479f64fef3ddc35"],["/archives/2020/04/page/2/index.html","d5c6bd3d69fc9c1dcd6dd526da37f754"],["/archives/2020/04/page/3/index.html","7d3c3e7e9e18b13f232d9ddccd7b9129"],["/archives/2020/04/page/4/index.html","52e0f976cca316a128bcd2c8e6faf157"],["/archives/2020/04/page/5/index.html","89a12f245f61257c7a9fe39b1fd076b6"],["/archives/2020/04/page/6/index.html","784e28133793c26d9eab4b694107ca32"],["/archives/2020/04/page/7/index.html","6faf2a1fc819863a91adf5ed0c37a6ed"],["/archives/2020/04/page/8/index.html","c76626d359bdfee90b92ed348d48a6ab"],["/archives/2020/05/index.html","77f03beab7db21535646895983ca2f3b"],["/archives/2020/05/page/2/index.html","8a3f5fe8e0f47628eaaabff7457bd6c2"],["/archives/2020/05/page/3/index.html","9360c84e9b6310bd06969c7696634834"],["/archives/2020/05/page/4/index.html","0f3ee57d0e5ce41e7ecd1e26947c8837"],["/archives/2020/05/page/5/index.html","7e6920197f7127c302026c2e0d8085d7"],["/archives/2020/06/index.html","77b986bce2dc51dc743f77be8f649c8d"],["/archives/2020/06/page/2/index.html","b2c37239f35789092dd2c23e382f010a"],["/archives/2020/08/index.html","cd1130dec414c2dfa452d5a173f92f91"],["/archives/2020/09/index.html","abb0ef4045db7298afd81de709ff381e"],["/archives/2020/10/index.html","bcf42435f8c7b6ed0dcfe23022ffdfcf"],["/archives/2020/11/index.html","406af3b3bd7ecd4279d43a9316e5fbc6"],["/archives/2020/12/index.html","b439f9fba2eb74e44b0b71957a0647bb"],["/archives/2020/index.html","9284cd9fb49a341710afbbc347284ff1"],["/archives/2020/page/10/index.html","6137a0ef62bbaefb43bafee0a5a86154"],["/archives/2020/page/11/index.html","6a84ac9bd3cb67f215368ce708f73afc"],["/archives/2020/page/12/index.html","eec8f57c999fc8db2df56f63e54af844"],["/archives/2020/page/13/index.html","7c9361c0be24e7562449e7696d796a01"],["/archives/2020/page/14/index.html","4a5ba6a7f79660113d86513057848208"],["/archives/2020/page/15/index.html","cb8f9a06d79679aeaeeb95863c30d1ee"],["/archives/2020/page/2/index.html","82d6f282bd2d16068a52426d2f0a1340"],["/archives/2020/page/3/index.html","f40c31af8396e8d88436122d5e84c0d9"],["/archives/2020/page/4/index.html","0eceefd961db50aa60cbb4accb273f90"],["/archives/2020/page/5/index.html","3e4e3d99a886e2fab76f3ef21cfab8e3"],["/archives/2020/page/6/index.html","9f3103f41508dd778559694b2051f9ca"],["/archives/2020/page/7/index.html","2d10c33dface55bf65e15422712685dd"],["/archives/2020/page/8/index.html","e6350ba89a10654be6fabc1276cb4457"],["/archives/2020/page/9/index.html","8eea73c5ef718ea6f8bee9ed0f2b2efb"],["/archives/2021/03/index.html","ff386380f8200d73e6baf045138bdeaa"],["/archives/2021/04/index.html","e4c3e3dac8b05585cd62dd4e3ea5cb7c"],["/archives/2021/05/index.html","30d7f4ae17ebe3dc815249543097c5f3"],["/archives/2021/06/index.html","25556b43e2c7b150455911dd0adefd24"],["/archives/2021/07/index.html","86348e67f3a7d957c6820350fc2eafa1"],["/archives/2021/08/index.html","4db0f94d79898fdda6a80dc1b9cf8def"],["/archives/2021/09/index.html","71d96c808dc5345e2a82e6e93c2989e6"],["/archives/2021/11/index.html","33655e77e57805f33bed44dccaece132"],["/archives/2021/12/index.html","4133fa1e62025aa4a855031c8b8da271"],["/archives/2021/index.html","3daec9a1ce7aaa662a7d8fdad23dcc9c"],["/archives/2021/page/2/index.html","cc7dc399b4a5e1c6294e02cf563f3769"],["/archives/2021/page/3/index.html","04d85d87475a555308a29cbe1608ed07"],["/archives/2022/03/index.html","017939814d87ca12cbe49f572efe8fe6"],["/archives/2022/04/index.html","507a5cb2047b7eb75e22fccded1d46bf"],["/archives/2022/05/index.html","f8ecd1696876674ebe60ee129670a47e"],["/archives/2022/06/index.html","0d0a1bd074cdb43d679ecdca8d9370d5"],["/archives/2022/07/index.html","1fecffeb50fe4004f89a7e66758744a6"],["/archives/2022/08/index.html","01adced6084e1525ceab07b383f825e3"],["/archives/2022/09/index.html","d0aefea560a00e77d70230c471ccd224"],["/archives/2022/10/index.html","74db70e058e6bc78c422a59fb14797e0"],["/archives/2022/11/index.html","ebfa6c7145a6b33c5286a6f908bf5bd0"],["/archives/2022/index.html","15b5bd76195933dd4b86441804269864"],["/archives/2022/page/2/index.html","e31021a6e5a788dd1a0577e91cf4b31e"],["/archives/index.html","1e1e475159a10120e358f9c28b65e693"],["/archives/page/10/index.html","6b84352d5d7e66c009681516a86ecbb7"],["/archives/page/11/index.html","d4cb7ec1baf34b3eae2f3701a3e497ac"],["/archives/page/12/index.html","7d4aa8679a084862c0c825b130b3c402"],["/archives/page/13/index.html","0124d8e389eb04e930a31acb89f9eaaf"],["/archives/page/14/index.html","fd4c955c89c179181be2a7396776148c"],["/archives/page/15/index.html","4eabb8e973ae2c142b6090694232c249"],["/archives/page/16/index.html","dae8d649aa910c13c3149b9e1b3cdeda"],["/archives/page/17/index.html","116c4420d98162907ce4e44cb3f8eb52"],["/archives/page/18/index.html","d6d36197f2f94c91c49381c2e0af0c29"],["/archives/page/19/index.html","022190ab8b07d87ed55b311890e88cc1"],["/archives/page/2/index.html","129f6cf2dd294d566b21671aae93c904"],["/archives/page/3/index.html","7923c417b3d2a8b31be1c7610f6772e8"],["/archives/page/4/index.html","d9a50e3fb08784d14d051159fb9f9558"],["/archives/page/5/index.html","942cbfeaf845ff36e896743db21ff6ee"],["/archives/page/6/index.html","2d341caac37da648866d11d44bdbebef"],["/archives/page/7/index.html","75a296b85fa42d35c0996f88008dbeea"],["/archives/page/8/index.html","ba6c0aab35fe1c3525631cac3237b72f"],["/archives/page/9/index.html","092f131a8b9f08805ec0f7b3996c9ff3"],["/bugly 上传dYSM文件小记/index.html","0d32c5c8ebb0e9a5d50f04e2d71bc905"],["/categories/Advanced-Swift/index.html","cbe45a36d6e2c0fa40cfdd7428dc0ea0"],["/categories/Advanced-Swift/page/2/index.html","927e0e5c5e1defd497f7d57f4e9bc508"],["/categories/App-Architecture/index.html","67be480f6ebc682d586ffc872dbf7df5"],["/categories/Array/index.html","cd401b5a44a0727422b1326ea13dd53c"],["/categories/CocoaPods/index.html","59e39cc8e00b9d27f12e94f22fbc90c6"],["/categories/Codable-protocol/index.html","e118d5fa58ec4055777cf303afa51fc4"],["/categories/Combine-framework/index.html","e8735a4e3bc42fc26b1f408bee567670"],["/categories/Combine/index.html","eab3c8a8f4440354c47999c1d57c9c92"],["/categories/Docker/go/MySQL/index.html","04140b16327e4db7b017dd1a69803e47"],["/categories/Docker/go/index.html","985410a8411d6d19dc815142d31580a0"],["/categories/Docker/index.html","b29dbb1484404be8c1e3f495de64d391"],["/categories/GRDB/index.html","9091b043ce801b3fa6674f9b05271326"],["/categories/Go-入门篇/index.html","12aa4077f12be6cf1f8c9d33665a2e3f"],["/categories/Grand-Central-Dispatch/index.html","74ca10483c655323888a712bec82cfa7"],["/categories/Homebrew/index.html","b5574ef4a23f72825f5bea663df42474"],["/categories/Linux/index.html","0523bcfa8752b4f33cbf6634b77bb2bc"],["/categories/MySQL/index.html","8d7160a1f69da3736bc53d9aeab4565e"],["/categories/Promises/index.html","297c8a7f9119e4c5e66f74cb0c179ff9"],["/categories/Protobuf/index.html","bbb4e501403b900b5206c7c2cee4f66c"],["/categories/Result-Type/index.html","248646abba2850dc8261c84a119155e1"],["/categories/RxSwift/index.html","4dd21a81acf82eedff5c41a20362e44c"],["/categories/Server/index.html","95b36f33ac6f4acf598f24511de190ed"],["/categories/Sqlite/index.html","c24085832b02abaa70b7749ff60206d5"],["/categories/Swift-Apprentice/index.html","a4040ed835c452da431d0941a7288ed7"],["/categories/Swift-Apprentice/page/2/index.html","2fd3610ff798731ace955c3773885052"],["/categories/Swift-Apprentice/page/3/index.html","52c3204728cf5f00b21918166861cbee"],["/categories/Swift-源码阅读/index.html","2fba4f2fac31a43f52388cf63dc6e68a"],["/categories/Swift/index.html","2b10e3cca891dba28b91bc95b1b641b7"],["/categories/Swift/page/10/index.html","479820df30c894d5921b28268ebbceea"],["/categories/Swift/page/11/index.html","7214baf84517e12857783a638a6117f7"],["/categories/Swift/page/12/index.html","5b75f4f6bb39e9ba7048b795399376d1"],["/categories/Swift/page/13/index.html","cce0fa56b17c1fed160aae09e9995c62"],["/categories/Swift/page/14/index.html","fcb2747d483b3262ab9004e31659c14d"],["/categories/Swift/page/2/index.html","f73594b52d384d0c8c78463b0b7238aa"],["/categories/Swift/page/3/index.html","b5ca01666545446d5d2236865f241338"],["/categories/Swift/page/4/index.html","f11935ae726d6ce7096754a796754962"],["/categories/Swift/page/5/index.html","5b6607d09cf34368a7b0af8ad9aebdd1"],["/categories/Swift/page/6/index.html","1110221036c6292e30987d871a68a6ad"],["/categories/Swift/page/7/index.html","be66bfe685a573a3399629e92a0a7522"],["/categories/Swift/page/8/index.html","54a37bf2ca51cfc4cf12031c09670b21"],["/categories/Swift/page/9/index.html","a1f4b0086025291fc5393f1b911e0c5b"],["/categories/Swift5-2/index.html","a2ddcaec8bedb421ffca8101e45ced54"],["/categories/SwiftLint/index.html","27f2f381ddc160458095e0dfa514e8d7"],["/categories/SwiftUI/index.html","53e8c71c71132df9c6445c193bd0d850"],["/categories/UICollectionView/index.html","e6e7d8b07b4cb6a7ff918fd02f0ecae2"],["/categories/UIImagePickerController/index.html","e942d8cfaa2ee91b8a7c3c0d5f6d00d6"],["/categories/UIKit/index.html","fa4249b0a971c2261f76af52a6c72d25"],["/categories/UIKit/page/2/index.html","5b68a18a0a05e942db22cbed4d00ce49"],["/categories/UIKit/page/3/index.html","66deeff52aa851d8a2587da283ba53c0"],["/categories/UIKit/page/4/index.html","3d8d2894c68cbd9f4e24672408b15314"],["/categories/UIKit/page/5/index.html","7a4e4d073cba459788b7f557d577e4dc"],["/categories/UITableView/index.html","5fa76ee465cd8424ca5210f9ec2d5b18"],["/categories/Ubuntu18-04/index.html","54f7c26d61a93bec38acc0ef47cd6304"],["/categories/Ubuntu软件源/index.html","75eae93ea87ad7aaffe3102268c30732"],["/categories/Uniquely-identifying-views/index.html","89e80684fa5425570b44c412743be889"],["/categories/VIPER/index.html","a80544bcb715e45c318ae6bb82639709"],["/categories/Vapor-4-0/index.html","552597ad63b5cd34611c3e2dfde4f90b"],["/categories/Vapor4-0/index.html","238064cf9f4e584e587159093861a7a8"],["/categories/Vim/index.html","e41feeeacb97102c2494b61833656c01"],["/categories/WKWebView/index.html","3deecafa953193aadeda01ece9d7c97f"],["/categories/Xcode/index.html","9db77d2143603bfceff5abbf5124d712"],["/categories/appleOS-Networking/index.html","aac95c04447c44f870662d110f89b946"],["/categories/bugly/index.html","74effbd5ba278f0d12ef053d4187ccf7"],["/categories/enum/index.html","d19e07d2345e5965cf58382b823f39fb"],["/categories/git/index.html","74103c0a5d1093179ceae725a9b2f8ec"],["/categories/go/MySQL/index.html","322c2d4b327399c3d33499d7f7f33981"],["/categories/go/index.html","2ec6ce82a442fc291c6990cc32b3c9aa"],["/categories/go/interface/index.html","37a9a8344026c1771516cd589f643cb9"],["/categories/hexo/index.html","3a817fb92e7f2572a7ec309b27a41be9"],["/categories/iCloud/index.html","14a3b565663a32d86db2be435006f088"],["/categories/iOS/index.html","e4f541dad2c0c26c63df2ea066ccd15d"],["/categories/iOS/page/10/index.html","fdd1ad1db1d361dc17ea0753cee4ae86"],["/categories/iOS/page/11/index.html","f5e80f758c603710f34a07cf2bfbb7e1"],["/categories/iOS/page/12/index.html","078887c20744673fb10d9decf384a4b0"],["/categories/iOS/page/13/index.html","99d813220f586b355ed8b54ec90ebdc5"],["/categories/iOS/page/14/index.html","ca28914ab5e769b2019631959dd57bef"],["/categories/iOS/page/2/index.html","b872d5190138e4f226ddc61a788ad615"],["/categories/iOS/page/3/index.html","774181f7322d6bc598763fec198101c0"],["/categories/iOS/page/4/index.html","0cc3251b65917061f27cce42896bcc02"],["/categories/iOS/page/5/index.html","3e239b857df33c52ec4b56496a120556"],["/categories/iOS/page/6/index.html","e57224f6b1861b279e814f771651b28c"],["/categories/iOS/page/7/index.html","8a7b73985ffdd997dde7eda388708d77"],["/categories/iOS/page/8/index.html","2facdc5ed643491a171d8a4637d30b8c"],["/categories/iOS/page/9/index.html","2012508a948b3ed52d7f8275cd676afe"],["/categories/iOS面试题/index.html","ac2e342d7b071e5602d5554d4019e04d"],["/categories/index.html","7721cba06521a59e214ebb9b7a6ee5c7"],["/categories/random/index.html","11c9048f25538630a4a960a732fb73bb"],["/categories/三方类库/index.html","9f77d3cf32f9297d79c44b1b589bd231"],["/categories/函数式编程/index.html","a8af1348f9330595b15820a225740217"],["/categories/子类化样式/index.html","096dfc4be7fa955ec148bbc51002d841"],["/categories/开发技巧/index.html","b8977a712256ab97f93bd29413f17f2f"],["/categories/开发记录/index.html","575b5ab9d05c55f7b449ef4c5b30e41d"],["/categories/数据库/index.html","9a338527d5b435c2d7f711f4259c7789"],["/categories/架构设计/index.html","9cb75bb71c0c946669c802f57d06a6e8"],["/categories/测试/index.html","1cfa3588be224c5861933f55d6a452e3"],["/categories/用户体验/index.html","08246cbb8ebfcb8cc268ad916e9acdf1"],["/categories/用户协议与隐私政策/index.html","98f3937a7e821cea47c1f0e67ca7ac0d"],["/categories/组件化/SDK/index.html","daf5c6c4e28dd3a27159fd11bc2fcee4"],["/categories/组件化/index.html","a494f642d279e0537de13a2d56967b29"],["/categories/组件化/模块化/index.html","0d59e553c930ea27c09a3219688484a3"],["/categories/设计模式/index.html","383e83a09dda8fc89a2c407de2d82205"],["/categories/设计模式/page/2/index.html","3bcd55a76298b2b9c1592ceb7d3a5684"],["/categories/设计模式/page/3/index.html","78c01f3fe7383a8f0bc76926ad8ee31a"],["/categories/逆向/index.html","2361c660c48f1f7b1d700cb11ed6aed4"],["/css/main.css","95b37cea52aeb9e3537ea66a516849ec"],["/go moudle 导入本地包/index.html","7f07c9c80dcf62a04d5cbe0beebece43"],["/go 库专题(一)：gin/index.html","8c6efc16edd37cd5fc96f1444757f00e"],["/go 每日一问/index.html","26705adb8f2a41c878c64385ee1139d7"],["/go 项目实战：gorm 数据库框架/index.html","d24040b5b71754cd653c2ab40c48a6a4"],["/go 项目实战：zap 日志库/index.html","1fb94d256657a465fd8918fd9318ed53"],["/goland 学习笔记/index.html","8c327defde85a6b2fa1b277bdb46fdd3"],["/hexo部署失败/index.html","758378cee1a7a9f902f0ffb99597bc48"],["/iOS 15 适配/index.html","70866ab4b13bab8a4d2b2b9a71253e3c"],["/iOS VIPER架构深入实践/index.html","1384c9a9a43901903625e392999244f6"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","29668dbde16c584867b662f158ee9b39"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","639608b1ce8ff2c37925c04e2baba69b"],["/iOS 自定义视图，输入表单和错误提示/index.html","44ab64cb780b27d730e70dc28b100a78"],["/iOS如何使用iCloud文档？/index.html","a4755f61b5b582c2bd7c2f05f81be4f9"],["/iOS子类化样式/index.html","02d2e43d3749a3f9c8ed589bebe334b1"],["/iOS开发记录<一>/index.html","691d99b1e55ed1cd49c3c305b529929d"],["/iOS自动化布局编程/index.html","879c5f9eb3e8a53547dc4c7bb5dede89"],["/iOS自定义转场(By Swift)/index.html","0c7919ee3f6309f478e035b79445c8fb"],["/iOS项目架构：使用VIPER/index.html","00994b9a4e1bc00a1bfb2a6d7b9687f5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","33829ff8c3db29aaed7b9cebe4165e0c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","a37941c599ffdbe424fb98b9ea8a5a1e"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ea6cd9ed6bc219e992104bfd20735375"],["/page/10/index.html","285799bff3a976e387b0b7b904abc451"],["/page/11/index.html","7483fad119deecd091b9b71ac599aead"],["/page/12/index.html","1520ef807a39107dd04d4dbb2d4ec0fd"],["/page/13/index.html","e0d82301df162e0513da1e6b117a53d9"],["/page/14/index.html","9cf2a0548a8fe4f5ff8bddb5f2d2b2d5"],["/page/15/index.html","17a7c94b7038d47da4b7b0e11b7d21df"],["/page/16/index.html","30eda16fc2c07ee2df70b3bdad0b2f20"],["/page/17/index.html","885337d401d7721437d166c02d8024b2"],["/page/18/index.html","ae491afb368e85cc126611a5810fe7e7"],["/page/19/index.html","e3e338016e46bb47779b722bd509a136"],["/page/2/index.html","937c924399d3411f2aa8ea8f3fc521aa"],["/page/3/index.html","ec855014871df42d9e36725577315dc8"],["/page/4/index.html","5304a3eb6f9a5a4c4b46d9b63d80e6b5"],["/page/5/index.html","de7b7ace85d65b5a92898859bb5008ce"],["/page/6/index.html","f08ab9a4b20dcdff95c6539c4dc9acbe"],["/page/7/index.html","6ded8f59a635b9783c7f2567755d7f24"],["/page/8/index.html","19d40808e362045b341d3a707182ed8e"],["/page/9/index.html","e93146f0e467ef21835c0f2df545e9e3"],["/schedule/index.html","f27a6868ddd573d2e09c06ae990d9411"],["/storyAppPrivacy/index.html","659fb397b997b9d37839e5a551ae35d9"],["/sw-register.js","bca8f83c4446f0e0cc49cfdfb2247469"],["/swift 专题：函数/index.html","c9e82bfbc6adfe36d557ac16da194231"],["/swift 专题：闭包/index.html","48e931e5082e77edbf85786ed4328f9f"],["/tags/Advanced-Classes/index.html","5e9dafa59edac2323934843f3b132907"],["/tags/Advanced-Swift/index.html","5652c6653f1f8477f715f7f4519cd134"],["/tags/Advanced-Swift/page/2/index.html","ef3540acee7f0739a84d25cc5f157c6e"],["/tags/App-Architecture/index.html","364ad6968e0050e09318f3b66b5385ef"],["/tags/Array/index.html","9ce9daa074e0a228ab2a9a83c710d59d"],["/tags/Arrays-Dictionaries-Sets/index.html","06aa80726b1625e42b466939a2634929"],["/tags/Authentication/index.html","37e254b969b84e891d3b70aae2655f08"],["/tags/Build-in-Collections/index.html","70e39ab14317f37578d658c59e6e17fd"],["/tags/Building-Your-Own-Types/index.html","1ddbc0b6e13ea9fce1eba4ad9e59343f"],["/tags/CMS/index.html","3eb911077aa0e1527c9e1462d2214375"],["/tags/Classes/index.html","0b88c5804e0fc677b3ea99a871f0c6d6"],["/tags/CocoaPods/index.html","088631a6857b1589dd9e25693838d126"],["/tags/Codable-protocol/index.html","c26cf4ec13f4911f18ae9862783e0a73"],["/tags/Collection-Iteration-with-Closures/index.html","32727c4d333ad48e4bcfd15fd85cbb2e"],["/tags/Collection-Protocols/index.html","15d79b9b7d29b691c4a0d23b4f6d1954"],["/tags/Collection-Types/index.html","d62ce0e25c49d5df9078241e7e92b99b"],["/tags/Collection/index.html","f3fe3c81003e2ef06f3c45d80bf149a2"],["/tags/Collections/index.html","c44632efd9008c90e5afcad20530228f"],["/tags/Combine-framework/index.html","1c5d816fc7f52ad1896f135de6607936"],["/tags/Combine/index.html","43de6777a30a77e9e7eca75169d5c5a7"],["/tags/Dependency-Injection/index.html","d5331200eb927ca6ea16ed57bbcac96b"],["/tags/Docker/index.html","2d14ae99cb1d0b880af09fadc03f04de"],["/tags/Encoding-Decoding-Types/index.html","7fa3d7e30fd974ae405d999557320eff"],["/tags/Encoding-and-Decoding/index.html","b564abb7cd7c8f41a758398f35da91fa"],["/tags/Enumerations/index.html","c7435ed42271685e393259f6c2700201"],["/tags/Enums/index.html","c035de29b4a6eb4d998ed88d3960f76b"],["/tags/Error-Handling/index.html","4eb2378eda6efe1522d9847c3a0d3684"],["/tags/Functions/index.html","c9351c3e4e62d1a2b4ce5fc1d3d9213e"],["/tags/GO/index.html","f29e28829260ebdb4cafcec81e22b377"],["/tags/GRDB/index.html","0b4f6fa2189028458bb42060b1ebd3e2"],["/tags/Generics/index.html","d62e7fe2e279f2c6f7bd99a066ae2a7b"],["/tags/Grand-Central-Dispatch/index.html","03bd266708045a96db6d3af9d670fcc6"],["/tags/Hello-Vapor/index.html","7952df00ab51e55159a9b43196dea52a"],["/tags/Homebrew/index.html","692cb32e284820ab0363b3196b4fdab6"],["/tags/Interoperability/index.html","fb28c41c77726ab13dde7e4dd21068fd"],["/tags/Introduction/index.html","ca7e2af66ac0f8cb3e350e10ad6a0d33"],["/tags/Leaf/index.html","64ec82f3713c4a3a47b7effb011f15fb"],["/tags/Linux/index.html","beb52a4a1633e1368d887e127a1b3360"],["/tags/MAC/index.html","f6650d276e54807aafae2c67e2a90717"],["/tags/Methods/index.html","9a5be53553ddc0b5a418f659f9f493ae"],["/tags/Modules-And-Hooks/index.html","b3b439355f53809fea65785f0d804eeb"],["/tags/MySQL/index.html","3f7e66eaf611e298b493ec6ce8c7bf67"],["/tags/Optionals/index.html","274d3a869a36fdbe1512dbca62813a35"],["/tags/Promises/index.html","4806adf9b7cf96cca3433623f1400208"],["/tags/Properties/index.html","9d6067c506cd961684fa34cc7bd9ad80"],["/tags/Protobuf/index.html","54334d4077698afa2b1387e77beef015"],["/tags/Protocols/index.html","9fe7097d798681e12cdcc46153fa4065"],["/tags/Result-Type/index.html","f95cf8bf62bd42f97ea7db394fbba352"],["/tags/RxSwift/index.html","358a9df76c581ee34008a6f5bd4e22c7"],["/tags/Server/index.html","d78d152d8c6f37f2b7027bb045462a86"],["/tags/Session/index.html","4c1fa498e1f2acdfc2b57d2ce995c55e"],["/tags/Sqlite/index.html","f17f8cb54abff76e46708bb0f99e6ac6"],["/tags/Strings/index.html","47a6320516b69d574e832a4daa7385e9"],["/tags/Structs-and-Classes/index.html","d61e158c5b0a3f43bb7806d0f566a2a9"],["/tags/Structures/index.html","95a22738c40af0073b973c3e8a54a1d1"],["/tags/Swift-5-0/index.html","cc83897a1cc63b46c861bb70d88603f3"],["/tags/Swift-5-0/page/2/index.html","e1a37fd76a2018fcaa8395a493f6ade6"],["/tags/Swift-5-0/page/3/index.html","ea5edfbe4a91bac3136e808bdad1d929"],["/tags/Swift-5-0/page/4/index.html","cc433023a2027adf1f2d72b119d347b9"],["/tags/Swift-5-0/page/5/index.html","95397aaf119278bd26b3cd246928cac4"],["/tags/Swift-Apprentice/index.html","4c83f36b05f41b2b50264bad985ef02f"],["/tags/Swift-Apprentice/page/2/index.html","20f4f210c709cfa210bf5cd59cc05298"],["/tags/Swift-Apprentice/page/3/index.html","d29aeac22698a76896fc4aec48a07130"],["/tags/Swift-Package-Manager/index.html","f3e1fde45cfc7aa689cb6d160af214c4"],["/tags/Swift-源码阅读/index.html","d819b140e615cfcce17a8ddafedc393b"],["/tags/Swift/index.html","a1ed43e055d847a167eed10b248a34e9"],["/tags/Swift/page/10/index.html","7c50c4dbb835a757c06833b027f459cd"],["/tags/Swift/page/11/index.html","6c05d7bd1fec9752f1d4151e10bc16b9"],["/tags/Swift/page/12/index.html","1ff6b97ee1746a96622af4bea714743a"],["/tags/Swift/page/13/index.html","cf4a9fc0b607138233207c0a4edbf698"],["/tags/Swift/page/14/index.html","153bb5ace8f334964aa1b04834f9c41c"],["/tags/Swift/page/2/index.html","e59eead2d1af9218983d11ab5168d285"],["/tags/Swift/page/3/index.html","e4b48aca14118794c324ba7696bd92d9"],["/tags/Swift/page/4/index.html","5c7f85bf96a8f6e053986d2a84fb6f6a"],["/tags/Swift/page/5/index.html","33d1ad1e5092e0ff09495a56931d699e"],["/tags/Swift/page/6/index.html","071be1b2a079d3bc2f028124e907356d"],["/tags/Swift/page/7/index.html","e9eefb7a02f35cda5fb5365a3d1f6247"],["/tags/Swift/page/8/index.html","f07c4510e5e227cd782b3eb6ea609386"],["/tags/Swift/page/9/index.html","92bec01f84e3ad35b40500bc7a151fd1"],["/tags/SwiftLint/index.html","69505494822f470214d268119f93be75"],["/tags/SwiftUI/index.html","714d83756c0fdb7473e2989b96dc8190"],["/tags/UICollectionView/index.html","1c1e85ae3ad62ae8b8a143d9634b2981"],["/tags/UIColor/index.html","078fcfd9d4e89b1fee22c04cf7b77f7d"],["/tags/UIImagePickerController/index.html","3b3e9205387921f8111fd901f6449df3"],["/tags/UIKit/index.html","1b96d978eb0cfc93e8ec53b78c9c4875"],["/tags/UIKit/page/2/index.html","d0f789cd76935f813229b712d35c2dbd"],["/tags/UIKit/page/3/index.html","087989161c099a331ea26f7e99ef865a"],["/tags/UIKit/page/4/index.html","c3dd5b26d1b42eb7f90081543ac3f42b"],["/tags/UIKit/page/5/index.html","bc91c61259a8f6b156d8912f6e56be83"],["/tags/UITableView/index.html","fffd3a176c61f8a33f71161203a13065"],["/tags/Ubuntu/index.html","75fe1e55b483d5287817e35f1c50dfd6"],["/tags/Uniquely-identifying-views/index.html","f02415da81c30a546f3c9e63d3861b1d"],["/tags/VIPER/index.html","3d0e6cfc7d7681fa1dccee12f87f0a85"],["/tags/VMware/index.html","8dfbad0e716744e659a9ddfc0313f2c3"],["/tags/Vapor-4-0/index.html","21c63b04b57a02b20ec8d2b348ca154b"],["/tags/Vapor-初探/index.html","50ea5a572bfb65925174d6a65ad70979"],["/tags/Vim/index.html","2364606594dc3b45c8df6b0161d3ccdd"],["/tags/WKWebView/index.html","418308832eaaebd26c2c98d811868da3"],["/tags/Xcode/index.html","ae4c270d1577ca6da919f597437a5c46"],["/tags/appleOS-Networking/index.html","e0e7d7c545fa7fe991ed383a4bdf7f90"],["/tags/bugly/index.html","4dd91ef8d4b7fde3e5c0e06f03388811"],["/tags/enum/index.html","e339e5cdfaaa86cd5cf64b8f1d5617fd"],["/tags/gin/index.html","e8518ef6f263098826d36b3ff735e95d"],["/tags/git/index.html","8aed0e7fbbf0c5b844ba2d1a788f09ea"],["/tags/hexo/index.html","0c097c5274d2fd2902c09ff784830aae"],["/tags/iCloud/index.html","85137e4c62441279fcc28463af16921c"],["/tags/iOS/index.html","2f5046252a50f07658e7242e6065f239"],["/tags/iOS/page/10/index.html","c5f152351f092e050b5fc801781e9e72"],["/tags/iOS/page/11/index.html","e1a8365d99034c15157161220890e23e"],["/tags/iOS/page/12/index.html","c64ce0a39a8c97f219e81ff1581563a4"],["/tags/iOS/page/13/index.html","c54c8671b6e809cfd0ced38ea1862713"],["/tags/iOS/page/14/index.html","3dd0de2b9abe0e6fab9245298f7c02a8"],["/tags/iOS/page/2/index.html","53504c2fd33d5ca703c426e47b792074"],["/tags/iOS/page/3/index.html","80ec5bfc9434c3cf6a2f7bf614dc5da6"],["/tags/iOS/page/4/index.html","e57d6fd392f2bfa5f02348e69972e1c9"],["/tags/iOS/page/5/index.html","f343338cf131c5a0947cdf68c1e04737"],["/tags/iOS/page/6/index.html","65adda81a0c4811a4992a008c31dc8d5"],["/tags/iOS/page/7/index.html","58800387589c187624fe6115bdc53e74"],["/tags/iOS/page/8/index.html","148663edea5859cb6436d0d3dedba814"],["/tags/iOS/page/9/index.html","3c484623b6a4efb6a9f1d897395b3f23"],["/tags/iOS面试题/index.html","57a96c0f2648c2e2dcf6642d79087c0a"],["/tags/index.html","ae03686a25bb24d713fd79ca1e0cd609"],["/tags/interface/index.html","1ef012b0f28557788d20ae5f1658b95a"],["/tags/non-optional/index.html","acb7a647ccaea853044141bef300c168"],["/tags/package/index.html","bdd1cffa647e9beb5f35b02098f3bdbb"],["/tags/random/index.html","6c700ed4bdbf7a4566f4e23cc04b83ed"],["/tags/transition/index.html","1275f9cf76126fe718978cf8d93b8b0d"],["/tags/三方类库/index.html","09251deaa86de52dbc38fe21a05874ae"],["/tags/依赖注入设计模式/index.html","a05b724fa90e33014e2ada4edb84aed9"],["/tags/值类型和值语义/index.html","edd96768fc4bd689ac1a85191e11aa20"],["/tags/内存管理/index.html","d77fb466658d5915d3a15fe84dcfa385"],["/tags/冒烟测试与回归测试/index.html","44681e63d0c24fefce983a99bc40119d"],["/tags/函数式编程/index.html","d079ba1d63488e52073c4e8cb2bce96e"],["/tags/创建博客数据库/index.html","7d736893d76f030fadd69f710bfec1c3"],["/tags/初始化模式/index.html","f9c4ddfecfbaef5c28073caf308cb6b3"],["/tags/单例模式/index.html","dab2b137c6b45b540e0104c63d6e7436"],["/tags/原型设计模式/index.html","d147c52c585959dfddab1528d88ef23b"],["/tags/命令设计模式/index.html","9248057ffa94f57159ae58e0da1f0f4e"],["/tags/基本控制流/index.html","a1ea3266f8bc3f47e89eb7b9429fd2d4"],["/tags/基础语法/index.html","80f201ca4655f2bbc0665de9ab4c7077"],["/tags/外观设计模式/index.html","27cdc58a7f1d08aef790183ab8fd3958"],["/tags/委托设计模式/index.html","00fece8726f23c0e95447959e3fd2416"],["/tags/子类化样式/index.html","d4a8ce5371c27fca205092175a493cd7"],["/tags/对象池设计模式/index.html","7cbc7db428fcfc1e6f8fcb3b6d175da2"],["/tags/工厂方法设计模式/index.html","6bb51aca0dc5a894b39624c756011e44"],["/tags/工厂模式/index.html","665847b3ab986a80ad70c44ff67299f6"],["/tags/工厂设计模式/index.html","584cc36630f9463f331d94d3aca2b2f1"],["/tags/开发技巧/index.html","dc792df28f71e923c3307115116cc16a"],["/tags/开发记录/index.html","7567ff8340f63f0149d99c410bf05a7c"],["/tags/懒加载模式/index.html","a369888f659a02838c22c3f59b578ed6"],["/tags/抽象工厂设计模式/index.html","49f327faffad492b05ba0be9a03e9253"],["/tags/数据库/index.html","634b61a40135359b6523adea230bd671"],["/tags/构造函数/index.html","1fdeafe4c7b65cf67ecc903a584d3c94"],["/tags/架构设计/index.html","41e74825f912646ed3bba60beba429dd"],["/tags/模块化/index.html","9be1c02943d7260c438502401f267e4d"],["/tags/模式匹配/index.html","e103ff7ceb508d01f31759493722dba3"],["/tags/环境搭建与验证/index.html","93863e0a0cf8baf9dc415944d30fd13f"],["/tags/生成器模式/index.html","971df3589f8ad3a2358fa429ab3abecb"],["/tags/用户体验/index.html","852db4113f290a5e67fc58718ade8e06"],["/tags/用户协议与隐私政策/index.html","85b3dcf9ab812a5ad64ceffcf43b0167"],["/tags/类型与操作/index.html","234ba97d271186a5d9f0bf8eaccd1448"],["/tags/组件化/index.html","2dcce3a66bd32c02665e9e36ea8239ad"],["/tags/自动化布局/index.html","974c30d48cffb5f5875c79d0cc6a7419"],["/tags/自定义UIView/index.html","ef5acdcf2541b6c73261638dcc72b162"],["/tags/自定义转场/index.html","25a284adeea23117bec380274f6652bc"],["/tags/自适应布局/index.html","5b72562fdd5d6042e8e687767cc4853d"],["/tags/表达式、变量和常量/index.html","7ac0c6e7090fa5889bc8f766fa3c4b3d"],["/tags/设计模式/index.html","3433feaa687a303cd10be9a037ced87d"],["/tags/设计模式/page/2/index.html","e47fbf79296ac07ba3adfa71717bf3bc"],["/tags/设计模式/page/3/index.html","fac9f8b9506c5fedc2cc217580ef7d74"],["/tags/访问控制和代码组织/index.html","dc607a59b0cd03ee869d6ab0393aa8de"],["/tags/运算符，下标和键路径/index.html","97dea0b906851cf01b2a828ce7066fea"],["/tags/迭代器设计模式/index.html","39842f0c2d79b17b69d496c43587383c"],["/tags/适配器设计模式/index.html","7e0beaa3b05adc8d6447420df335377a"],["/tags/逆向/index.html","71107730dd0ee581b527ca8e0f8699db"],["/tags/错误处理/index.html","d52e5de3d63c69978516787e3d332338"],["/tags/静态工厂方法/index.html","c32ae836426dc2cd6b740f2204e98fec"],["/tags/面向协议编程-OOP/index.html","4d1a7a35289ebad0e996fe6206710721"],["/tags/高级主题/index.html","0c37f0e3f0e5b1b2909f29c41ccc2cdd"],["/tags/高级协议和泛型/index.html","0cdf7af3445461b1dd8c98112ede5aa1"],["/tags/高级控制流/index.html","bb3e05e5ff20b6c3d7fef06bec41f8a9"],["/xcode 常用的快捷键/index.html","f8838975cfd35dc940b86c8a5cd9f0bb"],["/为iOS应用构建输入表单/index.html","d110af535b9a611c48eed0dc60f1a67d"],["/产品开发的幕后花絮/index.html","21e3963ea22b8ceb33abbde83b9c9f2e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","cd57072a4437acbceb03aa008fa7817e"],["/冒烟测试与回归测试/index.html","e53efe7eb7cf0b0386457a78390e64cf"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4215b8ac7db86e5e43c05c9814bdba1a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4ef079950c5217f523f17a4b2c756056"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a28d38468437cbd3fd7b8bde15791780"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","36a580ef98abfc2bddb5961a8e6ce672"],["/在Swift中创建自定义集合/index.html","f4c1d715803b288723de34384334ed74"],["/在Swift中处理非可选选项/index.html","623bba96d49870915ef9e747b0eaf6aa"],["/在Swift中生成随机数/index.html","306961a60524aa4c227b52237c640bc9"],["/在Swift中重构单例模式用法/index.html","34285dbb98d67db8d6054670a9f23c9d"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","23d5df572df35416a1c3404699598c48"],["/如何为VIPER编写服务？/index.html","a955baf751184d54bc42334e6ffc00de"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","87fd5c9401369c4c237249c25b96bede"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","297ca3eda04a5d8b0d2b89c8ea5cde43"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5b1bcf175a85aa664a545f7edd867b00"],["/如何使用VIPER构建SwiftUI Apps？/index.html","db75f50f9d5ae5665f08d9c39c083708"],["/掌握VIPER架构/index.html","d92af28966316e7e4b5a2a8d6df6b18f"],["/揭秘 WordPress Hook 系统/index.html","47adf9cb02ccb6f4b5045164f1fea0ae"],["/比较工厂设计模式/index.html","24b0a3e73b0fb6c658609f43b1ed3796"],["/深入了解Swift中的Grand Central Dispatch/index.html","de3ccb22468ff3178ade3b9cf570bc9a"],["/深入研究Swift框架/index.html","9fac029717919d59c104b037b004efbd"],["/组件化插件化与模块化/index.html","9178295cefb0429a9c8f35a5aed19a1c"],["/组件设计与SDK开发基本规范/index.html","ced7eb348a0571cc3d5061faface088e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","30c8dbb1fb108a405ed0f0891b157b03"],["/选择Swift而不是Objective-C的5个理由/index.html","1efae7193c6a5509940559152c540543"]];
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
