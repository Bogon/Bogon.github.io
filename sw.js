/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","fe143a702b87d0400904843de2f2780d"],["/2020年iOS面试题总结(三)/index.html","dc3f6a02e1f6d7b1b70ac325921a69f0"],["/2020年iOS面试题总结(二)/index.html","e5663e173cec87764a47ae9434bf84d7"],["/Advanced Swift系列(一): Swift 简介/index.html","369b2fc1db0d34eb42f5e11f97cbe871"],["/Advanced Swift系列(七): Strings/index.html","5776c0ac7020ca693ec8f83c481400ac"],["/Advanced Swift系列(三):  Optionals/index.html","6eab7ee8a98e3daafce5d2531725edae"],["/Advanced Swift系列(九): Protocols/index.html","ab21f83415f59b22e7b23b88c83940d4"],["/Advanced Swift系列(二): Build-in Collections/index.html","c8ee6662440856982d63b32a65145d9d"],["/Advanced Swift系列(五): Structs and Classes/index.html","44c2e1fabdf83301816dd0889c84a34a"],["/Advanced Swift系列(八): Generics/index.html","46acf137ea518519a42730239c4661e8"],["/Advanced Swift系列(六):  Enums/index.html","2251da02f51d4ddf875f926f50ee3f86"],["/Advanced Swift系列(十): Collection Protocols/index.html","599b0316513938867f2113d1a4f45993"],["/Advanced Swift系列(十一): Error Handling/index.html","a58fc98205702bee4959f9286df2cf67"],["/Advanced Swift系列(十三): Interoperability/index.html","00578cb19d19872dd10fdfbf295529c6"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","2c01df1e47126f4a0c27ad0310c1b6cb"],["/Advanced Swift系列(四):  Functions/index.html","41ccc5d63ecc9e7fc769ac6c17f15d84"],["/App Architecture系列(一):  简介/index.html","98586b7152ee1b57fb6f8dc71847ba02"],["/Functional Swift 初探/index.html","98ebad1be56cf08e64d5634d196d6b72"],["/Git 使用小技巧/index.html","0ee46fb7e08a05301958ebac754886f5"],["/Go 基本语法初探(一)/index.html","99f0e7b7d4147c7c236de29272e737e4"],["/Linux VIM 命令及操作小结/index.html","b5c7cf1a042870cbfb34aa138964d660"],["/NSCODER和SWIFT初始化/index.html","cf47f1a36f177a5f28da8fe13a1efe7f"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","5156eb99671f6727b40af5aa67a3ed3e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","83cc177597269e8607a8c70654e3d745"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","3a456ab244269b3e63b72da377682abc"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","171fb6cbaa720d6c20e08682f0f3a7f5"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d827acc8a3fb753efa04e878a567fca0"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","159245266c4030e4c14e2a29dc4f3daa"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9dbb1d754e1c96050cdd7e3f6a286a48"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","da5c423ee26fc46755cb67cd085f4334"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","39af88a490bb95f67cf49098e8fbd561"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","2c34911d356f2af5acea9aeeadff2199"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","010e3d29fbfaf543d7080b21b0f88201"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","30f8de816eb5fca3c3f3f9db82826a22"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","c8a77c756c373574c32896d65c856aff"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","eba9aa2a78d9f6ecdb50d9b407631b75"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","dd4310d1955d911d1a38b33e53d31862"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","0a8d31b2cc814c5ba94d8d394c392d6f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","f10e9dd5c37fcd3595f4abacdc392fba"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","612eaf2c39e1ac33fd1d307217be8c4d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","3a5ee09812043fcb479b532bc7edf00e"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","f89c47d8525c7ae4c157b9e17afb4b33"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","3dae5d0376aa024ec3f61775cc97b23b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","f9dfa3689987a6326346e3f497fccb53"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ddd0a3a790590d54c4071db160655bb5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ee6da82f04d2b9857eb92d991da0b1a0"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6ff614a409ef36899a5a544fe3b03d18"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","73bc1e5e7cf2b2b35528c68bd054945e"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","6d24dfa47a80d3bd8c2695e685c5ffd6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","49d63f3c1876fff81f0d4653fca1ddfe"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f7aa87db7bd5b3c7f2cbc9b42606f0cd"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","fba78249e62a93b70b7b0d05d22fe730"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","836478799618e36ec776797d4ad0ddb5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","acf9c33dc0a456e8bfcd1a660e27618e"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","54963e7cddac9a13921d7d900379a239"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a258af48cdc2d7918f6b5ade2101e4c2"],["/Swift CompactMap vs flatMap：差异说明/index.html","4374a069d6bac0624347d8e7d7834d22"],["/Swift Grand Central Dispatch 深入实践/index.html","9e9ab0825bfe7e66e32a114ffd34e536"],["/Swift Lazy属性初始化/index.html","e988581d68465ad409bebe6e896d8897"],["/Swift Promises 初体验/index.html","02f6e842247a0046e68777ab773fb031"],["/Swift Promises 探究/index.html","999a7155aa1be843c28d3b161aef263e"],["/Swift UICollectionView使用指南/index.html","d1a7df7804c51d8032d437d9e74bbc88"],["/Swift URLSession && Combine framework/index.html","a597d19fc03c467cdce65b15d3553c23"],["/Swift tips/index.html","e94a28399bf5e053183d23a01387a474"],["/Swift 唯一识别的视图/index.html","36266b4a82e3e04c4e689e001c70cee9"],["/Swift 如何学习现代UIKit？/index.html","6e923f297efdc145a7c0f4b233501179"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","b1ba3e563f6c88988a82868966092f73"],["/Swift 用 compactMap 替换 flatMap/index.html","5a90d08bd69433d2b9574934c699ad53"],["/Swift 选择和播放视频/index.html","7733dd9bb2f6f7609ae8d15131225066"],["/Swift中UIColor最佳实践/index.html","acc479a98cb3d23a706678dff53909d3"],["/Swift中快速简单的工厂设计模式/index.html","492abe295d5e4d293d0aa30c4ac398b2"],["/Swift中构造函数与静态工厂方法的比较/index.html","2fc5a2126f2b110065709ec9443265a7"],["/Swift中的UITableView教程/index.html","cbad9f9da0fdf85050644ef96a21dd7a"],["/Swift中的懒加载模式/index.html","ca442be21de3dd60bb7b8d38d93616e6"],["/Swift中的模块和挂钩/index.html","ebfe27d0b0aeb8dcafd0bf05577e4fc5"],["/Swift使用布局锚点添加约束/index.html","c47ba3d94ed93658aa8a85577dcbcb5a"],["/Swift依赖注入设计模式/index.html","53eb5141eee5a36d0776f6875d57e842"],["/Swift关于Dependency Injection (DI)/index.html","17d66b2750affc157a0313ce94dab346"],["/Swift初始化模式/index.html","678e806c7f4830df77b9a7fb2c007acc"],["/Swift单例模式/index.html","3cf64bb5bf6d1b8fe729658883313777"],["/Swift原型设计模式/index.html","a3fc636e39495bb5cb5ed83a6de53f36"],["/Swift命令设计模式/index.html","7848cae464d379223cbe4f5c0c50a9a8"],["/Swift外观设计模式/index.html","9b564e23cdcd387a0889e69f2210f63b"],["/Swift委托设计模式/index.html","c5cd9f4f948076a6cd58bd0f3e5b8b80"],["/Swift对象池设计模式/index.html","3a183dac504df78bc43136e76b1a0fef"],["/Swift工厂方法设计模式/index.html","45b20632e4d2b9dc3c985890c5450511"],["/Swift带闭包的懒惰初始化/index.html","a072853aa0c5e0db4d765cdd14ff3c43"],["/Swift抽象工厂设计模式/index.html","b5b5a106379dfb6fddc769f45059d183"],["/Swift掌握iOS自动布局锚点/index.html","5623142beab26dd081e2009a6349f3e0"],["/Swift支持旋转的自适应单元格/index.html","dac802023fd54dec33f457480b05e17c"],["/Swift枚举值/index.html","6dabf09576566dd9d59c0ea9ca55b40c"],["/Swift生成器模式/index.html","6f4a5b097bee221be6d712a57f991cc5"],["/Swift结合Xib文件自定义UIView/index.html","424b8b9301009e8ccc33af94f88354bc"],["/Swift编写的20个iOS库(一)/index.html","b103df2a0bac80d0e7fd1e0a32372957"],["/Swift迭代器设计模式/index.html","6f26e3bc4b95d00e776def80feb8e92c"],["/Swift适配器设计模式/index.html","1df1f00f42b693860f3d6d20d9f9529e"],["/Swift静态工厂设计模式/index.html","5c3dd42a4ab50e889411b8d612e2e739"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","93e91af609c3dc2cedc3ba71b14f0096"],["/UICollectionView data source and delegates/index.html","501ee0d69cba7e868bc55d1aa7869f3c"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","ad717b887dd7131709ed25f441b23af3"],["/UIKit初始化模式/index.html","db079af8a1ef3233ee9af2f7c065195d"],["/Ubuntu18.04替换国内源/index.html","16dcf93a55eeee90e02e5b8addf90165"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7736095e634b0e31e595f25b1052e31d"],["/Vapor系列 (一) :  Vapor 初探/index.html","a19f9cd8d098f33c801a3536d8fa4338"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f4e8a489a2f7b8740a29b0652259932c"],["/Vapor系列 (二) :  Hello Vapor！/index.html","564998fc4f3b4ba41f618a7c1c99357f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","c8557a4c5bddcf0fba5207fd8da54e82"],["/Vapor系列 (四) :  创建博客数据库/index.html","5daacaac65a5c36435435fad20ac0813"],["/Vapor系列(六): 徒手撸一个CMS/index.html","25b28cdc7a1c55edd14e58407eb4d3d3"],["/WKWebView与Native交互注意事项/index.html","8f1d1472ea4dd2d59d0692d7ac9e4df5"],["/Xcode扩展/index.html","e3f1f8a8fd4730204631d250664504e1"],["/about/index.html","fedd65a8508def68e45ef3ee2cf26d87"],["/appleOS的Networking示例/index.html","9de339d28fa3591e596f15fd93007398"],["/archives/2020/03/index.html","ac77923077259a111ce1e8c419ada5a2"],["/archives/2020/04/index.html","a3dbdff531ea06ed751cd67a5114c4fa"],["/archives/2020/04/page/2/index.html","13430115774c7e7bc5a448006779a969"],["/archives/2020/04/page/3/index.html","df561fa23c2598a3c92bfb387d80d961"],["/archives/2020/04/page/4/index.html","d10d6e5fb06b641f78bbfbe97c26ee86"],["/archives/2020/04/page/5/index.html","2fa41828ecc3c31aeee0bfe168a3313c"],["/archives/2020/04/page/6/index.html","ec9611a185cc5b2229f3ab18939e4dac"],["/archives/2020/04/page/7/index.html","41df5ced29940ac00d70986f8f7aa7ac"],["/archives/2020/04/page/8/index.html","a4cbced863d3e4b3fd075a98e1209228"],["/archives/2020/05/index.html","4c18324bc87aceb4a5cee2e460344f7c"],["/archives/2020/05/page/2/index.html","d98112fb4ec8e4c463496ff9e92af295"],["/archives/2020/05/page/3/index.html","cf1df2ee0a9d51ae5316a8ee3946e966"],["/archives/2020/05/page/4/index.html","cf45daaac48295998a4f8e9b69102a65"],["/archives/2020/05/page/5/index.html","9706585de538e75dbbf86c9a3037fe61"],["/archives/2020/06/index.html","03ae3334cfd60d6f390fc441b34c1e66"],["/archives/2020/06/page/2/index.html","1024faae5f8ed761448400e660779ee8"],["/archives/2020/08/index.html","6b6780d5c87facd8a802557c362c31e5"],["/archives/2020/09/index.html","9de8c093cb69d0dff1651352186daaa8"],["/archives/2020/10/index.html","dd5509ba64eb7243dcd16fac2c94321b"],["/archives/2020/11/index.html","c1a66151a45c7708c9265d6a41dfb918"],["/archives/2020/12/index.html","020b79f9ef88bc5b090e7d2301c1d73f"],["/archives/2020/index.html","e5ac64b039abcdea401103904f7d1080"],["/archives/2020/page/10/index.html","7641ce6a0ce4a2d81215651d1a496c4d"],["/archives/2020/page/11/index.html","4a7285a7a51155791e8fa1763ccc3392"],["/archives/2020/page/12/index.html","4e2eb02a6bc3f20107251c0cd93229c6"],["/archives/2020/page/13/index.html","da4d71aecaa3564fe28f4966fd84cb7f"],["/archives/2020/page/14/index.html","d7ca8083642642ba97e72f4d8c8467e0"],["/archives/2020/page/15/index.html","2852556ddf917eaccd7263a352212d48"],["/archives/2020/page/2/index.html","1e7ac47fd43eed75317c8be16a06136e"],["/archives/2020/page/3/index.html","6ee26cb817b1a79f0a447a2ee1871021"],["/archives/2020/page/4/index.html","2132b8c7c05f459b0a985d1f68fb63a9"],["/archives/2020/page/5/index.html","6887cab82e00becefa448f61a1dcfce1"],["/archives/2020/page/6/index.html","d2acc8e84be68e5039c2a43a898c1a82"],["/archives/2020/page/7/index.html","83b5a5a55a207001d013d12bf1cc9ca7"],["/archives/2020/page/8/index.html","918258c531d50c9f6c933ed4cb8b9382"],["/archives/2020/page/9/index.html","340d8e72409c1fa78e3327237c8b70a4"],["/archives/2021/03/index.html","18fd98696327ee493652bc1fed86a384"],["/archives/2021/04/index.html","03f33c4bd851e8a7ac7cd2475d6d8d2f"],["/archives/2021/05/index.html","53401cc56d710d70d81b149e86b2b9fb"],["/archives/2021/index.html","b0d9c554bcdc8f8797ab5ed2d9ad3fea"],["/archives/index.html","e92810294f75371d8904d857fb2db072"],["/archives/page/10/index.html","a95a4c4fda4f6037828333d5ef07a5f2"],["/archives/page/11/index.html","d5035684d9a6c8fbf276d82ddbed4287"],["/archives/page/12/index.html","2bbd55f7d640095788450677a43e8fc6"],["/archives/page/13/index.html","678d876426795923c05bbced6e21795c"],["/archives/page/14/index.html","62459fd6f20be84c35db59de51014db2"],["/archives/page/15/index.html","5e6644f886f46ebb23df706684416760"],["/archives/page/16/index.html","52395648828510d3ab4eb3ec3a222490"],["/archives/page/2/index.html","556a6a1af5cf811928ae02f9d61fb280"],["/archives/page/3/index.html","396dfdf3f47cd3b6b9db8729cbc2aad7"],["/archives/page/4/index.html","bb100934b4d838e81f59b6e986061d04"],["/archives/page/5/index.html","207dbe8a0f5e15a71b640e56bf52b06a"],["/archives/page/6/index.html","c1972b33610f4fb77983b4f4a4398361"],["/archives/page/7/index.html","43e6210a670ee0f78214dae2a3a13883"],["/archives/page/8/index.html","dffcce01da3615d480a3e32cd893a060"],["/archives/page/9/index.html","33335db61af6dfcc1bd0954833087497"],["/bugly 上传dYSM文件小记/index.html","55e7398ee2c5ef9bf5575e047a1257a8"],["/categories/Advanced-Swift/index.html","72667e065d8d2490cdc9115ca6ab4815"],["/categories/Advanced-Swift/page/2/index.html","90496671d5338d6bc11bef453430f8e3"],["/categories/App-Architecture/index.html","a2ea2ea7815f45a02e6a723818b95375"],["/categories/Array/index.html","9a41a8868134513d65654684a608c654"],["/categories/Codable-protocol/index.html","c24e31be9fbf942644ea0265fe902d35"],["/categories/Combine-framework/index.html","79f7546410cb807bda876d796e422b93"],["/categories/Combine/index.html","0e305b358e7d84aaa8f914b1ba30a3dc"],["/categories/Go/index.html","58da6c9d1cd51f2c78a1b5b4aa9be541"],["/categories/Grand-Central-Dispatch/index.html","4c34fed2c89affd4317d4934c916629e"],["/categories/Hexo/index.html","654b76608e813026e56c074eccf91681"],["/categories/Homebrew/index.html","a90f0556caa6589a2520b0a97393733d"],["/categories/Linux/index.html","731809b1782223b97f478fa549f6b6ef"],["/categories/Promises/index.html","b6abe73e96017e57c3647f0b68def4c4"],["/categories/Result-Type/index.html","9a951e67f6424c255fefd3112ab0225a"],["/categories/RxSwift/index.html","18fdfff53db0ab8d4302efb4d15cad19"],["/categories/Server/index.html","8dc1d0214cd49b5778329a4bdfaf83cd"],["/categories/Swift-Apprentice/index.html","0c85e07aaa17f38362f72a1cb3008f0d"],["/categories/Swift-Apprentice/page/2/index.html","8a3f79b4d8b614d8530f5b2006494e3d"],["/categories/Swift-Apprentice/page/3/index.html","17fd6377fc7096a9a341fef1ac7631af"],["/categories/Swift-源码阅读/index.html","d4868126127dce416a1e03b66ae60871"],["/categories/Swift/index.html","b0d5f6435602239326bf1f7294366b98"],["/categories/Swift/page/10/index.html","33d1bfdf2ad641a325f385ec74538a08"],["/categories/Swift/page/11/index.html","29eb2ab9d53b7386cf8d8eeb1c29485c"],["/categories/Swift/page/12/index.html","77c56326308b7a08adf7e6231719ef92"],["/categories/Swift/page/13/index.html","b749127ca578708191e2da0e24dde29c"],["/categories/Swift/page/2/index.html","d3c71a0933f62da692793e0303dbf39f"],["/categories/Swift/page/3/index.html","684d7be2317af2cdcb6d0b4c6ad5343b"],["/categories/Swift/page/4/index.html","e333c2314e08c795e71e2f85939cca13"],["/categories/Swift/page/5/index.html","63f43b7d2c8874bcb0c34635230ab6f5"],["/categories/Swift/page/6/index.html","3781325fe61ae60db5ec5a95a70d715a"],["/categories/Swift/page/7/index.html","0d34191667ccc134f5af17620a201ee5"],["/categories/Swift/page/8/index.html","9f0a9433d25354bde8d72787ee86e2a2"],["/categories/Swift/page/9/index.html","47160ae73b7ccdb61f68c96f6a289f47"],["/categories/Swift5-2/index.html","5ef8abd14f3397fd4ed88652285ed337"],["/categories/SwiftLint/index.html","b0772cc241922f85cd783a3eebd5d95c"],["/categories/SwiftUI/index.html","8e90424d3bfbc43494a2631547937718"],["/categories/UICollectionView/index.html","551e948ce9af94b0609fb1becf0ef918"],["/categories/UIImagePickerController/index.html","58fb427509678ffb39d4818b69f4db29"],["/categories/UIKit/index.html","7d61d298979bcb7dde37e131e2e46192"],["/categories/UIKit/page/2/index.html","f4c09ff0fc7aee434220865b709af4c5"],["/categories/UIKit/page/3/index.html","197ae1fcf6cc393d420fcf10ffd71f38"],["/categories/UIKit/page/4/index.html","5a6223caa3f5196696e6078685ba3fb7"],["/categories/UIKit/page/5/index.html","7c580f7fcf048773ca126a50696f7205"],["/categories/UITableView/index.html","42fa23b12da59178c4200a4e122942da"],["/categories/Ubuntu18-04/index.html","7b53d571f0073f3fd6a781251a21b1e5"],["/categories/Ubuntu软件源/index.html","73fe3cd8a040f1d8d259c949323e96cf"],["/categories/Uniquely-identifying-views/index.html","afc30f1280baeb1224e09f14b3f5df82"],["/categories/VIPER/index.html","0d54d710f586e8f5cab1e6f1bdaa61c8"],["/categories/Vapor-4-0/index.html","58457aa21a45e95190ee3439378bd04c"],["/categories/Vapor4-0/index.html","54812cd7c00b9d5ec135cc193de9e9d7"],["/categories/Vim/index.html","148987f8d3f15e528b53f3459d88cc0a"],["/categories/Xcode/index.html","f843e9dcfb9a4f2483880aafbed453ef"],["/categories/appleOS-Networking/index.html","2d112123c0a52a5e749184334853e601"],["/categories/bugly/index.html","d7f424710a24f3074825438324c73fb1"],["/categories/enum/index.html","f4a63867f1e2fbb8fc5069091aed5f22"],["/categories/git/index.html","e4b8a697629df6183829d063edbe8334"],["/categories/iCloud/index.html","be2811f3b6feeeb2243cff9f1909a7b9"],["/categories/iOS/index.html","765ccaf27a57f49b94d0c3838becb6cc"],["/categories/iOS/page/10/index.html","ac4f7bdb1f22b931966a73fca85de5c3"],["/categories/iOS/page/11/index.html","4194d0b917b315ff42806360b25b760c"],["/categories/iOS/page/12/index.html","b76cc12b20d7ec0750872912199ec9ab"],["/categories/iOS/page/13/index.html","59816110aa088313213b96f4320a6ef6"],["/categories/iOS/page/2/index.html","e3decf332874934c6d1da17a0181250e"],["/categories/iOS/page/3/index.html","32dfa0545b2ad03632a144a3610adb2a"],["/categories/iOS/page/4/index.html","d9c0bf5f1b526d07b58073431fa2e423"],["/categories/iOS/page/5/index.html","e6d0b9b65474848a0ceff83370aed614"],["/categories/iOS/page/6/index.html","e20fe634da69ebf172919b5522eb281c"],["/categories/iOS/page/7/index.html","f2595ed01cb1800d99119ec6d5eaa59f"],["/categories/iOS/page/8/index.html","dd158e14d3c70cd1b8d4215dd8b8a79a"],["/categories/iOS/page/9/index.html","b568ab3f5502b94d794d5baa0faed3fc"],["/categories/iOS面试题/index.html","250f91ca73476ff23ca2171bc9e244f9"],["/categories/index.html","1c6c487b2aec8f7dc67ff0c8c9b571d1"],["/categories/random/index.html","e53fdac6332278faed9e0005a0e53538"],["/categories/三方类库/index.html","915a0b5f8a4bd496165e052f70e32c1c"],["/categories/函数式编程/index.html","9b8ed060779da46ded0decb1bf7fae66"],["/categories/子类化样式/index.html","6174bfe0a8616bd3023fee1af960db2c"],["/categories/开发技巧/index.html","16c3ffd1ee3877dccc1b6ae7b8768e98"],["/categories/开发记录/index.html","b9a1d9640419bfdde58e3c3202f81b92"],["/categories/技术支持/index.html","e0abcc879c4264daa821bcaace6a913b"],["/categories/架构设计/index.html","bc031f00b95cb22c17652f16f73369f6"],["/categories/测试/index.html","2aaf115980edb5b23af92b83934fef72"],["/categories/用户体验/index.html","ab03f3700dfa1a32391ef8edf8d452f3"],["/categories/用户协议与隐私政策/index.html","528fb384aed44b74c88fab309fff5f18"],["/categories/设计模式/index.html","1adb6584aed15c35887152fe37833cc2"],["/categories/设计模式/page/2/index.html","3cd0dc90d331e94e9ce6d4e91bfb44fe"],["/categories/设计模式/page/3/index.html","058938cb14a95fcf3b58bd9aeafc7fe6"],["/css/main.css","65ab8a3a6fa0fc5b6d63766b3fb9cd3b"],["/hello-world/index.html","d34d8800578869711713d9e8ae13651c"],["/hexo部署失败/index.html","aa948d53bb57f404dd59912fe776a281"],["/iOS VIPER架构深入实践/index.html","76d2bdfddf4b9f42cf7701750a1b3e25"],["/iOS 自定义视图，输入表单和错误提示/index.html","9d975493be9409042e303e24a71cd74e"],["/iOS如何使用iCloud文档？/index.html","66f43688859f861975e51ba59d853eaf"],["/iOS子类化样式/index.html","5ec8950f4afc3635fc6d6e499e2335dc"],["/iOS开发记录<一>/index.html","9e0a8daee9c69e603e2bd80d6eeb03df"],["/iOS自动化布局编程/index.html","3c8361dfad3ca307f7c4a2afe7fb72b4"],["/iOS自定义转场(By Swift)/index.html","b7ca27b0c934d80663450a2a12d09e0f"],["/iOS项目架构：使用VIPER/index.html","4b5b292bd283e8d41277d8b02a6628d5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","717199fe5c1f660761b0bda8835bafb6"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","066da1c50c0bef1bcf3192fd32f5e928"],["/page/10/index.html","32259e4f3d498da0031d80e9c94097dc"],["/page/11/index.html","23536b66c0b5c7eab1bef780f6f3ee18"],["/page/12/index.html","d4845574b2d454a03c7ecb13da0814bf"],["/page/13/index.html","02d204a1f4438c6891c2485d8fc0489b"],["/page/14/index.html","8c0dd1530f25d99befea47463ff4365e"],["/page/15/index.html","aa0acc21d68d69457758338910e46f10"],["/page/16/index.html","00ba56291c03c994a7ae153ba9200e8e"],["/page/2/index.html","a9ad72d9d4719fccf5d00cfe95685559"],["/page/3/index.html","1f34f0d864cfe836ea56bd68267196f2"],["/page/4/index.html","b3ef23075fd0a6d5f1c005727102ae45"],["/page/5/index.html","c7fa983a47b75d45b36a174941bbbd85"],["/page/6/index.html","a5e1c7ef5fea01bfdf19c1176a2647b8"],["/page/7/index.html","def8a00b9a5b94e043f70723e9e57eba"],["/page/8/index.html","e0b6309ca5ff54cb38dfbe92ebde76d0"],["/page/9/index.html","207ee43590746e189dfbeb9cb3ec2598"],["/schedule/index.html","1b5762b93a57de1d566c7030bd79bde8"],["/storyAppPrivacy/index.html","cb0846f6f073cb72a89f4d21dbbec0e2"],["/sw-register.js","3fb7b2aba5ffb939faa3e8410f137993"],["/tags/Advanced-Classes/index.html","f54157dc7642ba36f51aede8a6fc2203"],["/tags/Advanced-Swift/index.html","d3f8bd6670ba7866339e3846002fb8d6"],["/tags/Advanced-Swift/page/2/index.html","c74b73d67cfc2df0b7edcc8cd20367dc"],["/tags/App-Architecture/index.html","6d5d6dc579e9c55687232ddecb830c97"],["/tags/Array/index.html","a425f38ca44805c534f5bc780ff98454"],["/tags/Arrays-Dictionaries-Sets/index.html","293cfe65f58fb98466673a0c66777a68"],["/tags/Authentication/index.html","8b5a6bfd0898de2d04194b954b184422"],["/tags/Build-in-Collections/index.html","85f858d76bd940958176aaf528e657b7"],["/tags/Building-Your-Own-Types/index.html","11bbe61a146b8a664a69d7a6c26b3d3b"],["/tags/CMS/index.html","6986b575a3a1af69b505acd3f8eed553"],["/tags/Classes/index.html","c6e539c6ef35df63aa44bcf8955b0b10"],["/tags/Codable-protocol/index.html","00ed855985c4fd15af14a9ff57b609f2"],["/tags/Collection-Iteration-with-Closures/index.html","dee3a274cb353b7f18e8f14b6a520a2f"],["/tags/Collection-Protocols/index.html","cd60d570bdcf5316b85a38dca298ac0d"],["/tags/Collection-Types/index.html","e2e7e811568289b01e2c30e9d4216506"],["/tags/Collection/index.html","ce365275f26248b40b9e113ae6f8b150"],["/tags/Collections/index.html","e63609032fc25e49a6ef7f6b223c27f9"],["/tags/Combine-framework/index.html","a50420e8029d7bc3bde869fec2cf0bca"],["/tags/Combine/index.html","6635279fb705bc8edd73e056cf9845a6"],["/tags/Dependency-Injection/index.html","c30f03e5778e2000602f3ee910f76026"],["/tags/Encoding-Decoding-Types/index.html","5b9720e90a5289c14c05a74aff9b7f6c"],["/tags/Encoding-and-Decoding/index.html","20695389a22386af9c4b4354a2ef856a"],["/tags/Enumerations/index.html","0be87acf2ca11c3688352c1ade024c9d"],["/tags/Enums/index.html","1ad85cad556f04038f8ffc15f3effe18"],["/tags/Error-Handling/index.html","33fb86f9659146c2ca4356bac4477c3a"],["/tags/Functions/index.html","66efe46b2ae3323fffc0378f25581877"],["/tags/Generics/index.html","3c21bc2cc79c9e33a25bc3c00dfe1765"],["/tags/Go/index.html","d903d5e1086208ab828cc71864c098ea"],["/tags/Grand-Central-Dispatch/index.html","0e617fc575b0f5ef89a6230ae092c20f"],["/tags/Hello-Vapor/index.html","61eee38ac326fcafac738eb4115e75d0"],["/tags/Homebrew/index.html","f4cab20bb75aae7ca210437b531544fd"],["/tags/Interoperability/index.html","ab91a544cc562d1d1b7473aa01d811c8"],["/tags/Introduction/index.html","77933e91f0762c6b955b23f8ee8e324b"],["/tags/Leaf/index.html","8b488250fc4c870138015bfdeeac97dd"],["/tags/Linux/index.html","2b20e2db8650eeb4951a56094b59f24d"],["/tags/Methods/index.html","666d20ef63aa7ee54e2290227f0ee28b"],["/tags/Modules-And-Hooks/index.html","20ce8f4e4bbd29038568024378016f54"],["/tags/Optionals/index.html","44dcb45ce3f5a5b69307079f369e4998"],["/tags/Promises/index.html","08f280c0682136a9ea349e2f5fd4c5c5"],["/tags/Properties/index.html","6a0b23f5a035dba982ddfb0b65fa1c8f"],["/tags/Protocols/index.html","ad600196170c8de919129242bac00c2c"],["/tags/Result-Type/index.html","0a1706ba004daf29c13e61037444dc92"],["/tags/RxSwift/index.html","229b192212beb9cf634bcb1a24a1e3ed"],["/tags/Server/index.html","83b32cb5d20e9ac324ede355631b9089"],["/tags/Session/index.html","4bd22254e824f3898ca885716da85ac5"],["/tags/Strings/index.html","f4550415fbc244c85943d41fc6a54740"],["/tags/Structs-and-Classes/index.html","8bad7548c71d634fd8df86cc288b110f"],["/tags/Structures/index.html","6c619eb30cae2859c06fc43f9d4a889e"],["/tags/Swift-5-0/index.html","9d60021933b84e269ecb723c2cb58221"],["/tags/Swift-5-0/page/2/index.html","b1d931c091852b4ca686c0a849479f21"],["/tags/Swift-5-0/page/3/index.html","1e589c9ee8098b6853693a4398f3da06"],["/tags/Swift-5-0/page/4/index.html","36a153470131441ebd205700c8d31301"],["/tags/Swift-5-0/page/5/index.html","946f5b1a8c63fd92371ad69ef4a89c87"],["/tags/Swift-Apprentice/index.html","c8112f52461e650332918a4f2789367c"],["/tags/Swift-Apprentice/page/2/index.html","e50a397e6d953e38c1e630c62567ee0a"],["/tags/Swift-Apprentice/page/3/index.html","e99e9dc669240e259368313bd8c43e50"],["/tags/Swift-Package-Manager/index.html","ba52bc583823b2b71323c671607ddc96"],["/tags/Swift-源码阅读/index.html","3477c528917de190685d9e9ecbf18e07"],["/tags/Swift/index.html","cf64bffe56b5a6d55e1491bbee1414a5"],["/tags/Swift/page/10/index.html","5092a1d5df7c47e0bb9b7570617798fa"],["/tags/Swift/page/11/index.html","175917744f1b2ad47c9cccdc5a490358"],["/tags/Swift/page/12/index.html","64ff574a5d35be3719e897ef0de6d7bb"],["/tags/Swift/page/13/index.html","76edefe60145901cca7cc6c749f74ccb"],["/tags/Swift/page/2/index.html","c322104b216d9778e7fea3dfea2327d7"],["/tags/Swift/page/3/index.html","9893f0a48ecd9141fd6ed164365df0dc"],["/tags/Swift/page/4/index.html","320eb57f2fcca9bd2a3b521c7e6d5647"],["/tags/Swift/page/5/index.html","1adb1f3ae798635f679d5ce5dc4a0aa1"],["/tags/Swift/page/6/index.html","ef32b0742494e45824025e4850c528db"],["/tags/Swift/page/7/index.html","65c0458150ccabbc8c78cd1670cf73d1"],["/tags/Swift/page/8/index.html","18b9dc435d568cecb9cefec791d81f85"],["/tags/Swift/page/9/index.html","19c6169d20233899b0800f11d4fb33d6"],["/tags/SwiftLint/index.html","0fdc125ee54bddde315203350918b613"],["/tags/SwiftUI/index.html","acec434a4d307aa7eb2696a03165db9e"],["/tags/UICollectionView/index.html","c484b82db1a37a4874b2b09eff8fd226"],["/tags/UIColor/index.html","76d7156ff3611d7241377a7fed6969c7"],["/tags/UIImagePickerController/index.html","d3ee02f4fc17f0deac97c3919cb6ddb5"],["/tags/UIKit/index.html","7a3ab799b98f95c4ab5ab9082a5e6d54"],["/tags/UIKit/page/2/index.html","965fcd0981e649c1dde5b6907b87318f"],["/tags/UIKit/page/3/index.html","3c0a5cc6cfe7523df8978a7d29873ae3"],["/tags/UIKit/page/4/index.html","79d737a775913673cd20a998fc0d8a8d"],["/tags/UIKit/page/5/index.html","39b672b2645f29e661cd0d9c7a1797ef"],["/tags/UITableView/index.html","d13efe81f831f1398d70783f3f777d8f"],["/tags/Ubuntu/index.html","9d35648eb59facac722d765b8eab893d"],["/tags/Uniquely-identifying-views/index.html","0d236a0dfeb8627d3d77aa8962ba2b6f"],["/tags/VIPER/index.html","1f550724e7861fff94da940dfcee2ce4"],["/tags/VMware/index.html","dc619576788e82d7abd56f9f937f79da"],["/tags/Vapor-4-0/index.html","a62cb1e8f67a9885ea4dccb16bf6999a"],["/tags/Vapor-初探/index.html","61060075659c6cd0e1bddc2a2f00d244"],["/tags/Vim/index.html","25e59f569cd5ac081267ed58720e43cd"],["/tags/Xcode/index.html","534d6bdf35b954f2bc6fddc6f20debe8"],["/tags/appleOS-Networking/index.html","0522b8159def2cd985fbc0d34124f16a"],["/tags/bugly/index.html","f142d1a84a94154d764cbc71e98e21bc"],["/tags/enum/index.html","0d37cf9407f51436912220358e8c7ab2"],["/tags/git/index.html","6df36d96fa12ac63bd7883da25378d4c"],["/tags/hexo/index.html","1257edcbf3a7358dfe3e7e8d1903726c"],["/tags/iCloud/index.html","772337b89110fa187e4f1994b0215545"],["/tags/iOS/index.html","622bf5425649fe054c71fed0e9559cd6"],["/tags/iOS/page/10/index.html","53e4ba031ae1f072881949afde3574bd"],["/tags/iOS/page/11/index.html","db3d23d1698a014bf00db2c254e6ad3d"],["/tags/iOS/page/12/index.html","9b3c42bd152303ae4775b2478103ab3e"],["/tags/iOS/page/13/index.html","78b39fc76e27a05d29389a1b6dbbc281"],["/tags/iOS/page/2/index.html","81f2383988b51ce4d4c5ff89020e7d15"],["/tags/iOS/page/3/index.html","dfac616a7d58181558d93d760a1909f2"],["/tags/iOS/page/4/index.html","fe2865ee700b8c6d58f72d26123e856d"],["/tags/iOS/page/5/index.html","6aa24a9b9e3ffdc77eecc43a19adf9ac"],["/tags/iOS/page/6/index.html","7f222d062c1a9f74d86fdd20b58d6688"],["/tags/iOS/page/7/index.html","356179e71a75fba6e061c8967c7756e8"],["/tags/iOS/page/8/index.html","826003bf32fbfead954ded4a4fbcdfe1"],["/tags/iOS/page/9/index.html","8964e6a1bac9cebf8f1add0d6efb6c4d"],["/tags/iOS面试题/index.html","dc1922a3281e55864bf6def9d3d76d9a"],["/tags/index.html","61b8fd5f7982b9f340da26bcc6a2dc25"],["/tags/non-optional/index.html","162755facbb42aed231de6285257804f"],["/tags/random/index.html","602c962a54727c6f95ce962a4b946c69"],["/tags/transition/index.html","cb01273b5477982c0077f6295cc55d26"],["/tags/三方类库/index.html","601c107ab0cda765fddfd6bb7a950902"],["/tags/依赖注入设计模式/index.html","d4dbb9024e2d9ed16662c843211f7162"],["/tags/值类型和值语义/index.html","323a52498fe0238e35b368814235c884"],["/tags/内存管理/index.html","0f298dfaf13982b0b05ba05f8ced525b"],["/tags/冒烟测试与回归测试/index.html","c8533ebd316f3f0d6e1b13ee501501e3"],["/tags/函数式编程/index.html","68437b6f6a364bf7daa22c35217b0f45"],["/tags/创建博客数据库/index.html","d0bb37d086fd4897897a18980cca8305"],["/tags/初始化模式/index.html","1c1d42a0482b7201b71473c2e6160c33"],["/tags/单例模式/index.html","9793c0211390e0f116d61c0bf3cfae19"],["/tags/原型设计模式/index.html","e379dc85b36d841acc2dc5d7abf76704"],["/tags/命令设计模式/index.html","288cdb5730ab581d10dfbaff9de764ec"],["/tags/基本控制流/index.html","4f8b016fb7dffb2ab49e4542afffa902"],["/tags/外观设计模式/index.html","f3874acab2d9da21434544501c40b2e0"],["/tags/委托设计模式/index.html","4eaab4545250900e18805ca714e5290c"],["/tags/子类化样式/index.html","58f3869d069a842840ec13b47cace47b"],["/tags/对象池设计模式/index.html","cfbbb5712e7c382d51a62fcf890c2b04"],["/tags/工厂方法设计模式/index.html","da5fe11e0c0723044545e1f9cf469992"],["/tags/工厂模式/index.html","b06113510e43469cbffe2ea74b313ed6"],["/tags/工厂设计模式/index.html","abd40dc6751f29c9dd9c5341e4fe7855"],["/tags/开发技巧/index.html","e2332128d3011c91e03f7e7d6d3e49bb"],["/tags/开发记录/index.html","b11af92cd8c12c3b51fc498c8747b120"],["/tags/懒加载模式/index.html","24e7f65bddc42b5e4a6a710dd3fc4487"],["/tags/技术支持/index.html","3b56df9e326a7a84895946b5bac2b61e"],["/tags/抽象工厂设计模式/index.html","7472c3d4c0859b2c347266ead4d28c21"],["/tags/构造函数/index.html","30b68ff9a288f81383b0e345ff229808"],["/tags/架构设计/index.html","4144fccd3c88786af475c60a9745c455"],["/tags/模式匹配/index.html","f1092bb030a31c28168ac00b17d6485d"],["/tags/生成器模式/index.html","d5f66e8eb724054577d830567bc3327d"],["/tags/用户体验/index.html","d5e982510011c70b39d9d870924ca2be"],["/tags/用户协议与隐私政策/index.html","97c2b7c4d861135db3763372de8b4fdf"],["/tags/类型与操作/index.html","f723bff1169da2f5f6f7e2ebb910c9d0"],["/tags/自动化布局/index.html","b643cee1177424635c6d49e3146502f6"],["/tags/自定义UIView/index.html","56fd53c8179140049365fc9e59c79b36"],["/tags/自定义转场/index.html","aa2914c1fd2892df52cb1201df086b78"],["/tags/自适应布局/index.html","e37ca6af9a17d0716ad180792bd82ac9"],["/tags/表达式、变量和常量/index.html","06e80460c7b6609d108ef629254422f5"],["/tags/设计模式/index.html","1be87901f09fe11c284caad25ca45e2a"],["/tags/设计模式/page/2/index.html","abeae3c4a7c6155568d786f7fc0f9100"],["/tags/设计模式/page/3/index.html","73182f88aeba17534c7663e139954234"],["/tags/访问控制和代码组织/index.html","bc38f1fb19c2df59c82fd5d3afc70882"],["/tags/运算符，下标和键路径/index.html","ccee5a2f761263536ac834c47128e634"],["/tags/迭代器设计模式/index.html","de6bdccaa2391660eade1f3c28687830"],["/tags/适配器设计模式/index.html","5c984289b10b347dfce968ecb5b3a103"],["/tags/错误处理/index.html","67eb348589b5378769f083b19ae88595"],["/tags/静态工厂方法/index.html","53575892b5d38fff124283f3e6971b24"],["/tags/面向协议编程-OOP/index.html","8245fc90b838f7f42483c4ec322f9c1a"],["/tags/高级主题/index.html","10234eed4dcb110a461aa8d300ae50df"],["/tags/高级协议和泛型/index.html","25855cf10a59e365c651fdac597352d2"],["/tags/高级控制流/index.html","1c8605324e293eb06168ebf5e9da9d8b"],["/为iOS应用构建输入表单/index.html","9ed98da942e59fbfa2e2b905f8d0c69b"],["/产品开发的幕后花絮/index.html","a7383dee67038eaeba9794a39cdfa7dc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","626ba02b8529af3402733acb0b14a016"],["/冒烟测试与回归测试/index.html","f1f6abd4f48ee0e5befcd8ec2a1d0e10"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","3421cad5b04e506ecdae733b758f49f3"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","bf3102f769ac625f215a576416b00d00"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","cd1eea52d29efbe54a4df4f9a499182c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","893aecdbbe27f5527d0918ab50b4cfb1"],["/在Swift中创建自定义集合/index.html","c189c9406b5a3463950cf5272f027e69"],["/在Swift中处理非可选选项/index.html","28d7587d3b8e67a278989d40be5d0471"],["/在Swift中生成随机数/index.html","52ccd1b16a67b8243d79c7325d90945d"],["/在Swift中重构单例模式用法/index.html","8b0b497215f757cd6164734f704aedec"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","0c905b81f720ff5f9370bb550cafc9de"],["/如何为VIPER编写服务？/index.html","15631cd9d6d2723c2a9d83ab4efd2f06"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3b445343582c4742394386d85da51248"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","786c49a32f6a05301b2a96e5699400fe"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","048f214481124b69fba4dcd4417afe49"],["/如何使用VIPER构建SwiftUI Apps？/index.html","16763dce871e7887f3aed4f60c2dc131"],["/掌握VIPER架构/index.html","b5353493e1496dca174a207eab7a2f52"],["/揭秘 WordPress Hook 系统/index.html","f895b2588be7e097542c9967be9f15e6"],["/比较工厂设计模式/index.html","cc8053c394f32e0f06e60715b2ae66ee"],["/深入了解Swift中的Grand Central Dispatch/index.html","ed26e457f09e2037343f38479030e73c"],["/深入研究Swift框架/index.html","cad6544239f26d786062bd36f4c3e770"],["/美豫直聘技术支持/index.html","0f34c4a2bed49342d3e41e25606fc914"],["/美豫直聘用户协议与隐私政策/index.html","a03a51ccecff9083762f8d72ce4c367b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","dd7783d6afadd404bece3118d0b4b998"],["/选择Swift而不是Objective-C的5个理由/index.html","6295deae703c51bd716ff37da28ca540"]];
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
