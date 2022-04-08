/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","7c256fdfde8b01cb197946eb04a922a1"],["/2020年iOS面试题总结(三)/index.html","0b9032da3d161b54996325c998db42c1"],["/2020年iOS面试题总结(二)/index.html","ec52afaa321ef49ce2bb4b25a64db80c"],["/Advanced Swift系列(一): Swift 简介/index.html","b88a4f05439800c1d9dee55bde1f51c0"],["/Advanced Swift系列(七): Strings/index.html","143c059894e2b5ad912bf9c06d610dc2"],["/Advanced Swift系列(三):  Optionals/index.html","bda48b63ce81842e46527996a50fd7de"],["/Advanced Swift系列(九): Protocols/index.html","6f0dc8ca3246888fd71eb9e66e1c2eaa"],["/Advanced Swift系列(二): Build-in Collections/index.html","5fc43fd337f277f62097354471afcf4f"],["/Advanced Swift系列(五): Structs and Classes/index.html","199d02665db2b76a998f270f3be904c3"],["/Advanced Swift系列(八): Generics/index.html","951919d01fff6b5f39e38959b3001ab2"],["/Advanced Swift系列(六):  Enums/index.html","a5ad83014b477452bc94ef87f223023f"],["/Advanced Swift系列(十): Collection Protocols/index.html","f1555a66ea98fd5609e8ea80464fee9f"],["/Advanced Swift系列(十一): Error Handling/index.html","98b5db79ba28a9344c0916fcf27a210a"],["/Advanced Swift系列(十三): Interoperability/index.html","c3c4ba519497d4e0321f41187f4109ed"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","72b490d1c25dd3d96336b67388dbc476"],["/Advanced Swift系列(四):  Functions/index.html","6bd2bf2450b74c77abef2437a2862135"],["/App Architecture系列(一):  简介/index.html","616ffc1423fbeb09017e6822d280d226"],["/CocoaPods 设定版本说明/index.html","994a38234ed1ca2b9cae71aa2e7454ec"],["/Functional Swift 初探/index.html","dfd3b899304060dcf7550610cf617e68"],["/Git 使用小技巧/index.html","edd76e7e5cb7b482cafc2e04c8f6a4eb"],["/Go Protobuf 初探/index.html","45c95cd64d1040ac2df8482675463af0"],["/Go mysql Tips/index.html","4a5ad731405e92a6cdeae54248e323f6"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","dd80f1fa2c459d4436616c8e0d1cdcc4"],["/Go 入门篇：2、Go 实效编程/index.html","91e8c7ef3e89400e0798934e3f6c961a"],["/Go 入门篇：3、Go 重要概念/index.html","13f738f12530c6d189c3e0f7bffe4877"],["/Go 基本语法初探(一)/index.html","32bfe80e8155f928e579dd041fbc09d9"],["/Linux VIM 命令及操作小结/index.html","26e157c39938c5942012646e9563e1b2"],["/MySQL 基本操作/index.html","6778c94107d1bc40707d790f20f0454a"],["/MySQL-列类型和数据完整性/index.html","e86ed886f70cfacad5fcc5b6e43f5f03"],["/MySQL-数据库设计和查询语句/index.html","680b2cfef8bc655a0ab306fa10d582f2"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","0b59160e57072346f98ea5edb5144e89"],["/NSCODER和SWIFT初始化/index.html","1cbad1c49a2f2b4e74bb49537b5f91b5"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","22cab299c9709aa6dab7e3067059ced9"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","79ace0c423ff8d46e83738ba715325d4"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e5fe6b072b33b1ce50a2b4bba68f617e"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9e7d5b3dfc7373bb202923052b6a90c3"],["/Sqlite 使用Tips/index.html","cf446d62fef10b375fa0e040e1639b1b"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","91913ea3c132f72bb3373709ab1ce630"],["/Swift 5使用UIImagePickerController拾取图像/index.html","975dc271227eb3feceaa125d8e467ee8"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","71e00bde6cfc6c3e05dfc05ea9010810"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","b804fd1884b6894a9271739b9a827048"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","841f6c5c585bffa9bc96e88c56466835"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","855d6b64f95d943ab173483e85ae2904"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","ca5782851aee26554dedaaef56f013d2"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","93e3fe7ed6afe1e5ee675c23170e2668"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","9e9e6477f0928e533e72e5be26a7481d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","7633ac4a55efca64eca11f194ca3e816"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","2316cdb861b5329690b00738b6eca3d7"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","5016f99cd801739db38d26708982b9bc"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","98cf1dc8a1f77bdbeb7b07d6270e2af3"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","7aeb682055db56b677c9289850af04ad"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","a3f17eb6393e8794cc1e7b03cb00448f"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2dc6d810542c110e3aab782b33633437"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4b4cf03508ff8708e8d5b573379333b4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","f050fef8a6c847423b7def59bfae9cdc"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9724193d0e2602441a746f6b3a0be0bb"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","0a0d464a882a2db626bf51869d51fe8f"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","bcde5b9e4ea646f91a25ba8ed07c1160"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4021d80149525efd737df9553113163b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8fe46cf1165c7b2ed3c30e7fc499e256"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","c63a89f58519b5f17bb814f994a24d9d"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6a54264d4b068f31eb908c62e8a587bb"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0b177aefcc895d113449fc241df32fcc"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4fabfe3bf215c5f770dc7d643bc46a7c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","1af7a3ba8f038c166145dc5b77b8aeae"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2c85e0b5585e5342f99ea55eca1df3af"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","54ba9fbc07bd25a9322c7d8a2c33fe68"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","7fe7283213833cee04c0940f1777eca8"],["/Swift CompactMap vs flatMap：差异说明/index.html","23f7e2b80984e00b0a73ef2b5a1af50a"],["/Swift Grand Central Dispatch 深入实践/index.html","5c45bc1e78e4f58fda99d1de26c1adb9"],["/Swift Lazy属性初始化/index.html","45d04a28df4d8ddee6225682dd94f333"],["/Swift Promises 初体验/index.html","887a5fb133d9862f951e31bf5489b46b"],["/Swift Promises 探究/index.html","99614eef6366765049c208e3d4630ac6"],["/Swift UICollectionView使用指南/index.html","81881d6fa72ad6b9cb861640f534b927"],["/Swift URLSession && Combine framework/index.html","f6b45c8ec417ee99eb6e8bc189ae270b"],["/Swift tips/index.html","851fe53ad0684ebf6a736b66fba45c9b"],["/Swift 三方库：GRDB 使用指北/index.html","441d4f208eaa7e8d842395538a4b9332"],["/Swift 唯一识别的视图/index.html","c3eb2ff0859329ee483b8eff3a4dac85"],["/Swift 如何学习现代UIKit？/index.html","749b9dab3eec1833fd07e14482d37c9a"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","abaf62b83d8afcbe12c2b0b5eb9521ab"],["/Swift 用 compactMap 替换 flatMap/index.html","215f9366086501eb172041c17a60923b"],["/Swift 选择和播放视频/index.html","8b5c90cee90f72273cd8ecdf114c4317"],["/SwiftUI 系列(一)：1、 简介/index.html","7e633845327f577cf72adb8d4bb4b4b7"],["/Swift中UIColor最佳实践/index.html","685b7d240e7fc92441fbadeb257984cd"],["/Swift中快速简单的工厂设计模式/index.html","58e7e967cebdf063ac8f55d5fc0e70e8"],["/Swift中构造函数与静态工厂方法的比较/index.html","38381f7f0c37622f177ac62d237da7f7"],["/Swift中的UITableView教程/index.html","17aeae2042825ed8b6cf5c2352ab918c"],["/Swift中的懒加载模式/index.html","22b1f09effc4d3b42a594813888802b5"],["/Swift中的模块和挂钩/index.html","bbebe48368155ecb6871e97199d2d5b1"],["/Swift使用布局锚点添加约束/index.html","c57579af962a5be5699c93ea4907bba7"],["/Swift依赖注入设计模式/index.html","86a0d03e04f3f6cb91b5c172fe8e93c6"],["/Swift关于Dependency Injection (DI)/index.html","1b77ecc1b9dcd5965b1a09dabd7891cc"],["/Swift初始化模式/index.html","7fe99b7b736c4841cf2e831b7ad41c83"],["/Swift单例模式/index.html","370100c2497fea9002bfb7f28024a024"],["/Swift原型设计模式/index.html","53080096a94fb88b57f51a0a12df1222"],["/Swift命令设计模式/index.html","ad69d70818d863760c634d76cfa15aca"],["/Swift外观设计模式/index.html","7cf423517a708168c9187219bc6ef533"],["/Swift委托设计模式/index.html","a575f7c67eef6164cc174a021eed259c"],["/Swift对象池设计模式/index.html","12a51787c9ac3c9e46cf4ca5d1f17c03"],["/Swift工厂方法设计模式/index.html","50f549557a89e73f64b08cb5a4915149"],["/Swift带闭包的懒惰初始化/index.html","7dae3244a3ab02a18b64a93039dc8753"],["/Swift抽象工厂设计模式/index.html","5a7dc283732fefb811b3e4d95b71039b"],["/Swift掌握iOS自动布局锚点/index.html","d4f332d417a9f6ef83e3c912864d2278"],["/Swift支持旋转的自适应单元格/index.html","889147c0b9814a9322ba99930c861761"],["/Swift枚举值/index.html","502a8a0b8f8f720bdf2722acc5a20c21"],["/Swift生成器模式/index.html","c287d36bf968a85b11de19592f365660"],["/Swift结合Xib文件自定义UIView/index.html","5511c4db7d0719cef1a430132e4d9540"],["/Swift编写的20个iOS库(一)/index.html","e9a3dbde346a248d2139d0757a6864d7"],["/Swift迭代器设计模式/index.html","ff488e2b41eca9c7aa81d36a1416f438"],["/Swift适配器设计模式/index.html","b76d992f8128e720de4aa3388245bcdc"],["/Swift静态工厂设计模式/index.html","3dfd0aab82c180ce18ea8d58ce5df613"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b68ab76d6b1c4deeef4c187920057c78"],["/UICollectionView data source and delegates/index.html","eed543f025319fbba64819701d9a54f0"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","915cb2170a724c2eb4b9f62fec9c7129"],["/UIKit初始化模式/index.html","427299f23be2e604c3d9744dfa25b5e1"],["/Ubuntu18.04替换国内源/index.html","e8a1fbf0ab376a34a0bb910bfa3ca3b2"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","00d7eaa9285887494fed10bd70a106d5"],["/Vapor系列 (一) :  Vapor 初探/index.html","8480fd7b03869c642416f5eecb9237f6"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b9ca0cd36fe4b1b49530fd9e43d02817"],["/Vapor系列 (二) :  Hello Vapor！/index.html","4903216de724e9f6382f6406d0d4e77b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","31c8a4357765e5ba858dddc962459180"],["/Vapor系列 (四) :  创建博客数据库/index.html","a42c94d5256f7cf4cb411304df806648"],["/Vapor系列(六): 徒手撸一个CMS/index.html","c91ff8e4dbed848e4c1520ac053998d6"],["/WKWebView与Native交互注意事项/index.html","dd5fbd00ac4c1bf85633441b0f32ffbe"],["/Xcode扩展/index.html","b9c6ea702dfad09cd5debda8d7ab8e52"],["/about/index.html","1b07f5a244c54e7e6bd78c4038452211"],["/appleOS的Networking示例/index.html","9c3f07a5921f16e7c2635700c304205c"],["/archives/2020/03/index.html","289a42dd4a4a4956cbf6622caa730f47"],["/archives/2020/04/index.html","f0da066745012b66eed5502541779fca"],["/archives/2020/04/page/2/index.html","6ebbfadd363e6ea34e28b8a9b9c8f20a"],["/archives/2020/04/page/3/index.html","6c764e0b457b6fe563a72ff211473aed"],["/archives/2020/04/page/4/index.html","bb769c764030baa2e2b5e3d9eca43f52"],["/archives/2020/04/page/5/index.html","2616bafd4fa5cafb985dfcc0bde27235"],["/archives/2020/04/page/6/index.html","c0c0a2f14aecd4d3b8313cda98c94897"],["/archives/2020/04/page/7/index.html","56e4916ee50792f753478dbecdbd5cb0"],["/archives/2020/04/page/8/index.html","4108b962c3729c3a91f68eb34a201be3"],["/archives/2020/05/index.html","2d32c2f618aa8eda870edbf0b619cb17"],["/archives/2020/05/page/2/index.html","6a2823f813245e1e813cd5f7293fa00b"],["/archives/2020/05/page/3/index.html","7472bfbfc56d93841c4bbdb836490d65"],["/archives/2020/05/page/4/index.html","cc128f82f9334457330d73a55c1027d8"],["/archives/2020/05/page/5/index.html","a3683c9b30da7b979d3836eb29380f73"],["/archives/2020/06/index.html","b75a8e943ba4cd743b1a22059b27187f"],["/archives/2020/06/page/2/index.html","79d60c7a26d279e2c50775e1d994fadb"],["/archives/2020/08/index.html","f3b20af609fd63e1a0bf83321665a7e0"],["/archives/2020/09/index.html","79f63505a187c8c64f8fe3a96fe4821b"],["/archives/2020/10/index.html","c39f80803faa497d9c07a44328426fb8"],["/archives/2020/11/index.html","e8b83912f44779e753da58ae2383c43f"],["/archives/2020/12/index.html","84ca41fe81e1a8cc82fc48b628685ecd"],["/archives/2020/index.html","8abc386cc83f859767fb20709473f832"],["/archives/2020/page/10/index.html","5f55dd8dd513d1b8d23bf669e63d76e5"],["/archives/2020/page/11/index.html","698dd0a6201b9dae43a015ae22f234a4"],["/archives/2020/page/12/index.html","746a242982d7ce9b1a3f00c32f0830a7"],["/archives/2020/page/13/index.html","3eab5f7c53fd506b22a994867026d4f9"],["/archives/2020/page/14/index.html","aedccdfa42fd37708d792108d377174e"],["/archives/2020/page/15/index.html","7b2cc687b8cc1ac4e4fcdd4f2acba281"],["/archives/2020/page/2/index.html","032568d93a1d440ed55ec09d3b8fb844"],["/archives/2020/page/3/index.html","7b96ce72c7466809d544346a52c316ab"],["/archives/2020/page/4/index.html","1cfc2f703c8a28aee02d3b3460ca5efd"],["/archives/2020/page/5/index.html","b46c975fd9e5b6bbd4273d48026eda93"],["/archives/2020/page/6/index.html","7373727aa0764be9eb7c7ace9569685c"],["/archives/2020/page/7/index.html","0abeb444c755708d726c8b508e4cd0e0"],["/archives/2020/page/8/index.html","78ec5319286e692ccfcc4c41d2425603"],["/archives/2020/page/9/index.html","228af58771bba02e6d76b94cc3dc9593"],["/archives/2021/03/index.html","6fb7d8b733aae3675a10e4810129fc28"],["/archives/2021/04/index.html","6c80656c88c4e97960f651bfda3e7c71"],["/archives/2021/05/index.html","ca18f025037023f82f46e13beac7e8f4"],["/archives/2021/06/index.html","02a92e027a8b8ac6175a5b7f2691d7c9"],["/archives/2021/07/index.html","406e4a2f5a93536319e932dd0eb01512"],["/archives/2021/08/index.html","1b7fcfbc8f79294200348de352d0258b"],["/archives/2021/09/index.html","3ee4fbe74371a3981dce7aac5275aac0"],["/archives/2021/11/index.html","4ebf29174d594a9494cf6992316fd7ce"],["/archives/2021/12/index.html","d15f02a66f40632406677134d69d12b2"],["/archives/2021/index.html","423a3170bb9f305fcb4232b80624ec62"],["/archives/2021/page/2/index.html","335e8e7a1bb43cec97fef84303bb1d2e"],["/archives/2021/page/3/index.html","361ba14972524d9fbc537b0fe455956c"],["/archives/2022/03/index.html","58b05a76136dd5a565db9802601f083b"],["/archives/2022/index.html","72e448d9f0acee7ee5fb5e69d2a570f9"],["/archives/index.html","1a8595b0f3ece772e5d41a1eff7a1842"],["/archives/page/10/index.html","a7f4ec3b4a989b0c21fa98ffbd158c96"],["/archives/page/11/index.html","603572ded9e29a23217805263047556d"],["/archives/page/12/index.html","f9beddf2f51f1fe80c01b470158a3576"],["/archives/page/13/index.html","397072798645bfc8fa76b8b3dbf70fda"],["/archives/page/14/index.html","5f0949c2d2a8f8863ac4fca986b11d1a"],["/archives/page/15/index.html","0951d1e27d55c8ae9c3d3c9dc7e503da"],["/archives/page/16/index.html","28e3057ee5069a041676f74babdd6c05"],["/archives/page/17/index.html","c5bdbfc3ab64a8ff8a04e70d8b59e69d"],["/archives/page/2/index.html","65f46f35b5bffa2504c1c6e05227abdb"],["/archives/page/3/index.html","088eacfb8c09a2bc3f04c6432011dfa3"],["/archives/page/4/index.html","d55ab7a605febd7e2482e8d0d3ceed06"],["/archives/page/5/index.html","373d2f52caa5eb07a8e64ca837594f3c"],["/archives/page/6/index.html","469a9cb11473b3b24cd4ef2bee15e13f"],["/archives/page/7/index.html","583280a03ac7ff3c6b10cc31937760bb"],["/archives/page/8/index.html","e4ec42d1a5959bc1f72a62ecf1da751b"],["/archives/page/9/index.html","31fe05a4d7690cc9f489ef1dcea401e3"],["/bugly 上传dYSM文件小记/index.html","ecbafd058377b64eb9e7b67cc56f5f0a"],["/categories/Advanced-Swift/index.html","c24a82a131daa17ec97aa41eaa67fbc7"],["/categories/Advanced-Swift/page/2/index.html","64592a140d06172a493236c81f5818db"],["/categories/App-Architecture/index.html","b10ca09cf26cd125ae3ac09676739f8f"],["/categories/Array/index.html","230bbc0de2c2d7cdbc55cf5721627f24"],["/categories/CocoaPods/index.html","34a3578dc2db9d86f76ba98de95617e9"],["/categories/Codable-protocol/index.html","c19829812fe05c0e52025908e031a5b4"],["/categories/Combine-framework/index.html","c1b44a36cd76cf45dbbafa9172b997f6"],["/categories/Combine/index.html","8ef0c8332fe3130d12dac6785915f4a1"],["/categories/GO/index.html","1ab747b78ebe11c6e66697b0f558c06e"],["/categories/GRDB/index.html","8ea7bb97734f0691a7cef49de6f33ad0"],["/categories/Go-入门篇/index.html","db1dfab38660f54e88f293e746be8bc7"],["/categories/Grand-Central-Dispatch/index.html","78d25e18fe79349915142075fd215da6"],["/categories/Homebrew/index.html","32b69ca0d963d94c5ccf6dc04c38a6b4"],["/categories/Linux/index.html","d7602143d134e9e5233d40d049a9fafe"],["/categories/MySQL/index.html","ffbea8ebb10bce5984e64acf1885fde7"],["/categories/Promises/index.html","47c5d2d9ae26f3d4b99939410cfff512"],["/categories/Protobuf/index.html","c161143b54e8c381f655287483b189b3"],["/categories/Result-Type/index.html","cd0a6b5b5e18972feac57a1d70d8d240"],["/categories/RxSwift/index.html","bdda6b20b149ecfb8afbc1ecbfcc8397"],["/categories/Server/index.html","d135ec43d4dcf97725f7dd0fc976df40"],["/categories/Sqlite/index.html","d58efa2e6b0414ca2f7b2b2c3a1872ee"],["/categories/Swift-Apprentice/index.html","253aa8d5b2657e82935a4d8ba31e291c"],["/categories/Swift-Apprentice/page/2/index.html","b12627b13f01b09728c6c8c8eebca48c"],["/categories/Swift-Apprentice/page/3/index.html","0d7bc60c4f6f23b4ec3d179e470323bf"],["/categories/Swift-源码阅读/index.html","84823d8020499a67ef8d28857d8f34f3"],["/categories/Swift/index.html","dd98846493d562140381578c5032496d"],["/categories/Swift/page/10/index.html","ffcd64a6040605980a60324726d171a6"],["/categories/Swift/page/11/index.html","fc468f5acfec4c8340c2d47a3bdc693b"],["/categories/Swift/page/12/index.html","c6a774bc57fadc7d65175f4b70fa67a0"],["/categories/Swift/page/13/index.html","ef5514aec57a7db3a7e2acc367817b83"],["/categories/Swift/page/14/index.html","43fbed068033625edb086fb551d61b5f"],["/categories/Swift/page/2/index.html","479655c0f542c5d324beda0600672f87"],["/categories/Swift/page/3/index.html","b64df8d4301ff2a9746dc2dee67cbec9"],["/categories/Swift/page/4/index.html","9eb3220441d0828495478a3df17b07e8"],["/categories/Swift/page/5/index.html","adfdcdee2b1902e8551e4eac83df87f0"],["/categories/Swift/page/6/index.html","ee4cae9bad8c036a6d71f44e69d7b45b"],["/categories/Swift/page/7/index.html","d8952b56c7842a70065944d3bc80e490"],["/categories/Swift/page/8/index.html","98946842948a2248455650fdfc97b7f9"],["/categories/Swift/page/9/index.html","4c9b81822023f9593bc99b3f0bea1037"],["/categories/Swift5-2/index.html","dd3faf1c7870578b4e6aab240d5d82aa"],["/categories/SwiftLint/index.html","3289a535f6cd335e4dbabd869894d246"],["/categories/SwiftUI/index.html","5d652095a099c821d227221c29bc900c"],["/categories/UICollectionView/index.html","fa9528dda68766b3ee66dc4d8bffb672"],["/categories/UIImagePickerController/index.html","4cfbc9313c298dd6356859cf3b97f82a"],["/categories/UIKit/index.html","3b516df87da818e759c7045ffc48685c"],["/categories/UIKit/page/2/index.html","43351db9aaafa0fa251d1ff2c7e2b541"],["/categories/UIKit/page/3/index.html","3e82ee6c5ac8a60b54ab6efbf918f222"],["/categories/UIKit/page/4/index.html","5ede03a570ad8efe7df5e1076066131d"],["/categories/UIKit/page/5/index.html","7366a73ba1296caacf194f64774e4c42"],["/categories/UITableView/index.html","228f8facf3d45bdc5be246703d91b641"],["/categories/Ubuntu18-04/index.html","aa474cb3586f9f3b3455ecc5391d0110"],["/categories/Ubuntu软件源/index.html","9e758c01c3a9a37ff5f1596ba1e87629"],["/categories/Uniquely-identifying-views/index.html","a3ce4d76ac2e9cd29e3da06329d8342d"],["/categories/VIPER/index.html","57ab6540bcab5982a7ee9e63678ee29f"],["/categories/Vapor-4-0/index.html","e94c2765a2b62a202d284855828a41f9"],["/categories/Vapor4-0/index.html","e71b2d71cca05bc16aaacce886a9b25b"],["/categories/Vim/index.html","5805e8c1c111c77441c857367e59ab91"],["/categories/WKWebView/index.html","3ea8eabe5aff524dac064cc1c8d26d80"],["/categories/Xcode/index.html","9063a14775edb24d5ab4c044ca783571"],["/categories/appleOS-Networking/index.html","1746f4b89ec4f2c4d3936414344d97e1"],["/categories/bugly/index.html","a47d219e37ef4bee995d207ac3425fd7"],["/categories/enum/index.html","590b111f6674e5a7aab46f0d93f89aba"],["/categories/git/index.html","de8fff937595930a23d7c4ae03e0cc08"],["/categories/hexo/index.html","cf421124b9a027325c62caa771d5135f"],["/categories/iCloud/index.html","9028e5a5b8c636e89879fc1a62858f1f"],["/categories/iOS/index.html","4c76431528796c2e4cdf06fc8b4159f6"],["/categories/iOS/page/10/index.html","95f4571f5d3d4e1023e819886491049b"],["/categories/iOS/page/11/index.html","20c996821710bcb28e556d84eedf6a22"],["/categories/iOS/page/12/index.html","ee4b4675dfb2364b74db635a62f311f0"],["/categories/iOS/page/13/index.html","14a53fafabb9bb81918c44fd4e9a155c"],["/categories/iOS/page/14/index.html","9cfe2eb4acb132545efbb22848fbfac2"],["/categories/iOS/page/2/index.html","1c07516cbb4a3554a3c96a23866e88be"],["/categories/iOS/page/3/index.html","a143ba989093e71664dae550bfe00ca1"],["/categories/iOS/page/4/index.html","feed7f9c6ddd28f65eef6f54413c7526"],["/categories/iOS/page/5/index.html","f9129ca0702be5995a50c4c3482db699"],["/categories/iOS/page/6/index.html","55f1a2834a577f0c3260efe804ee0fe7"],["/categories/iOS/page/7/index.html","b8c909997a282b2a765b29838ac6779c"],["/categories/iOS/page/8/index.html","b6aa2e81b52af8b7d0a2a243d97a7d29"],["/categories/iOS/page/9/index.html","68b23802e7d9afae6aa43aa7ed6cfc1e"],["/categories/iOS面试题/index.html","f3a757e09550c9ec54afca638e2d1641"],["/categories/index.html","a5eb6b9e875a24f52be2e48289b8b80d"],["/categories/random/index.html","102144f7996673fb304d312ecb6a23c5"],["/categories/三方类库/index.html","8ccb8de8848cb31f7b1fd1dccba20788"],["/categories/函数式编程/index.html","0ad5f982fb60b14abb44d91f06738771"],["/categories/子类化样式/index.html","88e89c75321faeb5439dc119e634c259"],["/categories/开发技巧/index.html","05787d88905d454b1541e2ae774a312d"],["/categories/开发记录/index.html","06cb89bfbb946bd749aa220fcea474c4"],["/categories/数据库/index.html","d6e8fad13ccd794e9078d6fa04b5eb02"],["/categories/架构设计/index.html","5fbae29c6bf2c15c594f298d46fbff86"],["/categories/测试/index.html","031c2cd7182660de5043ff36a0e9d8b3"],["/categories/用户体验/index.html","f144ff0208b3c9ffef92051ff189b03b"],["/categories/用户协议与隐私政策/index.html","aef133765e8fe4a5320d73c7bb51174b"],["/categories/设计模式/index.html","80641c7c9da640fb35093a733dbd653b"],["/categories/设计模式/page/2/index.html","f5beecd59d3ff2d2f0317c61f6bfebf5"],["/categories/设计模式/page/3/index.html","9f15f7f68d8477ecd10e85197d86396d"],["/css/main.css","6fe777004750704a7baa7c89b353540d"],["/hexo部署失败/index.html","10f28489fde0221eb2f650d32287623a"],["/iOS 15 适配/index.html","accff5298464ff740fe1097d626c19cd"],["/iOS VIPER架构深入实践/index.html","60ac1e99b50b19baf99edb764e46523b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","2c83956ea2235e46ec03b8a65d76f35b"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","7527a4485c1725b62181775c896efe2a"],["/iOS 自定义视图，输入表单和错误提示/index.html","d44a8db454c7e9288e1ea3eee6d83769"],["/iOS如何使用iCloud文档？/index.html","ce77d2a5633762fb208408d2a7ba5514"],["/iOS子类化样式/index.html","d41976ad6c8d964a1d682a31786eee39"],["/iOS开发记录<一>/index.html","e576d71039d31d5771b9d2abca633242"],["/iOS自动化布局编程/index.html","f3a96e2e0c9aa9421c47b9c5bee47bb3"],["/iOS自定义转场(By Swift)/index.html","31ba21e52a171f4c15589391ccaac4db"],["/iOS项目架构：使用VIPER/index.html","88226e7a0ff1c352a94e39a8cc1b5bc4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","5430f04ee5fc7d5ffe7c89c59c53832b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a4b8907283c75fd9f7eee7f96f0e31bb"],["/page/10/index.html","60a79518c59e270cd31189b01f0525eb"],["/page/11/index.html","498dc2e2cf96f5384eefa393d52576da"],["/page/12/index.html","666dcd4fc0d54b72e56a710040602349"],["/page/13/index.html","82c000608f544669f29ba52e39e8971f"],["/page/14/index.html","faf91b8c5201cbe0ee7c9a4d3edb5b37"],["/page/15/index.html","f0b8ad5578feeca5073a2dbb1efe434b"],["/page/16/index.html","43569bbbf303342594f666a38ab70b6b"],["/page/17/index.html","ce5d5f5753ddf1841881c3e553ca7467"],["/page/2/index.html","3bd6d0b797a411eef7518619b427fd4b"],["/page/3/index.html","31b78f09cd55b7e34b91434a3cb316f7"],["/page/4/index.html","7dd286c980a67a04b27a38cd96103623"],["/page/5/index.html","bc7ef7df4b2ffd7223b3f803059f01c4"],["/page/6/index.html","6e3b772866344603cc64c00cb43d9596"],["/page/7/index.html","5fb9899e90daf21a6220558952f9d968"],["/page/8/index.html","ae74bc8079c92af1f227ad816e383c6b"],["/page/9/index.html","d86a734b47da198d007e44971ddf6cd4"],["/schedule/index.html","8f8338f8db45875fb6d0f26206d5f25d"],["/storyAppPrivacy/index.html","67a31df5961122d4c0743103c9959e5f"],["/sw-register.js","f7fa0febb6e62c24a1c2dc4caf1c5625"],["/swift 专题：函数/index.html","73e79c4f8ad982e0b5f47f20828033fb"],["/swift 专题：闭包/index.html","42ad33869a9e9db58729f37648a514fd"],["/tags/Advanced-Classes/index.html","8eaaf34cf6443011864efac554bbea90"],["/tags/Advanced-Swift/index.html","74c5b27e4c8f643cb406777de4d8a9d1"],["/tags/Advanced-Swift/page/2/index.html","31aec09e1d0709cc587197152519798a"],["/tags/App-Architecture/index.html","db6739dc572551ca49977ddb92743242"],["/tags/Array/index.html","952c3d201368fc5374ee240d0471375e"],["/tags/Arrays-Dictionaries-Sets/index.html","b23b31a37c2e846600d34a17a035c7cc"],["/tags/Authentication/index.html","bf655732568ed325a2c4ec0648d6b653"],["/tags/Build-in-Collections/index.html","ecb9f38dd3cdc516f1c6c8782fd4a093"],["/tags/Building-Your-Own-Types/index.html","4c916502353c1a8ecfe028c7bebe8b0c"],["/tags/CMS/index.html","55afde2476fd7ea6d7386d9beaa49b7f"],["/tags/Classes/index.html","824ba41b52e46209094bb8601f5d69e0"],["/tags/CocoaPods/index.html","8ef7b9ecfdfded0c7b6209840bd46adc"],["/tags/Codable-protocol/index.html","18491b840d71225c70fa6d924ae3201f"],["/tags/Collection-Iteration-with-Closures/index.html","ae6b5e537c43f16381595b8b848b8db1"],["/tags/Collection-Protocols/index.html","6998cc1a95f477dd08ce07b204be3a15"],["/tags/Collection-Types/index.html","7f45c39cf7ded99979678218e8f206ce"],["/tags/Collection/index.html","89356c9e2f5ce1f239ecb426f7034316"],["/tags/Collections/index.html","9a2f386a6f49055ea0f9b9180bf2b499"],["/tags/Combine-framework/index.html","035b38d9556fb1ed3f939086c7a828e1"],["/tags/Combine/index.html","5f54151e3af0b22900966d4738e69fc8"],["/tags/Dependency-Injection/index.html","c85fc1fdf5e34b63b74ee168a1a4fedf"],["/tags/Encoding-Decoding-Types/index.html","9d4488b8fa625f9656083bd150ef6fed"],["/tags/Encoding-and-Decoding/index.html","c19793cdbf693bf3d7af27ada2767f97"],["/tags/Enumerations/index.html","9dc7a2f86a221f4becae7b69f295d3ce"],["/tags/Enums/index.html","11edb2f9931a2ccdeebe71e218e0a03b"],["/tags/Error-Handling/index.html","d74063e8bc6af0c481183712cfc1fc2c"],["/tags/Functions/index.html","3ae4da360dff3158adf58a45dcd3127d"],["/tags/GO/index.html","5350504a7d453e4c5aa174928c1f1f84"],["/tags/GRDB/index.html","f3da835959bd63e29bc582cc2c1c7a98"],["/tags/Generics/index.html","604c50af58e5dafbf4825f37d134c889"],["/tags/Grand-Central-Dispatch/index.html","7cd9d38f101ab4f847bd4e6742949053"],["/tags/Hello-Vapor/index.html","9c6cb4b65c04bd49a590d4ab7e7f688d"],["/tags/Homebrew/index.html","06be1dd996afec61a5a02d2ca5e736a7"],["/tags/Interoperability/index.html","828cd29390a69cc3b204e37f89fa898d"],["/tags/Introduction/index.html","692ff2fb5c7a46d7778ad54139688e73"],["/tags/Leaf/index.html","25f5fbc5e40bc72832f395f3e58049ea"],["/tags/Linux/index.html","4ba7f1bb293b12732afbe0e5bb839e47"],["/tags/Methods/index.html","4ba7567940b5773f2186cc16dc86e048"],["/tags/Modules-And-Hooks/index.html","211416cb84270b94cee2f4c327b964d5"],["/tags/MySQL/index.html","bc15b8313ef0b785655450a4b72eb3c5"],["/tags/Optionals/index.html","54716a5d44d1f0418ba6d3d66cdf55fb"],["/tags/Promises/index.html","3d034b14331b431359b6ae664b5bd323"],["/tags/Properties/index.html","fa503c92e3c1ac2d970f1c9ef05c6523"],["/tags/Protobuf/index.html","67a0e3142f4b4e75f1b23dd257b8e3fb"],["/tags/Protocols/index.html","f64425f6e033581d5a8115b908c5f458"],["/tags/Result-Type/index.html","194ea5baf1b1ccd6416dab0f08a43d5d"],["/tags/RxSwift/index.html","49eb78e2c2ba822597004f03811d1bbe"],["/tags/Server/index.html","a906da64640c3589e79986b905362e3b"],["/tags/Session/index.html","45bcc44f3a8b421a391991da0dc8a649"],["/tags/Sqlite/index.html","2e4b119dc43a882f253323d193f8d045"],["/tags/Strings/index.html","15885eebd4fe60b10fe86aa6d848f425"],["/tags/Structs-and-Classes/index.html","4179a07a8137073ac3557e9c1d9cc8fe"],["/tags/Structures/index.html","6ddcad2c3b501d918a5112e4e612a82b"],["/tags/Swift-5-0/index.html","8e35a1ac25a4288e1bb08b83d84c55be"],["/tags/Swift-5-0/page/2/index.html","25a362a1b071ecf2e430cd696fc25749"],["/tags/Swift-5-0/page/3/index.html","bbf10907b12901177fd63b0fc371a515"],["/tags/Swift-5-0/page/4/index.html","a10619347655946ee0dabf9fc65f0805"],["/tags/Swift-5-0/page/5/index.html","b90b5b13fbe7def61fdb33e4e53d1316"],["/tags/Swift-Apprentice/index.html","72204185e2d0e4547d8f0e79c9818378"],["/tags/Swift-Apprentice/page/2/index.html","40925058f61290ca6a733aad8b12a810"],["/tags/Swift-Apprentice/page/3/index.html","11fabb0b094e9793439172bb0e46d6ef"],["/tags/Swift-Package-Manager/index.html","37b21566169c416fda2da79d1c31bdc3"],["/tags/Swift-源码阅读/index.html","44d66c1b3c6785de3f74525c0cf45fe9"],["/tags/Swift/index.html","5dc010f80a702992b55f46026fa26778"],["/tags/Swift/page/10/index.html","ac555b023658ef0f5ec06ddae58505cf"],["/tags/Swift/page/11/index.html","bc0372ca87624c532e6ed3ec722c3b54"],["/tags/Swift/page/12/index.html","2ce58c4e684aab334a090e1108e1f67c"],["/tags/Swift/page/13/index.html","b2296893bfe4227da2e8606a4650e448"],["/tags/Swift/page/14/index.html","ce480b6705875de0704f4280fde42adb"],["/tags/Swift/page/2/index.html","c075e62a3ffac059f35807e4a3f5259a"],["/tags/Swift/page/3/index.html","78eaad6f08c4deecf9ea3f92d7e25feb"],["/tags/Swift/page/4/index.html","a39f3628714c64e15e0f8f9529febbf1"],["/tags/Swift/page/5/index.html","4c822654feaedc5e5b397d56b1d1e05d"],["/tags/Swift/page/6/index.html","f58e603b365dd9192a4fa2c93480160c"],["/tags/Swift/page/7/index.html","43ffe7d44c832a1da3151edaec7fff9b"],["/tags/Swift/page/8/index.html","d21bd137e5e9fcb16b0079bf9ad7b414"],["/tags/Swift/page/9/index.html","1358f57e20d878874358d74eb84a2104"],["/tags/SwiftLint/index.html","e51dc6a99c0f5bcab95687fcbfaf5927"],["/tags/SwiftUI/index.html","f08b17a691f18d98d78efe39a6751851"],["/tags/UICollectionView/index.html","f6f8693835a6437312a0aca3755d551a"],["/tags/UIColor/index.html","8a5b9247784528c78974fd52de65d9f1"],["/tags/UIImagePickerController/index.html","1d80924d681f8b0c40dea7aa9468ccd9"],["/tags/UIKit/index.html","a8f29b234047890b55b7e0973bf8b82f"],["/tags/UIKit/page/2/index.html","5ad2d3cb0ed32cd677de1981d5d46624"],["/tags/UIKit/page/3/index.html","3820e6434a879a1f780829cb29b1fc5e"],["/tags/UIKit/page/4/index.html","bedece3f61748682e03652ecbb4362a8"],["/tags/UIKit/page/5/index.html","6df17a75bf8bb31b90080bcfb8ea8e22"],["/tags/UITableView/index.html","f46edbad73bd7515b06fb86683d07a29"],["/tags/Ubuntu/index.html","a0295ce536512409dd70c71da4b15871"],["/tags/Uniquely-identifying-views/index.html","eb4ae328d6470f26b7a424a18aeb2823"],["/tags/VIPER/index.html","f947c1103bb3da042608e652d1626855"],["/tags/VMware/index.html","7a5e3aa907faebb0790ace0c02b5377e"],["/tags/Vapor-4-0/index.html","ae7eee0af5a1b1cd594b31cc4add0e30"],["/tags/Vapor-初探/index.html","e7f5d049dab904518b2a54966ff1ecec"],["/tags/Vim/index.html","0099bcf3ffca89e4ab2f8e45deb4caf1"],["/tags/WKWebView/index.html","2805c75bf155cf32a87052e768b95677"],["/tags/Xcode/index.html","91fd7351bfbb7e41cb774c3dfa107441"],["/tags/appleOS-Networking/index.html","b308a68590d01d90cffca626832782c4"],["/tags/bugly/index.html","ecd6d974e5d0155b3ab0928ccb7c814d"],["/tags/enum/index.html","0601e3c37a049fe19e6229539ef43785"],["/tags/git/index.html","d2aa9656bdcf73b1d7888b56bf8e0adc"],["/tags/hexo/index.html","39bec603777855cc33140c02ddb3864e"],["/tags/iCloud/index.html","5a69a3753839c07134814b3301a2a878"],["/tags/iOS/index.html","9e55f57bb41b27e9fd593663133aa1c9"],["/tags/iOS/page/10/index.html","5a4344a091cd4a037da43a957368df14"],["/tags/iOS/page/11/index.html","c76db42a40ee5c2ec8c66bcefdbe07ab"],["/tags/iOS/page/12/index.html","25f51659edc0165868a3eb9aa720f7c0"],["/tags/iOS/page/13/index.html","c6835ef07c716533602f9832454a3b71"],["/tags/iOS/page/14/index.html","1c52ba06f4cf10b460863a1222aeb8df"],["/tags/iOS/page/2/index.html","c1a93e62e7606db04618d4e619a8f463"],["/tags/iOS/page/3/index.html","2c854775155e3239acaa32b4f6544474"],["/tags/iOS/page/4/index.html","5408919deaddb59250ceec83a40cfc2f"],["/tags/iOS/page/5/index.html","21d99f4e0123ef2c9bd1123949dcfa8d"],["/tags/iOS/page/6/index.html","3d5e4e249908f005f91ef0fd611adb2c"],["/tags/iOS/page/7/index.html","a4e3200cee4cc100f6b0611b0f909f24"],["/tags/iOS/page/8/index.html","724e08203bf0b4bebc2fad27a278fb14"],["/tags/iOS/page/9/index.html","54e1d7fe9c57cfd101e1d245794544c2"],["/tags/iOS面试题/index.html","f3a7fb066bfe5cd47b9b63f04a888ae9"],["/tags/index.html","b20d61e8390368ba878eec1113634d7b"],["/tags/non-optional/index.html","90f369d938c528eb2fbe888a23ed066b"],["/tags/random/index.html","ca4b50e0aa41db90fa3516bee51be07b"],["/tags/transition/index.html","2655d2c0bff09beb05028cee88c9a89b"],["/tags/三方类库/index.html","245a95796d427a449d9d05a9f17c1718"],["/tags/依赖注入设计模式/index.html","7acabb9ca60caa13e71866bcf33996bc"],["/tags/值类型和值语义/index.html","5526f8dd1e014e522610260b9d0aee28"],["/tags/内存管理/index.html","247fa7276951823f0feb4d5a5f2433e3"],["/tags/冒烟测试与回归测试/index.html","baa271ecf10adf7399f6488560c36ce5"],["/tags/函数式编程/index.html","c0ad0220edabe4950cfcb2bc324aaaca"],["/tags/创建博客数据库/index.html","235f9b4298d931c6962b76a56ce570bb"],["/tags/初始化模式/index.html","13ac7e5a96534c00b3699722febad3b2"],["/tags/单例模式/index.html","63df9a2e5b356301da8153591e436f81"],["/tags/原型设计模式/index.html","dfd4156a7c3bc34f66c62d63261c5622"],["/tags/命令设计模式/index.html","77556d4e0a2c89fb0dfe302b6e16a18c"],["/tags/基本控制流/index.html","497f1d018f5d065a22076037d2301bf3"],["/tags/基础语法/index.html","6daa832238558cde354db221382c3341"],["/tags/外观设计模式/index.html","93178f09ea43a118fb0301a57388b142"],["/tags/委托设计模式/index.html","a701823fdbe65b3894a246d2c133f266"],["/tags/子类化样式/index.html","cd79318f6347f6c51f48e1a211e63de2"],["/tags/对象池设计模式/index.html","55824de7a5872d2e768a1a15db1f0f03"],["/tags/工厂方法设计模式/index.html","bc5052547e63eb909806ea162cb1adf9"],["/tags/工厂模式/index.html","41533f61847cb0b50600b45920e73f93"],["/tags/工厂设计模式/index.html","60cf1ce30b8d9302a68004ffc456f7e4"],["/tags/开发技巧/index.html","c7496885607a0ae5658ede4bf13908d2"],["/tags/开发记录/index.html","54f3b926ff5f6f2fc3799e71976d2c44"],["/tags/懒加载模式/index.html","c1bacb04850abf4eb52786bb6c3bab22"],["/tags/抽象工厂设计模式/index.html","588839b6d1cb02a7085000704e750146"],["/tags/数据库/index.html","a2dc118d5d9258ee632b6be63306af7c"],["/tags/构造函数/index.html","381694100fa94283ebdcb780ddb230a7"],["/tags/架构设计/index.html","fb2a4771c332b696186016bbac5d2f74"],["/tags/模式匹配/index.html","637cd1b6ee11ed02a073b6831485bf91"],["/tags/环境搭建与验证/index.html","f84077da5fd36d640b16f709bc4816e6"],["/tags/生成器模式/index.html","4a70fdc5824622221128ee1eab09d4f5"],["/tags/用户体验/index.html","71574adb7c003c1f51f0445370095160"],["/tags/用户协议与隐私政策/index.html","7d6b7529dd2033e49a547182d204cc0f"],["/tags/类型与操作/index.html","5a24a6e20628d95afcbcd452a566d906"],["/tags/自动化布局/index.html","071e76425eeefef68d295653a4d7606b"],["/tags/自定义UIView/index.html","cded685e3e1d87245855860fb14c4f63"],["/tags/自定义转场/index.html","9b0f0e2a278d052fa88db3bd67d72b6f"],["/tags/自适应布局/index.html","705311c78eb16eb887cfda961cfe02ba"],["/tags/表达式、变量和常量/index.html","3ad631b10ec7d5c65b69877cf4e41d1f"],["/tags/设计模式/index.html","63ea7b910b52a0c79146e0b9e17dbf24"],["/tags/设计模式/page/2/index.html","c5b3e3434d9548dfbdc710396895016c"],["/tags/设计模式/page/3/index.html","defdc267b4d47a838581c960f818c6a9"],["/tags/访问控制和代码组织/index.html","e1074c5617dc08a1ad3e99ee2eda8968"],["/tags/运算符，下标和键路径/index.html","6ae09de0ca69f1ae5ea8abc8bbcf615e"],["/tags/迭代器设计模式/index.html","7c7a9c11e6d65a71a433d34a1bda645e"],["/tags/适配器设计模式/index.html","48ba1c106762ec459cacbf4b9844edfe"],["/tags/错误处理/index.html","b8cc3f9cc339cc2cb08fc1ed81019846"],["/tags/静态工厂方法/index.html","23c1215a0450d0d78d295a6c85ff2cc2"],["/tags/面向协议编程-OOP/index.html","8ccff7e3fc7594e8ccb53c8fa5d50228"],["/tags/高级主题/index.html","20958ff3e64740f93263b37eea75bfa3"],["/tags/高级协议和泛型/index.html","f18d342266d975aa8a9496da0cbd19ec"],["/tags/高级控制流/index.html","1c959cb6a72f54c5b8e9e2bcfb1b0f63"],["/xcode 常用的快捷键/index.html","3da931139c341d43f36508da86f194f1"],["/为iOS应用构建输入表单/index.html","4945694c39b7637f904098658fa8e469"],["/产品开发的幕后花絮/index.html","59e9799f840c61f9cdca7a2fc1bed21f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","72d74f6020ba05b0680578c08f284f8e"],["/冒烟测试与回归测试/index.html","da37e36d3d876675e9842e8fd707e26a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","afb3bf95dff84fdb5796e9c4a3b0c449"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","757c77dbcb42823136c0328775b13545"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9fd78aa0c6c5f878a64681a085b415a9"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0ac752a2cab33d58087e96529ae29e07"],["/在Swift中创建自定义集合/index.html","aa911ac13b4c519646282725e5bce781"],["/在Swift中处理非可选选项/index.html","21a548217b046c2087f03589efb96db6"],["/在Swift中生成随机数/index.html","eb81979f00ecf02a349267c86d46d8f4"],["/在Swift中重构单例模式用法/index.html","3ce5b276d0eba91bfd1338c5e0300539"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","12c81396e34b7e2f2276aeeae2c4d800"],["/如何为VIPER编写服务？/index.html","efc3f19ea0b3f9b8447e8e037deb7bad"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3a10bfb58abc034b09cad319df76bedf"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ebf97593fc17699a4e41a4e0611365cc"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","f4c0a83445b8291b4c654fae0aeb3629"],["/如何使用VIPER构建SwiftUI Apps？/index.html","239388a2ee9ae35ade95b931e5ef4ad4"],["/掌握VIPER架构/index.html","00581327925d9b26118a388b4ffce162"],["/揭秘 WordPress Hook 系统/index.html","68af708cadb8947bb1870a3336cea0ed"],["/比较工厂设计模式/index.html","314f5863cb5446ccf7b52743f06447ab"],["/深入了解Swift中的Grand Central Dispatch/index.html","9c30e0c1478bda3d93fec3aba4c3d114"],["/深入研究Swift框架/index.html","6b44ce7b3ff84b1db64400031565d104"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6b96bb5718a92b7d477a4940a4c7cda5"],["/选择Swift而不是Objective-C的5个理由/index.html","f6b777d120fe1ed33561d254c0540182"]];
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
