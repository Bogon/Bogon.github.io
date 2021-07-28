/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","0c4df459ea837e9cfa68e1fa587b175b"],["/2020年iOS面试题总结(三)/index.html","231a6d50de08983c8755ea8106bc4810"],["/2020年iOS面试题总结(二)/index.html","e9d1bb80b31ca7b0c49ae9b504c17454"],["/Advanced Swift系列(一): Swift 简介/index.html","6ed1d5d77af6e46df1b59575c85d849d"],["/Advanced Swift系列(七): Strings/index.html","7e1f1ec164503756ca68dbe08df44911"],["/Advanced Swift系列(三):  Optionals/index.html","f593be1dc6db405581ccf019b2e5406d"],["/Advanced Swift系列(九): Protocols/index.html","2db3c0d6a0b9e1babe3ad9cd749e4a13"],["/Advanced Swift系列(二): Build-in Collections/index.html","09c2d1bdcac8c3e44aae6a75b4a1baba"],["/Advanced Swift系列(五): Structs and Classes/index.html","25551ef067af5a6864f4075d5624f0c3"],["/Advanced Swift系列(八): Generics/index.html","1b7e87c57360aa7da83b15afb911fa33"],["/Advanced Swift系列(六):  Enums/index.html","a0807c130d6eae9bd5be97b8d30fb14e"],["/Advanced Swift系列(十): Collection Protocols/index.html","c7d0702cea9b5cd9e87c97d7160fd8ee"],["/Advanced Swift系列(十一): Error Handling/index.html","597cb658200dcd99ea78d20222e46290"],["/Advanced Swift系列(十三): Interoperability/index.html","35ea3b127e9e24b4ce49dcc4607e7528"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","b44a68ab26c1a80a284249c2d1b175da"],["/Advanced Swift系列(四):  Functions/index.html","40a40d2356cd65ff66b088e9f8d396d1"],["/App Architecture系列(一):  简介/index.html","7632d3f07993a2c85f417e2c03cdcf68"],["/Functional Swift 初探/index.html","5101720c676583edce9dcfab06731f82"],["/Git 使用小技巧/index.html","211f9f1b0e17e5817473aef2840e2c05"],["/Go 基本语法初探(一)/index.html","89f2cc53bcdcd364aeb91b91e1e38da7"],["/Linux VIM 命令及操作小结/index.html","033ba201dce4169058341ba3bc6ee195"],["/MySQL 基本操作/index.html","3ea571b06a5c402dedf60516c4b8f80e"],["/MySQL-列类型和数据完整性/index.html","8eea02c98264821fb00b773d7674716c"],["/MySQL-数据库设计和查询语句/index.html","9daeb27f85b269d50a837409ac6d6ffe"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","f04fa22fb49ee352cf1aca76a62b460a"],["/NSCODER和SWIFT初始化/index.html","c76c4b81f9fb94ff1f6a9b16b1858ff7"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","40d2d4a3697e82d0f29ccc23b959107a"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","252b7df7761a8f283e6c864806afb768"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e2baeb412f8082a9f534a05d060f0a16"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","975cddf0d429c6c78ff2c2e560e4d24c"],["/Sqlite 使用Tips/index.html","1bb5728a444751bdde1de1dc6f8a1330"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","5ab85bc4ae733f26863ea94b64ef7b47"],["/Swift 5使用UIImagePickerController拾取图像/index.html","a507a6363be97668835a86b51da0825d"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","b1a37db3f4c087c746d6b4befd870971"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a10c146318e5cda085515ed27eac0535"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","b005cf81fe4a5caaaa4c192cbe9c0987"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","19c3c3b69e5d137017a722610a7f9a4c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3c9e713941ca8e42156c3318b6362121"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","4d8da5ee1c3d01ae31e00447d98af380"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","b3990e6cc9bb087d28a3430d9fb392fb"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d327968eb1d9a1b76694ef4e59d0fc88"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f5fea14b7a7596231117db9f21ed5dc0"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d3cb29bdafbbdee1970fa8ff80e059c9"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","39e61937324839c1f4b13134b1dabafe"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b88956d904e70c55d084a5f08859e3db"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","dcb2d2770e93d42c3d03dc9526fa50d1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","6c99522ef042cf89b31424a45c05f94b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","0329965b09f0cc0e12f898303f2abcb9"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","450926d539aae1de8168766e5ef0bcef"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","f13c93febd840e79a87fba1f7c544a90"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","4a580530af72e05b89f4906a3dc4f8d2"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","e5200289aafda3274f7ab5828111e7ab"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","afe344ad429ebd889aecc09d78f475cd"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8916717a9b946af14c97c84e09b48776"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","0f511d5cd74bf8e229464e7eb50b2965"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","96c24cf552dfb8e01b195414fee55231"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3c1cfb31a9010ccff27977ce3ba4b90e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","3e5d219402fe03911ee44122f0479f4d"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","a49ce364fe62c2eba7ba5392ab900e79"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","bb9cd5799856c5485f8b7dd21d224aaf"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","39ad8bdf6a5e6190cfa3f0113276aa71"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a94b4623f8400ab756736db0c38b88bb"],["/Swift CompactMap vs flatMap：差异说明/index.html","9be8b5c6b9151e3194cd919d36af688a"],["/Swift Grand Central Dispatch 深入实践/index.html","fc5adb20a28ab639d7f39782aa47845e"],["/Swift Lazy属性初始化/index.html","1f91613897822e6e2b774e265672c9c9"],["/Swift Promises 初体验/index.html","333f73e961c8867f6d6930afad470f28"],["/Swift Promises 探究/index.html","3221544c9a1c16c10114a1c0fb966d18"],["/Swift UICollectionView使用指南/index.html","ea7e4e954e972ec6c0f63bca759c4b07"],["/Swift URLSession && Combine framework/index.html","a36abedd00cde1de5e514ece754abe59"],["/Swift tips/index.html","b05ac56ea9cc239effa5814cad32b659"],["/Swift 唯一识别的视图/index.html","0389fb5b979e01be358d9aa8f764ba58"],["/Swift 如何学习现代UIKit？/index.html","e91236bc7b3b3ae310a9f208064a98b7"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","70523f23b3ca4be003c55ddda999265c"],["/Swift 用 compactMap 替换 flatMap/index.html","633bd48cc2a49cd742a10062f4f61393"],["/Swift 选择和播放视频/index.html","e814807f2f40c03dfd26f0fcdac11924"],["/Swift中UIColor最佳实践/index.html","d9df78947b07aad57a91bf135c9f4609"],["/Swift中快速简单的工厂设计模式/index.html","8c1f71c929c173de40409f3c42addac9"],["/Swift中构造函数与静态工厂方法的比较/index.html","26945025f874ed7e8520d4e2b687d355"],["/Swift中的UITableView教程/index.html","cf7b35c69af2ca876b823eec035d54f9"],["/Swift中的懒加载模式/index.html","2384dbafb7df63fdcf8339dcccd1669c"],["/Swift中的模块和挂钩/index.html","51218f56c806fb69038cb975b7bf247e"],["/Swift使用布局锚点添加约束/index.html","51dbbf469dea7d9516cc75ec4da07612"],["/Swift依赖注入设计模式/index.html","edba6221440cd291eafd6c50d1c343d9"],["/Swift关于Dependency Injection (DI)/index.html","5f465b1099b5b300e16add1c4ba40bd3"],["/Swift初始化模式/index.html","325bc921ccdf2dd9821e992d74b19192"],["/Swift单例模式/index.html","464ae084336abd24086b2425cdffbe6f"],["/Swift原型设计模式/index.html","2a0dfef727eb26486b5d550de797095a"],["/Swift命令设计模式/index.html","daedd1f9c112ce7a9b0f2d04454aa0f4"],["/Swift外观设计模式/index.html","a6ff9d4be55da563b9bd4a1f0332a06f"],["/Swift委托设计模式/index.html","f57606a5df638bc305925958b863a148"],["/Swift对象池设计模式/index.html","d1f06f72b0f5f5499158d7f5c2675640"],["/Swift工厂方法设计模式/index.html","722ce1c6eb98b879df0e7f211698c8cc"],["/Swift带闭包的懒惰初始化/index.html","a0c39914909f86060078421e097b7fcf"],["/Swift抽象工厂设计模式/index.html","7fafd6d1379a550a8b4d80854d6b5648"],["/Swift掌握iOS自动布局锚点/index.html","c3aebc65489773c22d695aa673a879e4"],["/Swift支持旋转的自适应单元格/index.html","38a0f3b678cc696ab790afc85997f6d7"],["/Swift枚举值/index.html","f6d7bf32d30c129b8eff5b4e657acbeb"],["/Swift生成器模式/index.html","ca6880794bfd90dfed1058eaf2648448"],["/Swift结合Xib文件自定义UIView/index.html","75dcd8cf98b66ffc487455c8d5754011"],["/Swift编写的20个iOS库(一)/index.html","8006a3544ebbac7b743dbdf937c9027c"],["/Swift迭代器设计模式/index.html","cbed3b57b665390acba0a8c12f57453f"],["/Swift适配器设计模式/index.html","dcf1ea68c6f2dab10ad98c18a856591b"],["/Swift静态工厂设计模式/index.html","156ef74c5c847f9430f5af12dc6a5c47"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","aeb187ef5831a2459f736dad39f79f51"],["/UICollectionView data source and delegates/index.html","af8360dfa3a323a387affe23da41fb30"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","e9eeb324dbb51d952fa1ad57a74d0e0f"],["/UIKit初始化模式/index.html","1f9f8ccc8bcb5e3e41ee49134b184737"],["/Ubuntu18.04替换国内源/index.html","157a6708c8408005ae9356e65a54d41e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2e2b3769614917c2163a81ffd6035042"],["/Vapor系列 (一) :  Vapor 初探/index.html","5f92134cb5745a7f4a7c3acddfdd4304"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","165addad52bd47437480c5d42255b6f8"],["/Vapor系列 (二) :  Hello Vapor！/index.html","63835563c957d2b31738afa49469d478"],["/Vapor系列 (五) :  使用session进行authentication/index.html","e2b4018cf3030dd300fde59703b1e28a"],["/Vapor系列 (四) :  创建博客数据库/index.html","5dfa3dc6cea5bc236e7869e7fcc06d0f"],["/Vapor系列(六): 徒手撸一个CMS/index.html","5307ba2fe50bda63fbe7d4ba3a721be9"],["/WKWebView与Native交互注意事项/index.html","898602eb96b93ec8a5ebde5bd5a8c1bf"],["/Xcode扩展/index.html","8e1ab10f0f85d14d6c92cb4a53b3abbd"],["/about/index.html","cce1834a61c86dec3ecef3f4edae7f35"],["/appleOS的Networking示例/index.html","a43d31bf68776e8493da3d49bd6495ab"],["/archives/2020/03/index.html","a20b3d0b10e44b49be1ee55242fb5eac"],["/archives/2020/04/index.html","89c9fab3836b1ac976af405f5009ca2e"],["/archives/2020/04/page/2/index.html","9824e16e104cdd836b75fb8eca1d93ec"],["/archives/2020/04/page/3/index.html","a5834b7a99f4defede9ab06d852753ae"],["/archives/2020/04/page/4/index.html","9ebbc65aaf930caf874a1d0b8573bc8b"],["/archives/2020/04/page/5/index.html","c900950203b0b0e81646a094737d8dd5"],["/archives/2020/04/page/6/index.html","3b767df8e6a00e10b21d2e27bc2576ea"],["/archives/2020/04/page/7/index.html","ce7b1119c8da918b1500adfd793a5c2a"],["/archives/2020/04/page/8/index.html","e53184527562b155d5c11a3f9e143d6f"],["/archives/2020/05/index.html","f27f334d85ac6e99c098d19ef67cd839"],["/archives/2020/05/page/2/index.html","7faa11ab602ef232f03a0ee50799ff6f"],["/archives/2020/05/page/3/index.html","23284d190ce3225c7ad032fc59a0bef1"],["/archives/2020/05/page/4/index.html","5e49c190c42558d171d2b850d59c1f11"],["/archives/2020/05/page/5/index.html","355ccbb94d0881e09416d9f7e65bb23e"],["/archives/2020/06/index.html","9226069bd1cad87d6e212efbbc2c5031"],["/archives/2020/06/page/2/index.html","1e1c912fff74159fcbfbd407ae8720e9"],["/archives/2020/08/index.html","0e5b8a2acbee4b1c3f057068debaa381"],["/archives/2020/09/index.html","ff7dfc74e0e7729c4baf3dd835f77fa3"],["/archives/2020/10/index.html","54b70db0e2f394b4ad48fb6f8bac5f06"],["/archives/2020/11/index.html","e61eb40839c889d246ba34071a842155"],["/archives/2020/12/index.html","16df329e99c91d4043b4659e4635be91"],["/archives/2020/index.html","17a45848ed2b9a31d8214acb3e3735ef"],["/archives/2020/page/10/index.html","8a8a0c9b3278a168f815895a9111b896"],["/archives/2020/page/11/index.html","69dafdf71f1e04b4d2592cad71da9ccc"],["/archives/2020/page/12/index.html","ba35c2e3d979cb6e3e3a5cd7812adc5e"],["/archives/2020/page/13/index.html","c77544263e6745ec8a15d2ffae42ce09"],["/archives/2020/page/14/index.html","0ac303ec21f925e6fa7b64e7fb72a3a4"],["/archives/2020/page/15/index.html","84daa3e4f8afc79d4dad1744b710aa25"],["/archives/2020/page/2/index.html","33189f1252368c6e34f7d6d20c62b427"],["/archives/2020/page/3/index.html","16ddce559da00936c9917dae75ed3694"],["/archives/2020/page/4/index.html","8d71c5a2f77b6ec6c9d2e27c254e6c27"],["/archives/2020/page/5/index.html","fc97d99517d41ebf116dbf2ac16d103c"],["/archives/2020/page/6/index.html","4b62e66e6068504bc6656212a250ccdb"],["/archives/2020/page/7/index.html","269000bbc0bffd676bcc4e209d2ca74e"],["/archives/2020/page/8/index.html","56949607b2046c21ddd7085ad997a981"],["/archives/2020/page/9/index.html","45e1873e1edb7cd3583583e389e7dd02"],["/archives/2021/03/index.html","e5e1bf39d907f0ae278d3084f1d4c49c"],["/archives/2021/04/index.html","b5849a9a8a992d578e8ee990934ec04d"],["/archives/2021/05/index.html","093b518d9b23f92613535483d578fbd0"],["/archives/2021/06/index.html","32a5618ff379cbf740f44fb35233b33d"],["/archives/2021/07/index.html","66010b61477d9b908fe6c2d7d9c1d9e5"],["/archives/2021/index.html","acffefccd930a77dd2d4f886f01cd5b8"],["/archives/2021/page/2/index.html","c69a44fa6b9ba421602542dd1ff49218"],["/archives/index.html","57add51fbef7074b620b01be219e4aeb"],["/archives/page/10/index.html","47a7c10b85d7233a9e39a2e2dd796e4a"],["/archives/page/11/index.html","9932305d7a2abff7349ece4cb94dde48"],["/archives/page/12/index.html","c685c6b9349ba6892604488627a91cdb"],["/archives/page/13/index.html","7c77f74aed269e2e6e964547258b2908"],["/archives/page/14/index.html","82c3f34e93af5801ff98e5a2e55af409"],["/archives/page/15/index.html","75140762d5517cd79ead312dfdee72fa"],["/archives/page/16/index.html","d8e1de62f24d25f8d234a022f453e398"],["/archives/page/2/index.html","dacdb77c733c7d74629c32f1753e9fb5"],["/archives/page/3/index.html","a9e9b8f77d2996638c4ff1d2febd1fc0"],["/archives/page/4/index.html","6fc97b37a519b537e61f12d14dd3b9fa"],["/archives/page/5/index.html","3384ee795c61b93d95f1ca67083c8174"],["/archives/page/6/index.html","ee8bd914ffa0f26d6a1e5f6a7fe72428"],["/archives/page/7/index.html","d3f759c2fe48d5624fa7b28c30b7f7f3"],["/archives/page/8/index.html","460bf2b4b1a932ba0b8a911ea76e3712"],["/archives/page/9/index.html","243bc614e96e92ac28b7b03c9c2b0f90"],["/bugly 上传dYSM文件小记/index.html","fbc8aaff9469ba582cf9343c903e465c"],["/categories/Advanced-Swift/index.html","9072d5f061ea34872f9ae07ebc0adb8c"],["/categories/Advanced-Swift/page/2/index.html","f95a8c519aadb5895bf1fc2752ee5144"],["/categories/App-Architecture/index.html","df2e862a5be87ca2505705c6f7dd5b9d"],["/categories/Array/index.html","9a75ebdc2b308769ec71d248a1647720"],["/categories/Codable-protocol/index.html","aa52a6a62d65719dbc66261c75b13ca4"],["/categories/Combine-framework/index.html","35d4aaabceb331a7eddc64a28e0289f8"],["/categories/Combine/index.html","f70c9f7b88ebda8c7d3970ae74c1ae8b"],["/categories/Go/index.html","77804fc34000e2ddb9ad622defb72373"],["/categories/Grand-Central-Dispatch/index.html","c09aebdc5670ba0afe861550c7305a6e"],["/categories/Hexo/index.html","b75bc45d535b464c2982d5c4a1eb4688"],["/categories/Homebrew/index.html","a70f5889a3ca1f5e236f1ef0ac424e83"],["/categories/Linux/index.html","c179bb8161a73aa890a8ffae02433032"],["/categories/MySQL/index.html","c3db600061f17878b4889fa3824e4cc0"],["/categories/Promises/index.html","73255e8c04baac4d8f40966e16c79b7d"],["/categories/Result-Type/index.html","0d77181f53c12b07491aea43f8908ee8"],["/categories/RxSwift/index.html","4768caf76009458037f6a76f5acd8606"],["/categories/Server/index.html","6782fd6bbfa0f868efe63250ede3d498"],["/categories/Swift-Apprentice/index.html","d671766dc8486f6d0a68f8a00fccae3c"],["/categories/Swift-Apprentice/page/2/index.html","19babf81130e96915fa4364a67e6881f"],["/categories/Swift-Apprentice/page/3/index.html","fac15d5eb628c1ada365067036d7d91f"],["/categories/Swift-源码阅读/index.html","4298fa0a2917228db2a4f7cfb4dee55f"],["/categories/Swift/index.html","4dbfa530aac57cccb494664c2a05e07e"],["/categories/Swift/page/10/index.html","e39e6c023af04a60784429f9dc2d329d"],["/categories/Swift/page/11/index.html","fd9be868eedb47709126b006cd6922d9"],["/categories/Swift/page/12/index.html","a9632e875cebd568a45fdae0da6af496"],["/categories/Swift/page/13/index.html","e67bd08f5b9bd2941bee5492d94f0701"],["/categories/Swift/page/2/index.html","8bd664bbfcbbfd59a1913b93f131bbf4"],["/categories/Swift/page/3/index.html","9438deb9179a515e3f337839154b98fb"],["/categories/Swift/page/4/index.html","d3b889117459076a9d67cbcdbc79f098"],["/categories/Swift/page/5/index.html","14f1530eb995e5c56e76327f500e9c85"],["/categories/Swift/page/6/index.html","dd7680b9b04d3ccf205f2a18fe405dec"],["/categories/Swift/page/7/index.html","ce93f6d73764889f8657f33e4efae28e"],["/categories/Swift/page/8/index.html","775f99894c1e1b5b5bf610ff3e3bbf85"],["/categories/Swift/page/9/index.html","c8261ff8f562b0b95c052dafe2d80728"],["/categories/Swift5-2/index.html","525b6e3067f14f7065ec73bc44f58b36"],["/categories/SwiftLint/index.html","eb1f0e6f340fdb72eafb380b21e98ebc"],["/categories/SwiftUI/index.html","67f460cfc8f5ef82da9a68ec80a585a4"],["/categories/UICollectionView/index.html","777280add9d5771ab07bf9dd247fbb92"],["/categories/UIImagePickerController/index.html","479e88dc7a1c31f4e74b423223e0a775"],["/categories/UIKit/index.html","5658bf69b2f6a21cc61b2e2af15b518c"],["/categories/UIKit/page/2/index.html","ce37235bed65144bbcdd1bf9d40d83fc"],["/categories/UIKit/page/3/index.html","48b93bfcf82dda9c846789bf751ba4ff"],["/categories/UIKit/page/4/index.html","3394a70110f1e303878a585c9c88f7e1"],["/categories/UIKit/page/5/index.html","41f6f6e54a5578cd4c0899990645b1d0"],["/categories/UITableView/index.html","e68965620f771fee66c00bcf9e42bd05"],["/categories/Ubuntu18-04/index.html","ef3f5af4077b427c2a6f32fdb688cc9d"],["/categories/Ubuntu软件源/index.html","3ddb9f0dd58e50e93ee99bc8100706c9"],["/categories/Uniquely-identifying-views/index.html","3b5fb579075c5ecb1e385a5dcbc7530e"],["/categories/VIPER/index.html","2363ca6a40eb7865193c53c46effed1b"],["/categories/Vapor-4-0/index.html","e0e94a73d342bc185010eb5d1cdd803c"],["/categories/Vapor4-0/index.html","27ec36b1af2acc812f43bf259b05c13f"],["/categories/Vim/index.html","546caa8c13bc27d4a9ce55f9fbca86a9"],["/categories/Xcode/index.html","3e91929194787c4aae96f1a793b4aacf"],["/categories/appleOS-Networking/index.html","9288bf34db746dfbc8644d0ae732f478"],["/categories/bugly/index.html","953bf5c5eb899ce013a59df5d77f687f"],["/categories/enum/index.html","d45e2ceaf968fa62a08c5e3a52a4978d"],["/categories/git/index.html","77f80b0ec00fddd189b0bf9cdc992af0"],["/categories/iCloud/index.html","8daf31d38cd484716b6f8a25f7ab6936"],["/categories/iOS/index.html","65eae725ec88ae5607769a4ff14d7633"],["/categories/iOS/page/10/index.html","9b24555d70c6e85f3aa8c23c4b6dcdad"],["/categories/iOS/page/11/index.html","49c851f3f604d9135cc6a1988f2102a4"],["/categories/iOS/page/12/index.html","00cc97a9b85650171fd4c57ea8aa7bfb"],["/categories/iOS/page/13/index.html","e628f7fb98ec8228eaae5ed7c3c4b900"],["/categories/iOS/page/14/index.html","0c357f1b06057298eb026a9bf0de4ec9"],["/categories/iOS/page/2/index.html","74b2e8f74e58f5f384a568b07056f655"],["/categories/iOS/page/3/index.html","696a11f67fd4803c33357888df0083a3"],["/categories/iOS/page/4/index.html","d6737683e551c1fd6c77c02dbf84e7fd"],["/categories/iOS/page/5/index.html","512c1162965e3a7f6f716b07c1e652d3"],["/categories/iOS/page/6/index.html","170ef5c2ea24aea09684029c882db075"],["/categories/iOS/page/7/index.html","ab7632bf9d80c7ed6a464e3612713164"],["/categories/iOS/page/8/index.html","d95c11940cb48ead0fdddd178c87c24e"],["/categories/iOS/page/9/index.html","26493f7ad9943effc97083568f76e19a"],["/categories/iOS面试题/index.html","ad675d9780acbecd9f2f3a5cfe6ff888"],["/categories/index.html","bffe2ded10290ffc9878907cfea3bc8f"],["/categories/random/index.html","8fa4a11a979f577deac2d0d1bafe7f9b"],["/categories/三方类库/index.html","b36f9a4f08e59d045b3de553bd16e51d"],["/categories/函数式编程/index.html","23cb2218b1d50da85b5d37d43891a05d"],["/categories/子类化样式/index.html","50fb6b2380f4064d76c152f16d138ed9"],["/categories/开发技巧/index.html","caf101fd8ab9e5307cf09bd28cba169b"],["/categories/开发记录/index.html","9141ce92a27c606990e9e4e79eb51a26"],["/categories/技术支持/index.html","28224b40d6e8916108d096c68f95bf5b"],["/categories/数据库/index.html","1d61780f895d1f7f0d3a612ba543dcd4"],["/categories/架构设计/index.html","7008741ec62094e814eb52ed5d920409"],["/categories/测试/index.html","49455380cb1c3bd73614ccb7bec3c48a"],["/categories/用户体验/index.html","b92d9cb4e107d2b513e454858569b7cd"],["/categories/用户协议与隐私政策/index.html","9cc95d1747db0e79a083ff46bae1c47e"],["/categories/设计模式/index.html","b7416592326add928b6ec4acfe7aa10f"],["/categories/设计模式/page/2/index.html","4baa20e12258bd0c6bf2d82508e29ede"],["/categories/设计模式/page/3/index.html","54e94b18ad39440e2cba1c4f76517767"],["/css/main.css","048a267d4068ed97f756ac750ee3b296"],["/hello-world/index.html","03972fd79c2f3097fb81ce3dfaee1583"],["/hexo部署失败/index.html","6b989ff39cf2e5eca657031866215652"],["/iOS VIPER架构深入实践/index.html","9ad51fbe24ddf2cdd7f0206b4d762ad1"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","a3564b022277ec3406525dec2cc20ca2"],["/iOS 自定义视图，输入表单和错误提示/index.html","8385edcaf7af420ffba41e3878ce3f04"],["/iOS如何使用iCloud文档？/index.html","ece0ecd0f317675415cff5ff9da20d08"],["/iOS子类化样式/index.html","ec658a3e17e8bf479a8edfed042e6165"],["/iOS开发记录<一>/index.html","2e8bed613abf6ab51fd1e8efd0a31b10"],["/iOS自动化布局编程/index.html","444f5d20e67389facdcc6e9003234fb0"],["/iOS自定义转场(By Swift)/index.html","19f9d15e988b29d6bb31e1657d00533f"],["/iOS项目架构：使用VIPER/index.html","884fe899be3474b4bf4ab74469424306"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a46ffff4b149b2fb5a4feaec93f04384"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","cbd58d2a6b498eec958f6ad9c7a62e06"],["/page/10/index.html","a637df2d25680a5f35863f1d431a75c6"],["/page/11/index.html","8d9688b17d4c9058bbf69e58a4cd5be5"],["/page/12/index.html","0f535234e12c43dc50e211c2926b20b8"],["/page/13/index.html","12c6d5728dd7ce8501f75cc51639b8e9"],["/page/14/index.html","537688ac438db6a7cec72f9dd56ccf1b"],["/page/15/index.html","51c563eff319394604f142e4e72be9fc"],["/page/16/index.html","3914f46e91a2801c9f01e8fa7c492e15"],["/page/2/index.html","5b9d4943583f748a64b33db999a9ad96"],["/page/3/index.html","a4d6b462b5d286261019aa8f31feb6a2"],["/page/4/index.html","4c8a66a2f90f699e96480243b601bb24"],["/page/5/index.html","a02615fa034dbb5f6faf04ac6ba38194"],["/page/6/index.html","c5c0cb45f84b872dd630e3cf8510de15"],["/page/7/index.html","1e5b8caefd5044fe5863f3f94d4f9907"],["/page/8/index.html","b2673c6c4229d1f8366372d678ddbc56"],["/page/9/index.html","003d0022b60f33d93b55fb6fade20eaa"],["/schedule/index.html","7c42aa2cbae16acdf965d3bd1c08bc8f"],["/storyAppPrivacy/index.html","a48c2a304210b8880547647102eaf984"],["/sw-register.js","0bdda9868d95cc52f3b8f72deb084b1b"],["/tags/Advanced-Classes/index.html","3a9442b8652cfd336e95f43fc85c72bd"],["/tags/Advanced-Swift/index.html","e66656cb8138dd93929f376defc34871"],["/tags/Advanced-Swift/page/2/index.html","e712766d850f47b6ccd110881e4c218d"],["/tags/App-Architecture/index.html","e1ff05ff2d2deb763a84add93753d62b"],["/tags/Array/index.html","771e0ab69358b5ea6113dbc01cb82a11"],["/tags/Arrays-Dictionaries-Sets/index.html","143b86efd3a25d7b18f4c7e4ef859d7b"],["/tags/Authentication/index.html","a6cfd4d6773a90cf4082a91d25198862"],["/tags/Build-in-Collections/index.html","dc54eda449335fbfad641da2c0654609"],["/tags/Building-Your-Own-Types/index.html","af43e67a0ae729dc33973b25a011a874"],["/tags/CMS/index.html","746dc12be6bf16805ccca1f62de16954"],["/tags/Classes/index.html","50cbd96334862658aab45da8eae32114"],["/tags/Codable-protocol/index.html","8ec1dfb8376596cec0b7dea823e9e38d"],["/tags/Collection-Iteration-with-Closures/index.html","26490b1561f61ae0b1ada944f5602121"],["/tags/Collection-Protocols/index.html","c30ad882bc1f5c9d125592573266eaaa"],["/tags/Collection-Types/index.html","74dc5be05ebb5e4d141f4525ac73fbad"],["/tags/Collection/index.html","9d26838e761cf790efe56b61cc2bd613"],["/tags/Collections/index.html","0db443a4b10a1f6e03e05d743d2c6ce0"],["/tags/Combine-framework/index.html","38b46f3624ab8c12d0dc1939b3c0e7e9"],["/tags/Combine/index.html","4376b16c50528376d60546b8ed02bb43"],["/tags/Dependency-Injection/index.html","2829644ffff29e005cdd0ddd061fca0b"],["/tags/Encoding-Decoding-Types/index.html","84c8dc6f9edfbcb42cd20aac40862432"],["/tags/Encoding-and-Decoding/index.html","3dae774939864064ad9f3410de91e853"],["/tags/Enumerations/index.html","26f6fcd450d95ccd252dff196dfcb20a"],["/tags/Enums/index.html","ce12c84986521a50a88494c4deb8886a"],["/tags/Error-Handling/index.html","ad9a1c3637a546ee62d01f6d43c3a35d"],["/tags/Functions/index.html","b2a07a0aaa0fcec5f652cc0c247c5dad"],["/tags/Generics/index.html","456342d880a0da59a46d2910839ce3dd"],["/tags/Go/index.html","ac9e4713f20694afb27fc01e20522c42"],["/tags/Grand-Central-Dispatch/index.html","4c5f6c9f69ad2965f86f1288e6c8a053"],["/tags/Hello-Vapor/index.html","347851379f6cef4bb7cebb4e4eaea65d"],["/tags/Homebrew/index.html","ccb7fc05eb94cea4d07fe7938a63e218"],["/tags/Interoperability/index.html","71f89a433b9140cb53e38d8555ba9233"],["/tags/Introduction/index.html","50dda1b92e04af3b692bdb44ad21a379"],["/tags/Leaf/index.html","50886923e1e1bd11396f07a1afd36551"],["/tags/Linux/index.html","05797bf2c9664a36765b8f5d17bd2179"],["/tags/Methods/index.html","0fcf201d0ff55dc1b743538328dc1b95"],["/tags/Modules-And-Hooks/index.html","0e605983fb45b8407d6085f76b404160"],["/tags/MySQL/index.html","f6c96fe2aac709b411638d47a7caabd6"],["/tags/Optionals/index.html","9c8b9f9269a5c4cc637fa5651de900a2"],["/tags/Promises/index.html","3220ab0c6aa08f4b0e49c44197e36518"],["/tags/Properties/index.html","4c796a2553c3766df1e91363d04c4573"],["/tags/Protocols/index.html","7e373c74e99079feec3229c30ec4090c"],["/tags/Result-Type/index.html","7661c53b1ea9a8c46822ec3e2b3a2926"],["/tags/RxSwift/index.html","4ce579306e2ea18f4780466306d318a4"],["/tags/Server/index.html","d426921f6ed64de30b775a1e597a26a0"],["/tags/Session/index.html","53ebc6cc27f2b0cafc182ce433eeab2c"],["/tags/Strings/index.html","c8ed30749f90f23370c8909c15e43322"],["/tags/Structs-and-Classes/index.html","aee5de1e08a754f90baa6a36de2dcaa1"],["/tags/Structures/index.html","59f3d8170e6c6960fb3c52ad944661b9"],["/tags/Swift-5-0/index.html","530433fa8374efebbe96fcf4b296a60d"],["/tags/Swift-5-0/page/2/index.html","28687eec1ecb1d1f7abf2a5d655135a6"],["/tags/Swift-5-0/page/3/index.html","40e21e217e1e2fad39bad6d3ca8e6728"],["/tags/Swift-5-0/page/4/index.html","e05fa6dcbc1c96c78df48ab91bc21e95"],["/tags/Swift-5-0/page/5/index.html","116f53718e9ba6dbeb7caa1b440021d9"],["/tags/Swift-Apprentice/index.html","2402d2495d846c5d6a0946c41c17553f"],["/tags/Swift-Apprentice/page/2/index.html","fa00bb93f88fa0374bd9bd80b6b0a9b5"],["/tags/Swift-Apprentice/page/3/index.html","cd6b437f024549142495defa6d9049b8"],["/tags/Swift-Package-Manager/index.html","243229eb821ca03b0ebe5b1a19f201d8"],["/tags/Swift-源码阅读/index.html","6414a4c3b053300c18e9061a83e25165"],["/tags/Swift/index.html","e15290f448bf96be8d8589dd114df90d"],["/tags/Swift/page/10/index.html","70fcabad34827d001a744e1d70bbde3d"],["/tags/Swift/page/11/index.html","18652ea36b17762b9cd5d8a8ec40ebd3"],["/tags/Swift/page/12/index.html","1d628b762aabc42cde4572067fbc1e4c"],["/tags/Swift/page/13/index.html","85db2268757e0be3a61d468d68a9ba08"],["/tags/Swift/page/2/index.html","5d2f656838479be0ec23e542e7441a7e"],["/tags/Swift/page/3/index.html","98acef7256f2caa7f75071c9a1ef95d1"],["/tags/Swift/page/4/index.html","a51b5bc15f06cdfbe01afd707ba23b23"],["/tags/Swift/page/5/index.html","30a0f359a0938d2f5e27c7dd46f00b4c"],["/tags/Swift/page/6/index.html","f7a2efb9ec30847139fd9ca3a2298aab"],["/tags/Swift/page/7/index.html","9b05784a8cd0ca98c6cf067a24c4b421"],["/tags/Swift/page/8/index.html","0308b36fd735da334b057d2c0e480a3d"],["/tags/Swift/page/9/index.html","469f038d86b057089fcc643d5302d606"],["/tags/SwiftLint/index.html","5d4472d8e8a9e58439224af827e42709"],["/tags/SwiftUI/index.html","aee8db91dfd0bb3271bc27048a988bc6"],["/tags/UICollectionView/index.html","eb344c63db3bb34121efccfbb50df5f1"],["/tags/UIColor/index.html","2834e50d840f01eed41dbf3bec2c9d7a"],["/tags/UIImagePickerController/index.html","7287acc7572e2f208f78c5de88692509"],["/tags/UIKit/index.html","3745db5cc2738e066bdb0e45fba87505"],["/tags/UIKit/page/2/index.html","f9280a690699a33175259cee3ae14b5c"],["/tags/UIKit/page/3/index.html","fde296d3bc17b87ea0d91b84d85acd84"],["/tags/UIKit/page/4/index.html","1090a9dbadb1fd0f701c040fa873a368"],["/tags/UIKit/page/5/index.html","0750424961c0cdcac44affafdefe0e11"],["/tags/UITableView/index.html","66144bd5cd1b80ba98db992be402d4e4"],["/tags/Ubuntu/index.html","afb2135c0af1e4103b07af4f2f1c210b"],["/tags/Uniquely-identifying-views/index.html","76417a13f95186145f05d492794105ab"],["/tags/VIPER/index.html","e690397557c70925bdcf5a8f4857b80d"],["/tags/VMware/index.html","8f4fa32deca98563a45a9b4654228135"],["/tags/Vapor-4-0/index.html","8fc30d8c6549407b36fd907d0c158dba"],["/tags/Vapor-初探/index.html","9c0b760421016cae0437d1533c01fb23"],["/tags/Vim/index.html","66ecf3dfcb062e87f60131b5f55ad760"],["/tags/Xcode/index.html","65f56555a0b02c6b2e06f9836c5400b9"],["/tags/appleOS-Networking/index.html","cecab9c2522629182136dfe0a891cfaf"],["/tags/bugly/index.html","af9e578e1f894ac24b5f6df253f27f5a"],["/tags/enum/index.html","bb95f50dac750bb5f989e28a2e62fccb"],["/tags/git/index.html","6411393704c7d74add812aac65f0e724"],["/tags/hexo/index.html","76303bcdc988bba2aa72ac4672953e7c"],["/tags/iCloud/index.html","13d827584b75d527971762443dda2b6f"],["/tags/iOS/index.html","b9bd5f49b8c7303528df1b3bc05f2a93"],["/tags/iOS/page/10/index.html","929f2e40b5e9a192da90e73296a18e1e"],["/tags/iOS/page/11/index.html","398eac24bc69065be9bc8b37528adc26"],["/tags/iOS/page/12/index.html","10e48c8ebd42e07385bcbfa141b9ab4d"],["/tags/iOS/page/13/index.html","d3dd2ec9efc4c5448a6e6ca2ff79b803"],["/tags/iOS/page/14/index.html","fdefd0e4887c5f99907d888c92f4366e"],["/tags/iOS/page/2/index.html","eceab2debb49587b81f47573206ef831"],["/tags/iOS/page/3/index.html","487f587a757b1d0f468203dba271e508"],["/tags/iOS/page/4/index.html","aec010140db693fd2cc44164dcec070e"],["/tags/iOS/page/5/index.html","ba0e003cd6994fb56a3be747051f1e12"],["/tags/iOS/page/6/index.html","254a0ed89f34db436dbf1e2617b92b09"],["/tags/iOS/page/7/index.html","78867345f197bfed1bf2f248644eba2e"],["/tags/iOS/page/8/index.html","0e76465b1670ab0727c57fd0a680e9dd"],["/tags/iOS/page/9/index.html","f1e75475b620bd4a70acb562cc2e7c56"],["/tags/iOS面试题/index.html","c4b884acb628e981b6f6eaf479859a17"],["/tags/index.html","21af5101ad1a53b27bbc1489cc5d33ae"],["/tags/non-optional/index.html","22ebf06e33a05d4937a971ad68874c6f"],["/tags/random/index.html","334bc08fedb3ede65049087e93f66901"],["/tags/transition/index.html","9b433d77d32b8824e741b3aae36b02e6"],["/tags/三方类库/index.html","608a88e3e40a96b5c5149cb6208fe989"],["/tags/依赖注入设计模式/index.html","5cd53fc9754efffe281eb4b208228f9b"],["/tags/值类型和值语义/index.html","af43374738624e4dc9b7eea99a35caba"],["/tags/内存管理/index.html","386a6d68c9d74c83418be73a9f130ca8"],["/tags/冒烟测试与回归测试/index.html","b6d4c31dc28ccb8cac0647b80bc94fea"],["/tags/函数式编程/index.html","1d91ca43626052a40b8ecc1a134e05ba"],["/tags/创建博客数据库/index.html","48b33257c14275a9e704b36018932330"],["/tags/初始化模式/index.html","8660a7863b4ac1e3d4658087d9687c31"],["/tags/单例模式/index.html","045e535a7758697ad45085e97925aa26"],["/tags/原型设计模式/index.html","a9c352560ced96f02a93bf352815e71f"],["/tags/命令设计模式/index.html","9ab5bd2f1b66049b935372fdaa0e5642"],["/tags/基本控制流/index.html","907452843cdd0c660aaee2ac83816859"],["/tags/外观设计模式/index.html","7ec5ad34b26ba1ba15855cfa908ffcaf"],["/tags/委托设计模式/index.html","ac00838ad88f694c73f6e2a5e8911d02"],["/tags/子类化样式/index.html","37ad486c2761b54c732bc35e73530d09"],["/tags/对象池设计模式/index.html","97648b0f9fe10d06191bac19d4f2867f"],["/tags/工厂方法设计模式/index.html","37a6bd9734cef8673fff779e5e21c44d"],["/tags/工厂模式/index.html","15a3c0855dccd97610acea74913141c1"],["/tags/工厂设计模式/index.html","fbe52b3ac9a3a797c69251d4847ec154"],["/tags/开发技巧/index.html","cc674f60f2f24986b1928204db5238cf"],["/tags/开发记录/index.html","f11238b86ca4a7628d23450aeb1a58c5"],["/tags/懒加载模式/index.html","f9731827941e04f8f7e87f4c20e37dcb"],["/tags/技术支持/index.html","7f6926a0410dbf9f51a9a9741b97162f"],["/tags/抽象工厂设计模式/index.html","59bb27ef9c95ef81397e64c2a4474bfc"],["/tags/数据库/index.html","58416975f9f9c5e002d5a12d7e8f2cf1"],["/tags/构造函数/index.html","3ad105a9f124cef5d5427d3fa68ddf18"],["/tags/架构设计/index.html","70568b00fe76a6a9bd16cb520d8da929"],["/tags/模式匹配/index.html","bb3a5ffb460e4459e828741c9dd2ea5a"],["/tags/生成器模式/index.html","4ee04a598c7614081e129b70d5adc027"],["/tags/用户体验/index.html","1694330ab54574acc58e0e98ab8c9c24"],["/tags/用户协议与隐私政策/index.html","5e4911e15cea8d3f83eb65f6c1313801"],["/tags/类型与操作/index.html","bf330f274ccaba6c3c8d0f74a3ac15dd"],["/tags/自动化布局/index.html","9695c9e86af94df6a2c8537c94ee3254"],["/tags/自定义UIView/index.html","becef1fa2d73c7c21d56b95dce970290"],["/tags/自定义转场/index.html","7f55354df4dfc214343129c339c0e59f"],["/tags/自适应布局/index.html","74a969f60154bf2117e388751cc3e38d"],["/tags/表达式、变量和常量/index.html","03d60016397216cb17fd165bdad66487"],["/tags/设计模式/index.html","05ffccfb987a1b090d86cc77aec273ad"],["/tags/设计模式/page/2/index.html","c50acbc29a225ca84c10a991c2eb9651"],["/tags/设计模式/page/3/index.html","77267a9983c0be9f5996398f1e6238fe"],["/tags/访问控制和代码组织/index.html","ca0127486a4ab2d959448bbf82a1c06b"],["/tags/运算符，下标和键路径/index.html","6b033191f3c23d108ece8bcac8400dcc"],["/tags/迭代器设计模式/index.html","8d49605cf8147bff0103d33377bc1645"],["/tags/适配器设计模式/index.html","df1cb81ea8d6052a83216e9b17e6e32f"],["/tags/错误处理/index.html","d25d87cfc54dc26f2fcfedc43a5540c2"],["/tags/静态工厂方法/index.html","1bb79134784b2c215ab379d21eb7c1c6"],["/tags/面向协议编程-OOP/index.html","47ed877f466863d9d38eacd38521235f"],["/tags/高级主题/index.html","5547bbe0ec1dffb8c112f52bf67dcdcc"],["/tags/高级协议和泛型/index.html","b53f29fe828ba51e77d3519871f0bef3"],["/tags/高级控制流/index.html","f5ef4c8a21db347ebabb505ec730b576"],["/xcode 常用的快捷键/index.html","320c684be919f4181495ee1c908c86e2"],["/为iOS应用构建输入表单/index.html","ed286d2459a92d98d4700dfca99e361b"],["/产品开发的幕后花絮/index.html","66c9f26e95de6c4e2be252e257d8ae7d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0a8970ba810c78868191cb61fb78ef96"],["/冒烟测试与回归测试/index.html","bcf77641d68ea942442cca6eec8e2cdb"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7a60afe497718c921c83410d3d44346a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b59b67aa95969e423995fcf4dcf7ef9e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9a474e8d8787036c84e4f475452ae15b"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","524eb5962d5a14fe9c616fb74bb54520"],["/在Swift中创建自定义集合/index.html","b21651781e8f4a50136608c5d2bf8f6c"],["/在Swift中处理非可选选项/index.html","ef59131f416d30e87339e2187f2a42ba"],["/在Swift中生成随机数/index.html","f2812e936bcdd4ae8ff1e06480a4581f"],["/在Swift中重构单例模式用法/index.html","5f06d57f3fe7a3bc8bf8c2015ba0c6f7"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","9fdfe0fcacda76173b24ab8ecef9c9d6"],["/如何为VIPER编写服务？/index.html","1e1db07cd4c5c9488f6925c9ae2960de"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","29823a48ac5d1b78cec6b3ef2015a47d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c6a4bb20828b1ab066c5f5df2ccce935"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5bbfbeb0776e51a207e599ae01963365"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c9ad0ed1d6dde9909a5af18239463eff"],["/掌握VIPER架构/index.html","08748cfd1fb79001fbdb80ac62817373"],["/揭秘 WordPress Hook 系统/index.html","6d1b8cdf33cee73506ae8ecc5f925c91"],["/比较工厂设计模式/index.html","cc64e21b00d2962ad7948c134f1d5b9f"],["/深入了解Swift中的Grand Central Dispatch/index.html","15733e5457df52c59a0fdc82d93cb4f5"],["/深入研究Swift框架/index.html","6415d5924c71ef3f39875462c9fc99b3"],["/美豫直聘技术支持/index.html","48be2a7cc33c4e5cf775b2a724ea276a"],["/美豫直聘用户协议与隐私政策/index.html","cb7f1862d4afa4784ef99361aa2a97df"],["/适用于iOS开发人员的VIPER最佳实践/index.html","484608d0a3d2994918da450b7cfa34db"],["/选择Swift而不是Objective-C的5个理由/index.html","a5dc8ee1ce264ee642bdd8d7034ff6d0"]];
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
