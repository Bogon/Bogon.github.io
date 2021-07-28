/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","046c33673e5659c3f685c6b9bebe4fe4"],["/2020年iOS面试题总结(三)/index.html","2aa569d64bee81fcefb03ebc2158443d"],["/2020年iOS面试题总结(二)/index.html","83db82b313b615e2611f12249f5b505c"],["/Advanced Swift系列(一): Swift 简介/index.html","0eb00b70e691505f4b81623010e5da58"],["/Advanced Swift系列(七): Strings/index.html","773ae893a919592cde22cd50b43e4176"],["/Advanced Swift系列(三):  Optionals/index.html","d0759f73641dc93202d4d1d9fad45b5a"],["/Advanced Swift系列(九): Protocols/index.html","feb073429d60c56a677938336a059638"],["/Advanced Swift系列(二): Build-in Collections/index.html","1d7d89f0657aaa812e615d1ae2d311d9"],["/Advanced Swift系列(五): Structs and Classes/index.html","7aa6e7d346332b2834f25b1eb284f54c"],["/Advanced Swift系列(八): Generics/index.html","5dec33b38344501efb289f7abffbcda3"],["/Advanced Swift系列(六):  Enums/index.html","7329b5ee04085e0065071ce2f47bc4e6"],["/Advanced Swift系列(十): Collection Protocols/index.html","84dac66dd2fb47eb0f546d99e37aa9dc"],["/Advanced Swift系列(十一): Error Handling/index.html","c8df472708b20e904c66cea15e3c80ee"],["/Advanced Swift系列(十三): Interoperability/index.html","719ec66e79a62846de9fb063057bcfd0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a6c095eeec2cf417b11d04e5436207de"],["/Advanced Swift系列(四):  Functions/index.html","68a99dc2894f917e744b9e3e59b6b285"],["/App Architecture系列(一):  简介/index.html","04a7dfb1fbab76c19088bdd9edc926a5"],["/Functional Swift 初探/index.html","e4b1c82c387477994486275d79e0daa2"],["/Git 使用小技巧/index.html","423946c8704972a99486c8a287d20add"],["/Go 基本语法初探(一)/index.html","a8b43f189b7b8d678d415df97d5de1c2"],["/Linux VIM 命令及操作小结/index.html","17236b9c54fc38d2471f7d351fb557a6"],["/MySQL 基本操作/index.html","26f77608bc5f36e95710b230ddc2c712"],["/MySQL-列类型和数据完整性/index.html","a9f89f812f5b666f3edae84e3c956d32"],["/MySQL-数据库设计和查询语句/index.html","a977161e0f32f03342613d9f25f38dbb"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","23129de8ef5315a60ee5119b080940e4"],["/NSCODER和SWIFT初始化/index.html","c9b2f0ef8e17d48fb204c1efd4e07b9a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","404df18261acc8ececf7c67c20ef0b6d"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","72dc87314e200dffae2926791a20c9a2"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d22a3f2d4e376336c278bc16cb9cae14"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","d978066a0f0d5a5bb324793971018dbf"],["/Sqlite 使用Tips/index.html","afc670fbcf00fe98b51461211aafe62f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","12e824cd35c8ed3c578e4bd8dfeebcf5"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9bf31a1a353db66c26b668f5bc64314b"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","71e3e7e6d77d8e1f7fec136dcbd244dc"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","18e4380b9027c5dedcb5648c647989a2"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","41ca158b3a3ea9f7c39f76dcf4103433"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f152306e19ec8f96b4cad5f9424bfbea"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","65d9c5b06b5aa5fe365028941008de7b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","86b3fc8e77dbd51fb02312bdeae0cff3"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","79be2200a45fcdaad8f911ec381d1a6c"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e01394505cecf87d2741f124978a01f6"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","a549326b1b813714d17f25248c655cce"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","e6d7827069345233445a0ffac6618d96"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","997b9fa6cf7085152f98c7e16ca38da0"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","984159929a9d1ea153b7e51758084e28"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","634794c10d947ae9dc19af4a25b2ce19"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","215a9db009d5a660cdeb51c1b58a67bb"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d81c44756e3a12d9867fc6722c6de184"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","68c5b2f9d4166ea622b185e0ebbad942"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","30fbb17cc6e8ab7812d057ae2870ebca"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","199da9bfe7ee3fc2a5c82f90d212166f"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","1c1c6ea271a43b50d2641e353fb3fd47"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d95865ec4d9115c9be577e81149558a8"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","89e5017ab9f877c6ee09b5b0b80f832d"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","e3e9b7d1d0c7b3eeeb5b930b603442b4"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6b3c9d72f061cadf8038edb495130469"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","8957cb463efbdfb68696ed173506caf0"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4460d12691641a6875d21de85f7dc224"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","1eff8f7f7baf019de0cbb66463607945"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","edb53eca59e9be1334d33091ae3c2191"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c3c603bc388032effd1cb66446b97e14"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","9d5fc32cad1c6c45712a70924aecf02b"],["/Swift CompactMap vs flatMap：差异说明/index.html","ee578f85a9f49dd6c0815eb731871b8c"],["/Swift Grand Central Dispatch 深入实践/index.html","75a63e92c5ef3e3f8bdb11fd04e91ca3"],["/Swift Lazy属性初始化/index.html","8fff77b6e0f33e502b2911048315154e"],["/Swift Promises 初体验/index.html","e8ecc35a28a257c7f140f769a81bcfad"],["/Swift Promises 探究/index.html","58d6b8bc93fc4f59404b3f20ab9bec97"],["/Swift UICollectionView使用指南/index.html","7206510ea6e1b75cf62dbc08511d1af3"],["/Swift URLSession && Combine framework/index.html","246388d407c7c95bb65c606f7dece666"],["/Swift tips/index.html","a03a3bd1143d55706681732b3ff1afdc"],["/Swift 唯一识别的视图/index.html","9f44303ae50c6376a220c3d50a7cebc4"],["/Swift 如何学习现代UIKit？/index.html","e7565fbc2e90958f46688bb595e6533b"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","f0df1adc3c0bd0dcfc0ee514abe24b7b"],["/Swift 用 compactMap 替换 flatMap/index.html","ef4c212c3cb214c8ff2687db0386b191"],["/Swift 选择和播放视频/index.html","e6ae280a10455a2d0e7ea67a991a8082"],["/Swift中UIColor最佳实践/index.html","12388130eeec1342520189cf4b2ea9f6"],["/Swift中快速简单的工厂设计模式/index.html","edc60539cee9ab70eb820c0c34acd080"],["/Swift中构造函数与静态工厂方法的比较/index.html","7e27748358395baacadf98392b173c42"],["/Swift中的UITableView教程/index.html","7f21dd84b0131ecb3004377768652765"],["/Swift中的懒加载模式/index.html","e338ff7b0b087320f496008de7050661"],["/Swift中的模块和挂钩/index.html","af757e94b94522fdee76ab58484a3eec"],["/Swift使用布局锚点添加约束/index.html","104c83fb0fb10e5119d541eb35a55fd6"],["/Swift依赖注入设计模式/index.html","338d3c69eea2740fb7f8a151705546b2"],["/Swift关于Dependency Injection (DI)/index.html","c7bcee2842ca14ae848c9cf57b22b3fc"],["/Swift初始化模式/index.html","6c4b7cf81056a70544c2cee116391e1f"],["/Swift单例模式/index.html","7c875c90d49b85ac3304488b54b32212"],["/Swift原型设计模式/index.html","7f6b017bd41f5e2ea967449fa3f69e4b"],["/Swift命令设计模式/index.html","e37e31c32e5d47f2f0aa1dd8584d2192"],["/Swift外观设计模式/index.html","d95f36d1ee34e5e049d3fd6f16c7fa28"],["/Swift委托设计模式/index.html","22dbb46b069fbe13bf60eccb7b252832"],["/Swift对象池设计模式/index.html","fde597a560f5cff0efd888bfebde4e01"],["/Swift工厂方法设计模式/index.html","bec8e5248fe0fca1ff160fc84740ca9f"],["/Swift带闭包的懒惰初始化/index.html","3c2e2a45d2c0667f404964b9c2abb34b"],["/Swift抽象工厂设计模式/index.html","37b44dccf75080dd96b8c498eb17d08b"],["/Swift掌握iOS自动布局锚点/index.html","fb3859b6d4c0acd2d6bede22c9d75d4a"],["/Swift支持旋转的自适应单元格/index.html","3b2e34ae9b38cd1519fa2c8b2dd759ae"],["/Swift枚举值/index.html","d83ac93ee2fe1d92a35f7bf0646c7462"],["/Swift生成器模式/index.html","58c025ee364b4e46fc0888700754f211"],["/Swift结合Xib文件自定义UIView/index.html","84aeb2853c239605cfb6bd336dfa1b1e"],["/Swift编写的20个iOS库(一)/index.html","5d5764ccf4ab4ee866027c390259e2d6"],["/Swift迭代器设计模式/index.html","a39e9cc9381a7abec1eb7604a5738f83"],["/Swift适配器设计模式/index.html","365416184865d5d060b35dfbd461f4ac"],["/Swift静态工厂设计模式/index.html","1c889e6b86a2b170e58a08695c42836d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","bcb60aeaed0d081bf06ca9aebcdc70fc"],["/UICollectionView data source and delegates/index.html","64fc3e4318cf28c518ed09e7720da038"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","c78bf5e7fd775f028cac9c75b2cdd2f1"],["/UIKit初始化模式/index.html","ad2b6c64a84222443974479898ede831"],["/Ubuntu18.04替换国内源/index.html","79b10f2da3c752047d177b3e4b63a08b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","8fce6dc1d996f4287e178133e7b45590"],["/Vapor系列 (一) :  Vapor 初探/index.html","e70190ac80d68c5ed018781c078b023a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","432bc7f40212aac4a539afabf0d05a81"],["/Vapor系列 (二) :  Hello Vapor！/index.html","615871d6f50f1cbbb3239b6eb1f808f8"],["/Vapor系列 (五) :  使用session进行authentication/index.html","81739b2b39827f9c1c7c55539f684858"],["/Vapor系列 (四) :  创建博客数据库/index.html","49275a485d736d68f76deb233300b488"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0b96c22d54dddce0d9d817beaab1bf19"],["/WKWebView与Native交互注意事项/index.html","3159c6dd5b698df6fb42f56111c0ba67"],["/Xcode扩展/index.html","9685e43c65b1ab64a88f3b05d736b82d"],["/about/index.html","858daa8681289050f736de6cf42ae91a"],["/appleOS的Networking示例/index.html","abcb8a4f4b53d0072824d3afb14c724c"],["/archives/2020/03/index.html","7ab5fb7499d3776e0b077f1bb3268d95"],["/archives/2020/04/index.html","a19de250249550b9b016b0ecf98b4d83"],["/archives/2020/04/page/2/index.html","66e738334e5b96c62c10f1c76e6c548c"],["/archives/2020/04/page/3/index.html","f9199580f46558e4c36d6af0608ced66"],["/archives/2020/04/page/4/index.html","715b2dd0861a5db928fa326d944bc556"],["/archives/2020/04/page/5/index.html","8ae457f1a2f15856cc5bfc325bfb7cba"],["/archives/2020/04/page/6/index.html","ef4f1d57d089d7166c7694ec91ee9e47"],["/archives/2020/04/page/7/index.html","4b77e8f24ecedbca60700df4285211ad"],["/archives/2020/04/page/8/index.html","6c31441a50ad17d473a09b473988bbb2"],["/archives/2020/05/index.html","fe621e0c2d523ab80a53c84ef5774418"],["/archives/2020/05/page/2/index.html","9cb8ac1ea0c6f85591658d9d3e6f84e3"],["/archives/2020/05/page/3/index.html","20985bf68281bf720347d78a830a5670"],["/archives/2020/05/page/4/index.html","08e3c59af6dcaafbf7b571e3e96bda97"],["/archives/2020/05/page/5/index.html","6b5e68d4691a189a9a803bcb5ec8576b"],["/archives/2020/06/index.html","7d329c6c53def1d8790d4c1788c70953"],["/archives/2020/06/page/2/index.html","db326f93c0620b44dfa904337aac9627"],["/archives/2020/08/index.html","1e8ec1ab448901cd64cf2607edc76a03"],["/archives/2020/09/index.html","da681df15711957e7f43d96e7ddea635"],["/archives/2020/10/index.html","26e81444334d489e0c5f26aa0538b078"],["/archives/2020/11/index.html","99c037971d4abba0e479f76eeb32fb6c"],["/archives/2020/12/index.html","fdd035f5e87d65c92216d8b902151209"],["/archives/2020/index.html","177d7f4ef8020fc84e49710760fc3932"],["/archives/2020/page/10/index.html","86a9f963c9e3d6f2d05648dc9bf4e467"],["/archives/2020/page/11/index.html","25724e03cb16b4336743b7ec9367f9e3"],["/archives/2020/page/12/index.html","65d2e4b2b84365d761ec9fa2801c204c"],["/archives/2020/page/13/index.html","ffb1d331e28b260342d9c21fb3383c81"],["/archives/2020/page/14/index.html","8099c71b430546988450b597bc4e41a7"],["/archives/2020/page/15/index.html","e3c51cfc6d9f41642295c815f16ca119"],["/archives/2020/page/2/index.html","1b410455ff84b2d966b871d098d67beb"],["/archives/2020/page/3/index.html","913745a3f431d2391a422a214cb311d0"],["/archives/2020/page/4/index.html","b626b2f5417064c08ebff38c71757b62"],["/archives/2020/page/5/index.html","6b07c47be734b3cde4d40d569039b267"],["/archives/2020/page/6/index.html","afcaf8c50700454cef983709a69330eb"],["/archives/2020/page/7/index.html","4722437c7b6575905e0f63df45a01f52"],["/archives/2020/page/8/index.html","6d57922b416f33f2139a49369177077c"],["/archives/2020/page/9/index.html","538ed8e464c9aa2dbbb7d8fd50a45c97"],["/archives/2021/03/index.html","f5346673352a274514532feec34f5f3d"],["/archives/2021/04/index.html","8487a775a19298fb38ce4db41d302f94"],["/archives/2021/05/index.html","1c3f4c1cdbd06e919012d332c304083f"],["/archives/2021/06/index.html","2f204536911cfdbdfbd067fb3b91df88"],["/archives/2021/07/index.html","0b1e3effe54aad054ce5f441db64d65f"],["/archives/2021/index.html","72178fdea763bb8e8e3c0471a26158b2"],["/archives/2021/page/2/index.html","f915f38e303a7373e36b5880bac922d4"],["/archives/index.html","136a765e6d23f062017821e77b709011"],["/archives/page/10/index.html","3adccf104b2201499351bb6af791e404"],["/archives/page/11/index.html","47ab13f15595a96097a2afa1760c889d"],["/archives/page/12/index.html","149fe65a8328e5f2a126656402e66de3"],["/archives/page/13/index.html","11f40fff862e0891686e2027e6d83cd6"],["/archives/page/14/index.html","633da71626859203fbc2910ad3f24146"],["/archives/page/15/index.html","16905610703f57c1676b42830309c0df"],["/archives/page/16/index.html","d9f70f953d4e342a1be1c80d39315576"],["/archives/page/2/index.html","67dbc634fc323afe53cc8cbcd668672a"],["/archives/page/3/index.html","9486776a45d2480cd7af0a3db40d6547"],["/archives/page/4/index.html","08ea1879ce50c577aad7ea842d16d425"],["/archives/page/5/index.html","910ed211125cc85feeeee5e961d0ae71"],["/archives/page/6/index.html","d51b1aabc203fa4ea58a57f16402ae10"],["/archives/page/7/index.html","29f92400bb97c4a0b9240cb07627411c"],["/archives/page/8/index.html","a646a356f1c9fe01dd2bc016c1f44188"],["/archives/page/9/index.html","8f5e3b29497ed2616bca88716cec2d75"],["/bugly 上传dYSM文件小记/index.html","337863a9cdaa578bff3d4365f97f2d5a"],["/categories/Advanced-Swift/index.html","39642b83dde41289dc10ec83dd297081"],["/categories/Advanced-Swift/page/2/index.html","ca7d792c63ad44d0583c561990cecd4e"],["/categories/App-Architecture/index.html","0d2082ad14f3dfdb0ca7829be2d1f5bf"],["/categories/Array/index.html","595d0f72f1005c63f8d1155f7a8df2b6"],["/categories/Codable-protocol/index.html","7597e9d5770bed5e2e495c82aa77909c"],["/categories/Combine-framework/index.html","c67856ec47ed9c6b6e78774050e6712e"],["/categories/Combine/index.html","ff1cf03054bfb765c0787ccd41d4407f"],["/categories/Go/index.html","a1264f7216cbe69f85d0f7709d90746b"],["/categories/Grand-Central-Dispatch/index.html","8638252cfdef8a56004f1a75bde7b893"],["/categories/Hexo/index.html","47136b1c310d66d51b85106fd10de245"],["/categories/Homebrew/index.html","44eeca2b8782f57f556c6b7223c1370f"],["/categories/Linux/index.html","ef08e8ccf33b644852f9d0ef027739b7"],["/categories/MySQL/index.html","e0ecde37ad7068bfea4bcb9179ed34be"],["/categories/Promises/index.html","9847fee2b1bfaf8e46aaea2ab2f8fdcc"],["/categories/Result-Type/index.html","600a826f9a1a0dfff5a500a93d9eeead"],["/categories/RxSwift/index.html","21f834eda96f62424b49239ac07676ed"],["/categories/Server/index.html","2c0fcd30955d05b97a19a6c5a8c1478f"],["/categories/Swift-Apprentice/index.html","52b788e79dcf706dac3dad73bced44b0"],["/categories/Swift-Apprentice/page/2/index.html","98f15f690353050ededc0ef3b8b6d3c7"],["/categories/Swift-Apprentice/page/3/index.html","e30613df27526f1d5ab0febe6ddc6a7d"],["/categories/Swift-源码阅读/index.html","19bcc97965caed3321db97e62cbf4c58"],["/categories/Swift/index.html","3e447bee5b197f152e7be23f4e4ae636"],["/categories/Swift/page/10/index.html","c2aed7ae70c4f27464ea6bf7334d48c8"],["/categories/Swift/page/11/index.html","acc0b48deb4bc247f528c6118674632a"],["/categories/Swift/page/12/index.html","726165bada9b317926c0412f53076ba4"],["/categories/Swift/page/13/index.html","4a41ec37285631eee39a9e3c688a8217"],["/categories/Swift/page/2/index.html","089ff79309748aa38c57500b19f0c0a6"],["/categories/Swift/page/3/index.html","f0816424a4d92157859cdfbd18c2449a"],["/categories/Swift/page/4/index.html","480d370e88af13abcd5843b9548465b4"],["/categories/Swift/page/5/index.html","2e1c030ec7a3179f83eade66490afa30"],["/categories/Swift/page/6/index.html","a543c4469603ca9f2c0b6379539a8992"],["/categories/Swift/page/7/index.html","b5f308772b7a3cb60b61f6bce0a930fd"],["/categories/Swift/page/8/index.html","959c09dcff0411051dd7310536e96a9d"],["/categories/Swift/page/9/index.html","708f7c8f172cf9924a387f6706f6aa60"],["/categories/Swift5-2/index.html","93217e06bd5a0814c1ae8b1bc706bd7d"],["/categories/SwiftLint/index.html","7d5681c00b77216eb660485c947e2650"],["/categories/SwiftUI/index.html","a20ce967ed13f39ae042bce1e633efa6"],["/categories/UICollectionView/index.html","881efac3c3f2c569062e1e7ee783779a"],["/categories/UIImagePickerController/index.html","84bff5854791a73d84c1d26d2a49aed4"],["/categories/UIKit/index.html","afa35171bb6856a8eac59e4772e610a5"],["/categories/UIKit/page/2/index.html","fa7116e31c4c431082473a9b1a9c3b48"],["/categories/UIKit/page/3/index.html","93a3443b0adc7dec89b08f12ae0bf72d"],["/categories/UIKit/page/4/index.html","4a7d3f4e3660721bb6c9fc95ff4a627d"],["/categories/UIKit/page/5/index.html","a2412eb993b104704eeb22aaecec2970"],["/categories/UITableView/index.html","e8df5b33623d282fd4ea7ff582cfc519"],["/categories/Ubuntu18-04/index.html","af4da4e609307fa9c8177f2b66e56aa1"],["/categories/Ubuntu软件源/index.html","0ebeaad3ea0a2ac57efc73ec9ce939d8"],["/categories/Uniquely-identifying-views/index.html","fbe53169e1707d351ec4d36d51b5f65c"],["/categories/VIPER/index.html","bcab978ce9445bea830897c12458c14f"],["/categories/Vapor-4-0/index.html","dafc8b8c44b25046de2c101cef363f41"],["/categories/Vapor4-0/index.html","e32ae4edcf80c9fa3d61eaf34bfa879a"],["/categories/Vim/index.html","8a6122ddf09c557779e484b99e7fdfc4"],["/categories/Xcode/index.html","7bc1dce47666ebae393bf526c21abc53"],["/categories/appleOS-Networking/index.html","131180a2c5acf5a42243f70bc7fa7d3a"],["/categories/bugly/index.html","fec5ddb0eeac68b32f58092de876aa31"],["/categories/enum/index.html","30805ec212a294e8d808c147e64ce0b5"],["/categories/git/index.html","492ed937d808a93f3ec77b2afdfacbcb"],["/categories/iCloud/index.html","5bb73881d52b67cac251006e80e85ba1"],["/categories/iOS/index.html","ca0934a488c1711c922728be1b9f06f4"],["/categories/iOS/page/10/index.html","00e7db2176a2097e852573e9b1cf1e7e"],["/categories/iOS/page/11/index.html","4019904b7978f59daa2819968f9dcb81"],["/categories/iOS/page/12/index.html","aee09e4f603608379c3bcef79adad32e"],["/categories/iOS/page/13/index.html","1c573ff6c8373d8c0416bebafed4887a"],["/categories/iOS/page/14/index.html","b89f81f6208f1939ad3c72282267986d"],["/categories/iOS/page/2/index.html","edab93e2154d9dc79ec17687b7d6eadb"],["/categories/iOS/page/3/index.html","60d5ff378e6725ad21ccd285de9de9e4"],["/categories/iOS/page/4/index.html","a34148624c6f28400c123a14dc90173a"],["/categories/iOS/page/5/index.html","6c788aebddfc58ef0734c1545f0a83de"],["/categories/iOS/page/6/index.html","01aa04b4ca6225490c5fae8a0e62b7eb"],["/categories/iOS/page/7/index.html","cdc81918e7a0fdd092b4cc7dfc6d38e8"],["/categories/iOS/page/8/index.html","341aea8643a7ed5838b1c22d7687f7b5"],["/categories/iOS/page/9/index.html","7595bb48c093cf27e9fd25d666a2c4f7"],["/categories/iOS面试题/index.html","a4aec810df5914b5b747be5b779b504b"],["/categories/index.html","b34155ff9402fc1c7a62f48db5ee2413"],["/categories/random/index.html","058b6101d09942dac0f4a0eef4a8ca68"],["/categories/三方类库/index.html","85e9b3417c4644b46fcee19293636720"],["/categories/函数式编程/index.html","ff565cedb1e6d4db21c48a0681f1e552"],["/categories/子类化样式/index.html","65da385d3050aa07252a93de8e09a929"],["/categories/开发技巧/index.html","3e07d790ea04e7e5aacb9593a27e9897"],["/categories/开发记录/index.html","34ffeef0629920b6e7a4eeb8019b820b"],["/categories/技术支持/index.html","ae62c17c93cd2414144be37772f927e4"],["/categories/数据库/index.html","5701e303e5aa4599fb96f5957500ff41"],["/categories/架构设计/index.html","b9949c31d3b407cdac98396213ec0591"],["/categories/测试/index.html","b0cb5a6c962af7f02d094659acbf6e7d"],["/categories/用户体验/index.html","856038562382474ba83ecd8c3c53fad4"],["/categories/用户协议与隐私政策/index.html","f7d2747f9d5b2ba43d8f875f707ab59a"],["/categories/设计模式/index.html","4523cb38c664eaa344ca9068acca1f94"],["/categories/设计模式/page/2/index.html","66ee1b668bff56fd0b10da467a058852"],["/categories/设计模式/page/3/index.html","684ebe85dc2a039577fd3905358250d4"],["/css/main.css","1c2cff1d44a4e25fff4bd42486af2091"],["/hello-world/index.html","4de95715f66fb516ccdf9afe23e2dc84"],["/hexo部署失败/index.html","cb2637bd182c902805c9b677e3281ce5"],["/iOS VIPER架构深入实践/index.html","1c2b2c2d6fef7def0fc041288e001e0a"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","e84d31dded065b0d27473f22be1329fa"],["/iOS 自定义视图，输入表单和错误提示/index.html","3b97e7ff35227e586f51f47294056956"],["/iOS如何使用iCloud文档？/index.html","4c3e8c165296b2fd043fe3f06e817a78"],["/iOS子类化样式/index.html","2e2c3b8089345a461a58f8b675ce6690"],["/iOS开发记录<一>/index.html","79fc3279451771c4a597440353836bd1"],["/iOS自动化布局编程/index.html","f53cad2c1beefc7d11c3d6efe10c1176"],["/iOS自定义转场(By Swift)/index.html","02fcfb2ceec7030d828ae5f67467e6ae"],["/iOS项目架构：使用VIPER/index.html","3086a18255fe3612063acd5af927988f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ed83f928a32e760c719f729fd0571ee1"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ff886fce8c597c606bae323f18f2815a"],["/page/10/index.html","a604120480aa1b986b5c5e180e99dc5e"],["/page/11/index.html","628722598e0df89eef87933935d30431"],["/page/12/index.html","17eb621fdcd68651a94f407c7a955a24"],["/page/13/index.html","8c9f23fbfca112b64507091e37cc3892"],["/page/14/index.html","a0235b51ff7ef327b8977132dc9c69ee"],["/page/15/index.html","a61aabd0c216dc71e0119794e53942c4"],["/page/16/index.html","979e6afd358ef57c289a3a3e388775fa"],["/page/2/index.html","c7820b6a4607021017a49b310fbcaf89"],["/page/3/index.html","9eb59aa32788fc10ed4625cb071afe0f"],["/page/4/index.html","e766c7c4d14030530f8b31cba043d2ef"],["/page/5/index.html","4635c4e0d29662f835a6047356290026"],["/page/6/index.html","4c3cc1239f62f2f0ebd78ceec7732b24"],["/page/7/index.html","9139f53b75de7a59fb610041d316f03b"],["/page/8/index.html","42a688a8c16f658825b0c4c23e3c64de"],["/page/9/index.html","6365b6f13e4efaa1921c47ac058e6e84"],["/schedule/index.html","6d72807b6bccc98756e306ea01459d5b"],["/storyAppPrivacy/index.html","a5b2768b0e0c04ee06f93c96ad726856"],["/sw-register.js","9cf770daf2d9a204b8d2da03d48cdd6e"],["/tags/Advanced-Classes/index.html","17c13c8a69fbd0c62fe1802d6e65422c"],["/tags/Advanced-Swift/index.html","a236d570a75d944fdc302b78cec5c57e"],["/tags/Advanced-Swift/page/2/index.html","f7b25d307539e152dce928d5f875a30a"],["/tags/App-Architecture/index.html","eb6d51d3091e4da493cf4f9711b891c3"],["/tags/Array/index.html","c666b0d530b30c5fec7f2f6a67b9fa06"],["/tags/Arrays-Dictionaries-Sets/index.html","84fc1437b5ac432dcd3a597047935240"],["/tags/Authentication/index.html","8243ddf13d0aa6140a89dc715e25c127"],["/tags/Build-in-Collections/index.html","d7c887b4a39286cf0f6e2757529144c2"],["/tags/Building-Your-Own-Types/index.html","3de5cdf3acffa971a10510a35c830aed"],["/tags/CMS/index.html","ca4bc381442c16a8179af1c34dc73ff9"],["/tags/Classes/index.html","e038702f8b35fa76f16e10353c45a8bb"],["/tags/Codable-protocol/index.html","773757ba0c355c07432268bd59f2e647"],["/tags/Collection-Iteration-with-Closures/index.html","5fa9333acca2f014e212b0d80be4483b"],["/tags/Collection-Protocols/index.html","71da660b76ea7685dcff7da89d05c532"],["/tags/Collection-Types/index.html","ab22448d3e7c06c8b36f6aaea69359a4"],["/tags/Collection/index.html","f5b96e6964959930a7bf98771d76fe90"],["/tags/Collections/index.html","02e89598754e04c8722a02d8765bcc83"],["/tags/Combine-framework/index.html","6480d214d9daa3615bc26ad2fb564391"],["/tags/Combine/index.html","f696c533a02ac591d8b5fcb6a96e4639"],["/tags/Dependency-Injection/index.html","a01bb9e6dcb931543ca48af3788abb43"],["/tags/Encoding-Decoding-Types/index.html","cc8498ff6443b3a955e6d76b78ad3530"],["/tags/Encoding-and-Decoding/index.html","ecad63dda9151d67f69606114dc27fa5"],["/tags/Enumerations/index.html","63946b844f6b2047389af3ad8559068f"],["/tags/Enums/index.html","d6fb4396e8a14e3e37e0b1708e14eb95"],["/tags/Error-Handling/index.html","a744f50c29c0beb9688acd09dd7b3967"],["/tags/Functions/index.html","9784ac5f23363001f74f5c178395ec57"],["/tags/Generics/index.html","bd9ff0e1f3bb09a7b0205f99fb149e19"],["/tags/Go/index.html","d447b6a7584e303a322b1c6cdf5f13df"],["/tags/Grand-Central-Dispatch/index.html","d1abc24a09d9c93782a8d22ec1ed5d99"],["/tags/Hello-Vapor/index.html","b5af111f9d2f10d0b2189fcd477bae5b"],["/tags/Homebrew/index.html","aefe3cf1b915b49fe9a6f907b4a27b41"],["/tags/Interoperability/index.html","26cbaff4180a0954b8785e5d55e28efb"],["/tags/Introduction/index.html","c07ef1ebc1d1674ca797f73045925961"],["/tags/Leaf/index.html","86c4423cfcad6a72c18af3354d44de91"],["/tags/Linux/index.html","9f0d9a2585d79f4720d131c4df2d30dc"],["/tags/Methods/index.html","42e0020f15fd0ee6883c2e876dcbb3a8"],["/tags/Modules-And-Hooks/index.html","c79b27fdb1c95c68051eba42bba47199"],["/tags/MySQL/index.html","2b1aba608a8d031d5b9615870f1668cb"],["/tags/Optionals/index.html","84a2d14f1c6aa081e65863509cb0db32"],["/tags/Promises/index.html","cdef4b290df496e603454fb65ba3817b"],["/tags/Properties/index.html","3d4592813b0b541039523411d51a2230"],["/tags/Protocols/index.html","c22d3e0890afb27d60098262104f2f40"],["/tags/Result-Type/index.html","744fb48a2c1553dd5b825878174eba51"],["/tags/RxSwift/index.html","6e62e0b6b85dd20c697a4a0d3cafac11"],["/tags/Server/index.html","1f834ac7aa64f8b5b99b9806df15b92d"],["/tags/Session/index.html","e039104b70e27aa9d301069bd9e959fe"],["/tags/Strings/index.html","70882490ed332474b1ae071f61ab1f98"],["/tags/Structs-and-Classes/index.html","c34d9f9fc2d902effb7fe0d6ffab92a2"],["/tags/Structures/index.html","c8226dc91fed835ad7425e203018d8c8"],["/tags/Swift-5-0/index.html","a50d678ba09f88b213690068e237f4f2"],["/tags/Swift-5-0/page/2/index.html","c284378d04495b307fb3b52a24dcb0a2"],["/tags/Swift-5-0/page/3/index.html","6021b6666558c7b0676529395569c0b1"],["/tags/Swift-5-0/page/4/index.html","b6f61c2b4538d40486d93de4e663557e"],["/tags/Swift-5-0/page/5/index.html","f9f38dde15d2ce0ad13924ce4d115e3b"],["/tags/Swift-Apprentice/index.html","28d15a3c2c784a5297c29091166e0568"],["/tags/Swift-Apprentice/page/2/index.html","88287169a44c6442dcbe2fba9f1ac31b"],["/tags/Swift-Apprentice/page/3/index.html","6ccff935bc9c381ab66944e3fe428fed"],["/tags/Swift-Package-Manager/index.html","9bb62a9fcdc2856cea83e3b7cdc6dc16"],["/tags/Swift-源码阅读/index.html","dc3a92d10a81d3ac4ac12f13696f22d8"],["/tags/Swift/index.html","8183719c0fa399b926e0c2e8a5e37d00"],["/tags/Swift/page/10/index.html","2fa51edd19fc2bcc3c216df1d58fc7e6"],["/tags/Swift/page/11/index.html","66c8713348d72a48506f17c3b3315d9e"],["/tags/Swift/page/12/index.html","87f9c525f48bed4eea29a0733252d45c"],["/tags/Swift/page/13/index.html","1d591be4d35ff9b6cecc0959d14893e9"],["/tags/Swift/page/2/index.html","f6da2aaab8dafc421dacff7c06ecd7e7"],["/tags/Swift/page/3/index.html","48ecff060310f96a60e5a49580a0ee8a"],["/tags/Swift/page/4/index.html","2d3bef42986ba41b3a48f67ebb613661"],["/tags/Swift/page/5/index.html","3124dc05cd155fe09f0560574535086c"],["/tags/Swift/page/6/index.html","2c25f9b01a6e8701dad03d30e3af2bef"],["/tags/Swift/page/7/index.html","dff50055519e594822a781060ddff1bb"],["/tags/Swift/page/8/index.html","c90ba50130863469b086ca9151ccd242"],["/tags/Swift/page/9/index.html","178f1c16d1fc3eb1efd0e13007cadf2c"],["/tags/SwiftLint/index.html","2ebfaaaf35c4da138bd5bd9f7933ca39"],["/tags/SwiftUI/index.html","8d8c0dfdc9dda234bb5d43693ffbbdeb"],["/tags/UICollectionView/index.html","12fda9b555c6a5166fdc72df97e3b9af"],["/tags/UIColor/index.html","4a445b57f9126ce2c516f8f518d781d2"],["/tags/UIImagePickerController/index.html","ee7cfcfce3c3f10b916ab90aecf46ff4"],["/tags/UIKit/index.html","667e062b926d8b1085a71c97e33918b5"],["/tags/UIKit/page/2/index.html","43a25d9fe7ba65f758913af232732055"],["/tags/UIKit/page/3/index.html","aa7dd1b7b18d88d8a8b12addfff3b980"],["/tags/UIKit/page/4/index.html","77f81e6b779a1fcc81dc9bcb77a986df"],["/tags/UIKit/page/5/index.html","12bebf5eb9e3ba630194fcf3230bb046"],["/tags/UITableView/index.html","6b3977235f9c6ac5a2a23d09a509ed6a"],["/tags/Ubuntu/index.html","23bb54b0eae4088b80ced5dfe0e64453"],["/tags/Uniquely-identifying-views/index.html","2169ccafde6107ecb7e6c7769f3847aa"],["/tags/VIPER/index.html","b83a8eb0500b11315eb5b3067943ce0a"],["/tags/VMware/index.html","c4607a63fb1f8d4cfbd29866fe79d3e0"],["/tags/Vapor-4-0/index.html","cfa9cb07c2941805da3251d2c19d3384"],["/tags/Vapor-初探/index.html","d622cba7d3bca86732ded667b5a554bb"],["/tags/Vim/index.html","d3a9e46185c54232c97bd06420f30ed1"],["/tags/Xcode/index.html","77d44beecec7fea37f5a2d59eb87f6c7"],["/tags/appleOS-Networking/index.html","d16e272ddbbd942ed2a3d4b3e64f9b11"],["/tags/bugly/index.html","17be2b6948c0a3df9562d2b19ce2247c"],["/tags/enum/index.html","6c09fe8c0b516d124307c1697912aeff"],["/tags/git/index.html","b30459db3200f64507518c8b5437e396"],["/tags/hexo/index.html","51a40ccf19af8fa9210d5ef27a3457cd"],["/tags/iCloud/index.html","484676e6770b8bc1357fcba18d67ea20"],["/tags/iOS/index.html","58a9e5a812e051360e426f65a651bfab"],["/tags/iOS/page/10/index.html","edec909c52216cec9fa6db98f6128319"],["/tags/iOS/page/11/index.html","2899ea7df57bb254943504b296338e39"],["/tags/iOS/page/12/index.html","99c75cdbc638bb69e655316c7b75d7d5"],["/tags/iOS/page/13/index.html","dc33b2ec6d4f9ef762de8fe64b43abd7"],["/tags/iOS/page/14/index.html","29e004642520663af59bacd14bd27c40"],["/tags/iOS/page/2/index.html","b81b3d2f6c4662d477dee048b02ccd03"],["/tags/iOS/page/3/index.html","b57fbb840e2d73884b8a4f6dd3d1fca1"],["/tags/iOS/page/4/index.html","cf47e8e4bb1db82e424e1bef8601c9a8"],["/tags/iOS/page/5/index.html","8bd745507970dc70fc7b10a197bf9889"],["/tags/iOS/page/6/index.html","caa45db14f9a0e53604f760c89e53e8e"],["/tags/iOS/page/7/index.html","919160d20a3dedb21eb37467ad642a8c"],["/tags/iOS/page/8/index.html","1f9f0ee656aff4c6b0acad977738e9b8"],["/tags/iOS/page/9/index.html","2527cef17d2e2497fb202fc81bf27261"],["/tags/iOS面试题/index.html","3ce62b9aed0188703e69f0e84f774eb9"],["/tags/index.html","066c8e7833bdc7075f54a1e31e1b65c7"],["/tags/non-optional/index.html","80878dd9ac86e4403d4fa9dcd455db23"],["/tags/random/index.html","938eed57cd4b376ffe7928726d656446"],["/tags/transition/index.html","f34473fdfdfbd725affdcf39b0e6c8b2"],["/tags/三方类库/index.html","9778a975452fce9c8bf66f26440c0dfe"],["/tags/依赖注入设计模式/index.html","251b8ada3ff4ba55558522cfa830c211"],["/tags/值类型和值语义/index.html","102bdf457f0e7e242e42a6f77876ea3c"],["/tags/内存管理/index.html","c700114c4ed9b30f181c97380fd57e63"],["/tags/冒烟测试与回归测试/index.html","ec25d5ec2e48946831fa197ecc9c743d"],["/tags/函数式编程/index.html","8bdaf4462beb19b3a5c8606a9cc88d7c"],["/tags/创建博客数据库/index.html","bbce996e64ca2a67be5c68b115348dbe"],["/tags/初始化模式/index.html","29951d07a970bad36544f2190973351e"],["/tags/单例模式/index.html","b6b5ecc7bcfba5d1db0bd5978e4c2588"],["/tags/原型设计模式/index.html","161c70c34e801d002db665a6b8046403"],["/tags/命令设计模式/index.html","9257619ddf6c8246a58fbab0039f2b10"],["/tags/基本控制流/index.html","726e841d591e1b59cb64d63534447dc9"],["/tags/外观设计模式/index.html","6d11d2b0e97d326ffc48a92f2292a32d"],["/tags/委托设计模式/index.html","aa4cf6590eccc347de17d5fbafc384a0"],["/tags/子类化样式/index.html","25e1de959b08a1303a4887303c7c4f7e"],["/tags/对象池设计模式/index.html","876ce7c17c5d442ca99ded9e82a087a7"],["/tags/工厂方法设计模式/index.html","d72ab234941944b9e43cb25319a93a08"],["/tags/工厂模式/index.html","b6915b6d66b393634a27a6564871597a"],["/tags/工厂设计模式/index.html","3d41decd884e66c4fc502526f3bc1e27"],["/tags/开发技巧/index.html","2f0dc2e1dc9d75e3c47a9e98f2c21682"],["/tags/开发记录/index.html","f8cea48c773829071ff621a9ef947494"],["/tags/懒加载模式/index.html","e9c9049eac3183006db62734b53453f7"],["/tags/技术支持/index.html","adc53fdf48fd9e45d152872c6c84994c"],["/tags/抽象工厂设计模式/index.html","e1403cae7dc458a90de528c906e1e8f0"],["/tags/数据库/index.html","96652e4aebb8071fb48d98936a618c63"],["/tags/构造函数/index.html","c1977eb8276fdbe767a65a9c3c905101"],["/tags/架构设计/index.html","6a4d3512b60853e1040ad695bdcb507b"],["/tags/模式匹配/index.html","8988534f799dcaef468b6bac10f97899"],["/tags/生成器模式/index.html","5474eed9c5f2e1fbfb6b8eff30e751af"],["/tags/用户体验/index.html","3647ab4fb93a82dbd7cce843cad318d4"],["/tags/用户协议与隐私政策/index.html","b509734380503eb4214ad9b6d3177e3e"],["/tags/类型与操作/index.html","b2f8e6e972dd34afa20635c88274e2b3"],["/tags/自动化布局/index.html","5e644408c8626d61e9cea9ae2d8cecab"],["/tags/自定义UIView/index.html","01753962c65383a005779daa822955ba"],["/tags/自定义转场/index.html","83093e19593c32e5cec79903e64ddd5b"],["/tags/自适应布局/index.html","ce652397d1ac5ed0be1567817ca102af"],["/tags/表达式、变量和常量/index.html","68c95d26f232c66b920f2335188cfccf"],["/tags/设计模式/index.html","a2765f278f8c3660cad9f744402c39ed"],["/tags/设计模式/page/2/index.html","c69487a91e485032680450627bff1d62"],["/tags/设计模式/page/3/index.html","6b56dde88881939fb684cb22d6620201"],["/tags/访问控制和代码组织/index.html","014a543e33c10e40e44b9a5c1296d51d"],["/tags/运算符，下标和键路径/index.html","39c002a77f61a39af26b2a50b0b51478"],["/tags/迭代器设计模式/index.html","e94ed052d14c2eee1678ff0a8bf2b3e9"],["/tags/适配器设计模式/index.html","e2153445b9b2e7d96a5d26bf30b458c8"],["/tags/错误处理/index.html","7440996020ba109b6f1325494c93a3de"],["/tags/静态工厂方法/index.html","fb628a045265f50fe9b36d01da0000a1"],["/tags/面向协议编程-OOP/index.html","1052c3c99d508b695af1fb2e78aad052"],["/tags/高级主题/index.html","113b48a60e014f232afaec5f65c80d05"],["/tags/高级协议和泛型/index.html","b8b8ebbbdf337f37ad8f96f2a26eb70f"],["/tags/高级控制流/index.html","85ef2e9a114c0fa54a55eba7e4e99ad1"],["/xcode 常用的快捷键/index.html","a777746ad350c554a309ce931a9a1436"],["/为iOS应用构建输入表单/index.html","5b8684228e2eee42a5bf3528ab7b0137"],["/产品开发的幕后花絮/index.html","509b0cb036734bd6324d3c41367e4479"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9ca3dbbe1a4b09a58ca6c3e61b101111"],["/冒烟测试与回归测试/index.html","6d67ecee80cbd4bb00a1bf3b005e697a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1969efd036944fc196f31fed1bb7f808"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8a46796f6a96dd740b13bbe2922df8c2"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5975e87a50e91f955f398f22d4cf21f4"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","03dbd17b36f49691ab99b68ebdeb10b6"],["/在Swift中创建自定义集合/index.html","f4083e1ccfc7f7863bd09ae0f7fd49c8"],["/在Swift中处理非可选选项/index.html","aa91b6078326839bdf2a7a0f648f184b"],["/在Swift中生成随机数/index.html","650a0b471339a30399ba2d4542d1edb2"],["/在Swift中重构单例模式用法/index.html","c486341dabc196b0a7eeda9079a1be0b"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","e960a80ecd809298fb8947cb0b640832"],["/如何为VIPER编写服务？/index.html","6b27972c66d65e931f26bfcb188d5d6d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","9637431b8335dea61aa7277e85cd7214"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","209c0887cb25a8a967b26e9961f62fe2"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","115d5d036357660f611954729be6b42f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9f8a2e25b3a955d7c980acf2323f9301"],["/掌握VIPER架构/index.html","bb366458eda41bb506d1cd83149ce7a3"],["/揭秘 WordPress Hook 系统/index.html","cb85f601a1439ff0b268988617c6f6fa"],["/比较工厂设计模式/index.html","0166c043befee703e99e9535fcc584bf"],["/深入了解Swift中的Grand Central Dispatch/index.html","c881a41fd1020d70f68f90ef03e5eaf9"],["/深入研究Swift框架/index.html","838b41c70c722875a9f51bc944579d38"],["/美豫直聘技术支持/index.html","eadf7cf6d6b61a778e5732d5d1f853e2"],["/美豫直聘用户协议与隐私政策/index.html","0d04b0690380f164d6be12338ef4e942"],["/适用于iOS开发人员的VIPER最佳实践/index.html","05feb5cc79d17991137447a58e33ef9b"],["/选择Swift而不是Objective-C的5个理由/index.html","238a9e685668e32f8e84adc40f4b0345"]];
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
