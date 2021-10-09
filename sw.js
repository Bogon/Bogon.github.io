/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","1c145fbc72c2cc2e48be84e0812b3413"],["/2020年iOS面试题总结(三)/index.html","98afe59a6150b5232645c348678ff6cd"],["/2020年iOS面试题总结(二)/index.html","c4a138de59215cdef0340f668450513e"],["/Advanced Swift系列(一): Swift 简介/index.html","0260753bcd1b4d49c923f8ccac253712"],["/Advanced Swift系列(七): Strings/index.html","48841f1da93631c6acecf76987b7fb61"],["/Advanced Swift系列(三):  Optionals/index.html","b89e24d95bf25d28a88fcd6bcfb11f08"],["/Advanced Swift系列(九): Protocols/index.html","b4718ac2f2994649a1f9f99eddc14c90"],["/Advanced Swift系列(二): Build-in Collections/index.html","0b158dcfc6e3fa559f279e4883acddda"],["/Advanced Swift系列(五): Structs and Classes/index.html","1d6dcb06ec5d6b8826e87feb6e05eb7f"],["/Advanced Swift系列(八): Generics/index.html","0d6399ebed32644786d876980c8afea5"],["/Advanced Swift系列(六):  Enums/index.html","e4137f0ca42ec2c0472d725b72798b7b"],["/Advanced Swift系列(十): Collection Protocols/index.html","0ff5830e0bef64ac4588f6c58e78a116"],["/Advanced Swift系列(十一): Error Handling/index.html","59b5d6d117b2fdac6dbaa7e64f67226d"],["/Advanced Swift系列(十三): Interoperability/index.html","550d7b0e685c38a8b3b2133aea21e778"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","25f10231800f8fa76db7a4200c78e25b"],["/Advanced Swift系列(四):  Functions/index.html","8c0cc854fe08c54e3d37cc3e5d189397"],["/App Architecture系列(一):  简介/index.html","6314152acf8c986cb2e0d7799005a38c"],["/Functional Swift 初探/index.html","0279f67a06c3e55731557a11f06e8507"],["/Git 使用小技巧/index.html","3cc727206186007a01231f48a8f48ed5"],["/Go mysql Tips/index.html","a11822e7bd1bd09a5af49d4f6db63af1"],["/Go 基本语法初探(一)/index.html","849a9204f75b91d8c3c2706f74863c73"],["/Linux VIM 命令及操作小结/index.html","5f326683b8ac53ef051126ca48c810d6"],["/MySQL 基本操作/index.html","b1b42d629060bda22fdb17502e1edda8"],["/MySQL-列类型和数据完整性/index.html","14bc999ada4fc88cdcee7f9483fcc41c"],["/MySQL-数据库设计和查询语句/index.html","9db23e3bb0a622b11c761adc56692abc"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","789fa1653d2dee92dd8c129a39575c13"],["/NSCODER和SWIFT初始化/index.html","cd300899a02e90849728e3d429c8e211"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","2e010222c42c8dee47d97db5c339c30b"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","00c6f330405f252bbe0a2161b5eed427"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","b68a1f6a8cca3e84d9bb13105d7de1ac"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","53cfef598b15c4b8c5b4674f9ffdc4e5"],["/Sqlite 使用Tips/index.html","199b2ad8b90f3772712ca4af25ae5121"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","eb86d85dd317dd9da465ef135172dbdf"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b39cc3e9b5795baf63cb893f45efdcab"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","78c45c6868dabbb8f827b2eb816d25d9"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","34c95e22d4d39f368ff2e6ebee65ffc2"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","37844d075435f2973eb74cafe4c4cbd1"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","691ccdced15aaba8ef2940cd78be4f70"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","011f65615e90246205df6760957bbd39"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","5d6a0e1957802f31ade07cc264d64ac5"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","9f0895f5434e026c843a2da6bf595df1"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","92ffeadc42a3950117e73a8a6592d7b4"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","93c4a5c51ff7a3caa0c8ec4b545fafa2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ef260067e9b9b143f81a265cca1a11b9"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","3d2eee13d1bffbf0b3c776a841070945"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b94e032e4937698eea972612960594b7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","baab2e01de59b105958cde66836f4f54"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","a523655c186389f869917673554ec8eb"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","65d7b5c02d0dd1d8b8a11dffb291f75b"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7f451567ef77f969d715f46e0cf8e753"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","a565416ded1cd5fcaad73e54cd0c4f54"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","7a5b14072b1a50537b534f3dc55bcf0d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","a51f064ea6cdfa15d88181ba286c8d21"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","1d9f9b1550d7a66a758a53e9bf71146b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","a825f5d908cbc62821f9e78953df6962"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","0bf6b55c9a9f4d07a72708cee0e152e8"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6201458057768c474be31d01a888f2dd"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","1fea0ecc90e975769633f2ae75a0a98d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a3e33b8ef327cae100f783f24e6f3d12"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","dd556ac5ab1ad4f1133d546318ed6ae6"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","46c2c4af65b8216dfa347be2029592a1"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","05947c2a0b0372bd349ce6ad9571b9ef"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b72fc824b44a6a86808fce0b8af7e1d8"],["/Swift CompactMap vs flatMap：差异说明/index.html","c7cca1c03a0ffd6e50c30c4e08a505da"],["/Swift Grand Central Dispatch 深入实践/index.html","0a8feb4bc89c600de10c24494f08f566"],["/Swift Lazy属性初始化/index.html","b4cba98c70f31d0bad75b3e6c30becf6"],["/Swift Promises 初体验/index.html","fddbbd779f0033f4d60e9a9b6d547aa7"],["/Swift Promises 探究/index.html","4e4e9dac48adf8cc2cb4d85f2ff8fe83"],["/Swift UICollectionView使用指南/index.html","301bd982781792c51e3cb2035b70cc7b"],["/Swift URLSession && Combine framework/index.html","64a281da930607a2d783eb9c2952f1cf"],["/Swift tips/index.html","d9bb131561a06dfa5f522757d1d64dd2"],["/Swift 三方库：GRDB 使用指北/index.html","b638f82dfa4c2f007dfece179a115588"],["/Swift 唯一识别的视图/index.html","cb74a93865a435d950f7b2ad343e9a4f"],["/Swift 如何学习现代UIKit？/index.html","8658d6298f4294aea2a86e848f0aa0fa"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","bda7b276935d8bd7ca1ca54953201078"],["/Swift 用 compactMap 替换 flatMap/index.html","b4a0778805fd76b7ff6da99b49b46074"],["/Swift 选择和播放视频/index.html","452b03cef8150c0a87f6db9a8e3d157f"],["/SwiftUI 系列(一)：1、 简介/index.html","c66c67eb36badaacfbcb63d837421691"],["/Swift中UIColor最佳实践/index.html","ad7747ba218cf4413cbd33a6419d8358"],["/Swift中快速简单的工厂设计模式/index.html","6d2a7c824b38d33056fb2934e2a0fbdf"],["/Swift中构造函数与静态工厂方法的比较/index.html","6f3551fb3cb8ea0d456db186bc4d93a2"],["/Swift中的UITableView教程/index.html","f67a6723391e9abd10711a880086e188"],["/Swift中的懒加载模式/index.html","464ca92db53b3e27b111d28e2cf76046"],["/Swift中的模块和挂钩/index.html","cec53ddb1ca8081e51910a034ab63810"],["/Swift使用布局锚点添加约束/index.html","56d5dec69e9c7e40779432aecac0f159"],["/Swift依赖注入设计模式/index.html","68f634bee4f4d4ffb392212d669a74ce"],["/Swift关于Dependency Injection (DI)/index.html","b43b354c4e1743da20eed0befe7a2325"],["/Swift初始化模式/index.html","12b2e80d43d0574d89eab766107954fc"],["/Swift单例模式/index.html","24025dd802c473e96e1fd36f92f67abb"],["/Swift原型设计模式/index.html","eb866a27af3a2c369e2326b93a74dc6f"],["/Swift命令设计模式/index.html","0ee12d7967a60844f2646986e3e89d09"],["/Swift外观设计模式/index.html","b86a647a447a4bd3f04ac5c2af6cf98e"],["/Swift委托设计模式/index.html","2f38a6b6ee428d6479205ad765391ddd"],["/Swift对象池设计模式/index.html","e88b32e383728330824f52f51fbfb067"],["/Swift工厂方法设计模式/index.html","59919856796a287ed5039617dfa58af7"],["/Swift带闭包的懒惰初始化/index.html","617a7e3f753cde718643e0dae3fc0dc7"],["/Swift抽象工厂设计模式/index.html","8349f86cd1e2c3b737e01a2cb87bb930"],["/Swift掌握iOS自动布局锚点/index.html","2c959911c36d0ca46214af2832b143b6"],["/Swift支持旋转的自适应单元格/index.html","39f99215092798d1cc02052f252bb344"],["/Swift枚举值/index.html","e11ac8bf61fddcb561f61ae9364a1fd9"],["/Swift生成器模式/index.html","89df699c6f5e5e6819da7223ab5ba9e8"],["/Swift结合Xib文件自定义UIView/index.html","7fbd230d5032d9a6602af77e156952de"],["/Swift编写的20个iOS库(一)/index.html","bac6660462ca1855fa466be48ee181ac"],["/Swift迭代器设计模式/index.html","9544c9c6b9b1db90cb8f0d64c7325c26"],["/Swift适配器设计模式/index.html","70d73c762c3bfb447290632ce8fdbf0f"],["/Swift静态工厂设计模式/index.html","0e7f4882e43a9aa078cf0c3a9a0eecb5"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9d6eba6515a4e73980839ac7e989b72f"],["/UICollectionView data source and delegates/index.html","2db56084531aa8e33f44d42210f68c35"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","f195b3a6ca5ea278f03ba97c328fafb7"],["/UIKit初始化模式/index.html","b5d128a40d81b23c1a2e9919745818cd"],["/Ubuntu18.04替换国内源/index.html","0e5d2a781df260d3a29f5ed0f296540c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","67ba5e9c14e6cca1d534db2a43cb1bf2"],["/Vapor系列 (一) :  Vapor 初探/index.html","0eb4c9378676fd6ea29712d984de065c"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","4179aca6112daf9c41924b1452a80ade"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e3fdff9110872615791e3a11f89c44c0"],["/Vapor系列 (五) :  使用session进行authentication/index.html","93dc5960f4b207f06eb01b88d143c7ab"],["/Vapor系列 (四) :  创建博客数据库/index.html","6d07f4110061a5e593f880d0fb68c2e3"],["/Vapor系列(六): 徒手撸一个CMS/index.html","18c8c43c9d31ca8beb801842a4fd3932"],["/WKWebView与Native交互注意事项/index.html","80601edf938b91bcb7b916f9d695a9f4"],["/Xcode扩展/index.html","77e6073f0f8d07d6acfaf58495137301"],["/about/index.html","b3a3694e84a9ff25e54bb9f8a90ae70c"],["/appleOS的Networking示例/index.html","26da5002f139dc4d2900764b9bfd277d"],["/archives/2020/03/index.html","7b2b15bde0ea609e0f126dac2f75c051"],["/archives/2020/04/index.html","d2343b5362958d02ed4bdbbe7eb95669"],["/archives/2020/04/page/2/index.html","6a4109a0b810cacdd23f89e999514290"],["/archives/2020/04/page/3/index.html","35563f22e7430c2ad989ef860bc2e6a8"],["/archives/2020/04/page/4/index.html","4a21534cc0b3e566017ec5a2bfd1b2bc"],["/archives/2020/04/page/5/index.html","d700920a5b8f0a761a87d3ea076888d4"],["/archives/2020/04/page/6/index.html","4814e90ecd3ff8ca755f08e3a465e356"],["/archives/2020/04/page/7/index.html","424b7958e912b7a6978329ee76cb2ac1"],["/archives/2020/04/page/8/index.html","bb1e0ed701d39c308df6c2dbbeec1e51"],["/archives/2020/05/index.html","2eefea2bdc374bfbe9292520ee622013"],["/archives/2020/05/page/2/index.html","f0502ca787754546deed226cca2ef693"],["/archives/2020/05/page/3/index.html","ac222a9871de94ac0134ccd8cee884c4"],["/archives/2020/05/page/4/index.html","04da47974d45c30a89a8b1e0edd0a0f4"],["/archives/2020/05/page/5/index.html","51be5d07c4200b4ff7805b895086ceba"],["/archives/2020/06/index.html","b0dcc9ba8e329539791a5e61ae5e0268"],["/archives/2020/06/page/2/index.html","00971db49a1fabab2c45ad1ab07b2f8f"],["/archives/2020/08/index.html","c22fc1b7e83ef4d54dc6de30ad889f5d"],["/archives/2020/09/index.html","4201575697f55d9bf622e3e3e773683d"],["/archives/2020/10/index.html","69dbd7e495f0d92205a8b03e7d746a5f"],["/archives/2020/11/index.html","081c8a1c17fe72084286869789df9148"],["/archives/2020/12/index.html","9c325a0c2bd1193862a3db88463712cc"],["/archives/2020/index.html","83f451e06b53c33b7e241468f2047ad2"],["/archives/2020/page/10/index.html","5effb79bb1ff7edb27d43099e0b69fe8"],["/archives/2020/page/11/index.html","05ec3090b59de90921b3d3d3a4268d06"],["/archives/2020/page/12/index.html","d66906e1bc39009cf6d392085a9466de"],["/archives/2020/page/13/index.html","cdf050b0d47223d0d6b6b78b631a7d49"],["/archives/2020/page/14/index.html","e6fb3124d8a397ba989f2e6422865053"],["/archives/2020/page/15/index.html","0a9d326ea3dc62d1bbb6f4ff2b7fdfb0"],["/archives/2020/page/2/index.html","cd2dc5b041d68fe1e9383877fca9a79f"],["/archives/2020/page/3/index.html","c64856f46f26189dd347343008807567"],["/archives/2020/page/4/index.html","27ddf446d3885fb110e36b1c07b00e90"],["/archives/2020/page/5/index.html","071ef996d460a18b2c2f0a9a807ed704"],["/archives/2020/page/6/index.html","503a502df35f76b00d25a58e11c037f0"],["/archives/2020/page/7/index.html","ac598dffdc7da412688eb781cd7a60c3"],["/archives/2020/page/8/index.html","4c861dd51d54b0864d314b155ee4e845"],["/archives/2020/page/9/index.html","088df29fb28ad0fcef295b0f21f208c6"],["/archives/2021/03/index.html","58747a8a3d81b6a1a1e94cb6d28b39bc"],["/archives/2021/04/index.html","241dc857a0acf6816cbfcb49130ab65a"],["/archives/2021/05/index.html","ce06bcb37cde732a11ba053328b4b2fe"],["/archives/2021/06/index.html","5eec2a58ad0c4b4ceafb1065e7fab79c"],["/archives/2021/07/index.html","1559533fb80a263985e5bbbf29dfce81"],["/archives/2021/08/index.html","3cf2522abd5a04739141cd9edddffad7"],["/archives/2021/09/index.html","2c7a95e87dcdae6691c73e2a92b22fbd"],["/archives/2021/index.html","fd537fed773ced7753906f911065b6ba"],["/archives/2021/page/2/index.html","182cc83e6f27af4a629b7f4f0d152c22"],["/archives/index.html","e60b8060233ea1021513ca036f5c369d"],["/archives/page/10/index.html","8c3e146650d24954775455dc4068a691"],["/archives/page/11/index.html","068cffa7b879c015d1947436996e3c9b"],["/archives/page/12/index.html","4dd3aa334bd4ed79c748141f2e231c8c"],["/archives/page/13/index.html","75880402de7889c4d543cc8d3c05c1b1"],["/archives/page/14/index.html","8f8cba0a388dfae615971d1b58aa5a58"],["/archives/page/15/index.html","5597104c561318d39bcd18dd01d57ad6"],["/archives/page/16/index.html","64711dac4789c57c3061ae191cba5a05"],["/archives/page/17/index.html","ab2038dfd9740d57207a3031ea894348"],["/archives/page/2/index.html","7ca7e449325b6adf7f95198ea3be04c5"],["/archives/page/3/index.html","0bb6a6cb62ac468a6bab7c8ccf80b58d"],["/archives/page/4/index.html","b4b3eeb04d011c3353940bc00196b514"],["/archives/page/5/index.html","259af4f765a022cd4c77cbbb5e8a86f4"],["/archives/page/6/index.html","3d8e09e2ba7004bc4e1e09c53515341e"],["/archives/page/7/index.html","7c62155325f06bf4d72277ab43b4ed87"],["/archives/page/8/index.html","7cf942eb05e051892e35c80185168823"],["/archives/page/9/index.html","0387dde727c2323f37d1e9ce216813ce"],["/bugly 上传dYSM文件小记/index.html","c916ea9938fc594ad9f7b79cac9b59ef"],["/categories/Advanced-Swift/index.html","8b52993bd38fe21b054bd6e23a7b66e1"],["/categories/Advanced-Swift/page/2/index.html","e50b4be244770187329e1a6aba14dc90"],["/categories/App-Architecture/index.html","c6f75dca15fdab7b88614dcf0e77aec7"],["/categories/Array/index.html","6e6381f556c4a77ce0e9f11e1b0f7b31"],["/categories/Codable-protocol/index.html","a206de936cd95dc3033d396ac137bad4"],["/categories/Combine-framework/index.html","49dc1a63e15d4bb5e85571fb2819da1f"],["/categories/Combine/index.html","fa3369d1430afaa372f8473fe75a1a2e"],["/categories/GRDB/index.html","bddf0cea91fcaa2d929e5467cc3ee311"],["/categories/Go/index.html","85bad4e4f39c9b9fd1f60cd3a8a3a6fe"],["/categories/Grand-Central-Dispatch/index.html","36d6d55aa46ab96d72a7175089fc18a8"],["/categories/Hexo/index.html","9b743fca2212572a2730fd6571da8216"],["/categories/Homebrew/index.html","0d4bc92cc877242f3ff1166e7ea29bcf"],["/categories/Linux/index.html","d58684ec3b93a06d912f891f18e996d6"],["/categories/MySQL/index.html","f90940a691e795129a7262aace9b6d03"],["/categories/Promises/index.html","55b23277fc4ad1f9d13b0c1b46b2501e"],["/categories/Result-Type/index.html","43ad2fb3228ecdee8fe57cbf631dd41a"],["/categories/RxSwift/index.html","5353ad380519c80a2a5b14071267bdb0"],["/categories/Server/index.html","4264db74098f2ddb0a0489d03d018aa4"],["/categories/Sqlite/index.html","5bf365753d0ed0a670a89c6343588d2f"],["/categories/Swift-Apprentice/index.html","c75e463d61e4715f69691cfa10b330e9"],["/categories/Swift-Apprentice/page/2/index.html","89e6c469b96c1eede72429131d720419"],["/categories/Swift-Apprentice/page/3/index.html","63f85abb3a49ff79cba7f0e4cc6c8678"],["/categories/Swift-源码阅读/index.html","e3ef4962296d48fd3c93661b20b109db"],["/categories/Swift/index.html","12803d2fc9e7d60d9238850844576193"],["/categories/Swift/page/10/index.html","804f9ca13788610bff658871600d0691"],["/categories/Swift/page/11/index.html","ed0279fb4660ef4b83f8928dcdf19d26"],["/categories/Swift/page/12/index.html","4c179ebdce872bff7b9e83ee4229b1dd"],["/categories/Swift/page/13/index.html","249959b8aa17d1b33bd1908b74e99c28"],["/categories/Swift/page/2/index.html","7f42fdffebf58999e6a274e6984f693a"],["/categories/Swift/page/3/index.html","954606c75f76c5e55a3e08d67042ada5"],["/categories/Swift/page/4/index.html","7303cf971ee9c6affb36c2e2c9c5398d"],["/categories/Swift/page/5/index.html","7424061a8e65436500486ddee3d9ed23"],["/categories/Swift/page/6/index.html","1343f214c089ce139a3657fb441ab5a4"],["/categories/Swift/page/7/index.html","fc37a81a4aad597fc90d87f4c0a23e6a"],["/categories/Swift/page/8/index.html","635cd0cc4a2551cb327ed78e2e0113c4"],["/categories/Swift/page/9/index.html","574fbe48c8da298347466153b2576847"],["/categories/Swift5-2/index.html","4276e3aad43c3e7e70f530deb28ed34e"],["/categories/SwiftLint/index.html","f1904734e29b3e268570516c098b16f4"],["/categories/SwiftUI/index.html","8cc42a3658faa8c0e5f4a909e0b79923"],["/categories/UICollectionView/index.html","6dca675613ea02d40a27e434463c0865"],["/categories/UIImagePickerController/index.html","ec19d89e28774e82b61233e8fbff84c2"],["/categories/UIKit/index.html","1b4c68d34b51cb68b34a9124c2beb4e6"],["/categories/UIKit/page/2/index.html","b10d8d8fdf74c6eb217cdf60e4b1a86a"],["/categories/UIKit/page/3/index.html","ee70e082a54f92e66550f49279f24dee"],["/categories/UIKit/page/4/index.html","6bbfd002e8af11434d0d14c855c4e1f1"],["/categories/UIKit/page/5/index.html","322cadc114b4742c4345709da0fad408"],["/categories/UITableView/index.html","86b1d2873d8ae73803c3638c3ca4a01e"],["/categories/Ubuntu18-04/index.html","b8979b09f88f9d68bf274a5e103e7da8"],["/categories/Ubuntu软件源/index.html","ebacf1a8b5d3777f354cf8028f62febf"],["/categories/Uniquely-identifying-views/index.html","3a91a576e5e653e238c5f909f26d259a"],["/categories/VIPER/index.html","7fd980181f17455ccf1a376bd731735b"],["/categories/Vapor-4-0/index.html","f187578eac3a19bb05f5e8b1f99b4e5d"],["/categories/Vapor4-0/index.html","643dbbd9a29abf7fb592e94b72b2b591"],["/categories/Vim/index.html","91309f64d616b5c30b1a5d3828e6922e"],["/categories/WKWebView/index.html","6e96ee113b4703bd3cc2a8ee981d23f7"],["/categories/Xcode/index.html","6421e18d29d93e09cde88f84e07ad11d"],["/categories/appleOS-Networking/index.html","a72cc2c25c965732a391752adcb800ad"],["/categories/bugly/index.html","1c67eea689f19471ad5ad3640a4e690c"],["/categories/enum/index.html","71b2f5f6b493da1317e71abf2531b6f7"],["/categories/git/index.html","9d58d225fdf40a50320f4bcafabcaf5b"],["/categories/iCloud/index.html","89cd6f2e58bee2ff00c71ff87b090834"],["/categories/iOS/index.html","80b5c930ccff7a93d4e469e7f7e5373c"],["/categories/iOS/page/10/index.html","8f33ed56f689e006530e7b79c0fb4cf1"],["/categories/iOS/page/11/index.html","e58ac98b61cf81beb707e3fd46ed0fac"],["/categories/iOS/page/12/index.html","b3a24e14898a9c62f059b2c0d78b0553"],["/categories/iOS/page/13/index.html","188a36d417e6fbf08e603d511027b0fb"],["/categories/iOS/page/14/index.html","00b90d815c80f9c9453c1f4a5321e416"],["/categories/iOS/page/2/index.html","5ff2c6cd54c4bc993a43e37370231b25"],["/categories/iOS/page/3/index.html","600b78d57211898156158b1cf35d4c52"],["/categories/iOS/page/4/index.html","3c1a34b41e1ebb9093b93e2b6c956793"],["/categories/iOS/page/5/index.html","99ef26b468f54fa4d9dad3af8db9ddae"],["/categories/iOS/page/6/index.html","2c9e108f20b5e895c99ea66cd3242778"],["/categories/iOS/page/7/index.html","43e750dd70953ab4860227dd56b9668a"],["/categories/iOS/page/8/index.html","78eff4d22686d746d92eab2951d0feef"],["/categories/iOS/page/9/index.html","afc4775c9e63e991799e686cc4c811fd"],["/categories/iOS面试题/index.html","90f380a87b4319bd0eb36b8bcc522563"],["/categories/index.html","f1c39fcf93da5c8bc7e2e249fcac53c5"],["/categories/random/index.html","f6291c8ebc0078be933af80a4c53ddb6"],["/categories/三方类库/index.html","70ca874b79cacb636a598bd54ac17a63"],["/categories/函数式编程/index.html","21ccab0d0936e0ca12cf98512c45fc6c"],["/categories/子类化样式/index.html","b7737cec81bc150c6d27900b30d7e0f3"],["/categories/开发技巧/index.html","24545da95a29aaa0fb9ceba7c553e110"],["/categories/开发记录/index.html","54b6231761cf0d42244f12c86d3524c1"],["/categories/技术支持/index.html","83691cbec6533149a0c2013dc4db6d72"],["/categories/数据库/index.html","d32c1ecf5adf6e951c1cf16f33e37926"],["/categories/架构设计/index.html","0cdaac5924b7b07ed91efbdb5c7916fe"],["/categories/测试/index.html","f27305a2fd09d9f0774da0cfd8d38551"],["/categories/用户体验/index.html","67d18bd1ab904f33c9dc54a0614512a0"],["/categories/用户协议与隐私政策/index.html","e5e043b299ef5ea527623ca3258e0139"],["/categories/设计模式/index.html","76bb054e146d2d0e4f9ab03f2304e9b3"],["/categories/设计模式/page/2/index.html","0155eef3f104a9766d79079557b05edb"],["/categories/设计模式/page/3/index.html","7dabc659457c7439d381c47978fe9561"],["/css/main.css","9e862f24751be3abb4a5b73630dcc805"],["/hello-world/index.html","2ad3b268da79eeb8a286be8fe0fe6367"],["/hexo部署失败/index.html","47d2b19272f50b5cffd0353c9241e932"],["/iOS 15 适配/index.html","6e37f3c223d16ad4d372b5a1c2838adf"],["/iOS VIPER架构深入实践/index.html","aca8d1d0e0ea3c5718f7ce76d014bfa9"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","1d54dcf42a739b0d83f7a7b2bebaa8bb"],["/iOS 自定义视图，输入表单和错误提示/index.html","4f65751ca11d7dbe5aab84933bd8fa67"],["/iOS如何使用iCloud文档？/index.html","041b9f00e820f6885016f20aa0d2d75d"],["/iOS子类化样式/index.html","7dee5322edaf7e94108ad720e18a267d"],["/iOS开发记录<一>/index.html","c9e9b0b1069ad76aa86a5e6d2657df33"],["/iOS自动化布局编程/index.html","aff25de94e74456a9bf5847c565f4ab2"],["/iOS自定义转场(By Swift)/index.html","15c2bdfe1e3bfa51aeb348ff5cd9c1c2"],["/iOS项目架构：使用VIPER/index.html","634001687e0084d9550551d5a789035a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","005988635152001cfda276e5c94da0b8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","2114c8c3e595c1c37c426ffae09140dc"],["/page/10/index.html","0df33f14006a9a8865490baec579bd81"],["/page/11/index.html","76c94ea9af2235d425661a2b58c5b864"],["/page/12/index.html","e0104e5894934133d35d95fa13b025eb"],["/page/13/index.html","8db75796ae6720977c51618cdaaf67a6"],["/page/14/index.html","62e111aa8c61803b5e0ede93a7c1c278"],["/page/15/index.html","0a6c8541e133efd7e9bc4ff929c9bea3"],["/page/16/index.html","b586864adb92e1c3b1a0184b7dcd5d68"],["/page/17/index.html","6b3a956dccf8db27174d40a0e4d06898"],["/page/2/index.html","336d432c60c54e379b0b0299e55f81c7"],["/page/3/index.html","919417e91ce6753b051fc3bedd6e58a8"],["/page/4/index.html","d23567baa2f15363977b4a901a7aab60"],["/page/5/index.html","a8ff05b1a47c04d0e7e4ee4715063c0f"],["/page/6/index.html","f55804fc04c16276184e127610ba74f3"],["/page/7/index.html","24e9f878053f7c2cb4c081508384caac"],["/page/8/index.html","97bb88b9b8dcb333eb16555002b81051"],["/page/9/index.html","bec2e8fe32f819f5d38e798b598af7c5"],["/schedule/index.html","a2ca1a7d17095382cb51fb9997292a7f"],["/storyAppPrivacy/index.html","a6afaac8c15395e18ac411472be6c21a"],["/sw-register.js","d653185ae99c1cf602081607b37bdf86"],["/tags/Advanced-Classes/index.html","e6839261b624c856bacd57012e972ef1"],["/tags/Advanced-Swift/index.html","7fb5d96dabf0cdd0534d1dd78b88c57d"],["/tags/Advanced-Swift/page/2/index.html","9ddb2aaa514a52eb48e0bc4dfefded44"],["/tags/App-Architecture/index.html","89ad880acf090087ad33cddfc1c9708a"],["/tags/Array/index.html","931a9d9ca33ff78f0286297971c126cb"],["/tags/Arrays-Dictionaries-Sets/index.html","e742ee053ffb748606ca844215c480a3"],["/tags/Authentication/index.html","8d4126b043153c8dd8e586821f5156a5"],["/tags/Build-in-Collections/index.html","d4c34352111b41135028e613473fb67c"],["/tags/Building-Your-Own-Types/index.html","8128cbc0120cae5f01cb56b2fc10b9b9"],["/tags/CMS/index.html","4890ecee3eecaa1640656bef5e71fe89"],["/tags/Classes/index.html","d445b02eb3107b9daedf045d958585ce"],["/tags/Codable-protocol/index.html","0a55bd2a999ac49fc74c0d3bbf3f3a41"],["/tags/Collection-Iteration-with-Closures/index.html","08333d710fb90d7cd790618c537159b5"],["/tags/Collection-Protocols/index.html","95ac7a8d8d1ee818c383afb7b8b82625"],["/tags/Collection-Types/index.html","747473c8c985836a7de41e73b16dc513"],["/tags/Collection/index.html","02a4f8fd83cb3b477bca580403994469"],["/tags/Collections/index.html","e3f9bdbbf6dc6d8acab590cd98eca261"],["/tags/Combine-framework/index.html","ce113a9182f584ff29100346094fd699"],["/tags/Combine/index.html","c2a2894addb0bd028266df70c2dec495"],["/tags/Dependency-Injection/index.html","b535ffe52ddee3d5365739a9ea25465b"],["/tags/Encoding-Decoding-Types/index.html","6248273fc7a473ddc09b751f3dd2abff"],["/tags/Encoding-and-Decoding/index.html","4ba228a61738a00c75f62aeff9fdfa08"],["/tags/Enumerations/index.html","11807772d81340f1469907a2a46d2602"],["/tags/Enums/index.html","4cc3c16117878078e1cbece0ff9fd219"],["/tags/Error-Handling/index.html","eacedd78198831007de3f959eec61f40"],["/tags/Functions/index.html","7a97850118118656cdad59e10aa025a1"],["/tags/GRDB/index.html","c58aa54b0af99d1c771eba534ce863cc"],["/tags/Generics/index.html","e32ac977a511b830b6a793ab8d87fb3d"],["/tags/Go/index.html","c13688cbe4bdf5493f39ff4bc38ba77f"],["/tags/Grand-Central-Dispatch/index.html","2c5ddf634eafa2bb9800003ebc1b67be"],["/tags/Hello-Vapor/index.html","ae5cf4eef32f39ec7048e8596a548b16"],["/tags/Homebrew/index.html","e5ffc0c71f81167abd0e81169b40f2ba"],["/tags/Interoperability/index.html","217c565b13ada51e9c9536fbf12e8eae"],["/tags/Introduction/index.html","30df2ebb7ed36be0aa3d71d3026d9b79"],["/tags/Leaf/index.html","a6cb5d27d05b9f03b759b1ac85a66e22"],["/tags/Linux/index.html","cd015b34ba3433ab4b30df87fc2ded09"],["/tags/Methods/index.html","2358cba4550fae93d7cd9b123bf9deec"],["/tags/Modules-And-Hooks/index.html","9ccc099110dd39844c6ef0dbfb67755e"],["/tags/MySQL/index.html","9e83b6d3ea4f7044c03c77998b3887a2"],["/tags/Optionals/index.html","2ef88844ad07a5b364c5ddbefc9b7f98"],["/tags/Promises/index.html","a6e037d1106a7e8cad3b2532cdb602db"],["/tags/Properties/index.html","6532790d69586e3990328ca4f4a76eb3"],["/tags/Protocols/index.html","17527eb10c349dd87363da4c2464f22d"],["/tags/Result-Type/index.html","c39ec48de581f3b17fa7c04551f3997e"],["/tags/RxSwift/index.html","62ecbbda01a446cd7917d86d1c9fdd84"],["/tags/Server/index.html","3d293cd18e7bebec683247ab3d043970"],["/tags/Session/index.html","aca2b7c74488a8d6b132a2d165992e5b"],["/tags/Sqlite/index.html","f3b6646e91e54c3d09b1268898d62c52"],["/tags/Strings/index.html","035edb859982b55009f98ec7c91b37ae"],["/tags/Structs-and-Classes/index.html","96c6f95e1f25d480635c74dbe3e0bc07"],["/tags/Structures/index.html","4cfac134545d74691b6cea89aaa3e611"],["/tags/Swift-5-0/index.html","b42bfb6981c89d5cfdf1e215e5988944"],["/tags/Swift-5-0/page/2/index.html","6ad4ad99abc4dd1ad0087566aa5ba8ad"],["/tags/Swift-5-0/page/3/index.html","0bf652e6608105e258fa5b80d5e6a1a2"],["/tags/Swift-5-0/page/4/index.html","3bea2797efd67dea176fbdcca18a2579"],["/tags/Swift-5-0/page/5/index.html","f85616ffc659607b2f70e3f5bf4d3c8a"],["/tags/Swift-Apprentice/index.html","fbc2ba46ff1cff579a68040d3625cf82"],["/tags/Swift-Apprentice/page/2/index.html","24651b8ee6568d17707ba2d63bdd95e7"],["/tags/Swift-Apprentice/page/3/index.html","688d3ca71b470899d81add0150166ab5"],["/tags/Swift-Package-Manager/index.html","1b0753917ae8b3c60ee84035b4db2f25"],["/tags/Swift-源码阅读/index.html","eb35edd5bc9a30d9f3425da4e680010b"],["/tags/Swift/index.html","4eb30fb5c44c6a25c0b2c2e0b89dfbe5"],["/tags/Swift/page/10/index.html","5725a573ea41024170a6fef7966e372c"],["/tags/Swift/page/11/index.html","51049c80b8c8e45328f8ebfd54362631"],["/tags/Swift/page/12/index.html","2f1783a8bfaa5da1ea5d6d7adb86e85c"],["/tags/Swift/page/13/index.html","09f41116f8dc5a341224c94ce16c68ac"],["/tags/Swift/page/14/index.html","aca1f9a798b3bd6494a7bf4196c895f4"],["/tags/Swift/page/2/index.html","37a1e0d0c0a4d2b8972010f670338176"],["/tags/Swift/page/3/index.html","a5754af55613b8e962f2f1bd0f24ac92"],["/tags/Swift/page/4/index.html","a281eecc7b7c94f7295a2a8b0f64e516"],["/tags/Swift/page/5/index.html","a8f232e7126fed841b81f8cc0d135c40"],["/tags/Swift/page/6/index.html","0d4cdd40830a6376a1caf99bbb6d20b8"],["/tags/Swift/page/7/index.html","e1dde2afc2ab4d47340f6cbf4c1aa367"],["/tags/Swift/page/8/index.html","129ccb96ac484a1ee65efa986fd027fd"],["/tags/Swift/page/9/index.html","6e59ca764db247266cac5cdfd64f32be"],["/tags/SwiftLint/index.html","6adb63ffade8f2fef3641d7ec0bc8e18"],["/tags/SwiftUI/index.html","22c15321951e7dcd1b09b36d09f58ee9"],["/tags/UICollectionView/index.html","3f682f734ca03cdc8351bb26bb3517ac"],["/tags/UIColor/index.html","b44f1550566acf570e71d1a90c32f08f"],["/tags/UIImagePickerController/index.html","389ccb057b26868b63f2053bf0264199"],["/tags/UIKit/index.html","4249a535f69ce100173281ec39d00153"],["/tags/UIKit/page/2/index.html","7321c895b831c72788b5b783a6f67290"],["/tags/UIKit/page/3/index.html","20627d81ad88671b437756fffb33f29f"],["/tags/UIKit/page/4/index.html","a27d06c174ebc603e87c29c31a0c4c42"],["/tags/UIKit/page/5/index.html","09422c27595d518fed1f50e84b093ea3"],["/tags/UITableView/index.html","284b7b09ff1380b2f1f59f7b4650a1db"],["/tags/Ubuntu/index.html","3ce88ad909296f076da85ea54f1e4282"],["/tags/Uniquely-identifying-views/index.html","0fdadd14df6fd62ea02c038c97b7a3f4"],["/tags/VIPER/index.html","6e965dc81465ad143c55a19afc7f8574"],["/tags/VMware/index.html","97fb0af3cd8c5d98973ce106398ca11a"],["/tags/Vapor-4-0/index.html","d1a4e2e5591c83fe409db66174d2dfba"],["/tags/Vapor-初探/index.html","c6d8e8e80a80dc55091849e4c583986a"],["/tags/Vim/index.html","8cb0a946bc0a9a3697cb143d192c50cd"],["/tags/WKWebView/index.html","e090a17c2934c60f8375832053889740"],["/tags/Xcode/index.html","316c1a90a2d84b1bc9fb9dd5ee1044f0"],["/tags/appleOS-Networking/index.html","8c41b88e089a72177339426f41f1e526"],["/tags/bugly/index.html","1a627783eccb45a89bf0f1243d7b9b66"],["/tags/enum/index.html","dfe319ef6964160c212aec9dbdccbaeb"],["/tags/git/index.html","ab0f1a6e2d65a9a7f5f908acaeb0accf"],["/tags/hexo/index.html","f1c7e61b2e9cf485dcecf08f66459354"],["/tags/iCloud/index.html","a5d6a8bd9fe90b83b95fdb9e22f3a75d"],["/tags/iOS/index.html","dd6adb8e519150e4e9c7125b2d9baf2a"],["/tags/iOS/page/10/index.html","1ed587638f749e869563c07f32ac3495"],["/tags/iOS/page/11/index.html","fee29f94556819e73320f574ea354b89"],["/tags/iOS/page/12/index.html","79fa5fe2ae84948a254ec47b4ba72ca5"],["/tags/iOS/page/13/index.html","f47f1b2c08dd1084f8459dbd1f55797a"],["/tags/iOS/page/14/index.html","b54276093d1805014a1f623cc3dff2f6"],["/tags/iOS/page/2/index.html","3c3b48e7ee2d919870182c06daf35e71"],["/tags/iOS/page/3/index.html","841b0013a17ee7b16db720f43b1b3a93"],["/tags/iOS/page/4/index.html","a8c4ba072dda9c3a2fce697d97bc9923"],["/tags/iOS/page/5/index.html","c75ed3a8d7640553ab7b51f2fbc32d93"],["/tags/iOS/page/6/index.html","45b0471e0cb7a502c147c30b6feabf5c"],["/tags/iOS/page/7/index.html","561d3652d50e7a6ff208d443f5f201cd"],["/tags/iOS/page/8/index.html","afa0acb3d0e46f30e50c9fea712679f9"],["/tags/iOS/page/9/index.html","520e386ee5cd1dce5af1391d1534aa72"],["/tags/iOS面试题/index.html","8a5474390ae94c48a538f1c449c10d34"],["/tags/index.html","8cadf76b21f93e122d73b8fc3d62455c"],["/tags/non-optional/index.html","423e85dabf3f1505ef6aa991d87e2975"],["/tags/random/index.html","0e0e150715a789baa99148d665dd693a"],["/tags/transition/index.html","f963ca2eb4871de2b57d757a80abfa5a"],["/tags/三方类库/index.html","f323b656506ec4e6b385799e545640dd"],["/tags/依赖注入设计模式/index.html","1ee57c32fab312be277cd8c1af2beb09"],["/tags/值类型和值语义/index.html","5469e2496671945393400f9e1b16e509"],["/tags/内存管理/index.html","ba2e4882d627659f0704de5984eb4bb5"],["/tags/冒烟测试与回归测试/index.html","46744eddcbd27205eb0c8acf7506f3d9"],["/tags/函数式编程/index.html","3f8641c99ea06d96c71788cf64e8669b"],["/tags/创建博客数据库/index.html","a71e5b0d76b862b7b31107af55080381"],["/tags/初始化模式/index.html","6605abac2ced3d1745ed1ad1bb7f1eb4"],["/tags/单例模式/index.html","523c3b7ac172fffd1cb25b56c010773a"],["/tags/原型设计模式/index.html","b6e276075a8d3709243a7261d724fb1b"],["/tags/命令设计模式/index.html","dbd0c0b18dc9a0427c46526d11a72699"],["/tags/基本控制流/index.html","43e2c63103f858d49276563d0cfac0f9"],["/tags/外观设计模式/index.html","9c4ee0eca412244bf50ab84fcb6cdf40"],["/tags/委托设计模式/index.html","af927d0462325e411cced7adde75964b"],["/tags/子类化样式/index.html","3c49036d0e465798e189d011e43f4398"],["/tags/对象池设计模式/index.html","ae970db1e022ee3f4e4c92ebd8cbf139"],["/tags/工厂方法设计模式/index.html","0e891f3239a2cc7038b70e6008b4ab06"],["/tags/工厂模式/index.html","d0749e42e2b6ede2de904ed2893e6f6b"],["/tags/工厂设计模式/index.html","60109d9ee55a7f38ced7b4f6203a27cf"],["/tags/开发技巧/index.html","35602bf621eb92d46317f26b55c4842c"],["/tags/开发记录/index.html","e0af95b42c2b5ded111fd42c67c01108"],["/tags/懒加载模式/index.html","6a020b6e6b2b14752222571c23558c07"],["/tags/技术支持/index.html","8344f984707f7a004d2a12c77fb12c73"],["/tags/抽象工厂设计模式/index.html","a40a56230a380c28d6fbe82f343ff600"],["/tags/数据库/index.html","57624dee8065e09b9dbad15e0dcb0935"],["/tags/构造函数/index.html","cf313a8e64600fd6191d0685cbe56eec"],["/tags/架构设计/index.html","bbab08f0d4cb6c834c724fdb0df3eaf0"],["/tags/模式匹配/index.html","a792d057ca0e2be34f2734f59960c557"],["/tags/生成器模式/index.html","965cd8425e1a7ec26d4b152d4923ba9a"],["/tags/用户体验/index.html","f6943f1b89a8f33622f882c7d8d851f8"],["/tags/用户协议与隐私政策/index.html","ffee458a2b08bf75171fd17044ac78b8"],["/tags/类型与操作/index.html","078fedd2460c192c12acf4a79ebf78c3"],["/tags/自动化布局/index.html","b18dccd09d7e0fcd071f4234ba705119"],["/tags/自定义UIView/index.html","4657ff6665c26d78a41a849e270f3533"],["/tags/自定义转场/index.html","73d5fe55fc435320577cb066d625f27b"],["/tags/自适应布局/index.html","19b996b0367ab2e3283e3505299dc407"],["/tags/表达式、变量和常量/index.html","628c3e3a01608fcd11a815d9791ae15d"],["/tags/设计模式/index.html","ea6a4a8119198b6954aa6dc5e55c08d0"],["/tags/设计模式/page/2/index.html","3fde8a9fdfe859d47354d4d1fc6b2044"],["/tags/设计模式/page/3/index.html","fd758a80b407e09964158552d8a60121"],["/tags/访问控制和代码组织/index.html","4872e2ade76f6f3b5a3c196b3ebf20d2"],["/tags/运算符，下标和键路径/index.html","c145f3de23d423b211f029a98ff3862d"],["/tags/迭代器设计模式/index.html","ff45d2e5b40b72dab727592bb2a4c73a"],["/tags/适配器设计模式/index.html","641422744190d2d5aea48a1a675b2b8f"],["/tags/错误处理/index.html","a2442d6695cd519cd04936ad610f67ee"],["/tags/静态工厂方法/index.html","be7b889082f3cf18deaa71dbb25a6fcd"],["/tags/面向协议编程-OOP/index.html","1d0dec6699056693cca5cbeb7e51e162"],["/tags/高级主题/index.html","f38e572f4ee3bf93dec872a48acd14fe"],["/tags/高级协议和泛型/index.html","0676193b821058d18427064fc2f43023"],["/tags/高级控制流/index.html","38384792ec0c5aafdd784b4bad797417"],["/xcode 常用的快捷键/index.html","99286a4cb4ac074665d8ab8d542c399c"],["/为iOS应用构建输入表单/index.html","791bd3f2fe6d2a83c7e169daf5f69a5f"],["/产品开发的幕后花絮/index.html","04ecc0902eeceff69247e1d7d3dc9135"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","05dbe6e5e5c216ef2c973c66764881ee"],["/冒烟测试与回归测试/index.html","eb0d54341c5f34cf05ae73d8458104ca"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7aad0b084e5d5218054e0042c46651e5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d11e995fc0ca3453bcc8417d4d938de0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0c50333f179acbf2d1b1c4f335f06656"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f03e55b175acf5830aaa9d5b3597c690"],["/在Swift中创建自定义集合/index.html","fd562849b8f7d2083bac26b40b71191c"],["/在Swift中处理非可选选项/index.html","2c051c5c1fc933009797f0e97e2ec48d"],["/在Swift中生成随机数/index.html","e68907c7b0bb4e570461113d0c77bd6d"],["/在Swift中重构单例模式用法/index.html","673603b1a65a2cd6a25c1caf4983de5f"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","7168c19f0af78c11dacd5c74e9585873"],["/如何为VIPER编写服务？/index.html","7edb3865f3c798a64ed7b7097cce4a13"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","25426d03e32e92c0ea4c230180bff234"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","28bb1a3fa4f1834095d19834fc37d37f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","0c69ef50cd96a3ee375a7f1bcdd2d61e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b831ef09c868e0d617fa8c8360519111"],["/掌握VIPER架构/index.html","e843f0c8b014219aee212b706d6f282e"],["/揭秘 WordPress Hook 系统/index.html","d25918bdf82c2f214d3d6013936cbb9b"],["/比较工厂设计模式/index.html","c3ae75a80c25fd56c573dc0757b8e0ce"],["/深入了解Swift中的Grand Central Dispatch/index.html","cc77298ef8d08d537b5389b5f0cca0d2"],["/深入研究Swift框架/index.html","987099e2af3266ae49fa35bdb6bfba3a"],["/美豫直聘技术支持/index.html","8043133e4070125f78904d3e24948610"],["/美豫直聘用户协议与隐私政策/index.html","f0ae5fe359424d0d629614e27aca3dfd"],["/蜜柚技术支持/index.html","cd5624e2a03f841c5c8ad27bd229d7b0"],["/蜜柚用户协议与隐私政策/index.html","e9f61d748056fef083964214851c920b"],["/蜜柚隐私政策/index.html","a1a2a6a27e344d51f8cfa0239d2bb442"],["/适用于iOS开发人员的VIPER最佳实践/index.html","993afd79c4a2f14a92dcfb0715d3904b"],["/选择Swift而不是Objective-C的5个理由/index.html","10bbf6f5ac3b4533a9591ce981b6d0b3"]];
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
