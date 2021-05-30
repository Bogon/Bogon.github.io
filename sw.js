/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","430d8bc047405ebf8b276ac35ae5f289"],["/2020年iOS面试题总结(三)/index.html","b05ac1b19fa2f2a7bfa4ad2efd533b27"],["/2020年iOS面试题总结(二)/index.html","a30eae5824ea25ed0941d252decd3069"],["/Advanced Swift系列(一): Swift 简介/index.html","6f269cb6b3cab9122c034a9f3cae1521"],["/Advanced Swift系列(七): Strings/index.html","9b968b8f78245a8b325dbd5881cf1ad1"],["/Advanced Swift系列(三):  Optionals/index.html","6ffd66fb65e9fc43801f3d71ef416b10"],["/Advanced Swift系列(九): Protocols/index.html","cf330119775ac463e99effa6c2f37814"],["/Advanced Swift系列(二): Build-in Collections/index.html","955cf62c44bbb12ff57d97719296c035"],["/Advanced Swift系列(五): Structs and Classes/index.html","d22612426604ce088583c3d809ed89e6"],["/Advanced Swift系列(八): Generics/index.html","98ccd5f543a0bc4bb5848be1fc11b177"],["/Advanced Swift系列(六):  Enums/index.html","2926f2b9197f741c9a7a71fd72e303c9"],["/Advanced Swift系列(十): Collection Protocols/index.html","eef2c0528a7807671d2b4c58b6ab68a2"],["/Advanced Swift系列(十一): Error Handling/index.html","ce02ac941f7297f43af3638653a7724c"],["/Advanced Swift系列(十三): Interoperability/index.html","7c85cbad6fabc4e7d01d184a7be4c3d2"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1bbeac79b898535f9ed46f13dd968d0f"],["/Advanced Swift系列(四):  Functions/index.html","4176f93e350e857d95e840c11cd3a629"],["/App Architecture系列(一):  简介/index.html","27422f4fc08f76bf6a060a7447fcec4b"],["/Functional Swift 初探/index.html","1a729888e5b4878d3190f4500708f648"],["/Git 使用小技巧/index.html","f3686884cc4fb682d4568d7baa04af8e"],["/Go 基本语法初探(一)/index.html","5864ac7c1612fd79953486a66fd189a6"],["/Linux VIM 命令及操作小结/index.html","1b3b0bdb461cf73e90e51d6216c4845d"],["/MySQL 基本操作/index.html","c2c7546c5656ffc06bbe978a7cf6a195"],["/MySQL-列类型和数据完整性/index.html","c7b00862819801752173fbf6d76bcffa"],["/MySQL-数据库设计和查询语句/index.html","895f30bd79355f7b5d26ccd0342b90bb"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","82c064ffdb02daa4c5f6caafbc594572"],["/NSCODER和SWIFT初始化/index.html","1d3c9b073fb4b3bb4657007ca2a8b4db"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","b722b987c6b4f446ef9cc8488c9056e7"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c0f651d918ae86d20970393f09b3c55c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","4b872d99bc6c3e93f702ff29131bda89"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","d3c2f0bfe81f30e99e5af9c4d7982e22"],["/Sqlite 使用Tips/index.html","e6399a6a6f41cab43aa4a9c6ab542ef8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","aa0223cfdcaeb54907eaed2917df9a01"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8ed3f6cc338bd61c7af7a362bd5ec0d6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","d23a110dd36b0e7e061c12920479224c"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","687067bbd4d87acfa04f5a32febace25"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c31cc043a16e7c103f00322a02b6d22f"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","ca0e6c95a191b0e8055ddec45167bad7"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","21864508c69394e4211ab000e07598e8"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","fb39d14ca1e5b2694dd6209be9b68a73"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","5d79f994c26507580c5d11506f5d9772"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","529b6b094bf380271f9d13a73252f5b0"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","125be668037f37b0e54ea6b4cdd5e6ae"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d713318d5c99b632abff910439fddf3e"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b3fee1cad77fb4cec42a1bd69606cb14"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","486f4e09af5e24b26de3290a3d13d086"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","4d9abcb39decddecfa716b19f2ad3e92"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","9f4177caf8443fd8fafee948444eae0d"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","75cab7d41efc871b53d13504556d3a3d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","e5ce068846a7ef69b4d26f3cbec7ceb2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","324e81e44015747361b432bab5a1e021"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8c1bb3d2dc67578b65b58cecd19afad9"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","176aa1babcd1baa67c7c43a903fe9c9d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","cb82e98c121e196de96f8e8996b8cfb3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","a87af1872b3cf23609291abd1cfeab12"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","3c77fe219a2e1349fd00d5208a195fb7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ce5b366e53050fe6f9f4942dbb034030"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","6159df6d481c7cc2e481bcfd3b508a1e"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","5f54deb4a6f9cb8d3e0ed0270c17d82a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","da45bbddf1cbe4344a4ce98daf7a34cc"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","d6d461fbbf1d42a15f2e1d72679714c0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","459de65ebc43f9be82a3e6f8a6c90a36"],["/Swift CompactMap vs flatMap：差异说明/index.html","0865c7ffc922c7af08e3eeb8ea75844b"],["/Swift Grand Central Dispatch 深入实践/index.html","f5a96eebc35852fe3d4f8ecac9707cfa"],["/Swift Lazy属性初始化/index.html","30644a3f1064d9b3b9689e258e4fc900"],["/Swift Promises 初体验/index.html","873ca4c002b94aa34f340d9a89fc7b3f"],["/Swift Promises 探究/index.html","eebb67ebd6c41da97b5cf7f02cbb5038"],["/Swift UICollectionView使用指南/index.html","9f3c03a982f56b4c1704489be3ef7c22"],["/Swift URLSession && Combine framework/index.html","539558e163ebd0e064b7a6d68e3c2934"],["/Swift tips/index.html","1294870cda974408a8f4c33ae077ea6b"],["/Swift 唯一识别的视图/index.html","97e1f1e8ec6f04714ac020ab580f27bf"],["/Swift 如何学习现代UIKit？/index.html","6cf98e17f818d19571cd7cbd254e3711"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e6760c097ee6486eecb4e7c20ad378b9"],["/Swift 用 compactMap 替换 flatMap/index.html","d09ea3cc17c24b6d0b0ebb8c11e573fd"],["/Swift 选择和播放视频/index.html","0363b08fc2d44d25e78d88d7507ed5b2"],["/Swift中UIColor最佳实践/index.html","c2ff5ce845e5fbeb12ca9d59373e4d35"],["/Swift中快速简单的工厂设计模式/index.html","f47b59c2380a26828a28f67200d50e7b"],["/Swift中构造函数与静态工厂方法的比较/index.html","7ddd33c3423faef7b876b8cb538f22f4"],["/Swift中的UITableView教程/index.html","2a3e12eb8141e341d50493462bb91b4b"],["/Swift中的懒加载模式/index.html","39518e66f69332f35ecbf0acc1019107"],["/Swift中的模块和挂钩/index.html","d17d6fe075e12f4201d27960deb372db"],["/Swift使用布局锚点添加约束/index.html","6e79483bb5f8982e3a97debf2f622132"],["/Swift依赖注入设计模式/index.html","6e4cea80c1697ab43cba701b68a55de5"],["/Swift关于Dependency Injection (DI)/index.html","7af4388082b202f8c1a5f69c07879daa"],["/Swift初始化模式/index.html","3a16f163b0fa356b8c6b0eed3067b33d"],["/Swift单例模式/index.html","d1e1a5ee3fa9396bfb7deb50c9e72a23"],["/Swift原型设计模式/index.html","b7b77be1580a5a3db0e1b0eb41e1817d"],["/Swift命令设计模式/index.html","b265d94414b79edc5c77057dc3b6ceb4"],["/Swift外观设计模式/index.html","09cdf5d51d49039d78c0cd34b5e0618a"],["/Swift委托设计模式/index.html","e55be1cfa6eef1d66b87e08be5a6bfee"],["/Swift对象池设计模式/index.html","8f255ca5e60eef2d373a435619e0e1a8"],["/Swift工厂方法设计模式/index.html","65f9a41b8bb2484bea8da7628c1fecac"],["/Swift带闭包的懒惰初始化/index.html","f141cadfbbb385fc20468781c3798663"],["/Swift抽象工厂设计模式/index.html","c8b50c8f2e0201e1db4546ee428fe85a"],["/Swift掌握iOS自动布局锚点/index.html","51a08bcadfb2aa53ef3eaa7c699d9cae"],["/Swift支持旋转的自适应单元格/index.html","bfbe097054b428f6b84aedf44c7911a1"],["/Swift枚举值/index.html","27b7fa3a9828bbc5302e3bd4ca98873c"],["/Swift生成器模式/index.html","ca501e5ebfe2a3ab2767fd0cdae647a9"],["/Swift结合Xib文件自定义UIView/index.html","6e63a44d5e4011a28085e583414fd128"],["/Swift编写的20个iOS库(一)/index.html","69628b7d56590b9913f00c996e62f057"],["/Swift迭代器设计模式/index.html","50bf23725cb457a5916daa67d1da2634"],["/Swift适配器设计模式/index.html","d661a760b09f6430b459d64c08008fc3"],["/Swift静态工厂设计模式/index.html","ec657d500ec5a13ca1d4951ad47c10ea"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f10f1261375269f24f8a9f16b32f04db"],["/UICollectionView data source and delegates/index.html","03754b57054b996c582a9d6a248fbcb5"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","acb7fc679e9038d9c3d3cc74b43abbd8"],["/UIKit初始化模式/index.html","c8186cf35c2f9827b554d62b070c6018"],["/Ubuntu18.04替换国内源/index.html","027f441b2531a4eb0dccdd9f9acc7628"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c68064bfd1c83d8378f6651bbc349b96"],["/Vapor系列 (一) :  Vapor 初探/index.html","d922859a3fc14a4396584316f49cd6b2"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","3881e84e08ab10f534b761e47c13d7b9"],["/Vapor系列 (二) :  Hello Vapor！/index.html","69e5af9d277b5aed07e2c4f6555ef740"],["/Vapor系列 (五) :  使用session进行authentication/index.html","20e18a683c934141b41c1f6922a06c9c"],["/Vapor系列 (四) :  创建博客数据库/index.html","6fd7c9ba39dafd722be3396335b2457f"],["/Vapor系列(六): 徒手撸一个CMS/index.html","27647b6d89012098f9412c31017e56b4"],["/WKWebView与Native交互注意事项/index.html","96280e8f6c02b0d0289c1319b4d2e71c"],["/Xcode扩展/index.html","ed315c5e5c655797ab304bd4ef6d3cb8"],["/about/index.html","a8d88d7355e69bc84e216574397c48fa"],["/appleOS的Networking示例/index.html","7fcb5b9bb9053924edc53c5d1414d9b6"],["/archives/2020/03/index.html","ae05f102697a54649210540ca2c95a4e"],["/archives/2020/04/index.html","e6e1e6deaf5d65c1c3469bfc0760834e"],["/archives/2020/04/page/2/index.html","ef5c6fe9e29b89115fb587836c86358c"],["/archives/2020/04/page/3/index.html","124aee16da88cce4368737bceaaed6ca"],["/archives/2020/04/page/4/index.html","205384b902f355fadc72828b9f9a5265"],["/archives/2020/04/page/5/index.html","9ef533f9b064bdd683faaabae871c7b6"],["/archives/2020/04/page/6/index.html","1c736a8ee0943d79ec24ab4e4873839d"],["/archives/2020/04/page/7/index.html","80ccd755e4516b811c9bddf61876e364"],["/archives/2020/04/page/8/index.html","f1a1e6a6086c10534deeb7f8d49205a3"],["/archives/2020/05/index.html","60b6306de68885e8daafedb923184051"],["/archives/2020/05/page/2/index.html","95f2cf7e5ebcf9cb1bd01e914ee5015c"],["/archives/2020/05/page/3/index.html","25bd962cff0dcd1611f916f52b458cc8"],["/archives/2020/05/page/4/index.html","ee85bb01bd687c49673a521499013f0e"],["/archives/2020/05/page/5/index.html","ee6effa82a7e31e10cd640c8daf71def"],["/archives/2020/06/index.html","4455d4be500aaa6ec4779d4d3594eba4"],["/archives/2020/06/page/2/index.html","0e9f0e51ceeddc69ebf51730b4b629fb"],["/archives/2020/08/index.html","ffe2b8f1150d5e38235ed031fc8e8240"],["/archives/2020/09/index.html","d840cf28e1da107a0440250a92c5fd49"],["/archives/2020/10/index.html","cb9f758b6bc21b24b81ab81f175ceb43"],["/archives/2020/11/index.html","d7df7436722bdd34248b54575732bfa0"],["/archives/2020/12/index.html","458fa216e25f32b1a877749273799f47"],["/archives/2020/index.html","26b594140210069cba0510ae50204624"],["/archives/2020/page/10/index.html","8889901b11ff5d06b27f1361867109ae"],["/archives/2020/page/11/index.html","fe71b688715fd531395d8e4b417a4557"],["/archives/2020/page/12/index.html","85a64314819b055d013afa16db0461d3"],["/archives/2020/page/13/index.html","2018e88ecc0066e8e209c16a0908b1bf"],["/archives/2020/page/14/index.html","60b55eea73c331ee074be595579087d8"],["/archives/2020/page/15/index.html","47a57e51fed485ff782fa491f3a83abc"],["/archives/2020/page/2/index.html","1e3e11a9366a12a48cf1e1eef078e106"],["/archives/2020/page/3/index.html","b7a4e9cd65dc97ea2deb4d1903be8987"],["/archives/2020/page/4/index.html","b2b8f1e5fda95dd2905c7dc71e8cbf54"],["/archives/2020/page/5/index.html","41481e8125780d8d7f719a9a230f13e9"],["/archives/2020/page/6/index.html","9d617d789385447156d0fb3e764485e2"],["/archives/2020/page/7/index.html","8cb46aebd4e2d37da6bef83215e1c02a"],["/archives/2020/page/8/index.html","2fa497122898f0f93ff85650c29ca28c"],["/archives/2020/page/9/index.html","19f2b97207d54caed6705ab8bec25de5"],["/archives/2021/03/index.html","99430287afcc661864f48b75b2b3c1df"],["/archives/2021/04/index.html","e236f1558e96ea3ffea5f63334c8b8f4"],["/archives/2021/05/index.html","1fbae12cd497371c48b2620375f09ddc"],["/archives/2021/index.html","5af4850d6b94a400e1fdcf12fcf46a9a"],["/archives/index.html","5d7950e547566b83f9e2c01755ba2d89"],["/archives/page/10/index.html","6e69caa1b4a0d6ebde2bc3925ad7a176"],["/archives/page/11/index.html","66a126f517256f0223f8e4daeec25954"],["/archives/page/12/index.html","f1729a4e51ed44900d110dd847e1bb65"],["/archives/page/13/index.html","37598c842307b71bb738e04c3aa1318e"],["/archives/page/14/index.html","4377e03d1a09137e0fc6b5c13b75f1e9"],["/archives/page/15/index.html","4cd7f3e1cc406d05ae5eb0bf8f0cf625"],["/archives/page/16/index.html","590cfd2311bcc3781906646ba1c5d8ff"],["/archives/page/2/index.html","b0da82ff4c97a0a79baa0e5b4701c650"],["/archives/page/3/index.html","cac190cd80dc511916df77df62aca546"],["/archives/page/4/index.html","e0a8d7a1f616e21fa86ccdffbe610b4a"],["/archives/page/5/index.html","0445e5c210139d7af96a7449a7266e5d"],["/archives/page/6/index.html","214f614deb75f5c45c987f2db59c0bde"],["/archives/page/7/index.html","e567ed44d1d7cd2b76295504ff044226"],["/archives/page/8/index.html","56c58d16a5477368ead5a5447e507a61"],["/archives/page/9/index.html","f20a9961bfe3b8e36a9ae7446ebc2a45"],["/bugly 上传dYSM文件小记/index.html","77dac922535d1c1dfa52bebe99557f15"],["/categories/Advanced-Swift/index.html","667d9bded348cff7f18ef0e870cbc35a"],["/categories/Advanced-Swift/page/2/index.html","c57d9ba6bd8e2cb2a7636e3590e0dc25"],["/categories/App-Architecture/index.html","3288cc014bed796512afbe87bafd2b8d"],["/categories/Array/index.html","631bbe9e7f239d783b9c26b453414c3d"],["/categories/Codable-protocol/index.html","35bddef69ec5e6f0b313d958ac58c1b8"],["/categories/Combine-framework/index.html","6399090038cf5aab8f31b554f07a5d8a"],["/categories/Combine/index.html","3180cd1035dfb71537e00e272c71c0b2"],["/categories/Go/index.html","81910568530516d2039d3d13e864674e"],["/categories/Grand-Central-Dispatch/index.html","1ab678ba1240242b1d0698437ba73896"],["/categories/Hexo/index.html","a528163ea2a869e872359d8e4d302693"],["/categories/Homebrew/index.html","eed9b1d6480148608e85de4eaeee2c87"],["/categories/Linux/index.html","e6ce0a7a155380314ef1b2fb32e5d652"],["/categories/MySQL/index.html","a6345f5e8b198ea14cf7e9d35bbda410"],["/categories/Promises/index.html","3886ddf16b747ffda2652ba44058d4b4"],["/categories/Result-Type/index.html","e8d89dfb1ded30ed84cd9ce176cdd614"],["/categories/RxSwift/index.html","d26fdf0e2081e0aba12d68fc7652c2ee"],["/categories/Server/index.html","1d923cfd8328f398ab5b9f49594c60d9"],["/categories/Swift-Apprentice/index.html","bb3e7c4bc903dacfad2ffca16adca0cc"],["/categories/Swift-Apprentice/page/2/index.html","fcfd3f7b4fe35fd97feb931b2f3c270f"],["/categories/Swift-Apprentice/page/3/index.html","52175b445f014173f31a7efadff5d3ff"],["/categories/Swift-源码阅读/index.html","cbd9c62642059cd1b79986b65ee88787"],["/categories/Swift/index.html","131959d4c896fe53a00c089e52ecb302"],["/categories/Swift/page/10/index.html","2b965113e4a17e36aa47e9b1ca135bc7"],["/categories/Swift/page/11/index.html","65c97749a4c6ac105d6e898f6b48144e"],["/categories/Swift/page/12/index.html","5918b73fbec2d654e72fd4592a117646"],["/categories/Swift/page/13/index.html","b299b188246954ef59e680746d90a4f1"],["/categories/Swift/page/2/index.html","7b55bd68ca4cd45a6cc74bfbd2bb257d"],["/categories/Swift/page/3/index.html","6c041c5ee5ed93f5ac477d81cbc54c23"],["/categories/Swift/page/4/index.html","cd8855b6c5366b0598b976c54f92d6a8"],["/categories/Swift/page/5/index.html","27725e22a338f0a2a3d166a371c90b89"],["/categories/Swift/page/6/index.html","9f731ee9f7bd23c40ed5cb4e415f00c9"],["/categories/Swift/page/7/index.html","f8163f84106658950cc3ed140391bec9"],["/categories/Swift/page/8/index.html","96d119fe01a0ee4d8a00b84e8b695fb3"],["/categories/Swift/page/9/index.html","53c9644097326822362389ef6a7683a2"],["/categories/Swift5-2/index.html","5f2fe25524dd58f62a1126dc9b843734"],["/categories/SwiftLint/index.html","03936d9467d276710c7d74d048382325"],["/categories/SwiftUI/index.html","238638f4b171910ed5aad0d090769e08"],["/categories/UICollectionView/index.html","5eab4dd9710b46169c1d70a9c33578d8"],["/categories/UIImagePickerController/index.html","a8595f131e6cc30e17d4252691219b79"],["/categories/UIKit/index.html","c20d6ec1fcb455b1d8e655cd8beb0f60"],["/categories/UIKit/page/2/index.html","e2a8e7475e046d93e36627133f0f654d"],["/categories/UIKit/page/3/index.html","7380a0d1dfc02d21a95af1f011f9ce4c"],["/categories/UIKit/page/4/index.html","4ac141ddf659c91622c66af91aa4c5f7"],["/categories/UIKit/page/5/index.html","ff8cdf3466c229706c4c616f7bf2f2b0"],["/categories/UITableView/index.html","6a3d6eaa32c6fc5b8b369f7e3c162279"],["/categories/Ubuntu18-04/index.html","a2a30fda7214cea95efc0ddaa8dd6a43"],["/categories/Ubuntu软件源/index.html","63cfe33e819ad6930d36fb5a071eecfc"],["/categories/Uniquely-identifying-views/index.html","09c1d601b7a62b4463a564225b0e4731"],["/categories/VIPER/index.html","6e64c0a799e8ad25b73ed9e4c7a5a863"],["/categories/Vapor-4-0/index.html","73e39ba11e65c22cb4ed13498f3d6672"],["/categories/Vapor4-0/index.html","bb6cf8ddbb054d4ca6852339a7b97cb1"],["/categories/Vim/index.html","b3df86f79054a5aae42709f457a82436"],["/categories/Xcode/index.html","66fa33235dd67589a0dfc85de1727fba"],["/categories/appleOS-Networking/index.html","f95c6e0996edbf7bbfc5773c45590f98"],["/categories/bugly/index.html","81866e14bac6f82f71052e2d759944a2"],["/categories/enum/index.html","9068524549b8080d1f9ef685a8e01e0d"],["/categories/git/index.html","b650923f9e1de66fdad4369d241eddd9"],["/categories/iCloud/index.html","ec2a8325c50e6e0a591affb577f4ff8e"],["/categories/iOS/index.html","d7e8c89f7b92252a8aa4da6ea17a3a9b"],["/categories/iOS/page/10/index.html","aa5ddb0f858308eb3331e404070932be"],["/categories/iOS/page/11/index.html","6efb353ff0bc107781c79273bd27075d"],["/categories/iOS/page/12/index.html","eb80d8aab9d22ebfa939a8c8c5561580"],["/categories/iOS/page/13/index.html","ab8af1eea33600647cc9c1676a32295e"],["/categories/iOS/page/2/index.html","fdcd02186c79f20ab978e44ff541752f"],["/categories/iOS/page/3/index.html","fb6ba3e3f9886aaa90d1b22a23ab5534"],["/categories/iOS/page/4/index.html","c6fd4a1d6dc5b24b2a97433134d15ddc"],["/categories/iOS/page/5/index.html","3d6b70ba672be950fbf76f55eab82fb7"],["/categories/iOS/page/6/index.html","2eb74b10f13c02fee57fb809221861a4"],["/categories/iOS/page/7/index.html","421e80c0d42b31b3cf9e600aed639740"],["/categories/iOS/page/8/index.html","7626515d11789b793f10bbee204c57ac"],["/categories/iOS/page/9/index.html","395881be67437626b28e4760de319fba"],["/categories/iOS面试题/index.html","78d74dccebc38dd23d0a4604d2282066"],["/categories/index.html","eb9407a61f91bf5c8242b08c96a89261"],["/categories/random/index.html","bfb64937d0c35cbc13a2cec69ca444c1"],["/categories/三方类库/index.html","cd2af639c89f8604e1844110c5b92a5f"],["/categories/函数式编程/index.html","8b748c4412f440b5625bdc5814f22909"],["/categories/子类化样式/index.html","14c7a5200008aa91da3c1b80eb192e42"],["/categories/开发技巧/index.html","a1e31a065d489023e0d032296498c5b3"],["/categories/开发记录/index.html","076c75c9f935d721e001ff8ef593f1b0"],["/categories/技术支持/index.html","cc1b900b2be39d4d0e0efbbaccc7cdeb"],["/categories/数据库/index.html","e45a2d0d4d0fc963be426bc40bdf31d9"],["/categories/架构设计/index.html","1dafcd101c5d73de3f36727c679c14cc"],["/categories/测试/index.html","e1e681bdfdc393dcf749ed8817c02b72"],["/categories/用户体验/index.html","accb2626b5e780f6abdd1c3f34d4b0f2"],["/categories/用户协议与隐私政策/index.html","d86d7ca96ea7197bcab29bf9a130e430"],["/categories/设计模式/index.html","7a9e5230fdcbb41bc298aa54b8de61ab"],["/categories/设计模式/page/2/index.html","5a04a50cd7ae561315b78a8e4a55ffab"],["/categories/设计模式/page/3/index.html","57b25fb1ee867f185c39f006feb2a365"],["/css/main.css","e05170ca8372fbcec48466a5f9b14488"],["/hello-world/index.html","3608494b20c76307e87bff5b852af30e"],["/hexo部署失败/index.html","3536b6d11106c60e78a543f47305d1f8"],["/iOS VIPER架构深入实践/index.html","6fbeb72f79ae1d714b90de92d15e0e07"],["/iOS 自定义视图，输入表单和错误提示/index.html","7e74163feb9c1cc9f1739930cb4a69a9"],["/iOS如何使用iCloud文档？/index.html","6c5754211d0fc39f8b0da57d671745df"],["/iOS子类化样式/index.html","390413bce69dcd02ddd226a1701e8cb6"],["/iOS开发记录<一>/index.html","99610e25bbe546f739ff349307d4a1af"],["/iOS自动化布局编程/index.html","cf198983427d047ec837d14d6540f11d"],["/iOS自定义转场(By Swift)/index.html","5a0d708eb62d28a08f9bf05f125af83f"],["/iOS项目架构：使用VIPER/index.html","3957173bfeaab73e89e63b016721d139"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9ad9fdbaab96aff278e16e8f1613663c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a1c50c78d987153d3a5e34f5b3605969"],["/page/10/index.html","2829ddab875802a8d328b46e01161e78"],["/page/11/index.html","06efbd47b87ca30f8b42b8e733eae833"],["/page/12/index.html","27cab16c602cf8308f6cab44ac1c6d94"],["/page/13/index.html","01761f8c9ea9172ee6b4f541b81e520f"],["/page/14/index.html","0b556b436ee37bf83cf754c71d592483"],["/page/15/index.html","e5e1cdee30f8229074ed130acde3aa91"],["/page/16/index.html","f6de900b1221ae53fde1d824334852b1"],["/page/2/index.html","354f811a2f0345e845f552f42cdeb273"],["/page/3/index.html","c319143968a90080e8eaacd1e0f3e600"],["/page/4/index.html","acf066b113cb3b3f76567cd8df6b7455"],["/page/5/index.html","0e423b0bff9bc0968034413f8fbf0a7b"],["/page/6/index.html","8c345c33304b14fdd92081fd1006648a"],["/page/7/index.html","08b72b11e2dda43c00e9ec57c30cf4c2"],["/page/8/index.html","b86816ca120f36d8326c1578af3cbaf9"],["/page/9/index.html","c359d11d0c0d4d2ff87f345fdfc841c5"],["/schedule/index.html","69bf6f2c9e3fd01edad3718e53295bbd"],["/storyAppPrivacy/index.html","95c6d0dc4998c4558d33828c15ac600c"],["/sw-register.js","f2fa466fb1b4c602afdaf4eead8b43eb"],["/tags/Advanced-Classes/index.html","829f2c7c0f7965d44b5b726a6509dfd4"],["/tags/Advanced-Swift/index.html","ea878d28e69560fddefb342080fcb938"],["/tags/Advanced-Swift/page/2/index.html","a3549902673d3605acb378b8f6fd185e"],["/tags/App-Architecture/index.html","d2527bd9ed5ad047e9d43d335f81f228"],["/tags/Array/index.html","11a1208ffc87fa1a815640001db02716"],["/tags/Arrays-Dictionaries-Sets/index.html","7046c09b4e2dca8ca6a14ba9a23959c3"],["/tags/Authentication/index.html","08835fc49ae00ccc807e12ebca49bb97"],["/tags/Build-in-Collections/index.html","6d7b10d7387728ed5158f95c4a43207a"],["/tags/Building-Your-Own-Types/index.html","36cbaa20cc5dd87e7f137c13072f0349"],["/tags/CMS/index.html","bb7399bead3ae702ca2ce7230f957889"],["/tags/Classes/index.html","911a87fe24656ef89d6cd4b05e382a33"],["/tags/Codable-protocol/index.html","3a195dfe4086d486ea9c2bac9092632f"],["/tags/Collection-Iteration-with-Closures/index.html","a861f087782db9f8a5b4d7abdd038b17"],["/tags/Collection-Protocols/index.html","07c11ed7d5889b4b836f89b9f9aefb51"],["/tags/Collection-Types/index.html","8be5b2fa78f632e65b82e532f5f1f55e"],["/tags/Collection/index.html","a876dfab218b6d1cf292d5dba2d88e0e"],["/tags/Collections/index.html","e58f1b4b4c62f52b6b7c28bf5bf7a3c2"],["/tags/Combine-framework/index.html","3c3a5f14596c87a8e61512a6e3d922bd"],["/tags/Combine/index.html","de7bbf61cfcc65ff382da37f7e48c738"],["/tags/Dependency-Injection/index.html","a419c1eba2eeeb6bc085e0c56fb38c32"],["/tags/Encoding-Decoding-Types/index.html","90e89a8ac5ad3af3a66e316abb3df2c0"],["/tags/Encoding-and-Decoding/index.html","95fabf9e53859eb7ec928055c49c8ea3"],["/tags/Enumerations/index.html","dd00f3e6d0a801353f478eea5c592ed8"],["/tags/Enums/index.html","9663ef3218d7c38840647045c0abfe7c"],["/tags/Error-Handling/index.html","e654baad53dc82c4092067e78079aaf1"],["/tags/Functions/index.html","559f5aaf7ffbe356f5cfe9add77f439f"],["/tags/Generics/index.html","6536e9562a09d7de70f8f2f9bb499a17"],["/tags/Go/index.html","62b4786b646f74d63aac93a22400b78e"],["/tags/Grand-Central-Dispatch/index.html","c70e82413af1294eb7850fa273e3d480"],["/tags/Hello-Vapor/index.html","b0b77d6cd3298b28149484e37293d9fa"],["/tags/Homebrew/index.html","f6801d8819caac9207209781f16fd6e4"],["/tags/Interoperability/index.html","42aa23c4d558d5bd49d8f8364f23a86c"],["/tags/Introduction/index.html","6aebee8b3dd62ea6abcc88817ba98954"],["/tags/Leaf/index.html","15fb05313c83b6ca686851a1c7c87f8c"],["/tags/Linux/index.html","6acabb58417a3161623f417e35113f0e"],["/tags/Methods/index.html","b13bd889b54717bce7a3c9d5f4216b97"],["/tags/Modules-And-Hooks/index.html","30fe2a7ee5a20c22e03adf3375e3e0a2"],["/tags/MySQL/index.html","a0c70d0892496fca09cc5b067872cb5a"],["/tags/Optionals/index.html","17d0d0f07efe171142800ae161abc456"],["/tags/Promises/index.html","769204d780f185ff7cd1280e14fc97d3"],["/tags/Properties/index.html","92118c5199bc7313787e16c8c3b93ef0"],["/tags/Protocols/index.html","07306bdf53b950402cba055a021b0354"],["/tags/Result-Type/index.html","a66d775a04e048371ce6306a1954a8c8"],["/tags/RxSwift/index.html","a7f82139e396f19c483700305c2e94fe"],["/tags/Server/index.html","6b54b9eb69651d17f6e9591555b0b643"],["/tags/Session/index.html","d6fe975937166d70c3e067aab4df0885"],["/tags/Strings/index.html","1ad826c32b455952b230980af50718d2"],["/tags/Structs-and-Classes/index.html","13b29a5e3405ceeaeb9ff78277716780"],["/tags/Structures/index.html","fb360b305ccbf25c24bdef56fc740e99"],["/tags/Swift-5-0/index.html","102ac2f3fadc11450e8487c98ca7cbc5"],["/tags/Swift-5-0/page/2/index.html","7a93724c1933dd88c086fbdb58b4f08d"],["/tags/Swift-5-0/page/3/index.html","0615dcb4aaf7cbc763c6029f8d35707f"],["/tags/Swift-5-0/page/4/index.html","35ed65d406a65d75a70d72b376077cf8"],["/tags/Swift-5-0/page/5/index.html","8439e91cce6924c3d75d9b9c05e178e3"],["/tags/Swift-Apprentice/index.html","ba4236c664384a211c4cd5734d26656f"],["/tags/Swift-Apprentice/page/2/index.html","58907c16f3c611a65631e9b326ae13bb"],["/tags/Swift-Apprentice/page/3/index.html","373f25ac7d7aed20e77942ecabf931cd"],["/tags/Swift-Package-Manager/index.html","fd1503c7f3a60fc92eda74b091b56b4e"],["/tags/Swift-源码阅读/index.html","e726f62341ed55335368dc5fe6c0ca99"],["/tags/Swift/index.html","b852edc870896c8004ab88d217a8c0c4"],["/tags/Swift/page/10/index.html","9415cf7a6678b5bc12babc6f898e82e4"],["/tags/Swift/page/11/index.html","8b5b5057d2ecf40b8cf156dc15e2560e"],["/tags/Swift/page/12/index.html","640f1a3684b28e183c7a3bc1d16ab1c4"],["/tags/Swift/page/13/index.html","7e825cd3dad959f5e266c75fc8f2ea15"],["/tags/Swift/page/2/index.html","29dc283a6d03cdef343ad4f7c7530c32"],["/tags/Swift/page/3/index.html","26d1a5eba90b270d342d5e54fd529ddd"],["/tags/Swift/page/4/index.html","adb58769a17a34fd937d45547937e157"],["/tags/Swift/page/5/index.html","1073e236cbb12019554460bfe9f1996c"],["/tags/Swift/page/6/index.html","e91df2977e2fb14c5d2add53683c50ae"],["/tags/Swift/page/7/index.html","b3850a3056e65bcd24bae5164fa487be"],["/tags/Swift/page/8/index.html","46a8886fbd9040fbb3839860278dff2f"],["/tags/Swift/page/9/index.html","35d6c70c466b5abc934606202eeef848"],["/tags/SwiftLint/index.html","6179328de594e7eb16e1b7cbdb09898a"],["/tags/SwiftUI/index.html","b56a25b8075f38bb95071a21bdfd0b2a"],["/tags/UICollectionView/index.html","9c6d215b8b541783e2bea024aec0a9f7"],["/tags/UIColor/index.html","4ba3f61150c4daddc1276aab6a999f95"],["/tags/UIImagePickerController/index.html","fbc5095cb1aeab739fd79797039fac1e"],["/tags/UIKit/index.html","010f6fe6d77da453e1c450ce2af6573a"],["/tags/UIKit/page/2/index.html","74bfe8f0b29936f1fb85297c00964e37"],["/tags/UIKit/page/3/index.html","1f2feed4cd8cbd924dc10fba4927ab7a"],["/tags/UIKit/page/4/index.html","c0a74e6f60c6a0157e40c01e7c880e0c"],["/tags/UIKit/page/5/index.html","b77b2310320575dc8f0c84bfcf1e5868"],["/tags/UITableView/index.html","22a580e191270f621f1a9df3203ca755"],["/tags/Ubuntu/index.html","c47028048ab041979a0745af446d9f3d"],["/tags/Uniquely-identifying-views/index.html","21e41fca9d46ebcfcd25a4a46f4728ab"],["/tags/VIPER/index.html","019d15984f6aa539d50e71479a9fa157"],["/tags/VMware/index.html","0b781bedf4d0e209cfa0edee30468fbc"],["/tags/Vapor-4-0/index.html","8b658c135a122ed302d959bde3dba150"],["/tags/Vapor-初探/index.html","7829acf7e7632dd030e147028d9b6a41"],["/tags/Vim/index.html","678cc5c1cd77df9d78fc59ff43169c5f"],["/tags/Xcode/index.html","149f1efc6a72fc4aa9d4a44bc42f3659"],["/tags/appleOS-Networking/index.html","23b204780384ea25e3c75ec348f14e6f"],["/tags/bugly/index.html","29224b47826cdbb7fedff7b9a63dbafa"],["/tags/enum/index.html","c889b69aaaa3116494c576eadfceeca5"],["/tags/git/index.html","000112d9e780b9d6a6431a4a9e7607ae"],["/tags/hexo/index.html","6f56405dd8137e6d7fe5c2925aa7a336"],["/tags/iCloud/index.html","acb887f79eda36a0a5934f9b7db15c23"],["/tags/iOS/index.html","039b8d3811c64cc3cede985c98ddcb45"],["/tags/iOS/page/10/index.html","3d92949e70da1c7298a5c0160f39ddda"],["/tags/iOS/page/11/index.html","0303287b8bb862b681e073d946ff8a98"],["/tags/iOS/page/12/index.html","5b221aba3dfd0e11d90d03386756d042"],["/tags/iOS/page/13/index.html","e36ea3663b906ec01ab5133acede2e4e"],["/tags/iOS/page/2/index.html","02b7d0b2d2b7b3bb6d066704288b075f"],["/tags/iOS/page/3/index.html","3f2611c597ef63281211e5eb9069aaa9"],["/tags/iOS/page/4/index.html","21da151a763138dbd06d3f197ef023b4"],["/tags/iOS/page/5/index.html","25eec86b74b7549d124d312d368b2e87"],["/tags/iOS/page/6/index.html","46335e5e52ad4e0fe646cd1d17853cd2"],["/tags/iOS/page/7/index.html","5ea57cc63dcaa1ec042fc2ab73b24175"],["/tags/iOS/page/8/index.html","25a66775300b2c3b10b50afe7cce4f20"],["/tags/iOS/page/9/index.html","80b1ac9ba2fce9319b1080a66a1544f7"],["/tags/iOS面试题/index.html","89233543e2a86f8c56cd4b79eff9e3ba"],["/tags/index.html","706fabf7998ae02ef94c7d4365425955"],["/tags/non-optional/index.html","b0d6276c252c82ba2eaf7b782985b59d"],["/tags/random/index.html","b0be49ad1a4427639b3e886460403867"],["/tags/transition/index.html","f51b707ab316a1b97a69c97463d93dcc"],["/tags/三方类库/index.html","1e7a5362c544f8efb9baeff82cfd84eb"],["/tags/依赖注入设计模式/index.html","7ffbc725d30e3f9a0807c728d488b3e7"],["/tags/值类型和值语义/index.html","dfa91dc6337149548200326f37b06c84"],["/tags/内存管理/index.html","9b5a8269bd0096c3b962afcca836ea3a"],["/tags/冒烟测试与回归测试/index.html","f6d5cc41b0865edbd6955b4548a4530d"],["/tags/函数式编程/index.html","15901ab98597078f835dd3399a9e7ec4"],["/tags/创建博客数据库/index.html","3032e4ef64801341d77b285e7fbb2f43"],["/tags/初始化模式/index.html","5fab071b5fc35baaff7a2c56ad50f4dc"],["/tags/单例模式/index.html","af836d1d5899361a1a6db36bb44f3520"],["/tags/原型设计模式/index.html","839695111fd37326be4240dc7bc4ccbc"],["/tags/命令设计模式/index.html","54ca7c9f75fa32746ad368e59b2bdf14"],["/tags/基本控制流/index.html","34173ee9052f8567707615609481386a"],["/tags/外观设计模式/index.html","89c6db70976609ba2492ecfc7dd7256a"],["/tags/委托设计模式/index.html","1fc37d71e6d6189b44e533c6da4499f4"],["/tags/子类化样式/index.html","2600348cd72809e89b9a116e5febb216"],["/tags/对象池设计模式/index.html","204b9192a5dd07d9ad5172396f5846bd"],["/tags/工厂方法设计模式/index.html","8c356783850cf2c1d78142fd20083d12"],["/tags/工厂模式/index.html","beba4d2094e86b8fffa54d0dc6791f88"],["/tags/工厂设计模式/index.html","a457d75ce556bfed852d84e44129b31d"],["/tags/开发技巧/index.html","fec8b5f0902d85e29e21040fa001ddba"],["/tags/开发记录/index.html","dc28fa37371fc0d0317d0f4f78a64c06"],["/tags/懒加载模式/index.html","8fc51ee9501aaa8b09ba31b55d2231bc"],["/tags/技术支持/index.html","75a281939c93583d9c0578e3abf877c1"],["/tags/抽象工厂设计模式/index.html","cb682d17455cac273232d7a6b8328a89"],["/tags/数据库/index.html","d386e83cf93d81cc62597c14e7e1906b"],["/tags/构造函数/index.html","e90eb2e01e397d5e696218a24fa57bbb"],["/tags/架构设计/index.html","c3e8e8308fd92df0a04724ca096aed80"],["/tags/模式匹配/index.html","fe640bc199ab45411ecb0f6961a7378d"],["/tags/生成器模式/index.html","59f3958e0a9ef10a8b3a7430e1feca68"],["/tags/用户体验/index.html","7211b53ae5e3e1700f875adb60396955"],["/tags/用户协议与隐私政策/index.html","58b2220c00bf9d21a5df999dc97992a8"],["/tags/类型与操作/index.html","d5e7b517be9e17248bc06246cb6c60d0"],["/tags/自动化布局/index.html","1bdd9bc77a6cc399dca0149c2e906b4d"],["/tags/自定义UIView/index.html","854c25b8f1e7223b8ecb7c8e055dc0b4"],["/tags/自定义转场/index.html","9199920fb4cb07f9517725b6e4765f37"],["/tags/自适应布局/index.html","77ab11e64ebc0264cd47b6aebd447101"],["/tags/表达式、变量和常量/index.html","dcebcbb3f72a21668e3866c2904d1b0f"],["/tags/设计模式/index.html","5953653c0fa9ac24df51748697d8e1fd"],["/tags/设计模式/page/2/index.html","55a2c96f44b18529911338969d91b246"],["/tags/设计模式/page/3/index.html","5cf90be5e292bedde70833144496ebc2"],["/tags/访问控制和代码组织/index.html","a33035317445d0f1521d04cf815541a1"],["/tags/运算符，下标和键路径/index.html","82db22c66b7d2cec8afdc12bd15cf004"],["/tags/迭代器设计模式/index.html","c7a8dcdc3bbc59e3c6580805c7a56e11"],["/tags/适配器设计模式/index.html","1fe568fbd22cbae551a2f9d68e6553dc"],["/tags/错误处理/index.html","0e14691b74365a8df05d34b83f6e2f26"],["/tags/静态工厂方法/index.html","2dd5f671a185ae62a023262b0c1b39f6"],["/tags/面向协议编程-OOP/index.html","151caf085e85c55c1fb239e871d75761"],["/tags/高级主题/index.html","39bb8c22366e8ed108178c1278c98c00"],["/tags/高级协议和泛型/index.html","2a4773c81e740808fc5c7fca9e1337af"],["/tags/高级控制流/index.html","1e78c8e061cbb683f86f7761a0a738bb"],["/为iOS应用构建输入表单/index.html","9c2176dc3f8d1d0169b0011cd7f37dee"],["/产品开发的幕后花絮/index.html","7acd622574c1dd076e36c71123130a0b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","173208ff7c65d1e83ba8f6fe2ab90ec6"],["/冒烟测试与回归测试/index.html","1a72ba41525f1504386149cde2421459"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a56d138fe5d8a1e9a20b88671cb8ffa2"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","aaac1205d6a5b9638860ac5c47b93e10"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a49c80b33d32245c946eac6bbcaeff86"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","36ffddf27833053b86c697ee328efc3b"],["/在Swift中创建自定义集合/index.html","9ddce68258e1de919ba2359eab15be14"],["/在Swift中处理非可选选项/index.html","b9ef5ea2707e513c7c92ae6f1026e06a"],["/在Swift中生成随机数/index.html","5397b06ec632de9fca19ab9ad7cf61d5"],["/在Swift中重构单例模式用法/index.html","3c7018613a69e5b872f72dd4e9e2c15a"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","3b95e9117ebaaab8519b408b795ede31"],["/如何为VIPER编写服务？/index.html","bb255d31b25971b4cd79aa8a2becce73"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","519a88d3855b6b0ae8bb656e7cd27add"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","793477f7d7b2ddcf66e9be758cf993cf"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c0ffbb95da27bba82df3ef169d3f78a3"],["/如何使用VIPER构建SwiftUI Apps？/index.html","20d5ddab1ad33b532dabe9fbc14771ad"],["/掌握VIPER架构/index.html","502a9a73358db9031db4121c1f2db285"],["/揭秘 WordPress Hook 系统/index.html","a85593ec29428e5db4f14e5be1b2f108"],["/比较工厂设计模式/index.html","5d787b2ba39e048aa93bdab0f8533781"],["/深入了解Swift中的Grand Central Dispatch/index.html","f4f3d78733079bb8ebc20221dee8d59c"],["/深入研究Swift框架/index.html","cdac9e1ee0a54594ab9fb70a8d002eb4"],["/美豫直聘技术支持/index.html","f163a9d522b7f5115c7e3cd7929f797b"],["/美豫直聘用户协议与隐私政策/index.html","e843f7a3c359d5f62fb86265fa0f106b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","db4dcb1c677afe8942dd934101a5b814"],["/选择Swift而不是Objective-C的5个理由/index.html","669ef4ab62a078e0d29f53fee6bdee29"]];
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
