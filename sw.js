/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6aa7078bc4cce3fe6903437d8bc933e7"],["/2020年iOS面试题总结(三)/index.html","2aeb6f00c7e220dc17f635c76824deac"],["/2020年iOS面试题总结(二)/index.html","f0dad0207fc04e580bde11d812400d8a"],["/Advanced Swift系列(一): Swift 简介/index.html","76fb9edb196107302804bdb546d237aa"],["/Advanced Swift系列(七): Strings/index.html","ed92141da7a8de8b1892974ec787234a"],["/Advanced Swift系列(三):  Optionals/index.html","fa388597002985dd78b4400b870756bc"],["/Advanced Swift系列(九): Protocols/index.html","f18a59a3dee93d62175514e4dd3faabd"],["/Advanced Swift系列(二): Build-in Collections/index.html","c430e133e9f38aaad50707e14aae8dec"],["/Advanced Swift系列(五): Structs and Classes/index.html","f77642cb6eec86b1e597fd295a3ef935"],["/Advanced Swift系列(八): Generics/index.html","de4e48b007f3334905e7a7c8c85521ae"],["/Advanced Swift系列(六):  Enums/index.html","312c419d496327081d28d3b3f1214018"],["/Advanced Swift系列(十): Collection Protocols/index.html","f1809ab739e824c02954ca4af76693dd"],["/Advanced Swift系列(十一): Error Handling/index.html","23712f07fe8eba3d27df593729619364"],["/Advanced Swift系列(十三): Interoperability/index.html","eccd5a5c2666159fe24b542c66180985"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7d6dd6bac152ad1ea648384218b719ab"],["/Advanced Swift系列(四):  Functions/index.html","e800353248b5c3728dd39a38f7fc7ea7"],["/App Architecture系列(一):  简介/index.html","7182ceab421ba2d41fa9f866c13f6a4f"],["/Functional Swift 初探/index.html","64f89b3f60841bf06300981388a29ee9"],["/Git 使用小技巧/index.html","d78d2a9c0f7da20a2c4dae14cb977300"],["/Go 基本语法初探(一)/index.html","1adb621b6be3d61e23c8671207d9538a"],["/Linux VIM 命令及操作小结/index.html","54e8128594cc1f3874e30b35b595301e"],["/NSCODER和SWIFT初始化/index.html","953040c9c63254101facc802e2e6f9a3"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","fc4549c9e2c17a30f75952b3ea494d40"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","a5930719e7a65a4f20d83f4defcab817"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e623c61840ba3486eae286f2dd96def4"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9e862f470bac218f16e8c2ab7259c93b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","75340638ad62c4df2b7ef7e11ad0e726"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","34ebd78d1aa2a4e5a31a015af4a55edb"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","0589811d2ce20b2ca477754c5af90b19"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","b159e9b4a6b6d7813e28b5cf9f659001"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","daba4d79f1d7cd8bd58a8465d85a5260"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","7b4be10f5def7cd9525f97279ba5d387"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","59c0371ce7ce7301555504fe7b9add18"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","02f559b975347df634968d2c4b0150ba"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","0fbb09da7962ca4c474843bff1592bbb"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","6f710bebe95803e4819e0f71e19c8ebc"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","19307ad133e273c5e707ac611ba684ba"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","34f7d3545a6001d6bed6a6d82d9bed98"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","84a6c92758e00fcfabdd48757d3c5d7e"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","4a4ca5794e8cb707ac34e135a44a689d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","7db5cfd29581995078de025c87d4e4f0"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","10c0de4652fb958707ef6fde7178aeba"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","29359949bc192ed18961db2a1438af52"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","05930de1b7aa3d73e34397c2fa4a697e"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","876a1b5f35670f63ec5474464feae9d5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","1eb64476a7c3dc5f5e11597f5cd85ff0"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","22369730834a6e8f128d85d8adb458d3"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","67a9c052bc15297cac35b6139b221e1d"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","28d1ce484a9a8c647c03eeb111c475fd"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","7ab27d11fb0baaca4ffde1ad850841d7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","26160e5b082b774894e0ef42813a1057"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","63396e9fc5685accb24134b6e9b45327"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","62c35958ab0522b14e89456cda5460c5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","5364ced2c9242804f5a592de690676fb"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c8ff2b1c95049c35cf93f92500ff6e22"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","892e14b52c2a98e8b027909ee8ae6970"],["/Swift CompactMap vs flatMap：差异说明/index.html","20993683efe71489a81b423140750a2c"],["/Swift Grand Central Dispatch 深入实践/index.html","b0dfff1ea2f40640057784043776bd07"],["/Swift Lazy属性初始化/index.html","402409c082440e7bca7bd2c0a7e2f20d"],["/Swift Promises 初体验/index.html","1050073452947ec6a168d504dac1e7ea"],["/Swift Promises 探究/index.html","7f4cc5811cfd368b9eb843c36dfe8edf"],["/Swift UICollectionView使用指南/index.html","59cb918ab37daaf056437e8903010a48"],["/Swift URLSession && Combine framework/index.html","4be1de83d5482f6f56650a4824f255f0"],["/Swift tips/index.html","e151c33a6895981faadac966c8e2164d"],["/Swift 唯一识别的视图/index.html","0e9e1e05cd9e49de0bab9366126744e5"],["/Swift 如何学习现代UIKit？/index.html","45705b9163f5552413cbccfc08edc68b"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","2978a57a49ef3a502be435bd8458cfe3"],["/Swift 用 compactMap 替换 flatMap/index.html","ee2428ab12b5b3c71908f149c8cbfde5"],["/Swift 选择和播放视频/index.html","11315cf58b5fd2abaaf4086d6ea49527"],["/Swift中UIColor最佳实践/index.html","dd4635184ce777169794fdb6370fbdb7"],["/Swift中快速简单的工厂设计模式/index.html","871159b9795370e23c9a3747c18a3fc3"],["/Swift中构造函数与静态工厂方法的比较/index.html","99800b1c869d66f24695864dea98fabe"],["/Swift中的UITableView教程/index.html","22bfbeb1881ebbcb7ca0fe736c903ab7"],["/Swift中的懒加载模式/index.html","d4d795a8d76e3f61b9e90adb7f368b98"],["/Swift中的模块和挂钩/index.html","6df9f1c1b745cdcb366a79f538315744"],["/Swift使用布局锚点添加约束/index.html","e7ede7ca27eb1d3834c17cd427e7eef0"],["/Swift依赖注入设计模式/index.html","12632a89bd0d4e309781127ffbeb8526"],["/Swift关于Dependency Injection (DI)/index.html","7e92b05df4e319619b3cf2dc4c800552"],["/Swift初始化模式/index.html","d4215b21ff690470e6012245b28a96b4"],["/Swift单例模式/index.html","2b6dc2f19b9c7d0e4cc6f4748a15a704"],["/Swift原型设计模式/index.html","c7a6d1cbe3ccdbab597197740552a38e"],["/Swift命令设计模式/index.html","620c359b823409b1e18f065b58ab7001"],["/Swift外观设计模式/index.html","c5fabc833802516c59247af5bfd85ee5"],["/Swift委托设计模式/index.html","e6fce2b5187de120145dafd2a3b53836"],["/Swift对象池设计模式/index.html","8a9becb2171b8458d44834fd6065d6e7"],["/Swift工厂方法设计模式/index.html","f6a0e2896154b3b02d50241660b83730"],["/Swift带闭包的懒惰初始化/index.html","f39bd955e5021681aaf4fa3e237f1191"],["/Swift抽象工厂设计模式/index.html","bf8fecb20575832eea6d55f5d3809393"],["/Swift掌握iOS自动布局锚点/index.html","123e14968e1d35f7f789cc0302289cf6"],["/Swift支持旋转的自适应单元格/index.html","59ee3c894534775a5c8c5eae1f5641b9"],["/Swift枚举值/index.html","4be70363d9d9c9c9d977b3dfcc514b63"],["/Swift生成器模式/index.html","b8ba1c6e2dc7e1a4c211f95ad434091e"],["/Swift结合Xib文件自定义UIView/index.html","e86e77875860c1700fbb77983f284503"],["/Swift编写的20个iOS库(一)/index.html","ae6f43fbd7307b6c61570afd6537ef50"],["/Swift迭代器设计模式/index.html","19e85a324ea462ce45ff2cf42c88dc5c"],["/Swift适配器设计模式/index.html","5cd0f066c470154a58969d577c54cf04"],["/Swift静态工厂设计模式/index.html","9726bd067d4f50651e4d8894d7f5cc80"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","45a9c0900b8dfea8736567b265826204"],["/UICollectionView data source and delegates/index.html","a9eb5e8c3e93985431f8d1dfcbace46b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","967061b0fddef247b325a1fff564f64e"],["/UIKit初始化模式/index.html","223def83b21ea0834086bb0b99c62899"],["/Ubuntu18.04替换国内源/index.html","4bbca931c0c3f847323c0fad7fb5a3a9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","8551ef1e229e08269a4754ce9d881ded"],["/Vapor系列 (一) :  Vapor 初探/index.html","c0673d166f4cfea051affdd8ee6339de"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","7372a4fa5fd7771b26b5905f8a705ee2"],["/Vapor系列 (二) :  Hello Vapor！/index.html","efddf1896c3495995255b7f0ef4460e9"],["/Vapor系列 (五) :  使用session进行authentication/index.html","261db75a7828d7ea2e112eed95c67da8"],["/Vapor系列 (四) :  创建博客数据库/index.html","6b54c8c8ee8f76ddded97ecb817f4d57"],["/Vapor系列(六): 徒手撸一个CMS/index.html","1c801c7b38fc34f9a7e046bd1f9e9e1b"],["/WKWebView与Native交互注意事项/index.html","bce50ad00d910472ce81197333e03ade"],["/Xcode扩展/index.html","ac3d363dc6336a1621ac4d731296ade9"],["/about/index.html","6074bd2f60ab5ea2649781cda91f00f3"],["/appleOS的Networking示例/index.html","cee3ae171ebc1e3a708a079ca928959b"],["/archives/2020/03/index.html","49a34e63aacf007e81ffb2753772c385"],["/archives/2020/04/index.html","604a9f776dedf39a5628c3f2e7403683"],["/archives/2020/04/page/2/index.html","2f2b80b2383142c449a90513e0d29f05"],["/archives/2020/04/page/3/index.html","1f5484a756837a1599ef7f4ab4340dcd"],["/archives/2020/04/page/4/index.html","8078a79b2cc5b9c1ff8153da28b189c3"],["/archives/2020/04/page/5/index.html","f047d8c1830b68e0a0f0d9c913d07e91"],["/archives/2020/04/page/6/index.html","9524609b5967a174d116e77f5079a721"],["/archives/2020/04/page/7/index.html","5d034ada98cdfa8ca594c3635fd15ff8"],["/archives/2020/04/page/8/index.html","e397ae6a275652247e1a6252a1051149"],["/archives/2020/05/index.html","0c8dc180c99270a39a5f96d04345d808"],["/archives/2020/05/page/2/index.html","f9d0d771f5139ddf56651c373b4b2711"],["/archives/2020/05/page/3/index.html","e72e8cc43abf6ab1e330201bfcbe9d59"],["/archives/2020/05/page/4/index.html","ed69463f6a15042db0899684c90da48b"],["/archives/2020/05/page/5/index.html","862067f3feeef69c6965af61a8f95441"],["/archives/2020/06/index.html","6ab2b84ee9a5ef6befadcebc50dbf7b3"],["/archives/2020/06/page/2/index.html","7d0b8f91f39f44180c76db09a50ff439"],["/archives/2020/08/index.html","6eb852cf651bff88d89b5020a95132c6"],["/archives/2020/09/index.html","f7df2e1ea691772e96acf01d36a745f6"],["/archives/2020/10/index.html","f25e027cb9dfba68568d948ee5780c65"],["/archives/2020/11/index.html","9598d8b61b7f3e5cd42d8924275c4c8e"],["/archives/2020/12/index.html","46d509de6710fb0cc8f0c98cb17027e0"],["/archives/2020/index.html","7fc0825d2b1f29d28b58a7dcea1d7a19"],["/archives/2020/page/10/index.html","f39564aec552fca6b6aee6eeb84a0eea"],["/archives/2020/page/11/index.html","326d08b6942f6eec44b0671a13a58149"],["/archives/2020/page/12/index.html","45e032b90b4e1975a665d0675fb4c4bb"],["/archives/2020/page/13/index.html","7dad25ba785a8d9d0a93c0ed4ce00baf"],["/archives/2020/page/14/index.html","dea7ebd28b94bab870696c217b4b4feb"],["/archives/2020/page/15/index.html","e76c9510301a974e82d11d519a5701b4"],["/archives/2020/page/2/index.html","97d999d3b41a25ed5f6d49a0dc2944c1"],["/archives/2020/page/3/index.html","ae43336c8b11d1a9e47526a2f139a686"],["/archives/2020/page/4/index.html","22a5703b5f0ceabb8de9150be966c9ad"],["/archives/2020/page/5/index.html","4c438eff0f01af791f99b33f44858c3a"],["/archives/2020/page/6/index.html","543bdbebad7151189d6ddb000429664d"],["/archives/2020/page/7/index.html","1820cab65803e96ad5e2f35b65a6c35b"],["/archives/2020/page/8/index.html","73f9bf55fc69720ba4db8825ccbbc69f"],["/archives/2020/page/9/index.html","caee96fccf3552a87ee02782b7ca98c3"],["/archives/2021/03/index.html","9167fa40a65f3e03ee3deb6181f6f14e"],["/archives/2021/04/index.html","7597055fa423835ad22cfb933738bafb"],["/archives/2021/05/index.html","ab3d505cc90bb2539381df4336aa4e42"],["/archives/2021/index.html","dc1cea953eaddf4b7122cf7f8db74016"],["/archives/index.html","941c9ff2df31bb239705cff2f8cd9ff9"],["/archives/page/10/index.html","b3ba8e3d66f0e105d44f11ec470962dc"],["/archives/page/11/index.html","edd9c63bf97198302cad9bbc20a8be1b"],["/archives/page/12/index.html","ee2bcf8b069c966dfc278cc64694a89c"],["/archives/page/13/index.html","0ab883218f5ecab1f42f03dff0857369"],["/archives/page/14/index.html","4c64e6ac9a9780f83382ab3a96918ce0"],["/archives/page/15/index.html","b248938663691a2615b4ff1bab795bea"],["/archives/page/16/index.html","bd163e226c8dfe8689cc87349b13fbfc"],["/archives/page/2/index.html","502ea05304795ed0bdedff177ca990e2"],["/archives/page/3/index.html","b7fb29fc2165223f45cab095b5673fd3"],["/archives/page/4/index.html","49b03faed02211b41347f5ae6ac5b554"],["/archives/page/5/index.html","49205d4c4156d817528976840207fe77"],["/archives/page/6/index.html","e928ae7c1ca0a34634ceaae6849a3ddc"],["/archives/page/7/index.html","513bdb476d8352c654306d8f137014dc"],["/archives/page/8/index.html","41461c66672da60838fbf33546ffa4ec"],["/archives/page/9/index.html","1ac4950976088d2e6be519dee76920da"],["/bugly 上传dYSM文件小记/index.html","a74a32be638fe8ea3e100afe5d38846a"],["/categories/Advanced-Swift/index.html","9aa4e8adf85343cbc17e86d949a03492"],["/categories/Advanced-Swift/page/2/index.html","d6cc5e8b6cb42461bbcdb2ec10cae28d"],["/categories/App-Architecture/index.html","2d5fcc07ac31c6be78d990b0aab52a93"],["/categories/Array/index.html","77d69501c9f8c55d1b4d169cca4a0bc1"],["/categories/Codable-protocol/index.html","ba5aeb97d23bc8a5ba37c654575341c9"],["/categories/Combine-framework/index.html","0001f3726548026784aa0981f7c7500c"],["/categories/Combine/index.html","300193ac0916e82da8cd039ded323b01"],["/categories/Go/index.html","404f5e4f138d5cb44b969573d5d5b60a"],["/categories/Grand-Central-Dispatch/index.html","9683d7fa698e4b14cb0ba2a9791be022"],["/categories/Hexo/index.html","c63c67e4fe85604263aa3d664e75056d"],["/categories/Homebrew/index.html","d1400250e02e6d54f058e59a140a6fdb"],["/categories/Linux/index.html","fe78783ab4dc3ddd92989b5948072aca"],["/categories/Promises/index.html","a2ceba0e05df257ac611ca556ea3d1ff"],["/categories/Result-Type/index.html","e8aeaee4a02a74b90c5429535e2d5c64"],["/categories/RxSwift/index.html","d04d05b9fea49db7452d4724482b5ff9"],["/categories/Server/index.html","d8aea3daa7ea29863aefd61afc5a32dd"],["/categories/Swift-Apprentice/index.html","8b22efb9b6ed29e0cc6b41664b91950c"],["/categories/Swift-Apprentice/page/2/index.html","563d57c8b7fd5b58f0a91f6bce2badb7"],["/categories/Swift-Apprentice/page/3/index.html","79792b840688eb0af4cbbfebabbd7ec1"],["/categories/Swift-源码阅读/index.html","1f6f90b78e004259f61ce7521dcb1563"],["/categories/Swift/index.html","8d0182a141ef7c659be3071de3f007f2"],["/categories/Swift/page/10/index.html","1059f526d37e0006afbcb4150cb7ba41"],["/categories/Swift/page/11/index.html","43c09cd639d4b186cb5ed9dd90529a0d"],["/categories/Swift/page/12/index.html","6df7593a81672630fd109c45e3dde63e"],["/categories/Swift/page/13/index.html","cf0def5b58d97c25cbe64e482c2ec60b"],["/categories/Swift/page/2/index.html","ab92618c1be92777500b4ecb49a1304e"],["/categories/Swift/page/3/index.html","ac4e84f7d5897024278427dc14438008"],["/categories/Swift/page/4/index.html","ec98468bd8c2dbe3a56da26aa8347984"],["/categories/Swift/page/5/index.html","5db867c7169a7c37c6d62739f3bf0ce0"],["/categories/Swift/page/6/index.html","40533369a2c36fce62369e6ad39d235d"],["/categories/Swift/page/7/index.html","636030e4326e8630fbf8b82d185f3da2"],["/categories/Swift/page/8/index.html","f6b299625adff17a3f358c652f35100f"],["/categories/Swift/page/9/index.html","4b2fc0cf37ce7c56a80b2e0f9a69b0b7"],["/categories/Swift5-2/index.html","9a782fff0cda4969f07c1b6a7f5c4719"],["/categories/SwiftLint/index.html","27980bf8e8d9d17782195f49ff48a336"],["/categories/SwiftUI/index.html","ba2b9d866bd330721ec07e9187884753"],["/categories/UICollectionView/index.html","2bd3c29ee6628a325b517b61bf4c2477"],["/categories/UIImagePickerController/index.html","d6d50c4964912ab19533abd033927457"],["/categories/UIKit/index.html","f21d00ed33fd45e986d48a53fd673edb"],["/categories/UIKit/page/2/index.html","3306e47a6e99ea9dcf49806761e05a76"],["/categories/UIKit/page/3/index.html","f2cefc0f38c8d79d5a911100c19fe738"],["/categories/UIKit/page/4/index.html","0334c1cae6f73aa0e412014822c3231a"],["/categories/UIKit/page/5/index.html","7a1f29d386d0474c9bf096de4210319c"],["/categories/UITableView/index.html","6674a91194228a9e413f9c69cfb3e402"],["/categories/Ubuntu18-04/index.html","1921b6d18ce1f0ef0a77d39870c0514c"],["/categories/Ubuntu软件源/index.html","9c4d35c672eb04fba3ed86b9999cb2f7"],["/categories/Uniquely-identifying-views/index.html","45754aac7d9025c86652f49011aa77ee"],["/categories/VIPER/index.html","785e5bb151c02919b15f6e6a03ad0dde"],["/categories/Vapor-4-0/index.html","c8b842d51e18ebc2ac4bb1be5c6c0fe1"],["/categories/Vapor4-0/index.html","91eacc63ee25b417392f3cf79236f27d"],["/categories/Vim/index.html","cd0893f9cf0213fc933053a4543ebd98"],["/categories/Xcode/index.html","45a8cdb9bb3432daabd82628230f63ae"],["/categories/appleOS-Networking/index.html","0c12086996cd12dcf0bfeefc85d74a90"],["/categories/bugly/index.html","127e376253c73f69771446a8d4be9783"],["/categories/enum/index.html","fbdbc08dbff78b706284a9d98a2c41d8"],["/categories/git/index.html","fe3a5816dcf892874a9d47c67be97208"],["/categories/iCloud/index.html","47e7a354a4bd4036f97fb314bdac950d"],["/categories/iOS/index.html","071e8f5f2344c3f983e4f7a7c3c01674"],["/categories/iOS/page/10/index.html","ffe96c3bf9851219c64cf48a1d09dd09"],["/categories/iOS/page/11/index.html","378661da188d302d44423f56a7d6bb9b"],["/categories/iOS/page/12/index.html","08bf82e8149cce4c6d75935bf1b6fed5"],["/categories/iOS/page/13/index.html","cebc787f69d8b5006b76e32cbfe41828"],["/categories/iOS/page/2/index.html","1f00fbab7a833c3cfa83b2fba0d3119a"],["/categories/iOS/page/3/index.html","fa30ec6142b0fa09f22090f1bf639206"],["/categories/iOS/page/4/index.html","1cdf34f3fb3248270bf7914e51534f32"],["/categories/iOS/page/5/index.html","29ad3085348774cba2404ca1f56ad2ac"],["/categories/iOS/page/6/index.html","52a024b1430327f37fc4a698d454d304"],["/categories/iOS/page/7/index.html","0c2e5fed744fd71d0d3503a52cdc7b94"],["/categories/iOS/page/8/index.html","7820c9ac9604edc602c6293f73d79b4b"],["/categories/iOS/page/9/index.html","603f1f44b94240e612b5495f7ce3cbc7"],["/categories/iOS面试题/index.html","d5c45a7ac7c919b6d4678456aeb3088c"],["/categories/index.html","62c6a5c7024a3866ef4c31687a8f6262"],["/categories/random/index.html","a8daca7eef35bc407b32c5f64b6ab77b"],["/categories/三方类库/index.html","1669620209e468d9b01652e6dfa26790"],["/categories/函数式编程/index.html","9d1f98878cd280d7816e80d82365143a"],["/categories/子类化样式/index.html","8a9f81021a7e19d2a73bd315b1bf6f45"],["/categories/开发技巧/index.html","11513eee4947053f904ca93ac3ed418e"],["/categories/开发记录/index.html","112698377ab26fb74d686a27798851e1"],["/categories/技术支持/index.html","f359b415809c4cbf11b0f2a6e2aee8d8"],["/categories/架构设计/index.html","25b66fb2f3df10518bdde5bdffe5abff"],["/categories/测试/index.html","dac8c11d7dcca9b53d7142e1a889628d"],["/categories/用户体验/index.html","cdfecc3f394350ed659efa85852c07ed"],["/categories/用户协议与隐私政策/index.html","d0bd7f82f7df7e7d85c94e3252106f69"],["/categories/设计模式/index.html","42b895bcbd1880974943b2a85ae67d3a"],["/categories/设计模式/page/2/index.html","98f73c8afe0e9d63798b71f59d45c408"],["/categories/设计模式/page/3/index.html","9b798c905cb18ff3d65940a2e62d5a25"],["/css/main.css","3323f1cdfa7f4b5614fab21ca483c789"],["/hello-world/index.html","7ec3f6be609802c692b9bf64a8c6b180"],["/hexo部署失败/index.html","117213c18c557a8a6ef619035cd6deb6"],["/iOS VIPER架构深入实践/index.html","ca3046029c54103b1854c5ca094d0ed3"],["/iOS 自定义视图，输入表单和错误提示/index.html","e7ff320870267b3fbcf7560d9a8b843c"],["/iOS如何使用iCloud文档？/index.html","d7c879e8baa1dd5f109a9e71c8b0982f"],["/iOS子类化样式/index.html","a57e45835d6c4617bdde65b2ba4f4edb"],["/iOS开发记录<一>/index.html","0ee9de7dce0d9ce0ac11a6daa8c0b7bc"],["/iOS自动化布局编程/index.html","c1bc87c3dda2c6e7f16f713affc0c4b0"],["/iOS自定义转场(By Swift)/index.html","a988763727c5a345b042adefb1382d23"],["/iOS项目架构：使用VIPER/index.html","01e62b13b199f4b46d46bf60ed26bed5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","da7301162b243e1c5c6c436787e68545"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","5d36d211f8273ca360b7f7dd99460563"],["/page/10/index.html","d27f291ed5c544eb2f3c12e696fd115c"],["/page/11/index.html","b56a3b2cb1af0e64faf824cee5e5ba2b"],["/page/12/index.html","6439ea5020db99ce33901f7f18ee6f10"],["/page/13/index.html","f39a830d894dc07f5d5e6bff1780b80f"],["/page/14/index.html","3284695aa5f5e718e9cd4aab8fd530a4"],["/page/15/index.html","322a094c30e89a94f276db153268a422"],["/page/16/index.html","b4b3563ca4298a0c1527dd87986c3df1"],["/page/2/index.html","ad287ac08871c87e8dde3eacbdc40263"],["/page/3/index.html","718221a38fca00f5505bc09b27959f54"],["/page/4/index.html","66f9787cf9b1c054fd49601831cdeb4a"],["/page/5/index.html","0b91739b18f84b3974fe69545d17aa25"],["/page/6/index.html","fa6666e59d6dda7779fe1b17dff3926d"],["/page/7/index.html","733f8203ba96c44c6c833e66663f5a0f"],["/page/8/index.html","da14b9aa16079a1cd308ca187ee7df44"],["/page/9/index.html","f26f65010dc13cbcc30299c74b145438"],["/schedule/index.html","58d5adc993995952039a4c0b375224f7"],["/storyAppPrivacy/index.html","75709c65806ccc75cf10f03fe1853743"],["/sw-register.js","41de95afe236a53dbbf5d415e03b142c"],["/tags/Advanced-Classes/index.html","9a4467e46d60dd11a28482fec089443d"],["/tags/Advanced-Swift/index.html","ac93449151bf99c0df4891a5dc3228fe"],["/tags/Advanced-Swift/page/2/index.html","70b58c4efd4e1d6035dc79280ff7ca5b"],["/tags/App-Architecture/index.html","eb792ec759864dde9bc69b8909a33e33"],["/tags/Array/index.html","f3462b097271418c2db26d6910ab34ae"],["/tags/Arrays-Dictionaries-Sets/index.html","0fab005e4d2bf75f08b3d7b9766d3b1e"],["/tags/Authentication/index.html","037b7bffbc15a43b633192eaac5a41c9"],["/tags/Build-in-Collections/index.html","ea12397c1eacc87768a3566f8411df5c"],["/tags/Building-Your-Own-Types/index.html","eba4711bd49ccf18b7ce30d43448f682"],["/tags/CMS/index.html","6d6e232d6af17e4b24d1e77bc97d3c69"],["/tags/Classes/index.html","d8cd94aa1ef19e13aeba11af91edb556"],["/tags/Codable-protocol/index.html","273c29c527e6cb5f735ed65af4c574d6"],["/tags/Collection-Iteration-with-Closures/index.html","3a797e6c439de1fa430f07bae553b15a"],["/tags/Collection-Protocols/index.html","5bfa33bc7b047ac457d9b4f47c711f50"],["/tags/Collection-Types/index.html","1d51adc49e05ef8fedd19a4293da2f11"],["/tags/Collection/index.html","f0f31c08ba3adac6818c4e684d0fd36f"],["/tags/Collections/index.html","a631a8372bc00a12d06f84b36e5c4bda"],["/tags/Combine-framework/index.html","a7cf617f5ab21b62afb00878e6885c91"],["/tags/Combine/index.html","291b5b18ab261bad5494f08cabf85ab0"],["/tags/Dependency-Injection/index.html","601cbc234cf5f5b7efb71d4f87ee3ca1"],["/tags/Encoding-Decoding-Types/index.html","459aacc90e4052369de1170168b8615e"],["/tags/Encoding-and-Decoding/index.html","93611ee7dfebf4e4327ae6e0696471e6"],["/tags/Enumerations/index.html","c7c7e56823f42ac8d035b3dba7b36d14"],["/tags/Enums/index.html","4c73b84586588a2362cf77bfc7946210"],["/tags/Error-Handling/index.html","28f5ab9f2398e491a6c41ec77c2bb33e"],["/tags/Functions/index.html","4666e7e8135874e660c3a473da2e0728"],["/tags/Generics/index.html","49381b3ac6fb85854a9811938c147cd9"],["/tags/Go/index.html","9216d6762954fa9eaffd27bb40f33c3c"],["/tags/Grand-Central-Dispatch/index.html","3f6c9d42ec5aaafe643e0bdaeceb975c"],["/tags/Hello-Vapor/index.html","120abadc9e82489b7f1e9b4aee7ddb8c"],["/tags/Homebrew/index.html","7d9d5ba0c4fe029c9da92c3e99f6ea9e"],["/tags/Interoperability/index.html","805524e2a3d48466b1fbce7281450494"],["/tags/Introduction/index.html","2a71c640a5995e58ece1417d551de373"],["/tags/Leaf/index.html","3c68cee7bf0e29da87e35c7951eea83b"],["/tags/Linux/index.html","e46066a87b37513be5f7a033b896874b"],["/tags/Methods/index.html","b99913f4f263c848d2c1532575ab0941"],["/tags/Modules-And-Hooks/index.html","2a7bab8eef1bfac1e5b6c221d7f4fd65"],["/tags/Optionals/index.html","e8a82ccadea16eee819b04348cf34cd0"],["/tags/Promises/index.html","e6df22898b50aa42bdd6147fb6c34bbe"],["/tags/Properties/index.html","59da184234c7fefb441757ac0d02a734"],["/tags/Protocols/index.html","7b9b111962ce0602e1bb1812fdecd280"],["/tags/Result-Type/index.html","a297cb733f3eadf2fb86304124d6553e"],["/tags/RxSwift/index.html","84f52ea6ffb214bf7a866e46b23dbdc4"],["/tags/Server/index.html","ce40123e09f6733f25c1588097ec58d7"],["/tags/Session/index.html","bfe759e4ca6472b7a5b3a2dddec39f3a"],["/tags/Strings/index.html","ac25e4777568105c34458c9af51bc1a0"],["/tags/Structs-and-Classes/index.html","83a93db32e6e7fba97ed48baabe0bcf5"],["/tags/Structures/index.html","8ed7889533a173ad0065f1c71b54cf11"],["/tags/Swift-5-0/index.html","5fe47290fb64a59edf88371e8990d89f"],["/tags/Swift-5-0/page/2/index.html","08ad0ea0b6fec52374b79a7132f27231"],["/tags/Swift-5-0/page/3/index.html","437c1946349018ec519bfcc92db24221"],["/tags/Swift-5-0/page/4/index.html","95d10a96d0fffe972a8649fb46b5ca2d"],["/tags/Swift-5-0/page/5/index.html","7d61e416e75cf753d2353c7f911c3dc9"],["/tags/Swift-Apprentice/index.html","ec668c65b245349cedcc5fb1a89fd1f6"],["/tags/Swift-Apprentice/page/2/index.html","fae49dbffb5e112276404c85dbfcc40d"],["/tags/Swift-Apprentice/page/3/index.html","39ac88dddc120aace695f3ed1b88a0db"],["/tags/Swift-Package-Manager/index.html","1c7289b5c5da22c1eecaaa0580344deb"],["/tags/Swift-源码阅读/index.html","5cbde0fdc13b8a3d00623f53449271f9"],["/tags/Swift/index.html","b1eb84de0ca8c5dbdb004923612599d7"],["/tags/Swift/page/10/index.html","52370d24d74fbeaeb6731d358ed20bbc"],["/tags/Swift/page/11/index.html","eb0d1029930260c5e6bc9f3d30464a92"],["/tags/Swift/page/12/index.html","21310cd46d8d880ecb7ca3d7b1d07bed"],["/tags/Swift/page/13/index.html","3990d1f8f91f32bd6331e7b0b0c0684b"],["/tags/Swift/page/2/index.html","69030d7c22a232e2832c618f4e902b60"],["/tags/Swift/page/3/index.html","c32dbf1c2a528dd8df766d3ff4f90265"],["/tags/Swift/page/4/index.html","a9d50f222015872c9d6db0bb2977f0ee"],["/tags/Swift/page/5/index.html","07f9912cd02f2e82160bb988a0d709c2"],["/tags/Swift/page/6/index.html","8f0c751352bdb4d46dfcd3d2a642c76b"],["/tags/Swift/page/7/index.html","6aeb486aef660891514a7c84eb245a90"],["/tags/Swift/page/8/index.html","e1fd15d1788e8e7154f0ef24f4692dd0"],["/tags/Swift/page/9/index.html","1070f367dd6060581118127328bfc521"],["/tags/SwiftLint/index.html","d5827349f2ba3139819133e87c92cf93"],["/tags/SwiftUI/index.html","7c50bed5e14dc3b79d5e381ced6a50c8"],["/tags/UICollectionView/index.html","8ddbf44d6ba78538ad89f437a2f2dcd5"],["/tags/UIColor/index.html","b0a2ed7b3a779e0fb180034a4b5a1bd2"],["/tags/UIImagePickerController/index.html","3a692609c3b92be4770013a668b9749b"],["/tags/UIKit/index.html","92d8af5109d10ea4438979d77187156e"],["/tags/UIKit/page/2/index.html","847e9e0b98f58120fd58e5f1d8ecd56a"],["/tags/UIKit/page/3/index.html","767eaea8ff7a60886571f5f3b342c81e"],["/tags/UIKit/page/4/index.html","e2040033ebe6811a67a392bb30c7c9d8"],["/tags/UIKit/page/5/index.html","b80f5833478ecb71b9fd1144dae2413b"],["/tags/UITableView/index.html","b1d7613d4b76349a528b7c3dd5e43a23"],["/tags/Ubuntu/index.html","27517657b56fe0260c3c7e85eb1fd720"],["/tags/Uniquely-identifying-views/index.html","c89a3d487d60898411478e7f09af468f"],["/tags/VIPER/index.html","722479e4e559c6d936e5978c2b412ed0"],["/tags/VMware/index.html","d2ee0a2d46bb10207919f2eb077bcfd2"],["/tags/Vapor-4-0/index.html","608779a30ddfd8bdfe648181b3d117f7"],["/tags/Vapor-初探/index.html","21cecbaa2b68939186e879c56287eb67"],["/tags/Vim/index.html","e0c3522023a2dcc927d376219663acc1"],["/tags/Xcode/index.html","9f361799cbbb9d731d057ddbfbbe1f5e"],["/tags/appleOS-Networking/index.html","1e6c0346768d840eb2f210fd083bbe7e"],["/tags/bugly/index.html","9889f646275358db848cb5247e9253ea"],["/tags/enum/index.html","d0de93ef3277e93b11d805c502ec4655"],["/tags/git/index.html","03e9f6918097237b2586b4522ff07c7d"],["/tags/hexo/index.html","a572077cb7b2bdc085bda34fe4cb7f44"],["/tags/iCloud/index.html","29fd7530ad97a16e24323249c2724964"],["/tags/iOS/index.html","5a69f6399318a3e7895c319e6aa47793"],["/tags/iOS/page/10/index.html","d76435394b2d961e31cc1e272b3f1eac"],["/tags/iOS/page/11/index.html","a431aa3a21dd38b01af0ea29d827ba72"],["/tags/iOS/page/12/index.html","9453a5441ec344997d80c953394d7eec"],["/tags/iOS/page/13/index.html","f8256598644bcbe2fd30d541e36a34b5"],["/tags/iOS/page/2/index.html","aa95b5bea435839710023e2bceff8c93"],["/tags/iOS/page/3/index.html","036abeb533bb1338f88a49df060f4d21"],["/tags/iOS/page/4/index.html","6f4dd4527a64904f5cba56fabd241ab5"],["/tags/iOS/page/5/index.html","702ba06130921622a4f388e4d20bf068"],["/tags/iOS/page/6/index.html","98be8410b00e6e6c2e96eb8db9dc8797"],["/tags/iOS/page/7/index.html","16a7d3f00abca5dec452fca08fa73076"],["/tags/iOS/page/8/index.html","7a246fc49c67b6991c60d0c6a1693413"],["/tags/iOS/page/9/index.html","adf6da7618da4392876001234ecac9a9"],["/tags/iOS面试题/index.html","0307c9ae484a9c087484e64226ef8dae"],["/tags/index.html","9c0d368dde89a733a9dff194d1708d0e"],["/tags/non-optional/index.html","70d01e04d13b8257c24645a434f7b1a9"],["/tags/random/index.html","974cc24346c09978b07476dd4263a5a6"],["/tags/transition/index.html","026dc7f24ab754847ba3e5ef47293a00"],["/tags/三方类库/index.html","11667236dd30194793dbabf39c938653"],["/tags/依赖注入设计模式/index.html","b71628b49841096d70dce4454c831d22"],["/tags/值类型和值语义/index.html","cc0a42fd6e56e4c5f29e8bc78eebc006"],["/tags/内存管理/index.html","6c78ac1a81bbca4acadb7f9dc4df1f33"],["/tags/冒烟测试与回归测试/index.html","335aa9b31edacc43c8e7591586dd35d8"],["/tags/函数式编程/index.html","18191e1647ee65b4c72a14e2ea3c5e91"],["/tags/创建博客数据库/index.html","c3e832afa44b38d3762de47e9db3214c"],["/tags/初始化模式/index.html","ddb5072e9ef7e8ca26d778496a8a14d7"],["/tags/单例模式/index.html","0148f428e284d0e9a35d31f7c7127fa6"],["/tags/原型设计模式/index.html","6c60b18e3b60551bfc464b950f719694"],["/tags/命令设计模式/index.html","8b7c09e564aa49bb9ad38f65a53d1def"],["/tags/基本控制流/index.html","3aa392bee8ecdc491dfb4b9faa2dd639"],["/tags/外观设计模式/index.html","c949371c55d0c39c60eeaed107fd7ffa"],["/tags/委托设计模式/index.html","93bbc9d3f78523a244c747822f30a199"],["/tags/子类化样式/index.html","ae60b1742f9fb7ff27cbf146e91483ff"],["/tags/对象池设计模式/index.html","d87542c0c246fc89982e2d4e7edf1f83"],["/tags/工厂方法设计模式/index.html","6abc9fd21db394ae894d5207042426e2"],["/tags/工厂模式/index.html","cce5ad8722c835b3442138f2eb5ddc35"],["/tags/工厂设计模式/index.html","d744dfea147a75c12917666218c7680e"],["/tags/开发技巧/index.html","d269b2d136c1aec41eafa572d8adf546"],["/tags/开发记录/index.html","63bf9290c8bef7a8e8dc4ea54ed9ea77"],["/tags/懒加载模式/index.html","e6c31a312b08a3f4382d1d1a54ff060f"],["/tags/技术支持/index.html","7f9af2a5357953d93087f5d475849fc9"],["/tags/抽象工厂设计模式/index.html","36725fc5dcc747cd49dec483c8283b29"],["/tags/构造函数/index.html","9b068d4dd82b3d414a9acda919cb2b96"],["/tags/架构设计/index.html","d1c7b356cd67c3471d46df9d5fb55a7a"],["/tags/模式匹配/index.html","e7c279e7d0f2c76766a7f060f42f5932"],["/tags/生成器模式/index.html","88e3a8a83a4a1b7667523c2a8ec81cc6"],["/tags/用户体验/index.html","6a3fd1ca05e3f227c1f9f6ddddca1d2b"],["/tags/用户协议与隐私政策/index.html","2edcba8d62773332b88af69cd71361a7"],["/tags/类型与操作/index.html","25e60eb6cd4cf34a353efbd9483f4570"],["/tags/自动化布局/index.html","d56020e23e0891f27321009c9ee183a4"],["/tags/自定义UIView/index.html","12e72ef9222fe8f33ad99db26981fd6e"],["/tags/自定义转场/index.html","85a83d0a225a2bf0f7feadc69d3a7b5e"],["/tags/自适应布局/index.html","99320ab6660301b706b2ae359c486a5e"],["/tags/表达式、变量和常量/index.html","5c8ad13eeab9fd1ef8709062b81d5f18"],["/tags/设计模式/index.html","3651c64ffbb1416ad0edad008c108049"],["/tags/设计模式/page/2/index.html","c72dbb3972422acfebb012c617d20df3"],["/tags/设计模式/page/3/index.html","deca49eaff67ceba18798e41565d6937"],["/tags/访问控制和代码组织/index.html","609dd75034cf3117287496d529270c5e"],["/tags/运算符，下标和键路径/index.html","b89080a7991f138ea7dd78b294410177"],["/tags/迭代器设计模式/index.html","6f6df4960731171cd142497750bf7bdd"],["/tags/适配器设计模式/index.html","63ae238290b1295d34c84cd6303ae7c4"],["/tags/错误处理/index.html","5ddd59efc7559541193807ef260ea9e2"],["/tags/静态工厂方法/index.html","ffbf6ba55d58629cfb3bfad9e6e97243"],["/tags/面向协议编程-OOP/index.html","6345b48640b83a572c244d2840be0c76"],["/tags/高级主题/index.html","2887fe78f77d8885118eb111ced22891"],["/tags/高级协议和泛型/index.html","0e9d368d3328d002b9981817751d4226"],["/tags/高级控制流/index.html","ffec55c62c688834b1667e453c2278ab"],["/为iOS应用构建输入表单/index.html","93f8491b67eb43a5051970511c65b4b6"],["/产品开发的幕后花絮/index.html","954c662fbe49c664b04513ecbeff2572"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e68a7b8fdaa48fa9f1d6928f634e52b4"],["/冒烟测试与回归测试/index.html","e6c63e8daae489afb0b4d2f2641c8809"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","16e49a4d797b0b0bd3c05bb09a648dd5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4f4925c7655390097cf16af50988ee47"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","84454b063c7a6af165d1874ff8767f42"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","ec53f8d096f518910c425a6bfc1574cc"],["/在Swift中创建自定义集合/index.html","5c8d40992769b3d2774cdd0e85eb3105"],["/在Swift中处理非可选选项/index.html","8db7401d8424973407ec15e7018b97fd"],["/在Swift中生成随机数/index.html","7dbf0284168847c7205116b08453905a"],["/在Swift中重构单例模式用法/index.html","ed83db0c5495c08e81b40a1e224e4513"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","c308215f70864f81062e5ed327406063"],["/如何为VIPER编写服务？/index.html","a1c01ef811f433b799deeada35aaf98d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ef3c1a7091b7fc4f17a3e793d4e9610f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","4795872a47a61954f8996ef5fc60b847"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","358aa244cab656cb8df0994fd1c34006"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b60789744311cc32fad13a5efb54203f"],["/掌握VIPER架构/index.html","dd2f23de23774b118ff05bcb03c653b2"],["/揭秘 WordPress Hook 系统/index.html","21f26cc8d3ecb5ea7a3e2b96ff999fe8"],["/比较工厂设计模式/index.html","ef80ac698e9edbd5003d1ac10770355d"],["/深入了解Swift中的Grand Central Dispatch/index.html","039a31963361765892b34d57e12cb5f6"],["/深入研究Swift框架/index.html","5b1bcaa940ff84de4238b8a2ff72db32"],["/美豫直聘技术支持/index.html","cad7f50e5f25b86cb545273d58da6842"],["/美豫直聘用户协议与隐私政策/index.html","d0a003c3582ecc7b38d9b2fbdd17b60c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","ec5eb8c07a1631a8ca75ff353dd8ce2e"],["/选择Swift而不是Objective-C的5个理由/index.html","b12b435da4c79f7ead02337dad2e5f6b"]];
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
