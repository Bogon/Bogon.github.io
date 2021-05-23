/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","7eb74d8e14f737c6cbaefdb871037a6e"],["/2020年iOS面试题总结(三)/index.html","e46aec7905f746bced3acd50b63a79ae"],["/2020年iOS面试题总结(二)/index.html","6515ea2bfbce1cf26724011ed7cc2b4a"],["/Advanced Swift系列(一): Swift 简介/index.html","68c5502028fa087a5e299a53f3300d95"],["/Advanced Swift系列(七): Strings/index.html","af415bff1cfc5bc3fd563523cc0721b4"],["/Advanced Swift系列(三):  Optionals/index.html","7641fe469230863bfe2d603af47664d8"],["/Advanced Swift系列(九): Protocols/index.html","7815005d586b01b464fd4a929bab98f0"],["/Advanced Swift系列(二): Build-in Collections/index.html","d18eb6cdd97ffd1bb0157dc79ed2d746"],["/Advanced Swift系列(五): Structs and Classes/index.html","5318aac99e8d449f7f139c64a0c2ded6"],["/Advanced Swift系列(八): Generics/index.html","da00f949c75ee16002405de9096a071d"],["/Advanced Swift系列(六):  Enums/index.html","22ffdc840ce70ecd6b6db062b7e7feaf"],["/Advanced Swift系列(十): Collection Protocols/index.html","900b83b540cb8ed66132403191608d3c"],["/Advanced Swift系列(十一): Error Handling/index.html","1102532848f642696eb5acd2b84f4ab7"],["/Advanced Swift系列(十三): Interoperability/index.html","3029f926141592eaa19ea77d694d03a3"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","cb6ea81e8425f4b8cc881f13f7eb5f69"],["/Advanced Swift系列(四):  Functions/index.html","0c0802b1c8559058864574bc1948e70f"],["/App Architecture系列(一):  简介/index.html","f5b505e53ca6ff38ea175956ed4758af"],["/Functional Swift 初探/index.html","d17ef40da443624037e8446247aa3e0e"],["/Git 使用小技巧/index.html","7483a95c85e56cdbc0268beb097b96a9"],["/Go 基本语法初探(一)/index.html","9e605aceef389bf428b7794ce1141436"],["/Linux VIM 命令及操作小结/index.html","ec453e1ac6e5363f6f2ddfdb8fcd4028"],["/NSCODER和SWIFT初始化/index.html","05b25798859ce7e46a392341e755dd71"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","fcc483be50027c5251266122126f897a"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","5569ac2f6e3a5bf3b97cca6f260e0fe1"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","05e2c594966281b2972e8423d4271792"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","a5270d452349b460fd9d27fcbaa7c38c"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b3082baa278711b7982185203bdf7ba5"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3547f47e3a38a217c522232703988f9b"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","6be3e8e3c2e34da621998ed42277dc80"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","11179b08c51336ace87ba40b7fb4bb84"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","4e3bd8f18bf943430636652a31452900"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5e593bdac5e280ed29ed1dd3c27abc9f"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","6df7eb31160e9157fc673055653fc928"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","44a640d22047f24892d095a9300b2978"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","9d295cd350bc925d549498acf33fbcab"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","6c1ecb73cb479101c2263b60d77fdd10"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","b24b52cdc1506a74f1bc49af3e5e3ec1"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","c4ffca443854dbabfdac5ce71159ec11"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","10d1d8e2196011df2ea2929fe4414281"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","1a858376161ff43100744d9dc711a05d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","0d1902dbbde60482a5029538aee440b5"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","baea02fe72fe6a2c759fb6c1a2dd5e00"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","8cc766a2adcc954784a62dd4087bf7e6"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","1ef849f6b05942dcec36b6c9098fae26"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d53e96f1399a35b41191f8196ac7a7bb"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","60ed96398e6978357ffd91bef136e650"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","a6eb889f3346c856c2df99756c1cf8f7"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","45639bf9440e7d6628b5bddb4c8405c7"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","90168f4a96259e9f355fd1227d21227a"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9cf26764fd4a5df143e1e904d3e65320"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","dd43e5f82873313d9ae0bd63f98fae5f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","59da6ad4457f4f0c9823c5750042fd32"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","a77942600997d86ccfe3434fb46bc638"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","63f4afb3b842f8fd0702cf0366268e4c"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","eb3c2ac4d0ca15e82d955b4ab2945996"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","18224faec11f6ea436be43e5bf10820b"],["/Swift CompactMap vs flatMap：差异说明/index.html","6884ef344a05736abcfdebf4161e58e9"],["/Swift Grand Central Dispatch 深入实践/index.html","8bbc83610de584e969f80d8e6214b435"],["/Swift Lazy属性初始化/index.html","c12630863bee11bf346e8da730de5001"],["/Swift Promises 初体验/index.html","b1b1ec79c6712a2957cb890aedfe3dad"],["/Swift Promises 探究/index.html","d24f4975995883587af60a35b5f9c783"],["/Swift UICollectionView使用指南/index.html","abe7bcb0414daa385b7f7e728f2cc131"],["/Swift URLSession && Combine framework/index.html","b8ec21f2cd8aa3d9dc469069af7432fb"],["/Swift tips/index.html","9cfe4df984248aafc4874c3bf42572eb"],["/Swift 唯一识别的视图/index.html","e0faa67f0fe2059b4f07e7d063dd4a94"],["/Swift 如何学习现代UIKit？/index.html","b306767caf862d13225f14cad80f7c6a"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","02129ff9ab83be98d52d901d83ff5227"],["/Swift 用 compactMap 替换 flatMap/index.html","960b3054e08d3502f83d711489c8117d"],["/Swift 选择和播放视频/index.html","4e8ddc99b142e8961b7c27dfb3c56d59"],["/Swift中UIColor最佳实践/index.html","d0eae89789e8ed1bc9dcb64d76282895"],["/Swift中快速简单的工厂设计模式/index.html","776253b30923e4ae8ffb2b6b49bf0ba1"],["/Swift中构造函数与静态工厂方法的比较/index.html","95a83d02a6e0ffc39990293f9bc944f6"],["/Swift中的UITableView教程/index.html","b9186776066c7602114f70220c6df422"],["/Swift中的懒加载模式/index.html","d4a486448e567de4566dbafef696a91a"],["/Swift中的模块和挂钩/index.html","1baae5b3c595913b5f8182201e4fd016"],["/Swift使用布局锚点添加约束/index.html","79d46e7b685f6d21fe8be43e4f6860f7"],["/Swift依赖注入设计模式/index.html","3a80afa643dee09b883ae23a855086a0"],["/Swift关于Dependency Injection (DI)/index.html","a6752eeefe5ae426e74d52041f926d73"],["/Swift初始化模式/index.html","573f7ea534f512f003ed1bdc1a02b2d3"],["/Swift单例模式/index.html","bc4a88f89009b4dc71579dd897554d7a"],["/Swift原型设计模式/index.html","5d38556d7743103d48b8ad661dc74b08"],["/Swift命令设计模式/index.html","5a669c33ea20130d81c0b18ffd1fc82d"],["/Swift外观设计模式/index.html","24cc0732b01f2f307ace0c02c43e31cc"],["/Swift委托设计模式/index.html","a3dcfaef43e537f28de8b63678490fd7"],["/Swift对象池设计模式/index.html","2889a585c72ca75c7c15311dc4a9db73"],["/Swift工厂方法设计模式/index.html","a5fc6167f48b1bb91ee2348cba78c6bb"],["/Swift带闭包的懒惰初始化/index.html","4f6037bac1dbf2e337806ff394531cf0"],["/Swift抽象工厂设计模式/index.html","1766f189f1ff2b40b1933307da5d6a07"],["/Swift掌握iOS自动布局锚点/index.html","58cc3aa7e079777566e603b7d8c74d78"],["/Swift支持旋转的自适应单元格/index.html","163df5ea9bf102450ee83314ff42933c"],["/Swift枚举值/index.html","d89d176d4eca79c93fe2c4d542170012"],["/Swift生成器模式/index.html","ca028f5d69d7b6c57fe1718fe7ad1929"],["/Swift结合Xib文件自定义UIView/index.html","2c12b1411f6707cdbe6b4234a95670cd"],["/Swift编写的20个iOS库(一)/index.html","497371bb779987df8b33a1af7372b708"],["/Swift迭代器设计模式/index.html","caf2faba87a944972afba939fec61081"],["/Swift适配器设计模式/index.html","270d4287dc20cb5c86fb815b0b2713ac"],["/Swift静态工厂设计模式/index.html","8be407d5e8883ed2bffa3bab4c55b1ad"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","d77abd90075eafcf96634eb282a5284a"],["/UICollectionView data source and delegates/index.html","f8c025f3c96d56e999b052f05e83efe1"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","81d7a293121729c16409f973e1f72794"],["/UIKit初始化模式/index.html","67a7f47733bb544438acd363be667e7c"],["/Ubuntu18.04替换国内源/index.html","6877fe2bf91fa416ce6dca379c6c81e9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7e22c884857c5bdf00c3c091bce2e5f6"],["/Vapor系列 (一) :  Vapor 初探/index.html","8080532f4951e3089e6c78bb3b259afb"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","60b68673216a48c3a48ad765f30f4f8e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","518b9a8951a657c39c03491f6742398d"],["/Vapor系列 (五) :  使用session进行authentication/index.html","4acec20e5362c10d0ab5fc9fbf7a1a0e"],["/Vapor系列 (四) :  创建博客数据库/index.html","4ac56523e44ca823eede66b8c21b62d9"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8552d0d35a8f5be78562ca8a63088511"],["/WKWebView与Native交互注意事项/index.html","c1e9e284e3eaa280a0340479eb3886dc"],["/Xcode扩展/index.html","900c0598c4f6d3f20658ff3d10290b1d"],["/about/index.html","4ed10d4f85e5b726a3bc5cdfe8c4b568"],["/appleOS的Networking示例/index.html","5351a3844bfea4d8dbfaf548819c0373"],["/archives/2020/03/index.html","e28926fd97ff2125e5311fc65856a8ee"],["/archives/2020/04/index.html","4ab76977f1dc4ae61d5b79fe9168fb65"],["/archives/2020/04/page/2/index.html","3d544518cc98201fb6c8b5ac8572c235"],["/archives/2020/04/page/3/index.html","d7a10796c384de7595b04bed77d166fd"],["/archives/2020/04/page/4/index.html","0e7832a0f01f6158b6db8ac4590f5dd6"],["/archives/2020/04/page/5/index.html","bcab1c1f287054f697c0e25b155766b2"],["/archives/2020/04/page/6/index.html","94ca2010ac4036cd6b83038007e81c7d"],["/archives/2020/04/page/7/index.html","64dae50034912e60ea6450796557d337"],["/archives/2020/04/page/8/index.html","b92e15a46696d76e6bdacfc1d5843f1d"],["/archives/2020/05/index.html","3a236f2249a0650e20749be19b2ccd82"],["/archives/2020/05/page/2/index.html","b9e09de16b48f5df1e186567e642cd50"],["/archives/2020/05/page/3/index.html","5609bd4db621aa6a806f19ba6d184841"],["/archives/2020/05/page/4/index.html","d4a400d3cb3efd4810cae5d80f224753"],["/archives/2020/05/page/5/index.html","6cd9a45f010e079b3daa42985ac9cfb7"],["/archives/2020/06/index.html","7f21ea6e49ab9db46bdd0f8395cd2144"],["/archives/2020/06/page/2/index.html","959879825927239979a52d5b20438ae2"],["/archives/2020/08/index.html","ea70550166a89f2dc5cdbc72445db418"],["/archives/2020/09/index.html","9726236fae1e88e17d9034d351d70441"],["/archives/2020/10/index.html","a3798a7bf5f4142c9e571beac6fda04a"],["/archives/2020/11/index.html","a3f8ed76b8b0af05b1bb5d142ac0e65d"],["/archives/2020/12/index.html","05a34e55d5d90f67e1d2158b6e490463"],["/archives/2020/index.html","44dc53c6441af1ef45b7d0c147c6509b"],["/archives/2020/page/10/index.html","9215d5f4c5608d9d388bdf12585c16d0"],["/archives/2020/page/11/index.html","9f380847d7b60bcab22b74fce4b1c49a"],["/archives/2020/page/12/index.html","4fadb765e2273c4284a9d4c60bc8ce2e"],["/archives/2020/page/13/index.html","4bd344f21f483c3a8123ada7afe449a5"],["/archives/2020/page/14/index.html","8464d6c59008ed8ff50057d55bcb852d"],["/archives/2020/page/15/index.html","9201e977d146f24b037ab4ea1bfd096c"],["/archives/2020/page/2/index.html","098b3947607bd5562dc7590ce6a4031a"],["/archives/2020/page/3/index.html","5b5065225cda43f0f080add3ff0f6c81"],["/archives/2020/page/4/index.html","7210a752d441723b2a727f65cf65ba0f"],["/archives/2020/page/5/index.html","4d830b489c0b521d73ae90ae6af5dc96"],["/archives/2020/page/6/index.html","024850e665e2adccf82f4c006d15de7e"],["/archives/2020/page/7/index.html","318ac9962b3393268c29654397dfd2c9"],["/archives/2020/page/8/index.html","4c283aaa7a8b5b96429903211b38f6ff"],["/archives/2020/page/9/index.html","a0bb68b9ceb0f3f42decbd4257aca40e"],["/archives/2021/03/index.html","c83029d067fa61268694e663db1fb389"],["/archives/2021/04/index.html","c397e8144a5b0b8e49ca842a8e634413"],["/archives/2021/05/index.html","e7d174392cba44e273d211f76c0e50e8"],["/archives/2021/index.html","4a123d3d2033e4879f6ab7624e79e4d3"],["/archives/index.html","5f3e9538936bd3344d87e66e34fe393e"],["/archives/page/10/index.html","36804e40a0b04c767097a17de7cada6d"],["/archives/page/11/index.html","21cba6b84cd59fa07e4e1abd70cc18d4"],["/archives/page/12/index.html","0f04ecd870254ec490e0f4d7c0f66c5a"],["/archives/page/13/index.html","908bb4a194e5f6334faeaedb747c4ac0"],["/archives/page/14/index.html","82de34ae7c40ae6ea96b3a47a7b3ef9c"],["/archives/page/15/index.html","74253050933d4195731d01e0b7bdc6b6"],["/archives/page/16/index.html","3c7ef834bfa8127e7d1c46a93222b85f"],["/archives/page/2/index.html","4a6f108e39cb27de195f1277f1c03a20"],["/archives/page/3/index.html","0d14c0de37f2b21353989b966189cd44"],["/archives/page/4/index.html","05d931646c395ac0ffbf86e3ccc268d6"],["/archives/page/5/index.html","627023bc786c3db909c2a88ad70ef244"],["/archives/page/6/index.html","538533f39032508c6c106e4af93267c5"],["/archives/page/7/index.html","4ca2edf38e16305be719edcfe34b4010"],["/archives/page/8/index.html","938dcc555aed63ea42cca06b89a8ad32"],["/archives/page/9/index.html","8a545317147fab18e76f10e6c7b3b104"],["/bugly 上传dYSM文件小记/index.html","a52ec5975eec7d4050b5ddc27f45df50"],["/categories/Advanced-Swift/index.html","0941b4368cd131dc3534e9498c4c3bf6"],["/categories/Advanced-Swift/page/2/index.html","2cd1b71bdc7750d5aace366d9361723c"],["/categories/App-Architecture/index.html","84c0cf8782fb7c1b37b4f66dbb7620f1"],["/categories/Array/index.html","cabe9a1f7b6307db4ad9f7aa69743161"],["/categories/Codable-protocol/index.html","8472957935404ab243b5d58d6cf334b1"],["/categories/Combine-framework/index.html","7e7656933317902d6c600fa7051e975a"],["/categories/Combine/index.html","aca161e1938a55e3a49ba52c7991bc86"],["/categories/Go/index.html","698f947b64bb40bc1113142e978d27d7"],["/categories/Grand-Central-Dispatch/index.html","6f9e185657088074cbeddde60f134261"],["/categories/Hexo/index.html","46f496b6dfe5f2c465362f443b3d6e5d"],["/categories/Homebrew/index.html","8cd93391234ce5b1f9b234fcec53aaac"],["/categories/Linux/index.html","9e8a63032fcd917266a4b292e63ddf4e"],["/categories/Promises/index.html","3448061132703203496f76521bea3cf7"],["/categories/Result-Type/index.html","c075c4b361556e4109b67f82509fe5d0"],["/categories/RxSwift/index.html","5e2d09e5a9080d75f9e70c946ae9ee50"],["/categories/Server/index.html","f2838062283174e40154afeae2b98c41"],["/categories/Swift-Apprentice/index.html","ee51be480ce816e1a5bbfe0b243a1279"],["/categories/Swift-Apprentice/page/2/index.html","bba69ce77590324903396686d883070c"],["/categories/Swift-Apprentice/page/3/index.html","3aec943fd50a34362dd576138202bcf0"],["/categories/Swift-源码阅读/index.html","133fc6d18cfde1e49b609effefb53c42"],["/categories/Swift/index.html","23627272944ecad07d93ebbfb6177219"],["/categories/Swift/page/10/index.html","623ecc68def621f6429d9c7799c4fb9e"],["/categories/Swift/page/11/index.html","267a005e3062dbe4b34aafaed7fd7bab"],["/categories/Swift/page/12/index.html","ed72a746c267a54103350e0417401d62"],["/categories/Swift/page/13/index.html","94c20a8b8beac2cd2530c5e91db79bfa"],["/categories/Swift/page/2/index.html","0c8151f7a6d84978b275a58c8064503d"],["/categories/Swift/page/3/index.html","7f40b1b23b8fb6a9cd7a219faae4abea"],["/categories/Swift/page/4/index.html","b8fa5fd1c99127b4f967a52a7d309d68"],["/categories/Swift/page/5/index.html","29594c4980374da1b1b5b47fdcb64cab"],["/categories/Swift/page/6/index.html","b4f884c22bf792b3b92e7c96893d6963"],["/categories/Swift/page/7/index.html","61217740838fc63808236b7463d6b282"],["/categories/Swift/page/8/index.html","3b4f893265eb35a2bab8579a92d6ebef"],["/categories/Swift/page/9/index.html","30cd475673472323c874ac6dc74a1611"],["/categories/Swift5-2/index.html","1dd1650a0841764f090f99d81bc51d2b"],["/categories/SwiftLint/index.html","26affb761fc3a98fbeaa00368d8a7b82"],["/categories/SwiftUI/index.html","7b86f073f3e15bb1ca406f2138b49ba1"],["/categories/UICollectionView/index.html","b853d5a7ed9591e2b5cf17455f3861c3"],["/categories/UIImagePickerController/index.html","cd18f83763912fc0ea739c3a30280795"],["/categories/UIKit/index.html","d39792d66c40fbb985b883447eba940c"],["/categories/UIKit/page/2/index.html","ddb5350554f7a0175f9cf53c4f38ea1e"],["/categories/UIKit/page/3/index.html","50b357aa2333f67a5891ec413880968f"],["/categories/UIKit/page/4/index.html","7341a0da765706c9cd3aa63eaddf7efa"],["/categories/UIKit/page/5/index.html","ce354841770f8839b453ebaf67531d1f"],["/categories/UITableView/index.html","5fc7c26b327b9f989e6df3ed3a1ddc1d"],["/categories/Ubuntu18-04/index.html","329cb6c5e20dc43eac64b9c916959cf0"],["/categories/Ubuntu软件源/index.html","38398686da9862aaf64150dabb992bcc"],["/categories/Uniquely-identifying-views/index.html","6ab2a7de38654891f257dfd85e5c7c56"],["/categories/VIPER/index.html","75aae67bacfee190ea9339c62d742136"],["/categories/Vapor-4-0/index.html","e1e31fbeda12b4a5c024e9a766404958"],["/categories/Vapor4-0/index.html","6a5d96e201576a311b9098763248a71c"],["/categories/Vim/index.html","f24fe9a638cf6773e99fee0ef26646f7"],["/categories/Xcode/index.html","a0df127f601a81f69fbcfc769fdea84d"],["/categories/appleOS-Networking/index.html","a42785581d321b66b170452e20f6a3d2"],["/categories/bugly/index.html","9b95a932f5803802ff04bf2de72840ec"],["/categories/enum/index.html","5ceb1253e76e510c5a7e32534d54b8f9"],["/categories/git/index.html","15b99fac3e8a09e197b7a2e379775c70"],["/categories/iCloud/index.html","645f7e472a31a694cf55c7b54bb09bfd"],["/categories/iOS/index.html","1b79923cc649919f679ba3fb60576010"],["/categories/iOS/page/10/index.html","f65300d1489700f0b2fef7d1ca4782fa"],["/categories/iOS/page/11/index.html","c58c0be291fc6d27f9f45e5a926b950f"],["/categories/iOS/page/12/index.html","a0375f446e6548f21f2af1a0408053ba"],["/categories/iOS/page/13/index.html","410d521c6c7474f96642447513cef8f6"],["/categories/iOS/page/2/index.html","31a695e5b80033a94849c9f5f99cdd36"],["/categories/iOS/page/3/index.html","491206e4abf0ab1e2d35c45fa54cd1e7"],["/categories/iOS/page/4/index.html","b4bd96a95617b7b39595d75eb83fa8cc"],["/categories/iOS/page/5/index.html","a323dd8f9ac4d70746175b2c6412652d"],["/categories/iOS/page/6/index.html","14821f5583c5d6170546477a7d195121"],["/categories/iOS/page/7/index.html","550b12576bc8ba8ea0d8fc8edaa3dabd"],["/categories/iOS/page/8/index.html","496b3bf05c0aba5f0ec0f9cc0b4ff1e1"],["/categories/iOS/page/9/index.html","297a4164fa7180410128b46171a3a580"],["/categories/iOS面试题/index.html","dc10c267adbc36f335e8a0825ebebde7"],["/categories/index.html","7c1608279933e037da785f839268f6e0"],["/categories/random/index.html","c4aeaa76e1d8c87917364096ebbf43cf"],["/categories/三方类库/index.html","11197e7ff604cc6f5f930b9c1d8a3bdf"],["/categories/函数式编程/index.html","2a1759e96f841db23c4f5f66d1025f91"],["/categories/子类化样式/index.html","7503ff19f2cc76670260ea57aafd6665"],["/categories/开发技巧/index.html","c151660e63242e96bbf99edaf898b38a"],["/categories/开发记录/index.html","9c4e33869a463904b93b7a5752a203fd"],["/categories/技术支持/index.html","93bca3faa9dd9a6a42b705852b78c242"],["/categories/架构设计/index.html","ae9decd3ccd9f72c6d7e8fc569825105"],["/categories/测试/index.html","2d2eae6d06b7f99b779b6fdae52ad167"],["/categories/用户体验/index.html","a7ff6cad9561b1fe5af8c7c07f47e645"],["/categories/用户协议与隐私政策/index.html","2f6839dd80655b69bd6ebffc62a8dac4"],["/categories/设计模式/index.html","265d587c749b6101a1c0c8a2e03a0bde"],["/categories/设计模式/page/2/index.html","d3faf1137f1944b66e07da0d9ed41d1e"],["/categories/设计模式/page/3/index.html","b666eadf7e2d668cfe498b44770626c3"],["/css/main.css","78fb915ed9fe3f973afb5c6fad0bef1e"],["/hello-world/index.html","dd2143bdaff55a36936187a6fde8e8fc"],["/hexo部署失败/index.html","286c09ddac994835a264bb730e1c67e0"],["/iOS VIPER架构深入实践/index.html","95c28cf2c50561b76cf43615d2d54056"],["/iOS 自定义视图，输入表单和错误提示/index.html","e2cdfcd069df2a211381cc3ac6d39939"],["/iOS如何使用iCloud文档？/index.html","b57158d8b56fd3e98f20e73d34fd8a69"],["/iOS子类化样式/index.html","1618afde638223af6aa27298696182d8"],["/iOS开发记录<一>/index.html","061429de4b1f10d27220e40cbbb350a0"],["/iOS自动化布局编程/index.html","a4777acd5541da5510793c6a496a869a"],["/iOS自定义转场(By Swift)/index.html","c0e784d04fadb7023de8fe5a6d1eb07c"],["/iOS项目架构：使用VIPER/index.html","54aa79b851e373309766c7445fe89cc0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b29da619a1a4b16d474ab5df3a8eeeb9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","90bcaeb58f2c0bc815b1bbb563fbbf8d"],["/page/10/index.html","600a037be78a4f571ceb1060283cddc5"],["/page/11/index.html","43432f5a1073f09b0801961524610675"],["/page/12/index.html","d2a21a4bfe63f322569d28c369466b0b"],["/page/13/index.html","841a3b52d4248a6b256a8261bf4007ed"],["/page/14/index.html","2a3b7358e3347130ab935ba42caf2b4f"],["/page/15/index.html","73947337cf45c0e0e9471e70172b1885"],["/page/16/index.html","6620b76b500dfa57a5e0eda8ea9a2002"],["/page/2/index.html","d247577277f2ae2340c1e2e7263d53cf"],["/page/3/index.html","e5c0d5cc8be18b2f3fc7b07c041646d0"],["/page/4/index.html","09d46ab9a4198b4d0d9b2c91095dc9ae"],["/page/5/index.html","47bdfc21e05cb04b8eabdd6dfc46ae09"],["/page/6/index.html","020654e5d4965b00dde71ec717ae8af3"],["/page/7/index.html","7799249be0a968e9a6ad98480181fbb7"],["/page/8/index.html","63150718a156ef0a5ab62681a18b9b4b"],["/page/9/index.html","c82c234f136a945fef91f8d16ed0d7dc"],["/schedule/index.html","7f553e818e81f34f420e709af6e46cd3"],["/storyAppPrivacy/index.html","21dd5ae82a97d452336deb19a416b266"],["/sw-register.js","eb6d5f72992ccea6c3e19fa6bdd5cbd3"],["/tags/Advanced-Classes/index.html","38a02acb4f7d2a403ccf1c2d54a004f1"],["/tags/Advanced-Swift/index.html","ec90075f2eac0786922ab0bed8750dd1"],["/tags/Advanced-Swift/page/2/index.html","efb0067a4519b840325662da368c236f"],["/tags/App-Architecture/index.html","6c4747825273859cdc032cc1176b5af5"],["/tags/Array/index.html","8801df470f9adb2b25c1514e2403aedc"],["/tags/Arrays-Dictionaries-Sets/index.html","0611471ba49dbb604033bde268c774e7"],["/tags/Authentication/index.html","3ab527597aa57a182d046a30d9345d7f"],["/tags/Build-in-Collections/index.html","91011960642b03ca984c7dd406bd43a8"],["/tags/Building-Your-Own-Types/index.html","4b7ee55f14e307c014571cdfce0bebc5"],["/tags/CMS/index.html","c98f3ebc4eaf4dd3ec6f17358d8ed8d0"],["/tags/Classes/index.html","fc08c6689f6f1dad8d9f96fab690eb71"],["/tags/Codable-protocol/index.html","88aeb4dea5b206ea57d7cebc88c43ab2"],["/tags/Collection-Iteration-with-Closures/index.html","95454c180b0413e8d6a51de5b63befc8"],["/tags/Collection-Protocols/index.html","9ae6e9bf9a4d5283945809de88f90962"],["/tags/Collection-Types/index.html","b47dfe1c1d5adafa1de41fd9701af1f7"],["/tags/Collection/index.html","d20fd507300f91c0142decb8352c0b0a"],["/tags/Collections/index.html","44dd3111f66ea487f1adabdd29b0921e"],["/tags/Combine-framework/index.html","265d8133818c6ac4ee400913a369789e"],["/tags/Combine/index.html","5b765c33b02e95bcaa5696eb193c0ad9"],["/tags/Dependency-Injection/index.html","760af57593677efae3cdbed85298d055"],["/tags/Encoding-Decoding-Types/index.html","a78fcc657178d651ae22e8c7ec3e6dd0"],["/tags/Encoding-and-Decoding/index.html","b3e5f8d623cf510687da443533ab7cb0"],["/tags/Enumerations/index.html","d1541f4b7bb4b167151ccba7f93ab6be"],["/tags/Enums/index.html","1dab57613c136b8d5ca6119622109209"],["/tags/Error-Handling/index.html","ee9ed13f4e78e9b97d9992fcf11f0df7"],["/tags/Functions/index.html","cf8260be596ead3916539e3f67c07656"],["/tags/Generics/index.html","bcdc08439b83b4b4cff7f6e1f75f0be0"],["/tags/Go/index.html","d176bcefe7d07e57686521ecde422f3f"],["/tags/Grand-Central-Dispatch/index.html","93c0c4332c8b5c0c53ed7face11552ee"],["/tags/Hello-Vapor/index.html","94ecd61452286bab4877f56eb0e68df5"],["/tags/Homebrew/index.html","b4db7e8d5851568e675f121423825e50"],["/tags/Interoperability/index.html","cdb9b36052637d6a2bcdb7b2e0620d98"],["/tags/Introduction/index.html","ec28e1d0dea70721a8b7abf4a07841cd"],["/tags/Leaf/index.html","44990308487933d2d23eedc7a66ed07d"],["/tags/Linux/index.html","b3df84877c57c7ea8c4bfc29a3556e9c"],["/tags/Methods/index.html","536f3a2315de10ab68b2ee795864fb0e"],["/tags/Modules-And-Hooks/index.html","1aa00afb8fcd92812d56f6c216a9f477"],["/tags/Optionals/index.html","dbb9703081e93fa09497a5c49a709ff1"],["/tags/Promises/index.html","32f768853bcc3150ff9476331b6fcf48"],["/tags/Properties/index.html","6df3b8fb282ad37fe024ff3b787d8025"],["/tags/Protocols/index.html","685e8ddf9a7420e840c71feae229337b"],["/tags/Result-Type/index.html","7000adccadcaba525af0bbc9129bb63b"],["/tags/RxSwift/index.html","a4981ade702d62e449866f8ef6c3690b"],["/tags/Server/index.html","e16f325922991c0ce29a2119c24e83dc"],["/tags/Session/index.html","9fba9e32a5f7ed3a2fa6546cf2845c18"],["/tags/Strings/index.html","998eaee7fc94405bf96d3362d3d2f7da"],["/tags/Structs-and-Classes/index.html","7053965e2e413f4da69cd245d9e79e4b"],["/tags/Structures/index.html","57af8ff2a858f9c9d9c2e1669f613da5"],["/tags/Swift-5-0/index.html","b8709908011edf17e2c700d5a8f0dc04"],["/tags/Swift-5-0/page/2/index.html","52ef5541c5e0dceecd94a11436ae9a44"],["/tags/Swift-5-0/page/3/index.html","24334474d1469109cebd58c3db45c79c"],["/tags/Swift-5-0/page/4/index.html","bfefd1b0e6716499fefafea82e520b98"],["/tags/Swift-5-0/page/5/index.html","6d7a1f8a063b6357420dc1e20f8454f1"],["/tags/Swift-Apprentice/index.html","a9a5bc0be3012e3e6eb8bfa326cd8e36"],["/tags/Swift-Apprentice/page/2/index.html","30f8693a202ce6dbd8244be79fa737eb"],["/tags/Swift-Apprentice/page/3/index.html","6754ea21bfc4794a9168e79ca25c37ea"],["/tags/Swift-Package-Manager/index.html","9bdd1a7d9932986e8bc53318ffe8c2f3"],["/tags/Swift-源码阅读/index.html","a4d8d655f4dd768351dc6d7f04168baf"],["/tags/Swift/index.html","95bb631a53d4fa567fac5c2343a25954"],["/tags/Swift/page/10/index.html","862c43ab6b8fdf4420d394de2d7ef21a"],["/tags/Swift/page/11/index.html","864322ee980c0bf0c4eb2cdfa27510a3"],["/tags/Swift/page/12/index.html","cf31273ffb2f1605120a77cd406e71c5"],["/tags/Swift/page/13/index.html","72421c91b0b6b498e77e21a0c5c5156e"],["/tags/Swift/page/2/index.html","1180dd4474458c66d4f63869e6ddef51"],["/tags/Swift/page/3/index.html","c75e305cd468a5d05df9aecdc43ad33e"],["/tags/Swift/page/4/index.html","19d0ccf6377d087d75ec4f57a810763c"],["/tags/Swift/page/5/index.html","536213c53efd5bd496c5a2d1e5bf6726"],["/tags/Swift/page/6/index.html","816d27fc23e7a1a466d7210eaeb5db13"],["/tags/Swift/page/7/index.html","ecfba93d65113f784027ca59e24579cc"],["/tags/Swift/page/8/index.html","54d3256fc68e5a4e202ecd2810d728ae"],["/tags/Swift/page/9/index.html","bd09a551e0aa4ae842f61c904f5b4422"],["/tags/SwiftLint/index.html","57003a1f0dfb6c796ea356e7c90bc446"],["/tags/SwiftUI/index.html","ab4f2fd81e4fd212546635091149ca34"],["/tags/UICollectionView/index.html","edfd218ac99e292c21cdfd6cb5711fa4"],["/tags/UIColor/index.html","2f47ae6e33719d6c3ba10ec75445262f"],["/tags/UIImagePickerController/index.html","c9c3d712ba05c4aec54b82b42b2414e6"],["/tags/UIKit/index.html","1bfb716ae235ac9e23c87c7207d9e5d8"],["/tags/UIKit/page/2/index.html","ee068af8b943f10885f073034d5fb138"],["/tags/UIKit/page/3/index.html","b6c1d7a16abfd889eae1f75f32429ed7"],["/tags/UIKit/page/4/index.html","2094921256386f7d468cc84b420224a3"],["/tags/UIKit/page/5/index.html","0d9c4693529e59e0e2fe9b52c3310212"],["/tags/UITableView/index.html","e35824cdf5b6d00bca05544292180762"],["/tags/Ubuntu/index.html","5281abdfb6443bea5fb1356f536dd2a0"],["/tags/Uniquely-identifying-views/index.html","22cf0936f77a1a3a95b0beafaab5f69a"],["/tags/VIPER/index.html","a04b989ed47a205613ed08ea05cca32f"],["/tags/VMware/index.html","e4344d157c3e621c04bc85a72bf0c4f4"],["/tags/Vapor-4-0/index.html","0000bb548a7dc00e37d66d9c62ff4353"],["/tags/Vapor-初探/index.html","479fee264eb8282e8454289d82ce3d86"],["/tags/Vim/index.html","8296f5e90d4252242a35b19c51ceab3c"],["/tags/Xcode/index.html","2896c5f488ec902bc34496890975dbac"],["/tags/appleOS-Networking/index.html","5b1c8b47f7f38b72c5c305d54a4f3d4c"],["/tags/bugly/index.html","41d878159c56e2c1629b916e9243f36c"],["/tags/enum/index.html","cf3b43640c9f09a57a255579b07c099d"],["/tags/git/index.html","1b6d32f9f528078768dd0dc6260a57d9"],["/tags/hexo/index.html","157e3b753c53bd92f89f9a4d9d33da82"],["/tags/iCloud/index.html","758d2eaf7a2ca2af49e49e537458b56c"],["/tags/iOS/index.html","470ce3be69bfe3d814eb97f564ad3436"],["/tags/iOS/page/10/index.html","9517c1cf774eb9fc66414205b5fc8259"],["/tags/iOS/page/11/index.html","409b0e43fdcad26bbf7a51f4d8bfa478"],["/tags/iOS/page/12/index.html","888e507be765871316e904e46997916a"],["/tags/iOS/page/13/index.html","321e5ffc2d7144a9fc5ea775b5695140"],["/tags/iOS/page/2/index.html","b5dbc52cc9a4b12d170a4e67c31e526e"],["/tags/iOS/page/3/index.html","cc4bfe6f24227b51f0360f22ca582f08"],["/tags/iOS/page/4/index.html","9fd287d518bc57ccfcfa428b5ee9ce7a"],["/tags/iOS/page/5/index.html","251686a6827de2c7b1637803a4c1627b"],["/tags/iOS/page/6/index.html","5be90f0f4ee0f31f136b517b95023dbb"],["/tags/iOS/page/7/index.html","8d293d715c00e57370418895ec3b9b99"],["/tags/iOS/page/8/index.html","4f17e8bbf7d90a13b9aab1d9cd9099fb"],["/tags/iOS/page/9/index.html","3729440d8e51a3045744744d13fa4319"],["/tags/iOS面试题/index.html","836f67bb2b63335b0f6a7b004de7c5f8"],["/tags/index.html","1fcc9249010dfae76db7948fbeaed3b4"],["/tags/non-optional/index.html","3b63ff17cadcf014ceb86d25d1fad02a"],["/tags/random/index.html","0012b5c447a0012d03eb3e29019e83b1"],["/tags/transition/index.html","5e64d0803db945746121ef5a4361a458"],["/tags/三方类库/index.html","ec3d32d5ad7bca750046504497cadcee"],["/tags/依赖注入设计模式/index.html","d1191be0e78e22bd472396184bd3f8cf"],["/tags/值类型和值语义/index.html","a5b78a78024a1ea27195407adaeeec6c"],["/tags/内存管理/index.html","9e6003b08317959dcd7d4a79e75b3b7e"],["/tags/冒烟测试与回归测试/index.html","f295bead507c6c5b50cb56afa9da842f"],["/tags/函数式编程/index.html","11347f8282f7709907f5f3dda7969f75"],["/tags/创建博客数据库/index.html","1739e908d90570866ab618714e4ff590"],["/tags/初始化模式/index.html","ac168405cfa29ac51761e3f48fc9301b"],["/tags/单例模式/index.html","b433990b098aa536327abe935062f2c5"],["/tags/原型设计模式/index.html","07e858a2c7363ff6cc432f88adf15fef"],["/tags/命令设计模式/index.html","b3582c73c7950c65a27cef2fb118f4ec"],["/tags/基本控制流/index.html","653fb5abdbbd51e1a7808d4ee085790f"],["/tags/外观设计模式/index.html","09fc4b5093a87ce77d6ab65555f26b70"],["/tags/委托设计模式/index.html","883196b5537785fafb9febe3b6b742a9"],["/tags/子类化样式/index.html","1d4543ab663c2f624bb7c232b00aca3c"],["/tags/对象池设计模式/index.html","2ab84ba2dffc04f02cf91f0cec5e50da"],["/tags/工厂方法设计模式/index.html","014cfb25ceb63a7ccf66f6d9c24e40d7"],["/tags/工厂模式/index.html","e67164f050fdefb3efcbb268f86b2626"],["/tags/工厂设计模式/index.html","4162041c8e6f9345910a5afd26a20a5d"],["/tags/开发技巧/index.html","79040d686a3873e26478d2ef87f22ceb"],["/tags/开发记录/index.html","2ae89a58c4c515e20621ba4295c6b26f"],["/tags/懒加载模式/index.html","ccaab39da8611674bbdbd6e7b1346653"],["/tags/技术支持/index.html","65cb6b1402108ee0a446515997af470f"],["/tags/抽象工厂设计模式/index.html","184dc1473a4153097262d7181f7bbf66"],["/tags/构造函数/index.html","dcc4c215cda3b531db27d5de01f3a7f2"],["/tags/架构设计/index.html","54716bb8299d24d8c79be63e1d1ecb80"],["/tags/模式匹配/index.html","591444dd77ee0c12f5782653bafde00c"],["/tags/生成器模式/index.html","3cc98eca25a428cc243245cacdb32894"],["/tags/用户体验/index.html","b1a3e3fd81e588b689d3cff990704f76"],["/tags/用户协议与隐私政策/index.html","a4104063822155f445e863d871951e34"],["/tags/类型与操作/index.html","2464291a088fa26bd68ecd837c9ac5e7"],["/tags/自动化布局/index.html","1f018f7c218841f6c8e9d84c9af952ef"],["/tags/自定义UIView/index.html","bc5b56d8d794a03fa3d463daaa66850f"],["/tags/自定义转场/index.html","bae37c3b11feec8f2a71519e5507d108"],["/tags/自适应布局/index.html","16bc619ca8c0d1b544543020a30f1ef3"],["/tags/表达式、变量和常量/index.html","5ccce10540b08f4277bcd0dae97ac225"],["/tags/设计模式/index.html","a0c8caa225d6fbcc024c188408d39b89"],["/tags/设计模式/page/2/index.html","1125dec748e6a3abfce21e9da14e07ef"],["/tags/设计模式/page/3/index.html","aeb073105da6ef02af75b40433292ba0"],["/tags/访问控制和代码组织/index.html","179d4868c4f23b07e562d657e695b04c"],["/tags/运算符，下标和键路径/index.html","8c1f50d8b20a9e0368fccd9345d57528"],["/tags/迭代器设计模式/index.html","25a58e03b8f57783a43535419411f3fd"],["/tags/适配器设计模式/index.html","9e3917af849d6109571a35be55636e35"],["/tags/错误处理/index.html","131543f8498e4e7f302c79437d19cf6c"],["/tags/静态工厂方法/index.html","0f739a92e0a74d5146f553937959d35e"],["/tags/面向协议编程-OOP/index.html","73fed42b679a11f406010aadf5b7d94e"],["/tags/高级主题/index.html","939941da7a18f29de30e55b40b8453e5"],["/tags/高级协议和泛型/index.html","79e5b5892d4986feca322c6e0eb548b8"],["/tags/高级控制流/index.html","a51cf623c9bcf7557617b45d18f7db71"],["/为iOS应用构建输入表单/index.html","4886e2115243caf6d460de7dccc81c1f"],["/产品开发的幕后花絮/index.html","788651cf5e70d715bc1c086ead54f31a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ae700ff6bae9c689124ae328c4b7b5c2"],["/冒烟测试与回归测试/index.html","c066c4871d9c3956fbc4fe98f40cf64d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ee7b97bcf8c2c982c7459fb2de7350e1"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","97032f9d7a77a6adfb020e6b1c477c9b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ae3e9a6114b62c71f42adae4708f766a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7d0e28b102d7faf4f6927ca657c2aa7a"],["/在Swift中创建自定义集合/index.html","32d2fece7745e4a639b2327dabd27b61"],["/在Swift中处理非可选选项/index.html","1267b2569f7ff230a4e68c9d0d4f97c8"],["/在Swift中生成随机数/index.html","4ec9a8d36ede484ded5398f56776d921"],["/在Swift中重构单例模式用法/index.html","440aedec62e02e32c56a87784ec1eb0a"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","cf4c2f167304e1e7c1a1f8de5c0b5086"],["/如何为VIPER编写服务？/index.html","699417ddbef684581a557dc0e9e23af6"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d1d3e6e8460acc8748599a7195690455"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","982d51a948e3c32df5edd324c8ef9ef9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","6e49b50bd36dda54882cbd6da4508e5f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","84c009fe36a423f14e8b7b9dfd07c8ab"],["/掌握VIPER架构/index.html","1f14c55b3245bd48c722d19dc16e38d6"],["/揭秘 WordPress Hook 系统/index.html","f03feb3b9fac3e9b127aedefbf0e59e6"],["/比较工厂设计模式/index.html","b570a36e57976dd6d494ef4d9c73eb2b"],["/深入了解Swift中的Grand Central Dispatch/index.html","523aa011f8750b5b2d6d980dd152ef7f"],["/深入研究Swift框架/index.html","6ca88b614f6bd2c4947c516b83ea53c1"],["/美豫直聘技术支持/index.html","f25369abc583fcddd4da670b20ff58b8"],["/美豫直聘用户协议与隐私政策/index.html","de7ceb6ed152bddbbc9ac8205ec5a17f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","4bfc707dcf01bb4564252d477d45a3bc"],["/选择Swift而不是Objective-C的5个理由/index.html","422b7697d24f5088cba1ffa416a676f3"]];
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
