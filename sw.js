/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6c0b309ae03e466ab5128b727a642fd1"],["/2020年iOS面试题总结(三)/index.html","77bfe5e801929e662bc9ef0bfa5c01d4"],["/2020年iOS面试题总结(二)/index.html","454a8114786ab1c6c1a449ef56d9dbf3"],["/Advanced Swift系列(一): Swift 简介/index.html","a468da831c9d11bf0b3007b2a2cb3394"],["/Advanced Swift系列(七): Strings/index.html","093bd5730a3e611b0364f991d230a7cd"],["/Advanced Swift系列(三):  Optionals/index.html","dfcd967aa2dd25854e0a1b69379d624b"],["/Advanced Swift系列(九): Protocols/index.html","4a4192b8ffd2bcb5025c01022e813e46"],["/Advanced Swift系列(二): Build-in Collections/index.html","ec7dace215508b59373bd86eac3ae5db"],["/Advanced Swift系列(五): Structs and Classes/index.html","cd2e961ddf2fd5e33eafcbb72eeb3be3"],["/Advanced Swift系列(八): Generics/index.html","ce28d8413c507deef22cea2f7aa3d46c"],["/Advanced Swift系列(六):  Enums/index.html","724835f683545a01a98c3e2576cd4b8d"],["/Advanced Swift系列(十): Collection Protocols/index.html","a29f9fa43ec7c58e45ad2730f53c5884"],["/Advanced Swift系列(十一): Error Handling/index.html","2e0443e4a5b2bdffa5d0040ced225f77"],["/Advanced Swift系列(十三): Interoperability/index.html","0f34169b2d8e6c273f48c43119015162"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","77cc71417b82d4700db01c012e282924"],["/Advanced Swift系列(四):  Functions/index.html","31b3a58c71d6c3a256d287018dc392a4"],["/App Architecture系列(一):  简介/index.html","62c7a3e70a70005640761ea943dc138a"],["/Functional Swift 初探/index.html","1dc3a3a784484d54497254fd807d4349"],["/Git 使用小技巧/index.html","54eba947e1debcb849cd5a93567b684b"],["/Go 基本语法初探(一)/index.html","bed60f332d023f42664ad9e3d31fa8aa"],["/NSCODER和SWIFT初始化/index.html","b48efb1d9314b161e883492b78206257"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","b5d54ede4e69320249b7641697f52bfa"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","3565412cc22008311eb7f960fa0886bb"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","ad6b58391f5f73ca5e4e863c28144dc6"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c73c8318f5080a0faaea1276ae09631e"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","dd01a11dad5a2c30a231e41253708f81"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3ff25c04a425298bce2f26aaba68de62"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","268678a7822cbf9695c7e29068cfa1eb"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","ef2caca8eeaef2e3f62b593c17416688"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","01b997872ba861eb649f4568e62e97d0"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d5da8865959957efb48869750e81407f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","0d6b9de6a4705c9a29cb256e286e1e11"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","f098119d278832f2da0209aba2fdced1"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","39e16f8a039fb2f2f6620773c5adca7a"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","1d041421c4ab1132f1c897844c8e15e2"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","cad64ce01b3a24e73065e13fc8116133"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","d1c54399bc43c30f0e3b8bdf0efaa23d"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","18fb1907335488db0c452cb8c893d211"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","fba302ff880d6c23037e601ea1ebff0a"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","54bcf70d4d7062d57a963a93501ffe80"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","b45da5e4b67f367843aee4a41c64f0c6"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","13fd5fcbbc31dbd8e5c7ef3640c4dc81"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","8a30fafe5931cce6e53abddba35f3b5d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","c15c26598584d802f4002975b505ef1c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","dd8f9d3068c54b009ccc439318ebb43f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","2972f659317162aa3425e528cdfb7efd"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7997ea858154e691150e8656ba74ffb7"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","365cd9a5fe0efdf37633337b6d3b84b8"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","b0311198722ff5bb84a9f2d4fab5545c"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","7609b2c3d5d4d4ccc4f46db54e3e7f2b"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","5a3b142dd5f1eedfe8afd13772dbb49c"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","751472742cec94538e392e0cdcf55c37"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","9121eb7941833b3441c6d455014d310e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","8173a2aaa9fea716e00bed9ff046d381"],["/Swift CompactMap vs flatMap：差异说明/index.html","3805eb07a3078afb45ccb7267547532f"],["/Swift Grand Central Dispatch 深入实践/index.html","4d1a0999a560e42848cc34982cb11416"],["/Swift Lazy属性初始化/index.html","99249da1bb4f9f2f5b7becd9dcbb33c4"],["/Swift Promises 初体验/index.html","76afa529acc1456100356cf1a88c6538"],["/Swift Promises 探究/index.html","f07e3a58d4483b8d10418d06cd69c078"],["/Swift UICollectionView使用指南/index.html","05bc10e12e07190443c15e8780297d0d"],["/Swift URLSession && Combine framework/index.html","816fd207ceed1e5a3c0a97c23230ef73"],["/Swift 唯一识别的视图/index.html","8aa7161d5ac6161b12b4a385ed1cd0b5"],["/Swift 如何学习现代UIKit？/index.html","c9402abb440e9ca7c86a36f94a66f52b"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","676f5dd4b67ffab9ee78fe436896ebc1"],["/Swift 用 compactMap 替换 flatMap/index.html","d54e6713d9d7090aadbaa8bc9bce7b1e"],["/Swift 选择和播放视频/index.html","1303c43abd68ea88077d4a3a9838f094"],["/Swift中UIColor最佳实践/index.html","f10ba4b84b312b257e5002a6128b4cb4"],["/Swift中快速简单的工厂设计模式/index.html","6c084ae4685b4c0b2cb7d106fdf16419"],["/Swift中构造函数与静态工厂方法的比较/index.html","54911c3f40907658bae92869f8f84617"],["/Swift中的UITableView教程/index.html","d756a5b9b50c899f8025ef7859a31997"],["/Swift中的懒加载模式/index.html","9af1a86778e382f6dfc7e292fd99b1ce"],["/Swift中的模块和挂钩/index.html","ec6907ca298d18012a5408fa54746ff3"],["/Swift使用布局锚点添加约束/index.html","2e26d387d553164ef26a2afc07d4fff4"],["/Swift依赖注入设计模式/index.html","23319e71081859955b209978265add38"],["/Swift关于Dependency Injection (DI)/index.html","792a8f2b039b3dfff874f05fb9097cc8"],["/Swift初始化模式/index.html","9d44e397756bdfa1f135e51f9c269058"],["/Swift单例模式/index.html","1c9e4fb20c564ef58b1b806d227bf7f6"],["/Swift原型设计模式/index.html","950049678bb70944dc060ed832d713eb"],["/Swift命令设计模式/index.html","6203a3c2a8235cb137ba97acb514cd5d"],["/Swift外观设计模式/index.html","3fab15dd8b06a95be1929b91aa90df3b"],["/Swift委托设计模式/index.html","74170c98cb05202f42b399aee7cc82ad"],["/Swift对象池设计模式/index.html","92d116f354461fb94dd992c6c4517328"],["/Swift工厂方法设计模式/index.html","10400e7acffeb1852ffb5af94be587b6"],["/Swift带闭包的懒惰初始化/index.html","09e6cdce4770f751f5a7b79b33624f89"],["/Swift抽象工厂设计模式/index.html","9fcd16a82da1c9a2ff490f8910091481"],["/Swift掌握iOS自动布局锚点/index.html","308a0d4880f874e5e77f4e30851ca45d"],["/Swift支持旋转的自适应单元格/index.html","26159d5e2becba2aed41639920e006df"],["/Swift枚举值/index.html","8cd0d44621b4daca768fba9569bbd2ab"],["/Swift生成器模式/index.html","56ff5fa7394d5e2ccef7f710e4baf2fa"],["/Swift结合Xib文件自定义UIView/index.html","3bdad961d5024d0c26d43485485b0c97"],["/Swift编写的20个iOS库(一)/index.html","60362006c05a35e4ca034abb3f53d7a8"],["/Swift迭代器设计模式/index.html","a076b31b5b4fdbfd08b491bfcfd9083c"],["/Swift适配器设计模式/index.html","62619983956a12383a4e4d5ec6b8baea"],["/Swift静态工厂设计模式/index.html","4376e49217ff451bc779dbfd61673aff"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e251981045365d36f1b5ba949c22ec84"],["/UICollectionView data source and delegates/index.html","c1e7f311ef985dfadf042fc092c7d466"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b462add56f983926c35509a5cd939742"],["/UIKit初始化模式/index.html","7b53495e34b1341b7d38806635187228"],["/Ubuntu18.04替换国内源/index.html","e2709719f31c6a21b64647c780b55832"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","41915d0718369abf939012c4ca7ceed1"],["/Vapor系列 (一) :  Vapor 初探/index.html","51840ddb2b4444588c231c05fa1f1f4e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","3d646e9f7f21ca791657172f7853ae19"],["/Vapor系列 (二) :  Hello Vapor！/index.html","03765042138f01f5c3ff32697eb08879"],["/Vapor系列 (五) :  使用session进行authentication/index.html","f3d356f8aa20e8dfa3a77ac2ba3040be"],["/Vapor系列 (四) :  创建博客数据库/index.html","df0cdf1c8ef3d81300570ba31293193e"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8c993b0d769873ce788d699ae1d3f5dd"],["/Xcode扩展/index.html","e28e8230142b274329265c668e1edad9"],["/about/index.html","89eef3a80e47793c77e77cab14206bbd"],["/appleOS的Networking示例/index.html","605e97ca00efa868491d49d9ee0e4164"],["/archives/2020/03/index.html","841c4222cf7f7d5785de335bef9e9cbd"],["/archives/2020/04/index.html","f028cb4a6228ebb803a7b45a9d15a3be"],["/archives/2020/04/page/2/index.html","b52815455b4583906cafd40ae7cf488c"],["/archives/2020/04/page/3/index.html","441ff25fc249b9f6c62444d6af55c890"],["/archives/2020/04/page/4/index.html","42ed310b98fd1d43b335757e9139113f"],["/archives/2020/04/page/5/index.html","a70b92068be1e24b3275546ba0bb9d9f"],["/archives/2020/04/page/6/index.html","ab5579deb6dbed0dd552e5bb6c803c2f"],["/archives/2020/04/page/7/index.html","5370374bbd1b6d0a7f962f5cb711a2d6"],["/archives/2020/04/page/8/index.html","3e32dc413171c9cfe03c8660f8ebde02"],["/archives/2020/05/index.html","cdf8d6f93e970850639355b6d5a7e9a1"],["/archives/2020/05/page/2/index.html","ac0aec418e6a7b7c7bc6f31270383f1b"],["/archives/2020/05/page/3/index.html","93df88ccef665d669810cd7316131b76"],["/archives/2020/05/page/4/index.html","8bbaec249ada91350a75b3dcb481f760"],["/archives/2020/05/page/5/index.html","44c41c39469f5029b62dac585471f68c"],["/archives/2020/06/index.html","19bb6e073a3a6a8e692333495669b9f9"],["/archives/2020/06/page/2/index.html","32d75f9ed40314e9c32efdb2a6414a1f"],["/archives/2020/08/index.html","a338ff9d980650ead83702307643e029"],["/archives/2020/09/index.html","ba4579a4c0c40ad5de6c22c6b84cb69f"],["/archives/2020/10/index.html","d4cc2ee25358e2ea11bb8d8f9b58f0d5"],["/archives/2020/11/index.html","86ba9ffdac67620bf360dc94d3e9587b"],["/archives/2020/12/index.html","78f5ae7a8355675d16d03a60c3d27a16"],["/archives/2020/index.html","1ef263ccc99c9addeba64efed3c99c30"],["/archives/2020/page/10/index.html","2a5975e631a755589c157c37be9648e9"],["/archives/2020/page/11/index.html","925adc7d9fd78ee4d3b773cbdc5cf601"],["/archives/2020/page/12/index.html","32c9f7ea26468b02a19557e145e73e2c"],["/archives/2020/page/13/index.html","c6cd99fe0b11129fa3a1b0c185626dc3"],["/archives/2020/page/14/index.html","08a721290417c9e9a6ad28d9d0e1eb7c"],["/archives/2020/page/15/index.html","9e1ef75485d9d2c573df2fe906c4dc81"],["/archives/2020/page/2/index.html","25a80806a840b2136a1b4b68ac0956de"],["/archives/2020/page/3/index.html","c077e679918c3f0769e1aa2611dd5fd4"],["/archives/2020/page/4/index.html","33471d10e3baf614713efd24a05a1309"],["/archives/2020/page/5/index.html","b653ce90005af891c68aead44214f822"],["/archives/2020/page/6/index.html","faa40f239f4e709b505dd257eeca58fa"],["/archives/2020/page/7/index.html","5077d016d4d0c59fe6c378e2829949ae"],["/archives/2020/page/8/index.html","a6aa9c7ac6efd52413992c8ea329e6a9"],["/archives/2020/page/9/index.html","59a2a1cab01f7adf16b721dec2a3caae"],["/archives/index.html","4bc0412c49b5815aed76d483d178a681"],["/archives/page/10/index.html","9218f4a61acd3546f5c4e3140f84491e"],["/archives/page/11/index.html","d4c480e32be7b641d00f08f79a89b0f8"],["/archives/page/12/index.html","0c4d10d6411a3914d62f6678bb433809"],["/archives/page/13/index.html","6ac7a6db11d892bc7db8a451e49c0946"],["/archives/page/14/index.html","553232694fa718d6ba7cd062475351e4"],["/archives/page/15/index.html","74da33b17c790dd71ae712580856d833"],["/archives/page/2/index.html","39c884c32e9c9ad2f04999c99b82188e"],["/archives/page/3/index.html","fd2b85bdfb868198e1a50ed946ee2a0c"],["/archives/page/4/index.html","f885cc2384fa856453c4bb3f7c673f76"],["/archives/page/5/index.html","01d7aafaf00065951a77c06eef2e38c3"],["/archives/page/6/index.html","82d95d18f6e49fb2da1f8e9b8d08b38b"],["/archives/page/7/index.html","e270e39872f7c8af88aba48a91b4fce8"],["/archives/page/8/index.html","aa428bb8962946bbf0a3e7ff6dc76e69"],["/archives/page/9/index.html","372e3d2d4c796c20d3d7c6e4dcea575b"],["/bugly 上传dYSM文件小记/index.html","7919b37ea6f57d4eeb8b5dcc9bb9f9dc"],["/categories/Advanced-Swift/index.html","d3c019f5cf5dfcfbf68906c88b9ccb8e"],["/categories/Advanced-Swift/page/2/index.html","33466164f42c4bbdd19918a0e01add01"],["/categories/App-Architecture/index.html","f8c2a1518a7d0453ab231eec72380ae7"],["/categories/Array/index.html","c55394e823a0c3dd95b7f2dd8cd5cb41"],["/categories/Codable-protocol/index.html","d6599b67c10f6c31dd1bee5b4238681a"],["/categories/Combine-framework/index.html","047f740f8fc15b8a8425f78ee457db2c"],["/categories/Combine/index.html","8d6cd20f86f6e8ae6b2fb93c17959788"],["/categories/Go/index.html","9db37bf7f852034b25b49e4633ed94f9"],["/categories/Grand-Central-Dispatch/index.html","b3d2a19b3865efadbb7589ad6b5acdaa"],["/categories/Hexo/index.html","ca7f2cb8035762db3b29c6041a293452"],["/categories/Homebrew/index.html","e89c7667dbbc1b841e31afe4b5d10fa0"],["/categories/Promises/index.html","54df4e116f258f9e8da48d27bbc9e2ca"],["/categories/Result-Type/index.html","e92be353e3fa93b069a1cef78bfd9a96"],["/categories/RxSwift/index.html","4f2b1516d83f53076c848f7b8b0c9fa0"],["/categories/Server/index.html","037ac52c698aa22923cc69e66d9176a9"],["/categories/Swift-Apprentice/index.html","8d421897d5c60b2f3e33111f799be4da"],["/categories/Swift-Apprentice/page/2/index.html","1982a5f63908da96ccf411c5410d2dc3"],["/categories/Swift-Apprentice/page/3/index.html","4ff9b8d7d013355cc086942778a8b3f0"],["/categories/Swift-源码阅读/index.html","5d08d48ea3cca4746100c8aa0fed657d"],["/categories/Swift/index.html","75b85ae7d1ddbfc2730dca13f853a2fe"],["/categories/Swift/page/10/index.html","02dafef19af9ee1ddda1e4904735be19"],["/categories/Swift/page/11/index.html","9c404fbf42adaf42bd401cc7e67189a7"],["/categories/Swift/page/12/index.html","bd67c63a06e198fa4234f162f6e0204f"],["/categories/Swift/page/13/index.html","5a3fcc3e40960e77312de15a25cdad5a"],["/categories/Swift/page/2/index.html","697d8e414ed41b728b8e6c3a7ed8e555"],["/categories/Swift/page/3/index.html","581b1c6e5652e8d08119ef2a23f701f6"],["/categories/Swift/page/4/index.html","dc94e8efafd2c5d0ef4c11f2e8e60697"],["/categories/Swift/page/5/index.html","3fb4c627da09871c01fd06c15b6cd374"],["/categories/Swift/page/6/index.html","7fa249501ddaab7f707645fee6df24ed"],["/categories/Swift/page/7/index.html","fa02439524cfaafb4fc35a7da97b4f0e"],["/categories/Swift/page/8/index.html","1a623f017fac48b58e12786db179ee11"],["/categories/Swift/page/9/index.html","c8dd1284e8dd5603513a57527dbe78b9"],["/categories/Swift5-2/index.html","1fa530f0868a2a3b21215c278de29125"],["/categories/SwiftLint/index.html","767420d46ee65c3cfdd150cc77e07b69"],["/categories/SwiftUI/index.html","178ae19ae5d607c7502826d221f13cd8"],["/categories/UICollectionView/index.html","ed662c1f0b95edd081ad8d25f51874e5"],["/categories/UIImagePickerController/index.html","8a34adba1867535a1e20cbd19859c6a5"],["/categories/UIKit/index.html","a414832c847f1dd75abe6aa96c8c15a8"],["/categories/UIKit/page/2/index.html","c54bbb7b035e64fb27d0904421c3dc7e"],["/categories/UIKit/page/3/index.html","288e801109c90aa8ca73a0b6633e6934"],["/categories/UIKit/page/4/index.html","a3df1704720c4cf9ff99276e6efbaec5"],["/categories/UIKit/page/5/index.html","0b39ef50171214a9eb04628fcf2896e3"],["/categories/UITableView/index.html","416bb876ed63a2b227a25abd3f23b1ab"],["/categories/Ubuntu18-04/index.html","427ddaaa017055d07d00e254fe2c0914"],["/categories/Ubuntu软件源/index.html","a397676029c80d5152f021cfb25b80c8"],["/categories/Uniquely-identifying-views/index.html","c3c952a30f3fc416a1f35ebdc4d6f75c"],["/categories/VIPER/index.html","4d9c03f25ef9580deebd124614ff439e"],["/categories/Vapor-4-0/index.html","5337bc9abece057b7a2dc04a7efc673f"],["/categories/Vapor4-0/index.html","bf03142239f590a87862f4403fef82a7"],["/categories/Xcode/index.html","4cdea98b1444c9ce34e2bcb669e9c5c3"],["/categories/appleOS-Networking/index.html","db71e99319eca724b9332ad2d3e60304"],["/categories/bugly/index.html","694490974a57f5b40a6372bbf1d47c4a"],["/categories/enum/index.html","445779dc42eee6d05880247e059065c1"],["/categories/git/index.html","05fd3710abaecc317df26ce5105aabe7"],["/categories/iCloud/index.html","21ad9009d84c236184864280d1dd69c7"],["/categories/iOS/index.html","721ebfb3da0f5bc7e0e527ac3945fef2"],["/categories/iOS/page/10/index.html","03f9272d88f9a370dae18031a443ff89"],["/categories/iOS/page/11/index.html","9df1714944073b3bb3186819967c21a8"],["/categories/iOS/page/12/index.html","78a3482087b7915de2fcd5520730495c"],["/categories/iOS/page/13/index.html","b61f4b34c3c420495cde9735e4a5bb35"],["/categories/iOS/page/2/index.html","5654dbd9a5bec50ed59cdcf83424430d"],["/categories/iOS/page/3/index.html","bd322e18d40e585d298d2a7fc99d1513"],["/categories/iOS/page/4/index.html","c11f0fd09beeb3bc024484e98f440687"],["/categories/iOS/page/5/index.html","de3e757d1a8b66c489565b4177cb97de"],["/categories/iOS/page/6/index.html","774c271c51d4590dd1318317a6a81217"],["/categories/iOS/page/7/index.html","ec315aede1e7352d7c00e084411d2620"],["/categories/iOS/page/8/index.html","fc07853526f3dc5bce63b446e70389a6"],["/categories/iOS/page/9/index.html","d1cac6f525190a72cd5238b80f67082e"],["/categories/iOS面试题/index.html","1db39d8f497d92d9f240765f120cf5e0"],["/categories/index.html","fca3b5e63c5a5456fddc70cb086f04ee"],["/categories/random/index.html","e31baacba37d1f51f887da4521b6d82a"],["/categories/三方类库/index.html","a15b9c4d93a33f74e59bf92f470447e6"],["/categories/函数式编程/index.html","dbfa62002131ffd2f1a5e0e419b3aac5"],["/categories/子类化样式/index.html","77c21f890adaeeb4c59b1c375d04d60d"],["/categories/开发记录/index.html","6e3074dd4a25c189af1b4adb07d1df51"],["/categories/技术支持/index.html","93c356dfca7838b28597535552d99009"],["/categories/架构设计/index.html","db1bfe8411e0ed0b6b42c4c2d95f3fd6"],["/categories/测试/index.html","615067a999c88e44fd904fac4ca2a922"],["/categories/用户体验/index.html","fb528c7dd4281ef34c5665134ae46b8b"],["/categories/用户协议与隐私政策/index.html","81a2f73517dae1b0efbbc30d3369f2c9"],["/categories/设计模式/index.html","8e4c65ab09b868aa6b6087ae75eb2ba3"],["/categories/设计模式/page/2/index.html","964e22f1a98a90bc3edd2997bfde41b7"],["/categories/设计模式/page/3/index.html","cb60b3d6763ee41f7b2a9bb8fcc1a932"],["/css/main.css","7cd8b008e4f27e3896eef71d0367f636"],["/hello-world/index.html","184c561ba863a05ea318113b2079c81a"],["/iOS VIPER架构深入实践/index.html","116e7c4327bec3f1474bc5f568bd3174"],["/iOS 自定义视图，输入表单和错误提示/index.html","342176ee02c345cfe2bbdcb1c8d15039"],["/iOS如何使用iCloud文档？/index.html","777be1a3780d6853b067a4d0e21aadf3"],["/iOS子类化样式/index.html","31cebe06ab915ee82ab3963111ff0c2d"],["/iOS开发记录<一>/index.html","ccab95813df3fba1f7e528548286e899"],["/iOS自动化布局编程/index.html","39a3bef52e42a0384f552315799f0de6"],["/iOS自定义转场(By Swift)/index.html","b71fc131c79bd9bedcf0889720b12bdd"],["/iOS项目架构：使用VIPER/index.html","29587dec642ac30e6f1d790482ce93aa"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ade83dd537782c7df6b50f1f31b3492f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","c12b5c82d3c6f496c78d409c4978263e"],["/page/10/index.html","136231c8527a02d497d57bbe66c4bb12"],["/page/11/index.html","d365465846235df80d1061a2571afec5"],["/page/12/index.html","5381dd9a64a7a2ea1ab4d26eaa0f194e"],["/page/13/index.html","77c00d7d5a25c3d005dbec661994b5f4"],["/page/14/index.html","8567db6a037b33acdc96d61dbee427dd"],["/page/15/index.html","afee6a6506ff7bb99ff56c7e67019be6"],["/page/2/index.html","5c2f31bddeba53296fb0c994b7ac0154"],["/page/3/index.html","2444c41913bdb98f9c3d6fafe49218db"],["/page/4/index.html","f9cedb55ad1ea6726202a690a2a617e8"],["/page/5/index.html","31c92101278e005b174d247cd00c4e55"],["/page/6/index.html","e033b04cc79679f5e8cce81b1e50e0a6"],["/page/7/index.html","f66ea77ef14ebddab7b5ea478f1d9392"],["/page/8/index.html","d48ffea0f1922709409bacc46fb15865"],["/page/9/index.html","8398f70e60363e414082efcfcdedfcd9"],["/schedule/index.html","7c69ed8e440c566c4793af96915dcec2"],["/storyAppPrivacy/index.html","ab1711cf9e6e77bc2688d4afe18bc2a4"],["/sw-register.js","2e0a272f228217f8675fce17b64dbcdf"],["/tags/Advanced-Classes/index.html","4096623d343b902f7d1db25097e41d6d"],["/tags/Advanced-Swift/index.html","39b078934d24516ae4e07d7e2b22b923"],["/tags/Advanced-Swift/page/2/index.html","552bd9cbf8d873946c92707201dcf2c5"],["/tags/App-Architecture/index.html","4950a5474360eace771d2e7beb2e6fb2"],["/tags/Array/index.html","06ced647fdf60a48071ac2cbe9387e0f"],["/tags/Arrays-Dictionaries-Sets/index.html","fab955a737f8d932113d509ad155c165"],["/tags/Authentication/index.html","2b41cea390369663c3d93241d6bc99ae"],["/tags/Build-in-Collections/index.html","46b098830327c57935844240bca819a0"],["/tags/Building-Your-Own-Types/index.html","7480ff5bea7832756b3ab7364c0bffaf"],["/tags/CMS/index.html","59587d4078aa95a33f68fce94b46b62f"],["/tags/Classes/index.html","7c06c979da837d35031dccc0d7513b74"],["/tags/Codable-protocol/index.html","3116fad35c61654f2c397551738ee573"],["/tags/Collection-Iteration-with-Closures/index.html","7e8881dab60cd0b61f80b9778ea6dc0d"],["/tags/Collection-Protocols/index.html","d40efb2c6549864beaec718b5a9b5eaa"],["/tags/Collection-Types/index.html","bab7de26f00d8cebe79e4bffe1c60cf7"],["/tags/Collection/index.html","df90edecc8cd6468bb8975937695c5ad"],["/tags/Collections/index.html","bdf863c61ae1212fc555ac631881baa7"],["/tags/Combine-framework/index.html","7d4a4b8605f15765d7a822c75213053c"],["/tags/Combine/index.html","8d21b721f94c4a2ee950273dcfadec43"],["/tags/Dependency-Injection/index.html","58f7bb11d9c302bc2dc06c6dff5ee677"],["/tags/Encoding-Decoding-Types/index.html","1e5cf5d24bbb0f38b248c0eab7e6619e"],["/tags/Encoding-and-Decoding/index.html","f78f3c94962182810260ce046db85627"],["/tags/Enumerations/index.html","7a7058d632e12e7e1c4bf2c7346be91c"],["/tags/Enums/index.html","819c3c0779cd2a99bc70c3f6d7584a23"],["/tags/Error-Handling/index.html","836a651f41f07cf5b55b50dabb64cf54"],["/tags/Functions/index.html","41052ec921e8d2378c532bf790e832a5"],["/tags/Generics/index.html","3951b8bea7d83e44bb9f52a2d7c441db"],["/tags/Go/index.html","5e613b195e786a9e80bd2320b4e6b899"],["/tags/Grand-Central-Dispatch/index.html","8d2a3560b35d4918ae19793a83715af2"],["/tags/Hello-Vapor/index.html","0060feec8f66f8444a7b5545ed48e927"],["/tags/Homebrew/index.html","46628aeae230fe6e4a529a65c8cbc882"],["/tags/Interoperability/index.html","1af8db6fe6f881fdf6ad70b10f0a039c"],["/tags/Introduction/index.html","95373501c01546e8fe2d12efdee7268b"],["/tags/Leaf/index.html","3225f3e74e33118bf83c3a5b03eeabb8"],["/tags/Methods/index.html","9e5f5d32749a112fd8a96775af056d71"],["/tags/Modules-And-Hooks/index.html","896147c0b9cc471a65adb46024cb56b2"],["/tags/Optionals/index.html","3ffc796becb9a90294881bd0bfe0b030"],["/tags/Promises/index.html","531a8d8a0b6e1cfee58069b663b5aae1"],["/tags/Properties/index.html","332cc32540fba3d9e08fdc24cde1d3fe"],["/tags/Protocols/index.html","5121b0966f9a8589c9f1804dbeaead6c"],["/tags/Result-Type/index.html","4212341c61623206485854309fb7e867"],["/tags/RxSwift/index.html","126b2ada6034468f4e48b9bfb9b455ec"],["/tags/Server/index.html","7cf8a86a45200734313734a0db299e93"],["/tags/Session/index.html","22ba3da33323be1919de6fc9b0ba4a7a"],["/tags/Strings/index.html","3fb8e639c059ceceefb749093cb4c2e0"],["/tags/Structs-and-Classes/index.html","3479658410f8d765bbf09853a10d225e"],["/tags/Structures/index.html","034be5e421aed082a469f17f94b018db"],["/tags/Swift-5-0/index.html","736368cb30d5dd01f6c287510dc1dd96"],["/tags/Swift-5-0/page/2/index.html","799b7b180fad167caac6ee943abc3711"],["/tags/Swift-5-0/page/3/index.html","4001bba962fbef7858ceab2615e0ed96"],["/tags/Swift-5-0/page/4/index.html","52c2653b89602ee7e145035ad0da5701"],["/tags/Swift-5-0/page/5/index.html","15b5c9de44e23cf675ce9e903e151ac9"],["/tags/Swift-Apprentice/index.html","94f5e0fbc8a0aac51033e50ebbc1cd83"],["/tags/Swift-Apprentice/page/2/index.html","fef28bbf7536ab706b546ed5437c69ea"],["/tags/Swift-Apprentice/page/3/index.html","e7f421de683722ede042e2700e7dde40"],["/tags/Swift-Package-Manager/index.html","bc01f3653ec4d657aee6ec22115f857a"],["/tags/Swift-源码阅读/index.html","6a16245e56105ab0a12d98d80be24505"],["/tags/Swift/index.html","9508a874b55df1985eb6f3524db6dd1a"],["/tags/Swift/page/10/index.html","f0d02752f7d2d5b869f12c4c214d938e"],["/tags/Swift/page/11/index.html","fa4b86a2414b49ef1889e0d3a202dcc0"],["/tags/Swift/page/12/index.html","1a6dcfe246464f52177188c472017965"],["/tags/Swift/page/13/index.html","f6452e60d49343a9d44ea0561bd35798"],["/tags/Swift/page/2/index.html","76aecad94f4868b0073b36d1f042ae92"],["/tags/Swift/page/3/index.html","9ea1d35236d89aaec162cbf46c4e744e"],["/tags/Swift/page/4/index.html","6923e7ff414d4cd35f9ea2cacc2a04d5"],["/tags/Swift/page/5/index.html","d62bdbb73ce08b5f3cff41820eba7b7c"],["/tags/Swift/page/6/index.html","7e48dd60b8b917d1b3887efc4303712c"],["/tags/Swift/page/7/index.html","880900130e3c22626096ba574979593b"],["/tags/Swift/page/8/index.html","4617e19e45aa25ba635ffd2a6aca4cc9"],["/tags/Swift/page/9/index.html","d67217eacaf76f6933020ec867247e03"],["/tags/SwiftLint/index.html","dbf485a1fdf4ac3f82634ea12a7afa43"],["/tags/SwiftUI/index.html","82caedee3c48fc8cc3e82780aa49f438"],["/tags/UICollectionView/index.html","4f2b1ba174d37fc1a0e7833a304e3a0d"],["/tags/UIColor/index.html","add5c7616764942634b02b347e8aead1"],["/tags/UIImagePickerController/index.html","5b35464a595eeee8cea4f3049e08564c"],["/tags/UIKit/index.html","e488ce2012be5de01442654581fe88ac"],["/tags/UIKit/page/2/index.html","4d2609f521ab0571a0996a166ff4dbdf"],["/tags/UIKit/page/3/index.html","ef7f1a17830f87c1870ea07e70852f74"],["/tags/UIKit/page/4/index.html","cf1b9d8addcf1eadb081df5f51762d43"],["/tags/UIKit/page/5/index.html","d15586dcaa3329d73b93305464cf9132"],["/tags/UITableView/index.html","b8f59831a2b17f19f858a67d7bed5186"],["/tags/Ubuntu/index.html","eeeb6ba07269d35fcf36089c45880c3f"],["/tags/Uniquely-identifying-views/index.html","a02e555a52a8dda33e9e6c4bf2bcf29d"],["/tags/VIPER/index.html","6a061a6e9b519da6b8d6e0714ff03555"],["/tags/VMware/index.html","bc04ffd3c8ba5fed3440bd09b5172fed"],["/tags/Vapor-4-0/index.html","d65f40ed5a081ba5deb7809878378e3f"],["/tags/Vapor-初探/index.html","a71eed4b8265e54634152c7b8d917434"],["/tags/Xcode/index.html","432921afa1d2f41035952c3822c0271a"],["/tags/appleOS-Networking/index.html","0ec823dcb01045e314f97b4bb345941c"],["/tags/bugly/index.html","1e23d89da8c2b6e407af85df379329bb"],["/tags/enum/index.html","97da76ec97bab10bc4b87df0c422d6f7"],["/tags/git/index.html","3ceea8d66e8b1eb4147d0a3905b92e44"],["/tags/iCloud/index.html","e95972a2b81768327795769b659cebaf"],["/tags/iOS/index.html","cca32480c226fb371b8757bc5ecf2827"],["/tags/iOS/page/10/index.html","d06bd98b06046a62a29806049fedbb40"],["/tags/iOS/page/11/index.html","35eab22b8b4941d894d78b6aeac1a59a"],["/tags/iOS/page/12/index.html","5a386ff7f5fe9df36fa5cc8dc4861274"],["/tags/iOS/page/13/index.html","2e01500e1e6099936e2e4977dcc51d0e"],["/tags/iOS/page/2/index.html","5e7dee189ba392694c40dd2f951ab024"],["/tags/iOS/page/3/index.html","e123fc309707b94ef17675cead17b944"],["/tags/iOS/page/4/index.html","b36fbdf9bf94d6e5cf6a7c318e55254b"],["/tags/iOS/page/5/index.html","34df8f5960f4bbdb8d250f119b7d4118"],["/tags/iOS/page/6/index.html","ba9405db913b4eccf2ef8d8fa7cbc3be"],["/tags/iOS/page/7/index.html","93344f9f205ecce0bd0e218271846706"],["/tags/iOS/page/8/index.html","d42d6384036271781cc81a7fbd0737c2"],["/tags/iOS/page/9/index.html","85329a6f3b7c411fef99610518e2abc6"],["/tags/iOS面试题/index.html","8f82efd8ba876fd28c4777507d13442e"],["/tags/index.html","cdf4e9d5b14284c0fd7fbef05263270c"],["/tags/non-optional/index.html","fb48202718ab730c0f291274dc42033c"],["/tags/random/index.html","b0273ad30ffc2b33f0ff5d471eaffb46"],["/tags/transition/index.html","e2ba7f70c582a4d4049854caf5d5d5e7"],["/tags/三方类库/index.html","7c8cd8b5b253e049e0e9fc1558de6a64"],["/tags/依赖注入设计模式/index.html","8455047025dd20e80945d3dbe8db4ee2"],["/tags/值类型和值语义/index.html","fad904c64892955653304c3bbb8ff289"],["/tags/内存管理/index.html","f095690f2b1635fff28ef6eacfe0350f"],["/tags/冒烟测试与回归测试/index.html","7b65523e6c98386fe242b7b5947869a6"],["/tags/函数式编程/index.html","c18ff6e753fc8e98034fcbcd7ec52870"],["/tags/创建博客数据库/index.html","87adc87e480ef01d8ab03ec3e224cae4"],["/tags/初始化模式/index.html","2abdc107dc72e65b78195db3dba9a995"],["/tags/单例模式/index.html","fc6d98a6583bb0c47966672732b76211"],["/tags/原型设计模式/index.html","1de4ac201ad35c7ed8f464174c58ff3a"],["/tags/命令设计模式/index.html","3e016a72816b00db48fd7c426388b964"],["/tags/基本控制流/index.html","baf71de48f0758a18b0607c0aad6b768"],["/tags/外观设计模式/index.html","76ebe6fdb9c281aef8848b3f6c3eceeb"],["/tags/委托设计模式/index.html","739d1b940cc827ca78cabec26e299031"],["/tags/子类化样式/index.html","4f7d7c814783be4fae62ca5ee65f61c7"],["/tags/对象池设计模式/index.html","923246cd8423d41448d69f310c818423"],["/tags/工厂方法设计模式/index.html","e35c21a3f0433432654a47257a36d4ad"],["/tags/工厂模式/index.html","e67c2350f5d84f1681419781347a44ea"],["/tags/工厂设计模式/index.html","3fb56c49ff66aa72816845fee6442ea1"],["/tags/开发记录/index.html","c325e52b231578f6912090727d8503cb"],["/tags/懒加载模式/index.html","7ef2ff5c7f12757986fe87f9b37a280a"],["/tags/技术支持/index.html","313081a8a336a04a695a9a1b48f2f531"],["/tags/抽象工厂设计模式/index.html","41c7fb36ae1e7d197742c0fa97126751"],["/tags/构造函数/index.html","f4f95bd93767c0a996e12daba01f5c92"],["/tags/架构设计/index.html","09fac02d63163559470a34ba1413921e"],["/tags/模式匹配/index.html","eea2f7b433974a648ed02fe7fe046d18"],["/tags/生成器模式/index.html","21f4b9bf32dc8f4ace7c33a165c751e1"],["/tags/用户体验/index.html","4990362c346c04b18977d7b5642352c7"],["/tags/用户协议与隐私政策/index.html","e1d11c215152e4804a4925821904c7dd"],["/tags/类型与操作/index.html","cb39ceede21bf7899945fb2441ca6766"],["/tags/自动化布局/index.html","2bab13bc0af428b6811b2249635e1072"],["/tags/自定义UIView/index.html","9c7b204e796fb4bf320f47d2656a075f"],["/tags/自定义转场/index.html","5718b7d72bcb3dbd67af0c2d405af392"],["/tags/自适应布局/index.html","759e8f5a00e79abae8ae3d74cf3ccefd"],["/tags/表达式、变量和常量/index.html","0ad716ccc6f4af941244fea3d6f849cf"],["/tags/设计模式/index.html","a9348b24f976e37e4db2d591b0844ba9"],["/tags/设计模式/page/2/index.html","a8484578451972802bccb03852e86608"],["/tags/设计模式/page/3/index.html","2832b3450aa8cf70790457b4d28013e9"],["/tags/访问控制和代码组织/index.html","6ea357eb8a53bf628f74a5992466bf88"],["/tags/运算符，下标和键路径/index.html","05b43f9df5283c66e4557262826d1556"],["/tags/迭代器设计模式/index.html","dd1e7768b33cb84d0699106ed7872d61"],["/tags/适配器设计模式/index.html","2afddfde23ab2c67ebb4ed9e2d8903de"],["/tags/错误处理/index.html","7a0e3443c5d24c08794410c0492909f7"],["/tags/静态工厂方法/index.html","50b8faa76509a6a61ca616246db603a8"],["/tags/面向协议编程-OOP/index.html","39af4a0ff4c2a458af1c48b0565ebcf5"],["/tags/高级主题/index.html","db644779fd443191eaa0bb7b4ca6141c"],["/tags/高级协议和泛型/index.html","9eeea32bbcb8e0aa5730189a4169f161"],["/tags/高级控制流/index.html","e63b491dca468a3a528f0fbdbded4dba"],["/为iOS应用构建输入表单/index.html","6ce129d3f8737913ca82f05f14f2e460"],["/产品开发的幕后花絮/index.html","578b3eb31e7b84207af25f0f7905f32e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","62451bcd4cd28b0bcd9cd1e7642b2470"],["/冒烟测试与回归测试/index.html","7b263db4ec1a8045750101efc3daa1e6"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4e291e7a3cc3decc077992607e3f60bf"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c5187b165f9d69ac5a5111508b43fae4"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","dc71d1a3954e4cb95c66bd684d44fd41"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","407d682de7a0e509f4adb75bc04c2c8a"],["/在Swift中创建自定义集合/index.html","f60ca4c64501d82fd3fea67a8a03d7f2"],["/在Swift中处理非可选选项/index.html","9572f3358467cce2de3836d02d7a6e69"],["/在Swift中生成随机数/index.html","133ce785ec63c0817a1a3b0d75373a72"],["/在Swift中重构单例模式用法/index.html","4e8a78bebd68a190dd25f3df1b3678bf"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","580336b0685b8a098b885bd285680107"],["/如何为VIPER编写服务？/index.html","7025c297099d8cb992a693b4578aa777"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ef07ea6568dacf316978de40bda7b44f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d2dc2043bcbc1d418b652761db8f766f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","6249f2b50e6fc3cde6a22ba188081d15"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bdf119c3f5a49562a95a6b184016f21b"],["/掌握VIPER架构/index.html","e44c6f611c5f0717f1b4cba1f8666af6"],["/揭秘 WordPress Hook 系统/index.html","8a58b087d4e8f1a17e497729ca96519e"],["/比较工厂设计模式/index.html","ab76f48afee9f90b28c5606d32aca41a"],["/深入了解Swift中的Grand Central Dispatch/index.html","cd2032c959c1cf8002411028bc5a1dc9"],["/深入研究Swift框架/index.html","05d6821c0351c13d6e52ff67263b283a"],["/美豫直聘技术支持/index.html","2e1c59afb03107caabf7f8795cae29d3"],["/美豫直聘用户协议与隐私政策/index.html","8532a7a98efb269dae6bc257a8f0f22d"],["/适用于iOS开发人员的VIPER最佳实践/index.html","91c1f6ac51927239ff22a69151d5e1d3"],["/选择Swift而不是Objective-C的5个理由/index.html","85124b10d51417c8d31510627bc772f9"]];
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
