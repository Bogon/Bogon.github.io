/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","d33c9376192168ad6b2d50cff37a4f39"],["/2020年iOS面试题总结(三)/index.html","39dd7e7c07f644b93150648dc34a976d"],["/2020年iOS面试题总结(二)/index.html","450ce2234375c2be0486084ec05d6fad"],["/Advanced Swift系列(一): Swift 简介/index.html","6f49aadffbfb9f9390be2f01110d8f6d"],["/Advanced Swift系列(七): Strings/index.html","a462da9009f12d0358bea48b27838ef3"],["/Advanced Swift系列(三):  Optionals/index.html","77661826f38c444cc0b816fa6eb45181"],["/Advanced Swift系列(九): Protocols/index.html","7d48f4afbe5a1a4f2f580516e3ee9ed2"],["/Advanced Swift系列(二): Build-in Collections/index.html","79f5757087dd1a3c81ed547582b2ebe3"],["/Advanced Swift系列(五): Structs and Classes/index.html","30d1be031fca4aa82f65a5da66621289"],["/Advanced Swift系列(八): Generics/index.html","b1b391e029f7e110064a241fbfe3e9e7"],["/Advanced Swift系列(六):  Enums/index.html","5c714a018225d35f39b9f7cf7c00440e"],["/Advanced Swift系列(十): Collection Protocols/index.html","d0380cd8cd3e6a27deee6982723a47d3"],["/Advanced Swift系列(十一): Error Handling/index.html","afa87cac5b7a5e48e6cda3291833e4d6"],["/Advanced Swift系列(十三): Interoperability/index.html","2ea36d5b684496ee1dfc81331386b625"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","3ac008e3f250a94b0aba6a07ea1daa9a"],["/Advanced Swift系列(四):  Functions/index.html","e04e4030e281f68fddb160c28f1f2666"],["/App Architecture系列(一):  简介/index.html","3d4d30ead011ef9d5ee7215a863ae27c"],["/Functional Swift 初探/index.html","cfd90c66122fe05758d450bd7b4086f2"],["/NSCODER和SWIFT初始化/index.html","781e72d76a751b57d22f005838e92437"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","54c86365b8dcfeb0f9eb1a5e73eac875"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","14ec035b516d7219ba9f1dd565a41377"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b86574ed18d70f105416b8bbfee02eb4"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","297fa2ea8089685854d79ff324a907d7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","230e3cb566a740a06796c658d1198aa3"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","303472be0b5792e57ff7ba5378a5c100"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","67bd86a417439efbf068d5145975f3d4"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","acbf930a3ad59d51416162d743f85d83"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","bb5978d78231b3efae7b91f622d794e9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","788ce4b50c06322e680901e5685abe71"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e65b35be36359725048e7333195573a3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5892702c971be1b1ac61e11dfa8911f1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","9923f045e9242d5f281952ec9438e9f4"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","f4eadfbef5926321e3e86a532f3c605d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","17ae9daed0f2537fac874fe124197f46"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","add2d9716904faeb4be39e55d000ee3f"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","ff9bd74cf089be22f9dab5725c09731b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","91bdcc5508fd80aaf64cf75a87fa34d6"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e17a6b48b961b16959c92f0abdb6ae77"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","62cf4addabfc2213cfb4bfac4a5a25fc"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","3604b26d0565e311febc6bafde29a4c5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","525e9d9805d99c911f6bae8bb24af054"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6f525c39437fcb088c54a0356cafb7a0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c418b710788954fcc1d3a94f92abad54"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","f0f04669fe260b02282baa64167b22cc"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","137f8ff0de3f7fa3791d60df6b74fb96"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","7ca06d9d73c776bc45c4b94b9d9918aa"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","69a8473ad5751b8aed0c53ac878c3340"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","301863e406db9f4bfe5164f4aa328e19"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","15f96245f257079739d92f3ba2c31aed"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","2022e27d7bb8d71c185fe40f3b84df5a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","90494874f92cf8cc9deb27fdbfb73eb6"],["/Swift CompactMap vs flatMap：差异说明/index.html","debb6ce93498d607b3a804d3c5a0da86"],["/Swift Grand Central Dispatch 深入实践/index.html","7fc80c03d64fd20d2f127cbdcd096777"],["/Swift Lazy属性初始化/index.html","700383ab8e74874d5a410ffd5fbd7798"],["/Swift Promises 初体验/index.html","fd24258c8413203c7b582c48fd96f8b2"],["/Swift Promises 探究/index.html","31a0305810169dca9181757000a8413e"],["/Swift UICollectionView使用指南/index.html","a576e3dc77d202372641d9a775739085"],["/Swift URLSession && Combine framework/index.html","79f77245a487aca4792a41fe5daabfad"],["/Swift 唯一识别的视图/index.html","2769818231307a29cfa31517a34ab1f3"],["/Swift 如何学习现代UIKit？/index.html","60f8bdce9dcc13011812cce3c93d2122"],["/Swift 用 compactMap 替换 flatMap/index.html","876d9931e7b3e09613ce64d129c89cb2"],["/Swift 选择和播放视频/index.html","03f94f66f22e569abbf5f276e8734600"],["/Swift中UIColor最佳实践/index.html","07a6ac23d6d2ad784ba6172e008a641f"],["/Swift中快速简单的工厂设计模式/index.html","5c36c98a78555154604b93194555f8bf"],["/Swift中构造函数与静态工厂方法的比较/index.html","37a79f9185b5b73f4e701bf86c0a0f6c"],["/Swift中的UITableView教程/index.html","3fb75dd0996c11044291018bade68acf"],["/Swift中的懒加载模式/index.html","0aa5998aa8cd67ca81bf33cb29cfcdcb"],["/Swift中的模块和挂钩/index.html","2dc7e5e4363e8466ebcb54467462f4dd"],["/Swift使用布局锚点添加约束/index.html","8f1e7040847b52c892c0f7098f543c9f"],["/Swift依赖注入设计模式/index.html","c47d005be265f61f2e069aa5efbca242"],["/Swift关于Dependency Injection (DI)/index.html","112bb6a5b435e03fb49c314f51e095be"],["/Swift初始化模式/index.html","dc29656870fedc97e2198405a97b59e5"],["/Swift单例模式/index.html","fa8db5534d03f6ee86fc5817ad8bf2c8"],["/Swift原型设计模式/index.html","9c6b5424cab35292749f9f659fe3d398"],["/Swift命令设计模式/index.html","d3187f08a494db30083ca24571404a76"],["/Swift外观设计模式/index.html","67b539f914e2a1b1b5dcb8af54c2abcb"],["/Swift委托设计模式/index.html","c5a0fae201526301021a99367cc8e416"],["/Swift对象池设计模式/index.html","6ee558d0622d516080834ab0e13d488f"],["/Swift工厂方法设计模式/index.html","ea2da2801d78747693abe403fb57f9d5"],["/Swift带闭包的懒惰初始化/index.html","dc53293fcf2dcaab1112f56f04480395"],["/Swift抽象工厂设计模式/index.html","5db0c3c8ceb470894faabe13c8d1472b"],["/Swift掌握iOS自动布局锚点/index.html","ee22a06cb56710bb4d08bc807718491c"],["/Swift支持旋转的自适应单元格/index.html","a42af5500fdd95333dd98e536697f29a"],["/Swift枚举值/index.html","92ca708605cea08eefdb7800660cba0b"],["/Swift生成器模式/index.html","8a8dba1e913c0131cbb343a809271d50"],["/Swift结合Xib文件自定义UIView/index.html","7ba9f6fd4e10e65a865a724c0b4e11a2"],["/Swift编写的20个iOS库(一)/index.html","421e9f14c0fb04feb37cafadbf6a7b00"],["/Swift迭代器设计模式/index.html","c9361c75faa6b925161d34b4f6498e24"],["/Swift适配器设计模式/index.html","6b029ec67b9166f1e573f3a233f40d87"],["/Swift静态工厂设计模式/index.html","e9638f569917ff4673874109a520bb01"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","23f35eaf64867bc23e61f55cf9b6ed51"],["/UICollectionView data source and delegates/index.html","adecb3895f32ea06b9d17016461b5f7e"],["/UIKit初始化模式/index.html","948a4784ffc83dd86d44520de5dac87f"],["/Ubuntu18.04替换国内源/index.html","5464e52338dce9e32888ee065149cb52"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","42c2e0524feae46acc87bc7ce9f07d47"],["/Vapor系列 (一) :  Vapor 初探/index.html","91553ad63cb7ea1c05e6ce1e84db26f0"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","070af134a0c708381b4955d965328a6a"],["/Vapor系列 (二) :  Hello Vapor！/index.html","b222349715111a0cc7369105147c4afd"],["/Vapor系列 (五) :  使用session进行authentication/index.html","fdba71510ebb9f132adbb493ca542e03"],["/Vapor系列 (四) :  创建博客数据库/index.html","60ab97991efe83884324f9c2ffc11e14"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e952d8c25cf01630c726c82d0ea99850"],["/Xcode扩展/index.html","323d572755f7024178ac0262da2a0da7"],["/about/index.html","e7c85299cb6fdabece70fab272e09c59"],["/appleOS的Networking示例/index.html","d05dee0ed9c430b57f11b9388bbc5398"],["/archives/2020/03/index.html","e3a7e67d09193b93c5b682b954211992"],["/archives/2020/04/index.html","61746c62e3a90b54b58fa6ae9c541fd5"],["/archives/2020/04/page/2/index.html","d51b732ff50bf9b27f0dec7609fd065d"],["/archives/2020/04/page/3/index.html","5550861edda444552933f6e0d741ee2d"],["/archives/2020/04/page/4/index.html","a8896fd48da6e24d760b0a28d9d885ef"],["/archives/2020/04/page/5/index.html","49e722328d51119bf135d515502b11aa"],["/archives/2020/04/page/6/index.html","11f3b5078e533b36b427635d191a3302"],["/archives/2020/04/page/7/index.html","6302e2d343a42dd340c1954171f26288"],["/archives/2020/04/page/8/index.html","4788f9f56ff1fc5f567149491c993307"],["/archives/2020/05/index.html","53de20a46bb66b315e4c76b3ad7ea7a2"],["/archives/2020/05/page/2/index.html","0226fe33c92e6c8f2b8716e24279d215"],["/archives/2020/05/page/3/index.html","b83c187bcec7f081dc461913e918ac77"],["/archives/2020/05/page/4/index.html","59a632e34a6366443f3ae32305c6694e"],["/archives/2020/05/page/5/index.html","5db11f2d00e68f4d2e1d96d07dc23297"],["/archives/2020/06/index.html","8b5cd3fe2768219e8b31b9948da3aaed"],["/archives/2020/06/page/2/index.html","8acb24af66dbc94a4170c9203cbbb602"],["/archives/2020/08/index.html","fe0534c777e360d5d252a8c1bfb45fe2"],["/archives/2020/index.html","bd6940a50b6d5c83307eae549447c71f"],["/archives/2020/page/10/index.html","f43a60a9e7063428a8efa0f44eff7af7"],["/archives/2020/page/11/index.html","6116bda00cf87732dd7d9204f37f5625"],["/archives/2020/page/12/index.html","2cb3c03919b1d9ba0bcae2583aeadd8a"],["/archives/2020/page/13/index.html","520a73993ff387dce107792b523644d8"],["/archives/2020/page/14/index.html","38344ab656e2f0aca2c9227e0a130f95"],["/archives/2020/page/2/index.html","b82014d299029de5d10b51c0913c56bb"],["/archives/2020/page/3/index.html","8d1fd8e61d1eb3e4bb9ed9ad86769dd7"],["/archives/2020/page/4/index.html","ea274d7305c3c70a3a95169efb7da6f4"],["/archives/2020/page/5/index.html","de64352aca9bac19dd46b9394587be80"],["/archives/2020/page/6/index.html","d7dc3a8ff7f2e0bc66548ce35750ef03"],["/archives/2020/page/7/index.html","ef8dac792114d65c7578a2b68ebfd2b1"],["/archives/2020/page/8/index.html","cfe37bee2ca4ebd658880f2896558da2"],["/archives/2020/page/9/index.html","d394829c654d0d847c993f32427669a5"],["/archives/index.html","21afbaa7a9d3beeaa0f74934926be365"],["/archives/page/10/index.html","238b232540148a336725ff264b6cdf72"],["/archives/page/11/index.html","bc3546590f61fde0e348fa953311e1c4"],["/archives/page/12/index.html","16ce0fa0168f4e25c2c9082e966c18d8"],["/archives/page/13/index.html","1096bee86886a461a91cdd7bd412069e"],["/archives/page/14/index.html","a121e18305426d6d9419042dc66c0cdc"],["/archives/page/2/index.html","d7e783c28d1160ae487a3864f0d477ca"],["/archives/page/3/index.html","101fad92a08c3cae44b3dbf40b4a5b99"],["/archives/page/4/index.html","efae9f58249a733575175c3f6ef7797c"],["/archives/page/5/index.html","5ce8d851ee7834bdb5b1325743dd7805"],["/archives/page/6/index.html","1f9ed27fc500454549c910e768724292"],["/archives/page/7/index.html","6936ebb11ab17c41589d8cd79bd4d790"],["/archives/page/8/index.html","9fea2b728eab49f76e75900da8168fab"],["/archives/page/9/index.html","c07798ac11d9a9a2045d7b5b2f71288f"],["/categories/Advanced-Swift/index.html","34bc7d01ff81c7b1458bee6d9ae01aaf"],["/categories/Advanced-Swift/page/2/index.html","32206325d36dd182f219af067cc2424d"],["/categories/App-Architecture/index.html","921ac2c9164ead16edf2379cdf34003f"],["/categories/Codable-protocol/index.html","38935ade58d518bedb403da0b44d8938"],["/categories/Combine-framework/index.html","230ff8a60aa84697311d3ba04e74201f"],["/categories/Combine/index.html","4c40f5c35bb06d1acdd50b4af709db59"],["/categories/Grand-Central-Dispatch/index.html","19dcb034a136401301775f2a35788e63"],["/categories/Hexo/index.html","f240c5f8480fbae4431c2b41b2e3dc25"],["/categories/Promises/index.html","1d705a37a61a1094874ac1f7128e9227"],["/categories/Result-Type/index.html","d67599a0ab9d62cb0b8d859dc2e0a57f"],["/categories/RxSwift/index.html","a98ead010b86ee83777254e0ee7d58d5"],["/categories/Server/index.html","03e8bb21417104c88f137ab5a871aae0"],["/categories/Swift-Apprentice/index.html","4f4e39e5759ec94768c26c9d23c084ff"],["/categories/Swift-Apprentice/page/2/index.html","fe1068f73c682b8c1314cc3300866c82"],["/categories/Swift-Apprentice/page/3/index.html","e001909bfebda6044b55b2b784e1ed21"],["/categories/Swift/index.html","eade5dc527388a5441bab4d137851a97"],["/categories/Swift/page/10/index.html","23463520a27a08756e463be3f7888c1a"],["/categories/Swift/page/11/index.html","8a6594cf14baaced2886c292c930ab9c"],["/categories/Swift/page/12/index.html","bbe7db08cf9fd1038421a589ae60a75e"],["/categories/Swift/page/13/index.html","55ab159feddb5e5a109807047cdc5f8e"],["/categories/Swift/page/2/index.html","c866fb028544a293ab6bb5391091c364"],["/categories/Swift/page/3/index.html","f4a0775944806c14d03d7c4f2af824f6"],["/categories/Swift/page/4/index.html","32c810ea6b063e456b0648839b097c67"],["/categories/Swift/page/5/index.html","b56570ba2c66cb10c083e6c06f3064d5"],["/categories/Swift/page/6/index.html","94099f2e9da5aece930b06f0c3958f96"],["/categories/Swift/page/7/index.html","8d49d043e290fc4bfdc31540d105e356"],["/categories/Swift/page/8/index.html","2d31c4fe12dbf05fdc188d7e2891a5a5"],["/categories/Swift/page/9/index.html","9b16a66a6b5f973ee66f31069c7275a7"],["/categories/Swift5-2/index.html","2e61b5329e68685b3c45e567a009a33b"],["/categories/SwiftUI/index.html","b0a0875687d4880e6bc0343bc4579d0a"],["/categories/UICollectionView/index.html","dc9526a0e08467fe5bb03aff74f96cfd"],["/categories/UIImagePickerController/index.html","73bdabebf635b4ae4ec936371d0ae03d"],["/categories/UIKit/index.html","6d74ff7aadb311f2154e503c7927b355"],["/categories/UIKit/page/2/index.html","35a65e3ca916dc08062208429b646866"],["/categories/UIKit/page/3/index.html","4fd017b3f3af1b81521afda05753e085"],["/categories/UIKit/page/4/index.html","e2418c557b74ba47addc2e2ac7dde2a9"],["/categories/UIKit/page/5/index.html","587c6d0368659b642ac2915e5c941b40"],["/categories/UITableView/index.html","e3b35dd648cec12697ba0f15474a7b0b"],["/categories/Ubuntu18-04/index.html","09cf05583d0a9c3af2e90098f34e21a5"],["/categories/Ubuntu软件源/index.html","ab3e33b9425c43c69d8fe93a73edecc7"],["/categories/Uniquely-identifying-views/index.html","98750e4e76fca6db449d6889ec8f46aa"],["/categories/VIPER/index.html","10b470afafe9af2ba0a2ab2e43a339f4"],["/categories/Vapor-4-0/index.html","961cfc7b64a5b1e4aa5e2c7ff579d96a"],["/categories/Vapor4-0/index.html","d7e94184f9020a85c665bfa65fa7bbcc"],["/categories/Xcode/index.html","bdfca026c2b5be2d994a7c6ebef677f2"],["/categories/appleOS-Networking/index.html","f46054d9ea512946eac393f3af77c4d1"],["/categories/enum/index.html","6298aedcff1d80a3a3c503de2705b6c8"],["/categories/iCloud/index.html","ef127e283c88ebe25d700069bdb7aff7"],["/categories/iOS/index.html","e333b9ccfd37e5abb5f64baab3e1665e"],["/categories/iOS/page/10/index.html","4adf9334b631b944d0e9263a3f4eea79"],["/categories/iOS/page/11/index.html","13b1d0f6796269688993072b50696f01"],["/categories/iOS/page/12/index.html","f420697f34e5e412c6314cc45360cca4"],["/categories/iOS/page/13/index.html","69c9107949a284f6cfdf1df6a0cd96bb"],["/categories/iOS/page/2/index.html","5a2e3109bb399104c5e26226683f2c37"],["/categories/iOS/page/3/index.html","24d739550873c14166fcce820247e7e3"],["/categories/iOS/page/4/index.html","327098a7f3bae619a72797ac841f6cc7"],["/categories/iOS/page/5/index.html","fcbdbf42eb4dcf196c06682018a0b0ce"],["/categories/iOS/page/6/index.html","fe2266a7baa1945b75fa44fe6a624a8b"],["/categories/iOS/page/7/index.html","2d7eb89d7835a39a099ba5b3fc674154"],["/categories/iOS/page/8/index.html","0fc2232912769a7cc90456350a92a844"],["/categories/iOS/page/9/index.html","72ac1bcc056640038d7985f95786bd60"],["/categories/iOS面试题/index.html","6b70382eebc440abe548142f0947fa60"],["/categories/index.html","a61635b8a20069baa965f2d566b6027d"],["/categories/random/index.html","914035498a34bc16bbadf08ed74e5317"],["/categories/三方类库/index.html","5791f7a1dc94ac50ea45839ede4a3cdd"],["/categories/函数式编程/index.html","8fe40072e32073b9a15fe6b536013dec"],["/categories/子类化样式/index.html","6855997f9f4ba046577033de71769448"],["/categories/架构设计/index.html","a521d042f4fb19222b5ca2686e4bbb07"],["/categories/用户体验/index.html","6e40a991d119c4abf4c6d352d8e5e23d"],["/categories/用户协议与隐私政策/index.html","13028b2184d10023d4d065d0ebf78655"],["/categories/设计模式/index.html","db380928da6f47c02b81c42afb9762d4"],["/categories/设计模式/page/2/index.html","e2377216d7ef9b6d11fe3394828104c6"],["/categories/设计模式/page/3/index.html","ae73b9b8d236185dac89d9513c29eba0"],["/css/main.css","d11332396be1ed4a815aef03b3565904"],["/hello-world/index.html","39c02c05b236ac4c823e7001f46e5fa7"],["/iOS VIPER架构深入实践/index.html","d1253198387bab34b553375815cf6df3"],["/iOS 自定义视图，输入表单和错误提示/index.html","71983f4274c5f4a147cf88c7ded54903"],["/iOS如何使用iCloud文档？/index.html","e0e3c32a074d2cf47094add7bd46580a"],["/iOS子类化样式/index.html","cb08fb8a3f464396155f9c8cfeb2933d"],["/iOS自动化布局编程/index.html","6e1e3da2e7c53f6b610c56f18a63d69f"],["/iOS自定义转场(By Swift)/index.html","978b41fc62c7c3a2bfcf250355fde7bc"],["/iOS项目架构：使用VIPER/index.html","091eb99e13c3602f1f3c433cf7df1e4f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8d5a1fc00d152e5bebd6eb50e9c0dbfd"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","bde02a804f6aa3135b311ab8b7d54c40"],["/page/11/index.html","440d2794b98d46e395751df453603919"],["/page/12/index.html","f57b4841b6a82706332f8e47ab7627ae"],["/page/13/index.html","a335f8d09de78c2bcbea4867734aeb0c"],["/page/14/index.html","851d457f9977f023205a645ff108f343"],["/page/2/index.html","42d39b4ec3df1212d664beeaa3e71eb3"],["/page/3/index.html","96c087f336004b4e4069be20656f452e"],["/page/4/index.html","8025bfde87406e3af9d7b38f57ed2f8f"],["/page/5/index.html","7860c629e0cb1170a6362daa4dfcbe23"],["/page/6/index.html","6eb9c75b88d94dfd807f756ea75f2417"],["/page/7/index.html","bfe65817f5bcf4abf533a70db4e6db32"],["/page/8/index.html","c3c2cf4f987843175a69fe3dacc3fb44"],["/page/9/index.html","c588c0db498c2510739e118b0401d133"],["/schedule/index.html","2189358dda027136ae58ff5acaeea34b"],["/storyAppPrivacy/index.html","355232c31df8402015a1dfb56f53219e"],["/sw-register.js","39d7baa502c200e59ef071e3fcbe8c5e"],["/tags/Advanced-Classes/index.html","ed6ebc3aece14bbf4bd5584836608c4d"],["/tags/Advanced-Swift/index.html","7b77ba9936c9a255e9d33c1d5497cecd"],["/tags/Advanced-Swift/page/2/index.html","deadbe634ce513075e3e76c887477815"],["/tags/App-Architecture/index.html","4e68d6f191532884e1020363f79fef7a"],["/tags/Arrays-Dictionaries-Sets/index.html","1e124b1d2c550ab383c8793076e614d8"],["/tags/Authentication/index.html","77f2974f021ab05cfa16d9e76fac8d2c"],["/tags/Build-in-Collections/index.html","6cc332e6f0fdcffb8930fd2a7829bd11"],["/tags/Building-Your-Own-Types/index.html","5780ac9f06dc957238045807537ee7bb"],["/tags/CMS/index.html","c9e5fa20234b1bad3732c2ff03ed3e51"],["/tags/Classes/index.html","770b5730e7871468adbcad8f8aa3bf17"],["/tags/Codable-protocol/index.html","a9f9163384429448803d63d695d7339a"],["/tags/Collection-Iteration-with-Closures/index.html","656db0c472ba9504540a5a3aa74f8911"],["/tags/Collection-Protocols/index.html","5b61205c4128fa19b15f41ed0320ba79"],["/tags/Collection-Types/index.html","46fa85638f51baea7b24580648f70b5c"],["/tags/Collection/index.html","6fc7fec1090e4411e5e0871ea35756fd"],["/tags/Collections/index.html","db1d96bba98b884e035d39d9fdc3c3c2"],["/tags/Combine-framework/index.html","26a74c43176ae0bd7c0ef9e395ecfa65"],["/tags/Combine/index.html","feb12b8fa66c9e051b1bce2cf0b04b29"],["/tags/Dependency-Injection/index.html","efc1143aaebc18520d1d11c2f7e36a7c"],["/tags/Encoding-Decoding-Types/index.html","bac55a71ed9d5e5844957487231a0fb3"],["/tags/Encoding-and-Decoding/index.html","4d3a707d74e5d4a008322905927e311f"],["/tags/Enumerations/index.html","0f5414118d49d21dfc5d79d89adbc73e"],["/tags/Enums/index.html","95b1fff364b00d9399111ccc9a23705b"],["/tags/Error-Handling/index.html","06d2efa7658ca9a636a624db38a731f5"],["/tags/Functions/index.html","e18b0766bfb0e2f475c7bb777571c38c"],["/tags/Generics/index.html","521cc167a77c8b5b1fc003e0d936563a"],["/tags/Grand-Central-Dispatch/index.html","5b6baa75415bb9ddf027c3e38f269a16"],["/tags/Hello-Vapor/index.html","1d67d1909e310491e17cc44d511cce6e"],["/tags/Interoperability/index.html","34b8b5d0aac1a61a2b2c9aa8905154fb"],["/tags/Introduction/index.html","0ec121dbdfd007fe3d2a07dcd94140ee"],["/tags/Leaf/index.html","7ec803346216cc018d62d56f18a79d6c"],["/tags/Methods/index.html","8e684baed9f44242057a37763793282e"],["/tags/Modules-And-Hooks/index.html","34fb52dcd3fa15b7eebc093e2b069643"],["/tags/Optionals/index.html","0265e4d3b182d2fbdfbed571ace36c4a"],["/tags/Promises/index.html","1b7092e39378cc794f9ff5ba72da6374"],["/tags/Properties/index.html","4126bee0b82c516b048f85dbca6764c6"],["/tags/Protocols/index.html","2790ffdc956c9ef59ab7519eb0213a79"],["/tags/Result-Type/index.html","f3195b174041edbbbcd971f30e1250c7"],["/tags/RxSwift/index.html","001419f10724cda1d368a39c6f18f0ff"],["/tags/Server/index.html","11fc5c9010e2e8e921556765abb94707"],["/tags/Session/index.html","14e567e01800fc4e11d720c456ec93af"],["/tags/Strings/index.html","52c3847a1b25a26a85faa4cd49da30a8"],["/tags/Structs-and-Classes/index.html","64617a535f628499362d5f58a1490d2f"],["/tags/Structures/index.html","6d7f92283f69a2a2a700843e5abca618"],["/tags/Swift-5-0/index.html","a3ba325d8083dd988cab364cbf980966"],["/tags/Swift-5-0/page/2/index.html","112b909b7c37646287c037867def8e97"],["/tags/Swift-5-0/page/3/index.html","2d5e36bdbdcae23948a4059d87adff10"],["/tags/Swift-5-0/page/4/index.html","2e53837d6c4df6556b7a2dfdbdac4419"],["/tags/Swift-5-0/page/5/index.html","8128eb242f7bc913b38d4f5b4ea29bb7"],["/tags/Swift-Apprentice/index.html","b822c6ae968db57439a7ebddd06a136d"],["/tags/Swift-Apprentice/page/2/index.html","5d13780e028238263b2ec08a8900b598"],["/tags/Swift-Apprentice/page/3/index.html","dfb77c362d99557aa8c7bb32ca563e5e"],["/tags/Swift-Package-Manager/index.html","21cc42b5795567d130ef73bf14bf7239"],["/tags/Swift/index.html","f037e9ae0456a7c699fedb8a811ca3fc"],["/tags/Swift/page/10/index.html","fee7964e9d4ce169d8aba7ce383d17c1"],["/tags/Swift/page/11/index.html","fb8b4455f66c407ae0c72b8ef83818e6"],["/tags/Swift/page/12/index.html","c160e4e1dd0d45a102fc90e4d4eb002b"],["/tags/Swift/page/13/index.html","eb7ef1e37d74cbfbbd13537a238a5043"],["/tags/Swift/page/2/index.html","924830ff6f46a62708fe2e91d9939125"],["/tags/Swift/page/3/index.html","09ede69c01b0b0a03ce839cbaf3c4aef"],["/tags/Swift/page/4/index.html","5d9472c8aec87bd701a1dfdaf493ccb6"],["/tags/Swift/page/5/index.html","accb5cb3a8acfa34a6dc09e4851dd98d"],["/tags/Swift/page/6/index.html","953b7c16372c0dec99fb4b4f98046899"],["/tags/Swift/page/7/index.html","22b8c277fd8c718879f44428573845d5"],["/tags/Swift/page/8/index.html","c5178847230cce56158d9f6b3c880abf"],["/tags/Swift/page/9/index.html","5a21d93e67b663009cd92b37d8acdb7f"],["/tags/SwiftUI/index.html","e0d6f651b7a7fca86fc78150d2641e55"],["/tags/UICollectionView/index.html","e067542b6a673df2519d34d6cb40d28d"],["/tags/UIColor/index.html","238123b2bbf85f6c9a922f9af3a6de4c"],["/tags/UIImagePickerController/index.html","bd07afebd3fd2fd3e3332505fb819673"],["/tags/UIKit/index.html","10e3da0b3f5344fa5b8da6980e8aea3c"],["/tags/UIKit/page/2/index.html","85b7161445ad6bfde56cbd11d2133241"],["/tags/UIKit/page/3/index.html","f947005bab7a39bc6a9c8bac0c9adf51"],["/tags/UIKit/page/4/index.html","6798837ca7be6c9214b5eb513ce737a5"],["/tags/UIKit/page/5/index.html","8b144343e11004dcadd18e7cf3e564d2"],["/tags/UITableView/index.html","d26ebcd3369748625de98519b3f0d158"],["/tags/Ubuntu/index.html","2579e63620363694ae7a3605be54d860"],["/tags/Uniquely-identifying-views/index.html","ef88fd5480c200cad16add524b33bec9"],["/tags/VIPER/index.html","0b9270b26c7bc0ce5ae2f6b564830222"],["/tags/VMware/index.html","8cc5858e49970dbe4a908a0b3aab7055"],["/tags/Vapor-4-0/index.html","74fee6ae94aafc6911e1e085fb275032"],["/tags/Vapor-初探/index.html","93aa0e0da0cac4d2002e877935de4d59"],["/tags/Xcode/index.html","755d63e3c0f07a40406e29379afddeb7"],["/tags/appleOS-Networking/index.html","be0d13c9bf6829f4e1bbebbf54305e7a"],["/tags/enum/index.html","56a6084733e3ce0476806be325a5c884"],["/tags/iCloud/index.html","5ca0c5ccb945244a30ab935806342063"],["/tags/iOS/index.html","2f7ed96eaa0b3eff251a20b1f12e110b"],["/tags/iOS/page/10/index.html","690bc5a56d751295b22eac5209f8bc09"],["/tags/iOS/page/11/index.html","64500b2f8edac2b48da87911c36d5a78"],["/tags/iOS/page/12/index.html","2bb5080fb6d039dea8b74f9d62828ea3"],["/tags/iOS/page/13/index.html","712759c1a407c16ff0625a670b1438c2"],["/tags/iOS/page/2/index.html","6fc1a99eb0cc64304f0a30a378ce23fc"],["/tags/iOS/page/3/index.html","88d17c678fa5b2dc5d025ed1a0c2e9eb"],["/tags/iOS/page/4/index.html","07d0e7676395bc1b9d19bc572a56b654"],["/tags/iOS/page/5/index.html","af3e91a365f1e0c5b6a7aa85f3e03456"],["/tags/iOS/page/6/index.html","4bc6d9a4bc8472f69e093acf5cf65c60"],["/tags/iOS/page/7/index.html","283c15261dae569d0349f5f74f530106"],["/tags/iOS/page/8/index.html","f8aa3f2616ef78bc597071cdbddd4f18"],["/tags/iOS/page/9/index.html","bc5e81781a079a400ef95600ee138357"],["/tags/iOS面试题/index.html","eacbe387b415134af6c86461e1437fcf"],["/tags/index.html","2430803f98f710f146df603903aa938f"],["/tags/non-optional/index.html","8ea510423abd86d39c4e2c4bd1513cbd"],["/tags/random/index.html","0c31a7053d4dcb136d19d5caf836d2d3"],["/tags/transition/index.html","ca4639d007c79ff59e703a18576c9529"],["/tags/三方类库/index.html","7aaa1140328a255126499bb0cb074bb7"],["/tags/依赖注入设计模式/index.html","5b69f1b3b896c01b2f13c44ace2629df"],["/tags/值类型和值语义/index.html","835f3154493665b70818a65a799e106a"],["/tags/内存管理/index.html","1b3f1427acbced6dbcbd983e525ea8d8"],["/tags/函数式编程/index.html","db83ecbf4159e54693c2c802f1c886d8"],["/tags/创建博客数据库/index.html","1bf9dd3256498bdcd3caff9507fa374e"],["/tags/初始化模式/index.html","e18f64b40d428999874da63739ef9e20"],["/tags/单例模式/index.html","7ab7ac67f21449574d30ce1b5c22ed23"],["/tags/原型设计模式/index.html","08b858a911f52c45bd2317f41b9eb828"],["/tags/命令设计模式/index.html","65194ce0fcd8e7fc7bb16c93998e51b4"],["/tags/基本控制流/index.html","db4083dd47cc6a878cc7c21c5f3b4aab"],["/tags/外观设计模式/index.html","cb85be7a45ca248837776368782e90e3"],["/tags/委托设计模式/index.html","c18c830a55ccf78db8536b9dad91ff17"],["/tags/子类化样式/index.html","9a4f8427fb2717e1450d5e6d8953fa2c"],["/tags/对象池设计模式/index.html","bd18e05501903ddb7f4143efada8d441"],["/tags/工厂方法设计模式/index.html","9c90cd6b93fa36ba6efe7bbf035bf4ae"],["/tags/工厂模式/index.html","76934f525a96dcb4666561670b584209"],["/tags/工厂设计模式/index.html","0b5fddf09d5ff29d5f38eafaa6b236ad"],["/tags/懒加载模式/index.html","aa64726e7630b181c7df5026bfeb5173"],["/tags/抽象工厂设计模式/index.html","39084db5f2c973723ce759a6a72d96f2"],["/tags/构造函数/index.html","048ad3ee2125bd9e6d40d721d6b16d90"],["/tags/架构设计/index.html","feb3485727b4b3745cf7f4560df74f0d"],["/tags/模式匹配/index.html","9bafe0cef85d6599ffd4d0985f3735f2"],["/tags/生成器模式/index.html","a4ca933fed029107a11c7c29ea0c160e"],["/tags/用户体验/index.html","b1be040f00dd2d81d811ab6ffbf723de"],["/tags/用户协议与隐私政策/index.html","36f7420640e2c058df72059ede9d8d47"],["/tags/类型与操作/index.html","cb40e50f950410afa5ef08d768dd68d3"],["/tags/自动化布局/index.html","f6314fa1e59a19641a18ea2e2be7558f"],["/tags/自定义UIView/index.html","4038defb8eef8e22de4e523fc54d7f25"],["/tags/自定义转场/index.html","687d93f334d234ff577c1d42c3fab19f"],["/tags/自适应布局/index.html","5d0ddf1ba40d37592057d728a60c4a93"],["/tags/表达式、变量和常量/index.html","c1b5ffed697c0bdb21c7a9f3d0e2707e"],["/tags/设计模式/index.html","77565aacd39f1e204229df0f8f2c9515"],["/tags/设计模式/page/2/index.html","27b6010ace0b819871425df400a618b3"],["/tags/设计模式/page/3/index.html","902280253faa4ae0c344aec7bcdabb8c"],["/tags/访问控制和代码组织/index.html","aef68ce53039cdc6a57fa071bb0279f7"],["/tags/运算符，下标和键路径/index.html","31b8a2e1b2a5d6c1d99b31b15da47ed6"],["/tags/迭代器设计模式/index.html","bc57b719e22b619b4dea667fdfde736c"],["/tags/适配器设计模式/index.html","43a0f07ae8cd40206a53a800ca55fd21"],["/tags/错误处理/index.html","cebac2efafda1eecd6e9863dd8b96ed2"],["/tags/静态工厂方法/index.html","3c351ca67c6ec5dc526a02642628b1fe"],["/tags/面向协议编程-OOP/index.html","41fc92b264fb4a5dbbe37fedff5c3a4a"],["/tags/高级主题/index.html","ebd14a232cb985fd666705afb0fc8cd9"],["/tags/高级协议和泛型/index.html","6cd61592d5720f492c7fb6c81451b591"],["/tags/高级控制流/index.html","552e1bd7e12af2f06b4e2ee390283e09"],["/为iOS应用构建输入表单/index.html","b3fb2fb362fb6bd7adf5299a62a36036"],["/产品开发的幕后花絮/index.html","74538ad415a6575211c29ea347e0bc1b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a83516c58da7a0cfc4b35f3447c1e0b9"],["/冒烟测试与回归测试/index.html","ed88b4e80c4781cd6685236d210ae86b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","65fc7b6da8e9e134165c37d6a690081e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2cfc6bb5845adb1be8d9b6bd5e292908"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","fd56c12b030b5a2c9d31e5346bbb7769"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","c31eabb7305e398386f0f764af4da8af"],["/在Swift中创建自定义集合/index.html","33f5b9b4ffa4434ff60e18574ebac105"],["/在Swift中处理非可选选项/index.html","f3a8eff8ef4b540cd4ae4a3b16cb3161"],["/在Swift中生成随机数/index.html","5a17fd7357013abaf8ff027c4fc1583a"],["/在Swift中重构单例模式用法/index.html","9e37902939f1adae0f30d894f3f96674"],["/壁虎兼职用户协议与隐私政策/index.html","75e5ecd2b2ad7474595f9b79ec2cba1e"],["/天天兼职用户协议与隐私政策/index.html","1889fb69eb9c5002170675f605913338"],["/如何为VIPER编写服务？/index.html","2fb44690bd237529b30b9cf090737cc2"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","024251501b803d8bb0a8fb7e41973c12"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","5dd0a65986301c274e86882b5b127f1f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","9c2f8e9f2010dfcdc3fdf4ffd68855ed"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b36bfdce080958b4fde69929a44ec1fb"],["/掌握VIPER架构/index.html","c31e57063e9ede05a8f0458f44bb9b46"],["/揭秘 WordPress Hook 系统/index.html","a4d56f9a0d72cb36c62c7ca3e85754be"],["/比较工厂设计模式/index.html","396504e7e940c1dec91f1b8d8cebd342"],["/深入了解Swift中的Grand Central Dispatch/index.html","1212446362c00bb668c79833e3a22d49"],["/深入研究Swift框架/index.html","3fc69cfd0a989646bc2435c8c514255e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","1540a334fa1579a4d4203859d255ef6f"],["/选择Swift而不是Objective-C的5个理由/index.html","b3b32d02f2f7b5be92ffb05ff92b80bb"]];
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
