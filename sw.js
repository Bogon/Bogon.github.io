/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","b855b6123b346ea36ac91746fe0d002f"],["/2020年iOS面试题总结(三)/index.html","15f0e4ddee0a0e57d9a37fe6db1e7349"],["/2020年iOS面试题总结(二)/index.html","9c2f75196a05a3cb2176f567913387d1"],["/Advanced Swift系列(一): Swift 简介/index.html","1a6593c0bf5fe1afb7ec75482cbbf46c"],["/Advanced Swift系列(七): Strings/index.html","9c69b7d9b31509daca13b90ffdca9424"],["/Advanced Swift系列(三):  Optionals/index.html","57e2561810dd16b19bc4aa29fac7c08d"],["/Advanced Swift系列(九): Protocols/index.html","23122d9312f97e0cd3b4f15674a9068a"],["/Advanced Swift系列(二): Build-in Collections/index.html","30377231373e7afe3d376b48ef1ed6ec"],["/Advanced Swift系列(五): Structs and Classes/index.html","4bfd83e1c24424723ee1dbb982467900"],["/Advanced Swift系列(八): Generics/index.html","660cbdeb7204ada2e745d1b725a59c98"],["/Advanced Swift系列(六):  Enums/index.html","a534e6e79863069aab2d72d89284dd5e"],["/Advanced Swift系列(十): Collection Protocols/index.html","deea0c033bce8445db1613fbf7108a30"],["/Advanced Swift系列(十一): Error Handling/index.html","4c541e20132ecadfd2cbad5f3f9de8cc"],["/Advanced Swift系列(十三): Interoperability/index.html","caaab9114ec0d04ea5b6ce2d40e9fba5"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","500aa0f038c141cd17a62d71065b9f0e"],["/Advanced Swift系列(四):  Functions/index.html","809e50afa04f283d76968a5b0ee8d1b8"],["/App Architecture系列(一):  简介/index.html","e770b6e3413363bc31ce08883f45f487"],["/CocoaPods 设定版本说明/index.html","d7fb27509135045261ba4f082a714418"],["/Docker 启动 MySQL 指北/index.html","b571d06d27f07ab59c11c34b404887d8"],["/Functional Swift 初探/index.html","5d8418d71ccf8bdc83bae26b4853d371"],["/Git 使用小技巧/index.html","8d09508bbc1350570be1036cf6336a0f"],["/Go Protobuf 初探/index.html","b15d4b31cb8c7b82455623f94b4fd7c9"],["/Go mysql Tips/index.html","f4e22d86c71babefdf3ce746cc1d1abe"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","00bc1ae23365a5cdc025352c55a0e6bf"],["/Go 入门篇：2、Go 实效编程/index.html","a10cddd8a8d61f9758b81e357cab16c8"],["/Go 入门篇：3、Go 重要概念/index.html","c169298dbec7b8f2a3d2f66580a3cb0f"],["/Go 基本语法初探(一)/index.html","df4e8c4808525a94877d17150b95df74"],["/Linux VIM 命令及操作小结/index.html","ce9ae9a3f83aff7d75587957ee8a6a05"],["/MySQL Tips/index.html","6a2d2f1c36137c00b5efbc28e0584d99"],["/MySQL 基本操作/index.html","7b9e423fa2010439aa3aec5abe47f872"],["/MySQL-列类型和数据完整性/index.html","5ee4c933654c6b3abb5bb18c9b56da27"],["/MySQL-数据库设计和查询语句/index.html","116462126326b71bec495bef7ce10862"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","d25ccfbcac0049bcc12e55ebae5e6abc"],["/NSCODER和SWIFT初始化/index.html","de283c6654c8b4ffa12480627431010a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","3fbbd85ea19690bb5308b1db6e083c09"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","6ed92de5ffc5d6c6405a8e76bf160f1c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","493497d83aa3fbfe4f8ffcfb25c8e8d0"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","704879acd899845aada67748cd23a31e"],["/Sqlite 使用Tips/index.html","d7e087b98a5814fc6083725bbe69d0d8"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","4ba29ef73e1168c0d6d85e8da8a0582e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","63b5442a3fad6cdc1ffefa120aaac859"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","39c3b98dc5f17d64aea96a530d129493"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","af2a5ce1136fbf968c6ccbdc7e7c3f53"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","101ac784cf20457272e3686641c5f089"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","76606ad3b8b7ba2f0fe9a5c9868b841d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","4e7f9e756dd50d65e01b7dbf1ef0a52b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c6fdb9cb4fcc7534633f23eb817aae04"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","5d10674149964b8eae37798655f42765"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","0478eac46373d5c944d944687d328f9e"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","a69b36c389ee2c66942be967742e77fd"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","05ab5ef763c06ccc796e03d3fb2a77ec"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","510694014250202cabf1531e1f732118"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","59af3d76e1270441bb192ab49147309c"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","8e8a2371b92a4e4ce146f0e7c8476b50"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","850e498049a55274d3fe62778919cd77"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","15e833812e57cc5869f11e70219ef0f9"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","2623e7098912159853e503ee85fbf39f"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","43fd6645f4846a08d17d51ae02471130"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","9b592868e00e5daf279c3e16a407c351"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","826b22ffa04cfe8453eb9941ad2a50a0"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2512bb2465dad6984989030e080d7ab9"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c468890a7e37646a834b5aea38e420e4"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","90f36c173e184072e5e568f22133b96e"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e811f24e774f848d63017dec57b1c39e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","615e45542fba35d53f71d08406a080c2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","6e4dc6519ee9c8de5e249672eb3ed68f"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","37087eff7ec005e102d1619c5a60c69e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","5dba3ff940ace8fe3e17b23b697b6889"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","0c486dfb429b345cd96b0f9156df8394"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a3d88239f86ba5839d836f6a6eeea44c"],["/Swift CompactMap vs flatMap：差异说明/index.html","6b989c0f1ed3bdb28679f14b6535cec4"],["/Swift Grand Central Dispatch 深入实践/index.html","4a83978ab16e40a449f44bd5213a01fe"],["/Swift Lazy属性初始化/index.html","b770dbcd03c2c3ba479c0ea060322793"],["/Swift Promises 初体验/index.html","ebfb768bebe6b03362bff93098b0e521"],["/Swift Promises 探究/index.html","9b4e568de7028d65a1ebd719b340e270"],["/Swift UICollectionView使用指南/index.html","aaa041617a40405c20b0455bd4901234"],["/Swift URLSession && Combine framework/index.html","16cab3d8fe0e7c23a4b5513f7da9cc0c"],["/Swift tips/index.html","42597688fe8645a27e01262c4ee6fc9a"],["/Swift 三方库：GRDB 使用指北/index.html","d3a5e38eb328f33aee1106e55b2b02e0"],["/Swift 唯一识别的视图/index.html","221e3c471d2443b6637accbcab9fab98"],["/Swift 如何学习现代UIKit？/index.html","edb3c8756a877c919ccb265bab0b3864"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e2e461e8745558498f6f5f831a889347"],["/Swift 用 compactMap 替换 flatMap/index.html","7ad459a9ed4b6553c10882de9228109a"],["/Swift 选择和播放视频/index.html","fa02db4839c5f791cdc3e239a90189ec"],["/SwiftUI 系列(一)：1、 简介/index.html","9007ebb1361c891faae836490356fcef"],["/Swift中UIColor最佳实践/index.html","d50137c95d65dc933c49c7847413db6f"],["/Swift中快速简单的工厂设计模式/index.html","33c3c5ab8ddbfaaab351969658519619"],["/Swift中构造函数与静态工厂方法的比较/index.html","8104d305fda4b21ee25a29ad3193a960"],["/Swift中的UITableView教程/index.html","fd9d0e633ad548b5a34af388ca9b5151"],["/Swift中的懒加载模式/index.html","9efca2c4dd8ea12205929f94542326a8"],["/Swift中的模块和挂钩/index.html","10879e5827afe3603f5fd3e1744ba9af"],["/Swift使用布局锚点添加约束/index.html","b243c3b09206512c4579d99e900f9899"],["/Swift依赖注入设计模式/index.html","a288bd4e760960b26d6cb9fd09c9ac87"],["/Swift关于Dependency Injection (DI)/index.html","c04fe3a9648bdb331d1f0b05fab7022a"],["/Swift初始化模式/index.html","13e0f6469d607823813b5fc864d81eab"],["/Swift单例模式/index.html","e9f58e48773ed83ff362d5d70fbd1334"],["/Swift原型设计模式/index.html","ca1a10277e062a38ee093c993c77defb"],["/Swift命令设计模式/index.html","aa90c091bc9d130de720aab1ae418738"],["/Swift外观设计模式/index.html","ac7ae68072b3af40d9db98845d87de2a"],["/Swift委托设计模式/index.html","95775bf310e0b5dc7927a7b057307773"],["/Swift对象池设计模式/index.html","c0ae87ec2e893faa719f7b73afcac060"],["/Swift工厂方法设计模式/index.html","7a95b83c5bb546542eed3f7e5c12117e"],["/Swift带闭包的懒惰初始化/index.html","393e9e5e2342446775a38541fdf9115c"],["/Swift抽象工厂设计模式/index.html","ef29833f45060a6a16e93207327bda2b"],["/Swift掌握iOS自动布局锚点/index.html","ac80f8ffb08a5486673b68594934b1ef"],["/Swift支持旋转的自适应单元格/index.html","e3c57eddfae529ef4f66050b0d022ef3"],["/Swift枚举值/index.html","583df322db9acaafbaec73b88f2ba56a"],["/Swift生成器模式/index.html","607a50dbbce7c75969aba8fce07bcf87"],["/Swift结合Xib文件自定义UIView/index.html","ec1655e70f9f0ba90a67fb09ba32cf6a"],["/Swift编写的20个iOS库(一)/index.html","14481b6a7ea8c2f0219e3270666cedd8"],["/Swift迭代器设计模式/index.html","25add5ebc497064a4bf7a158e3afd776"],["/Swift适配器设计模式/index.html","5ff5acc6614d3fa98accda62b4aedfc3"],["/Swift静态工厂设计模式/index.html","0c5cb045a55c4521d557763b5520783b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9cb4008256f7e7ee85f6dea5572f8f09"],["/UICollectionView data source and delegates/index.html","6fee5146b979bc98a70d895b0444a87b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","a69eff7c671cee7cb8544014cf83163e"],["/UIKit初始化模式/index.html","175ab6e6b960e7792dd19b858189d305"],["/Ubuntu18.04替换国内源/index.html","683ae39cee52628390f2e5d7f6ab9522"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f65a7dbb4ee614387449f6a057ac0a77"],["/Vapor系列 (一) :  Vapor 初探/index.html","074ab62e702801eca4dada19613de421"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","6ded6e948afb820dee3a3b8894d18fae"],["/Vapor系列 (二) :  Hello Vapor！/index.html","8da10127b6e6bd983929ab8d00a9b4b0"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a56cfe4c69ad59e088f9b11b31dde839"],["/Vapor系列 (四) :  创建博客数据库/index.html","33d17539cbf0e6e49786718ac3da84c1"],["/Vapor系列(六): 徒手撸一个CMS/index.html","bb9a66fc7537e5a7671315e15a6d80a1"],["/WKWebView与Native交互注意事项/index.html","4051e21fd4ae636d1629d791ea94a94d"],["/Xcode扩展/index.html","8390fb33f82ae9578c84733417857029"],["/about/index.html","012476c38e2143413f8ca45ce5055293"],["/appleOS的Networking示例/index.html","daa421a48518979c8979e5a21feda72f"],["/archives/2020/03/index.html","b90c98ac477acdce4e4d045ffd2d70c6"],["/archives/2020/04/index.html","65d6d57a95c9aeca6e264ba49ae99774"],["/archives/2020/04/page/2/index.html","2244c956d96f8518c118d5d027a8bd1f"],["/archives/2020/04/page/3/index.html","0f5fc6e2a016ee87ecd7d0abe9b22b45"],["/archives/2020/04/page/4/index.html","1f695b1dec1e6f105e568b417178f060"],["/archives/2020/04/page/5/index.html","1b57f3d13a39d9ef3b4d6a34d4aeb09e"],["/archives/2020/04/page/6/index.html","3218d3e377488319bb2225b3cba9aaf3"],["/archives/2020/04/page/7/index.html","e1ef978ccea6a1a60c495b87740529a2"],["/archives/2020/04/page/8/index.html","28f5462d713c9ff39b78db6db3d28707"],["/archives/2020/05/index.html","90710ba18e0a51af9227a869ece79dcf"],["/archives/2020/05/page/2/index.html","703fce8c4509c04c147d4faaed2f8e53"],["/archives/2020/05/page/3/index.html","aa391ccaf90a3c756e72dd16cade8edb"],["/archives/2020/05/page/4/index.html","97c2bdef4fc8a07d31d5646695f7705a"],["/archives/2020/05/page/5/index.html","87bc2835818f086c0abadc22a75d3aae"],["/archives/2020/06/index.html","369b65fe6558d9f91242f28af77c7e16"],["/archives/2020/06/page/2/index.html","3fb24116f96971980e88cd5891671671"],["/archives/2020/08/index.html","00369e6308c8601abe32b6ee8082d2d5"],["/archives/2020/09/index.html","10482d7179795e0aecbc4a2335a08871"],["/archives/2020/10/index.html","60558638ddf8636e22bc59c1babf1228"],["/archives/2020/11/index.html","f523d87e86940dad974340532710404b"],["/archives/2020/12/index.html","1c246e7f9d7038dd9e6613235adf24d6"],["/archives/2020/index.html","72c2bd99974025cc9290c83da43cb19a"],["/archives/2020/page/10/index.html","8e1ffa10b47e8ead86acf505f24dc00c"],["/archives/2020/page/11/index.html","e9edbaf958e60ec743453f80e0ad213f"],["/archives/2020/page/12/index.html","6e1c63c54ef753419ba14455880e368b"],["/archives/2020/page/13/index.html","a60336e17396bf5b6184222b6fb66110"],["/archives/2020/page/14/index.html","ac7a7504491165c0944c378fdefd970f"],["/archives/2020/page/15/index.html","89d4a1df4873d9e90c96f6fac47c7ebc"],["/archives/2020/page/2/index.html","3f3815429f57f21c6c04993d8e0dfb1d"],["/archives/2020/page/3/index.html","520ed6c05a60a41c3ae27a0d36e42e13"],["/archives/2020/page/4/index.html","8b56b90a6439f3bfc48fdce8e7d9ad24"],["/archives/2020/page/5/index.html","96912545ad91a2ab84b5e15aa70224ff"],["/archives/2020/page/6/index.html","a834b08e6336a9e99a95021d8139b9ac"],["/archives/2020/page/7/index.html","2601f11aa9ebbe3e2710d52026e51d36"],["/archives/2020/page/8/index.html","070ec3882692f71d72936101301f7061"],["/archives/2020/page/9/index.html","e06ae11a001d0f4c74b280a01ec8370f"],["/archives/2021/03/index.html","1c9b456b46aca0315882abfcbc4ddc36"],["/archives/2021/04/index.html","81ca9a99e3b166290c6f8496f39a2385"],["/archives/2021/05/index.html","6653a325c6f7cd115433fff5611e65fd"],["/archives/2021/06/index.html","77ed8c91afe6f10075bef11992ba700b"],["/archives/2021/07/index.html","13c2cccd0c2ce04b751a035051e40215"],["/archives/2021/08/index.html","bb8544d5af70ac724a411675221e0181"],["/archives/2021/09/index.html","11714aeb0d0f0127f0c76ddfe86cead9"],["/archives/2021/11/index.html","371c05920aeda2746092695102d71de9"],["/archives/2021/12/index.html","473297270def223df331d3f9710b2ea0"],["/archives/2021/index.html","c15462c5ea3f4f61f107a20ec2952ff8"],["/archives/2021/page/2/index.html","c1dc06361c3d3437f9090aa47f276676"],["/archives/2021/page/3/index.html","2780befd61f699ec7d86baa1b5c8c872"],["/archives/2022/03/index.html","5599f772f0f511bf08ec5954496b2c73"],["/archives/2022/04/index.html","1fb90481ed2efbc7ab569398dfce96cf"],["/archives/2022/05/index.html","a87d74ff47e96b1bd528f1078a05e6ff"],["/archives/2022/06/index.html","2478d0dc531bd9994fac38499c1860e4"],["/archives/2022/07/index.html","6dbf1ecf627e05c6c662667b780ae593"],["/archives/2022/index.html","01534c07115f06ae454f9b74312474e7"],["/archives/index.html","d8fe557c0333f0b593115c00da3adb5c"],["/archives/page/10/index.html","bf6d7c9b62cc018f46a09388a953d57e"],["/archives/page/11/index.html","d234e1538425c034ad2cd714f53b963b"],["/archives/page/12/index.html","6d64c860c3d173f5c65a54a4ca80dc26"],["/archives/page/13/index.html","5bd772b6a0eda61f2ccb50da63f1b199"],["/archives/page/14/index.html","5ebfcc99df835c8598ae463c7e27e3e1"],["/archives/page/15/index.html","1ccb4f2e5517bf68474e08481b1411e3"],["/archives/page/16/index.html","ef742911e4e355f975a253727061520d"],["/archives/page/17/index.html","caa58ee8319ada8d2ff5dd00aa71da94"],["/archives/page/18/index.html","d8c87b5fd72417c20ed5e1ffc416a0cb"],["/archives/page/2/index.html","057f4133338f1ea561547f4f5a6b7a63"],["/archives/page/3/index.html","a9d23972536c3fbc658293260958c6ec"],["/archives/page/4/index.html","042cfa026cee187d20a57e7fa9f10b8e"],["/archives/page/5/index.html","4e5a18dd28103668d6ac09a17c02fcca"],["/archives/page/6/index.html","38e9c5947853031d1339009f9797317b"],["/archives/page/7/index.html","6aa0781bb6c5b6ed5f2d4db9efd0b782"],["/archives/page/8/index.html","3c1bd767ce52c9ff5507e8d9a7a65f6e"],["/archives/page/9/index.html","47d8fc0f3ae43527637d38ab758c3021"],["/bugly 上传dYSM文件小记/index.html","1e547d1b94732c8cb8dfd1240477378a"],["/categories/Advanced-Swift/index.html","99a0f2f51c6451c0086c01b3b611719d"],["/categories/Advanced-Swift/page/2/index.html","0f9a7666f8f6fc157caf30a6c04b1b78"],["/categories/App-Architecture/index.html","1d165371d1287b59bb94d13e218b40b7"],["/categories/Array/index.html","d2263584e563113d3e17fce50fa84643"],["/categories/CocoaPods/index.html","f26af3bf5a25059ce42854f5b6fa5a14"],["/categories/Codable-protocol/index.html","b6959358ae7cda4f7a22fe1ab65c1b77"],["/categories/Combine-framework/index.html","98508bfcba84f6cb9146a30cdac70ec8"],["/categories/Combine/index.html","2022deed05fc7d8bc5adf07337687e93"],["/categories/Docker/go/MySQL/index.html","de5c0b445bd426bcb5c4711299c43146"],["/categories/Docker/go/index.html","163701fa0839e3eebff957597ddfbf23"],["/categories/Docker/index.html","d215edcb903c5045cea6077d17eefc73"],["/categories/GRDB/index.html","04efb906ab1473d8e7837cfac89afc93"],["/categories/Go-入门篇/index.html","d584323a2cea3b68257a68268adaa6ad"],["/categories/Grand-Central-Dispatch/index.html","605558f1896aaae2a9e4652cebeba962"],["/categories/Homebrew/index.html","063c1c16ebf48ee33d0502087c95e39b"],["/categories/Linux/index.html","43d0cdae9fb3bae999f2cfeea4fe51e4"],["/categories/MySQL/index.html","78a6c8796886f072d235613455308d1d"],["/categories/Promises/index.html","74ab1af0ce579f558b83dc0a0bfce75d"],["/categories/Protobuf/index.html","5640b43e0e7cc7635dfbace673de95dd"],["/categories/Result-Type/index.html","10e0229033ec1b15dc16bccb27e07396"],["/categories/RxSwift/index.html","c6604f6ee2ebbf818bc85444337740bf"],["/categories/Server/index.html","0e3b6ba2dc2c491dc11ea109ad164e93"],["/categories/Sqlite/index.html","3bc6067655443c84c937644e70b35641"],["/categories/Swift-Apprentice/index.html","f88216459645557ec73bb3f327a1b9e1"],["/categories/Swift-Apprentice/page/2/index.html","3340c3e659f7747c949b62ade09e54fe"],["/categories/Swift-Apprentice/page/3/index.html","167994ab1ea4f36ff605d7b1337d1faa"],["/categories/Swift-源码阅读/index.html","6ac25e71958ef7fd71c660f4fdcaf0a2"],["/categories/Swift/index.html","78c0506944ab37f87c21b6c01513e0a8"],["/categories/Swift/page/10/index.html","7e5572e866ee1e0bbba46fb8884250dd"],["/categories/Swift/page/11/index.html","7e1cda2f71763d52d261fd5827bed519"],["/categories/Swift/page/12/index.html","930b0aa0bb96585d7cda6b0f9aa9a20e"],["/categories/Swift/page/13/index.html","c85567f6f8bac0e31b1eb1e59a646c90"],["/categories/Swift/page/14/index.html","d989c8a3b2906a24e005367e4e456c29"],["/categories/Swift/page/2/index.html","b370da6c1344711d4142b0d9fd058856"],["/categories/Swift/page/3/index.html","c58874f49f4ea85f1fe1e2f704710459"],["/categories/Swift/page/4/index.html","8489c9acb31799563866ab3e4256a46c"],["/categories/Swift/page/5/index.html","a0a012edd37835a4d2425d362202c8ff"],["/categories/Swift/page/6/index.html","baf18b6c1038b2cce65e368fd8f2a411"],["/categories/Swift/page/7/index.html","df02303536ac030ea6966e3b972321b9"],["/categories/Swift/page/8/index.html","08dd29f5ee3f5a49cf4b29a6ffe391fb"],["/categories/Swift/page/9/index.html","a7a2b834f58e0906b62afc3cb96da9ef"],["/categories/Swift5-2/index.html","0268e6ab3a653ca77a73d9810dc634bb"],["/categories/SwiftLint/index.html","366ab3892f98248bb749867d2a07a8f9"],["/categories/SwiftUI/index.html","4590778c2c1ff3c728cb02e55bafd57b"],["/categories/UICollectionView/index.html","93524f96bedab2c0e31fd12ebfcec9c4"],["/categories/UIImagePickerController/index.html","f46f173c1722c5c87c7e0fc086bca5b7"],["/categories/UIKit/index.html","958789bd770c93b31c0396c177e8041b"],["/categories/UIKit/page/2/index.html","2f743651703648f2d8b0993d442e56f9"],["/categories/UIKit/page/3/index.html","8e0343fc2dcd16c10f032bca0d50538a"],["/categories/UIKit/page/4/index.html","4e3c95f2eef5564d9906dedfc54bec17"],["/categories/UIKit/page/5/index.html","e89e1776fe9639c6157f36436a6ecf1a"],["/categories/UITableView/index.html","bf94a202be5566d86346a305738e7484"],["/categories/Ubuntu18-04/index.html","641608487d6409e1f12be4aa9e6834f9"],["/categories/Ubuntu软件源/index.html","7888a48dec96323db3cde694b50cdbc9"],["/categories/Uniquely-identifying-views/index.html","5a845b2c710712e2cb7041c23f0ff4e1"],["/categories/VIPER/index.html","9ab271c40e860ebddb32a07dcbe2219d"],["/categories/Vapor-4-0/index.html","29e0a9fb03a12b8523c916aa56372036"],["/categories/Vapor4-0/index.html","427515832b729bfe7079d5df1f27d5e7"],["/categories/Vim/index.html","d7d06c5f4c544e8979c1541b997214db"],["/categories/WKWebView/index.html","29bd699d5c372d517bb73c67d2f674b2"],["/categories/Xcode/index.html","4b8243ea7bee1cea28cf39186627dd66"],["/categories/appleOS-Networking/index.html","13b6b53561545191b5d7a8daf9bb9ffc"],["/categories/bugly/index.html","d660f21b5b9282e7733241d17b186b8f"],["/categories/enum/index.html","9861592b2611fd66fcbb78bbd7e204c4"],["/categories/git/index.html","8c0db00eeaa5a7f77c78979429c54056"],["/categories/go/MySQL/index.html","c1c240ac6c79534562fb6a6c9160dcdc"],["/categories/go/index.html","9805e9921cbf6ba9fcbf2dc9b4a9e431"],["/categories/go/interface/index.html","15b73e6d3896154f952725ba981a9514"],["/categories/hexo/index.html","200155899c6dc304b6b93e5b6397e388"],["/categories/iCloud/index.html","59eeb27039485c1873dd9ef4d0b55639"],["/categories/iOS/index.html","c879500b5ad62961a449710136c995b4"],["/categories/iOS/page/10/index.html","46b0c0ff71636850f2b7895fdb2ef15c"],["/categories/iOS/page/11/index.html","c800710806e213157065c817b89b80aa"],["/categories/iOS/page/12/index.html","84f2d939eff3b01e7ee8856b38808828"],["/categories/iOS/page/13/index.html","32b6cb07ca3828da235a603ed3794809"],["/categories/iOS/page/14/index.html","3d179458cfc44fc276e0b85ce2621e38"],["/categories/iOS/page/2/index.html","6398844a53a265558e6be1e157f001b9"],["/categories/iOS/page/3/index.html","980904b31580e41cd2a5278842a38a43"],["/categories/iOS/page/4/index.html","4334a8966439ebdc466a654ac88fbe97"],["/categories/iOS/page/5/index.html","67f39cd8bfe6d05f2b430c8fbfed39ea"],["/categories/iOS/page/6/index.html","1703e8242f3f07511a1ca5a5642f0d97"],["/categories/iOS/page/7/index.html","33ab0dd5aaede3ee77cbcaedb11eb422"],["/categories/iOS/page/8/index.html","6a6dd3d94ee0c3de30c22e6426c0c782"],["/categories/iOS/page/9/index.html","b52d461c4d7dc0dc27076b5b4056ae2d"],["/categories/iOS面试题/index.html","f0caf112884b63368c4ee74f9cb093e4"],["/categories/index.html","96e94f3483f1aba8ab3ee5770c3f5e57"],["/categories/random/index.html","b8fd8631944139b9f0c155bb75f5597a"],["/categories/三方类库/index.html","baedefed042a15dc5bb5a2f4fd74c5d1"],["/categories/函数式编程/index.html","aba51cf32a431d6f0362e7289c4d40bb"],["/categories/子类化样式/index.html","b83650655be4b2fd6f2adad3831989ef"],["/categories/开发技巧/index.html","1f0494aa479288511778de096d5eb43b"],["/categories/开发记录/index.html","41409de32b92be93b07d2d0eaa9bee45"],["/categories/数据库/index.html","8bd7ba377c0a75d492172782f55086bb"],["/categories/架构设计/index.html","53aaf8d38e55e148884f465a82be8ee0"],["/categories/测试/index.html","2930012468a21a82101490b14426490d"],["/categories/用户体验/index.html","389326e63ee4c9c8b3adc3193e323271"],["/categories/用户协议与隐私政策/index.html","a3cac835fae48fcaa93cb05171573cb1"],["/categories/组件化/SDK/index.html","6f8c1458fe7a4e9b59b40d72cb2b433d"],["/categories/组件化/index.html","4dfd2994c80f13d852ecea6e4df95393"],["/categories/组件化/模块化/index.html","0625ae620c451cce73788eaa9706dbea"],["/categories/设计模式/index.html","c9a4c3b9a9707685ae3f546d7d06287b"],["/categories/设计模式/page/2/index.html","aabfc886ae5a9235a6c5f43d2b7f2f2b"],["/categories/设计模式/page/3/index.html","a57686ad627665f596710d17b479a2fb"],["/categories/逆向/index.html","a5706cde3833f276980e137c4416b628"],["/css/main.css","2a1887f3f7a2832f7a878be76b2c9eae"],["/go moudle 导入本地包/index.html","0d7cee83bc455f48842f3c2234fb07b1"],["/go 库专题(一)：gin/index.html","be182943b34e35071319aecf7aff0e5f"],["/go 每日一问/index.html","0a7561b4d093aa0dca8290b9697261c3"],["/hexo部署失败/index.html","347f42c7c9f972aa5324f8411ff3c674"],["/iOS 15 适配/index.html","5a14ad1a8f78ce0d5d74966f3adeb856"],["/iOS VIPER架构深入实践/index.html","d37d4d72b7e6c72e998e8a6c38840a8b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","30ca84d30d58391ec0c3e87f5b2bb4c3"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","9b318faaba323037517de75692a2066c"],["/iOS 自定义视图，输入表单和错误提示/index.html","da1eae1787a0b78741c50fe2afeebee0"],["/iOS如何使用iCloud文档？/index.html","716076936973f4b0a7966f6ea7db5845"],["/iOS子类化样式/index.html","9ea87faf474edd459b0f7eb3d70daf18"],["/iOS开发记录<一>/index.html","137cd23f99df02c768e3fd87e73694c3"],["/iOS自动化布局编程/index.html","369f9a90b7ceeb5dae829e62c75a0709"],["/iOS自定义转场(By Swift)/index.html","ec67142dca050771e9c82cd37118d447"],["/iOS项目架构：使用VIPER/index.html","347ec6d1cc5defb51eb178e8e61614a4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","fd67dea980dd69a2e4f00286ac653a82"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","9ad46e7ce82d6dc58c46f327cf48cb7d"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","7a2a21dff3b797f481670d9a111c9b1e"],["/page/10/index.html","867ca6fba0e5b6c43f07baf671940eca"],["/page/11/index.html","82093b1c62ae8de4deb7e09e668d71a1"],["/page/12/index.html","d3dbdd2498db1c0c9efd6a98000cbf12"],["/page/13/index.html","f2dcfd6819da33c3a0f4a38a0bb3c277"],["/page/14/index.html","d0e2c410101444ad886593515a58bfe3"],["/page/15/index.html","ef12b1a6fa8602758e474ff76d1bdbfa"],["/page/16/index.html","87cb280364323bea70054d0990ab8ab0"],["/page/17/index.html","817a7022546df905d91d2bc22a78fe8e"],["/page/18/index.html","78b739d54545b0e44c4eb4bec92af912"],["/page/2/index.html","845fe9807cdb7cb11622e6d82bf2504f"],["/page/3/index.html","ab35e969f0c1e3cd50d2218ac6d0ceb1"],["/page/4/index.html","67a9b5cd26ee6fa5876b6de33768794b"],["/page/5/index.html","0aaae5edfc58484919108bb87f7eecae"],["/page/6/index.html","b05dcf22a6b4e6acb50e907ccb4e4f14"],["/page/7/index.html","238f1bfa76fe6faab92cba3d558fa27a"],["/page/8/index.html","105fa4520e3abb9349d957d2ec565f5a"],["/page/9/index.html","3c13221af1b93f47a7d2293144cf22fe"],["/schedule/index.html","749f2051221eab2e7e63987312d91491"],["/storyAppPrivacy/index.html","d222130f393c089d60a53730f55aa4ac"],["/sw-register.js","604b5e182c070626109f37476fd1199f"],["/swift 专题：函数/index.html","7fe4bfa2c0ed0a91049f1165fde07c9c"],["/swift 专题：闭包/index.html","e0b691236aae64d2687684ad84ce69aa"],["/tags/Advanced-Classes/index.html","2ba8c40c29703c374fb74c23ca9647b5"],["/tags/Advanced-Swift/index.html","735f4bf1b698e8c40d7eb1178cdaa32e"],["/tags/Advanced-Swift/page/2/index.html","b6ff5e08c30e7304131053f7ba20c54f"],["/tags/App-Architecture/index.html","1a92b3a927cdcbdd5f23db773de94468"],["/tags/Array/index.html","27a3d7d3c6443a1e7f426ec8b546787c"],["/tags/Arrays-Dictionaries-Sets/index.html","a98d4c592452008c82bc26ed42ca8f91"],["/tags/Authentication/index.html","7d5a51b939a0296ba44797a885bc1d31"],["/tags/Build-in-Collections/index.html","e877a31b8fc0b3a3e6b30a9fa0f63435"],["/tags/Building-Your-Own-Types/index.html","aedcda716861773a8dcf17e17a6096fa"],["/tags/CMS/index.html","a81b6a55079872cc97638a251904e22d"],["/tags/Classes/index.html","397d6227efaa23a615e2e04f18149c28"],["/tags/CocoaPods/index.html","fb99541ed933a301143f473b54d9fb16"],["/tags/Codable-protocol/index.html","80b8e95b7f3098cfac5191ce2197d3ea"],["/tags/Collection-Iteration-with-Closures/index.html","0d86eb5edb32456d388f622bc90428fe"],["/tags/Collection-Protocols/index.html","ae6a43f76c7f7ac07b47f9c830d709a4"],["/tags/Collection-Types/index.html","db45f02d24e4a847605ef91a167f819f"],["/tags/Collection/index.html","a1d394ae8ab920b4bfcc82e605e4fd70"],["/tags/Collections/index.html","6b70caa9eab4e62d73b39879a5557f17"],["/tags/Combine-framework/index.html","9892e753de0b8784b56f91f33eb9a503"],["/tags/Combine/index.html","9a497bc2dd60f99db2e93bc337aebe66"],["/tags/Dependency-Injection/index.html","1309cd2b539d1ff35f3671ec2ace8529"],["/tags/Docker/index.html","07e53b656e5c5a771c34043267ffddf1"],["/tags/Encoding-Decoding-Types/index.html","a5c322352cdd0b7c49f48efb7af21f05"],["/tags/Encoding-and-Decoding/index.html","3b852beada6ef599f7c6d22996c18fac"],["/tags/Enumerations/index.html","87c2e91e9e996c858e12980d4fc01d7f"],["/tags/Enums/index.html","35b44fa4395b732f4b3feea5d6f858ec"],["/tags/Error-Handling/index.html","4cb722ccdc7e6e52dd591aa52f09928c"],["/tags/Functions/index.html","dafeb80b77795a9f50919a7e19665798"],["/tags/GRDB/index.html","171faab9659877f7be3fb40d5691dc99"],["/tags/Generics/index.html","79f8e1e14292730fc05db7cb49b281fa"],["/tags/Go/index.html","496a842ac7d55ba13efbc282b2edc6a1"],["/tags/Grand-Central-Dispatch/index.html","e608221550d441314cf5ce32a56fe91a"],["/tags/Hello-Vapor/index.html","01ffa4711d4340cc0229a5d2ce43c489"],["/tags/Homebrew/index.html","3e40a410efa8155dba1e17120903d473"],["/tags/Interoperability/index.html","3b5fb73bd95ce9e12323c5c36f25f82b"],["/tags/Introduction/index.html","02a5dfbfdbb7f6ac6269648ee84e3e98"],["/tags/Leaf/index.html","f0bbb3e98ffe9182327d7e4b49cb3fed"],["/tags/Linux/index.html","8418ba91aee86e0adb99a8bdf5e34bd7"],["/tags/MAC/index.html","6b4204cf6086697d591b46219a2e7fab"],["/tags/Methods/index.html","885976546cb6c432f0da0a9864b1a325"],["/tags/Modules-And-Hooks/index.html","34c2d6f679e740941bd4e35148dadbd8"],["/tags/MySQL/index.html","81cc4b4cfb2c72671e938a8a12d5d116"],["/tags/Optionals/index.html","f6f297b646032e966f8f0179b14c27a8"],["/tags/Promises/index.html","518ad7d57128bc0080d3f3f1c6f5863e"],["/tags/Properties/index.html","fadec43519fdd945d2102d30d3b96c51"],["/tags/Protobuf/index.html","1ae9f7351c979dcbd8c1a2bf5a687d37"],["/tags/Protocols/index.html","89476047e9cfd2468ec60d85862324b7"],["/tags/Result-Type/index.html","b41109b7687e4b3a683eb56c1e75e679"],["/tags/RxSwift/index.html","6d346dbdba498dd9f35248610ff56d09"],["/tags/Server/index.html","044b318344fa4ec867c43e5fb7772b65"],["/tags/Session/index.html","deade96fbf5a6ed851fafb8698007550"],["/tags/Sqlite/index.html","a86c272fc373856ce36523e08ce381c7"],["/tags/Strings/index.html","dbe38295302706ba3e530ba263cadb31"],["/tags/Structs-and-Classes/index.html","844102d28981720c372622399215a058"],["/tags/Structures/index.html","33e930ef0211dc7a6f9266551662f1d5"],["/tags/Swift-5-0/index.html","b3886e551b838b3318a18d0db332980a"],["/tags/Swift-5-0/page/2/index.html","288fc3e66cbb0a4177f8a44de99ec702"],["/tags/Swift-5-0/page/3/index.html","28f750f0ed145720cf57bee3dd885e66"],["/tags/Swift-5-0/page/4/index.html","d1dfa050f8b3f95b44562c9459ec00df"],["/tags/Swift-5-0/page/5/index.html","f0277be467757360b143cc52886b6852"],["/tags/Swift-Apprentice/index.html","57419f0fe4553a4dbeabf788fff917ff"],["/tags/Swift-Apprentice/page/2/index.html","8b12b181e2d1cbc160a20163cc97548e"],["/tags/Swift-Apprentice/page/3/index.html","284e10dda2e0aae731ce734adfdf7c4c"],["/tags/Swift-Package-Manager/index.html","39d2d3bb85c823930acadaba7e645b94"],["/tags/Swift-源码阅读/index.html","4df1a231c6597a79f1e99e08f70d867f"],["/tags/Swift/index.html","8046cc8830080860d0206c5ae9694128"],["/tags/Swift/page/10/index.html","959c0d788c01a07dcca82b99a3467b5c"],["/tags/Swift/page/11/index.html","90b4356a2d43faccfe2577c04ac1b111"],["/tags/Swift/page/12/index.html","a2c6cf2e0ea2482745636379ef851327"],["/tags/Swift/page/13/index.html","da2817fa9e4cefdd2c407286f38d50d6"],["/tags/Swift/page/14/index.html","d578867517e10c4cf45d2c092fcd0efa"],["/tags/Swift/page/2/index.html","6860a4d1dd41ef35edb1f8e48f895fea"],["/tags/Swift/page/3/index.html","ab568d8659831930634c46ad64ddae90"],["/tags/Swift/page/4/index.html","5b0cb508c5bd940591fd884c462a7f15"],["/tags/Swift/page/5/index.html","29e67364b90629d809f0f63741d53046"],["/tags/Swift/page/6/index.html","1989eb580ca2bdce6eea1034c63d28ee"],["/tags/Swift/page/7/index.html","c4274168a764db0c315b76802d62c81d"],["/tags/Swift/page/8/index.html","65e2460a533d77ff0d57acb6b427f3d2"],["/tags/Swift/page/9/index.html","ba08a0c7ca90a12a2afd88fa0dd0d7c0"],["/tags/SwiftLint/index.html","ddc005cd5678ce4fa1de91f8b4d90aef"],["/tags/SwiftUI/index.html","22c741da9bb622ede354a76abba3fd00"],["/tags/UICollectionView/index.html","770fb5c55e7efb1a2322a5b9a936a6bd"],["/tags/UIColor/index.html","643849413c4bac4c1b88c7460880f701"],["/tags/UIImagePickerController/index.html","db775620e349a6c1c83caad79fb3d3a8"],["/tags/UIKit/index.html","8d295de82bc3f9b235dec56766c03d3b"],["/tags/UIKit/page/2/index.html","9a42a37489ad1238e5f22a45c59cbaef"],["/tags/UIKit/page/3/index.html","a5c4049d74f75384a71769994051792d"],["/tags/UIKit/page/4/index.html","a31c45f522d7605559a1bc3211b2ee94"],["/tags/UIKit/page/5/index.html","6528872240e2c3fe4796b96ff5825540"],["/tags/UITableView/index.html","7be8f0099854f101a8c4f970b482ac6e"],["/tags/Ubuntu/index.html","387860952318cc8a0f2a21be736f9a2e"],["/tags/Uniquely-identifying-views/index.html","af256d4ab11606fef68eb5d2643c2835"],["/tags/VIPER/index.html","5449360a3cff6c291387aa51922f81a3"],["/tags/VMware/index.html","a8dbffc1a5c6d7eb3fb995163239d491"],["/tags/Vapor-4-0/index.html","783c0847939bd1577b2315df35406b7c"],["/tags/Vapor-初探/index.html","2e7263f2072a6aee35b0ecd5c1367ce2"],["/tags/Vim/index.html","f4989316be24f294f7c26c2d1c53b368"],["/tags/WKWebView/index.html","3f0e7319c84592f15ef3370349f1af2a"],["/tags/Xcode/index.html","6d2a6302df50c6b7d72c98f3948eb261"],["/tags/appleOS-Networking/index.html","b880e6669a26f2286cba48fa367cfff4"],["/tags/bugly/index.html","cba367f04370fb6eaee6292b304a1199"],["/tags/enum/index.html","ac252312d7e6ff2697fd5bc1f45ff955"],["/tags/gin/index.html","8580eaf955d56a1e19f818b0b5b7454c"],["/tags/git/index.html","088226fb5ea13222e3e8e2f88f7c46c9"],["/tags/hexo/index.html","bcf4df7ded172c369d1b67992ee39bcc"],["/tags/iCloud/index.html","978ab7b4021bd52fe3758ddcd0993c29"],["/tags/iOS/index.html","6a3fdb290d40afa4e58846d5215cec25"],["/tags/iOS/page/10/index.html","6a9122df30b4a9cc60aa32843856562b"],["/tags/iOS/page/11/index.html","755f94082ea7c64b08e7423248b36c3e"],["/tags/iOS/page/12/index.html","79a4482d8b8e1f1ccfd2ef68e011452b"],["/tags/iOS/page/13/index.html","a9590e3448f9a3bff4987bacf8f129ca"],["/tags/iOS/page/14/index.html","24df62d74fbb4e3c7f895a2db72385de"],["/tags/iOS/page/2/index.html","d75882eb3f90a4e0ec4fb3606976a5c5"],["/tags/iOS/page/3/index.html","bef8a9029cf15dd1335e0da953d900e8"],["/tags/iOS/page/4/index.html","a09aef7e1ea15698e1c44b50e16fb8d8"],["/tags/iOS/page/5/index.html","650cf6ba761fbebefa65f2f695328e48"],["/tags/iOS/page/6/index.html","6ab9bf4ec34812cf2d0887d8d81a2d3f"],["/tags/iOS/page/7/index.html","f7c076ef8742a54af0a3340ba96418c0"],["/tags/iOS/page/8/index.html","63a51de7f466ed6e20629450297406d1"],["/tags/iOS/page/9/index.html","52319eb55d9e664673fc3847a8053186"],["/tags/iOS面试题/index.html","32c255db7529bbfc625ce36341f9d82c"],["/tags/index.html","ade1e0ae2f235e267442f7cd053e2030"],["/tags/interface/index.html","54f8965ffc2fc9878be68ed5f4d2d9c3"],["/tags/non-optional/index.html","93091bd9ff4d7626186e82bb2e03b328"],["/tags/package/index.html","6b16b1fd58937d7e41308a9756757a76"],["/tags/random/index.html","f13946d30ef445058603897e8f2209ca"],["/tags/transition/index.html","6ec19cca201745a7952d03d045c6ce1d"],["/tags/三方类库/index.html","40d2afb84f6f6667f1a0656f1eed98b8"],["/tags/依赖注入设计模式/index.html","e2b72a1c44e60d83a89f96021048fcd2"],["/tags/值类型和值语义/index.html","60b194ca5daf63d36537258ec65fda01"],["/tags/内存管理/index.html","6500d48ed582cb7a7d1af26284849b31"],["/tags/冒烟测试与回归测试/index.html","2710ffd1aecef2084a87763fa78689ac"],["/tags/函数式编程/index.html","eb80d602734275c69d9c7c1746f9a5a3"],["/tags/创建博客数据库/index.html","7d061d676e9d8988f7855cc0a4298852"],["/tags/初始化模式/index.html","131f59c94aae7eec5ece2054a408110a"],["/tags/单例模式/index.html","41764324b2e25fc8e894d3a9b9020ff3"],["/tags/原型设计模式/index.html","18c18793cb579cce6c93eb9958ccd842"],["/tags/命令设计模式/index.html","f4b75e81abff5af60066b75d001d9fb1"],["/tags/基本控制流/index.html","e39f3cc61757722505891fbba1cea6c2"],["/tags/基础语法/index.html","cb548138bea1e07a55cdeec0b8130643"],["/tags/外观设计模式/index.html","de458014f03f700d9825b615721ef530"],["/tags/委托设计模式/index.html","794c68f3387fd836d945e8671d373503"],["/tags/子类化样式/index.html","f6822445ec8b902314a3005a0a78ff4a"],["/tags/对象池设计模式/index.html","d73efe74340981cea0179b9250dad2a4"],["/tags/工厂方法设计模式/index.html","93fea61f3bf6fdcd49c1929a86729daf"],["/tags/工厂模式/index.html","ab35b82036b6af296027dcbfdb7fb3ba"],["/tags/工厂设计模式/index.html","2b10cc650204c68b9e4f52dd38cb2d21"],["/tags/开发技巧/index.html","6404a1cbf5648c5e0cb7f5dfc99224df"],["/tags/开发记录/index.html","d5426e3d2186c0b01d8f719128ea9edb"],["/tags/懒加载模式/index.html","6e2dcaea426a46fa6022aa086a2fbba0"],["/tags/抽象工厂设计模式/index.html","5287240a630de461cf507af3fedbefab"],["/tags/数据库/index.html","dfb98cdaea71e46b8a05d551f7bfed9c"],["/tags/构造函数/index.html","9b983c9ef164b9a73a35ade6d2579dac"],["/tags/架构设计/index.html","5215b4392b2e2fafeef1fa328a6f1150"],["/tags/模块化/index.html","6feae256b507b95585ff1eaa898a27f6"],["/tags/模式匹配/index.html","31d470568837f7d47489aab8b9dabe9c"],["/tags/环境搭建与验证/index.html","39a2a99883859691fba6dc32e9da5014"],["/tags/生成器模式/index.html","42126de0e2b6050fe200def2739da411"],["/tags/用户体验/index.html","1f234ff1e9db9958f8ecf418d131f392"],["/tags/用户协议与隐私政策/index.html","a2c48c17d681c21e082051cf548a1c0d"],["/tags/类型与操作/index.html","609042a4992f5a13ab31fe6ca84a2677"],["/tags/组件化/index.html","d54e86c0ab87788b71326fce4f8cacd5"],["/tags/自动化布局/index.html","a1444acc64d30a7d20f4bf1dba20e15a"],["/tags/自定义UIView/index.html","284f8ad60a2b91960164864fcc88a13e"],["/tags/自定义转场/index.html","b917f3d862f0ee859c1b4bae04a6a33c"],["/tags/自适应布局/index.html","b0885907494af2f8953ab0960a7e7d1e"],["/tags/表达式、变量和常量/index.html","cd83b504f6745b310a2e277aff15690a"],["/tags/设计模式/index.html","24f37301400fa2a0b220b6e77b3c3fa0"],["/tags/设计模式/page/2/index.html","b350d279e89c53540972870b967dda4a"],["/tags/设计模式/page/3/index.html","b292db5c6dc527d735fbe365cb989512"],["/tags/访问控制和代码组织/index.html","b2587e2b0661eaa05e81c8e96beac814"],["/tags/运算符，下标和键路径/index.html","c1a6bc5970a8cb4d98898b6351a825ec"],["/tags/迭代器设计模式/index.html","95811ea9e8b1cc08683efc04f318c0b6"],["/tags/适配器设计模式/index.html","1ff4ba0d5b3fd06b5206658c872c9e59"],["/tags/逆向/index.html","ed62623d13a3aec8b0f64be0a14c144a"],["/tags/错误处理/index.html","2a07b63dfdbb1d71aac638ad3cc879d9"],["/tags/静态工厂方法/index.html","4a7b1ad06f2178756af12ac42ca029cb"],["/tags/面向协议编程-OOP/index.html","afe1b2cc06db1f532a52328aeb84a991"],["/tags/高级主题/index.html","a1a991410664c63df26f85cc441d9045"],["/tags/高级协议和泛型/index.html","aa2a1dc544ec32d908e1ddb880820355"],["/tags/高级控制流/index.html","938bd7adafd880e5ea1e88961e7f5bb8"],["/xcode 常用的快捷键/index.html","c55e2c5d44f9c4cbf245726553e62645"],["/为iOS应用构建输入表单/index.html","d44752b56caaf5ca1e9c6ad169d8dd92"],["/产品开发的幕后花絮/index.html","bfb42eb59be18d43fcc31436e53769da"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","69b54389fca454126a83f352cf844bf3"],["/冒烟测试与回归测试/index.html","bf964ade7a95e63e1b0efffceff8ae7e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","61a9bdcdc075a755d022c33c9da8a136"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","de06ed1ec55ec76f89f364881ab7f211"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b272c8e8c41f28b3a07ce5193f87f4d5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","859caec734d4054932745c6cca34d4e9"],["/在Swift中创建自定义集合/index.html","edcbc7b385d0d29477dcf75ec42de5f2"],["/在Swift中处理非可选选项/index.html","aba83aa338d6937ec4273d06b0928ca0"],["/在Swift中生成随机数/index.html","80e96673e75f93f19c6420289b6f66c1"],["/在Swift中重构单例模式用法/index.html","0ab561cd6daadcea2fdcab6103c33fde"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","aa42f095a11721dd35a6b7ed3e04d30b"],["/如何为VIPER编写服务？/index.html","fbe34f623dedbcc142e800b1b1c7bb95"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","4000a9ccc16ca48cc4356977e10df1e2"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f50d84283998956050f9292cae7f268f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","e0b495083b48555330b3d1625a3322bc"],["/如何使用VIPER构建SwiftUI Apps？/index.html","be87181fbce441ba1edd3a860ee4653a"],["/掌握VIPER架构/index.html","6a493518c1b38e6b871f9f898de5fd7f"],["/揭秘 WordPress Hook 系统/index.html","b727baa850d23443b1b6696e7dd1a39f"],["/比较工厂设计模式/index.html","b99dd04ead83edda9536e046b969d98e"],["/深入了解Swift中的Grand Central Dispatch/index.html","43a3f90e88992ebef0e757145c4ff03b"],["/深入研究Swift框架/index.html","596013b31e8740b7bbfa8b431f054e5b"],["/组件化插件化与模块化/index.html","837af76aa8b74241e90726c379c17562"],["/组件设计与SDK开发基本规范/index.html","eb7064d3cac588436d14a67dfe48608f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b4d4106616ff0604ee0aec915866b3b2"],["/选择Swift而不是Objective-C的5个理由/index.html","70f447d3c4dad7c578bbea11a1468e47"]];
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
