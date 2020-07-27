/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6bf6fb64f3e20c24c565ace8ea3832b0"],["/2020年iOS面试题总结(三)/index.html","b84fe253fd1d3237194abf3abcc21645"],["/2020年iOS面试题总结(二)/index.html","dc8c2cc5a080bf36f9195e3a2b76409a"],["/Advanced Swift系列(一): Swift 简介/index.html","467a30932d0acbee341b5c839446307b"],["/Advanced Swift系列(七): Strings/index.html","cd96c373568cfd8eaa1c1371260502d0"],["/Advanced Swift系列(三):  Optionals/index.html","b717ca2e5167f3055637003e763d629b"],["/Advanced Swift系列(九): Protocols/index.html","1b5ee75b259c958b03acf38c1a043945"],["/Advanced Swift系列(二): Build-in Collections/index.html","71d5945162ae1ec889417b2b06871fb8"],["/Advanced Swift系列(五): Structs and Classes/index.html","f413fce373691d96b3cf6fb173bd5816"],["/Advanced Swift系列(八): Generics/index.html","71c044938781f347ec235f0920ac7f9a"],["/Advanced Swift系列(六):  Enums/index.html","3381b13fef2d1610530bea801029ed95"],["/Advanced Swift系列(十): Collection Protocols/index.html","03318a73f4269586830e4aac172d013b"],["/Advanced Swift系列(十一): Error Handling/index.html","078f3d5c211fa468db901eb9bab81330"],["/Advanced Swift系列(十三): Interoperability/index.html","de2335ce8d242b3cc2180fa5ca3f1113"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","44a533edf282374f2f6d93ac26612d81"],["/Advanced Swift系列(四):  Functions/index.html","914943755cddb17e6a0584ef3c815e31"],["/App Architecture系列(一):  简介/index.html","5aa3d30970d6089100dea3b101463647"],["/Functional Swift 初探/index.html","0ad50479d8d0ed01a87c3999c4e4c190"],["/NSCODER和SWIFT初始化/index.html","87d982d9ab7deb4201265341572fd3f0"],["/Swift 5使用UIImagePickerController拾取图像/index.html","82d063e68a94709a6e413adaaba8ea53"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","033a3fbed3d126771b3e099efc5c604c"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3949b5957b0d50eee214ae7d91a604b4"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","244ef31da9fec747fc71400e953f6833"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","31751b7fd3b2566c24ab15384d3f2fe2"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","65585a238f4aa411ec1e0f0bf58a8371"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","2a782474e2b8b5b5c92ffbdfea02c9fb"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","862b30a2bd7b5e427bce065051b8dfa5"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b5adc9c48a2c86ce6da841bda5322bc2"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","8f3d429fa53523fa34b147e4c79711b8"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","6ee23c37e47df860c4029e8a77fb0de6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","39b94173dac4f3f066ef197ef646ae7c"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","16187b6ec5427dd57702092f88721860"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","740b27690b5686d319452fd25239efe3"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","00fc9075127f06f3f9053f71f1fbc9e2"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","853e4ca3b683cc78f746917f85c9833f"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e42dfe26b52d7d97ede2d93917e16a62"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","87527ffadc8f96c4d79958b0f20bca62"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","8172277f4bafe23ad6cb112d3b4dbae3"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ba1c9513b4cf6d4927e6d07e23ec7106"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","86e27e114904d39bd206b28df8093f13"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8798286d142684b35fe8bf58fbadcc56"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","05ed352f1c0d67e65a3d45d3c22c1d52"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","386083bcffa321d308462757977a406a"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","9112c3d5389d6f3a85aa8f3616020ef9"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","74eeab1b4892481c5d7e369bddb711dd"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2a09cc724f481d074ccfbd0326b6a691"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","72da11323dd86e2c41b1182b10678327"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","82d0ce2b0fe1078db213ab02d81ba771"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a52f7cbcaa219836ef0956291cc0a91f"],["/Swift CompactMap vs flatMap：差异说明/index.html","4e5d7c0eddb99bfbde1c4455c19423ea"],["/Swift Grand Central Dispatch 深入实践/index.html","15f467f2a00928e5f5a928f16cd1c412"],["/Swift Lazy属性初始化/index.html","af027f37b325e0c81a2bc069189c63fe"],["/Swift Promises 初体验/index.html","318975a58b28cd1f573ae28c841c99a7"],["/Swift Promises 探究/index.html","d5a366ac5b378d9d3ea9eeba40ccc259"],["/Swift UICollectionView使用指南/index.html","71c1d86cb92230ef12cb620d4d165c22"],["/Swift URLSession && Combine framework/index.html","fd3144749622ce6b1ce0ae5d4b75ea16"],["/Swift 唯一识别的视图/index.html","e61eb09fe0d62420567ad021654d97f4"],["/Swift 如何学习现代UIKit？/index.html","70420789685a39bbc5613916bfedb733"],["/Swift 用 compactMap 替换 flatMap/index.html","be2249470c3dd4c5b6849e96e3f034f4"],["/Swift 选择和播放视频/index.html","b9bb2f31830d332c0b1531b1f0f64b52"],["/Swift中UIColor最佳实践/index.html","a90d21185c80df2ef64f431ebe237d50"],["/Swift中快速简单的工厂设计模式/index.html","076ba2ae1ef7ae2a85fcde2232cdcb7c"],["/Swift中构造函数与静态工厂方法的比较/index.html","d4ea99849d20b7f1de07d0c48a68b98f"],["/Swift中的UITableView教程/index.html","46e229dc7cdb13398617273110533327"],["/Swift中的懒加载模式/index.html","f57718c6cfa69df0486547346fd58282"],["/Swift中的模块和挂钩/index.html","ccf1e4b9f1749f801cae886854c7959b"],["/Swift使用布局锚点添加约束/index.html","6eba48fa5b409002fdf234e2ffb21d9a"],["/Swift依赖注入设计模式/index.html","eddd0efcbd5f03a6e1aceec6d98e6d71"],["/Swift关于Dependency Injection (DI)/index.html","7c32092f7a283647d1e5772116bc09d4"],["/Swift初始化模式/index.html","156189def54b7c6304d3866920232d55"],["/Swift单例模式/index.html","eb6db3be8802f8892120f24539f709fd"],["/Swift原型设计模式/index.html","52bc14fe99ffc0e90b2c15ef9dbc8fea"],["/Swift命令设计模式/index.html","5a41533ad23bf0ee4652cc12bbe90c91"],["/Swift外观设计模式/index.html","68a981a648a2d8dd736c1668d5d99e82"],["/Swift委托设计模式/index.html","da2ca077fea4a8ea9e5816a940570310"],["/Swift对象池设计模式/index.html","ee33541547eb36ca32414b1039e42b51"],["/Swift工厂方法设计模式/index.html","b70d373a310983db713502f0d58d4932"],["/Swift带闭包的懒惰初始化/index.html","8be14d7a2aa0e73200ae0ba04b6bd4ae"],["/Swift抽象工厂设计模式/index.html","10a195f1ca6279291d948a619d847510"],["/Swift掌握iOS自动布局锚点/index.html","f23fd14c7b4b1dbd1c1475f65a91ec88"],["/Swift支持旋转的自适应单元格/index.html","19335a8c01e3ac75ae69048d0ca913fa"],["/Swift枚举值/index.html","2e951834e80eb754dfb4d358b953376d"],["/Swift生成器模式/index.html","66abc88a20362a5eae3443541fcbfddc"],["/Swift结合Xib文件自定义UIView/index.html","9884af0e6fa3d6c9676cf245b0627fe3"],["/Swift编写的20个iOS库(一)/index.html","ccc42070b0b112f48f09e31d986be688"],["/Swift迭代器设计模式/index.html","54f1a626d2b65b71dadc0e2bd29a44dd"],["/Swift适配器设计模式/index.html","8eeb53bd9f1c7460e2225f557eb7da22"],["/Swift静态工厂设计模式/index.html","910b2a1b897449a9c42ea13f1c6e7b80"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2016eb6db86abeb972db5e52ed403bb5"],["/UICollectionView data source and delegates/index.html","ee39685f33a14335140a53f75fae1828"],["/UIKit初始化模式/index.html","c857e469bc311a83407aeadc8f687b76"],["/Ubuntu18.04替换国内源/index.html","811e533a1d29881ad18a30e850cc3bb6"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","47ac9fb120cd9162ba4e8212754d2329"],["/Vapor系列 (一) :  Vapor 初探/index.html","97a05ec64b9695b86941993a42cedab1"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b18e259019b20c166867f2e929c8abe6"],["/Vapor系列 (二) :  Hello Vapor！/index.html","c2461bae85d43ad9aaf60e59f726165b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a8ed42181a983cf4c20081e6c35fad03"],["/Vapor系列 (四) :  创建博客数据库/index.html","a8bd7a5076658246d114e9d7d042fe25"],["/Vapor系列(六): 徒手撸一个CMS/index.html","06fa7c6b76e21a4eeffea73a4d651ef0"],["/Xcode扩展/index.html","0c3b52b3d1453e7028fdd31db5a954bf"],["/about/index.html","bdfa912e83b58e2c96b319a0dea6606a"],["/appleOS的Networking示例/index.html","5d64288b208919b192d0d414eb88da83"],["/archives/2020/03/index.html","971fd41755efebb8b8ffa23c0ffeff6f"],["/archives/2020/04/index.html","f7bd944b485c9124449057eaef3ab6c6"],["/archives/2020/04/page/2/index.html","860146b1fa51eb36f33fca1288bf8381"],["/archives/2020/04/page/3/index.html","6c92a0cdd3b46ed2d17c474d0682f790"],["/archives/2020/04/page/4/index.html","389baab6f818840afeb633a3740160d8"],["/archives/2020/04/page/5/index.html","008dd3c7f3e508b7602b1e88097255d6"],["/archives/2020/04/page/6/index.html","9baf4cb85f4692cbd6bea64f0ba732e4"],["/archives/2020/04/page/7/index.html","a2419e5afe18c2f95258bc5d50d449a1"],["/archives/2020/04/page/8/index.html","b3cbd9bb1463d61fdb1d72e083f84aed"],["/archives/2020/05/index.html","d1acb37c9d30d82a9b1adade7312b535"],["/archives/2020/05/page/2/index.html","2b4c994acee4d3e8b219dc1fa517da47"],["/archives/2020/05/page/3/index.html","386367ff5853a4700e88e42c20b3f3b2"],["/archives/2020/05/page/4/index.html","a39e5d4a477ed462b6b75b7781653a14"],["/archives/2020/05/page/5/index.html","631468b181484534619f547035c3221c"],["/archives/2020/06/index.html","722b37b9857f383ff3d641e802640e42"],["/archives/2020/06/page/2/index.html","8578dd14b72667adef7c99beb61d8642"],["/archives/2020/index.html","8fc45827c5bc3ba28dcb56a63d15493b"],["/archives/2020/page/10/index.html","352c28f51d20c974f1f53126cabbc3b2"],["/archives/2020/page/11/index.html","0dc7b7fb0e01e521db86e074e8078698"],["/archives/2020/page/12/index.html","ac196829509e6d10fba6c3ce49c6c727"],["/archives/2020/page/13/index.html","93892460a48f24fc2cc835099d4f3417"],["/archives/2020/page/14/index.html","5aa150ef19453a0317f6d28e475408a2"],["/archives/2020/page/2/index.html","fa5c687f93a81247323ed198d98477b6"],["/archives/2020/page/3/index.html","fd9ee1025afd2d25ce2ecf793c3dff96"],["/archives/2020/page/4/index.html","03fc5a1ba5d7984014b31e3526ee1cbf"],["/archives/2020/page/5/index.html","5fc284cb2cf53d7d717f8e1340a7607c"],["/archives/2020/page/6/index.html","0d13520235eed5b36c9dc7929ebd3ae5"],["/archives/2020/page/7/index.html","70666eaf8412053a7033c5e90129f900"],["/archives/2020/page/8/index.html","032824956444ac7aca44ae235f4d99df"],["/archives/2020/page/9/index.html","e2e2550b22ca77e1f3f5aa3dad3aa023"],["/archives/index.html","f4e05f9cfb9bbb218e5638d3b30014f1"],["/archives/page/10/index.html","2110eb03cbe22975f6cd35d168da93f7"],["/archives/page/11/index.html","193145fe3dc5eb84f42b08961782cb6e"],["/archives/page/12/index.html","5a53bce3aa783efe222f952252ac7aff"],["/archives/page/13/index.html","592c2359514562c3d9cafe285e8aadb5"],["/archives/page/14/index.html","acfda3de5d67eb5329507cd0094792dc"],["/archives/page/2/index.html","7c378220f5c8b34a433016f24f499c9a"],["/archives/page/3/index.html","82464b0d9e8e708259f4a4a6ba6cdb1d"],["/archives/page/4/index.html","34681e3f29e0a4dbf0563394fcd54ba2"],["/archives/page/5/index.html","8da8f7bf08257ef4c938199b68d42fd5"],["/archives/page/6/index.html","ae618e3cdcdebf9a0be2391bee7811f6"],["/archives/page/7/index.html","f6f1f35379f40ea574069be8ff67b685"],["/archives/page/8/index.html","bc376712e8c3e4db727c3bb2a2d1ecea"],["/archives/page/9/index.html","770095438ffab36f1f9e90aa5eea0042"],["/categories/Advanced-Swift/index.html","d041705681099151fb1cc88c2a556af4"],["/categories/Advanced-Swift/page/2/index.html","73989bc5825ff28b2bf7a089277eed31"],["/categories/App-Architecture/index.html","b778ae3f22603a44a875b23096e30ece"],["/categories/Codable-protocol/index.html","91afa6b756c7a977adbd0638c74e4d2b"],["/categories/Combine-framework/index.html","a0a80e2b1e7bc7560208658df7ca8fbe"],["/categories/Combine/index.html","41aabaeba93cf13922e801d3a44a4c5f"],["/categories/Grand-Central-Dispatch/index.html","c6fc668f9b380301aaeb3e229c4e35fe"],["/categories/Hexo/index.html","e8f279388ee02a8ab45b3131dbcab9c5"],["/categories/Promises/index.html","11d42ae368598b532b784fb5f5bce0ee"],["/categories/Result-Type/index.html","30598afeabe0efa553749d983b838f11"],["/categories/Server/index.html","3512b2cd79cd110e29e638b19609c320"],["/categories/Swift-Apprentice/index.html","03952aee05865efaa67d0c4d8d545966"],["/categories/Swift-Apprentice/page/2/index.html","503a47b9e32be833d66da1f674ec7478"],["/categories/Swift-Apprentice/page/3/index.html","bef8cc5407b8a9d976240ce1c08e9b35"],["/categories/Swift/index.html","6195edf192ba83d5ffd8fdc276097a66"],["/categories/Swift/page/10/index.html","acdbd39fcaa1f61120cb5f68e6b8eb43"],["/categories/Swift/page/11/index.html","c0782b0e364a7095676578151c7cc14a"],["/categories/Swift/page/12/index.html","8a36bedc87442be2dccdd331620934e3"],["/categories/Swift/page/13/index.html","a810e0187a01234ab964407f684d0bb5"],["/categories/Swift/page/2/index.html","cd42a6220d11d06f9290b749b5a55280"],["/categories/Swift/page/3/index.html","fd62eb4c8bd0821766dc03b3a6ad2cad"],["/categories/Swift/page/4/index.html","5348742a1500159c4564e7d92390fa2f"],["/categories/Swift/page/5/index.html","5818c43e244046078d05c01dd294f28a"],["/categories/Swift/page/6/index.html","aad22c2d8f7e5c686d16de6c51f6b3ab"],["/categories/Swift/page/7/index.html","774b974cccb9dcc427c123521ae235cc"],["/categories/Swift/page/8/index.html","f13f3f0f546892536ae01db7bf060f81"],["/categories/Swift/page/9/index.html","5c853f1c1ca969b7b518250c88206694"],["/categories/Swift5-2/index.html","f76977f4a9b5972f03bef7da4ab0626a"],["/categories/SwiftUI/index.html","4fafb21d0e06aab9730ee104d7f65167"],["/categories/UICollectionView/index.html","bcd65887cf38afe813a4a6af5b8439c8"],["/categories/UIImagePickerController/index.html","4344ac50ee84aacfecef5e007d6c83c7"],["/categories/UIKit/index.html","9ed2c94a9021d1e37f4adb7d835bd1c7"],["/categories/UIKit/page/2/index.html","562659762c6987fb6352fae0751347ba"],["/categories/UIKit/page/3/index.html","0b6d1d4714babd38e18593b6fbf14056"],["/categories/UIKit/page/4/index.html","e199fbc0dd5aaee895b7cdbf50ffbd88"],["/categories/UIKit/page/5/index.html","9106313aacff0bfada429a672d3b2776"],["/categories/UITableView/index.html","4b3cf863a71f89d8e46709bc0d809e2f"],["/categories/Ubuntu18-04/index.html","ca721702f00e3427036216a115c5beeb"],["/categories/Ubuntu软件源/index.html","e1d863086b42d687091fdb6a247e2123"],["/categories/Uniquely-identifying-views/index.html","13d6abddf2ab098359ec282ea8e67544"],["/categories/VIPER/index.html","291834a4cf8c761149dfd4cf819ae737"],["/categories/Vapor-4-0/index.html","92f595339315460d554dc72499fc2264"],["/categories/Vapor4-0/index.html","e04bdde17219013089ae0d8c80891a44"],["/categories/Xcode/index.html","b6592dc97b351c454da083ffb27e9587"],["/categories/appleOS-Networking/index.html","9bbf15289d982927e1476b2873685412"],["/categories/enum/index.html","1d5021a6f15bb5709c7254f51f431782"],["/categories/iCloud/index.html","8bac7b2a31d937d72a0baeb665fbede7"],["/categories/iOS/index.html","38b62e3a45e025a49b4e0706ebdde6ed"],["/categories/iOS/page/10/index.html","cd47d8375b322495c24187711dab161c"],["/categories/iOS/page/11/index.html","a2e3565e9fec3cb10f11f829aa01d2f0"],["/categories/iOS/page/12/index.html","9e2699111b772806b3a426bd01193155"],["/categories/iOS/page/13/index.html","1ca27e8e95d3e5e872b8780aa09a6057"],["/categories/iOS/page/2/index.html","0a1aaaff639a5d47d12dafee69d01832"],["/categories/iOS/page/3/index.html","a40d6e4d7a50a6cea99b3eac2d52af45"],["/categories/iOS/page/4/index.html","6035e14d780e3cf7737652d1cb96be5c"],["/categories/iOS/page/5/index.html","857fb722fb16517544fd81b49b072053"],["/categories/iOS/page/6/index.html","5fef805425b097f0b52f0b00f2221d8c"],["/categories/iOS/page/7/index.html","bbd033c3b216812a12da05b8d78b1b1d"],["/categories/iOS/page/8/index.html","1eb5c91a1bc240f4f578f811b6b8283c"],["/categories/iOS/page/9/index.html","1572403d6fdb76285ec885c7bb5ff49a"],["/categories/iOS面试题/index.html","0a37bdfe36ff62ccdd003e8205ca08f6"],["/categories/index.html","8c06fc0bed87bc9d607120a32a48aeb6"],["/categories/random/index.html","bc4cb4402b1500906fe50fa25468f543"],["/categories/三方类库/index.html","595fd48f71119dad36ab629016d54043"],["/categories/函数式编程/index.html","00e42374bb755618168fb33bf6e7f2d2"],["/categories/子类化样式/index.html","6ff20b3091ae98f2a8c0586eebe66386"],["/categories/架构设计/index.html","4b2e0967921aba6b314c93c737bba7a8"],["/categories/用户体验/index.html","eedd7ecd6f970ca80010e8f04747dc62"],["/categories/用户协议与隐私政策/index.html","7d6c5b66174d242047c951d09800fcf5"],["/categories/设计模式/index.html","9f8dc2f11bbfc0c2575811d6612981f2"],["/categories/设计模式/page/2/index.html","178986ddf1fae9d678044f397da6a376"],["/categories/设计模式/page/3/index.html","5ff325af41d28f9b88665adcad43b1e3"],["/css/main.css","fdf7835a56543d12656e101afaf5d41a"],["/geckoAppPrivacy/index.html","6cb2d14b09de7e1de9e900818a8ed5f4"],["/hello-world/index.html","8a0a4054a4be70a824f7934557e5689e"],["/iOS VIPER架构深入实践/index.html","56f1d879cf21d4c2fe7fe36a77fded9e"],["/iOS 自定义视图，输入表单和错误提示/index.html","0354e6d3eab96edec637a7582020dc3b"],["/iOS如何使用iCloud文档？/index.html","5455275b3e2a893cb5089b9034f88ecf"],["/iOS子类化样式/index.html","ad3de75b5a6b8789e949c53d6f11dddf"],["/iOS自动化布局编程/index.html","719f86171f914828e34a07db66ec2b92"],["/iOS自定义转场(By Swift)/index.html","bda1bf107e111344fe70719b28de4a33"],["/iOS项目架构：使用VIPER/index.html","88bf5e74acbcaed672e0fbdebc7d4852"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","eade3d020775337ac8c191c8b8b6f93f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","450273d9fb54613dc1f817b170c1280c"],["/page/11/index.html","e5b22a0c3d35387923fb38ca0598cc7e"],["/page/12/index.html","e9d44bb74e004590cfe07f53c3de08e0"],["/page/13/index.html","d8b1825def8ce2c3ea1dfc6a6aeaec3d"],["/page/14/index.html","19487f563b0d62f599467327664df6e0"],["/page/2/index.html","cbc7a8d4b44a3ef39056e1af64fea79d"],["/page/3/index.html","39f75a527d1a47425be85d3452f3771a"],["/page/4/index.html","03e9c7669bdca820212ef3082ce24d85"],["/page/5/index.html","3679848012c5c9670806c826cb5a7382"],["/page/6/index.html","247a16214e18fb2eac55f9d33b684a8f"],["/page/7/index.html","a99206c917a12215f43e1f0471757e5d"],["/page/8/index.html","e67c7429b5f90b75b28e7689e8ea1259"],["/page/9/index.html","8f766107a9ce77e483abc4710d937f9f"],["/schedule/index.html","24656fbcab7004e6712d09d161c40fd4"],["/storyAppPrivacy/index.html","05e9b81c84ebbd2173af23dbd40a07ba"],["/sw-register.js","63defbc567aa6d3fcad514600bade2ca"],["/tags/Advanced-Classes/index.html","dd3900b0a822662a4663719dc87713cd"],["/tags/Advanced-Swift/index.html","bafb6a4303b3aa67bb51996244efe09e"],["/tags/Advanced-Swift/page/2/index.html","1e338a5ed6e9bae78f90f68f01a1d111"],["/tags/App-Architecture/index.html","9b1a0a07ce413da6ab7ed6a181f4734b"],["/tags/Arrays-Dictionaries-Sets/index.html","3278cadb8eb33ff70e36137adc9762cd"],["/tags/Authentication/index.html","4c25fc82ae05bd6f023aed226d00f34b"],["/tags/Build-in-Collections/index.html","037994f491d4fdafda99acb4f74e7040"],["/tags/Building-Your-Own-Types/index.html","3b8fdbaa37c71aaad706a817d9278181"],["/tags/CMS/index.html","cb322ef831b06d7cc0a2ae346fe360f0"],["/tags/Classes/index.html","e06785337051380e8545cefdea7964fd"],["/tags/Codable-protocol/index.html","f0fbb430df69e8c8ccebe0c5347d883d"],["/tags/Collection-Iteration-with-Closures/index.html","16711405e0317cfa2fcf1baf078dde67"],["/tags/Collection-Protocols/index.html","ed4365fc61f151d03d1103c69b138fac"],["/tags/Collection-Types/index.html","d56add484c1ffac2ac6b6e49dd1cc817"],["/tags/Collection/index.html","389a93942ff58e4c0ccc3f34aa8e8e11"],["/tags/Collections/index.html","20fe2a10d5b59ea7071bb5e9a652ccbf"],["/tags/Combine-framework/index.html","f6b04684f26a7c21dc55a3692ddbaabb"],["/tags/Combine/index.html","cda4233400826e105d3810f5c7517a05"],["/tags/Dependency-Injection/index.html","f018ed505f6be8bcc35fe701457e6970"],["/tags/Encoding-Decoding-Types/index.html","76c745490f0ae72f47f02f8766cba380"],["/tags/Encoding-and-Decoding/index.html","cebb33b883e3d3e220de8d2b1d1883d0"],["/tags/Enumerations/index.html","fb6c2a3cda65d9358b87f217d4c91b1e"],["/tags/Enums/index.html","9e8ebb0683151027070c9f291e786b3b"],["/tags/Error-Handling/index.html","484cd3a38a95b809d10e2566780652dc"],["/tags/Functions/index.html","db83485b64058429613a132a1b29efcc"],["/tags/Generics/index.html","7a3b3a6f7378bf7061d79d847e207de4"],["/tags/Grand-Central-Dispatch/index.html","09aa71b93f2052bd48b9d252d951fc50"],["/tags/Hello-Vapor/index.html","7d19ff7cad784844aa1d60cdef9bb3c4"],["/tags/Interoperability/index.html","aea405feabcba2dd710df36e4011a3b2"],["/tags/Introduction/index.html","9350df8b29c5700be3d27d6aca109449"],["/tags/Leaf/index.html","992425e66d279f1f52bf0221db9cf4a1"],["/tags/Methods/index.html","51a2080a42814bea395008c6e8c84e6f"],["/tags/Modules-And-Hooks/index.html","bdd4b23f4554d8a417c58f48ef1a94bd"],["/tags/Optionals/index.html","06103d650077a3ab532a6d1332d7a804"],["/tags/Promises/index.html","e1f5472f1f73327cf0d2432166e3e814"],["/tags/Properties/index.html","0495f6e88743d7ff34e460636a65795b"],["/tags/Protocols/index.html","85ea6fb257d311abb1c28b0135cac5b4"],["/tags/Result-Type/index.html","973575e14aa64082a95db5adfa0a1d7d"],["/tags/Server/index.html","135fe51bbf249714b276e1e3a45cdd88"],["/tags/Session/index.html","2fcff2687ab2e37e2effe0b5ab4da90f"],["/tags/Strings/index.html","620d71fe84ed61abba1114f072cfdb12"],["/tags/Structs-and-Classes/index.html","7a5dc66e26a817eba451b6ca5f2f9817"],["/tags/Structures/index.html","4a838e4a95105650033ed1deb0c9b6ad"],["/tags/Swift-5-0/index.html","08ffcef0304fe49c0470124baa23784e"],["/tags/Swift-5-0/page/2/index.html","ae7b1ec191fdee7a651b1b965d049e1e"],["/tags/Swift-5-0/page/3/index.html","eda8ea7e9f07010c0d8f3017e78ccda5"],["/tags/Swift-5-0/page/4/index.html","b4eb8151e9d3504bbcbe39138580d0b3"],["/tags/Swift-5-0/page/5/index.html","5cd32d6b22a22f469f99d441caa45dfd"],["/tags/Swift-Apprentice/index.html","d9b6188e99839248a40738f493146d49"],["/tags/Swift-Apprentice/page/2/index.html","82fcd3a17cf1687071039aaa63ade58d"],["/tags/Swift-Apprentice/page/3/index.html","ebe150cf9107ed315218c15378081255"],["/tags/Swift-Package-Manager/index.html","b36b95fb677995948c66983053cb8c11"],["/tags/Swift/index.html","9b15ad40742a979aad3a47fb013b3ee2"],["/tags/Swift/page/10/index.html","d0a83a19711afd77c1a8e3a50681ca69"],["/tags/Swift/page/11/index.html","aa8b430a634d1d8d8e651bd298ef3de9"],["/tags/Swift/page/12/index.html","5002904788e3e30efbe98f29c5465df8"],["/tags/Swift/page/13/index.html","b2f1b6ad3d1e3355dacdbeed6a654a94"],["/tags/Swift/page/2/index.html","b946891174e930df29c08b8789488c05"],["/tags/Swift/page/3/index.html","5addb702d061121f8fdc5d5bfbf77c82"],["/tags/Swift/page/4/index.html","498be5e5fd29afbdf9fcf0fb75a94864"],["/tags/Swift/page/5/index.html","9ed2b63f9fb3ed4b54818280ee84135a"],["/tags/Swift/page/6/index.html","40546285b2116125d6a3cf9e3f282785"],["/tags/Swift/page/7/index.html","740293652198b6102991cc627c536a7a"],["/tags/Swift/page/8/index.html","096b94ca3bde9c9d2a1f915ccd7c5e31"],["/tags/Swift/page/9/index.html","0508517e8ba48d539020b893b603fb08"],["/tags/SwiftUI/index.html","8332efcf3101b791ebccd55589a558fc"],["/tags/UICollectionView/index.html","3fb00956e5f603e5ef30a262d181b132"],["/tags/UIColor/index.html","bbc890ba17aaa7a5e3c7491ba183a26e"],["/tags/UIImagePickerController/index.html","f4829cb87418497d32d2b25066aa2da1"],["/tags/UIKit/index.html","9cb4e24b48d3a418c43a97405afe0b86"],["/tags/UIKit/page/2/index.html","7dde65a72dae7ac38e75266b1ce2b155"],["/tags/UIKit/page/3/index.html","0072683d89373c843e8994df43922cc1"],["/tags/UIKit/page/4/index.html","d68220bc1b5e249d9e4e4a5b997f49f1"],["/tags/UIKit/page/5/index.html","a476a6193bcdb10369bbc484cb9d644c"],["/tags/UITableView/index.html","53f643bb4bd5a8fc06cdcc814863c00b"],["/tags/Ubuntu/index.html","25fb417f313017089b1441f3b5f20245"],["/tags/Uniquely-identifying-views/index.html","bc09dc8af05e4b7f3a9992e69aadd9e8"],["/tags/VIPER/index.html","35ecc7300fbccff945c4fcc5ce363d1f"],["/tags/VMware/index.html","0dd7cbdfe46d476f98bfb019f0d69d04"],["/tags/Vapor-4-0/index.html","059def0a65f53ada891694312b9e9489"],["/tags/Vapor-初探/index.html","d17cd965432e60902b03a7cda432f047"],["/tags/Xcode/index.html","8503511f2a877a57a48e8aa0c26f3135"],["/tags/appleOS-Networking/index.html","df92727f684544dc6fe414850b7e9070"],["/tags/enum/index.html","6dad51e3194b9413ff1c1fbf49718bfb"],["/tags/iCloud/index.html","e9c6f37b0d6062435baa38b5b9731175"],["/tags/iOS/index.html","e674eb45a61009e318cfee5401f01cf9"],["/tags/iOS/page/10/index.html","49271b01df231d97b365f7c8d5ae6e26"],["/tags/iOS/page/11/index.html","cca8f5cf626a2f0d19ea7587b9e45372"],["/tags/iOS/page/12/index.html","730b9718ba9f39971a8079c77025c364"],["/tags/iOS/page/13/index.html","576a57e1c8e1b78f20d5dbe8b6eb8cb8"],["/tags/iOS/page/2/index.html","28faaa57c01fcf589af3725270898bbd"],["/tags/iOS/page/3/index.html","16c92167066780c08e50bc25bf012809"],["/tags/iOS/page/4/index.html","82cf7cc29cf3d65de4239df2283a26ca"],["/tags/iOS/page/5/index.html","3071da7f4fc8ed4f2aa8e8e6efdf6937"],["/tags/iOS/page/6/index.html","6d9b6538004da2f5ac9dd675615d37b0"],["/tags/iOS/page/7/index.html","6f8c1f254cbc1b24df94b2508ba7ba94"],["/tags/iOS/page/8/index.html","5a6edbfd448cf82969a338a18b3f16d4"],["/tags/iOS/page/9/index.html","8e6af25f08234bfc8c2ce74fd1a4d81c"],["/tags/iOS面试题/index.html","638a89cabec69767d83d44e272d39c39"],["/tags/index.html","57e177dc0a31f0990530e75df72ef23a"],["/tags/non-optional/index.html","4b9e14d3026627760290d7515657b1dd"],["/tags/random/index.html","b790efa5cd4495cf9fd2cf2d9a0032a6"],["/tags/transition/index.html","53d9fe900fd71b98594c20dfeb6d1596"],["/tags/三方类库/index.html","dccc7727c5e14b35fda608bbdbcef22e"],["/tags/依赖注入设计模式/index.html","018bc6475bb957c591a5a8e20781bb8b"],["/tags/值类型和值语义/index.html","32543efb51fa23f97106087c82511b68"],["/tags/内存管理/index.html","22ac2961a75793e137db87e2ee594109"],["/tags/函数式编程/index.html","b552809ce825b25abf08f88ba68c05b3"],["/tags/创建博客数据库/index.html","c1406eef4388caaf2928b75c69109cfb"],["/tags/初始化模式/index.html","5d8d0e3fe18f94fe3be7133a1dcdc818"],["/tags/单例模式/index.html","829ef96a15717af88c4eaa3e71d8f3b2"],["/tags/原型设计模式/index.html","5ed853b9bbd00c5f5d20146eda7143a4"],["/tags/命令设计模式/index.html","8415a0b968fa30518fc7045c1a03c7ae"],["/tags/基本控制流/index.html","9f58a134ed263e7c695ba5fc8ec5b23a"],["/tags/外观设计模式/index.html","4168b399a40e6637c3e67b7dc9811d2c"],["/tags/委托设计模式/index.html","6e74faff6a687b963b3e60a0469df2b6"],["/tags/子类化样式/index.html","5cd864c8452924f1b7f41fdcefe5ce79"],["/tags/对象池设计模式/index.html","8618ff0092a8d40b2dbe22222058d603"],["/tags/工厂方法设计模式/index.html","7d4db343ad629eb86a891bb6db6fccdf"],["/tags/工厂模式/index.html","fc0e71c8f3060f5201d7df70305d2300"],["/tags/工厂设计模式/index.html","0afbd6a3dd82571520525464328ee3a2"],["/tags/懒加载模式/index.html","932beb0c24db8bd32ee7e98d59d82514"],["/tags/抽象工厂设计模式/index.html","47d81ac45c816eb46f3e1d89d70b0b39"],["/tags/构造函数/index.html","4cbd4ed43626d399822e0e56ece8f2f8"],["/tags/架构设计/index.html","18d8fe0aae17eafbbc73dccad45f7e7f"],["/tags/模式匹配/index.html","860a74452c58584873e5acccb071ada5"],["/tags/生成器模式/index.html","07159b6603d612fd0fa66b91b40d4e22"],["/tags/用户体验/index.html","dfd188ae45bdd59e6ded448f747b3b8d"],["/tags/用户协议与隐私政策/index.html","e6127b093b8d1c0855b824feb9738e66"],["/tags/类型与操作/index.html","b53bc99544cb29bfcbde0bc9bb6372f7"],["/tags/自动化布局/index.html","d6c3c4cab4b7e7de8d9d1f86028fe2c0"],["/tags/自定义UIView/index.html","a0a8104dde8e2ca57978ce5b30900fda"],["/tags/自定义转场/index.html","1ad18d9a4833efd26d2931dee85f671e"],["/tags/自适应布局/index.html","03b4d03257da46d7afc4d4a0ddd719f0"],["/tags/表达式、变量和常量/index.html","02b553e371563401629b2e8733e25156"],["/tags/设计模式/index.html","e02830a9ae230aa444afc1f821df4cb1"],["/tags/设计模式/page/2/index.html","48a2a8b7edfed2f82cfbabba3e859a28"],["/tags/设计模式/page/3/index.html","7f44a406cf560635cf6abbcb75230647"],["/tags/访问控制和代码组织/index.html","ce8662f7d18ff660c557450a4f8ec51e"],["/tags/运算符，下标和键路径/index.html","9a4cbba19b04180f57ea54c4fe51cd3d"],["/tags/迭代器设计模式/index.html","393f07fb33f87c498c25561689d033ef"],["/tags/适配器设计模式/index.html","30f1a369471ea7be8f6e0779fd918581"],["/tags/错误处理/index.html","694091897a103c6d1c672a2ae791c15a"],["/tags/静态工厂方法/index.html","3484350f7633f5ac3fb8c4931534f70c"],["/tags/面向协议编程-OOP/index.html","e6e607bb0f988a1f9196b2da3ba48899"],["/tags/高级主题/index.html","e4823806cccac3553be1b331e525e447"],["/tags/高级协议和泛型/index.html","9333daa2dc4f9b1062d1112b3d297f37"],["/tags/高级控制流/index.html","4e84615f4112b50d38fb9b1f1b42a4da"],["/zhizhiAppPrivacy/index.html","4cb92a35834b83613ccccd856dd62b3a"],["/为iOS应用构建输入表单/index.html","9e47580d43605d0e9b34356ee7ab2e4d"],["/产品开发的幕后花絮/index.html","4c30b1b4f3cba95809fcb26744468bf3"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","2458e94c556718da7d7b5c67bc81254d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","bc7af2698b7376fb3619bf6af7c5ed0d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f4f9aa69fb631d86c9f2101ae4e85bfc"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6232c0d647784e19a08df0370706eec9"],["/唤唤家政用户协议与隐私政策/index.html","c4066220a57e23834f73da2552faa85d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","da158510cf8dd1cb5a1774adffdb3f02"],["/在Swift中创建自定义集合/index.html","f01107489da820293390938f73698892"],["/在Swift中处理非可选选项/index.html","ee44fcb12221899a6c11578695c0d0f4"],["/在Swift中生成随机数/index.html","4537a5bccc782e21fe7db1e12d1c18bb"],["/在Swift中重构单例模式用法/index.html","962d7ac8a45f3b9bb6516058e78d8e1d"],["/壁虎兼职用户协议与隐私政策/index.html","5b4e85e631e8a0c3a57d475f729d5bec"],["/如何为VIPER编写服务？/index.html","8f9bb2921beecf2ccf44040b3b592031"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","54fe36e61dc4806ce3820e83e0e1404d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","350162473c93101dfd033b5a48d228f4"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","aa136c618485b1c3c7b30a114d3f7541"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f8848b70a62dccd4cf8d3f0630dcee39"],["/掌握VIPER架构/index.html","ae2319be7fad600d48bdbd96b36fef10"],["/揭秘 WordPress Hook 系统/index.html","d643b079acd304cb3562b9566eb22b3f"],["/比较工厂设计模式/index.html","c84e6f27c597ef4fe6a7c24c8e824dc6"],["/深入了解Swift中的Grand Central Dispatch/index.html","c4bc6a2e95447f6da552240718059050"],["/深入研究Swift框架/index.html","3811aab562ce0757271f4bbd2df65c6c"],["/莎莎婚庆用户协议与隐私政策/index.html","6efffbfbd240fbcb4c4d584b990f1ef6"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7a4686f63527ea0a7ff5b7657e77a757"],["/选择Swift而不是Objective-C的5个理由/index.html","fc9c2535e5d564181a93b091a190ec6c"]];
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
