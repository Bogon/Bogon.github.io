/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f0cc2074d52db4996c863777b8631e75"],["/2020年iOS面试题总结(三)/index.html","3758b45ea903f28a2aca3d33a4aa8c30"],["/2020年iOS面试题总结(二)/index.html","1722e5d28b4267cb22ab943346906f27"],["/Advanced Swift系列(一): Swift 简介/index.html","1f55ab9ad12b1f64350ffaf22c941624"],["/Advanced Swift系列(七): Strings/index.html","84cbac9789ffa0a33c64c0cdd764de8d"],["/Advanced Swift系列(三):  Optionals/index.html","9a9c89ec6aeb80143c08355a288e981b"],["/Advanced Swift系列(九): Protocols/index.html","47851835375b4efce8ebbc705dcbf2b8"],["/Advanced Swift系列(二): Build-in Collections/index.html","fd76a9ff200aa341ca14f4c3d8d0890b"],["/Advanced Swift系列(五): Structs and Classes/index.html","40e18feb2feac8618c55ddbb92ecc4fe"],["/Advanced Swift系列(八): Generics/index.html","24111490a87c3019ee3454f70abe8d23"],["/Advanced Swift系列(六):  Enums/index.html","9f8d52507513ab0181d38184474423e9"],["/Advanced Swift系列(十): Collection Protocols/index.html","8f01cf819bfc1c12e7e55d91731f2b70"],["/Advanced Swift系列(十一): Error Handling/index.html","b00133a68681afd128eec15c0ea7496a"],["/Advanced Swift系列(十三): Interoperability/index.html","6ae0879f578715ca922550ed282b9d37"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","52e158b8a004fb8bea5fd0b29103ea18"],["/Advanced Swift系列(四):  Functions/index.html","8165c85c7fe8f8eb902b9ae9bfcc7578"],["/App Architecture系列(一):  简介/index.html","1f7f9ae7cbe1a4404214a518d9079042"],["/CocoaPods 设定版本说明/index.html","1e71ed38e9ab2be9d5e09202260b3e78"],["/Functional Swift 初探/index.html","54a10124d8f573181e2b74cfbc5332f8"],["/Git 使用小技巧/index.html","73e78e78c6ac2867abce292530ee6e79"],["/Go Protobuf 初探/index.html","b70a9ec54c1d8246cdd4eee2c9d4056b"],["/Go mysql Tips/index.html","05dc7a30ea164b42b81b5884233f48a8"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","e176129e4485f430b63f3a23866bafe5"],["/Go 入门篇：2、Go 实效编程/index.html","10f973731fc89307e737ce4869a423e7"],["/Go 入门篇：3、Go 重要概念/index.html","520128e6b5b9d39aa5dd8be9dab2a1e0"],["/Go 基本语法初探(一)/index.html","85fa71d11f93b3f522f00290a86810da"],["/Linux VIM 命令及操作小结/index.html","c2b06733b1d499e59d5086a203b6ddc7"],["/MySQL 基本操作/index.html","ee16c82f561e2e51a0dcb55817cc3189"],["/MySQL-列类型和数据完整性/index.html","02e0a919fc83b8df8841990d49a576b3"],["/MySQL-数据库设计和查询语句/index.html","4a6f8134c386c8b2b677e80dcbec7619"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","9b12e5dc7a51ac0f0946d04223b58f4b"],["/NSCODER和SWIFT初始化/index.html","38d631001a2c8a07844a33fcd55ba798"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","9e52ed9762bfcd49f8569507063b9299"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b80ecb0299ee5b05032d9fcd6af46f6c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","b5f87b9c5242cf9a4357520f997673ea"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","8db6255cd789ab8ee205454981d5d376"],["/Sqlite 使用Tips/index.html","fed209df5d9caa3d23b5a318142a3862"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","a48b29bbb9705e86695d922e15e14e74"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b8ec7c1638c0acc951efd9c451dc6e87"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","faad8cccd8b31fba3695921513c68c37"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","4a8297e2f8ab359f5a40147d8dac2a05"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","8da25b004a5d99cf5a37e334d07bf276"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","4e9ec4789b9fcdbea5d0595299dfbbc1"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c43fd71c905fdab4ff2b33deccddb630"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","5fad9e2aa4554c018eb867749ca958bc"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","014f676f46e7c747cfb481c939376cec"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e0de403ec5da81e7ea9a474f86fc08f1"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d57b0a42fe8e3aa9dcf7059ecbfaadc8"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","1448682a8aa6c03e23f370b30d73e8a7"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","bc3ef3e58115a3caef26446dc943b392"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","05d3cd2d6391612cf4d2e4e9848f0b28"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","259ff2d33e187d0e80da5bdc7e380f98"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","e145c31357db8220b4e02d00bb8077d0"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c4aedd1a4fcf8847566092db800c48c1"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7e857df637040abcd2a4b02c48813710"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9791ea64a55fcd6fb796fc443ca3116d"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","39a79a21672c8be1bd5e152286ae4f97"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","e2a0dda18f6a745da20841d4eb9eb905"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","8d01ad425e4c28944ebb3143bb247ffc"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","43a3e5ba846e19c25e1bef41c05eab0c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","bd08a960942e2ef59f1f62a3a1ce3cd6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6504e730f16e2fb096da64252f91a66c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","dfc09cfaa615bbe0c01a519a141b190e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","383e48ebcd7f068be4834a54de2b7ac8"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","4c0738552aab19e03390d66115d145f9"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","3ceaba3e7eae05fcfcae04720641a158"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","8dc3fe2178764f2ef6d26e0a52731605"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","4b52a306faa27df917c144ba6206057e"],["/Swift CompactMap vs flatMap：差异说明/index.html","08ea90ce4531734f771fe8619deadc8d"],["/Swift Grand Central Dispatch 深入实践/index.html","00e8569d4ba451a3718501dff7179281"],["/Swift Lazy属性初始化/index.html","0444c5e93bc14d371534c4343c7c8e63"],["/Swift Promises 初体验/index.html","e31a3780cc5183204788c427f9f53f3b"],["/Swift Promises 探究/index.html","5212458599a0ddfa619a2da996e6ece4"],["/Swift UICollectionView使用指南/index.html","4dee675c6776f73f59f2d069e26369d5"],["/Swift URLSession && Combine framework/index.html","43c1029e2766f1ca857a2ee0113f3827"],["/Swift tips/index.html","4fa32c44b20ebe0077cc80bf14e18c0f"],["/Swift 三方库：GRDB 使用指北/index.html","380ce9a0efbe4afd120a40eedd05e93f"],["/Swift 唯一识别的视图/index.html","a4be0a1218baf4c5e46bdb1add18533b"],["/Swift 如何学习现代UIKit？/index.html","d804be085086bae7b152ae7ead035f38"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","747e562ceadc26372de5e2c2e7e2b61d"],["/Swift 用 compactMap 替换 flatMap/index.html","1eefd3fd3342fadc4f1a14bdfd4685f1"],["/Swift 选择和播放视频/index.html","25b70942246f254516290db4252067b4"],["/SwiftUI 系列(一)：1、 简介/index.html","116982c3ea2213ca378dcda781e42449"],["/Swift中UIColor最佳实践/index.html","dde48b31ae15bfd78f1424ebe20fffdd"],["/Swift中快速简单的工厂设计模式/index.html","c30289f4ed54925d528ae27fe06ec395"],["/Swift中构造函数与静态工厂方法的比较/index.html","ee5ad22d6b9469571bd4189cf3a7a160"],["/Swift中的UITableView教程/index.html","0f827a79585a91938e80f8a2266942f9"],["/Swift中的懒加载模式/index.html","7528b59bdc4329a12c319ced7488e6c0"],["/Swift中的模块和挂钩/index.html","7d062e76ad9662dc40d18f033c0aeba8"],["/Swift使用布局锚点添加约束/index.html","2e2d31765e7c0b18ad17d41a8affaa18"],["/Swift依赖注入设计模式/index.html","233f48c5c06f4e00c8406fa1cdf4f077"],["/Swift关于Dependency Injection (DI)/index.html","814ce11c7f36133763076512602b3aa6"],["/Swift初始化模式/index.html","b6a5452b6ac8e8643b9712d6cebfb093"],["/Swift单例模式/index.html","e2e50eef776296c7bf43fce4333556cf"],["/Swift原型设计模式/index.html","395beb0c1a3313515b9041bbb3249edd"],["/Swift命令设计模式/index.html","021fc36bd36fa048207a416f875341c1"],["/Swift外观设计模式/index.html","550b5779e3cb098d813cc4dff365d544"],["/Swift委托设计模式/index.html","7d8501a8d566cf574e5ced7e33068527"],["/Swift对象池设计模式/index.html","fef0fadb1fc8ee3e0b7933f83c772308"],["/Swift工厂方法设计模式/index.html","04ede668d89e9923d323d532357bda6f"],["/Swift带闭包的懒惰初始化/index.html","e730444a334107e61d2a5789e125e971"],["/Swift抽象工厂设计模式/index.html","30d7a32c3201c62bc82775d1f7b8a592"],["/Swift掌握iOS自动布局锚点/index.html","6709342bc0d64697fb87f75e213f0689"],["/Swift支持旋转的自适应单元格/index.html","6d315768871dc2e63d5b8730a3592985"],["/Swift枚举值/index.html","a02ea1e937647ba3feb1bcc5935da184"],["/Swift生成器模式/index.html","e2be44e4f5e4c5ad504fd3063aaf3d92"],["/Swift结合Xib文件自定义UIView/index.html","5624511507ce3bedff9b45ed4e98b4b6"],["/Swift编写的20个iOS库(一)/index.html","170bc8b9a1a00a41a9c07e6c2adfe091"],["/Swift迭代器设计模式/index.html","24960277c4cc1aafae3305c558236d99"],["/Swift适配器设计模式/index.html","dda5d7b72a5d5c00b3b54adf0dd74e3a"],["/Swift静态工厂设计模式/index.html","9871ac4b5c051673b67a6194c937717e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","af628e64e0802e2bafdf6163baace78e"],["/UICollectionView data source and delegates/index.html","fa1fecf2fc5996ce267e6b7da2c3b5d2"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","f422aa43a114e72a7498820853add7c6"],["/UIKit初始化模式/index.html","aa56421d0b49ad48ddc4873ffbf66716"],["/Ubuntu18.04替换国内源/index.html","0fc2d48a4c22d457c88e9ed289f674ac"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","669f6e64caefdbab05da5d524fcd1219"],["/Vapor系列 (一) :  Vapor 初探/index.html","7ebd0cd0dc4641d884f8ce5598ca74cb"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","2541fd5eaad3c52c2ed3a401bc54a11f"],["/Vapor系列 (二) :  Hello Vapor！/index.html","f3d8a8bd09afd63ae89921e2fc2f304c"],["/Vapor系列 (五) :  使用session进行authentication/index.html","0ea0b97fe6b92c2a16318eef0ab90421"],["/Vapor系列 (四) :  创建博客数据库/index.html","4f72b3f04e0a6269de4d637527c1c328"],["/Vapor系列(六): 徒手撸一个CMS/index.html","bd1cedd5c7451f617c0c8d6057ca6d75"],["/WKWebView与Native交互注意事项/index.html","2ccb4c6b2af1950888b3dbfaac54e680"],["/Xcode扩展/index.html","2a12e9d714cfdcdd7eb5c5b21bd75845"],["/about/index.html","6ec60925dca009e791d2aa1477b29c17"],["/appleOS的Networking示例/index.html","c6e4b6f1b0874e630b4ccca144a6ec78"],["/archives/2020/03/index.html","03c7806fae3cce38cfbfee545b9fe0ec"],["/archives/2020/04/index.html","aea7ed94d8afcf01eba16a927ffbb43d"],["/archives/2020/04/page/2/index.html","017713dcec96d91cc52fcf28035e5341"],["/archives/2020/04/page/3/index.html","0981694f0851114546b12111504402e2"],["/archives/2020/04/page/4/index.html","b0f78acb5807fa7330cb93fd534cf6bc"],["/archives/2020/04/page/5/index.html","19d287bd349943271b48db2b136cc405"],["/archives/2020/04/page/6/index.html","f3ee7b951db59dc796692b25adf4d7e0"],["/archives/2020/04/page/7/index.html","eaf24eb08d370e000fe9094e2012eeae"],["/archives/2020/04/page/8/index.html","41f6df1acb808a6be05ce552185f124f"],["/archives/2020/05/index.html","6df3287a740b9ea899124b799ca6b15b"],["/archives/2020/05/page/2/index.html","4df3472d072bf30edf4d788303b9b7f2"],["/archives/2020/05/page/3/index.html","73643d4b440027dd84bd26b19357c6ae"],["/archives/2020/05/page/4/index.html","cd057e95d1743f42d9d9e4fe271866a3"],["/archives/2020/05/page/5/index.html","4cfdae8afad13b95202c8dd3161c4ab5"],["/archives/2020/06/index.html","0a51e6e6b57a90e19eaa71b9d2ea297f"],["/archives/2020/06/page/2/index.html","1b1b25939e875f405662d51c21eed93f"],["/archives/2020/08/index.html","c56bbb660e1c92f06068e40e595c1b84"],["/archives/2020/09/index.html","a8963b21eb528297795abe0afe1073f6"],["/archives/2020/10/index.html","0002084c6664c6211db285ebfdcf6fd8"],["/archives/2020/11/index.html","2bdaaebbe5f6435e0a160dd0837d2e01"],["/archives/2020/12/index.html","e4bc86c7890258f5732486f8c25dd1fa"],["/archives/2020/index.html","ed9210e954dc31d739c0f8488329888d"],["/archives/2020/page/10/index.html","0e4f3475cfe4ab1932c46c851d645aad"],["/archives/2020/page/11/index.html","c20eabdeb5e61aa57500f4431c982b74"],["/archives/2020/page/12/index.html","04f2327ab6569151211851745b50fd35"],["/archives/2020/page/13/index.html","f7f5ba90d67a85bc399a2da627aa87bb"],["/archives/2020/page/14/index.html","25b5cf11e0f45d7c95e8773c526b7ff4"],["/archives/2020/page/15/index.html","a77e6962e907357a29ccbc7532d6714b"],["/archives/2020/page/2/index.html","0bb4dd83b1bd401db1a90a365614213c"],["/archives/2020/page/3/index.html","c9dc49a248cae92f5b68ef3efe287c9f"],["/archives/2020/page/4/index.html","08ea8079461ad0b685bb2af1ca162a1c"],["/archives/2020/page/5/index.html","4ca008bbcba67f3a779b4717b1204350"],["/archives/2020/page/6/index.html","c25fd9c9c67a1304bea420c4de806e70"],["/archives/2020/page/7/index.html","39b592e22116b2de161ccb301f90bbf7"],["/archives/2020/page/8/index.html","c816777ef8276a23f409200d0c2c4803"],["/archives/2020/page/9/index.html","2e7a109a8a5478d8881b082e1ebc47b9"],["/archives/2021/03/index.html","849ca30b05805dfbf272c77c0c511739"],["/archives/2021/04/index.html","f3334f2f97e2912712b0872a5a2face3"],["/archives/2021/05/index.html","32f4122ded995a03f657beff6ee506f6"],["/archives/2021/06/index.html","fc78dfaabe37047e7cc8c7220e8aaaf6"],["/archives/2021/07/index.html","ffe3446b0ff9de11fc530fa2c1487e76"],["/archives/2021/08/index.html","6b8e74aea502d76f81e571f8d9c1ae2a"],["/archives/2021/09/index.html","74e688960362bc72c8b023aa6bd4b890"],["/archives/2021/11/index.html","c8547118dc8b28847fbfe5cefab12f18"],["/archives/2021/12/index.html","cc2215fa222907636a19593a15b4d4c9"],["/archives/2021/index.html","e3ac2fff1d10fc9d0fb576c68a00ffcd"],["/archives/2021/page/2/index.html","eff3bb2666abbb1930bac52eb095d3a0"],["/archives/2021/page/3/index.html","ef7559488753e01e9ac8448dbddc4bcd"],["/archives/2022/03/index.html","7f556da01d515dbb164e50f5755ef75d"],["/archives/2022/04/index.html","99a66d626984268245078c9ce20da292"],["/archives/2022/05/index.html","c46a22373e1a17b76acdcc0dd7bcbae8"],["/archives/2022/06/index.html","e48f938e91651adbe8188d0d1f5ce7dd"],["/archives/2022/index.html","104b063d59495a6c7d9c14708eb609fd"],["/archives/index.html","187ad17b6ba0d2606f3572d2c192cde5"],["/archives/page/10/index.html","5547fd23078a83b832653273fa754057"],["/archives/page/11/index.html","9e29b45d2bc93bf44b9e46113ef15ff1"],["/archives/page/12/index.html","05e011b9c281112381b6c00f6aa44024"],["/archives/page/13/index.html","13f5760a314b9534ff94f916a61645e7"],["/archives/page/14/index.html","272894564c8aeb04f6d157ecda2d8926"],["/archives/page/15/index.html","fdc1b66e4155eabe220eec5f7f7b481f"],["/archives/page/16/index.html","ee52e9134b0b51b8181cee373c25e65f"],["/archives/page/17/index.html","7b337d7048cdce395d5aeb8cee39dc95"],["/archives/page/18/index.html","8b9d262f1d892b4aa9aaf3e1792955ae"],["/archives/page/2/index.html","69a6e58c7a7e68f6496a40ed8a3a05b2"],["/archives/page/3/index.html","9864c686bb5416aca74202390f42f97d"],["/archives/page/4/index.html","50dcddb3e1b0f2c0c73dc0e16c89868d"],["/archives/page/5/index.html","8c60e7710b97037385123f254583cac0"],["/archives/page/6/index.html","f7a3bfed0e370ab9aa3e7b4f0a3d127d"],["/archives/page/7/index.html","575e90b8896eeb0081ee3aeaa76ca4d1"],["/archives/page/8/index.html","33b5e593f7023826480e20f9f0a67442"],["/archives/page/9/index.html","7f9dc5f0ce731b23b2a8f9f4ad575a91"],["/bugly 上传dYSM文件小记/index.html","6266f4559c21d8839be44f7813766cee"],["/categories/Advanced-Swift/index.html","2d0c7fcbc799db82cc0624bf5534434a"],["/categories/Advanced-Swift/page/2/index.html","c05eacf02a664bdee4f8387935e30862"],["/categories/App-Architecture/index.html","1f7df2975bc4e34553104c3ca2404a37"],["/categories/Array/index.html","bddef1189eac05930f4dd570e2f78080"],["/categories/CocoaPods/index.html","05335f12cd497d4d8f7b242ca24ffaaf"],["/categories/Codable-protocol/index.html","c727cd43fb7d1b1024dc5c606450f8be"],["/categories/Combine-framework/index.html","a79a8eeef260dd4417505363bf211b05"],["/categories/Combine/index.html","07fe09d1e923892349412ce1f696a769"],["/categories/GRDB/index.html","8a1fc9ac47353f0ad016c061ddddb265"],["/categories/Go-入门篇/index.html","3e6a485e3d414533b557e2b9d4b8471e"],["/categories/Grand-Central-Dispatch/index.html","ebf3a7a0e6ac0ca4491423f373eb23ae"],["/categories/Homebrew/index.html","dc58e0af9adc13ed938e464ac82a12ef"],["/categories/Linux/index.html","9ebcc951288da32d2548adcfaaff7471"],["/categories/MySQL/index.html","2a69ca38022f9ace7f1774ecaa69dd02"],["/categories/Promises/index.html","ff50c04577e45ab504169a2b1b8a5a55"],["/categories/Protobuf/index.html","0a3f4dcefaa5db728253ff5847180b46"],["/categories/Result-Type/index.html","99faf540986d6357bf76ca66c7329f85"],["/categories/RxSwift/index.html","e52731ea110e56aaf36380ea90b4747c"],["/categories/Server/index.html","880c3e1abc68c060c2867ef1865c1a73"],["/categories/Sqlite/index.html","d8c7372ed1db5d63d8fd51cfad122720"],["/categories/Swift-Apprentice/index.html","e424e5446c0b543f9cb6064fbf31e7e5"],["/categories/Swift-Apprentice/page/2/index.html","aa700b5c8713b7adb5dc943d6931c8b5"],["/categories/Swift-Apprentice/page/3/index.html","28a8280754786bb8c2387904c7a62076"],["/categories/Swift-源码阅读/index.html","f04e9ccfa47b766dcba8b2788c82001c"],["/categories/Swift/index.html","5fa6c346b936441f1f75f92485d720f7"],["/categories/Swift/page/10/index.html","0a15bb0ba0ca177ba3761a11eb135ee7"],["/categories/Swift/page/11/index.html","c7a879c0dde0445f9dead466e41a8aef"],["/categories/Swift/page/12/index.html","3ec378bcf9df081de0e791398f528b74"],["/categories/Swift/page/13/index.html","51aa1770ea61d81a96dd7ac1f07e72fe"],["/categories/Swift/page/14/index.html","ae12a264708a332e06e7a8a973e46493"],["/categories/Swift/page/2/index.html","beb062c6c8f7b9cfc5b4413466c115df"],["/categories/Swift/page/3/index.html","93aae1d68a129635e20c8b8a364c2f1f"],["/categories/Swift/page/4/index.html","4754dd301b3b1b8468a470714dd8c9e3"],["/categories/Swift/page/5/index.html","4ce493ee452ad24d611df08795cdf6c4"],["/categories/Swift/page/6/index.html","254afe634afa879a42f1215cf4c6c7a4"],["/categories/Swift/page/7/index.html","c0cd37a234ea06c44783bb46ee725e8a"],["/categories/Swift/page/8/index.html","69953fbc834b43e1cc7ee2130a723616"],["/categories/Swift/page/9/index.html","e136a6bad473f05f4f1deae8a696cb03"],["/categories/Swift5-2/index.html","683c934ef0849303e96b8794c7a11292"],["/categories/SwiftLint/index.html","8b0f1275099f37a8dad377bd31d7f92c"],["/categories/SwiftUI/index.html","044b7cfaa27359806e71e70d3d92ff10"],["/categories/UICollectionView/index.html","6d8a21df6d84dbfde7a8ad7ad937168c"],["/categories/UIImagePickerController/index.html","6a8d72cde505d306ed1e456052c75be4"],["/categories/UIKit/index.html","71080f4d8957d9153eb5073f33722239"],["/categories/UIKit/page/2/index.html","ab4cf03a8db77c19cee5c26ca342cd36"],["/categories/UIKit/page/3/index.html","3fa6ec431f6d36aa95f875bf52f56071"],["/categories/UIKit/page/4/index.html","e35faebb298b02ff3b859b5157871926"],["/categories/UIKit/page/5/index.html","61d9c2de97cb792697daca7c2522ef51"],["/categories/UITableView/index.html","1b558a6eeb04aea075cfe17e83008388"],["/categories/Ubuntu18-04/index.html","6f607eb63917c0aa12c105ac2a3142f3"],["/categories/Ubuntu软件源/index.html","a043aff5f149a065bfa3ce3c739cf1ae"],["/categories/Uniquely-identifying-views/index.html","3fa674f80904f746f462dc639a281c89"],["/categories/VIPER/index.html","c6919e32f54dda201173f42c5fc75e6a"],["/categories/Vapor-4-0/index.html","7f918ed4c68eeb735b0c4cac663f0aef"],["/categories/Vapor4-0/index.html","4bd3594004537c7831ba95bd71b61e47"],["/categories/Vim/index.html","e29a7b9e6a2a7cc3fa49cd231ed7d379"],["/categories/WKWebView/index.html","29a1b4f57de3d652d1c0ed1f2dee4b0f"],["/categories/Xcode/index.html","ab7b109a874b76436f53151a601a41e9"],["/categories/appleOS-Networking/index.html","8e4896c3e66b9b45d7e5cc3faf2350f6"],["/categories/bugly/index.html","f21a639a9c1f99e473162c5acfca80c5"],["/categories/enum/index.html","e44a216e7a8a3f5cef66cb6266b14c9e"],["/categories/git/index.html","9f5c2a40d6e1f0b1922732c4c354b6a2"],["/categories/go/index.html","9202d96508205c63ea00473edc4de93c"],["/categories/go/interface/index.html","06180ff2d12cc9a8d3b4e6985858621b"],["/categories/hexo/index.html","eb10c2551c6abe8f94f9e382f5d42444"],["/categories/iCloud/index.html","c48b76315e1af3e8f039b09a4b6c7011"],["/categories/iOS/index.html","f0d1de0409c7a2f29e1e69ae1900dd2e"],["/categories/iOS/page/10/index.html","a21f5e9122433ec3a9004c96de6c3f87"],["/categories/iOS/page/11/index.html","fbef61478a18698254789739a210e832"],["/categories/iOS/page/12/index.html","0ad9cd59d7c6699cbf2f691ab7195dd6"],["/categories/iOS/page/13/index.html","0409e01cd51ba84446e3ba70d5b3eb68"],["/categories/iOS/page/14/index.html","b46cc020fca2762f01b11cce63479230"],["/categories/iOS/page/2/index.html","9fae61d00b22ca6adca31292dcadf349"],["/categories/iOS/page/3/index.html","d7af0b629349575213449c37c554c305"],["/categories/iOS/page/4/index.html","7594f7c7e11b14f3253977e80f9bc4b8"],["/categories/iOS/page/5/index.html","fb4354cab5f4faa5f4409eefbf32aa2c"],["/categories/iOS/page/6/index.html","e39553b4414f28f046af6b685ec47401"],["/categories/iOS/page/7/index.html","5eafd35b75d1dff14b7584797107b4d0"],["/categories/iOS/page/8/index.html","3441c5f398aa12685bbd25f6cb85798d"],["/categories/iOS/page/9/index.html","1b45d5bec3cd92a5999a3e1c1619eed0"],["/categories/iOS面试题/index.html","1b336cfb9cfec71265a8c8356f7bb936"],["/categories/index.html","9b98de73affa8f52c755783c8099b99e"],["/categories/random/index.html","8049286e07c4727469a1003a43a68a4e"],["/categories/三方类库/index.html","d5a50905b91492460fec0f780d97a8aa"],["/categories/函数式编程/index.html","7391e5c84ef4c6830580eec4ebd14df5"],["/categories/子类化样式/index.html","86686ffdc437566eba9b5fb8e6303c30"],["/categories/开发技巧/index.html","ae9e4922c3f0da037b198eddbfe79881"],["/categories/开发记录/index.html","e73aefd921087be3c779145fec2083a0"],["/categories/数据库/index.html","485feb140f19fa5d8aabc0752198878e"],["/categories/架构设计/index.html","67165b92a4ed25c4fc3284aa6d377a53"],["/categories/测试/index.html","0483aa3a5b187d831256e0905a2138a6"],["/categories/用户体验/index.html","ce98e1d83f669361cb3377ed44bb104b"],["/categories/用户协议与隐私政策/index.html","5048116b17101addbb1cfd71f063112a"],["/categories/组件化/SDK/index.html","5e0d371e737c227ab933ff736d2da956"],["/categories/组件化/index.html","cf337203ea80329d1d748ec704559760"],["/categories/组件化/模块化/index.html","bf2cf213abe933137f09013ae4552852"],["/categories/设计模式/index.html","0f32198c2e81a96132a96a5d1783bd83"],["/categories/设计模式/page/2/index.html","ec7ee03a3a6c84899872d2b5e602a24b"],["/categories/设计模式/page/3/index.html","e9055b3ecf284eb9a1f25258cfaf17a0"],["/categories/逆向/index.html","9d24eafc74cc7083dc4e2c5f2f286344"],["/css/main.css","eebec83c266fe6f461641b75464afd98"],["/go moudle 导入本地包/index.html","ef3f0617ca6011a567f091cde1036566"],["/go 每日一问/index.html","16abc0eea032bd29e25878640c74a6c9"],["/hexo部署失败/index.html","a4aba01779e567347068bb43ff546374"],["/iOS 15 适配/index.html","cb5adb3925179d52ed83bcc8aaeab87a"],["/iOS VIPER架构深入实践/index.html","fa8e1354f03b9b897f53172b1a8f02d6"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","5c0115e6783c2b0d5f3c65f41a16e890"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","6b128b81914e2b5443b22b57c069e696"],["/iOS 自定义视图，输入表单和错误提示/index.html","347ebbd6099b0b9bfc1a0693e87e214f"],["/iOS如何使用iCloud文档？/index.html","20c9014c2e350df3d2eebc7b20979594"],["/iOS子类化样式/index.html","aa0524d37c4239e631833cd28435d021"],["/iOS开发记录<一>/index.html","006288cc84c8f70c38a9c7c1ae30174c"],["/iOS自动化布局编程/index.html","89933857373bd930e6a07b8d4a8d536d"],["/iOS自定义转场(By Swift)/index.html","20b2459abd8fbf93ea3775e6b6bf4273"],["/iOS项目架构：使用VIPER/index.html","23adbbf3d258f77e1cd87262b544fe9d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e091322ea52381bd5eb2096818672209"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","b3a2a3e4a8b3bdfc50e2a49eb2b6f9ed"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","ba1b371220d9cdf8ad4ae36165ea17d1"],["/page/10/index.html","b81c37afdbff2d17b03515260b47ba5a"],["/page/11/index.html","6be63339ce8122c7602cbba85c379456"],["/page/12/index.html","c0d967c902ec58dcd182f4156c70edf7"],["/page/13/index.html","a4fafc4810ecc879bc74d2e3be3c21ba"],["/page/14/index.html","079d6f0ee63a4f2ac8d3886b2567b34d"],["/page/15/index.html","275a98e8c66ce07eba15749ce4574acd"],["/page/16/index.html","a352dabe8f1d104e34e55e75a6c29170"],["/page/17/index.html","178e8e7b53f61c41e65af9f0fc595d5c"],["/page/18/index.html","e0551c70e7ada0c500fd2fd4a83d32bc"],["/page/2/index.html","6612c4cc72d9a18b402fa26a75ecf415"],["/page/3/index.html","eb097fc9505795f6b35eeb44d93581f2"],["/page/4/index.html","dd1304a2f5e51fd2b5791ea7a6637213"],["/page/5/index.html","dce60180f387dc81526ac8355df64211"],["/page/6/index.html","8be32f227d75f6fe7a92ba8df06a41e6"],["/page/7/index.html","5fa3cdbd2065da88bf379f4069c05411"],["/page/8/index.html","d75b315fd046264b0f416b25f7d62ec5"],["/page/9/index.html","33af7ed5354dd5ab8d91d83510f45ccf"],["/schedule/index.html","981f9ca235bab93a10ae6ecb63414a61"],["/storyAppPrivacy/index.html","a3894c7a096b40af8b9affdc9c7d7d08"],["/sw-register.js","c5b2d8ba257386a0c1cc14803a934a45"],["/swift 专题：函数/index.html","ac6d7670ae2c53fe41e9c545b51cd24a"],["/swift 专题：闭包/index.html","6b24e0f680b3b4bcceeeeb3eb44a1061"],["/tags/Advanced-Classes/index.html","19c3d4f230d99f7afbeb6fc97e755ab6"],["/tags/Advanced-Swift/index.html","ac1d11c07cec949bbd021bf0055bec35"],["/tags/Advanced-Swift/page/2/index.html","814d7b8ff7fbcf7ef606f776b6410069"],["/tags/App-Architecture/index.html","9134c5222863fcb0ceab247d88c55966"],["/tags/Array/index.html","954c9c5fb139d80858db098ba407874d"],["/tags/Arrays-Dictionaries-Sets/index.html","9931b9776dcfeef817747804b20eb6b8"],["/tags/Authentication/index.html","277766ccb37973238494c819be3cfcbb"],["/tags/Build-in-Collections/index.html","f9a6cf471a93f0558a8071908a2169f6"],["/tags/Building-Your-Own-Types/index.html","c488aa1831ed4896c468328d47680a6a"],["/tags/CMS/index.html","d8d64b975710ca7b6dbc14d40c5c6bf1"],["/tags/Classes/index.html","ee6f5da35fa7d555f9193fb4bb08d572"],["/tags/CocoaPods/index.html","4ca7eaceec200be4577356f084c6447e"],["/tags/Codable-protocol/index.html","b7807c6f7892909c0583259008eff4cb"],["/tags/Collection-Iteration-with-Closures/index.html","8c82fb0ea4ebc6c728f4b0fba6be01ea"],["/tags/Collection-Protocols/index.html","e32c8d296b991d4fdd42fe2971101c2a"],["/tags/Collection-Types/index.html","09f9f0ad6ad8d50d58bdd27be59f75c1"],["/tags/Collection/index.html","92ede740a40190f204ddd6e6ace1d626"],["/tags/Collections/index.html","b5cb718f21ba025348fe49d6ff073b32"],["/tags/Combine-framework/index.html","4f512dfceb290c170df5947af3a19a90"],["/tags/Combine/index.html","34ab82382fb703eca004a9edda4c8030"],["/tags/Dependency-Injection/index.html","234b5c661a019cd2ca535670c27292e5"],["/tags/Encoding-Decoding-Types/index.html","d8c719bf4c337f9fed7eac87ad86a167"],["/tags/Encoding-and-Decoding/index.html","15df1178c92b53dcc1e98b978dad2d78"],["/tags/Enumerations/index.html","26868e2e1f6ec7d8fc0822780374ff3d"],["/tags/Enums/index.html","953ffdf34d2b87d4b89f7c6c72349fa5"],["/tags/Error-Handling/index.html","04f8a1f0636a32e2ca84c0b1058d1480"],["/tags/Functions/index.html","6e00613243b407ca12bf253cf275de1a"],["/tags/GO/index.html","bbb83656949158ffe0c33e22f24ab3fc"],["/tags/GRDB/index.html","008f64a09f0b7338ce93f8085684004b"],["/tags/Generics/index.html","1e2027c6e0da0d41e24d71b9e925d93a"],["/tags/Grand-Central-Dispatch/index.html","4ca867f389e6daa0f3183be1beeb0932"],["/tags/Hello-Vapor/index.html","36b24b9a9487dae0ebda760c234e7b04"],["/tags/Homebrew/index.html","395595d177dc908753b939a17b12186a"],["/tags/Interoperability/index.html","f1df89bb194628055406c7541f688cdd"],["/tags/Introduction/index.html","449c40a34769e9b0d6092627275fd1f9"],["/tags/Leaf/index.html","e37ceaef12c5df129a401784af0a574a"],["/tags/Linux/index.html","91e4f3ed2fa24294a0023b466319aa5e"],["/tags/MAC/index.html","3e9840cb7f848bedc124cda5015a706d"],["/tags/Methods/index.html","653f4406ad9cdfe7bf81f6fdec36ec76"],["/tags/Modules-And-Hooks/index.html","f32fbf36932158bbcc1151774c572360"],["/tags/MySQL/index.html","790beafd2088c92b08607529f0819afb"],["/tags/Optionals/index.html","d6ed4f1a662882c3650e49e72526fa0d"],["/tags/Promises/index.html","a2275d410d686b888e5d120f2702c9ba"],["/tags/Properties/index.html","78e00870b1446b83753d71786fd90ce0"],["/tags/Protobuf/index.html","dd32feb956b602279a1b1d67afe86659"],["/tags/Protocols/index.html","31c30163762d7baf890ba3472ca2d5f4"],["/tags/Result-Type/index.html","2eec5735a5b1b3f8708d51edac9fe9c7"],["/tags/RxSwift/index.html","647f3a6d3b6c144e111f5f16fd0fdde7"],["/tags/Server/index.html","f9c3a7e268992cfb1296280248974bdf"],["/tags/Session/index.html","2b58330ed5527fa7066948fbe9c70452"],["/tags/Sqlite/index.html","d6a1d08478df44cff52991decc58f8b8"],["/tags/Strings/index.html","1dc53bcdee88691a80207ea99e1db363"],["/tags/Structs-and-Classes/index.html","125823908f4398df305d9fe5bcad5285"],["/tags/Structures/index.html","0048d619e855ce363c57edb3065fd79a"],["/tags/Swift-5-0/index.html","ff4a26bae80452bd50031a94e71bc5ed"],["/tags/Swift-5-0/page/2/index.html","ba2e6d916c2550cb0cacabe8ff5af2a5"],["/tags/Swift-5-0/page/3/index.html","8fb76c83a705a5f4109a37d3e39f9f8d"],["/tags/Swift-5-0/page/4/index.html","fc00e0e733f4f56829605c7585f21e79"],["/tags/Swift-5-0/page/5/index.html","9e39f96b181036d3c89ff00e06316797"],["/tags/Swift-Apprentice/index.html","1d28001eb6b2a0cbcdb4f1fe5197c1f7"],["/tags/Swift-Apprentice/page/2/index.html","a8ad2dc7276db63590682fbef3780bd3"],["/tags/Swift-Apprentice/page/3/index.html","8e89ebfe690e0c23e47ba115d2c6c48d"],["/tags/Swift-Package-Manager/index.html","a28167c7ce4dc212aa736c729e534c1b"],["/tags/Swift-源码阅读/index.html","096c0f4cd18815eba85dd5edb5cece74"],["/tags/Swift/index.html","723c1743844bd84f910a54934c6960db"],["/tags/Swift/page/10/index.html","f71eeb57a5f18cb84e2d73e8373484d0"],["/tags/Swift/page/11/index.html","85495cb3f7493762a434ada3356f31f2"],["/tags/Swift/page/12/index.html","4aa72f4c6824dff43cbd36f6df87c0b9"],["/tags/Swift/page/13/index.html","795b188b7e8e33c9abf62378ea9175aa"],["/tags/Swift/page/14/index.html","b2dcf4e0de86a8873218d182b11e0fd7"],["/tags/Swift/page/2/index.html","a5b11a93035ab5db3964a289b96ce0f5"],["/tags/Swift/page/3/index.html","fa43a20a6cdc4fa67d8a0fddeca17892"],["/tags/Swift/page/4/index.html","2e31ae717da80e378f46a4dc31045942"],["/tags/Swift/page/5/index.html","f8c794c8fa1bbe6ee429fd9f92c17015"],["/tags/Swift/page/6/index.html","2b6ddb3cb322dc8012e47949e317a5db"],["/tags/Swift/page/7/index.html","c6ded404051b9f07e7b90da8391a997b"],["/tags/Swift/page/8/index.html","f865edd0af1c40dbd8b5b54781368a69"],["/tags/Swift/page/9/index.html","34ad864ba649863b4d3db2fdf6456155"],["/tags/SwiftLint/index.html","4cca91a16d80fa477cb543b40be4bfcc"],["/tags/SwiftUI/index.html","a33b5d57f2b067b92fc93db873fa669a"],["/tags/UICollectionView/index.html","a249e2f319972b421550d46087e3b677"],["/tags/UIColor/index.html","ca8c7d97ab365fedbefd8a27067c1d0a"],["/tags/UIImagePickerController/index.html","a26a13c1742a393065d1e562ab1924c5"],["/tags/UIKit/index.html","0d23cb127ecc05bf3d4a9d4be8c08eae"],["/tags/UIKit/page/2/index.html","88545a5fae82903a8caec4215d079a2e"],["/tags/UIKit/page/3/index.html","611e174856f26e59fa482e2ceff8246b"],["/tags/UIKit/page/4/index.html","ed92cadbc929b3434bedb702f8c90261"],["/tags/UIKit/page/5/index.html","8e6a4481a66c167c7bd8f4bbb818024b"],["/tags/UITableView/index.html","7a9f294bbf95a799e6d2c7d7ebf9f89d"],["/tags/Ubuntu/index.html","ae4c23a61a48581cee264dca7cfcc076"],["/tags/Uniquely-identifying-views/index.html","c8eec1dcedb1503ec02eaedc2bea17a5"],["/tags/VIPER/index.html","e3ae30d73dd6e4292550a4ed73b7cb9d"],["/tags/VMware/index.html","ab4b91ef24f694f6f75ca086c4087ef5"],["/tags/Vapor-4-0/index.html","75fd05a44e73aab4819fcdb94740cc4c"],["/tags/Vapor-初探/index.html","a3a6a1392f4479ebafc7231207e2198d"],["/tags/Vim/index.html","185321caf9a6c447c32cc5d8539c80c9"],["/tags/WKWebView/index.html","e5e0d90c11bfdd70f3834c8c8c657dd4"],["/tags/Xcode/index.html","e77cdb6c96e56ecca9c4848daab76722"],["/tags/appleOS-Networking/index.html","9507973cfa70e022fdd65793ee78938e"],["/tags/bugly/index.html","edd15dbcf4ef3aca6a502ce76faea69a"],["/tags/enum/index.html","40be6a7d49f9a0029d9dd758e3be4275"],["/tags/git/index.html","f4f8d5327530242a89fa34a63d70f826"],["/tags/hexo/index.html","db3048de1d7ac351246db12a1dd49be6"],["/tags/iCloud/index.html","c02b997db928f2f6d296ce47611845fe"],["/tags/iOS/index.html","bfb1ef60569d9ceb905a7ea073d0a23f"],["/tags/iOS/page/10/index.html","8eabc6747ca80fa5bafd173baa227fec"],["/tags/iOS/page/11/index.html","829b254fa41c95e639bb68d781494e15"],["/tags/iOS/page/12/index.html","7410d92d291cfc628b56be305ef46db1"],["/tags/iOS/page/13/index.html","7cba3421d0f316b8168a2357a7a93f36"],["/tags/iOS/page/14/index.html","9db2ab307e33bef3d6e99374886bd83f"],["/tags/iOS/page/2/index.html","a7a3ce732798f0a2529323f4cad6a7ff"],["/tags/iOS/page/3/index.html","47e7a386ac5e165cbadc7288e5a3feeb"],["/tags/iOS/page/4/index.html","99f4007670f4741508d4511b8330aa14"],["/tags/iOS/page/5/index.html","b3ae3236b9fce797171ac0587344092a"],["/tags/iOS/page/6/index.html","5d7e2c2de1c9733832a5eec4ba7f5aef"],["/tags/iOS/page/7/index.html","b8814855296c546693dee1d314dfbb0e"],["/tags/iOS/page/8/index.html","22c7f9895598f42acbfa2c997b684cc3"],["/tags/iOS/page/9/index.html","ed2433ae515e1f6f025fcce58d8a2a21"],["/tags/iOS面试题/index.html","a6fb0b8bdbc61ed559c014b700e3079a"],["/tags/index.html","1a5fb6d94396009c46a1e5b1f5dfd5a6"],["/tags/interface/index.html","7a9d97273c01f1a4e7165f925963c706"],["/tags/non-optional/index.html","590de0f97ad520c473aeb964725300ec"],["/tags/package/index.html","78fc2e6f976f0ec9c01ba8c8a30e7f30"],["/tags/random/index.html","ab500402836831420929c36e25f8a151"],["/tags/transition/index.html","58f6f8427213114b6d5cb81313468f82"],["/tags/三方类库/index.html","4513ac27924f75932085f786ed46a42f"],["/tags/依赖注入设计模式/index.html","181715b410930e4521d7c2cd41b25615"],["/tags/值类型和值语义/index.html","0fe966e53794213ecece25559a02c56a"],["/tags/内存管理/index.html","c34129b13c9e07e9fa9e6edad5b2fb9e"],["/tags/冒烟测试与回归测试/index.html","d25dc94f679186c41397fd73c545bdef"],["/tags/函数式编程/index.html","e2ba57d53af7672d98e24b0ccf45545a"],["/tags/创建博客数据库/index.html","28ea11f644d21cd80b2cc6ceea7226b7"],["/tags/初始化模式/index.html","e389974418b8a9cd4ab3304a844e7aaa"],["/tags/单例模式/index.html","96641b4b26b064c0286ba2656eeea181"],["/tags/原型设计模式/index.html","ffe053cf40822f307c79a4cf06da4406"],["/tags/命令设计模式/index.html","52d7fe8f5dc39677144807915a4138a9"],["/tags/基本控制流/index.html","a8b3f491567b56d1bb8ba3352f1c7111"],["/tags/基础语法/index.html","001af7dff6fe07c1aae4abfa13c43ecd"],["/tags/外观设计模式/index.html","a7af2201f4fffa87853c614193da01f5"],["/tags/委托设计模式/index.html","29797a807f2826398fa9e2cf5eeb5bf8"],["/tags/子类化样式/index.html","6bfc6e05a85f89a8c05581bc67c974d3"],["/tags/对象池设计模式/index.html","cf28a398875b19972298fcde9581ae70"],["/tags/工厂方法设计模式/index.html","8b2e722dcad39e0bf21e9a1af16b7b09"],["/tags/工厂模式/index.html","a402925d4316f8dbc4fc3589111f9dc9"],["/tags/工厂设计模式/index.html","4265eac556a6ae412923138e6dd3aa44"],["/tags/开发技巧/index.html","9f7654189b0ac5a2b7534964584487ad"],["/tags/开发记录/index.html","c50c25cdb52a856e99314f7c75fbc484"],["/tags/懒加载模式/index.html","6d4ff874c6c861360cfdfd66ffc5729c"],["/tags/抽象工厂设计模式/index.html","cbf06094b40aaedb8de49d516e31ecde"],["/tags/数据库/index.html","ad0fbcc6ab1e496523aa1a5af6b9c0ab"],["/tags/构造函数/index.html","848b1c229b3732deb1a67314d136536f"],["/tags/架构设计/index.html","fb32193f342803c6c6968b8936b85299"],["/tags/模块化/index.html","540e4e0c993cb56e9a7e4bbb8eb41fe9"],["/tags/模式匹配/index.html","7b20cb127b922613601d126b943a648b"],["/tags/环境搭建与验证/index.html","69e2b68357ff1bb13404b28cab8a0e63"],["/tags/生成器模式/index.html","44cb15ca3e67f6be9f915d2221ee8fde"],["/tags/用户体验/index.html","9f86544cc02745466ef4e49951e9ff28"],["/tags/用户协议与隐私政策/index.html","850220e00f2b31959476035745ec76ae"],["/tags/类型与操作/index.html","0bee871fe41effb48b7666accd243ae6"],["/tags/组件化/index.html","d1635d995280965150cee3499e5a2bac"],["/tags/自动化布局/index.html","47b765eb8c8270aee51eb5f30585ad6f"],["/tags/自定义UIView/index.html","78072c27f4f797fa689b2a3357222f30"],["/tags/自定义转场/index.html","751fee0567fd60a7df795755632614f6"],["/tags/自适应布局/index.html","2195076ba217bb03b56748a05e7a18ee"],["/tags/表达式、变量和常量/index.html","9f5cb21fdf40864243b27826f9e0d641"],["/tags/设计模式/index.html","654b7d652d91ce572b840f96af2eb3e9"],["/tags/设计模式/page/2/index.html","51f3a986ff5d3d1431cc6d7996528468"],["/tags/设计模式/page/3/index.html","bbb66e05435f96030583fd122b3a8554"],["/tags/访问控制和代码组织/index.html","56fa392278f26fd2bc373107bab989de"],["/tags/运算符，下标和键路径/index.html","42363e9280d12309130540f814be8b64"],["/tags/迭代器设计模式/index.html","ddc8acc1b14efe8179ebaed87eefd669"],["/tags/适配器设计模式/index.html","904dee7d635a8173ff61758e001cf7cf"],["/tags/逆向/index.html","ebd2ec1d0d89acc00fccd64f02fe9ea7"],["/tags/错误处理/index.html","d564e978a56ada52937536e4b3af775f"],["/tags/静态工厂方法/index.html","2c13d3029910c090ffd4abaf18758780"],["/tags/面向协议编程-OOP/index.html","32cf8e2e051a3ed827f390b46442d838"],["/tags/高级主题/index.html","c8949b504e0435ba8c2d0ed685c6b590"],["/tags/高级协议和泛型/index.html","98786c310c8a6d880b902bf8af0403d4"],["/tags/高级控制流/index.html","a38c88576eaf5dab1996aae5378c3f10"],["/xcode 常用的快捷键/index.html","91642f95a867b1c66de1b51d93bdb408"],["/为iOS应用构建输入表单/index.html","338118edfcb79ac83ccfedb326d5cc32"],["/产品开发的幕后花絮/index.html","3cc9dd8b31e88806c7b46be9535ade48"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0e204989e6a9b346e57644b3afd313b0"],["/冒烟测试与回归测试/index.html","ac3529730a4bb0f449ba6a465e7be4a0"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","0c10d08a463bd154065ef69622ad3f6f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7751ea76447b995708bedbfd4e7d9daa"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6b5608151082372f85961ec1750a4513"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","3e6f69205bd17f5305ae76cff3aee344"],["/在Swift中创建自定义集合/index.html","8f8cdfe64a4c9554845698a519b90f3e"],["/在Swift中处理非可选选项/index.html","3a1323829f6db6ed35c2a1e14919498e"],["/在Swift中生成随机数/index.html","8ef15e294aa08d41752407116c333f46"],["/在Swift中重构单例模式用法/index.html","1d749709fe4e91efd28d03276449991f"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","c1b4b96a508f2ea36cd5979a5791e644"],["/如何为VIPER编写服务？/index.html","6fc6c7084bda9a46de7813d4a398069c"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","def850943dc6c502220950794987dfa6"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","fd180a02f02abfcfaf036356430e7168"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a6a8cd5a1fde152369153d47be7f33de"],["/如何使用VIPER构建SwiftUI Apps？/index.html","52ac9c464bf16f8503802b05084082e4"],["/掌握VIPER架构/index.html","5b1ad17a6dac83768fa9a64ef6a78b7a"],["/揭秘 WordPress Hook 系统/index.html","8997f50d18f36824c6c28f6287b03aaa"],["/比较工厂设计模式/index.html","fc39938f9ea9af88715f529487bc915b"],["/深入了解Swift中的Grand Central Dispatch/index.html","e33413f13d2f6111ef109587a00c6e8f"],["/深入研究Swift框架/index.html","cea23f7dbe08e12fde0483a0429e2478"],["/组件化插件化与模块化/index.html","ec6bf615a71399ee0cfc53c9708a7373"],["/组件设计与SDK开发基本规范/index.html","02e9fd8d1c67d05ca38947201c7f45d6"],["/适用于iOS开发人员的VIPER最佳实践/index.html","4c84217f70309920cd5f088b6b6ae2c9"],["/选择Swift而不是Objective-C的5个理由/index.html","cdd028da86e8561125dfca0d5151f2f4"]];
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
