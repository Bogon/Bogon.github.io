/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f84b4292d4721f50fcaffcafcdd9c50f"],["/2020年iOS面试题总结(三)/index.html","c31645894ea591ab884bfb85aa742c3c"],["/2020年iOS面试题总结(二)/index.html","ed57b8591e9a23107117e29ec890c379"],["/Advanced Swift系列(一): Swift 简介/index.html","26fc750557fd9119c519fc3f23a027f0"],["/Advanced Swift系列(七): Strings/index.html","e69cbed886b17e00d4f22439f6df699d"],["/Advanced Swift系列(三):  Optionals/index.html","250d749bd405503670a5619b4db5dba8"],["/Advanced Swift系列(九): Protocols/index.html","b1bf7e2d15a1d465b6109610fb4dd054"],["/Advanced Swift系列(二): Build-in Collections/index.html","75b00bbccab1edd32913b57954c0f126"],["/Advanced Swift系列(五): Structs and Classes/index.html","a0589aa265574427b22d61b9dff067d5"],["/Advanced Swift系列(八): Generics/index.html","1aad072070c1704b90c216fc042fa915"],["/Advanced Swift系列(六):  Enums/index.html","e4c9490084813d0514ffe535500dc764"],["/Advanced Swift系列(十): Collection Protocols/index.html","4b2d7aeb542db8e3293fe1d94dfa846b"],["/Advanced Swift系列(十一): Error Handling/index.html","e3a3d177ca782812af551af29f9b50fa"],["/Advanced Swift系列(十三): Interoperability/index.html","55c32e6a8af1ab1659ed4dbb00df1f61"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fc650f4afa2aee38cc0467405017c7ab"],["/Advanced Swift系列(四):  Functions/index.html","b00a6e5dc94fa6d6fc19b90284a1694e"],["/App Architecture系列(一):  简介/index.html","8b5ef5a0539a7a76ec9f64a4138879ab"],["/Functional Swift 初探/index.html","18f58888ac6d17457ce5eb123c9c6247"],["/Git 使用小技巧/index.html","b389a8d311aa19e617dfaeeec10395b9"],["/Go 基本语法初探(一)/index.html","9dc0b8cfdc69a01c0ab905e9d2b56d6d"],["/NSCODER和SWIFT初始化/index.html","3d3ad7ca313bec1ef14e353d7928a89a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","4ef74ea1e31fd7f5f8ef2414cfe2a7ef"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","360b622204a0cdd3337c269c3d4abff5"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","3050a5ee2227f9447213c2af9af6001b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","52337d7c302da199fbea77223f5720a9"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","328d9f1846fb9b443a8fc1358fb1c9cb"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","90a2564a4ccab9bd8b7cd9fc22cd8962"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","75879c8ba1badfa4973913f562f07124"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7b0aaa51da9c7d37413b10721391f350"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","58fb4e2f120613843bce6fd7e33307e8"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","cb2fe628074963a2214accd9dc43434a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","a20a39acfa9d3d87f1fc8f5a55d6ca1f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","c726c959f585121fac6be25e448f3799"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","6455815a70ce65a05a8eb6d45547fd5d"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","fe1727dd3444e9f35c6f5b812a788499"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","0a6b2121b7f21991b6225736eed5a965"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","bd7aab4d3e3ca1ceb4faee941842928a"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","b65a9bf118be0bd585382bd138f16c93"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","faff4cb06141c68821258d0aa3853624"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","8de499516ae37b539a035e6adb764ad7"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","78ebbf4ac1ec582077ab2797f9f1fe99"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","bc3f2959b7ace635055be249f2f67642"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","fa3a435394e41c21b8d1d00db8864fc8"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","f602e37803d234cc7fd79319e12b9833"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","c557bed5f399f024daf3f59711b21f28"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","93351836fbee0291276a303de213bb3b"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","37148cf1751988f12674d3d12686b6e0"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1532cc7c7764e1ca638648da484b8336"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","595dc056603d0d474864da63f34136ad"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","e3fa05d5cb87fee3590dcee90accba1b"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","45af152d342cb87e4d7f6918f6a54edb"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","27bdce014fcccbc61ffa5ba2c25aeec4"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","172e9092a5c28d6028dc78b05abf4633"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","34c2e9a2e4844069338cfc542f2af20a"],["/Swift CompactMap vs flatMap：差异说明/index.html","b1abf0ed466ceadcf9794a4f7d9f40c8"],["/Swift Grand Central Dispatch 深入实践/index.html","e6698610d7ec13567f545310c7633560"],["/Swift Lazy属性初始化/index.html","8bc24e0438e7505839c89b4353abfcca"],["/Swift Promises 初体验/index.html","19b1d8bb272c6e3d036b731da0a53d35"],["/Swift Promises 探究/index.html","f8afe079b904873f298bdd6cddbc6995"],["/Swift UICollectionView使用指南/index.html","9fbbdf37c463dec2d74f60dde240c39d"],["/Swift URLSession && Combine framework/index.html","b2fa3eef9cb2a3a48d377bc7b99cae93"],["/Swift 唯一识别的视图/index.html","3d393f0f20ac4103a5d18dda932849bf"],["/Swift 如何学习现代UIKit？/index.html","b111bf8394fcb59c6ad9b7c4c5fa6f23"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","6487ce4547775b1d30afda25c76c7d87"],["/Swift 用 compactMap 替换 flatMap/index.html","1eb10479671c2db7944531988c4efc01"],["/Swift 选择和播放视频/index.html","30cc2258cf48401e8ba0e1d9b1d3a103"],["/Swift中UIColor最佳实践/index.html","5bb947ca6d9bbc1a1e527c6671cc5022"],["/Swift中快速简单的工厂设计模式/index.html","af72c9317e994841201bcaa1ea5c9921"],["/Swift中构造函数与静态工厂方法的比较/index.html","999f595cf49e4eb4b909e572e4edd1e1"],["/Swift中的UITableView教程/index.html","14af68e11dcf0b7e619b5f8c08b2ff78"],["/Swift中的懒加载模式/index.html","2e868f5493feadb752a1037aedd97481"],["/Swift中的模块和挂钩/index.html","d4ced206b8d9bf50dd63d5b1c257a15a"],["/Swift使用布局锚点添加约束/index.html","0813bb55c96c28be45e2893e8532c927"],["/Swift依赖注入设计模式/index.html","76be0c3f9291701d2c750277550cc010"],["/Swift关于Dependency Injection (DI)/index.html","7d6b7c9045f5339ac5b1c48eb2cb1ad4"],["/Swift初始化模式/index.html","f2e5a55555d7ab842638bb5258c117b1"],["/Swift单例模式/index.html","d4ed64816fe9491fc48bad8ca7726f37"],["/Swift原型设计模式/index.html","5d128e6148098de9df645614eca98489"],["/Swift命令设计模式/index.html","9754eae4a08adf694d0071ef81ef3fec"],["/Swift外观设计模式/index.html","25c69b9e9b78646fe05e3fe11f57ae95"],["/Swift委托设计模式/index.html","1083f85e5e7cdecb9be6c7fec1dc4d59"],["/Swift对象池设计模式/index.html","fc83cec6003bdd9a4081f5410275974e"],["/Swift工厂方法设计模式/index.html","a0c5e20c0d9b8d005eba9d8209c5e066"],["/Swift带闭包的懒惰初始化/index.html","370deb1ffac8f1a1cf5e489d8110c3ab"],["/Swift抽象工厂设计模式/index.html","6fc325708f4581aaa5be8c993ebb6b97"],["/Swift掌握iOS自动布局锚点/index.html","e3e4ac2dc236a921e60c94af6bd513f8"],["/Swift支持旋转的自适应单元格/index.html","95d6c5c8c2a5adafab002be95a7e89d7"],["/Swift枚举值/index.html","64251b400f80116c13f1a40727941b02"],["/Swift生成器模式/index.html","7de7b924e33fa6911600dce7d581b306"],["/Swift结合Xib文件自定义UIView/index.html","592459d8566e3b9c5f461952d91a1910"],["/Swift编写的20个iOS库(一)/index.html","f8600283008fd7420de83ebcffc5224f"],["/Swift迭代器设计模式/index.html","97e8b7adf9760f33147c62d277474d75"],["/Swift适配器设计模式/index.html","46e057b996c884e2e42e093203520d1e"],["/Swift静态工厂设计模式/index.html","3012c02ec42e6de7251655f27a0d5a92"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","7fb3827d092fd2b6c706441535d61576"],["/UICollectionView data source and delegates/index.html","ef5bcc4a0f86c3c63621e95dcdf295ed"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","1f6c0d900a3b8f3ea25a6f69d9158e79"],["/UIKit初始化模式/index.html","c74604e0affd9833a0e789eef68ff391"],["/Ubuntu18.04替换国内源/index.html","af0cd5384825e46322e9b0f604e6fccf"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","deaa715dea7d2c4b431fa115d29b7e09"],["/Vapor系列 (一) :  Vapor 初探/index.html","a7b811252f644e747017d38604afcf56"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","a47861ab3db4734dfad0169211873325"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2aa83ca45dfbe464c659984baebcdfaa"],["/Vapor系列 (五) :  使用session进行authentication/index.html","c350ad3740e903cbca6f558317561f13"],["/Vapor系列 (四) :  创建博客数据库/index.html","95d44c1c5b729b933252ffce8da37f1f"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3792655939bb1bada8853b41c9890a29"],["/Xcode扩展/index.html","57fd642f42fa9bc0d354e4a1a05b41b4"],["/about/index.html","4ddaf82e256328ea7e891cf9268c9605"],["/appleOS的Networking示例/index.html","2a71ffd21a50eedb5214483f28409272"],["/archives/2020/03/index.html","1c2b2e6c195fbb163613841c828ed783"],["/archives/2020/04/index.html","d5a94e2052a4ae567d12cbad173ec6da"],["/archives/2020/04/page/2/index.html","c5c0cc5cbc0b79f20a4a5ace7d583b55"],["/archives/2020/04/page/3/index.html","ad8381eee8cc726bb1558505aae859a6"],["/archives/2020/04/page/4/index.html","34fbdf8ceec4117df7c8ac069a91d641"],["/archives/2020/04/page/5/index.html","27e5f1ebcbd415d61bc1d5f3c38e766e"],["/archives/2020/04/page/6/index.html","579ed51d3545c997ce272adae61ad09e"],["/archives/2020/04/page/7/index.html","eea09b411e703fee33b3aa3207758a24"],["/archives/2020/04/page/8/index.html","3bf3425da0a69e4b85bfda4cb0fc17af"],["/archives/2020/05/index.html","6eaa6ee0abbbca5c74170ce103130d6b"],["/archives/2020/05/page/2/index.html","1bb01881278292c8e08f4614514e7263"],["/archives/2020/05/page/3/index.html","795845661df8040775c280a9218ae9a5"],["/archives/2020/05/page/4/index.html","8e7511dd160f6bcca74f902a151863c9"],["/archives/2020/05/page/5/index.html","dcef47ab129350e20f96d241ba436f35"],["/archives/2020/06/index.html","ee6dbcf1394510950ce3a506c4c163d7"],["/archives/2020/06/page/2/index.html","550bc3145f8761720ed46a31ea950a40"],["/archives/2020/08/index.html","383c8f9d51bb461fc219ad6c2df7424d"],["/archives/2020/09/index.html","905fea562bea527128612a5df85c2fad"],["/archives/2020/10/index.html","d7b00ef1345ed81fab66683ab79a3020"],["/archives/2020/11/index.html","f2fe070abd091d08e148db063779c8b9"],["/archives/2020/12/index.html","8c4c8e0ce1664257f935b9daf35cecbc"],["/archives/2020/index.html","fd5059994478b0cd09ea395a2e89205c"],["/archives/2020/page/10/index.html","5b6834f847fbdd789ae8e2f4b88aebe8"],["/archives/2020/page/11/index.html","a9131da1a7cf1c263c3bd60ed11c9a6f"],["/archives/2020/page/12/index.html","52603655508e4beecdef25c02f44838b"],["/archives/2020/page/13/index.html","64711739d34c1c349d41e02440783a4b"],["/archives/2020/page/14/index.html","12fb91f04c15291ca0ac0fee8cd30ba3"],["/archives/2020/page/15/index.html","90b98a59593a969ecdaeb8a4eea83267"],["/archives/2020/page/2/index.html","afce7627eb6cefb9b458a28795d27ece"],["/archives/2020/page/3/index.html","fa12dbb3f40806714ef6010a7811ca35"],["/archives/2020/page/4/index.html","8ab79802f85aa4a8116c528e11346a1e"],["/archives/2020/page/5/index.html","830f0612c8ed1c06e8c26ae2392b66b1"],["/archives/2020/page/6/index.html","d021cc6aeaefa39bdd61732dc7570b23"],["/archives/2020/page/7/index.html","3469cf38a036caee078c2834e95bb47b"],["/archives/2020/page/8/index.html","afded55103e83da6397b3531eda09f16"],["/archives/2020/page/9/index.html","af8f67bf9aaa4da9192043c6a12ada2c"],["/archives/index.html","d124336c31e0e3586cb3ac4d111d30bb"],["/archives/page/10/index.html","e3f637ba76371c5e01a26eea1500bbc8"],["/archives/page/11/index.html","650e5ce9efb95193e6a9e7f0c966eb12"],["/archives/page/12/index.html","ce6ad0c857caa8159d9b68b1a01684cb"],["/archives/page/13/index.html","58b2a4807f72e6b86a54d923f872ed3a"],["/archives/page/14/index.html","ff0ff39b4a170226947b18f8513e60e6"],["/archives/page/15/index.html","a0bc1f05046d34430316181971519d89"],["/archives/page/2/index.html","be338d99e1841874c45ab45289b4e638"],["/archives/page/3/index.html","1fd21e48eaacb57d93681d17499ffd7e"],["/archives/page/4/index.html","0d112671198c10c74f123a6a6054c557"],["/archives/page/5/index.html","4de6f61d6b131bb1e808b085e8a4d827"],["/archives/page/6/index.html","f4778e4c05ce26e4adcf592de0856964"],["/archives/page/7/index.html","2c61209b56412cdc92520e5e25bc56f5"],["/archives/page/8/index.html","f8814bcab84857a08fed781069277720"],["/archives/page/9/index.html","c5380141e7a60b3c0215827993974a16"],["/bugly 上传dYSM文件小记/index.html","d6598646d0f1ba632e38182f3bb0bcf4"],["/categories/Advanced-Swift/index.html","fd8e39a31743c0ad09643777fdd585df"],["/categories/Advanced-Swift/page/2/index.html","f448c8696f7ab6f4c6dc74c44abe0b89"],["/categories/App-Architecture/index.html","0062c404b7418cb7a044e34a0b8e26e7"],["/categories/Array/index.html","b35c4b97327ed14772aec54200733800"],["/categories/Codable-protocol/index.html","3751bf37aabc26569e0d9c0400def084"],["/categories/Combine-framework/index.html","823d92eea8619c6fba09bbfe38639736"],["/categories/Combine/index.html","6889a08670cf93d0486aa422f95e9694"],["/categories/Go/index.html","360d3cf29dffd603a15d05f35f5b27dd"],["/categories/Grand-Central-Dispatch/index.html","2c1a6e5b3bf074149ae2e5bd87968fae"],["/categories/Hexo/index.html","623d16d6200c166f98d2229c2e0686f2"],["/categories/Homebrew/index.html","64251d9ba82821644484d94913fcf502"],["/categories/Promises/index.html","15da52c4cbb4363774ae4ee41853bd3b"],["/categories/Result-Type/index.html","e5a0813e29439b6580aa01507c9ccf37"],["/categories/RxSwift/index.html","8c90699b98ff3a696daade39f2ab0aa6"],["/categories/Server/index.html","167f238767c9ef872b348b91b94f0eaa"],["/categories/Swift-Apprentice/index.html","8fbce54d88e2a35b5818b7ff58ec2dd9"],["/categories/Swift-Apprentice/page/2/index.html","c44b0338a82f0e497ecfc11a39a1bbbc"],["/categories/Swift-Apprentice/page/3/index.html","fb3c6e795177bb51a97011bbf6115cc3"],["/categories/Swift-源码阅读/index.html","6d930cbb2568685c66a0b9becbc2beef"],["/categories/Swift/index.html","7c8d50edcfd658a1b37b2797352bde86"],["/categories/Swift/page/10/index.html","c892f8113004fd7836a5b480ffede04f"],["/categories/Swift/page/11/index.html","d63468cc0bb42c3602e762a388b91a8a"],["/categories/Swift/page/12/index.html","46349279a05e1c232b23792e6f21b885"],["/categories/Swift/page/13/index.html","75d82bfffdedfef8a0dbc1f3cb53062e"],["/categories/Swift/page/2/index.html","ac6b01be4172bdc9800ee18cef6bf516"],["/categories/Swift/page/3/index.html","abe4f550dced8f6348ad41449bbbe2d2"],["/categories/Swift/page/4/index.html","f6344ed18419548e1f5f5cd4dde3c630"],["/categories/Swift/page/5/index.html","a49e9e59fee5e7b1af9e944193435021"],["/categories/Swift/page/6/index.html","f46d02147d797891e4bfd6c0fa2f8b70"],["/categories/Swift/page/7/index.html","600d84ad089a28dd249c1c6820196430"],["/categories/Swift/page/8/index.html","fda8bca678190d8d1529ec993f3cc5de"],["/categories/Swift/page/9/index.html","8e332dedbd3137ef08e51ad6aa368585"],["/categories/Swift5-2/index.html","831fd7b7fed6a8200017acc9948a438a"],["/categories/SwiftLint/index.html","4b894e2c99f0da90de095aa7f1f03b6e"],["/categories/SwiftUI/index.html","a89b5d60d4fd9693b819439be10eb44b"],["/categories/UICollectionView/index.html","20a1bc4a1c6a809912a88524f923c802"],["/categories/UIImagePickerController/index.html","97c1352b08b4be1b1e916874e466f216"],["/categories/UIKit/index.html","687ed1c86e57ac2fdf060650e992324f"],["/categories/UIKit/page/2/index.html","dcf6def618a39266990d232e1e2e416b"],["/categories/UIKit/page/3/index.html","cdd920e06392107e8ee037257c72991f"],["/categories/UIKit/page/4/index.html","ed1ea138dab2ea5022bbd8c70f5fee3a"],["/categories/UIKit/page/5/index.html","8f39b292387cd23ee3eb909918f76cf7"],["/categories/UITableView/index.html","40be80b155b4091350cd93687f0aba9d"],["/categories/Ubuntu18-04/index.html","00da72033702c0775fc9531d28b0716b"],["/categories/Ubuntu软件源/index.html","5c3893469e851f2c6dcce63e3ca64a19"],["/categories/Uniquely-identifying-views/index.html","bdfe76f8f6ff536ece4232d8f191d45b"],["/categories/VIPER/index.html","366cb59b609caa5d2b832dec1c7c170e"],["/categories/Vapor-4-0/index.html","f97557dd7a8c0a27567188c8e3174d8d"],["/categories/Vapor4-0/index.html","3627d26e2efc35b6c8e0e093a5d90cb9"],["/categories/Xcode/index.html","890f74e1a46c58bc3636620120ba627a"],["/categories/appleOS-Networking/index.html","906437686e6b2194c01ffcbd786f520d"],["/categories/bugly/index.html","b9a1e558f83e31b70168d05766324c7d"],["/categories/enum/index.html","bd2b6ebe4d0ae52526cebc070b97ef55"],["/categories/git/index.html","aeac235946028aa489776fee2861de5a"],["/categories/iCloud/index.html","7cd82cdb06491cbf87fa477632a64342"],["/categories/iOS/index.html","2732355710ec464e5c4638a5cb719ef2"],["/categories/iOS/page/10/index.html","3607591aa60c7a60c444a254b4ebaed7"],["/categories/iOS/page/11/index.html","cd0e8c6135bf1a9f9a87ce85f9168672"],["/categories/iOS/page/12/index.html","35328b7ef9fe366aecb19aae872fce9b"],["/categories/iOS/page/13/index.html","e58b9300769da60297265d7ac5e66756"],["/categories/iOS/page/2/index.html","2a2b1ebfeab5d128dfb7a0864dd4907d"],["/categories/iOS/page/3/index.html","cf61d94c19e584b5a82e34a073a1be4d"],["/categories/iOS/page/4/index.html","a665b5be817e5c800b6be60f082f7721"],["/categories/iOS/page/5/index.html","4c5b341a673bee83a1fa2ba222a2624e"],["/categories/iOS/page/6/index.html","debca7e4862429c82753a0a6cac2ab0d"],["/categories/iOS/page/7/index.html","6f6106f3b7a935907f1982b0db6370ec"],["/categories/iOS/page/8/index.html","f27f02abc9daad9b2d21a53550ce78c0"],["/categories/iOS/page/9/index.html","a83effbb01891b3d4ebc5540334eaae2"],["/categories/iOS面试题/index.html","5b68ffae062408449c7f8c7af22abf36"],["/categories/index.html","5a2b4e1c3a777e82e5aa58a36db39d69"],["/categories/random/index.html","e17f6d9e54d41ebe02bda2dd14c3a141"],["/categories/三方类库/index.html","add07077ff8b578243928ee697131238"],["/categories/函数式编程/index.html","207f2e3fa841d8bc6842a963f59fda4b"],["/categories/子类化样式/index.html","c0a7e6c2491ffa92ad27aa887e5c398d"],["/categories/开发记录/index.html","a4a7e4a92bd42050695be8bf4bcc01ab"],["/categories/技术支持/index.html","a8f75d89a9741c967e9a270e2007d205"],["/categories/架构设计/index.html","3ea4f2df8b4fce6581fdb4ea924eca22"],["/categories/测试/index.html","9c99ab7410116bb718eda0a4af33fcde"],["/categories/用户体验/index.html","3837a497bff194bcef5a9ae7f573d8b3"],["/categories/用户协议与隐私政策/index.html","b9ce4c252449d2ab7d8a9c462c62be9a"],["/categories/设计模式/index.html","9879b154599289bea4132935eb5049cd"],["/categories/设计模式/page/2/index.html","af1c0d74ee7837688233958dce3dfcf7"],["/categories/设计模式/page/3/index.html","723e598e3f781af2c0129bbf3a0160ac"],["/css/main.css","792afad1b25a12fe58c5a28f81de3a65"],["/hello-world/index.html","9fe1a04d9efcbd0fbda98ab208b82773"],["/iOS VIPER架构深入实践/index.html","ce64cc0db3e2c8cd10ca5615c5e01726"],["/iOS 自定义视图，输入表单和错误提示/index.html","3b9df0ef2395f5064845ee840b1f7ea0"],["/iOS如何使用iCloud文档？/index.html","994269cf3fb0be43c80fcc4c74e77208"],["/iOS子类化样式/index.html","b237ef1d6209a0e4e8c10ecdf24e0b06"],["/iOS开发记录<一>/index.html","c921ed0b8869f5e8c7df87d9b8bf10cb"],["/iOS自动化布局编程/index.html","fe3447c17593c9825f8190dda00f6c28"],["/iOS自定义转场(By Swift)/index.html","e27454d6518df8bc3ff66a2578052a0c"],["/iOS项目架构：使用VIPER/index.html","fa0f86885e8ea4ac0e1c75b37c602232"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","09d1e999cc62950fd23c09f1e5a3623d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","2f3f4e69dfd5aeb2780667014c65eede"],["/page/10/index.html","314242717a1193c937e92dcea0d78ff5"],["/page/11/index.html","906531a9dd11c3119c31152324f6f901"],["/page/12/index.html","7acf4f1403ae094a38f8dbcd0c7da1be"],["/page/13/index.html","ce4c2b26da2508b8ad54926fbe448c96"],["/page/14/index.html","3611003a9c6487bbbbe079541baf1307"],["/page/15/index.html","7ae955a67378928f3dea24a1d9c60b5d"],["/page/2/index.html","9e7931f2b71141a54b22b0fb1ba51ed2"],["/page/3/index.html","523fdc962b6a737d79d7e48149c0fa9e"],["/page/4/index.html","548ba39391508f7b0cfa1cb3a12717c1"],["/page/5/index.html","f2c8c464654daac23e543c0dcd8481a6"],["/page/6/index.html","77d42e939cda96cd2892f3408c69d7c7"],["/page/7/index.html","703463237e85a08f85f4f524bd5f7710"],["/page/8/index.html","11b67c338c416fc097039766ffd5692c"],["/page/9/index.html","7f3eba35ac6c0b653125ce0e599e9f98"],["/schedule/index.html","3cf7eb551bf1c9c1d8b0465bdf11bf71"],["/storyAppPrivacy/index.html","f05e8d1edb9df298bf6946cf9d394038"],["/sw-register.js","e0c28886d434f86a001b688062da318b"],["/tags/Advanced-Classes/index.html","93f7bd0e0d936646800b3508f59d5454"],["/tags/Advanced-Swift/index.html","3a3c013d6332ac1c7bd4acd79626e25b"],["/tags/Advanced-Swift/page/2/index.html","6fcf85977ced120f96301d8a7766ae68"],["/tags/App-Architecture/index.html","c778e5870687b0b3a54eb9eac2490006"],["/tags/Array/index.html","e98f7c5245326de4140c9707361139b0"],["/tags/Arrays-Dictionaries-Sets/index.html","3abd325e9b489defcf94d971c2f7f43d"],["/tags/Authentication/index.html","8e7662d330053962ee7418f52db0e273"],["/tags/Build-in-Collections/index.html","96d68e02ed811ce6c38faef82ef56ae0"],["/tags/Building-Your-Own-Types/index.html","c1f43798986cb77295c29b3e93e48999"],["/tags/CMS/index.html","cc734b78ba386dfd608ab8c87e90914e"],["/tags/Classes/index.html","548dca60cedb379598e77ba71a8c99e3"],["/tags/Codable-protocol/index.html","8974c885eeeb23c4327eaf05891ee25d"],["/tags/Collection-Iteration-with-Closures/index.html","9467b619fdb91d30cdda54f3c73c9dbe"],["/tags/Collection-Protocols/index.html","363003a5b1c8d91b3fa947c716a1cbaa"],["/tags/Collection-Types/index.html","65400d305fba22f2be90b49fa2d1e2e7"],["/tags/Collection/index.html","aeab2b8e00c12a3cd1bbcecf678f7b8b"],["/tags/Collections/index.html","1ea1ef94933c85bb25cd0b8c947c1021"],["/tags/Combine-framework/index.html","c51c3f3fed057312e2a6099ed5b391f8"],["/tags/Combine/index.html","98e11215b531ff5309196057b2e4eff2"],["/tags/Dependency-Injection/index.html","c8f72acdabf4a15b47c588dd302bb00c"],["/tags/Encoding-Decoding-Types/index.html","a2027aa1e491f2f176890edfe3b99aac"],["/tags/Encoding-and-Decoding/index.html","954ac2193ca23af7411d5efad10ce5a4"],["/tags/Enumerations/index.html","e70ceb41ab25c0dd8ed2d129b4fd9438"],["/tags/Enums/index.html","68645600cab803db02b535a41fc4569e"],["/tags/Error-Handling/index.html","725a6098ba938ad7045c632328f23c93"],["/tags/Functions/index.html","906cfb76294a994951ccfbf681ad910a"],["/tags/Generics/index.html","d45afa94f04a6c781c21e3cab477bfb7"],["/tags/Go/index.html","98c0f049101695074237a4b0d7aed4ef"],["/tags/Grand-Central-Dispatch/index.html","0f6d1d839e2184bf4fb24baa71826678"],["/tags/Hello-Vapor/index.html","b3194b2d837592987ee6adf707181bcf"],["/tags/Homebrew/index.html","b7ae5fef59dc428c452a44ffdd61c6d3"],["/tags/Interoperability/index.html","fa59232b4bbc85335070af674d832811"],["/tags/Introduction/index.html","907af80bcf2f102fbab35f47beb54bea"],["/tags/Leaf/index.html","166f78270aa2e0e4c29faa40f201215f"],["/tags/Methods/index.html","6a42322da61498547f8305f9784b6c35"],["/tags/Modules-And-Hooks/index.html","feb8684dc193111685bc1e780bd2e8b0"],["/tags/Optionals/index.html","2d6a0b41084716492d1f36daf05afa2e"],["/tags/Promises/index.html","bace4b3b0900ad475269259634560738"],["/tags/Properties/index.html","3d8ae2ad7dd9525dcad51c183cbaf8c9"],["/tags/Protocols/index.html","94a52e1fbeedd177bbf19b231c69a168"],["/tags/Result-Type/index.html","0843ebb74f818b2ce5726f1356940997"],["/tags/RxSwift/index.html","d2bf5a997ffc52e0d7d504cae4c70117"],["/tags/Server/index.html","c40d74dd9ddcf9f70e8e740a2fe60c80"],["/tags/Session/index.html","1ced267f4177e75aa43eaa9916fc894b"],["/tags/Strings/index.html","ecc106b7aa6ff5b4d52b6086d2f99526"],["/tags/Structs-and-Classes/index.html","f3f2a6b4b2457c8ed9eff8c10621aacc"],["/tags/Structures/index.html","125104f417f7f8adf09891cfa32760fa"],["/tags/Swift-5-0/index.html","c16d4a4732fd5a5c1b3b6eebdf7b087f"],["/tags/Swift-5-0/page/2/index.html","6a1818f77be8303d916039de96bf8f89"],["/tags/Swift-5-0/page/3/index.html","4c0b2ee63b2476820c59c0efa344acc7"],["/tags/Swift-5-0/page/4/index.html","42fd2b87a5e1e868688e8f02694e6299"],["/tags/Swift-5-0/page/5/index.html","2d2dd01d28baeec25fca81a3553b3313"],["/tags/Swift-Apprentice/index.html","5fe449d938bbf029253c6b7ff29a61b0"],["/tags/Swift-Apprentice/page/2/index.html","3d354762c44de8081194412db299ee93"],["/tags/Swift-Apprentice/page/3/index.html","45f8b17053e8e7c4be1caf26d6189fa3"],["/tags/Swift-Package-Manager/index.html","7c5598ab4ee93b2f23012a1566acd37f"],["/tags/Swift-源码阅读/index.html","6c1c139a13cd68606bb326cff7fcee7c"],["/tags/Swift/index.html","8f8c80834b5a12e375af336e316eae83"],["/tags/Swift/page/10/index.html","e156e1da7bb7c3329af420f9a4f95662"],["/tags/Swift/page/11/index.html","64b00bc6a57a9fc118e84714be2c819c"],["/tags/Swift/page/12/index.html","810bcfd70f0fee360840970e93efd565"],["/tags/Swift/page/13/index.html","35860a15d6f3ae2b53189cc1e605dece"],["/tags/Swift/page/2/index.html","c8c7ee0880ef2b32e0dd49ac7a86ffa4"],["/tags/Swift/page/3/index.html","424033daca429cb4f2b6c610337ba21a"],["/tags/Swift/page/4/index.html","e8248767edb400f105241d1979d9f190"],["/tags/Swift/page/5/index.html","1d5f6e0ae2a36e255def95437ca02ba8"],["/tags/Swift/page/6/index.html","74e02cb9e9fde541e1f406def82abae6"],["/tags/Swift/page/7/index.html","b4308a0355fda1738267ec57de30dfb7"],["/tags/Swift/page/8/index.html","a81898bc136cfc90021e00e93af12609"],["/tags/Swift/page/9/index.html","0d0e365887c5cd761763699e5b4d2837"],["/tags/SwiftLint/index.html","44c929774b6c03591c9b41307c4f41ff"],["/tags/SwiftUI/index.html","696f632cb4c802b89df1d70814039ba6"],["/tags/UICollectionView/index.html","1b668b5b7979edd6a87f7009bb20a64f"],["/tags/UIColor/index.html","d43b7db53f46e467f79f83200883e7d2"],["/tags/UIImagePickerController/index.html","f37df8f2b2a8e135234224ec89478942"],["/tags/UIKit/index.html","1a648171c59d2a5c64a939bf157e2234"],["/tags/UIKit/page/2/index.html","6948f8bb42b4a3a34cbccb4fa6378d65"],["/tags/UIKit/page/3/index.html","a16b700d23f0a116c0958c2315f73eea"],["/tags/UIKit/page/4/index.html","3518672212855af495b9f59aa7bff5f6"],["/tags/UIKit/page/5/index.html","b4041c3e0b3d6fcf6f30e82bbf64cccb"],["/tags/UITableView/index.html","619b523896d471f73ecaeb57bf722b8c"],["/tags/Ubuntu/index.html","33cc61f66e6f9af5d95fca724cabc513"],["/tags/Uniquely-identifying-views/index.html","10bd4ac0e4bcc16c64b1e7564071418a"],["/tags/VIPER/index.html","f6d42f6b0a8bef5a33a8e9c1f94f5278"],["/tags/VMware/index.html","03d79c57c0a4e8de1b5ceb7923cbad6a"],["/tags/Vapor-4-0/index.html","600d49adfa56bbed4544d94e4a4f498f"],["/tags/Vapor-初探/index.html","fc07ab96796d744a5384e445eccb91db"],["/tags/Xcode/index.html","fe989ba68374d1b552ea6e1a26f6ca16"],["/tags/appleOS-Networking/index.html","264ee4ef123e7bb4efe651e652a8e6eb"],["/tags/bugly/index.html","7bcbe420e4c30110978157ac16a1ccfd"],["/tags/enum/index.html","fdf56a6e4b377cc0ae057b7737063cc5"],["/tags/git/index.html","ee0e13d730ae06e61c37dc6ad7f489b5"],["/tags/iCloud/index.html","ff5646a65d02d136bc47a07430621f84"],["/tags/iOS/index.html","b9f6c44357c8ab59bd49daf8cddf0fe3"],["/tags/iOS/page/10/index.html","cbe9baa020fc9a8b1d3a21194e2b1959"],["/tags/iOS/page/11/index.html","87e498e99080e30b7ab57dc536b3e964"],["/tags/iOS/page/12/index.html","9a1c410b1430194c99639f4dbe06d622"],["/tags/iOS/page/13/index.html","67235ee13d27a31f620642b6e2370bfc"],["/tags/iOS/page/2/index.html","48173cab9f603e93621adbce8f562f28"],["/tags/iOS/page/3/index.html","22a702d003eac15afe887b76cc069404"],["/tags/iOS/page/4/index.html","c561b851e88e1ba43c7f51d5a22ead32"],["/tags/iOS/page/5/index.html","4bec541be4fe579be8417ea09341ed68"],["/tags/iOS/page/6/index.html","d7380bddc12f89f7d1e666b19cbc6225"],["/tags/iOS/page/7/index.html","18c81a7b4c9e48466182c5f3feb8b7ae"],["/tags/iOS/page/8/index.html","51e151d32b8490885815cc03904ff12b"],["/tags/iOS/page/9/index.html","a6cb97a7f5c1ee0022edc6622319789e"],["/tags/iOS面试题/index.html","56d35f2e44551ecab6c3669a2036120a"],["/tags/index.html","dc52e78787d84a573388a0063bc9f050"],["/tags/non-optional/index.html","5fcb93099ec60b61d96cad97601e49d6"],["/tags/random/index.html","6cecd715d8b944f1cad77fffa2c3d1fc"],["/tags/transition/index.html","2bcf2792bedc48eb6ed9eb28ffdd64f9"],["/tags/三方类库/index.html","b329be3c4fe55aee15638ffe2f058b82"],["/tags/依赖注入设计模式/index.html","860baa58f77c5a859a64b8f665039879"],["/tags/值类型和值语义/index.html","7f72c9002bb84d86c8344e980ffcc02d"],["/tags/内存管理/index.html","6ccd93b98c58b2a20e367ad06b67c392"],["/tags/冒烟测试与回归测试/index.html","a1d0116dec9beff78f725eba6ec8645c"],["/tags/函数式编程/index.html","282fa904965d0c2a4348dc4ee5cffc67"],["/tags/创建博客数据库/index.html","8e21987189d1383e0c7652044899b16d"],["/tags/初始化模式/index.html","fdf077be14df5319d507fe09d617f2e3"],["/tags/单例模式/index.html","198ca3a2b1f89c65b381b8e7d952cf34"],["/tags/原型设计模式/index.html","e9619984c08936181106d9b9d4f07086"],["/tags/命令设计模式/index.html","14630c5f5b708efc8a2e2df8b28e56d4"],["/tags/基本控制流/index.html","28d596d98438194d3c509c0942ffbcbe"],["/tags/外观设计模式/index.html","f72524650096fa896991fbe76105d96b"],["/tags/委托设计模式/index.html","8714089d6a3ebf570b1bc316d0647cff"],["/tags/子类化样式/index.html","7f85b96c775724497b058d3a11441ae6"],["/tags/对象池设计模式/index.html","74c2573101817bc3285b6a90211ef327"],["/tags/工厂方法设计模式/index.html","b8e3a4e82a5c4979763e80f1d819cf54"],["/tags/工厂模式/index.html","1022671fd408762a6df7ab47eeb15a8b"],["/tags/工厂设计模式/index.html","6281d88e0150e3a6e491e6d8937518ad"],["/tags/开发记录/index.html","eb8e87bcac82a53a217ad468884830cb"],["/tags/懒加载模式/index.html","4bb23670aa23fb02d6b71f5cc50f429f"],["/tags/技术支持/index.html","deb3ed911341a892f939e079da1b8e36"],["/tags/抽象工厂设计模式/index.html","6aa2c69957fb135bc0468375c3abfcf3"],["/tags/构造函数/index.html","a4524e4a26117e2438a2de4d56d73512"],["/tags/架构设计/index.html","7c154bb3206dae929f58436f112483d6"],["/tags/模式匹配/index.html","f22f0b8775d05bbaefcf0b50eec6d3ea"],["/tags/生成器模式/index.html","a55acda32eb2facfc6368f1ca5c61b90"],["/tags/用户体验/index.html","0614c379e6e6cef3a6f521c09efd75c1"],["/tags/用户协议与隐私政策/index.html","5685364fd77f7bb26f4dde79584c84e7"],["/tags/类型与操作/index.html","09775be1a584e5743f7499fc98f9b62c"],["/tags/自动化布局/index.html","e982e567178f1e684abd137012f0b158"],["/tags/自定义UIView/index.html","a79aee71443c94040c7cf0073dfca648"],["/tags/自定义转场/index.html","0abd01e930dfb319d97ad3360ec192a4"],["/tags/自适应布局/index.html","10f1c959d1a63583b3e98c68fa616361"],["/tags/表达式、变量和常量/index.html","4bbe6371efc79fe2ca0c02fa4f012a8b"],["/tags/设计模式/index.html","88f79c6288e584dfd725418674618e2f"],["/tags/设计模式/page/2/index.html","a601fde32fa2524c6219caf27f4718eb"],["/tags/设计模式/page/3/index.html","e6aa60e442d78a1ed3cfa180e1ba4b5c"],["/tags/访问控制和代码组织/index.html","d051e86fd4bb7f7e32ef584f29dc33e0"],["/tags/运算符，下标和键路径/index.html","734ce10174c4bc6e3372fc4d71f31ee1"],["/tags/迭代器设计模式/index.html","ca3021822a912550e0d355f214ca4801"],["/tags/适配器设计模式/index.html","696b20d08553f98dba524dd2fbb20139"],["/tags/错误处理/index.html","b2de4df87886b125f69e83815eb0648f"],["/tags/静态工厂方法/index.html","7e46f656cf07ffcfec6a808e6c962f1a"],["/tags/面向协议编程-OOP/index.html","109f983c8f34cb6d5fb76a4ad1417ec3"],["/tags/高级主题/index.html","ee8c50a5a7bbf2491ebb235f2aa4c7a2"],["/tags/高级协议和泛型/index.html","842081542cd9fc9f3d92a8cddcdb28c1"],["/tags/高级控制流/index.html","ec9e41c1d5fde685434e85849d9e612c"],["/为iOS应用构建输入表单/index.html","1fe7b192eaf2a6c6b90c1b6ff1ba486c"],["/产品开发的幕后花絮/index.html","2963704ccaeee15c7b2d5931b066f6f8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6b6272c937e4a8717e8dac733d7ae442"],["/冒烟测试与回归测试/index.html","56bc670689d7fb60dc4008e69ca83730"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ce49b62698a7ee4cab8405f7a0018c25"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","75a7b0f972996f839edd1e87c07b8381"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2af9648c0e513aa5c59f5194c68d33a0"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f28dd38f19476ce98843d05d32940620"],["/在Swift中创建自定义集合/index.html","8697548e9ae97ace41af5fa2981689c9"],["/在Swift中处理非可选选项/index.html","6c3a650552187d8490bc6945612000cd"],["/在Swift中生成随机数/index.html","93ae4a31c7024c97f1dfc38e480ed70f"],["/在Swift中重构单例模式用法/index.html","4e5164595564691bac42f0ddfd63f50b"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","02358969dabf022f90113a1dcf82446a"],["/如何为VIPER编写服务？/index.html","552bd1e758d33378a4454acc879de968"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6c3a4f4f2911728e96af8033943e3ccc"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","276a088017dce55853bf41d2acce56e1"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1eb54bb65c7eaf5db1f5095b7e3cd63e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a1d8a6ec1fe138e6407fc810e5277c7a"],["/掌握VIPER架构/index.html","a49a7c00578b481715a390514cf393e4"],["/揭秘 WordPress Hook 系统/index.html","ccd3ed737f7bc0ec3067171441971cae"],["/比较工厂设计模式/index.html","0576b0ff8292ec46159ff2cc9004f17f"],["/深入了解Swift中的Grand Central Dispatch/index.html","9e9c01f9f5d16e42dffbb609a0022154"],["/深入研究Swift框架/index.html","61602e2957f74ad60341967d76b0e05f"],["/美豫直聘技术支持/index.html","f864e9d00d03da1a571d8c6b47f28f2f"],["/美豫直聘用户协议与隐私政策/index.html","9be647395c0a3b5fd87c64253ae15dec"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a7a2f46b24fec2fe13ff548c95c6103e"],["/选择Swift而不是Objective-C的5个理由/index.html","136c63f614cc1a51942b1edf9c797c18"]];
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
