/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","40ed5630239e1e1f6ba306de15d35163"],["/2020年iOS面试题总结(三)/index.html","8cbc72e001e613d5204ba756b23dfbe8"],["/2020年iOS面试题总结(二)/index.html","0effd3d628138d35b66bd02df6f3064d"],["/2022 iOS 面试题(附答案)/index.html","f8d9d83e085ef0ee2a8c4f68e74bcf77"],["/Advanced Swift系列(一): Swift 简介/index.html","754a8325056af75ff7047033113142de"],["/Advanced Swift系列(七): Strings/index.html","3d1163cff52ad704231dae81924d5c17"],["/Advanced Swift系列(三):  Optionals/index.html","a73f910a62d453d83a03dd3218f9d836"],["/Advanced Swift系列(九): Protocols/index.html","9cf752a5a0ac66a2c2d10cf2718064d7"],["/Advanced Swift系列(二): Build-in Collections/index.html","5d17a5e1bbe2799f7cf99496d5facfe9"],["/Advanced Swift系列(五): Structs and Classes/index.html","383f0c20d40bbef6913b2e19b9e99143"],["/Advanced Swift系列(八): Generics/index.html","bb152a6148de31ab717c5433a28e9397"],["/Advanced Swift系列(六):  Enums/index.html","89c69e4abfc90f0adf555d58c51b9380"],["/Advanced Swift系列(十): Collection Protocols/index.html","ad07ff431e7818bee92dd63d9778361b"],["/Advanced Swift系列(十一): Error Handling/index.html","0a618e4a210e35a5145c5bb202f39aca"],["/Advanced Swift系列(十三): Interoperability/index.html","d0a6e1dea74cd44255e4d5af984e0dab"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ec742005317afa70ef428f8ddb86a1ee"],["/Advanced Swift系列(四):  Functions/index.html","5e2ed3e2501040dde8d40f8ebdc8ca08"],["/App Architecture系列(一):  简介/index.html","d4686fd80851b0deb0894b8a9b27165f"],["/CocoaPods 设定版本说明/index.html","4e4c5465fab8870ed0c5c5ee7a2b4d62"],["/Docker 启动 MySQL 指北/index.html","906aeaab9b6674e8dbe44ef2f1f58410"],["/Functional Swift 初探/index.html","dfa6f23c58ffb296d0b42bc0c3fd9868"],["/Git 使用小技巧/index.html","2217de8ccae0233921c051c3d1140210"],["/Go Protobuf 初探/index.html","6c2a428029d0b1b91c252e23a8ecc02c"],["/Go mysql Tips/index.html","6b7553db703c77764810344a4e0b3e6f"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","0c32137def3d87803df250a2a1704b3a"],["/Go 入门篇：2、Go 实效编程/index.html","5ae778661f15d58dc4e0f46754e06477"],["/Go 入门篇：3、Go 重要概念/index.html","5867e8b18fbad0e00d7e66c50654e799"],["/Go 基本语法初探(一)/index.html","33abaddb1da8328794f9b36247a2f043"],["/Linux VIM 命令及操作小结/index.html","adf87b21b30bf6be51ef7226588e26a2"],["/MySQL Tips/index.html","d9bfad28274ad68af193b666d8770fad"],["/MySQL 基本操作/index.html","b0e13a590696c63611d5d8dc7cf7339c"],["/MySQL-列类型和数据完整性/index.html","ad056a563a9f78e1c12489869e4dabc5"],["/MySQL-数据库设计和查询语句/index.html","7704610046d0b4bde8817085dfc1b1fd"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","98836ec551a1e1615b43569574ac9b52"],["/NSCODER和SWIFT初始化/index.html","05f11f35a9d64c049645a94e9abb00a9"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","12e622e14ad640215f7ad192832fdbb7"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","5504eaa33004b76c18ca51328736c2da"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","799456953be15bffcb18647cf59f43c7"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","a0de78afee1c809cfa0d90fe5592c8ce"],["/Sqlite 使用Tips/index.html","73ad25358f9eab2986f8547dba84c06e"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","99b3aac595c99d3623412f721a65cd5c"],["/Swift 5使用UIImagePickerController拾取图像/index.html","70366047f760def8da60603b791a269a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","866d57841f5836153144e699f6c0dd0b"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","aed4e0c487af27aa536bb476b18b56b8"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","6bfb1a5244fb8a0bc73066423a2cadf0"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c8b18ded4432f35c53763d5b9feb6a62"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","56fdbf2c5f950ab10407f0f37f56455b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","599d7c004cad43abd2657335fb5793ce"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","762033e7beb652282ca707c9352b19c5"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","c07aa75ff08a49425b8e806ffe67abed"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b4bbccb0ee7a37a7cd1d90904a1fc595"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","f5e59de69d15dc805d9ab992ff00f69f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","4a41c9829c67bfbb4649b07f8fef662d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","a8aca49a90cb50ce909526f116d4cc90"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ff26b736af96b2bed2a794a7b9b521c7"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","c52f9bfba6ac4474dee3ef0d18784507"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","47cfedbc4bcb8a0f6cc1cd623e79cd44"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","76a624c4b1b24486468235bfdce6bb27"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","3bafc206b3f9ddf1398c73b4a52e896a"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","9fcc1cb152360f31b67d8a607738c3ca"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","044fa4cd8b9a3f19e07992280edef80b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2d0ce44220adf5a1d85d9c1de8a6b25d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","adf0cdd9b02a769161fe24ee59749e62"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7799d43edb5c28352551ebdc5fe05fac"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","2e6ad9e381ac60c1d7fc3e4f58ec28bf"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f82b61ae02c7c724cb2409a3ad20e16c"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0456c27d7a4b8720d745856c842574f4"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2db732bf6e8dc65b19a0fce19602ed9e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","125e71981b7db948eb8d8684645ddb99"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","6e77a1d09135edf4b36a85c3c9d4224e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a4ef53f04477750c1e5e963f8ee4d132"],["/Swift CompactMap vs flatMap：差异说明/index.html","80a5347d4094dcf492808a77a73e9fe6"],["/Swift Grand Central Dispatch 深入实践/index.html","241a7ff3743b8b0310eccc27b5bf9691"],["/Swift Lazy属性初始化/index.html","0d16d3608e0a9e1fc621222ec8dc3b5a"],["/Swift Promises 初体验/index.html","fba168a7ebfa19ecf8ae017bd78540d1"],["/Swift Promises 探究/index.html","238aabb858feaa61e7760e50e1980321"],["/Swift UICollectionView使用指南/index.html","d2ed8fa5a600e4651f302dcf5d6944f7"],["/Swift URLSession && Combine framework/index.html","b7c47fb997855a03b754b81055db3d32"],["/Swift tips/index.html","41ba44b2030fc09f77a494ee2c6ad29e"],["/Swift 三方库：GRDB 使用指北/index.html","d3e5681869ccc049449e14ea4bedbd89"],["/Swift 唯一识别的视图/index.html","7a287e89cde8e606577a687916e27c25"],["/Swift 如何学习现代UIKit？/index.html","71c47d731eeddfb5046b8b7e5c01a6d9"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","98e04cddc83173662394addcdbf58584"],["/Swift 用 compactMap 替换 flatMap/index.html","853f663dc6166c2184534b2985f59dd2"],["/Swift 选择和播放视频/index.html","f508e74c5973f59167d64bc77c579dc7"],["/SwiftUI 系列(一)：1、 简介/index.html","a5bdb38f1f9d0bd8998f404c26edb325"],["/Swift中UIColor最佳实践/index.html","2cbed78eedd0a91d2a368c86588cf980"],["/Swift中快速简单的工厂设计模式/index.html","ed327761b9f7f62844b0d54219d8114e"],["/Swift中构造函数与静态工厂方法的比较/index.html","860877c49d5471a3bea10ec0251a1828"],["/Swift中的UITableView教程/index.html","be4ae706f9455a95b6a15293f3cd6e9d"],["/Swift中的懒加载模式/index.html","ad56070f7e0cd7339614f862cdb4f5a2"],["/Swift中的模块和挂钩/index.html","155875a6266a11bf86bea2adb065578c"],["/Swift使用布局锚点添加约束/index.html","0c96dbbc080008c9bf9943cde6bb2328"],["/Swift依赖注入设计模式/index.html","8e0d04e077f6ddcf3722b349059d15ef"],["/Swift关于Dependency Injection (DI)/index.html","036644e2908314dbf234a5f82082c64d"],["/Swift初始化模式/index.html","4448153b6dbce0e5fe830093c5ab7ea7"],["/Swift单例模式/index.html","d9fd4831f25f8d498c01ff2abe649323"],["/Swift原型设计模式/index.html","40cfc5eb256c8d527c4829ff4842999f"],["/Swift命令设计模式/index.html","fe04364063abced495135b81891083d5"],["/Swift外观设计模式/index.html","569438569e574318d805d92140cd1388"],["/Swift委托设计模式/index.html","c7bda0276ef1213e88d2854771f59ed8"],["/Swift对象池设计模式/index.html","364cac0d59c1c43fa9e2ac716bfd7e05"],["/Swift工厂方法设计模式/index.html","7c96444fbdf60900d4000fd2bcf16f88"],["/Swift带闭包的懒惰初始化/index.html","6d3a91b29266d07bf02e533688918a4d"],["/Swift抽象工厂设计模式/index.html","f904fd952503c7865cad64fe24399c83"],["/Swift掌握iOS自动布局锚点/index.html","e2121f00daaf329b28bacc1b1711ceff"],["/Swift支持旋转的自适应单元格/index.html","84bdae47c0a49e85ff2316b4ec9a7824"],["/Swift枚举值/index.html","ca1d1fa903c73a94cae2b5a370d7e9b2"],["/Swift生成器模式/index.html","c7d403ef0e2fe32e00bfea4f2eee3c51"],["/Swift结合Xib文件自定义UIView/index.html","8e18dde98c46ce99245680c7e4d3de95"],["/Swift编写的20个iOS库(一)/index.html","7b5213e6051200aba01303b936b8e05b"],["/Swift迭代器设计模式/index.html","3f974aa482b924ee727886cb66c128d2"],["/Swift适配器设计模式/index.html","b9cc303dd2cb532dfe22a1fce30ce791"],["/Swift静态工厂设计模式/index.html","2303520e5095425e26064e98e96e99bf"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","aa244c4a14b8ba99795856af70b3e4f2"],["/UICollectionView data source and delegates/index.html","14c482f3aabb27aa88490d180093ea3d"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","2aa6fbe6064dc0d3c39449a7f5739ac2"],["/UIKit初始化模式/index.html","3d2269f661677978104e439d25e3fc55"],["/Ubuntu18.04替换国内源/index.html","a54bec9d28007ef75123f9193e867dab"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","4c372ca3eee00fa57d6fda24b332aab0"],["/Vapor系列 (一) :  Vapor 初探/index.html","6df3a85428ab210ba5012732a5c28207"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","0107f58d440a1fdffe1d0aea3f145664"],["/Vapor系列 (二) :  Hello Vapor！/index.html","91c7bc00966b3e13fa99b8861c96b17e"],["/Vapor系列 (五) :  使用session进行authentication/index.html","078d19b04b000f330bc18942d2aff37a"],["/Vapor系列 (四) :  创建博客数据库/index.html","e81da4953cd126f60926715ecdf35026"],["/Vapor系列(六): 徒手撸一个CMS/index.html","5b165d34a2d7b7e14376fe50953cb351"],["/WKWebView与Native交互注意事项/index.html","6670525b7156475d191128eff4286845"],["/Xcode扩展/index.html","dc89ee23c7b1a978fbc8844fdb443b94"],["/about/index.html","f6c00902223df404d0a38efa26cbf2f2"],["/appleOS的Networking示例/index.html","b40285ed1891f310706b7a6c6c3fb1f7"],["/archives/2020/03/index.html","c878b350232158f460eb37939f23aaad"],["/archives/2020/04/index.html","9ce4f42859378384448df6f3db369b68"],["/archives/2020/04/page/2/index.html","75721ca4699a3d13578789d1e9f22327"],["/archives/2020/04/page/3/index.html","10b1b8c1d64dbf0af8ce7dd08e6f84d3"],["/archives/2020/04/page/4/index.html","caf485d09af5129099980f2effe5e6df"],["/archives/2020/04/page/5/index.html","9b62bba182598a372148804f0efe8f12"],["/archives/2020/04/page/6/index.html","248ec6c6183fb2e7efccd5a32000e6e9"],["/archives/2020/04/page/7/index.html","40616350977390184a66553694146c2d"],["/archives/2020/04/page/8/index.html","a3ff104bf5ce7c594d334dbd321d8c2d"],["/archives/2020/05/index.html","4d85221c1c33dad382ed73b04eaaa685"],["/archives/2020/05/page/2/index.html","cf3a7edd4175b4a47eb72746460c9979"],["/archives/2020/05/page/3/index.html","cbf76db3184b4240c7922cc922e619fb"],["/archives/2020/05/page/4/index.html","42b53c3f8f0fe9cd6de93842ba39ab8f"],["/archives/2020/05/page/5/index.html","ce33f19e569806554a76e77775061dfd"],["/archives/2020/06/index.html","69c4470dedf4039df067dabcc0d23905"],["/archives/2020/06/page/2/index.html","35c286eff0c8c30e518f8d1ae04e8314"],["/archives/2020/08/index.html","1ea99ac838b44ecb46c68b30e4490344"],["/archives/2020/09/index.html","2e2f9219ecb38082075605180b020620"],["/archives/2020/10/index.html","e9150395e9f3999d3925be66d14ab003"],["/archives/2020/11/index.html","a4f1da01809dd835476b1fd6fdaef3db"],["/archives/2020/12/index.html","78f2cf5044df1323886588e555fe8bc8"],["/archives/2020/index.html","76757c84ef8daa597966a36cb40e955e"],["/archives/2020/page/10/index.html","1074d4440eae7eb42e83d9afbfb90e1d"],["/archives/2020/page/11/index.html","d289e45b2c4f69d51099c999f8e50093"],["/archives/2020/page/12/index.html","7f41d60d72b91aef42995aa955d26f51"],["/archives/2020/page/13/index.html","92ab6a1212ad13e8f722a1510ca8290a"],["/archives/2020/page/14/index.html","7a321538521863fa27c4d55dc152fff1"],["/archives/2020/page/15/index.html","4024666e45ab095e2bc09dc8d6ae6b70"],["/archives/2020/page/2/index.html","f0616af7e7608cd2d9e872613834a6ec"],["/archives/2020/page/3/index.html","5e15902c7435acd51c15afc272e71e0b"],["/archives/2020/page/4/index.html","0e3584094e353831fb7437c0e3e6142d"],["/archives/2020/page/5/index.html","7a0b0daba9e44cf6ef03c775bef146f2"],["/archives/2020/page/6/index.html","e92fb925ce2d372816a8551b23f95d54"],["/archives/2020/page/7/index.html","aed2dca42ac3a1b69affe731c5085ba4"],["/archives/2020/page/8/index.html","3a67103616b39a3da0476678bd2c64fa"],["/archives/2020/page/9/index.html","2ac9914c93898f8c4b23b791b7a7dad2"],["/archives/2021/03/index.html","0dd48ffd753ef58ddf88a51e597cc735"],["/archives/2021/04/index.html","c31213c28910c8f6b54257ace5c5fb95"],["/archives/2021/05/index.html","684b8bcbdecdb845530b1d2f900f08c1"],["/archives/2021/06/index.html","4deea1d8d1e526f69ae283e0b34b4073"],["/archives/2021/07/index.html","94d8f5dbde5d7ae8525efaf59eb578d0"],["/archives/2021/08/index.html","9aa419ee6a70060b0c2e2e67b7b505bd"],["/archives/2021/09/index.html","4ba9ab41b61c352f8ed365dea555367d"],["/archives/2021/11/index.html","86497d2c0954c42edbc1ad43ca7298a7"],["/archives/2021/12/index.html","321cbab3d27bc73bfa33840b7f84a1fc"],["/archives/2021/index.html","e49b1a1e89a86bd345012e0c865d5666"],["/archives/2021/page/2/index.html","9f99890e4aa932b6592f53eda9f700f5"],["/archives/2021/page/3/index.html","ac10093e66005a367fbaf7bf64526398"],["/archives/2022/03/index.html","de10b82a81075b45681141fd1b0ea0e2"],["/archives/2022/04/index.html","2aaf3ba8af4467ee74c3353f8205c80d"],["/archives/2022/05/index.html","40876ac8ac67bfde12f88c0755fc7f0b"],["/archives/2022/06/index.html","55b044100d7b8336fc3df821973cb00c"],["/archives/2022/07/index.html","c498e2284090e5913802f848edd6984a"],["/archives/2022/08/index.html","1134a63cb1d8a302abc1bed7dfc4cd4a"],["/archives/2022/09/index.html","638854b19966eb17320797a564848cab"],["/archives/2022/10/index.html","c2ac7ed6e58b0fdb3f95515d9816c020"],["/archives/2022/11/index.html","31f5ed4cb7dd8c112b2a58e83189adb3"],["/archives/2022/12/index.html","fc3db73bf1abd721fcc941c6fe02c61d"],["/archives/2022/index.html","5b5498f05557cdff77e58333494d52ca"],["/archives/2022/page/2/index.html","62a1b9e74ca5c1b79715f66ed2445e50"],["/archives/2023/02/index.html","45ed081ec381173050af73347fe4545e"],["/archives/2023/index.html","b271b0a22a09d2c337992b6fd8ffe7df"],["/archives/index.html","5770fafd0494c089b0ae9cc7ce1a4461"],["/archives/page/10/index.html","a1f0e9feb6dac227eeb07e1a0afd23d3"],["/archives/page/11/index.html","0e9316494e7fc4af40fb31be4f2a9af8"],["/archives/page/12/index.html","e39bd82bdaf4055dd28e705c2e4e8ea9"],["/archives/page/13/index.html","992cd768a258532adb6aaedeaf9e24f1"],["/archives/page/14/index.html","207fa9a639f499148c3a39d44e9b125a"],["/archives/page/15/index.html","01a291e3d20e32b6df4411e50156e31e"],["/archives/page/16/index.html","c1e5cef2a2c0d38645ae87e43c4b0022"],["/archives/page/17/index.html","dc10cb5601a4006ac0ab36d141c90fa5"],["/archives/page/18/index.html","623b184c1e1a001da347ebdc2016adfd"],["/archives/page/19/index.html","6096f603ac2e50e546cf6b3673deb235"],["/archives/page/2/index.html","163eaf5b5bfc79695cd5494ee4f11323"],["/archives/page/3/index.html","18477d79041b93c8e7a56895807096a8"],["/archives/page/4/index.html","a0f2a3a9c5bf7e3f05e2e4eb243ad0a4"],["/archives/page/5/index.html","2728895bd51230c013653560b0020e83"],["/archives/page/6/index.html","8f2846d9bc4f46e93a707b3e79422f2b"],["/archives/page/7/index.html","bf445ea452a24df34283e5001d7270f9"],["/archives/page/8/index.html","7ae0c3866191837e8fa1921dcb77c7fe"],["/archives/page/9/index.html","961d4bba3069cbb5c1521ee76252b33f"],["/bugly 上传dYSM文件小记/index.html","17e083f04b77cc4b1b79e4de4cf00fcf"],["/categories/Advanced-Swift/index.html","e4fc41ea98978aa9bcd4a487da4c87ca"],["/categories/Advanced-Swift/page/2/index.html","9c0080cb7f0588f4852a27a6fcd072b2"],["/categories/App-Architecture/index.html","8aa97560cfab691b76dfac6793c8fdfa"],["/categories/Array/index.html","cc0b8da1a7051242eeaf2491ef287cf2"],["/categories/CocoaPods/index.html","8f26cd51e6a66e207600d9cf300b8c3f"],["/categories/Codable-protocol/index.html","8e1d264cd1b24c3dc220588d4cb4ad39"],["/categories/Combine-framework/index.html","6a4b2c41eaa341b8be121809a218ee41"],["/categories/Combine/index.html","afe2c7dcc59c16c6c783a9981b4e0567"],["/categories/Docker/go/MySQL/index.html","c66423b718df15893950b3c91468525b"],["/categories/Docker/go/index.html","3d89d97f7503c4bea2ecc997ec0ba7f2"],["/categories/Docker/index.html","071191e3231c432a00dfeeffda03d294"],["/categories/GRDB/index.html","38484f2dab6789faa4a36fecb24862ad"],["/categories/Go-入门篇/index.html","fb63099a92150d4ab22b35405df2ee0f"],["/categories/Grand-Central-Dispatch/index.html","cc0fae5ec0ae4b04ee1a33c11209b1d4"],["/categories/Homebrew/index.html","e0e6514593a344316b068df71b78d220"],["/categories/Linux/index.html","2bdd03ec8c45b777078f5e448de34395"],["/categories/MySQL/index.html","3395a9539a85133d71556624c93bada9"],["/categories/Promises/index.html","4c3aac933e845a374af30e611f242027"],["/categories/Protobuf/index.html","496f6d2a4470418d4978957084af73d2"],["/categories/Result-Type/index.html","c7d39933089ba45045bdd358e8613d61"],["/categories/RxSwift/index.html","4ba4cd029914d41a7b9adc87a36807bd"],["/categories/Server/index.html","7e97cbeb7a209cfcd165213b4af8c108"],["/categories/Sqlite/index.html","5a0b2359260f08d8f715fdab3ab0188a"],["/categories/Swift-Apprentice/index.html","f78ea929eac6b7b00330d0deb59ff2a1"],["/categories/Swift-Apprentice/page/2/index.html","41e67cc139a05663c43424451b25fa09"],["/categories/Swift-Apprentice/page/3/index.html","93704f545d059bd925c6d0d943731a09"],["/categories/Swift-源码阅读/index.html","18e787ac3c7fd9bcd02ba7203a8971d9"],["/categories/Swift/index.html","f437c7c0a9a9950bcba47d73c186c2b1"],["/categories/Swift/page/10/index.html","314b632b87597f20a938c9025a758263"],["/categories/Swift/page/11/index.html","41403fff8781095377ab3a5eabe92cbd"],["/categories/Swift/page/12/index.html","203dda5b594684b1066fc17365180cc5"],["/categories/Swift/page/13/index.html","58b162208f9f634726fcfe805c72e8db"],["/categories/Swift/page/14/index.html","8990561d5331487f83de9aea6a5ac33f"],["/categories/Swift/page/2/index.html","638a5edb4065ab796d43ddf04940364d"],["/categories/Swift/page/3/index.html","e0580f6694b317fa6c0c1636be3453f0"],["/categories/Swift/page/4/index.html","174c3a4f2ede9596ecd99d1d91b2c8c6"],["/categories/Swift/page/5/index.html","735371135775abe18aa979db97ea3f7f"],["/categories/Swift/page/6/index.html","f669fde1eda0eca0c16685e00aa2510b"],["/categories/Swift/page/7/index.html","cdf3a3e5b71b71a70df9129c45a25639"],["/categories/Swift/page/8/index.html","7e06b25d1d0b0bbb0341e9895cceb7d2"],["/categories/Swift/page/9/index.html","e2c3e9fe0477321f9dff0bad60cf9869"],["/categories/Swift5-2/index.html","308b59b850b958239542a7eb87172c17"],["/categories/SwiftLint/index.html","48df5a9f0fdca48fa579dee94ecc85e0"],["/categories/SwiftUI/index.html","e185886095c3bd65410a175207edccda"],["/categories/UICollectionView/index.html","414c57b9b413563b588717ea2fbccbea"],["/categories/UIImagePickerController/index.html","79c67f536d672ed8ba1c3ee0aaffe7b8"],["/categories/UIKit/index.html","d08ea7c43654d8da6a8649b1e98ac00a"],["/categories/UIKit/page/2/index.html","be82e70daaaa890d20f70a29dfb389a2"],["/categories/UIKit/page/3/index.html","9a6f4ad3e7f61cd323fc2fbf3a04f2fa"],["/categories/UIKit/page/4/index.html","6d70d76b474d4014aee741c30be52f0e"],["/categories/UIKit/page/5/index.html","1b3a11f0b2f54b96d7cf4eb4e4f76c59"],["/categories/UITableView/index.html","b9b49344f28f1252e72870138cd7268f"],["/categories/Ubuntu18-04/index.html","15457df06a947fb1c99bbc60296eae8f"],["/categories/Ubuntu软件源/index.html","1d25dca251b5e463b2a77adb7503385f"],["/categories/Uniquely-identifying-views/index.html","752a4ee9644507ceb0faf37346796731"],["/categories/VIPER/index.html","8a751cdc01996f298712f45c2d6048ad"],["/categories/Vapor-4-0/index.html","13f37464ebc306921531e417025e4435"],["/categories/Vapor4-0/index.html","efe4e8e71bcfee79a8b04eac2f989991"],["/categories/Vim/index.html","0abb574c318c53f4f8fad6619fa46a1f"],["/categories/WKWebView/index.html","71b64ba95d4eaac43ad9a01eedc8970a"],["/categories/Xcode/index.html","249bb26909bee6eb568469ed46d3780b"],["/categories/appleOS-Networking/index.html","d2fd4dabbf3ca58e2093c172d0feac43"],["/categories/bugly/index.html","401d1babd219bf27bb39621454e646c7"],["/categories/enum/index.html","8f7ffdd126127914ef0ab3714491d3a1"],["/categories/git/index.html","1956acc3fc28a1792b158dd58bb093a4"],["/categories/go/MySQL/index.html","84588fbbdea32a788489c4d9cc1d3469"],["/categories/go/index.html","256087f4ec229af5b6111b5f641baa5a"],["/categories/go/interface/index.html","49defa8bebacfaaa22897cf218020d63"],["/categories/hexo/index.html","757e6f67215f7b87b9b1c70e8c2f1ae4"],["/categories/iCloud/index.html","f9354ea0f82f937679e8ff4c1245c619"],["/categories/iOS/index.html","8d910aa1ca3882616e04374b18817655"],["/categories/iOS/page/10/index.html","d7e8aec68ecca406688cb4dcf591f8eb"],["/categories/iOS/page/11/index.html","5b9388b4a4e13d127f5ee0bb2ccb6a89"],["/categories/iOS/page/12/index.html","91c8db92e05e28fb3145cc28cea2d052"],["/categories/iOS/page/13/index.html","59ab07e900a5c3b3800d8cf1c15d5f6c"],["/categories/iOS/page/14/index.html","97f3a5448044c82d706a44a159b24c1d"],["/categories/iOS/page/2/index.html","b9d07ec72f7c5421bcc0faf0c6f5e825"],["/categories/iOS/page/3/index.html","a91a04dc576e95787810d278da2b22ba"],["/categories/iOS/page/4/index.html","ded4b2e52151becb095fbe4a3f2f0ec1"],["/categories/iOS/page/5/index.html","35b7ea74b2aceeeaae813c52b712a840"],["/categories/iOS/page/6/index.html","3bb5f6b19f701a891ced03a327e0ecb6"],["/categories/iOS/page/7/index.html","4cedf809fbfd649a5625a566c6bdbbfa"],["/categories/iOS/page/8/index.html","7182da2cae4eea6453531a869a6490c2"],["/categories/iOS/page/9/index.html","14e5ffb53c69b88c5401fbef2704fedc"],["/categories/iOS/面试/index.html","86d3dda8b0a83e3575e6658395f80026"],["/categories/iOS面试题/index.html","933734d4c09249694fb0af91694b6652"],["/categories/index.html","0fb34bc91f62d0516e49d895507d527a"],["/categories/random/index.html","1a6af2382d4057a805c791d4c73630fe"],["/categories/三方类库/index.html","269904b6cfa0c7ce3832247fd0ef862a"],["/categories/函数式编程/index.html","e247aa6219c2bf517b6fd8b05f2c5967"],["/categories/子类化样式/index.html","42d4c49c887716f578d24a874f559aac"],["/categories/小程序/CSS/index.html","88479a7209b7c3c42af85e431e92f3fd"],["/categories/小程序/index.html","2ac4954a9e8a0f23186d7c1ef3005de6"],["/categories/开发技巧/index.html","d3f65c0d600eb98c48135db24ecafc8d"],["/categories/开发记录/index.html","e8296343b74c85628fd6dc160e28ded8"],["/categories/数据库/index.html","ebfd3a3b209450f8fe3c5adde8edbf79"],["/categories/架构设计/index.html","07682c73f558e14dbe8bb35254208d1a"],["/categories/测试/index.html","6fa8d323880c1278432e3f5552569f76"],["/categories/用户体验/index.html","36d72029e3d655c1ec130867a02272f6"],["/categories/用户协议与隐私政策/index.html","c5a5ebe50d464c92823553862c4e32d0"],["/categories/组件化/SDK/index.html","93bed9727c90e9d4a58dde1b6dfb3d58"],["/categories/组件化/index.html","925fa1c3b969d673042b37d9677b2324"],["/categories/组件化/模块化/index.html","b6fec63e7859224b33bf263695db1dfd"],["/categories/设计模式/index.html","8719de5ae962e97ace81673f8f751648"],["/categories/设计模式/page/2/index.html","ef804712948b9db781e4b2f1d0277986"],["/categories/设计模式/page/3/index.html","c78eec2601e381ca329905d49212fab7"],["/categories/逆向/index.html","9776abf75912bd2759cb2ac44c763ddc"],["/css/main.css","a1f7f9ebfa9731396fed14fc04349e56"],["/go moudle 导入本地包/index.html","3f7f66a618858491b586164561623a1e"],["/go 库专题(一)：gin/index.html","2e70cd3526990fdf1a0e799e9a298f80"],["/go 每日一问/index.html","713d091da6f9b071c04367d47b0552a3"],["/go 项目实战：gorm 数据库框架/index.html","99000d0fd661375688f945fd71db2af1"],["/go 项目实战：zap 日志库/index.html","4c3dfde846e0232e6e8e0006fb8df9e4"],["/goland 学习笔记/index.html","5951dff3e8ec472e54f44f55fdfa7ff3"],["/hexo部署失败/index.html","fa5040dacccd7e42b22d3b70ad848d5c"],["/iOS 15 适配/index.html","7890cfa23672288949579c8fd65aa29b"],["/iOS VIPER架构深入实践/index.html","29360a2b42069c069564db3179816455"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","e27222362ffa89aa71168f5d7bd88ce5"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","949692c57c5e66224db5e1357eb33994"],["/iOS 自定义视图，输入表单和错误提示/index.html","26fe4be0adf8b7392943cb7493164acc"],["/iOS如何使用iCloud文档？/index.html","5f57b8981df02d6b902939651d03fc79"],["/iOS子类化样式/index.html","0ade4168d77b58fa20d018730e49d130"],["/iOS开发记录<一>/index.html","f1cd99495d24d7f998455f6a7337de88"],["/iOS自动化布局编程/index.html","2c276972c996d4686ed2afa908237832"],["/iOS自定义转场(By Swift)/index.html","18aed39049cea7b769caba3c2d998301"],["/iOS项目架构：使用VIPER/index.html","171e2d61d72de6543cb03dbcf7e4f059"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","aad024b711b3ec0218aefde1a944c0c4"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","add555925a9ed83f6b6b0209d174938e"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","74f21a910e17cbbe8a0ef7812b30926a"],["/page/10/index.html","0ce7a0b592d74c56d608af9116939c7e"],["/page/11/index.html","c498fead45bc92df0f0a35323381045b"],["/page/12/index.html","db315040b8b8e19584a9baf53f24caf3"],["/page/13/index.html","26904868201b32041dbce017a4526fd2"],["/page/14/index.html","acdc52ca72df386405ad6619f1e1063b"],["/page/15/index.html","7411b56a4f5d182bda1c6b239ac7b68c"],["/page/16/index.html","50ecca956fbf57e4d097f4fd023b01c4"],["/page/17/index.html","4bf95cb80c600ba376757eafd41a3cb5"],["/page/18/index.html","8394ef9e6d05ba899fb4ab685e81db15"],["/page/19/index.html","1cd3f2bfda5f1435510f68402179f024"],["/page/2/index.html","a3feafb3ab414bdde9227a7fb80c7b15"],["/page/3/index.html","db6c73c486c30c3747208be0365b5cd6"],["/page/4/index.html","f895021bf3c63572e4951044fed02fec"],["/page/5/index.html","d24d5896b53a488ddc5dba6a27496e5f"],["/page/6/index.html","e3ee0e66cc457cda80de9e3c51a5a4a8"],["/page/7/index.html","05036ce92177528b279bfc119daa642d"],["/page/8/index.html","95db4c5dd07cc45859de2d41e0b2967f"],["/page/9/index.html","ea8e42c0f939736f5d645c55b09bbd2b"],["/schedule/index.html","ec013afe05506cf8225b4baa50151cb3"],["/storyAppPrivacy/index.html","fef3ba9859fe7e6be5876ee9d9d7bac8"],["/sw-register.js","cc544b1335cbf5dcafef5c20952af582"],["/swift 专题：函数/index.html","bb46096ed205377ce3b9cdc8dd130529"],["/swift 专题：闭包/index.html","e2c73063b6c755800cbf4bf140af83ad"],["/tags/Advanced-Classes/index.html","91c08d7df403ea537ed26401fd9eb688"],["/tags/Advanced-Swift/index.html","dd3a3d186ecfa07faca706deeecd0285"],["/tags/Advanced-Swift/page/2/index.html","06f225ae99ff20c2bf134c2f04e6b5af"],["/tags/App-Architecture/index.html","bb9274ffdf10c1b018ca0acf09f3adf3"],["/tags/Array/index.html","5aace3b1d19ace49e25209ad88afe8af"],["/tags/Arrays-Dictionaries-Sets/index.html","24ddf50becc088dfaa07a3721399e738"],["/tags/Authentication/index.html","6b6aef47990fa7788432a6b04910a27b"],["/tags/Build-in-Collections/index.html","3b5d0b7dce34c045e96879b13c88c715"],["/tags/Building-Your-Own-Types/index.html","21daa2f594c199929801e91c3a9e143e"],["/tags/CMS/index.html","935ebffd00536dd06ea2be59c5b28701"],["/tags/CSS/index.html","dce3a5df1315e0068571bf62671b5ecf"],["/tags/Classes/index.html","0ca3fafef41c463df6c2886ff9168345"],["/tags/CocoaPods/index.html","0c09380c4bea3647f11b4d53cb0e0e74"],["/tags/Codable-protocol/index.html","4274f5b14e5629e182d6c24545906b59"],["/tags/Collection-Iteration-with-Closures/index.html","e7a6d43defe7cd566de0ccdb39d78e7b"],["/tags/Collection-Protocols/index.html","0e74802b1a00865d17f9d52cebf79e53"],["/tags/Collection-Types/index.html","abc050abb21cb3b3412c082b2cbcbef3"],["/tags/Collection/index.html","4da760bc5a89e7868de2a3fe818e100a"],["/tags/Collections/index.html","5ede5910b9e35c2f0d3c17b799a594cb"],["/tags/Combine-framework/index.html","2d8057f070ac1d2d415af06766c3e55c"],["/tags/Combine/index.html","b0b615532f71f2dbe95d82f03c3bc860"],["/tags/Dependency-Injection/index.html","7f002ceb988cfe84de606bf14ccbea5c"],["/tags/Docker/index.html","b030677db4415da82e0e0436f5fff24c"],["/tags/Encoding-Decoding-Types/index.html","739d295485bd02c83a53cfb8905c1750"],["/tags/Encoding-and-Decoding/index.html","b4ac4b6de85d19dd1c271409559daa0c"],["/tags/Enumerations/index.html","90f55570e6558558d60977fb74b7b42f"],["/tags/Enums/index.html","3a683a61dbff2589cba71a61e5081bca"],["/tags/Error-Handling/index.html","6e01b7f06f4ac37b1a35e31957f0c110"],["/tags/Functions/index.html","424adef199b95f5eed8d328d148944e5"],["/tags/GO/index.html","427261d945a291a9192ec442ba1a41d7"],["/tags/GRDB/index.html","17a5e5a6059a6b696b9aacf6f01a363a"],["/tags/Generics/index.html","1c29d3c2a50dc57201cd39ab1679d723"],["/tags/Grand-Central-Dispatch/index.html","53b9119128133d4c8171f5fa672c0882"],["/tags/Hello-Vapor/index.html","264a228427ca8573ad701c7ceb2760cc"],["/tags/Homebrew/index.html","86e790caad06c201dad768c8fade8d4d"],["/tags/Interoperability/index.html","c5a152f5cc604609e8357ce5c20ac185"],["/tags/Introduction/index.html","aff587e7211907606363248b5989f7eb"],["/tags/Leaf/index.html","72a74b0f495cd1bdffd7af2109723926"],["/tags/Linux/index.html","8358b139c6bb667ced315d7ceac219a1"],["/tags/MAC/index.html","e360f24e8fd14129adde176a20b278c6"],["/tags/Methods/index.html","9171c73759d10464bfc4812d652906c1"],["/tags/Modules-And-Hooks/index.html","8f0c63c5e168136d87bc62f317dec54f"],["/tags/MySQL/index.html","be8968a7dff22a05e78e1b321b48c3a5"],["/tags/Optionals/index.html","b4056786eeafd18b705df94604a6e76d"],["/tags/Promises/index.html","cb0ca92e9540570d871bec8ad80fdf4a"],["/tags/Properties/index.html","3fe644dc2bcce6d1128371adeec3006c"],["/tags/Protobuf/index.html","80fb6015dd14d9dc0b7181ff39d21609"],["/tags/Protocols/index.html","f738b42c80254304f4dcaa1c90e9fbbc"],["/tags/Result-Type/index.html","eafe094476371f6e77569e2aa315ffa7"],["/tags/RxSwift/index.html","5ee99a128b58507966070b54bc97f291"],["/tags/Server/index.html","cc53234b6af917834ee69233153f733f"],["/tags/Session/index.html","4c6747157159d68aa278c732d7c7da6f"],["/tags/Sqlite/index.html","a1d2108b1c4bff7367ab4667cbf255b8"],["/tags/Strings/index.html","08a5e6801e8903a4eb1791b779aad0e0"],["/tags/Structs-and-Classes/index.html","403d002aebc8209dd3bacd596f08cb6a"],["/tags/Structures/index.html","8885ba1da205f402972a9e2dcc2a7625"],["/tags/Swift-5-0/index.html","7a7911991a72570d2f9df804dbad6f93"],["/tags/Swift-5-0/page/2/index.html","051eb3ee8ea3891efec1e3b4157f2fd9"],["/tags/Swift-5-0/page/3/index.html","d25ae70a3d698ec28a05e9d1164ca4d2"],["/tags/Swift-5-0/page/4/index.html","9039f4fcd58941495a14dab8848ce740"],["/tags/Swift-5-0/page/5/index.html","5fef11b4e7aabf1e81506313c1dd2364"],["/tags/Swift-Apprentice/index.html","1f9ae5e8830234aaa30cbe00e2f9851d"],["/tags/Swift-Apprentice/page/2/index.html","fa756c1c77e637603d3c6cf7e37b28a2"],["/tags/Swift-Apprentice/page/3/index.html","a799e64cf207f8577ebf146e86f2e8c4"],["/tags/Swift-Package-Manager/index.html","761baf2b16e4961ccac63510f330401e"],["/tags/Swift-源码阅读/index.html","1526e66176d6088c053d309f422db2b3"],["/tags/Swift/index.html","91beae5f421bdf47a5579ebb1094b085"],["/tags/Swift/page/10/index.html","3e6f7d4c183ff2a79927eb2ece55ee18"],["/tags/Swift/page/11/index.html","4398c6557875462d6319ad245e75ec82"],["/tags/Swift/page/12/index.html","e8f417a12a05ddc24c85e026e595b4b6"],["/tags/Swift/page/13/index.html","d56c6f9485f1dc8e8779c1e400c75618"],["/tags/Swift/page/14/index.html","0c76d3062d87a6d537a9f459d7482729"],["/tags/Swift/page/2/index.html","604909638e0cedd8f60c687f7476c530"],["/tags/Swift/page/3/index.html","432be594ce7b1652c8797c06c50d0c03"],["/tags/Swift/page/4/index.html","d9fbcd14881d450c53361fe4fbd83b0a"],["/tags/Swift/page/5/index.html","780a4fca8b9b5bc54554fe370d9f7adc"],["/tags/Swift/page/6/index.html","8f079132b61589e97cf1e2525db9e218"],["/tags/Swift/page/7/index.html","75a0c134f3a829e14285b45fd81f0b92"],["/tags/Swift/page/8/index.html","0a2105a2e143ebcca4e3aca5fbe0c835"],["/tags/Swift/page/9/index.html","60ccc7de4b8ec6e85dd5ed25e04e0284"],["/tags/SwiftLint/index.html","788e39cb3094b2e829804f26f2a186d6"],["/tags/SwiftUI/index.html","bc839d728d75e0563d45144032a26df8"],["/tags/UICollectionView/index.html","f94785a543dd6e7b593f00e6a67562ce"],["/tags/UIColor/index.html","ee0899f85b0a9d99050f7e8e687ded9e"],["/tags/UIImagePickerController/index.html","c3360d165390f2a7c90bf859494cd771"],["/tags/UIKit/index.html","844d3505d92dd4465f43a624b1aca19b"],["/tags/UIKit/page/2/index.html","beb8337fa9617e5c5453ed5e131c18a8"],["/tags/UIKit/page/3/index.html","0c978defea61d176ec35d3f96b565e19"],["/tags/UIKit/page/4/index.html","3fedecb911ced1e176613cf448d25e2d"],["/tags/UIKit/page/5/index.html","fa04a08b7c5c6b571eb56a27c6c509ea"],["/tags/UITableView/index.html","d153ae335aa6841a78d5edfe343749e2"],["/tags/Ubuntu/index.html","8ef4a8f64227b3adc7c3f0141c17a097"],["/tags/Uniquely-identifying-views/index.html","df9e0a82fcf0e781caeea1c80aa8d651"],["/tags/VIPER/index.html","9f6f30b6565ef02969f70e73e72a7f64"],["/tags/VMware/index.html","9ea5183160e4085505937bde66a4c21b"],["/tags/Vapor-4-0/index.html","dc478ff756c36b3c792da8fd4fcf9884"],["/tags/Vapor-初探/index.html","a4e7b33a7e9e4afe749f6f3415903e80"],["/tags/Vim/index.html","9142b8d42393ec8578d3171b8397dc95"],["/tags/WKWebView/index.html","0c850ec40bfd9656a398d55927d6951e"],["/tags/Xcode/index.html","78619b22279877a940322a3deae66edc"],["/tags/appleOS-Networking/index.html","ee79315164a471762bbaa8d0c38653e8"],["/tags/bugly/index.html","15a6afd78c7fd5ef55c19b06847a7a87"],["/tags/enum/index.html","5f41765167292a5bb531b8e9e384c420"],["/tags/gin/index.html","62508721b3d199a259a139b9a010be1e"],["/tags/git/index.html","f544be070c2cf427a5ef448891adaaaa"],["/tags/hexo/index.html","a5eaf6a56c560ac51cb43a2681c2e9c4"],["/tags/iCloud/index.html","479675b7f86de3cf2d8cbee631f10c5f"],["/tags/iOS/index.html","dfb66359c88f00b634dab199ac0a95ac"],["/tags/iOS/page/10/index.html","daf408348a9cf3bf9a61563b3f88c411"],["/tags/iOS/page/11/index.html","37f764104f399f4eec740837f7fa18ee"],["/tags/iOS/page/12/index.html","db5eb341104cfe1acc599e1559ffca78"],["/tags/iOS/page/13/index.html","a076bbdd186f67c1c7918475e87c7f27"],["/tags/iOS/page/14/index.html","1c84dc831376cc66ee086d53bad12d45"],["/tags/iOS/page/2/index.html","1d2f59b5aaedde5eea93d5c21ae69d26"],["/tags/iOS/page/3/index.html","d79e7515662f7978aa1b1b32c6efa8f6"],["/tags/iOS/page/4/index.html","ac169c6c122c237d625989cdc480c42e"],["/tags/iOS/page/5/index.html","ad23424024f435b3d574dc27d4d29181"],["/tags/iOS/page/6/index.html","1be03f254fd80a57e2425fed139ebbee"],["/tags/iOS/page/7/index.html","38670540a683ef1fbf9730cc3041cb3d"],["/tags/iOS/page/8/index.html","5a9a6f658a8c608c2debddf3286c8695"],["/tags/iOS/page/9/index.html","44525651823b245f42d72c11aa164cc0"],["/tags/iOS面试题/index.html","e76a5745c9b18189bf5f34ea315d76b5"],["/tags/index.html","432503073d75edaa170db3eea18e718a"],["/tags/interface/index.html","3f23ed4b52adcaaee2fe3a4a536b8ae9"],["/tags/non-optional/index.html","be71731ab7d20387a2989b8dc0083ba2"],["/tags/package/index.html","2dc742aaee3d7aeaaf7732ef6956635f"],["/tags/random/index.html","8385b0bca59790b3809a5ba4777b5d37"],["/tags/transition/index.html","91f3dd4a391db1e7ec13a330e820b758"],["/tags/三方类库/index.html","1e7ff5ed6acc93825912dde81768742a"],["/tags/依赖注入设计模式/index.html","4728e7ce55622c443f2848d09c7c1634"],["/tags/值类型和值语义/index.html","154dd63d87749562df648784107b269c"],["/tags/内存管理/index.html","c918a04adcc1e646da2d77e18b9e166c"],["/tags/冒烟测试与回归测试/index.html","bb8c4860cac4ff499b1c894e1504087b"],["/tags/函数式编程/index.html","a204ba6412999c15af6c63ba4eb24a8a"],["/tags/创建博客数据库/index.html","f6933779511c00f3bb94b10b1855ba69"],["/tags/初始化模式/index.html","e2fe9835a73ba6003edbd55d02dd7fa0"],["/tags/单例模式/index.html","c4faefea573198d49be5d9732da2d21b"],["/tags/原型设计模式/index.html","af621c0321e3f2e809c1ed785bdd72f9"],["/tags/命令设计模式/index.html","24ce356c425cb7c423cd4d9518fea93d"],["/tags/基本控制流/index.html","07f10ee707f900d9917a749e62246e2e"],["/tags/基础语法/index.html","ffced691f0e241a983c307557237a592"],["/tags/外观设计模式/index.html","a0d07f84dcaf7ccdf5877fccc900656b"],["/tags/委托设计模式/index.html","3e8b9f1e47089be1e48dae0a325f95c4"],["/tags/子类化样式/index.html","9797b9ae6db744350f701265fdfb9cf9"],["/tags/对象池设计模式/index.html","c12cfb13db16e3c5dcc4892b794b2407"],["/tags/小程序/index.html","2136d3dd1854ca9bb33a50fb7af3f571"],["/tags/工厂方法设计模式/index.html","18341b4739834040c6cd7800edeafb65"],["/tags/工厂模式/index.html","edf6d6f72090151c6723ce56357fccd4"],["/tags/工厂设计模式/index.html","c81e6ae470eeaf1b0aeb76e76045412b"],["/tags/开发技巧/index.html","7b3c96d8988ae50fa1190e9ef84bf5a4"],["/tags/开发记录/index.html","825997e1f2cbcf2ef14de0f9f1bfb276"],["/tags/懒加载模式/index.html","dfd9af139f60b3583875de5da5cac293"],["/tags/抽象工厂设计模式/index.html","7b64191847d0b68c477cde4aa68bcfc7"],["/tags/数据库/index.html","9649c7b048173ebc1326ce1c4fa7b729"],["/tags/构造函数/index.html","da1519455aa6dd1616ce7b252dd3dafd"],["/tags/架构设计/index.html","76b45be08d9c13bf1af969ac42326e8f"],["/tags/模块化/index.html","d751098cd4e1c276c60c54e0614977db"],["/tags/模式匹配/index.html","517180452ae2a3fb2aa470cd6198b89d"],["/tags/环境搭建与验证/index.html","5d2d93247ea64acd6ce8843e1eda3f7f"],["/tags/生成器模式/index.html","a45f6d26a86fcbfb12df6c1c2b230b92"],["/tags/用户体验/index.html","79946f521fde9a193f1c4e5091b58491"],["/tags/用户协议与隐私政策/index.html","97ce4e06706e285b011f351c17217fab"],["/tags/类型与操作/index.html","735f2815d191310342b41bc36baccdd0"],["/tags/组件化/index.html","d36964e807330afddae29b7d791abb99"],["/tags/自动化布局/index.html","5b9b77077e86630b30562c33f69c1ebd"],["/tags/自定义UIView/index.html","0c31a6c1de7cfaa440f033da067ea8a0"],["/tags/自定义转场/index.html","a50f2e2caaea85e68a0259cd927c6370"],["/tags/自适应布局/index.html","bbf3ced4130eeb647397c1379e2ab8dc"],["/tags/表达式、变量和常量/index.html","ca586cb9e05c18f06447fb4e07631c22"],["/tags/设计模式/index.html","aa8cd39e1930750d46a13ad836d4cdda"],["/tags/设计模式/page/2/index.html","07de10a647a744455881235811a28972"],["/tags/设计模式/page/3/index.html","7bfb98358e1d4446867e650a0baf644a"],["/tags/访问控制和代码组织/index.html","302a2b13bf4e4ece21aee1663110a0db"],["/tags/运算符，下标和键路径/index.html","4e03382636a09ebccb9a3700fe6e6631"],["/tags/迭代器设计模式/index.html","acf18c4ffc2e20a0d24d8f60681535c7"],["/tags/适配器设计模式/index.html","6b313ba88d9356cc9447925d348aa4d2"],["/tags/逆向/index.html","4862db144811875fe1ce40f23009261a"],["/tags/错误处理/index.html","33ad0e44b499fcf06f5d2525ea5dda27"],["/tags/静态工厂方法/index.html","1d8ec732e6bfb5ba7da3b32da2fea691"],["/tags/面向协议编程-OOP/index.html","1b4d4d1ffa420a2476a3dd2c0e0065a4"],["/tags/面试/index.html","3502be723d8a4726b4bc6eaa675dc820"],["/tags/高级主题/index.html","a94aac6c3985500d3fda582212eadd06"],["/tags/高级协议和泛型/index.html","5d80c7e1c0e6315cf5421c3251f91042"],["/tags/高级控制流/index.html","01d8e63262b12c57d06dae4279bf358c"],["/xcode 常用的快捷键/index.html","c268f129d4c0281439694cea48590e6f"],["/为iOS应用构建输入表单/index.html","57cbc34d93c594426860418822c01da0"],["/产品开发的幕后花絮/index.html","2a5a80bae8f4262ab0c2651e722523fd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a6fc4048912a3d8f13bfa308490366df"],["/冒烟测试与回归测试/index.html","aa925349cd63092a80530b59aab2b4c5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","286e85b223f717db9d1ff008d42e0fe3"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","269902aefee38586273b0aa80d918944"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e892daa1e1a638e811b9ac7d6649a5e5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7729e82c5eff4add5ce39cf6d6f52ea8"],["/在Swift中创建自定义集合/index.html","d800de360ad7648df5ab6a66f790b507"],["/在Swift中处理非可选选项/index.html","45559f3c54cc1a289d59bcd017b4ba4e"],["/在Swift中生成随机数/index.html","8b8d11945261a03efde8dd7418044e23"],["/在Swift中重构单例模式用法/index.html","cab79d384817377d6d4cc21b3eb14b7d"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","4b8522ddf7a68674e8c31f11ddf1b74e"],["/如何为VIPER编写服务？/index.html","61956ca757d060a3eb8940859e07382e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","2ddc695a7fe52cac96c0a69a1b2844a6"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7f9a08bdd275f0f2a68babeb01abd907"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b0020a396fdb5989be92f3cdb70567b9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","88012a15aff4018602ae9e392701c774"],["/小程序: [CSS] 布局小技巧/index.html","50ca2ea95ac229b9202974777751e160"],["/掌握VIPER架构/index.html","1228c3b227258f5fcb30f490f97f4737"],["/揭秘 WordPress Hook 系统/index.html","f5ecea958c1bfd3098f2bd656ee4f82a"],["/比较工厂设计模式/index.html","934484d8dcc84a4bc3256ee7bde77f91"],["/深入了解Swift中的Grand Central Dispatch/index.html","40d758fff17171273099752e57ebbebe"],["/深入研究Swift框架/index.html","082c829f95aa8ac7873c2c633602c6c7"],["/组件化插件化与模块化/index.html","88a237cddbc9badfc5578e885215cb01"],["/组件设计与SDK开发基本规范/index.html","19fc44284ba66236b2dacb9c6341be25"],["/设计模式：单例模式/index.html","d3e9ed65bb2e8351f8418c1d8ed915aa"],["/适用于iOS开发人员的VIPER最佳实践/index.html","8b5daa50cc738c20f2f03fef89146f43"],["/选择Swift而不是Objective-C的5个理由/index.html","bf6e501c508c41d7381cbfe8f20685f9"]];
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
