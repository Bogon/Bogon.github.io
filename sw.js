/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","2594ef4220b01227f42c7e8791540be1"],["/2020年iOS面试题总结(三)/index.html","6986d2fe85966c9d58ec9c126d3f538f"],["/2020年iOS面试题总结(二)/index.html","4672efed25791a073d03bd042b0eb897"],["/Advanced Swift系列(一): Swift 简介/index.html","497c97becc4b0d9f3dc6e3c9db65bd83"],["/Advanced Swift系列(七): Strings/index.html","aa62d690aebabbf1531726f7fe7c0bab"],["/Advanced Swift系列(三):  Optionals/index.html","4149a9c4f0203a21ec1aaad340abb2a7"],["/Advanced Swift系列(九): Protocols/index.html","1342e7a672d7bbf6cf96cfd1520449fc"],["/Advanced Swift系列(二): Build-in Collections/index.html","d24bf82ea50b154c2a143b30a45f256d"],["/Advanced Swift系列(五): Structs and Classes/index.html","76560f902eaea0d738120af540dfe69c"],["/Advanced Swift系列(八): Generics/index.html","fd2c2231bd0426dd1536d61016371678"],["/Advanced Swift系列(六):  Enums/index.html","237397a997b28ea717755c9b33b1436d"],["/Advanced Swift系列(十): Collection Protocols/index.html","e240f701a279286f01ae70701c6d16a2"],["/Advanced Swift系列(十一): Error Handling/index.html","0899d1db7c75f13c49ea3e6e5c68da1a"],["/Advanced Swift系列(十三): Interoperability/index.html","2a62816ef1a870f7e9a7352e63bf4bd7"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1d0a2b971a8c3f22d9e39e9fc2c1727b"],["/Advanced Swift系列(四):  Functions/index.html","aa348092cc58e1c2d168a9c87e65c7c3"],["/App Architecture系列(一):  简介/index.html","35e67a7d75da0b7fb05617bdd6b7acef"],["/Functional Swift 初探/index.html","29d75d684105e863ee6d47f4f9e9a91f"],["/NSCODER和SWIFT初始化/index.html","acc55a1c0f8cc93b8738df472142ffc9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5ca149a0881a1c27a3d70b548065c84e"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","7bc3067ffaf4662cec7855dbdf7bf523"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","85dbb43c211169bd2e81f0cdd5d13c3c"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a69d5c68c03ec670be048f64f148139f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","511efa85ad9447ab4d845c8de0199d77"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","90dc14906a0de7bb63cf157a2ba302d7"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","891030a3383e08a83949ae81bd7d948a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","eb0a5f4cdf47ecbc5a21d5da0eacf1ea"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d27c310c397b40b2310c856e730383b0"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","10a096472ececd09c1dff7bcd033632b"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","677eab7f56802e3b707b5eb79ddf20ce"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","3cafd9ae62dabf5d0bc5d62b5aefcc32"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","c0c14ad3e334a2b3240c34cc8abcc95a"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","636eee2d94263afc6101480754390620"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","02c96812fabc3bb91c193aa5788ea77b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","2dc4e86ef2ca03c2e761bfb7c8673eb4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","5bf6f24796ff8d96c315491bf867bf3b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","90c166c66089c1483de1b23ea843a44f"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","88c6110a593f5d17f9c4ed6c35dffb0d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","4cc9b68c49726e6caddcb017a759f3d5"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","bcc6b4240f1ccb6d9d0a32065a061dee"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","2c0a60bdbb83067b423eb92dce77d8f5"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","31f03537bb09f2b9b218666d66777551"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","380fd99102f042c19e12e7004b817bfc"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","d7325afc807345000d76c636de7623da"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","d0cfef6d8e11aadb439b2ee2dfa35e53"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ea961a6ea763702113badbd773d30e39"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","9fc273f46b87a002a2532b3c3359e1df"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","532f32b6b2e5cfa6b5b11b10a9618a13"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","064da0ede1ca77f12848bded887f75e5"],["/Swift CompactMap vs flatMap：差异说明/index.html","71ff1bb0313a68a5397feddd9610ca3d"],["/Swift Grand Central Dispatch 深入实践/index.html","00af7ac9316568077628d642f2f299f9"],["/Swift Lazy属性初始化/index.html","849706523b81403e3ad4b06c07bdd84c"],["/Swift Promises 初体验/index.html","4649c13d42327299b6be81a1158c7509"],["/Swift Promises 探究/index.html","7c0033a33d4a96e66f00eadb118f2247"],["/Swift UICollectionView使用指南/index.html","0b359a4103707d24044acb4778169679"],["/Swift URLSession 和 Combine framework/index.html","e8c8601c37c4bace8a5acc16b168d403"],["/Swift 唯一识别的视图/index.html","4de3ab6b4aa5d6ae92d838e61f1688ca"],["/Swift 如何学习现代UIKit？/index.html","fead4e63d7a49eb9d1443d38b9edc41b"],["/Swift 用 compactMap 替换 flatMap/index.html","2dcc81afd99af5961cd2f81a6a4242f3"],["/Swift 选择和播放视频/index.html","329bc12c1d32d2fd833206683cf26284"],["/Swift中UIColor最佳实践/index.html","7b8b997ebfa4e1b408b30deb3be60eb5"],["/Swift中快速简单的工厂设计模式/index.html","f5d503325ced3ebe4a7a79b37f389e23"],["/Swift中构造函数与静态工厂方法的比较/index.html","49985c2a69dd5e2da6cdde935ca14a12"],["/Swift中的UITableView教程/index.html","7ed2114aed0b15ba29ef76139275fefd"],["/Swift中的懒加载模式/index.html","82e223f4976a502b8cffecd5876fc237"],["/Swift中的模块和挂钩/index.html","013bf9490660dada3b29f37989bef2a3"],["/Swift使用布局锚点添加约束/index.html","cdcd89f9219f79007a9fabc2441e3892"],["/Swift依赖注入设计模式/index.html","444bf4e39daf3f4af120fae8de1a1223"],["/Swift关于Dependency Injection (DI)/index.html","e217bd186ff8eaa866ed28defa50f4f2"],["/Swift初始化模式/index.html","292d646deebd4c06824da6d2a6c7f13c"],["/Swift单例模式/index.html","92b9b8c63ca8c9a5fea559809a9e378f"],["/Swift原型设计模式/index.html","3bbd9463f7cf58b867fe120949167e36"],["/Swift命令设计模式/index.html","0096f3376844d01b6e51605d379979f6"],["/Swift外观设计模式/index.html","ba8afa6347dd2c845d35a096adbbbcd0"],["/Swift委托设计模式/index.html","e7efeb8f586e0e46b4cce547000df81b"],["/Swift对象池设计模式/index.html","cc5f0c3a7936985c53d22fa972e73015"],["/Swift工厂方法设计模式/index.html","a29e7f1dc6334581f6518a3ac7a1a8d7"],["/Swift带闭包的懒惰初始化/index.html","5e319cdd9da95b8855194f87bda085f9"],["/Swift抽象工厂设计模式/index.html","5331e19eab261f633a13afd7c93fcf3b"],["/Swift掌握iOS自动布局锚点/index.html","ebb129a7c3d668e79f7aac747a9ddab0"],["/Swift支持旋转的自适应单元格/index.html","3336836be39313109d9e1f87abadaf14"],["/Swift枚举值/index.html","6eeaf7d4796ba338188e59e33eeb9547"],["/Swift生成器模式/index.html","c905d1fb418f510e031caf1fdb3da646"],["/Swift结合Xib文件自定义UIView/index.html","2e577c79ffc3945d036b047d4f305bbc"],["/Swift编写的20个iOS库(一)/index.html","c6c4072e2dcc3d630a1ab9235709f451"],["/Swift迭代器设计模式/index.html","488cf902e43f902fb4d1419372924dc7"],["/Swift适配器设计模式/index.html","291f49a1fc70af32de77d4658b3be938"],["/Swift静态工厂设计模式/index.html","6dca09422e41b99bf122cfcb0bcbd6c8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","86c9d7a359274dab6ec6ee071197f856"],["/UICollectionView data source and delegates/index.html","0e26bc37556288eae61c44914cbe6e59"],["/UIKit初始化模式/index.html","21735b850bd41803bb9a240fab70202e"],["/Ubuntu18.04替换国内源/index.html","ae0b981f42bfbdac04f08dc3970285a9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","92f3e7bc211783d4a09e13b8406401ad"],["/Vapor系列 (一) :  Vapor 初探/index.html","cda3f7183f3951378d4146849179312a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","2237c1566a23796d21695fbc2979cb47"],["/Vapor系列 (二) :  Hello Vapor！/index.html","1ece112c1ed80cfc0ff2145a392531c4"],["/Vapor系列 (五) :  使用session进行authentication/index.html","50efb007e4782109d39c721fb16246cc"],["/Vapor系列 (四) :  创建博客数据库/index.html","a5fbdb8e014faebe47d9adb6f1d49def"],["/Vapor系列(六): 徒手撸一个CMS/index.html","369aefa4c01bbec577a9ca704a363a70"],["/Xcode扩展/index.html","c8d1f48d858abe3cac1d59c9b836191a"],["/about/index.html","7ab8178c58661b776de85e63f5df37f9"],["/appleOS的Networking示例/index.html","b0b6539235f4ba689a6696bc5555216e"],["/archives/2020/04/index.html","42dd5712e3e175a0c8ec33c4be6873a2"],["/archives/2020/04/page/2/index.html","ed469c8ee246d695d0de7d8c8747119a"],["/archives/2020/04/page/3/index.html","33911f77840e18c81303b84c6c69441a"],["/archives/2020/04/page/4/index.html","7e73b568ed4355ecc135a6e71f5f867f"],["/archives/2020/04/page/5/index.html","edcb7fbcd0bda441dff76172f51c6fe5"],["/archives/2020/04/page/6/index.html","5c9dfa89507147f8c164521374c01210"],["/archives/2020/04/page/7/index.html","cf46a99d29471a5ea082e6b5c5fe9fa6"],["/archives/2020/04/page/8/index.html","eee10678fae2cf3826e7c77bc4c671fc"],["/archives/2020/05/index.html","d8e4c3de9885d52f1eb3df06b86eadcd"],["/archives/2020/05/page/2/index.html","27dd720b973171f88672776b0c24e051"],["/archives/2020/05/page/3/index.html","b850055666e467a402d267721fe9c1aa"],["/archives/2020/05/page/4/index.html","89ebf6d354c0103cc1c9c53a8878ea60"],["/archives/2020/05/page/5/index.html","57ede4075da0b4945c4a172675d35dc0"],["/archives/2020/06/index.html","088800d7248337a25aab6499a7c528db"],["/archives/2020/06/page/2/index.html","4f363eeea86490fb75be3d379ad7ee37"],["/archives/2020/index.html","78752aa5c0c3ba0b6f8ee8427b49b9a4"],["/archives/2020/page/10/index.html","c049af3ee2b1fa9d67bef1ae98508053"],["/archives/2020/page/11/index.html","de993266ee01b36c9afed937df920eba"],["/archives/2020/page/12/index.html","bf65a32927a0e80618617ffce7d81f8a"],["/archives/2020/page/13/index.html","569c3fbaa654b6507c64a93d10931ef2"],["/archives/2020/page/14/index.html","291bca77af56c151e1fbda0e1540332a"],["/archives/2020/page/2/index.html","2476db77c4764a906591aed33e8f7f30"],["/archives/2020/page/3/index.html","75092cf242174558f690d9a5b768c4ec"],["/archives/2020/page/4/index.html","d05f566fe9f984877ac631762af5a519"],["/archives/2020/page/5/index.html","d1e8a42229e52d767db7388383dca780"],["/archives/2020/page/6/index.html","a1cd4ce5d1c0872d7d072603ac4a121e"],["/archives/2020/page/7/index.html","1678bdd52186b3b0651df11387a60ec2"],["/archives/2020/page/8/index.html","48c84fbf395f5ce8bd73f1b07b9675a8"],["/archives/2020/page/9/index.html","21d59a6e07a77ec68c8644e92c56d08e"],["/archives/index.html","8619bf190b826300230365dd33f4f373"],["/archives/page/10/index.html","830181ce52169c595e0dbc953273a3f4"],["/archives/page/11/index.html","3b9f38cd79ada053660110309943d3d4"],["/archives/page/12/index.html","009e6cec86f1ee436f13ceaee3085095"],["/archives/page/13/index.html","61c4594d44c0b442484e2d0f34b769b1"],["/archives/page/14/index.html","7ae8be935f22c70f524d561b2af05331"],["/archives/page/2/index.html","2711541dfb93cbcb17f567ce67b96905"],["/archives/page/3/index.html","8591d6120aa2cdc8502abc1214624b03"],["/archives/page/4/index.html","9aa911eeb0a0cc3f6227350074f8fb68"],["/archives/page/5/index.html","19f72182e9b0b516dc117b27b0ff2ae0"],["/archives/page/6/index.html","f4f98ecb78b09c5700aa650a2bc8e15a"],["/archives/page/7/index.html","340004373666d29c2a0616543f4d3eaf"],["/archives/page/8/index.html","02bfd2c803bb4e1f22c07df8dec1683b"],["/archives/page/9/index.html","6ec88edf894f6f4be798d17dd736fb42"],["/categories/Advanced-Swift/index.html","6fa84a337d8992af896db67be84a79b8"],["/categories/Advanced-Swift/page/2/index.html","6c3081b1945ee5e6c07773f63cdb72fb"],["/categories/App-Architecture/index.html","edf47dcacecacb9310a346a1da7933f2"],["/categories/Codable-protocol/index.html","f0c2ddcbf8c9a8e78506d4293c13c1a8"],["/categories/Combine-framework/index.html","307b2389baa46bb8d9dc7dee1acb9a27"],["/categories/Combine/index.html","728b4f633cefeed8a83360d893e84dff"],["/categories/Grand-Central-Dispatch/index.html","ae5f8bcf4f67ccc9e99d50eb8aef6be6"],["/categories/Hexo/index.html","0c978912cb54c279eac7874cfaedce36"],["/categories/Promises/index.html","2bb2887452dfa5498833e5156eedb37b"],["/categories/Result-Type/index.html","c7676f5424a2104857a726d303e06f0f"],["/categories/Server/index.html","f4b2d4795c2d97809e605086c8c16d96"],["/categories/Swift-Apprentice/index.html","8ffcc4c99644cef7865b72f757184ac7"],["/categories/Swift-Apprentice/page/2/index.html","a7536dd7629d1715318dc427bbc14380"],["/categories/Swift-Apprentice/page/3/index.html","0cee94c3097a583a62bb3b0497c36086"],["/categories/Swift/index.html","1a354949681722b8b54bbba6fa87eb18"],["/categories/Swift/page/10/index.html","ded8517241130df6e2adda8d9d59db48"],["/categories/Swift/page/11/index.html","dde6f39f63bd6d3cdd3c5c5cde890305"],["/categories/Swift/page/12/index.html","d35428e688d87fcfb0c74dfa3b8e974b"],["/categories/Swift/page/13/index.html","17bc149cc22e8bb3f79e4d7bf1b59d15"],["/categories/Swift/page/2/index.html","ae498940b0852bd3f5de49ceadf42bcf"],["/categories/Swift/page/3/index.html","b476099595136c6a5dbe0744a4a42c3c"],["/categories/Swift/page/4/index.html","708b34e814220083dccf62b1fb20aec0"],["/categories/Swift/page/5/index.html","a5c6b965b2d30328e585e275eaf83536"],["/categories/Swift/page/6/index.html","2a279f467d5157cb88aa7d5c3d88ecf2"],["/categories/Swift/page/7/index.html","24ca4c33d7eb202e7e68f7c1129ca72c"],["/categories/Swift/page/8/index.html","45e1e3840df17fb56c307f604a5c8308"],["/categories/Swift/page/9/index.html","f9fac5a21ac7df7a9008bf830b931c8b"],["/categories/Swift5-2/index.html","da7835fcbab40477b040c0df87597470"],["/categories/SwiftUI/index.html","30eb4d706ae20dc4226340f71a96305b"],["/categories/UICollectionView/index.html","b99f93d07ff993b0aee80440fbe6a4bb"],["/categories/UIImagePickerController/index.html","e83b0c054ab93fefbed765ec64560731"],["/categories/UIKit/index.html","abb43178f1e762717925c9f83ada646a"],["/categories/UIKit/page/2/index.html","9b5a8c121887519fc67802f3c7949546"],["/categories/UIKit/page/3/index.html","e90643a514e6d905042c9f3a08f6965e"],["/categories/UIKit/page/4/index.html","6765a3379fa586678043ecc55c339d4c"],["/categories/UIKit/page/5/index.html","f07fabad866037288f90527c80c8aff4"],["/categories/UITableView/index.html","dbb70444a81ad08f8924553aec10c0b7"],["/categories/Ubuntu18-04/index.html","a3189cb9d59746b497a78ec9bc20e784"],["/categories/Ubuntu软件源/index.html","e7d15d5bd2a033c282a10b1f12fda87c"],["/categories/Uniquely-identifying-views/index.html","6ceb398607e513714d3d9f492e6dae3e"],["/categories/VIPER/index.html","53871ca409cb0d896d071af8e15c79d2"],["/categories/Vapor-4-0/index.html","acb2f3f346dbe28f7a4ddad77924aaa1"],["/categories/Vapor4-0/index.html","867d0930007c211b61ac886dfd9d6527"],["/categories/Xcode/index.html","d299639462fc0ef09ac7677419874aa4"],["/categories/appleOS-Networking/index.html","d21c1b650fad2285f55d05d6343e968c"],["/categories/enum/index.html","291a4bc464a0b2bd461f27e84ac5f5e4"],["/categories/iCloud/index.html","331f2b3cd317d0eee10012eea5376131"],["/categories/iOS/index.html","2fecfecdd6bf12d351ad80382500c9d8"],["/categories/iOS/page/10/index.html","edc1f621f5479e300223f7001e57e46a"],["/categories/iOS/page/11/index.html","9f10b1d59785cc681fc50c995b6d950b"],["/categories/iOS/page/12/index.html","0ecb4852e0ca6e30672adbce6be6dde1"],["/categories/iOS/page/13/index.html","3b52ab4e9fba856576e95871fc689805"],["/categories/iOS/page/2/index.html","01d1e43f1a901d6afb3a64bc9ea56950"],["/categories/iOS/page/3/index.html","26f80d4fd175f8a82f03a4c082c5e8a4"],["/categories/iOS/page/4/index.html","e3a8b9f7c392bf406e60ae41b460382f"],["/categories/iOS/page/5/index.html","7f922fdb5bf16d16b814826dcb696aff"],["/categories/iOS/page/6/index.html","05decaf32e5d769885d220e9a88768f1"],["/categories/iOS/page/7/index.html","3fc13d44be91efaa8fb82821d63afa64"],["/categories/iOS/page/8/index.html","b3a6708bcfabf710e83f41c6c2258c99"],["/categories/iOS/page/9/index.html","86ef3a46808a8aff20530cd205506a58"],["/categories/iOS面试题/index.html","ba7e4acf91d75bcba925f6dd71755dac"],["/categories/index.html","93efb6d9788665110454c0af3a49df99"],["/categories/random/index.html","aac3da267e8f43fb6e99fb56adf0b495"],["/categories/三方类库/index.html","fc7a55110953e039ef5ba673a0f757e7"],["/categories/函数式编程/index.html","6bad3b10c3ab65e8bf6a123677b61f6b"],["/categories/子类化样式/index.html","3f30558cb6d93f7a6c43561c1ba13375"],["/categories/架构设计/index.html","0693c18addb2f8fca6360b5910de6948"],["/categories/用户体验/index.html","0ba002c68e41f02d1720315407601f8b"],["/categories/用户协议与隐私政策/index.html","1c81b749db8061d5622d5f2ed0ff26c1"],["/categories/设计模式/index.html","394fb8c142620386f6f6992c648ec34a"],["/categories/设计模式/page/2/index.html","e76541c8c083b91b7ecc1d460f257862"],["/categories/设计模式/page/3/index.html","87fd997396e9170b0532d4a47b8d83fa"],["/css/main.css","407ef33f17e3dc6f012f36388f37c897"],["/geckoAppPrivacy/index.html","02f0ac878a62c79b0d00341c5d9f1953"],["/hello-world/index.html","57be3c74051b0169ba07931fabfda4ac"],["/iOS VIPER架构深入实践/index.html","d11afbddd893d56d043fd2621aa981fb"],["/iOS 自定义视图，输入表单和错误提示/index.html","b2586accb8c7e727d5ddfd6040b7290b"],["/iOS如何使用iCloud文档？/index.html","a72087f1ec417796550554b663c2650b"],["/iOS子类化样式/index.html","5345f0455878066731d713628eb043ee"],["/iOS自动化布局编程/index.html","1bf71e942a57f1ea60fa91d712373904"],["/iOS自定义转场(By Swift)/index.html","a6c2227ac0d6e8a1290993cb8272032e"],["/iOS项目架构：使用VIPER/index.html","878493bc5e8c84ddbd44fab90182e7e9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8d480a8a86b8b25e28d101564d300046"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","1e5b20cd9cb1f304322cc609e005da25"],["/page/11/index.html","1298452735bd1ccb6c24b2f0f3cee2c8"],["/page/12/index.html","f3e6d52828e761585fd6b042857ebb04"],["/page/13/index.html","50d202ee54810f3ca756ed94e15da5df"],["/page/14/index.html","0a02c315c758964c0dee89bddda41d3c"],["/page/2/index.html","b011688fcfb6ab6c32ea5361953d7d58"],["/page/3/index.html","144786ba483343954330fb383760825f"],["/page/4/index.html","395cdf13970ee5cb0b6fea874d47f270"],["/page/5/index.html","c232f05b10e6af35328e292c6a43f341"],["/page/6/index.html","50783351545705aa2dda0a904c585645"],["/page/7/index.html","b6a689d3c2f2cfa6be08606f46657e7c"],["/page/8/index.html","038404a0a6278e639d92312c0b2e3df1"],["/page/9/index.html","5ada4029e80406ab8cf43d25ddea008f"],["/schedule/index.html","5a61791561889e488048a8e116cda110"],["/storyAppPrivacy/index.html","4e770249f34fea93852109344ad1afd8"],["/sw-register.js","d471ac6f61d1c850cf52b25098bad6fe"],["/tags/Advanced-Classes/index.html","bc2a66e72534d6545b69a6d41c1951fc"],["/tags/Advanced-Swift/index.html","6c854e21c981b64dff36e9135af51802"],["/tags/Advanced-Swift/page/2/index.html","a98feecf208cb8ac2b48044fbc9f563a"],["/tags/App-Architecture/index.html","e099ce182aeac70e55643e3491beb4a7"],["/tags/Arrays-Dictionaries-Sets/index.html","73c96b666b2b50db24c09119e7c3fa5c"],["/tags/Authentication/index.html","7f247377e98ca590224f63bf0709ede9"],["/tags/Build-in-Collections/index.html","136244de5f20188753a852ce7fe78c03"],["/tags/Building-Your-Own-Types/index.html","ddcdf19be60101669cc3d40ccbcfc827"],["/tags/CMS/index.html","94a9d908315e8d5f3a8c3117c46745c7"],["/tags/Classes/index.html","9a56f2fad0d36f48c5936fe24bd4a0f2"],["/tags/Codable-protocol/index.html","f509e05b1491c1458851105b5d0b0b68"],["/tags/Collection-Iteration-with-Closures/index.html","4444b60d4b21a6885411e1d56604a3a9"],["/tags/Collection-Protocols/index.html","7c4519f3dc65bfd4c39b3d46d32a43a9"],["/tags/Collection-Types/index.html","bc68ca6226caabe61dea3c132c1be5cf"],["/tags/Collection/index.html","0dcb48a46ce57d730b0bf75ddfb5a2d7"],["/tags/Collections/index.html","d251e05ef5fae90e2eaf6382a7542b90"],["/tags/Combine-framework/index.html","457ad095df0f6a0fc78680eed4f02e3e"],["/tags/Combine/index.html","005d2987df387ec3671e3e5c40ffb47b"],["/tags/Dependency-Injection/index.html","30c21ef90024687676ae9fcf4d789f01"],["/tags/Encoding-Decoding-Types/index.html","9df0c4e955f3a11b494ebc60fd4adf4a"],["/tags/Encoding-and-Decoding/index.html","bdf535c45cb851af09ab4343e0d7b1d7"],["/tags/Enumerations/index.html","f2d5246da759136ba928c409fa201931"],["/tags/Enums/index.html","be7be7bdd19ba3c3c80fa4887225d59d"],["/tags/Error-Handling/index.html","b45a4602f89677f30779e1ee33620f6a"],["/tags/Functions/index.html","e906cc0eb7bdc512adf8fd0389623ae0"],["/tags/Generics/index.html","fd2d43c33d5c159e843eb14572146528"],["/tags/Grand-Central-Dispatch/index.html","1f50b32fc11f5eed665deb75e8b748fb"],["/tags/Hello-Vapor/index.html","4709945e21d0617476ec9e6a2fa38387"],["/tags/Interoperability/index.html","c4315a1f16a380dd156bf394152b362b"],["/tags/Introduction/index.html","062de8f1d03496bebf74a493085e067e"],["/tags/Leaf/index.html","2a197cf259197cd7c202fe85ab88f260"],["/tags/Methods/index.html","7937581511fefe5b1aeee6c386b8e53b"],["/tags/Modules-And-Hooks/index.html","20401628c0bf5095456d57d2a95d0113"],["/tags/Optionals/index.html","0e824dedbf13f6b550bd9d6c45282222"],["/tags/Promises/index.html","0c0b67cbc96679326f2afee6fb526b62"],["/tags/Properties/index.html","b71a5860cd1df3851305e80b72023779"],["/tags/Protocols/index.html","0cad34c005225198521c09f76c0f694c"],["/tags/Result-Type/index.html","7bf0fc808d86da7fef7bb58b10ee4b2a"],["/tags/Server/index.html","b81664a8831afe74a9c5d6ef38ea1ae6"],["/tags/Session/index.html","d1a546ba48d81492529ce2e6de755422"],["/tags/Strings/index.html","86e0e12abc9cde8f4609b22e6f04ccd2"],["/tags/Structs-and-Classes/index.html","61246cf0801e51d3117c5790f3820d1d"],["/tags/Structures/index.html","2ce156254bd2681efbc562dff1608fcd"],["/tags/Swift-5-0/index.html","b61b437fda5236edecead1da854e3198"],["/tags/Swift-5-0/page/2/index.html","99756a96594f5746ef32716e6f8edf58"],["/tags/Swift-5-0/page/3/index.html","204238e3d1ee23b159a2ca62e012d486"],["/tags/Swift-5-0/page/4/index.html","371962f8dd78f3e0f954ec5006465800"],["/tags/Swift-5-0/page/5/index.html","9b174989c63c8fe7e5e5a6fa3e5620ed"],["/tags/Swift-Apprentice/index.html","c3dcfb71dd00fbd595ca540636e2ee9a"],["/tags/Swift-Apprentice/page/2/index.html","333a78ff4bd10c4e46955fd4c5a12b6e"],["/tags/Swift-Apprentice/page/3/index.html","1d87e96c314ab455f95fdfa1b90b9d39"],["/tags/Swift-Package-Manager/index.html","50a821898a6cefb661a7594a2a5ad356"],["/tags/Swift/index.html","70b26c852bd5427763afd511d02c646c"],["/tags/Swift/page/10/index.html","1fbf1dd559eb31ed3595b867a93885fc"],["/tags/Swift/page/11/index.html","88181f455c56f49594c05b759c0aa765"],["/tags/Swift/page/12/index.html","d93cc553ffeae2f11b72b3581ff24fc7"],["/tags/Swift/page/13/index.html","e97d29abcf752d426ad3b99488800a42"],["/tags/Swift/page/2/index.html","25645814d1bd8409d3efd42c6c2af080"],["/tags/Swift/page/3/index.html","bc4532571797e49ff06f19ad06c897ea"],["/tags/Swift/page/4/index.html","553c08b982f93df48e99553b07e06edc"],["/tags/Swift/page/5/index.html","696c0401b578fdd53592910cd6e20d76"],["/tags/Swift/page/6/index.html","26cf1abe425b7c847d116c5a2d7adcf4"],["/tags/Swift/page/7/index.html","778c683465e3b83e153339408d8bf1aa"],["/tags/Swift/page/8/index.html","af7974baf2ba66c5ecf2f488fee1e380"],["/tags/Swift/page/9/index.html","4339abcdd07c388be7ad1dbb9baeaa1d"],["/tags/SwiftUI/index.html","178ba87695b530b40e939d90516f0e05"],["/tags/UICollectionView/index.html","fb3a0b1d8fe5669bc53c115b3e5892cb"],["/tags/UIColor/index.html","7d7166171219e3c6bb6e0c3fc3b981e0"],["/tags/UIImagePickerController/index.html","685d5a77ed8fef374634571d1348a250"],["/tags/UIKit/index.html","e107c60c484fc02216aadde3d84362ff"],["/tags/UIKit/page/2/index.html","ac59635248245a5f533486514be708d0"],["/tags/UIKit/page/3/index.html","836e6d50383507448af7ce1ce4a0b8b3"],["/tags/UIKit/page/4/index.html","178cca5bcabe3a6f63075c5b11a33965"],["/tags/UIKit/page/5/index.html","8171ba70b9e6df357941f6ca89d8ebad"],["/tags/UITableView/index.html","5d15ea4003eef1bf05d9bb5e5d692908"],["/tags/Ubuntu/index.html","38f16d353ca3601c8a2156f0d485ed8a"],["/tags/Uniquely-identifying-views/index.html","aeeb0b9131b3b880c4ec91d0c262d0bc"],["/tags/VIPER/index.html","704bd48b60268972968e5e8629dd5df0"],["/tags/VMware/index.html","840990d8ab2e64c55550c3018d5a5b82"],["/tags/Vapor-4-0/index.html","2bcfd9e4f743c4edf8b5b469fe6ee2e3"],["/tags/Vapor-初探/index.html","b7ff5e87106b4dd0054f0a3951a33b6d"],["/tags/Xcode/index.html","0490df18df9e54012af87318f682f481"],["/tags/appleOS-Networking/index.html","1f4e89650724e7303451cb716f0176d1"],["/tags/enum/index.html","fb2fa2550ac6e6fadf762e064f36d1ae"],["/tags/iCloud/index.html","785c2ba38be42ce605f08adf3ae2adb4"],["/tags/iOS/index.html","0f127db710d910f54a88b3e684f4f9b7"],["/tags/iOS/page/10/index.html","42bf2024a7c359692ea0c96c58414828"],["/tags/iOS/page/11/index.html","b431c035cc51633cfb7a12ac713fea0a"],["/tags/iOS/page/12/index.html","0236009c206ba166b64339e5a584aeec"],["/tags/iOS/page/13/index.html","93755f634625d86feb0c20dc53634f19"],["/tags/iOS/page/2/index.html","585ee011d489ec713beca80bb14b2a79"],["/tags/iOS/page/3/index.html","16afb02546aebecdc7190f80f32307fc"],["/tags/iOS/page/4/index.html","ff264a3320f9af6ad0ceb7f2ec9a9a77"],["/tags/iOS/page/5/index.html","ead8939e9b70fd199a4e15856679168f"],["/tags/iOS/page/6/index.html","6b34adef7d27904b2a54ee0e3ba03df5"],["/tags/iOS/page/7/index.html","daf6a4bb2ad134ccf1e1a981c1a21e01"],["/tags/iOS/page/8/index.html","fc593995c947a2482ac487553b3db7d2"],["/tags/iOS/page/9/index.html","f0e933ba45cd254b5b8ce4cbb0634680"],["/tags/iOS面试题/index.html","fa15e5ae9ce2f0ebbdefd3dfbfbd5a5c"],["/tags/index.html","f660748ad94d0d66f3691c15c62cf188"],["/tags/non-optional/index.html","ad44368ea868778c81b239208c6c6c81"],["/tags/random/index.html","c1b6d9bdc24476cda70fd5eea37e13ce"],["/tags/transition/index.html","cdba174d0a8ae331daf68972e1fc09b2"],["/tags/三方类库/index.html","2f4a6c8364ae4e9d852f1763488c806d"],["/tags/依赖注入设计模式/index.html","c97501dc148fad24cfb3e2a6fdb3f693"],["/tags/值类型和值语义/index.html","4e2651d8ca2ccb6664b807bc79206cec"],["/tags/内存管理/index.html","bd9b324566d98b6d0f5f80f1db5bee6b"],["/tags/函数式编程/index.html","e3f58b70611e10778f3bc2a6a1c6f243"],["/tags/创建博客数据库/index.html","25a30cf90595b5e50ea3cf6e32ccad36"],["/tags/初始化模式/index.html","b4fb9458e6bc44e555657857ca300a7c"],["/tags/单例模式/index.html","2823db3a5ca8cbe4c7bc57ed1b6e28d3"],["/tags/原型设计模式/index.html","4a05ed40ee12e73a39ff921ca1bb8f4d"],["/tags/命令设计模式/index.html","1962c664ee919e7c9dfb41481648a8bf"],["/tags/基本控制流/index.html","1b7ba785caf84e9c788f8f3e63325ca1"],["/tags/外观设计模式/index.html","f57e2ca92672774339eab481ee61401d"],["/tags/委托设计模式/index.html","a2e81ee0c180cf62e5b37a59e38f7caa"],["/tags/子类化样式/index.html","6163a49ef8e28b29116427cfa00bb862"],["/tags/对象池设计模式/index.html","f839a3b1961c4b120f151d890b9af38d"],["/tags/工厂方法设计模式/index.html","192bc62c3f338543a3b6a5e7de1bd2f0"],["/tags/工厂模式/index.html","84309438513cc037b6e06b183374868a"],["/tags/工厂设计模式/index.html","12da9bf3840dcb66559cc855206d3604"],["/tags/懒加载模式/index.html","d011961c5b6c0f141838f1fecc8b1299"],["/tags/抽象工厂设计模式/index.html","9a09352cb71f824feb0a40fadbfb8080"],["/tags/构造函数/index.html","fb1f4f2c2f6dc901cb619a3a517eb21f"],["/tags/架构设计/index.html","5762066aea75bc76e5f58bccb9c7019b"],["/tags/模式匹配/index.html","82da72600982b5e560a3f5cbf4fb4691"],["/tags/生成器模式/index.html","298dc6b10b0692e44b4a26d8ff45024a"],["/tags/用户体验/index.html","9a43c389ff24365c2f24e8f475da00b7"],["/tags/用户协议与隐私政策/index.html","3f96e8dc91b329221a17bcabd9643fab"],["/tags/类型与操作/index.html","d4194eca4592446026ebe0604311b3ef"],["/tags/自动化布局/index.html","7d8a1d6e240222cf0e1d8fd1eb03d4ed"],["/tags/自定义UIView/index.html","afea805553a64a9457afcee2a35afd90"],["/tags/自定义转场/index.html","28ee56a32925d76eda3aa524b41fc16b"],["/tags/自适应布局/index.html","9e6bc377b1d59759c5ca267c59660a7c"],["/tags/表达式、变量和常量/index.html","1dc45c6e9944543f91b258d37d28bacf"],["/tags/设计模式/index.html","06edce9f2ae62e9e65db697c4f8d2071"],["/tags/设计模式/page/2/index.html","217adc2b62a9f7e18f34a49df17132f2"],["/tags/设计模式/page/3/index.html","44b5894ea3e1d8e900852e93b0e9bc6c"],["/tags/访问控制和代码组织/index.html","ef442730c62852f99814208985b06783"],["/tags/运算符，下标和键路径/index.html","c672f24eaebc501a15a456de3a7cc9d9"],["/tags/迭代器设计模式/index.html","3a1298dd01a4801bc80c088bbc1b0fa4"],["/tags/适配器设计模式/index.html","9ae47cb413587ffa6f9c55f92fb7181d"],["/tags/错误处理/index.html","d4f04064cc5687f9e7ffe128465b17ea"],["/tags/静态工厂方法/index.html","d5ac82284f2ea44d3166869698482825"],["/tags/面向协议编程-OOP/index.html","f0c9e25eb688865c3692ba67a12674a4"],["/tags/高级主题/index.html","14a8b69f6fd80e0cec288991c20e53cf"],["/tags/高级协议和泛型/index.html","eb8562099cea4c4f5487b5be9f0639d9"],["/tags/高级控制流/index.html","f8b897f614198e095248653000b2389f"],["/为iOS应用构建输入表单/index.html","55ccee8c5fab9abc16788600e6ef3f16"],["/产品开发的幕后花絮/index.html","a9c6fd1eb938af659f257e711c417cd4"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","db9525b984d5daace8bd6e5217bdf99d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","34a6c10b167633db032dd81f0d48873f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2246368300a24b0d969967e074a3d126"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6f09946dfccf4ad261d7c535af31409f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8d0f36e66b5c7434b3b92454f6f86102"],["/在Swift中创建自定义集合/index.html","f3fed12a84aed3e254fa0c82744148d3"],["/在Swift中处理非可选选项/index.html","d0290bbe7add06fa65b3b359a3ec6666"],["/在Swift中生成随机数/index.html","efa43dc867ea9ab63a27d1b8bcab7658"],["/在Swift中重构单例模式用法/index.html","af1af3ef795d6f56232533ba3ea4af7c"],["/如何为VIPER编写服务？/index.html","7431bf374a0e908e53c42d8c7d3a22cf"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6594025b2acd0d86eb5885228fdb3ff5"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","82de0d9e7927c47b5f226d6fe0193549"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","65584dca39a771ac5f3ba3b92018f52d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","2d9238ffe908994622ccf7e1ddeb927e"],["/掌握VIPER架构/index.html","c63532b931d27697f71ded1a85910102"],["/揭秘 WordPress Hook 系统/index.html","326f67067b0a1620bd8e1be936c9ae2d"],["/比较工厂设计模式/index.html","41042383ebfc5cc9b732f2d03d471c9f"],["/深入了解Swift中的Grand Central Dispatch/index.html","17d0e479a3f1be24bf941603970e03c1"],["/深入研究Swift框架/index.html","c2559de70a38a24afc459c65b892c2f0"],["/适用于iOS开发人员的VIPER最佳实践/index.html","060d4d4dd57f85d134b1192caf785fe2"],["/选择Swift而不是Objective-C的5个理由/index.html","3d2724356119ed4b69be368ef34ffb73"]];
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
