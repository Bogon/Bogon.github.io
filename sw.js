/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","692963cc2f18b1bd96496049e778ccfc"],["/2020年iOS面试题总结(三)/index.html","c82e257a7b28d69464b63a3635fab646"],["/2020年iOS面试题总结(二)/index.html","a00f4d5690c637a9000828e665d26320"],["/Advanced Swift系列(一): Swift 简介/index.html","aa74a668c64e14d7cc63f759334e08ec"],["/Advanced Swift系列(七): Strings/index.html","9fd82d7317ddf566bde1103e6d3e090f"],["/Advanced Swift系列(三):  Optionals/index.html","835034653b4ef2dc0890b8469d79347a"],["/Advanced Swift系列(九): Protocols/index.html","ff8b495ae98839f0d34b36241f0d655b"],["/Advanced Swift系列(二): Build-in Collections/index.html","7397f67099288a0ff2c73205f1f05fa7"],["/Advanced Swift系列(五): Structs and Classes/index.html","89179b35ad663dff89138b084676c53e"],["/Advanced Swift系列(八): Generics/index.html","496536ed9204e2f66223539fa68d5aad"],["/Advanced Swift系列(六):  Enums/index.html","a071c30e7c488b1796a7aaf50bee8966"],["/Advanced Swift系列(十): Collection Protocols/index.html","049e5adb45b0bd7ce3fad43ed918a15b"],["/Advanced Swift系列(十一): Error Handling/index.html","c304af0ab41a45ef30d2d4b7e85440aa"],["/Advanced Swift系列(十三): Interoperability/index.html","3f294589511f7a339c2e150a9cf9f5a6"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ce01a35e8f2d22456740bc8b5f43b3b8"],["/Advanced Swift系列(四):  Functions/index.html","8bf5b599b5105ddee23401b2df4b61b3"],["/App Architecture系列(一):  简介/index.html","1e116573487726a74405268a34ff4d03"],["/CocoaPods 设定版本说明/index.html","8b533c85f57e2e1246382d4ead1b0de5"],["/Functional Swift 初探/index.html","0d96cb3d5d4609e8e2aec37418fd5030"],["/Git 使用小技巧/index.html","e151664a385d41df7471cd37ef8acd3d"],["/Go Protobuf 初探/index.html","a4318a7b60ba318513fc454b59f3a5be"],["/Go mysql Tips/index.html","187a5b2c0ec05ece10917a44871b80c1"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","dd4ca8fc965c6119c1fd832dce031e7a"],["/Go 入门篇：2、Go 实效编程/index.html","2bd7d67c98b3fc4dd10f8ee3ca53b820"],["/Go 基本语法初探(一)/index.html","a34ddc9aa0ea91f6473af3f66f38e9f0"],["/Linux VIM 命令及操作小结/index.html","7ed9a6c0f27d6239444f39a43f2ca3ae"],["/MySQL 基本操作/index.html","b41e51b5e2dd9468c6f222c16a7fa7aa"],["/MySQL-列类型和数据完整性/index.html","3df4ee9d8d5447c512aaf80ae367f066"],["/MySQL-数据库设计和查询语句/index.html","835a300ee9b2b30235358a774d7fa6a6"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","79e55ef9965953585b22de0c7794ff91"],["/NSCODER和SWIFT初始化/index.html","b04ce032bc975522e075d0c00432cfb2"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","3051b8f2bf86d5c76c4df22393f000ff"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","302de95807b9014d5ad73f42b0979650"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c5f3dc7af12eaba37e82a27ae4f7b256"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","f62ae27b79eed5b9923967911c6a7878"],["/Sqlite 使用Tips/index.html","02aef70a0b211b5f337b087d501465ac"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","9fc488e6f2a63cc64258b893cb65a663"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c2b0217a72325ef462e76ffc758877d2"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","e1dbe4f856cf94770eb51ceaa4a2ded2"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","7b25ff9d892525cb771b6f6f44853a3d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","9814e8127c99ee2d9c875cf4377dcb3b"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f81c570e3ed6335378adf55b02f5f569"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","a17759e472ea290c673a16e179c1366a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","8fca515a28902e034abbbf513a411cb7"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c0e0c19c706aaaaa75fde86aeccc79cd"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","8de4d8ed19ce47ff3ed895f3701b3c00"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","de13030cce64d11ee477c8ba87da47d3"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","422a7d36a7994d6f5a2d1f981d482cd2"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","3ba0e0a2d8907310c34fce6f84635fd6"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2e54bab291216df49c1e1d051a891e96"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","fe192399a68257c91f3102d4a6858436"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","7b797a1801acf931ab6ab69d53d60868"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","b5c918baace894ffb44ea1dd10dbccaf"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","0b3ea48121bd580dfa404a9225705f2f"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","dc04f2b26e2b92b795858fe0102e0c63"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d5cbb9aa02fe832c78586d3890c5fe5b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","40c9fa7f2fc8754bfc61e8b8a5d5554d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","b5cfccca2b63d3bbbfc7d2ec4a6b8573"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","905a91cf1513a9a4ac104dfd66105867"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","aa40edd7c3c24371ad0d0811e8a07c70"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1f39864673664de0b31a8b98a52c7ffd"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","c8abfc20889f90426cce6723aee68b24"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","010f231e0bc27189017e83394e164d78"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","9c343ffa4feca5710e5e47bc64436f44"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","ec9614749b1527ca8046aab549029055"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","f81c6d9ad3592e3748d6a4eddf9029b8"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","1e4cf7ede3c53d22abb04a0b7421122a"],["/Swift CompactMap vs flatMap：差异说明/index.html","d2780279cd945c21f0f9ce9995d2e98c"],["/Swift Grand Central Dispatch 深入实践/index.html","5cf9d8f426e7e436da29d96091c24c1c"],["/Swift Lazy属性初始化/index.html","487e237bdb39bb455eefe8eac47d86be"],["/Swift Promises 初体验/index.html","078e7b5f83d8529a60495005feedb985"],["/Swift Promises 探究/index.html","413724fed86031cf80f6c9037d420d09"],["/Swift UICollectionView使用指南/index.html","ab05451f7319f4978b4761fa79d2e51c"],["/Swift URLSession && Combine framework/index.html","b39a8a30a0b2359ee211dc34c0637434"],["/Swift tips/index.html","5264211874a23df884e5d1044ff7fb67"],["/Swift 三方库：GRDB 使用指北/index.html","da5e2d3df206dd4396abb3d82b2b93c4"],["/Swift 唯一识别的视图/index.html","b082a53022d87038d10c0b76e3719f26"],["/Swift 如何学习现代UIKit？/index.html","acddeee56613a0e83d914b31a542a6d4"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","67b228a140e23937d5fa3bb53fddebe0"],["/Swift 用 compactMap 替换 flatMap/index.html","a563b75cd61599ec2adea083a723c7f6"],["/Swift 选择和播放视频/index.html","0f8b3daab2727d4fba18bc961f849518"],["/SwiftUI 系列(一)：1、 简介/index.html","a171bb2db40ae5c3c8f33d69fb1128f8"],["/Swift中UIColor最佳实践/index.html","cc8cd5198539306442c151af76a31bd9"],["/Swift中快速简单的工厂设计模式/index.html","88c7a24324f861f4de7d61a1517271f6"],["/Swift中构造函数与静态工厂方法的比较/index.html","b2589227460825878ff67ad02b3274b0"],["/Swift中的UITableView教程/index.html","4f07431396d57ea7476c8ed1b416fe24"],["/Swift中的懒加载模式/index.html","4c713af791f1a81254d3eb41ec046d0f"],["/Swift中的模块和挂钩/index.html","427105a2757e425d5ae0047db2ade5d1"],["/Swift使用布局锚点添加约束/index.html","eb2db541ae6a6bacaecb733c334e0c2d"],["/Swift依赖注入设计模式/index.html","1b522af4e84f6fb11b1f1dce6fc948e2"],["/Swift关于Dependency Injection (DI)/index.html","4048df186a7cda8b95a12e22e674ad18"],["/Swift初始化模式/index.html","0b2fc89e82dc73ac328f51f0f5e68211"],["/Swift单例模式/index.html","1a931fd916eb94852340de59211399a0"],["/Swift原型设计模式/index.html","024befc68667b6d9c709b6e6db22599d"],["/Swift命令设计模式/index.html","69071b4565c3583f00f355a41aa6c244"],["/Swift外观设计模式/index.html","07bcced622e0d04d3a94341ed4a480cd"],["/Swift委托设计模式/index.html","0d60dee0ec121718315d3f4900eac164"],["/Swift对象池设计模式/index.html","782d01fc4af19b8847b5df86446e62f5"],["/Swift工厂方法设计模式/index.html","ffe2fdeb573644b8d57eacafc964cb52"],["/Swift带闭包的懒惰初始化/index.html","216451c4c74c90f5a37540921db7a0c3"],["/Swift抽象工厂设计模式/index.html","01ee293119521988dfb1eeb20cf5ee67"],["/Swift掌握iOS自动布局锚点/index.html","23ddafbf7415f1fc67f3a8471ad2a024"],["/Swift支持旋转的自适应单元格/index.html","420a456527d15c0f8702ae37d593c17f"],["/Swift枚举值/index.html","a28ee60d0bff1b430e5972f866327e3f"],["/Swift生成器模式/index.html","783b0b6c02fb8d7d6d141a5e517952e9"],["/Swift结合Xib文件自定义UIView/index.html","24a1abce6afed23b6de595f9ffba81d5"],["/Swift编写的20个iOS库(一)/index.html","8b8cdd71179fc8aac0c5a03b9a1e4056"],["/Swift迭代器设计模式/index.html","4cf5cb3a48e9b05d0c47564f32c5a25a"],["/Swift适配器设计模式/index.html","9e50788d31b8b34646d7dbaf129e0429"],["/Swift静态工厂设计模式/index.html","4912f05c0da3e8a4c1a65b32550d4eac"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","15182520cde5ce170572e1406865b444"],["/UICollectionView data source and delegates/index.html","ad9ae787723e303d47785f195b40e6e5"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","17e2f3f20bd69c4941280a98a880ec57"],["/UIKit初始化模式/index.html","04c39ae6ae02ca4b64a19ea5b2d5db68"],["/Ubuntu18.04替换国内源/index.html","b8c9c4f830ed6e1d707bf9393721d1d4"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","4a418edd933e46b893994935f67caff2"],["/Vapor系列 (一) :  Vapor 初探/index.html","212801dcbf9856d13b55e85a59c6b87e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","949a2c6b9ca4d8e4525fdfdd812c3a93"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2e5dc2f942e3e1538d441ea60b5b470b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","75030a68fc781ff1e1d892a5c4a1aa9f"],["/Vapor系列 (四) :  创建博客数据库/index.html","db76b9d3f2ec84dcb27aca0346ec3ea1"],["/Vapor系列(六): 徒手撸一个CMS/index.html","5d536a8264489cd04397ce414378b698"],["/WKWebView与Native交互注意事项/index.html","0c7dbb5c1643362d392df60cbb549e56"],["/Xcode扩展/index.html","c3d3cc0de3716902a1bef16d747d6c91"],["/about/index.html","bec73a2e74dd5a7c08b379fbc5973498"],["/appleOS的Networking示例/index.html","4ee63fdb7636ef4d9401f383d4aaea30"],["/archives/2020/03/index.html","a6054dd0a2e6627ebe6e3ae293ae1b36"],["/archives/2020/04/index.html","b0f6f23f9ba8c2a60d30de68680746f2"],["/archives/2020/04/page/2/index.html","7873735f030615de532f32c65fc47528"],["/archives/2020/04/page/3/index.html","7bb7924e80bed64b2a0f9e153a43284f"],["/archives/2020/04/page/4/index.html","4b837bca403b561154e54817b2f1d706"],["/archives/2020/04/page/5/index.html","8aa1178f8ef05783cd2e636f72e61629"],["/archives/2020/04/page/6/index.html","368ab892194b28384f335e315a6c4959"],["/archives/2020/04/page/7/index.html","bd6cbafb3dc42a1c8c56883553c5d7c6"],["/archives/2020/04/page/8/index.html","61dd3ee59748702121d3cb8a22bcfb36"],["/archives/2020/05/index.html","0b7067cbba8db48b2e7b46b53590623b"],["/archives/2020/05/page/2/index.html","89360bcdbdeb5623e5532fe23dde38d6"],["/archives/2020/05/page/3/index.html","923b23c9c84fa5b15ea412b975db54aa"],["/archives/2020/05/page/4/index.html","4e5d8a93e09181b1476aa76383baef90"],["/archives/2020/05/page/5/index.html","afe98b721f22a8e052709b31b31d4534"],["/archives/2020/06/index.html","5e8a8b60f3ffa1e219a8c3b5fdc00af9"],["/archives/2020/06/page/2/index.html","dad78098216226c9de144b5db7ea12ee"],["/archives/2020/08/index.html","a081b3ab13e3b5a1b316d3b00dd09fd9"],["/archives/2020/09/index.html","f1a749936e6e568063a42d87acaec516"],["/archives/2020/10/index.html","ee48050a6e0540ef30c5fa52beca0564"],["/archives/2020/11/index.html","429c1361522f9d9db619e61a0f5e38c8"],["/archives/2020/12/index.html","1efd33fca892cfb79c88d3fc1a35b0dc"],["/archives/2020/index.html","34afe97a20474a1a315bf815dd9a9bed"],["/archives/2020/page/10/index.html","82c0ddd1af3f25c16bc4a4891c9dfa29"],["/archives/2020/page/11/index.html","b4072357b9157f5ccc9538d33a9fea72"],["/archives/2020/page/12/index.html","12829b7b306652b5e2adbb083024771f"],["/archives/2020/page/13/index.html","41208f54ee461a31d47c6b86d2ed8d83"],["/archives/2020/page/14/index.html","ffb02a0c6e9122190e8d33012160b32b"],["/archives/2020/page/15/index.html","4ee1d5b0ed98d9bb30ee891c199e49b2"],["/archives/2020/page/2/index.html","71a40b596c65e92873910cf2ee090861"],["/archives/2020/page/3/index.html","8b37e4abfda36490b9b20b321afeae02"],["/archives/2020/page/4/index.html","c2add8a06e8620f1c999afb3079467c6"],["/archives/2020/page/5/index.html","f6b8a1302f6910e4f64f3613c4f0f303"],["/archives/2020/page/6/index.html","92f65be2942340e8ad22f307fb3526d7"],["/archives/2020/page/7/index.html","a184083b4faab3b03817a9ed8b045388"],["/archives/2020/page/8/index.html","3d5f3c5df950760b81afd468691d66f3"],["/archives/2020/page/9/index.html","1a3e7b4d445e712cd3fb5f33d38e0e50"],["/archives/2021/03/index.html","34def8964224ac839e681bfba6aee9df"],["/archives/2021/04/index.html","88b620e7c23144fece517b879ec3e9e1"],["/archives/2021/05/index.html","8687d353dc79d77602a8707c68076952"],["/archives/2021/06/index.html","c93c8a1bd8b65201977cfbef0b8fe659"],["/archives/2021/07/index.html","a39ae4bf6e5734b6561388d15ae78bcd"],["/archives/2021/08/index.html","a151192962b285552e05d301a0b2c4e8"],["/archives/2021/09/index.html","15fd90bb8036c8506a5259cebbd02e1c"],["/archives/2021/11/index.html","1ddcf9f03637f36dad3aa265bbed46c7"],["/archives/2021/12/index.html","8aa9bb27fab0839c0dc1f784b64495e1"],["/archives/2021/index.html","6a709e2fcdde72434d168d93290767a1"],["/archives/2021/page/2/index.html","b092aef432957a17025894aaf45e6cb9"],["/archives/2021/page/3/index.html","f59ffe550bee9c06bf8b558c7e7f3541"],["/archives/index.html","845933687b7c5e5d4712f6a6934bf106"],["/archives/page/10/index.html","40e3c93a5acc5f9d06df48f4574e296f"],["/archives/page/11/index.html","14596f91208d78a575deffaade4c2a92"],["/archives/page/12/index.html","c82fe200ebb49025fb25315e63501cd1"],["/archives/page/13/index.html","36be1ea5ebcbdb5eed69df569e91f812"],["/archives/page/14/index.html","4dcf5b20c5db1bcfb069cf593807f48b"],["/archives/page/15/index.html","d3663e55cfc5b1ea9613645a09583e49"],["/archives/page/16/index.html","68a540e996e95076dcc49e20a0ea5df8"],["/archives/page/17/index.html","fe0d3b06cd64f32d34bc7e8b4e97a1bd"],["/archives/page/2/index.html","841e32096d3aa3b0b999aef99ef050a8"],["/archives/page/3/index.html","1c51ecb835888b870289def8208960a1"],["/archives/page/4/index.html","26a672fe23626e8bf0e5322a2b228892"],["/archives/page/5/index.html","4be1706386ba4c9b44beb3c035f997b8"],["/archives/page/6/index.html","47eb8dcdce20390e87126c155ae1d35b"],["/archives/page/7/index.html","6b31c9b588cdeb0d8d651370ae94c9b1"],["/archives/page/8/index.html","3121bf34fb93526c536783ec68c5ee7a"],["/archives/page/9/index.html","c6fa4480cadf8adb74814370b76d0703"],["/bugly 上传dYSM文件小记/index.html","0420b07efb10cf1c975797e82e4741fc"],["/categories/Advanced-Swift/index.html","ad19cc884ca715cc56312ffe69a59be6"],["/categories/Advanced-Swift/page/2/index.html","2974d2eaac143d497e2694c953206ba7"],["/categories/App-Architecture/index.html","1be99a300b9df38a1f70a927c9566c29"],["/categories/Array/index.html","5643be49b65a25a0bf83d3703ed057a0"],["/categories/CocoaPods/index.html","3f33245c5c72e90f807e3da1b4541aae"],["/categories/Codable-protocol/index.html","07de80f00c29dd9b1a6277783aeb6e75"],["/categories/Combine-framework/index.html","703f771eb21386e3c3c91adc183981e2"],["/categories/Combine/index.html","76569ea0a984003c8a001c83c526af8c"],["/categories/GRDB/index.html","f9e7c2e330ea19290720df17fed79c7d"],["/categories/Go-入门篇/index.html","b3a36ec9320c2f51a4de527293149e4c"],["/categories/Go/index.html","25e8d788a43335f30ba3fe4d44313f39"],["/categories/Grand-Central-Dispatch/index.html","1250d4d9a95e7d921ff4064c0baba52b"],["/categories/Homebrew/index.html","2358d479cdd19a1764cc74b679328350"],["/categories/Linux/index.html","9a87dce61ddf29b762ae6c4e4b189a67"],["/categories/MySQL/index.html","99f0644ef95790df1d990c933a7ed9b1"],["/categories/Promises/index.html","f73586d902fb796fa30c101dbf8e7ed2"],["/categories/Protobuf/index.html","b1983afdff88f91b33d94c2b7ed37555"],["/categories/Result-Type/index.html","0845aab57568fc0faf84da7b7fe187ee"],["/categories/RxSwift/index.html","fa1acde019b12f2966287f8be4803d51"],["/categories/Server/index.html","f75722a740050170bba573b0c42e26f2"],["/categories/Sqlite/index.html","5bda8af75d13e0e34810444e06cb1ddb"],["/categories/Swift-Apprentice/index.html","37d63ee5b3763cb2780ee262a108f491"],["/categories/Swift-Apprentice/page/2/index.html","75823cf79750e641170c96b25946ea36"],["/categories/Swift-Apprentice/page/3/index.html","1e39f28a1c264990d8e8628c3dc28310"],["/categories/Swift-源码阅读/index.html","f732d3ab3c1eb6ef1464e734fdb8df3f"],["/categories/Swift/index.html","68c164e19b625973a09f8cd995f4803f"],["/categories/Swift/page/10/index.html","b0fa33184ea6a73708ccaae2fdcce04a"],["/categories/Swift/page/11/index.html","023067a911ddc7fde922344681c584ee"],["/categories/Swift/page/12/index.html","baad9255599fde089fa1e23c0d955cbd"],["/categories/Swift/page/13/index.html","51041c30ae9c4fc122b4524a3d8c1625"],["/categories/Swift/page/14/index.html","bdece4b4962157abadc8eedc87efbed0"],["/categories/Swift/page/2/index.html","ea223e0c7647afd99cd204773c96e7ba"],["/categories/Swift/page/3/index.html","d12f114ab48bb0c0a47f05e7606c71b1"],["/categories/Swift/page/4/index.html","b96c8e09d833c7914907b1faf732faf6"],["/categories/Swift/page/5/index.html","4eccb9e9df3974f030ba3223e02197ae"],["/categories/Swift/page/6/index.html","0dbdb85fdf8237d206e3f2f389bbc8db"],["/categories/Swift/page/7/index.html","8ab01c7e66183c6220e76f009595b9ae"],["/categories/Swift/page/8/index.html","e3212ed349b66c0cbe56ea20a9e37545"],["/categories/Swift/page/9/index.html","b51e8673ade778a83a97c57f62989000"],["/categories/Swift5-2/index.html","8d2f5a20a1c2d1a9d0bf6ee92ff1a81e"],["/categories/SwiftLint/index.html","48def2b7e0ea1ff210e1359aaad1d2fd"],["/categories/SwiftUI/index.html","98b49fb26650f5cf35422754e0189f13"],["/categories/UICollectionView/index.html","4b073b18e1355af75db0ff7962daa801"],["/categories/UIImagePickerController/index.html","87965d98aa92105c1d904e121c0e8a79"],["/categories/UIKit/index.html","9051e08c2efba7e34bf3292faa83d79d"],["/categories/UIKit/page/2/index.html","6f2dde7e362b25daece87b46ee72c536"],["/categories/UIKit/page/3/index.html","e1369a0a421f6519b1dcfdeccf2a80d2"],["/categories/UIKit/page/4/index.html","e5262c210b87dd38e5bcc85d023c2d74"],["/categories/UIKit/page/5/index.html","de91462f802a70717958897ef0319046"],["/categories/UITableView/index.html","c4d024a2f3b88c582c2a0c95653dc83e"],["/categories/Ubuntu18-04/index.html","602f9a96f7ee89da7319fd04b5a893ac"],["/categories/Ubuntu软件源/index.html","dcbcfa7ee7e322fb634748b76f516d8f"],["/categories/Uniquely-identifying-views/index.html","0bff1e4aad7626fb70a7a13a60a8c236"],["/categories/VIPER/index.html","53e87519ddc47b3d53844a6ce49d8d6f"],["/categories/Vapor-4-0/index.html","c458e078f54873a77c762bad1701c869"],["/categories/Vapor4-0/index.html","996e83349507c843b633932869431ae3"],["/categories/Vim/index.html","128946ac05c141628024a71a3489ff5c"],["/categories/WKWebView/index.html","40bfa34c9134265268cc1b8430fe1bee"],["/categories/Xcode/index.html","a728898c3d582a4d58052f65b0c14689"],["/categories/appleOS-Networking/index.html","ee60ade51bfc3a2d7c1ae689912adfc3"],["/categories/bugly/index.html","ce966c0c23acd029610f599995f55fc8"],["/categories/enum/index.html","754c58a75bdead141dcf9902d85bde61"],["/categories/git/index.html","898ae05061067e2e64be70af02bcdb50"],["/categories/hexo/index.html","1b471a2fdb26ce62064bad07f4e2370e"],["/categories/iCloud/index.html","b1da50a0fc699f8bb0c4d1eb92389199"],["/categories/iOS/index.html","8ffb4cefc05c9a4fa4519ce4524e3bcc"],["/categories/iOS/page/10/index.html","96295e52a39e96403def3399cb35843c"],["/categories/iOS/page/11/index.html","a7025c65e8ca753ed822976cf198f759"],["/categories/iOS/page/12/index.html","cab9ad80398e84754d5c3f7cf088acaa"],["/categories/iOS/page/13/index.html","640f8906e52a9c594542f13a749db76f"],["/categories/iOS/page/14/index.html","4fbcaaaa23caf7991b56d7cf1d3ddfe7"],["/categories/iOS/page/2/index.html","bb188d022a2892ecab0a978c968b82fe"],["/categories/iOS/page/3/index.html","e29769a483793c3492a0c462a642564c"],["/categories/iOS/page/4/index.html","6d817123fa2a434408820903c38a2575"],["/categories/iOS/page/5/index.html","0791347f8dd2ee8940c6a701417915cd"],["/categories/iOS/page/6/index.html","3a5afe23acde759c451d9a95caadfc74"],["/categories/iOS/page/7/index.html","0448726a5b52b2cd4593c2fd47e95dca"],["/categories/iOS/page/8/index.html","88c5893006504cd38ef69efe19b38131"],["/categories/iOS/page/9/index.html","e9ef8b27df94a644aa56107b821a0805"],["/categories/iOS面试题/index.html","233470044fd9bdfb695d6c0827b7e7d1"],["/categories/index.html","440c350a14115b768609fc9ff9bcbb32"],["/categories/random/index.html","f409b76417835677db84ca1941009048"],["/categories/三方类库/index.html","6e787608c7b569057bcf0d8231f8bb72"],["/categories/函数式编程/index.html","a84aa157f3441bf6b4d494c738b79c19"],["/categories/子类化样式/index.html","c59ac1c69b1915fcea7fe0264161257a"],["/categories/开发技巧/index.html","81b3578b47681a5f31db7132aba77142"],["/categories/开发记录/index.html","96dd8fd6c8075485e5b91cde2f80c1d4"],["/categories/数据库/index.html","0c0ea2be6078c7928d4d35d7804dc10c"],["/categories/架构设计/index.html","ec967fd0f1313d4e80534762255854ef"],["/categories/测试/index.html","b071882da3619b69f256d2c448711a18"],["/categories/用户体验/index.html","339fef5c37e7070f3d34b45b8f9f3a38"],["/categories/用户协议与隐私政策/index.html","56005808788934716d4ad7edc5a28f0b"],["/categories/设计模式/index.html","3b55fcea820c12ebea50a6a7d7ced4c8"],["/categories/设计模式/page/2/index.html","b593f55d4914f0e22b50cc9e2e975bac"],["/categories/设计模式/page/3/index.html","d69f15189f9098be58c39e51f6844220"],["/css/main.css","ca0066845073187bbebb43db83860379"],["/hexo部署失败/index.html","8f885955883ef66ac058c5a2286d5b1b"],["/iOS 15 适配/index.html","abfdf3e49284d0024dbd3ce18025d018"],["/iOS VIPER架构深入实践/index.html","3f285c2aae88a56e40da8e909792f03b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","1e0946ca42a9b5d6065bbf96c435bc00"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","148afb6fdc823d6806e2d3081dbf2a9f"],["/iOS 自定义视图，输入表单和错误提示/index.html","c69f47c8f1bf9b6f5ecab301d7c89fcd"],["/iOS如何使用iCloud文档？/index.html","c804ead4234d07f1dbd509e08b31dd05"],["/iOS子类化样式/index.html","dddb6d77f3480d9262a4700302caf9d1"],["/iOS开发记录<一>/index.html","2c1c5af43f15ef655d7c7515452ebcfb"],["/iOS自动化布局编程/index.html","15d2f8769d0aade48ea979d98b3a7e0a"],["/iOS自定义转场(By Swift)/index.html","dfa44aa6359fe34a13a89df1236fb402"],["/iOS项目架构：使用VIPER/index.html","6000af9630be78d41113ba8d422233a5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","348ca579fee30134cd9df25f6be35d25"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a5e4b24910cb1df7723213741ba2a807"],["/page/10/index.html","2f0197f90bd104ca063193c902be3cae"],["/page/11/index.html","3bc123d90c66f050fd9bfe7d37266290"],["/page/12/index.html","6588ee65febf89a2ac358b8fa1674ce1"],["/page/13/index.html","cfdbcf09916706718ee6d6ddfc9d3fe9"],["/page/14/index.html","40fb68faeaf894fcb65f6d8e856a53f4"],["/page/15/index.html","cb666b850171e73b9f94014e964c4286"],["/page/16/index.html","79b8bc91b1bffd3656105e36971d063a"],["/page/17/index.html","e1cc8436aac30eff38c5633ad129e50e"],["/page/2/index.html","2bf2820d2560595aff65217a1c940343"],["/page/3/index.html","f2d4a0c603ca2f6cb2d69bc430be11d9"],["/page/4/index.html","5dc88f254fc9181e68d392c90c2a6625"],["/page/5/index.html","12997aee21a5777f7c0f5dc3eb5abba9"],["/page/6/index.html","f588bda9b87db40c89984c8185a6b3e9"],["/page/7/index.html","b51857bd5ade18175dfdfdad5d7f7ccd"],["/page/8/index.html","cd5a60b930ffd21521524d8fdd49f181"],["/page/9/index.html","454453526e17d6e337252fcaaf26e896"],["/schedule/index.html","73801a4c0c2e93584a1715553a24e1d9"],["/storyAppPrivacy/index.html","e149b2aafbae05bd19137d86405784f1"],["/sw-register.js","1cf5ebde07507ecbc6097565cf1ab361"],["/tags/Advanced-Classes/index.html","832d8a29a03828ddbdb9e0ea53ea811e"],["/tags/Advanced-Swift/index.html","7aa6bd3576b2184f48014cd17c933220"],["/tags/Advanced-Swift/page/2/index.html","55ed80923e44e5e7bb5d495b25fb97a4"],["/tags/App-Architecture/index.html","b044bdb0570676492db22e5f47ff38cb"],["/tags/Array/index.html","c8a5f276f35bfc4e0ef11f99539f1b03"],["/tags/Arrays-Dictionaries-Sets/index.html","0e03022de9e3f06b06d59cca79d024c9"],["/tags/Authentication/index.html","552815bd523014f2cad7d0fa98f1b930"],["/tags/Build-in-Collections/index.html","e02895e250f93aca6cb1c0d575082d75"],["/tags/Building-Your-Own-Types/index.html","bf78105f64de8c85d8dc0a565df99b6d"],["/tags/CMS/index.html","07681df7fb34d3f286350dbebbe0d9b8"],["/tags/Classes/index.html","ff084076e1049dfe32f44e9472204d4e"],["/tags/CocoaPods/index.html","3ade8a708f7f13d16244586baa064210"],["/tags/Codable-protocol/index.html","47bd3d34bbc41f56c0fa14a692232486"],["/tags/Collection-Iteration-with-Closures/index.html","2eaaa0d0720196ff51ccc715b1564466"],["/tags/Collection-Protocols/index.html","ca22123551fca2a31778eb6b86ca4883"],["/tags/Collection-Types/index.html","e46385c1320da4f00a8eb32b75670876"],["/tags/Collection/index.html","4e357e5fdb8c67e3c210052b3c290f76"],["/tags/Collections/index.html","eb510d0f6699bd00ffc76c691cf1b8c4"],["/tags/Combine-framework/index.html","e2e2bfa97b27c820fb13e4a8fdb388e9"],["/tags/Combine/index.html","e67f389efc235f22f987e6cbda75e0da"],["/tags/Dependency-Injection/index.html","ac333a35e86983589fc458b06916f74d"],["/tags/Encoding-Decoding-Types/index.html","9c13109d7610f8876f1fef7de1ecdd83"],["/tags/Encoding-and-Decoding/index.html","b64b53911b72ef2f020ce886de740d1b"],["/tags/Enumerations/index.html","df61999ea13491b3d65a490c01274345"],["/tags/Enums/index.html","f5afd175ff3333939f93875b63ac9624"],["/tags/Error-Handling/index.html","68ccc8531e2d7c328269c9c2c7d43e55"],["/tags/Functions/index.html","69e561861dccc105c870b7f088bf35e8"],["/tags/GRDB/index.html","e35f3189fb6cc93cb35e1ae7cb58cdda"],["/tags/Generics/index.html","4485e6eb6ae1077df605736285060125"],["/tags/Go/index.html","31a49a6eacceed2647d83837f699591d"],["/tags/Grand-Central-Dispatch/index.html","1bfd3ce9054f8bfe286cb66d7c0b0a4a"],["/tags/Hello-Vapor/index.html","c654e5785ceac1f8f9ed517828cf127a"],["/tags/Homebrew/index.html","5a2dcb4b3bd56605dc400e5c469b79e5"],["/tags/Interoperability/index.html","2d84d6d6ea5aa9873d6e69e071ca6f59"],["/tags/Introduction/index.html","33158285a0a5f9645aedf70d8bd903cb"],["/tags/Leaf/index.html","454a1cc6ecfb3feb3ea791cde7714327"],["/tags/Linux/index.html","14f9e42ae86981b53a4365027fe6b2f3"],["/tags/Methods/index.html","b7271fe955f0ab9e7c51ff284249644d"],["/tags/Modules-And-Hooks/index.html","b03684b363397847e237540083a79dd1"],["/tags/MySQL/index.html","c13ab4c9c606078980a0bd23991119d6"],["/tags/Optionals/index.html","68565ed857ecb18e7f5ef8e357ea6abd"],["/tags/Promises/index.html","042edf483dbc3c1b60e9ebbfe59703d8"],["/tags/Properties/index.html","de200da262392903b1e17f2744e6a887"],["/tags/Protobuf/index.html","41baeeb04cfc87798233732848d39864"],["/tags/Protocols/index.html","b06d327a37849f071685dd966acd147d"],["/tags/Result-Type/index.html","48564d9e7153a9f2406ef1baaa8799d6"],["/tags/RxSwift/index.html","4f5e0a7e927b2f2d6161ef702c5d862a"],["/tags/Server/index.html","6f8dc8d155c477a9817771df7aca998b"],["/tags/Session/index.html","ffb320ed1086d7efabaaaaafef258a54"],["/tags/Sqlite/index.html","79afe6df31dbf5981d5a04d92397a709"],["/tags/Strings/index.html","ec3ca0838ba53cb84bdac7f18e269854"],["/tags/Structs-and-Classes/index.html","fe40f39105fb81c54509fafe07fa230f"],["/tags/Structures/index.html","feafda029a42f55e5ca548621f15c4dd"],["/tags/Swift-5-0/index.html","36745681abb5aa5f210b52f5433fa9c9"],["/tags/Swift-5-0/page/2/index.html","9f31df176184642fc9bd0854ab97e8a0"],["/tags/Swift-5-0/page/3/index.html","7964afb4833612ffa69fde34457b390f"],["/tags/Swift-5-0/page/4/index.html","74fd1321b29f6eaa8e32dfb01b97736b"],["/tags/Swift-5-0/page/5/index.html","4aa8dcaee373edc11b1f090ab81bb835"],["/tags/Swift-Apprentice/index.html","65b9a1ee65a21816001deea494ad9629"],["/tags/Swift-Apprentice/page/2/index.html","37fa015d340b6badc5dd30b94334b49f"],["/tags/Swift-Apprentice/page/3/index.html","6091feb2c2b5eb28b15ffc0f54a7b4f7"],["/tags/Swift-Package-Manager/index.html","bb8d7b2516f1f23514d5a06a61e0de72"],["/tags/Swift-源码阅读/index.html","9e27d4fb142f144d7a5045da78ba2b3f"],["/tags/Swift/index.html","5d3d4af2c7d8749d025e9fcd304333df"],["/tags/Swift/page/10/index.html","84aa7de94c39ffb5647981d3e8673746"],["/tags/Swift/page/11/index.html","3928adcfea162766cdcf70ecc5d3136a"],["/tags/Swift/page/12/index.html","f64566dd1b1ee307a8617748be7b9c4c"],["/tags/Swift/page/13/index.html","9d097dd31b66319e17aa4aeb1cec32f7"],["/tags/Swift/page/14/index.html","0efab354257a9d3327f82d60bcdb0d31"],["/tags/Swift/page/2/index.html","e5f5b9f055d47bf5441f42e18992dd88"],["/tags/Swift/page/3/index.html","a4768b770ae30f726999df537550fe09"],["/tags/Swift/page/4/index.html","fa331373e06052f9eb63701145c9daf6"],["/tags/Swift/page/5/index.html","1af76db367171cf9efc6878ca3d598bf"],["/tags/Swift/page/6/index.html","2d10371209c6208e19a5f57a6344f711"],["/tags/Swift/page/7/index.html","7170f6b8a19176cbf05db275aecafd4b"],["/tags/Swift/page/8/index.html","5dad4a19a8b2de34493ce2f953f57230"],["/tags/Swift/page/9/index.html","0814777f687b40cc3ed049617cd5b872"],["/tags/SwiftLint/index.html","a7df10028cd0f24d4a97499068d084bc"],["/tags/SwiftUI/index.html","3c5153f6dd71131034d71919f053f62b"],["/tags/UICollectionView/index.html","12927fcdc35860e230aba31af2414e2b"],["/tags/UIColor/index.html","45ee5ce214fc797cb208feede1aa9b54"],["/tags/UIImagePickerController/index.html","a0b60b7013a84fe7b908e8e9e3ba4d22"],["/tags/UIKit/index.html","e69504474c99a945daa7be03cb614cb7"],["/tags/UIKit/page/2/index.html","c7f990e3fe11e157125c273423f69df9"],["/tags/UIKit/page/3/index.html","072263e33b641f0da6ab93648ef26ba0"],["/tags/UIKit/page/4/index.html","69ec3d153e9de04e19bb6b8473acc930"],["/tags/UIKit/page/5/index.html","cc36b3597dea6a92af95bd375c74cbd7"],["/tags/UITableView/index.html","d93db8c43a5718d9a7ab8f958b236654"],["/tags/Ubuntu/index.html","d4d38635dfcc8ce0cf323a82f0634732"],["/tags/Uniquely-identifying-views/index.html","17688a949b9d1275a99b736ef360f5cf"],["/tags/VIPER/index.html","885ca00486705fa60a33120cc54f9fc8"],["/tags/VMware/index.html","3e854787b91f9cbad3741ebb9a2ebc80"],["/tags/Vapor-4-0/index.html","39c6c05afc7634ed57979c49c6c1f2e4"],["/tags/Vapor-初探/index.html","9f7902d766417fb66e15a28d1def3576"],["/tags/Vim/index.html","3ec9eb2ba03299687405cd27cb59dba0"],["/tags/WKWebView/index.html","a334a6836afd56bf2d85e5f5525c9cd3"],["/tags/Xcode/index.html","1bdaa640904e7c6cefda11fa5d27489d"],["/tags/appleOS-Networking/index.html","c8a85e2a58a1017c2834d367f993b1b7"],["/tags/bugly/index.html","8b3441d0673e061cc5ce2b44167c1043"],["/tags/enum/index.html","236b4f046b9d58d6a18cc4405f40dd3a"],["/tags/git/index.html","0df1f588496890c87c5df238d03ce81a"],["/tags/hexo/index.html","e22fe913e87504bbb4685b7f434bcf0a"],["/tags/iCloud/index.html","0d643714f26469448ac138555a37ef10"],["/tags/iOS/index.html","f0c40d3329cec6d449fa15b445adb93a"],["/tags/iOS/page/10/index.html","89d1d0892f89e196185deade9d46601a"],["/tags/iOS/page/11/index.html","22382cb2415f23f04cc1c7e36feee43f"],["/tags/iOS/page/12/index.html","90485f4e1b64f9ad7ffec3203be20a85"],["/tags/iOS/page/13/index.html","de4f30f5cd26cb3abfb1b1519f2f0552"],["/tags/iOS/page/14/index.html","32f6dd15821653cd4917da27cf522289"],["/tags/iOS/page/2/index.html","bcabdac3026aa95466c906f79f5103c1"],["/tags/iOS/page/3/index.html","acf3d55acac5790249534a71483c8f29"],["/tags/iOS/page/4/index.html","9288d17d38e96a803f8584e6d02ee029"],["/tags/iOS/page/5/index.html","bd48e4dfc5b6181c3527a77e4fd2c484"],["/tags/iOS/page/6/index.html","946e8c27227a6e668d6e39642ac26369"],["/tags/iOS/page/7/index.html","58640ea6ad215724c3ab773dac1b8010"],["/tags/iOS/page/8/index.html","73b5728e847a394ccc4bd98cc7f858a5"],["/tags/iOS/page/9/index.html","6723b0eacb6fa35c3db90193ac39591d"],["/tags/iOS面试题/index.html","1000e404967ff16bb5ed50561cf648e6"],["/tags/index.html","a62d12f651db846f5743b90dd51ebec9"],["/tags/non-optional/index.html","a61a5b547cd71d55a829de7c05d50d9d"],["/tags/random/index.html","bc99cae3d6170cf0618c5090d7c2f4b0"],["/tags/transition/index.html","2e526ad378ae107dfb3b4f2efa879217"],["/tags/三方类库/index.html","179ef7535fd02325728f2de03f0d85f0"],["/tags/依赖注入设计模式/index.html","dc56061f24503702ba39b0d24f9f0bc9"],["/tags/值类型和值语义/index.html","5beedec9c96f9a257cdd8d2b434a63b6"],["/tags/内存管理/index.html","b36ff6c81cd39cdc2851eec1e9555dbc"],["/tags/冒烟测试与回归测试/index.html","c1a2da4c455fd3caa70356f2f1824790"],["/tags/函数式编程/index.html","d704c50415e861710b8fcbd5d9176fc6"],["/tags/创建博客数据库/index.html","93f42a8603bb82c20531a2be938cd764"],["/tags/初始化模式/index.html","5064b60e8c772c77c1e49fc37d60f1f7"],["/tags/单例模式/index.html","0d496fa0e2ac03e6a913e48d32670003"],["/tags/原型设计模式/index.html","d9605fde8eec502eb5395579363560e8"],["/tags/命令设计模式/index.html","dc332dcc38ed1d02f6c6b0863a7df996"],["/tags/基本控制流/index.html","713d6c546bb1375eba28a90778b16a10"],["/tags/基础语法/index.html","5eec7e94c6f062e4d4007bf93a006338"],["/tags/外观设计模式/index.html","ced967fbea2b29c59364a47a9c798e5c"],["/tags/委托设计模式/index.html","c10686ae216a609644def19f24dfde18"],["/tags/子类化样式/index.html","346ee17fb2fcd45665d952278f43dc06"],["/tags/对象池设计模式/index.html","59547c5055b7b4467ae92d994b645ebd"],["/tags/工厂方法设计模式/index.html","377131537ccbbf432ebd3a60ebc6d0ea"],["/tags/工厂模式/index.html","f61d352ff31a07ff88a1b4ecc94e446c"],["/tags/工厂设计模式/index.html","732b6cec780e5b88809465eded4bb470"],["/tags/开发技巧/index.html","22d12fea1c129ba14cb55f7e96e9007f"],["/tags/开发记录/index.html","f278aa0237538d9f2e5fe023fa814f3b"],["/tags/懒加载模式/index.html","f00376ec71c3d0b6593a873bc81b3d4f"],["/tags/抽象工厂设计模式/index.html","803f412e5fbaaa51bd68df46b584cc1c"],["/tags/数据库/index.html","9cf1d6385052df33388dd1b964a4362e"],["/tags/构造函数/index.html","978978d17de8ab3ca8b89e9b950d8424"],["/tags/架构设计/index.html","026c3d49d8a56e0f46e0dd5ba42e0807"],["/tags/模式匹配/index.html","702f1c752f651ff80b9e8f5a7a20ee50"],["/tags/环境搭建与验证/index.html","b7e377abe609ac9f1c2882c316650006"],["/tags/生成器模式/index.html","4a19b64ff37124b48a4c96c7dcd2bdff"],["/tags/用户体验/index.html","100363f339bf28eef446a8eca38b3684"],["/tags/用户协议与隐私政策/index.html","350f447fea5f1d7a592b76f58cfd680b"],["/tags/类型与操作/index.html","c4bbc3151aff6681dfb1850d1ddfd838"],["/tags/自动化布局/index.html","f53eca0950021b436abf13d4f5a914e3"],["/tags/自定义UIView/index.html","27244196068e20cef69e0e595d86ecb8"],["/tags/自定义转场/index.html","b4f9ac1dcb9a464bdc8c781c8a8ef56a"],["/tags/自适应布局/index.html","95275b33b066b9e92698de32705b36e1"],["/tags/表达式、变量和常量/index.html","9b7e3e4aab2dc3557a601104e9aa6ffe"],["/tags/设计模式/index.html","e8cc2d8d73394e2406ce2787e80fa131"],["/tags/设计模式/page/2/index.html","127874be34a3cf3b8a0a2d1b6a68e0d8"],["/tags/设计模式/page/3/index.html","94cc7d659380533a09ef8544fc05ee9a"],["/tags/访问控制和代码组织/index.html","28531d9e25e3211d2b4e79f01b7eabf0"],["/tags/运算符，下标和键路径/index.html","ab6453406c879ce3845baf24eaf90a25"],["/tags/迭代器设计模式/index.html","080e44712075cfa8c4fad2bd1daf3552"],["/tags/适配器设计模式/index.html","f8121d9966d5d6c7a225ca4caab4d7cf"],["/tags/错误处理/index.html","c6c6a9a09509e647fb3f17c43237b7fc"],["/tags/静态工厂方法/index.html","6bd99f6b454673d24725a59c0e72b0df"],["/tags/面向协议编程-OOP/index.html","45b6514f7f5536ebcc2453227bb0b0b0"],["/tags/高级主题/index.html","b37c1a50b381d2747e71046997bcc80a"],["/tags/高级协议和泛型/index.html","7758f67384eaff56c047c89ad2401b33"],["/tags/高级控制流/index.html","cbe1c3776e7519a36f19c95627c8eb33"],["/xcode 常用的快捷键/index.html","631d3ad60e44251bbe5bdc6004d4c494"],["/为iOS应用构建输入表单/index.html","8e243beeeb79a098b381bcae33e0c4ae"],["/产品开发的幕后花絮/index.html","c2468b6949fa0cbd7102adc40ab592f2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","272c356cb2d1edd4ddfa38c534d6c8f2"],["/冒烟测试与回归测试/index.html","19f66356d7b1b5447435bf21e2af768c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","231c623845fa84651feaebc990028e12"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","faab9215f9f35b008eeb32c1d737e640"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","badc2f5357f67aa55de388139d0fcb23"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","e58c1f2c32d7baa5a5e2e678f9ea0d3f"],["/在Swift中创建自定义集合/index.html","d5b1f680436836142dd0b1dbab201349"],["/在Swift中处理非可选选项/index.html","0edc8cf504f3addace8f9baa3d0cced1"],["/在Swift中生成随机数/index.html","5f0891539d7e05ae5c6c73111dba6ff0"],["/在Swift中重构单例模式用法/index.html","3e4576c5b9c252ada5e5f3b256449783"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","50261d3a45c67221134026e6e1a8c198"],["/如何为VIPER编写服务？/index.html","36bb0810d17df60480f63bb4b93dfb82"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","67763f1dcced9d59cc4d78cab256b14a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c23204521f22071052bd4702503bebcf"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","8345c4c6fddfcaa678e9c8eedd111f5b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b1f77f392a8721b946a9d80f3b2f861b"],["/掌握VIPER架构/index.html","daae3d47abaa70aef2f9c40ff96f6918"],["/揭秘 WordPress Hook 系统/index.html","5db4400a601d9da8d77ecc7f54c9816c"],["/比较工厂设计模式/index.html","e882ab48f029f4267b65207be4b44022"],["/深入了解Swift中的Grand Central Dispatch/index.html","ca31eedfdcf58976bacf67b448be26ef"],["/深入研究Swift框架/index.html","5b48dccc4e255947905cbc0892010bdf"],["/适用于iOS开发人员的VIPER最佳实践/index.html","74011e88a4cc79f1eaf999f6e3c2c2b9"],["/选择Swift而不是Objective-C的5个理由/index.html","8acc0dced018bd15261833b5a45ef8c8"]];
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
