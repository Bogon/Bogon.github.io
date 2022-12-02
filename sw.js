/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","dfef4a36f50114f0edf21087aeec635d"],["/2020年iOS面试题总结(三)/index.html","4095baabb4ef34b36d9361f7ceed5e10"],["/2020年iOS面试题总结(二)/index.html","320987430cdd0a65770b594b02484cef"],["/2022 iOS 面试题(附答案)/index.html","3823fbb7b8edffb59da479e2ef7efb51"],["/Advanced Swift系列(一): Swift 简介/index.html","a14efdf36c093a9868ef454d698a649f"],["/Advanced Swift系列(七): Strings/index.html","e3793ec9d19cb3fa90906fb32871558d"],["/Advanced Swift系列(三):  Optionals/index.html","eeaea1a2088cf74e5857f75d71401da3"],["/Advanced Swift系列(九): Protocols/index.html","b0c6c4d167227310d242f043100f43fa"],["/Advanced Swift系列(二): Build-in Collections/index.html","6baaad87b8add1bddc66cb4b3c0f6a4d"],["/Advanced Swift系列(五): Structs and Classes/index.html","fb757fc173391ccf8cdfe3bd8e4278ed"],["/Advanced Swift系列(八): Generics/index.html","496486cc379823b586ac0708ace7bde0"],["/Advanced Swift系列(六):  Enums/index.html","21a6d564174496967fe87d1bdf787040"],["/Advanced Swift系列(十): Collection Protocols/index.html","e17737f2234c0c9522fb8f2412d54be6"],["/Advanced Swift系列(十一): Error Handling/index.html","7919006e0c502635bb9cca0aed205045"],["/Advanced Swift系列(十三): Interoperability/index.html","3f7ca29cab16f142de6c9e02ddb0f28b"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","74dcdac36e7500b2c8535a798db5c6fb"],["/Advanced Swift系列(四):  Functions/index.html","6a9ceab154829b9965b90df4f2835945"],["/App Architecture系列(一):  简介/index.html","ba561a35e76028ec162560dbf5ead5b7"],["/CocoaPods 设定版本说明/index.html","daca3a76850134387ed408352c14bc9a"],["/Docker 启动 MySQL 指北/index.html","5cd3cea90403b0914e434048ffd99a0e"],["/Functional Swift 初探/index.html","0db0ea309a410735c09a132a2f59567b"],["/Git 使用小技巧/index.html","a494af9b3b9d5130af37a76b812e643d"],["/Go Protobuf 初探/index.html","b8168e7b242e5436b29d00a0b440e1d5"],["/Go mysql Tips/index.html","20d7ce45ac1983e179f4eb8352a0d994"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","5dd7dd6ad236533b9484f01839f99375"],["/Go 入门篇：2、Go 实效编程/index.html","6f15c52cec882ef1cd0f65849ba12a37"],["/Go 入门篇：3、Go 重要概念/index.html","4235b67e933ad1da54b81e34028a095d"],["/Go 基本语法初探(一)/index.html","8228e4c8209701963bb1266888b17f3f"],["/Linux VIM 命令及操作小结/index.html","f45a812764b9e48e30c873665d602260"],["/MySQL Tips/index.html","a3f7a700c501825200da047356adf942"],["/MySQL 基本操作/index.html","c0a749ff896c0e12fec8fee676090cf8"],["/MySQL-列类型和数据完整性/index.html","4418426230e87601e9fa05a5932cecc2"],["/MySQL-数据库设计和查询语句/index.html","b5d0c699ac60108c559f00f4af789075"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","4853b9c7df61fb4c66dd9589746e4e8d"],["/NSCODER和SWIFT初始化/index.html","33fa157f8130865dd7703704c8a2fc93"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","2e6a0ded3df1197d40beb657f7b6e35b"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","03a9f1f2d3fae2688bed51461cfede64"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","877f8a515db4a835a914177ad2948bc9"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","f0a41f75288631c0f7094e560b636062"],["/Sqlite 使用Tips/index.html","4f81fc9683adada473590a6c06640945"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","097b23f588a4700b61fcbae5c28bde37"],["/Swift 5使用UIImagePickerController拾取图像/index.html","048e1aa70f7f3a1761f1d185d45e3e55"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","91889a1e632e2bfed51bd312efa1b329"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","6d798ee225e5599e96b952855fd2a2c1"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","1ac98fc79bec9002e5671ad2edc62cd0"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","718c35fd99423b06a6cea952ba3f27a2"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d0ba7ca28bf351a43c721b45e61e17d3"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","dbc35f4c00c790c8674a814945608752"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","2c8eed6a44ec65e2ff8940bf3244241e"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","26c05df844f484f0ceda0a123e42fe7b"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","2bcc6d43fa149d77e945b316f47fea05"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","57756158387cb2d19a36f2f589f69e66"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","59809a3af6edcadc5abf6fdaec16c2ac"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","c32624ff23475304f3d657b4f877a057"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","28d882d874c76a8ee917d4c4e1a719c6"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","79455f03b0eb18debb72eaae683b6f58"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","9fd34726e86c8f0d15366563408359b5"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","63f4ecf8274c06fcdbf8633499fb8eea"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","6f2d6e95c075ca659fa541709c7c5765"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","4c2911dc4f3306abc10f8f3601d3f92c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0ef0491a5ea0a3c369974a8076236141"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","341d9351467103a61d47e40afa04ed73"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8245f7212580130382f14d46a7b6824f"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","04ae01eb449818a8461934ae51a9a86b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","3f971b03904f4459bec9909fdde98429"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ab151d0888503c81b14e6506d2157ae3"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","6cde62a717b74ba857341a2c47395d51"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","c41ff5abc1ceffa2b7ece51005c7f7a3"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","4e3edf55fc77b4a0bc67c67328c45f17"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","4b0e2ae8fc894af710fcac6d4a44af95"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","1e20a9fc490f24318f99cdb1a9e82ae0"],["/Swift CompactMap vs flatMap：差异说明/index.html","9c1a73d03c2efdfd71b7829acba1bf79"],["/Swift Grand Central Dispatch 深入实践/index.html","d43d1104b43b5cbccd19e21e06d4597c"],["/Swift Lazy属性初始化/index.html","ef4481a27809be7db963fc55b97c0429"],["/Swift Promises 初体验/index.html","7cee5d5078779c6910ffa0cddccbbeaf"],["/Swift Promises 探究/index.html","cc21cb3561760b731599c37518959004"],["/Swift UICollectionView使用指南/index.html","e01f85092682573aa8e7d89658d79c25"],["/Swift URLSession && Combine framework/index.html","b0218b3ce5cb37e231585795b17d507c"],["/Swift tips/index.html","1ca8638c52260114f6a7203cc9d5605b"],["/Swift 三方库：GRDB 使用指北/index.html","53b173c4c292296231840a6ee7b2ab9c"],["/Swift 唯一识别的视图/index.html","14f1f09da0ae3e061de671c8b378ef7e"],["/Swift 如何学习现代UIKit？/index.html","311b213ee144aedc4be61364d0aa6867"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","31e5d758a013a673d022ed86336989dc"],["/Swift 用 compactMap 替换 flatMap/index.html","6bc5fa27ee4c812e3bf552138c797d8f"],["/Swift 选择和播放视频/index.html","db8a1d5c22e4bcf204b4441cdd6c4994"],["/SwiftUI 系列(一)：1、 简介/index.html","e7e34d7acd40eaba8af1cb2dad21f53a"],["/Swift中UIColor最佳实践/index.html","9beb40ea9978875da05728a9c43761fa"],["/Swift中快速简单的工厂设计模式/index.html","d76ed4b06435c111a7edb7f5cd4330d6"],["/Swift中构造函数与静态工厂方法的比较/index.html","085d20e5135936bccb3719dd0f84a9ec"],["/Swift中的UITableView教程/index.html","3b0b8017e46e14d23350737715419560"],["/Swift中的懒加载模式/index.html","bd05ceab19b75054f49001cba624f4fa"],["/Swift中的模块和挂钩/index.html","95de57a1aa6bab22f10ab91de51116c4"],["/Swift使用布局锚点添加约束/index.html","be55196732c5788dd53ca38ebddd829a"],["/Swift依赖注入设计模式/index.html","2e5d3bc984d2785bf0e5745b7c795082"],["/Swift关于Dependency Injection (DI)/index.html","0f9f719bfeacd1bcd00bcaf2871b52ad"],["/Swift初始化模式/index.html","12d628361a1f937beb1db847f1214f6b"],["/Swift单例模式/index.html","a4c47c966d3f5b3628820a0a55457675"],["/Swift原型设计模式/index.html","0359eb312062a56aa7eda94c31a56c94"],["/Swift命令设计模式/index.html","87893827bb107cd7cf582cd03d965f4a"],["/Swift外观设计模式/index.html","4d323e305edeb986a0b2a1ba899434cd"],["/Swift委托设计模式/index.html","d6346244de8f2cd1d5b5148a7cdf14fd"],["/Swift对象池设计模式/index.html","fb83fb4b48ad5a86fbc35fc0a5cd7230"],["/Swift工厂方法设计模式/index.html","313e09879868d2619323b01cdbb157a2"],["/Swift带闭包的懒惰初始化/index.html","ec6f29a9589b87ff38bd206a50e8388b"],["/Swift抽象工厂设计模式/index.html","ac7a6a23fd1f877941b85701bbc6a550"],["/Swift掌握iOS自动布局锚点/index.html","7e3379fab7b09ac6c0128e59114860fc"],["/Swift支持旋转的自适应单元格/index.html","9275ba2c3b4ec6de752691eeb83d3d24"],["/Swift枚举值/index.html","7e1a9330dc1e28caf2f3e3394bf37aa4"],["/Swift生成器模式/index.html","7f85e27165b8b410c8a0a99ebbc824d3"],["/Swift结合Xib文件自定义UIView/index.html","9db01b84ab66a19344c752c0fd43b9d6"],["/Swift编写的20个iOS库(一)/index.html","c80a3b9ccadc3e54cc6651ea8c898572"],["/Swift迭代器设计模式/index.html","de73f6c53bc9b595863cc617011e1168"],["/Swift适配器设计模式/index.html","18c6c3e685475ef872a500f07bb61f73"],["/Swift静态工厂设计模式/index.html","43470f0eec475863f31f2c6d37cb3210"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2f5cd4c2ddd8dfe8c78e99ad031ee09c"],["/UICollectionView data source and delegates/index.html","03a1c28548670f712ed1eac7ec39d8d0"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","3c2d3c1248cd581ba3bd0d5d7e20c4f2"],["/UIKit初始化模式/index.html","9ae9fe349ba31a7fc530f5e8d232b8ee"],["/Ubuntu18.04替换国内源/index.html","b337526535abf8e3b6f168de0637f024"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","25e7913f05a01a06a2b0019b6466221d"],["/Vapor系列 (一) :  Vapor 初探/index.html","7f6aedba6e87cfe974bf9c00f5b4be3c"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b81cd151e941c15fd5c7165903b4d300"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2659e07a537fdb485ed39438c9a4259a"],["/Vapor系列 (五) :  使用session进行authentication/index.html","66f8e39543e1390ee33686ff3b38c32a"],["/Vapor系列 (四) :  创建博客数据库/index.html","f6a21841ce2052410b61123cf9e8dc92"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3a320f67317301f7b78693cc4d053b2b"],["/WKWebView与Native交互注意事项/index.html","a3de24d9885943d2517959bc037f4263"],["/Xcode扩展/index.html","763cbcfbdb61f8deebb9e8a955d75539"],["/about/index.html","d1ccda5e7d74bb626a000168f44c6ac8"],["/appleOS的Networking示例/index.html","a2baa3e554a1212ffa06051556a00da9"],["/archives/2020/03/index.html","400b9de96bce2eeb95315d3568de69bb"],["/archives/2020/04/index.html","8b739d42aabe6304795ca47479bd1a7f"],["/archives/2020/04/page/2/index.html","20ea75ef787bc4bd3f4332d7140f6c8f"],["/archives/2020/04/page/3/index.html","2f1d9fd1a459bb40e26224f4beda45e7"],["/archives/2020/04/page/4/index.html","06d08c7bb0be40ef478fae53ad694a5b"],["/archives/2020/04/page/5/index.html","71407e320b73f11ef262dba5b178987b"],["/archives/2020/04/page/6/index.html","0a1f2c07f6c497b777a49964349c89ef"],["/archives/2020/04/page/7/index.html","a14be2a3cc7c255002a0ab7998e2d229"],["/archives/2020/04/page/8/index.html","a2fed5e4772469c068ce5b7d2eced85f"],["/archives/2020/05/index.html","c0a9a3da3cfaa8b04890206b6e276b9c"],["/archives/2020/05/page/2/index.html","836d2634beb2280db1b422b57acb0576"],["/archives/2020/05/page/3/index.html","3d972b0978421a19b89986bd9e2c6516"],["/archives/2020/05/page/4/index.html","ba97b002d98e9dbb361e7d094135feb9"],["/archives/2020/05/page/5/index.html","48a7c8e2fd3d0cb1f08e54288cde374f"],["/archives/2020/06/index.html","337d2f713f21b3fdd49637199461f997"],["/archives/2020/06/page/2/index.html","d61c50f9a35a324fda34edee8638d61c"],["/archives/2020/08/index.html","12a56372f6883340ad69c57a1c5ec781"],["/archives/2020/09/index.html","96acd764a7d88bc58d51be95e64c67c4"],["/archives/2020/10/index.html","284baa13cdc315efbfd2cc13f1cde639"],["/archives/2020/11/index.html","64f8a90e3acc974795c9d15371f4b2f2"],["/archives/2020/12/index.html","1a14300c16d8974f130416b92c6779ac"],["/archives/2020/index.html","884a36ecf651cb67ca41d92dc39af840"],["/archives/2020/page/10/index.html","426f9985cfcc41c1c8a94f7f873504a0"],["/archives/2020/page/11/index.html","82d5bda6fb1d140946a0618499549758"],["/archives/2020/page/12/index.html","d39a30b258c3334dc0ea23dd3854bfa2"],["/archives/2020/page/13/index.html","1f65caf55485f23b5b267127b3828ffe"],["/archives/2020/page/14/index.html","f72cc6d6198d47b8872eab802009bfc1"],["/archives/2020/page/15/index.html","eb6b9b4c225b0c3dcde89f22de600e1c"],["/archives/2020/page/2/index.html","acaa4362311ecb82630ffd718d18978a"],["/archives/2020/page/3/index.html","5662dd4cfe6979fcb778d3790a85ee6a"],["/archives/2020/page/4/index.html","a25e9a6a3e29f53521dc0ebbed3de025"],["/archives/2020/page/5/index.html","9a09e347308315488e6013d47d55939d"],["/archives/2020/page/6/index.html","a344cfbfb9f65721d2525bb39de9ef34"],["/archives/2020/page/7/index.html","e740f66f78c521d47f9c086669d3af6d"],["/archives/2020/page/8/index.html","e6b0f95b136e874861be1bbbae986714"],["/archives/2020/page/9/index.html","a6aa5538c21acf7207f449ea0dbfa75b"],["/archives/2021/03/index.html","d5292185359e3a8392f06aef2c94d1e5"],["/archives/2021/04/index.html","2ca9ce0c51d2b7ee5e322611a85c113d"],["/archives/2021/05/index.html","881f29bb111a19099fc19e1ecf5fd3d8"],["/archives/2021/06/index.html","4a182f76f01800fa4b74a80983409dd6"],["/archives/2021/07/index.html","e376bf2c6e24b55fd4432fe4bd036ca5"],["/archives/2021/08/index.html","1fd00e55489000e33e3a25d0b087a2aa"],["/archives/2021/09/index.html","4d1ada103c0ba411eec0c75cb4ec3473"],["/archives/2021/11/index.html","c23d6af65f73216a830e9c8e52445177"],["/archives/2021/12/index.html","c2a9a000aa92714e5288d86d8208b2d5"],["/archives/2021/index.html","3f41c9dc6c42909217bd78bdf5766e05"],["/archives/2021/page/2/index.html","42849b3c95a9c34fe925dcb91403a9db"],["/archives/2021/page/3/index.html","aa3dec7a2e31d1634d05523d80e90bc4"],["/archives/2022/03/index.html","5f3fa995d57b76e43a7e9b3047548bdc"],["/archives/2022/04/index.html","d6ab716238a9844f726fb897a6d1ca99"],["/archives/2022/05/index.html","db210d867e7cd1cda9d1ec0f48a6d59e"],["/archives/2022/06/index.html","4d453bea96273fbb7037a96ac676fde1"],["/archives/2022/07/index.html","85839a5d6fc96842615020a29430a6c5"],["/archives/2022/08/index.html","aa9525c6f8c2c0dc8517b5a54ecb512c"],["/archives/2022/09/index.html","6ffeed1190f06d75824787f82df8fceb"],["/archives/2022/10/index.html","b80eed8249d24ef078fc145b5151e91c"],["/archives/2022/11/index.html","6de5daaaa42452bcc4de4da07706440f"],["/archives/2022/12/index.html","4ac72bbcf8fd2f0c3925af1c95119063"],["/archives/2022/index.html","3cd35fd960627a09e1fa74c0604da041"],["/archives/2022/page/2/index.html","466d19099a1fc3ff85ae260249e60c47"],["/archives/index.html","16a5f6bf5736dcdd5c65c3ae87321061"],["/archives/page/10/index.html","b9e43e317eec3f84c6a0f851411ed533"],["/archives/page/11/index.html","b8b8b0adb1768045d2b58bccbf78446a"],["/archives/page/12/index.html","5f280f65f96df1cf229342737320d5f0"],["/archives/page/13/index.html","24c666ffa24812e4dc768fdfd986395c"],["/archives/page/14/index.html","b4afa125c5b2b7d8f4ecace5247b4a94"],["/archives/page/15/index.html","34082ed43e84206b6920303afb601d7e"],["/archives/page/16/index.html","c470d9e851144d84c24351e79f573b36"],["/archives/page/17/index.html","326471b13fbd16b305dcd1ee657f2755"],["/archives/page/18/index.html","12172633a5e44be7f154ac5757884267"],["/archives/page/19/index.html","d1cf37562a8a805a642cdf4e680d56a8"],["/archives/page/2/index.html","a7f3900f9443a50bddad1f56c54522e8"],["/archives/page/3/index.html","36beaa57593944f31ab89e57814b2b77"],["/archives/page/4/index.html","f6e63387325f9975f62e4e6c7c6e6a2b"],["/archives/page/5/index.html","d203975b9783f1dd740969ffb8c97d27"],["/archives/page/6/index.html","9e844c91d37072fe8cc0d2dfa9d6f665"],["/archives/page/7/index.html","0e7e495d38df764ddd885019c004a5c8"],["/archives/page/8/index.html","4d6aebdf968fecd4144180b8c1a0480f"],["/archives/page/9/index.html","f5dd5e3d29c0116cb0fe584cf7448693"],["/bugly 上传dYSM文件小记/index.html","5cc7e2abf591b66b9e830d15126e793c"],["/categories/Advanced-Swift/index.html","051ad70e890a5b26f43b68bf5da156f4"],["/categories/Advanced-Swift/page/2/index.html","71f0f5bf9af4c0e788f81b91adf1a3f9"],["/categories/App-Architecture/index.html","1ffb3ff3698a62a0974ed96afdca4d84"],["/categories/Array/index.html","c17668f384d19a47b39e151799e54508"],["/categories/CocoaPods/index.html","32d47349e62d8c60f76f8dcb948be087"],["/categories/Codable-protocol/index.html","2688a25bab3dd511a17d44143f5a43eb"],["/categories/Combine-framework/index.html","7d610d25db1ef8834db6fc5437b22778"],["/categories/Combine/index.html","d6d925f193db5cb99a2193025eeb3b04"],["/categories/Docker/go/MySQL/index.html","d91bf4e1bca7f218eb5fe74d5f7f54e2"],["/categories/Docker/go/index.html","6369e5179e2b810807358cf13b8bbac4"],["/categories/Docker/index.html","aae0a4dacc33f1e6f51303093ae8d86f"],["/categories/GRDB/index.html","5a5144b3709dffc8ce4d639a6813a7be"],["/categories/Go-入门篇/index.html","fc21c5a3cec9adcfcc74578ee8aa84a9"],["/categories/Grand-Central-Dispatch/index.html","9d14882eb34261d14091bafc5d6396f2"],["/categories/Homebrew/index.html","a08bb9598ccf243de05f8eddc07396aa"],["/categories/Linux/index.html","4d159387b58e416d62b3325a38176948"],["/categories/MySQL/index.html","91776d462f4fc1962967cc5a1cab0036"],["/categories/Promises/index.html","567defe334159a14ca66bbbeaa1e2663"],["/categories/Protobuf/index.html","42c2b03aa9a4b94b560eeb6f79d7c869"],["/categories/Result-Type/index.html","9528cde8da153d24aee33e97e77e83ee"],["/categories/RxSwift/index.html","147c6044279365562eec8be91a217502"],["/categories/Server/index.html","becb743dd1e6e576b09ff3e25937d46a"],["/categories/Sqlite/index.html","2cd9f19dc3043b28c12e9ba66fcddf1b"],["/categories/Swift-Apprentice/index.html","9c7e66dbda7f152b9420b34f44e18cc7"],["/categories/Swift-Apprentice/page/2/index.html","9602c5a17b1506b51504a080ae7aff29"],["/categories/Swift-Apprentice/page/3/index.html","dd844e7a240b584c3241d4e1ae35f801"],["/categories/Swift-源码阅读/index.html","034e78b8bb2fe6d0dc342a45da042f4f"],["/categories/Swift/index.html","e2fff4e5187d69209dbb18f12dc85204"],["/categories/Swift/page/10/index.html","62f135edc53c4f23d997169d22c12f65"],["/categories/Swift/page/11/index.html","45e5150c76898779000abcafdc98828e"],["/categories/Swift/page/12/index.html","7240a89a4511d41f5abe9f726bd15cad"],["/categories/Swift/page/13/index.html","56c472894fd8a16f90698fa56dc5f0d3"],["/categories/Swift/page/14/index.html","45cbdc063ec529c708d23f5ca2f142e9"],["/categories/Swift/page/2/index.html","2c8ff9caf494fcb05feda0d57fb3def7"],["/categories/Swift/page/3/index.html","151cc54f8de53fd2b3d96ef72764d971"],["/categories/Swift/page/4/index.html","acbe18ede857cdac03740dcb922bf658"],["/categories/Swift/page/5/index.html","bc260d36ae4a705d766bc91c54af58c5"],["/categories/Swift/page/6/index.html","62139e04b4fb409fba6cbae671a04822"],["/categories/Swift/page/7/index.html","d0257f6d6be535a0ec050bab65d28ec3"],["/categories/Swift/page/8/index.html","bc26e5abbe6dee2d46b336753f94107f"],["/categories/Swift/page/9/index.html","8d1c543ed83d2789a34cb217c8a210d5"],["/categories/Swift5-2/index.html","4c72323c5da01b5d0aba1facadbd4b1e"],["/categories/SwiftLint/index.html","c8468b1bc8dcee3c270c95a523eef91c"],["/categories/SwiftUI/index.html","11c75ee135ac07ebeac113d3b2223419"],["/categories/UICollectionView/index.html","e0e416a2f5142d29ca31f0da61b19731"],["/categories/UIImagePickerController/index.html","132b633b902eae3a41a53ae1b8bbeedb"],["/categories/UIKit/index.html","efe1dc7c798a6625c2e344d2bd3c4ebe"],["/categories/UIKit/page/2/index.html","a11a0aea2305bb60140bcc974bcd4176"],["/categories/UIKit/page/3/index.html","85eccfe52b26efa5331c9125fe925b6f"],["/categories/UIKit/page/4/index.html","bc134c71edec6208470130e96dc83e6c"],["/categories/UIKit/page/5/index.html","585357447aeff310f1061db36c7aa372"],["/categories/UITableView/index.html","eca1dd445bbc1f9736169754ea1f8a2a"],["/categories/Ubuntu18-04/index.html","f954d47f487b5891c93c4481285fb7c2"],["/categories/Ubuntu软件源/index.html","94a5e91c1dc8402af5c91953f2552ee9"],["/categories/Uniquely-identifying-views/index.html","578a1adbf6397161e57bfcf8c18a880b"],["/categories/VIPER/index.html","121e2977e3ffd58ecd7521e14f6d8b4e"],["/categories/Vapor-4-0/index.html","444c1210debb99c4c35ad934b4a866f2"],["/categories/Vapor4-0/index.html","9abec1e7cceee133176b59cf060364ff"],["/categories/Vim/index.html","47dfb0b4a92c4301ade800cbd76b6426"],["/categories/WKWebView/index.html","c8e0936bd8413ace6687cb0086914260"],["/categories/Xcode/index.html","d28a51c6152770ffc808b4573059ba89"],["/categories/appleOS-Networking/index.html","87f82c7183f6048b9daa01d4cc28a786"],["/categories/bugly/index.html","27cdb77eaf39c219fb67aebbb53b99e0"],["/categories/enum/index.html","f4a7a2913996e8d80aae88fec6279a74"],["/categories/git/index.html","a64d3378611980d9e6e30844d60e2083"],["/categories/go/MySQL/index.html","def23a972267884e1b8b1cabd335b1fb"],["/categories/go/index.html","6f11ce8160808d56d66ed91d9c978306"],["/categories/go/interface/index.html","575d3a33aded9986d233c23a422de7d1"],["/categories/hexo/index.html","f72bfdd9bf638bd41b2d6dfaa70e6968"],["/categories/iCloud/index.html","52f5729aca7aa2b45981a9fbdbdbf464"],["/categories/iOS/index.html","ecf26f6ed710fec9ea63cb9b16ddc9b8"],["/categories/iOS/page/10/index.html","e6a843c3ecba24222cea994898e765ec"],["/categories/iOS/page/11/index.html","b50a6bbafd2feaf37b2bec2c67d5d442"],["/categories/iOS/page/12/index.html","3b01cd53f6e405675ecfcde8c12940bc"],["/categories/iOS/page/13/index.html","a715a070ec35c84e76def238065c6060"],["/categories/iOS/page/14/index.html","532ee966b724ae6adb4ad82ad82a4cbb"],["/categories/iOS/page/2/index.html","2ada05bc91842b72c178c84e1da2cf0a"],["/categories/iOS/page/3/index.html","b244a42560e631aa4f60769cd2d1824a"],["/categories/iOS/page/4/index.html","fb4dc7d52b5b057b44a36849269c224d"],["/categories/iOS/page/5/index.html","0ad46e4dbd32ce6ec6ac09dd71e6810d"],["/categories/iOS/page/6/index.html","365b1dfec2923efdc513dc02a73da8f0"],["/categories/iOS/page/7/index.html","68213854ffce83867cd77a28f9557d6b"],["/categories/iOS/page/8/index.html","da1e47c84882cc542832fcdfbf3d305c"],["/categories/iOS/page/9/index.html","2cf33d56fb3a2bcb5337a1c268e1973d"],["/categories/iOS/面试/index.html","f98b9a921f2bb93a22877d3daa898d9c"],["/categories/iOS面试题/index.html","b4f037b5b2a9254c35d477e84ef9c079"],["/categories/index.html","44f695622511035bc8fdf718163bdbf7"],["/categories/random/index.html","e37fb62494b204610ab131d3fe665af5"],["/categories/三方类库/index.html","f40c58941b0cce6d2e717de463404fce"],["/categories/函数式编程/index.html","1c14ef3177cbd66b4af1077b0adea498"],["/categories/子类化样式/index.html","ebcd1352f61c336f95699170e1b3ac33"],["/categories/小程序/CSS/index.html","36c2eca0a46822e74a70faabf8ca74c8"],["/categories/小程序/index.html","c48eb2ef3c4451eb017d3054e37bf012"],["/categories/开发技巧/index.html","97a1cd88f2ce9ff39d4d00751a7673c1"],["/categories/开发记录/index.html","9a40a2861576300f3ef10e54fbd22926"],["/categories/数据库/index.html","39a8742e1fc611a0d1d27e3f23146873"],["/categories/架构设计/index.html","28577c8f267d4ebcf01a2dc00b6d1a8e"],["/categories/测试/index.html","0618b749c2773d29ebc429b3bae197f3"],["/categories/用户体验/index.html","46f051d24dbbc2b340e4a13298b32947"],["/categories/用户协议与隐私政策/index.html","e888d81321e9671b77bfbe572dfab702"],["/categories/组件化/SDK/index.html","fceb944e16f7dd64c4b9e18d365b920d"],["/categories/组件化/index.html","a4ef5abbd27cdda4610b842119aa1c77"],["/categories/组件化/模块化/index.html","8e88894472e7cac7b64104b1e7b47568"],["/categories/设计模式/index.html","946388a9b3003d487e50a7af4f7d7c23"],["/categories/设计模式/page/2/index.html","e096e8f765bcbf667244d9273d669c59"],["/categories/设计模式/page/3/index.html","fcef6701ebe6f16ebe1d799dd667e834"],["/categories/逆向/index.html","d342d389257b824744d591fb35e67ffb"],["/css/main.css","05ea5aefd209376036638401d6c4af70"],["/go moudle 导入本地包/index.html","44913ab884b99712ef2466a765b545e7"],["/go 库专题(一)：gin/index.html","acc8677724aa7d2c1abaa29d8e51d207"],["/go 每日一问/index.html","f820396d2dfdd8defa4ca0261c69d45c"],["/go 项目实战：gorm 数据库框架/index.html","d1f9baa9b9099efaba1be039307acdbd"],["/go 项目实战：zap 日志库/index.html","2a2dc501b0c2b4c3712cf19d39ee4d1f"],["/goland 学习笔记/index.html","f1abb8a257ce9ca64d929d40ab57d45e"],["/hexo部署失败/index.html","abddc3b3578f0c6c0c471cc259fd4d81"],["/iOS 15 适配/index.html","e8b8409cc7e08988a6388bdb3aae8ea5"],["/iOS VIPER架构深入实践/index.html","9bb4c09b509d8b46e72fe16b7707b4fc"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","ff6bff309f457f5c107842a879a808a0"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","6f45ca4aaa3affe297f88b0e6a56bbfc"],["/iOS 自定义视图，输入表单和错误提示/index.html","4028e0e108413189390bdc03167d233c"],["/iOS如何使用iCloud文档？/index.html","4ba9c8296174d1b9045a180d2f6199b0"],["/iOS子类化样式/index.html","cc2c7a670e33c82cef9b3ee9f13ff8e8"],["/iOS开发记录<一>/index.html","3bfda6c15d34c882bd2f5d0d3eb19fc7"],["/iOS自动化布局编程/index.html","224a32fce185a12752b7ae0b84ef5c72"],["/iOS自定义转场(By Swift)/index.html","e9087017ea4216b8c225df8d63ce3ea9"],["/iOS项目架构：使用VIPER/index.html","38cfa54df733a63dfdbe35d61e6c2276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f4b9fb86c2ec2a0fb377ba32f2b24b36"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","aac1a7ec59bc665f25e7691cba0d5e6f"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","7d0388831cb8ecb9bc14c1d835d7f2b8"],["/page/10/index.html","e050bd2d110496582f20d31273b6c348"],["/page/11/index.html","813bb32a7ae730513aab4a1c57053c44"],["/page/12/index.html","0586a124bc4f4904cf774f1e8e2cc851"],["/page/13/index.html","eae24f776e567f90bcb0a75b48857de2"],["/page/14/index.html","b8cdcef03d711addcaa876b74c82e2ea"],["/page/15/index.html","5eb0a4258f415d2284371d67b53363f5"],["/page/16/index.html","f68c4714c255e41809da46974ff19b21"],["/page/17/index.html","d74c66aee7ef513274d584d1897a1bce"],["/page/18/index.html","bce2dc435879a18cc871ea66dee46f93"],["/page/19/index.html","fbc1430235c15a5022f1dd9ef2e67742"],["/page/2/index.html","39f9d85eb8b77bedd139537a08252a1d"],["/page/3/index.html","e8dd984886e320709d6f21dcb053cbf0"],["/page/4/index.html","b844a9f75a4483127674a7700914efbf"],["/page/5/index.html","5be9545b56fecb8ff76733bfe5d1b23e"],["/page/6/index.html","3e6b32d23db918f4e5c96fb9b207a663"],["/page/7/index.html","5ef135c90ae8560140fe1505a589999f"],["/page/8/index.html","b72d5ac867f5c3161e00e95d018615e5"],["/page/9/index.html","85a0731aadedd528958d82d4e0930efe"],["/schedule/index.html","74a3375bea2a76d38ef39cc717f3f540"],["/storyAppPrivacy/index.html","52d1f22bc3739e79c04cb2b17622d083"],["/sw-register.js","d26e3574498bcbeba7de086d063f3e0b"],["/swift 专题：函数/index.html","c88760b3a6b2c957f441cabef8fe547c"],["/swift 专题：闭包/index.html","086862652d85c947acb5bea632a07a18"],["/tags/Advanced-Classes/index.html","ba146c82c345f4fb3cf7bb8a2f4660e3"],["/tags/Advanced-Swift/index.html","bc7a9619a38ace93a25ea2bc70ff1cd7"],["/tags/Advanced-Swift/page/2/index.html","708d6d5fa54f685d98bc98710e4c36c8"],["/tags/App-Architecture/index.html","74ca23430b71a3237335232575eda809"],["/tags/Array/index.html","d858c84ace3ad5e6e0f4844df4a76760"],["/tags/Arrays-Dictionaries-Sets/index.html","6dca50aa98084196b7cfd9704cb9a5c6"],["/tags/Authentication/index.html","9d2070adaa1078291c42784d2bd736a7"],["/tags/Build-in-Collections/index.html","6c90aba26e19c7ceaff3fd44993828ba"],["/tags/Building-Your-Own-Types/index.html","bbddf9b1619c212966be75fedb979b92"],["/tags/CMS/index.html","c3ba9f6f0cab830c31333d84e134061a"],["/tags/CSS/index.html","f8ce5789ada459a3152007ee759768f9"],["/tags/Classes/index.html","41435f8d6877758f1e29123460795ca7"],["/tags/CocoaPods/index.html","e47c285bacce5cdc11d5a9feff298c8a"],["/tags/Codable-protocol/index.html","cef087ff574be5033cc39bca6a45494f"],["/tags/Collection-Iteration-with-Closures/index.html","e3cb049a116337ae6046f8e893ee202b"],["/tags/Collection-Protocols/index.html","819db4a51b821de02a7695d34af98912"],["/tags/Collection-Types/index.html","0e97556e98445f8b1aa5eb1dc66191b8"],["/tags/Collection/index.html","62d180a09291f36a7f434162f0f79988"],["/tags/Collections/index.html","d998e3b01f1026ce09eb4985fa769107"],["/tags/Combine-framework/index.html","92317a50fab86dad3b3d38b0b7a01e0b"],["/tags/Combine/index.html","efa497df38664845ac2c0876991b99a0"],["/tags/Dependency-Injection/index.html","7a6e0c0d3bb40309e30bd79b39735e89"],["/tags/Docker/index.html","cea4a50e0f54900c3c494fe345255578"],["/tags/Encoding-Decoding-Types/index.html","71bf8368c869188da750fafea7e44a2c"],["/tags/Encoding-and-Decoding/index.html","3260e3f677106d8e27f08aca44f3a51f"],["/tags/Enumerations/index.html","fccc1f56f91d56c4eab9bd849aee6a1e"],["/tags/Enums/index.html","7ca71c7373b4a8028602bed22327f9d9"],["/tags/Error-Handling/index.html","69b4ccd187b06bf5f761fbbbc179a3d0"],["/tags/Functions/index.html","a69be84d4fb3928036f0543365098157"],["/tags/GO/index.html","70c46078c061e9ed077f0ae44d5ebc19"],["/tags/GRDB/index.html","eebc9aabefcffa71236df00318e8d4d4"],["/tags/Generics/index.html","5cb625ae3079561e07d7914949655ffc"],["/tags/Grand-Central-Dispatch/index.html","8b8d9ae2bcb08d05481b2a5b6ff7b2e3"],["/tags/Hello-Vapor/index.html","72ee09964db6b7bbb9b00a76f5374c0a"],["/tags/Homebrew/index.html","b6ec1118f70b83914e0deded2e9fbe1c"],["/tags/Interoperability/index.html","51883647a3e28920db3523450b496428"],["/tags/Introduction/index.html","96bec3a66b8157a5e712e1ff88c1e994"],["/tags/Leaf/index.html","8d6eb0e2a081dd2c2e6b76087743b20b"],["/tags/Linux/index.html","37930853f16adfb07fe4a3499f468622"],["/tags/MAC/index.html","1463a763d9db97964e926c7c38581a68"],["/tags/Methods/index.html","ca3c721f55a7d427b1d8c0d26c9e7f58"],["/tags/Modules-And-Hooks/index.html","db7297a63f98f6f72c3f6a49a58196c0"],["/tags/MySQL/index.html","7122bb24c9dfa803c0e0aefd44ad4ad3"],["/tags/Optionals/index.html","8e0727f6c067f94bf286a224a22b55a4"],["/tags/Promises/index.html","55600e8a100ef739ab77a0b5eccd4a4a"],["/tags/Properties/index.html","4cdf63550c36bbd9b3d6d37675ae223c"],["/tags/Protobuf/index.html","e4177b3f89bd280678409a4dc5813c24"],["/tags/Protocols/index.html","164d9bf34476c6fbb23bcf1a6b58b51b"],["/tags/Result-Type/index.html","186f50b874f4834072541a1e291fb1c3"],["/tags/RxSwift/index.html","620a143b266513047a6534b3a7f01718"],["/tags/Server/index.html","886e34088883d9c16a482a49326cb568"],["/tags/Session/index.html","12430dfd04f6f1142ed411face444037"],["/tags/Sqlite/index.html","cbb7a64852992a966857fe12193430b4"],["/tags/Strings/index.html","e9d2db58f7ba6f8ecdb36a6859c0151a"],["/tags/Structs-and-Classes/index.html","283108e382a73d649e2aa1a46ef69ca0"],["/tags/Structures/index.html","cdd03867a3a0023af6acbf12676e77cf"],["/tags/Swift-5-0/index.html","73d5628dab0c627e6b8d9a495e1e0795"],["/tags/Swift-5-0/page/2/index.html","1aa4d11c0a326857f431a6b506afb504"],["/tags/Swift-5-0/page/3/index.html","15aec184058c3a5c73c330c341427b62"],["/tags/Swift-5-0/page/4/index.html","d590e4b3709098c2da68e9c8625736b8"],["/tags/Swift-5-0/page/5/index.html","4a391abdabc811aaac60969792586d0d"],["/tags/Swift-Apprentice/index.html","f82a82fd6a7ee75440c89bcd8c247cc1"],["/tags/Swift-Apprentice/page/2/index.html","5d7f3b5d379c9fd81fe3d449393b9ef2"],["/tags/Swift-Apprentice/page/3/index.html","7dbf77fd4d3d7f20c029060653e1e9c8"],["/tags/Swift-Package-Manager/index.html","ad1830db57d4c2dddd03c92d04e56e70"],["/tags/Swift-源码阅读/index.html","59edbc79a0956119836bb8849ccebb4c"],["/tags/Swift/index.html","07a1055e3d73fbf03d2686c518cad04b"],["/tags/Swift/page/10/index.html","2ba92333dd8becd0aa8b9a207ab99c68"],["/tags/Swift/page/11/index.html","3fcb06e8958a422ce9e1f09080c1f50d"],["/tags/Swift/page/12/index.html","0c1035bf0c824a054e1adcb79a556734"],["/tags/Swift/page/13/index.html","8177dca7805c3ce63156b4d7875f43d8"],["/tags/Swift/page/14/index.html","9f04fd164f834a68edef8eb1a8d03f91"],["/tags/Swift/page/2/index.html","25cbf5d78b1cf8a3998f71cd3f478f1d"],["/tags/Swift/page/3/index.html","6be4a0ab470c221ca21d2f637c6336b1"],["/tags/Swift/page/4/index.html","3262475edac0f3bed0f75dabc6d8cae5"],["/tags/Swift/page/5/index.html","3355ec51ce7da3b8d6c90ecc0a905f55"],["/tags/Swift/page/6/index.html","9fe2fde5ad891068273db8fe922f9a0c"],["/tags/Swift/page/7/index.html","e45b25dd054f84882fb0e900752510b8"],["/tags/Swift/page/8/index.html","55797a443f7a2ca3eb295c38bd7f29aa"],["/tags/Swift/page/9/index.html","a6bf0fc16f978eec68b9cb7e9d4cf074"],["/tags/SwiftLint/index.html","f458d01c5e8da7bb7598dbb6d4c3f094"],["/tags/SwiftUI/index.html","65c6526b57cbea9310bbf329799a539a"],["/tags/UICollectionView/index.html","0d35cf73c3ab30aab8c084650246ebc6"],["/tags/UIColor/index.html","02ed0a2b95cf384d8f05fa9cc4ad3efd"],["/tags/UIImagePickerController/index.html","2677206b2d36c1ac1832ca4f2b811ff5"],["/tags/UIKit/index.html","63c9325d4de6d5bfe0b4663f2ab2d2dc"],["/tags/UIKit/page/2/index.html","f7599c606ce4e15384a29b5ad8afa893"],["/tags/UIKit/page/3/index.html","856f88aed4431a613eab97f8f72476d4"],["/tags/UIKit/page/4/index.html","fc2c9f82e212ce4cce93e0882dd5dda1"],["/tags/UIKit/page/5/index.html","1700b0fcba320c0fcf327202c3b33017"],["/tags/UITableView/index.html","974df6e05d178e50326e9e6fae66d47e"],["/tags/Ubuntu/index.html","31ece12ec6de5bf0b981e4c28d851d0a"],["/tags/Uniquely-identifying-views/index.html","18e5c521baeb97848ed7712a3ed86751"],["/tags/VIPER/index.html","d5434dcb138019e4da56c1944a16148c"],["/tags/VMware/index.html","21be34f2861c417593fed327f24180c4"],["/tags/Vapor-4-0/index.html","c2d53ceb110fb3fe1a4bed24c71d0f7b"],["/tags/Vapor-初探/index.html","fbdb4566a4bf067df9b800045b8b2dd0"],["/tags/Vim/index.html","9ef1f667849fad74fd5b7bd40ec3b004"],["/tags/WKWebView/index.html","bbcd515585ed40054f2b85db4901a4ef"],["/tags/Xcode/index.html","9992c9db49619289ac1ad1dc9e38a210"],["/tags/appleOS-Networking/index.html","b11d616affb8db0155616c39aca42d66"],["/tags/bugly/index.html","429780670c74a1e35744b87ad1119cf3"],["/tags/enum/index.html","d3dea4da64418eb68a78c3604c9bbad5"],["/tags/gin/index.html","540ec315d0fee740baa826739ce2c205"],["/tags/git/index.html","ab2c06510497d2c44a18e9ed7d2e6168"],["/tags/hexo/index.html","538740f44b808d84e25cba69a87a58f2"],["/tags/iCloud/index.html","d6110e2cc118e4e17c128662ecd74a47"],["/tags/iOS/index.html","09006218b566c75c8c3589824a49d0bf"],["/tags/iOS/page/10/index.html","719bb9d7a3ad13d4af0488a7f8fb2ac7"],["/tags/iOS/page/11/index.html","d12b5958a51dcb9481bf02339feb2055"],["/tags/iOS/page/12/index.html","7a406e7f3883b4268ff1d198cd9642eb"],["/tags/iOS/page/13/index.html","75dfd6117353ee7ec83e253f23b093c4"],["/tags/iOS/page/14/index.html","80894cdf2bae630268f52ae6e2335beb"],["/tags/iOS/page/2/index.html","26118afd2cadbfcfc4076a1756e65d37"],["/tags/iOS/page/3/index.html","a48888b82247739608679c40c466d767"],["/tags/iOS/page/4/index.html","5fe320f0713da7d39bd887cb0c61e454"],["/tags/iOS/page/5/index.html","dc65ad07f02b8a84479dffb80f702cd8"],["/tags/iOS/page/6/index.html","620e74c5c54fc10a60444aa9dc6b6b74"],["/tags/iOS/page/7/index.html","43f4c4e919bf9b90f6a5ef204aa5d2c4"],["/tags/iOS/page/8/index.html","2c6d7e279ca7762e86f09c4f3d41a3cb"],["/tags/iOS/page/9/index.html","64530ff35edb9428ba1f0ffba7953e4d"],["/tags/iOS面试题/index.html","85104fc345a4d45d60af2bc07705693b"],["/tags/index.html","89dab7c3d9e5e96159708d6ffc26559f"],["/tags/interface/index.html","8bdffa2f3c9d4a8e7f20ba36bef6aacd"],["/tags/non-optional/index.html","cf099e214a3c75a1d6c017fdd60296e7"],["/tags/package/index.html","51d594443b61cff9f075a17b94e2174e"],["/tags/random/index.html","1edb10684ecf5e1d90cbf6fb247cd014"],["/tags/transition/index.html","df618132ef734c5b6de8300a4db6f3ac"],["/tags/三方类库/index.html","82c0b65c42841577c1e0f9991ee52a05"],["/tags/依赖注入设计模式/index.html","a4df769e63d6868adccced2167ac3bed"],["/tags/值类型和值语义/index.html","744df330d34c3e374477cadbd926da1c"],["/tags/内存管理/index.html","bc21da1a0a4ba21390e09940bfd3813f"],["/tags/冒烟测试与回归测试/index.html","2beace25a85e76d36d9f36b2d1c5bc7d"],["/tags/函数式编程/index.html","a6c84e02f4fd289cdcd7919c7cddabd3"],["/tags/创建博客数据库/index.html","d78553695c341037284f0684421ade16"],["/tags/初始化模式/index.html","27220459f385d49f80c2e377ffe038fb"],["/tags/单例模式/index.html","c5e764977e98f24edb377600ec8c2622"],["/tags/原型设计模式/index.html","e7c606d7730a2819c253c7b07c2b107a"],["/tags/命令设计模式/index.html","67fa89e07639333aa22e6494ebd611a8"],["/tags/基本控制流/index.html","cbbd49285bd2ae78d7ce203ab73775de"],["/tags/基础语法/index.html","5b1ab19be3aa05fab9f4be62b01f95bd"],["/tags/外观设计模式/index.html","1258736fcc05936d261aa79d17a1fce3"],["/tags/委托设计模式/index.html","e1ed7dc521ac058055a5884e2cd86720"],["/tags/子类化样式/index.html","2c348b4f568147070aa0d39ea7bb91f0"],["/tags/对象池设计模式/index.html","b979771942ff48d83adf7559df364794"],["/tags/小程序/index.html","3055b59208f57d0f4951bb3a767bf7f1"],["/tags/工厂方法设计模式/index.html","fe99b93dc3fe2688508617a5af8d8b41"],["/tags/工厂模式/index.html","c303fd0745a066705a973f094ab72af1"],["/tags/工厂设计模式/index.html","49d8ac7880575eb2583ecbd0951b26e2"],["/tags/开发技巧/index.html","d07d025bf11cccd020d1ed6dee08ac27"],["/tags/开发记录/index.html","636078e8440471cd44f47bdad18c2b25"],["/tags/懒加载模式/index.html","368c65edbddfe35f9b54be15f8e8f213"],["/tags/抽象工厂设计模式/index.html","e218e3a0352a4493666b3dc1224e502c"],["/tags/数据库/index.html","5b37a77f08474901c43e16a7124157d8"],["/tags/构造函数/index.html","99b236195e07b60e9c9588a4f70ebc29"],["/tags/架构设计/index.html","1b521589b66990ae707249f099dcd3b2"],["/tags/模块化/index.html","5a7451cec4362182b74a8ea1dfa04918"],["/tags/模式匹配/index.html","94cb7cb26ac0425d70ef0cbfaf832a9a"],["/tags/环境搭建与验证/index.html","4e1a272c29626c7c5eb25a2aea9ac12c"],["/tags/生成器模式/index.html","1e955d16f28ef2fe95950952f4efb062"],["/tags/用户体验/index.html","2965a817c855fb6c25a31cf62c18d6ec"],["/tags/用户协议与隐私政策/index.html","44466824a9db776706ce0f38d19f71da"],["/tags/类型与操作/index.html","3d791352f6e2aecdcd3b5c3e73b44a3d"],["/tags/组件化/index.html","c8097d13d66ba3433cf2ac3d1517df76"],["/tags/自动化布局/index.html","1f49e84055f03337f5e9efb3efc3f1f6"],["/tags/自定义UIView/index.html","eee709e146d679afbe4be576810bded3"],["/tags/自定义转场/index.html","53e61835d2a66dfd5a0cf47e74e38565"],["/tags/自适应布局/index.html","b576efcb51aa018588f41b8fef12eb4c"],["/tags/表达式、变量和常量/index.html","56f2b8aa229029a7369f5fb1c53277f4"],["/tags/设计模式/index.html","4b6078514b208ee07189be7857120ccf"],["/tags/设计模式/page/2/index.html","e3e053da80ecf8952e9befb99ceb3450"],["/tags/设计模式/page/3/index.html","1a1da288b33c3ca5c273d00303627991"],["/tags/访问控制和代码组织/index.html","044912fa37ccdf6e52822cf85b1699fe"],["/tags/运算符，下标和键路径/index.html","45c2be696406a5499f38e3c7a1c8d0a5"],["/tags/迭代器设计模式/index.html","a614cb61bf9f0faa30033fb45c7b23c0"],["/tags/适配器设计模式/index.html","458a3d4235299a9699ab73fdabbf2604"],["/tags/逆向/index.html","4c4c09356a3e822e2e207969fc31bfde"],["/tags/错误处理/index.html","5fa94ad1967525852aaa3077945c373f"],["/tags/静态工厂方法/index.html","90b0d4d0f189698c64c4fd593d1a07e6"],["/tags/面向协议编程-OOP/index.html","2e1cd5762a6dd3014d236877c1a7eb5c"],["/tags/面试/index.html","b8bcec51c2daeb9d117ea77049a4d77d"],["/tags/高级主题/index.html","ef738f9cbdbff09d9e8e692a49488e82"],["/tags/高级协议和泛型/index.html","c2983589daeeb869005f109b27d9e0f8"],["/tags/高级控制流/index.html","a25a2ce1b06b761d9916aea8ec3b7dff"],["/xcode 常用的快捷键/index.html","cd9827751ef7e8f8199160ef7e4c1a3c"],["/为iOS应用构建输入表单/index.html","b68a827f5f5d8af34bf13630fd99cc19"],["/产品开发的幕后花絮/index.html","6a4e126db54ed5439e307391d7663ed8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9cdf0ac28249c05e1483dbee80730934"],["/冒烟测试与回归测试/index.html","f54778dde1820997f11c895825cb637c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","3768f44d10b9f0679c99472938f8e4bd"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d9260cc90470436f7dc1f9f08a67e310"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","80f817d3fbce409c142a4e654b92f698"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d900108796807b683ae14a06a9959a87"],["/在Swift中创建自定义集合/index.html","98e8e25b01a6c2fd9b2a262e063fb209"],["/在Swift中处理非可选选项/index.html","5c3d9132724c545166a8ec8f0a79efea"],["/在Swift中生成随机数/index.html","d675e75c5309451c602b98dee2e8f552"],["/在Swift中重构单例模式用法/index.html","03d1ac137edfac37ba2fb35b579c0938"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","605defce2dc0adbfec239ceef13e0694"],["/如何为VIPER编写服务？/index.html","4ca5f043873cf455d11d66ba0ec9c8fc"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8c60540419d2c903529b45344203105d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","2b947d22ce8f0a98db8c62e50f37968d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","47efac0f11f70fb0c2813d880a659746"],["/如何使用VIPER构建SwiftUI Apps？/index.html","dfc467351cd32d9fff0f653a6f62f3ab"],["/小程序: [CSS] 布局小技巧/index.html","293cd16ab3dab792d1239aa72d171848"],["/掌握VIPER架构/index.html","f8e16aad14430bb1ca4eda077a0f9797"],["/揭秘 WordPress Hook 系统/index.html","1ce742e964ab3b07f486d06e97501910"],["/比较工厂设计模式/index.html","aa1b4891b03d5d1296cb12fd7ab03782"],["/深入了解Swift中的Grand Central Dispatch/index.html","a71c1e2449ce76cbf29d640ccd9ea801"],["/深入研究Swift框架/index.html","7eb64a24eddf69b283cc2518a2a253ce"],["/组件化插件化与模块化/index.html","b4c6911e4d8046e6ae48c91fa7519f5b"],["/组件设计与SDK开发基本规范/index.html","07cb47742fed67fdd8a5efac64a0c247"],["/适用于iOS开发人员的VIPER最佳实践/index.html","4fd25a7f394ae29713cd8bf355db1657"],["/选择Swift而不是Objective-C的5个理由/index.html","d659fc38e5a6859d6d38aacf274be73d"]];
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
