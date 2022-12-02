/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","c180109c342a3d80e355d256f45c7c9e"],["/2020年iOS面试题总结(三)/index.html","a106d5e4f919d702ace6a773e21376c0"],["/2020年iOS面试题总结(二)/index.html","33d387b007cb69ff05374ee5127c9690"],["/Advanced Swift系列(一): Swift 简介/index.html","830990d2f5103d83a57b7f969ee55b4f"],["/Advanced Swift系列(七): Strings/index.html","10f6b95ceb1eb0fd98e45e2ccd4bcd21"],["/Advanced Swift系列(三):  Optionals/index.html","5e6f0e4cb3441810ba3f1075122b1711"],["/Advanced Swift系列(九): Protocols/index.html","9d7ed893567b3115a4b578650d15a5ff"],["/Advanced Swift系列(二): Build-in Collections/index.html","f4195e86f9687f9ddadfa61395d4e20e"],["/Advanced Swift系列(五): Structs and Classes/index.html","7c6cb0869709bad5df8ed1ec00fa9b98"],["/Advanced Swift系列(八): Generics/index.html","14a59c316a59577cccb36552613d4380"],["/Advanced Swift系列(六):  Enums/index.html","a8d01ab376e9aebdb0adce00dde99bbb"],["/Advanced Swift系列(十): Collection Protocols/index.html","dec997e13da3c4e41ad768683efbc0a4"],["/Advanced Swift系列(十一): Error Handling/index.html","37822b4f2b06096ce8f409b57ff117fb"],["/Advanced Swift系列(十三): Interoperability/index.html","12b66d45dc8a5f84e5c3574083d063f0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","6410b33f13e3aa0dc558b12e498f74fc"],["/Advanced Swift系列(四):  Functions/index.html","9bbb64d9b449a43cbb1aea607e0aefdc"],["/App Architecture系列(一):  简介/index.html","7cd32cd1b5cd9f7ad7d221a9432cfbd6"],["/CocoaPods 设定版本说明/index.html","03c7ec423427b9cde7d906b0dd70c40b"],["/Docker 启动 MySQL 指北/index.html","9c23a3dd12c61f7eb3f650a712a80867"],["/Functional Swift 初探/index.html","e8809ff537f17d2cf7e87a349fd6dfe3"],["/Git 使用小技巧/index.html","42733f1b0458edfc88ae30919265e1e2"],["/Go Protobuf 初探/index.html","f6a15b63e2700047475fab4e1572e24e"],["/Go mysql Tips/index.html","01bad5cf6d566384583c7b39c4a7ef3a"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","2a0b373b0aeb4a3f144e9e054824b9f0"],["/Go 入门篇：2、Go 实效编程/index.html","b7ed14f1bd2aada3d9833b1d716cf3a2"],["/Go 入门篇：3、Go 重要概念/index.html","5e846fd019863ba536c8b6c92e58deb2"],["/Go 基本语法初探(一)/index.html","5bd78a86263ff11dcf1202bbc09b0086"],["/Linux VIM 命令及操作小结/index.html","c17601e413df96e8edb7e17e2ebd158a"],["/MySQL Tips/index.html","9585974494e84f724c12027ee485bff2"],["/MySQL 基本操作/index.html","4c89d7a1cec193b6054d242d39e4eace"],["/MySQL-列类型和数据完整性/index.html","0b4c1af1524aa6d5cb99dabfdc7e51dc"],["/MySQL-数据库设计和查询语句/index.html","cf1148af13cfb6abdd66192427ca4080"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","81eadace1ae997e37062f0fd44ddadbb"],["/NSCODER和SWIFT初始化/index.html","e2043b4b701e9e5c5bb907d3fcb4285a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","20be45c25d1155e2dee1f687ed47c20b"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c896e3b5ddacd773e81d7f6481ede518"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d1a682817c473ed369c1ea73601b9d84"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","aca372eb710c4f37365e57e09b421499"],["/Sqlite 使用Tips/index.html","07f6f3be944bcb6214e4012f11306636"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","c0b108b56567ca257daa822f3be0cef6"],["/Swift 5使用UIImagePickerController拾取图像/index.html","a5b8715b558f4572e8ca27f1342e8fce"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c279bf64fe21af1275d96a21c9c81ff6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","214667bd5c0534b404b1d5cf9aecb839"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","ada2e8cca4cddf53a74ebe59e01b386e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","36f8a9c1453b137380fce9dbaa2b655c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","bf849146616e4d7fe24aa823357540c3"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","08619c73fbb32aa28b807f436c4ae077"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","164fdd6e59866c5ec5a8448cf351b0ae"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","52ff20cd7506e8d8203cb079213254b1"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","55ec72e646524eb5e44d393f1da1a4c2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","1252629c3434f4174fae7a6c1be71594"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","35bbd850b0984f8d28d9057c5de73666"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","d349265ed0babd45b55767a8fd6d07df"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","312c464620b9bd30945dc66945b5ea6d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","337825416307079bdddbefde49c3e104"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","9081b91ab7a7d68152a3436b82c1c711"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","3ea4af43cd928e9cc2b61e1673763ef9"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","8430b4c5ab3443805e10844aa27118be"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","1787d08778e20258bab88d6055e6ae09"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","84eb0d475a1babbefedfd600cf49098f"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","f0a23f2037775d333fe02f826c481b86"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","4d2000ca2f927947813fc2295dbefb11"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8e3e3e9a0c722b1fb67b397c5cca4eed"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","b637fc72d80984fdbd30a9b910cd9e25"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","da6915a70694e00e0070748863c3a4d2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","14a9917c9a3b67fb015f2c5227a4f204"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","8da1c567e83de17ba15ff7f96f7101fb"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","48b92cf6a2e2d0e9fdcd1a0d253cfbd9"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","7d4e5be26c6ebbf537c85b524faef34b"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","5f3821cd0c121561e1bc67633eb2ee86"],["/Swift CompactMap vs flatMap：差异说明/index.html","9cbca73e30c9c19af77b6236bf4c89ac"],["/Swift Grand Central Dispatch 深入实践/index.html","9712c066517cd0f9c41afdb74ee48353"],["/Swift Lazy属性初始化/index.html","238c01fdb371749c159f9c74727b1541"],["/Swift Promises 初体验/index.html","ebfe63733a5385a8cdd0deec2fe49f8d"],["/Swift Promises 探究/index.html","e9aca29c9abe8a8398b8f75e2bcd72ed"],["/Swift UICollectionView使用指南/index.html","7fa1be63233da6195ec56774ceb06af4"],["/Swift URLSession && Combine framework/index.html","af37f1283d1be44a0f17c73ecd72f3fd"],["/Swift tips/index.html","c57da9093497a48836aca548fbf39d48"],["/Swift 三方库：GRDB 使用指北/index.html","df398d39f6e4b24036ca1cfd9839c82a"],["/Swift 唯一识别的视图/index.html","81e6d48eaf1d72d99163b1057b984dce"],["/Swift 如何学习现代UIKit？/index.html","5d222f9a1013012b3282aa17eaad549f"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","383507aae4ddf8ce132368af4b6cbfa1"],["/Swift 用 compactMap 替换 flatMap/index.html","c9e8936767aa09c481f22808afd6e8cc"],["/Swift 选择和播放视频/index.html","5b9e53787a586f65a98fe2b48d8dc68b"],["/SwiftUI 系列(一)：1、 简介/index.html","53e4b9b68399dd84eea8e81db653576f"],["/Swift中UIColor最佳实践/index.html","a457423eaa3741667fdc525ec046ec9c"],["/Swift中快速简单的工厂设计模式/index.html","4deba90041e8d60ba08c7b3cc6bd848f"],["/Swift中构造函数与静态工厂方法的比较/index.html","04aac48667ad4492d81b8f29395688b3"],["/Swift中的UITableView教程/index.html","bcdcfad81ca9906c080b4fac340cd01d"],["/Swift中的懒加载模式/index.html","70c6eac60849d206a477ee720e29cc2c"],["/Swift中的模块和挂钩/index.html","72426e75aa3bd2ba327ec9893e00d9ef"],["/Swift使用布局锚点添加约束/index.html","f75a1a8c0e9d2f5bd022596192347826"],["/Swift依赖注入设计模式/index.html","036771bb215d840bdd4327b77b698ad7"],["/Swift关于Dependency Injection (DI)/index.html","9d79ba7e10acea322998e3f12c6348ee"],["/Swift初始化模式/index.html","afef65fa06c48f07720efb57d5111b68"],["/Swift单例模式/index.html","eb0dc288df7d6f659fef6f2728281222"],["/Swift原型设计模式/index.html","4abbeb9776d39ebe77f28895e1aa4b64"],["/Swift命令设计模式/index.html","68abdf63253aa06eeee44f893a56a919"],["/Swift外观设计模式/index.html","e980e987a4fd69e8dcf0004917810d5f"],["/Swift委托设计模式/index.html","d55d83f1bf3dd0d9e304a5d7f54dc0e8"],["/Swift对象池设计模式/index.html","9fdec663a397d18a48319ac265085966"],["/Swift工厂方法设计模式/index.html","5b50ad826b1f291403a80effa0d56144"],["/Swift带闭包的懒惰初始化/index.html","4e8361dea8ce6503dcae399f0da3bb7b"],["/Swift抽象工厂设计模式/index.html","68ddfe3b01917ac2f2f0b0708780a6de"],["/Swift掌握iOS自动布局锚点/index.html","b111e3a6b32f58bd1efc43aa7ef26a17"],["/Swift支持旋转的自适应单元格/index.html","e427d6093317fae5860f3da543e34bb9"],["/Swift枚举值/index.html","91d9a28840419654d972a76b26838088"],["/Swift生成器模式/index.html","bfb094fcd01255903491f6cfda0cc6c6"],["/Swift结合Xib文件自定义UIView/index.html","8ab6488ee1fbd0cd798e6fcc2964e7bc"],["/Swift编写的20个iOS库(一)/index.html","2b83285fafb52ca399dde3bb3e994c4f"],["/Swift迭代器设计模式/index.html","10663a1b73589165531589d17da8e0f6"],["/Swift适配器设计模式/index.html","dcb248d2ad5ef0820a6db821437a2dfc"],["/Swift静态工厂设计模式/index.html","b8c44e842dea256f4757484c30392bd2"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","983c9e7ad7643c26f4dae7adcaddd97c"],["/UICollectionView data source and delegates/index.html","1dc00e2cff387cafef37bd83661d7763"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","15ef00f2b862cb2b6e8cddf232ca6629"],["/UIKit初始化模式/index.html","7ee57cb3f77b24699a9cce4f79e48c1d"],["/Ubuntu18.04替换国内源/index.html","c9f4c378065958d331b1f186a303f22b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","fdf493ef86df1fde45a3485faa3ef179"],["/Vapor系列 (一) :  Vapor 初探/index.html","f9a107f9d4fb6e2016e24392d3fd673e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f0fe123e852cde350efbad255d994fa7"],["/Vapor系列 (二) :  Hello Vapor！/index.html","6dd8f9be995a6adfc647b61a71d61494"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b0f2eb00676c9d421ffc5b494d40c3a0"],["/Vapor系列 (四) :  创建博客数据库/index.html","3eb742a16b20c341120c465c95fd6173"],["/Vapor系列(六): 徒手撸一个CMS/index.html","437c934004d142b0958b42e98e797140"],["/WKWebView与Native交互注意事项/index.html","4df85deeef80995acac1c6525080b71f"],["/Xcode扩展/index.html","642d0534a835f36c05b788a9bf25b97e"],["/about/index.html","21b9af775f37a55f3be8a98b0fb1c679"],["/appleOS的Networking示例/index.html","2d8df83af619162553a44fc81e291519"],["/archives/2020/03/index.html","0088081d9c6ff14699968481db483fae"],["/archives/2020/04/index.html","f78b4c31633ea23be19f702a211bf4cb"],["/archives/2020/04/page/2/index.html","7c3386cf0fbbd40c5caf5ce0f04ae5bc"],["/archives/2020/04/page/3/index.html","2326acfdd1edc1ff17b74f544398aa93"],["/archives/2020/04/page/4/index.html","17cdfa968367c9aaa90f36355e91883f"],["/archives/2020/04/page/5/index.html","3f7d961e76388b4f24de752a0436c00b"],["/archives/2020/04/page/6/index.html","538d7612b18254df9620218584a035e1"],["/archives/2020/04/page/7/index.html","90f72eda5efc849d678a54f077012fb2"],["/archives/2020/04/page/8/index.html","da175bed33b4985567406aa98dd2543a"],["/archives/2020/05/index.html","1bc1b2ebefe939f97056ce7d6cd959a6"],["/archives/2020/05/page/2/index.html","ecbf94fc8aa75e8db97b9fb2fc971dba"],["/archives/2020/05/page/3/index.html","2609a911a4b93397d824c199c381d499"],["/archives/2020/05/page/4/index.html","487cbe14db0547dc21559df84bc12376"],["/archives/2020/05/page/5/index.html","c1da19cb74ade79bd357fbc870a3f3e4"],["/archives/2020/06/index.html","6eff0af6819e17f075ec2e70fae85d92"],["/archives/2020/06/page/2/index.html","3bb8319bdf05ed562cb1cd225b83e690"],["/archives/2020/08/index.html","5dfdd16391867d41e57be5cd0aa60c42"],["/archives/2020/09/index.html","379309973ebeafaf37e121ad60720322"],["/archives/2020/10/index.html","4f3f6c6ff6e62992ba940443c3a64ff8"],["/archives/2020/11/index.html","bd93a9152127e29abf54e6309759ac3f"],["/archives/2020/12/index.html","6da2dd4a3f2a6654539347ec711da078"],["/archives/2020/index.html","2f50bf92396680ec8cef317e1abdf973"],["/archives/2020/page/10/index.html","da850f087aae0bfb7b83498e421aff3e"],["/archives/2020/page/11/index.html","37d7af5102db3fceb19daf0481651871"],["/archives/2020/page/12/index.html","8589a32976ee6b039a46315a8458a9b2"],["/archives/2020/page/13/index.html","90340bcb29162eb088080d9ae048ec35"],["/archives/2020/page/14/index.html","069ed16fe1f5c2bd6b1ee0bbce737e82"],["/archives/2020/page/15/index.html","797d637e0bfb7fbe012538f388c8ee2f"],["/archives/2020/page/2/index.html","8a0273f44b1d3a1427ad38be2e4c4afd"],["/archives/2020/page/3/index.html","2c0a2ae74cac0598a6c0f52b4a42926d"],["/archives/2020/page/4/index.html","00b481778341d9add708712bbbf1ce16"],["/archives/2020/page/5/index.html","9d901511a9e6becd7e9f55c6d2194b11"],["/archives/2020/page/6/index.html","3d749962df9a314a9fba22c3d0bdb6af"],["/archives/2020/page/7/index.html","e586536efe5a01f1ecf40883bf8bcd94"],["/archives/2020/page/8/index.html","34739795bbf4f04c2a92f59deb1b00ca"],["/archives/2020/page/9/index.html","2a49ddda6d3d83d29859b473698998af"],["/archives/2021/03/index.html","52cf23d1a38c0d077bd744181dbe5ff4"],["/archives/2021/04/index.html","6a6a9cbfac37e7fb7e3d6f826568bd2b"],["/archives/2021/05/index.html","0a071d63eabc7df49972d33ed2de42fd"],["/archives/2021/06/index.html","f2e9f2764b50d52ff1bc9795ead6d525"],["/archives/2021/07/index.html","456d0e8851133e4c7e963ff2333b69bf"],["/archives/2021/08/index.html","f8c67028e828d070dc5c026cbaaab13e"],["/archives/2021/09/index.html","d754cdea3f0dedbf26f1200f744c5431"],["/archives/2021/11/index.html","14e97607e1690a87e768171ea94a2862"],["/archives/2021/12/index.html","5391b5d08eb33b027f10b2e87a8d1619"],["/archives/2021/index.html","40d17802399e11c3b8bdba6b316206f7"],["/archives/2021/page/2/index.html","a7527175f5a20ca73620c04da9d8609e"],["/archives/2021/page/3/index.html","62dcedf9e371326e2258316698811b4c"],["/archives/2022/03/index.html","0e075d07c76153ac6c78048eaf64d6fb"],["/archives/2022/04/index.html","f4b2963b48b1fab43d79810a37449efe"],["/archives/2022/05/index.html","e5caae4702e4df4bd61d03db4089ca69"],["/archives/2022/06/index.html","ec670333eb21d8585c6b8f196c5605d4"],["/archives/2022/07/index.html","545af583373829fa42c2cdc78f033b0b"],["/archives/2022/09/index.html","de003bce64d1d2be21a8e23171a2f3f3"],["/archives/2022/10/index.html","9db33fec829d82fedc243f96f6603750"],["/archives/2022/11/index.html","1c48384e51e27f9b033e69be28006950"],["/archives/2022/index.html","a7fdff754ff228586e12dad3637f752e"],["/archives/2022/page/2/index.html","a038c4687cf71c076bb8dbba05ae91aa"],["/archives/index.html","46ff24d30a105e45f7350177da8c9aa9"],["/archives/page/10/index.html","da76331cf7ade1c8a6204344dd988b7c"],["/archives/page/11/index.html","aee26b26ce4d411aa79b1f9c786931e0"],["/archives/page/12/index.html","d6807810bdb433131fb369a17d577626"],["/archives/page/13/index.html","ab0a5c311bb131faf89de254cc62134c"],["/archives/page/14/index.html","41133c4e04f58a39a6e6a23abb0daab5"],["/archives/page/15/index.html","d6b90ee49e0b73252663967396c4b39f"],["/archives/page/16/index.html","31f766d6b3f9b16c45d18bd75de5701d"],["/archives/page/17/index.html","be6be2c057addad912521bd8e2a3b97c"],["/archives/page/18/index.html","9ff45c9e7494d4f8a59c1ef80449e310"],["/archives/page/2/index.html","d99b557284e0e47445feb18b47e7fafd"],["/archives/page/3/index.html","8885e395b6e949a208adae366e432970"],["/archives/page/4/index.html","5db14f4777b4ca495ea7221c069cd3dc"],["/archives/page/5/index.html","17943c4e95edfb3e1128b8193cf669af"],["/archives/page/6/index.html","5dad95782e09fd1b260b5c443dc22eaa"],["/archives/page/7/index.html","d8344ee4fb1ab238c5165e2f079a7211"],["/archives/page/8/index.html","2567b09715c2aed1b19f65caa88b253d"],["/archives/page/9/index.html","2f8705b45b42bcc5a8d3e0ff28043cc1"],["/bugly 上传dYSM文件小记/index.html","b1bec267244937e96b9a0e0907a543cf"],["/categories/Advanced-Swift/index.html","0b91bde73d748ffbd580d9a7e4c43360"],["/categories/Advanced-Swift/page/2/index.html","04f323d476898c03621412c3412b55ac"],["/categories/App-Architecture/index.html","fbda32846bb01015b2f61691f789f76c"],["/categories/Array/index.html","05b399755886ee5a97adb1655308043d"],["/categories/CocoaPods/index.html","9334fd9576388061b7cc4af347bc3358"],["/categories/Codable-protocol/index.html","5c392b2bdc72da6e06ad295973de2384"],["/categories/Combine-framework/index.html","19583aabffa41730842bb86c4e6e21b9"],["/categories/Combine/index.html","51e71a9c4223db9ec7c328a70e3a3612"],["/categories/Docker/go/MySQL/index.html","023bd76d70c24aaff1335aee03f2bef5"],["/categories/Docker/go/index.html","b1d27f887d4cfcebac403092e97eb125"],["/categories/Docker/index.html","ae3b9b7b609ad6e793e38251cd548c9d"],["/categories/GRDB/index.html","1dd6a0e8d14cf03d81539c80a7b8d54e"],["/categories/Go-入门篇/index.html","1b7aedf121d36b91a89f00911d77a2d0"],["/categories/Grand-Central-Dispatch/index.html","2b60bcfde3bcf9fc6ca9f9af10b315c0"],["/categories/Homebrew/index.html","eb5578dfca47d63f644085648473d325"],["/categories/Linux/index.html","2a2a3944ae060327145c7ed8344ffaae"],["/categories/MySQL/index.html","9a773c6eeaeedf371cb49ed539f26fd9"],["/categories/Promises/index.html","4003ec744ac918305e5b484de9a49374"],["/categories/Protobuf/index.html","9aa8b3b9f7a82f6d2d5563df8c063bf9"],["/categories/Result-Type/index.html","eb7f53d2a4dd006f52d1816ccc412c6e"],["/categories/RxSwift/index.html","856e7ce809dc711397aea67244228645"],["/categories/Server/index.html","a49e7a28069d6bae73d57a434de0afef"],["/categories/Sqlite/index.html","da2e66de794eb5c33a9ce5944fdd940b"],["/categories/Swift-Apprentice/index.html","b1dc11fe3f1caeb2c8a1979bf29fb99f"],["/categories/Swift-Apprentice/page/2/index.html","e195b5a05c9feadb209f0b8c3e27db78"],["/categories/Swift-Apprentice/page/3/index.html","3225f86830e006cc26328919bff25b52"],["/categories/Swift-源码阅读/index.html","59e92bc7346a786586f2b21b67fdecf1"],["/categories/Swift/index.html","aba691bb489c2a160eeeb85ff620b1bf"],["/categories/Swift/page/10/index.html","2387106b568d7f11224da09459c6c5cd"],["/categories/Swift/page/11/index.html","fc0ccabdffed9109b5e3b80e64d05a56"],["/categories/Swift/page/12/index.html","b29d8d6289b42d189caf52088c818da1"],["/categories/Swift/page/13/index.html","b5080dccaa0e7de6c2524a9c25b971e6"],["/categories/Swift/page/14/index.html","b7cbd0c5d3839213a0fd0ae325bd1a0b"],["/categories/Swift/page/2/index.html","b2d0baf861b9bce9c694a19898159d1d"],["/categories/Swift/page/3/index.html","3e58b0d69637096654767d8c9c5396b2"],["/categories/Swift/page/4/index.html","3fd99d83a54f6c50e9dfd11ae6675a7f"],["/categories/Swift/page/5/index.html","80739da9f311d0ed23e5e005afe97adb"],["/categories/Swift/page/6/index.html","23d2d6aab77503c3c0c4dc1a71ce83f4"],["/categories/Swift/page/7/index.html","b4ec133ae2c976147162557a85c37583"],["/categories/Swift/page/8/index.html","de1a3260741ac5a459006e3ce92abbd6"],["/categories/Swift/page/9/index.html","6fe4aaeb3ad218585cd72f9a9b68d861"],["/categories/Swift5-2/index.html","00d7385c5d52230617d82af60ba43ca4"],["/categories/SwiftLint/index.html","fe05d11d84a73e6c57ab35ce6baf735f"],["/categories/SwiftUI/index.html","bcff0c1be729917057dad978ba915f58"],["/categories/UICollectionView/index.html","2ff0eadf89de3ddd1c6750c2dea913d3"],["/categories/UIImagePickerController/index.html","df1d94f2b9b562415ff76106c78bdf19"],["/categories/UIKit/index.html","e933c52ccbdf0638da2479b34a77e89c"],["/categories/UIKit/page/2/index.html","3218ad3b6d314454417223b62e9e8250"],["/categories/UIKit/page/3/index.html","a9c782ecb506f83bf98cd26aca5e9b82"],["/categories/UIKit/page/4/index.html","929b25754dcb58c2570a0c61b8a9929a"],["/categories/UIKit/page/5/index.html","1cf37e12ddbf535986f7661d07796041"],["/categories/UITableView/index.html","88d3584e53e91448e211ab1f4f8bc8d0"],["/categories/Ubuntu18-04/index.html","a20f30d0dbc3ea6208d56c3dc7b35a71"],["/categories/Ubuntu软件源/index.html","78a3ea3767283972b968ce1b77dd7ee4"],["/categories/Uniquely-identifying-views/index.html","5f0bcde11d42255dd9bd066eaeb9d6e3"],["/categories/VIPER/index.html","10908a5babcad607f35729b8eb5f2a08"],["/categories/Vapor-4-0/index.html","bd4fd0c2f641bf7e8fc8f27c31d72cdc"],["/categories/Vapor4-0/index.html","8391fd5a28ae779cfbc051f8159acc48"],["/categories/Vim/index.html","c52bd1e2fc16bac6851388075a0d3aac"],["/categories/WKWebView/index.html","3ab24e06e013c65781a099fcd1b2f617"],["/categories/Xcode/index.html","28005d30f94683b3438192f29736ec95"],["/categories/appleOS-Networking/index.html","471ad192bb2e5619d4723974c65c9709"],["/categories/bugly/index.html","4a2d43d293d41f536f18472931fd7b13"],["/categories/enum/index.html","92e7267649ae7203904ef0a6dd9ab9fc"],["/categories/git/index.html","ce2b0a82c7b3c8ca99f1c5de53a9ee22"],["/categories/go/MySQL/index.html","b61c005011a11dd5f5059285bfc84b3b"],["/categories/go/index.html","bcac40dcd97a96e79dd14a6017facf64"],["/categories/go/interface/index.html","28751803700a9ce6ff0eaa435d9f07b7"],["/categories/hexo/index.html","ffdbdefbba07a961827a7d1359da1a02"],["/categories/iCloud/index.html","b544f555f5392648e56b4d6ca6599bae"],["/categories/iOS/index.html","cbe8059ae45c81b2293fd4a8f9b7526c"],["/categories/iOS/page/10/index.html","a55680b8e468bce89d5f621401c9f391"],["/categories/iOS/page/11/index.html","346b24d4c2e7dce8a16d8d03969b400a"],["/categories/iOS/page/12/index.html","8b59a9066d600037369d2470e518013c"],["/categories/iOS/page/13/index.html","50c6e751b5787431c6a553b717b6bfce"],["/categories/iOS/page/14/index.html","40cff901c098ecc87bba2a131022d8bf"],["/categories/iOS/page/2/index.html","694e1c86960f8a51a34d85e0e6e2e12d"],["/categories/iOS/page/3/index.html","7537675eaf387cd911c495e465222ade"],["/categories/iOS/page/4/index.html","b3f83bea28de6a1990e463aa29278a88"],["/categories/iOS/page/5/index.html","3cd3f991242ae6bd8037c2a34f66ddf0"],["/categories/iOS/page/6/index.html","5561f0ef8a9d8351900bdf86e76c3204"],["/categories/iOS/page/7/index.html","15ec5b28f1e0bad0baf702c85703e0b5"],["/categories/iOS/page/8/index.html","682ceae0a1e7784035cdddd9618bb4db"],["/categories/iOS/page/9/index.html","36970ffa3a7db6981c655d950520ffe0"],["/categories/iOS面试题/index.html","72c687b95ff2a1eca516d3747baada63"],["/categories/index.html","6609a74af3e91e3738a12f30de78e5e0"],["/categories/random/index.html","32dbd30f562894824d9f0e99c6aecc7f"],["/categories/三方类库/index.html","1358db836e9c5b58560c132a65d92bfa"],["/categories/函数式编程/index.html","6fa77446e589d9e070f1b58c54ed73f7"],["/categories/子类化样式/index.html","46a52ad4ebe4416787890a4f1930c4ac"],["/categories/开发技巧/index.html","0af305077c63ebac3644d7cebfcbfc8b"],["/categories/开发记录/index.html","b14bc363a0a2c21aac5533ec9906f1ae"],["/categories/数据库/index.html","1ba9ad50df1d834a2228dffa47bf014b"],["/categories/架构设计/index.html","4c043b0a64fecc5a0de7b0410cafe432"],["/categories/测试/index.html","b95791f9231cdc30b347041d861420e3"],["/categories/用户体验/index.html","a2e140f33c95c4f1c851886a185fa3ae"],["/categories/用户协议与隐私政策/index.html","980a4acf9faada434a53b30ee96c745f"],["/categories/组件化/SDK/index.html","ddd59735e46c22e2f7c73cb9ff478031"],["/categories/组件化/index.html","5c59df8a755e93d895ad2b388a3a3c52"],["/categories/组件化/模块化/index.html","c483141f2b9cd0ac9842b8e1fa0026a8"],["/categories/设计模式/index.html","7450566dcecb6577997dedda91e67f06"],["/categories/设计模式/page/2/index.html","8c48ed335631500f4fb32ac2d5b030de"],["/categories/设计模式/page/3/index.html","aa441110164836fa629bf174eb24af30"],["/categories/逆向/index.html","b0d57f289b5f6dc191d48289392f50c0"],["/css/main.css","f14916265e9f2922fe3b1ea0c3201aee"],["/go moudle 导入本地包/index.html","518786c4d12f9dd2fe5cb60993e1fa7a"],["/go 库专题(一)：gin/index.html","5bace81d7aa3495f7f6af75ebcac0277"],["/go 每日一问/index.html","74be85edd471f2103f9f80fc5ddb23d5"],["/go 项目实战：gorm 数据库框架/index.html","1e7cc2b9047056cac2c5c9ae99570b75"],["/go 项目实战：zap 日志库/index.html","1c73886eecceed98eb87feb56c550fd4"],["/goland 学习笔记/index.html","bf636b02bd856c9e82039086d3cd6fcc"],["/hexo部署失败/index.html","63f2757a9bdfd4454358a1640e298e1b"],["/iOS 15 适配/index.html","bce141b30b47844ebdf7f3b54f40351d"],["/iOS VIPER架构深入实践/index.html","30b8d9efef6e8ec30582f7361c65eb7a"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","71a2b06e1219be159797f2292e8c4c14"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","bfbc2600040637f4a47c9a5439aac828"],["/iOS 自定义视图，输入表单和错误提示/index.html","a041f8b1a0d73c6d7d2e571ac9f5ba2e"],["/iOS如何使用iCloud文档？/index.html","ecfd2751eeceb10b237c7c4b26824388"],["/iOS子类化样式/index.html","abd9374948a9f10962e23f8f6206bc59"],["/iOS开发记录<一>/index.html","2ea1b52eb42a166ef9d7afc5b5ecfaf8"],["/iOS自动化布局编程/index.html","5edb37c496c5635ede1da26868f7a43e"],["/iOS自定义转场(By Swift)/index.html","74e7b9983320f0f209e8a528eced8479"],["/iOS项目架构：使用VIPER/index.html","b1dc10eac278d5f0d957f6f790030ba2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","1cee9b2ce12c565ead94041ecd94dadf"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","0c3ff6a99a25dbdf310c5fad0a0977ef"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ceeb4ce714b50fc57f9d6972181b0d8f"],["/page/10/index.html","ab41898e7cda79a55705802583cc6ec9"],["/page/11/index.html","025a13c1794c7245db11dad0469dff36"],["/page/12/index.html","41ddb7fc901949679a8c9051fec6b6aa"],["/page/13/index.html","732d4c52ef7f85a8d336237a91219f4c"],["/page/14/index.html","6919ff7f35b6f08c7d75cddd91cd6dab"],["/page/15/index.html","8546ea80ab4d229a5de3a7c497dec9d5"],["/page/16/index.html","c5272cafc12525b9b2fec949b18bfd14"],["/page/17/index.html","46fd2189e5a26bc7ec9c0b1a0aaa3ce7"],["/page/18/index.html","bf2c2f7eaf9854b58e2c9af7a3ad64b2"],["/page/2/index.html","a2b04821ed9b7617e1af11439daf79d7"],["/page/3/index.html","83c99fe5eb39fb8a6fd5d5b4e20093ce"],["/page/4/index.html","4bee6022d96d1cb18afb87a3a5f4cf32"],["/page/5/index.html","ed2d647a10be33bea7f8e002641909cc"],["/page/6/index.html","b895fe3756efe427d90842db735af38f"],["/page/7/index.html","d2ed1031a1c2cef1f672097a1acc2502"],["/page/8/index.html","fec7d684533987e549409eba46f5e330"],["/page/9/index.html","be5757995581d7f4ac19a6ceb285fce9"],["/schedule/index.html","69793d2c4467b8c45fd50f629b256568"],["/storyAppPrivacy/index.html","8f4bf38830befef9cb23d26d34e5ab55"],["/sw-register.js","91947e772203de67476bcffbea447aa2"],["/swift 专题：函数/index.html","aba35bd72eaa61d41bc753508205bf9f"],["/swift 专题：闭包/index.html","1eeacee61c92ee48a56e65c85453e5a9"],["/tags/Advanced-Classes/index.html","9434b63a261d91f0fa0651d4f1ce461c"],["/tags/Advanced-Swift/index.html","e0b1f29a56eddfd3360f8470463b6182"],["/tags/Advanced-Swift/page/2/index.html","b9d2575187f20b40b8d189a36231d6c4"],["/tags/App-Architecture/index.html","ac7ef97d495e3009d2e3e7c001c70cc8"],["/tags/Array/index.html","c4e3d70329640cf26865526a050b08ed"],["/tags/Arrays-Dictionaries-Sets/index.html","5d8263b9e70b21d4b85df401d29475c4"],["/tags/Authentication/index.html","13b7ddda923487c2b6ec2ec0f4e57367"],["/tags/Build-in-Collections/index.html","554c725d783dce38f6f15282549f1e4e"],["/tags/Building-Your-Own-Types/index.html","da036938d33122c3f6f363b6cf03dc33"],["/tags/CMS/index.html","d93a4f72c43e946d66810d36de1ff495"],["/tags/Classes/index.html","5e7b03e1ea790451a4858e27e44c2308"],["/tags/CocoaPods/index.html","b7f5946d661e6c06c59f901464d18212"],["/tags/Codable-protocol/index.html","25174e242dd942df8fd7955048406ad7"],["/tags/Collection-Iteration-with-Closures/index.html","cc6e524b5c2f554d9ed099d155d4b618"],["/tags/Collection-Protocols/index.html","7a34af7ebf2136e5771c750e78f3d294"],["/tags/Collection-Types/index.html","262e35057d7432051c084e808eda3723"],["/tags/Collection/index.html","99013d48c1940f4a07141eb37b4e7620"],["/tags/Collections/index.html","dc2bd08798465e3ed360f297a6b9a746"],["/tags/Combine-framework/index.html","dc01212eff2437b1be7603fdf72ded9e"],["/tags/Combine/index.html","e35bc416f12b8b8dde44aa60301f7429"],["/tags/Dependency-Injection/index.html","52029a61df54112f3813c526dbc03407"],["/tags/Docker/index.html","fe3438c1e6d17c8aefcdd4550ed026d0"],["/tags/Encoding-Decoding-Types/index.html","3e40966a44cebab8b51a4280dccd4633"],["/tags/Encoding-and-Decoding/index.html","e59673e11cb6ba287c242f5f1f0ac8a4"],["/tags/Enumerations/index.html","d6e73a8ff36174bd8e88a97a4913e38d"],["/tags/Enums/index.html","12dec087bbc0377dc1d157a0f01cbe45"],["/tags/Error-Handling/index.html","6fd39d811bea2f4b70156e6b440b8e35"],["/tags/Functions/index.html","0301c5975d97455d9238bc119c7ebfa8"],["/tags/GRDB/index.html","73bf6bf11e9443cba0f92293271aba97"],["/tags/Generics/index.html","2b1264db9cdf991e67058a6ab8174d04"],["/tags/Go/index.html","34d15b5a2ce95f9f9353a93d20d512a1"],["/tags/Grand-Central-Dispatch/index.html","2803ac39af840bdeaff5e4221c133ae4"],["/tags/Hello-Vapor/index.html","57560ba63f90fcd49f523bd12c83dd5f"],["/tags/Homebrew/index.html","9d79369097ee1309767eee6e4f5ada8e"],["/tags/Interoperability/index.html","66af8e09352c59df0fb7036edc3a4ece"],["/tags/Introduction/index.html","ae91b48648d1660371ee88adc3e108a7"],["/tags/Leaf/index.html","d6ab885364c3a49d1342083f10cac425"],["/tags/Linux/index.html","4fa6ccf8887aca1eda1f67cd2c78e25f"],["/tags/MAC/index.html","6360495638115186bab58a11a66e0f03"],["/tags/Methods/index.html","8315d9d58215a7854d0bac8a0a59069a"],["/tags/Modules-And-Hooks/index.html","a0c1ea743e395fd38b536b63b4960bee"],["/tags/MySQL/index.html","90c0a411603ccbbf20f4d302d7066c53"],["/tags/Optionals/index.html","6e470064e5fa500db744ee42158389ee"],["/tags/Promises/index.html","31df40b092dd47df4f8f608691b84c8e"],["/tags/Properties/index.html","478f3cf52cb0fa134a39d544b057e9f6"],["/tags/Protobuf/index.html","a4904b36625dea92a9b0d184868945a9"],["/tags/Protocols/index.html","f3336229292314510478eedbf0164926"],["/tags/Result-Type/index.html","5d0804c09f5c77d6b60295138f104814"],["/tags/RxSwift/index.html","54f197aaf2d70a9c64d805983aa4ce8d"],["/tags/Server/index.html","e50b4edbbd8b5c5294a7ab4ecd20a884"],["/tags/Session/index.html","468115d511169dfc1b7776ff29100f3b"],["/tags/Sqlite/index.html","aaee6368e7641f305baf1616591e19e5"],["/tags/Strings/index.html","c0c4f809405d191d6255f2616ada5071"],["/tags/Structs-and-Classes/index.html","e516b039d6766bc16e9f3e487756805f"],["/tags/Structures/index.html","b1f47ffda12af62f2306171b5b77ed59"],["/tags/Swift-5-0/index.html","7dd668621dc8580232fc7d212dc63761"],["/tags/Swift-5-0/page/2/index.html","6fda85d90fb807bfe392053b85ce4688"],["/tags/Swift-5-0/page/3/index.html","ed61a829e5be26e2ab7e6a76576ba93b"],["/tags/Swift-5-0/page/4/index.html","3c258c1724d226c4d9b41160f0814192"],["/tags/Swift-5-0/page/5/index.html","277863e3be6a75502fd1a623eb6646f0"],["/tags/Swift-Apprentice/index.html","245aa85eccecc8075f5d07796ae577b6"],["/tags/Swift-Apprentice/page/2/index.html","60bedd997a1cac43b2ac880a81edf0ae"],["/tags/Swift-Apprentice/page/3/index.html","08a60f7f34407d594ecb05f9f024b058"],["/tags/Swift-Package-Manager/index.html","e43adb738e0ebb5927aaafa7e40c045b"],["/tags/Swift-源码阅读/index.html","d209710c2c995166f139516d73286e83"],["/tags/Swift/index.html","575afaa7505c7526ca8b6efa356d01b4"],["/tags/Swift/page/10/index.html","962e4e1408e203b216a7ba5339379dd4"],["/tags/Swift/page/11/index.html","d24aad454546b8d586ab455c79e2e7a6"],["/tags/Swift/page/12/index.html","3720af69ed1b8b5825399798c7e3310a"],["/tags/Swift/page/13/index.html","c85e2d4c7baee9f78b9601f5560c466d"],["/tags/Swift/page/14/index.html","cee4118f0628eb200cd9ae8e9358edd4"],["/tags/Swift/page/2/index.html","c238d629e9f0371d5d478c7bd89ee4de"],["/tags/Swift/page/3/index.html","d2994feb4b60d02a29de30b8497991eb"],["/tags/Swift/page/4/index.html","66be47f3a0c71568c42d40d10dfb66d5"],["/tags/Swift/page/5/index.html","d5a4e67b175c43ce13910d3c6c3826be"],["/tags/Swift/page/6/index.html","b06af8b125b1722b364ab2f2dd5a390c"],["/tags/Swift/page/7/index.html","8e040c62cfd0c7b29bd967a6516762ba"],["/tags/Swift/page/8/index.html","b750f10a5e4c92777c1954457c6728ea"],["/tags/Swift/page/9/index.html","3efad585723e91ce400352a3a19244d6"],["/tags/SwiftLint/index.html","c7e21d39e95e4beaa4844a122d028356"],["/tags/SwiftUI/index.html","2cb7d169c6e7d4aef27779422c36e171"],["/tags/UICollectionView/index.html","673c2f68d4f2bfbdc8b848fb4fe6bab5"],["/tags/UIColor/index.html","dcbe7071e4eef2b51ef75079a0c99229"],["/tags/UIImagePickerController/index.html","a373221bd890a92ab4fc09e035a6e634"],["/tags/UIKit/index.html","ed98949451ae8e732d525d5e8e5e5fe1"],["/tags/UIKit/page/2/index.html","634a1b934e89674cda8d55c87e4e1bf9"],["/tags/UIKit/page/3/index.html","d7d71dd49a3a438e892b59c67c12c3c7"],["/tags/UIKit/page/4/index.html","a5a44758c2096282316c6f5957693e2d"],["/tags/UIKit/page/5/index.html","b3f99c5ed4b7ceaae073267af6d90936"],["/tags/UITableView/index.html","45caccad40db95626fb9da7ae65c8889"],["/tags/Ubuntu/index.html","25eb373a775c0f344f556bd566f0e3b8"],["/tags/Uniquely-identifying-views/index.html","b6f6b6aaddf12ff5e38ae3dafc43da68"],["/tags/VIPER/index.html","188150d146cd3b8b10711b8eea4a1d8f"],["/tags/VMware/index.html","409dc07d0ca16c2178c3aaa7cdf8a966"],["/tags/Vapor-4-0/index.html","7dc44b329c17bd63d027560143dedd32"],["/tags/Vapor-初探/index.html","e090988283e48e75e0d5b421467452e7"],["/tags/Vim/index.html","822b8088bede38f513fc9df67cbe5098"],["/tags/WKWebView/index.html","04eab1e4d380707455c8ab1bd02eb88e"],["/tags/Xcode/index.html","760e6b134fbb54e326b8b5e63a98059b"],["/tags/appleOS-Networking/index.html","598c20ddaf3fb281890f0660595c6d0e"],["/tags/bugly/index.html","e3505e21770d4938672ea2ac3c83eb18"],["/tags/enum/index.html","984f554bf814c1296231375535a75132"],["/tags/gin/index.html","0a91abc5cd651cab5f15bb08bf10e27e"],["/tags/git/index.html","0d8963f4b52c1548df25f6d3e94fce2f"],["/tags/hexo/index.html","857363b811c98ec5a92b6bf5a057597a"],["/tags/iCloud/index.html","a2bfa5aaec4fe80b69e8c37fc8aff7d6"],["/tags/iOS/index.html","4fb63542d98bf15b2b4fed0da3ddebcd"],["/tags/iOS/page/10/index.html","728a8b35906e9eaaa6371ebc8c0df0ca"],["/tags/iOS/page/11/index.html","b13bfdf0d191d7959d73d233773ee946"],["/tags/iOS/page/12/index.html","64d42c98560ba4e3b6690c028dcb05de"],["/tags/iOS/page/13/index.html","a6920e628d40679906627692984dee6f"],["/tags/iOS/page/14/index.html","eebcaad51640fa544d2e6cd97b9d6a07"],["/tags/iOS/page/2/index.html","6cc419f9b9a782716b5997c1ea032c33"],["/tags/iOS/page/3/index.html","15096c2bb64450a2a040ec53a487e798"],["/tags/iOS/page/4/index.html","2ad4bfceffd355fe2155c9a698136834"],["/tags/iOS/page/5/index.html","5d4d9d550daa6e2959863b2f65fd6f3e"],["/tags/iOS/page/6/index.html","327aa18b8e51ca87bb2271bf75d05ab0"],["/tags/iOS/page/7/index.html","2c433accdb7e516ed0b94b82fdd1c76c"],["/tags/iOS/page/8/index.html","7a3bd27d9aeaf6ec8db05e12941802c5"],["/tags/iOS/page/9/index.html","22736cdd3f6e33b22d861bd70e18d10b"],["/tags/iOS面试题/index.html","dd2fdc24355eacc0f71afcce6c07f194"],["/tags/index.html","d279d9089d7b979088646e42755e40a9"],["/tags/interface/index.html","4666b62da4e05da0394fc289dbffa50f"],["/tags/non-optional/index.html","4650a91b231d39a0230e9a6585d396e4"],["/tags/package/index.html","8e41bcc4b96fcb673bdcfe1e632e2c31"],["/tags/random/index.html","81a927d25c26eaabbf8324f02595f2f1"],["/tags/transition/index.html","77764e53d0b7bdbd50a75b8186e9b545"],["/tags/三方类库/index.html","b22e9f1d53fc43e517886bfeed50c60b"],["/tags/依赖注入设计模式/index.html","389b7c798a82c7bf605eb3b9d1f80a4b"],["/tags/值类型和值语义/index.html","cc48348ccf4a2d0b6ff8152fb5e3d09f"],["/tags/内存管理/index.html","0acfc862ddf23cc34f242974c9c85fa8"],["/tags/冒烟测试与回归测试/index.html","bc69fb360c67826cac52a6de8c4aa64e"],["/tags/函数式编程/index.html","c91fda64183203f5db4e5d610bf6b329"],["/tags/创建博客数据库/index.html","efc7e0e797059effe9433d6a72789162"],["/tags/初始化模式/index.html","9337c9e7a8ff0f6f90b8fff2acb2f4a6"],["/tags/单例模式/index.html","2d7c6d14ddaf1f48457a60fbc3ba8849"],["/tags/原型设计模式/index.html","16839b3cf88fdd86c4e97aff8efbe30c"],["/tags/命令设计模式/index.html","738998a5312ff905703370413f4ecf2a"],["/tags/基本控制流/index.html","e906ca631d4a3e56944ed295122fca7b"],["/tags/基础语法/index.html","20a793a873180589eb12ac505f0aeae5"],["/tags/外观设计模式/index.html","0e04a4821c2a9c4c03a47b28f1991831"],["/tags/委托设计模式/index.html","58269e1a164faa6ee9b9ae00414a6c70"],["/tags/子类化样式/index.html","8dc116018b4f1cb77e36a0c2588f834a"],["/tags/对象池设计模式/index.html","e5c532322f9c0d7714df03f0a83785f2"],["/tags/工厂方法设计模式/index.html","818cfa7aee0e6f5306c3a6f2c6a01b84"],["/tags/工厂模式/index.html","a435ddd12391143dcd12baeb9e8eae23"],["/tags/工厂设计模式/index.html","bd877fdab90b052d0f35dfe11bb5e9ec"],["/tags/开发技巧/index.html","044723bbf510beec067db204f3969203"],["/tags/开发记录/index.html","8f10768dba46c57cc71c1c26df7eac36"],["/tags/懒加载模式/index.html","661252dd9ed34cced8d45a8af7754590"],["/tags/抽象工厂设计模式/index.html","a30d1fd468002cf584bf7d2ece95e2f2"],["/tags/数据库/index.html","70ea8cf819703b039e49d3c2b87eba74"],["/tags/构造函数/index.html","fef294b42607e93d8e0d0f7e20287fa3"],["/tags/架构设计/index.html","91726dddce00eb946d78a4695d83494e"],["/tags/模块化/index.html","609147cde273953b1512eae44b0c2fa2"],["/tags/模式匹配/index.html","486547285cda912847e3e64b89fdb52c"],["/tags/环境搭建与验证/index.html","a5d300659db941b9f4121dd6107e9b7e"],["/tags/生成器模式/index.html","01c455168aea0a573d57c448aa3eb1c0"],["/tags/用户体验/index.html","dad13ac45d7adda699e270216425bb05"],["/tags/用户协议与隐私政策/index.html","2a1e95ec2868d614fc3010d672b5b369"],["/tags/类型与操作/index.html","806cd68c6b530b248b017b4a6e749983"],["/tags/组件化/index.html","1b8b37482486e023fb76f35eb18d906c"],["/tags/自动化布局/index.html","56d6fb92c12adcefdedc1264fbb9f154"],["/tags/自定义UIView/index.html","6217697226cbce6b8e4c1669e0479cb7"],["/tags/自定义转场/index.html","f292832867bbd49175d9d282466f54f3"],["/tags/自适应布局/index.html","7ff1efbae6b5393b8b00cd15058ef2b4"],["/tags/表达式、变量和常量/index.html","748625eb4b22f702be576e5ff3bb125c"],["/tags/设计模式/index.html","8f99d6d0611f38ba589e07ecf48a02f7"],["/tags/设计模式/page/2/index.html","95f8f7c688a630ade800ff63b767032b"],["/tags/设计模式/page/3/index.html","a88a9ac30cf9e0c02fe552347b53d8f5"],["/tags/访问控制和代码组织/index.html","809e4fd48b70f08222aa941fdd25c2b7"],["/tags/运算符，下标和键路径/index.html","fbe7d1251602813eb0fb18ea080088ca"],["/tags/迭代器设计模式/index.html","a30875dc07e96381498dd28ab819181b"],["/tags/适配器设计模式/index.html","021b1fc915dd4c17ed916ac01e047cf6"],["/tags/逆向/index.html","d5ec32f25adb48404eb41fb116a47758"],["/tags/错误处理/index.html","5c72c9629d69fab41b9fec0957d50797"],["/tags/静态工厂方法/index.html","cfb48c1b0b0da8de00ee2ffd1bd54b85"],["/tags/面向协议编程-OOP/index.html","4462618878ab7fd624f05539d33c1a9b"],["/tags/高级主题/index.html","a49b4df1688e14805ce09e07c8af8a17"],["/tags/高级协议和泛型/index.html","787cbee994422b450593091f9e198a50"],["/tags/高级控制流/index.html","c5a7c0da425bcf76b07a1d8f1c2c5322"],["/xcode 常用的快捷键/index.html","7385980b62fd31f45d8a3bf5f9c799e2"],["/为iOS应用构建输入表单/index.html","f4023614720129e5d0b4b823631172d5"],["/产品开发的幕后花絮/index.html","93694824627da9427dab6e0a1deb4dca"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","779819be1f10f9a79b094f3dc3b8749d"],["/冒烟测试与回归测试/index.html","fda0753ec6c1680891422617d6a489ba"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","44130c4e90a9b0adbec97b288b6a7e8e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c7da0ae31fdf09c9374ce417910cae04"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c355858a25ed367232d5df8473bcba61"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","07183fbbf7d67559fb489892b2bec6a8"],["/在Swift中创建自定义集合/index.html","0cec82227ac14d2606f997f9ebbe79a8"],["/在Swift中处理非可选选项/index.html","07c0c7cee1429256070836a36b0b1c69"],["/在Swift中生成随机数/index.html","31c1d59b9f8381088f752e5e6b5cecc5"],["/在Swift中重构单例模式用法/index.html","d51c153c4651e74af1a9f0d268ce3536"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","1e08f283f1598ec9c4f9b61b029b479e"],["/如何为VIPER编写服务？/index.html","fc932046b8aa4b4e9721843a1b950485"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","7c591633fd62ebeeba46f024fa1ab048"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","e3f87254f8f1965a4fa05572cd56ebc4"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","19a1b195aef6ce58405619b92ad399be"],["/如何使用VIPER构建SwiftUI Apps？/index.html","05d73d6b190363910db7f06658462ea9"],["/掌握VIPER架构/index.html","79cf5d13eb2f77d06c9829ad33a1ee0a"],["/揭秘 WordPress Hook 系统/index.html","df442c43527a290179524b1dc18dd560"],["/比较工厂设计模式/index.html","a6b9eb071ec795bce74ec7c005e3119b"],["/深入了解Swift中的Grand Central Dispatch/index.html","7eb3233d6f0bb206121134ecb0dd7cbb"],["/深入研究Swift框架/index.html","a7a1195ffdcf1b31f804e27b9d66326b"],["/组件化插件化与模块化/index.html","f2fc9675f1e178e266b774f38d54b0b7"],["/组件设计与SDK开发基本规范/index.html","da5849ad05d3013a350f7ad276c32c66"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3daf4e7f0b82bd3aa79b259d27bb6704"],["/选择Swift而不是Objective-C的5个理由/index.html","ad61cf3e029c3f63f62602d9e09d3193"]];
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
