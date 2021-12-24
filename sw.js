/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","e853c704c74641dddc5a2a5730325eb2"],["/2020年iOS面试题总结(三)/index.html","cc185e3089be38fe937b7b1775e92a82"],["/2020年iOS面试题总结(二)/index.html","00dba8971e64ed4491e0044d23b54ac6"],["/Advanced Swift系列(一): Swift 简介/index.html","47aa4e4e588da84d3a89b2613108187e"],["/Advanced Swift系列(七): Strings/index.html","3aa9c0bdd5d354801c21d3a8dab5b78b"],["/Advanced Swift系列(三):  Optionals/index.html","72c501b0270933395eeaf462313d05f8"],["/Advanced Swift系列(九): Protocols/index.html","a1669a2b7b721e6f97c7b2272ec5aa43"],["/Advanced Swift系列(二): Build-in Collections/index.html","400bc972b3c77a885252f33f24577516"],["/Advanced Swift系列(五): Structs and Classes/index.html","a5f0df2d678977dea185171187217724"],["/Advanced Swift系列(八): Generics/index.html","c99bbf92ca4add63c974ec9cf10683b0"],["/Advanced Swift系列(六):  Enums/index.html","1a2e770e778e5d34dac49d9bf63e8ec4"],["/Advanced Swift系列(十): Collection Protocols/index.html","b63cb47ff2b46e85ce2a811fb48c2c22"],["/Advanced Swift系列(十一): Error Handling/index.html","498401538349723d1796637a950ee376"],["/Advanced Swift系列(十三): Interoperability/index.html","2c7cd24b23d444d6e16d69c07a3875e5"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","30abbd802d9a9d6e9960535bf4345683"],["/Advanced Swift系列(四):  Functions/index.html","f225757fd0efb27f6cf29b2c16358b3e"],["/App Architecture系列(一):  简介/index.html","ad9b55b6834db1e9fd97b5d9e0e60f87"],["/CocoaPods 设定版本说明/index.html","95a284db94da6adaaee27b5d00d1ea65"],["/Functional Swift 初探/index.html","a8eafb85d0f8c0da98c879ea73adfaf2"],["/Git 使用小技巧/index.html","08db8e8b1937781665d5bc46956e4fd8"],["/Go Protobuf 初探/index.html","24b15dd80920e770d7301388edcb572a"],["/Go mysql Tips/index.html","7cb3f209b9a802339ddbd02644c9f145"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","b9acffc02e4c2d19ae7555a69864f4fd"],["/Go 入门篇：2、Go 实效编程/index.html","01a9552c98e93d8ad949c106a0856698"],["/Go 基本语法初探(一)/index.html","c597a23e6b2d4c70a8fb14705c841d6f"],["/Linux VIM 命令及操作小结/index.html","8c5f8a2ac1f26376a2c78b237fce7b21"],["/MySQL 基本操作/index.html","d2929d99738ea79abe08b16ca3cfbe2a"],["/MySQL-列类型和数据完整性/index.html","6f2ed5bf644dd78f4efac085a84aa3e1"],["/MySQL-数据库设计和查询语句/index.html","e303bcb75f89feffbfbd29ef537c403d"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","51b917b42cb7ab438bd335f0a74547eb"],["/NSCODER和SWIFT初始化/index.html","1bbc163076f6b6ba347b321f174cad65"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","2692c080bdc3f54ddb8a3dcab4bdf33f"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","77f6eab00f54b7e84163fabd6a878b2c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","99c390582cff58e26c0a12bc192418bc"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","39ac6029721e1a26ae896c6f119cad19"],["/Sqlite 使用Tips/index.html","bc8b061ba252c7a3f0d49b473a7fda59"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","58aaafd596a089796d0a2baa50648e40"],["/Swift 5使用UIImagePickerController拾取图像/index.html","ffc848ca21cd93fa8b29ed11aed738ac"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","727449d78a61a033515985d360d5eca1"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","b9de5546697edff59e34c0c0c9c8dc4d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","047495a800efedf67c24dd44cf042d23"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","2afa7141a6417e9da0c4724f1f31c336"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","473291adf694a4f4e93d6f42e8dc854b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","83d14d4c3bb8f20539fc3fed58d1211e"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","129a3b91600f043bba1f168c9f45deab"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d2baa99f20924c18b97377754ab253eb"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","44f44a44f2d9e91f0b3f0c802ca27f67"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d9775e4ca88f0f09b5bb565b1bf8d75e"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a2b7750944363091f1b8052e8ca7a4c5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","94ee208c3af9a22ab9f9a7349f5d618a"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","4a0c6f7e6170a745e18accb79a714e9f"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","f0254803db0f1b958e89013831af37f9"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","bb45912be7f4515a8243e5b7ac25d2f0"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","a1cc1e1c417a298c5276363961087a97"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","0c0088057c3d0f3e8c2b414face5c505"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e6f517b59df3fd98541ee67f46c2a5f7"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","121b366645ab34656bfd36ec086eb09f"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","e4bdc0bc8d0001a93a02bdad521fc3ae"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","db1ac96ef866e60a6d4f168bed3119d4"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","731d38429ae4e75be160427cca9b9525"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e216b3b23d2ea8ef17b79a5d4d3721df"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","4db20d192342f44988dee8d9a8e9a597"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","be22547a802b623cfb71f4464141ba9a"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","b19e84a150215101ddc4ab71a878dcbf"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","372b421fab3530fb8b763b4b985b9ced"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","87ef4041715daf934ffa6442b69cd8b2"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","7614be5c2a5119817cb5d3a6a78fad16"],["/Swift CompactMap vs flatMap：差异说明/index.html","f1e3ce4bc0c39d1123503ae7aa5f6535"],["/Swift Grand Central Dispatch 深入实践/index.html","ac843537b71eb65edf8ccd65bfef7938"],["/Swift Lazy属性初始化/index.html","10cf9e4bd29190cea90653a7d52ea99b"],["/Swift Promises 初体验/index.html","15d7a7f9e59c82203b74cd882ab0f5a9"],["/Swift Promises 探究/index.html","dbc612a9e2240df6578f2f1cc4d8a75b"],["/Swift UICollectionView使用指南/index.html","63843e0db7852fc82ddf361897856162"],["/Swift URLSession && Combine framework/index.html","1588b18fbecacda38c0c4adf3a9ee793"],["/Swift tips/index.html","04d0f4e4a5e67a21ff5d517482a7d9ff"],["/Swift 三方库：GRDB 使用指北/index.html","3a58d9e8780836715e1bb68fd3ec619d"],["/Swift 唯一识别的视图/index.html","84b7b713f2ab55f9745bdb61d622635f"],["/Swift 如何学习现代UIKit？/index.html","df2a70e492262519ee0c4cf244478ea3"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","eef9b6578d90bff35f897c4036818cc7"],["/Swift 用 compactMap 替换 flatMap/index.html","103793b30d698937cab117f97f5af1c2"],["/Swift 选择和播放视频/index.html","4742c0ed0afa9abb04e15b6de10d2b0c"],["/SwiftUI 系列(一)：1、 简介/index.html","97231045d6b4195039a2bd13935ed6eb"],["/Swift中UIColor最佳实践/index.html","5e139e7411d9a0221ac0f10f69d5104a"],["/Swift中快速简单的工厂设计模式/index.html","fa1debcd274c29c2816f8ce9ed34dbde"],["/Swift中构造函数与静态工厂方法的比较/index.html","be9fb9d366364acb0cd77e32d5761484"],["/Swift中的UITableView教程/index.html","4a277225bbbfdcd315c4349de4b54425"],["/Swift中的懒加载模式/index.html","3f31b31ddfc34396ad7f9c575be1c65b"],["/Swift中的模块和挂钩/index.html","e14a72dc0f4f570c327f9ed7dd415804"],["/Swift使用布局锚点添加约束/index.html","8528ed54afd4dda44430c7ff44c876be"],["/Swift依赖注入设计模式/index.html","2f21e7c147c3dc9c81cd9b6177543566"],["/Swift关于Dependency Injection (DI)/index.html","d867f77f08c0b8a609b75fe8c03ef303"],["/Swift初始化模式/index.html","06506e120b0452cae14754f516ad217b"],["/Swift单例模式/index.html","4c39c102cc38114d41b5fbe232504556"],["/Swift原型设计模式/index.html","3da6db48f1eafff031f705bbae1464cb"],["/Swift命令设计模式/index.html","bceab9a908edb51f271c97515ca0b679"],["/Swift外观设计模式/index.html","2bca8b07e7587327247e43f0ef51af8b"],["/Swift委托设计模式/index.html","0e60ee8bc24df6e24f18f6d25b468fd2"],["/Swift对象池设计模式/index.html","c4ec3fb328944ed78955479c6a5000d6"],["/Swift工厂方法设计模式/index.html","9ace2c46524cbc24fb50d1fc2a02c18b"],["/Swift带闭包的懒惰初始化/index.html","af2c25d3d5b5b0efc0c0dd024e7cdfb9"],["/Swift抽象工厂设计模式/index.html","7027b57b0607d326b0e88720f2cf004e"],["/Swift掌握iOS自动布局锚点/index.html","a151032c5cb9b38d159e5bbf8e8dadfb"],["/Swift支持旋转的自适应单元格/index.html","43a6dddfc6fb7de5b58a3c39424fe692"],["/Swift枚举值/index.html","de5060217c1fae91341b523e494fd143"],["/Swift生成器模式/index.html","99654946b273b7298a5b2ae581b8ea42"],["/Swift结合Xib文件自定义UIView/index.html","80678d0cc4f6fe89c08cc51f04292074"],["/Swift编写的20个iOS库(一)/index.html","68c2cdea7114760804a64b19e12b7083"],["/Swift迭代器设计模式/index.html","0ceb8d37b5ce92bd6ea54e8426144a27"],["/Swift适配器设计模式/index.html","20d9b512adf2e47b867b3186d2c77316"],["/Swift静态工厂设计模式/index.html","95366e2fb5177777df7f833997d88f9f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f26512c5126b0b28ce33b6e9904ec2dd"],["/UICollectionView data source and delegates/index.html","d6fd8b1792cf7a128142fe431fbce7b8"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","9f50b41585e9f44b45c55211063cd977"],["/UIKit初始化模式/index.html","ed2df8850a0f072a2b5638229d1d4b10"],["/Ubuntu18.04替换国内源/index.html","842a26baea1649f9f4b6b9dcbd6d3169"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","8a966175c80fc59880000bdf4baca311"],["/Vapor系列 (一) :  Vapor 初探/index.html","371b8bb4474a8d1a43a81e3c83d8f830"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f29b044ddee9e5a90f0077fe4ea916a3"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e32ec2d82b9b58929d65b73bfb7bf23d"],["/Vapor系列 (五) :  使用session进行authentication/index.html","6fda009a5efd51c378d6691cceb1a1d8"],["/Vapor系列 (四) :  创建博客数据库/index.html","c2ccf03c1e1654335f5be6b9955b84f0"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3df4d51805ef33755ff43bb5a1ab6f49"],["/WKWebView与Native交互注意事项/index.html","bc08ce40cdc37409a6582f284922d5d5"],["/Xcode扩展/index.html","288364fbfbdf979a7d14972e11fd7a29"],["/about/index.html","30db77833adeb8359cbae220e6c66e65"],["/appleOS的Networking示例/index.html","f0de40d4c8b7c17bca866e5728a1b364"],["/archives/2020/03/index.html","8f25ded54c5cb82757c7b0e03f7b70d0"],["/archives/2020/04/index.html","d680c385c172d57c7c121ab21b2735d4"],["/archives/2020/04/page/2/index.html","2064e945c5977241735dbb7f1f554ec4"],["/archives/2020/04/page/3/index.html","2ccbaaab535a61f693799d4786ef6816"],["/archives/2020/04/page/4/index.html","5c4d160e66c231ce9bf52a87d1fa9a35"],["/archives/2020/04/page/5/index.html","9a01280e7bc08643291331282c95c939"],["/archives/2020/04/page/6/index.html","25fec7d12c73b0a9a55fb11be953812e"],["/archives/2020/04/page/7/index.html","3b2d1b8c1ed2137b723fb8a78009d29e"],["/archives/2020/04/page/8/index.html","b7c4c751247a67525b8f6a84740fc8ea"],["/archives/2020/05/index.html","57b62b50a429d0e351b5699ba53c9d8f"],["/archives/2020/05/page/2/index.html","d7600674cf910a6fd06ab81c1c93681e"],["/archives/2020/05/page/3/index.html","356724ab3b2f2ac451be7dc202df1cf1"],["/archives/2020/05/page/4/index.html","4cceb5b51d81de4ee2976c16c5d93353"],["/archives/2020/05/page/5/index.html","c7c3e8751d525071e493f17b186e750e"],["/archives/2020/06/index.html","da3ec175233e558ed0058618529b1683"],["/archives/2020/06/page/2/index.html","e13b2ff251f280a42d3de7bd6a582d36"],["/archives/2020/08/index.html","c5379336d9c9018d3f7eddcffd0e70ff"],["/archives/2020/09/index.html","7af47addefeef74c857935433a9e2a10"],["/archives/2020/10/index.html","06239cbf96401aa97b2944992dddc400"],["/archives/2020/11/index.html","de63db874622074fe070136e49365641"],["/archives/2020/12/index.html","543f201678dbb45750afed9746d7016c"],["/archives/2020/index.html","1b589ba9f2cf174e435431afd7fbe7bb"],["/archives/2020/page/10/index.html","3df982fc035880821e70413abb555c8e"],["/archives/2020/page/11/index.html","8635e22e066fbace4e8f59ab02bb88bf"],["/archives/2020/page/12/index.html","68942e73ca8e6e95029c9a6302ee18af"],["/archives/2020/page/13/index.html","8b9360fab50235b28f32fd4a3c7a43eb"],["/archives/2020/page/14/index.html","e1eab5f00284845b78568b88efc022eb"],["/archives/2020/page/15/index.html","6bac975f9d14a843f70386f8659edcf6"],["/archives/2020/page/2/index.html","326450a5735db8e85833664b29648f66"],["/archives/2020/page/3/index.html","b4013a5304d5f4971654c753a4e8e130"],["/archives/2020/page/4/index.html","8ba9311afd7794226739b2ccb5bc055e"],["/archives/2020/page/5/index.html","b6555fcd52b9564cdec2d2879594abb8"],["/archives/2020/page/6/index.html","ccfb8bef4f201516c4a2ec33eb3ef1ae"],["/archives/2020/page/7/index.html","cf47d0ad20ec4bdac5cca21633cb7182"],["/archives/2020/page/8/index.html","c704ae9f0f25361ec09ab7e58c44c314"],["/archives/2020/page/9/index.html","d503d9f11fe930e6b9a195f6749e3064"],["/archives/2021/03/index.html","879b235ebe5cc02b7d213e53bfa08407"],["/archives/2021/04/index.html","d7551fa477ef7de37cd3cbf60d780823"],["/archives/2021/05/index.html","c3b7694e488bedaa2c2a585dbd7d3b7e"],["/archives/2021/06/index.html","43a75a48d0c63b3bd6e0f4afb83db6a5"],["/archives/2021/07/index.html","6f76aa48cdf4eac0ce60dedabcd4be85"],["/archives/2021/08/index.html","3afe6edc8aa0e0a667bef83af523175f"],["/archives/2021/09/index.html","4da38c398e63c2d8110debc10e275e1f"],["/archives/2021/11/index.html","0acb3057b097eec90351d9968cacf264"],["/archives/2021/12/index.html","6b210889665fe123c4d5b524611ed429"],["/archives/2021/index.html","694f25157fb90cac1b315f3724f5e9d8"],["/archives/2021/page/2/index.html","24d7cb7df84c06dca22773750d451dd2"],["/archives/2021/page/3/index.html","21da03e3b7ed782d9589c13155e009eb"],["/archives/index.html","cdf496830d3904169a771ded83c52a2d"],["/archives/page/10/index.html","ab1ac3be51cc0d4a47a428dbaff63b20"],["/archives/page/11/index.html","f33e1a3b7c3e54dd97434e8de0928add"],["/archives/page/12/index.html","d333d6094efdc5bf2f7600eaf3a8162a"],["/archives/page/13/index.html","59c6fe3ef259c73ea0a242692fd9d196"],["/archives/page/14/index.html","4e81c3b60cd782de8eb89bab362e1075"],["/archives/page/15/index.html","9478d8b0a8e44db2802c036c96149fc5"],["/archives/page/16/index.html","6d0f26b3a63850e538b12d844a766ede"],["/archives/page/17/index.html","af4c950b6325effcf45602f8f9af177e"],["/archives/page/2/index.html","58663dbb01823d4b04343647cfb31c8c"],["/archives/page/3/index.html","3da976c2d18315056bada71eadda0440"],["/archives/page/4/index.html","f7e08730f5320bfcbf263cef7b570ecc"],["/archives/page/5/index.html","38c735a14dc3e30f91d0bfda08e422e4"],["/archives/page/6/index.html","0466f6960e7cba1fa4befd5820739da0"],["/archives/page/7/index.html","b24ba964b07e140f5d8739d021666e74"],["/archives/page/8/index.html","5e72ae920fb45ad455a08aa96937ba4a"],["/archives/page/9/index.html","d8470a02fcf887479caa7b735396a90e"],["/bugly 上传dYSM文件小记/index.html","b6ca6bc00029df343ed7b3514de1e364"],["/categories/Advanced-Swift/index.html","446a00a9b703e26e5faaffd17c03bbf6"],["/categories/Advanced-Swift/page/2/index.html","dca7918cc00fb4b47ec80ccbb6521b44"],["/categories/App-Architecture/index.html","c524ed33ed3351c914615ff038f0880d"],["/categories/Array/index.html","d077d50bb780a58b8030d92942b9cc84"],["/categories/CocoaPods/index.html","51bcaedfacfb0cdcfe9812df6153149f"],["/categories/Codable-protocol/index.html","b3c6d4007f7f56e15778b5a530bd3a0d"],["/categories/Combine-framework/index.html","21ab7348be160659f5387c327a6d1302"],["/categories/Combine/index.html","8198a7517f10d9fc5dd062b8f5e71765"],["/categories/GRDB/index.html","2c424971d52a802104a38c30756ca810"],["/categories/Go-入门篇/index.html","5ce4372317e12dbbe02d6b193399ba2e"],["/categories/Go/index.html","c6e205b3e274d34e227547cebdc7cd7f"],["/categories/Grand-Central-Dispatch/index.html","791d92b8c1b2c9657d85b86a47ba73e4"],["/categories/Homebrew/index.html","ab76874c2e2fef6203abee6d0dcac496"],["/categories/Linux/index.html","0c8500cc7ce0eb922805d95cb635e11c"],["/categories/MySQL/index.html","b0ebaadee05649e96c5bb98eba810301"],["/categories/Promises/index.html","7aabd0ec1804d710b2567d497713fdc0"],["/categories/Protobuf/index.html","ab36b8f24bb157224075cecb1e6765fa"],["/categories/Result-Type/index.html","f964db4dc6af03550dfa11894defff48"],["/categories/RxSwift/index.html","a1f688da9849c54fafc80b26ca02a9d5"],["/categories/Server/index.html","f49182ad0aff030091366ca760f3dd70"],["/categories/Sqlite/index.html","04ac99ce2f50dbe1c8842ddb8baf575a"],["/categories/Swift-Apprentice/index.html","83690fdad9f588a044f7b33bb41663dc"],["/categories/Swift-Apprentice/page/2/index.html","6e0bc116071f82146188574a5b72e0bb"],["/categories/Swift-Apprentice/page/3/index.html","a0623c53a735b66c70454f35c8487dce"],["/categories/Swift-源码阅读/index.html","c542f6332aa9eb2eecd983b6095c2471"],["/categories/Swift/index.html","08198e550e56ee11aef6bcb25d186545"],["/categories/Swift/page/10/index.html","076774c60721596598489e05d3cacdbc"],["/categories/Swift/page/11/index.html","6c5a268b9b7b7b7af018c0065a9655ea"],["/categories/Swift/page/12/index.html","18e90b7e37f4455d03631adba6469ecc"],["/categories/Swift/page/13/index.html","2b03344815f5e66e7ae1950595da14ae"],["/categories/Swift/page/14/index.html","873d3661bbcde1474f36c7f64f45ae89"],["/categories/Swift/page/2/index.html","9b459153c3074fbee2be69c556387f11"],["/categories/Swift/page/3/index.html","f9a12198e21896997538c1360b9a1597"],["/categories/Swift/page/4/index.html","999ea4fe808dd8c38b734907deac184d"],["/categories/Swift/page/5/index.html","ffe40672383e60a23df86750b8ab7eb8"],["/categories/Swift/page/6/index.html","2be5f7b924dcdd72cbf0a15e22f943e3"],["/categories/Swift/page/7/index.html","f9901a7aff5ca07787f78344e8f45cb0"],["/categories/Swift/page/8/index.html","e2e987b94e31bbeb7d8a47b63a53088b"],["/categories/Swift/page/9/index.html","317584749d864dd8b364063d9b8292b4"],["/categories/Swift5-2/index.html","01b773a5dcc3695a5faeb492030fda17"],["/categories/SwiftLint/index.html","9223008a64f30b1e8a1f424fbb8c4bb9"],["/categories/SwiftUI/index.html","df37f314e5ac33c17bf3c26156a89548"],["/categories/UICollectionView/index.html","c95573dba3a28af6221d383900320e05"],["/categories/UIImagePickerController/index.html","13efdf511e4b822fe35adcfe7e85174e"],["/categories/UIKit/index.html","2fb48c511748fab107f4106033565d6d"],["/categories/UIKit/page/2/index.html","22be437075bb37171ea86c61d2848a44"],["/categories/UIKit/page/3/index.html","06d916cb2368670487f2fa6c79a6ba59"],["/categories/UIKit/page/4/index.html","d68c7bf1a599cf15b1a37ede8f8eb39f"],["/categories/UIKit/page/5/index.html","2f3caa4109c3e006276b629e6d9c5206"],["/categories/UITableView/index.html","20b1c42650fab057493709f941114766"],["/categories/Ubuntu18-04/index.html","7de2b739508083d390fe68c9f22db3b7"],["/categories/Ubuntu软件源/index.html","0faa9613cdff9963713695c39b9ea97c"],["/categories/Uniquely-identifying-views/index.html","2a8cd3afa1670f45125e02b9399f00a6"],["/categories/VIPER/index.html","fe20ad5d8fa9d67e286543d3f75a6ecb"],["/categories/Vapor-4-0/index.html","d115b4f7c2b6b3b74cf11427e2816ac2"],["/categories/Vapor4-0/index.html","22cd3b5d4968dc277722c256486fc509"],["/categories/Vim/index.html","216cc90fc4d5085a999e3b8ad42a159a"],["/categories/WKWebView/index.html","4cee49f659cc609c66ff33dd36716ed9"],["/categories/Xcode/index.html","6e5407e86820993921ba200fa3a701ce"],["/categories/appleOS-Networking/index.html","f09c033ede87e1604361f15ec4177eee"],["/categories/bugly/index.html","251ea29ba353c04b1dc272b9e588962d"],["/categories/enum/index.html","11adf08c517c23f419b1cf54f10e7c0e"],["/categories/git/index.html","6a3dcd30c38f57e41220506ddbc47c0f"],["/categories/hexo/index.html","dd15c340ea64c590d35968828cde6fb1"],["/categories/iCloud/index.html","268fc5d95608988260e92a38407efe63"],["/categories/iOS/index.html","a2934b659749ad1b7357af8b6348e6cf"],["/categories/iOS/page/10/index.html","70f1978c8e4a745365b73061b37bd314"],["/categories/iOS/page/11/index.html","cc96db0e0459fa4f1f640058dc960784"],["/categories/iOS/page/12/index.html","0d78640ce44dcd3b8c063e6bcd2d2000"],["/categories/iOS/page/13/index.html","f4746d2d61cf38bc9436d73060503a49"],["/categories/iOS/page/14/index.html","846dc4a792baf03d7386b148b7421d3f"],["/categories/iOS/page/2/index.html","ec0b10f84f0f9129f7c05600bd1e13c0"],["/categories/iOS/page/3/index.html","90df3553a9f70021d20dc4cd86beeaf1"],["/categories/iOS/page/4/index.html","4bc0be4fa80737acfab59700aa44b8e0"],["/categories/iOS/page/5/index.html","498827b7e4aa31df7e8d3a7005c50fe3"],["/categories/iOS/page/6/index.html","4a612dd61228af6d3fda0ab2ed51a2cf"],["/categories/iOS/page/7/index.html","100e58300fc75cb33a56212c6f329c41"],["/categories/iOS/page/8/index.html","b64ff195e2ab7387236405eb9de26817"],["/categories/iOS/page/9/index.html","8934d995a5745b630b7a5db73215b1ab"],["/categories/iOS面试题/index.html","0cdb52fca91902062e9b30b2df5390e5"],["/categories/index.html","d6a5f07f8c3ddf2f306eb7335678b2f1"],["/categories/random/index.html","f2f559d8dcf2880fd4d9fcc652c7b89e"],["/categories/三方类库/index.html","a24635501f4622d76305926cc9170799"],["/categories/函数式编程/index.html","1f5721f1b62f0ac7bb18cb8847a0826c"],["/categories/子类化样式/index.html","0420fd101a6ffa0508e62af3d33c1c0f"],["/categories/开发技巧/index.html","81f95da8459236b2a2e10946e3180b0e"],["/categories/开发记录/index.html","0e5bb8455efc4598bcbd18d049d70633"],["/categories/数据库/index.html","8e066ee5cdd9b973c19a75f80c8500b4"],["/categories/架构设计/index.html","d32375c3c0bbeb29a02c18f155d2e7a4"],["/categories/测试/index.html","b4f83fdb516785fd83d00a791dec65e6"],["/categories/用户体验/index.html","bcdffe8348249b70109c9fc3cf8bfe20"],["/categories/用户协议与隐私政策/index.html","c7a0a7358965b9feefb3af7121ce117a"],["/categories/设计模式/index.html","c59f1d13d2e9d5ae559103187cee6a21"],["/categories/设计模式/page/2/index.html","82b856b41e7d194d8785e3ebf3430db8"],["/categories/设计模式/page/3/index.html","ecd7cfaf1d50ef041b02149e10aa4931"],["/css/main.css","eb430588be547943d07bac3e00f5ea45"],["/hexo部署失败/index.html","ce7981efb23d2fa0335da13174cff9bc"],["/iOS 15 适配/index.html","5f547f74bd7eb97aec6a7d7cf983be3b"],["/iOS VIPER架构深入实践/index.html","8277981e063c73f1cbf2b2a8513ef2a8"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","e2681b330ec5b06e7abeda3baf7693a4"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","c679e193b4cadde33af7e0eb904a2cec"],["/iOS 自定义视图，输入表单和错误提示/index.html","d0516733d747223b4b761b770bbcc72d"],["/iOS如何使用iCloud文档？/index.html","fe6892d40add90dd3b760409309056cf"],["/iOS子类化样式/index.html","9b619064f665e20fa8e3ec989ff7a339"],["/iOS开发记录<一>/index.html","cfe9dc7aa9ebe85ce8b528bad7b45474"],["/iOS自动化布局编程/index.html","1c61184a844f5cbf30ca474987529195"],["/iOS自定义转场(By Swift)/index.html","b48f23af48d6e96d27b9dfbd55e984e8"],["/iOS项目架构：使用VIPER/index.html","e296f090ca8511c22593ae334f2381af"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d71d625587b398e7377d551d4934ced6"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","55d73b1ff734a452225b391bc2395bd8"],["/page/10/index.html","082b994547ed97ac3c3615175bdd146e"],["/page/11/index.html","ac1a83f8fb4252ab8a4561caa9e29989"],["/page/12/index.html","a526ad5b47a23220bb69c5f9242c02c1"],["/page/13/index.html","16466176fe709c94515ebfa52b2a5b65"],["/page/14/index.html","bb65d50e714413c180f5dd1da2448227"],["/page/15/index.html","2dfe79283b62066c752f31d8b0fc4e8c"],["/page/16/index.html","907e16d37e1ab9287dd2028b4e874004"],["/page/17/index.html","0a95cd0461d25c62b91f46315ce61f73"],["/page/2/index.html","e0f24211d4102f8bf96b044c3615c0ff"],["/page/3/index.html","0cd40f005ae9c78ae4ab1c819980c147"],["/page/4/index.html","d482307f7960f1fa27544cf33e2361af"],["/page/5/index.html","b6400a6267ef0968e650a878672bed8c"],["/page/6/index.html","5ed6c7fba6c4f9991e3882a8bb758dc7"],["/page/7/index.html","03e65cd97d86eb4d6198cd9c29e25116"],["/page/8/index.html","7cb00bb79d019c714d051fb6d56560bc"],["/page/9/index.html","090a155de53cbfe83b59b354c0f61704"],["/schedule/index.html","e3430a6c229e309f2e031cf7f063591d"],["/storyAppPrivacy/index.html","6b34859d487cb4e1d13462144eab15b0"],["/sw-register.js","5838a3fed76fd4d33489281fadcc3589"],["/tags/Advanced-Classes/index.html","11e1b2135d80c263eee7b93b6af50c06"],["/tags/Advanced-Swift/index.html","17ffc7a3c0d6eee531a3c8e1657d1934"],["/tags/Advanced-Swift/page/2/index.html","e0322b31235f56eff6e53c57331a44dc"],["/tags/App-Architecture/index.html","a5c7b7f7b977960071d919329519e9ff"],["/tags/Array/index.html","cc5c3ea0acc2ea72e173b762007b18a1"],["/tags/Arrays-Dictionaries-Sets/index.html","58f98cd8306752d72043212a0581f0f4"],["/tags/Authentication/index.html","f925cb756fb88bca31b5ddbbd1aaa6df"],["/tags/Build-in-Collections/index.html","1805cbf89ee309f5d9e91130d33d4736"],["/tags/Building-Your-Own-Types/index.html","ae514b3e5a2361aaf1274a1bdc1acbb9"],["/tags/CMS/index.html","752029bf64120a33c15f78f23713a0ff"],["/tags/Classes/index.html","a07f481f3992a7fce9f1780a4034b2ca"],["/tags/CocoaPods/index.html","d0d355248f43c9b8f433b046d597a078"],["/tags/Codable-protocol/index.html","a508f05de10a857d6eafea854d88df92"],["/tags/Collection-Iteration-with-Closures/index.html","dc4f9eabae569b20c99119b484ceeddf"],["/tags/Collection-Protocols/index.html","1cb0702f01539bee6b9a72d57c9bb7c2"],["/tags/Collection-Types/index.html","7d98da68bbe7689e9fa6cff45922b077"],["/tags/Collection/index.html","d1e0d206ff82772c5e6880969a1c6370"],["/tags/Collections/index.html","369ead791ee67f1c83d91a77f905758b"],["/tags/Combine-framework/index.html","495ec5412c43c94dd55be31f14882e2e"],["/tags/Combine/index.html","86cae770935c73643ca3d0964ead6b52"],["/tags/Dependency-Injection/index.html","140715769d2d6f56e01cc15d00836bdc"],["/tags/Encoding-Decoding-Types/index.html","898c4e566657b16ac7d76dfa125fe127"],["/tags/Encoding-and-Decoding/index.html","722551002f5ca2dcc26d55bc671a76cc"],["/tags/Enumerations/index.html","f64566919d4e96d0afa6b8b52994ce23"],["/tags/Enums/index.html","4079f7485a0a31fa134e731ce1e5fc5e"],["/tags/Error-Handling/index.html","8feb5671b4789ca914c2e540b5d12c65"],["/tags/Functions/index.html","b3de3eb11359f59b9205d57686fc854c"],["/tags/GRDB/index.html","90c7e2d9ea3fa8dcb81e2a64ba75fcef"],["/tags/Generics/index.html","09a9a2dbc3715a2ad74506b47187406c"],["/tags/Go/index.html","ff64996238b9f0263723dfd9f134206e"],["/tags/Grand-Central-Dispatch/index.html","630b5bc26e79ef60c7998349072b3b8b"],["/tags/Hello-Vapor/index.html","2498e7bcfb847273cb58684e126763c0"],["/tags/Homebrew/index.html","97f5f0c7a4e5d5317b6c126074e2da94"],["/tags/Interoperability/index.html","91863adc1b2233be94d7e3213a6f9538"],["/tags/Introduction/index.html","439f1ec1533794cd421a9af732c64616"],["/tags/Leaf/index.html","8ff8ee8146753638a60d3281d14f8d3e"],["/tags/Linux/index.html","5b8159b2b7c00c534d0badb2201571c4"],["/tags/Methods/index.html","fe9f08aee70b352515ebf46d0bd99d65"],["/tags/Modules-And-Hooks/index.html","51ddbfd1b9d8e0d8f6f1f95aa739943a"],["/tags/MySQL/index.html","4ff059a9bb963116122d6b7e83d969dd"],["/tags/Optionals/index.html","a0c4b2ecf65f468b72708b56c56b0c36"],["/tags/Promises/index.html","b6067c70e0b742e69291b7ef5431ce8d"],["/tags/Properties/index.html","1bf33238d0b008038e5430c96d23a4c7"],["/tags/Protobuf/index.html","8b3c9f8768a0d1a55b0dfed9872c1929"],["/tags/Protocols/index.html","c090b51f80460710d2f3eac0b9c26c23"],["/tags/Result-Type/index.html","14ffd0c8c144c8d7228007727086c1cf"],["/tags/RxSwift/index.html","4a855c3a7a995531abb8ff623c95fc04"],["/tags/Server/index.html","a9f3c2eed632e8fc61e6038ad6d35253"],["/tags/Session/index.html","7417be5ae08402959428579b9cc01f74"],["/tags/Sqlite/index.html","255e1a55c7c59a5026da25618eab3f12"],["/tags/Strings/index.html","99f31f7c0952eac8ca455db25ac44870"],["/tags/Structs-and-Classes/index.html","e0903548533de088ae25d828b5d89614"],["/tags/Structures/index.html","11b6daeb523ffa3bc4881d4a4691340c"],["/tags/Swift-5-0/index.html","ba772881f84f5202c5cd74869eb372c4"],["/tags/Swift-5-0/page/2/index.html","57241e4a10c5b1ea20001d2348a7db0a"],["/tags/Swift-5-0/page/3/index.html","c00e80f01c284ba837eb29447f0b2c74"],["/tags/Swift-5-0/page/4/index.html","0eabb7e7b999f7c126177e0ab22cfc0c"],["/tags/Swift-5-0/page/5/index.html","06624270d4421acf2821ee259ea12344"],["/tags/Swift-Apprentice/index.html","e681a0e2715c6844f85a43813dbec48a"],["/tags/Swift-Apprentice/page/2/index.html","18a7acb6020872d3cd820e685ee74ab5"],["/tags/Swift-Apprentice/page/3/index.html","bbec5e9744c3cbc6997919eff42257f4"],["/tags/Swift-Package-Manager/index.html","21ef675028e5c4a6df6cd86e3bba9a73"],["/tags/Swift-源码阅读/index.html","6ddd6221d72f93432ebbaff4684e56ca"],["/tags/Swift/index.html","76dcc9a9ce33ce7bd7d56d5a640eacd1"],["/tags/Swift/page/10/index.html","906ebb8a03248126fb0fe07d1e7d8123"],["/tags/Swift/page/11/index.html","4bb79145d9a8b92301e2a8ccb0527477"],["/tags/Swift/page/12/index.html","7ba6f50093c770091f576d6f795b03a8"],["/tags/Swift/page/13/index.html","790d23a47484589c48d6979b6a8605de"],["/tags/Swift/page/14/index.html","7385dbecd84ad643eef953df3d523bcf"],["/tags/Swift/page/2/index.html","04e37ba7b04880b47a5d4557a19a7ac6"],["/tags/Swift/page/3/index.html","1fd2f6fa17202083265e46d0ea2a90a3"],["/tags/Swift/page/4/index.html","5b3874994d574fc33dae8c9afe67eeae"],["/tags/Swift/page/5/index.html","7d040e396d620300d7231b96f793b88e"],["/tags/Swift/page/6/index.html","5c9d6c4ed331a232bcfe9128c2736eb5"],["/tags/Swift/page/7/index.html","51787822540182b0d1489a54e936e49c"],["/tags/Swift/page/8/index.html","0f1e041962db16c92d034dd45081ff48"],["/tags/Swift/page/9/index.html","1c03469282812e39cca1944db0d4e35c"],["/tags/SwiftLint/index.html","0eadc0b413af70d612aa7585af2a2da4"],["/tags/SwiftUI/index.html","07045d200a7067a592ac224c328e8e5a"],["/tags/UICollectionView/index.html","933d2d26d64c6e66c5b1af6dbaeb488d"],["/tags/UIColor/index.html","e34a0e5adc2f9487d3bda37d1779415e"],["/tags/UIImagePickerController/index.html","0e5c0eccd4762778d1cde69d90875895"],["/tags/UIKit/index.html","dbcfc430e9650c16d78dc86e9a8686ad"],["/tags/UIKit/page/2/index.html","3a82bd9d2f672ab4b5ae60545e83329d"],["/tags/UIKit/page/3/index.html","c20f5300c806270d7d11feab38d58a5d"],["/tags/UIKit/page/4/index.html","e870b5e8a799b0529ac6dece11618729"],["/tags/UIKit/page/5/index.html","2a1b5bea3f6f8fb69247fd75c2c2cef2"],["/tags/UITableView/index.html","8c2038cf8a874b70048e43c1d1a0788c"],["/tags/Ubuntu/index.html","1d45c004ca8b6d4cdd3ef4a1b7aade1e"],["/tags/Uniquely-identifying-views/index.html","84108c06be2d6c9dc435a6315c48741b"],["/tags/VIPER/index.html","ea642c0249808c3936c61f8f64394db5"],["/tags/VMware/index.html","ff9b26322f27695391c435ed6d69f6c1"],["/tags/Vapor-4-0/index.html","361eb921b425a1675305cb8214950fea"],["/tags/Vapor-初探/index.html","f8da26e63bf38248c712e9e4f9e488f8"],["/tags/Vim/index.html","b217c0e7d3a43c4660f17140e0c36a55"],["/tags/WKWebView/index.html","304868be62d6109bb44936e324ec4c96"],["/tags/Xcode/index.html","391f0f6cd13540363dda6443e1fbfb08"],["/tags/appleOS-Networking/index.html","6f1402a0f30b847d90edbe094dfd9c32"],["/tags/bugly/index.html","1ab0bdccaa31ce55a972ea807a7328ce"],["/tags/enum/index.html","bcc0eb843baf6f6f5bbee294cbf5c91a"],["/tags/git/index.html","49ee25c089c6566b965bd65f890a3b92"],["/tags/hexo/index.html","2d146c1ea526ce1380b0732c71c92254"],["/tags/iCloud/index.html","ff5163e269b59c4af25fdbced6ecc7f2"],["/tags/iOS/index.html","c0e8d824492b903701f1421b8adb11cb"],["/tags/iOS/page/10/index.html","6d5d180533463a094e84c15cf39dcf47"],["/tags/iOS/page/11/index.html","d26eabcdfca4678908714131007d8546"],["/tags/iOS/page/12/index.html","f86d63fb0a9a2ca117cb162797c1df44"],["/tags/iOS/page/13/index.html","76eeb3e4e7c5b9676812378f521f11db"],["/tags/iOS/page/14/index.html","9fed0b15481b7d2c4b83b5f4649e8a44"],["/tags/iOS/page/2/index.html","a5365bc793346c1ecaa21614cd5e3953"],["/tags/iOS/page/3/index.html","6809fae0f0efa84072d44fdc3f0dbbd3"],["/tags/iOS/page/4/index.html","34a2bb96950a3b254a562d7df7c5dc83"],["/tags/iOS/page/5/index.html","7cb53925d6b7ff9de0e21241c58ddec0"],["/tags/iOS/page/6/index.html","3fffc8b703ca01714253b39d7a75c21c"],["/tags/iOS/page/7/index.html","7c12dabc1d7c2875733aff9cb1447cbe"],["/tags/iOS/page/8/index.html","96d0b1b3b5f22ace75c1b5c67cdc764d"],["/tags/iOS/page/9/index.html","c1ef410a6c95100525385545f5734e35"],["/tags/iOS面试题/index.html","1b57b462432c3385e29bc079ac5ab7c9"],["/tags/index.html","a428eff49c343019f0d30e2e59e19c5c"],["/tags/non-optional/index.html","736e17b850d3cf3bfee2d44776913f14"],["/tags/random/index.html","bb8187cd7cd53f8d64f38008f0b0fbb9"],["/tags/transition/index.html","d1dbf210a05411f9715e35e3bc811bdd"],["/tags/三方类库/index.html","35ec3dfa76dfb8cb8db72a4e8b6cd901"],["/tags/依赖注入设计模式/index.html","6fe11919085ef1bf5ecce978088234ff"],["/tags/值类型和值语义/index.html","76e1d2598e64f2dcde4851bb0ed6e20d"],["/tags/内存管理/index.html","895a12986188cc6a0609c181b91d2340"],["/tags/冒烟测试与回归测试/index.html","0b6169acc5e13c1b22005ddf7af24df7"],["/tags/函数式编程/index.html","e2cf98e264c5cd009e2cb8d4adb1c699"],["/tags/创建博客数据库/index.html","d6c1c8181892f2555cffa35f6abf48da"],["/tags/初始化模式/index.html","c575a956b39f14fffc932134567feeb3"],["/tags/单例模式/index.html","ff1c94694501ad5a2a3b0b103087ae4f"],["/tags/原型设计模式/index.html","41a2c90f84d0e1abd9e84a081e63a5ba"],["/tags/命令设计模式/index.html","484d00d2eece92859f6a595ddabfc0dd"],["/tags/基本控制流/index.html","d811cb52ca652768b39158b8a4a543b0"],["/tags/基础语法/index.html","4eca4ca593582ee42c2970fa03f50c16"],["/tags/外观设计模式/index.html","4f4148e7c4de2cb864031b6dca13f17d"],["/tags/委托设计模式/index.html","c22e40a5db09ed071660b17ec3173067"],["/tags/子类化样式/index.html","f9ef465ba5e78fcccb8ac0ce36628e5d"],["/tags/对象池设计模式/index.html","a7122c621daa1cf3b3a805aa2284e790"],["/tags/工厂方法设计模式/index.html","b426a46a29d93088c68869f278e8ab98"],["/tags/工厂模式/index.html","0e9132f8ee6c5e3066e0accdbe57c3ea"],["/tags/工厂设计模式/index.html","dd35fdf8e546bc644ee6d3875dbe1bdb"],["/tags/开发技巧/index.html","2ae94e192c59e082625fa13af212c1ee"],["/tags/开发记录/index.html","e7d70061edf6a60adab8272ae553d909"],["/tags/懒加载模式/index.html","2fd9c7105155f5cc28823ad3f55d9a75"],["/tags/抽象工厂设计模式/index.html","8e4aeb9446cc4a56e7d3a7f52af4c5c2"],["/tags/数据库/index.html","28f331a90e71caa7cd3b97c6be51c450"],["/tags/构造函数/index.html","c2e40df4f33b1042532bbe975ef9eb79"],["/tags/架构设计/index.html","57b97d2d7316da79f996339bcbf14ed9"],["/tags/模式匹配/index.html","e6e7f30d9de2c8311ddf79507a18be44"],["/tags/环境搭建与验证/index.html","ea5da6fdff1aca2152daa4591fb8f46f"],["/tags/生成器模式/index.html","b79655f568d6ef11d3ad169b0ef49c8e"],["/tags/用户体验/index.html","ce8381b08f16d46ba1a2a68a625928fd"],["/tags/用户协议与隐私政策/index.html","40fb0c0dff793858e1e7ec1af1d0d38e"],["/tags/类型与操作/index.html","1afbacfb2b34bd0377bc8a778bb75097"],["/tags/自动化布局/index.html","c80185ae98ec49d5da205970e318ea78"],["/tags/自定义UIView/index.html","197bc9d3a766791d4dbc75f50dcbd1cf"],["/tags/自定义转场/index.html","2f7c0815dba9dbc32206b1fe2cd9c0a1"],["/tags/自适应布局/index.html","3622131553068f3e7d53f3d7787135c7"],["/tags/表达式、变量和常量/index.html","2789ffdd537eb13abebbc534fc763bb1"],["/tags/设计模式/index.html","c8ad6efe8788080d8ef5f5e900356690"],["/tags/设计模式/page/2/index.html","a64e007002dc79e687960bed692bc724"],["/tags/设计模式/page/3/index.html","77e7de6b5ae799ae2152548bc65185d3"],["/tags/访问控制和代码组织/index.html","1d87b2d9268e124bf23fb52d5622dc2e"],["/tags/运算符，下标和键路径/index.html","847b307f3e982e09f53c981030681877"],["/tags/迭代器设计模式/index.html","ff4a6689f3c059017b43df7645738388"],["/tags/适配器设计模式/index.html","61f7e5eab2263aa2205a5f2f667210d7"],["/tags/错误处理/index.html","9e431ad7c64dbf1457c54cdaa003d1c5"],["/tags/静态工厂方法/index.html","e3881e39ba737d79ec0dc034d47cebc3"],["/tags/面向协议编程-OOP/index.html","b4501a7457bebb0ffd4c43c858f6438e"],["/tags/高级主题/index.html","0f739f026bf046e6dc04c01493171167"],["/tags/高级协议和泛型/index.html","0b7e068febd4190df049859325d90a84"],["/tags/高级控制流/index.html","ffdd8260f99089f3a779d5bc6fe5c89a"],["/xcode 常用的快捷键/index.html","87141c9052beb5dc2e7ce91decbd2dd3"],["/为iOS应用构建输入表单/index.html","a4882abae84540f0c77c80e7d6098ce2"],["/产品开发的幕后花絮/index.html","d3b50b0f29076d91ce1e982e86c051cc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","57a933397eb5a0447f47c156806335ba"],["/冒烟测试与回归测试/index.html","e6ca914976a1aeabc237d5d48a08dfa3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","bd118a816bfd5a33843712b3a43b33bb"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5e3f8e018248a5eac8bbda76bd71166b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","031996ecaa35838c8442beaacde5afc2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","033add840e5a1d464099117f9842fece"],["/在Swift中创建自定义集合/index.html","cdc213eb3e036a4bceabbb909a76fe88"],["/在Swift中处理非可选选项/index.html","e2d8ff33506e766bc2cc0a5e96a16e16"],["/在Swift中生成随机数/index.html","9a7d17371b58bcc4bb429294fe56001a"],["/在Swift中重构单例模式用法/index.html","2bb6eb92d3acad697cea5f3d806d96d3"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","176e8cf8fc54a059deb5c1b7f4c242b3"],["/如何为VIPER编写服务？/index.html","4219fae7820408c10028158892833c0f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","073c25d1e8557968ae11b8f90478ee27"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","4aa8b1ea8b13e1ac3f7018d8c48c3177"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a57236c17f4533134a90bf947d35adb4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","4ec58d2318ef8a61fa91d53775a03352"],["/掌握VIPER架构/index.html","3e7eb946bba18aff718747edb57ba0e0"],["/揭秘 WordPress Hook 系统/index.html","5578230073406b41de778dc7578fe295"],["/比较工厂设计模式/index.html","7ac3ae2ee3f7c536ef000c2b55f0d633"],["/深入了解Swift中的Grand Central Dispatch/index.html","c40fb6ca9da4b10273002370bd00b416"],["/深入研究Swift框架/index.html","3f81d33a2ded78d551eaf2bb5d9e26e4"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7fcca55728cc0f5bf5de8e73833180c6"],["/选择Swift而不是Objective-C的5个理由/index.html","af3d880e21a2158f446c5b4ff5a3bc0f"]];
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
