/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","026821ac8ce9031ffe62d5ad81695241"],["/2020年iOS面试题总结(三)/index.html","f0587c165d07875a9c1ab8e09edfb939"],["/2020年iOS面试题总结(二)/index.html","b00bb71b1348082f636421c3d3515153"],["/Advanced Swift系列(一): Swift 简介/index.html","19d27f9f834e9bad47c8e68f29dcd221"],["/Advanced Swift系列(七): Strings/index.html","ebfe3ac99b1702b6bcb11b7640f63581"],["/Advanced Swift系列(三):  Optionals/index.html","6fb2569f66cda58da10922943f188588"],["/Advanced Swift系列(九): Protocols/index.html","0b8846eb83b6e346a01269b958a16c88"],["/Advanced Swift系列(二): Build-in Collections/index.html","c57a2b0ee3e2c5e43d3a9a19e0aeb39b"],["/Advanced Swift系列(五): Structs and Classes/index.html","eb91906d29f303f3c62f4e16243b4664"],["/Advanced Swift系列(八): Generics/index.html","4af3ddcebc24848f8819170a7a6277d7"],["/Advanced Swift系列(六):  Enums/index.html","6d8da01bbb78718fa644241ee3b71f84"],["/Advanced Swift系列(十): Collection Protocols/index.html","51f923a786bc8d6918bc250bc5d14896"],["/Advanced Swift系列(十一): Error Handling/index.html","ecb2e37978373af67f432722b0a45289"],["/Advanced Swift系列(十三): Interoperability/index.html","224a210ff16317ca6658d016fde19e82"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","79229d995eb23c76372ea0e0170be284"],["/Advanced Swift系列(四):  Functions/index.html","f8f750390848dabbe4e5757c47699ac4"],["/App Architecture系列(一):  简介/index.html","8346709da5e292a105efce42b945d388"],["/CocoaPods 设定版本说明/index.html","767127eb513ef693e60e31b83b130c61"],["/Functional Swift 初探/index.html","7d975b0e8db5e24733d689b39912d13f"],["/Git 使用小技巧/index.html","26a957734774b45e1a76003ab7c9ba1d"],["/Go Protobuf 初探/index.html","e3081957e8da96e339d33b67dbd718fd"],["/Go mysql Tips/index.html","ed69ba7e8061779026890ac1dd7dc810"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","1a71df27e8bf64d752e1b361a578aa9d"],["/Go 入门篇：2、Go 实效编程/index.html","973cfb942e306daf61ec017b5de3ff44"],["/Go 入门篇：3、Go 重要概念/index.html","c6a9248c1c779d05957a7b4cf75862c6"],["/Go 基本语法初探(一)/index.html","8e8c7af8f4fd656cc41bc9df23cb9a69"],["/Linux VIM 命令及操作小结/index.html","4ae893fc0cd7ce6e2d1a1d41692025dd"],["/MySQL 基本操作/index.html","434e029c221f2d17dee3c699b78b7bb3"],["/MySQL-列类型和数据完整性/index.html","a0c3ec12bc9d61963158ee090eccdd1a"],["/MySQL-数据库设计和查询语句/index.html","fe63d7bb9f836283a85799b9ace87814"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","bf6d550119c1048d1eb2ef74bf21b8d2"],["/NSCODER和SWIFT初始化/index.html","c34880b808aa07079e8f6d799e0e4408"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","41eaad2eed2bb0794b4f90566adb5984"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","6824ba5e058199bd6971304df5bc4675"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","50f664f48318a68ca54bf7556e6adfaa"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","6f96ece5158a5dc37340f6afa5f9f63d"],["/Sqlite 使用Tips/index.html","e4c1178cbfa5466e2094570c0960cad7"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","2db43ef28c88d1a65b5e5d3aa595cdc0"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d2fc9ac6a9a5ce02b0aeaf983bd02a3c"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","e9b3744503d58c7e459626dcffeeffd9"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a161879b098edec83bbd905e9605decc"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","b66c23e45122861935d39e9a8af533b7"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c8b5f1cf33efdc65d2c7ce541fa8fa18"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","582e7f11d773e320416fd472434eb89b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","abaa7924e23fd4f5554402193bb82528"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8eef5e3ef4ddee292704718e545e5357"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6c7fa8b36532527a165366415f55dd34"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","9b2c568d08399f67f2b8ed9bc11c5aa5"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","595d0c267986ee8c5c060c4d0553ca1c"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8f252e5f6e73e01fa9e065922361c950"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","8b99bb81dfcb2172e1d899911a6c1711"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","b261098175955584d20db1836812bd87"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","43631e0db96a81c042c7b8cc57258c32"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4dc57f979f9dd79bd86f5021540f7be2"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","506b9918e42d4daaa92fad444836e587"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","5991b2cabad4b186d30f1095aa83da12"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","1eeeee2497a6e426791be0b02f58918c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","dc63107de4d260907f8f87df85dc950a"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","f34ab974775e1a01942f31dc3e9f8c8a"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","eaba1ba287b624d5d51223c31d9b09f6"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","38d55b45958118d429ea47fc94bbef5c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9034b7aafbc4a3cd6a1c007bce64e19f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","16f58c51cee4ded74bc2105e1e02aa0d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","99d26649a6ee17ac945b88df74b7f465"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","950c384450cd795c855753c2d7be7be3"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0ca534ab7236ee511a79378285540ef4"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","bc3efa9d0bf04040ce9bf0822f486982"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","83078a150b6fbe54f4db60d2b7642618"],["/Swift CompactMap vs flatMap：差异说明/index.html","ad7bb867900087317957bb5a8e14219a"],["/Swift Grand Central Dispatch 深入实践/index.html","f810336b5512759a1f8c80944e6377e7"],["/Swift Lazy属性初始化/index.html","7f1ac510a4a96efc39b4f412ece803c8"],["/Swift Promises 初体验/index.html","a1836bea2e75ec451f0b9dc25a826e08"],["/Swift Promises 探究/index.html","20ca4e26cdbebc80750112455ddf2b20"],["/Swift UICollectionView使用指南/index.html","249a0ec8270829e3570a7ae2e9f35c28"],["/Swift URLSession && Combine framework/index.html","e7593faea510bb95fd1e224e0ee679aa"],["/Swift tips/index.html","4765c2929ff53d8e198f6fdb1c7d4e2e"],["/Swift 三方库：GRDB 使用指北/index.html","66665d012cef63a0e32804bd16beee03"],["/Swift 唯一识别的视图/index.html","9c9cd9d5aef52d61e7dba5bcc7e69b49"],["/Swift 如何学习现代UIKit？/index.html","e561990e4562512e4eb137ea2a2f8e57"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","3738db9b78c4f964c1632bd20313a4c8"],["/Swift 用 compactMap 替换 flatMap/index.html","80947239637d2dd1e6aecde478441d85"],["/Swift 选择和播放视频/index.html","7d93889281696bcd792a2bca9ef32dc2"],["/SwiftUI 系列(一)：1、 简介/index.html","575937fcde5ad530bc97be4ca49f26e1"],["/Swift中UIColor最佳实践/index.html","06c81f591ca154bda3486c3d6f33f8ba"],["/Swift中快速简单的工厂设计模式/index.html","d56091d0d03ecf5c6874b20d6eda51ed"],["/Swift中构造函数与静态工厂方法的比较/index.html","7dd1e1da478ffeae79fc08f5be778adb"],["/Swift中的UITableView教程/index.html","a97b3772612f1ae07c2811cb293c203e"],["/Swift中的懒加载模式/index.html","b80b3f60bf1a80a9a593490adf1d0eb8"],["/Swift中的模块和挂钩/index.html","6ac2ef5901fde0b270b13eff8c6fc165"],["/Swift使用布局锚点添加约束/index.html","d64b2ed9894b808a4e5697e2e4e2f8be"],["/Swift依赖注入设计模式/index.html","91fdeda3b2b63f4df9145c56fcd75cb9"],["/Swift关于Dependency Injection (DI)/index.html","bf371cb47fb227fc8a28c5eaaf8d1435"],["/Swift初始化模式/index.html","411588d8b9b39989af52f142db9e92ac"],["/Swift单例模式/index.html","90d1e7d5f315bc648ace829872538844"],["/Swift原型设计模式/index.html","f02e4ef2a58ddeb0763769b0f8c92a44"],["/Swift命令设计模式/index.html","a3f04e8b1baa2b53657e6865bdca8aa8"],["/Swift外观设计模式/index.html","c180b8ccb386f78bfc29b760b2ae2ca8"],["/Swift委托设计模式/index.html","41c39d33d0ae194bc452d32167ab57d5"],["/Swift对象池设计模式/index.html","68a4917b8f4d137d53a3bd1b1ccff9c6"],["/Swift工厂方法设计模式/index.html","20371551fc7df0201b5e2f2ac0def43c"],["/Swift带闭包的懒惰初始化/index.html","9c513c58a2a8c643576d65cc4c1052dc"],["/Swift抽象工厂设计模式/index.html","584e1e8a2a295c4f7a9a1971d2048422"],["/Swift掌握iOS自动布局锚点/index.html","b68a8e12d8e7aa86998eadc063fe9046"],["/Swift支持旋转的自适应单元格/index.html","3ce9b65955e284162c8090718ac09417"],["/Swift枚举值/index.html","57fa923e2439fccd4bb13229a4575488"],["/Swift生成器模式/index.html","e8075fd4f2f6314b722a1cd28f1b4cfc"],["/Swift结合Xib文件自定义UIView/index.html","c75f4122e69842c39882bdaece3ee980"],["/Swift编写的20个iOS库(一)/index.html","cc7a30053884d22bed77944614866f9b"],["/Swift迭代器设计模式/index.html","581b21db7c3e8a3e9cc50cb66ae76a92"],["/Swift适配器设计模式/index.html","300c6955618aa388c9d3da7206ae8375"],["/Swift静态工厂设计模式/index.html","4447a986a0628312b6db9e5eb615cfbd"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c7982d410569803b8f8ae29076439f0b"],["/UICollectionView data source and delegates/index.html","5cdbcaba621cad4e143b41047adc8b4d"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","606761c2ad64b0394def4a0cdec14e9e"],["/UIKit初始化模式/index.html","e2b1bbbd15e15f48a4e0a2567b5493d7"],["/Ubuntu18.04替换国内源/index.html","baa37496f617a441351664c934a6140e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","51d2bd81f007eb3cab8c294782a62781"],["/Vapor系列 (一) :  Vapor 初探/index.html","57a27e6d7ada0a552a426ce039e6cc89"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","21a4c699dabdadf082bfcb2667142a88"],["/Vapor系列 (二) :  Hello Vapor！/index.html","c35aa1aefc826b22b7d94933c72839dc"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a2a3f8ee66959e5e6a8edc702979248d"],["/Vapor系列 (四) :  创建博客数据库/index.html","ae1ccc9b09ee5e4bd2d557542120b575"],["/Vapor系列(六): 徒手撸一个CMS/index.html","10e7eee394f019bbfdef5f0318c785dc"],["/WKWebView与Native交互注意事项/index.html","d384af369afa748bd1c11d248b35e582"],["/Xcode扩展/index.html","9927f01f9d2e6c2cb5d0db97ec2ba02e"],["/about/index.html","77c3d07d6e9cca0d4191b8e1a826fd8c"],["/appleOS的Networking示例/index.html","870bb89292ae2004e311598b02b2dc1f"],["/archives/2020/03/index.html","75ad5fa5580ae452ee5a907cf796b233"],["/archives/2020/04/index.html","45125e48945dd023ba262796caeb9e9c"],["/archives/2020/04/page/2/index.html","c79e44eba9be299f1925a5cd2aa1414b"],["/archives/2020/04/page/3/index.html","93ec1f606a003f7028b0e58b35c6ded2"],["/archives/2020/04/page/4/index.html","39ce7f31e2eeb41b01c108f7b5765669"],["/archives/2020/04/page/5/index.html","1f375678cc6178b03085c1ffa34a8f67"],["/archives/2020/04/page/6/index.html","20891fd110e56eed555cdbd2342edf13"],["/archives/2020/04/page/7/index.html","d4cc747a76d69c6cf7e58722477040e8"],["/archives/2020/04/page/8/index.html","2d4c96eae5b5b8bc454a7ea45b5cfc22"],["/archives/2020/05/index.html","23585c6e942f0b174828536dfb82616f"],["/archives/2020/05/page/2/index.html","7b4d92a90b4f85e1587c5b0bdd7214c7"],["/archives/2020/05/page/3/index.html","df78949e373f264eb2fc1a8bf7b6e25b"],["/archives/2020/05/page/4/index.html","63c88c8fc81403720686fecf947ccf23"],["/archives/2020/05/page/5/index.html","2e07be0c9e14c403e5399b16b3cc4ed0"],["/archives/2020/06/index.html","358fc07cab026968b7bb7ab6e3e7e8f9"],["/archives/2020/06/page/2/index.html","d543f5693434ac1a733d46316b8403d4"],["/archives/2020/08/index.html","4f636debf9267775b36d2504cc506bf9"],["/archives/2020/09/index.html","7e350b15a0f1d8fbf86c36750274c753"],["/archives/2020/10/index.html","a7d256104679210e39322c4382bef5cd"],["/archives/2020/11/index.html","289a2b038d4e8e2df658968a377ef854"],["/archives/2020/12/index.html","70f98935e0b345fcce2fb0342d26fce0"],["/archives/2020/index.html","5b743924c754830ddb5da635263e4b53"],["/archives/2020/page/10/index.html","0977533f818d50c11bd0e0805f34f29c"],["/archives/2020/page/11/index.html","c6c4ee7c33280c58d40c3d2dc2d2d994"],["/archives/2020/page/12/index.html","2cde759cc4292e3833d860ff6d540c98"],["/archives/2020/page/13/index.html","96e58276befe9351556b89058ae14cdf"],["/archives/2020/page/14/index.html","71e23f3f7c71ac01f33641254c1b5359"],["/archives/2020/page/15/index.html","b9660be357eeb9f5485bdd5fdc030888"],["/archives/2020/page/2/index.html","28e6c33d95f706a340f5febacb414bda"],["/archives/2020/page/3/index.html","ea5eb230545e6bc02f7fb5ece853f793"],["/archives/2020/page/4/index.html","fc6c7b96497f0fb82a41bdad284800cc"],["/archives/2020/page/5/index.html","342522008185609b991c100f10ced773"],["/archives/2020/page/6/index.html","a88d0229808b1a54edd733e993f8951f"],["/archives/2020/page/7/index.html","cb755c68542167dc727551e227d1c326"],["/archives/2020/page/8/index.html","acb29c69f50ca53e5c0fbd87d6120f66"],["/archives/2020/page/9/index.html","67d364c180f2527557b1c7b9d6dba566"],["/archives/2021/03/index.html","8c4eac415b0d92d85ffd7ae5b6add675"],["/archives/2021/04/index.html","1ab0fe2a1621894696dc28abda29c61c"],["/archives/2021/05/index.html","900204fed8bb6ea829b81d3f833fe5fa"],["/archives/2021/06/index.html","2a6aad0ff5dafac28d12fef68aab6895"],["/archives/2021/07/index.html","6c26984fdfde315b3e5d2ea30c342733"],["/archives/2021/08/index.html","14c3147a8ed7c0145053d66a50a69d9a"],["/archives/2021/09/index.html","6350beaa3d54a51242d3e146872c751a"],["/archives/2021/11/index.html","d224ef4966198b456bea2114cfc2d6ee"],["/archives/2021/12/index.html","ab98a3f81b724fc977f30b18b8ef80b1"],["/archives/2021/index.html","f876c4b3d75446fb89b53f286eec81ed"],["/archives/2021/page/2/index.html","939e2e8bc47c5fb17b6eb3e6ce99d15f"],["/archives/2021/page/3/index.html","51696e9789b9495474451af549c0cb23"],["/archives/2022/03/index.html","4705b211c71002b4adb2a2cb2e694a13"],["/archives/2022/04/index.html","d4db27cb822b125c970b1c9ff300b7c8"],["/archives/2022/05/index.html","af1b8af6be0c7d69fcd9a1531a1795ee"],["/archives/2022/index.html","d5ddee3a536ba57b43d29aa95c7b6e4d"],["/archives/index.html","7d52175a1c8e7ff374e2cfb2ba33243b"],["/archives/page/10/index.html","cdf9c0122bf94430d6445d5c428a9a2b"],["/archives/page/11/index.html","9451412a612c807f85c7ae8407e48c22"],["/archives/page/12/index.html","b370a39803bddf535baf4281740bc390"],["/archives/page/13/index.html","f93e155eb3db935e9fd524aa9e321f81"],["/archives/page/14/index.html","c0e0f0901baca32bcf1e9ed33de67b13"],["/archives/page/15/index.html","5c231f0f6b646dcf45e3c4f19c21d6f0"],["/archives/page/16/index.html","6af3ba1f654f1d1b8b6056eaa6319a72"],["/archives/page/17/index.html","2c25dec93c610514313db18a60d51851"],["/archives/page/18/index.html","617928a29730b933f71e5576bf4c3b93"],["/archives/page/2/index.html","5e31bbbefad5ee8ace81310fb5d61fab"],["/archives/page/3/index.html","606dd99a6160e57bfc4607e3f066e790"],["/archives/page/4/index.html","7ddc27d99ac332b7895e36529cd00055"],["/archives/page/5/index.html","9eb27143f9efa7959be93e6c99a0cf9d"],["/archives/page/6/index.html","a6525c99ca5918c796ce20be0c81fb6f"],["/archives/page/7/index.html","afa898721f6b36c01003a0eff8025545"],["/archives/page/8/index.html","97e138ae7d6c99070f426c71c8d82187"],["/archives/page/9/index.html","eb6a747c280a954d3f562faefc9bc555"],["/bugly 上传dYSM文件小记/index.html","b500e46986a3eb342992847eb8837bc2"],["/categories/Advanced-Swift/index.html","43ef3dcc4dd4a5206f22146bd516fa20"],["/categories/Advanced-Swift/page/2/index.html","e4b92f658235d69ec8b8c1f618d1ce83"],["/categories/App-Architecture/index.html","0bb4d29d73b29efff58817bdcbe0cfff"],["/categories/Array/index.html","08da5d545411dc84d04d9bc701e69097"],["/categories/CocoaPods/index.html","61847be95681d1b9248ad1761f9e1585"],["/categories/Codable-protocol/index.html","8fd7c915759133368c483ef276f68fa5"],["/categories/Combine-framework/index.html","9c8b176c742e94c3f41117a6184db9cc"],["/categories/Combine/index.html","578f69ab0c3a11eabf77b7426b112df1"],["/categories/GRDB/index.html","6686334f0eabfa099d1e6088022ae8f9"],["/categories/Go-入门篇/index.html","4b04cfdd4d5c446304f2f3b75b298746"],["/categories/Grand-Central-Dispatch/index.html","75b908f6313c8db138198da34ab8447a"],["/categories/Homebrew/index.html","d1c4ec1b6def93aa6fff8882e37b3841"],["/categories/Linux/index.html","bc3351e62708c365f276541cf71c2dd0"],["/categories/MySQL/index.html","da937c659ec64f9cca13e166b7d99067"],["/categories/Promises/index.html","aea4ce6229d6430ce8dda7095a192c3a"],["/categories/Protobuf/index.html","9581dc9c3034a08bcd3a0563a6fcfef3"],["/categories/Result-Type/index.html","087b23d79adde5de5d719a15bc19d705"],["/categories/RxSwift/index.html","79daf5db961652770efdcc7eb3ae6cc4"],["/categories/Server/index.html","1103914f47d9066acc00df9ff1dd909f"],["/categories/Sqlite/index.html","1ed1ec00c1903676c2535467466254cd"],["/categories/Swift-Apprentice/index.html","e87085542fde810d1c757bed96e8e58e"],["/categories/Swift-Apprentice/page/2/index.html","275e933f508bc95d62f34433833560a7"],["/categories/Swift-Apprentice/page/3/index.html","20b66242368ddd1baedd14859c0144ab"],["/categories/Swift-源码阅读/index.html","565ba93dfac0cb74859cb9e9a001e7d4"],["/categories/Swift/index.html","ee13c29a49fdf8c92aba19dfdf494f62"],["/categories/Swift/page/10/index.html","01f5165a2206a1a5a5e8ee9b7d218b09"],["/categories/Swift/page/11/index.html","49e1e61d69a04b6eb3231393f3c05f72"],["/categories/Swift/page/12/index.html","4b562a2fafa608f83b48af69768689a7"],["/categories/Swift/page/13/index.html","63e126dee4429de677d6484c226c838b"],["/categories/Swift/page/14/index.html","ff58af5514315b287a814c3c918d451d"],["/categories/Swift/page/2/index.html","d3068b89da4274cf4489d1f92e3b5d73"],["/categories/Swift/page/3/index.html","8fb1c97c8ab9f86fc60ba47e0543991e"],["/categories/Swift/page/4/index.html","18fa26a459e9f2b986b53a1fd714d804"],["/categories/Swift/page/5/index.html","50ff6ef45adfe38266ff6f3a749fbd7d"],["/categories/Swift/page/6/index.html","ab0428ac90671ee01d1230135ef124b9"],["/categories/Swift/page/7/index.html","86de22ae6b0247326ed25c7431a1e1dd"],["/categories/Swift/page/8/index.html","a91b7b39aab34b43095cdc2791694301"],["/categories/Swift/page/9/index.html","9dc695d030190338709264641451ec31"],["/categories/Swift5-2/index.html","f43d7a7f82a839d0bf1664cff25316d3"],["/categories/SwiftLint/index.html","ded76d44b13ce8804d3addbe2e00194e"],["/categories/SwiftUI/index.html","d3e2a7861e3937a533d3c95c57025e9d"],["/categories/UICollectionView/index.html","c3b294eaaeafcb354ec3471552447a13"],["/categories/UIImagePickerController/index.html","45a26ab8bec3395e2ca2bd86e1ce4e2a"],["/categories/UIKit/index.html","48250efd2bd3bbb13955884ca8d277f3"],["/categories/UIKit/page/2/index.html","2ae61b6a732d646a9bc374b26d91fdab"],["/categories/UIKit/page/3/index.html","6e89592ec5cad06fb1cb83716ff42b77"],["/categories/UIKit/page/4/index.html","02efb48c358f9ca73d83bc5197ac7d53"],["/categories/UIKit/page/5/index.html","83e9d816889018f94e07878245d7454a"],["/categories/UITableView/index.html","38ddf70ee21b3f415ef50018fd7794ce"],["/categories/Ubuntu18-04/index.html","98ed8a0aed270387c5cdc67a3b2d8ac5"],["/categories/Ubuntu软件源/index.html","c3dde09e57de9eca1bec575a08502074"],["/categories/Uniquely-identifying-views/index.html","9d955c83d79173f0cd22f7c7e4896719"],["/categories/VIPER/index.html","b4d25138f9bad6893613fbaaa34bb482"],["/categories/Vapor-4-0/index.html","5eada3d82ebb34852aad7ecc9aa3a81b"],["/categories/Vapor4-0/index.html","fb6868c568a240cd652975d20ac9b2e1"],["/categories/Vim/index.html","c80e7230e2d317691af51234b3da39cc"],["/categories/WKWebView/index.html","a90984b396b534b1557317b03043d931"],["/categories/Xcode/index.html","5e3179873a85aee6c6872d575e214eef"],["/categories/appleOS-Networking/index.html","0fe9f9b5511a658a83f6a673971caab4"],["/categories/bugly/index.html","166efb1da5fc6bae6cd9ee3c6a1fe1c9"],["/categories/enum/index.html","3035361aaa0485bb72db3a7ec8019e6a"],["/categories/git/index.html","66848e43c60726edfe7b42447e93d47b"],["/categories/go/index.html","5ebba752c5af1fa6500d2a5e81c0de7c"],["/categories/go/interface/index.html","dbb854ccd32071a24dda107f946ec7b6"],["/categories/hexo/index.html","bb970e6655e0b451d8d162e0b7a5213a"],["/categories/iCloud/index.html","64ac509317d76260479491e3bb2bc8bc"],["/categories/iOS/index.html","17a54b940cd2248102b010802d66d7ef"],["/categories/iOS/page/10/index.html","5a0cafb736755a42d238769d48a9c58c"],["/categories/iOS/page/11/index.html","6d484d5ad1559668963ee95af7c6037b"],["/categories/iOS/page/12/index.html","0450eef10eb8884bca7cfb31bfec74f9"],["/categories/iOS/page/13/index.html","f36a8dd214cceacb4afb3ded5ce9040a"],["/categories/iOS/page/14/index.html","41af1950455be2612367f7981dd75a28"],["/categories/iOS/page/2/index.html","1ed99e8b55218279c615a0e84b1755bf"],["/categories/iOS/page/3/index.html","abe6a6e8efd9af7bc713fd47d9c6e810"],["/categories/iOS/page/4/index.html","b11fc7b7ea15345023207b9b019cfd2e"],["/categories/iOS/page/5/index.html","6dc31bb6aa71ac194a668ce126c1535b"],["/categories/iOS/page/6/index.html","6118c241e265b3c301367b9634fe2e00"],["/categories/iOS/page/7/index.html","a7c939c4170f4c9f66f530301c146510"],["/categories/iOS/page/8/index.html","cd9ba7d435687a281d60eacf994dbebe"],["/categories/iOS/page/9/index.html","02de956d8eb9e0f8a5a3abc68bb14995"],["/categories/iOS面试题/index.html","83cfb45a8f9e0195d186804e2cda029d"],["/categories/index.html","176599c554f12eacff3cdb090880378f"],["/categories/random/index.html","6dd99957d1fb14fac02a3c08aaa7e28d"],["/categories/三方类库/index.html","6dac2687a457338c393836b31df61399"],["/categories/函数式编程/index.html","f0e1c4c12a05a7b8a6512e12ff37d411"],["/categories/子类化样式/index.html","cd55800a51ff98bb83a89b8992464f3c"],["/categories/开发技巧/index.html","01f4768d9833e3e01c2338a0a7a7913c"],["/categories/开发记录/index.html","0c4ada85f1f40f59f2fac97d68e24d8a"],["/categories/数据库/index.html","87a64049ec97fe3f984642e03b8552c6"],["/categories/架构设计/index.html","2b1826a6ede69842ee06f91aaf035e52"],["/categories/测试/index.html","5bc9589e92abd5c48eabf014b726aa1f"],["/categories/用户体验/index.html","aaae81ff0d33b6bd6576225f0cdfefc0"],["/categories/用户协议与隐私政策/index.html","8e77ecf292d20daddae77e3198e792ea"],["/categories/设计模式/index.html","f6bb25a20307a498e40a3683eec94e93"],["/categories/设计模式/page/2/index.html","7137d81c8b1ef88bb76736629fb080d2"],["/categories/设计模式/page/3/index.html","b13f6e2976526995f77ce3fb7d4d4d79"],["/categories/逆向/index.html","406abd0a13c48bbf216842db71b3dbdc"],["/css/main.css","9f6371dc83b7ab6cd73d29f54e1ff3b6"],["/go moudle 导入本地包/index.html","6ce34cc1388bc07261a81537ad15f193"],["/hexo部署失败/index.html","f39f02e8ab939a70a41b378e632c52fe"],["/iOS 15 适配/index.html","452174bfe19849cf6fce9ebf6a85f4e2"],["/iOS VIPER架构深入实践/index.html","6c5b43cbd767987857bbdcaee62eab28"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","ef5e2ab1364879ca0ead03d512d04f16"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","505a09c2738c9c31da4285dd696a9467"],["/iOS 自定义视图，输入表单和错误提示/index.html","f19dad90f7f0293362efcbf5386b8f4a"],["/iOS如何使用iCloud文档？/index.html","0f203c210e5488e2225eb20b02a4b157"],["/iOS子类化样式/index.html","fecaeed7b47095573c5b85e81888e4e8"],["/iOS开发记录<一>/index.html","286a8298be648bd9de13b6df506c7070"],["/iOS自动化布局编程/index.html","b80f58f2f2a510308c0eb6aa87af1c6f"],["/iOS自定义转场(By Swift)/index.html","c8417c63f19f03733e787b0e1f0bcd88"],["/iOS项目架构：使用VIPER/index.html","1a7363042f24c7bddf0245a63d1b949e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","0d9adae98dbdb0ba990d42f7edb98eae"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","e2b3c41fbd236801ab430762cce4d01f"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","5bccb701ba57455447245f2ef432fdf4"],["/page/10/index.html","3a88278115169757467bafc67b5e0cab"],["/page/11/index.html","05fbfc40e5fcda64f05f99c0b77030c1"],["/page/12/index.html","0a490fd30cba703f2d780be199820dd1"],["/page/13/index.html","ca56fd7df9db18d24cff615478ccc498"],["/page/14/index.html","509a481b72af098cb15cd01dcdbd593c"],["/page/15/index.html","8a3d966ed34781883bdd1f1ed040cffc"],["/page/16/index.html","e88cd4cde7089cd497ce4ee50a1d1090"],["/page/17/index.html","40253af4277a4cf66a4bda2dc1d73ff2"],["/page/18/index.html","ae58b6263ae84e647aae4f43f4aaed61"],["/page/2/index.html","c60f0aaa7cc1babf2b404679e96a5320"],["/page/3/index.html","56bd0b983af8696abb8eb47965a22321"],["/page/4/index.html","54ce9cfcddd8da2517051b4d28d62f56"],["/page/5/index.html","c3985834aa89ad118980010964861c3d"],["/page/6/index.html","304f40d23f546041830f799eb135be52"],["/page/7/index.html","2d83dcfceea9b4a9da7ca7ad0de9162c"],["/page/8/index.html","7dee216162a67ff4930bf919f01bce49"],["/page/9/index.html","97e9462db275465583b39cdfcea33fc3"],["/schedule/index.html","bc48ba14e906ebe0122e86530ffc4f61"],["/storyAppPrivacy/index.html","7c757d80bdf76bbbf2527accd97a827e"],["/sw-register.js","0f6a0bb7eedb04449e306da51f3d71ef"],["/swift 专题：函数/index.html","868c3303bfb5fa30b1027cba1d62fa79"],["/swift 专题：闭包/index.html","fc7ad4fecefff4980a4a6faf91d174d1"],["/tags/Advanced-Classes/index.html","78b147f181ccd1e33805ef7d3407eb5f"],["/tags/Advanced-Swift/index.html","5a97109e2661409443eeffcd46e030ba"],["/tags/Advanced-Swift/page/2/index.html","bcc3fb7b2ab922763fb7638b1a962bb6"],["/tags/App-Architecture/index.html","d1b8124924adb27f7a30332de9819c6e"],["/tags/Array/index.html","7062542589dc1da14804a352ddb745b6"],["/tags/Arrays-Dictionaries-Sets/index.html","f5fc8d5ff0177fefe70d6ea5eceb5472"],["/tags/Authentication/index.html","7338cb5318e6941e16070b422772cb48"],["/tags/Build-in-Collections/index.html","ce1d93ce6425d68602d2da4e086cd055"],["/tags/Building-Your-Own-Types/index.html","884746bd4c817dc3e6c02a473137c738"],["/tags/CMS/index.html","17618a3cadcee02b0ff2a9e85798798c"],["/tags/Classes/index.html","c5715f9e35169644d5e4e889017d02af"],["/tags/CocoaPods/index.html","07f2d2802643e02eab2c3ffff9fac82b"],["/tags/Codable-protocol/index.html","ba6454f1885d06dca9106a1ea472dbd8"],["/tags/Collection-Iteration-with-Closures/index.html","e51bf2d4128dadd29bc04a2d44becbbd"],["/tags/Collection-Protocols/index.html","911f371db6d870206720202a21027e7a"],["/tags/Collection-Types/index.html","6b8e5c0e2c041310dc701e714a557e55"],["/tags/Collection/index.html","a4a86d50f0affd16f8a81fd538f818e6"],["/tags/Collections/index.html","15c1312ed35f7bf981dd31f45f21c6b0"],["/tags/Combine-framework/index.html","23aa96c9f60e33862029d3064da8fd66"],["/tags/Combine/index.html","1529ca9eda9c7a0cb192ade7e4877558"],["/tags/Dependency-Injection/index.html","b6bf13b8df2948fb2cf9bb5c379bd046"],["/tags/Encoding-Decoding-Types/index.html","269051a3e5d9c0d980d2f7feb3915b23"],["/tags/Encoding-and-Decoding/index.html","f044f63425a5308f6fbecf7c792f374e"],["/tags/Enumerations/index.html","f98f477922f5ca85c21d5760763fc31b"],["/tags/Enums/index.html","1f5ae2d78f9af6241cc4aae49e38c3e1"],["/tags/Error-Handling/index.html","ef9ba3fa6177a009e9d83c4ff7790984"],["/tags/Functions/index.html","c6ea9a62cee05f56a547945fa6877456"],["/tags/GO/index.html","b1ed1628de2252e0c9bc7cf8e3c2619b"],["/tags/GRDB/index.html","4585136ad3fa8606cb7fd791ecfff309"],["/tags/Generics/index.html","9c1e70adacbc7c368e561a8906a6204d"],["/tags/Grand-Central-Dispatch/index.html","62570f51c1f6a2f4b906a36ee87db8fb"],["/tags/Hello-Vapor/index.html","59a9f981b55ed46aa29ce80a39955197"],["/tags/Homebrew/index.html","66d027e2131fc30cff490111869518bd"],["/tags/Interoperability/index.html","43fff0102720a1e703374ebba5069611"],["/tags/Introduction/index.html","b317c7e64db453c8ab8cbd8969c073db"],["/tags/Leaf/index.html","a97155c8a0c3ac7ee9ae476b47d2e973"],["/tags/Linux/index.html","5b31e304195af011e546d7be854b087a"],["/tags/MAC/index.html","bcd5e3cd6125934168c71fc098cdf4ff"],["/tags/Methods/index.html","572e6556011e0fe00347c3b0f9543b8d"],["/tags/Modules-And-Hooks/index.html","0027ab8b0499f35e3a66079bf9500e05"],["/tags/MySQL/index.html","4ff65a5d39d7b2a8c5ba4bb4bc31f3fe"],["/tags/Optionals/index.html","a01609ab0cc7a186913527fecbfd0b77"],["/tags/Promises/index.html","2c7c6fd8c56dd17244fe22a751fdb2bd"],["/tags/Properties/index.html","2f24be188f81f161f8b7c815a3a371b2"],["/tags/Protobuf/index.html","f6c28513d2e034ee5b84ac9e18cac852"],["/tags/Protocols/index.html","0ea08c62fb7b01282dbf63946a63a169"],["/tags/Result-Type/index.html","e0be165080697314582a92dddd539319"],["/tags/RxSwift/index.html","d0e6b4d73fc7b6b41d434ce5a5dade2c"],["/tags/Server/index.html","8744d7dee1049e576c1b8bd8522dd59f"],["/tags/Session/index.html","cc1b35e80bd7a0ec13dc556c6fa44b9c"],["/tags/Sqlite/index.html","acc2904624bf5cf07aa8d772809bc655"],["/tags/Strings/index.html","f40799ba57132f6b9a771cbbc74367b1"],["/tags/Structs-and-Classes/index.html","e089eea217aea45d98a24220c258c40d"],["/tags/Structures/index.html","58bd5d926d89daff1066e2995960d9c7"],["/tags/Swift-5-0/index.html","4cfa9bfa863aa81c60221ecc4a9eaf55"],["/tags/Swift-5-0/page/2/index.html","77914d701e818c415f92d31f55fa9ecd"],["/tags/Swift-5-0/page/3/index.html","de819a68c65b1ca932fb0c25e0557d76"],["/tags/Swift-5-0/page/4/index.html","8b7e7627a842eab04a666b8f1fe57796"],["/tags/Swift-5-0/page/5/index.html","c36dd1a2a8e11a12d06c7cd83b2bf1b5"],["/tags/Swift-Apprentice/index.html","74968e4345fa7be54cc19b38650597db"],["/tags/Swift-Apprentice/page/2/index.html","e08153fbcf970e932df3c0a2215ec3aa"],["/tags/Swift-Apprentice/page/3/index.html","69b2bec85e82b3802df675c958edae0f"],["/tags/Swift-Package-Manager/index.html","99d1d98f03ed40947ce47a31ab4bda14"],["/tags/Swift-源码阅读/index.html","bb1daa3ae11283e196aedc71e73599c3"],["/tags/Swift/index.html","ac262763e67cf515f5f0ba5b4881cfce"],["/tags/Swift/page/10/index.html","be28ebc3ac5f1bd20f6b0a47251f96cf"],["/tags/Swift/page/11/index.html","489b98a950065c62f2aafcabf715aba3"],["/tags/Swift/page/12/index.html","c9ae97bfd8224f9be78cfeb02c9756d7"],["/tags/Swift/page/13/index.html","0d215bb9d4d4defac727ce9766eb6aed"],["/tags/Swift/page/14/index.html","a751c190a2523551481498c53169a623"],["/tags/Swift/page/2/index.html","94d0fc8a345e6fa71b4dedf6bfb3f538"],["/tags/Swift/page/3/index.html","97f949fde09237cfde7c60929085666b"],["/tags/Swift/page/4/index.html","ed3a7740c567aab57c49e997b39167c6"],["/tags/Swift/page/5/index.html","8cfc0ed9d68fc646974a51e90098ea0c"],["/tags/Swift/page/6/index.html","a74e175274c80cece34b4b3368dab296"],["/tags/Swift/page/7/index.html","74653bbe1f77fa46fdbd4ca58f9bbb5b"],["/tags/Swift/page/8/index.html","0dc02468f1d2049b9988eeeaad3b20f8"],["/tags/Swift/page/9/index.html","5deb895a9d1eab2b264884c549b733a4"],["/tags/SwiftLint/index.html","9ee8b5fa364e08bdc311b6c9eafc9286"],["/tags/SwiftUI/index.html","761d5c58453f9e7c84ca1d230e0201c4"],["/tags/UICollectionView/index.html","47ee8e2b3cdea592bb1056741081166f"],["/tags/UIColor/index.html","699e9a5779a31804208c54c193e963d3"],["/tags/UIImagePickerController/index.html","12967d5be5b62e2346875a444ca1ac3b"],["/tags/UIKit/index.html","dbd465cc4984582b0babbdd56da34183"],["/tags/UIKit/page/2/index.html","4d9f619aa0ae7032ae287e200ce7d54d"],["/tags/UIKit/page/3/index.html","c9ba918bcb25f9605c5c1d23816c2682"],["/tags/UIKit/page/4/index.html","101ecce40ec2cc9b1c978d2a8ded7dfe"],["/tags/UIKit/page/5/index.html","6ff31479ddcec8564efbb67eb8f0ef34"],["/tags/UITableView/index.html","98a929be1591c98f0be703483d77e756"],["/tags/Ubuntu/index.html","98e4439e54e1708b19101178d5067ccb"],["/tags/Uniquely-identifying-views/index.html","c39eb9a4a17493610ca6e939ef1b454e"],["/tags/VIPER/index.html","2a6c9c91882a8f58633c47cce069401b"],["/tags/VMware/index.html","c478c1b0f3a1c0438bff99f7054a2c12"],["/tags/Vapor-4-0/index.html","f9418a75421438c7289466c2cfb7b928"],["/tags/Vapor-初探/index.html","08ca849f9fd81b7b784d86d150db65c3"],["/tags/Vim/index.html","8782ec77ba4d7cac1bebd33a8e1e1111"],["/tags/WKWebView/index.html","9c112f417c012c1aa5775e8a252ec913"],["/tags/Xcode/index.html","f90da13ef01f05e8143939657bc37a05"],["/tags/appleOS-Networking/index.html","04b7df9565ec26afd7cc32895097f55c"],["/tags/bugly/index.html","b399e4dde84d6fd2574a069461a02007"],["/tags/enum/index.html","7fa3d6d89a407cea930b9ee07157aba0"],["/tags/git/index.html","8f3454fd204ef64784d0430f3c4f6662"],["/tags/hexo/index.html","20936c11bd300dd349c48b59232176ab"],["/tags/iCloud/index.html","85587ced779c4dc156de131a172b95ee"],["/tags/iOS/index.html","2c28cefc8323f0f9e9bbe95eb871afdd"],["/tags/iOS/page/10/index.html","41d87e5b5f0c8cb5ff018537fca3b479"],["/tags/iOS/page/11/index.html","fcd607372768ae53b1051b4c68d574bf"],["/tags/iOS/page/12/index.html","571bd0e43982949b974b09d3fd920fff"],["/tags/iOS/page/13/index.html","98d28ca0a16c01f48401db7bf4ad926f"],["/tags/iOS/page/14/index.html","b3e2d96a01fe3b024c1878aa5f4afaec"],["/tags/iOS/page/2/index.html","a1daf8aef4f960e0154e8d8d5111c42b"],["/tags/iOS/page/3/index.html","74160ffadcbbe863b97c0aa25af4f38f"],["/tags/iOS/page/4/index.html","b343b3bf30e8c561ec81b2d1c4edc3c0"],["/tags/iOS/page/5/index.html","9f52032e15c364060557ac21ccf91e0e"],["/tags/iOS/page/6/index.html","b286d50e24954654e0b4f58a05ff1894"],["/tags/iOS/page/7/index.html","e5e48d1926571c8aad7af83dc548844a"],["/tags/iOS/page/8/index.html","7dbc2b189585007f7cfa5266c3e58f37"],["/tags/iOS/page/9/index.html","870f78beb0063ccee1cb949f193b0474"],["/tags/iOS面试题/index.html","09087ce491c820f1f32303767d499352"],["/tags/index.html","1262a5f9f2225f8f8d4a9c9ca2db8028"],["/tags/interface/index.html","8df526d9b6dde1bee6efd65975f8ecd5"],["/tags/non-optional/index.html","0831eb1538024868e3b3cb333f8b1676"],["/tags/package/index.html","bdb0f4700c4bc1db7904e0cbd3f8713c"],["/tags/random/index.html","2628e4c68c41654577a90ac85a024835"],["/tags/transition/index.html","befa49e18100010dd707d9e5fcfbd711"],["/tags/三方类库/index.html","490fd03248bbc181763acbb0b6cb83a6"],["/tags/依赖注入设计模式/index.html","771de0b695ec19edeabb5ac1b91a52d7"],["/tags/值类型和值语义/index.html","fb7b630388cb7ac50f07ed4d205dc164"],["/tags/内存管理/index.html","9994c8985025b9e07d4f1c4d44687ae8"],["/tags/冒烟测试与回归测试/index.html","8a535616d46ad661470d4d1c93d86b51"],["/tags/函数式编程/index.html","30577fbdb29f1f44fcb7690193864d75"],["/tags/创建博客数据库/index.html","f49109a8bb133914e54a78e7bba71504"],["/tags/初始化模式/index.html","82fd7ca44fcc8ba2230008f6a4d71044"],["/tags/单例模式/index.html","2cc65a24e908de63affecd76a023b532"],["/tags/原型设计模式/index.html","b9c3b715e9800ffe591924eaa60e442a"],["/tags/命令设计模式/index.html","c748d9e0610a4541f559d68f90a47296"],["/tags/基本控制流/index.html","d9e713d7712bbfddeea818bb9716deb3"],["/tags/基础语法/index.html","3aa8d26da577c5da39dec8ba450809e5"],["/tags/外观设计模式/index.html","e9951c1e343bed63ece7a90063221650"],["/tags/委托设计模式/index.html","0ee905f7b6f9e2a19be8f1f0ef480446"],["/tags/子类化样式/index.html","5175f03bb1d5b37acbc5cf9a781aa74d"],["/tags/对象池设计模式/index.html","7978651c622cf81b2f73cde37d8a861a"],["/tags/工厂方法设计模式/index.html","b2ff3dc7d70bb9dd0dbd882dc6b1d1bf"],["/tags/工厂模式/index.html","7706a1618f41ceb2b39310e015330fe9"],["/tags/工厂设计模式/index.html","d03ab7c26c9bb3a252dfa760ca866533"],["/tags/开发技巧/index.html","2ac98692778efb1b7019733293a3d5ab"],["/tags/开发记录/index.html","a3013e2a9b716fb4c04a44ef300c6e1d"],["/tags/懒加载模式/index.html","338235a6cdec1fcf2b74fc2484915c06"],["/tags/抽象工厂设计模式/index.html","d9229456974e6a98248acc222431305a"],["/tags/数据库/index.html","948643f8336f06c142a76f58f7ef3e1e"],["/tags/构造函数/index.html","e4ba30472057af28c6317262f9c165a9"],["/tags/架构设计/index.html","b07e56439161a0dc8eb483f65500606d"],["/tags/模式匹配/index.html","d50989134885ebd82fc1eb7a684b927c"],["/tags/环境搭建与验证/index.html","fc04ac19befe92034de3d2ea68b56a99"],["/tags/生成器模式/index.html","8722ccd87b099e5598f03e226e41b404"],["/tags/用户体验/index.html","9ee64cad7ae26dd50c0721fe7dfa987e"],["/tags/用户协议与隐私政策/index.html","5c07d837b8847cd35af05eb6f909a058"],["/tags/类型与操作/index.html","ef091dc56686b2f0abfce1a534a9c7b1"],["/tags/自动化布局/index.html","cbd5a7a6dd386b003ec1de7b11047cd0"],["/tags/自定义UIView/index.html","0fc8328743502b835df346221ad68d24"],["/tags/自定义转场/index.html","13869a3c37b359627aab6b6140da78d7"],["/tags/自适应布局/index.html","b1562ca46e35c19cdc150f67768da5bd"],["/tags/表达式、变量和常量/index.html","2f1252d4acdc3db33677f5203a4da668"],["/tags/设计模式/index.html","eee3a35865e56637a3f4452d8f0a00c1"],["/tags/设计模式/page/2/index.html","9ac08e844b143657a153b7c51c4a29fa"],["/tags/设计模式/page/3/index.html","66a85a7d811a81e7bc01693125b43103"],["/tags/访问控制和代码组织/index.html","12358159c8de125b94a864cbac148f45"],["/tags/运算符，下标和键路径/index.html","4a63b9e1b47f500c28b5b8288126f35c"],["/tags/迭代器设计模式/index.html","3ca54915c4ef15ce6b591daf5942c3c3"],["/tags/适配器设计模式/index.html","b7d6ce0b0172e808121c31e4305ed913"],["/tags/逆向/index.html","99744e83c6cbe57fba7590e87056a26e"],["/tags/错误处理/index.html","16386e19a66fdb5908b81c7d08747542"],["/tags/静态工厂方法/index.html","3e4d7ca05bc05336ee2f0f0899846d89"],["/tags/面向协议编程-OOP/index.html","fe78e4feed8f35b05603ceade64cee20"],["/tags/高级主题/index.html","04b03fac0f75037de6c979bb3bae4f9f"],["/tags/高级协议和泛型/index.html","118cb0bc21d3a50ccac197a9dc89a52a"],["/tags/高级控制流/index.html","66dc91d235ef9a41631859b09b1f9c98"],["/xcode 常用的快捷键/index.html","f934beb44b570c111cd31ec79180ec1b"],["/为iOS应用构建输入表单/index.html","44dec05188d93ae9b6dd86eac140de40"],["/产品开发的幕后花絮/index.html","d46ec664fc4a2816f56e12d32b49605c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","046237afc2191e2d80d76a21d8604dc8"],["/冒烟测试与回归测试/index.html","e0a1b720002d12de7244b419958f2da3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ded777ec0cefb94ee1851088c9e9e41c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","88232292bf957229e629916e25edb446"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","13d777a2bd2cdcf8c57c640692e4bfaf"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6ff3644e4526c13fbe34911d6d44c708"],["/在Swift中创建自定义集合/index.html","153f4daf9c325bb03e40e7014a6cda00"],["/在Swift中处理非可选选项/index.html","a35e1d1a0d9cf7e215e1492aefe794a9"],["/在Swift中生成随机数/index.html","ab9e117ec584580b84749f20a373f699"],["/在Swift中重构单例模式用法/index.html","18afdc7c2ded3dc9b9dc746d9c351f98"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","379de83a1fa4a135f3ca5f85193ef6ff"],["/如何为VIPER编写服务？/index.html","b103255f37aaaf73614251c8c18020b5"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d2ebe06e2b1b1f785755789df91c5853"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8f46a62c4a25d64e86d583a0f2566828"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","4c69dd5a2cc12fb4e019c2752ea4ecae"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c9b8ee3f88a446eeba506626e445af3f"],["/掌握VIPER架构/index.html","0d25fedcb14cc0d0a3366d55b211ddb1"],["/揭秘 WordPress Hook 系统/index.html","49f21dae4bcf0327e8366bdab3f4d49d"],["/比较工厂设计模式/index.html","321782a803e17711a1f301f54e5808e8"],["/深入了解Swift中的Grand Central Dispatch/index.html","4555384810d3966e5c3d79e857691626"],["/深入研究Swift框架/index.html","d78ef15a487434ccbe583ed3c30f82ec"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e3ce203d10ca934a9b5ac5cf20f933d6"],["/选择Swift而不是Objective-C的5个理由/index.html","f45ee19015b60ecdd7b20caf41d240bc"]];
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
