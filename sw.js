/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","2780e7d8db3450a17919e68cb20cca81"],["/2020年iOS面试题总结(三)/index.html","73b6598c39ca76f87e4616715aeaacb6"],["/2020年iOS面试题总结(二)/index.html","ba67a769ca1c24ce9942c90c53717471"],["/Advanced Swift系列(一): Swift 简介/index.html","29f9a37cb2c04e61e4be459e08f2beb0"],["/Advanced Swift系列(七): Strings/index.html","b2fa1514428365b653b03b6f9fc8745f"],["/Advanced Swift系列(三):  Optionals/index.html","c8d7c0532495194aad3ec47604f2f26c"],["/Advanced Swift系列(九): Protocols/index.html","82afc96b751b12fec058e1f5e2f1cdbf"],["/Advanced Swift系列(二): Build-in Collections/index.html","c7fbabeab7d5eb2456971c257ff2451e"],["/Advanced Swift系列(五): Structs and Classes/index.html","b708ffe3b85efd6ca90ef15c173ba6aa"],["/Advanced Swift系列(八): Generics/index.html","2a8fcc7e63d675c552b03ee1aeab2e1f"],["/Advanced Swift系列(六):  Enums/index.html","0adbd5864fd296c161e1464821aacc9f"],["/Advanced Swift系列(十): Collection Protocols/index.html","9ec8bb945f5348ca030dd8522e013683"],["/Advanced Swift系列(十一): Error Handling/index.html","711f10898d8f8f1f9187445abb952deb"],["/Advanced Swift系列(十三): Interoperability/index.html","f37494d23fd3633dc01f2d71ac87487d"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ea3be142e6bef69f83d81bfb64917426"],["/Advanced Swift系列(四):  Functions/index.html","fa1149244dcd18751bcc5b7f856b2842"],["/App Architecture系列(一):  简介/index.html","02d259886d56d7befc2b7cc3a50e8da7"],["/Functional Swift 初探/index.html","b0914cbad7dee0bb3ef02879370c8db7"],["/NSCODER和SWIFT初始化/index.html","b15dd5a3f54b153665fdccd0bc514c94"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","9a3e8e8b78f9322ba6cf18ca22a3089a"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","9ef558d400a3266bdc1104794889bd1c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","896dc5a77afeecfcccfea9e7ce15d1eb"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c9f664d4c2622776d604c1bdde093a21"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","0ef94dd2f879d5f2a463a1cef1422295"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","64d8ddb5874b43085815ea23f39a7f08"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","2ad30de1eac642f1017a1abe35a48eae"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f1eae84d2ae32c28858bc2c534164a31"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e769e26fb47c5b43b5cec09bc28d4e21"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","ce226a25253db8e4641d470d04d24e8a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","92df9e9fcb50ce3334886ae3e99703fa"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","be4c8f89a4551466e2f50876fc13017d"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","6a88075baae3bb93fb756c22ccc56e12"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","6ba95c39983795757013edddd7bacddf"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","e73affd2520fe546588b6c0f6e694c68"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","216335a2611b324e70f19502d374a670"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","4e4ddbd65bba5f4b27f036f7117d7a69"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","1174fa300636ff7c878a228ad3073db4"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","5c6afbf80c715860faca66c497589683"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c0fff0ed4434cd69446bb3543144bccd"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c164e2b600c2d5be5fcf90a46567870f"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","b7bbd12f1b0da95f16199af22ee80ead"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","191e643ccd59b6da8c417569c48796bb"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","14f7c1076392cab6f8efc975553196fe"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","17a659778691eb0f2e5864388c17583c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ad60c7dd0bb0b658e446dc48a4af044b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","42d7ff164d4444b56828b66039046c5a"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","1a168d06984e9a90c86b943abb9d55a7"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","cc4798c40f47fb5f60c8d80a75b7efca"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6df54888aeb985de6fbd468343d6f622"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","65920466430821a3e72e3ee267d7b919"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","1215b328b85cf8fc0542a5d1a1c33307"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0f369958a86223c009889a8a0409e3d9"],["/Swift CompactMap vs flatMap：差异说明/index.html","aae5ca51e1b9a5ec9f0dce062f571804"],["/Swift Grand Central Dispatch 深入实践/index.html","3b60001a5fa4068d512c6f323cffc1e0"],["/Swift Lazy属性初始化/index.html","41ed7269ca1e8c8a48f3abebb5a64001"],["/Swift Promises 初体验/index.html","a3590fd3d954f8ef47d536a21e800bbc"],["/Swift Promises 探究/index.html","ffc73dc9ac3050a358b5be58d7e057f0"],["/Swift UICollectionView使用指南/index.html","668b00a4c77f63bf7249a45732aef520"],["/Swift URLSession && Combine framework/index.html","ca205b8a5769407a8905960f87011125"],["/Swift 唯一识别的视图/index.html","f237e19d4a12d8aa830a2825f21ea475"],["/Swift 如何学习现代UIKit？/index.html","3018056256423b22db32af145c8c22b6"],["/Swift 用 compactMap 替换 flatMap/index.html","2152de8ff7e385830a7fe9cd9c393b00"],["/Swift 选择和播放视频/index.html","0b54cb3595a8e5ef07205a469cd41d04"],["/Swift中UIColor最佳实践/index.html","39028c11b6b78c8786a4d10021bdd6ca"],["/Swift中快速简单的工厂设计模式/index.html","e1e0ea8973358fd4eed3e76a71354b9e"],["/Swift中构造函数与静态工厂方法的比较/index.html","3fc35840ee0782e1735f6b97c570003d"],["/Swift中的UITableView教程/index.html","8fd53fa9a16fda6e6b749511f0243ffc"],["/Swift中的懒加载模式/index.html","c906cf99f864262e7e6411fec7aeb8de"],["/Swift中的模块和挂钩/index.html","ff392cb43634259b66499a2c12c68c7e"],["/Swift使用布局锚点添加约束/index.html","9eae2cef349b53599a28b21bc618f170"],["/Swift依赖注入设计模式/index.html","d8a17f985b12b61ab5bceca6b470db9b"],["/Swift关于Dependency Injection (DI)/index.html","98940fa7f5aa2f0864b4eb370efd4d19"],["/Swift初始化模式/index.html","9dc7295139a695b6dd0c86eccd977518"],["/Swift单例模式/index.html","91f06cd4a5de3ad365eecf3bb31e403d"],["/Swift原型设计模式/index.html","4f1e2706e4a8df0a18812617e9f29420"],["/Swift命令设计模式/index.html","efc36debd2ea01ed810cefaf871bb7ed"],["/Swift外观设计模式/index.html","d4cd0240c69bb495c1cc0d6d4623b999"],["/Swift委托设计模式/index.html","6b66f418e3e661a223cad831d7495ccc"],["/Swift对象池设计模式/index.html","c671f44e28aa21f1ab9fd3a85a8209d1"],["/Swift工厂方法设计模式/index.html","0e1e86e7d790200713256dcdf4d4ef32"],["/Swift带闭包的懒惰初始化/index.html","d2852e421a578813d64876d5a3dfd829"],["/Swift抽象工厂设计模式/index.html","5c976c879bf9fcffe7afd26b9850185e"],["/Swift掌握iOS自动布局锚点/index.html","d474afe5a4e89b4d68a7b843311125d8"],["/Swift支持旋转的自适应单元格/index.html","d026cf679daee32c62af250509b6f6cb"],["/Swift枚举值/index.html","539e235b4f1d1cb01dc31ed634dd7a87"],["/Swift生成器模式/index.html","21a6cd7b1f700bac4819dd5084eba8cc"],["/Swift结合Xib文件自定义UIView/index.html","d36ca395b85164473da64d4aabdd14dc"],["/Swift编写的20个iOS库(一)/index.html","f319f690359e27f96c6893d7dbf5c587"],["/Swift迭代器设计模式/index.html","46ce181a2291031e855b6391d27d15da"],["/Swift适配器设计模式/index.html","33d7b7b54dc512f7b3f4c130aa063573"],["/Swift静态工厂设计模式/index.html","0e1b00f44bc871148675367a7a03f8f6"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","d286315a672d33e8189ab6617524163a"],["/UICollectionView data source and delegates/index.html","6c38ab46cbc55b371844163dffd3f5c3"],["/UIKit初始化模式/index.html","00840c5a60e0fe613e36f2c248349793"],["/Ubuntu18.04替换国内源/index.html","f028126263c432d35c5724de6fc5b7db"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9d943bb0e0ae99aab1d1a1cddc36fa6f"],["/Vapor系列 (一) :  Vapor 初探/index.html","10bb914fa3f370dd3f68739d617d8476"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","26a62aadfa23b3bd01953530e6965307"],["/Vapor系列 (二) :  Hello Vapor！/index.html","bab588cd6d6ad1ac5ffc104c72abe837"],["/Vapor系列 (五) :  使用session进行authentication/index.html","21dcd4d1b15931de93124f2f7282498b"],["/Vapor系列 (四) :  创建博客数据库/index.html","4e375850f061e41736811aa500e434c2"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b2c56fe2eb644c34d9401f7d2cb1ff32"],["/Xcode扩展/index.html","791dad2706feb6715461f6daaea393c7"],["/about/index.html","ae0a4b9e63940f3f494a405073e22ff0"],["/appleOS的Networking示例/index.html","85d9707aae46eb515aeb6c08cd0278df"],["/archives/2020/03/index.html","8ad6e24aa7b6c0ec5ecd2e2c336de00a"],["/archives/2020/04/index.html","1f0bcb1f00fdff582ae24b4bd761f9de"],["/archives/2020/04/page/2/index.html","465a880c658ce22ef9dde4908f0016b6"],["/archives/2020/04/page/3/index.html","cf43adf8d41f44cd810597e4d0f8c34e"],["/archives/2020/04/page/4/index.html","7f33db791375e3ea97857457f8beaa0e"],["/archives/2020/04/page/5/index.html","d24b9e3904746e0e9a2c580ad8267501"],["/archives/2020/04/page/6/index.html","eb8c5854babee5b9fe6fe60fade9328b"],["/archives/2020/04/page/7/index.html","946f852330736e9529a96a3892f229ed"],["/archives/2020/04/page/8/index.html","456e00257e6e3860d7400c7eb4bdb299"],["/archives/2020/05/index.html","057477cd0febed6478fb6513b887c3c5"],["/archives/2020/05/page/2/index.html","b3c776913a401c944a4c7972f04daf1e"],["/archives/2020/05/page/3/index.html","738006be0b5463260f4c71c965116280"],["/archives/2020/05/page/4/index.html","3d7a07626878915989bb6a646d0c20e6"],["/archives/2020/05/page/5/index.html","f73e780feba58a98803797c897d990d1"],["/archives/2020/06/index.html","1475fcad207df15b726272f1197aaf9b"],["/archives/2020/06/page/2/index.html","462b1e7b957107104a381f90c317285c"],["/archives/2020/08/index.html","5ba7c862f067c16e48a2caf35215d424"],["/archives/2020/09/index.html","dab5e6c96db82f6b05097aab6e266704"],["/archives/2020/index.html","ca896dfa56ad1b019f60d3c787883456"],["/archives/2020/page/10/index.html","d0fdc0850d863f7d19b5ee82e09abce9"],["/archives/2020/page/11/index.html","f742c9f8c9d8c33277326b25237d5d88"],["/archives/2020/page/12/index.html","236ec8216863d943ea217f5ef4dee4d6"],["/archives/2020/page/13/index.html","c55eabde6efe09a6b4426a3cd5a1b654"],["/archives/2020/page/14/index.html","944829bd7cb2b3adb8c917192b1b605f"],["/archives/2020/page/15/index.html","1130359420129a082c161d0467c6f92b"],["/archives/2020/page/2/index.html","e82ad535d8026cde41b6372672d9e8b1"],["/archives/2020/page/3/index.html","130532239ffb538b50bb4b7e83789bd5"],["/archives/2020/page/4/index.html","3533c0cb0877ce6125076de6a5b6bf17"],["/archives/2020/page/5/index.html","cc35fa714efe0cf50dcce96c4c44d9c3"],["/archives/2020/page/6/index.html","cfd55ac6d6b392e469fb4dfa345abf9a"],["/archives/2020/page/7/index.html","e09168fd8039e8ed6fd43679e4c7d50a"],["/archives/2020/page/8/index.html","79fbee9919a215a6c603c8f71ec0a654"],["/archives/2020/page/9/index.html","d8d953f4dc8a27f4d8bb05e2cd251e33"],["/archives/index.html","c90801210dda3d53a2c56f7cffa2e361"],["/archives/page/10/index.html","f270b5a27a68979ef9ed92fbd3d9f1bf"],["/archives/page/11/index.html","41cc0bbc396beb0586bccf0ade390c8d"],["/archives/page/12/index.html","a2f21eb61ffcedc3356fbd33826de76c"],["/archives/page/13/index.html","c9b058d9858f6973e97b67c9565c48f6"],["/archives/page/14/index.html","471ef1b7f292ff1477c10dfe66ff4192"],["/archives/page/15/index.html","5e4c875637a0aaa499064b9759f4b9b0"],["/archives/page/2/index.html","d3855629f614849a16d57279fe682425"],["/archives/page/3/index.html","f528697a718aa71842d8ae03a79bccc6"],["/archives/page/4/index.html","7303bd510fc5aa6aeb6dd024c8cae345"],["/archives/page/5/index.html","8408a1275c748633dc3300eb39c5d02f"],["/archives/page/6/index.html","906b9233c7061ff86bd35229c370e75f"],["/archives/page/7/index.html","07c9a25e5a81f6a7cf90f76d3b496b47"],["/archives/page/8/index.html","8ee6ec19f60dfb5164c78560a01ad1f9"],["/archives/page/9/index.html","3f45a0a5eec31348c45183a3367eb14e"],["/categories/Advanced-Swift/index.html","16329ea604cb5bb1142142245bc6e2fc"],["/categories/Advanced-Swift/page/2/index.html","45b1141875b026b40dc3a5f37fb3e9d0"],["/categories/App-Architecture/index.html","effa7078cc3965a98caeb8a976e1f90f"],["/categories/Codable-protocol/index.html","f8c9039b7c43a360b472863bdf17a43b"],["/categories/Combine-framework/index.html","46811b606785c77186fbfe3d994b3526"],["/categories/Combine/index.html","c369e1f872c72a6072eed8f967b45930"],["/categories/Grand-Central-Dispatch/index.html","6e1a17aa40665daaace23701c12495b9"],["/categories/Hexo/index.html","53b5384a30af3b944f943b5c2f1a3ef1"],["/categories/Promises/index.html","3ebaced73b6e7dec1fc3f82617e74701"],["/categories/Result-Type/index.html","f65b434a432c2c0fc44e3d9849f27411"],["/categories/RxSwift/index.html","004641f80f83a6dab3014854173cd8dc"],["/categories/Server/index.html","ce4b1ac34d0f7435b32682e7cad6e0dd"],["/categories/Swift-Apprentice/index.html","68caeb74e6d671f509cec4e712a44951"],["/categories/Swift-Apprentice/page/2/index.html","320570887fa862bcbd58e9c4dcb1e9c2"],["/categories/Swift-Apprentice/page/3/index.html","39df040ad54487044b022ae7cec829c4"],["/categories/Swift/index.html","41cdb78cc4924e1e5f88f6d3028c4d8d"],["/categories/Swift/page/10/index.html","c3920fb330e0daeb5f57026fc78a4918"],["/categories/Swift/page/11/index.html","dd7f656f32e2e6ecfb941a45a30ab6ab"],["/categories/Swift/page/12/index.html","412f5326017f9120c5c305b0c3801c58"],["/categories/Swift/page/13/index.html","ec6e314d484ee5a7ef79e3fa15ed39ed"],["/categories/Swift/page/2/index.html","986576df6f4d446b4212b59289b3da00"],["/categories/Swift/page/3/index.html","b39e25c21de693551f01eac4a12d666a"],["/categories/Swift/page/4/index.html","da1b9c8fdea64afdc0fb339cb47b0414"],["/categories/Swift/page/5/index.html","f66536ebfa1c4083fcb4422ff07014d0"],["/categories/Swift/page/6/index.html","4f19506a72e445b0661b609f35fe65d5"],["/categories/Swift/page/7/index.html","d6f267782dcde25d6b4f5d2fbebd49b5"],["/categories/Swift/page/8/index.html","8f6a5588f011d0f6202f69d48f779a44"],["/categories/Swift/page/9/index.html","8ec96bbe5720d149fb39abda75c22c3f"],["/categories/Swift5-2/index.html","fc5be204b7dc79049be99d060fea3d58"],["/categories/SwiftUI/index.html","7c5a4950bf63e0bffcd36b385db7beb7"],["/categories/UICollectionView/index.html","afa94e9ede98c931ca53b6c162422848"],["/categories/UIImagePickerController/index.html","d3a8917c2b95b70b7e3647bd01682873"],["/categories/UIKit/index.html","a0bd90d1e25f5204ce21e8e6afeed51e"],["/categories/UIKit/page/2/index.html","7c78a539a862922c110639379c607b88"],["/categories/UIKit/page/3/index.html","2df2518f5cd2c5cf86b55fcd392830a1"],["/categories/UIKit/page/4/index.html","e7350e187583f74c25c059b0e91fed26"],["/categories/UIKit/page/5/index.html","85106c80ebe7e584a6c48cdfb186a485"],["/categories/UITableView/index.html","0d7991580c8b098b212c83117e2f6992"],["/categories/Ubuntu18-04/index.html","6271b62a30ad91c0db3449d7d5f46690"],["/categories/Ubuntu软件源/index.html","2f31b79789af623227fcbae76bde7e10"],["/categories/Uniquely-identifying-views/index.html","9677982372d12a1d10887a30ebeed9ee"],["/categories/VIPER/index.html","5b76b5e29442ae7c0f9be990cd098df6"],["/categories/Vapor-4-0/index.html","df4edc9a6e381dbe725cd03e333fc434"],["/categories/Vapor4-0/index.html","2b2b18f816843a4d19df3c4978fd1bd4"],["/categories/Xcode/index.html","e64205a30ca07924088ec94082e031eb"],["/categories/appleOS-Networking/index.html","fb22773793de0552de946a707d017007"],["/categories/enum/index.html","075a6c17cc9119a8471c074cbf20e9e9"],["/categories/iCloud/index.html","84942aefff021b3b4e83f39512219728"],["/categories/iOS/index.html","eb0603b2047cb298217a8da180f9311e"],["/categories/iOS/page/10/index.html","65898b3a43545eb86639649752947600"],["/categories/iOS/page/11/index.html","d9e608679f6b3f45ce92973517b679f5"],["/categories/iOS/page/12/index.html","0ac76e03ea9eb796c7d633444d1281c4"],["/categories/iOS/page/13/index.html","8858c078080aa02f6ffbfa46d603f893"],["/categories/iOS/page/2/index.html","e7262655864f8da7843920a4fec13c8d"],["/categories/iOS/page/3/index.html","0d2a699a867faabfdacec38f7c23078a"],["/categories/iOS/page/4/index.html","4c210be64db63550eb7f9eaee16100e4"],["/categories/iOS/page/5/index.html","9c0b8dedafe3c7511a2a589e26c06c2a"],["/categories/iOS/page/6/index.html","e5d4467eddaa38d7b9647a6d60fcbde2"],["/categories/iOS/page/7/index.html","1e0749316eef7d0513a1219e17515b5e"],["/categories/iOS/page/8/index.html","97711ddeb2a8b4d178232c899abff1e1"],["/categories/iOS/page/9/index.html","8f38c92cf11d8d7a0149279d8494c6c2"],["/categories/iOS面试题/index.html","572c348431cf2d877b49f761446d2214"],["/categories/index.html","b01d57b0fec1737b5886f7531e1709bf"],["/categories/random/index.html","345a37e3383ea96030a2a3a0637087bf"],["/categories/三方类库/index.html","48374ec5952b2c4b7a8d250906d5b5e1"],["/categories/函数式编程/index.html","05de5f070a1fb090ed35bbc0b8894409"],["/categories/子类化样式/index.html","8e110f761e1d29c3eb4a1884e772f484"],["/categories/开发记录/index.html","f0b3cb1d868955d38d74206d3fb41104"],["/categories/技术支持/index.html","b5508a9d84670aaaa4ecf7282efb99d8"],["/categories/架构设计/index.html","5c58a44b8adc508d7e12a4643c092a9e"],["/categories/测试/index.html","a403bfad2932f7ae271cf54eb733b3f9"],["/categories/用户体验/index.html","48508b0e711231242da27612cf6060de"],["/categories/用户协议与隐私政策/index.html","d0a1a342c0797a98d8b8a945d13adfe8"],["/categories/设计模式/index.html","b4614450b59d1e0c6d7bbf6aefa18eb7"],["/categories/设计模式/page/2/index.html","19eefe8b00fdc4bf7e4419d2271ed4cf"],["/categories/设计模式/page/3/index.html","4332feeaa0696a809fc9c02c15a17a17"],["/css/main.css","6c5720ce88a43ffbf7442a00c4b0fa74"],["/hello-world/index.html","0663b03f0dc38121b3d86baafee4968e"],["/iOS VIPER架构深入实践/index.html","23663e32a2738db5f49f27f1ef610f9f"],["/iOS 自定义视图，输入表单和错误提示/index.html","fe94430db71f143ccdcbc19b9ce7e3dc"],["/iOS如何使用iCloud文档？/index.html","a5c5037148aff1832972b3b4e0876527"],["/iOS子类化样式/index.html","9d7163cec2d4ce5e3b88e2a4b5d75455"],["/iOS开发记录<一>/index.html","8c915b5021a39e75139a42a5323ee9b0"],["/iOS自动化布局编程/index.html","2d1d2561e4aa0fc19691802efed3516f"],["/iOS自定义转场(By Swift)/index.html","6e5af51bec7c8f85b17f35d33e125a0f"],["/iOS项目架构：使用VIPER/index.html","3dad638bb8982e6a490c524614ce51dc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2be1dee64ffd2931d3f67f7571bd13e5"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","ac4110167ed16b159385465c6f725121"],["/page/11/index.html","dfb05cdfa67f14d9459c68f1dca04b4a"],["/page/12/index.html","0d675f407be6194eac325ecc40fada7b"],["/page/13/index.html","a534737b2a975585724db514390d5dc8"],["/page/14/index.html","0962427e1195e072a6c6c34df510294b"],["/page/15/index.html","5b15fd51cdb6bb2a08957092bc894b87"],["/page/2/index.html","e06e5b6daef9f2bd2ff8483efb6869f4"],["/page/3/index.html","fe4d69d014cd171299e3e479475cd69f"],["/page/4/index.html","48c8bedb6a20dbdd7c0c540f5a4b98cd"],["/page/5/index.html","9ebde1b1204aaa2701d5e36ce6177026"],["/page/6/index.html","c1295c98cb9514e9353ab68572b332d7"],["/page/7/index.html","60303f6bd9c188894244620ff9e60006"],["/page/8/index.html","4341e1584c02aed160ec73d13c910e7d"],["/page/9/index.html","f6a001f47078805e6adc96dd29b5b389"],["/schedule/index.html","b9d63ad81b8822a7ea5ba32aa0e8536d"],["/storyAppPrivacy/index.html","ba81d56b08a7b040766f65c94bceabd5"],["/sw-register.js","a72f92fca5c4daefd7f1574d9388cf31"],["/tags/Advanced-Classes/index.html","48d86a21bb8181ddd39f36f0852eccad"],["/tags/Advanced-Swift/index.html","ae07787fa3fdf27e26d2539bf3771711"],["/tags/Advanced-Swift/page/2/index.html","78be5c30a936f13b3f6adcb9c8ad5f76"],["/tags/App-Architecture/index.html","c50fd6744aca4ec10be512fce7576a34"],["/tags/Arrays-Dictionaries-Sets/index.html","f3a86bf781ec3d1c42d371ac844402cc"],["/tags/Authentication/index.html","b8f93b509344e04ec3a6a40f491e8462"],["/tags/Build-in-Collections/index.html","b84a89b46bd7d0f13e3cc7022bfdee37"],["/tags/Building-Your-Own-Types/index.html","97b002b7807047ca7e83b54d21e3aeb4"],["/tags/CMS/index.html","534f3f899fae562a545577da06e8a6f3"],["/tags/Classes/index.html","9e122a420452bdcc1fbe4b6fd2ccb9be"],["/tags/Codable-protocol/index.html","f8ca2cc42ad6843d0d848ad710720a1f"],["/tags/Collection-Iteration-with-Closures/index.html","87b53c828b8a22d432e1ee6866a60fa7"],["/tags/Collection-Protocols/index.html","9e762ad37dc6682de724068a9e91f5af"],["/tags/Collection-Types/index.html","065541e1b02d412a670c45e55d567f29"],["/tags/Collection/index.html","039ef9440eb5e957c79c929597ca9aaf"],["/tags/Collections/index.html","9fd1c5b9eab4115ee03a4a5228183545"],["/tags/Combine-framework/index.html","572a29640982006bfc17d34349590446"],["/tags/Combine/index.html","f306f02edd0d7f71dd82401552574b20"],["/tags/Dependency-Injection/index.html","f66b4a9963d5467f28322922065af4d0"],["/tags/Encoding-Decoding-Types/index.html","a2aca5fae86ce59ec80b59f4bd1eacca"],["/tags/Encoding-and-Decoding/index.html","a37ca9d598323ace89e494c0fa67e29f"],["/tags/Enumerations/index.html","ea034ed0f99457e61636f334599d4ea7"],["/tags/Enums/index.html","eb21ecd88220f1f255d015092480aa8b"],["/tags/Error-Handling/index.html","ca8ac1d924e57519ff57870a879b8979"],["/tags/Functions/index.html","dcdc75862efd60a52801834dae12398d"],["/tags/Generics/index.html","16e56cbc032c44df4437b19889c0b8dd"],["/tags/Grand-Central-Dispatch/index.html","1f87f345494a4b1360c34c0fab328bfc"],["/tags/Hello-Vapor/index.html","11f8d7e4152b766d084199ad02417022"],["/tags/Interoperability/index.html","5aaf6cc5deb7eb42887d6368650f259c"],["/tags/Introduction/index.html","07e5016ad0c5cf0e6df55c832f132496"],["/tags/Leaf/index.html","c23a5cebdc936dd3b5f483e6fa45798c"],["/tags/Methods/index.html","cd78c2e58dd20be7b72a1599da048308"],["/tags/Modules-And-Hooks/index.html","dc7a645a1a3fd691f3fb568cc060d115"],["/tags/Optionals/index.html","c8a8f2349ec5cc15d07bfe1cd032b147"],["/tags/Promises/index.html","fd4c49d76b2313362326acb2bcac6733"],["/tags/Properties/index.html","352fe53d644e3d8e561eeefeb0c92859"],["/tags/Protocols/index.html","34d3f517f7afae1675311b0fbbf26436"],["/tags/Result-Type/index.html","9dddfb6f7f4c4e6c8cd54a1c1f5a63f0"],["/tags/RxSwift/index.html","8a2547edc6fe84d296c0711ac0786a6e"],["/tags/Server/index.html","742d7dc4eaa88243df81c7efcef0421b"],["/tags/Session/index.html","e4f0c269ee6f5695d4fb185fe2736ca1"],["/tags/Strings/index.html","e27f11139937bee7f0080c810ed6b1a6"],["/tags/Structs-and-Classes/index.html","ef5b50cd3df11d36648f6e250b3a1888"],["/tags/Structures/index.html","219a31189bb2c3566f0ec542c15950fb"],["/tags/Swift-5-0/index.html","e8aabcfa8a841af1da72069a9e82d293"],["/tags/Swift-5-0/page/2/index.html","a10a03badd63e5b5acdbd9dfb2a285c3"],["/tags/Swift-5-0/page/3/index.html","c2bc895c641b7fc4913c140842ebe639"],["/tags/Swift-5-0/page/4/index.html","58e833cc23506a1cab7633439949b013"],["/tags/Swift-5-0/page/5/index.html","1d0a263d7238b31c1c0bc742175c4cb7"],["/tags/Swift-Apprentice/index.html","adb223e13c40383bf030f00321fc7dac"],["/tags/Swift-Apprentice/page/2/index.html","1156cbf621d5cf01fde2b3c9269bdce4"],["/tags/Swift-Apprentice/page/3/index.html","4138c5456ef92ce268541863404fd9cf"],["/tags/Swift-Package-Manager/index.html","81ca3dae64a734abdb60f513d5ae694f"],["/tags/Swift/index.html","9fdeca0654d4658458c3a91de556cff0"],["/tags/Swift/page/10/index.html","fafb91257b02afd09b3e3c62ada6bb62"],["/tags/Swift/page/11/index.html","5466d74af18256e3e00ab90d8b6ee484"],["/tags/Swift/page/12/index.html","b6a48bdad297b537d367d7d2b8697499"],["/tags/Swift/page/13/index.html","d3987e98aa9d0eba778fa6f21125de55"],["/tags/Swift/page/2/index.html","34c3cc453a8e32dbe4543beec78d56f4"],["/tags/Swift/page/3/index.html","da51311a9b938790fa93069ff7937d30"],["/tags/Swift/page/4/index.html","9d3daa37bf37c295fec667f4af807603"],["/tags/Swift/page/5/index.html","ad4f2071ba984dc10791f94e26fa2708"],["/tags/Swift/page/6/index.html","584e924e9f9dc33391e9fc3e5aca10a5"],["/tags/Swift/page/7/index.html","c350494da318ece950cfe84261f08c32"],["/tags/Swift/page/8/index.html","ab575410fdafc27e8aa4b80f1a69e215"],["/tags/Swift/page/9/index.html","ca33d29ce6e1a8d1a99d9320805089aa"],["/tags/SwiftUI/index.html","055b8c5ae65d3a58c5bc0c1da42294dd"],["/tags/UICollectionView/index.html","a8894962149193f384b1560649a9ac79"],["/tags/UIColor/index.html","386d9357cd7b2a9d17dbb380990cf64b"],["/tags/UIImagePickerController/index.html","da169c47c63ab8ddc8c8741f2e59bb02"],["/tags/UIKit/index.html","88203f6295d409cdf22af0ebc7830623"],["/tags/UIKit/page/2/index.html","8e33ef09d82353c025f5315022acb970"],["/tags/UIKit/page/3/index.html","1b4b6cbfd6418011bd3c433b40acaa5c"],["/tags/UIKit/page/4/index.html","54aa8ef109067253032fc4c95214f946"],["/tags/UIKit/page/5/index.html","43f694487bc0beef620de3bf72bc4bc1"],["/tags/UITableView/index.html","829b3eac7cc76fc9cc7f20f4cdc48abf"],["/tags/Ubuntu/index.html","b018fa3e36343847aa76335928a67e73"],["/tags/Uniquely-identifying-views/index.html","d2fcd2158c7040405e275e410a25320d"],["/tags/VIPER/index.html","4d8c93b25de0fd93f7af97b18e458f7e"],["/tags/VMware/index.html","5243008b87b131070847a19ce7a25c87"],["/tags/Vapor-4-0/index.html","7113bc854cc2502072fdb17630fe3f20"],["/tags/Vapor-初探/index.html","8f42685e1578715026d9722d61493a20"],["/tags/Xcode/index.html","ac3aa7a9b6a7694e9bb45e23867bfa69"],["/tags/appleOS-Networking/index.html","f784db131d8f2bb6f2a7e1116059a690"],["/tags/enum/index.html","678a106475c62fef76e6e4a6f50c9eb9"],["/tags/iCloud/index.html","d35baff8955fb3c6481bf793f5bdd697"],["/tags/iOS/index.html","7ae3d4e3d59df0620f410e1d7828af65"],["/tags/iOS/page/10/index.html","f27ee134581cd9254963d0ad1d6cc676"],["/tags/iOS/page/11/index.html","c789335495359bc037548b48a7ec0ab4"],["/tags/iOS/page/12/index.html","b36b2dd2a2498f0a07b8af85f98311ae"],["/tags/iOS/page/13/index.html","8d6efabd79342c03f0fc65eb5bd1f5ac"],["/tags/iOS/page/2/index.html","83392c416a69123146109938395c8974"],["/tags/iOS/page/3/index.html","e611b1ae94b3a4cc459f084bf087c3a7"],["/tags/iOS/page/4/index.html","176241540edd66da25e30600d96457a7"],["/tags/iOS/page/5/index.html","ec512a973a1f1370d4eada9793bee0b9"],["/tags/iOS/page/6/index.html","f2a6083130b9e691b3312f12473d1f64"],["/tags/iOS/page/7/index.html","0b37b196a6de7a6bd1ca5822e685ade0"],["/tags/iOS/page/8/index.html","f12dda08e51fd8036aae5d3f8b8d9fc9"],["/tags/iOS/page/9/index.html","6e3d6947750542f9999be15ab51f26c5"],["/tags/iOS面试题/index.html","fd339115912def7b26a65e41a738e50f"],["/tags/index.html","334d17ee236331f4a3f426e034cb30c4"],["/tags/non-optional/index.html","0836a7e62f0ee2b0bc8a72470bb02b57"],["/tags/random/index.html","85097ac1f872883d83daaa623b569ac5"],["/tags/transition/index.html","b4548b7e7cdac47715e41cfc76fbb946"],["/tags/三方类库/index.html","649904ffe8bc10710d3d8cf5ebf59073"],["/tags/依赖注入设计模式/index.html","458f7a3435826a55c74369ff49cbaacb"],["/tags/值类型和值语义/index.html","a2df6e01ca921ce32f292c033975874c"],["/tags/内存管理/index.html","0f2802c6a491f7761fd0ed8354a3a645"],["/tags/冒烟测试与回归测试/index.html","9efea8c0bab05bdd900535f8588559a6"],["/tags/函数式编程/index.html","41bc6b2ba70e1e1d29fe953140b3e927"],["/tags/创建博客数据库/index.html","c4fc9b9badb26dc6ec4e0f693a9416c9"],["/tags/初始化模式/index.html","78c2d913d86868d3c1085800f0ebc8ef"],["/tags/单例模式/index.html","ba08028a0101f67e1f5f09803ca68953"],["/tags/原型设计模式/index.html","55a8b545234d852815895fdae7bfb422"],["/tags/命令设计模式/index.html","58c7ffe8e2228d3180b90deb27de84a2"],["/tags/基本控制流/index.html","5db13e338fa4bb0287ded4bda65422e1"],["/tags/外观设计模式/index.html","ba5a90e26c401f77199e71d0add36706"],["/tags/委托设计模式/index.html","e09962c2f223bee4ee5f7aa2edfc6fba"],["/tags/子类化样式/index.html","a80ef1452d6555d244dc7fc5294af38f"],["/tags/对象池设计模式/index.html","6d13e4e2ea61eda748e5fe3d0f7d79c7"],["/tags/工厂方法设计模式/index.html","263edf6f468aec68c51e57b30943fef6"],["/tags/工厂模式/index.html","b45117c75243dd39674c1a09e21d09e3"],["/tags/工厂设计模式/index.html","6014e1c5548ef6851f6f5e4c56d4b75e"],["/tags/开发记录/index.html","af308feb736310bb339a086a353ee7d2"],["/tags/懒加载模式/index.html","aac2a49da2669d29857cdcfe4bf53df0"],["/tags/技术支持/index.html","40dc1cb106ee2ab4f2d7ed752564df29"],["/tags/抽象工厂设计模式/index.html","25ef9d50dc5f1a73f840d345ccaf8dea"],["/tags/构造函数/index.html","72bf15fa5b1cf31d1dfaaa112806b1c1"],["/tags/架构设计/index.html","efc705111272d0b1e661966baba92356"],["/tags/模式匹配/index.html","20b6b21b65e52237fc98da5eb66bbdbf"],["/tags/生成器模式/index.html","b6cc654a75f30fee4d54f870155d38ed"],["/tags/用户体验/index.html","146cd7817d9e0e00b6c1b38aee0925bf"],["/tags/用户协议与隐私政策/index.html","4cf6d619ba220053c4fde8e10453a2f0"],["/tags/类型与操作/index.html","e20d77264a59eb53095087198ddadcd9"],["/tags/自动化布局/index.html","756090349a152d3768216a9c3d67c132"],["/tags/自定义UIView/index.html","c5e6dd7027ce1914921adc85d2f58640"],["/tags/自定义转场/index.html","71ad55af1e91888b2c22e1cb9f68eacf"],["/tags/自适应布局/index.html","dd40997a823f2b56f63cc5ee2be06cca"],["/tags/表达式、变量和常量/index.html","5fd8514ffb674323acee8f43172fdfe7"],["/tags/设计模式/index.html","0405b2b450dc7526bc7be3f1dc202edc"],["/tags/设计模式/page/2/index.html","b2ec93a919b9dc573b2a2d012f5329ad"],["/tags/设计模式/page/3/index.html","489b93ba12c283677e0b9b55bba291b2"],["/tags/访问控制和代码组织/index.html","5d334246ccf172bf36bac26528c2454f"],["/tags/运算符，下标和键路径/index.html","8dac2ab18e729ba059690712b8582037"],["/tags/迭代器设计模式/index.html","912ea59a9d2a8a5edca4bb691521f477"],["/tags/适配器设计模式/index.html","717d7250c9d41b2225e5476d22a537a8"],["/tags/错误处理/index.html","c4f0e64b2664c53933f6202ea1da86d2"],["/tags/静态工厂方法/index.html","b91093fbe248e0eaaa8a81be8d29caf3"],["/tags/面向协议编程-OOP/index.html","aebb12d38ec71ed96a5f92dbb9fe58fa"],["/tags/高级主题/index.html","20187b9cdb1d0e41b7c2755082861c80"],["/tags/高级协议和泛型/index.html","1cb16ac044051f549fab1e6712b2913b"],["/tags/高级控制流/index.html","a8cc82988dd77994652f7f68e2d088ad"],["/为iOS应用构建输入表单/index.html","9d9f027d228d5675cc7436bba712adbd"],["/产品开发的幕后花絮/index.html","3022733b2871d29cf2d099f66e183511"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ba4e7bf0f72da38e858e6f0894738bf6"],["/冒烟测试与回归测试/index.html","0b34bf4e4c8a27896f5bda82e97f71a5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9501ac89adff06d0d77451184f307aff"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","0cf56d855f029bf7e1f1e9565e0399e6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b396b78003645a296483cd4c73857516"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4c6d9578ecb8bbf553602d429d0e0a5b"],["/在Swift中创建自定义集合/index.html","cd5ff3e82e178b2b4338cfb093c0d5c1"],["/在Swift中处理非可选选项/index.html","c00ef4add2af0093f1c5eccb6137b5ef"],["/在Swift中生成随机数/index.html","c1473065027cd0d8495dbda342e78507"],["/在Swift中重构单例模式用法/index.html","85809d0168e2b94c3ff23c764d623b1e"],["/天天兼职用户协议与隐私政策/index.html","3ccc7355a972762856af19d4c9e5fc4d"],["/如何为VIPER编写服务？/index.html","ff72ab7dd4030466cd3a2eb89496fbcc"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e9c62c3a3651f5746a0c64513d3c0892"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9e02bb294a745e83cdc52806e40dbb11"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","d64db465d1f1e32b28cce2956f69c13d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","3432cd272031aa4928e600c70447b4a7"],["/掌握VIPER架构/index.html","9f17ecf68e31e92ecab00fd876002c11"],["/揭秘 WordPress Hook 系统/index.html","d4cdaea0c6a1e57a111c4285e888efab"],["/比较工厂设计模式/index.html","0ee3b30b7ede92977d5c599aae6b3ec3"],["/深入了解Swift中的Grand Central Dispatch/index.html","59d5bcdf5ac36f52b439d905c8305827"],["/深入研究Swift框架/index.html","eb128e483a47eddbf590bdd3edff04d2"],["/美豫直聘技术支持/index.html","8a1c98c519c70414acee6bd46d375728"],["/美豫直聘用户协议与隐私政策/index.html","05844a8c273f7360b8e453301838d77f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a5f82ae3b512f8e9bb7af7c815e95727"],["/选择Swift而不是Objective-C的5个理由/index.html","597f891cd522803a8f1a3bac5917c826"]];
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
