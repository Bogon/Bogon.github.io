/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","0c20fdbfd53d0aef438678e59af96ae7"],["/2020年iOS面试题总结(三)/index.html","6df8c6f1ae66ed0784b6250ae002656d"],["/2020年iOS面试题总结(二)/index.html","d3498622e7ca48b23f7ff600960534fd"],["/Advanced Swift系列(一): Swift 简介/index.html","a32cdc1d4873ff1fe6264af40b0e2b87"],["/Advanced Swift系列(七): Strings/index.html","2274ccad0d83d01bbadd52d2edbb27b3"],["/Advanced Swift系列(三):  Optionals/index.html","ee9b3f78127d703354759c540a12d468"],["/Advanced Swift系列(九): Protocols/index.html","9727dae56a4d23c817fad0bc135e7af1"],["/Advanced Swift系列(二): Build-in Collections/index.html","faf34e5c6ff711c3340490be17388dfe"],["/Advanced Swift系列(五): Structs and Classes/index.html","929a5c6b87e9eed083217c1c2848dfe8"],["/Advanced Swift系列(八): Generics/index.html","e80aa40c8b137956cf31aba524806a20"],["/Advanced Swift系列(六):  Enums/index.html","0074e915dee8786291af99a843148c3d"],["/Advanced Swift系列(十): Collection Protocols/index.html","4bea37c7dd89b0d6449838783176baac"],["/Advanced Swift系列(十一): Error Handling/index.html","215866c7ec1e71e998b8207a07ede485"],["/Advanced Swift系列(十三): Interoperability/index.html","e239f6916b2c2b346ac56cec34a1afe2"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","443b090b4ef9c67c18163a596c743d92"],["/Advanced Swift系列(四):  Functions/index.html","71c3d51a8a62e31e853f400c423d3f51"],["/App Architecture系列(一):  简介/index.html","b36e525b6488e74a3ea3d3fb8ac980cb"],["/Functional Swift 初探/index.html","05dded2e6c9e1986a7021f8a991754e3"],["/Go 基本语法初探(一)/index.html","dd17ecc501418754d6f14c4fbc9b20ed"],["/NSCODER和SWIFT初始化/index.html","6d0a09e68b6398cf5966a92d20834f75"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a4b2cc0f3a2e5da56e3df48208756cd6"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","21497dfbb4ac79abd0021bac3124116a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","7e1876a98664fc95711faa4ac8c1e910"],["/Swift 5使用UIImagePickerController拾取图像/index.html","14d2de6dbc19e286bcfeb8f429cebb08"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","cec83a522e6de42d61882bc4cec002be"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ae877cf5e92e9b93917d1f76bef1e717"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","914780f75dfc22bd80b965b2355cc257"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7a20d4b69b53b2a53dccd9956a32554f"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","2f2dda580db78afa767565735dad8c57"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","64c7b0b182bdad1c14a5c0c482876b69"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","33aff4fda848d44b19d77726c43e416f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","343e472c41135ec78b1030060ce6babe"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d967070131b6fc13fdff4176365e96c1"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d95b88b172781cdf265c7bd34bf10cce"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","08dc3d38d78779bc4fbacea5796d1415"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","fc65480d2be8d8f326cf7435991e4a7a"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","71d230a9562b3b76d11614640edcda42"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","07d63b2b7275bf86b0dc9d00803cc864"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c77b86dad743e970512c0c94b0caee17"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","34deca70ea7ef131b81ae0058df72a80"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","156605f52db631f91a51f843f27c2c1d"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","8d3cea0ccf19ff1506b48f74749159fe"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0db1fe40200b1e6d9caee36cf1715cc5"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","35f4a66e8fd3ae22c88881edef0074de"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","cc49a414ae024c4c8fbcec67595506b3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","5945d570487f8cd75153efd270ff5363"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","3287b711ad6644eed2e46101fc3643e7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","50240ae6bfb5c2e3d635cdb3b7c39d48"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","f61f83729c8cdcf2aed7beffd273f27c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","45053c991fbb62b8f0e7ec88e589dca5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","5de81cd755c42fc230b4c158820341f6"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","9fdad4b7f4dcb98a6ac7a16b902b95b3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","3ee7f4ec9446db3ae08af722cd8d6d62"],["/Swift CompactMap vs flatMap：差异说明/index.html","9d85353a855223b7326ed3fb0641d4ce"],["/Swift Grand Central Dispatch 深入实践/index.html","8dcb844c5c8007743732173d0419b1fc"],["/Swift Lazy属性初始化/index.html","7c2590ebcbccb262a6aad9d020fd4469"],["/Swift Promises 初体验/index.html","449ca9cc9a548a49918ec5af486239d9"],["/Swift Promises 探究/index.html","f6af2a2425c32392cd826c76326b5207"],["/Swift UICollectionView使用指南/index.html","0f7016b1fd4eea44ccce685ef6ccc731"],["/Swift URLSession && Combine framework/index.html","c4f3591a6de5b4cee389e7901ca3f20a"],["/Swift 唯一识别的视图/index.html","b7eff22f9ac9357ed95a047b71d7faae"],["/Swift 如何学习现代UIKit？/index.html","e0326de7216e987d846fe00116bdebda"],["/Swift 用 compactMap 替换 flatMap/index.html","250f11f30118c7fec6a1f0a2c0d0c1ad"],["/Swift 选择和播放视频/index.html","c587afb0a0b30f2792af955c9211cb5b"],["/Swift中UIColor最佳实践/index.html","61261ed75390932d44c7ce0ed46b3cc3"],["/Swift中快速简单的工厂设计模式/index.html","484bd033e485a5c294b8782f285f90e4"],["/Swift中构造函数与静态工厂方法的比较/index.html","d5786640ba24043848ab90f5c05ebec4"],["/Swift中的UITableView教程/index.html","ddce9686d6d3c650317ac7452f097c59"],["/Swift中的懒加载模式/index.html","4c3e894e83f3f9861453b4fbf256b692"],["/Swift中的模块和挂钩/index.html","ec12331597a50dca4c3cdb804a74c118"],["/Swift使用布局锚点添加约束/index.html","e67d875673dfc157e090abcbb8be8839"],["/Swift依赖注入设计模式/index.html","e18d5290439c5e303d55cc6f61df3792"],["/Swift关于Dependency Injection (DI)/index.html","dd3f7ee10e73dda15aa277548f0ea280"],["/Swift初始化模式/index.html","de24fc9ed529da67e554b08abb8a59e3"],["/Swift单例模式/index.html","75c904c8a2e17999d14d5bc0414a6875"],["/Swift原型设计模式/index.html","f6012c6be24393323a0389ecefd02b8c"],["/Swift命令设计模式/index.html","3a41cd501c066494973c8fecf2f15764"],["/Swift外观设计模式/index.html","0b2e9522ea4e381b006221e3c0251f29"],["/Swift委托设计模式/index.html","a309e24b52e74d4ea168c06ede361a1a"],["/Swift对象池设计模式/index.html","482eb5d58886fd9fde1f8476b383f3b2"],["/Swift工厂方法设计模式/index.html","0981f88146a5b7ef329ea1a3e89cf2f9"],["/Swift带闭包的懒惰初始化/index.html","f657bdd3df16da33d82415b5969ce00f"],["/Swift抽象工厂设计模式/index.html","67ba95e3a929665332ef703b854941aa"],["/Swift掌握iOS自动布局锚点/index.html","8965a34f7e4af843c113da2c80cab678"],["/Swift支持旋转的自适应单元格/index.html","90a7aaab46c6beb50d33901cbd296219"],["/Swift枚举值/index.html","f1b140014e2207c3ebd9a905f049c99b"],["/Swift生成器模式/index.html","106fb9109ad4c015c2033bd002c1b223"],["/Swift结合Xib文件自定义UIView/index.html","ddda6b5b198adee2f0af2f5b86979699"],["/Swift编写的20个iOS库(一)/index.html","d0e1ffecb01b4c3612d4acb02d57b060"],["/Swift迭代器设计模式/index.html","37357f6c3abb807f0a08d911bf525901"],["/Swift适配器设计模式/index.html","4a07f2a1e042ef6bce972afd3f480254"],["/Swift静态工厂设计模式/index.html","01efacae2cbe8d1a7d56079b181b0855"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","d0cc7feca0a6a25129ba1978934b5892"],["/UICollectionView data source and delegates/index.html","81977c4b0f5e0cf8cb26a45017e9cb3b"],["/UIKit初始化模式/index.html","22aef25d02051f1c822fc18f1fd0a693"],["/Ubuntu18.04替换国内源/index.html","28d1fa98ae5abb1b6b161b267be72278"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","a5b5c386aaa49f7358f77fca1260a3f5"],["/Vapor系列 (一) :  Vapor 初探/index.html","f70bcfa43b54537ef959d3f1ce0716a2"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","db2cbd488012f148e137758e0d712fae"],["/Vapor系列 (二) :  Hello Vapor！/index.html","44a50722d6076d468eaf47e36afeb850"],["/Vapor系列 (五) :  使用session进行authentication/index.html","c7197fb2c9b5b38ff2f7a085ac132c82"],["/Vapor系列 (四) :  创建博客数据库/index.html","631b0ee51bcf869f1ed79b911555fe41"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0d9a9d5f7f6b86d5786da4cb991dd706"],["/Xcode扩展/index.html","6fd83c2e495d9df655db291468aae8ee"],["/about/index.html","14ffa292de2fcda2e4c96d8544ad2c93"],["/appleOS的Networking示例/index.html","3fa1560032a12dc3a78dc46bde3ed15a"],["/archives/2020/03/index.html","b86cb6e5af94c72d77810d26efdbfe82"],["/archives/2020/04/index.html","9c895624625c2e99d314a5c387d09db0"],["/archives/2020/04/page/2/index.html","bf73d922a57348b260d9b450ef46aa5b"],["/archives/2020/04/page/3/index.html","eb84c7cd4a856f76cc20541d3dd518bb"],["/archives/2020/04/page/4/index.html","2c6364837a5df458d1b300b89cfaa426"],["/archives/2020/04/page/5/index.html","e3303752285baf8a3ddc3a1a8fbb98a4"],["/archives/2020/04/page/6/index.html","bf280997119d2cf26cbcbba851e21c35"],["/archives/2020/04/page/7/index.html","933290895c18cae862b1f767e1646e1d"],["/archives/2020/04/page/8/index.html","2caf0b28fcaf1f433fc7a1f2171b714e"],["/archives/2020/05/index.html","1349cbb54ec784bb0968fe906fcda6eb"],["/archives/2020/05/page/2/index.html","301d2f833b9c3a53798af4e08fb6dd9a"],["/archives/2020/05/page/3/index.html","0029ff42f5963efa3546a283783f735a"],["/archives/2020/05/page/4/index.html","49a29eea98898abc4ab338114d4eb76b"],["/archives/2020/05/page/5/index.html","1f2762813f7e958e4b03847b1542eebf"],["/archives/2020/06/index.html","5ce5b3bdebaf03c539091b02170e8abb"],["/archives/2020/06/page/2/index.html","b113c1ffc9344d39afb4a75e9cef3640"],["/archives/2020/08/index.html","f0b4e68c43c6a1e31ef398903d950baa"],["/archives/2020/09/index.html","5d5934ec81f35635f9d99fa39a6bdaad"],["/archives/2020/index.html","dff6730ee2c4fa54dd2ad9376ec34193"],["/archives/2020/page/10/index.html","16c23dd5bf80afc1a65ce2ea3bcd55d5"],["/archives/2020/page/11/index.html","043cc14423f990425c1bc789727937f7"],["/archives/2020/page/12/index.html","54d2fa7949f3ea978c21b457214e4cda"],["/archives/2020/page/13/index.html","e451f79f2937c300c4f910b779209238"],["/archives/2020/page/14/index.html","d540e38be610096e275c6855010912c5"],["/archives/2020/page/15/index.html","6ea408db5ae8ff0cc0e7fd19fd3f4871"],["/archives/2020/page/2/index.html","5ed9de052d87135955eeed90d124e692"],["/archives/2020/page/3/index.html","58f86a0178b9d243807c7ae4656f8662"],["/archives/2020/page/4/index.html","9afbf49d4a6ba52e68334ed4b7e9d9ef"],["/archives/2020/page/5/index.html","a516c1cb2577203b5244bb56ff13b445"],["/archives/2020/page/6/index.html","94eb08726d7706a965127f501740b23d"],["/archives/2020/page/7/index.html","bd7605e6a0b4aeaf6af32185c343eaf9"],["/archives/2020/page/8/index.html","506fcc9049fb93e53f3951161ea3c0e5"],["/archives/2020/page/9/index.html","1688c2fc6aa95f27abb1117ebb51f9e1"],["/archives/index.html","54c69a485a8ad04ae673099575955628"],["/archives/page/10/index.html","9c49b89b3e4510eb4747794133aa5ea5"],["/archives/page/11/index.html","594205fb405d5c0077042b8afcf4a153"],["/archives/page/12/index.html","c290fa6b27c865d726845195fc24dc5a"],["/archives/page/13/index.html","4a325ebc415f6832dfb71e96d5b1929b"],["/archives/page/14/index.html","0f9277eb19c94a47de891d01dd07e857"],["/archives/page/15/index.html","4000426130a71f85632f863197e45d99"],["/archives/page/2/index.html","a6f40b9f66c2e6fd7db263351cc3531c"],["/archives/page/3/index.html","1407d140a7316fd212d08f7b2cc1d969"],["/archives/page/4/index.html","ce24bf37e50507a04a7cf28beca63390"],["/archives/page/5/index.html","0bb6259e16c4317db4c83777453b9c0f"],["/archives/page/6/index.html","079a9d942f702736d0102ea5940ea1fc"],["/archives/page/7/index.html","41241ad8c2cf70ce23f21d4f4a305374"],["/archives/page/8/index.html","a90c865f7fc8918961669ad401bee96a"],["/archives/page/9/index.html","bbe95b72904478effacdd4d729a9158b"],["/categories/Advanced-Swift/index.html","01229584840b64ef030cbbb8663c266e"],["/categories/Advanced-Swift/page/2/index.html","28eee830e0ba504aa6a86dee4e97fada"],["/categories/App-Architecture/index.html","fa4f9150394ce3fbf636de2c9adf4dcf"],["/categories/Codable-protocol/index.html","9dcf93ef39bb8e3fcfe3126d071d4cb8"],["/categories/Combine-framework/index.html","a3da38623266c2c8f4f79346fa7a4a34"],["/categories/Combine/index.html","72f8af8dc351e21683b8f9705690c791"],["/categories/Go/index.html","92e2066910be60ac73a4ea4b83da95fb"],["/categories/Grand-Central-Dispatch/index.html","4db62274135b3787ffc51c18b328efe2"],["/categories/Hexo/index.html","805bf324e088be0ac7419e246e563414"],["/categories/Promises/index.html","c9cd91fd13fe5fc9690b0e8b6bcd21aa"],["/categories/Result-Type/index.html","0f0398389cef51b395cd065ccc2c02fa"],["/categories/RxSwift/index.html","a36c557b424b1fb0100e3103e4e0bd8f"],["/categories/Server/index.html","2009c5d067d1236afa2ecc481050ffa3"],["/categories/Swift-Apprentice/index.html","fb4b9bd0f4c01c63dbeaef55b37a3229"],["/categories/Swift-Apprentice/page/2/index.html","17d5c0ecf17f1aa58dae2b3d92344661"],["/categories/Swift-Apprentice/page/3/index.html","8298fafcd2f969887302054af10d4ce3"],["/categories/Swift/index.html","035446253af2d5c2da4f2d9eae8bb03b"],["/categories/Swift/page/10/index.html","e6586bbc0ce2222bce0ba2791397587c"],["/categories/Swift/page/11/index.html","66afaf6ca56f9d9eeb4f801f29950cfa"],["/categories/Swift/page/12/index.html","1b15df1022f4dc5647ee8497285ac13d"],["/categories/Swift/page/13/index.html","5385ffab0e0b6eda3d27ef3ca794d9bb"],["/categories/Swift/page/2/index.html","4cd9d8bd7a95e3413c464fa2fb6b5775"],["/categories/Swift/page/3/index.html","434b1e44d276ce57e190c8dd087c0a42"],["/categories/Swift/page/4/index.html","7651b1e4d46dae3c13d88fcb0eb26240"],["/categories/Swift/page/5/index.html","71a8858b76a090b77133f2353c8fcd39"],["/categories/Swift/page/6/index.html","11bd79f6d1ea1c0948af67c67ea79258"],["/categories/Swift/page/7/index.html","c27a102ae03848b90a9e9ebd9857d6ba"],["/categories/Swift/page/8/index.html","b3ab62dc8b888854ecd791ad3a4db4b2"],["/categories/Swift/page/9/index.html","25d57ec90578027a98e3278fd3eca5da"],["/categories/Swift5-2/index.html","afb442606e6165a0d02ab3bba356423f"],["/categories/SwiftUI/index.html","db09c14024cc54afc248b6c2d91629e1"],["/categories/UICollectionView/index.html","1b0f349d7b9004d1943853a423f5ac34"],["/categories/UIImagePickerController/index.html","d6205ab63169a61bf6d50471a4bb6808"],["/categories/UIKit/index.html","88b895b632012d018e3e15236a74b278"],["/categories/UIKit/page/2/index.html","7b8c432dfea57a4e126839effa95fe9e"],["/categories/UIKit/page/3/index.html","f701126c208dabc90feeab2773c486ae"],["/categories/UIKit/page/4/index.html","aa3613aeb9567bb593d265786608b849"],["/categories/UIKit/page/5/index.html","2690302c29cd662da68ef1c40996b3b4"],["/categories/UITableView/index.html","84816c5f0f2381bf7f2c615e0889e3b4"],["/categories/Ubuntu18-04/index.html","2e6a48487af75ff0bda7ba2c66838bdf"],["/categories/Ubuntu软件源/index.html","e7e72f70ff06a336a6428d33c4c871ef"],["/categories/Uniquely-identifying-views/index.html","cbe51b14be67c23e03cc9c350b141ed8"],["/categories/VIPER/index.html","4da762fba05686d094979fb080668157"],["/categories/Vapor-4-0/index.html","017ed3da5ff4fdde2260af42549a9669"],["/categories/Vapor4-0/index.html","39f5a6054b990fb734292ddf550c9528"],["/categories/Xcode/index.html","ab46e3f3050d0ff8f7752b20d1cc41e3"],["/categories/appleOS-Networking/index.html","3c12529b7a9c5fad1b254358082b1f73"],["/categories/enum/index.html","ef86084aa3afca4fcc6a7eddd3b8d849"],["/categories/iCloud/index.html","e35559f8a09badfc9363117b18ab12a1"],["/categories/iOS/index.html","7f60be0f8a2f54085d16294211ee2bd6"],["/categories/iOS/page/10/index.html","cba0f60f034aa6d7ce2b152993ae826c"],["/categories/iOS/page/11/index.html","5b4eb66b93f1667c9ac585a257d8c952"],["/categories/iOS/page/12/index.html","f8fb96648650503b150a9daeb7dc132f"],["/categories/iOS/page/13/index.html","4926fa5fdc5a5c5da62cb81e588e7aea"],["/categories/iOS/page/2/index.html","3bdad58fce39364e8c56b4fcaaad458c"],["/categories/iOS/page/3/index.html","a3f792fc18c67f9bb45a0fb8035f1533"],["/categories/iOS/page/4/index.html","335893371b3785003f1e73775eebbeb7"],["/categories/iOS/page/5/index.html","7faf304741adaa3f59795856ecd394fa"],["/categories/iOS/page/6/index.html","a832f70163a3f6421e1224775bd3b551"],["/categories/iOS/page/7/index.html","03a9a47030a247b48ff552533f99132d"],["/categories/iOS/page/8/index.html","c161a8e9516cc6dc8deaf8b86041a216"],["/categories/iOS/page/9/index.html","134d2930ba9120fa3e8be8d5a9c2aef7"],["/categories/iOS面试题/index.html","7c1f819d4c311457759d1ba0c32b26e7"],["/categories/index.html","e1843c4a2b871e5b597d56fd099027cf"],["/categories/random/index.html","89423f4d5c96330394c6d3474414955b"],["/categories/三方类库/index.html","4514a5c8a59519e9d85a1a59ba12dd3c"],["/categories/函数式编程/index.html","d2bddcee9e776039c0e1c6469a578e2e"],["/categories/子类化样式/index.html","d54b151ae20c9456982d3c5abd121bab"],["/categories/开发记录/index.html","89430a9316c04807cf003cfd65372ef5"],["/categories/技术支持/index.html","3c9fe71b4277daef9f7678526cc03138"],["/categories/架构设计/index.html","91f83aacc2fcc1bef6946ef8eec91df4"],["/categories/测试/index.html","471e1fc2b46b67ddfb03ef42a784d9da"],["/categories/用户体验/index.html","37de9f68c8da398cd1aa776c3cf36e03"],["/categories/用户协议与隐私政策/index.html","9ed70bfd258427a3375a18de346611d6"],["/categories/设计模式/index.html","cc180b53ce877a97d0762adfa363a64e"],["/categories/设计模式/page/2/index.html","aaee6f7e501a0dc871814808182e2786"],["/categories/设计模式/page/3/index.html","bd1dda1c2c0275c3fe9f00f1c974f675"],["/css/main.css","6b3992facfe48eeba9a23380bfb6dc0b"],["/hello-world/index.html","fa76b83ca145a8780afe6386247fc934"],["/iOS VIPER架构深入实践/index.html","849d79f270b2397db73a1451f0312fec"],["/iOS 自定义视图，输入表单和错误提示/index.html","80ee151bd05b577918232bdb24e6c251"],["/iOS如何使用iCloud文档？/index.html","3f838328f991c091dfe249dcddc531d5"],["/iOS子类化样式/index.html","9037923ba87b8696a02bacff219041fa"],["/iOS开发记录<一>/index.html","3c992b3df885e646c57ff124805640b5"],["/iOS自动化布局编程/index.html","be41bb4d215aaab78c68892c564ee82b"],["/iOS自定义转场(By Swift)/index.html","70e5d681a7c5e98b4723ffa43698a642"],["/iOS项目架构：使用VIPER/index.html","abcf5b8b7bb318ca9a18ef0fe2aedeb6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","80968e9e502dca8614ba81ed8f3b9584"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","ae7b05fa86217506c26591b70ada4452"],["/page/11/index.html","323d170f887c07caf0e79f1a951e31ed"],["/page/12/index.html","22024ac7e26fc51d58799c1182a1bf88"],["/page/13/index.html","3d3e6464e24d18c3f1bfa8bb63765bea"],["/page/14/index.html","25dfb17150b2356e6d8cd5a55a9e15b4"],["/page/15/index.html","e8aae5c9ff2ff904fea305c1c3461573"],["/page/2/index.html","783ba7a9a510a593360e8d368b64b9a1"],["/page/3/index.html","4fb29499171d4f77c1e7f2e95dd6236b"],["/page/4/index.html","2305bfd7fa6f32c30e52197cb86492bd"],["/page/5/index.html","e916aa140151a5d9df6829121c125129"],["/page/6/index.html","74bedd3544482057d1b1f77bbdb5ba9b"],["/page/7/index.html","fd507e556b78c5ca8101e615d56e323a"],["/page/8/index.html","3503ad8649fb26a3cc804b7086493681"],["/page/9/index.html","4263aa06e7a3440a9d170e08019b06ab"],["/schedule/index.html","ec4bad65b57bb5c037b809e647c5a030"],["/storyAppPrivacy/index.html","6a7089672d092189fb58c20aa98c5414"],["/sw-register.js","44e4411753196e25d71dfa7a6531e8d5"],["/tags/Advanced-Classes/index.html","2110967eee280d5ac84aa9e7dfecfb1a"],["/tags/Advanced-Swift/index.html","5e9ac25022929264ef5256571e220242"],["/tags/Advanced-Swift/page/2/index.html","c720768537d27318c457bdb19d2dd1fa"],["/tags/App-Architecture/index.html","22d57d24a51ef6cadb12877e3b661024"],["/tags/Arrays-Dictionaries-Sets/index.html","6dc46a510c541c090f0de06fd1423164"],["/tags/Authentication/index.html","f62b20a582636bc5d5e35f1ef28b32b7"],["/tags/Build-in-Collections/index.html","2a350bdeaa7d059e912fa2b0f2a09db1"],["/tags/Building-Your-Own-Types/index.html","9d8233381d2250811a46a68b95351c5b"],["/tags/CMS/index.html","c57ccabce7d5b38c69736a2f1d23c80c"],["/tags/Classes/index.html","8412b91c22344548f50c7d36dd69f7a6"],["/tags/Codable-protocol/index.html","6956468136786b9d7a395e75e46fc98a"],["/tags/Collection-Iteration-with-Closures/index.html","73ce5ca7cc46760406ea9a4642971380"],["/tags/Collection-Protocols/index.html","1c133cf76390273fb58952ea852e5778"],["/tags/Collection-Types/index.html","6ca471c0f22f6d2f96304f7c9a92b998"],["/tags/Collection/index.html","3af4022e8c5e7f63a42915f21d82a974"],["/tags/Collections/index.html","941868d90cfee0b6aa4408b467b188b6"],["/tags/Combine-framework/index.html","f3f1686ab4022f0e7a9e206a61070e3c"],["/tags/Combine/index.html","969d8345b82028918e57a477fbcf507f"],["/tags/Dependency-Injection/index.html","66f3d75e544c5a07096e5b74246f12ae"],["/tags/Encoding-Decoding-Types/index.html","d278d3aed2a64ef961580d3d17b3f546"],["/tags/Encoding-and-Decoding/index.html","ced828acebffa14e5f127a9d394ded82"],["/tags/Enumerations/index.html","7c5f7f66e9d50d26a7ae6bd72d51fe9b"],["/tags/Enums/index.html","26e4e26e8fedd358b95ef8700a326485"],["/tags/Error-Handling/index.html","b8ae1019f01a10bb6b8219c340c953f4"],["/tags/Functions/index.html","c31f04b8d0f71e44d958f0e27a144374"],["/tags/Generics/index.html","5759ab41925702583ace0b37080d3f9d"],["/tags/Go/index.html","7e4688829d9c03aa82c325ff47650ad1"],["/tags/Grand-Central-Dispatch/index.html","71d6c5e67add6e777929c92a76a3630d"],["/tags/Hello-Vapor/index.html","de01a5ac200a69637c79b8d3885e6e05"],["/tags/Interoperability/index.html","0a580feb48577d3b177cf0669ac5bfa7"],["/tags/Introduction/index.html","2885a460773c00628847cd2f72f8b21a"],["/tags/Leaf/index.html","7336dcd22ac775c4af06c347c21e8a4e"],["/tags/Methods/index.html","1f3cb68f3057d98ff2121bbf73fab59c"],["/tags/Modules-And-Hooks/index.html","e75e645d072f807a89082fbb8df0226c"],["/tags/Optionals/index.html","ba004ec81009a0eb6b8037ebffbbc023"],["/tags/Promises/index.html","de540e57e82550361137b11d7c06454c"],["/tags/Properties/index.html","94dcda8b7a6a80a45435496722b54bd8"],["/tags/Protocols/index.html","8ca2ab7db6494bd1c7255721397f0be0"],["/tags/Result-Type/index.html","a49f093d424b7d134ec32b7b7faefe43"],["/tags/RxSwift/index.html","b044659ff67226f4fd29420a6979555d"],["/tags/Server/index.html","c009c8df835e0cf6cc75fba0e4d85232"],["/tags/Session/index.html","79b82f81fbe8b1890a40c9a15adb7805"],["/tags/Strings/index.html","1ee4f3763bbfb9f9bf7707a4486c1b40"],["/tags/Structs-and-Classes/index.html","e5b09495bca4ad00e768c6e43ddcba5a"],["/tags/Structures/index.html","d1c450e9a8fe63ff3ed055cc698fb7bb"],["/tags/Swift-5-0/index.html","2c9bd0aabd4640f5a4c036da82f9d050"],["/tags/Swift-5-0/page/2/index.html","9e8b5c999e3543d4b538c6173f7e7537"],["/tags/Swift-5-0/page/3/index.html","60053698b5fa7004306adf991905d399"],["/tags/Swift-5-0/page/4/index.html","2249da3b485a564c3ed61d73766cc62d"],["/tags/Swift-5-0/page/5/index.html","c0b830cb6a40c757d78fdf8df2596b0c"],["/tags/Swift-Apprentice/index.html","cb0e6373ef605e9e5d35154e011e1d57"],["/tags/Swift-Apprentice/page/2/index.html","9471808ae06f33b80c1ef79a45a0a055"],["/tags/Swift-Apprentice/page/3/index.html","6f9e8016880ab19315f50b787f282524"],["/tags/Swift-Package-Manager/index.html","d1ee309d6135c0689d2e5eb58d835e4d"],["/tags/Swift/index.html","2730ab25c248bc1fcd86882bad291f72"],["/tags/Swift/page/10/index.html","07da76c296ee2ad13eec5642e772b5fe"],["/tags/Swift/page/11/index.html","96b3c7a0c88dc7545b4c203d7e0ee43f"],["/tags/Swift/page/12/index.html","5d57139d1fac9d7e1bedf46f3279fedf"],["/tags/Swift/page/13/index.html","70f70ece1f739c2091ace3ddc0d5d413"],["/tags/Swift/page/2/index.html","6fd1fe2176f8656d9b6733001957437d"],["/tags/Swift/page/3/index.html","7c517a74242abe2ed13f69faa093ef1c"],["/tags/Swift/page/4/index.html","7bdf1f41c2448a88fd4a0081b600620d"],["/tags/Swift/page/5/index.html","5f50b67a09419deed9eae21ae5faf7e3"],["/tags/Swift/page/6/index.html","8796524ecd3dbd690ddd50dea4e2f181"],["/tags/Swift/page/7/index.html","6d1779d80f7cd8e35a299e020939cb11"],["/tags/Swift/page/8/index.html","42fd4e6efea2a7fabcd5fba0ad97d8ef"],["/tags/Swift/page/9/index.html","e04b3c541de6889451de1e0480ae1873"],["/tags/SwiftUI/index.html","b7b9684c8132941e709455cdbd723083"],["/tags/UICollectionView/index.html","1e6f2c545bbf22dbb9f9e9e6aa1b4bf0"],["/tags/UIColor/index.html","58b506be6248aa558c8570bb669566b4"],["/tags/UIImagePickerController/index.html","44b05f98d2fe662a9edec62fe8be8360"],["/tags/UIKit/index.html","b3a0eae4998e61ec2adbbb9b8052ebb3"],["/tags/UIKit/page/2/index.html","5e74b2061595b62b1e92d391f2b24a9d"],["/tags/UIKit/page/3/index.html","e8542aff171f5c95b4b81be26d5c0de1"],["/tags/UIKit/page/4/index.html","10697ba1c5e31210752431c38baaf8c9"],["/tags/UIKit/page/5/index.html","e4d4efe7b6e1918663eed31d59ce9c49"],["/tags/UITableView/index.html","29537c8352d7c0e99d2db86e5beb1ccc"],["/tags/Ubuntu/index.html","578c7209919cfc13531b6369a8491b70"],["/tags/Uniquely-identifying-views/index.html","c96f930b5a704e1803186890c68c603d"],["/tags/VIPER/index.html","8306ad843510a6116724fe77a3ed9667"],["/tags/VMware/index.html","b9690b4fb5875faf1812f95f4d3fd10c"],["/tags/Vapor-4-0/index.html","75324f7c2a15801443e588d70d475f7b"],["/tags/Vapor-初探/index.html","4b9ebc13e64203e6bbc0589f703c1c1c"],["/tags/Xcode/index.html","34fe56c728a34b63595e4cdef0d16380"],["/tags/appleOS-Networking/index.html","4d6ba6857d6a96e13891111ea618b233"],["/tags/enum/index.html","9bdd269d4ea6cc9945879f0dd2fb240d"],["/tags/iCloud/index.html","409e44bba2eca55b863d58670a947374"],["/tags/iOS/index.html","25cda408417cff36b4ffcade68a3e5f5"],["/tags/iOS/page/10/index.html","b7eb4b91a55839ff5808c644d21c347c"],["/tags/iOS/page/11/index.html","c05cc4c6eb8abe3b4fbc349531c69d1e"],["/tags/iOS/page/12/index.html","c29acb55c6ef27bfd0859b5e66e1af5a"],["/tags/iOS/page/13/index.html","f3d618ac5610506564a0edc6f3317ea9"],["/tags/iOS/page/2/index.html","1439ec11ea150c3b7184b16c966f7421"],["/tags/iOS/page/3/index.html","523c3e9c773f34392f4e716705f40dc5"],["/tags/iOS/page/4/index.html","43da94cd7f4b065b45a60cc46e77f075"],["/tags/iOS/page/5/index.html","15b110797e7cd58b35f8a3e5a011f99b"],["/tags/iOS/page/6/index.html","9999a74710f91bb997669c6619bebfd4"],["/tags/iOS/page/7/index.html","ee1b0fd3fa250f5a8dfd795458358c37"],["/tags/iOS/page/8/index.html","5a55821c11c173b11193ffadb7d2e8ca"],["/tags/iOS/page/9/index.html","20e130ec87342d34c09822d9b2ebe800"],["/tags/iOS面试题/index.html","6fe665bd40e751d1f904d6cbd8b29ef8"],["/tags/index.html","7b011168fff48d8a265d9791c58b33bd"],["/tags/non-optional/index.html","145f007a99109175f7bb871aa8ab671e"],["/tags/random/index.html","00e00cd9911733a218f756599e63bf23"],["/tags/transition/index.html","d5a1d6ee1755e4549f201dfa9452c716"],["/tags/三方类库/index.html","4717516321beca4a9626f294e63ea4da"],["/tags/依赖注入设计模式/index.html","3b03672e1c6af6b5654da1970763b086"],["/tags/值类型和值语义/index.html","17a89aaac0e41e4806e5ad86b0ff48ce"],["/tags/内存管理/index.html","cf31804051db796873044d3b24edc31f"],["/tags/冒烟测试与回归测试/index.html","c0abda46e126c23f890667ed80bd5d87"],["/tags/函数式编程/index.html","9d34ed7bfd49b34a86690bf245706f2a"],["/tags/创建博客数据库/index.html","b41919487042927d93b3dcc8198111ec"],["/tags/初始化模式/index.html","e36a65964ae55e28c70eea916a830163"],["/tags/单例模式/index.html","87cd52f687e995d5950f8a84649a11f5"],["/tags/原型设计模式/index.html","d03418324daf4fbd60030f39d58662e8"],["/tags/命令设计模式/index.html","f695d3bb6603d2cf615db2094d9523d6"],["/tags/基本控制流/index.html","e45fecc36b5af189ba95e2a6b5bd6580"],["/tags/外观设计模式/index.html","b4b46313c4538553b67ac38df52bf217"],["/tags/委托设计模式/index.html","334c7eefa759533355b30beaeb25c6a1"],["/tags/子类化样式/index.html","05bde460072061238bc37cbc03293f57"],["/tags/对象池设计模式/index.html","f5259da6bc81ea919fea128d1ef357c7"],["/tags/工厂方法设计模式/index.html","44bc6890d57e1dd8624fc0848af15357"],["/tags/工厂模式/index.html","f9e94fbd4c20533cff19e3cc3a8fd03f"],["/tags/工厂设计模式/index.html","5df7d48b38659fdca2369db1229198d0"],["/tags/开发记录/index.html","c4588c25314374f9b0757ff4ce4398e9"],["/tags/懒加载模式/index.html","ecdffac11a7711a440c30d49a55dfea0"],["/tags/技术支持/index.html","b558e72a3960b3093b301ed5209d4353"],["/tags/抽象工厂设计模式/index.html","e973209391d573a47a3b09683cd1bc66"],["/tags/构造函数/index.html","57ceb6f90f6a5e6a28e97980b82fbc8f"],["/tags/架构设计/index.html","ca54c33c969dbfc8140a0d9f3b402b97"],["/tags/模式匹配/index.html","c6f2ed73110b20c54c3cd63e90d417e7"],["/tags/生成器模式/index.html","119462a087228b9310a08bb14d4a5dc3"],["/tags/用户体验/index.html","e68b77e104ace0ceb69c4982e413e095"],["/tags/用户协议与隐私政策/index.html","2d50d5d9fe5b35f50af18a32099bf670"],["/tags/类型与操作/index.html","6aa874c1b7e6dec8d61978cda2722a0b"],["/tags/自动化布局/index.html","88c0a9e313156c71ec33845aab121c41"],["/tags/自定义UIView/index.html","4b5fea39d6c831b8688a063db2302e68"],["/tags/自定义转场/index.html","18d321c3475cae92fbbadd8bea581e2d"],["/tags/自适应布局/index.html","4e6b87532317871fcf6ac04359c24d85"],["/tags/表达式、变量和常量/index.html","230497339fdf13b79c307e6f02ee7e3d"],["/tags/设计模式/index.html","3ea4fffee029bb000fb88b3451595574"],["/tags/设计模式/page/2/index.html","12e824bf251e738b58d83daf4524248e"],["/tags/设计模式/page/3/index.html","900566cd2cb495d58d711a97d4bae2df"],["/tags/访问控制和代码组织/index.html","2acdc8e309ce3855580316e49f29ac7c"],["/tags/运算符，下标和键路径/index.html","a3f4c5c5532434d3c1cc54c3c9363de5"],["/tags/迭代器设计模式/index.html","cc4521643cf8abdbd780846bd1238bd2"],["/tags/适配器设计模式/index.html","954fbaa2afa3bbed58a055fdd0bea2b8"],["/tags/错误处理/index.html","e6ed0e7091f0d36434c469e3cbafef43"],["/tags/静态工厂方法/index.html","84d219e20d1e9d4b3c5725d0b520e81c"],["/tags/面向协议编程-OOP/index.html","4bcd4c72339d7c3e0f3add925da00b1b"],["/tags/高级主题/index.html","e29b86812a06c145d774121e5547887d"],["/tags/高级协议和泛型/index.html","8d9db81ea9131783b1274d22252f7f68"],["/tags/高级控制流/index.html","6f2199e72e48419eb19c7de2d77045e0"],["/为iOS应用构建输入表单/index.html","cd588067d863f49d02d2cdf25773d4a4"],["/产品开发的幕后花絮/index.html","c5c854ebb8430b7bc06f199418b830d1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","eddabdd00fdae2e0fb5ec51f759c588e"],["/冒烟测试与回归测试/index.html","d4e0c3cb09c00c0d8b27a03dfba961f4"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fccb094e20853dd07ce5ac1e02bf55b0"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","143ef7b102814794273146f73cbec846"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e860fd28e3273341656785dc53ea9c39"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","fa51cb60ba9e16ceb0b0010fe769fa7f"],["/在Swift中创建自定义集合/index.html","6429e72097fc0cd1eb2aba15d3cae909"],["/在Swift中处理非可选选项/index.html","8f5932c68fbcd877a507353b9b202fbd"],["/在Swift中生成随机数/index.html","a6d079856835ef16754391ce505cddeb"],["/在Swift中重构单例模式用法/index.html","d20d40edf2b9731c8dd560c3502f62b3"],["/天天兼职用户协议与隐私政策/index.html","6ff9c87f20f6c994e9ef9dbafec25a97"],["/如何为VIPER编写服务？/index.html","4c22b88e4ce65fc838bb82de0320040a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","1ed88d15328dcd4cbbbb1951a5751f5e"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","a8cd569c04cc1b4e2feb4d6d23949ddd"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","92907064214de3a96173f87b4b344cd8"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b9fa72f1c6fe32ccec3529e30cd6c04c"],["/掌握VIPER架构/index.html","931553540daecdfab0be7de5a40c2136"],["/揭秘 WordPress Hook 系统/index.html","18742c87fee5bdda9806335c0bd7833e"],["/比较工厂设计模式/index.html","dc5dbdb3a6429fb2f4ce6545500c06bc"],["/深入了解Swift中的Grand Central Dispatch/index.html","d59c7180566eefda80635771d521c6c2"],["/深入研究Swift框架/index.html","d1a0f8f835c3879c839403507b562c13"],["/美豫直聘技术支持/index.html","35b030fecdf10d63d75ffc19c4e21540"],["/美豫直聘用户协议与隐私政策/index.html","1c8c773f30bef69ef23c81de2f40144d"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7961e5d8e36163abdbe3d86d2eff49cf"],["/选择Swift而不是Objective-C的5个理由/index.html","bc7592b1f0b75edb5a84e47b07931849"]];
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
