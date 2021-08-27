/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","95771577358bf5a491a3cfc529cc8917"],["/2020年iOS面试题总结(三)/index.html","f8a83146d54ead676394a7d8cd3cc686"],["/2020年iOS面试题总结(二)/index.html","2d1ec4c601cd7a35acd3d4086513a6d4"],["/Advanced Swift系列(一): Swift 简介/index.html","eaeb6a313fb163cfde98f1cc1148d2d5"],["/Advanced Swift系列(七): Strings/index.html","e25dfbfd4df259b78ae779eb2ae0c179"],["/Advanced Swift系列(三):  Optionals/index.html","5a825e5bd936b542a222f9f0618c734c"],["/Advanced Swift系列(九): Protocols/index.html","c0a122d9b562b8c4b57adc306bacfb9b"],["/Advanced Swift系列(二): Build-in Collections/index.html","b82d4411545b80df6ed3cf1aea427a54"],["/Advanced Swift系列(五): Structs and Classes/index.html","a4913b865a462b7c7e3095bf7dc75b14"],["/Advanced Swift系列(八): Generics/index.html","cacdc706980b47d5dee4a8bfaec90359"],["/Advanced Swift系列(六):  Enums/index.html","201a84663ef46d869783348213a8ed06"],["/Advanced Swift系列(十): Collection Protocols/index.html","6eb855aa1128cb2194a115c629932b05"],["/Advanced Swift系列(十一): Error Handling/index.html","1c78f61b0d7de275ed1b6756441a9eaa"],["/Advanced Swift系列(十三): Interoperability/index.html","0564ec693c2f1f73936ed7cd9cd92490"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","948edc43c204cbaa7e44bc04d5836894"],["/Advanced Swift系列(四):  Functions/index.html","30ae0a924baa2ba65ad2bbf7833260f3"],["/App Architecture系列(一):  简介/index.html","423cf5a76604dcdca823eea3f57cdc87"],["/Functional Swift 初探/index.html","af5fab0fd2d1403ee9a563a432e65532"],["/Git 使用小技巧/index.html","bda677bc646196cd0bdc6378fda156f2"],["/Go mysql Tips/index.html","c2dda18b27bb9dc9eda64b41d74743d6"],["/Go 基本语法初探(一)/index.html","6c634629e0bc0052309cc2fdf0b19510"],["/Linux VIM 命令及操作小结/index.html","42e0f4d5006988e0d21cdaf2f1a86603"],["/MySQL 基本操作/index.html","7728ecaedea2f6242a60e3fa84835ccb"],["/MySQL-列类型和数据完整性/index.html","68adf81b295e3fd2a3b1cc64ed667030"],["/MySQL-数据库设计和查询语句/index.html","d8f5ab2e3ec8ce0c44cbc6e50286b23c"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","974919d0584fa0c1def81a7545de5220"],["/NSCODER和SWIFT初始化/index.html","c6bbfc3ecfc3af09db64bd0bf19b6180"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","ebaf08723936fb38129eb679e2f425b0"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","2fbfb22c3598722cf7f33017db6a89e1"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","54a10ecf6b74700495248edc53d1a431"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","56dd01e52b45ac898c80d5270611028a"],["/Sqlite 使用Tips/index.html","f65ce35bde3566f0dbd9dd940714bf07"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","e5c4a45b21e99a8bd80a6947372f92b9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","377a62b86dae4250f8e0ece285088524"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c0fa23dc5e586620e6936e851a847a55"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a58233c448fcd16801b50a4adcfd3b6c"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","7b36e9037d67fbd0c77f24f473d07eaf"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","64283304d22cf1813939a88eba39d8d4"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b1241c21272f8d91d08ca28ebae4b7b1"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a7330a3e950f7e6e75b0f16e7f128c1e"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","df12dbcd9b1877660cd7af23366374b6"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b5b5e66176421c263c274071a8e431be"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","0412b607ca82dd38e738c209f4c0ff88"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","cd5a86b829afcd26a9ff09c8d0681200"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","acb14e75fd3a92999ac5b804a4f5df0f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","09a5ed32e19a0931cb9f2e31c537a214"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ee7b13461a6314c71635516137f003a2"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","78f778c8625bdf1990a33743e4ac56b2"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","bdda2be4c07427829148854f33e9298d"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","4171dbfafeef51d56e6b8870e6ab62a0"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ba945c824c356e7b0dfdd25ddac3270e"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ecc051280818fb65162a8db29d495815"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","bd3b4a70dbbc874326d8a1885089ae1e"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","e3a40b100b7182388e29fdfe0500e0f2"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","81f02d7bc70a4c92cd05f0633c65d990"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7421d7376c74eebfa46a4559a9b4d24d"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","a11e0d3785fd578fd37a59b31548a2a7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","02da81d06e36bf183eaaaa46a510e032"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","5d433b7ee6ea9503f6498d733d02c234"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","201e0aa14d855e102c858ef04f9c07b0"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","4dae63b4f004c4fe063a8e821afee96a"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","d7b67bff965a150770da52cd0b4e6911"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0207a31aecba0cb62e871c2c7e4f6c00"],["/Swift CompactMap vs flatMap：差异说明/index.html","e5c5db5322defdb2724f766c0045c78b"],["/Swift Grand Central Dispatch 深入实践/index.html","e63f8b11233d87ab40abac2a6cbedb1c"],["/Swift Lazy属性初始化/index.html","beccd670abaf923d5db867ee5966b25b"],["/Swift Promises 初体验/index.html","231b791230ec9b2b943cb536cdbdbe68"],["/Swift Promises 探究/index.html","65442f739432788923cc441dcff64d0f"],["/Swift UICollectionView使用指南/index.html","16381beb83ba6290375aa3376d57c04c"],["/Swift URLSession && Combine framework/index.html","b8f4c17e8a0ad3a6b28b9a75a6ff5d03"],["/Swift tips/index.html","6145feb9279b57bbb026402d4cf4dd01"],["/Swift 三方库：GRDB 使用指北/index.html","e923d792e67397392d8326ca7da7a205"],["/Swift 唯一识别的视图/index.html","387447f566f6a5201f70d9f8e42f5425"],["/Swift 如何学习现代UIKit？/index.html","73fa9a696e8848668d9e74ecc398a151"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","bd7f548682ccbce17d2ef6f203fb509e"],["/Swift 用 compactMap 替换 flatMap/index.html","17a9c41aa6512dab4409fd36d44726ab"],["/Swift 选择和播放视频/index.html","c4d11863663e87ce907fa2f0ecee4560"],["/SwiftUI 系列(一)：1、 简介/index.html","accabd1988747c97af75be87329b9d70"],["/Swift中UIColor最佳实践/index.html","b97c615a792953127c3c09b9c419194f"],["/Swift中快速简单的工厂设计模式/index.html","7bd657b13340bc2d86d856e328d66b91"],["/Swift中构造函数与静态工厂方法的比较/index.html","dde44b0cbf2fff10247223f4635e8c53"],["/Swift中的UITableView教程/index.html","6766fbfdf0e99596839ae27edaee332b"],["/Swift中的懒加载模式/index.html","128a4860135833419b6169166e3df49c"],["/Swift中的模块和挂钩/index.html","2aa1be702539a1ae08daba5322476086"],["/Swift使用布局锚点添加约束/index.html","3ff47dc0e0c138721b8a787e540d9495"],["/Swift依赖注入设计模式/index.html","07527558a0a8c8a53d1a7c601ad71ab6"],["/Swift关于Dependency Injection (DI)/index.html","4e6cd2f0716362c66909b8308dea8cf9"],["/Swift初始化模式/index.html","460c0e24a58e4132f86916565f6345f0"],["/Swift单例模式/index.html","a1359e72b911f1d7fcb225f1bf5db94c"],["/Swift原型设计模式/index.html","e99b82c5c24a69899f698db6646b7bb2"],["/Swift命令设计模式/index.html","a1ae4f89413656c73a07997ab0532365"],["/Swift外观设计模式/index.html","018ef04c00e96d391e882bd2b02360a2"],["/Swift委托设计模式/index.html","2de8b4739d5dd592fccf55da993a9330"],["/Swift对象池设计模式/index.html","7359bd600bba0b2b768ac8cab6856064"],["/Swift工厂方法设计模式/index.html","ff1d64f2dae85785e649c597ac3c3124"],["/Swift带闭包的懒惰初始化/index.html","25c70e37735c8d4ef3abdb5577a60b1e"],["/Swift抽象工厂设计模式/index.html","1c657f9b8e416a6b1f59488ccb482c17"],["/Swift掌握iOS自动布局锚点/index.html","846b769e807188cd233e936e7fd99483"],["/Swift支持旋转的自适应单元格/index.html","2f533e3b783063b99bf9a6587e4770fb"],["/Swift枚举值/index.html","3baa8a5de6238cb641462277d1c056e1"],["/Swift生成器模式/index.html","d42df76b96e55c45fe827300184ce7aa"],["/Swift结合Xib文件自定义UIView/index.html","b646b4cd2b0d6d1cc9a389819022fc33"],["/Swift编写的20个iOS库(一)/index.html","ecf9f541b848e69f346384b0a6753f4a"],["/Swift迭代器设计模式/index.html","a5cc137cf2f469886a0eccd15587db6c"],["/Swift适配器设计模式/index.html","179dcab271ff65bbac045d437207b4a1"],["/Swift静态工厂设计模式/index.html","5bb1079c43eaf1a5ab07ad161863865b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","50b3ed3ad22e80d508ec16057614426b"],["/UICollectionView data source and delegates/index.html","f8fb176f4fff7a7eb56eab7c2de8a846"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","233f2d2260332ad6f9e09d565d807ac2"],["/UIKit初始化模式/index.html","58869c8e8fe49a5c411dba28b5214f19"],["/Ubuntu18.04替换国内源/index.html","fc0c72bc161269bcf1347e6dde5c8f32"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ae32bf3bb6d25b11d7cdc3921bf7f2bd"],["/Vapor系列 (一) :  Vapor 初探/index.html","d0f87118c31d504b20c2432d978cf159"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9101b165e46e45a127769ac9dd8f1493"],["/Vapor系列 (二) :  Hello Vapor！/index.html","b3900a608285e397058d43935f558d9b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","096011bfc659392e0f498ab0167add72"],["/Vapor系列 (四) :  创建博客数据库/index.html","59a5782a841fe9c08250323a73f398e8"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e5a3b85a08465f3fe8acb8875ad1a034"],["/WKWebView与Native交互注意事项/index.html","1d0b03ec14584982ae6b0dca2e480d95"],["/Xcode扩展/index.html","22fbded08e39c588dad60978115cfb2a"],["/about/index.html","8310ec3a14d805de6303972284756129"],["/appleOS的Networking示例/index.html","4e4932fe386149cd9b97df1bfde940ce"],["/archives/2020/03/index.html","7e8b9892a202a5143d6d9132df50f3cf"],["/archives/2020/04/index.html","3874d2e7028a0eb70512fb6fbe02c4d7"],["/archives/2020/04/page/2/index.html","c38e959ee6f350775b019889b5048fca"],["/archives/2020/04/page/3/index.html","78246c55a5ceca1c7d20343aec354e44"],["/archives/2020/04/page/4/index.html","b0cffef7692fe7a7dc0ceed6d6b805b1"],["/archives/2020/04/page/5/index.html","54b393831724261e57fe697398fa02b0"],["/archives/2020/04/page/6/index.html","f02564edd1c3f3cf9e6a2a47c660e911"],["/archives/2020/04/page/7/index.html","977919a5c06098e646597022cb9a4b0e"],["/archives/2020/04/page/8/index.html","a26efc98d10517dfb32288a9e737b89f"],["/archives/2020/05/index.html","24912bd22da54f1b8b40e467c14929fc"],["/archives/2020/05/page/2/index.html","ef98e31440b187396040b1b8b9f3022c"],["/archives/2020/05/page/3/index.html","33ca0e1d92718b8ce49f452fc3f31b6f"],["/archives/2020/05/page/4/index.html","bf4192729d6228a1b426680b12eccb66"],["/archives/2020/05/page/5/index.html","bc557ef7d22f5e11e0a647cee4b3ba15"],["/archives/2020/06/index.html","1a94c42196d135656165bd07f54b323d"],["/archives/2020/06/page/2/index.html","76aee86d3d87230b2fcdd2b56df2192f"],["/archives/2020/08/index.html","00b3abb02a0b9df734ea7171126b4622"],["/archives/2020/09/index.html","b0c83b0e769c4df3f84bbfd36d62a634"],["/archives/2020/10/index.html","6eddca5d4a5c2dd9b13eb9318d860231"],["/archives/2020/11/index.html","51d4d00b4dd0ad929839a86877893e0b"],["/archives/2020/12/index.html","c2d8152f504b3f9a4042a800d1fadaf8"],["/archives/2020/index.html","7ed0561b67f9f68f7f27dc83bb258946"],["/archives/2020/page/10/index.html","59f1c84c82979c3402bfa7f58aa5a7d4"],["/archives/2020/page/11/index.html","3441f61cd24eb774cdca9cdbd06e77c7"],["/archives/2020/page/12/index.html","153c9ae12532417797bad110b97961cb"],["/archives/2020/page/13/index.html","6eaba7d98356086cd296d4d3b8722dd5"],["/archives/2020/page/14/index.html","f1b1c165ead252d90dcb7fe0d5689eb4"],["/archives/2020/page/15/index.html","e4f55ec6362f2944825a361e97ecb654"],["/archives/2020/page/2/index.html","3a5439ed9910dea4073e7da78ed19fc3"],["/archives/2020/page/3/index.html","2abba80a3b55d02dea405ef41e511ede"],["/archives/2020/page/4/index.html","f6a88d7b78a76d8aa2e4594b3caef009"],["/archives/2020/page/5/index.html","c9fa57e1e076b194ea3a41a9e457a5c6"],["/archives/2020/page/6/index.html","0eeaa50fc8085e650953a9fe16dbaab9"],["/archives/2020/page/7/index.html","da2e593fa66e3782bcd55a790b2252a3"],["/archives/2020/page/8/index.html","a4c2336f25f278398aa2d0ec434d1988"],["/archives/2020/page/9/index.html","c3ebdb894e55f62c0c999fcd0ad491ed"],["/archives/2021/03/index.html","ea57e098e01d8371e3d46f970e733638"],["/archives/2021/04/index.html","90d5215e5f8a98eff7183d0fa30c08e8"],["/archives/2021/05/index.html","3b37b0cd6886139fb37dc02971c161a7"],["/archives/2021/06/index.html","6c294ab3b39c0bfacd47cccc2b3301d5"],["/archives/2021/07/index.html","4a65b8a806bc7091b10d3277abbbe7c1"],["/archives/2021/08/index.html","6aff1960b1bc9dd85d8fe50c9e9f5e27"],["/archives/2021/index.html","3ae60bd56e84a9ef991d648b62176ccb"],["/archives/2021/page/2/index.html","0a62e2b7b058ac5234252ff3f12fbb81"],["/archives/index.html","c61a7ec49e33a83a1d63b4f94311cd12"],["/archives/page/10/index.html","834b66ec07c5d1176612906707a8ccac"],["/archives/page/11/index.html","a466412f22bafb7d23d7672ce33e764b"],["/archives/page/12/index.html","88428557a4eab6abf5ad4f1e127d86c6"],["/archives/page/13/index.html","0c252f4d9c04b57e97044db04db5df4f"],["/archives/page/14/index.html","2e0a76f7a40c7566aebf81c0f5c10941"],["/archives/page/15/index.html","5ae207b628317bf88ab3a460db182020"],["/archives/page/16/index.html","aac8f9868e119119f79d4162c1510d24"],["/archives/page/17/index.html","a364138870c248657e8bdb7b3de472de"],["/archives/page/2/index.html","427aa329df0537b475b282ceb40022bc"],["/archives/page/3/index.html","0eb0da3df6131579f092f31819e2d044"],["/archives/page/4/index.html","082cd40a91dcfc03ad6b311db1a4bde0"],["/archives/page/5/index.html","bf691ca12a278fd4ec1e28f4c4b6d503"],["/archives/page/6/index.html","8690123e1907e61d9ed5d6456c492cc4"],["/archives/page/7/index.html","1779f667808a87c3120f293d14672e7e"],["/archives/page/8/index.html","bf1217a26f1f3b7628b6c04b2b9403f6"],["/archives/page/9/index.html","b29afc0ceaa1b3e862920f8cc20cec95"],["/bugly 上传dYSM文件小记/index.html","eaac3a36c7a3eed68405cd133824c9c1"],["/categories/Advanced-Swift/index.html","51ab1c9dda7b0d526e28e9dd978b09db"],["/categories/Advanced-Swift/page/2/index.html","fbba0183402c8a4feff123a808546af7"],["/categories/App-Architecture/index.html","a19583ffc790a17a4c277010891d829c"],["/categories/Array/index.html","a139aafadfcf49a6f02278f7de6e67c8"],["/categories/Codable-protocol/index.html","59d155324631e5784f6c550f561512a9"],["/categories/Combine-framework/index.html","99140c8233f5b7386b81fb34931053f1"],["/categories/Combine/index.html","b9cf7c8bee9cce32aece68b7f12abf26"],["/categories/GRDB/index.html","98bfa24d40e73787c21a7c5140608dd3"],["/categories/Go/index.html","3dc3254312dbf6dcd1d8ac90b23b953e"],["/categories/Grand-Central-Dispatch/index.html","f48dd434a1c059147261f32a503465e4"],["/categories/Hexo/index.html","2d221290d6c71103644e6117789f7617"],["/categories/Homebrew/index.html","fea2c86d2642d3337d8165282e07a218"],["/categories/Linux/index.html","7f1b2140df2afc6477a0e9f0fecbaf13"],["/categories/MySQL/index.html","114885f3c629b00246a8dd26916caa72"],["/categories/Promises/index.html","1a129a1c6010df09deb3b95851d99843"],["/categories/Result-Type/index.html","2f29ddbc42d86ae4473dd242137be754"],["/categories/RxSwift/index.html","4597008bb5c9d90baf2b657cff6aa00c"],["/categories/Server/index.html","1f27050fe5df71691367ac4f0350312a"],["/categories/Sqlite/index.html","021e3d9ea6be324a84393b8c90f4e093"],["/categories/Swift-Apprentice/index.html","b27dd36b240645b1bb6aba9f18910b58"],["/categories/Swift-Apprentice/page/2/index.html","bb51cb64d1acfb0920073c55f2ec89e8"],["/categories/Swift-Apprentice/page/3/index.html","07a7be7747d7763b74aab68724603c44"],["/categories/Swift-源码阅读/index.html","5ff6eaf964699ed2ddf5ed057bed457a"],["/categories/Swift/index.html","61b59f9f774630585bfb2180128b11d4"],["/categories/Swift/page/10/index.html","ae75a379b37ac429778ff31b8d940675"],["/categories/Swift/page/11/index.html","f94ddf809cb590564308e3e1d74a740d"],["/categories/Swift/page/12/index.html","261e6d34d93a6b4d486bff2883c53852"],["/categories/Swift/page/13/index.html","ca3ea1ac544cb5f579021cb91cea66d6"],["/categories/Swift/page/2/index.html","7b95240c673df9478b028c1e89096f6e"],["/categories/Swift/page/3/index.html","315af5363ce5c43c356f5f91ee47f574"],["/categories/Swift/page/4/index.html","9045abf5dfbf688e04a38c4f486f64c8"],["/categories/Swift/page/5/index.html","bb33859b52180d9ba494cb637e571004"],["/categories/Swift/page/6/index.html","25c551d81639cb18614097e629528197"],["/categories/Swift/page/7/index.html","c52fc7762fe8ededde0f2b4c636b2c57"],["/categories/Swift/page/8/index.html","a4cb3d078e2af69d029a9f3ae90cf5c0"],["/categories/Swift/page/9/index.html","36a062207ac407b6f75f4d23f2453032"],["/categories/Swift5-2/index.html","8f5882055996e8fe1e4f1e95d050db00"],["/categories/SwiftLint/index.html","05cc652f3140fd4d89bd4b5ebfb73980"],["/categories/SwiftUI/index.html","d349ab5b1fd09f500d40a697d9795972"],["/categories/UICollectionView/index.html","b0efb172f1b37580cd1e543ceae5e8f5"],["/categories/UIImagePickerController/index.html","d8330dee7da6494ac95b76d6c333f558"],["/categories/UIKit/index.html","e220f431850715483f2b15d9c6c9488a"],["/categories/UIKit/page/2/index.html","8d995310b232f4cf66c4e115402c53e5"],["/categories/UIKit/page/3/index.html","ba193b647ac373e0f2838b3823cfa5d9"],["/categories/UIKit/page/4/index.html","08d3b20c27a38e8987ef7635abc54858"],["/categories/UIKit/page/5/index.html","4305a36890be5948f95c2c8bef4aa0c2"],["/categories/UITableView/index.html","7552345343b053bddf4fa90eae5d3e21"],["/categories/Ubuntu18-04/index.html","07b7f96ec3bbed8d8d4863554d838653"],["/categories/Ubuntu软件源/index.html","2c2df292b98d799ba24bb00e7d9a04c3"],["/categories/Uniquely-identifying-views/index.html","a5b0573d1364d9e43efff4c9a641be65"],["/categories/VIPER/index.html","66275e1c7cc910998143efe399bcdb2d"],["/categories/Vapor-4-0/index.html","6c01097036d0c561255c695ddfbca042"],["/categories/Vapor4-0/index.html","58b808b3e21e0cce732f5fc9c9b5d4c2"],["/categories/Vim/index.html","8cf17405bcda527fda66c7de76d57336"],["/categories/WKWebView/index.html","d6458b5641fabdcaad7eed16a852766c"],["/categories/Xcode/index.html","a92c2b7761dd5f32d27cf22a18beeaed"],["/categories/appleOS-Networking/index.html","06ee99806962d3ce4a79a3df7cf6b416"],["/categories/bugly/index.html","a5d47affcb3cbff69f8ef34e2afb1778"],["/categories/enum/index.html","615a8d3f416893301372767fd16a24d0"],["/categories/git/index.html","556736dc7cd515a497fe5a39c3b03ab8"],["/categories/iCloud/index.html","3192e128d089db48b5382503bd55bc77"],["/categories/iOS/index.html","beb417a3b258cd6fa3f131831db9c0e0"],["/categories/iOS/page/10/index.html","10043e89c81e9241c74de1b025e75098"],["/categories/iOS/page/11/index.html","3723460f7699678d6c1abab55e482833"],["/categories/iOS/page/12/index.html","086f8d7b97490e5dbe666fe03a9173ad"],["/categories/iOS/page/13/index.html","06f22968e6a66894348eab49bc6b6eec"],["/categories/iOS/page/14/index.html","bc902737edb60cfecebdd3c5551c92e5"],["/categories/iOS/page/2/index.html","869476f4792c240866c70ba5ecf98997"],["/categories/iOS/page/3/index.html","e47a3fba55a3b10ead89350283fd10fb"],["/categories/iOS/page/4/index.html","ff72729f5b34099cd882d50f5ffdc91e"],["/categories/iOS/page/5/index.html","ef1664c0622a167b70f70bd696d9a696"],["/categories/iOS/page/6/index.html","ae24d07f540f01855e52719fb595a5aa"],["/categories/iOS/page/7/index.html","831d69c5061f1f053e5cf87e23ceab36"],["/categories/iOS/page/8/index.html","d35863b010e20d44e01d124d7f4c5133"],["/categories/iOS/page/9/index.html","d7ba62e3d24b40e5fce30a8db750f3ac"],["/categories/iOS面试题/index.html","7c52babb99a88c05ad2c124d3bbc2f28"],["/categories/index.html","76f143279c35ba2e400d1490ca40d4a8"],["/categories/random/index.html","a0ff8551c0c457a7447e9424a8f0b13b"],["/categories/三方类库/index.html","1bc5f92a65d0cd06f25f66e231dcb603"],["/categories/函数式编程/index.html","d66dca327efc1312c4b919b8ec6f3b6f"],["/categories/子类化样式/index.html","b0d9dd2b99ef2b3f0c42b75ad9b797e2"],["/categories/开发技巧/index.html","c312f21d900859c82db29d350cb7e5fa"],["/categories/开发记录/index.html","bb157d336b523899bba3694cc5f86041"],["/categories/技术支持/index.html","81eba1f4a3218565772a343031c07028"],["/categories/数据库/index.html","cd42b26faeb1b311778bbecdec8f8e48"],["/categories/架构设计/index.html","4be242a75f424ad0702ac9a7688cfbb9"],["/categories/测试/index.html","cf27e206d1ca9d063a3e75d1a0951370"],["/categories/用户体验/index.html","aa5fe643b16efce7a4fe42c08492a580"],["/categories/用户协议与隐私政策/index.html","a2cd10f7efeb5e60422fa8bf4b420558"],["/categories/设计模式/index.html","14ff67bd2534ca2c300979f98bc7b944"],["/categories/设计模式/page/2/index.html","ebf0860845209dbb8b49df7e26ed0759"],["/categories/设计模式/page/3/index.html","ba5b4ae2ce5ddd544b69d3e2e99506ed"],["/css/main.css","f95b1aea7c4bbdb05d77ede67dcb84e8"],["/hello-world/index.html","8649e9eb022c7840811fae875f2b55f4"],["/hexo部署失败/index.html","dc3deedcfdc771f1b542faf342df4010"],["/iOS VIPER架构深入实践/index.html","d445ae61d097d423ea5b864891baa19f"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","7ea66b23e00c578e3f026889c83837fa"],["/iOS 自定义视图，输入表单和错误提示/index.html","1f0e2794b5f3cd0589f81af76fca4306"],["/iOS如何使用iCloud文档？/index.html","cbf43d059f19b9a5ac9ec5661d4de6f2"],["/iOS子类化样式/index.html","ed179a331785136c73f98683eb8fca4d"],["/iOS开发记录<一>/index.html","0e387a237d3dbd72647b7b9713f14037"],["/iOS自动化布局编程/index.html","767a57103f2dee005e1817b4d187c8ca"],["/iOS自定义转场(By Swift)/index.html","03f636150b3ed803d081f1ca690bf144"],["/iOS项目架构：使用VIPER/index.html","954093943c0f8714499b220f2ae21c95"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b082ee1f0bf007d8a445cc895fb6235d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","e557c3c27161870cd515967c5393d9b9"],["/page/10/index.html","fb6158c697c39090889a29b1248e99b6"],["/page/11/index.html","b60d13a5ee1dd575baaea849404c1aea"],["/page/12/index.html","5933ce2edc59adc49771cba66bb3b1b2"],["/page/13/index.html","8139b3bbe8de19732a92ad5304232b24"],["/page/14/index.html","50feaece3b6195f7a17d0cb3bb975c20"],["/page/15/index.html","a95a00185a92d617d941e61a00657fec"],["/page/16/index.html","d7bec0e5aeefbb2c15874b3210a90ff3"],["/page/17/index.html","4be8124aae011f0d23d2589c23f8c692"],["/page/2/index.html","a094c8eebdb1bcf61703ccb6ffeda106"],["/page/3/index.html","475f0999da0a8b9f2bcfe64049b83d54"],["/page/4/index.html","bdd11cc191066b37ec0505014063ec48"],["/page/5/index.html","fd25a683af9a98222a3b43b1f8341844"],["/page/6/index.html","19c61927d361dce7829f32ca59704efa"],["/page/7/index.html","e73b879e57e226c0dc76ea9e8b7fe0f4"],["/page/8/index.html","41884a0aa7d79de2b646a1e65730f0d7"],["/page/9/index.html","41663c81d7569c51c13e46ead6bee85b"],["/schedule/index.html","abae31aac69633d08b9f5e9e09c3d7df"],["/storyAppPrivacy/index.html","459fafb2fa099a2a562c166108503031"],["/sw-register.js","729e54e9ef3c89fe74dc35fe00be845a"],["/tags/Advanced-Classes/index.html","23170b607cae3f9a23894865f2efa18c"],["/tags/Advanced-Swift/index.html","87f259d970e9a86f29d92b0f59634fbe"],["/tags/Advanced-Swift/page/2/index.html","2ebb56e0533d864952bd5cc1966e838a"],["/tags/App-Architecture/index.html","009805673155cd6f27b7acaac072b838"],["/tags/Array/index.html","97270f3a2846c6b28788282db328a795"],["/tags/Arrays-Dictionaries-Sets/index.html","65b6a2bb6a9537c96ee312d492650430"],["/tags/Authentication/index.html","aed06d423b6bc6cdbe958549144decae"],["/tags/Build-in-Collections/index.html","bb341b7510a8f915829bb15c63eede00"],["/tags/Building-Your-Own-Types/index.html","01815262163d3a09797fe0052370fdbc"],["/tags/CMS/index.html","aedee20a02a3490829faba8b32e57067"],["/tags/Classes/index.html","e8ae63c0ac2f79567b80603c51535da3"],["/tags/Codable-protocol/index.html","94319b2bf16610d3f7cf6e4f51c05194"],["/tags/Collection-Iteration-with-Closures/index.html","eee5ef379fadba9051b1adeaa194f2fa"],["/tags/Collection-Protocols/index.html","1b9952143441eccc283e086e63c96620"],["/tags/Collection-Types/index.html","9368cc418a8c56da29135746d4f0fa77"],["/tags/Collection/index.html","a12a6bb7993f7a12d58ca53ffe384731"],["/tags/Collections/index.html","f4b15a45b03e27a16e4128ae19a0f775"],["/tags/Combine-framework/index.html","66b060e101aaef0e6f65d995c4732d50"],["/tags/Combine/index.html","96feac2b48ddc145743703af184e0a6f"],["/tags/Dependency-Injection/index.html","6408c239b43a5d62277665639526a215"],["/tags/Encoding-Decoding-Types/index.html","a64f687162f99ed6a13a2bfbe7a8330f"],["/tags/Encoding-and-Decoding/index.html","57d8e17c85dbc2e432976969c5c4cbce"],["/tags/Enumerations/index.html","538a9fb5a7c9fc0cc8dc315668a1626a"],["/tags/Enums/index.html","752ac700c46288efadcc5fcc333f07a9"],["/tags/Error-Handling/index.html","a24067646a9da04cf76de1ac518d7754"],["/tags/Functions/index.html","e34d52458466232e981fe4b2401e3aee"],["/tags/GRDB/index.html","3f28c604d6a00b28f122cb519d60dc4e"],["/tags/Generics/index.html","c4faa33f943f232ba6e32c185e6a02cf"],["/tags/Go/index.html","9cd8212f5d3ffbe29d9117d14f28e827"],["/tags/Grand-Central-Dispatch/index.html","a4c39f1dec248b34ae4181f953a58374"],["/tags/Hello-Vapor/index.html","a0188dc5ff593e86f15f8f2de097ee7e"],["/tags/Homebrew/index.html","dfa0a59e8c2dca1185a2fcad257a0867"],["/tags/Interoperability/index.html","9fed23ad310e0b85123d84aa82a4b771"],["/tags/Introduction/index.html","10937cbdba36bc4fffbd18d52a672ea4"],["/tags/Leaf/index.html","e06929295ed936c21f22055484d8f63d"],["/tags/Linux/index.html","9447174426813bece6a15bf0df719cc7"],["/tags/Methods/index.html","7918ed8d2fd3e4ebd85b6dbf1a74743f"],["/tags/Modules-And-Hooks/index.html","cbd58a977192a9749fdd4bbbb4bfb54c"],["/tags/MySQL/index.html","56b87f7ad2f61da55e25c791f4e8291b"],["/tags/Optionals/index.html","9a14dec1115e078fd2860f34ae6ebc90"],["/tags/Promises/index.html","a591be95c36451aece1737b1eb6246d5"],["/tags/Properties/index.html","e763136f290f84b6571608090379b7e2"],["/tags/Protocols/index.html","0991cfb84316521ff9e1e44ecde34c4e"],["/tags/Result-Type/index.html","face5335bc2d9141dd4369637306db61"],["/tags/RxSwift/index.html","7edc4f23a60b84921b78480b16e3c6d9"],["/tags/Server/index.html","7c689ff382e32f472a917835147a3fc2"],["/tags/Session/index.html","384531498b046032400d16247d7ff2b4"],["/tags/Sqlite/index.html","19747c603117e62aa886edd2f5d3d36c"],["/tags/Strings/index.html","aa050ddbe1543f0b607c9a5095061c4f"],["/tags/Structs-and-Classes/index.html","9ac4458ef69d416c7b101abdc40d21d5"],["/tags/Structures/index.html","850aff5a46c0aacba417af0bc4f470a8"],["/tags/Swift-5-0/index.html","f40a1e75595fe8f6049613ed0539a007"],["/tags/Swift-5-0/page/2/index.html","e1f66b9dc3ddac8c03068e7930279b84"],["/tags/Swift-5-0/page/3/index.html","d5263077d3115657048c1445b0da173a"],["/tags/Swift-5-0/page/4/index.html","d2ce531deeaebeede3d45b16260659e8"],["/tags/Swift-5-0/page/5/index.html","878344bfa0d9f6ed76c801387c4eb5f4"],["/tags/Swift-Apprentice/index.html","2c757381a797e368ec483d3e7d5e2bd4"],["/tags/Swift-Apprentice/page/2/index.html","516ea5ab0071d22d8f7c3848c1190c45"],["/tags/Swift-Apprentice/page/3/index.html","d7a6f9cacbebe3446b95c3b544d54ada"],["/tags/Swift-Package-Manager/index.html","e9f874329946743c67c2bb807b729fc5"],["/tags/Swift-源码阅读/index.html","e8b77031ad0030b58bcee1383fe17d0f"],["/tags/Swift/index.html","9ba4fb315bb30504a054e42bed963091"],["/tags/Swift/page/10/index.html","bbaa7d00d211f98c32dcff6df22b1b29"],["/tags/Swift/page/11/index.html","39c52ae947fb29359ff6b96281009486"],["/tags/Swift/page/12/index.html","b67dc1d264539eebacc86867dca2dd41"],["/tags/Swift/page/13/index.html","fbd135ddd777b7bf5e996d1c4ff25a99"],["/tags/Swift/page/14/index.html","818f855b61fa8289aeadff41c1af7323"],["/tags/Swift/page/2/index.html","db762d00dbee0e73b693de0fe6f4072b"],["/tags/Swift/page/3/index.html","3154b7372743d0bbc88419a76de22780"],["/tags/Swift/page/4/index.html","894d2f37dbe1e88c7f867edce97a8195"],["/tags/Swift/page/5/index.html","285605030d845c5065076e738dfa0897"],["/tags/Swift/page/6/index.html","774880bb20d32dfaf7ed8dae674fb45d"],["/tags/Swift/page/7/index.html","c0491256dc531070469bb2a04437aa79"],["/tags/Swift/page/8/index.html","5dba13a8a9eb09eb593004573a00a1a1"],["/tags/Swift/page/9/index.html","1112853299ac4bf60440880c781ec94a"],["/tags/SwiftLint/index.html","0b156bfca94aef100d4dcec6e9b95d56"],["/tags/SwiftUI/index.html","ceacc1f9ea2bfbd1d1e975b2a5baeab9"],["/tags/UICollectionView/index.html","af0a9e6b3d53a6b664080fa1b58ba82d"],["/tags/UIColor/index.html","ed2154d57e35daced788c4d57d7f6a8c"],["/tags/UIImagePickerController/index.html","59e7f8f1a9afd9c048ac091de4e93460"],["/tags/UIKit/index.html","9f717fd0b887e633dec1a9b4bf4a694b"],["/tags/UIKit/page/2/index.html","4d7723fd64ce24f2f6bf4c341e01c9bc"],["/tags/UIKit/page/3/index.html","cce8e76a3776025a7fdc2a48081f522a"],["/tags/UIKit/page/4/index.html","b7c27f433e734ff8e1c334236f945250"],["/tags/UIKit/page/5/index.html","8ac81f2f1059c0e0b50baa982c3dc5ee"],["/tags/UITableView/index.html","8db308bba4bb82314e12e9651ff9d022"],["/tags/Ubuntu/index.html","8b16d6a1c68757793be3ccc9af3c5118"],["/tags/Uniquely-identifying-views/index.html","9db12de621c0d9a2e688cabb24bd7443"],["/tags/VIPER/index.html","51d2d67d9a26fb20282216c3c1f61c14"],["/tags/VMware/index.html","4fbbe10e57f2f331b82cd3c71a46db7a"],["/tags/Vapor-4-0/index.html","4706ada3885cdc88b7910d9b15accb36"],["/tags/Vapor-初探/index.html","bd97dcb9c2b3a7921c237a472dae03fb"],["/tags/Vim/index.html","4825cbe1d68ded704515d74f897330bc"],["/tags/WKWebView/index.html","d386f19364016073a4e7682164ebf62e"],["/tags/Xcode/index.html","f37325453065caf138b1f1713c517d6d"],["/tags/appleOS-Networking/index.html","674d229cb233da42ac762ff2f6ebc22c"],["/tags/bugly/index.html","718b094da541716c8f9e293b7e657749"],["/tags/enum/index.html","6769580c06c34ff9c20b54be5b8dfe5e"],["/tags/git/index.html","b5bfb062e1a331c392218d7a7e3462b3"],["/tags/hexo/index.html","bd506fa1c52ee47815e040010d63cf53"],["/tags/iCloud/index.html","05c6504af8b55fcffd92e7dfc3888067"],["/tags/iOS/index.html","93a3bc49247325579c5c14225419ad2f"],["/tags/iOS/page/10/index.html","4b621905754f12afc4935def90183971"],["/tags/iOS/page/11/index.html","315c5cc1eb46df03e11a3096d05d8b20"],["/tags/iOS/page/12/index.html","94ae91c70fec42d54f501b74a549da89"],["/tags/iOS/page/13/index.html","b987508713de35e35922aaa69d83de5c"],["/tags/iOS/page/14/index.html","b288b2a50c38122d619607e625c2c0f0"],["/tags/iOS/page/2/index.html","b68b5ca9182dff80aa7f6898a2136f62"],["/tags/iOS/page/3/index.html","6c43df9bfcc6c0faefb8cb214843b23f"],["/tags/iOS/page/4/index.html","24316b31abde1ce6786f8ac736fa78ee"],["/tags/iOS/page/5/index.html","87b39ada854b7a12ef9de0ce1115b5a9"],["/tags/iOS/page/6/index.html","cc2b1cf251f5faf41368ef44a2003ea4"],["/tags/iOS/page/7/index.html","a14d3583f066799df08e14c3ec082b69"],["/tags/iOS/page/8/index.html","8c524db6c6408f7263dbb9e606ec469a"],["/tags/iOS/page/9/index.html","decc83b0d91fd35eb05a2840ef743afb"],["/tags/iOS面试题/index.html","9776f4240cf1758e0d1173d66516bd7c"],["/tags/index.html","8293a51f789da707a0db4cc318a978e5"],["/tags/non-optional/index.html","dbafa662727203338f70c6b64a4a3f93"],["/tags/random/index.html","8bcb0257f9b193da35a472e05180ac5b"],["/tags/transition/index.html","4b9375c871255133bb22f3fa213a8fdc"],["/tags/三方类库/index.html","b7daa4ad72ac7297ef67bf092fc8df56"],["/tags/依赖注入设计模式/index.html","609fd1635f4caa78fe4f28238fe82816"],["/tags/值类型和值语义/index.html","868cf7ccccaa0d8794242e16a2da35c7"],["/tags/内存管理/index.html","1a55d5c8c9e2588a760f9d28f24d5c68"],["/tags/冒烟测试与回归测试/index.html","7340f660f9214e8f0956cbefec5f89fc"],["/tags/函数式编程/index.html","10667ca2fa6a3f9095a2f69ef605fbbc"],["/tags/创建博客数据库/index.html","27039347bd033725f3c71d220fb8867e"],["/tags/初始化模式/index.html","2149b497f2ab26e756489b85175bc58e"],["/tags/单例模式/index.html","dc0d48e57c5be89132a37f2fce14d587"],["/tags/原型设计模式/index.html","efb0cf53a4480aa5495d0a8e17ad1c64"],["/tags/命令设计模式/index.html","06b67a28e5bcfd697bb0c9219d7ddadf"],["/tags/基本控制流/index.html","60d64731b3e8a632470dee3f9492ed30"],["/tags/外观设计模式/index.html","fc95d430ef09ee7fb4f3c8d0623a605d"],["/tags/委托设计模式/index.html","9aeb14276d8b498daffadc6322ed203a"],["/tags/子类化样式/index.html","b043d16fff5ce9cb378ff3c3a6a0244d"],["/tags/对象池设计模式/index.html","6bdbf038121c8367806db289d2511446"],["/tags/工厂方法设计模式/index.html","84fdb808341a53437f9bd7ed9fce370b"],["/tags/工厂模式/index.html","23c8be7a92d71794e08fc2035917087b"],["/tags/工厂设计模式/index.html","23170f67aaeb9ff3f7f35d91e00ad51c"],["/tags/开发技巧/index.html","a8ed0513c17cce83572964a2528dae65"],["/tags/开发记录/index.html","9ab58606ae3588462111bb64ac13f212"],["/tags/懒加载模式/index.html","5818c36aba1a56ee26d905feb2b1248a"],["/tags/技术支持/index.html","bf67e74972c245c6cfb91932ebc46993"],["/tags/抽象工厂设计模式/index.html","64835443a0d6946d1e88a1ffad49293c"],["/tags/数据库/index.html","99193897c2841687156bfd9398d058a6"],["/tags/构造函数/index.html","7db06e2aacb23d705bdcca512e266d2e"],["/tags/架构设计/index.html","d7bf5ba1fe118f4bbd760b52ab2f3e60"],["/tags/模式匹配/index.html","ab9dab9636c03f8d5befff52ce493bb9"],["/tags/生成器模式/index.html","3db82159ece243c8665ec746079b674e"],["/tags/用户体验/index.html","c7691db95f29977b1e247aa7476e9bb3"],["/tags/用户协议与隐私政策/index.html","80dd0f0d6ccc91bf6801fbf503bcb71d"],["/tags/类型与操作/index.html","4170f2be89e3e8fb65a4b2f64475abc9"],["/tags/自动化布局/index.html","dc6bafbfadbc200176b45b0811ce1503"],["/tags/自定义UIView/index.html","f7b0f777fa34f71bd9b6af1ca61a0c34"],["/tags/自定义转场/index.html","8515630ee7c6db940c6399d8057807b0"],["/tags/自适应布局/index.html","7bf82810c165fde36998e62f45f00b29"],["/tags/表达式、变量和常量/index.html","47c49ba464e9a4e44205fdd928aa523c"],["/tags/设计模式/index.html","9b97e8749781fdef022803b42808a924"],["/tags/设计模式/page/2/index.html","1b34fa6711b71578d1e4cedcfd9b421b"],["/tags/设计模式/page/3/index.html","4f8fdccefcf8b32cc7d5c47a39dcf811"],["/tags/访问控制和代码组织/index.html","ce8f3971e633f8abdb361ffce1a0a072"],["/tags/运算符，下标和键路径/index.html","e4f3326814cbcc9d126a6e23941c70ef"],["/tags/迭代器设计模式/index.html","8364b453f1d8b1ac8ebca34629f2d620"],["/tags/适配器设计模式/index.html","0c7e1fab0db008cff51eb4170f14e023"],["/tags/错误处理/index.html","ecba7ae104c329d40398e5654064bffe"],["/tags/静态工厂方法/index.html","1a8259d95c8b97af0dde56d42dacd17f"],["/tags/面向协议编程-OOP/index.html","e1ce2cfca25b575249f8dd54ad8d93e3"],["/tags/高级主题/index.html","9125a62765c44a822c862656cb10bb1e"],["/tags/高级协议和泛型/index.html","9ebaf5a37d6d6cdda9d12027111b81c4"],["/tags/高级控制流/index.html","3ec95293583c931f74d8ec6dd6fa4721"],["/xcode 常用的快捷键/index.html","71c20555be90f473191140dbfb7d2f59"],["/为iOS应用构建输入表单/index.html","2dadc76a8457c7fc43f8a4e7c2f9d4b6"],["/产品开发的幕后花絮/index.html","8c28167e52d76c0af15b0506bd4ba8de"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","7d8c45530fe94ff65b0a1b41b51b4fa2"],["/冒烟测试与回归测试/index.html","e18b3819ea7c748f14b4396e15c59542"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","38cec65b516b524323e854887f51969b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c3e7f425fe5710a14a688fe14efd9abd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","7a38c04c6cce5c809d90c224676c400e"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8cefe5dc3529fcdaf3c9bee9256e72e0"],["/在Swift中创建自定义集合/index.html","2ae465dd21f9143b95f711b133dd355f"],["/在Swift中处理非可选选项/index.html","f390927a12eba100cb59411c200670e1"],["/在Swift中生成随机数/index.html","e2fe3d76433e376069650f16f4328fc9"],["/在Swift中重构单例模式用法/index.html","0b3aff281d715464960af8a0cfe2f6b7"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","cb318324697e289ecf9dc1088c75f732"],["/如何为VIPER编写服务？/index.html","646b14eae574743969afa84929b669cd"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","68ff963cf12deda83925a546114c908f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","6b6133bbfb29ee4de26a5cef9408cd50"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1259f2485ed5dbc60831dd383b46b183"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e711250a69d8d39893a643da657b3ab5"],["/掌握VIPER架构/index.html","689ddc0d0bd46b8bbfd68f2c23670638"],["/揭秘 WordPress Hook 系统/index.html","270581dd52f4ada386ff1a1ba89adc24"],["/比较工厂设计模式/index.html","1655eb516d5f33746af07cc45141c5c5"],["/深入了解Swift中的Grand Central Dispatch/index.html","01300395ea98b23452f32745c7f7a680"],["/深入研究Swift框架/index.html","2f90e6535dd0a51cbba029f54231260a"],["/美豫直聘技术支持/index.html","99917a39e9185a9cb33b4cfa54c0a412"],["/美豫直聘用户协议与隐私政策/index.html","7f154e4b18c51c19ffdd20ee640b7b4a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","78b9f546cf7090e9800b98f4381089d6"],["/选择Swift而不是Objective-C的5个理由/index.html","7e70592bd93890087a77ac54fd7e7a2a"]];
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
