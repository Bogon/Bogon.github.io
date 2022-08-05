/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","958c9214721f444070bbba3b2605f7a9"],["/2020年iOS面试题总结(三)/index.html","d3724d2e3745e30f22fb5b75e68d54aa"],["/2020年iOS面试题总结(二)/index.html","649c97662016b21f8871990abe62731a"],["/Advanced Swift系列(一): Swift 简介/index.html","63b19d67dc1a7f3a9355f1c4460d2577"],["/Advanced Swift系列(七): Strings/index.html","5d628ccdb1e21013dc91e74006590be1"],["/Advanced Swift系列(三):  Optionals/index.html","29669058eb7e2f5a161b691afe67dd02"],["/Advanced Swift系列(九): Protocols/index.html","f8628871d346e2bcc6d1d7ce04822e43"],["/Advanced Swift系列(二): Build-in Collections/index.html","d85a707bd76cf47d8e207e3fdae81a06"],["/Advanced Swift系列(五): Structs and Classes/index.html","3f3bc42bc269375a447edd2a61173e4a"],["/Advanced Swift系列(八): Generics/index.html","ea0d68f2013b4334561264068cb7d8c7"],["/Advanced Swift系列(六):  Enums/index.html","3ba543364719ff6c95311e1aef75a549"],["/Advanced Swift系列(十): Collection Protocols/index.html","a78b1a6a2ea38e9b6c7bf2d70e537fc9"],["/Advanced Swift系列(十一): Error Handling/index.html","287cf261b34a6f3c719fcf85848111fb"],["/Advanced Swift系列(十三): Interoperability/index.html","e59fe1b917ee8d5f3ebd30236346eb27"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","eb2f4fcaf385a1c90da10e4474491486"],["/Advanced Swift系列(四):  Functions/index.html","88084905e9702158ea0cf7786c08f631"],["/App Architecture系列(一):  简介/index.html","83f7942c0eca890f9019b754df150ff6"],["/CocoaPods 设定版本说明/index.html","62d5fbe5e9ab74f3cc7cf0dd49d96ba4"],["/Docker 启动 MySQL 指北/index.html","4811a73148d5a0ad216072a00648b087"],["/Functional Swift 初探/index.html","83c2a92ceec4063bfe78e5f4b984beb5"],["/Git 使用小技巧/index.html","c710382d3656465a5dd2480db1dbbc9f"],["/Go Protobuf 初探/index.html","dce3053bc47b750025b4cf3264116000"],["/Go mysql Tips/index.html","245577cd90e3ee02f41f487bbb2a5259"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","521ceac4ac3c1873c269c62ba43c00cc"],["/Go 入门篇：2、Go 实效编程/index.html","9ef92189668f304e8fcd6a898451374b"],["/Go 入门篇：3、Go 重要概念/index.html","fb0e6e68ca87646e158e28b6dd7fe790"],["/Go 基本语法初探(一)/index.html","003d9dd86cd0e27337a106578f1634a8"],["/Linux VIM 命令及操作小结/index.html","db2cfbc6107b3fb69344cf5ab00414ed"],["/MySQL Tips/index.html","d37c711140bc40e98f3d0ece441b1b24"],["/MySQL 基本操作/index.html","695a7d763f4061b794816df3b6554111"],["/MySQL-列类型和数据完整性/index.html","d0e1844d1455232a997617c1683fb55b"],["/MySQL-数据库设计和查询语句/index.html","4348e7f78bb1ec4e2da44cd87310e2d6"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","52df90aec4f921d4a8ef44397f9b90ac"],["/NSCODER和SWIFT初始化/index.html","7d6f60435f7d7b05819aaa0500d7f3f5"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","471a3b2a471aca47030757c04b046a23"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","5420a755c5d8ae950889868fada01329"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","1fa8b44c7227cd50b9b9b426f97e6a30"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","c0dc5a1b53750f7cbef3ca64df45a37a"],["/Sqlite 使用Tips/index.html","8d548f3c041ca766d9ada827e9c20879"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","9a6caefabf0851f8edccc9ad831078d0"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c4f8f43e79f58401cc3ee09595876058"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","acd477cfcfed5101284c0f2709f667f7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a349cfba40ec3a7086e27f5f0f2f8249"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","3ace23a0783d1d823f85cc079cfe1e7f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","53ae9804bcd89cf12512372ab4759458"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","26ac4ef59a7adf423b745cc7a9c82821"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","05160bd93558a6b9d215048f9c60a083"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","38dc9c7311c32784714d310988e36650"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b50a3212084453a596e8db883f5e05a3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f0c974d139fcb219bb3a72c46f2e0894"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","51ac4379e3804b24ee4fae3596dd6171"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","76d8f6a38a5c21b454d46f30c7ac7576"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","67708087cf5e90d7d5ca56c15aa579fe"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","e8b6c56dda2e94cfc84d7487bd9f78e5"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","8346f2cc1d07f29969e14b7c95399633"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","cd27a94ea1cd6565409598b0b91c9b82"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","8b604dca3e224f4b2469e45fad4506c5"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c0668c5b1e103c01265e3b02c7707c31"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","238174cb0fa6be8a883cad6767dc4908"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","add42f86d2dd4fec42ce7dd3501a8fa9"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","158435550265e1ad5a3094c45b9aa7bd"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","5183a4efa5ee4c8f593fe8995e1872ab"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","28f734b63b77e22e3a52a5ea474c6062"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1df923ee03127d5bdd07e1601e4f15f8"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0e814b76105a6df2989b3e04cf5d82a0"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a46766148bf218a7b2d183e16eba7164"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","c8e8a5b83c9801c99a6bc29fab2312a2"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fab7a82ee12c780d52d4415b078cd4f3"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","6ae2fe8248f1b6762ce8fb6a85ddee51"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","cadecb6d558e88fbd6cdfc2c6cfe65dc"],["/Swift CompactMap vs flatMap：差异说明/index.html","0e0244b0655c0a242d7dbdace332ae43"],["/Swift Grand Central Dispatch 深入实践/index.html","e95b2f7789da778c38fbaff398637545"],["/Swift Lazy属性初始化/index.html","d726642d279f9b95da5545e9c294dacf"],["/Swift Promises 初体验/index.html","3f236e72e048d82f95fdad32ae96c6ba"],["/Swift Promises 探究/index.html","d18739e77e5bc2756c0e6fc3a1fa4047"],["/Swift UICollectionView使用指南/index.html","599a47eddb3493c4722ff0fca67e996f"],["/Swift URLSession && Combine framework/index.html","197d641122939199c9e0956d895e8add"],["/Swift tips/index.html","7e9c608a30b5e9291eb8cc91edeca157"],["/Swift 三方库：GRDB 使用指北/index.html","35fde2fd2a909653e9f826ac1399cd01"],["/Swift 唯一识别的视图/index.html","793b3f49dbb0ad043ef78f793b23efce"],["/Swift 如何学习现代UIKit？/index.html","ab7c45ea94e54489740fb27c55247cb2"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","6afc7cf90d8f51e2c5c769f38192b368"],["/Swift 用 compactMap 替换 flatMap/index.html","4d28e5422c3cb978807d24ff4cb8f77b"],["/Swift 选择和播放视频/index.html","af0ae0445be58120b7bb1095cc513896"],["/SwiftUI 系列(一)：1、 简介/index.html","d92ca62dccb3cb4a8532ead693a5224e"],["/Swift中UIColor最佳实践/index.html","75d542fc1ea21a6018284ebb6dacdd08"],["/Swift中快速简单的工厂设计模式/index.html","4234801ff67709efaf17697ad1da696e"],["/Swift中构造函数与静态工厂方法的比较/index.html","39abc9c9635d26d50aad81f1b285839a"],["/Swift中的UITableView教程/index.html","ad39ac8e15252766b5b3019cd2806dbc"],["/Swift中的懒加载模式/index.html","e19ac310a144326d2dadae6e3112ce3e"],["/Swift中的模块和挂钩/index.html","82f4a2c66be86ce82f019ba13d490696"],["/Swift使用布局锚点添加约束/index.html","8a8175994005c9640cf9ddddeba15f4d"],["/Swift依赖注入设计模式/index.html","341376dfa43bc2660ddc9ed415bf1a23"],["/Swift关于Dependency Injection (DI)/index.html","c497e300456059a2c91db6a3e20174f9"],["/Swift初始化模式/index.html","fba28e715ee1870bcf64d51f0fa2b57e"],["/Swift单例模式/index.html","e861ce67cb65cc260a0baea3d3b82268"],["/Swift原型设计模式/index.html","f19dc89cfccba756e5e29aa839d6c6f6"],["/Swift命令设计模式/index.html","966b863b956be89da8f3ed042e637122"],["/Swift外观设计模式/index.html","98f4376513a2f88a11485eb06f459030"],["/Swift委托设计模式/index.html","32e7ac3a83dbdf907b149a7ab9b8c67f"],["/Swift对象池设计模式/index.html","ad48b4b41a70b2d4146d0403d9ed4a79"],["/Swift工厂方法设计模式/index.html","d78bfddcef0cddd1d5cb86211a112dcb"],["/Swift带闭包的懒惰初始化/index.html","3c4e5770b8bb1854501b3be1b31647e6"],["/Swift抽象工厂设计模式/index.html","4085877c4f788fc31009ccab08fe9517"],["/Swift掌握iOS自动布局锚点/index.html","35acd5704e4cbd105518e04ea3d65f32"],["/Swift支持旋转的自适应单元格/index.html","e590b41f76c62a5d6888f80f796f4cbb"],["/Swift枚举值/index.html","0a91a97a6118dd70700c26873f8e54d5"],["/Swift生成器模式/index.html","74d595c63c485e86b83ff190960959e2"],["/Swift结合Xib文件自定义UIView/index.html","85c381afe6b4b5727fbf5968b49d9a6c"],["/Swift编写的20个iOS库(一)/index.html","c0927fa66a43bc26c53ad9d7d18a1ebe"],["/Swift迭代器设计模式/index.html","2c63c844c6aefbe5762bcddda23c9496"],["/Swift适配器设计模式/index.html","f4dba81dd92d7a39dfa96c2eba4d3c16"],["/Swift静态工厂设计模式/index.html","dcc3063902d0d72eb7f10a06a941791f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","cbe0364e084073e58a6d5ef8cb27d4a8"],["/UICollectionView data source and delegates/index.html","4a2ae7dd055f6b3bc554ec9ec3befcba"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","8fbb38e9200566b7fe87958534d4dcd5"],["/UIKit初始化模式/index.html","c21e7dab53019ad2a6ce92f959520785"],["/Ubuntu18.04替换国内源/index.html","afd91c0ed8914aa624db3818ac3b757b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","cd9a6c577f7aba9b50dfcc5d57ed719a"],["/Vapor系列 (一) :  Vapor 初探/index.html","c4f5920019be6a7ebae71155439722e9"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","501df2911e1c6186479455a65502ae6c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","36c159091a4ce31a1e35baf26101af0b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d6d130734e260b5b2fd3b4249cc8986d"],["/Vapor系列 (四) :  创建博客数据库/index.html","5e7835206fdbbe8e7e90378a09877ff6"],["/Vapor系列(六): 徒手撸一个CMS/index.html","bee45173324a39050e0f04ef99479354"],["/WKWebView与Native交互注意事项/index.html","cee63315e1f51ccea8c8c3bb5206f3f0"],["/Xcode扩展/index.html","bae19fb69d82c11e8dfc926ed41994c8"],["/about/index.html","d49f477a5b74307a24e21863037827c7"],["/appleOS的Networking示例/index.html","c154764b39935490f518e66d73595c49"],["/archives/2020/03/index.html","b7b2e6f012e80c100db73c1d313dca44"],["/archives/2020/04/index.html","2b42abf5d7bec6ccd1f07a67c9942b3b"],["/archives/2020/04/page/2/index.html","949729f5fd5bb1e845c815513b82510c"],["/archives/2020/04/page/3/index.html","75d4fc481987e2424ec8c90d1621bf34"],["/archives/2020/04/page/4/index.html","1d8b5a4a70d30462c0008937417ee181"],["/archives/2020/04/page/5/index.html","6afad40b0820c28dec43cc6e7799fe01"],["/archives/2020/04/page/6/index.html","57bbcc78104793df5ca562479e55738a"],["/archives/2020/04/page/7/index.html","96f4a33fc50971e9ad543e5128f94495"],["/archives/2020/04/page/8/index.html","92a8f843e76b4b5918f74891082f5e3f"],["/archives/2020/05/index.html","5fd32501dc7b67145b1a9e611d899b1b"],["/archives/2020/05/page/2/index.html","32cf557e57a5f92234b55bf2e2f32494"],["/archives/2020/05/page/3/index.html","817875395d4acd0a02d51dc5d72d06ea"],["/archives/2020/05/page/4/index.html","63a3ee416f447c14f4d9880420e5a131"],["/archives/2020/05/page/5/index.html","0b9671e2d5946ce25df600f0e1177609"],["/archives/2020/06/index.html","591cde2dde4084bfaa0a8788e84019d7"],["/archives/2020/06/page/2/index.html","2310442459ace8b0ec8c97d55eb6a6e5"],["/archives/2020/08/index.html","545c08e5443513282acc804edf05e933"],["/archives/2020/09/index.html","e5ba529a32b34057dae64b1f428de6ba"],["/archives/2020/10/index.html","3d47127ce5a5e185cf396b2cef86a868"],["/archives/2020/11/index.html","3168b595d1257f8e945df8f75886a01b"],["/archives/2020/12/index.html","a0d854a84869417646c087af265a266d"],["/archives/2020/index.html","95b9995af96f93f0ff60d6bd16c5f9c5"],["/archives/2020/page/10/index.html","5aded7829fd39775d54e39273586814a"],["/archives/2020/page/11/index.html","a8e0be521976d371b653c55fcf54bf01"],["/archives/2020/page/12/index.html","067a54ed0685c35dd85ed47ac91293dd"],["/archives/2020/page/13/index.html","a60cc81deb197f4c64a1aba222f15caa"],["/archives/2020/page/14/index.html","6f246990114737fa3ef53ff09c0702f5"],["/archives/2020/page/15/index.html","a9b357671a99467e4c01193ee5ef77d0"],["/archives/2020/page/2/index.html","4f72a4e2e9fd3f9ab132052ea0616706"],["/archives/2020/page/3/index.html","291697ee631cf319dae060df09df0558"],["/archives/2020/page/4/index.html","89b5a0589e2a487b5105811371e5836d"],["/archives/2020/page/5/index.html","0ab36de15d4dcfd90c47f45bf1210c1c"],["/archives/2020/page/6/index.html","7bbde026145edcbaedeb003a5ebf2b38"],["/archives/2020/page/7/index.html","8ec961adf8899e7872fdfd99b723886f"],["/archives/2020/page/8/index.html","9efb120c3c5c529f6801e34d7bdcf318"],["/archives/2020/page/9/index.html","873c3e107408caa151703c997a4153d2"],["/archives/2021/03/index.html","f9def9a152ce375f6fa6af17b5edb504"],["/archives/2021/04/index.html","e2a9f73eb8e29b159b9f390a652ed2fb"],["/archives/2021/05/index.html","21af6d758aae8c93f755bdbc12dc57d9"],["/archives/2021/06/index.html","4a9652021b4ff9c0bdd85fb54e1db55b"],["/archives/2021/07/index.html","1f91356eaefae70a9bf62eac855bad88"],["/archives/2021/08/index.html","23a83acda8e3806c4476fb1a76f296bb"],["/archives/2021/09/index.html","a6f08584708fb9626a44e5ceece2d163"],["/archives/2021/11/index.html","425377d514e83164b9de29e0a9efacff"],["/archives/2021/12/index.html","198e8d8b38da47a63fbdd61dc2cfdd45"],["/archives/2021/index.html","410723686c33e09bc86242e47002ab0e"],["/archives/2021/page/2/index.html","030a26cabdb7444f5e43a1a24199881a"],["/archives/2021/page/3/index.html","deea3117c94614f705ad32fa1dbd1d2c"],["/archives/2022/03/index.html","9b5ec0b61cdce7d6c1ed86d54198e239"],["/archives/2022/04/index.html","e97a7b60f144cfbb7e94cbcd30eed0ac"],["/archives/2022/05/index.html","d609247b4403adc9dc6ec971aa5b6f14"],["/archives/2022/06/index.html","c4400c2f839d6a2cc587b6e2472b56c0"],["/archives/2022/07/index.html","930b90dd10f02ee847531f91d289d16e"],["/archives/2022/index.html","a9d363e81f326022764000a7f3be3655"],["/archives/index.html","2351c0fabea995e87c5fe57868827d96"],["/archives/page/10/index.html","234b5b0141813bdd546aac80380d579b"],["/archives/page/11/index.html","6bf5cd61cc12f7b851993307efd59c38"],["/archives/page/12/index.html","3c84ecef60cd569f2dde4fa784497704"],["/archives/page/13/index.html","6a943d2a3e663093ca1948a0ede6e3dd"],["/archives/page/14/index.html","5274473db4731c7aeea7ea9595effe12"],["/archives/page/15/index.html","14c78cdeb59e6eacf7e5943f031292e8"],["/archives/page/16/index.html","631b8f6daed5cd1dda1263b8fc6b4e03"],["/archives/page/17/index.html","2d3ac56b7205dc4aa1f4c806b483b229"],["/archives/page/18/index.html","d2c255404f80db9834baae7619819bd6"],["/archives/page/2/index.html","9a3ff53a8c505d4b9888d1976d3934d7"],["/archives/page/3/index.html","19962b43cb8855f7ab17a95ded296ee0"],["/archives/page/4/index.html","6d8736bb3a6e879bd0369700092c02d9"],["/archives/page/5/index.html","99a3e1bcc091f4738b8f8ebb52f77fcc"],["/archives/page/6/index.html","b70248d42ccc61d27f6cbf31625e62cf"],["/archives/page/7/index.html","f08a312333908ab2f629981f5b208680"],["/archives/page/8/index.html","40cb89c563f5fab266859c5a5e18e571"],["/archives/page/9/index.html","ac2457fc0b02afb7b8381ad4c2cece57"],["/bugly 上传dYSM文件小记/index.html","cfb8c5b5071d530033000d981ba6d05a"],["/categories/Advanced-Swift/index.html","bee2d5a32dcda2123fde9bc704da2ec4"],["/categories/Advanced-Swift/page/2/index.html","ccf23fbcc8da0a869f1aba8d551e4ff8"],["/categories/App-Architecture/index.html","a0f92f296f0e957ba866bff061e1c326"],["/categories/Array/index.html","c6043919adc69d4dbdcc7efe866094ba"],["/categories/CocoaPods/index.html","e37186bb65be27678d43583577360524"],["/categories/Codable-protocol/index.html","9faeab0bbebf8d0f34b0a6b33edfd8f0"],["/categories/Combine-framework/index.html","0cb540433fc4231ac98af8707f82eed6"],["/categories/Combine/index.html","7b3095b95bbbaec8827117aac4f857b9"],["/categories/Docker/go/MySQL/index.html","cda172e68e7d221b1eabc3802015061c"],["/categories/Docker/go/index.html","aeab19395dae80a7fa9e14655116fbc8"],["/categories/Docker/index.html","65458f1e48f2d61d668eefcd3ff7b7d6"],["/categories/GRDB/index.html","ebe2157299ba5d34c33d8017e49eb25f"],["/categories/Go-入门篇/index.html","3ff693c600583130b75943c4b5b74681"],["/categories/Grand-Central-Dispatch/index.html","64d0c923362357899efb90ec905bb807"],["/categories/Homebrew/index.html","6cc69d206dff68e4ab73935d3240960e"],["/categories/Linux/index.html","7677dd7b663aa6fdef8f738470e1c7ac"],["/categories/MySQL/index.html","49695f55139e97a66f60b11b77a5a9c2"],["/categories/Promises/index.html","b93fffaf7af8321dccb2c41884ddb9a9"],["/categories/Protobuf/index.html","58a578ee7fc0c9a7023c9290a8b8df84"],["/categories/Result-Type/index.html","7a7ae4ca08515ca5d40c4b2ee8126e04"],["/categories/RxSwift/index.html","dd0003f89e8c1cb4f6f3461a6279208b"],["/categories/Server/index.html","8a9107ee74a1b2b6ee5f4a2b2573de2e"],["/categories/Sqlite/index.html","3b2d3eb27b32dcb4ec6541e1cb54708f"],["/categories/Swift-Apprentice/index.html","efc81f7c9e014db31bf409c827937374"],["/categories/Swift-Apprentice/page/2/index.html","ca66de00c1c8cf4c75e6a3e0430516d0"],["/categories/Swift-Apprentice/page/3/index.html","7de2c20d1aa16161b3f6981dbdc4c877"],["/categories/Swift-源码阅读/index.html","34143983d62d0bc10618cccf5b096c03"],["/categories/Swift/index.html","1edf505689c550bad68471d79e9b9395"],["/categories/Swift/page/10/index.html","525c9fb9a8d8e756265179127c98fd53"],["/categories/Swift/page/11/index.html","cd330c876ae5c2cbbb2a2fca48b7f920"],["/categories/Swift/page/12/index.html","95075ff9a91615ab5846f2ecf6860995"],["/categories/Swift/page/13/index.html","4000277d968752db8416974a2c53bdb5"],["/categories/Swift/page/14/index.html","fa1157b5d10d49bf412a7ee556e0d4cf"],["/categories/Swift/page/2/index.html","f9f2884cfc0f6fbc8c7a70d0ac0c932a"],["/categories/Swift/page/3/index.html","c2de0d821379f1ebaabae8be234c01cf"],["/categories/Swift/page/4/index.html","49fd5525f9b1e587758ebeea96ac5e56"],["/categories/Swift/page/5/index.html","07e81bdf067be262985bffd48f3406e2"],["/categories/Swift/page/6/index.html","f7a5fa56fd2db97d08eba8915e6e82a4"],["/categories/Swift/page/7/index.html","e179079ca1c06453ab9f6df8d81feb4b"],["/categories/Swift/page/8/index.html","d6854c15dd056f085c94f05da74e5452"],["/categories/Swift/page/9/index.html","c7f44089fd79f3c2e6a2156e92ff86ab"],["/categories/Swift5-2/index.html","2997b8adab5548fe4d6a7f6060331810"],["/categories/SwiftLint/index.html","567bcb98ba9b49ec4299e0b71f8ac3d8"],["/categories/SwiftUI/index.html","1208612e8d21293eeaae275f97c9e952"],["/categories/UICollectionView/index.html","f08b4d33c04cee121554d803282229b7"],["/categories/UIImagePickerController/index.html","09a9f6c6ea817deecc5bb0a4553f83b9"],["/categories/UIKit/index.html","b39560b53867c428a3bcc771eb95c1d0"],["/categories/UIKit/page/2/index.html","18fbecfd66a00004fdb206ed49d522f9"],["/categories/UIKit/page/3/index.html","395aab08be2a5de7264d92c74aa73bb5"],["/categories/UIKit/page/4/index.html","aac613c544a92fc0842cd4e95fb369a2"],["/categories/UIKit/page/5/index.html","070d51d0f65a9f4786738c21d4778fe3"],["/categories/UITableView/index.html","d7276417e9e583ef2d4aeb6ee9d99035"],["/categories/Ubuntu18-04/index.html","314c32e7ae27ba03c549ff97fac20187"],["/categories/Ubuntu软件源/index.html","1dcef5a6c0d21cb55fa706b66cb3c338"],["/categories/Uniquely-identifying-views/index.html","4db5d6a1cc9be84f0c89ea6c71ef6373"],["/categories/VIPER/index.html","446a7b3f1869d45ee61c6057108f98c1"],["/categories/Vapor-4-0/index.html","f5b4b5275e12a0b51f88e981db808e52"],["/categories/Vapor4-0/index.html","fbc397283c28af7af90a0adf2c3353c1"],["/categories/Vim/index.html","468550312ddc16d1295a0cf9357c2d91"],["/categories/WKWebView/index.html","831bbbccf6d2945fdad181410867e0e6"],["/categories/Xcode/index.html","64e8ece03178a52daff79dd855967224"],["/categories/appleOS-Networking/index.html","dd8bac674ff92c3f47344675abcea659"],["/categories/bugly/index.html","7fe9ef90bae02ca1ace497350654c425"],["/categories/enum/index.html","e7b209d8e5cf71ecd64ffdbb84e2e999"],["/categories/git/index.html","8ee38ec20d005f48ab78582ddf385875"],["/categories/go/MySQL/index.html","49f6e01de52c479495604d2e2cfaf045"],["/categories/go/index.html","d2ca703260db37a705591935e4b88bee"],["/categories/go/interface/index.html","a88af3ec6b2c6904671cae25aefd181d"],["/categories/hexo/index.html","05d698292e6e2eb45d733ee76c4ac4a4"],["/categories/iCloud/index.html","9ba20b37cdcdcfd018563134826af960"],["/categories/iOS/index.html","a4caa52fde26467bfd48f6c27253cd6f"],["/categories/iOS/page/10/index.html","7159ce30117919c3bb4950b533e72167"],["/categories/iOS/page/11/index.html","aa24a45f6574aea7a0d102fd66e69985"],["/categories/iOS/page/12/index.html","b77444c7fe77807172f87f92746702e3"],["/categories/iOS/page/13/index.html","c153348d285151f91dcbfd59a4b29f9b"],["/categories/iOS/page/14/index.html","14c0b882b80f5ceba5df2e16455977fd"],["/categories/iOS/page/2/index.html","afe6ea10edf85c125217ba0345eb97a1"],["/categories/iOS/page/3/index.html","4f95005e15898c740337c630686c6b07"],["/categories/iOS/page/4/index.html","2e6aa3243d59b433390d1e1212118cfc"],["/categories/iOS/page/5/index.html","deea651823ba7aced8ba08770ae08301"],["/categories/iOS/page/6/index.html","fc0b8861c0b1bcb839ea3d063ae8122d"],["/categories/iOS/page/7/index.html","879eeb5f3363636a35041e5a89534f7e"],["/categories/iOS/page/8/index.html","f4888a0e552f63dfa54ad93378e7ef02"],["/categories/iOS/page/9/index.html","c726fc11c30c94ec5cd8e9e85352d4f8"],["/categories/iOS面试题/index.html","1ca4a406615f0bd84e5dfc352c774274"],["/categories/index.html","2db46230d57a2a165c0d59f54088f968"],["/categories/random/index.html","ca0b4c30da39db671d5afaa192b2ced7"],["/categories/三方类库/index.html","290d3b993fc2f5543e018d82713bc5d6"],["/categories/函数式编程/index.html","8160b12767f64494982e40df556d815d"],["/categories/子类化样式/index.html","d9416d7865026e5f9da24f35ba1ae36f"],["/categories/开发技巧/index.html","3791bb891886f231d2a863b39fcf583f"],["/categories/开发记录/index.html","1b9cb32711b21a29ba2319279344cbf4"],["/categories/数据库/index.html","5447098be8d227468dce75cc3e0fefc9"],["/categories/架构设计/index.html","a6a90acadcba8d2ebcf9393682db8857"],["/categories/测试/index.html","599a2ad8176031c71b6b24762cc63f0b"],["/categories/用户体验/index.html","9b66f38603faf331814eecf91e2d9e71"],["/categories/用户协议与隐私政策/index.html","8cbc2ef63d7a5ee1f0e090ae59156f9c"],["/categories/组件化/SDK/index.html","ecacaf7881bf05e326a592dbde570f79"],["/categories/组件化/index.html","07c0d1456b161fa56c6e5696192fb13d"],["/categories/组件化/模块化/index.html","bbc7c1f72cf38de7c8f4e79b423cddb1"],["/categories/设计模式/index.html","8a86a10ee8087c587c81c99412f04e8d"],["/categories/设计模式/page/2/index.html","e821bd2975df6d6c01f620154e1f33b1"],["/categories/设计模式/page/3/index.html","8338f59d1e655888039fe1a26e210c1a"],["/categories/逆向/index.html","1bde5a0426334ce48204e99de10220c6"],["/css/main.css","0caccd37a23bee205a5a0ec1d1bd9902"],["/go moudle 导入本地包/index.html","2ad650c6b1279b10d7594b93e7cb7284"],["/go 库专题(一)：gin/index.html","80aa7b24d26085ddf2d89b7fea52e2b6"],["/go 每日一问/index.html","18cabb3629f7feb48a0ac814b74e4cf3"],["/hexo部署失败/index.html","022f7cbed886fd0345ee53c6300fde92"],["/iOS 15 适配/index.html","31f2029c74be49134360a0bd35e02d07"],["/iOS VIPER架构深入实践/index.html","4f7f8ad9afb756760f6910ad0732a4e7"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","4526fc95e82a15efdbf644d24378c30b"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","f7d96cdbfeb92f79c22c617831909207"],["/iOS 自定义视图，输入表单和错误提示/index.html","8b2529d871944daa3f9af296b18c3ef3"],["/iOS如何使用iCloud文档？/index.html","b8447fa38cf27e348dd9783102b76e5e"],["/iOS子类化样式/index.html","33dafecce1bc83bd45e6d3265b381d70"],["/iOS开发记录<一>/index.html","e170fd698819a3bb8bf9acc4c6412f17"],["/iOS自动化布局编程/index.html","1e99def89dc5a090219f4ab26db53538"],["/iOS自定义转场(By Swift)/index.html","a51dc4334099dac133ec9485dad65872"],["/iOS项目架构：使用VIPER/index.html","6096fde352b52b7087cc9ec7c1104390"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","49c2691e8855ade862c9f1a58c93881f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","063c5eaafbc23b4a19da23e14a43b8a3"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","6b8e94b44169656694d62fb4d13f99ac"],["/page/10/index.html","890455d1094c648a6b7d88e1ede76dc0"],["/page/11/index.html","5f1db5579a529153993145937cfda1e1"],["/page/12/index.html","59d942049e9c96411e1f8dab6735e9d5"],["/page/13/index.html","e333aeca4e31a8a7853c8462fd91450a"],["/page/14/index.html","e7ee96c5080e196bf997c7b91dd1a12e"],["/page/15/index.html","3c11321115bd45ea6aedaff54d1b1064"],["/page/16/index.html","8ef0d0c1513e9045462b681919beea79"],["/page/17/index.html","1f4126e50128e6bd6a8aab820ff9bc22"],["/page/18/index.html","8509ebb8ffeaf0ca852d545338c83af2"],["/page/2/index.html","a16ba4508d49c1e61f33ce9348c6f25c"],["/page/3/index.html","d8ea4bae35d21d9942d4a41e8ca8bd07"],["/page/4/index.html","f138f7e2cbd6dbcc210e515db0416126"],["/page/5/index.html","c034680a9994110f4e537bdde90d3abf"],["/page/6/index.html","a5a884887fddf7e173557821a31aef01"],["/page/7/index.html","6c484af11fe3218020c6c0c1e548340c"],["/page/8/index.html","9bd62b0eac966ebdc57d5b305ca865b7"],["/page/9/index.html","a53d73ae610e3e40f18acb0ed5879eb4"],["/schedule/index.html","80deefae342aab2c9756b2dfa7c5dffc"],["/storyAppPrivacy/index.html","50f429b8cddf012b8ed01afd26bbf8d6"],["/sw-register.js","f0412bfd5d328a5d14405a2bd0907772"],["/swift 专题：函数/index.html","a432b506476ce55d6597dac081faadfb"],["/swift 专题：闭包/index.html","b82f506ca8607188e9a1491a75ebe17a"],["/tags/Advanced-Classes/index.html","4c3139ad7c3682d10a1dc50dd3c77af9"],["/tags/Advanced-Swift/index.html","bf2753fa69e1697cd07e50a5aded1e7b"],["/tags/Advanced-Swift/page/2/index.html","e38af475f96d61e3fca3cf18f3223cb0"],["/tags/App-Architecture/index.html","80278196341881912133807c5b629a88"],["/tags/Array/index.html","7fc72d822d89345d418bd278418ceb72"],["/tags/Arrays-Dictionaries-Sets/index.html","4836db7d14f9445a023fa181d7768fc2"],["/tags/Authentication/index.html","fea4e8c71ad920dc8f740530c67f8750"],["/tags/Build-in-Collections/index.html","e748d999322ded6996454d45357809b3"],["/tags/Building-Your-Own-Types/index.html","e6abc48ed3072ceb18723027d36599e2"],["/tags/CMS/index.html","c5183fee361dd0f26e94f2a0a2f93956"],["/tags/Classes/index.html","977ce7895ff1a0e87a3f9965c2961f28"],["/tags/CocoaPods/index.html","831901198f0f7bd7f481bde6ad251d16"],["/tags/Codable-protocol/index.html","47f0a2c547d31d30c452270a24822ace"],["/tags/Collection-Iteration-with-Closures/index.html","e37792bdeeac857b2d67718dff337a3d"],["/tags/Collection-Protocols/index.html","97a1d99709d86307da66868c7d0b5743"],["/tags/Collection-Types/index.html","8792ac7e3817b55b531070926b045bbe"],["/tags/Collection/index.html","bbe97c4eefd72423e3f3bc073f7f285f"],["/tags/Collections/index.html","a9523dc41ec8f70ba01f72044952c82b"],["/tags/Combine-framework/index.html","f82542a2794d7717a3bc40a486bfe3c6"],["/tags/Combine/index.html","42129367bed8469ff8ff12bcd103a3fe"],["/tags/Dependency-Injection/index.html","0726348802a1942cdbbad4b16ebacca0"],["/tags/Docker/index.html","9163660496df7488a351663ab765efe2"],["/tags/Encoding-Decoding-Types/index.html","90852f1aaea6ccc5dd24e9ab5bd6443d"],["/tags/Encoding-and-Decoding/index.html","6e37bc81f28df5fa7ee05dacc7e28944"],["/tags/Enumerations/index.html","dd187f306186587337755b9bead7ff9c"],["/tags/Enums/index.html","d5ac3cf3aeb60404d12c76ed6f161274"],["/tags/Error-Handling/index.html","916c95a5622b9d43380cc7d077b25950"],["/tags/Functions/index.html","c8dd5f4ff466fc29ce14e0081b699c05"],["/tags/GO/index.html","fc4c392af94cd2a1e517b9436b547ccd"],["/tags/GRDB/index.html","3758988a5fbb89e6b72107880d713e5f"],["/tags/Generics/index.html","775a60767602feeb68e4c20f690eb56e"],["/tags/Grand-Central-Dispatch/index.html","67ca29bb01d504203ed70680449f1f19"],["/tags/Hello-Vapor/index.html","666d9df563858f241f6236713847c693"],["/tags/Homebrew/index.html","b5fc36f6ac666adf99aebe04d291610d"],["/tags/Interoperability/index.html","e2b362ab00c574c7f8ec31995bf919f8"],["/tags/Introduction/index.html","8fe3a4a88433107f15aa50fea88e1b7e"],["/tags/Leaf/index.html","f860c13f78de0b87b60c84b09101ff2d"],["/tags/Linux/index.html","60262ecad5f79de569832b88e49ee5b6"],["/tags/MAC/index.html","961f2084336fe0e33c66e6d186b8397f"],["/tags/Methods/index.html","30c8abbc24f8521da1220c4fc3f1ffa6"],["/tags/Modules-And-Hooks/index.html","e5c41e1b1b9e71042e22220d9e63a97f"],["/tags/MySQL/index.html","8ac1b08c519689745a2fe180bb08a06a"],["/tags/Optionals/index.html","0bfdb62018902d2e0b9c6be7e72c118e"],["/tags/Promises/index.html","4c9211d8672dc76b5a02b4ca5a68d825"],["/tags/Properties/index.html","39e25565bc35f1b79bf09342e693c906"],["/tags/Protobuf/index.html","24e3eeb2ea82148ae6543de1057148be"],["/tags/Protocols/index.html","31d56036dec50fe220cffd63130a164f"],["/tags/Result-Type/index.html","d89ea583195b15068e4ad95a9c49f0f7"],["/tags/RxSwift/index.html","4300491fd68102e9b09b8eb9a3c5f0b7"],["/tags/Server/index.html","554a369652c76174fa32f33b45b25d9b"],["/tags/Session/index.html","69bc170a605febd588eea40ec5703a77"],["/tags/Sqlite/index.html","cb233a98c37d8de5181b1af1cefb8e3a"],["/tags/Strings/index.html","54ea76aa37c16c22e5f241b7d2e8cffe"],["/tags/Structs-and-Classes/index.html","db416b0f696440e69c4e37d01d89d81d"],["/tags/Structures/index.html","5b04db76d3fa1275f5042d114aec3764"],["/tags/Swift-5-0/index.html","7653696fc04fd6d7d49ee827760965ad"],["/tags/Swift-5-0/page/2/index.html","d29e1621ef2d41f72bd3b76a72f671e5"],["/tags/Swift-5-0/page/3/index.html","446233080aa96a684ff340e299be9fc9"],["/tags/Swift-5-0/page/4/index.html","19a8bbc36b4edab2b51665158f52457d"],["/tags/Swift-5-0/page/5/index.html","abdaafc6b72c79f58a0511b5bf668e7d"],["/tags/Swift-Apprentice/index.html","0177d88a25ef5e7805ef2acdb8e7ec16"],["/tags/Swift-Apprentice/page/2/index.html","91a01dba78dc2332216986e4852f2191"],["/tags/Swift-Apprentice/page/3/index.html","d40a1741d4f69d08e689ec473477d1cd"],["/tags/Swift-Package-Manager/index.html","f937ec24839291634fd97e66d70c4dda"],["/tags/Swift-源码阅读/index.html","95ca9413695cd240655f20b542ca9746"],["/tags/Swift/index.html","2ff1a915acadc8c2ca104eecfb2d7516"],["/tags/Swift/page/10/index.html","a9f7b0d4b927c4d65cd113915daed85f"],["/tags/Swift/page/11/index.html","2f183855c2958f0c624b5f292b6db714"],["/tags/Swift/page/12/index.html","bd671d3e9dc6eb17a053f284b65b53aa"],["/tags/Swift/page/13/index.html","1e8ebd0494686366876ce8dfedbc84d3"],["/tags/Swift/page/14/index.html","7aebbef19f7cb18a661082f659e0e9ed"],["/tags/Swift/page/2/index.html","e60436aaa64b4dae9936989ec16ba7a7"],["/tags/Swift/page/3/index.html","96e702b8f6cc74f4dbba580ab0dd867f"],["/tags/Swift/page/4/index.html","4b5285bf45dd4b606d47fd0fb68925d2"],["/tags/Swift/page/5/index.html","127cfa53b842df5ad57d801d931a23e0"],["/tags/Swift/page/6/index.html","0cc08d12924dff0fc5cea2c48868f3b8"],["/tags/Swift/page/7/index.html","3de92a58b9cfb73d606cc004dbc80e55"],["/tags/Swift/page/8/index.html","510e664b8bf72cb1d4f4dda49c768014"],["/tags/Swift/page/9/index.html","41ca9eb2655cecf073d19a33e46d0f30"],["/tags/SwiftLint/index.html","7573a97d85b086e2b77b4d99e87d9635"],["/tags/SwiftUI/index.html","4ad928f82b51aacf1e70b5a2333b4406"],["/tags/UICollectionView/index.html","b92a78832fb5984080e8a106c99b5f25"],["/tags/UIColor/index.html","a524c362f10ef7a2781d7d585d5cdf21"],["/tags/UIImagePickerController/index.html","e971e7359dadb7cf6e7e11663bb8f5be"],["/tags/UIKit/index.html","f6cbbafbd271aebcae10a0283c2004a6"],["/tags/UIKit/page/2/index.html","63943047e0dad13dbf6bed83fd0761af"],["/tags/UIKit/page/3/index.html","3061248e4316bb346a190c62da444b83"],["/tags/UIKit/page/4/index.html","5178054e7c53bdfe3e13f3886d8b8998"],["/tags/UIKit/page/5/index.html","44ce82cbe94f0e2e7466b31c7ff8e332"],["/tags/UITableView/index.html","d3ad07629dcc19fc0ba4a331bf2a33f0"],["/tags/Ubuntu/index.html","b5f051ee9b49793d9285304806c3d4b8"],["/tags/Uniquely-identifying-views/index.html","44190f9eb151b115c80ca8b8b56987e2"],["/tags/VIPER/index.html","e1184f86059ebe99cc0fc245963268b6"],["/tags/VMware/index.html","3edf429e694b5feb8253d512d780a37b"],["/tags/Vapor-4-0/index.html","87c08a190d88c4e2f86ee3d9b8808771"],["/tags/Vapor-初探/index.html","ad4b26a09fd79afa84f966139fd5b9e8"],["/tags/Vim/index.html","bf6e20c11edebbd8e171598db396c297"],["/tags/WKWebView/index.html","78509648bac63166e6c652f7b2b61e4d"],["/tags/Xcode/index.html","d8914d160165043bf18dd69988381e86"],["/tags/appleOS-Networking/index.html","4188045b2fcf70eed69b5f149450ebf6"],["/tags/bugly/index.html","8c21ddc2153443c5ce3de943a292eb36"],["/tags/enum/index.html","b78131fade6a979316146e031e46dccd"],["/tags/gin/index.html","011b49d1843cc5010e8534df77e7a166"],["/tags/git/index.html","5782417bdd73b2a06e4e8c482c589bd1"],["/tags/hexo/index.html","8ba45ab0d1c54ee94ebca3ef85942469"],["/tags/iCloud/index.html","ee1f1e980f837ea94acad66dc3fd5895"],["/tags/iOS/index.html","287666caa5ba7981fe148d98e2e3760c"],["/tags/iOS/page/10/index.html","8b2a05fd27d83debced5ba06bf084c45"],["/tags/iOS/page/11/index.html","8623efee8cac97ed11547f4f641ae29e"],["/tags/iOS/page/12/index.html","254f1f1d9a500d4ab3c068a61212395d"],["/tags/iOS/page/13/index.html","98f7cfd32a906288175ba4b2da618ea7"],["/tags/iOS/page/14/index.html","15c772addaa8b538f8ccf984f5f9434f"],["/tags/iOS/page/2/index.html","84ab5cd4c37324a0cca26af8b7cf0901"],["/tags/iOS/page/3/index.html","dad78615327c6d7bf321857621e7e303"],["/tags/iOS/page/4/index.html","212f1d0c2a551d007c846ec26a7fb4dd"],["/tags/iOS/page/5/index.html","33e9db9ef34b2bf34742ddd9e0f572b0"],["/tags/iOS/page/6/index.html","db8b286937111a6552337381c1cc6a11"],["/tags/iOS/page/7/index.html","d9a0199b4ab3697af58f3276e7252144"],["/tags/iOS/page/8/index.html","0074ad7e1bfa3b34cbc614827eb8e93d"],["/tags/iOS/page/9/index.html","8c22795023a8b2570b0e99faf6c8d668"],["/tags/iOS面试题/index.html","91b7422f5647f280f01481d8a654d91b"],["/tags/index.html","a5873d659d1c2a78883b1250da181f15"],["/tags/interface/index.html","5067e263bbf37126906652cf6d78f3d4"],["/tags/non-optional/index.html","a09964929bdf91d40898e77db8b5c987"],["/tags/package/index.html","9f2c54314dc014fc6aaaf28a553b8f53"],["/tags/random/index.html","26aac606b4945cc2244da11716b78978"],["/tags/transition/index.html","6ba79e96cbf4ea3311e06d2446cd3266"],["/tags/三方类库/index.html","4234b9b8c73ca9153c7fc7f3cc3151ea"],["/tags/依赖注入设计模式/index.html","50a22ad071ec04dd105aa6771b97d49b"],["/tags/值类型和值语义/index.html","89d7d2d84d68e7ff3145a92cb4931734"],["/tags/内存管理/index.html","e01979137f5d6f0bf14c39b9812bfc78"],["/tags/冒烟测试与回归测试/index.html","d12cb22a8d7af19d2771cf51b71302b7"],["/tags/函数式编程/index.html","7c1b388b5e710f028ffbbf4dc5c9a606"],["/tags/创建博客数据库/index.html","70ead4f90554e217c0bc9d110745554e"],["/tags/初始化模式/index.html","790afbf28a6c6999df12b72e5bb729aa"],["/tags/单例模式/index.html","6ca143f4a687158345837b54ee92f033"],["/tags/原型设计模式/index.html","75be1c6f96ca085feb566b00ff7024a6"],["/tags/命令设计模式/index.html","f3fac2cfd90344913ddd7c35727d9e2a"],["/tags/基本控制流/index.html","892ea7157ee10e0b1ea694dfc7656e29"],["/tags/基础语法/index.html","3dff4bd69ee3e4f04e9cd43c225bef50"],["/tags/外观设计模式/index.html","391bb1635e994ee7d31de47a072f3500"],["/tags/委托设计模式/index.html","876f047cc9010b8fe1d076a59d8cc61d"],["/tags/子类化样式/index.html","c6958ffa55f3633a750d4e750dae42ee"],["/tags/对象池设计模式/index.html","f0e2bd7e257b3f5433f3863b27017be2"],["/tags/工厂方法设计模式/index.html","5e67f7aeb1b43ca13175770f7b278e3b"],["/tags/工厂模式/index.html","215f77cf9a1d4ac65c7e522f762bbd65"],["/tags/工厂设计模式/index.html","0c6c3ffab8a7b93f15f2994c09538842"],["/tags/开发技巧/index.html","80cb39a6d46cb1152ee65be6e036f89b"],["/tags/开发记录/index.html","37136a9f39e95209a06659d92778c8eb"],["/tags/懒加载模式/index.html","0617b0d1c8a58e59f1a23a7473f3011c"],["/tags/抽象工厂设计模式/index.html","af5bdc75b2786861e90cff58f64f2c75"],["/tags/数据库/index.html","fcfdbff98a04658ce8bf4e7a2f5d6a2a"],["/tags/构造函数/index.html","b35039c82d3c7690a69fd6565dfed603"],["/tags/架构设计/index.html","85d0a989a26c480a0edd3786aca94526"],["/tags/模块化/index.html","8aff5e6aa4c3ea3cf7b8c8b53eb40c5e"],["/tags/模式匹配/index.html","6e4da2a067f8daecb2ed0d783b5ed8cd"],["/tags/环境搭建与验证/index.html","cbc670f7c118dd2396b8613f01fe227a"],["/tags/生成器模式/index.html","a528ea57d6dbe0478b5ae470a0bd1e48"],["/tags/用户体验/index.html","ef437858ee0479e662174953cc3e9c17"],["/tags/用户协议与隐私政策/index.html","24325a4235b9f72db3885d1647615efe"],["/tags/类型与操作/index.html","e406d5c2140685b1d7b6bf8eb8c5ef3d"],["/tags/组件化/index.html","4c3163b243a52baa8e3a61b53b29f3d2"],["/tags/自动化布局/index.html","6c43d5ff1e67209800f2da3e4132bea2"],["/tags/自定义UIView/index.html","b7624a1034ec43a5c1f9dca30eda441c"],["/tags/自定义转场/index.html","5b28066c1c639e62988e7786ea12d8bf"],["/tags/自适应布局/index.html","37fc928ba56cdec2b6c73e1a5a686660"],["/tags/表达式、变量和常量/index.html","84deb9de4a0b155117faefd777abb068"],["/tags/设计模式/index.html","f65568a798cec28fddd3fb6d41c802a4"],["/tags/设计模式/page/2/index.html","11dda44338b3b475db8700e9fa366515"],["/tags/设计模式/page/3/index.html","1a0f18ebca67fccb4c8c49d2d3393121"],["/tags/访问控制和代码组织/index.html","19047d78b0a51adf0f56fb4ea6bea0ae"],["/tags/运算符，下标和键路径/index.html","e24cb1897cc8e7a4c633acb9edcaff96"],["/tags/迭代器设计模式/index.html","d76e35793b5afb008bf69373f6dbfbaf"],["/tags/适配器设计模式/index.html","58c12a91e86660db7e6bbb4e6787520f"],["/tags/逆向/index.html","2b729090fedcf8ca03eaed5bc0102457"],["/tags/错误处理/index.html","9585d1d3a196925206159fca66bc374a"],["/tags/静态工厂方法/index.html","884eb0aeb8640bf0ce2cfba0ee682ea1"],["/tags/面向协议编程-OOP/index.html","2075e89882810dd9d50b47021e9f04e3"],["/tags/高级主题/index.html","dd302a00bdef1e7b76acfe28533d60ad"],["/tags/高级协议和泛型/index.html","af7c4029857d0ad6ca3bc66f6645eb4a"],["/tags/高级控制流/index.html","750aa830c5c0e2be45de57785fa9d5ad"],["/xcode 常用的快捷键/index.html","3b112a753d31b27b86f4a9add05a9e19"],["/为iOS应用构建输入表单/index.html","c4ba9db0a466c9006607f3e469b6be30"],["/产品开发的幕后花絮/index.html","3955705e234dd9fdfb59bf0a754d8355"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","4c3e237146155db0c598ec5030b99b66"],["/冒烟测试与回归测试/index.html","bef70342409df902be0be2ab0d443da5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","44c8d7ac12efa0b180f16b282d245787"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","1ee3321536b81b1252c078c4332d2489"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c4efbc81453b30db00ce6ca1f886d923"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0859ec1ebaf76389f5a2c191ba0d7879"],["/在Swift中创建自定义集合/index.html","ac36150e9c0e16ade17aca4e783435a7"],["/在Swift中处理非可选选项/index.html","d92093267825cc5210278a039d72e102"],["/在Swift中生成随机数/index.html","2a549cd832a1200bd8cbe4708170c771"],["/在Swift中重构单例模式用法/index.html","254fe53559a1b0103852e3be8054f4ca"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","425c13427bf0b8923edf8b2d011ae5ca"],["/如何为VIPER编写服务？/index.html","0d6109cf46e6c340ba3a2556528ac156"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c5883882db720c0887f638d9de12d216"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","11e32ef23651da18164dcc98fd126d0a"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5bb6a428e79e14bbe918f9376de97729"],["/如何使用VIPER构建SwiftUI Apps？/index.html","44eb6256cfb45a8f4a4225a104810211"],["/掌握VIPER架构/index.html","ebec592dfaef0b9b0d8f9b0ea4041d53"],["/揭秘 WordPress Hook 系统/index.html","332e2619d89bd7230e4708329d0dc660"],["/比较工厂设计模式/index.html","76951611273886df7d3ff1b07f0f420d"],["/深入了解Swift中的Grand Central Dispatch/index.html","943a5300a6eb5d4247b0f66cd414ddd5"],["/深入研究Swift框架/index.html","4d8aaff7c5ead3f4452cfcc1f6a395d7"],["/组件化插件化与模块化/index.html","7727352221d902575ff2af0c3100912f"],["/组件设计与SDK开发基本规范/index.html","5e6f513b31e510430a4b91b4de1c3431"],["/适用于iOS开发人员的VIPER最佳实践/index.html","1b12bb90b9e0954eda06e38bfc8774ff"],["/选择Swift而不是Objective-C的5个理由/index.html","d1e454b314bc05bf7601ba4e9979766c"]];
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
