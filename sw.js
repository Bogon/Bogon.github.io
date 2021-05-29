/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","62d01dd21859529c652dcab318f4b7fa"],["/2020年iOS面试题总结(三)/index.html","87114d2ab84c250b73d38627017520de"],["/2020年iOS面试题总结(二)/index.html","d9d433c48dd785697ac48471243883db"],["/Advanced Swift系列(一): Swift 简介/index.html","e4469ddbfe936736e4ec3873e6f1ba4c"],["/Advanced Swift系列(七): Strings/index.html","e678de56ccb150a35fd94a40c3f32c7a"],["/Advanced Swift系列(三):  Optionals/index.html","69a1e3ca4f0bb938580ddb4c0a3bfbc6"],["/Advanced Swift系列(九): Protocols/index.html","d9951f26170449bed65d1c54e06cb5d3"],["/Advanced Swift系列(二): Build-in Collections/index.html","ccc7eb3dee91433c4262dd754c57cb17"],["/Advanced Swift系列(五): Structs and Classes/index.html","998fa7dea5a20c70cab989a52d99987e"],["/Advanced Swift系列(八): Generics/index.html","8dfc50547fa50c72b8f8c06265d7a03b"],["/Advanced Swift系列(六):  Enums/index.html","8a84f14828dba596a7236efb0af0e049"],["/Advanced Swift系列(十): Collection Protocols/index.html","06b847d1ea445deed5775735d6aacf6d"],["/Advanced Swift系列(十一): Error Handling/index.html","ba15312207d66044d91d3df0ea278c7b"],["/Advanced Swift系列(十三): Interoperability/index.html","d17662aa51d33008064737138346a1ea"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","e48d2c47a49201791ae05e9e36425172"],["/Advanced Swift系列(四):  Functions/index.html","82a9a4e5c573a3669e31a4aa08d708e9"],["/App Architecture系列(一):  简介/index.html","cd282ec8e0d7e33f036d0e78d7b5acae"],["/Functional Swift 初探/index.html","fcf35f76de17d0f230e07255c735efa8"],["/Git 使用小技巧/index.html","a3e81fa462c12b0d20d9e972d3ed1849"],["/Go 基本语法初探(一)/index.html","798a510fc5117cb614b55c30ee117e36"],["/Linux VIM 命令及操作小结/index.html","5d81287fb2076334d2a82493c0e7950f"],["/MySQL 基本操作/index.html","e872b235327e6fe301af8f80cad2fe10"],["/NSCODER和SWIFT初始化/index.html","cf50ba54114888895fca8d36ffe45b13"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","755a30287e3b54a5f0793d67a15715bd"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","46f2080ca123ec1430362094072c2534"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e6a6a3d73b0cc2cbe089ab8f3c38fb8a"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","177cafea9af1b7b8d2a1146e5932afd7"],["/Sqlite 使用Tips/index.html","93a967af61e22bd352bee54d23bffa6f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","71763e809d806a11735dec0fd93dd7ac"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","29a24eec4761b43415d5d50ba231f136"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","c034ed44d2a5a654dcfb0845cd870818"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","1b288efd5a00c09e9a161a148e813237"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c81a989fa371432ca705315f19fc117b"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","a61f30550ddb4a6acfbf94526d0fbd63"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","526ceda50ae1f24bec934788b3e774f9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","d13b577b8907ee9a33feb91ee8ab4658"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a2121a0c2829604ecbfbe47a66f3fde2"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b1e02b1a6fcfdfb43a98b0831e50f341"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","7a25a1f3ca73733d0f2701dc89685fe6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d7271ec6c45989fa21bcbd0bc7ae0435"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","33ace2a9574959ecccc3e9525e055e2b"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","cd8d56f384754cb8d88f87473d92d1cd"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","fd4c39254178a9bc6d08d083a13951dc"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","b9ab1e710c581ad414f3141fe5237351"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9d00e5f5dbc480d6bccf047992c674bd"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","32e524ae70c783dc913ce8ad992751e8"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","24851f3bcee4663de5f910ff8ef18d72"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","f5b50d2a532f6f98ea69b4acd2e414f5"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2ef7626fb865cfb62c96c63f4bebbaf1"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","5795e31fbcd384b889d60be89dd8318c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","67f555ebc2e931769cb7b5a3fbbb783d"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","c3ff1351d3e84ecc073dafc5173407c4"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","a333fecaabf201829176c893c2adb491"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","809feeb0f13ea297f13cd810cdc7c5a0"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6f1c97f377b206e2a530996469be05b6"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","642a2e15bc36cdbbe8e5d0cc5f7122ff"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","9c8e1c210c6f9d624b750ffd683a86f9"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6863734bad68d68c21969a27cf1818c6"],["/Swift CompactMap vs flatMap：差异说明/index.html","6a6cf2379a86e99db14c39c46815f265"],["/Swift Grand Central Dispatch 深入实践/index.html","9dfba7b10fe35af9020316c23263b900"],["/Swift Lazy属性初始化/index.html","987fe8b6ad05332fd8a05f82c3598271"],["/Swift Promises 初体验/index.html","5d93c48cf318bb3b378be81432f9a0fe"],["/Swift Promises 探究/index.html","cd77f92bf23bf86038f8c86ea1cbb811"],["/Swift UICollectionView使用指南/index.html","f1e26271cde8e4fbdc83a9070c278cb6"],["/Swift URLSession && Combine framework/index.html","45a11b9e0f896a8391133edaee1dd495"],["/Swift tips/index.html","88c59114194dfbfdbb132308d2444364"],["/Swift 唯一识别的视图/index.html","8ad745940eefe979ae460bfe4e19d033"],["/Swift 如何学习现代UIKit？/index.html","d4b83b10cac9ca0591d6ebba703cc386"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e2d6e226a4735dc0d24e6858f7213c45"],["/Swift 用 compactMap 替换 flatMap/index.html","7b2ab975f0736ca9ce35029f5da85980"],["/Swift 选择和播放视频/index.html","d0156714a42d226b3260f6641ea9c1e5"],["/Swift中UIColor最佳实践/index.html","c31edf3642241cb24265e54846cb61d2"],["/Swift中快速简单的工厂设计模式/index.html","74becc1260baa271e0cf080138d16b34"],["/Swift中构造函数与静态工厂方法的比较/index.html","d51ce89726c2896a33eebbc7568df987"],["/Swift中的UITableView教程/index.html","661af61368a128bd40ddd639d3a1e18d"],["/Swift中的懒加载模式/index.html","8678c4b0070469fe7b8195b885fe3bc7"],["/Swift中的模块和挂钩/index.html","777995ebac54fbacc20011c16b4879fc"],["/Swift使用布局锚点添加约束/index.html","3e771ed100200ccedf94657ce87cab2f"],["/Swift依赖注入设计模式/index.html","062c30f3d42aff14d5ec1279bf016914"],["/Swift关于Dependency Injection (DI)/index.html","71b75a35a2f0650211f8173c42a1162a"],["/Swift初始化模式/index.html","dbc3c8b57b4685b189c36f7c5f864669"],["/Swift单例模式/index.html","ca77eebb026454b012ffd91f88cf25a3"],["/Swift原型设计模式/index.html","93fea8144d8631bb236755fa29c7da29"],["/Swift命令设计模式/index.html","3851b888c2c1378d28b5034a2d65d826"],["/Swift外观设计模式/index.html","2197ced7f9ee61c53add5e4bdeb0c307"],["/Swift委托设计模式/index.html","c30b20cf4c37ee5f285944c5fa0320a5"],["/Swift对象池设计模式/index.html","9b3d74655483e7e56329e87770c519b8"],["/Swift工厂方法设计模式/index.html","24bfa75d9271c89c3946c23fa964a388"],["/Swift带闭包的懒惰初始化/index.html","b08ca0a4db3e8e91492305571a841e65"],["/Swift抽象工厂设计模式/index.html","c7905d0a1ec2875c75427326bc4f1c4f"],["/Swift掌握iOS自动布局锚点/index.html","54102f01f9ee37327fc4b96e427623da"],["/Swift支持旋转的自适应单元格/index.html","fbbb76204670b8849e284c68299cb901"],["/Swift枚举值/index.html","6da4ee4ba94b1e0760e950f8a38a0e0d"],["/Swift生成器模式/index.html","32326de13513dcb9191cb6f4d5454607"],["/Swift结合Xib文件自定义UIView/index.html","4673886bceeeaa6b4b4d829de2a6d74d"],["/Swift编写的20个iOS库(一)/index.html","63c51eef594a070da921e5c1465116e1"],["/Swift迭代器设计模式/index.html","ce551d386daf4629bfb34238391cb5d3"],["/Swift适配器设计模式/index.html","1364ecf5a313b4bcb664efe5880e92a9"],["/Swift静态工厂设计模式/index.html","3609a350bb8717bac0617f149bb343db"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c4ff3e36bcebb601b4a574157d0cc482"],["/UICollectionView data source and delegates/index.html","6f050f9312c6c190cb2d98d101638629"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","e0b16616565d27d096da6fa2908b402f"],["/UIKit初始化模式/index.html","b56bf6a88d271b6cd03b92f412544ca1"],["/Ubuntu18.04替换国内源/index.html","63cfd467ab79ebf5115362f6f3038a8e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f38e34425e952828fab5e12ec5d26afd"],["/Vapor系列 (一) :  Vapor 初探/index.html","3e20ffd01e459a42824c32bab6951ad2"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","bc828a6dd8d61fce8ea590a51285e33d"],["/Vapor系列 (二) :  Hello Vapor！/index.html","49c02cc6ff0e839818fda68e0734c101"],["/Vapor系列 (五) :  使用session进行authentication/index.html","faf68de65b5574514b8c0d9a58ecc2e2"],["/Vapor系列 (四) :  创建博客数据库/index.html","ece5edc7f89a676e58aa1d96fe9c8401"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e6ba36a5c5fc12937e0a9176e4597fc4"],["/WKWebView与Native交互注意事项/index.html","d30d6684bce9963227ee4ba51bfce72e"],["/Xcode扩展/index.html","598eed43c1f5d6297eb862e33efa95f9"],["/about/index.html","cdfce1037f10c61e27a22e93da3f81b5"],["/appleOS的Networking示例/index.html","8e15637daa0d0989715ca5b0b7ddcfe4"],["/archives/2020/03/index.html","7f4906b2deb4519bbb89c9e715060421"],["/archives/2020/04/index.html","c3c61848a85e23a5cd214be94450157b"],["/archives/2020/04/page/2/index.html","850fb0c6f14454682f59c0ab9e07c694"],["/archives/2020/04/page/3/index.html","57d74059635cf45a8ae7c1586afeb06c"],["/archives/2020/04/page/4/index.html","2a4dcf3661e6b189540d1d75d3ce5c40"],["/archives/2020/04/page/5/index.html","41d47edac025dbe2dac030bc93dd5371"],["/archives/2020/04/page/6/index.html","e17e457fe7f77878c8dce4dd1ba78cab"],["/archives/2020/04/page/7/index.html","adec9925522c56e99ec056a068488f8a"],["/archives/2020/04/page/8/index.html","9779b84f714c57575c5b60bcb1a3da75"],["/archives/2020/05/index.html","2e986eb4deca63def7935c4d3b2b8741"],["/archives/2020/05/page/2/index.html","16a78cc9c7a56127f1d2a3fdee1dac9f"],["/archives/2020/05/page/3/index.html","57a1541cba7470fe57c023d52429b83d"],["/archives/2020/05/page/4/index.html","fc403a12058b8fe4f44526ffa88e35bc"],["/archives/2020/05/page/5/index.html","8427fa5293c4ab7f07118c919f33ec81"],["/archives/2020/06/index.html","82cf92bc6e015b6f09b581b83c114d29"],["/archives/2020/06/page/2/index.html","f4c2a60bc8a51edcfc38d60270452e01"],["/archives/2020/08/index.html","7ede1a4bc2d4058ecdde8c5f2e78df5b"],["/archives/2020/09/index.html","51784aaa63f317790616a396bd3b70cb"],["/archives/2020/10/index.html","659361ef8cd521c5128f50583baef29d"],["/archives/2020/11/index.html","b0a94e946fa17d2458a1e975a7eb5a3b"],["/archives/2020/12/index.html","1594e5bb1834a17cdff9cd83053983d9"],["/archives/2020/index.html","6cd0861f3eabfa62cb4bd46693bc80ca"],["/archives/2020/page/10/index.html","9ad413c1776244520b58d0a85b49a94f"],["/archives/2020/page/11/index.html","6b0642bcfcc8af93473231f15ae85ae4"],["/archives/2020/page/12/index.html","8fa403866e0c7a419f7ee295d6099af3"],["/archives/2020/page/13/index.html","28f897ddb3f936ff04dfec2b6b9e37b4"],["/archives/2020/page/14/index.html","5baad5eda62705aa6407892ca4d1843f"],["/archives/2020/page/15/index.html","c11b12c57c2af802663aaab8f0ddb070"],["/archives/2020/page/2/index.html","51d0eac2ff5d7691ffc467866fe08542"],["/archives/2020/page/3/index.html","0bcdef7be3104d07976add4a9a6d1259"],["/archives/2020/page/4/index.html","fdb824c39a69f48b35663098045a9883"],["/archives/2020/page/5/index.html","c80ef10e0ec15ab9d60e239d1b0e8770"],["/archives/2020/page/6/index.html","a68e144c65cda9b882942749aaf26f67"],["/archives/2020/page/7/index.html","7ed5b44a78a92c36bcb19117b06dbcec"],["/archives/2020/page/8/index.html","2232dccecaac1fbc2706f0c5bd9a20a9"],["/archives/2020/page/9/index.html","f53a019b56e5fa0fd0daaf1f4669e55a"],["/archives/2021/03/index.html","b275f433c6989218d139b2e67b1befeb"],["/archives/2021/04/index.html","79c91fd8caa7926d5a8147861c4f2fee"],["/archives/2021/05/index.html","4d6c0f98683bc135f30bfbaae92d8b19"],["/archives/2021/index.html","d8252a3bb95e19be753644814b86844a"],["/archives/index.html","5523dd8c98fbc7d99a90b0ac979040fa"],["/archives/page/10/index.html","ae7ab81b886699949c4b64170e1b8f23"],["/archives/page/11/index.html","e26640df018c6ffd82324744fe5f1c45"],["/archives/page/12/index.html","06192a56101e59f46a677e316901bb1a"],["/archives/page/13/index.html","059370707ef58e4673d7722e087c2a19"],["/archives/page/14/index.html","6d9414cc3b72c4d58b9a92cbe4ffb6a6"],["/archives/page/15/index.html","5349882e75ad379ca44608b003fcf2e3"],["/archives/page/16/index.html","5dc410b77d8b2976bff3a1b76861c324"],["/archives/page/2/index.html","d78dba31ef7e884348f65d543a1fabc2"],["/archives/page/3/index.html","227634f570750c6d09c845a5970015a5"],["/archives/page/4/index.html","68fbc47cda61d3b0913a35d48e922c69"],["/archives/page/5/index.html","48f560291b411ea05c7e187deddfdb77"],["/archives/page/6/index.html","f08a850a6c82602a6f72c7c0b2df5eb4"],["/archives/page/7/index.html","7338b8f9ba1e6e6d813438558099853f"],["/archives/page/8/index.html","38c7a62901907d948a05de597725cf74"],["/archives/page/9/index.html","2f52bdaf11cdc0c1b3f5f2dff13e41b0"],["/bugly 上传dYSM文件小记/index.html","bd886ec05d84d431ddf596a53c5eafb6"],["/categories/Advanced-Swift/index.html","d8e65f0e2df436fa991fb1cd0db9a816"],["/categories/Advanced-Swift/page/2/index.html","3071c0d11c1b418995e5bbe798788d45"],["/categories/App-Architecture/index.html","ae624aaff5e5aac64b1f5a5c2f6ec175"],["/categories/Array/index.html","86270ac1f68fbffc585c8f8dd9516d74"],["/categories/Codable-protocol/index.html","b16132660fa158031a4c23e536b6d9ec"],["/categories/Combine-framework/index.html","b50d83a3d2323e148597b0e6bf0f7da9"],["/categories/Combine/index.html","1a2398b58dea71a497e11a92869d0f7d"],["/categories/Go/index.html","4f48a98cb9093bc22695c8cd54d8c7b7"],["/categories/Grand-Central-Dispatch/index.html","b350c530d20c2fc72255cba53202057e"],["/categories/Hexo/index.html","817397786a5b8260621fa8bc9cd2035f"],["/categories/Homebrew/index.html","65ea36670bf9c69379985780b4f98d5c"],["/categories/Linux/index.html","21b90f83130cd7493e772324f75bee90"],["/categories/MySQL/index.html","72121198a18821105463f31baa015914"],["/categories/Promises/index.html","7e74dc5d2017506fc391d9e9ce042295"],["/categories/Result-Type/index.html","f6caa957ffd80bf216145e7d220b9732"],["/categories/RxSwift/index.html","46fe31a010bc584047be8c074e94671c"],["/categories/Server/index.html","dd5157c157cb6b09725e56abd5c171cb"],["/categories/Swift-Apprentice/index.html","fd38e5144903a91ae759ba855c040acd"],["/categories/Swift-Apprentice/page/2/index.html","e51273981b78106f2e2c6d362b47eed8"],["/categories/Swift-Apprentice/page/3/index.html","2eb3003e98d29add8bfb5ccf4c68e690"],["/categories/Swift-源码阅读/index.html","6831b29eefcf940da218756089909dfe"],["/categories/Swift/index.html","6da672aa8345e881ceb203d073efff6c"],["/categories/Swift/page/10/index.html","085eb5dc8e2407c22275ca359219cfc2"],["/categories/Swift/page/11/index.html","28d9a29577efcc9d987d8465b655786c"],["/categories/Swift/page/12/index.html","568a7aa232d2009eac1e50511a315cc6"],["/categories/Swift/page/13/index.html","0c01470a04217d91c63ae9a9fbce30d2"],["/categories/Swift/page/2/index.html","d035df116c2f7f8d0b8c82b54abebf46"],["/categories/Swift/page/3/index.html","f1f624cd14a78c0db1eff3bf699b95cd"],["/categories/Swift/page/4/index.html","8388740617e9a09c35fe465902cfba17"],["/categories/Swift/page/5/index.html","272d03ba2a66ac223baa4a01bf0b67a9"],["/categories/Swift/page/6/index.html","ac99febc6d3061fa97002806b711ee16"],["/categories/Swift/page/7/index.html","c7cd4deac0d9cb755e8efabc01f01e1b"],["/categories/Swift/page/8/index.html","a84f5b848ec3b67d04de1c7bf3e2de29"],["/categories/Swift/page/9/index.html","0db9b32d8ee70893237dc9ab4d24a047"],["/categories/Swift5-2/index.html","c85565839182a6c55f1cb39fcce71f9d"],["/categories/SwiftLint/index.html","ee26dfd735db38b4ac3b4a03ca09e912"],["/categories/SwiftUI/index.html","f7bffdfef6424a5011fca657c90da112"],["/categories/UICollectionView/index.html","196d3845ce9d7e924a9849f2d8fdc8af"],["/categories/UIImagePickerController/index.html","6358187b3f1e7f7899fa90ceeeb815a5"],["/categories/UIKit/index.html","66abaa0f6b874326a286ccd53f4c3325"],["/categories/UIKit/page/2/index.html","7d496e427e48d12b27b6b85e524ff98f"],["/categories/UIKit/page/3/index.html","796e75f2becd2546bd25fc78f7e6b149"],["/categories/UIKit/page/4/index.html","b53667e9568fe495dbbce93122eac00b"],["/categories/UIKit/page/5/index.html","ce9dba28fed5ee568a8b5a8050d87565"],["/categories/UITableView/index.html","43f36d4a30a34fd17d5f83267f06815e"],["/categories/Ubuntu18-04/index.html","dcb4242c57d9f2b9cc336996f00d8626"],["/categories/Ubuntu软件源/index.html","84c12091ae1a90d592f94735cf442d6b"],["/categories/Uniquely-identifying-views/index.html","3e1f7f87f1073ebd1da92f7de1811f0c"],["/categories/VIPER/index.html","71c838f5eef83d25666fbd86a21b763d"],["/categories/Vapor-4-0/index.html","da06517d21fd822e3abae73c73cfcdb0"],["/categories/Vapor4-0/index.html","0ede3bbb10593ca6507711ea960e1ce7"],["/categories/Vim/index.html","5fad07e4cf30dcde610d1d92df9e7a17"],["/categories/Xcode/index.html","8059e9fa4a53200cb131fd99815a7f1a"],["/categories/appleOS-Networking/index.html","4e7c5fe42e496f440de1f40c207cf906"],["/categories/bugly/index.html","f7a2e4ebc4abb5c02c719dbb2ee220ff"],["/categories/enum/index.html","2caf5ba6bc3a6a5e350a026227e4847a"],["/categories/git/index.html","5912894d62453fbc209fc8aebe1bb125"],["/categories/iCloud/index.html","ba3b0cf26bb0544e776fbf356aefa1a1"],["/categories/iOS/index.html","a7b8912a3523fa9352139fc622fc0cdc"],["/categories/iOS/page/10/index.html","82a59341becb5a68e33acad6374d4f33"],["/categories/iOS/page/11/index.html","ae3676cdcfe94f4d6baba3ea00208a56"],["/categories/iOS/page/12/index.html","0c243537355fcfc1e947154a6ea877c5"],["/categories/iOS/page/13/index.html","93b8e8c9a4a87c620ec83fd917cb4a3f"],["/categories/iOS/page/2/index.html","7fcf95a088cd70873b74cd9e2d2ba96f"],["/categories/iOS/page/3/index.html","c8d1be3a510aeafed249c93f35f74463"],["/categories/iOS/page/4/index.html","b0297d36a05d5a2e7c04a8756def9ef2"],["/categories/iOS/page/5/index.html","04b9af0d4e943b0a44af0907a49fb16c"],["/categories/iOS/page/6/index.html","f1d4d64836c9a645bb5d05d8bafff0ff"],["/categories/iOS/page/7/index.html","b8a9e1f1776b7f117e0f8ea83bac75fe"],["/categories/iOS/page/8/index.html","2a13ec1e4d14b78a7cb94b0b71c29a26"],["/categories/iOS/page/9/index.html","03336bc77d33f15897081d9949605ba2"],["/categories/iOS面试题/index.html","3167f980d334739900bf583b65b0900d"],["/categories/index.html","778ae0727316273980b73edc521eba77"],["/categories/random/index.html","d06e3ddd69c2bae1662b6765e3db0932"],["/categories/三方类库/index.html","be9c1e5ba7e85814988f3f6208db8fd9"],["/categories/函数式编程/index.html","1966de34cbf0cc259ebb4731bdfdf8e7"],["/categories/子类化样式/index.html","ae9522d455ececaadb2a5a0dd43a5eab"],["/categories/开发技巧/index.html","7181e0e011b911136607e9c8697499d9"],["/categories/开发记录/index.html","008186887ab32763df01bdd52b723e5a"],["/categories/技术支持/index.html","636a41042e943da818d882f4e648ec4d"],["/categories/数据库/index.html","6a861e5139c7f7f362960d4ca4335d82"],["/categories/架构设计/index.html","190fbce5f56e6962296fa1cb41dc234d"],["/categories/测试/index.html","0106e805ce1c05aaeedbd8e0ef047c52"],["/categories/用户体验/index.html","f88547065653deebd8f0e148870a6829"],["/categories/用户协议与隐私政策/index.html","583893b2073a1feefa5ac45fb1df4306"],["/categories/设计模式/index.html","048dffaf58bee473123ab8990b882d6b"],["/categories/设计模式/page/2/index.html","5bbdd01f8a501f0702d97ebe10e24930"],["/categories/设计模式/page/3/index.html","9e732b9c11c00c183f37b7019336ac47"],["/css/main.css","64bdb480bd39f9e8d5901a4e90dca93f"],["/hello-world/index.html","0fc359f80865e6e8275b48efbb3050d2"],["/hexo部署失败/index.html","1d93f283cb321423c9fbe45da378366e"],["/iOS VIPER架构深入实践/index.html","70e4696eb4e6a754681e45a59ae2e3e2"],["/iOS 自定义视图，输入表单和错误提示/index.html","015d3d84a05e9de76a382a2e0a8b24e0"],["/iOS如何使用iCloud文档？/index.html","927ae50a16a8a60d300e8f7e602cf304"],["/iOS子类化样式/index.html","6c7e2a3c879d850881f4489376d0fcaf"],["/iOS开发记录<一>/index.html","8a129fbf48028a1e80caf53bcae89cd8"],["/iOS自动化布局编程/index.html","b65660d33db0a9e37034bc6422446efb"],["/iOS自定义转场(By Swift)/index.html","c32060e413f553fe922e13a98abca607"],["/iOS项目架构：使用VIPER/index.html","d73bd00242baf349c5cffe071d4b9429"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2e3d1dfa9cd8c484a99c1030a3996f3e"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","009b4db5c0c0c61fd31aac1880b2f931"],["/page/10/index.html","f30f9e1a45bc90f957b764ce2c1c3df4"],["/page/11/index.html","41fc717c82b1f81af75e899c2024992d"],["/page/12/index.html","6aa5b98ea85f293110700fa6d097bd50"],["/page/13/index.html","be42cf831921011686a698f1048f5946"],["/page/14/index.html","05700388cd82baf5f3f0af0fa520ad9e"],["/page/15/index.html","1e3dbb24dc6694dc13f133cede70a5ef"],["/page/16/index.html","05f8f84c1505fa905284e9ff1557f0fe"],["/page/2/index.html","023f4a0bd8b2a1ee8609c2d846cbef3a"],["/page/3/index.html","931c5acb0817d55084b71ce95c3f8aef"],["/page/4/index.html","b4d52c5be63a9eaaedf337753583b5f0"],["/page/5/index.html","cf1475c741e5bb835e3d3c825d13f468"],["/page/6/index.html","0e15cf2f5617c0db96a44e54c72c6a34"],["/page/7/index.html","ce4561e56d7c70f360b441c03300beb9"],["/page/8/index.html","64084266d4711e37626e32a0f826ac04"],["/page/9/index.html","2aa10505dcb3ef13ecfc24126d057bce"],["/schedule/index.html","8bdcff35ac21008bb5de25af29c89ab5"],["/storyAppPrivacy/index.html","48328e76f80c43fa3df83f83a7a07c15"],["/sw-register.js","a48f039d8e64cf362618aab6fc3e2500"],["/tags/Advanced-Classes/index.html","8fc37f25798f34dc8cc54392afdd4e92"],["/tags/Advanced-Swift/index.html","f8398dd7fe55777c58e87595887a7ffb"],["/tags/Advanced-Swift/page/2/index.html","dd321beb459053aa5480ae6c4dd4d5e9"],["/tags/App-Architecture/index.html","16c7896ab95a08b35debc6a4db7c3068"],["/tags/Array/index.html","f3b73f5fab44411e8cc559ca1b42baa7"],["/tags/Arrays-Dictionaries-Sets/index.html","0cd039a587f6a30ceb11de3a001de5e8"],["/tags/Authentication/index.html","b681495deca80c013166e927f8f417ea"],["/tags/Build-in-Collections/index.html","d66337cd60a0636d5b3fbda46345679d"],["/tags/Building-Your-Own-Types/index.html","0e65abf805165aaa974597781e827f4c"],["/tags/CMS/index.html","160b149ac4649c4ea3f4b236dc86d256"],["/tags/Classes/index.html","d201c804c06108b12638ff54c951bd9c"],["/tags/Codable-protocol/index.html","84513d789bf0c19b936be56d8c6f03f4"],["/tags/Collection-Iteration-with-Closures/index.html","9a214c91897a3c3f0b71986b75f2e68e"],["/tags/Collection-Protocols/index.html","6f3008db6560a4dde9094d2fea887261"],["/tags/Collection-Types/index.html","31ab25f5d61a5567d6e00f9002c3ec14"],["/tags/Collection/index.html","ce0e6675fe8d0a4ef89cce5b0b18dea1"],["/tags/Collections/index.html","08956dcecc7c7120d15542e3fecb2ed1"],["/tags/Combine-framework/index.html","01ab13cf43f1d5eff8b9f120008ea1e7"],["/tags/Combine/index.html","ae2bd0e264e00014b063d41642a27550"],["/tags/Dependency-Injection/index.html","cbd9168432d8338b92d9112a86868f88"],["/tags/Encoding-Decoding-Types/index.html","273ea804a42639f236f9d942b918053f"],["/tags/Encoding-and-Decoding/index.html","37ec3abe0fc144632a8c36e90c62c929"],["/tags/Enumerations/index.html","c07babfba905f5de66485a4c899ed4a8"],["/tags/Enums/index.html","5e421f873d7f6362dbfbead2775f6aac"],["/tags/Error-Handling/index.html","bbe4d2d97593196dcdb4cc32e24d31c4"],["/tags/Functions/index.html","1a0387c37efca2f62dd1af0846df9d91"],["/tags/Generics/index.html","03178a2285e3183f5122b9a8580d9cba"],["/tags/Go/index.html","b978f84eba3414bc3957f9751c42d2ff"],["/tags/Grand-Central-Dispatch/index.html","2b5bdb6edc7c61f4b2f60046930b0651"],["/tags/Hello-Vapor/index.html","9a6b52271a7280d36fcb7a7968046800"],["/tags/Homebrew/index.html","420d29ad2e3c7bd3508d18fd66385769"],["/tags/Interoperability/index.html","4ce4a98f2035ad2e6894dffa8bc715d6"],["/tags/Introduction/index.html","fe1e389f781bb4d158244b704b464144"],["/tags/Leaf/index.html","a2fb9ee5f2b9565846715ac0ddfc068d"],["/tags/Linux/index.html","75ef061d6822136fe58cfe3a0782daf1"],["/tags/Methods/index.html","e3ff7f03756b982169f8a92775187ab3"],["/tags/Modules-And-Hooks/index.html","464c0c70c577731f710cbdd26ba2fc9c"],["/tags/MySQL/index.html","6413c96c830656488241f349279b2000"],["/tags/Optionals/index.html","1c7948c7e89a723e2c23d3e848744bcc"],["/tags/Promises/index.html","ac8f264edcf7e22d7bd6f6c57486255a"],["/tags/Properties/index.html","7346d65e246e6372ce0bd65c3e686fd6"],["/tags/Protocols/index.html","3e560a1a86144b5514ca3d1fae799e5d"],["/tags/Result-Type/index.html","c7e671ab5637c343d7c43bbb3c7bad49"],["/tags/RxSwift/index.html","0d9e7d8b8b948fc8e7f0b814ef56615b"],["/tags/Server/index.html","0879bee4586b691d4fa481e2f7f808d8"],["/tags/Session/index.html","e5bdee2e93488d10deef97758701c51f"],["/tags/Strings/index.html","08514ac2ef7241e25de425151084af09"],["/tags/Structs-and-Classes/index.html","6bf142093f7c09074fce9acc4d997199"],["/tags/Structures/index.html","50f5f935eab4487c1a7cc64b2f968f9a"],["/tags/Swift-5-0/index.html","5829ebecd327eeb88cf0f48552cd9470"],["/tags/Swift-5-0/page/2/index.html","22d0c964b90e50207d74630cbacfe4ab"],["/tags/Swift-5-0/page/3/index.html","8f8f091410b91f360a366c4cd01ffb4d"],["/tags/Swift-5-0/page/4/index.html","1a25727ce78c6448565bba26672d6624"],["/tags/Swift-5-0/page/5/index.html","361fcbc5c1728466103c186f5a165815"],["/tags/Swift-Apprentice/index.html","91c7e74c703e48174001d6a35bd17eb4"],["/tags/Swift-Apprentice/page/2/index.html","5acbd1018ea81080fb849c5a7aa43c0e"],["/tags/Swift-Apprentice/page/3/index.html","56c2de005e5f9cc92628e8071dd1e8e4"],["/tags/Swift-Package-Manager/index.html","f8f6b893c51c3d321dedc95490944cd2"],["/tags/Swift-源码阅读/index.html","60b8e1a55ec13f99190e5322c6f26762"],["/tags/Swift/index.html","2a9d6e8d5ca39d6a73fe25268d59a171"],["/tags/Swift/page/10/index.html","c3dc07d18b4493e1b879be481f46bd64"],["/tags/Swift/page/11/index.html","7e5dd53303a5a2eb569ae5a255b2498e"],["/tags/Swift/page/12/index.html","314ea88f38b48c843185fed79c2b095a"],["/tags/Swift/page/13/index.html","adb94625c8b43ff4a2ad824952f67956"],["/tags/Swift/page/2/index.html","a1c3d7ae96eb0fbb81e74b9c0db55956"],["/tags/Swift/page/3/index.html","50f93819c0de415c61d2b7e65cff86e1"],["/tags/Swift/page/4/index.html","06b682d4b72851e328a9c7814717b24c"],["/tags/Swift/page/5/index.html","f3fb3ea7a22abae0b72118652189a734"],["/tags/Swift/page/6/index.html","f85da77df7484d65d735d11936479f51"],["/tags/Swift/page/7/index.html","a2f9febeb02afa1956e8b4e2c3f588ac"],["/tags/Swift/page/8/index.html","dddda1ccc76ecdab79237022869a0d85"],["/tags/Swift/page/9/index.html","0aa6f27ce5ffc2b8bb35479e37b5ed3e"],["/tags/SwiftLint/index.html","164b7a071df821c43e514f7ac314b0ba"],["/tags/SwiftUI/index.html","a1b5591e25cfe4122a1c95eefdb19b1b"],["/tags/UICollectionView/index.html","d3366c17a4636eb21a3551c8f6f09b41"],["/tags/UIColor/index.html","ac74f15489e9d507ffcf24762453238c"],["/tags/UIImagePickerController/index.html","6bac0eeac2fac9f1cb529d62bf3864f9"],["/tags/UIKit/index.html","e23456f43c6e745cd3e9c160c2bd4d03"],["/tags/UIKit/page/2/index.html","84a705e8f403a8b47aff8947f8438578"],["/tags/UIKit/page/3/index.html","29e299adf5e47c6366177be6ab4d867c"],["/tags/UIKit/page/4/index.html","d0da46385ff5fb27bccb679587dc6a45"],["/tags/UIKit/page/5/index.html","3a1d70c8ea6e7efc34d52f68ce8ab360"],["/tags/UITableView/index.html","50e76ada46cecd9bfcd7f9ccbfe8f6e7"],["/tags/Ubuntu/index.html","cfcdb395aeb5a461e2b455a3aa328996"],["/tags/Uniquely-identifying-views/index.html","ddc1b2b69ee9d109c3be783a6da2e6b5"],["/tags/VIPER/index.html","241e3c7355dfff0fa255510f7a890060"],["/tags/VMware/index.html","477ca843465c1b86b37370f5f4560508"],["/tags/Vapor-4-0/index.html","034716afbf6938d3f65c51d83a331a4f"],["/tags/Vapor-初探/index.html","864d529ce69dc3804f946f6fe1b7013e"],["/tags/Vim/index.html","9340cbe28c20d1baef9459ec69438a15"],["/tags/Xcode/index.html","96c6d3c73ea0fc5b6996e73d42b6e367"],["/tags/appleOS-Networking/index.html","0b84a997ed68f2835e0a27e5e71980bb"],["/tags/bugly/index.html","8dbf30ac7adc5692ab5aba57f52d7e19"],["/tags/enum/index.html","3c2c92ea1f9e161deb202006ff952629"],["/tags/git/index.html","a8a7b9abe767c56c518c535d1cc66ade"],["/tags/hexo/index.html","d4e3a137c31a56c12af09b2d384c7426"],["/tags/iCloud/index.html","bd8e1eec5cc6359bd717f82cfd17aa31"],["/tags/iOS/index.html","46fdde3f12835a6ae3ef19ada5a51aa3"],["/tags/iOS/page/10/index.html","bda3d039cc79c0cfd53711d57b19804b"],["/tags/iOS/page/11/index.html","c36553cd6baf49beeceec51457b26c71"],["/tags/iOS/page/12/index.html","e6ca333179a06e2ace671c046a5d4788"],["/tags/iOS/page/13/index.html","4c4359ba3a573d4272112868483f805f"],["/tags/iOS/page/2/index.html","4d78c74efb044297a3e4ca6bae29c2d5"],["/tags/iOS/page/3/index.html","d29cc081f8c0a802b69cd74a932a8a64"],["/tags/iOS/page/4/index.html","b511c15c2b44e33bfaf51ac32ed79594"],["/tags/iOS/page/5/index.html","2f03e30e24a63610be183f9b2f02b591"],["/tags/iOS/page/6/index.html","e190194ff94adb945b423ec8042815d4"],["/tags/iOS/page/7/index.html","a06d3e74de7d5180d4f592711fddc7b5"],["/tags/iOS/page/8/index.html","5924f3a7f964b94b9e233149cd4fb924"],["/tags/iOS/page/9/index.html","225276f4dd13eeccc9cdcddc5bb11ad5"],["/tags/iOS面试题/index.html","3ded4bfa7e2f387f1023417a7bd47504"],["/tags/index.html","62d6dc09f1634e0f6a4fd41a1fe3f3fd"],["/tags/non-optional/index.html","cbbbcd46ade433d1df81d23205a3913b"],["/tags/random/index.html","7085d4f1f618806e10a4e0768b41ee22"],["/tags/transition/index.html","e2c7a19b1366f9b099daa2e0d4e5468d"],["/tags/三方类库/index.html","4eeb8b9d55bf535cc0516d4537496c59"],["/tags/依赖注入设计模式/index.html","266826064418cba4ec5aabe02f83ce4d"],["/tags/值类型和值语义/index.html","8d0f297bf01133ecddc6cb5847214fb3"],["/tags/内存管理/index.html","8dab665955319f8a2c82166c041979db"],["/tags/冒烟测试与回归测试/index.html","ba0046ad8fb6456a7c1cdfede640b942"],["/tags/函数式编程/index.html","311604350bf96d2425e82f3972413fde"],["/tags/创建博客数据库/index.html","b2d8e6e9af55bfb645a4468f34b3d1bf"],["/tags/初始化模式/index.html","d43d9d380d7c8201f547395a21ea8397"],["/tags/单例模式/index.html","34b5137435c137f1850034329b9007bd"],["/tags/原型设计模式/index.html","9c5e3aca515958897e62b87c6d76d173"],["/tags/命令设计模式/index.html","3ebe6929f8d46cbb8204ec4fbf6f6ad0"],["/tags/基本控制流/index.html","4a7566165bd02a151ebc3920cc44e35a"],["/tags/外观设计模式/index.html","72cf454c9a220877240e5d06a7d9bdea"],["/tags/委托设计模式/index.html","991bd961cc298a84140bf1b245cfacc9"],["/tags/子类化样式/index.html","21f9ea5cb6c095cf9d4b25f735210a1a"],["/tags/对象池设计模式/index.html","a3ccf8b81a0e06cd00425e188eabf80f"],["/tags/工厂方法设计模式/index.html","3487e47a83645416f01d632b8cbded7c"],["/tags/工厂模式/index.html","f4aedede6c377332307d29aac4b3194b"],["/tags/工厂设计模式/index.html","8325b0b6cf0bce6dfe5121e7dd970f04"],["/tags/开发技巧/index.html","71e23de50c01900a9bdb34e659ac7d64"],["/tags/开发记录/index.html","078bd2f18fb9c9c1872cce947f590d63"],["/tags/懒加载模式/index.html","7aa40e56241f8d3b4016fcda450a5fab"],["/tags/技术支持/index.html","02c698874bdbeac51f4747ebf14252b9"],["/tags/抽象工厂设计模式/index.html","05ca00788d86f6246498e1df8fe78eb8"],["/tags/数据库/index.html","cd36c90d22a643077b5ade9ec1b5e880"],["/tags/构造函数/index.html","f871b62cc5b9e326d38459e58d09611d"],["/tags/架构设计/index.html","19baeab98b3d78215a7e3c407a601c08"],["/tags/模式匹配/index.html","0cc3e15f73c3a7bc5ab13ab0e7488db9"],["/tags/生成器模式/index.html","c95fad5d1399bbe4b991ed26114ed100"],["/tags/用户体验/index.html","d540acdb4df891f15bb46fcfc059b727"],["/tags/用户协议与隐私政策/index.html","09dd5b6fbe14f7b90fc30ac4f5fec2f1"],["/tags/类型与操作/index.html","4ea2a379274a8a129c35362282a45a0f"],["/tags/自动化布局/index.html","c6c46fb37de5c2f1b98bcb6d0f068da7"],["/tags/自定义UIView/index.html","51484b58120422212953c02d6c817707"],["/tags/自定义转场/index.html","4b20da9d505e3986ce353b82e49cd730"],["/tags/自适应布局/index.html","29a9b05596d215e5f33e072f964c4b97"],["/tags/表达式、变量和常量/index.html","a14c261c6d94f67b9c2e946945c6f1a7"],["/tags/设计模式/index.html","658462ce19a82cac76db344b98bae99c"],["/tags/设计模式/page/2/index.html","6736995b46490fc2302006de363a3fad"],["/tags/设计模式/page/3/index.html","b2fc6e63fc718f744ca2e1e2be8a5443"],["/tags/访问控制和代码组织/index.html","fcd7b15f4827bd655093d5e1bee476eb"],["/tags/运算符，下标和键路径/index.html","99c0fb7478401305a5ed3d0e5bcc7219"],["/tags/迭代器设计模式/index.html","e696975360415efe4382b195d0301041"],["/tags/适配器设计模式/index.html","9f0a353dde4263dc49e28b5fe1d578eb"],["/tags/错误处理/index.html","a0ac40bf42ff3c1ef056f4599160207f"],["/tags/静态工厂方法/index.html","1b07734f36715900d8b911f2d8ff46c1"],["/tags/面向协议编程-OOP/index.html","fd94e4be60cc57e7c54cbcd7c8859ad4"],["/tags/高级主题/index.html","41a120819f8a1f8a32661fe7d5968f1c"],["/tags/高级协议和泛型/index.html","d68d87b1c9d78bde30311d750d5bd454"],["/tags/高级控制流/index.html","b5822efb58f862b022c38d79e2b9fb5d"],["/为iOS应用构建输入表单/index.html","bdb3ab2b637998965ba7612e55ec77f2"],["/产品开发的幕后花絮/index.html","a2375921e5d8dc1703a9c94d72c09bd3"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","45730dd01c0f480c20e0c050cea0ead9"],["/冒烟测试与回归测试/index.html","f3972ea0d980b5af14ca20a23ec75756"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8b70ea0f1500583cf703721febfc43ea"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b688b6ed0a13ff4d445ba0229b33e9d1"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6d4a09e2dc6582984594111b37696849"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","68b0ed41aef05ff278b33b4d9e243e81"],["/在Swift中创建自定义集合/index.html","4c75dcaadff2c85eff94c457124bc5dc"],["/在Swift中处理非可选选项/index.html","878fb94222d704ebdff402edbe048e7c"],["/在Swift中生成随机数/index.html","086c8a041957b0d8d9aea89bea1e9bcf"],["/在Swift中重构单例模式用法/index.html","dfa96a1f1f97b563ee41854ce19dbe57"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","e1cd03d4755d9f848a66b78a7c484cd4"],["/如何为VIPER编写服务？/index.html","04e1f7b8561ecc6f425f2169a9c6d13b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e36dec9ff125ee9b66d5d9d12ff0ae4f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","09f2f52dde62784962b4492abc329b6c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","f4c6cb9fe04be0b0f06cc2c38255df99"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ffa94c8a28d655dd96a6985c44de7207"],["/掌握VIPER架构/index.html","3ae31c943980e97a4ef4cb0d26215631"],["/揭秘 WordPress Hook 系统/index.html","a36e477b1c0f57ac80be8f7148b41f3f"],["/比较工厂设计模式/index.html","1ffb1b5a349ff3d9a624a8ad9e3a3224"],["/深入了解Swift中的Grand Central Dispatch/index.html","2084627ca6710dc287d305ae7f687368"],["/深入研究Swift框架/index.html","a40afd03cd042e83fdf43048809dd49f"],["/美豫直聘技术支持/index.html","18fb22ee322d39c6bb646fa51f71bf7a"],["/美豫直聘用户协议与隐私政策/index.html","6c4bf8cf2b0dd917f74255a39c6055ab"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c3a0094ec571f059702bf960ea251179"],["/选择Swift而不是Objective-C的5个理由/index.html","6d147b09f318b0bced7e27806e565acf"]];
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
