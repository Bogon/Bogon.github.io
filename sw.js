/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结-一/index.html","a9f4efb465864348b6dbdb0f72954ac3"],["/2020年iOS面试题总结-三/index.html","66531abb2c9d5f2fa6cb2620ebcc4433"],["/2020年iOS面试题总结-二/index.html","eb8fc7dccd6463efaad87986628dc49b"],["/Advanced-Swift系列-一-Swift-简介/index.html","bf8a2085e90693da462fdf4def506683"],["/Advanced-Swift系列-七-Strings/index.html","d8276bcd8653898366f02fd86c0370e9"],["/Advanced-Swift系列-三-Optionals/index.html","4f3b8f4c7063d9f0d51b0761aaac23c2"],["/Advanced-Swift系列-九-Protocols/index.html","c4ca43451d1a165eee87fc00c90354b7"],["/Advanced-Swift系列-二-Build-in-Collections/index.html","42dceda7a713a20c9fe72078da4f0d47"],["/Advanced-Swift系列-五-Structs-and-Classes/index.html","1a122751e3551ba2d8fbb2626608cf8e"],["/Advanced-Swift系列-八-Generics/index.html","0f9656425be2acd16893b41e39389f84"],["/Advanced-Swift系列-六-Enums/index.html","6478eeae5665293be90e5abf84ba80de"],["/Advanced-Swift系列-十-Collection-Protocols/index.html","d1f2b69717f83011e3624f068c6a0ced"],["/Advanced-Swift系列-十一-Error-Handling/index.html","fe1c4e1ee657ba7e73fa8e06c77d99c3"],["/Advanced-Swift系列-十三-Interoperability/index.html","4e00ffd8aa53e8f1cf8137723a75e803"],["/Advanced-Swift系列-十二-Encoding-and-Decoding/index.html","dee0d60fcd7a908fe7cbfbcf6a05d4e7"],["/Advanced-Swift系列-四-Functions/index.html","23ae8fb1a6894a0fb2ebc92537c32046"],["/App-Architecture系列-一-简介/index.html","ad6ece8a00ed1a98fd67d1e2914af87b"],["/Functional-Swift-初探/index.html","411dc53c66a1172330aec9a20de6ea44"],["/Git-使用小技巧/index.html","762cdefe028733038a6f6fc60bad5321"],["/Go-Protobuf-初探/index.html","d810ceef87721774a70dd06007b0f535"],["/Go-mysql-Tips/index.html","feda7131c3f5e74a0cc26bb8665689fd"],["/Go-入门篇：1、Go-环境搭建与验证/index.html","b4d3d082914d191152ed4e148ccd722b"],["/Go-入门篇：2、Go-实效编程/index.html","f1f9f9ce061f7bb79585cd299976cf13"],["/Go-基本语法初探-一/index.html","59a66746bb45bb7bd40376aaea92d288"],["/Linux-VIM-命令及操作小结/index.html","0e684f3e0eb72c524bd16473af001924"],["/MySQL-列类型和数据完整性/index.html","e44891a04cb8db5ed511a8deb1399d6d"],["/MySQL-基本操作/index.html","dd88da01bd8f875892c2431c11d9407e"],["/MySQL-数据库设计和查询语句/index.html","68ee6f8e01788635982b9b5221415425"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","087d9af62f51ba40c6d3d10aff6aa402"],["/NSCODER和SWIFT初始化/index.html","9406fa1611ae877f1471bb3b140ba2d2"],["/RxSwift系列-一-第一部分：RxSwift入门-1、初识RxSwift/index.html","579ff53bf2f4c5cdf6929ee3ea3be230"],["/RxSwift系列-三-第一部分：RxSwift入门-3、Subjects/index.html","e00dccd04124e9943c29b6c355f979fa"],["/RxSwift系列-二-第一部分：RxSwift入门-2、Observables/index.html","acc4184acb5b50dfa30ec7fa9f69bf20"],["/RxSwift系列-四-第一部分：RxSwift入门-4、Observables-Subjects-练习/index.html","90140208c833a06e2dcb58ce187f47a0"],["/Sqlite-使用Tips/index.html","d0f925cbc424c087c5ba3ef18f716124"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","06f2cb8f916f2d40a846299cfaf64527"],["/Swift-5使用UIImagePickerController拾取图像/index.html","ddbfe43ba01adbc306ee180724a859c2"],["/Swift-Apprentice系列-一-第一部分：Swift基础知识-1、表达式变量和常量/index.html","f8e049df0d1fe24e65ebf47c920849cd"],["/Swift-Apprentice系列-七-第二部分：Collection-Types/index.html","7a5d400ed4fc10321d5432501df402fb"],["/Swift-Apprentice系列-三-第一部分：Swift基础知识-3、基本控制流/index.html","868eeecfab0696909e9c42d836a8e638"],["/Swift-Apprentice系列-九-第二部分：Collection-Types-8、使用闭包集合迭代/index.html","37f8e6b5d1e0a0e1b08890d6aaac924e"],["/Swift-Apprentice系列-二-第一部分：Swift基础知识-2、类型与操作/index.html","bdb78110a4cfb433f5e03db7d2893a3a"],["/Swift-Apprentice系列-二十-第四部分：高级主题/index.html","db22bbfa93de38afe72f6d648c2fe533"],["/Swift-Apprentice系列-二十一-第四部分：高级主题-18、访问控制和代码组织/index.html","7c56d4e4bb20fca6b106a173c30cfa2e"],["/Swift-Apprentice系列-二十七-第四部分：高级主题-24、值类型和值语义/index.html","a012a1deeb6b3ecb833089f8377fb8cd"],["/Swift-Apprentice系列-二十三-第四部分：高级主题-20、模式匹配/index.html","79c9e93f16bf0bbb64bf4c3265b95192"],["/Swift-Apprentice系列-二十九-第四部分：高级主题-26、高级协议和泛型/index.html","3e57fc50e7b4909c6b49a56b8b0764c9"],["/Swift-Apprentice系列-二十二-第四部分：高级主题-19、自定义运算符，下标和键路径/index.html","06c3e19729885d7b2cb401cc3c5a9b2d"],["/Swift-Apprentice系列-二十五-第四部分：高级主题-22、Encoding-和-Decoding-Types/index.html","f3c183a0b58c0c7bf748bf7fc39359ac"],["/Swift-Apprentice系列-二十八-第四部分：高级主题-25、面向协议编程-OOP/index.html","7254308482b330e94943828168474e8a"],["/Swift-Apprentice系列-二十六-第四部分：高级主题-23、内存管理/index.html","e5907a7b21c78b9dd7b619442f54c05e"],["/Swift-Apprentice系列-二十四-第四部分：高级主题-21、错误处理/index.html","51d4ff6c73a3a883b42eb4b972910d77"],["/Swift-Apprentice系列-五-第一部分：Swift基础知识-5、Functions/index.html","6c2a7934f78b92633294dcc86086cf91"],["/Swift-Apprentice系列-八-第二部分：Collection-Types-7、Arrays-Dictionaries-Sets/index.html","b9d0dc3574a1be197dc1f475c215a5f3"],["/Swift-Apprentice系列-六-第一部分：Swift基础知识-6、Optionals/index.html","cabe6cd18987bdd7dd396a98fead0b46"],["/Swift-Apprentice系列-十-第二部分：Collection-Types-9、Strings/index.html","3c5e9a0cfb87ef01f6d1030336e6dc5a"],["/Swift-Apprentice系列-十一-第三部分：构建自己的类型/index.html","1b30ec58cf46fd2f8bc5f81d1b8e163f"],["/Swift-Apprentice系列-十七-第三部分：构建自定义类型-15、Enumerations/index.html","1d2b7c950e4007647609ab96508efde6"],["/Swift-Apprentice系列-十三-第三部分：构建自定义类型-11、Properties/index.html","83f5dd6f901e5497c95e7c3b0628b9e7"],["/Swift-Apprentice系列-十九-第三部分：构建自定义类型-17、Generics/index.html","0c1e174a16bfefb83a7627a876028fc0"],["/Swift-Apprentice系列-十二-第三部分：构建自定义类型-10、Structures/index.html","cd7cba498dc44c7baee5607af30a7a2d"],["/Swift-Apprentice系列-十五-第三部分：构建自定义类型-13、Classes/index.html","97ecb2fddd3c29ae3e91b8f0b7426d64"],["/Swift-Apprentice系列-十八-第三部分：构建自定义类型-16、Protocols/index.html","8329b4e5a2703c5463d82ff7fdc1cdc5"],["/Swift-Apprentice系列-十六-第三部分：构建自定义类型-14、Advanced-Classes/index.html","9c72fbbdb68e94a73153fd3b9a610724"],["/Swift-Apprentice系列-十四-第三部分：构建自定义类型-12、Methods/index.html","85f9b54b29e15a75900decea6b494be5"],["/Swift-Apprentice系列-四-第一部分：Swift基础知识-4、高级控制流程/index.html","a19505ee662434714c221e1151fca07f"],["/Swift-Array-Set操作（交集，并集，差集，子集）/index.html","13ef41bc06a95c12f0f18bd56b5bd47c"],["/Swift-CompactMap-vs-flatMap：差异说明/index.html","607585ff92920ca5fe9562c80cbb3762"],["/Swift-Grand-Central-Dispatch-深入实践/index.html","df08a1501256e4851d950a11489538be"],["/Swift-Lazy属性初始化/index.html","0cf75f1182a12b4f1eab5ff954fc97a4"],["/Swift-Promises-初体验/index.html","a480d8ce64c72a7d70f50b16ca8ad0fd"],["/Swift-Promises-探究/index.html","cf4da5ab8f84c6a777fc32c3ce4d97b5"],["/Swift-UICollectionView使用指南/index.html","91fbbb7558000a62b61107ad1f01d9c2"],["/Swift-URLSession-Combine-framework/index.html","c89f9f3bb53420565a72ed303a222a6f"],["/Swift-tips/index.html","dfea276d82e9fd0b8f3ccb7e7a51da7d"],["/Swift-三方库：GRDB-使用指北/index.html","b5a5b620dd73822e1c8bafbad0fdc1cb"],["/Swift-唯一识别的视图/index.html","cda89169ba107523807925d5689f702a"],["/Swift-如何学习现代UIKit？/index.html","df1f5998c640aaf9ab4d750a7c9387c5"],["/Swift-用-compactMap-替换-flatMap/index.html","7261798a26b4d63a1bf90e72d92ff417"],["/Swift-选择和播放视频/index.html","fc926e77ee687c8b2bd5cf69c6acdf7c"],["/SwiftUI-系列-一-：1、-简介/index.html","462f4c3c8ef805d8a3dd75bbe409ed7b"],["/Swift中UIColor最佳实践/index.html","8f9db2add3e3d343574c4d113e97e08f"],["/Swift中快速简单的工厂设计模式/index.html","e99a8372c2c99bd358a7ee1a313b8b92"],["/Swift中构造函数与静态工厂方法的比较/index.html","d54bf1e7af78b2bbd3f83f1c032c7dcf"],["/Swift中的UITableView教程/index.html","3ed02517a0a1a7a772fa63f13dd7bebc"],["/Swift中的懒加载模式/index.html","e8e682e4fb631316101690ebec30f645"],["/Swift中的模块和挂钩/index.html","2da1e66cc5cefd51346a72770b0b8b77"],["/Swift使用布局锚点添加约束/index.html","45da88b0e8d567b0f796b29d1182ff71"],["/Swift依赖注入设计模式/index.html","59cce698d0d7a6863758ae3798c070dd"],["/Swift关于Dependency-Injection-DI/index.html","2448cf3fc175d94c1187d752b0ef651b"],["/Swift初始化模式/index.html","e8f12478ded4dc65e53ae861a782ffd1"],["/Swift单例模式/index.html","46f4abc93986d66e920bc933a831914c"],["/Swift原型设计模式/index.html","27ba6c8491757f70322db83a361bb00d"],["/Swift命令设计模式/index.html","2a2ed28ac00e247a8894a003f6235b05"],["/Swift外观设计模式/index.html","4281aafbabb7e16d417d64d4d1a2e9dc"],["/Swift委托设计模式/index.html","26648690ee681f22179f5ff01bc967ad"],["/Swift对象池设计模式/index.html","d754573fc2ea85630bf639e3366b9420"],["/Swift工厂方法设计模式/index.html","3e651b4210ab41bbe36cb3a16ca02f10"],["/Swift带闭包的懒惰初始化/index.html","ed17c62c4005eefae3856a192014af80"],["/Swift抽象工厂设计模式/index.html","f613d8120b856f91829e531af3378be4"],["/Swift掌握iOS自动布局锚点/index.html","ed996818e6c35a831aa320b6bb816409"],["/Swift支持旋转的自适应单元格/index.html","f5aec4d4e0e5da9374a83a4e55a20e4f"],["/Swift枚举值/index.html","b3c017c227716d5c554d7353846e54d3"],["/Swift生成器模式/index.html","67238e6a573c9f401e6b8ddd13fc100b"],["/Swift结合Xib文件自定义UIView/index.html","dc6b43fdc8da6c788226689aea331338"],["/Swift编写的20个iOS库-一/index.html","d9f8813867e3e7f1c238f61bed61c6db"],["/Swift迭代器设计模式/index.html","0263889fda097f5598e4c299cba5b2e8"],["/Swift适配器设计模式/index.html","fac85c3113891d9d5bd42f9b460358a9"],["/Swift静态工厂设计模式/index.html","0099041388de8137115be051b02350f2"],["/UICollectionView-Cells：圆形图像、支持旋转/index.html","d70711533fb71c3770b20e1cd2c3c080"],["/UICollectionView-data-source-and-delegates/index.html","69b2f6a40d52d767f142a7be1d7dd5bc"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","c30faa84ff1033cacc78451a71d3d04b"],["/UIKit初始化模式/index.html","92a97aa64c477cfa0d7978b2205177e8"],["/Ubuntu18-04替换国内源/index.html","ca9d1f8dffad982c128ef68aaca8bf6a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9e2f077d0e64a84208dba0af4f2a67e3"],["/Vapor系列-一-Vapor-初探/index.html","fa4768e65405184ebbc7775f21e827da"],["/Vapor系列-三-使用Leaf构建网站/index.html","f6032fcb75da818647e2049a638db8e1"],["/Vapor系列-二-Hello-Vapor！/index.html","3951301eb37d5e9debec89e72fd88af3"],["/Vapor系列-五-使用session进行authentication/index.html","4f946a56ac49a994834f3942b171cd08"],["/Vapor系列-六-徒手撸一个CMS/index.html","ac9edd62653cc592b350f81060b3bf58"],["/Vapor系列-四-创建博客数据库/index.html","53abfcbc6bd0bd97e2fc9d2fcfea16f7"],["/WKWebView与Native交互注意事项/index.html","a197645a4384fce623b886bdc5e3cead"],["/Xcode扩展/index.html","89dcc1e7d6123beaf783a0eb8b13e5f1"],["/about/index.html","143b0fc361214e0f1dbb794428ff1995"],["/appleOS的Networking示例/index.html","9f343cf8ecb1098150b39cfe8aac57a9"],["/archives/2020/03/index.html","f6e8cf39354757f6012f83496d32e876"],["/archives/2020/04/index.html","13a4ab54122dcd460120f6c37ee67082"],["/archives/2020/04/page/2/index.html","46a73747a6282016ecd96870e84ec4eb"],["/archives/2020/04/page/3/index.html","21a84e5defaab0ea5d54650bcb862a8f"],["/archives/2020/04/page/4/index.html","611bf33e71af6e8089b75e2211ff4d9e"],["/archives/2020/04/page/5/index.html","a08b647e0549d9a4b20dcf25b1bf7738"],["/archives/2020/04/page/6/index.html","d0eac03e57f6eb826d24efe06e124746"],["/archives/2020/04/page/7/index.html","6eb5e293f2205542789ed981d6e0daf1"],["/archives/2020/04/page/8/index.html","432690757ec9f5dc2c3e84256f44369b"],["/archives/2020/05/index.html","7d717dc5d170a61be79d02b6a22a3926"],["/archives/2020/05/page/2/index.html","3c89cdb44742fa26c94c0f561a0efbb7"],["/archives/2020/05/page/3/index.html","6599c8a95089b0a5a8a408c94aacbf21"],["/archives/2020/05/page/4/index.html","544f1668e9cb7f930378530e6e65d430"],["/archives/2020/05/page/5/index.html","d358c2eea69ccc8c9e3a90e1012883a7"],["/archives/2020/06/index.html","c7507c1baf85005b14133c93ff5901e6"],["/archives/2020/06/page/2/index.html","d5bc50033f9839b2533138a5a545ec5d"],["/archives/2020/08/index.html","800546ef621325ceb1f995239b3d3e51"],["/archives/2020/09/index.html","51123abfee732bb68b77f1116f880a67"],["/archives/2020/10/index.html","a1b70c6cd761f02fcb6da16f0a4a16f2"],["/archives/2020/11/index.html","b838d5feafa481489977711a305991eb"],["/archives/2020/12/index.html","c3a8e4832757b6d7f7b4b70a85bd29bc"],["/archives/2020/index.html","808de90cb04bbd5bcc44175629fa89c9"],["/archives/2020/page/10/index.html","ab86df6f6ebb0f73f91d48fed8a34521"],["/archives/2020/page/11/index.html","90f576498cc9a206b1c1bbcb4dacd481"],["/archives/2020/page/12/index.html","fe2aeea1ce84c7c54a365a97073b7dd3"],["/archives/2020/page/13/index.html","3a90ea04af0ed05bfe05e0df76137783"],["/archives/2020/page/14/index.html","4146b061d691113c207aec89bea375b8"],["/archives/2020/page/15/index.html","22761745308f5169e4eddb712f6e00f4"],["/archives/2020/page/2/index.html","8d77103555e6a2057524ff723981bea6"],["/archives/2020/page/3/index.html","92bce042783163baad86e284153f275e"],["/archives/2020/page/4/index.html","4342b63d892900352b9c4f7228843f47"],["/archives/2020/page/5/index.html","7daa8adaa86e444de5d7c8be2844a3e2"],["/archives/2020/page/6/index.html","33e82add4a74f2b36a4020a93a88b28e"],["/archives/2020/page/7/index.html","f376c9174199c1bc1fbeebc22fbd083c"],["/archives/2020/page/8/index.html","65dce9217f0f362f2a85e805eb9d660d"],["/archives/2020/page/9/index.html","7d4e1f88f75cd78288fa6ccb15d6ec27"],["/archives/2021/03/index.html","f14160e5ef213b67200c2f129bb3c186"],["/archives/2021/04/index.html","8140af72cd3218b45488111bfd389f8d"],["/archives/2021/05/index.html","252dcecb93546b18ec39111ae48c786d"],["/archives/2021/06/index.html","c132d1df4f26da1fc04dad4ce6ed35b3"],["/archives/2021/07/index.html","f707729166ac333e26a38f71354c435b"],["/archives/2021/08/index.html","1293e6b6f3b1b0d0a5781859d00955ed"],["/archives/2021/09/index.html","8488b2ec7e6467dd815fd102b0cd67f1"],["/archives/2021/11/index.html","0a7ffb995d11d9204d46ae9faa490a79"],["/archives/2021/12/index.html","328d19104557f9a060c0587b78d09108"],["/archives/2021/index.html","23bbc9011e87008e91576b5b8cebdf4a"],["/archives/2021/page/2/index.html","443ef8a3ae27180ccc876b86a6020493"],["/archives/index.html","f177b439059dba0c4e6369b411db9366"],["/archives/page/10/index.html","2343be1b531e5b40adc4fbf656aaff6c"],["/archives/page/11/index.html","7f1afea00be4ca860bca024b48834bc9"],["/archives/page/12/index.html","88c148e4eef1a114194d8907d11cf879"],["/archives/page/13/index.html","b974a9f919bf029678c1f1d1b6582bf6"],["/archives/page/14/index.html","f0bc1e8fb54411bdaebf19fc84645990"],["/archives/page/15/index.html","03b0da4e5da55d18c14fbeb29e77fe8a"],["/archives/page/16/index.html","b86cb5687d425f99af032d26e85bed58"],["/archives/page/17/index.html","eecb2e077e81fc70a7fc2e107786171b"],["/archives/page/2/index.html","ee5108ae026add7ac697e896d38c5004"],["/archives/page/3/index.html","4035143552f6504cec03ca84e1d5215f"],["/archives/page/4/index.html","c75480ec561e2718833fac3f9c5072aa"],["/archives/page/5/index.html","f777dc3d10d557a7de23a04027183890"],["/archives/page/6/index.html","506c402f1d7d239612de4880f696ca50"],["/archives/page/7/index.html","d83f7ab63bc65f7256b3ed6f54218f6d"],["/archives/page/8/index.html","d9828a1e2f390002c598a02fc1a62603"],["/archives/page/9/index.html","e8f261c09bfb06d56c735bccf6ba8c0d"],["/bugly-上传dYSM文件小记/index.html","9a578e83e98d2c717151c4ee1f74847d"],["/categories/Advanced-Swift/index.html","0175e76915cd10bb6d9eaf093cabb6ab"],["/categories/Advanced-Swift/page/2/index.html","d8b59311ca1906b541e10cd40fc41120"],["/categories/App-Architecture/index.html","b775e97301062afbc589534d6bfcb661"],["/categories/Array/index.html","3e12006b1b669056cad51b2fb346dcb8"],["/categories/Codable-protocol/index.html","103ba7bf5c6f2fa5ab8754dff44ab602"],["/categories/Combine-framework/index.html","a97813abfa1b2237bff2e11e02ef7ccd"],["/categories/Combine/index.html","9a36088b619fa256c5a7b71516ed9f8e"],["/categories/GO/index.html","0617bb4cc19bac25ec57e512637946f8"],["/categories/GRDB/index.html","eeb98bfa90391d656210e87ac4be141b"],["/categories/Go-入门篇/index.html","9bc56500adbb33d19f621c475fbadfa6"],["/categories/Grand-Central-Dispatch/index.html","a489126b26100cc419c55aa3e24eb70b"],["/categories/Hexo/index.html","85a434215457a02857dad9c7ef29a4aa"],["/categories/Homebrew/index.html","5c0f5244b702285bc13d13ddae8fb01e"],["/categories/Linux/index.html","170cefd9ece63db08cbf0091f00eac79"],["/categories/MySQL/index.html","78d6036ab0ed179447f458fe7b9c1255"],["/categories/Promises/index.html","2729f80112fa8d5580ab2efa767adc7e"],["/categories/Protobuf/index.html","19dd021e24410de8f10fccce9b3c045c"],["/categories/Result-Type/index.html","a0ecce08f5b128926360073a9e64c828"],["/categories/RxSwift/index.html","85112731a3b8665206228d7436c2a8fb"],["/categories/Server/index.html","ce06f0241d6b93e70451b59bf3ed8f83"],["/categories/Sqlite/index.html","bdad36ce54e673799dea284c34c2b825"],["/categories/Swift-Apprentice/index.html","d16628c6c59a19b93716df08a4b953a1"],["/categories/Swift-Apprentice/page/2/index.html","4527bf0a030dcb03752aac651b89de10"],["/categories/Swift-Apprentice/page/3/index.html","42949076355c254e49ec156dc6c1795e"],["/categories/Swift-源码阅读/index.html","e61f3d41f557a5491acf473604564097"],["/categories/Swift/index.html","5c46b17e49625332a4107b16232bbd1c"],["/categories/Swift/page/10/index.html","38078fa12474781f2ddb1f0d69dffd73"],["/categories/Swift/page/11/index.html","8fbf8644d4b3c094a00d9f8dcdeb19ca"],["/categories/Swift/page/12/index.html","e726f2739f8827e1183fb04525e68318"],["/categories/Swift/page/13/index.html","549130936bdb6a01fd49a92f8a0a5975"],["/categories/Swift/page/14/index.html","8555e360f124748574fafe81b8c82ba6"],["/categories/Swift/page/2/index.html","d73361f7a79e504c5d4c985cc5b9a4a4"],["/categories/Swift/page/3/index.html","0b387f8019deacc5d0e08a368320a389"],["/categories/Swift/page/4/index.html","e1af591fcf2beaeb64b864233add1850"],["/categories/Swift/page/5/index.html","af5e8c89f69cc9492e5fd695523ffb1a"],["/categories/Swift/page/6/index.html","35926da85c395d7ba3dbcaaa4d4db2f5"],["/categories/Swift/page/7/index.html","ff0f5141b5340fb8c7fe83ec5145ff21"],["/categories/Swift/page/8/index.html","90a0e8792e2d43f9cc5cb800424d797a"],["/categories/Swift/page/9/index.html","51dc1e6e252aefb89629d6853e0e4b23"],["/categories/Swift5-2/index.html","108f3564d4d7aa099a143f73db415889"],["/categories/SwiftLint/index.html","6f7c9721e70c61839b8ec3ddea04bfe1"],["/categories/SwiftUI/index.html","3279c2e71c6134387491d911b7f569a7"],["/categories/UICollectionView/index.html","b3d2fa145dfd00779c02efec33e36e62"],["/categories/UIImagePickerController/index.html","cf27c478784490988abf2b43a8c8081b"],["/categories/UIKit/index.html","7d3ffcffcbd5d1138ba473187b56fc6c"],["/categories/UIKit/page/2/index.html","35f0e6f82385e321e23a49d8f3ce208d"],["/categories/UIKit/page/3/index.html","b4503a13f7a94d0cad103d96232d1ef4"],["/categories/UIKit/page/4/index.html","7ef24532c9c2e488fc0e9a7619285c57"],["/categories/UIKit/page/5/index.html","b83adcdb1d375c13e4c5d79c411b8c4e"],["/categories/UITableView/index.html","9fe1a6861e4fe5138972f1ee4b0a6534"],["/categories/Ubuntu18-04/index.html","66b5c0fc19d7e3e8721ae35aae3e8733"],["/categories/Ubuntu软件源/index.html","41110f6669ac892ff3c49ce0104d0a40"],["/categories/Uniquely-identifying-views/index.html","06c49cf45e8843c8a34d70e6e81afa43"],["/categories/VIPER/index.html","c5feb186d2993402067f0f0cb84819c0"],["/categories/Vapor-4-0/index.html","4cab568d2f06d6ac39e85401b2e6d251"],["/categories/Vapor4-0/index.html","b5d92e8f121f4defcac8836adbf4f8c1"],["/categories/Vim/index.html","5c7d36318342c8392969454d43db46fa"],["/categories/WKWebView/index.html","7a19570bf65de26e0b6c62d35d3864a1"],["/categories/Xcode/index.html","e823869f0c194e19ce959aa95e888c93"],["/categories/appleOS-Networking/index.html","eb09f54cb0ec75637afe1783315565d6"],["/categories/bugly/index.html","2c676e9345e3d9d5a057ed8fe7bde990"],["/categories/enum/index.html","b7997c819e281ddf69a8b31348c55110"],["/categories/git/index.html","e408e0984b5ee9f4fd6385b9b30b9af8"],["/categories/iCloud/index.html","48b1ab7faea97b348893bf8bbc00f8d5"],["/categories/iOS/index.html","b26fcf0b3fc91b1814ccfbb27ddf78a1"],["/categories/iOS/page/10/index.html","a9f7288f4d4e2bd1c4f6550f9c98f252"],["/categories/iOS/page/11/index.html","96c89b18d5ec910ac7b06ea6836d0c58"],["/categories/iOS/page/12/index.html","1c8282928fcdfa412580e5e2c2f2e816"],["/categories/iOS/page/13/index.html","27006da7336db0f33979f63b79ca25b8"],["/categories/iOS/page/14/index.html","df88a2165d1674be63a9aa1a6886a9a3"],["/categories/iOS/page/2/index.html","d93a998c0c3938d97a2a922a871cfa74"],["/categories/iOS/page/3/index.html","ccfcecc5e0fc3f51f248698294f1cc68"],["/categories/iOS/page/4/index.html","a5c4f953a26e74d7bb6f585629777bb3"],["/categories/iOS/page/5/index.html","6a576d9c83f90e76ac2fd22f293612b6"],["/categories/iOS/page/6/index.html","7d2979759bc65e586135bfbfa39a36cb"],["/categories/iOS/page/7/index.html","dfa0bb582db641113e0aa3186e5461ac"],["/categories/iOS/page/8/index.html","029c7ecad69e27a88c08a10d1b1d8346"],["/categories/iOS/page/9/index.html","a63a6091d8e404b1e1c528ace42cb138"],["/categories/iOS面试题/index.html","4ebdf158b003a311ef3ee79d812aba48"],["/categories/index.html","70659baeb6314f60b96e104c3db273d8"],["/categories/random/index.html","15631c63a4c2cda08c6966b655cdcd5b"],["/categories/三方类库/index.html","62899c1297618e4b2fd14d9990f28d50"],["/categories/函数式编程/index.html","6593f95174d44f2b23011333ef13a96d"],["/categories/子类化样式/index.html","dffdce683d41e917c9b373b089d1d1b4"],["/categories/开发技巧/index.html","ac9c15afc3cfdf4a7bba3128c3e00603"],["/categories/开发记录/index.html","ff5bd1c6ff3b21e2428689fc6ae23b86"],["/categories/数据库/index.html","7e1198dd4ffb2097c7e169a4f5700ffd"],["/categories/架构设计/index.html","0cf798f79bdc4340976aff89bc681266"],["/categories/测试/index.html","a244398481e7f52812894303baeaf49c"],["/categories/用户体验/index.html","b63e710d3706840d7b3ee40c0670a9ca"],["/categories/用户协议与隐私政策/index.html","6c0f4b3580d2e97443a3543efdcd86c7"],["/categories/设计模式/index.html","6e947cad19069ac5dfcae4e9e822ea62"],["/categories/设计模式/page/2/index.html","6d7a186283b8ee180742db4f11f34fe6"],["/categories/设计模式/page/3/index.html","25407dae96532866dc450ca373f34f3c"],["/css/main.css","31c0c61647311c73122c4f7a2a5b0d0d"],["/hello-world/index.html","3cb2f144f0fbdba67ec9fadc8716c573"],["/hexo部署失败/index.html","335628f5d77af2d0135aa563de0ce9c0"],["/iOS-15-适配/index.html","dc07e48426f242e321f1bb07d0613d0e"],["/iOS-VIPER架构深入实践/index.html","b575d97fc8af49ab173ba228d530106b"],["/iOS-navigatinBar的isTranslucent属性对View布局的影响/index.html","d7ea74d61001e11e51cf634f5d75b50c"],["/iOS-自定义视图，输入表单和错误提示/index.html","463bbb213f3db10bf21f0068fe0b6f62"],["/iOS如何使用iCloud文档？/index.html","e3706d9d5be6bfe048445e231c3a03a8"],["/iOS子类化样式/index.html","b3ed7193657fb845f971d8a2be407079"],["/iOS开发记录-一/index.html","65325327064f42bf650fb95d8c979623"],["/iOS自动化布局编程/index.html","f7736a2bd035007e0fee73d74e24d8b2"],["/iOS自定义转场-By-Swift/index.html","c4da431627688698ffdb544b64eec0d2"],["/iOS项目架构：使用VIPER/index.html","f9ac4abb9c158c1c151804419fc0c0c3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","22936d94e446a29b29351b7d0bf642a3"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS-Big-Sur-11-1-Arm架构安装使用Homebrew/index.html","19090f50dd384661626c3dee6faf6b0a"],["/page/10/index.html","9813dcc3c58241b2ecc1358fc081b51c"],["/page/11/index.html","29c8ec93af883b30d0e535c9ee5d3453"],["/page/12/index.html","84a8bd733a60d9ccffd5816fb08ee1ce"],["/page/13/index.html","cbc022547f39e9d647509947b99306cb"],["/page/14/index.html","bc1c6bac07c5089f62123d7059a539bf"],["/page/15/index.html","36a78663b7590e893eb5cb2601daed83"],["/page/16/index.html","e26ffae6fbfa8d18825495f66aa88821"],["/page/17/index.html","535cafde7749bf9eadf9cb61018aacba"],["/page/2/index.html","880aee229bddbc06e0305e4fb83f6917"],["/page/3/index.html","8f2cce6a2ad31727e2289f6dd4a80bba"],["/page/4/index.html","7599a28931c3cc46085b6bedf45ff3b8"],["/page/5/index.html","8554b4b4a6376151392014258a3c4e73"],["/page/6/index.html","c771c01557e250d0083b6745eddfc9eb"],["/page/7/index.html","f5ca4c27f1b6f87eb5e53d3899178a88"],["/page/8/index.html","caa38cdbc8ae492181dbd9b052f08a68"],["/page/9/index.html","87fd6c3c7227462800c4928c86591ecf"],["/schedule/index.html","edd494e8f8a4c7df654dc1c4853eb6ba"],["/storyAppPrivacy/index.html","998721c9f335264e1cee24f470a91957"],["/sw-register.js","9afc064e741d7b7da5030ed1c1aa20c7"],["/tags/Advanced-Classes/index.html","dcfa1c8c42982088d5d406a78bbff988"],["/tags/Advanced-Swift/index.html","ccd3fe82f89483e68f586a661b99f961"],["/tags/Advanced-Swift/page/2/index.html","ac61470c7d88bbfbfc825f52ba53c5fa"],["/tags/App-Architecture/index.html","5813d1db9127f9b47beac2b86a1a6da0"],["/tags/Array/index.html","a0c704b13e728152c68caad8de1a319d"],["/tags/Arrays-Dictionaries-Sets/index.html","706fe78ba07ddfc202a6862ddcdbdb0c"],["/tags/Authentication/index.html","99917ef64e110b34ba479e795f5f5a7b"],["/tags/Build-in-Collections/index.html","7c7ff64060be3048fb1a877e71977d66"],["/tags/Building-Your-Own-Types/index.html","60d9ce09792a37b7384b503945a22bf3"],["/tags/CMS/index.html","04e4c3fb4c5822946eda9c318877a0d7"],["/tags/Classes/index.html","3a75333db34c8697b00d92d43be933dc"],["/tags/Codable-protocol/index.html","2185316025da1fc82476f3b9a32d2e96"],["/tags/Collection-Iteration-with-Closures/index.html","1815c1e60a6c0f956079c1e4c24f218f"],["/tags/Collection-Protocols/index.html","0e4355fe25d69a5044a5e876dfb0865b"],["/tags/Collection-Types/index.html","942c2836f37192c92a041ac0f2425f0d"],["/tags/Collection/index.html","60a353ade49e3968c480374b26930fd0"],["/tags/Collections/index.html","173a709c89f496b9861c93310ed8d5ff"],["/tags/Combine-framework/index.html","8b427e6a36688e5cac7d8f960a820a94"],["/tags/Combine/index.html","3c72b3b9da7977aafbdf040a8ae793f0"],["/tags/Dependency-Injection/index.html","25de13f9c512ba7c9e66a92e1c7f8019"],["/tags/Encoding-Decoding-Types/index.html","709a0215ebbc8ce9500b52b8a532da9a"],["/tags/Encoding-and-Decoding/index.html","caa21e0a0730b1d37dd81ea2e2c6907b"],["/tags/Enumerations/index.html","314287981aba1883ad4b44dd7618c782"],["/tags/Enums/index.html","8a0f208f7ba9711682664a9b38e7d43f"],["/tags/Error-Handling/index.html","6f591542e645dda7f7f300e0691bc569"],["/tags/Functions/index.html","35753ec3bd5d87ba68221d22d59c428a"],["/tags/GO/index.html","17442be7885699c077f5c7b5fe93ebc0"],["/tags/GRDB/index.html","a143392f1e89e2aac8e71745c080a28e"],["/tags/Generics/index.html","194fc9b538fb6418b58d5bd044a79898"],["/tags/Grand-Central-Dispatch/index.html","48862b174b61930733aa631cd625e9c3"],["/tags/Hello-Vapor/index.html","5a4e0dd99d8a1fde273b839292140ec0"],["/tags/Homebrew/index.html","680478d1102b16c455e1e9103acb686e"],["/tags/Interoperability/index.html","a392c191ffd2e0c692f39bca7aaaa21c"],["/tags/Introduction/index.html","18383fc79ba4a842d6abdf8cac6d4709"],["/tags/Leaf/index.html","d229cb7eb1e0cd3ac4b2a4479c967e74"],["/tags/Linux/index.html","4bc1f818e297a9efa2668758ebdf799e"],["/tags/Methods/index.html","a86685b107aab8ed238b996288891ce7"],["/tags/Modules-And-Hooks/index.html","a01d5d8d13bcab42fa55cf11d1c0684c"],["/tags/MySQL/index.html","b9a184c5198c6e0de890f844e002e42d"],["/tags/Optionals/index.html","d993d43607dd54d9ad75e313c6f4a461"],["/tags/Promises/index.html","9c258f98c421eea05a8bd4a9de705247"],["/tags/Properties/index.html","64bd4cf91dd6bd6e187d5e5aac9cc34c"],["/tags/Protobuf/index.html","002c05a3b110d5c8bf5a65505ea66fea"],["/tags/Protocols/index.html","5d02526d25a72810c31361d231ba7e08"],["/tags/Result-Type/index.html","1779863bd4cc2e1fd8baa0978e25a125"],["/tags/RxSwift/index.html","16f2d151f227aa04a4cf4da71f54ac9d"],["/tags/Server/index.html","30c0a3690afdccdce16a0ce39139abf2"],["/tags/Session/index.html","1dbaf17fbb033fc945ca3afc1c6e059f"],["/tags/Sqlite/index.html","64befcf49aa5ad4467042a529d2faca6"],["/tags/Strings/index.html","d5f9d8b93e34602d3d6005a8698d2775"],["/tags/Structs-and-Classes/index.html","521bdf111a20009bd487fda223002c3d"],["/tags/Structures/index.html","7356f7b1e950834a8c72331271dfc3e8"],["/tags/Swift-5-0/index.html","9ba2f2c3c043a896767aea472624d259"],["/tags/Swift-5-0/page/2/index.html","b3f15502000f10878be0997dce3714c3"],["/tags/Swift-5-0/page/3/index.html","88a8d141af801636606c09f1bdc63c48"],["/tags/Swift-5-0/page/4/index.html","28c7043195a37977e5cfbf25f8005f1f"],["/tags/Swift-5-0/page/5/index.html","59b6f0d6c5bee53e8615336d259161e7"],["/tags/Swift-Apprentice/index.html","a7431cbf3382108040f2529d9dbf3260"],["/tags/Swift-Apprentice/page/2/index.html","04af1d62fe16d1550d71a77f3931bd6f"],["/tags/Swift-Apprentice/page/3/index.html","f41e184a666cae9c93554c8ae026b4c3"],["/tags/Swift-Package-Manager/index.html","e4053b46a41357257393d3352af12ca1"],["/tags/Swift-源码阅读/index.html","fcf4f51ec8e553e989cf1e96a9168847"],["/tags/Swift/index.html","0cd4e6d3dace36ff9123fdd900752a97"],["/tags/Swift/page/10/index.html","8ca9d1432afabcbf2849b94bffa9c466"],["/tags/Swift/page/11/index.html","4827ee58d017f3242a4896664be26ccb"],["/tags/Swift/page/12/index.html","0a02952965ce5eafd044a77e387c4a62"],["/tags/Swift/page/13/index.html","1e6bb11c812093f789a50d3479ea4c42"],["/tags/Swift/page/14/index.html","e794b48d3524afc34fe7e6cfa92ca8f0"],["/tags/Swift/page/2/index.html","8d105d66f7ea0bfea9872bf7176f2c13"],["/tags/Swift/page/3/index.html","2cc669ab70277c0068f207a6579f81ea"],["/tags/Swift/page/4/index.html","c88d7cc0b86107ed883113778f268454"],["/tags/Swift/page/5/index.html","83a5ff1baeababaf86dcde631de35274"],["/tags/Swift/page/6/index.html","f7a34bbfc374d398744f17aeaf1e72aa"],["/tags/Swift/page/7/index.html","a80baca6d4289e8e796cc7f160a5c2bc"],["/tags/Swift/page/8/index.html","bb8152f5e7666f2531d953d6e096846d"],["/tags/Swift/page/9/index.html","f98e474df68a4df4b6a3e36b694c1d98"],["/tags/SwiftLint/index.html","657f81fb6c845a6c33ae501aeddb811f"],["/tags/SwiftUI/index.html","07500590176f700de4494d671acf1fc4"],["/tags/UICollectionView/index.html","3c8b5a3d822c382684d1d9cb65b01da6"],["/tags/UIColor/index.html","695e7e1391d8e7e28a0519f1747bee36"],["/tags/UIImagePickerController/index.html","d1f887f638f36fbed4aee445945408d7"],["/tags/UIKit/index.html","305e8fa19d6446125d64b79c845264a5"],["/tags/UIKit/page/2/index.html","cb86a2180889feb9f1a8e7dd89b0ace1"],["/tags/UIKit/page/3/index.html","82357e569e3d724f5a7812765cc8dcf0"],["/tags/UIKit/page/4/index.html","bc0f3aa48e7816df4a2b7f2f4ac74997"],["/tags/UIKit/page/5/index.html","4d436341cf9e8b434403728f872543a9"],["/tags/UITableView/index.html","baf78afb3c482781be6b5aaac9e7c9bb"],["/tags/Ubuntu/index.html","6cf373b469ef9638aa47bdef01e8050f"],["/tags/Uniquely-identifying-views/index.html","5038960563f926a854017ef888dcb232"],["/tags/VIPER/index.html","0c049839901f33bcd33e5de97de52594"],["/tags/VMware/index.html","b73ad1cedae597d330f0e5c0aa40204e"],["/tags/Vapor-4-0/index.html","b64129c26ff85e71fa70ff13d9c1c1b0"],["/tags/Vapor-初探/index.html","577777cf7de35c3b955cf00ec7b51922"],["/tags/Vim/index.html","6716c1226eb7f357fe72f8888fc72f0a"],["/tags/WKWebView/index.html","e94dad57952cf0ef29187c519f2c99f7"],["/tags/Xcode/index.html","ffda3e62938fd472af5298e39ec15e29"],["/tags/appleOS-Networking/index.html","b8fdbe22331d4a83c5ae96d85a2c6b4f"],["/tags/bugly/index.html","937b4d9ef1a92c4c09757f87f4c17969"],["/tags/enum/index.html","de5e05ff6bf858822ebfc80fbe3dada7"],["/tags/git/index.html","78481659d7f7cb33b752dfaeea1df452"],["/tags/hexo/index.html","95a0fa40daf04fa8a79d43bdd64f6592"],["/tags/iCloud/index.html","5cffa57f3f5cd607af30366db7980a9d"],["/tags/iOS/index.html","169a25248ff8d53715bbb5cf2057043c"],["/tags/iOS/page/10/index.html","48d6293f75ca787295ec7a75f1545253"],["/tags/iOS/page/11/index.html","498a1a86ee9824db13ff4f9285260377"],["/tags/iOS/page/12/index.html","dbf9b871585424adf1d3dcb14de1d9f5"],["/tags/iOS/page/13/index.html","d61be3f24e3fc9c87dba502d62bae5c0"],["/tags/iOS/page/14/index.html","7eb3557a38b572e1344d07b541d36f74"],["/tags/iOS/page/2/index.html","bf93f882fb0def0c2db19f6af1289ea1"],["/tags/iOS/page/3/index.html","945adefbaa9e2178952e32700df17489"],["/tags/iOS/page/4/index.html","151130a7b422408390525931e48eb39b"],["/tags/iOS/page/5/index.html","9a3a321c5eb66d07ff0e1cecbcd89214"],["/tags/iOS/page/6/index.html","12c7e646e50b84e561dd355f7fd96e5f"],["/tags/iOS/page/7/index.html","cff0ed61c1068ed36cb3522377b5318d"],["/tags/iOS/page/8/index.html","334071e9a145c1ffec6944bcc9138ef7"],["/tags/iOS/page/9/index.html","b65a89e2f0883459fc2e984cdefeb1aa"],["/tags/iOS面试题/index.html","6bfc04f1cd24e06f7016e67b6f694d8d"],["/tags/index.html","1ab7eb1bb19af6e3f686ab61f3253c47"],["/tags/non-optional/index.html","e77d35ecf5d80cdf6501bedebc880863"],["/tags/random/index.html","e1c37f2ad96d8162b2fd862aaf01c7d1"],["/tags/transition/index.html","311542248f63648f1ae677d664f8d107"],["/tags/三方类库/index.html","09f8bb6f591bc31494304bcf3442309b"],["/tags/依赖注入设计模式/index.html","3ecf91e90c4e292a091752ecec52f974"],["/tags/值类型和值语义/index.html","337eaa38283d1097a1d634edef5da82e"],["/tags/内存管理/index.html","94567853e365493fd2a8e481f63c278a"],["/tags/冒烟测试与回归测试/index.html","fe66466726678a1fcde9f8afb2b1a4e9"],["/tags/函数式编程/index.html","cb4e66aab474240a97a8c2a60b8d335f"],["/tags/创建博客数据库/index.html","4db89511939e876c2f2061d25af92bcb"],["/tags/初始化模式/index.html","5b53464c5be4a9622f7bd822141c71c5"],["/tags/单例模式/index.html","8196a54558b90423ce53133603c04a16"],["/tags/原型设计模式/index.html","f6bec367d17c5b5d864062c38a2ec11c"],["/tags/命令设计模式/index.html","d238e054112890d34e99c183763b56d4"],["/tags/基本控制流/index.html","c0033727727bfc45162b276e3294db48"],["/tags/基础语法/index.html","017ec002ecf618909cd13779be435806"],["/tags/外观设计模式/index.html","7d92136bc32ff3be985e8adb9dbe51b3"],["/tags/委托设计模式/index.html","d3a0247e842a153f3c19b572bd220238"],["/tags/子类化样式/index.html","04ba09e07c61a0c888d577e9fbf1cba2"],["/tags/对象池设计模式/index.html","b70d54c9245a827438285ff262c1bd2e"],["/tags/工厂方法设计模式/index.html","c1896d55e7ee0933ea8f570764724761"],["/tags/工厂模式/index.html","14b538a7c312745dab7485c9a52a1450"],["/tags/工厂设计模式/index.html","f2dc15d649fd6df12d90f05498999c6d"],["/tags/开发技巧/index.html","8577bd02bf8996f839e37354d8e0bbbd"],["/tags/开发记录/index.html","6187322de7eeab3bdccdc4c43df0b275"],["/tags/懒加载模式/index.html","8046814a8521aa71c7ccc3a5b72d0d0f"],["/tags/抽象工厂设计模式/index.html","ddf90ffe7c606a0644f3d3d283d0eb4c"],["/tags/数据库/index.html","66312137611f859c0f895f5731689add"],["/tags/构造函数/index.html","b3487cdf588018a791db93e3b80504af"],["/tags/架构设计/index.html","73a5fbd4f3e4175ec998ea7360259f26"],["/tags/模式匹配/index.html","fbb50dd1b9ff40e3b0f74e5dd8586978"],["/tags/环境搭建与验证/index.html","e99051882d6b3a4a3479831ca8699818"],["/tags/生成器模式/index.html","0c6eb83f39eaa900b12ddbeadc9f7465"],["/tags/用户体验/index.html","f8f8573a5c48085b114cecce0439d853"],["/tags/用户协议与隐私政策/index.html","7ec4a0cad08cefea140ccd99a7ae8ef2"],["/tags/类型与操作/index.html","0720deca1a19ad00d862170edc5cf885"],["/tags/自动化布局/index.html","a068abc4fe0a20975d4dc17920b41981"],["/tags/自定义UIView/index.html","d86f288dab50f1e60be077cc27a13ece"],["/tags/自定义转场/index.html","f5416bd9bba2e3af463c270d47374f71"],["/tags/自适应布局/index.html","a3d8cd7d7c79357dd11c996922899959"],["/tags/表达式、变量和常量/index.html","19cf81ba3813060c5a9b09bbf7553b63"],["/tags/设计模式/index.html","1f54fe912baf9b6a9a737d2691f43141"],["/tags/设计模式/page/2/index.html","809fa42a6ab780871a7e9462a6a2d16b"],["/tags/设计模式/page/3/index.html","4145e3b956f893a05f4e237cb1fa3c08"],["/tags/访问控制和代码组织/index.html","ad94069ad19c513211b5a6fb2d72737e"],["/tags/运算符，下标和键路径/index.html","50314f7b1c23d71d7d55542512f3bb77"],["/tags/迭代器设计模式/index.html","f0deafff6393a0f280d7d17c0a1bc093"],["/tags/适配器设计模式/index.html","a264e900b66278465157dd091db8af0f"],["/tags/错误处理/index.html","8c088b18ea8aad2e87dcb916b0e63c66"],["/tags/静态工厂方法/index.html","30ce39115a3247e42b811fcc60e71a3a"],["/tags/面向协议编程-OOP/index.html","b9941576bace2f67f84b6efd18f98d29"],["/tags/高级主题/index.html","b1cac3381a401069ec90fd6069c21b93"],["/tags/高级协议和泛型/index.html","91cae78264fe1d05de20808200669dfd"],["/tags/高级控制流/index.html","07780d2493e4ca519e93b1c8ae206ba3"],["/xcode-常用的快捷键/index.html","3bc2ee5ee9c033939d2f94bb557ad159"],["/为iOS应用构建输入表单/index.html","feb5ff7b10f51a42489702c841144321"],["/产品开发的幕后花絮/index.html","2e52ecd18c99beaf8cfd2eb1001f6fa8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","1f3a57f3f0eec8de6eaf5e6beec9ab74"],["/冒烟测试与回归测试/index.html","14bad2ccc57974f107b105504bf8665e"],["/后端实践一-开发环境搭建VMware下安装Ubuntu18-04/index.html","9176bcce7307be70e39361c456ad6f20"],["/后端实践三-Ubuntu18-04安装Vapor4-0/index.html","0bb6df2c53ad9312e9e303834696560d"],["/后端实践二-Ubuntu18-04安装最新版Swift5-2/index.html","6ed0c409cc0bb21996d613176d13158b"],["/在2020年学习iOS-Swift的最佳实践是什么？/index.html","3d03245c9661f9ee5b1010dee55f3ffd"],["/在Swift中创建自定义集合/index.html","133a381adfc48551f707e838d26a74a1"],["/在Swift中处理非可选选项/index.html","a307db7137b79caeb549220f3f799d9e"],["/在Swift中生成随机数/index.html","6551158e5a74ac61b9fa732ec9a1de2a"],["/在Swift中重构单例模式用法/index.html","40f41b37eb40b584994bf0867c25059c"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","2568edcdf5a2f9dcff40d8ad4d4b89e0"],["/如何为VIPER编写服务？/index.html","4d4706d0dace3cf4e3529f5e337975e7"],["/如何使用-Combine-Publishers和Subscribers通过URLSession下载文件？/index.html","f7bf21f33f0d1738dd2acfeac1a8ec24"],["/如何使用-Result-Type来处理Swift-5中的Errors？/index.html","0b727f5811df9cfb12fea40de6773451"],["/如何使用Codable-protocol在Swift中解析JSON？/index.html","9b65da38a24439e00e4ed6c46510d4f2"],["/如何使用VIPER构建SwiftUI-Apps？/index.html","8ba9f976bf4c232f9cd9774a1cff1f7c"],["/掌握VIPER架构/index.html","9f0e3aee35ea2b33f597c284427dddd1"],["/揭秘-WordPress-Hook-系统/index.html","264fe237b3fad38b2912b54051bc4aad"],["/比较工厂设计模式/index.html","575a90b8422f5032ebb4ab3279c82e56"],["/深入了解Swift中的Grand-Central-Dispatch/index.html","165a20ec27266aa5cbfb588e4e97f43c"],["/深入研究Swift框架/index.html","de3d97e6831c1f3e6a2a701486f4acf5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","dba424aae818d4d9bdfa1131c9a134d3"],["/选择Swift而不是Objective-C的5个理由/index.html","e2c63895de3ce36c8a2fa5df726eb5f2"]];
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
