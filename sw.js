/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","0bae367957d9e1f3553c2988972f682b"],["/2020年iOS面试题总结(三)/index.html","130c3dd2841666c92ed87e18877c682f"],["/2020年iOS面试题总结(二)/index.html","b350f74114dcad6df30df062956591ec"],["/Advanced Swift系列(一): Swift 简介/index.html","8b33ef3818908a31b5cf76f8c0cc6ed6"],["/Advanced Swift系列(七): Strings/index.html","0d19110b5b846edb2ea05472c7fc4f97"],["/Advanced Swift系列(三):  Optionals/index.html","49b214808c14d38d50415011d35ac3e9"],["/Advanced Swift系列(九): Protocols/index.html","9c5f0a2909c7444e4352c13bf6dfdded"],["/Advanced Swift系列(二): Build-in Collections/index.html","a0cade90d13aeb1093820d6b58a1d912"],["/Advanced Swift系列(五): Structs and Classes/index.html","8d61df0f13bbb43316377af5a9155898"],["/Advanced Swift系列(八): Generics/index.html","62a83a1553b1c9dd626355710058b0d2"],["/Advanced Swift系列(六):  Enums/index.html","c94126ba2d4c648a55241fb632aeaa73"],["/Advanced Swift系列(十): Collection Protocols/index.html","9afe40aa228c1342d55fa8d5e40599a6"],["/Advanced Swift系列(十一): Error Handling/index.html","126c2e71a3712f61623fa3100d9666c9"],["/Advanced Swift系列(十三): Interoperability/index.html","3f8a1e48015566c407f6ce2fd562a01b"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","58d4d77932a08eb716d9afac0938f326"],["/Advanced Swift系列(四):  Functions/index.html","5f947c35d0dbeb29bcd6a1bac8fa37e5"],["/App Architecture系列(一):  简介/index.html","eaca0c4b0916919cf28d30e9ac17104a"],["/Functional Swift 初探/index.html","06214dc7c7e350e7a1151b4b996c11a1"],["/NSCODER和SWIFT初始化/index.html","6acda876dec267ca96a84fd2d69c7190"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","0f375046077fe8eda39e878b067e8fbd"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","4d3c10d5a73ce40c324ecb4eb6b9e290"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d75155afebfd6a9c5d53247cef5c4c23"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b5ba058e9acc979ae4e050bc63b9d5ac"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c5ab1b5203b874b9e142a2b81072e4d5"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","87021f70fd1e7fb389fb9924ca13476f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","83d3a33e0fee4576806c97af9af3dca2"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","57c712495028104d7ba4da8dfac7713d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c44c0b35e2725e80451655245eb10cc1"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","f2fd02fb0b18443543af215e0732e9c2"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","ce99f10711a6b61be3aefa63c2a819e7"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cfcd0b13204fa123cf3a537c9a0af609"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","111c3b367adab122a864683cb3154928"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","2429c9ab068452c69d00f57ee2ecd2fa"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","51c444cee88c6ee5176f2f028214c557"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","ad4dfb6aa904e613534274e0c24399cf"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","27aa3d034432a60f6d6735574c59ea69"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","d1e2aa4c806b0e959d8b8464c29d93e1"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","67890ea96a07c207748d8cce648182d9"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","26c609dc87751c67fae59a9108221242"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","caedcbd5e968c25e014bf0ac0e7cbd43"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","f926b96a18b5f06330bbd07e45db8e0c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","74d1a939b470e8bc9cf0fc060a57d096"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","ab9323c75141d256d2381f2fdc467277"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","a8e2a2997852c49180d399d52dcf1a75"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","be7e3fa5e6ba1c4c4292318be115ff51"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","b71de5f56467cb1a4ce70b398953bdf4"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","50f7d3d8fa3fbf2e0d96bf43daea6880"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","44114ddead2e6ddcbf50ce9cdbdcdb11"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","0d50dfb97231d79777874ac2fe8f5e47"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","28f77fd7ce87b6c6a34498ddda9c48af"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","14f8855e0955102a559b1ff26659f961"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","dfa696a2e087d8ace9932077455bf13d"],["/Swift CompactMap vs flatMap：差异说明/index.html","8ddf9862eb90d9434a07e3d951313b89"],["/Swift Grand Central Dispatch 深入实践/index.html","de1d7f21d6e8a911faea648fad084963"],["/Swift Lazy属性初始化/index.html","78bdafcc8845be0a8d42806f6433adca"],["/Swift Promises 初体验/index.html","39d2133854c21d0bbb58084c53a5e91d"],["/Swift Promises 探究/index.html","0ef58675df918b015c4c85f5b03a08ba"],["/Swift UICollectionView使用指南/index.html","41021a73c93907033c5c7d344c71c7c3"],["/Swift URLSession && Combine framework/index.html","53067f370dcb5671b56878014a0a27fa"],["/Swift 唯一识别的视图/index.html","99b67c11ead02b5f474cde99bb19df33"],["/Swift 如何学习现代UIKit？/index.html","7db187d489779f35ff3f878ebca8df2a"],["/Swift 用 compactMap 替换 flatMap/index.html","d6a4d15daffc18de33193621388af918"],["/Swift 选择和播放视频/index.html","d2ce33355079ba0df1a5495fafb34254"],["/Swift中UIColor最佳实践/index.html","ba7fcc28869aa1a2dd52a050418705d3"],["/Swift中快速简单的工厂设计模式/index.html","dcac80e3fc7fcb9b4cb3493c5d108ede"],["/Swift中构造函数与静态工厂方法的比较/index.html","24b7e188fedaff20360172ec8bb4da54"],["/Swift中的UITableView教程/index.html","4ab8b1fc29c7d70e495227e5dc74c7de"],["/Swift中的懒加载模式/index.html","11e10e40be707ee6a4474552a4db4162"],["/Swift中的模块和挂钩/index.html","f4c9a2ac6f317c033b14bca3546f20a5"],["/Swift使用布局锚点添加约束/index.html","cc3e6fa9190dcbd6fd80bddaaa994d49"],["/Swift依赖注入设计模式/index.html","3f856f357c90dae09871b4a8ced7e801"],["/Swift关于Dependency Injection (DI)/index.html","e5dfb8fcd389ca60f6960b327b019743"],["/Swift初始化模式/index.html","d938fcb434673a1e810221f55bc2a31b"],["/Swift单例模式/index.html","0d0ea0d1e4b579482b44fee7dbf5bf01"],["/Swift原型设计模式/index.html","7d508d9f44d1471d2fe160c1921ab485"],["/Swift命令设计模式/index.html","a2a2da993ff8a8f25726eace1bf7d6a0"],["/Swift外观设计模式/index.html","ded1c4a647ca85c79dcf727d5b3fd587"],["/Swift委托设计模式/index.html","1a8cc0af063dd49245e0fe600ad89799"],["/Swift对象池设计模式/index.html","d79faf9213f13ab4aa4e738cd1c5d971"],["/Swift工厂方法设计模式/index.html","c715da6cb065cfc7479e8a9bb0e10106"],["/Swift带闭包的懒惰初始化/index.html","34793d2d339400205c280b7b74fbb3c2"],["/Swift抽象工厂设计模式/index.html","ecbd55798da6314038d395d126597c7c"],["/Swift掌握iOS自动布局锚点/index.html","bdcd84088ef547a103f9e72db04fc2fe"],["/Swift支持旋转的自适应单元格/index.html","452b24b6abf873f365c71b74af7f30cd"],["/Swift枚举值/index.html","c7fa97f400a68523762fe4ddfc89893a"],["/Swift生成器模式/index.html","1a7b7bf3d4f7533e9285037fd1eaa475"],["/Swift结合Xib文件自定义UIView/index.html","9ded6832c15f29a1b514d77089379964"],["/Swift编写的20个iOS库(一)/index.html","8b24228293d3274766eab5e037b75fa1"],["/Swift迭代器设计模式/index.html","9c09d2955099bcf510928428b44fdb14"],["/Swift适配器设计模式/index.html","f1d086437f01faa926f0fafa46a8544b"],["/Swift静态工厂设计模式/index.html","4e1ef4cbcf5cd8d1547baf3f6542b32d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","22e79df532f1796d41c166e2e320f4aa"],["/UICollectionView data source and delegates/index.html","2e10909f5363ffbb4ca4ea433b9a7bcd"],["/UIKit初始化模式/index.html","f544213db4d9fcba5383e887c54aa7c5"],["/Ubuntu18.04替换国内源/index.html","e57fb6ce6623ae9aa3cabd8d0fc8e0ea"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","909373e5d47dc27a381d498401c31fe6"],["/Vapor系列 (一) :  Vapor 初探/index.html","1a29453619374fb873202cb963c1fa3d"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","8bbc08c3db8f80befa3abe2c36fb34e3"],["/Vapor系列 (二) :  Hello Vapor！/index.html","70d2be08bf82d7edf4b9b2dfee4b8e28"],["/Vapor系列 (五) :  使用session进行authentication/index.html","05b856240c549d2ea18dc84051c1d450"],["/Vapor系列 (四) :  创建博客数据库/index.html","7e3fe130ae7f107a549122320d38ea59"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7cd90b8f6434a975cd2cb1f82d7850f2"],["/Xcode扩展/index.html","b21a192897b83348a4bf2a48a3dcf0ee"],["/about/index.html","43738b339ce20f610cecb367b45cfe6c"],["/appleOS的Networking示例/index.html","7a72e5c21219f1075f33f86ad9b10c69"],["/archives/2020/03/index.html","ff2baee65320984ac6f109378c610e26"],["/archives/2020/04/index.html","003984a2fa0611ac9dd97bb977c210a7"],["/archives/2020/04/page/2/index.html","dc51985da4154c582941cced86492bf4"],["/archives/2020/04/page/3/index.html","67f4e53afa7c882c770a4b0b1646d107"],["/archives/2020/04/page/4/index.html","0598434d707b7b539552a1614d47ed19"],["/archives/2020/04/page/5/index.html","fdacf1bb74668eba1b1b003650b8b302"],["/archives/2020/04/page/6/index.html","32208f2245569ec8644c011c2ffcd1f2"],["/archives/2020/04/page/7/index.html","641e86bb9e3ab7632d13b3473134ad03"],["/archives/2020/04/page/8/index.html","cebd0adb4295d514888adc1bf662fa82"],["/archives/2020/05/index.html","0e57c5b01f0f1d598cae5c2db962b141"],["/archives/2020/05/page/2/index.html","842241129eb47bceec44136d8117fe27"],["/archives/2020/05/page/3/index.html","f3f8e355bf26031048dc35e27752ce4f"],["/archives/2020/05/page/4/index.html","c989027e4bf289c6395a79bac6c43eb4"],["/archives/2020/05/page/5/index.html","552267b5d1f7d2a654a4440d57776ce3"],["/archives/2020/06/index.html","202b7c8c0bf75bad621443ecc871b82b"],["/archives/2020/06/page/2/index.html","f167f4d3e45c5a9b1134fb38f3e82a73"],["/archives/2020/08/index.html","05dd783b7c8d085a1f90af04fbe70c7a"],["/archives/2020/09/index.html","2d26ef3f6dc4abe47b9330d39d3f34bd"],["/archives/2020/index.html","0347ee17b7e18cc8e955460035f2611d"],["/archives/2020/page/10/index.html","5e07b7503bcc43d010cdf1d97bd80ecc"],["/archives/2020/page/11/index.html","ac34f9d53db300a90b40fea4206a0cae"],["/archives/2020/page/12/index.html","d9e17477b465e2ff930b3d86192401f5"],["/archives/2020/page/13/index.html","ec952025decd1059bdedd557a955ebe6"],["/archives/2020/page/14/index.html","6c74d122d91f01782749fa761d0a7ffe"],["/archives/2020/page/2/index.html","36a7ba0b4dc585f2cdf57e4207fdec32"],["/archives/2020/page/3/index.html","abfb957dd0c05a9af1b8488429e98527"],["/archives/2020/page/4/index.html","2019b55439589837318b72560eda01c7"],["/archives/2020/page/5/index.html","21a64edb83d2147f251c9b9ba85787ed"],["/archives/2020/page/6/index.html","56fec6baaa3da62c143a04b4a3f6b671"],["/archives/2020/page/7/index.html","132c3aee86a2e41673379f8694bc798b"],["/archives/2020/page/8/index.html","7bbaa576505d9ef0962f83757e1dece6"],["/archives/2020/page/9/index.html","0f52e2b63f52063b72f439674c213761"],["/archives/index.html","fea24fea140d1accf230bddd659a6643"],["/archives/page/10/index.html","d2d1f09cb8c4d6190863bf9689c800f7"],["/archives/page/11/index.html","7d54de348c8fd5eb9a9da09d2d37293f"],["/archives/page/12/index.html","979b173065e1264bcebe0889967ea6b5"],["/archives/page/13/index.html","7a839228782bd5f5ae6cba2ad4543d3f"],["/archives/page/14/index.html","9bb0045840ec52a7401e752c4f78a2d5"],["/archives/page/2/index.html","b389fe9af6d726ba554382f252757d70"],["/archives/page/3/index.html","b4f84a75a2801cc6f79007ece0a33709"],["/archives/page/4/index.html","f4cd4514053da2ca87c569af31f4f865"],["/archives/page/5/index.html","0d77fa885675ee8c410c962a5b8258f9"],["/archives/page/6/index.html","c593c8e01eed35a19795c8c6a53cf7af"],["/archives/page/7/index.html","2845d09bfb5d6e46dcb33d8131a091b9"],["/archives/page/8/index.html","d9ab4c2db49d1a2f19bdc4241fcee154"],["/archives/page/9/index.html","d44a78ccf96a351392136dded97bc950"],["/categories/Advanced-Swift/index.html","46f32ca35fc463714b51e1ae5b1f24b9"],["/categories/Advanced-Swift/page/2/index.html","ded4f7e807940b8bebd98d1043642779"],["/categories/App-Architecture/index.html","417182dac23df951293ad867ad52a0e1"],["/categories/Codable-protocol/index.html","df418f8610d8e00b67591245efd3899f"],["/categories/Combine-framework/index.html","dd2a04c8462da2a14ec6b200a26e28e3"],["/categories/Combine/index.html","b65cc813894816959ba29c5bea8ecd04"],["/categories/Grand-Central-Dispatch/index.html","56bbfa06b68ab21f081fb7da07cef51e"],["/categories/Hexo/index.html","7a10d72e31ae1f28078eee9631d11796"],["/categories/Promises/index.html","13d5d09cdc46fc0c8aac3befe39218c9"],["/categories/Result-Type/index.html","10134c05db36c8eef6e596f6ca010b68"],["/categories/RxSwift/index.html","fe9dfed875316e7877bc94b36d3cdf2a"],["/categories/Server/index.html","66568af2129cc51e1e22fe3e37581f5a"],["/categories/Swift-Apprentice/index.html","f5d1ff4265015b17983767069927c891"],["/categories/Swift-Apprentice/page/2/index.html","233c42df794f5fa19ea66acb4b913c1e"],["/categories/Swift-Apprentice/page/3/index.html","a2ec4cad1bb4b5c1fa8635791eccd460"],["/categories/Swift/index.html","3eb2c56bb663b851de00d9e942e59144"],["/categories/Swift/page/10/index.html","8a9afd70b6fa1e051e200ea2e1ba46fb"],["/categories/Swift/page/11/index.html","63b351de8ec8c92356766642b0763250"],["/categories/Swift/page/12/index.html","3dfb65ee75b644172af7e6cce5ac8922"],["/categories/Swift/page/13/index.html","514020b6dbe4c6d0138d11284f36395d"],["/categories/Swift/page/2/index.html","7e17b0a08619a1dd23592b71b713d7ad"],["/categories/Swift/page/3/index.html","10dd92b8b9160abbd5a9bea0a50cdbb2"],["/categories/Swift/page/4/index.html","f2814dbcd7ebe1fd399b811001778a55"],["/categories/Swift/page/5/index.html","7c50ed3ff3a9560cd9ea04f67c2f4f50"],["/categories/Swift/page/6/index.html","b8ef4db591a99785dcb1dde39c7df7b1"],["/categories/Swift/page/7/index.html","b7b8209e8c76a35b8ea31a5eca22628f"],["/categories/Swift/page/8/index.html","762a4a6a2463148951b2d55b40163c29"],["/categories/Swift/page/9/index.html","4738f53d37ce496214c53de514a440cb"],["/categories/Swift5-2/index.html","7c22dd7d43369037632aa28ad8717212"],["/categories/SwiftUI/index.html","4a75d11da8a1e772f7db2ba488d2944b"],["/categories/UICollectionView/index.html","f97e6fdc69208b67d5e764de2270ebe9"],["/categories/UIImagePickerController/index.html","1b3cccb0501944ee543fd76e77b7fcd1"],["/categories/UIKit/index.html","304d8f4fac9f3b1c88cf88d6c58db72c"],["/categories/UIKit/page/2/index.html","8010a4cffd88579bf734b09fd16c7d04"],["/categories/UIKit/page/3/index.html","dcffe2f80392f351185fd80426cf75a5"],["/categories/UIKit/page/4/index.html","117b2a23b9f40db58ffce46308ab01c4"],["/categories/UIKit/page/5/index.html","9535af800303acfafea89861ed68dca8"],["/categories/UITableView/index.html","e520d5004770b104c0b76b7cbb9d7e73"],["/categories/Ubuntu18-04/index.html","ff49a3592d925b0dda96a10ee66503cf"],["/categories/Ubuntu软件源/index.html","29ec1269d6399f6d60a27d2012ccc5d7"],["/categories/Uniquely-identifying-views/index.html","47495d3538c97d0c136fa72c934c31d7"],["/categories/VIPER/index.html","0b22c0812d265b3197ecbb2f859c8205"],["/categories/Vapor-4-0/index.html","ea4fcbb93e69409f698205e661f8a137"],["/categories/Vapor4-0/index.html","958f32139dfc1f3b5ca93983c6d1bf78"],["/categories/Xcode/index.html","ff6ac7e0b110e2dab8525ed911391aad"],["/categories/appleOS-Networking/index.html","ee6e3672e8068e70da215e05c9d7bf83"],["/categories/enum/index.html","df930270d59ee7abe4b54cdaabd99ea8"],["/categories/iCloud/index.html","af00dfbc22f35db928258ede9c87041b"],["/categories/iOS/index.html","fbe053fda945318bbb115edef3d88117"],["/categories/iOS/page/10/index.html","88226e931368eab332398763906fab05"],["/categories/iOS/page/11/index.html","f607e105186acbc6e4f2000b8d8b3a6d"],["/categories/iOS/page/12/index.html","151298de384b52c0eaad1ad25c939d86"],["/categories/iOS/page/13/index.html","cd5586c5089dcf9591110e7a09e75f85"],["/categories/iOS/page/2/index.html","d012f18e2d57a87be4a965606e3961b5"],["/categories/iOS/page/3/index.html","fa3c3b55be1d861ac5d5dc35fd43152c"],["/categories/iOS/page/4/index.html","f3a6fe487ee7e79dce4f4aa7a72cd610"],["/categories/iOS/page/5/index.html","3954fb97e2d5f260e07d83cf02de54cd"],["/categories/iOS/page/6/index.html","3b3dd4643e4bdef9c39136def7c95d1f"],["/categories/iOS/page/7/index.html","e31496a432e7ca94426e4b862b6444ee"],["/categories/iOS/page/8/index.html","ab594041ef1651cd6e789c899ef4f885"],["/categories/iOS/page/9/index.html","50dfa8bd4084d45613d7d50b680aa66b"],["/categories/iOS面试题/index.html","1b934295e77ad940e4a6b1383f8004ee"],["/categories/index.html","0cbd18062ac475476a415612c3d7d360"],["/categories/random/index.html","323c6e1ff5e4de82a56dc7b71c57ec94"],["/categories/三方类库/index.html","768777c5a64911f0ec5255027792536f"],["/categories/函数式编程/index.html","f00846cbce7ea16c9610b9859e93227a"],["/categories/子类化样式/index.html","d692d3f394f11e9584071781f9a1afc6"],["/categories/开发记录/index.html","6a2b4dbc559a3d5056846fb9b83c23ec"],["/categories/架构设计/index.html","1ff86f96212a986af9e756ee16ed75ac"],["/categories/测试/index.html","5decf734507b541b0d0037c2514aca57"],["/categories/用户体验/index.html","1887f1c16aad58ee6548230f1a413153"],["/categories/用户协议与隐私政策/index.html","fe157c78be8ab5a99b8b29d178fa4a46"],["/categories/设计模式/index.html","6467cd930c94f9cceb2c573fb2e0c71c"],["/categories/设计模式/page/2/index.html","f03fb8d5c2bb9b171627db7633af6af5"],["/categories/设计模式/page/3/index.html","813ced4e9e7f5c00265edc223edaec1e"],["/css/main.css","6e0f781e6dabe5ad89fd3c618873b767"],["/hello-world/index.html","ea2598384e9459d855ea54044a8ec56a"],["/iOS VIPER架构深入实践/index.html","b933c45938a4a89050068d115f9229b4"],["/iOS 自定义视图，输入表单和错误提示/index.html","338aa8c044aff334a0eab16465469395"],["/iOS如何使用iCloud文档？/index.html","42c43d60370b54e6bb8edba1ced6d682"],["/iOS子类化样式/index.html","f054b51dd638a6c8e83db3a29f39bf26"],["/iOS开发记录<一>/index.html","dc85cfb02b7cf847472f7f8575760a18"],["/iOS自动化布局编程/index.html","a5d268d3278b50ec6b93a924a4550c8f"],["/iOS自定义转场(By Swift)/index.html","ab7f5170df640e1f4b316c9ee6e3cd3d"],["/iOS项目架构：使用VIPER/index.html","df4a930fdf59180dddcfbef9be5eb872"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a02fce717b84dd348aca8590220bbda3"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","f2e55b351b5bc5631c455a25e36d0b6c"],["/page/11/index.html","abe14791f9a507f10cab58f6ee55eeb8"],["/page/12/index.html","bb10cd5b67334bd6f3766ceb2d377dbf"],["/page/13/index.html","53056c8efae3e04e93c14954197ff689"],["/page/14/index.html","42b016090e46c612e0c167c1d4767f8a"],["/page/2/index.html","cec86f941bfb7b33e0682ca1b89038d0"],["/page/3/index.html","8b2d20fc3e2c00bda0976b080377d09b"],["/page/4/index.html","74405d3da0d206fb3f038d9cea9d0309"],["/page/5/index.html","bc8df588b47ff1c94f248c6230e53b01"],["/page/6/index.html","89aef7000575ef41fc32a49f8490a390"],["/page/7/index.html","bb9e2270ccdbed959799b28740582ddb"],["/page/8/index.html","3b2db7f549aff6238e41620a19ba2e3b"],["/page/9/index.html","e11f77a8af1bce35c8333eadc802f82f"],["/schedule/index.html","506fbad2935860d51baf45a8c3eff4ae"],["/storyAppPrivacy/index.html","fc18b08a9a0f4bd636c10c64dfbb4560"],["/sw-register.js","a2a4d35d96ecb75c64d775be90177322"],["/tags/Advanced-Classes/index.html","75b4bbc8570bd35d8e389b97f1b2758c"],["/tags/Advanced-Swift/index.html","18e50f738ad91ef3b0b2402397117ba1"],["/tags/Advanced-Swift/page/2/index.html","fa0903dc9af14c59e6f658306f185874"],["/tags/App-Architecture/index.html","0076dd74a855a2934927c0d9dcb445c2"],["/tags/Arrays-Dictionaries-Sets/index.html","bc123c13c64eb16f33b793abb84199e7"],["/tags/Authentication/index.html","a420a01d2c1d49eb5899f8cef4083a16"],["/tags/Build-in-Collections/index.html","a66ba99efa62c451e8ae146c1533ea18"],["/tags/Building-Your-Own-Types/index.html","9298ba397b4aa8f943b5e60f054db3d8"],["/tags/CMS/index.html","fece3373d7f5e5beff9bcdd1e22e06ce"],["/tags/Classes/index.html","98ed3f79fe3a6da2310c8af20e917126"],["/tags/Codable-protocol/index.html","641106e2b68e3dad308ef5a7bfb1f079"],["/tags/Collection-Iteration-with-Closures/index.html","ffd5c722dc10d3a9357705e8f4cdf07f"],["/tags/Collection-Protocols/index.html","22de9f460bfd202b9b8781973fe58f06"],["/tags/Collection-Types/index.html","0fbfa821cb8e5c4b4c421a0654a72524"],["/tags/Collection/index.html","13937de9c9e117d2b193f6b421ae4d6c"],["/tags/Collections/index.html","7da8465857f8dd3374cbe9738b649e96"],["/tags/Combine-framework/index.html","3a5857abad8c3c20ad2cfae2521cfeac"],["/tags/Combine/index.html","90f297ee5649ab3141fccab8b9ee6b99"],["/tags/Dependency-Injection/index.html","d3aff4b30bcbc0d6b013e61a1ef59875"],["/tags/Encoding-Decoding-Types/index.html","a16d9f0f9124df1131308dd19e92c530"],["/tags/Encoding-and-Decoding/index.html","5162594f205853b2c40e2048d2f0666c"],["/tags/Enumerations/index.html","c5bfc2a04ddfb2faed6ecee21351469a"],["/tags/Enums/index.html","309cc0506561de76f4228669e7882270"],["/tags/Error-Handling/index.html","5d36adffe37327c35bb5c73fd0c5d339"],["/tags/Functions/index.html","878fd1f7ed56c3dd9d8812e969242f2d"],["/tags/Generics/index.html","17d9f38fecdff7cc96fe67648b768c6c"],["/tags/Grand-Central-Dispatch/index.html","deb18eea7fec6c7105f8a4ef93c22fd8"],["/tags/Hello-Vapor/index.html","313958ffaa23881ab08eb1c17819525a"],["/tags/Interoperability/index.html","258a68b15858071f27ba29c8deef7c55"],["/tags/Introduction/index.html","1d55b274f7f93a8cee1f115a1d81cbe4"],["/tags/Leaf/index.html","adc0556088de4398b9018c2706809162"],["/tags/Methods/index.html","3827d66fb7aa863682f1f2155f14b0e8"],["/tags/Modules-And-Hooks/index.html","2683270c878f5799df7004d78987a82d"],["/tags/Optionals/index.html","b2acb84cdd1dc880d9e84a0857db70ee"],["/tags/Promises/index.html","a55984e37ff46a5d4ac2d0586e49b166"],["/tags/Properties/index.html","3ebae8fa776706157169e906525a8428"],["/tags/Protocols/index.html","6b1ee4f11047aa51c034ada5b04df5c8"],["/tags/Result-Type/index.html","298c7eb10f29e40b45a11318251f9632"],["/tags/RxSwift/index.html","72b7294c155602c7998952221c935584"],["/tags/Server/index.html","f721166dc4d103a8981fbac785403b33"],["/tags/Session/index.html","a538f6a10b92d4621d5112cb6ba0a810"],["/tags/Strings/index.html","65bcf680d2ab1d39ec400f651665b70a"],["/tags/Structs-and-Classes/index.html","9e0a86ce94ea18bc94c9f6a2a68dd2d5"],["/tags/Structures/index.html","eb79834e5b0c16b754b332f91575f489"],["/tags/Swift-5-0/index.html","4de7565f47bcc00f71c634fa4ff54173"],["/tags/Swift-5-0/page/2/index.html","4931e266a0d3e4363cb92c30ef901757"],["/tags/Swift-5-0/page/3/index.html","56243c076d1f862ab98e277e0c70f283"],["/tags/Swift-5-0/page/4/index.html","8bdec0412f33531493403ed8169503b9"],["/tags/Swift-5-0/page/5/index.html","1d72df9135b9087d0b4ff109ff31cfd2"],["/tags/Swift-Apprentice/index.html","da2a2f0fadb2615bd7bcd389e4fc0c20"],["/tags/Swift-Apprentice/page/2/index.html","06014a373d15205888f8b72c874fd65f"],["/tags/Swift-Apprentice/page/3/index.html","ca2f583338493e8615a07eff210b90ee"],["/tags/Swift-Package-Manager/index.html","e543aef0d85f7049ad2e3c5953623142"],["/tags/Swift/index.html","8e24e65c17b432c2634bab19740e1ab3"],["/tags/Swift/page/10/index.html","b451b18efd079349531fea36dc222cf8"],["/tags/Swift/page/11/index.html","0f27f1bbd2049a05926985f2e54e0a39"],["/tags/Swift/page/12/index.html","b57125350ed9ee9bc0f6beddb877d7a7"],["/tags/Swift/page/13/index.html","b4042ac4d652ae02f86bf9d2852a7386"],["/tags/Swift/page/2/index.html","9b90ae2366a02c36a47c9c53cafc9fec"],["/tags/Swift/page/3/index.html","e84c7ebd40d7b0c7987b4769bc8070bf"],["/tags/Swift/page/4/index.html","72a0ae8a50fcbc2d540aae95c1541f35"],["/tags/Swift/page/5/index.html","1eb74de72410a35923f02f9932b24439"],["/tags/Swift/page/6/index.html","cad25446deec759ae533672158892868"],["/tags/Swift/page/7/index.html","f2cc709e167b230950faefd70db18080"],["/tags/Swift/page/8/index.html","5b9576b57853eb6f5af67dcf863f510f"],["/tags/Swift/page/9/index.html","a551c7ec799838cf31eeac09f229d791"],["/tags/SwiftUI/index.html","1f0dde9107c96aaf3811e79b5fd31936"],["/tags/UICollectionView/index.html","19444bdd20a2362f4708794ca4a69b24"],["/tags/UIColor/index.html","a9aab7c78092e6b68f1a8789b3c69b0a"],["/tags/UIImagePickerController/index.html","46ae2f9f6ac93d0c4e93de68de1d0508"],["/tags/UIKit/index.html","3e5845401c5e1a3342830e8a6e4b73eb"],["/tags/UIKit/page/2/index.html","f152a0cd675e07884289b08d8fc78c91"],["/tags/UIKit/page/3/index.html","2441e4a1d58c40e70d213c8bdf0eb0d2"],["/tags/UIKit/page/4/index.html","ce5d9161520de393b67d84b5f86539fa"],["/tags/UIKit/page/5/index.html","30e9ac893b7ff2b9474d1be67950e3d5"],["/tags/UITableView/index.html","2e748d5af2b8153c408a6d7697bc4d7f"],["/tags/Ubuntu/index.html","4848793d0f455e9fc8183723d1b0de68"],["/tags/Uniquely-identifying-views/index.html","803e1bfa5e44de076b837027d21443e1"],["/tags/VIPER/index.html","8019a2a9067f06fe6cff659bec7af067"],["/tags/VMware/index.html","acfb1fa9a755b31e42b483374c93268a"],["/tags/Vapor-4-0/index.html","8141cac57117b199599d2a58bd862bca"],["/tags/Vapor-初探/index.html","d3e1edc572eb3563dae6f84c23e4caac"],["/tags/Xcode/index.html","f2eb24c20961adfa494cc4a842701ea3"],["/tags/appleOS-Networking/index.html","6438cb85b484845ddc14098fd67f040d"],["/tags/enum/index.html","d62f401cc69c5a799ab62bfd67f299c2"],["/tags/iCloud/index.html","9f261b9aa373d0cde725a56a64e02ee7"],["/tags/iOS/index.html","f7c55bc182280618c4e2c375e7e23412"],["/tags/iOS/page/10/index.html","8b8c2c072add286b8e4c51967e39c638"],["/tags/iOS/page/11/index.html","516b6ccd87e7ce35fb3c00f607ba0109"],["/tags/iOS/page/12/index.html","5a78c0f4b5e45abb19e54ad79bb4a91b"],["/tags/iOS/page/13/index.html","6ef394da16f95b8f5c596dd20cab4dab"],["/tags/iOS/page/2/index.html","a14bdc57700dc0c2dcb690af0e0ec40d"],["/tags/iOS/page/3/index.html","b2f7da37ebcfb2b08d1dae52888b7f63"],["/tags/iOS/page/4/index.html","a3ee853c0d134fff4ad8115313afc9bd"],["/tags/iOS/page/5/index.html","1cdc2cea7a48e688db95ce92d066c220"],["/tags/iOS/page/6/index.html","da25bc04117cfb2a2253542cbda6bf15"],["/tags/iOS/page/7/index.html","e201bd64a7066fa1c2b662bf539d6ff2"],["/tags/iOS/page/8/index.html","838bc6f5f13cc73689e46182722a320e"],["/tags/iOS/page/9/index.html","835aadfd7cfa2b5dc184547de5c7e20a"],["/tags/iOS面试题/index.html","1ae5dcfff8ca1ed7a350c3f74b23b672"],["/tags/index.html","3d48d1bec0e787061999fd3962168396"],["/tags/non-optional/index.html","7772fc4b3b4769434775ba112611376a"],["/tags/random/index.html","e37da513aad1e097708de5370cf2836d"],["/tags/transition/index.html","86f5ccf03bdcc9a2ac389fa758ea7496"],["/tags/三方类库/index.html","ec35d9c1dfa5a097c5492022895d7e32"],["/tags/依赖注入设计模式/index.html","4d721b48644d77cdf5aa1cf2aa74faa5"],["/tags/值类型和值语义/index.html","e8881cb431fec02cf89213e2821d2c8c"],["/tags/内存管理/index.html","115a59304638bf143aabf95cc0aa8309"],["/tags/冒烟测试与回归测试/index.html","992e9fca537f024d5ba51d8e8e9e411c"],["/tags/函数式编程/index.html","70e9e252dc783b3314fecf1b559a387e"],["/tags/创建博客数据库/index.html","1b09d001a33947f428655e30857d2ba8"],["/tags/初始化模式/index.html","c65606179c6b0ad6166dafcf5da9b89a"],["/tags/单例模式/index.html","ff15ca7fc4b74ec435db52fa33dfb0a5"],["/tags/原型设计模式/index.html","f5b56ff9cb3cb370a884da8294ff3e61"],["/tags/命令设计模式/index.html","f7480d5883bddec240801b9026164204"],["/tags/基本控制流/index.html","ebac849c1969ceeb0846c4ec49a0442c"],["/tags/外观设计模式/index.html","b2d337178c2b4dc09b95a0b035a186fe"],["/tags/委托设计模式/index.html","a419905c6f56f62d90b035d731e0d7f9"],["/tags/子类化样式/index.html","80dcdada8ad65bbfb74d99c490566c3d"],["/tags/对象池设计模式/index.html","535bfe56d952bc7c719ada7be4d88a56"],["/tags/工厂方法设计模式/index.html","5339dcd0d1cde2bea4647da7631b3cca"],["/tags/工厂模式/index.html","736333301d9543013216a7ccd87e13a3"],["/tags/工厂设计模式/index.html","a5fb4b4aca3f16f61ccaba7338840988"],["/tags/开发记录/index.html","9c6efdb0b9dcb3a7bc5fd3be13f6383c"],["/tags/懒加载模式/index.html","9f4333c75bdf1526ba5443f7c7593e87"],["/tags/抽象工厂设计模式/index.html","89c50ea6dbe08ce46b57870455776546"],["/tags/构造函数/index.html","a5b990c899e04ee972e3078b38d47e3c"],["/tags/架构设计/index.html","44b6fecf6bfe8a07f9b48a7af549a2ae"],["/tags/模式匹配/index.html","d39128da3030a3455ae4bac3cce2ffce"],["/tags/生成器模式/index.html","09c4d157a801aabea6f70652c8586e83"],["/tags/用户体验/index.html","1e4d39074ccb9b7b48a878759d9997a2"],["/tags/用户协议与隐私政策/index.html","b7a386a8d792c70bbed7207b4fac0334"],["/tags/类型与操作/index.html","415595d1fd866fb4baecfb93ab18b786"],["/tags/自动化布局/index.html","287b18c5868c260664c0cba3aa10c873"],["/tags/自定义UIView/index.html","8a2880b5ad7468c4c9c58afd9d69c046"],["/tags/自定义转场/index.html","0339fce5afa17e2bb8ca7dd89338cba1"],["/tags/自适应布局/index.html","ce5a279f5e7b8bdf0816c09f198ccb6a"],["/tags/表达式、变量和常量/index.html","80bc7ae7a08a0cebd70653a5bbb8679a"],["/tags/设计模式/index.html","4b948fcdce76537abf82591e1e52992f"],["/tags/设计模式/page/2/index.html","52bfe6f819f617a03ef97be1fa43f36b"],["/tags/设计模式/page/3/index.html","194f276692d3631e4d525a1af1aba784"],["/tags/访问控制和代码组织/index.html","5a73fb6ea184f00eaf98cc83b1a67484"],["/tags/运算符，下标和键路径/index.html","605b30e496e16a6a65da7e2879a37b9e"],["/tags/迭代器设计模式/index.html","48014c702e0139fcf5e3a4d081e8f88d"],["/tags/适配器设计模式/index.html","b61af20d3c6ece456b406eb54e08deb4"],["/tags/错误处理/index.html","456944bf4d30d263a70a8ea9b7af3bd2"],["/tags/静态工厂方法/index.html","3f340b38e4d3993ee8260653048fd9fc"],["/tags/面向协议编程-OOP/index.html","e7fce029b97ad6d866724376b5ef0e1d"],["/tags/高级主题/index.html","4d67d92e4d22cd2fc5ee9f0ccf260fbe"],["/tags/高级协议和泛型/index.html","9a44f81007dad57b0dd2f5b9fe01ae64"],["/tags/高级控制流/index.html","19388358874afe72def2aa1f014ca036"],["/为iOS应用构建输入表单/index.html","3c74736fca0bfcd1268ce3b958a87099"],["/产品开发的幕后花絮/index.html","843eead4c68ea30aacffcd40f00638c7"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","648ba83e15dbb38caec561c47d5865df"],["/冒烟测试与回归测试/index.html","6a14cb411ec7d0d94e34a53da53e8277"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1ce35cba6d9dee0e486b01a1319feaac"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","34223623dfb7f7eccb9e3bfc4d68cfcb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","236e690e94246b6a8cec0bc4a571af0f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d2bc7c236d294bb0a79984c173cf0e7d"],["/在Swift中创建自定义集合/index.html","f25ce7805d19ba6a277329a71571a3ee"],["/在Swift中处理非可选选项/index.html","29614fe6a4f4b2304ea646d57c11225d"],["/在Swift中生成随机数/index.html","0e2633483b060e344feea717db587fd3"],["/在Swift中重构单例模式用法/index.html","3a3bfd034bfffe56c4b754f290f73f63"],["/天天兼职用户协议与隐私政策/index.html","224b58f334f7edf9928109025d530b65"],["/如何为VIPER编写服务？/index.html","23ae3884efa3213cd1f20dc75c6ea63a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","0a7b6c42148611c3b47ebf2175934c70"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","40484d805988e27038b323dcd9b86eb3"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","4f68d41f67642af9ee1bcc8bb2a9f39e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","801f30bdd8ae4b7c5237660bfdb2bca9"],["/掌握VIPER架构/index.html","cded8ff689f7fc14c77cfce333c690f2"],["/揭秘 WordPress Hook 系统/index.html","402f98ef66f7feacacb761ad652438ce"],["/比较工厂设计模式/index.html","bbeff1f3e3579a90e9474529b4defd3b"],["/深入了解Swift中的Grand Central Dispatch/index.html","42a177a614c53fd5acd75369f462570e"],["/深入研究Swift框架/index.html","3a9ca9a7cfe9f49b4395523938c46d3c"],["/美豫直聘用户协议与隐私政策/index.html","fdbf6df3f2bd50c777779670a6d7c68d"],["/适用于iOS开发人员的VIPER最佳实践/index.html","06c2777a1a36e2492d044ae1178d9b45"],["/选择Swift而不是Objective-C的5个理由/index.html","7e77353cd9c15f2a4253b37e39341b7a"]];
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
