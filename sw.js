/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","62bb05cd1f2c37b01022977ee043bde3"],["/2020年iOS面试题总结(三)/index.html","1796ea09b9a793e9fdf5d131af1e4b26"],["/2020年iOS面试题总结(二)/index.html","f9b5523cb07e0bb043208f729da2b44f"],["/Advanced Swift系列(一): Swift 简介/index.html","7834802d491e816bad86e0d37a8aa146"],["/Advanced Swift系列(七): Strings/index.html","88159f9e457bd2fb5ed7e7bc02260b2b"],["/Advanced Swift系列(三):  Optionals/index.html","b533e734ddbcefe250e3bb9689cef68b"],["/Advanced Swift系列(九): Protocols/index.html","9ad04161201ef4ad59c369383eb21c5d"],["/Advanced Swift系列(二): Build-in Collections/index.html","889c88c3e53edc3d135adfae24797343"],["/Advanced Swift系列(五): Structs and Classes/index.html","6c1051f3b1aaf0047e56d123fdf527d8"],["/Advanced Swift系列(八): Generics/index.html","c95520a25321910dfca08d539264db4d"],["/Advanced Swift系列(六):  Enums/index.html","6954ac875fe2a0c539f660c719523ff1"],["/Advanced Swift系列(十): Collection Protocols/index.html","7b0d120da11ebbe8831f5a0f04b09c12"],["/Advanced Swift系列(十一): Error Handling/index.html","9c209b6755e042822345f74444832916"],["/Advanced Swift系列(十三): Interoperability/index.html","a91155cea14accbfcacea0a8781f379f"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a3cc84337cd6deee892e1aab7953cf06"],["/Advanced Swift系列(四):  Functions/index.html","059bdc23e6d61457eeabbfd73dbd9f24"],["/App Architecture系列(一):  简介/index.html","3800e780d4848f42c840694c9c8d4cc9"],["/Functional Swift 初探/index.html","311fb446af070bbe696b7c6c29331ff7"],["/Git 使用小技巧/index.html","5998b651b6fd557c80e2ada3df8bea5b"],["/Go mysql Tips/index.html","677a94e369f2d786658c3bc5f4adc41a"],["/Go 基本语法初探(一)/index.html","116c40c57986e5c40ce8e6bf9b38c2aa"],["/Linux VIM 命令及操作小结/index.html","7dea049cd73e8dfcb3c96a758c57e39e"],["/MySQL 基本操作/index.html","b85d776113aa709113891589d284c08e"],["/MySQL-列类型和数据完整性/index.html","316a34a266f57c3ab5f4bf72b784b1df"],["/MySQL-数据库设计和查询语句/index.html","5b3b8113690712a4364732f3773952ef"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","497448c419336962d88b956c155224d8"],["/NSCODER和SWIFT初始化/index.html","7d92e8eaec6dacd0d016f459c254b517"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","f21b78c81e431a4a9e81c2b5d8ec7245"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","0e85ce15a9433c7aa0f89a2501e3e152"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c70f30277cca389eb36af38e9c426a03"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","6910448c46c1941c8084237a1f47fafe"],["/Sqlite 使用Tips/index.html","918e72ff8392beaff3dc2b498e5b197b"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","f0c3c16486822e2d1d59f3b4dadfa8b8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b29357f1a3b2114837d54ee3b4c7cc8a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","655b6dc37aecc975803b192967be4abb"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9525e6cd97198eefd9945e279e2b005e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f81f68ec35b9bbfa991304b0204f1073"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f7f63360228ea727cde6b12953ceb841"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","edde0594605413bffb4847817bd4b376"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","aaaff41dd8f5de4c596bc70a5302d2be"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","bd0f301cc4a9dc6631823f5262fab988"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","255f607f90ae3c44a33fcd818ae62eb0"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","c004761001c7a44fbb35e121f27185ec"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","6e502121d7c463426e7f19031f7a4cfb"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d32cdf1806c7090e6d1f204f132be875"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","af2e3bf8a1005a514d7ad86ea4c1b22f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","8527722641bd966a7fc72d5949775b17"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","ae2859ad5fd60db9ddadfc9251a8e9be"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c38c98008eaeee3de415b7f1c6e78ab9"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","62df4f500a6e140b0e592dedfb111072"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","56d343f5533ab2028586b506e56f60ae"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","5cd12b422856cacd6dfbdaff3e30a083"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8b53658be6f4209967d1ad5c70a3f669"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","16b13522e8212e2b50c3d4532d8fe1d4"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8ff3298b129e8d2fcfc19989f29eaba7"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","dbaede120efc5349e1154dbac3cc4845"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","baec7842b2bbe3c63cf83f381de6dcaf"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","5ad436940dae81bfd20b536d1f48451e"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","655d4557ce3cbe488b6f7df7ec2efd42"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","0fea76dd3fd7dc3dc79dfd4f7d6308fe"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","3383165eb2b90dc69634f3ba835713d6"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e910b68d50a1e8842024de8e78b746bd"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","9d3dd9c0a1e3fa05b99ad43a49f22774"],["/Swift CompactMap vs flatMap：差异说明/index.html","f1a78ae6bb4be40909b87ccb9e8dc47f"],["/Swift Grand Central Dispatch 深入实践/index.html","a4f9817d559bece036a3f5bcd1025e5c"],["/Swift Lazy属性初始化/index.html","37dabdea9c184bd2fcb9ad1e8d8bca2f"],["/Swift Promises 初体验/index.html","b13abf03aaf038912557a96d631077be"],["/Swift Promises 探究/index.html","93ec687c1183ef98b93fa3c84f282083"],["/Swift UICollectionView使用指南/index.html","57006db910ed64b32ffc196c3f6bbdef"],["/Swift URLSession && Combine framework/index.html","0861bb30fabccc866d2b81bacb458943"],["/Swift tips/index.html","fed1a8a1fc6eaf9027c3abb0b0e6c497"],["/Swift 唯一识别的视图/index.html","525564ae11198cf45d4fab44e5a9fe90"],["/Swift 如何学习现代UIKit？/index.html","7453c8f71ddea9c5a27214c18617a79f"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","897afb1a6f5133c252db61d8ade1c8f4"],["/Swift 用 compactMap 替换 flatMap/index.html","061ef194650cc228106ed83215bbbbb0"],["/Swift 选择和播放视频/index.html","76d4d0178a732acb4f97c9f28c2a8940"],["/Swift中UIColor最佳实践/index.html","bb05311f5b0430f6d5ca9054abaf79a3"],["/Swift中快速简单的工厂设计模式/index.html","5d35b0a195ac23477f9c0b9b2ed406b8"],["/Swift中构造函数与静态工厂方法的比较/index.html","48e83e611c4c412da6932d832822a2fb"],["/Swift中的UITableView教程/index.html","c33944b10bc290403a0b5f4b2b49a944"],["/Swift中的懒加载模式/index.html","b4718b2614c704223b2d5541b04fee50"],["/Swift中的模块和挂钩/index.html","ec6e337b6ac9c2f56c8f9ae0959375e0"],["/Swift使用布局锚点添加约束/index.html","9f592d7ada8d52e7f0a0e961277a6f8e"],["/Swift依赖注入设计模式/index.html","f9b516be7584d30ead557aa28ea48fcd"],["/Swift关于Dependency Injection (DI)/index.html","0e3f5d63ddab4c654e040beebc781de5"],["/Swift初始化模式/index.html","0cc2ac0e82973d6a620c75f47eed163a"],["/Swift单例模式/index.html","06b9a9219d9373eb2d6370522b5d0e0d"],["/Swift原型设计模式/index.html","6e66c8ccaba1e45292fbb4a313f7ff25"],["/Swift命令设计模式/index.html","157f9536ff65b617eeadaceb7c642f1a"],["/Swift外观设计模式/index.html","c46b15f1d0c23f014dbe6fa21f2ecc12"],["/Swift委托设计模式/index.html","205f36a1583f944adba4e11058178137"],["/Swift对象池设计模式/index.html","62907f804d57737007ca365b67e7f9d2"],["/Swift工厂方法设计模式/index.html","15b8a53e2716004016787c32b99d1f1d"],["/Swift带闭包的懒惰初始化/index.html","acb089246b5885000c933264e47ba7dc"],["/Swift抽象工厂设计模式/index.html","caebd5dd95d8ce9aeff9e3f01c4b5b94"],["/Swift掌握iOS自动布局锚点/index.html","27e3a5e3ac060d6d16625a12f2d8874d"],["/Swift支持旋转的自适应单元格/index.html","940225abc4bb8d840f5fded14e902215"],["/Swift枚举值/index.html","f27723bcb7a41955a3cd3bbb4b9c699f"],["/Swift生成器模式/index.html","59d7ddc0968b482ede93e70d42127577"],["/Swift结合Xib文件自定义UIView/index.html","5704dc5f96529eb824762d91f3b6cdfb"],["/Swift编写的20个iOS库(一)/index.html","dc401a3e2217525aa4561aabc1387da2"],["/Swift迭代器设计模式/index.html","e5dd594d81569eaaa8f5b46208cfe7bd"],["/Swift适配器设计模式/index.html","69ea238ac1c69095a96336fc02e40b7b"],["/Swift静态工厂设计模式/index.html","9fc2e6022fc37f5e681abee35236d9e2"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","367f11a6f02ce658204ea298d9acbd33"],["/UICollectionView data source and delegates/index.html","06428df75763abc4e2c205f5d44c8d54"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","eee5d6a9652a3f11525252fbf71873a1"],["/UIKit初始化模式/index.html","5d8fd01de2df2071d9cdb788cfe42eff"],["/Ubuntu18.04替换国内源/index.html","2e0383f37a52c96fbd08ffd80ad1ac26"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","13d64900f40c1a7061648e4d9b4d57c4"],["/Vapor系列 (一) :  Vapor 初探/index.html","b346947216cd4927a490f12716eecee8"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","e42acb8fe7545998f361b2363a6f7ead"],["/Vapor系列 (二) :  Hello Vapor！/index.html","5b3a8986bdc9a294f658b4a5716d8b63"],["/Vapor系列 (五) :  使用session进行authentication/index.html","26867ddf5f7ea05b49b84eeb794ed1ea"],["/Vapor系列 (四) :  创建博客数据库/index.html","a3fb6b8b1487ed5fc131160d7a41a9c6"],["/Vapor系列(六): 徒手撸一个CMS/index.html","ee2bd51b06362927ebd6df0f3818aea0"],["/WKWebView与Native交互注意事项/index.html","13f54d964bd4c3127ccd27207e92d0be"],["/Xcode扩展/index.html","cea9ae5452be941c7a3b74e3a8a6de05"],["/about/index.html","b557200cc78025772f04852e48130b4a"],["/appleOS的Networking示例/index.html","936a21ce4021e8e2e3f1b95e7ede076a"],["/archives/2020/03/index.html","2ca84a9654155f0df548122593701bd4"],["/archives/2020/04/index.html","bea2f2d3bd0dcb12bbb1a5f7cd57bb83"],["/archives/2020/04/page/2/index.html","b7625782e74276fd8204b8eb74c4888b"],["/archives/2020/04/page/3/index.html","a762566978bcb501cf719ead90bd62f9"],["/archives/2020/04/page/4/index.html","9abb8fa5ef1a1ff1e527351eac6cfce3"],["/archives/2020/04/page/5/index.html","6821f50bebc83bf9cbf7a905762061ba"],["/archives/2020/04/page/6/index.html","7f1c5d90599553f5090ad43433f55156"],["/archives/2020/04/page/7/index.html","ac21c1a8b826e1d238bbfdaabb54e4f5"],["/archives/2020/04/page/8/index.html","b8a6e9cb6c310794f9489609c4760ddf"],["/archives/2020/05/index.html","d119b851215303d44706a40dff85098f"],["/archives/2020/05/page/2/index.html","3b9b0d98095f0464be49bc206ae8ce52"],["/archives/2020/05/page/3/index.html","bfe5ce2fcf0855c6c9b761da01547450"],["/archives/2020/05/page/4/index.html","2bf956928e9ee05c0699be0b6760c618"],["/archives/2020/05/page/5/index.html","1a4cb2f538d1d8ad768287c13d533279"],["/archives/2020/06/index.html","408ef67f265e3a99c5f69aea01d3a870"],["/archives/2020/06/page/2/index.html","e929bfee6560691771c51da7f03c5831"],["/archives/2020/08/index.html","bc424d76a1d27e067556533b0c32b604"],["/archives/2020/09/index.html","3b94fdddea19af48c29b168be38a256c"],["/archives/2020/10/index.html","a5c0cafa7c492062a8e9c190d45e8b0c"],["/archives/2020/11/index.html","003a8f31f5d9721d828e98ec31319675"],["/archives/2020/12/index.html","9b805ac084dc5641d80d60233e20853b"],["/archives/2020/index.html","750b1cee526d5e39cf6e5472a5f15649"],["/archives/2020/page/10/index.html","ed12861115201d36a1d615b6a12a0ab9"],["/archives/2020/page/11/index.html","5549e8bf6b7f5b7405238a7e1c6c3780"],["/archives/2020/page/12/index.html","373f79a8338a6354766ba16f073d20f5"],["/archives/2020/page/13/index.html","28422ddd4175ad578e2e5b34ab3774a8"],["/archives/2020/page/14/index.html","d8ca034dc2d3afd49259fc7cce58ccb6"],["/archives/2020/page/15/index.html","51327f4a51dec28dab201c11328d2afc"],["/archives/2020/page/2/index.html","ec6af6f4a4759cd4af61f2e01bb1cfa3"],["/archives/2020/page/3/index.html","98bc5e3aa7ca39c8fc268c5283b95c48"],["/archives/2020/page/4/index.html","dd4649c84835ff770d64a4db1a236fdf"],["/archives/2020/page/5/index.html","bba6a46e45c8be0941a1da6f7455a441"],["/archives/2020/page/6/index.html","2e22f64c9d7905d82fa9dfe3ca631b34"],["/archives/2020/page/7/index.html","4ced2428c937ac94b1824cfb0cdcef21"],["/archives/2020/page/8/index.html","a487408dd89270715eaebe633002ce56"],["/archives/2020/page/9/index.html","69cf2ccd7e48e93e10d06e58c18182e9"],["/archives/2021/03/index.html","1003a7596724fa976b7e5e0217617502"],["/archives/2021/04/index.html","91179643b6f380f0698f9b69858d3e91"],["/archives/2021/05/index.html","d87808bbebfc49c1793c7c25f23196d3"],["/archives/2021/06/index.html","7787495dfc7723d71c848fccc8b90022"],["/archives/2021/07/index.html","53397c2f90cf8e7c17b5d783716767b4"],["/archives/2021/index.html","e6e575e3be7e3149fd4e204b8a7841f9"],["/archives/2021/page/2/index.html","ee5c85ebfc33cefc99a883c18cbce17c"],["/archives/index.html","c70a0ca7228dd76107ba07bed4ee88a2"],["/archives/page/10/index.html","502a3bf1a98b4a773b87b34c33a64b88"],["/archives/page/11/index.html","98a22026973b7efff0887203e76b212f"],["/archives/page/12/index.html","68028c887af4044b206bc126b3af4b56"],["/archives/page/13/index.html","40ee74ec9742ecca4fda2c865268bb70"],["/archives/page/14/index.html","f361f067d94701e7766d890ead93e3ea"],["/archives/page/15/index.html","32ba403230ef860a74d98825b858de2f"],["/archives/page/16/index.html","052ae2f22573370ccf66ae9a22982a76"],["/archives/page/17/index.html","70fe1f7c5c127616d371c3d1b794a790"],["/archives/page/2/index.html","2bf6aaf01041a869f611fab791961d99"],["/archives/page/3/index.html","d86b349cd32170034544245916625eb6"],["/archives/page/4/index.html","cebff9548d40114573ceee37827dfc55"],["/archives/page/5/index.html","42cb4fe9a73c0fa70832796aaf8b9ea0"],["/archives/page/6/index.html","de45bc093d23aba2e26a2c6b02f1e9b7"],["/archives/page/7/index.html","820f13f8000e197652f675f4a366c107"],["/archives/page/8/index.html","a653d4b1b91faed68e22a7916e27fa90"],["/archives/page/9/index.html","a3767c2cfb8c82f42b70495df8acd567"],["/bugly 上传dYSM文件小记/index.html","915eddb6245aa2608ecce0b93410bbfa"],["/categories/Advanced-Swift/index.html","cab7757206cf0fd597f7a8b50efd3c45"],["/categories/Advanced-Swift/page/2/index.html","d5e569b0d56540a7470e12db6915d116"],["/categories/App-Architecture/index.html","a01c1f130579cb58c62c6acb1f1ec6e6"],["/categories/Array/index.html","8ff140a7446cde1672a0a546a5fe90e0"],["/categories/Codable-protocol/index.html","7356eda11b89250ada08ab8fce33fe60"],["/categories/Combine-framework/index.html","246b2f7a794fc84f01c12d5fe9703ea8"],["/categories/Combine/index.html","d9b5e1c65f27c4779e9d5504327053f4"],["/categories/Go/index.html","cd700b71be4aa0a53b9a5194f1eff404"],["/categories/Grand-Central-Dispatch/index.html","bdecfc3d8919a125bfaae7fd13f9db87"],["/categories/Hexo/index.html","081ccef046391fe6417bbf9f6717c342"],["/categories/Homebrew/index.html","c0a414c86c50bc2f1212fd21fd1f123e"],["/categories/Linux/index.html","fa820da86ef4bfc559a5ae8d81acf5dd"],["/categories/MySQL/index.html","5eb893006c0c45bc72c8bf6bbf9c79b2"],["/categories/Promises/index.html","a81f90c50d975be9cd03edbba01f1c62"],["/categories/Result-Type/index.html","b80bd03162869688f74d6f46b4dcd624"],["/categories/RxSwift/index.html","7adf7839952cc1ed215066d306a49e12"],["/categories/Server/index.html","1612e32e6d0431d91e7299a7db49b633"],["/categories/Sqlite/index.html","ecad80a114f5100ed56cb897825726ce"],["/categories/Swift-Apprentice/index.html","ee52b7bffb9e84e84b9d3ee4b94b3a3b"],["/categories/Swift-Apprentice/page/2/index.html","933176e9ee03d43205c0e01073d73107"],["/categories/Swift-Apprentice/page/3/index.html","7400ae63578b7f6fa0b6b3414c0c145d"],["/categories/Swift-源码阅读/index.html","87d3b51da2af9e9b81fd46b5d2ebfa4b"],["/categories/Swift/index.html","6b2d33b85d9828c12ded28ee015e7d0b"],["/categories/Swift/page/10/index.html","69975d8e861647f7f407ad2a9ee3faa1"],["/categories/Swift/page/11/index.html","225ee397e008548a9685139ae1f63e18"],["/categories/Swift/page/12/index.html","cebfc567743705f0a5f679bc3ae2dd52"],["/categories/Swift/page/13/index.html","5002845fcf81b910aedb179c1bc2079c"],["/categories/Swift/page/2/index.html","f877523b1889d347ba9460b24b95b5b1"],["/categories/Swift/page/3/index.html","90e7fa433ce91b9b27ddf24a14090f51"],["/categories/Swift/page/4/index.html","ffc18fef9bc3b2e85d742ee44911d247"],["/categories/Swift/page/5/index.html","4f1549e0be53a55c002cf74f414370e2"],["/categories/Swift/page/6/index.html","bcb7303d11dd611cae16a9d659f1c861"],["/categories/Swift/page/7/index.html","842496477fafa38320736ad581c4daa4"],["/categories/Swift/page/8/index.html","920e2be4d1a2b79a183d465b347bea7b"],["/categories/Swift/page/9/index.html","e920262ceee0ba884a169979f2d7e274"],["/categories/Swift5-2/index.html","412e49aafb60ced36d9038da46474518"],["/categories/SwiftLint/index.html","08796b68fd52dd6aa216b6149cda50e7"],["/categories/SwiftUI/index.html","ef1e20b543684a3d9602cc0948f80972"],["/categories/UICollectionView/index.html","cda806ad8675dc024d54494ef51058bd"],["/categories/UIImagePickerController/index.html","a54d805ae83b82dc02e1c52bcaebfcde"],["/categories/UIKit/index.html","b07b0eb00058dc27ded334ad45ea76c4"],["/categories/UIKit/page/2/index.html","cbadcffde3497dee06fc0fbcd8b3b194"],["/categories/UIKit/page/3/index.html","e5fe42010080641fb49393670e389629"],["/categories/UIKit/page/4/index.html","5a1f70eee6f302230709500850db738e"],["/categories/UIKit/page/5/index.html","55cb6fdd49a93ce760dcd811c0e79ee6"],["/categories/UITableView/index.html","a8ea1652f6ffb60943eca40bcb9cb7d8"],["/categories/Ubuntu18-04/index.html","118af4e6da8130809b8cced353ba318e"],["/categories/Ubuntu软件源/index.html","617aedf4462121fb078289219d261989"],["/categories/Uniquely-identifying-views/index.html","51731c05fda698d3815e7b3038b5135f"],["/categories/VIPER/index.html","73a7dd8b80c83faecf4186bb43703b73"],["/categories/Vapor-4-0/index.html","8d795ac387a6e5edb15ae6510585901f"],["/categories/Vapor4-0/index.html","f453716b075465937c61a6588180ea72"],["/categories/Vim/index.html","8ae7170383ce717132bd36cc0aa6637c"],["/categories/WKWebView/index.html","76b2aa957ba0170c332f10b0ca8c19de"],["/categories/Xcode/index.html","9720585eebea3f2f8c6fe82f3ef34ada"],["/categories/appleOS-Networking/index.html","1eab4244bac146934378765d7082f416"],["/categories/bugly/index.html","c5a76aa099a08eb9be44f071e6d26aec"],["/categories/enum/index.html","96e6c24e15220025828e4d9b86b5cf91"],["/categories/git/index.html","174aa05636d078a338c0f0c2f01fdadb"],["/categories/iCloud/index.html","7224afb8b9e117f58494e7355191c74e"],["/categories/iOS/index.html","88dc5af27d1675a5da1c6a4d0c4fa4fe"],["/categories/iOS/page/10/index.html","8bd2140b3987558c8e18f2e48e2cf1e1"],["/categories/iOS/page/11/index.html","24523e11f326c05d075b254eda0876bd"],["/categories/iOS/page/12/index.html","95ec62d09fa3f204473b2577e76098c3"],["/categories/iOS/page/13/index.html","618ec09d03a5bcb0cf905c9c7e737499"],["/categories/iOS/page/14/index.html","d5f8d02ca480961263507d3aaf2c88e3"],["/categories/iOS/page/2/index.html","2a1f375eed5ec08f9bb11a27ce40307f"],["/categories/iOS/page/3/index.html","f3dfa85be5f335de66669858c6f53ca3"],["/categories/iOS/page/4/index.html","d5f33414c1db508b8d9927a2cd6df4de"],["/categories/iOS/page/5/index.html","ace1a2904a1106655846df7bd92935a4"],["/categories/iOS/page/6/index.html","0f26b38b664bf24d019c199ca17701cf"],["/categories/iOS/page/7/index.html","2b789244446a8eafa5ebaccf6890ebe7"],["/categories/iOS/page/8/index.html","82b0503f4bf0144442e58c511591598a"],["/categories/iOS/page/9/index.html","53de506c7a7a13369c50fbfc716964aa"],["/categories/iOS面试题/index.html","566cbbd992d7508ba86d670e173af2c2"],["/categories/index.html","1e713d540f444f7685db76f8dc2b297b"],["/categories/random/index.html","06f994ed2abe2217bb4c27cc12954d50"],["/categories/三方类库/index.html","67139b5a612537baf9216781e046f7d1"],["/categories/函数式编程/index.html","24e4f8b26032e0d8857545674a7b9ccd"],["/categories/子类化样式/index.html","07b7e5d190d3ff311bf0f4fb54d23ca2"],["/categories/开发技巧/index.html","1ac70def3fc0d2713c0d519773eb57a5"],["/categories/开发记录/index.html","4904203981e88e97cb90817a65249c49"],["/categories/技术支持/index.html","64f72c5128283c4a5d223753904ff696"],["/categories/数据库/index.html","36f182ba5b0d3b87b7b4384e268b4080"],["/categories/架构设计/index.html","70b9e6fa96dd9232498ddd3228b42cad"],["/categories/测试/index.html","ed8f9b98fea52cccee8d7929440da424"],["/categories/用户体验/index.html","fc3035ef4fc9d3ba8ee4c4610041a4f3"],["/categories/用户协议与隐私政策/index.html","8878f6408c78bdcac95cac27b4370001"],["/categories/设计模式/index.html","e8baadefde3c829181e918b193fcbb1b"],["/categories/设计模式/page/2/index.html","b923afabfbafcb80c5f6f4eadc8b25b0"],["/categories/设计模式/page/3/index.html","a9addc25ea381b1ac2116c9a308b87f4"],["/css/main.css","0ac8363063b7b7a79fdc9d1b38dd1b5d"],["/hello-world/index.html","93b08197a82d4d575407ddb987b6231b"],["/hexo部署失败/index.html","28ade3eddd7f905acde110afdc28a321"],["/iOS VIPER架构深入实践/index.html","34eca937cb12a2527a4fe83d65333f93"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","6495deecd9476e2b919447e3faad0786"],["/iOS 自定义视图，输入表单和错误提示/index.html","a3a9ef689151440e087f34f11c23e938"],["/iOS如何使用iCloud文档？/index.html","c5665dff829f5e1938ff06d1683e33c8"],["/iOS子类化样式/index.html","4d2ea5e0d58cf1b30e1bab4c344f0986"],["/iOS开发记录<一>/index.html","4eee1fd2fe7aa17fce3b392c31401e93"],["/iOS自动化布局编程/index.html","274ae2bec6fdb15a166eebe7d8bd40ac"],["/iOS自定义转场(By Swift)/index.html","b24b9429dc99ca5b7bd94fe28db01fa8"],["/iOS项目架构：使用VIPER/index.html","715fff306e31c8bb44b69d6e9cb62df2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4d3c38d37be3145c5b7a9d7d170d31ae"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","66492541da930a59881a2aa88ddfe0ee"],["/page/10/index.html","fe02ed629077fe6fce9f2011afaa1ba4"],["/page/11/index.html","a8ae8f4b32e1c041d2b2141a0baad416"],["/page/12/index.html","22b8561ca8674eb9b9dcce89950aaee0"],["/page/13/index.html","c18763ffbab22bf2ab7e7f0efabfce4c"],["/page/14/index.html","dcc464274c46ede3e341e81dcae705e5"],["/page/15/index.html","c77527579e444f58f07578abd71b2ae3"],["/page/16/index.html","b2eaa32d4d1a5c45a92209ba41c9baea"],["/page/17/index.html","f37fd23efa8dc8bd666bc7b0ab14f3ff"],["/page/2/index.html","1a8a0d96f64bfb1fd531ee2c5b6c3b7f"],["/page/3/index.html","97e4d9ed9e5ffb6ac66cf26ec9314ad6"],["/page/4/index.html","da6b7a33a024ee4c64b8a6235ae43306"],["/page/5/index.html","a71f4eb4d6d81c3d0054dcb264f284f4"],["/page/6/index.html","db0506d0d0f326d78c7d02442f538c52"],["/page/7/index.html","6e2341e60e1d5657d412d962bd428ccd"],["/page/8/index.html","39bc35ee0f22cc4c19231cb7a8dcec3f"],["/page/9/index.html","de93e93d737779ee2fec70157df2bc57"],["/schedule/index.html","b1ea5468e3704762e82b3c081ac42750"],["/storyAppPrivacy/index.html","d0c05e1a19d1804020b42674c0177dbd"],["/sw-register.js","6a1893ee3d76768407accb025834980b"],["/tags/Advanced-Classes/index.html","e10feab594b50dda70e5cdb3da8b4060"],["/tags/Advanced-Swift/index.html","42a189e1314746543a018a97568fe64a"],["/tags/Advanced-Swift/page/2/index.html","240a09a49fa952176347cb677935d165"],["/tags/App-Architecture/index.html","8a3a9a29acc972b79c96c8a070f25d09"],["/tags/Array/index.html","17ed867917b8ba94a9944c61f44fe571"],["/tags/Arrays-Dictionaries-Sets/index.html","c0c1b84f07cf5f23f6937e8f3fa4e140"],["/tags/Authentication/index.html","7afaf7b467e550dedfea76668e2b1fd7"],["/tags/Build-in-Collections/index.html","7f5670b9c0dd250faa724a5c64ba47cb"],["/tags/Building-Your-Own-Types/index.html","7545be03a6a009105179b897aebcc830"],["/tags/CMS/index.html","918e4f91fce31a339ae216bb12cd6823"],["/tags/Classes/index.html","0d5ff5989ed4e06b0ce84bec0ca2847c"],["/tags/Codable-protocol/index.html","6cf8df64a61c4220bc6c3caf2bd88dea"],["/tags/Collection-Iteration-with-Closures/index.html","89a770ca1e9783c49e2a240b9dfa2322"],["/tags/Collection-Protocols/index.html","6422e7d7fb8854990b82d16c496d58dd"],["/tags/Collection-Types/index.html","c096d07c0d0f32e74cc850ea64f42dca"],["/tags/Collection/index.html","fa5947c9334dbc8c1e5ef92b1611e6cf"],["/tags/Collections/index.html","690c0a3cf8d8e94855bac2000295f3f2"],["/tags/Combine-framework/index.html","836be57275441bae6ddd230e6fae1254"],["/tags/Combine/index.html","1103b577cdfd428574b379eb7088782d"],["/tags/Dependency-Injection/index.html","fe0cb9dd45be2300ae6d2df5658c29f3"],["/tags/Encoding-Decoding-Types/index.html","8465a263b318930d28d8e2af2408d8bb"],["/tags/Encoding-and-Decoding/index.html","fea7c7710989166d6f457569cc4ec565"],["/tags/Enumerations/index.html","0bac37afac322b6ada1e32a2df9cbd10"],["/tags/Enums/index.html","89efffe1ea0384fcb9aa41096954778f"],["/tags/Error-Handling/index.html","1f9479c99bfc65f9a187aef579b0ee1f"],["/tags/Functions/index.html","4dbd63c0289b3f67f95884b6e050afbe"],["/tags/Generics/index.html","b03060a5506fed26e7c6d8ab8e4cfaf9"],["/tags/Go/index.html","7b2bd1a40a9e3176a5acb17b526fed0f"],["/tags/Grand-Central-Dispatch/index.html","cd291ec7a927c3e1dc71127a6d6450c1"],["/tags/Hello-Vapor/index.html","5f6d36f66e4ec69852cb3a50c6d17a6c"],["/tags/Homebrew/index.html","903e6c1d324237d984d29f9b2978f1c4"],["/tags/Interoperability/index.html","d1523a259358facef9ef79790c547b94"],["/tags/Introduction/index.html","99cd090189b5defae6cc6c24436069bb"],["/tags/Leaf/index.html","14ea57596bcc3991ca9050ead7820a12"],["/tags/Linux/index.html","be4da26e083bfe2ffbfe78c7097bc64d"],["/tags/Methods/index.html","533492f736321d8825a794c74315156a"],["/tags/Modules-And-Hooks/index.html","14aecc2d49273eba9b9ca8e3ec8a3a13"],["/tags/MySQL/index.html","f298a6587fdea679171c5c7ba06da786"],["/tags/Optionals/index.html","8c71288d1b3dbdd95d759ed0bbe226d4"],["/tags/Promises/index.html","6c892ef4f44be190c90e92347fb7265c"],["/tags/Properties/index.html","a8e0c6fb96e5f6ed4fe91c3f5d003ba3"],["/tags/Protocols/index.html","8809aeec8afde878d60ebf4377f3ab0a"],["/tags/Result-Type/index.html","d1d93986c580a65a2a099a989c288a76"],["/tags/RxSwift/index.html","7e9df6315a8d3bab6905e7c6f706d8f8"],["/tags/Server/index.html","f62777fe1112045f9730868c16cd1889"],["/tags/Session/index.html","9f821812c098904ef1652138cb875549"],["/tags/Sqlite/index.html","8ac4f2e026476f880dd881dc2a628a71"],["/tags/Strings/index.html","d85d9839556fd050452f66209c4224aa"],["/tags/Structs-and-Classes/index.html","75fc078876e516ec5abd455d038008a7"],["/tags/Structures/index.html","8dd0980470320ea6610c586bdd0e1761"],["/tags/Swift-5-0/index.html","1800810f7bc4e2df4f5eea4012655adf"],["/tags/Swift-5-0/page/2/index.html","6d38b3b196f15dff874c5ee39c422e68"],["/tags/Swift-5-0/page/3/index.html","cc5c9892e10c0ad38edfe3be5da7f9c2"],["/tags/Swift-5-0/page/4/index.html","b4dd194b9a8d03b67b0524eb66acb549"],["/tags/Swift-5-0/page/5/index.html","0258e65a50d61f4eb81714ab14588b21"],["/tags/Swift-Apprentice/index.html","0fd990b6d962654e83ebe5b4714fd310"],["/tags/Swift-Apprentice/page/2/index.html","11c0c58707c239d1b12d7521af326fe6"],["/tags/Swift-Apprentice/page/3/index.html","bbac6779f57090917394745ce148f54c"],["/tags/Swift-Package-Manager/index.html","3c9b911fc82761ce4ee45820127a005b"],["/tags/Swift-源码阅读/index.html","d1ce202b68143ed51f2e68909e6c9c66"],["/tags/Swift/index.html","de77de1315887ca15b6012ea6fc215b7"],["/tags/Swift/page/10/index.html","7f804c077464615a63a92d1ec0de7982"],["/tags/Swift/page/11/index.html","082d319c9afc3b61fa050cb54bacbb72"],["/tags/Swift/page/12/index.html","7d7047fd90cdea87d02f2691b241fa47"],["/tags/Swift/page/13/index.html","225afc10e27dd0b169ffa8946478f7f4"],["/tags/Swift/page/2/index.html","6419b2579643bb9ef7112817589fad7c"],["/tags/Swift/page/3/index.html","07eef7f3729f74e549d6edcbdac07670"],["/tags/Swift/page/4/index.html","3e6a2bbc40fd7181d3a9a122a9290afc"],["/tags/Swift/page/5/index.html","dae72e0116c0ffaa5a19923e25d5ff30"],["/tags/Swift/page/6/index.html","1632230fd2df260907afa396d964d75c"],["/tags/Swift/page/7/index.html","0b9545e05bfceb132a15032ba94a9274"],["/tags/Swift/page/8/index.html","07029031579b99802bd6a12986aa44f1"],["/tags/Swift/page/9/index.html","5c39a07a1323a945cc4e6e8fb46d75c8"],["/tags/SwiftLint/index.html","adfa5f7bbeb5e99d330e0ac2dac86a8b"],["/tags/SwiftUI/index.html","40962dcd9794525ac1e90a529d06fdf2"],["/tags/UICollectionView/index.html","7403adfdc3938333055bc71b09779d1f"],["/tags/UIColor/index.html","1085370907da5c62e28f1b247b21a5c9"],["/tags/UIImagePickerController/index.html","83206c540950b7b835c4671b681712e8"],["/tags/UIKit/index.html","2bb697b19b6c4317a08a2afa8af88f13"],["/tags/UIKit/page/2/index.html","5d5a04c0e70294e8d454a2dce04b26a3"],["/tags/UIKit/page/3/index.html","22b500b754303c05b187ff8d9c9eff79"],["/tags/UIKit/page/4/index.html","1ba27d2ff24c1eac8fcf4c0230e8f0ac"],["/tags/UIKit/page/5/index.html","f00319acefc5d52ba2400848e399cd59"],["/tags/UITableView/index.html","c9d4c57746485d0f60a9d92313e30d44"],["/tags/Ubuntu/index.html","e87fe2e212bd198453de23c09d7a762a"],["/tags/Uniquely-identifying-views/index.html","e7e102b0c29258cb1e5281db4dc27eb9"],["/tags/VIPER/index.html","658620ead962d7972daf6e51dad8e1ae"],["/tags/VMware/index.html","ef634d7027bfa82737f21f245dbd1271"],["/tags/Vapor-4-0/index.html","726e877b4022257810c07deeab8dbd93"],["/tags/Vapor-初探/index.html","3f4d8a8cc359c895984e3d268d968406"],["/tags/Vim/index.html","64da06e532e0fa9de1cb81ae83be2189"],["/tags/WKWebView/index.html","2cc57e786cd0ad888b288f2b3b11f1c2"],["/tags/Xcode/index.html","7dcf5b196de269676157c5d65a6e7dfc"],["/tags/appleOS-Networking/index.html","dfa40c84a4f0228dc4c6d9c6e25de31c"],["/tags/bugly/index.html","37d1ebd56007d3aa0792796d123a65f8"],["/tags/enum/index.html","2fe583131334cf11a6e0756baf221b0a"],["/tags/git/index.html","f43b838fb97ef8e56ebad62b3c0d36bc"],["/tags/hexo/index.html","fe747ef7a5fb0876f9b69b4dc52bf33c"],["/tags/iCloud/index.html","f92ce7e8677301f78c9c090815e8f884"],["/tags/iOS/index.html","8ca494134a9b2e19bbceeddde8e07ab5"],["/tags/iOS/page/10/index.html","483510b728d0877e8f87de7282f67cb4"],["/tags/iOS/page/11/index.html","94d08db01dace4312dcd0c15fedd72d4"],["/tags/iOS/page/12/index.html","df79137e6734f8bbb91f96187069dab8"],["/tags/iOS/page/13/index.html","d7376644247bbbf6e1a02e110df5895b"],["/tags/iOS/page/14/index.html","fa155548e826cf350da8852e14ec9845"],["/tags/iOS/page/2/index.html","a924ae0249959c4d3f7b878024d37689"],["/tags/iOS/page/3/index.html","57a57605606b363d3fe9feec7666be96"],["/tags/iOS/page/4/index.html","72d540a0b30bd002822e0072e32a7479"],["/tags/iOS/page/5/index.html","81b3917b874466e92fd2ac2ff6c8f994"],["/tags/iOS/page/6/index.html","51cdcc9067dceb8a4f59a23d07026fa1"],["/tags/iOS/page/7/index.html","7984f0b5e3328e8e6bed43ef7e04c863"],["/tags/iOS/page/8/index.html","98c9ad355037b2c24e312cebff637d88"],["/tags/iOS/page/9/index.html","66d24e123411703e4aa9966621ad096d"],["/tags/iOS面试题/index.html","0b8b39d5e62b5aa5ba0398a13ac7114c"],["/tags/index.html","ccc3fea654c48615cb544911cc4cdded"],["/tags/non-optional/index.html","e6c4449ea2ee49585d7d615116febadd"],["/tags/random/index.html","e05a636be1fd5a16ed3da9c9a275b7ea"],["/tags/transition/index.html","7f533dbcc8ce3343f24aee5f56d294c0"],["/tags/三方类库/index.html","448e2c3603d4037fca87942cc450ffd3"],["/tags/依赖注入设计模式/index.html","cc591956dee4d643e5203e406b453278"],["/tags/值类型和值语义/index.html","7ac96ebf090f06d89f672f9d455eae40"],["/tags/内存管理/index.html","772ad441e26399491208681f62d06390"],["/tags/冒烟测试与回归测试/index.html","da2c981e6a36f5fe1841a15097855123"],["/tags/函数式编程/index.html","c13c2eb0d83f34e7ff81f31c2fe2ebc2"],["/tags/创建博客数据库/index.html","b3703ea87e4c592b8e62733e706a36bd"],["/tags/初始化模式/index.html","618be4edfcf46322dedfbd4b445f88c8"],["/tags/单例模式/index.html","11fe412a86c442184c94b599e085a2bc"],["/tags/原型设计模式/index.html","fa722bea2631c497bc8a0472e1aea4a5"],["/tags/命令设计模式/index.html","6b8011d227b48db1e70022e7bd30a3f2"],["/tags/基本控制流/index.html","ef3632aafbfd4af47d72955d1c02a760"],["/tags/外观设计模式/index.html","2d16874ebedebd954280b334c6e0288a"],["/tags/委托设计模式/index.html","6114b629dc617523c675c010b8da8948"],["/tags/子类化样式/index.html","e4fad19b126bcd33030e96d633e94162"],["/tags/对象池设计模式/index.html","7b156eb2e2b3def5b19188d6f405239f"],["/tags/工厂方法设计模式/index.html","44b87ab82b0e4fc41cff9a758d009aa4"],["/tags/工厂模式/index.html","b947ae1d0105adce8100ba36dafc48f8"],["/tags/工厂设计模式/index.html","3a767b8e81cb1be515bfe41e4fe784c5"],["/tags/开发技巧/index.html","72e66eb58c960891a57a6f239f70c756"],["/tags/开发记录/index.html","4701f53d693e8906db37b1dab7f099d1"],["/tags/懒加载模式/index.html","21616219bc54b92c5aa11033ce92f68c"],["/tags/技术支持/index.html","ef2e5e932907bcb4b18704373a2acb4c"],["/tags/抽象工厂设计模式/index.html","963d120a0290cd97e5afb0dd18d92dcf"],["/tags/数据库/index.html","03fc37ff2be86b2fc39e6bd1b05fb8c3"],["/tags/构造函数/index.html","c4c8ad266598481e925c451f00246a18"],["/tags/架构设计/index.html","9dabec8cb0efd4d106eb5d1549434731"],["/tags/模式匹配/index.html","6ce3e0c24c0e3b96d4d881e256c055d0"],["/tags/生成器模式/index.html","de64a8244e79dffdf26508cdb54f4369"],["/tags/用户体验/index.html","990c7de3a86418424ae68c7d973dec0d"],["/tags/用户协议与隐私政策/index.html","d5d8f64a3b7bb0148aad6eb07147fca0"],["/tags/类型与操作/index.html","fd18cf6a22b0eeaa78cb2a316f0d86b7"],["/tags/自动化布局/index.html","84b0450eafc4e338d565c68dd07254b4"],["/tags/自定义UIView/index.html","399222a987acc7fc10c2bb68271ef626"],["/tags/自定义转场/index.html","3229c238676a6ee4a2adbe7a6a19f94c"],["/tags/自适应布局/index.html","4d7f29eba6d95e25512a02f9147e60df"],["/tags/表达式、变量和常量/index.html","16dc93cb17737eb395543527887357b2"],["/tags/设计模式/index.html","c33094493766774e732eafbf7536d538"],["/tags/设计模式/page/2/index.html","7b1a37126ec1d04c560379282ce6f462"],["/tags/设计模式/page/3/index.html","6b4f46499b142880c18b8f10821b6a73"],["/tags/访问控制和代码组织/index.html","324a73af45532cfe96989c3d6ec16312"],["/tags/运算符，下标和键路径/index.html","de283ef660cefba679b674b508812700"],["/tags/迭代器设计模式/index.html","3dcfa0fffda2e820d423bda6f78ee494"],["/tags/适配器设计模式/index.html","197f6a5a3f6dce96c1e80599e1dee4c2"],["/tags/错误处理/index.html","2d6dabc3782aa8f0a82b9f85117dc4af"],["/tags/静态工厂方法/index.html","506e3acd8ae1dc2103c3c6c04a43f5fb"],["/tags/面向协议编程-OOP/index.html","dceb5db35e01dc4307a4576c0b736006"],["/tags/高级主题/index.html","03e432909f26aad7d0c3602a6f268c80"],["/tags/高级协议和泛型/index.html","6cfc7c5aad42ea29410172b8bdfdefb8"],["/tags/高级控制流/index.html","9e9f09e31aae33c31e816abacdf5ef03"],["/xcode 常用的快捷键/index.html","66a1bcd4de042fbf09ff89ef6fbaaa03"],["/为iOS应用构建输入表单/index.html","ab623f9abf9654bb4cb691267d78da9d"],["/产品开发的幕后花絮/index.html","ae27fa5ce3b628ce207903dd5f2b23c5"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5807cc5e9d6abf256b489a00061c8a67"],["/冒烟测试与回归测试/index.html","dc1a04ec30d2e1f733849a1e18d7acdb"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","abac9510adf6987bd2448b53066bb061"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","41eced47d2ef8f2b3c0e1ffc5721fc87"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c8d50ff1607d6fa1b4719c5f7f97df95"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","ee76bdc686a16f0bd029289ac5161e1c"],["/在Swift中创建自定义集合/index.html","d08d84d640aeaccf5d0b391724cb210f"],["/在Swift中处理非可选选项/index.html","08414512db08fff1d692946eabfe89d0"],["/在Swift中生成随机数/index.html","133dc5ab81b30e16558418c0ff78c02f"],["/在Swift中重构单例模式用法/index.html","eb58313096c489d4db9d437788814caf"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","fffaa37db4dab63e232600c78c8d6661"],["/如何为VIPER编写服务？/index.html","56a3aaeb59e7064e631f86f8c8ea97d2"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","23a9a8dc4a774b36af339dd8e18cd20d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","79f7ae2dc715426320d3b877bf1a5172"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","285ca0fbaf06ad6def053a71e0834c90"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a3dd688749da93971a90c993d8f62644"],["/掌握VIPER架构/index.html","35d13f1bb4840a3ade160db030f605e6"],["/揭秘 WordPress Hook 系统/index.html","352b62014eeed807e4090f54a325e392"],["/比较工厂设计模式/index.html","2d4d4e5b0309784a9425afa10ddc0b20"],["/深入了解Swift中的Grand Central Dispatch/index.html","b574d2cb786df38d78671abd140a0c78"],["/深入研究Swift框架/index.html","6b0e602987f29feaa066682fda536df2"],["/美豫直聘技术支持/index.html","752071b0e512dc29a4bf1d3d14e42901"],["/美豫直聘用户协议与隐私政策/index.html","1eb4f99cd259bf7950b29031dcccf646"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c0919f254fe2cf689d7d3a2c15f22967"],["/选择Swift而不是Objective-C的5个理由/index.html","856b62b3968c7c4f8183239725254e4c"]];
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
