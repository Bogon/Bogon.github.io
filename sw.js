/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","9a4133b3ec1677f2175c10ac85d6723c"],["/2020年iOS面试题总结(三)/index.html","08295effaba6f7e4635880cd2e73951a"],["/2020年iOS面试题总结(二)/index.html","559ec233a1ae0b099d1a0f93a70f508e"],["/Advanced Swift系列(一): Swift 简介/index.html","827550d6403f1db081cdc51c7b7ff5cb"],["/Advanced Swift系列(七): Strings/index.html","9dc721214578153814d2f0afc351695d"],["/Advanced Swift系列(三):  Optionals/index.html","e36c656f63a62761c7c7c5d2a56bbd15"],["/Advanced Swift系列(九): Protocols/index.html","030afb92026bba562ec4a084ada1e3d8"],["/Advanced Swift系列(二): Build-in Collections/index.html","a6dde9c5e49baae36478ae5812e3836b"],["/Advanced Swift系列(五): Structs and Classes/index.html","bf608ab54a54497caace65aff5b39000"],["/Advanced Swift系列(八): Generics/index.html","2f0aad8f470c11e14fe32203f4567176"],["/Advanced Swift系列(六):  Enums/index.html","cea7e27204ccdaec7c2d516d923a29d3"],["/Advanced Swift系列(十): Collection Protocols/index.html","46ad5316fc740d70c86cbb2029cad6d3"],["/Advanced Swift系列(十一): Error Handling/index.html","3a8f9d6aed0a7b746a6683f8c0333061"],["/Advanced Swift系列(十三): Interoperability/index.html","bbac23d98a563389408e95345686fe90"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fb1c361971f29e1f86db11be53c290b1"],["/Advanced Swift系列(四):  Functions/index.html","5b9a8f7faeceede7f3cecae0956ce898"],["/App Architecture系列(一):  简介/index.html","81575a7fa9a0287783f64a1b97eece1a"],["/Functional Swift 初探/index.html","8b664ea31242d11676be74d0a48449d9"],["/NSCODER和SWIFT初始化/index.html","b4f7bf6ebc7ff934d74c927e74236c3b"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","e818158b5766c0308d7cf7591cf6a9ef"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","3c07838fb68a441d376e6c5bf134b4e9"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","fb8e9716e8e137f0df5adb6af74bda76"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4a70414d42d11a0cda088cdbd84662a8"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","78922b2fb5f55b33ce812a9f54469578"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9bee44c7d2e78e7baf726f3dc356a052"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0f14045dcb5e68909417b3c2ce54f80a"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","96683cee36bebc47f0010205ed2f38bd"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","421bf61fcc2a53e5b6bb1f5e167e5241"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a9ed97688db25cf6d6850ed351c9c850"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","78b780ca5b2bbd00021e3182499cb09b"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cbaf6cd35187609f3da8842ebc8cb49a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f181d2645cdc227438955da70fc3518f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ccc45308d7bef64eec72cd9c9582edfb"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","33b873bffc787695e4a747a4bc1104df"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","0f419dc75a68b541f56e66e6d1fe7f13"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","ad703bff96e0d44f0845088172e126ba"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","13bc14e00ee598cee48d2841b28c76ca"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","55cdad4edb6be3c8fbc21a03decb27db"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","a60486cce0f257d44c2afe9441b63e27"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9e990cc4ca59fcf797d81f6a33ba136d"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","510faf729af2ba661d77c3037c5b5fcc"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","49895f9d0526c6bf12645da230f68d7e"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","74137d892aed1a743ad924845d317808"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","54d715b4127fef12f5b81ba68ff07bb3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8ac93b656a245441fe044bdec0978e45"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1b9459813f664bfcb7aaad3a9540bb1b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","5c3bd82c74530fa32c72648258144834"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","1eca02d46aa357fc56b4a70aeb2e6eeb"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ca910d4dbffb9a3184ec9e308cca7a6d"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","d19dc6182ffe7f42976259b4680fe988"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c3755a8b4abb92697676d281393472e0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6a8a8f6950f5e8e2e3cd2a488d7eafb7"],["/Swift CompactMap vs flatMap：差异说明/index.html","3b578c904f3c4dad5f1e8993f933de15"],["/Swift Grand Central Dispatch 深入实践/index.html","0da72b67c833c07d4d8fb3ec145ecdff"],["/Swift Lazy属性初始化/index.html","838fe47e40936b4f55481851e8e1a2cf"],["/Swift Promises 初体验/index.html","7c03a2128fd83aedea782499690764a7"],["/Swift Promises 探究/index.html","a41d535d44b4ebebabd66be7ab69db73"],["/Swift UICollectionView使用指南/index.html","43cca84e9933b49b8f28ba7f447af7ff"],["/Swift URLSession && Combine framework/index.html","89cc79eff402fb375c2af88d0cd1c03a"],["/Swift 唯一识别的视图/index.html","851ad1b41847abfa05972a66de2d4f6a"],["/Swift 如何学习现代UIKit？/index.html","204753cb71003cf39595a6982ecc311c"],["/Swift 用 compactMap 替换 flatMap/index.html","76c239b39edbeb8ccd1a131c73a8709e"],["/Swift 选择和播放视频/index.html","f037c1bd5251ad5380ee9c88ddfcdff5"],["/Swift中UIColor最佳实践/index.html","a8dd9d2b891d2191d149b0ed55e17a81"],["/Swift中快速简单的工厂设计模式/index.html","e45d0ac31daf5062c3cb615bcdc3de57"],["/Swift中构造函数与静态工厂方法的比较/index.html","4e03159deec42672d4b5f611042d9ae8"],["/Swift中的UITableView教程/index.html","0f86d180e40614e08411de09dba8301a"],["/Swift中的懒加载模式/index.html","ad8175c45afe43944f6b94e36effc435"],["/Swift中的模块和挂钩/index.html","64516dd5af29c710b10e42fbdbe3c544"],["/Swift使用布局锚点添加约束/index.html","8e3bcc1a038def51c7ffc9146941046e"],["/Swift依赖注入设计模式/index.html","7cc65c5b26e883bfcca15e173ddeec20"],["/Swift关于Dependency Injection (DI)/index.html","516e56297f35c063af1681b051520150"],["/Swift初始化模式/index.html","2ffe355d748e3f5f676a204c8c7f5612"],["/Swift单例模式/index.html","5e589dc5b2ad2b2ee1b75fd498c79aae"],["/Swift原型设计模式/index.html","2e1e5b00d1f314f56622c25a6bfbf166"],["/Swift命令设计模式/index.html","b20bbe775c78d67d52f2e55edf3381fc"],["/Swift外观设计模式/index.html","7818c38bb161267d7cc3c9bb8b781db0"],["/Swift委托设计模式/index.html","9b9801e21fe6505c5eb7ffd75275106a"],["/Swift对象池设计模式/index.html","fc9fc9d5185bd4ac9467ce6b689690d7"],["/Swift工厂方法设计模式/index.html","da5ade0b9e76a9456662782ef6d8ef27"],["/Swift带闭包的懒惰初始化/index.html","464e115f1814e70782685dae84006dc1"],["/Swift抽象工厂设计模式/index.html","c8d150d04b508a6611059d3542214d68"],["/Swift掌握iOS自动布局锚点/index.html","08706cf3d561cb1076fe7fe2e02ea6f5"],["/Swift支持旋转的自适应单元格/index.html","c84fc753e318ec40f96037f817204ab0"],["/Swift枚举值/index.html","9af3d4604484a9232899d540f1ea4c49"],["/Swift生成器模式/index.html","8acdf4ef4a72f5bc03e9949a4a55144d"],["/Swift结合Xib文件自定义UIView/index.html","0d29969bbda9cf7345e77900f74a0bd6"],["/Swift编写的20个iOS库(一)/index.html","a4bb0e3b8c234f6d3e812274094f41a8"],["/Swift迭代器设计模式/index.html","501a6adb0d75033653100db63ef89548"],["/Swift适配器设计模式/index.html","e302dc54b0708d148c9b21b7aee21cea"],["/Swift静态工厂设计模式/index.html","6f8c51048993013e289f213cb653fb92"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","188f6b91d560289de01e539dbc4c41e6"],["/UICollectionView data source and delegates/index.html","d090a9a7652111f95528b1d76c2e4744"],["/UIKit初始化模式/index.html","06d8a2be423b2fe858d8778f952bb411"],["/Ubuntu18.04替换国内源/index.html","57b6f1e3ae6b6a5608800bc668bae45d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","58f0a3228be23ac1dc584d06b2bff5a1"],["/Vapor系列 (一) :  Vapor 初探/index.html","09d32bd92bbfef4b3896dcd483a83608"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c7686913aae8cba6d54263f58d71c1c6"],["/Vapor系列 (二) :  Hello Vapor！/index.html","517d6dbcc404c497dbe8b2d8514231a2"],["/Vapor系列 (五) :  使用session进行authentication/index.html","6cf48934310bdf57bab8fc7d3a05cad2"],["/Vapor系列 (四) :  创建博客数据库/index.html","02277fc0246dd79cac0244bbe933c622"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3f87d6129e698732a5dce45182982e5b"],["/Xcode扩展/index.html","112946d1ca261c375950630ec5df4193"],["/about/index.html","8b50c63bfe0ad8d4ce21f45ea2530022"],["/appleOS的Networking示例/index.html","83123a0911268c9519d292090640bf70"],["/archives/2020/03/index.html","56beba3e5b4c03fdb84ff6ae115488cb"],["/archives/2020/04/index.html","341de979a37428ed9ce0c16e7c727eac"],["/archives/2020/04/page/2/index.html","2f67bf81c4e6cd6cfbbca51c50c93609"],["/archives/2020/04/page/3/index.html","e34e53f10cad7ebdd16f6586b8e90171"],["/archives/2020/04/page/4/index.html","1f85fe491e0e8390744178d6b5fb2dd4"],["/archives/2020/04/page/5/index.html","a80dc47eaad3b084e10ba85931346d45"],["/archives/2020/04/page/6/index.html","7af1bd0ddf55f8ac8d077ea23b5d7154"],["/archives/2020/04/page/7/index.html","31c9928d3e6ad353471ab75a43267201"],["/archives/2020/04/page/8/index.html","af4388869b4152fcc904b53055533d0d"],["/archives/2020/05/index.html","73aeecb76606d85a3620e0cd72bd8ca0"],["/archives/2020/05/page/2/index.html","f27c81018042fc9afaeaa9d32a1c2ca1"],["/archives/2020/05/page/3/index.html","277a205fdad3afe89bb09a23dc957e1a"],["/archives/2020/05/page/4/index.html","7b547c3fdd1ef5eba0449cc29570e944"],["/archives/2020/05/page/5/index.html","ecc2cce9aa91940a364b93b6133074e0"],["/archives/2020/06/index.html","cd16e2eacb91a9182e22a0b40955abc5"],["/archives/2020/06/page/2/index.html","e0bfa5e0e7fdb6792b2b3ee710ac68b3"],["/archives/2020/08/index.html","757fdddf10dc6ad06ea0efa3f676b00e"],["/archives/2020/09/index.html","e7ba4be54a1ba390a2cc30d78309a328"],["/archives/2020/index.html","a288979ff8d90b0b9696f2ae8be1a2c4"],["/archives/2020/page/10/index.html","04efc93e4d2fbcac111c1ef9e12528c8"],["/archives/2020/page/11/index.html","21dd469b42956c465730af3c698500df"],["/archives/2020/page/12/index.html","7587aa9cc128a03d45d35141dda559f3"],["/archives/2020/page/13/index.html","2313686086a77c53bfde3b3284c24f3e"],["/archives/2020/page/14/index.html","2147197f58d16f49558d79da4453ea21"],["/archives/2020/page/2/index.html","5c9fec63f6f8c3a2c3fe0c6a74f95c96"],["/archives/2020/page/3/index.html","13d658c165946819aec7d063fa03961d"],["/archives/2020/page/4/index.html","479fd085ad26e27003d68833269789f3"],["/archives/2020/page/5/index.html","4b38c82f82e0e22a2e5bd7d17b2a51aa"],["/archives/2020/page/6/index.html","c126df8a6341b87671b39538691551c7"],["/archives/2020/page/7/index.html","38c73db3d5091040093a136ae17d363e"],["/archives/2020/page/8/index.html","a01851b157b9f77d8f5b28110ec1350d"],["/archives/2020/page/9/index.html","6e0b899ff740552a5bc71a1870d8d725"],["/archives/index.html","a288c023c7dc853adf64509a0ba01e9f"],["/archives/page/10/index.html","d43ebef386be4244fa826b443bc3f254"],["/archives/page/11/index.html","625f868c471fe2e8bb34e3461d55d814"],["/archives/page/12/index.html","0e8ab750faf3f3f04ffa3910c591c15a"],["/archives/page/13/index.html","500337f360755a2ca41ce7e4d1f7edb5"],["/archives/page/14/index.html","46c6e031d582613aae6ba02382f9fd4b"],["/archives/page/2/index.html","c04f7c2fb3d7d14a33f96510ee33e3a6"],["/archives/page/3/index.html","77fefb44441e3b1d9f05b6d0d4d2613b"],["/archives/page/4/index.html","abb69027a4962ca85d4a9d011de0488c"],["/archives/page/5/index.html","f138380ae570c1c436928a04f2ebfb31"],["/archives/page/6/index.html","978338020e32ca82c11cd8802dd1ca70"],["/archives/page/7/index.html","5517ae19b25e108a9c8d3afb95f2e352"],["/archives/page/8/index.html","fc52eb5e1c747858b0bcec95676136d2"],["/archives/page/9/index.html","2d5c27cab78c2fd2ca6626761aee0c26"],["/categories/Advanced-Swift/index.html","01a148c4d5fa3df90a39401f09d9d169"],["/categories/Advanced-Swift/page/2/index.html","8ee9aa82fbd3c62513b8ca126032b71c"],["/categories/App-Architecture/index.html","6b449efff0565f9533cd2a88227986de"],["/categories/Codable-protocol/index.html","b1aacda7d5276e739ba42adfd17c83d6"],["/categories/Combine-framework/index.html","db088b4d4d1cc5bc90bd781e074fe55f"],["/categories/Combine/index.html","c7bc82ae60c16dbd560aab81f667f7c9"],["/categories/Grand-Central-Dispatch/index.html","d08cea0aa1ea85e7cfe34d6cfefdcf2e"],["/categories/Hexo/index.html","f7e029bf535800d9de27a6203950681b"],["/categories/Promises/index.html","6bc2d8d67ae42082c474864689166bbf"],["/categories/Result-Type/index.html","9de125b01c4320eec3ea0aa07387b14d"],["/categories/RxSwift/index.html","26167d0fb3381cd5ff4aa2f1e105a28e"],["/categories/Server/index.html","3481712ca48ce5badb876e5342e82f36"],["/categories/Swift-Apprentice/index.html","14946951416f8c350d73a72591b08a3b"],["/categories/Swift-Apprentice/page/2/index.html","62f8a90a94ded465d7faba8d2d5be359"],["/categories/Swift-Apprentice/page/3/index.html","d057837c1b1649f0d0bbbff01960c7bb"],["/categories/Swift/index.html","3b020b707c80dae0771c49dd8900123a"],["/categories/Swift/page/10/index.html","aeb46c0f23347fbc5575f69f8081fc4e"],["/categories/Swift/page/11/index.html","16738e8146e7ef0c48b5a39b50c290ba"],["/categories/Swift/page/12/index.html","5b98505143a02f133b10d52951e43c0e"],["/categories/Swift/page/13/index.html","fb61ee9ee860a86b57dc7eb9120cd611"],["/categories/Swift/page/2/index.html","86aa58bbef310b75ceda66e85c9b814b"],["/categories/Swift/page/3/index.html","d664e0d761c6d3ab45690f897c882ea6"],["/categories/Swift/page/4/index.html","0f2dfb7b7b3e93274de7a920621febed"],["/categories/Swift/page/5/index.html","c788ac8ab2e73660af4ee0c0fc8a8134"],["/categories/Swift/page/6/index.html","754e0b45e45df158049ca51c320871d7"],["/categories/Swift/page/7/index.html","1efcb575e4df05d74635fe75a0a2f8cc"],["/categories/Swift/page/8/index.html","f17965a44f764e4bb0c1155249a05ff8"],["/categories/Swift/page/9/index.html","854fb6692e6e3008a7040a46c59ff518"],["/categories/Swift5-2/index.html","abf5dd2e789cf670b33b644101f41058"],["/categories/SwiftUI/index.html","5a56b2c1f7b2079d800b1bec3de656d0"],["/categories/UICollectionView/index.html","3faffd1edabbb597e8099d2d5120dd47"],["/categories/UIImagePickerController/index.html","5e8e5f627e543c0a9a94a80be12db0cb"],["/categories/UIKit/index.html","e452f3d1463dc52e51a446626d1aff4e"],["/categories/UIKit/page/2/index.html","814d4815503201cf203c884f7c89ba29"],["/categories/UIKit/page/3/index.html","8bccdd631af5a7ac3911701440bc9f87"],["/categories/UIKit/page/4/index.html","2e8def3e50278669d278e37b721c216d"],["/categories/UIKit/page/5/index.html","1e365122b4c5b95f9b2c66924e984f4c"],["/categories/UITableView/index.html","84496cf41fb1a9f49aa551117284d16c"],["/categories/Ubuntu18-04/index.html","f66666fe3c1a37fb77569c97b056cf3f"],["/categories/Ubuntu软件源/index.html","38873b803c405a25404cab6a14a629b3"],["/categories/Uniquely-identifying-views/index.html","310d0e39b25d71867497004cc6b0b245"],["/categories/VIPER/index.html","0f8cdd18e5973132b4e4fc31d110b407"],["/categories/Vapor-4-0/index.html","5c0489647556e9824f03fd27da93ce41"],["/categories/Vapor4-0/index.html","e6cfd5faf170764e9d7ec265da6c5800"],["/categories/Xcode/index.html","1f7e74a86170027e3f812c4280fa2854"],["/categories/appleOS-Networking/index.html","ed71affa16577700ba2bd1b8ba948a11"],["/categories/enum/index.html","b3955fc0a31e9faefc468bb8676189f6"],["/categories/iCloud/index.html","8ef5d23fb43a1bd436f51d1f1daf643e"],["/categories/iOS/index.html","0e1e79ac00249cec5b4e92b02eb1d725"],["/categories/iOS/page/10/index.html","bb5ff195a5b162da89a9a20e5803efbf"],["/categories/iOS/page/11/index.html","c0a97abfa266ec8ba5d1e0fef0421cfe"],["/categories/iOS/page/12/index.html","f4375f1dd113c58cebdfe036df82a3a4"],["/categories/iOS/page/13/index.html","7ad4c622e5197c4fd20ffea936cb6132"],["/categories/iOS/page/2/index.html","5fc7b606b40fe5a60def37a0861f50b8"],["/categories/iOS/page/3/index.html","eb09be2fcc476ed75f97cec7e995f489"],["/categories/iOS/page/4/index.html","8db5e1c4839ee350b4e67b49db580c2e"],["/categories/iOS/page/5/index.html","cabe1c1a7db3d01caa55789aff25c653"],["/categories/iOS/page/6/index.html","8b8fba8836cffa916b747efb0e9d6668"],["/categories/iOS/page/7/index.html","1a8defb21bae346555cea0d5c0d80ade"],["/categories/iOS/page/8/index.html","826354855e15fc2aeaf24001855683fb"],["/categories/iOS/page/9/index.html","3f092413bb2fea10db476869dfae90ba"],["/categories/iOS面试题/index.html","1ab2ae6f1019b90e0e0bbe52f0ffe7a2"],["/categories/index.html","73cf524a248ae6e95bd0c77063247e7d"],["/categories/random/index.html","e76a88c81066bbba8432024b985f0f53"],["/categories/三方类库/index.html","6132a6ae65e5d3dd85b5e59d80c81f5f"],["/categories/函数式编程/index.html","a470629571a4ad079261fd3d879845e4"],["/categories/子类化样式/index.html","1b2fba54df3094ed0b57afcd62de0e53"],["/categories/开发记录/index.html","fe6b9c60c647837d591eb38e2ab753f9"],["/categories/架构设计/index.html","b7c59b09ee9d73aafb49412cf01d2b98"],["/categories/用户体验/index.html","344e4619f1ffc38dbb2b7a6b3bca3328"],["/categories/用户协议与隐私政策/index.html","1e846199166bde34a5f0a54b5bde3409"],["/categories/设计模式/index.html","fee36a4d12a2be1d531f93d219c3bfd1"],["/categories/设计模式/page/2/index.html","434c7a6b2a13561d9055fcd9a0a8693d"],["/categories/设计模式/page/3/index.html","e1411c0c21c727c3381e3f797a3be051"],["/css/main.css","26177058e11db022b72d7b59e12f04ad"],["/hello-world/index.html","5df17a051fcc3e0aff76b5585b411967"],["/iOS VIPER架构深入实践/index.html","38600f70c2bed6c44c66cc67bdb49698"],["/iOS 自定义视图，输入表单和错误提示/index.html","cd744722185a4633aa4d56e50b537ede"],["/iOS如何使用iCloud文档？/index.html","d3374bb145e6bb649845acf377dccc37"],["/iOS子类化样式/index.html","8b1fd965da635021525e78ed6fdc6cce"],["/iOS开发记录<一>/index.html","23c61bb02934616615ad85eceacfb795"],["/iOS自动化布局编程/index.html","15e6244c210a6dc072f45c0067c07c6d"],["/iOS自定义转场(By Swift)/index.html","c77a49f52fbd0547b8eb31c519082542"],["/iOS项目架构：使用VIPER/index.html","d7e9e21c535ac655fee8888ce24aa994"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d32248e211e57f50a18c5dbcdc9a10a8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","4bf2ba8e8cd1f8ccb445349396460888"],["/page/11/index.html","89448aa9d00e6d902645efc9cdcca8b6"],["/page/12/index.html","fa321e1c8cb4e2b8767b568e54c43edb"],["/page/13/index.html","37c4a18931ec8f577f8ba3148c7a9962"],["/page/14/index.html","410bc0425c1bf50db10344137d0ee6ad"],["/page/2/index.html","aaa276e3a2e304a0da43c384cac05334"],["/page/3/index.html","4fe2c2108e45d587c0186334fdf579d0"],["/page/4/index.html","ac1789bf97bc205f6b35f8d783d9b40b"],["/page/5/index.html","a9bc4266a2d5c3d328fdb5907a033949"],["/page/6/index.html","4f2a2951779039252a7dc536e27dcd6b"],["/page/7/index.html","93b38d84558981a28af7c718f0f45fa5"],["/page/8/index.html","1b5cd2377d149a8fc2eb27b2886ceb31"],["/page/9/index.html","5b32d9353eaee17c0ed357d2ff70640f"],["/schedule/index.html","b024e21d08b69c14961387dbde388794"],["/storyAppPrivacy/index.html","9b0239f462c6ea53356214b017bd6fc0"],["/sw-register.js","c3ba814b164f81b1e73f4decb30e94b6"],["/tags/Advanced-Classes/index.html","1caf1988c2be3903fe66ae047e1e6dae"],["/tags/Advanced-Swift/index.html","f9dccc6e70fb23f67cb699cf4d1e7bec"],["/tags/Advanced-Swift/page/2/index.html","a08bc61ac101235536e2ae1faa49cef6"],["/tags/App-Architecture/index.html","01ce4fc1b7bccc8de293c78bae977234"],["/tags/Arrays-Dictionaries-Sets/index.html","8424abea0bea68c8bf5afa7ca7f39d63"],["/tags/Authentication/index.html","710ffd2667f67026955908dbbcb91460"],["/tags/Build-in-Collections/index.html","77d228e63a7f5d959844d34e46e86f38"],["/tags/Building-Your-Own-Types/index.html","47369294f279503214f62078c213fb13"],["/tags/CMS/index.html","527f877496ab9b3cb4b26b71623c2f4b"],["/tags/Classes/index.html","2f8f92fbdd865ccda0e3d944c264ed9d"],["/tags/Codable-protocol/index.html","b97b1f08d77591a7cedba5008d08a147"],["/tags/Collection-Iteration-with-Closures/index.html","ab05e36f928af7031b414b3a7b8f4636"],["/tags/Collection-Protocols/index.html","06e0dd4ca4525891df14d7be7f235d3c"],["/tags/Collection-Types/index.html","c607ae8b23363719f16273d893d77ad0"],["/tags/Collection/index.html","8d4b9da128643d2c97fca8dd0446ad4c"],["/tags/Collections/index.html","221a479fefdc8a70ce5f5521d158870c"],["/tags/Combine-framework/index.html","528cc634010279cad96d3ff5a731c85c"],["/tags/Combine/index.html","8fc59589f5b8fb4efe6ff76158525cb9"],["/tags/Dependency-Injection/index.html","064225de4ec70af929a2c971ceaf8c7c"],["/tags/Encoding-Decoding-Types/index.html","6014e43916abd6d8b78a2347bacd0fd1"],["/tags/Encoding-and-Decoding/index.html","47b8424090ca514167d712b564633d2e"],["/tags/Enumerations/index.html","669cbfacb420d3b6ebe4e87ac28ade1b"],["/tags/Enums/index.html","270cebd6f4d8a9cdaf5e465fea7bb014"],["/tags/Error-Handling/index.html","699d0d6de1aec2ded9a9dce37bc74fc8"],["/tags/Functions/index.html","97b5d296d7078098c0984ff6eff556ba"],["/tags/Generics/index.html","2fc0a5b5455226a9d366f4e0d3e17abc"],["/tags/Grand-Central-Dispatch/index.html","565d77dfa86891051c5265892a6c76d7"],["/tags/Hello-Vapor/index.html","ff1a1e456c74a4dffc7462b2eeef0192"],["/tags/Interoperability/index.html","053567fb1dc34cb934d30a4c2806320b"],["/tags/Introduction/index.html","eacd5b31f08597ae776e4eb6662a1ee2"],["/tags/Leaf/index.html","434d0f4f476ae7175d95b64eb075b3ff"],["/tags/Methods/index.html","9460049a175c2ef7e20357f2a0b49f1c"],["/tags/Modules-And-Hooks/index.html","ab5d2db7f288e3d2866e68d453eae0d3"],["/tags/Optionals/index.html","850b8c7a1a5eab7d259fc8e6e6ab2fd2"],["/tags/Promises/index.html","1bbe7e162d5966811433e69c6b29f013"],["/tags/Properties/index.html","612488459388e028a1e26e25aaa30b43"],["/tags/Protocols/index.html","d61f81c8be9e755fcc8f9a7fedaf538e"],["/tags/Result-Type/index.html","ef24067176fd5cad5ccbdf722ab6b217"],["/tags/RxSwift/index.html","6f04146a296b158398da3f498df1c5dd"],["/tags/Server/index.html","c3f25137d20b407963658bf8a67dc398"],["/tags/Session/index.html","b5928f925b657bf024246a3b87b56ab0"],["/tags/Strings/index.html","7450ec90adb70d6cb54d9c3d21447aa3"],["/tags/Structs-and-Classes/index.html","b9bee99df7db754d24eadb8eab353e1c"],["/tags/Structures/index.html","a96a870ef1b593965edf0768f5db09c0"],["/tags/Swift-5-0/index.html","026b173d83f6e2b165420eb69e97748c"],["/tags/Swift-5-0/page/2/index.html","16303c08cef95c771eb5196b6467d583"],["/tags/Swift-5-0/page/3/index.html","c163641b975a3a7e9a83e09f02c55ff3"],["/tags/Swift-5-0/page/4/index.html","b52c9123457806d9f06e842ab2ae387c"],["/tags/Swift-5-0/page/5/index.html","dc2c820fa671479cb371897a9dd7bb2b"],["/tags/Swift-Apprentice/index.html","bae51c27e80cccc423b06f7dfdf48acb"],["/tags/Swift-Apprentice/page/2/index.html","80062d5ef3ec6959aea3b0b14fa5d026"],["/tags/Swift-Apprentice/page/3/index.html","ed1fc8cce3110ecdc9251bcb5b7a873f"],["/tags/Swift-Package-Manager/index.html","a823c0e056e21589e4f4ba3ebefa47f7"],["/tags/Swift/index.html","ca81dec9fe4893b33b598e03924a9354"],["/tags/Swift/page/10/index.html","dd5da8e121bbe1e25e5d8f9a36d21543"],["/tags/Swift/page/11/index.html","865baf30760b4c66a6b8e8853e47e6d1"],["/tags/Swift/page/12/index.html","2b64c9afe4beaaab9e133d1f2e7a3d49"],["/tags/Swift/page/13/index.html","e4922b4165b917edc581c15d3f1eaee7"],["/tags/Swift/page/2/index.html","8f375f88439d38bfcf0f3e72fb3efcbb"],["/tags/Swift/page/3/index.html","42bbe3c1bee748ad6cf27dba30a2db44"],["/tags/Swift/page/4/index.html","29183ad5b37df150722d15d2e99660ed"],["/tags/Swift/page/5/index.html","ba0b9d35f95206ae75c2748eed364313"],["/tags/Swift/page/6/index.html","4f8226aa649c65bda813de9e558255fd"],["/tags/Swift/page/7/index.html","9cbeeb146473357c0148c0bc1c3ff295"],["/tags/Swift/page/8/index.html","10b46f50415b0b63d75295ecd6cbe2b3"],["/tags/Swift/page/9/index.html","6ceeaa18f658408bde1b44997e832fa1"],["/tags/SwiftUI/index.html","fe1459f993a082d9b63d98cf8f9aacb0"],["/tags/UICollectionView/index.html","12583a5b7e79a7e44b21b9ceaa5f84dc"],["/tags/UIColor/index.html","c0623bc133bc972e02d3ddd6ca63c24b"],["/tags/UIImagePickerController/index.html","6479c973153782a8946e1622d3cea74d"],["/tags/UIKit/index.html","13afe59fb6002e711c7a03951a821f5d"],["/tags/UIKit/page/2/index.html","ad263c530f2eb883f3eac8e17ce1e001"],["/tags/UIKit/page/3/index.html","c225cedd59868e5efc306ec783b3ee48"],["/tags/UIKit/page/4/index.html","dfff3e2691ed8978198edde4a3fc6cde"],["/tags/UIKit/page/5/index.html","96069948d3efb2b6850a8c3937f36a03"],["/tags/UITableView/index.html","36cf0d1a2226a6fd8f419fe1e6cebe2b"],["/tags/Ubuntu/index.html","7886933d94b32bc7da22e716644e4d7a"],["/tags/Uniquely-identifying-views/index.html","f1f8663da64499bcf2ffe42293488387"],["/tags/VIPER/index.html","fd9fd365a40aa371552ab19b446d5042"],["/tags/VMware/index.html","506fe983c871379884606bd9592ffdaf"],["/tags/Vapor-4-0/index.html","4ccfe783f76bcbb1f29afa528ef72a23"],["/tags/Vapor-初探/index.html","ede4eb795095eab863d87ff7d0e15e19"],["/tags/Xcode/index.html","f45cbb9998dfcf22bf4c98f4557167cd"],["/tags/appleOS-Networking/index.html","b71ac5518200b8f1f1180396df2c44cb"],["/tags/enum/index.html","ff92633e18c6ecbf4b37ee13154e7c43"],["/tags/iCloud/index.html","5ea487c7b48d1aaff78036db1d6e4f28"],["/tags/iOS/index.html","ca36002e38183e467434b18945401e17"],["/tags/iOS/page/10/index.html","8b070b61b878c6f002c0e28688d50582"],["/tags/iOS/page/11/index.html","1cf9ca0724fac0751c607802eb84fe0b"],["/tags/iOS/page/12/index.html","f17e60193ecdb6bded8dc1e28846a2bf"],["/tags/iOS/page/13/index.html","3e7e4c381e3d13303acfb12ebec4eda3"],["/tags/iOS/page/2/index.html","6a8e4871c695ca4130fc72ca270c7b53"],["/tags/iOS/page/3/index.html","5d6b6e59b0e1aec775f99d6be6f59229"],["/tags/iOS/page/4/index.html","64bbcce01e87ddcfe7c0636d12e03b0e"],["/tags/iOS/page/5/index.html","2cdce18b1b255cef00a3b1e65e457979"],["/tags/iOS/page/6/index.html","2b86065f1d65a4a0e4f702ff6272bee7"],["/tags/iOS/page/7/index.html","60b139e15ac7c99d5b385e58f823c448"],["/tags/iOS/page/8/index.html","131476f7619c0f876f5c4ef24d5abd4a"],["/tags/iOS/page/9/index.html","079cfe7660fc4dac3b3a63f151246fd5"],["/tags/iOS面试题/index.html","cabe217dfda7da64383059b0af73a3c5"],["/tags/index.html","60a61cf2b3ea87cba5f889f6c86bc1d0"],["/tags/non-optional/index.html","4130e153c6a1ce2dbb3113c955af90e6"],["/tags/random/index.html","d2bffed96db7e6fb856a010bf2be6c2f"],["/tags/transition/index.html","2be825d2f7e794790b282fc07c879ff6"],["/tags/三方类库/index.html","cff91157f6963474a833b2a1180c3338"],["/tags/依赖注入设计模式/index.html","742418713984cd6b78e6230856a89c03"],["/tags/值类型和值语义/index.html","9076ff4cf96a99280bba7c0cb02e2895"],["/tags/内存管理/index.html","9bac2b42c67fd349661e1c3bcc53331f"],["/tags/函数式编程/index.html","3b3a10d33c05cdb6c96ea76722fc9f20"],["/tags/创建博客数据库/index.html","ea5bf69cffb0d14072c2e3f0e20fac71"],["/tags/初始化模式/index.html","85ecfdb64abfe606fe9e195820dd01a7"],["/tags/单例模式/index.html","428cde4e5078ae277c44e3755698d481"],["/tags/原型设计模式/index.html","f63085c6b4167f647c83693c5436ca8a"],["/tags/命令设计模式/index.html","e5d7f3b070d1dba42e995bc35bc0916c"],["/tags/基本控制流/index.html","89ba6dc2f61cc75b7e17233c43647345"],["/tags/外观设计模式/index.html","d14f03799342958c8806cf4bebd1edb6"],["/tags/委托设计模式/index.html","b1928f5e8040e227f47b1268b4e8ab5d"],["/tags/子类化样式/index.html","3f5916997a35b96055b9aac55941da4f"],["/tags/对象池设计模式/index.html","ee60ade89dde9ff480b6da83694a2529"],["/tags/工厂方法设计模式/index.html","0e13c7fafbbd0fe05e33cde109acd2dd"],["/tags/工厂模式/index.html","14da5a85dd992ab082a9296d7f8bbcf0"],["/tags/工厂设计模式/index.html","2a7ca9d0963665891b0e2cb12b0f2e24"],["/tags/开发记录/index.html","66098d5a2c667d1de81aeebfa2e63a43"],["/tags/懒加载模式/index.html","6970191e3e5dddc19402356481af7240"],["/tags/抽象工厂设计模式/index.html","016e25c4ec02e411f25cee0df1771876"],["/tags/构造函数/index.html","e074c0e210ba6943a6bbfdbf33f96b40"],["/tags/架构设计/index.html","b274928b45096da630f7667230b901f5"],["/tags/模式匹配/index.html","bf8bdd5d98ee898385aa9c7643beaabc"],["/tags/生成器模式/index.html","383e64c459bfd85af26308988d9410c8"],["/tags/用户体验/index.html","4d1b72b4046da3ff7b757a6aa2860ee3"],["/tags/用户协议与隐私政策/index.html","6524ca6720cec3d65341afd47c805c40"],["/tags/类型与操作/index.html","564f09158534dcb2750df00cf60d47bd"],["/tags/自动化布局/index.html","4c62a57920e8cd2e9a22886a874cc9a3"],["/tags/自定义UIView/index.html","9a4c5a66e5626e492980fecadd2ca09e"],["/tags/自定义转场/index.html","8e9e5a3f02681917e61424a51351702f"],["/tags/自适应布局/index.html","e3a508112a14b4379cdbb255d5cc5cd7"],["/tags/表达式、变量和常量/index.html","f2c0bed8924924a82def0dc8859ff291"],["/tags/设计模式/index.html","c16c224ab96f575384c60700c8e78942"],["/tags/设计模式/page/2/index.html","1ba83ef9f4778b6a27ccd9d459aef049"],["/tags/设计模式/page/3/index.html","ef427017f6201fa0733cf30fc558b8cf"],["/tags/访问控制和代码组织/index.html","07e6d7574dd9b56c2fa8042ca8dbe63f"],["/tags/运算符，下标和键路径/index.html","71f8d3daa00ced371ac1edf5595bf241"],["/tags/迭代器设计模式/index.html","ba2f10996ce52f7cb2274b95f165c9dc"],["/tags/适配器设计模式/index.html","bfa5665864045e680d671bc89b3d015d"],["/tags/错误处理/index.html","855641318eb6500ceea7b1b90a1b4901"],["/tags/静态工厂方法/index.html","577cbdac0f16bc918c2e117f13a9a52b"],["/tags/面向协议编程-OOP/index.html","663d69264e7882cae39e8d5a6fab753f"],["/tags/高级主题/index.html","23faf56ec87388a78a286d496754b177"],["/tags/高级协议和泛型/index.html","081b0958e8c623ce38ca73208028d18d"],["/tags/高级控制流/index.html","3f39f011476be1528424f699d322c45d"],["/为iOS应用构建输入表单/index.html","074695922154e00b471d047275edb518"],["/产品开发的幕后花絮/index.html","65ddf10cc346f2610648facb3f0202bb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","171fa87e153f024db4ca609447eeceec"],["/冒烟测试与回归测试/index.html","12323927657c5af6a1cfedacf9b1eb06"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","edeb181429069490dedb687ec696edbf"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","925e48a6836d71bfb8e20c097760f897"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1764bc2b9c05634c4afb7be3592268f8"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","146201b78ee4c7be05b59ecbdea0a195"],["/在Swift中创建自定义集合/index.html","67e280e84adc8014544dec4600377b09"],["/在Swift中处理非可选选项/index.html","eda6aecc6b2299779922dbd6f293bacb"],["/在Swift中生成随机数/index.html","dd6da8715719be4dcd61a3c3fa0e1449"],["/在Swift中重构单例模式用法/index.html","aae37650b1c25a1ab3a4e66344c75054"],["/天天兼职用户协议与隐私政策/index.html","87fe089b04dfab4bab13c5c752b7865a"],["/如何为VIPER编写服务？/index.html","f30a87334ed74c4c68a7fe7bcc66a293"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","177e104c4bd97a12bb4aec47f8843842"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d5315d1beced55f7b806ae82f6bdb3da"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","417997528dd44fb83cc3e997e05c7e85"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bce00ca1e98dd6ce2dcbbfa099af44b7"],["/掌握VIPER架构/index.html","533c6342fc1148be49e233523e69a25c"],["/揭秘 WordPress Hook 系统/index.html","ff6d1450494c6ba6699cb347e1982c44"],["/比较工厂设计模式/index.html","a4ac835f9d100e67db5839d903188d0a"],["/深入了解Swift中的Grand Central Dispatch/index.html","6da4605db84128dd8d85160dee032b0b"],["/深入研究Swift框架/index.html","8dcafc52f63021a9a87ec8fd7f5f82f4"],["/美豫兼职用户协议与隐私政策/index.html","391451c5872a27450097a190c56b07e9"],["/适用于iOS开发人员的VIPER最佳实践/index.html","09fb6c449e5f197dab45608626369c51"],["/选择Swift而不是Objective-C的5个理由/index.html","c3cc688fb1a9af4a6d3a289395325885"]];
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
