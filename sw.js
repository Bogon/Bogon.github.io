/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","03896b57a4fe9c3c1b48bda59f2b8292"],["/2020年iOS面试题总结(三)/index.html","a7a1c554ea840794804ae271bf1cc043"],["/2020年iOS面试题总结(二)/index.html","e643446fb510b8da10873a9973eb0833"],["/Advanced Swift系列(一): Swift 简介/index.html","45824479dd493faf73cf93318e71fcf9"],["/Advanced Swift系列(七): Strings/index.html","3dce66aaca12004693e73b194b016f36"],["/Advanced Swift系列(三):  Optionals/index.html","26e48cbc51283fb5876c41891b3f9273"],["/Advanced Swift系列(九): Protocols/index.html","65958589ecc1eb913afcccc057984382"],["/Advanced Swift系列(二): Build-in Collections/index.html","eac40ad94103c182122997ce8a809b91"],["/Advanced Swift系列(五): Structs and Classes/index.html","62d39e75130667b3d5b50638fb4f0f43"],["/Advanced Swift系列(八): Generics/index.html","93c11a10c1a5934c4e633fdd9ba04006"],["/Advanced Swift系列(六):  Enums/index.html","62b3f306f1d8b9210df709aa8c056fad"],["/Advanced Swift系列(十): Collection Protocols/index.html","70d3e338a0ff4e5e2c67eb138e60e86f"],["/Advanced Swift系列(十一): Error Handling/index.html","d9cdf94285ab21a63e070d303d5f83f3"],["/Advanced Swift系列(十三): Interoperability/index.html","560580620e149c7860fc21f2f1ffb6d0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","eacda592b71ce164298ed2d5d986cc58"],["/Advanced Swift系列(四):  Functions/index.html","30aeb604d39ca76fe10cca5e1f52fba3"],["/App Architecture系列(一):  简介/index.html","cacf61d2c803e0752a0b3a2bbe12b0d7"],["/Functional Swift 初探/index.html","501af3b932bdeeb87d54fab1ce9cc0c0"],["/Git 使用小技巧/index.html","8b1bc5a1ea0af01863f238f82445751a"],["/Go mysql Tips/index.html","b499cb0818929b4171bf3755c7f9e5cb"],["/Go 基本语法初探(一)/index.html","4647278b9ced28353d7d2c60287c3a9f"],["/Linux VIM 命令及操作小结/index.html","3cfbb173987aad14b988dde9ebfd1bd0"],["/MySQL 基本操作/index.html","80bc42cf2fe6fff155c383ddfc7a9a2e"],["/MySQL-列类型和数据完整性/index.html","6d6215facb98a621851cc9d89965113e"],["/MySQL-数据库设计和查询语句/index.html","cb1f1811acfb8e01bc5cca3125507446"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","757528b2548dd809aff0ff41449d762b"],["/NSCODER和SWIFT初始化/index.html","37c93c7e7328db13514ea60f488ab636"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","726fd0c82138391ca4772cee8763e4cb"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","cb874e761fe05c4eb6e83032133a01a6"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","a3b6cf6110830b5f6c898942ea7b352b"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","c9b6bc3918cae0d745e505f9c4f0c810"],["/Sqlite 使用Tips/index.html","934dc530deb4b6ae526714071513c3d1"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","848be2f29eb9c2142c546e3f7b6b7c00"],["/Swift 5使用UIImagePickerController拾取图像/index.html","980c9090a3dfa376ab441b866515450e"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","fc2efed7a7213bf3c14c4dcaddb023f2"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ab6e4b149ec2dee03629a25eb7b480ae"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","c82e8ab296adc0ae61a47658292ec5ca"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","923fc8c3c881e0cb391cc139804395b9"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5e46b77bdfc7c68d1875662626ec1623"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c99c3824591827aa0baa7e67f411a8d4"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","a4f2d5a325905d7393b52f0a2869a621"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","471f76b6b9fd47566f525e52b64ec944"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5bb44d298bcd8de6339196ff7f057466"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","9057037974f7fad1606012d4dbb7438e"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","c7317f399c1a2e2bd5d45a2f075282f2"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","549e79279a9adbad5c304cb85187ed26"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","e58e3d0393238e1cc101dead107ed0be"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","41ca1edaebc22b134aa6c83c5294f245"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","0666d4e351946bc8841e317126f6404b"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","318c0a84bbe6b362ae13490b52999ac3"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","8404b408fc283011cf0e5bc3e9e338f2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","084ae979afe686c3ac0a24618ce527cf"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","a8a3e81bd8211fe5487517f9b744306c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","c02eed95fae85c2eb6e51d110fbf9650"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8d087931abd7fe971aeeb2fa97e7b5a2"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","325d226fec1bab5cf31a86b5fbdf78b1"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","7faed3dffc8ddd2a004e6ea9b7dbc8ac"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","761b1d6eb1d08ecea68d69ebf109ed3d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","ffc3f2a900bbc582a3728d13eee0d472"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","345b9b1f8ace5d6d4006ef6b2863b23d"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0af863566d8bb80fa9d7d3fe2185540c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","3f3746ee0dc4a4170f6968e0a6e99829"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","deff9fdab27ccb3e7f7003f2a020bcec"],["/Swift CompactMap vs flatMap：差异说明/index.html","13b0a5cb44890297bf9b5af6b44e25c3"],["/Swift Grand Central Dispatch 深入实践/index.html","412b8b2e86fb8c24e588d3ee02702390"],["/Swift Lazy属性初始化/index.html","bf38166fbf6371c53d7838b87a90ef1b"],["/Swift Promises 初体验/index.html","22e3d0dc1e84ded2a6b0c45e00c020ae"],["/Swift Promises 探究/index.html","14efb290c918685b192b791aa549382c"],["/Swift UICollectionView使用指南/index.html","a72bbf1f8878faec0b6dad008d50083f"],["/Swift URLSession && Combine framework/index.html","b98075c47840de0a26e83198913d2d58"],["/Swift tips/index.html","8c2b43ac4c098d6488736a0441c9d505"],["/Swift 唯一识别的视图/index.html","6cdec032fd4c46a40a8e9492638b020d"],["/Swift 如何学习现代UIKit？/index.html","cd4b371492da4ad0a5a376d484c3bdf7"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","55edec10d6768566ee3b5dcd0d41c8b4"],["/Swift 用 compactMap 替换 flatMap/index.html","fee39f12f11b62541f59d95aa13a68ec"],["/Swift 选择和播放视频/index.html","a23348c9e5605a66e73b631c69d878d9"],["/Swift中UIColor最佳实践/index.html","35954093607ec6906d987b8793163ff0"],["/Swift中快速简单的工厂设计模式/index.html","813e99d3e08980cf1a7614093b38f3bb"],["/Swift中构造函数与静态工厂方法的比较/index.html","bb661f9b191edf5e71aea3b7bd1eb0ac"],["/Swift中的UITableView教程/index.html","fa86aad6e57613418fe1ffe7745f0d62"],["/Swift中的懒加载模式/index.html","017411865f036377eb13d4ad0d69b01d"],["/Swift中的模块和挂钩/index.html","eeea1e2961259df19681b873f9927577"],["/Swift使用布局锚点添加约束/index.html","8b0acfc5d24036add2cd95110dc7db8c"],["/Swift依赖注入设计模式/index.html","d587b4081c61894616599b3e5a2a7e57"],["/Swift关于Dependency Injection (DI)/index.html","6cd67cf2f40a75bf90f3e02f1e3af9b5"],["/Swift初始化模式/index.html","a7a7debe41a56b27c3e6dc84bd4f5ae9"],["/Swift单例模式/index.html","9f6763a9a6ece2e7c286fb6114a48d63"],["/Swift原型设计模式/index.html","19ddf2e55f97e6c149d7527877bf38b2"],["/Swift命令设计模式/index.html","32fb44fc4b7da6cac369431861ae2386"],["/Swift外观设计模式/index.html","152c2dbc858a18d388d35e6578aeaf0d"],["/Swift委托设计模式/index.html","a82a24de658295135e825814e5b2112d"],["/Swift对象池设计模式/index.html","953beab2555fc5817e1eb5383fa6edb3"],["/Swift工厂方法设计模式/index.html","09883139556dd8fe179216055a1aad2c"],["/Swift带闭包的懒惰初始化/index.html","a0d54210678507b8b1b04dca430e2e0a"],["/Swift抽象工厂设计模式/index.html","a122dbc63f70dccfa770a4628eb77d60"],["/Swift掌握iOS自动布局锚点/index.html","ca30e4e15c8a33fccdc1611f68af9037"],["/Swift支持旋转的自适应单元格/index.html","fa171dce2d1b59d86a867bfa787b5c23"],["/Swift枚举值/index.html","f76bbaf0d99f44f6b67be258eed1287b"],["/Swift生成器模式/index.html","e72607d2a398dd9db0370a33e011bea1"],["/Swift结合Xib文件自定义UIView/index.html","5ba20ab57231437330669cf11e016f5d"],["/Swift编写的20个iOS库(一)/index.html","f49abf6eba1bfc513cd2e945fb2b379b"],["/Swift迭代器设计模式/index.html","f71d81661cc878424a05c6e4dac43d4a"],["/Swift适配器设计模式/index.html","0f9a8676690e6de277b4d5a953b90f9f"],["/Swift静态工厂设计模式/index.html","5cf4cb0196862fcfb0b0260405f7979e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","a5ca17487f8d0e9ded6283d9519d6495"],["/UICollectionView data source and delegates/index.html","de20f67b1a1408f9a78201046c0a951a"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","9af338389581e364788df1d4400e071b"],["/UIKit初始化模式/index.html","8205e0a2fd407d221d9b15313ff94778"],["/Ubuntu18.04替换国内源/index.html","8577d86b85b2f84796f9848911e70a7d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6a1bc0fc5341115c0ece9381fde61882"],["/Vapor系列 (一) :  Vapor 初探/index.html","a5446d6f29aeaf7d1380dbd85036ddd3"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","baaee1cefd1e8d193cb6e9478b4811f5"],["/Vapor系列 (二) :  Hello Vapor！/index.html","acae4de44fce46090e0eb5a3112c5353"],["/Vapor系列 (五) :  使用session进行authentication/index.html","447ff8901f3a9b6c890161d43fb0de28"],["/Vapor系列 (四) :  创建博客数据库/index.html","1926b0c89b5c101103ec7e248a4b421d"],["/Vapor系列(六): 徒手撸一个CMS/index.html","74f61a7a2da3de5e364dbc046b00bf02"],["/WKWebView与Native交互注意事项/index.html","30663ea3a588ac8b693cdc9e68c6f5eb"],["/Xcode扩展/index.html","c74929a6321ff2e5fc8a8464f1097d60"],["/about/index.html","4367e61a9401e9a34f58d779543fde30"],["/appleOS的Networking示例/index.html","9fa0b85357f6c037036aa198e291e524"],["/archives/2020/03/index.html","02f78a5e7b85dd19e743dbd686d99915"],["/archives/2020/04/index.html","ff289cbf52fdcaa2254ddb0bfd6dcf7c"],["/archives/2020/04/page/2/index.html","be64a1ae0d203f01a2919a7683298b9e"],["/archives/2020/04/page/3/index.html","74f28db3aa4637bce41b5f9b3fb3ae9a"],["/archives/2020/04/page/4/index.html","7c3bc67acec415da4d339e9a8055b22f"],["/archives/2020/04/page/5/index.html","11efc2e2535302f3ab414763c7546640"],["/archives/2020/04/page/6/index.html","cec348d989ff199a3e022b1e490bfd73"],["/archives/2020/04/page/7/index.html","947b2d9a34563b8dfab971b421408fd4"],["/archives/2020/04/page/8/index.html","674d1e05ba2944cda51a8428c85f2d62"],["/archives/2020/05/index.html","6c382519f80c257c402fd22634bf3fda"],["/archives/2020/05/page/2/index.html","c44818f8b20f1fa69a990c3db60bdb93"],["/archives/2020/05/page/3/index.html","d90d53a36ad04c302c9535f950fb08b7"],["/archives/2020/05/page/4/index.html","6c39f13bc173998b1acca87367983a4a"],["/archives/2020/05/page/5/index.html","443d013b98e8f5212b5daee699560cb6"],["/archives/2020/06/index.html","34ee9bfd7db26af327dd3abcce9a5857"],["/archives/2020/06/page/2/index.html","65c55bce76bf344774e1dd0150c876c5"],["/archives/2020/08/index.html","d82423c5450e36d2e81e54f885f968d4"],["/archives/2020/09/index.html","26f40b9f8110f9ddc359ad370df0904e"],["/archives/2020/10/index.html","18568ef92d9d4020ac13bd7aeb6fac3d"],["/archives/2020/11/index.html","06c1fb4351efc95e094e716b5e222f29"],["/archives/2020/12/index.html","90e6bda62a469a6fc963608d41c9a720"],["/archives/2020/index.html","a06d85bdbbe84a2046a224fa2372b84f"],["/archives/2020/page/10/index.html","5742341fc35c5f58eeabc5b606dc85f1"],["/archives/2020/page/11/index.html","2341c0aba2b911d67bba9a0dce2caeb3"],["/archives/2020/page/12/index.html","55764cfab99b770c48095eee6837c03b"],["/archives/2020/page/13/index.html","6a1ceb28e564a718567e25b04012a785"],["/archives/2020/page/14/index.html","a19c84a2adeb84d660ca75e02a48fef8"],["/archives/2020/page/15/index.html","0281b99931db64999167de096c353b57"],["/archives/2020/page/2/index.html","f850695ccd30bfba71321e89833c5600"],["/archives/2020/page/3/index.html","612f69b9d3be1a23a2c7fc009d443782"],["/archives/2020/page/4/index.html","dc2030cd2907cefadeddcfa10fb8200b"],["/archives/2020/page/5/index.html","4491ef78aabc7d09b129bc51c0968953"],["/archives/2020/page/6/index.html","3755195ee45e8d622ab09d9cafb5b75a"],["/archives/2020/page/7/index.html","ac63ea35dc93f6c8a7f7132b1d6ff02c"],["/archives/2020/page/8/index.html","96705a4109cf572aa7b82b8005cc3f38"],["/archives/2020/page/9/index.html","8b19fa1635cc3d6f1b390a9650bbaa7b"],["/archives/2021/03/index.html","798d18b3bc89a7e90ee896f70c884499"],["/archives/2021/04/index.html","d78313d230a91dba5b08d76e58c68719"],["/archives/2021/05/index.html","26641eff9c259e3d1b0c7705cc65bec5"],["/archives/2021/06/index.html","1082ca3b8ca64177df1939040808d030"],["/archives/2021/07/index.html","4d0989e6095b01bfe5861af053c4dae2"],["/archives/2021/index.html","2231789cc4d4127150bbe3c2f67b2f70"],["/archives/2021/page/2/index.html","461e8fe48530d061ca5ce6a61d028624"],["/archives/index.html","b13996525886182ee574815c2567e51a"],["/archives/page/10/index.html","e68da96b8fe878851b4bbc8b8d218e72"],["/archives/page/11/index.html","f739a6d79ea59d1347a01d1f22d78b8d"],["/archives/page/12/index.html","7dedfe9740117745e03a96614e7c6348"],["/archives/page/13/index.html","e9dabac5588bdb8e313cb5b679a390cd"],["/archives/page/14/index.html","92a1d407c92d6b2c1ed2f23d596c8bf7"],["/archives/page/15/index.html","086f41e2a0150df41980953017f8ff08"],["/archives/page/16/index.html","8e4ba88ea703781346f76398feaad5c6"],["/archives/page/17/index.html","c608162fc4086988ac43356c6d133624"],["/archives/page/2/index.html","bb1c97a05af963bd477f916d574d831b"],["/archives/page/3/index.html","0931b214edb4b585af7cb7f55a13d886"],["/archives/page/4/index.html","6aae0902af04f9556b6f4d2c5e8712b3"],["/archives/page/5/index.html","5318a15219938f407a458b0b866cd538"],["/archives/page/6/index.html","2e61d49462ee7c7ab638e909edc5aeb9"],["/archives/page/7/index.html","c99309b5e0aa8a8f597a3190af345948"],["/archives/page/8/index.html","0356fff45407dc37908e8f1b68bb92a7"],["/archives/page/9/index.html","61f73af511898f4683b4b14af0caa520"],["/bugly 上传dYSM文件小记/index.html","747b3f2d43fa8da7673361fab819b3a7"],["/categories/Advanced-Swift/index.html","9b4b02bcaa673a1616c631acbb283fdb"],["/categories/Advanced-Swift/page/2/index.html","8d2300e989e84c71c0ddb198cc59cb62"],["/categories/App-Architecture/index.html","714686cd686f26c5fd9ca2bf3cb1d313"],["/categories/Array/index.html","1b042d81f2a10c6d181f95f52ba19cd8"],["/categories/Codable-protocol/index.html","9127e39f1e36f5ec663d0bf71ca75754"],["/categories/Combine-framework/index.html","4a28105478744602dcc3565525b0cabb"],["/categories/Combine/index.html","82348cb12c47fe7bad60e874254a5631"],["/categories/Go/index.html","185c1563fa5bf9235293ccb27b28fd00"],["/categories/Grand-Central-Dispatch/index.html","6695aca27a1aa7fa621ec3b290023e31"],["/categories/Hexo/index.html","9cd4c94355986583c703243660ca1e4e"],["/categories/Homebrew/index.html","4a2b91cb460041618b8e3e2faa5bd828"],["/categories/Linux/index.html","2f7a3dae6f431c2d3423f26ec0363098"],["/categories/MySQL/index.html","cebce5706b57adf25e14d6b55896a9f5"],["/categories/Promises/index.html","ba8d3f3beab44dc24fdf7557050c90e7"],["/categories/Result-Type/index.html","ec5668e83b3ec7d3ff83dc1485e7df0f"],["/categories/RxSwift/index.html","03701ba8369671e7bb20bb0ea1166146"],["/categories/Server/index.html","ca1d96af10cb980714ff543878e0795c"],["/categories/Swift-Apprentice/index.html","69c35be0eb8c66099e8244d3d32b9efe"],["/categories/Swift-Apprentice/page/2/index.html","89884e1483f867359a93d622fec8fda1"],["/categories/Swift-Apprentice/page/3/index.html","effd110803fc6d80625c2e5e0bc27f28"],["/categories/Swift-源码阅读/index.html","db0c85968dd0a7b784c5185b6c296129"],["/categories/Swift/index.html","b117076b5a1f6c31a80999117fb70dd7"],["/categories/Swift/page/10/index.html","86bbd16ac742ceea05cfdf1de151c9b6"],["/categories/Swift/page/11/index.html","1212efa647d18195b4b2b185b6b9b86c"],["/categories/Swift/page/12/index.html","a54b3368b8e3ea4a1466764941d5f75f"],["/categories/Swift/page/13/index.html","95b359a4ba3e21d480ca1fc81f6881a9"],["/categories/Swift/page/2/index.html","679215bdea508a2ef799183575dfc263"],["/categories/Swift/page/3/index.html","24e9765069c9b92c0bf1672ba9b537fb"],["/categories/Swift/page/4/index.html","2ff0aeb5a9eb9e58798545dca2165968"],["/categories/Swift/page/5/index.html","f013a16126e6c39fdbcfaa1e6eebb868"],["/categories/Swift/page/6/index.html","02b640ab0ade10818937ae542a4cb149"],["/categories/Swift/page/7/index.html","dec6b17cd32565cd0a70ceaff6ff795a"],["/categories/Swift/page/8/index.html","dd81e9f803598506e68ea85bd5761bc5"],["/categories/Swift/page/9/index.html","7a04c30e8debacadedc0af7edcf2ae4a"],["/categories/Swift5-2/index.html","f9be65d7d4192ceb5f705307bb251c50"],["/categories/SwiftLint/index.html","1d6fbbc3b697770bbdf07d80143fee27"],["/categories/SwiftUI/index.html","54a4c6b4a5787353399aa2429278e7b1"],["/categories/UICollectionView/index.html","6b86709496b21128be2c42939901f25d"],["/categories/UIImagePickerController/index.html","d83fe8772753428f7853a84fbcaaef5a"],["/categories/UIKit/index.html","1c07edd10ac3bf80ebe1b32d8cb5ac00"],["/categories/UIKit/page/2/index.html","0b30c48d1e10e516e53d706345356e7f"],["/categories/UIKit/page/3/index.html","a726cb748acdc364360f37906c6fb278"],["/categories/UIKit/page/4/index.html","f14e8a7d7e632e02a3e8fa2d1c232be9"],["/categories/UIKit/page/5/index.html","ca5d523e06b7b2b1d517bda3818be610"],["/categories/UITableView/index.html","59dce061ed1c55baf991611c35adb9a3"],["/categories/Ubuntu18-04/index.html","f478635c17c32cf7c5963d814c0dce15"],["/categories/Ubuntu软件源/index.html","48a8c4cc0fbfcb79efd496e922cfc9d7"],["/categories/Uniquely-identifying-views/index.html","1062dfeb3cf794dac0228fde1b85d6b2"],["/categories/VIPER/index.html","ec28f0a86f2f22de2fac232c7d627c58"],["/categories/Vapor-4-0/index.html","b79e7f77fa3a4e4e04e3db9248067c07"],["/categories/Vapor4-0/index.html","0a4a693d7a62e9e58838396667262867"],["/categories/Vim/index.html","0d3bc028ab613422db63e3263f746f7a"],["/categories/WKWebView/index.html","e7dc081e5cdab96de109748f256a393a"],["/categories/Xcode/index.html","4ed29c25227f4fc6dfb734fe528bd8f2"],["/categories/appleOS-Networking/index.html","3a6b8f0bbede2a19ac8b64a397b57d31"],["/categories/bugly/index.html","dd17b411b89c9920faefbf133904919a"],["/categories/enum/index.html","b9386fba72793e73c78f2784e817abe9"],["/categories/git/index.html","fe80e10c04cde819e6f0723838b36047"],["/categories/iCloud/index.html","6408b2bdcb0e3a96a74946c3ef34bdd9"],["/categories/iOS/index.html","7bb724aeac63556f9ce972050714123d"],["/categories/iOS/page/10/index.html","5b3d667571d0ee50131f3f1efd4e51a7"],["/categories/iOS/page/11/index.html","7a4be5ad431da7e2cb32c1da07006c6b"],["/categories/iOS/page/12/index.html","75e78ceaa75550f30426d3763a8972eb"],["/categories/iOS/page/13/index.html","5c9a86ea9d8751ffafce8b3c69295bec"],["/categories/iOS/page/14/index.html","5182f2c8e1f8b59f56c42f2121643976"],["/categories/iOS/page/2/index.html","b51a06ea2de69a8a1863fa88c390bcb6"],["/categories/iOS/page/3/index.html","dda71aeb39db6581ba093056fea3f363"],["/categories/iOS/page/4/index.html","99800ab6aa7015f6466ea38078f0d0d1"],["/categories/iOS/page/5/index.html","ce119f19fc3936d4035cbc78c4f489c9"],["/categories/iOS/page/6/index.html","10fb0cd5f291182014ce7608e88c6e68"],["/categories/iOS/page/7/index.html","076b847a932030842b770a7fc1af0368"],["/categories/iOS/page/8/index.html","fa0cd135f431a9f8b808a6d135e268f4"],["/categories/iOS/page/9/index.html","85cf46b154df06699c85f5c3d68b452f"],["/categories/iOS面试题/index.html","b34768c7ba1234eb722f7985bd15e56e"],["/categories/index.html","438c6dd1a7198fdd072481f964597277"],["/categories/random/index.html","98b6435a57841cad276fab641e860f91"],["/categories/三方类库/index.html","8781d80529cec1853f50adc1ce440433"],["/categories/函数式编程/index.html","1bd51bb728cd92aa7da5c0df04a2f6e0"],["/categories/子类化样式/index.html","e204d24f1b7c08b13f145f61df20999a"],["/categories/开发技巧/index.html","f9c84b5f17b5287084a9c97381b82a28"],["/categories/开发记录/index.html","0e26ed9cc345ad6637333b7abda4f1b9"],["/categories/技术支持/index.html","6065c66415712f5c386aaf36ccd23f65"],["/categories/数据库/index.html","7dea2e574536a8b0b89a469a4547e7d2"],["/categories/架构设计/index.html","001d63ffeb5268d261e54f9bb62d5c6d"],["/categories/测试/index.html","5e68da0dbfc6ee8db02158e690be0a29"],["/categories/用户体验/index.html","71f0da25b1fab4e589f497471971d76a"],["/categories/用户协议与隐私政策/index.html","151c7ce2ca82a2dcbfa4dcea57b031a9"],["/categories/设计模式/index.html","f5c99fa8ab1c42c25745a8ab23ed3190"],["/categories/设计模式/page/2/index.html","89c772a5a22f1199a648b819a64f9155"],["/categories/设计模式/page/3/index.html","71e891dbfcd7961c6c515c8f82239217"],["/css/main.css","e1531ec5bbcfb97f93626c135d788dd7"],["/hello-world/index.html","7a5e5375dd2c2250c12709b03b9d7c24"],["/hexo部署失败/index.html","8a2faef8e73e9836b830253f11e9c9b7"],["/iOS VIPER架构深入实践/index.html","a45da8fe73e8fc80cf12617e5eca7003"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","8ec0209f0b6beead4d61408791be686c"],["/iOS 自定义视图，输入表单和错误提示/index.html","eeeb31c2f2db71b7ac7e75a1c8f38cf8"],["/iOS如何使用iCloud文档？/index.html","caa3b3908f506f9a94c2af3a9a54a3be"],["/iOS子类化样式/index.html","ca66312b3822e10d31a685e302ca3d7e"],["/iOS开发记录<一>/index.html","e72b9c4ce13f302fb2d9ed745f5726a0"],["/iOS自动化布局编程/index.html","99fdc7d6b66a7c6a8516e3bbd296b7d0"],["/iOS自定义转场(By Swift)/index.html","9b46c599748587a92846d86e3239b8e6"],["/iOS项目架构：使用VIPER/index.html","3e02bed4eda57bc6c5e0d5ea04c8afed"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8e6d25f032fcc93691c10ca921c6fe62"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","f223b66b8a6cc9ad32b9907272cb84fa"],["/page/10/index.html","17aca98055fad9ca87480c115d114bb3"],["/page/11/index.html","264aa63419c9a11bc54602785a8f95e1"],["/page/12/index.html","6b03460880327e4ee7047acafab93cf5"],["/page/13/index.html","f8366bf3c87c06c2fc6ba0b13619a71f"],["/page/14/index.html","91e04ae8d657b2185fbaeeed4da2091e"],["/page/15/index.html","1d2a5003c6c53006ecf10e170ea27370"],["/page/16/index.html","109ae56ae032df009da22782f3ed91b6"],["/page/17/index.html","0d5a6dfd85dac6a750fe51a59369d8d4"],["/page/2/index.html","37220cba7194ec031033e3db7b7e486e"],["/page/3/index.html","9748a8fea954c8d5d0ede4f172a2363a"],["/page/4/index.html","d5d7b2f1ff58af2159e1fe1706a27d5f"],["/page/5/index.html","ef523018199ffed407133340933e8392"],["/page/6/index.html","6024f4b0220fc230333df7eff2ffb6dc"],["/page/7/index.html","2ae24e083a611d8840db76fee34f4787"],["/page/8/index.html","caed056dd8e5b97a0d5317acceae886f"],["/page/9/index.html","72c72617575daa30b77472de0bf8f086"],["/schedule/index.html","f0006cb391afba12c35af463db1e1c96"],["/storyAppPrivacy/index.html","0e0937e9f5640933860e48f05d259a5e"],["/sw-register.js","5f4457538d9f0114069b12d9a264da47"],["/tags/Advanced-Classes/index.html","1233107b1a3a93a4e87472a34c00c279"],["/tags/Advanced-Swift/index.html","993284bee3810c63e21d41af67c56c01"],["/tags/Advanced-Swift/page/2/index.html","80e927060f5b38d80cfd1e7713f131f7"],["/tags/App-Architecture/index.html","dc0d5e63bea17dc37cae5e4c56653993"],["/tags/Array/index.html","e38dbbc8ee253b2d658da8a003d1fd94"],["/tags/Arrays-Dictionaries-Sets/index.html","49d4e5c13a771338a75ff3693e82f466"],["/tags/Authentication/index.html","9893e4244fd67f783ecb1f61c74f988f"],["/tags/Build-in-Collections/index.html","82d95ed51bcda5072639d88a2f36b93c"],["/tags/Building-Your-Own-Types/index.html","e3019283cf560d046e531f75685e272a"],["/tags/CMS/index.html","224046165d2d0aebf408aca58308f982"],["/tags/Classes/index.html","fbb95bb93af8c0f2f46a5467111490df"],["/tags/Codable-protocol/index.html","1f7aecd72dab436381beb9caad8c2e47"],["/tags/Collection-Iteration-with-Closures/index.html","668f7951c68ca03b9562f756e4e9629f"],["/tags/Collection-Protocols/index.html","f942ac1e669860da5d90f27bef6f3bbb"],["/tags/Collection-Types/index.html","db29295dffe96ab9316217a59efb11f2"],["/tags/Collection/index.html","96d7dcadd386efd9274151b508664269"],["/tags/Collections/index.html","0aeb1d8b2b47841bdfe8a24ae91ce158"],["/tags/Combine-framework/index.html","67f04c9a14ec3cd40bac191e4cd7a7d9"],["/tags/Combine/index.html","acea7a5f09bbc717a69380023c790a36"],["/tags/Dependency-Injection/index.html","536bfe3e4b623b3d2cbda08729ec14bd"],["/tags/Encoding-Decoding-Types/index.html","4c264d36d208c5f29129fbcbaa0341b9"],["/tags/Encoding-and-Decoding/index.html","7da8ac479a46ee4f8d89aece91b53766"],["/tags/Enumerations/index.html","c62f8dfa37e53357113c6a41fbf319f9"],["/tags/Enums/index.html","1ed684dda32981ab7f802ed3d7954327"],["/tags/Error-Handling/index.html","fbf10ccee75cd0414500db311b8b87ec"],["/tags/Functions/index.html","57b70ef90cb428393fe2306001e26804"],["/tags/Generics/index.html","993a3deca3e650ffa4ee06e25182d3c6"],["/tags/Go/index.html","349e9b13efa439a56c1f6e0a9f29911f"],["/tags/Grand-Central-Dispatch/index.html","eae9ecc20e850875eda53c83e5a119be"],["/tags/Hello-Vapor/index.html","bb807f548f5acc1bdd6353acc1b86305"],["/tags/Homebrew/index.html","73dcdb3ee944dfda99bddab72ed028e5"],["/tags/Interoperability/index.html","9055f5a6134ec827573a323f08efd2fb"],["/tags/Introduction/index.html","a65e0636169845663981d55ce4470fe3"],["/tags/Leaf/index.html","f0b52f47ad1d828404740ee01d58d0c6"],["/tags/Linux/index.html","18f6567d7ca4f78f2efed2f03e81b7a9"],["/tags/Methods/index.html","ffdaefd3c5b5bbe5eccbd8e834903d0b"],["/tags/Modules-And-Hooks/index.html","2a2da603c0811ab3b2cdaf5ecbd83a13"],["/tags/MySQL/index.html","77df230618e8b3552e470f6255f76af9"],["/tags/Optionals/index.html","fc032926c9c35deddd6e5e1d5e364d38"],["/tags/Promises/index.html","43a3713492b8f4f15c4f9b7b78a56304"],["/tags/Properties/index.html","2a83732b8c4b8572509dfbe7770d5719"],["/tags/Protocols/index.html","74ff36f0cca11f3f91fa672bef211405"],["/tags/Result-Type/index.html","cc7d68402db7b57ea35131fa8237bf0c"],["/tags/RxSwift/index.html","a6868fa3f42399aa12602f341b9ade71"],["/tags/Server/index.html","568d7aa29176bd16362da92bc220f81a"],["/tags/Session/index.html","129ffd68b7018e0d6873baf3fe9ea0b4"],["/tags/Strings/index.html","ec9cf51075b34ba723ed32886cc7aacc"],["/tags/Structs-and-Classes/index.html","f737e29d7c864c438189adf1de4842c8"],["/tags/Structures/index.html","9e4d8b8cdf38330ef7700520c8141db4"],["/tags/Swift-5-0/index.html","2625cdfdea9235f2e1f57bacc9748c11"],["/tags/Swift-5-0/page/2/index.html","8b78c73932f33c87249ac4d8fde3c61d"],["/tags/Swift-5-0/page/3/index.html","d3e726f99c72413c62519661524ce058"],["/tags/Swift-5-0/page/4/index.html","d715a7aa9be9b22db50e1f2ef80166bb"],["/tags/Swift-5-0/page/5/index.html","08dcf4d32db21a9bccf3ee7be226aa19"],["/tags/Swift-Apprentice/index.html","b1c86dca5117ade256040a020803fcab"],["/tags/Swift-Apprentice/page/2/index.html","437ff15ffc04b7760618ab7c410db405"],["/tags/Swift-Apprentice/page/3/index.html","e27b9f87a5ddfba3f825a3a82d7af76d"],["/tags/Swift-Package-Manager/index.html","63158cd54ef8868def16df3dbc05c4d1"],["/tags/Swift-源码阅读/index.html","dc3406855fd75a468897d6f3c99ef44d"],["/tags/Swift/index.html","53949a42e03f3bae5ef89bd869439740"],["/tags/Swift/page/10/index.html","599bd00124cf45bc6881f012c3c64e34"],["/tags/Swift/page/11/index.html","db1def7c2d50f36f122f232e61182e6f"],["/tags/Swift/page/12/index.html","601ce057a9c5be79ec942ab30e711eec"],["/tags/Swift/page/13/index.html","6f2e344dfad695eed2c62842a1343804"],["/tags/Swift/page/2/index.html","5977f6f941e572feb0bf89bb18e60180"],["/tags/Swift/page/3/index.html","ebe829bfe4c7465b62ee40086a142249"],["/tags/Swift/page/4/index.html","80b223c5c19b082035ae14e8c17301c3"],["/tags/Swift/page/5/index.html","57af325cceecf91db28c953cfc25f085"],["/tags/Swift/page/6/index.html","d6b92680eb524800a6a9451e5a815b35"],["/tags/Swift/page/7/index.html","f7202a3820521dc4786d32be6f75094c"],["/tags/Swift/page/8/index.html","329cc3122036e2b6d1a25fe6eb6b2d22"],["/tags/Swift/page/9/index.html","426c8cd5a13f3674fcdcff662696cfe4"],["/tags/SwiftLint/index.html","1f9a959e34e2162af05d7c097d6713f1"],["/tags/SwiftUI/index.html","fd8eefa434888fdfd99c5678eba18ae0"],["/tags/UICollectionView/index.html","33ae0249e8542f03857df0de88d798bb"],["/tags/UIColor/index.html","5795025eff9bcbe94498c2d87269d2a8"],["/tags/UIImagePickerController/index.html","eddc67acd6a479f2e25b120f8dc48bf2"],["/tags/UIKit/index.html","d416548d3bf1a8a49e11e6e0b00f97c0"],["/tags/UIKit/page/2/index.html","d9798c650c87b9257e4421c622156d60"],["/tags/UIKit/page/3/index.html","3da9274f5ce057ecf86692abf6311e5c"],["/tags/UIKit/page/4/index.html","7ac3d09c5465d31fd94fc7980d73d3c9"],["/tags/UIKit/page/5/index.html","7d81750ffd2997d41ee059a8e9532ce5"],["/tags/UITableView/index.html","27c392ae774f4b7d6fbd700d3e66f22b"],["/tags/Ubuntu/index.html","45ca7773455bda56e62886021487a8ba"],["/tags/Uniquely-identifying-views/index.html","21707f22e226ab52f607f697320c9600"],["/tags/VIPER/index.html","d58f2c06a416af600fa307ebc4fdb9ec"],["/tags/VMware/index.html","609381ca224219391c63f496f8bd564a"],["/tags/Vapor-4-0/index.html","80fed128b65061dbdb9544d8b4f88c50"],["/tags/Vapor-初探/index.html","d4129aec7097d2c658846f4e9ce8c003"],["/tags/Vim/index.html","148200bd2103c0c145d865938e99ef37"],["/tags/WKWebView/index.html","ff35bf57c62ed5bcb32c12ced105741f"],["/tags/Xcode/index.html","51532996ebf384860c449abcc4c838b2"],["/tags/appleOS-Networking/index.html","c41c493097d7c455b301491bf76f7edf"],["/tags/bugly/index.html","6b9bbe51126bb985f3bceefdf3866074"],["/tags/enum/index.html","e6c57836b76021abc1179387535f6fe8"],["/tags/git/index.html","2e19b375b23b835af8669630108d732c"],["/tags/hexo/index.html","eb7acdc82f720447cb019d83e2455c6f"],["/tags/iCloud/index.html","78d02923b339af073efc38342cc1f107"],["/tags/iOS/index.html","9340c330b9fc9c0e2670ee52d6d56436"],["/tags/iOS/page/10/index.html","0e0ddf5b8676f1f7ac175edf5d85c46c"],["/tags/iOS/page/11/index.html","327d58320baea8d758898b61231ea6a4"],["/tags/iOS/page/12/index.html","82399933a4cf258509b4ef656e6e89cf"],["/tags/iOS/page/13/index.html","93419e67309f21dd8273e4e6565a17cc"],["/tags/iOS/page/14/index.html","ecfc0da165bdfb8aaa2fb12239baf6e6"],["/tags/iOS/page/2/index.html","4771478b87a59f32c81e46e2826e8f18"],["/tags/iOS/page/3/index.html","77e8a87496909db61ccdaec14d5a0341"],["/tags/iOS/page/4/index.html","a828dcaaa2d8d770d4b763fdb2ae1af4"],["/tags/iOS/page/5/index.html","87bfd94fe05c4fc6326a441488939544"],["/tags/iOS/page/6/index.html","c0bc4ce2e2f792edb9ae1780bf11105a"],["/tags/iOS/page/7/index.html","64d17fa812cc2bfb1a4ec71e32645419"],["/tags/iOS/page/8/index.html","5e247e640b1efc32873785ed34162d1d"],["/tags/iOS/page/9/index.html","746367dbbeff04e1bf13d25b8243f327"],["/tags/iOS面试题/index.html","d6fd9048c0055eaf0aedbf11dba5117a"],["/tags/index.html","6e3aa81386f70ef15d45644ac6378c9a"],["/tags/non-optional/index.html","916dcbdd1f2b35ce95b83b47d7d263dd"],["/tags/random/index.html","f1ca7554593df25b51b55feb209a4151"],["/tags/transition/index.html","d8a046e8cfafebcc8440ddde78ec4df8"],["/tags/三方类库/index.html","2f69695d8b5fa4dfbcd46d7b6fcd36d3"],["/tags/依赖注入设计模式/index.html","8f9a31e87af02f43f3c97d9c241ef8eb"],["/tags/值类型和值语义/index.html","fb73ee7a49fea4cf38dc9e5ed5421534"],["/tags/内存管理/index.html","6708f40e60bf1258b3c9885d897d3697"],["/tags/冒烟测试与回归测试/index.html","9ca0edf259278b912bcbfaebf7246d53"],["/tags/函数式编程/index.html","c81af2fd0166a19e808e47c81c08aa83"],["/tags/创建博客数据库/index.html","588c2a46d51957c805183f3198a57532"],["/tags/初始化模式/index.html","7cd8b3aaded0c6382ba2720129cd54b7"],["/tags/单例模式/index.html","547330d2f63f4a14c7b8a95a2cff3d8b"],["/tags/原型设计模式/index.html","6dc6731f9020c9dd6e322f8139a0de8d"],["/tags/命令设计模式/index.html","d82cd66f3623582e1c44b0df75d0113b"],["/tags/基本控制流/index.html","6acb6a01a48526c90cf0214758778c5a"],["/tags/外观设计模式/index.html","a81cdc939c00679dd877d56dbc2f2117"],["/tags/委托设计模式/index.html","4268b0bb57fcfa7e86fc70e42e403bf7"],["/tags/子类化样式/index.html","e171ba3f310e962b41d7cbcbdbb32b9d"],["/tags/对象池设计模式/index.html","8925d1da1933d9d8ecae3bcfb62f0151"],["/tags/工厂方法设计模式/index.html","56a6b18291e6df9d64874e6df18ce054"],["/tags/工厂模式/index.html","9602a2e8b37fda74ed0eafe304524e09"],["/tags/工厂设计模式/index.html","e0f9c92b832043b71cb5505e22adb725"],["/tags/开发技巧/index.html","6a564fa8b376834cffcd6fc4570124bf"],["/tags/开发记录/index.html","73744c3ea47e7d244be31762b3b34e72"],["/tags/懒加载模式/index.html","e278ab3767ea4e646b32b44a678ba38d"],["/tags/技术支持/index.html","6d5896a27a9f6fa0a43b50c5f52585ad"],["/tags/抽象工厂设计模式/index.html","2009e30eac717d63ec4da6045c426220"],["/tags/数据库/index.html","e4c870e55c80f407bf4791ea3052d632"],["/tags/构造函数/index.html","8b63d14361cea98429176fe15c41c586"],["/tags/架构设计/index.html","db312e86c6d93cf89af60c62a760e8bb"],["/tags/模式匹配/index.html","47eff83c90ff38be6f974c99a89e4a83"],["/tags/生成器模式/index.html","f867e3a7608a05d0725c781cda4d0494"],["/tags/用户体验/index.html","b810670d34616decc2d3f3fc4c01988b"],["/tags/用户协议与隐私政策/index.html","f8787cfcdb1c26ca5802b27bc8f5f2f3"],["/tags/类型与操作/index.html","ee4f02621eb794d76579ba3aac5466dd"],["/tags/自动化布局/index.html","11bc9736a4b3bbf4c5b4eb9395b374bc"],["/tags/自定义UIView/index.html","985c655c0ed9e049d9b3025285e3f418"],["/tags/自定义转场/index.html","bd625725f958792a0988daf10d7155ad"],["/tags/自适应布局/index.html","fb01199bf8e60bd54f1a3881db1ec78d"],["/tags/表达式、变量和常量/index.html","4aa11d92203c4ea1be148db3887726ac"],["/tags/设计模式/index.html","8faca49b10deeb6c42a3023602dae9e4"],["/tags/设计模式/page/2/index.html","7a54131a7f14da7a6350c052f17a8b45"],["/tags/设计模式/page/3/index.html","81eff3348d2ecae3b5f89812c09ae15e"],["/tags/访问控制和代码组织/index.html","b5196eddf80b829ab0f3e57b284d8d53"],["/tags/运算符，下标和键路径/index.html","e7f9f936b795222b303d85b4fed00965"],["/tags/迭代器设计模式/index.html","3eeb232220ca118f2f11c6bc354a7f06"],["/tags/适配器设计模式/index.html","6ba965c22b3d2bfa2913fc1ad3ceecdd"],["/tags/错误处理/index.html","550e79703fe5896e4e4b0ae8efd63f76"],["/tags/静态工厂方法/index.html","042c62b0d39d6c19cdc3af55ef8686e9"],["/tags/面向协议编程-OOP/index.html","1877238c5e1e3566f5b35176cb79cdf2"],["/tags/高级主题/index.html","45d4079fc21f7dbf564e399b80013ea1"],["/tags/高级协议和泛型/index.html","6d464bc73eb8444c57fac60296348873"],["/tags/高级控制流/index.html","c30587e48b9312218ca13b0830eccd1a"],["/xcode 常用的快捷键/index.html","555ebc62697faca14b1553407ce36829"],["/为iOS应用构建输入表单/index.html","bd9b9f44ecc92ddfc3f9a114360e2fa4"],["/产品开发的幕后花絮/index.html","06958fba20a777ee6eb8e50d7e975de8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ec7dee12ddc769cf82538504050dfea2"],["/冒烟测试与回归测试/index.html","02eb021a1b12bae5569523d0190b1c52"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6b8e2568e117813fbfdb68ce4a9bf37a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","fe5273f8bbb3b26aba096ad57f838f40"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5076dee8d4cc24e1b54eb4973048ece9"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0233a85d77889e358c9c5ca906870c9b"],["/在Swift中创建自定义集合/index.html","ec71ae5ddafc9d5455e191046a84de58"],["/在Swift中处理非可选选项/index.html","168ed558ca6e1203104d09bbb7a8d3f8"],["/在Swift中生成随机数/index.html","f78ab2496f5789e5c052b57bad28b289"],["/在Swift中重构单例模式用法/index.html","5ff834bf70b9aa3b44e562b320adeb3d"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","861c9bfd3dfb52948c58de12cce1e973"],["/如何为VIPER编写服务？/index.html","366173a11ddbce7140a50e201274f8ae"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","7c3f5fb8b005e400528af12a099aacd4"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","774a18fc27033ee2037ddee64da85ce3"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1a03aa1032127b8383a016fb9abbfb79"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c9253d7b23def7cb42d19b7b43c2b6a2"],["/掌握VIPER架构/index.html","f3b89f45d7323299b69d67dd788724fa"],["/揭秘 WordPress Hook 系统/index.html","4398b06a8d572eacefa6c8a1ff76fe49"],["/比较工厂设计模式/index.html","7efbc65c30fb6a1e575740392a8543df"],["/深入了解Swift中的Grand Central Dispatch/index.html","9ddcc8a27c7322a2f2ea636db8c293a1"],["/深入研究Swift框架/index.html","e0348ce3d3e867ca7a9f10f492ad8717"],["/美豫直聘技术支持/index.html","da89cc2a389bbc889e32588ebbe9ad71"],["/美豫直聘用户协议与隐私政策/index.html","630a4008dca2c96c8294e60caa72542a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","03fc45d0524902c7da38e509fe213cad"],["/选择Swift而不是Objective-C的5个理由/index.html","cf21ea18a1dbd53516c1716cd3b0e569"]];
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
