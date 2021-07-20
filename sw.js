/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","4a2c890d8cbb05f8803d455f9b924797"],["/2020年iOS面试题总结(三)/index.html","536b3f219f72af59c77ba26360588109"],["/2020年iOS面试题总结(二)/index.html","3272f3c9fd9a0f7ab53999e15816a0ac"],["/Advanced Swift系列(一): Swift 简介/index.html","a5974d39803c9fa250d1bd2068f98606"],["/Advanced Swift系列(七): Strings/index.html","9f8f9d4e8b04e71450a3d2182813e435"],["/Advanced Swift系列(三):  Optionals/index.html","c1c5d66d5799840367ca1442387f5fd8"],["/Advanced Swift系列(九): Protocols/index.html","d57db5560ad4ed635ab09dacf2a85c4d"],["/Advanced Swift系列(二): Build-in Collections/index.html","09deac235878e2b45b248f0a908270b0"],["/Advanced Swift系列(五): Structs and Classes/index.html","ec9ab7938791717f42c4df97d1475b90"],["/Advanced Swift系列(八): Generics/index.html","be099fd091832c5af87a3316214681c6"],["/Advanced Swift系列(六):  Enums/index.html","5f556ed1bcfb996cfe2986086a31aa4c"],["/Advanced Swift系列(十): Collection Protocols/index.html","4f3b0aafe13987c966e3a9cd1246667b"],["/Advanced Swift系列(十一): Error Handling/index.html","a3d861f62d11d7d0d82e60e397b49ad1"],["/Advanced Swift系列(十三): Interoperability/index.html","ffa65e6dab29cd7d82dfa5ffca2df2fb"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","4fb0efc0428c82d8a52cea3cf4b98878"],["/Advanced Swift系列(四):  Functions/index.html","5241783026bcd5e62e2a2d3c65f0d552"],["/App Architecture系列(一):  简介/index.html","f1b764fa342d1847b5ee95eadf7c1894"],["/Functional Swift 初探/index.html","195c74c1cbdde21549a9253b9f5cb53b"],["/Git 使用小技巧/index.html","97493a1701ff3e8043dc13e94c34d584"],["/Go 基本语法初探(一)/index.html","62eecc12ca49b8e6d63eff3b968836aa"],["/Linux VIM 命令及操作小结/index.html","1311cf3cd0993923191740a3336b10ec"],["/MySQL 基本操作/index.html","4df3548d2fe0297911f435bbfc13b4e1"],["/MySQL-列类型和数据完整性/index.html","d0bbd57929abb1e8f0cae867981c998a"],["/MySQL-数据库设计和查询语句/index.html","8083b503f7b37868c3606099ff83de6d"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","bed8e43322c5988aad02650162f8ea60"],["/NSCODER和SWIFT初始化/index.html","d8b10d731502e2bc361b49f5da636516"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","06048b16a69d0742bfb8c0f9e7b991c8"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","e98c6a0628fe57d627fbdc94a0090745"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","4c34f31b3a957206e0d33c815925fcef"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","20e761a987ee8662601d3e29f84a2585"],["/Sqlite 使用Tips/index.html","c6e13297602541d02729c1b65e2c9ec9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","6de870041e97b06ef4c4b2b2cc93cfe7"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c49cef9ccf92439f65d779a4ff0b65c7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","628917721a43556e44629f9d53fa6ff0"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","5556f075f813899bf0a299a97d2022f8"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","994fa618c8694605e960ad65dd02886f"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","8d699c96cfbc20ee4f29b45e5d0f12a2"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","2001ec20075bdb8590ba62de7e7fb4d9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c763690bbdd8bb0bced1ef5a4e6b8746"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","f420b0fc4dafd2ec586a6851d9211242"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","2c7367ab4254478d30b7ff836421f1a3"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","44a299d7b658d3090be8fb27a6690ba8"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b634897a0678bf0d543e28ec89c69b5f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","35555839ad37a9db4cbea322f8cb505c"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","566f8d95e772ed3209af184e19525d7b"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","a77f512372cfc701ff8f700cbd910944"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","de863adddc155fcec6eaf97a42b10715"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","471f3cd619e9bd6a477ea428c8f14eb0"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","5d23f328a84b6cee838017a276b6e1cc"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","79abdaa1830aa2bb7ed4eef42dfc6a95"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8f967d177d015fda8b5bae68b36c332a"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","1581583ff866f617f2cec0bf678f8953"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","61e9ba22d554da19f2a130147fb96be6"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","48c365f706677ddd47ee0f4f62d15c1a"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","fe87adae55852adc3fa0ab3532a92b84"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","0b318ea8391be66c2a01c2dbf8d5b2fc"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","01a28b5856e2e9ea13e26d3caece41a7"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","cb98677d611bb786f754335f9f55388e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","ad59aeb3a967b738405ae0e045475532"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","9a5c424de1dd2b1d2093995efd89c868"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6c93bf13b2054be2d367f654b680f238"],["/Swift CompactMap vs flatMap：差异说明/index.html","a2091a1b5b53104a84defe15ea050009"],["/Swift Grand Central Dispatch 深入实践/index.html","9b84717a26fa275691ee875c90b6c868"],["/Swift Lazy属性初始化/index.html","a55f35e9b1200917ed975dd7ea4bf533"],["/Swift Promises 初体验/index.html","e9fe66ef93daa55bf2369172043d592a"],["/Swift Promises 探究/index.html","5af78abdb88568a92cde51151bb3734e"],["/Swift UICollectionView使用指南/index.html","4e25470c3afa342da35142861c24a8e8"],["/Swift URLSession && Combine framework/index.html","45ab1b7d9058d873fcea41acf2ef47aa"],["/Swift tips/index.html","2c8eebcfc80860937be61008f26c721b"],["/Swift 唯一识别的视图/index.html","fe514a9b7ec7835f133b1cee7d18ba9b"],["/Swift 如何学习现代UIKit？/index.html","fa1ba5e5a8f9a4f058ec0abf1609456d"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","27b0a0df126e268ab5e656950937d71f"],["/Swift 用 compactMap 替换 flatMap/index.html","3dfd0e3cec4867d1ad645e71c7623439"],["/Swift 选择和播放视频/index.html","67c5314ee92b261204ae7da7139493c2"],["/Swift中UIColor最佳实践/index.html","1e68b09873dd328a5965f5dee8966da0"],["/Swift中快速简单的工厂设计模式/index.html","e532cbe4a5a215963a3497b3ddf7fe6a"],["/Swift中构造函数与静态工厂方法的比较/index.html","9188e33bbb6aea8d9d22930ea46f2bae"],["/Swift中的UITableView教程/index.html","bb0999d701eaa77bf9b342d400081836"],["/Swift中的懒加载模式/index.html","2f07c6c45c00c63a406a485cf5e1c64e"],["/Swift中的模块和挂钩/index.html","126dff56619437fbd4a507b4499d54db"],["/Swift使用布局锚点添加约束/index.html","daa0c3a0b675745372a9b3d0cffe1d54"],["/Swift依赖注入设计模式/index.html","5fa4b774283e5636141f91d5c2c11f7f"],["/Swift关于Dependency Injection (DI)/index.html","78c707cae5314e5e987fb4321ac8ad23"],["/Swift初始化模式/index.html","3468e62cee1499992f0816110d2eb0ed"],["/Swift单例模式/index.html","062fb107bf87475305120ead86aadcbc"],["/Swift原型设计模式/index.html","3c002ae45d3f7dc4f323cf83e4177d33"],["/Swift命令设计模式/index.html","5ef1b45fa7065fcdcdcad5024f768ef0"],["/Swift外观设计模式/index.html","e699f0b0fa687e80277b326ec8f08e78"],["/Swift委托设计模式/index.html","98b9d820febacaa38998c899e5822215"],["/Swift对象池设计模式/index.html","db2b38c3917b0e29940f43119213d154"],["/Swift工厂方法设计模式/index.html","5d66e15fe3d5ba5491e15870f87627b3"],["/Swift带闭包的懒惰初始化/index.html","34d0b19655709f4c3b3cf7a520839692"],["/Swift抽象工厂设计模式/index.html","afa528664730c4508729426569007c19"],["/Swift掌握iOS自动布局锚点/index.html","ef28aef11b82c7f638945434559e9cd6"],["/Swift支持旋转的自适应单元格/index.html","eca34cde620f07a4a6ff1adc5bc396a4"],["/Swift枚举值/index.html","27a2ed162db7b6c8474372f9c9619d84"],["/Swift生成器模式/index.html","78c951b31709bb78b1a0be74f610fc1b"],["/Swift结合Xib文件自定义UIView/index.html","028edb9970a36ad430115f8ea409e143"],["/Swift编写的20个iOS库(一)/index.html","9b79e46716a4f367d8f0a52918230041"],["/Swift迭代器设计模式/index.html","84e76e6c425db44ea80c014d1ba2e57f"],["/Swift适配器设计模式/index.html","4c81f2f11af02efab99b131a2dff17db"],["/Swift静态工厂设计模式/index.html","521e416148cf809e0aba11378c863fe4"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","93b606d0aa8c864866a1d89134193c47"],["/UICollectionView data source and delegates/index.html","f79e098798ca92edb36eec9df64ebc54"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","3c33525ffdf150cb5d2d40aeb306b9f3"],["/UIKit初始化模式/index.html","3432567b078c155525de15f135d895ac"],["/Ubuntu18.04替换国内源/index.html","02e55f9742ef982fec03ffc770fb09a7"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","4fba73ba251c83e081d3d2bf3ee39474"],["/Vapor系列 (一) :  Vapor 初探/index.html","6997719da84acae3b46b45d00bca493e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","60ea9356e591b0c2d6c5315ac84bb602"],["/Vapor系列 (二) :  Hello Vapor！/index.html","0e3c295cb8dff9363e2d6a3712d7c84b"],["/Vapor系列 (五) :  使用session进行authentication/index.html","8f81e16070821b6f4306f6acc50d77c2"],["/Vapor系列 (四) :  创建博客数据库/index.html","1d12290c56911f425d297736c1ce04ad"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e1ed884a87fe52461880f7085744d7f2"],["/WKWebView与Native交互注意事项/index.html","5d7d0b794ead8902186fad84596890aa"],["/Xcode扩展/index.html","b291bdb4f4a32dafd603ac990fccca66"],["/about/index.html","32c7b4f1fdb2c2025345665a4f1d0236"],["/appleOS的Networking示例/index.html","a6205d0c70f8d7a64585fb98ef1eafe1"],["/archives/2020/03/index.html","b15bfceea94ab9361eb66f7643612c33"],["/archives/2020/04/index.html","62eb69c6a26f42c2b4a61c315239c2d0"],["/archives/2020/04/page/2/index.html","8886e90006c216a2e367a4c827180cb1"],["/archives/2020/04/page/3/index.html","c53b697720a4b8e5513f54f6475b2795"],["/archives/2020/04/page/4/index.html","6e9c9efe82ed0f71ca53986729480221"],["/archives/2020/04/page/5/index.html","46fc9ea7d199fbae63ff63e10c561760"],["/archives/2020/04/page/6/index.html","079a0688c373a5545a047198296b3829"],["/archives/2020/04/page/7/index.html","ecaabe8f67a317656c135f00eed5b751"],["/archives/2020/04/page/8/index.html","485a2208067264f92517850e3146833d"],["/archives/2020/05/index.html","414e875e9da819671c5b2135e60e2f69"],["/archives/2020/05/page/2/index.html","56a51d914350d5d260a2296e350cad9c"],["/archives/2020/05/page/3/index.html","1f283d671c520c63748aecfd830e6cf1"],["/archives/2020/05/page/4/index.html","c9a6fccdca3a148d1929d1119e042b6d"],["/archives/2020/05/page/5/index.html","af6eaaa5c16065945a077c05f072767a"],["/archives/2020/06/index.html","e9f7dfa30e63a2c755197beb8f42724d"],["/archives/2020/06/page/2/index.html","7fb3c8ce2cd28234a18e4040c54a2611"],["/archives/2020/08/index.html","4767ae09abf254a3e6a37d4e71aeb3c5"],["/archives/2020/09/index.html","46c785010e6ca80d67eda1841dec141e"],["/archives/2020/10/index.html","a0cb8e16dd747860366652c82e4c4b73"],["/archives/2020/11/index.html","4f32d6a60f30ddd05d86e8936fb0dd14"],["/archives/2020/12/index.html","2b5538acc41c8531b4a2b89c10b26be1"],["/archives/2020/index.html","7a0a5f679f137f25e548806367082ef1"],["/archives/2020/page/10/index.html","e729b95669ef2d8ba1909b231282a98f"],["/archives/2020/page/11/index.html","b50593fa1cdbc714cdd61576511a2649"],["/archives/2020/page/12/index.html","632bfdd29f95ce3d6ab8e1919d44b272"],["/archives/2020/page/13/index.html","77433f849828883f3922b13d7d3d2460"],["/archives/2020/page/14/index.html","fdd0cb4d50140985f0b23d78dbf98cd9"],["/archives/2020/page/15/index.html","d8e4ef85adaccfde9bbab1dba15b017e"],["/archives/2020/page/2/index.html","fd8efa46b527e81ddf4df3beb6ee4902"],["/archives/2020/page/3/index.html","11c7833d34e9bec2f2082c419d0b64f5"],["/archives/2020/page/4/index.html","9074dd1b17e32f5ff3017f3c04ca3e70"],["/archives/2020/page/5/index.html","49d9e77b3d6a798987bc853af35e9da7"],["/archives/2020/page/6/index.html","098ae153f513b29e7dcd7a4c30546a61"],["/archives/2020/page/7/index.html","7908fd25e123462bed9180823ba333f8"],["/archives/2020/page/8/index.html","0db9cc512d6d13714420b2c2072fdc10"],["/archives/2020/page/9/index.html","d3515ace233d5bef0003f231fa745767"],["/archives/2021/03/index.html","f2eddabf86b528201775e55d70f3c9c6"],["/archives/2021/04/index.html","7a19f7ab55d88f651bd1f32d5691b407"],["/archives/2021/05/index.html","cc32b70e43f8b9158cacf547ab881873"],["/archives/2021/06/index.html","8fbbfec1a6117b9d4a120a1e48ae8bbf"],["/archives/2021/index.html","45aafefb90c1aad6697ba5120f42d535"],["/archives/2021/page/2/index.html","116a3b1b70210cda96a018cb271b5efc"],["/archives/index.html","17bd9d930cd7d2bd8e8f6e88786249fd"],["/archives/page/10/index.html","ffbb427e6238f1097bd1b7a4299cb9ea"],["/archives/page/11/index.html","24f0ec8632a1e58828f134673795fc0f"],["/archives/page/12/index.html","c5fc4d855710daa72ccffa214d1841a7"],["/archives/page/13/index.html","c0ffa05abdd2a0b7070c1d5762223b7b"],["/archives/page/14/index.html","e83e613733ff93e6f3893086fbf9cbfa"],["/archives/page/15/index.html","e438315703f0b0c9d1960a88f8610794"],["/archives/page/16/index.html","9149c13130788e2f54dde28aad072ac4"],["/archives/page/2/index.html","a75fa454e3277d1d32176b2ade383fdf"],["/archives/page/3/index.html","0ca4c8fc10674b0570dfe97fed9af1c3"],["/archives/page/4/index.html","0883069b0f5dc030e666e233110b6bfc"],["/archives/page/5/index.html","5f4b1af7f3afc5c586bf61f9d37ec1c5"],["/archives/page/6/index.html","10d540fa4b27a8ca2985347777d0a44c"],["/archives/page/7/index.html","5b5bf10d5bc5fccefc9261ad3c493e46"],["/archives/page/8/index.html","cdf0bb84185bbb3ea6cee08d5ef871be"],["/archives/page/9/index.html","8befd9b85c55d62f148d637c8c7a554a"],["/bugly 上传dYSM文件小记/index.html","0740601e4a9dd018a3a19d58e35fa8c1"],["/categories/Advanced-Swift/index.html","6342d4554dfbd41e95cf7b7c97762684"],["/categories/Advanced-Swift/page/2/index.html","762189a5691f80a5f453734d34a2b256"],["/categories/App-Architecture/index.html","756498cbf23ad3346c643c5218cc7585"],["/categories/Array/index.html","244539e0597c1e21ec871100fd64fe65"],["/categories/Codable-protocol/index.html","4cb7e0ac5ee433434e530055e5d09091"],["/categories/Combine-framework/index.html","b99ea498cffb632271c7e90bffc83f9b"],["/categories/Combine/index.html","c5a0ac60436ba424b444ffb0817fc44d"],["/categories/Go/index.html","fdb6d4ae458bc318d6c1c78c150b0b3f"],["/categories/Grand-Central-Dispatch/index.html","2928cd56ac4cd48332cb34ede02c7a7a"],["/categories/Hexo/index.html","c98910474b25d1de08f44cef95d7f2dc"],["/categories/Homebrew/index.html","79545bc4c21baf678bd46069f0808636"],["/categories/Linux/index.html","ef4e0f6a2de32a347dc1bf1844500889"],["/categories/MySQL/index.html","6b7543b8bcf8d87bb99c741996728337"],["/categories/Promises/index.html","3d9e3260a44ebbecc180be5e92a7b6e7"],["/categories/Result-Type/index.html","22b84366465e055ba5a87bdd0fcb0541"],["/categories/RxSwift/index.html","35f0cde8882a69520d82fce225ddf18a"],["/categories/Server/index.html","a3516e34a666b4fe706f3ef084ec63e0"],["/categories/Swift-Apprentice/index.html","c44fa2be49a42eb2c338b2d1c36406d6"],["/categories/Swift-Apprentice/page/2/index.html","0d3f64e6a1593d86134cd7cf9c5d1810"],["/categories/Swift-Apprentice/page/3/index.html","6bf8e41d23431a3e38a635dad9b9d6db"],["/categories/Swift-源码阅读/index.html","188ef59750076e1fc3ed89f1f9ba467d"],["/categories/Swift/index.html","dc37c5bb3011e35a54fe72cc9be4f53c"],["/categories/Swift/page/10/index.html","69d3ebee8e3550d29380d8f624a93f4f"],["/categories/Swift/page/11/index.html","901ba8866c6a44e87052ed1201851495"],["/categories/Swift/page/12/index.html","ee0f9532f190c4e085f06dca5076e1b5"],["/categories/Swift/page/13/index.html","d90f9a0f58a8803ff6bb6b685dbcb0cb"],["/categories/Swift/page/2/index.html","3bf8a250ad12273d2773e1c4d802c1d3"],["/categories/Swift/page/3/index.html","23d98490675eeed8412d451118ca1518"],["/categories/Swift/page/4/index.html","b31331825ae84b3b0b4c87bcd4a48883"],["/categories/Swift/page/5/index.html","8bee282a7bbc8999d30e58aafe39c19c"],["/categories/Swift/page/6/index.html","a2773ebe67ec9642218f51687457238b"],["/categories/Swift/page/7/index.html","2391fff485af407066e19654a94fa115"],["/categories/Swift/page/8/index.html","9b971414cd993ebb2e96c7e634ae2a1d"],["/categories/Swift/page/9/index.html","d77596e6fbeacd63207d974ac1234aba"],["/categories/Swift5-2/index.html","c4040969f74cabafd44c8dc3082560f7"],["/categories/SwiftLint/index.html","c737c96286c83faa454d95e71e13e938"],["/categories/SwiftUI/index.html","ae5c844cc9bd53765b864474786823bb"],["/categories/UICollectionView/index.html","b5a898733816bd0a3bc4eeef0cba07c1"],["/categories/UIImagePickerController/index.html","5203a62d8580cc340fafcc9be375c57a"],["/categories/UIKit/index.html","572f93c995dccb72e9c279c7700b5f2f"],["/categories/UIKit/page/2/index.html","e8b19e8f0b923800ab1ad6ae6414fee5"],["/categories/UIKit/page/3/index.html","fba2a96fb775a8937515e272fd21782e"],["/categories/UIKit/page/4/index.html","22f875136848702d7084160a9ac4c5fb"],["/categories/UIKit/page/5/index.html","50e6ca66b6a1cc9b72b3f7b4dca66774"],["/categories/UITableView/index.html","888e80836ae464786219916f2e69f7f5"],["/categories/Ubuntu18-04/index.html","98ed603afa36d5b9a99ae474815a4ee5"],["/categories/Ubuntu软件源/index.html","f5a93d287c1f31854f38f6c0e46a1b1e"],["/categories/Uniquely-identifying-views/index.html","205794962ec257f927efb8fe3dabaaae"],["/categories/VIPER/index.html","e5312ba22ea56c6aa1bca8d48cbaba18"],["/categories/Vapor-4-0/index.html","5c5814f5899ef6310a340b72668e38e8"],["/categories/Vapor4-0/index.html","6a0e6216cfd78ad29622d92e29daee52"],["/categories/Vim/index.html","4f6a7cfb4019b2839e7b4b7c4c43c8ff"],["/categories/Xcode/index.html","ff0f96d85c2f2344cb98c547a969251c"],["/categories/appleOS-Networking/index.html","d97043eb60f3f33e5c4df41ae08f4514"],["/categories/bugly/index.html","f4b54ad0cd21b8cf492afa0ce3421b39"],["/categories/enum/index.html","7ede0787a4763c503b743cef3b4528cb"],["/categories/git/index.html","182533dce52e8301d6738e4365d0d5fa"],["/categories/iCloud/index.html","fb15c8c03c4823b6a96416a752737f0d"],["/categories/iOS/index.html","5cd9d32ea8142184e318a54dfb5fec42"],["/categories/iOS/page/10/index.html","69ce34e1dc1f3bbc7cdfe668f2510361"],["/categories/iOS/page/11/index.html","168c79d03f625d55d5a6ee50049f8a6d"],["/categories/iOS/page/12/index.html","d81a592f46fd1552c765ed6b5a987e8d"],["/categories/iOS/page/13/index.html","5e84e1c346469b9a6831379100024a77"],["/categories/iOS/page/14/index.html","85da5dc448071ffcd2dc5de5fda83302"],["/categories/iOS/page/2/index.html","67618a7bdcfb653e836f2cb442eb4b08"],["/categories/iOS/page/3/index.html","035af8eb5ae3fad544efdb06784e5989"],["/categories/iOS/page/4/index.html","9a101dabe51baf12b4556304132107b8"],["/categories/iOS/page/5/index.html","12ed01fe6c9c736658b7890ae7a4c8c2"],["/categories/iOS/page/6/index.html","b611bce46ddf2440e90e1f2434f2a88d"],["/categories/iOS/page/7/index.html","36169cebbef71d2adbe1a73dfd6b05e4"],["/categories/iOS/page/8/index.html","964416bfeca4775c967af511a583531f"],["/categories/iOS/page/9/index.html","27d4102c93064a4c6bc0c2c3bbf5fdf4"],["/categories/iOS面试题/index.html","bf32fa9b5c8dadb6105c32bc222ec70b"],["/categories/index.html","687d731cb41e60f9d5ebc29d2ab81af1"],["/categories/random/index.html","8f5cfdb1aec1653dcf6d60cfc28133f8"],["/categories/三方类库/index.html","3e3695ac3821aacb10c5dda7f55c0beb"],["/categories/函数式编程/index.html","9a8fc2184734c64fa8b2cf207230377f"],["/categories/子类化样式/index.html","abb26ecfd3ae506dd0b7a14b1086d582"],["/categories/开发技巧/index.html","6be94f184e440f594c8148c50316135b"],["/categories/开发记录/index.html","04a3572e67017331d34270704ad7e656"],["/categories/技术支持/index.html","e659770eddf2003972368f9980b42389"],["/categories/数据库/index.html","729506fc125add78bf464dfcb1613862"],["/categories/架构设计/index.html","dedd61e423a7949d525a0eb6bad17a81"],["/categories/测试/index.html","d0c712b6bda3a74726175569eaf09d40"],["/categories/用户体验/index.html","6262d0eab9e14b6fc3413c64da8d7812"],["/categories/用户协议与隐私政策/index.html","d1a793122c37382c8b1327ff6d5d8afb"],["/categories/设计模式/index.html","622457f764144f84a8a2419eda4cdca4"],["/categories/设计模式/page/2/index.html","2dae17d96da9379e2f3c66cbb162d67a"],["/categories/设计模式/page/3/index.html","a12265c0f7fa7ddfd8012ece4b41ad73"],["/css/main.css","a80fa82ccbcb582b9608d577eaab3f70"],["/hello-world/index.html","a6fc72b89da03be6e9a9f92577310e3a"],["/hexo部署失败/index.html","17138e945f9e1f4839387dbb3c377155"],["/iOS VIPER架构深入实践/index.html","2e13837a8c59d3716c7f8e2b4d745c36"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","9cbf3184c15ab06e133add4971d863a5"],["/iOS 自定义视图，输入表单和错误提示/index.html","66ed1ae5423c1d4709c919278a3cca1f"],["/iOS如何使用iCloud文档？/index.html","ae42042b2ee9d8235d1158b40cc19724"],["/iOS子类化样式/index.html","eb1c5172279d07380477ee62fd0ab8e8"],["/iOS开发记录<一>/index.html","12f78a8096456930ad02765a5eea58db"],["/iOS自动化布局编程/index.html","6405d67c2599c3507db0b560f0d38b38"],["/iOS自定义转场(By Swift)/index.html","0deb570c20e106eb4302d8acdb01e9c0"],["/iOS项目架构：使用VIPER/index.html","540aa71622f362537b5a510d25455202"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","05f9b0006b2e58f181f018615d64026c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4bd16613d2c05865c24d23c98381b2b8"],["/page/10/index.html","a03cd80a575e2754305e9746c8161e2f"],["/page/11/index.html","8c249e857a838f83f7365256ac224d04"],["/page/12/index.html","eba8b3f3a4b024c632d283ed55205e59"],["/page/13/index.html","78e8327d3b9a6517148913e7609c7b0f"],["/page/14/index.html","1d155d6a42717b247281af01e940c7eb"],["/page/15/index.html","c9cd26df2aa865922dd4961adc2009ca"],["/page/16/index.html","7e1f72355fe30d75b9dd603b1ef980b7"],["/page/2/index.html","c9336436924f491ecb7d2cea6e820220"],["/page/3/index.html","47a7f7a7b5f45d6e5c22a854beaec152"],["/page/4/index.html","3f9a957bb3a3fe8fdc72da2faed0b311"],["/page/5/index.html","ef03e551939db280783e5aecc16bb9bd"],["/page/6/index.html","090795c9b3736be7c36fa0be53a73328"],["/page/7/index.html","13ada00629dfc455edf0df6cfc3d49c2"],["/page/8/index.html","988b5b336ec653830952a29efe449418"],["/page/9/index.html","3b7d66bc62b76366910d342dc5958da8"],["/schedule/index.html","fcc8d7f4b90783a84224dcef4ff82223"],["/storyAppPrivacy/index.html","1dfc715f9d284f3c105327f6a747b2b6"],["/sw-register.js","2896337e4abf071e1b74e9d75cb64301"],["/tags/Advanced-Classes/index.html","1bdc011ad466c57837dc3d7701d58777"],["/tags/Advanced-Swift/index.html","393901812a5ab1a022f245402296dd1b"],["/tags/Advanced-Swift/page/2/index.html","ce148d4bdf10481d0e39cf261203703e"],["/tags/App-Architecture/index.html","d2b0170d197166fed2ec899741acd427"],["/tags/Array/index.html","c05aba2dab14d1dd19692f3b7918acc7"],["/tags/Arrays-Dictionaries-Sets/index.html","d5950f18088cb8552d3a37a683f485b4"],["/tags/Authentication/index.html","0f3fa03c429a15a73f53dd67848d8368"],["/tags/Build-in-Collections/index.html","f8da326f31b4934cf4d065c9081eb840"],["/tags/Building-Your-Own-Types/index.html","d1a3f28b373d8bd59b7be11b0adf3294"],["/tags/CMS/index.html","97e9ff586c921a0ceff8544efac57d16"],["/tags/Classes/index.html","c4f9dfbf304f3a3181c17c803634ca7f"],["/tags/Codable-protocol/index.html","84c860c561c2cd134544b0adf55e055f"],["/tags/Collection-Iteration-with-Closures/index.html","06a664d14ae9c2219f610e72ccdcc922"],["/tags/Collection-Protocols/index.html","de20b2363cacca997217545035f9fba9"],["/tags/Collection-Types/index.html","395bcec23bf7cb8cd83361e6381e1b3a"],["/tags/Collection/index.html","e52c84816e187430d2d5c5be20d3df07"],["/tags/Collections/index.html","52538387bebbe722d7539c217d241cf4"],["/tags/Combine-framework/index.html","f48a40dc78ab9d871331592443ba0bc1"],["/tags/Combine/index.html","92bedb6d3330fd11df74385afdbdc246"],["/tags/Dependency-Injection/index.html","a44c4c8c193de9d123dc1f984c9e0a06"],["/tags/Encoding-Decoding-Types/index.html","c3b5b910a97ca8f0eb44cfe19ab11023"],["/tags/Encoding-and-Decoding/index.html","5a917aa477e3d38e4681a97dcba30c29"],["/tags/Enumerations/index.html","d5ff896e20a14ad2ec4fbf653b98e330"],["/tags/Enums/index.html","4a594cd4cafcc43e8c67d0e3f17a26c6"],["/tags/Error-Handling/index.html","f7a833f52a9b98f36d87a5cbbde044b4"],["/tags/Functions/index.html","73c8d6614ef27844cfa1df59a7260c7f"],["/tags/Generics/index.html","666148e0a11632e193b488e35b86c0bb"],["/tags/Go/index.html","48f949a6b2d7aa9c80083c5c1dcb8d21"],["/tags/Grand-Central-Dispatch/index.html","dd0c8d3d582fa1a46fa644f62b841a56"],["/tags/Hello-Vapor/index.html","b6b493df6653144009bc30733bf87764"],["/tags/Homebrew/index.html","f4e48033b050c6fc030c838b1be695aa"],["/tags/Interoperability/index.html","6e5352c80e1b9f74481db743dd5913b2"],["/tags/Introduction/index.html","4cc67a7dc39f72b7e6b996a83a555802"],["/tags/Leaf/index.html","ec1152a03b777b7a8f1af3f4c33340c8"],["/tags/Linux/index.html","4cb298eeba1538ed7c1bffe2e81df70f"],["/tags/Methods/index.html","33042f3a46ba976039efcb69e4551379"],["/tags/Modules-And-Hooks/index.html","353a8f4e0e48c564b79d94cc8a049690"],["/tags/MySQL/index.html","34c5018aa8f771cda5d7bef24645e31d"],["/tags/Optionals/index.html","679078f9cd0770e885f4ab1b3fc4664b"],["/tags/Promises/index.html","443312559f35fbac42e58003600fb39d"],["/tags/Properties/index.html","a2712dbff504bea5456d82b18c2830d9"],["/tags/Protocols/index.html","1f64101e3f0baa303f8312ba6447957e"],["/tags/Result-Type/index.html","b79f73108f5d38b475b4a1791a9b4e37"],["/tags/RxSwift/index.html","598be8fe62d4eaa7cb6ec87697b6d905"],["/tags/Server/index.html","2aae336fddec4e53f9aefb4ad7db8627"],["/tags/Session/index.html","a328f413580efb38d816358b0cfcaa65"],["/tags/Strings/index.html","fe0f9a192cb296f62a7c569b64fbdfdd"],["/tags/Structs-and-Classes/index.html","7c9840571fdf1a3f28a9acc3486e2a06"],["/tags/Structures/index.html","03f81a0389024d59006b98793086279d"],["/tags/Swift-5-0/index.html","5194acd1591209b6f43b5fe20f8570b3"],["/tags/Swift-5-0/page/2/index.html","b40fac5496fb6349aea3790b12ef1a94"],["/tags/Swift-5-0/page/3/index.html","7b7146f85e21e7a522a1be7c6ddafc3a"],["/tags/Swift-5-0/page/4/index.html","e64e34c43c9c0991ebda594e8980c11a"],["/tags/Swift-5-0/page/5/index.html","2d2204c76e990a15cebe113f5bb11ae7"],["/tags/Swift-Apprentice/index.html","911af8d0fe7d33dca9da669b459421ee"],["/tags/Swift-Apprentice/page/2/index.html","88a63635743dc3d515af61f2459a98ce"],["/tags/Swift-Apprentice/page/3/index.html","2b577193164ec87970d3a7d3b27c96da"],["/tags/Swift-Package-Manager/index.html","29ad2601a2c882c17be58cce4a56db53"],["/tags/Swift-源码阅读/index.html","bd79766e5772da496f2821e403771405"],["/tags/Swift/index.html","42b5fe7db94e0760e48c724fd778b1e8"],["/tags/Swift/page/10/index.html","9322c87b6a7a59165cf73a67c8db9575"],["/tags/Swift/page/11/index.html","fc7928f8c56319691703a3ca8cb8191c"],["/tags/Swift/page/12/index.html","ecfc1d6c2e4a51ef78b303bea4f5f3d7"],["/tags/Swift/page/13/index.html","db199d4dc53d8f9f25d0a8820b1d59a5"],["/tags/Swift/page/2/index.html","973fbd2d73ae69fb7c94208dc0149545"],["/tags/Swift/page/3/index.html","deedd69ecd17311e8ab6a7ad0d0987d0"],["/tags/Swift/page/4/index.html","56a8b03bc1a8f8105ca81cb9a4697532"],["/tags/Swift/page/5/index.html","4edc0ae63c5699c00c62bc2da9f6898c"],["/tags/Swift/page/6/index.html","d8bfed96ad372336202096b0d4ad2778"],["/tags/Swift/page/7/index.html","dbcbb8ba4730dc630c47679712928fe0"],["/tags/Swift/page/8/index.html","655b271d972a670f24c3b436433569da"],["/tags/Swift/page/9/index.html","f65082011aa38019eb1e2973c7781b50"],["/tags/SwiftLint/index.html","7704b1d4fcf9d22f8f4605e945177b4b"],["/tags/SwiftUI/index.html","dfac9f0cdbfbd6acf0dcf64f93127ba5"],["/tags/UICollectionView/index.html","ab689525825ffbfd2d3b163bc59dc43c"],["/tags/UIColor/index.html","e8c480fc5c150b4163ead5ffed8836cc"],["/tags/UIImagePickerController/index.html","fcc0d446d9569f959091fa274fb2b38a"],["/tags/UIKit/index.html","b79480e2e68218a0e8ef54bc1e0fe5e6"],["/tags/UIKit/page/2/index.html","d2cb92ee28d15b4436bd263e9de143c7"],["/tags/UIKit/page/3/index.html","f03a06b552412cc03b5da972435d34bb"],["/tags/UIKit/page/4/index.html","2df56a360a326e47686c4b76b3fc5457"],["/tags/UIKit/page/5/index.html","6e13f6fad1e8a11b27fffa3cd1554a58"],["/tags/UITableView/index.html","4185f7c330f016e7487615f6bd7bbd91"],["/tags/Ubuntu/index.html","94c7a159abac0595f782947553e3a2f2"],["/tags/Uniquely-identifying-views/index.html","c851712e40e1d1873e1d5629d1c72ee2"],["/tags/VIPER/index.html","492987a4e6de815d04e32b875ccd93b4"],["/tags/VMware/index.html","af7f7d64cef19cec5443f6ee93d00e4f"],["/tags/Vapor-4-0/index.html","66d5d6c9b43cb1df2992583c01eb4ac9"],["/tags/Vapor-初探/index.html","b2db08bb08a2993a9e4c3f6287c0561e"],["/tags/Vim/index.html","cefdafeeb88546d48086ca16c4de4623"],["/tags/Xcode/index.html","855e43616f81c65162ddb6e3c022f47f"],["/tags/appleOS-Networking/index.html","a21784cb9ee8243664a3a5e3658bb906"],["/tags/bugly/index.html","4fe5b8baa206a7cf6d0c2c745de12b5e"],["/tags/enum/index.html","0ab9d2b8f5f7b9bd594f9d12db37a6d2"],["/tags/git/index.html","936dde53f91ec8db7adf3d836199323f"],["/tags/hexo/index.html","85cfce98f2924744528a7f94af1073e1"],["/tags/iCloud/index.html","a65ece3279b1162b624404a941932e97"],["/tags/iOS/index.html","dcafac5b363d3f86e03866584982f724"],["/tags/iOS/page/10/index.html","d6e5307662d80546fa0019f149828d02"],["/tags/iOS/page/11/index.html","30ad02ad998724bfeed05cef5c0706e2"],["/tags/iOS/page/12/index.html","d6da332c2de4473ea34b8f1970278798"],["/tags/iOS/page/13/index.html","d69edef8f47fd516330966ece5d737e2"],["/tags/iOS/page/14/index.html","0dcd2eff122363d4c6e2541a708b3c72"],["/tags/iOS/page/2/index.html","1e915ecbde873bf76ce05f9e86bdef4f"],["/tags/iOS/page/3/index.html","bc7afaf527b2a5f6fdf4108641ec89c8"],["/tags/iOS/page/4/index.html","37e6df60eb759ba21b979741e828690c"],["/tags/iOS/page/5/index.html","2a347d5c2e7d346026353d2563334606"],["/tags/iOS/page/6/index.html","de0db57bb4f982470ad9e5dc4d28532f"],["/tags/iOS/page/7/index.html","cc92563b441b84c98f4f5c40ee94029d"],["/tags/iOS/page/8/index.html","22bcc09ed50835f6ca96f5c1c85ee07b"],["/tags/iOS/page/9/index.html","3e2e5756af3c033390c535835f764a99"],["/tags/iOS面试题/index.html","cfafc4ed1ff4da583f29bcfb50000e74"],["/tags/index.html","7c70638d28ef608b55c2794f2c9cb8e5"],["/tags/non-optional/index.html","cba48b272cb2e22814ed39b0ec08ebd2"],["/tags/random/index.html","35a89ae19f60d7ebe8a3ddcfc2b5dbb7"],["/tags/transition/index.html","55ca96d830491c935f7a3209ff2d4857"],["/tags/三方类库/index.html","814f25ed260e578d0ef59c02a484307e"],["/tags/依赖注入设计模式/index.html","4642afcb33d08f86ce807fb447a343bc"],["/tags/值类型和值语义/index.html","fa1920f7c6c14f944f7afbff9028b34c"],["/tags/内存管理/index.html","652cf3dc239f1e072cb4cb6caa5fd3bb"],["/tags/冒烟测试与回归测试/index.html","143e4d4a276d458b2777712a3824d462"],["/tags/函数式编程/index.html","69dfc84f09b2e5aa9e2a0c4456f545a6"],["/tags/创建博客数据库/index.html","290d62df2c7de24c863878aef4791acb"],["/tags/初始化模式/index.html","0d581e49df7ce5d5eeeb1b916010ca7c"],["/tags/单例模式/index.html","8e7526c972103136b55d9af5dac77fff"],["/tags/原型设计模式/index.html","f3c808ade2014841713a40bb9caac9e3"],["/tags/命令设计模式/index.html","e8c84bc32f18fbcfe00519e0e27522e1"],["/tags/基本控制流/index.html","50aef6e1b0ec12a7095782002c286546"],["/tags/外观设计模式/index.html","1b5760018ec6f21b39294c9721bf1325"],["/tags/委托设计模式/index.html","5604531ffc88d54c7328be3609007673"],["/tags/子类化样式/index.html","d0d4ab03c3a25bb175b7c19e11b1a58d"],["/tags/对象池设计模式/index.html","af1a043b2a9a325dd971c1b94ffd0037"],["/tags/工厂方法设计模式/index.html","69dbd5d33d1c4c97e412b12614d45fe6"],["/tags/工厂模式/index.html","f777be120f04d122746fdf10aa46f482"],["/tags/工厂设计模式/index.html","6a05e1d0bcecaa38acb8e5b48ba06850"],["/tags/开发技巧/index.html","b90fe05d6d70f3cb07a43c983e4b73b2"],["/tags/开发记录/index.html","803dd7c15966a9ed3f0c2ed976d5f266"],["/tags/懒加载模式/index.html","6b8e26960a2204d093664f7d237779ae"],["/tags/技术支持/index.html","a8701e1c451c3e5b55aede15ae2fdfe5"],["/tags/抽象工厂设计模式/index.html","45ab0b192ed2f17d151e83680151bedd"],["/tags/数据库/index.html","f6209b66aaa6db10f3bc7e10a2123625"],["/tags/构造函数/index.html","df4f25fa76680877ca36ea7d10585eca"],["/tags/架构设计/index.html","98debb7df48a0896a54c85ec3ca9a5c2"],["/tags/模式匹配/index.html","5cfffce8654983c2070bf0af57c7e9fe"],["/tags/生成器模式/index.html","b8aab1b5291c894adfb7e97c9b0513be"],["/tags/用户体验/index.html","b8fe389de8df4bea1c8516e9d15c9029"],["/tags/用户协议与隐私政策/index.html","67952dd24a9eb7d1e3a5edb7a7d06caf"],["/tags/类型与操作/index.html","1b4f4f374a69a081f60d77a8270e7e18"],["/tags/自动化布局/index.html","9df7be0fc17c5f402dc37716206f26c9"],["/tags/自定义UIView/index.html","f6cbe8e68443dc4110727a1ce07acf74"],["/tags/自定义转场/index.html","d860f9215bd46b9a15018e68316ba9d0"],["/tags/自适应布局/index.html","63374f5799cfaae3b669fc3e8064d6a8"],["/tags/表达式、变量和常量/index.html","782cd04a8f16c3ddef346dbdd4d9fc88"],["/tags/设计模式/index.html","75d59673d1f41968d14e9ba0389c7685"],["/tags/设计模式/page/2/index.html","e3c919fb49859d9dc9c9f5a148a9215c"],["/tags/设计模式/page/3/index.html","a934581a2e3991843f45432d9fc33c1d"],["/tags/访问控制和代码组织/index.html","963f9ee1de9fc0e686b0b89d6f14ad9b"],["/tags/运算符，下标和键路径/index.html","3cbccdf2d6d057e69dd455522d2fa471"],["/tags/迭代器设计模式/index.html","e6ac3c3509b3d2bfcf44ae8669251309"],["/tags/适配器设计模式/index.html","578d2af3a5e863d429457eed0ea3385b"],["/tags/错误处理/index.html","3dda3b58cbcef069549e74b8913ae45d"],["/tags/静态工厂方法/index.html","db05c7e69fc65b1839337f64c5872d60"],["/tags/面向协议编程-OOP/index.html","974e9e001076efed81e7f6046a097211"],["/tags/高级主题/index.html","10627a53e27beaab8bdee614d643a7c6"],["/tags/高级协议和泛型/index.html","35ec4f159870d4c7b009916a23428bde"],["/tags/高级控制流/index.html","e27ec25c9fabcce4970cbbdab1850377"],["/xcode 常用的快捷键/index.html","4fb772b5775e2ccd19477af8dac6d92b"],["/为iOS应用构建输入表单/index.html","9a5ff35c8e9e6c9104bff1e2e8f4821c"],["/产品开发的幕后花絮/index.html","504ce58df373f53d3dfb0ffbdc46cf86"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","95b92e0285c7a1d0d54e176f896f14cb"],["/冒烟测试与回归测试/index.html","c2bed982013fab1b74cf3b350d64d8f4"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","23835cc09d62a7723c2c8e49624b7591"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","977c0fce7df61c0e4b51b2529c207ea0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ce875a21971dd51208fadbf86881c62a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","ed7cded421ddef920395031603afe05e"],["/在Swift中创建自定义集合/index.html","e4350fe92503c4a2a1f9b5ee56733efe"],["/在Swift中处理非可选选项/index.html","b57e472acb11afd6cf4d0fa45e501669"],["/在Swift中生成随机数/index.html","3e3f001488dbdfa522d73c2bf525a83d"],["/在Swift中重构单例模式用法/index.html","59b0e4c2d458f1b49f00f77a5d2aee46"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d85a675a2d19246619624ec7596717d5"],["/如何为VIPER编写服务？/index.html","cf0094b0350fa63f2ad8a2d772d63aac"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a8a64b4c889c5d88c7fcfb7c0b7f8230"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","389d5b5d4156414e612aea8ba730532a"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c98db5bdfec3c4a541f69213069fd475"],["/如何使用VIPER构建SwiftUI Apps？/index.html","5cfbd5e8aaf177d46b5875fdb13ae2fa"],["/掌握VIPER架构/index.html","93ab4e0dc897ba00311c163fcd697d83"],["/揭秘 WordPress Hook 系统/index.html","d58f33b1c95e7936a186ef3773dcb8d3"],["/比较工厂设计模式/index.html","fbb6f5068d15f6d3354d3268bd901575"],["/深入了解Swift中的Grand Central Dispatch/index.html","7bfeb488aa335e8042bbd1ba4cc21225"],["/深入研究Swift框架/index.html","e00485cc36b98bc51957dfe93bb33286"],["/美豫直聘技术支持/index.html","f296f1ddf2bc922b30e537420e22a687"],["/美豫直聘用户协议与隐私政策/index.html","89c21e5ce9adce7258b35ef33c89a3aa"],["/适用于iOS开发人员的VIPER最佳实践/index.html","55926de4585a1382889b83e3a30d5e19"],["/选择Swift而不是Objective-C的5个理由/index.html","9a1866fc4519e9814208374e557847ff"]];
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
