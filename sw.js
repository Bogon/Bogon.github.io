/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","e2fc0faeff5b5a6e1d1784a2e9b7b710"],["/2020年iOS面试题总结(三)/index.html","85b08436d3d3da7a274e49b122dfc195"],["/2020年iOS面试题总结(二)/index.html","5c58cef6959077f78c55f42dff312cec"],["/Advanced Swift系列(一): Swift 简介/index.html","53425db7e5ca53a57e5035e7efd47faa"],["/Advanced Swift系列(七): Strings/index.html","c4d5fa281f9ebb1df0148020b696144a"],["/Advanced Swift系列(三):  Optionals/index.html","4a91e20aaafb5ed6ccbe495733fd7abb"],["/Advanced Swift系列(九): Protocols/index.html","5f41c420cd9a7bd3ed51f91d43a333fe"],["/Advanced Swift系列(二): Build-in Collections/index.html","66140c05b31dd9bfb3b5eaccbedbaacc"],["/Advanced Swift系列(五): Structs and Classes/index.html","1bf7d30a7e43273b243163773d84a35a"],["/Advanced Swift系列(八): Generics/index.html","0d27c92d40d24e18a6199e0c6523455b"],["/Advanced Swift系列(六):  Enums/index.html","ab4d943631fa8b54ec227530108cbeae"],["/Advanced Swift系列(十): Collection Protocols/index.html","ea036b591e16e265019eccd90ce00652"],["/Advanced Swift系列(十一): Error Handling/index.html","851ae3733325e610950c7290249c683a"],["/Advanced Swift系列(十三): Interoperability/index.html","8c69728581b8e1162fa25a7869a16e31"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7923c2a993d89d500902944a71df3bd3"],["/Advanced Swift系列(四):  Functions/index.html","6a6eb9d0670613fff094c9f4c2db0081"],["/App Architecture系列(一):  简介/index.html","08bd5cf3ee5f6d2fd35734a723a17e4c"],["/Functional Swift 初探/index.html","e87e0a1a7be9d34e69e164af5f3816fb"],["/NSCODER和SWIFT初始化/index.html","8b2de54adbdd0e020ee6078a816420dc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d48ec2c59e432f764eda9c850661020a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","566bec3948efc030c48dde67613c41da"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","10824915fbe31aa6774d5209f456c046"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","7abcaa0a01d128f3d22d4ec3753d0e8e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c3d98237883022539b79948b481f2302"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","40078c389b9fdc17c79096e3e41e4733"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","0c5db5fe893e8224b93637adf4904450"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","08874218fb7d18d751527ac1d26803e6"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d7fc5324dfdd90828cad56ae4defc88d"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5c8edf36aae3399fe71d44bb732b3fa1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","002f3c6146d0bb9ae7bee4d67b4a02d6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8c11a8aec6c3681c8f33368c1e2f5e23"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","9da446fbfbf5763f3c23b812edb2f30f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ddd6d61ef4c2cfeb143312912c51fe1e"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","984f3e6a5c025275bd0af7607c40008f"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","b757ad3e201163d1b91a41d46fe646f4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","73dc67795992aec207c7f74d6cc0c90b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","73f593a7d80d09735c8e9f85e952eac8"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","23b1344189c392d7247bc521f5b1aeb4"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","099927b829e7893304226b40306c12d0"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","9f33574a0bcfaca9dd123c511a606d6b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","1b5835d6501670196ad1052413e65133"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","95d00e7bd94bda421a99eae1e7fad33c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","25363e09c7f538b5413773a3a518d4f7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c793322539153e2b0c7e53f5fcade81f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","861c147ac32f246f5733325421922e5d"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","aac70366b2013f85ff123f193ce976a3"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fba2841df6122c83f60b411c5e55c608"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","ee330e55ac044a402971ffd4db424e91"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","fe1ade8ae7008b5aa91b871130af3b3c"],["/Swift CompactMap vs flatMap：差异说明/index.html","00a728f525471810b9f0b16d26c2ef76"],["/Swift Grand Central Dispatch 深入实践/index.html","b34fb0c896279925d4c0d469794da59c"],["/Swift Lazy属性初始化/index.html","3f8426b491dbd71ca3b243b15da3a2ef"],["/Swift Promises 初体验/index.html","799537c20734be61604f86bf29718e58"],["/Swift Promises 探究/index.html","234253f3390568d03e4ad1a6cba139b8"],["/Swift UICollectionView使用指南/index.html","5587b65eaa41ab3193151ef4f5f4a9eb"],["/Swift URLSession && Combine framework/index.html","37e89fb81bb207524906151ccecff418"],["/Swift 唯一识别的视图/index.html","ab9b4cce90cde2279b9c7703afe74d89"],["/Swift 如何学习现代UIKit？/index.html","c9582b6b974596f5bc7e8e986a4e1fad"],["/Swift 用 compactMap 替换 flatMap/index.html","326f972da0447cbd4bf13289cc97972a"],["/Swift 选择和播放视频/index.html","7e236fe852b84974259edf3154a9c337"],["/Swift中UIColor最佳实践/index.html","2a698ca6d4c33bed6c6c8eb658d5f5ce"],["/Swift中快速简单的工厂设计模式/index.html","f69e51438cae9d24d9c94075a5369a6b"],["/Swift中构造函数与静态工厂方法的比较/index.html","b1cb045a8b8b23a30921f6d1bb84888d"],["/Swift中的UITableView教程/index.html","eb464d710c6bd548d8debdff41e0e037"],["/Swift中的懒加载模式/index.html","0c4e03607ee26a6ee5be79cea5e18992"],["/Swift中的模块和挂钩/index.html","28b97aad70b398ae0dadd42be3d57d62"],["/Swift使用布局锚点添加约束/index.html","136b8672bd5b0af51a304032771a6abd"],["/Swift依赖注入设计模式/index.html","8dfb1d16585247e8388a28759b9a73b8"],["/Swift关于Dependency Injection (DI)/index.html","67db7857173c643e70bcd9d39cc58fd3"],["/Swift初始化模式/index.html","5b73839712adad766d478a146fa37d50"],["/Swift单例模式/index.html","46575286ee4188a158ffc9bfa7998208"],["/Swift原型设计模式/index.html","eb247b97be8c01a8789fe25bad8794d3"],["/Swift命令设计模式/index.html","e518ece47d5043fb1801e47f98584c66"],["/Swift外观设计模式/index.html","c5d71365d7bab0c257cd0fb744a2bd8a"],["/Swift委托设计模式/index.html","f04c048ab16690bab1ed065fdc2de5e6"],["/Swift对象池设计模式/index.html","0e48c2a02713a13ae048939aaf3db913"],["/Swift工厂方法设计模式/index.html","b7c1c591bbfa6d3fa62d5adcec472992"],["/Swift带闭包的懒惰初始化/index.html","106f4921b2c54fca864b870feb55889c"],["/Swift抽象工厂设计模式/index.html","461bd6e6d7aaf3316393bd586ada75a4"],["/Swift掌握iOS自动布局锚点/index.html","94d1ccadfe3be84f7d115d305793ae46"],["/Swift支持旋转的自适应单元格/index.html","1a6c43b45f526354aa3d0d927aa45dd4"],["/Swift枚举值/index.html","672f3c0cdd64dc10d8a420093568597e"],["/Swift生成器模式/index.html","e9cae9dcafc3726629dda770556b0e8d"],["/Swift结合Xib文件自定义UIView/index.html","f0438faaf19d38d841684335d44a7260"],["/Swift编写的20个iOS库(一)/index.html","02653c736bd532be99f5ad42e81ec42f"],["/Swift迭代器设计模式/index.html","6d8e95da1e55cb5f807c21f2c1755a26"],["/Swift适配器设计模式/index.html","6facf29a5a6b7b9930426c0fbb85cb1b"],["/Swift静态工厂设计模式/index.html","9feb7ef4f246b42f78ec88338921589a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","a4f93e2b92ff58fcd3401eae42a0f73b"],["/UICollectionView data source and delegates/index.html","31d6e802064609e5ad9f0fbb66ae5d78"],["/UIKit初始化模式/index.html","7ba16773c3f52e2f769ad1d629ef1de9"],["/Ubuntu18.04替换国内源/index.html","a9b1a823a6f0ca17525e61f3194be210"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","91f09446aff8f6195ffd7aaab67ef29b"],["/Vapor系列 (一) :  Vapor 初探/index.html","f7c89cc0e3f7034579295c82af84697c"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","988576bbbff0bbdf6b659cdd1edff563"],["/Vapor系列 (二) :  Hello Vapor！/index.html","bd920fd19ef19ae22b7d3311675040c2"],["/Vapor系列 (五) :  使用session进行authentication/index.html","cff9cf1f9360e41afe1c065a1cb88060"],["/Vapor系列 (四) :  创建博客数据库/index.html","d2730f4b42fa2b3f5978a5dddbf6adab"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b407155db207a884ee15bc73a44328e4"],["/Xcode扩展/index.html","aa1f364c965ef2d5c4828a2f8a60d1a5"],["/about/index.html","fa02ee5db27166d52b12a50bb9a84d4a"],["/appleOS的Networking示例/index.html","b26d8b4de1463d76b580b08d0dc3571f"],["/archives/2020/03/index.html","986d9e1aafc7fc24eb0705c2156dfa89"],["/archives/2020/04/index.html","6cc02fb5b1ee3dab6ce8c19efe1f2219"],["/archives/2020/04/page/2/index.html","ccad8cd505ecbd2db98f30adbc98d3c6"],["/archives/2020/04/page/3/index.html","2ed0edd213d4ee6317ea8d0f340ad52b"],["/archives/2020/04/page/4/index.html","2b2261c700a07033456c83c9a3a55368"],["/archives/2020/04/page/5/index.html","ccf3d5013ca3399dafeb617f652550f8"],["/archives/2020/04/page/6/index.html","5df6343de163aeb95b5465316814e9ac"],["/archives/2020/04/page/7/index.html","d884f2015472af0c9ed6e2c36da97430"],["/archives/2020/04/page/8/index.html","877c6acc7d6bf43b78b5a278ae75d394"],["/archives/2020/05/index.html","48d2821ccc718e5c0c38f03697b8961b"],["/archives/2020/05/page/2/index.html","69eed635400c53f41c9b573b6ab8c98e"],["/archives/2020/05/page/3/index.html","b6fc95b7a7293399b25c89fb500f92b7"],["/archives/2020/05/page/4/index.html","68d991b9c85b2d9faaf2e1427099d222"],["/archives/2020/05/page/5/index.html","31548465191697a238e0d44e1dad5e18"],["/archives/2020/06/index.html","dd877662ef31e6eb7cda527072c1aa5e"],["/archives/2020/06/page/2/index.html","686c16364f341265fa84224e4aa94705"],["/archives/2020/index.html","6020a995910d62bad81bd927fd2d38fe"],["/archives/2020/page/10/index.html","ba11e6ef67af2806d95a0424f6e34ebb"],["/archives/2020/page/11/index.html","030c66e62d2e995a0f712c74d19f43cc"],["/archives/2020/page/12/index.html","639ec135aeb83b8f42e27f1bbcaac694"],["/archives/2020/page/13/index.html","948ef69a1e1ccd32380de78b85063391"],["/archives/2020/page/14/index.html","b75f623e8f64250c58e0ee048f533171"],["/archives/2020/page/2/index.html","b1e4cede6dc6e8626970603d83277149"],["/archives/2020/page/3/index.html","2d2b3ee64bc3fd89bb9c52e186dd8e61"],["/archives/2020/page/4/index.html","3078deb37b9975af199a81a379551136"],["/archives/2020/page/5/index.html","70f09cfd8c1947fc65daf7210ec180e3"],["/archives/2020/page/6/index.html","760c6ed19e14fbfb84f6046e593cea08"],["/archives/2020/page/7/index.html","e11900f74a5aa25fad9ed76776db2cff"],["/archives/2020/page/8/index.html","7d838a3c5e56a101ac9c13449ae8b4e3"],["/archives/2020/page/9/index.html","2dac87cc38d16d39c3b789e9de3dfdd2"],["/archives/index.html","f2df7eb68ac8c4661c3b7e1cb299a741"],["/archives/page/10/index.html","cebd3c9a6f00935f1f7a2c363a8b2871"],["/archives/page/11/index.html","bc6bc00e34bcc93d4a3b811d22747f91"],["/archives/page/12/index.html","1fe5fbb2a6bfa40cf143562340758476"],["/archives/page/13/index.html","d0f501e88d1468a2b5e6389e4b41830a"],["/archives/page/14/index.html","0eb20f7185e399c492fb01d1a1cee903"],["/archives/page/2/index.html","ce3b5337695195e004a8731378e1ea0b"],["/archives/page/3/index.html","7ec635e53a6da2d0d7819d40ee5406dc"],["/archives/page/4/index.html","f20eac36c94519a859b09d85c6c79b43"],["/archives/page/5/index.html","019a86411c6ae0c446fbe46350915570"],["/archives/page/6/index.html","2efcc8762886564f7f504df1f2fef3c8"],["/archives/page/7/index.html","43bd1cb77820996ee8b353453baf9cb0"],["/archives/page/8/index.html","b103ba0ade0ecba7a40360d39db1f6ef"],["/archives/page/9/index.html","20412abea52e0f428f3c2fbb6eeaf05d"],["/categories/Advanced-Swift/index.html","006e1c71ea877edba36538bf7c43ca12"],["/categories/Advanced-Swift/page/2/index.html","a7426bba0df82420278d709beba119bd"],["/categories/App-Architecture/index.html","35cab5b4780f8fd6e501cf4df72b29a6"],["/categories/Codable-protocol/index.html","9b13d9d99271488fe220fad3167f28e3"],["/categories/Combine-framework/index.html","49f138f885d7eb4fe685712bd8967a04"],["/categories/Combine/index.html","3e5690c5bf8cb12b570f4cf4ff9b6680"],["/categories/Grand-Central-Dispatch/index.html","852519b088216279a2ecd9baacb8418a"],["/categories/Hexo/index.html","2433425a6a8203ae5a23722a7c778382"],["/categories/Promises/index.html","21ff0b4347146599f4fe7c6a5ae9d21b"],["/categories/Result-Type/index.html","d74c402d801f8e284bc4de5a7b66f2f3"],["/categories/Server/index.html","e7eb82c62ebe2f86ac296a7c94c05902"],["/categories/Swift-Apprentice/index.html","a46effea73d5cbf484330d7c211a2a8d"],["/categories/Swift-Apprentice/page/2/index.html","18fc16472962b5d25caa798d72c7b039"],["/categories/Swift-Apprentice/page/3/index.html","fd17b902b3a41bcfb684fbed2a4bfc50"],["/categories/Swift/index.html","38b1460e709eae3cf9af4924c673e676"],["/categories/Swift/page/10/index.html","0dfe74ff14cd705bf7dd664831307f2a"],["/categories/Swift/page/11/index.html","dd8e3d41be798a37ac2ed4759e6e315e"],["/categories/Swift/page/12/index.html","b5a3f7bfff3a1bf85b3e71c8c2f23909"],["/categories/Swift/page/13/index.html","93d0e5f0c3a6a8da96773f90948e2a8c"],["/categories/Swift/page/2/index.html","1d5764716147c3aee2c138209a36019f"],["/categories/Swift/page/3/index.html","aa35c400ad047d907c52c64fac771454"],["/categories/Swift/page/4/index.html","b34d64e937e1ec4f1e591594cecfc383"],["/categories/Swift/page/5/index.html","0a155d02f66be4a21e49763ee3991816"],["/categories/Swift/page/6/index.html","6f634b23cdef335ea3c63c8a5c421758"],["/categories/Swift/page/7/index.html","8eded8d0729277d7473241b4dacf450d"],["/categories/Swift/page/8/index.html","a88cbd9cfd14c5d9c268edabbe227f3f"],["/categories/Swift/page/9/index.html","460a5149a2bedf8a06107d62ec2430bd"],["/categories/Swift5-2/index.html","0c772b75e5d5db42d3978c8d21a26273"],["/categories/SwiftUI/index.html","de1ecee26e0efa492e61653f175bf0e8"],["/categories/UICollectionView/index.html","dc6a881d82f053d7d1da869bc8aacb74"],["/categories/UIImagePickerController/index.html","7ccaacf0da660a368257c6bb4dbca271"],["/categories/UIKit/index.html","61100bf174bacb4e22e70c1ada4deed0"],["/categories/UIKit/page/2/index.html","6085cc1733899973e284f8b6f8349eb4"],["/categories/UIKit/page/3/index.html","bf0fe0520e432e469bf8387215e3fce9"],["/categories/UIKit/page/4/index.html","007d58fb27dfb61f22bf8c58d62cb1f5"],["/categories/UIKit/page/5/index.html","b966dbc3d479e6bc445e0755eb5dfd93"],["/categories/UITableView/index.html","d2c79dc68f1a31005c9207e777283572"],["/categories/Ubuntu18-04/index.html","aa85016cf631e639952c641c2cc7d346"],["/categories/Ubuntu软件源/index.html","78885c43b86ef511c9d91c8f4fbccea6"],["/categories/Uniquely-identifying-views/index.html","99aa7e25a5660717e5cdd3af8c3723bc"],["/categories/VIPER/index.html","dab04e33ab897ce1d359d677e4946cd6"],["/categories/Vapor-4-0/index.html","e98a0b0518b2023df3d21b1d256f46c8"],["/categories/Vapor4-0/index.html","9aa6cb80354646d160dee92406f45081"],["/categories/Xcode/index.html","09efe6a730b08040bea3cd83946c21fe"],["/categories/appleOS-Networking/index.html","9817ef8e5519884ef94a967498981834"],["/categories/enum/index.html","99b7e5fd1000ef5c1aa04aaffc713745"],["/categories/iCloud/index.html","098473f3167335b97ff582179b5580a9"],["/categories/iOS/index.html","bb0c04dd006a6f154065155adfbd2b2d"],["/categories/iOS/page/10/index.html","3c9a8a605a22f5903b6efaf7afee5425"],["/categories/iOS/page/11/index.html","fbb5b9394cc8a7ebd12c76c7fe78c058"],["/categories/iOS/page/12/index.html","64afec7138a45a8961cfdb8bf90261da"],["/categories/iOS/page/13/index.html","08ec621b1be7796fd45043cffeb4d799"],["/categories/iOS/page/2/index.html","7a309fc0cfe6c308957ccccc89991496"],["/categories/iOS/page/3/index.html","17cadf74c420dbb847abef9aec220816"],["/categories/iOS/page/4/index.html","1a0a1f52f1e0219eb9953e0f0918293b"],["/categories/iOS/page/5/index.html","d47cfa6d1a700fd10143830534b0cc8e"],["/categories/iOS/page/6/index.html","3e4373ec863a079d9f6ccc0faadd27ad"],["/categories/iOS/page/7/index.html","d1540082d85c1e8a5e953e63544ef3e3"],["/categories/iOS/page/8/index.html","0e0c77585404d71e402dee3022290951"],["/categories/iOS/page/9/index.html","ecaf131b4cc90db22fc50db3e8e9ccaf"],["/categories/iOS面试题/index.html","59852f67b0e594287d75c98eb4ec99e1"],["/categories/index.html","fa81840be831421d9a4c4b6b13e6d1bb"],["/categories/random/index.html","05d7c8cec65277ea526127ae95daa39d"],["/categories/三方类库/index.html","2ccf22f428775bb3239fc9768964f0e3"],["/categories/函数式编程/index.html","d8f2c5b3bab6287a21cc4db5e45901dc"],["/categories/子类化样式/index.html","7083cb37be4308a8fd1472d716534566"],["/categories/架构设计/index.html","000c6800325a4a117a87144585565cc0"],["/categories/用户体验/index.html","684d0567e48eed72c0b93324f44a2d34"],["/categories/用户协议与隐私政策/index.html","4688b728071c6789004fe50b03b4a7d0"],["/categories/设计模式/index.html","92a84287a2a66e3eed40003179a946cb"],["/categories/设计模式/page/2/index.html","ef0c4225f6ae0462f372749bf11a278e"],["/categories/设计模式/page/3/index.html","f896f474121b096598c02d8c45a71fc1"],["/css/main.css","b67f66d9d2ceb2161b912418c82080e5"],["/geckoAppPrivacy/index.html","6986bf57ad1ce07bd9c26faee61f2bfe"],["/hello-world/index.html","9236551a9758fe5e9e919842c98e2420"],["/iOS VIPER架构深入实践/index.html","eaa10fd4c3dd288196a931bc9152f546"],["/iOS 自定义视图，输入表单和错误提示/index.html","67cbad9cc9c67980a591cecbdd31a742"],["/iOS如何使用iCloud文档？/index.html","9beed114331b277fbc8cbbdd45dd9b83"],["/iOS子类化样式/index.html","e6cd8f16b3c90e656287011f35559417"],["/iOS自动化布局编程/index.html","e37df5d832e240c893289c612755d03a"],["/iOS自定义转场(By Swift)/index.html","b6d1ae68da8edc30828b6fb1b80c3536"],["/iOS项目架构：使用VIPER/index.html","28a5b7a47d78f6bf49fcbb46724d1ba7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a89ad291a238bf2d38187de9acec486f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","3086ce4eec6d373e6325db9755ef0bbf"],["/page/11/index.html","d871c998196fc08e3b4fd26c038c83e7"],["/page/12/index.html","1e07ae90cdfb93bc69b4019062f5a762"],["/page/13/index.html","1eeafac8ca20835f6aa464e98975e93c"],["/page/14/index.html","cde18edbe51f627c4284dd595d37729c"],["/page/2/index.html","2b05752664938795f68e3c21cd211f65"],["/page/3/index.html","eb8ad7f01050578d03dbfd2aa9e6616a"],["/page/4/index.html","ea6aaedbdbde8b6dd573230a9aeeeb0b"],["/page/5/index.html","229374370d36afff970bd76b10d7b4d7"],["/page/6/index.html","0e3bff599676c28a2ae6b3459558c351"],["/page/7/index.html","d0b3d838f7b63683910501196b84b98c"],["/page/8/index.html","1825a19ebc14954bc31ed4b9ea83bf91"],["/page/9/index.html","e54a9856b0f914e7e71d4817e089cde9"],["/schedule/index.html","ad633d2118ad3603eb44bfc5d38c6f27"],["/storyAppPrivacy/index.html","e85369d3480dc2f5711319368d0922fb"],["/sw-register.js","a963c0fa783089b3b9f0fa1b1ea2eb95"],["/tags/Advanced-Classes/index.html","ec2355a69ea39a11818cd30169aab20b"],["/tags/Advanced-Swift/index.html","e2314a8cda05f38699b0fb6db4b38ed4"],["/tags/Advanced-Swift/page/2/index.html","a8f21d8ea405ccb2f5aeb742da23a2a5"],["/tags/App-Architecture/index.html","fa235c31ee4167455f5fb47536a5375b"],["/tags/Arrays-Dictionaries-Sets/index.html","4ce0a988950678daea305198bd6ec116"],["/tags/Authentication/index.html","6ecb4691c12d7b85527a0bd6b6684050"],["/tags/Build-in-Collections/index.html","747eddb79c23d5e5a5f063781d7b6260"],["/tags/Building-Your-Own-Types/index.html","93177b7dc19da2d95b06e46e91c973cc"],["/tags/CMS/index.html","3c2b09bc5bdf4dd5da8c15f00c30100b"],["/tags/Classes/index.html","573f93fe39bd6aefe945b79983e117e3"],["/tags/Codable-protocol/index.html","e5c8b7d36a0341949eef9c005d1e4348"],["/tags/Collection-Iteration-with-Closures/index.html","c9f1d140fa06f1f905f98ca4636ef2bd"],["/tags/Collection-Protocols/index.html","bd27c5940c9f368ccd75c4dd31f7a540"],["/tags/Collection-Types/index.html","c61ca85479b31aaf5e3e850eb37743a8"],["/tags/Collection/index.html","81a199e764fb7059800852b989858dac"],["/tags/Collections/index.html","eedf81720b5170b87ef055e636c8e0b4"],["/tags/Combine-framework/index.html","19d99e421fef5e46d5d258a5470ac4c4"],["/tags/Combine/index.html","3ab542cf2657a61708048c5eb834ec13"],["/tags/Dependency-Injection/index.html","726b40be661e54b3f80938f6eb7b121e"],["/tags/Encoding-Decoding-Types/index.html","01a44dbdbfba49da0a3038f17c32c215"],["/tags/Encoding-and-Decoding/index.html","bbc0d45a9ed74f9e93493f3747f44906"],["/tags/Enumerations/index.html","363a0cdacf4b080bb25d8805ed138672"],["/tags/Enums/index.html","2089abbe1075dd0001d8fbe9723c3955"],["/tags/Error-Handling/index.html","3c838deb36551131ea937c2c9d02f5ea"],["/tags/Functions/index.html","2385d70178e49514637d3d04fbf1d354"],["/tags/Generics/index.html","c57dd4ba405d51a325c001aad2ef3ec9"],["/tags/Grand-Central-Dispatch/index.html","c043e849f1bf0e4505d938195c35acbf"],["/tags/Hello-Vapor/index.html","5f2507363a6c046c1781e7e5a7cf4c75"],["/tags/Interoperability/index.html","915479ae8d7c56f767ef7e28dc85eb19"],["/tags/Introduction/index.html","4966c6ac1dea60c02ef652e75ee47b70"],["/tags/Leaf/index.html","39ace037fce1061efc529edf37f6c033"],["/tags/Methods/index.html","9de33212be59f93b903484bd0653df4c"],["/tags/Modules-And-Hooks/index.html","b00ff3d30937d969fba4cf44edf5b6dc"],["/tags/Optionals/index.html","31b5cc4c2f5f11272d8d98a1454b5fb4"],["/tags/Promises/index.html","416e5abd40028ab403ceefea85252677"],["/tags/Properties/index.html","a6d5910fc3dde560d2cc9a99c0a49a23"],["/tags/Protocols/index.html","ac46bee7eddaeef226383d9ba2bd0b08"],["/tags/Result-Type/index.html","6f7439d73c1b7a811e709f1489e91eb9"],["/tags/Server/index.html","80533e8cb3ebf38164d1600a373eb4e4"],["/tags/Session/index.html","061263d369a18ba450574293c6ae1841"],["/tags/Strings/index.html","2b79ce945158fe0fcc9209b980051476"],["/tags/Structs-and-Classes/index.html","e3eb2318672f7f2564791e6ade19084b"],["/tags/Structures/index.html","a5286dfbfa5df2b21f48c53c5ca26a44"],["/tags/Swift-5-0/index.html","ed80b62fbb8b5e1f56a36594de26de38"],["/tags/Swift-5-0/page/2/index.html","e809034b49f4ac56addcde219ff105ca"],["/tags/Swift-5-0/page/3/index.html","317f1203088c084a32bd3d0a98960d8f"],["/tags/Swift-5-0/page/4/index.html","550a023d7a5371dba871719d1e1599fe"],["/tags/Swift-5-0/page/5/index.html","fa86c25ff33027c67dea6851d536187e"],["/tags/Swift-Apprentice/index.html","b6fd7d96201ed0ddb91678084a071022"],["/tags/Swift-Apprentice/page/2/index.html","5bbb02ef1ad04b6bbec9cce253ab482b"],["/tags/Swift-Apprentice/page/3/index.html","4a31bcdfb48a827f46da24cba6d8800e"],["/tags/Swift-Package-Manager/index.html","65fd46df7efbb34cd455c07e84bb3175"],["/tags/Swift/index.html","e03141769e5c2f68fe7e3bca3fb79a7b"],["/tags/Swift/page/10/index.html","21bf7aa1dc083c2b15db152edf49e1c0"],["/tags/Swift/page/11/index.html","a6031635238dcc76cc8cdfcd151f03b1"],["/tags/Swift/page/12/index.html","726769a90e9f6b266ec3abdf3b5c971a"],["/tags/Swift/page/13/index.html","125fe09ca95ca0dc742441051f2a5cb2"],["/tags/Swift/page/2/index.html","5567a47aefa7284d9b5f2553666f2623"],["/tags/Swift/page/3/index.html","f9344bdc41de01510d1fef37eda0b502"],["/tags/Swift/page/4/index.html","892db3f1a6121d2f1b364ce17c424e02"],["/tags/Swift/page/5/index.html","00c24b7fbc1667940e555bee8edc0c56"],["/tags/Swift/page/6/index.html","b40b257cda33b637b916ef4c8d6f3f7a"],["/tags/Swift/page/7/index.html","f5a24a020f4aae835992e12e3c0692de"],["/tags/Swift/page/8/index.html","1ac31d1a378abfd5f90199dfe91e7b25"],["/tags/Swift/page/9/index.html","9340b73defadc7bb940e3fc821910335"],["/tags/SwiftUI/index.html","38987622eed74139879ad8ebc7fc49d4"],["/tags/UICollectionView/index.html","27a558b7bc5377cc0a08b8e2dffe3a65"],["/tags/UIColor/index.html","015cda0b52d110a05e16600f972f3260"],["/tags/UIImagePickerController/index.html","6cebb0869f780ee0dac8041ea3c10dfd"],["/tags/UIKit/index.html","7a6393f5913013e4019287ceab2362a0"],["/tags/UIKit/page/2/index.html","e24e4f9fcf23274f851d6986d660a658"],["/tags/UIKit/page/3/index.html","646fbbebcd7573f8d4e09398af5e62b9"],["/tags/UIKit/page/4/index.html","1bba04eb62d548314b900ee81158f973"],["/tags/UIKit/page/5/index.html","ef8e66e53c86841f483703eff47d1c09"],["/tags/UITableView/index.html","0e49cc3a3535a17dc11b63974e2cdf48"],["/tags/Ubuntu/index.html","556cee13853b03a793d3520941ad6bb8"],["/tags/Uniquely-identifying-views/index.html","2a85521bc56ff0e5a0615feb5f7a86c6"],["/tags/VIPER/index.html","74e5a383357e7a05a3dc6c02b6c28537"],["/tags/VMware/index.html","e922d804dbb5f2a758f7cbc7855b733a"],["/tags/Vapor-4-0/index.html","c00139fef7f011653662123647be7324"],["/tags/Vapor-初探/index.html","7cc9980ad8c97e7076cb889e95815377"],["/tags/Xcode/index.html","0450a6294a333c71cf94ed755f56342e"],["/tags/appleOS-Networking/index.html","08dee396802b2e9c6fa31ce297cc001c"],["/tags/enum/index.html","435ecc41ee4018467cd8ae9c0f1e36ef"],["/tags/iCloud/index.html","6502de89f094c5fb5eada94784822e75"],["/tags/iOS/index.html","a8409843defd9dfa5d32fb7ded3ca82f"],["/tags/iOS/page/10/index.html","35d534ea70f1d39306968e65215ff9d8"],["/tags/iOS/page/11/index.html","0f95e41c22e6def43b342b597dd21123"],["/tags/iOS/page/12/index.html","cde3ef54bcf56a0e783149f3594445f6"],["/tags/iOS/page/13/index.html","903ccc23b400965da95a80a0da7833d9"],["/tags/iOS/page/2/index.html","a95215e4be4904510cf0df777a80fab7"],["/tags/iOS/page/3/index.html","b76ff165bb900dcb33ec7719d19671d2"],["/tags/iOS/page/4/index.html","0ceec4949b30724cdd2c4a2af0d0856f"],["/tags/iOS/page/5/index.html","1aa0c09f017b14c589a9c23d9eff2181"],["/tags/iOS/page/6/index.html","7640baafdfb91d5b558fb7a3608edd97"],["/tags/iOS/page/7/index.html","b47f1d3075d66438f1e1889763b4d9de"],["/tags/iOS/page/8/index.html","e56667ac6816893a6311c1e936d06429"],["/tags/iOS/page/9/index.html","b14c8c5fd019952c9cba62a2134a8a18"],["/tags/iOS面试题/index.html","485c8c2d3b08085980fbef9db59f31d4"],["/tags/index.html","2dbf6fa928dc15fb1b78b293c656ff63"],["/tags/non-optional/index.html","67d5239cd0a18abe4f33734ffcd5469b"],["/tags/random/index.html","ca5b96f1c5c8ffb0f1c77bdaf4226ed7"],["/tags/transition/index.html","21769189413eaa89375a69d04cb48078"],["/tags/三方类库/index.html","69cd5b9734a3227f80b2973db8ec9586"],["/tags/依赖注入设计模式/index.html","efaa0ddabd460260a12e4385a0574529"],["/tags/值类型和值语义/index.html","4a2807f68f16a91898896fe77e7dad47"],["/tags/内存管理/index.html","01841dccb9ae23011e8149e50cb2d4e5"],["/tags/函数式编程/index.html","31374cda44d9af8815822b38b114a67f"],["/tags/创建博客数据库/index.html","9be97f5788b2d94fe4352376a0412708"],["/tags/初始化模式/index.html","35a8cf04a810774b90e83bc64966bc15"],["/tags/单例模式/index.html","f979ae945436d79b26beaef7e7ac480e"],["/tags/原型设计模式/index.html","e07517942a68eb4f1d55898e91f5b5a9"],["/tags/命令设计模式/index.html","c2aab0ef1b1e71f63acbac52e0f63d25"],["/tags/基本控制流/index.html","566725e6ddcce2789b4057215befc120"],["/tags/外观设计模式/index.html","f1011bce04c9ebd801a922138e38e11d"],["/tags/委托设计模式/index.html","acd7adeee5c1cfa58485088bc520695f"],["/tags/子类化样式/index.html","636245de62d87a63d392652fc0acbb1c"],["/tags/对象池设计模式/index.html","0adb96b1d7356bba66468a96d45b3f72"],["/tags/工厂方法设计模式/index.html","fe73d5e78c867d71f4b96498abe68199"],["/tags/工厂模式/index.html","4bbadd96418e3a83869fbcef5f37a1fc"],["/tags/工厂设计模式/index.html","e843f8d0dfab40a49beb951bdc339eb2"],["/tags/懒加载模式/index.html","ba7c69daee781e33f695840f980ea79f"],["/tags/抽象工厂设计模式/index.html","19686f5867a735ad4f1598e6572c2c9e"],["/tags/构造函数/index.html","b1ab133be7b5aad6c15afeb980fa30b5"],["/tags/架构设计/index.html","2674334d69fb23026454df4660871215"],["/tags/模式匹配/index.html","bc2ef008d74ad4064dc305f3281c98ed"],["/tags/生成器模式/index.html","ff72f4881ee6824df90b79b287fc227e"],["/tags/用户体验/index.html","e6bb8662ba1f62e5be245715f7022905"],["/tags/用户协议与隐私政策/index.html","6fa92e14622609da310e4f7119ef4bea"],["/tags/类型与操作/index.html","a77912ae8b507941e08c81ff20a7ed32"],["/tags/自动化布局/index.html","ad33009140314f2300b33ebe5e4504f2"],["/tags/自定义UIView/index.html","30a92a22b12ad56f2e343158a429febb"],["/tags/自定义转场/index.html","74261c2894c39f8ab6c6baff9dc67002"],["/tags/自适应布局/index.html","9ca2f68e9a8200d4d4fc0c9063cd86f2"],["/tags/表达式、变量和常量/index.html","328a814145d9afb1f238e8a27717e076"],["/tags/设计模式/index.html","8df080a7f77a49a2d1fe9f94870c30b9"],["/tags/设计模式/page/2/index.html","87e6f1678d1e82f9c446bc8802f6489f"],["/tags/设计模式/page/3/index.html","cb3c6218a2bdbcbfc5b0820f764a2f3e"],["/tags/访问控制和代码组织/index.html","a6fb7deaa82834b9e818859577b280b0"],["/tags/运算符，下标和键路径/index.html","bc79e2923a98c426f7f2ee4db1b7f604"],["/tags/迭代器设计模式/index.html","2402087ba329090575dc207fed759aaf"],["/tags/适配器设计模式/index.html","39b1b2b08a4302cf315ec5bc469722a4"],["/tags/错误处理/index.html","60da6a9ad4959852c1a9ea7d48236558"],["/tags/静态工厂方法/index.html","3f5889a5af8b690f523a7c3b793d8d86"],["/tags/面向协议编程-OOP/index.html","ac43372ecb457f2d08ae8f489d063cc0"],["/tags/高级主题/index.html","88a66f1bee6f34bd7d75f9dd863c9bb5"],["/tags/高级协议和泛型/index.html","b2807a9b3706e58c0d31162e928a59ce"],["/tags/高级控制流/index.html","fda0acf537fe3358b335cef65bc22e5e"],["/zhizhiAppPrivacy/index.html","89f21efa472d667407faf0ec57430f55"],["/为iOS应用构建输入表单/index.html","a9c2c36956d460e7e8be21bf9e99d87a"],["/产品开发的幕后花絮/index.html","3b3c68242b677a13650fde9f0378a1a0"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","52b1127f581b4d67cddf80e322ef094e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","413aa26485948aba068f72c424634f7e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f3a9b653f9be0a36bbd31cddc4c45eee"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","fab05bea9141f9368118be5ede6f548f"],["/唤唤家政用户协议与隐私政策/index.html","29267a6d4ede46204299a8eab35ecf43"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","3b3507488e5ff5f0c7428e60fb5eb8f4"],["/在Swift中创建自定义集合/index.html","273c9b4ae141532fb0dc20eb4cbd49de"],["/在Swift中处理非可选选项/index.html","9cb6efce5f7129a8a750eaa3a16358ca"],["/在Swift中生成随机数/index.html","e9c06694abae7753857c8d77e00c46a9"],["/在Swift中重构单例模式用法/index.html","b89e3815e9e305114291f37bec278cf5"],["/壁虎兼职用户协议与隐私政策/index.html","6c02a6ccba78966e6f11e29fbd099424"],["/天天兼职用户协议与隐私政策/index.html","9c89fdfd8ba9308fe9d4d31130104855"],["/如何为VIPER编写服务？/index.html","8bc81e05f99c5fcb144cac8cd7e6333d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","64ca7540b73d6ed62e2256d1669f14d4"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","4b9f676ff8540ddcdd8dde13dbee649c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b012fe52b84a40d8250906af817e0a15"],["/如何使用VIPER构建SwiftUI Apps？/index.html","abb57d80fa6e5c649ac39dbc7d862d1d"],["/掌握VIPER架构/index.html","6985fb83c5c02a8053d0429312c99a7c"],["/揭秘 WordPress Hook 系统/index.html","26f0691e5a0feb4b62ac8115115029f5"],["/比较工厂设计模式/index.html","1a7b8298365820523b484f22b132c1ae"],["/深入了解Swift中的Grand Central Dispatch/index.html","d08c12f45b2d77f703add1262c6b743a"],["/深入研究Swift框架/index.html","1353f57c259f810e6e7273e42da901d2"],["/莎莎婚庆用户协议与隐私政策/index.html","59f1f6b54d42f88b83a7b74b3fe9f3af"],["/蝴蝶兼职用户协议与隐私政策/index.html","cd09147d4912843d160c4ee029bf8184"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2e23fcac3f42583b2f9c8bec3170413b"],["/选择Swift而不是Objective-C的5个理由/index.html","f5f999ba0c02efecf01db9ed7b040a27"]];
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
