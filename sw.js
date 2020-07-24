/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","dce90d3491ed9b8d1d9f0e07164704e5"],["/2020年iOS面试题总结(三)/index.html","cdc9692938bb3ee1ffce40656c5dd459"],["/2020年iOS面试题总结(二)/index.html","377905d88e92dbbfdc6b77e507a6c6d4"],["/Advanced Swift系列(一): Swift 简介/index.html","88f2f1d39b256aeae7be09bb6fc9c016"],["/Advanced Swift系列(七): Strings/index.html","41fb211acb0771bf16ee20f825944aa4"],["/Advanced Swift系列(三):  Optionals/index.html","07578c7f1581acfe32c9e3898ddd2dcc"],["/Advanced Swift系列(九): Protocols/index.html","6647e9cffa0ee469c05af7ed57bd5321"],["/Advanced Swift系列(二): Build-in Collections/index.html","24975e1a41703d9f4be2f92ed92e2c06"],["/Advanced Swift系列(五): Structs and Classes/index.html","d162398c7a05ee23d55d7cbf7029811b"],["/Advanced Swift系列(八): Generics/index.html","c04ec4213abd629285ed889011be7669"],["/Advanced Swift系列(六):  Enums/index.html","0d3d4d9ef0f1800c45a3a76f5e4c50e6"],["/Advanced Swift系列(十): Collection Protocols/index.html","150b25c18e9c3bab6ae784c0519cf553"],["/Advanced Swift系列(十一): Error Handling/index.html","6442eb40441e2736261263a102fa0e08"],["/Advanced Swift系列(十三): Interoperability/index.html","82b6ad4c939aa237014596edb4f93abc"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c38ecf6f7d15595b76bfabc1063c9b83"],["/Advanced Swift系列(四):  Functions/index.html","0054e77e9d0c7dd3770444ed7cf6478b"],["/App Architecture系列(一):  简介/index.html","5a61565ed86af798f6d0e9c2a674c68d"],["/Functional Swift 初探/index.html","00ab646a5203f12f089ae5959ff6041d"],["/NSCODER和SWIFT初始化/index.html","283aa85058cc23b964eea36f16e3a0a8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f19a2d659b89eb924b444e1d0322b9da"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","b9aa0536c9a8ae7818bf295c749d12a8"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","eceedf85818dd320421237a20f41bc90"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","41ba8a4171ef74c1483faca473364561"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3639dca7b2402434105a26b7ce892dc0"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","527a4e73513c8d863975c74b8df9d2d7"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","06d3f69bbd60b05a16be31c95781e13d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","7659e7e321e54f595c472f7a546a214f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","c19d80aa378a0a6bd6e425ceadb34fb9"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","4697409ba3c39aaf7e9ce956df705d78"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","4f779728e759b8e42d18bf4ddf2b09b9"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","952b538bb82be07270f78baca03861b0"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","76a12e517722939405af1ed6830db075"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","b0f859174df0ec9a3fd34c5eef4b53ea"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","505eb5563365f3766582d7b36fa52b70"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","0c2029dcd58fd9baa16a24fdb1b16f08"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","f8fde2bf066a2f247c2cd6d8115d9260"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","6de0c838e1da25e1d06c0cef05210e18"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","2eea7fc8af9af58a1a5c3b3134b3cc5b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","bd89e25f25c77646537e778fd571aba7"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","ff21ee450581efdac2c5f9354f7276f4"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","6e947d17ea9a6bd0c754fdc90e61fdd1"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","1ad7491d9651b635daac639a49af594b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","d6edf1da6d5367edc0a606ecf12b955d"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","663787eda71e396bdf863f5f92884d43"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","bc9bc6d0256c7dec5be984304d0de490"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","56fe05d40829d7c67524f7582eba003f"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","b0734ec0ff07a2005d0966b2dc796943"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e65639b15f61622012bc606287a3b8ec"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","1d392aafbb18c546a27a79c7239b6f47"],["/Swift CompactMap vs flatMap：差异说明/index.html","21b6a1ed38528ccfeb6981ca6f482873"],["/Swift Grand Central Dispatch 深入实践/index.html","a314c2f91034c6756c25a83e445f38b8"],["/Swift Lazy属性初始化/index.html","ba1e3167890f9d184bbafe624e361be7"],["/Swift Promises 初体验/index.html","95d68ba751529c49c59ffea5641cc0b0"],["/Swift Promises 探究/index.html","e14374ab94bed214d5a526c7c72aadbb"],["/Swift UICollectionView使用指南/index.html","b797821cf9cb53f19798b87ec3fcaeb4"],["/Swift URLSession && Combine framework/index.html","ed27f3796b1a23b300f44927120d00d3"],["/Swift 唯一识别的视图/index.html","7fec7fd2311cbf1f5ba569659b4c578e"],["/Swift 如何学习现代UIKit？/index.html","d1346714b55f5f5276d0d8d0ae5c372b"],["/Swift 用 compactMap 替换 flatMap/index.html","6771e1db87073a385a3ad7569a0e2b24"],["/Swift 选择和播放视频/index.html","dc3c245191d05e3a72ec49bfdd024016"],["/Swift中UIColor最佳实践/index.html","988385ffad7a7e89b0c4bf73288db811"],["/Swift中快速简单的工厂设计模式/index.html","a9ee85d34d6055aa567284092bac9c45"],["/Swift中构造函数与静态工厂方法的比较/index.html","b5d3b10d4ba24b7f45e8349e24742da4"],["/Swift中的UITableView教程/index.html","96b1be4c3a4f1ea15fc6226d0bf35643"],["/Swift中的懒加载模式/index.html","1893b527488048ceec64e08340c26d9b"],["/Swift中的模块和挂钩/index.html","662a6adf0bedc3025920ce8a585ae899"],["/Swift使用布局锚点添加约束/index.html","4b50e9eae8aebcb5122becb56090b7a1"],["/Swift依赖注入设计模式/index.html","bb7b03f931876f046fbea3a25d7edaf3"],["/Swift关于Dependency Injection (DI)/index.html","45681ac755e0fffc2d02cffc7888a483"],["/Swift初始化模式/index.html","b6b5102494a5b4665c56254ad568ecc3"],["/Swift单例模式/index.html","14e53c1397e124f7ed0688650ca5d9d9"],["/Swift原型设计模式/index.html","799c91bdf5fb0c5587890d9711b0e716"],["/Swift命令设计模式/index.html","4199661fe1ee000190a0369bfa551d0a"],["/Swift外观设计模式/index.html","6d46e8aae8e9520008a6cc6bd317a6c9"],["/Swift委托设计模式/index.html","e549f3717bdf76fe9dedef2a0a16022d"],["/Swift对象池设计模式/index.html","d0333d9e6adca3240f6f1da482faaa76"],["/Swift工厂方法设计模式/index.html","14f3563fe8f6628883789781ae39dcdb"],["/Swift带闭包的懒惰初始化/index.html","15cfdb3e9546e28135b78f8ecffe9502"],["/Swift抽象工厂设计模式/index.html","84c1158869bb27954106a89310c3c3ce"],["/Swift掌握iOS自动布局锚点/index.html","85f98b746bfce0ba324b57fecea43bef"],["/Swift支持旋转的自适应单元格/index.html","7c36561564dde05665f213b988affa05"],["/Swift枚举值/index.html","c1cf47e1a7312f4b60272c5d3172e936"],["/Swift生成器模式/index.html","50ea1bd778b6f2d4896032322b439620"],["/Swift结合Xib文件自定义UIView/index.html","4a0c45854674d9d46f6979cff18fa383"],["/Swift编写的20个iOS库(一)/index.html","5bf3fdeb2bcbf9ec2d563352361d3e36"],["/Swift迭代器设计模式/index.html","bd9fd4037287c92941828086eebf15b0"],["/Swift适配器设计模式/index.html","253fc2a7bf8f1713a96999bd3d03695d"],["/Swift静态工厂设计模式/index.html","2f6ad08dd25eaf0d3b96002641d9f913"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","fba4a5bff9578a314aaace43c05bc3f6"],["/UICollectionView data source and delegates/index.html","0b91ca716ba8ac3824d4c56065ff71c0"],["/UIKit初始化模式/index.html","f6e6410c03b953d146727bf320db73cd"],["/Ubuntu18.04替换国内源/index.html","73d375c0e4e11d4856dda3a0f8f493fa"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","35778d093bc9118664c908fed797b09d"],["/Vapor系列 (一) :  Vapor 初探/index.html","3a3cbac3f7767aeba141fd2ceec6403d"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","26d9fade75e99a515fa58e2c06e525b6"],["/Vapor系列 (二) :  Hello Vapor！/index.html","b58d5f916c4876b06ee92a90cfeaf8c3"],["/Vapor系列 (五) :  使用session进行authentication/index.html","0fa72d3abef6dfa6af099a3ad795c174"],["/Vapor系列 (四) :  创建博客数据库/index.html","0e58d5c2c8d5c9e29c26f196f58d3ad0"],["/Vapor系列(六): 徒手撸一个CMS/index.html","faf38136aff2e4629139305d55246c48"],["/Xcode扩展/index.html","f89c1128bb813c9e11f3e2f44ddbd66c"],["/about/index.html","10d93f55ecc817050487c86b81e529a5"],["/appleOS的Networking示例/index.html","2474c2b53dfb43ede7eaa74a490e94a6"],["/archives/2020/03/index.html","7bc6e335c0d1d9fb901d93e5aa0a93cf"],["/archives/2020/04/index.html","484b3eb50a62ba4d26d9864f3bc13f3b"],["/archives/2020/04/page/2/index.html","24f31d0ff71dafb3c37adab0c366637d"],["/archives/2020/04/page/3/index.html","c7bd830b3eac43c1faedb6bf4d5240cc"],["/archives/2020/04/page/4/index.html","243e29168477c349a2c4772f5f54c7a1"],["/archives/2020/04/page/5/index.html","1da633b760375cc39d49359cf1ff6c5d"],["/archives/2020/04/page/6/index.html","c64ff8d162233f87b4a6105b090c2f69"],["/archives/2020/04/page/7/index.html","d342d01daf7a969dce3d202184d6f291"],["/archives/2020/04/page/8/index.html","2947ccc5f490422dc0381530258a80b6"],["/archives/2020/05/index.html","5f1909e256d10a7ec35be74f69bd3af1"],["/archives/2020/05/page/2/index.html","7ff3dfaa6d1c207c2ebd000c0f1944a9"],["/archives/2020/05/page/3/index.html","8b510ce34a2262ead1de596566ce0b18"],["/archives/2020/05/page/4/index.html","f802103afdf269027b8a6ef3c09bdb1f"],["/archives/2020/05/page/5/index.html","1f5badc23ebbbe5cd713df1d5e508570"],["/archives/2020/06/index.html","0af3f1c28ed3953def8777bc6f98dce0"],["/archives/2020/06/page/2/index.html","9928480d2d333cc12c669757361a4c00"],["/archives/2020/index.html","0b273afb8d18215e9a83deaca0024d5a"],["/archives/2020/page/10/index.html","2d30229fbc3032663504e20345a31d35"],["/archives/2020/page/11/index.html","c847a49408221b6037f3d1a30598cb98"],["/archives/2020/page/12/index.html","616eb3f0bd721c495c1329c5c5c17af2"],["/archives/2020/page/13/index.html","784809412ea356c7b80f455f376b8ea4"],["/archives/2020/page/14/index.html","ed24f08d0f28a235de189341b5a98eac"],["/archives/2020/page/2/index.html","ff1ea70b235483c6ab9144dd03416c0a"],["/archives/2020/page/3/index.html","2b6ae1d68914c0dbd872cc56a8832173"],["/archives/2020/page/4/index.html","e7ebef2632308024b84bc8f2252bb64a"],["/archives/2020/page/5/index.html","f50fcbcb757c57632b90bb373bda0428"],["/archives/2020/page/6/index.html","b942364ca510decc3562e20fcca2e255"],["/archives/2020/page/7/index.html","5b8ff1c5259fe6687d6cad6530aa93a6"],["/archives/2020/page/8/index.html","67305e6ef058f88d51c91b7a3a0403b4"],["/archives/2020/page/9/index.html","d7c4a4432ef8abd33479c4c54d03575f"],["/archives/index.html","238e7af13777e93cc66e0a070bad35b2"],["/archives/page/10/index.html","7fb54bd6e5ae1a0c5d0820e6c5d34cc7"],["/archives/page/11/index.html","7392d3eca001659a36abd252c30224cd"],["/archives/page/12/index.html","0c270c0263e215c63973a27c31603753"],["/archives/page/13/index.html","59ec778d484c2b9ab13e64667756ab90"],["/archives/page/14/index.html","940d8a8e56a606e87678d157ae53cddc"],["/archives/page/2/index.html","ca151373bd7befbadf8b0de49ebb3174"],["/archives/page/3/index.html","07756d13a19c80554ddb71b84f897138"],["/archives/page/4/index.html","283835f32785678e62a1b7d15d8af9d7"],["/archives/page/5/index.html","fd503c2ff99e63583860d99ef9056948"],["/archives/page/6/index.html","060aa98e66473ff7e6a84ec49bf47565"],["/archives/page/7/index.html","d6452f7d111e36cd4651014ef51b0a52"],["/archives/page/8/index.html","0fdb8037dbd61a4f352dd0173e607100"],["/archives/page/9/index.html","456195ca387e27f64eb41e1c24ca1625"],["/categories/Advanced-Swift/index.html","61a0525fa5b7f5974a8df7a04a6460a5"],["/categories/Advanced-Swift/page/2/index.html","b2dc809f4e23048ea95abfcf8bd23b23"],["/categories/App-Architecture/index.html","3cc30c6dabed6923f3a52d2b4907dd18"],["/categories/Codable-protocol/index.html","804fb2cdd40a66d68b1b56e0e1f19221"],["/categories/Combine-framework/index.html","39e697a6368a093f6d342b2eebad1d60"],["/categories/Combine/index.html","d5c3d85df9a4fafa2c64c37044c7d58e"],["/categories/Grand-Central-Dispatch/index.html","823951fcf38f9751a2b5c746d0560073"],["/categories/Hexo/index.html","14bf5a6e8a3916b1d90db49806a3f33a"],["/categories/Promises/index.html","9f453269beaf7efc73875a997f51477e"],["/categories/Result-Type/index.html","7f98bd17c9135703a8300b6cace420ac"],["/categories/Server/index.html","3d3b5d743348508605d4da2fe129df3b"],["/categories/Swift-Apprentice/index.html","6ba93276f5738d2cd7bf2c8cf0b34fae"],["/categories/Swift-Apprentice/page/2/index.html","966838749c053593ecf45788d71c5d7c"],["/categories/Swift-Apprentice/page/3/index.html","efff606ce58a814181602d461ab7690c"],["/categories/Swift/index.html","02659dddefc93635b14d6e230c831a6f"],["/categories/Swift/page/10/index.html","a00677c01ae1a61bc45df01031e323da"],["/categories/Swift/page/11/index.html","08f3d8d8279750b93a8dfdc21b49315c"],["/categories/Swift/page/12/index.html","e373aabc6ab59f2b48477c4cd732af8c"],["/categories/Swift/page/13/index.html","e9d7f55992d6d1c23cfdf1fed3a29563"],["/categories/Swift/page/2/index.html","7b44cb201b836e1af89d3b25c06a4b48"],["/categories/Swift/page/3/index.html","3787e503787a44d0b533942ca1b17af5"],["/categories/Swift/page/4/index.html","03906317518b16224c60f25fdf75f0a0"],["/categories/Swift/page/5/index.html","c56126408b0a37ad1a6006ec3a3b3e2a"],["/categories/Swift/page/6/index.html","98ef80c415a166727374bf3f9c478a65"],["/categories/Swift/page/7/index.html","afdc5932a622b3635c4d7086607e8197"],["/categories/Swift/page/8/index.html","418312eecb24018d07975f4038e2835c"],["/categories/Swift/page/9/index.html","2c88d3359ca1e3094d116e35a95b2c3a"],["/categories/Swift5-2/index.html","cd5c29405c23a31504b48b616e00efc0"],["/categories/SwiftUI/index.html","0615e112d49ff7d294acef28cc286b94"],["/categories/UICollectionView/index.html","17fc2ebc60eeda8c850134b744f09f56"],["/categories/UIImagePickerController/index.html","d4fdc340a7dd484027d6fa5c63558e12"],["/categories/UIKit/index.html","6807f19fa705579cea10645b20c2a3f3"],["/categories/UIKit/page/2/index.html","1a23f06a0e757214011dce31f728230f"],["/categories/UIKit/page/3/index.html","bb91abd2070f5295f12cd394de0d51bb"],["/categories/UIKit/page/4/index.html","a88f1195d401cc19683d7645c4341032"],["/categories/UIKit/page/5/index.html","71d8e42e0ea2d96bcecb87f9e226fe53"],["/categories/UITableView/index.html","8f46252619f40788d9eeb545ad647d46"],["/categories/Ubuntu18-04/index.html","f4ba7c7a64a9a42d9e4cec75fb8475ec"],["/categories/Ubuntu软件源/index.html","131e89c256b29f1d99d94e8636ff645d"],["/categories/Uniquely-identifying-views/index.html","140a0bf3492a3e58ff612799c71d8ada"],["/categories/VIPER/index.html","a859a0995c32b6c96faca8ee6c3e5692"],["/categories/Vapor-4-0/index.html","fd3114d2b65246f90fcb360b0d3e6e40"],["/categories/Vapor4-0/index.html","41604fdb110035f52945bd51fd9c2b52"],["/categories/Xcode/index.html","34280bca5f9995e3b76109e0f73edde2"],["/categories/appleOS-Networking/index.html","fd5c1fa24992e43d231d15e355a9ff2e"],["/categories/enum/index.html","18c42161e14922ac473d5c197ec21082"],["/categories/iCloud/index.html","aab7cd8fd88d8709ec0c605db7bec72a"],["/categories/iOS/index.html","aa50fa43035c9fb2e97c570f83f10529"],["/categories/iOS/page/10/index.html","16870d2678ab71af0305c14bad2c1878"],["/categories/iOS/page/11/index.html","3ed3a2bb7fd0f8721da54b0713ac90bc"],["/categories/iOS/page/12/index.html","889d6d06bfd48b035634645cacaf454f"],["/categories/iOS/page/13/index.html","f8c3ef940b32b8de0b6e07bc15950c8a"],["/categories/iOS/page/2/index.html","9ba0c260bbdc38c3497ece57de917126"],["/categories/iOS/page/3/index.html","5e0f2538c9cdc66dd193b86d88932f5d"],["/categories/iOS/page/4/index.html","bf8570e54c304d08dfd7f0951d348ec9"],["/categories/iOS/page/5/index.html","146a1928db6a7798b477ead2ab6f4962"],["/categories/iOS/page/6/index.html","316c7c0e8acec74b0a4cccb88d57959d"],["/categories/iOS/page/7/index.html","e74b274b565aa9055aee641494dc7409"],["/categories/iOS/page/8/index.html","4ef80337ed4cad5178003529e2f8b54a"],["/categories/iOS/page/9/index.html","477cf0dae9d0a50c67e7227b92722bfe"],["/categories/iOS面试题/index.html","4edd74b184f551006ce3b292b5fc3e3d"],["/categories/index.html","333e304e58f51ed1f75b305d4e7459d7"],["/categories/random/index.html","e51081a73ff13c4bc28edf118ac32f23"],["/categories/三方类库/index.html","3d6770f9d355051aff53edf316d5f349"],["/categories/函数式编程/index.html","ba3f5b61f5f423cd852e390a0ac084ba"],["/categories/子类化样式/index.html","d711e73a1d2e4e075db1798f63dc2755"],["/categories/架构设计/index.html","be70a843406450c34f72dcf7b11fa066"],["/categories/用户体验/index.html","cd8e613a7d1cbf8b5c8d4704f993651a"],["/categories/用户协议与隐私政策/index.html","9becf1e8b3d099db2c4c5a7e56af2ce9"],["/categories/设计模式/index.html","ab869cb0df370eb59027fb10f67e245e"],["/categories/设计模式/page/2/index.html","4c10bd2a9f4a3ce8350bd0b9368b0252"],["/categories/设计模式/page/3/index.html","f71ed025a311ddd445c13ef0d4f83536"],["/css/main.css","839e794887fc0ac5360ca6532ec1e26a"],["/geckoAppPrivacy/index.html","20617d7446c9b8ea450577d12395831d"],["/hello-world/index.html","29531a4588a5048da95d5f996d689b24"],["/iOS VIPER架构深入实践/index.html","11fc3ca0d898ea5b02560a1ae7982dca"],["/iOS 自定义视图，输入表单和错误提示/index.html","7e644ce0ec6d22c8353404fcd88a0f18"],["/iOS如何使用iCloud文档？/index.html","e35f4385eefdf2e04228c1b86df3a805"],["/iOS子类化样式/index.html","d892ad5b509fe9e55ede7d4223b59f0f"],["/iOS自动化布局编程/index.html","0ed0e92f51caf193a5a963d495a518bd"],["/iOS自定义转场(By Swift)/index.html","3dd9ce1b6bb40485be820686cf605f06"],["/iOS项目架构：使用VIPER/index.html","37bad2044765bc4c04d4cf2eec32fb4e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","86624e3817f9445ce2216a84e16fe833"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","07f9077e08ab8a3a5bd0bc770f4ca042"],["/page/11/index.html","1019d3147ad89914e03015da8a8032c1"],["/page/12/index.html","b6b198935a7617bf411d1586a0f57407"],["/page/13/index.html","e7e55f4f53b6965bfdd0e69856d9f354"],["/page/14/index.html","13541aa134fa3311b57e67a64430e16f"],["/page/2/index.html","ba99ab4069a4cf3900ac77d475e2da39"],["/page/3/index.html","08881b10c0fb9327086066ab00c84a71"],["/page/4/index.html","6b83383865dc50a30b0996e30b9c6df8"],["/page/5/index.html","4ca16f1d958f36b9c8e9d82a603a89f3"],["/page/6/index.html","8a1b3aec13c55b8c68a39476c508129b"],["/page/7/index.html","5d3abbcf6b8c39844eca0cd39bd8c057"],["/page/8/index.html","d6ce95c3ac028e052e20427e42667054"],["/page/9/index.html","929705ab5d25941059813bde9b22eef2"],["/schedule/index.html","2ed5cb33f1d41af0aa5c0024bf7868f9"],["/storyAppPrivacy/index.html","8898b49fdb927c331bede5965035a507"],["/sw-register.js","649e0055a0b2728668123408a6e4ffde"],["/tags/Advanced-Classes/index.html","81f1b83f4c949784dacc4a33313ab852"],["/tags/Advanced-Swift/index.html","1338c5283880346d350f4f271851fc97"],["/tags/Advanced-Swift/page/2/index.html","d505b4cc1bc08872455d1d3429af1290"],["/tags/App-Architecture/index.html","81c606d3bf9aa8191fbcc979a77d2cf2"],["/tags/Arrays-Dictionaries-Sets/index.html","9785f8d5cb0f5fac097906ef03c252af"],["/tags/Authentication/index.html","4d5f8be8c86d256b635d4e0646ede305"],["/tags/Build-in-Collections/index.html","293c859fe523f50ab10fef7646b9c49f"],["/tags/Building-Your-Own-Types/index.html","23517d5312aa1002bce0664a8d8ec18d"],["/tags/CMS/index.html","ead35691b1456f92714a3ea067ddf2dc"],["/tags/Classes/index.html","07daca51cf1722605ffe8e90a049547a"],["/tags/Codable-protocol/index.html","b14311da492058d608e0b36cbc216d9b"],["/tags/Collection-Iteration-with-Closures/index.html","d345d481d27d51596cc9184130276ab7"],["/tags/Collection-Protocols/index.html","87106867eea97b579287ce0ebc244e86"],["/tags/Collection-Types/index.html","53e715a1f9ce2430d0877ef9df639cd6"],["/tags/Collection/index.html","458660344c7abf08d5d513ec88324776"],["/tags/Collections/index.html","79e271ec3dfae1db2466764571c7301c"],["/tags/Combine-framework/index.html","4cb82243a925bdcf454a5effefc3bcb0"],["/tags/Combine/index.html","6df2646d8df22603d9183b8bbcf2dad3"],["/tags/Dependency-Injection/index.html","8be6e43815016d7e74f382369ced9f8f"],["/tags/Encoding-Decoding-Types/index.html","a808ac2c272d02e996258c85648eb5a5"],["/tags/Encoding-and-Decoding/index.html","82c3a1e30ab8e5eccba9c4ef3122386f"],["/tags/Enumerations/index.html","a42adcc81f744576cad26145052cd01a"],["/tags/Enums/index.html","3c6606f4c098dd416b2f2d1e6ab7fe1f"],["/tags/Error-Handling/index.html","15032af201f1e28f3b3bc32232f30caf"],["/tags/Functions/index.html","83c7ad5a450ce51238412af35e094e07"],["/tags/Generics/index.html","25852496326185cef1742e20c7d7c14a"],["/tags/Grand-Central-Dispatch/index.html","58274476ad99cc82767427fc8f19fa1f"],["/tags/Hello-Vapor/index.html","21a75b9494fb89e63c5cf1a12b0b27c3"],["/tags/Interoperability/index.html","2f2f1894bd3f197329ed3331819d7a18"],["/tags/Introduction/index.html","b88044a0197914f4cf5b78b0dd7221b3"],["/tags/Leaf/index.html","3289993c71700e43ad2888e96b10da3b"],["/tags/Methods/index.html","26e45900d54594d4e4b13285bf292b79"],["/tags/Modules-And-Hooks/index.html","a07d662d2b31a131bac0c41de79ee040"],["/tags/Optionals/index.html","45466faaebd007a69e70520285060575"],["/tags/Promises/index.html","5b2420709a0d8e77ecec9a635a07191e"],["/tags/Properties/index.html","46dc45d48b0623ae92655ee2fd5e2ca1"],["/tags/Protocols/index.html","4a9c2dde9b4bb57716a5f7daea46b059"],["/tags/Result-Type/index.html","8c28a421e1d5e8d40320ae0670bb6884"],["/tags/Server/index.html","75898e27b08acec351e3a8d2f8b014ef"],["/tags/Session/index.html","d6da0a0e38ffbd73fffd963044ad7180"],["/tags/Strings/index.html","216312020642ddae9a917d6fa2b307e8"],["/tags/Structs-and-Classes/index.html","d614e18b48373d1ac5eabb9d786c2bc1"],["/tags/Structures/index.html","d1dc79a785f06370bf234ff593f5cab9"],["/tags/Swift-5-0/index.html","afcc55f5f12203b1afde18fccbfd2e60"],["/tags/Swift-5-0/page/2/index.html","78a07064882a01898fd2324c0980271e"],["/tags/Swift-5-0/page/3/index.html","709f422c77a19973c01224d87a6134c5"],["/tags/Swift-5-0/page/4/index.html","d7c7d6d070229dc880a4214bde199fb3"],["/tags/Swift-5-0/page/5/index.html","4117cc94440b116d8a18fb13310b13f3"],["/tags/Swift-Apprentice/index.html","7e267eb8e2c602430b13c415c3272a58"],["/tags/Swift-Apprentice/page/2/index.html","82dbba2456ef31c032bc89e2497f18ae"],["/tags/Swift-Apprentice/page/3/index.html","a1e33a05967b4033a4175dbc762fa4cd"],["/tags/Swift-Package-Manager/index.html","086e83ed95a69ddd7501a1573a01c2aa"],["/tags/Swift/index.html","a95bea9266911e5d63aa57a71d87fc11"],["/tags/Swift/page/10/index.html","349bbe67918e145b0f2ed6d4e513dd92"],["/tags/Swift/page/11/index.html","c50657abb304412f52bbc64fee7497e9"],["/tags/Swift/page/12/index.html","bf277fff5a75aaaad24043fc868e2387"],["/tags/Swift/page/13/index.html","dddd3908a2765c260407d59f62df8362"],["/tags/Swift/page/2/index.html","78bdcaf6bd287dd2323a99373b2929a1"],["/tags/Swift/page/3/index.html","3c1eab3cf223563fe2d95ad84b423ca6"],["/tags/Swift/page/4/index.html","c110a09484a8bf48e14144bba16781d1"],["/tags/Swift/page/5/index.html","35dd252f2390ba3496779ce3c0100d30"],["/tags/Swift/page/6/index.html","833369feecc745d1fa52bc28c9176be5"],["/tags/Swift/page/7/index.html","dc3037474263d43ce366ec6643804296"],["/tags/Swift/page/8/index.html","c5642877340081d3b2d068a8f52c171f"],["/tags/Swift/page/9/index.html","b9e35258a9100a7e0b0095c02ca75cc8"],["/tags/SwiftUI/index.html","a9b851090aa7821295aee864a4f70e51"],["/tags/UICollectionView/index.html","a461d26b850d7ebb6277b92a6d6baa3e"],["/tags/UIColor/index.html","c94166a1683b7006b602d336fd958360"],["/tags/UIImagePickerController/index.html","6fc45fa71b51a303caa92c5a0a19cc8e"],["/tags/UIKit/index.html","adf7adf5066152b5fac63abca844ed11"],["/tags/UIKit/page/2/index.html","77b97f3c66a8bb31a7a09f0c690eeb72"],["/tags/UIKit/page/3/index.html","9a671dda7be3d6fee53295633a1fb2ac"],["/tags/UIKit/page/4/index.html","e3a9777f8cd657d9eb9e8e555a1be8b0"],["/tags/UIKit/page/5/index.html","8198b2b2c61428cc1a49be6a1a2caf89"],["/tags/UITableView/index.html","11e4e1e975809d3a12461de0302c6418"],["/tags/Ubuntu/index.html","a76e6866cb010ab76e43c73636d99d92"],["/tags/Uniquely-identifying-views/index.html","986a6a940c35f53bdb60e6fa25325209"],["/tags/VIPER/index.html","5cc0b460c898150ce9ad7477ddaa1469"],["/tags/VMware/index.html","e41b518a7cd1f72f018065d52ff02ede"],["/tags/Vapor-4-0/index.html","87c9adae173ecee84a62810554bc7c9d"],["/tags/Vapor-初探/index.html","33eea7d9c33f65fca20d4a0ee2f29fb2"],["/tags/Xcode/index.html","bf558e00e5f5a4c6a468d07795da25e0"],["/tags/appleOS-Networking/index.html","e4b0fbdfb9c2ec0adfb9758f903cce01"],["/tags/enum/index.html","743f3898de2f9e2b9940fcaf072f92a8"],["/tags/iCloud/index.html","714c52780b274f4e316b86cacb544179"],["/tags/iOS/index.html","1d3ee5d5876ae9dccaba66b780e49efd"],["/tags/iOS/page/10/index.html","1594a0d8cced84a640baf943a5427da8"],["/tags/iOS/page/11/index.html","c5dedc7b76614ae305b170bf8ab7d0e4"],["/tags/iOS/page/12/index.html","d28efcaa51149433e29dab263548bd9d"],["/tags/iOS/page/13/index.html","dac65f5b50c1e55da66e08cf8dcbe95a"],["/tags/iOS/page/2/index.html","ec9d9d894fd789991362fff3fcfdee9d"],["/tags/iOS/page/3/index.html","f2e9b9c81aea858c9345d79eaf6dbf8d"],["/tags/iOS/page/4/index.html","c4dbfd6108cb51887fb383900bc91063"],["/tags/iOS/page/5/index.html","c064c72dc8af71ad5366242f55de8867"],["/tags/iOS/page/6/index.html","666bfefaca6027a0221726f9d5d760cb"],["/tags/iOS/page/7/index.html","cb07fc0d5bc25b716cc67a9cecb3a105"],["/tags/iOS/page/8/index.html","d30bf74352aa4fb7a7890a5b9f2c6b98"],["/tags/iOS/page/9/index.html","fc57106629cbd59214ccf3780b864fd5"],["/tags/iOS面试题/index.html","cf70cce99a8092b3ef4ac3718fb54507"],["/tags/index.html","692fd6160b2956fa81f81c8ef1910458"],["/tags/non-optional/index.html","d7ec73def8c97b98ea4fb0adf5235c70"],["/tags/random/index.html","a53d71d090ed0acc68c7702f7fd414da"],["/tags/transition/index.html","99439f3e0a4cf9a1b31359dab7681a4c"],["/tags/三方类库/index.html","7fe6cfc5c04e99668ee57b1806261e85"],["/tags/依赖注入设计模式/index.html","3889ca6a4e56d028a569eb0b139a743c"],["/tags/值类型和值语义/index.html","a8b9edac4eda5ba36542631fd90ec656"],["/tags/内存管理/index.html","8734276a381d59a2428689396e96eb2a"],["/tags/函数式编程/index.html","618848b705745b881db689a7d991aa9a"],["/tags/创建博客数据库/index.html","1a59e880bccf035d346f40c4156ef60f"],["/tags/初始化模式/index.html","5efd5ada0282cd598361879361a99263"],["/tags/单例模式/index.html","dedcba4765293cf2eaa731d9d982dacf"],["/tags/原型设计模式/index.html","4b082428cfa31bd2a228b294cf0cdc9a"],["/tags/命令设计模式/index.html","1ac98a1eb0e7995ae1897e6b4fa6d8b8"],["/tags/基本控制流/index.html","4a2245f8ac9f8aa518789c794eb75e26"],["/tags/外观设计模式/index.html","f0b2afe863f64ec63484c47ba3fdc4c0"],["/tags/委托设计模式/index.html","97391d05a9cff79e7836eb9ab458ddb8"],["/tags/子类化样式/index.html","27e5f2cfebb2bc6fb55b95300a076aaa"],["/tags/对象池设计模式/index.html","32fdb9c9ba041a6b6cb09aa9a161cced"],["/tags/工厂方法设计模式/index.html","d3202f15a22a817cdaab731b2c59a46e"],["/tags/工厂模式/index.html","e1bd701eeb393704a30c119bccd4d76c"],["/tags/工厂设计模式/index.html","a5822609a99e3ab4918edc37dd08b768"],["/tags/懒加载模式/index.html","e3146186a003b1aa6b5198274a20335e"],["/tags/抽象工厂设计模式/index.html","15fbae7a1edec4dbb9dc64ea16e8ee22"],["/tags/构造函数/index.html","6932c5dd3de25eef315b6d343eb37e53"],["/tags/架构设计/index.html","2335c2534309b73b7d2a58ce43dd8428"],["/tags/模式匹配/index.html","30ecb45f43d987a85adefb2b8f34f401"],["/tags/生成器模式/index.html","30b42ee8e5b31f6507189d80fbc5a043"],["/tags/用户体验/index.html","5b970bd011e1e4b16e0b3a29d087d99c"],["/tags/用户协议与隐私政策/index.html","949f448813889c68fb1f10a2592418c1"],["/tags/类型与操作/index.html","bc63407d2c60811a5c72d711dc1f2679"],["/tags/自动化布局/index.html","fa1f7b25ab59f52ab5ffc975ef08eecf"],["/tags/自定义UIView/index.html","dcb74c0f75fb444a78874db9ae4742f3"],["/tags/自定义转场/index.html","c19b68d9ac99a16130aae78eb55d41a0"],["/tags/自适应布局/index.html","9c69256eebba0960ff529d2c67f57afb"],["/tags/表达式、变量和常量/index.html","0cab82aba3ec339eab3aaa310b2098f5"],["/tags/设计模式/index.html","4efc77de29ee6cc1faa59d4ce8f582c1"],["/tags/设计模式/page/2/index.html","315836c956b4f9e24fdf0e255d3faf41"],["/tags/设计模式/page/3/index.html","4397efbd64f249c8628e3dc080284338"],["/tags/访问控制和代码组织/index.html","7840435585e48ea06ca247a787e873c1"],["/tags/运算符，下标和键路径/index.html","63bc2adf8a1301f9f6aae031ed436d3f"],["/tags/迭代器设计模式/index.html","1848564eb9739c98ed3bdb4cc24ae3b3"],["/tags/适配器设计模式/index.html","5586c49b4c4d517cc2133513bfe8b0f5"],["/tags/错误处理/index.html","e48bdd70ea6860e5cdff5692b2291b23"],["/tags/静态工厂方法/index.html","e546a0a0841126c6d9c8d8f9f938ba07"],["/tags/面向协议编程-OOP/index.html","4f06063e7df7daadc848125cf344d982"],["/tags/高级主题/index.html","f5bf2370acac6484114f43e179f5a83d"],["/tags/高级协议和泛型/index.html","0bc618bb1cd4185a75a7366c6a4fbae1"],["/tags/高级控制流/index.html","cabdfa53c427e16df4308925a05cc00a"],["/zhizhiAppPrivacy/index.html","1c99de6300285fe20c0e73f22d2cd41c"],["/为iOS应用构建输入表单/index.html","ee9ec5f789f2e8cc54b8f4026b386af4"],["/产品开发的幕后花絮/index.html","83002902e423ea61a1a5731e1f7c93ce"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","162705020f7dbe6fddabfb85ad498afb"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fe8f73c4c2c7b689afe30ff65a2255e6"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","92b993b8f8a818aca2845902a77bae2b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a90f46e23457c970eeac7dde98fe7744"],["/唤唤家政用户协议与隐私政策/index.html","aa42b6050b9ccba4fd1705226a3ffccf"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","63e9e4af4b26acd0f1671f9b4f52af99"],["/在Swift中创建自定义集合/index.html","2f13043e60a84e6c20daa8e4e6a0d171"],["/在Swift中处理非可选选项/index.html","4510aa10d187a950e3022439f3caa546"],["/在Swift中生成随机数/index.html","464fa2eb85a3373ca7797f1d6c2ce7f0"],["/在Swift中重构单例模式用法/index.html","ea80a0e109770dfebe01a27061ece1fb"],["/如何为VIPER编写服务？/index.html","4c10a6067c05203aed4e0086f88419b1"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","29642f0e89a83c77a895815d406ebec8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7f7e08046284b6ee313e1d794a847964"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","dd4969100959a43b326a205f89e7e872"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1db3092e0c1f035cc503657be699f0fc"],["/掌握VIPER架构/index.html","26fec459a7cffa0af95e021f11da801f"],["/揭秘 WordPress Hook 系统/index.html","de81eed39f8b61f2e80672fb1612b3a5"],["/比较工厂设计模式/index.html","8a3bec3f837397255df3f2af244e5f81"],["/深入了解Swift中的Grand Central Dispatch/index.html","95d4d1449f1d14ed63d5965ffc6f7409"],["/深入研究Swift框架/index.html","5fc335a7e657ccd17397e43aa6551580"],["/莎莎婚庆用户协议与隐私政策/index.html","95c148806cad8256a7c038262ee91c52"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2d477ec6545590c2b23cdc71689db0d4"],["/选择Swift而不是Objective-C的5个理由/index.html","e715dcb56dfbe71807ef2934c6e56cf9"]];
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
