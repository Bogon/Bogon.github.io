/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","5978fb439a83d971c2e1128782a1bd56"],["/2020年iOS面试题总结(三)/index.html","05f4be419fe56daa6d53f372e78054b9"],["/2020年iOS面试题总结(二)/index.html","2e25cc5d4753a16941530b1c9774aa72"],["/Advanced Swift系列(一): Swift 简介/index.html","ee0c242b84a24027749fd79d50ffbbbc"],["/Advanced Swift系列(七): Strings/index.html","b1b48f4ee6863d15624bcd7777fa6c5b"],["/Advanced Swift系列(三):  Optionals/index.html","077186c39097197619c47ab38d7b4975"],["/Advanced Swift系列(九): Protocols/index.html","fa06e0ad4c5831e172042b357ceb0b98"],["/Advanced Swift系列(二): Build-in Collections/index.html","18baa3538f17cd6994b1a4be91660021"],["/Advanced Swift系列(五): Structs and Classes/index.html","4412b9b4358fed3e9457a2e2191a88af"],["/Advanced Swift系列(八): Generics/index.html","3e83508a66e4d4e9d6ed11dd8573a9ed"],["/Advanced Swift系列(六):  Enums/index.html","d9146254274d5559bf4dd1b47e0cd2ec"],["/Advanced Swift系列(十): Collection Protocols/index.html","19e6c913e690fd7a3a1399520eafa488"],["/Advanced Swift系列(十一): Error Handling/index.html","c81f268cbe42444221b6176824bf072b"],["/Advanced Swift系列(十三): Interoperability/index.html","a7d1971b1787b5f58d16b5d0d4e94e10"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c1018658164b05abd2ac03f5a7d7b3af"],["/Advanced Swift系列(四):  Functions/index.html","d08665dae41c649db7db898280317b85"],["/App Architecture系列(一):  简介/index.html","6ad1e2bbc93d1c1cc299bd69479d0ff8"],["/CocoaPods 设定版本说明/index.html","35071743d901944ce927d1f652bdae25"],["/Functional Swift 初探/index.html","9c52994b809620356102d445bd152e86"],["/Git 使用小技巧/index.html","9bd62c86d1b0c7462480aa6578b522be"],["/Go Protobuf 初探/index.html","aae344cb8196706341026459e255a235"],["/Go mysql Tips/index.html","bba84089ce70098ecde7cf1259cf9bd8"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","02cc2c0bb1cc72b7818bf72f314bde28"],["/Go 入门篇：2、Go 实效编程/index.html","9ee161772ad51c260b23ef114e5de8ab"],["/Go 入门篇：3、Go 重要概念/index.html","86ab7f8646713372659591c749d2e3d0"],["/Go 基本语法初探(一)/index.html","80e3a833588cba3560494c62ec1f4e63"],["/Linux VIM 命令及操作小结/index.html","48abbd8a7b7aac9079299fce69960320"],["/MySQL 基本操作/index.html","72ce64d20aeaeb9a3cc7ae15ded1b5db"],["/MySQL-列类型和数据完整性/index.html","835e556f35d1dafa723f6bb633ee4562"],["/MySQL-数据库设计和查询语句/index.html","e6fd33c43b4596037d558d25163b7f72"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","c145d49389b7c715d9166f80bbe0ad23"],["/NSCODER和SWIFT初始化/index.html","0877dc9461988d46bc03e0c98f11ab47"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","898ed0bf52b68dad1882c0acdd71b19c"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","fcd85acbe6ab05b8168675668c38544f"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","51fef6f22a3aedd9c9ae2110139a4379"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","0f2a2ae51456a077ae64b322460a1717"],["/Sqlite 使用Tips/index.html","9abd90be5f62097b8fab9fe6efc174e9"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","7d73187be88b5b062aeb1f695603adee"],["/Swift 5使用UIImagePickerController拾取图像/index.html","8500e341a50cf51e1bb581c8098d7129"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","030d8429189a19121755f2c600abe24d"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","60d39a0de6cb59f4857111b1c993429d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","ec887b3577913be483a47fbad493eafe"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","414c0ef68718fa3c4f56273a251b9529"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5a499da6230f467b5ce7c65b0c2527d6"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","647078898ace86b872e9ac11a3fd645d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","350318f4aa650f58bf93153f1e2fa1fa"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","5875008cc3d10f9639e7038dc3f15e7f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5b0f5de2aa7df998db727a2640ed26f7"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","54dfdf6c397f2ecc9cf2204cc56746b2"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","37f269433f3781f088f679ecfca21c0e"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","a154656e98eb963f4736609b550b1d67"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f4b3e798f9e9417177314b2a2d9821a7"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","63e6e21c8369b9fd6019fed709caef19"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","ee7f0b0d50c22d72664e71109df9a97e"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","055018bc6d40f4167de37ae433322e04"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","4dd22c7f31f78af858d4b52bcdfca11b"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","28b95bc3b6021212279b1d09fa647c98"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","da7f5496196a891d87264304b1f44f56"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d59249b32edbc0fac288e04cbcfbd1b3"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","79dd952e86c7d960f7f78fb7be6d2b2b"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","c3bfd56e4d55bb9e1bf1ad64f1a882e1"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","36b05ed98e6d4073c033d55450c17c07"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","5b6a602a5895c194d0ee2f754914cc4a"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a9d46c2c644f12b1c1ea9db37bb5f2e6"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","30525ca544574de89ff5224d197f8a91"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","d981623cef60d4eacd417435f0f9a812"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b8d70e9625b18c8584d4589c63369b1b"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6089752e451e2c07fd3f33b449f8569a"],["/Swift CompactMap vs flatMap：差异说明/index.html","1ac51577b11716246a73227922c23f5e"],["/Swift Grand Central Dispatch 深入实践/index.html","2de1fd8191bfbf9a85774df2c3d1efb3"],["/Swift Lazy属性初始化/index.html","6bda3776d3393e44bcc4896a2a14936d"],["/Swift Promises 初体验/index.html","f5cbfb65453aa512902969bb3d901029"],["/Swift Promises 探究/index.html","cc9f95fa0025ee04c174cff8ce6502e5"],["/Swift UICollectionView使用指南/index.html","a242e56db75f7b31acb042d2fcad2578"],["/Swift URLSession && Combine framework/index.html","69c57fe6d239e05164b41f9507991396"],["/Swift tips/index.html","11a997d704490002192610dacdbd9047"],["/Swift 三方库：GRDB 使用指北/index.html","7385f1d8ce7dfa561a6f5c30bcd3358c"],["/Swift 唯一识别的视图/index.html","14a661420ab6332102bd24e78ef20d0c"],["/Swift 如何学习现代UIKit？/index.html","b19582a85bc261b321c02febd8f96033"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","898c5f8d1f2cf7bfd662a5625faeb3f9"],["/Swift 用 compactMap 替换 flatMap/index.html","e458fae75bdfc5485b5492a817779195"],["/Swift 选择和播放视频/index.html","5d7a838696967d04e506db294ea14032"],["/SwiftUI 系列(一)：1、 简介/index.html","7d1a6941a4acb35ffcde33c7a1389620"],["/Swift中UIColor最佳实践/index.html","8fc63469495241139d5b94174cddc8ce"],["/Swift中快速简单的工厂设计模式/index.html","80834afad49fa4c4df851924ee47cfb5"],["/Swift中构造函数与静态工厂方法的比较/index.html","21107df0205ab2a220dd803cbcd6ed73"],["/Swift中的UITableView教程/index.html","6ed8b81d293cc3a8a96fae01f4bcc1f4"],["/Swift中的懒加载模式/index.html","6334cb24a3eb6b1e9da76b0e70223936"],["/Swift中的模块和挂钩/index.html","d7a6a1f12ca5b10c74654faf34f9bd5d"],["/Swift使用布局锚点添加约束/index.html","13c63d9516098364a34ad7b02bd1cc99"],["/Swift依赖注入设计模式/index.html","10025c714b7a1bc3464a4e7b476d94c7"],["/Swift关于Dependency Injection (DI)/index.html","8d80c49d9b25eea21017e7e6f9ec67df"],["/Swift初始化模式/index.html","6674ce0dc54c784767fdba4e298d9862"],["/Swift单例模式/index.html","4acb30fb4bcd7fcf056823e4913b54af"],["/Swift原型设计模式/index.html","601a22a467342a17ef685a7cfc7e2c90"],["/Swift命令设计模式/index.html","a62e6f0d62cb5983203f639a67c1c8af"],["/Swift外观设计模式/index.html","46c8c3bccb8c8d479d4def46092756c0"],["/Swift委托设计模式/index.html","a38f4469e6a87bae8c13fcf73a5e76ac"],["/Swift对象池设计模式/index.html","ec36da0704719cd9835eb8d33ca99cee"],["/Swift工厂方法设计模式/index.html","3990c0b3aba614ccd6d21bb8628bbab9"],["/Swift带闭包的懒惰初始化/index.html","4dfe1094d2f2989e795bfda5c68e5b14"],["/Swift抽象工厂设计模式/index.html","b22378bcdd3e554ca1a7b25563725a1e"],["/Swift掌握iOS自动布局锚点/index.html","6df16edd7fa484b2a4fb9d340fba217a"],["/Swift支持旋转的自适应单元格/index.html","eb9e83a94995ed9e2a37e38502187b40"],["/Swift枚举值/index.html","5a33c9dd754cf438b7575240b7f1dfe5"],["/Swift生成器模式/index.html","8cde53cae61ca37aa3a9ce980e3084df"],["/Swift结合Xib文件自定义UIView/index.html","aad84ad49a4cb8ff84f1b65f77e2264d"],["/Swift编写的20个iOS库(一)/index.html","ff54fa6d80b31394af655715fb07a0b9"],["/Swift迭代器设计模式/index.html","c141e9b85a0432ec1af0dc5ddfb5c355"],["/Swift适配器设计模式/index.html","cac3b9f024b62cab03a56d6e9bb90b68"],["/Swift静态工厂设计模式/index.html","263e6af6e14f72c46ae4a5d0eca54383"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","dece574dd767a9ad868186d8ebcae978"],["/UICollectionView data source and delegates/index.html","a628b706f5892e9095e1658415f819c3"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","0bb10a54a22c8a537c98bbd5f5f920a2"],["/UIKit初始化模式/index.html","25b86edb17e4b9f65bee3dd0f043f506"],["/Ubuntu18.04替换国内源/index.html","2aaa1a544740dbf67848d9a798789c79"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2d949870d03cc2748d7d407928f98c9d"],["/Vapor系列 (一) :  Vapor 初探/index.html","fde183228e0d438d222564b3497aa969"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","8c4a7018c8098b698954afe0e13a881c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","14c668e31848c6f23287bf335f017af4"],["/Vapor系列 (五) :  使用session进行authentication/index.html","c9fd57be14a12948451ca0a100ded8ab"],["/Vapor系列 (四) :  创建博客数据库/index.html","6c4eddc491f1d53bfd2f0114dda0c43a"],["/Vapor系列(六): 徒手撸一个CMS/index.html","75ce5792b8802730dfb2cd644bec8872"],["/WKWebView与Native交互注意事项/index.html","54576e559c5c241ae884af9429059038"],["/Xcode扩展/index.html","b490673a24304a90cb5e4d1d110cd61e"],["/about/index.html","e4d06d2f57b10e85a971cc656245d400"],["/appleOS的Networking示例/index.html","aeba0b18a607f4b2df580a5d1b1fc62d"],["/archives/2020/03/index.html","edc46023153cc78ed87c1fc47296baec"],["/archives/2020/04/index.html","df702506f720937d4f41ee05ce1c2b71"],["/archives/2020/04/page/2/index.html","f10e21d987c7504e568acf72f01980a6"],["/archives/2020/04/page/3/index.html","f7edcaff9acd57af6e665ca034b2ff60"],["/archives/2020/04/page/4/index.html","4a6c698c1c29d87d1cbdb52acfbe7b7a"],["/archives/2020/04/page/5/index.html","9a7983b6d72ee7224e1eb2f78d6eb921"],["/archives/2020/04/page/6/index.html","06a29b95b7fb8560d0412072918b97f8"],["/archives/2020/04/page/7/index.html","7cd351ebbd228fd8a82fd1ae006b17b5"],["/archives/2020/04/page/8/index.html","2dc7df213a1695f4c0afdbba830593ee"],["/archives/2020/05/index.html","64fbd831ed55c42a9ca2c821d620d0af"],["/archives/2020/05/page/2/index.html","886a6353f775f49c8ee15733c5526614"],["/archives/2020/05/page/3/index.html","d4873aacfcabece3a365c69cd9d45060"],["/archives/2020/05/page/4/index.html","c25ad02d40dec927a606033623cff64c"],["/archives/2020/05/page/5/index.html","25cdc16ab00ebb8732c50bc63782b27e"],["/archives/2020/06/index.html","3e2360495437fc132c497554786341fa"],["/archives/2020/06/page/2/index.html","a9473f2329f8311d0e7a5f0861ade40c"],["/archives/2020/08/index.html","b4cfea9e593fe257a5d538eab391bc55"],["/archives/2020/09/index.html","a1798f2b6a41f192c080fd49613afa29"],["/archives/2020/10/index.html","e101f8d46762f7da0501941dd174cc78"],["/archives/2020/11/index.html","fa167e8c81c16c15c102cde21211a4be"],["/archives/2020/12/index.html","2507da9a01884f9649b7e1b4c9b6aaa6"],["/archives/2020/index.html","8b87136b38790ba7bcfe83ec099a455c"],["/archives/2020/page/10/index.html","f1ab747086cbff93f74f090e9737ff9a"],["/archives/2020/page/11/index.html","267b24440dd04266f9597e13e53bf54e"],["/archives/2020/page/12/index.html","4ffec232a17de395e397364cd5eb9cb1"],["/archives/2020/page/13/index.html","3983cb40328117cc0f9163f71c34b250"],["/archives/2020/page/14/index.html","04f8fb8596510cd04f5cd8c3379c5ca6"],["/archives/2020/page/15/index.html","6fe47c160c32d28bac8b8922d776d11d"],["/archives/2020/page/2/index.html","929ebbc5d1d5170e1b133b459eadfeee"],["/archives/2020/page/3/index.html","8184121b046cb68fed421ba05a6bf3a1"],["/archives/2020/page/4/index.html","acd9c75764d516b1601d201634bf1720"],["/archives/2020/page/5/index.html","a2e396861926227a27b3a97959099c52"],["/archives/2020/page/6/index.html","63689e17bc6e69efc52096073538fe6c"],["/archives/2020/page/7/index.html","dd461313bfe574863b66525b142d0341"],["/archives/2020/page/8/index.html","85cc94524ec1f9905aaaed0364a7a756"],["/archives/2020/page/9/index.html","5973d4bb35f22c28b1045230c5c9c389"],["/archives/2021/03/index.html","5ca42c11c6a3ca3c4dc7c1c6c18ad4ab"],["/archives/2021/04/index.html","6a8644c8f974b832ff709a2fd32a087c"],["/archives/2021/05/index.html","aa4c18c803d0bd2cb50072c4031cb404"],["/archives/2021/06/index.html","932c68b2947d6241c8056f69aadb6ca7"],["/archives/2021/07/index.html","1be30c15b5a92eead188fd1016ed4bca"],["/archives/2021/08/index.html","8606b5743b90b9d1f469dbf313e3b509"],["/archives/2021/09/index.html","71c884281663ed186be9a5cf86ecd08b"],["/archives/2021/11/index.html","245951fd9bb6df2561b6372426740334"],["/archives/2021/12/index.html","f43ffd98792d780338366ab89ac78ead"],["/archives/2021/index.html","719c998ca15bb988466c601ff37b946b"],["/archives/2021/page/2/index.html","4a22b56197b7dea2682e74721022c62b"],["/archives/2021/page/3/index.html","c413402d3f26aded84ed7aabede54e2b"],["/archives/2022/03/index.html","b7f3b4933cf8118b815f4c12dca42aeb"],["/archives/2022/04/index.html","85bd0ac508f4c9f8e3cea24f6e739e8d"],["/archives/2022/05/index.html","ce7a99a5de1d6c0ed05162b3f9870262"],["/archives/2022/index.html","f1ea3fd0afbbb2646e541430893da871"],["/archives/index.html","901fcac8eb3373f90571f436fa709eb1"],["/archives/page/10/index.html","661526eee928aac437ae2e4c2604d7a6"],["/archives/page/11/index.html","e711ffef80e462e6176cfe4d2c27088f"],["/archives/page/12/index.html","e6b9ec363873f0bf8fe16fe4208c620d"],["/archives/page/13/index.html","7403c14d691177e38a1b83cd53fd61d3"],["/archives/page/14/index.html","85988d1a34141d45cca6feff63eb22b4"],["/archives/page/15/index.html","d2799004a68cdb117c0c7970a6792f21"],["/archives/page/16/index.html","09a88c3a8dc90f931d66d2a9fa1f151c"],["/archives/page/17/index.html","f8c49b9eb622eb66f8a7be867e64ab4a"],["/archives/page/18/index.html","3c0eb0bea60067136f183b2a53a70e16"],["/archives/page/2/index.html","90747f87387af187f943c1756903a946"],["/archives/page/3/index.html","67ebaf2f7d595ab3f4acb9597de054fa"],["/archives/page/4/index.html","36d8a47a629e3c0ed7946aea864180d0"],["/archives/page/5/index.html","f8256b65907010645c2620dc1e2f3c0f"],["/archives/page/6/index.html","da7385c9626fcbbb57123d46e6b40d54"],["/archives/page/7/index.html","a1e8161b08507bd3c3542c078370f469"],["/archives/page/8/index.html","914da482ad0fe06b29f36fda2e35b1e0"],["/archives/page/9/index.html","da54d695e043ea42392c4abe75ef5914"],["/bugly 上传dYSM文件小记/index.html","d0865cc98e448559909e2d5eb5270a2c"],["/categories/Advanced-Swift/index.html","14a82b5c77e39c4e8faa2f157d6ec93c"],["/categories/Advanced-Swift/page/2/index.html","45492a1b45bfb55999320aa9cef31413"],["/categories/App-Architecture/index.html","1ab0a3d6f00e24226152c5442a354511"],["/categories/Array/index.html","fd9b60bbf69b990a0e0025515f405a49"],["/categories/CocoaPods/index.html","0996366a5dda6cd31ab7b18271c51321"],["/categories/Codable-protocol/index.html","c82a2900050a0c3d055da429ebfedda4"],["/categories/Combine-framework/index.html","9aede5ea9f5ca365478e276a9872f854"],["/categories/Combine/index.html","f977dd525c93d8cf36f80d9309866ef6"],["/categories/GRDB/index.html","3ed9bfe8d7e3be1d4c81a3c91f30d6c7"],["/categories/Go-入门篇/index.html","4558fd79c4469a963b231f1e72b95598"],["/categories/Grand-Central-Dispatch/index.html","34105223dec5002aea7ca19d5a29b2b0"],["/categories/Homebrew/index.html","cf2f5f18d441dbdd27a4cdcbe4ff0e2e"],["/categories/Linux/index.html","f859473df8774ed3e304785677bde575"],["/categories/MySQL/index.html","6a45ebdb09ff3e3a880301177741a1c5"],["/categories/Promises/index.html","99bfe834276e17bd1f2d693be6bde061"],["/categories/Protobuf/index.html","8a310a40d9fc0cea1c99dfd98061f2c8"],["/categories/Result-Type/index.html","dd67221283e9b578a01f97994a432362"],["/categories/RxSwift/index.html","4243cbf53f8fc8ef4d3128cb3ac6f2da"],["/categories/Server/index.html","6af07ad284cd39f02447d547c2741493"],["/categories/Sqlite/index.html","369192f2d0445f2cc863b8f40ff2485a"],["/categories/Swift-Apprentice/index.html","bf348fe4c567792bc8608a85f73c4d12"],["/categories/Swift-Apprentice/page/2/index.html","6644426b3efa26d95ecc3c4c29c451af"],["/categories/Swift-Apprentice/page/3/index.html","7d7da91de941a464e37fe43676af54b2"],["/categories/Swift-源码阅读/index.html","9f57273306494508afafae59197c2c50"],["/categories/Swift/index.html","ab79a2ae13bea7ef8e2d99f3c3fe43e1"],["/categories/Swift/page/10/index.html","d2ffa98d08beab4afaf1e17eea033745"],["/categories/Swift/page/11/index.html","1d67335845ac137190ed517b55820636"],["/categories/Swift/page/12/index.html","c984cd78b05081317cff05d364efa292"],["/categories/Swift/page/13/index.html","8f8bd7159a5b9db2a7f6bdac18ef94ec"],["/categories/Swift/page/14/index.html","e6fde48be74c43c7e34d6886c6da4f5a"],["/categories/Swift/page/2/index.html","108ca49c81bf6b5fa64ade59d5a88b48"],["/categories/Swift/page/3/index.html","fa53516e2e4bb63cc5c257c19438cc37"],["/categories/Swift/page/4/index.html","3b8de8c3fcfffa75fc1c313ae91cf081"],["/categories/Swift/page/5/index.html","5d77abaf1686e7dd4b27e5f4667abf47"],["/categories/Swift/page/6/index.html","a360ab42aafd0cf11b769db43c202f85"],["/categories/Swift/page/7/index.html","655994f362b853a2edc361535f943d89"],["/categories/Swift/page/8/index.html","56242f766d82e8e4b37f513e94af6fec"],["/categories/Swift/page/9/index.html","a10d0418b7900dd631d0c54d49c03019"],["/categories/Swift5-2/index.html","e0d1fb943749ae358fbb1a5010dc428e"],["/categories/SwiftLint/index.html","c038b61a1445c9cde17d663bff78813f"],["/categories/SwiftUI/index.html","793f664eca5ad264da42a84066522310"],["/categories/UICollectionView/index.html","cb6580ee0dd4184a6107997518635c7e"],["/categories/UIImagePickerController/index.html","7409f471ec7444b9a881f9be69e9349e"],["/categories/UIKit/index.html","527a589df8466957f9724f1bf90d4271"],["/categories/UIKit/page/2/index.html","fa32a432c4beba1c5ec9f2db203f5615"],["/categories/UIKit/page/3/index.html","5484cdf554cf08b585b6100f3298ba90"],["/categories/UIKit/page/4/index.html","2b1431b6759697f980f8e72417a294b7"],["/categories/UIKit/page/5/index.html","6d58a0304b7865709a61e1b7cf045704"],["/categories/UITableView/index.html","717bbeb935abde1c2ce0d225a8027ed9"],["/categories/Ubuntu18-04/index.html","f442c871ca0906cc4dc4078eb8cdb3db"],["/categories/Ubuntu软件源/index.html","7d15f14254e21ee83f569f78c1187e8f"],["/categories/Uniquely-identifying-views/index.html","de2dd90802b2e4591b7a12466d8ed5cf"],["/categories/VIPER/index.html","2c1655e1b24add0179d8b259ecb80ed5"],["/categories/Vapor-4-0/index.html","3cfcbcbfbe23fc8fb8c5c3c75ea89a59"],["/categories/Vapor4-0/index.html","4be02e2593f15805604cc51a383514ba"],["/categories/Vim/index.html","47a3c1e380f309e93119467b4ae96868"],["/categories/WKWebView/index.html","07cd46fe153bf7baec836cf655c95346"],["/categories/Xcode/index.html","08048ddb31730924f94390e23321e8e3"],["/categories/appleOS-Networking/index.html","59f0a7ff1b40a1f18d29fd1702e0c5c4"],["/categories/bugly/index.html","ad5c544ae4bd965adaa7d44c5a0ff535"],["/categories/enum/index.html","bc768edf0d73761c1b1c59c36a3698fd"],["/categories/git/index.html","3421272926d9c1c55aabc71ce8f743f2"],["/categories/go/index.html","ae875cf774f18a62006c8df6f0ea619f"],["/categories/go/interface/index.html","041ecc434cc635276724e450a90dbe70"],["/categories/hexo/index.html","5b826b82b34e2cfcdf6d3dbfdf00f5a3"],["/categories/iCloud/index.html","9a743cff8f65fa6764af06d0cb3d21e8"],["/categories/iOS/index.html","3e00501cd42083fc90e45125aa73b11e"],["/categories/iOS/page/10/index.html","c3589b75ee4bb59b54799c119e4c4b63"],["/categories/iOS/page/11/index.html","c5417a9758c0788a526a7bbc64589d22"],["/categories/iOS/page/12/index.html","b27fa470b701177f630f3e275cb43b72"],["/categories/iOS/page/13/index.html","caedfe264f97d13d29b4fa65e042a089"],["/categories/iOS/page/14/index.html","8c2e9854449d91dd65d5b67196d03ed0"],["/categories/iOS/page/2/index.html","340cb60604851419b889f006cdbadb57"],["/categories/iOS/page/3/index.html","dbbf1d3fb15812aeb5088f33bc01e277"],["/categories/iOS/page/4/index.html","e92ac18d15ba244b86b0a45ffe9e29db"],["/categories/iOS/page/5/index.html","1e1b72a683e06ec76a3f88682281b334"],["/categories/iOS/page/6/index.html","6e40c8bb1884be17a6ba0e9e7c32c40b"],["/categories/iOS/page/7/index.html","ee235c1684d744696e42cce252ee7892"],["/categories/iOS/page/8/index.html","6ad87a0340684b0a64354c9bcc4b04c1"],["/categories/iOS/page/9/index.html","a722ef50bf057723530ca50bb5c1931c"],["/categories/iOS面试题/index.html","211c2a63d1a493f54bc03622eb8e2c09"],["/categories/index.html","8a86c8ebf4a126131b7d3dfb965c1b73"],["/categories/random/index.html","6f4b01a8c2e67766cd16c4cc3b66572b"],["/categories/三方类库/index.html","2cd67b845282fc674b6dc9402b9d6b21"],["/categories/函数式编程/index.html","bf973273b03c5e32889e5d12c3c2bfb3"],["/categories/子类化样式/index.html","e7c67ed0db99ff113a15a6383200e6a0"],["/categories/开发技巧/index.html","e4aea1b8d958ff94109bfe9f60ebd859"],["/categories/开发记录/index.html","a389dbc84d08ca6521b8b7d36d4b5840"],["/categories/数据库/index.html","a9f7b0fd8da329e9f984cca741453ea6"],["/categories/架构设计/index.html","174e6b6df2927eb5723d4aaaa465b438"],["/categories/测试/index.html","348a6b76ffa6495b56400726deb0157e"],["/categories/用户体验/index.html","6b8cd01408ade902311966a49a6cd5a6"],["/categories/用户协议与隐私政策/index.html","ed3c49a7b7960037602b4a5b1e394e57"],["/categories/设计模式/index.html","bbdaa8a84c4cd200f428843b835b600d"],["/categories/设计模式/page/2/index.html","1013c2ecf2bfdc3fc22162ec9ff59a94"],["/categories/设计模式/page/3/index.html","71429ee7264924834795d407bd711d10"],["/categories/逆向/index.html","bd9cbe11b018c3318c4294ff0dc6ba83"],["/css/main.css","ed39e01727679aee6cdabce7f14f1244"],["/go moudle 导入本地包/index.html","774afc085e73e8858b13e92395357883"],["/hexo部署失败/index.html","7c12b27ad28776c7e910834b36865333"],["/iOS 15 适配/index.html","5a70bfca1ea0047494e2c5d5ad8214b6"],["/iOS VIPER架构深入实践/index.html","dc7486e86d97309003f606c6e07a7b59"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","b91681140974d3203c0dce41b6b3c243"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","78a2320a80932258bc5e968fe0c8a662"],["/iOS 自定义视图，输入表单和错误提示/index.html","3b5f05ad27748a5f9967afe11ec42f13"],["/iOS如何使用iCloud文档？/index.html","98247408336d549c54ea9d9f27b9fd8d"],["/iOS子类化样式/index.html","ac97077ed4de501de6be9b99e4cb2c88"],["/iOS开发记录<一>/index.html","d3ad24531143c5ebc69f34983f708c1b"],["/iOS自动化布局编程/index.html","b43e044dfa487859cb0954f09515a716"],["/iOS自定义转场(By Swift)/index.html","ab31c4f7c76e3631dda362bf4f9a3f6f"],["/iOS项目架构：使用VIPER/index.html","91898cfb3f11d3a1398c97346919cc45"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f51fbaa1daaf05a552d365786c8b1d2d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","b0dd7a7d254367648887ac9e117a9179"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","d688a537d3dec6864a2436edf9a16377"],["/page/10/index.html","abbae8c22f34a42ad839d196e2c144ee"],["/page/11/index.html","3cee4f75b06d460dbfebb1ae0b6b81ca"],["/page/12/index.html","dbd0310608cc0252a4519dfb3b7da11c"],["/page/13/index.html","d1ef322f9c720d267f640a4e3da28dd9"],["/page/14/index.html","197dd1116e7f810b2030c2f232cf16ae"],["/page/15/index.html","bcc7569cefb1da552b43187d82fd01c2"],["/page/16/index.html","45ab96a418d65f439dd00a50899e412b"],["/page/17/index.html","88ec24947599c59782d547843afd7434"],["/page/18/index.html","df447edbcb7db7b2c0b8fe24a1c11926"],["/page/2/index.html","3f04bf6be95ac97b882e8750832e5856"],["/page/3/index.html","563f77510d20ef6275660dc8112f87ca"],["/page/4/index.html","5999fa32a87a1912a22249c36ea38043"],["/page/5/index.html","9e8bc360fac02b6f9403e4d75003d640"],["/page/6/index.html","1dae9319420d89fb8af4f1ee4377deb1"],["/page/7/index.html","de9b69bca3d3487d367ee34215c4e3dc"],["/page/8/index.html","ec7a0510444b9d9ec5991a9cad2b2d63"],["/page/9/index.html","4600132fbf087702b4f4577f4c134c5f"],["/schedule/index.html","b8e1407dc20db7e0885a8e7d4d28c4d9"],["/storyAppPrivacy/index.html","4fd55ec1b2ae2e052bfd5cf976fb64e0"],["/sw-register.js","e4c5618223f84bd7b83c34a19768a539"],["/swift 专题：函数/index.html","6f528841928786fcc7ae0b63c6faa778"],["/swift 专题：闭包/index.html","5bff49f43922e24c2476c62ab979d082"],["/tags/Advanced-Classes/index.html","f20449e21c2e9807f27a075979929328"],["/tags/Advanced-Swift/index.html","ed45148232ecc04e3e698e98e5ecd99c"],["/tags/Advanced-Swift/page/2/index.html","139cf660faf75ce5aaecb322780eb4a1"],["/tags/App-Architecture/index.html","31c4e55f88c0f9f23961089eb70c8d80"],["/tags/Array/index.html","1ccabe73ed1e7890358cf9b48a83c1bb"],["/tags/Arrays-Dictionaries-Sets/index.html","3d2495bc9d1e670e3c01882264bdda54"],["/tags/Authentication/index.html","aa424e41af122cbcdf38fdf26395a8d0"],["/tags/Build-in-Collections/index.html","88019306d6ce07bdabe4a6fb4d1b67e9"],["/tags/Building-Your-Own-Types/index.html","c8b07f0338cca54bf4cb5b6af339a5bc"],["/tags/CMS/index.html","b443d36683a78f91c464c02262d293ca"],["/tags/Classes/index.html","a677489cf20a7ebee97f526887ead5b0"],["/tags/CocoaPods/index.html","e1c0241a961f32a099f90169c638ae56"],["/tags/Codable-protocol/index.html","a9b142e7dd4de87672125606e4734709"],["/tags/Collection-Iteration-with-Closures/index.html","c1e408ad978f5fea841fe67b608f35e9"],["/tags/Collection-Protocols/index.html","693410ac5425005d181bb306db313408"],["/tags/Collection-Types/index.html","7006b80186dc4ff1a2a2c19ef2a0e2ab"],["/tags/Collection/index.html","f23be8fc481707707a20392ca446f0eb"],["/tags/Collections/index.html","fc89a8b3ea7e2ad4dd9c616ad77400fd"],["/tags/Combine-framework/index.html","d15f25bdbe3923ce42e72e0d2e0dd386"],["/tags/Combine/index.html","5fdded38e39af992b5d334ed0b8e9860"],["/tags/Dependency-Injection/index.html","2ece646578d7ab7968334b58ebc86ad5"],["/tags/Encoding-Decoding-Types/index.html","f1dc2a9d5ad4c538e02410738a9b571a"],["/tags/Encoding-and-Decoding/index.html","59ab746aad9e5c194798d45df6f086ed"],["/tags/Enumerations/index.html","6a6ca7c3e4236c56b31e4cfe22e5e9c9"],["/tags/Enums/index.html","59a3270dadd79a04447f1a80048c46ec"],["/tags/Error-Handling/index.html","9e96e7a4d989ce0cf40170cf21ebfbc4"],["/tags/Functions/index.html","b7d4852c82b93d6381406de579617b02"],["/tags/GRDB/index.html","2e95c289dbce90b8e720ce3b33eb71e3"],["/tags/Generics/index.html","8f64deb913675b040141b8d6ede49436"],["/tags/Go/index.html","b962ce9d9d671177778377485e96669b"],["/tags/Grand-Central-Dispatch/index.html","bb40ab317ec3a1ba67d3f3ee59cc1923"],["/tags/Hello-Vapor/index.html","fa280306ab695ca5f3e46b0d4a7273f1"],["/tags/Homebrew/index.html","be978c2d52769066bee5a5b1ed823e8f"],["/tags/Interoperability/index.html","7a2b2764d4a1fa539a1d9c4f9ac51a31"],["/tags/Introduction/index.html","b4be08ee494cc39d594bc7711b4bbe78"],["/tags/Leaf/index.html","48437e64c9c2224bbdef4f56eb075638"],["/tags/Linux/index.html","36efbf96122ee59005c739a3960c6c69"],["/tags/MAC/index.html","6b48ea805335c7ea1f5a957f542bcbd9"],["/tags/Methods/index.html","986e0b2501ba999751b28d8d41469408"],["/tags/Modules-And-Hooks/index.html","87eaa85a94005ed87b9726065fd52f44"],["/tags/MySQL/index.html","66fc5b456e335033f356b765e2e2e33c"],["/tags/Optionals/index.html","28cb5b2d0ca4dec162d1b0c4d87193e7"],["/tags/Promises/index.html","4d1e197d3bdbbc19d95b975602e12b02"],["/tags/Properties/index.html","488c83a06bb84f77c17e97abe32b0027"],["/tags/Protobuf/index.html","2d762c349473afdf00afbb5dad491173"],["/tags/Protocols/index.html","c8501b828011d8420906b9cce9fc1540"],["/tags/Result-Type/index.html","bdd7e8153cc2cd7d0843cedf5f78cbeb"],["/tags/RxSwift/index.html","25458fd64c52c0e09894de48e6e1fa84"],["/tags/Server/index.html","3044cfb4db091696050fbc9b46a21ce9"],["/tags/Session/index.html","af83d9903df82e35419a52f669ccd0ca"],["/tags/Sqlite/index.html","6edef2c97c9aa82d5c144cede242453f"],["/tags/Strings/index.html","f1132f64da7699735287bef42de9cd1f"],["/tags/Structs-and-Classes/index.html","9f48c90bf154ea806ebe7f31763a5c95"],["/tags/Structures/index.html","dac3cde5da454413a6d06b644c171707"],["/tags/Swift-5-0/index.html","01d7df5ffd4e9deb644452bce264ff89"],["/tags/Swift-5-0/page/2/index.html","d3a9f8608d4dbc016220dcbd05fd9936"],["/tags/Swift-5-0/page/3/index.html","da643c664234c96cae7db81edbd6fa5d"],["/tags/Swift-5-0/page/4/index.html","01ddd7adaa50454d2b03964d3ad84c26"],["/tags/Swift-5-0/page/5/index.html","e781ba3509358100c71ed3dc0b91fc40"],["/tags/Swift-Apprentice/index.html","f6bf63f43fac79176d332c50a1d2114a"],["/tags/Swift-Apprentice/page/2/index.html","842f417545539894a3381ded8690921c"],["/tags/Swift-Apprentice/page/3/index.html","25fe437aef9c1eb6f71154e4a1a31485"],["/tags/Swift-Package-Manager/index.html","3364ccde8d1be32f78d96f4da6e540a3"],["/tags/Swift-源码阅读/index.html","d2ef929a559688b42cef0ce57f6cf8ba"],["/tags/Swift/index.html","c9104aa277198d8dfedb899fb57db8a6"],["/tags/Swift/page/10/index.html","8691578a953340794645c4116b26ef1d"],["/tags/Swift/page/11/index.html","262f2e3d1f0e0b10cd06d6971f23ccef"],["/tags/Swift/page/12/index.html","f64e1c38f5b7a30860caa920dff2f3aa"],["/tags/Swift/page/13/index.html","0a4461d5d5e4b96d19a4d133d2ec17c2"],["/tags/Swift/page/14/index.html","8d64686f4c538ab34e760e6113e31f82"],["/tags/Swift/page/2/index.html","12861bf546739938810567141ebdc4ae"],["/tags/Swift/page/3/index.html","039cdedb8cb2a93dd880064f50ef5bdd"],["/tags/Swift/page/4/index.html","1680a309c3238ab75b2d96cde63072b8"],["/tags/Swift/page/5/index.html","a0516f5f9b3ae68df77b157ad618b09a"],["/tags/Swift/page/6/index.html","ecf53392006e9577396076f7a29e7235"],["/tags/Swift/page/7/index.html","850670137ea9c08ca14260a13a9bff77"],["/tags/Swift/page/8/index.html","bccd182fa705704e692b4d7a9f06ee74"],["/tags/Swift/page/9/index.html","cf2fd9e758f13c58a90136df7d8cf056"],["/tags/SwiftLint/index.html","245065ec43e31a2869c1f741c4d4f4e3"],["/tags/SwiftUI/index.html","84f4f47867ad7913f9cf0ef4b7763c9d"],["/tags/UICollectionView/index.html","63d1b40f11a30ce197e665078071159a"],["/tags/UIColor/index.html","c61d3c77c930dbfa6b95f5da8d5ac87e"],["/tags/UIImagePickerController/index.html","61d77485836b57ec81f17ab13457d377"],["/tags/UIKit/index.html","3a43a9272c686b72df7d7965068406b8"],["/tags/UIKit/page/2/index.html","c04dc582ff276587d9c06e54d5e906f7"],["/tags/UIKit/page/3/index.html","1efa51e96ce3c549e5cf94d5556b09a9"],["/tags/UIKit/page/4/index.html","f458fbd174bbe6d8785756f7256485a6"],["/tags/UIKit/page/5/index.html","d3eaeddfa85a5810103af47fee013c09"],["/tags/UITableView/index.html","0d8c3af24bdec676f5d9b74c677a21e4"],["/tags/Ubuntu/index.html","71f82d1c71f452d89c8c7f9430595513"],["/tags/Uniquely-identifying-views/index.html","4b63253615b14bd8134e34bd21d079aa"],["/tags/VIPER/index.html","92bed458ff2313e2c5e27d3dc65b1987"],["/tags/VMware/index.html","b45912d95c0ca5462c058291aed55d50"],["/tags/Vapor-4-0/index.html","4b9b0584faf7b27f6095931cf40699f6"],["/tags/Vapor-初探/index.html","5a36b422718dc3ed7df36adc971d236a"],["/tags/Vim/index.html","bdfe9d78fa28da8767410636f1af8cde"],["/tags/WKWebView/index.html","dd0abf323274c6950d33e9e932500e18"],["/tags/Xcode/index.html","dc8231b605614fdf6e16d9608926a9d1"],["/tags/appleOS-Networking/index.html","fe4bf4b22da76e6ec6c69b8197768ec0"],["/tags/bugly/index.html","f886da80f1354e88d5601a1812f8585b"],["/tags/enum/index.html","1d06e03ebb22847954414d6f4ef03fe7"],["/tags/git/index.html","dc064a8f3364fd7cdcf11c9cd6c5978f"],["/tags/hexo/index.html","224520b73834c17d2d5f596f7eed7c17"],["/tags/iCloud/index.html","8550e004af7be0dcd9628714c35c8cbc"],["/tags/iOS/index.html","6fd841c8e35a0e294043369db48bb0f7"],["/tags/iOS/page/10/index.html","d16c1426350cdec8b7b665520737fd1c"],["/tags/iOS/page/11/index.html","00fc9b91f61b3b1510d9f754396e7abe"],["/tags/iOS/page/12/index.html","d61e68a1d06ab0e62aa8613738ea00ff"],["/tags/iOS/page/13/index.html","8b311c6dbc655ca59f2d8fd3c853a0c1"],["/tags/iOS/page/14/index.html","780f055e1c68579d454adf4219bda086"],["/tags/iOS/page/2/index.html","cfa2e7dd28c490ea8280299d95a26e8e"],["/tags/iOS/page/3/index.html","4d3a22f1c9878a9b7dd9d7a7f4af632c"],["/tags/iOS/page/4/index.html","bcd422745f814eb5cb76ad1ecd5cc394"],["/tags/iOS/page/5/index.html","004f6db3606aa7f5e456f634eb717164"],["/tags/iOS/page/6/index.html","e70095e4476d6dbd2e1081bd488842bf"],["/tags/iOS/page/7/index.html","2f351703b43226ce6d475a6ef2c97cd1"],["/tags/iOS/page/8/index.html","800c2d2fed925fecc6f7c8e211fc3ecf"],["/tags/iOS/page/9/index.html","e9dec530ff85ae3a72909638cf9784cc"],["/tags/iOS面试题/index.html","cc7b560e92e7e6c6e3202c0a7c9ad76c"],["/tags/index.html","5f542c6bc34d4fc2a9d6501c8884aaa2"],["/tags/interface/index.html","85aa8fc895475ee36d265839df3abc13"],["/tags/non-optional/index.html","ac9aa3711455e68726dd61cec58934bd"],["/tags/package/index.html","cc6375d8415823b8b60b947a43e4158e"],["/tags/random/index.html","fe518525b657522e50938554bc6ded8d"],["/tags/transition/index.html","31eb779f237f55a4a9739505bfcbac12"],["/tags/三方类库/index.html","932611bbffc77e5024fecf172a2c8956"],["/tags/依赖注入设计模式/index.html","9545714dabb6d563e7ad4bfb6d2aa252"],["/tags/值类型和值语义/index.html","c7ea2e0f27d5496b40ec2757a1d21b4a"],["/tags/内存管理/index.html","3e345ca73a8e2b33cee2823ba28e4cf2"],["/tags/冒烟测试与回归测试/index.html","6a69bc0539157cf1c6f1971dadb91ef1"],["/tags/函数式编程/index.html","ccdb00a523fc9891af5d3d67049e7803"],["/tags/创建博客数据库/index.html","0fe3a9709fa586ef48020f90fe6c4f6a"],["/tags/初始化模式/index.html","69d22dee2405310c3e991495fbbe6a25"],["/tags/单例模式/index.html","82defb42ce83efa4fe48f18c503e6e63"],["/tags/原型设计模式/index.html","d4d13745ae0af8bc04f989393ba90001"],["/tags/命令设计模式/index.html","adaae7ab87b71865e464d8cf6014f75d"],["/tags/基本控制流/index.html","de0757c8226661d9745937381167fb3b"],["/tags/基础语法/index.html","f82bdc492869d879250617889addaaa0"],["/tags/外观设计模式/index.html","f3da3376250e76d5a61d1bec8a3e5322"],["/tags/委托设计模式/index.html","5df150f84553cc6f9f2301394036a5b7"],["/tags/子类化样式/index.html","5150ec4951217419243e03dfb7c9a05a"],["/tags/对象池设计模式/index.html","53b63b4a82fbc7e11c2b921402229ba5"],["/tags/工厂方法设计模式/index.html","cb00b13a2cd40e00e2e98fa283ef3798"],["/tags/工厂模式/index.html","20633dfc2caaca7af7880a35b0fd059e"],["/tags/工厂设计模式/index.html","eb5928d64b20cdbcfbe101f22818d844"],["/tags/开发技巧/index.html","44ee0b90217ed6be7b1850853478725e"],["/tags/开发记录/index.html","23ed66c4bd04e18544d3b3a87e2d4621"],["/tags/懒加载模式/index.html","5979aa1ec87c71f7603867b6d4950e97"],["/tags/抽象工厂设计模式/index.html","9373fa4d084acc80183032f67b02cde7"],["/tags/数据库/index.html","2ad14ca4fec1b599d471d3b61659a341"],["/tags/构造函数/index.html","30ef2af4fd96bfa1d960f79a17069e84"],["/tags/架构设计/index.html","6199bfb3b588265b8f7e39dc90fb7225"],["/tags/模式匹配/index.html","11268e5b823172887e57a1b10040bc55"],["/tags/环境搭建与验证/index.html","7980da22f06e99ea8de7cc52a51b0b8e"],["/tags/生成器模式/index.html","03b051218a9b3e126bfc1fa21d867cb2"],["/tags/用户体验/index.html","07e283c705b1a2ea52e28076d3fe5232"],["/tags/用户协议与隐私政策/index.html","718af2fd562e82ac8683ddffa5eada3e"],["/tags/类型与操作/index.html","d4b35dee8235deb3718614ec5570d3c5"],["/tags/自动化布局/index.html","e0360253fbf84be9db37d5e0465b44ee"],["/tags/自定义UIView/index.html","1fa183916332a6adc6878a82e23b2fc8"],["/tags/自定义转场/index.html","73355f52a4c9302ca3fc3684aa037dc0"],["/tags/自适应布局/index.html","31886a6b341b455abd93f1648c92b77b"],["/tags/表达式、变量和常量/index.html","620483e111a14a7fc32c630cc80934d6"],["/tags/设计模式/index.html","62f50572487808a6845289f5a1390859"],["/tags/设计模式/page/2/index.html","f20ec5cc5655752154ced83dcb8d58ed"],["/tags/设计模式/page/3/index.html","1e10aca3a04483163c6be9cd9bcab1ac"],["/tags/访问控制和代码组织/index.html","ea09349615322d6aa768889e765d081a"],["/tags/运算符，下标和键路径/index.html","74037fddcb74e8c9188c3f5fe09ceebe"],["/tags/迭代器设计模式/index.html","0ee336caea822f3eca11078560c2e135"],["/tags/适配器设计模式/index.html","9ccdb78a4bb5712e9d2c15031abc94cc"],["/tags/逆向/index.html","72ad9ff459139c1e28b37a8e2f822626"],["/tags/错误处理/index.html","f101589b991e3a089ccf8937892cf24a"],["/tags/静态工厂方法/index.html","e6bf540f7a4edf0584e877db1673e80b"],["/tags/面向协议编程-OOP/index.html","69f96f8684d2c9885e6443088d4d77f8"],["/tags/高级主题/index.html","f3e90114c657212851f82b7abebd54f2"],["/tags/高级协议和泛型/index.html","cdd84976b98626f23c1c5a3ebe227fde"],["/tags/高级控制流/index.html","6a1df35957dbe2dd3cd5d1f46e2f8ca9"],["/xcode 常用的快捷键/index.html","019ed973b0e4cc56cfe71b9b6f1acab4"],["/为iOS应用构建输入表单/index.html","21e2050307ac2cd6245e3c2a5ec0baae"],["/产品开发的幕后花絮/index.html","3989a14b7cd8330380ad5efc89b4174d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ef8cf8f6bd0f4c34882106b4205235cc"],["/冒烟测试与回归测试/index.html","3ca8b53df4786c958f734cb9e74983ad"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","c31f0f5efb03af5d7e0f05abfb486f7a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","04740d564059fa4a58526597a59c7335"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e4f743cef19f7ff3047d68e693c8d00b"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6d9dd48473efe89b2c2587bc19a00efe"],["/在Swift中创建自定义集合/index.html","1b234cfd2e58588777b29a4da7d75b56"],["/在Swift中处理非可选选项/index.html","094a6a3d0b306f7b4a24840bf8d9688c"],["/在Swift中生成随机数/index.html","1e200ae8d234b8f566f896d7d4e706b3"],["/在Swift中重构单例模式用法/index.html","ccb11802dddf5e85f1c8011dcea45b9e"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","90595664b4a3332e344c31981303e496"],["/如何为VIPER编写服务？/index.html","e4c4d2299360d5f1b8c8d28b52d7474d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","b8b988b30780960bb4967d4eb1e874c1"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9a3fc9d7d43ef869496a309a822af6e0"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","20d3e432ad5ba453702bcc94e1d2d65d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","dc6af3cfd6709a7f60cf816449a4a3e8"],["/掌握VIPER架构/index.html","6b5ebeca843909d6b2aadca9d8e268cb"],["/揭秘 WordPress Hook 系统/index.html","34ac5d490cae41275150ba7845516052"],["/比较工厂设计模式/index.html","a9a0e2ba0d350a5b230e11eaa9b0821d"],["/深入了解Swift中的Grand Central Dispatch/index.html","a88985d8f8c2bb99d684c92f71f02fef"],["/深入研究Swift框架/index.html","7dc4197f23ff6cbf415b9c0bfc1177d2"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3a5dfe510a7af048c6d699dd15dedd22"],["/选择Swift而不是Objective-C的5个理由/index.html","05334fd52aaeaec6184e4e044c6f421c"]];
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
