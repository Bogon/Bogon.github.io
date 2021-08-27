/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f9cbb7707dd4eab74189cd35f9b9159e"],["/2020年iOS面试题总结(三)/index.html","0edb09715e61bf64eb87ae90dbe4fd56"],["/2020年iOS面试题总结(二)/index.html","5a84509344b067c3e353490c4a11ef00"],["/Advanced Swift系列(一): Swift 简介/index.html","e729475526711f56f95663ac1bec9e91"],["/Advanced Swift系列(七): Strings/index.html","674ca1775c5267aac2ea030fe5821f04"],["/Advanced Swift系列(三):  Optionals/index.html","5604fb3ab4a16b0dc6996a6211a90245"],["/Advanced Swift系列(九): Protocols/index.html","028219859a009ab5efabcac8c1d5b68b"],["/Advanced Swift系列(二): Build-in Collections/index.html","be682a60c742a44e526be07b0041381d"],["/Advanced Swift系列(五): Structs and Classes/index.html","a943a622deb52c5ae10bba573f449100"],["/Advanced Swift系列(八): Generics/index.html","7939e08567dbe894d4be9a9781e7a6a6"],["/Advanced Swift系列(六):  Enums/index.html","8346220f36f552960fb7053fdf505afd"],["/Advanced Swift系列(十): Collection Protocols/index.html","074b7053344e47f69ccb512cee35d502"],["/Advanced Swift系列(十一): Error Handling/index.html","13c61e06229283c2b2730e45afcdcd8f"],["/Advanced Swift系列(十三): Interoperability/index.html","192d62f974a4d31740c52ae50cc00557"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fc2b66ae62e8211747dc3faa12824f73"],["/Advanced Swift系列(四):  Functions/index.html","811aa696f8f5c7be1a6575e48060a495"],["/App Architecture系列(一):  简介/index.html","8cbeaf8e28a5333060ee3b62c8f42828"],["/Functional Swift 初探/index.html","1075a78c7fadea7210bba609c4add472"],["/Git 使用小技巧/index.html","f7bd7e3f43a8fd774c9798a0aa2f182e"],["/Go mysql Tips/index.html","943305fb906850fcfcea1f213d6d2c1a"],["/Go 基本语法初探(一)/index.html","439c422a22cd9718651c26e61187ac18"],["/Linux VIM 命令及操作小结/index.html","3ab56298c43b64cbad81da32e86b448e"],["/MySQL 基本操作/index.html","83f84fca96bf7f94dccbdcba3671459a"],["/MySQL-列类型和数据完整性/index.html","086cb4d4a1df02099f2f7ce1ae7252c5"],["/MySQL-数据库设计和查询语句/index.html","0065a52fd78f642280424b204cbca2ba"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b0a19b94a0c5ae7b797cd5721946b2b2"],["/NSCODER和SWIFT初始化/index.html","7792ce08990641538f990d5f990b35ad"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","be98bc6648e714df5d915d1224c24662"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","52bd27927ba94bbf0c1d55d3818d16fe"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","2e431b6547666285b4bf4c59a3d3424a"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","2e0c39164c8d5d80d6c1d8aa1bb41688"],["/Sqlite 使用Tips/index.html","f020650b9972adb29eb5cd250f5c77c0"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","7fadd654cef9e8981e7270879eda4f8e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","20acac34997cc5ab3c769b2880453037"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","62da933b2143b59ed53cf4505a078a32"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","1f3f9773e92f4eb7936b03fbffd4848d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","ae11326b37d924e6220e5442034d1170"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","5da9f0b8507bed7bab709c50d116ffac"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b0d7debb67a6257621ef440baf3e7d23"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","39788e695ae13834a368cc56df2d23c9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8aabe831183ec3e085c805369533b2f0"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","96c0925cb74f329f075564260551cdda"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","03bbfc2c3f885088fce4809393d8daa0"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","61a4f22f646db6069d913bd7d0bf22a3"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b91277b1975e8b63c530f3e21246a99d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","28b3fb0b6993c86f0b577bb2a439d9ca"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","02cc7fb8c56927dc51833661da07817d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","429f957ee4352e05b86f97f07f2930dd"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c4bbf0019ccbb9c87cb741f054ec5573"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","d130f6288106477f516d57563253643d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","b6cabe49e6cb243eaa753bee8e94aca6"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","79b7be17d0ac236c7851d75c2bb3cbd1"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","cbf0f9268f9ff7292d98e0e22628a81e"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","8693d3248f96c80b2f2f71f05c4efb02"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c7d22c8c6d4222a53b9d7bf9cf95e705"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","63e67335dd09c6011c0f2e8d2e6cca44"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","569546411a15d40d62e9b1efa8ac4d8a"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ea3c3f8b8a162446d3545ed38b5a9cfd"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","9e839122912f63f1958c9dfd44f08657"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e1963454b525acd378067447556e3832"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2f745f5ce2f76edb211535b933fa6598"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","9d87c737a3cde05fec5ec06c56a71e49"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","15f52f39b08b6255734802a9e8edf234"],["/Swift CompactMap vs flatMap：差异说明/index.html","763d3f16812967804a04e2a8872b6580"],["/Swift Grand Central Dispatch 深入实践/index.html","ce3ae2b5d863a011a7b9fcd90af87942"],["/Swift Lazy属性初始化/index.html","c4cda5b5ae7e74332fef614c56d83c98"],["/Swift Promises 初体验/index.html","2aa4007ee0b61aacbb435cd5afbe58fc"],["/Swift Promises 探究/index.html","c1c1c23e03a2146f45985045e3333587"],["/Swift UICollectionView使用指南/index.html","4c48d161b67cfc512aad2bfa2f23905f"],["/Swift URLSession && Combine framework/index.html","d6f051143b3dff4aaec12a573e69410c"],["/Swift tips/index.html","3a24e7748ea29a586eb02e447823d80b"],["/Swift 三方库：GRDB 使用指北/index.html","f503909fef9c720506b8ed7aede1f988"],["/Swift 唯一识别的视图/index.html","a4a4919b981625ab3060e24f94654c04"],["/Swift 如何学习现代UIKit？/index.html","05b56ba81c4974555f0c4cda58a9eb17"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","7be972d0b9fb48ff3da05ecc48cdae26"],["/Swift 用 compactMap 替换 flatMap/index.html","e8b0c21efcc550b9a2b7db483db092ca"],["/Swift 选择和播放视频/index.html","474735dd69451d7053106819e4fc47eb"],["/SwiftUI 系列(一)：1、 简介/index.html","19eeff5c87c45ab802ccc5ce51e5493b"],["/Swift中UIColor最佳实践/index.html","a8a7c742370c00887541b48e796ac577"],["/Swift中快速简单的工厂设计模式/index.html","706433cba445572263598e45a6841908"],["/Swift中构造函数与静态工厂方法的比较/index.html","1c9016dc280e4813e614ca6cc480f29c"],["/Swift中的UITableView教程/index.html","bac4fef6291ea054425b957cc8264dd0"],["/Swift中的懒加载模式/index.html","94b8b548527dcee6e964bbeb6ecb074d"],["/Swift中的模块和挂钩/index.html","c369fdddf2ce10859d1e849355bf58a8"],["/Swift使用布局锚点添加约束/index.html","2c68a125d36cbf6f41260e08117adf56"],["/Swift依赖注入设计模式/index.html","d4e11c03da2800534761ab71d92e7b80"],["/Swift关于Dependency Injection (DI)/index.html","c91f0b005ec8c0ab9f768ead8abe3657"],["/Swift初始化模式/index.html","13a0d808cb9a8b844a7ed57e6cbf7f14"],["/Swift单例模式/index.html","a028cbbe61a0d5dad8b485446f4d36b7"],["/Swift原型设计模式/index.html","37a58cd9dbd307b2f3c0918cda450f47"],["/Swift命令设计模式/index.html","5f8df75c7a57bc2777a89b513a2e14ff"],["/Swift外观设计模式/index.html","d8ef961b9fe3474766a845b323e731bd"],["/Swift委托设计模式/index.html","f406cab94c26d04bc22b2699b222e288"],["/Swift对象池设计模式/index.html","6f32aba4cc2a0b3c9cc433cdce6e7f29"],["/Swift工厂方法设计模式/index.html","e664d1871330890b2a00eb0e25d1ca95"],["/Swift带闭包的懒惰初始化/index.html","79eb02cc34b797edce5a6277d62adfe4"],["/Swift抽象工厂设计模式/index.html","639cda319ebe684e23c6b0e28b5f3f4c"],["/Swift掌握iOS自动布局锚点/index.html","32fafa0148cc5bc34f99face7c779acd"],["/Swift支持旋转的自适应单元格/index.html","9e3774bb026dc9dc0077f2ab18f5472e"],["/Swift枚举值/index.html","721171bbd6adb9d0294457857634b782"],["/Swift生成器模式/index.html","c8b424352fabce4f5b14c6bffd32f41d"],["/Swift结合Xib文件自定义UIView/index.html","d886f17a1918266b7355f1e3d4cbde6a"],["/Swift编写的20个iOS库(一)/index.html","dba8ba65573731a7b174e684a2411e7a"],["/Swift迭代器设计模式/index.html","fe0b80207ad260abb7bbb602af9b720d"],["/Swift适配器设计模式/index.html","1d6c52b616a8ba562394a1ee451aeb16"],["/Swift静态工厂设计模式/index.html","f5b323077e56229f4eb69876c45f8177"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","959d0886ac543043d42a02315ef7d5d8"],["/UICollectionView data source and delegates/index.html","aaf1e7992a352770a5af85dbade716a6"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","58d9386ad397cc1e1e689fb14cc3e05f"],["/UIKit初始化模式/index.html","93be684d6e7662be8f7286fb9c889f1b"],["/Ubuntu18.04替换国内源/index.html","fa8531e88c462c18661f4c1c63ed79f1"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","dd0c3a0475294a6e3fbf73d41412dd68"],["/Vapor系列 (一) :  Vapor 初探/index.html","8a400e3a2894fc63c4e5f202b1be332e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","3eb3c73d6f8e71ffd0037f1ae2c550e7"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e2f5d0f80c64a6ade91c9f645ef477f3"],["/Vapor系列 (五) :  使用session进行authentication/index.html","040e0982915645a2d5fc2c997e19fb22"],["/Vapor系列 (四) :  创建博客数据库/index.html","fbee3a114698db5818d84a4392168d4a"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f0e6862a6ef355dd73ffc370fcedef57"],["/WKWebView与Native交互注意事项/index.html","a97fbb5b349320ca367e4c4d426529c0"],["/Xcode扩展/index.html","28bb1e4e5a59f223378f950ff1a57876"],["/about/index.html","b2f46b2abda8c94cfe4ea8a33e879182"],["/appleOS的Networking示例/index.html","17b636d274184a61a43b2ddc9f20c50a"],["/archives/2020/03/index.html","95464d9e8cc3672e664ebb9a0e63694e"],["/archives/2020/04/index.html","7a5e261437172733fa1638821108e41f"],["/archives/2020/04/page/2/index.html","66ec7cf62011222eccdb7f45a97e571b"],["/archives/2020/04/page/3/index.html","8b352ce75ee61cb08e373b97d74b5546"],["/archives/2020/04/page/4/index.html","b6744e5d4e1b5cc39b0c2a58370f1452"],["/archives/2020/04/page/5/index.html","f75f16aae1a035333665111406503d96"],["/archives/2020/04/page/6/index.html","ca4fbde4fe75d73f3eeb21023b943611"],["/archives/2020/04/page/7/index.html","311390764b308087c6c933ccd0d42fe9"],["/archives/2020/04/page/8/index.html","73b89fd6b28d54fb78eb363f067cf7a9"],["/archives/2020/05/index.html","dcd76f2ef33240b6b1726ad7734db29a"],["/archives/2020/05/page/2/index.html","495ede9cef151ff8c58f58feb06d09db"],["/archives/2020/05/page/3/index.html","aef71915b270e026c4858b2b0dc28f3f"],["/archives/2020/05/page/4/index.html","29c1f5525405d67d40932f881abff83e"],["/archives/2020/05/page/5/index.html","00e3c1128a9105e6533cd94daf53d61e"],["/archives/2020/06/index.html","b5abf6c481c7d689aace37b4ce8b3c67"],["/archives/2020/06/page/2/index.html","1c94434f5feb03034f22b7b5e42441ee"],["/archives/2020/08/index.html","ae8d403fd39cc837dce2aa50a339c262"],["/archives/2020/09/index.html","df4c6c992dede75b3705107fd00b5d79"],["/archives/2020/10/index.html","582f99249d31eacbf8697ab6fdf25529"],["/archives/2020/11/index.html","56322eeea1ab9a6e6474ff541d005151"],["/archives/2020/12/index.html","c65e0d7d961d2fa37f73ab0d5081b341"],["/archives/2020/index.html","e42c20eea147c188722428ce5373887f"],["/archives/2020/page/10/index.html","74464812ccad16a1ae8b17eeffd301ca"],["/archives/2020/page/11/index.html","4ce24c2d86a3500fc953d760fe774da5"],["/archives/2020/page/12/index.html","66f87d340f940e8d809170af962e7ebc"],["/archives/2020/page/13/index.html","439269cdf6ef112a9793fafc4c4b84e4"],["/archives/2020/page/14/index.html","3b09ca6e36450e2e4f403370137223a2"],["/archives/2020/page/15/index.html","d3dd0365df934e60e18c4e5dd39d4e16"],["/archives/2020/page/2/index.html","67438c402f29a152b07942994eb5363b"],["/archives/2020/page/3/index.html","dbbaf7d39374303f89e021e741ecf418"],["/archives/2020/page/4/index.html","de60997071cc576f8362651d6a7503d9"],["/archives/2020/page/5/index.html","bc023ac743b5021302782a62278be3e0"],["/archives/2020/page/6/index.html","4a4b028eadba8193dc7f7a2ce143a222"],["/archives/2020/page/7/index.html","fa0a5946934816346d31efd10bdc8af9"],["/archives/2020/page/8/index.html","be3df2b988ef119d951c3c313efef603"],["/archives/2020/page/9/index.html","394b20c3b5a2b8a3091bf6fa11b52601"],["/archives/2021/03/index.html","9a87595192e4507c3d1fba58685be150"],["/archives/2021/04/index.html","8218ca7c8fade2cb72209021df3a0e0e"],["/archives/2021/05/index.html","3643d2baede97750b50e52712c51167d"],["/archives/2021/06/index.html","16d5ca1e5350f750242195fb85ca3df4"],["/archives/2021/07/index.html","b2820edb193a02b6401e9fec977c5204"],["/archives/2021/08/index.html","4b2b7f3c6b985b760577ef3312ab6d9c"],["/archives/2021/index.html","65c72b81e7597191c6a61892aff091de"],["/archives/2021/page/2/index.html","8fcb886d3b1db6b17ccb36ff575170f3"],["/archives/index.html","b0bc26c1a043762ca3aaa14c8f3fe86a"],["/archives/page/10/index.html","b04ece80d1991f3842a3529590b1ab06"],["/archives/page/11/index.html","2388f38ebd43b7f3a8bff22991538130"],["/archives/page/12/index.html","5a6fa8497a6b263eaf161e26f3aff366"],["/archives/page/13/index.html","4cf5ed0f0a9bd8453e2795e3832e5793"],["/archives/page/14/index.html","f3cc25f1c406a3e09d7fe6e2d7b01ebf"],["/archives/page/15/index.html","babe7d217f606853b0107070454726dc"],["/archives/page/16/index.html","cabdcc3cef4628aa6cb287d2f493274e"],["/archives/page/17/index.html","f93ecde03ab296b5f065b935a1ffebfa"],["/archives/page/2/index.html","d5e2d564f7741dc71f79125ec80a9e31"],["/archives/page/3/index.html","ef5a2c7ce64aaf190ba120e57b5e2318"],["/archives/page/4/index.html","f02bf006bcfd074da9a4daabf00389c7"],["/archives/page/5/index.html","9399375566a90ebabc0200621daee6e9"],["/archives/page/6/index.html","f01c681bbbf9423ce90d77c99455caa9"],["/archives/page/7/index.html","f46899fea9b940cdf6c62faa87e17c29"],["/archives/page/8/index.html","f6db2910d142b5d7fd517be38a09e410"],["/archives/page/9/index.html","251b734c500d458ce1fa342a89badeaf"],["/bugly 上传dYSM文件小记/index.html","a74f7279f5c63263da14b04e9d3be3ee"],["/categories/Advanced-Swift/index.html","90588647c38627e5bd39afa43c960e49"],["/categories/Advanced-Swift/page/2/index.html","cb9b3b7a16214fb1f5df383ae2c73e4a"],["/categories/App-Architecture/index.html","3778fe05a5c945ee6426b19e308c67f9"],["/categories/Array/index.html","8d434edada1ebbd70a6696b3349c9deb"],["/categories/Codable-protocol/index.html","48eefe69d70e0bb63c703cb6de5ae8a9"],["/categories/Combine-framework/index.html","10d553bfc478930a7d73d3bcefb6a488"],["/categories/Combine/index.html","c6d1056d3d8b3411bb5f36eb4c5f5c64"],["/categories/GRDB/index.html","efa491b4a64d4cf8fc45e1ce260a6b42"],["/categories/Go/index.html","0f278bf87c492d689590036af11d5856"],["/categories/Grand-Central-Dispatch/index.html","7c7e18e8cb81dc1185b0a42849bf8ec3"],["/categories/Hexo/index.html","f9e4f0c2529488f8e264c04bffdc4171"],["/categories/Homebrew/index.html","1eb0efdfa022e9f998854f657c287179"],["/categories/Linux/index.html","b7af43073972459cd9a5bf5e913aaa13"],["/categories/MySQL/index.html","16668379577f10bcae1f01a7515df579"],["/categories/Promises/index.html","7799212e8a2b5ad57b8489c9cd3e8ba7"],["/categories/Result-Type/index.html","589d01ad39276bc4888c7d87ab7e9b39"],["/categories/RxSwift/index.html","a4b1ea22c0793c43db26bad829dc8215"],["/categories/Server/index.html","64831221242fa1c188c96d790c7e9676"],["/categories/Sqlite/index.html","4170774daff4681adc20ac8e2d826937"],["/categories/Swift-Apprentice/index.html","ce96866e430c336bcb3b54da3105ca6f"],["/categories/Swift-Apprentice/page/2/index.html","b3f78bc136610dd66cd97f06b128428c"],["/categories/Swift-Apprentice/page/3/index.html","8eec5fdabdf1cbd3c3956549ebfc58cd"],["/categories/Swift-源码阅读/index.html","87a791070e90ab49f71541a16bb1d694"],["/categories/Swift/index.html","89ac40edb5867eaf2c46b7ced0e02a09"],["/categories/Swift/page/10/index.html","12c77b8146c9c60fc42d77b2e4a65100"],["/categories/Swift/page/11/index.html","9402fc9cb8071f8f750112c240173921"],["/categories/Swift/page/12/index.html","fac397be15875562b9bd879019f915cb"],["/categories/Swift/page/13/index.html","1afe0146574877e35ab828d30271cba7"],["/categories/Swift/page/2/index.html","84c1d655218a53859dccb15be5d3cdd9"],["/categories/Swift/page/3/index.html","79757518a53590b26c03b81c16dacdcc"],["/categories/Swift/page/4/index.html","9023af592c132c56024b20e892f0f055"],["/categories/Swift/page/5/index.html","8020cdae5b0843fd697a169d0c863706"],["/categories/Swift/page/6/index.html","3ef68087f82f22a6f93169de9860985b"],["/categories/Swift/page/7/index.html","1cd045e6d6a1638bef96074628008de5"],["/categories/Swift/page/8/index.html","f62fe5bf6a6dd044bd48ea884ab303af"],["/categories/Swift/page/9/index.html","1a259ece9679b9aa30fc4e9d6ac2810c"],["/categories/Swift5-2/index.html","d3354303f92141749d63c43e9e91d77d"],["/categories/SwiftLint/index.html","947258d145be60c274befc9b30f9dac4"],["/categories/SwiftUI/index.html","1920f0eb62de394a8ad42d828440375d"],["/categories/UICollectionView/index.html","cf4dccfbf45c51c2a871046aeec9d465"],["/categories/UIImagePickerController/index.html","3deaf99ba10199234b317d3739a41f43"],["/categories/UIKit/index.html","2a0ccb2437d33bd5bb6f2b6d3bd7c86e"],["/categories/UIKit/page/2/index.html","d5123b45f011f6af6570524c871cc77b"],["/categories/UIKit/page/3/index.html","86c43770ff69d936260ea2447f3356f2"],["/categories/UIKit/page/4/index.html","e83153febc457cecc3c948097316a594"],["/categories/UIKit/page/5/index.html","2985be65475010ad1a87dac7bdd1afa2"],["/categories/UITableView/index.html","0bc123ec6ca24fd0ad52e49d500d5dad"],["/categories/Ubuntu18-04/index.html","e5ba5726e511b2bdf9ac907e7a79b7e3"],["/categories/Ubuntu软件源/index.html","69cd111b98027d2d6d77836d2432a4aa"],["/categories/Uniquely-identifying-views/index.html","e6d7c2e1c77bec22287f6852be0b9a82"],["/categories/VIPER/index.html","2c917b08cc494e9ac05cf07e8104e89e"],["/categories/Vapor-4-0/index.html","07fee24d6283de220d00fab5c4227fc1"],["/categories/Vapor4-0/index.html","dae01e7504f766682546036267315dba"],["/categories/Vim/index.html","3f08d95196d5ccf0a27328f2ac659e2c"],["/categories/WKWebView/index.html","5b4e97c6450294a3b118a6cd5a2f82d3"],["/categories/Xcode/index.html","9f60088c9efb9bec7b46c9649b8e4836"],["/categories/appleOS-Networking/index.html","fecc3eff541a4902669c5a1986dde776"],["/categories/bugly/index.html","42c6196679011fbe3123dd97737e75da"],["/categories/enum/index.html","a996b02680b3d1e2fe38e18119723ea4"],["/categories/git/index.html","dfcbd3068ff8a0f59a8e58b01ecbe54a"],["/categories/iCloud/index.html","37b3775797f88985a48591eed123480e"],["/categories/iOS/index.html","667847ddff11dcf469926af762c522d6"],["/categories/iOS/page/10/index.html","361008d6f9d70ffb48d9c6e90eaaed0b"],["/categories/iOS/page/11/index.html","c3ab561b1f14a681be3a154686671979"],["/categories/iOS/page/12/index.html","1f7e33e965edc245fcda09888709b1b1"],["/categories/iOS/page/13/index.html","07a7074c6fa0f2be5a97c3ded97bd23b"],["/categories/iOS/page/14/index.html","b7b208fe7febc2a5f339b0783a909513"],["/categories/iOS/page/2/index.html","15c655f3bb6a50ff0b5c3e35f9d485ec"],["/categories/iOS/page/3/index.html","fa6c0f750cf31a5df99d4cd5368f0882"],["/categories/iOS/page/4/index.html","271f79aaabb380ffe092ccd827efef9e"],["/categories/iOS/page/5/index.html","1574ae85b2115d461d65be4429f6311f"],["/categories/iOS/page/6/index.html","bfe1073c709f7cd82418290e639c316a"],["/categories/iOS/page/7/index.html","0d30b1e1237e3d4e2b2f8d3d6c38b647"],["/categories/iOS/page/8/index.html","3b4689aab4ce2eb1c471973a3cdfe93e"],["/categories/iOS/page/9/index.html","79f11efc6f63331cc322bd45cde13e52"],["/categories/iOS面试题/index.html","dccd0ea5eecf130906a3b732315b6f06"],["/categories/index.html","bc7af1e056c1aa6b66d34b6ed25370bf"],["/categories/random/index.html","b8b8e749124bfb176a31869a0e97c091"],["/categories/三方类库/index.html","a7850978c507db8c54e56a5d2b162f87"],["/categories/函数式编程/index.html","254a706f9528b89cc527c882a1d4bfef"],["/categories/子类化样式/index.html","c41a942c48de6b45747c32743ac1f74f"],["/categories/开发技巧/index.html","62bf04504a52869779e80bfac7210af9"],["/categories/开发记录/index.html","fd01c83e9f99a0306129a7fa9fd467e4"],["/categories/技术支持/index.html","6d0f9fa3ea2aff2ed4d6e3375efbf4c5"],["/categories/数据库/index.html","cc1b250450b1d5e7b5baa3baa25232ea"],["/categories/架构设计/index.html","e8af7ef082bd540f0bad50a965b0bb53"],["/categories/测试/index.html","9dc9c20cbef367d3367720a9144c6fa2"],["/categories/用户体验/index.html","2c39266d11627891d8f5009d5bb62b4a"],["/categories/用户协议与隐私政策/index.html","843925d71f47a1a90b99fb73fe10f827"],["/categories/设计模式/index.html","b19506531cc263a184daf0ddacec9aeb"],["/categories/设计模式/page/2/index.html","5afe97986c10ff64252ac4d86eba1065"],["/categories/设计模式/page/3/index.html","bc910db205cde6f3181d29c314369d54"],["/css/main.css","aee5ca238751ce41c4174e7fc248e1ef"],["/hello-world/index.html","3865a5813da0fc454da56d0d97295ae2"],["/hexo部署失败/index.html","2e0fca8d3ec490e2b5de3e1b1937dbc9"],["/iOS VIPER架构深入实践/index.html","80d1ceac1ba14f54a07e9aef5dee5549"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","a4b293099459d7a8d89d956d13dad7a5"],["/iOS 自定义视图，输入表单和错误提示/index.html","90d286f0735a6c996d7c224c6e2dad1e"],["/iOS如何使用iCloud文档？/index.html","32fdaac2e3ddd309829a5731338c13d6"],["/iOS子类化样式/index.html","312d0a9281839d1d268d4161a7531141"],["/iOS开发记录<一>/index.html","5729b15aad633cf1a20dc35a34ab42f9"],["/iOS自动化布局编程/index.html","bf0d4de80991d766eda94e7672c8da30"],["/iOS自定义转场(By Swift)/index.html","4821e9c8408fd840310236db3f194ee0"],["/iOS项目架构：使用VIPER/index.html","fb95b23d7dd436e6d8729f00c304ff4e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b06d6d22f178cfb0dc2f61ff360599f8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","535488454adf224460bee028ab59cf23"],["/page/10/index.html","707c3a5081dd0ec51d2f0084a3fc488d"],["/page/11/index.html","66b09d2df033e5e7ca9ad88aee789344"],["/page/12/index.html","9d1aceed3d1711176a123986f1dde051"],["/page/13/index.html","3f90cedbbd9a21d0e5eac7c49e9a7df3"],["/page/14/index.html","056e81b0a5998fbadff02c8effd7b0c0"],["/page/15/index.html","d83c7638b3bed1ecd17dd48503556944"],["/page/16/index.html","f04711036e8c0cdb9416c4afd513fe91"],["/page/17/index.html","336790436848a46db416eb29a8bd9030"],["/page/2/index.html","d051573377d3797eea08eb77ed99ec96"],["/page/3/index.html","c67e160b3631eed70a53b5fa0a5d476a"],["/page/4/index.html","c4a9689d392ada03cd354e2f11d35623"],["/page/5/index.html","0dee817f940a9b81397342a9ef27beee"],["/page/6/index.html","a8d6d2d33b2fce46a0518cf67f29257d"],["/page/7/index.html","b7b8068a9ef690722b4725955907ecef"],["/page/8/index.html","a39319d32c9891c8fb39b8b5ac83de01"],["/page/9/index.html","8b9353ec2d7b14d7e088e48c887f10ad"],["/schedule/index.html","db72669435e7dfb504d2d5eb5b8c82f7"],["/storyAppPrivacy/index.html","c1bff44d4982aa550bfb73febbe4b909"],["/sw-register.js","398d6b8d90fb8ace17c743378aaeafaf"],["/tags/Advanced-Classes/index.html","663ebe722f68942f840d181d3bdeb07a"],["/tags/Advanced-Swift/index.html","3152f8b3e195190a7f398fd13e009b03"],["/tags/Advanced-Swift/page/2/index.html","1ed3a5767addb8c9b5b0350853255eb3"],["/tags/App-Architecture/index.html","c2afe98cf5f151de4c5e85d7afe8ff5f"],["/tags/Array/index.html","8ad5ca2bff188066f3026a5069bdb8aa"],["/tags/Arrays-Dictionaries-Sets/index.html","996b6e445912f415c18dd01b7c63ad32"],["/tags/Authentication/index.html","189d046f9eb1790a3cb676feaa465407"],["/tags/Build-in-Collections/index.html","ea499acc3a83dc207f716cac3e50f3d3"],["/tags/Building-Your-Own-Types/index.html","c1e84caae18f9f5aeaa167f940ae6fab"],["/tags/CMS/index.html","8cc973c426b18f51c5feff9b203c148f"],["/tags/Classes/index.html","33b26c155b066ec13e1ec7eada772a8c"],["/tags/Codable-protocol/index.html","52172d3de2d5a9c88eb8830b9153f41b"],["/tags/Collection-Iteration-with-Closures/index.html","8d3c34f8e834ca617e9c1e377fb13f4c"],["/tags/Collection-Protocols/index.html","eb131d37356e53a9f0dc2e1a0a2ad1f9"],["/tags/Collection-Types/index.html","f976b4f9586eaaee4631b2dcfd2d6fca"],["/tags/Collection/index.html","273799546face13bdac7c06db00aa8b5"],["/tags/Collections/index.html","4ab2bf490e7bd9755cf03143ea4d3592"],["/tags/Combine-framework/index.html","5d6c66a185ac40604c4f0514844049ab"],["/tags/Combine/index.html","227b3f157f077a59c4600bb6639e4a0f"],["/tags/Dependency-Injection/index.html","6340a4f751a2655b57d51de0fe43b037"],["/tags/Encoding-Decoding-Types/index.html","cc80d798ecd028ed3d9f9a4bb9b11609"],["/tags/Encoding-and-Decoding/index.html","8d4c2176b2399bd3595e2db6f55730ea"],["/tags/Enumerations/index.html","0a44b4459ac5cc2ea6a6bcd6cace6899"],["/tags/Enums/index.html","ae95f7b04ec5a7d3c3aeda4b325f3b11"],["/tags/Error-Handling/index.html","720a260aff3716ec1bed4a3b629cf76c"],["/tags/Functions/index.html","ac00ac7be835dec92a1168e9c8e96a1e"],["/tags/GRDB/index.html","f0cc510c418a0042b0ba23d37d689797"],["/tags/Generics/index.html","c8aa34fa17ffec92e5a8fb3d4631e680"],["/tags/Go/index.html","b293f8ffbbcc4411df2a7c281e15e968"],["/tags/Grand-Central-Dispatch/index.html","92171aa41a90825cd11b43925c3266ac"],["/tags/Hello-Vapor/index.html","fd1d9adacad7705150a391693cd55956"],["/tags/Homebrew/index.html","94a796dc4d1b839586427e34bab91ae1"],["/tags/Interoperability/index.html","8db5192fbd26d8ce22f9204af9d8764f"],["/tags/Introduction/index.html","ccba9d76e6713e92330059ab50d7a3d3"],["/tags/Leaf/index.html","bb1e2cb75101ce744fb8f3e04951427c"],["/tags/Linux/index.html","c3b9bd9cd8a2ec99125303db56e39030"],["/tags/Methods/index.html","9deb4a85f621181c4f19f227b4de1644"],["/tags/Modules-And-Hooks/index.html","9cf3ff5a77f9f79238931199d62fe8ce"],["/tags/MySQL/index.html","1d5d5c48952ee6713b3d3634b7c7742f"],["/tags/Optionals/index.html","27446c6ecc14fe3727a2e3c0a00e6913"],["/tags/Promises/index.html","dcfa99ac7ee559bb3680c7e413ce39c3"],["/tags/Properties/index.html","e173f41ccca296aab660f5a0450b8569"],["/tags/Protocols/index.html","f3c34d0338c49156b3304740799501b3"],["/tags/Result-Type/index.html","72915370eba8674136f910f70686ba6d"],["/tags/RxSwift/index.html","de768a486ab9a86b00d867e4a12736e7"],["/tags/Server/index.html","c5153d11534bc41e64e342ae1742c31e"],["/tags/Session/index.html","9ceb6c41597d37fa666f8a1c0d56fcc9"],["/tags/Sqlite/index.html","89e02fd35970bf9caf851021a388ddf8"],["/tags/Strings/index.html","b88030b6554e0fd482d8a48194250bf3"],["/tags/Structs-and-Classes/index.html","e14ba0595a9b21209a21d3da82c0dad8"],["/tags/Structures/index.html","169ab37f9e55293d3c9d875bac10756b"],["/tags/Swift-5-0/index.html","41bd042fa493f11590651b4b4135755e"],["/tags/Swift-5-0/page/2/index.html","15e65b9ac564eef1a15f31fc78bdd98f"],["/tags/Swift-5-0/page/3/index.html","1f94d49ea9a5831683e43be167852b9c"],["/tags/Swift-5-0/page/4/index.html","bbb09998fbb554df8a79cf8cbb79c25f"],["/tags/Swift-5-0/page/5/index.html","54f45e9c466f501c21527c0af324ab98"],["/tags/Swift-Apprentice/index.html","cbce30d218c91df9c4fecc86b533b282"],["/tags/Swift-Apprentice/page/2/index.html","9f4ef3ddeff0eaba2b1eac4dd65ad5f6"],["/tags/Swift-Apprentice/page/3/index.html","0694d8f9218c80adc554ea9e41365a5a"],["/tags/Swift-Package-Manager/index.html","2829c4252b196164e0444cdc4dc9ab74"],["/tags/Swift-源码阅读/index.html","985c0f1fec605666b8d59a2e19a7d473"],["/tags/Swift/index.html","b616b913f3773ee04b669a9852fc67eb"],["/tags/Swift/page/10/index.html","cd9dabefee1441e850d532f913ef50b4"],["/tags/Swift/page/11/index.html","b6cd87687696247919db9384556c2265"],["/tags/Swift/page/12/index.html","bafa4f3f6e4157f50a8da5670be7d27c"],["/tags/Swift/page/13/index.html","e0c4bfe1cafb9b3008df2a34f5d9d9c0"],["/tags/Swift/page/14/index.html","e77b50130e30f8e4aa3b78812295b50a"],["/tags/Swift/page/2/index.html","848ae1d8e6a7a48603e5cc306cbc14ef"],["/tags/Swift/page/3/index.html","266116d47ce3a27bd0d7fc3b0706206a"],["/tags/Swift/page/4/index.html","6aa116f294b01da42d53f6e48d48f8e2"],["/tags/Swift/page/5/index.html","5fb9bf92ae369f21753bd1a8c2d5a831"],["/tags/Swift/page/6/index.html","9065bf95523514d079e9d004af6e6cb8"],["/tags/Swift/page/7/index.html","c3378cda45d8b47b1a2f62f528ad88d4"],["/tags/Swift/page/8/index.html","69bbafc2a838054d81ea45519dc5dfc0"],["/tags/Swift/page/9/index.html","47a5c21594c371a8af0f946e385a26b7"],["/tags/SwiftLint/index.html","a11b1312ce253b43d63dd1d477811ab4"],["/tags/SwiftUI/index.html","4f80b13c645e5058d12372235a4620bc"],["/tags/UICollectionView/index.html","3a53e092e99fb7ee8d16d3ee3a3017cc"],["/tags/UIColor/index.html","35a7a4b8c3ca975a1b731012ab17bbe8"],["/tags/UIImagePickerController/index.html","8eec3fa5ce3b337352991c6266c899c0"],["/tags/UIKit/index.html","61f64df50eaba85d6b76107663920bc1"],["/tags/UIKit/page/2/index.html","b353c672e8bf3374459cfd76f6840289"],["/tags/UIKit/page/3/index.html","a25d48432ef0dfe114ffb5e2764e23cb"],["/tags/UIKit/page/4/index.html","6d8b09594efdf27e97806fce16a35d4a"],["/tags/UIKit/page/5/index.html","f48067df80fa147d078b168eb11ac2cd"],["/tags/UITableView/index.html","7e4fc77f9c3616c21066373a46df0500"],["/tags/Ubuntu/index.html","e04cf7eb9b6c41cd2a5ccdc1c82b1eee"],["/tags/Uniquely-identifying-views/index.html","80f1b1a96f46fd1d3075315bdaa91bce"],["/tags/VIPER/index.html","5b19eccb2a4d2f9993175065049213b9"],["/tags/VMware/index.html","62796483ddfb8eb782535cf89e22fa98"],["/tags/Vapor-4-0/index.html","e7bac728bb07e984dad1fa5efae41047"],["/tags/Vapor-初探/index.html","e7c4e742f5db9cf584738ba50b584a77"],["/tags/Vim/index.html","8983902416e46ce93fc50a9d8540f05e"],["/tags/WKWebView/index.html","c05d057ce6b818f1cfe15b4995bec086"],["/tags/Xcode/index.html","9fadc6ce1f7428792c53576c37571f8e"],["/tags/appleOS-Networking/index.html","0589d2f4c13eac6820ee27097104e812"],["/tags/bugly/index.html","aaad3fd4a4e3a8ef14b3216ab76cf1c6"],["/tags/enum/index.html","0da958d7fbe146ea4e10655214468c56"],["/tags/git/index.html","644f93ccc781ee7c14ed72406955684b"],["/tags/hexo/index.html","01d91259b4520ff2c46e0b8e0f71c8aa"],["/tags/iCloud/index.html","d84f38deeacbbff024581ce49f0a76c5"],["/tags/iOS/index.html","6b28809572d75f1df67b24f3824268d2"],["/tags/iOS/page/10/index.html","27132e3260d46032ded08b4e9c61d9ad"],["/tags/iOS/page/11/index.html","7aaba9181bc60deac3be6e187a8f61e8"],["/tags/iOS/page/12/index.html","78f03ccb37368b6315dbcf5d55011b29"],["/tags/iOS/page/13/index.html","69b515a04754352cfb04f16bea1a74b1"],["/tags/iOS/page/14/index.html","a75e5535dc2ff9d8efabd8bb39e16bb7"],["/tags/iOS/page/2/index.html","cc2af6c001d0f5536ba79d0bd2d890b4"],["/tags/iOS/page/3/index.html","fc17b8112637e4fee9c9bf7457bba1fb"],["/tags/iOS/page/4/index.html","84e32df4472bac76c82761a000830611"],["/tags/iOS/page/5/index.html","ec4e328a5c805a1c6cf4c96d9fbe5ed5"],["/tags/iOS/page/6/index.html","e2238c6bf17118c2cc20c79826bdb772"],["/tags/iOS/page/7/index.html","809ca6e5dd49d7e048735a7dba39fcd2"],["/tags/iOS/page/8/index.html","4de43811649f55417e7249edca138ae9"],["/tags/iOS/page/9/index.html","53ff50473fe95e72c37f7d68d4d32382"],["/tags/iOS面试题/index.html","35da01da38fa0024e4718c399f8023ce"],["/tags/index.html","e37ea0040176f7da9e2be85e1b2a275f"],["/tags/non-optional/index.html","2d094b1b166a2623e31c4d9e4239bd49"],["/tags/random/index.html","a1f2b3d1ff59372c4b44585ad3092f75"],["/tags/transition/index.html","8898cf941b33b25969f95e2d4b6c540f"],["/tags/三方类库/index.html","2bd0f2e76a1bd1ab0da904b387c0baff"],["/tags/依赖注入设计模式/index.html","c7fae688ccd6b7a118e19ef783ba3ca0"],["/tags/值类型和值语义/index.html","3216cc70e126db958390dbdde705df7e"],["/tags/内存管理/index.html","69c6b74175f72db6b099e9f3093abcbb"],["/tags/冒烟测试与回归测试/index.html","713024657e0af49572315dbcf2bd772f"],["/tags/函数式编程/index.html","b9fed23d83eb280459b5a2dd5b4749df"],["/tags/创建博客数据库/index.html","587e15bc19ba49d7338fb7c29ff624dd"],["/tags/初始化模式/index.html","60ad2d19c38b1bf0f4dae5359acc153d"],["/tags/单例模式/index.html","d707c772d85cf266217d71e46308af0c"],["/tags/原型设计模式/index.html","333f3582fe985b76a2c94bb2b343f4e1"],["/tags/命令设计模式/index.html","cc9cedf9a25561a382a2307379b64638"],["/tags/基本控制流/index.html","b4043d322283b2bfb7cd032a681106f4"],["/tags/外观设计模式/index.html","0d59fc97a57ab760f82f8bf0b313b228"],["/tags/委托设计模式/index.html","b56d98708ab4816a5bf40f3f1d460cff"],["/tags/子类化样式/index.html","34414b9c0d49647da1855b53cd458adc"],["/tags/对象池设计模式/index.html","ff845e9e1c36284df8fd9793e2ab8824"],["/tags/工厂方法设计模式/index.html","e60c5244d831ff7da8807aa45a60aee5"],["/tags/工厂模式/index.html","9e5126558ac1bc3d696143e443c87c58"],["/tags/工厂设计模式/index.html","5e7ef7ef4c941c4a2b0de61b1b7b73d2"],["/tags/开发技巧/index.html","03433273c1c1232c08051553c8f59d53"],["/tags/开发记录/index.html","b83855f3e4b417a7ef3c21c6e1b89596"],["/tags/懒加载模式/index.html","a87df4b81d241eb53e08649ec4d48096"],["/tags/技术支持/index.html","17f667ed1cb309ab81ea85e41bfead54"],["/tags/抽象工厂设计模式/index.html","c72e9f3aad32a661f2be3f674109b4be"],["/tags/数据库/index.html","fbf9110d8736a7b832ace057d18c68f1"],["/tags/构造函数/index.html","20f1ef3dba8b198a25783c1cbf4b69a3"],["/tags/架构设计/index.html","fc86739a98fb55a7948b9f5cc9489bb7"],["/tags/模式匹配/index.html","60d2eb179b3feeb3b8781dc6b9bdf243"],["/tags/生成器模式/index.html","c53ed78f55474c6ff199cb559b975688"],["/tags/用户体验/index.html","70a6bae7effebf5e6f32a1edd96e5aa1"],["/tags/用户协议与隐私政策/index.html","b469b69ae46119de699a89c5b84738b0"],["/tags/类型与操作/index.html","ef0d13fdc52837f7480b3d62abbf0606"],["/tags/自动化布局/index.html","fc0a6f096033b26563a29ca2b63b2922"],["/tags/自定义UIView/index.html","0dc4c950e9ae71d883b50fb08910eb30"],["/tags/自定义转场/index.html","4ca041b9a5732981700403354e2a7247"],["/tags/自适应布局/index.html","625ebb61163b86c4078635658698f2e4"],["/tags/表达式、变量和常量/index.html","525f5e40bba8184687d9f154303576f2"],["/tags/设计模式/index.html","4d59a123f4ead5528f339a14cdb2f09b"],["/tags/设计模式/page/2/index.html","7d645ff70cf0a3dfd328ba5834e00422"],["/tags/设计模式/page/3/index.html","0b81d258d469560e7e342012eeefc11a"],["/tags/访问控制和代码组织/index.html","e6801021813d23d149661e0afd8cf18a"],["/tags/运算符，下标和键路径/index.html","6cc1d04ea6e59bb78c36ec2912562b3e"],["/tags/迭代器设计模式/index.html","2ea51d0dfe9e60d5bbf387ce2a0b89ad"],["/tags/适配器设计模式/index.html","d71dd7428629d12c18cd7a68868de45d"],["/tags/错误处理/index.html","6088ebe3464f623eb3462c4a92a298b8"],["/tags/静态工厂方法/index.html","46ad433c32e2b47dcf9692bb7fee841c"],["/tags/面向协议编程-OOP/index.html","eb748061abaea0960015059c7ecb49e0"],["/tags/高级主题/index.html","63ba0d8ee4717f0be6140762950833e2"],["/tags/高级协议和泛型/index.html","5db9a1e6ca3a81612be4c68e6272477c"],["/tags/高级控制流/index.html","3c1bf82d46a323fb909299866f4c623e"],["/xcode 常用的快捷键/index.html","b9b081e235f8e2ab4678f2e578ab8347"],["/为iOS应用构建输入表单/index.html","0088a0a159efc3388a39bd3f6d6520e1"],["/产品开发的幕后花絮/index.html","f6a11963bd48211b8b3654ec2f36c3a2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","64025fb259aea025db726574a2b0f1b9"],["/冒烟测试与回归测试/index.html","49ba700c4035573126a3fcfc39367893"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9090cca552284e3ef9129a7bcd1784ec"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d17d2ce22a79b5482c587948cb42529e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","030ffa13e1b2d09f63397a097b5f9093"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","49a2480f9281611945d2cc7e84ab42fe"],["/在Swift中创建自定义集合/index.html","57beffa49059eb8121ad982d75dd8cde"],["/在Swift中处理非可选选项/index.html","79348a9755d219132b1768311b09d8d0"],["/在Swift中生成随机数/index.html","b955823233ff4f9f2066ae14a653aee6"],["/在Swift中重构单例模式用法/index.html","2a43c78da56751110c885dc931346b21"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","3de7efef32da5b8abab2329d42afa7b0"],["/如何为VIPER编写服务？/index.html","5cc7b1ebac3c1b66927bbf6b80c34612"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","795d6daf227f65c4ed211f2dbb5ec43f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","6d633125f8e8fe064f26863ad3cab73e"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","453b26407ac5c015eddf7e96dc6eab36"],["/如何使用VIPER构建SwiftUI Apps？/index.html","52ec655e57f4223716e7473424102e25"],["/掌握VIPER架构/index.html","e3e5d9afbfedfc8a3e87b8dc445d61dd"],["/揭秘 WordPress Hook 系统/index.html","c546e1bb4bedd5114d354a49359c4340"],["/比较工厂设计模式/index.html","e6e3092b8962d2b07b04c9ac616ebddd"],["/深入了解Swift中的Grand Central Dispatch/index.html","abb20c4becb0d87185d3ea745e708787"],["/深入研究Swift框架/index.html","61f526fd201797bc395a577034aacfab"],["/美豫直聘技术支持/index.html","51c7fbfe44cb0b92f6d74c10e3d8d88f"],["/美豫直聘用户协议与隐私政策/index.html","6fca828d20fe9f2a1f2102734fa9572f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b0ddc945d3ee8ebf2ae97a3e235e7041"],["/选择Swift而不是Objective-C的5个理由/index.html","36950789731892f55bb356c16c295b4f"]];
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
