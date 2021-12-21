/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","5bcef2498d61b7eb39f5df7f32e2a30b"],["/2020年iOS面试题总结(三)/index.html","35c4a0bab6cb183ff72c3e9d25a521bb"],["/2020年iOS面试题总结(二)/index.html","fbe45e8dd9c5a7357b72af8a45810d00"],["/Advanced Swift系列(一): Swift 简介/index.html","509da5a853d70698b3ec7a00593776bb"],["/Advanced Swift系列(七): Strings/index.html","f9f1dd0be7d6540d185b480f4fb41923"],["/Advanced Swift系列(三):  Optionals/index.html","fe8b795f521a945031995c4c56bd5fbc"],["/Advanced Swift系列(九): Protocols/index.html","697691638c800b835a8775681c9bc9f5"],["/Advanced Swift系列(二): Build-in Collections/index.html","f9ca7ed74a4cac84eb94128583b4d018"],["/Advanced Swift系列(五): Structs and Classes/index.html","284483dbefc8f9357d613204104375db"],["/Advanced Swift系列(八): Generics/index.html","b97e791f6833521c1d8e5071830e8de7"],["/Advanced Swift系列(六):  Enums/index.html","7806317f95114775821b0638e0912462"],["/Advanced Swift系列(十): Collection Protocols/index.html","0e79a46a8ac7376b4530d209ff0ff4ee"],["/Advanced Swift系列(十一): Error Handling/index.html","0701f09f9b43a3aac9aa803888fb6d16"],["/Advanced Swift系列(十三): Interoperability/index.html","54c69bd461fdce6dcdff0a191a50b3e8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","867eef1ac9ec54fcf4703ef8c6ce1c5e"],["/Advanced Swift系列(四):  Functions/index.html","955ca699087388a1d5310d0e5d5ddf21"],["/App Architecture系列(一):  简介/index.html","5d53ddd040ab6a8c0348b2bef8b31111"],["/Functional Swift 初探/index.html","33a219714b3a82875fc3f5eeab3822c7"],["/Git 使用小技巧/index.html","65714bb09bdb0c3cc21aa9be91ba6630"],["/Go Protobuf 初探/index.html","44338a63fc8717a117aef676822d5d6e"],["/Go mysql Tips/index.html","d4f717ecbbc4364dc9b51457e2bb36ec"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","0bdc7b40373f99d9083621eef14eee5b"],["/Go 入门篇：2、Go 实效编程/index.html","500064485b8d2274b899f41afb818ebf"],["/Go 基本语法初探(一)/index.html","faa1d400caa99a1601ed9b34060219a2"],["/Linux VIM 命令及操作小结/index.html","f3f0f38bfb734ea7c504f12e1cd85cc6"],["/MySQL 基本操作/index.html","283937ed2747b4adbfcab91ed081b9bd"],["/MySQL-列类型和数据完整性/index.html","3e19a4de6df43233ba0c8315e9a8df3d"],["/MySQL-数据库设计和查询语句/index.html","136cc47a32c85aa4f30f989209b7da3b"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","84c98edf799cde25758ce4f66a2ba874"],["/NSCODER和SWIFT初始化/index.html","9e0c60aacea853dfc074ab90330d6010"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","283dcca4827c8ec2b9c27cc5cf56381b"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","8cd0f02250d21602cfbedb3ab2200537"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","0af848b4f511e9ca3d4a45e7d5a09254"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","3c4371e51fd713d9901a08bed4a615fd"],["/Sqlite 使用Tips/index.html","307ee4faacc38605c7abcf89df818280"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","86de9585e24478b930d64ba849421c8b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d9451e9b635dff90c24a15cf65ff1905"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3954b22a5dec87d229c519810a2b8d8a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","acecdcbf94c432601ff7c4cf0d259fb3"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","2f003fdbbebac607931a79f84add36fa"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","da7de3903ac758a4e7a722923dcb46da"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","08cd551fe2f60d06dc529467a74dc9ce"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","de554250303c6088cf0379b8c05111df"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","5b7425623d1aa5011e71befc7fe8acb0"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6af9b4f1c5e25c076f1e58d82dbc24bc"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","e7244d55f4ea6c26df10bd302ea1ae4b"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","7ce3e74600483a99f84b34209e4b87b6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8547a0cfc44a656134014d961df000e8"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2d9fef4bdfc88efea7d623293c5688b9"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7eb031655bd431993013f043e3400236"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","a1e44af061fdeb8bb540dfa523012288"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a5f87ccb816fb183ed3da073185b7fde"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","b6916f7e5866979149b1a43cd13318fc"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","f61db711c108ae0f679894766c377524"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","46cf74c759c12eacf6c3f63955187ecd"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","e17e27786901eb605314654c87fe5f4d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","318daf23a521ace06b82c8c563516edc"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","2e481f31cbf19c2c233611cca8c1fe62"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","41535e8822d9ee024b443a38d7f7d628"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","04665ac7d75a834c0ea6dbed3192d91f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f307f51aab75ff230adbca19b8ae64b0"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","ac6f99276a5db857b9fa6d4f1a4262b7"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","a3ce7a1a1607f5680d59872a9e770f9a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","e7bef9783d735f613331267fdeffa878"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","17b875f904658f86cdbf9c2b50e090b0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b42215a159b757040ea2705eba78768b"],["/Swift CompactMap vs flatMap：差异说明/index.html","3b616e6293b02115b44fd3f86fc66ffe"],["/Swift Grand Central Dispatch 深入实践/index.html","de13197fa616db7c476d3876bbd92588"],["/Swift Lazy属性初始化/index.html","08b6bad5b22bf0fecf6f16827b88ed86"],["/Swift Promises 初体验/index.html","f8252fe737292475aa15311906aad20f"],["/Swift Promises 探究/index.html","9364d774ebff585f44584defa27268ac"],["/Swift UICollectionView使用指南/index.html","288e6b49dcfeb678e752ca12be541858"],["/Swift URLSession && Combine framework/index.html","5fa4ea3a0e732de21a8e43e0ba7c1d8a"],["/Swift tips/index.html","f6cdeacdc4cceb6f464f8c879ed4d277"],["/Swift 三方库：GRDB 使用指北/index.html","ea6e03323b556d9c91bd73816b342f4a"],["/Swift 唯一识别的视图/index.html","c313453f84ddc14e95c1cbd4d2c432d3"],["/Swift 如何学习现代UIKit？/index.html","e6fc338d7affe378a122c40c60027d1d"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","27aa5cf5dd6d99b3271d51b3299dd459"],["/Swift 用 compactMap 替换 flatMap/index.html","c774520a21d3ddbd2e34e43df9f83f3a"],["/Swift 选择和播放视频/index.html","f4fde57c93cfaf608c7ff343b3d17129"],["/SwiftUI 系列(一)：1、 简介/index.html","2180cfc45277483d2d651758fdb6758c"],["/Swift中UIColor最佳实践/index.html","2261d60e314bd9e3ef66b2f3f260a32a"],["/Swift中快速简单的工厂设计模式/index.html","25eb02b1f574f36e40299d7350e73807"],["/Swift中构造函数与静态工厂方法的比较/index.html","1f2785e11b3c4198018a2fd3b36cb7ab"],["/Swift中的UITableView教程/index.html","2cb2ab7e3dbe23733e0422e98043b15f"],["/Swift中的懒加载模式/index.html","a3c436bc34bae5506363168d0e5efcf8"],["/Swift中的模块和挂钩/index.html","9bb8cdbfd618600fd8581a276df6b203"],["/Swift使用布局锚点添加约束/index.html","6ddf4b008841f0199d6ed8660ce99e41"],["/Swift依赖注入设计模式/index.html","992271eff6dec540e14f95dc639c1274"],["/Swift关于Dependency Injection (DI)/index.html","a10407f318e7ec6f3e72b00497f54748"],["/Swift初始化模式/index.html","8ab9df2f739a931f42e3aec8ff51db32"],["/Swift单例模式/index.html","624fe58002a69d5976a06d4966789cfe"],["/Swift原型设计模式/index.html","9417a898479328ad245d23f528f6ab73"],["/Swift命令设计模式/index.html","62dbf03b564e436aa1cfcf9451792a76"],["/Swift外观设计模式/index.html","322e9d94772d27cedb81845c8d153f70"],["/Swift委托设计模式/index.html","f64dad181a07a30464c3199cd986b143"],["/Swift对象池设计模式/index.html","29338b175e0102afeec53e8c9e83950e"],["/Swift工厂方法设计模式/index.html","5b8edc76c62d1c26c0049b6ebf6b9a12"],["/Swift带闭包的懒惰初始化/index.html","6a9f2fa7e49f25d34255f3c6e485e9b9"],["/Swift抽象工厂设计模式/index.html","f77535290fadfd4b747c14605b01a85a"],["/Swift掌握iOS自动布局锚点/index.html","a0314ef7c01162146b4e24ef3ac23d7a"],["/Swift支持旋转的自适应单元格/index.html","0097eed084e0144597573c8aa17fcf51"],["/Swift枚举值/index.html","883a4b77c1cf907f56ac5cf97b54d8d1"],["/Swift生成器模式/index.html","feb9f4de8fb6c66e6d3bf4843b4447ab"],["/Swift结合Xib文件自定义UIView/index.html","406416505fb967cb0f51ddce746d9090"],["/Swift编写的20个iOS库(一)/index.html","ededc1808314f1dbd9bfab1aef0238e6"],["/Swift迭代器设计模式/index.html","be9763abe69c564e1a4d1f6c5a336660"],["/Swift适配器设计模式/index.html","127df879f14d307c5df1480e3c91d659"],["/Swift静态工厂设计模式/index.html","e3c1c93c65dbfcbd766d7ec0f2979b2b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","03ca2924a0740e4261d8932926553fc3"],["/UICollectionView data source and delegates/index.html","6ff3474a8e4caedbf9434c09acb74694"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","81b51e94d691ead1e9eddf148cde3e84"],["/UIKit初始化模式/index.html","d4f47543861f253adf9880bf3ca0fa97"],["/Ubuntu18.04替换国内源/index.html","2a415356bf3d3e31fdc23326e1124f50"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","525a29c2f63cb428db0c1054cc7f8731"],["/Vapor系列 (一) :  Vapor 初探/index.html","9a07063c4040f638742159dde5a28b07"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","2429b33d79237afe13f8025889376d9c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","0a9ccbb7919517ac64c0b81034758ae8"],["/Vapor系列 (五) :  使用session进行authentication/index.html","970482434e6af4e5687dd190f55f1b8e"],["/Vapor系列 (四) :  创建博客数据库/index.html","9289a368c3111aa584ca493aaea0c4d7"],["/Vapor系列(六): 徒手撸一个CMS/index.html","65947adb733fcc58e2602cf89f4121fb"],["/WKWebView与Native交互注意事项/index.html","19a895e6ee1050605ed5f2cb5ca3b7b4"],["/Xcode扩展/index.html","5918d97ccd39b60f31cbec2bc9ad782f"],["/about/index.html","3a7ca180b3b259be50915699134fe110"],["/appleOS的Networking示例/index.html","f7dbc94defe424a14449dea10b4d9ffc"],["/archives/2020/03/index.html","08f5f22b132564bf41e6d470448466b5"],["/archives/2020/04/index.html","d79990a109d918464daed39fe5128997"],["/archives/2020/04/page/2/index.html","4bb03b11aa78bf6e3f56acf7f045abcf"],["/archives/2020/04/page/3/index.html","e570dcfea153dfd90d4e87137c7e422c"],["/archives/2020/04/page/4/index.html","f7c61d182cf7c60c12828a85188c8405"],["/archives/2020/04/page/5/index.html","22c6baf0a28ce34c31acead8afd7d383"],["/archives/2020/04/page/6/index.html","2fcc0ed1df8088938eeb6709e7fca92b"],["/archives/2020/04/page/7/index.html","c31c27e3a3ec3b2f08a6c162a34f8366"],["/archives/2020/04/page/8/index.html","aa3bb4a2c92c98b1fedcffe072b21e26"],["/archives/2020/05/index.html","95ce7eda0f6b1445f078f27c846bad0f"],["/archives/2020/05/page/2/index.html","2acf65ed9c51e8856f5b09e847f34422"],["/archives/2020/05/page/3/index.html","08caaacc4bbe1c3c21797dc3b0bce2d1"],["/archives/2020/05/page/4/index.html","8166de40ec182362110b5f35aada7ea3"],["/archives/2020/05/page/5/index.html","93e519d977a91ead08aa9ccf9f805b44"],["/archives/2020/06/index.html","0dbdee8e1744ca60a44f3a80bd9bd988"],["/archives/2020/06/page/2/index.html","83a089acf7133e09e20d1b51fe55a85e"],["/archives/2020/08/index.html","8a3c68d2e9c6c0887bf494be6b329b86"],["/archives/2020/09/index.html","af068b1266791321d374be3bbd24a75c"],["/archives/2020/10/index.html","818500c8189447ae10b8ddd4a8140666"],["/archives/2020/11/index.html","98e82390ef1aba33c89683fbd33c0dc6"],["/archives/2020/12/index.html","21100d282de6cfe265ed446c441ecf35"],["/archives/2020/index.html","45a969d1fcbc06d12808b5d23d4ba053"],["/archives/2020/page/10/index.html","11a6302bd6f3e575e1fb4bf5bd483407"],["/archives/2020/page/11/index.html","57ac17b2a17c79b4769e105f6cb283ec"],["/archives/2020/page/12/index.html","7d70718ea6047fb3fcc4ca34adb98ead"],["/archives/2020/page/13/index.html","fa2277a9c298c3be57c8da1ed5f2fbb5"],["/archives/2020/page/14/index.html","80aabaa06cc657c1bc18bdd94cb5d63e"],["/archives/2020/page/15/index.html","e9b02c02c34fb8165008762f00a53e2d"],["/archives/2020/page/2/index.html","eaa1adf40c713c65d4c286cdfec386da"],["/archives/2020/page/3/index.html","49bf9a37970f7bd16e28e03bdb4febf0"],["/archives/2020/page/4/index.html","4c4e982b4627c5f069e06451b36faa50"],["/archives/2020/page/5/index.html","5c63d11855d3e47af6c56b59585d8698"],["/archives/2020/page/6/index.html","e97c4e424f5af72ddfcf21265b395c86"],["/archives/2020/page/7/index.html","fee4b5a72b38a124e17ce45a076fbead"],["/archives/2020/page/8/index.html","5c6283b4f68881fe91506ded6413ad07"],["/archives/2020/page/9/index.html","8f48881693df7f468b7373d9e4a10028"],["/archives/2021/03/index.html","94de6b212ae92bed5ab0c035cae24b30"],["/archives/2021/04/index.html","0555bf0adbab88bdfeae817454270fda"],["/archives/2021/05/index.html","143700f88b9efa6a7514d05f2a93d3ca"],["/archives/2021/06/index.html","11e2c210a5c29135a602ac3df7d4a89f"],["/archives/2021/07/index.html","0876d1ffd6730d0d15053151d4edb359"],["/archives/2021/08/index.html","6d450ef1387fd32219f57a968b2e85d7"],["/archives/2021/09/index.html","9fa920824541f20d8712aaa65b294184"],["/archives/2021/11/index.html","686f105f1cb5f8e7d65e2c8efd5f664b"],["/archives/2021/12/index.html","644462ffbf8cf82c564e82395625a347"],["/archives/2021/index.html","e1a0467f59675f6c83bd71c2aedf5819"],["/archives/2021/page/2/index.html","c9b213a4b5d9b95b2a4f00908769f4d6"],["/archives/2021/page/3/index.html","1d6388cb6b895754068247abd3b27792"],["/archives/index.html","bde6fe764f31d611626facd253e6ba93"],["/archives/page/10/index.html","23b7ba6a9fc89b13a0761f0c1d313cb5"],["/archives/page/11/index.html","b0e88f13c460cfe0ca02252c0948b74e"],["/archives/page/12/index.html","43757a1f63946c7820ea10a34bf86c03"],["/archives/page/13/index.html","bf66a86c261211b6268bc039c2265caa"],["/archives/page/14/index.html","e0b191ea243e5524ff3f25f06f3335d3"],["/archives/page/15/index.html","534bb5fe2aa695fb74869cbe9654f4ae"],["/archives/page/16/index.html","9ed300fd60375b2ae4d16dfa11442475"],["/archives/page/17/index.html","6b42d9b079ca63c1946d32011166f3ce"],["/archives/page/2/index.html","862e316bc389abfa0e546b3ffe7a9e6d"],["/archives/page/3/index.html","5280f1daea4a3abd6bc17b298511a5b2"],["/archives/page/4/index.html","7c45ddeffc840774b24da61aa57fac47"],["/archives/page/5/index.html","61351e11d52a349a9211c07e35a36c18"],["/archives/page/6/index.html","741e69be10f3fc43be40b96e244b4af4"],["/archives/page/7/index.html","ca395783c2c726780817fe6f4fc1fbc3"],["/archives/page/8/index.html","6a087b2f67f2dc4f417ef171fa96d278"],["/archives/page/9/index.html","2dbf910dbaf8f9a2a7021a61d9fecba4"],["/bugly 上传dYSM文件小记/index.html","ec08c77f9b51b8f3ebd89a77ebe0e725"],["/categories/Advanced-Swift/index.html","9d40f8c84a3ca21742ca87fce4d4f006"],["/categories/Advanced-Swift/page/2/index.html","f2223b872fd6b9fa138e362b328ba262"],["/categories/App-Architecture/index.html","5a1d9801ac5b51d58ca4fe03fd8a3c1a"],["/categories/Array/index.html","9751b9da14e69bac90f0c3a2242cd245"],["/categories/Codable-protocol/index.html","765df3d7e18f1fa1b659555e787c2dc6"],["/categories/Combine-framework/index.html","36a3d710bbc55e80917b3f0b9b6de554"],["/categories/Combine/index.html","2e8739746f43ac9346dbf707ebc78e2b"],["/categories/GO/index.html","393fa899c051c946515f262392ad0c3e"],["/categories/GRDB/index.html","d93a7ea14e77699803680a62f27e2c72"],["/categories/Go-入门篇/index.html","47d4f9b99ed2f087ba7de0786edccc0e"],["/categories/Grand-Central-Dispatch/index.html","9c94a3371e46b5850ec42e4db0dd6853"],["/categories/Hexo/index.html","ffdb8aa1472b1c1ffdebaa1abbdc137c"],["/categories/Homebrew/index.html","6770e4c214d31e3d8eb4714ecea967c0"],["/categories/Linux/index.html","e64704dfc76eee36a0ceb7fd7e1bbc7f"],["/categories/MySQL/index.html","eb678b47a43caaf87d86e35942ee8ff3"],["/categories/Promises/index.html","12c80a3d032f63170e9fbcb8973ab7c7"],["/categories/Protobuf/index.html","e994da40b8c68ddfbbb23f7d157197be"],["/categories/Result-Type/index.html","bed15fbcb6c17aa3e0f8c1d723b78bee"],["/categories/RxSwift/index.html","53bfd65433bf8f740ae697f8f126064f"],["/categories/Server/index.html","cbd40e4748365461d3268d82b348493b"],["/categories/Sqlite/index.html","625fff472ea9e33db7f8d2f16e7633f1"],["/categories/Swift-Apprentice/index.html","fc3a7a0163f36ec8789314ba3a36b100"],["/categories/Swift-Apprentice/page/2/index.html","f8441ccc20b69f977fbd2fced3a1961a"],["/categories/Swift-Apprentice/page/3/index.html","dc5e7aade42dfca092ae9d33e8c7953c"],["/categories/Swift-源码阅读/index.html","af2dbbbe7ea17fd37cda306aeeb80d2a"],["/categories/Swift/index.html","82e1537d1ca522835428d329f8d28c94"],["/categories/Swift/page/10/index.html","390ab802dbb77f75ad8c1e926cf95fbb"],["/categories/Swift/page/11/index.html","6ead53c571d9b01952119fd3c1c707b6"],["/categories/Swift/page/12/index.html","5c034fa855f039b360e656963a7c2635"],["/categories/Swift/page/13/index.html","89506ac2c136cfbf4dcb489cddca982a"],["/categories/Swift/page/14/index.html","eb14936c2e8965b45d3b90eaf9f3913f"],["/categories/Swift/page/2/index.html","21e9f7034d1d8e5346bd9a29b7773af4"],["/categories/Swift/page/3/index.html","acb4a9df853e6e1ff16705648c92cfd5"],["/categories/Swift/page/4/index.html","5a1955f4b368e98d869330995334af33"],["/categories/Swift/page/5/index.html","a447172ca3512c612451b8c573235937"],["/categories/Swift/page/6/index.html","31d8b9efdf2047fb23c51821e148412c"],["/categories/Swift/page/7/index.html","b4c6de72a715ad2d8091d33f32feac11"],["/categories/Swift/page/8/index.html","e705782bf3883bbae481fbe06d39b928"],["/categories/Swift/page/9/index.html","f0e2e8bb5b485b0c13d3dc58e7b26edf"],["/categories/Swift5-2/index.html","5af29ae88894703c449779f6b0a8bc4b"],["/categories/SwiftLint/index.html","cacfa9d7a7daa01b848d64c5e2e7397b"],["/categories/SwiftUI/index.html","1de103936523d50d5f9aab6088a698b8"],["/categories/UICollectionView/index.html","2c5b2d7f71271ae5b3214ecda8d2d799"],["/categories/UIImagePickerController/index.html","8c7f7bb951a4d8e73a7731047adfe30f"],["/categories/UIKit/index.html","46f6972920aae58ec28184b19c3d1bf2"],["/categories/UIKit/page/2/index.html","636e5c2f57a41c45fc4eb4c1da862e2a"],["/categories/UIKit/page/3/index.html","dcaa19688938bfd777e3b2b0d77d4d5e"],["/categories/UIKit/page/4/index.html","da2b2152a35da4121127e82f84ecfa28"],["/categories/UIKit/page/5/index.html","66738393a09b2d8cb3689d5ac5bde369"],["/categories/UITableView/index.html","c66b85434cea3ec51aa2af13f77b8b4e"],["/categories/Ubuntu18-04/index.html","53f35fdc4632ea209c66024843460f42"],["/categories/Ubuntu软件源/index.html","bc34327cfd37c83a522de097ef595b3a"],["/categories/Uniquely-identifying-views/index.html","f68d326d68d703c87ecd441d11bbf201"],["/categories/VIPER/index.html","6fcd37e2a7ffe38bac1f96d6488e1677"],["/categories/Vapor-4-0/index.html","a977c267f25f51ffc3a882237352b5bd"],["/categories/Vapor4-0/index.html","5ac5c47a90dbe5a802bd936d7ae061e8"],["/categories/Vim/index.html","4debbf1dcf90689394d124e47ae4e09c"],["/categories/WKWebView/index.html","40cae47413cd70a979a42962cb37401e"],["/categories/Xcode/index.html","ab5c12999d1be5f936926041c38ceed0"],["/categories/appleOS-Networking/index.html","4117dda9a004fbb5518c59cc95609071"],["/categories/bugly/index.html","4abc6344ec5c78ab99ab4978b47ae0d8"],["/categories/enum/index.html","73882a5fb16457926d6090c790a57d05"],["/categories/git/index.html","25aa48f314accf6393f86e892b755fde"],["/categories/iCloud/index.html","f7b52dc7fae53d58ff7b6a7581f1a7b6"],["/categories/iOS/index.html","8bd02d1966485805df1c235d7fdce83d"],["/categories/iOS/page/10/index.html","2c88f69976d4d722a344a5cb0a1d3c8b"],["/categories/iOS/page/11/index.html","ddfdd7f5c82878c1429cd56bfa28605a"],["/categories/iOS/page/12/index.html","9c73a151aa27502f43d3063157eefd55"],["/categories/iOS/page/13/index.html","3acbe004afa4b5a5d33ba3a38033ea1f"],["/categories/iOS/page/14/index.html","a131cd13f45c5ed8d1710ef3f7486c1d"],["/categories/iOS/page/2/index.html","7810def6eb56b67c492829bd2fd2ed42"],["/categories/iOS/page/3/index.html","36c997df77ec816c40a6b55378a38da2"],["/categories/iOS/page/4/index.html","2ca05c0f1028dd14efbf6f001a9a987f"],["/categories/iOS/page/5/index.html","f333145c4ca0dda2e9a1a6262d282932"],["/categories/iOS/page/6/index.html","6adf0b7612452d9e09ec07c7a9f023bb"],["/categories/iOS/page/7/index.html","e4f51849e70b0b46bd85f30ff6872c2c"],["/categories/iOS/page/8/index.html","4c6f2704c54ff957ad6691afd4947462"],["/categories/iOS/page/9/index.html","5c77b0e3e615349c3613e31c902d4040"],["/categories/iOS面试题/index.html","240045c798ca5e78dc55658aaed7bd2b"],["/categories/index.html","c9cc728ca32e0dfd9804bca17779c48b"],["/categories/random/index.html","d97d676acef926078c84a289a3f84a92"],["/categories/三方类库/index.html","d1ad888622a6eaf7370362e02213c795"],["/categories/函数式编程/index.html","29474d47ced9e454b1c662d910ef77f5"],["/categories/子类化样式/index.html","36bcebc635b180bed821c0ac4005b122"],["/categories/开发技巧/index.html","dfd85d7e616c3a8e7d6db9043d87a090"],["/categories/开发记录/index.html","813ee84caa5a72f5736279af881579ab"],["/categories/数据库/index.html","39523f48fb05e2eecb62d52af1cf1802"],["/categories/架构设计/index.html","a5dbcaa0e0870463ec7a16c1c317bd68"],["/categories/测试/index.html","3351d8548f3440f81e3f98bb8c4baf9c"],["/categories/用户体验/index.html","a6457ef78fae944939fa393666bfa022"],["/categories/用户协议与隐私政策/index.html","04ad9676e3503585e12bbcc2b3c5a020"],["/categories/设计模式/index.html","bbb106b960c8a3c3ccedf5273c84a699"],["/categories/设计模式/page/2/index.html","db6a4cd832884fe5d0ba58d33eae51cc"],["/categories/设计模式/page/3/index.html","865c49fa070be7576d73a8c6229be2d0"],["/css/main.css","7df26495faa6cea148d60bef247ce9d5"],["/hello-world/index.html","1392846b2d83381b7e06ebaef68a503f"],["/hexo部署失败/index.html","8fbd2cc73016edbeb7ca420968c92edf"],["/iOS 15 适配/index.html","6f370e04213d17a472908e667e8fffd8"],["/iOS VIPER架构深入实践/index.html","24cb446e96afe76b9c94f75d6ad30fed"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","6f608c868e794603e21a253d6b851d20"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","50f1faf5d3610cc4862235a0b0bf1345"],["/iOS 自定义视图，输入表单和错误提示/index.html","27bd5ac1af6550834b36f05bdab5a6a6"],["/iOS如何使用iCloud文档？/index.html","8a3d8e76f64aafd7ad1ab59afd25e013"],["/iOS子类化样式/index.html","ad7c15e8efc4d86dd69f8541256bca45"],["/iOS开发记录<一>/index.html","51c6ff9dc18447f8899df5c9751ad9bc"],["/iOS自动化布局编程/index.html","04df708280e477342594642045f2dad7"],["/iOS自定义转场(By Swift)/index.html","33b059e7a8a845d293d19e4ff6ae730c"],["/iOS项目架构：使用VIPER/index.html","9aa12cf2c1b4c8e8426905045261b56f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e5663496da6eadba84a581afbbfe06c2"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","c2990f54a149145827162f739154466b"],["/page/10/index.html","43a0fc4c905ad40f7ca017d9599543c1"],["/page/11/index.html","dad5038bcd0359779948b698f39797e8"],["/page/12/index.html","8a8fa31dccaec0eba335aab6101a696c"],["/page/13/index.html","2c2778eedcbd23a69b1bb12b14bb6618"],["/page/14/index.html","8cf41bfe89b90a439101890cab9ef43e"],["/page/15/index.html","8350caaed44defe178a4fcc1078ca687"],["/page/16/index.html","1d78502d418d775eec62ebfe97bcf63a"],["/page/17/index.html","356eecfa65054d7ccc48cd2e2cc672ba"],["/page/2/index.html","61363b346b0fdcc5fd81c17837f2d71c"],["/page/3/index.html","681206a912299fc6100c8d042a3d8864"],["/page/4/index.html","2da5a37147ac1f1840d7bfad95657fc4"],["/page/5/index.html","4867da80f589f837a6bc77104598550c"],["/page/6/index.html","a1347b5a75a00634e2783c760c306f41"],["/page/7/index.html","6412f1b1c0b31b9f8e869c20a1013170"],["/page/8/index.html","3df211f2b1b90a11cc4bf0aabdf3bf1d"],["/page/9/index.html","05c2da725b30ae9c8c86164d4b2deea1"],["/schedule/index.html","465ce46ab13486b31ee9071488dc4294"],["/storyAppPrivacy/index.html","1c9d291d4df9ce8eb8759fe4737e54fc"],["/sw-register.js","63c2d503d0cad0204b17273749f45e77"],["/tags/Advanced-Classes/index.html","ebc0d75f8fdfeb3bd44a314c403285d2"],["/tags/Advanced-Swift/index.html","dcd8dd59a8f29ba149f583f86b7f7a6a"],["/tags/Advanced-Swift/page/2/index.html","1bfce772918845c734ec3e4058b55431"],["/tags/App-Architecture/index.html","09437eaec372f3775a6708383d589f97"],["/tags/Array/index.html","9ad9a0ecaea479e14a2a2931b9723512"],["/tags/Arrays-Dictionaries-Sets/index.html","0da0c1fd5c4b910f9c79eeb0f5033947"],["/tags/Authentication/index.html","997be5a8ec1497ae9a2258406668d752"],["/tags/Build-in-Collections/index.html","28024cda9edf62508f087a5732bef546"],["/tags/Building-Your-Own-Types/index.html","af385770c82bd08a9017b914749f61b1"],["/tags/CMS/index.html","1a7f2a65a696170e0645256479c9917e"],["/tags/Classes/index.html","2bb81c3c1a29fe66515037dcd86c6e6a"],["/tags/Codable-protocol/index.html","6a07b614195a5f352a37e6a107ef2d08"],["/tags/Collection-Iteration-with-Closures/index.html","80231a625015dadb449a5dcf66c8d7b2"],["/tags/Collection-Protocols/index.html","d628d4868328873f53719687552bea49"],["/tags/Collection-Types/index.html","4db4c299ced48b52f0faa52e65bf39c4"],["/tags/Collection/index.html","93d0840a63cdb3e4805429022778ec77"],["/tags/Collections/index.html","6ec09d04c56294384e3a652d8c46c767"],["/tags/Combine-framework/index.html","3f347c03d93979be57918e2837b25666"],["/tags/Combine/index.html","01ca07f55147af80243b2910b3de4f4b"],["/tags/Dependency-Injection/index.html","05ea567bd741718c2418b9120cc53bf0"],["/tags/Encoding-Decoding-Types/index.html","e619ab36c1b17ec163ab8b12a2508c98"],["/tags/Encoding-and-Decoding/index.html","e867733a40153228489ba88feeb2ce06"],["/tags/Enumerations/index.html","dc8317ed9cc7d83f99334c51f7bf6459"],["/tags/Enums/index.html","f2a66fbfd46294565e0edb02ce358288"],["/tags/Error-Handling/index.html","d150e9904e1ef80d4d8efc5494987014"],["/tags/Functions/index.html","f8b43631558f13851394c8e13f70cbbe"],["/tags/GO/index.html","388d8051dc7a863c8bfa0f229ac1af58"],["/tags/GRDB/index.html","31815b95da505c706870089bf5be0542"],["/tags/Generics/index.html","122ffd37b9c84ae80a53fcd4685a2798"],["/tags/Grand-Central-Dispatch/index.html","aefb99dcc2fb10fcefa84cdfc5db50e1"],["/tags/Hello-Vapor/index.html","4101b6d15d3640d1ef64182cdb07e1a8"],["/tags/Homebrew/index.html","790429810e0015fd5491b252f5cff999"],["/tags/Interoperability/index.html","3d6300787befae096d8de64698a42fd2"],["/tags/Introduction/index.html","ae93ce979e4dc5396bea319b0c30a49e"],["/tags/Leaf/index.html","ca330fa099fc3748a6d1ea0555cb3a5f"],["/tags/Linux/index.html","28e67369df7d732ef9775ea0a8ded46f"],["/tags/Methods/index.html","a2739b668f06857455db0df1c38c27f8"],["/tags/Modules-And-Hooks/index.html","3cd917bd6d5a7e13f29105294724d1c1"],["/tags/MySQL/index.html","23a2e1d4509a4866e9fbd39c0b3397d8"],["/tags/Optionals/index.html","f862426ad2fbf385efcaf5f3f797a24e"],["/tags/Promises/index.html","6c5566cf7f3af08e1e1c9b8f46a45acf"],["/tags/Properties/index.html","5081ef789d85e08098d751c3a019c94f"],["/tags/Protobuf/index.html","6906600f05366403a2833e8737e9191b"],["/tags/Protocols/index.html","5ea1eb9e88e4c909c620dde126ef9e59"],["/tags/Result-Type/index.html","6edb2588cae1546f977c208da5a12070"],["/tags/RxSwift/index.html","1ccdf4b80bfd6c29197a33174a2c5fe9"],["/tags/Server/index.html","5bbe7ce1311424d554869824e4d6e2ad"],["/tags/Session/index.html","4485fad3ba07d2e91ea9a12e37c5d057"],["/tags/Sqlite/index.html","3c76ea1f5f9dd097fde2b533331834b3"],["/tags/Strings/index.html","12c536b2194aba9f99ca692e751371e9"],["/tags/Structs-and-Classes/index.html","7c25ee190a5ef247ec7482e0089bcb85"],["/tags/Structures/index.html","118852e4022b097d080acdebb34eac59"],["/tags/Swift-5-0/index.html","aea69095f7ae94f1f9204260f9bdab08"],["/tags/Swift-5-0/page/2/index.html","ad09a9eeb6b27133a2891f6d6626ba39"],["/tags/Swift-5-0/page/3/index.html","2b7ce92781730824f3e920eadb42a898"],["/tags/Swift-5-0/page/4/index.html","5e3fc212de66dbfbfecedc209e84928c"],["/tags/Swift-5-0/page/5/index.html","39e906437e03fae096f474705f971fb7"],["/tags/Swift-Apprentice/index.html","8a5c3ebad513896ab36c37e7a397d02a"],["/tags/Swift-Apprentice/page/2/index.html","6b4884226daa95baa5a0a9944f59448f"],["/tags/Swift-Apprentice/page/3/index.html","4fe8ec39fb3d4676d5225bd227fcbd5b"],["/tags/Swift-Package-Manager/index.html","b6a954fb088e0a61eeae601fd99bbf75"],["/tags/Swift-源码阅读/index.html","ba9a3de644f924f61771cfa8e0acde41"],["/tags/Swift/index.html","c2fd3daf28288c5bd06c0a93d50e55c4"],["/tags/Swift/page/10/index.html","63f7a59e128ad360e101cb0f29e9f3c3"],["/tags/Swift/page/11/index.html","e350f1567d395f3b3729e93d0784d73c"],["/tags/Swift/page/12/index.html","137ba8d8c5f5318045ed70a24b94fd33"],["/tags/Swift/page/13/index.html","77a541142f9bed9c77019ad971853f89"],["/tags/Swift/page/14/index.html","42c628ecff8aa2971c407151a9d66461"],["/tags/Swift/page/2/index.html","ecc70d078af7476b982b1bdbebb21102"],["/tags/Swift/page/3/index.html","f29ffb6b994943e88eecc38fbdd00649"],["/tags/Swift/page/4/index.html","678d18e7ec1fb959dfa8184f8adceaf6"],["/tags/Swift/page/5/index.html","e8ff00694a9d5addf3b164faa7faef25"],["/tags/Swift/page/6/index.html","9f1a2eb4a3b51539e1f10e8eeb91d0c2"],["/tags/Swift/page/7/index.html","61d97f3ce4e0149b0a2a260629103466"],["/tags/Swift/page/8/index.html","76d92276cbdf5d4f4b904bfa731fd3d3"],["/tags/Swift/page/9/index.html","e79b6225f8688e646faac3d5dbb04d33"],["/tags/SwiftLint/index.html","45cbbc3c47a7584a6113f191b012ee57"],["/tags/SwiftUI/index.html","abc313589f6a3ca266cd8760124f0784"],["/tags/UICollectionView/index.html","b45475e38cd09c8e071ea6c6bf04ffab"],["/tags/UIColor/index.html","b820a2dea58587aa9887d0bc7cbb5c09"],["/tags/UIImagePickerController/index.html","314c02c3f3fa0ecb452d4b875e078b1c"],["/tags/UIKit/index.html","6d3f70aeb9f8c3c884d3b32e79059f81"],["/tags/UIKit/page/2/index.html","e30f7ffab1bd16eabd456fcc771b94b9"],["/tags/UIKit/page/3/index.html","0105ce1345f4dd76dccc1f6a1df9d65f"],["/tags/UIKit/page/4/index.html","c365f636b2a7914c6212635662d2f454"],["/tags/UIKit/page/5/index.html","daf78df531dc9feb577c2620eca2f2d0"],["/tags/UITableView/index.html","1944a581fea202c6cb3df3ca2dd225cb"],["/tags/Ubuntu/index.html","22101ab3ef03ea5588493f0bbb4e0df2"],["/tags/Uniquely-identifying-views/index.html","276b8c98c3a2213f9499020833bd2c33"],["/tags/VIPER/index.html","0c6a47d514af176ca67af161af026a0c"],["/tags/VMware/index.html","ad056826752229784530ffa6dc88aa5f"],["/tags/Vapor-4-0/index.html","a4efced7878af3832f913e09b1e10a79"],["/tags/Vapor-初探/index.html","a4b19a0269eff0e10880dad825d86c4c"],["/tags/Vim/index.html","47d4dd1596d11a5736146d71354e2762"],["/tags/WKWebView/index.html","eeabf425f5a829fb7772e7a637e53200"],["/tags/Xcode/index.html","0e3d853a70a6a81ead97116d9917d6e0"],["/tags/appleOS-Networking/index.html","6ba1766bab5e406230796dbf90531b6a"],["/tags/bugly/index.html","e3e9dd9f82ce0f3a1086e9ee713dde10"],["/tags/enum/index.html","2b079af7210e5055c96c0407adc0311c"],["/tags/git/index.html","07d8b853b5c731e6d7b2c848a07c2bfb"],["/tags/hexo/index.html","14a6ce39c16538147fe7cf8cbcb8abff"],["/tags/iCloud/index.html","716a34110989c225c61ba7af7fde274e"],["/tags/iOS/index.html","d700162a7a26e9c8c8687bf865b2760d"],["/tags/iOS/page/10/index.html","d92eb6804e44ff4181f371e849bf4d49"],["/tags/iOS/page/11/index.html","d2a514b5524a6aaabaf250f7a3fb4318"],["/tags/iOS/page/12/index.html","07aba75d110db0fae4325d438b031b3c"],["/tags/iOS/page/13/index.html","3a96ba4d48a7fbc56f4c7465799a029a"],["/tags/iOS/page/14/index.html","74aad3d03319e29c569bd5f91f99f3d9"],["/tags/iOS/page/2/index.html","e5fe0a7f51407e54a93282c7fb4e895c"],["/tags/iOS/page/3/index.html","fcfb954406ca88f83d167dd1b9a6dc7a"],["/tags/iOS/page/4/index.html","3123844333d86cd934803d4ce7ff07d1"],["/tags/iOS/page/5/index.html","91b9ccd94969450611aed2ef69bea6c5"],["/tags/iOS/page/6/index.html","d2b04705aeb63d25c635b23fb5ab1862"],["/tags/iOS/page/7/index.html","6a940b6c93f90b03e03a7217fcc24939"],["/tags/iOS/page/8/index.html","7ed6d2c013f3157c8da1983f8762684d"],["/tags/iOS/page/9/index.html","dea71c9a44e3c40032025490b110fcf9"],["/tags/iOS面试题/index.html","889946f4a6df18492484db8d9d6c77d2"],["/tags/index.html","2e6e4bbf73f28306353d02b147f3f39a"],["/tags/non-optional/index.html","8215940a4f2c077ecbf6ed297b0a3557"],["/tags/random/index.html","5a6443f59915ab647ce3769806a399de"],["/tags/transition/index.html","2e6e7ee07e24325854ac994bb41c329e"],["/tags/三方类库/index.html","030e3151b80b1b2a3a90c6ab2aa40398"],["/tags/依赖注入设计模式/index.html","32512fe5fa92213c14d220875025cc6b"],["/tags/值类型和值语义/index.html","395fa23f275480a83705a2d581f22c7e"],["/tags/内存管理/index.html","da334c37388915d75438db934ded3886"],["/tags/冒烟测试与回归测试/index.html","9b43016cf68940356632fa601ecdf9df"],["/tags/函数式编程/index.html","1fd0eea4675ef3cde5a3d99f6b0924f3"],["/tags/创建博客数据库/index.html","0ba90d0ddf9d12b7475645f8d6dd4ebe"],["/tags/初始化模式/index.html","e89b77e5572302d7f64cf4313676809d"],["/tags/单例模式/index.html","2650169ce166c5e2317c567987a06178"],["/tags/原型设计模式/index.html","024e83af1337ce3cb1006dd7df0fb156"],["/tags/命令设计模式/index.html","8bf1470b45b7288b891b472173c868c5"],["/tags/基本控制流/index.html","7b1c099773176c1c782ebbbd63d400ba"],["/tags/基础语法/index.html","d139ff178f1c7f8fa343a5ea03bb6b25"],["/tags/外观设计模式/index.html","ed1c42b25a0af9f255373c01b78d30a7"],["/tags/委托设计模式/index.html","5502416fac8cc42e90f83487775d5809"],["/tags/子类化样式/index.html","4589d4771fffe5e4c431fc806a622f9b"],["/tags/对象池设计模式/index.html","3417e21d4bc6e6465bad5fa1f1c4ceca"],["/tags/工厂方法设计模式/index.html","9ae10fa059d2436f32fef2c94dbe2f6a"],["/tags/工厂模式/index.html","fe08cba56e11ffd85365de3156a82c77"],["/tags/工厂设计模式/index.html","fd372dbc370c0b38a7e14c58171fc60b"],["/tags/开发技巧/index.html","2646ae4040cb19bef10fe1ea6599f18d"],["/tags/开发记录/index.html","e9b618d33174a2062b3e9600d9c890ac"],["/tags/懒加载模式/index.html","f0eef9d1d78da0cfd9c0decdc84323fb"],["/tags/抽象工厂设计模式/index.html","d4bd815c81909231455b6a781eaa4ce2"],["/tags/数据库/index.html","a5dc93be9638a256dcf3870d909ce2cd"],["/tags/构造函数/index.html","2c047a9b3954d8e83c71fdfabe21efa8"],["/tags/架构设计/index.html","91b1cf361abda189a4b5a13349041816"],["/tags/模式匹配/index.html","72f9dc3fae9d9e2c4ef33bed5de53339"],["/tags/环境搭建与验证/index.html","90b7d34495128ba70efeeb1cd736ee36"],["/tags/生成器模式/index.html","a704005cc195310d1afe67e3e847235a"],["/tags/用户体验/index.html","fbe0b7041af33021e5c04fca498aaa66"],["/tags/用户协议与隐私政策/index.html","5f52d077c8d80e3bc00150e33abb83d6"],["/tags/类型与操作/index.html","535c67cbb1c91ea4c75859ced52deb08"],["/tags/自动化布局/index.html","f6e5cc23230457a4e82dcbb81fc055a9"],["/tags/自定义UIView/index.html","c34d7c8b8a37c4ecd6519a5fb90af9e9"],["/tags/自定义转场/index.html","9069efb8e21e51358c39d9d5b3abd018"],["/tags/自适应布局/index.html","db4a30257c22db7f94ea3619aa400fd5"],["/tags/表达式、变量和常量/index.html","6235f82546e9399fd17ab37aa9244503"],["/tags/设计模式/index.html","44958c50f4228711f8065bfdf08082e6"],["/tags/设计模式/page/2/index.html","27eae8b14f947fdad5c430b27c7d2fa2"],["/tags/设计模式/page/3/index.html","9c9adfceb711940931e50781954a119a"],["/tags/访问控制和代码组织/index.html","6a5c5de40b41c6ce49f43ad08fa0e065"],["/tags/运算符，下标和键路径/index.html","420865084eb20db3315e2c33c785403e"],["/tags/迭代器设计模式/index.html","ea448680e6d7744abffdaf69d080d3d7"],["/tags/适配器设计模式/index.html","a7465242e4fcb4cd31ba15d065eabf16"],["/tags/错误处理/index.html","fbc1ac8bfccbbc4bfb7b726a001f4383"],["/tags/静态工厂方法/index.html","746eed6eef46752c152704d04777ee42"],["/tags/面向协议编程-OOP/index.html","77384e8eb787536bab9ff101b3ddf0bc"],["/tags/高级主题/index.html","cd5317f403bff8ba000c99c4216c777d"],["/tags/高级协议和泛型/index.html","8e1bc5e83a114abb2788d81dcff1f528"],["/tags/高级控制流/index.html","2386f0dfb31905f5cb7d9c2f90a21647"],["/xcode 常用的快捷键/index.html","842d042da6deb9c68aab18a23303556b"],["/为iOS应用构建输入表单/index.html","91048387be945bc5191de5b888f4da05"],["/产品开发的幕后花絮/index.html","7de8e1fd6ba4014702a0582ca3373817"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0c41bf741632c5b8f1aeff1610d3c8fd"],["/冒烟测试与回归测试/index.html","1bf6c8b55f3ba0e8e3b27c6633146f4c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","119ae3d5993a367e6e937977594bfdee"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","57adbff7f4a5c15945d431dfe8e29bef"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e621d5cd8396bb7e32ea01fea1eabc76"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4c07165d35b0b166b515e492e962b4ce"],["/在Swift中创建自定义集合/index.html","0e2f790e2d3f0184a3ba288400141faa"],["/在Swift中处理非可选选项/index.html","d9ceba6ba6a92f5dea13829dcabbd3e7"],["/在Swift中生成随机数/index.html","cbe12f2a93cf3e956fbb06f49c9dae93"],["/在Swift中重构单例模式用法/index.html","45db269911bf1b65451410a66897e2db"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","55a8a38c3831ec30c9be26440b450a48"],["/如何为VIPER编写服务？/index.html","0a3d5c73698f257e576c60536021d781"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","02bcf11e904631f989bb92022b7e90f2"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1440a4959463862e1dcf365acbdc2899"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","fddf083d9313f7976ede6846114bc05a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","0f63aa4ecc25274eca845ff135ce91d7"],["/掌握VIPER架构/index.html","d795e1b6cf32ee0d8b725a348b438210"],["/揭秘 WordPress Hook 系统/index.html","3a2a0257b7e591cadec8410414388472"],["/比较工厂设计模式/index.html","b3a0f3541e9f641d2c6877c5ddb039f6"],["/深入了解Swift中的Grand Central Dispatch/index.html","166be52d1702a6869318563bfb6f459a"],["/深入研究Swift框架/index.html","4f0a36ff28b1d50e4a6b762ff33779fc"],["/适用于iOS开发人员的VIPER最佳实践/index.html","fab31552f723b8eef856a3a5bb893bf3"],["/选择Swift而不是Objective-C的5个理由/index.html","14327584fb79ce533297eeae4e71a829"]];
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
