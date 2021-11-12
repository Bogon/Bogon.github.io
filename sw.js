/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","1560aecc1afca29ee4b615ecc38813be"],["/2020年iOS面试题总结(三)/index.html","2718a584d3f3081b5e2334173a8cfc6f"],["/2020年iOS面试题总结(二)/index.html","edd87d271ef879a07cff046224c38d62"],["/Advanced Swift系列(一): Swift 简介/index.html","c74225a609442efacaf987df12cb5659"],["/Advanced Swift系列(七): Strings/index.html","1e11689f048a1099477aa8bacc160208"],["/Advanced Swift系列(三):  Optionals/index.html","95a38380c4f8fbdbe37921c6c489e557"],["/Advanced Swift系列(九): Protocols/index.html","4781572b121d60a80ab328d43f4e4af7"],["/Advanced Swift系列(二): Build-in Collections/index.html","eccabe90b426703004cc11f2cc0ba226"],["/Advanced Swift系列(五): Structs and Classes/index.html","c67b0f2577eae7bfb3274e26679fd856"],["/Advanced Swift系列(八): Generics/index.html","62c57bcda8452c73189c9a58ef335861"],["/Advanced Swift系列(六):  Enums/index.html","cb420e7302c0e0525a8867e1c4c3e776"],["/Advanced Swift系列(十): Collection Protocols/index.html","e8fe7ff4856bf52748a907548c4e9d25"],["/Advanced Swift系列(十一): Error Handling/index.html","9f6df503a24a08a9e71bf1f45e37f36c"],["/Advanced Swift系列(十三): Interoperability/index.html","1d77de537b736bd724c474c52a0eeda5"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","019241dec19fd26804f1de45fe0f9b5c"],["/Advanced Swift系列(四):  Functions/index.html","857518fbe8a8ebf6d769330659572e9e"],["/App Architecture系列(一):  简介/index.html","31ac99d6ff8fc09144441306f022c9b3"],["/Functional Swift 初探/index.html","a0ce43abcbd00d0b426f54e8f50474fe"],["/Git 使用小技巧/index.html","d777c1a6ee5c4c2946c4662ad3941e18"],["/Go Protobuf 初探/index.html","90b926db504e2f91f05b0f038483590f"],["/Go mysql Tips/index.html","9ebf93d28d2edda08ac9b36a868152bf"],["/Go 基本语法初探(一)/index.html","5f02d7bd20bf63bffc4c67c573fb3da8"],["/Linux VIM 命令及操作小结/index.html","25e6b2edb9a5721b4a2bb81ff4216bc2"],["/MySQL 基本操作/index.html","82d28267931846d374f6f0cb7980b217"],["/MySQL-列类型和数据完整性/index.html","3472737041f39ea2b076030cc1420477"],["/MySQL-数据库设计和查询语句/index.html","6ac040dc57329c849af3fe268f646256"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","0b4246e171226c96f1fb68abd55c62ea"],["/NSCODER和SWIFT初始化/index.html","7b7a5abcd2e4d107cf35cf8842ebd319"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","bebd8934e0f3583e6f29f92d76558a4c"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b7f6c6d40ed547a9e04c7b20de692e25"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","5b0ccf3653b4a6b549537f75bdd3ec57"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","17e9a5b88f1e9a2a21573dcbe524627c"],["/Sqlite 使用Tips/index.html","f3d3afeda100223724f792d6fec7991f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","3ec4e219ab2f3a950ceaf4524262c1b9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","26f4709907b87e32f454e2acc1526059"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","4d6c1ea7c0bb52984a2fadcc1bd3a0cc"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","24cf12990cf3c6a3be34735371846c2d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","4559acdb03b8ec1795b253b1f48834ee"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","4ea99444729de2f1005553e0b64459cf"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3e3051bf71fea46b1524e2829d9405a3"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","e1986fbad84f48426b8782ea33608679"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","494b6246aca1c8fc200444dbb81e6e24"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","12b8fdd5a722bb635d0bfda070d02d25"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","aef72cf320c9a797d4aa16bfe12154e2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","75976945b3f8d8183d0be70fe348a6ba"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a712943279f78aa1f1e0bb04aa8dcd9d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","c009f13fa519ca99430cbc7016a5c93e"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","46f2292c315503b84b88fcc01a5fd374"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","54d37b22709c86ffa5b56d80a0e0eedc"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a99d592c6584e957d7efae606b6742a1"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","3225d7cd780ef67e6a45bb2199199736"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","1b0c0dfa3ca135762f0df49e881a7fc8"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","97b9f6c13dc0e12f2eff726d3e2d663d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","de1e97cfc9bdccbe2041ab0e3ff7caa8"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","7bf3d5a1ade91391946b3764cf1d91f4"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f306e6d7879c6666bf527a72bf58247b"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","16810c97e0fc12b8ee84446f513c18f6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","07b152053074625ceb50d893f3e48be4"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3f6a83e5cd5773449864c0859822901f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","f520a7969656021a9c84ae04660fdf63"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","4e768a693abc7815ca5175e59713fef8"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","595393e414fd76dcc239b360d76f2c50"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","bd0dbdcdb20914dd002717a9d86c749a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6ede7de5986f8aad9bbf15863988d7c9"],["/Swift CompactMap vs flatMap：差异说明/index.html","59517f5a302b837ff84f1d8852f830ff"],["/Swift Grand Central Dispatch 深入实践/index.html","386c114bcf401f53c447ad0240d2ee48"],["/Swift Lazy属性初始化/index.html","05abb3f4675e2715b05740f5ce61471a"],["/Swift Promises 初体验/index.html","a4b3ea9d5fed7ea48654c9c188cf3f53"],["/Swift Promises 探究/index.html","1027b6bfb0edf15e1e0b7e85ea59c4e4"],["/Swift UICollectionView使用指南/index.html","c21e83613f9eed7e09ed9de3742e93da"],["/Swift URLSession && Combine framework/index.html","d5c9f6aea440584af31d68f6ebe6982f"],["/Swift tips/index.html","9f227052b564924d4dc87a702f7760d4"],["/Swift 三方库：GRDB 使用指北/index.html","2a85a37751f1e826c313ac09609c424b"],["/Swift 唯一识别的视图/index.html","a002710d9bc55666382dded1d7f1412a"],["/Swift 如何学习现代UIKit？/index.html","d9f80fabe4220a008149bf92ac60f8f9"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","94903489dc5e0de57a6f82daed338ebb"],["/Swift 用 compactMap 替换 flatMap/index.html","05c6699dde24f44c9891904437065638"],["/Swift 选择和播放视频/index.html","13bb8aead38216a49e45102d84640514"],["/SwiftUI 系列(一)：1、 简介/index.html","92a4deb1c7394e7df732d073d4c943a1"],["/Swift中UIColor最佳实践/index.html","cd339e0e1778bdb9d0c6ffeb286485ed"],["/Swift中快速简单的工厂设计模式/index.html","e8372ebbea2d9527a35d06641cc43cb7"],["/Swift中构造函数与静态工厂方法的比较/index.html","593b1b568ba88eaaf68a4ad1355bac77"],["/Swift中的UITableView教程/index.html","bb344d2da82d23191d42ada74bb7ae07"],["/Swift中的懒加载模式/index.html","536376110782952eaf8381776fd1e8e0"],["/Swift中的模块和挂钩/index.html","9f3e5f98d303458906957e7b060c79a5"],["/Swift使用布局锚点添加约束/index.html","ad582682ce2ea52e53b6f5b447550d35"],["/Swift依赖注入设计模式/index.html","1de0de90b64a91dcd1f5c35bb7f836c7"],["/Swift关于Dependency Injection (DI)/index.html","f0cf0c1c6ac21d70d1b3cfab11808a53"],["/Swift初始化模式/index.html","22238f6ca056ee968786aa808a003b64"],["/Swift单例模式/index.html","882b9e4a3137e39ffe9fd6002a8484b4"],["/Swift原型设计模式/index.html","a5230602bde0d767ba86585cfbe406f5"],["/Swift命令设计模式/index.html","5d2f9ddafc168918317e5317090653cd"],["/Swift外观设计模式/index.html","73dc19b6e54f61ac2a000ab7d072f9da"],["/Swift委托设计模式/index.html","c5de0cd70a359998d882f836e7a70341"],["/Swift对象池设计模式/index.html","e65d8c67d093ad3af0e2031169d4d53b"],["/Swift工厂方法设计模式/index.html","7721c4dbcdcde399ea71665ed329690e"],["/Swift带闭包的懒惰初始化/index.html","aaf45a9aa076b0fa0b1160a6fa6014fa"],["/Swift抽象工厂设计模式/index.html","322b2a093263177538f8d1277c7c0cf8"],["/Swift掌握iOS自动布局锚点/index.html","ed0a06aa84c2a39f913582487b53fb2f"],["/Swift支持旋转的自适应单元格/index.html","afce5e82532186bebad4a68b7c9ad060"],["/Swift枚举值/index.html","15a5c0c26b61fc9a6840a3088f09325c"],["/Swift生成器模式/index.html","6e370d338c4a73e8dcfc27236d66a873"],["/Swift结合Xib文件自定义UIView/index.html","b5f92ce66aa7a0feae8ab2170b9a017f"],["/Swift编写的20个iOS库(一)/index.html","b4cc20dde34750644b8c80680d536054"],["/Swift迭代器设计模式/index.html","84f6ff8c52e87355995ba2a9049e975e"],["/Swift适配器设计模式/index.html","336e77b25ebeb72ed0155ef0949b79f9"],["/Swift静态工厂设计模式/index.html","0f2b507d9bddb2dc56df283dab4b56bf"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","22301b0d09a4b0d90305727690e96b3d"],["/UICollectionView data source and delegates/index.html","21eb7bb9642ba6d09dcec9223aef39c9"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","2bbf0dd19d379533f3bc6776edf11448"],["/UIKit初始化模式/index.html","a27acaf0f6dd9deb8d32ba35dbc4f1e1"],["/Ubuntu18.04替换国内源/index.html","0c81ac6117d377d45971f7cae4cc4e2c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d5e81885c7e932ba4c6d7318727f24df"],["/Vapor系列 (一) :  Vapor 初探/index.html","612d1d30af155d5536e2e475c2ebbd02"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","0f5909ebb340657d701bbc21684de1b9"],["/Vapor系列 (二) :  Hello Vapor！/index.html","fedc5461b35740bb43f7391a5b305c47"],["/Vapor系列 (五) :  使用session进行authentication/index.html","eb6b6521530a80b7aa9ed425fe9a9e4b"],["/Vapor系列 (四) :  创建博客数据库/index.html","ed8983fbd1aed7ae714fd2b0802535d1"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f3905503cde596b39ca69747f42000d4"],["/WKWebView与Native交互注意事项/index.html","c84593baf1ab5532e0ff7a0cc82eb5ec"],["/Xcode扩展/index.html","5f7c6bc5670db349e0aecb31739e231a"],["/about/index.html","a43deb97f241f02c8ee1949a5961a733"],["/appleOS的Networking示例/index.html","c34d2a78adae01b3f15d2db5e4d0f7a6"],["/archives/2020/03/index.html","12d2cd1099f19c830189130ce19cfa71"],["/archives/2020/04/index.html","664664dbf2bb9e5100e909fe43d9f484"],["/archives/2020/04/page/2/index.html","52566abf39be3ab4874623f521725ecf"],["/archives/2020/04/page/3/index.html","8d21958b775d07854eb99c0635b4135c"],["/archives/2020/04/page/4/index.html","c9bb2897538283e7a9ab4114cb6b9db1"],["/archives/2020/04/page/5/index.html","5e5cb9e3cf9a7c75124305f6b1836024"],["/archives/2020/04/page/6/index.html","48cb87d65c1af5ea730d255d9547f3cc"],["/archives/2020/04/page/7/index.html","d7fda847a5b5e86705eb4062eae48495"],["/archives/2020/04/page/8/index.html","10a00ab1ddad8918a60157972bedfd33"],["/archives/2020/05/index.html","9d1a3943c9d982b02fe0c5809305526e"],["/archives/2020/05/page/2/index.html","f499eecfbf28870e28508442fad4c694"],["/archives/2020/05/page/3/index.html","eaf417cb674cc263eb3b19a4d4e90e27"],["/archives/2020/05/page/4/index.html","3f6abc90176e47e4b5106d798315bae5"],["/archives/2020/05/page/5/index.html","c21cbf1cd4e62fd642344fac3587fb46"],["/archives/2020/06/index.html","9a6de9f92f31aa6c21fe82bcee041971"],["/archives/2020/06/page/2/index.html","ebe2040fc0b59fa7932457276f3a88eb"],["/archives/2020/08/index.html","36a5d4753e079e531228645d38f476c6"],["/archives/2020/09/index.html","ccdc26bf29c3a56e578b1faabdd4796a"],["/archives/2020/10/index.html","07ed8763de9e4e4bcb04dd282b0f9943"],["/archives/2020/11/index.html","b9abc1e2173a688e3eef5b7f343996aa"],["/archives/2020/12/index.html","b129c1b2b6874af201876109ae24aab0"],["/archives/2020/index.html","db5f171590113fbc28d7162a5011c0e4"],["/archives/2020/page/10/index.html","272e0ead8fa3ae1ba06b043452942eb7"],["/archives/2020/page/11/index.html","28f788ec9bda2e44eec826b0856ef4dd"],["/archives/2020/page/12/index.html","bdfb62271d64b798d64eb2f04b187596"],["/archives/2020/page/13/index.html","1364a63601b39255b8db7c4fa54c878c"],["/archives/2020/page/14/index.html","9c9127a3f1f4e8ab68b2e98c72893bf3"],["/archives/2020/page/15/index.html","3b12ad277733ce790b12efb63e9802b4"],["/archives/2020/page/2/index.html","df93ef449f7f6f28baee2a9fa30fa745"],["/archives/2020/page/3/index.html","73c0024cbbbcd897a45a062ccdf0d237"],["/archives/2020/page/4/index.html","87e06ce924786ef4146d962e57583a33"],["/archives/2020/page/5/index.html","f8eacb08fa31214b597f941ae4daf790"],["/archives/2020/page/6/index.html","0aa0beec718e70ac5780ac1371ef0b99"],["/archives/2020/page/7/index.html","81773aba6019ca065bb3c468dc5ee2fd"],["/archives/2020/page/8/index.html","3ccde4cf9d20c4c08d3f441190d56678"],["/archives/2020/page/9/index.html","9edf911f641c679c2b3cb8f69edca62f"],["/archives/2021/03/index.html","b61a4ef0ea06469f1980a4b1574f5f23"],["/archives/2021/04/index.html","cb3a6106db5950088e2f36fc6994ffb2"],["/archives/2021/05/index.html","3cb81865f8d961561bfed4647cc776ec"],["/archives/2021/06/index.html","5d9d2c8b45a2262e2170bbc67d9346d7"],["/archives/2021/07/index.html","ca50af942814722ab78a780f9e613152"],["/archives/2021/08/index.html","b92230dab1024d549968516c5c72faf2"],["/archives/2021/09/index.html","81e0ed52291ec76caf60a10778497d5f"],["/archives/2021/11/index.html","ce201237645d2b03173372945c6b2ae8"],["/archives/2021/index.html","44d62c9e8bc3cf491ba2cc6e0a65944d"],["/archives/2021/page/2/index.html","396b7e7e096e0fe455fc1d95c54ee0cb"],["/archives/index.html","49bd09541a728426377f9a13c221da1b"],["/archives/page/10/index.html","61c1cd416b30daebeffec68831fac91e"],["/archives/page/11/index.html","ef0c37dbe7c7d3d98d3ac0f3cd12a984"],["/archives/page/12/index.html","962ee42effe4d8ef74f42526d49f5cb2"],["/archives/page/13/index.html","563d144da2c1b9bcb39e01da00abc520"],["/archives/page/14/index.html","8db5ca18dab9bc42e4010319b83c107a"],["/archives/page/15/index.html","876301aa08335e50ddced7e49e4b93f4"],["/archives/page/16/index.html","1266254526be1f3b10e0358ea0c74b5f"],["/archives/page/17/index.html","a4f5ccc2a9853b3ce913fcd4615317a8"],["/archives/page/2/index.html","9520b5cee998779e6c2615247dbb1003"],["/archives/page/3/index.html","b6ae15bdd9a74e4cb537cb8160c105e8"],["/archives/page/4/index.html","c6ab595794d8501a796456536a0d9532"],["/archives/page/5/index.html","45e052009530319d0adf7b99dfe33713"],["/archives/page/6/index.html","86e5ad72055cb52b3cf052b72eccb36c"],["/archives/page/7/index.html","8ebfa80fcd569b4c1233934909483656"],["/archives/page/8/index.html","655bf8b97ec4b2287ab7ff349569159b"],["/archives/page/9/index.html","1cd6611d2a993ae5177de334b75b4b5e"],["/bugly 上传dYSM文件小记/index.html","6e96f6e58e7840fbc624355746ab8d59"],["/categories/Advanced-Swift/index.html","dbadc5a66a256862bfcb0504791e1146"],["/categories/Advanced-Swift/page/2/index.html","68a8278b18e640e7456f5b4dbc205977"],["/categories/App-Architecture/index.html","4735967218400b7160090d1b0af27f4d"],["/categories/Array/index.html","1949168cbc26c2fc9947b55bfdab5f3f"],["/categories/Codable-protocol/index.html","172416d8ef80dd8f9bd27217670e0412"],["/categories/Combine-framework/index.html","8c4c48d2d703b5ea654719f8104eb43a"],["/categories/Combine/index.html","dc187944c712bee9c09cb75ccb944e23"],["/categories/GO/index.html","a40cc4502adbc52122ca810bf37ba22d"],["/categories/GRDB/index.html","b2b9d4a9abf72c94341f5715afa66f8d"],["/categories/Grand-Central-Dispatch/index.html","9a89c87f027332eca688518243ac9e2b"],["/categories/Hexo/index.html","bd291c3e7f94fbc9ed772b9af867ca0e"],["/categories/Homebrew/index.html","5af6bfe1ec7fc09b9a042308dd164e30"],["/categories/Linux/index.html","b87066d8972010151637e4242cc414c7"],["/categories/MySQL/index.html","611c8c87ab931738d43c7a4c6edc2dd3"],["/categories/Promises/index.html","7ba35fb3671f12da629cbf326056ee8f"],["/categories/Protobuf/index.html","5c365ed86eb6a850e205eab860898ab2"],["/categories/Result-Type/index.html","879cb644dae00ed8867e19d5cf091963"],["/categories/RxSwift/index.html","53aadfbbdb0841661478785e6c7dc46f"],["/categories/Server/index.html","f5347faa80ca9a7ac5183f3374c0659a"],["/categories/Sqlite/index.html","d564b48d6b60a1097781ec0207d3262a"],["/categories/Swift-Apprentice/index.html","46a461d05f102d87019607ac1c08d4a0"],["/categories/Swift-Apprentice/page/2/index.html","b5d909d1f8a62f0e5a58b73b71f9f1b2"],["/categories/Swift-Apprentice/page/3/index.html","98aca3c7b7f78547831a091ec5229e7b"],["/categories/Swift-源码阅读/index.html","4f9949065bf633f0d896913f08bcd787"],["/categories/Swift/index.html","4520626c70b9249e09c2db3855baf833"],["/categories/Swift/page/10/index.html","9f93a179dfbf00105ac3c88aed015377"],["/categories/Swift/page/11/index.html","ef03cf8116687dda47cdbaa8dfa38478"],["/categories/Swift/page/12/index.html","028873f633af980033c5e7995f8cfe5f"],["/categories/Swift/page/13/index.html","13ecfe724ee9ea2d3cbc1acbe5642741"],["/categories/Swift/page/14/index.html","b95d00755affeeb8ca1186c096feb87f"],["/categories/Swift/page/2/index.html","8159bcc64ec79b7d9040e59ba0711687"],["/categories/Swift/page/3/index.html","469776c503ad4c500643c44f9beda219"],["/categories/Swift/page/4/index.html","62e7a982550a402787a9bc351424182e"],["/categories/Swift/page/5/index.html","2b627852b1bfc2a6647026174d45e161"],["/categories/Swift/page/6/index.html","e9588a0a0cd57bfc8ae11d99b20ec67f"],["/categories/Swift/page/7/index.html","44fe20339ad72dd5a8b617243e5038a8"],["/categories/Swift/page/8/index.html","88e0a9ebfeea5950d4e0c21bc19b5c4e"],["/categories/Swift/page/9/index.html","2fb44e9455a5b93b998b1a76c5130d45"],["/categories/Swift5-2/index.html","b4a2eb0b6441f651b74a3c839d777a4b"],["/categories/SwiftLint/index.html","e4ced4dcadef576f393a049f64148530"],["/categories/SwiftUI/index.html","434546dec8c0a982a4864413f8f906e5"],["/categories/UICollectionView/index.html","8b814d7347c5b97133ea595e97bf4eb9"],["/categories/UIImagePickerController/index.html","3795bc6553c031500b110a5dba53e8a0"],["/categories/UIKit/index.html","c01b30f7034fe2a093fcaec0ae2883ac"],["/categories/UIKit/page/2/index.html","60e6fe48d064454d473ba775a5cccf17"],["/categories/UIKit/page/3/index.html","71d24cd2a90e89f9dcfce10749ef8c04"],["/categories/UIKit/page/4/index.html","b2b8cdd01eab80ec957c9f068de7e4c2"],["/categories/UIKit/page/5/index.html","a5eac07c347eb9543594b430ae0f0a24"],["/categories/UITableView/index.html","81658c39d4805287a5b4394747080dbc"],["/categories/Ubuntu18-04/index.html","bec4313be7103769c352c9605bdf8d0c"],["/categories/Ubuntu软件源/index.html","be0faefb7460e2f8a7cf1f0b92cf7a82"],["/categories/Uniquely-identifying-views/index.html","6cc75e7b34eb6368650d09d2440316ed"],["/categories/VIPER/index.html","295e2da63fabaf797d236fdde9bffe0b"],["/categories/Vapor-4-0/index.html","f16b7d24328a62ec201a95ad6300ca17"],["/categories/Vapor4-0/index.html","7adeea9a07db811a54d7b746cd1c6530"],["/categories/Vim/index.html","eb08484da450719bc899a951bbb676fe"],["/categories/WKWebView/index.html","5f94750d40ef3691a815008bd3853307"],["/categories/Xcode/index.html","0627e94c720a91f103549bbd7d90a10e"],["/categories/appleOS-Networking/index.html","8a665f1012587b095a9029bdc9f8472b"],["/categories/bugly/index.html","a8037eb169812dcc5716aa8400bdc9b5"],["/categories/enum/index.html","ea83261e76599e1ce1899cb3560fcb8e"],["/categories/git/index.html","a9f0f99224a1a8f928add9c878289272"],["/categories/iCloud/index.html","f7b351aabdcd3fd391e5e958ef9fa6c3"],["/categories/iOS/index.html","9895a8585f6d2fa6c3a8091be8778ae5"],["/categories/iOS/page/10/index.html","90bf86ccac6f69c56e66b4ee831068c3"],["/categories/iOS/page/11/index.html","7b97c9858708616149ed94b08370daf2"],["/categories/iOS/page/12/index.html","be2efad482265b15b3594c266be14b1d"],["/categories/iOS/page/13/index.html","e22f248cea64924601d40fc18d10bf12"],["/categories/iOS/page/14/index.html","c7059c7c78c666c2986f422329054d13"],["/categories/iOS/page/2/index.html","fcc7f23801e20d2fea983c0b965889ba"],["/categories/iOS/page/3/index.html","ba2bd7113ba0aaafbc109e442cd4bcbb"],["/categories/iOS/page/4/index.html","277f1a33412d77b5475985fd7ec691e4"],["/categories/iOS/page/5/index.html","e31b6c3c062d9e0487d34dcae162c44e"],["/categories/iOS/page/6/index.html","5efd5e1477d4f8b1d7f5f752f9f74814"],["/categories/iOS/page/7/index.html","8f3576a2e36cb5ada2f4029871c7242b"],["/categories/iOS/page/8/index.html","c07817e6187538a08094aa3b3d5a489d"],["/categories/iOS/page/9/index.html","480299b73a70d00ff91070579953000c"],["/categories/iOS面试题/index.html","88e7f00030cc88d2e9d3cace13281a07"],["/categories/index.html","f5c6962f8787b8d2a54b062c774c0dfa"],["/categories/random/index.html","9206c92aa292ddcb3703d89daba341d8"],["/categories/三方类库/index.html","23659876564fb7fada11b8e7150482da"],["/categories/函数式编程/index.html","91c08c0d58b6c512c7b51990963a0b76"],["/categories/子类化样式/index.html","10b2f41645d90aa05dc029f2e6ffd7ca"],["/categories/开发技巧/index.html","bd4f55e09b3395f6551c8315531bc5d1"],["/categories/开发记录/index.html","2e44d8f6569f39b1df4ff5e47cf95860"],["/categories/数据库/index.html","0999a8cdcf6a6f4081d2dfe4efe4f6fb"],["/categories/架构设计/index.html","dc2dc1e60ede39ef2dd28f158e15f4b4"],["/categories/测试/index.html","8c34705867616d2bc768d6c581a4ade3"],["/categories/用户体验/index.html","8b70da950ed1730dfdd0bd221af6d8c4"],["/categories/用户协议与隐私政策/index.html","134e8f1c41eab5352cd24b2776b42bfc"],["/categories/设计模式/index.html","6c3c3b22b74f6a9235037ddb44b3e24b"],["/categories/设计模式/page/2/index.html","c2506dd883b3a0a23a688d3edac935fe"],["/categories/设计模式/page/3/index.html","8e10a47ba07a4256371f2b8917c84afe"],["/css/main.css","5213b26437b9ba0e96c947eeee36a992"],["/hello-world/index.html","1f8b14774b882fe70b4352f4a5813e7e"],["/hexo部署失败/index.html","0a57abac3b7760b105d384264a9150c0"],["/iOS 15 适配/index.html","a528bedd113c125c3b1a8cdf62223bab"],["/iOS VIPER架构深入实践/index.html","a7c2cacabf1bb7be5f60255a4e56567d"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","a80e74d00777ff1615d20132a2d626e5"],["/iOS 自定义视图，输入表单和错误提示/index.html","46f72b792fa2ce06f187af1b6ab3cf85"],["/iOS如何使用iCloud文档？/index.html","f891a5fcdcb33390765f4d876a437907"],["/iOS子类化样式/index.html","b83ae0296ff4e7bac2dad357a0a2f83b"],["/iOS开发记录<一>/index.html","63073c7ac0b15bf8241b0e3fa75da53e"],["/iOS自动化布局编程/index.html","394935e5942428143cdf410e9714e4ba"],["/iOS自定义转场(By Swift)/index.html","189e712ef3ecad834befc2ec5e8a4b39"],["/iOS项目架构：使用VIPER/index.html","56742fafc021e15abfbbee6c9c60c160"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","55d072b47988b73a5fdd5449c57da0bb"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","820fc2cb2d0a64a1dce2f1884de87a23"],["/page/10/index.html","e0048f92354fba4ee7cb827ec3b350e9"],["/page/11/index.html","a1d527a0352f4df840866f81e1b82f3f"],["/page/12/index.html","9ca3b74707d3aecfdb245d22ca0b948a"],["/page/13/index.html","b0c3751f64f09a045699652cf2f770b1"],["/page/14/index.html","4e27d1f87773cbdbf683cbf3e432122f"],["/page/15/index.html","30e5bb28e06774826fee7675911eae6a"],["/page/16/index.html","5c521ef4efb8820fe39531c9d5aea386"],["/page/17/index.html","1286a29d9ccbe03f13fe4358c289e1f8"],["/page/2/index.html","7899ee16863ebeb0da229abeb096ac43"],["/page/3/index.html","19426b1d7760e7a57bad88ae9c576d6f"],["/page/4/index.html","96fd76e6aeeb4624abeb075cc85950f2"],["/page/5/index.html","9770908f2e31f0bb1fc093e5417c9a60"],["/page/6/index.html","f9adb7a15c0252e49d59cd8c1fe57581"],["/page/7/index.html","ee866f9bce2bf538a7775077d60f45e1"],["/page/8/index.html","9e9ceed76519663a4406d8bf228b64e8"],["/page/9/index.html","2e31ca302ed53e1288333c4fb8691064"],["/schedule/index.html","88e22e92ee6e588af2875cb24b9efda9"],["/storyAppPrivacy/index.html","71f834642e04b7d061ab0233959d65e4"],["/sw-register.js","3755db33f780238a377237c6af52888d"],["/tags/Advanced-Classes/index.html","a4099abe8bbb6dc934fcdedcf7a08ea5"],["/tags/Advanced-Swift/index.html","e3032d402aedff39b9e1b48f3e036e29"],["/tags/Advanced-Swift/page/2/index.html","994d701b39d15ad5402a6cccd04d7608"],["/tags/App-Architecture/index.html","96a8c0c8cd440fe4db48364b1bf2ab7f"],["/tags/Array/index.html","ba9cf3428bdfeb5d209a9ef3085c0fcd"],["/tags/Arrays-Dictionaries-Sets/index.html","cd1f8fd3f2e782cdde1eba49c62eadef"],["/tags/Authentication/index.html","d5e73cbdfb07708f702a947f77b9c760"],["/tags/Build-in-Collections/index.html","48a5c6f97de4906fabd394401f738c73"],["/tags/Building-Your-Own-Types/index.html","ef5da055b34b7a1b1801055ee5c06255"],["/tags/CMS/index.html","d5e556ca7a88503ab691a91757f3b11f"],["/tags/Classes/index.html","140d13fd129be54d8e37f8d612e2a632"],["/tags/Codable-protocol/index.html","f8871aa0733650b5146e64ec813e3235"],["/tags/Collection-Iteration-with-Closures/index.html","e6a59f227a90201e266f88e389cb8722"],["/tags/Collection-Protocols/index.html","d530130d9a10f103a7b8c555d09898b7"],["/tags/Collection-Types/index.html","e767732324baad173c781929b87007ea"],["/tags/Collection/index.html","e4bafed256688e25bb6668a350638be4"],["/tags/Collections/index.html","d07c73c5060ba262a74ea902f33444bf"],["/tags/Combine-framework/index.html","f9e40defa828be0ca4448e1dd47e1a38"],["/tags/Combine/index.html","77c4088e326318ac0cc3945c13b0df94"],["/tags/Dependency-Injection/index.html","888850fd4d56d17ae7e819133109a398"],["/tags/Encoding-Decoding-Types/index.html","84fdee01ee9e2d510efa53460af000dd"],["/tags/Encoding-and-Decoding/index.html","e6a298d87b11a469aaba8fafedb1f3c1"],["/tags/Enumerations/index.html","e96ebd531f10ed141aa7fc474cc31e69"],["/tags/Enums/index.html","ecaf363cd700061bd22bc153aea0bdcf"],["/tags/Error-Handling/index.html","096fb7d258b7b34865d06db73525e38d"],["/tags/Functions/index.html","4e49afe8c940e96f34bf27ee397de70e"],["/tags/GO/index.html","aa6ab8852df38ac8c5a8e4e4041060d8"],["/tags/GRDB/index.html","d2662ba913e80e2a737ba278ee093166"],["/tags/Generics/index.html","b7ac77823dd87488e637be1e4ccbac3f"],["/tags/Grand-Central-Dispatch/index.html","1106880742568a9ef3624f0fa1e4608d"],["/tags/Hello-Vapor/index.html","936cb08827f6f26e65b048bee5cc5089"],["/tags/Homebrew/index.html","ca83e4a7c23ae60f9ecac69be47915e5"],["/tags/Interoperability/index.html","629baed2abf4e2f0d22e8dee7358e7c0"],["/tags/Introduction/index.html","802fed5a47dffc7619d9b0d4559ebae0"],["/tags/Leaf/index.html","1fdc50dcf2103d26a7ad80ca33497d99"],["/tags/Linux/index.html","577b8a5159ecfec15ab325a94ecc9f3c"],["/tags/Methods/index.html","a690dc7b1f893b39c03de18250582cee"],["/tags/Modules-And-Hooks/index.html","71255ac8b9cee53047d543cc0d828a93"],["/tags/MySQL/index.html","81023aef4484f8369a5cb17e07813da6"],["/tags/Optionals/index.html","7b0ac6df695abfeaaa08f1ac82e839d6"],["/tags/Promises/index.html","dd2d210732cfc3b6184759125e14b24d"],["/tags/Properties/index.html","0a3453549607973fc310d91c6e1f9b9a"],["/tags/Protobuf/index.html","5466a6533920126f05f952b9ed9c6acc"],["/tags/Protocols/index.html","8703f0d74bada63d217db2e7371b0d57"],["/tags/Result-Type/index.html","d76c343265c79f6c264ded24e7421d99"],["/tags/RxSwift/index.html","7ec71003ea807cae9baf16d8dd95fddb"],["/tags/Server/index.html","75296bb945e4a150633cc888ee6b6658"],["/tags/Session/index.html","4597ad489a96e18403870683ac058266"],["/tags/Sqlite/index.html","238f1830e4c0bce1169c0f14f877b8f4"],["/tags/Strings/index.html","c90ca86cb5f2a0a18fb6da7093c07516"],["/tags/Structs-and-Classes/index.html","6e188a1fdf76ba0f97fc41a140b13076"],["/tags/Structures/index.html","7d96e683531fc707d16c62ebab35b5fe"],["/tags/Swift-5-0/index.html","8abdca0f6333da735501c8a2e472ddd7"],["/tags/Swift-5-0/page/2/index.html","b5668a68d0e19faa65f752768f1d2a2f"],["/tags/Swift-5-0/page/3/index.html","5a8eb14226d3b90bd75b8ec1a0df1db3"],["/tags/Swift-5-0/page/4/index.html","206a49539c036cb07d70410b22b14563"],["/tags/Swift-5-0/page/5/index.html","6d637619dc551f74fc71438eca0d6458"],["/tags/Swift-Apprentice/index.html","2ec799601de98bdccd9b39b9857fbf53"],["/tags/Swift-Apprentice/page/2/index.html","a7e69143b4d8331de2ca8b8e90d65be8"],["/tags/Swift-Apprentice/page/3/index.html","806ca8bd50547a5d5b51262091f00516"],["/tags/Swift-Package-Manager/index.html","f7b3442d453f90ba87097a979fbd1e5f"],["/tags/Swift-源码阅读/index.html","401ece6607a97d52e258484a98954cc5"],["/tags/Swift/index.html","4c2801b4137c78a3b890a9ac05a8c0d3"],["/tags/Swift/page/10/index.html","b6a332416666c5b2913b9b9d4850ac7e"],["/tags/Swift/page/11/index.html","102074312b0a811df0558781684779db"],["/tags/Swift/page/12/index.html","5ed977dbb5cc42ed1dd058b358ea8799"],["/tags/Swift/page/13/index.html","33f3711c5088870090a590767e314d2c"],["/tags/Swift/page/14/index.html","0454cda96be7c503d8c981b2b1c4d0dd"],["/tags/Swift/page/2/index.html","60bd9fe11fcdec3d3e602eb13a3455f0"],["/tags/Swift/page/3/index.html","9638ada0c2c456ba85bd23cda31956ff"],["/tags/Swift/page/4/index.html","4adc941bb4077c5a9b5d2f46eaa4589a"],["/tags/Swift/page/5/index.html","60024cce5dbda945439d96aa8d8c6414"],["/tags/Swift/page/6/index.html","09decc3a69c56aa1b280a4e853cdb249"],["/tags/Swift/page/7/index.html","0ab50c297435533f023a98640eefee1c"],["/tags/Swift/page/8/index.html","8aacc6c915187c3c1518e917f2765349"],["/tags/Swift/page/9/index.html","0ce9238552d23f2fcff137d34b889519"],["/tags/SwiftLint/index.html","8609e6067abd3e38f7faade29ae4c239"],["/tags/SwiftUI/index.html","fd373e9dcf0261b83df2523959dde74d"],["/tags/UICollectionView/index.html","704aa2896f7d9f3fb150a0ad5e3c1b79"],["/tags/UIColor/index.html","3ff18b3985bc40f1d983d2713d4ed030"],["/tags/UIImagePickerController/index.html","51dccc6bac07c8ed8ad5700d35b8ab3e"],["/tags/UIKit/index.html","75f5c755e8a123fdd55793d2a4031047"],["/tags/UIKit/page/2/index.html","7d1b047ce26373fb28c562a69486d8f9"],["/tags/UIKit/page/3/index.html","6833b52b9febdadfa70524363cf09e12"],["/tags/UIKit/page/4/index.html","52e9ae6329ae4f4865ad73ceed4c31a7"],["/tags/UIKit/page/5/index.html","57adbad3e9611f8989264d5fbfe883cc"],["/tags/UITableView/index.html","005af854f887bc3cb643473be7dd7cb7"],["/tags/Ubuntu/index.html","eed91413419a1a66daff76cefc7bbf4d"],["/tags/Uniquely-identifying-views/index.html","c6dd5d3ffaac9cb71af581d2e53b1542"],["/tags/VIPER/index.html","f93aefdaf9f5eee794a4d97d18b4e5e7"],["/tags/VMware/index.html","691ee9b2e43110c7dd161a170e4714b0"],["/tags/Vapor-4-0/index.html","9eb9d1e0fb6014c67af55b822a562aa9"],["/tags/Vapor-初探/index.html","f1a9271c5e377d729261f63235d597bf"],["/tags/Vim/index.html","c165ce11198495cd9bdc85a82523bc4d"],["/tags/WKWebView/index.html","0ef2db874db9765f23442b65c6460363"],["/tags/Xcode/index.html","b88106e2ad3444c222ade894f69bcbc3"],["/tags/appleOS-Networking/index.html","8f8aacb8f20c0c3f285238bc3d56e162"],["/tags/bugly/index.html","dc497729916ed63300936a75a8c99ed8"],["/tags/enum/index.html","06933b1b620c97af8bd122a6f1b93177"],["/tags/git/index.html","2556d7fa91a457bf17fa84a28069bd52"],["/tags/hexo/index.html","2fb7f249365d3f0e5cd80e346f99781b"],["/tags/iCloud/index.html","ac4253f3da6cb914ae673bbb1cfe873c"],["/tags/iOS/index.html","efa65d7288ceb07edea2edc5482a3ade"],["/tags/iOS/page/10/index.html","0adbb56b3176fd92285f3f7d0d8f8427"],["/tags/iOS/page/11/index.html","111d99d8a8b17d0a15518b74e67f56e2"],["/tags/iOS/page/12/index.html","efc6e1b919c3d21bb82770647e45d620"],["/tags/iOS/page/13/index.html","50004fb08e83dcd65ccdc382b430616b"],["/tags/iOS/page/14/index.html","4488bfb1380cf6b94c76b5a8efbe9ce8"],["/tags/iOS/page/2/index.html","1875b5cfa8aa46bdb30d5f8a6fcba798"],["/tags/iOS/page/3/index.html","9b40f128af46137ed28c53da7d9a5a49"],["/tags/iOS/page/4/index.html","3ebed6babf5c07a0b48022b3e5c5b8da"],["/tags/iOS/page/5/index.html","c77c3606bec11b24d9e310393e1ec610"],["/tags/iOS/page/6/index.html","acfb70dd1d040514d73ad5e326537879"],["/tags/iOS/page/7/index.html","70aa35d317776878dde1b17e43aac483"],["/tags/iOS/page/8/index.html","61c3222ea9bf3571bf12d09aed8d61c2"],["/tags/iOS/page/9/index.html","613ed1b762201295392b53c83f69a5f1"],["/tags/iOS面试题/index.html","a2d530e27d182e86dcb19b7e7ebe410e"],["/tags/index.html","b1565fbd0d08e43ca9e96a070bb8b7a4"],["/tags/non-optional/index.html","ea8b0c5004a0c82f9cb690fbd8ea05a4"],["/tags/random/index.html","5fed97949f33cc16b964f7c492aa2288"],["/tags/transition/index.html","e2282d0e8c39a133d8032d4fbc583abd"],["/tags/三方类库/index.html","ad0369e6f8ea73bf565436524b2b402b"],["/tags/依赖注入设计模式/index.html","6e764f14c81ec8e626c9c307c3d385a0"],["/tags/值类型和值语义/index.html","512d416a466a1618914a7be1fbaae9d5"],["/tags/内存管理/index.html","2c46b78005bc2c5c19f71b00f569061c"],["/tags/冒烟测试与回归测试/index.html","11ad1b670c21823080fb4f2bd19f0c17"],["/tags/函数式编程/index.html","c93b37124489193a6e0f887cefe301e6"],["/tags/创建博客数据库/index.html","860e2f966195b7f6f0ecc676098afd6d"],["/tags/初始化模式/index.html","a76421297cc50977221e94d18a355b5f"],["/tags/单例模式/index.html","3174131081e18425976c6c3e9778c1e4"],["/tags/原型设计模式/index.html","b0f338e8612cc3d8498e08fa1a260093"],["/tags/命令设计模式/index.html","1dbccfc6934fc6e1c8a7a9493515a92a"],["/tags/基本控制流/index.html","b77d0f714e684350b845389f57418587"],["/tags/外观设计模式/index.html","103afa894abab78040c5c2aaa75397e1"],["/tags/委托设计模式/index.html","eaf47d92100b8fdf49fb6a3ba8579f65"],["/tags/子类化样式/index.html","f61c5de2acb05f2319870b2996ab0ce8"],["/tags/对象池设计模式/index.html","9f02c53ed595f23d0e0d96a6c61b3366"],["/tags/工厂方法设计模式/index.html","8b2758048f98963b887590a99c0d21ad"],["/tags/工厂模式/index.html","234c3a11f0fe9dec4672f35ee04dc321"],["/tags/工厂设计模式/index.html","bf9e5661e5c94beda160b83889734a98"],["/tags/开发技巧/index.html","32dc2433d367b7ba6f69b2a67f05874e"],["/tags/开发记录/index.html","c5bbd9161ba13b9169708feddf81934d"],["/tags/懒加载模式/index.html","a1c0b7cf1ed4076758162cbad35c2ae8"],["/tags/抽象工厂设计模式/index.html","407194d12337164918db4ffdc84e4abb"],["/tags/数据库/index.html","5e9c2ed761c24319eec1c35fbdbc9e78"],["/tags/构造函数/index.html","2cfd98f702e705085c681c3e90374fc8"],["/tags/架构设计/index.html","1b770d3713e05a7406f81f2dc68f5ea6"],["/tags/模式匹配/index.html","ef8016e771a56e705536fc67fb0c5c0b"],["/tags/生成器模式/index.html","25d6eb44adf44f49289877a86767e64f"],["/tags/用户体验/index.html","be425338ebcef1cafc472ee9e3d2a8c1"],["/tags/用户协议与隐私政策/index.html","9e2f027fcbfb077a35bdf504acdb8ac8"],["/tags/类型与操作/index.html","e59202d5156d862a0cb6657c3cb3c20c"],["/tags/自动化布局/index.html","10baae18290374f397f0f59068afe853"],["/tags/自定义UIView/index.html","7ad22bfa4bc0472ba8f927d161bb1918"],["/tags/自定义转场/index.html","b1af1f50e3004b61b58c5b256ffe91a6"],["/tags/自适应布局/index.html","e6d768e7ba7a98fce67ecfd0f104b7a5"],["/tags/表达式、变量和常量/index.html","4f968ff93745b7fe95baf4bffcbac3d2"],["/tags/设计模式/index.html","a931ac4a9560fc47ad8d6b1f30a9d377"],["/tags/设计模式/page/2/index.html","b8fa3a815e9bdc15047749f5b83b015b"],["/tags/设计模式/page/3/index.html","b87dee37284d0a0adc912bddf775fc8a"],["/tags/访问控制和代码组织/index.html","a9cbcb408cd649d66143dc5d4e0e7c0c"],["/tags/运算符，下标和键路径/index.html","ceec0017814ad7c2cc2bebe8c440e790"],["/tags/迭代器设计模式/index.html","563a0e6a044458b45c19ce643247f52d"],["/tags/适配器设计模式/index.html","a4f8f9f7fbc7acd5eeadd4c54c679796"],["/tags/错误处理/index.html","2e01cbd06db1a6588da870f7e867a7b2"],["/tags/静态工厂方法/index.html","4dfabd189671ad4408a5e0bc220a984f"],["/tags/面向协议编程-OOP/index.html","c41c2ca1853b04f80b60fa3ee9a7ab59"],["/tags/高级主题/index.html","7e2212c7fe706c85fa153d52ce465f5b"],["/tags/高级协议和泛型/index.html","347b58c4a6fb11b235da746bca338d4c"],["/tags/高级控制流/index.html","88a72c4e761678485f82e33982291dd4"],["/xcode 常用的快捷键/index.html","c58584f5a12e6653e5794c5f469c1ae9"],["/为iOS应用构建输入表单/index.html","05b5fe01dc090fa6a9b22a880aada2b1"],["/产品开发的幕后花絮/index.html","2680553b521248809ece08ff82eb6e81"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f5aa4b7678d292aa94b034209b32f2d6"],["/冒烟测试与回归测试/index.html","01a7a4ee17c37c9826fe35748a76cc88"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b7c1d31c83390e406039348bb9349f6c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2252978d0f4b1e08a8f90358088bcaae"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1358b71ff3428e75c9dbe70fe3494514"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","aa930299e3c5ef89063243767fc6ae99"],["/在Swift中创建自定义集合/index.html","8322bb445b916c2f332bc693811bf948"],["/在Swift中处理非可选选项/index.html","0386dec07108e62565835df31d6047d9"],["/在Swift中生成随机数/index.html","905b719644c15739ef7e5ab6e876f7d9"],["/在Swift中重构单例模式用法/index.html","ab61a6b0e9a821c89fd09d0c3b3fa313"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","41d438b6ba4877d72bda8c5efbcdea50"],["/如何为VIPER编写服务？/index.html","8903e47c9a0e502b60744177b59cff4b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","77020c8fa269c06883c6d40634cfeb2c"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b388804895325611b3633c3c17561035"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","db4c6819d4384e359aa298a99fe5c6da"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ebbfb3ebf7884fc28cb705c0edb92b76"],["/掌握VIPER架构/index.html","1856c7a80e59d3cf4cf39648a2633997"],["/揭秘 WordPress Hook 系统/index.html","77d32ad117bf15534519c481e49a615f"],["/比较工厂设计模式/index.html","79fbe6db7e950849cd01b4bd76ee4e03"],["/深入了解Swift中的Grand Central Dispatch/index.html","016a91bebfad2a167f0df1a796e7fe89"],["/深入研究Swift框架/index.html","7cd9d9ed24eb81b000be39c9db418889"],["/适用于iOS开发人员的VIPER最佳实践/index.html","224eb96313ac18afe837b5f25d6a1130"],["/选择Swift而不是Objective-C的5个理由/index.html","53dff5fa836b6ca3208f80667babf1e3"]];
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
