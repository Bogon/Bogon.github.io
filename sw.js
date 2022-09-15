/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","2d18f817dd06bc96fc2e4967920733d7"],["/2020年iOS面试题总结(三)/index.html","b373ee9ff8314c906ebaf20f65dd1f72"],["/2020年iOS面试题总结(二)/index.html","46ed8e66e50c21376a709b4296ac1531"],["/2022 iOS 面试题(附答案)/index.html","b34f4440f0ffbdf3b2888974735397e1"],["/Advanced Swift系列(一): Swift 简介/index.html","99b457025efeb66282ead4871703f842"],["/Advanced Swift系列(七): Strings/index.html","da3b8f8785d69fd38878736c9b126dd9"],["/Advanced Swift系列(三):  Optionals/index.html","0eeeac67aafb47589059fe6667ad0591"],["/Advanced Swift系列(九): Protocols/index.html","0e427403048a0f89ab9762bf3ced305c"],["/Advanced Swift系列(二): Build-in Collections/index.html","8f714d8df1ce43fb105929684e16bf31"],["/Advanced Swift系列(五): Structs and Classes/index.html","a69c007a13fcc0d7d4fba1aa0680f746"],["/Advanced Swift系列(八): Generics/index.html","03b1cbee42b2e635c773a8ad4296f35a"],["/Advanced Swift系列(六):  Enums/index.html","bc816a4b120fd22c2d87f85e956aaf94"],["/Advanced Swift系列(十): Collection Protocols/index.html","842dd9b96d3aa26215d839b41829cf57"],["/Advanced Swift系列(十一): Error Handling/index.html","282851c15115f2fcec62c789e892bc52"],["/Advanced Swift系列(十三): Interoperability/index.html","daaf996ffe3eb4c3fb90eaa4cc10bae2"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","e07b0447266ba6d6922a0ada9b251864"],["/Advanced Swift系列(四):  Functions/index.html","edf028fa0651421b7591fb0079702232"],["/App Architecture系列(一):  简介/index.html","1443d778cdab3edb8fa0b126dc8ada2f"],["/CocoaPods 设定版本说明/index.html","06ab838b87fccdbf2a4c9d741f834149"],["/Docker 启动 MySQL 指北/index.html","aeeda3215f13308a55acb726798c27a4"],["/Functional Swift 初探/index.html","1960a423228f0ff2c82eca632d0a1423"],["/Git 使用小技巧/index.html","ae167d2c469909fa595569aef04e17c2"],["/Go Protobuf 初探/index.html","1d711e89b8f5717aae5f62cf1e112829"],["/Go mysql Tips/index.html","6bc013731d5c440fe9ed98551c025a6e"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","94edcf718127e8575d286f651eb9ada7"],["/Go 入门篇：2、Go 实效编程/index.html","f5194573b1e94267909e8d4f19d8242c"],["/Go 入门篇：3、Go 重要概念/index.html","b4f9a222186c8a78825ee63a3ad68726"],["/Go 基本语法初探(一)/index.html","d34bd79ad7a63f9eab8bc21bf4063973"],["/Linux VIM 命令及操作小结/index.html","5ab5f3fbf2eeef0e691dc34645a48cce"],["/MySQL Tips/index.html","952860a8acfba060d5a179f8ebe6d8e0"],["/MySQL 基本操作/index.html","9d502d00fc5855e87ed274a3e8e60c05"],["/MySQL-列类型和数据完整性/index.html","318c6d674cb73b71ef2c91052380c452"],["/MySQL-数据库设计和查询语句/index.html","78b5800bb5595eed4f455261772aa209"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","52faa739953f5cf3ac82bd18211f3334"],["/NSCODER和SWIFT初始化/index.html","28f7335b7260be4df838b10b6a385745"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","7c046ce7ad5d92f5a418d8880a328757"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c0bb76977d8256ad62848fd624c4f13a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","f0a76577fcd72340aebce96af2f694ba"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","973168e6d4edd192c6e9e5c02e00b37d"],["/Sqlite 使用Tips/index.html","49960b92f35ef7813b937c51b67b2e0a"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","385466600aa313fedd00b7b46c4cb8c3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","08f9e81d3093f82d9bec401db0472e05"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","63d42078d9c30ebffb2cd4606819e9c3"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","0891d4dda148501f245fb0ba09ada755"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a19dd68050b35af6a2e361bc0b5c5ab1"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a3f75a50e1381bb41983b9caf97082f8"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c39ebfd8e6d411e73fa7fd125524d090"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","5b80c01c760862f3f595c91a56f0a9b7"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","4daaa068b96a0f05860769532449fb92"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","3bfed9a09badab34ace57eaa56a0c1d6"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","37dd0bf48350c84b16dcb4d9216513cb"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ac04d6d5394970dc0b9e10dbdd7bc08d"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","07126d2d260651e02d7a80fe6c48ac33"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","24a05d4493277e5e4cb876f704e478d4"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","900b45ec1b2ee8ab17893349c283fc4a"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","71e1e23e51b516c4f411a6bb1cc73a5d"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","9c24043221e6cca8f0894dc635f10143"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","bbe5fec0da359d1b3d840cb0e1a95e94"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","79aed2b13cd544132b8ebfe748319709"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","6b9875df0ef283a315d25577a16be0a4"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","383845561fb4238fd2d873889aeffca6"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4a06684f638a8c51c487e34195b9ca1b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","b4575b5ab2e73d6d98d0849ea0ee138e"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","fa8eb1e1680252598bf513e75fdfcd9a"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","4a7d551ed52583df03b0e682b0bc4f78"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","8b40840ab4508ac0370f670ae7c7e92c"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","147f70e4688ac911c45164e7509f3aab"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2d8ae0e53c0eefcbbbfe194442aba524"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","a1ad4f53c5d1387206fc71d791cdfa1a"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b0b0f70a99f2e85336b7560dc6aa0965"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b2ea9d508faccd2ff17166e53bfd880d"],["/Swift CompactMap vs flatMap：差异说明/index.html","947b66372e097b5f2518325c062aa47c"],["/Swift Grand Central Dispatch 深入实践/index.html","0cbfecd1fd7f14da1d1cd4bd64b52dd8"],["/Swift Lazy属性初始化/index.html","47ce58806a55003162a5b639b3fb6c4e"],["/Swift Promises 初体验/index.html","52d3ff83560bca4cbb74f363c3e0a3e4"],["/Swift Promises 探究/index.html","5705692cc9abf4614ef9a73d458a8bab"],["/Swift UICollectionView使用指南/index.html","12f116ea8b896b0d0ab539dfd297614e"],["/Swift URLSession && Combine framework/index.html","473290bafec010f911950bba55c7904e"],["/Swift tips/index.html","a3ea2e514020345bd410285dfc36b73a"],["/Swift 三方库：GRDB 使用指北/index.html","6f9f552aa24639d8d568ace4d5cf3bda"],["/Swift 唯一识别的视图/index.html","32a7830e0b3a94ad6890a1945428204c"],["/Swift 如何学习现代UIKit？/index.html","cd9c83318f6bf08181d1449efa0c65f6"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","ecc433f5b5643bf7bfca11f7cbf44223"],["/Swift 用 compactMap 替换 flatMap/index.html","d4f4cf14d5c73d7c18fde0264f9a2d17"],["/Swift 选择和播放视频/index.html","56b8f4872b27d2bef247ce6355b1e7b6"],["/SwiftUI 系列(一)：1、 简介/index.html","a64cbc0d6bbe148fef990add96508522"],["/Swift中UIColor最佳实践/index.html","7698514cfa8c588bf225e8c4270dbc81"],["/Swift中快速简单的工厂设计模式/index.html","92c989deb08aba76ed0491264c7e6aa0"],["/Swift中构造函数与静态工厂方法的比较/index.html","64dfb4c3ec59843f58b002ce907e449b"],["/Swift中的UITableView教程/index.html","e296c7102e5d25e328d67ebcf19f0803"],["/Swift中的懒加载模式/index.html","037b2a640b114d651782603b98b0eb34"],["/Swift中的模块和挂钩/index.html","8176266af0ea295f5d3c01459516b27a"],["/Swift使用布局锚点添加约束/index.html","af16d546cc82a2697b8078e43caca3b5"],["/Swift依赖注入设计模式/index.html","6cef4585cd44021e1a606bb95b5bd730"],["/Swift关于Dependency Injection (DI)/index.html","29123deffc76d7cea6dc5d40db9cd5a7"],["/Swift初始化模式/index.html","f3c1c2c1a8cc8713ec1799d4837be0ab"],["/Swift单例模式/index.html","5d09e3ce1ac65a4dbba5c1467fd255b7"],["/Swift原型设计模式/index.html","6988afc2cdd1df9ca160821dd3ef34eb"],["/Swift命令设计模式/index.html","4742b9d53794fe609cf8190ed3671fd2"],["/Swift外观设计模式/index.html","8c4f0d21f6befdabbfdcd000482bb48a"],["/Swift委托设计模式/index.html","466ddfea1481f6f5c79f32cca58043d0"],["/Swift对象池设计模式/index.html","a664ae055715beb3f7b6d0ca2b41e439"],["/Swift工厂方法设计模式/index.html","3a1e459a83bf36eaf5b3abac7a4818a1"],["/Swift带闭包的懒惰初始化/index.html","9dff2775f2082e6cce48df14f411f3e1"],["/Swift抽象工厂设计模式/index.html","f7a2f4ed70eae46d51e5ba6f6bc6362f"],["/Swift掌握iOS自动布局锚点/index.html","cd9ad64ee59cb03bf92307c2fd626677"],["/Swift支持旋转的自适应单元格/index.html","bc6d565389127f5df2d38d0a6c718ff2"],["/Swift枚举值/index.html","a0b08db4d1d1bf09d6080e6a18e66c36"],["/Swift生成器模式/index.html","62a101d4bee00f3e4e444858a76c11d2"],["/Swift结合Xib文件自定义UIView/index.html","4d5836a38b0871c239d5e62532472f83"],["/Swift编写的20个iOS库(一)/index.html","b1a3280ade680cb796bfd446c2cd8459"],["/Swift迭代器设计模式/index.html","8166b7a3e93c13af91e34fa93730a507"],["/Swift适配器设计模式/index.html","02fb2b081e20143a3f95f4ad87c7050f"],["/Swift静态工厂设计模式/index.html","556b82ad80259980e0b0d054cd36900a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c8a92d7842a9de406f1a07a9ebd9dc2f"],["/UICollectionView data source and delegates/index.html","2d47d95dfdb46bde91af14b6cba7d741"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","497a2f4b8eca4a07811a6f161d9d3ccb"],["/UIKit初始化模式/index.html","cc8d7077a7c5dcd35143b001688b9df2"],["/Ubuntu18.04替换国内源/index.html","f6f2fdc935c82fb3be855a6ef106889a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","bea79d332f3c77c841d773df630bef10"],["/Vapor系列 (一) :  Vapor 初探/index.html","0c87ac77a252eba1fb38b904a85fe3b4"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","92de764e339614bd4432333dbcb2438e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","a1b433d789ac83a71ca4d14432e5da02"],["/Vapor系列 (五) :  使用session进行authentication/index.html","bc333444a3261f738fd6bad5368ac69c"],["/Vapor系列 (四) :  创建博客数据库/index.html","d2afe8be4cfa9798c5f37a3a6fa1e3e8"],["/Vapor系列(六): 徒手撸一个CMS/index.html","2068e1d05eb319aad6651ad47b06cf55"],["/WKWebView与Native交互注意事项/index.html","b21fecb435f48efced0208c143bf8e3b"],["/Xcode扩展/index.html","5888915c46a28aa29df61fec22c486a3"],["/about/index.html","89009c8edc0cf600b0b93105ccc81f6e"],["/appleOS的Networking示例/index.html","5f754ad3727776c220c22c59c1fc6f36"],["/archives/2020/03/index.html","eaaa397aee9866f29d6514bdac3da3b9"],["/archives/2020/04/index.html","9296a3b53a489e388468d04d3d1702e1"],["/archives/2020/04/page/2/index.html","ea2ae954d5703e51ad1214db4f060037"],["/archives/2020/04/page/3/index.html","a9ac321c57f4750653efd1b169a91c7f"],["/archives/2020/04/page/4/index.html","ef9770a3334a399900e6d3c27ff4a9ed"],["/archives/2020/04/page/5/index.html","c1e707dbd99900258c2702df43fe7bde"],["/archives/2020/04/page/6/index.html","ce816322b12c38df50a384ed76a40d82"],["/archives/2020/04/page/7/index.html","f8cc105bdf831696b32429b461d61c7a"],["/archives/2020/04/page/8/index.html","cec35b0ab97780282ba575354502aae7"],["/archives/2020/05/index.html","337679ffc86593e62d3a40faac5dee2a"],["/archives/2020/05/page/2/index.html","306c3fcc8cf9b8940edab734042761d3"],["/archives/2020/05/page/3/index.html","958efa06257c8c9477225ea687b5b01a"],["/archives/2020/05/page/4/index.html","70248753f73a20217291ad785f6ebaca"],["/archives/2020/05/page/5/index.html","efb057084f23a9fc87572d709522f57b"],["/archives/2020/06/index.html","90c2e66c101eb15d5803295edc5f04db"],["/archives/2020/06/page/2/index.html","786b9e3848cffaf54ae23c9879988383"],["/archives/2020/08/index.html","810ff0371b5e3bcd9f0474965ae3440b"],["/archives/2020/09/index.html","6046e089d3cd2d97bb3667dc4daf82b2"],["/archives/2020/10/index.html","7aa65eee9b20b790dfd55fb5396a2b2a"],["/archives/2020/11/index.html","31379cfbd9879bc1f65ecb323699070a"],["/archives/2020/12/index.html","10b59d6e5bc2e82ad05fe77eaec92887"],["/archives/2020/index.html","a12fce07e903ce5ab2eafb1be15d253b"],["/archives/2020/page/10/index.html","ca626f03e1abe52260139d2a8f15a103"],["/archives/2020/page/11/index.html","77aee2d07056bbba39ce1935e65868bb"],["/archives/2020/page/12/index.html","c18e5408c6084927a225d3f44ca8b105"],["/archives/2020/page/13/index.html","6972d62768fb4daff3c3f241c63f16c9"],["/archives/2020/page/14/index.html","052acc99808224a7b6bda603128f30c5"],["/archives/2020/page/15/index.html","36f5d4403784b606c4e298780de12770"],["/archives/2020/page/2/index.html","8f89ce85fd877a9aed7254097c76acbc"],["/archives/2020/page/3/index.html","535ef21230031edf5e6010b7cae2a54a"],["/archives/2020/page/4/index.html","61dff4841a5c1bf9c6a6ae7e478de8f8"],["/archives/2020/page/5/index.html","934196ddcd09ee5ada116f272a428478"],["/archives/2020/page/6/index.html","c0b266987566ce3c44a362df0f53f701"],["/archives/2020/page/7/index.html","033797a82705a32bdfb24c1ebb5421fa"],["/archives/2020/page/8/index.html","ef4f74154bfaeed2a5ac0320ddfc1a9a"],["/archives/2020/page/9/index.html","7d5ab7d047b26bf131ead8f87b15a802"],["/archives/2021/03/index.html","7528f70ebe276c09271b6798ca6a5269"],["/archives/2021/04/index.html","ebfef732e79902d15853af91acaab058"],["/archives/2021/05/index.html","3803de799e3bdb70e58a9c550c9656db"],["/archives/2021/06/index.html","8665a78b1d52f00ef4e6c0e86bce5052"],["/archives/2021/07/index.html","88c259b214809bac5e67619bebdb3997"],["/archives/2021/08/index.html","7546312020f5fdf69c43776098fe0387"],["/archives/2021/09/index.html","301d73efab6d21e279648920d985b3c2"],["/archives/2021/11/index.html","42b26c152ccdf2c39240c018c03e5b25"],["/archives/2021/12/index.html","5a5f1fb4e248f865f012d70cc056114c"],["/archives/2021/index.html","1553c23581c34a25fd3e004591c03d38"],["/archives/2021/page/2/index.html","bc798d7aa2939d79103aae801c9a29e2"],["/archives/2021/page/3/index.html","898ec774baf75e63932165d1dd8434db"],["/archives/2022/03/index.html","4a9cdafa7496877fac47f852972c8798"],["/archives/2022/04/index.html","5ef5b8c1c8e3cf3b08335cc56580c382"],["/archives/2022/05/index.html","075ee2548db6b7dd47370f1a3a2f6d12"],["/archives/2022/06/index.html","2783a13827e130ecc0f7dec679080d4e"],["/archives/2022/07/index.html","b35ed044cd690bd5e916d7e7e8559731"],["/archives/2022/08/index.html","f8e1465ab65095ef282c7a975cd5d8da"],["/archives/2022/09/index.html","db41e2dcab99e411d995dbf7cde8dfd6"],["/archives/2022/index.html","cc1e84132aa2495779b5b6bddb653a3e"],["/archives/2022/page/2/index.html","f022e4b592c6e2471576fea33a69a46a"],["/archives/index.html","4f0be1a12708243584811f0f773d244d"],["/archives/page/10/index.html","3c5596dcf630d1960f17e7e050004b4b"],["/archives/page/11/index.html","6f5743b7e02801f813c80c359b11607e"],["/archives/page/12/index.html","50e4361fefac20e2fbecd49945b7b374"],["/archives/page/13/index.html","9312a26ffa4a51a88a71cab1fdca5548"],["/archives/page/14/index.html","8bb7f9284d36e64f753f68f594950dec"],["/archives/page/15/index.html","08182375fa8799ea867b8fa99c685eef"],["/archives/page/16/index.html","c99e57982d685faff6e7fc11eeebbaf8"],["/archives/page/17/index.html","19e603a396ab525e9d406f4877c31d9c"],["/archives/page/18/index.html","e2984de0050f844da413c231e7873e9a"],["/archives/page/2/index.html","991030f8d0cdd96fd5e82f594989c286"],["/archives/page/3/index.html","5c6ea33b9c74d30aed68b7a6acb32bd1"],["/archives/page/4/index.html","0227489c0f1d96f117f36b4791fb17ee"],["/archives/page/5/index.html","cecc64601fedcc7115adbb5d38a0f5e7"],["/archives/page/6/index.html","ffcf9ba04699615d44b64c826cd8a49d"],["/archives/page/7/index.html","48efea710c96bbafc85407dd268ea6fb"],["/archives/page/8/index.html","4e3d16bb39faf5893452a5bf70b5510f"],["/archives/page/9/index.html","d15f42a2d45bee76a0c1019c34e79601"],["/bugly 上传dYSM文件小记/index.html","6492cfcdabe98d63b805d0b462f1bc95"],["/categories/Advanced-Swift/index.html","7d36b94a65ca1f461046ba3d98bc381a"],["/categories/Advanced-Swift/page/2/index.html","e6668c12598a67000974bc97bf76424d"],["/categories/App-Architecture/index.html","5dda21252c25f768a17688f17652d1ad"],["/categories/Array/index.html","c87775d25fc55cfed01fff09e476bb42"],["/categories/CocoaPods/index.html","2ddb0a6e6c5e4825073b637df76a9fde"],["/categories/Codable-protocol/index.html","e071dc3e2b60195cab887e961949f5a2"],["/categories/Combine-framework/index.html","9f1465e570be2aed74fd45a5bd658e5d"],["/categories/Combine/index.html","ce811e2d3b0dc395a5d446ee9de5d912"],["/categories/Docker/go/MySQL/index.html","19653c688f4a64b97344b6671186fa2e"],["/categories/Docker/go/index.html","959064a57537951b05c299e257de3cca"],["/categories/Docker/index.html","269faee1ec65f3990fddc18877dbabc2"],["/categories/GRDB/index.html","298c437b1786c6e362590c407eedd2dc"],["/categories/Go-入门篇/index.html","251247b70afe5e6ad84c9a587ee903e5"],["/categories/Grand-Central-Dispatch/index.html","72005a20da14412ed33dfe3a259fac4a"],["/categories/Homebrew/index.html","f1b85d2ad796708b305b720af69a27a2"],["/categories/Linux/index.html","c28f17be56ec5c95ce734b4db1aca69b"],["/categories/MySQL/index.html","3edd1a3297e20fb7b5e244e2512896e5"],["/categories/Promises/index.html","17cfd4ae26a25fc16f5d68a46e5ec999"],["/categories/Protobuf/index.html","7203db196f99dd66847ef5fd83dc1bf0"],["/categories/Result-Type/index.html","b5a8b4ce025daa400aa7858d9f8c7beb"],["/categories/RxSwift/index.html","92aca441f3eb2fb47abcb1da85f21c25"],["/categories/Server/index.html","235a44d1acc3df102d4c4cdd8316056d"],["/categories/Sqlite/index.html","be8f9277145479c1d3bee7a3636e2338"],["/categories/Swift-Apprentice/index.html","cfa8c9ec042d27c61b318e5b543d0d97"],["/categories/Swift-Apprentice/page/2/index.html","fdd293485f93a6066d3626c09e0f3d5e"],["/categories/Swift-Apprentice/page/3/index.html","9b11a227b1ed08674029aa0f99d2436d"],["/categories/Swift-源码阅读/index.html","a5cd09bac3dba276b792165bfc96e9c0"],["/categories/Swift/index.html","71e36edcb97918e73ac390c98f5a5fa8"],["/categories/Swift/page/10/index.html","e77ea3fb4824b68e775f1efc2d301cc5"],["/categories/Swift/page/11/index.html","dd36bbead0af584cb927610fbe79adfe"],["/categories/Swift/page/12/index.html","353363194c85fea0d26727f29e8a4f22"],["/categories/Swift/page/13/index.html","7f6e6d69e81b8ec1117a7da4465b6d60"],["/categories/Swift/page/14/index.html","57bdec440d69b657bd8302fa0feb79b4"],["/categories/Swift/page/2/index.html","228cd4fe9244706cac73f68ca3df8d47"],["/categories/Swift/page/3/index.html","86f568a2b08f258c8a354d1d49b933e8"],["/categories/Swift/page/4/index.html","7530a246b1c0657bac2d2c3a69c88db7"],["/categories/Swift/page/5/index.html","09f16027e48f6c3c2f3a8c3435770348"],["/categories/Swift/page/6/index.html","0fa62facf67b7710628568ce31c3ac0f"],["/categories/Swift/page/7/index.html","3ec2b2c4ef114b0908623ac2b61920e9"],["/categories/Swift/page/8/index.html","e485b1e5719ab85f9026753e47640a00"],["/categories/Swift/page/9/index.html","9e360c9313b203b76dccabda3734733e"],["/categories/Swift5-2/index.html","4dcb0ea6d81c6421a5230928a9a5b004"],["/categories/SwiftLint/index.html","6fad922707b9b9e74827f13de01f5ecf"],["/categories/SwiftUI/index.html","908afda4fe5191245a9980ab7fa0b9d2"],["/categories/UICollectionView/index.html","80362f34f659c4b56bf61d03ec833d2d"],["/categories/UIImagePickerController/index.html","3a6d68d86c9bd965f99314b474e6831b"],["/categories/UIKit/index.html","1bbe4968ddd737e5f053504b1525a3e1"],["/categories/UIKit/page/2/index.html","4eb8d89a5b3d1ec086f417bc857614fd"],["/categories/UIKit/page/3/index.html","a99bd21b5929bb6f61fc32044c6af4a3"],["/categories/UIKit/page/4/index.html","47066864074d230edb90cb738a01a060"],["/categories/UIKit/page/5/index.html","8a0d6fb0177376991966ba1a27207f01"],["/categories/UITableView/index.html","0cbea91fd18f9575f73c6a8e4974688d"],["/categories/Ubuntu18-04/index.html","4c25ea8576a6354cf34b7bf10cb9dd47"],["/categories/Ubuntu软件源/index.html","16f97990b440fbe80986650cbde39588"],["/categories/Uniquely-identifying-views/index.html","767d5ca6b6454b2aa174debdd8a780ab"],["/categories/VIPER/index.html","7e7d1aceb3a60c00b178719f30cce7f8"],["/categories/Vapor-4-0/index.html","d8c737257a57cba32213885e3f082693"],["/categories/Vapor4-0/index.html","fae69330c86000f699b285f6577b2a43"],["/categories/Vim/index.html","2ffc907dc746d8a8f1f0d3b3e987e6de"],["/categories/WKWebView/index.html","5f82368866932663d7f85012c384e48c"],["/categories/Xcode/index.html","443b7a045a533c3104a2c5af440af746"],["/categories/appleOS-Networking/index.html","a12402e105e3c3dac4759b3a19dd4c8d"],["/categories/bugly/index.html","0d7b2e045b9027af4b2fde347cc4d4fa"],["/categories/enum/index.html","b83203ae6ff66f452c5e545141061d2d"],["/categories/git/index.html","80f182b8ac3fb559376c27b2cc73bc72"],["/categories/go/MySQL/index.html","eb4cf1865476dff9f8868ae329cb12f1"],["/categories/go/index.html","a28a3dd4bd115679c45c0ee34e78e233"],["/categories/go/interface/index.html","88164dda4703551d87f178c5fbc4638d"],["/categories/hexo/index.html","2cd5ef1de262d90387501ff0726a88f8"],["/categories/iCloud/index.html","4cc471edf78c59508d2516d1719e3333"],["/categories/iOS/index.html","ec0d4ede65e8f21b8412c58b0149ea12"],["/categories/iOS/page/10/index.html","f2cee8c8e92630289f92f669186043f3"],["/categories/iOS/page/11/index.html","0049216a0f8f8c1a9124369dfd635977"],["/categories/iOS/page/12/index.html","f9af97aa70c35672a8362fa9244c2540"],["/categories/iOS/page/13/index.html","9f69853e099dfe305ba287724c11cdd3"],["/categories/iOS/page/14/index.html","a4c98cdb696eedb86691021eadff8863"],["/categories/iOS/page/2/index.html","129b57d62b4868328ae00b5f67282ffe"],["/categories/iOS/page/3/index.html","02637f8680c8b89c08ef2c992df22ab9"],["/categories/iOS/page/4/index.html","d58e6e8e51506527caa7c639997c8979"],["/categories/iOS/page/5/index.html","399b8d60a301b528d123be85ea808dac"],["/categories/iOS/page/6/index.html","da05c30d85920a07b8712278e97901db"],["/categories/iOS/page/7/index.html","39dd7523c5e86567f882dc7e7974fbaf"],["/categories/iOS/page/8/index.html","e5cd7bc47635c0548633181f11406541"],["/categories/iOS/page/9/index.html","7ab911eec8fb68b131186e2ba4efa736"],["/categories/iOS面试题/index.html","a207e75fad87dc52802da99b56449004"],["/categories/index.html","1137df2bbd6483518917a4374563b6b0"],["/categories/random/index.html","128ca87d665e46dd0bb1f354bfacaa9b"],["/categories/三方类库/index.html","ceb487fbb5b54fdcbfd6e8693f54f597"],["/categories/函数式编程/index.html","46a838288b213421355942d222d20b7d"],["/categories/子类化样式/index.html","01b7f14b5583227f524995820a076e07"],["/categories/开发技巧/index.html","af8f5ad13d88a267265eefa4c7c05982"],["/categories/开发记录/index.html","06181e9e46f7a2eba5ceace002f79ce4"],["/categories/数据库/index.html","0ab280f46765a62417628dd8a16a1a3d"],["/categories/架构设计/index.html","ed71dfc82fa3c9146164d959e1b830e1"],["/categories/测试/index.html","4c237577364b7b7584ff778afb430743"],["/categories/用户体验/index.html","fa3f22df3e80410621c134dbc14ccc7d"],["/categories/用户协议与隐私政策/index.html","aff4978577e289366c30d3640e06784f"],["/categories/组件化/SDK/index.html","4dd0bec4bd40a67eb5eeab46a8cae389"],["/categories/组件化/index.html","09f742c8c1e8baf81c8711607ec1b183"],["/categories/组件化/模块化/index.html","b8e6283e1ab44bf2cffe2fdd07677d79"],["/categories/设计模式/index.html","dc72f499d5ab957261d4ba135bef6cef"],["/categories/设计模式/page/2/index.html","4510080c213bed95fe63f1107ded921a"],["/categories/设计模式/page/3/index.html","16f308ce7e6f04bdb6d483f99e50acf1"],["/categories/逆向/index.html","acca7199c6ae27d17478fb598ee03731"],["/css/main.css","f95b1aea7c4bbdb05d77ede67dcb84e8"],["/go moudle 导入本地包/index.html","13d4f2a82bf1a45cdbff6bc50f0a6d8f"],["/go 库专题(一)：gin/index.html","f93d59b337121b259fbc03d5578449f4"],["/go 每日一问/index.html","c4b074630390e182dd1e52a0fd738db1"],["/goland 学习笔记/index.html","a3dc00697b66f9e3609c61efbbbe8336"],["/hexo部署失败/index.html","04b1fe71ca3838389cd38cb2b0451dca"],["/iOS 15 适配/index.html","ed6718ac037a0f3b39b50b153245b78a"],["/iOS VIPER架构深入实践/index.html","ef7ef849d6390c6b9ac21640d1d19d0b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","cef59c6ceadc3be93b20d27cdd55bc8c"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","5ed38eb99a214ed6b6a1b0694e5fc3b4"],["/iOS 自定义视图，输入表单和错误提示/index.html","3e054aa7006d39e846b51cca59ed0287"],["/iOS如何使用iCloud文档？/index.html","0a3fe672fdf0b30a5eb908d712a9fe16"],["/iOS子类化样式/index.html","ae4579f3554a6f21e7e2ea50e7efaa61"],["/iOS开发记录<一>/index.html","9e12f4456f038ab33bce4aab9e30db35"],["/iOS自动化布局编程/index.html","faa602baad2eb0857aa7931e79bc2d55"],["/iOS自定义转场(By Swift)/index.html","ee9fb73ef92db4978a1f9f10e32d3f3c"],["/iOS项目架构：使用VIPER/index.html","5288675bf697bafcb86e809fb7074da7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e5574932c1e63e7112dcd048698c888b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","a571a86dd8f676642728658fc0420c8f"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","65fc7acaacea79d9cc1c9fe7388d54f0"],["/page/10/index.html","99e79e03c6e7a7e409dc5ea9c951a469"],["/page/11/index.html","d991792d6ec5488faad038648efbf4ff"],["/page/12/index.html","988e40ae3575369c62b2909594cf4216"],["/page/13/index.html","7188142f806b490c91a0013f6aebbad5"],["/page/14/index.html","a4333134d881d679aae4fa5b2b067d23"],["/page/15/index.html","b152ed56cb12e3d79822c6e066f46647"],["/page/16/index.html","115054c1f49956ae9b81db34db1f4bcb"],["/page/17/index.html","ecd28639f0bb8cf3d8170cead9cf17ac"],["/page/18/index.html","23c1049d996a92781bb1eaf4df81c1f2"],["/page/2/index.html","8f861df19e9f2bbd19dc01f7c5b74f17"],["/page/3/index.html","6953b247db15d29b58d79ec122fb39e4"],["/page/4/index.html","05b6989cba06616521a426f4b5e55002"],["/page/5/index.html","adb1c3957ee4c8b0a241b39cd4c80bd4"],["/page/6/index.html","8f1a98b74b1ce51cf0e660331acbc790"],["/page/7/index.html","b1455d3bb445cad4c2232f8556b30e29"],["/page/8/index.html","d961a6c97fc311d869f0e41171a29b6a"],["/page/9/index.html","c9e9ac7f36e0d117f73173d489c2bc23"],["/schedule/index.html","069cf5620ca5494227136756c040cf3f"],["/storyAppPrivacy/index.html","aac9f9fe162d33aad3ba436906223665"],["/sw-register.js","655d7ede84cd1075477333c32f1bf04a"],["/swift 专题：函数/index.html","53210360e6e12a95788e14dd33e54a80"],["/swift 专题：闭包/index.html","7b2b9611eeaf986dd9831da6187dd8f6"],["/tags/Advanced-Classes/index.html","5e124c66c9e25cf7c81ae722e166d8f0"],["/tags/Advanced-Swift/index.html","16b35c5a1be63a600996871617750b83"],["/tags/Advanced-Swift/page/2/index.html","4e4f2f629447fa16008df48a0dfbbd9e"],["/tags/App-Architecture/index.html","56a3a76309f4c2dbcfe3076167734330"],["/tags/Array/index.html","68324dee48bf862b18d2641e1bfcbd31"],["/tags/Arrays-Dictionaries-Sets/index.html","a3b7751b67b3393718e620770c8c6ab1"],["/tags/Authentication/index.html","82d43dc9dd087859ad0aec2b8f291cb7"],["/tags/Build-in-Collections/index.html","a64ee97d7a560756b206341cda188bed"],["/tags/Building-Your-Own-Types/index.html","8cb6c23425399cfd5e26b4427e2a9c32"],["/tags/CMS/index.html","5d81825b0b3cbf99cc6cc61b97cac7f8"],["/tags/Classes/index.html","d333334775b40b668ffa75c602598607"],["/tags/CocoaPods/index.html","f9778bf32787fdca9c21e71b58a11e68"],["/tags/Codable-protocol/index.html","0fd775594dd09aed543d0d6460d49645"],["/tags/Collection-Iteration-with-Closures/index.html","8ffe7ec6305f291128ca52f2cab132f7"],["/tags/Collection-Protocols/index.html","c3ef62203cd00b040eb6bfb1a374118d"],["/tags/Collection-Types/index.html","dfc5013d0811378517d41f1a03840141"],["/tags/Collection/index.html","01a6a2a7b92642d08017f1bfcd67d91c"],["/tags/Collections/index.html","ed721c0be3f751ac83544769a45ec052"],["/tags/Combine-framework/index.html","7c0305411bbe5488aa3eeae75e221862"],["/tags/Combine/index.html","05a1a69484831b9a9c05c9842dfe463b"],["/tags/Dependency-Injection/index.html","fe8f240a49e9888becfa23e1025671fe"],["/tags/Docker/index.html","8815e315bbe42e46b6517c94334933bb"],["/tags/Encoding-Decoding-Types/index.html","dd2ea80aa6a5f90ab501aff301bd8e45"],["/tags/Encoding-and-Decoding/index.html","44ad0dcdebf604b6e98c508455170be3"],["/tags/Enumerations/index.html","2f175a2d546ef516b1a1801ed3d1fb39"],["/tags/Enums/index.html","c07c54e8b9ca4dcd17e88e40b7abb2dd"],["/tags/Error-Handling/index.html","2a706458a0e689a74686539946550883"],["/tags/Functions/index.html","34af84bb28441b4c5f1ba61bdba929f6"],["/tags/GO/index.html","b09c7b6b3619c67e724a83cd0acb0ce7"],["/tags/GRDB/index.html","764614afe5c27fafee44738a71cc8b71"],["/tags/Generics/index.html","aba72c312d42ae543f856c454910e51c"],["/tags/Grand-Central-Dispatch/index.html","d0035336b0bb3be0915dbf4a158d6a8e"],["/tags/Hello-Vapor/index.html","5c13fed4c08c69d8d0bf80eb0538254b"],["/tags/Homebrew/index.html","c602fb35068bbd525d9a36ff4a240668"],["/tags/Interoperability/index.html","cff9796706a04c73d6626d1263548b67"],["/tags/Introduction/index.html","8430282eab7bc832bf2380cabdafafd5"],["/tags/Leaf/index.html","60d18d609bd1eb71c1a2da55a7f5a434"],["/tags/Linux/index.html","500ca62580ca0dd60876f5adf606c2ef"],["/tags/MAC/index.html","a1ab1e17d65aac8996c5d5b73821656b"],["/tags/Methods/index.html","6609fd6213bf4815e37697620cf9e151"],["/tags/Modules-And-Hooks/index.html","c29dce82a99c6900067251a4dcea27cd"],["/tags/MySQL/index.html","7982f0bf51b75d6d9f09257ca3e6cb90"],["/tags/Optionals/index.html","a107088738645ed465ff66106bd1f4b9"],["/tags/Promises/index.html","e998aebbbd879f619ac9721d5d7c9d26"],["/tags/Properties/index.html","338332cf5c24c8e4263422adc12d1f45"],["/tags/Protobuf/index.html","3dd6d25baea1bbac719b76885fa06f05"],["/tags/Protocols/index.html","06e8eae8f555e99f3a91f03d04ea7bcc"],["/tags/Result-Type/index.html","87a8cd8f68b43747600429ef850f8849"],["/tags/RxSwift/index.html","69115cde42d4d26b6c1893769fc80dbf"],["/tags/Server/index.html","d5beaedd297bf1f22984d18fdb13e7f8"],["/tags/Session/index.html","b6cb23aa8782fb79d72743a00171ee83"],["/tags/Sqlite/index.html","80c1d68f6f1fc2603972c7e46a66606b"],["/tags/Strings/index.html","9b898a1d522d2ede254ebb7e493f2dea"],["/tags/Structs-and-Classes/index.html","5644ae3e0c984502db8cc993c6095d16"],["/tags/Structures/index.html","addd5025ca6f215ab6d38912eb4c427d"],["/tags/Swift-5-0/index.html","df816af1ac20864b591cf002720bbe3c"],["/tags/Swift-5-0/page/2/index.html","6c72d3d368ed305f3ea1f6f281c314c0"],["/tags/Swift-5-0/page/3/index.html","d3ba008a0c1d3cdf849d63dd850353f1"],["/tags/Swift-5-0/page/4/index.html","42e7d590bfdb5359a2fc8780614855aa"],["/tags/Swift-5-0/page/5/index.html","a86ffd2473728cc1abc64b27b3375bf8"],["/tags/Swift-Apprentice/index.html","fc98cc704821659cea3595c15b73a038"],["/tags/Swift-Apprentice/page/2/index.html","80aa45b486ab1d7e93fb9a3e399b0c1e"],["/tags/Swift-Apprentice/page/3/index.html","4f4b82ad07df3eb2bf313f3be5b5d86a"],["/tags/Swift-Package-Manager/index.html","48c285c8fd1ca9c8c80e1d775bd460eb"],["/tags/Swift-源码阅读/index.html","a89d746fad7c3a6ab630955a4679df1f"],["/tags/Swift/index.html","dea8597cd7dec4793af68b3fe5acec0a"],["/tags/Swift/page/10/index.html","b59a98d03a9dcac3b16dd060b2922d01"],["/tags/Swift/page/11/index.html","b4079f01652c1995089d1110981df7c3"],["/tags/Swift/page/12/index.html","e34864ec4d958cd997ef11d8fc651b4d"],["/tags/Swift/page/13/index.html","9dd2add1758da3b3b6235514d0ad9d5c"],["/tags/Swift/page/14/index.html","b4cdc575c4409e53027c3afe04939902"],["/tags/Swift/page/2/index.html","b1dc12ce57474296fbf7bcbbbb7b71f3"],["/tags/Swift/page/3/index.html","659b64745574924cc2c4d804698633c5"],["/tags/Swift/page/4/index.html","65ec2cf415594f61a7ef923c00c6841e"],["/tags/Swift/page/5/index.html","f58f0d46e8890baa80bf069e4821097d"],["/tags/Swift/page/6/index.html","7c560865eef2b8233e557526eb1b4028"],["/tags/Swift/page/7/index.html","26e9b99fdc255f46417638216855f833"],["/tags/Swift/page/8/index.html","42bf1c8932e07005c0d86957c5e0af29"],["/tags/Swift/page/9/index.html","bbb2bd80d83f9ca71bacd32eef0c158b"],["/tags/SwiftLint/index.html","9e03b6179aa06767b1b3c43cac4ca0a0"],["/tags/SwiftUI/index.html","b65c0add02ca1b046271cf9ce68987d2"],["/tags/UICollectionView/index.html","46af8523e488cfc5471a179eb8d64f35"],["/tags/UIColor/index.html","7866a2b12a1d565056d450b0902030a7"],["/tags/UIImagePickerController/index.html","d3158c3ae835a764961d780dcc2a15df"],["/tags/UIKit/index.html","b712cf93ecf1988cfed575262ef7da68"],["/tags/UIKit/page/2/index.html","1690d0fc5ba12368ca2a0177382a1a8f"],["/tags/UIKit/page/3/index.html","1439ed1959fb3fe7fe154db80b79f99c"],["/tags/UIKit/page/4/index.html","575aef86282cf996ae0b6131a85f677e"],["/tags/UIKit/page/5/index.html","5b3883f4fe9b643ff025ca53a1d2c5ec"],["/tags/UITableView/index.html","65e7ae88c65cef6a2009155f49d946a4"],["/tags/Ubuntu/index.html","d2b67e75a06c5ee649d44359cbffdc2a"],["/tags/Uniquely-identifying-views/index.html","b88765ccb930c71d05edac3bd89df8f7"],["/tags/VIPER/index.html","4162241fa62458968b1b54631dcb4de1"],["/tags/VMware/index.html","7b3c22da5a7106b117a2b84d76ddd33d"],["/tags/Vapor-4-0/index.html","a84d7736c6079f3132aafd146cc077dd"],["/tags/Vapor-初探/index.html","56665ef1875ab9d3095415c3a23d2acc"],["/tags/Vim/index.html","e43ac8d5c54cca72833e089fb4feab4d"],["/tags/WKWebView/index.html","d00d6d81d5a60d7e6cc0e5e71c6a49ca"],["/tags/Xcode/index.html","71979c87e9fc836b1f2cca25f5564aab"],["/tags/appleOS-Networking/index.html","bddb9d6b18f42010770d28982f7cadca"],["/tags/bugly/index.html","6e65dc48165cf78691e83cfc5d99e8e3"],["/tags/enum/index.html","275b03d8eb4cf2d1b086c01496d48e74"],["/tags/gin/index.html","bbb020b255d289066d01518bd51bcff4"],["/tags/git/index.html","02e5a3291e3abbf0e28aca57b1d557bc"],["/tags/hexo/index.html","b71e3d78ddd4744b85962bafbf09baf5"],["/tags/iCloud/index.html","8b17ebef5dc402b392176aef75a28572"],["/tags/iOS/index.html","5cebcf0160b848c925eed2502f668748"],["/tags/iOS/page/10/index.html","17ed5908bce9b093e8b6033cb20b81dc"],["/tags/iOS/page/11/index.html","6ba60b66ab3d75573320e5394a1b50ea"],["/tags/iOS/page/12/index.html","06f61b59a57b7dfda12a0fe38335a4e0"],["/tags/iOS/page/13/index.html","27b6b5342ee115be9722177626012e17"],["/tags/iOS/page/14/index.html","4b0bd1c91aba3f2cd70f9fc81188570d"],["/tags/iOS/page/2/index.html","1b816c71aa5fd2882b44fd3308e093c4"],["/tags/iOS/page/3/index.html","b986c386d19652847e10333d9fa39af4"],["/tags/iOS/page/4/index.html","66552909ed7f355819d0b8b4f3e806f9"],["/tags/iOS/page/5/index.html","3e957ea72a699bef26842874c34fe875"],["/tags/iOS/page/6/index.html","da41eca99a95f78d1c056dd8fddbd1f7"],["/tags/iOS/page/7/index.html","8524a29d5f4077ac41d3a6ea543e5d41"],["/tags/iOS/page/8/index.html","919297aac0dbe862faa5275f90494938"],["/tags/iOS/page/9/index.html","33a78718bdeb3cc807cbf9d29f749458"],["/tags/iOS面试题/index.html","179f2c30c1597799e58b14ae2b176143"],["/tags/index.html","04a208573847c3c20950f413e6b8fce2"],["/tags/interface/index.html","a4323600910a74193ad759ce298e56c1"],["/tags/non-optional/index.html","d332cc77428a43652905c6bd93d8a64b"],["/tags/package/index.html","9fd21fb586625a8c98f60d474b387184"],["/tags/random/index.html","d1c1137ba87592af98cdce7af7ac15e6"],["/tags/transition/index.html","c86b27d4346917653da9c52be6dc59ec"],["/tags/三方类库/index.html","e65659c99dc8cda87ebdfd8320a243cb"],["/tags/依赖注入设计模式/index.html","cbe61f4a1eafc9e4e2e94ab7f9b8e7ba"],["/tags/值类型和值语义/index.html","b4da9ea902cb2092a536fa48323f768b"],["/tags/内存管理/index.html","b600435053847200c09b0e64e8fa02d3"],["/tags/冒烟测试与回归测试/index.html","2e3c55bf64ba87d7fb7add8d6ba01a5d"],["/tags/函数式编程/index.html","0ef53f7c4d624fa2e68ef09abc71bfb3"],["/tags/创建博客数据库/index.html","6ba2fbb16a36e4673f6eb469c36423b8"],["/tags/初始化模式/index.html","f319163b75f4affd1b592e96019d1271"],["/tags/单例模式/index.html","f151f85e435e56feefc1c42b40ab79bc"],["/tags/原型设计模式/index.html","c1567b1a9923c32c160c0e3c5f4601cd"],["/tags/命令设计模式/index.html","b26b12a32b04b8bafa0536334735580b"],["/tags/基本控制流/index.html","bea6d8b4d31b1ef2efcbc5bd96f436a2"],["/tags/基础语法/index.html","977ebf4e35f10da5a3621b092759ca83"],["/tags/外观设计模式/index.html","c49bb935d8cbf38810c0249622544fef"],["/tags/委托设计模式/index.html","3fa68fc1cd89de966ba84c33ae682499"],["/tags/子类化样式/index.html","9c2503411e3ecd5d5f4bfff71df1274a"],["/tags/对象池设计模式/index.html","e2db1b7d36262d44a7cb8e30e3bad9c3"],["/tags/工厂方法设计模式/index.html","66c830f764a31c3d810cb94b53442c45"],["/tags/工厂模式/index.html","fffffdb1e2ea79133ea2731a8b6d857e"],["/tags/工厂设计模式/index.html","cb5fe4b705b8039ed0965170530ce62a"],["/tags/开发技巧/index.html","b203a6080c43e2c099dc561cf0d79a1b"],["/tags/开发记录/index.html","cf48102cd88fa9f707501d543607ae56"],["/tags/懒加载模式/index.html","62506c082948970f4bbc87bdd4153a3f"],["/tags/抽象工厂设计模式/index.html","b0c80656afd986300927ec47b3eafa5f"],["/tags/数据库/index.html","55dba53d6bcd5049d476447ae7915d36"],["/tags/构造函数/index.html","e9cc86209d252c9b6fd7b735fea1b8e8"],["/tags/架构设计/index.html","5be951ad2657e87b7240c52554498560"],["/tags/模块化/index.html","3f553ac0c0a3629148903d815d80f0dd"],["/tags/模式匹配/index.html","cde0f2bae7cb12f8084c2ca06b2b297a"],["/tags/环境搭建与验证/index.html","2c9d1b0bcc1bbee7e6e587ea4ae0df4c"],["/tags/生成器模式/index.html","27b1de3b08fd05a462d75195744cfcdf"],["/tags/用户体验/index.html","763ef070e85033f8cc26c9951ee6cf31"],["/tags/用户协议与隐私政策/index.html","1b594f889dc49618c716047d070314fa"],["/tags/类型与操作/index.html","2cbf759d351504b51e9c7790f221785f"],["/tags/组件化/index.html","12b1941c2a51cdc49803efdb6747a5e9"],["/tags/自动化布局/index.html","5bb281d3abef9ab279fd14b87975bf8a"],["/tags/自定义UIView/index.html","9fad12f830484eb1ca6b2b47c3d7640c"],["/tags/自定义转场/index.html","d3355d515f8f907f2e643f1bdd0c71e4"],["/tags/自适应布局/index.html","0c3c6a922735afdf4bd58b07aa9bb555"],["/tags/表达式、变量和常量/index.html","c05a693ab48ae146f9c1bd12432f7565"],["/tags/设计模式/index.html","ead2b908c0ecb9662332d1e04b307511"],["/tags/设计模式/page/2/index.html","715fb4840beef5bc5adbd811dbfa0bae"],["/tags/设计模式/page/3/index.html","fb6dfbef5d0f706b48baee3debd365cc"],["/tags/访问控制和代码组织/index.html","1a1c4b62d7c69f08bba0a81999a4486d"],["/tags/运算符，下标和键路径/index.html","55a966c464dc5ef9fdbf5071ba92499b"],["/tags/迭代器设计模式/index.html","0744a4399340eebef9794aa3a16e5c90"],["/tags/适配器设计模式/index.html","aae06892849c9ecfa147ff943ed707a1"],["/tags/逆向/index.html","a12875504191a68474aadd64c5eaaba3"],["/tags/错误处理/index.html","ef521d2f18a3af718aba559c678f68e0"],["/tags/静态工厂方法/index.html","d65f9cd327bdc02e4e5e8e6ff6dfaeb6"],["/tags/面向协议编程-OOP/index.html","b2de62052c403acb4b8ba10f30b449bf"],["/tags/高级主题/index.html","34c1653c90eaf9305b97e47284b179c0"],["/tags/高级协议和泛型/index.html","ef45705ada16c91925dcff1eb1b56715"],["/tags/高级控制流/index.html","b35b150cd2de838489a87001f346aa9c"],["/xcode 常用的快捷键/index.html","4092e134cde0ac8ae19add502982027e"],["/为iOS应用构建输入表单/index.html","85a78f1251dc71782831bfa11b356eb7"],["/产品开发的幕后花絮/index.html","f771030c0e100cbf8a83f5288fc984cd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","17f77a96d259125e112dbd7a300b9e13"],["/冒烟测试与回归测试/index.html","bb0f8781821630d81dae207da70859e5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","904dec52663268f7d1a716cd5f3b7dbe"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","db9806e5e012b0cfc220a3da4ba30818"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","afa0db2652bff7171a12904517698854"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","67e2dcaa38d53c4c01c2426c52bc8ac7"],["/在Swift中创建自定义集合/index.html","78f297eaa55e23ffc8fc1587a1cb7a0b"],["/在Swift中处理非可选选项/index.html","c309d858bf69a4e5f9bb9276028213c4"],["/在Swift中生成随机数/index.html","79c3bf783cdc4ef7a59b5f58329bff6b"],["/在Swift中重构单例模式用法/index.html","a0a8a111e43ce2c1a5748f977a181e1c"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","f19956beae14176aab4908b137588be4"],["/如何为VIPER编写服务？/index.html","026c2c1fab1bd85e7b89e622e54a0299"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3dce9765831bac5d40547135f40f5314"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","aaba700f7f57ac2af71a7420080643a9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","e3d7c4f9a65ba4e3e6ba5d47031dd136"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e953daad617a7848328c5715027ff8e4"],["/掌握VIPER架构/index.html","60db5d5a753856863373bb1350e34124"],["/揭秘 WordPress Hook 系统/index.html","42f5a609be835b3d5195c352a8fd2c14"],["/比较工厂设计模式/index.html","00c745443bac0d4ae0c9583cff61a4e3"],["/深入了解Swift中的Grand Central Dispatch/index.html","ca57959d53f255273d430148c5bacdb9"],["/深入研究Swift框架/index.html","44d22205c451b54f49070c75baa0ea7f"],["/组件化插件化与模块化/index.html","d7e16599533f009814cb854691e21892"],["/组件设计与SDK开发基本规范/index.html","852ec704f1a2cd393341ff3965311a92"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c5d29c8e0a74c98b534914022eda00a2"],["/选择Swift而不是Objective-C的5个理由/index.html","bda187202e3def9c1d744737c86723fb"]];
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
