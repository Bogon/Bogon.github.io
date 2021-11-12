/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6b059a17b85228c99a362de908978043"],["/2020年iOS面试题总结(三)/index.html","cd837cd2c795fc47b9dc57de51aef3b2"],["/2020年iOS面试题总结(二)/index.html","a2b8e2c528cd257a9dd0a4b6103bc52f"],["/Advanced Swift系列(一): Swift 简介/index.html","775d0d5570e7b246e27976bf00f56017"],["/Advanced Swift系列(七): Strings/index.html","3a4ab3523ed9f9acaf8528e13be5a963"],["/Advanced Swift系列(三):  Optionals/index.html","1c416c1706b396df123cfadb9abd0b6f"],["/Advanced Swift系列(九): Protocols/index.html","d0e042d076ada88499c2ad20563d0dcb"],["/Advanced Swift系列(二): Build-in Collections/index.html","a8b069cf793273a8cb9e6568d210405a"],["/Advanced Swift系列(五): Structs and Classes/index.html","67e4fa815242d76091e979f9cab24c95"],["/Advanced Swift系列(八): Generics/index.html","c68892c85c8d3b24d5f54a59985d87ef"],["/Advanced Swift系列(六):  Enums/index.html","bdb3efc00e548ad695692a92572ef1e3"],["/Advanced Swift系列(十): Collection Protocols/index.html","21d17b46732b5642bdf393589ddade0f"],["/Advanced Swift系列(十一): Error Handling/index.html","1e50eaaa0ef5742dda292e138a2b20dc"],["/Advanced Swift系列(十三): Interoperability/index.html","4cac93d0d1eb358283e9f69d1144478e"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","b7cb6452f720ffe3a9ab4634648929ce"],["/Advanced Swift系列(四):  Functions/index.html","7ebcadb7eabd7511c5fe4dbeedd0b633"],["/App Architecture系列(一):  简介/index.html","873592afe6cadccc59437dccd3b6d155"],["/Functional Swift 初探/index.html","4477d5c095190da35feb9fba52ea1d98"],["/Git 使用小技巧/index.html","db42f0bf4f2c676032af1f8465e96847"],["/Go mysql Tips/index.html","2e2b02dc009e429c3667645fa3d2e35f"],["/Go 基本语法初探(一)/index.html","029ce5cdb9f980e339607e86b7d6f902"],["/Linux VIM 命令及操作小结/index.html","7c27930781148023823ebb46d98a550e"],["/MySQL 基本操作/index.html","1ecdcb9f957e06eb99e69b3b5d73aff8"],["/MySQL-列类型和数据完整性/index.html","8cfaeb90558d871be26a89bdb4314dee"],["/MySQL-数据库设计和查询语句/index.html","d0f7dd86684bf10069edd5c70098569a"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b0c8be26671bb273f75cd644b2c7c3b9"],["/NSCODER和SWIFT初始化/index.html","edb8e3deb0e6a581f9c9911d6181131d"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","5d842cd88e15c4897276c26f05d5f76e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c35279b00bc327c042a44a4c0e70b929"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","caffc7cb254cc928f55f32dbff4f802e"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","71366153db01c0e7bb4cf3cbb743a0fc"],["/Sqlite 使用Tips/index.html","01d8e946a715fc1500d291301e57306f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","15da06014ff1e794d9aab9b1fa2c3409"],["/Swift 5使用UIImagePickerController拾取图像/index.html","fc1bddfe1a467c76987e199d5993f9b4"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","1b6325a8c7df872d2cd10dd0825dc9ad"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","6312c33445a9c43a6f5f375ade6866fd"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","e94a0b8f094ea00adbb9e01b7a71ddcd"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a0fd0522bcaf61aa80de69a1c92fc076"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e6031e0fa70dccab97c5d1b76b8585da"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","3041146c69bceda8027fb5361de7ebd2"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","bcb2d2d591a713f901e944b0e169164d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","db987550bf713b456e1c26ce7fd3dbb3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","3156b67e794b0963141e59b2ec3a45cc"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","303b197ff1784e42fcb5470c1b2961a7"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","97be7e5b7aa19d2e670b955cb334e00f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","f29bf242d26e8ba7bc936f73e3fe63b7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","1a481c99d7bad11d8c4316d3123d12c4"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2769f5fb1245f616aa9389e4ddf9ed63"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4e3102cdde462d4c4191244c86fcffca"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","ad171835db0048040bb46b13c9caf375"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","eb2e9ed13eab876830c97a0652e4eea7"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","9adac580430fdb0839a61ccb9bf50e09"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","3ef207bb7bac49ea6a49b4aec2cc29fc"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","298ee96f236c736825493206b6e54130"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","da53f41ec3466196c251956212c4ead2"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","c26769881708e5cc55e6513516af39e5"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","18efca9290868cba44cb39818d7e2538"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c34991afdb2179020b8d57dc81248363"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","62c2e09e8f264b5ebf47cb940142cb7e"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ed9f5e9e66432acaabf9ce7c01b48ebf"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fc09debdc4bb0b35f430a7a592c0400f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","4ec7ffb7ad87d2f36f3dab865c063572"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","257178d9397c6bcec7c3cdd9dc629805"],["/Swift CompactMap vs flatMap：差异说明/index.html","d4931f4342ec8d61a0d8fe5c23a32c0a"],["/Swift Grand Central Dispatch 深入实践/index.html","12d1f8ed66c27652543e1f67447aa20b"],["/Swift Lazy属性初始化/index.html","1f055de25d2c762d2cdebeae4cfb4d50"],["/Swift Promises 初体验/index.html","35947016bce6b4cfe2d59f337403c244"],["/Swift Promises 探究/index.html","835119d6138a9569db1746d8581ba43f"],["/Swift UICollectionView使用指南/index.html","6a9cbf0c5b8a0a4b4311f6855b6b837b"],["/Swift URLSession && Combine framework/index.html","70e722ecf4dc98ccb17cb8569cd964dd"],["/Swift tips/index.html","1e160e51ed28b75c7b0d0e075f40170e"],["/Swift 三方库：GRDB 使用指北/index.html","e4ef3c4b48c5a2e4e3e26a77db34e6aa"],["/Swift 唯一识别的视图/index.html","26c35b4a29bc7b1ebe3d664a6ded298f"],["/Swift 如何学习现代UIKit？/index.html","1ebb30aa3e3f7d3c06e7e2a90199e99e"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","737f261610d15c9ad42e95f4013f3545"],["/Swift 用 compactMap 替换 flatMap/index.html","9ae680357b6133eb125583343a78ed65"],["/Swift 选择和播放视频/index.html","74bc26b146b39f6003504bde522695c8"],["/SwiftUI 系列(一)：1、 简介/index.html","dddd6808ec3675aa6e90dce00293da77"],["/Swift中UIColor最佳实践/index.html","1b433396f24a54221a0ac417d5198b1a"],["/Swift中快速简单的工厂设计模式/index.html","b872ddf42026c52bc6617900f94d445f"],["/Swift中构造函数与静态工厂方法的比较/index.html","d32ad7a48c53c64c75b0ad4adee3077f"],["/Swift中的UITableView教程/index.html","db93d041debe5d10459ba594089deffe"],["/Swift中的懒加载模式/index.html","4b46672518b76e4cdb3accdb74f5745e"],["/Swift中的模块和挂钩/index.html","f4edeb09ff171b68ff7348e9ac87c1f9"],["/Swift使用布局锚点添加约束/index.html","f9d6394506849e04a798282edbe2437f"],["/Swift依赖注入设计模式/index.html","4d156a5a8428ad9bb5af120f3397d219"],["/Swift关于Dependency Injection (DI)/index.html","2d05166047cd72f30fd63cb0ba8f716e"],["/Swift初始化模式/index.html","67b2279fa69b49462b23c5db70f4f27c"],["/Swift单例模式/index.html","7e35dbff975d532ed5680e500664b666"],["/Swift原型设计模式/index.html","e8f1760c9ae98be2602cc059af8dc00f"],["/Swift命令设计模式/index.html","864413479c3f8a028956936557d0c08c"],["/Swift外观设计模式/index.html","95a4d5a6b8db11ba2ce1bd3ddf59ab84"],["/Swift委托设计模式/index.html","4104984f0ad8294f8a6f9e2789f84bef"],["/Swift对象池设计模式/index.html","12479a6b050a88e6e981842169a0868a"],["/Swift工厂方法设计模式/index.html","15c44d4ba678bbe1c4ba79aa5b91f2f3"],["/Swift带闭包的懒惰初始化/index.html","5cde08daab67baea49d3b2683d0a2491"],["/Swift抽象工厂设计模式/index.html","f3334009fd7fed16c394c174ad486b46"],["/Swift掌握iOS自动布局锚点/index.html","f1c4073001719504b14ad4de6d52c391"],["/Swift支持旋转的自适应单元格/index.html","33c416faa6673324860a943282292689"],["/Swift枚举值/index.html","25db86668e70695b74f0df937400256d"],["/Swift生成器模式/index.html","7177e7486d441987c46736159f98972f"],["/Swift结合Xib文件自定义UIView/index.html","e349f186cfedc0ceb6c8fca92d5a4e28"],["/Swift编写的20个iOS库(一)/index.html","d105dea73217bde58933c55067fdea0a"],["/Swift迭代器设计模式/index.html","6e95ef6d7f6962916fda41b00f325813"],["/Swift适配器设计模式/index.html","ae6ef8bf3aa53e203709294dcd7ac583"],["/Swift静态工厂设计模式/index.html","fe21ed5ed342a90d504df55489d3895e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","083d519b40fba89d88914bf576a2f74e"],["/UICollectionView data source and delegates/index.html","3e09a18473888f3f1e27b74dff7916c8"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","353b570859993a9b890d840522e8ce0a"],["/UIKit初始化模式/index.html","4eb737ffe70379891cbf7d6820d29dae"],["/Ubuntu18.04替换国内源/index.html","238058cf268e5e4ef245af4eef959899"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3e946102e9a4b05c1820561c6a1ea672"],["/Vapor系列 (一) :  Vapor 初探/index.html","844cf8f3147e9f1e334ba79236b69b5c"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c2285890ade31d32aea6bd4fa01b3dd6"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2d378a4b06d5300fa2dad08b786c60a5"],["/Vapor系列 (五) :  使用session进行authentication/index.html","1fa225e86cb1d2c3e31519fe4d58c743"],["/Vapor系列 (四) :  创建博客数据库/index.html","47740eca91dea144a3e477be15028ff2"],["/Vapor系列(六): 徒手撸一个CMS/index.html","a27555880adffa9793ee2e423f6a177f"],["/WKWebView与Native交互注意事项/index.html","93dba8e0624aa4c7a3aab70f13eede34"],["/Xcode扩展/index.html","bf8c69ea5b06d65b80215805da1bb3fa"],["/about/index.html","4a8b129c7790378078e374a40adb53fe"],["/appleOS的Networking示例/index.html","67d056fc15f2166dc87489b97d531e67"],["/archives/2020/03/index.html","c25d464307a241506a8252ab3abd0bb8"],["/archives/2020/04/index.html","af470c7cc5fecf7ce7674150139ad794"],["/archives/2020/04/page/2/index.html","afcff23f8f0e146b71f6fce7cd6a5f0b"],["/archives/2020/04/page/3/index.html","aa67f6d9d60fff8c53ae0c656f532a21"],["/archives/2020/04/page/4/index.html","1981d0a1dcac53ec520f2d6934388dcf"],["/archives/2020/04/page/5/index.html","a1cda1ea66fc96c07ccadeeaa290464e"],["/archives/2020/04/page/6/index.html","6b9f344fb8d73cb083018a6774093200"],["/archives/2020/04/page/7/index.html","0fdbe04bdf09d13297c57d725dd7aaea"],["/archives/2020/04/page/8/index.html","46aebdf5fdbc20bcec6c60f4b4b84b5d"],["/archives/2020/05/index.html","d81c8501f2eed754ae6402f6007166a5"],["/archives/2020/05/page/2/index.html","d620f88d4e798ce4b5831629595422a9"],["/archives/2020/05/page/3/index.html","f92731be63eb3bc2340e0f732e2bfeb9"],["/archives/2020/05/page/4/index.html","1ad2583b06b25591b53e44ee5b4e4a70"],["/archives/2020/05/page/5/index.html","34679fe98de0b50514637ca113291bd3"],["/archives/2020/06/index.html","2aec1f0a9d6782501a62263a36adc534"],["/archives/2020/06/page/2/index.html","aa17205216f3bed7ffee78aa293f0cff"],["/archives/2020/08/index.html","feead8ec929681a0f589dd033e9149f8"],["/archives/2020/09/index.html","070c315acd18a2ad3df8dba88882981c"],["/archives/2020/10/index.html","5006cf7621123e75a3ffa083e60aa571"],["/archives/2020/11/index.html","04ca58cc65d6fd902f7772ccb9c2ddca"],["/archives/2020/12/index.html","f8b159411dcd5a5da8df12838cf53b45"],["/archives/2020/index.html","60e6e40a771497e3518183fcc5804581"],["/archives/2020/page/10/index.html","a1566314f81720f067f61942747baa77"],["/archives/2020/page/11/index.html","63e14b13cdfd967e8f035ff0597c4903"],["/archives/2020/page/12/index.html","2a6218072d1f617253b6752cc56c5b97"],["/archives/2020/page/13/index.html","888eedcc653c069304d847df7126ebd8"],["/archives/2020/page/14/index.html","571c0fed0102f434669fe9de13cf274b"],["/archives/2020/page/15/index.html","8daecd0d231ea14093ffa322cc39864b"],["/archives/2020/page/2/index.html","2818835e4d332c8b8f0f726bee897e22"],["/archives/2020/page/3/index.html","8c9518e6748065b957dfc10008e33110"],["/archives/2020/page/4/index.html","27d282bac8d7b2f6bf747f82972cb3a4"],["/archives/2020/page/5/index.html","321fd40590eaa1af46785ddfc8dbf385"],["/archives/2020/page/6/index.html","fc590f359a960c86609a6807b488291b"],["/archives/2020/page/7/index.html","a9e3d4501ea3983cd93ae0b0d13fd169"],["/archives/2020/page/8/index.html","dc0916407edb77c804859ae04aebc3de"],["/archives/2020/page/9/index.html","b04bb83cfff73879e2e3670d040e4ce7"],["/archives/2021/03/index.html","72f6ccf8a777cdc56b0f65a84e57e351"],["/archives/2021/04/index.html","52927039bc6cae243eb9900c30c4f918"],["/archives/2021/05/index.html","34b64f78eab632341ecd6aa08ce854c6"],["/archives/2021/06/index.html","edb98f04967281d48d9a2aae81dfe6f5"],["/archives/2021/07/index.html","1bea49858975c8b1540841bd9c3f35ba"],["/archives/2021/08/index.html","1d57ef18c4b56b425f492ac07d12f82e"],["/archives/2021/09/index.html","0624fe76ce7735f8bd55e3e6ea9a584f"],["/archives/2021/index.html","424879a7cd0940628da69b4b03f4c9d2"],["/archives/2021/page/2/index.html","e8da3a68d454af446f79045ad1d1cc97"],["/archives/index.html","8a3ca618c79247f87bcf76e3b39ade13"],["/archives/page/10/index.html","0ec73b3c617addeb1a719004fcb6b88a"],["/archives/page/11/index.html","7769143d9887d9b73b76665d23f7c327"],["/archives/page/12/index.html","1cacc1cacbdc544c3cc99277622645aa"],["/archives/page/13/index.html","632907b96548a3e970a2cc13a4fe00a8"],["/archives/page/14/index.html","c3e3c838a04621d41de9047fd212ab44"],["/archives/page/15/index.html","37316361fa73d8e9e3acbc58f7245bad"],["/archives/page/16/index.html","767e4b5a5e971c0e56430cf7d0470231"],["/archives/page/17/index.html","f024ebc045bd369233c0e2ce40259b56"],["/archives/page/2/index.html","175684e0557a2af733ea7b6adba1e692"],["/archives/page/3/index.html","2d8a32e3b607e809b3f58aca55fd80b1"],["/archives/page/4/index.html","eda0fd1fa91e4358ba24ed09aeff5e2d"],["/archives/page/5/index.html","df890b39e15e769621544d366a6467d0"],["/archives/page/6/index.html","e4243ce36b5c7fb1a016e732388d1816"],["/archives/page/7/index.html","71fba31ddf33d9c794e6ef99c37761b1"],["/archives/page/8/index.html","d432843b20ba5b71f2889c3a8f13759e"],["/archives/page/9/index.html","4895a5c9a0927839618370c5fa75cadf"],["/bugly 上传dYSM文件小记/index.html","b9569d96643801e0bcf6862bfc9c7a50"],["/categories/Advanced-Swift/index.html","f6507c4711756ea6cb927f09780b5de6"],["/categories/Advanced-Swift/page/2/index.html","834d5a81220be632b2b04e8cdd28ae06"],["/categories/App-Architecture/index.html","8df240b690bf07e5d2eb7f338d23dc66"],["/categories/Array/index.html","447424960bb84c6a971fb1d67ca37b38"],["/categories/Codable-protocol/index.html","e605c143436ebc5030d0d16a82718bef"],["/categories/Combine-framework/index.html","5a38131653d834708952fda0461c4eba"],["/categories/Combine/index.html","18c0ae72d464dfd7fd98cd71c0f7bd77"],["/categories/GRDB/index.html","7015e547df6950968b9d0e70467b98f0"],["/categories/Go/index.html","272bd15aab785424a36d236dc5e1da66"],["/categories/Grand-Central-Dispatch/index.html","0527f614aa6bba4865d9eb258b46d777"],["/categories/Homebrew/index.html","e5c860e5e68ed967b9a55786c39bb0a2"],["/categories/Linux/index.html","928ca6738a9c19a785a68a67d4578683"],["/categories/MySQL/index.html","cf34cdab53af5cb81ef386f7613b577a"],["/categories/Promises/index.html","7160d91a248c993afe3fdd9a7aca2c86"],["/categories/Result-Type/index.html","bf8c18d7a446653fb7f1c123cf339855"],["/categories/RxSwift/index.html","4639591323dab168208993e2b752101e"],["/categories/Server/index.html","ef7020d74fac1e99dbbf0db41a986309"],["/categories/Sqlite/index.html","e90106a9950f72b2a2ae19d28f3a4112"],["/categories/Swift-Apprentice/index.html","22b6fc9f89ad90fe705bb9b20d8b9b51"],["/categories/Swift-Apprentice/page/2/index.html","becfd978def85ca490c64d4d7b40980c"],["/categories/Swift-Apprentice/page/3/index.html","cba6fc75f4cc8b7a793abc21035cfb86"],["/categories/Swift-源码阅读/index.html","d3aa5223004fdd44b83de8700f38d578"],["/categories/Swift/index.html","7e919d73187a4873f370af1ffe622df6"],["/categories/Swift/page/10/index.html","6006e6e4012094c6ceef0428c491f466"],["/categories/Swift/page/11/index.html","63ea03d34aac949c5e8d431db2e41bb8"],["/categories/Swift/page/12/index.html","f68c271c979556d137e2a19b1d771ea7"],["/categories/Swift/page/13/index.html","1f13e8ee6eda41a2a226c0bd39197d06"],["/categories/Swift/page/2/index.html","200affa1d80027c599fb14882c1f445d"],["/categories/Swift/page/3/index.html","da1cc94398810becd7ea7b80195aa6cf"],["/categories/Swift/page/4/index.html","5e793ad656ccedd5ee244490ee926b90"],["/categories/Swift/page/5/index.html","8dc1970f48555cc12c16f9e4c6fda70f"],["/categories/Swift/page/6/index.html","52d3fd7637b461432891a34371efc630"],["/categories/Swift/page/7/index.html","639addb28f6c5f0d741f1e016af56366"],["/categories/Swift/page/8/index.html","f346f235dc9432a939088210aed13372"],["/categories/Swift/page/9/index.html","b13e69438fbb4c1baace35aef8951f42"],["/categories/Swift5-2/index.html","6ca38e0c242a0be41600d504e29a628d"],["/categories/SwiftLint/index.html","4685ad0e7a89d3bcfb8097aef3ba11cb"],["/categories/SwiftUI/index.html","50d5681b53203c17d6a705fdf4dc2801"],["/categories/UICollectionView/index.html","e9022f8e1b96cc8181d31b407204acbe"],["/categories/UIImagePickerController/index.html","8213fffc5f895199e8d92404285f3853"],["/categories/UIKit/index.html","65a4905e9205426f71cec0297dc06d34"],["/categories/UIKit/page/2/index.html","b15bb97b741c005b3b9e5bf4c7207081"],["/categories/UIKit/page/3/index.html","c1bdaff14214103b1547ac0ee75c1000"],["/categories/UIKit/page/4/index.html","de9ae0981f2b8ad09c2c470770cd7cce"],["/categories/UIKit/page/5/index.html","8c6d7d442c8a021bd75b6d10ff6ad655"],["/categories/UITableView/index.html","2a65abd15e8c4fb43e3ca11b8ed8dea1"],["/categories/Ubuntu18-04/index.html","3002fc1e49ad8d35f46a830f130563e2"],["/categories/Ubuntu软件源/index.html","6746cd273b9f526e7ca88e15badd2e9a"],["/categories/Uniquely-identifying-views/index.html","1ff7227c7bae07edea128803e7b5281c"],["/categories/VIPER/index.html","1eb18c643921c7efa0e3b498a8cfe461"],["/categories/Vapor-4-0/index.html","7775d1a8e29da32a8f11f4a8d08312b4"],["/categories/Vapor4-0/index.html","b8130b9c54af49ead54685a7f26c0d0a"],["/categories/Vim/index.html","59ac7f68c693b667e53728b730b57099"],["/categories/WKWebView/index.html","41864cd41ef448a46802a9b060d4bb77"],["/categories/Xcode/index.html","5e1c20717618275bda5a935702ba5426"],["/categories/appleOS-Networking/index.html","507d5b753610000f7754f4ccac93e726"],["/categories/bugly/index.html","ba5fc5cd2a7140348e6c1d7f2b837222"],["/categories/enum/index.html","b24976773431679b66da7299c15bebe0"],["/categories/git/index.html","6c47b8cdde8976a9096d4be87c6571f1"],["/categories/hexo/index.html","c0f10e01be16b2870d935a5d4960d9e7"],["/categories/iCloud/index.html","6109f364597d10a2a51dcf3841488a70"],["/categories/iOS/index.html","0156d9b633bf6fff3e7eeb3ca2faf03a"],["/categories/iOS/page/10/index.html","ec3ce06a7ae0d57e585f71ad630a0a02"],["/categories/iOS/page/11/index.html","4547634572846f3754374d3c0beb7ade"],["/categories/iOS/page/12/index.html","9a4fb3e7e0416ae531bb8cbb53aaab13"],["/categories/iOS/page/13/index.html","434eff24c286ae72e4e029dc1ef74113"],["/categories/iOS/page/14/index.html","caac029005538a511bf59dcd761b5123"],["/categories/iOS/page/2/index.html","5c926c3fe924e71c0e5ce6958dd80239"],["/categories/iOS/page/3/index.html","9477639e760fc868996fc14e0484c27c"],["/categories/iOS/page/4/index.html","f6827f3f4e1b11c345df452eb1d7af6b"],["/categories/iOS/page/5/index.html","1db7ae45167ff46f3e1b0e152181e7e5"],["/categories/iOS/page/6/index.html","0c51f80e0742ded855b0d54831738061"],["/categories/iOS/page/7/index.html","07d6ed02be5de011d9681dcec82e0e44"],["/categories/iOS/page/8/index.html","717b463a298305b2a04d8e4ea712d963"],["/categories/iOS/page/9/index.html","9a71560a85da80b76fc59103ef63535a"],["/categories/iOS面试题/index.html","db58acdaa90b1ee4fb787fb9441ce325"],["/categories/index.html","6f9a54248359c2c494ee16e9c4063fc0"],["/categories/random/index.html","99ccaeda680da3927bee344702c2ee5d"],["/categories/三方类库/index.html","c2de2dcec409407f00ee2075ab31d158"],["/categories/函数式编程/index.html","36525425dc1d07e97f7ec7ae35e5a5c1"],["/categories/子类化样式/index.html","93ec275b8655c3fd2c775b31e7166867"],["/categories/开发技巧/index.html","60984418d0fbe57aa885d1e929cf5c27"],["/categories/开发记录/index.html","4951c785908bf41107e5b6c2ebdd85e4"],["/categories/技术支持/index.html","8c647b73a897093fc50899337b9c9a5c"],["/categories/数据库/index.html","368a455324deb84343e4b19b856e3fc2"],["/categories/架构设计/index.html","fe0e431f4dbe76b22043654df28d4892"],["/categories/测试/index.html","18dbf7bafc6186b3db5eff12ebdf52bd"],["/categories/用户体验/index.html","a45d825ac2f7f2402e10595f659c0cf7"],["/categories/用户协议与隐私政策/index.html","26b495ac6c162668e2638ed0512da07a"],["/categories/设计模式/index.html","1b1728c4b49f77357e69552975021673"],["/categories/设计模式/page/2/index.html","efa260ae15a6d5ffbed2248659c13b31"],["/categories/设计模式/page/3/index.html","e8871ea3947662ac266c9ee83b9d074f"],["/css/main.css","9181efba3fec462b364d5ec9834c737b"],["/hello-world/index.html","bd47c5098fae513e6203eba74ecf6b65"],["/hexo部署失败/index.html","07c2947ca5e747565f4c6fcc112fc670"],["/iOS 15 适配/index.html","218185b1236fb6da7fb42e976619ae96"],["/iOS VIPER架构深入实践/index.html","c96929ea4bfb30ce124d0388ea90a5f0"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","16f7c4dd3eeeb132d43b268f4e79d340"],["/iOS 自定义视图，输入表单和错误提示/index.html","753eaf4497bbf8dcc28a4db9982666ae"],["/iOS如何使用iCloud文档？/index.html","62175e1973a4786f2a4ac08638f2ed6a"],["/iOS子类化样式/index.html","84577c60f77986fc1a36969214c26751"],["/iOS开发记录<一>/index.html","7a36914e4cfa9c11d315ef4af161068e"],["/iOS自动化布局编程/index.html","5dc2cab6cc6bf7bd8fd65cf21e4c4d5b"],["/iOS自定义转场(By Swift)/index.html","21a1aa3dc9b0f42609dc780ea946f27b"],["/iOS项目架构：使用VIPER/index.html","de4a85c866da2348ee5d4a6338847fc8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9d94827b6f5efeb0f80a1a89b812a7ce"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","e5424d5b1e73c094c18e24d097ffef75"],["/page/10/index.html","26374551b0143cd0a9168f970f1364b2"],["/page/11/index.html","749757fbc0b0868f0c53cfaf01a5ac3e"],["/page/12/index.html","ef3b5e7ceeaca22c3706f8f6e5a4d33e"],["/page/13/index.html","f6dbf560516c71723bd6c6e51c6829bc"],["/page/14/index.html","d8dcf4783274e9c1c785d949bec5bc87"],["/page/15/index.html","374f911f25fe5009dc73379e6db175f8"],["/page/16/index.html","441fe2ad595dc9805b1813d2f4d023ae"],["/page/17/index.html","134b9ebc567de0b7d9da8238152ac8b0"],["/page/2/index.html","f5b782c54933bc494cae2c63b0c5fb0d"],["/page/3/index.html","58b344bf98d93633b9b4d264cd4681d4"],["/page/4/index.html","0bd8c6c46d661c38ccd73106b413c3ab"],["/page/5/index.html","c60945229e61cb536750f3834125a717"],["/page/6/index.html","10cf2168f23b3a9b7262219f3ab9b046"],["/page/7/index.html","31873f7ad6f5b9b6f57b8ce5c0a81b07"],["/page/8/index.html","86dcd3431c4da8a981c785001eeab60b"],["/page/9/index.html","7908da4c50760e429f88cbfe01797409"],["/schedule/index.html","762f697d64f41f63409b67fa1bfacce5"],["/storyAppPrivacy/index.html","e864e2bff007385532a37d0c14fa1a47"],["/sw-register.js","6524037b65a99e32216194a6ff11082c"],["/tags/Advanced-Classes/index.html","1402df976d0305b45da3743855515aa1"],["/tags/Advanced-Swift/index.html","0f25aa90da4cee66c94312c23955fb99"],["/tags/Advanced-Swift/page/2/index.html","b83d48e06cbc5119d0152e384c8addd9"],["/tags/App-Architecture/index.html","dc497587d8a9e85fb6a72e57a6c48aed"],["/tags/Array/index.html","5e1b989f6630b55e5267e379bb64b458"],["/tags/Arrays-Dictionaries-Sets/index.html","f1af585bea2d811555839ad7c95a2917"],["/tags/Authentication/index.html","54379196a8ae4e8e29d72b88f65691c0"],["/tags/Build-in-Collections/index.html","8bb8e89e6c199f06eab179f826ee3f27"],["/tags/Building-Your-Own-Types/index.html","b9a41562ef860a5e89bfcd8e78506ec2"],["/tags/CMS/index.html","d864cd663fea845345648aaa2cf2da92"],["/tags/Classes/index.html","4cc6d90417bb20c4981aa004465237bb"],["/tags/Codable-protocol/index.html","ce52af69e5f578821eb109a7ff991302"],["/tags/Collection-Iteration-with-Closures/index.html","b3c19f93e8351f1be83579f7dca6ee74"],["/tags/Collection-Protocols/index.html","27e2a323462570e3bbeb7a0e70121945"],["/tags/Collection-Types/index.html","84e274a96b7b093de4e3b72b0c9e9fff"],["/tags/Collection/index.html","624a2c1ef7f77941f7c52116699d2773"],["/tags/Collections/index.html","ebf5cde2108bc79542c6a2d184ab418e"],["/tags/Combine-framework/index.html","8b34d257fe5e74b2c5d52f5904b04d2a"],["/tags/Combine/index.html","99804229c993902dee8fbb583455e08b"],["/tags/Dependency-Injection/index.html","274162f39e4a779bc07cca21cc93af22"],["/tags/Encoding-Decoding-Types/index.html","c3f9ba8e6e4d2885f19a25319c7b081c"],["/tags/Encoding-and-Decoding/index.html","e654b9b4f960beaec9c800cb922483f0"],["/tags/Enumerations/index.html","89bbf96aa3538b1afa150c93dcaf2b3a"],["/tags/Enums/index.html","5b79ac07858b0007de14c735fa2efe38"],["/tags/Error-Handling/index.html","470dda9efe8d980d0876c572bf6e00f8"],["/tags/Functions/index.html","b752d8f98c718cef1d3f01f2eaf51d4d"],["/tags/GRDB/index.html","a8884aae6fef7bd406f4d73e6cba55d8"],["/tags/Generics/index.html","0040e846633ec5ab02bcb5efc6ff90cb"],["/tags/Go/index.html","b8962cc2dd1893c0bfa64b307d8cb089"],["/tags/Grand-Central-Dispatch/index.html","4723fceca0e1b8f82dcf2512169c18fa"],["/tags/Hello-Vapor/index.html","81ecd7c5e5f8dc2c4cce9f200ef4887e"],["/tags/Homebrew/index.html","aa79c9b00f042f82a25cd014f8f55a74"],["/tags/Interoperability/index.html","10f18751d33227ec9b3dd9222e742a5c"],["/tags/Introduction/index.html","b4828ce0fa63a76e252872688dbcbcc1"],["/tags/Leaf/index.html","1700163780f8e64a5e83be610cd05aab"],["/tags/Linux/index.html","12a51c97dcd53563e8b54bb8c09d77a3"],["/tags/Methods/index.html","d3a5e43bdb152c6deef3fd52399951c7"],["/tags/Modules-And-Hooks/index.html","8ab0263ad20594aa4b9f34f0c10e2caf"],["/tags/MySQL/index.html","e9c30932fac22fd6029d3a3a9f612cef"],["/tags/Optionals/index.html","276f09474327eb45926c0a1803489d08"],["/tags/Promises/index.html","b9d620c8920df83b1e2c21ccd8286cb0"],["/tags/Properties/index.html","fb739fe79c6efa9605970b10e9089e4b"],["/tags/Protocols/index.html","0a1832df9f99ca698676f9aafa9002fd"],["/tags/Result-Type/index.html","42c090fb9f9696e53396900d12973cdc"],["/tags/RxSwift/index.html","bae5235968347dcbd13816580501e5bb"],["/tags/Server/index.html","862648eeb2cd3597d4ec59b47ba0944c"],["/tags/Session/index.html","b5d4f4a908a78d99d7e0d9db7aba5c3d"],["/tags/Sqlite/index.html","5c019804df98568f4fc025bc245202d4"],["/tags/Strings/index.html","5167ed41f7db93daab42c9584bd3357f"],["/tags/Structs-and-Classes/index.html","59ba76aad98dc24bdfad650a35e172aa"],["/tags/Structures/index.html","64fe8253dcdd7f70adf9bd84ebe50a08"],["/tags/Swift-5-0/index.html","01bb327543798828fbcb8899a03bdb07"],["/tags/Swift-5-0/page/2/index.html","bf6627b6ba2fb70579fbbea0edd1b44f"],["/tags/Swift-5-0/page/3/index.html","0bc0e4ac2dbfb36df31bf10f372a6aa3"],["/tags/Swift-5-0/page/4/index.html","774c50c3f7f20485508ba9bbf75a90ad"],["/tags/Swift-5-0/page/5/index.html","8310e8cba18f5ecb5d8adf4a759e8526"],["/tags/Swift-Apprentice/index.html","eb72892a56370367f77e3d893dbc04b5"],["/tags/Swift-Apprentice/page/2/index.html","501ff6b0b7f667a5a71c9afac8e0df13"],["/tags/Swift-Apprentice/page/3/index.html","52dd2351071d718fa4f44287104f612c"],["/tags/Swift-Package-Manager/index.html","9e1134caf9f135a8a48b78be4e745fd3"],["/tags/Swift-源码阅读/index.html","03908f71d42d701159263c1a6b673e3f"],["/tags/Swift/index.html","d8c56052eadd6e6f719edafb3c9d1232"],["/tags/Swift/page/10/index.html","9527e435c2c770c50ac9bc8a9f0a34e7"],["/tags/Swift/page/11/index.html","d8188968d56c390b89added2a36534bf"],["/tags/Swift/page/12/index.html","39fbcffdbc3237235f1e6b421dda1f23"],["/tags/Swift/page/13/index.html","e0fba1f6ffaea1fa0f6602e678c4181f"],["/tags/Swift/page/14/index.html","60b5b38f3a82c81ddd05af591f507b2c"],["/tags/Swift/page/2/index.html","793f42a89f7aedec44e002e67faf16e2"],["/tags/Swift/page/3/index.html","0ddf166b8a4a99621e4c74b203e33714"],["/tags/Swift/page/4/index.html","9333860f55b52cc305f95a1d77acbff6"],["/tags/Swift/page/5/index.html","c06c29b74c655ebddaccf35e463c1fb4"],["/tags/Swift/page/6/index.html","ee7a2d889c5cb858b52cf79026dea504"],["/tags/Swift/page/7/index.html","abbe361297573fa3c7a93a6de015c846"],["/tags/Swift/page/8/index.html","dd0f4bbf6b995d8eb41759a9f3709e32"],["/tags/Swift/page/9/index.html","0193fa007ee31b1f88d00aaf25e0d919"],["/tags/SwiftLint/index.html","1221eca276be6b7ed0f0632b15988693"],["/tags/SwiftUI/index.html","aafa0440a22f56ccc8a53495920c4791"],["/tags/UICollectionView/index.html","baa9ebe6abd4e95649135d98fa25708a"],["/tags/UIColor/index.html","1f6f4878283b4da4b0daa8fe8ea64e30"],["/tags/UIImagePickerController/index.html","b381c7fccf8c2bbe3b8f9b4f5c8de016"],["/tags/UIKit/index.html","a88980037fb198645d39a7ed22fbed6f"],["/tags/UIKit/page/2/index.html","2f932cd1081ac6ba2288d2bdbea8e4d7"],["/tags/UIKit/page/3/index.html","b2be0822965ffb4c8c9daab2de1126ca"],["/tags/UIKit/page/4/index.html","7eddc5ea6d083fc13e4321c7dfb20e0e"],["/tags/UIKit/page/5/index.html","ae36dad2516b1c70d031fe68d7655ea1"],["/tags/UITableView/index.html","2841170d63981a2de273645e13ac4596"],["/tags/Ubuntu/index.html","5ea2f08db0fd8e1c08a9d2a5d2fd5df3"],["/tags/Uniquely-identifying-views/index.html","dde05192b6506bfa7db7540cd2167188"],["/tags/VIPER/index.html","4218c26101700c7a8a7ff443492f7959"],["/tags/VMware/index.html","f4371b7a3546fb7e7f19fbedc0491a8b"],["/tags/Vapor-4-0/index.html","0bf662cc828ff64728ca599161af0c9f"],["/tags/Vapor-初探/index.html","0199e75d6d6b7013311a6dea16c2bb18"],["/tags/Vim/index.html","a5d2708f4301de36a3f2fd37ce5fd357"],["/tags/WKWebView/index.html","94ab08aef9513441ad09237fa368e471"],["/tags/Xcode/index.html","26bd817933cdbd6e729117cd84b0cb56"],["/tags/appleOS-Networking/index.html","99bb7688ce343bdd5207ba1156e035de"],["/tags/bugly/index.html","2fecb4409d7e6f75e092babaabe920ad"],["/tags/enum/index.html","3e49792122fe1360e58773356a371b94"],["/tags/git/index.html","66a683af8d8e97137b471dda0953080e"],["/tags/hexo/index.html","3dff6bf82ed5a5660e95fa82d1d6a0c2"],["/tags/iCloud/index.html","0fa86643296acf68eaccebe77c2992e3"],["/tags/iOS/index.html","c35067c089cdd03f6b81d63a505fb21a"],["/tags/iOS/page/10/index.html","209481fd9197f11cba5fc7446791c561"],["/tags/iOS/page/11/index.html","8c7f4d193aeabf605b94e8adaaca05b0"],["/tags/iOS/page/12/index.html","755f21f1e8b477680a09a67245bc3eba"],["/tags/iOS/page/13/index.html","f374da2a38207a96e71b4ad8e647b07f"],["/tags/iOS/page/14/index.html","e334489530138a046cbff4f174a53ff1"],["/tags/iOS/page/2/index.html","69ce9c118f27dbe0f72d4ec537101252"],["/tags/iOS/page/3/index.html","aff756a438ca923bce15ac1acf263fe2"],["/tags/iOS/page/4/index.html","71062a2a05c1d90300a6c47fbe82d12a"],["/tags/iOS/page/5/index.html","82f486d33fc9cb743f11a77a3babf148"],["/tags/iOS/page/6/index.html","ccf359a93c18c99ca588d74452b7e05a"],["/tags/iOS/page/7/index.html","af12e3d47c40b45d8518fc2abbfd49b0"],["/tags/iOS/page/8/index.html","684a0bf05edb95c5beb45ab4689063cb"],["/tags/iOS/page/9/index.html","f126efd1b7488d8cc325d929e089ed34"],["/tags/iOS面试题/index.html","cc0131e3207852db3e447b2aece81eb4"],["/tags/index.html","76a028b910eb86d9c27307a04bd4eb9d"],["/tags/non-optional/index.html","851c84deda61b800716d1d013943f9b0"],["/tags/random/index.html","d9833b0382ff809657ea7032b2e5879f"],["/tags/transition/index.html","19adaa3840f84be9b63a4989b99dab01"],["/tags/三方类库/index.html","8c8d553cddee6c3fe526dcfdc478a47c"],["/tags/依赖注入设计模式/index.html","8a1552b51af0c3eb03acdb638945b7a2"],["/tags/值类型和值语义/index.html","116575b9ef47b9158c8402712991b8fd"],["/tags/内存管理/index.html","ee9e49212e0fe7d13273f4b76f0e1227"],["/tags/冒烟测试与回归测试/index.html","31552fb61082424082453a8e6b7fb187"],["/tags/函数式编程/index.html","41cb7014d1925f014e1a6a84711efbb8"],["/tags/创建博客数据库/index.html","05d65858753e151b9bf2e50767495d0d"],["/tags/初始化模式/index.html","bed16e8d5b35be4747b08692babcb825"],["/tags/单例模式/index.html","65709d74d34a868adeaf9be4f897dab1"],["/tags/原型设计模式/index.html","fc56c45830c743be8309ef8cc66d5b88"],["/tags/命令设计模式/index.html","2607ec5bfb6e953227cfcba247523b22"],["/tags/基本控制流/index.html","9ffb394b956eb4558d122790bea00649"],["/tags/外观设计模式/index.html","fadbb36e992c95489006818eda4c7aea"],["/tags/委托设计模式/index.html","b6b011fd9cbd6902e7ac0b7a1b4ae10f"],["/tags/子类化样式/index.html","3aaefc0138e63943fb929f2695b73447"],["/tags/对象池设计模式/index.html","63220649869a7798b78794948b9b05d4"],["/tags/工厂方法设计模式/index.html","22ad48b047416adb7a8728b70116a239"],["/tags/工厂模式/index.html","ea5afdf451ec48549579c611c720f927"],["/tags/工厂设计模式/index.html","6f8ecc14155628d0bd64e8dc38486403"],["/tags/开发技巧/index.html","389f508ca999c0c44ff85a182eb32a4c"],["/tags/开发记录/index.html","ae332c586352c9854f2c489e835b58b5"],["/tags/懒加载模式/index.html","606d7d6f016716fac2ea9828c9761279"],["/tags/技术支持/index.html","feb12acdc8e6fb7c3dc3a5d0657b791a"],["/tags/抽象工厂设计模式/index.html","068bcf90c2a96cbd7c48a088825257ca"],["/tags/数据库/index.html","bb4ca35ca094b44355cbc5341bcbbeca"],["/tags/构造函数/index.html","a2b55e214330c67d88f08d6217bf1fbe"],["/tags/架构设计/index.html","4011bde77c60bb5af1afa82ca1c9a8d5"],["/tags/模式匹配/index.html","fbfef11feb4d81866ab8e995d62b6b8e"],["/tags/生成器模式/index.html","e0b9f090e3129bc86cc1003f0b57872d"],["/tags/用户体验/index.html","e11cce3e5445fa329c378a81083a060f"],["/tags/用户协议与隐私政策/index.html","70b6da2dc096717bc5169a15d5b2b130"],["/tags/类型与操作/index.html","1d489d476c4c606afb368e0437279c77"],["/tags/自动化布局/index.html","cc23597f9b347e5f800c1ce983889bae"],["/tags/自定义UIView/index.html","f7a4e8c1ea281b786940699c828a59a8"],["/tags/自定义转场/index.html","a20e62bd0badd8d233e9bb1b0785dd2a"],["/tags/自适应布局/index.html","dc91984adc3e0debc95fe813d212d6d2"],["/tags/表达式、变量和常量/index.html","9705daa67188d348d58e73feee3b2d57"],["/tags/设计模式/index.html","515a17e189ca2b44c93872de55ec273f"],["/tags/设计模式/page/2/index.html","2130bb9677f9cfe210fcea0e2c930f25"],["/tags/设计模式/page/3/index.html","a96400fb35acd8dcee8590dacb26dbcb"],["/tags/访问控制和代码组织/index.html","342c8f397b2b2198447f26449dc986fe"],["/tags/运算符，下标和键路径/index.html","bca6a960f02afdfa1e28b2553e663d9c"],["/tags/迭代器设计模式/index.html","a939345219743e2f75ef06b8ae23be2a"],["/tags/适配器设计模式/index.html","a48cb8baeb11059156db2b40b7e40892"],["/tags/错误处理/index.html","58539de80596905f86af3e59d1174393"],["/tags/静态工厂方法/index.html","6ab8e03c5ee4622b218530f15b6ba3ef"],["/tags/面向协议编程-OOP/index.html","caf5548afd73a4e83162ed07ebebcab0"],["/tags/高级主题/index.html","bc4acfc3bfdb0f6f93d036589f40fa37"],["/tags/高级协议和泛型/index.html","42b54aae196d88919f3efb61e65fb57f"],["/tags/高级控制流/index.html","03d2f690e6306b87d4ba8aafb72eba56"],["/xcode 常用的快捷键/index.html","68524e89e74afbeab0dc500bdd77dda4"],["/为iOS应用构建输入表单/index.html","f10c28ba7ad526065c22081a756abb11"],["/产品开发的幕后花絮/index.html","3b850906eecdfa45fa6c37380692e74d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f274a967e1408590261497022ffd52cf"],["/冒烟测试与回归测试/index.html","a86ccf6b5a8cdff61cb7112973ea86ac"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b103a6d1f6ba1698b4991c9715334d26"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c67b28e5481c5c22173d1b9a849c442e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","96e0c1abb72aa86a03549ba2e95eefa7"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0f4cf6990a17989bbc3a3c1e3517297f"],["/在Swift中创建自定义集合/index.html","de3bbaf7d644263ea5352a093740881d"],["/在Swift中处理非可选选项/index.html","704d556dc97a927ef7f21449f111a4ab"],["/在Swift中生成随机数/index.html","6f4246b303d2446d97cc11e1e5f587f7"],["/在Swift中重构单例模式用法/index.html","a3a8690c6bd71274fe7ce70dda0f5f71"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","c27821a4728fa35d723f269f938ca2e2"],["/如何为VIPER编写服务？/index.html","d55906f6f45beb0b667eb3b228a32f55"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6817e6eb172e1cd0367a95ae0b4ba999"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","475f880f1111384f7f724c8ea420a055"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","ab05c6f4d8f964886e7db6e39b91a00f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b026045a05cb39e0d8b9082d0bd3cdc0"],["/掌握VIPER架构/index.html","2ca031497035bd1f9d790ba208ca7ab8"],["/揭秘 WordPress Hook 系统/index.html","5a7c4f519ecac660a6155cc7844d99c8"],["/比较工厂设计模式/index.html","2d2196314fb5dc390333bb66a8b3538e"],["/深入了解Swift中的Grand Central Dispatch/index.html","747173fed53d251f968ed2b8a55ed0c9"],["/深入研究Swift框架/index.html","c0a049da938eff1daeb125010d358c1b"],["/美豫直聘技术支持/index.html","f1145abaa25fbf99526de392f7bc4841"],["/美豫直聘用户协议与隐私政策/index.html","8a66badd793611519bfc3daef9494e9f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","8064c2e34fed956639502b789b4a7cdf"],["/选择Swift而不是Objective-C的5个理由/index.html","6eeefe5867a9fc54bb92123de3ba6c6d"]];
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
