/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","cdfe2f3f2ae4d50fec702fe1af2c0d88"],["/2020年iOS面试题总结(三)/index.html","bf94c261857bfbaab6bb76f94fa176d7"],["/2020年iOS面试题总结(二)/index.html","185d7523b56fe8758cd2c1d257edf4da"],["/Advanced Swift系列(一): Swift 简介/index.html","886d9a8e72f06532f0ded98527ceb10b"],["/Advanced Swift系列(七): Strings/index.html","c6ad85b30f718748118ddf41817f7ef2"],["/Advanced Swift系列(三):  Optionals/index.html","70579a86b935bfa8129832b1d590b7b6"],["/Advanced Swift系列(九): Protocols/index.html","b988048088b807c644ff1421afa30e97"],["/Advanced Swift系列(二): Build-in Collections/index.html","0af500844d43be04fff70dbd052e13ba"],["/Advanced Swift系列(五): Structs and Classes/index.html","885becc4896003ff3da4ef554314c793"],["/Advanced Swift系列(八): Generics/index.html","0bda03ac60b463f3b35969b97ab25891"],["/Advanced Swift系列(六):  Enums/index.html","075e13209a26bd46777a475fcb6a1bde"],["/Advanced Swift系列(十): Collection Protocols/index.html","977597de948ab43e10fb2f0ca1e73c6f"],["/Advanced Swift系列(十一): Error Handling/index.html","60d6980fe1033f31ed461741bff450f9"],["/Advanced Swift系列(十三): Interoperability/index.html","47fefe1fa37420e7a58921420aeb97d5"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","e9d0281ef20a4fa50261634f58c889ab"],["/Advanced Swift系列(四):  Functions/index.html","6f626ce274091bde4e1cac0df82d0acb"],["/App Architecture系列(一):  简介/index.html","38b12ce67d95b22b3495c5cd9cc030bc"],["/Functional Swift 初探/index.html","1b7fa78bacd98ad88c8fe5eea5f8d16e"],["/Git 使用小技巧/index.html","63a322ed888b62e10f79e577b0cf14f4"],["/Go 基本语法初探(一)/index.html","6a50e81c449494d7e4200aa4d1478eb6"],["/NSCODER和SWIFT初始化/index.html","ff37f11f9b79c3bfb138213771f6f4b6"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","3fe9191f9b2407f008295cd5c3569b21"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","dc68c393e34438f2dd5cdca901c1ec5b"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","f12027a6e4d265d5b165c833d14e6b05"],["/Swift 5使用UIImagePickerController拾取图像/index.html","106d9cc75425e14fe97a0086799c744c"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","566b6f11d43c683805781086d256e98a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","70196ce5405307af90b447200830ef46"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","956827e942cb10b25d351249dff9f070"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","cf2831729c27ab28c478a2e27ddadc96"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","2e3fdcec41b44c7f85bd914c8603b467"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","3a2f07f3c7a8c4135b4aed87bfb6bb9f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","e59c0b8f902988d508ef9fde0b7c373b"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","bb2821ec99f86fd7e0a7e1cbc14f7263"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","57de158ad8a722bf369f90fc698e4966"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","eefaf03d4f7a6b42c32682bc300ef342"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","23a73f30a523ae99b13d30eaff5cf7c6"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","9a50f9718d6cbefab2d0521374550353"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ebc9b2cb1e40d65fac2022885a24c96c"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","b9d8f3377b06713157c724d520805196"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","714c92c294d6c9b409356c119c9a3b49"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","1abd6c2038b02abbea2bcf914b5600f9"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","1657b8b57ac1de8020835f397e4276b3"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","7f18d4196d1fde759e4a360a92040865"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6bb9764f73291540b8d17d603712d569"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","cfe688cc863c6672e384a2224568e50d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","b6ceda268b2e64b9a869553124252dca"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","f852512c7a7022f0bd124326a100a17f"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","cfe9be3db48d61c7d6c9e7b4c5b106c2"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6e73480b18df26273f1cc52c2f409513"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","c6a02b63b878c7510c8c35778c0f95b1"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","9b05a0aa2b657fdbbfdfba5c7961857c"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f1e198ae5e8a72c683a7887d5d14d114"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","59c7b0ded3f668a75e9ed952e68b5bf5"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a5c175fabe9fa2941cff07faf0744c43"],["/Swift CompactMap vs flatMap：差异说明/index.html","5363a5abbbf92798439e5335a14007be"],["/Swift Grand Central Dispatch 深入实践/index.html","0c8b071b3b0f93cd1f212d3eb146cf12"],["/Swift Lazy属性初始化/index.html","9eedadb888b2b6235c4bd7d5475006d7"],["/Swift Promises 初体验/index.html","730f5fcd1dc09f86578ea64299b8d547"],["/Swift Promises 探究/index.html","a15e2e783f4c1a8874b58412dcd459d0"],["/Swift UICollectionView使用指南/index.html","979ddfd8fdb670ace69087ea72c600d9"],["/Swift URLSession && Combine framework/index.html","b0f2eb3a7ade2aa782a90a1dec32bc66"],["/Swift 唯一识别的视图/index.html","a48308208c0eabdb4b48e891a974b5dd"],["/Swift 如何学习现代UIKit？/index.html","e4c80fe2e0c70729da7278b0fdf7ee7e"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","31988282f64d38624c7082dce3f1eeea"],["/Swift 用 compactMap 替换 flatMap/index.html","e37ec1673f2c8796bad196badbd24a82"],["/Swift 选择和播放视频/index.html","98c78dcc863a3f7b2641bb4021f82fa4"],["/Swift中UIColor最佳实践/index.html","d97c9d8b8d17d8d8cd5029f39b1c967f"],["/Swift中快速简单的工厂设计模式/index.html","22c14664095c297b26518067870701e2"],["/Swift中构造函数与静态工厂方法的比较/index.html","d286002b88cb0dfc5510c241eb9ab112"],["/Swift中的UITableView教程/index.html","dc943ac0ebf5e06c1cadcf0ad037ef09"],["/Swift中的懒加载模式/index.html","259f523a09f8698253cda6d4cdde5de7"],["/Swift中的模块和挂钩/index.html","4f7f54182ddca6538c387ce2cc15f65b"],["/Swift使用布局锚点添加约束/index.html","71580c923647e15cb73e680d9eaf8697"],["/Swift依赖注入设计模式/index.html","fa26ed9f777c42b8c8f2cf5a78122d6d"],["/Swift关于Dependency Injection (DI)/index.html","5a639b75becd8bbb331067b25683d1b8"],["/Swift初始化模式/index.html","302d5461ca7783b3ae2a9d167bee0a0d"],["/Swift单例模式/index.html","35d46e76d76346eeebaad1d82a5be18c"],["/Swift原型设计模式/index.html","54dd7e50b0c236c677f78dc35c0fb08b"],["/Swift命令设计模式/index.html","972c5b7ed2e7ddf50d62c7ce4b99cc65"],["/Swift外观设计模式/index.html","9fdf0f38d9a50f69155cba3a2dc2881b"],["/Swift委托设计模式/index.html","167af0fe765cad16ebdf62d42b16c284"],["/Swift对象池设计模式/index.html","1b98e7af676590bde2233e6aea8be00f"],["/Swift工厂方法设计模式/index.html","6705cf1d937045bc95af213c410b11b1"],["/Swift带闭包的懒惰初始化/index.html","7c1fcb87991bd07994df0ba15ae363e6"],["/Swift抽象工厂设计模式/index.html","9b30a655578cc05e716213f5e3b54432"],["/Swift掌握iOS自动布局锚点/index.html","82423d1e9fded2b82f6647c22c4ba7b7"],["/Swift支持旋转的自适应单元格/index.html","e22dc35acb962a6982a17593a29adeea"],["/Swift枚举值/index.html","0aac47c7dfde4426e40628d5f08a26fa"],["/Swift生成器模式/index.html","9183a170f57a6ef76283344dbe1a1cdc"],["/Swift结合Xib文件自定义UIView/index.html","2636830de43cb1eb05289d6b0afd70c0"],["/Swift编写的20个iOS库(一)/index.html","c5274d4e9dc983085cd2c94ed1efc591"],["/Swift迭代器设计模式/index.html","6ebbe3993ea03054ba58934374b572c3"],["/Swift适配器设计模式/index.html","bf69b28ad027f5677cffd742dbe7fa28"],["/Swift静态工厂设计模式/index.html","56614a599e1392069fc9ca65fa2b1f69"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","da861954c45d5d6b4690b732adc44af1"],["/UICollectionView data source and delegates/index.html","e6ba0ce0112e128e8beb7cf47abfc037"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","460eba0bfb4f178bbfa6606347e240eb"],["/UIKit初始化模式/index.html","6075f4a2b30a7be2f5d77169ca441210"],["/Ubuntu18.04替换国内源/index.html","c41ee4c7d4f51bf4f49f1c7aee3a6550"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9bd6ba5e38f0a9e064f487eed5ca9f4d"],["/Vapor系列 (一) :  Vapor 初探/index.html","2a366202138345e2f68fedc87724128c"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","39b20124cdb66373ded18c01a5ab06c8"],["/Vapor系列 (二) :  Hello Vapor！/index.html","3a466cbc801ad38219e149ecc1e3a7f7"],["/Vapor系列 (五) :  使用session进行authentication/index.html","7971db938266ab0d8e401065485680d8"],["/Vapor系列 (四) :  创建博客数据库/index.html","da85aec0fecd35feaea129bfea1a8ead"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0ef1bfbcf55559b4ba4ab1249c655598"],["/Xcode扩展/index.html","aa72e71c7af86597cfe917e4689ca6b2"],["/about/index.html","bb69e11f909919bb0ec7e6a1cd32f97a"],["/appleOS的Networking示例/index.html","7c9f697c83a84d79012a9359346e5074"],["/archives/2020/03/index.html","e07a3ff1ac2baa411f128504e30262b1"],["/archives/2020/04/index.html","d0635ccc61dbd9d3be5e076b8ec3f0de"],["/archives/2020/04/page/2/index.html","e94efd4b27383c2f502603045188c304"],["/archives/2020/04/page/3/index.html","40e4b9127510998a0808e3f7b08e496d"],["/archives/2020/04/page/4/index.html","dff614b612f9dce475b8ca0af2addef9"],["/archives/2020/04/page/5/index.html","3128d0441f34bd316a9382a0e6ca2169"],["/archives/2020/04/page/6/index.html","3c1bc99df234d8f88d2218e461efb41d"],["/archives/2020/04/page/7/index.html","3c87aefd8171954c524408a8becf8b1d"],["/archives/2020/04/page/8/index.html","e830cf48ee1b60f29298d293f263089e"],["/archives/2020/05/index.html","054e0b57c22fec7046590fccfaf036b0"],["/archives/2020/05/page/2/index.html","7e6e64cfb8b81bf5bb13235c63b5eeed"],["/archives/2020/05/page/3/index.html","5886c10e2baa756b46be5ea788ce890e"],["/archives/2020/05/page/4/index.html","47916fac77e56d80e7665b29de6c0343"],["/archives/2020/05/page/5/index.html","f1560dd8f8092b75507b6bbb05af671e"],["/archives/2020/06/index.html","7187b5d90b4150d1089799c7e1e1610f"],["/archives/2020/06/page/2/index.html","077dbf5c136273f93d2784c44f7921b8"],["/archives/2020/08/index.html","645abe38e11e1400c9cb66ae40290e39"],["/archives/2020/09/index.html","09cf71bdd12ee723581e61b0e64a486a"],["/archives/2020/10/index.html","3b268c58a9e27b23066994704f833b24"],["/archives/2020/11/index.html","40fbdc850e33368cf58ff107399ae764"],["/archives/2020/12/index.html","5f68fedc523949b407994146aa07f8ae"],["/archives/2020/index.html","8126e039b94cf3fc68e3117a25ffb7a4"],["/archives/2020/page/10/index.html","c47bf4845b7de7b31feada72f9e8e5fe"],["/archives/2020/page/11/index.html","deed0447343055fbc2e5a1768844b22c"],["/archives/2020/page/12/index.html","08efc71bfa4bbf43b6797deb6b755524"],["/archives/2020/page/13/index.html","624fce2eeb0ce8086a9a31f1bf152aaf"],["/archives/2020/page/14/index.html","1f40137a5febb432796023c5fe5e5b39"],["/archives/2020/page/15/index.html","709d48e723dfd5984abe497a1c605a37"],["/archives/2020/page/2/index.html","78326e10c980dbe4e6a6b95e3f7b5ef7"],["/archives/2020/page/3/index.html","aadf63232f8a75268b9145efb92eb949"],["/archives/2020/page/4/index.html","f09b1b33f6fd4e1b6a4fc581278469ac"],["/archives/2020/page/5/index.html","e9e56136a33f444c22d888d33d2f6d0d"],["/archives/2020/page/6/index.html","db9078249717de9d7ded7ee0b177ec57"],["/archives/2020/page/7/index.html","ab7bf5c3502e0f6b3c666632758a93ac"],["/archives/2020/page/8/index.html","ec3777f66b7e8f010d97faab38249447"],["/archives/2020/page/9/index.html","21d4f5879087b456df7c1485e5b922d1"],["/archives/index.html","bf5a26e6bd3e2faad6768f6c220e2805"],["/archives/page/10/index.html","025620c56dc7efe53222305dfe4e2b6c"],["/archives/page/11/index.html","e70b8af64af45a790d31c4ba97e40096"],["/archives/page/12/index.html","28886a2f0e0f423002e7e24c4faf8865"],["/archives/page/13/index.html","52d00eb5cbbcdaee27cdfe36ea54105e"],["/archives/page/14/index.html","9e8a3ee5af8b024da83f5c183bf32839"],["/archives/page/15/index.html","a16ee8752377e623071dab4fc8b47940"],["/archives/page/2/index.html","7b21a9d56ec082e44d15ed6b07962f66"],["/archives/page/3/index.html","7ed7125117fd4b31d32d6240764b7aa1"],["/archives/page/4/index.html","46d995fb39602beb5974c52c0ffb11cd"],["/archives/page/5/index.html","1ca0d3bd548133bfdd9a2131af394611"],["/archives/page/6/index.html","b19199ffc3725b76fabf6e7be5ad1a5c"],["/archives/page/7/index.html","53eb1a2a736f4a9834dc1a96e2d744f1"],["/archives/page/8/index.html","94a2f92655de966a37e1341927321e06"],["/archives/page/9/index.html","305274eb383613a31234eea803c37cb9"],["/bugly 上传dYSM文件小记/index.html","512e4fea5da9ac57b606766fbe99c6f0"],["/categories/Advanced-Swift/index.html","9d81ce4be22f43580ea6b5c956710308"],["/categories/Advanced-Swift/page/2/index.html","8c5c4691ea5d46525f5e807faed688ed"],["/categories/App-Architecture/index.html","8381982ecdc810429adb59e629845d79"],["/categories/Codable-protocol/index.html","5763b3311e8cf892dd6bb55d1ec1da46"],["/categories/Combine-framework/index.html","c6d5c010811b1becdb2c83ef649d2280"],["/categories/Combine/index.html","f7c3d31e95bc21c7f6da2fe8faea2adc"],["/categories/Go/index.html","966efc88010cec43c676d5a81be94cd4"],["/categories/Grand-Central-Dispatch/index.html","8008cfb5a146dcf299510fffcc82a90c"],["/categories/Hexo/index.html","235cac5b26f2e0cc505c7409b462b790"],["/categories/Promises/index.html","8ab4cc2842d9c1d1dcd24c4bd6a543ea"],["/categories/Result-Type/index.html","b26d8ece0ad359580a233fd561d326ca"],["/categories/RxSwift/index.html","2872b858ec6507ffc6721e44e01adb06"],["/categories/Server/index.html","531130a63432e822766cb3500b3addbd"],["/categories/Swift-Apprentice/index.html","01db8aa78dbf1ae26d45473ab3080f10"],["/categories/Swift-Apprentice/page/2/index.html","497003d2c9d7ab8ddd0686ea7074170c"],["/categories/Swift-Apprentice/page/3/index.html","760959899b03ca288a29bd81ae832de4"],["/categories/Swift/index.html","bd0bb1725dbe5f2832856e03022c0f97"],["/categories/Swift/page/10/index.html","afc4f716c67648c7dfbdb1ecc299747f"],["/categories/Swift/page/11/index.html","e0cd2f92b95f6a068b0719b66f5fa198"],["/categories/Swift/page/12/index.html","05ac6e96f4435f792f204002d80662cc"],["/categories/Swift/page/13/index.html","2c8a10a8885a803c0249808534f95160"],["/categories/Swift/page/2/index.html","a494a94be78464b4dcf6ae3e43ff5e64"],["/categories/Swift/page/3/index.html","22d7d3db3e519b8a09bd9c28170c5843"],["/categories/Swift/page/4/index.html","be3b52d6cbf7f6f08b927bd11bf82aa4"],["/categories/Swift/page/5/index.html","b80f0cf78ec4136933098cb99ebd5ddc"],["/categories/Swift/page/6/index.html","7d600b2e24801e11de77a2abefdfcd8e"],["/categories/Swift/page/7/index.html","0a026799951a31fb97e2818c5d56330b"],["/categories/Swift/page/8/index.html","bdc95fb565ab137411503a5a196f5e77"],["/categories/Swift/page/9/index.html","ccadb37889bfffc734fd3b78a89043a9"],["/categories/Swift5-2/index.html","1aee9273563e2c764a8a1440620107aa"],["/categories/SwiftLint/index.html","5ce5c9af586708823d1ba5b49853b944"],["/categories/SwiftUI/index.html","0b8b618478ee194c3043082df6c58af0"],["/categories/UICollectionView/index.html","4cd787a6e275cf9a139dacf5a78a1152"],["/categories/UIImagePickerController/index.html","b80dc882f821eaf88233780af9ec6a0b"],["/categories/UIKit/index.html","f38d1ea025fef0f57076e57c999dad8b"],["/categories/UIKit/page/2/index.html","4d040d60c98cbc27bbfa35a555f59e91"],["/categories/UIKit/page/3/index.html","30bbc5c826c4def777b9c24ce58a1350"],["/categories/UIKit/page/4/index.html","d86c56d7c75dbf67d5c8258c39df91a5"],["/categories/UIKit/page/5/index.html","48d52a9ac46a0058a227aab8234f9b98"],["/categories/UITableView/index.html","dda0f21d7a0f6c298cceb03be459d280"],["/categories/Ubuntu18-04/index.html","00891daf40b8ce20eab34ce47da21b83"],["/categories/Ubuntu软件源/index.html","4f9a40a7287f9dd84b0961c68907fd2b"],["/categories/Uniquely-identifying-views/index.html","cd78c26d2d445a9e332a392f1618fe6b"],["/categories/VIPER/index.html","a7dab3818b488fcfeb49d25bd47b4378"],["/categories/Vapor-4-0/index.html","fc473592d531f524caf2d8cd2656b621"],["/categories/Vapor4-0/index.html","264b6f59aa1531dc30c17ad5ce89f881"],["/categories/Xcode/index.html","d3d711eb30295a16e4914c1dc09a34c4"],["/categories/appleOS-Networking/index.html","54424ddb0ad4c0dd48593ff9b838f352"],["/categories/bugly/index.html","adbebb350aea54293b233a3abb551f26"],["/categories/enum/index.html","83e4c3438d083f71610f896765fd4e46"],["/categories/git/index.html","6894d7c5c26f1f61da09e0d8a1790f55"],["/categories/iCloud/index.html","08c8c2a1c976b17a3a2c12fd712989d8"],["/categories/iOS/index.html","97d296faad153b1a7d7761ac5462978f"],["/categories/iOS/page/10/index.html","51d516fa3550b6c3d98cc652a37f51ee"],["/categories/iOS/page/11/index.html","2f845086e4d6fd70eab582e5db8f679a"],["/categories/iOS/page/12/index.html","7f9aebcd7183f9ecf5820d229aead66f"],["/categories/iOS/page/13/index.html","8dd3577ba117d6d012664e6d2d724a55"],["/categories/iOS/page/2/index.html","3cbb69d1dd753b1f17804585080f45c7"],["/categories/iOS/page/3/index.html","9ed0282b53cd1935b584509a15dacdfb"],["/categories/iOS/page/4/index.html","6ad998479b951cb2f8ed055e5553c293"],["/categories/iOS/page/5/index.html","183a8595c7d7e3f0feb56962a1495c8a"],["/categories/iOS/page/6/index.html","1809fa21b001a3cdb50dbafb876a245e"],["/categories/iOS/page/7/index.html","d646633df9c2ce90ef914fabedb3c2ef"],["/categories/iOS/page/8/index.html","cd0e1e113b8979ef9db2b95ebee49335"],["/categories/iOS/page/9/index.html","05baef80c0e4f577ad77dfd90c63a72a"],["/categories/iOS面试题/index.html","a7ed3456054869e7ad3559053aa56ffc"],["/categories/index.html","3133e314d1effeab7b28d6000f158768"],["/categories/random/index.html","0d4f97adb8649478311573b1eeed559e"],["/categories/三方类库/index.html","782f307a0a82e34f276d4e9e565f9452"],["/categories/函数式编程/index.html","d5b630add0c7cee314e663c3fb938499"],["/categories/子类化样式/index.html","0ef2c5933efe73ffb7fe6bfea0d61ddc"],["/categories/开发记录/index.html","f09ccddd81ce36034923dc0ce9bbe2fc"],["/categories/技术支持/index.html","822c8be6fecc845b2b834652aecd3eff"],["/categories/架构设计/index.html","132aed8616e7d23cda05ae2781b615d1"],["/categories/测试/index.html","3d71a2b77830cc9c2caa91a385ab8901"],["/categories/用户体验/index.html","4b6733fc463ac3fec829110dee46e851"],["/categories/用户协议与隐私政策/index.html","3af08b2085163e9553f13fab73a197d6"],["/categories/设计模式/index.html","0048e9b26dad05662e5999f1a6bcd0c1"],["/categories/设计模式/page/2/index.html","760d1ee6c2960594c809ec2332d3cef4"],["/categories/设计模式/page/3/index.html","826cd428133058c8b8e21b88477b068a"],["/css/main.css","0f8328d38e4c3985972c907ff182a2c5"],["/hello-world/index.html","ed82e13a92507e8ab726d27bbb439033"],["/iOS VIPER架构深入实践/index.html","94103415ce4744671195490e92a034f4"],["/iOS 自定义视图，输入表单和错误提示/index.html","098489ca99ab58a7aedbe57b88bab398"],["/iOS如何使用iCloud文档？/index.html","c6ca9865621c0c48f9aa305ebac1362a"],["/iOS子类化样式/index.html","21d4b1981cfdeb374147eb77269865dd"],["/iOS开发记录<一>/index.html","10e682780d2986ade10511df63442f2e"],["/iOS自动化布局编程/index.html","330f87859e90108d38b311b103d3c91b"],["/iOS自定义转场(By Swift)/index.html","e281eb09394563587a5c3faf84e373a9"],["/iOS项目架构：使用VIPER/index.html","8331d5873418f80699fef8764a87fe2f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","1f689d3f3a90b3a225840449b133233e"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/open ./index.html","c3383f33739de9a6dc63224a034b4f3a"],["/page/10/index.html","966505b67b5e546166b20788882fe57e"],["/page/11/index.html","4eec79ddef498f86b62eac3b8629c3fa"],["/page/12/index.html","6a56959f5e886cf28c1aa23c076f2231"],["/page/13/index.html","c21d6e4d8e7f7f666aa4450ca708f9b0"],["/page/14/index.html","cbfd53461db20d8efe3c768a455813bd"],["/page/15/index.html","9b3672d2f932c9dbb357a667921fbda6"],["/page/2/index.html","3c02f45c70c079c6305823885e68456a"],["/page/3/index.html","35a41759fd53f6794616ebb03dd358fd"],["/page/4/index.html","d3ced9ca729f2ab46e7f302852075835"],["/page/5/index.html","352631b13654b7f0166f1b264fab88fd"],["/page/6/index.html","fdcf64faa31390d61e84fd3a3464ee66"],["/page/7/index.html","70b16a6896a9d99ef775d82052cc9e36"],["/page/8/index.html","94cce3fdb2e16b68e5ffb19cdb553ccf"],["/page/9/index.html","f5cc45b12a12cbc69d32388dfde779e6"],["/schedule/index.html","f30363c9751580488e0419ab3a13965b"],["/storyAppPrivacy/index.html","dc5b370bae804e3dd1612f3e8fb3eb05"],["/sw-register.js","4d29fee043d5e854a0981806a53cecaf"],["/tags/Advanced-Classes/index.html","87071560f6a6ab1d082728a007e529cd"],["/tags/Advanced-Swift/index.html","77de506057f39e7371dd717cf9ec7335"],["/tags/Advanced-Swift/page/2/index.html","9867b6ed3628466187781378d1aa51bb"],["/tags/App-Architecture/index.html","32864fc6d5c9fd23d7006b78e38c290f"],["/tags/Arrays-Dictionaries-Sets/index.html","af29d841c50954e50b1adecb1c707432"],["/tags/Authentication/index.html","3617376a92649e3f163c4fd1d2aef8c8"],["/tags/Build-in-Collections/index.html","990dd318e075d18c88822dd1b47184d1"],["/tags/Building-Your-Own-Types/index.html","b73c8d1950bf26f824851155e5845547"],["/tags/CMS/index.html","e9e07be81045e73ec007cb826bf901f6"],["/tags/Classes/index.html","1e5f3624f49033c7e72999114c718133"],["/tags/Codable-protocol/index.html","56cb1994e13b35e490b27353f6b8641d"],["/tags/Collection-Iteration-with-Closures/index.html","0474d9d6ca587e85fdffd0fafd4a878f"],["/tags/Collection-Protocols/index.html","cef1da993bcecefdba5ebc4d3edd14de"],["/tags/Collection-Types/index.html","fb0d28020625f2cff08d15ba694bd75f"],["/tags/Collection/index.html","bd879d811498e6967c1cb472291fd2b0"],["/tags/Collections/index.html","5412d873ef24530520605a5618fd0d5c"],["/tags/Combine-framework/index.html","653093f94890253eae17997cf3fe10c8"],["/tags/Combine/index.html","bd5c3865c14ee705a7a751cab10f8a81"],["/tags/Dependency-Injection/index.html","449d9c8c4a9f19feb92fdb053327ae1f"],["/tags/Encoding-Decoding-Types/index.html","48b7d2f43cf6523e0d01b000413c6cd0"],["/tags/Encoding-and-Decoding/index.html","bdec185ba7e633b97641634a696f5931"],["/tags/Enumerations/index.html","d0760ae93a783303e7ff7ae3657512f9"],["/tags/Enums/index.html","ac7d075e0e5fda62bdb995adf88db8ad"],["/tags/Error-Handling/index.html","496830415747c7ede7e349e7e8e8211b"],["/tags/Functions/index.html","12ca6b47e7e4eaafb98843ebf5416ee2"],["/tags/Generics/index.html","9056c1789983842f8fb9ef1b8f21b348"],["/tags/Go/index.html","a4a530532bba19c006bf08cd9b8b7af1"],["/tags/Grand-Central-Dispatch/index.html","f9dcf468b9e5d46e1ea952e48e9f70dd"],["/tags/Hello-Vapor/index.html","dfa35f5fb537371e165c65609674425a"],["/tags/Interoperability/index.html","8b135577f4df9255dee05ba25f5761bc"],["/tags/Introduction/index.html","e1513ec02c2b8383d24163182d05c5d1"],["/tags/Leaf/index.html","e030d2b19c8941d5b35033ccccd53428"],["/tags/Methods/index.html","ef170900db01759267727c35c2df22cf"],["/tags/Modules-And-Hooks/index.html","c025d356691cea81f7033812e6539104"],["/tags/Optionals/index.html","9c59b877e45327f51376b0a738a77f5f"],["/tags/Promises/index.html","bde9cb40d0e5fdc572f9acb8fa2e1a48"],["/tags/Properties/index.html","0088cbc605ffea77021a486694e7b147"],["/tags/Protocols/index.html","97f4c01eec3c1255b07f681562b88eda"],["/tags/Result-Type/index.html","898e13930f01490d4079931c466abc1d"],["/tags/RxSwift/index.html","e596ec50082e2fbabe57b23e5dba5bca"],["/tags/Server/index.html","7c724a808b16f05c1f010c09e7f47ed9"],["/tags/Session/index.html","93029a22e965994d8b45c5aaec12a43a"],["/tags/Strings/index.html","ee44740bdd7ac6e6404ee585f5581d48"],["/tags/Structs-and-Classes/index.html","f710990604471b96b8cffa9a0472436c"],["/tags/Structures/index.html","61d212c76d234e58ffa621e6c43a72e9"],["/tags/Swift-5-0/index.html","d1ebe3be7afc1910398ca8666a75ade4"],["/tags/Swift-5-0/page/2/index.html","db0531b141d7fb00789811d8541be94e"],["/tags/Swift-5-0/page/3/index.html","29bd0f34dc80f09c091c9768114d9575"],["/tags/Swift-5-0/page/4/index.html","e2cd45473d4d8de91600e691bbc3fde1"],["/tags/Swift-5-0/page/5/index.html","688678816cb1b6769cc9c0689d0e9f1b"],["/tags/Swift-Apprentice/index.html","beb3c268547a70faf5de8cc71ed69a01"],["/tags/Swift-Apprentice/page/2/index.html","048bd82335945a9be13f7626ca8590c0"],["/tags/Swift-Apprentice/page/3/index.html","4194d5cf80ff74cd0897ad56041ac1c6"],["/tags/Swift-Package-Manager/index.html","117e2c4c7255adfea0dbcf6f9b446374"],["/tags/Swift/index.html","01e574f0463d51cc8576df69caf61e71"],["/tags/Swift/page/10/index.html","9fe2e86fa938ffb521e457ed328d518b"],["/tags/Swift/page/11/index.html","8de8e60ab0db818e8ef599476c963c18"],["/tags/Swift/page/12/index.html","7b97ea56df30fe8f5d437f99ba4e3ebc"],["/tags/Swift/page/13/index.html","97945e0df22d5f3428ef268abce4a7ef"],["/tags/Swift/page/2/index.html","2030d0036fe4cb89dd8bf001f28a8ca2"],["/tags/Swift/page/3/index.html","06f2ae1adfa7cddb9436d62a8ee7106f"],["/tags/Swift/page/4/index.html","fc4c8f7ae12ea09ab034611337d03180"],["/tags/Swift/page/5/index.html","33070ef40d81f63b4c81ab79fd35aaf3"],["/tags/Swift/page/6/index.html","c67b2737340bbe05e565b558f373b2db"],["/tags/Swift/page/7/index.html","33d7c84f088cb3768d3bd7958322147f"],["/tags/Swift/page/8/index.html","dc3534a7570a40a2d2c14f3989224cc8"],["/tags/Swift/page/9/index.html","d6f7122860dda85e034f0516d332a3c9"],["/tags/SwiftLint/index.html","fed1096ef77c011a185ab0bb9431e7e5"],["/tags/SwiftUI/index.html","c2ce9662695c6bc1a0c856f659766066"],["/tags/UICollectionView/index.html","0d717d4a51a37bab33718980a74a962b"],["/tags/UIColor/index.html","06295b348a7e9d260f07d64de668448d"],["/tags/UIImagePickerController/index.html","362438f00f4539d66b07f2c19d6a957a"],["/tags/UIKit/index.html","568b1349f8ad37ac7224e002d08a1568"],["/tags/UIKit/page/2/index.html","4c9ffb8c4767158a227e4fbc3a4aaeaa"],["/tags/UIKit/page/3/index.html","a40d27ad82e42c9950bef14397c8abd6"],["/tags/UIKit/page/4/index.html","266069c8ed7a6e8b3ad6f37df9e35fd3"],["/tags/UIKit/page/5/index.html","e152faae529f932e46be961861c970b2"],["/tags/UITableView/index.html","fce403d6d6e76e94fa600d71d84e9b7f"],["/tags/Ubuntu/index.html","a245f00271d0eb268bd38a6918f91110"],["/tags/Uniquely-identifying-views/index.html","65aa741b08eea51c98d3fea71c3bca81"],["/tags/VIPER/index.html","517698c1cc63f21cdc5e2e8acbdd5ad2"],["/tags/VMware/index.html","b3047be5d46ea2fb5c5034124c6d50df"],["/tags/Vapor-4-0/index.html","a21f72b25b133f3f45106a271e6861c2"],["/tags/Vapor-初探/index.html","50e8e44e3b4ff2d91fbf1a9448f161db"],["/tags/Xcode/index.html","e483423db6f3b355880d98c6b514d754"],["/tags/appleOS-Networking/index.html","cfe35da0cf404ac42691c56963ec7a54"],["/tags/bugly/index.html","b8476692606efd3d4e591402710e73d2"],["/tags/enum/index.html","344e2380f0eb8600bcca3b5cedaff99b"],["/tags/git/index.html","9a6b6dec562bbb8e362c32f3119a30fe"],["/tags/iCloud/index.html","4b6a07c79ffc67ec532f4dc34499299a"],["/tags/iOS/index.html","d5e4231bee7c5fcdeb3449d43635dcf4"],["/tags/iOS/page/10/index.html","0614c4eaaebe47a364a92b7292b764d4"],["/tags/iOS/page/11/index.html","a3d2d179b90960d3c62fcc66eeb02646"],["/tags/iOS/page/12/index.html","261212a5e2eada8f3a496b339ecf39ca"],["/tags/iOS/page/13/index.html","45efcc92e7fe562091f1ed67e3849496"],["/tags/iOS/page/2/index.html","87be0316f9ae71770381b10abcbe92fb"],["/tags/iOS/page/3/index.html","9a7850661643205ff507fbbedacb9f50"],["/tags/iOS/page/4/index.html","f33a8eff3374ac390e3335c51e6f107b"],["/tags/iOS/page/5/index.html","67b8b31925aa0c52f0963cce57e0895e"],["/tags/iOS/page/6/index.html","ce1f647a76f4495cd56dba1b5a5cb41d"],["/tags/iOS/page/7/index.html","31b71cbfef2dafcc2176b0e300834315"],["/tags/iOS/page/8/index.html","62ce439540c1c3c1cd8986af0ecef276"],["/tags/iOS/page/9/index.html","1872b71ed83bfbc6d98dd2a4a2ead693"],["/tags/iOS面试题/index.html","90067f1180298bf4d50518af0d6167a2"],["/tags/index.html","c524e3e237daac88b1cf33a0a94bdc20"],["/tags/non-optional/index.html","0c18f82aeed27102bac920a38066d440"],["/tags/random/index.html","16354f6d7ca164bad896f5ac149d447f"],["/tags/transition/index.html","717f981926f984ec33bfecbddc7f0d8c"],["/tags/三方类库/index.html","cb57f38d77ae83598248e4cc63a20fc3"],["/tags/依赖注入设计模式/index.html","01a6c760decc41e30b4d3115dcab50f8"],["/tags/值类型和值语义/index.html","9cbbef5a16d9aecea5d12ec6b026f6d9"],["/tags/内存管理/index.html","c5f2db65a03a84e6bbc8901ca4878684"],["/tags/冒烟测试与回归测试/index.html","6559105f26f0ca526ef27ed674b86e4c"],["/tags/函数式编程/index.html","cc7c03564f1cc1bf1f7e15f4ec08d388"],["/tags/创建博客数据库/index.html","3f817d797bd6d3191829dfd8c72da2e6"],["/tags/初始化模式/index.html","1dfb93a450dd541a518ef509545d4ffa"],["/tags/单例模式/index.html","d655cf8aa9402a4f31363cd0da3e96d7"],["/tags/原型设计模式/index.html","80c078f1dd0a3f4f70454f8df8077bd0"],["/tags/命令设计模式/index.html","aa8426ce7bdfa33d953044a0ee8c2f0e"],["/tags/基本控制流/index.html","b5a0c524d087af6126c1881dea738425"],["/tags/外观设计模式/index.html","982527dac2bba6e013a47667acfd1624"],["/tags/委托设计模式/index.html","9d590943a6d4715bd4eb82d4a713b3ad"],["/tags/子类化样式/index.html","6fd49c73485520801e85b433cc4a40e9"],["/tags/对象池设计模式/index.html","af510a2c0d9d48f40e5ca1a7565b9b1f"],["/tags/工厂方法设计模式/index.html","8409d173cc569c5faff1cf759bb5c958"],["/tags/工厂模式/index.html","484b8f7ff7398ca1ed1bc4c5c042783d"],["/tags/工厂设计模式/index.html","7fde4f5b626adcd4500c6fc39f779598"],["/tags/开发记录/index.html","a5c0841d15e7f8075fc8c4209fd3ce96"],["/tags/懒加载模式/index.html","e384f591e005427cd55532529cc9b48f"],["/tags/技术支持/index.html","a4dab7fd47d6b8d3cf3bf892414eab9d"],["/tags/抽象工厂设计模式/index.html","00ec196d7b55597abb643d3d84679961"],["/tags/构造函数/index.html","daf3c9a1b23bad9c45825e9d1b5dd91b"],["/tags/架构设计/index.html","7dc844b8bcde7107147fdbed8f68bcd3"],["/tags/模式匹配/index.html","a0abd788d1462f1372975de7123c1641"],["/tags/生成器模式/index.html","4ebba722529284766e7e3f8d2381aad9"],["/tags/用户体验/index.html","b93aa79eed1fdfdeb355cd77679f9c75"],["/tags/用户协议与隐私政策/index.html","e16795b610f3058caf6424d9e1c12d52"],["/tags/类型与操作/index.html","71ca047d6cf66958998768fa1bf82c16"],["/tags/自动化布局/index.html","8eb61070f6fd8a48bdeda062520ac626"],["/tags/自定义UIView/index.html","15f77a66a9e8167c5d3e2e4057557891"],["/tags/自定义转场/index.html","b35b729064838b9002a87e39ac44c09b"],["/tags/自适应布局/index.html","568acb108f9394310d3f367e52d42cea"],["/tags/表达式、变量和常量/index.html","2cc9559f8fc8cac46770bf3e2f9b08e1"],["/tags/设计模式/index.html","f1fcdf2caac8b149ec92fff640efac56"],["/tags/设计模式/page/2/index.html","02594e07cc5fcd18e6276bfc542dab9c"],["/tags/设计模式/page/3/index.html","77ca9390e000d8043307451da185d28d"],["/tags/访问控制和代码组织/index.html","b0f27ec1b0909022a3bf03dbc41598ff"],["/tags/运算符，下标和键路径/index.html","6c71ec22308adee550aa182099a30f96"],["/tags/迭代器设计模式/index.html","7bebf6237606603eb41ba9df7631aee8"],["/tags/适配器设计模式/index.html","8cb02219e55339cc8ebc2e23dbc4f725"],["/tags/错误处理/index.html","3ae9049b283ec767fff373387b404544"],["/tags/静态工厂方法/index.html","b4f17ebdd0a5195329b8042795dd2391"],["/tags/面向协议编程-OOP/index.html","e8c2195ca6baa91900235a62a0717479"],["/tags/高级主题/index.html","0d46d9d7e69d394fd653318173ef23d5"],["/tags/高级协议和泛型/index.html","4bdca9045d2dd5b7a878198495eff0da"],["/tags/高级控制流/index.html","14a7069523c0daca69fe4989caa3912f"],["/为iOS应用构建输入表单/index.html","be7a3bc1ae0e86d409c1e80149551b49"],["/产品开发的幕后花絮/index.html","794f6f259d0eea4e2569ae1c2745f97b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","adbf6b99d01f13963c156ed818ad4b98"],["/冒烟测试与回归测试/index.html","d825abfc60171ba72e053e0c85a87cbd"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","31806e3b9dbba1f9785206fe79cd3c35"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7f3fc70d435b84d6a9cb15d12e58a879"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e83709d4a64da661ddf1bad2c873075e"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","1d3d077937df12295cc7d441ba0d0583"],["/在Swift中创建自定义集合/index.html","4831a7395715f237be9f03dd10d7de76"],["/在Swift中处理非可选选项/index.html","da2b45e388483023bdaaf8e062c0845c"],["/在Swift中生成随机数/index.html","e9e6f07631c136e8f4ff8b0d49a6b939"],["/在Swift中重构单例模式用法/index.html","6ed496b265e1987f7862c4e3f19940d6"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","26a187cf95134c91d8e4fab6e7f60d0d"],["/如何为VIPER编写服务？/index.html","1162f4a336dad393bfffe0610823798d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","0606d9a6ecd7437cb8fc33d6e39fbfa9"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8c87971e535836305f0ad8fba7f75772"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","886555257e663a7b04ce506b899ec9a9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a194e1d94a38378ecefe023844bab814"],["/掌握VIPER架构/index.html","294a455ba86df6606b453efcd61ad88a"],["/揭秘 WordPress Hook 系统/index.html","9db5910a86e5f54ff26dbfba64c62660"],["/比较工厂设计模式/index.html","aae805a7832fd8d2e2f9d9583b6391bf"],["/深入了解Swift中的Grand Central Dispatch/index.html","b3374a8a8f95b9986e530f30b96c4449"],["/深入研究Swift框架/index.html","1648e8e6f96badfacf0e26d05bb89b75"],["/美豫直聘技术支持/index.html","52de5eaa07c2dd6c3cd465e0522cf10d"],["/美豫直聘用户协议与隐私政策/index.html","46fd51c334d2ebb96b81517b1ca55411"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a2a2125cd96e6463b93dfd038aecf32a"],["/选择Swift而不是Objective-C的5个理由/index.html","59f4809cd16fbceae0f640e6e4360585"]];
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
