/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","763ccca9a0c3bd96dc09a0653d5b485b"],["/2020年iOS面试题总结(三)/index.html","965c761892311bdae6a2dcf71da334c6"],["/2020年iOS面试题总结(二)/index.html","44c3e31822c6f2d8ee25662aaf0c2093"],["/Advanced Swift系列(一): Swift 简介/index.html","cc2ffd5005f7bec1d3ef29b7792d5648"],["/Advanced Swift系列(七): Strings/index.html","651643672786293a0e50c4808adda4ab"],["/Advanced Swift系列(三):  Optionals/index.html","1c297f790dc3788ed015eb1d4641acb4"],["/Advanced Swift系列(九): Protocols/index.html","51d126f35f3ceacca8b74fdc5d1d8c62"],["/Advanced Swift系列(二): Build-in Collections/index.html","89d2d58c6fed4579629d86d0038f8223"],["/Advanced Swift系列(五): Structs and Classes/index.html","380fe6870734cd53b61cca35160947f5"],["/Advanced Swift系列(八): Generics/index.html","7f1cae735a0cd346c3afc458b76360b2"],["/Advanced Swift系列(六):  Enums/index.html","d7ba8eb2ecdb1645005e8fc5e27877ca"],["/Advanced Swift系列(十): Collection Protocols/index.html","92347c5f6880fad99af2f60bee1c0564"],["/Advanced Swift系列(十一): Error Handling/index.html","e6394498c65e5e6b5b30996b23cffa57"],["/Advanced Swift系列(十三): Interoperability/index.html","7ec9c3e521000d8d0f44a4b108a38963"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","475fcf5e7841b7cbfbc8e0a55649dc69"],["/Advanced Swift系列(四):  Functions/index.html","a6b2a62a52eefd2550a7d946e47d7f51"],["/App Architecture系列(一):  简介/index.html","e1af82d9cf300efe3452d0722fe27cf8"],["/Functional Swift 初探/index.html","d58764cc99fa5263830588fa1af37719"],["/Git 使用小技巧/index.html","1472bfdc8f129cdc072ed869139273e3"],["/Go 基本语法初探(一)/index.html","5ebcc84d9ba3f6896ce6b567aca83a71"],["/NSCODER和SWIFT初始化/index.html","970103abdaf8047d1004444c64676aae"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","1d357e9d2a1cb81b6c5b9f7d0295f9e1"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","bfdca1805507403bc8e70a2e554c6a9c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","17e0c7c963e1a8a9c7cd71904612772c"],["/Swift 5使用UIImagePickerController拾取图像/index.html","0ca47b24ff0b19431d573a8a1c931bac"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","cf4c2c7b145c5738a500010c899dc007"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","dc1be119dd8e7c6a306c045c17829162"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a4c2098a23069f7f0b59aee293edf6d9"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","2d95b9694208ec09bf685226e900063c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","dcc42fce23ab7ad477f2570d6a76413c"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","f0fd657edd70a02c0ed78e556f74e524"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","4d6cfb3363caf93e4b23d978bbcfe2c7"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","27f02aa67e128f8c29e852500c982670"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d7edaa0f59cab7453a03d8db899f096e"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","6c13877a486e7cf43aeec4dcf7c38899"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","369026092495f8a78d299945b5b58cd8"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","4d754e8d9d3906af382296901b1b9a2f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","844a1e7815b4329081ab79d40c2b02e0"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","262a9431d8df4a0a2352f7c338d16035"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","986b2610a8263d42e5e5134a2d659d62"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","4109532c06ce502eea75ed172fe27241"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","88028870aace8f04995477a111766bde"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","2a6cf3b2d6db1f25e4dba7043f62165c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d71701e6e1d62f16be054191e790af3d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6029cbf051038260d16ee8aefef00e7f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f03b9d97b45f911d6d11cbb03762309f"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","c26a275bf6c24871ab6c588dcfa54a77"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","5c486439eb827804e1689a36a5876883"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","881d90b4da26b965f8deb58e3381c764"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","1b85a3606a1f6f2b4f70a2d3c324a499"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","8e96a88b8563ea5e59f6c26c7e1d9255"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","da6c37823eec9f6eb6ff2ecafd2cc70c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","f0a35de3ac849dcd84ec32c14586cf68"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","426b00563c046d888ba225cadb35dfba"],["/Swift CompactMap vs flatMap：差异说明/index.html","88722c0ee380041058fea81246d26bba"],["/Swift Grand Central Dispatch 深入实践/index.html","1f11ebd32590cc66ac490b2e3953768b"],["/Swift Lazy属性初始化/index.html","0de605487812816ea9c878147efe8e27"],["/Swift Promises 初体验/index.html","0a52a8eb23627f8fb4ed5705953c5502"],["/Swift Promises 探究/index.html","848d8c8f3c6fd187700d80d86d4bb81c"],["/Swift UICollectionView使用指南/index.html","e039e0b718b135b01a893f703229d172"],["/Swift URLSession && Combine framework/index.html","fa63175bc46ad1edac448eb071259134"],["/Swift 唯一识别的视图/index.html","6799d0f9cd02de5c3c5c975e9c8718bc"],["/Swift 如何学习现代UIKit？/index.html","fee1252ecc778efb5ace1e2622a0eb3d"],["/Swift 用 compactMap 替换 flatMap/index.html","aa3af69b8be1ed35c612804732ab4297"],["/Swift 选择和播放视频/index.html","fb1a79f27e4301613766648a8f866aa6"],["/Swift中UIColor最佳实践/index.html","b1818e37e283a0f2a96b8db0acb8dd3f"],["/Swift中快速简单的工厂设计模式/index.html","302632106f9825f0fd9c8e1c1c763b52"],["/Swift中构造函数与静态工厂方法的比较/index.html","79d80a370dd3d6178cb78449da901d30"],["/Swift中的UITableView教程/index.html","eda7dd0a27ffda8ff9951565a1a77588"],["/Swift中的懒加载模式/index.html","315944ec3335bf8f1502688cb4e4f106"],["/Swift中的模块和挂钩/index.html","efe675766ba260f4073151619980cbee"],["/Swift使用布局锚点添加约束/index.html","6fe175520d1e9c4118b366129d00acdd"],["/Swift依赖注入设计模式/index.html","ef8b4e49d665704dce5b442e52d993e6"],["/Swift关于Dependency Injection (DI)/index.html","cfebbcad49a16e9c0c5f8d6f4e0a851a"],["/Swift初始化模式/index.html","40d922c032bc2ba19c17761741432321"],["/Swift单例模式/index.html","43ba564983e93f44bc7f8c2493231004"],["/Swift原型设计模式/index.html","3ce7c58e94bc087975d852853bac0876"],["/Swift命令设计模式/index.html","7e948d62de3f3fa8f8435940d320c786"],["/Swift外观设计模式/index.html","d5a7a283753c849a808aa00c311d25bf"],["/Swift委托设计模式/index.html","527a7a70a9c606cf8dc40933d9c1b6d1"],["/Swift对象池设计模式/index.html","a66985830d69d1992317881f3190c7cc"],["/Swift工厂方法设计模式/index.html","7a5da31bb3411c7fb804b89b43514b45"],["/Swift带闭包的懒惰初始化/index.html","b4066305d8f1491094a68c418a52ef1c"],["/Swift抽象工厂设计模式/index.html","a7b371c4f0f9f388724e1d31716e6381"],["/Swift掌握iOS自动布局锚点/index.html","a29b24f9f4f6d24ecf2614e5d15e8e5e"],["/Swift支持旋转的自适应单元格/index.html","a885c2ae23fad4dad00c5eb96de25939"],["/Swift枚举值/index.html","59abdb33e1c0ed3638446fb5cabff2ed"],["/Swift生成器模式/index.html","44813672916cb15cd28d26a8f1c3f90e"],["/Swift结合Xib文件自定义UIView/index.html","9a176c6a296606500f3c4c82e9520c8e"],["/Swift编写的20个iOS库(一)/index.html","e9bac95acbef977200f45dfe60f43482"],["/Swift迭代器设计模式/index.html","b057bb0fdd9cee4bfae317623e5c9585"],["/Swift适配器设计模式/index.html","ae2db44546bb5de6324ac4f9dd53f712"],["/Swift静态工厂设计模式/index.html","e4e1307efa31ebc327cb94b39ed6fa09"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","0eecdd81659eeb4ed82e0c0aca6beeff"],["/UICollectionView data source and delegates/index.html","462e5a05fcc7c9eb0f5d2c6182d7676e"],["/UIKit初始化模式/index.html","60981dabe23622cb7dc4772c328f609d"],["/Ubuntu18.04替换国内源/index.html","4082f5b5456ab5e2927ce083ea70fe59"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ccbaa7739458ac952a415c07cb5d3229"],["/Vapor系列 (一) :  Vapor 初探/index.html","2e0205ec065060baef1195cb75db4bc2"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","4a8a87a9cab227844c44da7450944f4e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","bdfd81dd84d7df61a25a58a562299703"],["/Vapor系列 (五) :  使用session进行authentication/index.html","836d0b2c664966c050d078aec065596f"],["/Vapor系列 (四) :  创建博客数据库/index.html","cb0ac9fb2e8d41e400a0333da1353832"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7bfb2b70a35646da2551bc3af53710e7"],["/Xcode扩展/index.html","6b32c25aeed7ce3e351e8a001ad93ef7"],["/about/index.html","00b4bf8d75d6a58d3c363cd2f6042120"],["/appleOS的Networking示例/index.html","88d890fc0b9aa1e151258da35e7660bf"],["/archives/2020/03/index.html","bbbb674aacce3b164acea112329affe8"],["/archives/2020/04/index.html","321392407e85717ce52188ab7888ad05"],["/archives/2020/04/page/2/index.html","42917563f63ecae5223e6955068c3e91"],["/archives/2020/04/page/3/index.html","f1c3c8d9688f0f81f74ec8c40cd05ad5"],["/archives/2020/04/page/4/index.html","89f3a8a825f7647a49c6817e38d6bf10"],["/archives/2020/04/page/5/index.html","d442270784fb1b4887b96e84c5b4e933"],["/archives/2020/04/page/6/index.html","ebab4377246e9ab4b421ea3036e21753"],["/archives/2020/04/page/7/index.html","35def7bf7ac7291d08efcbd36a607241"],["/archives/2020/04/page/8/index.html","4ec711c83ac75b7a897d410ff3d31c0f"],["/archives/2020/05/index.html","421d156e33b402f2af4509bad85a5b12"],["/archives/2020/05/page/2/index.html","38f21f4bdb83b40fa7ffcb3296b262d5"],["/archives/2020/05/page/3/index.html","80aa44ff62bbeac82ebdf5c7e89da25c"],["/archives/2020/05/page/4/index.html","986cc18e1958d0f6cb1ef821514a13f2"],["/archives/2020/05/page/5/index.html","bc98a93d806d1d1c6d15cff395465505"],["/archives/2020/06/index.html","91c8277e2a8c316e000038c2e3bb941d"],["/archives/2020/06/page/2/index.html","19a0f317e3476046a09d5f71ef4f6de3"],["/archives/2020/08/index.html","697f4f72c164c6856c32badd4f556c3f"],["/archives/2020/09/index.html","0273c25e19834c0c26eeb0c433fed383"],["/archives/2020/10/index.html","85db789386c8801f5980af17622f0248"],["/archives/2020/index.html","05be8fadd3b16158d1bea615a7fa0233"],["/archives/2020/page/10/index.html","2bd01d488bc9e94eb77d69744bb74c8f"],["/archives/2020/page/11/index.html","b0e74815c27399c3f15ffcaa609c3276"],["/archives/2020/page/12/index.html","28eb9c730c6f219173a59959bb215443"],["/archives/2020/page/13/index.html","f760b63d8f0e444556f0383b2549ef77"],["/archives/2020/page/14/index.html","4c0ea1c50292465ef46fbf368f766c66"],["/archives/2020/page/15/index.html","7f1d797456a51764f7b076608da64a57"],["/archives/2020/page/2/index.html","3789b74c46e37bc400080624e1fded05"],["/archives/2020/page/3/index.html","82dd58b51289aa8c235a253c51932206"],["/archives/2020/page/4/index.html","d57485ecd50ae381aabe6bdf9bc98278"],["/archives/2020/page/5/index.html","46f4d6e8e1ac24e254eb7e3ada30a5d8"],["/archives/2020/page/6/index.html","d30a6e791787703374dc6806df0c3b7b"],["/archives/2020/page/7/index.html","0a574782d1425771daf04aaae3a79d39"],["/archives/2020/page/8/index.html","53a4ffd9cb3afd37055cf3d95cc684c7"],["/archives/2020/page/9/index.html","cf77eae256682c50a1adaecb9994d796"],["/archives/index.html","5a14d40a7d0958260ffdcdfec1dccd5f"],["/archives/page/10/index.html","9697c8899e76da06ad9e9f066d6eea5f"],["/archives/page/11/index.html","37f005bc03b2e64e391edb0ac08cfb7e"],["/archives/page/12/index.html","08960e884e3d6284f6b4e6d0dac500fe"],["/archives/page/13/index.html","acfb99197a052789afea3d62c356caae"],["/archives/page/14/index.html","bf2b890a406ad9e2c4c167edbb69abc7"],["/archives/page/15/index.html","f2a0d61c77f6d8a130101b45dcd944e3"],["/archives/page/2/index.html","ceb29fbaeb2f9fa9ee7b2fb2762ff88e"],["/archives/page/3/index.html","65ef87ba67889577bb611eefa454ba51"],["/archives/page/4/index.html","85dd9ee291e2e5543040af9874e6e7de"],["/archives/page/5/index.html","9ed16e90b4abb6cc2849e912d14f7ffd"],["/archives/page/6/index.html","f67980eab08b4b0fdddbf030e9f8c1a2"],["/archives/page/7/index.html","e47994b4da8e3f8b6a8bb421c478af38"],["/archives/page/8/index.html","9a1e9c2b5120b141e24ab93237038c0b"],["/archives/page/9/index.html","a7a2f1b68e692ff215a3d062a33afe00"],["/bugly 上传dYSM文件小记/index.html","c77125349194ba36dae370339f2a050f"],["/categories/Advanced-Swift/index.html","d9c4e353de494c34620fc8021ad493ba"],["/categories/Advanced-Swift/page/2/index.html","d6a5259c76678eb613c04dec2727b66a"],["/categories/App-Architecture/index.html","541586c7f264e0edcf4300962b36b5b0"],["/categories/Codable-protocol/index.html","333fda631e3eb1ebe3c0b6bf79b34906"],["/categories/Combine-framework/index.html","9e9b840b703090195d4d30730965d90c"],["/categories/Combine/index.html","c5d838fba2cb74e726fb7913de4c5e4b"],["/categories/Go/index.html","2b9ba4020e9e2fc317149fdae0743b8e"],["/categories/Grand-Central-Dispatch/index.html","cd7c25d46e0f09110c7b948202c8f333"],["/categories/Hexo/index.html","4f5d9da8d4b87c14b8b17f09506447c1"],["/categories/Promises/index.html","0410fbe5c7d0548124bd664243190328"],["/categories/Result-Type/index.html","9d524b9523a44f0cf295451d74e08830"],["/categories/RxSwift/index.html","5419ba748272197a786849a5d33aaecb"],["/categories/Server/index.html","0d32ec23c0546c9799e3d8f9b6a7b18b"],["/categories/Swift-Apprentice/index.html","450cdb8d0ecc839210a6a3f431f7e304"],["/categories/Swift-Apprentice/page/2/index.html","44781f3843e92cfc96ae322f7cbc65eb"],["/categories/Swift-Apprentice/page/3/index.html","5ec8bddb60c0b4814f7da5b864250e73"],["/categories/Swift/index.html","4535de03b6675ba77f298d921b7b8928"],["/categories/Swift/page/10/index.html","3a2104ee3c573e7f88d4ff106edcb3dd"],["/categories/Swift/page/11/index.html","08d54b8b2610d239ab0ee952808c11e1"],["/categories/Swift/page/12/index.html","1a3882f5d8fd0a1d465f647d0ef41e59"],["/categories/Swift/page/13/index.html","033c65bf6b74d7ee19c7ac56a0fbf2c7"],["/categories/Swift/page/2/index.html","e148c01208c51ac8443c47f8b07f51c3"],["/categories/Swift/page/3/index.html","1bd9c69fad031b35bed5b3ba9363ac87"],["/categories/Swift/page/4/index.html","592d568abe33226161cf0c7cfa91572a"],["/categories/Swift/page/5/index.html","5c18ba08bd105e44627931fb2fb7ad68"],["/categories/Swift/page/6/index.html","4c704d9eadaedfdf48d4568d7f3a59cd"],["/categories/Swift/page/7/index.html","9b800482b79556fe921166a8f05a43c8"],["/categories/Swift/page/8/index.html","5dd72947eb2b1c4581520845ebf6e2da"],["/categories/Swift/page/9/index.html","fc827ec9bc7966aea447b85348a40ec7"],["/categories/Swift5-2/index.html","508b2c638dac24d9fea315d1b9f9b6cf"],["/categories/SwiftUI/index.html","13a17acbb2cf16434048df495833e7d9"],["/categories/UICollectionView/index.html","f7d27e355710bbeff585e13d620e8f81"],["/categories/UIImagePickerController/index.html","b1b73752165229247347760494451429"],["/categories/UIKit/index.html","743a1d7e2d32b690af7c9d280fb72f4c"],["/categories/UIKit/page/2/index.html","562be318f4ca910acafc32d77995eafc"],["/categories/UIKit/page/3/index.html","00d9a85bb4549ae171ceb479a35f3529"],["/categories/UIKit/page/4/index.html","ff05d10c63eafc53f0bdcf6c4fa87d2c"],["/categories/UIKit/page/5/index.html","23e10543d3fc0cbccd0a246d32fe0488"],["/categories/UITableView/index.html","21dd2b4da32d537f7961beefc223bc9a"],["/categories/Ubuntu18-04/index.html","44c20547753e62264c4653f12f0ee937"],["/categories/Ubuntu软件源/index.html","44754fa5c59588b67827d2ab3a1659b0"],["/categories/Uniquely-identifying-views/index.html","42c489aa5aa290310aeffcfac13e64ee"],["/categories/VIPER/index.html","525517a4fc5fe7062ccc61837c4578a3"],["/categories/Vapor-4-0/index.html","c22cd305d5c05952efb93eddcdbcaaf9"],["/categories/Vapor4-0/index.html","970c8ac8dffe66b68b36dbb3ab5f2bc8"],["/categories/Xcode/index.html","d58343f1b8c6f4f2903fc069e78653be"],["/categories/appleOS-Networking/index.html","27b9dde526dd63964b33458c36a82c58"],["/categories/bugly/index.html","1ff1f81ddac5a9d5185b947e5484130a"],["/categories/enum/index.html","64ac4d2320ff7c40b0f76e321dd527dc"],["/categories/git/index.html","dc39d1c221c1c3195c2a5bdb377e945c"],["/categories/iCloud/index.html","c6750b0d8d7f845aa4c00f5e563ba319"],["/categories/iOS/index.html","841c3c85e53367668b8104f0d7a6a64e"],["/categories/iOS/page/10/index.html","87e40775e4b45e4e49f2437a5b00138d"],["/categories/iOS/page/11/index.html","3fc1aac34e028d3946f9ae0662065a57"],["/categories/iOS/page/12/index.html","a31a3ec939ca8aca161a8cf8915e5add"],["/categories/iOS/page/13/index.html","155ed9f20234394aa8c4b05560773398"],["/categories/iOS/page/2/index.html","f61472f753f3e12ad5d49929d4d9e970"],["/categories/iOS/page/3/index.html","d97474a55e6419175d70311a6a8f67d5"],["/categories/iOS/page/4/index.html","78d838d77f6db98aff9d68f92020fa87"],["/categories/iOS/page/5/index.html","1987fd74791a02a79d2570dc6f33e8c6"],["/categories/iOS/page/6/index.html","32782bb560cb93abb5bfebf82e75f57c"],["/categories/iOS/page/7/index.html","a71e7bc7e3b8d49bc4ce951ed1736e9d"],["/categories/iOS/page/8/index.html","ed6b6fada94768efbe3d39a201e64aa5"],["/categories/iOS/page/9/index.html","d98d797db7b4b1a87bc3a0e824a7a14b"],["/categories/iOS面试题/index.html","9f797d506b3ba726e4d5515368fe1f1f"],["/categories/index.html","74545131ca195c2e4a07bc9b39510e69"],["/categories/random/index.html","d411da45f311534d6343d69729bebff9"],["/categories/三方类库/index.html","08048c92e76696faafdca2a3b7040704"],["/categories/函数式编程/index.html","8d7a057577dfcd0cf99c32dd7fe215b8"],["/categories/子类化样式/index.html","b1225f4573b117859243994c5a4d8784"],["/categories/开发记录/index.html","c0f9a8f1ee772fb3d155eed3f456b314"],["/categories/技术支持/index.html","e0ecc42864727b2fe0317062f65770d6"],["/categories/架构设计/index.html","b811f180057e0e6335e2730fd496de18"],["/categories/测试/index.html","0f16b6c09cbaabfbffbad494d31b3166"],["/categories/用户体验/index.html","f64411ceba69e5a9f54438164e9084c2"],["/categories/用户协议与隐私政策/index.html","7b3083d81f712e59a74715de1f641c49"],["/categories/设计模式/index.html","82a9770f451993cbbb128308944ad130"],["/categories/设计模式/page/2/index.html","bd8fc997c71682d269870291c5e6b361"],["/categories/设计模式/page/3/index.html","841547df9c643e31a1ef88570f599272"],["/css/main.css","6c7e1d1e5eb77e627b99ed9378b510f4"],["/hello-world/index.html","db9bc12ed4d8a822affcf29f22b2588c"],["/iOS VIPER架构深入实践/index.html","9a4ca952dd54a2c07d213b69291255e3"],["/iOS 自定义视图，输入表单和错误提示/index.html","424245bc32c213e5928b18b367d4fbe9"],["/iOS如何使用iCloud文档？/index.html","6675b8a8d2d0fd4e7fc16ae152783b45"],["/iOS子类化样式/index.html","3d97abbac18a53b4c3ffdbe501013831"],["/iOS开发记录<一>/index.html","8baae28e0ecb6cf50d403e53526f6b34"],["/iOS自动化布局编程/index.html","f2d9bcc648255174bf48e999f6616c1a"],["/iOS自定义转场(By Swift)/index.html","9ea77ac1f00463a3d33b9af7a45c984c"],["/iOS项目架构：使用VIPER/index.html","30074b7f756aab155997d4cd5c670c7b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ce80e01fbcb2c80f3d98fd7dfc54dbbf"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","99c16743c78a744b90d0078e3f092051"],["/page/11/index.html","69be6580464c6333aadf45d7f5d6b62c"],["/page/12/index.html","323eb0621279fd8bc195567f30aabea1"],["/page/13/index.html","4d434e68d362106bbb68486cb19f9877"],["/page/14/index.html","64130ef085f933d6fcd46ec28b28bef2"],["/page/15/index.html","61f294091942ceff67cbacfaa530e915"],["/page/2/index.html","bd51e464c007b7f03bd3e8657b0fc632"],["/page/3/index.html","5b139cb85e9bd169fc508363a262c4cc"],["/page/4/index.html","73637ca149232149144186c942900827"],["/page/5/index.html","daefb2fbdf2f39a505bda322b9fed3b9"],["/page/6/index.html","cac7db83c68c4c3a07a6b83549faf8ba"],["/page/7/index.html","7111dbb5e2d93091ad1a55c0c4478193"],["/page/8/index.html","c3281d1f948fdcf79c6a2e488df2b42b"],["/page/9/index.html","1f21db56eb38d68340d4e1d9f10fae9f"],["/schedule/index.html","105e53918af518dc2969e6afce2c1629"],["/storyAppPrivacy/index.html","1f526344dd861c661a2a807b0a305da4"],["/sw-register.js","6908092da512a9f7db1cac19e92f3400"],["/tags/Advanced-Classes/index.html","d51c713e0fe4589b734c277924e77a50"],["/tags/Advanced-Swift/index.html","b6ae14aabdb7aefb50cbb56840c694cd"],["/tags/Advanced-Swift/page/2/index.html","34cfb4dafcab80b463e62b5b9458ef0c"],["/tags/App-Architecture/index.html","50cdae5bd350ce1ba473dfad4dc6b020"],["/tags/Arrays-Dictionaries-Sets/index.html","21486ec09b48d9228fd6579795ed1979"],["/tags/Authentication/index.html","d4744c3f1a416dba3b0620e2b4d6bfad"],["/tags/Build-in-Collections/index.html","2531a05fff26f558d4fc48d4d00d9f9d"],["/tags/Building-Your-Own-Types/index.html","a5fe31e6b8f9ca8b298e00004780b99f"],["/tags/CMS/index.html","2fc332c6ca81f63e5e6d6f830e48d5e3"],["/tags/Classes/index.html","30f2f205aa1a395fc09ec3b142cf7066"],["/tags/Codable-protocol/index.html","cc4ccab12b12ec4c7a45ed69ba4b4eef"],["/tags/Collection-Iteration-with-Closures/index.html","9926448da929d64bb3992e685fbeec27"],["/tags/Collection-Protocols/index.html","37617ea3be317897dd60768f446bf653"],["/tags/Collection-Types/index.html","ce070ced79d00d988b6d3d662f5df819"],["/tags/Collection/index.html","f609c496b99e72dd2d3fb2140c457230"],["/tags/Collections/index.html","55cd079c1420227768d0ab4e2c4e1e41"],["/tags/Combine-framework/index.html","201c93ed6b2b7d6437d3c1838ce00a0e"],["/tags/Combine/index.html","bd31b2b9ee35fb61966d9e2f7e8d2e52"],["/tags/Dependency-Injection/index.html","b58206a9049a6f3d4cdd929a98c28525"],["/tags/Encoding-Decoding-Types/index.html","755154751d87d79ac50c67c50f0eebbc"],["/tags/Encoding-and-Decoding/index.html","90a80b817cbcfc50843c6c0de42e4dc4"],["/tags/Enumerations/index.html","cd715f722eba6c167c9cf5a1df83b61d"],["/tags/Enums/index.html","b659887fe1c452dda4726052100eac6e"],["/tags/Error-Handling/index.html","dfa6ef9858787decb5dc224c46727004"],["/tags/Functions/index.html","d8c45b18cc68589352428a5a97da9f43"],["/tags/Generics/index.html","30f07052e05b95224c3b1067a5c26e40"],["/tags/Go/index.html","722495a75ea79ab4862427a6eea209c7"],["/tags/Grand-Central-Dispatch/index.html","74c33fab0616caf16582e8c04a006af5"],["/tags/Hello-Vapor/index.html","7fe061334cd1c24c26dc87c9f7af2877"],["/tags/Interoperability/index.html","3ddb84eaca0ecab4aa10ed39f447a46f"],["/tags/Introduction/index.html","86342caa0cc69d77e515ea0152cf1d72"],["/tags/Leaf/index.html","e7d4f96b76405f15ae955ccb95ad0d68"],["/tags/Methods/index.html","70383b688fbab0a9ae9f53b4beba6e1e"],["/tags/Modules-And-Hooks/index.html","b4f7692113d577e8d34f7023c4f45219"],["/tags/Optionals/index.html","9b980fefdbac50f491c3b155f7c68d01"],["/tags/Promises/index.html","c2913448d6b227de6b74b87670eacd7e"],["/tags/Properties/index.html","6c5be94243c37a98f6b403704e650375"],["/tags/Protocols/index.html","6841d0922628a2bdffb152bde2e101b7"],["/tags/Result-Type/index.html","2e05b88ddcf63db4b35ce0b6440ea38b"],["/tags/RxSwift/index.html","ad4b801ee34c078e6ce4f9ee713d7f9c"],["/tags/Server/index.html","2ac107d7cd0bce285ac4b1789af72e78"],["/tags/Session/index.html","e23b8609f6cf7d77437a19b775bef68f"],["/tags/Strings/index.html","453341c99f2c1fba28577dd8d29604f0"],["/tags/Structs-and-Classes/index.html","1af5b62a995416a498b425238698e876"],["/tags/Structures/index.html","c70a99ee24e42a4d64775d62dc93086a"],["/tags/Swift-5-0/index.html","1a7e0c094b1a28cfd20b7ba91f73cd61"],["/tags/Swift-5-0/page/2/index.html","e8fa1b9faaa5ca54a22a3ea05762424d"],["/tags/Swift-5-0/page/3/index.html","143fbb5ec0b88ffdf9a6328c6278473c"],["/tags/Swift-5-0/page/4/index.html","ce6fe87ee5a62c58053b8139c23f4e9f"],["/tags/Swift-5-0/page/5/index.html","13fea529d01b96686bffe533c6ff82db"],["/tags/Swift-Apprentice/index.html","c505e4e84b58c51113cbaa742a175687"],["/tags/Swift-Apprentice/page/2/index.html","4bd9adb9bf1f64b2ef8260eb5a950cf7"],["/tags/Swift-Apprentice/page/3/index.html","ec532221512b3631527ddbecc960442c"],["/tags/Swift-Package-Manager/index.html","3c3ba4cac7eb2821de7f1d91a623c975"],["/tags/Swift/index.html","1f2177ec40c82f46e7e9410bfc42e081"],["/tags/Swift/page/10/index.html","ecf10772a4dd352e080c064b996340e3"],["/tags/Swift/page/11/index.html","a65f420d9aa4eb0c1b7be85e72096469"],["/tags/Swift/page/12/index.html","9a50db3e515162dbb614b6358204ee81"],["/tags/Swift/page/13/index.html","0a2df98bfbb1b4ae9ed904211cb43671"],["/tags/Swift/page/2/index.html","31fa5aaca814dc32d1193cb978d2cf23"],["/tags/Swift/page/3/index.html","31f45c58fff2c141e546b267c855fd92"],["/tags/Swift/page/4/index.html","4918cb44bff05454b68e4b7efbd02439"],["/tags/Swift/page/5/index.html","35e377c5c78778d0242ce54ca2e39ded"],["/tags/Swift/page/6/index.html","cb451abf912213aa8412c931b087c990"],["/tags/Swift/page/7/index.html","4238354cd1ddd894c678ed27cc967b55"],["/tags/Swift/page/8/index.html","7f9a8da2f5420958caaacb579228d77d"],["/tags/Swift/page/9/index.html","0a49673ebc2cc40b736707b3772bb489"],["/tags/SwiftUI/index.html","249261deaaeed53a903f698cd4b3f1fb"],["/tags/UICollectionView/index.html","35f29ea535ee667772a05a1560adc09b"],["/tags/UIColor/index.html","f6216bd19ac0fc2a47a247af3439cc99"],["/tags/UIImagePickerController/index.html","6b24ad8727423ca37ae57e4c74507cf1"],["/tags/UIKit/index.html","099a97c93436d4fdb552f6fea90b1fdd"],["/tags/UIKit/page/2/index.html","2593621d5a9e2a560729a795c91ad388"],["/tags/UIKit/page/3/index.html","099ec2c1e81d8d2cb9b3880181374a56"],["/tags/UIKit/page/4/index.html","d9a0b79217a5abb256d037ff7051e339"],["/tags/UIKit/page/5/index.html","34b7be12902f61dc06e610db3fa9a3b0"],["/tags/UITableView/index.html","cd5cc1e429a19fa562a5c3cb4a997e4b"],["/tags/Ubuntu/index.html","0521148b4fc7eb663a6de3744f536579"],["/tags/Uniquely-identifying-views/index.html","7c3df2a03513f46c8c650726e377144a"],["/tags/VIPER/index.html","c01df7051493b22695f2648450f41432"],["/tags/VMware/index.html","1e6b062d67c9480821f1f8dde20f214f"],["/tags/Vapor-4-0/index.html","681ae2be17cf26c5ae27c9f4c1f7d019"],["/tags/Vapor-初探/index.html","cf797e0ba1e60c184658440020c12340"],["/tags/Xcode/index.html","37f4e0b4acf9db43bf79d293daaca1d3"],["/tags/appleOS-Networking/index.html","a1308b56e9e00a1efe0a4cb235fc169f"],["/tags/bugly/index.html","1697924269dca57de6f5d967438c3e10"],["/tags/enum/index.html","ce7217662e65f2878272698beaa66b7f"],["/tags/git/index.html","048de1ca2467772a5069a39f8d0b82d0"],["/tags/iCloud/index.html","c5d2e6ed41dc25c5db2d62667294c57c"],["/tags/iOS/index.html","fe131db81161819e42a322faee6c87da"],["/tags/iOS/page/10/index.html","22b7436cad7dad5d0a72d330c73a8b7c"],["/tags/iOS/page/11/index.html","2dcebaed82f6782727e6e2ce4b93c621"],["/tags/iOS/page/12/index.html","2b59679f7d80d648ebed43438740ff75"],["/tags/iOS/page/13/index.html","1fea74e17dc8796ff4d885a70f2e41a5"],["/tags/iOS/page/2/index.html","cc132baa5421ec37e87a0c17e385177a"],["/tags/iOS/page/3/index.html","a14fdfb57171157be0534d8d2b86e420"],["/tags/iOS/page/4/index.html","2d2ade578a2bacf541be7e5c7563ede1"],["/tags/iOS/page/5/index.html","f837c28eec149daeff3d34aa60fcbcd2"],["/tags/iOS/page/6/index.html","2ea6e97fa0290f3a813ac4424b0c6e14"],["/tags/iOS/page/7/index.html","98e19a8f726296888818ef5910b6d4d6"],["/tags/iOS/page/8/index.html","058ae94807a0afb9060adfb3f2928bd6"],["/tags/iOS/page/9/index.html","5d68f1cf72ecf945e6572e40dbd235cf"],["/tags/iOS面试题/index.html","f725aef1684e441e59ee7611afeaca21"],["/tags/index.html","877d254fdcb6b12834930bcafde83e64"],["/tags/non-optional/index.html","02f00b12fd6c442ca468a1f33dfd4848"],["/tags/random/index.html","a716b9e97922ffbd66237bb0f07be259"],["/tags/transition/index.html","def602d3383ee24df1a2d468d0a37896"],["/tags/三方类库/index.html","1c32b2ca6872bf107fe0af701699bf75"],["/tags/依赖注入设计模式/index.html","91f556e6509250d7f9cc7348195c61cd"],["/tags/值类型和值语义/index.html","5dc04e63156c745bc76632b7c83844fa"],["/tags/内存管理/index.html","7569e50e8f08e3df28fe986ba44c9ade"],["/tags/冒烟测试与回归测试/index.html","346752c5547e0d37b3d36142c01e226c"],["/tags/函数式编程/index.html","405d7e62d52972f76e9df11e242a79c1"],["/tags/创建博客数据库/index.html","510a7771697f8c018a52ecf0d00e0d8d"],["/tags/初始化模式/index.html","84fdb6dd39a285f12fe63f47f05360d3"],["/tags/单例模式/index.html","5d55ed583001fab38801154c8036366a"],["/tags/原型设计模式/index.html","9f040d3cb6e85ad5b6f185172ce76909"],["/tags/命令设计模式/index.html","9044a23b6c72e71471847fff1a6abba8"],["/tags/基本控制流/index.html","904ffc5a0aa6badb0e0e1024321a438b"],["/tags/外观设计模式/index.html","6c30278c1bfd124c646e9fe669eb2d11"],["/tags/委托设计模式/index.html","8f68829758f21f8167d90f4a92a22c1b"],["/tags/子类化样式/index.html","18b8354b136a3ee9956c6d1219d3c929"],["/tags/对象池设计模式/index.html","ed7097a323ddccb4f56e397802585071"],["/tags/工厂方法设计模式/index.html","83aee5255f590c96051d512e03538a9f"],["/tags/工厂模式/index.html","3f8f5b6a7fb3a8d6c338ded5339472f9"],["/tags/工厂设计模式/index.html","0d9b5c44fc49025badfc9e2108b6d995"],["/tags/开发记录/index.html","c92f5b7db3328a007d0b5aa9ad066679"],["/tags/懒加载模式/index.html","6de00b53d8c5523e703f339c234b292b"],["/tags/技术支持/index.html","2ef22d661b7b9cc731fb404a14b574c5"],["/tags/抽象工厂设计模式/index.html","e406df52b74c9bf89d1b11d19ba1dbdd"],["/tags/构造函数/index.html","83ada6bd3b6b1c5e27ca8269bf1173e7"],["/tags/架构设计/index.html","e6bf9d5ffb99ae1cf861b64c7890537a"],["/tags/模式匹配/index.html","8a07a8c4bd9699f4953365e12c041ac9"],["/tags/生成器模式/index.html","6d1638cb5ecefa73de36b09e0ea03115"],["/tags/用户体验/index.html","fcd74432de84b55ea4830ab366e34bb3"],["/tags/用户协议与隐私政策/index.html","068cf9c6938346c7074723c5c1f96368"],["/tags/类型与操作/index.html","61a11755efb57b03429b4fa64ef07c56"],["/tags/自动化布局/index.html","ccc16bb982fcecefad9152986b790bc3"],["/tags/自定义UIView/index.html","ac2e3171b84a46eb03fc468853477ab8"],["/tags/自定义转场/index.html","4521ca3db686fcab81989bbccd70934a"],["/tags/自适应布局/index.html","e5647abfade06e5a93c5e7874947d81b"],["/tags/表达式、变量和常量/index.html","b2e43581abe2b68292896db92cd726bd"],["/tags/设计模式/index.html","9bfea8d87bc75477ac74ac79530eaa0a"],["/tags/设计模式/page/2/index.html","8b53e539a7bf2d5a6a97b8727bc4a87f"],["/tags/设计模式/page/3/index.html","011d0a5dbe4c8e64ecad44b776fe2135"],["/tags/访问控制和代码组织/index.html","e76a7ea36f09f67bc70f555e2b32d261"],["/tags/运算符，下标和键路径/index.html","a8567520ba554a081c0f19aecc13f12b"],["/tags/迭代器设计模式/index.html","8275e9231a5330b87c41e19695549745"],["/tags/适配器设计模式/index.html","879d9266c8eed70b33bcd45f4a2bdf27"],["/tags/错误处理/index.html","fef62e9c98f65347bf1aa078e12d4a08"],["/tags/静态工厂方法/index.html","69dd7e4bfdd64b40abd1a3e66bc00402"],["/tags/面向协议编程-OOP/index.html","1ef55138453d7985d776e30b2375e7b4"],["/tags/高级主题/index.html","fe000c1550ec3de1623743dc97280ab6"],["/tags/高级协议和泛型/index.html","12f0d403ea5dfe107a1569a355d5bb8d"],["/tags/高级控制流/index.html","2a671e4bc8dfecda32a3cd34ff055f7f"],["/为iOS应用构建输入表单/index.html","17af9b13b26f56afae2bd8721d0f17ce"],["/产品开发的幕后花絮/index.html","b841208cfacd933a32e434c771652a71"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","385759f639d946557c5194b69f4a7a92"],["/冒烟测试与回归测试/index.html","69aa53f7deabc026d60f3f37bd9e9d7c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","da88458eb5ebd4c197b82090ce4d026f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","115eefa6557aea9f56032240e2bcd3f4"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c4bf9d52e9299eeeb3486105aeabe331"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","79ae77e26d111f16b704fc3dd56ac602"],["/在Swift中创建自定义集合/index.html","92c96e8d210594ddbfee522f513b1f39"],["/在Swift中处理非可选选项/index.html","2cdb5305d648af2919973fcdb8d37d01"],["/在Swift中生成随机数/index.html","656e67d4f9e95d81b5e609e8b33d6ad8"],["/在Swift中重构单例模式用法/index.html","cec7dfc2f0931bd8096cf3a45520e854"],["/天天兼职用户协议与隐私政策/index.html","f3db95163b660473a08a3106f458c76a"],["/如何为VIPER编写服务？/index.html","7224c067bab4ad5f89f6e9fc66840280"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","78bed4d699d59cfbde4da99caae9f41a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","2713dea95131b6c2c334262f302c0f70"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","163a9656d121a0bda276f5aaf94d443b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","acd32f6a0f9d635144ae1518a0ad7daf"],["/掌握VIPER架构/index.html","3475f7ab57d3a035c6dfbc6f04a2bcea"],["/揭秘 WordPress Hook 系统/index.html","93edcddadf90cb5a98eed2270e150022"],["/比较工厂设计模式/index.html","572106033d984324dcf02da689896486"],["/深入了解Swift中的Grand Central Dispatch/index.html","716bfcab948ff8ddf3abf8f217410cfd"],["/深入研究Swift框架/index.html","6cd1d069be425eb0e7e8b2da0a1c66ce"],["/美豫直聘技术支持/index.html","1e52981c4ed0dba93a0a2af8e115ce06"],["/美豫直聘用户协议与隐私政策/index.html","99f72b7f428f7b2e00b1e82214e3d1e8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","07824fe9c88e77f482d39721b143233c"],["/选择Swift而不是Objective-C的5个理由/index.html","085f984d5a0a149ad81f2a4e097e9e35"]];
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
