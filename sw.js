/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","82780d91b6fcf8294c97dfcca10aef7d"],["/2020年iOS面试题总结(三)/index.html","d92d0a8d41af98a6a5c4eb4ae01db840"],["/2020年iOS面试题总结(二)/index.html","537926efe91f0af41bbdcec84952b8ec"],["/Advanced Swift系列(一): Swift 简介/index.html","991503440842b092917acab121ce4102"],["/Advanced Swift系列(七): Strings/index.html","90dce8521bf1af52094ebdc9336614d1"],["/Advanced Swift系列(三):  Optionals/index.html","b624510e0991ae9583d2efa55fad3748"],["/Advanced Swift系列(九): Protocols/index.html","be27f82348ac04048871fc0364731191"],["/Advanced Swift系列(二): Build-in Collections/index.html","54ece78438df009b0833543c07a0aaa2"],["/Advanced Swift系列(五): Structs and Classes/index.html","b9c631728691ffc0431f7a33a4ca575c"],["/Advanced Swift系列(八): Generics/index.html","a85264a5edf43e3471c1f995d955fb57"],["/Advanced Swift系列(六):  Enums/index.html","5f21eb54a5cb1fbfbe3d0b12f5262819"],["/Advanced Swift系列(十): Collection Protocols/index.html","8a17a5540fb2ead7e81d6a675e58f852"],["/Advanced Swift系列(十一): Error Handling/index.html","dc70296ece250605cac7756eb49db443"],["/Advanced Swift系列(十三): Interoperability/index.html","42dd821112fa6758d2a8c931e070f1a5"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","0f9e09ca02e76afdc8fe782850e37097"],["/Advanced Swift系列(四):  Functions/index.html","59da00e9e7c8c7a5f85f161f73e7afeb"],["/App Architecture系列(一):  简介/index.html","1e3820333e169e43b1dff01fd7f093b0"],["/Functional Swift 初探/index.html","debc9051c8817a442ecd17b9c0e44c02"],["/Git 使用小技巧/index.html","6ffbd3091d21657d1343d44c1e971382"],["/Go 基本语法初探(一)/index.html","025489460581491e1716cb5d297a3844"],["/NSCODER和SWIFT初始化/index.html","53f0ea5e351605357420899ad772090e"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","58a288bf16b25c3a42b8922fbf2e5c11"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","fa4a69245431047ff78c8f8949ed65a2"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","bcc380e5bfdb1f30d32091245a4f4a50"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b17d8cf5cc0b6adacd8bd7d5c9afef9a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","4be30943954387aeceea67c341ef1546"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","38ae8925829a68d35ee2cbed7c7d9ecf"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0cdbd180458b65c3be9652b9e5c49bb8"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","31327eb8de94ef61356ab979ba073cb6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5d57dd1cd2eb9eff3fdafef57b1e728d"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c853263182e50a77f76692e3384a8071"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c7f833d9103815b94521be7366903d80"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","25de343652669464d7e83c63846c7950"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","9df1cfa3e0d8694f1de41b1cfd5fd389"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","1f2a3ea860a5e6e58d6dab670ab254fa"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","225a0ac012881f47107025b833f892e5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","f414abac9640d2093629f5a3132003ba"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","bdba9dc00bce7baeaeee6cfb3fb0980d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","abe98e1d2f96448f31a005a45f5b17e1"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","6433b77430622841639fd23ebb1d52b1"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9e47f1bae344e23a8a1f125988312b8b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9b426e1b8feadb7ab1574acb7a1944be"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d815c7ed1a218f76eab928d26e26f026"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d68aa79c6c0501d044156b3a36d1636b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d834f2981fa0558650d5968616f57cc6"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","6922cb4623847177d729cf33f04b1693"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","bfdfc10150bd80f11067efa5e9e1518c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","564dc7fafdee7f19d7541af7d6ae0a55"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","583721a5e30df55c04b55ce7033d0626"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","6786ddd5fdd7770cd2833db34c2859b7"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2c51ff52a20a45fa082f416ad2a3d5df"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","02c25b77a1f9d30c4d4befa99408848c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","fd09a485fbc383bf44f93e2d11064279"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","008a4b2f882200e9f1fe8c668e2332a2"],["/Swift CompactMap vs flatMap：差异说明/index.html","feaefe3125072d08eb0c5f4dbfac11e6"],["/Swift Grand Central Dispatch 深入实践/index.html","46eb1330e7d571f1767014164a62be8e"],["/Swift Lazy属性初始化/index.html","705905ccfbd111e95480f0628b9ad78c"],["/Swift Promises 初体验/index.html","924b0fa2815128595bf2793231c46a6b"],["/Swift Promises 探究/index.html","92131531d44ef82182c87b334e828e62"],["/Swift UICollectionView使用指南/index.html","5bfe4d7ecfdcbc1c14987fdef509c00b"],["/Swift URLSession && Combine framework/index.html","eb7f4338ec75ff730031bd0d81178b7d"],["/Swift 唯一识别的视图/index.html","b6a3b974df0fb24bdcc5b43d5b1eac5d"],["/Swift 如何学习现代UIKit？/index.html","ae35920f412c1ca192647ec883265928"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","b70a1cc14ac0568a8ce89e08556d61bc"],["/Swift 用 compactMap 替换 flatMap/index.html","7d865050e0e2721bbf5764ed3dc3ee7e"],["/Swift 选择和播放视频/index.html","56d91e35e3d6281f1c379154285ad786"],["/Swift中UIColor最佳实践/index.html","9c0ca347217a69583692cf86a8503e3d"],["/Swift中快速简单的工厂设计模式/index.html","430a0560b83eb1e0c215a3f404d5ef21"],["/Swift中构造函数与静态工厂方法的比较/index.html","8a8bb0d0a5b39a7b038e525311dc7186"],["/Swift中的UITableView教程/index.html","87cca231911205b31895a9072f46e535"],["/Swift中的懒加载模式/index.html","8a29cfb7f827973e3481e6da73a009be"],["/Swift中的模块和挂钩/index.html","08c5972e54c2379500b05f099efc3a49"],["/Swift使用布局锚点添加约束/index.html","4b5d576635cf2b2a6127caf09273924c"],["/Swift依赖注入设计模式/index.html","00b477e0fdbc0fb70a863aff617ae780"],["/Swift关于Dependency Injection (DI)/index.html","a34e406018dd41d3c04a1b7a50976a7f"],["/Swift初始化模式/index.html","9fd936ef5c88c1bee4ccae8ef13b178f"],["/Swift单例模式/index.html","0be92b57d9f8d80c6fcca65412bb80d9"],["/Swift原型设计模式/index.html","22139d4cf1b32f6a582c4daba907a7c0"],["/Swift命令设计模式/index.html","45e8511d7610f5459596ff40f468ada8"],["/Swift外观设计模式/index.html","b2d7897d0bd5b4a302dffc120650aa65"],["/Swift委托设计模式/index.html","89d35b09e257a3345bcedbed1122fc1d"],["/Swift对象池设计模式/index.html","293679d2592dc1a4039758e9e1f776a6"],["/Swift工厂方法设计模式/index.html","d22f6d56dea2eb8460a3ee717d77d619"],["/Swift带闭包的懒惰初始化/index.html","6785503f7b8db7abf27f184d6069d49f"],["/Swift抽象工厂设计模式/index.html","e4ea3c0f4b5c6488028b1c82c0423a05"],["/Swift掌握iOS自动布局锚点/index.html","687744756cded9b2382b31d994299160"],["/Swift支持旋转的自适应单元格/index.html","f79084a27dafcaca288f5afa03cd3caa"],["/Swift枚举值/index.html","fd9f515b1df9794f682ce6b556f6fd16"],["/Swift生成器模式/index.html","9dfc3648ab55336a5bb0c19f16bff205"],["/Swift结合Xib文件自定义UIView/index.html","e515feaab8127652dbe9f4a5043e5bfa"],["/Swift编写的20个iOS库(一)/index.html","347fcdaac12d99e60e60058e78ddc1c1"],["/Swift迭代器设计模式/index.html","4ed2d196ac32605ffab3e611c03d7336"],["/Swift适配器设计模式/index.html","96251d6bb91798fdd9995947b0a83bba"],["/Swift静态工厂设计模式/index.html","3cce6fea0ca3c1684ae40913653db80a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","fbb284091e9b8eb77f6b15f3dc08f0cd"],["/UICollectionView data source and delegates/index.html","7588dfb9e0d9c1a27bd0ef74ca4ca3d4"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b1ecfa318b31cdbfa23e7fe2766828c9"],["/UIKit初始化模式/index.html","5a06886e51fec107a164769a268f0d0f"],["/Ubuntu18.04替换国内源/index.html","7d8cd10b4e8a55a06e5aab8aee5d11fa"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","07f382b945f126a0658a431574fa2213"],["/Vapor系列 (一) :  Vapor 初探/index.html","e98a88a1059a9f087c46052487faddcb"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f4ca8c8f3258b0b8881e35c13199ff72"],["/Vapor系列 (二) :  Hello Vapor！/index.html","575885ade15dcb5742f9682a722adec3"],["/Vapor系列 (五) :  使用session进行authentication/index.html","8126f3d8582b14e7fc4d7e5895f93cf9"],["/Vapor系列 (四) :  创建博客数据库/index.html","6d6db12d3b2c076107eea149cf064e02"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3ec7fb3f8c97f0cf92e7f6cc244d66a5"],["/Xcode扩展/index.html","ca708cf7eb142773e2c8bf2bc5314596"],["/about/index.html","19ef10d5de8ed8a32a3ab3b25dccac11"],["/appleOS的Networking示例/index.html","59e6a0d80c1e9dc4675f04f36dc9e174"],["/archives/2020/03/index.html","9fb3ec6603f2bb3b9c3ca1a9c4b322de"],["/archives/2020/04/index.html","dcff05937e44dd50ecc31125ba58a278"],["/archives/2020/04/page/2/index.html","e0d3b3425bfc0be3f9ccb2a0c71eb5a4"],["/archives/2020/04/page/3/index.html","00acda5de3953946b2f5ca1f11cfb426"],["/archives/2020/04/page/4/index.html","c8b3fe4bfeefbffd41d1ba14c307d9ad"],["/archives/2020/04/page/5/index.html","2f4dc9641a28fa6eef2a4e8783d0dfc8"],["/archives/2020/04/page/6/index.html","02d7d98252304692160bf51bdda1c59f"],["/archives/2020/04/page/7/index.html","25ecac37d4ced03f77f13956b986da8b"],["/archives/2020/04/page/8/index.html","a05339b4503c47a3e491b75b04dfbb31"],["/archives/2020/05/index.html","39ff82a205aeffc59c6bb865184d10ad"],["/archives/2020/05/page/2/index.html","41b8c765918ac7f98d8756275690df86"],["/archives/2020/05/page/3/index.html","18ef69ff9e1c29bd3e400b7dabfa2ac4"],["/archives/2020/05/page/4/index.html","fad60068cec6586709b939229fd7f5c4"],["/archives/2020/05/page/5/index.html","99d473629d86d43fad4bb9e306ddecd6"],["/archives/2020/06/index.html","f9040d4f40227f633fdf809e79d7dd3f"],["/archives/2020/06/page/2/index.html","47f6ab378c64a738e4a3b7f39ea7d008"],["/archives/2020/08/index.html","622b15b2be7830c058789e838a94661b"],["/archives/2020/09/index.html","d05ce8e61d160f7de11101a01db637da"],["/archives/2020/10/index.html","444066c71f568ae027b750838fec4919"],["/archives/2020/11/index.html","7975b5a2101b9e5ba5f4b01075f7a4ae"],["/archives/2020/12/index.html","e706fd72c52e70c250328ae11bc1068e"],["/archives/2020/index.html","fd54fa29247a0bd1cd89cc80aad56c02"],["/archives/2020/page/10/index.html","797ee6b380aa3219012acf9f218ccd34"],["/archives/2020/page/11/index.html","267efba109cd597508768e7281d27559"],["/archives/2020/page/12/index.html","d5c559fe4977b5c735a454fddc997d50"],["/archives/2020/page/13/index.html","9a3911aa492bd14f912651460cf39f03"],["/archives/2020/page/14/index.html","127bd0ea45a2d4ae3c04ea11689a188e"],["/archives/2020/page/15/index.html","965050545188fd58177473332c08e882"],["/archives/2020/page/2/index.html","1a48f2aac42cdb078eae4b27d23a1679"],["/archives/2020/page/3/index.html","80a30a3042dde01abcd5897dcbdedc41"],["/archives/2020/page/4/index.html","22ee14bbd3349c39a9ce4d00c2b7ba35"],["/archives/2020/page/5/index.html","a1a164b384d11ccb88a292032696e47f"],["/archives/2020/page/6/index.html","c87b2522047c31a7b405638ae1aa003f"],["/archives/2020/page/7/index.html","52b21b56c944d3418f3206008dc4d692"],["/archives/2020/page/8/index.html","bd0d68ca322899f58539eae799212a1e"],["/archives/2020/page/9/index.html","bb68dc9d2993893523f08e7a3e673fe3"],["/archives/index.html","16d343b51965aa257eef1263177c1699"],["/archives/page/10/index.html","c9b47902ff5a42b854cc42a46f48b5ac"],["/archives/page/11/index.html","7591624cf2d7ee29375d36110084b95b"],["/archives/page/12/index.html","d7961a66f96d3bd8c35f88af5912a381"],["/archives/page/13/index.html","3c003052d3eb75adea7df9a07c863421"],["/archives/page/14/index.html","0791a9ff0ed7a20af9bb064fad6377dd"],["/archives/page/15/index.html","ea1216de51c40763dac43eb1f21ed594"],["/archives/page/2/index.html","388f7157be3032a1caec7ede277b8fdc"],["/archives/page/3/index.html","aa59d1028a858ee3f320057ec9dbdd94"],["/archives/page/4/index.html","9e5f36e3769bf8d4b4ddede8c67c5dde"],["/archives/page/5/index.html","5143acf0e62578c3dc1d7023c4202308"],["/archives/page/6/index.html","525c3eeef8b4b99c96fb26e79e063a92"],["/archives/page/7/index.html","f7bfb6e582f92e3189119306874d3dd9"],["/archives/page/8/index.html","1e8e753ebb85b8b7c3c27c1ec1f5e7db"],["/archives/page/9/index.html","202dd2e891e402b39ba267c0adeeaeb7"],["/bugly 上传dYSM文件小记/index.html","0f77896f42b57d9d51d77f7c00dd7d8a"],["/categories/Advanced-Swift/index.html","ac7602470e76f75e47037c0518766144"],["/categories/Advanced-Swift/page/2/index.html","6fbcea3f34acd6b74c88710dacefbf60"],["/categories/App-Architecture/index.html","82b85050235cf3d13185214411afdd48"],["/categories/Array/index.html","b04d168592249a9657ac7a27b556c6ce"],["/categories/Codable-protocol/index.html","3ff9f75b8a1c31e94a13cd90bced422b"],["/categories/Combine-framework/index.html","42a2af1d0ccbb2c37bc5d56e00cf0497"],["/categories/Combine/index.html","178ca40b63210f484692a604f5d1bc5f"],["/categories/Go/index.html","2cf62f69010c600ff9cb0b288db9ca43"],["/categories/Grand-Central-Dispatch/index.html","f30da612d070c8a0c670a1b54b444f17"],["/categories/Hexo/index.html","ed3b64b6136a3f72e45b308021767273"],["/categories/Homebrew/index.html","95dcfc6e1ca22394073513b1ca562ccd"],["/categories/Promises/index.html","674f55b8c2d7c439ed50cdfa965f9927"],["/categories/Result-Type/index.html","173d04784ec0f1c92d9901bea16faa04"],["/categories/RxSwift/index.html","15a94f077c5c22223c425829aff9d0a7"],["/categories/Server/index.html","c347f4a72a57d5a7896f52283f0e2fab"],["/categories/Swift-Apprentice/index.html","83c776bd9eef40672c396064bff8a93a"],["/categories/Swift-Apprentice/page/2/index.html","a16f8de15e2756b30b7f8b6a2dcb26cb"],["/categories/Swift-Apprentice/page/3/index.html","00910636dc51ccf8fea0165f24ab4a42"],["/categories/Swift-源码阅读/index.html","c9fbe1fc14f225b615cdbc0270b27c0c"],["/categories/Swift/index.html","fc877e816e8557e522579f28ebe9db9f"],["/categories/Swift/page/10/index.html","34e87db251d27497a39532fafd13a1a2"],["/categories/Swift/page/11/index.html","91c0dc22e70dedc59ccbffb41b067275"],["/categories/Swift/page/12/index.html","e38c11dc2457de95b20e38ad47d7a4e1"],["/categories/Swift/page/13/index.html","4de31a65feb53ae9b640bc442fbc4b72"],["/categories/Swift/page/2/index.html","506b240e6fd0f27f1304b9aa0476e9a0"],["/categories/Swift/page/3/index.html","f4cc2c8ab1c702bbffb66cb9a2293b6f"],["/categories/Swift/page/4/index.html","c51ffe7a0510c9fba18d59ae743d16dd"],["/categories/Swift/page/5/index.html","b0fc99bd804a443b36a2bfd729c6e6b6"],["/categories/Swift/page/6/index.html","9b1c7b45bf72591e1e2bb0476f0a1bc2"],["/categories/Swift/page/7/index.html","7cd40fff13ebfcb32fd99004f6a2e6aa"],["/categories/Swift/page/8/index.html","4775482a5a2343e0c4822c042d4aa5e1"],["/categories/Swift/page/9/index.html","f541cbb5066dec9d3b4c76d5940a068d"],["/categories/Swift5-2/index.html","487dfd73813a8b17ed486a4dbb766286"],["/categories/SwiftLint/index.html","db58e77574ce64687c9b9d69f7b3482e"],["/categories/SwiftUI/index.html","10627d5c1d9c5bd3e345b9bf0a3c2770"],["/categories/UICollectionView/index.html","1674b69a3667c2f4b84a552cf3fc4996"],["/categories/UIImagePickerController/index.html","651d057ffff677339a5c107f9e29292e"],["/categories/UIKit/index.html","276446781ab7c2ed2510466b684ac272"],["/categories/UIKit/page/2/index.html","30e50e4bba1ac39b6e761c5eefdb3378"],["/categories/UIKit/page/3/index.html","515a1f362f9fb8abb16bcf185a9f1e87"],["/categories/UIKit/page/4/index.html","fee9b91fe640123349dc447cfe994b9e"],["/categories/UIKit/page/5/index.html","69a5cb93bc0f3b201105608d40fc41fa"],["/categories/UITableView/index.html","8f7f39dd2795470efa313612e0c86157"],["/categories/Ubuntu18-04/index.html","7af0a98eba7b6dd84d82b42dbbe20c6f"],["/categories/Ubuntu软件源/index.html","8c4c555cff50cffd77ca3a27d9a892f6"],["/categories/Uniquely-identifying-views/index.html","7d06dcc35bcbc202b640aabfb603f249"],["/categories/VIPER/index.html","86a47ca9acf94ae741c49ac4506ccdaf"],["/categories/Vapor-4-0/index.html","cc87ac779d2ec2f93bb4e7c83bcf8539"],["/categories/Vapor4-0/index.html","f7ca2f383deab3083615610caec1b48b"],["/categories/Xcode/index.html","bd60edb5dc7d7507f1df2d17006b024f"],["/categories/appleOS-Networking/index.html","b04dfa1a9a6975aa997e0b3ba6b322cc"],["/categories/bugly/index.html","1b655c162e940f148ad1f5016cc45ad2"],["/categories/enum/index.html","50df4b2023b6e2406d2648d0a54f10e8"],["/categories/git/index.html","e83963e898217fdab98557aa0be572e4"],["/categories/iCloud/index.html","aa8de90f5f557870c5e4d6c5dd954110"],["/categories/iOS/index.html","750a8909dc2e13ba17feeecef86a4111"],["/categories/iOS/page/10/index.html","096ca00cca86ef47010ab5a769fd3875"],["/categories/iOS/page/11/index.html","8cf3153b18c0e692fadf2c7b7fc726c6"],["/categories/iOS/page/12/index.html","b2273358774bc1f472328eb9e27760e9"],["/categories/iOS/page/13/index.html","6bfaac8dd0c9aa081a1dc9b38ebcf706"],["/categories/iOS/page/2/index.html","ff43e5f681549796583878430981c06e"],["/categories/iOS/page/3/index.html","832a133c8d2485f0a0471d26ebcbe770"],["/categories/iOS/page/4/index.html","b613c97abcfdb501f2474d1e39bb948b"],["/categories/iOS/page/5/index.html","a1ca9fe4b7bd23cb16923f2a8f09d4ab"],["/categories/iOS/page/6/index.html","6d601c6ff252f007cd6d4809c42d8d8a"],["/categories/iOS/page/7/index.html","e0695a4251306199371507494f2275d3"],["/categories/iOS/page/8/index.html","373711f12087797eaf2ee5e980507af0"],["/categories/iOS/page/9/index.html","e213a2cbf2ff853eea1cfcf0bcbf6379"],["/categories/iOS面试题/index.html","6c4b780df400fe24dee7fc06ac59b5ac"],["/categories/index.html","685102d7373f184f185251daa3b65264"],["/categories/random/index.html","3b6e933a9747bf4ec49ae4901966d72b"],["/categories/三方类库/index.html","158acdc9b51a2b27bfee89360e46b267"],["/categories/函数式编程/index.html","c1b5df2ab76b041e2ad8059684004000"],["/categories/子类化样式/index.html","4b0a4aaa44961292b8c8a6b51404b05b"],["/categories/开发记录/index.html","df721a509456878a7ef934294340a0cd"],["/categories/技术支持/index.html","6618b154a0b65c29f9ecd66514ee5f1c"],["/categories/架构设计/index.html","7a63c85956030aa91aca0320c0772558"],["/categories/测试/index.html","929f7ba32226620145245e75f4a1c5cc"],["/categories/用户体验/index.html","a85f28d5314c601022f596946c596da4"],["/categories/用户协议与隐私政策/index.html","5da9bf2c798f56c923e9f6ea89991c66"],["/categories/设计模式/index.html","23264090e2e65a78252f70d0751028fc"],["/categories/设计模式/page/2/index.html","c62efdb283cec504f18ab3fb065902a5"],["/categories/设计模式/page/3/index.html","bf2e6d7c147183b250c6e12a7afa4853"],["/css/main.css","32af4e23d9dfb2dfc072dc6c94cca2f9"],["/hello-world/index.html","956b9b0a98ca0b6f2b48994122a260e6"],["/iOS VIPER架构深入实践/index.html","109a2f12ee612d18efddee421b4ba25a"],["/iOS 自定义视图，输入表单和错误提示/index.html","e164d06251ad222952ca9a3fafb0c8ea"],["/iOS如何使用iCloud文档？/index.html","652af96a540dbb16f944b64571228d02"],["/iOS子类化样式/index.html","1cdb0dcadfba364dae87699e288c3e2f"],["/iOS开发记录<一>/index.html","bb9db94d594659a161bb087247008877"],["/iOS自动化布局编程/index.html","fc1174994e8d61b72fa8c1a544cb589d"],["/iOS自定义转场(By Swift)/index.html","c65fffa5b6a8a212fe520f923de289b9"],["/iOS项目架构：使用VIPER/index.html","f85370eea19f6bba5ceb5c07668ce4ab"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","bfbdff4b08052d3167f7a4b670a233ca"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ddf67b196a676992fc536640140d1b33"],["/page/10/index.html","a554d32f48ef5c40b2f380b6ecb39f59"],["/page/11/index.html","a2ceef4890d602a91be57888286880bb"],["/page/12/index.html","3f2a01f36e4e45b25a76b637d9f6a80f"],["/page/13/index.html","6e675e2d7512f3e0d0c905c6d04af359"],["/page/14/index.html","49debd86b43f4b9098fd15895df8a5c2"],["/page/15/index.html","5a922b3fa313a7100f7841d2e5b1900d"],["/page/2/index.html","729f948ce0fc36fd5b16aca6cb1ecb1b"],["/page/3/index.html","b35fcbbde7d56d2687b64ab685677f2d"],["/page/4/index.html","a875113f1a38d8be0931db9cdfec0a61"],["/page/5/index.html","0db555eec5522c9b23b24e158c0cb8af"],["/page/6/index.html","849751db15e5e3420781cd9506eec5da"],["/page/7/index.html","190fa6266814ac1b77ce4e95039e109b"],["/page/8/index.html","ffeaee2522eb8fa043ef85d20a01275c"],["/page/9/index.html","ef620a49c59e25c8f70ddc86b6845c89"],["/schedule/index.html","24f5764c3c1a26452006db8d50fa92e8"],["/storyAppPrivacy/index.html","e58475db418bfb936283b94f63bb276a"],["/sw-register.js","8d75ab4ecf5e544351844af85d438285"],["/tags/Advanced-Classes/index.html","491d526025681736c1f109c9ef84f808"],["/tags/Advanced-Swift/index.html","6818fda40166a31bbf73b7f6a3ba14bb"],["/tags/Advanced-Swift/page/2/index.html","477423342e55b6367a61dab767735dea"],["/tags/App-Architecture/index.html","1dadc9e18802cfb7e8f2fa33529c0a57"],["/tags/Array/index.html","6062e1db53a3f7b9c04a953ac501bb13"],["/tags/Arrays-Dictionaries-Sets/index.html","922a0823c8eaf7d6865d517c48a5bba2"],["/tags/Authentication/index.html","ed8f77f23d7540c43e2bbe50b472b0b8"],["/tags/Build-in-Collections/index.html","0ed7ca877311c0096473bf2ee77db3de"],["/tags/Building-Your-Own-Types/index.html","b9471a05810d992d50825b46f54b1f62"],["/tags/CMS/index.html","293f5f9e48b4f10c95ed8b9d2993e3b0"],["/tags/Classes/index.html","58df91ee34d403f769db6c934c260824"],["/tags/Codable-protocol/index.html","cc4d3ecdd509f4518be07f4413d86229"],["/tags/Collection-Iteration-with-Closures/index.html","e924557f03602ea572c83d3efd7c2d58"],["/tags/Collection-Protocols/index.html","e99d281fd9fc40fab24fe8071288d58c"],["/tags/Collection-Types/index.html","c3d2189ad8b5fd8c3c980abef8d656f6"],["/tags/Collection/index.html","eeb403c6cde787609daf9857a136e57f"],["/tags/Collections/index.html","e41b7b316166509b84f0dba2559498e0"],["/tags/Combine-framework/index.html","3d296fc330aec8e76020a49d3507ec3f"],["/tags/Combine/index.html","178e6d5d1ca41dbf0e30ea40e13c92c8"],["/tags/Dependency-Injection/index.html","e6343ab22daef9bd9a2810b393bd249b"],["/tags/Encoding-Decoding-Types/index.html","3a31b7008f02cb4060705882d92982dd"],["/tags/Encoding-and-Decoding/index.html","b5ccdce47ef7e0860a2468fc43d7ac27"],["/tags/Enumerations/index.html","75dd4b1881dbb2ea09c74511fa11f21e"],["/tags/Enums/index.html","9f9b7f89706c3973b82c96f481ec9e37"],["/tags/Error-Handling/index.html","d3d9d86ba22a4a6e6c97aca5f81ac423"],["/tags/Functions/index.html","4bfd40ddef254c5009e5b0a429c4fa5e"],["/tags/Generics/index.html","7e8b662cd092b68b5acb9ec2f38d4772"],["/tags/Go/index.html","5f1febc5f851a0121ffa4fe134164689"],["/tags/Grand-Central-Dispatch/index.html","caa64bf7e79dbc6aefb4de7b56d87d3e"],["/tags/Hello-Vapor/index.html","f62f5663053a5168416f60299fd05f2d"],["/tags/Homebrew/index.html","a43e487a32898574c78f0f4978e3d6ce"],["/tags/Interoperability/index.html","e59465e5b60e991c8f2670ed20e80868"],["/tags/Introduction/index.html","69abc35c2d18d8435157ff3133d50425"],["/tags/Leaf/index.html","d243a399c0a559cfeaffcf5ef01f569a"],["/tags/Methods/index.html","b85c6ad360a1ef7722c91a28aba2d739"],["/tags/Modules-And-Hooks/index.html","554b14732169125dbaf9189c870d454c"],["/tags/Optionals/index.html","04f637dff22c3b4148d92d4e2c889828"],["/tags/Promises/index.html","58d7a0df8a5ac875229e25d4440260a2"],["/tags/Properties/index.html","4a5558c60243d9df245ece178125cfcd"],["/tags/Protocols/index.html","a45e773c252738e5cbe1801a011469ea"],["/tags/Result-Type/index.html","1953c68e70d684dc166e1432e9b68979"],["/tags/RxSwift/index.html","6a2513b03f192729279306e4d10520ae"],["/tags/Server/index.html","e29e7e4c8de7573d0a5b45b1ce577196"],["/tags/Session/index.html","45b13177d30666d7934433c84c8bd1f7"],["/tags/Strings/index.html","8fb4eaa427b1673516c9090e782d493d"],["/tags/Structs-and-Classes/index.html","d77163ce4bead9f5f6923f6fa0b70905"],["/tags/Structures/index.html","fadf7aa8e79b8c412b339545dd8776ed"],["/tags/Swift-5-0/index.html","a25d6f13e251510f0c758680c7930a9d"],["/tags/Swift-5-0/page/2/index.html","3690dec6585c84ae8170acbb3c1869a8"],["/tags/Swift-5-0/page/3/index.html","cde896cb7ed233826dc241c977c5c381"],["/tags/Swift-5-0/page/4/index.html","2ca6c51fffbb039695986430b493e00b"],["/tags/Swift-5-0/page/5/index.html","244b80ec518cd16b32be00e0a0616582"],["/tags/Swift-Apprentice/index.html","c7452fa4c29438128f6fd39de855ccb2"],["/tags/Swift-Apprentice/page/2/index.html","dcefcc125ac709836c408cdd87de330b"],["/tags/Swift-Apprentice/page/3/index.html","465afe94b52a93c862ca08ea9ca139f3"],["/tags/Swift-Package-Manager/index.html","0f353570e7ffc6e8621e8e40d6e22f68"],["/tags/Swift-源码阅读/index.html","434b4513b0bd104a35da8ee833c20631"],["/tags/Swift/index.html","62541447f106e27b15a54d47d49f6891"],["/tags/Swift/page/10/index.html","a8692ce9df1b7fc3de36a501b809ba43"],["/tags/Swift/page/11/index.html","5e69b1c2d6aa5e73c9bf04d6f863b7b5"],["/tags/Swift/page/12/index.html","8d5b32fb42100c6422ddcd16eb5bdad0"],["/tags/Swift/page/13/index.html","909c6f77166e3b87f39a42d1eb4f700c"],["/tags/Swift/page/2/index.html","3be89e1769c5aef4f05920513d20101e"],["/tags/Swift/page/3/index.html","c28013526869644defe522f32df4d078"],["/tags/Swift/page/4/index.html","d3fee35784e6eeee218b142f4f0d4287"],["/tags/Swift/page/5/index.html","7f41bb57bf3cdf67d88c978d6891dae5"],["/tags/Swift/page/6/index.html","4e3dc1dfc8181d35fcef1a046225ed31"],["/tags/Swift/page/7/index.html","88aab96d640c6305439c28bdb2f6277c"],["/tags/Swift/page/8/index.html","679504027b2260d19bea5425f51195d5"],["/tags/Swift/page/9/index.html","f1ae6f3c8a2bd776b32a02f362770ab9"],["/tags/SwiftLint/index.html","e000b59c4c1bf52578302804500fd4bb"],["/tags/SwiftUI/index.html","bf2181d0b73bb428d87ca79bd9071325"],["/tags/UICollectionView/index.html","0bbf6fb6327dcc03b5b3a427e081c437"],["/tags/UIColor/index.html","7075623005d728f89662c443810e6e2d"],["/tags/UIImagePickerController/index.html","d3084ad88ea1b95964d4e4ab649de1aa"],["/tags/UIKit/index.html","94a6c0a1eb0cb67ffeb0d17865611e95"],["/tags/UIKit/page/2/index.html","3699da27eab3cf561891dd6785d04793"],["/tags/UIKit/page/3/index.html","d65e85909645c9b41d14bef0315f767c"],["/tags/UIKit/page/4/index.html","a72bf71ae6e7fd3b303b67bd74866fde"],["/tags/UIKit/page/5/index.html","d0899fc04805f0c06cbc1bade578880a"],["/tags/UITableView/index.html","e8caad15a669122946234ae0440c0939"],["/tags/Ubuntu/index.html","b9a908595fe2d7c2b56fd18638a6ab9f"],["/tags/Uniquely-identifying-views/index.html","64b26b1997b82640d787898f89a62c2b"],["/tags/VIPER/index.html","a7d7a3b9002195038085dfbc88e49374"],["/tags/VMware/index.html","ea799722709ebeab842cbb170d0a8e11"],["/tags/Vapor-4-0/index.html","e6054ed789b57c90227e285459728eb7"],["/tags/Vapor-初探/index.html","87871b55d6ce0e3eeeaaef18fd7d3d2d"],["/tags/Xcode/index.html","b3e3a0b034be47d2a651e4b720afb006"],["/tags/appleOS-Networking/index.html","ca09d72c2f09c58f908526b3faf5d5e0"],["/tags/bugly/index.html","ee112bef140f8688396106eaa76babbe"],["/tags/enum/index.html","361dddca847e330cb26772a7cdf1036e"],["/tags/git/index.html","185bbce2989814b64d612b04233a3a44"],["/tags/iCloud/index.html","dd4783b55d3a4fad83443da8805f6b41"],["/tags/iOS/index.html","9dbe2251320d07d76d0745e54ff122f9"],["/tags/iOS/page/10/index.html","76e444c70287cf82f83c0ea4b97d0f5a"],["/tags/iOS/page/11/index.html","2a308da22fa3c4ae60d6750950f6b6aa"],["/tags/iOS/page/12/index.html","c240f64adac6da6367e0abf8e937833c"],["/tags/iOS/page/13/index.html","447699e4f27e9b42590088571d22e60b"],["/tags/iOS/page/2/index.html","ff66d6868d3c7527fb5441ec8594fa47"],["/tags/iOS/page/3/index.html","3eacc327aff9c5395500b0d19e744b17"],["/tags/iOS/page/4/index.html","7dd9e8962d8d01364d69f5b03e153b00"],["/tags/iOS/page/5/index.html","92e3bf8e59cb9a65db3265d5f093f375"],["/tags/iOS/page/6/index.html","4b0630f001e6b45381a271e8bbf62812"],["/tags/iOS/page/7/index.html","08cc6a62286bf98450d16d09739a49a9"],["/tags/iOS/page/8/index.html","33919e42e26c140a319fc1d33332c8f0"],["/tags/iOS/page/9/index.html","f3d94e670f2d319b9e12be5ed965105d"],["/tags/iOS面试题/index.html","d265d609128a09fc36015e2413af729d"],["/tags/index.html","0c9feed47c1843f6c7c39c08c455b639"],["/tags/non-optional/index.html","a8af61fddb4b23df7416dd86a28daf53"],["/tags/random/index.html","d45e19320ec686b2f1391309cd671b5c"],["/tags/transition/index.html","54cad0058516fdeca60292a8b410ea8b"],["/tags/三方类库/index.html","cfc5c3947d9868f615a507a2638c7c71"],["/tags/依赖注入设计模式/index.html","9930b7baf893cdd6a3ce3c03790c4e90"],["/tags/值类型和值语义/index.html","a039d95fe0cebc3c8ed62666bf25df4f"],["/tags/内存管理/index.html","c9760adffb27219ae7d17ad9b68e4636"],["/tags/冒烟测试与回归测试/index.html","72f6085cca4bc3eeeaf4eabfe57ea77a"],["/tags/函数式编程/index.html","c40c275aa73772dcb750b1c1273a01af"],["/tags/创建博客数据库/index.html","095fa8784180e7e7babdeb4aca5c72ae"],["/tags/初始化模式/index.html","c989bee45f433d62448f17e4ea0e01c6"],["/tags/单例模式/index.html","5503129f34dc1505b4a2d05073a22433"],["/tags/原型设计模式/index.html","fa661d59bd9c65ca5660ad3dc6cda3b8"],["/tags/命令设计模式/index.html","8983a45808b1ab389acd38b40766603e"],["/tags/基本控制流/index.html","ee8d54e5db92ce2a1ffd06241f2c2ddb"],["/tags/外观设计模式/index.html","69e6c4d9b54e76012061dd556331e17e"],["/tags/委托设计模式/index.html","186a97b75e4588937078b8e215dd2a2e"],["/tags/子类化样式/index.html","dc58e982ea0ce41346d107392b94e3df"],["/tags/对象池设计模式/index.html","d33ae053bea4fc2ed49512d32012cdb6"],["/tags/工厂方法设计模式/index.html","8d448033f933111fb08703bf25e42a60"],["/tags/工厂模式/index.html","d5f00037e6e611a50aa0139cff6963f6"],["/tags/工厂设计模式/index.html","82a4f02a0a5102716e1ac036ac5d1161"],["/tags/开发记录/index.html","25e17b6f898ee9d441fc8dc8be3090a7"],["/tags/懒加载模式/index.html","06a9e837f61e07dc198d0449868f5c52"],["/tags/技术支持/index.html","43ebe8fced430b77d3378d29934566c2"],["/tags/抽象工厂设计模式/index.html","f267bb3926cf45d2710b762e2db149ed"],["/tags/构造函数/index.html","13a5ef385674b7fcacc09d62b1e89f93"],["/tags/架构设计/index.html","90589e1829dddda1a59fa8425d064615"],["/tags/模式匹配/index.html","711cce44a0c9d25c0b5e9b5835e6c69d"],["/tags/生成器模式/index.html","daea9f04c1af51f6024e0f2ba1c67f0e"],["/tags/用户体验/index.html","d25825031c38fe0e74ebd88dd858036e"],["/tags/用户协议与隐私政策/index.html","d71933576baec48d7ba9eb1d28b9e6b3"],["/tags/类型与操作/index.html","5a2b6b7b59d3c07ca84ad2f3049be923"],["/tags/自动化布局/index.html","48910c38ee9c23333f8ee0385833de38"],["/tags/自定义UIView/index.html","5bcf792f8806637937335209a48c7d73"],["/tags/自定义转场/index.html","5f46004774c5092611cdd3fc8ee527ee"],["/tags/自适应布局/index.html","001d73822e3a4c3f03d864926468b55e"],["/tags/表达式、变量和常量/index.html","0293347ade9bfd3d928115f77c88c4bb"],["/tags/设计模式/index.html","626dafe530f97b0e049afa6741a04700"],["/tags/设计模式/page/2/index.html","37289ee6ff69f10b5b01117af22d2ef4"],["/tags/设计模式/page/3/index.html","31cab3ccdbc12de948aa00aa20940623"],["/tags/访问控制和代码组织/index.html","08af3e9256d47abf913732e20a864ea3"],["/tags/运算符，下标和键路径/index.html","04fd97a38be47f12dd3b60ef7a88cd86"],["/tags/迭代器设计模式/index.html","3fd0941972b0ee0ca3848162518363e0"],["/tags/适配器设计模式/index.html","e985d6f9890af9cc74288f721e70cb33"],["/tags/错误处理/index.html","f8139fe4e1f1805199a02d8d0ceb8ab6"],["/tags/静态工厂方法/index.html","42c5a4a880bf0aa3e135ccedff23d00d"],["/tags/面向协议编程-OOP/index.html","ee62b870713e2d683f2c9769ffb92948"],["/tags/高级主题/index.html","3e904b5a98bb5e0c8ac857d62386645e"],["/tags/高级协议和泛型/index.html","c3425fc4bfaa832dab3df46536757559"],["/tags/高级控制流/index.html","37eab518bbf38014cf8ef0bca642b298"],["/为iOS应用构建输入表单/index.html","db87e0d55fbdff7a73a7e756b051b5f5"],["/产品开发的幕后花絮/index.html","a16d87c4cb4ec350a3daf2bd5ae1ee22"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c42fcbc6859a61cf58a0186907fae47c"],["/冒烟测试与回归测试/index.html","d5251fd11103f9739df9334317d88d42"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7480383dd5753eb08af09d06d69012a7"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4b25e9526980fa39faae874d009d011d"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6388406150e0a14350644b1ba2077c9c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","beb9467783979ef4e6fa014700964987"],["/在Swift中创建自定义集合/index.html","6b4df9a459549ab6b3bdc32c528878d4"],["/在Swift中处理非可选选项/index.html","a6879456ced67dbb5c62ba8c2e02232a"],["/在Swift中生成随机数/index.html","8d708cd2bd1c02f44de2cdbb75ddea63"],["/在Swift中重构单例模式用法/index.html","151f2196776f300d9db5a66b7d8c1ef6"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","4d89d354041a4a5e91fb7bf2ad748764"],["/如何为VIPER编写服务？/index.html","f3dd5f473e52f0f0809af61a40149ee8"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5046e0f0e1a55716b6741ac1fb6a3c6e"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b910524d41be72d0bd6054d7b96d82d6"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","79fe7a6da10d8b39ea9b1361cfa1aee7"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ddb62d5912f5afb3310aa92e5e7659fe"],["/掌握VIPER架构/index.html","21b5fdde911137a3d830d9dbcf089b50"],["/揭秘 WordPress Hook 系统/index.html","f8fc64c33f4c7ca152dda452b83fc615"],["/比较工厂设计模式/index.html","ff373eaf7834c32697d9d0b33bd728fe"],["/深入了解Swift中的Grand Central Dispatch/index.html","a58d358616b7c31bdf9836893dd7b4ad"],["/深入研究Swift框架/index.html","09ccd54d9482e9c718271f88fbacf92d"],["/美豫直聘技术支持/index.html","159a3a545018242daab4e82dcfb7fed2"],["/美豫直聘用户协议与隐私政策/index.html","10764cbb90969db7a3a2205d91eecf3f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3bbd919a95bd1b542de68ec02cecfb49"],["/选择Swift而不是Objective-C的5个理由/index.html","d08cd342c79c7cc3368a91d13edbc5a3"]];
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
