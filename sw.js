/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","76d610e56ffab19d587c38b96248bee6"],["/2020年iOS面试题总结(三)/index.html","5e3d91481d7c59ae5173ac39f1faa937"],["/2020年iOS面试题总结(二)/index.html","dfadccb8a28d4aa76971e4759e6bddb1"],["/Advanced Swift系列(一): Swift 简介/index.html","33284bf879a449e692f4235c6d73d74d"],["/Advanced Swift系列(七): Strings/index.html","d08ee4074b49791120dcac044a22d08d"],["/Advanced Swift系列(三):  Optionals/index.html","64207eb687192bc5227e86c75b661a49"],["/Advanced Swift系列(九): Protocols/index.html","58aac5b9ee055aa8d23b4124f619ea9f"],["/Advanced Swift系列(二): Build-in Collections/index.html","e816f964daec9ec2fc303851e1534314"],["/Advanced Swift系列(五): Structs and Classes/index.html","2930fad2437aae5afc0585e16af1ed0f"],["/Advanced Swift系列(八): Generics/index.html","d86a9cfaf07e8a783443028190e1b3b7"],["/Advanced Swift系列(六):  Enums/index.html","7e75f8e8ee5f9cfefbdda4f83a998660"],["/Advanced Swift系列(十): Collection Protocols/index.html","b5e4c399bbb8fc7a38f1945f7292f261"],["/Advanced Swift系列(十一): Error Handling/index.html","a65141092dd139144067672ece96e5ac"],["/Advanced Swift系列(十三): Interoperability/index.html","dd5650ee54727335f970b70022b999ab"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","78b19652a945454a8e6868e73383830e"],["/Advanced Swift系列(四):  Functions/index.html","b24b9938ed33e509984fc1a16e5d5e80"],["/App Architecture系列(一):  简介/index.html","f6fcd3a7708a1c3f649e95ea8c4c7779"],["/Functional Swift 初探/index.html","02413725809cefc8bdb0acb4c880132d"],["/Git 使用小技巧/index.html","b9d735083051c1520eafa12f005c9cdb"],["/Go Protobuf 初探/index.html","d05f46c8515b7f9075e12e51e31e9989"],["/Go mysql Tips/index.html","e42c8053538e105a8d54242e6c917509"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","b9c6e49a02a61e9b226f257486493ffd"],["/Go 入门篇：2、Go 实效编程/index.html","5b283f0bbe8edcbcac1b2854309b5d35"],["/Go 基本语法初探(一)/index.html","9b7837d9a3098fea669847c6a18c2fce"],["/Linux VIM 命令及操作小结/index.html","560bf388c4f405b26b926d901eaed5bd"],["/MySQL 基本操作/index.html","90742848a8155e7e464f4eb71882ecf1"],["/MySQL-列类型和数据完整性/index.html","15d055820eb2ed27ff7bd62a3cf38cbd"],["/MySQL-数据库设计和查询语句/index.html","bd4f5765c7e5a063f0c99164ed8ec86f"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","02e460979a99853103e633f5a1393277"],["/NSCODER和SWIFT初始化/index.html","47f33455a81271ed29b054ad66cc18ef"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","965582657cfc964133fd65132f6116c3"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b1340afec0891c05798988378bb09535"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","99e310b682898b33f468d0abe17ceabf"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","23383445dba04c7c88566666638518f6"],["/Sqlite 使用Tips/index.html","d1c4f0b2abc09a24c638a338f2ae2c6f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","3a5340082eac65c65b219f5e3c370d39"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b5c43ef0b2782d845d02dde2c1e0b098"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","a4ee2c234194498eaf11f1844dd0c7b6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","addfe1279af12547d200683fd9f454f6"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","bb3ef296184149b3f33fc1d90c3ea70f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","bfa56a37e32b6526374ccbc463aca96d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","9b98917c1d365481cf08d5cfd46fe6fc"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1e7d9e25a9b37d79655cce1e0f956005"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","054a0a6ee75542aea1cd0832adf09108"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6a5041f3d9147b57bd6c8c34f6abe4e3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","74b9961e01c14c9c6bcde9350bee4611"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","0a988a709188d8700a42893ef5e42c98"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","ce5b95e841d362447e3f1fb4ae4d5ee3"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","1b761dc8a1309bd18066ee5f93da7f4e"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","0c2f58a958ff0feea98dd4a7b6377ee8"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","72d9b2e6ac8ea90d8740983f243f6718"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","0c9e6d8a015d135959950d957e90abc1"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7f77e65d7fd0fdbf6d21f6f604248f86"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","53420c9a2f4cfe4738930b013aa29f39"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","3ddd81186f2896c1c7da5e29bda0b9c4"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","1feb949c8ef713b8646caa1d3e2eccde"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","81ed8a2005088a4752b0144446f0e662"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","4990fb212375061d2a80bb557f6950ee"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","a0b2e5dbdcb47d4d792a7afc3dafa581"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1411d4fb2797c644bbf56b9f81495f63"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ec8ab7e166d7574d1c6384e50bd9b28e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","54042d160676be7d6aa4b848f33de00b"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","8e882f6fb464ce7a10d95dd3c883ab4a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f7db7f54bada67f2633b13a2c4d7bd0d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e74bdb1bc9500ebe312a480a62fe2e8d"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","45ffc17d408f5f765e4659a6b01e6256"],["/Swift CompactMap vs flatMap：差异说明/index.html","c47e6606fcd3bcb993b07b4fdf1093c1"],["/Swift Grand Central Dispatch 深入实践/index.html","d17595e32d365b43804358d432ab65c4"],["/Swift Lazy属性初始化/index.html","7a7219374df853f73e79601e03472e56"],["/Swift Promises 初体验/index.html","23ae62159c116da861503fe7e86654bb"],["/Swift Promises 探究/index.html","9e202a628ecdf89435c1ea2019c6111d"],["/Swift UICollectionView使用指南/index.html","ebf0807a095b42553ee8a8c6cbd237ee"],["/Swift URLSession && Combine framework/index.html","916f059b419e448a53c3a421e32fadf3"],["/Swift tips/index.html","3abfbf6816e3888a3025979eca237ae1"],["/Swift 三方库：GRDB 使用指北/index.html","f82658f7564205bc6024acbde5da0b1c"],["/Swift 唯一识别的视图/index.html","9a749491a774e862bf87434257defa9d"],["/Swift 如何学习现代UIKit？/index.html","33e695614760c11bba0505f0ed30e021"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","bf174ea4c9fbd9e5139a7e7dfa82edbb"],["/Swift 用 compactMap 替换 flatMap/index.html","c67519911a6f906bd09562103aed85f5"],["/Swift 选择和播放视频/index.html","59160afc6b85625e974b1968ad1edca6"],["/SwiftUI 系列(一)：1、 简介/index.html","6856911c62c35f75481051a749855db8"],["/Swift中UIColor最佳实践/index.html","381f5421a2ebf6f0f245db5cd37393a0"],["/Swift中快速简单的工厂设计模式/index.html","6a0de851ce18cee6dd2272e0c259608c"],["/Swift中构造函数与静态工厂方法的比较/index.html","aecf1b3aaea57eab1d42affb5b5ffaec"],["/Swift中的UITableView教程/index.html","3278961864de0da32574c3b53e7935d6"],["/Swift中的懒加载模式/index.html","0f1d6e751d235d776bf04e2734bac2e8"],["/Swift中的模块和挂钩/index.html","7d3c244a917ec6d2a8f1a442d15efe8c"],["/Swift使用布局锚点添加约束/index.html","ab2055c0d8d2ad2506e0b517665e6b54"],["/Swift依赖注入设计模式/index.html","df68f8b0866b47c68e4f95f7758ebcb7"],["/Swift关于Dependency Injection (DI)/index.html","3b014eff13b26eb0eb51f3590f7d4958"],["/Swift初始化模式/index.html","7c852685bf0ddaeff6a76c3b49c3ca35"],["/Swift单例模式/index.html","78ac6c6b4ca2ab6ed4bd31f2433f327d"],["/Swift原型设计模式/index.html","ab9101a62408103a87778c135d3d7793"],["/Swift命令设计模式/index.html","8654d2a3b78c0a63be11416377dcdad9"],["/Swift外观设计模式/index.html","384fa02b27901b39e891372cd1ac5b32"],["/Swift委托设计模式/index.html","a1778c357ca5608601149898d78040c0"],["/Swift对象池设计模式/index.html","cd26febb4744480da53510bfc1ce1b6b"],["/Swift工厂方法设计模式/index.html","cfe7988427f3172791c0f59ae198483f"],["/Swift带闭包的懒惰初始化/index.html","83ff025825b4d5b733e2b88e1ecce42d"],["/Swift抽象工厂设计模式/index.html","0a5a62d5ceb8a95cdc68c698cb20641e"],["/Swift掌握iOS自动布局锚点/index.html","c82842865177cbf8e69768a0d62f4f1f"],["/Swift支持旋转的自适应单元格/index.html","51bcd06e4b7c682f996cd5d3c62f619d"],["/Swift枚举值/index.html","10759993afc51a091a93999c2c9fb882"],["/Swift生成器模式/index.html","8fbea8bf731c486c909831182b23b1ab"],["/Swift结合Xib文件自定义UIView/index.html","8fbd043ca734f5f3b22f3ee9403da95b"],["/Swift编写的20个iOS库(一)/index.html","d476fb955ba62781bd57f4c4c66efa4f"],["/Swift迭代器设计模式/index.html","b45a6c15fbd581561f3abb41b264e237"],["/Swift适配器设计模式/index.html","67b006dcfa5247e10d6b6e48deeaf740"],["/Swift静态工厂设计模式/index.html","feeb24705ca81894e1b1b67fa2a39304"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","80abac2f46a89c8e9d54254b12c3a389"],["/UICollectionView data source and delegates/index.html","e19fbc99c5f3cd7d32386cf0985f67d8"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","603f981758f690451208eac5e8d0ff4e"],["/UIKit初始化模式/index.html","90deace49fc8a6ab70886650ed6d2678"],["/Ubuntu18.04替换国内源/index.html","2af26dd183e9104e1b7cd1f28fb85f10"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2e4ebf39fa3eaa793d126f6e962f1597"],["/Vapor系列 (一) :  Vapor 初探/index.html","462ac57d091efba3e0b1be535af11629"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","20b92bfa6455a94d7572e36bde955266"],["/Vapor系列 (二) :  Hello Vapor！/index.html","13f5c93e74a8875ce494e1cca0f74927"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b455b127997dd7bfd436114cb08ef81d"],["/Vapor系列 (四) :  创建博客数据库/index.html","5a8e6912719e20b2c41d48f0c8697688"],["/Vapor系列(六): 徒手撸一个CMS/index.html","71a5099c90b1b16b56c499c7c7e83e43"],["/WKWebView与Native交互注意事项/index.html","f5ddd179654a8cae183b38bc6e708689"],["/Xcode扩展/index.html","a116ca947d8e2ebb453d1392ea591d14"],["/about/index.html","04612ccaba80ebbe3faf98cdb9ab502f"],["/appleOS的Networking示例/index.html","55d2d4f4070a2f8378a743f42bef889f"],["/archives/2020/03/index.html","f490f45ad384bca8b5bcad98b41a0052"],["/archives/2020/04/index.html","4c43724f87c138bf5075bd6a2e96a9e5"],["/archives/2020/04/page/2/index.html","0fb2ce601c57324681d00263c2ffd08f"],["/archives/2020/04/page/3/index.html","be31695eca5b2570627517174f24fdf5"],["/archives/2020/04/page/4/index.html","b963e99e5c44df19e372d0a7a5ac5939"],["/archives/2020/04/page/5/index.html","0bb18e1a5eadeaeb4574824c23e40d62"],["/archives/2020/04/page/6/index.html","4d166079609e9a1ea86fc7b0c4eafb58"],["/archives/2020/04/page/7/index.html","c5975643014a287fc41a5919f20565e5"],["/archives/2020/04/page/8/index.html","c5b5e67e1ee1c52d458ab2fd729c5876"],["/archives/2020/05/index.html","973e2e2901222066e279d01f3b7df8e1"],["/archives/2020/05/page/2/index.html","6a387c0401a4322a0fe380acf7e5e27c"],["/archives/2020/05/page/3/index.html","53f543d1c9e44090cafbd939bf98b2c0"],["/archives/2020/05/page/4/index.html","aa80622bfa4c3ee3b771582fa3dbf4b3"],["/archives/2020/05/page/5/index.html","abd0c7d5d8a97dfbbfebfac9001ef5b6"],["/archives/2020/06/index.html","bd41f122fddf9d8af614e5558e674b3b"],["/archives/2020/06/page/2/index.html","ebc3a1b89ef5674b146dfef685841fcf"],["/archives/2020/08/index.html","4379bb2fbcf40a1eea45d1e0b5953357"],["/archives/2020/09/index.html","a6d2550b71b58deeb63d21460b98ceba"],["/archives/2020/10/index.html","26c390df8f2606f0338b7e39977276b0"],["/archives/2020/11/index.html","e01a509310718c8c80d5134d3ca96f36"],["/archives/2020/12/index.html","36d0982bfdeb3ae32a07cac2aa808ca6"],["/archives/2020/index.html","cb70758b3fc7169607b4c1603b096f4b"],["/archives/2020/page/10/index.html","b9ba841d2a40ad4fa7e4e6e478fabbe1"],["/archives/2020/page/11/index.html","37826582567f58d0f2d9b5816d9b3c2d"],["/archives/2020/page/12/index.html","9af4a701ea23e97e74d91742185a95c5"],["/archives/2020/page/13/index.html","009d9ae3791d4faf9bc367ca49dab9d1"],["/archives/2020/page/14/index.html","50ca842cbbd6160866a464352041f352"],["/archives/2020/page/15/index.html","9dfdfb78c3e1044d0630b84ff496462d"],["/archives/2020/page/2/index.html","8cfc83e1aa9a9b60ac6c393b39d6de8f"],["/archives/2020/page/3/index.html","ca3972fb47c3a27ff83e33745694de6a"],["/archives/2020/page/4/index.html","63a375f8ab4749a0667cb374965ecea4"],["/archives/2020/page/5/index.html","a78016e028f51b32bcee94e69c0a7abe"],["/archives/2020/page/6/index.html","8d1483752d4ea06a324c7c6b005cda1b"],["/archives/2020/page/7/index.html","cacfc29fded36ebd075a228e1610d5e1"],["/archives/2020/page/8/index.html","3cdb0e0124cfa3cab3086e5ece76138e"],["/archives/2020/page/9/index.html","6b96b4045e6fd2772d2d19242ef4616f"],["/archives/2021/03/index.html","510596505f7c1704337658c52f9d26c3"],["/archives/2021/04/index.html","53092a919624ccb82bb171823f7e45c4"],["/archives/2021/05/index.html","698a2b98164e729610fdbfaf23eda0a3"],["/archives/2021/06/index.html","fa3ccacd620c03e4c431dcf592fc1b57"],["/archives/2021/07/index.html","bf281a221a916ddae96acbd7ef2011b1"],["/archives/2021/08/index.html","d1237ff93dc2fc8b2655cee94047727d"],["/archives/2021/09/index.html","aa6e824f24695e52d4747cb7d81302a5"],["/archives/2021/11/index.html","917b93e2743c1996d586a3c8efd81666"],["/archives/2021/12/index.html","b89215af3265e7da5bf6bcf1adce3b56"],["/archives/2021/index.html","c81459e72c29012fee7d4f64dbea5eda"],["/archives/2021/page/2/index.html","5cf0e397bcefda28363841a7f6602f4e"],["/archives/index.html","bf4786f94ab0dcafd9b72599b16996f2"],["/archives/page/10/index.html","023960ab1978f4fe6a222a5bf4bb4dd3"],["/archives/page/11/index.html","1eeaabef0298cba4f3b9d4ee32f0bc20"],["/archives/page/12/index.html","af810731280f655cca0d50f176cdc40d"],["/archives/page/13/index.html","7530b5eeba62ca11c03e1acf6b90345b"],["/archives/page/14/index.html","64729f3c97c085f46218666a90ad62fb"],["/archives/page/15/index.html","d3d4ae038ba1c44f4f4f1254fc1bdcfe"],["/archives/page/16/index.html","7405f7fae0600b6df2da868d61ef44d5"],["/archives/page/17/index.html","661ec4e7551bf826b2f8e08e40438637"],["/archives/page/2/index.html","fe8fd9afba8a07bb145b56aeb14b42f3"],["/archives/page/3/index.html","2cb049588d9894967250e4e0695399e5"],["/archives/page/4/index.html","1e9d012dd6fad9967ba46922c03caaa0"],["/archives/page/5/index.html","c77ab7e43bcacbb4bd47fb61641438f6"],["/archives/page/6/index.html","0f0316c636e4cebb8937d1e07eb90b58"],["/archives/page/7/index.html","e387728aaaa3a170baa728d250956d67"],["/archives/page/8/index.html","8c062c41c514773a4d9629707477eb9e"],["/archives/page/9/index.html","3e7a51f1097b188ac647b7bda3e9e093"],["/bugly 上传dYSM文件小记/index.html","108de06e109f81bc8313752b913e9b32"],["/categories/Advanced-Swift/index.html","863853cd5b2432448eb33bc97fcd16d6"],["/categories/Advanced-Swift/page/2/index.html","ba73c5652dca3bf952437183636fc63b"],["/categories/App-Architecture/index.html","f2ab128bf18a121222001660a0ec3f42"],["/categories/Array/index.html","7589a131a5a4d677da1df3912f933b3d"],["/categories/Codable-protocol/index.html","7c6ef5ad486517cb1ac524832c612500"],["/categories/Combine-framework/index.html","9d4b5df8cf6c022d32eb9085efc74f6d"],["/categories/Combine/index.html","077c8d89ecac0ffb231eea47adc126c4"],["/categories/GO/index.html","e90bdfdca2f650a94d0637fc520972ff"],["/categories/GRDB/index.html","b94c438f361e1b954d5552a6fb611b67"],["/categories/Go-入门篇/index.html","ed4174cdbd5a8e223b1d7d3aaea5370b"],["/categories/Grand-Central-Dispatch/index.html","7b93a5ea5473860d4412d8382511b221"],["/categories/Hexo/index.html","05cee2b3b70124f1249624efe05f6713"],["/categories/Homebrew/index.html","a44b5e80a585a47c8a24f95e2f59bfb3"],["/categories/Linux/index.html","79f2ca35783ee03751e2b5c6a4e0ff28"],["/categories/MySQL/index.html","c9c901bf57aa4dfa68dcb71c3778846f"],["/categories/Promises/index.html","2362bd2198e091cba33f4830785cc80f"],["/categories/Protobuf/index.html","e25ad479d9b99e605aa8935755b3fcf6"],["/categories/Result-Type/index.html","19fc7d4c685ee6be96c44fd9df22621e"],["/categories/RxSwift/index.html","e5fa8803b79ee8b27a21230d63cee351"],["/categories/Server/index.html","ad773439b98516210142f033f9513ff5"],["/categories/Sqlite/index.html","9a6ad44f0a957a79797b35ef5ff4adfc"],["/categories/Swift-Apprentice/index.html","ef65f14aebe53583fe9a6b05be74ebc3"],["/categories/Swift-Apprentice/page/2/index.html","7ef2893dc414df23e0f1262365a609d6"],["/categories/Swift-Apprentice/page/3/index.html","f41705db293a2cf6f09eded53da46104"],["/categories/Swift-源码阅读/index.html","4deeb122ed3f5fbc670a5998bf1e5361"],["/categories/Swift/index.html","e923d121fd8014e02d18df80a6804549"],["/categories/Swift/page/10/index.html","c00c7e040991d19c50c81085957aaabd"],["/categories/Swift/page/11/index.html","b1b3be92fcce15255dab212fce43d18d"],["/categories/Swift/page/12/index.html","644dda2d71c693c23e4b6b49231aa7c0"],["/categories/Swift/page/13/index.html","626cc67e2438dbf6902c09b84b79dd85"],["/categories/Swift/page/14/index.html","97e5f2755709f97f2255732e96dd59cd"],["/categories/Swift/page/2/index.html","1dfa6bd412e6c7c305f8fbcbc535969f"],["/categories/Swift/page/3/index.html","5a23713cc7f38cff280d47d9cd0936f9"],["/categories/Swift/page/4/index.html","348e2b3d5108e2844b3e2ef7e11ae195"],["/categories/Swift/page/5/index.html","1e3afb24beeb8834f4437b92a3a9626b"],["/categories/Swift/page/6/index.html","6787a2f8e192d5062dddf91385862665"],["/categories/Swift/page/7/index.html","f95c4f18670fbad050e241c87da52ed1"],["/categories/Swift/page/8/index.html","cf7c563db8512b1a6d0fcd713b95dd90"],["/categories/Swift/page/9/index.html","b9d7840ea6bea582ee294407ae730b02"],["/categories/Swift5-2/index.html","d9f5ef0491fb709a8e399686d96acd22"],["/categories/SwiftLint/index.html","b3bd1977acf5fdcbe756b81be822af3c"],["/categories/SwiftUI/index.html","9f69691b9c433eaffed7f9dd8f72b273"],["/categories/UICollectionView/index.html","42c92315627f9a8d232b81b2729821b0"],["/categories/UIImagePickerController/index.html","c292854c5f13ce39394eed3150f71e6d"],["/categories/UIKit/index.html","8a4df40f5a399efbc8831d0512295996"],["/categories/UIKit/page/2/index.html","becbbf695121c46f7c7e53e085265ea5"],["/categories/UIKit/page/3/index.html","24da905cc6186ea9a5b3c41845432ad8"],["/categories/UIKit/page/4/index.html","5077b00b4329d0ec541993e2d57d7546"],["/categories/UIKit/page/5/index.html","3c43ca0186cf668dc7d41db8c1c307a1"],["/categories/UITableView/index.html","61b3295361006bb990c162c35450f989"],["/categories/Ubuntu18-04/index.html","4def71c85828de1d40241ded5553a885"],["/categories/Ubuntu软件源/index.html","69198bd0e904fec41457b78a80bee116"],["/categories/Uniquely-identifying-views/index.html","f9891b612a6dca2e2d0f2007dc701c7f"],["/categories/VIPER/index.html","534e1aafa367e2f9bc45a0817d72e337"],["/categories/Vapor-4-0/index.html","2f422ec2b82beedd9f322c035c1eef8a"],["/categories/Vapor4-0/index.html","c5d58f5ab48e2efa61115a294d254acd"],["/categories/Vim/index.html","8cd3bc477cbb662662a88f90ef85e879"],["/categories/WKWebView/index.html","c2535e05c7e4cfb01efec71e1253d4e0"],["/categories/Xcode/index.html","ded03f1bdf077efef5a60809c49b2c20"],["/categories/appleOS-Networking/index.html","3e3a78e38bd69407797566437d1997e3"],["/categories/bugly/index.html","34685f16acdbbf2eb61270ba11305f8d"],["/categories/enum/index.html","fc5aab1c9ea9e962be6d672ebb804b0b"],["/categories/git/index.html","f8e7ac8411df367a6042cdda3163b480"],["/categories/iCloud/index.html","fb49af8687b0c90246d29f1280a78c25"],["/categories/iOS/index.html","22fbf5b6adf3264af74e6f0f6bd795cb"],["/categories/iOS/page/10/index.html","c4a40d266ba70757157f2f10e68f6130"],["/categories/iOS/page/11/index.html","bbaf007eff3ac99587935b3e55214344"],["/categories/iOS/page/12/index.html","1c7feb0bb933d638542c301a1d2f6d1b"],["/categories/iOS/page/13/index.html","126b4446481e3578c743212f10012eb6"],["/categories/iOS/page/14/index.html","d4da8b449605b933218dd3a1be122cd8"],["/categories/iOS/page/2/index.html","d1ee34ef3ff37bf723ee3034fec665dd"],["/categories/iOS/page/3/index.html","952508a2a7fed6b99dbbfe799c56043a"],["/categories/iOS/page/4/index.html","d2dbfdf52d6c7a42d29083f1fac26bd0"],["/categories/iOS/page/5/index.html","8cb6424795190102af7af82d25ddda97"],["/categories/iOS/page/6/index.html","0dd6ef08390ea70cd948b81e72b668cb"],["/categories/iOS/page/7/index.html","50108c9037ae64ca5d7fe5abbf9e2ee7"],["/categories/iOS/page/8/index.html","dde20945a5daedc0713769dceffe023c"],["/categories/iOS/page/9/index.html","11d04ebdd4ce86734da47de07cbb880f"],["/categories/iOS面试题/index.html","c17995f3cdfb8ccaaac00a655f693ba4"],["/categories/index.html","7a6240ca9b2988625d7fca42bf36b2b5"],["/categories/random/index.html","83609fd715af24b74aac6c53c1be094b"],["/categories/三方类库/index.html","50e6050e5c6a940dff5505e26294643b"],["/categories/函数式编程/index.html","c87ccb4090547b6760b86b60df29d945"],["/categories/子类化样式/index.html","83a94913371dedba2dd653358bb0db01"],["/categories/开发技巧/index.html","a7ae544ccc10f9c54b1594b90b972c4b"],["/categories/开发记录/index.html","f9dbacf232d2f47d248f4a7203904166"],["/categories/数据库/index.html","29867eea8e6145d5e9c0be5fa7168661"],["/categories/架构设计/index.html","3cf39788353a156c96ecc2e9e7ffc16a"],["/categories/测试/index.html","7f165da11b9beb7e6c873e4c82c36dd9"],["/categories/用户体验/index.html","b76ebac8fcf0ddbb4373fc85455f4443"],["/categories/用户协议与隐私政策/index.html","533ebd561845d1a597d342de664362a5"],["/categories/设计模式/index.html","824f25bef99df41f077b86a6553ab852"],["/categories/设计模式/page/2/index.html","376383899cec7126b52ba9e376b1ecfb"],["/categories/设计模式/page/3/index.html","9a84263366ced21d14c12a0aad4bf15e"],["/css/main.css","9ab84cc749fc29199c74b972ca36a8ea"],["/hello-world/index.html","50cb1807beef2400998b4e4cee99dc5c"],["/hexo部署失败/index.html","377808e2c94103d327b6bbd5018da4b1"],["/iOS 15 适配/index.html","b922707d4e0698828bc97c6e391155bb"],["/iOS VIPER架构深入实践/index.html","d0e7e65a74fc9bd495549a2450212db1"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","680dd0d322861b13a63b9b74892dd207"],["/iOS 自定义视图，输入表单和错误提示/index.html","da933aa792b0037367018efb5a76f073"],["/iOS如何使用iCloud文档？/index.html","85103a498612436485638709e7a99d39"],["/iOS子类化样式/index.html","e2aba4b35fd4db21c82f28e0d7323a30"],["/iOS开发记录<一>/index.html","f7ca8ff9a4e0261a1a0177e4b65d7f78"],["/iOS自动化布局编程/index.html","eca99ccf3b046b8fbb243b10f7dffbab"],["/iOS自定义转场(By Swift)/index.html","16117bcaf849d8a5550753bd75d95b33"],["/iOS项目架构：使用VIPER/index.html","e221876f73d98326101c5fb985440b94"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2a01e3ae03326b814a985254c2bd5e8f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","346d61cf41c0dbbeea47a2366191b41d"],["/page/10/index.html","371d09efc447972b2720d64c6d4643bf"],["/page/11/index.html","ee921d622615ac5c704a269c4a90ad88"],["/page/12/index.html","b8645931e451c0410f7b0eb8ed523431"],["/page/13/index.html","10ee4173f779013eb11a1c0638993b80"],["/page/14/index.html","7a9980ce17784ded56fe8df9ae1f59b5"],["/page/15/index.html","78f09a3109f4c0763e73c2d9007312da"],["/page/16/index.html","2cb94fbab98104e37f18d3082a0ee0da"],["/page/17/index.html","cf0cc12580858c5d4ced07e459dbf567"],["/page/2/index.html","d0eb4522ef962cb7ff0e3e8698e487d0"],["/page/3/index.html","45fc1bc18806d9c243363508fdb352e9"],["/page/4/index.html","2cf5126a596eac81543bd68aad9645c9"],["/page/5/index.html","2a699c78e87f0e0a150e511a9ed6f2b7"],["/page/6/index.html","bd2ceebf28b0e8162cf3dd61ed155ecb"],["/page/7/index.html","a4dd4a23b7ef37d77bc8de0949025965"],["/page/8/index.html","aa4cba6ecee20b9a9f840c0d8929fbb7"],["/page/9/index.html","c3c40b12baa12b789276cd5c7f31ac0b"],["/schedule/index.html","7c3fea794ac13e12ea883a31e16a66c4"],["/storyAppPrivacy/index.html","2e18b4b195bd29773aadbb592ee87764"],["/sw-register.js","eb5d9dce43d3a40567003eff4ad6d0d6"],["/tags/Advanced-Classes/index.html","e60718caf6d67259e30d58abf57600b4"],["/tags/Advanced-Swift/index.html","618e7833db069a91f104191381a4a70f"],["/tags/Advanced-Swift/page/2/index.html","6b340027f84e4ddf015d56acb49b83ce"],["/tags/App-Architecture/index.html","007fad66f684ce4b5e13a79b845aca38"],["/tags/Array/index.html","07702e7d2b16dcb00511c4a97f4f5be9"],["/tags/Arrays-Dictionaries-Sets/index.html","80458e7d2ba2f4673f78e182fc855055"],["/tags/Authentication/index.html","978967d6f05fe6019da3518babf152e5"],["/tags/Build-in-Collections/index.html","1a888bfcfd518b23544bd9068e92d88e"],["/tags/Building-Your-Own-Types/index.html","faca5583f733ab112e1fc29187a9cc71"],["/tags/CMS/index.html","bb13f6e5bf3246f22efe2ccda6f208f2"],["/tags/Classes/index.html","3db0c5c139b3c95685a0244f1bbe72f0"],["/tags/Codable-protocol/index.html","7101c13b5d16b003ddd146b79df3abf2"],["/tags/Collection-Iteration-with-Closures/index.html","d07c5266d6dfd38249ed9643565f28f3"],["/tags/Collection-Protocols/index.html","2b5b68618a231f9ad04cbc98b7eece51"],["/tags/Collection-Types/index.html","2ef3f68e8ac5ba18007f2ca4425847ec"],["/tags/Collection/index.html","7d3ea35c8c5e3591b966afcd4d4dc53c"],["/tags/Collections/index.html","252b66f1809cf872ce636d9dbcbc2aa4"],["/tags/Combine-framework/index.html","32f5ac2c8b41f6b931b9730bb00f288d"],["/tags/Combine/index.html","49359925f1983d9f945828cb0039ae1d"],["/tags/Dependency-Injection/index.html","ca9caad5feb31db4e10f1106be381c82"],["/tags/Encoding-Decoding-Types/index.html","70580f6c6942d488ce44802f4ed1c938"],["/tags/Encoding-and-Decoding/index.html","c76a40e248e186f990edc9e05be320ce"],["/tags/Enumerations/index.html","1a4b8b9d3dc0e94d4a01107d0a292c5f"],["/tags/Enums/index.html","e1ac0950301ed5354af65845b5b2199e"],["/tags/Error-Handling/index.html","9b8fa89f603fbc2832e679ae58ee9d81"],["/tags/Functions/index.html","e396418058ac6aa14d3814cc0050f39b"],["/tags/GO/index.html","48747df4f57311c1148d4c18c94e9479"],["/tags/GRDB/index.html","9f297bbb17b77600f7ce56e65aec665a"],["/tags/Generics/index.html","71c931c546c3683f7cdc2358b0bef15f"],["/tags/Grand-Central-Dispatch/index.html","b9815b8e8f2e8e4d992005ac31beab54"],["/tags/Hello-Vapor/index.html","9a2e57ab30f4b643dc2ce5266b5a080e"],["/tags/Homebrew/index.html","4def526c21a62f21a9d8a7e2c14eb571"],["/tags/Interoperability/index.html","647b9e147c06498d73892bff16fac3b0"],["/tags/Introduction/index.html","524cde0e9ff12de7ec52ccfc5342a1e7"],["/tags/Leaf/index.html","ff53214b6188df9446adabe8cb0248ab"],["/tags/Linux/index.html","3f28108f5468f16c5cbe78471fad7aea"],["/tags/Methods/index.html","f3ac98e26005a48bc88abe7e46dda998"],["/tags/Modules-And-Hooks/index.html","d37f77500ae8c09e2d7ad0b33cbbabd7"],["/tags/MySQL/index.html","fc46314bf6480ab89c1463ed2f4548a1"],["/tags/Optionals/index.html","903b854a235e1d4b41048fe3e00f5f5f"],["/tags/Promises/index.html","03e47fe643b0f47cc08b0a9ba9af678b"],["/tags/Properties/index.html","33ec31aa04e20fee1d17fda1e17d533d"],["/tags/Protobuf/index.html","2e95d125c054c67e3fe419294901d49c"],["/tags/Protocols/index.html","057fe60932f6286c04dc4711b9956be5"],["/tags/Result-Type/index.html","33a4c279351b3fc1956f87d03c6ea251"],["/tags/RxSwift/index.html","47cb5ffc56f55d4821e8145e8307595d"],["/tags/Server/index.html","4d7d0e836aae8a4c33cc1b4b5c2b7b86"],["/tags/Session/index.html","ce7a8302f083bc6341ce939a46cc55b8"],["/tags/Sqlite/index.html","1624ae6729102012d3f82bdb311c725c"],["/tags/Strings/index.html","bb89e814c2e055e3683a5d00908ddfbc"],["/tags/Structs-and-Classes/index.html","f2a472007f7049c8f618a4cbf05cb769"],["/tags/Structures/index.html","343cafbb4bdf48e9810c275868860745"],["/tags/Swift-5-0/index.html","23b154f38d408e2bfcf3c21c981c25a7"],["/tags/Swift-5-0/page/2/index.html","b5b20e3a06c7f657ca24a55305e321e9"],["/tags/Swift-5-0/page/3/index.html","821284da99d0d84120b81163d165bc06"],["/tags/Swift-5-0/page/4/index.html","60dd26517d97f9881540bc4244df98d6"],["/tags/Swift-5-0/page/5/index.html","4f0bd35f4c7f685e756716910e8b8abf"],["/tags/Swift-Apprentice/index.html","8444b001818b887b0e6924ba70306a8c"],["/tags/Swift-Apprentice/page/2/index.html","a5669321eca11f9d9586f31778784273"],["/tags/Swift-Apprentice/page/3/index.html","cc9fc5c55f117179ba9ddf4cafa1658a"],["/tags/Swift-Package-Manager/index.html","0914918ff5d51008cd7e1791b8f4a83b"],["/tags/Swift-源码阅读/index.html","bf41e57943e6fd0aed2600503d3b8a47"],["/tags/Swift/index.html","10b4436c35ab3b202393c68c7228db1d"],["/tags/Swift/page/10/index.html","3df828cb3174df120c9b2afb55fe5fee"],["/tags/Swift/page/11/index.html","60a0fceb7b6d07059a8f17396aa38cc4"],["/tags/Swift/page/12/index.html","0ecae46867a6f31fcfc67efe0aba19d4"],["/tags/Swift/page/13/index.html","b007cb864176ea9358bf47a5e4aff7b9"],["/tags/Swift/page/14/index.html","3aa7a7bf6a44568999bb7b3ec077d728"],["/tags/Swift/page/2/index.html","dadf898ab2ce0a635275dfc9bfbcbb42"],["/tags/Swift/page/3/index.html","f5afe472e09737efbfbf8c95009cdaee"],["/tags/Swift/page/4/index.html","9a3b3513ff6eff9e4c241072e5884979"],["/tags/Swift/page/5/index.html","087285992b87c73c53fb2c0d35c54a74"],["/tags/Swift/page/6/index.html","8699502b417fc6eab1d1a96f996de5be"],["/tags/Swift/page/7/index.html","b15dd35f114805fec8ad86c3e13cc04c"],["/tags/Swift/page/8/index.html","4fa34c3bad214c38207345560495e85d"],["/tags/Swift/page/9/index.html","9274910102b74fdab5627e15ebd1a4f9"],["/tags/SwiftLint/index.html","c87a5be68b4b7ec15bb1a4aaedacc1d5"],["/tags/SwiftUI/index.html","bbe9c97b30a61073bdace863fed8a4df"],["/tags/UICollectionView/index.html","c3318a4f988bdb7ff2e3d5d69bfb456d"],["/tags/UIColor/index.html","7aa3a4676a3d06761d490f59bed95614"],["/tags/UIImagePickerController/index.html","13d121d589453928f765afdc9919ed3a"],["/tags/UIKit/index.html","81028a15318847a5243c9c1c8929fd97"],["/tags/UIKit/page/2/index.html","4ad13b5a70b7559689999530262bc27c"],["/tags/UIKit/page/3/index.html","06baf24999bc3935dfccd436120f1b8f"],["/tags/UIKit/page/4/index.html","349ac195f42f981198092575bb655adf"],["/tags/UIKit/page/5/index.html","b2b7eca689374abe162ad1b34c5199f6"],["/tags/UITableView/index.html","d8795fc0a259aec138a255053a158fa7"],["/tags/Ubuntu/index.html","ecc936bb896fd73ac2789d35bb5a5283"],["/tags/Uniquely-identifying-views/index.html","54ccbfa6a2d7b7126506cd721c7da6e9"],["/tags/VIPER/index.html","ed6ff221c7febac54ca932057dc9e2df"],["/tags/VMware/index.html","d104fbdd2d107353d765feff992eec28"],["/tags/Vapor-4-0/index.html","68eb852cf3380d6b1f5d9b1d58652b8c"],["/tags/Vapor-初探/index.html","558fb748d22c322fc290c12be78f2924"],["/tags/Vim/index.html","f31a8e9be9e76554a65679901a651d79"],["/tags/WKWebView/index.html","3b6617e88637ec127c82cce3d84a6086"],["/tags/Xcode/index.html","f2e3225f1482af6eba743f0920e6a850"],["/tags/appleOS-Networking/index.html","36686faf658e5ef790257bb716620abf"],["/tags/bugly/index.html","fa7b7c18fa08c51898c30138a9cc02dc"],["/tags/enum/index.html","8e3bb064834eedbf6aeee14f3b1b376e"],["/tags/git/index.html","75e53eab3740de3768d19001f1b69fa0"],["/tags/hexo/index.html","4900a8279af4d70390572f4c454363d6"],["/tags/iCloud/index.html","339f882bc0b869baf14ece84972ec648"],["/tags/iOS/index.html","b8a740854b56dfe0e7ec25f127478061"],["/tags/iOS/page/10/index.html","d4b77023c4f38905a824f64f8be1d369"],["/tags/iOS/page/11/index.html","799748493b8c27d68f204ba867f892e0"],["/tags/iOS/page/12/index.html","7588676a7893567f7a9daffbb4b46e82"],["/tags/iOS/page/13/index.html","9cdc30d379d5d484bacc76f336430e3f"],["/tags/iOS/page/14/index.html","b09231d3ccdcb996ffd4e1ad0b5e34e3"],["/tags/iOS/page/2/index.html","546a229fea7333a19dc30d752ecdad89"],["/tags/iOS/page/3/index.html","f7ab88db78b4f8daf6a5dd9d6b9da906"],["/tags/iOS/page/4/index.html","92a6f0f54447280bca2e22acb9004a59"],["/tags/iOS/page/5/index.html","6d2eb1a5093dcdfe868f5c098f5ba75f"],["/tags/iOS/page/6/index.html","df6c020136d654615ad83fe1a9353e3f"],["/tags/iOS/page/7/index.html","7a17b995b96ce3be271d9c74fb5fdb8b"],["/tags/iOS/page/8/index.html","3c988dd0d45b32a48ce8f021c2c77f7d"],["/tags/iOS/page/9/index.html","301cf79bc55e786e91f4005215f51520"],["/tags/iOS面试题/index.html","b8d912cca1282a4597efad1e0793495f"],["/tags/index.html","8c289e5f8f68c72d4c166831c65dc0b4"],["/tags/non-optional/index.html","f006d8c66c1e7e7d7baa20cec5c781a8"],["/tags/random/index.html","66bae48df0e926a5d3d2d4cfcc1a2a6e"],["/tags/transition/index.html","ed227aebd151205c4b548824d33ae2e8"],["/tags/三方类库/index.html","279a39d383ba35feb37600d3e0df1527"],["/tags/依赖注入设计模式/index.html","9baeacb9ff26e412633b24d220e6bf6b"],["/tags/值类型和值语义/index.html","42473c10158c5b979bf7c07abdee6199"],["/tags/内存管理/index.html","9edace4d64a68bef244174e2e81c4125"],["/tags/冒烟测试与回归测试/index.html","a66cad473ad3c8e8ede1daa15dfd975e"],["/tags/函数式编程/index.html","47b72f33009ed259565a8b114411741b"],["/tags/创建博客数据库/index.html","80b860b01adeb85c453cb2ff35740636"],["/tags/初始化模式/index.html","b078b57f0d8bd03ace981c3b7b273c18"],["/tags/单例模式/index.html","6e0de4bdb3e5967a7faaf07ba07ece8a"],["/tags/原型设计模式/index.html","7c22f1ae54eb0083eec5354f9189e557"],["/tags/命令设计模式/index.html","052ff7043330657f3483005f4ea48a0c"],["/tags/基本控制流/index.html","49ecb9cb175bb7f6ce51225394e235b3"],["/tags/基础语法/index.html","ea36d214749b9daf754cbc303077f2f1"],["/tags/外观设计模式/index.html","5ea8fe4b6b4b1a7c4534583acdbebb5b"],["/tags/委托设计模式/index.html","7a65124fa5c74e139c5c0d731c55166d"],["/tags/子类化样式/index.html","58e99f442f1cad7452f6b49d8782b7cd"],["/tags/对象池设计模式/index.html","15964da072908511abbb25a404f8277f"],["/tags/工厂方法设计模式/index.html","76c2bfac9e23c9b37bbbf0e20ea357d4"],["/tags/工厂模式/index.html","1bb72471c183600f6ad5bed0a4cb2d9e"],["/tags/工厂设计模式/index.html","4b140f2fe04e0ce904829be6d2b61d7b"],["/tags/开发技巧/index.html","54c7110a7f359c9d403dfafafdd07b38"],["/tags/开发记录/index.html","125d92130d5cde4923476e2e4e38752f"],["/tags/懒加载模式/index.html","166063a9ebc9d2906c0bb7f4f6257f2b"],["/tags/抽象工厂设计模式/index.html","945cdf5686f2a6a538017dd4a10d5740"],["/tags/数据库/index.html","97ce24367e4a23d4234c991640bf0413"],["/tags/构造函数/index.html","ac4b4073f553b56faa69ed57fd5eca3a"],["/tags/架构设计/index.html","20aa1aa6940655aee3f70128a3cc47f5"],["/tags/模式匹配/index.html","e3051788ccde03a7beb1167b97ddcd01"],["/tags/环境搭建与验证/index.html","43ebc74db25d119c8f3058fa287102f1"],["/tags/生成器模式/index.html","b9cf610100cc851a8805bd284c56e4d7"],["/tags/用户体验/index.html","13ce2359462b2e9cce6ce70bb8372d86"],["/tags/用户协议与隐私政策/index.html","aac526cd3b9afa438f67204c609571a6"],["/tags/类型与操作/index.html","4babb793f4f679bb38196b93eb7b716e"],["/tags/自动化布局/index.html","5f2dc1b904c06fdd7dbb95a1b6fed7f9"],["/tags/自定义UIView/index.html","8d0ed4af53d2642658db155774c4b19a"],["/tags/自定义转场/index.html","534c297f8d5c2af1b4915c9ac47bbbd6"],["/tags/自适应布局/index.html","bffa8f15cc773e07d14c9114202481f0"],["/tags/表达式、变量和常量/index.html","a2815b1a0dcdf50f3b2df2a3271bfee5"],["/tags/设计模式/index.html","64fa1f84e8c0572d5862bb776b473081"],["/tags/设计模式/page/2/index.html","c82e32eda5c86718d31cd77f50ef5b2f"],["/tags/设计模式/page/3/index.html","be952664f6e815e27065631af0a7a209"],["/tags/访问控制和代码组织/index.html","0e950befb315a80d41cade289a5c04bb"],["/tags/运算符，下标和键路径/index.html","b787b7b69290581ec93b082635da3a7a"],["/tags/迭代器设计模式/index.html","63426de9dd1046426351894a5ce82ac3"],["/tags/适配器设计模式/index.html","9ec4038d5bfaa752fd4969ac2ebe6fc8"],["/tags/错误处理/index.html","66b96264fd1fd87956d5f1978faf8834"],["/tags/静态工厂方法/index.html","fb34fb07266b320e34c9ee11907fa6ef"],["/tags/面向协议编程-OOP/index.html","858b87a186d658fbe5edb2435d06f2aa"],["/tags/高级主题/index.html","d40af428a93b346bdec7630d1304740b"],["/tags/高级协议和泛型/index.html","aa1bab823e4bd480d0e1176e41518df1"],["/tags/高级控制流/index.html","e378d809e60e2d37fa846f26eae22447"],["/xcode 常用的快捷键/index.html","39fb0c01dab2da6e487890ad1114778b"],["/为iOS应用构建输入表单/index.html","880356d83c43419f2774bfe0d1a974c4"],["/产品开发的幕后花絮/index.html","28ae7c9baa3825e58fb39bb508f2f027"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","fb93ae52d25c769a3770311cf0439426"],["/冒烟测试与回归测试/index.html","603172caf5c266d1b7993d962ca76ce8"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9d08b8771491fb06a87abedd39521a8c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8532823edf5d71374303dcb8999f987e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d560da5281a9d582682b8eb67edbd4b8"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","868efc758fd3463edc36364fa68c9da5"],["/在Swift中创建自定义集合/index.html","67cff8582104e33b514973f2decae498"],["/在Swift中处理非可选选项/index.html","42ae48aef01414927aa35e692f7417ef"],["/在Swift中生成随机数/index.html","61637b459b22ee3134980f0cc78aa2c0"],["/在Swift中重构单例模式用法/index.html","fff387f9cef555ab1bfd2be733a599d3"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","401872cf2f067a27811694bf53737dd3"],["/如何为VIPER编写服务？/index.html","f94c7fff7c6a25c72e2d695a7cbeece5"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c414361fff8b47873b3151bf08178c53"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","e2f7a29c6a15e5b89b087f7608d18671"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2c342cbd54f4b439d9c3b2df6d878593"],["/如何使用VIPER构建SwiftUI Apps？/index.html","261e74a3581df9d581cdbc4db2d6b2bf"],["/掌握VIPER架构/index.html","197879cf73b70c38fe40b2161b316b54"],["/揭秘 WordPress Hook 系统/index.html","dabe70267f4aeca405c0cc07c39e01fd"],["/比较工厂设计模式/index.html","c6b56424c23a5f201413692a39403e6b"],["/深入了解Swift中的Grand Central Dispatch/index.html","66d6b2359e91091e10d7347fbe5fdd31"],["/深入研究Swift框架/index.html","2d93c108478566149c7218d7f4dd0d88"],["/适用于iOS开发人员的VIPER最佳实践/index.html","cefdbb025f1855c7cece909f12cb1fc0"],["/选择Swift而不是Objective-C的5个理由/index.html","5dc1a7293da9b9d9b4f802aa5c69a8e4"]];
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
