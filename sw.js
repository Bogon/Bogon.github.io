/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","dd0de3d118e142bb7b75b67043cb662b"],["/2020年iOS面试题总结(三)/index.html","100f6f2bc9537b31412779343b224412"],["/2020年iOS面试题总结(二)/index.html","a019082fa3bc53c34b9066f73c7c1b3c"],["/Advanced Swift系列(一): Swift 简介/index.html","6186c0e9766a953dd24c9da39051cc66"],["/Advanced Swift系列(七): Strings/index.html","61c9e5984823957d3e42ebeda769fb33"],["/Advanced Swift系列(三):  Optionals/index.html","b1120042206f914c459e59e617b3dab3"],["/Advanced Swift系列(九): Protocols/index.html","f9fa28f6d248b37f870c58933d4fe376"],["/Advanced Swift系列(二): Build-in Collections/index.html","3dcdd72870e94dacd7eb21d62467df62"],["/Advanced Swift系列(五): Structs and Classes/index.html","568ab3564273af9e51127b798e3430f1"],["/Advanced Swift系列(八): Generics/index.html","6d650305a13842abd996b2cc7cc3c3fe"],["/Advanced Swift系列(六):  Enums/index.html","ca537d7f54098e98f87cde9b9f74d9dd"],["/Advanced Swift系列(十): Collection Protocols/index.html","5c138089a2158dd5ccd5393cc6803e35"],["/Advanced Swift系列(十一): Error Handling/index.html","7f51feacb0def5a0b7bc9ae0b5a2f41d"],["/Advanced Swift系列(十三): Interoperability/index.html","0504057858ad9c00aa27605ca35b16d0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","4b8a21dd5339591c0065a5831fff2d78"],["/Advanced Swift系列(四):  Functions/index.html","ab8a17081a4a3ee99153ed9296c2ebdd"],["/App Architecture系列(一):  简介/index.html","5533db6eb21cf86d3647b3cbb6a79349"],["/Functional Swift 初探/index.html","7190ce817a7c72c069d6d712c6c823e2"],["/Git 使用小技巧/index.html","c24568273491fc263e24aa08fef503f3"],["/Go 基本语法初探(一)/index.html","0c6c793c0ce600a8e43a0bbd6ff5b237"],["/Linux VIM 命令及操作小结/index.html","9d15f4f1451f3d4e9c5e6e70ac35bbc3"],["/MySQL 基本操作/index.html","d18dce684b6af41f3c64671463f25608"],["/MySQL-列类型和数据完整性/index.html","978ecdb0c6836bcf7181cb1dbaf77abd"],["/MySQL-数据库设计和查询语句/index.html","ae469313795308f10df9a196096b3d14"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","7446893b43a538f0eaa9bda5dac16520"],["/NSCODER和SWIFT初始化/index.html","e71aef71b174a59144d77d874be837c5"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","527bee52ad6f339e70a419987f2e9a8a"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","4527fe116c6b57cf990b76db424cfe6e"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","a29dcf7f7527b1129d41f10d887fd75d"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","73b7293445e3ce5aeca0e01a6ef97d2a"],["/Sqlite 使用Tips/index.html","cd6a265e4fcb3724ce1492ac4968e1bd"],["/Swift 5使用UIImagePickerController拾取图像/index.html","0dca5fc56c4c913b7676ac06f49d771a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","39d644536a7b71a36004433e350ae20a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","5c9bbdc4723c2a11427125bdb8312cc1"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","76e093741d205ae9b2dd5bee286b63d3"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7edcd4754db02b15b40a628167e50090"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","ff5c9d924c5d7617963d258855855d26"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","030f950e571f9a7eea4ad29b0075543b"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","66d99c89bd18ea7d71e545d5b5c1cef6"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cca3d7169016bb164d93e6a6025baeeb"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5bfd68add6ee43509ec13fd2461aaa88"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","eaaec5778804881766fbce6cd90693a6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","320d2d96263e7c600398708949c3638b"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","3521fe6fe52748cc0ffa3d696817038f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f54b7c26353fb2589eb6dd744e530437"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","4b0e53695d397cffb988ecd261f014cf"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","908c3b7522d6b0e89cfda27fd8d7c730"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","32631e27eb03087a21934c49624a63fb"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","7e297c10eac9115da9c100d6e714f844"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","13403cda03c19c1c1d8ec9aca8e5cc4c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6e7ed8292686af2c9026409cc4a92bf3"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","25404d647d12d70afb0c189d7b5468b0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c7765f05af9ed209437e9762791b71e7"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","782ea9edb8257bf2e5ce1c51055fb97d"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","c43b61069bcb11075e8c33e079c6b321"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","06f040ff15b17ef8c7ad86a00b85e350"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","8424fc7e5250284370338bfd30c6ac76"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","bb531254361c542e6b1376d2c3cd8293"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","02137771597eaf06192acc51ecea1892"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","57cf417d00659133066a082f9002b4cf"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","23eb88df550d5b8cc76e7729e0e7fd3c"],["/Swift CompactMap vs flatMap：差异说明/index.html","7fc787b9878aa37f5c55da525c3d0b18"],["/Swift Grand Central Dispatch 深入实践/index.html","a7bcead21cf905e8211be402920dc761"],["/Swift Lazy属性初始化/index.html","97ce844635493d470df167472f154be4"],["/Swift Promises 初体验/index.html","88d333705202cd6e007e8950d4788923"],["/Swift Promises 探究/index.html","d15b987d44dbde5e3763f852d45b34ac"],["/Swift UICollectionView使用指南/index.html","8e8edb20b1ac1467e0562e9d6414cc7a"],["/Swift URLSession && Combine framework/index.html","f50c443fd277bee79b6a25e272a86964"],["/Swift tips/index.html","435031859e588932c40021c12a6d0fbf"],["/Swift 唯一识别的视图/index.html","6e602fda8a090817a3bfeb6609b1ec0a"],["/Swift 如何学习现代UIKit？/index.html","da0911c926ff933830be79fcfe9a7019"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","9f91aa0d30683daff99f930dc00577c3"],["/Swift 用 compactMap 替换 flatMap/index.html","be3cac0daf23727008536f0d1e30714b"],["/Swift 选择和播放视频/index.html","cd9d805073236066262ab115eb584df6"],["/Swift中UIColor最佳实践/index.html","5d7bfe3717e4c74685b0d1744e6b94fd"],["/Swift中快速简单的工厂设计模式/index.html","b8d13ea41a34bdf81f23f670d5a9bab7"],["/Swift中构造函数与静态工厂方法的比较/index.html","4a9b823f10d8100c1156d133d7da2604"],["/Swift中的UITableView教程/index.html","a2c97eb0ed17a054f6b98020b4630729"],["/Swift中的懒加载模式/index.html","7db3c450ca43794dc3212cda2495111d"],["/Swift中的模块和挂钩/index.html","0daa0a393f3112492a2632e708666263"],["/Swift使用布局锚点添加约束/index.html","9710ef24fb5e386ddd5ac725ce66d00e"],["/Swift依赖注入设计模式/index.html","69a9c568f982faef2ea2af673091dd06"],["/Swift关于Dependency Injection (DI)/index.html","7cf2762e01f14a053818995f60253cc9"],["/Swift初始化模式/index.html","5a034bd30d620183f0f659c53582cdb3"],["/Swift单例模式/index.html","71c9bc0f30995f58fd6dff36a8da028b"],["/Swift原型设计模式/index.html","f7e059db9790a868fb11b12a1206ab97"],["/Swift命令设计模式/index.html","d09ffdab25f1d1e882775fdd006bffe0"],["/Swift外观设计模式/index.html","3e03186b87ef96d48ee270450ac347e8"],["/Swift委托设计模式/index.html","dda6785d2516cf1204b5a13d5b5ad6ad"],["/Swift对象池设计模式/index.html","107c7c8525eb2596caf6a8865bc668b2"],["/Swift工厂方法设计模式/index.html","633c2f9ea3ec4c88936be99c420e77a4"],["/Swift带闭包的懒惰初始化/index.html","3fd4fad9acdf817e5b9d5884fbcc37ad"],["/Swift抽象工厂设计模式/index.html","66af219b479529afa4c2969cd3b77c4a"],["/Swift掌握iOS自动布局锚点/index.html","f3b2533a0dfceb9d94e1c05a9a114012"],["/Swift支持旋转的自适应单元格/index.html","133a8f85bc83fccd0983ab1a55e9b203"],["/Swift枚举值/index.html","0beaa9795d28fc0d91f170b9b98ee3c9"],["/Swift生成器模式/index.html","9ff197a83f353fa2441a906b5cb72655"],["/Swift结合Xib文件自定义UIView/index.html","4049d58cbcc1f2695e6914627e6ab804"],["/Swift编写的20个iOS库(一)/index.html","f7a9a6efef7b3eb0ff0e31043ba86b72"],["/Swift迭代器设计模式/index.html","2d3ad107e2be65ee16a2bf15ce924303"],["/Swift适配器设计模式/index.html","41a458e6e9ebfab4c18444d8eb80a35d"],["/Swift静态工厂设计模式/index.html","25dfe119978c4a53871b27530717506b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c42b257bb5d2b0b2542ebc6f62abf075"],["/UICollectionView data source and delegates/index.html","0f003fb47792b321d03883c8774ac9ae"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b8a1d9365a5a653875f2b6c7c97a48c8"],["/UIKit初始化模式/index.html","2d8c4b12e18271a30d5a6ed9dd91747a"],["/Ubuntu18.04替换国内源/index.html","feeacdc7163af2fdf9d3a777f6206337"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","a559bde81fbc351e5252143e6758fdf1"],["/Vapor系列 (一) :  Vapor 初探/index.html","ff6c3bc82153db146897a465260a9188"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","4f5057d0ea05b4112f9e1951db5ebfb1"],["/Vapor系列 (二) :  Hello Vapor！/index.html","9a7c8d0c861221d130b2bec4a4bfc9eb"],["/Vapor系列 (五) :  使用session进行authentication/index.html","5eacf96ec9fb4122045e038668929df8"],["/Vapor系列 (四) :  创建博客数据库/index.html","934d591113cc77d6a2f370aac268358b"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7a2b64bc47df382bc4a1856b7a023872"],["/WKWebView与Native交互注意事项/index.html","bc0f505247693707ef51b3f9420fac68"],["/Xcode扩展/index.html","8685de88ee91168f95ab2467bdb097d1"],["/about/index.html","d68f5cac822ff2d86fce28b329deb751"],["/appleOS的Networking示例/index.html","93e0a2909297bc044d004b096d63bbb3"],["/archives/2020/03/index.html","59bfd8a3c23c0f87afd20d46bf598e45"],["/archives/2020/04/index.html","2832419ba44941d68542b99fa536de84"],["/archives/2020/04/page/2/index.html","c050d25f59a8242c847a2124f6143c11"],["/archives/2020/04/page/3/index.html","46672099622404d88f7f6472a70c1eb1"],["/archives/2020/04/page/4/index.html","b981f7659327791b047a44bbba76160b"],["/archives/2020/04/page/5/index.html","29d65c8f4696f2c0181459656d9ee802"],["/archives/2020/04/page/6/index.html","d543b544144a663faeed9dc2836dcb21"],["/archives/2020/04/page/7/index.html","a33c619b74cd3e026cb2d7665b3bcae7"],["/archives/2020/04/page/8/index.html","d01aedeab8170a210d3fb44956cc0759"],["/archives/2020/05/index.html","5317d2d9519cc2c7632359d05a1f2a73"],["/archives/2020/05/page/2/index.html","936b47c8ce4613d5e937076915329f76"],["/archives/2020/05/page/3/index.html","1116aad02ec8d4ca7d264192031e4cf3"],["/archives/2020/05/page/4/index.html","e74f33ba9817bfbdcc3fa65091283b70"],["/archives/2020/05/page/5/index.html","1963530c19d33dd40afa7b6dad38e4df"],["/archives/2020/06/index.html","79ca27fa8eb51bfb79fd6f22c074409d"],["/archives/2020/06/page/2/index.html","4a4a3b51ccc5f55ebe0b46ac279f48b8"],["/archives/2020/08/index.html","739f55c6871598d957c23206abfdfaf4"],["/archives/2020/09/index.html","32ce49ef5896ea754698a6567629929a"],["/archives/2020/10/index.html","2d4ddf61b42a095f5090196a1ecbc457"],["/archives/2020/11/index.html","cc96fd5495633b52621942ea35560a44"],["/archives/2020/12/index.html","6827211988dfe910fc1517229c4215e7"],["/archives/2020/index.html","95365738e71d40813f9c1f27fd58e55b"],["/archives/2020/page/10/index.html","325f4651e743d9fcceb6807d94b5d49d"],["/archives/2020/page/11/index.html","06410d87b46be91423b30bb8f0d84990"],["/archives/2020/page/12/index.html","e56606e5798141c23b2e1b7e6c5992cd"],["/archives/2020/page/13/index.html","493d8094aeab54c1b853351c91dba1ef"],["/archives/2020/page/14/index.html","794bfda607c22843f1b830a60f30ba47"],["/archives/2020/page/15/index.html","0f436c495efd69ade9e750f4681ca57b"],["/archives/2020/page/2/index.html","2f11aed48157acd17615f3a2504bb369"],["/archives/2020/page/3/index.html","1bff7157bf64b1d4415e2b09bb8ff6e1"],["/archives/2020/page/4/index.html","5ff64d0932b41a259d64a8e066a640ab"],["/archives/2020/page/5/index.html","8d89785a0e2aa5c328d47c6f2739e920"],["/archives/2020/page/6/index.html","4d71d931bd4320d32c0301296c5dd9b0"],["/archives/2020/page/7/index.html","52537f099bc04c4561191dc673d10bc9"],["/archives/2020/page/8/index.html","a713ad2cb54fbce5420b0fcf72b85a9c"],["/archives/2020/page/9/index.html","ddcb6dc186f3d6e87c36a4c729746706"],["/archives/2021/03/index.html","6b2d0dd3d3c00c37064df612f37f5aff"],["/archives/2021/04/index.html","5cd79c28fe5d89f63ae80248de79fe57"],["/archives/2021/05/index.html","c7498ea877605c847d06a9730bac825b"],["/archives/2021/index.html","6bc02c56885e42d3bdab8b2cf1e9d8fa"],["/archives/index.html","cde8e9b6e9ae2a505efd7d8f287fc0f6"],["/archives/page/10/index.html","05323fedb13eaf30173f6b7203e6278b"],["/archives/page/11/index.html","b2924e8513b78d0cc3492552177503c3"],["/archives/page/12/index.html","42836e493fcb82171838c0559cfb7c20"],["/archives/page/13/index.html","12532d2f65e78c140c3a6fdc41ea6f8f"],["/archives/page/14/index.html","9b6333146f43ec0de1626be2f935cdcd"],["/archives/page/15/index.html","b6e852122e01cba605bd0dc4bee0496e"],["/archives/page/16/index.html","57cccbd45d04cabdcc8a928abf507499"],["/archives/page/2/index.html","5d1fff2868224f336a74bfa6e04d3d85"],["/archives/page/3/index.html","82156d066a11b90e3f4f6c0101b306ce"],["/archives/page/4/index.html","bf96af7ff3039b805979a8f4bc673b40"],["/archives/page/5/index.html","9d1f98fe3a3fcc54fe35786dffc63bef"],["/archives/page/6/index.html","c99d6454ddc49c8b4cf81234c6469ef5"],["/archives/page/7/index.html","9004d3db4dea652baf84e4e6d84e2872"],["/archives/page/8/index.html","19b66b6af8b2782864d6d814b6173cab"],["/archives/page/9/index.html","949b1d01123d043ab4de05fd17db820b"],["/bugly 上传dYSM文件小记/index.html","f4494f90cfbeee7b612e6e24ca2d9dfc"],["/categories/Advanced-Swift/index.html","11e52b09b90c925ad10374fd827bfca3"],["/categories/Advanced-Swift/page/2/index.html","84b32c5cb0f61d7a6658568aee88e111"],["/categories/App-Architecture/index.html","30c41ac320c5c13789f9260d0c9b9d32"],["/categories/Array/index.html","d687cb2df050454422400e55ac270dd5"],["/categories/Codable-protocol/index.html","b20d63e860cd247cee429a478bdf2b98"],["/categories/Combine-framework/index.html","0629b3b240316ab962e6ca17a66b30b0"],["/categories/Combine/index.html","4be28102dbbea305cb7a531d258f6b20"],["/categories/Go/index.html","9e5de491a8e0aadc09d1c1d13c3d93ef"],["/categories/Grand-Central-Dispatch/index.html","b6304f25a52ce701c6fbd54ac7ffc9a3"],["/categories/Hexo/index.html","4045c48e4697d95b6ea31067478235de"],["/categories/Homebrew/index.html","becb28168b3d1eddfd9faa7277b32b49"],["/categories/Linux/index.html","f9c204e9abe83b19b45aee8e70a6963e"],["/categories/MySQL/index.html","5a24cf312d7a61768b9259ec83e8f552"],["/categories/Promises/index.html","0e4b4fb6aff5d36714cfba6281608f40"],["/categories/Result-Type/index.html","f0425294e60cb1a2dd6f86af911166f8"],["/categories/RxSwift/index.html","bb943f0d89a5c5f1e518f5a5146473f2"],["/categories/Server/index.html","dde25ca43d10db0e372b3e34bc7e8da5"],["/categories/Swift-Apprentice/index.html","d7ec26f4de583be704bb4e3aff04ea68"],["/categories/Swift-Apprentice/page/2/index.html","183dc20512cf098a65b8436ff317b928"],["/categories/Swift-Apprentice/page/3/index.html","f4dde06cfa23173c064449b913ddca8a"],["/categories/Swift-源码阅读/index.html","5d590a3f09a6025e942beb0202b0c03f"],["/categories/Swift/index.html","ca003f485bd295a749e17b4a266031ba"],["/categories/Swift/page/10/index.html","081c56b536992dc28ac954fee40eb0ee"],["/categories/Swift/page/11/index.html","4c32a66f558700e07de118d6bc9f9bac"],["/categories/Swift/page/12/index.html","048636cc494dddce81c6b2f8e424e239"],["/categories/Swift/page/13/index.html","bea8197a2196bb2b21c9c92153f1c54e"],["/categories/Swift/page/2/index.html","5bace08901af63fc3561f612aa8837d8"],["/categories/Swift/page/3/index.html","d28c64facd10944cb720fea447507dd3"],["/categories/Swift/page/4/index.html","2707ee03ed0916af582988c110d902bf"],["/categories/Swift/page/5/index.html","d4428d7db5628576a20ac469b2183bfa"],["/categories/Swift/page/6/index.html","7f6195b1062a9a5a6d135646c5726986"],["/categories/Swift/page/7/index.html","b675562719f2d31a5316aa2a71ae9691"],["/categories/Swift/page/8/index.html","a6f86dea5eb71301c9bf9cec75783ed7"],["/categories/Swift/page/9/index.html","c831ab5459c5a311c2b0a3168c6fbec4"],["/categories/Swift5-2/index.html","6b084b345e291c36ac327f420af30f55"],["/categories/SwiftLint/index.html","7e889a88ae4beced29192581037eddcb"],["/categories/SwiftUI/index.html","77b2a4affa368cc389fe42949d263b52"],["/categories/UICollectionView/index.html","33e0e873d828439f22e5fd6899b61ce5"],["/categories/UIImagePickerController/index.html","b5d1d14946f2e10fe59bc27582085071"],["/categories/UIKit/index.html","9de3c339ca763a90cefe4655e9a526aa"],["/categories/UIKit/page/2/index.html","82302de4df3a48864e27a05c6934942e"],["/categories/UIKit/page/3/index.html","6164df215f6a7b10d64d619fccb26147"],["/categories/UIKit/page/4/index.html","07bbf0a752893602cf60c31dd7f06e9b"],["/categories/UIKit/page/5/index.html","cf885deb71892ea3662849a5664ba8a2"],["/categories/UITableView/index.html","362be5945f172ff458912486d3e53745"],["/categories/Ubuntu18-04/index.html","c88b8f7c74b786d7a9b161f0ed753ac7"],["/categories/Ubuntu软件源/index.html","a89357dca342a7e97cbe3b3c87acb101"],["/categories/Uniquely-identifying-views/index.html","731781072718a208d833cb3a73f73abc"],["/categories/VIPER/index.html","8f02c7322871bb6fa50e8f5d7f81ff33"],["/categories/Vapor-4-0/index.html","a4ed765998798935c6263ef0d88e549c"],["/categories/Vapor4-0/index.html","392105220688fe14ec7f49ad4f30f58b"],["/categories/Vim/index.html","af781101993c100d98e4230ac9949d8f"],["/categories/Xcode/index.html","87bbca858a4243e50c6013cccbdc9b1c"],["/categories/appleOS-Networking/index.html","13d9e971ee34d0af14b52a24cd0b499f"],["/categories/bugly/index.html","151e02058138aa1220efc953ef1d24b4"],["/categories/enum/index.html","e95a375dfd7383fa0bdc0f7ff68553f6"],["/categories/git/index.html","4815b69788e3e08c65f60c75830a5eac"],["/categories/iCloud/index.html","4b00562dc70b0f450b980eb143dd452e"],["/categories/iOS/index.html","f706558a5f63e9b9e47adad369ef48db"],["/categories/iOS/page/10/index.html","aad44ad4f6332f4b97b9d8507b568ce9"],["/categories/iOS/page/11/index.html","712d15181d53c0e2f776348502e54ed9"],["/categories/iOS/page/12/index.html","950cad8389454fcddbbc4fe0bd34a1ef"],["/categories/iOS/page/13/index.html","46956a992045dc4d4d7ed857a5a872c3"],["/categories/iOS/page/2/index.html","b413add9efa5900de2fd5a4def353e16"],["/categories/iOS/page/3/index.html","8af2795b2fb6527981499df6c104e0c1"],["/categories/iOS/page/4/index.html","dd02cc07b1af1e734c52f713f8c40340"],["/categories/iOS/page/5/index.html","01529ebb68285b1a8df139a549bf5399"],["/categories/iOS/page/6/index.html","d573b1dac4f1c799b13e2e57d328be81"],["/categories/iOS/page/7/index.html","dc5799320601ca52316655b634db706e"],["/categories/iOS/page/8/index.html","d6720e5661e3eae7d67f500adad27a4c"],["/categories/iOS/page/9/index.html","a85feea6c4363c9b4c816168b3fd63f4"],["/categories/iOS面试题/index.html","7fdc35e5ec62fa2e8a00732ce0487348"],["/categories/index.html","9e3ae65ba2b11549cf819b17675496a6"],["/categories/random/index.html","fa2573ff4d798ae03510cc900201f07b"],["/categories/三方类库/index.html","ed9743b3f8f6bb757b14ede213ded68d"],["/categories/函数式编程/index.html","4285bec4d91fe46e94504b17daaed03f"],["/categories/子类化样式/index.html","981d0733a28f68e62f72928573423c71"],["/categories/开发技巧/index.html","c9b1c2662ba8b9c416ba475ce3d6ae07"],["/categories/开发记录/index.html","724fc1114ae422cd92f988aec202c019"],["/categories/技术支持/index.html","6a09505f70634cd3a02ad345443f5f77"],["/categories/数据库/index.html","63c5589f921ad6230c6451a949cde2ea"],["/categories/架构设计/index.html","3f7274273e305a915da412ff2dd75078"],["/categories/测试/index.html","b82c1aafcd999ee936b61940fcb77970"],["/categories/用户体验/index.html","5405c8f3d311fbb74712f2fe8479bae8"],["/categories/用户协议与隐私政策/index.html","6b3a4b5ee923b2ed0bdee3acde984a85"],["/categories/设计模式/index.html","22202d8dc490707df1ebb967069db662"],["/categories/设计模式/page/2/index.html","e22f3a970b7f1b924722c10da86e3319"],["/categories/设计模式/page/3/index.html","327e8d94f8aceb46a027d7fe25838add"],["/css/main.css","958cd573bb2c239cd472c6db4ec50d6a"],["/hello-world/index.html","29483b9699d8d0d8624702f99038482e"],["/hexo部署失败/index.html","abcafb6205cdb4c4b146e956317dbd43"],["/iOS VIPER架构深入实践/index.html","598d9c75902868e97bba71284af7da75"],["/iOS 自定义视图，输入表单和错误提示/index.html","19aa7a053e699af2b9c067988d61ef30"],["/iOS如何使用iCloud文档？/index.html","f737c04d046c130538f4bcbcb699bd2a"],["/iOS子类化样式/index.html","ae02118ebe391819721d607946543c8f"],["/iOS开发记录<一>/index.html","20d028a1b4ac8c9ad2dd0626008e2ddc"],["/iOS自动化布局编程/index.html","d7f485dcaa9165a4c7f827c840eb7fb7"],["/iOS自定义转场(By Swift)/index.html","a4572d0285e194e214a81356be93334c"],["/iOS项目架构：使用VIPER/index.html","5aa57dd1e08f04534424beb3da6cafa0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","0d2efe50fb2953233c5ae14fe8841bbe"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","fedad9dc877a31f8573ba1a2f26f9506"],["/page/10/index.html","964320bd89863712164e7231b33b0820"],["/page/11/index.html","5ff346af147dcd75f048833d5937e7b3"],["/page/12/index.html","184499b9a255c240ff03237e9eb75f19"],["/page/13/index.html","4509bdff4a517ef04acd902dd9368797"],["/page/14/index.html","989944e8d1ff6cf64b7ea997f37fafff"],["/page/15/index.html","440d6ae00ac42b426a1541ba48c4792a"],["/page/16/index.html","888d8fd509ab290979f6d9ba1da38e0b"],["/page/2/index.html","2ee3d73a83b257eddd3086c1b7da0fe0"],["/page/3/index.html","5799c02b4dd6e6ea55eadfd1187f7243"],["/page/4/index.html","676c1da2848091022295f58bf5326150"],["/page/5/index.html","34c00a33db7889fce7157ad7ead2ef0b"],["/page/6/index.html","d56ab14464d9a0f7f8f570b7daa0f844"],["/page/7/index.html","7fd69dcec23333d4f44fe2727bde1eda"],["/page/8/index.html","ee141e42157030584d6926d10e9dbf5d"],["/page/9/index.html","ecdc5a0607f0534ff09a5c7da5ceffcd"],["/schedule/index.html","dc23c429e2da291be9f07b7d3730f2f3"],["/storyAppPrivacy/index.html","a7996e1945c676deb160c3f089230b8b"],["/sw-register.js","6e1134e9c3d0662e04fefa2ad084144c"],["/tags/Advanced-Classes/index.html","e1e6f7e0bfc41d6ae8de544412be93f4"],["/tags/Advanced-Swift/index.html","30ddc98b5c4d4d7f2a1a6c5ffefb6db2"],["/tags/Advanced-Swift/page/2/index.html","e265edc79a6c90e9d5801b3d39d8c0af"],["/tags/App-Architecture/index.html","fe107d984ec9b40d940f1310ed4dfaa9"],["/tags/Array/index.html","1fbc22f7615901df338c128fce6559f6"],["/tags/Arrays-Dictionaries-Sets/index.html","630c79bbb6e2159085baa7359e46d8ba"],["/tags/Authentication/index.html","6b8392d9283ca62b69d554600e925919"],["/tags/Build-in-Collections/index.html","c63576565ecea5428bbc1ca1bab1ad52"],["/tags/Building-Your-Own-Types/index.html","7e42a9c9bd52f804ab1333d0a5d73dc6"],["/tags/CMS/index.html","23940ac24d7afd4e26182b946f19fa28"],["/tags/Classes/index.html","792efd6df0b695532e0a632adfe26926"],["/tags/Codable-protocol/index.html","2f50d1e683e65c470cde73d024503e31"],["/tags/Collection-Iteration-with-Closures/index.html","b90a93e1bae00a1887b5a156274c8ce4"],["/tags/Collection-Protocols/index.html","e4baa5c073005977f05cbe32f27f1888"],["/tags/Collection-Types/index.html","14d7c2eb168350a778543c2b0a647d51"],["/tags/Collection/index.html","e001567321c71f4ea0e163f192b0233d"],["/tags/Collections/index.html","89afb2cfe3e84a53adb0820ef4f92c56"],["/tags/Combine-framework/index.html","845092a2f7e4fd896e086ebd6586a070"],["/tags/Combine/index.html","60b449899ffb4b5784af5dc02169d78e"],["/tags/Dependency-Injection/index.html","66cd3825a03bb529ad3465616d664702"],["/tags/Encoding-Decoding-Types/index.html","b871bb93137794b091dcdc4ac3064c7d"],["/tags/Encoding-and-Decoding/index.html","76e9cf0072e64dfc9596bc22d2d22c3d"],["/tags/Enumerations/index.html","e944c1b0aa70a9806f3e3785cad3cd22"],["/tags/Enums/index.html","aa883480a482a3d4f28df3b466d2d2f1"],["/tags/Error-Handling/index.html","a112e774f9e54ee09f7549c33cc22ec1"],["/tags/Functions/index.html","000a5482253cd363352cdf50975b24f9"],["/tags/Generics/index.html","b281b1cd3a220fe3edd67017dee4a3c2"],["/tags/Go/index.html","dd2ba24ab2948512db13a45c273d4296"],["/tags/Grand-Central-Dispatch/index.html","8908dffc189da9f62ec64e7cfe0e857f"],["/tags/Hello-Vapor/index.html","7828998915c06adfc831e5a34df29711"],["/tags/Homebrew/index.html","43ae4c549456b064c557accd54d06320"],["/tags/Interoperability/index.html","c1f113ef04dd7d9fc787cef12b7cc92c"],["/tags/Introduction/index.html","8b044924c45c2a1946c0e23fd2b250d3"],["/tags/Leaf/index.html","d2d87d27a396030fc7df3c4cb338da03"],["/tags/Linux/index.html","2e332364cb6b50fe1ccc0cc2c0c85d0c"],["/tags/Methods/index.html","7b3ca5274f1de3fecbc8852341c5b64e"],["/tags/Modules-And-Hooks/index.html","a09d4a9d9837ed3640e1d272e2bc6e7d"],["/tags/MySQL/index.html","8b2c6ab2eea4ff5857cfd23c5674fa04"],["/tags/Optionals/index.html","5487e532c0cbc252538754fc1f7b537b"],["/tags/Promises/index.html","3bc8a880191e685c327e7148fb7dd8f6"],["/tags/Properties/index.html","89051fcdc616beab33b504fa7751973f"],["/tags/Protocols/index.html","b8d421032c5f2a85d52169060491b423"],["/tags/Result-Type/index.html","78ec47704d3d9ab954da231eba8f03dc"],["/tags/RxSwift/index.html","850cc081fc780755fe49756b873d95cb"],["/tags/Server/index.html","d721670c241c97d9f3c625a0006712a1"],["/tags/Session/index.html","a89da6a7dcda98f837d3df46ec965750"],["/tags/Strings/index.html","c579d9ae85f3fb89176daa363ae79198"],["/tags/Structs-and-Classes/index.html","51d3d28db09a541c84df8372e6639125"],["/tags/Structures/index.html","a3e38dfc703e6fe59f79a55b6f24057d"],["/tags/Swift-5-0/index.html","769ce811095a1098218625dca6504b92"],["/tags/Swift-5-0/page/2/index.html","a2bda60a6baf9337dbf15238a647e82f"],["/tags/Swift-5-0/page/3/index.html","4d816ec393e0805c3c456ac14f6de5d2"],["/tags/Swift-5-0/page/4/index.html","809192470a5a801e67301c66b7a8ec99"],["/tags/Swift-5-0/page/5/index.html","c7ab9877ecf8f7bc5616e40cc2c530a4"],["/tags/Swift-Apprentice/index.html","014134ffd448c2ffa41e8b799a8d4524"],["/tags/Swift-Apprentice/page/2/index.html","89598ba32c75ddff0933e6ad373ccb05"],["/tags/Swift-Apprentice/page/3/index.html","b8401830221f3730994060e2cd4d33db"],["/tags/Swift-Package-Manager/index.html","922a48f2bfc3e4cf2d24b2217b0033f5"],["/tags/Swift-源码阅读/index.html","c1a66c2488809791a7e1aa70ee6015ce"],["/tags/Swift/index.html","d9df2b5c25fc764f280e34761f6eb58d"],["/tags/Swift/page/10/index.html","83cc830f9c0686fd5b7a4e409ea64862"],["/tags/Swift/page/11/index.html","fe6a4c2ce25748b579f5c669fd4d407b"],["/tags/Swift/page/12/index.html","d96e39092a818d24ee0b7d883fe3d6d9"],["/tags/Swift/page/13/index.html","a97b9855d18b9dcaeb7f52d12214fcd2"],["/tags/Swift/page/2/index.html","ac6150bac9c17cccf4627cfa4d80d5b2"],["/tags/Swift/page/3/index.html","7939b02d72402f34acd1e31e45168b7f"],["/tags/Swift/page/4/index.html","9f35ef6ccb27c7f1ebf081f57d306fe9"],["/tags/Swift/page/5/index.html","978ec435e8d5d3c0cd06ea015951e36d"],["/tags/Swift/page/6/index.html","272251ffa608fee83f803634ec80308b"],["/tags/Swift/page/7/index.html","6817849c1822828c3c9b5ed36ce270a1"],["/tags/Swift/page/8/index.html","239aa8a0977f9232258f97fb47f3dd16"],["/tags/Swift/page/9/index.html","505d006aec4bdaf0d420f61fc4ad1aa9"],["/tags/SwiftLint/index.html","b774ee29a334875f35dc014ff1de4f66"],["/tags/SwiftUI/index.html","e644c749ce375e4b1640069f468d3c21"],["/tags/UICollectionView/index.html","beb9ba7a98cc9d8569e5cff404b0e78a"],["/tags/UIColor/index.html","7adda6a47f3c603e1ab6bc0b5fb8431d"],["/tags/UIImagePickerController/index.html","96cf0d7f400dbaae8b464f13f81e4b4f"],["/tags/UIKit/index.html","fc4681d8263c30e753348b277693c3db"],["/tags/UIKit/page/2/index.html","6681fc0faf41e22fc3c17be6ee0e0471"],["/tags/UIKit/page/3/index.html","77ba61c3ab767dab8d39bfe3dc669980"],["/tags/UIKit/page/4/index.html","993448b3571d37fa280a886c285c2a4f"],["/tags/UIKit/page/5/index.html","357fc559b0721d3eb33a81ae6862a851"],["/tags/UITableView/index.html","a826d937cb103952068e63a6a4fea5ee"],["/tags/Ubuntu/index.html","9c41188898357b0add02fcb1394ebf71"],["/tags/Uniquely-identifying-views/index.html","35a9446d17d58b61e740b292b1a8b6f8"],["/tags/VIPER/index.html","60d1b50b15c920ac576bcb48964f056a"],["/tags/VMware/index.html","680eb47324452a07cae52344b1dbac45"],["/tags/Vapor-4-0/index.html","0505f58d69a3e1624c81130015ec6917"],["/tags/Vapor-初探/index.html","6cfcceb5925940295fb21034d2d93d55"],["/tags/Vim/index.html","00bc3530f1640210286a4a50469d2ebc"],["/tags/Xcode/index.html","cbfba7dab67c63031d9a50cab8cf0a0c"],["/tags/appleOS-Networking/index.html","6bf91b7846a2acd10ce9427a86887e8a"],["/tags/bugly/index.html","986ce4f2a7320516c55e1c09740d9aeb"],["/tags/enum/index.html","88fe64f9eea470992e4f99dae7eb5703"],["/tags/git/index.html","37290bfe1d611a8e87e89fc143f17fd0"],["/tags/hexo/index.html","503393f643ce510252abd821fdc6d935"],["/tags/iCloud/index.html","9764d6c37c9faf98cd7444f9c1c04340"],["/tags/iOS/index.html","b3e9cd78d78647e74cac5d99c4885f1f"],["/tags/iOS/page/10/index.html","4d32f77ffa45dbb9186f9cd0642c6af1"],["/tags/iOS/page/11/index.html","41de04d14066a1576c5965425036a48d"],["/tags/iOS/page/12/index.html","24feaa60b9acfd7269e0986c949d911a"],["/tags/iOS/page/13/index.html","14e4a1ec2b9bea7c932e7270c8c4fe5b"],["/tags/iOS/page/2/index.html","690c6e8ff75afbcd20ffd41c85e62dd1"],["/tags/iOS/page/3/index.html","b01f8be82a4fe13730e7382f18ec9756"],["/tags/iOS/page/4/index.html","961b05b29a0829ecdf90235a65a5ee76"],["/tags/iOS/page/5/index.html","11c49d4e431e8e342872335db44fefc6"],["/tags/iOS/page/6/index.html","2e9a492cd9987f6f986fc2032e2333da"],["/tags/iOS/page/7/index.html","0ae5a0f51f35223e9bf36a82b2116c8d"],["/tags/iOS/page/8/index.html","3248c2ee3fae320ade8fa10e2615ce05"],["/tags/iOS/page/9/index.html","efe43ddb0263f08edde03bd6a67f80f8"],["/tags/iOS面试题/index.html","ef7cc47823d78fa864b58388ca070117"],["/tags/index.html","e89345fb3806672dd6172baabaee575c"],["/tags/non-optional/index.html","45b5bd3da708bc46ca91d4fea7663df5"],["/tags/random/index.html","061061a1ec8d54104dd2b5dd96d478e3"],["/tags/transition/index.html","1c005f50cf33275532b9e9424d88dd73"],["/tags/三方类库/index.html","bda700d5a5a2755b7684e4c5f63d9ba7"],["/tags/依赖注入设计模式/index.html","e2f337935b7576d826ef72a6b1e83938"],["/tags/值类型和值语义/index.html","f28cd814b2477506477cb4b3b4819033"],["/tags/内存管理/index.html","c553846b666bad7bc6e8087166176ea2"],["/tags/冒烟测试与回归测试/index.html","4468c3e917af897ccb165ea6ff10f3e5"],["/tags/函数式编程/index.html","f7c40f895dae31a04a013cb5c655d16f"],["/tags/创建博客数据库/index.html","256f5f4bffb24e2dfecd7758422aa1c9"],["/tags/初始化模式/index.html","62d03828be9a6492db03eba4c000fd75"],["/tags/单例模式/index.html","e6bec9d1b63152d907016bf3ec8406c4"],["/tags/原型设计模式/index.html","0396312461b4c4c13683e203678d6844"],["/tags/命令设计模式/index.html","5c5974288bee3aa0e4a6d072e1c60982"],["/tags/基本控制流/index.html","e60de3e197edc2f1192dc49419c6ad65"],["/tags/外观设计模式/index.html","fff09850048e850f9c0bc63bd6ee10aa"],["/tags/委托设计模式/index.html","ea1ec5f63109c34854798e6a1be16bc5"],["/tags/子类化样式/index.html","e6c48a14481676cf1a61b12a7aa15b26"],["/tags/对象池设计模式/index.html","dfdc8162666ddb596fc4ff5269cc9cb7"],["/tags/工厂方法设计模式/index.html","3803d395cdf1d0fdf8c801c58acb6455"],["/tags/工厂模式/index.html","86b0e44f7283a7b1e1e84293e9a5d020"],["/tags/工厂设计模式/index.html","b595f315fef56320d62311a4bede2689"],["/tags/开发技巧/index.html","0b9fc7fda6f8b567d2045df7c8afa2dd"],["/tags/开发记录/index.html","d1a44bce076f3de39b1cbce3aca26a53"],["/tags/懒加载模式/index.html","ee8b28cf3f0f2e99c498e1ff273b08e9"],["/tags/技术支持/index.html","d25111aaf00f15f1be6756fb8bd2e380"],["/tags/抽象工厂设计模式/index.html","e9b6c6484812d0d565d84bab89e6d14a"],["/tags/数据库/index.html","96b0debd06d97eb1525da33e86f53ab1"],["/tags/构造函数/index.html","166eb789a4847aa6f48602be73b9638a"],["/tags/架构设计/index.html","03203aafbd067924fe8df5a32ab09e8c"],["/tags/模式匹配/index.html","27cfd0045950475611054d1815ba639d"],["/tags/生成器模式/index.html","810ef42248a4e787ed93cf5b4656fea4"],["/tags/用户体验/index.html","ed3595155564b82c5ee2deed1632abfc"],["/tags/用户协议与隐私政策/index.html","4e8e927c24a392636e0b4605b15f48a7"],["/tags/类型与操作/index.html","00e42a4b9ab1695ef15147b40460c32c"],["/tags/自动化布局/index.html","f593a1298c37b617946bec0a2655e642"],["/tags/自定义UIView/index.html","e408e000e042bb95f8953d813d4af1e9"],["/tags/自定义转场/index.html","de5454ed9726f913251d470c42091736"],["/tags/自适应布局/index.html","eae428125ee4822678e2a00d9056a6f6"],["/tags/表达式、变量和常量/index.html","070e1595118b9475ff56ffba3c7b24a5"],["/tags/设计模式/index.html","208755b2592d983b17e81652eac60e7c"],["/tags/设计模式/page/2/index.html","d229a77c24e87f39a6f0cf8667816538"],["/tags/设计模式/page/3/index.html","04c945fbb9d2e56cea9b043d72e9a58f"],["/tags/访问控制和代码组织/index.html","d2a66a46faa703ed78bb1bff364292e8"],["/tags/运算符，下标和键路径/index.html","2437e949bd8b666af03d54b3f20ed8e4"],["/tags/迭代器设计模式/index.html","6da39f95bcbbc01996a51030f17dd171"],["/tags/适配器设计模式/index.html","f53fc890f07c364abd0c0e2797817aac"],["/tags/错误处理/index.html","4861ab02577375ced4e5a1ea1b7e56b3"],["/tags/静态工厂方法/index.html","0b524d19f35aed217bba18d4e7776aee"],["/tags/面向协议编程-OOP/index.html","88051844fdbcc82e675985be6f8254e4"],["/tags/高级主题/index.html","596bed24f1c1dea279ade5d0fba5a98e"],["/tags/高级协议和泛型/index.html","e3661f7e7467d45cad110abaa1e84db3"],["/tags/高级控制流/index.html","3f9391c929d80812ffe9169c2fe61f98"],["/为iOS应用构建输入表单/index.html","a4b5baeabfb69af8eafd4bd3375bb891"],["/产品开发的幕后花絮/index.html","aeefa7a39fe87087f3742e7141533e31"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a655fd75045ce811fc2b9bce34ba40fe"],["/冒烟测试与回归测试/index.html","2056feb8f48b1b153101cecfd50163e5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f0240471267cd78c61cbc3475f05264a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","48091a051bac8bb932bf32a0b1209f8b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2e428c21ed467785e10d2a7f05a17cb2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","c9250b5eb7af922ed69b334ac9ed238f"],["/在Swift中创建自定义集合/index.html","452bdf419bab4e21793ea73860fff67e"],["/在Swift中处理非可选选项/index.html","e771feb3b63dc6a0d4ea7c2c9a48e282"],["/在Swift中生成随机数/index.html","3abf851da9d878b711570d4998ca267c"],["/在Swift中重构单例模式用法/index.html","4e8f4b048770c1891de2afa8449ed6d2"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","77ae3b2194991b4c8318648e401f19cc"],["/如何为VIPER编写服务？/index.html","ff3619b2d93386658d0f802b15a263e9"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","4f5908b824c5cbe30d4f1d3caaff5d28"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c1be538bb236095ac3f1788ab21078ac"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","57c40fe696e7fefd213d4136d8426fe1"],["/如何使用VIPER构建SwiftUI Apps？/index.html","d13f0657db4b2cdb53c298633af30310"],["/掌握VIPER架构/index.html","82642d1414773f0bdb018ddf15bf4a4e"],["/揭秘 WordPress Hook 系统/index.html","09e144c04ac14c771a1695514bc3c026"],["/比较工厂设计模式/index.html","e2d6e57d244123e97b2ae701b435c832"],["/深入了解Swift中的Grand Central Dispatch/index.html","a28724dcbf0e9766e2c019f529fe2ab0"],["/深入研究Swift框架/index.html","f0df50daa88d7fb6c50e990c11cd678e"],["/美豫直聘技术支持/index.html","63967223178bb414bb5e80f024e5f0b5"],["/美豫直聘用户协议与隐私政策/index.html","f2b5070bd2efeb92215eb4fb000affc2"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6c574d011d04db612ba9addd4e8b7403"],["/选择Swift而不是Objective-C的5个理由/index.html","11d8e6d7bf20fd324ba6faa378acc098"]];
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
