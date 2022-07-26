/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","3211bcc25f90da4b8f7b2e859cd3be5a"],["/2020年iOS面试题总结(三)/index.html","5cdaa9cf7cad4062a42b7b794be01ce4"],["/2020年iOS面试题总结(二)/index.html","fc3460c00114bb856d364c115754b7a0"],["/Advanced Swift系列(一): Swift 简介/index.html","63dda9f1386609114db324830cad936f"],["/Advanced Swift系列(七): Strings/index.html","bd1c973412b5c2076a7ffbdd69b69a9f"],["/Advanced Swift系列(三):  Optionals/index.html","d8d1ee05d6ab67bf3f9e457a8c213ce3"],["/Advanced Swift系列(九): Protocols/index.html","e9f5424aba2e4353d5ca58509a8217e2"],["/Advanced Swift系列(二): Build-in Collections/index.html","8304f29685c43cdcf72160e726c83138"],["/Advanced Swift系列(五): Structs and Classes/index.html","9fdc28f95cb4048434e57ee5e98c316a"],["/Advanced Swift系列(八): Generics/index.html","24d4045251998bce5d893890a58b04e8"],["/Advanced Swift系列(六):  Enums/index.html","13597992ad221eaf2acca657d559a09b"],["/Advanced Swift系列(十): Collection Protocols/index.html","9077a6d88c5014644d4c749bfdbee087"],["/Advanced Swift系列(十一): Error Handling/index.html","f854823580c42227e677b882abbce950"],["/Advanced Swift系列(十三): Interoperability/index.html","b4c7294b699f167c8c114cf4220a6ab1"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ccfed735d01e9e1b3fc7d46466af2d96"],["/Advanced Swift系列(四):  Functions/index.html","590ec4c9ffee184314f9fcf20cf67868"],["/App Architecture系列(一):  简介/index.html","7038192f7e0152bc0f66642f761831ef"],["/CocoaPods 设定版本说明/index.html","72116b463055fb3658e65de02a490721"],["/Functional Swift 初探/index.html","88e9cf4d7570339d76c759a56d373eef"],["/Git 使用小技巧/index.html","f048117a726b0a70393bdc2bc2f6e0ee"],["/Go Protobuf 初探/index.html","b8444fd81654a39097fb2c0f78c003cb"],["/Go mysql Tips/index.html","9fb008a750d219c7b3c6cc3e9e521af7"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","48eb0141538f91e04bc1afdedbe30dea"],["/Go 入门篇：2、Go 实效编程/index.html","8a2deb135f74dfdf107b9fbb7df03ade"],["/Go 入门篇：3、Go 重要概念/index.html","0b508e042c364f396cefc52fb7cd0b6e"],["/Go 基本语法初探(一)/index.html","080323ca10d0b9cf2862b25b2200a22d"],["/Linux VIM 命令及操作小结/index.html","dbb110cba28b56ccab8c921616315208"],["/MySQL 基本操作/index.html","19b0e170b62f80da0feb362cb48f41b7"],["/MySQL-列类型和数据完整性/index.html","94475af601ff7a6c8fbf0302669b5b90"],["/MySQL-数据库设计和查询语句/index.html","b954c205951dfa8bd42fbf60278d140b"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","e3ad5ca6d9227095712db6b49baa3921"],["/NSCODER和SWIFT初始化/index.html","d9d462770ab115de8a8f2a2f49464aeb"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","c0c9cd6d10a4603f3c9976cd37cb94a5"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b8723b80cac54c07e3f95a61032831c8"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","24edff971971d43043ae93e10865c14f"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","f632cc02fa9207c9d3f5adf59d2eaf09"],["/Sqlite 使用Tips/index.html","c79028d936b4c8e281a39fe8083eafd3"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","37b091cde2ae90595c4ec9b656df2651"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f19c3184bf99cc2c75e94abdf1a9c607"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","9a98b66d26bcc6a38003c49b87debdd6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3d2c084add6fe8a235878c8e91dfa440"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","e91223cf7a59c49132d2c057cfc4a2a7"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","415f6b6a4593f3e1d33d67cc724aa32e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","bf3a5fb67c0eebacf7a45ab2adfaf23d"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","35bbe3b79c4d711e767ba71aed31d2e7"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","72f6352c9ae94c78e4ec9daa95c137d9"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","f79cd079334aeb2d03f3a75a4faf68b1"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","4bbfbcd4c0f5491dcd689ab7234df2c7"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","c076bcbacbba06db51cc8ea648db74eb"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","defc0b0dc6f487dc8bf5b06c68e2d99d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","fbb78e1cb9539c2b73cfe58def0e6873"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","2348101ebd62dde3d11ee17910430289"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","51af6c881fccaf3f8134c64a51e7a822"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","b9207baaab5dc958b2c8517c97b7bc5a"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","12de0f48dc367ac8a48c7df8b9899cb2"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","b6c72cec3fdfbf240f7e1019a5c184f2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","162d3fd4c5907725658b47bdeac0de4f"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","e4e80b84d740d495642251fd9955d6eb"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","c839b5e2f55672b2dbc299a40ee2c7db"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","023b9aa15f15dcb43bbaf45726ed6dc7"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","56a64b60299dd2496b1d9d12d58dc281"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","24d210393b98f40cacaa16370e884c2e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","58d690ceb9313947f9fc60d2ef310087"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","fab87aff0c4abbdfa29e1a09d8997f5a"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","b734431fcbf4dfe949557b8f2b6ed0ef"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","8b747d5ff7e0065902a1526309b3dfa2"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","34adf38fd45df125fa1b617ffc1aaf2a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","3fed8f80882a0584ba0d67a6cc5bd320"],["/Swift CompactMap vs flatMap：差异说明/index.html","80967bc882203acc7b01dc6fa754fec1"],["/Swift Grand Central Dispatch 深入实践/index.html","c6a4a6bd0097625e1b36aa629a8dc6f3"],["/Swift Lazy属性初始化/index.html","c6d68c3ec53e700eb717370b2d78bb2e"],["/Swift Promises 初体验/index.html","bc60fcaf8a399cfd27ada6a0056d0f04"],["/Swift Promises 探究/index.html","fb778c52927239e96daaed1d8adacc62"],["/Swift UICollectionView使用指南/index.html","83a929402d759e330680f57b1fd8d3bf"],["/Swift URLSession && Combine framework/index.html","31a510954be4c293d3c70ceb5cda159e"],["/Swift tips/index.html","82a14e51999c4e355d60ccd4b404331f"],["/Swift 三方库：GRDB 使用指北/index.html","8fe62245367a00607a1976512dbfb6c6"],["/Swift 唯一识别的视图/index.html","cb05ca39028c431b02386299b7a08afe"],["/Swift 如何学习现代UIKit？/index.html","3022b1c77accf8af35265c06c27e4907"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","969aa563d24bb8d45862f0dca7d5cde3"],["/Swift 用 compactMap 替换 flatMap/index.html","91da47c53bd78c0ae7fb9c0ca75c81da"],["/Swift 选择和播放视频/index.html","685456a8c1a48e2ff84871c8d074a7a6"],["/SwiftUI 系列(一)：1、 简介/index.html","95a004ab3e1b313e79fb27c47202196a"],["/Swift中UIColor最佳实践/index.html","9e3adc841f8b4ef4fb9b63db60fef8a3"],["/Swift中快速简单的工厂设计模式/index.html","851f9648db1ec3404f5c5570aa9e2c00"],["/Swift中构造函数与静态工厂方法的比较/index.html","e6c98cfd60fb527abedc0f70cbc5ef9c"],["/Swift中的UITableView教程/index.html","01af27964713910a6a65cec53b747595"],["/Swift中的懒加载模式/index.html","650256ac231f5b387ae57ad910196ac1"],["/Swift中的模块和挂钩/index.html","0f9afc2dd906795c8c33b05ddd0350d0"],["/Swift使用布局锚点添加约束/index.html","5b5c145f948f776069283cf23fc1057c"],["/Swift依赖注入设计模式/index.html","28619e9cd9c998f62c5cb1b0ae0e5bfd"],["/Swift关于Dependency Injection (DI)/index.html","9fd4a1310d053ff96c8abd97edc5fb06"],["/Swift初始化模式/index.html","bda713fe97c2db5269b13b8c4cf82002"],["/Swift单例模式/index.html","d4eccf809f3ab5940ae3d79820eb258e"],["/Swift原型设计模式/index.html","2f592bac92cbc13acc084b0508d432ef"],["/Swift命令设计模式/index.html","074131c20036efb323407842e1c18cb9"],["/Swift外观设计模式/index.html","f7cbf8b62b5b4e01d260b780c6beb054"],["/Swift委托设计模式/index.html","36eec65cf94a5d64c6c866f7c2247157"],["/Swift对象池设计模式/index.html","c9361f87d3da167510cd47ebc35cabfa"],["/Swift工厂方法设计模式/index.html","79c92a126b78937b4da67761d740e845"],["/Swift带闭包的懒惰初始化/index.html","fab55831ccaf8c5f603de5db9c7c8b8b"],["/Swift抽象工厂设计模式/index.html","8d8696fa428e5d08681f29aa9d2327b1"],["/Swift掌握iOS自动布局锚点/index.html","22a41079f658898c764d54240344acfd"],["/Swift支持旋转的自适应单元格/index.html","e1238b607a2595c78945379d12578fe7"],["/Swift枚举值/index.html","dc3c932f49b856fceab5ba17de9a7b69"],["/Swift生成器模式/index.html","7478cdfaa73d3c4ffcfdec27e5ec4b29"],["/Swift结合Xib文件自定义UIView/index.html","43b0429e38565848611eb1df06523ca8"],["/Swift编写的20个iOS库(一)/index.html","7be95530b3a84144b930afdc26fad448"],["/Swift迭代器设计模式/index.html","9c9a72bc95b099b024b6f74423f987f6"],["/Swift适配器设计模式/index.html","1b59b4011f9f3c3daa0b8c6388078435"],["/Swift静态工厂设计模式/index.html","c3d05537fe2228457753e43ac969c7ea"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","163ce8a4861d1fbd48e9fa5efd6c32d6"],["/UICollectionView data source and delegates/index.html","b483207d22705565444d00aaf115c614"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","ee3a35c9a75a9da71d69ebc4e8df9e1d"],["/UIKit初始化模式/index.html","194306fd4f478a3660f471640d1f2abe"],["/Ubuntu18.04替换国内源/index.html","c3fa0b2928b51cb692e58b1512369057"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","198c62c09fd4cfe237b864748b58c716"],["/Vapor系列 (一) :  Vapor 初探/index.html","2cc9e90527c175713e69aecc425d1b10"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","20aa5716d89597a50b0301f48db4e29f"],["/Vapor系列 (二) :  Hello Vapor！/index.html","491978622572faef012227992739f530"],["/Vapor系列 (五) :  使用session进行authentication/index.html","bf98972eeef1e489687a5455162f5156"],["/Vapor系列 (四) :  创建博客数据库/index.html","994c8b340e4cba9f9cc3c31749faa5c6"],["/Vapor系列(六): 徒手撸一个CMS/index.html","2b614334a2cfa4afcb09a307e8d1ee10"],["/WKWebView与Native交互注意事项/index.html","e22a2f6e052ed255de2a88402095da52"],["/Xcode扩展/index.html","95bfca39977b0e2b448748d96415aab2"],["/about/index.html","b394bc28c945cdc37137ace233f03620"],["/appleOS的Networking示例/index.html","f22f7583b73205d91730a62f7e36469c"],["/archives/2020/03/index.html","7886a61d1e091f6885dc5f17a6bbd739"],["/archives/2020/04/index.html","dab3cf84bf5a1e8a69be131659cec65a"],["/archives/2020/04/page/2/index.html","b9cb5d237db85dcc75d7edab3bfc12cc"],["/archives/2020/04/page/3/index.html","45c9782b3467bd1a3c3749f97cc91655"],["/archives/2020/04/page/4/index.html","eabb6b1294fb17144be3c0c09be8fd8c"],["/archives/2020/04/page/5/index.html","5690766736ffa0f919ef4443dade727a"],["/archives/2020/04/page/6/index.html","4a38029f247bc1ddbae7e966be8edc66"],["/archives/2020/04/page/7/index.html","5ffe102d42f232780fcb606846193db0"],["/archives/2020/04/page/8/index.html","f4ca1545d01fc092837bdaf26bff3bbb"],["/archives/2020/05/index.html","79ab1cdbbdc8d3982adb64ce186d4eb1"],["/archives/2020/05/page/2/index.html","b344c55c0e8a97a2b536bcd437b727e5"],["/archives/2020/05/page/3/index.html","81fe4bb0d3d53894cc324027e4bbf167"],["/archives/2020/05/page/4/index.html","12416cf6d4fc5f3e577d80e391407686"],["/archives/2020/05/page/5/index.html","1edd7391492ed1b349a4467be660ea09"],["/archives/2020/06/index.html","923779bdf3eb43ad9b2d189e750522b7"],["/archives/2020/06/page/2/index.html","0681b7e66297bb55ddb8b51c00c54bc9"],["/archives/2020/08/index.html","95292e46abfc41fb4385b89d571660c4"],["/archives/2020/09/index.html","058ded50f14e8ba5c216cc6ad4575847"],["/archives/2020/10/index.html","767b17a9a26484b7ebb8bf5748b89233"],["/archives/2020/11/index.html","fe80f604cef10a62b63589ac2245046a"],["/archives/2020/12/index.html","8ab673eb34390b2f7958039e3bcc6c41"],["/archives/2020/index.html","c8b98eb95585686ea71ff6282228729d"],["/archives/2020/page/10/index.html","62d236b5c666cf667fd35fe6315d3b98"],["/archives/2020/page/11/index.html","c4ffaf39004d5500d66b3574082a5f9f"],["/archives/2020/page/12/index.html","2421bb052d9768fe871b05b09a90fde8"],["/archives/2020/page/13/index.html","03acfd68a6d271f17b2fe606675309d2"],["/archives/2020/page/14/index.html","cc7ff3b52524272b6628a7f5d09ba829"],["/archives/2020/page/15/index.html","1c2ffa596a80bf77eb0ed6b76fd3e2db"],["/archives/2020/page/2/index.html","2f71830e07764fca3ed3f1823654b3b5"],["/archives/2020/page/3/index.html","1b3b83f878bbc3aa7750b5b8f98cc8d1"],["/archives/2020/page/4/index.html","10c5e59ce68174c9dcbba463811ed665"],["/archives/2020/page/5/index.html","0e1a3627844abfbf7c061d5b92007b62"],["/archives/2020/page/6/index.html","4d46a02b7c2aee07190860b699672ea3"],["/archives/2020/page/7/index.html","6413c6df933a3d78c29916e5ac805bfc"],["/archives/2020/page/8/index.html","5ca4c044fe5619268ad64c857017e106"],["/archives/2020/page/9/index.html","397ccda7f131b97befc5c64c949337fa"],["/archives/2021/03/index.html","8bccd85eeb828c191adbd93af3ec4072"],["/archives/2021/04/index.html","268e63fad69cf21991b02c17832f55f7"],["/archives/2021/05/index.html","ca5c0005c5b4ba0e514fde2fe77b709b"],["/archives/2021/06/index.html","9aaf4fa032823f43f9001c86a6f11b9c"],["/archives/2021/07/index.html","88262ed0cb7a5f440bb0c91f9a57a521"],["/archives/2021/08/index.html","07657fb5df73daeb6f02296e9eb85435"],["/archives/2021/09/index.html","57ecefaf64039885d694d5d8cf4ad401"],["/archives/2021/11/index.html","a46492c6f8f66b47f66cdc8c703c5a98"],["/archives/2021/12/index.html","f5def08ee1c1637d4448c4a41fd81d15"],["/archives/2021/index.html","27b53a5afb92dfba1747aadeef351a3f"],["/archives/2021/page/2/index.html","ed74be4f98ae40a7d3e2fcf869e27abd"],["/archives/2021/page/3/index.html","761b6588761e78f6e2877f2cbd0cac71"],["/archives/2022/03/index.html","c05c49bbc915779cb512288b7bd0336d"],["/archives/2022/04/index.html","4e289821fbb8c025dc5528faa2606580"],["/archives/2022/05/index.html","86121c7551d4243eb3ee09bf50dbe9a4"],["/archives/2022/06/index.html","a5e55ccad5692d845431dfe95aa22854"],["/archives/2022/07/index.html","71a0f00603a8b5e427c0d40d605f8f5f"],["/archives/2022/index.html","98218d41acd64be6a942b91faf2a9a6c"],["/archives/index.html","02205f5b94d26970063f5672a84b9d83"],["/archives/page/10/index.html","7f696edd94ca2469b21e24a32556e9c5"],["/archives/page/11/index.html","ab4c360b2a4dc67be6b8566993922a67"],["/archives/page/12/index.html","854ba7faf9f15b40b451e3e14ed4f9f6"],["/archives/page/13/index.html","dd7ee9061772ff71aa844958dd0ce25e"],["/archives/page/14/index.html","17df505378484026028dcb193a2a90b6"],["/archives/page/15/index.html","6b4b15a11bff21247f55156e1a1b78ee"],["/archives/page/16/index.html","2eace70cceae078b078e683652c93a47"],["/archives/page/17/index.html","05165a38020c50e4030f8b33d16a4f40"],["/archives/page/18/index.html","e398d4a0c5305117555ff349a31822bb"],["/archives/page/2/index.html","b6d23c979cb6836ff37f70132a8513ca"],["/archives/page/3/index.html","fc8cf92f4ba8072950dd57f1f74c7022"],["/archives/page/4/index.html","46746e66d6b55051d942322efd5cc864"],["/archives/page/5/index.html","7bfdfefe368035ad12458ff89d48e54f"],["/archives/page/6/index.html","ad26f6fd1cb47fff77da31a4734c42c6"],["/archives/page/7/index.html","c9413f8840f898d1444ca188d36b254b"],["/archives/page/8/index.html","c0a883b9b2f9de3c96d918440778115a"],["/archives/page/9/index.html","6864d19cb50334b4ad2e44ac14e69a44"],["/bugly 上传dYSM文件小记/index.html","d355c70d4ad3134f1d9ec39f7a76882b"],["/categories/Advanced-Swift/index.html","7fed1a2d979066a586dd02f5746c5d48"],["/categories/Advanced-Swift/page/2/index.html","d6836b89468859da51caf5739230934c"],["/categories/App-Architecture/index.html","9d24ce5e3c762732a1781d93a478fc11"],["/categories/Array/index.html","f50a9dc79b2feb608f40ffd76b65c019"],["/categories/CocoaPods/index.html","a735c574b42761d56f18755730cbc513"],["/categories/Codable-protocol/index.html","233d1ddc082e34e2bfb7da82de3357b0"],["/categories/Combine-framework/index.html","c57a0f1580b739b1263ffbecd516a697"],["/categories/Combine/index.html","d9dea9b69f57f38ede8eb2286f6aad68"],["/categories/GRDB/index.html","9925c7063e08db655781aa5171649e91"],["/categories/Go-入门篇/index.html","b20083e3072b64f0115bc262ca589a5d"],["/categories/Grand-Central-Dispatch/index.html","8002d7fceac0d392f5dc1688c2b61294"],["/categories/Homebrew/index.html","b15a95eb9230dae0398955fdcf9b7826"],["/categories/Linux/index.html","c39a97fc2097a5d49990a492474ffc93"],["/categories/MySQL/index.html","e0fc6a38573e24f15c6d27fd13a014ab"],["/categories/Promises/index.html","a5e8ea915601830be327e36fddc6be2e"],["/categories/Protobuf/index.html","b6eb7e88a0d92d4f4d8bc7e530611937"],["/categories/Result-Type/index.html","2c6d0be7fafc740aaff1e8e0f7e90b07"],["/categories/RxSwift/index.html","5ff816dd8037120d28426ab6d20ac690"],["/categories/Server/index.html","c4ae3824c7680918a011904bdbc225f2"],["/categories/Sqlite/index.html","5eadecbaeb6924bf767b7e3199c20052"],["/categories/Swift-Apprentice/index.html","cf0740c27ca96d7c05b582b423eb39ff"],["/categories/Swift-Apprentice/page/2/index.html","37eefa33a308e8d7554e08b4620e75cf"],["/categories/Swift-Apprentice/page/3/index.html","11bfceb554e56020b8783d28f58055fc"],["/categories/Swift-源码阅读/index.html","d8460004b424057d70649f237e1a5bad"],["/categories/Swift/index.html","85eb7edb0d33dd1145ef6486061dc79a"],["/categories/Swift/page/10/index.html","2d278b5de3f49e976f6a752ecdd938fc"],["/categories/Swift/page/11/index.html","09eaff999dd557eada49b1d762c0d191"],["/categories/Swift/page/12/index.html","7a9f4f580c4e309cf1cac1aaff60e247"],["/categories/Swift/page/13/index.html","727f94ac4db395103f3e4b6b8c900736"],["/categories/Swift/page/14/index.html","83e4731637505f19e46d0b44b8144713"],["/categories/Swift/page/2/index.html","aac251a72a364c2bc96851e93634ff23"],["/categories/Swift/page/3/index.html","76bfca6c59bc609c5db6089cec89c498"],["/categories/Swift/page/4/index.html","a2f15e20d2fde4cab789c8ff1833dbf0"],["/categories/Swift/page/5/index.html","70683b591e046eaae42b4e7ad80db6ee"],["/categories/Swift/page/6/index.html","d20adbc23cab1d41f242c5bb760b5ab8"],["/categories/Swift/page/7/index.html","3d18413892314484a7d9ff6ae35b0762"],["/categories/Swift/page/8/index.html","251a1481ccc4f6542a8706fc8beb9ff0"],["/categories/Swift/page/9/index.html","0208f94be7777ca92a790b1b434d40ba"],["/categories/Swift5-2/index.html","025b35ca45708a0fb05f60773865e180"],["/categories/SwiftLint/index.html","075660a8e58ad491bc45add32c2711c3"],["/categories/SwiftUI/index.html","18f5e494ef4c4c618028c35b20717bd7"],["/categories/UICollectionView/index.html","93bbf15743c8b17b5825ae37322755c0"],["/categories/UIImagePickerController/index.html","11474531e8d893792b175b17878fc9bc"],["/categories/UIKit/index.html","062a31f166c8114d0906abae7ce8c897"],["/categories/UIKit/page/2/index.html","44fa35dce85cccfe42ad9d270d6eb130"],["/categories/UIKit/page/3/index.html","07637aa0be1350c9422df36fac64d00d"],["/categories/UIKit/page/4/index.html","acc9262b886c29053b8e0813a2585cda"],["/categories/UIKit/page/5/index.html","2b0992a715014e9d90502eba60801377"],["/categories/UITableView/index.html","ac3f4966ca22a7020829badfe326ecca"],["/categories/Ubuntu18-04/index.html","91550eb6394cb4b8ac76e582bd6e8100"],["/categories/Ubuntu软件源/index.html","55c44886218b69137abeef616d518f07"],["/categories/Uniquely-identifying-views/index.html","62c31aa64ea4906e3b247c904e27c5ae"],["/categories/VIPER/index.html","1c6010503f2e7ff5221c2914bc3a3e51"],["/categories/Vapor-4-0/index.html","6436a5de3befceca380427541417eedc"],["/categories/Vapor4-0/index.html","c649dbb6c07f414bf22ee65084fad234"],["/categories/Vim/index.html","2307e58e62f1678dbd2544324c7e31b8"],["/categories/WKWebView/index.html","eb0c19dccd271a7066d351aac24c5333"],["/categories/Xcode/index.html","850f0c911f5930198fdfea210b0aae4d"],["/categories/appleOS-Networking/index.html","31210b32ec635ffb5ba7e23a7fcddebb"],["/categories/bugly/index.html","592dbee513ed1596412aae72e3706a9c"],["/categories/enum/index.html","4b3aa9ad17cead03453b872b5e890c5f"],["/categories/git/index.html","972e1c645490f1da94ab474256d1c969"],["/categories/go/index.html","5686d34a45a467ba150e18c51f249e3e"],["/categories/go/interface/index.html","4de0469daee32cd4a8789c048da37a71"],["/categories/hexo/index.html","c231e3436fbafec803b9da19cfd7e0e9"],["/categories/iCloud/index.html","66089f15f2f61dba69623fdb45442cdb"],["/categories/iOS/index.html","d829a76221f6bbd89776cff3c7f63aed"],["/categories/iOS/page/10/index.html","9211afec7001f8ad3b699f2ba5d5376c"],["/categories/iOS/page/11/index.html","84b90face4315f294e2bdba8a6e43fb3"],["/categories/iOS/page/12/index.html","a496d0c99f600cd2b2c0b1f413aa2bfe"],["/categories/iOS/page/13/index.html","9c7f1879960adf131d9371e0ebb73972"],["/categories/iOS/page/14/index.html","943ba92bf03d0f73992c72634c4c3841"],["/categories/iOS/page/2/index.html","570b3042c7582896820e5b6200027c03"],["/categories/iOS/page/3/index.html","2d2e6c7eba577e2b09c6b4bca8910043"],["/categories/iOS/page/4/index.html","7bab9709c2f3e55b72390ffc459c5f33"],["/categories/iOS/page/5/index.html","8d9c7f3e16df45c65218fbd373ddeda9"],["/categories/iOS/page/6/index.html","7d55c793979b674d73350e3472f9a741"],["/categories/iOS/page/7/index.html","b22cfb8fe628d4766dfb150147b41b31"],["/categories/iOS/page/8/index.html","ce977ac72151c1f816fcaf809d7a4a7e"],["/categories/iOS/page/9/index.html","5742580da8d6482bec192d651d024fad"],["/categories/iOS面试题/index.html","7e70c8d806c8678dde67b73e7fbbe6ea"],["/categories/index.html","250f0b6df481ab0248f72e3c75de2a57"],["/categories/random/index.html","22eace8dba3d93e10063cbf5180b4a15"],["/categories/三方类库/index.html","de494d5371928c2119162d40dbbd3fd8"],["/categories/函数式编程/index.html","1de20ab689afe06622829f89f8d51fc7"],["/categories/子类化样式/index.html","4a9533828c9eaef2229974689eedfcbf"],["/categories/开发技巧/index.html","3627557df9a37ff140adeae58b7434a4"],["/categories/开发记录/index.html","15a20ba3d6d676b3672df3f5ec0b0148"],["/categories/数据库/index.html","3e9ea662cfcab02b9bcdfa87e24812cb"],["/categories/架构设计/index.html","f8d859e9b0aa45b6f2cc6092f79c63d3"],["/categories/测试/index.html","327a83f55eed661afa4bd76e87fa85e2"],["/categories/用户体验/index.html","f1af54fd162a2cc13d4abb49a22e4a71"],["/categories/用户协议与隐私政策/index.html","244b275cd42d486ce9fa038f9cb954d0"],["/categories/组件化/SDK/index.html","778b99f920cfa876e0588c6654af3de6"],["/categories/组件化/index.html","4e7b2e42fd48f606ebe1b803cfce02a1"],["/categories/组件化/模块化/index.html","fb6ff4cc41985cc8d44b8d77b9170b48"],["/categories/设计模式/index.html","717890abdfa08e7587851b6f2acbfa0d"],["/categories/设计模式/page/2/index.html","ad940b9f0bcc71c673d29761b65f253c"],["/categories/设计模式/page/3/index.html","864ff6045c221a90a60fdae561c631fc"],["/categories/逆向/index.html","7e3742d67ea814fdb1837cab4960381d"],["/css/main.css","def7fadef1d6af4fc871c8342c4b6712"],["/go moudle 导入本地包/index.html","7e4f57385552b151846965dd10f74b46"],["/go 库专题(一)：gin/index.html","ea29cd64ae9a1e27d550b148e04a6310"],["/go 每日一问/index.html","0df778ffb02aa25bd71ff6cf4e64ca17"],["/hexo部署失败/index.html","93ea369f15c3547493b5f8a09e1ef7c6"],["/iOS 15 适配/index.html","a857ef80554d2c8619c6106f9b2d3300"],["/iOS VIPER架构深入实践/index.html","6fd68035e044d7cf12334a2609b240ac"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","a5cb4a42aad8bc422edcfdaaede1ee31"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","1eea7dd66aa40a6a29c475f09a4e77aa"],["/iOS 自定义视图，输入表单和错误提示/index.html","d90170526ee6790e7dfd56303b40061f"],["/iOS如何使用iCloud文档？/index.html","d1f57e2778fa226cad1132e04579bb4d"],["/iOS子类化样式/index.html","26731e73d4b0d4d955e342a84354eb56"],["/iOS开发记录<一>/index.html","f917a43817186c7bbaf60b9d64b66d7f"],["/iOS自动化布局编程/index.html","cf7b185afdef014c466396003b425933"],["/iOS自定义转场(By Swift)/index.html","98e831726a42b03c4feaed33e0922b2e"],["/iOS项目架构：使用VIPER/index.html","59c24b923861c0f5ff876e28bfbbe008"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8ffe8ddf88e5bf97093142b65492c2c7"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","ef02948a55fb7f139b6af762e31c2314"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","397f09d07e4cb52bb9ac2506045d8706"],["/page/10/index.html","39341cea19b6b03687bce3f8198a05c5"],["/page/11/index.html","c8761904dbc805059ede5ebdf1100fa1"],["/page/12/index.html","9636559186728e5da115a79626b26a54"],["/page/13/index.html","562c77ba6c8442546a3e40d886b2eada"],["/page/14/index.html","f78eb7df6deb7392efc86881803e1756"],["/page/15/index.html","60d2dff666585602b1e388a7705c00c3"],["/page/16/index.html","1520b0bb3eba10420bc1b0bd4883b78b"],["/page/17/index.html","b95e9ee65efbe60a4247209ad3647977"],["/page/18/index.html","2e71a4eb788ea8a21d5bc597c86b6e52"],["/page/2/index.html","74c553f5a647df3210fb4901f5bb6bc9"],["/page/3/index.html","fe65ab24684227d5476e8cea9cf80d0b"],["/page/4/index.html","0dae24edef4e4ce1f2b6f7d4ad962b08"],["/page/5/index.html","8b3e76f3583d6bf3194ef1cf0bc1b6b5"],["/page/6/index.html","73e0c34e789410c7a119946843886e27"],["/page/7/index.html","f1ef5106a7b096fb551393db0a74e0b4"],["/page/8/index.html","642c70fac2e95f8023be5311d24dc4cd"],["/page/9/index.html","d50fa243f9c5201dabd0a5fd009d4567"],["/schedule/index.html","f1acf58982ffa1f70a8aac0c80b274b8"],["/storyAppPrivacy/index.html","1ccf68638116c96b076f905a752f95ae"],["/sw-register.js","098327e4b8e77e05054b9da7f834bf0a"],["/swift 专题：函数/index.html","d08f0e71e387bed41a1afe388d556e92"],["/swift 专题：闭包/index.html","fad8bf40cfc85be692341e4225333bcc"],["/tags/Advanced-Classes/index.html","84d0757799d99738ed7cf5970f457c45"],["/tags/Advanced-Swift/index.html","513c0080abaff76bd1fc17a03c44ce41"],["/tags/Advanced-Swift/page/2/index.html","a87ae347ea09d8f8bb85a5baa92c4e54"],["/tags/App-Architecture/index.html","a18323da8d0162c2317d833b584bafe4"],["/tags/Array/index.html","f47a36f58663ec12b0c4f3d77e04020e"],["/tags/Arrays-Dictionaries-Sets/index.html","059806edaeb27125d6f7417930ac9d50"],["/tags/Authentication/index.html","05d13c056e2b1158994c0d3f6d9968af"],["/tags/Build-in-Collections/index.html","bec103d3f855d93f255999096ae312aa"],["/tags/Building-Your-Own-Types/index.html","766f6a12b3723106a3d60f707529fd80"],["/tags/CMS/index.html","efc519831b9d623465e81c25bdea3b81"],["/tags/Classes/index.html","056d496411a8bfbae9c49b4b674b92e8"],["/tags/CocoaPods/index.html","bfaecbca9fa9ab575fab82b5f0bdbe30"],["/tags/Codable-protocol/index.html","435933f2f6f201313198a245858b30eb"],["/tags/Collection-Iteration-with-Closures/index.html","7f84dda5965865ce432bb533f815e3c5"],["/tags/Collection-Protocols/index.html","97709f87ea123aa04969d0ec732cc390"],["/tags/Collection-Types/index.html","526f5845ec24343fe990664906c56a5d"],["/tags/Collection/index.html","acb11563fbe4823535abf71276cf1302"],["/tags/Collections/index.html","11bdcddb432e092677a61a66502345f1"],["/tags/Combine-framework/index.html","d329a41b5c68375312de2ea5dd10c888"],["/tags/Combine/index.html","178652dd420e090d3ef3ec6999b5d266"],["/tags/Dependency-Injection/index.html","0dce6761153168a64558ef929317b0cc"],["/tags/Encoding-Decoding-Types/index.html","d93b550e5a79e86a52ebb0b2f958f54f"],["/tags/Encoding-and-Decoding/index.html","9df416ee96788643ad11ee2275b3ebf1"],["/tags/Enumerations/index.html","e34e0fcf4aa8251892281f5f3526eb30"],["/tags/Enums/index.html","abe6ed6a55d713311b1ca83b45b1f16b"],["/tags/Error-Handling/index.html","4703937fc774a90256adbea7588406d6"],["/tags/Functions/index.html","fb29790238db48c9a310ee62d034378e"],["/tags/GRDB/index.html","31fb1f31e80b4aa34eeb6634328760f8"],["/tags/Generics/index.html","546d00908d565636919dadb185cfb49e"],["/tags/Grand-Central-Dispatch/index.html","78da177debe002ec6167d1947a2bff71"],["/tags/Hello-Vapor/index.html","c014bac9f5d466c665302164e15a291e"],["/tags/Homebrew/index.html","a7ac2d65ff86963f565c4d6fa925138f"],["/tags/Interoperability/index.html","4e2a84bc2e0ce67f7ec9d0e391e78092"],["/tags/Introduction/index.html","13813469e37d9c74df8999d9e0941ffa"],["/tags/Leaf/index.html","908505e0d21019cd0110b535baf30f76"],["/tags/Linux/index.html","99fafa0f4544053cf53c3582fcc745ba"],["/tags/MAC/index.html","c881304119bc79a8322b25dec18d60d0"],["/tags/Methods/index.html","d132bc4cf7386f066f8afafa2e4afd22"],["/tags/Modules-And-Hooks/index.html","ab1c682a5ffcbd207c54b2c99e0660d3"],["/tags/MySQL/index.html","a92b1d325d539805e8ead06bef781dac"],["/tags/Optionals/index.html","8ec5a01fccd0f5930ef0192317c6c080"],["/tags/Promises/index.html","c5160e1acf260d67649b2e7e8cadad2f"],["/tags/Properties/index.html","acfb7ef1bcf11f762d6fd30ffda767d7"],["/tags/Protobuf/index.html","7b916d653cd36ea9a29ae7b80dfe0a3a"],["/tags/Protocols/index.html","c5a5f73fea26721417e07be7bf4293b6"],["/tags/Result-Type/index.html","67c3ca35396dd32e5752315369730372"],["/tags/RxSwift/index.html","5903ae38816c3af53183a2289c3269c4"],["/tags/Server/index.html","c92b3014490e6df196c8fcdc808b8d86"],["/tags/Session/index.html","db6cf234439c754e4229d8d81d68fb27"],["/tags/Sqlite/index.html","12bdd5fb66e96717e498b165a7684386"],["/tags/Strings/index.html","8eed355027b0dbf3cebdfebfab868113"],["/tags/Structs-and-Classes/index.html","823379ca9b3b83f1c705efaf52e29b9b"],["/tags/Structures/index.html","707639036ed202f5d65338f99628f550"],["/tags/Swift-5-0/index.html","ebdae2ad92a12d48ea8147d0808df5c3"],["/tags/Swift-5-0/page/2/index.html","dd7c8978619ce37a77a001f7cddfcd1b"],["/tags/Swift-5-0/page/3/index.html","172b0f207561f8ccd6523ada61a8fce2"],["/tags/Swift-5-0/page/4/index.html","8a3aaa67e6c35835e384cd50b32fbd4e"],["/tags/Swift-5-0/page/5/index.html","f048c44e56e018d4bc12fa25a5ab7175"],["/tags/Swift-Apprentice/index.html","6d0bf3c29a98438d7e8e657612ba9a57"],["/tags/Swift-Apprentice/page/2/index.html","c5ef666565024157df96989d470c622d"],["/tags/Swift-Apprentice/page/3/index.html","871560134e4566af4f6f9e839302f323"],["/tags/Swift-Package-Manager/index.html","e6f42c154bb52fa47d6822bf60895b05"],["/tags/Swift-源码阅读/index.html","06a9465e9da384f59f624e2f2faf0ce0"],["/tags/Swift/index.html","02644469306cec9e5ef568ea881d78ef"],["/tags/Swift/page/10/index.html","ac7a3772816f8e35923d186273d5ee62"],["/tags/Swift/page/11/index.html","5c0bea7c23ab27be6c71c231c400b7b6"],["/tags/Swift/page/12/index.html","df8ab453cc0900d86cd2ae7b5db9adb4"],["/tags/Swift/page/13/index.html","a0f8ac4edea4e608c9166a0887781d01"],["/tags/Swift/page/14/index.html","ec345bd3e3b1f05cfa579a669b5de636"],["/tags/Swift/page/2/index.html","4cf722906b76dd2e47b071368ad52307"],["/tags/Swift/page/3/index.html","dacf37d7909ba6ec27a29c750df90d85"],["/tags/Swift/page/4/index.html","433b50662be15cd25d4582f8e484b37a"],["/tags/Swift/page/5/index.html","08d8d014f2cecbe34af6b4903264c94c"],["/tags/Swift/page/6/index.html","c1a02c588817590260f19b40c59a6765"],["/tags/Swift/page/7/index.html","ef3cff7602e7a422f094a2133e2d14b5"],["/tags/Swift/page/8/index.html","85ed57c5c5b8106e5d92168ea428b998"],["/tags/Swift/page/9/index.html","d0f3707ebf03f608e546cd51945f559a"],["/tags/SwiftLint/index.html","513f3e76a913d5bea87c43c072363e30"],["/tags/SwiftUI/index.html","938eecadb84540295ed275409dc93643"],["/tags/UICollectionView/index.html","4a98216e4a81f0da360ea007622407f4"],["/tags/UIColor/index.html","c40e4a5cf61706504a3e44506688a3f7"],["/tags/UIImagePickerController/index.html","74365de27de1a05d0634a5c7739819b0"],["/tags/UIKit/index.html","21bcdedde433f1917c1b6021674a71b5"],["/tags/UIKit/page/2/index.html","0976d3fbc4527d9322a22ac421716e69"],["/tags/UIKit/page/3/index.html","34ae917bbe4d87e6d84307b4046962c9"],["/tags/UIKit/page/4/index.html","0e4229e61bbf24c4515a4259f23f2aba"],["/tags/UIKit/page/5/index.html","fc279b76bc585c3fbf8eded8fd486d4f"],["/tags/UITableView/index.html","51a59f366bf9a60999be8fb3b6ddac4f"],["/tags/Ubuntu/index.html","b4b35b279752c2757febc66af5fcbf2c"],["/tags/Uniquely-identifying-views/index.html","828705cfb2bfecdf7feb1da4ac65b661"],["/tags/VIPER/index.html","c7576a95c5a20516c0c77c0872a1df56"],["/tags/VMware/index.html","34fa2e5b76efb3b5e165a3b7ce1272f6"],["/tags/Vapor-4-0/index.html","60767fb41f98b1b672f72effe0132319"],["/tags/Vapor-初探/index.html","b41a347117ebbc0d2cd7b61efbba6e69"],["/tags/Vim/index.html","881a70f1081d5bca446e8fadcfd7c6c3"],["/tags/WKWebView/index.html","642bf99afd3570cba7a250b084a3f141"],["/tags/Xcode/index.html","925749410bb3d3db0632ff9c2ad4d4c8"],["/tags/appleOS-Networking/index.html","d9b8fc5381db4402a88df081aca57228"],["/tags/bugly/index.html","b5ebddf5da577383e157e5bbdbe975c1"],["/tags/enum/index.html","15f48f35278bec1c189a8f7df12e0ec7"],["/tags/gin/index.html","27f52762a9ee2c7a090562b9eb3349c4"],["/tags/git/index.html","92d5c5e4c77ada90a0d00f75f359a1aa"],["/tags/go/index.html","12d46ad3808f73eaa64e9ce225c22711"],["/tags/hexo/index.html","48975693a6db10fed5cd8c2defa5c190"],["/tags/iCloud/index.html","af62379a3d4b6ab42b9adf8da16e94d4"],["/tags/iOS/index.html","c3c030418e8a98377b0aa92a58bbc505"],["/tags/iOS/page/10/index.html","37076bb805edd9e0f93d08bc2153c381"],["/tags/iOS/page/11/index.html","e3fcd49902290499748490efbdf71e09"],["/tags/iOS/page/12/index.html","cdcfb8e4b0188b526b0afdbb26176aab"],["/tags/iOS/page/13/index.html","e30491d7151d7615b85207b7e8e2d9f2"],["/tags/iOS/page/14/index.html","277918d8304e96cd37289e6b9720e93d"],["/tags/iOS/page/2/index.html","57f2099086318ea32909afb97d020093"],["/tags/iOS/page/3/index.html","07dec1a156136f6514323f3ea2f00239"],["/tags/iOS/page/4/index.html","ad68e92d9efef5dfa56ce3d62f0cfa47"],["/tags/iOS/page/5/index.html","88b429ebda1c57a77d4ff87a10c2844c"],["/tags/iOS/page/6/index.html","b0093ca7fb55934637c3cc777ec43aba"],["/tags/iOS/page/7/index.html","53dcc85758760f9bce4ad56d0687f819"],["/tags/iOS/page/8/index.html","f76b18418171f49312c74fbfed0c1130"],["/tags/iOS/page/9/index.html","8994f7dee11e56991fc31d3050d6731a"],["/tags/iOS面试题/index.html","747a224ab56c60b25ecff2cf910ca038"],["/tags/index.html","9d91be23e10d138ac0aecf91149fd60f"],["/tags/interface/index.html","82989257d1ccce7ba061027fd0705915"],["/tags/non-optional/index.html","7d847008e3ec63dfffa16778ea8829e7"],["/tags/package/index.html","50e24269fe0a85d058de4e5035bd7bb7"],["/tags/random/index.html","85d4ace34435528ea889029ace3c42b7"],["/tags/transition/index.html","f37f69bba41ec0e09d84f68257cc0cdd"],["/tags/三方类库/index.html","e63746536c3272429407806cee2931a2"],["/tags/依赖注入设计模式/index.html","3c86adff38aa555c1ab39ee09fcddeb3"],["/tags/值类型和值语义/index.html","b38870d432308dbcee999fa3af1b9643"],["/tags/内存管理/index.html","d880d3380f2142383bdabcf0f1e92650"],["/tags/冒烟测试与回归测试/index.html","15e64eddf977c36058430e00fb332966"],["/tags/函数式编程/index.html","af6cf962240abfdf883e96a692d50541"],["/tags/创建博客数据库/index.html","a891fa3b6b55e1b2a98c64bcebce8693"],["/tags/初始化模式/index.html","bf8ab334e129a67e25b188d31bb65469"],["/tags/单例模式/index.html","1c902d2abad7d7e9ad9c10a1e123b564"],["/tags/原型设计模式/index.html","5ebf338ac3538723f9be7358e727fef7"],["/tags/命令设计模式/index.html","2b79f7f5466055db22f31befb44908f9"],["/tags/基本控制流/index.html","8198581b21da93bb28c70ee1031c4604"],["/tags/基础语法/index.html","7da0d3ff15fc2fcf4a6b2ad14c448f62"],["/tags/外观设计模式/index.html","aded212b27e458b5d8c6c25c3a0e992d"],["/tags/委托设计模式/index.html","952a5c1ae768b4c0dea291187bb7af88"],["/tags/子类化样式/index.html","ea23173629f49a74d14d6787a47a34fa"],["/tags/对象池设计模式/index.html","8b76ec4fb5ab3d18efcf736bba1f4823"],["/tags/工厂方法设计模式/index.html","c781595d5c0297cb273f090b97a47bd5"],["/tags/工厂模式/index.html","a7e4423d95902d272e7e990c5a5d18f6"],["/tags/工厂设计模式/index.html","c382e06c44c791dfbc5da9dfedc48877"],["/tags/开发技巧/index.html","b555e0d0cd80c8c75c9aeb2a721e6f74"],["/tags/开发记录/index.html","51e97114c74dddd6831f7998290e9f04"],["/tags/懒加载模式/index.html","79bb30efe86dda66ce764740440af1ca"],["/tags/抽象工厂设计模式/index.html","74f5ff4022d5542a47155b449a0c6183"],["/tags/数据库/index.html","2129f3460d453f7de592490a33238bc1"],["/tags/构造函数/index.html","e238508702e0bba47ca25a83406e8e42"],["/tags/架构设计/index.html","6f9157d270a6f054d109531c9341740a"],["/tags/模块化/index.html","e056e91ba67c830159290cfc6a3526fe"],["/tags/模式匹配/index.html","209a621f5a451c5830c2ec5c4548602d"],["/tags/环境搭建与验证/index.html","ac628e9c73648eb5fa2b1bc0ae4c317c"],["/tags/生成器模式/index.html","22882ce3833be09dcc5d676cd5c5aa07"],["/tags/用户体验/index.html","d409b80260037ab2fe2397f906f665e4"],["/tags/用户协议与隐私政策/index.html","b33e6c5b4ec6c0bae063cfa80528ba3c"],["/tags/类型与操作/index.html","b85781fad0b4ef97c5772ddfc4ac6435"],["/tags/组件化/index.html","9d46eb2930f8b4de7d34513b5d8d20c0"],["/tags/自动化布局/index.html","953789394a6fcc161f5e4f95ad3347d1"],["/tags/自定义UIView/index.html","5068b82df4e368fd7732436030e4cb51"],["/tags/自定义转场/index.html","6943bfc5a651416fb5564d4ad9c3fccc"],["/tags/自适应布局/index.html","1f4964f895cd5b18ff7617fd23e37c85"],["/tags/表达式、变量和常量/index.html","8fbbad934f2c8039a3d8a008f5814939"],["/tags/设计模式/index.html","dddf60abe7c3082358f9d046037a8ef1"],["/tags/设计模式/page/2/index.html","0613986a55be664f5f27c13ea30f7d22"],["/tags/设计模式/page/3/index.html","86024663099b7655731033edec17dca7"],["/tags/访问控制和代码组织/index.html","815175ac007769eed3bd093c1cd9fd25"],["/tags/运算符，下标和键路径/index.html","8c7a7e8c1c227bebdcc9822166ea0da1"],["/tags/迭代器设计模式/index.html","64188c3ba8297fbdde4851190909b67d"],["/tags/适配器设计模式/index.html","1bcf951cacd31e690eed9a933e9b0b59"],["/tags/逆向/index.html","716c336387e58814ec1a17a55b0347dc"],["/tags/错误处理/index.html","3cb08d1718509afd35f08e12135bda0b"],["/tags/静态工厂方法/index.html","2740a98bf0bdc80a4ec2c48bc71dbedf"],["/tags/面向协议编程-OOP/index.html","3a1335710f5f751627840af0eca39b90"],["/tags/高级主题/index.html","cc83b14990c38320d36aa0009e084796"],["/tags/高级协议和泛型/index.html","3b1993ca6067296561baaaf5d159e130"],["/tags/高级控制流/index.html","98ea54c9da07ff00092ac96533dad0c4"],["/xcode 常用的快捷键/index.html","7399f338d230b4ae99bd8626c263c3b9"],["/为iOS应用构建输入表单/index.html","29e0ec59cbc9c7cfe11bc9f6a0c7c0c5"],["/产品开发的幕后花絮/index.html","a3213094b8370d5806d8dee20c38701e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9443dad751a667c2920d383769661517"],["/冒烟测试与回归测试/index.html","164d60b76baf44839c24ab3a68bee8e7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","5adc27aa968233f635dab8af99d87a38"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3dd455c6f8f79c39a959c895588a5ef2"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6cc9205897147335cc6c5a27d11e42ba"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","173b74bf816162be5ebcb30d180b0195"],["/在Swift中创建自定义集合/index.html","617df7557581247ad0afd02ea04882b1"],["/在Swift中处理非可选选项/index.html","accc3e5c6f6e1905dc6350f83af03df8"],["/在Swift中生成随机数/index.html","b5697b7c9c83ac4a1394cdf59cbece44"],["/在Swift中重构单例模式用法/index.html","3d6cbd5631e31b05ae09d062c7b829fb"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","8998699a8f6cb75594ba2db58a2037a6"],["/如何为VIPER编写服务？/index.html","8a9cca19ee4ac683867c6445da9c0426"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a37683b1f0aee91b2c0d5d9545ad66ee"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","72889afc962df6dc75d796cdf8dfae50"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7713d06faf8d7a44457164777266b242"],["/如何使用VIPER构建SwiftUI Apps？/index.html","72686216528e1dabe090d7d39a37d78b"],["/掌握VIPER架构/index.html","ecb1133e447e31d0b10f0a77b954f68d"],["/揭秘 WordPress Hook 系统/index.html","34651df851f405ca964fed781ea2b0a8"],["/比较工厂设计模式/index.html","d624161359ed240ab012fc1bbf6da3ad"],["/深入了解Swift中的Grand Central Dispatch/index.html","69fe3aa1a902213a548e66f99d2ad273"],["/深入研究Swift框架/index.html","c7402d2825c659c4f3843977993edec9"],["/组件化插件化与模块化/index.html","6f63923021a7bf6ffbdde93d01f39197"],["/组件设计与SDK开发基本规范/index.html","b4a4f7fb2fd4413f1fdf18cd798ce9fe"],["/适用于iOS开发人员的VIPER最佳实践/index.html","beee1f61bd7f8d45d1142619017c182b"],["/选择Swift而不是Objective-C的5个理由/index.html","9f06a211af74933dee0d30e8b9aa8a54"]];
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
