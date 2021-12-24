/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ab759980c5e0aa16958d50f14172ba36"],["/2020年iOS面试题总结(三)/index.html","961ca12761a8429c8a55c56a56b5e1ab"],["/2020年iOS面试题总结(二)/index.html","eb9c75da85a37461d9b94b0f98fe1793"],["/Advanced Swift系列(一): Swift 简介/index.html","216e126872273debd701d8be59748ad8"],["/Advanced Swift系列(七): Strings/index.html","ec63542917dacc44b98e390c2893aa3e"],["/Advanced Swift系列(三):  Optionals/index.html","a84ede7aa2d59501a8d8ae4ea1664a28"],["/Advanced Swift系列(九): Protocols/index.html","01bfb9612fb27a534027f536632c9202"],["/Advanced Swift系列(二): Build-in Collections/index.html","3212a5ced69395c321e189b38ffbe61e"],["/Advanced Swift系列(五): Structs and Classes/index.html","962d4f77872c0bb77171a2b47db3b426"],["/Advanced Swift系列(八): Generics/index.html","bcf44ff7fbff8e1a5439282792e65a2b"],["/Advanced Swift系列(六):  Enums/index.html","581d2e850c8e0bd5807fd46232b5e5f6"],["/Advanced Swift系列(十): Collection Protocols/index.html","2b21390dedca1bb72fb8201c92f04b70"],["/Advanced Swift系列(十一): Error Handling/index.html","b2fcd8c5dd58330eafbfc71211891e74"],["/Advanced Swift系列(十三): Interoperability/index.html","d4a9ad5891ae2fdf090698326a9f6c2f"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","dec4476710545ed1f34200ab4548b311"],["/Advanced Swift系列(四):  Functions/index.html","3929fb606875f3eeba40ac50240f8061"],["/App Architecture系列(一):  简介/index.html","d81c63b2ba1c0fc11d59698701f00ad3"],["/CocoaPods 设定版本说明/index.html","5b22be3ad2e068729d8858d96c6f0a84"],["/Functional Swift 初探/index.html","b66e6cbe7a79111d71f5b907b0d76e17"],["/Git 使用小技巧/index.html","f6860386049a9e7497a6be67b315adee"],["/Go Protobuf 初探/index.html","1fced1f64ce01cd33dd5f94b4e50eec7"],["/Go mysql Tips/index.html","c79d60cba0362e5e54e05f5cb5232b4c"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","dca170a0b3a1f99ed0ab67a64c311cda"],["/Go 入门篇：2、Go 实效编程/index.html","1a54ba8e23e863478ee76ecf9dba978b"],["/Go 入门篇：3、Go 重要概念/index.html","9b505d8349b9ed8dca003d736328d954"],["/Go 基本语法初探(一)/index.html","5e415736a5bbf5dc27385d3689d2f5f5"],["/Linux VIM 命令及操作小结/index.html","666d8dc60f1ae0629652a1672d03d493"],["/MySQL 基本操作/index.html","cc006941c9dedd1f27cfc39c1e03e698"],["/MySQL-列类型和数据完整性/index.html","3df413fefab08444e48c2c25aee50fd0"],["/MySQL-数据库设计和查询语句/index.html","986085f9c481e2ed46a33d4c84ca0163"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","7e11f27f71cb107b7f84c79ef46ac957"],["/NSCODER和SWIFT初始化/index.html","2d45199ab2a98be73b6eee43d4f27967"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","6d5c799e545b6acd475bb6f1f7601818"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","d836d461eb187753a80d09e6310103a2"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","adbaa72cd2e371202c45e931c3409f38"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","4259050f57f0c9e035bc20e417197738"],["/Sqlite 使用Tips/index.html","cb4abce71471e189c0887d5c230869dd"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","99e8cca5a6aaca81662100b2c4e0fe37"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b1ce5a085aef59495260901e5330207a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","6f4e2b6ee3b9359dae7e8d047351380c"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","aec8d28b5071a4815b49fe5a95aa61f7"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","bbe57ebc3527ff8887eee3858904ea2c"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","93e6aaba0721689c68e335355f57e5e3"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","08d35f969677518d9c047ab5d8ee1285"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","f2a7830dc3bc5bd6df6a035bccf6ce3d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","5057da778ed878b5fe1491c730ed4acb"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","8f3635971b61960ac31c8790b05d0d2d"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","9fe7eb94accf1505bfd174385ad5e1f9"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","a7f1e1457688ad79bd926bf1300d7f0f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","de33db6573516f9d36a376c6afbf8b52"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","983c87804e097d6381c7cc8a2a001281"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","94dd6888779c968fa65c93d906394cf8"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","364259dbaef7efd688703cc4d0356b6c"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","998f11bb7c07650d731cfeb67f7d49b7"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","1c67ff8270e97ff05a78addc8c809f60"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","03c6f12b03f9f7b69cc309602803b529"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","94f97ede56fd9814dc629dbb345bcb6e"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0ad7a3dab1933fa962359727fcb00d7d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","7356e5a7c50bb43b32cd1601c0f655ba"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","a5bb5c650079668c05ebd9d53b66c1c4"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","61aaa109432221f5cc54d160aa52e0eb"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9452e44607aa09fe90096700b559804d"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0faf0fcde283d10656c9e43bdce81ddf"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","799682e3ac4dc78a530534593a99f4ca"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","d73060694c1547ac8431534a7372d28e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","df1fef85c24f2736bc8507d02ab2dc9b"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","85200f7cf4691b198a191e29a671867c"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e6d262b91ef0f8722cad5c697419c464"],["/Swift CompactMap vs flatMap：差异说明/index.html","9631755c3f62eb7969757b3fa058a075"],["/Swift Grand Central Dispatch 深入实践/index.html","0cb1b19d28b06ec9f2368cf46d0417f9"],["/Swift Lazy属性初始化/index.html","691623c5625c639586901682ba3e9b1a"],["/Swift Promises 初体验/index.html","0dd5536c7b9f67ec9443e9b2dc1e028a"],["/Swift Promises 探究/index.html","1b10ac8c757188ec5a68c636ecead3d1"],["/Swift UICollectionView使用指南/index.html","6bcd5ffb8c90bb01c827abf33a23e572"],["/Swift URLSession && Combine framework/index.html","7e0a4fc56d59d8efd9f3feb40f184535"],["/Swift tips/index.html","334ff3377445f7f84d5ff0e1eb426991"],["/Swift 三方库：GRDB 使用指北/index.html","4d89b1cc1f3f8ba491072ddc4a70e1d0"],["/Swift 唯一识别的视图/index.html","6087e7179c250176d3b78638a50e640b"],["/Swift 如何学习现代UIKit？/index.html","7702b4e0878109d9324f074f025c7116"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","002e12e6ebccbe8782619045d2a73303"],["/Swift 用 compactMap 替换 flatMap/index.html","19edf749d0aadc861393fa66d7045bb7"],["/Swift 选择和播放视频/index.html","108bbedd2c6e308621f5cd98b42390eb"],["/SwiftUI 系列(一)：1、 简介/index.html","cd243751b6c0d593e8fe3c4b19063629"],["/Swift中UIColor最佳实践/index.html","d53d3a7e56fb856b904e7de17f06874c"],["/Swift中快速简单的工厂设计模式/index.html","978d66274ed1937fb4976d179b02f1d0"],["/Swift中构造函数与静态工厂方法的比较/index.html","c9ba72e097d4221e9622d52e3fc3a08e"],["/Swift中的UITableView教程/index.html","84b8db4391c90a2bb51ba3945eeb5050"],["/Swift中的懒加载模式/index.html","e088c8c212cfde8439b5ed7597ea965f"],["/Swift中的模块和挂钩/index.html","c17d5faec502a4ed7a8cdabbd513d6e9"],["/Swift使用布局锚点添加约束/index.html","978cbdd5180f7ceacd6417d40cff3019"],["/Swift依赖注入设计模式/index.html","ec0002cf985176d67287537f8f03b460"],["/Swift关于Dependency Injection (DI)/index.html","728a36fa8d67e3ff1ba100db15e03e97"],["/Swift初始化模式/index.html","de9130dfbbb0391b7351956954a14c96"],["/Swift单例模式/index.html","fcb3f975e1e4aa78b246355f444ef5ab"],["/Swift原型设计模式/index.html","f0e687c7f5120de0e73daf9e9ae1f457"],["/Swift命令设计模式/index.html","b0de865b402673b7511b8991f0c9f28c"],["/Swift外观设计模式/index.html","d1296d861d77733729756dcb6445e84d"],["/Swift委托设计模式/index.html","12ec34be85fa5941f83d1a5949bac818"],["/Swift对象池设计模式/index.html","7bf86da55ba2dd522f7324b0a6bbdf0d"],["/Swift工厂方法设计模式/index.html","934327d57c387448972bd9a1e997b23e"],["/Swift带闭包的懒惰初始化/index.html","e0b1bfa0efbf8fbedc4089d98bb7ae1c"],["/Swift抽象工厂设计模式/index.html","651789857817d3f958ca4202f0a6af5a"],["/Swift掌握iOS自动布局锚点/index.html","3719f3aea3609bbbde15b81adee8f9eb"],["/Swift支持旋转的自适应单元格/index.html","885cbbb14a2ec1d71839e049aab7ea7e"],["/Swift枚举值/index.html","87956f83bb9a2d7ef1b34eb1e3569884"],["/Swift生成器模式/index.html","c7c253d3a69a38ebe4c5b97d9e9f7d99"],["/Swift结合Xib文件自定义UIView/index.html","fc1ea973d31b1cda512729345df4eac0"],["/Swift编写的20个iOS库(一)/index.html","8fb5389cb3c51969c89c40f7dc03b6e1"],["/Swift迭代器设计模式/index.html","77165ccc0137bd683cc1def39140af5d"],["/Swift适配器设计模式/index.html","0918f550dd464a60f28bc6b0b044ba73"],["/Swift静态工厂设计模式/index.html","2a2ed29a22344fe1b9b224c41c8b0649"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1448fc15beba22590f1789fd9a82fdfc"],["/UICollectionView data source and delegates/index.html","e458e553772f96af2e5acd97154deca0"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","fdd35568fe484492fe7325ebf1e2e60d"],["/UIKit初始化模式/index.html","08418c85f5b5e1c672fb467072a1ffbb"],["/Ubuntu18.04替换国内源/index.html","a749a8b246a7283ed1f7adebef9371b3"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","35a8dd3ce51faad05e39220f48d643da"],["/Vapor系列 (一) :  Vapor 初探/index.html","515ccdb4cb05df8608447f25046b06b6"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","51e9bd7579b94044f27c168effd22285"],["/Vapor系列 (二) :  Hello Vapor！/index.html","aae195689a817ecbe72b0d739b88d088"],["/Vapor系列 (五) :  使用session进行authentication/index.html","bf27dccf3e7a5d537d0368c3417c5863"],["/Vapor系列 (四) :  创建博客数据库/index.html","c7cb3c7852931370af38935f966828bf"],["/Vapor系列(六): 徒手撸一个CMS/index.html","2d266546324f9b4c3ff68791ba2cbd19"],["/WKWebView与Native交互注意事项/index.html","8f4823b34889269f1029b9f5f0d49ea7"],["/Xcode扩展/index.html","4e6b5e5da772e7336faff48b0f0ae8e4"],["/about/index.html","aacd8489f5bbf2e44a5edcb3680ad5ac"],["/appleOS的Networking示例/index.html","fb6195c3ec85d5e3fa4be04ad5cd0a70"],["/archives/2020/03/index.html","a0949726cdb002cc5e63ee0f1dd311d3"],["/archives/2020/04/index.html","c1179ac7d97b46ac4802e11067c65771"],["/archives/2020/04/page/2/index.html","2d355bee2058274045135b522db7e96b"],["/archives/2020/04/page/3/index.html","206d48fd26983e13e5ab3c82ac5d65b9"],["/archives/2020/04/page/4/index.html","a4774103e552fb4ef95397b776b868cb"],["/archives/2020/04/page/5/index.html","111bdf3164f4477365e5bceb0f0fc8fb"],["/archives/2020/04/page/6/index.html","2ff4b86f27b5caec1443ed5f9a3ea109"],["/archives/2020/04/page/7/index.html","f4d3181391ad9a820867845af5f692a1"],["/archives/2020/04/page/8/index.html","6e2db4b97bb6b13c699e6fd03fa32824"],["/archives/2020/05/index.html","ffe39ad81b33852c97acbb2cc6b60713"],["/archives/2020/05/page/2/index.html","c0c7ba25c2b42bcbe6bdec069f4eee9d"],["/archives/2020/05/page/3/index.html","92edcb87cd25d1ec3522f83d644270ff"],["/archives/2020/05/page/4/index.html","273eef8167cf07a59e3697d423546f8c"],["/archives/2020/05/page/5/index.html","74f082baa6759cbae80b9e18b86ed733"],["/archives/2020/06/index.html","c7dc2a76d20dd74c4d9550e37f028579"],["/archives/2020/06/page/2/index.html","b987446d482d71e0cf9a568cdb8e4e78"],["/archives/2020/08/index.html","db801bb5ddf4eab1e7f5ed89c6191642"],["/archives/2020/09/index.html","d7cd2c9124cea2f56dedfef6b208a90f"],["/archives/2020/10/index.html","d5c2c7e5b698954c3ddfc34c57b084e2"],["/archives/2020/11/index.html","4c30c95513214393e44a2bdf5970de4e"],["/archives/2020/12/index.html","a1b79ac9da8286e4bea3e0a1193e5d50"],["/archives/2020/index.html","2f496b68d8bfb1824c9b356b8c5ecca8"],["/archives/2020/page/10/index.html","d59f796e5482fa8f360ee9d9a5241e73"],["/archives/2020/page/11/index.html","c9506ea3aeb14d9c2f1c4a6216e5d9c0"],["/archives/2020/page/12/index.html","1f24fee6cef7a55fc5e52c424805866c"],["/archives/2020/page/13/index.html","7c2acafa2cf6d840432ba82f001a609a"],["/archives/2020/page/14/index.html","737506606b6a603c146838c22c07d439"],["/archives/2020/page/15/index.html","e6b5bbb04d0aa6f857137dfefd261c97"],["/archives/2020/page/2/index.html","dd83f162315fd4c0ffe092a4d082247e"],["/archives/2020/page/3/index.html","c0ade5eb31e5f99b1f5e8d51fffdc0c2"],["/archives/2020/page/4/index.html","b0110f78142b214c7e53abe1d8af166f"],["/archives/2020/page/5/index.html","06ad6d6ffe40c97d70ccc8a9515fdfb8"],["/archives/2020/page/6/index.html","8453266569e74a6f22b776939d3c5aa9"],["/archives/2020/page/7/index.html","6e9775f16fd2ece5fa34c172b625e961"],["/archives/2020/page/8/index.html","c7a0bb122f771c27730622828bde593c"],["/archives/2020/page/9/index.html","a9f1af43a7a64ed508dc47c2384940d2"],["/archives/2021/03/index.html","7eb23758f13b06f2878f9097be832a59"],["/archives/2021/04/index.html","d12aaa3712fa8cff7c1b902637c62b99"],["/archives/2021/05/index.html","67ea165e7958bdd3c0c2dfc0dd8b3057"],["/archives/2021/06/index.html","b5231e9a40eb98f561fede0f8322fe10"],["/archives/2021/07/index.html","c4d4b054dc732a8fc652178932358dec"],["/archives/2021/08/index.html","d5dcfc451132ba1d870a091b8ed5b7a0"],["/archives/2021/09/index.html","b58f8966a3792cd0af8ed71163446913"],["/archives/2021/11/index.html","3ebf298e7de522e0c6c8432e0325c5a9"],["/archives/2021/12/index.html","1b3db115df114fcbb401f63b8c2a99a6"],["/archives/2021/index.html","4bbc067fa9597da8d11a198df12abda0"],["/archives/2021/page/2/index.html","59992573fd271162608adfab54b74610"],["/archives/2021/page/3/index.html","397e0f31f30cb1b192c898b623e1d281"],["/archives/index.html","fda959d30a952f08c9ac588f57fccb8b"],["/archives/page/10/index.html","2ad21d1512a9975f6c5488b25151ca23"],["/archives/page/11/index.html","454ae0432c5b122027a8edc9702c5306"],["/archives/page/12/index.html","20aca8b61411890abf8530d90140f8f2"],["/archives/page/13/index.html","f867d7c332e59df5666b9679de0ec979"],["/archives/page/14/index.html","7b05b0d44b3d8f4b353e2a81aa20505b"],["/archives/page/15/index.html","fb974a66c11bcb8702044372ba5b8ff0"],["/archives/page/16/index.html","98e6b9b2a8a2d296eb1e7bbb210108c9"],["/archives/page/17/index.html","3d3f1249c83df6c0f38ed545992a97d5"],["/archives/page/2/index.html","6c3cfb3723e68a0eea62dad2888c38b6"],["/archives/page/3/index.html","ba9d43b4479e8d9337d90242e63e1d0d"],["/archives/page/4/index.html","235abc6ff085263340c90cda657b557b"],["/archives/page/5/index.html","c2f5fcac2ba5588d5f862a18a08f5d93"],["/archives/page/6/index.html","4ae4dd067b608ff3b869750c70504910"],["/archives/page/7/index.html","7d68f76c16295820af9338311ce8fecd"],["/archives/page/8/index.html","85911e5b9eee736d98cc1a4a6c1ad253"],["/archives/page/9/index.html","65aceb23152b3cf109ff8bb167e5f05b"],["/bugly 上传dYSM文件小记/index.html","ebb31ce92713ea791edd4f8dc3768887"],["/categories/Advanced-Swift/index.html","1d1dfa3514ed77e03e93e5c963850286"],["/categories/Advanced-Swift/page/2/index.html","2a219be7a06a8412ea0b425bb1cf220c"],["/categories/App-Architecture/index.html","164228b352dd6ed0b72cb2665b2d350e"],["/categories/Array/index.html","418c1d3d6ee45aabac8d25e13be64abd"],["/categories/CocoaPods/index.html","eaf0b2f75f1f6ecc8969d51a6f9f6659"],["/categories/Codable-protocol/index.html","6c860c88ba32cb9a9691de7b6be3c763"],["/categories/Combine-framework/index.html","ceff4ba7ac2c3784b8fabaea2e35b4c8"],["/categories/Combine/index.html","091b9236d2fb87d1e4f848e959731a2d"],["/categories/GRDB/index.html","975a87e83aebaf1c19e1e11abb3a2f7d"],["/categories/Go-入门篇/index.html","c3ff0bf84e0abdb6957da7cb01301340"],["/categories/Go/index.html","27a302ff5ba9a173ce3755a3d30d7bcd"],["/categories/Grand-Central-Dispatch/index.html","48073f17f1d0d53d1c6039c2e7f1ff8b"],["/categories/Homebrew/index.html","82dcdb37de4a4b3e47b2607c465eda68"],["/categories/Linux/index.html","16f34f40335cb977f554d464415def3a"],["/categories/MySQL/index.html","a0de179474d7cf1def98aeb8b8938cf6"],["/categories/Promises/index.html","616e74591341d5e4a7e178a3577d8a97"],["/categories/Protobuf/index.html","2365beba0eb41bcd2dd8be333b10daa3"],["/categories/Result-Type/index.html","433ee43b8e34f5ccdd96ac8ff0828c4f"],["/categories/RxSwift/index.html","1b452e5f3188e71f6c0396f8eded0b7c"],["/categories/Server/index.html","1859a89af565ecd4c81af5b745ee3175"],["/categories/Sqlite/index.html","c6066c0d285cbafe6b41b99e3d946038"],["/categories/Swift-Apprentice/index.html","e9143a0478c82eb123f45222ce33a3db"],["/categories/Swift-Apprentice/page/2/index.html","03a085c3c50470b3bab7eafd0fca4447"],["/categories/Swift-Apprentice/page/3/index.html","2021970761c42f1fcb3e5c443fa15dd0"],["/categories/Swift-源码阅读/index.html","90fd73e1dae9a32440caf9b989e7d8d9"],["/categories/Swift/index.html","d784a021a185068bd0b398219cb06cd9"],["/categories/Swift/page/10/index.html","20cc006dcc4f351817a635414a7ba67e"],["/categories/Swift/page/11/index.html","70f517a0364e4197a874dbb4bb9d9534"],["/categories/Swift/page/12/index.html","6b913eab1c65c000a0601cabf811fae0"],["/categories/Swift/page/13/index.html","0a35f638deb7e7cc6dee562ea582902a"],["/categories/Swift/page/14/index.html","766d0b24c45c2d90d63a42139cac4ae6"],["/categories/Swift/page/2/index.html","98425958e612da19ed0c52752a3837af"],["/categories/Swift/page/3/index.html","482272a17c64e02ccdd919574a88cc95"],["/categories/Swift/page/4/index.html","5d65f6e98590aa7737ee48110fee6652"],["/categories/Swift/page/5/index.html","95cc15ef8abf9b3a37add4afd473d8fa"],["/categories/Swift/page/6/index.html","e4b5567f37d1fc92b001c6682356ad40"],["/categories/Swift/page/7/index.html","f8f10e97e3764df3f25b35f39f8bf544"],["/categories/Swift/page/8/index.html","52de7f75c14f39d9bab07b29da86f274"],["/categories/Swift/page/9/index.html","660abeab4da8be3d4a41650b06a16a0c"],["/categories/Swift5-2/index.html","bb7ffde1467fd69ffae25dda96fc2f46"],["/categories/SwiftLint/index.html","e2c4e7f67f873995e1ba2f7d0e1da683"],["/categories/SwiftUI/index.html","c7a63cbfb9ac88f228ad57f1add43bb8"],["/categories/UICollectionView/index.html","54f0275b8c0b203714ddc16d1acd41fa"],["/categories/UIImagePickerController/index.html","35c84c24d3a17a94f2416039ad5303f6"],["/categories/UIKit/index.html","fb92bc3ab4af1d3888d78b9fbba55d98"],["/categories/UIKit/page/2/index.html","43845e9c173d0cee8115052d724e43a2"],["/categories/UIKit/page/3/index.html","3dcddf8b82b96819d43206b1133dc158"],["/categories/UIKit/page/4/index.html","c662ba5de8d220fac306f3bb8b699155"],["/categories/UIKit/page/5/index.html","f4786312230a3c90b554f79f5fc39dd7"],["/categories/UITableView/index.html","a0015b795130be2d9bce619aa3c0e29b"],["/categories/Ubuntu18-04/index.html","0692ee13792e0eed48ca8c2d19beced3"],["/categories/Ubuntu软件源/index.html","3ed8493295d7c3497470d02d9452ae3a"],["/categories/Uniquely-identifying-views/index.html","471f33fe86925894fdfb37c260f17460"],["/categories/VIPER/index.html","cb6adf1f1b6ed0e2a44a770af8591a4b"],["/categories/Vapor-4-0/index.html","477322e8dce470d11c54cb7cbce77310"],["/categories/Vapor4-0/index.html","337c64ad69fd40fa57854ffc587ea8eb"],["/categories/Vim/index.html","a9be7754695d587792aa3363973b04a7"],["/categories/WKWebView/index.html","4a57b4d4bec64ca1cffd3e3e11031e1d"],["/categories/Xcode/index.html","9bd32e0cedb8fc6382b6ac599e0db999"],["/categories/appleOS-Networking/index.html","7c9ec7ea95cba2d548106f834f47b39b"],["/categories/bugly/index.html","d1c9e29b3c92010ce306d2acbc5e7c9f"],["/categories/enum/index.html","e84c870e4dacfc5c76d44156f1041927"],["/categories/git/index.html","cf28956a055119da99ce1bf90e47a632"],["/categories/hexo/index.html","f190f32e6fc8e0e25442f16b6434bf39"],["/categories/iCloud/index.html","28a2ec514778327e046f747d938a7419"],["/categories/iOS/index.html","764efdfd55df47f4c932c43ab6d32d63"],["/categories/iOS/page/10/index.html","968f5eba3656cf80746526572bcf05c9"],["/categories/iOS/page/11/index.html","13920d7740efbbac02bcbd574457e7a8"],["/categories/iOS/page/12/index.html","69b85cff3163ddf1b4b07dcc7df421e0"],["/categories/iOS/page/13/index.html","d14f482ed4530fcd41a1b62c5e0b2712"],["/categories/iOS/page/14/index.html","f0a683560ee9a2c91b5824b3422b2bba"],["/categories/iOS/page/2/index.html","fac02c5372048218ad7e64d8f82902c3"],["/categories/iOS/page/3/index.html","8b0a12d2a44c27fc1a2f7321f9f031d3"],["/categories/iOS/page/4/index.html","f9a8c6750c1ab9d053bdf2c8ad62b6ca"],["/categories/iOS/page/5/index.html","f0d127b99b0928fde401442c46fa5894"],["/categories/iOS/page/6/index.html","e74e35fc9071e3572309f1cd1219f2e2"],["/categories/iOS/page/7/index.html","27f0d04c1dedb538cfa9073ce6d196fa"],["/categories/iOS/page/8/index.html","0b99558f5c9cdc1c2a8aea2305433a41"],["/categories/iOS/page/9/index.html","78cd6671da22814763ffa8a754b6765b"],["/categories/iOS面试题/index.html","1b8e026fae7f872fd359ea1b10228d23"],["/categories/index.html","e2fe47dd4db1b4b89e50d3ac85f02f93"],["/categories/random/index.html","322941be33c1223630ec2ed73defca83"],["/categories/三方类库/index.html","03dee1dbb1c18e7b4515c165197b08d4"],["/categories/函数式编程/index.html","c981fca8bfe7434a271de49fb57dfc65"],["/categories/子类化样式/index.html","73e91df45d4b444bfbf2c1008f245fe4"],["/categories/开发技巧/index.html","cd1dbbe9548c3a87951e1fae5d94bd9b"],["/categories/开发记录/index.html","5abb63848b0a14eafadc50807d0e4b2c"],["/categories/数据库/index.html","015f676d5a339e2617b91d6d95839367"],["/categories/架构设计/index.html","273a269f812baee2212cf3b6d2a7681f"],["/categories/测试/index.html","2dc4410cea57d67faae796042eed1145"],["/categories/用户体验/index.html","99ea8d61fe381e59b9e88cf315cdde2d"],["/categories/用户协议与隐私政策/index.html","ca1da4451341283064000e38c80c4cea"],["/categories/设计模式/index.html","abac66f625c55399e9a853f00450f42d"],["/categories/设计模式/page/2/index.html","8941029f712ae7c912e70949db3bc9f1"],["/categories/设计模式/page/3/index.html","c5d5c580d0ddd791e85b834afacdf5cb"],["/css/main.css","8f781c2ade46e1cc5d1f40803a751d8c"],["/hexo部署失败/index.html","e55d3f24eafdd46b4b74099eaccaf32b"],["/iOS 15 适配/index.html","f65996268dad3e1d9a726da0175a4b88"],["/iOS VIPER架构深入实践/index.html","772811932780bd940f82fe1c1b106a99"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","fa69826fa22f9857643b592ad24b94f8"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","cfe7723554d21802e301d07ebaa9d8f3"],["/iOS 自定义视图，输入表单和错误提示/index.html","6f1333e5607caa7a10e2ecbbce16ae32"],["/iOS如何使用iCloud文档？/index.html","64725a717920c45db838b474fe477472"],["/iOS子类化样式/index.html","addc0d906983f3a65195e9ac38845288"],["/iOS开发记录<一>/index.html","9db3de0c5b04e1fcd9875c6db065e511"],["/iOS自动化布局编程/index.html","518701fa715775805e0f44bbe090bdef"],["/iOS自定义转场(By Swift)/index.html","4e6e650e8016594f109599205ebd4508"],["/iOS项目架构：使用VIPER/index.html","daf2db7ffe8a1f561e2ab3bfb7a17fb8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","237caa07c3f080d9e7616efb3595695b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a8c5472bd9daffa052c60dab1766afc5"],["/page/10/index.html","942c12d642a006558d65626b811c9b7f"],["/page/11/index.html","72d0651b6c2b96be3b7648314e6c2966"],["/page/12/index.html","0aa1726575c21fe39bea35fceb99a87d"],["/page/13/index.html","3406191fe8285df602b0c44e3db27100"],["/page/14/index.html","bbcb8d9b097f8e53f45a375dbdf3267b"],["/page/15/index.html","c86c92a9aa9f9322bcd33385ae510522"],["/page/16/index.html","1e0cf9f440104409f714db7b2a19c596"],["/page/17/index.html","63cfb8725b7566c18ed2e3741b4dd034"],["/page/2/index.html","1fef7dcd19b4087de9590ff562021f55"],["/page/3/index.html","ac4fad1b0f6d622eba175752506a1194"],["/page/4/index.html","89ea97c2263dfffb83d84d0c9dc2c09f"],["/page/5/index.html","f6651d5cf4d5296739309da999818956"],["/page/6/index.html","6e3f25c6ac741f9ec05acf6d812b92ac"],["/page/7/index.html","4a1dea4d00313f215fa59983c0b784d0"],["/page/8/index.html","bcc0f98c54ce487867f0926ba0d6dd13"],["/page/9/index.html","63e132688bf298d3fabe994ccb20a73b"],["/schedule/index.html","fc3566eaa3b5aa10540fdecbf65d8477"],["/storyAppPrivacy/index.html","4a10ead7161093bb2dde2ddde67dd78a"],["/sw-register.js","9f5a0cb94052bbc26288fa709df098f7"],["/tags/Advanced-Classes/index.html","0c47a4c9cb04786fcfc2aec3fb43ceb9"],["/tags/Advanced-Swift/index.html","bb904016dca5ab4973aac7a11c113e61"],["/tags/Advanced-Swift/page/2/index.html","a2d0fb3b02cffc9e1ad187bd67fbbdc4"],["/tags/App-Architecture/index.html","30a925d7cbe0d319d0bfa6f96abcb9ff"],["/tags/Array/index.html","86772cab60119ca18d735c080bea0a36"],["/tags/Arrays-Dictionaries-Sets/index.html","ddca8559cd14c909d3a0b087f433779d"],["/tags/Authentication/index.html","da90751a0f5162ea519c52646f19df05"],["/tags/Build-in-Collections/index.html","acdfb30843dbef86ad0bf45a5f5642a8"],["/tags/Building-Your-Own-Types/index.html","1751017e660d1bf30768d55724883f7b"],["/tags/CMS/index.html","61e8fe9b5c7313f8899ec6969dc3a47e"],["/tags/Classes/index.html","f134b760429e02aea0caa8394ebda2fe"],["/tags/CocoaPods/index.html","155e7501ead6070ce062fed0459c88af"],["/tags/Codable-protocol/index.html","8134ac039f0d43926d4d0bea0e3cc68c"],["/tags/Collection-Iteration-with-Closures/index.html","f5df5e3c40a6ffde1bd2aa90b52d8e36"],["/tags/Collection-Protocols/index.html","0178b91bf83a6c95c60ba09b3eb25e2c"],["/tags/Collection-Types/index.html","b50c3631f47ba49a671ba06962ad8d5e"],["/tags/Collection/index.html","358f6d3dc2a57f91130f028ad80cbf56"],["/tags/Collections/index.html","3747877c17ae0ee2e653d07ddf23e324"],["/tags/Combine-framework/index.html","5e484c2133fba970b464e907119a0f86"],["/tags/Combine/index.html","31c8b85f09b620d1dfc07616166f44ac"],["/tags/Dependency-Injection/index.html","3984195be553eb8d9873d6df645484c4"],["/tags/Encoding-Decoding-Types/index.html","e05ec750e110e82e4873ef554c39c972"],["/tags/Encoding-and-Decoding/index.html","2813ba98eaef74d4cb7898e251dd96ab"],["/tags/Enumerations/index.html","d58139421cf9a40ddd78a968653c033e"],["/tags/Enums/index.html","613aa1aefd0fb5e6cbca3592377fbe51"],["/tags/Error-Handling/index.html","699bd6366c7b26bfd77ef0c40ddb156e"],["/tags/Functions/index.html","81613056098e7e9787d922e499fff9fc"],["/tags/GRDB/index.html","4a06a5ed11646662bd7295022bd6137c"],["/tags/Generics/index.html","6c58f5d1bcb7a2ff22f3ccbffdaddd85"],["/tags/Go/index.html","2ebf2075d6125b1950cec092e32c50b5"],["/tags/Grand-Central-Dispatch/index.html","b0043193f7eb11004b174920f140b524"],["/tags/Hello-Vapor/index.html","47cde693740e8670b036fe16d0baa2e1"],["/tags/Homebrew/index.html","7e6323fd69e3d641c1306efafd9aa389"],["/tags/Interoperability/index.html","8fc01f562b0633947eba7e5129c16710"],["/tags/Introduction/index.html","9e94daf33e272fe9279dd0185bc7a54e"],["/tags/Leaf/index.html","6c30e139056f33163836670957448659"],["/tags/Linux/index.html","873b8026dabf306fffbcef28e919bcb4"],["/tags/Methods/index.html","011979b1c612f9278bc328faa4a24a27"],["/tags/Modules-And-Hooks/index.html","d0adbe02a29be8c658a92e1a0bf2da4a"],["/tags/MySQL/index.html","da3f5bbd4ad5d426bea42c3d3ab05389"],["/tags/Optionals/index.html","741b70898ba54dc11ec161dbf035df3d"],["/tags/Promises/index.html","396715a1b0c5a5dbcb3b795160a8775b"],["/tags/Properties/index.html","cfcff0f48e9424aefdc6d09bd0236aa6"],["/tags/Protobuf/index.html","1de311651b202834e8d9418d101f862a"],["/tags/Protocols/index.html","a1db94bd519dc686dccb143bd0054da5"],["/tags/Result-Type/index.html","a6f9034a7bf641e6bd4ed3c8a56042f0"],["/tags/RxSwift/index.html","f7bd78a408ed443bcf9a78b51ff6e91e"],["/tags/Server/index.html","20faf017b89efcf711b0c87aa1d8c72c"],["/tags/Session/index.html","14d86f796742320d8b031e6c55b87d8d"],["/tags/Sqlite/index.html","0372764ff363d771b1da9f98232ba9eb"],["/tags/Strings/index.html","788a8d8195a844f0df66588490a93600"],["/tags/Structs-and-Classes/index.html","bbc66872ddabc7f62865d25fab3e4dde"],["/tags/Structures/index.html","076294adef4e1e4f78a50a6a74b9029b"],["/tags/Swift-5-0/index.html","2f7fe06d2354724d66b412ee58964ec8"],["/tags/Swift-5-0/page/2/index.html","9fe370a7975a73d039573eb059fd7a93"],["/tags/Swift-5-0/page/3/index.html","9aa73cc208adac4d87e3681dbffc7d91"],["/tags/Swift-5-0/page/4/index.html","a6e52ea503b97e7aa178e4848ac6f0e5"],["/tags/Swift-5-0/page/5/index.html","a8c803f3b3285b1eb62c9dcd84401776"],["/tags/Swift-Apprentice/index.html","990a116736df6dae474514429951f842"],["/tags/Swift-Apprentice/page/2/index.html","e6d0329eba5a3754a6dec4219375e5a1"],["/tags/Swift-Apprentice/page/3/index.html","e509a294fa8cb4516cee635b12c41617"],["/tags/Swift-Package-Manager/index.html","8f402af966a72caa212eba1f096e1a10"],["/tags/Swift-源码阅读/index.html","524ceb1238918e483c0b3073ea81d119"],["/tags/Swift/index.html","c0c2b3d1c1f77b6d5fcf40d653c17e52"],["/tags/Swift/page/10/index.html","8d2e99651803de1626204c3d6c5ed63d"],["/tags/Swift/page/11/index.html","aa07f17d0e527f4966c5a92be3d7a89d"],["/tags/Swift/page/12/index.html","a7b53b1a27b6a88f9d3a25b658715431"],["/tags/Swift/page/13/index.html","c8a49187d567b434e3fd8e172c19a709"],["/tags/Swift/page/14/index.html","a19d7a37d644dbbe07c2ce4606a5587a"],["/tags/Swift/page/2/index.html","e0e3666f0220e0e70518086a7f49a329"],["/tags/Swift/page/3/index.html","95cf6f17f4c09d8681f8421554a7042f"],["/tags/Swift/page/4/index.html","2e3d0eefff11e5bc59d41331af706a5b"],["/tags/Swift/page/5/index.html","4512b19040142d951deffc0d4bb2d413"],["/tags/Swift/page/6/index.html","bf9c8db383487ff4a8a1645f4d8c3eaf"],["/tags/Swift/page/7/index.html","8dcfed45a0bef1920a652c363593609d"],["/tags/Swift/page/8/index.html","710f234106d9fb3f0eca181a487847cc"],["/tags/Swift/page/9/index.html","0d2af63bb0c1e227b3d0f46b911ccdcf"],["/tags/SwiftLint/index.html","cb723f4cbd777db310f031fc1a4bc268"],["/tags/SwiftUI/index.html","2855ceebfd778fce8bac861c57d02883"],["/tags/UICollectionView/index.html","b9dec8b9f4ef77d79dd3e659d62507bd"],["/tags/UIColor/index.html","72edd16bf408e5c8f961c5f114b68cb6"],["/tags/UIImagePickerController/index.html","e9b061514335e7e876221231b1f4c6ba"],["/tags/UIKit/index.html","acab07c518056a50260cd6d5b1495b54"],["/tags/UIKit/page/2/index.html","e176fa7e0abfb26cf93be75f78dfa182"],["/tags/UIKit/page/3/index.html","d3a1a7ee4d972c97890c95c395b8d192"],["/tags/UIKit/page/4/index.html","4d7118ac907805cd4333f7bd5a6b3f36"],["/tags/UIKit/page/5/index.html","b2b3faee99563c23a4d5419017cdf593"],["/tags/UITableView/index.html","a4a4dec0fcef3172e39b1c902afb5995"],["/tags/Ubuntu/index.html","d5a53ac4e4fb5cd4a79a25105d52b85b"],["/tags/Uniquely-identifying-views/index.html","ea884880c65783a5ef2d8403d0cc2145"],["/tags/VIPER/index.html","327b0a4a912f1f7eb6aaad28ae3c636a"],["/tags/VMware/index.html","d0fef2f56ec6bc586bd0c0bd9abc157f"],["/tags/Vapor-4-0/index.html","745a220725d65b5f8f00e6637c6d1611"],["/tags/Vapor-初探/index.html","c94e47194588af6db3cf0685874ca1ab"],["/tags/Vim/index.html","2f4ba36930719ad9941840cc5ba7e183"],["/tags/WKWebView/index.html","5ab2ddb43f18b5b273602c4f832dc786"],["/tags/Xcode/index.html","5f53fa04dbb503fa40c1827f9dc0f0ba"],["/tags/appleOS-Networking/index.html","ffcd3d7d5736c7e030658e69a03c4e36"],["/tags/bugly/index.html","714b840c9b805ee58c8926902183b8a0"],["/tags/enum/index.html","4f8c1317222255308fffbd6e8c376bca"],["/tags/git/index.html","aa231e8ff928b7b29cd5c606295d3f9d"],["/tags/hexo/index.html","9e3b7489c4233fbfbfa07257ff1e7885"],["/tags/iCloud/index.html","4c5b44f3bedce127a14796b7bb512be9"],["/tags/iOS/index.html","3f91c5a6dd84b1471d37d0fc391e5a4b"],["/tags/iOS/page/10/index.html","5fc30414c786b3caa936465932515f8f"],["/tags/iOS/page/11/index.html","6408df3f136dea4f782eb8a5a6280175"],["/tags/iOS/page/12/index.html","b8837ed3106cd872fd6f62d709c7ddcc"],["/tags/iOS/page/13/index.html","51fb55881a862123c2347a85df43fd60"],["/tags/iOS/page/14/index.html","380e84c23be8a551419aee4913c139b5"],["/tags/iOS/page/2/index.html","60ea5fc0042278564d89540a07bcfdb8"],["/tags/iOS/page/3/index.html","d99aa1e68530bfeb6ffc13bb3b189011"],["/tags/iOS/page/4/index.html","6e875209a6ba2ffbb0ae7e29df89e581"],["/tags/iOS/page/5/index.html","b821debba621ca7ed0636ca2340f78f1"],["/tags/iOS/page/6/index.html","ddd8a316bbe66935a6788c66a6e5dde5"],["/tags/iOS/page/7/index.html","a4053c283c8d2f604435df7e887a0fcc"],["/tags/iOS/page/8/index.html","abd13d32fe385d24501d3e3644d77d37"],["/tags/iOS/page/9/index.html","52978b2ec97fea3848204fe1a33ad5bd"],["/tags/iOS面试题/index.html","9b57a25a60618b1e6ba847df6c4e8e19"],["/tags/index.html","05a9da831162c747bdf85aba924a4b36"],["/tags/non-optional/index.html","4dce1f039764e3841a836d4ab7ff6a28"],["/tags/random/index.html","41481ba582a4983274f1313c7e5dae78"],["/tags/transition/index.html","8452b979e52bb0a53ad79cd9221dad20"],["/tags/三方类库/index.html","871024e90d06363bceeb2dfa090304f0"],["/tags/依赖注入设计模式/index.html","08ee64722d25304ba4eae65683473df8"],["/tags/值类型和值语义/index.html","b0fd55760292b0234fc3d6ea13df3c0f"],["/tags/内存管理/index.html","7beeee3e1ab2e61b125c8b5569caa1f5"],["/tags/冒烟测试与回归测试/index.html","3b25ebd8f951f2a6001f90f9c76def67"],["/tags/函数式编程/index.html","06e8b3aec496640c5d20908da54db2a9"],["/tags/创建博客数据库/index.html","ce9226df9dbaa65282a6a874b7b8e5e6"],["/tags/初始化模式/index.html","7c9387d0f793d1b18a71c97667604057"],["/tags/单例模式/index.html","7006d3f43012c1e6fcb43527d1e0446d"],["/tags/原型设计模式/index.html","642c9f7b64a18e1560c6af588081d157"],["/tags/命令设计模式/index.html","e159da1fe10218a6c62db9e89bec6604"],["/tags/基本控制流/index.html","ee3941f98273010da1759665beaff2a4"],["/tags/基础语法/index.html","6bf195fee38f907b4a90370eb04bef97"],["/tags/外观设计模式/index.html","c68709debe72dc247065012e679b9373"],["/tags/委托设计模式/index.html","c5955f766794d9270696082ed6b002b9"],["/tags/子类化样式/index.html","25f1ad0bca377d0f6ed101a28a0dabae"],["/tags/对象池设计模式/index.html","2fde230cb6bdbd3f957a93d3126f0228"],["/tags/工厂方法设计模式/index.html","323cb394be2e408e5e3b5379125f579c"],["/tags/工厂模式/index.html","38007527bddefbc25be59591d5815358"],["/tags/工厂设计模式/index.html","515070529316d8908e15e3104aab316d"],["/tags/开发技巧/index.html","7416c6d00e298b45f6cc3e3e69d40e1c"],["/tags/开发记录/index.html","aa4506a46dd0171fba7369e34e63e649"],["/tags/懒加载模式/index.html","ed48d5f38f43ef9498afb1783e035ec2"],["/tags/抽象工厂设计模式/index.html","65e47c8d588bcbe62fc72d66217be409"],["/tags/数据库/index.html","2db2b69f567fdd36fc1e4b193aef304f"],["/tags/构造函数/index.html","a95c5a3a15e4f215ae6b97b6d9b383e6"],["/tags/架构设计/index.html","1de0ed57059e252e6ede1154dfb7b02a"],["/tags/模式匹配/index.html","d4e2097a315d62206de898737f00710b"],["/tags/环境搭建与验证/index.html","668d61b6c17905a43e251d3fea09932b"],["/tags/生成器模式/index.html","f1acc590cb7fe258e91e87457b7efa56"],["/tags/用户体验/index.html","9cfd4a7f1ad978221712ad66cadd5ac6"],["/tags/用户协议与隐私政策/index.html","b1bc87ad4c2a20f57e0e4d021162933d"],["/tags/类型与操作/index.html","62a14860d77b34117e0ee235f2b4d1bb"],["/tags/自动化布局/index.html","638d80a00507c950188965aade18ff50"],["/tags/自定义UIView/index.html","04136a429ee2dc67fca2ca88cdd38d42"],["/tags/自定义转场/index.html","058125cccee7afabea82dfa62153bd39"],["/tags/自适应布局/index.html","4636d7b94863e502202ceaebf5bf3ae5"],["/tags/表达式、变量和常量/index.html","bd647bbe0de5e9771197a41a38ba37a9"],["/tags/设计模式/index.html","ab88f395030a83f211f3d08140136336"],["/tags/设计模式/page/2/index.html","a353368e17cf391abddeaadff7279201"],["/tags/设计模式/page/3/index.html","4efdbe9d4978e9c485549914861775a6"],["/tags/访问控制和代码组织/index.html","94532a67e1085a25583367ab2ca2a957"],["/tags/运算符，下标和键路径/index.html","b76b947394251b822253b6b659d2aad7"],["/tags/迭代器设计模式/index.html","91da1907eddadc3a9fa92e752fc2904f"],["/tags/适配器设计模式/index.html","645605969e1b4a0978c266445ba85c40"],["/tags/错误处理/index.html","7d104b459dfacdc6dbca574b56244f50"],["/tags/静态工厂方法/index.html","23c418375abc6af2fd346680412ba047"],["/tags/面向协议编程-OOP/index.html","07060baba99cf005241c638c76caf05c"],["/tags/高级主题/index.html","f916169bb6e9f9dec8618620f99da995"],["/tags/高级协议和泛型/index.html","74ee694dbaaf183df1a3281ff5e45c2f"],["/tags/高级控制流/index.html","07261aac4da587a1e0e897820557be42"],["/xcode 常用的快捷键/index.html","a939e637ad317e1dba595dd18ba7f219"],["/为iOS应用构建输入表单/index.html","ca1ab0b4812af4c81f572d9d59f7ce48"],["/产品开发的幕后花絮/index.html","4cd150e2314074161b32d2fb60f05d8a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c882a64dbc66d4339cbf046efcd558cf"],["/冒烟测试与回归测试/index.html","f9d8ebdedf3002d74cf143f4a1ae9b48"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b16f706e1e6c5466f04b2f9eec94a870"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f5280ab193b2a5868cae7d33a775797d"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","031e04fc2c80cd85e51acfa7200d7afa"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","65a364822141ac83edfd9a431f82026d"],["/在Swift中创建自定义集合/index.html","cb542f9da59d750a231db4f4117d9e0d"],["/在Swift中处理非可选选项/index.html","600969f0dcf2a258b2d2569ac7bd1870"],["/在Swift中生成随机数/index.html","28348f41685ff3ce65bb8bea0c433359"],["/在Swift中重构单例模式用法/index.html","b3e72d2b1290d04263da9df453de9c68"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","6ae68d6d968eb95d27449f5b6539a89b"],["/如何为VIPER编写服务？/index.html","443b0745d45e6d4acd362cd4bb93f27c"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","f93ecfe2a3a42135d2627ec613017311"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","60516eab8c8a7b408ed9da2128b6419c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","e4744cc0c15d3bafae774801ec1e1a0a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1c34d3a7dfca7b391cbe42482de3d667"],["/掌握VIPER架构/index.html","916f2cf3896192361191d9eb4463148a"],["/揭秘 WordPress Hook 系统/index.html","8bab9a9ff7e3af42427b5da7489ea359"],["/比较工厂设计模式/index.html","8348ea92199d2c53d45e4ed824e08484"],["/深入了解Swift中的Grand Central Dispatch/index.html","1874acd8b51484a02fa9210892b7e484"],["/深入研究Swift框架/index.html","3bd01c4a523aabc7c99921ba1ff3b097"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a91cfce52f9132eab40308beea7f9ce3"],["/选择Swift而不是Objective-C的5个理由/index.html","9444497a10cd3dd3366df218069e6a12"]];
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
