/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","67ccf9c2923f54becb81f20c0f0c0eb2"],["/2020年iOS面试题总结(三)/index.html","c3ce8d2c934bcc58dfd0b880378954f9"],["/2020年iOS面试题总结(二)/index.html","d48b582a2ac3fca99f3b0ff59ef85694"],["/Advanced Swift系列(一): Swift 简介/index.html","85a667c35d406a2f952a63a24489198b"],["/Advanced Swift系列(七): Strings/index.html","890a762559186bd0ec8527da91231dbe"],["/Advanced Swift系列(三):  Optionals/index.html","6c272542246888bf96534335751faf47"],["/Advanced Swift系列(九): Protocols/index.html","3a9fe133c5e8d02c3f6beb08e8bdc3ad"],["/Advanced Swift系列(二): Build-in Collections/index.html","e0b484053c74dddea93c990c40617304"],["/Advanced Swift系列(五): Structs and Classes/index.html","d0eef0f8a651d5a4a3b43591d9b39d27"],["/Advanced Swift系列(八): Generics/index.html","f8dca33c2a368ea9498938b319508a36"],["/Advanced Swift系列(六):  Enums/index.html","3aa48c3df1f2e225f1588f645d4d1553"],["/Advanced Swift系列(十): Collection Protocols/index.html","74efb3b792a17555ddeb3de267dba3af"],["/Advanced Swift系列(十一): Error Handling/index.html","e29542dcc03d60f56e45422dc104b97e"],["/Advanced Swift系列(十三): Interoperability/index.html","41457d8ed2f46164ee3661920424ca8d"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","55fc931ca8173c5280ac03908e9bfc36"],["/Advanced Swift系列(四):  Functions/index.html","406a39762f82977a2765f7da21fcc945"],["/App Architecture系列(一):  简介/index.html","d88cd9ed0afee1d424106ed02074be72"],["/Functional Swift 初探/index.html","9fa5bb602d3f66ddd24ecea7851a27bc"],["/Git 使用小技巧/index.html","568ee3adea034e0da477611564717935"],["/Go 基本语法初探(一)/index.html","d1722f73c8464cf830903e3c49074342"],["/NSCODER和SWIFT初始化/index.html","7e232752f71ef76551e9650b205f2318"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","1d4831bd56d8647bf5a34dd71e33444c"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","690adb631f5b4e2235907d8e224e0a94"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","969ecbfbd65602654e6388b0b6a974b0"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","679f960587d5d6bb701e97620604389a"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5fc74d3facaa905a5868251348abec9c"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","a0f7edf3f147e1c904baea93c4b7d0c4"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","8b59b1b8c4aad5affc45afbb75d1bc1f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","67d6125ba6e02ff151d5893fb08b6753"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","45cb38bb5fffe420972b84a3cea69d73"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e165fc840caa5c684d16557caa666ac9"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","f3aafacd03b08fb73ff0eb4c640cf561"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","239c7532b916cb1bf8ae2bb6cd7b6b30"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b0101f31c1991674eef28d1c2d5c92f7"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","a44f985a7be5dda28ffc5846b5f5d1f4"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","26663ea99099280f2486a272c39cc539"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","7a466e6029e5680fed50f8011a7035dd"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","025bfd8a54cb36bf90a64de4629175df"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","fda255f6dac9e6bdbc9f68bc735f4ac1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","15c6dde4e19351413a446b8e971f53e5"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4a65b005dec14fff3bfd6e6adb7cab75"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","92fec8d07bb82ee14c901e1a718bdfc4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","af4c2a44eeba8756eb2230ec0686e0bb"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","23d56208ce1595470aab86bc63d87164"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","251a61375a808095ac48d02532ee1039"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","9281c6da372b234755482c5faf67b06a"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","ecb46052578874bdc4c5ec80583c0842"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","26d7ad6320c8474358a1e524ccc32b1c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","21ef6339479d32c0cb87ff8af826137e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","e6858be7246dbb0e35149484e827d26c"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","186c09b90a4c4cc93c7bc1c6150d80ef"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","b389788ee33ced91650c8e37b61969ff"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","a9af2e0acf23d058aa0ff41381960c1e"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b7e3f80aacefbccb284c82527082f245"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","3f687b35a14a4b4bcfa4653a06dfad5b"],["/Swift CompactMap vs flatMap：差异说明/index.html","93b87bcc51bad58296768f8b26ead485"],["/Swift Grand Central Dispatch 深入实践/index.html","f0627ccd523ca5dfc1496deb94102db0"],["/Swift Lazy属性初始化/index.html","5042f95ddcbd00203913c100d2230f35"],["/Swift Promises 初体验/index.html","1a4218690951984fd5cca64b3ed2e6cf"],["/Swift Promises 探究/index.html","dc90ddd63733894f6ca6a8a371edb628"],["/Swift UICollectionView使用指南/index.html","f7a14a8078edb8145f56524f187a1455"],["/Swift URLSession && Combine framework/index.html","7f72ec0c37b661ef3b654c15b3fe6535"],["/Swift tips/index.html","a03e3a80aa74235ed6bdc39974dbe097"],["/Swift 唯一识别的视图/index.html","28d1da4faac86332b584377ef319a12f"],["/Swift 如何学习现代UIKit？/index.html","ecbb4aec3ffb7cf853e3babd8f6a1b80"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","1b51904a3929d3c543d463ac09efce1e"],["/Swift 用 compactMap 替换 flatMap/index.html","b4b06d1fc6bf575626189125f91d7d71"],["/Swift 选择和播放视频/index.html","2b01280ca94916a778cf8a59ffd78776"],["/Swift中UIColor最佳实践/index.html","5deddb81990c8fe7d9f315ebca90bb2e"],["/Swift中快速简单的工厂设计模式/index.html","ff29d3add15371470c0f91c67730ab24"],["/Swift中构造函数与静态工厂方法的比较/index.html","5fcf170d2ae1453c03e6bcf92d2c6638"],["/Swift中的UITableView教程/index.html","503e962f79a428aa1491cd581662c341"],["/Swift中的懒加载模式/index.html","d7b14e77124f26d7b6352de28649d1b4"],["/Swift中的模块和挂钩/index.html","23b15a50501b4f20a2316faeb0ff9618"],["/Swift使用布局锚点添加约束/index.html","66fd7ab3334df4709a520d32073e6ef5"],["/Swift依赖注入设计模式/index.html","c8e53d1e44f4cefc0948cdfa01ddbae9"],["/Swift关于Dependency Injection (DI)/index.html","b8fc69392eb0e5a8cbaa09dc79e711fc"],["/Swift初始化模式/index.html","22e44be9f0c50509dae691116c8e2146"],["/Swift单例模式/index.html","b17587f6147e168bda28ab4aa1357b8b"],["/Swift原型设计模式/index.html","57e1395fa1fad278bb3821565299bc01"],["/Swift命令设计模式/index.html","6b2dc4ecb9e69456fc9d4bf12527044d"],["/Swift外观设计模式/index.html","09b9d146700a259dc4cde251d343f558"],["/Swift委托设计模式/index.html","adf68d33a153aa719212dc5d5cc57989"],["/Swift对象池设计模式/index.html","03d0a70ae7f48ef96f96c2e7ba41a5a1"],["/Swift工厂方法设计模式/index.html","5fa4915a97157042a47c8613d1fb7480"],["/Swift带闭包的懒惰初始化/index.html","2c2457cf5ba99b0bb590170fcc48842a"],["/Swift抽象工厂设计模式/index.html","ca6bb2d792ba7f82c5c3ab57548b92a2"],["/Swift掌握iOS自动布局锚点/index.html","55caeff73d7977a25311bb60605f9586"],["/Swift支持旋转的自适应单元格/index.html","a5db5a76a4ba73aaabb4c588bb689840"],["/Swift枚举值/index.html","9ab7c66fcbac4882db73e029a25fe25a"],["/Swift生成器模式/index.html","985e544aa3b832a73df63dd0699bc7d5"],["/Swift结合Xib文件自定义UIView/index.html","9e7294a51be2815cb732aa59e7985473"],["/Swift编写的20个iOS库(一)/index.html","b4a5ae5986879fc0deb56636d772b9b3"],["/Swift迭代器设计模式/index.html","a08e039d6ee78ada768b948d3081edb4"],["/Swift适配器设计模式/index.html","097e73e6f9617c44125f66f721f4715c"],["/Swift静态工厂设计模式/index.html","cfad890c95f0b684eb050c664be5d670"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","33c0295534079d510678e4b6eda2ec99"],["/UICollectionView data source and delegates/index.html","72a08ee0a924f739430e2790658a4405"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","481ea350ce086c59190fd4fe9c5d5b73"],["/UIKit初始化模式/index.html","61e6955f1ea15d288da6faa68c3b794c"],["/Ubuntu18.04替换国内源/index.html","860e2188ce4ae52c4ede0315f2a59c7e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","0e981ff91830ea348d02dfbc5e74d3a4"],["/Vapor系列 (一) :  Vapor 初探/index.html","6855de0915c17f18667903a435caf995"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","8e50048606462bd6b6be5eba1fa25e2e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","d98f26a0a71a99a0e3d0b91ebea78e08"],["/Vapor系列 (五) :  使用session进行authentication/index.html","90a7c6e050c226c6a7a508e7a534ccef"],["/Vapor系列 (四) :  创建博客数据库/index.html","c054a9f1ee80677673ca12f547776292"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8f455a1fad9bc31e940f0ebbacb0cd91"],["/Xcode扩展/index.html","da81fe9ab18b4fd98b8af3980bee27f8"],["/about/index.html","a885e68c2701bbb50ca0d18908d974e6"],["/appleOS的Networking示例/index.html","3e4d66476a9a1019b35c241975a58015"],["/archives/2020/03/index.html","bc4070c7d83e56f70feb1f7340e02dad"],["/archives/2020/04/index.html","ea271e3cd582e7ff68c9482fc82ac954"],["/archives/2020/04/page/2/index.html","6e0ba4a91138b610d32ffb5f8a107448"],["/archives/2020/04/page/3/index.html","6d9ffa7847958f5bca3b4c0842e89c59"],["/archives/2020/04/page/4/index.html","7237e954409ce0d10539b747d9ae8470"],["/archives/2020/04/page/5/index.html","b36817f1af6aa6e5d0c00caa9821b480"],["/archives/2020/04/page/6/index.html","9fe11eea9fc42f61be87dd8a537a929d"],["/archives/2020/04/page/7/index.html","8364dee8d40d29e1ce4a7f5a2e613662"],["/archives/2020/04/page/8/index.html","80551c193fe1b806a09348cda27008db"],["/archives/2020/05/index.html","15e42f4ffe7715498dd5a81ff995d987"],["/archives/2020/05/page/2/index.html","f8a9525fe9badbdb490e57cf19393fbc"],["/archives/2020/05/page/3/index.html","08347548593186d202593305e28f1ce3"],["/archives/2020/05/page/4/index.html","cb254f941c0883eda790c1ef3dd4addb"],["/archives/2020/05/page/5/index.html","bcc4ff58a91a69d8a2a1e3ccdbaaf840"],["/archives/2020/06/index.html","15caca6bff67c63ea249ec973708fc0d"],["/archives/2020/06/page/2/index.html","36028dab4ac8436073bf0bf5352aedd3"],["/archives/2020/08/index.html","bb8b11d7f7b8d196428e83564526eba0"],["/archives/2020/09/index.html","b89e56e8ea3aba339d1e5136c2448d1b"],["/archives/2020/10/index.html","60b7b034b5476952c66d89de9da086b8"],["/archives/2020/11/index.html","b827d23e7b7dd6d54aa2ab30bd0addce"],["/archives/2020/12/index.html","aba9219a1645953b3272195b11fa6d66"],["/archives/2020/index.html","ec8ca2efad1b32aabc3f3fd2de109022"],["/archives/2020/page/10/index.html","d2effeeb8d055a3a815bdff506fc9ef1"],["/archives/2020/page/11/index.html","220249b7dc984f4a68ae82e87e05f45d"],["/archives/2020/page/12/index.html","ff01888ea6e3d365aa3a99aba26bc227"],["/archives/2020/page/13/index.html","98a136e683304d033d07363f484a777e"],["/archives/2020/page/14/index.html","25bd63a1f308544834e0b2dc2dddd624"],["/archives/2020/page/15/index.html","7247656a439c84c853dc31441801e217"],["/archives/2020/page/2/index.html","d3b89e0df1eb92a77d148e3190176578"],["/archives/2020/page/3/index.html","2b29bae15ae11d0217cdb47eaba903d0"],["/archives/2020/page/4/index.html","1f3c75b37fb448a50347b4467872eee2"],["/archives/2020/page/5/index.html","cad1fb4033d9fad381f1d4ed131ed3a8"],["/archives/2020/page/6/index.html","91cb3fdeb8a0f8a046106d87964aa1b2"],["/archives/2020/page/7/index.html","d52c6a851a60ef77aaf2e4c3a5766af1"],["/archives/2020/page/8/index.html","3445118f30139ef32c45d90f09319987"],["/archives/2020/page/9/index.html","935ce7225761476084335bdc9a3787d5"],["/archives/2021/03/index.html","e810adc772e436271a96ad02800a18f4"],["/archives/2021/04/index.html","0ce8111b797f2d3f5c4d81c29a58c949"],["/archives/2021/index.html","3db3c7c0e55f71913d646f6074c42032"],["/archives/index.html","cc9f1b4cf72371ea2f13e281aa08c2c3"],["/archives/page/10/index.html","b31bd38c2218671b74b83e59a6bc76a6"],["/archives/page/11/index.html","66074ee6634a9c3aff531eb6988d8c6d"],["/archives/page/12/index.html","5976fad38b69f6513c907cec38ab6acf"],["/archives/page/13/index.html","d256f09b13e2df76d9ba46a94a36bb38"],["/archives/page/14/index.html","b2fb5dc279dd4275d5663f418cbcab89"],["/archives/page/15/index.html","1aca8753c9dfdd1b60de8332ba838122"],["/archives/page/2/index.html","eaa058a2db21f704201cedfeabd0c263"],["/archives/page/3/index.html","d875384b33b9bd3b5ff50a1a4e7e3b1e"],["/archives/page/4/index.html","ed0c9d7103b2a60997eb1f2f25ca8311"],["/archives/page/5/index.html","d509efd2d3b98396504fcce67751dedf"],["/archives/page/6/index.html","fd4e948e9e13292739befb78c7f3f7b6"],["/archives/page/7/index.html","9d2d22bf60e02cfe2a17972a1859302a"],["/archives/page/8/index.html","58a8d949a6c7652b43328508c166f8f0"],["/archives/page/9/index.html","b6d200879da2a329c9b7270ea3acdf98"],["/bugly 上传dYSM文件小记/index.html","fa995d297789464b6a84068dcca6de98"],["/categories/Advanced-Swift/index.html","faa6ddef0632806e1846fd3b8fd94f9e"],["/categories/Advanced-Swift/page/2/index.html","c1ecba0b8065cdd21d9118b69e497f6b"],["/categories/App-Architecture/index.html","b3d7407d3dcb8986442bfa98c90fe911"],["/categories/Array/index.html","5d3696863538acee21b036ab447c3c12"],["/categories/Codable-protocol/index.html","96a3ca279a56012829da07b2341fd1a9"],["/categories/Combine-framework/index.html","a51669a527de659c95f700369c537176"],["/categories/Combine/index.html","126bf35fd717a17362434e6f6965f383"],["/categories/Go/index.html","64e05793f857877913bb702a7e846504"],["/categories/Grand-Central-Dispatch/index.html","510424295de72167d538f0f2c5e21a57"],["/categories/Hexo/index.html","4b6d9afcb64df5faef5b82e524c0719e"],["/categories/Homebrew/index.html","33e0bbf087fc73bda54555406c1a087e"],["/categories/Promises/index.html","9ceaa83c99d9eb48ffc4f444e3db911a"],["/categories/Result-Type/index.html","a41d60c158ef54e269788c9e27d4acf5"],["/categories/RxSwift/index.html","40fde98bce5f140056273d3618c05fbd"],["/categories/Server/index.html","05aeddc0d1773d96f5a17ae137927a9b"],["/categories/Swift-Apprentice/index.html","c7e02a25f2cf4185c6b994b21460b6d0"],["/categories/Swift-Apprentice/page/2/index.html","216e69450cae9fc7195256381192085a"],["/categories/Swift-Apprentice/page/3/index.html","9ffd86834d41d14ff1e6d6d03253bdf2"],["/categories/Swift-源码阅读/index.html","ac514effd0c0cf423a7b4ade8ff0e49a"],["/categories/Swift/index.html","775be17b0ee30beda7c62d0b29253e62"],["/categories/Swift/page/10/index.html","a4439949555ee050f6f936bb6c892030"],["/categories/Swift/page/11/index.html","f6f89d24fd0c52261d21fd6d6d09e7e4"],["/categories/Swift/page/12/index.html","566d5e9c4f254f5b6d2a2a8f9f90483b"],["/categories/Swift/page/13/index.html","0625e42da9b5cb67dc11c0e8d9f7a6d7"],["/categories/Swift/page/2/index.html","5984ff332408d275da66bda1ffd3bc54"],["/categories/Swift/page/3/index.html","70c98cbc8f3eae93c4821adf1d445d95"],["/categories/Swift/page/4/index.html","49701f3f1a0ba35caef019f499032313"],["/categories/Swift/page/5/index.html","bc1d4f982664c8288f9c203f4b1c2097"],["/categories/Swift/page/6/index.html","2737f4f96e6f6cea8ecd4cbcaf5efdc7"],["/categories/Swift/page/7/index.html","af76725bfe2dbc816c17d0f9dafce149"],["/categories/Swift/page/8/index.html","8b0fea9a6d045fb66753c5df1eaf504b"],["/categories/Swift/page/9/index.html","52060dca983d67ea35d3f6d6927fa5aa"],["/categories/Swift5-2/index.html","04b94080163c59a21adab1994e9866af"],["/categories/SwiftLint/index.html","492e16cb88314242278efc09cd1564be"],["/categories/SwiftUI/index.html","4708eed92850239305432a46d38a49a2"],["/categories/UICollectionView/index.html","04dd02862910266b6790215abac5080a"],["/categories/UIImagePickerController/index.html","fa268f3512be70157603df13e2608ed6"],["/categories/UIKit/index.html","9a6dc658c6ad8603af1c8f1e75958209"],["/categories/UIKit/page/2/index.html","edebe1f3a5b576cebdef606b87ccab2a"],["/categories/UIKit/page/3/index.html","fd272357285d0e6620c45b98b00ef48a"],["/categories/UIKit/page/4/index.html","e2b2c8f7e5c955c9af28d78b68d90057"],["/categories/UIKit/page/5/index.html","06cd0fa2965c1318fcbaefb46d81900d"],["/categories/UITableView/index.html","760dd2ff3c57a4329edfd851f6fb2dff"],["/categories/Ubuntu18-04/index.html","02d502f5cc4ecb6227c5a7097744087b"],["/categories/Ubuntu软件源/index.html","1d9de7274e28f75cfc5d548f8b7bbd49"],["/categories/Uniquely-identifying-views/index.html","87470146442c5e2c0a3e81637b18a5d7"],["/categories/VIPER/index.html","152f34e0c59b79a12b97a42f58d297d1"],["/categories/Vapor-4-0/index.html","a113acb9907b07543fdb4b9607846149"],["/categories/Vapor4-0/index.html","72240b46409d84d23685bfdb6e986b5c"],["/categories/Xcode/index.html","cd5bc4eeeac58c78353bb7e87f45a4ed"],["/categories/appleOS-Networking/index.html","c506fb63eadf8fe33a9409b811304bec"],["/categories/bugly/index.html","b6056e7feb92eb8d1a9cb0fffe970f6f"],["/categories/enum/index.html","075e2b1a4a05f196261b17f2078a15f0"],["/categories/git/index.html","f60c16be1ee32cac65857e631bd6f089"],["/categories/iCloud/index.html","4510d14f1b2911488a60387c4d70e283"],["/categories/iOS/index.html","2464b976ccaf39754806b928b43455fc"],["/categories/iOS/page/10/index.html","e83827ae0751d39dcf000644bc01ad7a"],["/categories/iOS/page/11/index.html","66995e22de7400ba52c9830458afd983"],["/categories/iOS/page/12/index.html","03142c2e5d7c4c6644cd0eaf71174bd5"],["/categories/iOS/page/13/index.html","39a746d92d0a01f948b26233d9ca4f31"],["/categories/iOS/page/2/index.html","3a73ec2522a4215c00bc2b4bb6c2875c"],["/categories/iOS/page/3/index.html","1a2c5784533070ab96ecdb5704f74f0c"],["/categories/iOS/page/4/index.html","43bf45049b7044c16cc5cc8f430168f8"],["/categories/iOS/page/5/index.html","cf6a0b944a784cd1fb64e550bf2a6787"],["/categories/iOS/page/6/index.html","f7047d6d71739115ac9b16d6106ab7b1"],["/categories/iOS/page/7/index.html","3578499904cad6e21de6cc41f6ef649a"],["/categories/iOS/page/8/index.html","3d96964c1c9f1e48d912dc7b4fa4b5fd"],["/categories/iOS/page/9/index.html","f4ed5c0c05f157aabd06a3cc6edbf11f"],["/categories/iOS面试题/index.html","2b82fee1267b67abe23d88cbba8a2157"],["/categories/index.html","3e4fbd6166230e9610d4d6ebade92297"],["/categories/random/index.html","57a29c902dacb03d1232b592e9c3054a"],["/categories/三方类库/index.html","8f9cfcf95a267682a426ca0888262623"],["/categories/函数式编程/index.html","486bad56c262dd6216ec4a148e691f8d"],["/categories/子类化样式/index.html","a6c51ee1dd0f3c49e249826da29c3e51"],["/categories/开发技巧/index.html","670083d57c359f0e36c2eadaddc137d4"],["/categories/开发记录/index.html","6f1500a56ebd2f308eec24fadd52e530"],["/categories/技术支持/index.html","f765144772f0cba5794318d780e0c2c8"],["/categories/架构设计/index.html","417f44d8b73fc79ab03b0790974018f8"],["/categories/测试/index.html","090569dfde150ac452c33cbe0f30ab53"],["/categories/用户体验/index.html","31d3675b569d92aaab76f552db95aaa7"],["/categories/用户协议与隐私政策/index.html","d3c64f1b5ed891c5a8ddcafd73b58aa4"],["/categories/设计模式/index.html","de1a962cd10a3a4dda9888cc62b2d9fe"],["/categories/设计模式/page/2/index.html","33f103ef6acf744abafac14e5ae7c310"],["/categories/设计模式/page/3/index.html","5241c9a0082bd0d15ab0864808e13d04"],["/css/main.css","7d8cfcc6ad4285f0ca3b4b28d24455ed"],["/hello-world/index.html","9b579b8cdf8e47beb22c33f0f691f74c"],["/iOS VIPER架构深入实践/index.html","bf2a1be24e6bccdbc01bde020ff3f4ce"],["/iOS 自定义视图，输入表单和错误提示/index.html","1d2863f086a404cfcd15a5ba81f0724b"],["/iOS如何使用iCloud文档？/index.html","b7be3bd93f985fb52fa368f8eeaa4303"],["/iOS子类化样式/index.html","3e1f6bfc37c74e53cd241032ce9b88e7"],["/iOS开发记录<一>/index.html","7667ccc62a69009da9d99c299bc2a062"],["/iOS自动化布局编程/index.html","b46e4c0ab6900875bde55a0d5492ae57"],["/iOS自定义转场(By Swift)/index.html","6ab6be90d8b13f1553d823f6ee035593"],["/iOS项目架构：使用VIPER/index.html","8bf7aaca9dd4bb1e5016593785ab123d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6243085063b3b8395c144f8704c83c2a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ce6e1a224d41865cdafc1aa6ef9d9cfe"],["/page/10/index.html","6570a191ce438d2579f2d99e5ee436fb"],["/page/11/index.html","dfbc08d6d0477309910c3a8524ae6120"],["/page/12/index.html","e813709c37c4e7e76775c5fed649ecc4"],["/page/13/index.html","78f75842dfd31b9e88e86a3e43f7e824"],["/page/14/index.html","4d0f79e22fde323734d63351ec0076c6"],["/page/15/index.html","7184622843672520cb22ec2bf1418e7b"],["/page/2/index.html","9f3fbf9afef26a47c65ae6a388a545cf"],["/page/3/index.html","abc72a7ff5317123972137eff192acff"],["/page/4/index.html","6c542e7068cf5c1a5a102b081ee0c23b"],["/page/5/index.html","61fbda411340e8c12f45f2e984b97f36"],["/page/6/index.html","ec63dbff6ae4c775a2131ae8f4db592c"],["/page/7/index.html","a4210793721b61abd52287c3cb48c6d1"],["/page/8/index.html","376d07501d818531788d8d0b1e63b90a"],["/page/9/index.html","e38d8fda61698d85f2ea992c79fc2da3"],["/schedule/index.html","633f636abf728f9fd4160b2c6a4073fb"],["/storyAppPrivacy/index.html","c6fd21c3a96f28ff66926247be98c06c"],["/sw-register.js","357b5790a327c670f69e22101531481e"],["/tags/Advanced-Classes/index.html","a46f17922ed02bd05e9fc748bdb855d8"],["/tags/Advanced-Swift/index.html","7d3be6b94792ef805e78e28bced92b47"],["/tags/Advanced-Swift/page/2/index.html","1980567f71a7a819e2715d8cbb4e94cc"],["/tags/App-Architecture/index.html","c65aaddd104e17834b75c8ab946a57fd"],["/tags/Array/index.html","7a5d2e60f4edb6de6915956d72b11df3"],["/tags/Arrays-Dictionaries-Sets/index.html","473c806fecf7b351bda6ed46e1a90d35"],["/tags/Authentication/index.html","3cf800c67ce108bf2743ba4d2f160b4b"],["/tags/Build-in-Collections/index.html","75a2d9cec6e6d749c67d3708ac34d9fd"],["/tags/Building-Your-Own-Types/index.html","5a84bc8f5f74ec3825d202a9d1ac9248"],["/tags/CMS/index.html","ac947eced123dd58128a0afcd61c5cae"],["/tags/Classes/index.html","fcfac7c1472f128bfb3a9e72e4fca8c6"],["/tags/Codable-protocol/index.html","63e6441da2e2b0a034f75673a6aaf011"],["/tags/Collection-Iteration-with-Closures/index.html","b6a6636265acf28ed55993fc5fb79b27"],["/tags/Collection-Protocols/index.html","b92bb974a7b1688bc9e0413099910226"],["/tags/Collection-Types/index.html","15e182745a1c980707daf60808acf90a"],["/tags/Collection/index.html","47c8f4b81886acf220dab8aae70618d1"],["/tags/Collections/index.html","814442d863126bd7bcca51b57b7438de"],["/tags/Combine-framework/index.html","57b8e70553c7c311f4a9af58e5faef27"],["/tags/Combine/index.html","30775b8e670b8b82e2b324899c6d882e"],["/tags/Dependency-Injection/index.html","61a7482a917b9b31a829132c4dc13896"],["/tags/Encoding-Decoding-Types/index.html","87b120e9014364a313fb6653ad03e315"],["/tags/Encoding-and-Decoding/index.html","5ff0b2c85ec0c8a796ea3e890f1ab504"],["/tags/Enumerations/index.html","1b9602267172f9f8a246834ca83f44ec"],["/tags/Enums/index.html","5fd62d2bf53b811061b5fd5cd8584d20"],["/tags/Error-Handling/index.html","421eb601f8d9919c3acc3066f92fd7c2"],["/tags/Functions/index.html","fa5236fb438b438339f5aa3db7d1140a"],["/tags/Generics/index.html","23792f1036aae443ba63039dd59d7d09"],["/tags/Go/index.html","48f56a8b699db6354e935df50691a853"],["/tags/Grand-Central-Dispatch/index.html","34a1ecf72cb89fc59337a17883990c45"],["/tags/Hello-Vapor/index.html","6872bf2f88eb5754859fc00b2b9063d6"],["/tags/Homebrew/index.html","1f39566577f2154568976aa009925085"],["/tags/Interoperability/index.html","251322223096629b858496e053af711c"],["/tags/Introduction/index.html","bdb2ccd90bef8b7bd486c814e398f651"],["/tags/Leaf/index.html","11cb09d6a53df9c0c9bf8d89e04a0da6"],["/tags/Methods/index.html","b545aba7aa5512117982ee9086d3229f"],["/tags/Modules-And-Hooks/index.html","dea3e6981091ca7d3339a54236d06e1c"],["/tags/Optionals/index.html","8e4ada7c1dcc741bad1ea074c4512ef0"],["/tags/Promises/index.html","1b1ac5759bc556214726bfb0f3a74e03"],["/tags/Properties/index.html","53588e248880e6c6601f834b473cbe31"],["/tags/Protocols/index.html","f75bb0ba269d8f9f8ed659a4d04920c7"],["/tags/Result-Type/index.html","3ef09f2a794c6829c78dc69966e3c9eb"],["/tags/RxSwift/index.html","6192c256c77c823020516a8d69bd5921"],["/tags/Server/index.html","437a64a84012427179bc4e6818fd8899"],["/tags/Session/index.html","6299575baecfd68a2e0cdb3b73d888ec"],["/tags/Strings/index.html","309e0478ece8217ea3f59661cc80b4ae"],["/tags/Structs-and-Classes/index.html","10028501b5f5bb47f3d7ec16b6a31be8"],["/tags/Structures/index.html","6a449ce60172bbb51ed688b4b8e20b2a"],["/tags/Swift-5-0/index.html","ad5be7a10e92ba535534f32be6b7ce75"],["/tags/Swift-5-0/page/2/index.html","2e700aa761310bc278a755de312018b8"],["/tags/Swift-5-0/page/3/index.html","724cc83ba5d22d5c9d7ae3cab7bbbe4f"],["/tags/Swift-5-0/page/4/index.html","776451f56e0fe72642f00c4823af90fc"],["/tags/Swift-5-0/page/5/index.html","05da2b1781148515886be164a0450025"],["/tags/Swift-Apprentice/index.html","ed704affe95c1ce13404ea7cb3ca4497"],["/tags/Swift-Apprentice/page/2/index.html","c109c35c51e15dae069b725f2339abc9"],["/tags/Swift-Apprentice/page/3/index.html","040c543de1b7870ec4923882a5b51d20"],["/tags/Swift-Package-Manager/index.html","a8342e84012cea5ba4e2427abb5dd743"],["/tags/Swift-源码阅读/index.html","a54bd9c81fb5da3b3e087b4b77e5b864"],["/tags/Swift/index.html","ca28dc53b4990bf1d765165d9c5f0559"],["/tags/Swift/page/10/index.html","ff84e13274dd64cfdb42c2ebe0024d02"],["/tags/Swift/page/11/index.html","11d19c7f7bcd7100d85933775bd3d697"],["/tags/Swift/page/12/index.html","f2c52bc0481a343f1e68e16ce6aadadf"],["/tags/Swift/page/13/index.html","44cb4ff3d2a7b9edee49aa990595dd0a"],["/tags/Swift/page/2/index.html","23960449fdd9eddcee41c6213e392c36"],["/tags/Swift/page/3/index.html","d1809517d56ab9242a71afa5af062669"],["/tags/Swift/page/4/index.html","799b4b9dae24e73575b17a659d7a07d8"],["/tags/Swift/page/5/index.html","75774dc0f561657eee3b71360aa8bb70"],["/tags/Swift/page/6/index.html","5ed6135c4ae0c51d7a2b2df5533b9977"],["/tags/Swift/page/7/index.html","b5e7ec15395841a79d1dbcf6f62b6b2f"],["/tags/Swift/page/8/index.html","6ee9b4d584c1a4595d29ea699734a799"],["/tags/Swift/page/9/index.html","660c9056276374439c61b68e8c22ce0f"],["/tags/SwiftLint/index.html","1b78849a0beb4607415e5050e6eed9e7"],["/tags/SwiftUI/index.html","d5ca827031c4b4263669d1dc6e5aae94"],["/tags/UICollectionView/index.html","08951e5029083a09b772511ada7e5bc1"],["/tags/UIColor/index.html","bac17a674b51b869b40e94123df46492"],["/tags/UIImagePickerController/index.html","de5ab71fe8177872cf880d7bdb7017c3"],["/tags/UIKit/index.html","75aae29fc393a5518e88dd144c7a9699"],["/tags/UIKit/page/2/index.html","4070c87c4fdffcb1245e3cc746d3e8eb"],["/tags/UIKit/page/3/index.html","d8a884b10dfcff9fc3ad77e91af1c090"],["/tags/UIKit/page/4/index.html","249f8b9a6be479096e128e7cdc34cc86"],["/tags/UIKit/page/5/index.html","0918ba388affcd0c0d4b37348a82d71c"],["/tags/UITableView/index.html","365173edf4b8701541177294651fc8ff"],["/tags/Ubuntu/index.html","c6d7d847075abed064dbf18fab6119e9"],["/tags/Uniquely-identifying-views/index.html","848313436966a63fad61c1ac11a22767"],["/tags/VIPER/index.html","87ba46d6b9cf6216bcaeb95afa94ab13"],["/tags/VMware/index.html","e63abb03a811c0c0b9f5a5299f0434df"],["/tags/Vapor-4-0/index.html","b4b56310a77cfe3306457a2b989cfa77"],["/tags/Vapor-初探/index.html","cc5d0d2fb0fe759b0e4bb508fd60b91c"],["/tags/Xcode/index.html","ebbf86f5e35a281e2c2316d2bb414151"],["/tags/appleOS-Networking/index.html","e45ffc9df595cda29ff77bd82ccb76d4"],["/tags/bugly/index.html","4263688a0a9d2dba95ff411747ea6583"],["/tags/enum/index.html","10ea4dd46eb084670449d1062e96fdf7"],["/tags/git/index.html","e59693f3c33dd50603578295c5f284e8"],["/tags/iCloud/index.html","a10622648c62b7a037bda695ada2c2e2"],["/tags/iOS/index.html","388abc370fd8f2a1904d15faac36c819"],["/tags/iOS/page/10/index.html","4d8bc746a10b5766ea5c3e305f62b3e7"],["/tags/iOS/page/11/index.html","37c71fc8ea14d9f6be903f61c9e73a7f"],["/tags/iOS/page/12/index.html","2765f076915dd65f3911de844197aeee"],["/tags/iOS/page/13/index.html","7fbadec72ead19ca6f105ead54aa3f0a"],["/tags/iOS/page/2/index.html","0944e5f9264b27979432e4f5d6ff5534"],["/tags/iOS/page/3/index.html","f934c7e560118daba8143eeaf41e0f3d"],["/tags/iOS/page/4/index.html","22c71d89842cb28d8f116b7d7092885b"],["/tags/iOS/page/5/index.html","88fb356bf050f0d4f625e814e98eca6a"],["/tags/iOS/page/6/index.html","184d868ae3df7153b445df2619299093"],["/tags/iOS/page/7/index.html","fbbf5e87517e5e95130a19f0dcf65316"],["/tags/iOS/page/8/index.html","521c54d8fff8947deba5efb065b42bac"],["/tags/iOS/page/9/index.html","056d9d659fb3640905e52e317fe308e9"],["/tags/iOS面试题/index.html","f063799111fd6c079c60869cadddc482"],["/tags/index.html","fb8465f92e9c37abafc72f6012b4c0f3"],["/tags/non-optional/index.html","4bf68080a024ad2e650c12ecdce547d1"],["/tags/random/index.html","64f5d8f0092bfdfee7cdc698bd8d4102"],["/tags/transition/index.html","e6decaf111404ecb759fa49736971160"],["/tags/三方类库/index.html","db10a30e2ce0487f252fecaa85583c4c"],["/tags/依赖注入设计模式/index.html","90956099e62037af936192371e40440f"],["/tags/值类型和值语义/index.html","5a0c4da477a779203e897e5be78e63e1"],["/tags/内存管理/index.html","10cf94b17cf84d3ee7e8868ac89ee889"],["/tags/冒烟测试与回归测试/index.html","9001213e603d236c511fa916e42ef087"],["/tags/函数式编程/index.html","5aa76fbd0bb2317220457810e7f7b8b3"],["/tags/创建博客数据库/index.html","0842cae110d4c541208e8e442c2995d4"],["/tags/初始化模式/index.html","867a5af9d1c4ee539a4eb6db921409af"],["/tags/单例模式/index.html","2d22fe01e058153583de93440c9f3c94"],["/tags/原型设计模式/index.html","50dfc5b0bad31876b3cf8b7e590c8361"],["/tags/命令设计模式/index.html","53befb8070e5e220120040a2d753d961"],["/tags/基本控制流/index.html","228a05bb535570995717b392334a5d67"],["/tags/外观设计模式/index.html","3eed28e062bd07873512ec657411d3c8"],["/tags/委托设计模式/index.html","8ec1b167804a0570d983807a786d2889"],["/tags/子类化样式/index.html","563897288b356e58f035172211160924"],["/tags/对象池设计模式/index.html","ae05247c8abaef94ff98444e652e1243"],["/tags/工厂方法设计模式/index.html","94a0bc2435f2c55f00bd224716806387"],["/tags/工厂模式/index.html","c33c5e45c609a10f9c97ec2e56cf379e"],["/tags/工厂设计模式/index.html","13648a1d29f1b3edb940ce4a53ecb137"],["/tags/开发技巧/index.html","e7944d6120bb541cc86d51b713e282b6"],["/tags/开发记录/index.html","97ffb487f8ef4fd5f44fb7e992be5e6a"],["/tags/懒加载模式/index.html","cbbc3199e76961e71e9f4c972d9aa8f3"],["/tags/技术支持/index.html","622f708b84380a15d0c24cb855d4f01e"],["/tags/抽象工厂设计模式/index.html","d46809c96a7abc615d6c140afe4a72cf"],["/tags/构造函数/index.html","0163989d263648352d436f8807687ea8"],["/tags/架构设计/index.html","dfad123968c742c3b6defcbc0888100b"],["/tags/模式匹配/index.html","a49c0300d1b3ad98467d50d5f59e7975"],["/tags/生成器模式/index.html","438e5c2031ab2e15a7a3824019e8460f"],["/tags/用户体验/index.html","351bde847dc2399bee0b92216bffb23a"],["/tags/用户协议与隐私政策/index.html","ba9abf0dd81e052b944845f530b0e9c1"],["/tags/类型与操作/index.html","cdc4fa8fdfa6aaeea5984ff17934aa5a"],["/tags/自动化布局/index.html","81a9cd7a73c47947568c45ae995fb3f8"],["/tags/自定义UIView/index.html","7c6969793a4542eeee82aa99b83311c2"],["/tags/自定义转场/index.html","f360e7d0598d9e972112616cac60a8bb"],["/tags/自适应布局/index.html","455ecee447479eeb6e36925cde2fdbc7"],["/tags/表达式、变量和常量/index.html","2e13569feec0cc2273bc3c50f2326a51"],["/tags/设计模式/index.html","eb45f55436cc2c70357b768a9703132c"],["/tags/设计模式/page/2/index.html","a2173e11150abbf196298ed9a79c6740"],["/tags/设计模式/page/3/index.html","5f16f55a341723b93214afb755666ec9"],["/tags/访问控制和代码组织/index.html","74dbd0d490ef65c959d310779db616ab"],["/tags/运算符，下标和键路径/index.html","b1ff039cfb3cfa5b2bf56c264d80f3d3"],["/tags/迭代器设计模式/index.html","30ef5e3fc2239cd874bcfb2f480e0c43"],["/tags/适配器设计模式/index.html","887b36df548218219a6191ff01bb91a9"],["/tags/错误处理/index.html","df5689cf43e860c5186df63c6b163dfc"],["/tags/静态工厂方法/index.html","f496475cb6323ee4c2eb5bda8d0e4406"],["/tags/面向协议编程-OOP/index.html","6b11fc6f21669165f316c3781edfd0c5"],["/tags/高级主题/index.html","5493ef7b4ce9a4d18a48daba777c54fb"],["/tags/高级协议和泛型/index.html","183487f602f6952fea6892b9ac606ab8"],["/tags/高级控制流/index.html","e2f90bfab080782982760c02f0cd0653"],["/为iOS应用构建输入表单/index.html","6f5873c8e5ad1bf485af4e7f2c49d926"],["/产品开发的幕后花絮/index.html","3ea7603b1cc1c7f9f1ad5f0ee6cb3fb2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","65f2c16b0c9e43abbdcbd321792b8be7"],["/冒烟测试与回归测试/index.html","d669e64de2521d31843e91dc4139d695"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","bf8a2bc16ce8568ad735bf18b65d33e4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4cf1bd279e720b4ba4d4c6cbad25c840"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9200f7052f4640a22bd4c592d3392429"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6f489d2295142dcffa0f3dc97febee90"],["/在Swift中创建自定义集合/index.html","326796d0bd405fbcaff83c8fdd2d475c"],["/在Swift中处理非可选选项/index.html","59c7fdfbe0e1136e24aabafcefd6152c"],["/在Swift中生成随机数/index.html","3de0f2c4d8d18315c7e70ffa688fbd12"],["/在Swift中重构单例模式用法/index.html","f1eed8d9f57729e3791d8bf5b7161c11"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","94e7a547e948802791e6000c90414789"],["/如何为VIPER编写服务？/index.html","6b7e311e9ff9d39fca94d4e09689d4e7"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c5975efba9e385034e86aed26cd83c9d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1a2f8ced4d3f4f88a988d3c9880acd89"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","f90dec7b9c3604997facd939d065b34b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","eb7ced7ab4100a58585dd4c4d161ff61"],["/掌握VIPER架构/index.html","863dcffd09bcec5d4dcfed4a57b01063"],["/揭秘 WordPress Hook 系统/index.html","119edce07cace8c95b4c2601c6b9a727"],["/比较工厂设计模式/index.html","17bf27520eda688125a9e9d4a8c1d6ec"],["/深入了解Swift中的Grand Central Dispatch/index.html","23fc48992a65d23495ef726f37339adc"],["/深入研究Swift框架/index.html","ba7b8865190bce693a832c1a4007024d"],["/美豫直聘技术支持/index.html","e16f7f0deef9cb2771b936fab1c95a35"],["/美豫直聘用户协议与隐私政策/index.html","c01de966c4fbb4359e8bf55e523f7adf"],["/适用于iOS开发人员的VIPER最佳实践/index.html","049e550c03ee30969aba8c40ce20f71a"],["/选择Swift而不是Objective-C的5个理由/index.html","f7317b958522426e8e2c57ae99832109"]];
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
