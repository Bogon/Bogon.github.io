/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","bd7dfa12976e5c7221dcc3f2cfc262dc"],["/2020年iOS面试题总结(三)/index.html","aef73b73004a62a5aef272d690f7a3f1"],["/2020年iOS面试题总结(二)/index.html","5a0c66c1375d5fb957931d22a937a4af"],["/2022 iOS 面试题(附答案)/index.html","d4daf0823013c4ae4fcc0a62b814c4a7"],["/Advanced Swift系列(一): Swift 简介/index.html","5c882b8d8336d31e4259b87a932b3ffd"],["/Advanced Swift系列(七): Strings/index.html","bc69cd51c76d0b56bb92439b5d793654"],["/Advanced Swift系列(三):  Optionals/index.html","ca018db71147e73f73764488ed326fcf"],["/Advanced Swift系列(九): Protocols/index.html","0e834b2d0d065398539e48e42b07f1a2"],["/Advanced Swift系列(二): Build-in Collections/index.html","28bfe0b300a6e4292b9a27cc86120e08"],["/Advanced Swift系列(五): Structs and Classes/index.html","209968f600153a72e3dbfa3a33fcae1f"],["/Advanced Swift系列(八): Generics/index.html","65992b93470b35d19f7e926a773b3ceb"],["/Advanced Swift系列(六):  Enums/index.html","93df7b22eaf727acb347811bd4958144"],["/Advanced Swift系列(十): Collection Protocols/index.html","0f8e676d8e51996a090bfc79663a0c26"],["/Advanced Swift系列(十一): Error Handling/index.html","7950910ff624ef0ec7a50aaaa11b3185"],["/Advanced Swift系列(十三): Interoperability/index.html","cb6c7b2ccbc4722d61c24d1ad9585ae4"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fa7e9b0fd113874ac53de6211adfb6b7"],["/Advanced Swift系列(四):  Functions/index.html","b14c544af4980949f61155563d6aab5c"],["/App Architecture系列(一):  简介/index.html","7e5153f3f9204c63193bf69860360436"],["/CocoaPods 设定版本说明/index.html","6c54a43e7a98540c484b34e2807307a3"],["/Docker 启动 MySQL 指北/index.html","7aad036ee772f4f86923ef733ee29c79"],["/Functional Swift 初探/index.html","45fe3ae892fcb2c162ee56dd61c1412a"],["/Git 使用小技巧/index.html","10d3bc45411f7c35a5651b73a39a30a5"],["/Go Protobuf 初探/index.html","186e3336b03c24cba08c899cfe85b351"],["/Go mysql Tips/index.html","bcd589f7e05f0b24ff1e99b1c7f7eb05"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","a2e52912bfc0fbda22b0057f1ece6067"],["/Go 入门篇：2、Go 实效编程/index.html","61b9ad716d43f1eb429cf3244bda6b0f"],["/Go 入门篇：3、Go 重要概念/index.html","1e2082271ab92acdddeacf7c807d83e6"],["/Go 基本语法初探(一)/index.html","c881be1168dfd0ce49444a58b9310e81"],["/Linux VIM 命令及操作小结/index.html","b6cf62db09d18c87bdd546fd9b045772"],["/MySQL Tips/index.html","f745ca966a1ff02699fdc0364f99a8f0"],["/MySQL 基本操作/index.html","caafa982e9b13fa5292e7919f1c6a46e"],["/MySQL-列类型和数据完整性/index.html","b5ae6e84930d4b5c59ffaf8ce38b1ff9"],["/MySQL-数据库设计和查询语句/index.html","d4d73ededb9c155487c93bc3ba74ef19"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","d9fcc5a933131d949f789b9bba17ad60"],["/NSCODER和SWIFT初始化/index.html","5276a2f4f149c98ff77b184dcd0c1dbe"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a5d8f18ac914495b5b52205a98ca23b7"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","0cdb52083b087dddac21aaa8a7c2d59e"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","948c2891d7832878d39459a38e3a1d65"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","31bac10ebc8a4a13e37948c6b5f95cb8"],["/Sqlite 使用Tips/index.html","6bde63571d0e8f0b3c382c884d2a3518"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","ffecf6be24695e6478a4435a4027e668"],["/Swift 5使用UIImagePickerController拾取图像/index.html","07abc5b8fcbc8e9d67ae49ad3aa15496"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","18b3dc89f9bde448ab0e42b8c489f988"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","14ff24524f3f00673ec27966966afc6e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","faa12c99c5866dc6a188343aab872a48"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","d5ea96c66d7128c799621e6f76f69204"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c137db23ca58fa582b1961cfc5d4d416"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","8ba92c732285c7d94b4a197127fa28b3"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","b642ee514f853642074ef53af7e5a915"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a320da25bd225cadf6d0724b65fb8d53"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","2f03224350ecc30cd0ed4b36c0dc45fe"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","78951241b203a3476355e9c488a011a4"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d91e6fa2b25d53bef567ec8930bed63d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","902f15de66c0b6ec18936b742cabb552"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","d00c3d9c4e98f3561f3e3ac6f3379a51"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","bf47cfa2253557f681af407c5fd1f018"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a1ce1ab1caf1b5d9d1e1fd1b2cf541e3"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","87257294514cc18871bc3d3b734e822e"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","308dbf6823cfbfb820617604309f48e0"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","7177a11b5dfaf6556da7703374759353"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ea129af411ab94916cfbdcf6b81d6993"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","8e7a0fe49644ea6ac25b2dce5a26eb39"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f64d4079a9bd01ae6244a306965503f3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","5648a088c3b06f11ba54fb7be0dc4298"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1c16a1f781d79cd1f2f95b046d64fb46"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f3554d7005d2123f689631977577aed3"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","208b99b36c5aafa0c8a62653147833f9"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","bfb749caf9be236707242e7703af3da5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","78bd7dc38819360b1cfb7ad22560dd22"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","8fe149a2b7bb7dd3607e61d6514af0b4"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","27ecc0299eb6f232483887e57c60a7bf"],["/Swift CompactMap vs flatMap：差异说明/index.html","9fd46622ff0e9efa8aa16317f3121cd1"],["/Swift Grand Central Dispatch 深入实践/index.html","092563b4177567440024da8c6f84e492"],["/Swift Lazy属性初始化/index.html","217e371b03bc6b41cb3b449f7a5c3c9f"],["/Swift Promises 初体验/index.html","8688973e63062823bf8673df4a277a21"],["/Swift Promises 探究/index.html","28f4aaa0fc2c6b71815377c82ce80348"],["/Swift UICollectionView使用指南/index.html","1ec2b6eb2264d7648dbc98be4b79dc1e"],["/Swift URLSession && Combine framework/index.html","1632429ea8e8a63ec0fc69fffb7d134d"],["/Swift tips/index.html","3cbe0be6db3cf411443bc4ffccbe3d09"],["/Swift 三方库：GRDB 使用指北/index.html","ce51eb917befc4fe5cf1e934149a4c16"],["/Swift 唯一识别的视图/index.html","72a44668832b23d38d140f96fd52e4e7"],["/Swift 如何学习现代UIKit？/index.html","2aee9f9edcabe4f9bae47cc28da624ff"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","8ed9760c6243c89292ab7d60ae12e6d8"],["/Swift 用 compactMap 替换 flatMap/index.html","cb3c43dd88104107eb00e19bd9661f05"],["/Swift 选择和播放视频/index.html","231df0f7f4a778ae5dc1425ffa5037c1"],["/SwiftUI 系列(一)：1、 简介/index.html","8bca7b9925989651e333a1ef162fa4d6"],["/Swift中UIColor最佳实践/index.html","d90a833c226df1191eecbfc0f81b45ca"],["/Swift中快速简单的工厂设计模式/index.html","1657e7154ddc52194296759eda929efd"],["/Swift中构造函数与静态工厂方法的比较/index.html","094157534f51921825bdb35fe71ffeb6"],["/Swift中的UITableView教程/index.html","bceaab5669429650d97d52a58a9c25ca"],["/Swift中的懒加载模式/index.html","d1d23e1c09e490320980e4a4d6ea7585"],["/Swift中的模块和挂钩/index.html","641368f43abe224302fdb8b59b16ebc5"],["/Swift使用布局锚点添加约束/index.html","7520180ca6f24c5f69138915da47e44d"],["/Swift依赖注入设计模式/index.html","54b225c0cc29969d4b4a9d6c222970a8"],["/Swift关于Dependency Injection (DI)/index.html","4f0122f5b6a67ecf15316f4def554aec"],["/Swift初始化模式/index.html","eb475bb6d03a0d516cae5034e82d4261"],["/Swift单例模式/index.html","7c85ade5433cacf169332baf5574481b"],["/Swift原型设计模式/index.html","a9c0e85f36bb891143f8417bb9375012"],["/Swift命令设计模式/index.html","c8be82afa09781bc6f03f070e9fdac64"],["/Swift外观设计模式/index.html","53cdb45d0926656087f3231273185850"],["/Swift委托设计模式/index.html","6735248f884de360c0b1ddee752c68a9"],["/Swift对象池设计模式/index.html","f72d677dd37627cc9be4dc5b641b4f6b"],["/Swift工厂方法设计模式/index.html","c1f797068f663fb1b84bfe72cc2e2a9e"],["/Swift带闭包的懒惰初始化/index.html","45645fbb675a1821e2851e557ad5575f"],["/Swift抽象工厂设计模式/index.html","d42c3f7b363c8cf5b7a4ca7644680d6a"],["/Swift掌握iOS自动布局锚点/index.html","4b1691b426787d07e0e4ff95c468577b"],["/Swift支持旋转的自适应单元格/index.html","700c14b23e429bb17c2b3be8b0939ef1"],["/Swift枚举值/index.html","1a0cbbaa59227927fb4da14fcf409169"],["/Swift生成器模式/index.html","26c9036a60cabafc83f574a3eb0fe8a1"],["/Swift结合Xib文件自定义UIView/index.html","bc02fc2ffa36c4c4c80d0df72cf36a4e"],["/Swift编写的20个iOS库(一)/index.html","18f76fc6ca1b49461537b47fb9e018b0"],["/Swift迭代器设计模式/index.html","bb3ce5cb1a7cecb41e29a2c020c10413"],["/Swift适配器设计模式/index.html","5c79f7d9a3579040157babc5ccb7c965"],["/Swift静态工厂设计模式/index.html","233888e8467f4a63596b7dfba705a583"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","16b4be8c25dd746bd8ce609fb01f301e"],["/UICollectionView data source and delegates/index.html","e16b00ec34a10fd5459c53d625164683"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","17e34c82b888508d25e177a745282347"],["/UIKit初始化模式/index.html","138d15e42df4d706857211944330f793"],["/Ubuntu18.04替换国内源/index.html","773ddf6aaf8e64ff6a085c5b28bbd1ff"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","5311425d85c7746eb2b522bf80eaf469"],["/Vapor系列 (一) :  Vapor 初探/index.html","77faff8b60ad29dd05201a7bbb5a73d8"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","7590bb2434ced044351b52cbf9a4bb8e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","4fb957922d00811b4f29f3fba0884181"],["/Vapor系列 (五) :  使用session进行authentication/index.html","539a97111570e7a4e06f5fdf4a4be17e"],["/Vapor系列 (四) :  创建博客数据库/index.html","ed28ee0575bd2002c4e2565ed5940f2d"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7b7e9b0b5193759ea3fc2d7910484124"],["/WKWebView与Native交互注意事项/index.html","87dd1d72ce41d2a62a6005019ad89c0c"],["/Xcode扩展/index.html","b85a75b44f2819d97c34d041eb39097c"],["/about/index.html","3a57531bc24f7d758693106707252841"],["/appleOS的Networking示例/index.html","7d042f78f67f3eb238348e1d0c9747f0"],["/archives/2020/03/index.html","d00072523987df0c8f257400411e6bf7"],["/archives/2020/04/index.html","a0f517e70403caf872e099229e593cd9"],["/archives/2020/04/page/2/index.html","a2976c0fd70d67530b47f76733d34564"],["/archives/2020/04/page/3/index.html","992e4bc5be55a2746242d2559b66cda4"],["/archives/2020/04/page/4/index.html","3b514f6ada2c2ea0d9a6beee94d88b28"],["/archives/2020/04/page/5/index.html","f35a83954c10613e885c3e9c227b2506"],["/archives/2020/04/page/6/index.html","00c1c0562b5b8ce9eca60ca96ff69a11"],["/archives/2020/04/page/7/index.html","af58338095c583e8f1e323766efd0b98"],["/archives/2020/04/page/8/index.html","759afafac404ca7f99fc67853971b648"],["/archives/2020/05/index.html","faa60462cf50a7e1eb1504a2e44eb682"],["/archives/2020/05/page/2/index.html","18b713809ac385c1d7632f36e77addb8"],["/archives/2020/05/page/3/index.html","c11dc9f72795eb8ea99a81c669a16a32"],["/archives/2020/05/page/4/index.html","20aca0c8364fc83549c76c58c2ba4e78"],["/archives/2020/05/page/5/index.html","bf38eb259497cc6adf356da53c43a1a9"],["/archives/2020/06/index.html","e4c8767f0795669f796aa6297442e81f"],["/archives/2020/06/page/2/index.html","bd483b5caf20b6126b3f6d9991b7696f"],["/archives/2020/08/index.html","52c00e110c70d2cb7d809ad4f0aea350"],["/archives/2020/09/index.html","1f54150ee87d2726476292b09a96fd07"],["/archives/2020/10/index.html","d4c4e0ad004b9321d38e41bbcc2713d1"],["/archives/2020/11/index.html","b37b07bf89b345bba43fd20b1e081e34"],["/archives/2020/12/index.html","51e1a30992e881e7181b2da956279ddf"],["/archives/2020/index.html","1ab3ae8484cd49e96350c1866dec134b"],["/archives/2020/page/10/index.html","2ef9f85cab47210d6bfb9e42a377230d"],["/archives/2020/page/11/index.html","173d8d88d48840d895c7a73edd3687e6"],["/archives/2020/page/12/index.html","f728c0329d09da6a6739c01951b2891a"],["/archives/2020/page/13/index.html","da3639048cd1db28effc82216f0bde42"],["/archives/2020/page/14/index.html","4d6ce47f521161f484ed7d193e9dcd56"],["/archives/2020/page/15/index.html","762e68445102e73ffa18c438324b61f4"],["/archives/2020/page/2/index.html","e20a67b43474e47541d153432155b898"],["/archives/2020/page/3/index.html","814dc366bb84bdc09e5ec926be3ecbdf"],["/archives/2020/page/4/index.html","5fd5d9a7ca1a31d282a819a65c7d6a62"],["/archives/2020/page/5/index.html","f70ecedb53b4dd30fb40cf153f726a45"],["/archives/2020/page/6/index.html","e990e4811cf9ba2023e44e46b903fcef"],["/archives/2020/page/7/index.html","d1305e5c7f7de59a9d717635b7065d86"],["/archives/2020/page/8/index.html","2702fa08e8c6384e1b3615f9ebecbae7"],["/archives/2020/page/9/index.html","dce87834596e8607732ef65555c5d385"],["/archives/2021/03/index.html","22f52e6c9df097e26c1c1a14cc1df9a3"],["/archives/2021/04/index.html","53fe0e8fe439194cd8b4c28c656e0cc9"],["/archives/2021/05/index.html","e264051b57c3f3c1e5059cbc1a2f6dd8"],["/archives/2021/06/index.html","d5fef7415a089eb6a62a8ddeab0c2dfe"],["/archives/2021/07/index.html","60f951d3e76ea2acbee119240d622089"],["/archives/2021/08/index.html","056588d0b92867b3d747da8179ec3acc"],["/archives/2021/09/index.html","9e3f57af5004880800c7dd9c2200ad2a"],["/archives/2021/11/index.html","68ccb46785a8800731b0d9f2adf2e45d"],["/archives/2021/12/index.html","5cc3af96157e89c466d122501b9ccd66"],["/archives/2021/index.html","53ff7bb95454a587781effa6f06d0049"],["/archives/2021/page/2/index.html","1204e7dacbfa5df989e180dc30b9640c"],["/archives/2021/page/3/index.html","86e7678f957c02c41d87d4d764ee904a"],["/archives/2022/03/index.html","4c528a99b5e25fa95cf0d131f8344939"],["/archives/2022/04/index.html","a1240bf98e90cd6e9deb822b2dfd43fb"],["/archives/2022/05/index.html","c7915dfea8dcaaa9171b56f2ca1bbc56"],["/archives/2022/06/index.html","1d86c4de9c4021fd0bb3856b541a7f31"],["/archives/2022/07/index.html","59753373efdc9250e199b4d11fd433c3"],["/archives/2022/08/index.html","cdaf96d037f4060b967f1663d1c79ba4"],["/archives/2022/09/index.html","0b0cf29129defc3e2f38cfd4abcacd9c"],["/archives/2022/10/index.html","709725073c7628bd1895e58a69c1723a"],["/archives/2022/11/index.html","362c239f8c3f2fb268d17f473da7d839"],["/archives/2022/12/index.html","7a1405a9e60b02e2a8866264dae97b95"],["/archives/2022/index.html","addc42763729b46ef9c3c02a3ec45ce1"],["/archives/2022/page/2/index.html","a901011dd64c4e3a0c7d05d891ab4468"],["/archives/2023/02/index.html","decc9a1ecc32fff453e1ff0bfe0c58f2"],["/archives/2023/index.html","65d7f0e5d1a1c00914645e771adf0fa5"],["/archives/index.html","bbbc1b2570fde65acdc15fd1e6d975c7"],["/archives/page/10/index.html","ea790f1f8fcf935bde99470b71e1856c"],["/archives/page/11/index.html","8d64fa696a1dd74f63fc4d756e8c97b9"],["/archives/page/12/index.html","3b147f6e9f87fea12e2e88279a9bf3ea"],["/archives/page/13/index.html","e4e731083ea2bdaeab33e4d3462d4005"],["/archives/page/14/index.html","fd0735302f56e292d463186fc65ebd19"],["/archives/page/15/index.html","7ea1328c8c5fe4dbed5e4d176cf9c5c7"],["/archives/page/16/index.html","846f103d31002ae1190d299f6830cb52"],["/archives/page/17/index.html","ed074727f2c709c71f4e9c756fa68086"],["/archives/page/18/index.html","60449526d3eea10c55a41e8f07ff03f7"],["/archives/page/19/index.html","d18565b9e2817bc3316041bf4e5f53f9"],["/archives/page/2/index.html","5ff27a0948b0b4243328c36434ae4dd3"],["/archives/page/3/index.html","308cac37040420547056711e875cd5cd"],["/archives/page/4/index.html","c12680b9499916c41f3c730d609bbc13"],["/archives/page/5/index.html","d45930da7cbcb75947d2c0c6620e3ab3"],["/archives/page/6/index.html","62a3e4719c26193f7ac5d55bd1b42d43"],["/archives/page/7/index.html","19866e3deb5b2e722c3c9e025c4366c2"],["/archives/page/8/index.html","6d9b7a55285876bb942756f241aedc28"],["/archives/page/9/index.html","2708195a3d775931325db24010ed9806"],["/bugly 上传dYSM文件小记/index.html","767a230f263a989f28b920d4e02929dc"],["/categories/Advanced-Swift/index.html","cd9164891910169e91728b713116e0aa"],["/categories/Advanced-Swift/page/2/index.html","a28409d74184ea2d68864d8cc54836f7"],["/categories/App-Architecture/index.html","4f489dd3f8669a692623411987ff69cd"],["/categories/Array/index.html","16862d4315a9f06aa13898cb92874809"],["/categories/CocoaPods/index.html","398de2ef44229ab98d32541eea7053b4"],["/categories/Codable-protocol/index.html","6ee1b26c453b5e5ba523588e7adbfe16"],["/categories/Combine-framework/index.html","ad5d5c95772f6cd6049836f26a98f953"],["/categories/Combine/index.html","1affa6cd916816128e89c723b9871387"],["/categories/Docker/go/MySQL/index.html","d70f792f19a5b9d0c1ac48b01ade3b42"],["/categories/Docker/go/index.html","c16366449007dcce654363847ab62dcd"],["/categories/Docker/index.html","564d0ba73b7bee2aa62e893a632e3f4d"],["/categories/GRDB/index.html","f933c4455c3ea07c62e8d3d4906cbe62"],["/categories/Go-入门篇/index.html","6053405be9f6d025075bfe7db86f4226"],["/categories/Grand-Central-Dispatch/index.html","47b4ac0629ac2916edb81567fb64a9bf"],["/categories/Homebrew/index.html","45bc4c209391aad7c5117180f1f1312e"],["/categories/Linux/index.html","359875b6f98039734daf47774d51b4f1"],["/categories/MySQL/index.html","260b3e82dff2f4de4d1a3d9a8fca5cd3"],["/categories/Promises/index.html","ca96a456b6a92410f36c807f935a610c"],["/categories/Protobuf/index.html","c37297aa4ecd871a3e1bbcf730e6e236"],["/categories/Result-Type/index.html","afa05f66ba8bcab269b414801b25c0d2"],["/categories/RxSwift/index.html","4a9943dc9e2fe45133776fc9f6c2cdcd"],["/categories/Server/index.html","e9180d277b44326feb9a36f7bfd2a4a3"],["/categories/Sqlite/index.html","320ead08a4d301a7317f0bf6c5226f1a"],["/categories/Swift-Apprentice/index.html","2d8a0d82b96f7bd19fb78f4972d18d68"],["/categories/Swift-Apprentice/page/2/index.html","3779b36dc3770927bdb02240b1c73e80"],["/categories/Swift-Apprentice/page/3/index.html","289515556e4993defdfb184490ee5d23"],["/categories/Swift-源码阅读/index.html","892e0bc10412f9f698f49e15bec52eb9"],["/categories/Swift/index.html","f6fccc104104e1d65abd595e04efb12c"],["/categories/Swift/page/10/index.html","2fc5a51b9bf2c06268b103ec02c9a236"],["/categories/Swift/page/11/index.html","b54beafa01f0c0b9ab522011d37f3dab"],["/categories/Swift/page/12/index.html","6a7c8a700a095625124b9c97b62a9231"],["/categories/Swift/page/13/index.html","8b2347d86b2afd2f11c078b8c0cf94c9"],["/categories/Swift/page/14/index.html","5adc10e6c15ecbab48d4e7178c947b78"],["/categories/Swift/page/2/index.html","11593e200b5013dc8ec132eaafc5eda7"],["/categories/Swift/page/3/index.html","ef718edafe94ce77b8921caac824f08e"],["/categories/Swift/page/4/index.html","232be8c87fe2a66710a5abd7311210d9"],["/categories/Swift/page/5/index.html","11f7a1006c054e991967e5fc4cc2ee0e"],["/categories/Swift/page/6/index.html","b99a14b2cbacb402ec7f518537c5e657"],["/categories/Swift/page/7/index.html","13bcbcd15defe59861e2dfee0f1bfe27"],["/categories/Swift/page/8/index.html","dd07d811ae7473ad97664411cfb16ac7"],["/categories/Swift/page/9/index.html","8218205e2c8ecf2a5ef34b7d07c713e3"],["/categories/Swift5-2/index.html","73979dcaec5686b4da82e857829e8388"],["/categories/SwiftLint/index.html","339d85165e33ffc48177e5dce9a2eb1a"],["/categories/SwiftUI/index.html","1847361bf4b422f64c0707746f863c6b"],["/categories/UICollectionView/index.html","5169a7d02e19df4a2169089f2c7759e7"],["/categories/UIImagePickerController/index.html","8eebdc8a6216db5332eb7e209df44e02"],["/categories/UIKit/index.html","90dc97aabf377d018a7db5f4e063bba5"],["/categories/UIKit/page/2/index.html","af9f2c7f2d147d6db32e640ce89d623d"],["/categories/UIKit/page/3/index.html","638c93d7c00e001d61d554dac28bdaf9"],["/categories/UIKit/page/4/index.html","ec619c9075360fcdde2a681ff06e13f2"],["/categories/UIKit/page/5/index.html","494d8d3dd98f7c36ae6b5ad87f817a4d"],["/categories/UITableView/index.html","b326367cc24013bc8163edb5845a1a68"],["/categories/Ubuntu18-04/index.html","0b312bd014da4b3c57dacca2ff369483"],["/categories/Ubuntu软件源/index.html","e17144f9596407d2da7fbc87651629a9"],["/categories/Uniquely-identifying-views/index.html","02ed49d06d70efdd8ce51c37f5ed8752"],["/categories/VIPER/index.html","10bd548b6ff194da5d54660bad2917f6"],["/categories/Vapor-4-0/index.html","3a1ab535215d332f674429aa08ba7fe0"],["/categories/Vapor4-0/index.html","f6dd3aa7ef50481a5e44de576cd482a7"],["/categories/Vim/index.html","3b12512791085966d7c0ffa04ed9ad8b"],["/categories/WKWebView/index.html","246fb97fdba84cfe681895092abcf87b"],["/categories/Xcode/index.html","ce6710cd279828ce053361c33229202c"],["/categories/appleOS-Networking/index.html","b16cb6436e979b3d96ed325e4dad21ef"],["/categories/bugly/index.html","6fa8b190f596a5240f1e0f5bb29e2a13"],["/categories/enum/index.html","3de0fa5e66507ce17b8839483ba1d1e6"],["/categories/git/index.html","1951a93baa90e00df48d0e4b431f130f"],["/categories/go/MySQL/index.html","44e4b57f058600a85fa782245fc2bfd2"],["/categories/go/index.html","265dddd01a752b32d0d94a4b2c163e72"],["/categories/go/interface/index.html","a5df30e8ffbd2a457f20d46cf3a8c433"],["/categories/hexo/index.html","c3f725611d1c425600adcce1b49735b7"],["/categories/iCloud/index.html","cc0a56bfcb058088a5d0e175966db907"],["/categories/iOS/index.html","23e56992b0189ec0216b674df2699c40"],["/categories/iOS/page/10/index.html","98d5d3dc7ad6d30b2887002a9fcb9e25"],["/categories/iOS/page/11/index.html","35e415f2bb92a5c421b685edbf9c6eac"],["/categories/iOS/page/12/index.html","9c9e9d63fcb19278af61cd578661d27b"],["/categories/iOS/page/13/index.html","4adbbbae1abfae536d2ff57cfbea1247"],["/categories/iOS/page/14/index.html","b647fd2f413a31858d3aabc2f93448d6"],["/categories/iOS/page/2/index.html","9c21a7c2e31d67dc87eb25b40cb3a749"],["/categories/iOS/page/3/index.html","a139a178af995bc93fca3e5bf3197e5a"],["/categories/iOS/page/4/index.html","fc13b62d6a834e391b94bb0e96dbc3c0"],["/categories/iOS/page/5/index.html","b4874acd3756da1dcf3c74702443d71a"],["/categories/iOS/page/6/index.html","a702cff027971a635d6e8b98904d2e22"],["/categories/iOS/page/7/index.html","ff6cde3ed9899c94e752531fecf9b886"],["/categories/iOS/page/8/index.html","be6f12e456bca89973b25180c4694676"],["/categories/iOS/page/9/index.html","ac089b09aa1e35b0d573d293b040f6af"],["/categories/iOS/面试/index.html","219edb2fcc66362368e2ec4d0b273dc4"],["/categories/iOS面试题/index.html","5aae6b236b23e5288e10608a87476fbe"],["/categories/index.html","e36a089d1d686ac326d47c8d941e4973"],["/categories/random/index.html","2914d54764c752fb9039159c8d31bfb3"],["/categories/三方类库/index.html","bddc8f093558a72b6cb408d0570872c5"],["/categories/函数式编程/index.html","91e606bd8ebad44bb7fce3169d3ee990"],["/categories/子类化样式/index.html","7f7bde3c9ff9da19f759eb2af8ad8490"],["/categories/小程序/CSS/index.html","8cd05bf07f5be6194cdc65a1419dd6fb"],["/categories/小程序/index.html","88cea2a2a83970154b144c7ad6facf25"],["/categories/开发技巧/index.html","6fc610abc62fafdbfe6d653a884c64f6"],["/categories/开发记录/index.html","8f138dc4a778d63e716e15cfc73490c8"],["/categories/数据库/index.html","d30a398d5815228b5439cf6471b994d9"],["/categories/架构设计/index.html","127a5dab92c11499559a045fa9c1d312"],["/categories/测试/index.html","e3f0e95b30f13322f7899b517d158034"],["/categories/用户体验/index.html","62e8907bced0e9608dbf95f4937bd2e9"],["/categories/用户协议与隐私政策/index.html","0e0563141cbc18d64226fd74d9414bae"],["/categories/组件化/SDK/index.html","e754c7e54494715d981b47e27cf49190"],["/categories/组件化/index.html","7dea5e9b1d3aa38ec913074e9ad6c270"],["/categories/组件化/模块化/index.html","f2e40a6d6a18af0a08d14732565b5a02"],["/categories/设计模式/index.html","67b645cce600dbb3f46245f7d50981eb"],["/categories/设计模式/page/2/index.html","023aac61203288f9bde8a2f72d548e26"],["/categories/设计模式/page/3/index.html","7c524e7b09c9c653fe028f834a25ade7"],["/categories/逆向/index.html","bccbd15b7f6f29be9e15993025f82e62"],["/css/main.css","7a1b353790428250e08200bb6a9848af"],["/go moudle 导入本地包/index.html","0706c69f45c83f4fa3c92fde0d41a752"],["/go 库专题(一)：gin/index.html","21bde0c390f6299f1dfcfb85a0bd34e9"],["/go 每日一问/index.html","208b0092cb19400f6e491673dda51efb"],["/go 项目实战：gorm 数据库框架/index.html","aa62d31a7b3585e23bb6f019c7d29faa"],["/go 项目实战：zap 日志库/index.html","53099dec22ca8fd409d0098c8781ef1b"],["/goland 学习笔记/index.html","104ffdae396b0b5859c080fdf8f72258"],["/hexo部署失败/index.html","5278f103f858a45015de2be7ccbea860"],["/iOS 15 适配/index.html","dc1a5e6b086e7ec56c0945d9fb41f81c"],["/iOS VIPER架构深入实践/index.html","21474f561bb2953cb55c44f80998c3a7"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","36c4a8e241186eae1ff732c5e2179004"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","4ffb04fb2f1030271a3b106ca4fb475a"],["/iOS 自定义视图，输入表单和错误提示/index.html","db0c77c9e8f3a10140f2f8151d689ec4"],["/iOS如何使用iCloud文档？/index.html","3f6b11701d470ba50b36851336597735"],["/iOS子类化样式/index.html","38f112f0204439d47c375187325033a4"],["/iOS开发记录<一>/index.html","f8c959587a5998bfc44a783aa69543c7"],["/iOS自动化布局编程/index.html","0bb576216a4a36cf5010237479526028"],["/iOS自定义转场(By Swift)/index.html","f6c9198e808b3d8de7f92533df1c26ef"],["/iOS项目架构：使用VIPER/index.html","4538d139074ad2b0d0d8bbffa223fd2a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e547cc8cc894b53ff38e0977a93f8997"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","b9f286fd44a72851456dc1c6f92a6677"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","7e74ded0617ab103ea56eed2ef724f6e"],["/page/10/index.html","e2094ff4b071f53be112aa8bcbc83a2d"],["/page/11/index.html","acd6c279fa60e88501e8088fd225febb"],["/page/12/index.html","300f1b7e456aab5dc91ab2b5b794ff9a"],["/page/13/index.html","ca2778674965524af2306c9fc4c5bd06"],["/page/14/index.html","ec1e35bc165c3e9c075d6097b41109ed"],["/page/15/index.html","a0764d810a8c1b011f19f1be1f5e196a"],["/page/16/index.html","584fc8848c1ba928164fc84e36653a22"],["/page/17/index.html","ab4a0a0e9ca8001457c3225a6027a239"],["/page/18/index.html","27abe164f324feae55b52eb0f36e2116"],["/page/19/index.html","f26194a5f04a4655f4fb6d08da3baffc"],["/page/2/index.html","0f30f6c61439ec497df76277c9af6d48"],["/page/3/index.html","9935e60509b6043e166af8b3b82440d8"],["/page/4/index.html","16320beafb7c26b5945ca640987f3624"],["/page/5/index.html","b3146eee26588854da72d74db947b364"],["/page/6/index.html","8621b699578a2e16e11cd641c4b33443"],["/page/7/index.html","a583cd2c87e3ff70d1dd0c39b5369879"],["/page/8/index.html","6fa17fc9928fda420eaa60459497c9a3"],["/page/9/index.html","2191010205b7b593206969ae6ce6aa3f"],["/schedule/index.html","5ae1dbf531b6fe7553feb28c2c497b4d"],["/storyAppPrivacy/index.html","f4d52cab08a86818adc36355a81a5d1b"],["/sw-register.js","5b5f8bfd421c71c369dcaa771c2c3e2b"],["/swift 专题：函数/index.html","34928eb96799e0f975398cbcf63627da"],["/swift 专题：闭包/index.html","fb43473cfcf5f2b6b2511dbc766809bf"],["/tags/Advanced-Classes/index.html","94200bcd10640921911d3d6c1f97556b"],["/tags/Advanced-Swift/index.html","66478d6a536062c9a30538de4000582f"],["/tags/Advanced-Swift/page/2/index.html","bace6b7cc31d664cf38b368ebf8dbdd3"],["/tags/App-Architecture/index.html","ede09785fc8371ea8a307c651d0a93ec"],["/tags/Array/index.html","b02ce241a998d8cddd951eadd5cc0b34"],["/tags/Arrays-Dictionaries-Sets/index.html","51be2f3977b357e5c168e12db7445464"],["/tags/Authentication/index.html","d5e935cdbfa26e6db39323ffcc488d27"],["/tags/Build-in-Collections/index.html","a8612cc1f046b36bd795da502b5fa26a"],["/tags/Building-Your-Own-Types/index.html","1bb1f1d42fed31ef18f86f7afc9df707"],["/tags/CMS/index.html","963a18be50e18682198ae77727f4e25f"],["/tags/CSS/index.html","fdf347ee204f05faf9e4d7430dbfc7c0"],["/tags/Classes/index.html","122f284c1305455de4cd1fa0ae2e7059"],["/tags/CocoaPods/index.html","da69a87d5292a7e253e4b2dd4f18cac3"],["/tags/Codable-protocol/index.html","27b295d91bd83079a2bd4249c2c392b3"],["/tags/Collection-Iteration-with-Closures/index.html","8ae5f8a8e41f25f413608339c249d82f"],["/tags/Collection-Protocols/index.html","3e5e9dfcdbc9a195005f63bdc7f34abf"],["/tags/Collection-Types/index.html","a9472e3998a35ca0a10527489bf4fa98"],["/tags/Collection/index.html","c5f14f369db50eb757ffe296363e50f0"],["/tags/Collections/index.html","e3a084e98833f05e6abf6fcd88979495"],["/tags/Combine-framework/index.html","d9e8f57135d5a224b9eea2121cd1718b"],["/tags/Combine/index.html","4e15da14401de6672384c8d022668e7e"],["/tags/Dependency-Injection/index.html","03eb41759a2abc3b1b7e044ece2b7632"],["/tags/Docker/index.html","0069780bdab6e01f75573463b847213d"],["/tags/Encoding-Decoding-Types/index.html","b6624f5953d953da886cc8ad01df3c94"],["/tags/Encoding-and-Decoding/index.html","2563dd481c8783c0c5ce1983b3b9bfd4"],["/tags/Enumerations/index.html","6dcf31fd7e2afbf2de0a5fa25335d3b3"],["/tags/Enums/index.html","fbd8e616142e2ce4beb40b7064087a65"],["/tags/Error-Handling/index.html","e54baf88b0747ef8a7b7614ca21e662d"],["/tags/Functions/index.html","a097e7f0e953cb0fc2e47a301523baff"],["/tags/GRDB/index.html","7b083206a4bbf4b7b34692562b885fb2"],["/tags/Generics/index.html","d22e999436f85116b3be3879b60b3b1f"],["/tags/Go/index.html","08c4251b0c3ca7caab64d250436db879"],["/tags/Grand-Central-Dispatch/index.html","c7e02d199300d52a784e280cd912b9ad"],["/tags/Hello-Vapor/index.html","a9053ef0cecf1237e518e030b5acb1e2"],["/tags/Homebrew/index.html","7fe0a70f9505e6be50c0e4582fd2fba5"],["/tags/Interoperability/index.html","0adebe85ea75c74794b109981a71ed2a"],["/tags/Introduction/index.html","f3efd597869b03fd3f93e427d0696864"],["/tags/Leaf/index.html","9f53c9aed231cc02945e10afde0a79ba"],["/tags/Linux/index.html","eb2f53df40ecd0d7b3915f315c5dd70a"],["/tags/MAC/index.html","113037b12835f7c7934e7c1c63305572"],["/tags/Methods/index.html","89136e42d3e36928d1c1de420fe762d8"],["/tags/Modules-And-Hooks/index.html","afefbb83d267d510123c208b2b4ec5b6"],["/tags/MySQL/index.html","12f86b945619c7b9ef38e04dbf75a827"],["/tags/Optionals/index.html","a92b79d6a5dc874fb11e0d36bed78db3"],["/tags/Promises/index.html","a73e6b3bcf2be2094bb9f3681af3ed84"],["/tags/Properties/index.html","c28e5102f2863227fdabb02f00beb60b"],["/tags/Protobuf/index.html","2fb908b31a5457aa7ec8b35e8b83cddc"],["/tags/Protocols/index.html","fb731a5751f588870f437e63086bed36"],["/tags/Result-Type/index.html","bab195eaba790348c366fafe519eb62f"],["/tags/RxSwift/index.html","6c4a3f954a3b47385c951603b48f36f6"],["/tags/Server/index.html","11c9d7e165ae20702e8b9f28e4f17237"],["/tags/Session/index.html","e13a8fc3a344ce738614b9b58f125744"],["/tags/Sqlite/index.html","ce8d4cd1e9d42ba9826464fbb84ae6a1"],["/tags/Strings/index.html","2bb7d8bd8182dfc634f157571e964cf0"],["/tags/Structs-and-Classes/index.html","13530a7cb6e799b33e9b01f781087c5c"],["/tags/Structures/index.html","4579b7132506095d7b784ea6f6d514b8"],["/tags/Swift-5-0/index.html","1d5052968a7ffec721de7b829e8db8e3"],["/tags/Swift-5-0/page/2/index.html","f26821e7610b7b61b51b4948ec8ba925"],["/tags/Swift-5-0/page/3/index.html","ec5543d604886f5568bd875120061eb9"],["/tags/Swift-5-0/page/4/index.html","029ab69440e411fd328c4e4238e14b33"],["/tags/Swift-5-0/page/5/index.html","3f8644abaecda9e6fb68eb14065de1b0"],["/tags/Swift-Apprentice/index.html","cd8e2ddfb1955e64615c185f9de56e9b"],["/tags/Swift-Apprentice/page/2/index.html","e57df6a9e7af912792eca5fcd5a64123"],["/tags/Swift-Apprentice/page/3/index.html","a325148a5e34d36f049acac40f3ae18f"],["/tags/Swift-Package-Manager/index.html","df0458d9346ea7561441dcbf5c84a671"],["/tags/Swift-源码阅读/index.html","34ee87f446d767b8635ad8444a80fa7b"],["/tags/Swift/index.html","917d5026185eb8d3d1be7cb5ce422090"],["/tags/Swift/page/10/index.html","38ea5535a8295a63a9111ac081cb27d5"],["/tags/Swift/page/11/index.html","7874fe365665e8a92d040460b503a018"],["/tags/Swift/page/12/index.html","cf53ade5d8ab55c472d7e31d0c0498da"],["/tags/Swift/page/13/index.html","509b56b62b833277aba4e20eb5512c71"],["/tags/Swift/page/14/index.html","7f77d949de075d57ecef97d93c79b43b"],["/tags/Swift/page/2/index.html","65c0b88498dc1cdc100538ad00f13549"],["/tags/Swift/page/3/index.html","b2c7f26008283ea36eed6c8c4a568a25"],["/tags/Swift/page/4/index.html","cd3fca35621f84995c1a9756447b254a"],["/tags/Swift/page/5/index.html","440956e195c7558fec1aeea32fd2ef70"],["/tags/Swift/page/6/index.html","ce92842da8544131c6a368fd207297cc"],["/tags/Swift/page/7/index.html","65be08638af5d161c38d1bb93e5ef57b"],["/tags/Swift/page/8/index.html","20c2804584ed54140667a201bbd950c0"],["/tags/Swift/page/9/index.html","01cd510a104a0955d145cc39fcf626ca"],["/tags/SwiftLint/index.html","aa4475db13ea16d33b35b9966e7ec0fd"],["/tags/SwiftUI/index.html","5097c546c038a7e2538ac5c53965c87b"],["/tags/UICollectionView/index.html","26e6888ea8034f1c7bf8c92fa2998e27"],["/tags/UIColor/index.html","2774e247543cfb1f478d034a679eb5c0"],["/tags/UIImagePickerController/index.html","a2111a7968f2cbd87348d7765eb873e6"],["/tags/UIKit/index.html","f8708094a2fe9b8f00b3ed51b741d0b8"],["/tags/UIKit/page/2/index.html","418a1296f7a9b3eb53065aff8a21dc4b"],["/tags/UIKit/page/3/index.html","b0735d55596af6efc03eaf342f80098e"],["/tags/UIKit/page/4/index.html","363a1e95554def1459ea01650adacd50"],["/tags/UIKit/page/5/index.html","c1e472efcb00728891ce0bb2ef725bb3"],["/tags/UITableView/index.html","ff60a96abde16d6b978e798abb78e3de"],["/tags/Ubuntu/index.html","eff7ad4f1d7e14a5e7e0e63741de563e"],["/tags/Uniquely-identifying-views/index.html","c000eba5eab12d62c75a59ab4a721d5f"],["/tags/VIPER/index.html","c35ca988ff6cfbaa7fe36da66d24ce2c"],["/tags/VMware/index.html","e33b39aef77310e05d2da379fd87bbf7"],["/tags/Vapor-4-0/index.html","f4242b66022f19c611b87613d11a5e20"],["/tags/Vapor-初探/index.html","abca9a9e86b4e3e11b0d56d27d294599"],["/tags/Vim/index.html","6a1b2f3f9042b3bd0da37854e2b5a255"],["/tags/WKWebView/index.html","15f3ae495281923428f25cb89c21b17d"],["/tags/Xcode/index.html","90a0d921a0dd44625a431da986125992"],["/tags/appleOS-Networking/index.html","35e139163a9379c47e23ce37d6b16fb6"],["/tags/bugly/index.html","41427e0e1ba5a15554f6be7073f38c1a"],["/tags/enum/index.html","51bf7b83d210d51dc4d0380898000d57"],["/tags/gin/index.html","ecf7986801229499c868f13230cbc0a7"],["/tags/git/index.html","c384bea2d0994ed7c53e320e1cc4cfe1"],["/tags/hexo/index.html","316b8a13b58f47f80ae6d0eac4286a37"],["/tags/iCloud/index.html","a6175d67c34a14e51fab0b5f3ed527a1"],["/tags/iOS/index.html","a46026f9714a7fe029a3153f465a8cee"],["/tags/iOS/page/10/index.html","0fdab7984ee8386799763428ded9cbb9"],["/tags/iOS/page/11/index.html","4d4a3c38e0807393d2c2a2a3c9feee97"],["/tags/iOS/page/12/index.html","82f6e75bd4558f6ec33977d8a27a5f31"],["/tags/iOS/page/13/index.html","e04c6b1bfdcf2c4096f1aa67176923d1"],["/tags/iOS/page/14/index.html","3021ed98623f2e2a471597743146df62"],["/tags/iOS/page/2/index.html","1050e28260ba446b4341dd420f06fabc"],["/tags/iOS/page/3/index.html","7969290b724ae78b3e807b9a111b23da"],["/tags/iOS/page/4/index.html","2b699922b6ce8c58485c5df0fa748157"],["/tags/iOS/page/5/index.html","7a7817da75be165baac48d343d020f42"],["/tags/iOS/page/6/index.html","d8983ec1bd5480f989cd7b5afa85b5c1"],["/tags/iOS/page/7/index.html","46c9962a31133e54e7d4ed42594a8ab2"],["/tags/iOS/page/8/index.html","42b5051f1815864fd626540af649ff30"],["/tags/iOS/page/9/index.html","f4eaa9e4594dbfda3edb571763e29b2a"],["/tags/iOS面试题/index.html","e4755dd31e8549fb1f4d349cb482e48f"],["/tags/index.html","83a9c72040c6e472907e10998f7f3728"],["/tags/interface/index.html","f1849aed25f6dc355c9eb874e51cba75"],["/tags/non-optional/index.html","8a88cb16877154960eda4d519bbc5ebb"],["/tags/package/index.html","f961473c75cce58fd7f70f886ac8e279"],["/tags/random/index.html","07a323548121264847d4ce046aef6c15"],["/tags/transition/index.html","d3fcf6816f3910642339c374251dff20"],["/tags/三方类库/index.html","abff81d6050174595c8710c293a1efeb"],["/tags/依赖注入设计模式/index.html","5edb6f8ba30e2aed708853bc32829607"],["/tags/值类型和值语义/index.html","3e766445f92e8ddf625fe674bbf26c4f"],["/tags/内存管理/index.html","a40efd3be96a7200b94dee973e35a261"],["/tags/冒烟测试与回归测试/index.html","9900cfa5df2486fd8f7f899c80fe9a06"],["/tags/函数式编程/index.html","4e87c47a5f8e47649e3094f2b8d4f1ca"],["/tags/创建博客数据库/index.html","ea1ba1b19cdd46461b4dde6f7c708ded"],["/tags/初始化模式/index.html","416dc733af1bdcfcdf2f07588901b8a5"],["/tags/单例模式/index.html","09594f8d1d1cfc255796da7d730f6403"],["/tags/原型设计模式/index.html","9de2b2f8a3a4b42c351693474da6734c"],["/tags/命令设计模式/index.html","2a0c6b71a7795e47a869b82cc951d6ee"],["/tags/基本控制流/index.html","2435c10c6f503cc3f209513fd0af08b5"],["/tags/基础语法/index.html","9ff0875ba54bd0f8d119404a9d5ad6c6"],["/tags/外观设计模式/index.html","fbb975444d7e04a7f783cd4d39e9e8ab"],["/tags/委托设计模式/index.html","b9cba4398d9cf2c73af1d095fd2d63b0"],["/tags/子类化样式/index.html","09fdee47f38ff7ef5f88d0151b01a491"],["/tags/对象池设计模式/index.html","e8974344d4ddd3f2acfff5c7d16e296e"],["/tags/小程序/index.html","6beec792655756c532412ddc8c15cd70"],["/tags/工厂方法设计模式/index.html","61092b9957a531444c6eb38682d20bad"],["/tags/工厂模式/index.html","74db3fa8421daa60f35677db92ec5c72"],["/tags/工厂设计模式/index.html","3a38e956e2adb7e7acf740e27ecc79d5"],["/tags/开发技巧/index.html","8f53e26ff78c98fe036cfe66c0bd2bbc"],["/tags/开发记录/index.html","1eac6603326c75462f4875303a8672ab"],["/tags/懒加载模式/index.html","dc8bbbdef759a7105752bffd7b3227f0"],["/tags/抽象工厂设计模式/index.html","e028bbfb009e96ec9035f18eacc6ef94"],["/tags/数据库/index.html","a22e437b5e3207371e478f7e3c9c735c"],["/tags/构造函数/index.html","1790943eb5077ea248f39f547cc7de31"],["/tags/架构设计/index.html","1e67d80604bc7a878ad53d5420b2a0ae"],["/tags/模块化/index.html","1e8b2817437769c30f98e3d49f751d4c"],["/tags/模式匹配/index.html","bd7d388828ad8eafe4f7222f30eafa00"],["/tags/环境搭建与验证/index.html","be4fea68e19cb83bc375e524de346aa3"],["/tags/生成器模式/index.html","abbe16017a260a324b9483fc5d0e2596"],["/tags/用户体验/index.html","915efb3ca71d818280ce90389a1a4389"],["/tags/用户协议与隐私政策/index.html","41e2ef4e63e074a987fff4f00168de95"],["/tags/类型与操作/index.html","b1c9f7124340e2d6c08bfa41c35ea458"],["/tags/组件化/index.html","4f6b61afcb2a59b247c84db82f99ffc3"],["/tags/自动化布局/index.html","6ac3df0e7b505c7eddf9fcc33c60174e"],["/tags/自定义UIView/index.html","176a08f518902a0ec0ee594d54636d6d"],["/tags/自定义转场/index.html","9e59c9d8df3bc4e367ecf8ba6d9e73fc"],["/tags/自适应布局/index.html","504a6750924601e51f8d0210d2a8f313"],["/tags/表达式、变量和常量/index.html","e27e9b13db5169a3035ed158180390f6"],["/tags/设计模式/index.html","6fe6be3a12cbb5d264abc7132fd7e91f"],["/tags/设计模式/page/2/index.html","ace1526ee1493510fc35ff2519043972"],["/tags/设计模式/page/3/index.html","676cbed4f964d223b8043690709daef0"],["/tags/访问控制和代码组织/index.html","98762f53deacfe6bd2e13af4548864f7"],["/tags/运算符，下标和键路径/index.html","d6f78e92114104c8e463150427d0e081"],["/tags/迭代器设计模式/index.html","ba98ccf75bf3182ffedacba6a1ce3f87"],["/tags/适配器设计模式/index.html","1369a7ef6059ac0811cd93e9b0f17d32"],["/tags/逆向/index.html","7ea4f2f044d881472c7e2b129dbb1dc0"],["/tags/错误处理/index.html","8559c236014e3dce57ecc1e0015ffc01"],["/tags/静态工厂方法/index.html","40e72b9d96966ef74b25f9ba22bd3c08"],["/tags/面向协议编程-OOP/index.html","6b241f7ca33cb54cebdcd13717813729"],["/tags/面试/index.html","dfda34ae5c1066916508e91e9aac616f"],["/tags/高级主题/index.html","23cb16a2f3085dc704b7f9b7447a2b5f"],["/tags/高级协议和泛型/index.html","c2f2f3ce42a95f46d676cf70c97f84b9"],["/tags/高级控制流/index.html","5950a5d138fb6772be3174846ee1add0"],["/xcode 常用的快捷键/index.html","8613d93cb70eaae9326f50cecbb9b729"],["/为iOS应用构建输入表单/index.html","6084f5351ea2d500a591f39f54fdd5b1"],["/产品开发的幕后花絮/index.html","1d8565317ecdcf38c35c0ba915f52d85"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a57e676b49df97b03ce71ff66708b30e"],["/冒烟测试与回归测试/index.html","7bbde90c4601a991851765dcbeed2d32"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","15a9f7498e2579dcbbd29260bbc4a75b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","df68cd23afca7a82c1e5c534b046319f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a3cdf9ee456c61a9dbbb6141400ec04f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7ddd03784b6cebc26327094543a05fb4"],["/在Swift中创建自定义集合/index.html","4e0562fc2a1e13c735b70144d9ff0326"],["/在Swift中处理非可选选项/index.html","a439aa7beaf8d42e7ac2b386772e2bcc"],["/在Swift中生成随机数/index.html","5c6527cc2c5cca1b47f972f497b3fd55"],["/在Swift中重构单例模式用法/index.html","dcaf9aa6110a18a9be8a0b921d8b73aa"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d0a76066d12b46e68d5d52891fd508a9"],["/如何为VIPER编写服务？/index.html","fbf2411aa8eccfd26703c704dda96b38"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5f944cc944a394786ee1ec6b66a91b4a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","991075b83bab3f868ad67aa99a5b3fa4"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","aee66298bbb78767d37cdff818cd2eb0"],["/如何使用VIPER构建SwiftUI Apps？/index.html","dee3540375fc97dd7b9926092fe0e79d"],["/小程序: [CSS] 布局小技巧/index.html","1a47a8c40d832f737b934cce1bb5a543"],["/掌握VIPER架构/index.html","e78ce3d6841ea6c230a85247fb0d6a52"],["/揭秘 WordPress Hook 系统/index.html","dfffaa0885668f039e6684ea8aed41be"],["/比较工厂设计模式/index.html","dec462b2a2a67b816d0164e848f588d0"],["/深入了解Swift中的Grand Central Dispatch/index.html","99b4bacd80a27fde427d9de608727d92"],["/深入研究Swift框架/index.html","ed0c84363f0c8cf51829478242f75618"],["/组件化插件化与模块化/index.html","85ac80e3e1814fea47d68f96a33d973e"],["/组件设计与SDK开发基本规范/index.html","d3e110149a5a90c0e466d79b0d8b4c90"],["/设计模式：单例模式/index.html","eb36896b7cb659c42976ae5822ea2a3e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","83e0a970efda0f979dfdc5361dac7738"],["/选择Swift而不是Objective-C的5个理由/index.html","d97537d2cb3dab05689a256bcd56522a"]];
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
