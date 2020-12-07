/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","a356b3a6770635580c48fccd3f18c442"],["/2020年iOS面试题总结(三)/index.html","af6d3073ea2deaffcf792279be728825"],["/2020年iOS面试题总结(二)/index.html","dab808bf538bfadd763467217938391b"],["/Advanced Swift系列(一): Swift 简介/index.html","c4178f4b115512e2ad6b31e60bb0148b"],["/Advanced Swift系列(七): Strings/index.html","55dcbd404915f6d52485229c38144f93"],["/Advanced Swift系列(三):  Optionals/index.html","bde50b5ba4d8730dfae346d3ee5c5e97"],["/Advanced Swift系列(九): Protocols/index.html","e3f2d228aa3535dceb4a5467698aa951"],["/Advanced Swift系列(二): Build-in Collections/index.html","45955636e42d088d52f8829918560d4b"],["/Advanced Swift系列(五): Structs and Classes/index.html","42dc51ea9bc09951eb20982c6cdc89aa"],["/Advanced Swift系列(八): Generics/index.html","e9fdcfbeccb94b08575c77f605f0a715"],["/Advanced Swift系列(六):  Enums/index.html","fcc07373fdb85f86ba61006b24375020"],["/Advanced Swift系列(十): Collection Protocols/index.html","96d56941db9756c45e28192b2584fcad"],["/Advanced Swift系列(十一): Error Handling/index.html","dd1bc42a5c79e8b87d3e0abc7f87fda8"],["/Advanced Swift系列(十三): Interoperability/index.html","0259fd4ba107e64ef8466b268f9b1b68"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","bcf9d2f00f44ec0ea7f682c37ce26715"],["/Advanced Swift系列(四):  Functions/index.html","69154bdd02b8733ffc4c75f5c860e80f"],["/App Architecture系列(一):  简介/index.html","1997c698a29bdb13a94114a428a8ba25"],["/Functional Swift 初探/index.html","cbc0622df766d24adb31cab4f3ee6eb4"],["/Git 使用小技巧/index.html","52b2fc294801b16f689a5a449069e4cb"],["/Go 基本语法初探(一)/index.html","f04718d570511c8303d1e1e8696bde9d"],["/NSCODER和SWIFT初始化/index.html","103deea3c76dba9132600518daa9a756"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","bbf42cf5b919c51c9f29460852c9cf61"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","f21d4d27a9cfc6cda92903208f7a037a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","14feaedbbdb97656c1e4ed4e90180a7b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d347c1020e0d320848ce3767778e274d"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","7c3e4ee4a6b4b99e0022ad71753e4875"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","68662db57cb83e9c4cbe413cc29fda73"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","33b36e72689139c82ca538ca446c392d"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","1b126610e3ed26a04cc37c00c8b495b6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b23630287b19df937f11d37219c022c3"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c02b779b51b6058a08a95f657a65686c"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","a43137b7b9f8c2373d0fa4c6594fb81a"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","dfd0080712f31c604815f9f00484f549"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","1f1c58caa1d6d5db979384b745df6bf5"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","2ec416fcd6cc7dfd461ba1a6e9530aed"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","2cf67beeeafc269776c1b086c94d9149"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","bada34a35dcf87fc2e680ae84cb09ed7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","c4c6074dd847750c20eec391bb8cf9b4"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","a2050d20dd192ff12a9b2a93bc84c89a"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","db1328b1ccb4d212b669787dfb70fe71"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","788f334730a6a07215406d603eba4b27"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","5c5faabb131ac6e7536a7afc6588ba3c"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","29b94a54bb7cf485c3f081b0b7214a33"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d74cad136e2c18d83e7f812f8412bf3a"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","481742bdb750d920e067d2d0de31e793"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","6f8ef5ed160901270fd886e1a82c2845"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","95099ace439e19ba4bf9a33b31f92184"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","80812ca30665afec8ba5f8c7fdf89798"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6013f39b45a9b649345da3e552e282b7"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","76eb006c66861ad53775a411e6fefad4"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","23b0f6ff6012aa87a5e87a277e73627b"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","70d8f206d9e0a6fb93c2894bf42781df"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","efdce1bb66f18ccdd8af5be609267d60"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","cc54c1cdf56d1a1fc8c1e2bad7169fe0"],["/Swift CompactMap vs flatMap：差异说明/index.html","c05d4a5010f4832da60856578101d234"],["/Swift Grand Central Dispatch 深入实践/index.html","d185701f5b10b59e4e8d2651386a9633"],["/Swift Lazy属性初始化/index.html","acf46ace688b111a772f3264e0e2fd3a"],["/Swift Promises 初体验/index.html","d7023a8ae326bffc9a8e4637c792dd84"],["/Swift Promises 探究/index.html","4461eb2404e986858023d747f067653e"],["/Swift UICollectionView使用指南/index.html","25e799b8693545321b772aa44c716f33"],["/Swift URLSession && Combine framework/index.html","df5001fd99314a31ab16fe13ecf62b9f"],["/Swift 唯一识别的视图/index.html","0103b636dcae9fb1e3e7b9a7f9735203"],["/Swift 如何学习现代UIKit？/index.html","6263db8d30dc1d8eada40ecbc8dd6c06"],["/Swift 用 compactMap 替换 flatMap/index.html","ec9e37e4b78e13717e871956b98c72aa"],["/Swift 选择和播放视频/index.html","891102a72dd0b98dbfda01bf7d380065"],["/Swift中UIColor最佳实践/index.html","d46c016217fef53fc49c35246b55cfdb"],["/Swift中快速简单的工厂设计模式/index.html","d1ab8dfdfc68be007f6a314888c7f802"],["/Swift中构造函数与静态工厂方法的比较/index.html","711ce34048acc2ca304dadd52ad69103"],["/Swift中的UITableView教程/index.html","3c8865ffe34f5de7a17b004f613b4d8f"],["/Swift中的懒加载模式/index.html","cb612cf2cb2b0d7d64f554dd209c48bc"],["/Swift中的模块和挂钩/index.html","a1ca33b1f19ef2f708701e4d3440c38f"],["/Swift使用布局锚点添加约束/index.html","0c5f52c991f6c47b68850f40ae16b98f"],["/Swift依赖注入设计模式/index.html","27a5311a6455be87df95387a60a1240d"],["/Swift关于Dependency Injection (DI)/index.html","7236d41e97b254cdffb860d5b778e9cc"],["/Swift初始化模式/index.html","8cbe3a8d44779f7a4de6b4a9b69e8b46"],["/Swift单例模式/index.html","76afd2308bd47a8635957f75a2ccf15f"],["/Swift原型设计模式/index.html","c169a21f13e99737ab9fcf2bc8598adc"],["/Swift命令设计模式/index.html","01b3b92cfffa932e04f40bca68ae8a16"],["/Swift外观设计模式/index.html","bdda9758213257aa411b2f5399e8e3dc"],["/Swift委托设计模式/index.html","839a7bb1ad67b6a8ff9203b12f426ecf"],["/Swift对象池设计模式/index.html","bdf7bba7ce3f677782ca696cdbb962bf"],["/Swift工厂方法设计模式/index.html","03ee0cfa0a27a7a9664739655a4ba9ff"],["/Swift带闭包的懒惰初始化/index.html","684102b33e961b7177b42bcd1818108f"],["/Swift抽象工厂设计模式/index.html","6696ac808088828a86aa7581bca8dd33"],["/Swift掌握iOS自动布局锚点/index.html","1eca55e0c69c23b40811eb280ae0fdfe"],["/Swift支持旋转的自适应单元格/index.html","f6d56c9ed09b9f1952019de00a4eccb9"],["/Swift枚举值/index.html","3206975e832096ea50b1065b791ee1a6"],["/Swift生成器模式/index.html","3db394984a26efe9f94144bc82937f03"],["/Swift结合Xib文件自定义UIView/index.html","b4f73ac238c42e8a44c6d43be1e9cd7c"],["/Swift编写的20个iOS库(一)/index.html","f3afcf42c7c33b5a7ea15e6ee7f43e45"],["/Swift迭代器设计模式/index.html","ba928313cfad1789e9ed8177e46d8dba"],["/Swift适配器设计模式/index.html","4fd8069893d48eb39bf2cabcdfb360f5"],["/Swift静态工厂设计模式/index.html","2b609eaec1c230471530c6744976fd77"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b1f8744008a5e5ea72f3c1c15af90dfa"],["/UICollectionView data source and delegates/index.html","349907d2c6c56934ba751000f0cd1f56"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","0a5f653f04ce9a9d6dae64ee48b4951a"],["/UIKit初始化模式/index.html","d2128c3e1ec0e224fa88a23ac44c2dbd"],["/Ubuntu18.04替换国内源/index.html","de1ed49ee899dd0fea088f211ad03f0f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","969c9580b6cf7d053a1c28fa76f079ac"],["/Vapor系列 (一) :  Vapor 初探/index.html","29329abefd0330179eb52e7e56556fa1"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","81d7077e99db93cbdede01dbebece73c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","ee5698cecf1b637238566ea37e8b1e69"],["/Vapor系列 (五) :  使用session进行authentication/index.html","3ca400c4ab83035e103bbb0f8f26fdbc"],["/Vapor系列 (四) :  创建博客数据库/index.html","e8804c92425c987862b8430c0890ddb0"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f16f37e418fc389a0901e4df1c344d1b"],["/Xcode扩展/index.html","d5e03a951392650204a1d03661ff69e8"],["/about/index.html","724f05017a9fb7d87d5790025fc0c331"],["/appleOS的Networking示例/index.html","962383a07c5826028f8d770811198316"],["/archives/2020/03/index.html","3f1e170f3857b2083d3542dec48be215"],["/archives/2020/04/index.html","518087beb21d4d7c00ecdfcb20bebd7f"],["/archives/2020/04/page/2/index.html","9eda2cf1338aaf3b847615d5b6fc56f1"],["/archives/2020/04/page/3/index.html","53c455ee26cbb3669cebe30c77b74664"],["/archives/2020/04/page/4/index.html","ea880b144824714c16ca0d9c092c0421"],["/archives/2020/04/page/5/index.html","17dfa12015fdbfe119e51e41259783cc"],["/archives/2020/04/page/6/index.html","becad847f337fbd40d17f19c69a7e524"],["/archives/2020/04/page/7/index.html","56373bcf1bec20585f711db53550fd2d"],["/archives/2020/04/page/8/index.html","9341ca433cccf84c4cb6c732ad5adf96"],["/archives/2020/05/index.html","2a6ee2f02dea923157a714e303843328"],["/archives/2020/05/page/2/index.html","7700db52e53a788c1b0d62e1774985e2"],["/archives/2020/05/page/3/index.html","7450cdf33cf17b85be6abcbd81d59919"],["/archives/2020/05/page/4/index.html","1df175435c2d3b2372bf58aae31c1751"],["/archives/2020/05/page/5/index.html","338780a2710c2c15e946b07cc7cd3989"],["/archives/2020/06/index.html","9c7107afeea9e70d97cc5b7793ba0b7d"],["/archives/2020/06/page/2/index.html","7c9ab3da5825619d226c0aebdb8d5db0"],["/archives/2020/08/index.html","371d1b31ce60d6c81df889ae239c1faa"],["/archives/2020/09/index.html","c6c627e446b9a8f45ea770651d60101c"],["/archives/2020/10/index.html","ce3eef218d8b79c0a28eddf25c9a0290"],["/archives/2020/11/index.html","aa37e6fa2e0ea0f4669619efc182b893"],["/archives/2020/index.html","42ed3c9ff8e606ff59d3f6261c866434"],["/archives/2020/page/10/index.html","a0b0b076e9489b32cadae9dd934c8268"],["/archives/2020/page/11/index.html","ae3d41b579e5e0665c80eb97f502f12c"],["/archives/2020/page/12/index.html","12a86977fb2817e54c28f5e6c8b4dceb"],["/archives/2020/page/13/index.html","f89a8fd53c40a24b10783b9da9a2478e"],["/archives/2020/page/14/index.html","99cb0142e162e5e7e00947a778b5b7d2"],["/archives/2020/page/15/index.html","45e274e1a3c19d055542c25893466545"],["/archives/2020/page/2/index.html","dcbbefeaceed2f3eb3433139d46e4011"],["/archives/2020/page/3/index.html","a1079fe57f51294bedecb6d66dd8a019"],["/archives/2020/page/4/index.html","74ba99bf6de5c09c6e099686ab4962b8"],["/archives/2020/page/5/index.html","ad77fcc4bf0f378f10e6dc71ca62c7ca"],["/archives/2020/page/6/index.html","dc931e082b43a1bb8dd1a1504336e65f"],["/archives/2020/page/7/index.html","21f72ead0f353a2b1673f22a3070aa37"],["/archives/2020/page/8/index.html","baf4a119d5e32f0bdfa53ab5b11a4599"],["/archives/2020/page/9/index.html","8de30f8ac5c0af07bf40e74580c420c8"],["/archives/index.html","de06e952cf14c6d1bb74b2aba8de151b"],["/archives/page/10/index.html","90febfcdc3a83f491c740e331efc302c"],["/archives/page/11/index.html","f8a751c4fb3f71c565ba4ddcd4bb8915"],["/archives/page/12/index.html","b210386f0b7d4d25b4369b0368ea43f2"],["/archives/page/13/index.html","518303141c5ab780d1ce480cc689a555"],["/archives/page/14/index.html","7ec68a6c097dcb70541d85733ed64c98"],["/archives/page/15/index.html","12d1f3eaba794c9244284b670be34276"],["/archives/page/2/index.html","e6a89069dd39cbffdb61a50d3b050461"],["/archives/page/3/index.html","7eff8c4b5651cfafe85d9cb90bb30438"],["/archives/page/4/index.html","76567c8c283cc4ac890fb7b9fdc35774"],["/archives/page/5/index.html","05a56578deea13534b69360bb3ee1900"],["/archives/page/6/index.html","207399773752140ccb593eb551d977ba"],["/archives/page/7/index.html","4f7ab19103efca1191251b875491b99c"],["/archives/page/8/index.html","a11c4de51d0cc7a1581572fe59ae3ee5"],["/archives/page/9/index.html","b38b782e9dee8a7e5cdda4373f27df8c"],["/bugly 上传dYSM文件小记/index.html","d3d4e7348953729a8c25b376fa976845"],["/categories/Advanced-Swift/index.html","8fd5fed045d51dbb2ed30b8c60ced08f"],["/categories/Advanced-Swift/page/2/index.html","9cbe6ce0425984da284a147c361aaa39"],["/categories/App-Architecture/index.html","51042279962c9b46e16302270a77731d"],["/categories/Codable-protocol/index.html","fbae38e19dde2e00a1ce2fef952a9cb2"],["/categories/Combine-framework/index.html","a4693c2d77a85339410280cfbb05e4ed"],["/categories/Combine/index.html","526f2b020136fab2e334977760f994d2"],["/categories/Go/index.html","5025b98e89b6a5154744e79ca60598df"],["/categories/Grand-Central-Dispatch/index.html","e3dcb8677fb50eb0d56b1b1531cd7523"],["/categories/Hexo/index.html","ad50e01bcd887772fb51c7f16ba7749b"],["/categories/Promises/index.html","aa63cfbd927eeb72b45948e818e629d9"],["/categories/Result-Type/index.html","b2fb7867c19f5980c045d47ddb76334b"],["/categories/RxSwift/index.html","b2ce5fbb5a6faffa6d07d1d00f3a8584"],["/categories/Server/index.html","1e440ba51c362d7e4a9a54f7f216c5a6"],["/categories/Swift-Apprentice/index.html","3ec0912692f42b00791a74d66e4a9302"],["/categories/Swift-Apprentice/page/2/index.html","49b666e35ee400116dc1e54a450f6372"],["/categories/Swift-Apprentice/page/3/index.html","6dc2fcfe337f1c4e0ea591edc69d1a9d"],["/categories/Swift/index.html","58fa3b89607f7d34e39e0c906a8ed24f"],["/categories/Swift/page/10/index.html","87dde0e63ea32afcc7d4b2684881c01d"],["/categories/Swift/page/11/index.html","e4c09e666a71bd7619c1455b0cd2d287"],["/categories/Swift/page/12/index.html","cf6bf2f68e09b0c0387844bb964dde32"],["/categories/Swift/page/13/index.html","331597521f4cbf506533c0593a5f98f6"],["/categories/Swift/page/2/index.html","6fcd37b2e026896952c2e7b5ce7b697e"],["/categories/Swift/page/3/index.html","05a015cc84e2f6ea39deb5e05511056e"],["/categories/Swift/page/4/index.html","6277bb25f975f63a8f33731c92ff73e1"],["/categories/Swift/page/5/index.html","aac703d180f706f6ec2bb349b376c53f"],["/categories/Swift/page/6/index.html","e96a2fc6123d37b47a92b90ee2524726"],["/categories/Swift/page/7/index.html","0e8054ca285afcb1fd070ad476a09cc8"],["/categories/Swift/page/8/index.html","be4ae5d6a3038330e0be2b3c76ad068f"],["/categories/Swift/page/9/index.html","91c00540945e34e294297356a3ed27cd"],["/categories/Swift5-2/index.html","d0c8919d4263290b99efffdbf6aa78fd"],["/categories/SwiftUI/index.html","63eaeb6df3039819f10c14fac96e0c29"],["/categories/UICollectionView/index.html","1ebbc182f52edb953378a7a41aa7d459"],["/categories/UIImagePickerController/index.html","e4b465fbe41cabae1d2cd55bbd192996"],["/categories/UIKit/index.html","b3b8f47503d66cbf77b73f8e864159c4"],["/categories/UIKit/page/2/index.html","2768e1edc1b01004b71f587488f14869"],["/categories/UIKit/page/3/index.html","caad98aedd76658fe8c4bad58fd7f557"],["/categories/UIKit/page/4/index.html","dbc4af4da92c415c62cc91fb9424573f"],["/categories/UIKit/page/5/index.html","e7dbb02a5a921c7d5c11d6996729a33f"],["/categories/UITableView/index.html","8330e41678186d2bfbda9defb1ec73b2"],["/categories/Ubuntu18-04/index.html","844a53ddfe227b6023cfdd93d0c0e87b"],["/categories/Ubuntu软件源/index.html","1f97e75c0e5259f5822d28ab917159c3"],["/categories/Uniquely-identifying-views/index.html","42eb1b702003922f9a96539c34c6a4bb"],["/categories/VIPER/index.html","7f728fcc6c0c1c3f1eeb27ca4916cfdf"],["/categories/Vapor-4-0/index.html","4e89aece800513db14d7435d95ad0186"],["/categories/Vapor4-0/index.html","a777b7c4ee42fcee703e327bc7936a91"],["/categories/Xcode/index.html","742350f5850a301f167f2621017fbf0f"],["/categories/appleOS-Networking/index.html","ad0974ad81fb5011bec4c4a17fe4b3dc"],["/categories/bugly/index.html","9d80b380739a321bff98b9ccd4bbc64f"],["/categories/enum/index.html","f91268826a77b720d2e9e3439976e415"],["/categories/git/index.html","dd410f3b86c1f5a9a2190b36647425e2"],["/categories/iCloud/index.html","44195f8cde1ae4f416d21a32da766761"],["/categories/iOS/index.html","d9c228c1f5ee4a27c9289cb264042bff"],["/categories/iOS/page/10/index.html","25765b95b2b3d22e1aa7e0456ae88aef"],["/categories/iOS/page/11/index.html","cedfed4fab6cfc266ff85bae643806f4"],["/categories/iOS/page/12/index.html","46b00c1ead728cbeea7a240411a364b1"],["/categories/iOS/page/13/index.html","b185aa38f9967f2a233f640e3e508c2a"],["/categories/iOS/page/2/index.html","0bc01f4ba42edff9d12070b35d17b054"],["/categories/iOS/page/3/index.html","41621dec2ce2b501b6483a25169ddcb1"],["/categories/iOS/page/4/index.html","7e1f9dc8153787c23f83f570a30508d4"],["/categories/iOS/page/5/index.html","5ec239e03e24cb606d75b9dd61f00cc5"],["/categories/iOS/page/6/index.html","16fd66a8f3cf2ffe55f610866284b03b"],["/categories/iOS/page/7/index.html","5e7418d3528b84f59c4e220ef28e3249"],["/categories/iOS/page/8/index.html","2f0f50d3643d50f3436a00e5db1362c1"],["/categories/iOS/page/9/index.html","82a70e917e909f4ca54ef75453e47055"],["/categories/iOS面试题/index.html","f18a043da8f6c3c79ad5b7e67d67b0a3"],["/categories/index.html","010c79028c4305961fe5cbdc47483348"],["/categories/random/index.html","e36c119b61dd8908b31c864ae9dd212a"],["/categories/三方类库/index.html","f0a7fb5f5fa0a66fbec09c4867cb2cbc"],["/categories/函数式编程/index.html","28b6b67ff009b26c859d63598855f433"],["/categories/子类化样式/index.html","a920c8e3f730cbc0c5d5efe283cf856b"],["/categories/开发记录/index.html","c5cb4666d0ef640802b86b51a217fd4e"],["/categories/技术支持/index.html","1582cd0147c85ca4062290ace49302a5"],["/categories/架构设计/index.html","35f6aa8b5cd0115ab39d9debf2b8095f"],["/categories/测试/index.html","1fb4ea4f2b09a6c79790ea5948c48e0f"],["/categories/用户体验/index.html","d3993d1ce46867b974a5a4e3f650cf56"],["/categories/用户协议与隐私政策/index.html","d1c5215a853773fdae997c33361e3953"],["/categories/设计模式/index.html","1599ca99028e2884e67574cbea7b4496"],["/categories/设计模式/page/2/index.html","4883ecc533d0086cd5bb06d79b85e612"],["/categories/设计模式/page/3/index.html","7d25ae6bc796b0aacba31eb68eba0064"],["/css/main.css","a557ce14593b7f2eb87340a5cefa2ed0"],["/hello-world/index.html","d52556aee3a790219a628f5413dd2323"],["/iOS VIPER架构深入实践/index.html","8508b7463b188d2da75d635f7e4ec897"],["/iOS 自定义视图，输入表单和错误提示/index.html","394ea80e20dde06fc5d17d9264cef447"],["/iOS如何使用iCloud文档？/index.html","945c8f3a143d97324bd755820080ee6d"],["/iOS子类化样式/index.html","a9b4f66b04edd261c858e3b7a3b4eca6"],["/iOS开发记录<一>/index.html","5d5ccc477b2aa0eeb1297d2c21cf9c88"],["/iOS自动化布局编程/index.html","b6ad17cd6d5555a697499fb15a7d4736"],["/iOS自定义转场(By Swift)/index.html","883393b952b732c0767532439cbde2af"],["/iOS项目架构：使用VIPER/index.html","9252933e92e26df5146e104c4b4e9f41"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7f8b079ce66ff2c2895cdb53e69b297a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","596b5761ddc3defb42b325e099974d2a"],["/page/11/index.html","f12d490a857df4090df6e52bec52fef5"],["/page/12/index.html","938fc2d3102bc05ebca5126172942030"],["/page/13/index.html","ab7f7552c2de9d6e6fa5adcf4885dce6"],["/page/14/index.html","7c01b9784c12a1452c782e3fa5f6fdab"],["/page/15/index.html","233480a7af2179ff6f7536ee9222fc3f"],["/page/2/index.html","49f58687d753420778a80819cfbe06e9"],["/page/3/index.html","e090d69b8d359586045bc3670ca0d39c"],["/page/4/index.html","4e2bf1e5f7749ee7d896ab89ccdc3846"],["/page/5/index.html","dc52393ea0cf654399fb754bc9c1fb98"],["/page/6/index.html","6b4265809ee3a582668ca07b08da52f3"],["/page/7/index.html","ad097dcc515485d0929b1ec1ef7c30bb"],["/page/8/index.html","e791c384895c1c049f635b49f81be901"],["/page/9/index.html","f693f509cc87a63c02e3aaf8241591cb"],["/schedule/index.html","1de01f58beaeb74887c637a1c63fa763"],["/storyAppPrivacy/index.html","2be71e32501d8b61b6d838fb94678739"],["/sw-register.js","a0675558c805ceda4c23a68f5a8b32d1"],["/tags/Advanced-Classes/index.html","a9d2418565b4afc831276f515548e4a4"],["/tags/Advanced-Swift/index.html","6396e77f156cf603e135344424f50804"],["/tags/Advanced-Swift/page/2/index.html","1dcf8d42166e3318e59b2d309e6d745b"],["/tags/App-Architecture/index.html","373d9376fa05c7a0b96e0c5a7882bbb7"],["/tags/Arrays-Dictionaries-Sets/index.html","35c6d4aa6eb2c954d1b4294e17e838e0"],["/tags/Authentication/index.html","842bdb361a575c8a9b32376c6c7ff905"],["/tags/Build-in-Collections/index.html","20b97f3643bf63efa306151d4f23608c"],["/tags/Building-Your-Own-Types/index.html","d7f22ef43347d4ec5983c332a320a730"],["/tags/CMS/index.html","3ffb3395fdaccfc11c5456d70df1eb3c"],["/tags/Classes/index.html","c8978bad0166befc25351c4bab17d882"],["/tags/Codable-protocol/index.html","ba67860177e76c24b7311dda2d8926c5"],["/tags/Collection-Iteration-with-Closures/index.html","8d725710c6642b2970b5b7c460425a0e"],["/tags/Collection-Protocols/index.html","f18a68ba6cc9fe992267c22f0157e28e"],["/tags/Collection-Types/index.html","b00a652cfd28f1c9e8a9b7ec1fad2262"],["/tags/Collection/index.html","74095095a360d6217daf4a3968001710"],["/tags/Collections/index.html","ff4b22544d34a05fdaf467c94ee8f9bc"],["/tags/Combine-framework/index.html","e6794651f1998fbcadcda1c3400baa08"],["/tags/Combine/index.html","e03993a699c6f242bec8f77498585aa0"],["/tags/Dependency-Injection/index.html","8389aee3857124aa6aa29a037d08486b"],["/tags/Encoding-Decoding-Types/index.html","8eb194667a7af288695e8cb93ba42139"],["/tags/Encoding-and-Decoding/index.html","8930e17acab2339dd0a14097f65404bb"],["/tags/Enumerations/index.html","a1e3013ded7fc1d37775ae29e1ee9c4a"],["/tags/Enums/index.html","54aa533da3554675e9da2bf24bc4dd3b"],["/tags/Error-Handling/index.html","7b235ae5edbe53318564c4106519d811"],["/tags/Functions/index.html","e625507d218ac05c6b20d2e6a39cb751"],["/tags/Generics/index.html","4314451f1f7523ecfd067dbcdb3339cd"],["/tags/Go/index.html","af8a4093082ab7e6280211502dbaa454"],["/tags/Grand-Central-Dispatch/index.html","250c7bbcb1afda70d3e8abb45f127501"],["/tags/Hello-Vapor/index.html","039acf7589d153a5c44435538d824612"],["/tags/Interoperability/index.html","d3c10ed217530c9946931ce304b55222"],["/tags/Introduction/index.html","7ab8bca40792036932448049ca71d731"],["/tags/Leaf/index.html","d52f85983174fd50ef69953ac42dfffc"],["/tags/Methods/index.html","56a3a0788d9511270bd21de490516c02"],["/tags/Modules-And-Hooks/index.html","0e746f3b007ef44018f62e1c3527d626"],["/tags/Optionals/index.html","5252bce8c0501eab117736642c66428b"],["/tags/Promises/index.html","db4a483995fcabe7b119027de2d76597"],["/tags/Properties/index.html","140574901de035d6dc9d92ff8bfc3331"],["/tags/Protocols/index.html","9fa2136fbf0bb3f182dbaffe533a1832"],["/tags/Result-Type/index.html","b615fa97dccb13684eb0b2fa4d6675ff"],["/tags/RxSwift/index.html","579c5b768bc65ec0cf188827af2f4e2e"],["/tags/Server/index.html","f6add8e4210712153e987cac9a2ef22e"],["/tags/Session/index.html","326892d1b81a51e9945a53953b2330ed"],["/tags/Strings/index.html","31e646e0c12ca8e79ae777641c14247a"],["/tags/Structs-and-Classes/index.html","87839146989b6de19c6aff3e5e4a1ce1"],["/tags/Structures/index.html","2a08034daf41080a7e19e746533c7df3"],["/tags/Swift-5-0/index.html","6d60342bf498ce209a630662938ea01e"],["/tags/Swift-5-0/page/2/index.html","1839f8a619a6c09e7df10662ed13cf1b"],["/tags/Swift-5-0/page/3/index.html","35e0aacdac8fabd916ac1f31bad033a8"],["/tags/Swift-5-0/page/4/index.html","8e4b7405077d6ca807022985fb97e2e5"],["/tags/Swift-5-0/page/5/index.html","61cb2f3539d65acdf2c97c12a8671bc9"],["/tags/Swift-Apprentice/index.html","0c8484eac655d009ffa8d3b62d4e91f9"],["/tags/Swift-Apprentice/page/2/index.html","72c0d43da3c87d17cfaac5fdae93afa0"],["/tags/Swift-Apprentice/page/3/index.html","b25d6ae27b9c2a36b8087179393c9c2c"],["/tags/Swift-Package-Manager/index.html","c3f8411a3a44d25bfd9de9d085a7abbc"],["/tags/Swift/index.html","d0151786829a14d49fb084766ca65681"],["/tags/Swift/page/10/index.html","8ec955976faafed81de2cff35bf5c326"],["/tags/Swift/page/11/index.html","d36bf707f6dc3be4859c58819bdad77d"],["/tags/Swift/page/12/index.html","4bd14612f1bb33a01a97f5906bee9149"],["/tags/Swift/page/13/index.html","f5f04dde8d2d7005f6fc8917826a960c"],["/tags/Swift/page/2/index.html","fa00f1689a2e5bb25573ded449c94cb6"],["/tags/Swift/page/3/index.html","5c882af458ad2341923a1528aaa8e3bb"],["/tags/Swift/page/4/index.html","82e8e87bf5c84f47ce1ca800d602b2de"],["/tags/Swift/page/5/index.html","9d2d5a6cb4200b2f577d9b153c89d79d"],["/tags/Swift/page/6/index.html","2e06f2eeba7771f0f937025c25ef0311"],["/tags/Swift/page/7/index.html","c4c8c7776590107817928f7713bc318d"],["/tags/Swift/page/8/index.html","25bb186e7e78b04a21e9788cac7d0616"],["/tags/Swift/page/9/index.html","5ca5de74e5588efaf429909c9106e757"],["/tags/SwiftUI/index.html","67199a26b4a40f33ad2259e7f7b36fdc"],["/tags/UICollectionView/index.html","2d1234d62c869d4b005fc07b32aac39d"],["/tags/UIColor/index.html","77741d88197ddabf8cf1634a2cb50b27"],["/tags/UIImagePickerController/index.html","c58ad1fa735ca2f162daaed5dbbdd7d6"],["/tags/UIKit/index.html","016673ed09ee897b0201e97e9a4042c9"],["/tags/UIKit/page/2/index.html","6f8dea693f773b7eb2fd64972dc8ed1e"],["/tags/UIKit/page/3/index.html","0f144de922d34a32c54df335e414c035"],["/tags/UIKit/page/4/index.html","68c5a3d774b3d00dfc6f35a9f26280bb"],["/tags/UIKit/page/5/index.html","bc16b02765a1daaf05944638f08d5147"],["/tags/UITableView/index.html","565678f1fbd4c96bf67fead525a1a911"],["/tags/Ubuntu/index.html","5fb498f4d15234da3765402e417dce5b"],["/tags/Uniquely-identifying-views/index.html","0d85e92a08fe98b4bed8c66bb69aac47"],["/tags/VIPER/index.html","72c3020375c354f22dc009396e453c90"],["/tags/VMware/index.html","f2825435a43e6fb2b7f444c89ed564dc"],["/tags/Vapor-4-0/index.html","6967dcc496e16f1d0a3efaaf189934fa"],["/tags/Vapor-初探/index.html","cf7078c44c771d6d9d3a403b2bb57b6c"],["/tags/Xcode/index.html","b5ec387fde760a1f219c9beedd76175d"],["/tags/appleOS-Networking/index.html","b181735f1f83ff3091e39f3e9ad766bf"],["/tags/bugly/index.html","e7d33a8d55ca8b531f232c610f16c717"],["/tags/enum/index.html","16cd8a35436ceee0463ce8899547344b"],["/tags/git/index.html","3c77bbedebf4b8d10be6a38063fe6b09"],["/tags/iCloud/index.html","4d0238f9352718d3680221b09b35eea3"],["/tags/iOS/index.html","76fc1671b464375aac460e28d8220097"],["/tags/iOS/page/10/index.html","af97ce8757edee4e9f08955c0c7dd0f7"],["/tags/iOS/page/11/index.html","d8f7efadfa8ae174ed2994d76944eb51"],["/tags/iOS/page/12/index.html","2e8a1ae57df554d48d9215622f547d10"],["/tags/iOS/page/13/index.html","dd2ef2405b657df50abe3c0c18809a3a"],["/tags/iOS/page/2/index.html","373ace4add6d3f80ca30c033a3e7d94f"],["/tags/iOS/page/3/index.html","52c328ba63f36eb375a76c209b507f6a"],["/tags/iOS/page/4/index.html","3d675ae0874996e1084152a389d1f069"],["/tags/iOS/page/5/index.html","31fe44f24ba05d6bf481be5d62edf17a"],["/tags/iOS/page/6/index.html","8d257eab5a2cc03926892b2605eb7ec7"],["/tags/iOS/page/7/index.html","1cd3bceae4ab35a4eb52e53a246cded6"],["/tags/iOS/page/8/index.html","1704c6367d83afbfe4d33e8ee1a7c4da"],["/tags/iOS/page/9/index.html","f6ed577603ec2763f4baa6eb873c9d6b"],["/tags/iOS面试题/index.html","fcbc18f74023cf59bcffcae1ba993515"],["/tags/index.html","26e3a809d24030db9c6f378bcfe7785d"],["/tags/non-optional/index.html","953c2130d580b59fb2cbb8e487a5b544"],["/tags/random/index.html","015f601a5e3d3c4bcd09e7ed2d24b1e8"],["/tags/transition/index.html","d7543a50b701f77c3862048cd4fc841d"],["/tags/三方类库/index.html","cd12dad1fd29f6a20dc027c7644808bb"],["/tags/依赖注入设计模式/index.html","6abe7ca2fa196a9557680c3baf01b46d"],["/tags/值类型和值语义/index.html","4f97a7faaf44e3d9ff19c06bc404df83"],["/tags/内存管理/index.html","094c4bbaf00eb9ce64b632d1a8f56045"],["/tags/冒烟测试与回归测试/index.html","b5a43e87922140e1bfbc09bf2412c54e"],["/tags/函数式编程/index.html","93efff4a23d965469da1918847ba2356"],["/tags/创建博客数据库/index.html","f37e0cce8ecbcdd892ea5fbfd0c8486a"],["/tags/初始化模式/index.html","ab23a90871277ec632fff74975ef8e15"],["/tags/单例模式/index.html","f29daac3b003699fd0a753d4f721d253"],["/tags/原型设计模式/index.html","354f3086550ef711d42e46b3a25484d6"],["/tags/命令设计模式/index.html","ec8c6ddda4be35d68b48e4aa14d31a19"],["/tags/基本控制流/index.html","5f4ba7615e296d09c80a346a786bee98"],["/tags/外观设计模式/index.html","2500edeaf3e8080c3ef0fbbea783c843"],["/tags/委托设计模式/index.html","c2b1cbe004d46046047fbcae0c3b7fc9"],["/tags/子类化样式/index.html","1b2a1819e163a0af821b46ddf9bccdbd"],["/tags/对象池设计模式/index.html","33d606723ece73a778a8c6c6bb3ca36a"],["/tags/工厂方法设计模式/index.html","3735de1e32e5f4c3243bae449f03e94f"],["/tags/工厂模式/index.html","d1812ff85205152b87a8e179a8be9950"],["/tags/工厂设计模式/index.html","4d1582478c13b8fc902be64498dedb1c"],["/tags/开发记录/index.html","3fbff465b997775499db25a6983b63db"],["/tags/懒加载模式/index.html","469e405c633dfc43358e9c5fb9d4ef14"],["/tags/技术支持/index.html","b3d5eb7e49f55d10ac68da4229f3d70d"],["/tags/抽象工厂设计模式/index.html","2a27fe529e7208e34988d957517b2e0a"],["/tags/构造函数/index.html","08a0145b9ce5c97433c928d5be1837f2"],["/tags/架构设计/index.html","96ac5b1b3fea45cfd910acf67aa5517a"],["/tags/模式匹配/index.html","d48f9767bf5aaf476bc2f20792374e08"],["/tags/生成器模式/index.html","1e596a4abd9159ccd5f78f926e7a5240"],["/tags/用户体验/index.html","a9cdf807035b33df20bec4d54c4a1163"],["/tags/用户协议与隐私政策/index.html","02cf057fe77d436ba921b5deb5fad897"],["/tags/类型与操作/index.html","32a244e205850d5948e4d94cd0eb7f69"],["/tags/自动化布局/index.html","08afcfe9ee20fed177f53f1190ada84f"],["/tags/自定义UIView/index.html","1bea5230ed420cba739ce5ce00221a45"],["/tags/自定义转场/index.html","234c7d95dfb617ca5074547dc6a2a478"],["/tags/自适应布局/index.html","e6e03a56113635fd85b237a7ff230385"],["/tags/表达式、变量和常量/index.html","e2cae37315ad5ac5603f167c15454b5c"],["/tags/设计模式/index.html","e95e26fcdd13abfadc26656ba4a14252"],["/tags/设计模式/page/2/index.html","b5a51774b56386d62b380df5a1ddfd4f"],["/tags/设计模式/page/3/index.html","a318ad4c83c3349571b844fc0d2f6391"],["/tags/访问控制和代码组织/index.html","cfe59b572c415f9e5ed6f9efc8814809"],["/tags/运算符，下标和键路径/index.html","012cb84067f007bdfd5e5061bdeb00bd"],["/tags/迭代器设计模式/index.html","5122265cbaf8df9877845c7f5b2d8ccd"],["/tags/适配器设计模式/index.html","880fffc00c07dba0b20d97db046c1eed"],["/tags/错误处理/index.html","688adbeb2d4e531c0a32a632e4690dc8"],["/tags/静态工厂方法/index.html","753824e25b0762611439d98ee01ec779"],["/tags/面向协议编程-OOP/index.html","49ef3be3fae5e31808f22044c4331f98"],["/tags/高级主题/index.html","b8f763cf23f61a7b3d8dd6fa3ed537c3"],["/tags/高级协议和泛型/index.html","13be3ac500d3ca0636bbca61289b5134"],["/tags/高级控制流/index.html","eca993f5a9e45fe62094207fbb2002e3"],["/为iOS应用构建输入表单/index.html","e3121c24dcd64f1db7052270d789d6a6"],["/产品开发的幕后花絮/index.html","2d736d5fab93b8872f1eb1b438c45b86"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5740217d412b54df74d73bc84b4d7404"],["/冒烟测试与回归测试/index.html","bf94dea4ea90876be5bb3d0334108ec1"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ea57e73df8010340b8165906d05b4429"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","19e9ba52d2ba0328e2604ea2aa061223"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f446ae8c00a7ca8424fe53a6a9f33241"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7df4b8a68272ad38e8a53a90bd6c8a19"],["/在Swift中创建自定义集合/index.html","422850b93565c01b69a171dfb3250f0a"],["/在Swift中处理非可选选项/index.html","dafe0c2a37521aeb44dadb8a65241bac"],["/在Swift中生成随机数/index.html","ab3e374b006c0689d722aec5d91b352f"],["/在Swift中重构单例模式用法/index.html","2ad422234624a85400763592700f45b1"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","76ae5ddd8dc1123a4a5eaec010de4ef5"],["/如何为VIPER编写服务？/index.html","7be6e8348ab1977fa34cb7da25720212"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c97572a304d60cea52e98f20af8cc592"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","46d0a5857c52e235a71ddc23dcc22310"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2d6d9be603d771c77d72c6882856f18d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","af07e07776993c3b09a0e56023f86fd6"],["/掌握VIPER架构/index.html","9f98eba17a1d40ee22227eacacaf5e82"],["/揭秘 WordPress Hook 系统/index.html","a789e4cf1e9bcbade283760722ad5fee"],["/比较工厂设计模式/index.html","7fc652e6fd1e120f558d55f906575ef8"],["/深入了解Swift中的Grand Central Dispatch/index.html","d15631aacf51d66d7ed8c17d3a78b779"],["/深入研究Swift框架/index.html","1402090093ffdf8fd410abd37dca0ec0"],["/美豫直聘技术支持/index.html","64a1c390cd30db264bad7638e6c024e8"],["/美豫直聘用户协议与隐私政策/index.html","d27a900565bd0626114f024101563a3d"],["/适用于iOS开发人员的VIPER最佳实践/index.html","eb2bb0ec32c7f5b0ff9c61988e9fdf04"],["/选择Swift而不是Objective-C的5个理由/index.html","899ac93e59f7067d2d2f8d3a2e1734a0"]];
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
