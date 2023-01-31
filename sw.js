/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","60738ce7d24e95343b954bb1db33e536"],["/2020年iOS面试题总结(三)/index.html","3389fed14d57631063f31a407d695402"],["/2020年iOS面试题总结(二)/index.html","9a8a21cf68a00df447569fb0d50cc969"],["/2022 iOS 面试题(附答案)/index.html","247cbc562f634d5c8237914ea1c5e4e6"],["/Advanced Swift系列(一): Swift 简介/index.html","fda0533eb15469b85e825b5e96f00b9a"],["/Advanced Swift系列(七): Strings/index.html","a57dd3c21836e254fd9168d324b3e9a9"],["/Advanced Swift系列(三):  Optionals/index.html","4593d0dc2d781256ef11015cf00d86a7"],["/Advanced Swift系列(九): Protocols/index.html","1d34c3b371aeb7a9234f56be8ff991cf"],["/Advanced Swift系列(二): Build-in Collections/index.html","c24c1e2b9be0b44c6490e0cb2897401c"],["/Advanced Swift系列(五): Structs and Classes/index.html","c38d486d5e73b34ac0b24fbf03e1c63f"],["/Advanced Swift系列(八): Generics/index.html","faf041aa54b006064d2c99183ade8c66"],["/Advanced Swift系列(六):  Enums/index.html","bb6231aba76455494bcf1d4a3586b363"],["/Advanced Swift系列(十): Collection Protocols/index.html","217b79a5483e5fa23eb97bb91bc01d44"],["/Advanced Swift系列(十一): Error Handling/index.html","c5b906e7d1fef52a359374c8a1b3a93c"],["/Advanced Swift系列(十三): Interoperability/index.html","3cb38ad4731b96d5053f086c3a2646ac"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","314f22cc330bef0070e05ffe769bf492"],["/Advanced Swift系列(四):  Functions/index.html","f4e994f043cabfa23740c0845072f9a3"],["/App Architecture系列(一):  简介/index.html","fd87e9acf7bfd1f08809b2ba2d1c4ef6"],["/CocoaPods 设定版本说明/index.html","b13d3a5ddca8acf8588261b792e9f97e"],["/Docker 启动 MySQL 指北/index.html","6f7f0d797d5caa2ffbc42966bbccebc1"],["/Functional Swift 初探/index.html","5d8404fac2eaaf6491870d62aa8785a0"],["/Git 使用小技巧/index.html","981b60510426f6aed13dc349b30201e5"],["/Go Protobuf 初探/index.html","1defbe0a67f02c8e87b29e86d83e5415"],["/Go mysql Tips/index.html","c3cff28d75de216da7d543a4700a2e77"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","7e1978fd73629a299d4f1319692760db"],["/Go 入门篇：2、Go 实效编程/index.html","f38ad1d68dfd9cdfcbf1d19fed4b3da4"],["/Go 入门篇：3、Go 重要概念/index.html","41375565b305200e3f3be7c956a71758"],["/Go 基本语法初探(一)/index.html","506b315369dd9ce4e9ea84eea4c46d6a"],["/Linux VIM 命令及操作小结/index.html","e729209f624332c5c2a2d9e1a35e2ef4"],["/MySQL Tips/index.html","a315bee3a4c3e0974a2ed37b4ddfc888"],["/MySQL 基本操作/index.html","8e17982e52ba23a50c81d44d336c5b30"],["/MySQL-列类型和数据完整性/index.html","2b2e4eeee335dfff7b66bce54e8d31dd"],["/MySQL-数据库设计和查询语句/index.html","46de4148b0616b86bdd47c71e0528f57"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","87fa2bd01539ef5e8710bb4ce853a241"],["/NSCODER和SWIFT初始化/index.html","cb32846446155edd5905d653fab2ba29"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","cdd3e5ee416c5059f972f45bc76344f6"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b840657a09eb77252b956c8862224fcc"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","83c45ffda8415f02a4e4814aa230dcb0"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","370329db6fdebe7c21936572cfc98181"],["/Sqlite 使用Tips/index.html","21b59d77633918fab142f4a3017f7c55"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","74c102a0ba6562bf2699389a775a11a9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","320487eca1dd85898c907f7791cdff28"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","430201806af458add449808e91686641"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","8284658c43834622126ffbf3410dba20"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","9f0199bc6edb37c4a9973422c8db3426"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","07cad3d18771ed7122fd9b368aba3e5e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d43205e8102110c2977acf991d56b079"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","62563d66d2dcf5883f2fd1bc1c494dad"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","e0414673e8f278a68083b3bdebd25454"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cef74886ce1ab16c45147dd6166193f4"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b2a5e10b323341d4e7278b90ad7cdce1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","33e019ed8b840559d272549598b5cece"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","1a7241427dbc9ef1990941c202beceac"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","33443cabbe45ce2f431338bad2a2f2d3"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","3cfa327ef0545076ab7cd140721c4872"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","e00b6c1bfd7f2f0a6f874634920ff452"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","9d2870d80f0daf96156f824d16131d41"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","22f6147f81f0bce74ad778e1b13947d6"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","fa3970296baafd9e520707ccb4f585d2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e7ba50a9d3683f1e8fc526e644d8b960"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","12cb82526b5a207ef7fb2f5be61a2260"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2f9edbc938ad3ef07c962ff66b11e99d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8de493efa818605a3690174d5ba34901"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","98457f5a90e1b789cbb0f8d0bc41fb39"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","4ba51ab1ba2e0e8a1d471e4255a9a998"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","10bbf1ed2e4012cf607e4cff4b6f1e0a"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","1505d5a637c931261a6381f20bf60152"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","f585ab78719a1b52d293c4834017abea"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","56aaae46f7eb6230ce3e743e57923cfb"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","95234197d16fb1370870fba363141c45"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","74cf894d7f9ccddc43dd6a2a17241e40"],["/Swift CompactMap vs flatMap：差异说明/index.html","43bed2a6b46e728e19ff4d018e8ccf70"],["/Swift Grand Central Dispatch 深入实践/index.html","9f25a7825fc5f6b31d65cacd9a832574"],["/Swift Lazy属性初始化/index.html","657baa295ae1b352662ceb0e4a32455c"],["/Swift Promises 初体验/index.html","a8de2babcedfbce5ce7378247676da9f"],["/Swift Promises 探究/index.html","1e01de75d970a4e772bd71da25b7d108"],["/Swift UICollectionView使用指南/index.html","bd9eb2aea7d66722d476adcff0b45a38"],["/Swift URLSession && Combine framework/index.html","6ada0abd20a29fc511cd52ca2e959c93"],["/Swift tips/index.html","6fbfd718d83f8bf67753f22839957e05"],["/Swift 三方库：GRDB 使用指北/index.html","45481205283fb9e47bd61773a4dcef46"],["/Swift 唯一识别的视图/index.html","f0f2d77dc0e1a5058a81c1fbda15cea7"],["/Swift 如何学习现代UIKit？/index.html","f1650085a05aa5130b4216a2796f6746"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","5e168a46a8056281646cce658eb4affe"],["/Swift 用 compactMap 替换 flatMap/index.html","338b1d7ba18ea78dac8f44a1c50a4495"],["/Swift 选择和播放视频/index.html","d0374a12e5a23290d61ff2ad14a977be"],["/SwiftUI 系列(一)：1、 简介/index.html","b7d41e83a95b4e63c4f3db7f68988c24"],["/Swift中UIColor最佳实践/index.html","40c7ff6919a620e537260bd13ce5c98f"],["/Swift中快速简单的工厂设计模式/index.html","cec3b602da70860b93005e7b79923da7"],["/Swift中构造函数与静态工厂方法的比较/index.html","539a3c1fc2ab8796da8ede55c5af5854"],["/Swift中的UITableView教程/index.html","d9ccbf8ab22a8156c6fa6682004a7e08"],["/Swift中的懒加载模式/index.html","355eeae5d0f528daf7428592a5055041"],["/Swift中的模块和挂钩/index.html","673eecaee03dd474c1e9d6e4c9c827b8"],["/Swift使用布局锚点添加约束/index.html","8acad89fd24ed991b18c4d92af37aab4"],["/Swift依赖注入设计模式/index.html","9d3892b2737b83079643894a9075f04f"],["/Swift关于Dependency Injection (DI)/index.html","9373ef2bb1f3d25e56865301a43af2bc"],["/Swift初始化模式/index.html","ce08df75314aa210b766035c66b02635"],["/Swift单例模式/index.html","0e2d3973b8879897f49bbc8e5c303cf4"],["/Swift原型设计模式/index.html","104f7b2956e9b15269407e6516341119"],["/Swift命令设计模式/index.html","a827836814c06c8cfe506277774938a8"],["/Swift外观设计模式/index.html","d9dfa00651f7d67c093823a80a4f7200"],["/Swift委托设计模式/index.html","03bd105980bea5bd1ee71eefbd142681"],["/Swift对象池设计模式/index.html","ed0957952d31f4225948c6b9ae5cda75"],["/Swift工厂方法设计模式/index.html","643a00b89e6fb8b7577312c39ab23c0f"],["/Swift带闭包的懒惰初始化/index.html","66e0f66a2aa0e82c4571a114a2ca5803"],["/Swift抽象工厂设计模式/index.html","0b8256bae92e84d44608ba2ca4769664"],["/Swift掌握iOS自动布局锚点/index.html","498694d5a11fb4bbdd5409252bfb4c15"],["/Swift支持旋转的自适应单元格/index.html","b246dd6052ad4a62109894f18e6ee407"],["/Swift枚举值/index.html","98e0841b01f894e7d5145f40df774beb"],["/Swift生成器模式/index.html","45d425897c78211873cf7a7b3eb94877"],["/Swift结合Xib文件自定义UIView/index.html","52c6bb895f4ae4da3273bc76cd5b8f03"],["/Swift编写的20个iOS库(一)/index.html","40369ec5edfd3e463971045a574f51c1"],["/Swift迭代器设计模式/index.html","8a15ad214dc60a1512ee947c25c1f433"],["/Swift适配器设计模式/index.html","cf2b90ee0747e7146a1ae0e0c3224878"],["/Swift静态工厂设计模式/index.html","e4736ff258cb34ef17a1a40de089ca41"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9fc4325c8024fcd273fb4197197b2f56"],["/UICollectionView data source and delegates/index.html","97078739335c43e3b1372695d9341afa"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","3d24d008f32408d196359c6af55c3d7c"],["/UIKit初始化模式/index.html","219db0c9cf5837c8a6dcaed752990fe9"],["/Ubuntu18.04替换国内源/index.html","f55800c2355b534f2cb98f9b94a5ede2"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","90794a6514fd99aa0aa0b9441b6948a5"],["/Vapor系列 (一) :  Vapor 初探/index.html","74e6d3aa67d079878e6bf2df90f57426"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","059a5f91ac5b5dd65c0d2b240dbd0c38"],["/Vapor系列 (二) :  Hello Vapor！/index.html","8d876ec90f2e34bafcca775136b9c6e0"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a2409cefab4a76ef148110ccefbab2ce"],["/Vapor系列 (四) :  创建博客数据库/index.html","223351a055a8f4884e92848d9a644c66"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8224367b9885e37a811ec41f19def086"],["/WKWebView与Native交互注意事项/index.html","9cd185909045e45a4ce5a2a813274be9"],["/Xcode扩展/index.html","08d1e6f6e2ac595a31367302d0ff326d"],["/about/index.html","d1845d3331fd5a56d6ba0e142d7fc7b0"],["/appleOS的Networking示例/index.html","a65db42dac2d23aea4869db9098ed52c"],["/archives/2020/03/index.html","e0d94bc3df85b3b39f22c24b4ccb45f3"],["/archives/2020/04/index.html","d6a825d0ed8f748c43099db40587aedc"],["/archives/2020/04/page/2/index.html","4b22a82f694fb8820635d3cc8978c036"],["/archives/2020/04/page/3/index.html","3bc198fee88ade8bd97e8f6b1a8689c8"],["/archives/2020/04/page/4/index.html","bad4e7358a6d498989934f394bca6313"],["/archives/2020/04/page/5/index.html","f9d8ba3e89a3a9b0efa15ba34f32c7e9"],["/archives/2020/04/page/6/index.html","1c1779723bae9cf700aa684c6bfad78a"],["/archives/2020/04/page/7/index.html","c90ad8d110f81628d6e75c34ce269ee6"],["/archives/2020/04/page/8/index.html","076ae8054173c356552435dd6d67f169"],["/archives/2020/05/index.html","7f1bb19ce23a25c3df28d47ca6fe1fd9"],["/archives/2020/05/page/2/index.html","14dfd5f916e7ca254cc3d35a2d6b55cb"],["/archives/2020/05/page/3/index.html","6f21ffc7b0ffb3adf7e1b42482504cfe"],["/archives/2020/05/page/4/index.html","890eb2f652a357da8d92c98015a7fd96"],["/archives/2020/05/page/5/index.html","dc1422031af7f449e88059fef13bcdcb"],["/archives/2020/06/index.html","cc05c56778dac9b08afe1b485af360cb"],["/archives/2020/06/page/2/index.html","59dd100399f1ee0d6654adeae1bbaa30"],["/archives/2020/08/index.html","f30eb1b82db26134815e56896d6b2e7b"],["/archives/2020/09/index.html","6efc881a86898cb24d9ba9c29fbb0851"],["/archives/2020/10/index.html","38413048b727479dc1ce5a28570b86b8"],["/archives/2020/11/index.html","15484a88ec1afee5510c7bdd0a4fa707"],["/archives/2020/12/index.html","800dccc82b82ed4e6928d4987ad9b970"],["/archives/2020/index.html","e79123d489715d0c05ec72c4654210ee"],["/archives/2020/page/10/index.html","9f9acef9127744295a8ed9f3b4708222"],["/archives/2020/page/11/index.html","a810e2205947cdbaeb939cb112205ffb"],["/archives/2020/page/12/index.html","6190591ea068e4df676351821968e62f"],["/archives/2020/page/13/index.html","78b91f75188f565d55d8a5349532879f"],["/archives/2020/page/14/index.html","8fc305be36c7efbb3547b5c589525809"],["/archives/2020/page/15/index.html","6a976080d3d18794ed9be538898a9db3"],["/archives/2020/page/2/index.html","f3e0f02a6dae62566c3e734ac1c9ac6f"],["/archives/2020/page/3/index.html","2aca353d02a141d3aa9d9c30d2f5a211"],["/archives/2020/page/4/index.html","004521340680d25902ccdef7a9147a7b"],["/archives/2020/page/5/index.html","68f1b013e968ee25150170cc16b12538"],["/archives/2020/page/6/index.html","3e44b071ce9c4ba6213294be0cb75095"],["/archives/2020/page/7/index.html","445b6d6e42e3938803db8cc8f81fcd4a"],["/archives/2020/page/8/index.html","dd4a7e5edd9bb283a6b24a345d3266b7"],["/archives/2020/page/9/index.html","b36a548737600ef34169d85c4ccf04f6"],["/archives/2021/03/index.html","7823c7cca185dd2684a3988176e50081"],["/archives/2021/04/index.html","9331844a245a845b07ba8d58550b64e3"],["/archives/2021/05/index.html","4fdcfe4a936529f56a6b49d881ab4a73"],["/archives/2021/06/index.html","a1455605ba6899d5fb7345bf3e524589"],["/archives/2021/07/index.html","2cca8f252d219590a89ccd898d6e1bc9"],["/archives/2021/08/index.html","a43764f09a597754205b94794721e95b"],["/archives/2021/09/index.html","58296ffdaa7c53c90b171f13e72f66ed"],["/archives/2021/11/index.html","2de3e50f04ae8e0285695fdddb7c9357"],["/archives/2021/12/index.html","dea8e4763f087e9eab223d5a246ea684"],["/archives/2021/index.html","6ab7ca4c2fc67556c66c67bbf455a131"],["/archives/2021/page/2/index.html","c7a79ef9b1512668ddf6557411157aa6"],["/archives/2021/page/3/index.html","2cf243162956c7c4661d0fa847683da7"],["/archives/2022/03/index.html","0f3a9790d7917fd4dce22856ea82cc35"],["/archives/2022/04/index.html","0dc9eed8a2874b0e84c82c107dfc549d"],["/archives/2022/05/index.html","48cd2152e51f332a7580b6cc3565d7e8"],["/archives/2022/06/index.html","829710a76a00648d9f5ebdc2873ecc5c"],["/archives/2022/07/index.html","57b9aa489931d91ab0dee8124464335f"],["/archives/2022/08/index.html","c0b5134332b248b6874404c408bc6455"],["/archives/2022/09/index.html","12f32e9dd7ff096d80b376dd9218b6ed"],["/archives/2022/10/index.html","0f1bfd4551b0878a531b196b2a6a37ce"],["/archives/2022/11/index.html","9344b84f7dc9e74fa4160f537e2483d0"],["/archives/2022/12/index.html","08e902b0e66eab3084f5d64a66afdd8d"],["/archives/2022/index.html","1163a9835fe1645c79a2143d8a553370"],["/archives/2022/page/2/index.html","3e71982ba8a4d4aca1a4e2d425885271"],["/archives/index.html","ccd83373b016f298a44c0a86e6de036f"],["/archives/page/10/index.html","7afd61c1868b5bbb481b6576a6bb7911"],["/archives/page/11/index.html","4255065bfb224ec59a11c18a7bd3ba64"],["/archives/page/12/index.html","e186570d4f7e649404fb0cb4c5701d45"],["/archives/page/13/index.html","fe4c650ce1371fc3d6c8ab113e9a5745"],["/archives/page/14/index.html","818c4c0219135cfed9029f75882d7c13"],["/archives/page/15/index.html","0bcd441ec6fb0befa7e87e6130f3fdef"],["/archives/page/16/index.html","cb2f8c1b76ce2e6f13bffee59cd4970e"],["/archives/page/17/index.html","40110b277aacd7c5b1b8d3b5b3547794"],["/archives/page/18/index.html","fec3ba9b2b30454a2728b40014453455"],["/archives/page/19/index.html","3b353d9a9d6c3e36000a060170ab22cd"],["/archives/page/2/index.html","8be3d028589e7d35a3641c7f29473580"],["/archives/page/3/index.html","54da71db84c4bdcd9536673f3484d647"],["/archives/page/4/index.html","ab049f0585d59c8199fc11baddfa0a6a"],["/archives/page/5/index.html","e6070b4b64b1a87cbf99f7c3052dd0a2"],["/archives/page/6/index.html","522c8638b2f770f82113dd8ff248901f"],["/archives/page/7/index.html","e8796c0e665752ad16d3b4f040e0317a"],["/archives/page/8/index.html","e1906f4091c8e1782e4d0c8e88115058"],["/archives/page/9/index.html","43298178503a2c4ecb242a0c9b8cf827"],["/bugly 上传dYSM文件小记/index.html","51f489dccf88e6cc3dfe13d4c340b41b"],["/categories/Advanced-Swift/index.html","b5f9447693381b481a18a2629ab20af9"],["/categories/Advanced-Swift/page/2/index.html","381ece0feed8d7f1120c96453e08d726"],["/categories/App-Architecture/index.html","3b3121b68a3322f04f7e13d8e06b235f"],["/categories/Array/index.html","d66c0d564fec8b1856a251a36f1f04b4"],["/categories/CocoaPods/index.html","f2ad31af1ca341cb5ada748f407e26bf"],["/categories/Codable-protocol/index.html","389bfcdff77b704612ee1508ae6993bc"],["/categories/Combine-framework/index.html","fce2544db2fc8c5754d447ce34663fc8"],["/categories/Combine/index.html","faf9ab4786956c0629a3a7e0c7248e82"],["/categories/Docker/go/MySQL/index.html","58c3c38e0fe03c8ce460853ca3ae4dd4"],["/categories/Docker/go/index.html","bb8afb8cdbc51fae6c37f1619201de75"],["/categories/Docker/index.html","2ec2e3ecf90fd3cdac74f2b0de0010e5"],["/categories/GRDB/index.html","07fc0ba818a4ce80df0fc0f451856917"],["/categories/Go-入门篇/index.html","ce89caabc8591e904d0fb24e8cc97e01"],["/categories/Grand-Central-Dispatch/index.html","53672891c45cc03d35724a9b8ab4d668"],["/categories/Homebrew/index.html","58b4a0ffc32f881bc79322d12bdc52f4"],["/categories/Linux/index.html","8584b92d265e5ecec581068fba81928f"],["/categories/MySQL/index.html","26aafcd51c1959fdcee8d21d828cd142"],["/categories/Promises/index.html","a6641ec722983723b687aa410766a069"],["/categories/Protobuf/index.html","2463bebef4a481eb1583494e87b1b4e6"],["/categories/Result-Type/index.html","c056d577b5cfcdac882d13ac698f252e"],["/categories/RxSwift/index.html","cb61a21f827bf4d155496ef593f196a0"],["/categories/Server/index.html","cfb8ebf01d7265a017832f3729f2c6f5"],["/categories/Sqlite/index.html","3084a9705d4d37a55e7c62fb8754fea9"],["/categories/Swift-Apprentice/index.html","5dda2db98ed272d00487f9728455b1d1"],["/categories/Swift-Apprentice/page/2/index.html","45634719822f24a81d25b777ff32f0a0"],["/categories/Swift-Apprentice/page/3/index.html","1c2662f5b20671f5af7c5bbd8c7db500"],["/categories/Swift-源码阅读/index.html","cc8eeb8f2cc950c0be3786ddd3866ed1"],["/categories/Swift/index.html","8204c21b8dd511a6a9f002ff6ab0d212"],["/categories/Swift/page/10/index.html","da9907999a4d11c8fae80faacbd555a1"],["/categories/Swift/page/11/index.html","6c81784ee7d58409d3691866b7ab7486"],["/categories/Swift/page/12/index.html","35449c18f9f2d178c22add3dcd8b4c2b"],["/categories/Swift/page/13/index.html","fab0c3cdf21eaec6a0140e2d40961d1c"],["/categories/Swift/page/14/index.html","9d6702d976bbe04667baa60f347d6723"],["/categories/Swift/page/2/index.html","813d787e9ee3d79ed77649abb17e9646"],["/categories/Swift/page/3/index.html","f4412db6f2031d3563327f9371ab4222"],["/categories/Swift/page/4/index.html","7a3488912a3e4950d250efc4530fe84f"],["/categories/Swift/page/5/index.html","c27f087f485ce805418fe10cb6bb35b3"],["/categories/Swift/page/6/index.html","97e0f3e04868e1bd80ae02629620c84c"],["/categories/Swift/page/7/index.html","0c81eb5763c5990f683e0bdb53828ade"],["/categories/Swift/page/8/index.html","0fe52f6c4a2ff29b1d797084d73401fe"],["/categories/Swift/page/9/index.html","cb552980b109155ab42993dd8c16d193"],["/categories/Swift5-2/index.html","c167f770d34e0eab47206fee205f97ae"],["/categories/SwiftLint/index.html","39af64f1b9d1e9e60f0f98413c40c374"],["/categories/SwiftUI/index.html","fa1bba067327311c0d0711fff9dbb5e8"],["/categories/UICollectionView/index.html","5889edd15db0c70aa912f5665452ac3e"],["/categories/UIImagePickerController/index.html","e5ec2582d5f50d8373ff078c197d4855"],["/categories/UIKit/index.html","71a22738b6dfb9ae1f3506f078f7d8dc"],["/categories/UIKit/page/2/index.html","7796e9b646830e884b3475bc7f7c131e"],["/categories/UIKit/page/3/index.html","63be7a59afdb397a71390accc3b4c4d7"],["/categories/UIKit/page/4/index.html","23e7750b98e43c00ca467d6fd208bea9"],["/categories/UIKit/page/5/index.html","9a921649f7d39b62d0a80d3f32717486"],["/categories/UITableView/index.html","41bdaa9fe34ffee13b89b41cfcd87b98"],["/categories/Ubuntu18-04/index.html","73e6de585ac88e906a054db30cce6acf"],["/categories/Ubuntu软件源/index.html","93aef7140628a10d8d83f2f510457512"],["/categories/Uniquely-identifying-views/index.html","3ef444d1f05f8ca127c4888591b9832c"],["/categories/VIPER/index.html","cf88d7c96c212b9e2eaee96756258f4a"],["/categories/Vapor-4-0/index.html","fde3601b8092bb7f1a2d41b6c5da5e24"],["/categories/Vapor4-0/index.html","f314ba6d2ef5a201fd7f92be1b0dc61d"],["/categories/Vim/index.html","a0642f22c2a09db137eb0cefbebde094"],["/categories/WKWebView/index.html","e43bde245fbbc24e176886b972ae60a7"],["/categories/Xcode/index.html","5efe4083aaae6c7e071f4a13ae2f1650"],["/categories/appleOS-Networking/index.html","a5c1494d558d6beb209b65f902570052"],["/categories/bugly/index.html","3d5c3c29118905674595dbdc697f84f0"],["/categories/enum/index.html","2351c8600b291a4c7bb866e6b99bde86"],["/categories/git/index.html","e078e7f355ba61c08db4adebd9f7be8b"],["/categories/go/MySQL/index.html","39a478033a5560cd1d98c1bad345866d"],["/categories/go/index.html","62311882cb5a6c637da559a8be1dada7"],["/categories/go/interface/index.html","0d114fc45d1b62bab144e11b549bd0f0"],["/categories/hexo/index.html","1f60f8b136aae3b0b58693b49b287b18"],["/categories/iCloud/index.html","954725bd6f6698887fa704dd2509f795"],["/categories/iOS/index.html","414876ec355dd97c215393d27bf9e4c3"],["/categories/iOS/page/10/index.html","66167f3c39100f5ed9a83f6ee56494ce"],["/categories/iOS/page/11/index.html","16f189308c7d463d7b30f095072a99d9"],["/categories/iOS/page/12/index.html","1b7bb6a92ea97d0d7bf45540e6fde76f"],["/categories/iOS/page/13/index.html","27feb3cfdd55ff506101358b11897c59"],["/categories/iOS/page/14/index.html","2e1e24a1c93edd0b964ce02bb24ab690"],["/categories/iOS/page/2/index.html","4751af27a93fa40cd737d7758fba4a83"],["/categories/iOS/page/3/index.html","d1116c7a4b4accd50a4446f0e9996bba"],["/categories/iOS/page/4/index.html","8a0632535f2f23056b19faae5c648f48"],["/categories/iOS/page/5/index.html","33ea0d8af4245afe3cb930769a3cd56a"],["/categories/iOS/page/6/index.html","ac7fdffd768d878033e4f332d8463d8f"],["/categories/iOS/page/7/index.html","2621d9bf2174b60b0553febb9a213f09"],["/categories/iOS/page/8/index.html","4f6f724c366f09cb8c6f7bd3c4cf70d1"],["/categories/iOS/page/9/index.html","98be25f16e727aa18c762271ca798948"],["/categories/iOS/面试/index.html","95d5d1f2d46a557a779d1a6836dd7989"],["/categories/iOS面试题/index.html","0c81d284365d8e79ac1feca99b48c49a"],["/categories/index.html","dbf5b432553d6c18799fd64196b78c15"],["/categories/random/index.html","2133c7d0d4469fb3f0712b3e7da9579a"],["/categories/三方类库/index.html","4406fb52e264f82859bdfd295d02708d"],["/categories/函数式编程/index.html","e202d898302d8e6edf605da98457c0cc"],["/categories/子类化样式/index.html","af1f388483a95b91062480edc57004ad"],["/categories/小程序/CSS/index.html","1ce13404d84131a4801a1db8a6720ecd"],["/categories/小程序/index.html","9f4951c26e9f18a74bf176de87d590fa"],["/categories/开发技巧/index.html","c003130baa57b639d776b00af4451da7"],["/categories/开发记录/index.html","aa8f422129937f14b5074857d3533f1b"],["/categories/数据库/index.html","08f390b4caf67407f1158dbd36de1c06"],["/categories/架构设计/index.html","0bf9aec4e48b9db75899fcafcba52396"],["/categories/测试/index.html","b195b95ed1fb3b456f23c677d2425d82"],["/categories/用户体验/index.html","87c3d381badd7fde43a8bbd7bfd41482"],["/categories/用户协议与隐私政策/index.html","f3d4565129d014d91143ecf1e8373229"],["/categories/组件化/SDK/index.html","82b20eb9669a3b9bdba096b1faf0009e"],["/categories/组件化/index.html","8676464dae702c6680b3daacbe75998e"],["/categories/组件化/模块化/index.html","6acf8f8d638c54c9f8ad15f9fbcd0769"],["/categories/设计模式/index.html","9e51eaf332e084b3951965e15c36f7dd"],["/categories/设计模式/page/2/index.html","1ebd23389e1ced42641afe16f84efc59"],["/categories/设计模式/page/3/index.html","99da57997b2ba572f984b7d83a55db2a"],["/categories/逆向/index.html","8ba90b453c5e76d278560e33486c9a35"],["/css/main.css","6d3376ec5888191d95d6d0cdd9158453"],["/go moudle 导入本地包/index.html","cf57cc0c970797f7396f6e8bf54f76c1"],["/go 库专题(一)：gin/index.html","faa94edc8f8bbe43a98ced03c019ff9d"],["/go 每日一问/index.html","0d789336d33126cac44b9990f4253491"],["/go 项目实战：gorm 数据库框架/index.html","938ca84255bb92a225b41c165736581a"],["/go 项目实战：zap 日志库/index.html","3793f996c99cfd0533f42d7d335a0f55"],["/goland 学习笔记/index.html","b03fb7becf82bea56353ef4b60da7379"],["/hexo部署失败/index.html","3d8e23cbe8785225b950eb3211f2cbf5"],["/iOS 15 适配/index.html","0fff2e7d14988dd6b38c259986fa627f"],["/iOS VIPER架构深入实践/index.html","40ce121b3bec6eba8dfb99bedeaab4bd"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","c59473fb91918b3c7d7668364116c229"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","a1120dce4a66428e087204a51c48886c"],["/iOS 自定义视图，输入表单和错误提示/index.html","99fbe4d996e990e9abec07f568d93e64"],["/iOS如何使用iCloud文档？/index.html","a8213f2909675b51ed93b5e549881f1e"],["/iOS子类化样式/index.html","cb716ae68e3674eba6ffe690ae4d70b8"],["/iOS开发记录<一>/index.html","9495c1f589fb70d75df8fde78c80fcf1"],["/iOS自动化布局编程/index.html","fb0ad41299bd1d316a6a3e277c639e72"],["/iOS自定义转场(By Swift)/index.html","c203b27f876123cce00350cd10d4d5c0"],["/iOS项目架构：使用VIPER/index.html","0216075370a8d334d5aa692f736613d2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b669e4472cccdd149a9b56895680510a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","893b4d040de4c3ce0fd74bb0d12fb948"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","2a12159b7eb28d5f87657b693052060b"],["/page/10/index.html","9aec4e2c364b974f14344ec89a590760"],["/page/11/index.html","b56383ae5b6341bc0717a455ed978802"],["/page/12/index.html","05edb804560e3fb7b1a27b65a6392ef9"],["/page/13/index.html","b170d639dd22381369cb0461b2265acc"],["/page/14/index.html","3f623af1d9760fe25f018b7605081b17"],["/page/15/index.html","db95f0ad7c1286399735e40ba2c5efe8"],["/page/16/index.html","35a1e359248d084acd743ca8490a83bb"],["/page/17/index.html","bbc26be7dff7799cbf71d6bacc5b0843"],["/page/18/index.html","cc43a4836a61af74884a7965154fa856"],["/page/19/index.html","34d8636baea37569157a0502d64332a5"],["/page/2/index.html","00275932d89b1ace04e4b928e8f4b2ae"],["/page/3/index.html","0f2ca863f8b8e272b669c6a9bbb51c6e"],["/page/4/index.html","3b17ee9c1778a53ec4bec39887f65760"],["/page/5/index.html","3d6afddce7f333618e841abacc55a08d"],["/page/6/index.html","b1a188b646496600a18a8ea577913132"],["/page/7/index.html","e54a1bf88782ad2079c0ec20e20706d8"],["/page/8/index.html","e8c7f3d7880c8c84036dd07702731147"],["/page/9/index.html","0ba68ef6113855aa1cc223d8c75d32c1"],["/schedule/index.html","c5e686d2440a5b86c316715baf4f5091"],["/storyAppPrivacy/index.html","16ff796066aff48966bdbf9ce051b766"],["/sw-register.js","bb3ceac8044bb476f1761522189bfda9"],["/swift 专题：函数/index.html","e73334c1f1820e7a245bc7784fefd336"],["/swift 专题：闭包/index.html","46c55296dc49b11337b4e082848b07cb"],["/tags/Advanced-Classes/index.html","98567e39a791ed7f68a4f6e85fb2251e"],["/tags/Advanced-Swift/index.html","ff2643dd5fbc0d4f3aeaf19e231a2a03"],["/tags/Advanced-Swift/page/2/index.html","c82b2cf5bc47b4fdab7d4e1dbad7d9e0"],["/tags/App-Architecture/index.html","c11fa2f0bca892a8f0362dbc27cbf0f3"],["/tags/Array/index.html","6935480e9391566ec1002017b893f888"],["/tags/Arrays-Dictionaries-Sets/index.html","5149ca008eea05c1b2f9361326a6a8ec"],["/tags/Authentication/index.html","60684d0e464d98cf410e18b5a00d443c"],["/tags/Build-in-Collections/index.html","69b69290d4c57f8f3ddeba96b8a69893"],["/tags/Building-Your-Own-Types/index.html","f3432d503cbdbb20c18f9133364e1263"],["/tags/CMS/index.html","7d835c55c7f830bec4f4ebbec3391801"],["/tags/CSS/index.html","46310c393a3f7468b3f44c5e4ba5a148"],["/tags/Classes/index.html","f05f71336c944b93cb356704d4905e9d"],["/tags/CocoaPods/index.html","eab1b3f18d33e6bcb928df196030eeb4"],["/tags/Codable-protocol/index.html","660ff5d884685e5ebf6d1a2c67a9f73d"],["/tags/Collection-Iteration-with-Closures/index.html","6f2b4ccd73fac74543705b1d6d4469e1"],["/tags/Collection-Protocols/index.html","efe117411d88b75e118d204f04aa1cbe"],["/tags/Collection-Types/index.html","77becb43de69618c6912ba732fcabeb2"],["/tags/Collection/index.html","040b3ea315f9d9e08b13e4a852db7ab2"],["/tags/Collections/index.html","8408e4ea802bbc36733706dff06f752b"],["/tags/Combine-framework/index.html","a722eb6aa36956d8ccc897300d84f95a"],["/tags/Combine/index.html","7132bc966349a5603c5e10a582c1c3a4"],["/tags/Dependency-Injection/index.html","c8dcfa71dc81b4e239802545a62050d5"],["/tags/Docker/index.html","d27706873ddd322d338d753f1df80edc"],["/tags/Encoding-Decoding-Types/index.html","75de7a5302b10fc09e424fde43ff425f"],["/tags/Encoding-and-Decoding/index.html","368f4839ec5821e5dd73763477ef60d9"],["/tags/Enumerations/index.html","53bb507ccdf6eb16cb4de748b644e9f5"],["/tags/Enums/index.html","46aff406eb920531b214f905acb74097"],["/tags/Error-Handling/index.html","c616ff431bcf75a688626f2253b9f58e"],["/tags/Functions/index.html","d5af5dd0eb524f32f10348172a948f63"],["/tags/GO/index.html","bfde805ace5b188022aad93a369afd1a"],["/tags/GRDB/index.html","f27f2dad73a16e4ef93f2c3ed889dcd7"],["/tags/Generics/index.html","9fbd93b2e4b49350c95a04b11d8d309b"],["/tags/Grand-Central-Dispatch/index.html","b4c13c18932a42ed9dafb7563bb4dd2d"],["/tags/Hello-Vapor/index.html","6f2cea2a5fba8ec111b4ba04881e8963"],["/tags/Homebrew/index.html","1f0a4617d60e99d866f5df3b60cf5e22"],["/tags/Interoperability/index.html","9a76febc5066353fc464d24eb2e06cc3"],["/tags/Introduction/index.html","8ad5b0d9334a080bdadd2bac59a6d04b"],["/tags/Leaf/index.html","1d4fc27505d7910821586349d8a262ae"],["/tags/Linux/index.html","ad806cb20665e7dc389fba5723c931d1"],["/tags/MAC/index.html","04ea81313d6f3ee4b7171a6aa70e4b63"],["/tags/Methods/index.html","81dbb9d7d6ecafcc6025e0bb4be27865"],["/tags/Modules-And-Hooks/index.html","79740519819ccd08e444ae5d9ca790d2"],["/tags/MySQL/index.html","5aede2f5f4ccf2a9d6442c7c803d102d"],["/tags/Optionals/index.html","84da3f512885fb292cbb993940a09e50"],["/tags/Promises/index.html","0bfd231820504b6d29f8a8b382ac2688"],["/tags/Properties/index.html","86c60afa1e2abd2313817f4ef02f11de"],["/tags/Protobuf/index.html","b21944398de084f7ee956b912dc58d13"],["/tags/Protocols/index.html","34b1d2467071fd31792d06cb38addb43"],["/tags/Result-Type/index.html","28849b5a2c8e1a12642c70ae21660bab"],["/tags/RxSwift/index.html","0cfb40c720d66df096c1c3a72ca39f05"],["/tags/Server/index.html","d89982283b4310ff84db7fdac2d324e5"],["/tags/Session/index.html","9a5e92e297f2004c68a8696ba3373153"],["/tags/Sqlite/index.html","fac366efaded016f160dda3f5f4a1ba3"],["/tags/Strings/index.html","e43dec4ebe05b0ef2f8873edeaa6e989"],["/tags/Structs-and-Classes/index.html","27895856f4102289dc852f5143303ed4"],["/tags/Structures/index.html","ba091ff56f0341417ac2d837c4dad6ec"],["/tags/Swift-5-0/index.html","4ec90abd5aec16871dde980f33ab937b"],["/tags/Swift-5-0/page/2/index.html","80df657ff2c65876618b6c0475089663"],["/tags/Swift-5-0/page/3/index.html","4ab2eea6195765ef9afcbe3c68bacc48"],["/tags/Swift-5-0/page/4/index.html","f7ce09de1f95809a2a0f10dff6b19695"],["/tags/Swift-5-0/page/5/index.html","2f04fcc355560857b956d57cb8f6c883"],["/tags/Swift-Apprentice/index.html","762a028a6685ef8f1f787501effdc07b"],["/tags/Swift-Apprentice/page/2/index.html","eca98ae2c65f9c9861c0ddc300b15f7e"],["/tags/Swift-Apprentice/page/3/index.html","7b9a089ae45485130f2e186da36879c6"],["/tags/Swift-Package-Manager/index.html","5cac45f82fd04cce6a07dfbaba37e4a6"],["/tags/Swift-源码阅读/index.html","2b6cd0272c2d9e37cb38ebb6df75de7d"],["/tags/Swift/index.html","c96352782b465ecb8960f45176bd5188"],["/tags/Swift/page/10/index.html","f2363ce0b2b69cf9e492d51073041ab1"],["/tags/Swift/page/11/index.html","ddd8b5ce7a23333cb1657af42e58f4ce"],["/tags/Swift/page/12/index.html","9f7cc137f351baaeceeed3721979bd83"],["/tags/Swift/page/13/index.html","2696e042489dbb51df38f7402c05b629"],["/tags/Swift/page/14/index.html","0846b796d59a5e82eeaa967d63714e5a"],["/tags/Swift/page/2/index.html","c07ada68c4767d77ff9b7d65c7aaa286"],["/tags/Swift/page/3/index.html","f79379f1bbebe43668c69857d23406f2"],["/tags/Swift/page/4/index.html","af084ef79c217b9b02ba91d9f98fb368"],["/tags/Swift/page/5/index.html","69656b0367da903068f04d9982d716b6"],["/tags/Swift/page/6/index.html","165d41971253bb33da27068c086fe918"],["/tags/Swift/page/7/index.html","b5619483ddd514f1901e24869334a9e5"],["/tags/Swift/page/8/index.html","b516360cc667a8cf4e1b293ff4a002d1"],["/tags/Swift/page/9/index.html","d07042fb23219f5c4d74b974d3f2dd3b"],["/tags/SwiftLint/index.html","2f8d3cade6707b474b90befcfdd1c8ff"],["/tags/SwiftUI/index.html","014f1f033d6c8ebc6ab6b215e21507e5"],["/tags/UICollectionView/index.html","945a35de5473e0b61cdb2eedb58fb568"],["/tags/UIColor/index.html","d72c84aacdf49b422ed1efe994df704c"],["/tags/UIImagePickerController/index.html","81db04279d894e4aa7306a911a04e3cb"],["/tags/UIKit/index.html","ebcbfec59f673134109f8d23c784b6f7"],["/tags/UIKit/page/2/index.html","c7035027a5fb4f0e331c385cca5aa4e8"],["/tags/UIKit/page/3/index.html","d3f4224a523a696c994178a3862d80eb"],["/tags/UIKit/page/4/index.html","50501e480c26864a64e285ecf6393721"],["/tags/UIKit/page/5/index.html","a5977c297eb6d3cf106ff04712ca41a1"],["/tags/UITableView/index.html","e1799037a8c0ee83856191b16f343c85"],["/tags/Ubuntu/index.html","26a3b885c308be7a79f9f6f39afe4941"],["/tags/Uniquely-identifying-views/index.html","4103ceb7fe650b4dfdda91b619ee6019"],["/tags/VIPER/index.html","339da456c04c289ef2efdaa0f36593bd"],["/tags/VMware/index.html","6c4ef238b3398850ededced9360ecede"],["/tags/Vapor-4-0/index.html","094747da8caac009c8662ce3a9c80fa8"],["/tags/Vapor-初探/index.html","1fba0e80543c7f432b7c2618cb4000ef"],["/tags/Vim/index.html","bff9b607e2fab7b950e702ebf2cad246"],["/tags/WKWebView/index.html","e957f3fb1e6d9a900fd040c5c6848592"],["/tags/Xcode/index.html","a2c7cce57026270d1c8a2d24b0205d85"],["/tags/appleOS-Networking/index.html","36e130f9d46de4f4e52ada245088a2ec"],["/tags/bugly/index.html","361cd3130035351fc21d5999bdcd8288"],["/tags/enum/index.html","c455340a2b00ac43c0775f30ab9c57b4"],["/tags/gin/index.html","e2ffc9b5799ba07d84af6a49103ed20e"],["/tags/git/index.html","f33d65d7e99f11d8d8980368aa5f54b4"],["/tags/hexo/index.html","39ba2010948da299985cb74c92ac9886"],["/tags/iCloud/index.html","8981d0a14d89c85a4a3b4a28372a5d54"],["/tags/iOS/index.html","ce7a0f46a62855cd2f180434efc821cb"],["/tags/iOS/page/10/index.html","f594f4c1871fe3c5aeed4687a1a1c5ed"],["/tags/iOS/page/11/index.html","1f85638e46e7bc4a67f2041d57150231"],["/tags/iOS/page/12/index.html","883252f31e8af13aac9b15f85679b20a"],["/tags/iOS/page/13/index.html","a6102de9bbac96ad2a698382472648ff"],["/tags/iOS/page/14/index.html","bf32b7d014627cb9393158fc99065c12"],["/tags/iOS/page/2/index.html","99da44b7df213aac4e3274f3c9183366"],["/tags/iOS/page/3/index.html","86d52e2944e70def3e67d03b781ffea2"],["/tags/iOS/page/4/index.html","a421354a0c7f4f883155bcf548358cce"],["/tags/iOS/page/5/index.html","49a1ad7305024a05b1c90dd13073588b"],["/tags/iOS/page/6/index.html","1a3a020e0c7f96f635a346c96936185c"],["/tags/iOS/page/7/index.html","c41aebe56d2bbf7fc4d93e4c22efbc7e"],["/tags/iOS/page/8/index.html","6999a061c35780788c51b7f8c2bf3799"],["/tags/iOS/page/9/index.html","e58964cf69401bde3fa72bf0f65dca90"],["/tags/iOS面试题/index.html","1007e0cfeda73e2ce19db69d34184cf7"],["/tags/index.html","675032ffc7bc528e142e539d829e0c08"],["/tags/interface/index.html","d49790f6bcda34f19707ea40283901ce"],["/tags/non-optional/index.html","98e69dddb84640c4e889f0677ef3de67"],["/tags/package/index.html","b7a93283f9d4c19a3bd669e892042d85"],["/tags/random/index.html","5899811ae2cc120ab66c9c3ded6c4f01"],["/tags/transition/index.html","25a40d1f1aa9382f7b159d2c6d976b37"],["/tags/三方类库/index.html","3191f27fb177accfa2ac4378dc00a038"],["/tags/依赖注入设计模式/index.html","83172f9b888f6f9092412320e537d7e1"],["/tags/值类型和值语义/index.html","625a549fd789c318f8522bd70d7b4911"],["/tags/内存管理/index.html","6f1fa18897e811adb1bdcdddfd6bc8f6"],["/tags/冒烟测试与回归测试/index.html","6e1b49ce6480a20a73da0eaf7da00391"],["/tags/函数式编程/index.html","6dcd8e9dd9ffe39fbd8a80ef032fe7f1"],["/tags/创建博客数据库/index.html","b107b44290123b8c5f20dbceae0319e9"],["/tags/初始化模式/index.html","3c673f68f4619a80ca90823da0785c99"],["/tags/单例模式/index.html","5896659b0873abf425bb50795d8218f9"],["/tags/原型设计模式/index.html","50c6596cef7b0d34eac47ec9d20f868d"],["/tags/命令设计模式/index.html","2d7bceb1c1b69761d5093f4ec3f6324a"],["/tags/基本控制流/index.html","37ab1c75474691caa8a8444288589e33"],["/tags/基础语法/index.html","eb1bd34d13ff92407b8fc30d772ded31"],["/tags/外观设计模式/index.html","f526f9f1ca199d0ff77eb3daf045f13b"],["/tags/委托设计模式/index.html","3b60d3f73e8229a68b6ecce42067483a"],["/tags/子类化样式/index.html","5c70e17d1d06727b5c7b8426925c3eb2"],["/tags/对象池设计模式/index.html","3b9aba26e3e6f03eebfc30a52f8c89a8"],["/tags/小程序/index.html","1b926392415262e3cf5ea26a08dd1bde"],["/tags/工厂方法设计模式/index.html","9b78d81ad07b50c6e9088903fe10e249"],["/tags/工厂模式/index.html","b6b8b565e0a5235d88de9cbcdcf08e63"],["/tags/工厂设计模式/index.html","e76aa46b7e756a4b5a75611e6337dfab"],["/tags/开发技巧/index.html","c8dfd2355afa495377f233eea600b64f"],["/tags/开发记录/index.html","9367d4b083b35a94dbb1f41461debcc5"],["/tags/懒加载模式/index.html","53a71e04fce95f6d4afcc63b3719f5af"],["/tags/抽象工厂设计模式/index.html","c656ac14851145bcd116fbd88e169118"],["/tags/数据库/index.html","dfbbdeb840cc90c8eeafd97f4229c13e"],["/tags/构造函数/index.html","166f1c51744b86d64768f625618d94a7"],["/tags/架构设计/index.html","3355a1e42d4d3dea75783708ae5c363c"],["/tags/模块化/index.html","ed126180bea004adbd64ed991528c0b1"],["/tags/模式匹配/index.html","106671d5c0b111d0f3aeffa49dfab47e"],["/tags/环境搭建与验证/index.html","3d7311e6987d8863fb795a566b4cb438"],["/tags/生成器模式/index.html","b73e5a824e3b955082c58b6aeb07ebc9"],["/tags/用户体验/index.html","72692f8f7eae4d0a876b866c8ac686d0"],["/tags/用户协议与隐私政策/index.html","05b72b71b4bc068df4dc261537bdf83b"],["/tags/类型与操作/index.html","f3ed158050df37d317fa4951f1fcb257"],["/tags/组件化/index.html","735b7e034e5a5507c86d6e7627aea1f5"],["/tags/自动化布局/index.html","e7637f59e1853cc99b9a2e7599f960b9"],["/tags/自定义UIView/index.html","709aba5cb7cbb552a0098e7c946cb4ce"],["/tags/自定义转场/index.html","a6a5233294515d3f73f7fe8aabb3e1ad"],["/tags/自适应布局/index.html","16a18469b899dd1e1da2de7be0c47d82"],["/tags/表达式、变量和常量/index.html","731c8713627b61ec577458b7219b7151"],["/tags/设计模式/index.html","6b2271dddae2806ecd08ea40602e467c"],["/tags/设计模式/page/2/index.html","909e7107f5792345582b54a282195821"],["/tags/设计模式/page/3/index.html","c153d2ea1820e6f1ab25863d287db504"],["/tags/访问控制和代码组织/index.html","4972f035c58d146cff6bf0bf8e828c2c"],["/tags/运算符，下标和键路径/index.html","788d300d4906d2777e33ab367c54edff"],["/tags/迭代器设计模式/index.html","750587694e5ccf5e911cadfd69285e65"],["/tags/适配器设计模式/index.html","6ebddb2b2cc73104c09e423139ad898b"],["/tags/逆向/index.html","eabad30fb065259d7796a4a64aa46a7f"],["/tags/错误处理/index.html","4ed907716c1d7d3ebce820151a602576"],["/tags/静态工厂方法/index.html","534fe2e17bc0bca7160cfeeb392590d3"],["/tags/面向协议编程-OOP/index.html","c76671dfba7f798799d9f5fb85c8510c"],["/tags/面试/index.html","98c344b531412a9de6c7a5e9aa8232da"],["/tags/高级主题/index.html","7f89379a1a7cc5737fbf4e90a34c600b"],["/tags/高级协议和泛型/index.html","2c31d07564486b9cbcd37b4d3badd87e"],["/tags/高级控制流/index.html","9954fb7446d2cc63d723c9335f39eef9"],["/xcode 常用的快捷键/index.html","53be2de690ba2c5b45144d90e9a1b65b"],["/为iOS应用构建输入表单/index.html","0a156a7c05e17a3794705dc881caf5dd"],["/产品开发的幕后花絮/index.html","8729f0efccfa848b4738c4b088c51c98"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6fc750a6607721e03092e6515985bf60"],["/冒烟测试与回归测试/index.html","f3796c880b2c94007e1c3fe0fba136d9"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","5ef0bc19a5821fb79c5b8410a4e4cb86"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ff57e262c6bc1ad29f1e8e63b0b92313"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","563d9253b7c2630eb046ca892d0cab84"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7738618326d696f70b325a6653be1588"],["/在Swift中创建自定义集合/index.html","110199c1b772a37a871dbb58730c97b4"],["/在Swift中处理非可选选项/index.html","60252f584250a52670b949b8922e22ff"],["/在Swift中生成随机数/index.html","076e27fc0a7c0dbb55a1c9ba1e72187e"],["/在Swift中重构单例模式用法/index.html","95060927d7636dd3ec6052152362aa78"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","ce8f81c3d83a51cee5538be8daab53e1"],["/如何为VIPER编写服务？/index.html","a62c93258cc5022cf733dcc7828ec266"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d50f3d6e3c2eb2e6f7c15cc53559233d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3612e31c166e1229336995d0aa76d2db"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1868768e2bf1b52d58347f31cb711185"],["/如何使用VIPER构建SwiftUI Apps？/index.html","57606fa667f49f823474e677f7e068b1"],["/小程序: [CSS] 布局小技巧/index.html","5add5d4216d0c320f34f09e91d89f2f8"],["/掌握VIPER架构/index.html","02bcf96753e9f91b7d225975dd02ddeb"],["/揭秘 WordPress Hook 系统/index.html","8981bd7ccf5e0bbd314acc4a7f7adba6"],["/比较工厂设计模式/index.html","bfa4d702cff5f1f309bd181f78d522aa"],["/深入了解Swift中的Grand Central Dispatch/index.html","400ecf800a6bc07909ef61c0a1a875c6"],["/深入研究Swift框架/index.html","5c26d7a1896aaff16b72fc6b91cd89ef"],["/组件化插件化与模块化/index.html","09473aa0166f1ce0b84043d16646b99b"],["/组件设计与SDK开发基本规范/index.html","01b81bc75a2f41c92f909f4662e2a583"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a6d99271d1dfeac4e821afedcc865dee"],["/选择Swift而不是Objective-C的5个理由/index.html","34cf9a961658ff5b12b4549342a86eb7"]];
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
