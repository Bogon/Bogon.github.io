/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f8fe7cac6527e7f57de17f2d2148723b"],["/2020年iOS面试题总结(三)/index.html","fd451acb468c0363eab6b4cc83477566"],["/2020年iOS面试题总结(二)/index.html","8ea34b52ff259acd6ec6fae8788de299"],["/2022 iOS 面试题(附答案)/index.html","01759db75374b0a5be1dcb13654e87dc"],["/Advanced Swift系列(一): Swift 简介/index.html","b33c4936153eee14a81c653e0534c6e4"],["/Advanced Swift系列(七): Strings/index.html","bd2fe65cdf66259e52fe1f44eeab221c"],["/Advanced Swift系列(三):  Optionals/index.html","31714fc3088bb8caf53c2aecfcc5d81c"],["/Advanced Swift系列(九): Protocols/index.html","b9dd82eeb970966f2681b640a9b99d73"],["/Advanced Swift系列(二): Build-in Collections/index.html","0ed5fe30b31f8fba816f734dd26ed68f"],["/Advanced Swift系列(五): Structs and Classes/index.html","838d9f8174a3458125f1d0d0a4bee202"],["/Advanced Swift系列(八): Generics/index.html","33cc4aae337fea62688051c80f12acf8"],["/Advanced Swift系列(六):  Enums/index.html","f31029588091708ba7ab0c433456e780"],["/Advanced Swift系列(十): Collection Protocols/index.html","2067fe36d82f68b0ba3546d4d7822c24"],["/Advanced Swift系列(十一): Error Handling/index.html","bf604b637b5d15fd442796787c858ae1"],["/Advanced Swift系列(十三): Interoperability/index.html","1d312bec21772397a24d8318332689a3"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","dd7d0df2a786584eb3c46bc9ab119e34"],["/Advanced Swift系列(四):  Functions/index.html","f9192bd8107900ace72923d634fba0ab"],["/App Architecture系列(一):  简介/index.html","8a941f02d5501c344b3afe41965ac510"],["/CocoaPods 设定版本说明/index.html","896a82de021978f79c0a2f8e71fd4f11"],["/Docker 启动 MySQL 指北/index.html","56c98db3452cfbe4b25421e600611790"],["/Functional Swift 初探/index.html","104d9485a6b257c2db2bdea179476c17"],["/Git 使用小技巧/index.html","7a5fcbd31c5af5b93d37959ec71a6787"],["/Go Protobuf 初探/index.html","2b8c58546c26e82a876568768e3e29cd"],["/Go mysql Tips/index.html","7e00ca8359d2d53551450cc1571e0558"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","a5df9d579742961abb2b3689cb707faa"],["/Go 入门篇：2、Go 实效编程/index.html","47fa5b294508e083e30ac444b859ef44"],["/Go 入门篇：3、Go 重要概念/index.html","d237313676fa92df9a0c713a8a632d38"],["/Go 基本语法初探(一)/index.html","2446a068cab69eb3cbf47b9ffae853e6"],["/Linux VIM 命令及操作小结/index.html","8d38c399d00495a0d31a4eecaf67aa91"],["/MySQL Tips/index.html","e4b6ac0afafd9accc7cdc693f90af37f"],["/MySQL 基本操作/index.html","e41646a95cac92775ef49fab7d21c900"],["/MySQL-列类型和数据完整性/index.html","20932ccb78936042cd35e36abaad6b54"],["/MySQL-数据库设计和查询语句/index.html","194a7815db5242f96a14cb79dc0a8812"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","23927282b27350af78893b6c03eff90e"],["/NSCODER和SWIFT初始化/index.html","5f1ad7641ee8be70b821c1332e1f2fce"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","e0cd16b1be51838426223bb1b5e53a80"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b503a92032fed755116f46b9be15b75a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d593c4c942bc5f98b7f06a1c78be9d90"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","c143415d36a326be338a0c981e76ec7f"],["/Sqlite 使用Tips/index.html","0fcf2a10335dc1b0deeeaa142a3f033a"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","aa9adf7e405d11e15d339b81b86bba30"],["/Swift 5使用UIImagePickerController拾取图像/index.html","cfb39b31d8b0d90b94d5571ab0fa15b1"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","f91cbae6ff7f2d37b2db05cc2291202d"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","5044d07a0e83f6157f6627b89b2fcc35"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","aa999604ccfd7dfa7a66ca86e6e28271"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","0f9c664a417c8400d1b20b9977429ed6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","20b333dcff8d4771e40f0913c6d7e2ab"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","12ab430a4eaddf3f7a82ec5f2ef55b32"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","42456201bfe9159dcb001fe7e7d1f8f8"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d061124bb3dccd65e39af6ed1b656107"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","502eca3cd717b46f5bf5b6a258e9ec83"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","fb1a312359ddeb58b4422ee92f6842b9"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","ee2353fbe3aced7cceb1b9f0519c1e7e"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","550aa1900130835c8ae4f230946fa542"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6862c7f8eee6ff6839b2262bd0294554"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","eb56bddf1c70aeb390d6bdb514e09287"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","e81452305294dba28cfd0844b85517fb"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","84eb03c7904627743a0dd8571655feff"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c932f0decb73ee40373df05883ca7995"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","f0362f52a85f8dfd91345e9d7f562ba5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8f674b75b80dca40cb5c50020f7161a7"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","68cad2ba7e48bcfc0fc01c25ac7357b3"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f2394f8597fc43a188e01c1813e59138"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","e72b5d004bf8b1c58acf93543a1b64fb"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6cae6fc3a3c903ef119c1fb47096c227"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","abfc956dfa565fe59546572757d782cc"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","8e478a3a20656bbf828e19522dcf59b6"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","0cb33cf4c82f2e0f37977e69bf467a6f"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","b4df224006a52a539fb69347066cc8fe"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","8bdd9d2813eda2d1c5ee6246b6af4ad3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","bfbda34b9635d0243a63257073352672"],["/Swift CompactMap vs flatMap：差异说明/index.html","7bc02c90b6643ab40e22d50dffc5347c"],["/Swift Grand Central Dispatch 深入实践/index.html","c15a822dc9a6a244ce03c9bf931ab38f"],["/Swift Lazy属性初始化/index.html","aa7b93f241dd97e7a2c507e995dc98ae"],["/Swift Promises 初体验/index.html","812265e40aa62223190baf2749fc6834"],["/Swift Promises 探究/index.html","fb85616d31e40e69c0d8c69194c40c50"],["/Swift UICollectionView使用指南/index.html","ec590110f36eab3e2987783b2614eb60"],["/Swift URLSession && Combine framework/index.html","61381f81493fc535ab1e6b4611c5448a"],["/Swift tips/index.html","ac207ae84379922ed0c5833e4ee11a93"],["/Swift 三方库：GRDB 使用指北/index.html","4fb5e97a70b9ddddabb7442c7af941ba"],["/Swift 唯一识别的视图/index.html","0a17d07de0e188b4aeb87c014bfb82e7"],["/Swift 如何学习现代UIKit？/index.html","c7040dab11f005abbfd34228795a09ed"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","c8a255a27bd27d10d954ae59ca2819b2"],["/Swift 用 compactMap 替换 flatMap/index.html","b3236fc5ad22c1a2b95d0a377465d4cb"],["/Swift 选择和播放视频/index.html","b940db1fa3b110e58853c0f9828877d1"],["/SwiftUI 系列(一)：1、 简介/index.html","d0cf577e23f757259c9b18f061f0b256"],["/Swift中UIColor最佳实践/index.html","108578c97860f5b49ac12aa5d27d7b12"],["/Swift中快速简单的工厂设计模式/index.html","352a992508190dde760fc5187be75b82"],["/Swift中构造函数与静态工厂方法的比较/index.html","51fd1c6b1040cfd31a0fc91f502af72e"],["/Swift中的UITableView教程/index.html","0f88b045de86fe3406cef6f7be4cbc51"],["/Swift中的懒加载模式/index.html","283780b8aade275679eb82850aab3a55"],["/Swift中的模块和挂钩/index.html","902d2d832e3ec76a8be9e62e549729c9"],["/Swift使用布局锚点添加约束/index.html","148e546e6dad08876373d210cefe8329"],["/Swift依赖注入设计模式/index.html","fefd7292d6dc4907ea0065c26f070a8f"],["/Swift关于Dependency Injection (DI)/index.html","8c06cb91f11872c6072867af5d3e1fa8"],["/Swift初始化模式/index.html","1dc870ce839c16a1e23a37c3fdf3b900"],["/Swift单例模式/index.html","ee9e3f11ea7e1936c4c96d22d391bce8"],["/Swift原型设计模式/index.html","edab4a27a30fd82a9ead9f1f4129ac97"],["/Swift命令设计模式/index.html","ab6bcc12ce47d177dec8c0c75f372816"],["/Swift外观设计模式/index.html","db99b161c38cb06411fe37e1199c3501"],["/Swift委托设计模式/index.html","70dc02d3d26b8b2a7dfd9bda0c7aafbb"],["/Swift对象池设计模式/index.html","c0df08fcb8824382ed2497c39cf81956"],["/Swift工厂方法设计模式/index.html","de4d7cd6f57456c4eae5b4684e7a589f"],["/Swift带闭包的懒惰初始化/index.html","23df47ca5c0cdcef0e60b3400366e5cb"],["/Swift抽象工厂设计模式/index.html","a487a4345fa89d17902e22276d93b530"],["/Swift掌握iOS自动布局锚点/index.html","b5b6d90aaeab584b86aa8859aa4be28d"],["/Swift支持旋转的自适应单元格/index.html","2021bd053961de0d6bc817caed5dd458"],["/Swift枚举值/index.html","86269b5500190bcfa4c4c7f75901621c"],["/Swift生成器模式/index.html","636206c09210a7866e243a2c4d6128bc"],["/Swift结合Xib文件自定义UIView/index.html","b2de51a9e2fb257398dc05c20075c2ab"],["/Swift编写的20个iOS库(一)/index.html","69692546314ba0e214e06f072d0a00be"],["/Swift迭代器设计模式/index.html","029e5c4fa1a210d396e5893f7f7a7b44"],["/Swift适配器设计模式/index.html","a02a1c31101441edffef2fa05649fdab"],["/Swift静态工厂设计模式/index.html","88fbb7f397916f9933cffca80a42ac8d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","87e8325f7f43adf8e4c728e57b65a659"],["/UICollectionView data source and delegates/index.html","283ee8a6b9bdd0eb28b6a0743898df50"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","0f8cb0d82305a23f0cffb5edeac16992"],["/UIKit初始化模式/index.html","6adea34ffa1acb13d8e9a3f460542d33"],["/Ubuntu18.04替换国内源/index.html","7c79e3e87de44c50642530541ff4f988"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e453c508a1662b0de781f4da2d52b0ef"],["/Vapor系列 (一) :  Vapor 初探/index.html","79d78604634011e667fd637815593bc8"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f173f91f1d00029a0b0f71eee46b514b"],["/Vapor系列 (二) :  Hello Vapor！/index.html","9e997c8d83ad150e52f0d0258059700a"],["/Vapor系列 (五) :  使用session进行authentication/index.html","ce4d45db42d8f2736a4cd0282ea203a2"],["/Vapor系列 (四) :  创建博客数据库/index.html","ee72ddb928426d848e76a2b430bdf438"],["/Vapor系列(六): 徒手撸一个CMS/index.html","823c6e2d18472e3a7ef51cc2f63d57cb"],["/WKWebView与Native交互注意事项/index.html","672e91f7ec3912ce838550ea2d08352d"],["/Xcode扩展/index.html","5d49e779d32b3f18ae6c4e97914d847f"],["/about/index.html","aa089980babab801b0dd51a29ec8b7ac"],["/appleOS的Networking示例/index.html","72b8a9582d64a5abe482a3e50b71f23f"],["/archives/2020/03/index.html","89ce9b7a3357e58bbeaef5718fbf1a5d"],["/archives/2020/04/index.html","df64f4f85c31482d789f2674feb0546f"],["/archives/2020/04/page/2/index.html","2624b3ef00ac052aebc42e4d36a2eaae"],["/archives/2020/04/page/3/index.html","a39e41a0b7aec016671c134acbfd7bd7"],["/archives/2020/04/page/4/index.html","6c5882201ba23c0d6c42e786aee5cba9"],["/archives/2020/04/page/5/index.html","095b8e8c3a49cbcaf282492cee781e18"],["/archives/2020/04/page/6/index.html","3f900e0887ba3b1f11f4afae66e50dba"],["/archives/2020/04/page/7/index.html","1d399f371951798aa098b9c574f74266"],["/archives/2020/04/page/8/index.html","5e81f4edc8d8d7d20e48613e3f7d8a3f"],["/archives/2020/05/index.html","3cd74a9b599b944b2555973167a46eeb"],["/archives/2020/05/page/2/index.html","088496880180bf757ed43d77d26e3b37"],["/archives/2020/05/page/3/index.html","4259ebd433b76ad532b7dafb606ccf15"],["/archives/2020/05/page/4/index.html","76dfaa116d58eae0f998923923793fd1"],["/archives/2020/05/page/5/index.html","8d2c4e7104ff454b3a63aea2f2d1aedd"],["/archives/2020/06/index.html","6bfc8ccd42471c3ce3d5d4c5d6340be4"],["/archives/2020/06/page/2/index.html","1b7818ca7de1ba1d36b79372f8804a9b"],["/archives/2020/08/index.html","9b1703059c48ba254c5b812cdc33bdff"],["/archives/2020/09/index.html","99bc98e8eaaf77d36b0f385a3aadf173"],["/archives/2020/10/index.html","ce1e2d5706690c3e9e33362824f1d815"],["/archives/2020/11/index.html","4abb98fef68c48d9035289d3fe85d132"],["/archives/2020/12/index.html","d1192631f7f5ff2fc7d3b43586888f07"],["/archives/2020/index.html","cfb52f781a8045826149624c1e85ad69"],["/archives/2020/page/10/index.html","868cdafe311e50b30a2624cea351e641"],["/archives/2020/page/11/index.html","8e381290ff785c77267d22abcbb9ec03"],["/archives/2020/page/12/index.html","8671d445397cfc3ae28c1cf15c522c7d"],["/archives/2020/page/13/index.html","f97f6f58a647c59a51ba6e698e4158fc"],["/archives/2020/page/14/index.html","f8e320d4195250ed3799d0202add05c1"],["/archives/2020/page/15/index.html","d0d16f20b3e5a4d0a7178d9d0e1a7f10"],["/archives/2020/page/2/index.html","1ecf84c8950bfde322048616d85b76ea"],["/archives/2020/page/3/index.html","927e7789179b1f1167eebb3ebefcc003"],["/archives/2020/page/4/index.html","1d032316e87660527dc09bfdb4046076"],["/archives/2020/page/5/index.html","4166a461d31ada5d99f4eeda5e9f3d91"],["/archives/2020/page/6/index.html","a6faa2f009c40a7699925277a9aa4912"],["/archives/2020/page/7/index.html","47431f82f177fc0c2d155bbe39370fa5"],["/archives/2020/page/8/index.html","6b4567245c0e36cd3cdcde559d1e88d6"],["/archives/2020/page/9/index.html","a1d996ba6b7ef8a489ae5f923a8c6f4e"],["/archives/2021/03/index.html","a1171a5d0827b074d16bf11266f0b72d"],["/archives/2021/04/index.html","ec717cb6808bd7a6e392c87014dfa55e"],["/archives/2021/05/index.html","96d13ba97c64d5f6c01678529b95626d"],["/archives/2021/06/index.html","39157a3371c7839332c4c21c4508f93a"],["/archives/2021/07/index.html","f57aee1bdc4ade4eeb85fbd986afef2f"],["/archives/2021/08/index.html","4d899dbd7a3dfde1324f8e2a6038a9e2"],["/archives/2021/09/index.html","f084b27b3cb6753dcfcb6850648651a6"],["/archives/2021/11/index.html","400f1dfefafe047262dc9dc993f6e3d6"],["/archives/2021/12/index.html","de718410537c8004228093645fa89175"],["/archives/2021/index.html","4d4594a8a2dab99fa5cdfd6f5953fdeb"],["/archives/2021/page/2/index.html","a50b813cc1879fd4dd7ceef3a86eb4c5"],["/archives/2021/page/3/index.html","d2eba6e9a905466dd623def953019e16"],["/archives/2022/03/index.html","b2d426ac77f176e959ccce5d3da274a3"],["/archives/2022/04/index.html","4e303a10c07bc4bce7f20be1c9489029"],["/archives/2022/05/index.html","9e638eb75adec070afd238a0b4f1ea90"],["/archives/2022/06/index.html","72bc069689f562765f5496759c217711"],["/archives/2022/07/index.html","8844b2c1dae31f9a89a6f8ebfb1d76b4"],["/archives/2022/08/index.html","68b97d78e3fe2966dafd77aedc73152e"],["/archives/2022/09/index.html","e0cb944ca52212ea5c2441fc0a8e857c"],["/archives/2022/10/index.html","6258f736c60f0d56af5ba7ffc2b87cf6"],["/archives/2022/11/index.html","bf180c364f2d3ee34c95238eb733376d"],["/archives/2022/12/index.html","153d5c007a76fc61dac853ba297b20b0"],["/archives/2022/index.html","5778a160532dd09214ccfab0a76ea950"],["/archives/2022/page/2/index.html","0daf666f12ff677ca5f983240a164522"],["/archives/index.html","b66634a1ee2f6c24e659f4ee61f4b673"],["/archives/page/10/index.html","260fd21d87798be70c845f5bdaa42c0e"],["/archives/page/11/index.html","7a458a3f1c653c746d356a3ca21679ac"],["/archives/page/12/index.html","d47673776f0f06996124a2dac9d9354f"],["/archives/page/13/index.html","13dbc24eb7b2a913a55ed5744deab4a6"],["/archives/page/14/index.html","fb37cf4ad0d3adf7d63b4fb782bfb49e"],["/archives/page/15/index.html","f9f569e55c591daa34b18d94a6c98d02"],["/archives/page/16/index.html","02cbcb7e8c487ad48e9ed1ef59c3fbae"],["/archives/page/17/index.html","65961ac4756ef29b5573a1d2b54ff26e"],["/archives/page/18/index.html","8929d61ccf7fece720f261afc7432598"],["/archives/page/19/index.html","55fa2baa2f268d8fb11d1b80974a2a10"],["/archives/page/2/index.html","0581d23f127bca90e5189ac539535239"],["/archives/page/3/index.html","47c9ca8805cd42bd1834613e428a8285"],["/archives/page/4/index.html","c4741d885d639a8fd01840569a4c8e42"],["/archives/page/5/index.html","d200e6137693be4ba3d2199a5b358b98"],["/archives/page/6/index.html","032ba5c6a47c8086abb532cf6f8064ff"],["/archives/page/7/index.html","0f32f6b13e4d3571a53f3fe1fe8b7ffa"],["/archives/page/8/index.html","ff346ee065d2584bc093bfb515751216"],["/archives/page/9/index.html","4bd31bfc4111cc22a3f6bb53dc98fa2f"],["/bugly 上传dYSM文件小记/index.html","c27bb967f94f08bfbabc76ae2bb0b932"],["/categories/Advanced-Swift/index.html","8eb7424ab78945d46ab306b650c51356"],["/categories/Advanced-Swift/page/2/index.html","9d2001ad212fd10084867d8e8f910231"],["/categories/App-Architecture/index.html","a7dae4ea3fb66b51a7299899fb3210ac"],["/categories/Array/index.html","d4f6769b3bd2eb2dbb96e7fd3976bd7c"],["/categories/CocoaPods/index.html","a8b67b96889df69bd4d81fd8c93406ce"],["/categories/Codable-protocol/index.html","67777ae136fca5e5a1e045aa1e8c8453"],["/categories/Combine-framework/index.html","5e7368eeebffc14e6e8ec353d7c7d188"],["/categories/Combine/index.html","09732bd39034e82b8a7fa71d2d86bd80"],["/categories/Docker/go/MySQL/index.html","4fbdc334d1eb0297b600f729752739d7"],["/categories/Docker/go/index.html","6eb7e5ac832f4475ab657c138d8dd2a8"],["/categories/Docker/index.html","d93c4ce7868d53f8b95aacde356ab996"],["/categories/GRDB/index.html","96d0212c02be5b6d4d56423ae21e9598"],["/categories/Go-入门篇/index.html","d5e7eaa6171cad478619749afb25300f"],["/categories/Grand-Central-Dispatch/index.html","21ab8f0becc44b4288e3b570f8c62ec5"],["/categories/Homebrew/index.html","0f3c53268c9c4a8dd57177192dabca5f"],["/categories/Linux/index.html","73a2d70e789df16d7f96f6b85b93dcdc"],["/categories/MySQL/index.html","6f7aa9a2062e6a3d2f96626a895e57b6"],["/categories/Promises/index.html","839e99b392bc90be54ffef760f067d0d"],["/categories/Protobuf/index.html","854525a4d532e8b4dad1236f79f455d9"],["/categories/Result-Type/index.html","b6d6125817be9b08419ebdce422dcc72"],["/categories/RxSwift/index.html","78c2906412328b0b308eb2f16c4aac1c"],["/categories/Server/index.html","0d6b462c0f6e3e32a2f31bbbcbba1c20"],["/categories/Sqlite/index.html","4e6cb9cc08b0e6a808ac118f4c267852"],["/categories/Swift-Apprentice/index.html","cd6d757820c687ce70e6d739ae228562"],["/categories/Swift-Apprentice/page/2/index.html","350f94f371c8c355a6e4be818317e3ff"],["/categories/Swift-Apprentice/page/3/index.html","ddc982ebf8a41399a038b1d6929b4b27"],["/categories/Swift-源码阅读/index.html","718c88880c5634cd200e6e10b443d208"],["/categories/Swift/index.html","d87fad5f9a18ed5d7102e977a515e030"],["/categories/Swift/page/10/index.html","f116c53a7d475ab074e93425d737eebd"],["/categories/Swift/page/11/index.html","b18e8f7a1a22db80c1bd2699c68f042f"],["/categories/Swift/page/12/index.html","37a340a9bfa6e087d5515d71c9fcbf24"],["/categories/Swift/page/13/index.html","857150d9bfd05a8aa8e2e1f58c334cea"],["/categories/Swift/page/14/index.html","f39dc3e56c582e66a420e810f954f8ea"],["/categories/Swift/page/2/index.html","be35fddb6df242fc4e77efa19ac7c09c"],["/categories/Swift/page/3/index.html","066f32860a43ba5fb0ed847d34c36bd7"],["/categories/Swift/page/4/index.html","3377cac5cd4c53f0d59f1dc9016f0a4b"],["/categories/Swift/page/5/index.html","c8897e5cc4343baf67129b0b110aae6a"],["/categories/Swift/page/6/index.html","bc3169eda519493e7f0a0ad3b1c607d7"],["/categories/Swift/page/7/index.html","3e39b41cb44a96561bfd37e04d09de2c"],["/categories/Swift/page/8/index.html","732963af86dad7dff0aa203eceb5a77f"],["/categories/Swift/page/9/index.html","5dd7e42c76c227a1e2a4eeb2eae8bcb4"],["/categories/Swift5-2/index.html","c770aa2c6e00d25e6e78be61fce95d31"],["/categories/SwiftLint/index.html","beda6f18d6f57e08e0cae06d6bbcda54"],["/categories/SwiftUI/index.html","34041acf404a7062b384577a3deff635"],["/categories/UICollectionView/index.html","08e9704745169ed34c4680eaf2d10907"],["/categories/UIImagePickerController/index.html","7f67d30b6b413d8ce421c9b26bfc3cab"],["/categories/UIKit/index.html","8116e6447de66310881400b5e161a4de"],["/categories/UIKit/page/2/index.html","d3278f384cf7aabc55d48c1379a66e5f"],["/categories/UIKit/page/3/index.html","a892bdd7bacacc90f2410a432017f314"],["/categories/UIKit/page/4/index.html","7d78c2a693568e5e2a4c614c29991719"],["/categories/UIKit/page/5/index.html","993aa90d874331919be48fa0ec52c210"],["/categories/UITableView/index.html","6a372c6b47f7392d811d72d80d060bf6"],["/categories/Ubuntu18-04/index.html","5a851873dd52faa2129b59a4d92d1f68"],["/categories/Ubuntu软件源/index.html","54d6f93bf645fd460039ddcfdc752807"],["/categories/Uniquely-identifying-views/index.html","cb5296785936a1eb9b2c368147a42351"],["/categories/VIPER/index.html","3bbe0a033a02ebe74aa42b290fffcada"],["/categories/Vapor-4-0/index.html","039891df2b58aaaf8c02958414214a44"],["/categories/Vapor4-0/index.html","4717ad4337c4987ac397764feb26bbc4"],["/categories/Vim/index.html","4bd48fe08874fdbcd6d995c054dd5271"],["/categories/WKWebView/index.html","61d7b23663e95a621157487fd4d2a746"],["/categories/Xcode/index.html","38b7184d9138476c4a40471d8b72b0a2"],["/categories/appleOS-Networking/index.html","db661516651ce96ac2c5132f597f6244"],["/categories/bugly/index.html","e0ebfd59659fa0ba709c58a4a741d1e3"],["/categories/enum/index.html","9be27afa43fb2ab6485769f359a5c019"],["/categories/git/index.html","e440d2b71e7fb66395bdc57db15f1ea2"],["/categories/go/MySQL/index.html","2d3e9a4d42a9e56b19acec4884c6e142"],["/categories/go/index.html","0e4dd9e1abd03429f0824e7605b72298"],["/categories/go/interface/index.html","846684f53085fd01b76e4176549389ea"],["/categories/hexo/index.html","03376539a00eb391c1805994bf4f7e03"],["/categories/iCloud/index.html","347b6d2baa5a2411c6ad8f54729b88ab"],["/categories/iOS/index.html","ba15caaa9f1a4df6c3d7dd1cf109ddd4"],["/categories/iOS/page/10/index.html","a2005c5362b60975a724d81610774e1c"],["/categories/iOS/page/11/index.html","10ed3b1c46d80b282a1af51bb8cc89ac"],["/categories/iOS/page/12/index.html","64e32becb65929ddc051cc0f56c976b2"],["/categories/iOS/page/13/index.html","1f237b0377a0102af6ccfaf1acb960fc"],["/categories/iOS/page/14/index.html","d2abb251b190bfc6ddba322a75b8e65f"],["/categories/iOS/page/2/index.html","4687eabcf72d3b9b1f1e92ecc0858023"],["/categories/iOS/page/3/index.html","9f5a92615ede0ef20778ff9db080a7a3"],["/categories/iOS/page/4/index.html","83e11649e604c11cb8f6734b9bf8079b"],["/categories/iOS/page/5/index.html","c47c82a81b64e9055764a7a01a35d5e3"],["/categories/iOS/page/6/index.html","97426a795b97ffb397f7490ae4511d63"],["/categories/iOS/page/7/index.html","c035162219ff4cef2d36f584965cf562"],["/categories/iOS/page/8/index.html","d8e3a248c71287ad17d9d52ea8bc0cbb"],["/categories/iOS/page/9/index.html","36cee422fd2026a7130426f15b7260e4"],["/categories/iOS/面试/index.html","2dadcf5e5f1c9490e73c6a2e80b06c84"],["/categories/iOS面试题/index.html","2d3b1e1f67e6fc8c9a5a037b323f04bd"],["/categories/index.html","e7ced76b1f223b1de9d0e77427fd54c6"],["/categories/random/index.html","d18fbac5a0d7004d9edd53d79f85c6b6"],["/categories/三方类库/index.html","99e8e1fded478ebdb2fbb51402ace700"],["/categories/函数式编程/index.html","5e42810d6be289ac2c92cc4719a301ba"],["/categories/子类化样式/index.html","1881ca01776f81a6a0c8c812ac219f92"],["/categories/小程序/CSS/index.html","2801b403a5f2ea85e2821f308e71ebda"],["/categories/小程序/index.html","b1579d3f5959a72365ef10ab5b1f0d1e"],["/categories/开发技巧/index.html","d981aba209f38501ac1dd29f1ff8a720"],["/categories/开发记录/index.html","d485a98fe49d9e96ce6c72c281c4b312"],["/categories/数据库/index.html","233d215cdb68d4008c5a6357a3552608"],["/categories/架构设计/index.html","c2a5b16a1467d2f2a0509550c0875837"],["/categories/测试/index.html","6e5cf6dddb9faa39c6f2c54fdbcbbe82"],["/categories/用户体验/index.html","372af5bc090ff66dd8ab901045ddc199"],["/categories/用户协议与隐私政策/index.html","829406390ad9afe29e1529ac2a725f3b"],["/categories/组件化/SDK/index.html","4eb79ceccd2ef7fe131bbae846c583f4"],["/categories/组件化/index.html","a84369d9d992dc2684bdc951dc616736"],["/categories/组件化/模块化/index.html","34bfe9487d3355a2ca286454bb0dfbaa"],["/categories/设计模式/index.html","b153bc78b5a9e516b9d29f8b41d7d372"],["/categories/设计模式/page/2/index.html","2dc899856740826c326c1ab0d377804d"],["/categories/设计模式/page/3/index.html","47e60dc4e1d8f9e616abe00d92d82f53"],["/categories/逆向/index.html","6e3b0fb66701a4cd9969ae63be0fbd6a"],["/css/main.css","12336747324ce4971288286f8ebf9625"],["/go moudle 导入本地包/index.html","ef072cd3f1ef7fa418a3cce81039fadb"],["/go 库专题(一)：gin/index.html","80791e6ceedd4d7cf97446f17ff6e302"],["/go 每日一问/index.html","e2287b08706dfbaac8ce89af666eb1f6"],["/go 项目实战：gorm 数据库框架/index.html","fdcb1c940a20658f3b0dbcdb89087c1e"],["/go 项目实战：zap 日志库/index.html","47526ef9610af4360f6a400ff4b6079d"],["/goland 学习笔记/index.html","e15ac2c3cc22beb6c5da396f1a6dd549"],["/hexo部署失败/index.html","dc21590f2fb8c4ff4fe6236008016869"],["/iOS 15 适配/index.html","1cce7036ed9aa80f745af737811b116a"],["/iOS VIPER架构深入实践/index.html","dd52298d1c4cc5de35d67b6919d8ad1b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","c95f58cb8a3cd266296f9325a007e07c"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","e69290170ad37b71fd3a1a380daee633"],["/iOS 自定义视图，输入表单和错误提示/index.html","298d0ee69a970bf8ce29ed635c38c508"],["/iOS如何使用iCloud文档？/index.html","e3186c5774808564cd6ebf0bf1442ddb"],["/iOS子类化样式/index.html","0e6da39398cf326f855468d609d84894"],["/iOS开发记录<一>/index.html","e1a219ac296e64bf9f333c537e9dec13"],["/iOS自动化布局编程/index.html","33c73b402929738b5b308205a7173f22"],["/iOS自定义转场(By Swift)/index.html","2aea46362917cedfb667936cd6494c08"],["/iOS项目架构：使用VIPER/index.html","de74e8fb482db602fa92ef8ea1ad0094"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","aceca3293b59bb20d3500679eb03d1bf"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","37e749803f03bb8b3fe98a69f9573f41"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","6de1e3288aab61528e89076fff0a4aca"],["/page/10/index.html","611bb97d573b13c33f58121cbe3d8cc2"],["/page/11/index.html","4fceb8606f1cde8a63340382a59650b3"],["/page/12/index.html","f6a94e7576fb6308e6ceed83d5531c62"],["/page/13/index.html","86efda30b3f2c3559d7ef19152e53015"],["/page/14/index.html","3248bf9ce804e709902fbfadd73f3a1e"],["/page/15/index.html","c12cc440d1c5bdae856c87d49b816bb6"],["/page/16/index.html","321cfda1caf0cbedfe0901981dfa2404"],["/page/17/index.html","483c2bc6d6cac78021491b17190962c3"],["/page/18/index.html","3d5d1f123a78325a7b7267ae07b1ffe2"],["/page/19/index.html","8097d24e9bc51b70049f0c45c34af706"],["/page/2/index.html","505012cc0382be24935a02769a9d385e"],["/page/3/index.html","03b21774db9d2c50167a6fa6426ac06f"],["/page/4/index.html","2e0747d89df089360e2ac1b146631d69"],["/page/5/index.html","012d06ffe3880ee6471b515ac66379a4"],["/page/6/index.html","7ffd10d2e6f64ed6ca9d7678c46b59d1"],["/page/7/index.html","d8778260f5dbab72aca00900cefd8fd1"],["/page/8/index.html","d11d5ecf48c2254a28cef792dbc64796"],["/page/9/index.html","54b9ad8fbb7ba2b47b5e4b3d9dd214b0"],["/schedule/index.html","76e3a52f09414ab49a248e5e98a82e7e"],["/storyAppPrivacy/index.html","1b9128b856338b8ef3fe0f328177d86b"],["/sw-register.js","c9189c82380db50d1fa4352b0a11d89e"],["/swift 专题：函数/index.html","a64e8ae70426542616aa952bcbf553f9"],["/swift 专题：闭包/index.html","0b9963a69826249a62a88e2a45d9741e"],["/tags/Advanced-Classes/index.html","74e228b232fd6ad0d30cd0c216ad4fda"],["/tags/Advanced-Swift/index.html","d25a7f2c4c6672519927ee0ef955129f"],["/tags/Advanced-Swift/page/2/index.html","fa10469a09e86d997476ac74161d9800"],["/tags/App-Architecture/index.html","0433eca801ba6d7bba3a132cd8ebaed0"],["/tags/Array/index.html","80e2165390d436ada35f3e3635f8f826"],["/tags/Arrays-Dictionaries-Sets/index.html","fd72cd8cfc5519d38afc26984d1214c3"],["/tags/Authentication/index.html","40389e635a71b5694cc13fa1366e4338"],["/tags/Build-in-Collections/index.html","894b0dd436ca599d69e8336abfd4ea17"],["/tags/Building-Your-Own-Types/index.html","6606385625453589fbd2c4fca13a50b7"],["/tags/CMS/index.html","046edfa9113314cb3a93f9e9a2380100"],["/tags/CSS/index.html","f5c534baf5243ebf0bb278a80908481b"],["/tags/Classes/index.html","edf2c9a90e19400d6874521d26fa6f07"],["/tags/CocoaPods/index.html","2de1aaabebe43459a20b5639b0f6a37f"],["/tags/Codable-protocol/index.html","c4f62979dfb16d08e5c017f93c75594c"],["/tags/Collection-Iteration-with-Closures/index.html","10617488ed3a30a63beca06d85eb4b91"],["/tags/Collection-Protocols/index.html","eaa49041d862ca4444612b0a40249c82"],["/tags/Collection-Types/index.html","433c29c4749f25df784f07cfef7f53f3"],["/tags/Collection/index.html","a8edfacc94b2539e8900858874c3ce6f"],["/tags/Collections/index.html","d2eed206448a9a35a593e8ea7fd0ae40"],["/tags/Combine-framework/index.html","66e8ed57c2a880159fc9dd39a0f3482c"],["/tags/Combine/index.html","4621a1366459a5dffaf7f7ba5a7df5e6"],["/tags/Dependency-Injection/index.html","457371cfe254516f61d65faad39a2fc5"],["/tags/Docker/index.html","6ba8c783c10ed77a2a4a4d965caf93fd"],["/tags/Encoding-Decoding-Types/index.html","c8e9b7ef2a31e1197a3be76a7e4c05bd"],["/tags/Encoding-and-Decoding/index.html","8e6b62c5c6683d2ab0264ef1c1b6e08c"],["/tags/Enumerations/index.html","22a86a8ab9c3ae0e31f3a01cb36fa34a"],["/tags/Enums/index.html","c468cb46617d1fcadf6ad1d632f7e2ce"],["/tags/Error-Handling/index.html","172696de0f34f0c5e8e7f9f082d8d120"],["/tags/Functions/index.html","35252164045d7c7b6d3b37b46c0cd6a5"],["/tags/GO/index.html","cb21bec0876f3d425a869ed427c5e833"],["/tags/GRDB/index.html","95a55a544c848331095f1d9d14c4f0f7"],["/tags/Generics/index.html","71a4e241449f0d0e7d8c44552afede2e"],["/tags/Grand-Central-Dispatch/index.html","01346e4a514fae9931ed8daaed5538aa"],["/tags/Hello-Vapor/index.html","f6dd092dcd87ac869bd5a2db90b5a580"],["/tags/Homebrew/index.html","cba6b6b29546855a029596d71704c8e4"],["/tags/Interoperability/index.html","71f72c2744d9dcb4e69026a6c918c7c3"],["/tags/Introduction/index.html","f1ba86650db792a143308164ff9fdf6d"],["/tags/Leaf/index.html","ce23384f62ae7e30ee810b2489715aa4"],["/tags/Linux/index.html","721799db5a08180f16ab093def761f9a"],["/tags/MAC/index.html","daa15b4b52c0e7e45d9068ae351025ef"],["/tags/Methods/index.html","7d63cd29c3814d6e0369bfb99fcc0aca"],["/tags/Modules-And-Hooks/index.html","212b1c702b53ebcc6ab791ecd37bb93e"],["/tags/MySQL/index.html","3c93c736167f7bc07c1272a574fbcd9e"],["/tags/Optionals/index.html","068c9b81c7fe77bcb2b1156add675cd0"],["/tags/Promises/index.html","f838ca4db6653567a1607cb5e6580040"],["/tags/Properties/index.html","26247929e0afc0c3644747cb6116cf04"],["/tags/Protobuf/index.html","626a1fbaf6aec5a75f2363f735239597"],["/tags/Protocols/index.html","c287bd4fffdde4e84da9eb842a92bca3"],["/tags/Result-Type/index.html","66650ce34b4dde7e606cbdbc19bdb8ef"],["/tags/RxSwift/index.html","c0d207e6c2f98020b47fe8decd3069dc"],["/tags/Server/index.html","9d00dbce0582314b0e1d0b56a54c3b90"],["/tags/Session/index.html","f9ee5470772dc2e63e969d9bcfbecc4c"],["/tags/Sqlite/index.html","00bb3f81aad7709083e0ca13be7c3513"],["/tags/Strings/index.html","eabcb5f18baede06673e488187912a0a"],["/tags/Structs-and-Classes/index.html","107284ce338087917091c46fd65adb25"],["/tags/Structures/index.html","9fa5a883c19ab6b82ee1f1ba2bc6d1a1"],["/tags/Swift-5-0/index.html","167d3aa108cb7c8268020ff6553d62a7"],["/tags/Swift-5-0/page/2/index.html","49a0bf459f81db42d10be804b2a44795"],["/tags/Swift-5-0/page/3/index.html","f0240380f77e9f0a05a951c0805b143e"],["/tags/Swift-5-0/page/4/index.html","192d7cb3bffdf9faab6001e6ce362be7"],["/tags/Swift-5-0/page/5/index.html","5bc90ae9bfbc524c2bf0ab0ea65fdaa3"],["/tags/Swift-Apprentice/index.html","0c4eb6730d72ace6f4bd3059b9b451d4"],["/tags/Swift-Apprentice/page/2/index.html","54d29f365a4808466feff7f04369dc3a"],["/tags/Swift-Apprentice/page/3/index.html","13b0a62bccf77acd5054f921b683eebb"],["/tags/Swift-Package-Manager/index.html","634a95c26941c69230131b2017255748"],["/tags/Swift-源码阅读/index.html","353636d9f1d1297bd7e4ae8f3783bae8"],["/tags/Swift/index.html","4b441440d9ab3c4eef94b20a73096595"],["/tags/Swift/page/10/index.html","3530b9d932bd443b6ffe416e417483cc"],["/tags/Swift/page/11/index.html","428f6a968d48662c66f25ac2752cd033"],["/tags/Swift/page/12/index.html","196695749da66244d2adce51793fd42d"],["/tags/Swift/page/13/index.html","16c2eecef2b904063db9ded06e46e3b0"],["/tags/Swift/page/14/index.html","78ca70b2a3ec0ccdad9a2098da137cd4"],["/tags/Swift/page/2/index.html","a3669cf2eda3e6b25808bfac2f4317b6"],["/tags/Swift/page/3/index.html","ea6fe748fc38b3f2606ae20b2bde7e4f"],["/tags/Swift/page/4/index.html","43ebb56ff312ce8e763803b0eb676f58"],["/tags/Swift/page/5/index.html","7dc29205029d6c78de75859843e980d5"],["/tags/Swift/page/6/index.html","818bc7acffeb931ee238049b55bb25f7"],["/tags/Swift/page/7/index.html","00d5ceb1c84b9d05c4d4f437fb6843f7"],["/tags/Swift/page/8/index.html","a4ce09176f8c2f1714ede288cd863aac"],["/tags/Swift/page/9/index.html","75b8f683f71043316994f1a93066d8d7"],["/tags/SwiftLint/index.html","09da2ae6f22bd7e7a0f629f1637c2fa4"],["/tags/SwiftUI/index.html","4e97e183d72996a517e5edf28b80f59e"],["/tags/UICollectionView/index.html","054f2030ac7652bef2781688b68ddd3c"],["/tags/UIColor/index.html","6c16fc3b831b6778c12889cf9cc429b7"],["/tags/UIImagePickerController/index.html","9785dfddd41bb2bbbb49d6947e3d760a"],["/tags/UIKit/index.html","9ce8286be69eeb7bd60927a03f3363f0"],["/tags/UIKit/page/2/index.html","506db14d2c2fe732d13b449d09ac1b82"],["/tags/UIKit/page/3/index.html","fed96d12df95792e3141223dde87b31d"],["/tags/UIKit/page/4/index.html","16bfb6eeb0104ad278c6a52b3a7506b5"],["/tags/UIKit/page/5/index.html","1f5b0df12c4778c25f145f0ef9f25a52"],["/tags/UITableView/index.html","759c26dd24413cafa7151cfb9119a044"],["/tags/Ubuntu/index.html","a98cd80c1be3211927f5c545ea986ae1"],["/tags/Uniquely-identifying-views/index.html","281428c23fdc13f921294ea953e765b8"],["/tags/VIPER/index.html","120443c23dee97d68396ec9da17f8942"],["/tags/VMware/index.html","814b7b9b98cf724eb37a8922635f1429"],["/tags/Vapor-4-0/index.html","8e3beb0223ec5267dd1c333376ca1c94"],["/tags/Vapor-初探/index.html","94f77fd1340f5e423016a9d25470b0fd"],["/tags/Vim/index.html","d4d247186754d9c4353940acff760ae8"],["/tags/WKWebView/index.html","e18d73514b3791e0f49953f82f53af77"],["/tags/Xcode/index.html","fb6b160376f58a6bbc2a76d2c077f670"],["/tags/appleOS-Networking/index.html","8cd2d74b59963a102a9291ac680f476d"],["/tags/bugly/index.html","8dd04e993208ce3202a00dc76e77a498"],["/tags/enum/index.html","d3908e1b77fda0059e281bc05dbe3061"],["/tags/gin/index.html","85d523fac4c1fdf43fbe0b9f0ab91f00"],["/tags/git/index.html","4a9e58ee6a4a25f841c928a680ee4e38"],["/tags/hexo/index.html","0ad5f8e10c2a016e551ae71a615173cc"],["/tags/iCloud/index.html","ea6058ae53a874c2233efe23591a514e"],["/tags/iOS/index.html","ac105f9ee6009554c5cccce91178e65f"],["/tags/iOS/page/10/index.html","5b43cf87aa71303aeadb97a305e64db5"],["/tags/iOS/page/11/index.html","695199aa9ce51c9c878f39a4d34a9bdb"],["/tags/iOS/page/12/index.html","9ce22579ddac65697a6c83b8714c4fd2"],["/tags/iOS/page/13/index.html","59e5484779126c1a3a475f1f6d616b2e"],["/tags/iOS/page/14/index.html","1057b790ac5ef029d688e2ba1e251698"],["/tags/iOS/page/2/index.html","336b39e31cc1d3745ba2d1893074e719"],["/tags/iOS/page/3/index.html","63e59f70baeeba5fc414fa538949ec1a"],["/tags/iOS/page/4/index.html","86ed234c49b7b28cd950785568a6224f"],["/tags/iOS/page/5/index.html","0b2a841e756c4aaf7c71cb83617da59f"],["/tags/iOS/page/6/index.html","216d8fc588da930b8fcfbde88ff1c087"],["/tags/iOS/page/7/index.html","3bedfc6c480b89f2f958a0cd53ff884c"],["/tags/iOS/page/8/index.html","702ad6a0103b2688439f30a6badeff58"],["/tags/iOS/page/9/index.html","6b24e0165a6b399c2b42642490e65fcf"],["/tags/iOS面试题/index.html","074201938236d19c4283421edf38ba46"],["/tags/index.html","4a68ab6411695b7094f58f7f8e2504a0"],["/tags/interface/index.html","906115581256ff7e28235e69019b7312"],["/tags/non-optional/index.html","cff72a21362f2eeacabb2137f24da56e"],["/tags/package/index.html","32b42c778e75038da500e717c581ea60"],["/tags/random/index.html","b14998b0008c5907f002736f3724ee31"],["/tags/transition/index.html","4e5a0609612380f5c48593c0b760afc5"],["/tags/三方类库/index.html","c8fbfa7fc494fca346c3b9f6693c8612"],["/tags/依赖注入设计模式/index.html","dce13e11b2b0efe88ffffd1bd57cce27"],["/tags/值类型和值语义/index.html","e73ebb78c53172b670d6beee83f7c959"],["/tags/内存管理/index.html","08505aa37542e193c2d73416852919cd"],["/tags/冒烟测试与回归测试/index.html","ab41a78fe556b7e1d9c2aead699080af"],["/tags/函数式编程/index.html","2b515b7a256dd2537045702401e46a6e"],["/tags/创建博客数据库/index.html","a3f9b9311db7a331ad00ec2ac9ae7714"],["/tags/初始化模式/index.html","be9baeb340eb2dbda7befcdc8993a8ad"],["/tags/单例模式/index.html","ad0173fb2a5c99c0b29c58c800bf4788"],["/tags/原型设计模式/index.html","074ebaefbded137e863c4d26207197fe"],["/tags/命令设计模式/index.html","b356875885e5229fb590db7759939724"],["/tags/基本控制流/index.html","f6a72da9459ea98b82098379c435512c"],["/tags/基础语法/index.html","8bc2b028803e81718da9b301257406f7"],["/tags/外观设计模式/index.html","66dcbe25e113aee07a0b00adda70eac0"],["/tags/委托设计模式/index.html","f424d548510b246d57659ff50b7abf2e"],["/tags/子类化样式/index.html","fc2c01c63d1aa8f12b00743ff966d7c3"],["/tags/对象池设计模式/index.html","1152a763c446a35c5614d3ed79597f6b"],["/tags/小程序/index.html","02a736ee6e64b2a6f677ea9872d8e08d"],["/tags/工厂方法设计模式/index.html","970d857881d2881cc2e21e8a9fd31226"],["/tags/工厂模式/index.html","74b86a868766d61539cb06e84ba5fed1"],["/tags/工厂设计模式/index.html","5a26445884a2f52b495c69b76ff594ef"],["/tags/开发技巧/index.html","0f79989053f71efba649236a38ca8103"],["/tags/开发记录/index.html","04c652c4dc479149044518d7a59e35ae"],["/tags/懒加载模式/index.html","1bec51e5b7f743d4626dcdb296e3a4f2"],["/tags/抽象工厂设计模式/index.html","eb8c9952eee6b7fe1c5cfc5ca4868e2e"],["/tags/数据库/index.html","d61be418cd7d1424b5cb06472249f0b6"],["/tags/构造函数/index.html","474d67a6766b49ad7c4624d374009063"],["/tags/架构设计/index.html","d8cdd7e03b74d057cb229d32ecc453ed"],["/tags/模块化/index.html","08719ebd0db4c704d8af6f64c2a55189"],["/tags/模式匹配/index.html","1c1c4ec17e0a8b1f66e9b54e9db26abb"],["/tags/环境搭建与验证/index.html","10c7372df72f52c317b3f6d42f886056"],["/tags/生成器模式/index.html","ba19c763cb340fc6898c7f1567297fe4"],["/tags/用户体验/index.html","ad33766d1b081926c61a506ad3aab28f"],["/tags/用户协议与隐私政策/index.html","bfb4269ffec9258d04dd1c04ded599f5"],["/tags/类型与操作/index.html","1ac5451b966b26ba7ea276e8a6fd55a4"],["/tags/组件化/index.html","a7804f70324725534c9d1d799fc46aa0"],["/tags/自动化布局/index.html","bfccf4c65317b408f98e814471d85b79"],["/tags/自定义UIView/index.html","9b18c1f703a973304f3885e2559599c2"],["/tags/自定义转场/index.html","601b3c3c9b0e481ecc7a0c24bc4d99b6"],["/tags/自适应布局/index.html","0c339d8538d1ca34fd9e9efe56d6cdfb"],["/tags/表达式、变量和常量/index.html","9ae1d1f7d0c86918d4cda1336e1d180f"],["/tags/设计模式/index.html","8e4382c06bf1b1aa9b8bba0e06204ce4"],["/tags/设计模式/page/2/index.html","a609e36239fd9ec5dbed9e18d42acd94"],["/tags/设计模式/page/3/index.html","f9b87e35d5859cce4f451ae0c8518963"],["/tags/访问控制和代码组织/index.html","53647cfc136b7554ed79070c80fd79fb"],["/tags/运算符，下标和键路径/index.html","1f026a54c09ece963be4167f63ba8f7e"],["/tags/迭代器设计模式/index.html","7b86cf2b9db7023429f28359c856c514"],["/tags/适配器设计模式/index.html","ca31cd72648f9427d4a4f1536062d8b6"],["/tags/逆向/index.html","12d60955f0d719ef5990a5584c3ecd15"],["/tags/错误处理/index.html","92be0720ae66ad58f2692d11251ea271"],["/tags/静态工厂方法/index.html","f51a58f78f1ee38bd81a86c152905752"],["/tags/面向协议编程-OOP/index.html","fa3b20ef5b427eb48923aac6a00475df"],["/tags/面试/index.html","7aee763695c2c8d7deed8ed52ba88ae5"],["/tags/高级主题/index.html","86bca03e0a4598f9181c698233e5e813"],["/tags/高级协议和泛型/index.html","a9f1d2d097dc32ceeca7f215d805b106"],["/tags/高级控制流/index.html","5c00bde74607faa9adafa44c225cd60d"],["/xcode 常用的快捷键/index.html","45a59c47236e6ca39a1c1cd9397d4995"],["/为iOS应用构建输入表单/index.html","8e5bdd6ec23561bf67152d495c011ba3"],["/产品开发的幕后花絮/index.html","7af1f367acaecf1db9fab7692266d9ae"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9ba2b5e4c95302015cbb3820c84aeb36"],["/冒烟测试与回归测试/index.html","3403c16e1719b5677168a69c72874458"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d759dbc19a02259a731b2d948ebebd85"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","cd346c4741bd00e4f74815558b676216"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","db45abb36fabb08b4a494229e7e8e6ea"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7784ce2f695abace7c64149c845dd393"],["/在Swift中创建自定义集合/index.html","f2231da909655b9e2435fae0ce388034"],["/在Swift中处理非可选选项/index.html","e6aac047b22a7e9501157e382dd8a825"],["/在Swift中生成随机数/index.html","e5dffacee2285e5d6cc386c94cea3dfc"],["/在Swift中重构单例模式用法/index.html","ec36c75a940fee30a412cee2b4d5dcfe"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d26b419792ab60ad52827b3e6b54b277"],["/如何为VIPER编写服务？/index.html","c29b432f43343e98e5dbfa637a582441"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ae1deeaeaaa5e3d63f1f78ab106040a0"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b27c75b9dbc09ea711a2059d8742ef1e"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","fc110759ac9244cfbb9f3ce0a7f52ae4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","875defe86d425281a3f2209e1db6d6d5"],["/小程序: [CSS] 布局小技巧/index.html","a76d79a6cac9f6ae9f62b1435bfeab0a"],["/掌握VIPER架构/index.html","0d2057aab897733731a6b40c6bdf5fb4"],["/揭秘 WordPress Hook 系统/index.html","311ec6a36390de015b76fdd68ddb92bd"],["/比较工厂设计模式/index.html","7db6408fa94e870c20e326682148ca2c"],["/深入了解Swift中的Grand Central Dispatch/index.html","4bed9ea3d542dbbe35242fb3e641b249"],["/深入研究Swift框架/index.html","3c0e1edeb2557d1bdf5166a8a786de06"],["/组件化插件化与模块化/index.html","6d659232fc65a5a87ed0c25d9057e8cc"],["/组件设计与SDK开发基本规范/index.html","d323d672078e88331b4704211fbddcdb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","771c750916effe813f90005e0cda07ae"],["/选择Swift而不是Objective-C的5个理由/index.html","b47fe969c8d2c2d8964e0af8c16d51b0"]];
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
