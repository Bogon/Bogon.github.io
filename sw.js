/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","c9b3441e61c2fe10d82ca351a7fdb7f0"],["/2020年iOS面试题总结(三)/index.html","56cf911270bcd644d0addfc92f6452c4"],["/2020年iOS面试题总结(二)/index.html","3a06f03e261f1161e20ab3176b59a686"],["/2022 iOS 面试题(附答案)/index.html","54ff28f8264c0639735408dbb5289944"],["/Advanced Swift系列(一): Swift 简介/index.html","51ed1a7fd2330bff1db615e837882a41"],["/Advanced Swift系列(七): Strings/index.html","6b531b065a3f49c59dce3ce8677c3448"],["/Advanced Swift系列(三):  Optionals/index.html","07f8a48b9d7a6d1e8ff6290999f6bffb"],["/Advanced Swift系列(九): Protocols/index.html","037294b938fabafcd22cd955823763ff"],["/Advanced Swift系列(二): Build-in Collections/index.html","293abf658ed894247691944a453cf831"],["/Advanced Swift系列(五): Structs and Classes/index.html","572982c3990453e433e13e2e42b39ea1"],["/Advanced Swift系列(八): Generics/index.html","469bb62cdbbc59a285d141bfd0272ed4"],["/Advanced Swift系列(六):  Enums/index.html","fe61904c76950fb85726eb850fc3efe2"],["/Advanced Swift系列(十): Collection Protocols/index.html","21460535dc8c42a5c323da7f936e7f11"],["/Advanced Swift系列(十一): Error Handling/index.html","868d3637f58986f8a69cc0aab52dbf3f"],["/Advanced Swift系列(十三): Interoperability/index.html","8d256bd085519a7b94c7c4cee40f0ac8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","757d8b2adee28d7aa2ece635c3b71490"],["/Advanced Swift系列(四):  Functions/index.html","efa83947d6d6f3b536fb3126111c52d2"],["/App Architecture系列(一):  简介/index.html","e3f6f518e330608c2a264dd7cb379c00"],["/CocoaPods 设定版本说明/index.html","4c496faa02e03b710e6db8606fa34b6b"],["/Docker 启动 MySQL 指北/index.html","1aa3b9886ca8126a687da8c699c86fc4"],["/Functional Swift 初探/index.html","907dfc914f179764c55b4c53b7b2c8c3"],["/Git 使用小技巧/index.html","9b9bd0fe24e9020da7711d6102c0d6aa"],["/Go Protobuf 初探/index.html","05a25ec0c9398be950f632cfb7b04a2f"],["/Go mysql Tips/index.html","0130989f4f35cd4d8d41daa41af2680c"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","29315d6b70d2131e1befc01a007d3475"],["/Go 入门篇：2、Go 实效编程/index.html","9d20ac206cad7f9f55e8284ec9157426"],["/Go 入门篇：3、Go 重要概念/index.html","b818f457f3490c14274faab0ee399b65"],["/Go 基本语法初探(一)/index.html","1b3521d0f17ffdf03448894651f68e3f"],["/Linux VIM 命令及操作小结/index.html","c8312af14ff5f43dd77e86439b852750"],["/MySQL Tips/index.html","f00e59fd87ef010949cf29679add4b6a"],["/MySQL 基本操作/index.html","a6678844931451ad21b8a5a819dd6872"],["/MySQL-列类型和数据完整性/index.html","053fe5b24714018fecb8fab2be0a1b7c"],["/MySQL-数据库设计和查询语句/index.html","8444a1826252d1e943241b4a943488d9"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","56995d04213d09bf2a0a24f67267d203"],["/NSCODER和SWIFT初始化/index.html","3e8c3024aebad4f6eb5289af516e9d92"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a881f7a1e1301b022d9736ce24719045"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","6e9a8b12aefb68f0f9f02734e8856808"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","dbee2a9587e769fb25c349748e95cc79"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","2b7bda1a55eb0a9ea9b6886b2e4c9d73"],["/Sqlite 使用Tips/index.html","61a06ff26c5d629463113a75c185daf2"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","f822b395270c8b59fc470eff7789d498"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c464cf401592f7e08281efc644b2b869"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","56c207ad9706b93db2de7bf89ff43ddb"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3bea60a410447cd159b8d95b6d4824b0"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","8f220f1dce01c501427191280c8b0bd3"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","701a3d13b97f2ec66735b3494d8eec72"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","acfee29184289608aedae7f4a1b02c77"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","b3b97481579922ac61febcb5717fab3e"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","cbbb333a63fcaccf9b1b90bed2a50161"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","ece5d7ed504dc207e4e8d4cf02b50a74"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f88f5ab30861f18d0774fb0c468e29fd"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d23d7d3b4959e6476573c9c673bf1c07"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","1d98962f6f67ea6122c53035e802b3d8"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","7620ad1744c25725d9fcb3666a9cb28c"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ae7ac112e3b5622ee798f9b4deb5c59d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","436d3d95bbd30e1831390a1082da532c"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a48f84bd43a80207b032b067614e5203"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","0779513e165b26a1663d930919a5de38"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","4fc63a2413a5dcab192e638e7693d019"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","cc1e101cb04bcb5a5403e31e3110ca43"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6271ce598154e1f259c9ccfeac2bc23c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","74ead2eaf1e288dd658833a78d34fd1b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","b08c656e3af59b98f12a3c30d7606194"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","f7ec9b6d0e016884f3100633e9ab2439"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","ff83956d403528093a925c912f55f624"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","dcf00a4fb8dfa6bb11724e444dc543c5"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","f305b465123611679b5a74cbb1025676"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","050a5dd1a4a7ac8c7c1819fdd915adff"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","c8f1ff49418f96659eb813abb11ba60a"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","2d37f5701adfb0f9f35ac9526afae6d6"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","157b4b60338a6c94aa9e250d792981fc"],["/Swift CompactMap vs flatMap：差异说明/index.html","4a8b62a687031eb13726bbd1e54aeb6b"],["/Swift Grand Central Dispatch 深入实践/index.html","84d099dcd137dbaa21fb4d06ce704185"],["/Swift Lazy属性初始化/index.html","c49de1cb086ca09d93cee39cb082223f"],["/Swift Promises 初体验/index.html","5c90a435fe9f0283c9a19cf6748910e7"],["/Swift Promises 探究/index.html","ff925ec43a2089238ab85fb73d8c783c"],["/Swift UICollectionView使用指南/index.html","38484dfa9980a109f84357cb86b2ce73"],["/Swift URLSession && Combine framework/index.html","c9f86b0ec264342755a4e7a8a71896c4"],["/Swift tips/index.html","2bed1fa0ea2128b06c80204851b57ac0"],["/Swift 三方库：GRDB 使用指北/index.html","192d6534beb134a5095e140ecaee8a26"],["/Swift 唯一识别的视图/index.html","fffef75ac6e60ceea9c583160474b988"],["/Swift 如何学习现代UIKit？/index.html","28cebf198315a2c8a0245f70a234d393"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","78f574c20cfe97b0330fedaa9db26d90"],["/Swift 用 compactMap 替换 flatMap/index.html","211db279202fc667da6a7806bd754882"],["/Swift 选择和播放视频/index.html","e7e3fce3999aceb39a4d5b7c879262ec"],["/SwiftUI 系列(一)：1、 简介/index.html","bc4e70c2855463caf7c48cacb666b0b9"],["/Swift中UIColor最佳实践/index.html","7de1f676862ce83e645d22a59b2af789"],["/Swift中快速简单的工厂设计模式/index.html","1110c8d04158d17000a0b374d6f64931"],["/Swift中构造函数与静态工厂方法的比较/index.html","7719cb8bfc7be9fe3188c0d6c6d30d7a"],["/Swift中的UITableView教程/index.html","cf0136438169ec87f8c997b18f1b1a5d"],["/Swift中的懒加载模式/index.html","35dd9f0de1a4e3fddfb6a005ace4f668"],["/Swift中的模块和挂钩/index.html","9489737ee176da83cd77b6ecf007e519"],["/Swift使用布局锚点添加约束/index.html","c1e96390d47cff94d654d120748adee9"],["/Swift依赖注入设计模式/index.html","e07617699cfb8310e5160c75ee4d30d3"],["/Swift关于Dependency Injection (DI)/index.html","b6f3ad0c6dec1b378d330ddeb58b1f07"],["/Swift初始化模式/index.html","ea707eb028ff16a97d9e4d76e3977238"],["/Swift单例模式/index.html","d7fbe8fedda214255023a2fa3ae8da8c"],["/Swift原型设计模式/index.html","bf7cc5f63f1815710f61623fb955f26e"],["/Swift命令设计模式/index.html","501f5c69c33b22a2f998234d660065cd"],["/Swift外观设计模式/index.html","6b362470d0a3793ba4d2fabcf9ec0f85"],["/Swift委托设计模式/index.html","3e7f65993b6ed2cca8ec98a5cb00519d"],["/Swift对象池设计模式/index.html","adb8b3ad00fb146665c924da9f9c6908"],["/Swift工厂方法设计模式/index.html","e3d1ca40a41658795e6814bfa7e19402"],["/Swift带闭包的懒惰初始化/index.html","50a7f60f8932bba3aef57615848211d3"],["/Swift抽象工厂设计模式/index.html","be14976b47607bfe19de6c83ec2bc61f"],["/Swift掌握iOS自动布局锚点/index.html","0c9891cf5c240cbbbd0e23f83e4d13ec"],["/Swift支持旋转的自适应单元格/index.html","8542a4377e4f2ad702d8915ff7bedefd"],["/Swift枚举值/index.html","dd93d147dd28bc68df9b4f6e01a90fe5"],["/Swift生成器模式/index.html","ba001836b6b3617be451bfd28d2fbf5f"],["/Swift结合Xib文件自定义UIView/index.html","973ba42235733e5a4104025b7bf65e42"],["/Swift编写的20个iOS库(一)/index.html","db987d5123f949db192ca9543772acc1"],["/Swift迭代器设计模式/index.html","8335fff5f841b5cc86cca3a6b03f5f5e"],["/Swift适配器设计模式/index.html","4b1f9107fbfb425f35446d4b8f9f5ce9"],["/Swift静态工厂设计模式/index.html","c5446f497d8840e3cc20dad8b9e2a54a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","8a8193e32fd9f7ebb503986126946cfc"],["/UICollectionView data source and delegates/index.html","4e7edc4c410da038b21eb7e4f911f88c"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","5bfac56cd9e16a12b5d0662bf8603e54"],["/UIKit初始化模式/index.html","3d438578bbae868873f129f5aeec0ab0"],["/Ubuntu18.04替换国内源/index.html","330f2df66efe49a61cc10fd187c38535"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","860cb842ff87fd9cea2897f263c5a3c7"],["/Vapor系列 (一) :  Vapor 初探/index.html","8120e9c4320f163bc4e05296add03802"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","e68b8d0468560f5d0eaf811ac8e9cce3"],["/Vapor系列 (二) :  Hello Vapor！/index.html","689bdba3a13f5c1a1be93d0519b4d259"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b37111fffa71f827ce0139e62e10fe07"],["/Vapor系列 (四) :  创建博客数据库/index.html","d7f13bd47322620aa8bbc2d5255c29ca"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f3a0387a66268af1005eb1117166ed07"],["/WKWebView与Native交互注意事项/index.html","dbd64e90c6e3d29ebe7841def68880a9"],["/Xcode扩展/index.html","3c65140d576312b915f53d7fe7fa0582"],["/about/index.html","2a433a0d5053e647c1310008d76bcad6"],["/appleOS的Networking示例/index.html","928f415457d94ac5b0656fe722f3836c"],["/archives/2020/03/index.html","0550d6ba6e9434fe12244268e774d075"],["/archives/2020/04/index.html","7fca65687ad512c0c7fd82b55fbe00aa"],["/archives/2020/04/page/2/index.html","a06ef5d3812fb3dc08b70d03b555a1b7"],["/archives/2020/04/page/3/index.html","85b8ce314b3e523091c3551304573f1b"],["/archives/2020/04/page/4/index.html","fea1a8eb0f599f4e546088d0229cf611"],["/archives/2020/04/page/5/index.html","8740a066fbf54d5f841c151a2e36ef63"],["/archives/2020/04/page/6/index.html","76595fddfc6d557413389223c4b5f00d"],["/archives/2020/04/page/7/index.html","28c01331323527fc3133d75027b59968"],["/archives/2020/04/page/8/index.html","2ab88f66816fcba64a00043b1e8f7eea"],["/archives/2020/05/index.html","d51db9cffe135373b142bc18bc607ea0"],["/archives/2020/05/page/2/index.html","470bdb132af2389da9e5301a80fbeeed"],["/archives/2020/05/page/3/index.html","f8f1128933cf03a0b57066d3d8653b3f"],["/archives/2020/05/page/4/index.html","854b40607e69da9f8fd5901a5d31acf0"],["/archives/2020/05/page/5/index.html","0132b4c9355d1695c6eefd9a919cd17e"],["/archives/2020/06/index.html","f463aff35d26a74ebede3fd4b884ebed"],["/archives/2020/06/page/2/index.html","c1a1f1f283adb968ca4f5d8d8b1bf94f"],["/archives/2020/08/index.html","42ac8ca4209a9fbab873fd96f86f4ac1"],["/archives/2020/09/index.html","d93a1b44eca646e437c9511a8e56480f"],["/archives/2020/10/index.html","a8d1e4ed93274a86f21608e57e74d4b6"],["/archives/2020/11/index.html","c1786d92b733d1ac944f44a16a565b24"],["/archives/2020/12/index.html","ff0da9cb7721ad32bcb7eacb2d20bcd1"],["/archives/2020/index.html","67ccd114dccad379a35a9f4bbf5be3e3"],["/archives/2020/page/10/index.html","3b2bc06f74424faea8a35ccc1ea32cb0"],["/archives/2020/page/11/index.html","78ca498cdef196ae93a0f9639b615b72"],["/archives/2020/page/12/index.html","43be8d4da030946f9ed027d090a560fa"],["/archives/2020/page/13/index.html","076fb71968877db111781766eca5838e"],["/archives/2020/page/14/index.html","4dff30c66baadbc48ea8288dbec9d23f"],["/archives/2020/page/15/index.html","26e7fce6cbfc686ec08ba422f60ff50c"],["/archives/2020/page/2/index.html","d5631d5be7897eb815e1842476aae4a9"],["/archives/2020/page/3/index.html","7290fd9585d9ef617b0fafd0f991b8ab"],["/archives/2020/page/4/index.html","58c009cea9dc83dcc5870816385322f2"],["/archives/2020/page/5/index.html","a087ef0b3470de146ac5231cf6e081a7"],["/archives/2020/page/6/index.html","82ab7bc011d30cb15192242f2c5c4701"],["/archives/2020/page/7/index.html","5e6111e4e1defb5537bc96b080d6a024"],["/archives/2020/page/8/index.html","c3fc11a17c42248dd1b2f664118e329c"],["/archives/2020/page/9/index.html","32dc0c6db7c5a94eea815941df167e08"],["/archives/2021/03/index.html","63b02de5116528baffe98f7886738ec0"],["/archives/2021/04/index.html","8b0547c2059fe10f6872d2e57c61733d"],["/archives/2021/05/index.html","bb78a16d2f66f9332c4f96260fd73d8d"],["/archives/2021/06/index.html","0c817c9cef0eb82aebf64be5cb053ee9"],["/archives/2021/07/index.html","b062516201f3bd2ad3a1da20804eece3"],["/archives/2021/08/index.html","892f029c0c70dfa97e914425247cf733"],["/archives/2021/09/index.html","27a8f17b25aec2a707dff23a4c0ce381"],["/archives/2021/11/index.html","09782ec6c3f7980e006188e6a069a209"],["/archives/2021/12/index.html","946bd0b4c658d7f5b660a0c89169560f"],["/archives/2021/index.html","f92a57fcfd6116f777e2c1508622ac13"],["/archives/2021/page/2/index.html","b5fe939ada7bf35798b0196a6431abb4"],["/archives/2021/page/3/index.html","f8d7553dd4bb85cb3b7c98caa06cce5d"],["/archives/2022/03/index.html","356db4f3952545e55333025648a6b493"],["/archives/2022/04/index.html","5f81a325d48e99be91b130b2d75cc0cd"],["/archives/2022/05/index.html","f55d08b7f4ebffb8c486357a9efcadb9"],["/archives/2022/06/index.html","ec144566caee1d1162cf3f7bfd4248bd"],["/archives/2022/07/index.html","1cf6a90f683338aef42d48311e1a4856"],["/archives/2022/08/index.html","848283815e3252819f8b64fbb76110fa"],["/archives/2022/09/index.html","e2c35d8a129f4d8c630f48494c5ca54d"],["/archives/2022/10/index.html","f5d9f3be5a0d85520ef8aac1f8b740fc"],["/archives/2022/11/index.html","68fb03a69440c208cde6416756d59f77"],["/archives/2022/12/index.html","27e44dafa316cf2688fd551423f5401b"],["/archives/2022/index.html","8e9ea667e6eb4d258f672e883b62f046"],["/archives/2022/page/2/index.html","72e7006a15ba50afe6f7302e080f7f8b"],["/archives/2023/02/index.html","72d972921a79bf2355b40ca531048c14"],["/archives/2023/03/index.html","ac26e2c17b5f80f042a7eb445e0a187a"],["/archives/2023/index.html","ea492d93a17a67868c1ab5bc09df8f24"],["/archives/index.html","6bb4c3dbd67adc49bd80f825561bc573"],["/archives/page/10/index.html","6c6475b642f08a9865c89a89cd54daec"],["/archives/page/11/index.html","8f84d96d1b1f2a054e7246c557796045"],["/archives/page/12/index.html","e3812bb00fabb6549897e7492092baf0"],["/archives/page/13/index.html","bc9a191069971ae4e0a699d94026f9c9"],["/archives/page/14/index.html","9f2c83df4c3f6eecf08a29f3a62942ff"],["/archives/page/15/index.html","a651d4c71c721b5d63e5f1f9e79a4b80"],["/archives/page/16/index.html","f72d83461ca2fe2f8da949be0853829e"],["/archives/page/17/index.html","f117dda5b9b3a069c2e06036d5ebf070"],["/archives/page/18/index.html","0e18c1b9ec04d65acdff4fe440f15101"],["/archives/page/19/index.html","b47fd7f04fa909debaf334553c8793d1"],["/archives/page/2/index.html","d51c10bcc4c9f422d75ddd4e336e6f2e"],["/archives/page/3/index.html","5801fa94987ab705700f025e062e6201"],["/archives/page/4/index.html","fd009244acef3d6f9c0dfac2752e5693"],["/archives/page/5/index.html","5b732b481379df3c5e2f55b088c6cc7e"],["/archives/page/6/index.html","b509015b8c3684f7448cae6d46e83f83"],["/archives/page/7/index.html","3dfe01b4899035947d3d6abf13680964"],["/archives/page/8/index.html","f0d8bea4b3bff270c6f2f676de83746d"],["/archives/page/9/index.html","6f4b81903c477cbf5bbdce03f9fd6ae2"],["/bugly 上传dYSM文件小记/index.html","d3265aa7677bdb89aaff3d7acce81c4d"],["/categories/Advanced-Swift/index.html","6a9bc2a706603af70855fd795a3e01ee"],["/categories/Advanced-Swift/page/2/index.html","19993730e308b7204ca8e19684ed9e60"],["/categories/App-Architecture/index.html","e463b75b18ace88c2d9928616b1680d1"],["/categories/Array/index.html","d834aa7e2d34b7ec6e65c80a11cb0e9d"],["/categories/CocoaPods/index.html","a430ee1d39898fbc90461fed69fc28be"],["/categories/Codable-protocol/index.html","1b43ac0fc813173d0c11594751ccb062"],["/categories/Combine-framework/index.html","d7ed9bdcb45fc472e1ff1f3c1cf9d3c5"],["/categories/Combine/index.html","021bb1f5f50b8fd0638588913597a8b4"],["/categories/Docker/go/MySQL/index.html","2d62eab1bd9be970de247e34b13e820e"],["/categories/Docker/go/index.html","264bc2d9c05e3882dcce5a47aabf5711"],["/categories/Docker/index.html","c5e92983ab1315c7b0ce96079c4d1a56"],["/categories/GRDB/index.html","d90634903f1eae02fb69e10ecd375e03"],["/categories/Go-入门篇/index.html","985e9156274ef744b3e4b717237d8a27"],["/categories/Grand-Central-Dispatch/index.html","aa7bf93694191ed0163e43e3c2eb4231"],["/categories/Homebrew/index.html","bc2fdce24f3af8b34af916e019c11395"],["/categories/Linux/index.html","e9331c35164577d3707b566806a63430"],["/categories/MySQL/index.html","a98dbeb324e823d5be54dd131bceb8cd"],["/categories/Promises/index.html","7aba89a61664bb27a4903d45237ca2be"],["/categories/Protobuf/index.html","1a1c8f9f362e835e5e420b278fa4b918"],["/categories/Result-Type/index.html","5785cdf16d1080cd3395df8e2da9785e"],["/categories/RxSwift/index.html","3172f0a2e2b4365455fcac280068f0f2"],["/categories/Server/index.html","8a52c4be8eaa59726bdbeb029211b98e"],["/categories/Sqlite/index.html","c435ca4586cf90c365fe7195485b04ff"],["/categories/Swift-Apprentice/index.html","486edaf5ca1b7711593ce8a878d96583"],["/categories/Swift-Apprentice/page/2/index.html","cac6e65d2fbca3a9df56075a33039b37"],["/categories/Swift-Apprentice/page/3/index.html","cbd69bb2696cdb29132603ce5d33edcf"],["/categories/Swift-源码阅读/index.html","f5a2ad35b42d2a6170c2d3442b925558"],["/categories/Swift/index.html","19ed3df393949da03e269b9eb6e31d28"],["/categories/Swift/page/10/index.html","9a204d2101dd2b3cd2dad123986e64be"],["/categories/Swift/page/11/index.html","abfa4c8d95a45726ebe7672a3b7c2ba0"],["/categories/Swift/page/12/index.html","e5934653dedc84b0313f6510e4913255"],["/categories/Swift/page/13/index.html","ed43c295d5c3901276d01d781d7a3e62"],["/categories/Swift/page/14/index.html","d38afa770d5c7939a4478269c4abccb6"],["/categories/Swift/page/2/index.html","d5fafec1fa9e9dd18016d3b83ea2a9c7"],["/categories/Swift/page/3/index.html","ca078d4bfca993fba8b7706e394afa67"],["/categories/Swift/page/4/index.html","9770a3ed134d012f9f3921fe2b266373"],["/categories/Swift/page/5/index.html","8796f56a07ccb06be32e4616fc6d7dc5"],["/categories/Swift/page/6/index.html","745a1d2ea251754ef9e962e5352d7dc0"],["/categories/Swift/page/7/index.html","4c74b07ab54a38ef5eb56668bc5f3eb3"],["/categories/Swift/page/8/index.html","20d794aa017ae9818e9ff92d49a0ea2e"],["/categories/Swift/page/9/index.html","5f2552c2b722d6f2ff5256a4c83204fb"],["/categories/Swift5-2/index.html","adb30edf9cab02c8acdddc680078b22d"],["/categories/SwiftLint/index.html","b51d08da0da404a4ab6e0b93e12bc7aa"],["/categories/SwiftUI/index.html","dce6a906dd62c273cc0c08957871c9c1"],["/categories/UICollectionView/index.html","7b566e7f57d56676be2ea8e2b60e505e"],["/categories/UIImagePickerController/index.html","899ec6c4c92a909cba362246e0160ef0"],["/categories/UIKit/index.html","f81922240081dcc8498f7d6c8954b9eb"],["/categories/UIKit/page/2/index.html","bf7fbbe8c753599d2610d2b10705a8b7"],["/categories/UIKit/page/3/index.html","299debaca6a6b7505eb52cdf7711d832"],["/categories/UIKit/page/4/index.html","5df89ab698207efd0f33cbe7439b8ee9"],["/categories/UIKit/page/5/index.html","986e85cca0c57269c8591dd3a4913e08"],["/categories/UITableView/index.html","5ebfd5cac6e02db0bf878bf014adcd20"],["/categories/Ubuntu18-04/index.html","be5654fa82a44c0b675c90e9d67e5d77"],["/categories/Ubuntu软件源/index.html","b745cb9a3665718686f0bd1f15be8491"],["/categories/Uniquely-identifying-views/index.html","36f885ec28dd3e3e442e4df5c38f9709"],["/categories/VIPER/index.html","34c166484566fa8cb1fb250c8f3abfcc"],["/categories/Vapor-4-0/index.html","c4eeb55d17eb4f3bcc377ae00278e919"],["/categories/Vapor4-0/index.html","ec9bd35a5ad587240ff0ebd35b13cf94"],["/categories/Vim/index.html","712cefefd30b2f7f394f9d7fb84b2223"],["/categories/WKWebView/index.html","f9e703fb78d2eacefb10ad431996986c"],["/categories/Xcode/index.html","9d8250abb7711e6695b91b08ddefe190"],["/categories/appleOS-Networking/index.html","162deffdaae2b49c36faaaa7ab768dfa"],["/categories/bugly/index.html","6194b5b9728a76547a6d72aeaa23a4f5"],["/categories/enum/index.html","f406abf22deb47dcf0a80a5b16dbbdcd"],["/categories/git/index.html","27bbce085f54b3f5c415e30c061064f6"],["/categories/go/MySQL/index.html","831062f54d8574fd5fe3017c9b4b709c"],["/categories/go/index.html","f4b61e3bb28f8398c9aede862838b3d7"],["/categories/go/interface/index.html","8e0052ab1d9c27d0668b5eee1a1f43cb"],["/categories/hexo/index.html","668e743b83028a62d5fda885b10c10a9"],["/categories/iCloud/index.html","4d5155cb7c33e0b4d0c15fa27e80bffb"],["/categories/iOS/index.html","ed64dc5015f2599b708d9fe7d43b6a67"],["/categories/iOS/page/10/index.html","a935f2fc548aa41b408fad37f83d5742"],["/categories/iOS/page/11/index.html","26151e7f91077376f5a186cc8191261a"],["/categories/iOS/page/12/index.html","6b1836b91ffbb2064bfab1e56b3aaa63"],["/categories/iOS/page/13/index.html","2356aeb46da5dd5c6386004709547fcd"],["/categories/iOS/page/14/index.html","48e321a691598e5ac0ba47357d0d9cfa"],["/categories/iOS/page/2/index.html","d4da6444396e0749db8876d69a6b36d3"],["/categories/iOS/page/3/index.html","9d7060d33d589b0b640830be3a2ad7a5"],["/categories/iOS/page/4/index.html","746bdea95be3f79d5479b15f47d6aad6"],["/categories/iOS/page/5/index.html","554ea17572ed3465150b5012df019bc3"],["/categories/iOS/page/6/index.html","a61baa8e18cb7da063af01bbfb4d6f28"],["/categories/iOS/page/7/index.html","42b845f83500984b984821ada5299c6f"],["/categories/iOS/page/8/index.html","b7ebcf3d4de8219b22d8deacffd5ec15"],["/categories/iOS/page/9/index.html","20ae901e200b63918003f8f4db1e7e7d"],["/categories/iOS/面试/index.html","dc1599f740864be30db33fef8cabcf34"],["/categories/iOS面试题/index.html","886e342449df436c6c2f7ac442d3158a"],["/categories/index.html","9c60ab5918c2eb1f0f30959e48553d73"],["/categories/random/index.html","be7a0f040824b79129afa44ed6379075"],["/categories/三方类库/index.html","27e752267331156ec1c4d59b38eef769"],["/categories/函数式编程/index.html","68282bdace67066f2eb9d8592bbca485"],["/categories/子类化样式/index.html","4437759ff8900e71a1d188af5766c5d6"],["/categories/小程序/CSS/index.html","c0a6699c466b82ecefd4213e60c46485"],["/categories/小程序/index.html","4ea3f153dc84a12c15f78eeeaf229786"],["/categories/开发技巧/index.html","2ef78a2869b2c06773727f0049ddcf6c"],["/categories/开发记录/index.html","0b6a2107531d1dbe30ee0f1c683f3817"],["/categories/数据库/index.html","b12f0ac4ef1f8131e66aabd69619d725"],["/categories/架构设计/index.html","d7a7faec2cab3997f216c6e96fae27f1"],["/categories/测试/index.html","e75dac5b6a464b689eab279c315b2c19"],["/categories/用户体验/index.html","8fe5f4506dbd738f927520e857bddd7b"],["/categories/用户协议与隐私政策/index.html","6c5da961c02678eb61adb5c8fa088a36"],["/categories/系统设计/index.html","0736435ce4d2e3d6a7d6077230c7205a"],["/categories/组件化/SDK/index.html","6fb3a77c9ce3fa22c03dc950a9a84664"],["/categories/组件化/index.html","08e5c7a2aef2b8f54f3b4b3ab22eb28a"],["/categories/组件化/模块化/index.html","7c635d39e4f00eea34cd95adeccdcec0"],["/categories/设计模式/index.html","c2d8ffeafe9a238764eaef34e52d3092"],["/categories/设计模式/page/2/index.html","da13ae2d0f6ec3097a88753160515dae"],["/categories/设计模式/page/3/index.html","c2d4efe0f7657ad69d748a8ef76ab025"],["/categories/逆向/index.html","7019980ecfd2f921e68ca5f9467da24b"],["/css/main.css","69a604ed27399c94ef7454523f08263e"],["/go moudle 导入本地包/index.html","c0ee4813a6018d42c1bf1a0624cf8224"],["/go 库专题(一)：gin/index.html","bec6bf7f5005a9024190c68a83b0cea6"],["/go 每日一问/index.html","0d101d7e9aa16b3816e863dea722940f"],["/go 项目实战：gorm 数据库框架/index.html","08a7f4a07f4f28e950208c53fb358166"],["/go 项目实战：zap 日志库/index.html","04e3b653693613ec731b70bf56c8804f"],["/goland 学习笔记/index.html","dda6b747d0f68c88f88e89d05f7d0257"],["/hexo部署失败/index.html","ae80dbf047cc462685564b75c945ae2d"],["/iOS 15 适配/index.html","559d4599e7756fc3654a53a3e51b48d7"],["/iOS VIPER架构深入实践/index.html","d7ee945ca42985daaa8542fe74d7a2dc"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","f4051c9a1a505f2c6247e449d216bceb"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","22972c008cea0a0a27470dce54bc9a26"],["/iOS 自定义视图，输入表单和错误提示/index.html","b206bd3a228555ddffc1a76274eac772"],["/iOS如何使用iCloud文档？/index.html","1af9a6f248d1cfb0004f4b92f8b5867a"],["/iOS子类化样式/index.html","8443ffa7b76f1d3ac8fce82913ca0777"],["/iOS开发记录<一>/index.html","6d5628ebbcead46220bd305848cf0a58"],["/iOS自动化布局编程/index.html","4d0f6e927bc4aaddfd7cd505f5dac713"],["/iOS自定义转场(By Swift)/index.html","1fb0c5bbb2afbad2d06d655a3b89bb0e"],["/iOS项目架构：使用VIPER/index.html","3b617de6c39dc947e2444dbef00d3466"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","0e46f0303fae41081550daa0d900a895"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","550d9d10409156accb17c8f680bdbe08"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","fe51e5ca91dc6bd4d744db97fa93e1e6"],["/page/10/index.html","aafab45798ebb54022ffa65d6a7d3815"],["/page/11/index.html","7daa8e1d591d2ef839f69697f40dd9fb"],["/page/12/index.html","0fe9710471a60eb07d9ec250b0f480ba"],["/page/13/index.html","4b573f51bb731c4d2ad667af3156da7e"],["/page/14/index.html","010f49f0bae339bb7771e3cbb8d35f35"],["/page/15/index.html","8ff60ed18cf49aa3b136ada4d39c7fb4"],["/page/16/index.html","4efbe235de5a507fa42400044d37b28f"],["/page/17/index.html","a3e233b0a30c42ab6c893cbfd541082e"],["/page/18/index.html","2b9cd76f43b17a432a80b05b4e38d6e1"],["/page/19/index.html","93b1438f002da354a1bd598db216eb44"],["/page/2/index.html","a7dbded85da8c8a45186c605087e5b25"],["/page/3/index.html","a75c5b19da6e67b415854d167a4c845e"],["/page/4/index.html","44b91a44ed8b7357f55b1b21bb57916c"],["/page/5/index.html","ed130239f558e1a727caee6ada9153d1"],["/page/6/index.html","b37086539560b1734e138425235375c6"],["/page/7/index.html","79611309be0b6cb6857484109a3399b6"],["/page/8/index.html","c36aac98f3de84992b5013694e20dbdb"],["/page/9/index.html","f439ea86951badc1e94bbe586c648ed6"],["/schedule/index.html","90e11d3681b34b208a8a2736b779466a"],["/storyAppPrivacy/index.html","b9404ae8d0ed587434ca22ef010011a6"],["/sw-register.js","ea8392badcdd298cdc42efbc9b1fc150"],["/swift 专题：函数/index.html","ebb31865d76668d5d3f1eb57bc41232c"],["/swift 专题：闭包/index.html","62912e592713c2ffd28b4744684cbd23"],["/tags/Advanced-Classes/index.html","976f6e70f5ff2ac72a70d11d9582c119"],["/tags/Advanced-Swift/index.html","d5e5fa874405c6570605625212078296"],["/tags/Advanced-Swift/page/2/index.html","86ae968393d00a928ed9086deea2faf4"],["/tags/App-Architecture/index.html","5edf6802ff1ff87aa53f3c600d03d059"],["/tags/Array/index.html","1edbd70fc696d1582a111a6c25451643"],["/tags/Arrays-Dictionaries-Sets/index.html","1a230969334b07939eaa17b8a05e4f4f"],["/tags/Authentication/index.html","39a6d71adefc16a142315fbff3fa2fe4"],["/tags/Build-in-Collections/index.html","070eab689b9fa5ce13cdeabca6620c58"],["/tags/Building-Your-Own-Types/index.html","444cb7ebeddce1b37898b03cd0119aa0"],["/tags/CMS/index.html","178f64ad836fe121b71afc1df70fbe1c"],["/tags/CSS/index.html","4bd7b0355ba813c9f44afff0421ab48f"],["/tags/Classes/index.html","5cda521517a2fe6c351015530a298e70"],["/tags/CocoaPods/index.html","7dbf41c92a43178998a13fb6954ca852"],["/tags/Codable-protocol/index.html","ae86000f6b93b511ffe39f6afe054ddd"],["/tags/Collection-Iteration-with-Closures/index.html","5af3bcb73365fbad869d63b1fef49ce3"],["/tags/Collection-Protocols/index.html","bb4a04d22ee05a79879a14c4aa81eeaf"],["/tags/Collection-Types/index.html","59adbda7d6d4d4f17915e1af1db58ec8"],["/tags/Collection/index.html","725192179b1364f83150288e828e18f6"],["/tags/Collections/index.html","40a5193c9f56cbc110d5624ca0dd18f5"],["/tags/Combine-framework/index.html","ad8c346237f0b6718ecffeb3bdef85e9"],["/tags/Combine/index.html","7d56714266bf2ab1a6d2f1491e8e1237"],["/tags/Dependency-Injection/index.html","547646adc702ce25217a71ede7496a93"],["/tags/Docker/index.html","2a180878ce8ef166f042458f2f5e1b8d"],["/tags/Encoding-Decoding-Types/index.html","ec0f4d03d046428c73e83cc1b1362c27"],["/tags/Encoding-and-Decoding/index.html","8491b52097d8080a8e435fbbecc25725"],["/tags/Enumerations/index.html","b54a9affc9d4f2eda1f65729b57af2f6"],["/tags/Enums/index.html","0bc3f3d0285fc3efd75f0b37a5e402f8"],["/tags/Error-Handling/index.html","4bd054dfe55491e72f105b64effbd500"],["/tags/Functions/index.html","3a38216fdb4cbe96e9cadd821d5befcb"],["/tags/GRDB/index.html","4f0d24b5b31bc4eddd5b613ba3439fa1"],["/tags/Generics/index.html","1f9b2769fcf034affe21843d97c6385f"],["/tags/Grand-Central-Dispatch/index.html","7c622bb3781d8d7f5a1e8010c7d22c76"],["/tags/Hello-Vapor/index.html","554db72ce5bf8ff71691486b3addb90a"],["/tags/Homebrew/index.html","4c56bfd6bbe3b3b3ae0cc3c00125988d"],["/tags/Interoperability/index.html","57f2b0fba168d38254ed1fed6504ea72"],["/tags/Introduction/index.html","4ec5aa9bcffeb27326c86c89e02db372"],["/tags/Leaf/index.html","32b498b16993f063a3b1d09dac1a4f9f"],["/tags/Linux/index.html","203a088192405fe141502eeb75e0fb30"],["/tags/MAC/index.html","70a385a8b373eb0c34c310e883478966"],["/tags/Methods/index.html","30271b78722d7d25a3ffe75982044905"],["/tags/Modules-And-Hooks/index.html","c82e3f6b0b4710f52d642b5130e2742d"],["/tags/MySQL/index.html","adc7f068bf5dd5663667fe23b9742f5c"],["/tags/Optionals/index.html","9c3e03daccad458585a4ad22f94da19a"],["/tags/Promises/index.html","567fb9c4925a642ed4272f515fd19ef4"],["/tags/Properties/index.html","5c762f14cccc6fa1d7ec193fc07509fc"],["/tags/Protobuf/index.html","1b3387ef6f35ea9279933c2ad23387b6"],["/tags/Protocols/index.html","f76c9e2478338fdc3985ca41c68ea722"],["/tags/Result-Type/index.html","6e47163fd1f4fac809da0e79f855032d"],["/tags/RxSwift/index.html","320280e2e48a3b2513e330248dd67a39"],["/tags/Server/index.html","f2241cc0a11cad6a5dd32c144680aadb"],["/tags/Session/index.html","99c3fc5ba68ca12e1a19e7f2c0d5eb5a"],["/tags/Sqlite/index.html","54754042a77423aefb9cec3f7cfec9ba"],["/tags/Strings/index.html","2b0bd1285e09ba5be4a6ce5ac7a6920b"],["/tags/Structs-and-Classes/index.html","e3a58e39dfd4e09f047df8555b24346c"],["/tags/Structures/index.html","9a867ad035a33a6ff17b0eec498ae445"],["/tags/Swift-5-0/index.html","0a15fb26b94cd12503f4170cacf19766"],["/tags/Swift-5-0/page/2/index.html","441ec2709454acad09aadd7753bba5f7"],["/tags/Swift-5-0/page/3/index.html","5ea6adb8d4dd4da205f8f09bd27c57fc"],["/tags/Swift-5-0/page/4/index.html","16ecc3ea2a9e49807850eb9ec6e60ba1"],["/tags/Swift-5-0/page/5/index.html","268daff04b9579e314a1ef7fc64ffe7f"],["/tags/Swift-Apprentice/index.html","2894bf08eb202e9d95a234cc0ab97361"],["/tags/Swift-Apprentice/page/2/index.html","00e445eec67e3ad050d56683f7d9b593"],["/tags/Swift-Apprentice/page/3/index.html","596d20284b80c4f959bf41120ae26253"],["/tags/Swift-Package-Manager/index.html","910c6535c1fbe4c5025f408a462c915e"],["/tags/Swift-源码阅读/index.html","b9ba930e90cd2cac416294ec2e770817"],["/tags/Swift/index.html","8ab66ef2a6d7ab616eb467d60243f305"],["/tags/Swift/page/10/index.html","c1ebf87df721f5187e0f1abd6693e129"],["/tags/Swift/page/11/index.html","7106be56e3806bb35b352fb670db23df"],["/tags/Swift/page/12/index.html","baa111e003309a984f53496c02a967d5"],["/tags/Swift/page/13/index.html","c62347ba29ad6562adec45c8a22add4c"],["/tags/Swift/page/14/index.html","99c3b6a5d814a98da17c8c05dcc02bbe"],["/tags/Swift/page/2/index.html","604da89a8390a3461a3c7b09df6240db"],["/tags/Swift/page/3/index.html","9e1254143682e1fb684af1ab52c0e921"],["/tags/Swift/page/4/index.html","4f1c9934a51b03ab88d2b4bfd5e1a349"],["/tags/Swift/page/5/index.html","5296f56a7831af2127f91b4407022128"],["/tags/Swift/page/6/index.html","df6d357d902ad65faf43285e2a73d2da"],["/tags/Swift/page/7/index.html","c09b879c0b07e57f4367c71c906eec29"],["/tags/Swift/page/8/index.html","b8632a21b4b2033d4d4e285f58491041"],["/tags/Swift/page/9/index.html","69f1eda620e3d63d9749acf8b4e82a98"],["/tags/SwiftLint/index.html","8f31a25d4888c5875a49b5f386f5055a"],["/tags/SwiftUI/index.html","054c793652af83e45b089342b6494878"],["/tags/UICollectionView/index.html","d7078ac2f2d6bfd649db3a8d3b98741f"],["/tags/UIColor/index.html","108ea9210750bda4950a1e3f1f25be39"],["/tags/UIImagePickerController/index.html","57dcdb97fb9aa657630b1b6ccb21958f"],["/tags/UIKit/index.html","3bb69c124aeae9ede89fe50f384f6c56"],["/tags/UIKit/page/2/index.html","42cdd7c962d151189913ac91669fdc16"],["/tags/UIKit/page/3/index.html","643d7c944e7d9096d185ad292748d434"],["/tags/UIKit/page/4/index.html","ed0f47121e306fc16be3cd8a4c68cc12"],["/tags/UIKit/page/5/index.html","bfa4678de4a397d8a2f9766b38de85f8"],["/tags/UITableView/index.html","0c0cfaae9ed3266686c996d8237e216f"],["/tags/Ubuntu/index.html","a28648985d3edc04304566db9748ffb8"],["/tags/Uniquely-identifying-views/index.html","223ecfccbfac650e9f0a69c1bbba6fce"],["/tags/VIPER/index.html","94284ede0ad644d093f822b52b1379bb"],["/tags/VMware/index.html","9334e891cf07cfc2d0699ecfea3e8441"],["/tags/Vapor-4-0/index.html","bbc840b593bab069c34fd6e08baffdb4"],["/tags/Vapor-初探/index.html","dc5f19a8ae2a14339d3034e774865b58"],["/tags/Vim/index.html","80292a579224af317e27ce535126de88"],["/tags/WKWebView/index.html","aab24b5966b50e89c523b8099bd6c7b4"],["/tags/Xcode/index.html","ba3b8182298db43ae153009a3960adcc"],["/tags/appleOS-Networking/index.html","2694e1ab4df2347a7947df6083787859"],["/tags/bugly/index.html","45919edbefe2bc422801dacb6fcc1f60"],["/tags/enum/index.html","3cc285a9c2561be9e4dc5cf362b1b6ef"],["/tags/gin/index.html","7d8dac481e4908bdfc3277149e0863bb"],["/tags/git/index.html","a6aaf229e20a44245ba5e3c2aea52c02"],["/tags/go/index.html","c9b15ffe9d069a90bb39958503379aa8"],["/tags/hexo/index.html","ab2999bc1be70544d7e11fdaf2f235b2"],["/tags/iCloud/index.html","d7b1ae2361a4d2936b462ae55a42b73b"],["/tags/iOS/index.html","51e1d8a1c1070c4f8d37577fec92824a"],["/tags/iOS/page/10/index.html","3f49fe124bfb65cefeccd80723e17299"],["/tags/iOS/page/11/index.html","25753b852a054e21ab399d339fb6e18d"],["/tags/iOS/page/12/index.html","2fc61dd726c816bfae50e6f0e5f7a359"],["/tags/iOS/page/13/index.html","115f4bca118b1f4faaa63778831ecf65"],["/tags/iOS/page/14/index.html","69cf4a69cf42a7658fb4cb9117671105"],["/tags/iOS/page/2/index.html","403ac4bd15e617326258fa7da6374cbb"],["/tags/iOS/page/3/index.html","f7548e54b116019a0f9d0e8aefd18825"],["/tags/iOS/page/4/index.html","b19544998474b68f65b80e303440c3f6"],["/tags/iOS/page/5/index.html","3cbeee8dea74f058f239ddc9c0094fae"],["/tags/iOS/page/6/index.html","0382bef298b93e082361746575a69aec"],["/tags/iOS/page/7/index.html","78b7deba4da6a7b293224ec2c3773506"],["/tags/iOS/page/8/index.html","eec4bdd81797e83047fc5ab510a04224"],["/tags/iOS/page/9/index.html","449c5b04bcd75b1d4880699029dfb1bd"],["/tags/iOS面试题/index.html","dc3b521c523d686071c96df7c1a7976f"],["/tags/index.html","5625fe13e62203a390ade67ed7e6ef57"],["/tags/interface/index.html","a5ba1fe9d95c1c5e020091d9b56c8f82"],["/tags/non-optional/index.html","a36283361f98deb0d90029b5d464a1b3"],["/tags/package/index.html","d7d112eb4f6e2d6394f2773e78d7626f"],["/tags/random/index.html","ed631f441d856c9c9a5c6522831a9b0a"],["/tags/transition/index.html","3aac085a6bf03de1424e4257c657303c"],["/tags/三方类库/index.html","ffca5f097bd523bb839cb300da7c162e"],["/tags/依赖注入设计模式/index.html","25b340240d19532fec88b38e6619b600"],["/tags/值类型和值语义/index.html","e8c7a82efa5600d9d9d7ee4ecbab0439"],["/tags/内存管理/index.html","0423eaad52c78d941dc86dd9c86059d2"],["/tags/冒烟测试与回归测试/index.html","f8e328be0e741112c9c8dc865236b0f8"],["/tags/函数式编程/index.html","5378aa6b67483c0461bf30ca251c8b48"],["/tags/创建博客数据库/index.html","86869eb8602b48af9dee5ff749e4f562"],["/tags/初始化模式/index.html","e59471524dd178ef22f887a3296c2222"],["/tags/单例模式/index.html","a71376589bf694b71cb8734b01f24176"],["/tags/原型设计模式/index.html","37425e9e59b69b631de01623e3a260d3"],["/tags/命令设计模式/index.html","a3244c2539d668849f15b45f2d8fa17f"],["/tags/基本控制流/index.html","93a0823a87f031175696ecd8c2cf87d4"],["/tags/基础语法/index.html","dbf335bab6a7a85f85239f4f87e115c4"],["/tags/外观设计模式/index.html","9a710370b55cd13820bce849459704ae"],["/tags/委托设计模式/index.html","c618aa12ece13c3ac1551328f6ea27ae"],["/tags/子类化样式/index.html","39789fa2e93b8cc93b8cdd1cdc82d7fc"],["/tags/对象池设计模式/index.html","ab5125962816cb4ed52e18bdd5216772"],["/tags/小程序/index.html","2595d6bb12cfbd8d2a9eeebec0022f08"],["/tags/工厂方法设计模式/index.html","ff02ffdbe9aa42389b6280d04680b566"],["/tags/工厂模式/index.html","d086fb05d44e310853ac812443f7c81f"],["/tags/工厂设计模式/index.html","ddea0c9e2a1a7135a1b1cbd9f3da617f"],["/tags/开发技巧/index.html","1141225fb4ba852714cac0056ed6180c"],["/tags/开发记录/index.html","34882330deb67125b09523f9f6d81f9d"],["/tags/懒加载模式/index.html","607d6236f15dca6e1fe536d3253fe5a7"],["/tags/抽象工厂设计模式/index.html","608c86eaafff42291634eab813e8e10e"],["/tags/数据库/index.html","f195c4dd2fbc4fae5981dcadd5cd0e03"],["/tags/构造函数/index.html","9d7d4b71abe86c48454385711714c21a"],["/tags/架构设计/index.html","b26e2a4c618a10bbbe297da0b2091ec0"],["/tags/模块化/index.html","3fe863c97b63ebcca5cc3551893be67a"],["/tags/模式匹配/index.html","026d5723019132cdf6af930b6d4979c6"],["/tags/环境搭建与验证/index.html","adee23c6b8312a0f3613882a7e891c27"],["/tags/生成器模式/index.html","bde6ea21ec3f74899e2ac0485d9762cb"],["/tags/用户体验/index.html","4f1b97260f7dbce1d566ecf3d7e5b6a8"],["/tags/用户协议与隐私政策/index.html","2c8559deee115df0da7dc3a6c07d11f5"],["/tags/类型与操作/index.html","ae8a0edb206cd494998af7b99a0f65d0"],["/tags/系统设计/index.html","795bbccc361606234a8c00396adbea31"],["/tags/组件化/index.html","3facdbe29cae73f5b5b4b7db57afe3f6"],["/tags/自动化布局/index.html","855cba44df0efe6ddc87977a6130e018"],["/tags/自定义UIView/index.html","aa0080d963b66d15c8ce470ebdcebef4"],["/tags/自定义转场/index.html","59e26b21111458b32667779d20e18e23"],["/tags/自适应布局/index.html","cc563cd89c58b3d5404c77a385ee4b6e"],["/tags/表达式、变量和常量/index.html","79b292e3f5b1d094b8903720251f2b6c"],["/tags/设计模式/index.html","29d7b99786a0aaac4edda21ce4bf915b"],["/tags/设计模式/page/2/index.html","8b8b2fdf2f240e3081084134ff3a2047"],["/tags/设计模式/page/3/index.html","d59d57e034e5958b0181042621818d0a"],["/tags/访问控制和代码组织/index.html","cbdb019ec5efd4ebd10bb7ecbe48661c"],["/tags/运算符，下标和键路径/index.html","52f0b35f58b0e00a6e921bac74eb28bf"],["/tags/迭代器设计模式/index.html","871e8587013244d7462c6b4f7d6ee4c8"],["/tags/适配器设计模式/index.html","4b6022ecf544c14d417f90cd60de0a3c"],["/tags/逆向/index.html","52b308ae55b1352aee437eb278ac5cd9"],["/tags/错误处理/index.html","ae2a55573eb5c2943d088df128e98deb"],["/tags/静态工厂方法/index.html","013ce8a85e0cbfd687a5bd4c0a86decd"],["/tags/面向协议编程-OOP/index.html","081539bbfb4259f759b74eb0b979fb87"],["/tags/面试/index.html","49230078b34e942f2e4d3e67b083fb53"],["/tags/高级主题/index.html","590aaf52185c21d9532882b08313e0c1"],["/tags/高级协议和泛型/index.html","2c40e21a0a8c75a39845aa08fec18d87"],["/tags/高级控制流/index.html","26c08aaa2c6997b1afa4ed3425fe6aaa"],["/xcode 常用的快捷键/index.html","206bc97360302028ea4a573decd36e6e"],["/为iOS应用构建输入表单/index.html","7c012c513e4d7c11ba9b26fe92abe4d2"],["/产品开发的幕后花絮/index.html","2659e75f3bf52874e62b1fcf3a8f15a1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e8f81db3bf8741da01a71a5a36ed92c4"],["/冒烟测试与回归测试/index.html","b1b085e13f225c594adc99648c75917f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","78414d6ccbb5fa5e90dd2b659362e836"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d70998b1287c63ada3264d5b3d0a9afb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","96b7d2fae637895495662f27ffadce0d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","485f99b92dad91186705771c6109a39c"],["/在Swift中创建自定义集合/index.html","790663914ad3b08350f85234ec7aedaf"],["/在Swift中处理非可选选项/index.html","14fa0ecfe6bcbce27662f4db77631939"],["/在Swift中生成随机数/index.html","3109d0ae9b36c4fbca289df5941bc322"],["/在Swift中重构单例模式用法/index.html","6317e62f8b13dfcc972656fe1278d5b7"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","9dcce2f829ad515e2e361d91c1a80759"],["/如何为VIPER编写服务？/index.html","74e4134bd80bcd0ece380d5a91d5ad78"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","9bae280f6e01f50d9506b31bdc31c02f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9f1e993c757456101cb8b2dc9b3d57eb"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2999fac3366c9fe0a0f002fb78d3374a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f76eb829b313f05798f201ee768e1a21"],["/小程序: [CSS] 布局小技巧/index.html","a5e6ab7c8c23765f1ebbf0b096904c27"],["/掌握VIPER架构/index.html","3465d635d42a75c4e87be4785503529f"],["/揭秘 WordPress Hook 系统/index.html","190d07c4bdea67c056d12d209e9b9373"],["/比较工厂设计模式/index.html","fd3ec0c9a57434590aa28289037013b0"],["/深入了解Swift中的Grand Central Dispatch/index.html","977fa657e0ecc936ee7703ff6f1a2967"],["/深入研究Swift框架/index.html","115786c652529c6a484d93ef76adc5a2"],["/系统设计入门/index.html","d1cbae2d30a7af980d8e8f07b0e90e31"],["/组件化插件化与模块化/index.html","ef1f8ec1a6a2c20d077d7e2d25d57a51"],["/组件设计与SDK开发基本规范/index.html","e175afacc009823bd2bd7642a6ba2fed"],["/设计模式：单例模式/index.html","edd55d10c2b351b577dbd4efee62315a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9a5aa7d2e3b812c14f06a8f90c0b022b"],["/选择Swift而不是Objective-C的5个理由/index.html","25a19361e321f6996495b65b939b9a10"]];
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
