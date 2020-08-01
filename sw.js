/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","38b8502ae78fa3730543a3c04cef03fe"],["/2020年iOS面试题总结(三)/index.html","726922e9559bf452bd947a0cf906ea97"],["/2020年iOS面试题总结(二)/index.html","ffe44f2e2d25c967a23368e5ec91b32f"],["/Advanced Swift系列(一): Swift 简介/index.html","e9f6cbb91efb17e79963ede252fba9b7"],["/Advanced Swift系列(七): Strings/index.html","3ee13a03e337e201d2e10c483fbe820f"],["/Advanced Swift系列(三):  Optionals/index.html","78b3014dff2f3eb26c8e3371d0d34fce"],["/Advanced Swift系列(九): Protocols/index.html","1aa986773c15ee61ae322a9bddd98164"],["/Advanced Swift系列(二): Build-in Collections/index.html","7b623a86ee515d401faa9f72ff33dc5a"],["/Advanced Swift系列(五): Structs and Classes/index.html","0e664fca1b77cd07ed5ea8d97dc9ba05"],["/Advanced Swift系列(八): Generics/index.html","3d7086895adf1bc63fafbe6d086204d2"],["/Advanced Swift系列(六):  Enums/index.html","7a3b7067ec1fc82411e34a3d97fe0bf8"],["/Advanced Swift系列(十): Collection Protocols/index.html","44fc3c68ce63a27d9e9ee41af29aa877"],["/Advanced Swift系列(十一): Error Handling/index.html","865b085168cb62d96f1e7d12f6b290e1"],["/Advanced Swift系列(十三): Interoperability/index.html","ceda3597244346cbae6d22f6a141a890"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","04dee4d3dbbadd9cd1bc8df1357c661f"],["/Advanced Swift系列(四):  Functions/index.html","1ee4ef342915859bdaadf62341b14fd3"],["/App Architecture系列(一):  简介/index.html","6969a23960027f9467e6564babdb4d82"],["/Functional Swift 初探/index.html","bdbbe5a8444698e46e9f1acff0a1874b"],["/NSCODER和SWIFT初始化/index.html","c815a247666116b2453b1dd324892208"],["/Swift 5使用UIImagePickerController拾取图像/index.html","a39654d56ff46b0de75029ef9ff0c8f6"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","7a9fe6166d28e0fbcbc2546ea38b6fe6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","0afdd9dfb2059a0d53092671da67aad8"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","e8459163326c0ef2c192925ccbdf1efd"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","9974bbc58bd311a78d3212b809a4130c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","0a7879611c51e03ea031d0195987d92a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","08c947c1a643feadac0eff57261fdca6"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","0de8f49d2e226effd3f66e20b9ad54df"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","59e6fa9d6c50d757f683f67e09c81450"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","c4f792ecce6079ce566e8bec7c9d7c52"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","01daedffb68146855a0f5ba150a1ce82"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","cf946a546f5de4b14f744f114bae4a7f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b25325525726a7becdb17ecbcf868cd2"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","fefa5f09ddfd12f44cf286a44aa9cda8"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","142af7fd70039187b31898059bed663b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","cad3b155e3df57f3e1b1c726692e46ec"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","08fc567156f75ab5c86be981ee065774"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","df37d9336cf1143f1a4cc334f4d9b819"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","7149fa524c48cbc76869585ae4bb2b4b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","1714fac3da237d5c0af5f3aaec0c48ba"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","240a0cd50ba62931103a19a9a5642c1b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","7fb0616018742a67d8edd2579c141cf8"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","0ecfe1c4ac614faebbf37416b94b7614"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","805b5b18f3e067c8313de7c3f7a1f4dc"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","64d9f2faba49a947b1ccbdb70481f24c"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4ff44d49a0f89a93482c903442d6cdf8"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e1af7a82744ef88dacf0e3b5edf540a3"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fa81a01fddf621ea271a42e4a91ddb99"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","005e0532da7ea6dcc5d90ee79bccd871"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","1b8f7bf6e632b0c2a8f680a7b0f60368"],["/Swift CompactMap vs flatMap：差异说明/index.html","afd94e347f7c0a9810712b30a6ba7b77"],["/Swift Grand Central Dispatch 深入实践/index.html","d008506c1770e2c4856d5012d4743f27"],["/Swift Lazy属性初始化/index.html","b61cb348b33234e853e441850c069480"],["/Swift Promises 初体验/index.html","fb36946ab1aafa7c73bc8398225d41f5"],["/Swift Promises 探究/index.html","60afd1e09379dc1e082955c875a65e55"],["/Swift UICollectionView使用指南/index.html","1bf55b3ea01edc0ec67d94a85467219f"],["/Swift URLSession && Combine framework/index.html","55f03ee03baae16c21d7c39581c4b954"],["/Swift 唯一识别的视图/index.html","8eb25f8daa4a712b0734cdf2afcf03c4"],["/Swift 如何学习现代UIKit？/index.html","aac9e7bee9147e7cc1b97e493507d300"],["/Swift 用 compactMap 替换 flatMap/index.html","00d2b6b271d7859756f153cb0e42a7a0"],["/Swift 选择和播放视频/index.html","c820a5f191c92e0724b2fe523f73a51c"],["/Swift中UIColor最佳实践/index.html","966e757c839e3ede0a46d71722f23abb"],["/Swift中快速简单的工厂设计模式/index.html","66ef63761b9088428a90130d2ff23d4c"],["/Swift中构造函数与静态工厂方法的比较/index.html","17a1a0e360b435285e564a6e9120f905"],["/Swift中的UITableView教程/index.html","0d5c0890e54bcbf2e02f157bc269ec4e"],["/Swift中的懒加载模式/index.html","b0014b7634cd9e39ce55fb3b9ccf1066"],["/Swift中的模块和挂钩/index.html","01d54e0276c6e9ed6133da7bbd1019a9"],["/Swift使用布局锚点添加约束/index.html","031650e196c6818269d62d443ac3a508"],["/Swift依赖注入设计模式/index.html","077baf9c1fa07308f0b7fa95c0c752a2"],["/Swift关于Dependency Injection (DI)/index.html","761cbbe3ac34cbbb01c5327ffeddbe12"],["/Swift初始化模式/index.html","1d6d2e6fec2dd2f4d9283fc51b42811f"],["/Swift单例模式/index.html","4aa55fca826286e3e1e87907da4049f6"],["/Swift原型设计模式/index.html","745da1910cd7d40eca9145e2414a44ef"],["/Swift命令设计模式/index.html","9c67ff56081261fa4c166794b3c679eb"],["/Swift外观设计模式/index.html","a40eb2c3b32093aeb7a22a53cff313ed"],["/Swift委托设计模式/index.html","a11abe736cac741a1bb98414afacf4e8"],["/Swift对象池设计模式/index.html","e2a5bbaf5c09a4561a4bbfce2fc3bcf3"],["/Swift工厂方法设计模式/index.html","a9f44a821b5600269b439c06f8c64fec"],["/Swift带闭包的懒惰初始化/index.html","3d0136655c8de9d52c607c4904176674"],["/Swift抽象工厂设计模式/index.html","b335520b6a5a862a0ecad2f45090bdba"],["/Swift掌握iOS自动布局锚点/index.html","85f890314fbfa22651731d3bfefe8f90"],["/Swift支持旋转的自适应单元格/index.html","3bb0f86ad8ecaf4083e5924f74f61018"],["/Swift枚举值/index.html","ff0b48b957fb541600dc2bd38727078c"],["/Swift生成器模式/index.html","e1e485e99efeddcdfc5ad062cbf9b7d6"],["/Swift结合Xib文件自定义UIView/index.html","9ea7ffd06c9b17e1b308e3d0f2bc4aab"],["/Swift编写的20个iOS库(一)/index.html","d5b7bc1b89bc5d9775df3b7e5edfc2e4"],["/Swift迭代器设计模式/index.html","40197dee2434208898f8ff2e1cacc3bc"],["/Swift适配器设计模式/index.html","1b64065c5f718c9950df91474e6cef7f"],["/Swift静态工厂设计模式/index.html","9aabeba2657fe0c1e70ec7d65677e16e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","aae351a4241830df2912638176aedc29"],["/UICollectionView data source and delegates/index.html","4add97c7a6ef2e66e256fd89c27f9d9f"],["/UIKit初始化模式/index.html","b4664fe2cfd673988ba454b8d07f2c28"],["/Ubuntu18.04替换国内源/index.html","5ed03e1bb4d29eddafd0a1c64c25e698"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","297031763ad0ed72588af2bf2e5774d7"],["/Vapor系列 (一) :  Vapor 初探/index.html","ad58a319246d010459402babba2ed9d8"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9921cd97a2555cb35d16d98348aae3cc"],["/Vapor系列 (二) :  Hello Vapor！/index.html","a6ea15a47d87858fe2c517abab54e246"],["/Vapor系列 (五) :  使用session进行authentication/index.html","864617d6c25fed10e2d7a986737606d3"],["/Vapor系列 (四) :  创建博客数据库/index.html","15c600cbbecd49343e28198f71e5c8bf"],["/Vapor系列(六): 徒手撸一个CMS/index.html","cc16f73d8d4783e6bb3eb1908c2e12bb"],["/Xcode扩展/index.html","4eea165325d0a2cdfc2de864bedce79e"],["/about/index.html","dc97105c883df210efbc170202be3f78"],["/appleOS的Networking示例/index.html","ef0b57dbd9d92bad863c028426ea7840"],["/archives/2020/03/index.html","7ba0e9d98a718518dc2056162468d268"],["/archives/2020/04/index.html","0c1903e0b01fcd4d4efc88d2e6477bb1"],["/archives/2020/04/page/2/index.html","445b86877c150b6415313ac33befeca0"],["/archives/2020/04/page/3/index.html","056fd384116368025393d89499e33a79"],["/archives/2020/04/page/4/index.html","636679c2eacd08ce19afb927d0e6c56a"],["/archives/2020/04/page/5/index.html","b6230338b2d5b76e0af7f675cd60f297"],["/archives/2020/04/page/6/index.html","5dd62528a8aa053ec175188f771afd3d"],["/archives/2020/04/page/7/index.html","636d1a6b0098d9a298a480933ee3cefb"],["/archives/2020/04/page/8/index.html","5023ad5b1461a2a212a8a1a4d10f6cfc"],["/archives/2020/05/index.html","64413df660d05da3818b36162c8ba011"],["/archives/2020/05/page/2/index.html","ed992f01e9c8066916781336608e1dad"],["/archives/2020/05/page/3/index.html","25a675d793d8726c06a9cd71b8e78a3a"],["/archives/2020/05/page/4/index.html","a2029938c25303cfece400b2648301cc"],["/archives/2020/05/page/5/index.html","19da1d876ee184526a1fefbee3721676"],["/archives/2020/06/index.html","67e80d317908f2ac32c289148e5392df"],["/archives/2020/06/page/2/index.html","c17da205f5b62fe6a6d40b7451602310"],["/archives/2020/index.html","ee7d9c857fb19dedeac7f1b2fa93c8b3"],["/archives/2020/page/10/index.html","99b01507f5c681cd6bfb3e69cd2771fc"],["/archives/2020/page/11/index.html","c76dbe2c1c85fc0fa06dbcf4845a3bfe"],["/archives/2020/page/12/index.html","ea303a8bd9c10bbeda9172da7804a7c1"],["/archives/2020/page/13/index.html","9584e8a0cc71e845be30cebd8da1a859"],["/archives/2020/page/14/index.html","33b49266e96788ae8341b455c134b1cf"],["/archives/2020/page/2/index.html","40202490e820e76e9d14ef077110c5fc"],["/archives/2020/page/3/index.html","9fc2e62cb17d270dd9f4cb7894ff8716"],["/archives/2020/page/4/index.html","28d8f110298f586c881fbc85636d301b"],["/archives/2020/page/5/index.html","b86567353498af397802b068f528e94c"],["/archives/2020/page/6/index.html","c7e6bd7a9c9e29149b9f2c81ad0bc4ce"],["/archives/2020/page/7/index.html","87386d83398e9a931cc66edf14939a4c"],["/archives/2020/page/8/index.html","768f722ee8f0d6a6b4de2e6a27d5307d"],["/archives/2020/page/9/index.html","385d312b0efda0ceeb710b141da27042"],["/archives/index.html","d88dc0312b5dcbc19efd396c6aa9b37f"],["/archives/page/10/index.html","510b72c91f0963c4fb98d196cef57595"],["/archives/page/11/index.html","f0974fe83813fb36a5ffcd77962ee351"],["/archives/page/12/index.html","45ed691695407f06d4d59e88bfac8555"],["/archives/page/13/index.html","1e1702fdf5597bb418b17c3e6989ab7a"],["/archives/page/14/index.html","8f7f3a3adcbc7c39ef7020e7ace34122"],["/archives/page/2/index.html","4e98fffd95d5e50a002c198176bcb8e8"],["/archives/page/3/index.html","5978c950432cecf37b9493ca872f53a0"],["/archives/page/4/index.html","5c7a7f091a29d0fd7c7ae61c2cda0729"],["/archives/page/5/index.html","6416880a324b2bb93621a8a2a1f9da60"],["/archives/page/6/index.html","dc234214481895066a7f5f3031520115"],["/archives/page/7/index.html","d9be722473be7037f25b5677ffa21022"],["/archives/page/8/index.html","c8238a8b55570c354b0abb67b239fbc7"],["/archives/page/9/index.html","e096096d8c1e36286214fd27a8d2db0e"],["/categories/Advanced-Swift/index.html","2b4dd84c9ae0652cbcfd7fd304949a1f"],["/categories/Advanced-Swift/page/2/index.html","576bf47ca9048e322ebfc818edb36592"],["/categories/App-Architecture/index.html","d24769304267dd6de73b14e9595f713f"],["/categories/Codable-protocol/index.html","6a74eb1056c4814093c7a85d5ccaa3e2"],["/categories/Combine-framework/index.html","2a5d9999e701518a8414324fd8abdb09"],["/categories/Combine/index.html","ce309fe2467155d0d32a8ded327ed5f2"],["/categories/Grand-Central-Dispatch/index.html","46a415ad344b6b44029475247fa165ae"],["/categories/Hexo/index.html","46099ed7d63d0aa47263643710974821"],["/categories/Promises/index.html","72c8c74df8eca6f8aa8a2b2ff9290c01"],["/categories/Result-Type/index.html","27e4723e2bfd2e6d368288674b4f7c72"],["/categories/Server/index.html","505f9df24b32be25acc4cc9a0438863b"],["/categories/Swift-Apprentice/index.html","1118df4da1b739ec464e2b8d08f3873d"],["/categories/Swift-Apprentice/page/2/index.html","c87d38d128c43cbf0bb716d1f87a5773"],["/categories/Swift-Apprentice/page/3/index.html","2d8af5f08610d893b3774e4e9f7eee30"],["/categories/Swift/index.html","b8bae9bde37f7f906d6723216c82bc41"],["/categories/Swift/page/10/index.html","b5db2fb58b223c4cb7cdb0804736b17c"],["/categories/Swift/page/11/index.html","0aecc2868887629bcd6a31fd5c783e7d"],["/categories/Swift/page/12/index.html","a467b1d63c96b14a8f569f0f7920fa8a"],["/categories/Swift/page/13/index.html","071572cfc1507aab82a192623fa69e39"],["/categories/Swift/page/2/index.html","b425b91a8da83d43767f161536673cfa"],["/categories/Swift/page/3/index.html","9af4575813103baf39f12ba10ff173ca"],["/categories/Swift/page/4/index.html","29849d78ec6c96513b088a47fc3230ef"],["/categories/Swift/page/5/index.html","b1f3a8cb63774bfc929b1eec5217dcb2"],["/categories/Swift/page/6/index.html","c5d98df9a67b93761e1804bc8da479c4"],["/categories/Swift/page/7/index.html","d3d98601ba0b3af586de875d3ebc3527"],["/categories/Swift/page/8/index.html","88765bd8638a20dde3dcfa162eddbcd9"],["/categories/Swift/page/9/index.html","55e06af949384f9c944681a61be073ec"],["/categories/Swift5-2/index.html","d1cfd3f0e7bf77422553c52bcdac9f78"],["/categories/SwiftUI/index.html","bf53d7f2fcd93da04438c0c7ecda351e"],["/categories/UICollectionView/index.html","20a82d6b4511268cde911812e1407873"],["/categories/UIImagePickerController/index.html","6fa133cd517a2b3f0f8b0e870e8db106"],["/categories/UIKit/index.html","b164af0bc919ff00c8e05e2630b12231"],["/categories/UIKit/page/2/index.html","dcc9596a2991b999df03ba17dfc93a90"],["/categories/UIKit/page/3/index.html","6af649d1ca7f170bd5dbc0f3d4fea729"],["/categories/UIKit/page/4/index.html","2c8183f8420ddc9941800d4c113885c4"],["/categories/UIKit/page/5/index.html","11156d57c0a03d46cf61b31e35d1b6df"],["/categories/UITableView/index.html","0890adcb462e90754b3a3d07fb9d8f53"],["/categories/Ubuntu18-04/index.html","111ca48a8260a758b219559106724e76"],["/categories/Ubuntu软件源/index.html","9cc96dd67b889967d01ea455e5f79482"],["/categories/Uniquely-identifying-views/index.html","b3ae796c8fffe0ee30e4f37b50f7c795"],["/categories/VIPER/index.html","2796373a71c904cfdd2edc0d4e035388"],["/categories/Vapor-4-0/index.html","d491f6510f82dea5cb5cc6d057473914"],["/categories/Vapor4-0/index.html","39ab60d0972366275be3b9dee1cf1439"],["/categories/Xcode/index.html","d338e73fa57335e08e7fead96fe3810b"],["/categories/appleOS-Networking/index.html","dcd074a1ef6d857f8cc710ad20d6954b"],["/categories/enum/index.html","e38d64f1f5b26e8eea814937bbf1918d"],["/categories/iCloud/index.html","5286596d9dab1bb36a0a68452135884d"],["/categories/iOS/index.html","920b478eb9b16958fbc5e4efa64d0b5a"],["/categories/iOS/page/10/index.html","fa80eae28cdbccbfd7a195459afa44b0"],["/categories/iOS/page/11/index.html","9464c48309fcff44a84d56a1ea6cce54"],["/categories/iOS/page/12/index.html","78370fca93392f27b7cee75021735b54"],["/categories/iOS/page/13/index.html","a40e267e4b8eed3c07ee1a30aff49fa7"],["/categories/iOS/page/2/index.html","6933e380e5ce56f17052a792494bb4d4"],["/categories/iOS/page/3/index.html","b9195f39489ef8f5fa5bb8c5ec36689d"],["/categories/iOS/page/4/index.html","55eed614253221bc626e1cec55a2018a"],["/categories/iOS/page/5/index.html","dfcddc7e479b64c5cf2f4f99a26ccda3"],["/categories/iOS/page/6/index.html","fa80d40c6cf1d05d3115f4ead307567c"],["/categories/iOS/page/7/index.html","064ee0d7e9f1060992874ba95f5829d1"],["/categories/iOS/page/8/index.html","6b04388e0d22ba1ee02b3cc48a184932"],["/categories/iOS/page/9/index.html","9ca5972d2cc36478b71009702e02a5c7"],["/categories/iOS面试题/index.html","45d0a68b366862fda4200c02c5085582"],["/categories/index.html","31678b52a7f113cd024f7905fb09731e"],["/categories/random/index.html","704945c49d1b97824a95882f5cc9f0ec"],["/categories/三方类库/index.html","ef6c189d60cd89124673fbc453bcceda"],["/categories/函数式编程/index.html","e981360903f3b31fc826e44a694b1fa9"],["/categories/子类化样式/index.html","078d134402c515e1ba7e882eea1b1371"],["/categories/架构设计/index.html","0b32f44074354c5e055d61172c51904f"],["/categories/用户体验/index.html","000ca47033b42a096fb11301131ff58f"],["/categories/用户协议与隐私政策/index.html","1e8bd9281cf17e5307e519acb24cd251"],["/categories/设计模式/index.html","df230bf6788164c022816f3655956ee5"],["/categories/设计模式/page/2/index.html","f6b7e80ba23e0374b0fc2b62a38316ba"],["/categories/设计模式/page/3/index.html","d7320a0b46fd5cd6fbfbb2c8a0d4e0c2"],["/css/main.css","1a1a0d128ace42757c567d0e7c06d1b5"],["/geckoAppPrivacy/index.html","863b8bbdf573c26583572c7554f61a22"],["/hello-world/index.html","81abaff550f3e8ea5f4bd4b39aff4c4c"],["/iOS VIPER架构深入实践/index.html","c052879a8040cbc82a5b624edf690e2a"],["/iOS 自定义视图，输入表单和错误提示/index.html","19b945185a5893c80821e062ff171f2e"],["/iOS如何使用iCloud文档？/index.html","a9279d48a83630eb4ca243550b1e42ee"],["/iOS子类化样式/index.html","a5121d203f7d77a92431e3e81d1350fc"],["/iOS自动化布局编程/index.html","3e31e1570c32b11f2047c62a421b1601"],["/iOS自定义转场(By Swift)/index.html","1e2b763cc293ff52caab5634b004aacc"],["/iOS项目架构：使用VIPER/index.html","de00371232de1d3a8250711385cfd697"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","120d2c0ba5b4f117236a503156df22c2"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","c82588925b92487c1356f8f8d57b8c62"],["/page/11/index.html","b0227fbd4e8e5ac0c76bdded305a0631"],["/page/12/index.html","5cb885b064f147d356b998d6bf1847e4"],["/page/13/index.html","61736598daf7d21747fa80a96d840cbc"],["/page/14/index.html","2793f5cbfec5231e042aa8253a5d6354"],["/page/2/index.html","2ff7cb16b9b17a04e6512492bde00b62"],["/page/3/index.html","6493171330b70cb7aeb9cd12f59337db"],["/page/4/index.html","5cc461f88e270f2f73cc30ed7f118a78"],["/page/5/index.html","2a2f1af2fbc7a2a5c014d66efa01fec3"],["/page/6/index.html","738d8084abed44afd40e001e658a862e"],["/page/7/index.html","c382ffe89df9c38ed78df82d755c2353"],["/page/8/index.html","adc87c627552f029579f186b48a3b9a6"],["/page/9/index.html","afe055b3a0af113a326a33de2874c90a"],["/schedule/index.html","512c473b6c040319ca530c18ee85a0b8"],["/storyAppPrivacy/index.html","a3cc349a795002b3d0877934fcc35362"],["/sw-register.js","2f3c4b59e13c1130566fb2f77da34d20"],["/tags/Advanced-Classes/index.html","beb677d549bf455a4592d69b8decfa15"],["/tags/Advanced-Swift/index.html","f770b60f381186f3fe1732b51840cc6f"],["/tags/Advanced-Swift/page/2/index.html","11fbbacf10d5e46455d463cf1e118305"],["/tags/App-Architecture/index.html","ca7ed447327497fef94d047f9a643350"],["/tags/Arrays-Dictionaries-Sets/index.html","20573c590b94f0ad5fcd10d35d5524bc"],["/tags/Authentication/index.html","e9f61492f509ab3da66b5e71b131d6bc"],["/tags/Build-in-Collections/index.html","a7344cbb9a36599ed9c829131f25c940"],["/tags/Building-Your-Own-Types/index.html","21e1d9f2a65d60df27813384c9e3a705"],["/tags/CMS/index.html","64c569d646882c4d7896f4a7ce2f4f1f"],["/tags/Classes/index.html","f1fc996b0c3fab3dae59283dea0b8434"],["/tags/Codable-protocol/index.html","e54bc266a3054c2321deac43debb846e"],["/tags/Collection-Iteration-with-Closures/index.html","8336131781038849def69520ad0f02ed"],["/tags/Collection-Protocols/index.html","f3f966d975e2bc033d2ffd56c7f210ff"],["/tags/Collection-Types/index.html","8dfb162877db58ca59f38950b1f38bc5"],["/tags/Collection/index.html","243ce7102e8a6e49547e3737b13e51b4"],["/tags/Collections/index.html","93a7ab35660253848e1985ca190cd34c"],["/tags/Combine-framework/index.html","5d8e8c5ac4b448d2da53fb6957cf148b"],["/tags/Combine/index.html","72bc2ca37058bb4936aea99ba04b6c22"],["/tags/Dependency-Injection/index.html","610ab2992a6468ccade3202f1ad4355f"],["/tags/Encoding-Decoding-Types/index.html","2339cd80bbd3366e8621b6fc9e2970d6"],["/tags/Encoding-and-Decoding/index.html","ba4bcf0b9caf95924dcf0f467b945455"],["/tags/Enumerations/index.html","8fbdcb6050ed2d6aceb719d7efb92c1f"],["/tags/Enums/index.html","9d778c4bc51a36cab76d503c03f5947d"],["/tags/Error-Handling/index.html","6eb8b8a22179a5b42c8f4936aa5a432e"],["/tags/Functions/index.html","11ab352c32d1577d50428e69034a51f0"],["/tags/Generics/index.html","d5db2b9e28ed8d2db28d4a1e76574180"],["/tags/Grand-Central-Dispatch/index.html","ca7dac2999ed2bd678a563375dc0f3b4"],["/tags/Hello-Vapor/index.html","8744af89a687bedb8ed37fbf3fa68c17"],["/tags/Interoperability/index.html","37fe56f0beb118cb044a6bc91b6ea99c"],["/tags/Introduction/index.html","9fd56cbc53d1f1847b528b641f8fcd5f"],["/tags/Leaf/index.html","eae8e4f881a1c42bff6b962eb1ab240c"],["/tags/Methods/index.html","663bfeb311cf65bbba90e9ec030a6706"],["/tags/Modules-And-Hooks/index.html","b05fc5038b892f5e5d60f49e727d144d"],["/tags/Optionals/index.html","fd14a58a9133555806bf72828388611d"],["/tags/Promises/index.html","7af836ad3582df8429d1af42df314c85"],["/tags/Properties/index.html","c466f69321a18e1ba03d6198c1c7cc1b"],["/tags/Protocols/index.html","51ba5b172c9d8db02b8f20195578c2f7"],["/tags/Result-Type/index.html","02c4b04711cf4ac0f01158b53e0887ed"],["/tags/Server/index.html","072af472f8cdae148e6f2d842ef583f2"],["/tags/Session/index.html","afdb0c3c1e9144cecd396e7916207561"],["/tags/Strings/index.html","088c64d192f601323271fcf6391d502b"],["/tags/Structs-and-Classes/index.html","f9460d62b8b9855da5f47c7b915dfed4"],["/tags/Structures/index.html","2e82f3b4a0523b6680b2097d4f6b87ba"],["/tags/Swift-5-0/index.html","2acaebf21866b6d078bdfdfaba172567"],["/tags/Swift-5-0/page/2/index.html","75bebf5229ad3f64ae8b916d08357183"],["/tags/Swift-5-0/page/3/index.html","7cdadc1a0fd1d52d23e0891a787ce9bd"],["/tags/Swift-5-0/page/4/index.html","334962e264c40b61d34f8c6bfb4faec7"],["/tags/Swift-5-0/page/5/index.html","e5ed2ea98c271ee8248938eb32511327"],["/tags/Swift-Apprentice/index.html","9a7bb255d05b3ecbbbfb4d33e32f8fa6"],["/tags/Swift-Apprentice/page/2/index.html","827fb7a6a94e509779a1f2c364f35ca8"],["/tags/Swift-Apprentice/page/3/index.html","a29930fb799f8a5371351536f7ec9f85"],["/tags/Swift-Package-Manager/index.html","50b29efe44533b4d1961f0e6c5a29fe2"],["/tags/Swift/index.html","39117b001af21102729e38e9e6c964c7"],["/tags/Swift/page/10/index.html","a0b9874129c072152965c90be42a3b76"],["/tags/Swift/page/11/index.html","12a8147647b6bc7bb25dab9bed573cd7"],["/tags/Swift/page/12/index.html","0dff5e4cd1edf282882e996acaedbfc8"],["/tags/Swift/page/13/index.html","c6840b6dc82c888f7fed0361d0fc5ea3"],["/tags/Swift/page/2/index.html","b3447ba1543e9c377185dea69542ab41"],["/tags/Swift/page/3/index.html","f3579efd1b01ef7f22e95860b5fca23d"],["/tags/Swift/page/4/index.html","2f98919b7b82db9bd5ce0fe7844fbf4c"],["/tags/Swift/page/5/index.html","457ad35fd72a1b9dac2d34195115fc56"],["/tags/Swift/page/6/index.html","4520f2f80b11f10b93e20a11ead88a44"],["/tags/Swift/page/7/index.html","1f6c5993f39f1037c5f475e09acf16fc"],["/tags/Swift/page/8/index.html","db2ab61850b995510de0e00a62d84e37"],["/tags/Swift/page/9/index.html","86e72fa7fa5c4c16217cf532c28a0c3a"],["/tags/SwiftUI/index.html","9573955d124cc64b3723c148464e8f1d"],["/tags/UICollectionView/index.html","6f7f20785be419495d0f41e0cb52a95c"],["/tags/UIColor/index.html","93ff8c5265433f49f5e21ea120b5ef94"],["/tags/UIImagePickerController/index.html","f4cdcfcf61e1fbb114071be06c120558"],["/tags/UIKit/index.html","cfec486e54faa1847bda58402566f88c"],["/tags/UIKit/page/2/index.html","0f3e14b33c97cf8ebedb4590e8cead80"],["/tags/UIKit/page/3/index.html","7429b0f13ca074af06279d705596a6f3"],["/tags/UIKit/page/4/index.html","6619d40fc0d917d568406296b2bdcec3"],["/tags/UIKit/page/5/index.html","7f626f141ae62e319a0c3b85b251874e"],["/tags/UITableView/index.html","c77fef25ce888adeb00d5d35a31f271d"],["/tags/Ubuntu/index.html","fa598c93f9c2b3a379bb7a6bae8a7f25"],["/tags/Uniquely-identifying-views/index.html","2d0d79e0e903c4a8f1308dd6be165a69"],["/tags/VIPER/index.html","169214f7faa43a2789ade468560276e3"],["/tags/VMware/index.html","afbdb211ec69488ec8c2ad6d468b52c6"],["/tags/Vapor-4-0/index.html","55c9f5c8332c4ee9420128685a35c6ec"],["/tags/Vapor-初探/index.html","6946a5aa0d1b2b7b41ac8023e3e454f5"],["/tags/Xcode/index.html","e9d7453b989ecc76bbc751325edce369"],["/tags/appleOS-Networking/index.html","fdc68f65d53c888226796df980c4c257"],["/tags/enum/index.html","71d341c9ee38231468f7e4a3c3c50d1a"],["/tags/iCloud/index.html","a58d3d585a7ea97a9766826182dad0ef"],["/tags/iOS/index.html","54a574214e58ba39bf8ca887e37c27db"],["/tags/iOS/page/10/index.html","90f980dd213ebdd0244a981cef290aba"],["/tags/iOS/page/11/index.html","27178e9f3b9063eed3797f118dc3e5d6"],["/tags/iOS/page/12/index.html","1afc1f061760f92e9fc4d24e30ab0400"],["/tags/iOS/page/13/index.html","5cf9c016825d601ce5a4571550f2be0a"],["/tags/iOS/page/2/index.html","c1584fa681f75205ea395d8460fc7b9e"],["/tags/iOS/page/3/index.html","299ef588cd2c538264c557972afa3683"],["/tags/iOS/page/4/index.html","2b901394bb81ec08f3b8bbf3484e8eb4"],["/tags/iOS/page/5/index.html","09b0954631e4586eb2b8bec4e503c2d1"],["/tags/iOS/page/6/index.html","55f340aafdc5df5632b15bda0dfe3cfd"],["/tags/iOS/page/7/index.html","0072762d58262224a6023ff29c3854a5"],["/tags/iOS/page/8/index.html","88e3a9cc8b688535657bb2bc4a6732a3"],["/tags/iOS/page/9/index.html","81c7c6079b567e4a91f4ad33113914db"],["/tags/iOS面试题/index.html","a0e48d83575da962e81024dcaa0028af"],["/tags/index.html","096657a193b3c93ecce4498e422d2ac5"],["/tags/non-optional/index.html","1405e793b4828bee97234bcb9165edeb"],["/tags/random/index.html","c71eca63d3ebdb9ccd7250a579a55ab1"],["/tags/transition/index.html","6368dbfb9d2b61a23d0d49b99244acbf"],["/tags/三方类库/index.html","ab04b0fa30a27af79f9e2f8ac55a4183"],["/tags/依赖注入设计模式/index.html","135a0fdd612ef24619d660a368a60c99"],["/tags/值类型和值语义/index.html","45128b04308586acee946bbf0365ebfe"],["/tags/内存管理/index.html","df9a997c65bc6402d06b0208725949c3"],["/tags/函数式编程/index.html","fd233efe3af59e54aee1ee68162bd7b7"],["/tags/创建博客数据库/index.html","c2a0fd42737c13152b5f1563cefeb5c8"],["/tags/初始化模式/index.html","3e43fa0c8f4271689f6555876e50966e"],["/tags/单例模式/index.html","891435cc943be80b1960a32c5e3d321f"],["/tags/原型设计模式/index.html","c85c741a0532f994f7182ae7a69f7291"],["/tags/命令设计模式/index.html","375815148808bf339376f3122b6050b4"],["/tags/基本控制流/index.html","f915d8ad90cf4b39f6877f86951f6acd"],["/tags/外观设计模式/index.html","87d3bb8e3ac70b293949fe2d74c3ba2e"],["/tags/委托设计模式/index.html","0b0191f730866b36ee8c5e8373789b14"],["/tags/子类化样式/index.html","e50b7ec7e9938be0018f946db6d63fd1"],["/tags/对象池设计模式/index.html","dc121c267ce578de4b07200ee0515564"],["/tags/工厂方法设计模式/index.html","87edefffe9bbf1837ec4eb0b661724bc"],["/tags/工厂模式/index.html","513ef1553b2f95f328cb25c4dab8931a"],["/tags/工厂设计模式/index.html","40eeb6310fd6434cc1af392d4d72bbfd"],["/tags/懒加载模式/index.html","cc46b8c33d0986d647eca9632f416b95"],["/tags/抽象工厂设计模式/index.html","9609410a7a67284d12ee8afe0f9677b0"],["/tags/构造函数/index.html","ae7e5a672114b91efc5711f0fc635e9e"],["/tags/架构设计/index.html","7ea0b8600c8ef72e92dcd7b1b4c6648f"],["/tags/模式匹配/index.html","3644c5f117726f6d7fd076af4b85f022"],["/tags/生成器模式/index.html","e4558a46085c891af3f7d64472fba5db"],["/tags/用户体验/index.html","dbbdf1a4692830431f7e4a1879414448"],["/tags/用户协议与隐私政策/index.html","f459055d8745d2f3e62ca69234993622"],["/tags/类型与操作/index.html","9753b3918c963a7c763959ec2ab077fd"],["/tags/自动化布局/index.html","248e8ac7c6602c2ae653eeeba65c6bbd"],["/tags/自定义UIView/index.html","18bc1da9ec51255e99475daad0fa0170"],["/tags/自定义转场/index.html","49a552903b9cc77d4545e67eaf658dc8"],["/tags/自适应布局/index.html","445e7a643718ef31f1b80a169be01ad9"],["/tags/表达式、变量和常量/index.html","83cf8a1141444301b4008fb450c34036"],["/tags/设计模式/index.html","43f1b4b72c635288a3c4aa26f320fdc6"],["/tags/设计模式/page/2/index.html","4216784ccd4f52c2839000aa3ea60fe8"],["/tags/设计模式/page/3/index.html","4d2d350cb2a409db40d28050b04726d9"],["/tags/访问控制和代码组织/index.html","d7a13532c4cea3233d71f985e0771fa4"],["/tags/运算符，下标和键路径/index.html","d25366e6d29e6a38edfb80aa7a0719c2"],["/tags/迭代器设计模式/index.html","19afa07d88738e7832d0eec6edeb46ac"],["/tags/适配器设计模式/index.html","eeca92085984589c4f466242dfab221c"],["/tags/错误处理/index.html","bce3ada1919a336869b8e79268e60f3f"],["/tags/静态工厂方法/index.html","85928a358299f4d3a3df19c3c876779c"],["/tags/面向协议编程-OOP/index.html","8be6691fab3fb8733602dc38ad8d7dd3"],["/tags/高级主题/index.html","83c82659998cc5556542473d2324d5d9"],["/tags/高级协议和泛型/index.html","df5134536cc5a766ff42c31b89963efd"],["/tags/高级控制流/index.html","034449cf59460342554d32ee342ce9cd"],["/zhizhiAppPrivacy/index.html","8be0c3033fc81ee491d97f5e4e1537ab"],["/为iOS应用构建输入表单/index.html","4b5f7859156cfc83d29c85677344ae33"],["/产品开发的幕后花絮/index.html","9d2d77d9715023c19652d09e05702a39"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","014f9a6f974808c880c2eec3c660f1df"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","943336f5daa1d683d36851646ef40158"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d5365d1b66f2f391ea898dd0c0d68b6c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","8d1b090004f0b4eafc8f768082ab98d8"],["/唤唤家政用户协议与隐私政策/index.html","3ce90ad020b68d920baf8a747a417b53"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f27741f3a715fd53e4bbf6eccb8fe666"],["/在Swift中创建自定义集合/index.html","bf3c798c5a4ac66864bc827b501e9dcd"],["/在Swift中处理非可选选项/index.html","8360017b2406a2cf324e01c6e131aedf"],["/在Swift中生成随机数/index.html","7547af4f3e2fe37e82c87c04de42cef0"],["/在Swift中重构单例模式用法/index.html","52083379221cc800501d9ad248778cea"],["/壁虎兼职用户协议与隐私政策/index.html","6e5117e9544c662f800a5c22ed9f1cf6"],["/如何为VIPER编写服务？/index.html","a9565a60b77883c2d6d06df2bb72d720"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a19f5914eaee93d4d9a8836b43d3fa4e"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7c1c8022d1be9b80e053797f4ec77112"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c242a0c9f6fbef3ced5154b87afadbe2"],["/如何使用VIPER构建SwiftUI Apps？/index.html","fd2bbd601c880566d2e3b44c8985856a"],["/掌握VIPER架构/index.html","2432cd567727a7233d37044ffc37c7ef"],["/揭秘 WordPress Hook 系统/index.html","a134f4f79aacd6c120bc5f347d109d66"],["/比较工厂设计模式/index.html","d677618bb961aacb53875216a6b5ec15"],["/深入了解Swift中的Grand Central Dispatch/index.html","2af83f001bd35a7ca889bb974892d1e4"],["/深入研究Swift框架/index.html","12c30d1bd6f2f84039ac4dbdbd86fd73"],["/莎莎婚庆用户协议与隐私政策/index.html","c70f6740199ec28d8303ce505dba6cfa"],["/蜂蜂兼职用户协议与隐私政策/index.html","46ed51571b06d42b7a9ddf89868c3510"],["/适用于iOS开发人员的VIPER最佳实践/index.html","4e2e3d09e82c0b3e6da4f60aaa819c9f"],["/选择Swift而不是Objective-C的5个理由/index.html","3404ee247cef0b4f2dcdf573760cfdf2"]];
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
