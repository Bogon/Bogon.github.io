/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","da0e8a9fba1dbdc57781559436e23622"],["/2020年iOS面试题总结(三)/index.html","e4e2530c5cf80565d9d5c2968fb00d60"],["/2020年iOS面试题总结(二)/index.html","15359914d27239a59b183357a5bf046b"],["/Advanced Swift系列(一): Swift 简介/index.html","78ea8f1cabce24f09eaa488ceca98c4d"],["/Advanced Swift系列(七): Strings/index.html","d60b858b047f42e721559d158537673e"],["/Advanced Swift系列(三):  Optionals/index.html","e940cefbc78764c81e765a6d05a5e84c"],["/Advanced Swift系列(九): Protocols/index.html","dc39890bf48eb22928ad38a343502ad9"],["/Advanced Swift系列(二): Build-in Collections/index.html","ae6bf203466cc366b3c2a5187427bb95"],["/Advanced Swift系列(五): Structs and Classes/index.html","ee7e7aa8083bb30163d973376ce75b11"],["/Advanced Swift系列(八): Generics/index.html","ade9a50b8a3038e289d9bb1c58a89f48"],["/Advanced Swift系列(六):  Enums/index.html","e47b634ffa644c7fe2b8acc097c1bf9d"],["/Advanced Swift系列(十): Collection Protocols/index.html","c7733614a3c2f491fa7a6b30ffa37b57"],["/Advanced Swift系列(十一): Error Handling/index.html","87a8c9ebbe845f18d3cbf9a9ace2b6a9"],["/Advanced Swift系列(十三): Interoperability/index.html","05a4766ebfc76348ea137a3e44ebc9b6"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","47c7ca788e5aa53dd61b351b65dc3c72"],["/Advanced Swift系列(四):  Functions/index.html","15656ea4a0c07203b6286973def605f8"],["/App Architecture系列(一):  简介/index.html","5b473545ba1d3bdcf76014fe4cd0d65d"],["/CocoaPods 设定版本说明/index.html","fc9f55202e582631f494d4d0293be3dd"],["/Docker 启动 MySQL 指北/index.html","cf983d976948c149b8f72795f0ca9afe"],["/Functional Swift 初探/index.html","98ea1fe24108b5a8357f95de80073a52"],["/Git 使用小技巧/index.html","c6975f2b735c1c5808fccf5bb91029de"],["/Go Protobuf 初探/index.html","ca1f49afde7aa9b67452d12eb7eb26d8"],["/Go mysql Tips/index.html","d7de3c064b92e5fe63581c03bd8c2c7c"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","098f9652e84708d07003a67d5db7b02b"],["/Go 入门篇：2、Go 实效编程/index.html","2d5a52bd633fe9875d0a8dab5245582a"],["/Go 入门篇：3、Go 重要概念/index.html","449f996085915a105a16548af47a6036"],["/Go 基本语法初探(一)/index.html","58c4b08f70ac1d1ff45e942c17be03f3"],["/Linux VIM 命令及操作小结/index.html","2e9cbb12b0b87f11c4a5f74410fbf196"],["/MySQL Tips/index.html","eb3c05fbd987686593f9a80693cbe0f6"],["/MySQL 基本操作/index.html","0324d39b7e77ad9d85d8bb139fdfa140"],["/MySQL-列类型和数据完整性/index.html","b418376615170cd4bbd2f13e4a6622a2"],["/MySQL-数据库设计和查询语句/index.html","ded6c1b8c177b74cb76da9dedf1181cf"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","c25f2d358076939153845ef300a2a400"],["/NSCODER和SWIFT初始化/index.html","96ba4c0c0c61ec404c59905917b92902"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a9017b3c38416bf1f65c3728001c3b11"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","d1ef1dfde5a430df0042b10303b94c98"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","30c6079e5ca02d7a072a6b37fce5b981"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","5f88a8bc2c09bea9040fc8e979bcc34b"],["/Sqlite 使用Tips/index.html","ea9d4e40e16cf9c17ba214f93d5cb220"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","b8035a6ac3f528626c3ceccbfebb2ddc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","dbe3b8c6ff458295b949b394e3a10579"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","15f8733adb172c21a8e78d11b651efff"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ffb84fcf01e69c4f33d72ed80d142ad7"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","10ee774d4aedf5c2688764486665c046"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","acac499203082dd6dec197946081e84d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e52d4183517f74bb04261b9699b45cdc"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c404e7f83e452e8467707a750756626d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","469f1fe2926b42659f24c6e674dc7c36"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a3f076655d0c24f8e7d398487dec6494"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","72f2e0e41729e4473c7a8375fac90f91"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","699b559273ea0de1a2402b0aceeffa13"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a5b686f67f759efe30c91b78afde1964"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","e8fead51d47adf09d4c373830d00e9e5"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","d4d1d4e245162b20e3c64b3ccadf3985"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","28117e9e8d51981552d51fca6f587b24"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","8de596fcec13e279e3f9b7622939f89c"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","15df11d9d33c078ac98f33ddf28cfc9c"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","70c41b87ee76624f4f889528a23c7dc6"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","1ad50c8fc142435d83e55c0994382ecf"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","c24d94c0b434012c9e4f4f815feb4c57"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","5d32baec5f59434534d999466798278f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","c797f5faefb04b7db7baa7dea4d00fef"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ee2125f18a23dde52dfbb9339b0a9676"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","7e8c94efb9b001e5dd6a2392c27f64dc"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","257f3779963837efdf3c1c75a9ad718b"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4381acb61a1c627de0ffafe9155cd260"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","d61cdf752bc9b4db331115817aa41e1c"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f262fc81d06e6d564cadf8124b28d2ea"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","cbf752e6ec1798cc1170338ad2f834fc"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0a20fc33ee2dee1218f79f4fa46241ca"],["/Swift CompactMap vs flatMap：差异说明/index.html","ff69b9b4c6d9271c883fc8ef9d359c78"],["/Swift Grand Central Dispatch 深入实践/index.html","3429b8e465e159ecf01949741304a16f"],["/Swift Lazy属性初始化/index.html","0e7d1acbd36effb14e68a3ce5a30aba9"],["/Swift Promises 初体验/index.html","62f6e29d099381c6af87e34d93380576"],["/Swift Promises 探究/index.html","2b585ad7e1b5801b7469353b4135b319"],["/Swift UICollectionView使用指南/index.html","1a116b239f94ccca2866fb75cc6a5805"],["/Swift URLSession && Combine framework/index.html","5749940507ca85a0b717842c9e23b23d"],["/Swift tips/index.html","f1f99226933151833ea0c46bedbaa55c"],["/Swift 三方库：GRDB 使用指北/index.html","64607548ece7515e0a02dc183081af2f"],["/Swift 唯一识别的视图/index.html","20e44d07f11e988e07d2407890b1b3d6"],["/Swift 如何学习现代UIKit？/index.html","f848573721f396bf85320d0251b3fb4f"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","c83527e5981d07fde4c1f5d0c2eaf9b3"],["/Swift 用 compactMap 替换 flatMap/index.html","d53cd2d9a627e38518f0e8bebb27c541"],["/Swift 选择和播放视频/index.html","c420ecb1d40a40ae3812321099425128"],["/SwiftUI 系列(一)：1、 简介/index.html","b8bf33a2b8f593f9a640a04479ceef18"],["/Swift中UIColor最佳实践/index.html","5b59e223620a2509b6032335b0438394"],["/Swift中快速简单的工厂设计模式/index.html","e1b590c180eb1640625dcaf6ae49a76d"],["/Swift中构造函数与静态工厂方法的比较/index.html","0783630860ce80f1c3fa9b6010f8a753"],["/Swift中的UITableView教程/index.html","f269826513e227db47d8c911b003a8f8"],["/Swift中的懒加载模式/index.html","0dced5073b1245cc4c3f81ba85d9ec04"],["/Swift中的模块和挂钩/index.html","4f51409292f07be3ccf9b3f87d2661cc"],["/Swift使用布局锚点添加约束/index.html","f56277176247af42131edc9a27cb2abf"],["/Swift依赖注入设计模式/index.html","a822e862e2476ddd41d6ea50c9d1eeef"],["/Swift关于Dependency Injection (DI)/index.html","91bd5fcd698216f94b3a49baa070fd61"],["/Swift初始化模式/index.html","bc1a528f57ca15d9dce760b1ece8fb3d"],["/Swift单例模式/index.html","5e103952c995a0d9f1e2c05126e4bd45"],["/Swift原型设计模式/index.html","c2c388f5c34bc30030f016f56fd2032a"],["/Swift命令设计模式/index.html","523795286c23678d9ca3723ebd632c83"],["/Swift外观设计模式/index.html","f891f6acd7055997ac9944abdd84039a"],["/Swift委托设计模式/index.html","53d21b18eb52c89b093e378928dcb026"],["/Swift对象池设计模式/index.html","420d7493152ffc84d33b9ce2522669a9"],["/Swift工厂方法设计模式/index.html","1ba568b88afab4cd2fc414cd71ec347c"],["/Swift带闭包的懒惰初始化/index.html","34723ddcc328f15bea57a72dc8e1bf7f"],["/Swift抽象工厂设计模式/index.html","e6c3bbb99139786ed84d9d7ea17d0634"],["/Swift掌握iOS自动布局锚点/index.html","0a84c5afb14199099ad1a400c9203e96"],["/Swift支持旋转的自适应单元格/index.html","b5b6dbfc5f6abddcd0033a2374ba41ae"],["/Swift枚举值/index.html","e899350b1678f04825984ee2a4616682"],["/Swift生成器模式/index.html","45a92d35a19fc1b741a154e44455657e"],["/Swift结合Xib文件自定义UIView/index.html","f1fcf4afa72f52628c83dbc6faf11e84"],["/Swift编写的20个iOS库(一)/index.html","b8c954bd28f6f5bc7f561b7db49ff692"],["/Swift迭代器设计模式/index.html","eb23dc877dd816b40f0c2910ff2248c1"],["/Swift适配器设计模式/index.html","087c70b0e1971fba8b349ccd140519cf"],["/Swift静态工厂设计模式/index.html","14c778850d50b72814bd09a9e6e045bb"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e527546a4a5a81db3c95f6f35756d848"],["/UICollectionView data source and delegates/index.html","9027fff715247f07be045e337335a194"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","da58f15a56eb63d3b7837cd7bf32c022"],["/UIKit初始化模式/index.html","075d229b637eccb7ef0f1e8e620a621c"],["/Ubuntu18.04替换国内源/index.html","96d7ab444605b60ae154ceec491c6de9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","58f2a843e03096979154c9eb62540740"],["/Vapor系列 (一) :  Vapor 初探/index.html","4a5e27792d1cc26b7524b492c9665ed0"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","4306409012976bfa7c0ede0ed76ebf46"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2d585010094d3757b6d791a3fb30037c"],["/Vapor系列 (五) :  使用session进行authentication/index.html","34356c2df44a6b0e6d916959d02daadf"],["/Vapor系列 (四) :  创建博客数据库/index.html","c89866dcf4cb4853200c2475390af320"],["/Vapor系列(六): 徒手撸一个CMS/index.html","9f7343f3e59a285a0e60f2060f23ab62"],["/WKWebView与Native交互注意事项/index.html","d2a4a735ffdc42fb9e9ea5a1aa9d196b"],["/Xcode扩展/index.html","f217bfbf1823fa885fa92aec2be2242c"],["/about/index.html","363cbaa560f516a7894f85e0a46b13fa"],["/appleOS的Networking示例/index.html","5ecf1d4e8f6ccc5197a16c0487c151f1"],["/archives/2020/03/index.html","9d6d3bad5ceca92d725793cf87f2abdd"],["/archives/2020/04/index.html","36bf8b4857de7d151e63f7dfb5adc5ed"],["/archives/2020/04/page/2/index.html","e95480f7effa7abc801890ede5bbab91"],["/archives/2020/04/page/3/index.html","d6d52b7d3669ffa494f9cce6bc5bba67"],["/archives/2020/04/page/4/index.html","7189a2efb83d2661ec9fb9015afb6f4a"],["/archives/2020/04/page/5/index.html","dc2c54d8153f42cce48bc9e097d2a3ae"],["/archives/2020/04/page/6/index.html","4410dd9322fa357550c6b748a023aaec"],["/archives/2020/04/page/7/index.html","dcaba3f3b4eae1b544e92d4a3c64f022"],["/archives/2020/04/page/8/index.html","3b78e875988decf2f1b5aae650512b02"],["/archives/2020/05/index.html","ed6776b5e4b7be27bd1ae3cc2a74ebb8"],["/archives/2020/05/page/2/index.html","0285c26883ed6d4cb7855b960d678dbf"],["/archives/2020/05/page/3/index.html","7c648313700efe6e9d5efef65610d675"],["/archives/2020/05/page/4/index.html","caa6f7b3982735e92cf24d1bba02dabf"],["/archives/2020/05/page/5/index.html","1ce35ee3147d87896cc04ed2a248ddfd"],["/archives/2020/06/index.html","08d86028601899d926aa2f97ab02924e"],["/archives/2020/06/page/2/index.html","ecceb45893f3fd17718f87a02d51e5fa"],["/archives/2020/08/index.html","e9a721fbab0f9f10ac392e5502a8093f"],["/archives/2020/09/index.html","85948ef578b67f5a479172dd405f39cf"],["/archives/2020/10/index.html","d7edb01e9e856d8b9da5d2b3430a4bee"],["/archives/2020/11/index.html","a613ce9319259e8264df83c0e547dca6"],["/archives/2020/12/index.html","eb4a082ed24aad3e12c671d8091249ab"],["/archives/2020/index.html","f92c4a8ade60c410b494aa945000085e"],["/archives/2020/page/10/index.html","123be96a3e1981693e2f2b99c541dc5c"],["/archives/2020/page/11/index.html","a64e46a84df1a188e6792e0d1fb89d8a"],["/archives/2020/page/12/index.html","dc6a6bd11addaaf8e9e58d5f4c066deb"],["/archives/2020/page/13/index.html","f29e01b97f12c8e46d710b3e2ee20437"],["/archives/2020/page/14/index.html","337fa3e7d6a34c70f5596379d20796a9"],["/archives/2020/page/15/index.html","b7d9ebabf293e892951bcff6470351c8"],["/archives/2020/page/2/index.html","0e1308407ff68275d4f42b79c008e03e"],["/archives/2020/page/3/index.html","58632b1a913981385af912d6e4e79f46"],["/archives/2020/page/4/index.html","b3557b0b22af8ccaf458e8ec6a37a10c"],["/archives/2020/page/5/index.html","c270d0c751a8abfdf180d73317e936ec"],["/archives/2020/page/6/index.html","c1540517ea93ce977fa01de24f4e76b2"],["/archives/2020/page/7/index.html","2c867a0e48958501156d4a27e6fab2b2"],["/archives/2020/page/8/index.html","8226344518dcebb83fd5adc848171aed"],["/archives/2020/page/9/index.html","0ec5447d59f3f39cb48ee5318298111f"],["/archives/2021/03/index.html","49534246633d8cb969bbd554c1cd6fd5"],["/archives/2021/04/index.html","ef53c9c530d2cd404c22ca49d719a75d"],["/archives/2021/05/index.html","dcb8e5a14f69914f35e129e9af725923"],["/archives/2021/06/index.html","5ddf68b22e82f6262d2e20fccc4556dc"],["/archives/2021/07/index.html","40239b1f0ea5c842ab25e888a76c4776"],["/archives/2021/08/index.html","b9a05c14ef0ceb880318b274b7dfce86"],["/archives/2021/09/index.html","4a014e53320365f813f352be2a7d4691"],["/archives/2021/11/index.html","a6205b7891477b267245e3da6819bba9"],["/archives/2021/12/index.html","d8a66059d89f2e30a89546d27d14eba6"],["/archives/2021/index.html","1b037efed4fa5097ae731777fc35eaa9"],["/archives/2021/page/2/index.html","6a6b6f8b35e50dfdc8466d265cc9d7aa"],["/archives/2021/page/3/index.html","342a63c5b3228e97ae40fad73f47e34e"],["/archives/2022/03/index.html","01ac5e43872690fbe396db2c857406d2"],["/archives/2022/04/index.html","2c4e0f47788167c8c93048d7d412eb7b"],["/archives/2022/05/index.html","6a9ad726e68c90599e188d19d81c812e"],["/archives/2022/06/index.html","395911da852403edffa7a5dce440f1d5"],["/archives/2022/07/index.html","2fbd69da6b6fd263ec60332428907bbd"],["/archives/2022/index.html","2859ba0a1194d100d3974abddd05e45d"],["/archives/index.html","931b62acc5370f946b05d9a5a26b4862"],["/archives/page/10/index.html","d8ac626f1b4437a857cb1cf54a844447"],["/archives/page/11/index.html","01c0d0ea785caf212d0c2e63bcdff187"],["/archives/page/12/index.html","0a3f41daa95ad46b2e8d8910b0affcea"],["/archives/page/13/index.html","2d399b4fa7c748996f4027d1724c4f3a"],["/archives/page/14/index.html","6faf763f27e003fd68cefc19e14d65d2"],["/archives/page/15/index.html","622bea6be3b4cb5fc283244f346e1b29"],["/archives/page/16/index.html","99137992d148e285b92f63f03e94d573"],["/archives/page/17/index.html","1cf92a03a5bbfc454cfe2ac05068edee"],["/archives/page/18/index.html","d238b9d4533bfb7a742bdbc17d1e33be"],["/archives/page/2/index.html","5b37f043c9b3dfca91d8c3cfb594bc6b"],["/archives/page/3/index.html","58e8a6b6907f001c85a71eae90445810"],["/archives/page/4/index.html","f72828f44a88b35aefe073f73d2e3a89"],["/archives/page/5/index.html","e704a88ddd51747e7c8ef4725ed863ae"],["/archives/page/6/index.html","aeeb27803ebeb884b580da4bf003bd4f"],["/archives/page/7/index.html","168675a19a2d27796536bae3614f81d2"],["/archives/page/8/index.html","d15a15856a24837647df01135d19d319"],["/archives/page/9/index.html","994cdd7a7d5a0f8d8a7b364958cdc6fe"],["/bugly 上传dYSM文件小记/index.html","4e38b1a6bf78f37b634bba5e85bb1aba"],["/categories/Advanced-Swift/index.html","f88aed69de463fe519caebdd506f018a"],["/categories/Advanced-Swift/page/2/index.html","323d7a0a8e128f41a2f38c24d5bfd73c"],["/categories/App-Architecture/index.html","e5fd9c798c7d1e270e395311ded2d109"],["/categories/Array/index.html","329735907e3912809dc1db3ece2a20c5"],["/categories/CocoaPods/index.html","60f00453b5eddfeb4f97acb28b4ad489"],["/categories/Codable-protocol/index.html","3e16de2ee5a6a19d2c89b0cfa5456a04"],["/categories/Combine-framework/index.html","b5bd03256abbecb08e045b6544b7474b"],["/categories/Combine/index.html","dfc74b67d4ef2047ff4727fc0f838eff"],["/categories/Docker/go/MySQL/index.html","ff0c8ba8a2b10394413479bd06a0fbfe"],["/categories/Docker/go/index.html","8d3587643c67aec8f9c08a03f9e7a0d7"],["/categories/Docker/index.html","7af0906afb1317e038570ca06cf68dd5"],["/categories/GRDB/index.html","2305ad867ddf5c3b4740856f09cf4a2a"],["/categories/Go-入门篇/index.html","e376c923829e420af7eb35f7c4841625"],["/categories/Grand-Central-Dispatch/index.html","9bbdc29a1601d56a554c29116962bbc1"],["/categories/Homebrew/index.html","a4f240739f7e520225838e1276c334ec"],["/categories/Linux/index.html","6afe20a2cdbb75baff3da038302c6cea"],["/categories/MySQL/index.html","53dc2393709523a56fbd3f0f3f6a2731"],["/categories/Promises/index.html","7720ee28021b35df9e7a774115c3e3aa"],["/categories/Protobuf/index.html","7035d64f22cedaf48de80de6e4cffd79"],["/categories/Result-Type/index.html","bfba91c2325c05ac3f5866c43614f6e3"],["/categories/RxSwift/index.html","1ccf4e646d96f250de46ccefc1351a9f"],["/categories/Server/index.html","6643dccdb093f133e10f731ef075782a"],["/categories/Sqlite/index.html","85846ff754e2303ee86cf61cad10354c"],["/categories/Swift-Apprentice/index.html","a9dd076f4b46f9f426f0f55b67d3f83e"],["/categories/Swift-Apprentice/page/2/index.html","9c85a5339f73ff4950883a7b215317e4"],["/categories/Swift-Apprentice/page/3/index.html","fbc70da247d7be46ce9d2498560859d5"],["/categories/Swift-源码阅读/index.html","b8d14050cbc6f634bbeda59d2e40233e"],["/categories/Swift/index.html","2cb0c41e75ddea4eb37230c5ace2ece0"],["/categories/Swift/page/10/index.html","89dc0ed02005865d2ac52efafe6d211c"],["/categories/Swift/page/11/index.html","4d70a26a66cd53e743fba8a13481c448"],["/categories/Swift/page/12/index.html","5d62324870a52b0846b57e49d786327e"],["/categories/Swift/page/13/index.html","ed57325502d35d65150c7463307fbb50"],["/categories/Swift/page/14/index.html","899046ac4414d7dcd0cea8bdb57d6ff4"],["/categories/Swift/page/2/index.html","15048da087708ffc1d7a85c830f4337f"],["/categories/Swift/page/3/index.html","ed2471203a866db0acd6038b7001cd71"],["/categories/Swift/page/4/index.html","178444c8db097791c97acd4c869f22b7"],["/categories/Swift/page/5/index.html","0c427a176c6ca52923cb3f241a0c98f0"],["/categories/Swift/page/6/index.html","2a1555aee6f4d704f467f28090a0b318"],["/categories/Swift/page/7/index.html","424419ddf76401347874051d274b1325"],["/categories/Swift/page/8/index.html","e5f65c817c233eca1ee4365f28eea465"],["/categories/Swift/page/9/index.html","0b6125d1a6f7685a3c33b7852cbf6e49"],["/categories/Swift5-2/index.html","7a4335d267a076de4452f67b6ba81dd8"],["/categories/SwiftLint/index.html","fc194ea3c22bf6a9ed8e3b8324d763c7"],["/categories/SwiftUI/index.html","6aace7f1c6e265954d4892b2f071a53b"],["/categories/UICollectionView/index.html","ec3c065b968b1dae9a0332e46ec1119e"],["/categories/UIImagePickerController/index.html","df349e42340435e7eceeac51a7ce5073"],["/categories/UIKit/index.html","590be236d103da90df5a6c973783efec"],["/categories/UIKit/page/2/index.html","eb71cef45ce54200d4a2bb6fe8416b1d"],["/categories/UIKit/page/3/index.html","7ffd3f654d4137518a07c2d2d00fa9ec"],["/categories/UIKit/page/4/index.html","2a922bac8fbf2e410fe8b03448a762ee"],["/categories/UIKit/page/5/index.html","29b6a877486a4ca7eb6cb216e4077752"],["/categories/UITableView/index.html","8717f1169e0853df17995c6608a138df"],["/categories/Ubuntu18-04/index.html","6f669cea4ce1b48d6c8fa88b4e3bb73a"],["/categories/Ubuntu软件源/index.html","de7d1a24592816d00e93c26c835567d5"],["/categories/Uniquely-identifying-views/index.html","391d305598a420d5dec406684d4ba51f"],["/categories/VIPER/index.html","da7220ef08e4ee4d626b94c6c53bc084"],["/categories/Vapor-4-0/index.html","7ccb1d5afddd2bae15adac8f3c0c4879"],["/categories/Vapor4-0/index.html","9265f018a31bf270abf9877ed0007967"],["/categories/Vim/index.html","edb8b5552831222069cdb0b981b5925a"],["/categories/WKWebView/index.html","a20832949b72343640ac6ce6c31851bd"],["/categories/Xcode/index.html","00f14d6d7ab8120b6ac121f2620e5ada"],["/categories/appleOS-Networking/index.html","f81f78a0feac81beddd0f66f6187bd47"],["/categories/bugly/index.html","2d6c72c41a66297c75ed26feb85770f3"],["/categories/enum/index.html","4e97b88e5a326e5b0282efbac63d28b2"],["/categories/git/index.html","2f5b0528a9c4f8e085f1264c07c2d928"],["/categories/go/MySQL/index.html","33ab4e65732017b8f4231128bcda8394"],["/categories/go/index.html","59a7a337313284483fabb0e75e53d236"],["/categories/go/interface/index.html","f5824b3f40c1432f1799be0b522e3bf3"],["/categories/hexo/index.html","d7a3c0fd52bbacf9e1d47a6a0a19891a"],["/categories/iCloud/index.html","f01e2f5f6cfc94277a44b15f5c672c81"],["/categories/iOS/index.html","5383bc45e07bf28e030def63d7db63cf"],["/categories/iOS/page/10/index.html","278aef3d82a8d68ff6919f8321c58ef6"],["/categories/iOS/page/11/index.html","18e45b2b3c3d2ba54d8a20a89ba95b9c"],["/categories/iOS/page/12/index.html","40519e0017f27509daafa030520f327d"],["/categories/iOS/page/13/index.html","f71cec68fd0d3d1ee56eec9c583c8a45"],["/categories/iOS/page/14/index.html","b3705744f9ac86f5cb4c6268d49a79cf"],["/categories/iOS/page/2/index.html","6d10c8b9e1e6be844ef50ab078f4a66c"],["/categories/iOS/page/3/index.html","54f97d46ead3f46e95733742ae2abfdc"],["/categories/iOS/page/4/index.html","a3b92c91f3adf5b398e9e4aef824e611"],["/categories/iOS/page/5/index.html","a989518dd79582eb7c0670f230bf5f76"],["/categories/iOS/page/6/index.html","7cc55581a945dbddeffdd9a634bfec19"],["/categories/iOS/page/7/index.html","63e82010c3383a7872a3d8145b18e578"],["/categories/iOS/page/8/index.html","a5504327a4bb92ffa85690f611ccccd9"],["/categories/iOS/page/9/index.html","f2a4fb34246372517955533f8bd1f1c1"],["/categories/iOS面试题/index.html","b7c5a5c0ea9a2466ede519d0eed5ef55"],["/categories/index.html","b7b4a4f4b17346c10b7ff9cc72a04618"],["/categories/random/index.html","0406df29c56f28b33c79caf2602a23e5"],["/categories/三方类库/index.html","ed148710c190767560b8b52ea22ba6cd"],["/categories/函数式编程/index.html","d2e4675136be3c0bf70d3f5b07432c0a"],["/categories/子类化样式/index.html","66acba8f2b8bc16f640220bf5f30f115"],["/categories/开发技巧/index.html","0645a30fbf3790d01ba571a6bd2f2790"],["/categories/开发记录/index.html","3bb10d6c5c0669c9ce93a003d0d74cc5"],["/categories/数据库/index.html","d0c7111d66ec4ad208fcb719a7a9c5fd"],["/categories/架构设计/index.html","bd2425800c17797d5071c5786e90b0b9"],["/categories/测试/index.html","35ad35d3a858053f0c20a3a95b750c36"],["/categories/用户体验/index.html","4b3ddebf09547cff4f83ddaabc439b7c"],["/categories/用户协议与隐私政策/index.html","5988877d2cd3286f76151e05cff5a328"],["/categories/组件化/SDK/index.html","33af406d6308cc02b678a7dc5b6785db"],["/categories/组件化/index.html","8405e07524e7bebc038422ffd7e8c634"],["/categories/组件化/模块化/index.html","f75a772e6801852e9117f2f1c5ef0985"],["/categories/设计模式/index.html","70ee162ca02eb3705d2863320d5bebba"],["/categories/设计模式/page/2/index.html","a583d1996676cbf2ccb070bb4add85ff"],["/categories/设计模式/page/3/index.html","271312eaa9c6a43001d9d79d7cf51446"],["/categories/逆向/index.html","a32db7fe0ade3ad9c69100595f6ee3ee"],["/css/main.css","27dff59e897c894cb670fc8104b0b2a2"],["/go moudle 导入本地包/index.html","96b9be2d157b78cd0c0c7aeaf0ca7563"],["/go 库专题(一)：gin/index.html","8a6449ad9a471067f39b4311a00b7066"],["/go 每日一问/index.html","35be9c5d1ce89368f2e884068bbba303"],["/hexo部署失败/index.html","dde47dcd9e16e9e217750658205a3a1a"],["/iOS 15 适配/index.html","d8400481c667d7e9a155491daa135216"],["/iOS VIPER架构深入实践/index.html","a6b9373a9a54c070c7dc08cbb0dc129f"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","fe59475a293284242d0febb72f14f896"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","d4ecd29bf84d9b9250d6c5348a56f908"],["/iOS 自定义视图，输入表单和错误提示/index.html","0ebbdc1451b5fae038439db162ba5c22"],["/iOS如何使用iCloud文档？/index.html","bceb57b5b48070bb57f0f0e5f13afb2b"],["/iOS子类化样式/index.html","bb153fe7e809b2b072f8ed6a62fb7a3f"],["/iOS开发记录<一>/index.html","057cc5f0e146da5308afe9318832aad0"],["/iOS自动化布局编程/index.html","3e0f594b5fcf476333ff6449f1f00fb7"],["/iOS自定义转场(By Swift)/index.html","29876010897ef9a53ef18362b7e00894"],["/iOS项目架构：使用VIPER/index.html","cc51efb7b6c97d41908ab9d82418e10a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e49571244f3e034dacc31e071c72f04c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","447688d471269eb2502452595527c456"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4a6df7ee5a8e8bb2b12752216929fed0"],["/page/10/index.html","b95d03ebd9ba08b72d0bdba8d4206ff8"],["/page/11/index.html","b94016cdefa1866575b89874528869e2"],["/page/12/index.html","ddff9b9425ea258b0edfc68e5d1fb572"],["/page/13/index.html","8e6e552046911c6358d58f6ce054b9e2"],["/page/14/index.html","f569e125328ec3112f0c87b379a3203e"],["/page/15/index.html","e63f05a1d275138f89690a66ca5280cd"],["/page/16/index.html","0c3f09f20d9f87c90a25be614d25c646"],["/page/17/index.html","87411c79a4a24e7022cae8f982d24226"],["/page/18/index.html","0ac5cd9c0419ec7c9fa945b09475fe93"],["/page/2/index.html","6c8609fd96e53b4a4e7de7e3963313b1"],["/page/3/index.html","a71943f36bcba92f1e4f8a99a1fea3c3"],["/page/4/index.html","d08b8ac6bebe9daa4e528d6c6052af3c"],["/page/5/index.html","3fa4e0216e729a192b996ca0084e175c"],["/page/6/index.html","1e64eb7f1259c8d9a57adc406a23b3f9"],["/page/7/index.html","6a97278e21dc30014a8b97f9c6ce7618"],["/page/8/index.html","24d5f1bdb1e82c570fe9be90f977fb87"],["/page/9/index.html","fb50d7d40c38ac79263cd0e4b9a71a0f"],["/schedule/index.html","94918908a25090d35a9088ff581f0738"],["/storyAppPrivacy/index.html","1908f0536307ee00b570a608483dc45d"],["/sw-register.js","1d0ceef9eda7186b7aa383edfd2e3880"],["/swift 专题：函数/index.html","56b7fa99e44227aaace93593f4f8d033"],["/swift 专题：闭包/index.html","205fe3814d32a6a477b1e86a74e94345"],["/tags/Advanced-Classes/index.html","2607040ca13b7518d581bf86cbc85f11"],["/tags/Advanced-Swift/index.html","c49290735b115cad69c9094267c6f860"],["/tags/Advanced-Swift/page/2/index.html","0de80f9587ee5e35cdd042236e6ab1a8"],["/tags/App-Architecture/index.html","6769389cd7a1095c0c2922cfbb4bf47f"],["/tags/Array/index.html","25528df9d19b9c1853cb59e8f59e62f1"],["/tags/Arrays-Dictionaries-Sets/index.html","05fe88403f79e8d6189189ab487b68c0"],["/tags/Authentication/index.html","89ee3facbfec9703f3536b2bcf1ca8d9"],["/tags/Build-in-Collections/index.html","b2c5d33aaa8fa7c1d378cf4d4ef6a6f0"],["/tags/Building-Your-Own-Types/index.html","5910dbf3c6c4424ca53c15e529fdaac8"],["/tags/CMS/index.html","bae47271d888555b51135eb9d1d4c9dc"],["/tags/Classes/index.html","0647e2e0238d1cde8e5ffe8f4ea094e4"],["/tags/CocoaPods/index.html","9d8950878d654ea20daef2a3d1ee3fdc"],["/tags/Codable-protocol/index.html","6a9d657ec4a717ec986a142551c4ef21"],["/tags/Collection-Iteration-with-Closures/index.html","b908dbb8f15b8e261da9646dd740e485"],["/tags/Collection-Protocols/index.html","4e3f39bd4e181d1b5504d12eb7926fe4"],["/tags/Collection-Types/index.html","7790d6e05771edc0648becacd8a56e53"],["/tags/Collection/index.html","3deed05952f7bb1b39bf30dd586fcadf"],["/tags/Collections/index.html","270b5a16641b947e02ea6d8eeab5b3fb"],["/tags/Combine-framework/index.html","03002459f0540a9f87f7c09e3b133c00"],["/tags/Combine/index.html","e4d9a8266f7826a05a7af2d3bbbfeed1"],["/tags/Dependency-Injection/index.html","299720030d794893972053fdb55166b6"],["/tags/Docker/index.html","fb56e3c0c6b88fab74a33c740180f66c"],["/tags/Encoding-Decoding-Types/index.html","608f109aca0b4b625af49af06cad1cfd"],["/tags/Encoding-and-Decoding/index.html","544e6a2f78a67d640c6aa1cca8c16873"],["/tags/Enumerations/index.html","69be722f285784db6603b276c51f5899"],["/tags/Enums/index.html","a17b91e5168ae0df54092174fd2f42e3"],["/tags/Error-Handling/index.html","7663e801140b2758d11d78b3eed2c716"],["/tags/Functions/index.html","95be0ec855d5d268a8e53ea75162c6b7"],["/tags/GO/index.html","bdadf9ff4f5b6799fa5339d16cf4e125"],["/tags/GRDB/index.html","2cccacd92be11f147b6aa83363cad441"],["/tags/Generics/index.html","ed08517e0c86ac2f4ec6a48e2db5000d"],["/tags/Grand-Central-Dispatch/index.html","e78df390454bc6f3cc4667a22ff15eb3"],["/tags/Hello-Vapor/index.html","cf4bd334cc199ebf6f147ce53167d334"],["/tags/Homebrew/index.html","16fed5184960359dd8ef58b386ad72e4"],["/tags/Interoperability/index.html","9887dfd187da64b456e4c76230dacd92"],["/tags/Introduction/index.html","bf7f0cfd17c7b800fc9ee5325575b952"],["/tags/Leaf/index.html","f60b4a68653d5626f98decc7b2b8a92f"],["/tags/Linux/index.html","5ab5ab19e544a4f05a1cb7293e880edf"],["/tags/MAC/index.html","9968dd35613d60801a937a58e0185979"],["/tags/Methods/index.html","d20d7744f5c90755d323c421aa0ed11f"],["/tags/Modules-And-Hooks/index.html","ee2e6ec4fe0f110df5afb551ed4cc79a"],["/tags/MySQL/index.html","20574cf25d6726d1b50e89de7c30a2ca"],["/tags/Optionals/index.html","20955009b013a5053fa27cc3dc58025d"],["/tags/Promises/index.html","ad54f560811fb5fc320f483b0ff78f37"],["/tags/Properties/index.html","c48d5040a9b3b7bfbfa44647c9c59fe8"],["/tags/Protobuf/index.html","cf923763be0c0cd0daa42990d4b7f41d"],["/tags/Protocols/index.html","dec89c64cc0819646a6c2b4f047ac787"],["/tags/Result-Type/index.html","7e935e6b06a3e4c69533dece5f8fce1c"],["/tags/RxSwift/index.html","e6f47de946f20b33ce27debfbd3e75d1"],["/tags/Server/index.html","bbe97cef637bcbb19b2f2c14bf89691a"],["/tags/Session/index.html","96b30efdca2bf6b9de7d5749761e4464"],["/tags/Sqlite/index.html","4ca32029a55609fc74e717b776dc67a3"],["/tags/Strings/index.html","883587a84108b7273dba52e30ad3498b"],["/tags/Structs-and-Classes/index.html","0ea34c15ba432cd5b4e79261be5a59d4"],["/tags/Structures/index.html","7b7e23d82a025407198fc90b3d8ed304"],["/tags/Swift-5-0/index.html","c7d74fede13e0118cdfc5f93eddb813e"],["/tags/Swift-5-0/page/2/index.html","e85b664f51636e07684e0cfb825df1eb"],["/tags/Swift-5-0/page/3/index.html","a21defa070919313d43028e9c30d859c"],["/tags/Swift-5-0/page/4/index.html","9e1d2b69bfa891487982ca24394d20b7"],["/tags/Swift-5-0/page/5/index.html","bc639e166faba2b365ceb3207b7598ad"],["/tags/Swift-Apprentice/index.html","f9087823a30e7c1bffa67f32f451bc98"],["/tags/Swift-Apprentice/page/2/index.html","1f1263010dcad4edbfa61f63c64fdae9"],["/tags/Swift-Apprentice/page/3/index.html","8a986eda61d5b485e01543b64190e2ef"],["/tags/Swift-Package-Manager/index.html","0823ce5b1657a71ec2fb1327f96db79c"],["/tags/Swift-源码阅读/index.html","9fa8b2c369b61e6523e927d5d52331bc"],["/tags/Swift/index.html","623f6a9f8613db1dd5ff54737dfc6a16"],["/tags/Swift/page/10/index.html","a4811f3ce47f7527cce9e4987676e8af"],["/tags/Swift/page/11/index.html","dca19b786c28930146db0a0cf7b6cb35"],["/tags/Swift/page/12/index.html","176bb2911658bcf1e1fbc231354f0114"],["/tags/Swift/page/13/index.html","48de9a707765abababa62ba6cf4f8050"],["/tags/Swift/page/14/index.html","042065ad9021be74649c644d06f4bb05"],["/tags/Swift/page/2/index.html","f03f3e243af649d7c913b3064300519c"],["/tags/Swift/page/3/index.html","f323bb78929c6de063861c463ea5c17b"],["/tags/Swift/page/4/index.html","aa8d59be63b76349ba068f4bf2f67de1"],["/tags/Swift/page/5/index.html","e7a9e7ce0c7884cd5baf99f403693150"],["/tags/Swift/page/6/index.html","d17a677733e1860fc120dd4cbf747ed6"],["/tags/Swift/page/7/index.html","6a508d77a067e367175b89f83cde1392"],["/tags/Swift/page/8/index.html","1116653bfd82b3d6688226c67f84710d"],["/tags/Swift/page/9/index.html","90287ee5af6f3bcbdab60bd60647fb47"],["/tags/SwiftLint/index.html","99a815f85f906f186396b69c4cdcc440"],["/tags/SwiftUI/index.html","e0115199c8fa1a97cde123e940104a1d"],["/tags/UICollectionView/index.html","5ada615a3038c862e6c21d04d922270b"],["/tags/UIColor/index.html","1f4cbad8e71be466a74bed1769a26b3b"],["/tags/UIImagePickerController/index.html","9e7adabca79e3ae918e29bd3c290a4cd"],["/tags/UIKit/index.html","44d9f66c9a868cbfef50f6f8f67b3b88"],["/tags/UIKit/page/2/index.html","c7f586da31e5a8866b2835081cd9e85c"],["/tags/UIKit/page/3/index.html","eab0a13b7d6d5db62fc0fd1257cfe4ad"],["/tags/UIKit/page/4/index.html","a6ff59656623cc80954c73ae292c4629"],["/tags/UIKit/page/5/index.html","31b1e648990e2e4d7627ce04ef9658f0"],["/tags/UITableView/index.html","3417799e6b33b0f1152e45ac13d491b9"],["/tags/Ubuntu/index.html","211cdd353531399cac9f9a2d29c4f6f6"],["/tags/Uniquely-identifying-views/index.html","d585f3179e46f4269cde268c8d6ceea3"],["/tags/VIPER/index.html","d2d030dfc438e225101ba581609548b8"],["/tags/VMware/index.html","0af11558c3e3b604ed7ecfb7622ee72d"],["/tags/Vapor-4-0/index.html","6f1ba2a8a9ab0075f5b6f711c6ac32fa"],["/tags/Vapor-初探/index.html","b476f48cd4589d08cf4421213340db9f"],["/tags/Vim/index.html","8e64fe78913e44309be1137e25928772"],["/tags/WKWebView/index.html","edb323e03717f8b0616db4ef698a10db"],["/tags/Xcode/index.html","016b0d09876a5386131175b773ebbe47"],["/tags/appleOS-Networking/index.html","6edcbf294e0d966132c9a15669c13bad"],["/tags/bugly/index.html","312f92e7975509f93c21720796eb9102"],["/tags/enum/index.html","46efc9b2590108bf0fdf087dce25d983"],["/tags/gin/index.html","1f9f10d2a270c2e99139bf3c8a0e4aaf"],["/tags/git/index.html","bd72b1132fc6111b3916e0706e876929"],["/tags/hexo/index.html","ea8bf481442b61c5436eb15d78228d9f"],["/tags/iCloud/index.html","f2a3b0e307e0e515c34c140108a76996"],["/tags/iOS/index.html","2d8e1b42e37437c47b461b2612743a8e"],["/tags/iOS/page/10/index.html","e02deaa26eee3139395337c7eff9dc63"],["/tags/iOS/page/11/index.html","491a4aaecb7e340d399cb37cc7158079"],["/tags/iOS/page/12/index.html","4c158ec97cc0573b895a80e141e572e7"],["/tags/iOS/page/13/index.html","d7ef888c71b505387285087dd1b2cef8"],["/tags/iOS/page/14/index.html","6d5173eefc8893a9c38b5f62da558059"],["/tags/iOS/page/2/index.html","e81810c5d9dceac9e75970f7a3d2fd39"],["/tags/iOS/page/3/index.html","1773b85d9d61f0456312bae410cc7415"],["/tags/iOS/page/4/index.html","0647bf2aad5b64bc27c3b708aea01621"],["/tags/iOS/page/5/index.html","7db30df55733e1875de5762efc2983df"],["/tags/iOS/page/6/index.html","89c22f7de7a6767113ab7beaae876f6e"],["/tags/iOS/page/7/index.html","d4dbff5cdbbd1466c2efa4a5125f15e1"],["/tags/iOS/page/8/index.html","0422a913c2ba6751116c0c02f1b518bc"],["/tags/iOS/page/9/index.html","6866e291ebeecad7a040c3ba2d59514f"],["/tags/iOS面试题/index.html","ac303fa62cdb2f593c3d8e2f85d7b675"],["/tags/index.html","887d1d4d930c2a4c24caedc5aa830147"],["/tags/interface/index.html","10f3e35b9ce72d9469606c8a3c00e4bf"],["/tags/non-optional/index.html","72d92b7e424b0950af8801bb1c1501b0"],["/tags/package/index.html","4bfebe0c9dcf2eff7d2600cd7edc3099"],["/tags/random/index.html","fea19c9a4ca8a76e587f456222b67e18"],["/tags/transition/index.html","31c68ad5273e502e8e78a6aa7bda9c86"],["/tags/三方类库/index.html","1b7dce5a79c1fc24d6423bd66f1deef8"],["/tags/依赖注入设计模式/index.html","6e8a6a944cbad0c47527514bbf7a0bbf"],["/tags/值类型和值语义/index.html","fcf71a00f49beaef2872ee91b5c25062"],["/tags/内存管理/index.html","b31535fd0958af7308d550723c30f899"],["/tags/冒烟测试与回归测试/index.html","4f4081bd10dcf95f7d4fabf54e73e32c"],["/tags/函数式编程/index.html","1fe74c1addd487c9936600cb27064785"],["/tags/创建博客数据库/index.html","b9f64454829703f1abd3b0834955a5e3"],["/tags/初始化模式/index.html","91f269c2233c1dcf2dd55afe42a0199c"],["/tags/单例模式/index.html","fc00617e0edcbaa174c5e61e6a85af96"],["/tags/原型设计模式/index.html","42eef909a9c1607745d568b5cd14b928"],["/tags/命令设计模式/index.html","18428c7e14d61e8cf33683782e747cf1"],["/tags/基本控制流/index.html","34ff02d56fb54227ddb423b2ba1efe67"],["/tags/基础语法/index.html","92bf0f4d493e1630abc970bd5d93abfc"],["/tags/外观设计模式/index.html","daff1d1dcf46abe2c6a9549f553187e5"],["/tags/委托设计模式/index.html","ddf9ddae6d4daffc858c644097fe1eda"],["/tags/子类化样式/index.html","236754cba0a8987dd3e9760e02e64d14"],["/tags/对象池设计模式/index.html","3e21109a09e90fa54632cb8950be4e71"],["/tags/工厂方法设计模式/index.html","2b5bc06aaa2004252e0148d49f22d8b2"],["/tags/工厂模式/index.html","dd5860a899b7d2e5396a9870ce6436f8"],["/tags/工厂设计模式/index.html","8bb349dfa20ec1c09861b8e0f4703c34"],["/tags/开发技巧/index.html","8f1e973f3ea61c57e2a1585630eb2bcb"],["/tags/开发记录/index.html","be1e887d4b444bab07697beaa7a63ccc"],["/tags/懒加载模式/index.html","ad2b302ba6d2f5d67f517ae1b55cb42f"],["/tags/抽象工厂设计模式/index.html","6ffabc84d72c22a5264bfbcd4e574ab7"],["/tags/数据库/index.html","92f2ab10dff2873077a3a1404f077446"],["/tags/构造函数/index.html","5bedf7cc68060a1d5e6e7200ba06bded"],["/tags/架构设计/index.html","6b5e04299dcedbe7ca6d5a01d05d5222"],["/tags/模块化/index.html","a008e83b88da1edfa1e0172fb752e433"],["/tags/模式匹配/index.html","175c67a22e8fcff21a29fcda5e78c788"],["/tags/环境搭建与验证/index.html","e66cccfa1345edc9e0d87cee63754e4a"],["/tags/生成器模式/index.html","616943f44c19467f5e4d783b96c44dfa"],["/tags/用户体验/index.html","955889ac7884cfe4ed03c27dc5828e65"],["/tags/用户协议与隐私政策/index.html","e64d83a5342b10164d845c569ff09d5c"],["/tags/类型与操作/index.html","a7a47970074eaaa96d6e8d9930bf7534"],["/tags/组件化/index.html","8c68bf8d6c3b948156380100943cf582"],["/tags/自动化布局/index.html","6cd479184b0fdaebea68c9effe11ec25"],["/tags/自定义UIView/index.html","387dd91106afe64aa6163980320c4d55"],["/tags/自定义转场/index.html","cf8e1c39e5d6f9c4312be8c3add842b1"],["/tags/自适应布局/index.html","5f8126b61a16029e701b4ab00d6cec08"],["/tags/表达式、变量和常量/index.html","256862cf5e95c340127ad6c740d61b60"],["/tags/设计模式/index.html","d68a6fabb913106025dc7d720508681b"],["/tags/设计模式/page/2/index.html","80528ed18b645afcbd71cdbb8e997f69"],["/tags/设计模式/page/3/index.html","a41fdbe49baf0257eb9356c3df749f35"],["/tags/访问控制和代码组织/index.html","ff11a799315a9bfeb58be80aa993a3e7"],["/tags/运算符，下标和键路径/index.html","90d401b5e98575bd54dd9c22ebe4120a"],["/tags/迭代器设计模式/index.html","72e475840ab4145a460b49e61c1a02c7"],["/tags/适配器设计模式/index.html","27206d0a1347301c379aca1625f34274"],["/tags/逆向/index.html","c485fca88014126463eed571076d042b"],["/tags/错误处理/index.html","a8d552b8792db759a02284f5318b319c"],["/tags/静态工厂方法/index.html","1535e893a5bd504d71db71c3c630b76e"],["/tags/面向协议编程-OOP/index.html","48751249ae0f74a78b28065e645e931c"],["/tags/高级主题/index.html","8f05358608d028fcd47791f1407a6c66"],["/tags/高级协议和泛型/index.html","883fa52545e0b23786f942657ddea9a4"],["/tags/高级控制流/index.html","b462b40e04024e99a02e1309d35772ab"],["/xcode 常用的快捷键/index.html","a120a6d699d680537f50d5873b4e5df0"],["/为iOS应用构建输入表单/index.html","b2a7dc055b03d544fc3952e18cdffe59"],["/产品开发的幕后花絮/index.html","115cd1a8463e7bcb9ee1082db93e30cb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0951be3fc1fdcf0e3ed3587b88d21813"],["/冒烟测试与回归测试/index.html","c5d166b74c31c06e3d504473e44eba42"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a653fd41b564a562265bfaa7f2f76499"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","22f02e8e04abc9d0bf9624c74b7cd602"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","953b2271ac24e03d8760d6b2a63ec30a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7f60b42cccdf140f90c94d9093a3b93d"],["/在Swift中创建自定义集合/index.html","2d15145af101f8054c06cd3240a4f5b1"],["/在Swift中处理非可选选项/index.html","c204a2491e12a835cce002895cd8b971"],["/在Swift中生成随机数/index.html","51a597b97fc24ee95de26cc581f37800"],["/在Swift中重构单例模式用法/index.html","4fdeb9877665ac99a86d2472567cbaa1"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","00b16cf44ea52a36983e9e1ff201b2e2"],["/如何为VIPER编写服务？/index.html","f73600ac7f4bff72acdf2d2f260fac81"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","769e4e3b8b5dd1dd9a4484ed259d6a83"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","45cc271b07aa1fc208af5c05e3f0f53d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a409218316991162fd2f0c8a8afcdb0a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","eb23a6b374d9423c6cf2b8a939d00871"],["/掌握VIPER架构/index.html","71e3d25fd7f3aa0f816f3cd886089835"],["/揭秘 WordPress Hook 系统/index.html","fa3e40ec88ef82d5d2f8eb49b5001af3"],["/比较工厂设计模式/index.html","3eb9d2379056c129f07880151a4969a5"],["/深入了解Swift中的Grand Central Dispatch/index.html","46f94382aedd4e37ffe47f7f10425e6b"],["/深入研究Swift框架/index.html","eb1512164465d1e31c407fd2042a7767"],["/组件化插件化与模块化/index.html","b38ee47af8ac91fc6412d0ea185db846"],["/组件设计与SDK开发基本规范/index.html","0baacec3a772fa6fe3593234a96bef18"],["/适用于iOS开发人员的VIPER最佳实践/index.html","694d0c05af458caca2c9693ecd5b8f3e"],["/选择Swift而不是Objective-C的5个理由/index.html","bb594709da19b69f2a37b50ebb27ca53"]];
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
