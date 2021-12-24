/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","647c8d758eeaf0a3729dec2a9f984a1e"],["/2020年iOS面试题总结(三)/index.html","edf5c707d48652dd8df1257ceef0312f"],["/2020年iOS面试题总结(二)/index.html","680964d2b1652931e4ff9893f2b400bd"],["/Advanced Swift系列(一): Swift 简介/index.html","5bf8813ca97c11709a318695df31db40"],["/Advanced Swift系列(七): Strings/index.html","a8bf3052ca7724bc05bb221831c68b1a"],["/Advanced Swift系列(三):  Optionals/index.html","ff5d7b642b7a335c5698ea1fdd7989b8"],["/Advanced Swift系列(九): Protocols/index.html","95785bc2bc25a514f2873a8ba7e6d3bd"],["/Advanced Swift系列(二): Build-in Collections/index.html","7d4fe7c963c94cbc338b8888e737ea7d"],["/Advanced Swift系列(五): Structs and Classes/index.html","c57b360bf19a48234029419a6955f647"],["/Advanced Swift系列(八): Generics/index.html","6ef3917fca97680d47e742abc002350d"],["/Advanced Swift系列(六):  Enums/index.html","290213950ce3be2b61e99cfa079298e6"],["/Advanced Swift系列(十): Collection Protocols/index.html","bcfb4482c6aeacf85fc8b0983baba234"],["/Advanced Swift系列(十一): Error Handling/index.html","b4f2dcafdf070df3c9498ca69ae871cb"],["/Advanced Swift系列(十三): Interoperability/index.html","18658036cad1f92ae3e1fa58b9467d60"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7d702d5d475c85cef2234000ba0e480c"],["/Advanced Swift系列(四):  Functions/index.html","f6d39915fae9da6252a18474ce54dec7"],["/App Architecture系列(一):  简介/index.html","f194362dad800f83165a15bb0da0e289"],["/CocoaPods 设定版本说明/index.html","5aa550da6e7063683e7f7ae88071f591"],["/Functional Swift 初探/index.html","14e3e7728303505a632579230ec4b545"],["/Git 使用小技巧/index.html","2ef0947ff6b9a2fc3b3b955feecf415a"],["/Go Protobuf 初探/index.html","88ce08c635b6ebf84debce624d68b4d2"],["/Go mysql Tips/index.html","170a746e8bad304b1374f5c89f494075"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","f528e219a80cad11904f590f066bdf26"],["/Go 入门篇：2、Go 实效编程/index.html","85ade48770d4a9195e5f8fbd5be271b7"],["/Go 入门篇：3、Go 重要概念/index.html","9848696e0343e80cad9bec2563b8e80f"],["/Go 基本语法初探(一)/index.html","8221e27421baac3cb8f554edcca83c90"],["/Linux VIM 命令及操作小结/index.html","fdc122e4f83ff6bd9715364c618245b2"],["/MySQL 基本操作/index.html","f979f5869156761f1766535f39e78227"],["/MySQL-列类型和数据完整性/index.html","581481a733f377e898bec09b2b7a9818"],["/MySQL-数据库设计和查询语句/index.html","f0c04378f95a5304a8ab7cdddc2049cc"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","8b6c4af6accb5b9294fc8c005acd2b10"],["/NSCODER和SWIFT初始化/index.html","6f176e27cb3de5b4ee4475651cc54ec7"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","3f41785da3febf864b52cd96b072709b"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","a09c04294e947c028bad3e62ab5fc0ef"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c8a12455b506eec4a8486bf7cc5e53ec"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","46399633f8da316101d88e27b96caf53"],["/Sqlite 使用Tips/index.html","54f5cc7d31b953eb216f050390a7d5ca"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","52c0eda419414659848ad1cd26f31a07"],["/Swift 5使用UIImagePickerController拾取图像/index.html","60f4a5dbad81f988fd7b2c63855122f7"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","62defdc5dc09ed48866195619adcece2"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","c57948f48c4c19e7cc9890ede878d774"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","ed8bba4df4473a524766b11f0fd873a8"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7a6865740894e6e16b693d6175c9fbf4"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","54607d56df9558208a2af7b5188c28d2"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","5b33cd87d3bd12b58b653cc3352f1181"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","93940cfbff1f293887038150cbe35f34"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","2552031e1e0297b14f78da3a2ae2f5f0"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","86ffbb6e29f6f31d6fcbd989a525e7f1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","432daccc57fdf0993bb3f61e505e0cc9"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","0c0764a4cee50cd3038db941b5630767"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","27b93f0cb3f740bb401aacec2414f212"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f2d6a19614fad1ea7495bfaf97a211a9"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","981f8c9d49841309108e7e941101bf96"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","25c6a642622c8b022ea3913801bcd4f4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","a7f6ad99f1b6fec3450ab559eb62ebdb"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","71b41d41d7ec2860b8d0f8766b2527e2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","0c1af7ff7dc3d086e4c0121308a2743b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8dbacfc2ba3e1c1eec6e80b37be4a209"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","82d53e6361ae2797e7af806360c26001"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","5dc7632aff569cb3e4f0ca20e8be0dcd"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7ab1a35da329c328b7097c9331b994de"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","c799eb998094b5b8f5738af6907004c4"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0066c497b7178df6ed105655dbca71d9"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a9362ffe9f6adf8351d390542f6b0c44"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","8bb8b3e7f75e51dd5b0275d0a0dd4ff6"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","212b2655f2fd2743f2572e0ece9938da"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","ebb4621cc9d674206592ab2dbd8c0204"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","550beaf9c114a38dea28d2722abdcfae"],["/Swift CompactMap vs flatMap：差异说明/index.html","62d6fdb76dabb2775460eb9d2f692e47"],["/Swift Grand Central Dispatch 深入实践/index.html","c4316864eeb8862bf21e8ca6fa04c557"],["/Swift Lazy属性初始化/index.html","1ac080956e8d54daf2255ddb329e4620"],["/Swift Promises 初体验/index.html","e3b9bc5186fd074a0eb46ff67eb5fbfb"],["/Swift Promises 探究/index.html","63be56846520cba7811a7960f1a3c2e3"],["/Swift UICollectionView使用指南/index.html","71f7852fea427bea623084b69ce61517"],["/Swift URLSession && Combine framework/index.html","a5a4c18e2bb5304b58f826e1fcffcbbc"],["/Swift tips/index.html","6d0012c8c05393df388548802dbbbfe5"],["/Swift 三方库：GRDB 使用指北/index.html","381ed7003dc2102384db3cdd5ea997e8"],["/Swift 唯一识别的视图/index.html","3cf63bb7be7fd340b65aed5069d55169"],["/Swift 如何学习现代UIKit？/index.html","a3853691774d1fe5aaa3ae6b4ec6c821"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","fc18be50fdab24864e38e44b5723e2e7"],["/Swift 用 compactMap 替换 flatMap/index.html","26c5ffba5c6df3bd25bf8797b9a10391"],["/Swift 选择和播放视频/index.html","0781bb03eb977188fb41b6b7b82e4ccd"],["/SwiftUI 系列(一)：1、 简介/index.html","0a97f50e034bc7963954200d7bf8a261"],["/Swift中UIColor最佳实践/index.html","246e1e89e435478917b97230c144627e"],["/Swift中快速简单的工厂设计模式/index.html","7fa4583e05ac49af31588268d3587b03"],["/Swift中构造函数与静态工厂方法的比较/index.html","2d6651df896f7f650b02ada4dd76e44a"],["/Swift中的UITableView教程/index.html","9d6e4ff68f3ea27d4ee7174464823067"],["/Swift中的懒加载模式/index.html","bed8aff363b5efda4508bae36ca04403"],["/Swift中的模块和挂钩/index.html","7cc4a201fc5d6b3f115fdb80aeede19f"],["/Swift使用布局锚点添加约束/index.html","71e4137b7c0559db1836ab3e881cf063"],["/Swift依赖注入设计模式/index.html","74410de57bf53e69dd84dd0dc80a28f5"],["/Swift关于Dependency Injection (DI)/index.html","2c7eaea64c265dd82c0f34ff0698f282"],["/Swift初始化模式/index.html","2e0f397acc701eb37b3ad98ef2c3dc77"],["/Swift单例模式/index.html","3a9bd57d9e657c68fd602212f6e278ec"],["/Swift原型设计模式/index.html","146891dc6a8f3e55d09399791a13c375"],["/Swift命令设计模式/index.html","37d8e8cd861d84a746204ee190a0023d"],["/Swift外观设计模式/index.html","3392da1f7f6f937db93a9da26ebf2b2d"],["/Swift委托设计模式/index.html","dfd0e321715e5a6e6be47abd656ea65e"],["/Swift对象池设计模式/index.html","000344ba2b51683544302d6127d469ff"],["/Swift工厂方法设计模式/index.html","4ca5039ae95aeaf3af2560b930cb5027"],["/Swift带闭包的懒惰初始化/index.html","0f1eef2fd70743123511c0be933e798b"],["/Swift抽象工厂设计模式/index.html","1179323581eaa8e33dc2666778189603"],["/Swift掌握iOS自动布局锚点/index.html","d317ef2978756ef56f4de0e05d0574f3"],["/Swift支持旋转的自适应单元格/index.html","2447d57e97000ab3081655dc6102fdf3"],["/Swift枚举值/index.html","60dcea4160fabd1ebe5952d2d3505087"],["/Swift生成器模式/index.html","1c6b86cfb55c1a389098280c92aca2b0"],["/Swift结合Xib文件自定义UIView/index.html","e778a0316a169d25f2b53c633ad7f46e"],["/Swift编写的20个iOS库(一)/index.html","82321740122b64ee5909e379796dd330"],["/Swift迭代器设计模式/index.html","7d8c92cb5801493932d5704dfc0e7e7d"],["/Swift适配器设计模式/index.html","fc24669be62fd4034634bd09b6d77312"],["/Swift静态工厂设计模式/index.html","8d71b19c1163a13cefd710a0a002da49"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c7b28701b7e3aabe83d3c12db0960334"],["/UICollectionView data source and delegates/index.html","7ea498f6fddec917ee0d9a705a344e2d"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","38bf3440a1b3c60e367820768058bf0c"],["/UIKit初始化模式/index.html","b048502f4bb0f1fd0faa549b782f46a5"],["/Ubuntu18.04替换国内源/index.html","4e84a84bfc87cf968a68e2848f178a98"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9072bb4b80e4fc177be457ca07ee81a5"],["/Vapor系列 (一) :  Vapor 初探/index.html","b8beabe5c7de4b34090203e0e6e4e870"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","491fa37f46e7e9d3cfe050e087b13e2c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","b00cb011b4c071d5cf9871602a2bfac7"],["/Vapor系列 (五) :  使用session进行authentication/index.html","abe64befab755e490a7e96791126d177"],["/Vapor系列 (四) :  创建博客数据库/index.html","82e89721bd0daeda4718aeec3feb8e84"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7a84745f5b600970f74c05f284b4ea9c"],["/WKWebView与Native交互注意事项/index.html","700142b7e40833f909f00c01e6bb052b"],["/Xcode扩展/index.html","ade45422290d5304e73ef73646f462ad"],["/about/index.html","7b19b2af6f4926c987090877a9cbaf78"],["/appleOS的Networking示例/index.html","8b9f2c3ece76fc68af2fb9396b9050ae"],["/archives/2020/03/index.html","fb74a1759d09cb08d1654994d66ee02d"],["/archives/2020/04/index.html","d05c21b28ceb3db6bf00bfeb275142de"],["/archives/2020/04/page/2/index.html","63a1ac53adfa250bafa4bb57856db414"],["/archives/2020/04/page/3/index.html","bb79af40718571a6fab11dee37c34e52"],["/archives/2020/04/page/4/index.html","34889f0f5e49abf9c0b7a676f6faaf4b"],["/archives/2020/04/page/5/index.html","e1677c724436f5d29631e42f49b69aae"],["/archives/2020/04/page/6/index.html","fea6a05c30af16db6083026088264ab7"],["/archives/2020/04/page/7/index.html","98fd0dd78421e97888eb603685ae7421"],["/archives/2020/04/page/8/index.html","969053e9e960fdd5157d6dfa25b9c324"],["/archives/2020/05/index.html","3c7d29241635d43ad651d59289a90b03"],["/archives/2020/05/page/2/index.html","6c2133a80ba14d690ba933354cabf5ed"],["/archives/2020/05/page/3/index.html","71f3adb9227c0d968166d36bf8269657"],["/archives/2020/05/page/4/index.html","46c603709f113849599addb0b4fdfed7"],["/archives/2020/05/page/5/index.html","0bb619a6ee8aad861663635634db84bc"],["/archives/2020/06/index.html","f6893da1da5f41a74b10a69ab7147f5f"],["/archives/2020/06/page/2/index.html","a0f23fa1b4a58cb84692db04be927b1a"],["/archives/2020/08/index.html","0fce7820036723d0318b46f4c0982b02"],["/archives/2020/09/index.html","d13d25b8b16b54886070156ade1cccaa"],["/archives/2020/10/index.html","79b2b94906c79a68d98f03f26a512c20"],["/archives/2020/11/index.html","f9eed5fe71bfec723f11fe2e588da555"],["/archives/2020/12/index.html","c7af2107b7275a942ec088da1e1ddc01"],["/archives/2020/index.html","8512f7402b35395b5952cb20f35befe0"],["/archives/2020/page/10/index.html","dd3e49932cf51a0c60f872e90dfa99ce"],["/archives/2020/page/11/index.html","b553ea4bdacacba6e15080d5a3071d81"],["/archives/2020/page/12/index.html","bcc2f24828644daa97b238f529f03b8d"],["/archives/2020/page/13/index.html","58f459e774a04bfeaa2ded938c904e6e"],["/archives/2020/page/14/index.html","19768215682729703bec813493544c1e"],["/archives/2020/page/15/index.html","8ff95402561b6cc4af3270a3cee3273e"],["/archives/2020/page/2/index.html","378cec46886f63bd400f63661066e7e9"],["/archives/2020/page/3/index.html","cc4ecae1c36e95a75c40907b4a6611b8"],["/archives/2020/page/4/index.html","4219ab7c704fcc5345caea37bfd60488"],["/archives/2020/page/5/index.html","74ddb234bf8bbbfdf4ea18629b3d529c"],["/archives/2020/page/6/index.html","4f7914e1c8d30c4ffa005a042b8be593"],["/archives/2020/page/7/index.html","4819a018f0cc1be56c3c7006556eaea7"],["/archives/2020/page/8/index.html","0333977c52a85aece87df3ee68510b3f"],["/archives/2020/page/9/index.html","7d2ba934195ee5a5c6c1ca8b614ef18b"],["/archives/2021/03/index.html","9e5b36bdddb351dfe9b99f5132fb2769"],["/archives/2021/04/index.html","3f261f372628869161b5390b18a797a7"],["/archives/2021/05/index.html","47c82116ef11c00c1b47eafc11c2eae4"],["/archives/2021/06/index.html","5721876cd8a2ca366885ad124c863860"],["/archives/2021/07/index.html","f72864740ffa637f2f0f6834650f79eb"],["/archives/2021/08/index.html","a140aa2b2c4d29d72be6e6cf48c881aa"],["/archives/2021/09/index.html","87ef12cb8d50fb791a78a6788e0a4c92"],["/archives/2021/11/index.html","321e5c6128e32de6a7ec776756b61a4e"],["/archives/2021/12/index.html","11fd04d633722ea776d7fb3baf4ecb9e"],["/archives/2021/index.html","f288d797fb4cb7c3a664ee4f3af1d593"],["/archives/2021/page/2/index.html","1ea5a80d69bd579606dcaab3a889dbbf"],["/archives/2021/page/3/index.html","f9c8b37e6abbcb2f3d997ff40159517d"],["/archives/index.html","cbd96bbd766790efc50db70fe505642d"],["/archives/page/10/index.html","e3ae888ad1e5659c50f08535974f551f"],["/archives/page/11/index.html","5ecdf4f23be789729ed65ad14a10610c"],["/archives/page/12/index.html","eb44e9b7192ad20aa0b8a15e712ca1f6"],["/archives/page/13/index.html","a1f3665ef72ea6da62992a168e1902f2"],["/archives/page/14/index.html","50c4f339bf52db69ef2b1b353e5f2e69"],["/archives/page/15/index.html","5db0c5133359ef4a3710928227602288"],["/archives/page/16/index.html","68b99273ef2e5f220d8adce4146fec21"],["/archives/page/17/index.html","c14acfea94992920772dc6b0e82700d1"],["/archives/page/2/index.html","40662514253abc8bd0e90b7fd7214c64"],["/archives/page/3/index.html","029a1eaba54e0e7b8ce047b4f2c79240"],["/archives/page/4/index.html","9a12f222c1f67dc0e3655b9d84b175df"],["/archives/page/5/index.html","083259107a5aaffd5a68b7f9c0ead203"],["/archives/page/6/index.html","5d5e6ce4cc48a7d47f611cccc9055376"],["/archives/page/7/index.html","3b351aa18a317bdc13bf4952c6ca5c0a"],["/archives/page/8/index.html","d52bc20f91736087bc700b456e36b996"],["/archives/page/9/index.html","ad41fd22b4ffbcedef07033073abbc9b"],["/bugly 上传dYSM文件小记/index.html","fc2f63a7defd2e7dd143c28a53426022"],["/categories/Advanced-Swift/index.html","b7693a77819e4a141e6db904881aca96"],["/categories/Advanced-Swift/page/2/index.html","c9958cc74ee9ceb2ee098f8c6030e1a7"],["/categories/App-Architecture/index.html","e5f639d21b22dad36c249001a51e83d7"],["/categories/Array/index.html","869a7e186092732453d62e5b6e859ee6"],["/categories/CocoaPods/index.html","510555a7fcee1bd0fe9c5050f6a15a09"],["/categories/Codable-protocol/index.html","cf3cf06cfc3a7c3a045aeee822a18c04"],["/categories/Combine-framework/index.html","acddaa7b33c2744b990275b0a6806689"],["/categories/Combine/index.html","a3874493f9b5e990d79f373da8adec82"],["/categories/GRDB/index.html","c31d8080a7fe95714217e93ba3ea902b"],["/categories/Go-入门篇/index.html","33108212a772e3d45c9e3b4b925a18c2"],["/categories/Go/index.html","06c4427784486766a87f3a503cafa1aa"],["/categories/Grand-Central-Dispatch/index.html","58377ee1d94d2fd8c99f6141c042d4b8"],["/categories/Homebrew/index.html","91fe063778e5dd955cce4e751538aa2d"],["/categories/Linux/index.html","9fcaaf3481d17405d582236de6c0f03a"],["/categories/MySQL/index.html","bbbe4e942d4bb1e28b207fd96d23c117"],["/categories/Promises/index.html","6f5709f520c7da75cdbce1e56fe64f29"],["/categories/Protobuf/index.html","957fb82b86097bb6f720f7249899bb2b"],["/categories/Result-Type/index.html","735085526b0ed9add427ee8a52aca098"],["/categories/RxSwift/index.html","1e9e4fa8f21d087f8d97be3bc1903b71"],["/categories/Server/index.html","6f9eba7eb0f063b78365e3d645988fbe"],["/categories/Sqlite/index.html","f7467e88f797a2d997a1bd34d40240fb"],["/categories/Swift-Apprentice/index.html","416019175590b2042d275cd3b6c0bc61"],["/categories/Swift-Apprentice/page/2/index.html","93707f316ad0e27ff875b3545c7ba4fa"],["/categories/Swift-Apprentice/page/3/index.html","71af195bbe53d1c35bb112925618c29e"],["/categories/Swift-源码阅读/index.html","85c1039c2a6190a3feebe45a27b8eebc"],["/categories/Swift/index.html","be054c9cbcc26af20b3f6fc915816c04"],["/categories/Swift/page/10/index.html","0e3f5fef92b8bbb0f22ac721f612c157"],["/categories/Swift/page/11/index.html","b6367089fc6c09ded4a68c420d588191"],["/categories/Swift/page/12/index.html","ccc54053436639db7eafe37159d12bc8"],["/categories/Swift/page/13/index.html","602472c584d31d88261ab2c5bc4cadeb"],["/categories/Swift/page/14/index.html","3d8eafa0144bd98d586932a58cee657f"],["/categories/Swift/page/2/index.html","416a71fa80bdbf1b5772cafaabd3201f"],["/categories/Swift/page/3/index.html","8b002e9292860c60a4083d04a999528c"],["/categories/Swift/page/4/index.html","98448a783f172e37dfb9d23d94161108"],["/categories/Swift/page/5/index.html","3fe3953dd6669a4212b55cd24b5e40e1"],["/categories/Swift/page/6/index.html","ed633d329332b8bccc54991bc7689d28"],["/categories/Swift/page/7/index.html","069a665157ca6b543d7dbf78ac679844"],["/categories/Swift/page/8/index.html","ffd41bf651acb6013ebae0f4129e82de"],["/categories/Swift/page/9/index.html","8f593765836723088bb3b529c9443ea8"],["/categories/Swift5-2/index.html","0163e7c63d59e0ed3634a19736cb3172"],["/categories/SwiftLint/index.html","440371389b02861d57ecf8bf55cb2ac5"],["/categories/SwiftUI/index.html","4af60ac2c058c609b0715cd7f7e7667d"],["/categories/UICollectionView/index.html","dbd5c67bcd0e71ea6449abbdd68d762c"],["/categories/UIImagePickerController/index.html","ca96a158a9f2f760e19e49e51083c633"],["/categories/UIKit/index.html","8bf526130b22823f5a806826d9702bef"],["/categories/UIKit/page/2/index.html","42f79d7a9b92b472007fdd36a2654dbd"],["/categories/UIKit/page/3/index.html","392dcd0c8e5ece8d069f4466ed06565a"],["/categories/UIKit/page/4/index.html","74c620b3f9e6e53795bf95d66804b8e6"],["/categories/UIKit/page/5/index.html","5c849b74f0ee566ebb8932237417302b"],["/categories/UITableView/index.html","0edca5c85c80673f7323c3f7ffdcca2e"],["/categories/Ubuntu18-04/index.html","38157da33d27228e693dd7b088358805"],["/categories/Ubuntu软件源/index.html","8a02c03b27394910d6be51e0673b7dd2"],["/categories/Uniquely-identifying-views/index.html","16b6145496b66698dd26fac616c0f111"],["/categories/VIPER/index.html","4139c44ff3daa88c2fa5cc5059d64122"],["/categories/Vapor-4-0/index.html","ad50ac3e5f1be6604c3a227f2a3c35b7"],["/categories/Vapor4-0/index.html","a5719939d440870aa51ff3b59f50ae35"],["/categories/Vim/index.html","18a01d7c74918f84210349c8689231ed"],["/categories/WKWebView/index.html","fd26b61c36ec347ce5024789909d8495"],["/categories/Xcode/index.html","8978198e4672b6427d03267c2ce586e4"],["/categories/appleOS-Networking/index.html","b32c9137c8ae86d84481135265493986"],["/categories/bugly/index.html","433626bd0669e64e7a3c17f1df76eac2"],["/categories/enum/index.html","cf7ac6462fbc24867e4b2d91113f468d"],["/categories/git/index.html","217d723100eff163275f8093eb66b33c"],["/categories/hexo/index.html","b8d125c80db921d58ccca57e083ff55a"],["/categories/iCloud/index.html","d0b4c6cb6b84e23706b5f744c3eff3f2"],["/categories/iOS/index.html","00fd5bedf04979bf0877a5f838c4c546"],["/categories/iOS/page/10/index.html","39aa714021aed02099da84d4876a7784"],["/categories/iOS/page/11/index.html","1ea774224f819bc0f1829b0e7e8aff33"],["/categories/iOS/page/12/index.html","a8ac978d41796c183ec7ec235fdcfaed"],["/categories/iOS/page/13/index.html","f392e59bd34dfbb907d9e74f80dc16ae"],["/categories/iOS/page/14/index.html","d2584dee79e7caded4d50378e38dd5f6"],["/categories/iOS/page/2/index.html","a00a108bb3a5439b52e498c066ab0fbf"],["/categories/iOS/page/3/index.html","88dc7b034debc6dd56274f761130e3e7"],["/categories/iOS/page/4/index.html","209f8c69e5c2a42e932e2ee19256fed5"],["/categories/iOS/page/5/index.html","2c368bc44038edb6648c7d943dbb7d75"],["/categories/iOS/page/6/index.html","7c911198fd0c30fcee284869790a0240"],["/categories/iOS/page/7/index.html","8cf213dd6f77624e339a99c865b01457"],["/categories/iOS/page/8/index.html","76378b8326dfa141b1244b4104b43102"],["/categories/iOS/page/9/index.html","d14ca7d1e0bf86bd09f16abd0eda7cba"],["/categories/iOS面试题/index.html","e9e331363b7b22c9a3707030fc3c7eba"],["/categories/index.html","35660452c12ac4e6bc9bd2583aab9348"],["/categories/random/index.html","681f08b3fbfdc8a6cacaaa6946e09be0"],["/categories/三方类库/index.html","0d388374808415ef950201bd77c1ba3f"],["/categories/函数式编程/index.html","832d21f20a84d9acf8d067b7dab118ab"],["/categories/子类化样式/index.html","d67e5e93660dd19b9369600353c940c1"],["/categories/开发技巧/index.html","21f696795910fd610c9c89c6320fbe46"],["/categories/开发记录/index.html","9c944a5fc980caa0db73ff47e9f79c09"],["/categories/数据库/index.html","ec6c5f38a6dd02d28b16e6d9a979b5c4"],["/categories/架构设计/index.html","d08f38516ff343aa9702880532ba6e48"],["/categories/测试/index.html","be582f7bdfee2639bc83d0696fcb696c"],["/categories/用户体验/index.html","af86dede4bf22d5e470acddb59d064be"],["/categories/用户协议与隐私政策/index.html","7155ecdaabb2849c2a418b6414c8e45e"],["/categories/设计模式/index.html","cd1841ef74cfab054047fa87c64f9467"],["/categories/设计模式/page/2/index.html","5f13e0fd224a137cd5140fd83261ccee"],["/categories/设计模式/page/3/index.html","4173d235158f911f72826fa9ff8cdf5e"],["/css/main.css","f6cf16002d3411436a0ee24402a17e6e"],["/hexo部署失败/index.html","c5831b60452b39171a92b7146b889a06"],["/iOS 15 适配/index.html","b9fb284784b68de9d756b0822f9752e2"],["/iOS VIPER架构深入实践/index.html","6f64e17065f55ac99e5559c98e7bafad"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","2f6878c3bdf4b9f5e20aa4fe1c4f1bd5"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","505a9f8cda254c63a57082f892829a4e"],["/iOS 自定义视图，输入表单和错误提示/index.html","d580500c91c66a28c293cc3f1b26e632"],["/iOS如何使用iCloud文档？/index.html","61bacad1d02c5efa3ef32c52d8d2bb09"],["/iOS子类化样式/index.html","d1c33b1552d4d2d5464897891f5e98c3"],["/iOS开发记录<一>/index.html","cc214be7c8e2a3d8bc80a6052068e347"],["/iOS自动化布局编程/index.html","8b275b52e1e9a8b21db69c7cd4ea5442"],["/iOS自定义转场(By Swift)/index.html","1bac1dd2f5008e7a1292a774b701b000"],["/iOS项目架构：使用VIPER/index.html","e653b9a57853c8b2313e0c70095a3774"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","95bb97bd0f37da599f1261b861d817e9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","9c00c656c0979f76f63500590ea0ed6e"],["/page/10/index.html","e5aa07826cbd57ca91bbf9866796980e"],["/page/11/index.html","23fd1beb21561466b7ec826fcc2e9eb0"],["/page/12/index.html","6c789b1f7bb3fe138a05b8c2fde2f4cd"],["/page/13/index.html","d40acb26e4dc26135eed1a31ceaa01a8"],["/page/14/index.html","cf85a833ac9ad95f09358487790c2461"],["/page/15/index.html","5bed72c60078e9b76c370ca0819e7325"],["/page/16/index.html","648b284ad1e0e292fa11d698c31da0e4"],["/page/17/index.html","a8bc76d2a72f076891de6b3944407461"],["/page/2/index.html","0a326a9255d0cae3247ef6ed789ff700"],["/page/3/index.html","aeed79d8dcd1df8610f5d34ee8cabb3d"],["/page/4/index.html","09d5bd02c84c5cd9ea22d77a532e8f22"],["/page/5/index.html","8a0ba3b6f3caeee52a9306e54070a871"],["/page/6/index.html","d90fae72661d1769f378ced0bb248036"],["/page/7/index.html","e4a6afbfed113f5ddbeea605e47cd437"],["/page/8/index.html","8c5fb64cd4c5d1127aef9fa2531d9824"],["/page/9/index.html","3904caf9347a9363ee68b3d6d9982a32"],["/schedule/index.html","ca820f61747663800e176dd82bfcd66f"],["/storyAppPrivacy/index.html","2230a078ec0d92eacd70e4aa024d5342"],["/sw-register.js","294787ef397e7e59a8a8804f98e11372"],["/tags/Advanced-Classes/index.html","efb0bf408f9fca0dadfa58ddcafee7f4"],["/tags/Advanced-Swift/index.html","48aff76917ddca6d12000b73b7045ea9"],["/tags/Advanced-Swift/page/2/index.html","6e525118cd99545e4babfdb6c45675a2"],["/tags/App-Architecture/index.html","adc7dcfe701864a433a9e1b507608fae"],["/tags/Array/index.html","62e6711ec1bff3cf733741c9711d26cd"],["/tags/Arrays-Dictionaries-Sets/index.html","78af668efa28cc075e7ba9908b5578e1"],["/tags/Authentication/index.html","0cb3ebd2bc860f37e52e9b66fa9a5d2d"],["/tags/Build-in-Collections/index.html","549a384281623e77678be2d50f20b2c4"],["/tags/Building-Your-Own-Types/index.html","80ea5bc3b0f4d487ed7fb186dd2df952"],["/tags/CMS/index.html","fa9e3c3983ff2cfc126ed753eeb09ab1"],["/tags/Classes/index.html","061700c8230c8ce6ad5374cd87c3f5f5"],["/tags/CocoaPods/index.html","9c94ef6d8519c661084e81eeedc5e371"],["/tags/Codable-protocol/index.html","840a806eea21130e05a5f2898537f00a"],["/tags/Collection-Iteration-with-Closures/index.html","c32dd8a436ad45487c4ebc8cd8ad44df"],["/tags/Collection-Protocols/index.html","23cc09244196f207a52ca8d611e6d46b"],["/tags/Collection-Types/index.html","2a55737d91bf5b4d2e184624d6c678ea"],["/tags/Collection/index.html","f87dfad17d5c0e42e37d49a98b8ee323"],["/tags/Collections/index.html","96a81ae7df2f85e6952d3533c04c4a59"],["/tags/Combine-framework/index.html","e7bcd5461daabdf31ee6bf7af5183f6f"],["/tags/Combine/index.html","b2a7be214ac9980d7b0e605ab3455725"],["/tags/Dependency-Injection/index.html","34e0035cba8dcefede030ba4b332240a"],["/tags/Encoding-Decoding-Types/index.html","1e34bc962d5c64b9fa1db663b2f7742d"],["/tags/Encoding-and-Decoding/index.html","6aaf273c530211ff1e154945237731ff"],["/tags/Enumerations/index.html","962cac47a2d7c8538e310a16d50f205e"],["/tags/Enums/index.html","d2f27ad36f37de6225a45cf32fc8f396"],["/tags/Error-Handling/index.html","f9d9fd03147a8c26ca623ded4af2a7e2"],["/tags/Functions/index.html","d1d3f7add391e6d35fd65978b731603f"],["/tags/GRDB/index.html","85d00b269bdc671bd64a33c1b7eff3bd"],["/tags/Generics/index.html","b2d54c414ccda9ef36deb6c89ea84605"],["/tags/Go/index.html","3993eca5fbc85b59460726b582be388d"],["/tags/Grand-Central-Dispatch/index.html","231c562feabdd0928587e3067780508a"],["/tags/Hello-Vapor/index.html","3e2418e230ee21ca89fd100af30f9d74"],["/tags/Homebrew/index.html","9ee2c3ed8aae6a416b1f1865bb55f3ee"],["/tags/Interoperability/index.html","c0de689cb75ae2c58bcc64faf30d171c"],["/tags/Introduction/index.html","6d92f2f8cb6d7029dc8b9de1ac60915c"],["/tags/Leaf/index.html","544ae23774d510bdda4868cf8e4d7412"],["/tags/Linux/index.html","7aa0f16c0373b22d04add6c987253f8f"],["/tags/Methods/index.html","072c0f18958cf89307826e494bfdec82"],["/tags/Modules-And-Hooks/index.html","f08bfcb46a1798aa1219aa1d2f7827b6"],["/tags/MySQL/index.html","9909cddf14c5cb7c0160818af4679693"],["/tags/Optionals/index.html","7ed24104de4dbb5e24e4f619af3e4fae"],["/tags/Promises/index.html","2bfd58a5f0e038095925042d29464288"],["/tags/Properties/index.html","9e82752586fd9e21ed1ad322f4350173"],["/tags/Protobuf/index.html","ad14e8b3fb699f6650fa641bd6be7c02"],["/tags/Protocols/index.html","d10070fb18eb7ea531ef94ba365c8d5c"],["/tags/Result-Type/index.html","eb20b7a1d16e60ce0291094065a1f480"],["/tags/RxSwift/index.html","80de003633beb28a218ed28401709dae"],["/tags/Server/index.html","7f5e9f912bac9be1080be80aac90f809"],["/tags/Session/index.html","6644b210fdd26b5b5a7af9ee2f72d03b"],["/tags/Sqlite/index.html","2ef8c45b4ed0e4e0c83f87598281fcd7"],["/tags/Strings/index.html","6c4f279e77a0a5703816b0bd1ca47b20"],["/tags/Structs-and-Classes/index.html","5364474fed872926556fa7871c5b39d8"],["/tags/Structures/index.html","642c7171cca8c9fbc323eae82481aba3"],["/tags/Swift-5-0/index.html","2f753b567eb0538a5969df22d7350561"],["/tags/Swift-5-0/page/2/index.html","26c0385ec518f6b2e9516114863c74e8"],["/tags/Swift-5-0/page/3/index.html","60f7b7c0d4fc484eae058175a901a9e6"],["/tags/Swift-5-0/page/4/index.html","9c843c2a966285a7e9e107c56810439d"],["/tags/Swift-5-0/page/5/index.html","eb44f89262a5b2923c4bfcb2cd783320"],["/tags/Swift-Apprentice/index.html","37fe0f05d6dca813b66cb6e1b4c331e9"],["/tags/Swift-Apprentice/page/2/index.html","7d363bdb39bfbe6415ceb537ba7caf85"],["/tags/Swift-Apprentice/page/3/index.html","ad319e112698abf1f5928bdeb5d45197"],["/tags/Swift-Package-Manager/index.html","2fcfab7bc653428b5e07c836ab4a6770"],["/tags/Swift-源码阅读/index.html","8e9cbe4270145b210eb08f9667970358"],["/tags/Swift/index.html","c67c2bbdeee451865fc3df8b1c91e19c"],["/tags/Swift/page/10/index.html","3bd91c9873cae1711253d1437270cc27"],["/tags/Swift/page/11/index.html","6fd54c70c7e3d17f16dfcd362f641d7f"],["/tags/Swift/page/12/index.html","57c6f9107197de149044a74965b69210"],["/tags/Swift/page/13/index.html","d6fd7a411c4720de5a250c4a965bb6d7"],["/tags/Swift/page/14/index.html","e59e2284dd04fdf9ab9526b4cbc7ae6c"],["/tags/Swift/page/2/index.html","bdd276e7fb030fa94675a1b222e16286"],["/tags/Swift/page/3/index.html","76924a39b85004ede3c2783557ebbe4f"],["/tags/Swift/page/4/index.html","6c2193d084086c075d274ff2bfaedfd7"],["/tags/Swift/page/5/index.html","424c16db0cffee24d844c2e01bd6f9a8"],["/tags/Swift/page/6/index.html","1a3786b100cc4efd61637182a182e821"],["/tags/Swift/page/7/index.html","16564881d8a627988236e178a1e9a651"],["/tags/Swift/page/8/index.html","75d467a7442560948c02d10ffaddcbd3"],["/tags/Swift/page/9/index.html","fbff29a25c0dc78d8eb37fa2dad408d0"],["/tags/SwiftLint/index.html","b2632e109639ea2e106a3436fdf186ec"],["/tags/SwiftUI/index.html","6a512d7923d8d839c3e340261e3bf914"],["/tags/UICollectionView/index.html","5f993a1c7dcdb5f432db2c59f5e9aedb"],["/tags/UIColor/index.html","d59af7d84000b7cf7e707d93675afecb"],["/tags/UIImagePickerController/index.html","78d863604752e17bc65a07f9ffdf73bb"],["/tags/UIKit/index.html","47abaa404b14c7f252ff2c3af8786ef3"],["/tags/UIKit/page/2/index.html","ae87d3ca8b887ae2dca7e868000939db"],["/tags/UIKit/page/3/index.html","e3167a0bbce383eed0562091c3381cbe"],["/tags/UIKit/page/4/index.html","fc2d82c1281ed0a0f4292614ba9e6868"],["/tags/UIKit/page/5/index.html","d8c08c4c6dd85757781c5b567b7c4213"],["/tags/UITableView/index.html","458e6916c8b39678af9fd0955aca60e2"],["/tags/Ubuntu/index.html","78224c5cf5c9a7d102afe410ebf526a8"],["/tags/Uniquely-identifying-views/index.html","433fc855c8a375c5d744d147bc3ee464"],["/tags/VIPER/index.html","4ec476b86b29ff78bdb61cd9938f2786"],["/tags/VMware/index.html","fa99b9c7f53aa23b7b76070f10c91a6a"],["/tags/Vapor-4-0/index.html","2079ce98dbc5434cd2c7d18ee916c8cd"],["/tags/Vapor-初探/index.html","deb37e79f7de40a1560fc1b90e713db2"],["/tags/Vim/index.html","a8598925c1e84302d33e641a52d4b187"],["/tags/WKWebView/index.html","5908d47439a7330151ddb3107e950d09"],["/tags/Xcode/index.html","5ab39c8283922b388ad2483c738d80db"],["/tags/appleOS-Networking/index.html","5339ab764faef2877c98d9a4fda8d13d"],["/tags/bugly/index.html","a1178465a8923aee439a44e88a5864f1"],["/tags/enum/index.html","dadc621d358c1da3c037f6146d4d6dbe"],["/tags/git/index.html","0610b48d95f3cd85aa6d6edd30d81412"],["/tags/hexo/index.html","69981f19db1c815b7124340fb19fe75f"],["/tags/iCloud/index.html","c29523df45d8192e15de40c64d777bed"],["/tags/iOS/index.html","a32ea3defeab51ee235d57f8aef43d2c"],["/tags/iOS/page/10/index.html","ed585815a8f775171122ab9a8c827321"],["/tags/iOS/page/11/index.html","b98b390a5a91cc79827591f11cc31cf0"],["/tags/iOS/page/12/index.html","d64190f1967c8f6ebc8985cbba37bc0e"],["/tags/iOS/page/13/index.html","ad661ced3a30ed20f33e5b67dc060b8e"],["/tags/iOS/page/14/index.html","60a9ab7784102bee3fb0315c8fc7ccd1"],["/tags/iOS/page/2/index.html","710a76a19668c83b575fb3ffca6fd8ef"],["/tags/iOS/page/3/index.html","9e27dacc3ca2fd9084f38583b8e72243"],["/tags/iOS/page/4/index.html","d28ce7cbdc0711779f6f403770be84b2"],["/tags/iOS/page/5/index.html","ba56f0d665c94a90b259e6635f232420"],["/tags/iOS/page/6/index.html","e9c46ca73762ffb6c536b0a695d15134"],["/tags/iOS/page/7/index.html","76b57dfe63f7ba7f5487520a5816f9c4"],["/tags/iOS/page/8/index.html","ac7aadc0630fd7c111e898199c1fe594"],["/tags/iOS/page/9/index.html","ea618800ca0c2c2559241567af38b690"],["/tags/iOS面试题/index.html","89db052dd04ede67faeb6f3f5ed865ea"],["/tags/index.html","ce58c4864f7708ae1dbe4f40581ac7a8"],["/tags/non-optional/index.html","3e1ebf428267cdf9e3a2f35f98930dd2"],["/tags/random/index.html","513bc689569e0cddea1252d7e8a26191"],["/tags/transition/index.html","229a99f21ea74d7f5cca597b552fc864"],["/tags/三方类库/index.html","11440aeaf4f87730e101d8879ad4c555"],["/tags/依赖注入设计模式/index.html","c29fb759c69fff5d7109ac7976d8a1d6"],["/tags/值类型和值语义/index.html","f2e6672a5e7b59e913901f5bc0284740"],["/tags/内存管理/index.html","e90ceed0c15ca99395d7f2cedbe4c0ed"],["/tags/冒烟测试与回归测试/index.html","b866a89f5d4d31ab2e7604e8203ac52b"],["/tags/函数式编程/index.html","e5dedf176d35dfb7aa7f1bf70497ffad"],["/tags/创建博客数据库/index.html","a1088b6612e15e38da724c12dd1400ba"],["/tags/初始化模式/index.html","ae472645f909b8631baa4aa52995e9e3"],["/tags/单例模式/index.html","f892a00f1c6116dd1d3d1817f4e738aa"],["/tags/原型设计模式/index.html","640c791a90175cdf81a8a356de79fad8"],["/tags/命令设计模式/index.html","c64119b413ad08881ef207d1027d0e69"],["/tags/基本控制流/index.html","9c2dabda4154dfdfd43352f1ec352590"],["/tags/基础语法/index.html","07cab5a763ccf05e67d2ae4283fee3e4"],["/tags/外观设计模式/index.html","b0e1eb548244b99164639c3aa486723f"],["/tags/委托设计模式/index.html","8c31bc3cbff5521e766cdd2a625f1d18"],["/tags/子类化样式/index.html","2d6462ea54189b4f60f56db14b587ec2"],["/tags/对象池设计模式/index.html","486bd4b1d11f3669ee2fa8ab8e74c34f"],["/tags/工厂方法设计模式/index.html","c65b0f6928f70f42f57a2be808b40364"],["/tags/工厂模式/index.html","644f2b56c69f247fd23851a912c25b65"],["/tags/工厂设计模式/index.html","a736569aaf917349de5254c66d9e6876"],["/tags/开发技巧/index.html","416884c36cc42f89b48b0a0505337c2b"],["/tags/开发记录/index.html","1423d3bea45a5d939cb9ae14a1cf4775"],["/tags/懒加载模式/index.html","b544fb11a5243e9a0cfbc9eb65754d7e"],["/tags/抽象工厂设计模式/index.html","47349c130622b1d66faacf65ecd920a0"],["/tags/数据库/index.html","234367d94ef847c7fed0384e423d0442"],["/tags/构造函数/index.html","d688c450d4789bf1515acdb9bb75ffdc"],["/tags/架构设计/index.html","d7330a3be3cc7801e542da5ec0e0691e"],["/tags/模式匹配/index.html","162ff09b492c3f3fdac0061c67bbe6f2"],["/tags/环境搭建与验证/index.html","0e8dbfe0cbfe38e90d09f119aa0e2564"],["/tags/生成器模式/index.html","ca84de6b2d5094f76fa592590e4c2680"],["/tags/用户体验/index.html","f4acc4a04889d900aaad955bc7ec84da"],["/tags/用户协议与隐私政策/index.html","692dab390499f4478584eef2bafbfed6"],["/tags/类型与操作/index.html","d67ea28afed4308d03c4976eb9d9d7d8"],["/tags/自动化布局/index.html","631324646c2a5fd832079a0028950626"],["/tags/自定义UIView/index.html","58f379500c4756aabe49f7041296b5e1"],["/tags/自定义转场/index.html","4a52541383efb990e5662c1fdd023532"],["/tags/自适应布局/index.html","1d03d2cf267cf99a36faf8614b53297f"],["/tags/表达式、变量和常量/index.html","8f64fe3cf1e3223a07b90d7f2a406fe1"],["/tags/设计模式/index.html","9c492927bdc79a0c4d155fdd2f83a2f7"],["/tags/设计模式/page/2/index.html","ec672b69f0038df62aeb09b752bd8ee4"],["/tags/设计模式/page/3/index.html","024cd7c873733a3dbbe8a46e246e43ed"],["/tags/访问控制和代码组织/index.html","3f45dd845aced051ac77e8232125dc54"],["/tags/运算符，下标和键路径/index.html","5d3f9cef9bca02014f392b5be3b9f63f"],["/tags/迭代器设计模式/index.html","78b86fd5ed18f416098fd7c000db3d09"],["/tags/适配器设计模式/index.html","ec7935be993baa4900cee21f954028d1"],["/tags/错误处理/index.html","0e241f2a1ccd4c05197801781e3aa7a0"],["/tags/静态工厂方法/index.html","244cde0a253d05a2e91346215902e373"],["/tags/面向协议编程-OOP/index.html","311e5ebf0f9e7081fc7063774ed68fca"],["/tags/高级主题/index.html","d24f9b27c5a454ad70b9fc4287d19bad"],["/tags/高级协议和泛型/index.html","a95b8b0dadf531fb0c95c6db9c9e211f"],["/tags/高级控制流/index.html","f11e14a492a06311109db6cababf3fb3"],["/xcode 常用的快捷键/index.html","e50e60638b34bb9dae4cc2ee9049f68c"],["/为iOS应用构建输入表单/index.html","ce5e161213b352274daf3e07c11707d2"],["/产品开发的幕后花絮/index.html","5a1f849005f7a98d6e7f5819fc3694bc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","317c132a6748a1477685d7b0cd21086d"],["/冒烟测试与回归测试/index.html","aee60abae76696778774aa2b6badc551"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","23119f015995985abbdbc6be90217a3c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","17f2a1ec6393b3e75793e6eff8fa79f9"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","3cf859f85d54561cd57dbcd61d326a2f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6ce9652c82e687ab62bc72783e43f7e4"],["/在Swift中创建自定义集合/index.html","0d062d889e63519fb9ab15f544d48537"],["/在Swift中处理非可选选项/index.html","f407de2f6fcb233d91374376f75958f1"],["/在Swift中生成随机数/index.html","0a6762336e80a684507a7a310ac0a6de"],["/在Swift中重构单例模式用法/index.html","a67eccceb81760f78ef57133db138e72"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","70372adeee29da02e3ab9cbb08daa5df"],["/如何为VIPER编写服务？/index.html","c917f601fd4970bf0612b6d786450a22"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","2e37bdb5a824b2ac10cda4ea0a6dcf31"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","756581c3b0964d1297f55bf9cac2235f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","8dcaadb5b05e25edd6e7e5aed59ee64c"],["/如何使用VIPER构建SwiftUI Apps？/index.html","4b7b895b1bd58977a2d0e453c67f2c4f"],["/掌握VIPER架构/index.html","c2476d8c61d2511a829492bbd5ea169a"],["/揭秘 WordPress Hook 系统/index.html","2cf1c92b68349245814735651289c80d"],["/比较工厂设计模式/index.html","58ea5568757a7e8fed6a92066328bb6a"],["/深入了解Swift中的Grand Central Dispatch/index.html","a323bd7f38faf7e6a7a3a63947a68a1a"],["/深入研究Swift框架/index.html","d83cf7f1dd571babfd89849ca52409d1"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9b80f0174e1444a6fa4c8e38501db60d"],["/选择Swift而不是Objective-C的5个理由/index.html","d5d8e1788a977afbadf1aae6d5b3e9ff"]];
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
