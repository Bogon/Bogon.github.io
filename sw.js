/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","32911a41da3b9764c37fc6769c2e2c41"],["/2020年iOS面试题总结(三)/index.html","3736248ffd5a474d4c6a323e5ce38894"],["/2020年iOS面试题总结(二)/index.html","be7632626301c8c26a2a6694346930ea"],["/Advanced Swift系列(一): Swift 简介/index.html","3cd237d89b4f5feae12e603a7d24523e"],["/Advanced Swift系列(七): Strings/index.html","c794e51c017e8cab08ebf5cec417553d"],["/Advanced Swift系列(三):  Optionals/index.html","a016af55f528f6df1695b48f8ac4b601"],["/Advanced Swift系列(九): Protocols/index.html","c393150b75034ad6880811f34e735190"],["/Advanced Swift系列(二): Build-in Collections/index.html","31aa96b0d98d14f233dad17aa0b04d1c"],["/Advanced Swift系列(五): Structs and Classes/index.html","4e5f7a6ae37c9fd8cd2f560dd4332d87"],["/Advanced Swift系列(八): Generics/index.html","4b3afc54baca78d3dd44613113a2f10e"],["/Advanced Swift系列(六):  Enums/index.html","80245856d5e1d153fb0a1ee6b210ee11"],["/Advanced Swift系列(十): Collection Protocols/index.html","4443560d252fd63353f72a390e5b34b2"],["/Advanced Swift系列(十一): Error Handling/index.html","44c0d2170154534c31610bfef23c6ff8"],["/Advanced Swift系列(十三): Interoperability/index.html","f91b8ff58cd3e7dfcc7e0f90f36bf203"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ab1159640d9db0c316444efde7274a96"],["/Advanced Swift系列(四):  Functions/index.html","3c4385575e8b55451eed901e54741957"],["/App Architecture系列(一):  简介/index.html","a39c1d6cc2423a3cb5e892946b70f1ae"],["/Functional Swift 初探/index.html","0ad7ea3bffa1ce7cae3c27f781f3ea7b"],["/Git 使用小技巧/index.html","fe6b81bfb70f6432945d0e477bb7b97f"],["/Go Protobuf 初探/index.html","836b440f3c851b53b5f76814eccf3ecd"],["/Go mysql Tips/index.html","129a5317971be6c51a1d015085b967ec"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","e3fba99f9a9e845ab2cdd7f10ff792ff"],["/Go 基本语法初探(一)/index.html","0682f09eaab38aa492be98bb2e63fc97"],["/Linux VIM 命令及操作小结/index.html","95bbf51beaab2e819042ebaca8f00037"],["/MySQL 基本操作/index.html","4764b84a764d24cef15fec093bd58df6"],["/MySQL-列类型和数据完整性/index.html","ef84ea8d7affa3688d32a52fbef12fea"],["/MySQL-数据库设计和查询语句/index.html","4c8068508122f1ad900e26c8abcdc992"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","f4d37e40690c2b3c6ee9230e36a4a16f"],["/NSCODER和SWIFT初始化/index.html","63307100eabdd1442cb6df1762e78b6f"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","247fe5af518f909540b680a80f5ceb58"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","03fe4575c2c09c333e831acacf85098e"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","336a054f91bc66bfe160251f3d3d9297"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9ad3adb71852ae68ee932bb99827a5ea"],["/Sqlite 使用Tips/index.html","68cd19d08bc9799b04cfb0eec4215de6"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","c43635371222ef0676ab7aa0b02c71d9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","390d8e13c6535ebbc3c78b06751f0a7b"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","73017580fdf15c994893f25be4f15faf"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","4ca191bcdf5c9a12b8e34f3a23d6d9c6"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","8f80a0412e3861aa2f565c98e581219c"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","27a91a5ffe28f036f83c40668c1f5423"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","8aa77e0d4e800dc46c57a46a1dca0a05"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a3344af715cf0a4e86fdb979eb263cb1"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","0a7766166bbbfc344d91fa10a89aa919"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","c0d652f96e41df533ebbb854e7b5b4d1"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","110a42fd7e39abf51a2a8ff34fd3b36d"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d6de4243ce5720eea6cba6b2c5878c4f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","7f8e3142f3f2164d271fbe0f1c40f394"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","c87b2847df5a7e5f8f22175deb1b1177"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","dd31617e380ccb347909fa354e4dd0ff"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","25779c82cb521016b19952bcd838968c"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","198008043d46d64aed41d08a3053024f"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","dd3644fc0c80bdfd70e52b3aa953c69c"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","458bafbd4d19c4a68cbbca82dd03f6d9"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","8d3b799b238dbbf5a8fd3e2c1c9a937a"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0f746efb405eaeeb88cec3ef0e0f64cc"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d940e3e4090a43b27bb0712444f28833"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e783d354cc9a912265294e50747e4395"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ad12c05f73d3c79a5340bbad4c4e2aee"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","19f67f86cb2346534b69d433a88e7460"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","5d1183150eafe7f0a88859d21834fd96"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","df7eceb580785be3b58017f11cc2ef7e"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","a121663b5c65aab644409c7c3e458a91"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","47aa0ceec159ca49b3666337bb0d684e"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","3192203de858b6f6bd7210c7235c20be"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","777207ffd577a7b374c181b422505b6a"],["/Swift CompactMap vs flatMap：差异说明/index.html","edcdddfd9705f9db7663094aab51f03e"],["/Swift Grand Central Dispatch 深入实践/index.html","d53f323ba851071e55ae19e90df27b4a"],["/Swift Lazy属性初始化/index.html","872f9c9f62fcde53193ef7c42cfbf1d2"],["/Swift Promises 初体验/index.html","5b3e73866fdbf7019e70913acd0c3c7e"],["/Swift Promises 探究/index.html","cd8d3eb0c9903e0da1b85dfb999693f5"],["/Swift UICollectionView使用指南/index.html","e5a380031a177d7fdfa3e59bbfa80056"],["/Swift URLSession && Combine framework/index.html","a5147cd8d3731172dec7b2a2c6c08652"],["/Swift tips/index.html","fa5ed9a72ceab692a81600357841fb61"],["/Swift 三方库：GRDB 使用指北/index.html","5c33abee53cc334957f69b1577c3fa39"],["/Swift 唯一识别的视图/index.html","edab8cfa0c300bc64cc1446a96ede0be"],["/Swift 如何学习现代UIKit？/index.html","b10cdb1db3d2964fc628ff5407c4ba36"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","d8a918b12cb85b2c29aa9f932ac79f76"],["/Swift 用 compactMap 替换 flatMap/index.html","345bd672e158ff74acd9778a28126a9a"],["/Swift 选择和播放视频/index.html","13aa6e700bcdf3733ee5ea97ebe33246"],["/SwiftUI 系列(一)：1、 简介/index.html","604e4ef1943c2d72a282721a521efc4f"],["/Swift中UIColor最佳实践/index.html","cf6418f527e17b3cfc17a95589da418f"],["/Swift中快速简单的工厂设计模式/index.html","6cc09192e8eb19dd694c65c67011cc3d"],["/Swift中构造函数与静态工厂方法的比较/index.html","31b0368c53a5b17bdb97af91410f4317"],["/Swift中的UITableView教程/index.html","cffcfea9e07a10cc9a0c15dbb103893d"],["/Swift中的懒加载模式/index.html","0a7a195317833333b9df963e2235ff29"],["/Swift中的模块和挂钩/index.html","19f15649fa5e110c4f50c6c7f9819038"],["/Swift使用布局锚点添加约束/index.html","f4be6957a035a1a425479e13ac81f206"],["/Swift依赖注入设计模式/index.html","d1ebf3d1420b300312fee7cc3cbfb4af"],["/Swift关于Dependency Injection (DI)/index.html","f3bebc345a7871ba0dec031f702fa126"],["/Swift初始化模式/index.html","1e5674212c861893e19befede49408dd"],["/Swift单例模式/index.html","90d8e8065697a40ae133f619d1d5bc17"],["/Swift原型设计模式/index.html","8a067f3e7da2b59ae2b01b83f1a8b646"],["/Swift命令设计模式/index.html","c93abf6e91aa45c8d925fc6e36f08317"],["/Swift外观设计模式/index.html","b303b94893004764527349210daa5f54"],["/Swift委托设计模式/index.html","8c4b0b0b26eec94e0ff8720cd1ef2666"],["/Swift对象池设计模式/index.html","58f93f182150ccf994eb91b0128fa09f"],["/Swift工厂方法设计模式/index.html","58f9d2ecb341a02b046da92b6daabd13"],["/Swift带闭包的懒惰初始化/index.html","c5eba417dd3bfed5d90a71e6bf2d0b64"],["/Swift抽象工厂设计模式/index.html","d630f9b0680c21b7f04e315bd43b4372"],["/Swift掌握iOS自动布局锚点/index.html","137ffac985ac0a27f2e56be621ecc538"],["/Swift支持旋转的自适应单元格/index.html","f42ae62b08a1c45421e60a368873f96d"],["/Swift枚举值/index.html","ff88015daf21971dd5a5db73db27e5fa"],["/Swift生成器模式/index.html","8973601b815c87c42eacf448e0a51641"],["/Swift结合Xib文件自定义UIView/index.html","db0dc1845efaef779c98dc4a72527252"],["/Swift编写的20个iOS库(一)/index.html","fcafca4d397eab8696b2ce6a86daf561"],["/Swift迭代器设计模式/index.html","69c548c01f77745fa97c1a018f038e10"],["/Swift适配器设计模式/index.html","9fbfb231fe6d4877b36636c6c64ea50c"],["/Swift静态工厂设计模式/index.html","cb805c4d7a4c7a0f15d68742a188be58"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","693a7257fd99cd145af50ac769f1d227"],["/UICollectionView data source and delegates/index.html","d8d12fd10f51f81afdb5c92b4390bd89"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","3547d69d9f5981ab49581a49fcdf8469"],["/UIKit初始化模式/index.html","29e20380b83fca6a43ba6e735179e14e"],["/Ubuntu18.04替换国内源/index.html","22d1867902cedd114cdffb94a0a65648"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","49dc4825076e0f2982c425d32cce4b75"],["/Vapor系列 (一) :  Vapor 初探/index.html","00266ce0f3f5d51f80fa3c53de998180"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","2339bbfbead4e76dea7468d36fa45db9"],["/Vapor系列 (二) :  Hello Vapor！/index.html","86caef4168dbbfa60eb116bb20d0bf37"],["/Vapor系列 (五) :  使用session进行authentication/index.html","538f1aabceb8f545b0090b564f75bbb7"],["/Vapor系列 (四) :  创建博客数据库/index.html","57069ccd764f70da9aa0f2341463371a"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e9bd1dfc41e0de7c5b2390a4ba543252"],["/WKWebView与Native交互注意事项/index.html","68cf435ccb794d59765d0aeccc59edff"],["/Xcode扩展/index.html","bb47b76b0fc1bc5cc8b76db6e6d0b41a"],["/about/index.html","84d4dd64012126e4eaaa0f14d126c15c"],["/appleOS的Networking示例/index.html","8cca48f129918f9646d37df5ad6ce322"],["/archives/2020/03/index.html","7ff846a953e3660d18ad9eeb1ca749b4"],["/archives/2020/04/index.html","942a6034682da16f72449fd5bcbc8712"],["/archives/2020/04/page/2/index.html","686fdf279de8acc45bd20cacb811f1a9"],["/archives/2020/04/page/3/index.html","78798255cdba66f58b0a500f48183f2a"],["/archives/2020/04/page/4/index.html","de5d517eee519428f32e7fe092960324"],["/archives/2020/04/page/5/index.html","12af8ba4848d0453985ff24873d1b82b"],["/archives/2020/04/page/6/index.html","db555e548f6d4168b7861cd67765ce77"],["/archives/2020/04/page/7/index.html","196d56a8007629e68af5919cf710e873"],["/archives/2020/04/page/8/index.html","9e8b708be0ff529946a679d9a9e17cc4"],["/archives/2020/05/index.html","5c11c31ac16d12e919b03dce433ad78e"],["/archives/2020/05/page/2/index.html","7bfaebcd656b7ecad31c85bb54c4abac"],["/archives/2020/05/page/3/index.html","eb23ac6a9b9b0b41bb9a5e2845751db9"],["/archives/2020/05/page/4/index.html","2caedacf39b575f9652e34a45d303307"],["/archives/2020/05/page/5/index.html","ad320621a151e41ee8624cb3d741dcec"],["/archives/2020/06/index.html","277e823a16b2d58e43f1da87686d8870"],["/archives/2020/06/page/2/index.html","ae3b0b520a56fd4ac2b9099a9bb9a22f"],["/archives/2020/08/index.html","84d4e434df3f282be125c788a4b3e0d5"],["/archives/2020/09/index.html","69c1c851e3ef69c3cda769e88595760c"],["/archives/2020/10/index.html","5d2b264f638e441407cc54edfe7fc872"],["/archives/2020/11/index.html","9bf2a02bf651539ecd0896980ea28288"],["/archives/2020/12/index.html","ac70e656086aeeff76a334b629a60210"],["/archives/2020/index.html","8c624c9dcada0840a61f363f493f0435"],["/archives/2020/page/10/index.html","7ba45af9071e6d73bd12599380862235"],["/archives/2020/page/11/index.html","9734dbc686c004d3550f42f18ea28777"],["/archives/2020/page/12/index.html","fd418246b066b691a891cfdf1f33e345"],["/archives/2020/page/13/index.html","87db74556d9b8a6645cd5ddca8f03f63"],["/archives/2020/page/14/index.html","8a3e5f0c5e2a03be1ff02298849506d6"],["/archives/2020/page/15/index.html","0c442025dcb7cf5b5ce2ea70fc45f4d0"],["/archives/2020/page/2/index.html","e8ff373f20a0d3840d65f03f924c66c3"],["/archives/2020/page/3/index.html","c7d3db6cf4881741cfd8e5f088e29ecc"],["/archives/2020/page/4/index.html","9783c9197467c0c104c98d25d09eda3a"],["/archives/2020/page/5/index.html","2f9c655c3eacfdc77f0a5c2ffa5507c5"],["/archives/2020/page/6/index.html","3d69bdc715e15113a8688dca1cd9dd00"],["/archives/2020/page/7/index.html","3175e5419942be45d8cd427a7a0447c4"],["/archives/2020/page/8/index.html","9a310ec92cfeb47b48698d11d8f93b4a"],["/archives/2020/page/9/index.html","3c68a44c812a2e3da5064a0820a782cb"],["/archives/2021/03/index.html","396320b1c2d46d3053980cf825468be0"],["/archives/2021/04/index.html","06e177835f7545bb39699e3abf5145b0"],["/archives/2021/05/index.html","af8c6db6cf5f97a5d66d5a93d6651ddd"],["/archives/2021/06/index.html","f9e2a2ab8556453fecfc175d3a8f854a"],["/archives/2021/07/index.html","a2c50f6047e32ab1eb3ea68fe799c36f"],["/archives/2021/08/index.html","55f7ef4f73b840df545e4709748074d8"],["/archives/2021/09/index.html","c99d012ca2200a7b10da114242141285"],["/archives/2021/11/index.html","debaaae377b34fd475e11ea23e767bac"],["/archives/2021/12/index.html","c3cffdd0c181efe94b99bc32cebbc24a"],["/archives/2021/index.html","1ba45710f1a748be2c835f49c5fbb0bd"],["/archives/2021/page/2/index.html","b4cd96e1116c126e3a8973f2bf2f12e3"],["/archives/index.html","ac0c990a4d35785bb6ad4dd17b6af0c0"],["/archives/page/10/index.html","cb4c78b2536a1a3340729031326f8ab2"],["/archives/page/11/index.html","9e4e591d9dc67722a4263f2841514286"],["/archives/page/12/index.html","704e81b9842878b52db6f6c43ca01cff"],["/archives/page/13/index.html","7930fcccc473db381fe93ccf239e9be0"],["/archives/page/14/index.html","6b63c3e4e685405e3168b5ff9b8529ee"],["/archives/page/15/index.html","44651426d5b4e992e40cf599d9882323"],["/archives/page/16/index.html","c0e3a6cdf5e9f9f0665abdc2e4196e45"],["/archives/page/17/index.html","ce929713747f794175c4f1bd808bb04e"],["/archives/page/2/index.html","6dc4c76e662a04719a732dd136dcfa08"],["/archives/page/3/index.html","a26261736d3fce0b949408dbcd057b5d"],["/archives/page/4/index.html","761a2352df27801ba0bf2a45afc50442"],["/archives/page/5/index.html","e0db0e710ecf37ddcb392a4718e74e2d"],["/archives/page/6/index.html","06e2c590b75ec1986c879f8dc2090a8e"],["/archives/page/7/index.html","bb5af26ac69fb674c984a37eaddbed50"],["/archives/page/8/index.html","d427c98fda9048770f41a0eb74f097d5"],["/archives/page/9/index.html","18da297665441a16866d27858a8e420d"],["/bugly 上传dYSM文件小记/index.html","1b5a011ce63cb3d7b11f9a3f3a0726ae"],["/categories/Advanced-Swift/index.html","a2d58acd74da6be24c5e3eb2a51e0a30"],["/categories/Advanced-Swift/page/2/index.html","cbd7fb6be4cab0f1bf5eaede9ff17ed7"],["/categories/App-Architecture/index.html","42ee7426ec029e7206685bef85a1c33b"],["/categories/Array/index.html","aaa242cf44b48dea7e81c1704eb2304f"],["/categories/Codable-protocol/index.html","1ab28a08ab658ea4e28aa8bc6ede1dae"],["/categories/Combine-framework/index.html","befcb74ea5d99bf062b397db449d66b4"],["/categories/Combine/index.html","b738b99d55af0dba7337bbabe90a152f"],["/categories/GO/index.html","c0e9d4defa38d4b8668dec2d863852eb"],["/categories/GRDB/index.html","5a113bb3dc823ba3c69b234caf890cec"],["/categories/Go-入门篇/index.html","646794ba8e3d677a83ea947f1ee5c8bd"],["/categories/Grand-Central-Dispatch/index.html","d1b2d1a9a9e49874721b5da19906f27b"],["/categories/Hexo/index.html","fa1e718d8a85fca8079d33f5315a5318"],["/categories/Homebrew/index.html","e6c0bd341346f7d6b3cfbb8992312f03"],["/categories/Linux/index.html","e55cd9102f35d21ce9beccb38095a167"],["/categories/MySQL/index.html","cecdbaf04d26ee2934a85e24cebf2de2"],["/categories/Promises/index.html","83efa4999586bd6ac5528dec0dd2da37"],["/categories/Protobuf/index.html","dcaaf9efbc2bed98dc7a5dfe2bd7cbd0"],["/categories/Result-Type/index.html","0f138bf52e2f44c7fcc0088f8f75a6d8"],["/categories/RxSwift/index.html","485e7ed11f657e83f13244feb30ef42d"],["/categories/Server/index.html","f093e14aa5fc14610d6b86175fe837ce"],["/categories/Sqlite/index.html","29cf394ce2a79953a5546a3118563a29"],["/categories/Swift-Apprentice/index.html","c081c73eff183b97af9a45a33bbf6c6d"],["/categories/Swift-Apprentice/page/2/index.html","4d29cb518efa5726fc4b7706c83d525a"],["/categories/Swift-Apprentice/page/3/index.html","b421080d793c8f308a947fc5c0ff2ff7"],["/categories/Swift-源码阅读/index.html","79eef9dff9da8709b2aa4f44e7518c36"],["/categories/Swift/index.html","f86b59adc72ed9742e696fe56d06b520"],["/categories/Swift/page/10/index.html","0a9be2d6814b08375729b62cf523265e"],["/categories/Swift/page/11/index.html","bebe9920055b0ea5fa394f1859a8f060"],["/categories/Swift/page/12/index.html","ce7fcf61704bad7af860d8b7f9c2cc0d"],["/categories/Swift/page/13/index.html","fa5ddc7da05198800b7179bdc89a8023"],["/categories/Swift/page/14/index.html","15cb5ba49f26c0925ccf7db1cd3d5e04"],["/categories/Swift/page/2/index.html","998ac89f39d997bf641e2e9be6786681"],["/categories/Swift/page/3/index.html","44a6dc7a57d04c12a8265b76996ddb90"],["/categories/Swift/page/4/index.html","fb4311c2eac2899b6248b38780a75e04"],["/categories/Swift/page/5/index.html","e64783f0ec4a56783352e18d0ed9fc6d"],["/categories/Swift/page/6/index.html","d00f7609b64b52b2612526d58f13d939"],["/categories/Swift/page/7/index.html","e1dd66126529ada89376ba1cb134fedd"],["/categories/Swift/page/8/index.html","26144c766ca408c2937c68bdaeba066d"],["/categories/Swift/page/9/index.html","7564ff4a815d3ca26bc748a8fc75eb9c"],["/categories/Swift5-2/index.html","4161f062939d9eff8bad2c91914caa65"],["/categories/SwiftLint/index.html","daabb46b394c56aea63649000950badb"],["/categories/SwiftUI/index.html","5c1d992078c8959a8715872b6830afea"],["/categories/UICollectionView/index.html","0dc9a252afdf34b2fb819b071513991c"],["/categories/UIImagePickerController/index.html","411a22a94e6ce65388c6020a1b75c1fe"],["/categories/UIKit/index.html","3d5d0a8f3769cdd852ed2ff0e81b7754"],["/categories/UIKit/page/2/index.html","12398c41ac82dd14fb2a780cf8be6666"],["/categories/UIKit/page/3/index.html","ac832dff4b4ab31d6ed493b51fc9329f"],["/categories/UIKit/page/4/index.html","24f3000f413d8dcab03fdd6c038ab081"],["/categories/UIKit/page/5/index.html","1ad65ff65e95a832272e4f5f27c5203a"],["/categories/UITableView/index.html","999fba280bc8fde23c4ecc4d6fd67fb7"],["/categories/Ubuntu18-04/index.html","e29a99862cd44cc038f11b1b0d709e02"],["/categories/Ubuntu软件源/index.html","8ce8fa8042444391b3dd45fe8e3ba0b5"],["/categories/Uniquely-identifying-views/index.html","4282bb06ef18b6c681c6a8e097d976ca"],["/categories/VIPER/index.html","e849f92abe5c1263f13de037eff8bc8c"],["/categories/Vapor-4-0/index.html","db619cf43c3ba62ebb710ad8b443228e"],["/categories/Vapor4-0/index.html","808e2eb9c041e54a864a18e8d57e40e7"],["/categories/Vim/index.html","0913e366d2448d2db95e1bfdb0e44bc4"],["/categories/WKWebView/index.html","9b173bb08ed06478dafd7b1822afdce8"],["/categories/Xcode/index.html","369dcef684c5c7c15a33f5a35dd77816"],["/categories/appleOS-Networking/index.html","32c0145f131e2f1c498f8b99e8c6ef1a"],["/categories/bugly/index.html","e7147c42809d18bdb9d6755d246826f6"],["/categories/enum/index.html","5866ddc5b75c4e60a80491bed3c5058b"],["/categories/git/index.html","883dd42f95ceeb8deb374593ca772447"],["/categories/iCloud/index.html","1d0246c4e11cec4212e17c985d2018d4"],["/categories/iOS/index.html","d392d4ca9fa0587579c6c2e3b977828c"],["/categories/iOS/page/10/index.html","6eb090e867407c8ace1ecb662f4a3220"],["/categories/iOS/page/11/index.html","581d735e525bcd73d4664972c6103be6"],["/categories/iOS/page/12/index.html","37827c7fbb9a93afad0c6145207282ab"],["/categories/iOS/page/13/index.html","121195572d9fc5c44c7096d1dc9e0480"],["/categories/iOS/page/14/index.html","6444175bca9c0dcd0b47a9b687ece2ce"],["/categories/iOS/page/2/index.html","dccf0e8ef2c8fc260e086a6abe0bf155"],["/categories/iOS/page/3/index.html","9b51d4e9a963637974fbb39aab3ba1ec"],["/categories/iOS/page/4/index.html","a4e30d12109602828cb381474f517b4f"],["/categories/iOS/page/5/index.html","a6c26bfeaaf38c7e8c65e50c76939d45"],["/categories/iOS/page/6/index.html","a9504c4ef09cfddcdd9bdb0b63a6f689"],["/categories/iOS/page/7/index.html","642aebaaacf9f3fbb974ce5c44f9a5ca"],["/categories/iOS/page/8/index.html","36025cea7315021c0e0255eddb4bcb09"],["/categories/iOS/page/9/index.html","730695c1a2c5754877ed4f8c4f28e0c3"],["/categories/iOS面试题/index.html","c4bcab693cceeb5cb705677b028e1e51"],["/categories/index.html","4c060b4dc75cef96b59e81cd7af03305"],["/categories/random/index.html","6d68df5cf5fd0a36f981a0b46501bcb4"],["/categories/三方类库/index.html","ce7a6f7e7f49844558d09b5f035a66d7"],["/categories/函数式编程/index.html","c6bb6eb4a1b90946ffa6fe3dc15e2faa"],["/categories/子类化样式/index.html","1c4a16a3e193a3428ef346bda780e64f"],["/categories/开发技巧/index.html","c17ee925a82884d99d4af9e7b1e34e6b"],["/categories/开发记录/index.html","b49cc992f5f1acaa75d982ecef2a34d0"],["/categories/数据库/index.html","1aa15afed8c3b08412f783b9166c169d"],["/categories/架构设计/index.html","57d30280da4ff7405e0b86696bcb2434"],["/categories/测试/index.html","792a4b1f8d5721bb9943adce15c791d2"],["/categories/用户体验/index.html","a7e2f41de728f773b7bf8d0702907f4f"],["/categories/用户协议与隐私政策/index.html","9811a0acfd1869c59c9f860188095897"],["/categories/设计模式/index.html","882173704b9dbc148a24792b192c7b71"],["/categories/设计模式/page/2/index.html","87791e69c55a9cfe879d892b73de990b"],["/categories/设计模式/page/3/index.html","26043f2ef23c857fec3fad4c668647db"],["/css/main.css","d67add129c2b04511dbb751517c2b175"],["/hello-world/index.html","3d51a8420a0763093e1248578b502fb0"],["/hexo部署失败/index.html","b41fc1634edd41594e78c3edc5c4127a"],["/iOS 15 适配/index.html","80d92752463803e278012af35278a62f"],["/iOS VIPER架构深入实践/index.html","d1cd265d27ef2b7d733d6e001092a821"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","4fd2222235741329c6f5eb2ed81aa27e"],["/iOS 自定义视图，输入表单和错误提示/index.html","a8a63de7377c6566ac6c89436abf3856"],["/iOS如何使用iCloud文档？/index.html","d5d6736a233fcc58df6a46e4846ea956"],["/iOS子类化样式/index.html","be5bb5c84674b487c16ed7fed8385c17"],["/iOS开发记录<一>/index.html","b89e1e0a4a6572cdd11dd6d1b1906a53"],["/iOS自动化布局编程/index.html","ae17fcb7bbd46b8896c3c5b6d35ab9e7"],["/iOS自定义转场(By Swift)/index.html","d7e45f4055400164c8324d187382ad00"],["/iOS项目架构：使用VIPER/index.html","c28917289b375c86ad4b35a8bec8c91d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7f6efb80f4b62b0391e8d2dbe4d7cd91"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4c15fa15686e647a8abfe42e2c17cee6"],["/page/10/index.html","3b48b90cd4a8ad3063ccedb796516c6b"],["/page/11/index.html","01a2049564995194497f3cc60a590c64"],["/page/12/index.html","cdb00d426ba2685f7c43a5e176304fa2"],["/page/13/index.html","16002e94fa1fba1e8d533186a2b323a2"],["/page/14/index.html","27f24c74ca11ae4720b27022cc680c5f"],["/page/15/index.html","656bfb79d47b7aa2b69d5e45684d712c"],["/page/16/index.html","0581111ee17971a84fe773e329abb482"],["/page/17/index.html","79ea4fb1298cdecdfd901e5cfd015b6f"],["/page/2/index.html","fab5a7f8586bd79148c1f25d9b46a7eb"],["/page/3/index.html","26126f3f744a4ae6b00c69a9f26e5e35"],["/page/4/index.html","168096400683d1b1ba5ad213d038132c"],["/page/5/index.html","3ceaf40bc94560969a29b5f29ba6d79a"],["/page/6/index.html","174a9237391d33f74ad56ed4830aec86"],["/page/7/index.html","e3864e49a6356f3bf0cb66c7ef7c9ddb"],["/page/8/index.html","006721b1a55894e16ef1ef3ee8259627"],["/page/9/index.html","888290ceee699ee7565b9f385debfcb0"],["/schedule/index.html","ca68186503adfec11f42b4d704a56081"],["/storyAppPrivacy/index.html","64a7586b544baecbe35b50ebf934bd86"],["/sw-register.js","5aea31e6c34b3a4eb031f816e0c59b6a"],["/tags/Advanced-Classes/index.html","9cff3a3a800bab8a6249f6fd9f0b3b92"],["/tags/Advanced-Swift/index.html","4f0149050a819d6f8a580889c9364c6e"],["/tags/Advanced-Swift/page/2/index.html","82edd21d5d0ee48278d36bc6dbf3cc49"],["/tags/App-Architecture/index.html","c38f072d767be5b166064aa6350f71f2"],["/tags/Array/index.html","88ec34f57806ad5f2a4e2ebc47d2b81f"],["/tags/Arrays-Dictionaries-Sets/index.html","57c1577605bc27ec4a5735b94cd2ca30"],["/tags/Authentication/index.html","4476129042cbb1e4eda64c00af91e926"],["/tags/Build-in-Collections/index.html","540c5c1a108502207b9ae601ae01b643"],["/tags/Building-Your-Own-Types/index.html","9e3a8db9636471906308e3e46f2bf44f"],["/tags/CMS/index.html","481e21a6b48132459e473c840ddaf49f"],["/tags/Classes/index.html","b4980d17367cb032869a16924c82f4a5"],["/tags/Codable-protocol/index.html","cd8a83f7e60cd668dfdbdb1cf7f39e59"],["/tags/Collection-Iteration-with-Closures/index.html","b052d326c4468a022d9696e3fa857ddd"],["/tags/Collection-Protocols/index.html","7b94e3db3d517648c24ba58bb7d8e50f"],["/tags/Collection-Types/index.html","8dab0ac1160b3ab93db3afaaf23858ed"],["/tags/Collection/index.html","5cba68461467a3696402bd1a9a851b16"],["/tags/Collections/index.html","7c4fa58d62badd59ec59aef2a8526f5c"],["/tags/Combine-framework/index.html","962bbc4d77cf924aa6ab8d620ad73f9a"],["/tags/Combine/index.html","0956390884a02085841cba4f3587aa22"],["/tags/Dependency-Injection/index.html","7306b5e799fbc654016bc08a995cf10b"],["/tags/Encoding-Decoding-Types/index.html","4d48d635c53864d4f847bc5e254cf550"],["/tags/Encoding-and-Decoding/index.html","ae02669a10caecda7fd42aaab3cbe853"],["/tags/Enumerations/index.html","d126e5e0b5ba7b9dc663da8d5fffedd9"],["/tags/Enums/index.html","83729eb2117427761c367a2210553ba7"],["/tags/Error-Handling/index.html","b7128426edcbbaba47f1e201621d2d29"],["/tags/Functions/index.html","5242ee11fb139e503deb06e6df219f1d"],["/tags/GO/index.html","78485631d1fc8106d3a8d38e67e7e5c6"],["/tags/GRDB/index.html","6c8e4c02b3cf85c9f71f2c93254aa544"],["/tags/Generics/index.html","744a8ffd48c728abd5320342e5961267"],["/tags/Grand-Central-Dispatch/index.html","a7271c3037678666a11a4fc931b63867"],["/tags/Hello-Vapor/index.html","e761da584c52cc9c724285f1bc1e908d"],["/tags/Homebrew/index.html","530164aca5a307eb8364c07e950f8988"],["/tags/Interoperability/index.html","03effbc56a7cbc202cee152ac7567b4d"],["/tags/Introduction/index.html","bc9f8eeafd9ff6a52512d5151b3b4fc7"],["/tags/Leaf/index.html","452cd5795b7d20b6888d538166cae745"],["/tags/Linux/index.html","ffb1815cd01bbece5771647ce8301508"],["/tags/Methods/index.html","88954ca3c973bb0c873b43a67191b3a8"],["/tags/Modules-And-Hooks/index.html","5ca44bf1ab80cd2c2452f4879d6cae48"],["/tags/MySQL/index.html","84509270b7642956e6f9a98a5598c2ab"],["/tags/Optionals/index.html","56e43edc8ba130d1b8755f6bd4d1f23b"],["/tags/Promises/index.html","8275deb0a2b7e996a8782dc00e4db59a"],["/tags/Properties/index.html","ae65736cadcf1f9c8a9b2a63fe0bd569"],["/tags/Protobuf/index.html","678246978c915c7f96cd028460a63109"],["/tags/Protocols/index.html","77bae370ac6c10a9f759bb1012b0fbd4"],["/tags/Result-Type/index.html","8a19baee87cc883e38fe565effc3cb28"],["/tags/RxSwift/index.html","c423afb540f360db6aa1007820985f8b"],["/tags/Server/index.html","1058912732029ee01a48aa91e6d3ec05"],["/tags/Session/index.html","09042be1a39a86fff1eedb90a26a0897"],["/tags/Sqlite/index.html","a2823b5df0c4726a4725eb967684e562"],["/tags/Strings/index.html","738bb830e227cf4cf432384b82c8dc8c"],["/tags/Structs-and-Classes/index.html","e352dadc7e7d3e3eae875910103ab8f1"],["/tags/Structures/index.html","44e7e2381d44c80f45559e2d26beddd5"],["/tags/Swift-5-0/index.html","527eda1eb9be81dde08896347c024769"],["/tags/Swift-5-0/page/2/index.html","b5540c0e7ea6ed28fedb39696be90e34"],["/tags/Swift-5-0/page/3/index.html","03b0b5e56a6eca057e2d55528d70c977"],["/tags/Swift-5-0/page/4/index.html","c63b7a2a0d7dfdc7bfc5423d88fa3e64"],["/tags/Swift-5-0/page/5/index.html","e36ccfead84cea3814643f15e80e7190"],["/tags/Swift-Apprentice/index.html","d20c41f2077c7c7f26a39aae39d314b1"],["/tags/Swift-Apprentice/page/2/index.html","7105d285c771d4d9af4653c9a6de29f7"],["/tags/Swift-Apprentice/page/3/index.html","fa6f1206d8b2f5e84407e226a7bd4497"],["/tags/Swift-Package-Manager/index.html","104e702c664a262bccfe44f1b6290260"],["/tags/Swift-源码阅读/index.html","6811b21e84340dc05dbb06784a6f37db"],["/tags/Swift/index.html","d57be05c9bd077b266e7e36ea87ff71e"],["/tags/Swift/page/10/index.html","277185aaabe939bb0bd429e46cf5dca4"],["/tags/Swift/page/11/index.html","11e2ad6db20ca03fc8e99155a2391761"],["/tags/Swift/page/12/index.html","764aa034b846ddcce19f601c2f6b1f93"],["/tags/Swift/page/13/index.html","a42dd9679eb85931788899f0e3aa7eef"],["/tags/Swift/page/14/index.html","f32630c9d9ca7e117f3b1ff1c7062824"],["/tags/Swift/page/2/index.html","2454c8363e6a63ea8b34360463440774"],["/tags/Swift/page/3/index.html","cc41b97d92b02d255f26bf0470d58a02"],["/tags/Swift/page/4/index.html","6798161a1b823b2b372bf5a7d8543f08"],["/tags/Swift/page/5/index.html","afb04687a632149a56462066c449f7c9"],["/tags/Swift/page/6/index.html","813d08c7850ea2fb8766b52953827242"],["/tags/Swift/page/7/index.html","bab72738d858ee4406a11838db1b56ab"],["/tags/Swift/page/8/index.html","a15cc84f65cebcd5f26266586c757a43"],["/tags/Swift/page/9/index.html","ba2500d518d50be0994552723941022f"],["/tags/SwiftLint/index.html","1ad0dca914742f182185fdda1918e0db"],["/tags/SwiftUI/index.html","ad9e7823ad6ab35f570e379e10e17dfd"],["/tags/UICollectionView/index.html","f161c36654093c78c945c6770153b6a4"],["/tags/UIColor/index.html","10c7df72482323c377b40ab0d5d3d988"],["/tags/UIImagePickerController/index.html","8d0a58aabe80c06e3d1d2d74f51bc449"],["/tags/UIKit/index.html","6f00b2de0a5852ec5faec4492032d31f"],["/tags/UIKit/page/2/index.html","a9da557574443dd75b004fc8b91e3b0f"],["/tags/UIKit/page/3/index.html","884158519f6790cdcb2a20cf3f6a515b"],["/tags/UIKit/page/4/index.html","177aa00649bcdbc1ab0da585081be7af"],["/tags/UIKit/page/5/index.html","5930029a909e74167faa6cf5f64e055e"],["/tags/UITableView/index.html","8cdf85ead7618b49b8db86770e61d91d"],["/tags/Ubuntu/index.html","7ce1b60785890fb54671b713f7ceed34"],["/tags/Uniquely-identifying-views/index.html","fc75b8ad817d514fe57dc75116a0e161"],["/tags/VIPER/index.html","acf6959957edbd66b58a5f182b5a9f81"],["/tags/VMware/index.html","b0643cceb5b99a7b18e7fb7e6e51c0b3"],["/tags/Vapor-4-0/index.html","d0b7dd2ef6c670ad0342235f56890cfc"],["/tags/Vapor-初探/index.html","5c44917c5f13c85cf50e99002f4544fb"],["/tags/Vim/index.html","7c32b6c170a54ffbbab46e63d1e3b48e"],["/tags/WKWebView/index.html","e1d38015b455fe413758ae2da67df351"],["/tags/Xcode/index.html","71cd3319c690038828cee5fada269200"],["/tags/appleOS-Networking/index.html","3af6f854669438e3061ac1d0b5aa26a0"],["/tags/bugly/index.html","62d552b83854cf399176d151ccb2f234"],["/tags/enum/index.html","c6abe53665938ba7a71ba03c74a4f0e4"],["/tags/git/index.html","20fc7337d643bc2c49f439a0912a8fd0"],["/tags/hexo/index.html","a31301e60d96aad669864a9a9f49d35c"],["/tags/iCloud/index.html","cd5468ffcda70a323ec8036f6f5b18c8"],["/tags/iOS/index.html","8f0753cecf8e2f08ef3751d09e604873"],["/tags/iOS/page/10/index.html","c03319e20f04b1500b95e4f4d3b7585d"],["/tags/iOS/page/11/index.html","23fb76a371565006aa7effbbfd9944b2"],["/tags/iOS/page/12/index.html","342a2865f9a58dfe8cac1a7593c4c909"],["/tags/iOS/page/13/index.html","dee5a934cfdd177eb0741f3e491268c6"],["/tags/iOS/page/14/index.html","795ffeacabcdbd4c4510ec25cfe93761"],["/tags/iOS/page/2/index.html","21915465419238f7fee7c52ce55ccc17"],["/tags/iOS/page/3/index.html","7a87150782987be7dd12506e2186202e"],["/tags/iOS/page/4/index.html","4c87e76bad944425240d91ce5d473ad0"],["/tags/iOS/page/5/index.html","819c3530df0e219557b9d82eb68698c2"],["/tags/iOS/page/6/index.html","24dd44ea88662fe3bd92bc2dfa8488ec"],["/tags/iOS/page/7/index.html","cfe90a3fc32e726697d503c3ca49d325"],["/tags/iOS/page/8/index.html","e2c044121f2070777b08d50ee507fbdb"],["/tags/iOS/page/9/index.html","8a624b08c2bdaad7fd220335471f8448"],["/tags/iOS面试题/index.html","4045213b8c586ff35a6c4bf413c2f78c"],["/tags/index.html","11751923039fdd4b027e4abc1c1b1179"],["/tags/non-optional/index.html","223d64428e5260d85c05a733412d0d24"],["/tags/random/index.html","d210577b431ac9a77435d489f6e0dd89"],["/tags/transition/index.html","96956365a3457d4783c5fc6f568a5118"],["/tags/三方类库/index.html","7503dda5350d5970888da3b9ee56f527"],["/tags/依赖注入设计模式/index.html","b5b640c9821076783495e5786c19d54f"],["/tags/值类型和值语义/index.html","ec1d1d90f639b1978437b55cb96fbcf5"],["/tags/内存管理/index.html","3fa54e3d3c0df52d56e9e6f5c06d6b81"],["/tags/冒烟测试与回归测试/index.html","7f4349e9d93f4ec95fd18e3071e37ef8"],["/tags/函数式编程/index.html","f2990cdffe8a3a02f929b543ccd43c15"],["/tags/创建博客数据库/index.html","4de1b92e572e5bb2782da3484fdfeeb4"],["/tags/初始化模式/index.html","8cac1f6bb13de95f0e05cf82dd3847f8"],["/tags/单例模式/index.html","0faa7c5ab022d56cbbde81a32555046b"],["/tags/原型设计模式/index.html","e86669b1a2493cea2ad89bd367e31d5e"],["/tags/命令设计模式/index.html","73b4f9feeacbb2dcbff3ae937caa80aa"],["/tags/基本控制流/index.html","bdc6c82731e62ddd9d0ad20e15ca07b2"],["/tags/外观设计模式/index.html","3e60cee833b9a4610b401ec7008b62bb"],["/tags/委托设计模式/index.html","40f0dbdcf807db1bb60d148b324586b6"],["/tags/子类化样式/index.html","042214d4124884c42ba855219a12559c"],["/tags/对象池设计模式/index.html","56fab1e4590b5a9e83b70e55db793100"],["/tags/工厂方法设计模式/index.html","c3306e808cca047bc07e2feffeb630eb"],["/tags/工厂模式/index.html","521fc246e7ad5e7e24da30622f17c4d9"],["/tags/工厂设计模式/index.html","3b21b7660fa137058502f4f71c967d32"],["/tags/开发技巧/index.html","a96d9e125d33ed9d4738c9e885ba3891"],["/tags/开发记录/index.html","1b9c1957a61c6ae91f4e7f40ec193d39"],["/tags/懒加载模式/index.html","cc570854e3f14b91a08632dfd879ba6a"],["/tags/抽象工厂设计模式/index.html","67b67f9e10a3f03c5e165e2bf9fe82d7"],["/tags/数据库/index.html","c03ce521a7a08bb4f2651342ede78ecc"],["/tags/构造函数/index.html","5573705e68840a74db1f710592d6464e"],["/tags/架构设计/index.html","86d5b919d42450b1a8e7805507c10bf3"],["/tags/模式匹配/index.html","f9d9e825fbc06a75841f39c0e4dc8a33"],["/tags/环境搭建与验证/index.html","645872135bf821eadcde17d6c9c63bab"],["/tags/生成器模式/index.html","ba55ce65f3c1430cff8c4ede2997a329"],["/tags/用户体验/index.html","c8c09ee4da9fc74eed6459370147afef"],["/tags/用户协议与隐私政策/index.html","9423c4e1b68269ab9044ac0ffff79a72"],["/tags/类型与操作/index.html","f6d48ee537be9da6606883391dcf3125"],["/tags/自动化布局/index.html","8b16ffeda9414143ed9f40df7d0ee707"],["/tags/自定义UIView/index.html","ffb0786a2edb50ccb60e622c342bfde1"],["/tags/自定义转场/index.html","0cef84a77eb588d9982d0b409697644a"],["/tags/自适应布局/index.html","2ab3e2d8f5752d00fd03f21b42675c5e"],["/tags/表达式、变量和常量/index.html","2a2d2dba52ca4248ff5ca6a7275a05f8"],["/tags/设计模式/index.html","eb4ac9df4539b1e03a3e16f519a42446"],["/tags/设计模式/page/2/index.html","1132bd681ff7f186d84860c84f87fc2d"],["/tags/设计模式/page/3/index.html","98ac02a2ad710c8578e483424571214d"],["/tags/访问控制和代码组织/index.html","4bba4bddf1116d9e7980baea9961dac9"],["/tags/运算符，下标和键路径/index.html","9e9311eb6c061af295bd979f76845153"],["/tags/迭代器设计模式/index.html","bfb1b872d41ad273c3935d51ed0c0756"],["/tags/适配器设计模式/index.html","0a2536b0a1176edfc57b013c67f3d44b"],["/tags/错误处理/index.html","3fab9ed82490b363b541990b6e9fa605"],["/tags/静态工厂方法/index.html","df4a82945a1039efcfb5db34667954cc"],["/tags/面向协议编程-OOP/index.html","4fa56d2227c1795c61ce52cee8f6ec20"],["/tags/高级主题/index.html","9f9503791b1c1f90bcc94fded55e0ccc"],["/tags/高级协议和泛型/index.html","9b49e1b9b887b45a399bb9415d4fce68"],["/tags/高级控制流/index.html","3bea3a8fc0ccadf407f2c26bc01eabf2"],["/xcode 常用的快捷键/index.html","3b6f8d7022e643c0268cb0bdab465345"],["/为iOS应用构建输入表单/index.html","e26365d33cff53feed801279c3fdcae5"],["/产品开发的幕后花絮/index.html","72eb3817d7e153a6079279db2aee1d02"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bada153ef6c2d28c3bb5d3c692eda3a1"],["/冒烟测试与回归测试/index.html","ceb09accbcdce4cca31a12ecdac17cee"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","24cf7e667e0c693d1b4359d3c50e4d9d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7eb6c4b830629d1d829e19577e1b2ad3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","14b8d3a0405086eaaef67abcc16b7043"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","35f59deea521f56cdcb6d7a72ab329d4"],["/在Swift中创建自定义集合/index.html","eded348a0d802fe064dc16e246301e0a"],["/在Swift中处理非可选选项/index.html","24f2e3ea8cc1b438ad42d42a99131583"],["/在Swift中生成随机数/index.html","aaa3f7d3c007d66d8194be743190fe1d"],["/在Swift中重构单例模式用法/index.html","214735505855becfda5c86df4090cf06"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","67d0a9960930b0882aff1c74ef564eb4"],["/如何为VIPER编写服务？/index.html","4c5fbb57a927206e18343c709b6994fb"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","20f8b443015bd5099fa9886709009161"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","a975cf4a5db5b9078a3c8b67c1b8e0c7"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","3d6f9b09c68d8a85bb1ae071acfd03a4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e8f5f50e861ba26cd410d12ebbda14ed"],["/掌握VIPER架构/index.html","dc3cef6d59a1d4357951b1c7b6842d75"],["/揭秘 WordPress Hook 系统/index.html","f2978561ef4d8319d0290bcce4af337c"],["/比较工厂设计模式/index.html","9281f6326632076b79194ef20d718ecb"],["/深入了解Swift中的Grand Central Dispatch/index.html","8b744f34d08764b808a2dc864ce5b888"],["/深入研究Swift框架/index.html","0a56f6b0c199c3e12c2e8d522bae2286"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6b978357d589ebe1b303eacc928db013"],["/选择Swift而不是Objective-C的5个理由/index.html","b7f59c69389c39a583ba68fc40c5a02b"]];
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
