/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","c9b503ada4e7f4c2eba2336aace11eea"],["/2020年iOS面试题总结(三)/index.html","7715a6cc7bf3f8f3c26251fa55afb771"],["/2020年iOS面试题总结(二)/index.html","6e7f9b030e3a72679fddfb35b32b1193"],["/Advanced Swift系列(一): Swift 简介/index.html","31617cf6e6f0d4f1accaa50ccd4e6435"],["/Advanced Swift系列(七): Strings/index.html","e3d004f7a282e238fcbef357228d2138"],["/Advanced Swift系列(三):  Optionals/index.html","3e3254a035ba00c0f0f6f11bbb5abad3"],["/Advanced Swift系列(九): Protocols/index.html","cf51f5e9b479b0a4d0cf522ffd98cce8"],["/Advanced Swift系列(二): Build-in Collections/index.html","5adb60ae2e106377f58f4a6c0256f08e"],["/Advanced Swift系列(五): Structs and Classes/index.html","48744f3b9fa5c7957a9ddf00ab21ad4d"],["/Advanced Swift系列(八): Generics/index.html","64076fc895027f38ac22fa8293884130"],["/Advanced Swift系列(六):  Enums/index.html","19b1b93c54ab480b15085e83fa6f306f"],["/Advanced Swift系列(十): Collection Protocols/index.html","1363add2a0e6c799f6ee9e934e7516e6"],["/Advanced Swift系列(十一): Error Handling/index.html","6ebc7b3d08b0d67c7b12861b4f01099a"],["/Advanced Swift系列(十三): Interoperability/index.html","fd32ada0fd49e3d301918134567ee4c7"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","bff46580c8223218767792dfc9ea5fd1"],["/Advanced Swift系列(四):  Functions/index.html","7ab79e8bf159952ff6a835a899b8f2c1"],["/App Architecture系列(一):  简介/index.html","f59cd5281855651266e2b47cf0f7ca0c"],["/Functional Swift 初探/index.html","a0f1bf4c109d5d03c4c13f1af0228e09"],["/Git 使用小技巧/index.html","1aa0d1ec363f62b138ae8d714c8cc88d"],["/Go 基本语法初探(一)/index.html","a44c2079ee53379a46461365ff52aced"],["/Linux VIM 命令及操作小结/index.html","702d259e8aeada3247acba71f67e41b8"],["/MySQL 基本操作/index.html","bcd6588a0cbf116e31e53643a3ce64f8"],["/MySQL-列类型和数据完整性/index.html","c536bff42ac58099387223ea5754b0be"],["/MySQL-数据库设计和查询语句/index.html","807d00fbc7c721b4b32a7e889a16fd7a"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","d917b1a06dd92da810f43726eb8c5bcf"],["/NSCODER和SWIFT初始化/index.html","5d52eb5a4fc73674d14904c9f574c86a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","d233b0eeffc292cb01d28c4845d01839"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","921197993d4cd5c7d91c8977c9e8bfb5"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d056a3c741f9dd25c7b21f5428b684a8"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","a0fda8e635009d3e5b97aa8f6b7124bd"],["/Sqlite 使用Tips/index.html","7b736b216cf8c854cd6efa67f46bb91e"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","76428bc5a68c5f65818683370c2943b4"],["/Swift 5使用UIImagePickerController拾取图像/index.html","91233ebd81a1494b6cdc678f397f3c11"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","60c702fb00837a8c19b9f7e3cc63e1f5"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","b8c0c1bb511af51fc6997f4073c200af"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","1a3b126ee7172878db97c99b0de4d378"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a199fd21a4eb562b27f055a354b2fd66"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","29c06dd09b5ba3e1495e53f1f006c745"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","8f72c07929c1cfb1ba3744f7082c3602"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c3e64f08c6340ffe1987075734db9208"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","8d7f25460d5f36c65e10a6483bd0689f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d3c18f2483c1676a373e188e41c416f2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","711e0d6a5bec7171b4df2600f070cac6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","70515bef4ce194ffaf049e7eaa319fda"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","732f768ba4be952b1616da85305c6d34"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","fd4bab78f98eddf462da036dab5c82b0"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","41f2e7d4fb1f88ecf360048ee56d1a0d"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","0bff2ddd58eba8988624b3d59037e64e"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","95e555d7f3a1b8ccfdc6f8297c3ef919"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","2a166bac62e3221798b3778f5fb0e5b8"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","6247d24093a592c06261cf5d73212b1b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","59ce6aad1f5376bd639c0f3af54fa0d9"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","992edf7c8498030b6a69bc12bf140008"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","ba5088c23248567827d20600f5045a40"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","4277801470a7fba55341010a7cfb583c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","d62586fbf7ccdc1ae5905e93871346f2"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","05924dd7320a535b3433dd1cd883bb45"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","941b31fe584540998357b02ba2cb2350"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","dafe3c4a16887e71c94ad83e2fbbab48"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","6377b9658cc7299d97ba4a6acdc646f4"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","155b2275998305ccecd92a74ddaeb1f2"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e8c11751132db4f6df57ce59c9c491c9"],["/Swift CompactMap vs flatMap：差异说明/index.html","be343796678b4e0b6bc773f444dccb8d"],["/Swift Grand Central Dispatch 深入实践/index.html","e15578620ed405e68daabf7b5dd799c1"],["/Swift Lazy属性初始化/index.html","0fd839ce1af15530da7d75eb354ee3e4"],["/Swift Promises 初体验/index.html","78e12175ae9c70d837f8e5a413499935"],["/Swift Promises 探究/index.html","5f5aa63fc0e60cfd6f37f725b909308c"],["/Swift UICollectionView使用指南/index.html","7a81b9295b778fc854ddeb6e826dfd03"],["/Swift URLSession && Combine framework/index.html","75d7fe03ef2ec471d72a394191d0d35a"],["/Swift tips/index.html","71017a53fea222b58b4fee402f0fe61f"],["/Swift 唯一识别的视图/index.html","0607062de15638d27894265a5e83166c"],["/Swift 如何学习现代UIKit？/index.html","29378fd9babe013f2d46c468551bf0b1"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","a4344e07ec216371f78a5bfd2b7f5bb3"],["/Swift 用 compactMap 替换 flatMap/index.html","861c793d70fe2e51a8d518ba6bad19c4"],["/Swift 选择和播放视频/index.html","15018b03a898be501113aacda8554dfe"],["/Swift中UIColor最佳实践/index.html","399d7756fe784f084c496fe0f99f00c1"],["/Swift中快速简单的工厂设计模式/index.html","a7242b8125b5ddb2a76b6ff1e30588b0"],["/Swift中构造函数与静态工厂方法的比较/index.html","74cd61d3a2ac7e6b98a3570f8a78d706"],["/Swift中的UITableView教程/index.html","6d9c435a53642b4bab608f90a232a05f"],["/Swift中的懒加载模式/index.html","631fce9aaad76099221b0152f1ffe804"],["/Swift中的模块和挂钩/index.html","e05ed687e30a61530d762300ddc90491"],["/Swift使用布局锚点添加约束/index.html","676906e000ed4b4c106169075951c219"],["/Swift依赖注入设计模式/index.html","acd33d60f5ece60a222d1b3a6a1c757e"],["/Swift关于Dependency Injection (DI)/index.html","02aa3b4f1dc905aa37575b5b9819d347"],["/Swift初始化模式/index.html","6ef4cf83ac15e28a2897f8a1966faedd"],["/Swift单例模式/index.html","6f2302d207044b677949d79dab313f46"],["/Swift原型设计模式/index.html","403221d6e3ec026ac0c388a6c80c9540"],["/Swift命令设计模式/index.html","3627b4eb5b86011b5b286ce71f97b2e9"],["/Swift外观设计模式/index.html","84ebb811407e6578a810258041999ee8"],["/Swift委托设计模式/index.html","69f05723b9edbe8c6ce5f7f664bd1d53"],["/Swift对象池设计模式/index.html","0343e425184e565e6d147fe4b630a054"],["/Swift工厂方法设计模式/index.html","2b2c6d0b38fe47a75762396a241ab50c"],["/Swift带闭包的懒惰初始化/index.html","42c849720093d403150fefcbb5c9b224"],["/Swift抽象工厂设计模式/index.html","d1c2daae1722931f8488560672811292"],["/Swift掌握iOS自动布局锚点/index.html","aaf0b6df0bc7124011d95e4c89f5ae60"],["/Swift支持旋转的自适应单元格/index.html","c0854bb958b387a1e548a1e9ac4c4d86"],["/Swift枚举值/index.html","28e3212a699a414ecdc316b598b4e006"],["/Swift生成器模式/index.html","630b5247b4d3edf41cb6d13c8c69d04a"],["/Swift结合Xib文件自定义UIView/index.html","a32824b167a36b91bae92ebcb1c2f3ab"],["/Swift编写的20个iOS库(一)/index.html","c6a70043fbc04508ccffa89f071c3e8c"],["/Swift迭代器设计模式/index.html","0156fb7ededb57b7e5ef26a741aaff37"],["/Swift适配器设计模式/index.html","fa6001ba4b6b9fb748e9a4caa76b0c5a"],["/Swift静态工厂设计模式/index.html","a1c976f5e921a2fb28ef2ab102e92a66"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","30a6d5f24c0e472456167db1259525fd"],["/UICollectionView data source and delegates/index.html","43fa9fae01c8d09c49428747ec496534"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","186f3099a24c886c60216295f22cf17f"],["/UIKit初始化模式/index.html","d75ed12b8e2305659fdae8012897251c"],["/Ubuntu18.04替换国内源/index.html","9a91e70e05c9f5d6aae36d1adaaa13a9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","81923fccc229f3c9a1a02d74eab9fa69"],["/Vapor系列 (一) :  Vapor 初探/index.html","b53804ce8369fec4b810196fda0575cd"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","75d1aff285513a3f1b2d1185f6d4be64"],["/Vapor系列 (二) :  Hello Vapor！/index.html","a49eeb9c447d319e0c7fb676d2a6d98b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d10e40c537fb65525da4255fe2869ac0"],["/Vapor系列 (四) :  创建博客数据库/index.html","6ede752295a6bf4d63f21f5509fe05b3"],["/Vapor系列(六): 徒手撸一个CMS/index.html","55db7277bac7d1a3a6d5fdae4ed3145b"],["/WKWebView与Native交互注意事项/index.html","7936457e3f10d1b6eaaca4515db351a6"],["/Xcode扩展/index.html","0400e8584afa8d1069a8bc1660cd9cb4"],["/about/index.html","3a1cd57e71ef27a73f74016c9a8920bc"],["/appleOS的Networking示例/index.html","8de8e0e61c911f7cd3103d7fe58a7aeb"],["/archives/2020/03/index.html","3c0f16947af39e91e727b70f29e3e9b7"],["/archives/2020/04/index.html","2a6bf9163bc31467906eea7c3cd3b873"],["/archives/2020/04/page/2/index.html","2b036a715646285ce56f5163faa6415e"],["/archives/2020/04/page/3/index.html","921a8c7e839b028be9bd05ce33bb1fc6"],["/archives/2020/04/page/4/index.html","077fe4744e9a1aae2eda791d1b6f3dad"],["/archives/2020/04/page/5/index.html","ed74ae157ac699233eafdfdf8003c1b3"],["/archives/2020/04/page/6/index.html","defd1a6a5a1eeef8cde2d346f5f75bff"],["/archives/2020/04/page/7/index.html","e49c4cf7266bd59a64e1b7bb2e321784"],["/archives/2020/04/page/8/index.html","ca03fd7f34e6118ceeb1592e5ed1bab9"],["/archives/2020/05/index.html","788a9646d2f765985ead04c755b96494"],["/archives/2020/05/page/2/index.html","0d03b9091a2f7a363df5425905493853"],["/archives/2020/05/page/3/index.html","b388bfca539f1cfe9406db723e0910ae"],["/archives/2020/05/page/4/index.html","f06936b323e201257edc4fa546ccdaef"],["/archives/2020/05/page/5/index.html","c55c5f75b9f12498f9148524a2defcd6"],["/archives/2020/06/index.html","c3fb5e2ddc6add703a7ead3d4507a9af"],["/archives/2020/06/page/2/index.html","ce6ac8e0d5336461ebdc7baf7b4d28eb"],["/archives/2020/08/index.html","7f98031d7d1f987a21d0d5a3995eaaa2"],["/archives/2020/09/index.html","dfdf58cecf1bba27fea02388e07e41e3"],["/archives/2020/10/index.html","ec08b289286643ad821f8ebed176a8e8"],["/archives/2020/11/index.html","0689b2843e22e39b8245c93ae2bac9bb"],["/archives/2020/12/index.html","71eb73a526da29c0a44ad31c3f1898bc"],["/archives/2020/index.html","ba58b9ad483b6b3a78e93cefe0f1ad88"],["/archives/2020/page/10/index.html","e8224466e7d289b7a8b3371ba5e2eb88"],["/archives/2020/page/11/index.html","0d598290f52e2e41e5aa1c25244e9462"],["/archives/2020/page/12/index.html","4a635ada8553c392e7a94aadd8f1bfb7"],["/archives/2020/page/13/index.html","94f1a191c0188cea8f65a4b345854e85"],["/archives/2020/page/14/index.html","9621b8983af1ca57ad73b41fbede26e6"],["/archives/2020/page/15/index.html","f9765b66b6d192c78e3cadde7846c0fe"],["/archives/2020/page/2/index.html","ede313835461456f0f09bc6c0520fc49"],["/archives/2020/page/3/index.html","50aa66eb5dfabae4e8c0de3b9f59cae9"],["/archives/2020/page/4/index.html","02f79658843558563ca10437ec88d266"],["/archives/2020/page/5/index.html","20d6f63dcfad238aef7df19152c049f3"],["/archives/2020/page/6/index.html","e8dbda5111543bc33d20e0e72b8aa862"],["/archives/2020/page/7/index.html","e7a67c351a7b5887bbbd3322314ee12d"],["/archives/2020/page/8/index.html","eda7d6405589507ad705273121d947b1"],["/archives/2020/page/9/index.html","fb0b51a2466fe8c8b5f9b47a497c6c32"],["/archives/2021/03/index.html","cde7a6c9e9fcf4b01a62c82ecd80729e"],["/archives/2021/04/index.html","031bf99410d283572543819c53a31450"],["/archives/2021/05/index.html","5af2c10bbff794c20d37d177121ec208"],["/archives/2021/06/index.html","0180429346182565b5e086eb88491380"],["/archives/2021/07/index.html","7d2fec9ea7439bbfdf55bc26f2f05ca7"],["/archives/2021/index.html","235a58ba7e8000e20899331d3b57f131"],["/archives/2021/page/2/index.html","f6d8ae1e0f79fb240705fb383bad52f6"],["/archives/index.html","2bf8974504cc401c88ae00ac2690f17f"],["/archives/page/10/index.html","adf97c2e9b7eae31fc2af15b0a8e0d63"],["/archives/page/11/index.html","2acc8ac79970cc03f0f89bf29cb4c8f2"],["/archives/page/12/index.html","bae9e2242e4c24d0143fa844f5586758"],["/archives/page/13/index.html","d4c7a4664aad5dbc6b68aeda9098466f"],["/archives/page/14/index.html","5b6cbadd4ab9114bf7e93463de4735f7"],["/archives/page/15/index.html","ed8238787763c14f6449a12b89ac2b96"],["/archives/page/16/index.html","b1b0874aa0b1382c13bcf64b5237e24d"],["/archives/page/2/index.html","addab7af70519b3b1bb0f079c05deed2"],["/archives/page/3/index.html","98d90aa4f57c27628fbb42158fa18abe"],["/archives/page/4/index.html","898871704a05f49061f45f564419776c"],["/archives/page/5/index.html","56384ad9290de1f3f105c5b58b37b83e"],["/archives/page/6/index.html","27b1bfaea17ccfa7ff5337672be603d6"],["/archives/page/7/index.html","119f0f90ba07e547b6c88fa9ea1292a6"],["/archives/page/8/index.html","af49832e60c4e4928cfc2b29f45324d2"],["/archives/page/9/index.html","00bf7b7ecf8696cf8b60b5cb6f690e2c"],["/bugly 上传dYSM文件小记/index.html","39868329ebc8a09acc26a06e28543c77"],["/categories/Advanced-Swift/index.html","ad40648412d3295e4205bf8ce4b755b5"],["/categories/Advanced-Swift/page/2/index.html","62fbf4abafba9db12efc5f97f189bc55"],["/categories/App-Architecture/index.html","318c572b3571875da950f78ce7d4ff16"],["/categories/Array/index.html","adfb1e0852cd36dac1728e84351f0208"],["/categories/Codable-protocol/index.html","efc044711fa64696e02d0812f6e78360"],["/categories/Combine-framework/index.html","cc67d111a69668d94f61cb3a27e1074a"],["/categories/Combine/index.html","1ddc4ff102e0c066381e5a62ffa273a8"],["/categories/Go/index.html","4f175677e182188a633a31911dc6db2a"],["/categories/Grand-Central-Dispatch/index.html","f8e7359eba17a0326244fd3ed088aa1f"],["/categories/Hexo/index.html","fd23176457f863d398ea8028f3178300"],["/categories/Homebrew/index.html","0b9990d22c1ae8d69e8fa157b380c71c"],["/categories/Linux/index.html","876a6db51a77a11b75388c9c4987e44b"],["/categories/MySQL/index.html","1fd694c44959f3f3e8b25530be6f254d"],["/categories/Promises/index.html","ceae88b9cd84461500697da72f0140cc"],["/categories/Result-Type/index.html","fdcaac45fbcd41efde02f89d677a2ba1"],["/categories/RxSwift/index.html","d419894f27e84817622fde2bc4a45420"],["/categories/Server/index.html","ae30c8e97431b9b48c4f50c90d981d55"],["/categories/Swift-Apprentice/index.html","9199845f78ce61460e5dfddc5526d238"],["/categories/Swift-Apprentice/page/2/index.html","942c52b9d18d2b1960b14fdebfab4aab"],["/categories/Swift-Apprentice/page/3/index.html","b4ca11835887434313786551c69ce785"],["/categories/Swift-源码阅读/index.html","15431a4e0c58c1b3dccc10e580cb74ce"],["/categories/Swift/index.html","f7c0f5bb76a4216ba6f21778104ce5d3"],["/categories/Swift/page/10/index.html","16f94c5022df0be1bc0f5d70381258da"],["/categories/Swift/page/11/index.html","e552d24f2a8c6e2d797ddce3f134e5f7"],["/categories/Swift/page/12/index.html","b3f59886f40182097668247df2f7a899"],["/categories/Swift/page/13/index.html","6c9cbcd033f6cd2fb0f1f3dadc6b4044"],["/categories/Swift/page/2/index.html","ee5b6aaf50cab3fdd89d034eff29425d"],["/categories/Swift/page/3/index.html","18a7271c0e9012d6e2ff50a3e9d68a78"],["/categories/Swift/page/4/index.html","88843a98d654985969722e3863879798"],["/categories/Swift/page/5/index.html","8ed1916c3ce479ed8a697cbadaa98838"],["/categories/Swift/page/6/index.html","c2074620d71840d54524cf660a5db98f"],["/categories/Swift/page/7/index.html","be336f162b9777d7d2a4496369727c3c"],["/categories/Swift/page/8/index.html","58481c503ff3cdb27ae280038929bfaa"],["/categories/Swift/page/9/index.html","8e72339eef7a6a7b353ccc65357c0b82"],["/categories/Swift5-2/index.html","008d7d80e38632abea182bf3a109cf33"],["/categories/SwiftLint/index.html","d9fe9c3029ae441564f9badc052a6488"],["/categories/SwiftUI/index.html","248b6e8b92099298f887d88fb5beb990"],["/categories/UICollectionView/index.html","08e75cc078bacb44564e3580e77281ac"],["/categories/UIImagePickerController/index.html","cc9cd78ed54238b5555490224a20253a"],["/categories/UIKit/index.html","c97bbeb4597b1bb3b60bf4fb13709f41"],["/categories/UIKit/page/2/index.html","45c1a490a5bfff234d02bd772bd52d74"],["/categories/UIKit/page/3/index.html","5521d4462ff15c35df5b49205d23fb49"],["/categories/UIKit/page/4/index.html","161fa9561ad9df0ebbf1dcb948798a4d"],["/categories/UIKit/page/5/index.html","4015c990d794216aad4d0d481a292d30"],["/categories/UITableView/index.html","fba05ca1d8fe5f04a8a795ee47203677"],["/categories/Ubuntu18-04/index.html","584ec392d58aafacc812550d93f117a4"],["/categories/Ubuntu软件源/index.html","0db3ec712facc4dcffeb01dc3f406402"],["/categories/Uniquely-identifying-views/index.html","d0224f3b51502dd42d5029fa143e6352"],["/categories/VIPER/index.html","fdca87deab3e8b5a9ff1d09efa4e67b9"],["/categories/Vapor-4-0/index.html","698c24b06149e6c598c676dbe76e04bc"],["/categories/Vapor4-0/index.html","ea23e69613e4bd09125d7f4caee8793d"],["/categories/Vim/index.html","2422091103b40c2497b0ad102aa66c41"],["/categories/WKWebView/index.html","8baf7589a465c6214317ade131cf50cf"],["/categories/Xcode/index.html","5f88f2da052c43b115b0f28750f3818f"],["/categories/appleOS-Networking/index.html","5167c935278fd6c146ce2611ded4a32f"],["/categories/bugly/index.html","1f0eb96ecb70bc6af27370fbaa4bd8a6"],["/categories/enum/index.html","563ad84ecd55a8577e886b800b92fb15"],["/categories/git/index.html","52b845520120e52e4685a67df77b5689"],["/categories/iCloud/index.html","84ba6bc2dae14bd894a6ddaf5743bee4"],["/categories/iOS/index.html","1a4a1a17c6440182090f6ccc7c655987"],["/categories/iOS/page/10/index.html","65b0d0d37c01ff8a708ffb4d9d970520"],["/categories/iOS/page/11/index.html","c9ea24b6b04e5f2ff9d66c466bf950fa"],["/categories/iOS/page/12/index.html","3b83c1d625c7091cef74c82751be0976"],["/categories/iOS/page/13/index.html","0fe1bf86b8183efbb4cce249c416b7bb"],["/categories/iOS/page/14/index.html","8c90082a33a2d746d66a8486d61f7ec2"],["/categories/iOS/page/2/index.html","ab5fbac50c89cdc4c5fbffb9e35a7e61"],["/categories/iOS/page/3/index.html","b19b9ad55b3e48d2d599a39a3749554a"],["/categories/iOS/page/4/index.html","411a90acc0ce04aece3793b1676fa0bb"],["/categories/iOS/page/5/index.html","aee71e8d498d3e2d3a2d2910b5d641fc"],["/categories/iOS/page/6/index.html","c21c511ff812a4ba413447defd7923df"],["/categories/iOS/page/7/index.html","024c55dfd889f8df4693d39cf7f270c4"],["/categories/iOS/page/8/index.html","b983314ba94eabeafc68772229edeb2a"],["/categories/iOS/page/9/index.html","8ebc4ee2fa51ee8f7d7cfbec26caba99"],["/categories/iOS面试题/index.html","00a3d31ed526edba7e523de3fc0af2bb"],["/categories/index.html","0710c72a1c8a1ba690d5e3b4a8b264d5"],["/categories/random/index.html","e730624424a97eb058b06e30f52be619"],["/categories/三方类库/index.html","7b66245ab95cbfaeeef73031f8cbb2fa"],["/categories/函数式编程/index.html","2c8dc4b738eead9bc33d80b2e4181dfa"],["/categories/子类化样式/index.html","8cabc16e0ab0898c710c975c275cc355"],["/categories/开发技巧/index.html","584c8d9efbc17d9b8ca823239d30c775"],["/categories/开发记录/index.html","fcee9e2bef6c60b0fa45c70821ed8b21"],["/categories/技术支持/index.html","de9ce4c2a52bfcdaf10ab3cb16bcba02"],["/categories/数据库/index.html","681de60d73e207337167326890362a11"],["/categories/架构设计/index.html","aa3517db42615384df0fc73ef6a477ac"],["/categories/测试/index.html","058ab5ff940b363ffa473db1c69e76b6"],["/categories/用户体验/index.html","92ea554b16851216830650dbddce4f6c"],["/categories/用户协议与隐私政策/index.html","7b2fda559c6884f86f25af65ca9adb39"],["/categories/设计模式/index.html","249f3199c2616d68938f3f02a344e9cd"],["/categories/设计模式/page/2/index.html","c7aa18b30c6525e8787be37aa03ea796"],["/categories/设计模式/page/3/index.html","0d6b6cd7450527fb6edba2300f1b7d7c"],["/css/main.css","92c9dde6fb9937f9745622a8078711ea"],["/hello-world/index.html","bac58d5580070d6fb9c6125b284b2829"],["/hexo部署失败/index.html","3ec6cfaf31a1547f458bfc3041693f05"],["/iOS VIPER架构深入实践/index.html","de1a678aee802ee867ea008df708ac75"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","71a36c58420936213f5030cc837d82ea"],["/iOS 自定义视图，输入表单和错误提示/index.html","a4506467014815f081a5229edc71a660"],["/iOS如何使用iCloud文档？/index.html","71068df7d0923d96b89a131e0f0f79b1"],["/iOS子类化样式/index.html","2122516ef798849c8298dc7933ec1c46"],["/iOS开发记录<一>/index.html","c4281c0db8530b14b3abf003101a3676"],["/iOS自动化布局编程/index.html","aeb636840941a11483419f0e40e8571d"],["/iOS自定义转场(By Swift)/index.html","9862c2e94d1ec0632a1eb05d9c3c4184"],["/iOS项目架构：使用VIPER/index.html","cf87c6d0e6de93bf33916f009527b8cc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","15b1ac4ccfc218fefae74493a751c269"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","c9a3d622b720d76de8b981491d7601ea"],["/page/10/index.html","4cd0b296b0f37fe374007aaa64bc272e"],["/page/11/index.html","1130f56d226883ea03415b5db58fe3b2"],["/page/12/index.html","f044355292b1aedfbded59877b4e9342"],["/page/13/index.html","793038868daa2dc1d456a570978ff527"],["/page/14/index.html","3245409511e019235b8a5402c7ce060b"],["/page/15/index.html","dbd2a830fbcbe146a6d1bc59cdffd301"],["/page/16/index.html","0bdc8db40a750e14526ec642664fbd3c"],["/page/2/index.html","a6f3cb01b65e4c17118521d230c03fc4"],["/page/3/index.html","e7eae52c26cd0eb4a5bad4c6a9555a2e"],["/page/4/index.html","5ab4f2e0c7aeb150f144f31759cc7412"],["/page/5/index.html","78e7fc58bf0c6bed1f7cfbdb2196b90b"],["/page/6/index.html","d9e84e3defa3d8dee605871865d2452c"],["/page/7/index.html","20b8b74e5de2c86c33184b763d69bf6e"],["/page/8/index.html","cbdf5aaf2076d91efa20e998917efc9e"],["/page/9/index.html","749d74221ca02b4b5d06c9b41bbe7985"],["/schedule/index.html","4dce1d05ded3913ed0ca14e3b90b68d1"],["/storyAppPrivacy/index.html","6410535046fea52d6caa2b8905eaae08"],["/sw-register.js","fa82c0af695be4491a7b05553e00f936"],["/tags/Advanced-Classes/index.html","f6a66d5c0ed60e201be1839b8054be9d"],["/tags/Advanced-Swift/index.html","8e27caa60f78d765f8e776c189535df7"],["/tags/Advanced-Swift/page/2/index.html","ab475f7c4d7ed5af96742ed542925c65"],["/tags/App-Architecture/index.html","5f48fc5e62d5d074e6c390309082ca19"],["/tags/Array/index.html","94154d3458e26169ab02bc6a1b087b59"],["/tags/Arrays-Dictionaries-Sets/index.html","2239faa21ba1e38fe50bcbe92117d026"],["/tags/Authentication/index.html","6c4deef1c8a039684b525b4f80399f39"],["/tags/Build-in-Collections/index.html","6e0a80eac069edbff5ca6ffb504a9733"],["/tags/Building-Your-Own-Types/index.html","ad5cc922dfcd0c152936a1e724c1f4fa"],["/tags/CMS/index.html","95d31e3bf0441bedb39c4928f40d2995"],["/tags/Classes/index.html","b3fba3d0703a9ec0dd04dccea8f0af97"],["/tags/Codable-protocol/index.html","af5909efb1ebd51225bd756b952e4f83"],["/tags/Collection-Iteration-with-Closures/index.html","fa9bb771bfa0d9032aa07c0db705c239"],["/tags/Collection-Protocols/index.html","25c999ded89b450a2c942e4b03519d84"],["/tags/Collection-Types/index.html","06f1f943509deb57917068c6ea6035c9"],["/tags/Collection/index.html","3be731b1c1f6ea22dc15af83cde0a1a4"],["/tags/Collections/index.html","fc349ae487475cfd437873478026cca6"],["/tags/Combine-framework/index.html","7341b40b6b5bd94ad17c9747e4212ef3"],["/tags/Combine/index.html","684f913415ef7e882f0ffeb254aa4478"],["/tags/Dependency-Injection/index.html","c48d83294d358dce50fd8ce9ec066717"],["/tags/Encoding-Decoding-Types/index.html","30762505619d86ee1cfdfada98fb8510"],["/tags/Encoding-and-Decoding/index.html","bd8bbf09096d149843203f1d17edf6e4"],["/tags/Enumerations/index.html","48e42e0710577dad00dc9fa9e56b7407"],["/tags/Enums/index.html","24f69972ee475505ff082bca762f03d3"],["/tags/Error-Handling/index.html","5e7e75e3369db44647dfacd6012b66be"],["/tags/Functions/index.html","15492d19ff928b283fec831a5312282d"],["/tags/Generics/index.html","3ff58b1b6bd3db0d91f1ed92a60f3767"],["/tags/Go/index.html","f507497e034a6459fbcc5f4c3f9c9a6b"],["/tags/Grand-Central-Dispatch/index.html","ccfd726b8182a645b452d97673d86a4e"],["/tags/Hello-Vapor/index.html","b95634d2a43a8822869ea1fed460a5c0"],["/tags/Homebrew/index.html","e5b090405ec43e877a8f22cdc4e7e8e6"],["/tags/Interoperability/index.html","8a2d0a0006733a9e92fdb2b302b045a7"],["/tags/Introduction/index.html","ff7002f7f13bfa016d0109f0846894f5"],["/tags/Leaf/index.html","fa51f83af40e7f6b95d35c8a178082a4"],["/tags/Linux/index.html","3ea556718655440abb471b220039781b"],["/tags/Methods/index.html","ad71795a64a7bb3cbef1235059059341"],["/tags/Modules-And-Hooks/index.html","afe1b36ef114e59fa73eeb3981c8baf1"],["/tags/MySQL/index.html","015a6ceda0e8f2cdedacdd0e4ca865a3"],["/tags/Optionals/index.html","8ce1cb9d1c9efbe711369a3465878551"],["/tags/Promises/index.html","07ecdfbfdfa5aae054af17ed387042b4"],["/tags/Properties/index.html","a57b6fdd6b2cf72f82bb608c8c512026"],["/tags/Protocols/index.html","51da5133910f9837e81835c02a95caf5"],["/tags/Result-Type/index.html","7fe1538ad9b26823c2dc72039bef712a"],["/tags/RxSwift/index.html","ba3a0b5eff77ca53873cb303c86399ff"],["/tags/Server/index.html","7939421bf08feffb19e5a49fc55e31d0"],["/tags/Session/index.html","816d1081a0006875761f9aa9132328f6"],["/tags/Strings/index.html","cb50ee70d8e3938a9597da67acb95c9e"],["/tags/Structs-and-Classes/index.html","0a7e7551cbc0b2b52a2e9be19ce3d287"],["/tags/Structures/index.html","6520ffb3c9c44079f518060638f87d1b"],["/tags/Swift-5-0/index.html","a0829ee8ec64e859f501bcc1e4c1a9c8"],["/tags/Swift-5-0/page/2/index.html","714140f81c671f58aaf2c5b8a60869c5"],["/tags/Swift-5-0/page/3/index.html","c22f3f17268fc5772f44d56b90e73b93"],["/tags/Swift-5-0/page/4/index.html","59153e7892520f41e58f6c30d18b3e0a"],["/tags/Swift-5-0/page/5/index.html","1108fd8a59e86088aae40776ef26164a"],["/tags/Swift-Apprentice/index.html","d52553b0be947ef30efbb5bb43efb9ee"],["/tags/Swift-Apprentice/page/2/index.html","3b28e23f98539b291baa749edeaccd05"],["/tags/Swift-Apprentice/page/3/index.html","c53564129457f41310404d4f1c40555b"],["/tags/Swift-Package-Manager/index.html","05fe48db42cb5f2dfe3d545f9e6bbfa8"],["/tags/Swift-源码阅读/index.html","f5b92427a2b764f28d6897ca8eab4e06"],["/tags/Swift/index.html","7d44c6587cb295495b5aa19e891aeaf6"],["/tags/Swift/page/10/index.html","9d0b9d005fc22e317af6521e19a19f59"],["/tags/Swift/page/11/index.html","b1d838afff16b07a325b4ebb95054c74"],["/tags/Swift/page/12/index.html","9e48f46e6c00eb0e77f1d5bcd27317e5"],["/tags/Swift/page/13/index.html","6a903662b40582de423c7d95982179d7"],["/tags/Swift/page/2/index.html","e0d7875cae221851b50c2882824ce357"],["/tags/Swift/page/3/index.html","8f15bff58e345db8719bceb0c6a9dbd6"],["/tags/Swift/page/4/index.html","5a8192eb0599356bfed27ce8533fa062"],["/tags/Swift/page/5/index.html","5118b663677610c3f55230f22192c2d7"],["/tags/Swift/page/6/index.html","047fdfdf83ead3c13923876c5c6f2c8d"],["/tags/Swift/page/7/index.html","d575d52dd7b28f13a1b1b22c03a7815c"],["/tags/Swift/page/8/index.html","1dde7159a4b1763784652e0a56969a68"],["/tags/Swift/page/9/index.html","b312149bd9b7e692da87a16fb2d26e0f"],["/tags/SwiftLint/index.html","63cdc97f1f8a16bfc9bdac6f9de0b015"],["/tags/SwiftUI/index.html","546066267b5544bdfb7e31046b1ee1bb"],["/tags/UICollectionView/index.html","5c73d8ec8607642ebede71981e91895f"],["/tags/UIColor/index.html","8f89af87bad85cc5dae16b163df7ea34"],["/tags/UIImagePickerController/index.html","275fff896c036f6e999618bc3799fb37"],["/tags/UIKit/index.html","3ca4251755212ad75a84b0e81398e806"],["/tags/UIKit/page/2/index.html","43b21e0ac2ce916a5147fadaa6411ac0"],["/tags/UIKit/page/3/index.html","a9d44acd9d7032076428868d0ffdea53"],["/tags/UIKit/page/4/index.html","6eb565120e5cae0fc77b65b9c8a9211a"],["/tags/UIKit/page/5/index.html","7691899d6274e6b200db54f4e764e248"],["/tags/UITableView/index.html","b25c5dd31e4f8c506f125f74e4059c1f"],["/tags/Ubuntu/index.html","4bc2500f2a120ee6ae3ef1bb42100fa9"],["/tags/Uniquely-identifying-views/index.html","b5c49f05f9de26110c5eaf11bec5d8a8"],["/tags/VIPER/index.html","50dba3e1a29ee309b75654c4e38d520a"],["/tags/VMware/index.html","b6bf4022d0ee02a46d113143991e2ced"],["/tags/Vapor-4-0/index.html","fe4802fff4a2a92e15749d6557af6cd9"],["/tags/Vapor-初探/index.html","752e3aa7cb44028723d3d8e4d823f997"],["/tags/Vim/index.html","0c861f4c41450977abd6be4f78569869"],["/tags/WKWebView/index.html","9490c076cb35bcba43e15e83bae05c35"],["/tags/Xcode/index.html","25fa9be4f54949c6b2dc843fd0c4c78d"],["/tags/appleOS-Networking/index.html","50a17c0dba740b45dea3091d85f6668e"],["/tags/bugly/index.html","a4b5a66aa103a56fe38a95e1e8da596f"],["/tags/enum/index.html","daf4855afffc4d4f1c40b469af8a0c28"],["/tags/git/index.html","85c95bbfcc48c7a3cf9733e80a049d5c"],["/tags/hexo/index.html","4614e2ebac46a9e369e96647eb2181ed"],["/tags/iCloud/index.html","5ddfee70902dfcb77a207d5ebd5273a2"],["/tags/iOS/index.html","6056edd4122b7197651bac7c1ec11963"],["/tags/iOS/page/10/index.html","bd6a14a22f4a07b9a3513424e4644ea2"],["/tags/iOS/page/11/index.html","396034ae4d1fbce5962607b14eab59cb"],["/tags/iOS/page/12/index.html","41cc125f95941fd77e92f9f70fc25a14"],["/tags/iOS/page/13/index.html","051456acd7edd59c2f95479814f39f1d"],["/tags/iOS/page/14/index.html","28a09904107c4b3363497c13873af945"],["/tags/iOS/page/2/index.html","39c8e576a9c5b18cc25faba51d6bf7a1"],["/tags/iOS/page/3/index.html","68483786329f58776eeb5f43a24c17c8"],["/tags/iOS/page/4/index.html","483bf4f075cfa88f2646801dcf631e94"],["/tags/iOS/page/5/index.html","77df442a0370ed71ca06b8c900ba0334"],["/tags/iOS/page/6/index.html","ebd1bb47f15319a749f1dd816b9bf348"],["/tags/iOS/page/7/index.html","89acc8706fcda2071a3443dc66c02fcc"],["/tags/iOS/page/8/index.html","a68e32d14639dbc8fd11c6c83331dd7e"],["/tags/iOS/page/9/index.html","be67e39c930d5dcbb896caaa1c3fd919"],["/tags/iOS面试题/index.html","f116b348155b6a795abf58eb730fcd26"],["/tags/index.html","b477530b6553af0fb10dd995770685d9"],["/tags/non-optional/index.html","f1c96a84bb1fb5de4b93f02dd74073e4"],["/tags/random/index.html","c5e676e265a3b4bf0ff17d24fd0fe43f"],["/tags/transition/index.html","e1c6dd4b4a6c81ca872ead666fe1b456"],["/tags/三方类库/index.html","6f0a4202d42d7b4ef667f95e6f594048"],["/tags/依赖注入设计模式/index.html","442d4fba382bc5b4437fb60885d8dff2"],["/tags/值类型和值语义/index.html","b302a4dfc41b26844c32191f0a0da1aa"],["/tags/内存管理/index.html","c093aef8fa9b4415dd0e84b3f48b39e2"],["/tags/冒烟测试与回归测试/index.html","522d0d2c214c6efa7d87f2d8d3d675d3"],["/tags/函数式编程/index.html","99124856b110bbac99ed6fc40eb2f9f3"],["/tags/创建博客数据库/index.html","3b56c866db6f6f2e890c23a368099467"],["/tags/初始化模式/index.html","5b21406f1efa57552f5a19487dc307ed"],["/tags/单例模式/index.html","a6b607ef71fbe15a7e4fe1a3381bb7a0"],["/tags/原型设计模式/index.html","8ad527640c61a2a4da7be8cc3571f77f"],["/tags/命令设计模式/index.html","5f6c62dcde32583a48ff00ff63324a20"],["/tags/基本控制流/index.html","c4d87cdd9f82bcf427159a46c3af1d4d"],["/tags/外观设计模式/index.html","5830608a477447059325fc5d8256b4fa"],["/tags/委托设计模式/index.html","35f5fe3951909cfe27be665c5289f631"],["/tags/子类化样式/index.html","e560607d16c6d0c16a018c284b5e1628"],["/tags/对象池设计模式/index.html","b8937dc970dea52b1e83a90cd0d02884"],["/tags/工厂方法设计模式/index.html","bce44dac653ad791a8f5339c96a883d5"],["/tags/工厂模式/index.html","f34aaffe978220f78a15d245b2e2a6ee"],["/tags/工厂设计模式/index.html","b56d84afd9b9b63ab0ac04d04f70281e"],["/tags/开发技巧/index.html","be86544edef286ba83ccbf547177a679"],["/tags/开发记录/index.html","fec82adfab4cccbd042c19cba42bda5f"],["/tags/懒加载模式/index.html","ab1a085efd436ea61483b3a9b2dca36b"],["/tags/技术支持/index.html","df881dba89338574cf019eb90cb3c7b7"],["/tags/抽象工厂设计模式/index.html","b294bd4d9dfc7e7efa87c3897ec1e348"],["/tags/数据库/index.html","80f1da4d1eb376ce629e6c507e49cbd2"],["/tags/构造函数/index.html","7aa5d9e3c385b6bf4a0806720297512a"],["/tags/架构设计/index.html","4b72b33a24ccd667cfd7dd3571bee465"],["/tags/模式匹配/index.html","a62cd048a20ea09c4bb0f1c89e66286a"],["/tags/生成器模式/index.html","c8d873d8fe9152bbda80eda35d2d0745"],["/tags/用户体验/index.html","f85343e51c250ef38e3186c82432d85c"],["/tags/用户协议与隐私政策/index.html","5f12d8411bd45f03c0dd2a7f4ce28e14"],["/tags/类型与操作/index.html","beffd9d2cec73d465e8ca7771b016311"],["/tags/自动化布局/index.html","c5819bfbd3d4d02c186fe40514ba32df"],["/tags/自定义UIView/index.html","49cbf1b0b59353c0860e658d33cc3017"],["/tags/自定义转场/index.html","131d82ec3519fb8ec51e8229bf076733"],["/tags/自适应布局/index.html","71918361ed9eefcf004f9eecbcdfee5b"],["/tags/表达式、变量和常量/index.html","cbc6319c4c83e1f8dbbfa2dacc66dfa5"],["/tags/设计模式/index.html","f6d84e004073e9c7a58559e22d2b4feb"],["/tags/设计模式/page/2/index.html","997f3d414b780ff782b442c85183121f"],["/tags/设计模式/page/3/index.html","e057ff908b0527983b0dc8c249b89020"],["/tags/访问控制和代码组织/index.html","2bb102c72b0d7c069ae41a863c8a2d32"],["/tags/运算符，下标和键路径/index.html","28c88b8c5a7b73872853adf298960ace"],["/tags/迭代器设计模式/index.html","f7ef17acb50ad01aa372293674d1f2e7"],["/tags/适配器设计模式/index.html","4b1a03ec0fc6e43a3ce5287f8d57eef5"],["/tags/错误处理/index.html","1b4b34faf172ce39b822c8bd015fa32a"],["/tags/静态工厂方法/index.html","c31d08205c703384a256ae52e201785d"],["/tags/面向协议编程-OOP/index.html","5373504163e2d6f58aee44d32118f35b"],["/tags/高级主题/index.html","fb187a5520d1d3cfe00cff7a53d05d69"],["/tags/高级协议和泛型/index.html","4790256b724238a80e20dc7accbb7521"],["/tags/高级控制流/index.html","653d75f0a4adc16c3c8f89b4c6503df3"],["/xcode 常用的快捷键/index.html","18f165e5211446ba73a1a779427f2ab6"],["/为iOS应用构建输入表单/index.html","182089775b1ede468d8ae412044de002"],["/产品开发的幕后花絮/index.html","17fa2da67d81fe84a645e3b9c44de40d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","55062d1c199c16e3cc2f721b543844ca"],["/冒烟测试与回归测试/index.html","ad555c38e9b06e05652b0935f586bc6b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","19e5f66a4b873642f55ce59668482e6c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d48f2421717b392cc44a3279398357bd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ac29f37a98bd30bf83e105224f081942"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a6158e053f39db8e4f975d9c26b28967"],["/在Swift中创建自定义集合/index.html","ee36ff6cd1b85c204343c39636320ca6"],["/在Swift中处理非可选选项/index.html","0a3707274e8405227573172b669ae6d9"],["/在Swift中生成随机数/index.html","ecc09f208d7c75b794d5a786a6afa3ee"],["/在Swift中重构单例模式用法/index.html","b4c1f7cb64f114ef99ab5b212422e145"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","ed4777526abacd2770e8778abab95540"],["/如何为VIPER编写服务？/index.html","30ee68e4893d663fb4e18c1b9db7da44"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","67f621f80544f480138ca79a99169894"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f828c97fdd77ccf6708d9cbb0493dda9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","35dbf0b4b9c16051decbba47db9c8f0d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","933b300e4b2e18743a2c260e2477894c"],["/掌握VIPER架构/index.html","e5876f8f683ee02439ba7a3e13220ecc"],["/揭秘 WordPress Hook 系统/index.html","fc4b9b5b5f462598fdf42970743869be"],["/比较工厂设计模式/index.html","4653a3d5c788429472d92c2bb38b4b50"],["/深入了解Swift中的Grand Central Dispatch/index.html","4ebf35dff8f3e3a004d4cb5cea1d4652"],["/深入研究Swift框架/index.html","f221416d62634d8b5645a39a14e8270d"],["/美豫直聘技术支持/index.html","9398ec72fbe242768beeede3f0466475"],["/美豫直聘用户协议与隐私政策/index.html","530d70d0f6fe667aca02d10ab8958e96"],["/适用于iOS开发人员的VIPER最佳实践/index.html","45b3d808cb8b15c831aac60621b26033"],["/选择Swift而不是Objective-C的5个理由/index.html","81ad4aec3f2be3a52d99f64830d70b1b"]];
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
