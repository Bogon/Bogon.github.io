/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","1ad09491594a46520cab49b8999b0ce9"],["/2020年iOS面试题总结(三)/index.html","81cfe5efd1b3a008981472cde142b280"],["/2020年iOS面试题总结(二)/index.html","245d59b78687268e9d27d3cf549db572"],["/Advanced Swift系列(一): Swift 简介/index.html","39ca7df13be7d7a73806b07a00b6b3a0"],["/Advanced Swift系列(七): Strings/index.html","268d61e90f18e0bd1e0731df220975e8"],["/Advanced Swift系列(三):  Optionals/index.html","a2699b4190a7295050852502d5600ad4"],["/Advanced Swift系列(九): Protocols/index.html","8145ed29c3ad88adc1fee3e07f0d5a22"],["/Advanced Swift系列(二): Build-in Collections/index.html","ac91775cb1d1cc8357fddf4c5026f7be"],["/Advanced Swift系列(五): Structs and Classes/index.html","8d8b31cbe9c112769b13cf85cd554f67"],["/Advanced Swift系列(八): Generics/index.html","dff56e53410373934e510dcad5f27884"],["/Advanced Swift系列(六):  Enums/index.html","abeb48947289183ada7ea40be406c33b"],["/Advanced Swift系列(十): Collection Protocols/index.html","3fab4910657a411c211ce5d36abbc1d3"],["/Advanced Swift系列(十一): Error Handling/index.html","91f72ec66fa09a057f99c81f461429ee"],["/Advanced Swift系列(十三): Interoperability/index.html","996d9382ce5efea2c566ce103f410de1"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","cd382911576b4bd4f70f17ffd2b58f48"],["/Advanced Swift系列(四):  Functions/index.html","f8f5106b4baa231dba01cf7a2c164d2e"],["/App Architecture系列(一):  简介/index.html","d9ea63d9a3507e854b699992267c3944"],["/Functional Swift 初探/index.html","464310cf8897a73813990803633564de"],["/Git 使用小技巧/index.html","6c996746c8240a8084d3d9cb79ebc37d"],["/Go 基本语法初探(一)/index.html","ae778f0b45cd58782c3e46abd1230f70"],["/NSCODER和SWIFT初始化/index.html","8e0cb2a20cf25d88aac3f9dd80b35862"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","11cfb8c563895d6b28729f0f55cdbd45"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","902acf5d9becf85a2e385d4bf5ea7b2f"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ce5e39f4a647b3ddfef5d05d711f9216"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","bf724babb486a51c8ecbcfd55ba17c59"],["/Swift 5使用UIImagePickerController拾取图像/index.html","25eb8a081ebd64440da942977feec3af"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8c7b243ab2ab506f6b28993de4cb87eb"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","dbfbae2b9b58422de345a098c6b0ebc6"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","944c692bbb598f368e71527cadfdf9fa"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7db329f08101d09072b0cfe6c09777c3"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","383cd9a84cbf5a98b518e1f4ca91967a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","60c1e330d72fc998a3cac6d6089fc9b8"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","7e74df4bc07df3d4de4625b36f25270e"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","83576b9b9d6f0978cbf070c499a88a1b"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","ad37514bdbdedf3a4b2886d2d235615d"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ef70a182fd2d571927fc1278c99e85ee"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","29ad01ad9c63bab6ba8e3b062df85f46"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2b3c4fa2d8870a9e39392c44834758cf"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","a9c03b6f010eb325733678e13ba3e13a"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","580c3597f9031fc5933fbff26110cdfd"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","63a208959d60368db044e696f05786f4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","4440bc3a23fa7267f50ddb9f43877ea4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","b535431fb24136252799ea584c854e65"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","595b9cf04fff78030f282397a3c37fd8"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6d335c1184375bd47dc81589ec2c58bc"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","69a2d2162ca91325858451a26b0e8dcb"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e2e76ec6d0f3c5fa5d5dd6db56ae458b"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","dc128742dd8c7a6de4115fea6de4e682"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","0bff9d74cb02c8c9a21b594d3241f457"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c8d332512ae970cf4d56a5648d079f18"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","896ee8e9ced5ee15062360b818dbe49c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","96a109138f5b2d87715bd29e792b9dc5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","7ed69833aa97c4bb9bbc10026eceae0c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","4da50804c0183a5e2672afe8485b453b"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","8bf02b0386815037f25365bf9e1b6918"],["/Swift CompactMap vs flatMap：差异说明/index.html","ddf631af8057a75f11f2a11a2d234329"],["/Swift Grand Central Dispatch 深入实践/index.html","f464b738d279e630932381f1824cd75a"],["/Swift Lazy属性初始化/index.html","4fc2109b1fe96e92e6c33c0cc6a4f828"],["/Swift Promises 初体验/index.html","efdb1c6adfb51880278ec28626751f75"],["/Swift Promises 探究/index.html","45bef2cf78410985d7c1882df86238cf"],["/Swift UICollectionView使用指南/index.html","b04693e021962d63911e0ab8d20aee50"],["/Swift URLSession && Combine framework/index.html","0e5610cd85c3d562635fd89cf4ef48f8"],["/Swift tips/index.html","44fddba9f351e4445231e90aa9a443d1"],["/Swift 唯一识别的视图/index.html","b2f586cb199eee147dcd10cffb71fde0"],["/Swift 如何学习现代UIKit？/index.html","475d73849cb2da8342823ee31df00a47"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","9eaae3a266acd9c2865c5344fe699a7c"],["/Swift 用 compactMap 替换 flatMap/index.html","a4b33d9bc38975ec5afb3abcbd8a8cc8"],["/Swift 选择和播放视频/index.html","8371a34e507d6ce667ef909cb56421ce"],["/Swift中UIColor最佳实践/index.html","0aa82e70f542163cda7a37660ec546a9"],["/Swift中快速简单的工厂设计模式/index.html","14a9dd25a82ae41d67432e76a6469b19"],["/Swift中构造函数与静态工厂方法的比较/index.html","f345d0f6453b039d63a9ee0f15be3d56"],["/Swift中的UITableView教程/index.html","9b4e26d2291dc65044a42c33ff3bbe30"],["/Swift中的懒加载模式/index.html","e455d322d9a12bbe3088e461b26c1b2b"],["/Swift中的模块和挂钩/index.html","8564b983aa41c2899d9b90c2f45ff1f7"],["/Swift使用布局锚点添加约束/index.html","a35d789840d6a527dc3f76aeb5302157"],["/Swift依赖注入设计模式/index.html","4dd30f3201fe1d91092397478e7e9a00"],["/Swift关于Dependency Injection (DI)/index.html","81c7205a80a22fa1ce9f20a800a13317"],["/Swift初始化模式/index.html","e4198a02880b33de4923563e05b9d1ac"],["/Swift单例模式/index.html","35c4f20623feab7accd92a2bacd60e22"],["/Swift原型设计模式/index.html","161e496d679886e6692f320b40dfedc4"],["/Swift命令设计模式/index.html","8403ac584e2779cd4d7005bafc4e5466"],["/Swift外观设计模式/index.html","a27a47572af9929939d5b5090cde4319"],["/Swift委托设计模式/index.html","e5764df0834f109880e7ac68111e2f33"],["/Swift对象池设计模式/index.html","a2c88b2db4140bd12a8e7e09407af98f"],["/Swift工厂方法设计模式/index.html","72569c938c0f57fd85d3ac1d99b0b0f5"],["/Swift带闭包的懒惰初始化/index.html","03dbfacb915f24e276a2ef11bf99687e"],["/Swift抽象工厂设计模式/index.html","fbc24eaeb375817bc729614c3b85f79f"],["/Swift掌握iOS自动布局锚点/index.html","1c4dd40e9b8e2ddb55e5edc313d65d86"],["/Swift支持旋转的自适应单元格/index.html","4bc2c79b7cc28255fec00f4e3a715616"],["/Swift枚举值/index.html","4f0b5b47f713c07bc8c2f056bbf9add9"],["/Swift生成器模式/index.html","1341ee8f8e0eb86cfeff8a7c3e97ecc8"],["/Swift结合Xib文件自定义UIView/index.html","ede44fc4014e572aae1ab9d8373e94ce"],["/Swift编写的20个iOS库(一)/index.html","1f3f3b8bb3c2d1c33a6a078cfbc4f4bd"],["/Swift迭代器设计模式/index.html","630e6942b4c3094edb014f1f0968eec7"],["/Swift适配器设计模式/index.html","b46b7a485e0c6d980e6ac4631487a6e8"],["/Swift静态工厂设计模式/index.html","0d677f11ca7a62537c49dc58033ba319"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","4033e5c9011f9ad4fe0b78f08e85c07d"],["/UICollectionView data source and delegates/index.html","c8b88c67a9a23e8b3abe1104d2edfba5"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","d792c87c7f71b4688d3bf907d0f18365"],["/UIKit初始化模式/index.html","0d0f6112ff9da55e7baacfeafa88cc29"],["/Ubuntu18.04替换国内源/index.html","fa5c21b7845c9883827afb7ee4fb0eed"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","65d6cc59028221b641dea6604fac8f37"],["/Vapor系列 (一) :  Vapor 初探/index.html","973cdf6519b88da0281c95c5805cacb9"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","094e0a6d425d493211131de06b450035"],["/Vapor系列 (二) :  Hello Vapor！/index.html","325a01b6a1484ae33db09ec461a9802e"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b14e2d76ed98b0ff3716e856b7090b32"],["/Vapor系列 (四) :  创建博客数据库/index.html","1d71ef5518e546ba94e5836fd38f7755"],["/Vapor系列(六): 徒手撸一个CMS/index.html","ceae36438bccb69d8f014ddeff2d6e39"],["/WKWebView与Native交互注意事项/index.html","1f3f72735dd6dfad7b2fa534ab20cc82"],["/Xcode扩展/index.html","f98c9c1e19b677b10650ddf8f7eb58db"],["/about/index.html","d5615ddd7238e91c006a356a04905e85"],["/appleOS的Networking示例/index.html","64056be48b931ae3981b49af102febd6"],["/archives/2020/03/index.html","4faad006cabd63ac20d35d95044ecc60"],["/archives/2020/04/index.html","7391f9b845b7f06f7d98eb6f0af73d24"],["/archives/2020/04/page/2/index.html","72b7709f7798bab7b91bfc093f98f8fe"],["/archives/2020/04/page/3/index.html","646ea3ebb91b9217c811d0524d7eed08"],["/archives/2020/04/page/4/index.html","c60647cd7cc6ab3f3ffc85b5379bfd1c"],["/archives/2020/04/page/5/index.html","ce89a907bf9d7d58be979df832f00b65"],["/archives/2020/04/page/6/index.html","d67acf6cea54f110026a2cef8e915ea0"],["/archives/2020/04/page/7/index.html","eefbd52176cb48384c35c0ee74afc208"],["/archives/2020/04/page/8/index.html","53fb7d1fae5a033a52c84bac59a2a4e9"],["/archives/2020/05/index.html","8b2ee2757482ab5c8897ef26cfa06245"],["/archives/2020/05/page/2/index.html","159c1351fe7e071593ae40ae3010ad62"],["/archives/2020/05/page/3/index.html","081fa0ad52d87f58aaa8d43c91fb869a"],["/archives/2020/05/page/4/index.html","8f5b7901a1190895deb2e81410098e3f"],["/archives/2020/05/page/5/index.html","89c3e730fc3402651bd0b98d334c8dc4"],["/archives/2020/06/index.html","9e841e7d712549002d4eea003a5c3b49"],["/archives/2020/06/page/2/index.html","82dc36bdd0fb52ba58aac34f45d096a8"],["/archives/2020/08/index.html","8baa3ec94ac87ee5a2c9aa2b5a493e35"],["/archives/2020/09/index.html","53af982670bee8b37035cacc43c7942d"],["/archives/2020/10/index.html","0ee430883257b5f285979a0db823d561"],["/archives/2020/11/index.html","955431c60a01fe28cb79920b5c4246c0"],["/archives/2020/12/index.html","b05f35543737e9aa8c59144bfd0b115c"],["/archives/2020/index.html","10252439b872aae0fd1e927e71179481"],["/archives/2020/page/10/index.html","829256245988d64c19f7b48e195181dd"],["/archives/2020/page/11/index.html","cb89e699d0777d76fe3e1ae47933dfc4"],["/archives/2020/page/12/index.html","e8903c23424d055bc76ca683f50f1a57"],["/archives/2020/page/13/index.html","27c159d583cca343ec3f924975925dcb"],["/archives/2020/page/14/index.html","18a925f91a29d849b9b2ba4488f20404"],["/archives/2020/page/15/index.html","3c76b588f651dd39dda0b87147643551"],["/archives/2020/page/2/index.html","10cc7358f0c41f0882fa6789148a89d2"],["/archives/2020/page/3/index.html","54436ec97cd815ead33754c0e99143bc"],["/archives/2020/page/4/index.html","227f65a1ffb9065d3608bd6f7512bf6e"],["/archives/2020/page/5/index.html","69bc78e8f49d7246655b206505930b57"],["/archives/2020/page/6/index.html","337743818cf61360a34287dd6a20b520"],["/archives/2020/page/7/index.html","1d59f9d607d893b1d0fde574cb8dea8e"],["/archives/2020/page/8/index.html","61d08d9fae95b0936ff8fd36f3cd7260"],["/archives/2020/page/9/index.html","5061c9710958e734e67efb0a40c36bdc"],["/archives/2021/03/index.html","78ebcd6ba69b09542b1c049bd7fde5ac"],["/archives/2021/04/index.html","525480be202a1164cd285e49bbbceb25"],["/archives/2021/05/index.html","21d97a0f7abd2407f40d63a522e02db9"],["/archives/2021/index.html","b6ccae1c50927c2ffc158d14eea1a7d1"],["/archives/index.html","6da80db8b3c42623b118ca13967ec935"],["/archives/page/10/index.html","c476b6252ff5797d2609410897156a78"],["/archives/page/11/index.html","450208d6c478dfe64e69d3bbea5e507f"],["/archives/page/12/index.html","b7bd609ce9b5460924b1ba1bf63b2c24"],["/archives/page/13/index.html","97af1a86fb9d019923b1e48ff749ac56"],["/archives/page/14/index.html","c440b76e1e9ab4c1b25e51f6398c67f3"],["/archives/page/15/index.html","54897c9a5ea944561c23d4dfaec23e6b"],["/archives/page/16/index.html","e9b61f8ec9be7cba639abee4df5da1df"],["/archives/page/2/index.html","fed0213cd3932d31370519b3966d6d4b"],["/archives/page/3/index.html","e94785a5b5d3bb15fb001540b1fbbf69"],["/archives/page/4/index.html","489966206231c0ae76781429004965f1"],["/archives/page/5/index.html","c07a4118ec674348d9779fe866ecee8b"],["/archives/page/6/index.html","4e0156ffec76b779f168f7bc396a2144"],["/archives/page/7/index.html","9d6abc90bd0154b29c1f48c56c40d35b"],["/archives/page/8/index.html","0910ae576a4196ee222507eb960d2a52"],["/archives/page/9/index.html","533297ee9035272e60e7bfc8a9de0d83"],["/bugly 上传dYSM文件小记/index.html","083f8e9887067553d214b58896ec7f4c"],["/categories/Advanced-Swift/index.html","9eb1e07a402833446234873df05baf0c"],["/categories/Advanced-Swift/page/2/index.html","a37e58a0f9176f01d75bc284b1832d54"],["/categories/App-Architecture/index.html","d6e13ca2b930f246afe425b38c0a3460"],["/categories/Array/index.html","7954a1b45510477374bad8edfed29a88"],["/categories/Codable-protocol/index.html","5deea6efe90208f88dceff568d72dcd4"],["/categories/Combine-framework/index.html","236a46fc7800e7bf0a568b3dff4ef4d6"],["/categories/Combine/index.html","58830afb264b0520a2eddbfaf8a8119f"],["/categories/Go/index.html","d6c02014c694d95b22f98d3245332656"],["/categories/Grand-Central-Dispatch/index.html","07d90abe309aef8901692d9f04e18172"],["/categories/Hexo/index.html","0bf0eaceca2fc98e35d37fe1e07b1902"],["/categories/Homebrew/index.html","ed1b8552e157a036a2788b6f5340331f"],["/categories/Promises/index.html","f9bbd1d2dc07435b23e0f1e291fe7719"],["/categories/Result-Type/index.html","9e3922adb23ccff44769999b5ebdcdc0"],["/categories/RxSwift/index.html","5a06128a8b61a0c51423b93fffa6b4a9"],["/categories/Server/index.html","f6d11558e26fd8e3c6e93db64cbfaaec"],["/categories/Swift-Apprentice/index.html","4c8c4afa9986a0ab3caf88ed55a08189"],["/categories/Swift-Apprentice/page/2/index.html","25e375bb3db661bfafa763614d984b08"],["/categories/Swift-Apprentice/page/3/index.html","bfea668f30250c535b68bf8743c14073"],["/categories/Swift-源码阅读/index.html","f44fa640b41b23a05b28dbf4dc59ed91"],["/categories/Swift/index.html","d87a6e7ad343b8c6657e58f164521d4e"],["/categories/Swift/page/10/index.html","e911ef66e911f8de42a729ee1c9676cf"],["/categories/Swift/page/11/index.html","946a6c1937d21fa1f9a91e55352b8f0d"],["/categories/Swift/page/12/index.html","8161a770bc645f1a9af3b5a15abf38e6"],["/categories/Swift/page/13/index.html","757f5239d256cf7c6f4cdf0e5f4a06d0"],["/categories/Swift/page/2/index.html","a3f5fb8050f564b6c54898e24656203a"],["/categories/Swift/page/3/index.html","7ec8cce04491e2a3bfd3f43366570a25"],["/categories/Swift/page/4/index.html","1248e3971e3a71cffb0c47f0e40c470d"],["/categories/Swift/page/5/index.html","37a0d495f23d05cd90b7a4d40293854c"],["/categories/Swift/page/6/index.html","7f064f9b8dd8ebb5b9801b1421379927"],["/categories/Swift/page/7/index.html","41a64ce4b9ffdc80fcad47f537e8a1d5"],["/categories/Swift/page/8/index.html","ad81cedf439c714f42ddcdfad1b6ed9e"],["/categories/Swift/page/9/index.html","92b993603a0f96d567ed47178597ec6e"],["/categories/Swift5-2/index.html","b429b2ab50a6370e50b0e6bcc6a04960"],["/categories/SwiftLint/index.html","851f656d1f02932e4fb6a770c378bad3"],["/categories/SwiftUI/index.html","bec2b37763c61848ce1b026f7fc0c61a"],["/categories/UICollectionView/index.html","51d1cccfb449ab41100f12739cccea86"],["/categories/UIImagePickerController/index.html","e90c450ced3ae1f447be2fceda5d486a"],["/categories/UIKit/index.html","b7eb430a391537e08712fe8f5cf2fb4b"],["/categories/UIKit/page/2/index.html","5a17d93e374d82269e0663a68731752d"],["/categories/UIKit/page/3/index.html","b440527911af808e1f072a22a6626fa2"],["/categories/UIKit/page/4/index.html","4e0566b4927faa179f249105a3419017"],["/categories/UIKit/page/5/index.html","e9b75afb81dc467c9b35e51bf9bd2cdb"],["/categories/UITableView/index.html","1baeb9f285f239729ceebf2a15f27ce9"],["/categories/Ubuntu18-04/index.html","5d8b4857f880bf3429382de95f038bd3"],["/categories/Ubuntu软件源/index.html","4d324c6340fdee415084c98c8b117010"],["/categories/Uniquely-identifying-views/index.html","6f87bad3b5cfc6c4c874b4fc95196ff4"],["/categories/VIPER/index.html","fc8973b3fcb8c70cbfbf5f649e566cf3"],["/categories/Vapor-4-0/index.html","f174372c24e3d00d61bde95d103424ba"],["/categories/Vapor4-0/index.html","e5aba93a307ffc84a75a321540e86fe3"],["/categories/Xcode/index.html","b9bea8f29bdf0bc74574c1a67de40031"],["/categories/appleOS-Networking/index.html","d0cf20b978561b9f213a3e4ad6d2b65a"],["/categories/bugly/index.html","2a644b2477528d63ea598275cfb1707a"],["/categories/enum/index.html","80d263eaee66b8d458bb25569051bb06"],["/categories/git/index.html","2412826ce7fead1dace786aab2a95d30"],["/categories/iCloud/index.html","f8dcba77975048d6efa320dc9b056e52"],["/categories/iOS/index.html","f3b79b33d9b241ef2d3dd22787f68be4"],["/categories/iOS/page/10/index.html","2dc71f4526546d4746dbae69d5e056c5"],["/categories/iOS/page/11/index.html","0cb282c303c09a23e32eab09662465d2"],["/categories/iOS/page/12/index.html","acc9438498c8f3b99f33d629468856b3"],["/categories/iOS/page/13/index.html","45fa38aa0e448285fb2179cfd5c61fce"],["/categories/iOS/page/2/index.html","9a7196e5cba0d614bf8b6697cb794f04"],["/categories/iOS/page/3/index.html","7c89ac0d4b4ba71bf21ba235e844d9eb"],["/categories/iOS/page/4/index.html","d9d2488f7f0fce29bccc42c51499be8f"],["/categories/iOS/page/5/index.html","370e3d9ccc6fe5d3bd4d009c2a847ad5"],["/categories/iOS/page/6/index.html","00722114883eded4554a6ab404ba1722"],["/categories/iOS/page/7/index.html","58377c2c4ffcb38cb93f711f38608fad"],["/categories/iOS/page/8/index.html","9c5fd4803589b257a9108574ca1a6194"],["/categories/iOS/page/9/index.html","cca55897f974e037c7e7a668d819f4fa"],["/categories/iOS面试题/index.html","4b9caad599ededbd369e5c20a3c03f01"],["/categories/index.html","c8eaa1561df75f5793c21f9512141a6b"],["/categories/random/index.html","4f0764be074576eb86c0435e538f3d9a"],["/categories/三方类库/index.html","e9aceb9f3009766c55449f37b0cb3914"],["/categories/函数式编程/index.html","258e1370a857fe882c30240a025a59cf"],["/categories/子类化样式/index.html","3819db213de070c990558e29cdca828e"],["/categories/开发技巧/index.html","2e2925be0bca448cbb8c78c25e939e78"],["/categories/开发记录/index.html","9fb834f02cd88b393367c74f981e8f5b"],["/categories/技术支持/index.html","0c3e35a3b794d2cc9d764ae2448834a9"],["/categories/架构设计/index.html","fcbcf410db2ae2cd9e3865580357c05a"],["/categories/测试/index.html","d535d0842e990a2923a5148ca7698274"],["/categories/用户体验/index.html","398c508c0a8318c96c61eadcbbbb4415"],["/categories/用户协议与隐私政策/index.html","04b088dbe0b1a84e0699241bca129977"],["/categories/设计模式/index.html","96d90be11a4f1a57ca7001df3bba6d80"],["/categories/设计模式/page/2/index.html","d960607b0b4a23fd4b40b6518dd48d49"],["/categories/设计模式/page/3/index.html","c124341f71beb4049ba6c4d9a05ffff4"],["/css/main.css","643fa24de72333129538efd435e300de"],["/hello-world/index.html","08e6e1062ad9bc1a24a990caaeda9534"],["/hexo部署失败/index.html","770f142a6ed7a6f85ae07aff25e4b30e"],["/iOS VIPER架构深入实践/index.html","0280f0b57cb4d745631dcf96cc2b974f"],["/iOS 自定义视图，输入表单和错误提示/index.html","70015254eec9e7f941bcc8d7b6b3893c"],["/iOS如何使用iCloud文档？/index.html","7ce124643a05cdfd65d7cef136d5dc71"],["/iOS子类化样式/index.html","272c1709b9416b094bb0cc0680fba3bd"],["/iOS开发记录<一>/index.html","908ea436354f79d24d735964417e63d9"],["/iOS自动化布局编程/index.html","1db3ac6c9246f096d92aa55ce90cc9c7"],["/iOS自定义转场(By Swift)/index.html","b6dce6c192b96e9d6d4381edd4ffe3b8"],["/iOS项目架构：使用VIPER/index.html","68ad7cec27752c02fe2bb3f4dedd00f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","80ce7a94acc937cbcf1b61cf39b2bcde"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","85b34a3b3196dea7e9199a5a83df7819"],["/page/10/index.html","b0ec13f05ab32bc25c1bdcfb06f208eb"],["/page/11/index.html","4236580dda075036fdbc104a0eced47b"],["/page/12/index.html","a54918819fe90f982b1c259cdba03f20"],["/page/13/index.html","1d3c9a10e272dcc02bdaf0d68089e838"],["/page/14/index.html","baa53b86a0ce70e3a073d9928d4b4a26"],["/page/15/index.html","c2101ea002793056f704480f2c8a7539"],["/page/16/index.html","4613013609cf480cceddff49571a22d0"],["/page/2/index.html","c27cfc93ab247c19df906898ecf75df3"],["/page/3/index.html","7a54ec4ad4dc93474a0b699f6442a8a9"],["/page/4/index.html","41fed94c2df028299b2265b9c0a1b067"],["/page/5/index.html","88bebd69c4d3c578207bf416ea367ede"],["/page/6/index.html","5dd2f8a6271c155bdad3c26e845bdb92"],["/page/7/index.html","e355097fc10e39a53dcd0b65980e8916"],["/page/8/index.html","92bb524c237e712dec7aab0c8a3fe1be"],["/page/9/index.html","55f4edd88f7bb97eede2f352e75f22b5"],["/schedule/index.html","f07796f177cc4ec99509e8ddeeb0d8a3"],["/storyAppPrivacy/index.html","8c5dec595ea36a1c87b9e2874da25768"],["/sw-register.js","2d85b5a0d485c0062f3428507c5f056e"],["/tags/Advanced-Classes/index.html","1d60f94ea87fba917b3dbdc4e7787d95"],["/tags/Advanced-Swift/index.html","b951676e21b27cf8e0d0feae6084ba85"],["/tags/Advanced-Swift/page/2/index.html","580f6fbedf1ac58aef60e1ed45340724"],["/tags/App-Architecture/index.html","6fc0af735cc8a76cd062a5901a47ba9d"],["/tags/Array/index.html","f88b96628be53a3f7cced2793b38f4da"],["/tags/Arrays-Dictionaries-Sets/index.html","d6b156e1259e9928908b0fdb25f8727b"],["/tags/Authentication/index.html","2afa1cbcf9dcb5154189aac95172ce59"],["/tags/Build-in-Collections/index.html","6a7b190144ac49e8076163155bc4851c"],["/tags/Building-Your-Own-Types/index.html","8327d5046c1b0d2b422b5f997b809ba7"],["/tags/CMS/index.html","9aea9adf277df5b6b6c00815e0c77808"],["/tags/Classes/index.html","136d741931cff5c27ed3ece426135ad6"],["/tags/Codable-protocol/index.html","4fb99d764938e8bcc57af893130e3d5e"],["/tags/Collection-Iteration-with-Closures/index.html","216f896d277df208925f68b5e7dadb9a"],["/tags/Collection-Protocols/index.html","e95177f2315a80207f44dca4746c5022"],["/tags/Collection-Types/index.html","1ebc37a90c68210599169877f8ad0044"],["/tags/Collection/index.html","a48aba7d389c61a06c569c7969a44c44"],["/tags/Collections/index.html","baf97a9a3e1b70e2a11335c0d70d3d54"],["/tags/Combine-framework/index.html","e175517b0073ac123a613c5e924e39b3"],["/tags/Combine/index.html","bcf25ec646ea500aeb918819baa4964b"],["/tags/Dependency-Injection/index.html","d19993641ef297749fe94adceb99d446"],["/tags/Encoding-Decoding-Types/index.html","29afd6db62ebba8da6cf428f4cd4b464"],["/tags/Encoding-and-Decoding/index.html","4fc6427bbae97d034de1e26d7527b5d7"],["/tags/Enumerations/index.html","6e1d945e8046462b2c5eead38e89bafc"],["/tags/Enums/index.html","64939b44773bdddc2bb27453efcc3251"],["/tags/Error-Handling/index.html","1600355b61cd0e014212756ffd8faec0"],["/tags/Functions/index.html","3767da0c1bdc89730d57d2d9392ee213"],["/tags/Generics/index.html","e87dee7d1e4f538c1beafb82d15a8f71"],["/tags/Go/index.html","cb19ed8166d8ba6f0850b5d3c54b2501"],["/tags/Grand-Central-Dispatch/index.html","e1f1b39a242e94eb60a7184743f03d3a"],["/tags/Hello-Vapor/index.html","b73d383af3cacb9fe6461efd9f110b9d"],["/tags/Homebrew/index.html","44975ce90df7217cde4b389953811cf6"],["/tags/Interoperability/index.html","9e2f1426a0a5a30e617c65274eda875b"],["/tags/Introduction/index.html","a8b75d025ebe6985d6d6d8609d5b159f"],["/tags/Leaf/index.html","c8a927121d1ea1aa6bba3a6064200032"],["/tags/Methods/index.html","b8a299ffb32462e7a7f802deb3fe49b6"],["/tags/Modules-And-Hooks/index.html","71a1c569718bbc55f88811457c54601c"],["/tags/Optionals/index.html","92c99ea9f34714ac97ae89790e43fe1e"],["/tags/Promises/index.html","2533788d274c9b97f933d1b3ee960697"],["/tags/Properties/index.html","e937f7539b3ba7316a397967dca6ed3f"],["/tags/Protocols/index.html","18d6bd28fa569ebcca23dfbeea91f040"],["/tags/Result-Type/index.html","c1e8f9ddf0e542032007488e1502537f"],["/tags/RxSwift/index.html","d9b6c24c5dc46a8ade8dc847a86aa545"],["/tags/Server/index.html","702a5e9ba0d7b4cbfdf4539ca43945fc"],["/tags/Session/index.html","43dd8cbcf6e4cf7d484d4b1d204d8564"],["/tags/Strings/index.html","cf7274366b467a2d28b8e0ac6f214091"],["/tags/Structs-and-Classes/index.html","a6d289d4ed9962984d284a5e35c36091"],["/tags/Structures/index.html","a9be80a12728d697f84ecd91c456c799"],["/tags/Swift-5-0/index.html","854556528eb8c603016e43bef0ff5d1a"],["/tags/Swift-5-0/page/2/index.html","32478b0bfab602339cabc3c751ea7b05"],["/tags/Swift-5-0/page/3/index.html","9ea16decd96e244bf5203a5f5864aaaa"],["/tags/Swift-5-0/page/4/index.html","a096dc48f3d2fc6a874df3df743f59b3"],["/tags/Swift-5-0/page/5/index.html","95bf985366ab8949ff1e4d2ac2dd50f2"],["/tags/Swift-Apprentice/index.html","599efb7cfc0677c3772b539258d70eb5"],["/tags/Swift-Apprentice/page/2/index.html","f8e999ed404241d1aeea6caf4fbbc82e"],["/tags/Swift-Apprentice/page/3/index.html","68c791d128b4b60d07816aa7153ca7e4"],["/tags/Swift-Package-Manager/index.html","6d66a94f8c773396932e0dd8b224cabb"],["/tags/Swift-源码阅读/index.html","fa3cdf1beeda0827ab5db8abff324b71"],["/tags/Swift/index.html","7398b2cb02f99e0e472ddcf2d2c3825e"],["/tags/Swift/page/10/index.html","882a3b72e18444731646ffd877ddde09"],["/tags/Swift/page/11/index.html","5fe2c224fc5b557fe4be470cc2721e49"],["/tags/Swift/page/12/index.html","88334725d529b157fd912f70ce48918f"],["/tags/Swift/page/13/index.html","0fd9cbb8a0cb90f10794786b418ea95f"],["/tags/Swift/page/2/index.html","e447b40b173dc4d0e5cd540c22dcc100"],["/tags/Swift/page/3/index.html","669658a640641c780dd562c231fde4d0"],["/tags/Swift/page/4/index.html","17af133115e2035f7223c448d4f3a19f"],["/tags/Swift/page/5/index.html","21c60d53b5cc73b559f3a385a78d8619"],["/tags/Swift/page/6/index.html","d062e0ea8af0e55f80848a277c4ec954"],["/tags/Swift/page/7/index.html","f1702d1fe94c3e0f47f73111afcc4c61"],["/tags/Swift/page/8/index.html","9324b32c661749c6ba7ae76a9b9fd7b9"],["/tags/Swift/page/9/index.html","b40f312403abcffa40bc2052fbee51f6"],["/tags/SwiftLint/index.html","af522ccfed0bbc8d30272288ef193949"],["/tags/SwiftUI/index.html","65fef1a96ee9e9453c1ee464feeafffe"],["/tags/UICollectionView/index.html","091d3a618e60d864b9bbeacbf1259fe4"],["/tags/UIColor/index.html","1d4eb2eadd9d1a956543c2a89b1f9f17"],["/tags/UIImagePickerController/index.html","4dc1dcd16ec0bcb9ad2abed21c337733"],["/tags/UIKit/index.html","3c906de54c462ac4b583b5e1b09eae18"],["/tags/UIKit/page/2/index.html","47a8ad9194b1efee55841f74c4698c1c"],["/tags/UIKit/page/3/index.html","a8413190eaed30da9ce15236982833ee"],["/tags/UIKit/page/4/index.html","d0b87a41713d787216f5793e9dfe7b36"],["/tags/UIKit/page/5/index.html","86092f52e154728bb141a868db5b3352"],["/tags/UITableView/index.html","e9b51c0bfebd135d67f7ba46abb01b9a"],["/tags/Ubuntu/index.html","bb5a6cabf0712c7e4d5bbb3d7f2427e0"],["/tags/Uniquely-identifying-views/index.html","65d92efa29b9bfbde80f96c1f157b51f"],["/tags/VIPER/index.html","2c4c35014c3eae01b3968153dc189a3b"],["/tags/VMware/index.html","110df1da3a14fced2d8166fbe4ccca44"],["/tags/Vapor-4-0/index.html","0950772ffd893913a23f333a97bb7bdc"],["/tags/Vapor-初探/index.html","3391a858e41ed3f45a95bf62e3969fc4"],["/tags/Xcode/index.html","f96b12f8fe2a01108ab0562da3552282"],["/tags/appleOS-Networking/index.html","2a76301bfe08a592c3584e8b1a70d8d8"],["/tags/bugly/index.html","37415073c1a32692c0b94a9eb58036c2"],["/tags/enum/index.html","8c573d317a1cd29e2400e488e503b34a"],["/tags/git/index.html","db0b0a24fbfe0600b32de5f9aadedf4a"],["/tags/hexo/index.html","5ac891867c8f56ef04355bbc07972097"],["/tags/iCloud/index.html","2c613c387a83bc92e6d03b29ffd6945d"],["/tags/iOS/index.html","dbbc9ce8c923f1e5f32c75b7956e35b2"],["/tags/iOS/page/10/index.html","ce7e967cb144d7ddf0fb7194aa2311f3"],["/tags/iOS/page/11/index.html","83fe8a66fe27e76f99447d2653cc60b3"],["/tags/iOS/page/12/index.html","bb4b14de7161556df2de524321fccbb8"],["/tags/iOS/page/13/index.html","13842218b76be8b7543fdd587222d9b3"],["/tags/iOS/page/2/index.html","15b43128d10e988becaef01d183309ad"],["/tags/iOS/page/3/index.html","a6aac2388a7e9a3f4abfc297115a9a31"],["/tags/iOS/page/4/index.html","4a2db3e63cf8ecbfd7466a1dca6ef3bd"],["/tags/iOS/page/5/index.html","8d95205b587aa9ab0e026177e3cde202"],["/tags/iOS/page/6/index.html","795d4e4ead7447853fef2dec8ceecb9d"],["/tags/iOS/page/7/index.html","7b4429837bedfa1d7f3fedbb3e3061d6"],["/tags/iOS/page/8/index.html","1c2da4365b0eb397f7eb584c1da9e572"],["/tags/iOS/page/9/index.html","4c6362ad148a5deb0d1fd23f9b8d1582"],["/tags/iOS面试题/index.html","f2f7c86f3a63eef427b29ff239614862"],["/tags/index.html","faa78a4347056808b010bc7667e9339b"],["/tags/non-optional/index.html","7453e79d6b98d346dc2d81650b6917a5"],["/tags/random/index.html","6bee4af7e65d337ec4d2db0438db3c18"],["/tags/transition/index.html","653b97603e6a5087f7455f1e3d4e7163"],["/tags/三方类库/index.html","5cffb4368451aae85e3d4f829f1c1275"],["/tags/依赖注入设计模式/index.html","5753566296b8fe671bfb221694423462"],["/tags/值类型和值语义/index.html","086633715bc69f14d3a7480e6dcaf7e4"],["/tags/内存管理/index.html","6f5ffed10ad24f25449961b22c3c09eb"],["/tags/冒烟测试与回归测试/index.html","e1e6185acb300b10a925890074968439"],["/tags/函数式编程/index.html","6ebdeaea323240dddc34cd196770c027"],["/tags/创建博客数据库/index.html","ccb748964c9a7e3545792d0e48cd7ed5"],["/tags/初始化模式/index.html","38c039b97153e2485d71a77baf4032e7"],["/tags/单例模式/index.html","42e8db8924cb5e8fb9a54bd7df6240db"],["/tags/原型设计模式/index.html","f56e29480bd10300fdcb8f63f131a975"],["/tags/命令设计模式/index.html","858bf51c8b4cd1c40e355ab5eb87b02b"],["/tags/基本控制流/index.html","aaf03f4bafac62cd4200551694c6206e"],["/tags/外观设计模式/index.html","497344617f173f3ef5a26d4a9c5495b2"],["/tags/委托设计模式/index.html","f673b65a09bb450a071334b568ec31fb"],["/tags/子类化样式/index.html","b4b902b6df9f00849e426d1ea7e3428a"],["/tags/对象池设计模式/index.html","902f2cb33adff07717c4ba78662a40d1"],["/tags/工厂方法设计模式/index.html","8bbb0a10c26fc62d0f4a3ace9f4daef5"],["/tags/工厂模式/index.html","f29130526c9a25b07940862d71550fda"],["/tags/工厂设计模式/index.html","7a6ab59e74660da8ff53d8574916f203"],["/tags/开发技巧/index.html","044d1f83825ae6bd64b220b730899774"],["/tags/开发记录/index.html","8b90b3ffc6046ad20574f9a2c373963a"],["/tags/懒加载模式/index.html","0358deb434ae0e4ca426bc8c927e32bd"],["/tags/技术支持/index.html","46aa8bd713d2b58ae146aa9632fbaefa"],["/tags/抽象工厂设计模式/index.html","3f34edc386ec5b56cc83f6e4ce245ead"],["/tags/构造函数/index.html","58bf0702e9d22bbadb8e6e7b470f759c"],["/tags/架构设计/index.html","f5544b50af15b4618e638524ac473637"],["/tags/模式匹配/index.html","acb559d5e5421665a593ffe220c5eb65"],["/tags/生成器模式/index.html","3b330df045e8f95f69deacca0bef9e8c"],["/tags/用户体验/index.html","a63a67299a313fd402694b993ccd0d44"],["/tags/用户协议与隐私政策/index.html","25106587a6aaeb07d1640660e43f31fd"],["/tags/类型与操作/index.html","80042e05520ab0708a5393e34b7af4bc"],["/tags/自动化布局/index.html","38ec46fbbb8100f3db8f93e1fcbdb569"],["/tags/自定义UIView/index.html","b209079b121bdc91f2702714fe66d13f"],["/tags/自定义转场/index.html","1d07967b0753318f31fa6b1fbec4ead4"],["/tags/自适应布局/index.html","6396c3bfe34642691375edf45a310324"],["/tags/表达式、变量和常量/index.html","13cf5aef57bae2333982f0369dffef6d"],["/tags/设计模式/index.html","a2e830487ac94f53ecf3abd00d6a3c5d"],["/tags/设计模式/page/2/index.html","cf18aaacc599b07803e3d7c721bec0f2"],["/tags/设计模式/page/3/index.html","d139e6a6d7ea1111634057b5569ad374"],["/tags/访问控制和代码组织/index.html","f80f29745b996b6bd41c582b12a15189"],["/tags/运算符，下标和键路径/index.html","97036da087e14c310f02cc80e8a7c69f"],["/tags/迭代器设计模式/index.html","6053cafd5709575de413b1297385afef"],["/tags/适配器设计模式/index.html","6cc90ba9a54dfccaed9d364c2e6d2e29"],["/tags/错误处理/index.html","aa2b61c29c57cf7fbc27ecd2967ab290"],["/tags/静态工厂方法/index.html","f741b237070cc12328398e95aab06b81"],["/tags/面向协议编程-OOP/index.html","785d015aeb0a447980674078868dee77"],["/tags/高级主题/index.html","8aa37a074bca32a0e45a03a3f28356e6"],["/tags/高级协议和泛型/index.html","26b7821a16609c15486e83ec7f9485a2"],["/tags/高级控制流/index.html","7cfc64f773eaf12e70fc5215ca73dc12"],["/为iOS应用构建输入表单/index.html","7258c624a926c400d00fac468000cb62"],["/产品开发的幕后花絮/index.html","a7cc73bcf05ddebe888fdbcec65e2387"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","62c887145bbe37fb221e3c6be95a4955"],["/冒烟测试与回归测试/index.html","2ac81ff5f6e30ada073b6d9e0932326d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9bcff4734b52d55a9cd63bdefc34c4cf"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","99746bdbd0e5128ad187daf408333cfe"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1ef28dc204c3f107d55c89fbfbfa2771"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","2e5eb69aaf59075acfaf8b66d222ec57"],["/在Swift中创建自定义集合/index.html","9598d4d30ca4990914f7c0d99f6b5cf8"],["/在Swift中处理非可选选项/index.html","b398b169d459aa1f756115be3901b346"],["/在Swift中生成随机数/index.html","237325a318e7f4d3533781f3325db8d3"],["/在Swift中重构单例模式用法/index.html","c0956fecc7b8173d9609ba51202b265a"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","0bad28186a744efe0864aa7b68f45f99"],["/如何为VIPER编写服务？/index.html","d0ee512b253056d21333d594d18bebcf"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8a1f5fab8b9db34d76166d873c3948ab"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","029488fa620956e2c35ef278dacf352c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","6eaede967f1292f298933658a50a8dad"],["/如何使用VIPER构建SwiftUI Apps？/index.html","de5caf41679ad64cf07bbb29c45187f6"],["/掌握VIPER架构/index.html","2349d98a5b71a6a54655eb6ed6eff3c7"],["/揭秘 WordPress Hook 系统/index.html","4422b78b9ba66b7d0fd05975e54d3d68"],["/比较工厂设计模式/index.html","18b4c9620634f546002d32c28d3a011a"],["/深入了解Swift中的Grand Central Dispatch/index.html","14fbd8fad65ba092d1c5d368eb4d89c1"],["/深入研究Swift框架/index.html","379adbae27ec837796c3627c35eb0dbf"],["/美豫直聘技术支持/index.html","caefe33ca7ed6ad8019e765478a7df4d"],["/美豫直聘用户协议与隐私政策/index.html","4c7936c273e5023b453c6fab2c58a4c6"],["/适用于iOS开发人员的VIPER最佳实践/index.html","ed4f352c5ba6190584029f6ea9a4d4eb"],["/选择Swift而不是Objective-C的5个理由/index.html","effaa1d78b9ee06fd8b7e0b79afb387f"]];
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
