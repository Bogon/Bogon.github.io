/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","b2b4aff72c8d4ad64f9e7c497025463e"],["/2020年iOS面试题总结(三)/index.html","87f46384fbc0f00ca4a013dbc084ae52"],["/2020年iOS面试题总结(二)/index.html","0b08bc968f5cedbc7ce5b5211cdbc7a1"],["/Advanced Swift系列(一): Swift 简介/index.html","4b4017eead53d708a3f1b0d816448a40"],["/Advanced Swift系列(七): Strings/index.html","736bc4370229746ba854776dffbd10d8"],["/Advanced Swift系列(三):  Optionals/index.html","2b3ab30ee73bc1a047d2b0160c9a4fba"],["/Advanced Swift系列(九): Protocols/index.html","b9b6731946b4b79e751050f49b2af31d"],["/Advanced Swift系列(二): Build-in Collections/index.html","7f290c16e46c5ba0335504db7cbcf96c"],["/Advanced Swift系列(五): Structs and Classes/index.html","5356dc978bbba08bbab08054d8aa412b"],["/Advanced Swift系列(八): Generics/index.html","a029fcc3c9f5eb383470f999654cc84c"],["/Advanced Swift系列(六):  Enums/index.html","9b4cbc3c9b226430e656db864be6e670"],["/Advanced Swift系列(十): Collection Protocols/index.html","5af190bee8340e88f0b2819fa71e9bf1"],["/Advanced Swift系列(十一): Error Handling/index.html","6e9e52f127e9bce2521a975e2da01003"],["/Advanced Swift系列(十三): Interoperability/index.html","4c06ab41443de844b637163ed9bf5b17"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a8bdc90a86383fc695c52410aa0a0784"],["/Advanced Swift系列(四):  Functions/index.html","af19892a17c8dbbc0c4f378f44401ba8"],["/App Architecture系列(一):  简介/index.html","92a2458f0f90eae29f8eb2153945ee02"],["/CocoaPods 设定版本说明/index.html","cd9c00e1b5f26560ae84c6c7b5fcdc86"],["/Functional Swift 初探/index.html","9779a1e9ab279c1fb753adae76254a5e"],["/Git 使用小技巧/index.html","719307424e82d2ff7e7272af25f4d86f"],["/Go Protobuf 初探/index.html","6f8cba9aa170618059797063e2b745aa"],["/Go mysql Tips/index.html","89b90d9442401b9a6e474c9336c01c0b"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","172c070a4b0d96812f9434973f13c41d"],["/Go 入门篇：2、Go 实效编程/index.html","1421e4aa7d8f5101a75004043efddc90"],["/Go 入门篇：3、Go 重要概念/index.html","78124050bafaaf8bdb1f705d5b4af5dd"],["/Go 基本语法初探(一)/index.html","54ade88e1494e69713f517035ed068c6"],["/Linux VIM 命令及操作小结/index.html","3ecc8afe9e033abb62ebb221765b8269"],["/MySQL Tips/index.html","aac0e7c107770c3fdafd026e4620c9f0"],["/MySQL 基本操作/index.html","034045c155b726551f2260a5a5138e73"],["/MySQL-列类型和数据完整性/index.html","2f55f52b48107c2774c97e80930d27e9"],["/MySQL-数据库设计和查询语句/index.html","f288614bd4ad9199d3b045a506020328"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","4f50dd8ce7e7ed776a6275022d851e84"],["/NSCODER和SWIFT初始化/index.html","f006e8c268d5d408c98b2fa7fc8a0905"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","01a1f65bbebe7729943c7b4715a54135"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","80830f20c789b4bf4d60bf02c2eb9908"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ccbafd8f4fa0e7d6ab14d9e6ce25b12b"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","1ce5fa95b6c502ac16fae378efb9efb5"],["/Sqlite 使用Tips/index.html","091484c93ae840990a421de47724d765"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","37ecc27fb4459dd1a8499868f2adce1a"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f5b696d8b3174bd9713b6eca083143ad"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","108cc55e976e6b50debe906fd772e422"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","db3ab45dcf3ef562e7739b12e37aef7e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","3b1be919330817a13b3248261a6a83a8"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3de7faa2791d131d14009869c33e923d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","26f01c0ff65685e55b992b70f02866ff"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","4c7dc958a8de1106133305b99ea76024"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","affb171bbafbbf703a5c38d5195ef819"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6b47ab349f0bd6f32de82a4a540239a2"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","a60baca05c16b9759a079137a5c5f3b7"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","3d8646613a8de96e7610be12c19a91ea"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","246ab7d85f2ead29acaa3c6b071fc67e"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","8c1351be28eb6fa2ccdc31d0c85bbed7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","bf818a4ecf9dfd6910338dbf2fcb55a9"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","ca32c0873b6cc31703e55d4daa618232"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","7fd009f47e0e8ae1a5a31df98403010e"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","02e87c8294215c1428319dbc3891bb27"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9906202d5c51daaf5f6de644ec420643"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","36bd2d8c62e03ebfd400dc8d197c24f7"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","a6289b83f2e17961b480f8be9506de96"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","74734ba1748b8b3c87912cff0879122c"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","4bdf22569d95255aee0b838bcd567050"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7607962a44e1cec85ff89da91370dca7"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","2227ac435be41baf4c5e0d7e4670dbc5"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","d1f85b3ea76b94a3539b81ecad92e01d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","d433edd3f0e178dc0455128ad4ebf60a"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","11b99efd4807a78d339ec3fa82b38ea0"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","6dbbd9930ee8bca232c78599072536f3"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","70efb69cada01e598e7469853c37d7a2"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","ee7ca9627bb3186615c982281d07a33b"],["/Swift CompactMap vs flatMap：差异说明/index.html","acf7454ff043abd1c9465253650b8655"],["/Swift Grand Central Dispatch 深入实践/index.html","0df6c8fca625fca5af671845a17568ec"],["/Swift Lazy属性初始化/index.html","d3d9744ada0d7f52f41e4b4bb0b69849"],["/Swift Promises 初体验/index.html","96a7e51c1807e2ee561114834cb445d1"],["/Swift Promises 探究/index.html","de89e4f67ca7396ed4d0a68cf92c6a2d"],["/Swift UICollectionView使用指南/index.html","c4b12dd24e006d6447efb5f3760b7c20"],["/Swift URLSession && Combine framework/index.html","e1117ddfbdf58efee9766de65d44229c"],["/Swift tips/index.html","2329596c2b21775fd28a5061db4df080"],["/Swift 三方库：GRDB 使用指北/index.html","7a8475f9bccbc4d0e3ff0579166e05d8"],["/Swift 唯一识别的视图/index.html","800e7c0266cffd7d1c1407f722a04517"],["/Swift 如何学习现代UIKit？/index.html","ecc1de5497a6dfe912e6b95761760399"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","4e271d68da662a1c112840914228db38"],["/Swift 用 compactMap 替换 flatMap/index.html","49e6acd00ad4dee9db8a2dd1e8b26970"],["/Swift 选择和播放视频/index.html","003378bfee4b20a14734cb371ee5edfc"],["/SwiftUI 系列(一)：1、 简介/index.html","5ad36d3201944d2ebb6a02c222a97b40"],["/Swift中UIColor最佳实践/index.html","09bd163ced627db45b09c64bd0b5a6ca"],["/Swift中快速简单的工厂设计模式/index.html","cb5b749cfd95fb8a551237e458b710e5"],["/Swift中构造函数与静态工厂方法的比较/index.html","a42a321ac74c86edd7c364fc3095c2c2"],["/Swift中的UITableView教程/index.html","edcd37bcca140a878dbd34f2ef471498"],["/Swift中的懒加载模式/index.html","a91c9e6781cebb380a46b294eb1bdf7b"],["/Swift中的模块和挂钩/index.html","a12d91647353cf957edad4d7635d74e3"],["/Swift使用布局锚点添加约束/index.html","92113f45415bc97b146f6d4fc47d438d"],["/Swift依赖注入设计模式/index.html","b9c4054723c9a6d9505c88e0d24ba920"],["/Swift关于Dependency Injection (DI)/index.html","8189801bf0b17f42ba7faab1e0fe992b"],["/Swift初始化模式/index.html","1a10deb783d8e7911beb62d5cac511f4"],["/Swift单例模式/index.html","ad796742891017f027f0f2ce43e5902c"],["/Swift原型设计模式/index.html","40ea068b317d5c16294e26873754d326"],["/Swift命令设计模式/index.html","fbe2bb4f9d7384551a1413e0c2ace48a"],["/Swift外观设计模式/index.html","b58127ac6a511491b1aef9c53efb76f3"],["/Swift委托设计模式/index.html","315007e0a4cfbe937a9ddc3244cb84e2"],["/Swift对象池设计模式/index.html","25a8a62319789498f22dd05f8eac4c6c"],["/Swift工厂方法设计模式/index.html","1428e9c68a176efcdd07ff7e5687d26a"],["/Swift带闭包的懒惰初始化/index.html","4d4e684b4f583a8d224264fe548ad239"],["/Swift抽象工厂设计模式/index.html","5d19b3798a3f26c9a1f54ffa8608baab"],["/Swift掌握iOS自动布局锚点/index.html","b204c58e8ac77628ada2bea359a6d1aa"],["/Swift支持旋转的自适应单元格/index.html","e4687c49cb6e84c9cb2311e082e0af99"],["/Swift枚举值/index.html","80cacc9cfdd71c0fdf3194e731afa538"],["/Swift生成器模式/index.html","98d3641d82bbb696445093ea6e23aa01"],["/Swift结合Xib文件自定义UIView/index.html","77c58f2c90106a610547a2e14c958cc0"],["/Swift编写的20个iOS库(一)/index.html","9e32e65b5dfe961b8d60907704414874"],["/Swift迭代器设计模式/index.html","5a4a1e8e58632c9b72cd8732820b681d"],["/Swift适配器设计模式/index.html","10e34c4b033d3908a3a124d325447a39"],["/Swift静态工厂设计模式/index.html","0e5fb3f1fbc591937f9dce66f22b1248"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","5734f33700ca1588712b9af14b153ecc"],["/UICollectionView data source and delegates/index.html","6d299dc5423be0340cd2fc7bacf19372"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","ed30810944680360e3048f175e540f2f"],["/UIKit初始化模式/index.html","75f70accba6e14fa778ebb9115a98175"],["/Ubuntu18.04替换国内源/index.html","f733ff2b0da9477700c11e41a61d66c8"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f8cc62bc5c3f2563b0938382643dcd39"],["/Vapor系列 (一) :  Vapor 初探/index.html","2069b2e6610d5ed17b2353f348d83699"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","3e9441a2de2171dd0e229c998062565c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","56be7bf1e68b911c15ea4faf06882a69"],["/Vapor系列 (五) :  使用session进行authentication/index.html","8b0faa50b639e32596015c7be41d7e37"],["/Vapor系列 (四) :  创建博客数据库/index.html","1145cede8a9bd0c688ce85cc2cdabb54"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8d9532e313f19cce907fcfdcc21e4644"],["/WKWebView与Native交互注意事项/index.html","f508e60b76888b4a9cd7fdc532ad5ce0"],["/Xcode扩展/index.html","aad05e1b510bfb772e83b9f9000a825c"],["/about/index.html","acbf2ce6490993e62403dd54488f085a"],["/appleOS的Networking示例/index.html","4a49952cd022c02df4da273bf6cd2013"],["/archives/2020/03/index.html","0c45ba0a49a3a5d58b141869c00655fe"],["/archives/2020/04/index.html","7a4e79f74623a0b5af2bbe8c061f00ad"],["/archives/2020/04/page/2/index.html","e9b2552ee0c0e73c7d901e244ce45d6c"],["/archives/2020/04/page/3/index.html","1747663693c9beaa8ea8e6e520646e87"],["/archives/2020/04/page/4/index.html","a734960e54daafdac860fef3135b978d"],["/archives/2020/04/page/5/index.html","5f8bf0ad8bdd487be74151c99d037d9a"],["/archives/2020/04/page/6/index.html","b9e64208271ad2b4e23eb9653c9d38d2"],["/archives/2020/04/page/7/index.html","bdea67dd3bad9ff9e6a713681c8e1a26"],["/archives/2020/04/page/8/index.html","6bc7a53a3a9a93eab27a75987e6cd75f"],["/archives/2020/05/index.html","91f159e86212415c1a393a8d5e45bafa"],["/archives/2020/05/page/2/index.html","a923224df6aa0e1e30e0089315b162bb"],["/archives/2020/05/page/3/index.html","9948ecc1f3dcfcdfd60b30c70224194d"],["/archives/2020/05/page/4/index.html","b40b854647497831500f863f671348a9"],["/archives/2020/05/page/5/index.html","cc49c2b1e1408318e3873797d41bf338"],["/archives/2020/06/index.html","65af4f0fa37bcaabad3be0215157217f"],["/archives/2020/06/page/2/index.html","a53168f938805477fceedb0b7a8151ac"],["/archives/2020/08/index.html","7b2001b3fef2edf9b63daac305fe8393"],["/archives/2020/09/index.html","5fc7e18edfa998df69d0582e095c320f"],["/archives/2020/10/index.html","2d9019a24b30510c41b7d5dac144428c"],["/archives/2020/11/index.html","efee191a85a51e9e61adb821fdb02a24"],["/archives/2020/12/index.html","43f9a5a4ea756202e742446ded02a4fc"],["/archives/2020/index.html","39250e9afb8ce365dc0e2153ba74d6a0"],["/archives/2020/page/10/index.html","4e9765471820faaa949473e00488ccfc"],["/archives/2020/page/11/index.html","556ddc9c835d111cf1504e0253a0523a"],["/archives/2020/page/12/index.html","9023cb87d5203058ac798133d7dda40a"],["/archives/2020/page/13/index.html","4cb96f3a377247fb9c6df1dbbfef6a5c"],["/archives/2020/page/14/index.html","69d2c9777ac8520cf087ca7ddf29698f"],["/archives/2020/page/15/index.html","e5bee13bbb43be599892969459b1cac6"],["/archives/2020/page/2/index.html","f4383207ce6512873723f03cab597b26"],["/archives/2020/page/3/index.html","88ec161ecff6e897fb098f5f8f1b84f6"],["/archives/2020/page/4/index.html","3b67efa2a775db4e725544ffc2d54b02"],["/archives/2020/page/5/index.html","125473a5791a0c03eb6056544e7fd3e9"],["/archives/2020/page/6/index.html","1d9fc6ef77555f1d929ac9a549888298"],["/archives/2020/page/7/index.html","cd1ede1a54a25d3477384819128805f9"],["/archives/2020/page/8/index.html","4fa4d9cffbb62dd3b93b299e6c423360"],["/archives/2020/page/9/index.html","a9b23f0ea186b123c261368b8e00cc22"],["/archives/2021/03/index.html","d70d671b23a43f93e0ed41a89de3cecd"],["/archives/2021/04/index.html","6621fcb51c389b4f29a94736809b17e7"],["/archives/2021/05/index.html","2f108cb9c44e382c33c10bbb86d64a15"],["/archives/2021/06/index.html","91a78483dd2e8299024a606a8f5dfe9b"],["/archives/2021/07/index.html","914438d7d756be2d9c9d60d464bd2098"],["/archives/2021/08/index.html","dd7c56f6866194b1e0b3598cd9e10548"],["/archives/2021/09/index.html","058d9fdd4e6d488fb5917e57e7ee80fa"],["/archives/2021/11/index.html","93549037a65a8339b0e29911b9aaf4a5"],["/archives/2021/12/index.html","de239850489744661c499bd4582018b6"],["/archives/2021/index.html","fe70f85c6d3dab3a83a1fb1e2074c3d3"],["/archives/2021/page/2/index.html","a7ef754e502f42001b9a1c9b8fd7976b"],["/archives/2021/page/3/index.html","19d788f96d17038dac765d5993c33a0d"],["/archives/2022/03/index.html","5f170801aaf4f38cb518fb986720cac0"],["/archives/2022/04/index.html","24389f0253b43484e7da92e6cf2b0064"],["/archives/2022/05/index.html","cf69928a668d7451fceede6a8edc29e0"],["/archives/2022/06/index.html","940777b4f7e7b90cd06dd804b2b36989"],["/archives/2022/07/index.html","5a7667b9b3af62fbf297a87102ff203a"],["/archives/2022/index.html","935a2e24b551883c6d17cb73715eaa4a"],["/archives/index.html","31f0379b3c57dbf3bf4bc98a97025b74"],["/archives/page/10/index.html","bae84b55dae99218dd775519d4f18794"],["/archives/page/11/index.html","e44f935ba3e51f20080c92c9f487b3d8"],["/archives/page/12/index.html","17c6b6bc01934a5e39211ecd696813a5"],["/archives/page/13/index.html","2580591d5bb7fd54f283f08ac218c03f"],["/archives/page/14/index.html","c438bee94af0289641e3047bba9f9779"],["/archives/page/15/index.html","d3663bf57080da10482ef8f49f347548"],["/archives/page/16/index.html","f12ecf73471c0e9ceb6454682b111bea"],["/archives/page/17/index.html","4dba7c6b68ebad0894f025c74a51e538"],["/archives/page/18/index.html","aa47b7ea049669e88e63480a655af064"],["/archives/page/2/index.html","c1d406d89202b8efff7775a07ad1536a"],["/archives/page/3/index.html","e68db338ffaa7b9c71dcb7a03957c81b"],["/archives/page/4/index.html","46800fb218f0c50eaed83bfdcb721a58"],["/archives/page/5/index.html","39b74eb79d5e93ed4c1e47ff050a0399"],["/archives/page/6/index.html","d4aece9c03adfcdc85c9b1d48867e8fb"],["/archives/page/7/index.html","65ca526d2ba2b0edb81933f162bc67a1"],["/archives/page/8/index.html","3bcc39e2e57024c86d242b383d76d1f8"],["/archives/page/9/index.html","5a092283b0e957e3a026a2800a35e90a"],["/bugly 上传dYSM文件小记/index.html","4e56283c93565e4bb59bd1f3c720ef40"],["/categories/Advanced-Swift/index.html","6d62cce6ec9ec7467bc490be4b00fc23"],["/categories/Advanced-Swift/page/2/index.html","58a5093f74b0965a457f6f2308e6847c"],["/categories/App-Architecture/index.html","bb1a2491aaaecdfac636c90699af63ec"],["/categories/Array/index.html","7e680816ce3bf0909120f0cfb8389b1c"],["/categories/CocoaPods/index.html","f5bb943e672c6bddb8eb2f0832e0386b"],["/categories/Codable-protocol/index.html","bb8fc447a00aeb753e5c3704d6509603"],["/categories/Combine-framework/index.html","6e21b60033441aa7add0ccbdeb574d2c"],["/categories/Combine/index.html","f7365444823723bb3e39327fcbb56c4a"],["/categories/GRDB/index.html","3a89610e37e7fdf49fa85c3ab7f0fb53"],["/categories/Go-入门篇/index.html","1c091bce710ab67e8f9671034a468a23"],["/categories/Grand-Central-Dispatch/index.html","0e1e6d41a7aae28b3ee16b61372d90e8"],["/categories/Homebrew/index.html","3ca399a48a5f412cf5634c98da775481"],["/categories/Linux/index.html","be63b5e07798bf54568319dc487be8d3"],["/categories/MySQL/index.html","2544424be6b15bdf9c6adfad9ce6cfad"],["/categories/Promises/index.html","707ca97874546d19c80690b849d9ac65"],["/categories/Protobuf/index.html","d45ff022c6f23757a724b078bda45781"],["/categories/Result-Type/index.html","03303eda58be4f493c5da76adc889bb0"],["/categories/RxSwift/index.html","847c3e4599342b5f12913703fed641e2"],["/categories/Server/index.html","0624a9ada679d6bb7dbf7f3913109131"],["/categories/Sqlite/index.html","c42f3dca888bbd048bfc4a1be14bc992"],["/categories/Swift-Apprentice/index.html","cd206481457bbd01eda75cbbca5689b6"],["/categories/Swift-Apprentice/page/2/index.html","deaac3f8c6606cc9b8a6b0f4e84ef614"],["/categories/Swift-Apprentice/page/3/index.html","01f365b90f9c47e77e8a9cb88c8371d8"],["/categories/Swift-源码阅读/index.html","8efc9f714fe7963f87fd5a78c054c575"],["/categories/Swift/index.html","fd921ef04023bf1596a8313e28c4f8ce"],["/categories/Swift/page/10/index.html","76eb463414f34468449a67afa7087e23"],["/categories/Swift/page/11/index.html","035340f7823a525bd84d24ed4fa0058e"],["/categories/Swift/page/12/index.html","aa16e4b6ce81646ad66d8510cbfc5b14"],["/categories/Swift/page/13/index.html","5b6033c8bd74176e1632f1be6dee383f"],["/categories/Swift/page/14/index.html","f22a05f98eb32fe550400b34adb4267d"],["/categories/Swift/page/2/index.html","7c8633d4336a27a15aa33baba89f5047"],["/categories/Swift/page/3/index.html","b5b28c5e5764c93a40c7fe4577555afd"],["/categories/Swift/page/4/index.html","5d422cd220c19faa39107f0f434f4a62"],["/categories/Swift/page/5/index.html","95fc75ea19c542543a33d4aa47d4ce93"],["/categories/Swift/page/6/index.html","fe0d6e886d79454652280bcb426d6853"],["/categories/Swift/page/7/index.html","85c698da0b422b76c82ddbce594cd1e5"],["/categories/Swift/page/8/index.html","7e021754ceb0c3e716818d122537e1fc"],["/categories/Swift/page/9/index.html","787a68c0026dcd3d30df1d0400ae3f57"],["/categories/Swift5-2/index.html","059f48d561bce1a992565648383d5576"],["/categories/SwiftLint/index.html","b0a7f451dbb7839141b5a7f181b76b6f"],["/categories/SwiftUI/index.html","c7e00749c583759083e94649fd566f0e"],["/categories/UICollectionView/index.html","1755397241b89dc51f6ee4ebe66bb663"],["/categories/UIImagePickerController/index.html","2413573eec56f928647d513db4e5a7c5"],["/categories/UIKit/index.html","b9b42bc9271066399d1501b43b33a805"],["/categories/UIKit/page/2/index.html","fe35a68716200ef278d7378d93d7bf69"],["/categories/UIKit/page/3/index.html","289a35f391012cc40493e2ee30b5667d"],["/categories/UIKit/page/4/index.html","db673d28d856142dc69846a005a0abfe"],["/categories/UIKit/page/5/index.html","816bf6fbb011b1f964ad4535036c311c"],["/categories/UITableView/index.html","c2399eb17ad0debf55b811c3c879d92f"],["/categories/Ubuntu18-04/index.html","4cbcdf26580ae3d4fcd015e8fef055d2"],["/categories/Ubuntu软件源/index.html","0e58065ca2c47d094c1030f166e2be1c"],["/categories/Uniquely-identifying-views/index.html","d60e986a04098d55d4c27d706f25f11f"],["/categories/VIPER/index.html","4a6ac21501e2b9d21b6f3f560d0a212a"],["/categories/Vapor-4-0/index.html","2643fc11039a0853adfbaa75afd91ccc"],["/categories/Vapor4-0/index.html","52b827bf47f61758f65af04d53e622cb"],["/categories/Vim/index.html","bff0fee5a019bdacd9a95d1d3e83c932"],["/categories/WKWebView/index.html","b9a85c253e7e3ada4e19f20c742250d9"],["/categories/Xcode/index.html","3342df71f2755fdfe31989ebd04709c5"],["/categories/appleOS-Networking/index.html","d74d8a6f8491d3ac7b6b10229c89b437"],["/categories/bugly/index.html","492740e2cb3b5429314996ee75683acf"],["/categories/enum/index.html","84ca994a711526468808abd3b3a7af35"],["/categories/git/index.html","0164a4b12918413f894cdd8b126bc59d"],["/categories/go/MySQL/index.html","040973b4557e2b46c65ac87bc4ff1db9"],["/categories/go/index.html","4281f11899605739a3f57224138a313d"],["/categories/go/interface/index.html","798bc25b560cacdd69e012deda37e977"],["/categories/hexo/index.html","34e94a361d03c70b97925b147585a0fd"],["/categories/iCloud/index.html","68d2435f7eea73c7dcf0fc1cea1c6c25"],["/categories/iOS/index.html","0def51f70d81aca5cc7fb8f707a58944"],["/categories/iOS/page/10/index.html","f1a6137ed6df2c0c7e0be7a43ec1f7b7"],["/categories/iOS/page/11/index.html","b2903dff5b9ee8739263341b53d0314a"],["/categories/iOS/page/12/index.html","2ec05f70f30ef93a3fbf970f8da508f6"],["/categories/iOS/page/13/index.html","5850facab7f8ec74e5fa4892936f224f"],["/categories/iOS/page/14/index.html","5ffc077693f9ef663e58926b0a9e8bbd"],["/categories/iOS/page/2/index.html","b2a073631c73f61fe1a9a96b7a5082c9"],["/categories/iOS/page/3/index.html","ff5caffd20aa578e33e553288620ff34"],["/categories/iOS/page/4/index.html","03776b6f2842322bccf659e1a6de12e1"],["/categories/iOS/page/5/index.html","84af70f83f42e369d172ee7424a1fc05"],["/categories/iOS/page/6/index.html","a62d8883fc9d19ba8a9715d42c00d4fc"],["/categories/iOS/page/7/index.html","6a0c9f52b95dd96de7af2bf3a843aa3f"],["/categories/iOS/page/8/index.html","6c002ac382985622af69ac5027d5db72"],["/categories/iOS/page/9/index.html","c1087b3e7373ba1df24637e940d39a6c"],["/categories/iOS面试题/index.html","0474b88a94010597067fd40ce1a0108b"],["/categories/index.html","b242c711c764b914439f815536282c63"],["/categories/random/index.html","739596fd9af6d22e652995e5f907e40e"],["/categories/三方类库/index.html","6f64481663eb5ecdf251f5fc3f4f6f64"],["/categories/函数式编程/index.html","c4ff5bbb8d52ff08e15e8897c610bc72"],["/categories/子类化样式/index.html","bc569648e81647ecb7c2681890aec518"],["/categories/开发技巧/index.html","7a19fd52d402e1190e8aa9ab38a52096"],["/categories/开发记录/index.html","be5f3d0bbc084991c6cdc8ca67c000ca"],["/categories/数据库/index.html","1541d4a016bab76cd32c5743a84c2dd9"],["/categories/架构设计/index.html","537100db2791c078b2356e5b796946c4"],["/categories/测试/index.html","5d2fba3b42d79a992314c143ccb98ead"],["/categories/用户体验/index.html","82fe83ab90129f898972478cdfddc2ee"],["/categories/用户协议与隐私政策/index.html","122a0cb2ec57a5a108bf0319a80e8d84"],["/categories/组件化/SDK/index.html","46f40a7606fff66d535cac8a4afc4c11"],["/categories/组件化/index.html","4421183b104a8f03d9f212d0850c64a1"],["/categories/组件化/模块化/index.html","a6d1a58142538f0a1059f01463aa369a"],["/categories/设计模式/index.html","a916171b5fb8f95a4d7cc745812c94a2"],["/categories/设计模式/page/2/index.html","bc744758e6650c151092199592d71a03"],["/categories/设计模式/page/3/index.html","242f80ef30f1ab21b14d1bb88446e0d9"],["/categories/逆向/index.html","c354f68757705aa676a304c02cda1ad3"],["/css/main.css","27ac62958e0dc4c88efeee6b883b91fb"],["/go moudle 导入本地包/index.html","b4b1052613b0e36e2f6264bbde555a2a"],["/go 库专题(一)：gin/index.html","bee553ed904eae24b1c26c5d0ca04045"],["/go 每日一问/index.html","14b3f7aa8e09aeb9b20433e4d0604945"],["/hexo部署失败/index.html","f88a4748c480b74d84145a7e94f4024f"],["/iOS 15 适配/index.html","3a3d5ccfca63a410fddaac855149d510"],["/iOS VIPER架构深入实践/index.html","4c132326b1d337d28da7a1e6da523888"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","257e833447509b35423512cc38bdb3b6"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","8377a1f5614b036aa71e69ec9f30440e"],["/iOS 自定义视图，输入表单和错误提示/index.html","8e25f22fc906f1d466fc44183aba1b3f"],["/iOS如何使用iCloud文档？/index.html","e426bb53a2bd76d86edd7d532bcc810b"],["/iOS子类化样式/index.html","846fae43148ce40774360f2acda1225a"],["/iOS开发记录<一>/index.html","ffa558ef32635f7bc5b328f193f8647e"],["/iOS自动化布局编程/index.html","aa4e35fd2fc30c99e9f106cc4329d8b4"],["/iOS自定义转场(By Swift)/index.html","47599fb8efbf4a45fe420a89b4e85791"],["/iOS项目架构：使用VIPER/index.html","775ae58fa5fc5755d1e831b0b8e92032"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2e7a9a616ee389835028d5b6e76ab31a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","96416c5cedcc74846f2a080a9febca51"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","31b60c62663c1c976100387b97b1a731"],["/page/10/index.html","ec9d2c330782c574462a88f9da603f1a"],["/page/11/index.html","ed9b666f8cb7a6e6b46ef17f17b1e6e9"],["/page/12/index.html","babfc44c55a6afc76d4e3890a2158703"],["/page/13/index.html","c7ffbd7ffb6d5863efcf1e5eeae1410f"],["/page/14/index.html","35a52afaa1af68b0db735d1e4392cf94"],["/page/15/index.html","024bf90f2fecbe87dbe62165d5247d15"],["/page/16/index.html","fa7ce85893f133056092ba06a1fd34d5"],["/page/17/index.html","ed1855f9dd58eceffc47d1c5318b8ef6"],["/page/18/index.html","ff546e74fb60f286d152c128a89af5fb"],["/page/2/index.html","bdb5ca96a7ed3d5b8700c6209bf0c4e7"],["/page/3/index.html","f1ddec59502497314c4d85bac4115d0c"],["/page/4/index.html","eabd3e6f0389b670ea27e5fc83dcaeb6"],["/page/5/index.html","21356cf5683d1c432a8b8674c0847ef0"],["/page/6/index.html","2c30c66bf2349297220bb8f58c8fe01d"],["/page/7/index.html","de823f93c336a5ef68be22be7152a09f"],["/page/8/index.html","3af3b0bc46eba4f471a10a6385fdeed2"],["/page/9/index.html","4cb2faecb54bf2f19e18bd85be212807"],["/schedule/index.html","e9ac3877a33ce632805007f018d88ac6"],["/storyAppPrivacy/index.html","736d83803362c7749f5fdc7c4f928398"],["/sw-register.js","00b79292e3d0efca35a9fa0394d99b79"],["/swift 专题：函数/index.html","4d7f98d079de0db382a5b9cc2fa813ab"],["/swift 专题：闭包/index.html","df0d27d621cec73f379f7c3cba5b6efe"],["/tags/Advanced-Classes/index.html","ad12d906ea0ebebda5b67f364a9bb76b"],["/tags/Advanced-Swift/index.html","943ffdcd7d1116f52c26c93748033011"],["/tags/Advanced-Swift/page/2/index.html","107a19ee9be4309067b436a1030561ee"],["/tags/App-Architecture/index.html","b86d0d9a3c49041b69de5fccf69b5dfd"],["/tags/Array/index.html","5f145f326c9db4bd1530abcaf1848e0f"],["/tags/Arrays-Dictionaries-Sets/index.html","6ca72c18938dd8edd776cf88ebc29b74"],["/tags/Authentication/index.html","53ad750ad28c932c1934933571f435df"],["/tags/Build-in-Collections/index.html","6a714658bbd752e5f8f01d307513a221"],["/tags/Building-Your-Own-Types/index.html","a2a942e424c2ca47e288bbb8a9e7e170"],["/tags/CMS/index.html","8128ba49c60935f898cc42cac9b22886"],["/tags/Classes/index.html","33f80886436e073d524d53a3712f3400"],["/tags/CocoaPods/index.html","0ff4509f1ba7f5ac0c220774c563f988"],["/tags/Codable-protocol/index.html","a089ba3ad65f68df44cce7d8426a3a02"],["/tags/Collection-Iteration-with-Closures/index.html","49b91db83657c59d630d23cb6c279567"],["/tags/Collection-Protocols/index.html","ea9fa1c0e1a415e0a028b71b9c214133"],["/tags/Collection-Types/index.html","d5a9a0ae123a87831ceffab8f6ea00ca"],["/tags/Collection/index.html","af384fcf68324d24368fdfe268ef6994"],["/tags/Collections/index.html","ee9b3916483338114ae111a26e332027"],["/tags/Combine-framework/index.html","cb2b3dbe456a8e850a2b5ea673661bf3"],["/tags/Combine/index.html","efb147abcf03480f74450623fb9d730f"],["/tags/Dependency-Injection/index.html","2657e4664de93b5f2125a182196d362b"],["/tags/Encoding-Decoding-Types/index.html","8cc191f7b570cecd4524158df5d03fcf"],["/tags/Encoding-and-Decoding/index.html","23f718320d357aa3263b6fc2bedd0950"],["/tags/Enumerations/index.html","a3367b45117559255160bf433e1f6225"],["/tags/Enums/index.html","aa34f3afa3cd444717a97dcf0e480038"],["/tags/Error-Handling/index.html","bf3515a52e16494ed96bec24480ebd48"],["/tags/Functions/index.html","bd307c9b6c64e6ce5d7490852d108a88"],["/tags/GRDB/index.html","b74fdcf188c11fcc3d8db2e1044bbf00"],["/tags/Generics/index.html","0403c016bae477885a711c81b1616c8e"],["/tags/Go/index.html","833266901bd9466624302ce083e02c35"],["/tags/Grand-Central-Dispatch/index.html","a76f767e4cc87a28a26ef131b8e3f139"],["/tags/Hello-Vapor/index.html","63303b1bb35c82fc42e68d12e7c99b7b"],["/tags/Homebrew/index.html","19919bf32bfa14349a31e893cd7e9fb1"],["/tags/Interoperability/index.html","ecf27ba7d0a855abe156aab88aab6663"],["/tags/Introduction/index.html","e7ae7a38cacedd50ae65e7194ce3c3a4"],["/tags/Leaf/index.html","49fef847c57aecb1189d027d35a1c5ea"],["/tags/Linux/index.html","bbb743141e568dd1d78408c83e9f8545"],["/tags/MAC/index.html","986a1b2e89b8827f7fab802919d69922"],["/tags/Methods/index.html","d04be4a9d3c9a1222c74bd72eb4fdd8c"],["/tags/Modules-And-Hooks/index.html","a299a626e17bdfb96b46e4d08bc18cad"],["/tags/MySQL/index.html","1575ede9275af839332bb97fd44709e6"],["/tags/Optionals/index.html","0bd917d1aec8e4a46843b4c830e38193"],["/tags/Promises/index.html","f9690fae1154b4277003ad0f5087f686"],["/tags/Properties/index.html","81de8d3693364e72b6cc116a6df21e9b"],["/tags/Protobuf/index.html","365ae2b95c2e095c4dce33b476b1afba"],["/tags/Protocols/index.html","87d4df5d47fad251f9d1e6fd02c3a791"],["/tags/Result-Type/index.html","28475aa6b7544bc8c72bc38fb8b67cd5"],["/tags/RxSwift/index.html","389fc4bf836c973125557975f76c8e11"],["/tags/Server/index.html","d92a5657c7cd93d1204964b9b34584ed"],["/tags/Session/index.html","f349383900ffae338a88aca78226b540"],["/tags/Sqlite/index.html","1b8f4a291b480cdaa31667585451c2af"],["/tags/Strings/index.html","f0f0d1a48809690808bf89098747df54"],["/tags/Structs-and-Classes/index.html","28ed637f356ba07654dd6548df1e596a"],["/tags/Structures/index.html","216ebe4410db9b47f2920def89ba63a4"],["/tags/Swift-5-0/index.html","715477e9ba1afdff07a92349e211051b"],["/tags/Swift-5-0/page/2/index.html","b686aa8fc76c5a11788eb75e9deb187b"],["/tags/Swift-5-0/page/3/index.html","9e7206d5b8b27bac716cb3ee5fbdfd70"],["/tags/Swift-5-0/page/4/index.html","8c2161279b715be7296017c6454dfa58"],["/tags/Swift-5-0/page/5/index.html","35a6590240bd7c7c3f3e23d673b74b52"],["/tags/Swift-Apprentice/index.html","5290f636b2aeb4e6409654a1fbfd7deb"],["/tags/Swift-Apprentice/page/2/index.html","d5b6c0d27f1bfd28d275d14224f2801d"],["/tags/Swift-Apprentice/page/3/index.html","4be30fdec20489b6d658d18b891d22d1"],["/tags/Swift-Package-Manager/index.html","5630f9e31291ef91d8ba04f8d057547e"],["/tags/Swift-源码阅读/index.html","a8862d5e59e71bd09a05f5d77cc021b3"],["/tags/Swift/index.html","66984a1f493f026c2b0750ba6d71221a"],["/tags/Swift/page/10/index.html","510debf299220fc8a6858c003d7229d4"],["/tags/Swift/page/11/index.html","9c109689b5b08c70b243c29fb6d2ee4f"],["/tags/Swift/page/12/index.html","c38e5f2c71002bba489b3fa306d8d751"],["/tags/Swift/page/13/index.html","d6e04729ba25d8fd592a7855e324394f"],["/tags/Swift/page/14/index.html","a546c74d65be1d7b144f37e4251b1501"],["/tags/Swift/page/2/index.html","5c8bd69d36899b5a6991a84c742538e4"],["/tags/Swift/page/3/index.html","2bc8c91e3aa60ae19026e2041cb42471"],["/tags/Swift/page/4/index.html","5acf02412b09e9532d0910ab10d2e790"],["/tags/Swift/page/5/index.html","b0d8be6a1a34b51855cbabaa08797fd4"],["/tags/Swift/page/6/index.html","d5528006f1ab0d041941186352591b29"],["/tags/Swift/page/7/index.html","b2a827b63a105c4717bcbab5904ca3eb"],["/tags/Swift/page/8/index.html","2ba74f8a4584567eab757b0ced74df43"],["/tags/Swift/page/9/index.html","85899a28d368a96db7aed01e0cac51b2"],["/tags/SwiftLint/index.html","bfb8a37fd813b4cccd75e541011d02c1"],["/tags/SwiftUI/index.html","4077891f21a70c48b23a21f72b9f176c"],["/tags/UICollectionView/index.html","8366b46be8a512a51324026abb8cea24"],["/tags/UIColor/index.html","f9262ddf8d53646efe97e7aae9244ce0"],["/tags/UIImagePickerController/index.html","31e6b347519c48ebdae7bcdb969e573d"],["/tags/UIKit/index.html","0e81770e60754c947e27adfb97f865c6"],["/tags/UIKit/page/2/index.html","abeeb8e776401bcca16629da337b9daa"],["/tags/UIKit/page/3/index.html","c72513c91b3568bf282852315a848f6f"],["/tags/UIKit/page/4/index.html","d234d4a32dbc6dc08d6047d44f838104"],["/tags/UIKit/page/5/index.html","622bde27341ab1e1b736bd726ecb9411"],["/tags/UITableView/index.html","b9de4fe9c3c41e6f9763e50fb2b83183"],["/tags/Ubuntu/index.html","161f97a730bf00bd8cb07f89f1174a5a"],["/tags/Uniquely-identifying-views/index.html","6d205b81ceb5815919a82249cb7a20ea"],["/tags/VIPER/index.html","7b3bfba9e01ff61efe44f37e7e21dd3e"],["/tags/VMware/index.html","12cbd8836720898be9f0198bea313713"],["/tags/Vapor-4-0/index.html","65081bf86863bec06689cbcf24252e55"],["/tags/Vapor-初探/index.html","b2141703d944a51bffbeecc7ef351409"],["/tags/Vim/index.html","51d22490664d1bae5de9bf94f84307a4"],["/tags/WKWebView/index.html","3ceae5380d623bc2877ab60b4a1c167d"],["/tags/Xcode/index.html","81920fb0c2c65d8b5bce1c8de3356749"],["/tags/appleOS-Networking/index.html","543b6fdd934c83d3beee530f0fc77492"],["/tags/bugly/index.html","c260458b1bc0bbddb8383275d4165719"],["/tags/enum/index.html","2165cba63c0f0c38d841d608b4f92dc9"],["/tags/gin/index.html","d0ce28490aaf8813c52e91eae4e5fca1"],["/tags/git/index.html","89ce22f379ab005ec3947bb2b2eb724b"],["/tags/hexo/index.html","7cdef9deabe1c08d7d08c588fd17cdbc"],["/tags/iCloud/index.html","f6c9ef9686f1b9b0b888fde52675ef00"],["/tags/iOS/index.html","32392476779828d0858237adb81b3264"],["/tags/iOS/page/10/index.html","4f45db5d6e6b86c2aab11c2868185076"],["/tags/iOS/page/11/index.html","54fb17cb653c756a26dcb13d1fa2539a"],["/tags/iOS/page/12/index.html","4b4de497651864995b0cadfffbb85805"],["/tags/iOS/page/13/index.html","a38397a98bde681134b4e13b71b8a29d"],["/tags/iOS/page/14/index.html","03efb08429e79f6cb58d3e704b7edb34"],["/tags/iOS/page/2/index.html","784e158c0ad8dcf84becc1f5e4de18d8"],["/tags/iOS/page/3/index.html","f45f7d2bbff659f79daf0046a590ab69"],["/tags/iOS/page/4/index.html","89b9eef565fa542991f3f9eb812e5414"],["/tags/iOS/page/5/index.html","fe6ae3cb1cd5724af21f7e9f14a848a1"],["/tags/iOS/page/6/index.html","cc73a8a194e137a8d05b4cbf60920d5f"],["/tags/iOS/page/7/index.html","356e9dd2e2072b9670b086aba9686003"],["/tags/iOS/page/8/index.html","75ca1f816aa0d6db4e5953ce1cff1cd1"],["/tags/iOS/page/9/index.html","237ed7d660fe7762b9f2bbbc6ca0f744"],["/tags/iOS面试题/index.html","44a8a7c123ab85b5ab1775369bae7aab"],["/tags/index.html","91d430ffec15ad9e75011dc5f4605c55"],["/tags/interface/index.html","0a35a6fabb50359ef4dcaf7ed87c84b5"],["/tags/non-optional/index.html","31df83836d5f39342a850a21e4aad049"],["/tags/package/index.html","57ccb7c895d958e7fb5ab8ebfadfe1d3"],["/tags/random/index.html","1e223197d15dc62131dbe4497a2af051"],["/tags/transition/index.html","363d83a7e0adc4dd9afdd7d389815d09"],["/tags/三方类库/index.html","42195a08cbdb09cd2e90616a80be1ccf"],["/tags/依赖注入设计模式/index.html","3490f83d1de1dd86fcd60543399e9b85"],["/tags/值类型和值语义/index.html","2a813eb42dabdbf919cb5875e87e6884"],["/tags/内存管理/index.html","85c0937262d35f424dca827d34170883"],["/tags/冒烟测试与回归测试/index.html","72e581f82fe9bc4237d5926d6af992e5"],["/tags/函数式编程/index.html","55d75882a620bba38cbb0810a309d24a"],["/tags/创建博客数据库/index.html","a723b2ad499237d421206647bd9088e0"],["/tags/初始化模式/index.html","f77a42f87874256eb29655d67491f989"],["/tags/单例模式/index.html","ef88583f36ef73d7b4cde4feb9a66550"],["/tags/原型设计模式/index.html","103763c53ebb304b410d855f51362e56"],["/tags/命令设计模式/index.html","5d1a2607048711b62278ce488898e950"],["/tags/基本控制流/index.html","c9a2c85eba6666ef661173bb7d25237b"],["/tags/基础语法/index.html","64b3c4bcc1e0b2d5236d2b0e4e802bc3"],["/tags/外观设计模式/index.html","127dfc98d5f46e346ec9fbe1a2041c7c"],["/tags/委托设计模式/index.html","81358239a4900fd9a6eed3145c9070d4"],["/tags/子类化样式/index.html","70973a3fe1e6d50e9ca6df69dc25b44d"],["/tags/对象池设计模式/index.html","95bf6bcc38c16f06958cc2ade7e616c5"],["/tags/工厂方法设计模式/index.html","7a023c54a2463993447670b6658550c6"],["/tags/工厂模式/index.html","66d357e419b65869a9675789311a75cc"],["/tags/工厂设计模式/index.html","9e8cfc3a61b4a93795ccba069f297c74"],["/tags/开发技巧/index.html","be66b5e76b6d399f116a07f291a4ea41"],["/tags/开发记录/index.html","2ee33377d7e0f863fc62eb4b7cda1841"],["/tags/懒加载模式/index.html","ef4c76c155e684da57ac2d7adaa58be7"],["/tags/抽象工厂设计模式/index.html","6026e7997ce75dda0c5705baa13bd4e1"],["/tags/数据库/index.html","ad10e0be87d1ddbfff4a06aae7b00005"],["/tags/构造函数/index.html","fe42079a7d849388af31c434ddfbf06f"],["/tags/架构设计/index.html","baafdf984c9db5acd28ba6c548b1824e"],["/tags/模块化/index.html","814f3bea95641a5c8119728a483333b7"],["/tags/模式匹配/index.html","ee8f2e612ccae58d4ca4b75561f8cb96"],["/tags/环境搭建与验证/index.html","2f79f61b68408916c553a2ad1b45525c"],["/tags/生成器模式/index.html","b9d18c72c45d1ceb92ea29ffb0f6ffd7"],["/tags/用户体验/index.html","097b0a4e54572accccd8be60863f7e28"],["/tags/用户协议与隐私政策/index.html","1295b8f8747341ba210d9e9491b45981"],["/tags/类型与操作/index.html","d0a5ef1034fe18851247238680628cae"],["/tags/组件化/index.html","512b6e7c50bfc5c3673889550ce5ae39"],["/tags/自动化布局/index.html","ab1fb81a18d0a1fec1dd5f7441b0727b"],["/tags/自定义UIView/index.html","370006dfd16e3efefbdf152cd8e1038a"],["/tags/自定义转场/index.html","413a24e1aee107a57eac7fb1853caa49"],["/tags/自适应布局/index.html","7f14f5511c8ba2b6b02a302711371bcd"],["/tags/表达式、变量和常量/index.html","59f7c01317b23deb9cd07c68a843fb09"],["/tags/设计模式/index.html","9678e7f6584b2a7af04e508f613f9d32"],["/tags/设计模式/page/2/index.html","3dea5700b6520682f16e61ea0dcb3408"],["/tags/设计模式/page/3/index.html","753326df62d4e0c4cb72c080acd16f4a"],["/tags/访问控制和代码组织/index.html","91251dc675b2876716e076d5ca86b1dd"],["/tags/运算符，下标和键路径/index.html","a51d0af712dfd0df799fde000526fce8"],["/tags/迭代器设计模式/index.html","6046a3c99137b868af7bba52a3d36462"],["/tags/适配器设计模式/index.html","b99e93a3b7adc68b73133ead0e597231"],["/tags/逆向/index.html","1c71775865eff43b931b15ae47ffab52"],["/tags/错误处理/index.html","94b486f00f3ac2de0cfc80f1414ed47e"],["/tags/静态工厂方法/index.html","8a0a0ca2a7bb06267d32658e0be783c4"],["/tags/面向协议编程-OOP/index.html","e694de2fe9cce7c0cb7a36eb8d6cad41"],["/tags/高级主题/index.html","e967548aca16abae363fd8859c7f2655"],["/tags/高级协议和泛型/index.html","bb53a1040dc91a6a6e3450d93068c91f"],["/tags/高级控制流/index.html","64ae20ec295fae9694e89a7851204d94"],["/xcode 常用的快捷键/index.html","08a169503f72ee93d041e8ed415b1139"],["/为iOS应用构建输入表单/index.html","0284328e6efe10210725546f60816aab"],["/产品开发的幕后花絮/index.html","b03b5e78a987acc3e0093d7575b89af3"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","88228eb333a6132b018df8ad140f7aad"],["/冒烟测试与回归测试/index.html","a6a367235262c166fbe5505ab0c1e558"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","c5a6510788eb0e576bbaf7289e9abb47"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3b105b75ed72acb4aa3a281338ed14ab"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","eaeafb2798d5558ead95a6da432e9f28"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","152acde2daa70283b099211b3a137178"],["/在Swift中创建自定义集合/index.html","f2ba772a95a2ddbfbeb85ac52ad76e94"],["/在Swift中处理非可选选项/index.html","c94e19aaec3e3e0e152ab026c1361185"],["/在Swift中生成随机数/index.html","7af64c6967e4b1b08d020160f55493cf"],["/在Swift中重构单例模式用法/index.html","b824a8712852ac8516e83648072f8225"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d8eb0aa3e3da63250a9cc851316984f7"],["/如何为VIPER编写服务？/index.html","2eb13f3faea8b53653819b15e95812c8"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ccd677014fcbe02d1a1315ec911516f2"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8104f424c19fd2c2ad27bbe7af343989"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","6b72b7221c4a880fc645deda38add9ee"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1cf4d6078a62eeef0341963d22bf636c"],["/掌握VIPER架构/index.html","092f088840f0d555ae978ce1d9d3d2c5"],["/揭秘 WordPress Hook 系统/index.html","5d5cd5f0c639d4085aa505f910f7e43a"],["/比较工厂设计模式/index.html","456cb98fdf1828562b5df6b16a01fa72"],["/深入了解Swift中的Grand Central Dispatch/index.html","f6e745737d78d6e3acf0eedf7a4f8fb9"],["/深入研究Swift框架/index.html","e82a6b3896e311eab87f658717f80efc"],["/组件化插件化与模块化/index.html","a5b17daf4f58542eafe2e318394bb1bf"],["/组件设计与SDK开发基本规范/index.html","93b030a7a2adaaf6428c094f3a58f5fb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5dc83f6df1e55c13e46545c8fbd732ad"],["/选择Swift而不是Objective-C的5个理由/index.html","19ef9faa3787c5316dd725e4c3471610"]];
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
