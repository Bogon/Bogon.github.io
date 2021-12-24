/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","d78122f612642bc73b14ea21962601a2"],["/2020年iOS面试题总结(三)/index.html","2e5e485886db016bb40bb73069fb1e69"],["/2020年iOS面试题总结(二)/index.html","f47e6c42912e33dea93daa65cc1d746b"],["/Advanced Swift系列(一): Swift 简介/index.html","08ea639aa9793e9ab7438669316f1b98"],["/Advanced Swift系列(七): Strings/index.html","a6ee49084da9b87f384f019a9aab18e6"],["/Advanced Swift系列(三):  Optionals/index.html","ebc5a08ae60bf6f48d835f22720d02e8"],["/Advanced Swift系列(九): Protocols/index.html","a9f767420f4672309491a525f2a93233"],["/Advanced Swift系列(二): Build-in Collections/index.html","91595d0e844f1f8e9d460946f0856654"],["/Advanced Swift系列(五): Structs and Classes/index.html","083d7aaabdabbe3cc25b84720e0914a6"],["/Advanced Swift系列(八): Generics/index.html","5061ffeb40fa1ae0733d447dae85281d"],["/Advanced Swift系列(六):  Enums/index.html","d5f075ed219a78dd693a6131ad1df04d"],["/Advanced Swift系列(十): Collection Protocols/index.html","59777a73fffd610a17625209352c97e6"],["/Advanced Swift系列(十一): Error Handling/index.html","ab9735ac8262fdc343bf7a01319a8488"],["/Advanced Swift系列(十三): Interoperability/index.html","711fd98be997d1cb0d5a29f675b100b7"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","de8349d77c6eea01f1fa383d9bdf3bd0"],["/Advanced Swift系列(四):  Functions/index.html","1c46d0124c93561b8b997098bbb991dd"],["/App Architecture系列(一):  简介/index.html","f4271fbfef3a932e79b51a158ea03892"],["/CocoaPods 设定版本说明/index.html","97b52024d38e2d8378f2f40068d7688d"],["/Functional Swift 初探/index.html","d1b63ca7b32ada2d0f77845e74f29073"],["/Git 使用小技巧/index.html","5f269e9818a4a5fc71cfcf7de8a2394a"],["/Go Protobuf 初探/index.html","29cb94e29b600c4bde06295b7da28837"],["/Go mysql Tips/index.html","0c859dc319534a08299c4732b9cc73e4"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","8f0c25ff0eacdcb63c44625a3648e883"],["/Go 入门篇：2、Go 实效编程/index.html","531074891e28b6a7a206ef7889159f91"],["/Go 入门篇：3、Go 重要概念/index.html","cdef1910acf6d3d83d8753bc6f04e43e"],["/Go 基本语法初探(一)/index.html","09c84cc7711d9f594a74fb9bb38cb57e"],["/Linux VIM 命令及操作小结/index.html","3686d618c8e758e6dd103d4de836a894"],["/MySQL 基本操作/index.html","4237fefc76d0b46db9899515489066bf"],["/MySQL-列类型和数据完整性/index.html","7a9c752a2cc2b814778a44b68ecd6347"],["/MySQL-数据库设计和查询语句/index.html","dcaae4885daae6d1a6a19cb330ed4ee7"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","6717046b1898ca82836763442f8ae832"],["/NSCODER和SWIFT初始化/index.html","448162dc078888fdf220c3b88783a8f5"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","bd9395c463e06679fb078f411c1ff2e6"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","e58b2de09dde8d4be23356c65af70801"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c0247c47190285eb3f2edbd0b9ce0f53"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","6255e88eeba74593078ee99c44787613"],["/Sqlite 使用Tips/index.html","537346f06e6d7a4201363f3982c8c62c"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","4caab203c0e2e1b49fd6eb41ee36b803"],["/Swift 5使用UIImagePickerController拾取图像/index.html","1cbe20003d9955a7e8fe550a88657144"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","6aa26cb9a8f0c14095d38fb96cfe316e"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9093c73b08175aac0468f5c041d32246"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a16e3503b07d7648c1b834f5c5747b7a"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3dde718c2662d479acbb3b12cb0f594c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","33042ffc561c5b182bc79e9412615539"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","ce036c215ee1a9b1ec092aee5db03021"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","82cfd6c88712ceb02b63ddfdd8345a6e"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","2e3a044047d12e0805775b0ea0ba5276"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","51ba67c2bcdd13776bee7e4200db3bc9"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","440484f631b29797585928d8c755c739"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","ef1a61792fdcde8d587d0ad13ca9a85a"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","17657ebb1e024affbe50e725ca148e10"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6e8c7a18badb96b32919758a1175c6fc"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","1a4d02d40a91cf4e948ffacf4a6a382a"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","50627942ac9afefcf9aae43cbf5c80cd"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","016e4e348d32b9e8cec8f3f1610a8bfc"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ad43073d2d58e78c2dc310496b24dfa2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","db0df95227a675c1e055e2602a54f643"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","771dc8dbaa35824161d9769248b95e68"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","faf058161d4e8929d907de75530945bd"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","6941bab9d93d0cd718c0aa1e150a1bd6"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ab73a8b7966b30ea49aa2a3724693f2c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e08238f6ca7e57a68117f24af78db619"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0cae6f93b9a44f5f57644ff5833f1675"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","d66166bcc5fbe3c1fee1fd2ec1ab7eef"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","48781936e195a2a17fa25f02e341e472"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","40a08b2aff276ef8a107116f114313d8"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","a1f05e0ba87c6263a220c6d5f9c9cd0a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0b6e37c6d44383f0ba0fefe8915ec3de"],["/Swift CompactMap vs flatMap：差异说明/index.html","c344675738a84f894010a56f4d9193d4"],["/Swift Grand Central Dispatch 深入实践/index.html","ca954c1c9c4f09d504806de529e5873c"],["/Swift Lazy属性初始化/index.html","ddadcc23a7a00b3e53f4578ad4a7f402"],["/Swift Promises 初体验/index.html","1b275d46eb7015cf1d958f469575adc9"],["/Swift Promises 探究/index.html","740f5564d8285886f2d657d2cdd82675"],["/Swift UICollectionView使用指南/index.html","75da6108bd78c14ede11c8739942029b"],["/Swift URLSession && Combine framework/index.html","efb03fd4a827e8969e41181c5f55aa76"],["/Swift tips/index.html","e23d4673d8bbbe53e0249c0286cc6220"],["/Swift 三方库：GRDB 使用指北/index.html","0a8f7f798bdce2f16f4f025fb8ad3b50"],["/Swift 唯一识别的视图/index.html","0756c9fa8f7fbb17c1a24ccbd7eb621e"],["/Swift 如何学习现代UIKit？/index.html","073d10e7a24ad12fe2bf26cb01568fab"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","f49b15e61364ba4e6e613df83cce542a"],["/Swift 用 compactMap 替换 flatMap/index.html","30d6c6e3d1146a4d86560c616c505aac"],["/Swift 选择和播放视频/index.html","a98d2e35b3a451028ec39fbd4dcee6ad"],["/SwiftUI 系列(一)：1、 简介/index.html","90eb8c647028f001d0f475dfc25fc853"],["/Swift中UIColor最佳实践/index.html","7bab3e0d3f9fe81f158d2372d2d756bd"],["/Swift中快速简单的工厂设计模式/index.html","48d7fdae627dcda1f71153de3c15378b"],["/Swift中构造函数与静态工厂方法的比较/index.html","f7bd05a3c29c7e370d26ff1339809fa1"],["/Swift中的UITableView教程/index.html","e22c18f31c03cdfbd5491ec340c3ecc7"],["/Swift中的懒加载模式/index.html","2099227bc79f19cb3e68fede15e4ce9c"],["/Swift中的模块和挂钩/index.html","ad1cacc061aa165fa5efde47c3d0c682"],["/Swift使用布局锚点添加约束/index.html","54025b4eeaaec1bac46a35df8a11cff4"],["/Swift依赖注入设计模式/index.html","8318a6fe26a7a2edc957e29319d08674"],["/Swift关于Dependency Injection (DI)/index.html","e2cea8871cd048512af187b2e5f28279"],["/Swift初始化模式/index.html","df5db31dd1bac42dca9dfd729782d1f6"],["/Swift单例模式/index.html","e4c93e94f6cd43e1f35faa5f2e2c9952"],["/Swift原型设计模式/index.html","ded7a56871e2162042f4487f7acd32fe"],["/Swift命令设计模式/index.html","5d6efa2468ea97c810e63c0465153cb1"],["/Swift外观设计模式/index.html","430b8f41b5d986ce330594901b5abe9b"],["/Swift委托设计模式/index.html","8f9bc9495abf10d6f9233814d6b20702"],["/Swift对象池设计模式/index.html","8dff3f9df33911de1d451ca0af1ed92e"],["/Swift工厂方法设计模式/index.html","7b4951d4c3df036934f5d0257cac2b7d"],["/Swift带闭包的懒惰初始化/index.html","1af2eaf119bacaa1796b4338eb217717"],["/Swift抽象工厂设计模式/index.html","e7c77d172fe227c56235e250e51c1cdc"],["/Swift掌握iOS自动布局锚点/index.html","fb2f72f223c25207aebff7915e23889b"],["/Swift支持旋转的自适应单元格/index.html","70dbdc394401042fcb19c4234fbc1ffd"],["/Swift枚举值/index.html","8928460e948cc7bd8562422980049229"],["/Swift生成器模式/index.html","82b599f191dcd9a6d79669355d73b8f3"],["/Swift结合Xib文件自定义UIView/index.html","09d0fba833574504799777f5458cf02d"],["/Swift编写的20个iOS库(一)/index.html","13dacbe6715ed2011ddb2959fe4fe641"],["/Swift迭代器设计模式/index.html","5a3511b935abb53121e436c0a4f584be"],["/Swift适配器设计模式/index.html","7c68154a0bae53e676940dacf9db6261"],["/Swift静态工厂设计模式/index.html","29ca24e9da8dfb690592f5a7167669ae"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","98135d6e7d1634fd815327c8c9728328"],["/UICollectionView data source and delegates/index.html","3c3f8e0d3a8af37f53f334763cd300ff"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","cc3ea85eefecec247064a1f1293e63a4"],["/UIKit初始化模式/index.html","32a65913b2d1a4386b15fe7be281f9b0"],["/Ubuntu18.04替换国内源/index.html","23f22f3172ac640ebdf30f0569219b66"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","691b0ebdc3ace3bf7577d8c9c21be595"],["/Vapor系列 (一) :  Vapor 初探/index.html","0476334652b53e27f60f924cb2029844"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","95eb687464dcb50fe3f3f0d81b0b7804"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2cc24c7a026baf1df64be29023659ff9"],["/Vapor系列 (五) :  使用session进行authentication/index.html","f5740e5d97383cd8b7f9d440929c04fb"],["/Vapor系列 (四) :  创建博客数据库/index.html","addb7a48505090df75d7c939b1848879"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0bac6b633b8191e77c2424ddf9126e0d"],["/WKWebView与Native交互注意事项/index.html","2a3a263f94dc8e998aebf037414eec33"],["/Xcode扩展/index.html","7350eff8340fac3ad26369c3bd3938eb"],["/about/index.html","ab842c7207f66fa1fe6df771b1bd06f4"],["/appleOS的Networking示例/index.html","e61dbdd7616d810e9af8d999cb58649b"],["/archives/2020/03/index.html","e6ea94e4f1d0a032f8fd51cd2d269d90"],["/archives/2020/04/index.html","88249e041cf74c2042a519ab1fadb79b"],["/archives/2020/04/page/2/index.html","abc7f488991eabe4322713ca4f7dcc4e"],["/archives/2020/04/page/3/index.html","bd566ac884ff72e972fee14e75f4611b"],["/archives/2020/04/page/4/index.html","70aadb20b12e8fb123fefdf5a1a4865d"],["/archives/2020/04/page/5/index.html","6a8dc75f35952bd2e8aace9760d5c145"],["/archives/2020/04/page/6/index.html","4756a0399a15754a0595877310d80968"],["/archives/2020/04/page/7/index.html","00587af81a8d090c51f7313e46f131d2"],["/archives/2020/04/page/8/index.html","f0ce13790dda771c6a258b1ae09bfb0e"],["/archives/2020/05/index.html","03cd4ec1a976ba08cbe833627f46d2dc"],["/archives/2020/05/page/2/index.html","8d501528146e513e363bf6c24d1f5ae0"],["/archives/2020/05/page/3/index.html","8fa4e405c772af434d1ee466c5b19a9a"],["/archives/2020/05/page/4/index.html","66add0bf1b08a4acd9e71abe47664ad9"],["/archives/2020/05/page/5/index.html","1dceaf0d73810f2641151dc7ed83c2a8"],["/archives/2020/06/index.html","b08cb4a4c0118c703e6c67189ff88b64"],["/archives/2020/06/page/2/index.html","97ec76cc582928e75cacbbd3c16a5ad4"],["/archives/2020/08/index.html","cb8625af133c2569fab7457834afec77"],["/archives/2020/09/index.html","9f17216a3e329262eb8f3f1a00061a96"],["/archives/2020/10/index.html","55175e33442cf99ac47b3d042f3e5344"],["/archives/2020/11/index.html","6735af3b0876c13a4dac909f8a872ff0"],["/archives/2020/12/index.html","19f583502905aaff3407c67cf77343f1"],["/archives/2020/index.html","2bd46e764e57485346959c821224d8fa"],["/archives/2020/page/10/index.html","590d4141294c746d06fa667449291c5e"],["/archives/2020/page/11/index.html","b4f29e332ad3616eea3310013230d1af"],["/archives/2020/page/12/index.html","7c18b1f926c0c9728085cf89c3b23e1d"],["/archives/2020/page/13/index.html","e448a94262bd41d3e2a95f09885ad42e"],["/archives/2020/page/14/index.html","a74c674fed2b820b6ac5424c7a7776fe"],["/archives/2020/page/15/index.html","32d6b5dccecc7e1629832ad47bdfc216"],["/archives/2020/page/2/index.html","ca4b6be3f2b657e0a043c1a3538dcc4f"],["/archives/2020/page/3/index.html","7d213bbb81a3c808c2a2d902e8f8a8f3"],["/archives/2020/page/4/index.html","64b46818c26012f7fe7713182ed3936a"],["/archives/2020/page/5/index.html","9134c30acc4eac37f1607afed7bbe367"],["/archives/2020/page/6/index.html","1688c4451bfc4d429cc64102eff88511"],["/archives/2020/page/7/index.html","9ea7c7111ba191c66183c5045d84f0e6"],["/archives/2020/page/8/index.html","058b3135a08c271d80c7c2cc9c5a1bcd"],["/archives/2020/page/9/index.html","9835c74dde7a307968b7233efe811953"],["/archives/2021/03/index.html","c58d337e5a5649fb3bfd6b96acb1be64"],["/archives/2021/04/index.html","0be66a051479ca081c282dcddf1b4f8b"],["/archives/2021/05/index.html","6b103fe823b427a61fae6f41d7c3b289"],["/archives/2021/06/index.html","2fe9a468a68287713b108b3cf0c36039"],["/archives/2021/07/index.html","092c292926ac13f57091155724a3f2e8"],["/archives/2021/08/index.html","61649a85056456a59d5f34f39d1b1b59"],["/archives/2021/09/index.html","d82345ab06f5315c212b5583092572a9"],["/archives/2021/11/index.html","da8d243c0ef71d63bd79c53f51267112"],["/archives/2021/12/index.html","bc3e7243e434bbed31b2ec41b12cac10"],["/archives/2021/index.html","5ab9d7edb47b96301e4c753ee33741fc"],["/archives/2021/page/2/index.html","3bf732924bfe39952e9ffba19fd35b5e"],["/archives/2021/page/3/index.html","5af2600fc6a710e3fa3c7c02bb2a4116"],["/archives/index.html","e7d1c86f523fb3b0a3a627548e05925b"],["/archives/page/10/index.html","96282de39308f5e78a10d86b4d3fc91f"],["/archives/page/11/index.html","4a962a71175ba147133650b3fd29b51e"],["/archives/page/12/index.html","df888c4ccb76d873e7ab281e672cf5ea"],["/archives/page/13/index.html","f157de2fa47b87474016c964c2910ce8"],["/archives/page/14/index.html","e5ebd1a514ca7d545c146d6dba41f410"],["/archives/page/15/index.html","e1a6d2e92c6d045d657efbc77a31f01c"],["/archives/page/16/index.html","496bd2d627ec239015c17040ead720e3"],["/archives/page/17/index.html","316eb3a007d70d7ad5e39e1ba7f0d249"],["/archives/page/2/index.html","aba5d0dc3c8a96cfa634aef25591f354"],["/archives/page/3/index.html","6a7581cc8ebc2eab7d3f870db2d690d4"],["/archives/page/4/index.html","934cac6ef1315fec3c72d0871dfab3fa"],["/archives/page/5/index.html","d256690842f096f28c5b8514f25e2590"],["/archives/page/6/index.html","d419b5581a513a0cef78c29f74363e1c"],["/archives/page/7/index.html","616082950d8f7e3e655a0c4c21dbf931"],["/archives/page/8/index.html","a134360f747da46b3a6d631972bad672"],["/archives/page/9/index.html","3f6d65d70d6ae91f56392dc5b9b6c2fb"],["/bugly 上传dYSM文件小记/index.html","69e64991faccce2340166fd697bfac8a"],["/categories/Advanced-Swift/index.html","d484cab793aada86dc4768d9f5636362"],["/categories/Advanced-Swift/page/2/index.html","e2cf99e4f5008c0bf20292e967abccc5"],["/categories/App-Architecture/index.html","ea475d502aa8c76a7fc9b583f4dd4393"],["/categories/Array/index.html","a3e8ff9e1eb24d096e801f6aa35ed9c1"],["/categories/CocoaPods/index.html","95dacfd4034ddbbfa7bc1c119c99c4a3"],["/categories/Codable-protocol/index.html","d1e6ee9bcfb282fb6b5c2ddb3835aba2"],["/categories/Combine-framework/index.html","b76b40a60e8d7b84eaa9ce79df84ab5f"],["/categories/Combine/index.html","ad2e9ed7527e68b45469b2afad2ff9c9"],["/categories/GRDB/index.html","9d6af31b28119d6ebcac00cf01fffddd"],["/categories/Go-入门篇/index.html","d5f2fa6f7d1834ae3528a712bd6741af"],["/categories/Go/index.html","2d8815179b1576af4525356ccdf9b05e"],["/categories/Grand-Central-Dispatch/index.html","4a3d59eb8a3743c38ea7281e9b1cbf36"],["/categories/Homebrew/index.html","baa49a20ca0e85d46f21563a4f7b205b"],["/categories/Linux/index.html","52165805ce7c530aac54948b73c28288"],["/categories/MySQL/index.html","4a75010f4c38037128e3ec2a39f47b10"],["/categories/Promises/index.html","9b8850bc3f585009b88bcf97bb6ced7f"],["/categories/Protobuf/index.html","c3ad9aa9167e870c1b7e111146a0c9c8"],["/categories/Result-Type/index.html","113b17f6dbba61284a5fb93c931024bf"],["/categories/RxSwift/index.html","89767fa16619980753d5c9242d0c99c3"],["/categories/Server/index.html","fd7b4ebd8c7363a441eb1eaccf36df22"],["/categories/Sqlite/index.html","d7d9a6b0157cb4ac23fe02279d31502f"],["/categories/Swift-Apprentice/index.html","d9fa79c3b15d06710861f66083af23be"],["/categories/Swift-Apprentice/page/2/index.html","f75b6af54b6faa727897e556f4848b4b"],["/categories/Swift-Apprentice/page/3/index.html","ff6be20ae93799af938e1a8ebe692447"],["/categories/Swift-源码阅读/index.html","9a1387b616c2584372c969ef51d5380c"],["/categories/Swift/index.html","796a177b910692bee8e70e87ccb2ea8e"],["/categories/Swift/page/10/index.html","330da91f5bae1f766faa1356c4db5b03"],["/categories/Swift/page/11/index.html","6080069c7c64d5357558442f15389d2d"],["/categories/Swift/page/12/index.html","e75f00364ad5849a155fa8665e72b887"],["/categories/Swift/page/13/index.html","1aceb3078ea6039eb8246eceb93b14a4"],["/categories/Swift/page/14/index.html","d9400c221d52937c10f6adacb142fd39"],["/categories/Swift/page/2/index.html","6a91124ba8d02cb785574c30044a2334"],["/categories/Swift/page/3/index.html","304dc0d5793d256cee412b87c50eda69"],["/categories/Swift/page/4/index.html","355e044990a45f5c42d1e67727df51c1"],["/categories/Swift/page/5/index.html","e1ca4ea07f1e0dcd38b42b7efe867990"],["/categories/Swift/page/6/index.html","65c93413e190a90ba7f6e58db92b0dd5"],["/categories/Swift/page/7/index.html","7f077c86a41e219a53ec84047bc69675"],["/categories/Swift/page/8/index.html","248d67ff2a60b428d9fbaee80225ed12"],["/categories/Swift/page/9/index.html","3fb2434cbaa4f4cefb37b94e3554c8ab"],["/categories/Swift5-2/index.html","8e71ef7747bc4f7e43694522a2eb7eb3"],["/categories/SwiftLint/index.html","7f7fc787f6afd361d8f7259426cb1c0b"],["/categories/SwiftUI/index.html","f32292b885a9852f6888c83df969c910"],["/categories/UICollectionView/index.html","612f88829e4c37a10a5b20c673dcf9cf"],["/categories/UIImagePickerController/index.html","4a52cf99ff90eb15ae56518012b56c0d"],["/categories/UIKit/index.html","84f6e883bd22cb1748488741b3ecd511"],["/categories/UIKit/page/2/index.html","146bde527ca3d7bd7ece369fe3344984"],["/categories/UIKit/page/3/index.html","554c33a954f3998030b2945dd47f06b2"],["/categories/UIKit/page/4/index.html","ff309ac308baa46e001ef783563facea"],["/categories/UIKit/page/5/index.html","4f8c3c2dd170ab978cb753011de5fa8a"],["/categories/UITableView/index.html","e186f3a2954ef95d6e3211e19405ebe6"],["/categories/Ubuntu18-04/index.html","fee2057a3a40df37d304d5378277be62"],["/categories/Ubuntu软件源/index.html","8c2d6c2e1495cd7cd4d22b8f7f24eb5f"],["/categories/Uniquely-identifying-views/index.html","8820cea75574d5904c77795b1ecd3299"],["/categories/VIPER/index.html","f8e2829ee15c90fa4c6e53b7bbd9a760"],["/categories/Vapor-4-0/index.html","7a7d75f14a600cbe333caca8b78c57a7"],["/categories/Vapor4-0/index.html","3ba9b4f2c7c802ed54b0c427b5ce962a"],["/categories/Vim/index.html","b2001cce5eaf189cc415bc24da5c1aa1"],["/categories/WKWebView/index.html","513e1bd4de377a372df5fab86a8427dd"],["/categories/Xcode/index.html","4c2113e8100833080b9410bd9067faf8"],["/categories/appleOS-Networking/index.html","da19e81e148eba0ee56e84cc56a4801c"],["/categories/bugly/index.html","1ad4f57224ec5065a1965150035a72a5"],["/categories/enum/index.html","8a9f27c10a9431fce2c6524e9d298945"],["/categories/git/index.html","02c2f030ec3e8b89543b765ff8100540"],["/categories/hexo/index.html","97b27243dabcd7a03190bd2c14e355dd"],["/categories/iCloud/index.html","97f3a774538d77d770c12283b251545b"],["/categories/iOS/index.html","abd133a00476a584cf581c6daec169bb"],["/categories/iOS/page/10/index.html","b172c9e89fb847089ebb80000ac974a0"],["/categories/iOS/page/11/index.html","f8b8e4b8e35cb25cfedf5bb51619a81a"],["/categories/iOS/page/12/index.html","0efd20157f979dcc2b6d17a8339bc4b7"],["/categories/iOS/page/13/index.html","4d4d3d7fa8bdeaad7050f63621344ccf"],["/categories/iOS/page/14/index.html","6608fd55e2fe594c1f41f10de4af087d"],["/categories/iOS/page/2/index.html","803e612ac85e4f5721fe5fe7f3bddb44"],["/categories/iOS/page/3/index.html","2e7a6bf322a8e71cd8b91f3eb41e0077"],["/categories/iOS/page/4/index.html","5b52394f1fe291878598b1ea99b50835"],["/categories/iOS/page/5/index.html","82a3ba420ee2493738133739135e3df6"],["/categories/iOS/page/6/index.html","dc86df350740fe3e7a075fb0f9bc4371"],["/categories/iOS/page/7/index.html","2b10a37ed1f345f612fef53cc6ba2221"],["/categories/iOS/page/8/index.html","dc3b710a80137e9527b7d314f2adb19c"],["/categories/iOS/page/9/index.html","919bb91d976499596310c928674bc606"],["/categories/iOS面试题/index.html","76ded0ea51172010d6068b17189e29c1"],["/categories/index.html","5b4a5ec76855efb95d917d9a765e1d26"],["/categories/random/index.html","575970680a0a7a2640fb79bad1bdb494"],["/categories/三方类库/index.html","cc38bfa4fca5cfa0a88c10a46a32b159"],["/categories/函数式编程/index.html","2f0f5797d8248b29f25809fac1a61df2"],["/categories/子类化样式/index.html","c02f7d057f204a07ae4583d5c48e8c4e"],["/categories/开发技巧/index.html","285087d135a45c1a78fe41bd674b7926"],["/categories/开发记录/index.html","78d729577f5d4817edb3e68eae44db60"],["/categories/数据库/index.html","1930ede27259f638ef002c947644c565"],["/categories/架构设计/index.html","1dde0ca5bfb2d2c3aeceaad2e52719c2"],["/categories/测试/index.html","6252b9ef159f30c1433f06365fc64920"],["/categories/用户体验/index.html","3fab3c66d0ee428724907ea07ce87f9e"],["/categories/用户协议与隐私政策/index.html","de6ba7f4507e50d41476ef2a74257a2e"],["/categories/设计模式/index.html","2ddf2dc8275197c50e0a609adcab73ec"],["/categories/设计模式/page/2/index.html","3a52a17733d38811b2dac8daa490b4fe"],["/categories/设计模式/page/3/index.html","9ab5d4a89cf8910f7dc10c645d10b1c5"],["/css/main.css","fa730086b61cc6b202902f59bc49ac15"],["/hexo部署失败/index.html","e34a819f2f42d1ad2738b5b7c5ef41e2"],["/iOS 15 适配/index.html","21e20d75d4235e96a9ad49dab69d4c8a"],["/iOS VIPER架构深入实践/index.html","26f95ce0a58f2da05a384babb4e8ef8e"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","bae5cabcde2ebae6f2d1885b5fac7e7f"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","353a187e8a4431bee5b8ea0c10043c77"],["/iOS 自定义视图，输入表单和错误提示/index.html","ab31e320d069fd4f3e200dd073bbc214"],["/iOS如何使用iCloud文档？/index.html","1da86b2737c6ac0d1947455eef19f7b6"],["/iOS子类化样式/index.html","cf5619f7c03daaec1aa9aae1f5ac99f8"],["/iOS开发记录<一>/index.html","db168e3993e1d96e208807b863d2b741"],["/iOS自动化布局编程/index.html","26d5b40abf63b00b46e6383e7bcf371e"],["/iOS自定义转场(By Swift)/index.html","43a4cfb86405413921afaa1b8716460b"],["/iOS项目架构：使用VIPER/index.html","1ed51c1662d22cb22aa626881da39793"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e0545f9869c733a25b90241e121f717e"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4d59ad79c9d4a2bfe69fd4532582042d"],["/page/10/index.html","c9726c8f1f6bd62e1c8e3b867ec8c356"],["/page/11/index.html","6532e2a1d50f55b3de9eb891128d5827"],["/page/12/index.html","b86706e557da0ba042758804da34351c"],["/page/13/index.html","fc505aa49835b92bd34c34af3cadbf1b"],["/page/14/index.html","617abe5bb02c2d53f93f55c9ae4a77bb"],["/page/15/index.html","f5853ceaf938720efd22b1ecfc32dbdd"],["/page/16/index.html","6c03dfce1e29440b8076035ef686413f"],["/page/17/index.html","a4f4488582552afb655da8cc55e6be70"],["/page/2/index.html","ab7c7800f2dc5aa252e00e9582c05935"],["/page/3/index.html","e9e10044342b0e468e12d06078d57b73"],["/page/4/index.html","5f961577a769fdb0fc6c79f68ddbeaaf"],["/page/5/index.html","c617dc0b2967dea78cf1e14f53abe9b8"],["/page/6/index.html","31bdf8bb5e4196380d64681e42591de1"],["/page/7/index.html","90001a8af69f6548afc4c6191819601f"],["/page/8/index.html","5c5baaf30fd96f1470ccd14927779d86"],["/page/9/index.html","4ba617d57164f05b7a5f8ebea2fb44e8"],["/schedule/index.html","19a5adc5c5ae7939470493685706a390"],["/storyAppPrivacy/index.html","6291069b75cef0601a3a29db483cfab0"],["/sw-register.js","52a0ee24437729595c79d6a6b357a3c7"],["/tags/Advanced-Classes/index.html","5daa34ffa2cae7132b878c40c73f0a4e"],["/tags/Advanced-Swift/index.html","019f71c064ca51f91d933e21832fa4f1"],["/tags/Advanced-Swift/page/2/index.html","344376b1fc0ecbd13e3ad13b69148fd5"],["/tags/App-Architecture/index.html","4a382e8b25537fb157a22684494c726c"],["/tags/Array/index.html","23cd1a2e0f7d6de610e6bea621c9251f"],["/tags/Arrays-Dictionaries-Sets/index.html","e197a7cb8d131627d2ad5fb9215bd418"],["/tags/Authentication/index.html","58bde65c2523604b1ab2d1addd7267f7"],["/tags/Build-in-Collections/index.html","c2260a465f84251546edb59250c74cb6"],["/tags/Building-Your-Own-Types/index.html","863098deb7ef3ece2dbdfe975757e708"],["/tags/CMS/index.html","7ed2651be50cc2ecf7d90e67a4b221ec"],["/tags/Classes/index.html","7089a894d5cfb74f4667ac072c7bce6d"],["/tags/CocoaPods/index.html","96d265e49c96334d86fb59b28c53acf1"],["/tags/Codable-protocol/index.html","7a1ec25c40f7d19c63f3b437e96c7a49"],["/tags/Collection-Iteration-with-Closures/index.html","8ff7c8b5747c438b4099133c47ec9829"],["/tags/Collection-Protocols/index.html","68a7099087dc3c17f33e0df54fba13c4"],["/tags/Collection-Types/index.html","f6c3e170e4dd8526422e9c1e4fbed43a"],["/tags/Collection/index.html","fe82153525c12a7e737c0c5e86a638b6"],["/tags/Collections/index.html","a98684c89c3682937583a037573a42b8"],["/tags/Combine-framework/index.html","d4dfe0ff0a37a0f9567878fe6e3a0a64"],["/tags/Combine/index.html","40a23fe51d847a72b2da33c2e958cb24"],["/tags/Dependency-Injection/index.html","2f98d9a31eef7f45155168a3917617ce"],["/tags/Encoding-Decoding-Types/index.html","ac152ff502199a1cf667c63ff7231db7"],["/tags/Encoding-and-Decoding/index.html","71ad9c9c0a1f4f976a774f9cd129bf4b"],["/tags/Enumerations/index.html","2d880592329576061f7fcc49e9291ca8"],["/tags/Enums/index.html","0fe8932c19cb03a1585dc11367e5ad5a"],["/tags/Error-Handling/index.html","cb1783c954c4edb4fa4cdfb05fdcb7ed"],["/tags/Functions/index.html","79127a817eb830889427659d42a0eac2"],["/tags/GRDB/index.html","ecf4084336fe6c85e95026788b7774d9"],["/tags/Generics/index.html","980b152e0a65dca160891d3102cdf2c3"],["/tags/Go/index.html","0729b46d4c1b249800dc521daf01fe5a"],["/tags/Grand-Central-Dispatch/index.html","abef71a23ddeb9388aeb47b55f6180c4"],["/tags/Hello-Vapor/index.html","1c4f58d3299aaf8467ea2f8b3e4cb7e8"],["/tags/Homebrew/index.html","030139b37e17c89f463d43be16328bfe"],["/tags/Interoperability/index.html","f6ceb1a0b845a75c6759b4a95c01b547"],["/tags/Introduction/index.html","a26b5d5225d63751fc14ead286d8e343"],["/tags/Leaf/index.html","f98ed3faa5ad437d3ff1c0fa6811f2ac"],["/tags/Linux/index.html","c18929d0833891a7ff1715754ce1a258"],["/tags/Methods/index.html","fe7144e614763951a1c5a7f19b2d395b"],["/tags/Modules-And-Hooks/index.html","c9e668d6001d9159437ed6892dc538da"],["/tags/MySQL/index.html","65f93cdefdd038dfdb44f99f8c567411"],["/tags/Optionals/index.html","fab232331ff2f0277fc70aab86518aee"],["/tags/Promises/index.html","82ab02cda8964132a1abf4dbaf23545e"],["/tags/Properties/index.html","f155acecaa3091752f335f9424f78acf"],["/tags/Protobuf/index.html","53b4edc00611f6c17aea56ddac9d8470"],["/tags/Protocols/index.html","a4fd3cd8e95e757e14165ca6cc8ea76b"],["/tags/Result-Type/index.html","7f73f4bc30eaa01f63340df8db3eb3f9"],["/tags/RxSwift/index.html","6f101e61a83bc50136ca0432b3ba7e24"],["/tags/Server/index.html","30d4c5256a7935d881cef08320ea9a56"],["/tags/Session/index.html","a950a1eddf0484463f1457c9f4681a35"],["/tags/Sqlite/index.html","7c809aa94233486b4f785e26f20d171d"],["/tags/Strings/index.html","16962c44b2e7403f4853e42af9d43a7e"],["/tags/Structs-and-Classes/index.html","a6ccfef7ea84f5f81634c1c74d03b9d2"],["/tags/Structures/index.html","50adc54fe7bfebad18eea7918c33aed7"],["/tags/Swift-5-0/index.html","99ac2ac809f235934df0a284b168da1e"],["/tags/Swift-5-0/page/2/index.html","0aee8d62543e34d9bbae30cf67d3ba9d"],["/tags/Swift-5-0/page/3/index.html","da40ec1420e576d921f781a533224e10"],["/tags/Swift-5-0/page/4/index.html","1e265a3a2899518cbc9528b2372421d9"],["/tags/Swift-5-0/page/5/index.html","7f4114850d35924c317c9bcfb3b34995"],["/tags/Swift-Apprentice/index.html","1f11014407e1f270d63fc9b95e28b42d"],["/tags/Swift-Apprentice/page/2/index.html","52940f2e0dc2b81d68d8a7a148b0b5c9"],["/tags/Swift-Apprentice/page/3/index.html","d7111c8b3bec845d46cbbaabd0e6dbe1"],["/tags/Swift-Package-Manager/index.html","e1454c0187f1f8152f6a2e805406da2e"],["/tags/Swift-源码阅读/index.html","d2169f40b1d787a787420d8a9b01d071"],["/tags/Swift/index.html","a43964a7749ac634b4ba2530115c5658"],["/tags/Swift/page/10/index.html","f26c4229c93de073e695be2b9319e100"],["/tags/Swift/page/11/index.html","aac90d77ac0efc474c1369619a9ebd31"],["/tags/Swift/page/12/index.html","440ae3bb7a2546c1742b2535b45098e9"],["/tags/Swift/page/13/index.html","001290bcef8a73df676b713b5ad8dff2"],["/tags/Swift/page/14/index.html","497770abc5bc92ab7474f8eeda11d8d3"],["/tags/Swift/page/2/index.html","67d26824224cd035ab203184217e9245"],["/tags/Swift/page/3/index.html","616c59c420b2d9e9827f16f0ad10462b"],["/tags/Swift/page/4/index.html","2cd4434865f9590be51a385924ec1e16"],["/tags/Swift/page/5/index.html","f3c722f77401f4ae0d9486db7521bd6a"],["/tags/Swift/page/6/index.html","e00a432db95d0f816cac84610854373c"],["/tags/Swift/page/7/index.html","bd844cf7801cef21f3e1f5cdf5a1ef1d"],["/tags/Swift/page/8/index.html","bd4b0a4bc13ede6fe11e31f96b3843c2"],["/tags/Swift/page/9/index.html","3bd30e676fb2c160d800d063b5d3df99"],["/tags/SwiftLint/index.html","da7a24b4f4bf1d53e3fce0adfa222c3a"],["/tags/SwiftUI/index.html","c2a90bd78ca1522cbda15cf9cc23c1b4"],["/tags/UICollectionView/index.html","6f6852ba5ff0824b0466bdd46e90172a"],["/tags/UIColor/index.html","1b71d39873912ad5723bad3b4c089b54"],["/tags/UIImagePickerController/index.html","f36791c00059b8d96c1b854d00629121"],["/tags/UIKit/index.html","e8eb1d1d85b3f589e6a39cfe46919bb7"],["/tags/UIKit/page/2/index.html","672aea463ae122472b1f9f18ce197ca2"],["/tags/UIKit/page/3/index.html","3375febb7825861ca29cfa50f4485d08"],["/tags/UIKit/page/4/index.html","a2f935e383ea188921f9a4f77febf307"],["/tags/UIKit/page/5/index.html","b447c0f99fdeed42c054e868a303fdb8"],["/tags/UITableView/index.html","2045d04c5a18bb83750e3233af09917a"],["/tags/Ubuntu/index.html","0952e2627b621b40ff73c81f4d2273f9"],["/tags/Uniquely-identifying-views/index.html","52ca3027753e8255d8c931eb55ed2c25"],["/tags/VIPER/index.html","89e9b53cda03424385ab1784bae18339"],["/tags/VMware/index.html","dd500a84efe559227c8b22d458d6f1f2"],["/tags/Vapor-4-0/index.html","537773acc465010446116c694dc2e611"],["/tags/Vapor-初探/index.html","e523551e1e962b6cdc9ce7b7ace36d39"],["/tags/Vim/index.html","ce80016463e8f5c8560225a9a5b7d710"],["/tags/WKWebView/index.html","ee3d85ca9e0351aedc0802ff88b143e4"],["/tags/Xcode/index.html","fdb3dae0a26a4700e6b9338655f0f568"],["/tags/appleOS-Networking/index.html","71e028c9f181ef31a5cec2c46065d129"],["/tags/bugly/index.html","c4d5e8aeaeac9e65b4dab80cf236ad96"],["/tags/enum/index.html","35c0e841743920ecd49059f410144fa4"],["/tags/git/index.html","1f41d4714a11a7403f414160c702e728"],["/tags/hexo/index.html","ad13b658d13b2e93e30cf4e15d8e6bf8"],["/tags/iCloud/index.html","8830abcc29d072bb0b8cf05c1d2cd3f8"],["/tags/iOS/index.html","b58ec1f3c568b34e3265a8e5f9649d20"],["/tags/iOS/page/10/index.html","2f9822dfe2f660812c248151e4ff30a7"],["/tags/iOS/page/11/index.html","0a662252b646a15cc3452e6145d43de1"],["/tags/iOS/page/12/index.html","061823ba261e65008783bbd975755ee9"],["/tags/iOS/page/13/index.html","ebe6c1491ab35d7a3f7aa82b4fc244a8"],["/tags/iOS/page/14/index.html","ca1bbb8f113d01f358c0926aee9ad22a"],["/tags/iOS/page/2/index.html","1dbd1b5f3e987f65f12af3c09cec4090"],["/tags/iOS/page/3/index.html","e7efe2ac0f169795a639e264e9202ae7"],["/tags/iOS/page/4/index.html","4094820fd607e1e99c5850d504c3ed32"],["/tags/iOS/page/5/index.html","af9fe3f11a2665ba1d01ada8a3f58c71"],["/tags/iOS/page/6/index.html","952128f385ff98efc4fa2352a210585a"],["/tags/iOS/page/7/index.html","a4489b2e38991bfa32b83f8e3aa3517f"],["/tags/iOS/page/8/index.html","1fb7e51fffb48d700d0e5f5621414653"],["/tags/iOS/page/9/index.html","37e7a269b69d0e9e6ce748c4dff3a31a"],["/tags/iOS面试题/index.html","aac6d6cc589a06322caa0739455a295f"],["/tags/index.html","37a76203bd363e7b0438b075d1470278"],["/tags/non-optional/index.html","02b5da9a04e1949037b6dfdc5d63aa98"],["/tags/random/index.html","64afc872030bfc3fb933a5a8d133a49c"],["/tags/transition/index.html","0b12f3748d31f5ac14a553b13f714cf4"],["/tags/三方类库/index.html","4c866c2c6aa453067eb9923e68064362"],["/tags/依赖注入设计模式/index.html","3eb61a78a30efc13da3da7ced16969d1"],["/tags/值类型和值语义/index.html","e083bee62c221959066ac3549e06913c"],["/tags/内存管理/index.html","4e32e3db8862b0a013c16d0cf6811f83"],["/tags/冒烟测试与回归测试/index.html","48fcd62aba85a862d1a4c2ca24e12d2d"],["/tags/函数式编程/index.html","790516b5edfe9bf453b508e6d3d9abfc"],["/tags/创建博客数据库/index.html","a7031c76dedb0a73c57b0d5952e8849e"],["/tags/初始化模式/index.html","164d877ad682ca288ad26c28ee67b337"],["/tags/单例模式/index.html","b5d8ee14161d9b3e072799160fb9a4c9"],["/tags/原型设计模式/index.html","b198a6fb7e85c0d506b1430b2231046b"],["/tags/命令设计模式/index.html","547d3c06e957db0b9b1d2b2aedf01374"],["/tags/基本控制流/index.html","6910bea5f1e3791632aaa32c523dacf8"],["/tags/基础语法/index.html","d55cbce60037a0c40735ccd35c864f8b"],["/tags/外观设计模式/index.html","5036356f3fc2fb41971a8f41f5ffc60b"],["/tags/委托设计模式/index.html","7f2fb7f1c757f66ff2c8ec20a567155a"],["/tags/子类化样式/index.html","5f51baab79f6c1db23cfb6630479fd34"],["/tags/对象池设计模式/index.html","54c1b0d75dd556dc7c77032ae43cab20"],["/tags/工厂方法设计模式/index.html","cbc9240358d47428cf3a5b6886f718d9"],["/tags/工厂模式/index.html","de0aa48d99f734037065c66e9c26390e"],["/tags/工厂设计模式/index.html","e64b886669401810857598a6bcdcf030"],["/tags/开发技巧/index.html","df3633bb69e494573b2b1de015574e8f"],["/tags/开发记录/index.html","75690bb807e37b0936e6afcffba2d78a"],["/tags/懒加载模式/index.html","d691adaa8e82cc4efe1c9bb8ed7c70f2"],["/tags/抽象工厂设计模式/index.html","9cd4bf82907c2fa37cfb19bc92f65199"],["/tags/数据库/index.html","116954df3b40966f47668e215331a2a7"],["/tags/构造函数/index.html","ff3fbbfa5fdc19aa088633127b048ef5"],["/tags/架构设计/index.html","b42a3a0f3c9bb42538eb586172b9fa72"],["/tags/模式匹配/index.html","684881348e51927b0181bf4dfd07ab70"],["/tags/环境搭建与验证/index.html","9d66476d2f9348e541f34ea73b053a68"],["/tags/生成器模式/index.html","e9347012579abe613e7c67fbe4e20c19"],["/tags/用户体验/index.html","ab319a64008f4c1f4904dceabc0f45a1"],["/tags/用户协议与隐私政策/index.html","b0e2325ae81919f24d56156172622966"],["/tags/类型与操作/index.html","bcc1f2b3761d722513bea65275e07714"],["/tags/自动化布局/index.html","ce18a8a80cacaa7fb8551c2c7453cedc"],["/tags/自定义UIView/index.html","36dfd7f8729b961531bdbc980c92ae4b"],["/tags/自定义转场/index.html","20bd04f6e3baca4f985af048a51cdfe7"],["/tags/自适应布局/index.html","af3ab8dd90c2f385cd66207c638c1f41"],["/tags/表达式、变量和常量/index.html","0d32071a018446980310b1d142434f0d"],["/tags/设计模式/index.html","94b534515a9d81b88129a3300008cde2"],["/tags/设计模式/page/2/index.html","c7d735c7d5c0608618378010bce4e40c"],["/tags/设计模式/page/3/index.html","d44b665011e538ff4e0bb7b919858df9"],["/tags/访问控制和代码组织/index.html","e44cf3ad6423557606635f5df3c91f06"],["/tags/运算符，下标和键路径/index.html","d60f0555d9d053ac0f0ad10c92b2c2aa"],["/tags/迭代器设计模式/index.html","22a813304f0d0f5b1df78edfd974dee9"],["/tags/适配器设计模式/index.html","84b75cfc316ea129aad45d913bc73693"],["/tags/错误处理/index.html","993568286d058179cb524bbd55c16267"],["/tags/静态工厂方法/index.html","87964dcab31fde137bd79e4e3519ae00"],["/tags/面向协议编程-OOP/index.html","c251aa926a780c0e0ec398824306f776"],["/tags/高级主题/index.html","704dcac164f1f474493bf7d08b3db4f9"],["/tags/高级协议和泛型/index.html","a57d716a1cc1f84ad5fda8dd16948f37"],["/tags/高级控制流/index.html","c7e18a1eb87bb31910d7cc719aa9d5c1"],["/xcode 常用的快捷键/index.html","6ce2cc9a255c5b7e1756c82d43564cbe"],["/为iOS应用构建输入表单/index.html","008836494b6081594279f2c65e46a90d"],["/产品开发的幕后花絮/index.html","f963d815afecb70d56c38929e98fc7af"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","73570280021be942dd787c622036590c"],["/冒烟测试与回归测试/index.html","810cda53537c0eabcb3652530940f159"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","87656f83696c0d8c3551f262ca1b568a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7727b2183f70116791e41000797a805e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0d059f06002c05f6bcdff645324b045f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","95e0ea9eb619a91bb37353ab7b5c50d8"],["/在Swift中创建自定义集合/index.html","14ffdb842bc5d08c524e1c2fb0367049"],["/在Swift中处理非可选选项/index.html","e7e810d855b5dda1788feec71bc4630f"],["/在Swift中生成随机数/index.html","72ba7b322f567aa2c55556ff6ce24672"],["/在Swift中重构单例模式用法/index.html","a46966542aaf6eedf496fc022c3e0833"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d7dbd632612c71c29482b01fbfa270e8"],["/如何为VIPER编写服务？/index.html","caa926893b8eb0136f587d2e5d08c2d4"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","15a45c8fbe2e67f701e0998185236d68"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7c0708cfa289eb7dae7db2ca90a48e04"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2ad4df0de24e162facf71ce9c21f092a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e9b7bd1697a9431bb80c8b057ef5ede8"],["/掌握VIPER架构/index.html","2c7fc1d1a9087d77d7773129f9b05ccb"],["/揭秘 WordPress Hook 系统/index.html","dd64be3b4ba98891a8d2589289eca01e"],["/比较工厂设计模式/index.html","f3a1eade143f9dc4ace07a9d5fedb871"],["/深入了解Swift中的Grand Central Dispatch/index.html","38dedbffd43cd200744498871d0a81c4"],["/深入研究Swift框架/index.html","ea0b88f3341f3c3e7bb2d3e2e0a86854"],["/适用于iOS开发人员的VIPER最佳实践/index.html","adb2140859f0c58bcfc7e27f6ad0656d"],["/选择Swift而不是Objective-C的5个理由/index.html","2eae88fdbd36a3e151d603fc7770e2bf"]];
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
