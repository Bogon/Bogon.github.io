/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","710cf0a9ffeb3aef6e094413e7b0506f"],["/2020年iOS面试题总结(三)/index.html","5c7435fdf27d949281a72cb76746be02"],["/2020年iOS面试题总结(二)/index.html","3bbf87e841089a2cfd5ce3f70cf0c7c5"],["/Advanced Swift系列(一): Swift 简介/index.html","3f945203e72f921a214bfaf5307c5ba2"],["/Advanced Swift系列(七): Strings/index.html","ef98d3d34a42969bff2d73a74e00f1cc"],["/Advanced Swift系列(三):  Optionals/index.html","ff9f259db39c1735acc1ea9c93df7154"],["/Advanced Swift系列(九): Protocols/index.html","ccb9861621ad2096560250dde3a43093"],["/Advanced Swift系列(二): Build-in Collections/index.html","2e9ad757a7a86cfac55ceab2ac941116"],["/Advanced Swift系列(五): Structs and Classes/index.html","7abf0f4abe565c8b8df991678605e43a"],["/Advanced Swift系列(八): Generics/index.html","39827e18bdfdfb1c1ca7c1ad7593de51"],["/Advanced Swift系列(六):  Enums/index.html","f333876a83141fb7517a7995fa28be9a"],["/Advanced Swift系列(十): Collection Protocols/index.html","463da70977edcddbcc62bf5af1675785"],["/Advanced Swift系列(十一): Error Handling/index.html","b06705fa418652db01b1b35a09df3abb"],["/Advanced Swift系列(十三): Interoperability/index.html","419fcdc856a864aab26e9da234ed90a2"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","dbbcecc2189765f6f2e12aa34b25e8c4"],["/Advanced Swift系列(四):  Functions/index.html","6b6484256dbd9198ec9cac91be0478e6"],["/App Architecture系列(一):  简介/index.html","500a8a3353a6c18be0dd57cf2b237229"],["/Functional Swift 初探/index.html","3d776eaa7415f9ec834de5c8d34f17e9"],["/Git 使用小技巧/index.html","d7a616554fc2958838b8c534d984e4ae"],["/Go Protobuf 初探/index.html","9f37052a627ab4b41341e004082e4627"],["/Go mysql Tips/index.html","13b9116d6a0e343068fa50d7d30ea885"],["/Go 基本语法初探(一)/index.html","f5eea15873fa4e1ebfa39f88da3bf496"],["/Linux VIM 命令及操作小结/index.html","815254f3646ccfa1cf3039a977e445e9"],["/MySQL 基本操作/index.html","7ee4970aeb5fc213c3ac7ebe9555521d"],["/MySQL-列类型和数据完整性/index.html","9c5dd0765716ce06a48c0269e603b71d"],["/MySQL-数据库设计和查询语句/index.html","b8e711173a048c8192195499ad7844a8"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","8784eb3bbe8c74fa0cd8211ee55fa41a"],["/NSCODER和SWIFT初始化/index.html","3994707c9b0951b8aba7e0c6bdfff8a9"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","77f4db69d0a85ebb2d3e1dcaf4a35d62"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","3a83cc7e0b4c40659ef6bd2b5e68d5c3"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","30f230861545dd1011dc0731ace25a01"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","25281810810462b23f26403820c35e2a"],["/Sqlite 使用Tips/index.html","86ea8a42ffd26682d58b11d063f59f91"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","d49da03c0bbc9a0c1e273bb37bc3692e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","323e8c7d0b955a96550af11f89b75d7f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","0719f7dbb0b0e20922b74f6495f04444"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a031d646504318954239a06cceab11f4"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","51fd253078b13ca662dbd82155438160"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","af35dbc85540324df6b7fa525c0a2733"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","1c3f55e66df7f27cf5b8663f50e0342c"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d7e1412d2aa1e04e0d261c767d596eec"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","85c4fc1530d701447ab271aef1a19145"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6a44b775324a565e4e0ae218ba1509cd"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","069f64b30905b44da84d1b09ff40dd73"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","7e37fc119de81d80c32a80aed591669d"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","cfa4010aacaef536525f78a9977d3065"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2df0d34bf8fe6c5d50a8655fbe783a53"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7d4020987a908c6df77b4c3cf487f317"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","9446f12629f6cb5b7613bd552e106f32"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","33fe32d5656de19a5d37d69e975d1e55"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","21c1be2b76271fff94208bc119e745e4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","588d1bb204c7cbe1e2d42db05a84435d"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","37617d3760d4918ce3d47cccc4dff748"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","4a5983ba66e796301a27511b5b119c19"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","f91f752de79602f2513a3f328a3fb071"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","77acc5eb8ff2404bb01a5d998f39618d"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","bf87b787af39b999018a6bf1f6942b06"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","f1844bfe5227ad58868b9e1d91472752"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c1af885fc4b8e32bdd44a6d1c4fa3271"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","b5f13ce455a25eb333f18ebcb555a0d0"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6768482cc1014f4155a43b20843398bd"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f11b7a6ea1b6a2eb44f7992377f7740e"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c377ec3b2a75d43fc6b54d9a28ad773b"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","ac910bef381e67df1602a7957b5e0831"],["/Swift CompactMap vs flatMap：差异说明/index.html","24570a5de6dbca6f125e0c82cf3aa512"],["/Swift Grand Central Dispatch 深入实践/index.html","43be952e1b4576ccf7468ae180c9b318"],["/Swift Lazy属性初始化/index.html","ac4b18842185e73f2f28299a2551d07a"],["/Swift Promises 初体验/index.html","838e0f28721867967d6a6268e62b8edc"],["/Swift Promises 探究/index.html","e1b02e475f8049c7940a1d286bb27b85"],["/Swift UICollectionView使用指南/index.html","349a0bb5a46b532b04afb23c43d601fe"],["/Swift URLSession && Combine framework/index.html","fb5322f0ad15d37a3fa97b9718100bba"],["/Swift tips/index.html","cdc91508c88a35d4c977ac2c3135d77a"],["/Swift 三方库：GRDB 使用指北/index.html","e441c24ea077d68de1d989ba568216b8"],["/Swift 唯一识别的视图/index.html","ca79213d124377dab69d621c55079a80"],["/Swift 如何学习现代UIKit？/index.html","ec085f7ff8931c220c819a56248e2cae"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","b3141263dcba470ccb14e7500c3ff8f7"],["/Swift 用 compactMap 替换 flatMap/index.html","2aa66ee5a57626fcb5ad947258026ed7"],["/Swift 选择和播放视频/index.html","ca7a80c8ed7a6ca65f690619d337a7f9"],["/SwiftUI 系列(一)：1、 简介/index.html","654bd1471ea9ddf11547a7994bd69dc0"],["/Swift中UIColor最佳实践/index.html","77dfa6b5110d0bed39838633aa17a535"],["/Swift中快速简单的工厂设计模式/index.html","416b0870572dd3db427e60ac95155c0a"],["/Swift中构造函数与静态工厂方法的比较/index.html","88af778f4f7a94cbb2ecd3a3b6482ec0"],["/Swift中的UITableView教程/index.html","57a149e7eccfbeff021a7b6650cd7392"],["/Swift中的懒加载模式/index.html","e18ee72564ae3c6a4af5d4bd705fde90"],["/Swift中的模块和挂钩/index.html","0172345d798bcfc538b1d12661b4e64b"],["/Swift使用布局锚点添加约束/index.html","0fe85c76051c767416576da7b0a99dd1"],["/Swift依赖注入设计模式/index.html","bc5d04eb6ba6bcdc298b2ce514723785"],["/Swift关于Dependency Injection (DI)/index.html","c14264bbf682fd2fe4ff85cc08bc58ea"],["/Swift初始化模式/index.html","2fbf58fd32d664495f444c50814e0f98"],["/Swift单例模式/index.html","ede13c41e4410994ddb2fe4c5f9d8376"],["/Swift原型设计模式/index.html","9c1d585269abd431f439a32de276b11c"],["/Swift命令设计模式/index.html","28df179a891a27d796ace0ef00a707ee"],["/Swift外观设计模式/index.html","f59e6a89ad9576bfd0ed3832d934549e"],["/Swift委托设计模式/index.html","887e10cbfe038d72ca7a447d4776c481"],["/Swift对象池设计模式/index.html","a694bbcb24952284817eb1dfc0bc2485"],["/Swift工厂方法设计模式/index.html","01b6177a97be1641ca4ad29d7c620a7d"],["/Swift带闭包的懒惰初始化/index.html","893e57540beadccf9f2c390b9734180e"],["/Swift抽象工厂设计模式/index.html","d4e4731c402a93d9b985484a7a10407a"],["/Swift掌握iOS自动布局锚点/index.html","cc930ebb80b5914851489c962954d0cc"],["/Swift支持旋转的自适应单元格/index.html","c0bf019787cd403874b311ff0a0e538b"],["/Swift枚举值/index.html","b0fd44e22a7f052e3c0527e279948f4b"],["/Swift生成器模式/index.html","b27c4933aebc550b3eda99d4f87b1d43"],["/Swift结合Xib文件自定义UIView/index.html","8c5a31223d2a7b414903055749b8e7e1"],["/Swift编写的20个iOS库(一)/index.html","622e69c5ee121155a87ea342333c938b"],["/Swift迭代器设计模式/index.html","8e45f7fe63bee7cfb8e6e32919bf78e1"],["/Swift适配器设计模式/index.html","4ded140eaf837c7a506432e8f8bfa20f"],["/Swift静态工厂设计模式/index.html","5ffdff89ace85aefcd34f297a964720f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b6d969b1c8439c34762399c83caac907"],["/UICollectionView data source and delegates/index.html","093e2d5d0a3a4ef257159b598cb37ff6"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","cbe3c976d6d9860466618b7f7cba07e6"],["/UIKit初始化模式/index.html","063c7789472432bfe234e6f179c8cafd"],["/Ubuntu18.04替换国内源/index.html","9b901cf74e9bd595d11ea8152895d709"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","153df4205e62e0b8acb3d5ffc9bb0650"],["/Vapor系列 (一) :  Vapor 初探/index.html","55fa34d40fef26cc8b0751beb18f291b"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","12e47987d0dc4fedcf8050889e79ef9e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","55fd109060c2dc96cbba05b1109e2d9d"],["/Vapor系列 (五) :  使用session进行authentication/index.html","934b43c69e4d3cdf0d07344527d2c09a"],["/Vapor系列 (四) :  创建博客数据库/index.html","3d01709a5450ef731617be306918917c"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f51197e50d88816187520681da4d9c13"],["/WKWebView与Native交互注意事项/index.html","554afd9f7ddf9fba199e5cccef53b10c"],["/Xcode扩展/index.html","03af96bd5c80ad20a02b7b2c25239ebc"],["/about/index.html","7d5b8fe9c81eeb30b8922501111de967"],["/appleOS的Networking示例/index.html","0821d32f132c267cac295942fdf62ccf"],["/archives/2020/03/index.html","43b00715f6bac281dc2f88c1dd2883f8"],["/archives/2020/04/index.html","e2393dd737f28153f3d38e13812f1c21"],["/archives/2020/04/page/2/index.html","ddbfdc6ab8fa27544586f7448dba843e"],["/archives/2020/04/page/3/index.html","ea614bc29a195985265d3d61039866fa"],["/archives/2020/04/page/4/index.html","7e9ac3f86bf6df4127f61a5fd6e2dd93"],["/archives/2020/04/page/5/index.html","74560f3971d1f73095f6dc996fc864af"],["/archives/2020/04/page/6/index.html","a90dda4ecc460599e1c990338e81a761"],["/archives/2020/04/page/7/index.html","5fd757da8a95a9e0669d1f5f894b92d9"],["/archives/2020/04/page/8/index.html","42b9962c01d03f6617ead8703b972ecf"],["/archives/2020/05/index.html","95157558a3084b9f5756417ec2fdc40b"],["/archives/2020/05/page/2/index.html","d4789882222cf2d700eae628b3ba6084"],["/archives/2020/05/page/3/index.html","a6e6a861fc06c5345ba0fab8a8fe0faf"],["/archives/2020/05/page/4/index.html","46723eb0c5bec31e109a7fd26422f89d"],["/archives/2020/05/page/5/index.html","39e698650e191141fa1c49f32228ca19"],["/archives/2020/06/index.html","9aeeeafecdc6e0e186499cd5fd7fd6f3"],["/archives/2020/06/page/2/index.html","85c2e152eaebc8f671d86f3ee6536b7c"],["/archives/2020/08/index.html","c81b9036ff992a950050c4eb4bdb13a2"],["/archives/2020/09/index.html","e1d29c7df95bca00058033974cdfb41d"],["/archives/2020/10/index.html","abde62718f5997b13f5b7fae17f82839"],["/archives/2020/11/index.html","3f46d723055932a016090ce75143a9a2"],["/archives/2020/12/index.html","d58e238e6069b08fac7b61d8f43eb3b8"],["/archives/2020/index.html","2a7f30d92283934d225eeb536d352118"],["/archives/2020/page/10/index.html","4eec9247b959fe8edb7de65ab8bad373"],["/archives/2020/page/11/index.html","2ae9c1985652236eec157c915495ade0"],["/archives/2020/page/12/index.html","0fcc40b55decbf58d6a557765e37cfb6"],["/archives/2020/page/13/index.html","95ee72f7379cf75ae2ea3912795c1709"],["/archives/2020/page/14/index.html","a2568a9a88908c8ca4c90a607b8acdc2"],["/archives/2020/page/15/index.html","d369a485a3bc8df1141301a3f86cf84e"],["/archives/2020/page/2/index.html","355c2b6c5204c7f384974fd4368d5e15"],["/archives/2020/page/3/index.html","cfd7f4eedf914389ee240021d3e6c278"],["/archives/2020/page/4/index.html","4cd2e395905ab926acc8627b5e2d1bad"],["/archives/2020/page/5/index.html","57f612760e5f3680ebdef66f7433f3fb"],["/archives/2020/page/6/index.html","d21801aa6c0dbb49727c018264cbbe67"],["/archives/2020/page/7/index.html","d13ca2ed4b9857c024fbb37ad9245ae7"],["/archives/2020/page/8/index.html","48bda6e286c544945aafbcf4ea925978"],["/archives/2020/page/9/index.html","d1c25b0db77df70b6c0197eb24959e01"],["/archives/2021/03/index.html","8068a26cb75bf65106bdab6c9fc0df00"],["/archives/2021/04/index.html","9cf103baba40c83b9a613ca94c59122b"],["/archives/2021/05/index.html","a83f962974574f8ee1a3b051411e41f1"],["/archives/2021/06/index.html","ca664fe1df363a696d8135209651358a"],["/archives/2021/07/index.html","9683faf3996ad0cd716f5469d25ce3f5"],["/archives/2021/08/index.html","ec27da25854ace6df3d5378ec3091f09"],["/archives/2021/09/index.html","b55e7961ca24ceba4e4157628bc0f4f6"],["/archives/2021/11/index.html","56e6560b467121fe3b3b733df0b976b8"],["/archives/2021/index.html","1a455816a79f8a75642b8ee218cc94f4"],["/archives/2021/page/2/index.html","4ea777611ef4c452b184cab531cde906"],["/archives/index.html","2cd7e7277b2099667a88e9ed7f464a42"],["/archives/page/10/index.html","346a37316af90f5ddab920db4b78e9c3"],["/archives/page/11/index.html","67c1874e3099aed0ead089236087ff9d"],["/archives/page/12/index.html","d14c9b8767831d82d3d21ab744df9e6f"],["/archives/page/13/index.html","31cdaf975083a8c241e3c492f534ca0e"],["/archives/page/14/index.html","5ac8219e8a6808c56c818a3e7632b98e"],["/archives/page/15/index.html","2a07dcf5aaa67e4ae19b888a788c03aa"],["/archives/page/16/index.html","51cab4aa11b3e5072ae4d2db58e526df"],["/archives/page/17/index.html","a01dcea96b3bd0e991582f709984ee2d"],["/archives/page/2/index.html","b525ae3c8434df76f88d4a85fd47b7d7"],["/archives/page/3/index.html","05406a6eedcb054659c5539792c4552b"],["/archives/page/4/index.html","84902e5dfff7996b346c34a4a97e5d5b"],["/archives/page/5/index.html","1b2498b60c7534ea39198d47dcb47502"],["/archives/page/6/index.html","ca5132ddd69472f483b82832df74bc70"],["/archives/page/7/index.html","4c1ee61b55a4371f7142f4ebde88840f"],["/archives/page/8/index.html","c5e8aad7bf79ba4a9b740e53204c3742"],["/archives/page/9/index.html","0ee3aa680769d6f2ee5cc2850f19893f"],["/bugly 上传dYSM文件小记/index.html","796898a5d45394724bb2ce14f1731804"],["/categories/Advanced-Swift/index.html","f3cf29a2fb329e014b9241b8bc45d9b0"],["/categories/Advanced-Swift/page/2/index.html","de0609c096b641ec4ca83ca89ed6250e"],["/categories/App-Architecture/index.html","8483607d3955f5f449dfa49f172de090"],["/categories/Array/index.html","73991da93bd8bb6f9df83e53597d3f44"],["/categories/Codable-protocol/index.html","3c351c7fa5a5270a58a1465118a75484"],["/categories/Combine-framework/index.html","06fa02a5cc20c3311a995b13b22207aa"],["/categories/Combine/index.html","dee2a64f6fdc7c06e6c33d07a000c9d0"],["/categories/GO/index.html","f1462cc4f5c3b413779d4c3e92a779a8"],["/categories/GRDB/index.html","267b02f31a0890d4514c52fb00bf2bd5"],["/categories/Grand-Central-Dispatch/index.html","676c34d6b87a572d1544955fc825266b"],["/categories/Hexo/index.html","6202313537cd2bae8d4775b14520c5bf"],["/categories/Homebrew/index.html","53cafd1b13d804db3db6ad35dc33b0ed"],["/categories/Linux/index.html","dde5d50683029647030609fbb7659146"],["/categories/MySQL/index.html","72c000f3a1c60f8d352c3d523bac54c2"],["/categories/Promises/index.html","6d2fe4066ac953d691411e0c4f01112d"],["/categories/Protobuf/index.html","95bd8d2aa86ddda3ecd39081bffcbdaa"],["/categories/Result-Type/index.html","4ec8fe44479d09907a5b0fa9438055af"],["/categories/RxSwift/index.html","27889c0a80c0752b0229b866728519c1"],["/categories/Server/index.html","cfdae4796a849565c7c77ac2c1fa264e"],["/categories/Sqlite/index.html","0f0f2b4ed6c0778fbb0533bb31cd7927"],["/categories/Swift-Apprentice/index.html","4708dcd9858e8179409e58892472f65e"],["/categories/Swift-Apprentice/page/2/index.html","67c6d567fd4a6fee1204938ea44a9f84"],["/categories/Swift-Apprentice/page/3/index.html","30fce22d22ffa921159f5ff9a6dd3015"],["/categories/Swift-源码阅读/index.html","6876f1c341fc9ac0f3ebb4049413e806"],["/categories/Swift/index.html","e7c46aad8678030ef71c89490140886b"],["/categories/Swift/page/10/index.html","6cda85f74ae091b1cad4b0f59d56367d"],["/categories/Swift/page/11/index.html","fda671657ba303a762f21384b21e9370"],["/categories/Swift/page/12/index.html","10ff3a8ac01f2f94ae1b942311ce0a34"],["/categories/Swift/page/13/index.html","91f1801ec786291daf1f965279dbf69e"],["/categories/Swift/page/14/index.html","140d55b3c4b88bd191a32cf578ee241d"],["/categories/Swift/page/2/index.html","09ff588f0105c141dada301fc4711412"],["/categories/Swift/page/3/index.html","2a2ffd081512263b46ad84bdc2ff453e"],["/categories/Swift/page/4/index.html","eb6d355fe6a33ffa4b26dd03aff73471"],["/categories/Swift/page/5/index.html","c2788a69d86c7cced60fcc4302af9226"],["/categories/Swift/page/6/index.html","5161fb394a173fcd364610c081a5dae4"],["/categories/Swift/page/7/index.html","330453408ca73fda521432c7f49df022"],["/categories/Swift/page/8/index.html","0492b80919ac3b0f66c43d835651ae5e"],["/categories/Swift/page/9/index.html","3840ac385a6ab1034857df1122be9d65"],["/categories/Swift5-2/index.html","bf20e934d73094487442cffb8a22d482"],["/categories/SwiftLint/index.html","02f93df54f28bb17c979977d0339b2be"],["/categories/SwiftUI/index.html","3ae8bfff206165ced76bf92b7c10415e"],["/categories/UICollectionView/index.html","afd94e8305fc430f6fe6a97cca285ccb"],["/categories/UIImagePickerController/index.html","ce6713fe4bc852615138a5cd7ea7e8ed"],["/categories/UIKit/index.html","b2eff9a3ac3737f5d5393f1fa11de6a8"],["/categories/UIKit/page/2/index.html","9f2d55e7e9ae6a163f40d9c865a72903"],["/categories/UIKit/page/3/index.html","711af5b44ab2b87a60ce23a5155af7df"],["/categories/UIKit/page/4/index.html","182363811f7b554ca37b429715b162f9"],["/categories/UIKit/page/5/index.html","a20971ca4ac5cc5639af0bce504d02d6"],["/categories/UITableView/index.html","1d086e0fc40491aa54309cea670d882a"],["/categories/Ubuntu18-04/index.html","200e98d3777688b683a98bc24b13e6e3"],["/categories/Ubuntu软件源/index.html","5983ac85b2ee0f2021a2660aad83eacb"],["/categories/Uniquely-identifying-views/index.html","64954f84e27abb16054bdfa44de6b6c6"],["/categories/VIPER/index.html","4649468afd3c429f8b590d870a9318e1"],["/categories/Vapor-4-0/index.html","53214703ba4874c9162ebaa2627a955c"],["/categories/Vapor4-0/index.html","c61ab4117c06e6e396f1b0aa172bd799"],["/categories/Vim/index.html","303c9546483205597d9e4c1b8f279059"],["/categories/WKWebView/index.html","20366c082c871d20c4384b9b6d5a9c53"],["/categories/Xcode/index.html","b07e58b1e42ec53196343e0e951b0602"],["/categories/appleOS-Networking/index.html","25c9c22a8333a2f2edcff2cb9ca3badc"],["/categories/bugly/index.html","8bf89de839d525fa053924efd94eff47"],["/categories/enum/index.html","b5fc4118554db1d083e6f2ab8249994e"],["/categories/git/index.html","378e415f364fe3862a6361d0fadc0d59"],["/categories/iCloud/index.html","5a0cc23b0f319108adbe2e031b06a80b"],["/categories/iOS/index.html","8b3441158a9d329b8574eab5ceeba667"],["/categories/iOS/page/10/index.html","e354812711ad8ab801e5f29d49dcf907"],["/categories/iOS/page/11/index.html","7a8606655ba3b33ae9481f4f387b68b7"],["/categories/iOS/page/12/index.html","5862f0897f668ed345163a0a31c23d08"],["/categories/iOS/page/13/index.html","c980243a486a0a36e191c503accbacd1"],["/categories/iOS/page/14/index.html","a6ae13b76efb1a5b87dd6b0fe3d6256f"],["/categories/iOS/page/2/index.html","ec62de6c23fcb711e2a3196d9f41d31a"],["/categories/iOS/page/3/index.html","e812e525815a2e21e3a4696980a223b5"],["/categories/iOS/page/4/index.html","dfc43758f29b5c649cee7fdd889fee9c"],["/categories/iOS/page/5/index.html","6f80ccde61c51fdcc641381f5e93a21d"],["/categories/iOS/page/6/index.html","f571c5f9fa27f38ee09b2ca832461fe7"],["/categories/iOS/page/7/index.html","81e16c86fd184a1d5b267883da3fd24f"],["/categories/iOS/page/8/index.html","50aee379eeb5b17f1ad1664d2d37317c"],["/categories/iOS/page/9/index.html","0cea53ac1362df8778848036fc199a09"],["/categories/iOS面试题/index.html","516fa2759c6df74efd7c286cbfdbdb2f"],["/categories/index.html","702d43e380e1a1a89dae46420fed67ab"],["/categories/random/index.html","1657a9a5f19e186baa336b38f960064c"],["/categories/三方类库/index.html","f97a7d96623edd5b858a9b49d7b7e959"],["/categories/函数式编程/index.html","3d80f89761bc770612ea5063904295e7"],["/categories/子类化样式/index.html","998189d4031d7f32f047c996c1b2aa1a"],["/categories/开发技巧/index.html","8208ad4a54fd5e134c454fb0d806ccd4"],["/categories/开发记录/index.html","b838685777d04d8b6b000d5dd78af46e"],["/categories/技术支持/index.html","c079b8f9363b5e8a144e61483f452cfd"],["/categories/数据库/index.html","6eaede920962e5022e24fdf643b5970b"],["/categories/架构设计/index.html","350d7f683680a6cd163786069b6e25c0"],["/categories/测试/index.html","43569d22368e1e0ea3ec1e3f822813a9"],["/categories/用户体验/index.html","640d0e8655f8d14e749ad3f871462d98"],["/categories/用户协议与隐私政策/index.html","1264150dbc03bdc8a4a2846d536dd353"],["/categories/设计模式/index.html","79f2b53d9bee065818c641f5f026c6e5"],["/categories/设计模式/page/2/index.html","5b1e546e59d6f97004e6bc92edf881a0"],["/categories/设计模式/page/3/index.html","d9243c775299529510fa18357c8ceef5"],["/css/main.css","a279e4151bca8d640f9b3422b9123a1b"],["/hello-world/index.html","9dff9f7a5168b24c82a6a62d27e676dc"],["/hexo部署失败/index.html","c48e31d8bbeac49ff44c1706acca7cb0"],["/iOS 15 适配/index.html","54bce14fb25ed253de23ab1ceee2981f"],["/iOS VIPER架构深入实践/index.html","8b61d804379df41948e83e8568400ac7"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","8faf31dbcf8efb7375e8085918dfdb35"],["/iOS 自定义视图，输入表单和错误提示/index.html","a372653f58a4f37b0e6fb80458d7c367"],["/iOS如何使用iCloud文档？/index.html","5c106738b4d0a95ec396bf5ee198db6b"],["/iOS子类化样式/index.html","74831bcfd3c7ab24f2aaf88e939ebdc1"],["/iOS开发记录<一>/index.html","19d8ba8ea388362fbeb96456b2824a41"],["/iOS自动化布局编程/index.html","98257625f2988243abfa231ef0e14491"],["/iOS自定义转场(By Swift)/index.html","1bff2683cc547cf3aa3d20e178be4709"],["/iOS项目架构：使用VIPER/index.html","05f28f995751c2ccb1e1c3b72cb82cc1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","de09c1c140410d87ead3f2d6d51f71a9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4d4d79ccfb49bea0c99f255eb24a117e"],["/page/10/index.html","e8af488365ce4a53fa95d0c21d0e78e3"],["/page/11/index.html","e5ef6a5a96d67d22a7ada8c276775672"],["/page/12/index.html","b15250bbec7a17bad1cc749fca61c56c"],["/page/13/index.html","75d4ffed8e94ec10ad5471e3cea5deff"],["/page/14/index.html","58031312d7fc341e14d842d323026a89"],["/page/15/index.html","e3668ad24ed2ca389aeec7eae6a53a9f"],["/page/16/index.html","b456882b8a8ae083a5fcc0415b8a6290"],["/page/17/index.html","ca495d6f36ac38d52525030b4c8b2e22"],["/page/2/index.html","0d009409694de2b1b4a043ecd8148fdb"],["/page/3/index.html","c345fd00ac53bed4ab7979e223dd4b5c"],["/page/4/index.html","b396aebdb593e49bb5aaf6555ca3528d"],["/page/5/index.html","2bbb7e72e69a0ad40ac89e65148012bc"],["/page/6/index.html","3eda8212df1193cb538a6b7e7900dc90"],["/page/7/index.html","cd485bd38fcf478b079be7897e92bda6"],["/page/8/index.html","be885e8be0ee6c13a847fc380417b21f"],["/page/9/index.html","ae1651ccc543c2d867145e7e75e9fd7a"],["/schedule/index.html","ed0efb18e884e60a976979f50ba28c28"],["/storyAppPrivacy/index.html","c51f07607b635cf2fc3815f83bf9be22"],["/sw-register.js","62cb2ca2753e24bbf6909a81e5fa1d18"],["/tags/Advanced-Classes/index.html","a2d8ebb7e25361d4b9248015060972a7"],["/tags/Advanced-Swift/index.html","c05a0afbf71e016f579b82866e176417"],["/tags/Advanced-Swift/page/2/index.html","85852e07c7f324fb5e8d5b4a90d4c65f"],["/tags/App-Architecture/index.html","745be081112513b36a772c1b993b4308"],["/tags/Array/index.html","997a873cb6e67e091dc049a849114970"],["/tags/Arrays-Dictionaries-Sets/index.html","eb1d6d0d8ca0fd0effcac528298c8cfb"],["/tags/Authentication/index.html","d13165e8b6336716497a6e9bd4c0984c"],["/tags/Build-in-Collections/index.html","dc3f97c6c76e0de76295d588270c5bca"],["/tags/Building-Your-Own-Types/index.html","d6159811ec8da0a9caa9c91c18bc1c03"],["/tags/CMS/index.html","f04da6f0a1e6cddd722118bef48651fb"],["/tags/Classes/index.html","0a477dbc71b7d684a5c3b4c2738f3c35"],["/tags/Codable-protocol/index.html","bf21f1b50134bf896bba3c00006cd9a8"],["/tags/Collection-Iteration-with-Closures/index.html","9c75b2dab90624bde8034b5d1c14aa51"],["/tags/Collection-Protocols/index.html","13792a16da53ab1552779c3d1c622eac"],["/tags/Collection-Types/index.html","fa888ccdd8611d7cba6d786f3c66a42c"],["/tags/Collection/index.html","005d3c26c78d7868b3578991b5af02bf"],["/tags/Collections/index.html","35f43e103574aaf0736f8c44c4baeb96"],["/tags/Combine-framework/index.html","38219ebcce464737ee74c423d1d1fb04"],["/tags/Combine/index.html","5292126c0d00f0e2518523376963b94b"],["/tags/Dependency-Injection/index.html","9213f963d76e6d3633790f7b5e2140b4"],["/tags/Encoding-Decoding-Types/index.html","3918bf6ea16153679a787ea2de36e0a9"],["/tags/Encoding-and-Decoding/index.html","45af77f82391d34953ad00fc6f50ed33"],["/tags/Enumerations/index.html","79efc327534982a34fe9c867bd9d1ed3"],["/tags/Enums/index.html","b4d5144a2d8c0da5467d229877fd64bb"],["/tags/Error-Handling/index.html","2aca70179230c300f38291283db676cf"],["/tags/Functions/index.html","2a4bf30f067cdfcab9bab36f1245512e"],["/tags/GO/index.html","227b39ecfbbd7a24566764848f22ebb9"],["/tags/GRDB/index.html","da889d6508a8b5c971ab71a8658abc23"],["/tags/Generics/index.html","14dab8702a08fa5f41248055ebea30ac"],["/tags/Grand-Central-Dispatch/index.html","b0302b8f6a5e4c54ec9fea6d9a795070"],["/tags/Hello-Vapor/index.html","def46d28fcbea087851e8bf58b91cddf"],["/tags/Homebrew/index.html","0fe7dfc64e0dcba5e82971723d4acc24"],["/tags/Interoperability/index.html","91377da014df642783defdb5e616aaf1"],["/tags/Introduction/index.html","d849a898fad3910b2e242b96b0b1b914"],["/tags/Leaf/index.html","55afb570baa4a06f4858d8b8268b3c38"],["/tags/Linux/index.html","c3b40294ff7030002c503b891af06b18"],["/tags/Methods/index.html","c14aa57f950371f74aab9c1844c5663b"],["/tags/Modules-And-Hooks/index.html","299e72fe8479f49cc1e52c46d8931cc3"],["/tags/MySQL/index.html","001058400aac2718aad93bab9ef335a8"],["/tags/Optionals/index.html","2458ff114f2d1bc007714e0fba14c91c"],["/tags/Promises/index.html","47defa402c03184ce51ca3b7e0fe6727"],["/tags/Properties/index.html","e569be26330cccd6e720f11d776c6d0e"],["/tags/Protobuf/index.html","4d66518c4d0f66080e191033e6173cc7"],["/tags/Protocols/index.html","e4f787dc58afa9bf5a875d30f0428444"],["/tags/Result-Type/index.html","0f8559d6f2b051d1fa2d0e0ef221108a"],["/tags/RxSwift/index.html","5294335dbeaf23ff23b3cda9c64de724"],["/tags/Server/index.html","7b799c0dd1729517afeccb912ca4c91e"],["/tags/Session/index.html","03623dd7a84df33471fd3ed422cd4c10"],["/tags/Sqlite/index.html","662c2470d1465a1b12a089b8c584fcb9"],["/tags/Strings/index.html","c0257b210665a06c82047bb4d70a9c2b"],["/tags/Structs-and-Classes/index.html","1dfeff6725596ca36d235a190f0be216"],["/tags/Structures/index.html","2cb12204e94f3951f1d10dbe1025016b"],["/tags/Swift-5-0/index.html","673ff5f177baf79012e78a3bd8ea4098"],["/tags/Swift-5-0/page/2/index.html","b6ff63f6714e88ef5fa61e4390ea55f0"],["/tags/Swift-5-0/page/3/index.html","c8952ff072ed22e4646dda6acf6abb9c"],["/tags/Swift-5-0/page/4/index.html","df80a71c3f4b643ae174c72c48cdf661"],["/tags/Swift-5-0/page/5/index.html","94f6c8da70debc9266b82e7f36cd9888"],["/tags/Swift-Apprentice/index.html","6e673472555214f1e3b6b500ce737a29"],["/tags/Swift-Apprentice/page/2/index.html","f647e8272c73d91cdde2ac4bf05f7e7e"],["/tags/Swift-Apprentice/page/3/index.html","a2ddcbe35e9f52e96bdea1fecf9fcdfd"],["/tags/Swift-Package-Manager/index.html","b5fe4cc49261204cd8be33f09386ae24"],["/tags/Swift-源码阅读/index.html","be2426160662b65396bf9f876f694fa7"],["/tags/Swift/index.html","4e451e7a1b7fd67c099132ce961d111b"],["/tags/Swift/page/10/index.html","247837f1ab60714d6c376a46c967923b"],["/tags/Swift/page/11/index.html","82cd4fa71b353e16add634e831914618"],["/tags/Swift/page/12/index.html","8022273aec4d4ea2ee41a64b5574cbd1"],["/tags/Swift/page/13/index.html","5ba1c147be86dc6e4dc1775eabb2b3af"],["/tags/Swift/page/14/index.html","b8702f7490fcdf242137614adc65e70d"],["/tags/Swift/page/2/index.html","1e20c20aa7ae719f20d310b1632d726f"],["/tags/Swift/page/3/index.html","796b43916703ca0a7a9f9f7170c56a12"],["/tags/Swift/page/4/index.html","03fe1242714a97a6ac5f9834bd705155"],["/tags/Swift/page/5/index.html","8e28c0b4a5e4d50ffc3f24b50ef508f3"],["/tags/Swift/page/6/index.html","c728698ebf3f004588289bde8463aaca"],["/tags/Swift/page/7/index.html","cf2ee828a3ffe34a9d1d733afe85adb9"],["/tags/Swift/page/8/index.html","905e341063244c61c05a58f52b201a8f"],["/tags/Swift/page/9/index.html","21a88f2b19a60b3659d2a6b483bfba7b"],["/tags/SwiftLint/index.html","7e9178ee8d56fa8ed1e042517e0a803c"],["/tags/SwiftUI/index.html","e444501e3efe1b36b1dbd3b648b22b45"],["/tags/UICollectionView/index.html","6519b42ac7c3d9d5a7970a05742a2ca4"],["/tags/UIColor/index.html","54a2a9dddb2c0069d83caf2ce34c614b"],["/tags/UIImagePickerController/index.html","bf0a6c079edc175fae925be4caefdca5"],["/tags/UIKit/index.html","66878694e8d648b1db8657a861cb967e"],["/tags/UIKit/page/2/index.html","b89c2aff4519b537967088997a7ea359"],["/tags/UIKit/page/3/index.html","e9596e4dbd87dcc5c7cd029d22e0064e"],["/tags/UIKit/page/4/index.html","415b2a53a3d70c8bfffb5367c99160c7"],["/tags/UIKit/page/5/index.html","7eb7d18d2494daffee8e857962258963"],["/tags/UITableView/index.html","9fed22441b0116b8ed99eed23a4487a7"],["/tags/Ubuntu/index.html","1939394d158c8d92651f3968e52e811e"],["/tags/Uniquely-identifying-views/index.html","64ded1a46011bbd9815ff225bdcd8cd2"],["/tags/VIPER/index.html","379b42d1724aa86266d4be77605f42bc"],["/tags/VMware/index.html","c697013d55e6237710a277bf42350945"],["/tags/Vapor-4-0/index.html","5d62599068323eab6e27731c37bd19dc"],["/tags/Vapor-初探/index.html","c160a1b03d00e4c820073c46ada28ba7"],["/tags/Vim/index.html","47ac69b4d69a33ddf9b5b8b793e14c5b"],["/tags/WKWebView/index.html","445f7a6cb0447f582170d56acd82f2f6"],["/tags/Xcode/index.html","4a2523308e9082e8e5139400c3da9a93"],["/tags/appleOS-Networking/index.html","8b4fb40796041e1f29c2a2d85e219644"],["/tags/bugly/index.html","8000350b07efb65a8ab815b8e8341e10"],["/tags/enum/index.html","25d91da8b5e662c1d07860320491d5d1"],["/tags/git/index.html","17aae4eccd896b0049d949cc6bcd9b50"],["/tags/hexo/index.html","f0f5e7e7c2864821a1459ad945212580"],["/tags/iCloud/index.html","5b8892b8c42aad663476abae3672fe35"],["/tags/iOS/index.html","d8f804f38286320cd88b3479e86c2b88"],["/tags/iOS/page/10/index.html","0e438f69db499d2062b652d1ec8c1340"],["/tags/iOS/page/11/index.html","c19a5763a4124af721529a3d9493ccb3"],["/tags/iOS/page/12/index.html","2d13c25addded1785d4e1b97272b5577"],["/tags/iOS/page/13/index.html","913e3bfc665cdff1fd87558065e729ba"],["/tags/iOS/page/14/index.html","d833c9d2824d9a3ddb766baa340444d9"],["/tags/iOS/page/2/index.html","2a54300be481e83738a28fca0804e224"],["/tags/iOS/page/3/index.html","5be3014227ebe72d864a4dd3d69937d1"],["/tags/iOS/page/4/index.html","012f3a5e355b4395edc53a2cec5d03d3"],["/tags/iOS/page/5/index.html","31d8b30e565294f93d9307f8fdb648ed"],["/tags/iOS/page/6/index.html","bf66bb2dbb5502c1cf85abbb4e0368ea"],["/tags/iOS/page/7/index.html","aa3b26c7b8b1be4de55f95829d5acdcf"],["/tags/iOS/page/8/index.html","85ec71bce3a0af059ab1c701d7b7ad60"],["/tags/iOS/page/9/index.html","fa5c949f721adbd4441a5b2509d6640a"],["/tags/iOS面试题/index.html","e1123a037c67f6b3542c8e849924cf7d"],["/tags/index.html","a4744d58b2aa582299c5b29bb3108eee"],["/tags/non-optional/index.html","fadc9f0fa3da80cae09b15aa0d415d92"],["/tags/random/index.html","c56c26a2781506893fcabf077d7be8bd"],["/tags/transition/index.html","284439d2225aa6a30cddc5904ddcc788"],["/tags/三方类库/index.html","950ffd837a03d43b123a8c0cb139fa13"],["/tags/依赖注入设计模式/index.html","7e78942fcff2247428057d3ed8715a8a"],["/tags/值类型和值语义/index.html","a0c9c1ee72458067e49eca1cba7bd9ca"],["/tags/内存管理/index.html","67493cb8251b5cb79733df43fd6e3c76"],["/tags/冒烟测试与回归测试/index.html","bca3ed95fe1a160a59aeb40e4e1aa337"],["/tags/函数式编程/index.html","29cddcd5e0772e488b15e83f79ecd39f"],["/tags/创建博客数据库/index.html","2de9101021d7c6e144ffaa33aa9f6473"],["/tags/初始化模式/index.html","03fbc10cdd35225807dbde45761a94e5"],["/tags/单例模式/index.html","48473b08d546e4ecde4f4d869152cda0"],["/tags/原型设计模式/index.html","5bcdc379cf3b5c56b000c61d621d8fdc"],["/tags/命令设计模式/index.html","759df16ea7676581662ef5eb19068ed7"],["/tags/基本控制流/index.html","5aa2b0ed684c7dd3eb814805f007dc1c"],["/tags/外观设计模式/index.html","909257e74ce2e20931c16977412c60de"],["/tags/委托设计模式/index.html","d2c18952c717ec8532a8b3ee31b199de"],["/tags/子类化样式/index.html","cb888c3c7a0c77ddc928609d27288bce"],["/tags/对象池设计模式/index.html","7500a8b664a2ff8fd9815a29de0cfc8a"],["/tags/工厂方法设计模式/index.html","24342ae900f7db500685dbdd625795be"],["/tags/工厂模式/index.html","d689c9c659a53c5431438477e3f5bd7d"],["/tags/工厂设计模式/index.html","d976de2125a9568f32c101a10f3045dc"],["/tags/开发技巧/index.html","0e59c86df3790f02f1bfc0b87b272833"],["/tags/开发记录/index.html","55f876b769bfa198b8bf073e5b02609f"],["/tags/懒加载模式/index.html","bcd5aa7f8d633f9e3c289e1195b04131"],["/tags/技术支持/index.html","c5ecb9895be2f396b74caefd264caf52"],["/tags/抽象工厂设计模式/index.html","e91d00ae2c39cb24a9f06829dd01c85f"],["/tags/数据库/index.html","f2e790778024d72425af1d493cfebf52"],["/tags/构造函数/index.html","67431108ea320803a0111d1406f8f9b2"],["/tags/架构设计/index.html","53a19342b6b9932092d30607769798c4"],["/tags/模式匹配/index.html","2834d4994e8b257d9124686cb291817c"],["/tags/生成器模式/index.html","a2b48db986b5106a987bec495d6fef91"],["/tags/用户体验/index.html","0e5318c0517188a210f54e4bcba62015"],["/tags/用户协议与隐私政策/index.html","f3b7aa1092619766834e6686bd8d4d58"],["/tags/类型与操作/index.html","7d19d2bce09c90fad6589d3406ceeaad"],["/tags/自动化布局/index.html","1edfdad4dae06343bad29c094285505b"],["/tags/自定义UIView/index.html","b3e15f58b9e7febb49c1d35c02d7fc3e"],["/tags/自定义转场/index.html","f4be9489bad80be7cfd95705d3b94b32"],["/tags/自适应布局/index.html","573bc4709f55b17bb7c97804bce8e8b3"],["/tags/表达式、变量和常量/index.html","84e8ce1aa6f209acc73464030a3c636e"],["/tags/设计模式/index.html","9174b62f54f2d27e7124582b4f06b201"],["/tags/设计模式/page/2/index.html","56929dba94422dae895e6e77af543511"],["/tags/设计模式/page/3/index.html","871fcabfdfb7d3c15d6c35d77116a1d8"],["/tags/访问控制和代码组织/index.html","2bbc17da6ef90d45f4aebddc2f0bee17"],["/tags/运算符，下标和键路径/index.html","22efa228a174feb4e482ce674ca9bd6a"],["/tags/迭代器设计模式/index.html","03eedd5d1eb83de57b11150359e31562"],["/tags/适配器设计模式/index.html","3c03dcafb4d51008fd77747db72f55a0"],["/tags/错误处理/index.html","261155a8fbf4f1b2429cf22f44ff28f0"],["/tags/静态工厂方法/index.html","139262b6d091fce325d68bb257daba72"],["/tags/面向协议编程-OOP/index.html","25d1cce27321b4951d499e7da901048b"],["/tags/高级主题/index.html","e84d4d1fbba716e42b95139f809c3e51"],["/tags/高级协议和泛型/index.html","ed4fb45eff33816d6c574f1e83027e11"],["/tags/高级控制流/index.html","b09ff36a4789eb03a9685d2a474da68b"],["/xcode 常用的快捷键/index.html","e6cf9c0e6dc13e5db295a4910d10c54f"],["/为iOS应用构建输入表单/index.html","5b134e3b92da7d47ef458ac926a36486"],["/产品开发的幕后花絮/index.html","6bf2fb00819b7b692f9efdae1cf7cadb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","84f1a1f07f18ac150e8c754b61cca411"],["/冒烟测试与回归测试/index.html","67434a22499161534b82d42dec18bd54"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","402481426bc61cd622cbe98771b33189"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a86ff673dec660fa3f9999c093f4b8ca"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5538c1d06adc9bc294ce70ab96d0f263"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","732860da0a94fd033dc7b1251d6ac481"],["/在Swift中创建自定义集合/index.html","537ddc8b616154122c497bb21f1c98a1"],["/在Swift中处理非可选选项/index.html","be40295fcf2c5f1b249a88890f2920ce"],["/在Swift中生成随机数/index.html","f1735df04b190eab061c4b0e4f29403b"],["/在Swift中重构单例模式用法/index.html","c8f881c38a5330288e3bef9aef67e524"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","2bd15ffef19cbbd0dce94af918fbbd80"],["/如何为VIPER编写服务？/index.html","8ba02decb7f2bce6077be3d0605c6deb"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","49abadefb0b8891c0701a87740c7b9b7"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3c0f4fad9f5e9ec868e113ef77da9974"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","86f28cc5641a52616b1e5daa0467f343"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ecfdbed45e578c473fbd518851cc2c13"],["/掌握VIPER架构/index.html","36afa6cd4d716f17e9ce6e2c84bc62ae"],["/揭秘 WordPress Hook 系统/index.html","39b6fe476cd8ea96e4d48e9846cd9d37"],["/比较工厂设计模式/index.html","b769fe68fb92f96872631ffb4122aec6"],["/深入了解Swift中的Grand Central Dispatch/index.html","97559157bad581998743127d5d9447e6"],["/深入研究Swift框架/index.html","d21cb87de01fa553db417226f27f5e01"],["/美豫直聘技术支持/index.html","93296a4279d7d5bda8848235ac61016a"],["/美豫直聘用户协议与隐私政策/index.html","6e57685f968f25cc6c3d01d69cde94f8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2bc925ff45f5d58cb5d3b3994b13b8e6"],["/选择Swift而不是Objective-C的5个理由/index.html","8db60273d223357fe3bf8907881b3ea0"]];
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
