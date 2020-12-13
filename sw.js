/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","57b27c6707f769e64c69968f85a72299"],["/2020年iOS面试题总结(三)/index.html","cdd2e286cc7203686431bc221d04a663"],["/2020年iOS面试题总结(二)/index.html","5c6368ac5ab9f2a2f449495b441d1345"],["/Advanced Swift系列(一): Swift 简介/index.html","3fe67f5c73d58fa73484c89e869d3b26"],["/Advanced Swift系列(七): Strings/index.html","33453a0f5a1f89cca258c8187eb1af54"],["/Advanced Swift系列(三):  Optionals/index.html","8823aba0440577f2da39ed8ea9b9ba31"],["/Advanced Swift系列(九): Protocols/index.html","23ed399229e1bfd3ef46cdfd0dfda7d6"],["/Advanced Swift系列(二): Build-in Collections/index.html","8fb3ca4e46a5cefa9857a2ee949c08e2"],["/Advanced Swift系列(五): Structs and Classes/index.html","612cf92a09849db2d57b3670e1e3ba3b"],["/Advanced Swift系列(八): Generics/index.html","5a13b58c57693cb0c6f3aae564da0d2d"],["/Advanced Swift系列(六):  Enums/index.html","d453e38db6c1f9e699b8dd994d78e931"],["/Advanced Swift系列(十): Collection Protocols/index.html","b07c6ab2b2d0e9c6f2735bb239a7bf43"],["/Advanced Swift系列(十一): Error Handling/index.html","1d16171000881b29338980612911e462"],["/Advanced Swift系列(十三): Interoperability/index.html","8bbb2070dcfa282ef60a16fc839b40a8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","103ad788cac93378dabfeb3c4ce1f1ed"],["/Advanced Swift系列(四):  Functions/index.html","a23e233cdd8afd2bf05c22530221ac77"],["/App Architecture系列(一):  简介/index.html","4a8ca8cfcf10cfbc04a913bb47f4f579"],["/Functional Swift 初探/index.html","df439cf5f5e08fae07fec50637fe4a6f"],["/Git 使用小技巧/index.html","9c50133f129c08aa4b93506f1bbbf71d"],["/Go 基本语法初探(一)/index.html","2e13554675c5238916181b02927f4040"],["/NSCODER和SWIFT初始化/index.html","cb17f4736ea6f9127a15689869cf6729"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a93177efec9633052ca3896593c1ba98"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","283935a7bf96c0684a3f44adf48c624b"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","b53a3111901861709359bd68e7a0c5a2"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f46d2bd263db32c113dce3cd1d64850a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","100237f5d91300b80161c35b73ebc3f5"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9eaaeb08246d74abab1bbcf816e12298"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","7e12dcad993fe9caed8f7f38603e536c"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","9018ab9cacff316b51bfb58becb894fc"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","71c800296fd3d64d3f4eff6a5ac8881a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","03877ca23edfef4ea770e4700d839fc0"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","f03a7e0d5aa2d46e16f3aced8808aa9d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a2949e0de8ffd06f30c9a08c5df42d56"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","aa72763772c1ae33b66789158edcf02f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d86356d6b63ea22bb8029c2dcb59a39a"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","5886baf1cd6ccbbe0cc31b306ccba785"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","82af3dbf23eb580b376758674a0ccdb8"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6505a3b2260f1ca65b9ba48ea64dc9ee"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2ddee644144c5bf028d5a364c0d3c173"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","7885d0610be94fa3f5cd597ed2495422"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7d2c509fc1fd0d95fd8553a01b315002"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","60fc675593699bc1c82422adeadba41e"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","b11e659e6ae9ee95b222222d6d5149eb"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","b609f64657fdfbd74c152f44ab7742ed"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","479b5232d27d40ed1b4d08e15cbaa4da"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","2af88b8e36b9c1ae31fe97f2d27f0626"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8463a38636cf5bc4ea298970f5a10dad"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e7e2b809f48b1a1d3d1d4fccc08d53b2"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c9c47bc354cd3be6ce4b4ac415a18db4"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","aad769f9d9002dd1304d3c9983f1680f"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","3c87fbc339a0f7a67fbaf7244caaa557"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","ffd479efdf92a013fc0c02d87f0f0e1d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e5ca5ef30f3133b3296ae1c6590d2b46"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","5e831b983240930ea8981bb32518a8ad"],["/Swift CompactMap vs flatMap：差异说明/index.html","ba3536f695fc110120beccd6549b1c2a"],["/Swift Grand Central Dispatch 深入实践/index.html","eee06add3530ef3b5de1fa451d15a2db"],["/Swift Lazy属性初始化/index.html","670a05c150999c63c0d0ce504e52ef5b"],["/Swift Promises 初体验/index.html","f8c64d43e4f4d72521e7e3fc9a6fb56b"],["/Swift Promises 探究/index.html","893be63c284e0ba5a8c3abc7d166584a"],["/Swift UICollectionView使用指南/index.html","43705035a4cdcad6f59d7c07875ec4f9"],["/Swift URLSession && Combine framework/index.html","e51f7619c4e4182c84f23219fd338a48"],["/Swift 唯一识别的视图/index.html","afb9561374848c0df8abcc082d8cc429"],["/Swift 如何学习现代UIKit？/index.html","ec7f6175ad9eca8a9ee43ca5475897d7"],["/Swift 用 compactMap 替换 flatMap/index.html","8802633ffc0f280d170c8d4f5b5c6b8f"],["/Swift 选择和播放视频/index.html","7695a002e04ff9b80bc4265acef59dd9"],["/Swift中UIColor最佳实践/index.html","b32e2eb2b668a92861a53bc1cb31185c"],["/Swift中快速简单的工厂设计模式/index.html","586d9177087d10cf87ae3b953e527732"],["/Swift中构造函数与静态工厂方法的比较/index.html","3b9ea7ae1c1b4d0b7aa5b6232abec9bd"],["/Swift中的UITableView教程/index.html","c7fe569c24ce1d6e36f731d71beb7f75"],["/Swift中的懒加载模式/index.html","5daf1c44838ccb299a1fb7736a84d963"],["/Swift中的模块和挂钩/index.html","e2ab59a474a215ba7281cf91df603bb5"],["/Swift使用布局锚点添加约束/index.html","9082fe668945115b20b510095668e63d"],["/Swift依赖注入设计模式/index.html","844c4126248a5b97332a1e89ff42b685"],["/Swift关于Dependency Injection (DI)/index.html","99fa18945a2dee1583c6b2fb50f958ee"],["/Swift初始化模式/index.html","ed93b7ef7dfc4447f005b2e6896624a2"],["/Swift单例模式/index.html","5b40d894212d41851f4b97b27d7eea3e"],["/Swift原型设计模式/index.html","85f64f10c512e427814b408d1428bff7"],["/Swift命令设计模式/index.html","612e4b9ff7892692f60ba626cba5c47e"],["/Swift外观设计模式/index.html","0fb23d0699cadb75e427de7748691809"],["/Swift委托设计模式/index.html","31563727b788fd99aa92fadf99c7249d"],["/Swift对象池设计模式/index.html","6ff876b259c9e20a074d19f441b61efc"],["/Swift工厂方法设计模式/index.html","de9cd4997be6349da68a2abffffc3fce"],["/Swift带闭包的懒惰初始化/index.html","468d09e84f32e2d3af001d120490354b"],["/Swift抽象工厂设计模式/index.html","d14dd9fd19c82cba94e9cf38e7e6836a"],["/Swift掌握iOS自动布局锚点/index.html","50d5f85ed95e4246a5ba1978f0ee157b"],["/Swift支持旋转的自适应单元格/index.html","2c03c80094113a4104e29e9cd7bc0655"],["/Swift枚举值/index.html","95ad084efeba6e1ae98f2b592305838f"],["/Swift生成器模式/index.html","45e7c124e76858580d285f415a6a46cb"],["/Swift结合Xib文件自定义UIView/index.html","ff6ccc7d0e615093307ae4649cc0981f"],["/Swift编写的20个iOS库(一)/index.html","d9e7bd2103a3f5b41fec16ac5eacde2c"],["/Swift迭代器设计模式/index.html","53585781dd6f43df4162b7fe694324d0"],["/Swift适配器设计模式/index.html","373b524bdacae234e131c95f619397f8"],["/Swift静态工厂设计模式/index.html","b8beb109652fbf35a16e0f6c2a4dba8b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f561b8e128b8b10467e95954d09ca33c"],["/UICollectionView data source and delegates/index.html","074598a96a47e83aa9371a31574db99b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","f909324cbad38d3a33c94caa5ec22610"],["/UIKit初始化模式/index.html","9971271e2f9d9afd5a5337339b016254"],["/Ubuntu18.04替换国内源/index.html","8924f0099344d5f3bca56d31885ddb11"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7bb58d27faa8457678e9644482943f43"],["/Vapor系列 (一) :  Vapor 初探/index.html","32434a0a6343655e57dd1656aab5d2fd"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","a47bf19ff6f2257850f569d2b2ecde0c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","c4a568f2d4fb85916b4284a21f32a2d4"],["/Vapor系列 (五) :  使用session进行authentication/index.html","6f1b1cd0c2ff5389a52508e14c054386"],["/Vapor系列 (四) :  创建博客数据库/index.html","8cf3de3eb357d14bb7e493b7cd80ec3f"],["/Vapor系列(六): 徒手撸一个CMS/index.html","fc77a6038c99af8ca8b6f2dd412872d3"],["/Xcode扩展/index.html","69ba8140fed53f12d3955f34723065af"],["/about/index.html","0785cc0696965d065fcbd7b0714fa531"],["/appleOS的Networking示例/index.html","79b4d2de525004f2f8c4b19dc4971318"],["/archives/2020/03/index.html","f67b10b6efcd204c2c566898fe50f473"],["/archives/2020/04/index.html","efb5a4baa9fa974c077054100077befc"],["/archives/2020/04/page/2/index.html","6b3879d690d69959072873be39a4bfdd"],["/archives/2020/04/page/3/index.html","24a9f02980b445de843f23c78299535f"],["/archives/2020/04/page/4/index.html","5d6d12e6caf52da719d24e731aa0d8a6"],["/archives/2020/04/page/5/index.html","df359bcb9927197db567f6dfd954f413"],["/archives/2020/04/page/6/index.html","efe115192702d7d6bfea3e9b70a36817"],["/archives/2020/04/page/7/index.html","95d9fb6e242bafa8a1fddb361924ce5e"],["/archives/2020/04/page/8/index.html","8a0b25169e02dfbf612e27bbdb1d344b"],["/archives/2020/05/index.html","a637200ee8a8ed86ff4f9c0c469e3cb8"],["/archives/2020/05/page/2/index.html","da06b5afe09746cbedfb8493c806a26e"],["/archives/2020/05/page/3/index.html","b7625387d8bb23c8d5a82bc083962c31"],["/archives/2020/05/page/4/index.html","c261d54f76f30f62252e04f3ac339736"],["/archives/2020/05/page/5/index.html","0846f47d5a3730af3c5e8570a4b554f7"],["/archives/2020/06/index.html","19299a5bc02e6f4353158b153eb564a1"],["/archives/2020/06/page/2/index.html","1d85cc359097c50d02fec5120909f500"],["/archives/2020/08/index.html","1ced6e48e0a2c8f8b018e547a21208d5"],["/archives/2020/09/index.html","53eb7ec74b67b2cb99d656be7d6807e7"],["/archives/2020/10/index.html","f435b71fdf2f78067e2623dcbc06a9d9"],["/archives/2020/11/index.html","2c900ca2c2e5851e72b6a6bde5e16a50"],["/archives/2020/index.html","dcba6bcd1a89c8d0964422f2d2161135"],["/archives/2020/page/10/index.html","1d9652589df6e07449558721044b502b"],["/archives/2020/page/11/index.html","5f8aa086d466e21cee6c706397f36d41"],["/archives/2020/page/12/index.html","9d53932c371c27e66d53b8433ddccd3d"],["/archives/2020/page/13/index.html","46efd5aa04e950ee904a0beeb01e12dd"],["/archives/2020/page/14/index.html","cd7384559c4fcd415df057913d0a4b95"],["/archives/2020/page/15/index.html","b76a6bba9c1da747b4a7d5cbadac6c8d"],["/archives/2020/page/2/index.html","987fb5413e4323f15202c897c2cfa482"],["/archives/2020/page/3/index.html","9e7d31bfc19f772ed63b932fdfff32ca"],["/archives/2020/page/4/index.html","0f07bc0a2a5f16c4d131a9bf286c2695"],["/archives/2020/page/5/index.html","4b928f61beca6996e292bf0fba5f77bc"],["/archives/2020/page/6/index.html","07d93c382d5c21e8c0fef4b6769bf5ed"],["/archives/2020/page/7/index.html","59410f8c89934700dd3d2dcf8c3cb894"],["/archives/2020/page/8/index.html","7441b16d88166cca0b8f8daf33eb68ba"],["/archives/2020/page/9/index.html","3703ae34b57274ab4f24d856dee3003b"],["/archives/index.html","c0daeac8a5c54979d89f8dff4897708c"],["/archives/page/10/index.html","6893047310a0c1e247da967854dfc1ce"],["/archives/page/11/index.html","33530a0926a84427ed7d6c6cf2c6123d"],["/archives/page/12/index.html","83c689a864ce427505d62fb104c9a8bb"],["/archives/page/13/index.html","f870a96700223ef0e10f7f45540031c5"],["/archives/page/14/index.html","b6c69385e066354d0e1814455469720a"],["/archives/page/15/index.html","399ba48b002895d3dc3e59399301a5f9"],["/archives/page/2/index.html","46ab3f80d84345e8c17482dd0fcb5e15"],["/archives/page/3/index.html","cdd119ba7d0c07b55a26a921898f3287"],["/archives/page/4/index.html","6b1dc35667215c870dfa5fc7be222c82"],["/archives/page/5/index.html","dc1d67f6867c661278a401154d22b983"],["/archives/page/6/index.html","68963a7d16db95613ac170685e1cc675"],["/archives/page/7/index.html","ec22ff98fe822d79bfbe3ef42b995de6"],["/archives/page/8/index.html","24eaea878c82aa8f40f8a3b35d443cc2"],["/archives/page/9/index.html","1e4ee4d2ec8ee4b7159462b5267d9db7"],["/bugly 上传dYSM文件小记/index.html","cded7bd222839eb2646c6b46e7a11dde"],["/categories/Advanced-Swift/index.html","1f73516d07bf5e3714ea0004b6462d86"],["/categories/Advanced-Swift/page/2/index.html","c5475a8179d950c28ee0acd8f8f42aaa"],["/categories/App-Architecture/index.html","cfbbf8d7b06ed9bacbfab33e73dd8856"],["/categories/Codable-protocol/index.html","344187d2390b573983e608bd152be028"],["/categories/Combine-framework/index.html","884c014a5c8f4a313486e878e0c9bfe7"],["/categories/Combine/index.html","433282895fa910a4ae3dea8257c21bdc"],["/categories/Go/index.html","0b4b7685950dbd60dfafa1fda31da828"],["/categories/Grand-Central-Dispatch/index.html","726e1e98b86a185411bd9a02d572af34"],["/categories/Hexo/index.html","0747aa7cc05b908311c95b93da152290"],["/categories/Promises/index.html","12a575566c0166f705a3c92d7f6ede80"],["/categories/Result-Type/index.html","00d2511b6615a4f04c62a3cb64cc1d0e"],["/categories/RxSwift/index.html","f17431a0194a5c0198c203aeacd06575"],["/categories/Server/index.html","24366bf091653ae1edd052e410f3b2ac"],["/categories/Swift-Apprentice/index.html","fc353717826d172776769fbc3800d647"],["/categories/Swift-Apprentice/page/2/index.html","df6302f0d005235a9eb98b9470b16102"],["/categories/Swift-Apprentice/page/3/index.html","470ab3e69c67572d168a310dbe8a0c70"],["/categories/Swift/index.html","728dd63e9f1663c4bf5ebd89d46017c7"],["/categories/Swift/page/10/index.html","eb1299d7c6691ae9bfb41909ba140b5e"],["/categories/Swift/page/11/index.html","d9022df53797e2db98b2cacd5ca5f5bf"],["/categories/Swift/page/12/index.html","69ffa8c869a62e4bff872ed640b1d5d4"],["/categories/Swift/page/13/index.html","c38be3005b4cb6c06ee4452507205487"],["/categories/Swift/page/2/index.html","28a9a6d8c24154e4e2225b6d61e9ba3e"],["/categories/Swift/page/3/index.html","a343816ee242559d6272b28af1f4684f"],["/categories/Swift/page/4/index.html","4ba299023acf9f228ce84febfa08fbac"],["/categories/Swift/page/5/index.html","e60145ff272c6f1d29aab0f7aaef4d73"],["/categories/Swift/page/6/index.html","0df30d3db30eb72c440576745abeccde"],["/categories/Swift/page/7/index.html","0cead390a0a6b30ff50e36019c3663c3"],["/categories/Swift/page/8/index.html","4f8a44ec66d6c0a20448ff9a4b8b99e4"],["/categories/Swift/page/9/index.html","b1f635d0d804d885e03a792126f38ecc"],["/categories/Swift5-2/index.html","fa33e9bab31c8c048024f1e42b8a50c6"],["/categories/SwiftLint/index.html","06eb4f7b36406c677f39e995d36eec28"],["/categories/SwiftUI/index.html","90800dcc5f7d09fd1e88baf51034af35"],["/categories/UICollectionView/index.html","0bf6349ef7a71b351299a7271d57371b"],["/categories/UIImagePickerController/index.html","860955112bb290c18e3146acddcc0c29"],["/categories/UIKit/index.html","f0e2dbaa4900e38d2a4321a27bd69454"],["/categories/UIKit/page/2/index.html","b564030da5b24a14756dfdab2c3b0216"],["/categories/UIKit/page/3/index.html","06d83e684f0c070e3b168e8ba35e1bc0"],["/categories/UIKit/page/4/index.html","2735b8465ee1eb5d445bf88a5ab80799"],["/categories/UIKit/page/5/index.html","335dcb83b2d312d0b99bb3b7bb87e8b9"],["/categories/UITableView/index.html","c532f6d68b398d5b4c6f623d16ab3e19"],["/categories/Ubuntu18-04/index.html","49bea5f9b2f8fb64ad0c0ffbe478186c"],["/categories/Ubuntu软件源/index.html","e4e8a8ac99a210181ea48d19b6ae1cf7"],["/categories/Uniquely-identifying-views/index.html","e0167f122c42cf48d4c7df0d35750740"],["/categories/VIPER/index.html","eba857538e4f2c5c1209bd99fa6c2875"],["/categories/Vapor-4-0/index.html","5820fdc8ded40c853751cea1ad7a8aee"],["/categories/Vapor4-0/index.html","54de2f1f99b5fbd559841d194d63a9fa"],["/categories/Xcode/index.html","c9c305e6060d0b9cc4a0574de9f75feb"],["/categories/appleOS-Networking/index.html","241bf9682d44336bcf39c39ac5d097dc"],["/categories/bugly/index.html","a21d41555711f1bd4d75d37b3ce5e249"],["/categories/enum/index.html","0c96587a7dabcdc3506eeb72b497ee61"],["/categories/git/index.html","75d9a5ebd732178f9fbf9a185830a334"],["/categories/iCloud/index.html","dfd5948f3a57e0b864cfd3a9b4ca2122"],["/categories/iOS/index.html","5a9c4c5061d3693112d1eb5c7a2e445d"],["/categories/iOS/page/10/index.html","fa1d6a0f96f0c150cba7975d704feca3"],["/categories/iOS/page/11/index.html","a8cbfc7db66bae9ce621994b9d43457d"],["/categories/iOS/page/12/index.html","5313c4c01b79d1e5396ce3db11ff7204"],["/categories/iOS/page/13/index.html","db8f87267196ecf6f723e74a139afbfc"],["/categories/iOS/page/2/index.html","39bc8e8f4130bfd1b2be1dc5652f0647"],["/categories/iOS/page/3/index.html","145e3e7f5b1a66e8674ebf2e96d74668"],["/categories/iOS/page/4/index.html","bab63ab0bc0bffab7b96b10435e6ece5"],["/categories/iOS/page/5/index.html","c59d009bf8e7855c1aa2ca69bd62ce90"],["/categories/iOS/page/6/index.html","d42b1f1974c692701d7890390dc495c9"],["/categories/iOS/page/7/index.html","5d08e0064e7e89d829f06a498865b3b0"],["/categories/iOS/page/8/index.html","29d3cdd77b782c9091eb85afce3aaea8"],["/categories/iOS/page/9/index.html","224aaf68b9632193d14de23f08445a75"],["/categories/iOS面试题/index.html","10bdb3b6fc22286e30cd0c831b01c8b1"],["/categories/index.html","5dc3ee1437dc9a133be26789e5d53cd7"],["/categories/random/index.html","8f0c567e387d4715f420af93bef90107"],["/categories/三方类库/index.html","a76780baf4559a8757642dd3929b784a"],["/categories/函数式编程/index.html","4954a95532b40a0afa097350b706358f"],["/categories/子类化样式/index.html","67020163ed290c883ee4e28047b766d8"],["/categories/开发记录/index.html","07f9b3b82a0a9a09ff42506393d3a83d"],["/categories/技术支持/index.html","cc29ac5e5a57b2ecaa703ab4841d9106"],["/categories/架构设计/index.html","9033dd1c4a391933cfc5951e18bb9932"],["/categories/测试/index.html","9ee26ee1e494e91c52d4d260325b89dd"],["/categories/用户体验/index.html","ac206cae6d9eaf359ae1daead4f60879"],["/categories/用户协议与隐私政策/index.html","8749e6bda4fbc8cb59476e65bd349147"],["/categories/设计模式/index.html","ff4e6bb1797fa51ae0376636dc03b8cb"],["/categories/设计模式/page/2/index.html","964cc755c6d1bb4634a235a19f6f3ddf"],["/categories/设计模式/page/3/index.html","0e6627634a3dae72fc6c389589585134"],["/css/main.css","dbd3e19faf6f2636113edc24ed8f96c4"],["/hello-world/index.html","e9b9c6d4709de46a25daf62894dcd1cd"],["/iOS VIPER架构深入实践/index.html","46a68a5dccb2e8a1cb7aedbf75474a35"],["/iOS 自定义视图，输入表单和错误提示/index.html","dd3edc0800e63f761f47c21cdf1619a0"],["/iOS如何使用iCloud文档？/index.html","7a9c3fe220965952b6c97cdba65fa75c"],["/iOS子类化样式/index.html","0fde7c75c8816400de5c771517d076a0"],["/iOS开发记录<一>/index.html","16f26d287bfbc5cc921ad666955c4436"],["/iOS自动化布局编程/index.html","9459bf31a892a3ebabece35935f4ca56"],["/iOS自定义转场(By Swift)/index.html","f2262f32f8a5ef6068e86ed371e82095"],["/iOS项目架构：使用VIPER/index.html","de5ecb93d4a6cdcc008ed34b17cb5f15"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","29bdb58990d70b775748b9d336dd0b2f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","6180004b123c5430836a61413b6d5b2f"],["/page/11/index.html","8e60eaa0be67c4db4ee14dae1252df66"],["/page/12/index.html","eef3f55cd872c02af7a7247750aafcb3"],["/page/13/index.html","73d7c42c149b59fa2d3fee4020aee23c"],["/page/14/index.html","7eef96278b8f1e17c84ff59f04f58712"],["/page/15/index.html","f114b06fc9df373c50e36a3fda748f85"],["/page/2/index.html","15e0b4bf5b79b543b3973a08e7ae87a0"],["/page/3/index.html","12b58325c109757a3ae3765783a08f01"],["/page/4/index.html","e065eda40628b756af9fcb50e08f3201"],["/page/5/index.html","743f873ccc3343557c80db49d9f2d1b5"],["/page/6/index.html","3256264e7fa28bb99e8b1e7e910444a1"],["/page/7/index.html","0962313fd2d16486f5a23103c76ffa8f"],["/page/8/index.html","2c4f0deff89c30e36e1cef8e47a80d51"],["/page/9/index.html","18c4fb41ab70064ebe6e36b4affa6e0e"],["/schedule/index.html","e3728ceeb0fdbac7daedc9338095033c"],["/storyAppPrivacy/index.html","9c8b9ec54d2b7c99b7f6de0b8b8bbcde"],["/sw-register.js","e99e411bc48998a8df897f2d46c92c36"],["/tags/Advanced-Classes/index.html","407d645cebad174fafe88cae5c8ebe5f"],["/tags/Advanced-Swift/index.html","4a7c3de953afccf1a757b50b17fe8093"],["/tags/Advanced-Swift/page/2/index.html","497099f0d7cb574cab0d22887cdd5d70"],["/tags/App-Architecture/index.html","f780d673202c0cbe2d93542db223ce31"],["/tags/Arrays-Dictionaries-Sets/index.html","67d31fa702feeb9f5962fa9a0f2e1372"],["/tags/Authentication/index.html","d079395cb539e412eee1726eead9389d"],["/tags/Build-in-Collections/index.html","f56fdf96a12c8a35cb27a5f749506f2e"],["/tags/Building-Your-Own-Types/index.html","50483763769960775db3b4f7766a60f3"],["/tags/CMS/index.html","0e3704c018cd0a47b41ce7215c04907f"],["/tags/Classes/index.html","85f26226b16991c5ca8fbd56ba3c737d"],["/tags/Codable-protocol/index.html","4c5cb8289941cd4d0a66b5280111e576"],["/tags/Collection-Iteration-with-Closures/index.html","b4304b139ea857ac861462f664a06735"],["/tags/Collection-Protocols/index.html","b0202005e708f2fcadf7a5e4736c1643"],["/tags/Collection-Types/index.html","ba3a93960079a6af274844878c78cfb6"],["/tags/Collection/index.html","a6dccfbc36b4fc710f0881dceee5b052"],["/tags/Collections/index.html","0ea15e4ddb74149eda711bd04e74802e"],["/tags/Combine-framework/index.html","5f39ef6d3dc15eb1e1abe9ff8d2aee01"],["/tags/Combine/index.html","b264b0dd3c8d1f7f854ee9ccda3d0dcf"],["/tags/Dependency-Injection/index.html","c249a790c04490c5be652c86d8d73d9e"],["/tags/Encoding-Decoding-Types/index.html","f0e2f0d308c93349a57a9dd7884075d7"],["/tags/Encoding-and-Decoding/index.html","186bcdcaaf479c06aa8eca0a671ad052"],["/tags/Enumerations/index.html","b60004a29a12e388112b6b438c63dfba"],["/tags/Enums/index.html","6be6a83fb92472629effd2630a03cdd9"],["/tags/Error-Handling/index.html","bacf86e73421d1cb6e4e7fb56712fc2b"],["/tags/Functions/index.html","a4e53d7359c47550c957c1fbb2c4ef3f"],["/tags/Generics/index.html","4647df01c02e221b3e390a1f24965938"],["/tags/Go/index.html","adc7c52af257c05d3b0ed4ef04a08688"],["/tags/Grand-Central-Dispatch/index.html","5de54a59aa19282f3d4791495d7adafa"],["/tags/Hello-Vapor/index.html","1d88eb649da434e3bf3bd2fbe4958d4d"],["/tags/Interoperability/index.html","1f4b7286ca034df50d1dd7007117ca57"],["/tags/Introduction/index.html","a15e05d433e9dc8ddd5751a27a14fec6"],["/tags/Leaf/index.html","816480cae352dcfcc647400e4edba0dd"],["/tags/Methods/index.html","4decafc4392ae05d547396d541871dcb"],["/tags/Modules-And-Hooks/index.html","43d9e3255dca17a6cbb9100de7e05f57"],["/tags/Optionals/index.html","e9c5c981bebb4fd4d60e0b97d36f263e"],["/tags/Promises/index.html","1f3c54720e36c6346a10b0072f3a848c"],["/tags/Properties/index.html","d9203aae5da495f990ec5dc0f824c444"],["/tags/Protocols/index.html","0b009e687578e58b19777734e3d86a86"],["/tags/Result-Type/index.html","bd91bd9cfb9b07c5108e9fdc27f4ebb7"],["/tags/RxSwift/index.html","6c17449c36a07a93ff10eaaf2a843dcc"],["/tags/Server/index.html","620156146ba17c0253bd9fe5392f9911"],["/tags/Session/index.html","60ad4ffff7021b411f84d8222ced5769"],["/tags/Strings/index.html","07783073051d4fb6a6afcb3e41cf21a1"],["/tags/Structs-and-Classes/index.html","d8d84e14af24360978ac8198a30a2405"],["/tags/Structures/index.html","2d46374cee6a9d429d6427b554345a20"],["/tags/Swift-5-0/index.html","fe1c0dbaa9e1873fff35293c5dd44a6b"],["/tags/Swift-5-0/page/2/index.html","84b8351a6d50f4bc0dd32a2cc3e0c85e"],["/tags/Swift-5-0/page/3/index.html","3a70920d16f58b6259384c6e085dae8b"],["/tags/Swift-5-0/page/4/index.html","89b1c17b9504474765e2dd799454e166"],["/tags/Swift-5-0/page/5/index.html","86a79cac3bb9fab03d378344bcab28a1"],["/tags/Swift-Apprentice/index.html","b1ca8ee739abd574b122dc4d80f92b80"],["/tags/Swift-Apprentice/page/2/index.html","d5533efcf6e61a7a604418df94c9110e"],["/tags/Swift-Apprentice/page/3/index.html","1c2ef654d715021388bfe11c59baf509"],["/tags/Swift-Package-Manager/index.html","a046bd42f3c792b9231703ac4c1a73ee"],["/tags/Swift/index.html","702fb2a1abbd6eb7d72f1f0a52b959d7"],["/tags/Swift/page/10/index.html","d361ca051972fd16af54fb9dc360529a"],["/tags/Swift/page/11/index.html","5661487aeba3d0e3c2ba3fc99bf87d8d"],["/tags/Swift/page/12/index.html","3abe30877588113390579d208e9418ab"],["/tags/Swift/page/13/index.html","de4cc6ee241b226e604bc18ef13ec626"],["/tags/Swift/page/2/index.html","00209d2ac488918b7cab7768e6373b83"],["/tags/Swift/page/3/index.html","ad642aaee70060dd9531ccadbfe8bc0d"],["/tags/Swift/page/4/index.html","e653f8bd5b4d911703c35fc15511bc92"],["/tags/Swift/page/5/index.html","77ce666615ab97500c56aee44a214280"],["/tags/Swift/page/6/index.html","78a99656d7a59576da98da9137e237b1"],["/tags/Swift/page/7/index.html","b9e6537608d670f0ffab837ea28594cb"],["/tags/Swift/page/8/index.html","fddc8b003b5e6659fa8928e5d5b4993a"],["/tags/Swift/page/9/index.html","9266feabbed619a6ccf39b19fd9dcc3c"],["/tags/SwiftLint/index.html","b5832c5818e242ad82ebb0582414378e"],["/tags/SwiftUI/index.html","d3577098f2f949e5243e1a300f86ddda"],["/tags/UICollectionView/index.html","e8313d98bf533f54e94e55b02b17fa24"],["/tags/UIColor/index.html","76400d9678a958a52365224566beb9d3"],["/tags/UIImagePickerController/index.html","081c20412e030942d555b5745c269634"],["/tags/UIKit/index.html","bad867da42b8d9f265a3e545364939c4"],["/tags/UIKit/page/2/index.html","52321fc68e92c11734d99ca2a2851bbf"],["/tags/UIKit/page/3/index.html","b020ee947d76500696f5db1a9ae3b94e"],["/tags/UIKit/page/4/index.html","1aa1c39c981ef9dc31bf6abb1c36cea7"],["/tags/UIKit/page/5/index.html","7b4edb577edcf86c467af05d9c4c3f36"],["/tags/UITableView/index.html","1c27aabaa50a87eaabe9b957668b77bc"],["/tags/Ubuntu/index.html","7afd3e206267611670b9876e962d9a88"],["/tags/Uniquely-identifying-views/index.html","1afb50c77582fa6dbdc28647fc6cc0b7"],["/tags/VIPER/index.html","34be30a8058ba4d675dc43fe79a176f1"],["/tags/VMware/index.html","4c728d0401aa5beb4c640025430b8ba9"],["/tags/Vapor-4-0/index.html","bee900dca1265dc9b59d16086e46e6a7"],["/tags/Vapor-初探/index.html","7099addaffd4d929e5cfcca54ab9fd39"],["/tags/Xcode/index.html","fdf916152e76e9e72546d798f3e8b963"],["/tags/appleOS-Networking/index.html","702f19eb3de57adc9a02fc55fb2d72af"],["/tags/bugly/index.html","25e5a7e6f3fb7d059cc19abbd8f8a054"],["/tags/enum/index.html","11a9d311ee343ff4f66b483412866925"],["/tags/git/index.html","227c55e70dbede6d89555a98586c2099"],["/tags/iCloud/index.html","d71f90818fbf2d06501adab72d745ff1"],["/tags/iOS/index.html","cb33689f34cbcb9b9b8c10d94c7f7fe6"],["/tags/iOS/page/10/index.html","5b8d3a9942a57bd873245e945ce570e0"],["/tags/iOS/page/11/index.html","7c394418e5ff7bb384966b9a9a87669f"],["/tags/iOS/page/12/index.html","0d30039ff6d536de8a08e5046b87bc18"],["/tags/iOS/page/13/index.html","3392297ab4192acec476decf64ddf9ec"],["/tags/iOS/page/2/index.html","de017f5a33d1e20fc1152cf6b96b562a"],["/tags/iOS/page/3/index.html","c60b152fc1991449980cedec9e602670"],["/tags/iOS/page/4/index.html","ec663c8c16d376c9ae728a2809711fd8"],["/tags/iOS/page/5/index.html","2585d50a33105867aead002cef0b6b33"],["/tags/iOS/page/6/index.html","86061ad9be9e93001ccd4cd206fffef3"],["/tags/iOS/page/7/index.html","980fbb4ce3690be30784676253e6a083"],["/tags/iOS/page/8/index.html","e51d1051a35aa2dabd95505ad071be5a"],["/tags/iOS/page/9/index.html","999cbaeb68ff465dfc36e2344fee6ad2"],["/tags/iOS面试题/index.html","db2ee149d2d9fe79240decca6c8185f5"],["/tags/index.html","28480d5120a16dbe6f95c50e6731a3a3"],["/tags/non-optional/index.html","6cb7dcebf7e9b2d79c23d03caf65e7d3"],["/tags/random/index.html","4d3168e63c10b637c29ff73afc586cc0"],["/tags/transition/index.html","c64d6fc4b55eadeb8e6b11fc9fc3ab13"],["/tags/三方类库/index.html","cdb86b95c41d43fcff27ea16c5cb1ce2"],["/tags/依赖注入设计模式/index.html","afed38baff0cbd7b34fefbf8c3a67a2a"],["/tags/值类型和值语义/index.html","849171cfb0a6dbc220009625bc4c9bb6"],["/tags/内存管理/index.html","e27d92b07f632f58ee01879278554061"],["/tags/冒烟测试与回归测试/index.html","89ebda71140c814c57755ddb6197259c"],["/tags/函数式编程/index.html","add847f1e683a4b4f4fb868ffee1ced6"],["/tags/创建博客数据库/index.html","4291ebf620055d473efdf8678c5633ea"],["/tags/初始化模式/index.html","f742b1da487e82944617547d61874bf8"],["/tags/单例模式/index.html","a14419e533dd67517df0de9f104336a6"],["/tags/原型设计模式/index.html","66a9b98aafdc337c020ab2317fd3bba0"],["/tags/命令设计模式/index.html","13941ec73022778a7559337c1b8dedc2"],["/tags/基本控制流/index.html","1a6e357cc034fa44ac8f9611b57f6959"],["/tags/外观设计模式/index.html","0332c07efeb959c86acf44c42c9ccfb1"],["/tags/委托设计模式/index.html","627a1b74f95891a77eb8d99d65ed5e56"],["/tags/子类化样式/index.html","6f639e4c79b4d4b3950d85ecedabb4c2"],["/tags/对象池设计模式/index.html","9309fc4a35efb8bb62e1c2e118c21ced"],["/tags/工厂方法设计模式/index.html","52ef30747a75ff92f2b769b04f87b8b1"],["/tags/工厂模式/index.html","979ff3087a34a3be91bf99f0a1f2f43f"],["/tags/工厂设计模式/index.html","0dd377a7e0bb5bdca130890505fa30ba"],["/tags/开发记录/index.html","8c46a5bad5dc03c89af082e22523ef11"],["/tags/懒加载模式/index.html","b2769f84d4177b8bd16a217a04938154"],["/tags/技术支持/index.html","0c409c19b5ae9f08b39bbbaa73c330fb"],["/tags/抽象工厂设计模式/index.html","a9aa3700dd0c6e49ef595dacc02ed595"],["/tags/构造函数/index.html","f3041645f2b9bd272c2065766d558e98"],["/tags/架构设计/index.html","939dd007a5672dfaa06f7755e70f651f"],["/tags/模式匹配/index.html","f8c896dc085cadcf28549addfb1a5736"],["/tags/生成器模式/index.html","6e895c0c8ec8ee82cfb0f4f0642dbc6d"],["/tags/用户体验/index.html","e3c73bcf3a5167a5951edeb8fed13cae"],["/tags/用户协议与隐私政策/index.html","101a6e66c9fd09c6b78e39594c4c18dc"],["/tags/类型与操作/index.html","2702f62908740d4f145d702ecacab2da"],["/tags/自动化布局/index.html","907f3bf46261caca57f777b877a37979"],["/tags/自定义UIView/index.html","02f5d8ec29635d3353c52301244be06a"],["/tags/自定义转场/index.html","e16789b89d187da1c662fcad8b21460d"],["/tags/自适应布局/index.html","9b224394e18a2f8192b6a153788d8be1"],["/tags/表达式、变量和常量/index.html","80de94520e3460422fa23dd6f97d70f1"],["/tags/设计模式/index.html","51d4fc1877b5ff76420541ce22e2c1af"],["/tags/设计模式/page/2/index.html","1cf6bbe0a40c06b5f40c35eea7e40b8f"],["/tags/设计模式/page/3/index.html","ac32c2c04acea560d286d4483c459f34"],["/tags/访问控制和代码组织/index.html","bd2e47f8309d44a8b3749ea67869c7a6"],["/tags/运算符，下标和键路径/index.html","19c0258d29fb257dd70c8c47908393be"],["/tags/迭代器设计模式/index.html","2ceb8e87fd497941d2a9721ff4a1ed59"],["/tags/适配器设计模式/index.html","ac8cf2871119c1ae19faeb382cd73670"],["/tags/错误处理/index.html","8c7fbf8615f81689925404c88c27febf"],["/tags/静态工厂方法/index.html","a6aab11b9cb37a481793af0222b116a3"],["/tags/面向协议编程-OOP/index.html","1a630871dac3f0cdf70d5093816882ad"],["/tags/高级主题/index.html","5882f7c7a64d23ded0b5e2a6d8e5e9cb"],["/tags/高级协议和泛型/index.html","fc51d29b0a9c831bfb81863134fbbf60"],["/tags/高级控制流/index.html","cbb3774433401c9b4b56ce5d505ba2af"],["/为iOS应用构建输入表单/index.html","73f2d121375321bd694b718de888d1ad"],["/产品开发的幕后花絮/index.html","df5fb0427ba070bb84cdb3fae759123b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","3d2b9ebd92f80766a36e1a134d6365a8"],["/冒烟测试与回归测试/index.html","50e8a9e75a3bd6c0407384a52ee11a1d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","dc03059be4ed486951e9d69efd4ce1bb"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f8eaff31be55bd3944f926c173005c49"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c1e5a71de8534b84dac2cc71229ca174"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6adae4130c74df5d52ae051e7b7e5fe8"],["/在Swift中创建自定义集合/index.html","dec9f73dc749a14544101a244a0fad94"],["/在Swift中处理非可选选项/index.html","bfb1d12f00679099db165a13b44559fe"],["/在Swift中生成随机数/index.html","5c0ae3786bd3ebf9c6d6472dce652d92"],["/在Swift中重构单例模式用法/index.html","a37d55db064b7ddd8e1a40bad11c5b01"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","e703bad7789c79df6264d554ae817498"],["/如何为VIPER编写服务？/index.html","1d39cd4a0393a7ff2850c16de6902b66"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","71398393bb9e9f30279690063241e3bb"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f7042306a4410a320fd880183f7eae3b"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1e3a2c49b7f986454525372a49158e20"],["/如何使用VIPER构建SwiftUI Apps？/index.html","934b75b26921ce51e9e19b65b8721fd8"],["/掌握VIPER架构/index.html","0988e586e6a72c871226f8ed4097a4a4"],["/揭秘 WordPress Hook 系统/index.html","23514bcad1e389ea5fde199449fabacd"],["/比较工厂设计模式/index.html","a4ec24f838f31e04dce725a3b2c262b5"],["/深入了解Swift中的Grand Central Dispatch/index.html","15cbb1450a4fd61b5659f3a9ae04288b"],["/深入研究Swift框架/index.html","fe0a15a6b28271b6236f623a89136f47"],["/美豫直聘技术支持/index.html","8498388754018ffc391f1db1519032f6"],["/美豫直聘用户协议与隐私政策/index.html","48104a3b65a407d3a0fbef0fad327c37"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c254cbb4b9c258df8a4cca94bea7ad76"],["/选择Swift而不是Objective-C的5个理由/index.html","d5da070f82da6637dd10bf20994f223f"]];
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
