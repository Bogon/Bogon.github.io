/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","042dcb879dab7aa8f2f879aba994485d"],["/2020年iOS面试题总结(三)/index.html","8ed6cdd73d12259a79e1100d1bb93137"],["/2020年iOS面试题总结(二)/index.html","d9a4a55d7001cae62f9b3d72aac7a937"],["/Advanced Swift系列(一): Swift 简介/index.html","c75303c6be5052ce6b17535ab3723012"],["/Advanced Swift系列(七): Strings/index.html","07cc10db24805e92906282af73a9a360"],["/Advanced Swift系列(三):  Optionals/index.html","e7b516fc8b892c108ecda02c4fff8c07"],["/Advanced Swift系列(九): Protocols/index.html","6e53ac69eb013298988ad7bd29988c5b"],["/Advanced Swift系列(二): Build-in Collections/index.html","07dddc4fe2639c2247c4d8f75b16b2ee"],["/Advanced Swift系列(五): Structs and Classes/index.html","be1ba8c1b5ef5fbb9c589860d27a5ebb"],["/Advanced Swift系列(八): Generics/index.html","ae5e2b990350df51c58cc9a1a192a994"],["/Advanced Swift系列(六):  Enums/index.html","12a95bceb2f11d3699f5df018708281b"],["/Advanced Swift系列(十): Collection Protocols/index.html","801ba1ca16c52e513d4aaf1b96aa4135"],["/Advanced Swift系列(十一): Error Handling/index.html","ec3955245a8c027c82377bd313abbf30"],["/Advanced Swift系列(十三): Interoperability/index.html","f2cfaa93fc8faaa564bf50e6b6064aab"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","f890999b14fbb9e2d3afdae259ee16f4"],["/Advanced Swift系列(四):  Functions/index.html","ce9053d37c0a5bcb1fb8f0b1e498171c"],["/App Architecture系列(一):  简介/index.html","8f6f419b255ae7c187c2372138ba7cc9"],["/Functional Swift 初探/index.html","5b6d15c004fda13d1ddb8007b81e6683"],["/Git 使用小技巧/index.html","c9da73e69d7d29c9f4c6fddac3b46491"],["/Go 基本语法初探(一)/index.html","9b3dcb37df41378b3ed4da4b1512b4d9"],["/NSCODER和SWIFT初始化/index.html","a633a53eb9205913261e33b1aba403c3"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","3236915d74c4f86c7ae055620a50f996"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","46eb3599ee5bd2c07ce9146710a9798a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ae3a0680189294d9a98ab791123ea081"],["/Swift 5使用UIImagePickerController拾取图像/index.html","aa8fd73c2c038bfe0c999be5cf764b6a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","ff3a6abdf7a0539912ab6071cd8e4a4a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","31b4721725e4e5687a067ccc63df14b2"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d9cd94bcaa7425b6a7a4ab73a42beda2"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","0eefd9159eaa66b10b5ce0fec1807130"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d9c619b7b2ba93d4caeec5a0f767db04"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","2fcf305889c69d15793467ea7d14a1d7"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","daf0a4bbe6c723a12427e3110e5e1f7c"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","6cff2bc2f5ec7c898798a210a939ca13"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","c3309db9b62a62ebe7e7d4291e384797"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","f45d4414782ab2e0fae8f871fd5818e0"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d8f7ae3cf33a6b584ad5230bb0192190"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","eb421b5e507cc0e0c8bce494bb481a63"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","adf2455b5ee4a00f5f40e23bf5271db1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","9467b1c72a1578eebf9859823ac5ff53"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d99b0cc20046070a515d2536456d1997"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c8e43c262c774695410df3c06c7b7b75"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","8f0383a724cbe1e7506eaaf9b8850f31"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","2d24eac5495e4b309f3651cb17693f16"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","954d53da935b149c215e2355c29fc91d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","37f6447709d2569e06b0b9afa3e579c7"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","3dcb3f814dcc1cc5b803b6fd0a489b78"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","a5106d1690c4b9dffa0a1f940a8bc186"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","5888a10107d3408e2790e92f4e91b81d"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","8a6e84dd626447417cf8a69a9fe32b0f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","fe0904c6aacf5b097038668e756b644c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","19fc97413f7f4df1e61cc213dbb2dcfb"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","24b91e8fafdf92533c6d9b24ca61b415"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","238e43f40b153986d5f740223c56765c"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0af8b06cfc0b9f9d3d152dae8d915af2"],["/Swift CompactMap vs flatMap：差异说明/index.html","5694c55b3d173062e78ca160f04c8254"],["/Swift Grand Central Dispatch 深入实践/index.html","c9a303bbd99e033efd29c54240839bd7"],["/Swift Lazy属性初始化/index.html","febacfef2f3f97dab47f135fc7a3b7a9"],["/Swift Promises 初体验/index.html","840eb24ad28a910e7b5770d7ba31b52e"],["/Swift Promises 探究/index.html","348db341d170dc2fe5027f952a36beb4"],["/Swift UICollectionView使用指南/index.html","712da7f7501997b6b9a2cbb3676b8a36"],["/Swift URLSession && Combine framework/index.html","a47c54b6e42fa8d6a79c8ae5287769a9"],["/Swift 唯一识别的视图/index.html","95a2032518f83c026af51b6cd144b1dd"],["/Swift 如何学习现代UIKit？/index.html","3521fc5b93a46f1d668d2b2d259a82a4"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","41ab2990b6eed1c7f2d6a95f1d972de1"],["/Swift 用 compactMap 替换 flatMap/index.html","feb5ce379c52f1f16f72344e7a1850b3"],["/Swift 选择和播放视频/index.html","23241bce7b6f6509c1f8ce95141dbb0a"],["/Swift中UIColor最佳实践/index.html","d6ab109569bd1ebbaec00c1dc8fe990b"],["/Swift中快速简单的工厂设计模式/index.html","d6c9c6cc072e6e032d43233984ccaeea"],["/Swift中构造函数与静态工厂方法的比较/index.html","4543861d6cae53efc2aedc407c1734af"],["/Swift中的UITableView教程/index.html","40af400a2f336844429b566f14a8719b"],["/Swift中的懒加载模式/index.html","230a16f6c0f5386001fdbff8ca98aded"],["/Swift中的模块和挂钩/index.html","10b5b14dda7c35bfc32e16ae1c939742"],["/Swift使用布局锚点添加约束/index.html","1614b81ea68a58e29aff9bb465e33f7f"],["/Swift依赖注入设计模式/index.html","cc7e174813e70566bda09317948bf58d"],["/Swift关于Dependency Injection (DI)/index.html","81a90932de49b5fe9de4be6027549308"],["/Swift初始化模式/index.html","d8396eb80fdb82ee1940698d94ccbbfd"],["/Swift单例模式/index.html","7ddb6ab93641a4208538bbd46d57bf62"],["/Swift原型设计模式/index.html","8be014191dec60ec5c087c42a74c01fe"],["/Swift命令设计模式/index.html","19229494203e25ca593320c5d09895f8"],["/Swift外观设计模式/index.html","f91d838056f283f2695f76ad11fb4ffc"],["/Swift委托设计模式/index.html","263978931149e915b3b776de75ff1901"],["/Swift对象池设计模式/index.html","7120b92e9c85b61fb49a9d44364e4844"],["/Swift工厂方法设计模式/index.html","4ccefe78b7e170a31d31e633e82f40cc"],["/Swift带闭包的懒惰初始化/index.html","b5a813fa805d081aa149e6960a3e61d5"],["/Swift抽象工厂设计模式/index.html","bed8ce6a20be74906618027ddc427dd8"],["/Swift掌握iOS自动布局锚点/index.html","be7326f64ff8c6864966c43a2485021b"],["/Swift支持旋转的自适应单元格/index.html","b2c0b11e814bc514174f01d0b1185286"],["/Swift枚举值/index.html","d9ba3b7fd5f88814284fd346ef555980"],["/Swift生成器模式/index.html","93e9965a7aa9a47f042b4736f503e750"],["/Swift结合Xib文件自定义UIView/index.html","8686f67929b78ff134e85c4866254569"],["/Swift编写的20个iOS库(一)/index.html","4fe7516c0481b8b2983137140cc66e48"],["/Swift迭代器设计模式/index.html","44c0bcd0a43b8a3fc2b0db68bf10e72a"],["/Swift适配器设计模式/index.html","5df213145bff5b3cd657b2283a094579"],["/Swift静态工厂设计模式/index.html","8ffa263f41616f65f058e379187fba81"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","91f56db023c8f10c9b48a07a0178f8cb"],["/UICollectionView data source and delegates/index.html","f9ee7111b4b9d78ab47697498733e927"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","0408b9f057fe6b04620c1fcd58a3f205"],["/UIKit初始化模式/index.html","eeaa93fa7ec183f4b774bb6d48b59bff"],["/Ubuntu18.04替换国内源/index.html","ff3d6395d8e8adc125821a79ed933fd9"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3c5319e78b9b3ac9f4bd02a752f754b2"],["/Vapor系列 (一) :  Vapor 初探/index.html","d8098d9d4a686f22a97622f54bfd0750"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","6676fcbfc3c2f73251eed6cc5be35e19"],["/Vapor系列 (二) :  Hello Vapor！/index.html","5a2fca11f1be6e493539ea96d0e66e2f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","75fda04ebbf8dc96483d90a5871cf442"],["/Vapor系列 (四) :  创建博客数据库/index.html","3b6b2126f2e20c80170ae6d1f55e8082"],["/Vapor系列(六): 徒手撸一个CMS/index.html","54d806833289f7eae5ca14f59ad3b153"],["/Xcode扩展/index.html","d856f0f1d0882a780fcbc5cdfb949254"],["/about/index.html","9a1b0e1f356995345da49844921e9d2a"],["/appleOS的Networking示例/index.html","2eaeee462644a52c99e32715ffa22605"],["/archives/2020/03/index.html","f73cd73f93146c5bb93d155d48278792"],["/archives/2020/04/index.html","7ef50798035429d8dd4831233bb9b8ca"],["/archives/2020/04/page/2/index.html","f70a8539a0fa453a109359429179b9b8"],["/archives/2020/04/page/3/index.html","79cb02926b3be7bfd7427db663c60ce7"],["/archives/2020/04/page/4/index.html","ecf9f158b576f0f9be1fe588147bafe5"],["/archives/2020/04/page/5/index.html","fab6f1defa1a0aeca903c1b5be52e823"],["/archives/2020/04/page/6/index.html","28fc0930c888305d7fb523382b7a1af1"],["/archives/2020/04/page/7/index.html","2f4e237fb2b906aac5a336fc57237831"],["/archives/2020/04/page/8/index.html","aba8b18e89646a14df696e7fb1da64cf"],["/archives/2020/05/index.html","3855fda75ab37d7dfe14be15c9094b8e"],["/archives/2020/05/page/2/index.html","d74fa34073eccb188d95948fe3487eb4"],["/archives/2020/05/page/3/index.html","72d0b0645246de552d6ccec35d65862e"],["/archives/2020/05/page/4/index.html","03525e321ecb9b04604223bf6789277e"],["/archives/2020/05/page/5/index.html","ca7e8d879ff422d278ebc7c7012ef59e"],["/archives/2020/06/index.html","90b4bacf294eadc53efd5599e8f438a3"],["/archives/2020/06/page/2/index.html","2220d138c6041bd011fd73da3437110b"],["/archives/2020/08/index.html","fda71ffde7a7da5a39e42198b89b5a27"],["/archives/2020/09/index.html","87e8bf2217fe0e285e84429c590e7ae3"],["/archives/2020/10/index.html","b5d51be4159faf200de79c2dd3ae07d1"],["/archives/2020/11/index.html","3a56a921a620714b7828543340842959"],["/archives/2020/12/index.html","432a1619d0b635b38aa8f28dfef738fa"],["/archives/2020/index.html","fb0b3a414094dd43366a8b29a35c5e1a"],["/archives/2020/page/10/index.html","52932476a8cfdf40033ae86915fe9ae9"],["/archives/2020/page/11/index.html","3982620793183bb353b06454794c9c75"],["/archives/2020/page/12/index.html","a4fcfa3bf752f3f021191300d3b0a299"],["/archives/2020/page/13/index.html","0ed424024b905880e1d803f10af8960b"],["/archives/2020/page/14/index.html","3226a8a6b7d5b4077c8df6cc2a66c63f"],["/archives/2020/page/15/index.html","0eed932c5c8200de57e7c188fbd7f989"],["/archives/2020/page/2/index.html","d3b63245630dc44c1c7a7f8efcaadcc1"],["/archives/2020/page/3/index.html","ecc52d947eaa2affc148a91a60928c49"],["/archives/2020/page/4/index.html","a3ad966db630252e40b90ce8e05dc3b0"],["/archives/2020/page/5/index.html","8c85ef5581e74fae97eb6b2946a35a4c"],["/archives/2020/page/6/index.html","c3c3c53d80bb851e3b307db674277ef3"],["/archives/2020/page/7/index.html","8b4ddf1eca6f153b01b4e7a0f1063a11"],["/archives/2020/page/8/index.html","5a6db20b4b1a3e42464067207e0e450b"],["/archives/2020/page/9/index.html","b4471ec691db854835c2b4361e48dcae"],["/archives/index.html","3ba9d0584e6bc024857b4de91e49aae4"],["/archives/page/10/index.html","2e7a6d08deb58b79bc253e030d9b1b49"],["/archives/page/11/index.html","808f98b803e93079e0e1b3b77ace33ab"],["/archives/page/12/index.html","6b46bf7fb2daa4cf231324e52e83dcc7"],["/archives/page/13/index.html","f692c74daaeab0196b78bc2fe91a8c2b"],["/archives/page/14/index.html","baa8623f6929ec07c2ded8dc7cc4dbea"],["/archives/page/15/index.html","55d5bfc9c3d24244d4e4c40c12577a98"],["/archives/page/2/index.html","7201c007b6103c1aa3b42accc7c98730"],["/archives/page/3/index.html","e36afa278f08d8f46b063fbcb4d79096"],["/archives/page/4/index.html","47628bf5ba0691abe30e162c8f7a121c"],["/archives/page/5/index.html","474b4b1d97f9ee743b63137d2ea83fa5"],["/archives/page/6/index.html","2b759f7eb9cda4aa29542f37c9769ad4"],["/archives/page/7/index.html","1c9eb1cd489f8afd4af6250d7920be80"],["/archives/page/8/index.html","0e5fe40d1ec06a636688560bb1d3dc64"],["/archives/page/9/index.html","bcf0421c4a8a9d154444f1671e94da38"],["/bugly 上传dYSM文件小记/index.html","dfb79caed4621ba9e614861c152fd60e"],["/categories/Advanced-Swift/index.html","cb4ba724514446026abd9646e4841633"],["/categories/Advanced-Swift/page/2/index.html","cd4074686fbec6cb1f083cd4d702f20a"],["/categories/App-Architecture/index.html","07241ef5dfa399547d1ecfbeb6ad6e75"],["/categories/Codable-protocol/index.html","0b2da1e7db08c8dc17716be02ebb2225"],["/categories/Combine-framework/index.html","eb44533a9848b1851803da354989b15e"],["/categories/Combine/index.html","050f6abdc4eb9433ef3c66f157b90025"],["/categories/Go/index.html","9cac832cc297a8310d76c0a2f1fc08c0"],["/categories/Grand-Central-Dispatch/index.html","c43ce3de230cb2d7a6144aa25ed7a985"],["/categories/Hexo/index.html","54acfd436184059c8429eb6a515cb945"],["/categories/Promises/index.html","9fe5505e03f47a082fe9707f0ca48a5c"],["/categories/Result-Type/index.html","bfc3a14815019ad014573a4b69d7eb46"],["/categories/RxSwift/index.html","6c128b72ba219626ac5e85dba3d74f96"],["/categories/Server/index.html","33ea96a193ad139c34f30c7ebeef2cdf"],["/categories/Swift-Apprentice/index.html","8050640d2d7c3c27b496d47843223a38"],["/categories/Swift-Apprentice/page/2/index.html","24e9092094272a0f63f95f49d789bf43"],["/categories/Swift-Apprentice/page/3/index.html","3310f929c24eeed88f9fe09d1fb591c0"],["/categories/Swift/index.html","4b12c41f0be1757c04a7dac5a3ae192a"],["/categories/Swift/page/10/index.html","7cc1959e207a04f41909c5f7a44cb3e6"],["/categories/Swift/page/11/index.html","921b3aae6a5197da7199757cda7768d6"],["/categories/Swift/page/12/index.html","f42e1e5f075032dfa49ee2d5c46482c3"],["/categories/Swift/page/13/index.html","33ed0d5edb704bcb9f59c762f32cd4e6"],["/categories/Swift/page/2/index.html","5f641f46dfbcb79f346e0a52bb9cd5c1"],["/categories/Swift/page/3/index.html","d039ab51bb0a9f11ff8da0df4a8d1772"],["/categories/Swift/page/4/index.html","f6fe924d1290aa0541eb7db55e3a76bf"],["/categories/Swift/page/5/index.html","62954c104c4d9f972a6274bf14aab3c0"],["/categories/Swift/page/6/index.html","da140788886d97208f59b05691686a0c"],["/categories/Swift/page/7/index.html","19d98b4caae12dbd58e91b4f5a112f00"],["/categories/Swift/page/8/index.html","f94639c659c39a3d38fecb53ce022c24"],["/categories/Swift/page/9/index.html","383aeb816fec95a8bc2704c34f990f00"],["/categories/Swift5-2/index.html","b8ba57e46aac02b3cd7457e2c013fa44"],["/categories/SwiftLint/index.html","9278728d52572aa560663b44476257c1"],["/categories/SwiftUI/index.html","e56ecc424c2895cfb54f54530e8ff99e"],["/categories/UICollectionView/index.html","85b813ac5b1995b3749747b8781305aa"],["/categories/UIImagePickerController/index.html","fb83a59fdafa946dd47da00408b119b8"],["/categories/UIKit/index.html","639b565f88201ba42233907a390e6307"],["/categories/UIKit/page/2/index.html","eea26aefc6808ea37ed230643b2dc0d2"],["/categories/UIKit/page/3/index.html","a8a62f9acd4fcccb33774f65f9a729f2"],["/categories/UIKit/page/4/index.html","aa0500f18f8db386095a03eda9423fef"],["/categories/UIKit/page/5/index.html","7681b036eaeeb05d9b4bd838858fbe57"],["/categories/UITableView/index.html","fb5dd805b78b8a6330c47fddb49a027e"],["/categories/Ubuntu18-04/index.html","c004dcf66655a68fae7386c15b3740ef"],["/categories/Ubuntu软件源/index.html","fbc59376ae2a725525973c00e408790a"],["/categories/Uniquely-identifying-views/index.html","070b5c2dcc10396c997efa8e3f636074"],["/categories/VIPER/index.html","67f1eada91eacc7d588e81e20d594662"],["/categories/Vapor-4-0/index.html","7c0e5a02567257907085eb8c87807c01"],["/categories/Vapor4-0/index.html","6e9e9ad5a9962a6caed159f298f403cb"],["/categories/Xcode/index.html","4230b730b0bbf2e0acacfe8d3b5dcec8"],["/categories/appleOS-Networking/index.html","0ef1a76f7ef6c4c55cb19b8d36b832fe"],["/categories/bugly/index.html","8506ebc734d158e8b23fefbe9985b4df"],["/categories/enum/index.html","92ef91b1447c3e5181e1d25f3879ff2c"],["/categories/git/index.html","8fcc061bc24a4c9b3117f025006475a7"],["/categories/iCloud/index.html","36b9f76f47feb6118c4ff5c6de83577b"],["/categories/iOS/index.html","0c2ddd331f20fb7535502d17a05fb4a1"],["/categories/iOS/page/10/index.html","34b1ab3ea1c6b117f7fb73fda16eed6e"],["/categories/iOS/page/11/index.html","36875143f5e2bdfcff479e3bf53a7b8e"],["/categories/iOS/page/12/index.html","421be1acd3021e78500f107042e70e6f"],["/categories/iOS/page/13/index.html","ffda83de3bca39133a592f5451ef5504"],["/categories/iOS/page/2/index.html","8669716c89aa63ee1e93071811ac7b22"],["/categories/iOS/page/3/index.html","ffe168d21dc000719d77b9414ce9fedf"],["/categories/iOS/page/4/index.html","dd6fec33f20f2a7af51a11e79a8f1fa4"],["/categories/iOS/page/5/index.html","487647509b9ed5b27ad49194f535a893"],["/categories/iOS/page/6/index.html","02897c7c293665d49cb2f7c32dff2a6d"],["/categories/iOS/page/7/index.html","5160dba728bc09cf7b1971ab029624d8"],["/categories/iOS/page/8/index.html","75b07c6339a7e86a7829bc6d68a39e76"],["/categories/iOS/page/9/index.html","01c182976520c6cc238aa2d6206b2d7c"],["/categories/iOS面试题/index.html","eaee5608235894a638ae8f949f674f10"],["/categories/index.html","f3a74fa8eb8fc2745cf9ff59e03fedfa"],["/categories/random/index.html","a2c79d4d63303b29c1aec39f83e0914d"],["/categories/三方类库/index.html","d97b47d4944fbb5be4555222d0d0e6ac"],["/categories/函数式编程/index.html","1d822ff9b4a3d7280e84ea78ed29800d"],["/categories/子类化样式/index.html","22e9c713525db1ee8de9d2bf6b0c3e17"],["/categories/开发记录/index.html","ebae4ca1e6e78de6f139edf836ca7eea"],["/categories/技术支持/index.html","70efcd14ecb328628328402fe072e1a2"],["/categories/架构设计/index.html","941ac8658cb787baaea7a1ab4685e362"],["/categories/测试/index.html","6fbceb759d21de3fbd9cfe591126cffe"],["/categories/用户体验/index.html","cff2b781b5d2e20990f390edbcaed191"],["/categories/用户协议与隐私政策/index.html","8ca8c26e6dfbe255e3fe2f0aa26f4203"],["/categories/设计模式/index.html","9cbe739e6fee42ec330f27814830e2cc"],["/categories/设计模式/page/2/index.html","15cf28e1a1c79401a3e6597fbdd90586"],["/categories/设计模式/page/3/index.html","dcd672d5872f8514d8d1e1cd0fd49c9c"],["/css/main.css","be99ab92e3f2ae3c12b67e58bac32089"],["/hello-world/index.html","7e54205766312b0a7ea1eb4ea4d19498"],["/iOS VIPER架构深入实践/index.html","3c88050f60cbc0bc8713f8391e9044ba"],["/iOS 自定义视图，输入表单和错误提示/index.html","4af653d13ee0d905b4e84155db449a47"],["/iOS如何使用iCloud文档？/index.html","afa26d26d00f87a38e5b2b8981202ffc"],["/iOS子类化样式/index.html","ef3474e1e994656cd72ea4c222203bf9"],["/iOS开发记录<一>/index.html","853484656ab7ab87b0f6e0551026d3b2"],["/iOS自动化布局编程/index.html","8552bc702d7d813ec23be24df5bdbae4"],["/iOS自定义转场(By Swift)/index.html","2583b6e415350d67acd7cd39e8c4b1fd"],["/iOS项目架构：使用VIPER/index.html","6d9e986681bd92da6025cd1ec5008e03"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4b4ae3c036136b3cbc98c8098cb998be"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8a9fa5e4b5446e5cb0de7136da7b0688"],["/page/11/index.html","9fd50f64431e2d0d2642f4d9415138a8"],["/page/12/index.html","3d63357386f8a6afb576e4c9b68afc95"],["/page/13/index.html","363680dfdd88dc78b9a8d24c3bdf57f8"],["/page/14/index.html","12e805bf90595593c05ecf0dc2ecdc8d"],["/page/15/index.html","842040f5039dd5e468ed26685f53aab9"],["/page/2/index.html","ad8f727ae505f13574a88729df147f6f"],["/page/3/index.html","35c76be37e9d135dc1dfca6278f53b71"],["/page/4/index.html","8086a8726afc79ebe536af0beb5f7b58"],["/page/5/index.html","1cf463ef60014810613be65edd39b4c3"],["/page/6/index.html","0c58893117f834421b9acd9500fb9f63"],["/page/7/index.html","7109a2291d497da4239643e5c0f9789b"],["/page/8/index.html","bc45fc5da7e3a23e16211037e53f19f4"],["/page/9/index.html","0d794735628676971a41d1af2be11c32"],["/schedule/index.html","8d38e1456703e081ddf980212c8f0ed4"],["/storyAppPrivacy/index.html","8465d9de6cb793278a84be2d61bbf51f"],["/sw-register.js","628c0060a8adae4a39d79986f147d413"],["/tags/Advanced-Classes/index.html","4f57d2ec79d25d3ec0e2d58117a8488d"],["/tags/Advanced-Swift/index.html","c604410e5edb0aeeb79bc3e33c365f6a"],["/tags/Advanced-Swift/page/2/index.html","64348261c1a20914d50bc4f6e4bb3eee"],["/tags/App-Architecture/index.html","968f9f0f0b304d230c8463ec2fbc33fc"],["/tags/Arrays-Dictionaries-Sets/index.html","b75d9d64120adea5932f83b41fe8c1c4"],["/tags/Authentication/index.html","65b5794b8ff8f2dac881c1382a40e524"],["/tags/Build-in-Collections/index.html","b5133678c8f0e2a8900d38dccb5772e3"],["/tags/Building-Your-Own-Types/index.html","6b2b87a47495cb16f47b91b6a4b71d01"],["/tags/CMS/index.html","29d19ffafdf844e655b401ef49a4e377"],["/tags/Classes/index.html","cdf8db4115b477d0f2e72dbe1f82a533"],["/tags/Codable-protocol/index.html","c91bdc85480c17cbd5649b3055aa781d"],["/tags/Collection-Iteration-with-Closures/index.html","db81427de0a4003430b8d87cb77106ec"],["/tags/Collection-Protocols/index.html","3c2d92d3beb13f063c37d76495c7dd3a"],["/tags/Collection-Types/index.html","5f72083564b91d54561a778cc5797cd0"],["/tags/Collection/index.html","52c9c74d84a91bbcd0a82fda8be7a646"],["/tags/Collections/index.html","e677d25aa016a34736fbf0206b853175"],["/tags/Combine-framework/index.html","2fe75ebef34a3f8313a02b2dfaa9c968"],["/tags/Combine/index.html","596fc50abbe9d1f548289454c6341984"],["/tags/Dependency-Injection/index.html","87deb445af1e1d62aec1a0589b54cb6e"],["/tags/Encoding-Decoding-Types/index.html","e8a5f9905b3c61f4eef129a6a97f29b4"],["/tags/Encoding-and-Decoding/index.html","e361e740d2378720f0787d98cc884475"],["/tags/Enumerations/index.html","0ecdce2f20e23a8701311c6e10341ca1"],["/tags/Enums/index.html","4a30282fd30db0b53af477506155d7c4"],["/tags/Error-Handling/index.html","5af45287140a49ce22ed6919b69f80c9"],["/tags/Functions/index.html","2bfa68e973e787c6240b58480821322d"],["/tags/Generics/index.html","7ab083c6adcccb48a1291c1a6d1a2cb5"],["/tags/Go/index.html","def74ddd862eed0eb7cb726a47dce9a7"],["/tags/Grand-Central-Dispatch/index.html","8ea1db7eb8fd85cc87bb033e01b0367a"],["/tags/Hello-Vapor/index.html","3f500181e5a21fd516877c0ad6955811"],["/tags/Interoperability/index.html","1985ee93ae6e4b523c600e21dc26a3b2"],["/tags/Introduction/index.html","c10316f2adcd0d7f0c23b9ff9a706fa3"],["/tags/Leaf/index.html","cde14ccbf945e5901b946b1cb937c38c"],["/tags/Methods/index.html","122c5f94d15dbee2a15daeaa21f4eab7"],["/tags/Modules-And-Hooks/index.html","56688c7da7545005dd9aec3f6d7f0d6b"],["/tags/Optionals/index.html","b0b3ec5d68e363395ac884e7ba83e71c"],["/tags/Promises/index.html","b4604fbace3a9fb2943427edfd0a1462"],["/tags/Properties/index.html","3c5853145d86cae53b412a336b7d9222"],["/tags/Protocols/index.html","1ec4ab524ef31f15e772e5f3ecc7b60b"],["/tags/Result-Type/index.html","de5d81a4ab27340c638703ece5c06f62"],["/tags/RxSwift/index.html","49011a1d50ee755e04a1c043077aec46"],["/tags/Server/index.html","e2100d259a822863b72592c26ba89781"],["/tags/Session/index.html","8f7749515ecdee2fc52e30a67c73d9bb"],["/tags/Strings/index.html","27efa340799e456430f5e9fa9342ce46"],["/tags/Structs-and-Classes/index.html","64001431bc8742ae3ef1b29497e8ea9c"],["/tags/Structures/index.html","0f5b4944418152078bb0e8d765801e7f"],["/tags/Swift-5-0/index.html","6617d60a6dd7d74d6f5a34a326d88082"],["/tags/Swift-5-0/page/2/index.html","6886536e8668cefd210f3cb43fd4375a"],["/tags/Swift-5-0/page/3/index.html","10b69bd154f0bc17ff05f787111c5495"],["/tags/Swift-5-0/page/4/index.html","58ed650aff4a80799a23229fbb47ddc9"],["/tags/Swift-5-0/page/5/index.html","d42fecc36c9d875281637e518f9ae145"],["/tags/Swift-Apprentice/index.html","18c800d0ebd6185cb806c4aa88e93777"],["/tags/Swift-Apprentice/page/2/index.html","68a15319f23e2770dc995e9cacd71e05"],["/tags/Swift-Apprentice/page/3/index.html","084c3bfe1412e97150f4df95f95fc943"],["/tags/Swift-Package-Manager/index.html","b4a453568d5311d3461909b135e97424"],["/tags/Swift/index.html","6860b11ba0e3453c191836e66ebf53bd"],["/tags/Swift/page/10/index.html","e818335c556e563fafce3b04661414b0"],["/tags/Swift/page/11/index.html","19111715d869fc1e99a9c165baa96277"],["/tags/Swift/page/12/index.html","676b90ab3c1554531cc7a8b99c83affa"],["/tags/Swift/page/13/index.html","96ec57f8813c366adc97dd0e278e13ba"],["/tags/Swift/page/2/index.html","94fb89e7f44354a19d1d3ccaeeca01d2"],["/tags/Swift/page/3/index.html","cc29f7d27f2dc9638a60d582c212fe33"],["/tags/Swift/page/4/index.html","2016d656944c93aab1a58df59ab58a07"],["/tags/Swift/page/5/index.html","7261d42b9970fbfed69a39a351f7e3ad"],["/tags/Swift/page/6/index.html","7d4180a8a49b0b18e9bc8fb60a03db0c"],["/tags/Swift/page/7/index.html","f35904e3730072f9f36bc47989356613"],["/tags/Swift/page/8/index.html","42ce41cf7ee3752e9d7d2ef90e1ca3fc"],["/tags/Swift/page/9/index.html","402eedc21b96c89dfb357458bd4826f1"],["/tags/SwiftLint/index.html","04a42471a5271922af16c234f6198e08"],["/tags/SwiftUI/index.html","70503f46d299ad2d66919761494f1de2"],["/tags/UICollectionView/index.html","9c8db25e0a11ad47942a682d38137e57"],["/tags/UIColor/index.html","244189b53773f7aff3576ac53d505f4f"],["/tags/UIImagePickerController/index.html","7e5452ab3e0a2ff5766556ebe0347f20"],["/tags/UIKit/index.html","e9114c67616ea64d0f790867fee7d4a3"],["/tags/UIKit/page/2/index.html","66534cb62541a53037e29fe4d5e0a059"],["/tags/UIKit/page/3/index.html","073d6852bae883edde71e69074d74f27"],["/tags/UIKit/page/4/index.html","56d4669fdda8c60ad96cf3b800a954c3"],["/tags/UIKit/page/5/index.html","33dee0a8344d0c29425656be95117124"],["/tags/UITableView/index.html","67c23e883560b58f7d6ffd8d32380b5e"],["/tags/Ubuntu/index.html","0ad488466fd9a4b2b23e17f1d7cedb05"],["/tags/Uniquely-identifying-views/index.html","95bd53cc52d9b8d5ded2edde4bcb4c09"],["/tags/VIPER/index.html","99d97598fbc828d2cffa73a6963f1f09"],["/tags/VMware/index.html","38b248f60639b5ee6746e740d9af85c1"],["/tags/Vapor-4-0/index.html","4beace2db9ef7c131eb239a1ef955e43"],["/tags/Vapor-初探/index.html","c22a93be3d7b800bf0af802e92b6c1a1"],["/tags/Xcode/index.html","6d38e42da393a4450ec4db8a22e42f45"],["/tags/appleOS-Networking/index.html","a605e5d37d4681cd16f916853d3bc5b9"],["/tags/bugly/index.html","1f6ccb946a94632160b09c11af8472fe"],["/tags/enum/index.html","34167efca921b498d52113e900d30c6b"],["/tags/git/index.html","711a777de8750eba4c060d92359c7667"],["/tags/iCloud/index.html","810b4b2e8cdacd3aa2a7f7da3a58de47"],["/tags/iOS/index.html","806c45331f69f2ecc3d585b7d44d2835"],["/tags/iOS/page/10/index.html","ea4ab5ef19685c06ac00070848d92a68"],["/tags/iOS/page/11/index.html","f851b89779b3242a5a91f421264abf0c"],["/tags/iOS/page/12/index.html","498f4f66d45224a04cbfd6605b09e7ed"],["/tags/iOS/page/13/index.html","9ef16d4189678499e32971e5a43358d6"],["/tags/iOS/page/2/index.html","3a5abc88a1e6bfd50e75091668f27686"],["/tags/iOS/page/3/index.html","d595965a5bffc38b691b974de3b4065f"],["/tags/iOS/page/4/index.html","fb55b8df876a1c485c6f5873527248d3"],["/tags/iOS/page/5/index.html","0768f87543cf633ff6a2e8934d80d968"],["/tags/iOS/page/6/index.html","c45373d704b944ea2e6df688d2f9167d"],["/tags/iOS/page/7/index.html","7b642ea2a11938d857e52fcecb25b1f1"],["/tags/iOS/page/8/index.html","4376f0631e54a8367cd9f6cc48f3f7d9"],["/tags/iOS/page/9/index.html","e17fa4bc2a1f6c0df7422df981f2d8b6"],["/tags/iOS面试题/index.html","ae124b0d036396eb5f8822c52a307757"],["/tags/index.html","8882f9992a157d5c0ec7e537fd39d4d9"],["/tags/non-optional/index.html","8094bd57dc85001604e1c20915f04a17"],["/tags/random/index.html","4aea3a104a248c8b5a9197743f7f7bd4"],["/tags/transition/index.html","5276c34fd07d0eeadcc07a90e065559f"],["/tags/三方类库/index.html","a977464d6fcf2e35f487e42c41bb3a63"],["/tags/依赖注入设计模式/index.html","60c354f28e2b7bb61b272cd7b7f116d4"],["/tags/值类型和值语义/index.html","f40ecfea7b846e9e726caf550c7f620d"],["/tags/内存管理/index.html","a22b9da2e3140eec78084dda4cbfb755"],["/tags/冒烟测试与回归测试/index.html","31166ca316be01fd55440653a3fd1d22"],["/tags/函数式编程/index.html","b0ff8ca6dd027d4da395273c30364cff"],["/tags/创建博客数据库/index.html","a4d2f2bf0d8a5a84ee09060a58be619e"],["/tags/初始化模式/index.html","ef26ed5528feea0f085a467801de6da7"],["/tags/单例模式/index.html","151009073b2cb14182d9f199abd0cde3"],["/tags/原型设计模式/index.html","ad78b5bce746d7bf03c508f1b32e50b8"],["/tags/命令设计模式/index.html","9d0c110c802403228bced411c3d87ee2"],["/tags/基本控制流/index.html","65afb509b1d919357c6c19b8e4ad9521"],["/tags/外观设计模式/index.html","8b8dc0b974c159637b8b97649dfaf589"],["/tags/委托设计模式/index.html","04008e83b3555c8cf6e0c4fcf9dd7972"],["/tags/子类化样式/index.html","e69b26b595a54ddb9c89007eccb981a9"],["/tags/对象池设计模式/index.html","709996814cc26be6e55daafcc4c2d4d0"],["/tags/工厂方法设计模式/index.html","93916ece1f81fc283aa9714ed8a71e25"],["/tags/工厂模式/index.html","43fc35b2f97582aacd9833864adef7bd"],["/tags/工厂设计模式/index.html","e48217152fca2fe1750db8a61dfc43b2"],["/tags/开发记录/index.html","fdbfa27654c4c33e64d59c4204ccf39c"],["/tags/懒加载模式/index.html","c4377027f79d63de1aa8a8ad3274053d"],["/tags/技术支持/index.html","58adeba03ab33f355667208010f48eb0"],["/tags/抽象工厂设计模式/index.html","6bc6c756b955f9b9ed6b8a3d4e47744d"],["/tags/构造函数/index.html","06a9319655affcf7c41ed4620693643c"],["/tags/架构设计/index.html","a4aa5752225a2cde1d67bfd86ea49163"],["/tags/模式匹配/index.html","43255e1335a5c96e02bd93f5f4ff3eb3"],["/tags/生成器模式/index.html","71d0973a65805fd324f9d5a606b14f17"],["/tags/用户体验/index.html","766377df375cb6c586f514f2e4d92045"],["/tags/用户协议与隐私政策/index.html","399a5e2755f23284852d12c62437774d"],["/tags/类型与操作/index.html","aa181679b8beebb2e636cdec4bf3cb78"],["/tags/自动化布局/index.html","13d6f040ad5478f02cc29eec52922cc0"],["/tags/自定义UIView/index.html","c034e5bd5850c0fd6221af053b74eb87"],["/tags/自定义转场/index.html","07984f13531437dc633025e44b033b75"],["/tags/自适应布局/index.html","d84856cae28990592456d54eef471335"],["/tags/表达式、变量和常量/index.html","781fec81ecc4dd0b29af7a8db3fb5011"],["/tags/设计模式/index.html","4bdbd914608b621db56e72f717c02f1f"],["/tags/设计模式/page/2/index.html","b41efeac34b80efd76d6cad7198f06ae"],["/tags/设计模式/page/3/index.html","35974bfb493712bd4b1ab42dbf07d5c3"],["/tags/访问控制和代码组织/index.html","383fc8c2e2ca897b23fa46e202ac68ef"],["/tags/运算符，下标和键路径/index.html","6d8f365d1db408d431688ef40564d52b"],["/tags/迭代器设计模式/index.html","4efb5eab9497cc75bf5b9d1a83344340"],["/tags/适配器设计模式/index.html","827028e3c499d1ed05fece101fc06ac7"],["/tags/错误处理/index.html","a4d7cc4e8624995acaddbefb21707cde"],["/tags/静态工厂方法/index.html","f7a8b458d4bcbe8404a07d64202089d2"],["/tags/面向协议编程-OOP/index.html","fcc7148005ee77dff63a3ed19ecf3dbc"],["/tags/高级主题/index.html","62d6c51d74621b9c0d61f5917c5d1047"],["/tags/高级协议和泛型/index.html","a205d2e72983747d18c4476164252036"],["/tags/高级控制流/index.html","541d29e9915ffbfd5b5231511e346caf"],["/为iOS应用构建输入表单/index.html","5e25e4d363da581c1e65c54f4c47aeed"],["/产品开发的幕后花絮/index.html","6af2688283c18acd3fc8a7cdfdc013d6"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e998e1756fd6e61cfbc42be1b47e0db4"],["/冒烟测试与回归测试/index.html","f9f3f1622b32dbba62dcfe5c9555e0bd"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","df9c3db3125373ded5f10da3c57267e7"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","44d156524d14064f26aa57b191fbcead"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9afe2ca2c220bdd7e8811b078cec2284"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","5e483bd92978539213ffe427297fc1ba"],["/在Swift中创建自定义集合/index.html","a471e15db21b0fac2e67824525560526"],["/在Swift中处理非可选选项/index.html","6ad895f9d173abfc6f32a5851189d66d"],["/在Swift中生成随机数/index.html","55951f74614487bc53372d81c80244b2"],["/在Swift中重构单例模式用法/index.html","6dcf0d934e67f7ce7af7c65f31feae54"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","1954135ed45b8c518ad4164579a750c6"],["/如何为VIPER编写服务？/index.html","0f2147ced8f642f2c34ae7fce6d10dd3"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5946d95af9d5887a1a6603e0da64cd35"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","124820185fa8de84cc18ae7ff3726009"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","dd59506598ba2f5cd41aa3dbf1d78e4e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","6a83e81e039e6b4375c54f684cf5b449"],["/掌握VIPER架构/index.html","9ee2608a4b18e17ab201a0ca6d5e64e6"],["/揭秘 WordPress Hook 系统/index.html","a1bd3902c667080058a65427eb1d73b1"],["/比较工厂设计模式/index.html","145ef620005190166ae53ba29e027b3b"],["/深入了解Swift中的Grand Central Dispatch/index.html","effdfbf973fc9ea9ed6672b43cd17a49"],["/深入研究Swift框架/index.html","2225b203a1c44c50d022446f16d96862"],["/美豫直聘技术支持/index.html","86678342ad0d237315d23cf5ea8ae95c"],["/美豫直聘用户协议与隐私政策/index.html","609a72fafc1e74112b388e69eef647f8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","eb7b66670a350c1ad7eaebc2946fa19c"],["/选择Swift而不是Objective-C的5个理由/index.html","d1646615c09a41a20bcbe71fa27a5add"]];
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
