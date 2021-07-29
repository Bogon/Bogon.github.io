/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","011a3a4bb082edbbf24dd669ebb6c33f"],["/2020年iOS面试题总结(三)/index.html","e4d32c4d8430ee7dd952a51e7ea83344"],["/2020年iOS面试题总结(二)/index.html","60b3d10e9f88ceef09e849ee7924d096"],["/Advanced Swift系列(一): Swift 简介/index.html","17d5a535423c403c753b6d3e4d7c8b2a"],["/Advanced Swift系列(七): Strings/index.html","be7c907ae5294fdddb3bcee5adb924e2"],["/Advanced Swift系列(三):  Optionals/index.html","7b81a40cf6859b5a0b37d3b65826a380"],["/Advanced Swift系列(九): Protocols/index.html","c1a2887927e07fc98e57dc813e4d4855"],["/Advanced Swift系列(二): Build-in Collections/index.html","912865e5919b350acd2c764177365645"],["/Advanced Swift系列(五): Structs and Classes/index.html","d2e155a4129baa3bc3dbdfab64b6e361"],["/Advanced Swift系列(八): Generics/index.html","d042b72471f1e7f8626e5018e858493d"],["/Advanced Swift系列(六):  Enums/index.html","61c1f7596ff1bb56938c1cb492749b0e"],["/Advanced Swift系列(十): Collection Protocols/index.html","d40dda481110bb838b68817877f0630e"],["/Advanced Swift系列(十一): Error Handling/index.html","f8793e263a62b34c3242fef2a55a8eda"],["/Advanced Swift系列(十三): Interoperability/index.html","6dabea7359b524e96bca3e5028e5a388"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","123300722c33402bda635428c480f7cc"],["/Advanced Swift系列(四):  Functions/index.html","d05bb5b2b035f5ce77f6a0e98bac7d25"],["/App Architecture系列(一):  简介/index.html","8cc22aee78afd0bc5913ee631393f886"],["/Functional Swift 初探/index.html","33335ac16adf9a2fd016b7aaa0dc505b"],["/Git 使用小技巧/index.html","c480eeaaf353f3acbf9c1b16389ef436"],["/Go 基本语法初探(一)/index.html","3683e0fd5893f093f13ded8c4b199544"],["/Linux VIM 命令及操作小结/index.html","5e7bb1f66884834386eba02c91c50690"],["/MySQL 基本操作/index.html","5cc160a4ec3159fb0f120f5bfb6945cb"],["/MySQL-列类型和数据完整性/index.html","7f52a3890636cb7f9230160612e770f7"],["/MySQL-数据库设计和查询语句/index.html","d559248316f277594ee7a1168ad7e705"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","c7cf63aa9f28b4af1be79d7e5ab0d748"],["/NSCODER和SWIFT初始化/index.html","b240190e7478eefa8e282ebb523c24e3"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","564cbb92156cd9247f670be6de7f7100"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","1df8b519fc2eb77d98e4defe8eaef54a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","873126983497fd4a640a5af450e8d254"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","6a3a8c16c3d56dbdbd32ae71a26691e4"],["/Sqlite 使用Tips/index.html","4d23b02a871d3b83aa79e58336022267"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","cd03ddbbc1b65c5188668a3599d5849f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","26b2fc9feb996585c0fb1bac1ad6da03"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","73e3b631cc35c18387c490619920bbef"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a6f801da1d093fcf9e9a4f3b680aed29"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","076de50e9bf627dbb162069c4903880d"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","10b30bbab0d12a7a38672ed580c2faae"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3ed8f404dd0ea7d8ff17eca677cfaef5"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","5fa0f917d29c4e8a29cc1fbe296a1b94"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","3fb9608592726163816c83f106eb6308"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b6b5ddb210d89ed98508da043f76fcb2"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","63c07a14a374ece60c7b11dc531b96c2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","7051e372b5fc6fa58e7f6baa0eace262"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","c54aff1d4070cb59efbb4c14474f58b0"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","761c61d87fc5fc5b32a155c707595dcd"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","5c051ceea629b96d08dd4532819f2502"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2acf4b350700f9eee92b538d8f8d1e36"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","78d7aa0d57d9081a97a16c4239e0ca40"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","4fc84de6edfe4219445c97f496cc1ae3"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","6a72d442a757a7efd8003768ecc3fb17"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","fb39d437642ca3e6902489d512c5a147"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ea6372c50500b967d9975ca530cc01be"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","94f2f0af72b0ddc973ba48e2ff64f47f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","bebbe751d0476637c1e5b196b4e8b71f"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","d391d1ad604bc522c150b7fe39a1282c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","3a592dc43e4c413df0b25b0b1d13b25c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","462f3a056b24bc41b88d98ad0ae90d7e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4dd8d5b6392a87575675180275bd4919"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","de825016bb12e1e73e79a53353dd2542"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0e655dc932827fa08ad7ec4139824904"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b000977c79790f010f569b4923f2c8a8"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e32980a91c7b4196e3235bfe47b0e1b2"],["/Swift CompactMap vs flatMap：差异说明/index.html","62996eb0f530f329e30ba1c50e0e0972"],["/Swift Grand Central Dispatch 深入实践/index.html","d8ec82e98dcb2a8264197f73a141673e"],["/Swift Lazy属性初始化/index.html","f9f2993da30f5a8c9c4ea7154fce6fb8"],["/Swift Promises 初体验/index.html","6440969e5a82518f151496f487070c81"],["/Swift Promises 探究/index.html","8dca5b1fba79fc0f91912078769e7046"],["/Swift UICollectionView使用指南/index.html","2e2389ad8de7b4658cff68a56afa303a"],["/Swift URLSession && Combine framework/index.html","3c31ec2d7f98330c20855490646e0051"],["/Swift tips/index.html","cd1c092f9a622f0719b9581d7cb14d65"],["/Swift 唯一识别的视图/index.html","6c82a05ec94f610a1fc5a8ce315db57a"],["/Swift 如何学习现代UIKit？/index.html","4dc0b6799973455c786882412f8c91aa"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","9240cf08a7872d7d643657cd73acf40f"],["/Swift 用 compactMap 替换 flatMap/index.html","30fe8e15571e17f3e635b94fc907606f"],["/Swift 选择和播放视频/index.html","942825c14f370f4338292e816c684ae3"],["/Swift中UIColor最佳实践/index.html","35cea0aa89cb47cf4de73771a21063c4"],["/Swift中快速简单的工厂设计模式/index.html","fb8045c9e24f0cc7d34b8748cfdec40f"],["/Swift中构造函数与静态工厂方法的比较/index.html","ead8912faab8fbb715debdcd779f952c"],["/Swift中的UITableView教程/index.html","e856df976894aec9a3b4355b309de3e3"],["/Swift中的懒加载模式/index.html","e9ff7815943bf23d65e315dfe737f4f3"],["/Swift中的模块和挂钩/index.html","5f5501b84770c22cbcc16551b96cee91"],["/Swift使用布局锚点添加约束/index.html","4b239106966bb2575c42e84a4be740db"],["/Swift依赖注入设计模式/index.html","0273f83fe7a6f67621055b9e402e9607"],["/Swift关于Dependency Injection (DI)/index.html","c19f7b68d88e4419530119dc37a43dc2"],["/Swift初始化模式/index.html","86f665de15670c000fd20c13ad155d31"],["/Swift单例模式/index.html","ad85a30ff6deb649125edd191d2bd68e"],["/Swift原型设计模式/index.html","55545cdf45ce3ff19998d27aeef81257"],["/Swift命令设计模式/index.html","c6d50c0bada08a81c4b99c8f30871bad"],["/Swift外观设计模式/index.html","f992e08a1e1e79562361f33690ef61da"],["/Swift委托设计模式/index.html","d0ef46869d56f21b09d59020dac1fa4a"],["/Swift对象池设计模式/index.html","cc21d18e5dbb5ad989c39d15cadedea6"],["/Swift工厂方法设计模式/index.html","298692461dc5fbde2c4e6f9981072325"],["/Swift带闭包的懒惰初始化/index.html","e4601fcb8f48fc16d5c193aabf6b8307"],["/Swift抽象工厂设计模式/index.html","57b30b14405e3d107b6e4d498921239b"],["/Swift掌握iOS自动布局锚点/index.html","d313eedfe0109c1f1f965124bc554b2b"],["/Swift支持旋转的自适应单元格/index.html","b3b631de642e8dd6f57e10b8f3bae9ed"],["/Swift枚举值/index.html","89dc679fc98466f9013df7c8feaf4c67"],["/Swift生成器模式/index.html","ca91e901512f5cbff7fb12ceebd5d0df"],["/Swift结合Xib文件自定义UIView/index.html","ff2c35cc6dfacd763acc150622d19789"],["/Swift编写的20个iOS库(一)/index.html","5467d35a72cf0ab195b420ec9909d031"],["/Swift迭代器设计模式/index.html","85b3d8072074be88c0ecfdef700ba219"],["/Swift适配器设计模式/index.html","3df2ca55a9f50fb5ae21102784445ff5"],["/Swift静态工厂设计模式/index.html","8cf7e32b5a3e5aca281cb0e1b4ab2251"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","d19726bd204e4e07d90cb6451721849b"],["/UICollectionView data source and delegates/index.html","ef1dbd6569491bf9bfdb6dfae01748a1"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","6b090552ddc5ee34274882690ac9f3d1"],["/UIKit初始化模式/index.html","56e9cf536e7034f63b985f8f7599f1f3"],["/Ubuntu18.04替换国内源/index.html","7f57df0ecc2ed193b2b655db870cee8a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ae00c78b1d39c361ded1721ace196258"],["/Vapor系列 (一) :  Vapor 初探/index.html","6f1c3f33e8241a2803d98005297186be"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","74c10a80026124e6bcd6b803b284c108"],["/Vapor系列 (二) :  Hello Vapor！/index.html","9b0cf5bac6dc2addaa3e9cff0b3c135f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","106b25ecbe7cb27ac959fe6dbe70ad82"],["/Vapor系列 (四) :  创建博客数据库/index.html","4d81c610cfd496a9354ada59e70bfb54"],["/Vapor系列(六): 徒手撸一个CMS/index.html","cbe1399bf7195c2ff999980382f6c3d8"],["/WKWebView与Native交互注意事项/index.html","a69dca35defb03138f0cd318f8054e5f"],["/Xcode扩展/index.html","607b501ec22c77a96bb5cf6e4c57b2b3"],["/about/index.html","8d1791eb531396b1a3a84b45e475dacd"],["/appleOS的Networking示例/index.html","3ed02f3cc988ed452d07150b29ceaaa6"],["/archives/2020/03/index.html","151583b19a6f0a5a592f93285b536903"],["/archives/2020/04/index.html","a347d9b0655a8f2ebf5c9490747c1fa3"],["/archives/2020/04/page/2/index.html","7afe1cae8d51e051dc983e7493e862a9"],["/archives/2020/04/page/3/index.html","d6e0c44d8eaac14390ab86c89ed34779"],["/archives/2020/04/page/4/index.html","2d74e53afc4fdb310124890c1a1bc2e2"],["/archives/2020/04/page/5/index.html","d7185ed69a24c10a5fb9b01825fc787a"],["/archives/2020/04/page/6/index.html","e63c8512a53ef1da5f24adf0c9a38bac"],["/archives/2020/04/page/7/index.html","170af50e8413a1e644967455def93540"],["/archives/2020/04/page/8/index.html","05f3837e7b93b7ab64268c23bcc81462"],["/archives/2020/05/index.html","5beb8760031da63ffe1718920a30ae1f"],["/archives/2020/05/page/2/index.html","425bc11956eda9bb321a20a06803cf60"],["/archives/2020/05/page/3/index.html","f7cec1d8e09f2ed623fa45601db55ece"],["/archives/2020/05/page/4/index.html","e4177315f8a89f6993bc504bbf426081"],["/archives/2020/05/page/5/index.html","e35c9c895da19c2af68576765071ce1b"],["/archives/2020/06/index.html","c2b6807d63f0cd9ca15ccc31c2025c8b"],["/archives/2020/06/page/2/index.html","4ac6c61ebf79826cdbe6a7427156e715"],["/archives/2020/08/index.html","1dc4d6107c2aa1b7afda7054bc09f0fd"],["/archives/2020/09/index.html","b42784d7f8a06e801295fee6e6f9c4b2"],["/archives/2020/10/index.html","b404bdab97d3d868554d387761c2e269"],["/archives/2020/11/index.html","43b47e708ef8bea4a11bfb4542d530ad"],["/archives/2020/12/index.html","6ba4d5f7910c40766f3d6bd0b6731579"],["/archives/2020/index.html","9cde1e68812d413f8cfe1dd67470e9db"],["/archives/2020/page/10/index.html","e40ca89720ab7346694c5e28044d6283"],["/archives/2020/page/11/index.html","8c71ce1256f2c3a6a7c7201b0fb2e7c2"],["/archives/2020/page/12/index.html","811b776973978e92e5860c6ba8a70e6e"],["/archives/2020/page/13/index.html","c1746e013873172d2e56ec144eba1713"],["/archives/2020/page/14/index.html","dbdd48e149c85c6214d81db0f687f0ab"],["/archives/2020/page/15/index.html","867a0db5a8ccfad5ace6f2df4f9d3183"],["/archives/2020/page/2/index.html","d0b278746b0c4ecfc8440196e45a34da"],["/archives/2020/page/3/index.html","159f329e543737c75cff1a197955bfd1"],["/archives/2020/page/4/index.html","ce92750d5d244ec0d8356d39324c06e0"],["/archives/2020/page/5/index.html","5ffd2e6697b926b5c290151f5e34633e"],["/archives/2020/page/6/index.html","2ffd43612df8726afc409b6360c46ec5"],["/archives/2020/page/7/index.html","b5ab4fe6a7032463a97ec5870b21e3dc"],["/archives/2020/page/8/index.html","c3e8bb89b34f720a49355d7e53712dce"],["/archives/2020/page/9/index.html","bbef87038646a9189c075c6717257fb4"],["/archives/2021/03/index.html","5c2716716ef3bbdc50b6cc462a7c41b9"],["/archives/2021/04/index.html","9dbf0cf80398f03b2bc330d02babdcc6"],["/archives/2021/05/index.html","f608de658f7ddb8f87331f7b02be7ae7"],["/archives/2021/06/index.html","6606cc39577ecd110794816485d95ff9"],["/archives/2021/07/index.html","aaa157296ee08a11a0495988f35dbb88"],["/archives/2021/index.html","b85e73dae5d2136db5fbbe20f0f0050b"],["/archives/2021/page/2/index.html","0c7ce796ab909013c58c51a5906fc20f"],["/archives/index.html","ca82d6ccfc033954e11f4790bec085db"],["/archives/page/10/index.html","4e1fd04c89d45149a3d78e0a2cc112f3"],["/archives/page/11/index.html","c311bb3ddaf459208a29f5006cbd67b6"],["/archives/page/12/index.html","34d2bf10170ea267c0e43b78790839ec"],["/archives/page/13/index.html","f3c38c5505d01f36869f0548bea9d843"],["/archives/page/14/index.html","a4e73a65e16dd769a7079badb0843a6a"],["/archives/page/15/index.html","e3de6fd84547e3e8642f4f3a2bac6529"],["/archives/page/16/index.html","fa42982523c5b4fdb98a8265b5ce9ff9"],["/archives/page/2/index.html","f47849e26ef8907570973edd300629c2"],["/archives/page/3/index.html","1e82bc1e1e87ce055ed9a57a2c4ffa21"],["/archives/page/4/index.html","528ea86dd78dd73cbcf76aa0329ab8b4"],["/archives/page/5/index.html","d9f340532404cb5d6c47c9cdc22966ab"],["/archives/page/6/index.html","2ff7d2182f0dbc57207b022958bbed86"],["/archives/page/7/index.html","3833b1223619f85c2607258df7cedb80"],["/archives/page/8/index.html","e97b39d5e6f7b684c4da2cb30003ce19"],["/archives/page/9/index.html","1279f7af5770306119c7e8453ebd9f12"],["/bugly 上传dYSM文件小记/index.html","24ad0049ff9d6d29a3d015938025ba50"],["/categories/Advanced-Swift/index.html","8e3b2f75f6b7134c77e7526c0178dcfd"],["/categories/Advanced-Swift/page/2/index.html","49e2ce0e9112ea7dc7f21299c13d5ec3"],["/categories/App-Architecture/index.html","bc5151f2db59aa750cb1f4f95ef706af"],["/categories/Array/index.html","6058535c329fa7280981c48a4a24a20c"],["/categories/Codable-protocol/index.html","21aa8fa192de891ce7ed7b05d45f160f"],["/categories/Combine-framework/index.html","6fdfb59e7099c27b9487e936f4b6f96a"],["/categories/Combine/index.html","ccf4875913727d21ee07eba74fd50711"],["/categories/Go/index.html","03951c8a1db967fff71fc630ade06d36"],["/categories/Grand-Central-Dispatch/index.html","cc83ec028b628ef04fbdac77b611e482"],["/categories/Hexo/index.html","06ae5c36d6becc1852e419e19ee333fd"],["/categories/Homebrew/index.html","1eb38a7dc9d1dc94fc7e28c0375ec24c"],["/categories/Linux/index.html","497b4d85ea06a9e1349f38a734792c5b"],["/categories/MySQL/index.html","e41a6e1932864446e840366447095954"],["/categories/Promises/index.html","25effacf67c3227d7486ca363d21f750"],["/categories/Result-Type/index.html","7cb2961c6f0f2e1183a3fbb00b27c70b"],["/categories/RxSwift/index.html","ca3ffd55c4ed0e679d3706792b7dace1"],["/categories/Server/index.html","7b5194f1ad3bf8235b01821b53183f01"],["/categories/Swift-Apprentice/index.html","6a933398ea85590b334abe846c78a779"],["/categories/Swift-Apprentice/page/2/index.html","c8fc6106e986571ba40370920d73b342"],["/categories/Swift-Apprentice/page/3/index.html","99a7161eccc6dffc2f0902632cb2fe29"],["/categories/Swift-源码阅读/index.html","b2591b57972643b0694e56a087a0314a"],["/categories/Swift/index.html","e684ff708001658cb6930c0384e574e4"],["/categories/Swift/page/10/index.html","961718cf961367c6d781e0b99b04185c"],["/categories/Swift/page/11/index.html","7e62edef620af626fae25958af8382b1"],["/categories/Swift/page/12/index.html","d426abc4eda69ba275c69299b1f4b215"],["/categories/Swift/page/13/index.html","eaf8caaee3bd2d353d77b6492713edb5"],["/categories/Swift/page/2/index.html","823c14ee83516f3ba7bc35279acfc450"],["/categories/Swift/page/3/index.html","54d71002f9ef44233e99f51504dcc94a"],["/categories/Swift/page/4/index.html","2d513f25156eb0eeb75d376d5e06eb53"],["/categories/Swift/page/5/index.html","7a505520395abba9307e48cf7c815fc6"],["/categories/Swift/page/6/index.html","3af1f19cc8b3072004873b6be2bfdcc4"],["/categories/Swift/page/7/index.html","5357f1b20aacfbed6360a21750a37e98"],["/categories/Swift/page/8/index.html","738f789d205df2fba57d43a1e45a58b3"],["/categories/Swift/page/9/index.html","8bff138f2ab493b37e653a9c4e6bcf82"],["/categories/Swift5-2/index.html","f96f443b81d94d31ae400d26ec40c52d"],["/categories/SwiftLint/index.html","8f43b478a45e3b983c607396145ea8c5"],["/categories/SwiftUI/index.html","993148ae3b906f471a69fd59381e325e"],["/categories/UICollectionView/index.html","469714750d3c78a2dd944de07edfc01e"],["/categories/UIImagePickerController/index.html","2282707a85a52d8110ce7b5fb6f2b090"],["/categories/UIKit/index.html","97c22246b250319495d026651dfe57ee"],["/categories/UIKit/page/2/index.html","62f32cdc54a1beca6f05c3487c8c0ab2"],["/categories/UIKit/page/3/index.html","df56800eab0211f7978db06254d20028"],["/categories/UIKit/page/4/index.html","31aa9b5c3b62c3317380478387f0d246"],["/categories/UIKit/page/5/index.html","6a3ed642ac5a10b88c60bf0f9449c1c4"],["/categories/UITableView/index.html","527ffc935658066d55ea39d4c80ab23e"],["/categories/Ubuntu18-04/index.html","5c757adff2b24888ee660ba45e58d8cc"],["/categories/Ubuntu软件源/index.html","24beccceafa8d7f0f84ab31dbe8c0597"],["/categories/Uniquely-identifying-views/index.html","b9de851ac848aadd4e07435d5ea7ff5f"],["/categories/VIPER/index.html","a6aaecfee2f6a441d9a9a4b9cff83ea4"],["/categories/Vapor-4-0/index.html","c5ce32cd6ecc9af6346278de92d4bce8"],["/categories/Vapor4-0/index.html","df1e999a33f6afd82441a8cfe3a04e5f"],["/categories/Vim/index.html","410265eec738c2e0a81344a820672e25"],["/categories/Xcode/index.html","ec2da4364316bb591e6110f6ece02be4"],["/categories/appleOS-Networking/index.html","abad4ace9240d36718365f0e2e2f4c92"],["/categories/bugly/index.html","75379cf92aa90995906ca0907f3976b2"],["/categories/enum/index.html","91287e3b43837a1abb9b03c0d53fe510"],["/categories/git/index.html","539efc6ff3fba746c661c91b84525912"],["/categories/iCloud/index.html","3f517b845c4a76baf4a74e8ce61e7a6e"],["/categories/iOS/index.html","2237cdc8cd33c12d2a53f0137c840ab9"],["/categories/iOS/page/10/index.html","39c8d768f3d1f342b86456f11cd01471"],["/categories/iOS/page/11/index.html","4d2e8ca9feeb78bed2ec8d1ff3a36621"],["/categories/iOS/page/12/index.html","407828c8448f26c5dccd719c8b672ff9"],["/categories/iOS/page/13/index.html","9a563311eab683a22682b902480ee040"],["/categories/iOS/page/14/index.html","d9f4f497de1d5ecd188ebac0bb91012d"],["/categories/iOS/page/2/index.html","933ea4ac1d41c4816884a2396195dad3"],["/categories/iOS/page/3/index.html","d5146e551a7ab4a0ff818ddca0660131"],["/categories/iOS/page/4/index.html","37d804620dbcb03b159a62d0868b70dc"],["/categories/iOS/page/5/index.html","2ce75db636df24ee45c32ba1faf96e2a"],["/categories/iOS/page/6/index.html","c1add150c7a43500d2ea610f7a3ac8d9"],["/categories/iOS/page/7/index.html","ba74ce71b32a3a5943381931fbf26e65"],["/categories/iOS/page/8/index.html","7c0eecbdb3eb1ab34814db1e855911fc"],["/categories/iOS/page/9/index.html","c0dadae02cee356c09920b5258325b0f"],["/categories/iOS面试题/index.html","239c80f660f1628d559801257b4bd9d1"],["/categories/index.html","4554590e1ce4fe0d8d2fdb9c36f9a12a"],["/categories/random/index.html","40be225fd9acccc325f70a957179b5f2"],["/categories/三方类库/index.html","d39015827a9d9884670cecd2cc2d4820"],["/categories/函数式编程/index.html","c2022788058c8907cb4ec77defde6810"],["/categories/子类化样式/index.html","1c558461c1ccf4a4d6979ec7ea5ec9fc"],["/categories/开发技巧/index.html","10a49273cc0f5aecc20e84aa2adc336e"],["/categories/开发记录/index.html","436679187776179d7a48ca320ccef6af"],["/categories/技术支持/index.html","963edfa31e790ff43fb5593aa0aee45e"],["/categories/数据库/index.html","7717c77a9e9a8c4a883e2d355a0419de"],["/categories/架构设计/index.html","7783cd42074aebdfe7ffd065323b2407"],["/categories/测试/index.html","12c72977680b021dcd53add9cd1d8ecb"],["/categories/用户体验/index.html","e5bd7757362797b4314ee5b2c50916e9"],["/categories/用户协议与隐私政策/index.html","9319bc0c81b9cf965d8a613031688405"],["/categories/设计模式/index.html","def5ccf17a9ea8a328f72e511fc05d9a"],["/categories/设计模式/page/2/index.html","a154e97a9947a3e81012314b136087d8"],["/categories/设计模式/page/3/index.html","2e00558f8faa025604b1a9fb861949a7"],["/css/main.css","8206158ab3992e081651d5621004b26b"],["/hello-world/index.html","264a13f312cba0d74e90797f3a83d04b"],["/hexo部署失败/index.html","6acdd0a21240bebb4c7561839e236204"],["/iOS VIPER架构深入实践/index.html","83b316d635ff2ddce354588b93336f19"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","ea8212fa3493aca5443f5e2f0207ed78"],["/iOS 自定义视图，输入表单和错误提示/index.html","a294e736526c71fdf4a9fc5047d3085a"],["/iOS如何使用iCloud文档？/index.html","fa1bf2e5a7fbe71649a0d39baf22ff1c"],["/iOS子类化样式/index.html","f17724af178e88337d12dd7d057628da"],["/iOS开发记录<一>/index.html","966e67063fb3df264daba183389e9dd8"],["/iOS自动化布局编程/index.html","956b7e45df2efc7aff54d4abe0c3b9e7"],["/iOS自定义转场(By Swift)/index.html","472cd83a461b0fb4c255e6187556372d"],["/iOS项目架构：使用VIPER/index.html","50e38834c7663ae3c955d844ac0ee06d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","5180de7d3ac12d8ad7c5f0b428797075"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","33c941a3bfb39f9d74d34c6857d192e0"],["/page/10/index.html","e275229823fd0a214e12236465bec94e"],["/page/11/index.html","6ccf726ac94a9fee541a44c0c416ef0b"],["/page/12/index.html","925c9c3f05e6a8bc01f6878b034933cd"],["/page/13/index.html","fb4a92aa0ca146c3fede7063eb34f531"],["/page/14/index.html","cd491d25b6e004a89b027fd819b97f89"],["/page/15/index.html","3e68ee31cd0fa4edddb17b5caaa9e73e"],["/page/16/index.html","6a3917fe5aa35b7b5e072547711b348d"],["/page/2/index.html","e264bfda759abeb4182368227610f427"],["/page/3/index.html","03827c740e74041e2409d3f6be1af2a8"],["/page/4/index.html","5ea341d7064d0c80d8429323e22815ae"],["/page/5/index.html","5bfc2597af3be7817764bf85a749406b"],["/page/6/index.html","6a1ca7d8c91b9c2e4907eac37b3b72f8"],["/page/7/index.html","98962a9bf3ea7f3da7897c4380fc0fce"],["/page/8/index.html","60338a6835cc0b7557991851fcb31af3"],["/page/9/index.html","8e0964b992e93994936879c9e8bb0962"],["/schedule/index.html","05e8ebf4696b08546982b83becb72668"],["/storyAppPrivacy/index.html","79ff2d6b750675dea6d3764ecfab5382"],["/sw-register.js","6c9b4ad2eb70a7c5a029c36b7bf92866"],["/tags/Advanced-Classes/index.html","15eb1d5784e09d052976569f3db7d8b0"],["/tags/Advanced-Swift/index.html","325a2a65de65ad5c7cd18a2796585391"],["/tags/Advanced-Swift/page/2/index.html","03c2ec1ae8adbf9b44566587e90289ca"],["/tags/App-Architecture/index.html","610425c5c26c94027b3def57f4d9bedf"],["/tags/Array/index.html","273923ba590e75e907d2ca8188d12eb1"],["/tags/Arrays-Dictionaries-Sets/index.html","392d7cf8332458562fbf53d9fb7f4fce"],["/tags/Authentication/index.html","7339349735a7aae682cad9319b5eb6f2"],["/tags/Build-in-Collections/index.html","81890723199a4a995619f5b48a1cfd56"],["/tags/Building-Your-Own-Types/index.html","1b463cc39b16462845866bc4aa7bdfb4"],["/tags/CMS/index.html","d2589430d1a5dbda86a91821d30b36ec"],["/tags/Classes/index.html","6f62766f18a35b7ff50bc7edde7633b2"],["/tags/Codable-protocol/index.html","af883eab831512b3deb5ffeb487d1335"],["/tags/Collection-Iteration-with-Closures/index.html","ccc3f43bf42dd8c47d41c6e94baccec9"],["/tags/Collection-Protocols/index.html","b77015ff049f2c023c0283326dcf24a4"],["/tags/Collection-Types/index.html","e6ed4fa9afb1039f3039e94e198e6b3f"],["/tags/Collection/index.html","53dea43756af6282b88a8d89633f2edf"],["/tags/Collections/index.html","e61efe75b4bc5f9a477ca703c51ebdd9"],["/tags/Combine-framework/index.html","6c6ad33090d590339c989d2cdfbdac3d"],["/tags/Combine/index.html","186ccafa742d6d6295878df49905c4e2"],["/tags/Dependency-Injection/index.html","32c98e257056718830003aa649826ca0"],["/tags/Encoding-Decoding-Types/index.html","d20e4361ef76bcc03e7addf8e21b8eb9"],["/tags/Encoding-and-Decoding/index.html","193ddf903c6cc4186595afe2c102dd00"],["/tags/Enumerations/index.html","33eccf649a9800c18b544458856f2296"],["/tags/Enums/index.html","91d4709f139c88e7f879a27d7367ab9b"],["/tags/Error-Handling/index.html","e014b3ef838fb9863ecc82d5af84ad1e"],["/tags/Functions/index.html","f8741414e84ee031a877ea9903649a01"],["/tags/Generics/index.html","a0b57a03c8a83a1023f60c8bbe31edcc"],["/tags/Go/index.html","6f5e0e8be873e7fa2ba401a5dde4bbb3"],["/tags/Grand-Central-Dispatch/index.html","2555ba3bea16b46653aa764309d02054"],["/tags/Hello-Vapor/index.html","a36831604d4ee1aae6d086701e6482f0"],["/tags/Homebrew/index.html","502831761046978b875f272df7393ae0"],["/tags/Interoperability/index.html","00aa24f41c538cd7eda9cc11a2800543"],["/tags/Introduction/index.html","fe202d0cb580bcb165cd7f1803ebad41"],["/tags/Leaf/index.html","34acf116b0196f42aeb73e99784d0331"],["/tags/Linux/index.html","6988211d37d731bb17b1fefa85141b64"],["/tags/Methods/index.html","695f9ca7bc93fd08b12eee42fb85c743"],["/tags/Modules-And-Hooks/index.html","f1afd4b1002b787d875254304028b38b"],["/tags/MySQL/index.html","c735d90a91fb648fa9239fdcef1e0810"],["/tags/Optionals/index.html","f03bdc61ed68242b6294b53e4383bc82"],["/tags/Promises/index.html","bc2b843bfd1d6f10535130c4ad82914c"],["/tags/Properties/index.html","2854bee9e2173b12f278384ec926f8ec"],["/tags/Protocols/index.html","8682fcf9da8e4cc30b0c97c49aecd82e"],["/tags/Result-Type/index.html","82d514f12f0707be91250dfa9d9ccc8f"],["/tags/RxSwift/index.html","f4d3d7f9a15a49aac5d1f27d19163c66"],["/tags/Server/index.html","6db88b459e48ceecd714e057713a17af"],["/tags/Session/index.html","6f0b60a89ed6a6aa032cfeaa6a76686d"],["/tags/Strings/index.html","4b9936fab15656af831f4c79ef595006"],["/tags/Structs-and-Classes/index.html","260fe82e682a10d3cbd3c4ff5206b217"],["/tags/Structures/index.html","853dc141faa532b387797ebe7bdddae7"],["/tags/Swift-5-0/index.html","094045210c37bb4317a666b2394662b5"],["/tags/Swift-5-0/page/2/index.html","c47c9bb0204a8cd47bc434ad11159b00"],["/tags/Swift-5-0/page/3/index.html","70d69c974673512878b80cf313c36fb8"],["/tags/Swift-5-0/page/4/index.html","4420ac3dd4a3630d3d2a4a2ec3247e7b"],["/tags/Swift-5-0/page/5/index.html","f285ebc60dfb8284433d5d9493cbeade"],["/tags/Swift-Apprentice/index.html","26012fedc5d7baa22e0cbc2990503a2e"],["/tags/Swift-Apprentice/page/2/index.html","03c8dd7823e47453eb6c05f681e63d79"],["/tags/Swift-Apprentice/page/3/index.html","a84044500996bdc81ef68b1c28cc7263"],["/tags/Swift-Package-Manager/index.html","193471ef9704fd2a840ad48b6fe5825b"],["/tags/Swift-源码阅读/index.html","9f6119a4ee1a84159b356cf7ff5d0b13"],["/tags/Swift/index.html","26f895186aafe223970e3cdad9b280e7"],["/tags/Swift/page/10/index.html","253e1258ec4dd2a1fd9715deef94f953"],["/tags/Swift/page/11/index.html","93d50c12b53df35301426bfaa18caff7"],["/tags/Swift/page/12/index.html","8e5ed6d0dba7dab50d1e1bcd414438e5"],["/tags/Swift/page/13/index.html","479eccd6ef12e69d6fa07c078d20d6af"],["/tags/Swift/page/2/index.html","6d31e7e83db6c93b15eb0a020033ac19"],["/tags/Swift/page/3/index.html","714853026040803bff8298b90deb6533"],["/tags/Swift/page/4/index.html","83f1e72ffba5e61671f65bb43977fb20"],["/tags/Swift/page/5/index.html","30e51534906ee8518c1e84acdd9972a1"],["/tags/Swift/page/6/index.html","18bda8610a3da21ccc00e2b3085579b1"],["/tags/Swift/page/7/index.html","f88ce7bde8b22ccb8e3e4fa0132a5311"],["/tags/Swift/page/8/index.html","cb9a0b088fdaef7dda9696e6bfb50bd0"],["/tags/Swift/page/9/index.html","0c1d600888eb7750851e2948b483e5eb"],["/tags/SwiftLint/index.html","0e955edd1ca0a4ef86b5430922dbe0ed"],["/tags/SwiftUI/index.html","9585f48067fc9ac910687fe65c6708b9"],["/tags/UICollectionView/index.html","5cffcf26015657362d99d649a97ee1a8"],["/tags/UIColor/index.html","4b6807d11ece59fb406d0762192f5f8f"],["/tags/UIImagePickerController/index.html","9e0ce0031b0d5c3fabfaed5b4fe2f7bd"],["/tags/UIKit/index.html","827845d684d9b16ebc08d8998fc6504d"],["/tags/UIKit/page/2/index.html","fff3496ae917d75369d50f4f9f993f76"],["/tags/UIKit/page/3/index.html","b38c34009c6931790293f000e1a6ad6e"],["/tags/UIKit/page/4/index.html","8013b831cde0c45b1c01cd9e4aee8a14"],["/tags/UIKit/page/5/index.html","3be88e61abaeb19b8bbea7f842c1e269"],["/tags/UITableView/index.html","c3eec00633e1aa4466d2c8007005bd90"],["/tags/Ubuntu/index.html","11501a4f039a07293c7db7ed21aa8def"],["/tags/Uniquely-identifying-views/index.html","a134a53d543b850980d64b459fd577e7"],["/tags/VIPER/index.html","58a8d9aa20c01cc0356d92a162b8b52c"],["/tags/VMware/index.html","111705010a8a0916b9eec6892567f0de"],["/tags/Vapor-4-0/index.html","86464861545f71fdf60af3f0d9ff9b75"],["/tags/Vapor-初探/index.html","7ff7227db4f4cdaeeea3b252904b9995"],["/tags/Vim/index.html","34b249e9e7f35786051c6cfb4fbc406d"],["/tags/Xcode/index.html","b7036757e97c94cc0fbfd62542250646"],["/tags/appleOS-Networking/index.html","de1225b8f3aaca6b7a32d8113ae26c4d"],["/tags/bugly/index.html","b5bf67cf77e093565e990e1e6a591eef"],["/tags/enum/index.html","cdd2e7916c8d7f939c0c809f4fe8c50d"],["/tags/git/index.html","ebdfd03f826d44fbd137ba6721cf44d5"],["/tags/hexo/index.html","9de95351b76d00c3e3f885fdf9db9d4d"],["/tags/iCloud/index.html","eb2d1e89bf23e3c879463982d60bcdfa"],["/tags/iOS/index.html","fc9ee156396ae537c68c48f66b3638d3"],["/tags/iOS/page/10/index.html","dc5a6d66c2b6c6b4dff6d96833f87807"],["/tags/iOS/page/11/index.html","28ec46398af91b1aa4359216a57f3ab4"],["/tags/iOS/page/12/index.html","e71805758e8641e2072c1c5671ff1d96"],["/tags/iOS/page/13/index.html","884e411ec4163f7430b4f810186c3a27"],["/tags/iOS/page/14/index.html","5737e58d849bb276b5c537e32ef82c63"],["/tags/iOS/page/2/index.html","5452a98954f536cedc0086554574a5d3"],["/tags/iOS/page/3/index.html","5cd31bd0760550b3e5abd0b89b14c881"],["/tags/iOS/page/4/index.html","81e997fe8f5d1cf371930c6afba2e15f"],["/tags/iOS/page/5/index.html","c100262d71626d39bdcb43588747b3a4"],["/tags/iOS/page/6/index.html","13f624ac4f460e95bf1d595b089a541c"],["/tags/iOS/page/7/index.html","5d3fc7b578659c00002fd63490152ff5"],["/tags/iOS/page/8/index.html","0ecb0cabf5727070a40c2764c46cb88c"],["/tags/iOS/page/9/index.html","3926bd004152a0536802c01e41df90f7"],["/tags/iOS面试题/index.html","038f72fda392cfe744f0cc6ac21abe5f"],["/tags/index.html","203683109a52d2ea35ab999c1f877934"],["/tags/non-optional/index.html","989ebb84d8582d21d98aa34a72dc78d3"],["/tags/random/index.html","b49f3d3ad16810a3a151d0705480acfe"],["/tags/transition/index.html","9a3c6cf877f66ea217b2d144529ee6af"],["/tags/三方类库/index.html","a735e997d07ca262c871cf1431ef1c3f"],["/tags/依赖注入设计模式/index.html","ba13a48c38eaa038e78b324385c381b1"],["/tags/值类型和值语义/index.html","da8950fed76c55786f771f2dfd3c0192"],["/tags/内存管理/index.html","bd1d4ab4eacf5bed1526a34f2ba2391a"],["/tags/冒烟测试与回归测试/index.html","e493976d739df16d82fc43f3fbbee0e0"],["/tags/函数式编程/index.html","99292192e0df2098656e601e10d43d79"],["/tags/创建博客数据库/index.html","74b6a981c940bd45a602c51edd856c9d"],["/tags/初始化模式/index.html","4afdf2898bb2ab367b13a8876085a3c1"],["/tags/单例模式/index.html","55c52549f44cf70ee1d1f2b6e81aa538"],["/tags/原型设计模式/index.html","aba50ac6de4ae261b33f51dc47f903d6"],["/tags/命令设计模式/index.html","e241d077147f4f1324d1db556daeee2f"],["/tags/基本控制流/index.html","ada9284220312d292b502ddad41813df"],["/tags/外观设计模式/index.html","9c710ca4dff67a235071d00941b07d80"],["/tags/委托设计模式/index.html","51ac30fab3be1db2b06976305f134185"],["/tags/子类化样式/index.html","ea2363950037f468765e3cb35421f459"],["/tags/对象池设计模式/index.html","3b5add5c209e7b07854c676c6b240467"],["/tags/工厂方法设计模式/index.html","32816558edc1aa366eda2db7740902a7"],["/tags/工厂模式/index.html","8d4232d7ce6b9c13c8f0699236acbbd3"],["/tags/工厂设计模式/index.html","0b7f9ad1bfcd473bc4625b5a707671cd"],["/tags/开发技巧/index.html","b2a35c8f92859e92efa99424fb63240c"],["/tags/开发记录/index.html","f21fd8e2fdfad9842dfce572bf1789e4"],["/tags/懒加载模式/index.html","b63442a2b9f1eec35b6fe06a946db2ad"],["/tags/技术支持/index.html","b46e254ecc1ab196365f08c19e15f586"],["/tags/抽象工厂设计模式/index.html","67e7407186fa8dda24a80330ac6d7d1c"],["/tags/数据库/index.html","aca28c7369b291bd4fe62f9ef88ae761"],["/tags/构造函数/index.html","e142a3bebc2571ce2edffabfcc80487c"],["/tags/架构设计/index.html","42eca06e6c6a2e0f9eeb7c1a3552a942"],["/tags/模式匹配/index.html","99b2d43091016a7bd6403e148d26caeb"],["/tags/生成器模式/index.html","7a2b27638a04882777680e7063795ea9"],["/tags/用户体验/index.html","60ef0c055bc68a4237fdb9ab3c0e6639"],["/tags/用户协议与隐私政策/index.html","7dd65c55dd2494975f8cd473d4fd14a9"],["/tags/类型与操作/index.html","c0ecfc438b66864629e06434b02a388e"],["/tags/自动化布局/index.html","9721b8780b98466372d6f33b56dd49df"],["/tags/自定义UIView/index.html","5623fba7d8cc0242e041f86905e93136"],["/tags/自定义转场/index.html","bedcf1f544dd691117168af739cdbbc9"],["/tags/自适应布局/index.html","5063c904df17c1ddffef0ec891eb45e4"],["/tags/表达式、变量和常量/index.html","decd8691b21a3aa4bc2ec6dd32251e93"],["/tags/设计模式/index.html","663bf37e76a52411f4c53cdae74a8ead"],["/tags/设计模式/page/2/index.html","0e06bf61d6122c15549876e08b471f12"],["/tags/设计模式/page/3/index.html","e8224f495d9a0b155f411c161a6744b6"],["/tags/访问控制和代码组织/index.html","f2538acc6c63656e9084df98fb99312a"],["/tags/运算符，下标和键路径/index.html","e317db2f0a765e41bd85610ae9bd7dc6"],["/tags/迭代器设计模式/index.html","d34e40a7841d7510c4115da3ba2ffe00"],["/tags/适配器设计模式/index.html","cc697e5e0aea074cbdee46b61a95fbd5"],["/tags/错误处理/index.html","5cecf9595f899d84ca6ea6998e10f3a3"],["/tags/静态工厂方法/index.html","f77512e159dcd4f34e1986f52b034bc0"],["/tags/面向协议编程-OOP/index.html","62191d5b661619fc6e9c1a9d34db31d6"],["/tags/高级主题/index.html","31a614500b46a5ff7881612975dc074b"],["/tags/高级协议和泛型/index.html","d70a480bf7f91b999ec1ef6780e79345"],["/tags/高级控制流/index.html","c2fc8e7b8178dbe86038fed8f9d2b4dc"],["/xcode 常用的快捷键/index.html","d9a5afa257640343814ef0dd68b7ee14"],["/为iOS应用构建输入表单/index.html","e806f65da5a699a5f4cfc48e26ac9818"],["/产品开发的幕后花絮/index.html","62541946eed084787d8e829be6a4082a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","822aaf40b9e510ea9841be817706fc5e"],["/冒烟测试与回归测试/index.html","8427f72119a093f83593722c88133beb"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","aeee9c0953ce3aa6b5c7fffb9ecbab01"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b0fb2fc5c1485688c936f981abc812c0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","686f5a20f583c4c8056ee549866e5280"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d584595e56d1047c07371be7e5e27469"],["/在Swift中创建自定义集合/index.html","529ce1b5031dcb888b4d0de244ecff5a"],["/在Swift中处理非可选选项/index.html","bd956ff9cbc01635a636e7311b0c1591"],["/在Swift中生成随机数/index.html","3438f5b4f9a6db5009f43a2847f22d25"],["/在Swift中重构单例模式用法/index.html","0682a22f93246e098f32c57aa4326e05"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d4879815356413212791c65bcdde0bba"],["/如何为VIPER编写服务？/index.html","2bcbe904eca5e23b214a99d10fe6511d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e246b8d50b6edcb35b44a8c0422f2175"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1256b89f9352371f7f9cd9c03599ceed"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","49e12915e1d1bddf9683875b8e606e9e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","2430cea622bd376143e981c14e28336d"],["/掌握VIPER架构/index.html","422192a948113c848b58a90abae56c2f"],["/揭秘 WordPress Hook 系统/index.html","a4656bcc9bc335f7e014b7e127f0a25a"],["/比较工厂设计模式/index.html","f62372ebf70873f69af694121c0ce1f9"],["/深入了解Swift中的Grand Central Dispatch/index.html","d5afbfa2ea79e95fbfd2ea8223101a90"],["/深入研究Swift框架/index.html","f0f2d01b2602a670f6ca872f7c451939"],["/美豫直聘技术支持/index.html","fcc00e669d073f1299114bbdd0679bef"],["/美豫直聘用户协议与隐私政策/index.html","7d269a59786b043b60a086d429a659e2"],["/适用于iOS开发人员的VIPER最佳实践/index.html","19fc45a1bab6d2b550f74b15915e9000"],["/选择Swift而不是Objective-C的5个理由/index.html","53abff8b25b1304c6aca58991853d786"]];
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
