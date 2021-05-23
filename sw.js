/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","7082208a220fec6a18acd21898cc54db"],["/2020年iOS面试题总结(三)/index.html","bf0b0c9bccfb45e6463c7e2cafac247b"],["/2020年iOS面试题总结(二)/index.html","c54ba8b5827ca033f1d526342ec89f26"],["/Advanced Swift系列(一): Swift 简介/index.html","8aaeea080ffea0a84f5caf83583cc6d3"],["/Advanced Swift系列(七): Strings/index.html","4623bbb992d9ab086c33c842e5f5c912"],["/Advanced Swift系列(三):  Optionals/index.html","7800f23abdba46a78c5e1a37617e2153"],["/Advanced Swift系列(九): Protocols/index.html","1c09324686e42222fc3011e5187c23a8"],["/Advanced Swift系列(二): Build-in Collections/index.html","6397f2badd913b5802690593bd2e7e87"],["/Advanced Swift系列(五): Structs and Classes/index.html","8474cd046b2a9cb5579a20fbdf94a7ff"],["/Advanced Swift系列(八): Generics/index.html","138dc6181f92e6a677044774fbf56bfa"],["/Advanced Swift系列(六):  Enums/index.html","90d4f7ba840e5f3244f269b838f75246"],["/Advanced Swift系列(十): Collection Protocols/index.html","04263c5bfbd980b1c2a9293c669a2275"],["/Advanced Swift系列(十一): Error Handling/index.html","9a16ee58ea1e1f287aeb98f6c431bcec"],["/Advanced Swift系列(十三): Interoperability/index.html","7d115e771cf6d31773b51cbc26b9f05d"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","3f3abae1a828ebb04a5e5f5555c8c707"],["/Advanced Swift系列(四):  Functions/index.html","ba725a56233be371affb0b6b92f3d8a0"],["/App Architecture系列(一):  简介/index.html","03a0cc1add6a193c8d649d9ae1ae2cd7"],["/Functional Swift 初探/index.html","a74deba674d6401e39e6df56e1a2b57d"],["/Git 使用小技巧/index.html","9b19ccce50f3a55194ec132d4c6e75de"],["/Go 基本语法初探(一)/index.html","e12d1d59c561312ed8007ca172fb5bcb"],["/Linux VIM 命令及操作小结/index.html","fb735d285aa2fe099ba5348e99396967"],["/NSCODER和SWIFT初始化/index.html","5b078dae5d2821dfe64fe483ed090bd6"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","cd1739cedb463a7b9d92880bd4bca837"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","4cbf9d016f32bdb9806d2cd95b1ec3f7"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","d85d691a69b7d230a7bbb135e121b76d"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","67915fc9a1bd3d6d25b1799455143aff"],["/Swift 5使用UIImagePickerController拾取图像/index.html","3dc57a2c351822b7aa4c6d2c128cd36f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","eb4040174ddb1d6e6ff97704d04420e1"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","417e1d230cf97839c0ec9040b8cbbd5e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a55db452b2f12fa0fab911fa81f5e26e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","806c19c96aa561b447821f14797673d5"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","72dce1a320bc4dc5038c346468180b70"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","40ef0020ed3fc01aedb5d5768e0299d6"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","15446b7ced3dfc20c1e54a7a2daf90a4"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","7ed93b5d7639fd9dcd4b138470f5be4a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","4d9b8c83ae32b074bb309c543abf8ece"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","756edf9736725e4a56eddd9f7cb0e9fb"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b2347a190080b107cde71cf61884c7bb"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","bdd277c8a936ca3f54cb5a8dbbac0ca7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","38e3c95b25b66a20ba878f3dada80632"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2a90fca912221a442ed23123922dff93"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","543ae7f8783ad9dfab15577d6695dbaa"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","3ef60567a58d0acb05b643e3c13c018d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","751e15ee377f45efbf3d26bbf1609338"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","763ab58650337f60122ddcac4e326a26"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","c1b6da8c99edff8398d8e14b43f52991"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","89664789c53d90f9b1c02b9c13527268"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e62f1c3c5f910945cd55f8a9ce07fa50"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","edf7d21741f8a089b815fd412226ad3d"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","699eb1508e3e79d4c9f65572768208f1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","867be0630a8d6f1e22b67d6c0729c974"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","e6f1dd7a3595efaa001a89c0b113c18c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","af2b8b4ecfa98dffb1b11c6833cc44e0"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","58add3b14d2f76cde61117d8f4129cfd"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","88db7fc0ac3b3b566c0b356de2e5d822"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0a48bfaf79c0cfb3d283bcdb2887dc5d"],["/Swift CompactMap vs flatMap：差异说明/index.html","50a5126afd38cefbb074532827922dd4"],["/Swift Grand Central Dispatch 深入实践/index.html","96b17e7a34441ef95385aa84d4af44f4"],["/Swift Lazy属性初始化/index.html","568fff0a48a012964a9c91795c58eb66"],["/Swift Promises 初体验/index.html","2fef005639ef204b02aa1d8bcd2707f1"],["/Swift Promises 探究/index.html","fff175c95018b7bc1dc7d8df6c80fecb"],["/Swift UICollectionView使用指南/index.html","3cdbabcbb9ae875f4abdbd2d22342125"],["/Swift URLSession && Combine framework/index.html","3967eac066aefe314be293831d71ed0e"],["/Swift tips/index.html","e4fbe14de2098ab68203625e076a1dd2"],["/Swift 唯一识别的视图/index.html","c2a36a1d8eea699a59a314493d41bcf8"],["/Swift 如何学习现代UIKit？/index.html","1a19e334b0ad67296e64019c00c3ada7"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","2721f89a9c7d1a1d8fbe45896f4789b3"],["/Swift 用 compactMap 替换 flatMap/index.html","0a0a152e8e93d6ac3837a9bb244983f1"],["/Swift 选择和播放视频/index.html","b22efd7fc3c2a55d3ccbd53bbb9aa180"],["/Swift中UIColor最佳实践/index.html","bf9bae41231b87b209098babaf33bdc5"],["/Swift中快速简单的工厂设计模式/index.html","b69ff4e39b45037e56a5a9ed16576349"],["/Swift中构造函数与静态工厂方法的比较/index.html","aaa878f94c645b4f87c40cf045aceb78"],["/Swift中的UITableView教程/index.html","7ccf691044524621a07409f65abf3099"],["/Swift中的懒加载模式/index.html","adcb39dd2ebc8e6a3185c68f3bb1bc0b"],["/Swift中的模块和挂钩/index.html","8fd63fd4e42230302a2d630ca8fb8328"],["/Swift使用布局锚点添加约束/index.html","e9c640699689b0a54a761015ea4a7072"],["/Swift依赖注入设计模式/index.html","4cf5a2a2e2ddfe900507a6e4d4dcb547"],["/Swift关于Dependency Injection (DI)/index.html","ea4ab87718824e65bf11354dc69047ca"],["/Swift初始化模式/index.html","9fb3ee3d017841c850239791dcb6040a"],["/Swift单例模式/index.html","839ef3a7107294fdef5bf67589806849"],["/Swift原型设计模式/index.html","c165cf638ac0205ae4c71b7b91d1c960"],["/Swift命令设计模式/index.html","6e9327751703f89998d79ad3747b46c0"],["/Swift外观设计模式/index.html","df1c1f94acd9b12c0f751398b1e61d5d"],["/Swift委托设计模式/index.html","2f646d0930ede908a7c274ad628907db"],["/Swift对象池设计模式/index.html","6a38a2c8ddd6e4e958f03f1e3db02cf7"],["/Swift工厂方法设计模式/index.html","ac159f0e2aa5ab70c494d14bb19e5f99"],["/Swift带闭包的懒惰初始化/index.html","9c88e9690764ca1446f3906a1f70f2f2"],["/Swift抽象工厂设计模式/index.html","b9fdc7fb90ece3a988d6e1563e88da7d"],["/Swift掌握iOS自动布局锚点/index.html","ee10dc3d0ddb0d23f9f72758711893b7"],["/Swift支持旋转的自适应单元格/index.html","0ba132dbc3333dfb1a67b8e0b97cdf09"],["/Swift枚举值/index.html","6db800eee71bcd49e94c49bedc8f354a"],["/Swift生成器模式/index.html","5ed097bc18e69903f309eea24d5d4153"],["/Swift结合Xib文件自定义UIView/index.html","33c54ae294fe99849add2c4df6bbac4a"],["/Swift编写的20个iOS库(一)/index.html","87561d283c72b303f2df8e1e8a857b76"],["/Swift迭代器设计模式/index.html","6801dc85626a375c60f3558aa4e87724"],["/Swift适配器设计模式/index.html","1ba66e838e57c82b933c1ca8913d02d1"],["/Swift静态工厂设计模式/index.html","d65dc0504491f3a184992e111f4d9a91"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1e3af7ae81c4d303398893af276facad"],["/UICollectionView data source and delegates/index.html","b88136add8ec2b87e17a973b8d97c09b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b5b7b29cd4c78cecd50ce10cf433e3fa"],["/UIKit初始化模式/index.html","02f9f148a4bec68fa2502372e99a6f5e"],["/Ubuntu18.04替换国内源/index.html","4f767947c399881cbb91adb53eb17d96"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6c2f51fae56d913cda929e6e357917bb"],["/Vapor系列 (一) :  Vapor 初探/index.html","eda68f4128b00084389c11c65a9ec752"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","5a25e6be2332471cde6350f007e696d3"],["/Vapor系列 (二) :  Hello Vapor！/index.html","298368887dfdcfaba611ad0e48d06652"],["/Vapor系列 (五) :  使用session进行authentication/index.html","24112047f52932a58681bcc81af0d6c0"],["/Vapor系列 (四) :  创建博客数据库/index.html","90365e2cdb814fff227d18a29e188820"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7d163134baca27ad0731826929c05f59"],["/WKWebView与Native交互注意事项/index.html","bde5e4d4e49b1de6fe854d9630e7ab8f"],["/Xcode扩展/index.html","da7d613e2d03a39305ddf030229e9d70"],["/about/index.html","2ea652ce9348ec04543401e9eab68cb3"],["/appleOS的Networking示例/index.html","36e98276115450b2199ea8cf3e149950"],["/archives/2020/03/index.html","3e4f38f908f1da8a1f3c1b0c3c3c9ed1"],["/archives/2020/04/index.html","90df5f264b5b36189cc7fa61d0510de4"],["/archives/2020/04/page/2/index.html","bf1975b7652c53b35e1a351335a77d10"],["/archives/2020/04/page/3/index.html","3e86eab0409fddf8127b497e51cb6c4b"],["/archives/2020/04/page/4/index.html","9bbbd5295b73ba20902d5c526431e7cf"],["/archives/2020/04/page/5/index.html","ab79492e9c878e4f5490cb8c2d25920a"],["/archives/2020/04/page/6/index.html","d4163e7b926ae09df7d0b57325a94ef3"],["/archives/2020/04/page/7/index.html","df8dae51c1780522809e843d8e0029fd"],["/archives/2020/04/page/8/index.html","f17ed34191c81aad8060a221d29fd92b"],["/archives/2020/05/index.html","9f41b815c527443a470f1214a7623cd8"],["/archives/2020/05/page/2/index.html","c0ffbc69d78a3d28c9cb9a39f847dfc3"],["/archives/2020/05/page/3/index.html","5cdf12f4a565752dcc8fa06190b6a8c3"],["/archives/2020/05/page/4/index.html","1da0291ce597021a878b629c038a5c85"],["/archives/2020/05/page/5/index.html","1791e842a0601ec9f86f19dfd2521a1f"],["/archives/2020/06/index.html","6c36396968216cddf75c77a208379fde"],["/archives/2020/06/page/2/index.html","4295a82b66d69d493d2f29c7bcaa8fd1"],["/archives/2020/08/index.html","13f6bd9ec8d10b01fc3be7dc1b3485bc"],["/archives/2020/09/index.html","cd4624c60109903ce1232f534415a257"],["/archives/2020/10/index.html","580dfa16f64e1464f8937dd5e5ba2592"],["/archives/2020/11/index.html","41a46c520e590996f3649560b0850240"],["/archives/2020/12/index.html","2089d30068bf23c147bc29e664d66af4"],["/archives/2020/index.html","0bd4bec7b2f19e156f12151232894680"],["/archives/2020/page/10/index.html","c3abc29f6bcf269214670587730a7083"],["/archives/2020/page/11/index.html","4767a4c9f9cd47ab2fb7659c0008d838"],["/archives/2020/page/12/index.html","780ea72af9ab12bf619f9bfa2fa23093"],["/archives/2020/page/13/index.html","58cb5e64e9b34fd46a9713fd367def4c"],["/archives/2020/page/14/index.html","8797b2b65883333f3983ee5e5ac1b53f"],["/archives/2020/page/15/index.html","910166ec88392b84a4a9a1ffdbf8e860"],["/archives/2020/page/2/index.html","5405296f5a3fa986281c6a1c50b84475"],["/archives/2020/page/3/index.html","a05d9d304f6371e665ea6eb72938bd4b"],["/archives/2020/page/4/index.html","281b6b1d947aa7c2a2e34d8120548615"],["/archives/2020/page/5/index.html","1d905afaad4b5b4f8257b1ea83372f8b"],["/archives/2020/page/6/index.html","5444254234b9e781ec0095aa2f52dc7b"],["/archives/2020/page/7/index.html","c0fbdc66e56f7f99876d0261bcb1cf24"],["/archives/2020/page/8/index.html","7c07f452fd754ffc54423e1813de0d44"],["/archives/2020/page/9/index.html","6e2951624a3ab166060e0366dbc51966"],["/archives/2021/03/index.html","1a8195c4a88f3be72f1f1cf6adf827ae"],["/archives/2021/04/index.html","6386182958b3b22ae789e8985dffccb5"],["/archives/2021/05/index.html","93d67eb2822225e33a43b3eb0f4171a0"],["/archives/2021/index.html","12ed46ff48ced251d54c5a1e6db620d1"],["/archives/index.html","4b6f052be8b88893032e6b6e41b086cc"],["/archives/page/10/index.html","a61fab04d20e5f7b6ebfe1903f1e95c8"],["/archives/page/11/index.html","04a5a322e3166b0f1800342ff1b4730d"],["/archives/page/12/index.html","6378dbfc7527813eb6330f40758ebafd"],["/archives/page/13/index.html","68de5abbfd67138e4746b34ea832527b"],["/archives/page/14/index.html","13542ad7c649f7e69ae841f88e8a34e5"],["/archives/page/15/index.html","b591e067331a4f3d559008a93ec8e17f"],["/archives/page/16/index.html","b1c14c49fdab40cae9617bc1508ab63d"],["/archives/page/2/index.html","4e45776588f393570d0cef57cdc0d908"],["/archives/page/3/index.html","7c33303a77a7cb32f6157ff7d72724d8"],["/archives/page/4/index.html","316c0e63188ae1604243db13b71b25a6"],["/archives/page/5/index.html","23ed9f61c9b0cc8daf239fd25d216f47"],["/archives/page/6/index.html","d129d4196ef33e916b096067f2db8d35"],["/archives/page/7/index.html","164d549234fc1023ba7db30dc1dca12c"],["/archives/page/8/index.html","31e9825af6e32f87e59652af4bcd933a"],["/archives/page/9/index.html","3fb2ed8d35a937691f3e2444a3e540e7"],["/bugly 上传dYSM文件小记/index.html","58c6cc6c5199d71e2bca6cff7cfe8033"],["/categories/Advanced-Swift/index.html","6525a4224fccfc43ef91898ba21f4835"],["/categories/Advanced-Swift/page/2/index.html","7223a48a548b21254c81c2d86e68b72f"],["/categories/App-Architecture/index.html","5880d22bfd158da8238a59223e24dc4a"],["/categories/Array/index.html","691358503dfafdeed8dfe7ae58375c6f"],["/categories/Codable-protocol/index.html","844b437b8426d6e22334ab1babd829dd"],["/categories/Combine-framework/index.html","2f2759a7ba37bd6fe62626ac644a3b8b"],["/categories/Combine/index.html","ae39329d369719e176b4647508f8b764"],["/categories/Go/index.html","ad636010ec285c05937e60f08d7c1dbd"],["/categories/Grand-Central-Dispatch/index.html","4f19649baf01facb5caf8afb1d17c8de"],["/categories/Homebrew/index.html","a2cefaf1b77ee5d0fad83d54876d497d"],["/categories/Linux/index.html","e1cf4e8500cd5b861ec709665341fb22"],["/categories/Promises/index.html","415e289de31d1fa282e449c485bc69ac"],["/categories/Result-Type/index.html","d97b3a4391b4833fdb920a92286eea5e"],["/categories/RxSwift/index.html","15e69fb721afaa5180353591ee5d3744"],["/categories/Server/index.html","cc0fd79982a4feaf0861b633ca4ecc12"],["/categories/Swift-Apprentice/index.html","92d6ebe8312c751e7aa1e82d3ad6932c"],["/categories/Swift-Apprentice/page/2/index.html","4f483e70e90580b08e0e3d63c914e689"],["/categories/Swift-Apprentice/page/3/index.html","aead2d7925cf9bb3f49926398cf78036"],["/categories/Swift-源码阅读/index.html","551007f3683a962483bd611134b73077"],["/categories/Swift/index.html","88188beb8c648e37507dd0c9c5a59c31"],["/categories/Swift/page/10/index.html","0d23413852fe23fcc726d0062c0ea8ba"],["/categories/Swift/page/11/index.html","55d32619197f00a56aa20cd6693bec0b"],["/categories/Swift/page/12/index.html","bd308967f675ae98e1b14bdaf7f43d4a"],["/categories/Swift/page/13/index.html","39660b9a4cca69b733dfc7edacd3bbe6"],["/categories/Swift/page/2/index.html","b0debe78952c11c54ba651776ab40e73"],["/categories/Swift/page/3/index.html","c04977c259856d30dbf7a1f56323fd60"],["/categories/Swift/page/4/index.html","5a7704ac268bab483413492bc0d09dc3"],["/categories/Swift/page/5/index.html","9c5127f885780477553e32c3e32cd5e5"],["/categories/Swift/page/6/index.html","4e31bf6a1b74d8b14c770564ae8b49a9"],["/categories/Swift/page/7/index.html","a86fe2be556232d677a268337e796667"],["/categories/Swift/page/8/index.html","80061fea04a12cb880493e12881326cf"],["/categories/Swift/page/9/index.html","2d3e9880e0f669f9347d33b0469a1b42"],["/categories/Swift5-2/index.html","939fda0d0c4102052ef167414af4e819"],["/categories/SwiftLint/index.html","d4e879e3749dd000eb3795b064199c30"],["/categories/SwiftUI/index.html","fd353ecb4ba13b96082d2e5b3cc6fed9"],["/categories/UICollectionView/index.html","b510bc13ef576bc6464cb8eba9462bef"],["/categories/UIImagePickerController/index.html","94b78fb3d60634115433f645fc783372"],["/categories/UIKit/index.html","eaab5f91bbd7df6841466bb952547f55"],["/categories/UIKit/page/2/index.html","9c476df5d0c013967da65586006df1f4"],["/categories/UIKit/page/3/index.html","d9e827d26f36748d45b3aa9c1ee6a7ae"],["/categories/UIKit/page/4/index.html","4f5c0a121bb24cbab38b6c8857463d4b"],["/categories/UIKit/page/5/index.html","d6676afcefd323855c055cd4537bc298"],["/categories/UITableView/index.html","038b6dff144097b5fe6b76e6c666517b"],["/categories/Ubuntu18-04/index.html","d3bf91ba16add648f2308ef177e63931"],["/categories/Ubuntu软件源/index.html","e304fbf858ec5addb34c11743ea3b575"],["/categories/Uniquely-identifying-views/index.html","aff8203c856beeb2253d81ef4df3983c"],["/categories/VIPER/index.html","16f9f50d6b6965e5b74e7df2a223dc3e"],["/categories/Vapor-4-0/index.html","1ed24a56e97f734c6132b5d76bdc2ff5"],["/categories/Vapor4-0/index.html","812af1d64d17d99a69e2fe76c1b18db8"],["/categories/Vim/index.html","25a9227a00285b66add886c83fbc2f9b"],["/categories/Xcode/index.html","8b9d26d93970df7f538dcee32680b4c5"],["/categories/appleOS-Networking/index.html","afb88bc3a4369253739a5808060d6c0c"],["/categories/bugly/index.html","3ce87484b377b9a79a021ccd673a1fbc"],["/categories/enum/index.html","0f6b5a622e70ca75cc2be16707bddbd2"],["/categories/git/index.html","a357872c220219599df2f16c8b411feb"],["/categories/hexo/index.html","52a98fadcfcaf5b22967d11b2c5b5d21"],["/categories/iCloud/index.html","f52b7a2fc43d62d6861cd7acea41ec9c"],["/categories/iOS/index.html","c8d7170468de0bd64dba9efb1dab4c09"],["/categories/iOS/page/10/index.html","1a0807708bd932bc72ce00fea9738191"],["/categories/iOS/page/11/index.html","0581c38b7b5285d26ae784711d0732e1"],["/categories/iOS/page/12/index.html","83fd29007ba130822b3dcc576bb6fafe"],["/categories/iOS/page/13/index.html","e85ff7ed655c0bcfe1dbbb46eeea5809"],["/categories/iOS/page/2/index.html","31e30f70a9515d17c300f1f90f96d00c"],["/categories/iOS/page/3/index.html","4d744d455a7bf12d0aa9b7fb78e2979d"],["/categories/iOS/page/4/index.html","00b2acccb24268969f8bf1d45f7c1b70"],["/categories/iOS/page/5/index.html","2e950a297e8bfa074110d57c9f58e09e"],["/categories/iOS/page/6/index.html","c8c819391743f414869cb498dc0a0d28"],["/categories/iOS/page/7/index.html","79d610a2aaad83a4bfabc74362b8a66e"],["/categories/iOS/page/8/index.html","172e4f7f7f76cbd9623fd1544b5277ea"],["/categories/iOS/page/9/index.html","f3e176aef33c1c841ce05589fa9ac766"],["/categories/iOS面试题/index.html","4fb0de47c6b04cb0f8e87a465f4a8302"],["/categories/index.html","8a4da3df5e499055fd725233807ee0a1"],["/categories/random/index.html","8bd898167ec4def5f7bab26354a132d3"],["/categories/三方类库/index.html","82cae7e73c274da955f6a0d4bc584f27"],["/categories/函数式编程/index.html","4730dd5c1c40cd524f37af454d6b7690"],["/categories/子类化样式/index.html","a40b7e6f075cab58ad4e2a5a84c66777"],["/categories/开发技巧/index.html","887564a5030b7027149b92fd36cf9314"],["/categories/开发记录/index.html","3de4e338fb1f2987581c9a11f213eebd"],["/categories/技术支持/index.html","6101568bffd50b183aa917db53d4b61b"],["/categories/架构设计/index.html","7361702d0950866e3d691ebc03f3b892"],["/categories/测试/index.html","7db4e8553066a40e2ca70c725af505b6"],["/categories/用户体验/index.html","28133bbb490a954941f4501cd4c27ab5"],["/categories/用户协议与隐私政策/index.html","010f694491141b8f40c939279c4e973a"],["/categories/设计模式/index.html","7c75fc920f2a4bf5da69326dfd2b9a1a"],["/categories/设计模式/page/2/index.html","3fd0b18d630675e595eb5bceffc902a5"],["/categories/设计模式/page/3/index.html","fe2c2febd2e25059ae54338352e1852f"],["/css/main.css","0af96877198c0c1ff804e573ccb419c8"],["/hello-world/index.html","70473a5d6ececd7b396c8988f60f1102"],["/hexo部署失败/index.html","3521e14b35d11ba89d696a19f667db28"],["/iOS VIPER架构深入实践/index.html","227c891922c09180bad75ac31f7303e3"],["/iOS 自定义视图，输入表单和错误提示/index.html","c04d9f7cac1b4e179b34b3f94fbbc690"],["/iOS如何使用iCloud文档？/index.html","900ffc575a1bd309346d5b7e9cc9937a"],["/iOS子类化样式/index.html","3c715205eef6558562b3878a6bf5cb2e"],["/iOS开发记录<一>/index.html","3e286223adb860d00307640dca83cea3"],["/iOS自动化布局编程/index.html","2a266f5b9d6e518a3bd82468a6439154"],["/iOS自定义转场(By Swift)/index.html","1e80bcb14a15c141fd1cdee0c614066b"],["/iOS项目架构：使用VIPER/index.html","49a9181c0890e488379e2228757e989e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f61d4f9243647e539d2366bb9dde5104"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","00865940dc91755903fd4cf493e4ec84"],["/page/10/index.html","e41c64c2bb7b927cb3663af07c0b493a"],["/page/11/index.html","4df4c1ea505c94707105cab3a94ef48b"],["/page/12/index.html","09c647cfddae95b2ef778569cd7130ac"],["/page/13/index.html","b23916bff5674dbeb5cdb5904670b7b1"],["/page/14/index.html","6484112751657967d96c3b40f313ca82"],["/page/15/index.html","93f7e617c4e1b1fa51c1f930a2ddba41"],["/page/16/index.html","0622e6dcc30b290bb8fd1bb29db79994"],["/page/2/index.html","589c2769346e564b12e5876c7ec39c69"],["/page/3/index.html","87bac03b06affe9a2b0ea1ab47ec8b2b"],["/page/4/index.html","f383bcfad5ab0dad7b70c3589add5764"],["/page/5/index.html","84883a6dac38b9c1b5e4754b63a1a214"],["/page/6/index.html","f27ba07ba8124dd5359831def166dbb1"],["/page/7/index.html","7d4dedc40aa2198b266ed015b2699339"],["/page/8/index.html","70a4751e0633ca2e40e9b6b83abbfd33"],["/page/9/index.html","010940e14d67c41114b21046745d06d1"],["/schedule/index.html","f1948cd601340a47da6ff461ee814169"],["/storyAppPrivacy/index.html","fabcf5f29c182ef231a4c064f40436bc"],["/sw-register.js","0bd93feedcc314573b32b4f62c344106"],["/tags/Advanced-Classes/index.html","c5fc5be966a241862f49e2c3e42376b4"],["/tags/Advanced-Swift/index.html","be6ad8a018f169e8ec3ef93a6af729e7"],["/tags/Advanced-Swift/page/2/index.html","0a4aae4cd41af82ab57545d23b9e7b18"],["/tags/App-Architecture/index.html","a42cb2fe5f5ccd8f0b25755f05194a99"],["/tags/Array/index.html","d0177377fbb0768e98fbe60cb7abe13b"],["/tags/Arrays-Dictionaries-Sets/index.html","5530f361cd0c28e7e6b9fbede5ac5e26"],["/tags/Authentication/index.html","3d97d062c4c968a6a0f627f863677ea6"],["/tags/Build-in-Collections/index.html","a75c8aa57dcfe52a228d121c4f506f87"],["/tags/Building-Your-Own-Types/index.html","cfcecf40fd71f9a1a2f33de298f6c832"],["/tags/CMS/index.html","21e21ca17009c3043e2348a57d270878"],["/tags/Classes/index.html","8422c60512c7f679c0b6fff754710da0"],["/tags/Codable-protocol/index.html","043664c430da9614b261ddf932920be9"],["/tags/Collection-Iteration-with-Closures/index.html","a93b07d0627dc314670c7e89aa22541f"],["/tags/Collection-Protocols/index.html","ed9180525aa413e02b1bd2420bd52109"],["/tags/Collection-Types/index.html","5a1d9b0d4258f4f79b98b5233be2c932"],["/tags/Collection/index.html","68e1142a486cab0ffac6ca3d8a7ad8a0"],["/tags/Collections/index.html","3cc8a55b1a1a700d6f306dcb2408db07"],["/tags/Combine-framework/index.html","ba5afc1476432bf2fa3d650956e25736"],["/tags/Combine/index.html","f5d6653af03e0aca6ffc3ce4c94a5f78"],["/tags/Dependency-Injection/index.html","5b632dd3d80ea46d70d09771c32c4391"],["/tags/Encoding-Decoding-Types/index.html","2e33780add7a952b3e05b02c319c9d85"],["/tags/Encoding-and-Decoding/index.html","0ed42eb116b972f5bd40df8bc027374a"],["/tags/Enumerations/index.html","c9556074fdde88b4aa67750f7a9170d7"],["/tags/Enums/index.html","12acd49afa281ecbd851a941a0df65d2"],["/tags/Error-Handling/index.html","55f881687ffc5549495fcbd43989d1bc"],["/tags/Functions/index.html","60685d79957c82160833463e044010b8"],["/tags/Generics/index.html","c1145648f42c5c58178d31e944966b4c"],["/tags/Go/index.html","003911a993761765ca3ad507977f18b2"],["/tags/Grand-Central-Dispatch/index.html","1cbcacc1ac09ea63e6236b04a6862ec1"],["/tags/Hello-Vapor/index.html","fc92b5aa6bd62a61421728aa347f1046"],["/tags/Homebrew/index.html","d3fb9b1f0035977fe2aa2601fd56c755"],["/tags/Interoperability/index.html","164dc40061931d2273e7bd23bdd73d50"],["/tags/Introduction/index.html","488e80d2b333539f4f86fde19c4535e4"],["/tags/Leaf/index.html","e4a7e5062f427464b6e1fb8f0b4c9c61"],["/tags/Linux/index.html","c7d7b2e49c05b327306ffed5a32d2f96"],["/tags/Methods/index.html","0656ac0f39982092c6b1be0772a061a2"],["/tags/Modules-And-Hooks/index.html","d4ded6f0d5001a6a23ac8fa7817a05b8"],["/tags/Optionals/index.html","7e00b3dca282ce8b68d5bd1b505c1943"],["/tags/Promises/index.html","afdf4dcc8c7e34a09ab4ececa0ce5d5d"],["/tags/Properties/index.html","d1ae6d8a78a42db031365b7125455be7"],["/tags/Protocols/index.html","57ea472c21e62a63706dc6aa6fa9f9a8"],["/tags/Result-Type/index.html","45aee2ec520cbf6ff06c0098fd2ac877"],["/tags/RxSwift/index.html","f526337c50e92cd5527c89b2e4e1b41a"],["/tags/Server/index.html","27e02e419f03ffb8884c386e0ccd88f2"],["/tags/Session/index.html","9d29fcc3516538004ee9f62df8579e12"],["/tags/Strings/index.html","21fe3f97effceb9ce84363bd2b7f7253"],["/tags/Structs-and-Classes/index.html","26cec0ca6652baae0733015a5b2fd26e"],["/tags/Structures/index.html","564b016dd8b2a287c9517dc84a71ed9e"],["/tags/Swift-5-0/index.html","706893dff15549636a3195b9d4742d19"],["/tags/Swift-5-0/page/2/index.html","9a3c41145721487505e3759640d202ad"],["/tags/Swift-5-0/page/3/index.html","685c9fe17ee644be3b0331a30b32d292"],["/tags/Swift-5-0/page/4/index.html","379bc698ab66a41e971d9357a8252862"],["/tags/Swift-5-0/page/5/index.html","87af9a3ffb2603baf054159b8e02e834"],["/tags/Swift-Apprentice/index.html","6d130769354a04bf890c55021a7377bf"],["/tags/Swift-Apprentice/page/2/index.html","9ceeef366072f54847a4e7f0b224596a"],["/tags/Swift-Apprentice/page/3/index.html","2cab7031b6cbda779845db6f3f64ff31"],["/tags/Swift-Package-Manager/index.html","73968b5501d7f9fa45f8a5e02b62f346"],["/tags/Swift-源码阅读/index.html","45f5579b0af94f5e83da4b35dcc47639"],["/tags/Swift/index.html","c3fda58d8752afd6430775230aa57ae5"],["/tags/Swift/page/10/index.html","b90330b1bead8d751ac2631d297120bf"],["/tags/Swift/page/11/index.html","aa64b36ecccd1dc3ed492f1c110672df"],["/tags/Swift/page/12/index.html","2bdd9aa8214b263fddfbad21161ce63f"],["/tags/Swift/page/13/index.html","075b12917d85baf3843100aa264f65a8"],["/tags/Swift/page/2/index.html","4a59d2bfd64fc6095e2ca57f6a2b3a56"],["/tags/Swift/page/3/index.html","b37f08424c23835430fee754e21781ff"],["/tags/Swift/page/4/index.html","bcd103534bcb5fe595dfede4a3918c6b"],["/tags/Swift/page/5/index.html","6cf155b3860608dea3c8565ea9f17cbd"],["/tags/Swift/page/6/index.html","ac995335316b80aa8ab874d9ff4e52fa"],["/tags/Swift/page/7/index.html","6028e19dec0c3a1461ac0003c75b3745"],["/tags/Swift/page/8/index.html","8408b8036f85d78f19c0337b2df21d96"],["/tags/Swift/page/9/index.html","3fc8302997346e01ffd79506593b484a"],["/tags/SwiftLint/index.html","3464da436c2bb24b1fc1fb9acc564f4a"],["/tags/SwiftUI/index.html","284ef79ebdf98c112cd82fe1aa4afbc5"],["/tags/UICollectionView/index.html","0afe5897bdae2a8a7034159a4d88560d"],["/tags/UIColor/index.html","b4688405febbfb243f7651fbf68537d3"],["/tags/UIImagePickerController/index.html","7577cd9d1fe2450996269fd14adc403b"],["/tags/UIKit/index.html","bf72ef04f205e826137393adb0f4658f"],["/tags/UIKit/page/2/index.html","ae04f5d4e7c404da45b6064ae94a2f8d"],["/tags/UIKit/page/3/index.html","79f504970dcfb9c1154693fdac24de71"],["/tags/UIKit/page/4/index.html","9f72e2a576ed261d3069c9f15b20a5fc"],["/tags/UIKit/page/5/index.html","a6ed0dde8d14315a43289c8ff3492135"],["/tags/UITableView/index.html","5c76a5f6a32e9d033d37c5d3cae275cb"],["/tags/Ubuntu/index.html","23f4116b85b51a943f7bb740d8faee9a"],["/tags/Uniquely-identifying-views/index.html","dae5da21779b2a9bdeeaa8f40c731808"],["/tags/VIPER/index.html","044ecd64150468bc36fc27eee7fba981"],["/tags/VMware/index.html","b78d90096ca734dfdfb6b18a5ae958d5"],["/tags/Vapor-4-0/index.html","30d52d65f7693235994af72373c37e0a"],["/tags/Vapor-初探/index.html","44cf28fdf81169a9a0d092c923e7baf3"],["/tags/Vim/index.html","57e304e1404c038ea6ba16526d39eaf7"],["/tags/Xcode/index.html","dd351681205155aa80fbd7573ced5d71"],["/tags/appleOS-Networking/index.html","ca3b00a0174cabccca6a0179fa818c75"],["/tags/bugly/index.html","7ff3527579d512bcd711098945041499"],["/tags/enum/index.html","70ffb1c9d02e9255ce98f9ba765da0b7"],["/tags/git/index.html","40488020f60da289dbcd90c65f65d681"],["/tags/hexo/index.html","ffb45a248e6ca9903c663d835d566c2e"],["/tags/iCloud/index.html","a1ebe4be4fd120c7dcb9beb0221ce64d"],["/tags/iOS/index.html","9e49362727e8ecb841d76cafd8e879e0"],["/tags/iOS/page/10/index.html","3ed8214d898e211afb3ad0f33fd23815"],["/tags/iOS/page/11/index.html","e9686e69243cbce09a814533af4e5912"],["/tags/iOS/page/12/index.html","86c56c40feab039e7ff0f879b55036a7"],["/tags/iOS/page/13/index.html","3dd8f5aaf02f61855f04e0387d91bf82"],["/tags/iOS/page/2/index.html","0e7f4b40bd6f88f05beae7399db0ff9b"],["/tags/iOS/page/3/index.html","03042642d39c696f56d9cedf19e48cb8"],["/tags/iOS/page/4/index.html","0ba61489755b60813ed6eedb067d2b16"],["/tags/iOS/page/5/index.html","da08fb9174d0df39e7ef3439ff4c8864"],["/tags/iOS/page/6/index.html","7145789f8fcd936834256f95d6e459bc"],["/tags/iOS/page/7/index.html","d7df56af31fd7cd88a9a4aa6ab8a5c82"],["/tags/iOS/page/8/index.html","020ce4fddd89cabc4dc6f2d8541c3d5e"],["/tags/iOS/page/9/index.html","6a168abe359bbab60242babfede76d91"],["/tags/iOS面试题/index.html","4e2991606a86bb407ae87e0878cf64fd"],["/tags/index.html","1783678397577659448d94118f0bc4d4"],["/tags/non-optional/index.html","7e67b33bc96f01adc25dcfd2ef50662d"],["/tags/random/index.html","e525576f0f733a3a6f5f9b49d8166cb0"],["/tags/transition/index.html","946b616e8ab2e70ee6559b008b10e61b"],["/tags/三方类库/index.html","bb3c05cb01c36b7fab01b397a0aca502"],["/tags/依赖注入设计模式/index.html","b6d74a4b89c847a13394e3d35d2795dd"],["/tags/值类型和值语义/index.html","b79b3e12bb909f0dc8c36191b737105a"],["/tags/内存管理/index.html","f31e5f6974ecdae583e1a088a9806240"],["/tags/冒烟测试与回归测试/index.html","cddc08d13cfc77f9986eb91056301a86"],["/tags/函数式编程/index.html","9448b1de0db23f20504bf1ecc302dd48"],["/tags/创建博客数据库/index.html","f3d34e2da47278231bb29faa405cd132"],["/tags/初始化模式/index.html","6a8510034f4767c26e4cd859254fe03e"],["/tags/单例模式/index.html","77083b4412dcf93781dd63943c40de9b"],["/tags/原型设计模式/index.html","b2e730211143997a6e8dfd62c5600aae"],["/tags/命令设计模式/index.html","81abc935bd484437b5c3b99911a5dfcc"],["/tags/基本控制流/index.html","d47e5cd45da9d8790e948ccb1b7d7682"],["/tags/外观设计模式/index.html","c50d9785c2b5709285446191a4039064"],["/tags/委托设计模式/index.html","6d021a9c370d17f26f9456e89ffab28e"],["/tags/子类化样式/index.html","0e1fd268064ebf6a0c4e00e449974972"],["/tags/对象池设计模式/index.html","4e5d0dc97f9d4c412ca3357d7c206958"],["/tags/工厂方法设计模式/index.html","f567ba0e51dd180cf0661fb8081f31ce"],["/tags/工厂模式/index.html","c8e7d22898e05d03c6f7261ce26e79cb"],["/tags/工厂设计模式/index.html","39739649602ab5ec1f2db18b4acdc35a"],["/tags/开发技巧/index.html","5a73583057c820a696a87384bb0e2725"],["/tags/开发记录/index.html","faf2d0434a09ad79293e9f12682676b2"],["/tags/懒加载模式/index.html","4cb16d32170e65d3f26857c96dbc2926"],["/tags/技术支持/index.html","5bf66ba1e1cb4a961916cd7a149e8794"],["/tags/抽象工厂设计模式/index.html","3cab7ca78f6b60560d01a2595b42c0ce"],["/tags/构造函数/index.html","b7eff0ed3ebea2af7f9b6af7aeec889e"],["/tags/架构设计/index.html","524300f26529c5b9e08cb9ef5696d78f"],["/tags/模式匹配/index.html","07d71d7e7f0121a69d2262104f7049ac"],["/tags/生成器模式/index.html","bab6c07b480045cde0ac78dc88affc36"],["/tags/用户体验/index.html","2c420eaa95f4715d0bf0dc5c7eaaee2c"],["/tags/用户协议与隐私政策/index.html","0cdab02169bb82c33258a585d92fe918"],["/tags/类型与操作/index.html","27e9c9888f45a07587634c867fef2898"],["/tags/自动化布局/index.html","49e2579dc6079657b0ba689ebee68052"],["/tags/自定义UIView/index.html","63d63323e88474ad8ffd345aebd8c0d3"],["/tags/自定义转场/index.html","95fa12eed6ddfc561c75224404075159"],["/tags/自适应布局/index.html","d334cb3f5faa07e397301d1492be83c4"],["/tags/表达式、变量和常量/index.html","fed152aba242ecf182abd7036bd7331a"],["/tags/设计模式/index.html","8021d3d09e9e282f09b4b61b7e8a0d60"],["/tags/设计模式/page/2/index.html","552d3bdfc6e9873c66702ef5717ec971"],["/tags/设计模式/page/3/index.html","c83476b455a144bf6b3118774cd2dcf2"],["/tags/访问控制和代码组织/index.html","aec5937d7f0442f7d99be4fe3b9b348b"],["/tags/运算符，下标和键路径/index.html","ac0a1c29d29c2c139118cef360d09e37"],["/tags/迭代器设计模式/index.html","2243d87901f0c2f5e51c486470418002"],["/tags/适配器设计模式/index.html","c54ac4bd971b4e02ae8248c786917baf"],["/tags/错误处理/index.html","bcc4e6925dc8bc1fa8f382c10850a7a6"],["/tags/静态工厂方法/index.html","635b93225ad43ce349825940fbbf815f"],["/tags/面向协议编程-OOP/index.html","e1ec95d1aaac588685c7024f13fb96bf"],["/tags/高级主题/index.html","3a12091b8fb44d4d5c53360bbda40761"],["/tags/高级协议和泛型/index.html","64da6333e2b07486432a7fa64a927dbf"],["/tags/高级控制流/index.html","71c43f932993e68fe692174fe667b521"],["/为iOS应用构建输入表单/index.html","c781bc5e618bbf414a414fc49ce30acb"],["/产品开发的幕后花絮/index.html","b0bb4be07145d0511bd53f97362a8f7d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e6425c25066e04b9e529dfa191139259"],["/冒烟测试与回归测试/index.html","d92ff57e328231ed6b0ea115d05b6835"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a9d5029ca7b5dd4109f3e2a8817a630b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f4603d48532d7e031cc1ba0fb131d9e0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6ee2231f85a24b9977504f9ea04d70bc"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6f139d3bda93994c7075bb260514c922"],["/在Swift中创建自定义集合/index.html","3565464ce47920a1293d36b89c89f1b5"],["/在Swift中处理非可选选项/index.html","5b7b5783ffc7612b700af1f41448af24"],["/在Swift中生成随机数/index.html","b36fca0ee52d401e677f6e4df1f74ab4"],["/在Swift中重构单例模式用法/index.html","ceabaa5b7f75fe160f2fde10a634e7d0"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","40c576f765a5ee115e7945d8c322e60f"],["/如何为VIPER编写服务？/index.html","0e6c89ca4fc0239189b0f2b0eae73f26"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ba8a1fb70eb30f115a5a1ca3aee7fc29"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8bf37a9a0fd09ecfd25a82ce031a5994"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","e8898c7413935b88861d5f9f7a6f430a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","07e59efbcb8d1eee6aa037bc402a96be"],["/掌握VIPER架构/index.html","a25300ecfd6f5ae0883a8f8aebc74886"],["/揭秘 WordPress Hook 系统/index.html","3ec57edd59f48f05cbefdc86e334e25d"],["/比较工厂设计模式/index.html","f16f806ee3729cebb8fe1e5b42d082c8"],["/深入了解Swift中的Grand Central Dispatch/index.html","c399e69dc19d8c661c5b6770609d6f58"],["/深入研究Swift框架/index.html","1234a46c594242c5662d1be1facdfa0b"],["/美豫直聘技术支持/index.html","47b3a32c7f3660d2e58fe5f63df91827"],["/美豫直聘用户协议与隐私政策/index.html","3b0cfb8f92f447cc13e8c2fb543ea789"],["/适用于iOS开发人员的VIPER最佳实践/index.html","43079112b3fef1cdf1e898669abb0b98"],["/选择Swift而不是Objective-C的5个理由/index.html","04fd829aa669c292ae09107404191056"]];
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
