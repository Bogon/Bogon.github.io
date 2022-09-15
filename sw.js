/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","9090c3ff95e04ea5980c17df858b9fdc"],["/2020年iOS面试题总结(三)/index.html","e93e6e743f42afcff435492cfe8054b7"],["/2020年iOS面试题总结(二)/index.html","48cb4b08463e3c5ba095390cfa2052f5"],["/2022 iOS 面试题(附答案)/index.html","d6d69c0f529b434fb2f227e37b8d7b8d"],["/Advanced Swift系列(一): Swift 简介/index.html","02bd841ca9c531e7f51c0e5bf77a13a1"],["/Advanced Swift系列(七): Strings/index.html","2262bc4817db6089836dddc58f06537b"],["/Advanced Swift系列(三):  Optionals/index.html","0a76c093bb9ae16dd1d0baff3bf4b022"],["/Advanced Swift系列(九): Protocols/index.html","ae917e78c8fd49bcc570345d4661c8f9"],["/Advanced Swift系列(二): Build-in Collections/index.html","a9e64640d981baf6f5983a8512534f37"],["/Advanced Swift系列(五): Structs and Classes/index.html","b6711773f5c11579bb312e1acc9f8b3a"],["/Advanced Swift系列(八): Generics/index.html","4495ea5a0aaf646fc6bbcb1fdf4167b1"],["/Advanced Swift系列(六):  Enums/index.html","3cb2641b47574d258126956ca718ac85"],["/Advanced Swift系列(十): Collection Protocols/index.html","c52f82809234155fb7c4489c949eedc0"],["/Advanced Swift系列(十一): Error Handling/index.html","1053af8f92492ba7545ac809451d7b33"],["/Advanced Swift系列(十三): Interoperability/index.html","5b659b98d084d9ab27e0a388b13537e0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","4623d605f7424e6036a6946c542fb621"],["/Advanced Swift系列(四):  Functions/index.html","b130ed19b48bf4f8e0f401e5f0df7872"],["/App Architecture系列(一):  简介/index.html","b4a1f364090c913a1c054bf5befffa9e"],["/CocoaPods 设定版本说明/index.html","7b0e078f09963e31444a05591f0b9453"],["/Docker 启动 MySQL 指北/index.html","3a8816355acfbab6467170d70ca54842"],["/Functional Swift 初探/index.html","7baad8cd9af374cb3f7e3725a8573682"],["/Git 使用小技巧/index.html","9fdc05627b2fb73344a37cff63993f6a"],["/Go Protobuf 初探/index.html","61847cfc3a259d44d80329101e141bf0"],["/Go mysql Tips/index.html","1874d89af13bd2200a3dd2ef9b9e745f"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","78d87b8c5a16fe878980caf8e1dc2021"],["/Go 入门篇：2、Go 实效编程/index.html","d423099e6ffd0d516f3ea0d5f0e9e5da"],["/Go 入门篇：3、Go 重要概念/index.html","50e120e38406039d843cef5c9444eaa3"],["/Go 基本语法初探(一)/index.html","eb9485059749143f37b1b49d6ea0ebc6"],["/Linux VIM 命令及操作小结/index.html","0480bfe5cc94b0a4654983f5edc6b82b"],["/MySQL Tips/index.html","34c91fa1d2a383a6121155a92e5c0389"],["/MySQL 基本操作/index.html","4f17dca93fffa862609a4bcd25cca13f"],["/MySQL-列类型和数据完整性/index.html","175b30b76887cd0953b71229ce95b50f"],["/MySQL-数据库设计和查询语句/index.html","5bf778ad1ee8e44328af430c99fe10c7"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","2b1a47c3424a9ab693ac913f0448f475"],["/NSCODER和SWIFT初始化/index.html","69091e67a9c10bc905de8bdfa124d233"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","f92c24c44f4978ccdb694493d9cb22de"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c1188048425ada276ddc575ec4f17c2d"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","6118a69adcecc4de4dad512d10964653"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","996757b03826f1151e10f911b5e30d76"],["/Sqlite 使用Tips/index.html","8aad7b5f31a8293367c2e4646b31005f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","16d25545c2c1c102840148e6a7e34c53"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b797ba40b8787371754c85083bb9f18f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","da452c28d57ec962c3e486cb826a4f64"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","84dad076d67bbe2622d72911286644d3"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","ecf1afe8cec7ec0d62e615f879e875df"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","2367dcea36f4b73d9b8b0952dde6f3d6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","95904a8e7cf74d4286278c63220eee35"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","560300eaa1f42b43b7b79aa3a7dcbaf4"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","d201b2ed33db1f14a2cfb57e758c3c3c"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a34415a111751c7b7da3d653f52f642f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","271ee2d632ae41f26ef75c8da72c6b5e"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","e253e3944f7ccd3bcf1f238cf2639001"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8bbb913585e55b7e358aed90e42779c5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","fcee2db3d51e0e5d44a6f294316f4b96"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","8c29070a1f99908ae3803c4ab993700c"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","08bd23d5b64730f81818b6051c75c9fe"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c987bf56dfe8647a9bbc296af1ad146a"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7486bfe3182cd45f8919a5e12c8ec7a3"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","d7d567b7e7f548abec7957bbdbeb6778"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","dcdf9f99170e909698a79f144fd3e03d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0b0476c072ce5f2b7c7f2f6fa1125244"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6fb0130960c211346682b011e7a3b57f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","659c830d234ed5bf704f5f7a1c4077ed"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","d42583319cd46b23e7d1e86202fdba0b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","ce92365ddc9ce59f0ef66c1ab1300c07"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","177af88a98c6b1cd104df7a7068d58d8"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0a74665ad16d18d45042f3e91a2fa2b8"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","07e4b459e05d99f5557e9edf3d4986db"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","65619fdb992d3ac7ba029dc4dcd80f33"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","17887cccd9c70c01be62638c5f311d8f"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","955518f09e140519ef5715e9bd8714c0"],["/Swift CompactMap vs flatMap：差异说明/index.html","70f4f1c79da5aa14abd8170dc10e5bc2"],["/Swift Grand Central Dispatch 深入实践/index.html","98d7c5f6153042329675860fd8a43c78"],["/Swift Lazy属性初始化/index.html","6250e9cc9654fa4f506c1a66f6c63001"],["/Swift Promises 初体验/index.html","b725a949ced5b1b347f181e07b6d98f3"],["/Swift Promises 探究/index.html","d992febf13fdb589616197d659ddc03c"],["/Swift UICollectionView使用指南/index.html","a9f48afca2083f4caa1416398a4367f2"],["/Swift URLSession && Combine framework/index.html","aebdbcd60c8326e6f5083b5dc39a36cb"],["/Swift tips/index.html","df52e8d6e2715afe7ad02c987ce031f3"],["/Swift 三方库：GRDB 使用指北/index.html","83d692e1567983c8bd68b184534bb4c8"],["/Swift 唯一识别的视图/index.html","ac61ed6b06e32edcfc36e8f5015c5361"],["/Swift 如何学习现代UIKit？/index.html","5b5ced59d28e6a8f69c0f282896cf4ec"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e213e6b003d9b54b101abaacd70a2921"],["/Swift 用 compactMap 替换 flatMap/index.html","0d48b8075d88caed10786ab9fb6f1c24"],["/Swift 选择和播放视频/index.html","ae7d02dc588baf08a7ff24abc3133788"],["/SwiftUI 系列(一)：1、 简介/index.html","a07d99b6da8ff46df5bfb010171fbe2f"],["/Swift中UIColor最佳实践/index.html","ca07c3aad9af68aa6db323cd4fa5535c"],["/Swift中快速简单的工厂设计模式/index.html","5c9c6887279810a734ca1fc0ce79645f"],["/Swift中构造函数与静态工厂方法的比较/index.html","709dbb8e0ab60391f2f7f27767b7b840"],["/Swift中的UITableView教程/index.html","1b6388dc59785da74034138111d8fef7"],["/Swift中的懒加载模式/index.html","280565c0f798de34035783044f095744"],["/Swift中的模块和挂钩/index.html","5168210449763197dfee6a809d479079"],["/Swift使用布局锚点添加约束/index.html","1e2adab7c8ce4e4b4e2453517be1fc46"],["/Swift依赖注入设计模式/index.html","de2703e8197afc12c9ff6cfe4459c1f3"],["/Swift关于Dependency Injection (DI)/index.html","1c98cc99f6d5601a218056fa5fc7a741"],["/Swift初始化模式/index.html","1c9df0d9023d9b5fb91d60cb2ff9e878"],["/Swift单例模式/index.html","e68bff731d9c31e3f727b9a3f671baae"],["/Swift原型设计模式/index.html","3f57177be1a2698acd8192a3e2d61915"],["/Swift命令设计模式/index.html","33542a8bc22961b0669b5eb2848119da"],["/Swift外观设计模式/index.html","f1a7afe68a286974676669414f778b36"],["/Swift委托设计模式/index.html","2d434ad3539d59e3ed0e1b6bc0c3f620"],["/Swift对象池设计模式/index.html","4891f1553d3eb66064bb3129265bf28a"],["/Swift工厂方法设计模式/index.html","ac8c6a2204277130464f9a10fa9eece9"],["/Swift带闭包的懒惰初始化/index.html","f1e0a0e1434902755e5c89e2106191b9"],["/Swift抽象工厂设计模式/index.html","47b5cd5673ccecf70d1671c551d3991f"],["/Swift掌握iOS自动布局锚点/index.html","5789a849a042c47daceefed52936ba72"],["/Swift支持旋转的自适应单元格/index.html","4cbacdc3fac0259e3b3642e81f888bd4"],["/Swift枚举值/index.html","5d3bd434ef54e05a8f77cf22fd89c08b"],["/Swift生成器模式/index.html","2b5453f8977abb10b08ad54bd4d9fa23"],["/Swift结合Xib文件自定义UIView/index.html","13d665cfb3ed202eda824fb06dd3fcd0"],["/Swift编写的20个iOS库(一)/index.html","e1dd1988177abc1ae20a6e75a00e9b7d"],["/Swift迭代器设计模式/index.html","d8df8b1dc409260eb726919aaa8f0f52"],["/Swift适配器设计模式/index.html","64382b997124391ec007045cb7edda01"],["/Swift静态工厂设计模式/index.html","901f7e752313832109489b88a2a88df6"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","642af72558786e339e04302420b526b6"],["/UICollectionView data source and delegates/index.html","8934698042138009ee3489d953959e16"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","40b04c3875ea695575b16e3b71f32d9b"],["/UIKit初始化模式/index.html","3e5a4644fed47f3e75525447325a2e35"],["/Ubuntu18.04替换国内源/index.html","ae447029a416ddbb0bea6261bd5d9c92"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","bcaa9bb31dae403876fce27a15c542e7"],["/Vapor系列 (一) :  Vapor 初探/index.html","4d76a7e54f9855e1373a97ebdf6233ac"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c3c9f6ce51943b44417a4ffd246b08d8"],["/Vapor系列 (二) :  Hello Vapor！/index.html","4d58401b16ccf266760e70fede1e50ef"],["/Vapor系列 (五) :  使用session进行authentication/index.html","4eaddc8a64571be4cf5633832e35bfb7"],["/Vapor系列 (四) :  创建博客数据库/index.html","99cb9462a267c702eb06024e6cbb2d25"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b2a9a44b8f52ca10f676e244b2ef36fc"],["/WKWebView与Native交互注意事项/index.html","eeffc5a7ea10379f47a2d2b41734ebf4"],["/Xcode扩展/index.html","5ac14d9937255de98039f952dcd64749"],["/about/index.html","a61665b6935769ed8d7d913f6ff94608"],["/appleOS的Networking示例/index.html","4d80c59c84ff3702dcb4a53fb025eab1"],["/archives/2020/03/index.html","5cf5c797541c5e7c9b6ebf7500429647"],["/archives/2020/04/index.html","f5a4207cc617d4ca187d6f5f2bd7b434"],["/archives/2020/04/page/2/index.html","8f59f0d58d67d9257f85120ddaee7e62"],["/archives/2020/04/page/3/index.html","f722f8931c1a4a53fcbf8e277d0b2075"],["/archives/2020/04/page/4/index.html","e0ab2ab016d56099a7949bcb143a05af"],["/archives/2020/04/page/5/index.html","c49828ee288fa6f3e8826b1786d36005"],["/archives/2020/04/page/6/index.html","603d49fda2373ed0ccd8487ea6bf8b9e"],["/archives/2020/04/page/7/index.html","54c588a942c3372adc42779ebed62ccd"],["/archives/2020/04/page/8/index.html","2dcc72e9e99fcf071151a1122534247f"],["/archives/2020/05/index.html","106d51b3bbdaf228668617e8d486be90"],["/archives/2020/05/page/2/index.html","05c3c4aa31a87f397b6ca8873227a447"],["/archives/2020/05/page/3/index.html","ab749667cfcb7db85304c7c4d7adc67d"],["/archives/2020/05/page/4/index.html","e1aced0cd03f7f300273de6f7dff80f2"],["/archives/2020/05/page/5/index.html","162b2c49a1f7ff3479b789053471a40c"],["/archives/2020/06/index.html","61102029a8f6ef8f8ad607825bd9dbb6"],["/archives/2020/06/page/2/index.html","ec327dbd3e2307c60b0d46f3c38e2365"],["/archives/2020/08/index.html","84a20806e74ec3318169b9ef0a192a85"],["/archives/2020/09/index.html","6ebd7bb09ab0c1a4a97ad79e47b3c073"],["/archives/2020/10/index.html","d8cd9c29c465c15c831adccbea6af418"],["/archives/2020/11/index.html","1b7aaee8c4a7f48d75d611fedb7e46cf"],["/archives/2020/12/index.html","5047710d45202efdbc660ce73868405b"],["/archives/2020/index.html","896e922eb4b303932b9ab2319be410d3"],["/archives/2020/page/10/index.html","5446c847b62a47c231f63de6b5501477"],["/archives/2020/page/11/index.html","f3ac55d49535ac402a74518dec86ac59"],["/archives/2020/page/12/index.html","d54ced30bca658c470d17699b8392ae3"],["/archives/2020/page/13/index.html","f7ac8742a7781729d21851f54411ce94"],["/archives/2020/page/14/index.html","9c966494a914e541db803b1708249dc4"],["/archives/2020/page/15/index.html","6d886d33b9eeda53db93d283fcf6d387"],["/archives/2020/page/2/index.html","c649c2d3a752a9533ecef3b201301afb"],["/archives/2020/page/3/index.html","504c1182513f0da192ee5153b8885e46"],["/archives/2020/page/4/index.html","fe11b1b52ff8782ae69f2c73c5ec3512"],["/archives/2020/page/5/index.html","e5a65b59df6a7942df5578d1735ff09d"],["/archives/2020/page/6/index.html","9d6af637815719a5a10eff1cfe5ee7c1"],["/archives/2020/page/7/index.html","f08a7edaa79a668e81cb1bd0534cfc1c"],["/archives/2020/page/8/index.html","9758b7e2852eabcd56151ba6eb3a952e"],["/archives/2020/page/9/index.html","41156e16b62e576922e3229d4be18d19"],["/archives/2021/03/index.html","65e84db7309848f75fb43db81f300b92"],["/archives/2021/04/index.html","91229766736d790c2de668bd84ee6504"],["/archives/2021/05/index.html","2c2f7e320a5cf0b89ac1ee1afc681263"],["/archives/2021/06/index.html","ded926b5174c17725e70b8e05f996d9e"],["/archives/2021/07/index.html","e74c4c6dd49734376a3babbd6943f266"],["/archives/2021/08/index.html","46171f31e72d4533dc66455ab1723ad2"],["/archives/2021/09/index.html","9317374017101f44222f7290f5ecd193"],["/archives/2021/11/index.html","b45bae9bf4f349bfbf488362a23e1f53"],["/archives/2021/12/index.html","17a6d8b1bfafba9b6e05a9311bc39cc1"],["/archives/2021/index.html","712cb3765634e18cc5731a6251290df0"],["/archives/2021/page/2/index.html","69690594dba626a9574694d3519e0262"],["/archives/2021/page/3/index.html","ce407c8b1f4622da75e5f72b144c6515"],["/archives/2022/03/index.html","3b5fcc70110547584eeb76e9f7160ade"],["/archives/2022/04/index.html","b9d67e0793b9c73f28efdb692fc33afb"],["/archives/2022/05/index.html","a478327cc0a35147f254f4881526b83a"],["/archives/2022/06/index.html","2f03faab958f8c2024aa11695a4fdfbe"],["/archives/2022/07/index.html","a130486d28028df4a864d5399849753f"],["/archives/2022/08/index.html","fbe38dbe3ed2670504110e4702d2b03c"],["/archives/2022/09/index.html","706b3404666bd3b4a6e588f0f281059c"],["/archives/2022/index.html","16792e19d44da33799351df3db4d864f"],["/archives/2022/page/2/index.html","cfb195e8cbadbbf02ea5e0bee5562a4f"],["/archives/index.html","ddd400a5a2399673fa7ee66d57815218"],["/archives/page/10/index.html","58c9215b5ce0e35507c6459b9007f111"],["/archives/page/11/index.html","5f5ef87653ee3260379ab3fb4a40b299"],["/archives/page/12/index.html","a9587184190712f45f68f4d538181462"],["/archives/page/13/index.html","aa3d11e3b647df8bfd8a7cd5596cb58a"],["/archives/page/14/index.html","00742e4e77dc2049e137d0bae2f32278"],["/archives/page/15/index.html","0a5195a50dde883df3dd17816d24cca2"],["/archives/page/16/index.html","5d0840a98a5408797e1c953beb839ba9"],["/archives/page/17/index.html","41aa0de1a1b2508231adcdfc54ca66cc"],["/archives/page/18/index.html","2ba0f2396ac2e893236ade2225fe3865"],["/archives/page/2/index.html","8d8fea86d351d0386c208043190f8544"],["/archives/page/3/index.html","5f862f1adee3393b9541e2e0d9d70075"],["/archives/page/4/index.html","4591fe685998dafead6157f1cab8dc23"],["/archives/page/5/index.html","f44bec9a2900025bc4d52deda381fc2a"],["/archives/page/6/index.html","84a1cc584a04e0d0954fe7aea4d272db"],["/archives/page/7/index.html","dcb031df293faec8a0684a790349e9bd"],["/archives/page/8/index.html","f5012d1a3677ea325373578a1fd11ce3"],["/archives/page/9/index.html","f63d4e3a4c4904b3fc973ac46f54804a"],["/bugly 上传dYSM文件小记/index.html","14a80b334a8bc881a4d5133521d6b7d0"],["/categories/Advanced-Swift/index.html","f925f19a15395bb6232b52275f5a9648"],["/categories/Advanced-Swift/page/2/index.html","5d68b98f0467a4fd4b6ae31ed89293ff"],["/categories/App-Architecture/index.html","c5812abad163f41ebb177a07e1920ec9"],["/categories/Array/index.html","e33d5923335e9f361d54d3150e566dd2"],["/categories/CocoaPods/index.html","a3dbe98aa94de08457ae947ad2fb6b69"],["/categories/Codable-protocol/index.html","77f28fc5b3920225c7a867b3541da67b"],["/categories/Combine-framework/index.html","91f9fe22c1ed3b4117a4d05aed04fca4"],["/categories/Combine/index.html","9c51df9d0ace100b5a6ff33bf6c2924b"],["/categories/Docker/go/MySQL/index.html","69d6456ce75b37344a0870e6b1c0ac93"],["/categories/Docker/go/index.html","70254c8d230773666f9f686282a26e4d"],["/categories/Docker/index.html","b59ad3593fc817bfd518d650a18ee391"],["/categories/GRDB/index.html","27071c78334b6d907ec2e1fd294b5e81"],["/categories/Go-入门篇/index.html","435cf26d9629ead2f0ce26a223466c92"],["/categories/Grand-Central-Dispatch/index.html","c6f2861e4f46066bb916026e32e48004"],["/categories/Homebrew/index.html","d2064189926f896563778a7f0f7b2043"],["/categories/Linux/index.html","7adf6cf30f39a6e7128af8cc7184475b"],["/categories/MySQL/index.html","e3895183e65bedd02565ae0c06e9b117"],["/categories/Promises/index.html","1c26b7188ba80b4a8a84def8d335c3f3"],["/categories/Protobuf/index.html","be9ae64e7f68cdb807e879fc844e97aa"],["/categories/Result-Type/index.html","53285bfc2b85832314cdbd55b4d1cab3"],["/categories/RxSwift/index.html","d2094314878af176fd95e786090feeb8"],["/categories/Server/index.html","2cc006af7c7c61b9b276320b4086d237"],["/categories/Sqlite/index.html","db7b23720c563c00c43a9fb6eb5145f0"],["/categories/Swift-Apprentice/index.html","5230d84588e687e9db2f484c86e496ba"],["/categories/Swift-Apprentice/page/2/index.html","c31bad7d9c2c42c8de71b630c2b0f07d"],["/categories/Swift-Apprentice/page/3/index.html","10cbb37cbbbc8d0277c3233ec723131d"],["/categories/Swift-源码阅读/index.html","91f9567e9dd83e88e83ec733bab2bf0c"],["/categories/Swift/index.html","6720cddd59967c741484493a0181719a"],["/categories/Swift/page/10/index.html","fd5b042080484d7c51703d5e4dff82df"],["/categories/Swift/page/11/index.html","49fbc686eed4d786b5b3addede3e6461"],["/categories/Swift/page/12/index.html","4ddd047802d475a4dbdefd4499bfb676"],["/categories/Swift/page/13/index.html","ddb904d9da257775530ecd3b86ee180b"],["/categories/Swift/page/14/index.html","6cc949875da4fc53193ed13e7bea28e6"],["/categories/Swift/page/2/index.html","75d4bcd990718c0cc8226137536668d8"],["/categories/Swift/page/3/index.html","552a76dbb1ce77d186a0465e240cc661"],["/categories/Swift/page/4/index.html","1bd10e604563122dc18b9f584d1d154b"],["/categories/Swift/page/5/index.html","2fea808f6e248b60e0c9d57036ef63a3"],["/categories/Swift/page/6/index.html","19499959dcece58d2cac6d50405efd5d"],["/categories/Swift/page/7/index.html","3eece7894ebd9a74c330fc0ce811cbd6"],["/categories/Swift/page/8/index.html","7b85259f19a0985386387eefd10ad492"],["/categories/Swift/page/9/index.html","2366ed67c79a2bc4b9cbe2d3ff8ff369"],["/categories/Swift5-2/index.html","b903b906def3fba748ab4ffa9cecbc3d"],["/categories/SwiftLint/index.html","95842e85cc2e219c0f32e70517b93485"],["/categories/SwiftUI/index.html","0771690e7e0065d8e396e946541fac9c"],["/categories/UICollectionView/index.html","b5c110f9a66f232fd5868711fa6760c9"],["/categories/UIImagePickerController/index.html","0d1c7bdaa2f8eefa3b782a965479b2ca"],["/categories/UIKit/index.html","dc776ccb5d31a3a8980cca008091d09a"],["/categories/UIKit/page/2/index.html","91f395edf28d0b12282dcc4525b884cb"],["/categories/UIKit/page/3/index.html","0ba929ca3898ab4ef1828153289873b8"],["/categories/UIKit/page/4/index.html","ab92c96204e328269942a7a8bb58c40f"],["/categories/UIKit/page/5/index.html","fd8f9a876b042e63f55651a34b4b2acf"],["/categories/UITableView/index.html","a5fdb2eef981f0555cdf5cf40f1a6559"],["/categories/Ubuntu18-04/index.html","f1ee75529ebf9c2b26d996758750260a"],["/categories/Ubuntu软件源/index.html","31f973f437d12eea0ded3823a4d45cde"],["/categories/Uniquely-identifying-views/index.html","96073bee2526fb5d15c7b662f3fc27a1"],["/categories/VIPER/index.html","1625c3228da8d0d757ffd9df93584285"],["/categories/Vapor-4-0/index.html","0db599dd8052dc60d16e16e728851437"],["/categories/Vapor4-0/index.html","184d4bb4eed4beb126c699ceb758d10c"],["/categories/Vim/index.html","de567c0727f1f04d80563dc52bc52dd6"],["/categories/WKWebView/index.html","623662e29452ea4b3ed1c73a375f83bf"],["/categories/Xcode/index.html","94d41b9d043e129cedc9043dc5bee74c"],["/categories/appleOS-Networking/index.html","bca3a3329c31c869710d247bb8d3a30b"],["/categories/bugly/index.html","14b2a74f785d74d87d9d5facd3f74a4f"],["/categories/enum/index.html","ba2f23290fa86afa63849f19300e2598"],["/categories/git/index.html","bed8482639e8be67f27213c7f360f8c8"],["/categories/go/MySQL/index.html","98a98983e41bdad01c08430459f176a8"],["/categories/go/index.html","7140061fa4f41e5de3a4f5964a19d295"],["/categories/go/interface/index.html","850570312d44fcc103cb5623bdddb623"],["/categories/hexo/index.html","2bd08e2adda770b68088d12ac10f39df"],["/categories/iCloud/index.html","58de936d7820c92c99973a380dede0de"],["/categories/iOS/index.html","f0844eb56f442d761e8a92c7d9549427"],["/categories/iOS/page/10/index.html","27969993152b77e2bf3ada7cbae72b8e"],["/categories/iOS/page/11/index.html","d27a37603e612b3c4900b136976e9f39"],["/categories/iOS/page/12/index.html","e29138a12abebbc3c43bfada181698ee"],["/categories/iOS/page/13/index.html","24216573d8e84e63b8bd6b2ba1ae45c2"],["/categories/iOS/page/14/index.html","48a9c4baa24f3e043247cfda554fd359"],["/categories/iOS/page/2/index.html","1aba03e547e51927ec91ec7a5c74c7ff"],["/categories/iOS/page/3/index.html","039faf4bd9b432da935c1cd89642a670"],["/categories/iOS/page/4/index.html","98895726336e4929f8bd6f9cbd2eda3b"],["/categories/iOS/page/5/index.html","7895f363d8acdb7b5c0340654f7ac4df"],["/categories/iOS/page/6/index.html","2e9f5256cbe2fac4757b414899097450"],["/categories/iOS/page/7/index.html","66389e7d92c890a86791f536180958a4"],["/categories/iOS/page/8/index.html","953d9f327daf6588e0e17f0deb522d8d"],["/categories/iOS/page/9/index.html","9d62303ccf4df68cb0de68c021d75d6f"],["/categories/iOS面试题/index.html","c7d1ee83fbdad0296090bc6123d6a655"],["/categories/index.html","ecec5c70a6bc33f3713bdd5cf6be3b7b"],["/categories/random/index.html","50467c1566ed927e76c4dc6a11136fa3"],["/categories/三方类库/index.html","6d7877a3dbf9c0ea739c92f75a09abab"],["/categories/函数式编程/index.html","3d22c0fda0837d33377dbf40844e3716"],["/categories/子类化样式/index.html","4c3442cef60eee63054542da92f46d3a"],["/categories/开发技巧/index.html","6d9277c23f5ea06977f460a08639a0dc"],["/categories/开发记录/index.html","0d64037ff4f1157bea4611c795cde4ae"],["/categories/数据库/index.html","1f0d45b98daa0ea1ab54103ce5a25139"],["/categories/架构设计/index.html","13cc548c5dabd3d22d9b04b3ffbd78a8"],["/categories/测试/index.html","ae789d77971f0768eb21b966072ac95d"],["/categories/用户体验/index.html","09c932f87d899b77833237947961eb03"],["/categories/用户协议与隐私政策/index.html","74c2d6d060c4db773cb33235376fbfcc"],["/categories/组件化/SDK/index.html","95417b19ee33692d846ea7c67d74bb70"],["/categories/组件化/index.html","75b9b3b924598544fe3a8c7acf35968e"],["/categories/组件化/模块化/index.html","e4663df8e4ebe6c5dde76932c4d4daea"],["/categories/设计模式/index.html","0b204126dc499e037f7062fd7d262162"],["/categories/设计模式/page/2/index.html","a2cc0ca576eeb0e826d102afabd4da8e"],["/categories/设计模式/page/3/index.html","c15ee75aa05793546255c4a3f2789d0e"],["/categories/逆向/index.html","d22a9fd49c2bc932462de468cf74b65d"],["/css/main.css","2d18ac9f6da68fc319ccf586afed4c3f"],["/go moudle 导入本地包/index.html","58f68433a35c9cf962602a5f09fe3cab"],["/go 库专题(一)：gin/index.html","3cf3d20f503935b1c69117380350f5c2"],["/go 每日一问/index.html","417d31b3c09975fcf078adab55af05ba"],["/goland 学习笔记/index.html","a6752f6baed23fba0696ceaf41176078"],["/hexo部署失败/index.html","844b665d5b1f66677a6d6d8c6ac9789e"],["/iOS 15 适配/index.html","d7d275377ffec327bc8d582d9802bb66"],["/iOS VIPER架构深入实践/index.html","550586f574b3029c040762daaaa9a672"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","f87115575206254e798cd7fe585ea385"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","3efc203c47e5a1f419c053fedca0fb4d"],["/iOS 自定义视图，输入表单和错误提示/index.html","af736572f02bf9ed8cad8640d06ec116"],["/iOS如何使用iCloud文档？/index.html","6cf859c953674348505864d1d71df4be"],["/iOS子类化样式/index.html","f8192e38e1aaa52b930138ee4fd20174"],["/iOS开发记录<一>/index.html","afb8a5c52b4f03355c76d4afc7c76377"],["/iOS自动化布局编程/index.html","ea42b16a57c1ddf8aa36442db25c1bee"],["/iOS自定义转场(By Swift)/index.html","747d9ccb921190e64e79c0b376d02ed0"],["/iOS项目架构：使用VIPER/index.html","5e574bdfc261b8e16d36f72f4784870e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f6ca8e9a63eed02e1e13fe6f9ddd17ab"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","018ef0269e5483c69cb9511ed4b8e6a5"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","602dcf456856d7381d98557492765949"],["/page/10/index.html","4b43ff8db5c4fe870b93dca76275b886"],["/page/11/index.html","50aeb8df18c0bb71239982fde4edc961"],["/page/12/index.html","250ea8b818a6b12489069a3658a27d0f"],["/page/13/index.html","c549f7f8dc5f66c15535d8ff18e1e213"],["/page/14/index.html","305a36e6d098e4207b5d50cc2d3b8cc9"],["/page/15/index.html","ae8e4ad558810204ac6d2bc0c49bc775"],["/page/16/index.html","378981e181e08845b8ab98b4c18c915f"],["/page/17/index.html","07f8f899e554deaa47525141a787b839"],["/page/18/index.html","860e83a3d351bd21729ef3d7da4d40a7"],["/page/2/index.html","06805d17988af9d2bb25bd4b9beb8035"],["/page/3/index.html","399228cbef60c15b46c3ecc6717a3e3e"],["/page/4/index.html","f8265deaa2dd0829782b65d3e1fb8902"],["/page/5/index.html","ef578cb148242eb6a4bd351294365e1e"],["/page/6/index.html","2b7fe8328559d8ff2fb10a885a6e7e28"],["/page/7/index.html","970c72b7341c85edbfd0184b8cbe518d"],["/page/8/index.html","406d032c569404511cf99192ea7f46a9"],["/page/9/index.html","4d915d18911284413b0fa1f3d4841e05"],["/schedule/index.html","a1d1eefbed81b1604fb02b48a0580f9f"],["/storyAppPrivacy/index.html","a06911efe1f13be818991c4715a58f75"],["/sw-register.js","bae6a236fd4b878b50145c92d404c090"],["/swift 专题：函数/index.html","573b453adc6dd84b7ae3765a9a602f88"],["/swift 专题：闭包/index.html","f9e04e0b810ad2080eead1195315f16a"],["/tags/Advanced-Classes/index.html","8bf78b8e21d7ed3086b46816870f242f"],["/tags/Advanced-Swift/index.html","0a19b6ba3fb178e10d34683446030cf9"],["/tags/Advanced-Swift/page/2/index.html","61b84906ddfaaffb8890cdf0fb79899c"],["/tags/App-Architecture/index.html","5db29f68649a7a5c409935eaaf6d847b"],["/tags/Array/index.html","bb878d6a0d932c826c011588a13417b7"],["/tags/Arrays-Dictionaries-Sets/index.html","7014252f7d0c6fa638fe5032d15992f2"],["/tags/Authentication/index.html","2bea762d8c6152eb62c8c37c3eee637d"],["/tags/Build-in-Collections/index.html","08a869090e9329c809c364c5d2fd3748"],["/tags/Building-Your-Own-Types/index.html","cba64c5e358908cd7456ff85f2775ff4"],["/tags/CMS/index.html","f9f210c62ea82811a678854e3f916791"],["/tags/Classes/index.html","0b5f21d852a8cf2e4d3082bdfefcc865"],["/tags/CocoaPods/index.html","58149be16c5c6692f06d3d40e60ddca3"],["/tags/Codable-protocol/index.html","4430a8cda872ee13b16bc3a842415c24"],["/tags/Collection-Iteration-with-Closures/index.html","c3ddfda3d46e601417f0c192fa78a25d"],["/tags/Collection-Protocols/index.html","401d2aef28568a380fb6dd41095eee90"],["/tags/Collection-Types/index.html","43588874dddbb3ea35d4f778b73235d4"],["/tags/Collection/index.html","9402efe629346efb94fff8e5736673e5"],["/tags/Collections/index.html","73f505e680151b171b7e284a8d60c1c4"],["/tags/Combine-framework/index.html","a4782e614b014fb1530999e65240fdc4"],["/tags/Combine/index.html","fca9c2ef7c930b89e00d2769a27c2164"],["/tags/Dependency-Injection/index.html","b0bc8be20f47af2b26a4744d510cafde"],["/tags/Docker/index.html","2c6f6511bc76aed208ae82e794ef6af6"],["/tags/Encoding-Decoding-Types/index.html","c37cc39c1c8707f598dcaa972673a35f"],["/tags/Encoding-and-Decoding/index.html","1d4b80208b6cb5f157728798844e5463"],["/tags/Enumerations/index.html","5f50b6980f468365566c83f214595355"],["/tags/Enums/index.html","755afdd7cddf9d5c0707c26f76198208"],["/tags/Error-Handling/index.html","0fb0e5a024ea62b64fe86109d21c9ae9"],["/tags/Functions/index.html","cedcf04c8e6fcfa1eff0338e5d90bdbd"],["/tags/GO/index.html","b94629a7ab0b8f584e77a75ec3c52c04"],["/tags/GRDB/index.html","8981a033c9790e654502abe7f95141e6"],["/tags/Generics/index.html","479a7e4d1436654a278176183d2854f9"],["/tags/Grand-Central-Dispatch/index.html","04ffd6235260bcba68b3b22eac82e2cf"],["/tags/Hello-Vapor/index.html","52b123867166024dec8d56ad13e4d087"],["/tags/Homebrew/index.html","565618afcddd658036894c3baef69153"],["/tags/Interoperability/index.html","3aef1be5e000e50ebab0caed6515514d"],["/tags/Introduction/index.html","7f0ad5e55a3957b64447752927aef859"],["/tags/Leaf/index.html","792b946b15f983c98f8f33c8decd6e2b"],["/tags/Linux/index.html","6e00f2ddf833a74a0d0ccd938d4c5a30"],["/tags/MAC/index.html","6059e26aff08c2787e91a1815c53a9e8"],["/tags/Methods/index.html","e0ce078218cf21dbc8323c3da2608a92"],["/tags/Modules-And-Hooks/index.html","c24a7ea1a7813aa104c0b8a8ee7ce1e5"],["/tags/MySQL/index.html","fe1a9a9fb6bbb892b5feab282408cbd0"],["/tags/Optionals/index.html","b3cddbbecaaa2f31a0b31c8b7435b678"],["/tags/Promises/index.html","5cbeeba7158fa20339c09fb1e141d716"],["/tags/Properties/index.html","6950449dd31ea5b370ccfc95f9dca5ad"],["/tags/Protobuf/index.html","1997662458bc90b3fa85fbe3aaa3e8dc"],["/tags/Protocols/index.html","53929c5286cb6745e6f51bfcb29ac056"],["/tags/Result-Type/index.html","7dac2d1ed4eaa1c766fcf4c13e406800"],["/tags/RxSwift/index.html","43f20c4ebca16c5d5a8b678f03a886fb"],["/tags/Server/index.html","659ae9499e94306b9c20dcd0f564ee13"],["/tags/Session/index.html","9919a2212fcd44c3adf6310083a756c0"],["/tags/Sqlite/index.html","ba7c9d37d495a80a1aa1030934c13404"],["/tags/Strings/index.html","2e5a2aea9e50f94bdc8f41d874ed3c45"],["/tags/Structs-and-Classes/index.html","e9c3f2e1c662bd7a614557d10eaee93e"],["/tags/Structures/index.html","b9909f08ed4de70243e3c49a92986d2f"],["/tags/Swift-5-0/index.html","4a18746f7a3fefcacec68bbad74e9af8"],["/tags/Swift-5-0/page/2/index.html","f7ee339cdfabc14ba0c7dc63d1f8984e"],["/tags/Swift-5-0/page/3/index.html","a8414c100115564ffdba43a5af0078ac"],["/tags/Swift-5-0/page/4/index.html","f7e9db90b79682f3333d7f97978ad73f"],["/tags/Swift-5-0/page/5/index.html","0f9a7a309d98b883f93a8785e60382b1"],["/tags/Swift-Apprentice/index.html","9d1eee8981f66987ee18e5ee28f250c6"],["/tags/Swift-Apprentice/page/2/index.html","bebcefa3d3932723ae018d9dbe1a2391"],["/tags/Swift-Apprentice/page/3/index.html","dd06761be3891c189fe934eede239b4c"],["/tags/Swift-Package-Manager/index.html","2f0f9b9b04467b625439ce4a5d4395ff"],["/tags/Swift-源码阅读/index.html","7f142f4fbf91e6227395b3eb589743e0"],["/tags/Swift/index.html","55e84a5976c6a55698a1dc83f51872bc"],["/tags/Swift/page/10/index.html","53389dc2d7a581021f7fe9be3a028322"],["/tags/Swift/page/11/index.html","777ab66752b286710324c32cbb40b291"],["/tags/Swift/page/12/index.html","967fbf2224a35272ca66bff626f0d4b3"],["/tags/Swift/page/13/index.html","cb48b8958bb88f488e6e77b06eb2bbe7"],["/tags/Swift/page/14/index.html","c8a35d2c971b5a893c9289643ac8cab2"],["/tags/Swift/page/2/index.html","bcf2017ec4e872ea93ca580096bedeaa"],["/tags/Swift/page/3/index.html","fd15f3749e18a3a9f0a97726a515e30a"],["/tags/Swift/page/4/index.html","5e9bfff39387c051694e7d9e5983cc82"],["/tags/Swift/page/5/index.html","a555c737d7c485eb65fcd5db2894bf3a"],["/tags/Swift/page/6/index.html","6408e2b577ccf436613460fce390d604"],["/tags/Swift/page/7/index.html","78d4d8a06063e593ef7993680ca5807c"],["/tags/Swift/page/8/index.html","04f9404eeb60e7f0ae36d5b7a67d4220"],["/tags/Swift/page/9/index.html","d618edf9990f664c7fdcae449c253776"],["/tags/SwiftLint/index.html","0d69b3a09c20b6544c660baeb9a4b415"],["/tags/SwiftUI/index.html","5945c2ad781dbe961e809d72250ebfc9"],["/tags/UICollectionView/index.html","ccac0e35f64b3bf80ab0cb44477705b3"],["/tags/UIColor/index.html","809c642e3797b545573b480575b4a243"],["/tags/UIImagePickerController/index.html","62e0a3bac26fb21f461b0d1916a6e706"],["/tags/UIKit/index.html","71e3728a4ca66bc9c93611d7ab14c7bb"],["/tags/UIKit/page/2/index.html","9f622e09719783dbdaf0dab3633eefbb"],["/tags/UIKit/page/3/index.html","075c39bc41648e5b9910d83b06653716"],["/tags/UIKit/page/4/index.html","fc338a322a73d2a118ad4d58073fc9c2"],["/tags/UIKit/page/5/index.html","c66e949642e60945bccf3c2d0da9567e"],["/tags/UITableView/index.html","494de2b31f6e6b4305f3d657bd56c099"],["/tags/Ubuntu/index.html","b627b333bd7bcbe9e071c32b1004877c"],["/tags/Uniquely-identifying-views/index.html","2633a24d54208288c9aa1039e323c31b"],["/tags/VIPER/index.html","adda45bacfb19284fa482a0b359676f0"],["/tags/VMware/index.html","b408788bde81a1cb8cc34e4985f76bee"],["/tags/Vapor-4-0/index.html","aef190f9cdba7dfc620870e29f953042"],["/tags/Vapor-初探/index.html","db372006db51ca0023a38b82e132c0fe"],["/tags/Vim/index.html","29b5f99f31e6992da3bb18695b0e2cc6"],["/tags/WKWebView/index.html","7b31ab5f854dc96d693a208431796ece"],["/tags/Xcode/index.html","acdd3b6edef8b8be6afc2b36d44dd07a"],["/tags/appleOS-Networking/index.html","93b870f8bc2a106008092ec28d36bd68"],["/tags/bugly/index.html","a887e0ee2e67f2396551966b3b764024"],["/tags/enum/index.html","117b3cbcb74e4c5e760c40ef0a9fc34c"],["/tags/gin/index.html","9390a0ad20361d88eed567110658ddc6"],["/tags/git/index.html","bdf5c90725e5c62e42fb6988faa02b9b"],["/tags/hexo/index.html","22d8ea350362f579a115692a85c6ad87"],["/tags/iCloud/index.html","ca271b7a9f95f7b8d7e22b7564fef6c5"],["/tags/iOS/index.html","726165a40de9aef20054e07b28cd492f"],["/tags/iOS/page/10/index.html","5594eb2c413bffea2ff4d8a4af68a487"],["/tags/iOS/page/11/index.html","e8b9685df34210bbfb38f146cce6e917"],["/tags/iOS/page/12/index.html","a85312cbc5e44cc997ae9620fd542dc4"],["/tags/iOS/page/13/index.html","0c62df4a74daafdb48f33e69a5e1faeb"],["/tags/iOS/page/14/index.html","7ef70a23348ccb49de2e0f322358ac78"],["/tags/iOS/page/2/index.html","59eba21e29537628db8dbb711ed6237b"],["/tags/iOS/page/3/index.html","e0d175449e1bc439aa493b2e60f633c9"],["/tags/iOS/page/4/index.html","c4cd9178d40cf01eb38b1ca178318e01"],["/tags/iOS/page/5/index.html","c3adfbd48a3022b8540a1f6290cdef4a"],["/tags/iOS/page/6/index.html","f89dba03b8636ffa3efeebb9d3b8553e"],["/tags/iOS/page/7/index.html","b579a8611c084391c4791d0313a90c5b"],["/tags/iOS/page/8/index.html","3699125d9f234a78753bc461ae0de94c"],["/tags/iOS/page/9/index.html","f543b1f6f379c9c034b71c87d47e5af0"],["/tags/iOS面试题/index.html","6e6af0524f0b4a9a90ac8502022c2e82"],["/tags/index.html","b0b7dd742dc60540af769cd67fb71f4c"],["/tags/interface/index.html","f0993895ea5fd067d2178d8e27120748"],["/tags/non-optional/index.html","8952365af7cce2be34601ed45ad11820"],["/tags/package/index.html","f09353f2ca16fe00da4374cf815f3a1e"],["/tags/random/index.html","62da1d994dde40aab3c958ea7d24928d"],["/tags/transition/index.html","8e91c2bceba598d8dbc0dab05a352148"],["/tags/三方类库/index.html","f5aa6799fbc18bf57833e68a1d1e179c"],["/tags/依赖注入设计模式/index.html","82307d66181a06e90fb032b3051161dc"],["/tags/值类型和值语义/index.html","982b56e0a805b6b5bdeca0670a37f65b"],["/tags/内存管理/index.html","5ca4cdd5bc2dfdcfac863e43b45b0d9e"],["/tags/冒烟测试与回归测试/index.html","89cceac830b22cff18aa71b6352c2bbe"],["/tags/函数式编程/index.html","34c0056ceed23a148b78f7c39f5a4f28"],["/tags/创建博客数据库/index.html","1aab79164f3e3221b7539d8ae52fdedf"],["/tags/初始化模式/index.html","7d05a8d379b0ff330cbc17ed90bd06bd"],["/tags/单例模式/index.html","0c72a09ac13c4bf02986cadbe60f5345"],["/tags/原型设计模式/index.html","e8ab8a3ac37b4ba8755e36b180c1398f"],["/tags/命令设计模式/index.html","f6df74b53eeee9c6ff2d2a0188099048"],["/tags/基本控制流/index.html","2f712154df0a6f6038c9c4ad3f795b50"],["/tags/基础语法/index.html","521d91e2395c9e3e14c6c1e0c91c41d2"],["/tags/外观设计模式/index.html","464be0d6f55500758b06f3ed76496b23"],["/tags/委托设计模式/index.html","ba8fd065f0ee4103a7f50766d9098be2"],["/tags/子类化样式/index.html","ff6e96d431db6a3439b42b8beeeb7f0a"],["/tags/对象池设计模式/index.html","e5431269a03d4ed05a282232251c3e42"],["/tags/工厂方法设计模式/index.html","27496b69d8c6a19f30bede0142903f99"],["/tags/工厂模式/index.html","38cf231dcd7c99877088fa34f519b412"],["/tags/工厂设计模式/index.html","9b5fef5b7f6e138cda050ba45979d7e3"],["/tags/开发技巧/index.html","1674fa0a6ef6ff1875e0a010c74aa11a"],["/tags/开发记录/index.html","a35eb2e9479b56ded468e586a9587692"],["/tags/懒加载模式/index.html","f54889fd70c3e66b875b5240e057da5d"],["/tags/抽象工厂设计模式/index.html","bc612eb5ddfaf423edfadaa029ca8ea1"],["/tags/数据库/index.html","568f207ef2c0d54b9ba10a99d1691c57"],["/tags/构造函数/index.html","2173eaa5c0f599cda51b010ec5487c75"],["/tags/架构设计/index.html","dd91571846c46d13664a24815551b09a"],["/tags/模块化/index.html","ca700092d037b7a4884b305ca2a31874"],["/tags/模式匹配/index.html","b64e9ee6cbb50601355a058545802cf1"],["/tags/环境搭建与验证/index.html","0b03146136ec1bb8c6ea6a01c0cbfbfb"],["/tags/生成器模式/index.html","fb3aaedd4cafefb3d32548c591f69734"],["/tags/用户体验/index.html","c8818922a207afa816001a4bbe0d87a0"],["/tags/用户协议与隐私政策/index.html","6cd61cb3ed129e7ff2f4f870b07fa20a"],["/tags/类型与操作/index.html","3399fedc59024bac0265ac2f37b7bb50"],["/tags/组件化/index.html","4c25e4c04e2fb5607127031d065dd84e"],["/tags/自动化布局/index.html","75d363b0cf70093a513124924efc2a28"],["/tags/自定义UIView/index.html","5c17468535283ee333c898bbae9a7682"],["/tags/自定义转场/index.html","5ceb58d890d8d99b699f3b6159ed975f"],["/tags/自适应布局/index.html","feecae7b5e240f4f5c652aaa640240c7"],["/tags/表达式、变量和常量/index.html","43e869355033349e0e07b08726b3b910"],["/tags/设计模式/index.html","311b83461a796f1f729a4491bad2d668"],["/tags/设计模式/page/2/index.html","72c9967f6fa09ccb18452342c1577080"],["/tags/设计模式/page/3/index.html","f5b5fce85b1354647f5be72c9d396ae4"],["/tags/访问控制和代码组织/index.html","ece75018b074a621e1cc98fe85102d3b"],["/tags/运算符，下标和键路径/index.html","ec253df744af57e61a0314a419df161e"],["/tags/迭代器设计模式/index.html","58772af445c6b14ed350a9f4cd174d4d"],["/tags/适配器设计模式/index.html","a7a0845ea49bc0617f4ee23b41cce6e5"],["/tags/逆向/index.html","5b85a100b5e7e85bfb90d63a70e16bd5"],["/tags/错误处理/index.html","602ffc05b8340c01314426c7b9414083"],["/tags/静态工厂方法/index.html","9228ea0794105cd15016fcbdbb0dc821"],["/tags/面向协议编程-OOP/index.html","7fce6e285ed5c983036a4d9f98483617"],["/tags/高级主题/index.html","369de30a3f8bab3a41fe6da88331bbbe"],["/tags/高级协议和泛型/index.html","f6b54aef6adec7fb219636dd0fe6ad81"],["/tags/高级控制流/index.html","f9fb94a5e92428b78b524cfbe3e35a0e"],["/xcode 常用的快捷键/index.html","5deddcf4d1fa92dc011fb6fb945e3e38"],["/为iOS应用构建输入表单/index.html","4232c9e8641d7fe7168fca9b674a5ddd"],["/产品开发的幕后花絮/index.html","de5d5e1cd931764a0cc087495a9af74a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","b9eeb3ef045890edd5445d47af519999"],["/冒烟测试与回归测试/index.html","d05d495d07eafcae83db277b35ac9e9f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1419215488bf933d4c79f3cb7e3c5a4b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","899406ab53032b06f53f1e85147000bd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","794cf4f34479f733df11f163625a0b56"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","624c17a6c2704388734777af5075eb20"],["/在Swift中创建自定义集合/index.html","bece7c22e9bb3eb709f32320f9898059"],["/在Swift中处理非可选选项/index.html","cb10d950e4b9baf6733fa9ddeb83f7bb"],["/在Swift中生成随机数/index.html","64355de1947f963b04811e7e21b20688"],["/在Swift中重构单例模式用法/index.html","d62013500138b9aac332df14c03aee32"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","0d004058c053a3794af4ee77d1014281"],["/如何为VIPER编写服务？/index.html","664e97d53146e9d9d6d7deb4cc619183"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","395eb28d8967d593a7e25777692bfb28"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","676501ed7d87ee508510a1c6a7f613aa"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","29d195b842936836d6a28473e49ba265"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9a3ff816da6edef5b37b362f420872b9"],["/掌握VIPER架构/index.html","613e23465e93037fdcd6cd98685b7082"],["/揭秘 WordPress Hook 系统/index.html","cd2c0c3500eafb9a8587472fc009b148"],["/比较工厂设计模式/index.html","d09dbb44b065e7983e875d3eef58f94f"],["/深入了解Swift中的Grand Central Dispatch/index.html","156653aa137ac821bcbb8f015d54634f"],["/深入研究Swift框架/index.html","a6f6a6b863f6316efa544f247e232228"],["/组件化插件化与模块化/index.html","24aa5473d3956110cc165b81d47c722b"],["/组件设计与SDK开发基本规范/index.html","5c21d9ab46394fa0f87be265b1025747"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7f59d512c02b06cc8e4e066d6e7f860d"],["/选择Swift而不是Objective-C的5个理由/index.html","2c6a9eda33fba7c7f7f3759333d17a5a"]];
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
