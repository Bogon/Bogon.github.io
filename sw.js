/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6251a81f38fe301b582206e12101a982"],["/2020年iOS面试题总结(三)/index.html","531279925f6a0330998c2b0b2fd7b7c2"],["/2020年iOS面试题总结(二)/index.html","c9b6f87835b0bd151153048c0061551e"],["/Advanced Swift系列(一): Swift 简介/index.html","7e1a0dad10a1fa6149655e7488bae828"],["/Advanced Swift系列(七): Strings/index.html","d04389bf21aabfb787811a4319c0abfe"],["/Advanced Swift系列(三):  Optionals/index.html","fa766425e18d4f27bc9a2d7b892f8547"],["/Advanced Swift系列(九): Protocols/index.html","2a9b14500ea40ec13815ca1f2b404b49"],["/Advanced Swift系列(二): Build-in Collections/index.html","c87ec008b3f47f85d81f747ab6a7ca2c"],["/Advanced Swift系列(五): Structs and Classes/index.html","a936392f97ec92b50eeb48ea3d33d139"],["/Advanced Swift系列(八): Generics/index.html","67f9b29d9615c666e044e4728f63df78"],["/Advanced Swift系列(六):  Enums/index.html","672675d59b08ba56f27aa9106246184b"],["/Advanced Swift系列(十): Collection Protocols/index.html","af4d253bd6bb62deb2373bbea33ff9ff"],["/Advanced Swift系列(十一): Error Handling/index.html","1aa2d41ea36a57c40199cc13e1f21106"],["/Advanced Swift系列(十三): Interoperability/index.html","65825da560ebcdc1a3961743358e7eae"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","eb54a2d29d8b2b722fd956217d51b822"],["/Advanced Swift系列(四):  Functions/index.html","35f202d5405739f15609442de842afe4"],["/App Architecture系列(一):  简介/index.html","956134f6a6a1734aafe5fe6c87238f73"],["/Functional Swift 初探/index.html","fba09178bf1d87895b76d788378c06a6"],["/Git 使用小技巧/index.html","86957ad6f5305a575f4ce785791dbda1"],["/Go 基本语法初探(一)/index.html","6e92cc48705df8788413cdd9008bef42"],["/Linux VIM 命令及操作小结/index.html","f7d84cd2a1275dd0c85074c920fd553e"],["/NSCODER和SWIFT初始化/index.html","183992e61b15e293c8c2cf8e459720e0"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","7086f64ef0f6a386d530a38d68427c1f"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","a21b8051666e0540c324307cad3c3af2"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","a9ca40afafb41b34c921c1bae8e1aade"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","b105be775f8483e14372b16067b2167c"],["/Swift 5使用UIImagePickerController拾取图像/index.html","eee834bb71eff6178b7bf7a09c9acdb5"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","04c28819588e867bdd48ed02e66ccdcc"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","50e5646d68bb78d335a62c7a4ca60db3"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","cd91799e41162660eae2616f0c92e302"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","ac605261bbfc6baf1b14aa9075da51c9"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","8b64f00e1b43b0c223dea24d78d93ae9"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a6773b1f3a976714287840310db76fb1"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","f6d5cb3cd04db13e240eb0b7405f71bc"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","1f64854c165e8fe10cba35a0e4d2cb23"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","544752e68d1798162aad8ef66042e505"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","9ba6404ca7f7f37fe02d94f9d2928708"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","bdc1d4f8aa473b56b2de543b1dc44ad6"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","e40566523b93ce006e7ed7211f07120d"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6b9c83c8e06202f23b9a9073a6413b1d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","33ad38ce9ef7be12fa16942788bfd7fc"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c8def2e3d9a8a97f89ab4b3dfa1ec074"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","682e1f65be0f1dd76bef6b17e91561d6"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","68df5e67bc0abc6a5a10e58e185be3f1"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","a0ad7dc50a0de9f0a1a448cd00d27929"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","462ed81b687de79450c5979c6c90fa2c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","55adbbb052e8f203bc6e8e0c0279edb7"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","54a5f9fc7c4e6bbc221d51fce7863624"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8ce381117a30b813cf5d3f13f76810cf"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","a1971c80efa020eef706e927c276e61c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3c30a3781d95f4b2f887be5cf05b8ed2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","20ea2fc2eacca7e00db40b72b5f2c072"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","3d166ec9e856edc9254865c635e074b2"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","36f213764c474573edca216532fe560f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","460a6d6041e4282dc1b6c9dc8d7755f1"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","71fce929e6fdb24a55741e57a32b23e1"],["/Swift CompactMap vs flatMap：差异说明/index.html","0540dd21dcbc1dd8ce690e4a071cd744"],["/Swift Grand Central Dispatch 深入实践/index.html","78fcfdbfd6386c4d46c3efb0bed229b8"],["/Swift Lazy属性初始化/index.html","3a3adbff6e4643e43b7a0f5158d696ef"],["/Swift Promises 初体验/index.html","73b5580f9f4153ab1372c7deeb3d8246"],["/Swift Promises 探究/index.html","b4fb9423f3e786dc680f14211c6cb7cb"],["/Swift UICollectionView使用指南/index.html","ff134dd0faf4f8479dde5f82c5cdf57c"],["/Swift URLSession && Combine framework/index.html","9b4bdd0048df90583bc7a8f828fc48b9"],["/Swift tips/index.html","590fc6dec08d9fc487d7feaf53b73828"],["/Swift 唯一识别的视图/index.html","d2aabc0d306852d7c9aa1eac8f83215f"],["/Swift 如何学习现代UIKit？/index.html","e8e5ddee5e5dcd791b45f6dd1216e2ce"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","81e56a82357abf4cd0b190f5a4f67d0d"],["/Swift 用 compactMap 替换 flatMap/index.html","2b20258102c325a21254151860c01a65"],["/Swift 选择和播放视频/index.html","fbea70f18e9b44469d192c51f4516d4c"],["/Swift中UIColor最佳实践/index.html","b99887514441590151ca5736578145f5"],["/Swift中快速简单的工厂设计模式/index.html","ecbdac4e4adfd387deac9ce1c7c4d62c"],["/Swift中构造函数与静态工厂方法的比较/index.html","6f088fa5dc1451f54e548ea1d8f3dff4"],["/Swift中的UITableView教程/index.html","0c0e166587a5aea2a727e31c4bcfe721"],["/Swift中的懒加载模式/index.html","4af7c6e8b4b5eec5818c15ac2816f700"],["/Swift中的模块和挂钩/index.html","ec351a9844a16baf79c2dab5997f030b"],["/Swift使用布局锚点添加约束/index.html","6a56a54288604187a9330c00d3ccfb7f"],["/Swift依赖注入设计模式/index.html","1cffa35e27d35394f419d4d86cdd79d3"],["/Swift关于Dependency Injection (DI)/index.html","f4f84e14eea02fa4b9cd6f36365bf15e"],["/Swift初始化模式/index.html","2ed83cf5142456ea9b3c8ea4a8a3fe22"],["/Swift单例模式/index.html","f2a137ae8485a4ccd854c1eb9d105b9d"],["/Swift原型设计模式/index.html","3bab81ea34bd3aa006e4a12f75fe2a70"],["/Swift命令设计模式/index.html","471f17c6589a73aac51d3c3648b6d66c"],["/Swift外观设计模式/index.html","e7f1cf413ee238027e34dae6bb953c82"],["/Swift委托设计模式/index.html","4bf95e66352602f0f0d342cc4c083c64"],["/Swift对象池设计模式/index.html","fb45eae4b775a91cb14b132977096de6"],["/Swift工厂方法设计模式/index.html","29e0c36afea41d121eda28b3f7a8d561"],["/Swift带闭包的懒惰初始化/index.html","98bf21b7dda0a13ced8ce1c7e19aa7e8"],["/Swift抽象工厂设计模式/index.html","b06adf8da4cae9c5bc4c15cf66bdfe12"],["/Swift掌握iOS自动布局锚点/index.html","a4a559c965611f981538bdb356f8306c"],["/Swift支持旋转的自适应单元格/index.html","36c11cc6d55c508bb34296883b5340cf"],["/Swift枚举值/index.html","412cb544c63d722abc3ecc92747aa962"],["/Swift生成器模式/index.html","740cfdb06ac6589d075d4cbc6b537c97"],["/Swift结合Xib文件自定义UIView/index.html","0624168d5d0930b92b36b88d0f238202"],["/Swift编写的20个iOS库(一)/index.html","6b1b6284da4763e782fa7e5aeb92328f"],["/Swift迭代器设计模式/index.html","b01f400be2ac3e70553f95eea9d8bf72"],["/Swift适配器设计模式/index.html","2b31490818a03007f7ff31c8cf263074"],["/Swift静态工厂设计模式/index.html","3b163d16415a24c7cecb64c65421c245"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","10da8891a1b20ab39888f47e33e00d6a"],["/UICollectionView data source and delegates/index.html","b2cd43bce26ec9ec36c2c7a21993b84b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","2d9af5ef2de053d1a9e85a616b03eb3e"],["/UIKit初始化模式/index.html","b51c0f0e49cc193e6377dc3980febaf3"],["/Ubuntu18.04替换国内源/index.html","796af899a9e38c5655405418acfde1cd"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","1b9ec1b36fedc3cd8a1b34c27457d717"],["/Vapor系列 (一) :  Vapor 初探/index.html","bc15d79ed71dd50d520df95bf39145e4"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f0fd524536eaea271050f6250a995c97"],["/Vapor系列 (二) :  Hello Vapor！/index.html","888bff14136711dfce958da1a45f2b7b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","f5f1cf27b02f537489b2eb3f75780e04"],["/Vapor系列 (四) :  创建博客数据库/index.html","aadfff6270d0873f073ab23b60a22204"],["/Vapor系列(六): 徒手撸一个CMS/index.html","cf0375f07b96c90b0772eb39eead3e95"],["/WKWebView与Native交互注意事项/index.html","37de00d482104ce7e3c966d4e31decd0"],["/Xcode扩展/index.html","ab23cdf04cdb80f8f7e1e5f0c6f5c035"],["/about/index.html","ab4e5ff382e66e39210ae286a7a05c0b"],["/appleOS的Networking示例/index.html","f5dfdfae00431befa97ae5b039a9d4e0"],["/archives/2020/03/index.html","34bbfd08f3e9f89e7f7b0e45f344d116"],["/archives/2020/04/index.html","02f4340084e4306444afb55c6aeaa99b"],["/archives/2020/04/page/2/index.html","eba020813354d3ba596f743e6f3d649f"],["/archives/2020/04/page/3/index.html","5f91479ba5c944d977123b3ce6b4274a"],["/archives/2020/04/page/4/index.html","8037cf8a02e2db0eb58b51dded7a2e77"],["/archives/2020/04/page/5/index.html","38cd5970d2065f00d036251aaaa3cad9"],["/archives/2020/04/page/6/index.html","9fa6d4d3c1e4cfc4754128075fcf3549"],["/archives/2020/04/page/7/index.html","4087adf051780305bb276afe9fd9208f"],["/archives/2020/04/page/8/index.html","34baf37a8de8fa0fd93b31aaec4afdea"],["/archives/2020/05/index.html","70dc1523949ad3b4124281e66f86a5dd"],["/archives/2020/05/page/2/index.html","33ab2c803b116aee450317aa55a36926"],["/archives/2020/05/page/3/index.html","aa3f2d91efe0747bb5c5969844a3ecce"],["/archives/2020/05/page/4/index.html","c6f8679d81b46e405bca0fa069111931"],["/archives/2020/05/page/5/index.html","149a61457fde8eebcbe447cfcef59282"],["/archives/2020/06/index.html","018475ef5f586d4844233cbe9e24291a"],["/archives/2020/06/page/2/index.html","ddc9f902e9f39b1602473673f70e2217"],["/archives/2020/08/index.html","229e9611d871f30a422200b9bcd8e689"],["/archives/2020/09/index.html","61c20003da69d93b21bd7e1309dbc304"],["/archives/2020/10/index.html","424b036e511b1a1521b98f868bea19b0"],["/archives/2020/11/index.html","b3c2fcc76bfba5397ae2585ccc8451ef"],["/archives/2020/12/index.html","3601cd16f0fa202f2e5e98fce6b07497"],["/archives/2020/index.html","7e21e3e9871ccf4d4df57d06275ccab5"],["/archives/2020/page/10/index.html","2eeb7530f1ff2874befb4d8891424194"],["/archives/2020/page/11/index.html","16d783e85c0c07b5f7fd3c944c0abc9a"],["/archives/2020/page/12/index.html","7992cb686b36c8139add36ceb5c421b4"],["/archives/2020/page/13/index.html","5d50fb9a100e984d2f8b94747ea75dab"],["/archives/2020/page/14/index.html","60a9cf838217145841b15fb29f571f7f"],["/archives/2020/page/15/index.html","68110e75cf29890d09dfc01df01de05b"],["/archives/2020/page/2/index.html","04ed20c0275970b4335bfc9fb7e3b50f"],["/archives/2020/page/3/index.html","50988de19b9a699997915cd780db9611"],["/archives/2020/page/4/index.html","375fb09983f1640589760875623a2f2a"],["/archives/2020/page/5/index.html","28d6cf70d2dad59c48d9dba6922e338c"],["/archives/2020/page/6/index.html","0c447ad860fcb50654ad1c9513df3c38"],["/archives/2020/page/7/index.html","dc52d618d6e9e5a90ff0271cbcca7676"],["/archives/2020/page/8/index.html","850fbeac19cc95088d743d44134802f9"],["/archives/2020/page/9/index.html","3e535cc8e6e86c4a57ff16bf78375ce3"],["/archives/2021/03/index.html","e6cabd1a58bb89c8fac5606773c65292"],["/archives/2021/04/index.html","bc088088e08afb3d18dee96a42ad33a7"],["/archives/2021/05/index.html","cafddaeb51b246c65f17392b37be1b94"],["/archives/2021/index.html","c88e68a08d3585e40dcff8d91d7ec057"],["/archives/index.html","f286b65dbd0785f81a2e433db6d729b5"],["/archives/page/10/index.html","7981ee42fb757cb0c363b7c102de46dd"],["/archives/page/11/index.html","02f82d49b56b59911e7be78d9886fac1"],["/archives/page/12/index.html","21e44449f824386f40847d0b17bc45f3"],["/archives/page/13/index.html","d1e46b6c7ad6a60150512c233202bf40"],["/archives/page/14/index.html","777242bdab3a88773f782f1fbc01a509"],["/archives/page/15/index.html","28a8fb3d8152f477137546eb3668d6ae"],["/archives/page/16/index.html","6ccebac232941ac2cb830a219305a4df"],["/archives/page/2/index.html","8dd2a5b6ddd72387b17c06f7151a7661"],["/archives/page/3/index.html","d7dde03b8177789c5af6fab825565ca1"],["/archives/page/4/index.html","3d79567859b347e63e9f080d12913ec1"],["/archives/page/5/index.html","15f76dd45440d914abfa1ec33dc1988a"],["/archives/page/6/index.html","5970fdc10f5c11aeda4b3f9e74cdcff3"],["/archives/page/7/index.html","29913093d3760ecd6e0e96806e24d6a4"],["/archives/page/8/index.html","ee29e4a7f23c608886740e89c76a608f"],["/archives/page/9/index.html","3216f0cc32de11fd6967257a2a7e299a"],["/bugly 上传dYSM文件小记/index.html","3006b98cec0586ebaa352e7d4f7e9b8d"],["/categories/Advanced-Swift/index.html","f732fa50a6638efba323e965787e84df"],["/categories/Advanced-Swift/page/2/index.html","a7f79494f441ba4fb3c37bba7e7b5f30"],["/categories/App-Architecture/index.html","0f4d68f39fb29295e5aa387897b8cf51"],["/categories/Array/index.html","d8c4c2d7f4c65f8fa6281a559efc08c2"],["/categories/Codable-protocol/index.html","00dfdc65a49a580c15f0afbb0cf748a7"],["/categories/Combine-framework/index.html","a9be104668f0a781dfb6c6b46038566c"],["/categories/Combine/index.html","f38705e336edb365999fdd3b28172aa9"],["/categories/Go/index.html","dac339c38d8d08ee9fe338d84dd5626b"],["/categories/Grand-Central-Dispatch/index.html","2904a9ca903521e351cbdceba5e5ec29"],["/categories/Hexo/index.html","311a08973be6ae3b8174eed2dd2ee00b"],["/categories/Homebrew/index.html","d7ae59d559e884f72e6eb2e38521c82a"],["/categories/Linux/index.html","8079281920503ef372cc6732ef6e2335"],["/categories/Promises/index.html","522bdfff6b714c7cb6f47a452cd8dc6c"],["/categories/Result-Type/index.html","a5841e6791cf17ad35f191bea15e4ffe"],["/categories/RxSwift/index.html","b533eccfcdf56835c7c3524a46863fcc"],["/categories/Server/index.html","8e9afa1baf929e74818d73f9acfcf713"],["/categories/Swift-Apprentice/index.html","b0c6d62176c1f8b1ffb56253f836932b"],["/categories/Swift-Apprentice/page/2/index.html","733a85bb45467f000a3edf76e92bcb05"],["/categories/Swift-Apprentice/page/3/index.html","69c3556f2d1140bfd038431194f3118e"],["/categories/Swift-源码阅读/index.html","de66cc242589e902a027c38ae2107c83"],["/categories/Swift/index.html","49a3f97730548ce84098d88923c9d2fe"],["/categories/Swift/page/10/index.html","01ccbfa6f4738e0e477693c13e394dd5"],["/categories/Swift/page/11/index.html","b128bd51c4d8e95846a6dd8c2de41e61"],["/categories/Swift/page/12/index.html","5868b0c03ce0abe629308d3b43478cbc"],["/categories/Swift/page/13/index.html","be069b0e18ee5a7e6d208f19672c9384"],["/categories/Swift/page/2/index.html","d9999613371504fe886a20f5fa1bb297"],["/categories/Swift/page/3/index.html","a58cad168359291cf40422db74650e19"],["/categories/Swift/page/4/index.html","f7e8b94c3da7350603ad5c52364e7c86"],["/categories/Swift/page/5/index.html","90a5cbf9a7394ce98d20426fc63780ad"],["/categories/Swift/page/6/index.html","9da4811ef61b905b2d2740fdc3a80516"],["/categories/Swift/page/7/index.html","0264801b2e5da1756f7fde1ca390d183"],["/categories/Swift/page/8/index.html","98a60220832451bd29af34d2aeece626"],["/categories/Swift/page/9/index.html","96573f925f56484e1948f726229fd3f8"],["/categories/Swift5-2/index.html","dfc4b331d63a6a8e6c67275b01460bff"],["/categories/SwiftLint/index.html","17cfd3f31da463d28cf6fa6d9cfe7cda"],["/categories/SwiftUI/index.html","4ed518622544d02104bdf0af2da4d7d9"],["/categories/UICollectionView/index.html","a0a6b71c56480ba80a43b77f252e3ec9"],["/categories/UIImagePickerController/index.html","ba3f48664a0c6cfb5d9895c2938a409b"],["/categories/UIKit/index.html","d1c68ff6e0ea5d2ba9e61f6a8b736edf"],["/categories/UIKit/page/2/index.html","fff6a54bb2c3b46b555566b4e4081c91"],["/categories/UIKit/page/3/index.html","0719524c1613c676b3c504807da3460b"],["/categories/UIKit/page/4/index.html","ac40d202e6e71ec93cfdcf3f72a0f7b2"],["/categories/UIKit/page/5/index.html","7eea1b6bf88dfbffb3bfbd9657338bf7"],["/categories/UITableView/index.html","4bb9961cbd0c64f544add9121bd9549c"],["/categories/Ubuntu18-04/index.html","cfb3d1f10ed8f89e1ff6c8a32ccfe97f"],["/categories/Ubuntu软件源/index.html","ab7e14df489defe6eb2607e588df0c66"],["/categories/Uniquely-identifying-views/index.html","03b22f87a7e68372b433ffed2f018450"],["/categories/VIPER/index.html","d533c302395265d924b42db9875786b0"],["/categories/Vapor-4-0/index.html","8936346feabbe6315fefdf405f9977e0"],["/categories/Vapor4-0/index.html","6efb2ab104f81891d70a6515a89dd82c"],["/categories/Vim/index.html","09d60453d6477f7d1969fab3e67ee13a"],["/categories/Xcode/index.html","53a860be757b33e66b3e797a936705c9"],["/categories/appleOS-Networking/index.html","fc55fe819d5e732664a64d90dd146d32"],["/categories/bugly/index.html","c8a708e0132435c69c65dda465dd62ce"],["/categories/enum/index.html","f0127b525403b4c2b8948448041b0947"],["/categories/git/index.html","fd27e0aa963c4b92deccc63ffd362891"],["/categories/iCloud/index.html","b102d3d59311b3839602f78abec0d479"],["/categories/iOS/index.html","d20321e3500ace81daba5dd03873b8b2"],["/categories/iOS/page/10/index.html","23d69253fb1c9a34b0e62e4d219e04c8"],["/categories/iOS/page/11/index.html","31068f1b4bbe917525c5c819e81e017d"],["/categories/iOS/page/12/index.html","81c7417b33389f47d7ee7539da2905e5"],["/categories/iOS/page/13/index.html","a9f600907d507d60d1d4e48c00cbafe9"],["/categories/iOS/page/2/index.html","c017d562001cd1782a708b8db18cd835"],["/categories/iOS/page/3/index.html","561dbe9ffba5bf69abe4a71a75256222"],["/categories/iOS/page/4/index.html","230d102d5bdf2d6c88568e41da31f57c"],["/categories/iOS/page/5/index.html","36040d521577e5e952daa503aa1d3da1"],["/categories/iOS/page/6/index.html","1c1f004dff072336d8606abc59f29dc6"],["/categories/iOS/page/7/index.html","a3e8f853c1d06de8dc930708512c5afb"],["/categories/iOS/page/8/index.html","0f14728610b4238f16371ee967f17c41"],["/categories/iOS/page/9/index.html","88696b9f619d67bbb79b12d1405041f6"],["/categories/iOS面试题/index.html","368e8f1717037c3f115503dbf81fb574"],["/categories/index.html","f9cb04cbe79b912b83d2c6bf54dfe57b"],["/categories/random/index.html","f5f158a087d0d7a3b47993189ddb25b7"],["/categories/三方类库/index.html","b9e9a5d753851c2bb5260230534d9a72"],["/categories/函数式编程/index.html","b5c1af110db2005ca47afe41a99b0de9"],["/categories/子类化样式/index.html","60d32d9bbb2e1a746149939c42d9f244"],["/categories/开发技巧/index.html","0c7e8b4642db30ae21842d6f4fb6dd17"],["/categories/开发记录/index.html","5c2150bf4b909bd37060ec65915b2571"],["/categories/技术支持/index.html","94f3e590a7a9a251d2ab75fcb94811b8"],["/categories/架构设计/index.html","01e458b5453062ce2d4f4287e93f1ca8"],["/categories/测试/index.html","b7b4dd3a36dda88c009d4fa0d25da1f1"],["/categories/用户体验/index.html","437a39fa4d95b0ef690020c18110b1e7"],["/categories/用户协议与隐私政策/index.html","cd8d0b541ca7078e6805e7f820654207"],["/categories/设计模式/index.html","4c18fc16d9af44cad87d27c9bacf6f53"],["/categories/设计模式/page/2/index.html","e636dda9fbe547ebe452a3755cee0e36"],["/categories/设计模式/page/3/index.html","2d44df947af2d36b63eaee2b3e90729d"],["/css/main.css","9d1ef0a3a7790e95c40d42731ed1ff33"],["/hello-world/index.html","e94caf2b083f0e6245a914d815906e5c"],["/hexo部署失败/index.html","81a34bfa3bb8d7a7340a250ef84aa87b"],["/iOS VIPER架构深入实践/index.html","7ca0aa69bb5a893e6d4144bcd60af929"],["/iOS 自定义视图，输入表单和错误提示/index.html","d9a08e271f35d575b3c8aba464c76669"],["/iOS如何使用iCloud文档？/index.html","45c1dd56228f3b519345b4002e972cb5"],["/iOS子类化样式/index.html","168692d0b2fe7aad81afe5ee612e235d"],["/iOS开发记录<一>/index.html","2f172593dd38a06e53bbaf95fb824217"],["/iOS自动化布局编程/index.html","117a5b18655c57d27e00a92354b6423e"],["/iOS自定义转场(By Swift)/index.html","8f9f05f192ecf4a0b8f041d569c399cc"],["/iOS项目架构：使用VIPER/index.html","b6256f6e1f02d793a13db592315f2100"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","43af4da0513ce8c7090509e1870c08fb"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","9feb717949aafba78d3a3967da12569f"],["/page/10/index.html","39a5e5845d8b41f568abfeea268de6d2"],["/page/11/index.html","359e0eceb12934790626cf9c04b38523"],["/page/12/index.html","bca55733afa194b7b2ad7a7c679bcc59"],["/page/13/index.html","040012710448ea7b3ec400f09f2e9ede"],["/page/14/index.html","e4dcea4edd7a2ed07d9531b5b0f351b5"],["/page/15/index.html","551af2c6d3a516bf6271332319b8438c"],["/page/16/index.html","2d26eb3eca2a08ec19ea3eb665bca9e6"],["/page/2/index.html","c782255f622a3e5718c50a866f65fdfa"],["/page/3/index.html","7eb696cea7b35a2d0915d585cf8b7b66"],["/page/4/index.html","a0f8d5f7e6c803a235047bc2c92aa70d"],["/page/5/index.html","bf7cede51860cdbeef197ce7b23b1237"],["/page/6/index.html","aebfa307522a8699e2199edafdc23d31"],["/page/7/index.html","ecb06cb034f2c30810a74daf8d328f14"],["/page/8/index.html","378f897793103326363654596ca267ef"],["/page/9/index.html","7311a3bb8c0c62a864dd17e09df3de0d"],["/schedule/index.html","b6a52e1529cf84665b8ef03cbd6bda07"],["/storyAppPrivacy/index.html","4c3b1fcf95aca9ab3cf97c605803d9e4"],["/sw-register.js","5100763001b3ff06d63fc3b684be1003"],["/tags/Advanced-Classes/index.html","68882b2db52b10637f7593ba8750824c"],["/tags/Advanced-Swift/index.html","ca9d82732cd77bcb1f09e7a14e58e0f1"],["/tags/Advanced-Swift/page/2/index.html","df99f578d0fc8883ecca51dc8fdabd1d"],["/tags/App-Architecture/index.html","8ea8baa5cce9582c8c1c2229bc6ad7ec"],["/tags/Array/index.html","0a74dd944499bf2cc15fb2a03932d324"],["/tags/Arrays-Dictionaries-Sets/index.html","911e39a680d4e006b90e58f2651926f4"],["/tags/Authentication/index.html","d34d9d9799b2ceac2d02dda320bab16b"],["/tags/Build-in-Collections/index.html","fb809a870b8abaad8aa07c3160d7b768"],["/tags/Building-Your-Own-Types/index.html","29c9d9a6dd94cb201d790f5ef98f0ef5"],["/tags/CMS/index.html","d294c880db44946cea8db55b73117901"],["/tags/Classes/index.html","c49404ca6226462daf0b0f894f44d829"],["/tags/Codable-protocol/index.html","4b13cf4802e80dee2906592136d516fe"],["/tags/Collection-Iteration-with-Closures/index.html","5a13b73078b5de7dfe5bc36c7c45acd8"],["/tags/Collection-Protocols/index.html","72ad32a261ce76c288a5585960ade3b7"],["/tags/Collection-Types/index.html","5288d4450d7ccaa599892109875d7628"],["/tags/Collection/index.html","de861c4b6a49569d189bea8fc5969ed5"],["/tags/Collections/index.html","1d2cf577b552ce81a4343afd740cb182"],["/tags/Combine-framework/index.html","a8b8e36a6c02bd4b20edf2b8660f9421"],["/tags/Combine/index.html","12b8d03801daaa29b6a37cf7e02c1284"],["/tags/Dependency-Injection/index.html","89981cd4de6da349d6146d76346db5d7"],["/tags/Encoding-Decoding-Types/index.html","5a6ce68bc437616fc286512d2b1962ba"],["/tags/Encoding-and-Decoding/index.html","ec4a35a0e087dcc021b9e58e8d8bfacd"],["/tags/Enumerations/index.html","6c68cf724bc762f8a85eb509f72d6830"],["/tags/Enums/index.html","b88b1ced67d9ecef5481e7f9f1cd4d0e"],["/tags/Error-Handling/index.html","fafec3fdf11cf88bff7c0168d26c2ddc"],["/tags/Functions/index.html","0cae84873f6f1a57a68483142b067961"],["/tags/Generics/index.html","d750586d9e584633c81ce4688bd8ab53"],["/tags/Go/index.html","a1c9968853596ae68e3b2ee9a3c6452a"],["/tags/Grand-Central-Dispatch/index.html","9dc15e297f8e5c49f1b1cebe6d9043f9"],["/tags/Hello-Vapor/index.html","9fbf7f61e80a7120ca046d95f4180538"],["/tags/Homebrew/index.html","aee8dae19766f3b245fd06ce5f93e56d"],["/tags/Interoperability/index.html","008fce5aba9451469ff4630a102b113f"],["/tags/Introduction/index.html","94ef227ed365a55c366e53d2522b1a6d"],["/tags/Leaf/index.html","c0242e77650b1d03f88ed03e799481e3"],["/tags/Linux/index.html","60cf3d60ac32e26a8a99da4a5710ed97"],["/tags/Methods/index.html","3db8200f43c99c72a82afb32d0b00c95"],["/tags/Modules-And-Hooks/index.html","9fa4f4c9d3c7b6fd67f55886a2727891"],["/tags/Optionals/index.html","33fb39a64c9d2154334efb270c37f059"],["/tags/Promises/index.html","630da974e43b3d2099cfed1d85288256"],["/tags/Properties/index.html","fef16e260f64fbe79caf26c97663b27b"],["/tags/Protocols/index.html","71f61a961fc62996163e13c3139ddf21"],["/tags/Result-Type/index.html","841c9ae25910996448c4ca8152b332f1"],["/tags/RxSwift/index.html","66da8895081d45015bec3c462c83e28c"],["/tags/Server/index.html","58fba006043dc9399595eb8870d680d1"],["/tags/Session/index.html","bfb91ab0226babd25802614a4ec5563b"],["/tags/Strings/index.html","6cd213b34a1e3e8f43e028e13894d554"],["/tags/Structs-and-Classes/index.html","b5a4c0646ba2d6e1e722568d29d50607"],["/tags/Structures/index.html","db93dd71005723bf31399dc649f5b796"],["/tags/Swift-5-0/index.html","401bfa69b477469ceff59cf4f9f0cd1f"],["/tags/Swift-5-0/page/2/index.html","3e6100d6c8b7147e11ca6f85bc211e82"],["/tags/Swift-5-0/page/3/index.html","dcb966a1c25827026180aa457534d0fa"],["/tags/Swift-5-0/page/4/index.html","d01599081137e3bc48c2b679bed2e62b"],["/tags/Swift-5-0/page/5/index.html","97ae46670a170097df2310b821b5b114"],["/tags/Swift-Apprentice/index.html","aa8482825cfc37581f4c88570662e376"],["/tags/Swift-Apprentice/page/2/index.html","0de9959523dbd719b500b928090f35d2"],["/tags/Swift-Apprentice/page/3/index.html","ea817de3a06b4c75d6b1d3b49fca4891"],["/tags/Swift-Package-Manager/index.html","0860bb32af3ab5f1e6f0e2f23d0520f9"],["/tags/Swift-源码阅读/index.html","d154f68952c4f230789872e594f0ddad"],["/tags/Swift/index.html","d655021a4c3d4f28077ab8a3405d0e12"],["/tags/Swift/page/10/index.html","2413ef4b363d7e7322c3da5b3f63d5bc"],["/tags/Swift/page/11/index.html","79f033f83c81203e95709fea18265b9b"],["/tags/Swift/page/12/index.html","543419788757e55fb59244e80c3c7af9"],["/tags/Swift/page/13/index.html","7e5b6afbf41b28ce337fdfb1694423a0"],["/tags/Swift/page/2/index.html","8e8b001d24ceb7a870ad506234d0f4a5"],["/tags/Swift/page/3/index.html","77dba5b484724ffe782c98d60de2ad9f"],["/tags/Swift/page/4/index.html","3a10f1b3cd8bc997fa63de56f4cfdb71"],["/tags/Swift/page/5/index.html","5cb1a0ed473fd119e5a5fc66b846550d"],["/tags/Swift/page/6/index.html","3aabc0865dc1d61896f8230374d10d48"],["/tags/Swift/page/7/index.html","93ff712a13ddd1567e7d20a2c7e4fe3e"],["/tags/Swift/page/8/index.html","62daad14e9c8acfcea421e172ccba3b9"],["/tags/Swift/page/9/index.html","c1f2637bb9f3187a890ecf8b59cf5412"],["/tags/SwiftLint/index.html","f4bab6d640e0066570577c984cae9fd8"],["/tags/SwiftUI/index.html","b51639eacada8c6aeff87df959d31b91"],["/tags/UICollectionView/index.html","078713e25a56ec266056de077da81907"],["/tags/UIColor/index.html","1a25762570fc7e5fdd848698101e7946"],["/tags/UIImagePickerController/index.html","05d6229398927061bab1558f93fcdd90"],["/tags/UIKit/index.html","a823884885a8f4922944cb94130dc65e"],["/tags/UIKit/page/2/index.html","6e4185a67b7171eec24a0e31c96f2e7a"],["/tags/UIKit/page/3/index.html","7d79b752af40b197fbb0530c483dc794"],["/tags/UIKit/page/4/index.html","aaac7395a910acdaee8fe82642f695c8"],["/tags/UIKit/page/5/index.html","23c1f0546d3f4652841bd5e12548b06d"],["/tags/UITableView/index.html","f723cc1342b5fdd1733aebee5b4d5be0"],["/tags/Ubuntu/index.html","66507e5d6cc08b2d2a421cfe5d40c988"],["/tags/Uniquely-identifying-views/index.html","6287971923fd847f3326e22054382b60"],["/tags/VIPER/index.html","e70e95500a18cbb6aa89a8477a1b45e3"],["/tags/VMware/index.html","eaa915f8084e76846315dfb1cd66b0e1"],["/tags/Vapor-4-0/index.html","eaf56e6dac96d6a322d42d197f3930ea"],["/tags/Vapor-初探/index.html","0fe2a91fc95ce3500ac6edbe0375575e"],["/tags/Vim/index.html","d3e145af60c32dd3c848ca9ede0471af"],["/tags/Xcode/index.html","b2ec055a26d7e167322f53f2f5bf71bf"],["/tags/appleOS-Networking/index.html","9986d52a3940d568fd0eb11010945dfc"],["/tags/bugly/index.html","b4613b4659dcae7c3915cf9f5a1d1d7e"],["/tags/enum/index.html","753f6d2b48cf6f9be3a922f220dbccdb"],["/tags/git/index.html","a361d63c61d5efb01151565f34736f26"],["/tags/hexo/index.html","368edd5170a4f2ac15a6df1800f6bae8"],["/tags/iCloud/index.html","551d9c4c4da14ee661f02e0360496805"],["/tags/iOS/index.html","5d7c6fefa028cfa51ebfd5d7718d52d7"],["/tags/iOS/page/10/index.html","f5c250e69a333549fbac52c6ee973e0a"],["/tags/iOS/page/11/index.html","7833d01f3285d180545e99d5c68f4d4f"],["/tags/iOS/page/12/index.html","9ad18af4b7c91e0168a74f44c71719e0"],["/tags/iOS/page/13/index.html","41cff3f8ed1818852bba892468ef4700"],["/tags/iOS/page/2/index.html","64d61261bef91704491249ebe6f84f86"],["/tags/iOS/page/3/index.html","cbe0f8df95aed6344c8acf98be4c1778"],["/tags/iOS/page/4/index.html","143a2b7c647729ff3083af6f3f611dac"],["/tags/iOS/page/5/index.html","70131591de0e353fe0c0a3b52ba17737"],["/tags/iOS/page/6/index.html","aa1f9300ab4b9dcb8df112993a659dd5"],["/tags/iOS/page/7/index.html","5e9b1b4d68ac9075997832cec1ac30a9"],["/tags/iOS/page/8/index.html","dedf557a4652ed4e1438a451b37c38dc"],["/tags/iOS/page/9/index.html","af63f1f8a03edee9d40e772420757f4a"],["/tags/iOS面试题/index.html","1ac1e1c03df39f88efe13d5ceaddf987"],["/tags/index.html","9909af3c55e8707c61b3c51488eca4c7"],["/tags/non-optional/index.html","b7d038cdac5370731600ef51713cabe0"],["/tags/random/index.html","99daea7112eaf5bb3bbdbfe287fcb6b2"],["/tags/transition/index.html","9646be6e9b87daae2b73c85ad3ba1aee"],["/tags/三方类库/index.html","5938ae37c09d9fb5c90deaa3b1fd39dc"],["/tags/依赖注入设计模式/index.html","18946a9f6f67cabd5c15f73516c880eb"],["/tags/值类型和值语义/index.html","4934de98dc0bbb8935ab483b284a60e9"],["/tags/内存管理/index.html","9f03d65d1ddb88db8d76c6e99a6667eb"],["/tags/冒烟测试与回归测试/index.html","f7f2748f50df287648656e6e5e5f1782"],["/tags/函数式编程/index.html","53fa97719db0dac6c1dbd8c6b4e73b2b"],["/tags/创建博客数据库/index.html","1303cb1ea40c2344ec3af45b8ebcc529"],["/tags/初始化模式/index.html","4720ab51af3aee085ce88ebe8ea0009e"],["/tags/单例模式/index.html","f5e21d90e6bd813f885cf7f6e40ab1e2"],["/tags/原型设计模式/index.html","be6e62c33bb58ee110f9d9c5c36f0820"],["/tags/命令设计模式/index.html","08593439fd18b64382f740c626bb871b"],["/tags/基本控制流/index.html","39b8c5ca478b708387db5ff5d3023536"],["/tags/外观设计模式/index.html","bb3b26ae5bd162bdfbaba0abee65c359"],["/tags/委托设计模式/index.html","17e41899a4a2b128b4145a0857299037"],["/tags/子类化样式/index.html","9517e5834f46aa98d3608c7e7475a1a7"],["/tags/对象池设计模式/index.html","e0353430410afd0032a84196a7047993"],["/tags/工厂方法设计模式/index.html","757d66065d93cabc1e819b31422ffcf9"],["/tags/工厂模式/index.html","952881c5bf6bfe5d406eda07c5e9867c"],["/tags/工厂设计模式/index.html","1e069125e1f446ebbe67a5b8f43b140a"],["/tags/开发技巧/index.html","fd1d3f51207e12320307f1c4a9885ba7"],["/tags/开发记录/index.html","1e2e319f1e54f1beeabe3a041fe868d6"],["/tags/懒加载模式/index.html","a7b0eaa61866af508296ba02656182db"],["/tags/技术支持/index.html","450966dddb54fc8c27c5d45b581cb761"],["/tags/抽象工厂设计模式/index.html","fe1897bd42fd1ba10c7ef1ce0cb6e1e9"],["/tags/构造函数/index.html","d2296a960072178e0f415cb4c78ae95b"],["/tags/架构设计/index.html","7d71d596674f303de5c66cffa405391b"],["/tags/模式匹配/index.html","11389e662d357ed8a8b70989fa6442f3"],["/tags/生成器模式/index.html","db43245218c0d819471ca19fd27f4ed2"],["/tags/用户体验/index.html","980541fb82ddfd56a9581d2e46f0e692"],["/tags/用户协议与隐私政策/index.html","d6bb6d5a1febfbde8d5eeff385c4755c"],["/tags/类型与操作/index.html","d4428a215d047903d8ae41986d7c35d5"],["/tags/自动化布局/index.html","0a24940449d175a71ff14a2eae33ab74"],["/tags/自定义UIView/index.html","29d348e21aa2767bf339b35b015fc777"],["/tags/自定义转场/index.html","827cf7cdaba87ae726b40dfb5dcb0213"],["/tags/自适应布局/index.html","afbb8939687227eb1c7da07941d2bffa"],["/tags/表达式、变量和常量/index.html","3b7dd066e0745e4984c1fcba88b62b58"],["/tags/设计模式/index.html","54f1d60bd1f79bee5fbb65e7b4b45df7"],["/tags/设计模式/page/2/index.html","d234746572e6d0b274411f7fcd59576b"],["/tags/设计模式/page/3/index.html","44478844ebf8e77d7e41bb57c4d4d848"],["/tags/访问控制和代码组织/index.html","138482e88289532f617f105969102e10"],["/tags/运算符，下标和键路径/index.html","c640e7ac5f61e7816980eca8cdd35479"],["/tags/迭代器设计模式/index.html","2d0984a80e0367cf5693e4318d94bad7"],["/tags/适配器设计模式/index.html","3e575db6a0a2c49e6dc11b1f6aabcdc8"],["/tags/错误处理/index.html","080968f27108209884017f2ee7c2191e"],["/tags/静态工厂方法/index.html","4cc8aba7e9c0a354aab9009874f91152"],["/tags/面向协议编程-OOP/index.html","40b99515878fb4cdba2de8403234a879"],["/tags/高级主题/index.html","1287e82d076b4d648488e1bfe6719946"],["/tags/高级协议和泛型/index.html","279fff08bf5741f2fede98bbddbf4cbf"],["/tags/高级控制流/index.html","6354e06d5e7b646145851d52f3e47d20"],["/为iOS应用构建输入表单/index.html","35dc49a7cf251c6388bc17d351e1f5bf"],["/产品开发的幕后花絮/index.html","16e8f5c374c342900b8e2bd18b10110c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","155056efebc08e955edfe9a65f4de362"],["/冒烟测试与回归测试/index.html","4738d79cd90f1d4fda7f05cdbade2b87"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4f302173be8c7faecfa4163196cbeed8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f1d5aaff8caef469a0356824d3ffc6c8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2c6d91900a3879627e34ba7e6d605c0a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","86c2529d88579c85fcdafb3c124918ad"],["/在Swift中创建自定义集合/index.html","d4a1bb126a6b03edf77ddb3c763d6953"],["/在Swift中处理非可选选项/index.html","ee4de7372f0482fa3fa18b4f8f8814d5"],["/在Swift中生成随机数/index.html","b311dc2d197153512be70affcbdeff9c"],["/在Swift中重构单例模式用法/index.html","444d45daed4ef50e032d9c824fe0f257"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","138091721aa34ef6db16ea0561158642"],["/如何为VIPER编写服务？/index.html","edfea933a655390df3c894ec1641ac8a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","65d95c01a360c8372959773f334995a7"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3955ec9bc9664398afe902b91ddc96a2"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c7531dcff7eaa4abe2acd591f30d298f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e02713366396177ebdea60db749f494d"],["/掌握VIPER架构/index.html","4af5f648fa5acee57da532865f8ffb25"],["/揭秘 WordPress Hook 系统/index.html","00b66ec8f6c2105260758c764efe7f60"],["/比较工厂设计模式/index.html","6dd9afd24df11a389b024051e4444480"],["/深入了解Swift中的Grand Central Dispatch/index.html","d56719a51553e05452718b90eba8b078"],["/深入研究Swift框架/index.html","6150ca5cd750c2c089d7c3d5faade3a1"],["/美豫直聘技术支持/index.html","540ecc635ad9142abe4be3c087bbede9"],["/美豫直聘用户协议与隐私政策/index.html","bed69327582f4cd6ca6f79b8b93cade3"],["/适用于iOS开发人员的VIPER最佳实践/index.html","1a314ab99a28bc7440443ec1886db949"],["/选择Swift而不是Objective-C的5个理由/index.html","79e387ebecfb63b429f3fce3c384e977"]];
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
