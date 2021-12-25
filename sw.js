/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ba0e7efd9de6d37e920062211b20e23d"],["/2020年iOS面试题总结(三)/index.html","bd56d5d52d6a649b9a12a79e1f04c7e2"],["/2020年iOS面试题总结(二)/index.html","95944df9adc09252f5e931513bfd7ad3"],["/Advanced Swift系列(一): Swift 简介/index.html","33053218d122a91651c8059f51962c2c"],["/Advanced Swift系列(七): Strings/index.html","e9c687dfe68f985a5e1c11b5749a3a77"],["/Advanced Swift系列(三):  Optionals/index.html","2278e2647730c639daff12b2a20fbc27"],["/Advanced Swift系列(九): Protocols/index.html","dbb36c5847ef564fa075315ad7bc64a4"],["/Advanced Swift系列(二): Build-in Collections/index.html","36dd48546032c885b3b9e23c840eb817"],["/Advanced Swift系列(五): Structs and Classes/index.html","a3db3b0def17cc7430d4d978b345174e"],["/Advanced Swift系列(八): Generics/index.html","96c7ef32fab4ba64c259c72026004ea1"],["/Advanced Swift系列(六):  Enums/index.html","35bf766ad0d3f4296e6f08ede321c3d2"],["/Advanced Swift系列(十): Collection Protocols/index.html","13c3f5b5667e850077fcb600b71d58a4"],["/Advanced Swift系列(十一): Error Handling/index.html","a6e6856415c6bb29bfdf522f987f581b"],["/Advanced Swift系列(十三): Interoperability/index.html","71d2056da960a3c4d70c9e54fecbcf51"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c177bc56a3800b83828dfd7ba0bb953a"],["/Advanced Swift系列(四):  Functions/index.html","bbc327ca3b0ec52166cf43d6feba64ec"],["/App Architecture系列(一):  简介/index.html","319dd9f9ff8fc7dccfc1638edea2e871"],["/CocoaPods 设定版本说明/index.html","5a3cc60837b478f74f2d1cf4a890bfdf"],["/Functional Swift 初探/index.html","13b26f5c7980a4c6e0fc52eee1c37334"],["/Git 使用小技巧/index.html","b372c6e28b9b51a19f5959d9bcb562b2"],["/Go Protobuf 初探/index.html","9bfa6ff01bceebdbdb96cac650dd683b"],["/Go mysql Tips/index.html","389c8c195333957e88205dc076633ca6"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","9164fde6a1be752c19d83609505114ee"],["/Go 入门篇：2、Go 实效编程/index.html","873efbce1a6a9f4e9d46739fd6951384"],["/Go 入门篇：3、Go 重要概念/index.html","6d0757126a4f3148bfc518b9a81a9df4"],["/Go 基本语法初探(一)/index.html","2733958498475b4370e69f137bfdc98d"],["/Linux VIM 命令及操作小结/index.html","904b8c6dc4aac82c10e3898d27bdfa94"],["/MySQL 基本操作/index.html","b3df7bcdf2aba4b06ac397a898b5db37"],["/MySQL-列类型和数据完整性/index.html","3c5523b4bf9b30339f91ad2ebaef9c83"],["/MySQL-数据库设计和查询语句/index.html","a5017a73c0c0dc025c8a3d6583960e37"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b7555f700f266190edc31de1862f239a"],["/NSCODER和SWIFT初始化/index.html","1b20e5639dba4a195a55a000a4c72d29"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","ecdeb126850087e7c9815a5d273266f5"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","5f0677a92742463197f697a3ead64c3e"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","491b20af0755f045fd60bd823efb96c7"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","2322e20527cca6344e062072f2978a5b"],["/Sqlite 使用Tips/index.html","63f67ccc6290fb5b1bbfa35bdf952b61"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","f9ce6d0f50c178bab267b5d6c65c27d7"],["/Swift 5使用UIImagePickerController拾取图像/index.html","80956b881bc069f67575782445348f5b"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","818d19101ff19fa2da65b8e2ada9a3f2"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","74f3b43c2af96f4af095f71228763f1d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","2858ef3a9474df3ca9f74dfa0265b842"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","73d3d5d88cc459589e8512a72a44e191"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","a385272493a29dae1f30e2aafa812aa3"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","9aad6b59acf074a3dd9eff8d146a0cf6"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8a03af5bf61d00743eae6a9a48e419bd"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d96158bb4bc6b354ad0e8b6c2964b242"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d8306db418ab7f19f7b06cba04d40eb4"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","2122efb451be86b9f4b7c5f25d37a04f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","e64984120bfd6d21715c87220a997ccc"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","eccd4b7d0b9f517dcfcc94b761a6463d"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","4640aee8e540e49c0838790d0bb804d1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2809e7ef36470914f07fd1ae12b88c5c"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","e8136fde7ed83d7fd6d18ff139a20b0b"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7421458437e7cfc3ecd16030ee8094a4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9fada2007ffed4e5a1af34e4aa283ab1"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","f82644d45533358dccb8206d26bb156c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","4adb9834302fd9c11d7367d34187bf30"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6b17f363279851af458b135b75a30aed"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","4d896227d0e6b22c6acb4131220490b3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","84e529e728624948f8fc2ddda67ab218"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9686dc60b449a75528147f07bd86aed1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","14639d0e1c58e641d9676329ef5cd35e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","638c2c4efc093997e40d7fc4c4c86b64"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","486a046097ede2f8fef454b506101126"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","e4ceca70b4bf87d71bb6fd1e1a9d59b7"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","57f02e82fc70f0519ff18147901a66ce"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","98b10f35ebb38dc50817f9d3b442ee55"],["/Swift CompactMap vs flatMap：差异说明/index.html","85d101307e7015ea3016fc6cd3efb37f"],["/Swift Grand Central Dispatch 深入实践/index.html","2223aab9a752e82b30ec7b6e49ef1183"],["/Swift Lazy属性初始化/index.html","bcc0bdedabad02930e984598da540ed6"],["/Swift Promises 初体验/index.html","c695380bc800421c8cb57537a4154cb4"],["/Swift Promises 探究/index.html","f4ed1bdbb7da7bad1c6382f8c766206a"],["/Swift UICollectionView使用指南/index.html","78a25ec7e70facd1d525de65b736ac35"],["/Swift URLSession && Combine framework/index.html","13e3d950727e04acf2dfda3d9712ee6e"],["/Swift tips/index.html","d080f0969e8747e709450522c7dad1d0"],["/Swift 三方库：GRDB 使用指北/index.html","3be8cf51cf6a52888913d42bf31ae0fd"],["/Swift 唯一识别的视图/index.html","b0b7d5fe6ae4d44815525602d50f20aa"],["/Swift 如何学习现代UIKit？/index.html","57b58732c90593711373bdd59d3b4471"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e673b32f2a29aa4fae3c240cfc442e42"],["/Swift 用 compactMap 替换 flatMap/index.html","57d88f36d235b92d424b33ac98423b77"],["/Swift 选择和播放视频/index.html","d9d6fcb6ea2f5fe2357108189bef500a"],["/SwiftUI 系列(一)：1、 简介/index.html","882956403e9feec62fa19c5706e76a5d"],["/Swift中UIColor最佳实践/index.html","bf6728aa31a497ac8a89eb0f02326c5c"],["/Swift中快速简单的工厂设计模式/index.html","df22dc4b742e92fcf2162e35978d1035"],["/Swift中构造函数与静态工厂方法的比较/index.html","61a90a13e9d68d44fa8b85dcc155f4d1"],["/Swift中的UITableView教程/index.html","2a27c47ece8348c0a9f63878326bdf56"],["/Swift中的懒加载模式/index.html","08995435b291a1a8b0d29e52ada39b6f"],["/Swift中的模块和挂钩/index.html","1412072de2bc4472d8542b5402bb08cb"],["/Swift使用布局锚点添加约束/index.html","b3613445ba07d6fe3c934d43951fda16"],["/Swift依赖注入设计模式/index.html","077bd9dcbd5308db1653aa327fb65aa1"],["/Swift关于Dependency Injection (DI)/index.html","7a0e9bbf413757f0d5e4d2a90675443b"],["/Swift初始化模式/index.html","b26ba7d6064c3b43780ca612fb479a95"],["/Swift单例模式/index.html","8dd524f5d7251a294bf5aafc1978ad7d"],["/Swift原型设计模式/index.html","8d462281f0bcfab9eef27839f59e1da2"],["/Swift命令设计模式/index.html","1e7ce64cbb26f2def227c4f36a6eca85"],["/Swift外观设计模式/index.html","536c18a1ebc1895c4af884119b956203"],["/Swift委托设计模式/index.html","2f1e4cdedad3301c526229c80d313b77"],["/Swift对象池设计模式/index.html","cb68785686cc23cd18f5faa968e2f2c2"],["/Swift工厂方法设计模式/index.html","68b79803b4676087adfccef5c6e23b04"],["/Swift带闭包的懒惰初始化/index.html","fc582524a71fb5662042cffa905eb5f4"],["/Swift抽象工厂设计模式/index.html","efcee6bfc8e7ca35f7bab621a4d1f6e8"],["/Swift掌握iOS自动布局锚点/index.html","c6e1f5eb428676b282f519a81b0364c3"],["/Swift支持旋转的自适应单元格/index.html","6b6bc9d249232749365373596456bb20"],["/Swift枚举值/index.html","29480ad9c1b98197a1c5989d2321a65b"],["/Swift生成器模式/index.html","c6e0685a41a04080a05f57d7b4057f20"],["/Swift结合Xib文件自定义UIView/index.html","757a4e45384c961e157bc3a4b756e51b"],["/Swift编写的20个iOS库(一)/index.html","6610d41cb3da54a458cc9bb962f2d19a"],["/Swift迭代器设计模式/index.html","7f8b7ffbc749ee32a7d7c70ce24d02d2"],["/Swift适配器设计模式/index.html","8c4f1de11ab320d13dccd328c8e86902"],["/Swift静态工厂设计模式/index.html","80d94398cb5460c07a99e331d6dd617f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b42c854f0c87f4dedbd736e451d4308d"],["/UICollectionView data source and delegates/index.html","7852b3f94eb9bae4d327ff608767a63a"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","da164094bf4b9e577071024253f13afd"],["/UIKit初始化模式/index.html","f086d09601b773039dfca404e5a4cf4a"],["/Ubuntu18.04替换国内源/index.html","95e897fc209ff559b8a6e40339aa28e9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3cad4a7eb29b757573d1310504f0ede2"],["/Vapor系列 (一) :  Vapor 初探/index.html","4dbfa5d79863e511d4f87639ad04ba2a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","6749a50e146d5a8a645341b5b2682cc8"],["/Vapor系列 (二) :  Hello Vapor！/index.html","3e361074c3edd84b8285c54a21bd75ef"],["/Vapor系列 (五) :  使用session进行authentication/index.html","fbb6c7e0f54ace47d6d34a350bd952b0"],["/Vapor系列 (四) :  创建博客数据库/index.html","e84028441b945a2fc46934494641730a"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8a36c8d2edf854db5705c9f81faa8413"],["/WKWebView与Native交互注意事项/index.html","f9047eaf62b277c8949fd14f46abbd99"],["/Xcode扩展/index.html","d624904377d19715654434f7de6e0b21"],["/about/index.html","bb60a039775d79b4996ff8ae73d6aebc"],["/appleOS的Networking示例/index.html","f8d699dd30cfd82272e7d027ddfc35af"],["/archives/2020/03/index.html","df6eacf1a2c74d697e1d6b76560c74ac"],["/archives/2020/04/index.html","cf03e5673eb25bc5505e69825658f67e"],["/archives/2020/04/page/2/index.html","887911919db9b7cde273f839856f802d"],["/archives/2020/04/page/3/index.html","2772191f0ff9810b1997c51e38974b14"],["/archives/2020/04/page/4/index.html","95a726ce1060c7edd3ff11b1d5d7db05"],["/archives/2020/04/page/5/index.html","0d5e2154f8437ed18424885055b4386d"],["/archives/2020/04/page/6/index.html","f9a4e833033c24d74be62de4bf74d51d"],["/archives/2020/04/page/7/index.html","ebeba2a3ff188729878e84ec49048e14"],["/archives/2020/04/page/8/index.html","60e698cb5867edf3b440aef2b5229285"],["/archives/2020/05/index.html","89ab03b8beed5c6a43e38c4ca8915f52"],["/archives/2020/05/page/2/index.html","f167a5ce87e21c635b6e4f95758f29f5"],["/archives/2020/05/page/3/index.html","9a79366185787879d2de125bdaf06cff"],["/archives/2020/05/page/4/index.html","6c1d8dc67ea8e84c04b11e5592797d48"],["/archives/2020/05/page/5/index.html","da677aa1a1d0891a10a6d1aa5668a0f9"],["/archives/2020/06/index.html","4a60783d69c34f603134dfc1b5168f5a"],["/archives/2020/06/page/2/index.html","1a196abb8874d576a317644fab1e4c89"],["/archives/2020/08/index.html","0dfd4bda2260b3bf83fe2cb4f8fc7aec"],["/archives/2020/09/index.html","642017f4031a7edf66b7106bd626f850"],["/archives/2020/10/index.html","bd47a221f539a26b6618576f9e74bfe7"],["/archives/2020/11/index.html","7d1b15afc3f6b1b5139864a4595bec4b"],["/archives/2020/12/index.html","871d618bcbe870100ed2ea8d109df8af"],["/archives/2020/index.html","f3e895f9318e6b6b433925a1569c6e79"],["/archives/2020/page/10/index.html","4db9cff16fd28f3805f65217af7fcd43"],["/archives/2020/page/11/index.html","28be3fcb7c9bdaae25b07ceedb8067c5"],["/archives/2020/page/12/index.html","fb4fa7ddbe58fe7b73660474572d12cb"],["/archives/2020/page/13/index.html","85127678f5ad0ef1d1b001699e27116b"],["/archives/2020/page/14/index.html","86b91c68e4723428a405903993f00308"],["/archives/2020/page/15/index.html","6ee886a8982d2c4fcda9f746f878dd56"],["/archives/2020/page/2/index.html","6af4ce9a99208bb29a157c198effa96b"],["/archives/2020/page/3/index.html","dda127aa8d4730af688a567d8abfb49d"],["/archives/2020/page/4/index.html","be0b05455350a8d5f936d05870f2a893"],["/archives/2020/page/5/index.html","73545f0da73758d4701b029b3a0a7237"],["/archives/2020/page/6/index.html","9eadead69d7a2bfd0d8d90647118b57e"],["/archives/2020/page/7/index.html","e6c0d21bd31bac74bac89fd2cf148a29"],["/archives/2020/page/8/index.html","061dcae9efc19cd6790dd7c6b6446eb5"],["/archives/2020/page/9/index.html","d29af2e8aa3fa09d8c41d059ca1eb3bc"],["/archives/2021/03/index.html","e689aa4e48f761066b777e5d9362fd7b"],["/archives/2021/04/index.html","3c7f61738731926195173a5515b46e8e"],["/archives/2021/05/index.html","f9f89f2e2de111f459f484abe38ea130"],["/archives/2021/06/index.html","42333ad3e91e226b1699aebe6d0be5ce"],["/archives/2021/07/index.html","f4514f0b014eedd3e53e39d1237bfe08"],["/archives/2021/08/index.html","e0d2092880821060d4723a6485432e8e"],["/archives/2021/09/index.html","b74d00fb43663af29376aae2889d3c27"],["/archives/2021/11/index.html","dc55e43b29a07c2f668c2fd12ceffeb6"],["/archives/2021/12/index.html","d4d486f041e1dcc0c89b6bc55025e0b0"],["/archives/2021/index.html","796491fbe369ff8871a89606d8c42ed2"],["/archives/2021/page/2/index.html","9a6c51a4f4e11faa32e92678cb40098e"],["/archives/2021/page/3/index.html","d4221407ea53f9345522411cb87f210d"],["/archives/index.html","53de5d9a70a990b1701f1e0141a7f599"],["/archives/page/10/index.html","46313bfedd9eb984a58d965c2f5d6715"],["/archives/page/11/index.html","014d054aa2dfd67fcf7f0ca8deb16a45"],["/archives/page/12/index.html","80fc8e9487d7b9624b90d9157ff03559"],["/archives/page/13/index.html","fa95eb54f8507d17c5a02e3e9156d5b0"],["/archives/page/14/index.html","b1adf1b34f79ff10d7a1a5d3a7561833"],["/archives/page/15/index.html","5de3f6afef754379a2facb447e511987"],["/archives/page/16/index.html","003b984e44bf0bd8075dd6d913e00ac8"],["/archives/page/17/index.html","eadc60474555d0b78ef09565bdb03aaa"],["/archives/page/2/index.html","503b1232e533c127b5bc944226550e2a"],["/archives/page/3/index.html","05250c3fefcefae4ed16e1c82f0c25ec"],["/archives/page/4/index.html","77df647b88f3aea9fbfe60b52847aa30"],["/archives/page/5/index.html","4ae526573052d168f22becc3a930ffc6"],["/archives/page/6/index.html","0b22b3098414ea1bb5ab496bdd607a5d"],["/archives/page/7/index.html","f07aad613fdd162ddd7615dd43e33569"],["/archives/page/8/index.html","d87a640a72bcc8fb1c4679ca1b00ed0d"],["/archives/page/9/index.html","8a45da1c5884a5e82643b209ec95bb49"],["/bugly 上传dYSM文件小记/index.html","6529470e3ee99f562a6b8e2d1881b38a"],["/categories/Advanced-Swift/index.html","836e72b988d1433e79066abd0d03341e"],["/categories/Advanced-Swift/page/2/index.html","aedee0134d74a3851412983c6f2c38f5"],["/categories/App-Architecture/index.html","0cc8b40e452dc1c3184a7d5d421b8eec"],["/categories/Array/index.html","46949678356d255a840e7470a600cf83"],["/categories/CocoaPods/index.html","d6198d7b814a27fc061d5b08d91d4b6a"],["/categories/Codable-protocol/index.html","716a1e1ed0893aa4a6d2f37d0d0e6398"],["/categories/Combine-framework/index.html","9d2b799af00a817e56aa3c3e0dae8980"],["/categories/Combine/index.html","16c99431fe7919bb10b107b48048e1bc"],["/categories/GRDB/index.html","5a6af33b6645fc46b5e2b45b9790497d"],["/categories/Go-入门篇/index.html","05824d6516714032b98e2ae448aae8e8"],["/categories/Go/index.html","20a646e04ee28ca98891cb4342a1a57d"],["/categories/Grand-Central-Dispatch/index.html","811c127e31653dde0c7a4e1c4c6f6a3f"],["/categories/Homebrew/index.html","d04bf880d90c9253746fbf96a537353e"],["/categories/Linux/index.html","e973f24985662f1e99cf787902fda434"],["/categories/MySQL/index.html","f755c56ffb293cb50caca7ca2c478c8c"],["/categories/Promises/index.html","16d461898b6e3e6b98b9826d0ae4097c"],["/categories/Protobuf/index.html","db709f3e1d649d25b781a1e3d9835a6e"],["/categories/Result-Type/index.html","8818de074e6f0c48632b4e1f2628f3fe"],["/categories/RxSwift/index.html","ea731a1d41dece73b5698641695490d0"],["/categories/Server/index.html","18d65424396dadcf425f183e47088f26"],["/categories/Sqlite/index.html","f765fdc86119dbdb94b3fe51ce00e59f"],["/categories/Swift-Apprentice/index.html","2e25a8da484fb6a36df921c83df26c54"],["/categories/Swift-Apprentice/page/2/index.html","d78db39a788fa08d657a3d87cacb78d9"],["/categories/Swift-Apprentice/page/3/index.html","a3d731ad1c41678a33357337ba6e56c1"],["/categories/Swift-源码阅读/index.html","e665b1b06bf58cf2c2885faa9f5d4315"],["/categories/Swift/index.html","95257e787c74727d6405d173849aa2be"],["/categories/Swift/page/10/index.html","8b7e8a9127406af74810e3b4117c8f07"],["/categories/Swift/page/11/index.html","4079ba3d8a45045c321a4f8fa38b103e"],["/categories/Swift/page/12/index.html","a41517b433f9acc8636056316a7e6c2d"],["/categories/Swift/page/13/index.html","03de0085f4006f454de77a5628010e45"],["/categories/Swift/page/14/index.html","07ad0ed44b4ccb9d8d43bcae908af7f4"],["/categories/Swift/page/2/index.html","235239b0e2d6659864b9b37628cf77af"],["/categories/Swift/page/3/index.html","94b23cd4a3549dfce10e764bdb5407ff"],["/categories/Swift/page/4/index.html","2711d7c18f713a410d0c063b002d4bd8"],["/categories/Swift/page/5/index.html","b889280333224afda2d4aae551b12d38"],["/categories/Swift/page/6/index.html","48696581204938add25b6dbb3da80ad8"],["/categories/Swift/page/7/index.html","b4614cde91207e73012c022b5c2fbd75"],["/categories/Swift/page/8/index.html","29fd1834ce2421e7b234258dd1ecd6ea"],["/categories/Swift/page/9/index.html","f5cd30d02b6cd1cb48a3934b71fb3043"],["/categories/Swift5-2/index.html","71e8fa5c0b911aaad7230f495616bf75"],["/categories/SwiftLint/index.html","92b216363f6de7bec56250b8b2d3da9a"],["/categories/SwiftUI/index.html","d63b5f02514c82d7846253cfb898f147"],["/categories/UICollectionView/index.html","e2813d6287ae4d45793cfb0db8068164"],["/categories/UIImagePickerController/index.html","cb1a936badea51c28f0fa20bb0bece8f"],["/categories/UIKit/index.html","e0487f385ded3c4315562e92f8ed386d"],["/categories/UIKit/page/2/index.html","daab470648f0a3b5ceae47def17af57b"],["/categories/UIKit/page/3/index.html","0859fedf1e941ce21a74de71d1b68321"],["/categories/UIKit/page/4/index.html","3c123126b6896083593449d9e65fdcf2"],["/categories/UIKit/page/5/index.html","c179e624e6598b852cef39e2c4327fc2"],["/categories/UITableView/index.html","0d3605333ab243da3e5e9defc44bc164"],["/categories/Ubuntu18-04/index.html","2ef5086dae328d262c2cee22f9435b05"],["/categories/Ubuntu软件源/index.html","8beb2f316d4d7f5a9d54d4f19314d016"],["/categories/Uniquely-identifying-views/index.html","f359a6f7ca7efa6a6d8736b4841f11ed"],["/categories/VIPER/index.html","c070237ee6c32e6dd767e430e5e7ebe3"],["/categories/Vapor-4-0/index.html","7a6908126b97e97787ef412d576c27e9"],["/categories/Vapor4-0/index.html","d6e530dce8affcd4ee8e19741c0c8056"],["/categories/Vim/index.html","076631ce7ef1b4a3fd63874a5635885b"],["/categories/WKWebView/index.html","8a99d0e226b7d7f470c2247a1e23a375"],["/categories/Xcode/index.html","9ba7bc50e2aae76296f0c4c96ad856ba"],["/categories/appleOS-Networking/index.html","46dc8fd33697d4b96d88d22c6ef8f21b"],["/categories/bugly/index.html","af8ce3c67bbb7ac22331803d7fb40255"],["/categories/enum/index.html","1724703ed1371b9ab3342994ec2c3584"],["/categories/git/index.html","09e79196daa1309a5ae74bbdb757d861"],["/categories/hexo/index.html","078f1ac213ecc0c6b00c3a9d481e5cda"],["/categories/iCloud/index.html","e41dac89fc7be92668b566308715f13a"],["/categories/iOS/index.html","ee05487f69031bf66bd36e66885a7144"],["/categories/iOS/page/10/index.html","cae20cc4efc559e62cd8ebd93ab368c5"],["/categories/iOS/page/11/index.html","0c5f9b39817bf976a3038044f7cf7c13"],["/categories/iOS/page/12/index.html","e134574b87753cc07546886b736a0a8f"],["/categories/iOS/page/13/index.html","ff3a3343f5b2661706523b2f65314d83"],["/categories/iOS/page/14/index.html","0c0f581b2e5d4fd8e39bb9654d3b8edd"],["/categories/iOS/page/2/index.html","fffbb8cbc3488fc017c6a81cb4cf8208"],["/categories/iOS/page/3/index.html","bac3e6417f91c27d5f5019c0122a0d6e"],["/categories/iOS/page/4/index.html","5f95a2fa5d7d0bfd414ffead4e032811"],["/categories/iOS/page/5/index.html","d2b19165a2b48058c4614de7ceaee7c6"],["/categories/iOS/page/6/index.html","75785ae4d45c462920ebe89c74a30fca"],["/categories/iOS/page/7/index.html","61ceb931de5c1c4c683f42912ee4dbb9"],["/categories/iOS/page/8/index.html","da18d985db43377b1b6e574f26dfb197"],["/categories/iOS/page/9/index.html","3dc82df96d32248f197910ec4e2fe540"],["/categories/iOS面试题/index.html","317f6c9868907b352f3e2995ce30bc30"],["/categories/index.html","754fd4573a2e1f029bd5560b565d0de2"],["/categories/random/index.html","51c513977e3baf056d7ae09134e0d3ba"],["/categories/三方类库/index.html","ee15b07082baeb97e9a7e7c7d2c9f1c1"],["/categories/函数式编程/index.html","75c7399aeef5957d9d04fb386e1a6a0b"],["/categories/子类化样式/index.html","d3d1f38d9034f74d2504a311f0d361e9"],["/categories/开发技巧/index.html","758421ceaefa0da8d71ab3947a8e51af"],["/categories/开发记录/index.html","cf1fa78b1526fb579fad0515a98a72a6"],["/categories/数据库/index.html","ab26755be43ab543a8171c05f3617d83"],["/categories/架构设计/index.html","e5fee7e0171c196b92f3ad46f0d9e81b"],["/categories/测试/index.html","82d0c5a63d20ce203deeadd8e4c8b57d"],["/categories/用户体验/index.html","79f87372e3c99373b959138072be6384"],["/categories/用户协议与隐私政策/index.html","9d8bb4c572f8be580d41411d623ce9bc"],["/categories/设计模式/index.html","ec461b63c8be89eb2009d3973e6c8733"],["/categories/设计模式/page/2/index.html","9bdb2a2e97e69f9b19f152018af474cf"],["/categories/设计模式/page/3/index.html","392317d480ffe632203b81f3d452dd0a"],["/css/main.css","21fd8ba0984339c1114072ba09492a6c"],["/hexo部署失败/index.html","6f250f6ca2bb6fae0da91a39b8f66ee8"],["/iOS 15 适配/index.html","81c9a7be47193d44b76a3a88bfc8314e"],["/iOS VIPER架构深入实践/index.html","47e8fea8271d735fede85d7d5dff8b0c"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","ec067a9d31e15d3906d2ae83ed528a77"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","793933ac97acd8d7a7b0f1d808b84759"],["/iOS 自定义视图，输入表单和错误提示/index.html","25cf3872cfc76cc4dcc62b6301217b42"],["/iOS如何使用iCloud文档？/index.html","ad009eba7ffc0f988f8c96110b7c1b58"],["/iOS子类化样式/index.html","5766e52ddfd7914388a76c3300233e62"],["/iOS开发记录<一>/index.html","b5b24f0c3bd5798ca83340efb2610a35"],["/iOS自动化布局编程/index.html","7542d696ca9d36eea74b14ec8146059f"],["/iOS自定义转场(By Swift)/index.html","3b1c225639c145ea86657f81cc7d69b8"],["/iOS项目架构：使用VIPER/index.html","4f29fbb7d39ce627a024a15fdbba4852"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","5ae75c4aec151ced9165be7e006969d1"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","bdf543ea9683739f715b5c5b9fdda29d"],["/page/10/index.html","6421ebc75e7253bc068ddcde372460cb"],["/page/11/index.html","d5fd70a1c53f5f3582710cf331ebda7c"],["/page/12/index.html","7c113fcf051887044fc2e158962e5e02"],["/page/13/index.html","d4041dca71a5988ae04f100376e76314"],["/page/14/index.html","6064a7263701d0b13838fe0860e849d1"],["/page/15/index.html","8dcdf07348ae8eb336d1bd93ee5decbc"],["/page/16/index.html","d15a066ec3ab6ce189bdc6dd39c9e028"],["/page/17/index.html","230b471afdb111a99bd041f0216178e0"],["/page/2/index.html","73104f6e46c759dd0ebc7ab7d889f9a8"],["/page/3/index.html","45e1b8f63280b96a2788e8aa5800d5a3"],["/page/4/index.html","07197210ca6aae5a9700d15a9edfdac0"],["/page/5/index.html","9e51c5f40fc3f2640752a1e34d8d7f61"],["/page/6/index.html","370405e1779273505b986b9f5feb0bbc"],["/page/7/index.html","380a89452e49a1ecbcdd5671b3b0a4c9"],["/page/8/index.html","30a3ff62b899a819356d4e4dca428153"],["/page/9/index.html","cf4f0bb71df2b71ed1dc0e95772b803e"],["/schedule/index.html","1a78de7ef4f0d64b6742d57fcbe94235"],["/storyAppPrivacy/index.html","c8dec3622321e6742a8e3aabd6ee0720"],["/sw-register.js","3b03205ca963bd6aa113b41d9e25c682"],["/tags/Advanced-Classes/index.html","bb272ff2a3c23b96f9956e9261e771d2"],["/tags/Advanced-Swift/index.html","1b708623bec6b3bb0695bd8038685db8"],["/tags/Advanced-Swift/page/2/index.html","2abb999968e2582bb276b0de45f0ec6f"],["/tags/App-Architecture/index.html","e65d19ea508cf591adf93845fc1e3e1a"],["/tags/Array/index.html","9c827de1c3c56a38325333d6819f25ea"],["/tags/Arrays-Dictionaries-Sets/index.html","0adb2c404ad8d77650c70f29ae7a0a82"],["/tags/Authentication/index.html","8cbafddb1cd2ec083911d71dafc89198"],["/tags/Build-in-Collections/index.html","1ef24e43f60e15c70177b4f7c554547e"],["/tags/Building-Your-Own-Types/index.html","c9caef621570534bb1da35f975c55384"],["/tags/CMS/index.html","957357428e0fcd2c34e1cacd8774da48"],["/tags/Classes/index.html","07ea999d835dd959eaa8640125f3ecf0"],["/tags/CocoaPods/index.html","b5917477b3931f0b263a61386d67e1ed"],["/tags/Codable-protocol/index.html","2861bc361656c4ec9acd849dc147abd1"],["/tags/Collection-Iteration-with-Closures/index.html","11f4d4cc9feba3929c84506b07872966"],["/tags/Collection-Protocols/index.html","5bb63c470f9772f38f3a44e763b95553"],["/tags/Collection-Types/index.html","2b8ebc283d284109970a539f45079099"],["/tags/Collection/index.html","e2036a2510083ce31729d90a0ab8e2c8"],["/tags/Collections/index.html","50c25594d83d78aac0429eeffa85ddd9"],["/tags/Combine-framework/index.html","af529f97f5c7b1fd3c05ae7709a587d4"],["/tags/Combine/index.html","53355aaeb188a4bf7bf79b431de8f1fe"],["/tags/Dependency-Injection/index.html","0c73f4c2be5fa3538e161010f9e0f862"],["/tags/Encoding-Decoding-Types/index.html","edc8fc6f395207b7d7c4373faf9aa87e"],["/tags/Encoding-and-Decoding/index.html","52bc62625fef80075eff228f5ad1d32d"],["/tags/Enumerations/index.html","d7b18009ff7f5951e174a8a5747e608d"],["/tags/Enums/index.html","6a066ffa75c103ec3949b47844331472"],["/tags/Error-Handling/index.html","1bcc004e40359ae4271b7480fcc8a1dc"],["/tags/Functions/index.html","dcf2d9b377aa82f529661457b7cb04b5"],["/tags/GRDB/index.html","0a76ddc60fc02fd1c09d2db4a73c8baa"],["/tags/Generics/index.html","21313648df3efc0180033aa4242916cd"],["/tags/Go/index.html","7ea0b14e81da77a23bca6b847085098f"],["/tags/Grand-Central-Dispatch/index.html","09829d570f17c8e410fc38c4567fc31f"],["/tags/Hello-Vapor/index.html","af227d730525f535ca0f24f41c0f33da"],["/tags/Homebrew/index.html","28d3aec9c65943da1ddbe80a2055c3c4"],["/tags/Interoperability/index.html","5309e9b26c074d77b0a4dd69f9597e8b"],["/tags/Introduction/index.html","b96324874aac5ea79bb3af3cfa78aeaf"],["/tags/Leaf/index.html","a028098fe17fbbc561ff182fb9d04ed3"],["/tags/Linux/index.html","207e963129fe83123fd689574756c78f"],["/tags/Methods/index.html","aa540f34638301587500868c57ccb120"],["/tags/Modules-And-Hooks/index.html","73801e40a2a311a0758d9808e7f7798a"],["/tags/MySQL/index.html","0308823739c19d526494d00ec3ffe2a7"],["/tags/Optionals/index.html","d21ee3e49eb2aeab5d74113413f423a0"],["/tags/Promises/index.html","582609733bc182f2ae4050f843c462c5"],["/tags/Properties/index.html","ac9acd6d82c996989884f5dc2db52f2c"],["/tags/Protobuf/index.html","8ac217e7a9da18b3ab68e0b988727574"],["/tags/Protocols/index.html","f6fec0b8c7225a306735600e2c509822"],["/tags/Result-Type/index.html","1268035e9771a3fdd835d4784c3df5db"],["/tags/RxSwift/index.html","91be25db09b0c9b8fd483e75e1d2255d"],["/tags/Server/index.html","fc711805e736890911ed4ed1b6f75ada"],["/tags/Session/index.html","adaa84416df75a33f8e58a0bba733697"],["/tags/Sqlite/index.html","05d2b77ee8ee09076692768f3ab819cd"],["/tags/Strings/index.html","8af8792c4a92d7148b523446cb528f0e"],["/tags/Structs-and-Classes/index.html","2988cd599f5547eab7250205b60af3c1"],["/tags/Structures/index.html","7c0982e7233e26a8385877f58c1c5838"],["/tags/Swift-5-0/index.html","6089bd958dfe2dac635d2722045d1c57"],["/tags/Swift-5-0/page/2/index.html","afe9a64777b20ad3e601e82db7bb7cfd"],["/tags/Swift-5-0/page/3/index.html","5f9de0eb0254d9705d2665e5f3fbb597"],["/tags/Swift-5-0/page/4/index.html","c9979bf06f9d9afa2937df4c63d7a60f"],["/tags/Swift-5-0/page/5/index.html","d45735707d86bd69262c3c0dd2f1ad7e"],["/tags/Swift-Apprentice/index.html","583522f42bb3cf6266d6368704b70b99"],["/tags/Swift-Apprentice/page/2/index.html","d75a25eb4fe6f3ca5b9b8fdef7ba8a81"],["/tags/Swift-Apprentice/page/3/index.html","68105e3e626a7b8f7526c15c54ce8df6"],["/tags/Swift-Package-Manager/index.html","df2a07efcf83a3ded46a2f17e20e7595"],["/tags/Swift-源码阅读/index.html","217d71abc43c9ceb12688ae4a557428b"],["/tags/Swift/index.html","693c2fca3a4ceb34e17b9d59ade87bdf"],["/tags/Swift/page/10/index.html","f6866ddf4c1603474a64263dbb8cca7c"],["/tags/Swift/page/11/index.html","97f1764bf45f899f11c6d1103f5fc06a"],["/tags/Swift/page/12/index.html","22e0b85abee24a109a4dbbdb5dda416b"],["/tags/Swift/page/13/index.html","7144f3ef491811f6408e496ab8f357f2"],["/tags/Swift/page/14/index.html","ded1cb59829ceadb2da59fd0a9dab5d3"],["/tags/Swift/page/2/index.html","311acdac4e732a014e53b2735b3ca29f"],["/tags/Swift/page/3/index.html","c65f9e02310f68665337bdb4088940fd"],["/tags/Swift/page/4/index.html","cefdbcbd381f31238ccbef53ff32517f"],["/tags/Swift/page/5/index.html","34c71a8fc5de03efe0117b1e5b089a9d"],["/tags/Swift/page/6/index.html","3929dcdd4a207c37eab7666ff66fdd3e"],["/tags/Swift/page/7/index.html","b4242c58287317c3881d0a6beb7f536b"],["/tags/Swift/page/8/index.html","26bb2530a40fc57fb818375c5e1e68ef"],["/tags/Swift/page/9/index.html","477b36619419cfac3cf481b87a1aec99"],["/tags/SwiftLint/index.html","5e55035c40b853b18727840dc40b6acc"],["/tags/SwiftUI/index.html","0d143f0bd73584a31d6d820e90743ab4"],["/tags/UICollectionView/index.html","6c490d8fdeacd4778502c2f2766f7b3f"],["/tags/UIColor/index.html","3f7332ed3c7f741f87fd3fdb1a64ad22"],["/tags/UIImagePickerController/index.html","1030f9e5781695541e6dd1eab94977c6"],["/tags/UIKit/index.html","819d35736fa9f3948a1b1f3299ab602e"],["/tags/UIKit/page/2/index.html","36564930fee64fd60e6330ab976072ce"],["/tags/UIKit/page/3/index.html","896ce8abc701c6673908a1d8a58bb250"],["/tags/UIKit/page/4/index.html","92b0b6b116624bf1310781fba14d5433"],["/tags/UIKit/page/5/index.html","8d7632c520d7795031e4b2d689078615"],["/tags/UITableView/index.html","cb88a463efe6aa34b329a9f343cc2460"],["/tags/Ubuntu/index.html","02a690faf9e294d02837926a5f9915f2"],["/tags/Uniquely-identifying-views/index.html","a303400d6b49e3bc4e2d19542553c006"],["/tags/VIPER/index.html","4918f0383ea3640505a1354502d70757"],["/tags/VMware/index.html","4dcbe90595e2f054afdfe32bc13a9772"],["/tags/Vapor-4-0/index.html","b197a3e79670b14d586b75c678c54915"],["/tags/Vapor-初探/index.html","bbe161437f21d4e965613a00e0d3d30d"],["/tags/Vim/index.html","ecd95f1faff17eb40079c16669cdcd8f"],["/tags/WKWebView/index.html","14230be1e4c7fdd27de9c3bc7109a65b"],["/tags/Xcode/index.html","4144e42cec8ee0cea75df30cefe48833"],["/tags/appleOS-Networking/index.html","bb7b5ede8a7d2ef35424053a6b080d61"],["/tags/bugly/index.html","a6d9c24b4d6ccfad830cc5379ad53aa3"],["/tags/enum/index.html","407467cf9a03ce50673e9d01b7177d1a"],["/tags/git/index.html","4fca39d5f5d12ef9a011a16a07fdcb14"],["/tags/hexo/index.html","42e1281a922d3cefca6a1ed3f51f85b4"],["/tags/iCloud/index.html","21d2ba73447da5d5ed33274d7bced9ff"],["/tags/iOS/index.html","5d6fc16cca87ce6b03363214284fd0cd"],["/tags/iOS/page/10/index.html","d18c8a764da484af343e157b7b1359ee"],["/tags/iOS/page/11/index.html","d7524e4d199e2d0b3ecbdc830289f22b"],["/tags/iOS/page/12/index.html","4e609c3985b6502ffbb166fdc18e6927"],["/tags/iOS/page/13/index.html","aa3856b70630a5d4f1e25ac69953b15b"],["/tags/iOS/page/14/index.html","de5b18e4aaec06484591796add7625c0"],["/tags/iOS/page/2/index.html","ce87b3dbad8db1adfa70329269917b61"],["/tags/iOS/page/3/index.html","d508ea4a33d4d9555b2c39fba2d3d433"],["/tags/iOS/page/4/index.html","4e27a8acb51219cab691738235f3d46d"],["/tags/iOS/page/5/index.html","7ad68c5d40ca3317f3597c0700135556"],["/tags/iOS/page/6/index.html","ed38d51487f7f8946357133ccb3207aa"],["/tags/iOS/page/7/index.html","c9602df9705e2319bef4699339c2aed3"],["/tags/iOS/page/8/index.html","a584c572c5e3063d2cd71987a4caff56"],["/tags/iOS/page/9/index.html","2f5e43ca9dec6b9afa43e813fa391ed8"],["/tags/iOS面试题/index.html","42b21fc7d219224c1f3c1d3d7bae6f5e"],["/tags/index.html","c52d45c217bb00cd26172b0570966e06"],["/tags/non-optional/index.html","9e724fa59bcb523db9f64974527e1a68"],["/tags/random/index.html","ddcf8f6871679bfa8a81f8a1b274f7e3"],["/tags/transition/index.html","31520f572d079e49d229e63a669b6781"],["/tags/三方类库/index.html","efa09b596bf4cc3f2af2cb708f037250"],["/tags/依赖注入设计模式/index.html","2c90690703fe6a4fa577b9ad3413f3e3"],["/tags/值类型和值语义/index.html","471a9f29f88ca782b7420e1d1eea6aea"],["/tags/内存管理/index.html","770b5f905b66850fcfb51063031acc42"],["/tags/冒烟测试与回归测试/index.html","f0ba2ec1c4e310b895e5a84b1fa178cd"],["/tags/函数式编程/index.html","01f79ab77653a1c7aefa4ce4dcd82aa7"],["/tags/创建博客数据库/index.html","bec1eadea6d20a692171a09ba1a0d3c2"],["/tags/初始化模式/index.html","f9d08010fd519965c94d84035e437b83"],["/tags/单例模式/index.html","8d6afeb3ddc7805b99ef8b05b880b6aa"],["/tags/原型设计模式/index.html","f77dc0cb491b695815cadd8a9e1d0c29"],["/tags/命令设计模式/index.html","c2574ab21e2825757d720762eb5ce287"],["/tags/基本控制流/index.html","7c938b666bd3ada902e33a61e52826f5"],["/tags/基础语法/index.html","13d002ed0e8caf35397c6a7947283591"],["/tags/外观设计模式/index.html","76210105e1fcd056a97869a7543fd60e"],["/tags/委托设计模式/index.html","fd55a62e94b94801e1f8dece88da7278"],["/tags/子类化样式/index.html","92c56289fb16db93724d1806160cc7ae"],["/tags/对象池设计模式/index.html","d3497c2123086d4418534611e2da6483"],["/tags/工厂方法设计模式/index.html","89a6642cbcfb20534ce66cc9fa076695"],["/tags/工厂模式/index.html","a72387d112b4ede330698d06d7156983"],["/tags/工厂设计模式/index.html","4e3bf77c16ab12423333145306802c95"],["/tags/开发技巧/index.html","c7496e25c3f588b53114e8be8617bc03"],["/tags/开发记录/index.html","cfbe4393428117087c4d55cd988a75dd"],["/tags/懒加载模式/index.html","29222f4fe6656b572b9cb3e50546b2e9"],["/tags/抽象工厂设计模式/index.html","2dda84d092ab8cd1358186fafc1edf38"],["/tags/数据库/index.html","f2fbaa1d6b857aa2484ee82fccdaf547"],["/tags/构造函数/index.html","662d669dfd91df69bd17f45ec8de5b58"],["/tags/架构设计/index.html","f98c39b3c80e30b3aa019ede8452f15d"],["/tags/模式匹配/index.html","1533ab593ee3219890bff9b296ad62a5"],["/tags/环境搭建与验证/index.html","f50d271463e8bb796feff2947eae3e61"],["/tags/生成器模式/index.html","9f184322223caac50d72420c2dc9980b"],["/tags/用户体验/index.html","d2e0c996abcee4b48d37bb995aa7ab78"],["/tags/用户协议与隐私政策/index.html","14de3aac18bc8bea38e3fa73980ca61c"],["/tags/类型与操作/index.html","99197da4e237d90151c690b895ed62db"],["/tags/自动化布局/index.html","75354009f0597455221bef726ec63a68"],["/tags/自定义UIView/index.html","f146544eb2c17e6e7d2642c02ca0de0c"],["/tags/自定义转场/index.html","18e87ca99f8299b8ad28361919dbf1f4"],["/tags/自适应布局/index.html","f6b9d1a0d992b42e02e4b608079116af"],["/tags/表达式、变量和常量/index.html","3034a7cd3ecaab0d41cb6be008503972"],["/tags/设计模式/index.html","e3f7dfd1f7be1085b85d7ea2a90328c0"],["/tags/设计模式/page/2/index.html","1731e95869e3a78045de55b75f947444"],["/tags/设计模式/page/3/index.html","114083188ee2b47ca9e8499b2db92b11"],["/tags/访问控制和代码组织/index.html","76351dc7e8c55acde0cd6d7b3e6b024a"],["/tags/运算符，下标和键路径/index.html","b1f979877063fa174d8f589155fdf2eb"],["/tags/迭代器设计模式/index.html","ddb35787f89c291818759053a4648de6"],["/tags/适配器设计模式/index.html","5f9151eca45df554ccdc354ee6bf2621"],["/tags/错误处理/index.html","6caecee843e0a33c38324aa30cb2539f"],["/tags/静态工厂方法/index.html","fff628f7e51aaad64dc61c0ad66c8b56"],["/tags/面向协议编程-OOP/index.html","eaa6547072b8e3be89d9535da5157030"],["/tags/高级主题/index.html","a622e504f637658b49c4df0581aef476"],["/tags/高级协议和泛型/index.html","60d100bbe1c9ce0e85841149c45246b5"],["/tags/高级控制流/index.html","34c49db7d2afd9223028c23fba8478d2"],["/xcode 常用的快捷键/index.html","ceb9682cb26186c17f992e59c728846a"],["/为iOS应用构建输入表单/index.html","b5b00898758d5cf71f161709040cd962"],["/产品开发的幕后花絮/index.html","8219ae50a615413139e0939a23bf351f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","48f00249fffe07b775f3a1028b25926d"],["/冒烟测试与回归测试/index.html","0ee797c8f73df3eb94ea3a1d5472683c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","14d1f1295362be6b76907137bb509636"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c9265d7de1cf2022e5772178508023aa"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","cc71ebee9dc6bca2d161a3f574dd89f5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","666c802e3f05dc5fac01f73227d1ba3d"],["/在Swift中创建自定义集合/index.html","111e43d2f42ceb01fdfa7f826ac4efa5"],["/在Swift中处理非可选选项/index.html","fee3395f7b49c78ec9fd92080737802f"],["/在Swift中生成随机数/index.html","8a3448b5b904c8717498d4c563606d50"],["/在Swift中重构单例模式用法/index.html","f9213b622f05f8112fb0875835451498"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","930655bebe1507351e6a9c99826a9422"],["/如何为VIPER编写服务？/index.html","2a7037fc75d9956ee429b830c5605659"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ac0acd2860a3a77027e20f0d8fe787af"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","4f70562c069d0b0c49136a1f8b01e10f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b9ea502a5221da11ead4cfa0b50b4777"],["/如何使用VIPER构建SwiftUI Apps？/index.html","84471763c3449553e8bda2533e14bede"],["/掌握VIPER架构/index.html","25fabfb5f5b2303a35dda6d36ac849c5"],["/揭秘 WordPress Hook 系统/index.html","81cc3ad3e5f2659e68966be41cd3db26"],["/比较工厂设计模式/index.html","25533c0a082c485315031f35f2c7db9e"],["/深入了解Swift中的Grand Central Dispatch/index.html","2e15a88037ffd1e55e701e2d57097f35"],["/深入研究Swift框架/index.html","3c25d8043485fb7d4a5632351a9c0be6"],["/适用于iOS开发人员的VIPER最佳实践/index.html","79c0a458bef63d9c64cc7151d2eca5e2"],["/选择Swift而不是Objective-C的5个理由/index.html","6c36ac0c748e077c6a2661dd24f3d3b4"]];
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
