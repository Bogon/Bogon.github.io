/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","2cadf3c48d95836c4a48730116e78daa"],["/2020年iOS面试题总结(三)/index.html","dc464c99bf8e00638fc6384a865e7631"],["/2020年iOS面试题总结(二)/index.html","dff7e162aaab7ecdc6278337bdbe3992"],["/Advanced Swift系列(一): Swift 简介/index.html","ef0f48aad74374ca8d8e96debbddc868"],["/Advanced Swift系列(七): Strings/index.html","83551185fd018fe0fd97be98845dd1a7"],["/Advanced Swift系列(三):  Optionals/index.html","7559245972683a8d7ded23486ec1f308"],["/Advanced Swift系列(九): Protocols/index.html","8dcf0c7d3d65487c4bff28cfebfac427"],["/Advanced Swift系列(二): Build-in Collections/index.html","49545935d9a25ea3120f60a2f002af31"],["/Advanced Swift系列(五): Structs and Classes/index.html","70ef1d4d59f2ef12b6c8bd1748f8e9c2"],["/Advanced Swift系列(八): Generics/index.html","270809e9e4831b87b4fae96d6461ddb2"],["/Advanced Swift系列(六):  Enums/index.html","fb819f4093f8550c9f8c3a05590348de"],["/Advanced Swift系列(十): Collection Protocols/index.html","075e778702f31989532b8e953bab270f"],["/Advanced Swift系列(十一): Error Handling/index.html","97f32dad3c1bf97dcd84d8fdbd2ce656"],["/Advanced Swift系列(十三): Interoperability/index.html","d672e2a2e7532636bff8df9912a74975"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1a2e19cb34c6802cd2b25969f2662a60"],["/Advanced Swift系列(四):  Functions/index.html","81884f1c55044901977140f8f8cd686d"],["/App Architecture系列(一):  简介/index.html","6b5994b2f423e10b9796d976afce22e3"],["/Functional Swift 初探/index.html","87ab89f3dd9baf9b61f4dcf950e9be87"],["/Git 使用小技巧/index.html","6952eaaf4b40d11f9b1c5ec10c92263d"],["/Go mysql Tips/index.html","1e31ba11d794034770b1b548395eb5c4"],["/Go 基本语法初探(一)/index.html","ddcac213e7ae9f4ecd2319c7a092650f"],["/Linux VIM 命令及操作小结/index.html","bcabb73d4b3e6b7d4da3e9ee1866c486"],["/MySQL 基本操作/index.html","8d971f3f2c38ba1c15073a98921ec3e0"],["/MySQL-列类型和数据完整性/index.html","af78c51203e755b32a0ae4d394373617"],["/MySQL-数据库设计和查询语句/index.html","741b8ec63ea8b41738c536e9df0fed6e"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","42b5413ca473c355514beb0d479dbc8d"],["/NSCODER和SWIFT初始化/index.html","39ac7442d18b5b1ea584881385f29f78"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","9e1bcb40139c20a1a0b2d06182f56453"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","1d78bed0f21d93b7fc952c2791d5289c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","603ee871099ce718c155aa9be11e14ef"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","62dd79aea323bd8e9262c47669b13380"],["/Sqlite 使用Tips/index.html","8e48f7a940d65a7fae79e9bcd5d20fdf"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","79274de43c05a3af6a73392c2bf8a425"],["/Swift 5使用UIImagePickerController拾取图像/index.html","24a694b501eac2000af81f3f0a800216"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3c62a43a67395be3d84feaa299c1c0da"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","be4a3a65917a0342fa2052d87207a423"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d0a375d837cba32c2383089e29566620"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","524d9eecc8631c88195c1ca9c75586a8"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","4d18377c10c41a5129b2ba31ac6330df"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","e36661b10d330645f2a29d1abd215b60"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","68c776a17df70e18fa8b4166ca0eac1d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","53756334b7550d9b9e43c3c267991633"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b64a87e9ed516941b0c2d39f5795885e"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ad49800b522f7a42808f838087d63a7c"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","17cbb7b764b06082ecc20111e7ac6935"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","aefd4ff2d8f11ec928ffe1e23d9cf259"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","5f71f382e909ef44b65404d0713b8ec6"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","aef7ddcb30a5a9d4b83c70cd54ee7a88"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d964d753744f312447af53a68c655b35"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","24dd843818d80d690861315784a98788"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","63f3b0be462801b3017476fa190c66f5"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","939bce134d85a7cc9d39e21c4b5aa61b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","50ba571235664e821b21a1e98f153f16"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","b254be07f2c9a9d8341938eb786f88dc"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c437c46c4912a19819a0c34f1831d8ab"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","fa6b5e8347fbb7d4326c47c1f6bb87fa"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","46626d4205bce832f34b1618eb9bd3e7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","e55d993437d7e12a94117c6db9473825"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0410fdc7b7781ccfcf7b39be24a36f3d"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","555ace3538a24aa6fdf5e7b4698e486e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","b48715f88f9b3782b4306e295beb4b44"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","fc5108184c4576f14ca5b5bf99302676"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","19fd3a0ad541507c0c31b6ea3a8a6f4b"],["/Swift CompactMap vs flatMap：差异说明/index.html","2b6ad3bc40db9a969582f881eb62b5c9"],["/Swift Grand Central Dispatch 深入实践/index.html","7a1a3814e1231f2ad785310837d84869"],["/Swift Lazy属性初始化/index.html","3c9231b7774ef8914d891dda7a0737f5"],["/Swift Promises 初体验/index.html","9a77b624c894b900b101cbcf1a5d25ff"],["/Swift Promises 探究/index.html","bf76565188ef384f2704964aa55865c8"],["/Swift UICollectionView使用指南/index.html","c48a1eafcd465806207fd3b088fc3324"],["/Swift URLSession && Combine framework/index.html","47bfb0e6c628919b88d3e8975cf5e9ca"],["/Swift tips/index.html","ec8ad8eadd370c782de4cf109bb7a7b5"],["/Swift 三方库：GRDB 使用指北/index.html","a620d53629e0ea274fe91a55a939f339"],["/Swift 唯一识别的视图/index.html","135da7b72ef75182efd3538277bd75bd"],["/Swift 如何学习现代UIKit？/index.html","448efdc82bd5e8b4691eb4b7df4b2bf0"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","1c65a5972673bf6b2d2262223ec1fc8f"],["/Swift 用 compactMap 替换 flatMap/index.html","558bd0c5efc078e8f6c99dec6a4dcae2"],["/Swift 选择和播放视频/index.html","2b1837d2e5eddd3e1e8c79aefa4c7053"],["/Swift中UIColor最佳实践/index.html","b9683b4e16d899ccfa29a2708014213d"],["/Swift中快速简单的工厂设计模式/index.html","a603d5f159d41b40a9f092e1e264787b"],["/Swift中构造函数与静态工厂方法的比较/index.html","eb4f7f7359ff9762244fdd84c2dad52a"],["/Swift中的UITableView教程/index.html","383bc8af1218c177ca873bf4eb60fb90"],["/Swift中的懒加载模式/index.html","4ca4a56d78754aa2f81baaaac4264eda"],["/Swift中的模块和挂钩/index.html","d900b2489a915b698a73185c74a76537"],["/Swift使用布局锚点添加约束/index.html","ba75d1cab9a90bcf003c0901a517e185"],["/Swift依赖注入设计模式/index.html","a188e9970e40f22838907121198e7e3d"],["/Swift关于Dependency Injection (DI)/index.html","6850d5bf0f0914fe05dd802df8889557"],["/Swift初始化模式/index.html","d4434f15ed24b93defee2133dedb7373"],["/Swift单例模式/index.html","b2d998276b95e170770e27128c4caf4c"],["/Swift原型设计模式/index.html","a68c7612ce4c885d1db0f1bab6fd5c1e"],["/Swift命令设计模式/index.html","42188b206e61f3e16621ac0d310c35ec"],["/Swift外观设计模式/index.html","cf8f28a124e1e5f120d97b076bbdd8ac"],["/Swift委托设计模式/index.html","9738a7fdf24610f2422370274fc8bd4d"],["/Swift对象池设计模式/index.html","7c9f70a755d364fe6704e391aeac0d01"],["/Swift工厂方法设计模式/index.html","e22c669f8c60ed5f58e96ef37a0a9109"],["/Swift带闭包的懒惰初始化/index.html","f33870510ccf904782320a3a334ab40a"],["/Swift抽象工厂设计模式/index.html","70e0bf53123dc510546bb7b7a85b283f"],["/Swift掌握iOS自动布局锚点/index.html","eb03513a2a2390b6cff7374835a086c8"],["/Swift支持旋转的自适应单元格/index.html","fcdffef0f1baa213dbf1bd2dccaf1bb7"],["/Swift枚举值/index.html","bf77c501e2af4da4e0bdbeb6e613c847"],["/Swift生成器模式/index.html","efe519f4420e2a5aeb67d912abea4717"],["/Swift结合Xib文件自定义UIView/index.html","b9e8e6e68a07315f86f4d1989a49ed67"],["/Swift编写的20个iOS库(一)/index.html","f73d376a32e649b2db3aa9ecd1f4844e"],["/Swift迭代器设计模式/index.html","f0437289d7709e425eeb788f7fab93a2"],["/Swift适配器设计模式/index.html","7cf2840e2ff51d904d9cf076d4102976"],["/Swift静态工厂设计模式/index.html","1a5b7b0ec9304da5a92001fd0b67a223"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","790a4fa7a47bf8dd859e62d70dbed917"],["/UICollectionView data source and delegates/index.html","a24b21841f68b6f665b9598784fba119"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","83ef62a7d6fca44bcee7d82ff0f48078"],["/UIKit初始化模式/index.html","19a6d55d04636546dec32ad65a864c69"],["/Ubuntu18.04替换国内源/index.html","18c1e820eb69041f95e75bf6f8b59846"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","90306a4f46497218f3febad77c727f8d"],["/Vapor系列 (一) :  Vapor 初探/index.html","73018d60e47429df3c69ee186b0e517a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","a18439d93ac4556838c153ae71b568de"],["/Vapor系列 (二) :  Hello Vapor！/index.html","0106b0b1cdd2d103214de4ae41cd25e8"],["/Vapor系列 (五) :  使用session进行authentication/index.html","ff5e6ad55d967026e529c38f71d92ac1"],["/Vapor系列 (四) :  创建博客数据库/index.html","a1668f0a9938bf2f930f2ff6164ede48"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0a6bac9a3d002bc0a7aa1eaa7724864d"],["/WKWebView与Native交互注意事项/index.html","4c285350437f2be64b380960f261349b"],["/Xcode扩展/index.html","48e16a16ef55bee6b80b049a36d9853d"],["/about/index.html","70922cb30cc0ff875f386d9ce811d275"],["/appleOS的Networking示例/index.html","87e5236fe6919d52e578f2d14199b064"],["/archives/2020/03/index.html","26827c296fb20f6c4c4c57c40bee2851"],["/archives/2020/04/index.html","677c4be4df5c2aeb11f446e634fea727"],["/archives/2020/04/page/2/index.html","b827f3e936a0728e03cce26e66648010"],["/archives/2020/04/page/3/index.html","60b54f4ecf9d35d0dce9d111b06920a8"],["/archives/2020/04/page/4/index.html","9ab28c798fc7840044745d1e25001831"],["/archives/2020/04/page/5/index.html","2e1dcdfd76b9e382753f632a20b6d26c"],["/archives/2020/04/page/6/index.html","0f1fd04d0e6486ee9e8738e7baa6c981"],["/archives/2020/04/page/7/index.html","071e2f3aefdf27e04396ccc9a03e3529"],["/archives/2020/04/page/8/index.html","95d111880b6848d592b5531357cfa8ab"],["/archives/2020/05/index.html","8b470b7aef859d1bd7ab8ab83cb3b1ba"],["/archives/2020/05/page/2/index.html","209f52563001c02d8e7f71aa38715d23"],["/archives/2020/05/page/3/index.html","1ded441fc2b096831fa9767d6c5a178a"],["/archives/2020/05/page/4/index.html","9e17bfc46936a9c1335883043981861e"],["/archives/2020/05/page/5/index.html","09a25c4e879a2496829bf8131ef39901"],["/archives/2020/06/index.html","f01aa9f906298f17dc967d4d279b632a"],["/archives/2020/06/page/2/index.html","996af215fcab7e49fb6b62cdc467d08d"],["/archives/2020/08/index.html","362ab2cd344cd4b1687588ff1d5643ee"],["/archives/2020/09/index.html","3d8760d785695240636fd73981d2d24b"],["/archives/2020/10/index.html","dd5cd5bd164723f7fb455b8bd6dc8b1e"],["/archives/2020/11/index.html","49b8f46695d5a7c01c651f7b40a356b0"],["/archives/2020/12/index.html","11a8fc8e14eaae2429ac56693cae4301"],["/archives/2020/index.html","20434d267fff349a06d1e7713d8769c3"],["/archives/2020/page/10/index.html","f87e773f61c438c77e305c1a836cb1ea"],["/archives/2020/page/11/index.html","a2d9c61aea0f6404de77958c65ac5005"],["/archives/2020/page/12/index.html","f58dfcece9d2e1e2116140a73cf96d3b"],["/archives/2020/page/13/index.html","656b59f144b0cfe610e5d752d28b8baf"],["/archives/2020/page/14/index.html","774fc918fad9d19b9d4c3dfac9351c84"],["/archives/2020/page/15/index.html","64aa1f9a74eabd513334e6b8d84f576d"],["/archives/2020/page/2/index.html","b5d4195b480dd28514efd1dbc5d67dad"],["/archives/2020/page/3/index.html","692ad01adb664992590a6457f369ded1"],["/archives/2020/page/4/index.html","8c57391db5c1980940b16f54ba677391"],["/archives/2020/page/5/index.html","3911ba8700a7668f276307ad5916b50c"],["/archives/2020/page/6/index.html","a493bdae81b33624c04c14a1b2b8b375"],["/archives/2020/page/7/index.html","e90e69a2e3c62a8cb1268284c6cf719d"],["/archives/2020/page/8/index.html","530572e3770e16210ae00b6786e90a6b"],["/archives/2020/page/9/index.html","18f441a94f551fb8d8cf1352cc3549ed"],["/archives/2021/03/index.html","2da3e8f681543b24c4b01de93cbfe4e0"],["/archives/2021/04/index.html","92ffa1d330c19c0deda45110a9d73fc0"],["/archives/2021/05/index.html","e70ccd69eb954ed98474eb3a72da5ec1"],["/archives/2021/06/index.html","ef56d21e6a70ba154792d6969235f7c8"],["/archives/2021/07/index.html","3d79b0badca18a122bc54b0e705c38cb"],["/archives/2021/08/index.html","62cd3ef21cfdcbc7123ead567a1a10f4"],["/archives/2021/index.html","b32cc756d5efe86e6110ae1b1c59c0a8"],["/archives/2021/page/2/index.html","06fe1c280b12856e81cb1e1d24cf2c22"],["/archives/index.html","bf0db546434af4957dd8f457b2f7ad06"],["/archives/page/10/index.html","2b0f8c833ea61e3bff610bbe5e137ed9"],["/archives/page/11/index.html","aff11f998b64ab922dbc6b2982b1fda4"],["/archives/page/12/index.html","7b22be80e3572733a0a8991981bed8ed"],["/archives/page/13/index.html","b052edfe3991157189a75529210824e4"],["/archives/page/14/index.html","eef6fc471c70eef69b3411df001158b8"],["/archives/page/15/index.html","d6664248f34d062df60a72adfc22a883"],["/archives/page/16/index.html","4135f3d988373f9735b973a0f677944a"],["/archives/page/17/index.html","6aafb4611f51fc22f74f2bd62d691fc1"],["/archives/page/2/index.html","2fb6f1c25bb95a29603e05266fa0f193"],["/archives/page/3/index.html","9460cf2543c5f4abdbe4d97085796ba1"],["/archives/page/4/index.html","d87aca53e1e6b80f990affeb50c55f43"],["/archives/page/5/index.html","cc9b02261b68f09e382e69610b2a9fb2"],["/archives/page/6/index.html","04138d45ffacd21481ce58e5adc67cbe"],["/archives/page/7/index.html","eb4f550cd351851358ff13722282da44"],["/archives/page/8/index.html","8ed850bd1b8b632a694da08ef54676a5"],["/archives/page/9/index.html","eda90dee5f89db9a6522e878bb646909"],["/bugly 上传dYSM文件小记/index.html","ed7efe1163f648c5865b7be6283ef7d1"],["/categories/Advanced-Swift/index.html","5ab61fef55309640d6aab7679ee3720a"],["/categories/Advanced-Swift/page/2/index.html","b430f8a91206eaa1d4c11046816a43ef"],["/categories/App-Architecture/index.html","93c29690482bd041d686220d9764b683"],["/categories/Array/index.html","56a779a1c7811d00009c48f6b4097494"],["/categories/Codable-protocol/index.html","8a4b9ff351fabd5b5d32cf8b0bf55559"],["/categories/Combine-framework/index.html","2a23f97f19324b5f432bee2a9dc8d87a"],["/categories/Combine/index.html","058d580474a7e5d823e8876a7eb316e4"],["/categories/GRDB/index.html","d8c26521164df7deea7fbe8a1a19b6f6"],["/categories/Go/index.html","436d8e3f4f7f093f3c14377470b8dc15"],["/categories/Grand-Central-Dispatch/index.html","4dec7c44b20951020fa98f1ff17ea874"],["/categories/Hexo/index.html","54770f9b45562fceb88f678765d0442f"],["/categories/Homebrew/index.html","819ea49b39f338d1998a433b0be21674"],["/categories/Linux/index.html","d313c68c17cbb8e55014ca4fe8a1b697"],["/categories/MySQL/index.html","ce67dd61fcb9303acaf03345040fd14a"],["/categories/Promises/index.html","8b45dc850b384cc95bfdd3c50e1aa4e2"],["/categories/Result-Type/index.html","24f3a6b1638b90d930b948d8cb823139"],["/categories/RxSwift/index.html","c24f293c4c744d7399bae89435e30151"],["/categories/Server/index.html","d59f59f4e2647dbc76d3dcd5f3a45eaa"],["/categories/Sqlite/index.html","ca553f80076a036c9f8a8c425733489d"],["/categories/Swift-Apprentice/index.html","c55b0e83c0895771bf7dc9214a5ff871"],["/categories/Swift-Apprentice/page/2/index.html","e04724154f976903ce48a6e05b9d839d"],["/categories/Swift-Apprentice/page/3/index.html","c4cf7adf2cd2024f208f23438366518b"],["/categories/Swift-源码阅读/index.html","572c45d1915eb55099416fe703ea749b"],["/categories/Swift/index.html","0681676283fe85dc15dd94b5c331a321"],["/categories/Swift/page/10/index.html","656ef13b60468fdedeae4a88826f7996"],["/categories/Swift/page/11/index.html","869b7d5fe213aa462ff1b18c4da42e9b"],["/categories/Swift/page/12/index.html","da300daa1c9d3e8e598d263adca725a5"],["/categories/Swift/page/13/index.html","90f127d49b04af0de82418b86971cd50"],["/categories/Swift/page/2/index.html","1df9e14415a75e05c019ef57cd5f50d4"],["/categories/Swift/page/3/index.html","debfeda0b03ee562ab6f121ce2649390"],["/categories/Swift/page/4/index.html","a263f6e839116b22377e6846f0405073"],["/categories/Swift/page/5/index.html","ce4230ebea9b32b491cc4615951a07a9"],["/categories/Swift/page/6/index.html","5171fc9b317fcff3e4a4daa1c8db10fd"],["/categories/Swift/page/7/index.html","3fa12d74f05cb9470a8be9d1359d0e49"],["/categories/Swift/page/8/index.html","9798996af35e6e1619f22bdc9961fd66"],["/categories/Swift/page/9/index.html","147125b96c340e14996a7353bf063248"],["/categories/Swift5-2/index.html","4d12979d97d8f23002bd658d941f0dd9"],["/categories/SwiftLint/index.html","c89fae150a17eae19bdbdab228311c73"],["/categories/SwiftUI/index.html","a8136197efd9ab96ef5bf44e7e834719"],["/categories/UICollectionView/index.html","5935e010e801f33eb282fbef994b495b"],["/categories/UIImagePickerController/index.html","5c7ca71f582eb4cf2ede92fefc4b9610"],["/categories/UIKit/index.html","ff011b6eabff8a7fc897253449ed5cff"],["/categories/UIKit/page/2/index.html","cae3d687aa4f623fd349c8140aae861f"],["/categories/UIKit/page/3/index.html","801d4e7db5448eb771fdee9928f5fa41"],["/categories/UIKit/page/4/index.html","6d067e8dfae08cceb114087d617aaf52"],["/categories/UIKit/page/5/index.html","1358f2a399f330b88673113e86796056"],["/categories/UITableView/index.html","c1acca695c368f2e4c4431a8cf8cbe5b"],["/categories/Ubuntu18-04/index.html","bb1ad9e04a430b5db01968301ec2b05e"],["/categories/Ubuntu软件源/index.html","05d392206f7e2c56bac2d3834f67ccd3"],["/categories/Uniquely-identifying-views/index.html","2be1fec8d8e4e355635c758f84d349a5"],["/categories/VIPER/index.html","6d70360338fed1f536b16328d56fd6b2"],["/categories/Vapor-4-0/index.html","e56aec7972ad284e520181a012ecb322"],["/categories/Vapor4-0/index.html","27df7dbca92d82edd48ffdd22cf516ae"],["/categories/Vim/index.html","92a87ecedad9ed4df69fca4b3fb1764e"],["/categories/WKWebView/index.html","98e7ab047248ef16aaeb757bea0d6f50"],["/categories/Xcode/index.html","d5cc83af7005d5915426de14ff974f8d"],["/categories/appleOS-Networking/index.html","d074968d7618625b39f5df04f51d8137"],["/categories/bugly/index.html","3b68b3961bbb0de0e7784f5ab1d2dd39"],["/categories/enum/index.html","c0e71bdf914f937f494c389697e9bd4a"],["/categories/git/index.html","ec383aa3b423693a02f8fa098c5d225e"],["/categories/iCloud/index.html","514261b0cdddd5b0a1b1a8047f226722"],["/categories/iOS/index.html","015289e006c72e5678751d64e0bb3af1"],["/categories/iOS/page/10/index.html","cafc8a48fcc50babc61690053da8da28"],["/categories/iOS/page/11/index.html","db6cd682fead37e52de172a296d4d127"],["/categories/iOS/page/12/index.html","905c31586c5863e06f6a5b4545d5ca6b"],["/categories/iOS/page/13/index.html","771ed2a448edd53d9995f28257367d9c"],["/categories/iOS/page/14/index.html","6034124cf5957cdf77e4214fbf94324d"],["/categories/iOS/page/2/index.html","c42947896c4016dbf7627abb1373e829"],["/categories/iOS/page/3/index.html","b1978fe62510c987c47d6ee5074d06a3"],["/categories/iOS/page/4/index.html","17fa68b43d0e31f6793b72dc92dfe919"],["/categories/iOS/page/5/index.html","ba787b6288aad094311738d580dd054d"],["/categories/iOS/page/6/index.html","d1df925b9ab3b6c209efcc5512686275"],["/categories/iOS/page/7/index.html","d3aa8ff6a0b92e450dde5d22186084af"],["/categories/iOS/page/8/index.html","8e1bb178eb5f7f42adff2c9d5bb5e5e4"],["/categories/iOS/page/9/index.html","a0f90e623109824affc0b12f9ddf826d"],["/categories/iOS面试题/index.html","e728d7234d3e3ec8206b4d3b233deded"],["/categories/index.html","6520fa2ff9c9181b5581f53bd0f8f886"],["/categories/random/index.html","4a4a4d22fdf3949e61df47fadee3a359"],["/categories/三方类库/index.html","704707f1ff344310766dc25de05f7ab1"],["/categories/函数式编程/index.html","ac0ca153fda4d197befc20f820dcd522"],["/categories/子类化样式/index.html","a7965defaf52d393c8e994abed1492e8"],["/categories/开发技巧/index.html","77c8747cae269304e6edd7fd77abf691"],["/categories/开发记录/index.html","8fe0aa72efcda96e5fca09fb3df3ca53"],["/categories/技术支持/index.html","9ef633239e01bd70d17a8e51777a53df"],["/categories/数据库/index.html","0aa033c759707770da30cf7789c65bd2"],["/categories/架构设计/index.html","e374690c082236fc8b746f7a25c60ded"],["/categories/测试/index.html","1ffa65025f6d3da0ae606febccdc6f79"],["/categories/用户体验/index.html","fd8fbaedb3ef866549ebd3c2f5cc6347"],["/categories/用户协议与隐私政策/index.html","8c77ae5d4fef8ad5923941adb27828e9"],["/categories/设计模式/index.html","ef985e332c0c790a9218f128fc1aa757"],["/categories/设计模式/page/2/index.html","8b10a0da6a463f275b32b4b380d1a732"],["/categories/设计模式/page/3/index.html","bc7985d0729c83b3fffb7633e99015b3"],["/css/main.css","0e825f42c081a24b374e2696a05e86bc"],["/hello-world/index.html","1fa70f73494cc8df8ed01593973e2173"],["/hexo部署失败/index.html","a4ab331cfcaf0c712b0e124faaff44ad"],["/iOS VIPER架构深入实践/index.html","00d034532033f90ea2bed7b2facf7a92"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","ba11ee0f2455eb24262a81ff017174f7"],["/iOS 自定义视图，输入表单和错误提示/index.html","9ca58261768cb813a72f5cebd7c6e39c"],["/iOS如何使用iCloud文档？/index.html","9b4048606ddceabddffb463f97d15df3"],["/iOS子类化样式/index.html","9c3c52bbcc03691073ef2a6bd9fd4bbc"],["/iOS开发记录<一>/index.html","518da858ab88d368d92d765e6f71231c"],["/iOS自动化布局编程/index.html","6e482b921fb73ec871349e467aa8ddde"],["/iOS自定义转场(By Swift)/index.html","9efc6ec343a90c2e7278191fbf6adaaa"],["/iOS项目架构：使用VIPER/index.html","05c42807c401286f403b6c1abda0833d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","acf5e3e2b755a7e8fa1e38dda3e0b8ef"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","6d0133fa9fb81b9d2e1b0ccf759551ca"],["/page/10/index.html","627729c3234ade22752eb4ff2e9a7102"],["/page/11/index.html","46c9dac8bd12549e8babba4c1a2cb6b0"],["/page/12/index.html","21517f57295db18dbb8a4a4a3fa817f1"],["/page/13/index.html","d46879e3f1cefdd7ae44b0a358246d96"],["/page/14/index.html","238d429ee596b83f189d985e8d5e82a1"],["/page/15/index.html","7aba660090b69232f2e6981619efe500"],["/page/16/index.html","90a0a816c7a3a530516de83ffc27c8cf"],["/page/17/index.html","6f03d420e6e6f1bedf0ceb280d2e3b4a"],["/page/2/index.html","7cc86c9b8a6317476abcc38b39f1fe10"],["/page/3/index.html","81fee92392c706aaf14ba0e7caccdfbb"],["/page/4/index.html","301e9179cfc0b51b1059e0a9c96b3456"],["/page/5/index.html","52283a7181c7c6b7c8ae1264868e64c7"],["/page/6/index.html","b33e94ac1c1333e42bbd7c736015ee08"],["/page/7/index.html","335f9d474dc86905e1cebdb7c3f2f3ff"],["/page/8/index.html","46b51982148836dff8feebcd2b8bd122"],["/page/9/index.html","657cf05faee24bcf3e8deae15cfab066"],["/schedule/index.html","8bd4910490a3bbc80271dae72ec938d7"],["/storyAppPrivacy/index.html","a8caaf2397c8a5a2bb4cef169c71ad91"],["/sw-register.js","fe0ccb2c89e1f1dd8c5ae1fda8a9c4e2"],["/tags/Advanced-Classes/index.html","fff368b6094ec27897417247baa45628"],["/tags/Advanced-Swift/index.html","e33abc27bbcabf8f3b388a8e779907d9"],["/tags/Advanced-Swift/page/2/index.html","87dc0b0a24ce4455242d6dcb225277b6"],["/tags/App-Architecture/index.html","60f845ba1ffd30f33b9b2d4553ebdae7"],["/tags/Array/index.html","e8cf1345858456f19e27a18892e3c9cb"],["/tags/Arrays-Dictionaries-Sets/index.html","0e207c09b71d4e37e895808f262b0afd"],["/tags/Authentication/index.html","1b57b00aad084549523ca10a60ec5399"],["/tags/Build-in-Collections/index.html","d35dbd7cceb3290cfb859d7c6b4c52a0"],["/tags/Building-Your-Own-Types/index.html","1764b7d2eacb9786911b3ec3370047c0"],["/tags/CMS/index.html","41189f59d23558c6f8199f3238f1f18c"],["/tags/Classes/index.html","549dafa9a6fc466c8cae442c5bb0576d"],["/tags/Codable-protocol/index.html","32e43b9e52bcd2d232782b00f9163eb2"],["/tags/Collection-Iteration-with-Closures/index.html","e0fdee7756d9c56228ef0ed0a7ed0b0c"],["/tags/Collection-Protocols/index.html","d062fb993f63445e84e9f92446262cce"],["/tags/Collection-Types/index.html","ac8d669aa98ad086421e8fad7b9d301b"],["/tags/Collection/index.html","575c77235dfe5fffa07b1f2dad1f1166"],["/tags/Collections/index.html","2d4a46368376aa7195816d78e06add02"],["/tags/Combine-framework/index.html","41450609682946208725c5822012a8dc"],["/tags/Combine/index.html","41df749462f44d0cf69f9dcc58d925cd"],["/tags/Dependency-Injection/index.html","dde52336c790742094d53e39ae901b91"],["/tags/Encoding-Decoding-Types/index.html","2edb9e7f4a623ad6ace1c83ec530782f"],["/tags/Encoding-and-Decoding/index.html","e89b85355197d4df8b6f6fa1cb0751b3"],["/tags/Enumerations/index.html","a750f4daa7d9c01ec58e5cdb55632228"],["/tags/Enums/index.html","da6b3088fce06a7f0e420179e8d18dc4"],["/tags/Error-Handling/index.html","93c19aff72271dcebefd4edd3db50fea"],["/tags/Functions/index.html","a1baf973908f2d778b03c8aeb15c7535"],["/tags/GRDB/index.html","2a491dd43501a20f52b1777f05f2c616"],["/tags/Generics/index.html","d75d660e659df3cb0d68c2a1a295930a"],["/tags/Go/index.html","cfd2fe9ef6b7e67d0ae93574745f413f"],["/tags/Grand-Central-Dispatch/index.html","e54242a52bba2dcebc332a4acee76389"],["/tags/Hello-Vapor/index.html","c10c865679f908dc06e883a2d6383039"],["/tags/Homebrew/index.html","b1ece5a69f111ce399c13d4656b6486f"],["/tags/Interoperability/index.html","fadd97ac5131da9cf4f324a6851b85eb"],["/tags/Introduction/index.html","325e71e5c1568fd90f1011bf4e7b69c5"],["/tags/Leaf/index.html","e7501f95d89c3ff1b44f87b151781e62"],["/tags/Linux/index.html","b38dcb986bb3047b9162af24811b3f4c"],["/tags/Methods/index.html","200064becbf36dd3e6d4f214616403fe"],["/tags/Modules-And-Hooks/index.html","86623d9e20e5de625ca5393602686e55"],["/tags/MySQL/index.html","52a202f91111d218de89c52253469e71"],["/tags/Optionals/index.html","019a8d3dc84a9338e8c432f09f97cd90"],["/tags/Promises/index.html","4eec2ea9608fc04870e70676254ccb81"],["/tags/Properties/index.html","182785624df17dd3a8124e7642c1a05f"],["/tags/Protocols/index.html","c7a144ad94c6110b3b06341b83203fab"],["/tags/Result-Type/index.html","80c9fcc9fc9a1de372aac61b01cab7fd"],["/tags/RxSwift/index.html","e6ea75b186d53675386a775133dfb4be"],["/tags/Server/index.html","2f3ad9d2e954d7bc351a2e5bc75456e6"],["/tags/Session/index.html","f6cb66289d8dc5f8f8c59900560e834f"],["/tags/Sqlite/index.html","8cc11dfa298207d9538025cb86e54a08"],["/tags/Strings/index.html","238f0baad104347f8b6c30ee25afbb6f"],["/tags/Structs-and-Classes/index.html","b4ef339935cddfffcfb4497a8e536259"],["/tags/Structures/index.html","8bed0d6487957eb99917ca3eef231873"],["/tags/Swift-5-0/index.html","dde969a1251522e6846587fc82e06b64"],["/tags/Swift-5-0/page/2/index.html","8c6c06b8f8a288c80afaab324446a0e8"],["/tags/Swift-5-0/page/3/index.html","4379c751f0015262d94f566eefd52cfc"],["/tags/Swift-5-0/page/4/index.html","a83f34ef3d6329db3b4161de302ddcee"],["/tags/Swift-5-0/page/5/index.html","76d7d30d2196cb94250f94fa775b87fe"],["/tags/Swift-Apprentice/index.html","01d061e6798ab6b41d27586e8f7a2931"],["/tags/Swift-Apprentice/page/2/index.html","b6a247329089b84142e83592682cc1c0"],["/tags/Swift-Apprentice/page/3/index.html","61fcb41b4c0e00c07e3a2c75b5cc8d5a"],["/tags/Swift-Package-Manager/index.html","f706f5a0ea1d64cd55f5a04a939a2bea"],["/tags/Swift-源码阅读/index.html","e235fff75a52a03d0f58a779014fd48c"],["/tags/Swift/index.html","3956820cdc9d22b8ffeaef54949ce90f"],["/tags/Swift/page/10/index.html","b3493b4abc3bd4cf41517899e1d1241a"],["/tags/Swift/page/11/index.html","a4909f2e42ff0f7d50e8b4f33e25c4c8"],["/tags/Swift/page/12/index.html","ff6e9798876b6359b1c9eeb0c3e5aa72"],["/tags/Swift/page/13/index.html","30ce9de76c3389dd869a249b756c707f"],["/tags/Swift/page/14/index.html","08718b30b4c03b3468ae06c41ac6d190"],["/tags/Swift/page/2/index.html","e08c1855e480512323063bac3d107054"],["/tags/Swift/page/3/index.html","102348219439762e5a712d892e3df624"],["/tags/Swift/page/4/index.html","e22e013716cad9701f99f193b23b7d1e"],["/tags/Swift/page/5/index.html","35c7932a798240f78ad9ac1a87fa36f8"],["/tags/Swift/page/6/index.html","aee1dd97d11ec84ba86bcb6ed1013d4f"],["/tags/Swift/page/7/index.html","faad06cdaba3c9da08e3b28ab68ef348"],["/tags/Swift/page/8/index.html","a044ee75ba23569d842de4b802c819d6"],["/tags/Swift/page/9/index.html","d819c7bdf2b19a1c436f2e06a316cff5"],["/tags/SwiftLint/index.html","ea2a26e65a5451d93efaaa269b2f1630"],["/tags/SwiftUI/index.html","38b28cb2b9fbc41ba8517e839a5fd160"],["/tags/UICollectionView/index.html","d5c45f0722d1cdfb7b185788066f759d"],["/tags/UIColor/index.html","22ee639d10864fc812f12abd332dc05c"],["/tags/UIImagePickerController/index.html","f6ec6a75a7711c06b90face5d31ba099"],["/tags/UIKit/index.html","9810e4fdf66c1d64f335abc26df96763"],["/tags/UIKit/page/2/index.html","6684f744d3e8e3e801170728badd91fe"],["/tags/UIKit/page/3/index.html","fbee09a42cd1a4f69d196c3785d7727c"],["/tags/UIKit/page/4/index.html","4a2e4d5c55fe15884baea912b5fd51e8"],["/tags/UIKit/page/5/index.html","16bf3da5d861b36c2aea79016425d1b4"],["/tags/UITableView/index.html","c9d558608dd6f5b9a4c017ccbd87841c"],["/tags/Ubuntu/index.html","db05d04792860d5f97d4dd4e3a16b61b"],["/tags/Uniquely-identifying-views/index.html","e31b788c18e826377629d9526ca2f90f"],["/tags/VIPER/index.html","7d6ca7c350ec34d2d5444f925725aa31"],["/tags/VMware/index.html","38ea6ee7b5f32e5bf23ecc1302b8fd77"],["/tags/Vapor-4-0/index.html","5fa11d030f07c4848c1eb1217367c18f"],["/tags/Vapor-初探/index.html","6ce3ba31b1ab6cb8c2351e34255d7b81"],["/tags/Vim/index.html","0f7d8800de7ef1868fdf20f9784013b7"],["/tags/WKWebView/index.html","27e745e565bf1a722e7a505c4f41c7e4"],["/tags/Xcode/index.html","ef7ce20a369e5b7c9b37eb8debef9f37"],["/tags/appleOS-Networking/index.html","413ed866c98579388be99cdf1f464c34"],["/tags/bugly/index.html","dc12eee5943363907241cd1c60715d6d"],["/tags/enum/index.html","24feba9feb2718b901473ff923f96b71"],["/tags/git/index.html","c0a8a06c68bc08ed1df4ece224c85212"],["/tags/hexo/index.html","958f1d95c72e6f877634649ad80d5837"],["/tags/iCloud/index.html","45f56025d455ff7cd70f34d493efe313"],["/tags/iOS/index.html","25b04f5bf88478171ca8779d2214ab91"],["/tags/iOS/page/10/index.html","77e5982b06279c8aa178f0e368f0aec0"],["/tags/iOS/page/11/index.html","f1ffeb5f1fbcc6cecd2c20ba09efcdf7"],["/tags/iOS/page/12/index.html","548b7453772dc1471e3ea5d42ffd0fd9"],["/tags/iOS/page/13/index.html","3fa8f8a87790c145ab572b6a831bb617"],["/tags/iOS/page/14/index.html","0e15cddede5dfa032befb843ca7417fc"],["/tags/iOS/page/2/index.html","f61ef97304e32ce9b971e97cad5ce093"],["/tags/iOS/page/3/index.html","8858135902acb423a7ddde8f7646e412"],["/tags/iOS/page/4/index.html","b8992319a6dd2e91e43b44bc5d4a69a5"],["/tags/iOS/page/5/index.html","f45c33b7d0a8b6c4b856ed36c3d5ed2f"],["/tags/iOS/page/6/index.html","25e87014180114672c8aca21bc02f3f5"],["/tags/iOS/page/7/index.html","ee43fc0ae932ade75b36794d5f51f469"],["/tags/iOS/page/8/index.html","7302077b86343c9f043eab675bae67b1"],["/tags/iOS/page/9/index.html","bcb5fd0b324f25cff825df21bd7e8600"],["/tags/iOS面试题/index.html","cfd32e776984db12dcc107163e00ffe3"],["/tags/index.html","322c951b1a21c37af3db9ce1112bfb1c"],["/tags/non-optional/index.html","9cf1f98aaec95abccf3299f6ec6fd0b3"],["/tags/random/index.html","e8a457f4c96dc04bba2126ae9bbbfd39"],["/tags/transition/index.html","3bf4410285ac14def70e61ba79651361"],["/tags/三方类库/index.html","040ac45cb4eb91594837430a560fa728"],["/tags/依赖注入设计模式/index.html","1e9408edae8890ebf20b627f1af304d8"],["/tags/值类型和值语义/index.html","1dd1dc0787732d5c9ade14943b75f782"],["/tags/内存管理/index.html","e32e1d9be4de975eaa411be93dcb3b66"],["/tags/冒烟测试与回归测试/index.html","8b5d74c0be10a9c39dd4b36a5bc07207"],["/tags/函数式编程/index.html","13f4614c54b7ee2d75b66b89b155dd5c"],["/tags/创建博客数据库/index.html","118a066c7b44dd215b044fa1992e5d56"],["/tags/初始化模式/index.html","8f914fa56631edcc0f9cedeac0b0c929"],["/tags/单例模式/index.html","7627e04d21430eaea59e451e40b63c23"],["/tags/原型设计模式/index.html","68450302f5452c762dc2a62396e3a4f4"],["/tags/命令设计模式/index.html","c327477c7567797adf22fa9519ca53f6"],["/tags/基本控制流/index.html","2e504418cf5b1dd2ae75ec4ff7f32b48"],["/tags/外观设计模式/index.html","2308873b10fa58c8e5f204c62ad37cd0"],["/tags/委托设计模式/index.html","f7528c3351a6db2773f561fa515183cd"],["/tags/子类化样式/index.html","63dc809f6dc6b1e21256842df06199fe"],["/tags/对象池设计模式/index.html","3e8e9ea76e36e4cbeab9b797c11292ea"],["/tags/工厂方法设计模式/index.html","5e77305d32906528f8c19ae62c9da11d"],["/tags/工厂模式/index.html","9b77f420fa98d9dc74ef7dcb79f9e13e"],["/tags/工厂设计模式/index.html","94a5351e4382bf76f83d1e720e32e02e"],["/tags/开发技巧/index.html","cdc5b8db8ab95111f16b38f3caa40559"],["/tags/开发记录/index.html","e07fcdf988b6511e45357736c5cf48ab"],["/tags/懒加载模式/index.html","e89c78a3ad4719fa58af999be9719447"],["/tags/技术支持/index.html","9bbfe5108cc114b8564f057e52552ac9"],["/tags/抽象工厂设计模式/index.html","50a6d5ce84926674a7bc91d1a2283738"],["/tags/数据库/index.html","a0715c2d982ca825763be81862974cc5"],["/tags/构造函数/index.html","cd62f8cd5f848e01e8624554ba2c79bc"],["/tags/架构设计/index.html","fd8a4fc5e0496eaa4dab01a9587f3106"],["/tags/模式匹配/index.html","cf1534bb6f3be04848c4e190c55085ca"],["/tags/生成器模式/index.html","b0874f797e38ca294f534eee9db4cd87"],["/tags/用户体验/index.html","a3aef4bb813bca5ef3050afea01a1ad7"],["/tags/用户协议与隐私政策/index.html","d30ab1b8732e406d40b5d02f47a150e7"],["/tags/类型与操作/index.html","f132c92a254419b4a20d90fe1205932b"],["/tags/自动化布局/index.html","abb37d32f115fac081112f2ade94bc2f"],["/tags/自定义UIView/index.html","fcd7f761d67e3d5bf0de14a82c50a422"],["/tags/自定义转场/index.html","70dff6ab3c47a8577a9b5ba9e366041d"],["/tags/自适应布局/index.html","312a5bf26295446f96f1812f4a102017"],["/tags/表达式、变量和常量/index.html","d9ed7c088ed53f9d24a911ebbf8179fa"],["/tags/设计模式/index.html","c5c5b4419fb83958d88ce0b572bbfa53"],["/tags/设计模式/page/2/index.html","582f95243d3ed420562882fe66712f5c"],["/tags/设计模式/page/3/index.html","52938b1c0a6961b9266aaf2e13226f46"],["/tags/访问控制和代码组织/index.html","24791918b0fd43fcabc56d9a5b34c693"],["/tags/运算符，下标和键路径/index.html","0fcb9d46ff8148c68d7f1c93a1f3f323"],["/tags/迭代器设计模式/index.html","6c7cc4d9813de1839159e13f3a5ab462"],["/tags/适配器设计模式/index.html","8ad49f619b5317f53b077ebb38881496"],["/tags/错误处理/index.html","791d255ee800a10a579ca80987d9c223"],["/tags/静态工厂方法/index.html","bd8faadba30a6a8fb6e116d1b229180c"],["/tags/面向协议编程-OOP/index.html","2a9f12f300557723277cf2ff53b63f78"],["/tags/高级主题/index.html","ed88099d1d24f4f8f38e7a45c8a31b3f"],["/tags/高级协议和泛型/index.html","46435877745fe47288efef3042360ed3"],["/tags/高级控制流/index.html","2507a721dcd2202f8c107f6765fa7af0"],["/xcode 常用的快捷键/index.html","315171c7d399957839291a315bef7962"],["/为iOS应用构建输入表单/index.html","8276c29f5e269444ff84a8abc81c3ba6"],["/产品开发的幕后花絮/index.html","ac3f69cea84c9cbacef67aba35dcb427"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","095525405acaca053b297f235fcff192"],["/冒烟测试与回归测试/index.html","91b04ba775483c00649742c774db6c22"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","aa707f80e36940f3604035af978eea45"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d5d7233debbe9c491e93fca0a7566754"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c3f124cd2befac0db76baf8be4de7f9e"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d60e0f2bcde60bc5f1fbf02604cae6be"],["/在Swift中创建自定义集合/index.html","4c0632a75e7bc6d35ee4d71d07a499bf"],["/在Swift中处理非可选选项/index.html","761fddab455abbaa2668f786fcae9594"],["/在Swift中生成随机数/index.html","03751c9befaeee4562ede464b88b5ad5"],["/在Swift中重构单例模式用法/index.html","7239cf0690894e0069ec1652f0372ae4"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","28c25b91e72279341f604ac715c44031"],["/如何为VIPER编写服务？/index.html","9f7d82a504c96285e68e6dadeb3e7f2f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","68d2307891498f737cd3d0940178789c"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","53042ce489a6580b2dfb251f50b0b769"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","62015c74fc651f497739ae3977df5212"],["/如何使用VIPER构建SwiftUI Apps？/index.html","2259b416874d13f5f7d27c64d8edd970"],["/掌握VIPER架构/index.html","72f36594cee08d7a1c996e9e214df7e8"],["/揭秘 WordPress Hook 系统/index.html","7cb9ddce5496471f4533b39f6f153fb8"],["/比较工厂设计模式/index.html","b1bf403ceee506c91af06025176cf05a"],["/深入了解Swift中的Grand Central Dispatch/index.html","1df82bfdea132c92c733b0dcbbb5782f"],["/深入研究Swift框架/index.html","19541a8aca463bd17d37836453356708"],["/美豫直聘技术支持/index.html","3869c520ef467d65dbdb03a974297c85"],["/美豫直聘用户协议与隐私政策/index.html","4e9c7646481d23752aa64ea0029ee163"],["/适用于iOS开发人员的VIPER最佳实践/index.html","0f86770bcd533d6007f577bc2af20e6e"],["/选择Swift而不是Objective-C的5个理由/index.html","b7406c13a8b71cf19f962265e889202a"]];
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
