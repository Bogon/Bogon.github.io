/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","3885c1ce4e99d1fabccc5d448d029b86"],["/2020年iOS面试题总结(三)/index.html","d79d4cd113243f281e02b7283d0d5efe"],["/2020年iOS面试题总结(二)/index.html","c546e95b50ce95fbeff1a7ef183e893b"],["/Advanced Swift系列(一): Swift 简介/index.html","bd4f9d9ae94a0e0a5510ce0b2f18bb32"],["/Advanced Swift系列(七): Strings/index.html","ffa650cbcb3039fc1fbc34fc9185ca24"],["/Advanced Swift系列(三):  Optionals/index.html","b62ab7775acbcb259bdbe285b6de177a"],["/Advanced Swift系列(九): Protocols/index.html","65ae04d4a410ab648d0198d532c8fc1f"],["/Advanced Swift系列(二): Build-in Collections/index.html","69743607b6fc4b7696f11276b5c06b7d"],["/Advanced Swift系列(五): Structs and Classes/index.html","d04290204cb081fa30d13b74237a7c11"],["/Advanced Swift系列(八): Generics/index.html","57076242abf367558da801d68500d51b"],["/Advanced Swift系列(六):  Enums/index.html","5a4449693afe8af0c0f2c893818733c6"],["/Advanced Swift系列(十): Collection Protocols/index.html","4efdd7be39930a7cbbec19660bab6fda"],["/Advanced Swift系列(十一): Error Handling/index.html","9fa4352ba9a51f79ff66a1f329aa4290"],["/Advanced Swift系列(十三): Interoperability/index.html","1f81848f83280b7054efca4dafa8dde6"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c5147783a33882af9bd617b341584b03"],["/Advanced Swift系列(四):  Functions/index.html","95962c162b8c1fab04d9d15789e44898"],["/App Architecture系列(一):  简介/index.html","a171ded4920118a0e0cd15d8b8f18f23"],["/Functional Swift 初探/index.html","f2ffa2dbb3ac91b2f6eee548f3949487"],["/Git 使用小技巧/index.html","063b477b8af5d2f08da2371a1ea68acb"],["/Go mysql Tips/index.html","790224057f0a6d876f088c139d6a2918"],["/Go 基本语法初探(一)/index.html","5c2dad40512fffc9b6c263c8a5d95167"],["/Linux VIM 命令及操作小结/index.html","d99d04bd9f378dd011497197d5f8b568"],["/MySQL 基本操作/index.html","c9608d5d6a7f9d8b95a0daeb0c675f56"],["/MySQL-列类型和数据完整性/index.html","c49ffbb916bd38c5b42e1f9dc0a7dea5"],["/MySQL-数据库设计和查询语句/index.html","2e3c3b6dbc0b41d5da5d77727b6274cf"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","42159a48749994bc201112e9be0ce7b4"],["/NSCODER和SWIFT初始化/index.html","196a4d6087684a47d5b955cf211fef00"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","9c4925150906270e693a0d3d3ba6266d"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","bb15c0ea8f86c0396d0762a92b9cd830"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e8758ed879ea4b1f80d70f9a27ef748b"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","885c58229ccbe524e058092d1921e5b9"],["/Sqlite 使用Tips/index.html","8dfb79ce26d96cf6ce6e91ef63a280cd"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","0e3fc6924c6b77cf4878ec28c075447b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","1dcbb53c24c257e9e63176d5d75f5dd6"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8e9b407f9043a9669a6709902fbdc170"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","cc0145910cb0a2ba5eb5809787053d4b"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","105f0604d57bfb61bce060886768823a"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","cdf17969f73fe20a6812266963f4abdf"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","15666e838a3da9f5e5211301a6c06551"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","9965856f58bb8c19442143e1956685e9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","420429e5ce12c6093a9908dbbe3d2352"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","dfc66bcd007cb0c51ef808cdab8011d3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","50a4a2edc0064f650e64a0104ba36374"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","922af969fc4b289b032854082439f90f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","f8bcf3b6c410cc1453968f1edba5c800"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","eade9b8fe728ac8b5c8c07d1297f4087"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","a82c6170494fa9669a7d5125b599b9b4"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","6871ff2a77c079f6963014acd842216c"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","621894ffd8ad5293bf3919b6db147792"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","8483596d713dceec3057a3cb7aa81422"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","54af02e882023286d6070fe90f3bc73f"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","cd7e04a289ac025710c581ab8bd6fe90"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ae682c82230a56c3ac93594bc1ae4e7a"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","3cdb4990076cd53fb725cda1307fd103"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","125400e2f3c167a3c77eff9a7effba52"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","68234652e5cd87af31c5ca41d0866cdf"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","cd825e6018aa41568749bd584466c237"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","031489535e0dd7a5f05ffb5b0bba0995"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","55a13a524a6a774832e79fbf0c1a9f31"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2740d2dcb23a28ad1cbee28e8e7185ea"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","524601436586795518a419dc558fe65c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","331613790456ca5cc2408bfa1b0e975e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","380fa8c2eaa31db05320c040426d5a3e"],["/Swift CompactMap vs flatMap：差异说明/index.html","0a5b838529b9588376e57682482e9314"],["/Swift Grand Central Dispatch 深入实践/index.html","169e43677a26be00605b9374581a5442"],["/Swift Lazy属性初始化/index.html","b1eebeb9a5e0026eef2412945ccb0a64"],["/Swift Promises 初体验/index.html","ee99cb22e3b930c24d6eb1d5ecbc6c85"],["/Swift Promises 探究/index.html","f2ea4d6a9bdf3f12608d2adec612011e"],["/Swift UICollectionView使用指南/index.html","1bb735912116ce0e48605e53787929b6"],["/Swift URLSession && Combine framework/index.html","e54d6723c8e8e58b4eee3ab369b62a68"],["/Swift tips/index.html","a13e7bbe68f0cd3f6de7c3a5fbfc8674"],["/Swift 三方库：GRDB 使用指北/index.html","98a8ddf9fa99be644bcc89cfa3994ed1"],["/Swift 唯一识别的视图/index.html","11a8fff425c441bf761c50322bc476a4"],["/Swift 如何学习现代UIKit？/index.html","246412b25553bb6d993ede32ea94df6e"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","a1ed5ac5e85e958a3ba2e7e2d589e0fa"],["/Swift 用 compactMap 替换 flatMap/index.html","a6687b2bb554c8e1258877a545d13a7d"],["/Swift 选择和播放视频/index.html","c90a11e37621ac4efce62a9630d9dcb5"],["/Swift中UIColor最佳实践/index.html","7fc46fbcabfa29bffbbe5b4229566795"],["/Swift中快速简单的工厂设计模式/index.html","fa24a05df61ca5cb066f4b2592a76475"],["/Swift中构造函数与静态工厂方法的比较/index.html","acfdcf234a5c02d2fd8600d44f2d2a2a"],["/Swift中的UITableView教程/index.html","904f0e35d5404d1ca949b5fa9045730c"],["/Swift中的懒加载模式/index.html","7f274c9734432b9d83d2a205cb3a7f5f"],["/Swift中的模块和挂钩/index.html","96092906dfad201823d65b0a779d6b9b"],["/Swift使用布局锚点添加约束/index.html","8d79e6ddc1df23013448033fcd9439b7"],["/Swift依赖注入设计模式/index.html","f9e42064bda11056fa8a90e1271bab74"],["/Swift关于Dependency Injection (DI)/index.html","fbdd2bc33d0a2c3941330c4dd03d3b98"],["/Swift初始化模式/index.html","b738e8cf48bf6e1827308a7e713b8e87"],["/Swift单例模式/index.html","925ea0138e461add2fb9f251900dce16"],["/Swift原型设计模式/index.html","64d74cb37192c6a5b2ba6ad19c969470"],["/Swift命令设计模式/index.html","3306bdec0adc0fe35df515f86f832b40"],["/Swift外观设计模式/index.html","73d4e4f545ca6860e531c9b0a4f0bbd8"],["/Swift委托设计模式/index.html","41f5ce48ffb340710f339f548b3acd44"],["/Swift对象池设计模式/index.html","0cdfba65284c83bcbd1ed341d269d8a0"],["/Swift工厂方法设计模式/index.html","15efcfb2bafcfc6e682de2b5137f7d94"],["/Swift带闭包的懒惰初始化/index.html","ad7e6f2b5fb4e20d1b7d58417b2f35d9"],["/Swift抽象工厂设计模式/index.html","10785ba1131007c828332dd110a5d6f3"],["/Swift掌握iOS自动布局锚点/index.html","8ebbd87901469b3b30a87132871fdd0b"],["/Swift支持旋转的自适应单元格/index.html","66c3b4cabdb35d5fd7ca12407eead0d2"],["/Swift枚举值/index.html","7613f0ad3bc1a5182d92e41d557de839"],["/Swift生成器模式/index.html","f78a8385bdbe47c0edd1b8f354f9ae7e"],["/Swift结合Xib文件自定义UIView/index.html","221b4aef224c783a8fd247ad356595cf"],["/Swift编写的20个iOS库(一)/index.html","f77de6fa7f0d32c32622dc9c8d3be0a8"],["/Swift迭代器设计模式/index.html","a3fece6bf136c23df6bcf17f1d1f31b2"],["/Swift适配器设计模式/index.html","3c7f33b2692431de5eb4787444f98f56"],["/Swift静态工厂设计模式/index.html","2249234f65041f01dda0137a11df875e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6e7dc88e91b70c30366937f8699b2c03"],["/UICollectionView data source and delegates/index.html","57a84e349e62c9c49002103098d49313"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","518ea9eecf4a3413f71dfdda040d1422"],["/UIKit初始化模式/index.html","c9e5878747f6ae0cfbe986ed030195cf"],["/Ubuntu18.04替换国内源/index.html","9e83bc234555e90220bd2b607e2f37b0"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c8f71b9d49c11e10890c0f986fa56d48"],["/Vapor系列 (一) :  Vapor 初探/index.html","aa1b7f7b19ef44658d68f95ff130572a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","dbef7afa193ee34a4f0da0b9a5134f4b"],["/Vapor系列 (二) :  Hello Vapor！/index.html","891fe46cac1ab807d199bb35d39b6d9a"],["/Vapor系列 (五) :  使用session进行authentication/index.html","1971c44a8666f2a85d9a2c0e456e2090"],["/Vapor系列 (四) :  创建博客数据库/index.html","d2ecb94df8e416751d9646906f4d606b"],["/Vapor系列(六): 徒手撸一个CMS/index.html","6cc4ad75f56f54c774cbbd78f0e26561"],["/WKWebView与Native交互注意事项/index.html","3b2af875bf93e7db17e9a1510b548604"],["/Xcode扩展/index.html","cb22b7d8e04c48182041d43e7655f951"],["/about/index.html","4a2402dcb162cd824d932d21bb84cc0c"],["/appleOS的Networking示例/index.html","0d66f2cd5871bde79e45d543ad818b7f"],["/archives/2020/03/index.html","d0265f8bad2f13ac1eccb112712c8949"],["/archives/2020/04/index.html","7b2b74dd9667adde2b076550ed15353a"],["/archives/2020/04/page/2/index.html","6ae211547e7213e61532a67af5336d8a"],["/archives/2020/04/page/3/index.html","2b8b3bcd4478ca385e5f7a3c576cf745"],["/archives/2020/04/page/4/index.html","2679b0078a2299d87f86e241d339cf70"],["/archives/2020/04/page/5/index.html","1bd56af35662f2c0d29c2113cfd2776b"],["/archives/2020/04/page/6/index.html","94b98d9d5e8fbbb9554c6359a1c5dc38"],["/archives/2020/04/page/7/index.html","56f55306f285e7a1e74bb6797bb20634"],["/archives/2020/04/page/8/index.html","257deae96fc620ac615a597e3c3484f4"],["/archives/2020/05/index.html","8a36ebc86fb7182cb487653110583f3a"],["/archives/2020/05/page/2/index.html","030fd942941546686e61779a47f1c7c1"],["/archives/2020/05/page/3/index.html","87967f4066b3c6b5db5749863b2a4790"],["/archives/2020/05/page/4/index.html","0eed3a6cfc64a953e68e4776bf95492e"],["/archives/2020/05/page/5/index.html","327d833419b0e6b45dba33208dc31831"],["/archives/2020/06/index.html","dd26050af29dcde97a31874df93dcd7b"],["/archives/2020/06/page/2/index.html","5cbd8243eee448dbb41865e0b5ea3f36"],["/archives/2020/08/index.html","43496fac08764319610ee51cbea2093a"],["/archives/2020/09/index.html","87c6484077b6b541cf23dc61de8baf9a"],["/archives/2020/10/index.html","6e9c75d2357f339204c36bc3027f8a1f"],["/archives/2020/11/index.html","b40be5923ebdeeecdb759496cd620128"],["/archives/2020/12/index.html","412777c7cffdfd76a247fecdaa0f62f3"],["/archives/2020/index.html","df57ada48b24458cbffc385e01589a70"],["/archives/2020/page/10/index.html","2a123ef66d01eeab292b42b58490da4d"],["/archives/2020/page/11/index.html","90c8eb238fd688822fc05eadcbecb7bf"],["/archives/2020/page/12/index.html","aba480cd327c75ae136a12c11aec8054"],["/archives/2020/page/13/index.html","148e8e5a5fa59a36b6f7aab53e43f45e"],["/archives/2020/page/14/index.html","695c84e5606c89a59137a7ae58e95dc5"],["/archives/2020/page/15/index.html","056bf50dfb05b8491783bc85dfd7b588"],["/archives/2020/page/2/index.html","94795bad34ae39dd748927c815fa3da6"],["/archives/2020/page/3/index.html","9e500bb53e8fb1137ca46920c9e1b207"],["/archives/2020/page/4/index.html","5edd13339459b65e4c69a26e3a752583"],["/archives/2020/page/5/index.html","ef528cdae9a833686389353d0293d2da"],["/archives/2020/page/6/index.html","aa2a05135587ed4d4c768d7c1611800e"],["/archives/2020/page/7/index.html","08f3225615c2493125e6752becfe22d7"],["/archives/2020/page/8/index.html","7829f90f40182324bbb8de451f4bb54a"],["/archives/2020/page/9/index.html","85ef8980d5a2e61dc5db8b528afa4f57"],["/archives/2021/03/index.html","35e342922ed383f47c7af017d39e742a"],["/archives/2021/04/index.html","9f61c4d8cb23d96b76447757ef2eb645"],["/archives/2021/05/index.html","7fe9802c6282d4ef52c02f70ac96dc1d"],["/archives/2021/06/index.html","dd089e8446e33ab27c39e688d521c0ce"],["/archives/2021/07/index.html","6c24bc904a775cd9736489c23ddd8cf1"],["/archives/2021/08/index.html","09a9f196f75012cdecd708e482f42571"],["/archives/2021/index.html","fb3671d4267510703055a65682c5d932"],["/archives/2021/page/2/index.html","7ae754eaaca40943968174b8fe0803d6"],["/archives/index.html","f0357639a246dc6a57f638304f707325"],["/archives/page/10/index.html","20bf9abdcd263a3dc2a95716c68cae84"],["/archives/page/11/index.html","d1bba64b123b6571bac4aa17be5ba6ba"],["/archives/page/12/index.html","7cd9bbbdffc3eb1ebd941070c88724a1"],["/archives/page/13/index.html","fe0f5e969185d4a81649c72e6478c12c"],["/archives/page/14/index.html","fa30eb0e9b8de7866f376ce153886ef6"],["/archives/page/15/index.html","6052ee436e82fe02d9d13ca1b4b2d24a"],["/archives/page/16/index.html","c4b805c7b76654c3b7511cb3aa9d42bc"],["/archives/page/17/index.html","c4b36c47d97649783d2c64129e7a0019"],["/archives/page/2/index.html","49c90bb4c40e4e396e1639708600f0df"],["/archives/page/3/index.html","5da1eb7b9b6ea37a8576276bc99d06a1"],["/archives/page/4/index.html","c47e59ed426a89e7c3114aae5de6fe3e"],["/archives/page/5/index.html","3768fea546a3fa98ab9946731a9ef996"],["/archives/page/6/index.html","b48f612a0f4c1b3b25e4e9293c590fe0"],["/archives/page/7/index.html","e69cbadda758090664bb6884800c5124"],["/archives/page/8/index.html","541588fbf7906ef316633d9895cc5167"],["/archives/page/9/index.html","9c5bd5101d2d16ffb0b7238aaa699f8c"],["/bugly 上传dYSM文件小记/index.html","b6c075b90916b1d31161cf16b4054ba0"],["/categories/Advanced-Swift/index.html","4b9eb1acd95d9970f09200848366325b"],["/categories/Advanced-Swift/page/2/index.html","2f8171163e023aa0f7579e97bb7103a4"],["/categories/App-Architecture/index.html","cb1784a10a109217959fe9279486d12e"],["/categories/Array/index.html","1dfeb52c112c587c13a2a2fef6c4ef22"],["/categories/Codable-protocol/index.html","a3233cbac599cce668ae54c80575797d"],["/categories/Combine-framework/index.html","90c764b700e01ac8bcb1a1fbd8d34d2f"],["/categories/Combine/index.html","b9663a69232143081a1aede149196d77"],["/categories/Go/index.html","116683a6e79ece1cd0332ed812baf5ea"],["/categories/Grand-Central-Dispatch/index.html","b2ec78e091b6e41240564d50236bc1e5"],["/categories/Hexo/index.html","7373acb2f2a9f9412dd14c1d24e4141f"],["/categories/Homebrew/index.html","421fea77fa949eb765cd5c62dfaeff03"],["/categories/Linux/index.html","3e4a436c47f071d57fb58680b06d732e"],["/categories/MySQL/index.html","6a5ac632891cbd9f6f3f98d604cf0fb0"],["/categories/Promises/index.html","782b86996dad5963b13ed390b0316cc7"],["/categories/Result-Type/index.html","a8addfc7d8f9b66a5991df18490ffdbb"],["/categories/RxSwift/index.html","cc6cb58033049f4f565f590827687967"],["/categories/Server/index.html","550a6d2756d4b8153adf972541a8eeea"],["/categories/Swift-Apprentice/index.html","bb887b4b22cc5bfa154c718df8670c8a"],["/categories/Swift-Apprentice/page/2/index.html","a2ae766a78cf4c36860b8597a8145a98"],["/categories/Swift-Apprentice/page/3/index.html","9c776c67c356637d1e3f539e506dfc63"],["/categories/Swift-源码阅读/index.html","250ccadf08f01b422b5170caa9b4c349"],["/categories/Swift/index.html","d1340b6e8dfbb3d7c691d1fde4691789"],["/categories/Swift/page/10/index.html","8d833d6432fefba950fa91d06515e348"],["/categories/Swift/page/11/index.html","d4ffa0c3a68b821f9bd153a0a2625238"],["/categories/Swift/page/12/index.html","78167b14513682fb0ca2c6acf8632aee"],["/categories/Swift/page/13/index.html","fdac88c307e72fc7aacabed617611454"],["/categories/Swift/page/2/index.html","9e7355869f00cb8904ecea9932a5e8d0"],["/categories/Swift/page/3/index.html","9a7051303ee5b3a7bfe04ad7bd7f999e"],["/categories/Swift/page/4/index.html","031dd42fa769e659ba48ab03c9c9edad"],["/categories/Swift/page/5/index.html","a95389be0e5d453e6391bab1819669cd"],["/categories/Swift/page/6/index.html","feb4f4f515428baaf4f47149cc2a89f6"],["/categories/Swift/page/7/index.html","2ea4e83dca6849e458c1933c57dd5eed"],["/categories/Swift/page/8/index.html","18a7e584abd90e51e505879382421f73"],["/categories/Swift/page/9/index.html","29f076f9d458fbfb6ec1e72691037877"],["/categories/Swift5-2/index.html","0a53eb69663814e7ce601cf185858229"],["/categories/SwiftLint/index.html","03cfb3be2e698f1b1b6a6ee355ac9d59"],["/categories/SwiftUI/index.html","c4af5d7d39a7f893fa5cb0500269faf9"],["/categories/UICollectionView/index.html","831acb919af12ca2819ec5c0f3daa842"],["/categories/UIImagePickerController/index.html","60ea7c15a5b3764f5d2ddb031ac01bd7"],["/categories/UIKit/index.html","2d78ac523cce2b0dfc599e07cccfd6c8"],["/categories/UIKit/page/2/index.html","29a6b02061d0b90509f192699ca691dc"],["/categories/UIKit/page/3/index.html","f35969e14ca6df9285390e1ac2aa1e67"],["/categories/UIKit/page/4/index.html","2b094c2573d9b26b1373a9e3814ca269"],["/categories/UIKit/page/5/index.html","b93ae5f2780f554a77f171eda5169222"],["/categories/UITableView/index.html","90ccf19a85bff637a8c34678db2dcddb"],["/categories/Ubuntu18-04/index.html","079928d64d38a2dc6ece838029af9e0b"],["/categories/Ubuntu软件源/index.html","ce71562ae34dd3be66a516c2f6cb864b"],["/categories/Uniquely-identifying-views/index.html","1d895d2da4412759ae52b91daf3e6a77"],["/categories/VIPER/index.html","3f59d3d8b068733ae0a10e1ee7d8cb40"],["/categories/Vapor-4-0/index.html","6a2383e7dbc64415d6314280f49924ab"],["/categories/Vapor4-0/index.html","768c6f4d639a0aa18255b25cb7e77466"],["/categories/Vim/index.html","7b9f576b6dcbdceb21d9a92a19edfbc7"],["/categories/WKWebView/index.html","fbed0321b70d7f267c8698b3f2f48f48"],["/categories/Xcode/index.html","4eeaca3482fdbb4e2ef67a9a6db2068e"],["/categories/appleOS-Networking/index.html","45e130f8c8709b6dfd45220946b99903"],["/categories/bugly/index.html","8d386d91c6a86339fdafed645af287eb"],["/categories/enum/index.html","67b2e78de51333a12ab48320ad68976d"],["/categories/git/index.html","fd14a3d0bd2dc7e419b7bfbb3e68dc72"],["/categories/iCloud/index.html","c1938303254d2ac62eaf9076a246bf1f"],["/categories/iOS/index.html","b26843904085f769e59b891b4a3cb182"],["/categories/iOS/page/10/index.html","2206eeb8230522cc9b7300c47f01d718"],["/categories/iOS/page/11/index.html","ab69f403366b6f98d9c5d4574547dcb1"],["/categories/iOS/page/12/index.html","5f04ba634fed0ab9fcc67403859c799d"],["/categories/iOS/page/13/index.html","4775e3d20f8bef02e09c7c4246a25dd5"],["/categories/iOS/page/14/index.html","9606027b1d13aaad53dc7c2777708e55"],["/categories/iOS/page/2/index.html","866966e26b230a20dea065d60630d039"],["/categories/iOS/page/3/index.html","0f90420311e51b7bb30fc092905fce67"],["/categories/iOS/page/4/index.html","4492fc9ed13b71af326afc810ebc67cd"],["/categories/iOS/page/5/index.html","be60493cea6adc4bb25653ba77d39a30"],["/categories/iOS/page/6/index.html","2df318dbb0f748a7d9f08d3b4d761097"],["/categories/iOS/page/7/index.html","71be740421d8d18a1feae19ec582ea9b"],["/categories/iOS/page/8/index.html","a77c49bcf55fb584d3be66704e2165e4"],["/categories/iOS/page/9/index.html","1ec0de45bdd8e71f36acfa590d40fb18"],["/categories/iOS面试题/index.html","11edd8be2bc54772187ffa9aadc53af6"],["/categories/index.html","9f8158257cfffe9f7b414338da16c4b1"],["/categories/random/index.html","18ffa16a866169e24cb2bdd9babe7265"],["/categories/三方类库/index.html","15e36a9321a194d4188129a84a17cf41"],["/categories/函数式编程/index.html","682d4184ccdf15e25e3173749067922b"],["/categories/子类化样式/index.html","2dab03a73fb0cfdbaaec5be39b95aea6"],["/categories/开发技巧/index.html","0afc0b43b9787b83c0674db664c3c4da"],["/categories/开发记录/index.html","97dd2c579b160f0549c13033b44af148"],["/categories/技术支持/index.html","54d133198ad290691112beea6cbe51e3"],["/categories/数据库/index.html","47d0a66c1354ebe112e0e4c77ee15123"],["/categories/架构设计/index.html","9d67cf05aa437976ae14ae4a90c1877b"],["/categories/测试/index.html","8ed2dcb968df33ff8a982576c9c190e5"],["/categories/用户体验/index.html","bbae6d263040c533c5dae55419bd174a"],["/categories/用户协议与隐私政策/index.html","623f8cb82ba2af3e83f5363e176548f5"],["/categories/设计模式/index.html","089ff2e494edb10ced74f3ae411f0437"],["/categories/设计模式/page/2/index.html","49395d9e0c3e2e874f8262517240fd49"],["/categories/设计模式/page/3/index.html","cf45ebcb89124638b0c1162ea137ddce"],["/css/main.css","58cca38a96bd5e8856e76a757e972db2"],["/hello-world/index.html","517ee82af4230249522d579e0f1566c2"],["/hexo部署失败/index.html","04057ae4a6f8349ec94e2002ce582ffa"],["/iOS VIPER架构深入实践/index.html","d6e9c171dd8d570b9c521ed8a83bad4b"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","8642397da606503028465ede7df8e487"],["/iOS 自定义视图，输入表单和错误提示/index.html","8d876e2d1c61fff7fc48bf9df586235f"],["/iOS如何使用iCloud文档？/index.html","bf5b9b10aa0184d19a29e35e90c00c37"],["/iOS子类化样式/index.html","26af7604ddcec0f637842e5d22f0bb2a"],["/iOS开发记录<一>/index.html","380eca4fee3f45a088b3798defe0d348"],["/iOS自动化布局编程/index.html","5fc2b5f90beff4ea53d98d6f5114390f"],["/iOS自定义转场(By Swift)/index.html","ac5d89b3a94d90412ba10e8e7b5a8e6a"],["/iOS项目架构：使用VIPER/index.html","90bd225b72bd293be1450dc5e628122f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","98f7a294bafa674647655ec0ee8d17fb"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","1c65e1d9a5582e5d04f824423455b4a8"],["/page/10/index.html","111e18bf20a0704f973bdc92c3c3104c"],["/page/11/index.html","204a1464fee7b1a4424c9faa0e429323"],["/page/12/index.html","7057e5354196fa4bcb307f8f1fad5cc4"],["/page/13/index.html","8b7eac21b85787447667a61beb672880"],["/page/14/index.html","72255877092f7a40bc72d19e9021617f"],["/page/15/index.html","d5d7f2105e8d4803f8ab5974e6b5d099"],["/page/16/index.html","21576a32bc2f387364608a70ba17f9fa"],["/page/17/index.html","74427c4f78c59fe54854da27638a488c"],["/page/2/index.html","123cc3f2ccf3300c4a7c7c758e84aef0"],["/page/3/index.html","5f6164b5ce86bb00f9c47769ab9ff2f1"],["/page/4/index.html","e985c78aee3db2baa4ef5511a7154add"],["/page/5/index.html","f73a5fe08c37938bd77fb386514f336b"],["/page/6/index.html","6f6ad8cbc5cfdaa741f491ed7bbb3548"],["/page/7/index.html","23fe42fea9020e1cecfbc61445f593c8"],["/page/8/index.html","668074f750b353eb98bb8c34bfcf0ea4"],["/page/9/index.html","32b9096348e0525cff9825740537e7f0"],["/schedule/index.html","80fa1f7aa2873ccfaf9a5307a2d63f19"],["/storyAppPrivacy/index.html","deb00eb32bcf2cb222868edf2fc50966"],["/sw-register.js","dff978aaf3d3b394cfbc10d3db02108d"],["/tags/Advanced-Classes/index.html","646dad047cf9a2171379f86db89f3114"],["/tags/Advanced-Swift/index.html","68e24ec58c4fc501531b4f16e857f376"],["/tags/Advanced-Swift/page/2/index.html","4b21270f25003ab86a06b77b8fc93530"],["/tags/App-Architecture/index.html","a52083d791fb5e0d2eeaf9b251587516"],["/tags/Array/index.html","0ef4eee531ce5af24b3244ec55e14513"],["/tags/Arrays-Dictionaries-Sets/index.html","d67e8b9d8cd4f7bc5e29ac7cd4fd395d"],["/tags/Authentication/index.html","5b5d143496dcb730fde2fbad3bbaed08"],["/tags/Build-in-Collections/index.html","ac25649ca5d3f79ebb346d02c692a720"],["/tags/Building-Your-Own-Types/index.html","ea62b9fba9501ed46abd5197add0e3c6"],["/tags/CMS/index.html","af92203d4ddf0c7037ca0b28a58e1fae"],["/tags/Classes/index.html","e1ff155b28baa6c8bfbbed3d5b942311"],["/tags/Codable-protocol/index.html","23d50220ec108fb37d32e289fe5a128c"],["/tags/Collection-Iteration-with-Closures/index.html","1656cb2069a46ec74716f1330d5d5c9c"],["/tags/Collection-Protocols/index.html","c3c076e90e6c0b73e758a34763813d63"],["/tags/Collection-Types/index.html","72461dd582dd5192feee9b48ad9364e5"],["/tags/Collection/index.html","1158320affa6c65fce73fac0a188a02c"],["/tags/Collections/index.html","17235c03e9be940261ab98d0491ab672"],["/tags/Combine-framework/index.html","c44533c155e3839b6e61baee341f1a1e"],["/tags/Combine/index.html","50fb37b34ef01858089534baaee527ca"],["/tags/Dependency-Injection/index.html","d22a79c442f720914af96e9145542a37"],["/tags/Encoding-Decoding-Types/index.html","282a968a0e3bbc4f591e840c2254f614"],["/tags/Encoding-and-Decoding/index.html","692fc8736ba1383b01a44031335b03b6"],["/tags/Enumerations/index.html","888ea4a2af7f20c8ee32b7c5298f8d42"],["/tags/Enums/index.html","cd8fa9adc5aaef571d9a45aaf41422f3"],["/tags/Error-Handling/index.html","c06ef6b9dd6e129ee46e6ba3bcf38e8a"],["/tags/Functions/index.html","3c60eb81bc7c8af19458ca866d1b5d59"],["/tags/Generics/index.html","ce4818e24077b2ad3fa1727851d47532"],["/tags/Go/index.html","184cb130b9f60f4eeb12fcc7a73dc29c"],["/tags/Grand-Central-Dispatch/index.html","7c17f1f9794ee066865ab10e44c68c13"],["/tags/Hello-Vapor/index.html","b39968367b0f0ff6e161beb0edfb75f8"],["/tags/Homebrew/index.html","0c20bcdc6c5b64fa847106593aa3422e"],["/tags/Interoperability/index.html","2edfb7d78921afebd9f2afa979eafcf8"],["/tags/Introduction/index.html","7ae00390ba129305b6552e10dfb6b814"],["/tags/Leaf/index.html","b18181d2c65a58ca5cb88aa3fd5cdbb5"],["/tags/Linux/index.html","719f7951b571c9aaaeac59258a7460de"],["/tags/Methods/index.html","27eaca96779d579aab28dac5a9473753"],["/tags/Modules-And-Hooks/index.html","1a41e9473e9655992447a16713ca29a0"],["/tags/MySQL/index.html","566a3130ccfb12d2a6942b9a6596a68c"],["/tags/Optionals/index.html","b54321bfd9b3ac6ca04cf1ff9abcd31c"],["/tags/Promises/index.html","27be5863eade15408d978cdfdb5ac71a"],["/tags/Properties/index.html","5cc497f3f797bbb7681e65e3a53b7cd0"],["/tags/Protocols/index.html","bd9f731a92ae49981e1e702b6413d1bb"],["/tags/Result-Type/index.html","eb03cac140d4719e5a9d6830772602d3"],["/tags/RxSwift/index.html","c6785c5f8bbe182dd272ed66720d5688"],["/tags/Server/index.html","9f499042e518a3b062d979d407c6471b"],["/tags/Session/index.html","ee02afdb669ed6e109f89067d0cf608d"],["/tags/Strings/index.html","17f99c1d495c45ba149962386241f00d"],["/tags/Structs-and-Classes/index.html","d0370ba02c0a39697a481733e1064df5"],["/tags/Structures/index.html","6ff6cfa112bef48b35278a73709e71a5"],["/tags/Swift-5-0/index.html","d4112a8ea5b971ea6fdd293254c85316"],["/tags/Swift-5-0/page/2/index.html","a13b0faa6f96920d26ceb04d4bb030c1"],["/tags/Swift-5-0/page/3/index.html","7b53bebcd17833993756072fd14a1231"],["/tags/Swift-5-0/page/4/index.html","60ecba54cc6425b5723127f6af53679e"],["/tags/Swift-5-0/page/5/index.html","5ab09d5cd81095a71199251bdc04d57e"],["/tags/Swift-Apprentice/index.html","60d506fc68197266440ff349c19f909e"],["/tags/Swift-Apprentice/page/2/index.html","49a023959a0cd06f40bf950e9d7e7f63"],["/tags/Swift-Apprentice/page/3/index.html","d2bb99cf793f8ba658755a63ff3548a7"],["/tags/Swift-Package-Manager/index.html","1ec3cf2307589124f82b502ffd16e424"],["/tags/Swift-源码阅读/index.html","1687bcea17cd4e4ae8f22cec6ea24819"],["/tags/Swift/index.html","ee2c328208ec277442ddcc7418baf393"],["/tags/Swift/page/10/index.html","c43f24b334fb268cd9b2f0480aa718a5"],["/tags/Swift/page/11/index.html","c2d199147d357ea2e8ec331848d7d3a9"],["/tags/Swift/page/12/index.html","83f5ac71f6dba4793232e23be1b8d37a"],["/tags/Swift/page/13/index.html","f256370c2c59a850b5c21a91d69768a1"],["/tags/Swift/page/2/index.html","b8a07e98016358fb92ae3bab7c9ec832"],["/tags/Swift/page/3/index.html","f434534d96b4f3c50348c5eaaa56bc07"],["/tags/Swift/page/4/index.html","1f0e05c5f967a781d8719989a2d7360e"],["/tags/Swift/page/5/index.html","bc0a1d4fed87e230ee0640db95a83188"],["/tags/Swift/page/6/index.html","7d2fe644c6c2b31a6b6fa8f240ef9d08"],["/tags/Swift/page/7/index.html","50eb195df664cd9a987eb00142befbed"],["/tags/Swift/page/8/index.html","72d632ed9874554b61dabf5f90661c22"],["/tags/Swift/page/9/index.html","b322240f7db811def684435ad69f12c2"],["/tags/SwiftLint/index.html","b1f45a9f321a9150c077dece1197b9e3"],["/tags/SwiftUI/index.html","32a89381b6727c1708bb65909bddc639"],["/tags/UICollectionView/index.html","4cebba56bdc8f7ceee6c6010a38a22ad"],["/tags/UIColor/index.html","b1b8778801e0326dac6d39fbbe8c92f3"],["/tags/UIImagePickerController/index.html","6e013751c0809ef83647130ea9e18300"],["/tags/UIKit/index.html","95e29b7b67ff436f568ea59acc241e96"],["/tags/UIKit/page/2/index.html","87aeeaa9b407442f33858b4269891a13"],["/tags/UIKit/page/3/index.html","198712b3180b1d9f1a46554a00a439dc"],["/tags/UIKit/page/4/index.html","bef328e95aea36a3e73814928e29f7f9"],["/tags/UIKit/page/5/index.html","ea1e6db0cebf6321313d22561aae09b7"],["/tags/UITableView/index.html","4cab6b1cc68ebed13f4440620d0bb999"],["/tags/Ubuntu/index.html","1f61c9e48f9b20d97ccf71865873f93e"],["/tags/Uniquely-identifying-views/index.html","c2565af71c3b0ad72973b5e73b82517c"],["/tags/VIPER/index.html","d3e02927943ab19f9ae8a2a8c1a229ca"],["/tags/VMware/index.html","36e322c1518938be5a6889435e622e94"],["/tags/Vapor-4-0/index.html","e79fee2eb4c1b857b278b9ef8572ff6b"],["/tags/Vapor-初探/index.html","f782b90631efc7c57e61edcaad0d5aa3"],["/tags/Vim/index.html","66ee821097720557e518bdd9a18fa6a5"],["/tags/WKWebView/index.html","bd09ab3e87ba7b389c2056f641f645a8"],["/tags/Xcode/index.html","6990d84fc524074892489011b0666579"],["/tags/appleOS-Networking/index.html","293bc614d0bd44df42d86e8489935aa2"],["/tags/bugly/index.html","ad05cab2de57deda689cd06e56b28ec6"],["/tags/enum/index.html","daa7d6d73e3b25eb2d0adfab82ad3fe7"],["/tags/git/index.html","7678edc0c2183575861f21cef81aff7b"],["/tags/hexo/index.html","8d0c7f25071122f37646a55b36a535c9"],["/tags/iCloud/index.html","6532c3fc339697f3bafe460ba5877da4"],["/tags/iOS/index.html","5eac5570587f8af68a26e958c7e194db"],["/tags/iOS/page/10/index.html","7083b13e7b2e92eeb9b0d69f813f4c73"],["/tags/iOS/page/11/index.html","834e7788674c9d63ea5c3db0e1f1ec57"],["/tags/iOS/page/12/index.html","a93fe3829ed963ac840e2ffa0d4435c5"],["/tags/iOS/page/13/index.html","f8ae7f36a29df45c56c9a4ed3cb58865"],["/tags/iOS/page/14/index.html","2edbf79436f263f6bba8180d91be84ea"],["/tags/iOS/page/2/index.html","3681760a785061e48b41d17c2a8ca179"],["/tags/iOS/page/3/index.html","ef1f735500580e96b43470d055672900"],["/tags/iOS/page/4/index.html","fa53d96abb6f0a6fb4b7ea1a14abfb04"],["/tags/iOS/page/5/index.html","20804da7b888172295674f70ae5e9e64"],["/tags/iOS/page/6/index.html","83b29b16b76756ece191b08cc055b53a"],["/tags/iOS/page/7/index.html","30f65e34099c480167e07ff639754226"],["/tags/iOS/page/8/index.html","217d1c7863206a4ffa33114c9c904594"],["/tags/iOS/page/9/index.html","a06f60ec19fa9f83a1c3516ff8027594"],["/tags/iOS面试题/index.html","a86b1803224c5f09e104d8b111537314"],["/tags/index.html","e72d216d6c2cf267d47aafa591a209fd"],["/tags/non-optional/index.html","797ba24be958ac4bc52f45f0d97374c7"],["/tags/random/index.html","0e7ebd6cfa58d815c66a8020c89236a3"],["/tags/transition/index.html","ad5384c376468a04572cf748857c2568"],["/tags/三方类库/index.html","203cba260c7c0ec1b84d83a07f57bdfe"],["/tags/依赖注入设计模式/index.html","383ac0f8e31f5851c7c78c33f277b1e5"],["/tags/值类型和值语义/index.html","1d134b3a5e0555e251f448acd215f9ae"],["/tags/内存管理/index.html","293d0591043ef760d276a52c89381e86"],["/tags/冒烟测试与回归测试/index.html","c3e289b6a9efbb627c5e4dcf019f5737"],["/tags/函数式编程/index.html","833671bcd018e86cea757cf9b1b544e9"],["/tags/创建博客数据库/index.html","7822ae7321a5e28a37839c3b5ba57511"],["/tags/初始化模式/index.html","39c48cd4a39b6cca5d9e4b26c9bced36"],["/tags/单例模式/index.html","0c857187efc6b17f0b11116d0500a7ba"],["/tags/原型设计模式/index.html","60cb6a01c39ee5c74e6b60d3e2ee4af4"],["/tags/命令设计模式/index.html","15d804ba211bc25076d51219d137b7da"],["/tags/基本控制流/index.html","b5250c44b221298fb9696bf07e89674b"],["/tags/外观设计模式/index.html","4e4b5e0133046326a3f6476c31766543"],["/tags/委托设计模式/index.html","c3a9103070b3fcbe489dd78992e98e9f"],["/tags/子类化样式/index.html","7b0dc49a4b457a7b20c78fd3e8d2b7d1"],["/tags/对象池设计模式/index.html","3fd60915276b24bc1df8eb2736a104bf"],["/tags/工厂方法设计模式/index.html","dec06367fdde484a0f07bef5e5b71416"],["/tags/工厂模式/index.html","2380c00b9b6a283f35eca54a27693f84"],["/tags/工厂设计模式/index.html","32d7bf961325a0076cf4c630a1c8e5f1"],["/tags/开发技巧/index.html","9efc5adca9c7d0670ffabbf4d32b669a"],["/tags/开发记录/index.html","c2ede2333a1f2e71027b15730e74db39"],["/tags/懒加载模式/index.html","2d54a0f08cee292a4d95669f6f286229"],["/tags/技术支持/index.html","8b9d57f5789459f502fbc0fff0b24bc3"],["/tags/抽象工厂设计模式/index.html","07e83919e2bfd73c569ef1a55e921b27"],["/tags/数据库/index.html","90fd4f07e7f92072a1f02b2d5e5749de"],["/tags/构造函数/index.html","2c42694844ddd159d6782c8e51a77098"],["/tags/架构设计/index.html","ff266da88e7a46fd3c183f5a7ef1d82a"],["/tags/模式匹配/index.html","d64286f0154b3bc358dc0ab6f465e7b6"],["/tags/生成器模式/index.html","ebf019a8266bd34a3369f2e41e4b3817"],["/tags/用户体验/index.html","32cb1839cb836f9a16a7e91a28f489fb"],["/tags/用户协议与隐私政策/index.html","0de82e443dfe0e604c283d916c6bfef6"],["/tags/类型与操作/index.html","b83b2bedfa3f5ae9ad79d213133c62cf"],["/tags/自动化布局/index.html","3b61c0a8c3b936019863b9a24da439b7"],["/tags/自定义UIView/index.html","55c9a0d862f8596f7855eb3803e032ea"],["/tags/自定义转场/index.html","7a37c4c21f34ae4a3604cfb72f056b9c"],["/tags/自适应布局/index.html","e9315e124ee498651ee2455a89dd23eb"],["/tags/表达式、变量和常量/index.html","1a4e9f11ff181e7d84c29ca8b1ef015d"],["/tags/设计模式/index.html","8033893783525b9c377de94e106a9269"],["/tags/设计模式/page/2/index.html","9dbf801a7dd21177434f96c3ba3f4c60"],["/tags/设计模式/page/3/index.html","254d65ce109f4c2d03d1ba41c5b5c0b9"],["/tags/访问控制和代码组织/index.html","4d0b6afd04a2f85378b17ed447d7b157"],["/tags/运算符，下标和键路径/index.html","5d6454c31d8ade8bd9b5d2be6ecddd57"],["/tags/迭代器设计模式/index.html","27a46e72e73be2c82048a7207b9d71ed"],["/tags/适配器设计模式/index.html","8a06b499e0257af40a62047d698a3d98"],["/tags/错误处理/index.html","2d54c7dd1c47772a83602fb19d73e23d"],["/tags/静态工厂方法/index.html","2a05229dc5b0ab97c2fa4d4c9ed4b9f4"],["/tags/面向协议编程-OOP/index.html","4618ba94fc0c031fef538395ba985a9a"],["/tags/高级主题/index.html","b4ab3e76fe0932c0b0f2b58a8b63796c"],["/tags/高级协议和泛型/index.html","4a135c31b004f440a9f729718c08fcd0"],["/tags/高级控制流/index.html","9284322bbb6c002c6ed24cb98115659c"],["/xcode 常用的快捷键/index.html","26173aa5fdcdfc24f1449f138721f3a8"],["/为iOS应用构建输入表单/index.html","ae0b6a85c08ac45eb13b121692d716ca"],["/产品开发的幕后花絮/index.html","244db8fe3b83727dea12fc8ce592bf42"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0ae2354df59acb3364ec1182b0edb624"],["/冒烟测试与回归测试/index.html","3987cf8f5cb908766e5bf3228de982b2"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6c07bb43646db5e490a1628f4c679514"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","831a3d64496ef632ad1a1317212c4781"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","64230f8b579bf1755a14976740c444aa"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b4b009b1d6804740206c7de8b75b35f0"],["/在Swift中创建自定义集合/index.html","da370dd5ba7992949a6a7fb3b3407da9"],["/在Swift中处理非可选选项/index.html","ec2816a1e5b3523b187e8913cbb21657"],["/在Swift中生成随机数/index.html","64f7a8eed56a08580f5d05a2e8baedc0"],["/在Swift中重构单例模式用法/index.html","c99d8e61062072c36c3f93c167feb626"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","024d450d62fb39a1ad628bfeac066991"],["/如何为VIPER编写服务？/index.html","b96356c5ae992722c5f266c64297c179"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a58ab89dd61c9638fda5b479a8f47012"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","39f62402d0e49a57f171016d53cd3cbe"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","772731224762872ec2aabe14b470a95f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a92046578d5820b3a7850db66f2ec357"],["/掌握VIPER架构/index.html","15fdf91f566a75c43083c59c0f4c5b45"],["/揭秘 WordPress Hook 系统/index.html","1fb7316fd58a182918d3f29aac91e92e"],["/比较工厂设计模式/index.html","7ddf320aa1b19945b612c1cd620ded12"],["/深入了解Swift中的Grand Central Dispatch/index.html","b678dceda9a222457194ee6f209df25c"],["/深入研究Swift框架/index.html","d7cc6401af9d043c6e7cbd146145ae20"],["/美豫直聘技术支持/index.html","6788f78511b7d39c6fea261aadeec4c0"],["/美豫直聘用户协议与隐私政策/index.html","d98774aa9006e92e003ebddaee80e120"],["/适用于iOS开发人员的VIPER最佳实践/index.html","0b533ad72f9f4109b361e5621ec972a7"],["/选择Swift而不是Objective-C的5个理由/index.html","46e9cb1025ed2e0ce63522a379004499"]];
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
