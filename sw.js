/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","0b3f0ca3e158e34e80b01f135fed4df2"],["/2020年iOS面试题总结(三)/index.html","2aed69e060444d08589cc1f7f37f5617"],["/2020年iOS面试题总结(二)/index.html","fdd72500a4555488f52a06b4fc9e63c0"],["/Advanced Swift系列(一): Swift 简介/index.html","d43a93728b02561aa51c82d42e00a83c"],["/Advanced Swift系列(七): Strings/index.html","5a681324895a4939bea8a3cf11a829d9"],["/Advanced Swift系列(三):  Optionals/index.html","dda7f41909a46327544c86fcc0c4cf92"],["/Advanced Swift系列(九): Protocols/index.html","2e4e199c317c0b21206bf913d2079ada"],["/Advanced Swift系列(二): Build-in Collections/index.html","453e5a208ee0b5855c2a604174469171"],["/Advanced Swift系列(五): Structs and Classes/index.html","e093d2e1f2584bdb2ae915e74eb6abca"],["/Advanced Swift系列(八): Generics/index.html","fb58813963afc544cdbdbdacc8ba0c3b"],["/Advanced Swift系列(六):  Enums/index.html","a99a35645870c4e01476ce02ac4a5778"],["/Advanced Swift系列(十): Collection Protocols/index.html","a8085af05dcc91d07988db20859c7f30"],["/Advanced Swift系列(十一): Error Handling/index.html","eb7451d0f4700f467e6318e2c3832609"],["/Advanced Swift系列(十三): Interoperability/index.html","39f888238e643f11242f7c9d73715f73"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","fdb0623dd26fd3a66521b3f52c3a6db6"],["/Advanced Swift系列(四):  Functions/index.html","6c434ab0ca19b1b52c64e553dc9baafa"],["/App Architecture系列(一):  简介/index.html","17d631007fc42ba4b20964f4a2c1a4f6"],["/Functional Swift 初探/index.html","98865a3a6d3a921191086f81d07543ec"],["/Git 使用小技巧/index.html","aa19d40eb2fe0f44c7a431c1bd831df3"],["/Go 基本语法初探(一)/index.html","4fc6d555dc6e56e17cfc15f452e1512b"],["/NSCODER和SWIFT初始化/index.html","6ec06cc618d10f76c3a3a18b3e0bb448"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","766977976a98dabce6f1860a148e707c"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","620fcc28e00a9e487203a25859a2efb6"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","562947d9fb62cf043edb90c9f967e93e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4d43a050955467e5206a7cac137c79da"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","b84bf7378190bfbb781b0d151c429b93"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","b0fc06bcacb5cf5aa01c8702c644c3ce"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","4be9ee7bd262dfe95d9a45a9f9b1b2e7"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","ed358e6e3848cbaeb7f52c7b17399671"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3bd3c3f3113b3f6cbc7f533a4f48e2e1"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","ee44941ec07f5d3020c7af563b7956be"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8f2f3893794250459e51c2cfbeb3f9bc"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","f326d9442199bd762e13d37d29534f91"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","ed09f17f18d7022c04540b1e5d58b2ce"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","458b1a7b64a1401ecd2070609d5dc5df"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","afffe3816dd4e9c5b253589dc6961600"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","070ac8c88a7b4ee881737ff1552067e1"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","e832d8b780fb2a16d14be76e2c3e8cc7"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","1f22d256fceb9a167e7cbe2b54b125b8"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","82956a9330f38591fd1cb5f675ea86a3"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9feae0ddbcfa67a52d612c751797efb5"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","7bced247004ad9a77af19c948b9a0f92"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","6eb5c084f785dbc938d76982c2f5a564"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","17cd0db13622ca04c27c8f8513e53105"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2c4535c4062cc99fab84aec669bc410f"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","65ca667c886b1da88791ec29eedc3a67"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","77afe4d1934e67c0519ecb8093dee000"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","ee85499104fbfa5ea3437bae16bce79f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ba09d22129cbcfc6b3c35f556dfa6840"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","147c4b478e7faa43258743928ba39102"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","548df19146051fb0a008e68e6b81150a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","ddc97bcea5bbe112c6830671770a29bb"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","ffa07eb15d0033e33f226393aafd8c5d"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","81be6aee92460ec6f49dd908f9fbb40a"],["/Swift CompactMap vs flatMap：差异说明/index.html","4b72b0f1275497f7c37af2cdfa571c4b"],["/Swift Grand Central Dispatch 深入实践/index.html","4f4bd04c48736f0d110b92e72fbc56e5"],["/Swift Lazy属性初始化/index.html","6c17453b1fe9d4ab218e99f4d9ecc744"],["/Swift Promises 初体验/index.html","f994a6652bd40a34cfb8c85b7850775f"],["/Swift Promises 探究/index.html","1efeb661c3bcd45cfdedacf69e425fcc"],["/Swift UICollectionView使用指南/index.html","b20398678a1150a2302b7354b810fdd8"],["/Swift URLSession && Combine framework/index.html","c7173934e21314546b66411888b37f05"],["/Swift 唯一识别的视图/index.html","332ffbab61dd1d294305be4ffd9ed9c2"],["/Swift 如何学习现代UIKit？/index.html","6f4ddb794b419d043bfb4dac78900a21"],["/Swift 用 compactMap 替换 flatMap/index.html","3efd43e5a49144d43016150319b28556"],["/Swift 选择和播放视频/index.html","6e7ee80ef541eec2f8f019aed923cfe3"],["/Swift中UIColor最佳实践/index.html","68e7e0b03fe8cde7fbff533b32a7cfe0"],["/Swift中快速简单的工厂设计模式/index.html","ffa06b71d482c1d846ad98943311a4ce"],["/Swift中构造函数与静态工厂方法的比较/index.html","c6730ff9880a71395209ba773045993b"],["/Swift中的UITableView教程/index.html","8bbdefbdc2776d23c72e7d9d6939a724"],["/Swift中的懒加载模式/index.html","adcf6cf6f7af1ddc2bf7788e18484985"],["/Swift中的模块和挂钩/index.html","4d517061c0d9e10c6c7855eca701dad5"],["/Swift使用布局锚点添加约束/index.html","de0809bcb8fd73d81e4ba4ab1ed4697a"],["/Swift依赖注入设计模式/index.html","e5d1e6ffb7bc973843a335e347f36ec9"],["/Swift关于Dependency Injection (DI)/index.html","2f9e7e9855b072f06fadedc04dfb160b"],["/Swift初始化模式/index.html","84399c4aeef9dd6bfe65d25d05c7e85f"],["/Swift单例模式/index.html","8ca0f16b5f122cacd3bef7c93909fecd"],["/Swift原型设计模式/index.html","e55f4ac3d9d369e73347c186e1f6f8ec"],["/Swift命令设计模式/index.html","7749b8d0770a3d5ca99e58bc860f5ffc"],["/Swift外观设计模式/index.html","db5157ae311ec084cd8e3ed93d78b73f"],["/Swift委托设计模式/index.html","50742cdf01bafbf303db43c3f41588c6"],["/Swift对象池设计模式/index.html","4cda0024753aa4b5ae14a06df019c023"],["/Swift工厂方法设计模式/index.html","ccd806648250ec33cc11b98700497e8b"],["/Swift带闭包的懒惰初始化/index.html","03d305ac94cabcb19718720dbd7906c2"],["/Swift抽象工厂设计模式/index.html","fa0b922f90310de1f32abe5ac8e8f0ed"],["/Swift掌握iOS自动布局锚点/index.html","6c0074cbd603e01b1cf25d9af68e000b"],["/Swift支持旋转的自适应单元格/index.html","d9bbd231bde92c4d3db734fd9fedf59a"],["/Swift枚举值/index.html","0a080d7b3a2a634fbbec191deefd1c85"],["/Swift生成器模式/index.html","0aed806068956be7e55a0d0f76d12c8d"],["/Swift结合Xib文件自定义UIView/index.html","e66750d42c872369cc8b88f708b7b600"],["/Swift编写的20个iOS库(一)/index.html","ee0564ca88add689d65d1e89617efbfe"],["/Swift迭代器设计模式/index.html","b6e12793058af5380a7a2a57e5367a3b"],["/Swift适配器设计模式/index.html","8114d1f5769702437d172f93bc46ccdc"],["/Swift静态工厂设计模式/index.html","354af853c7c6ead3e3243e157d0231c3"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","efadc255aa141eca7899bd10747ed833"],["/UICollectionView data source and delegates/index.html","016a962daa1de56d69dd2251c94a36d7"],["/UIKit初始化模式/index.html","06fc926fb099feabe9dc98c4471e6f5a"],["/Ubuntu18.04替换国内源/index.html","740ba8a06037550928b181c5b012376c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","5c173755561cb8d0210f4a9aa18a74f7"],["/Vapor系列 (一) :  Vapor 初探/index.html","e156b9805676b2057a71e32775a9a725"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","6ab0aa338887e8d98c21163ee5aa85d4"],["/Vapor系列 (二) :  Hello Vapor！/index.html","92cdd2122d5357e39b4efb5ab3d1c238"],["/Vapor系列 (五) :  使用session进行authentication/index.html","afa63d250b0dfa22898093f09e5873de"],["/Vapor系列 (四) :  创建博客数据库/index.html","6cb92cc9de6b8623d443e9646889b1b0"],["/Vapor系列(六): 徒手撸一个CMS/index.html","513f38ace7522b95aa66ac76b4fc6ad4"],["/Xcode扩展/index.html","f23bf428bb7c8ccf7aac14f7e0c62029"],["/about/index.html","adc3529bca7fb13665bd4fe4370a3c40"],["/appleOS的Networking示例/index.html","8ddcb924511042ee60dde53ef1933e6a"],["/archives/2020/03/index.html","0fbd25d42c16fcb5a93dc7d17ef02989"],["/archives/2020/04/index.html","5d4ed80b53ec7cf432437d6f16f1aa63"],["/archives/2020/04/page/2/index.html","2f527b697a9222cec7136941459872bd"],["/archives/2020/04/page/3/index.html","dd11f9880f15a101ad1b33c7f1b9ff68"],["/archives/2020/04/page/4/index.html","ad27aa7cbd7893091bd558c0e9f66137"],["/archives/2020/04/page/5/index.html","8ceac1968289cd027ae32748ea89f562"],["/archives/2020/04/page/6/index.html","346d0dd55623ca5147f7354dc15654e4"],["/archives/2020/04/page/7/index.html","ce01ebe21e6aade938f79213ba0a792c"],["/archives/2020/04/page/8/index.html","fbdb5bcb9095aaf4f48d88e5d08c6de5"],["/archives/2020/05/index.html","6064b37a466f15b034a8f1ab8ab59513"],["/archives/2020/05/page/2/index.html","26e44e6adce3f61650015f80b47c6b94"],["/archives/2020/05/page/3/index.html","cdbf557d31ccb026a8931d273a032df8"],["/archives/2020/05/page/4/index.html","69ea9c7b8df58aa4d635d68037bae267"],["/archives/2020/05/page/5/index.html","acaabe26ec35f92d2c7582993a0465dd"],["/archives/2020/06/index.html","e06b4c3b91132cf9bd07c48401387b51"],["/archives/2020/06/page/2/index.html","712962192b0225858d0c0184a42d4b02"],["/archives/2020/08/index.html","a8c78cd14a5e477289a9e34ac7a3a8e4"],["/archives/2020/09/index.html","a31fb82816192f567fa67f9a1575a190"],["/archives/2020/10/index.html","9257df0d0797ca7b54e17b869eddc5bb"],["/archives/2020/index.html","c1dac4972d09c74eb5bf202791fc9d87"],["/archives/2020/page/10/index.html","9326bb3b43d13675c0dd978c56a5b5fa"],["/archives/2020/page/11/index.html","655c088a7abfcefb2e768beb52a89dbe"],["/archives/2020/page/12/index.html","f86ce684d4722d84349813ac48be918e"],["/archives/2020/page/13/index.html","0aaf71795e307ecff49b1bfe6bd0eff4"],["/archives/2020/page/14/index.html","b960d05cf2b6759cf859bcd09c5e6962"],["/archives/2020/page/15/index.html","026a8598a5cb83db13ebc3e6f1ee29a7"],["/archives/2020/page/2/index.html","8a70423983f38c2495d08492b278a879"],["/archives/2020/page/3/index.html","b0bc36eb98be45614b1c887a569abc70"],["/archives/2020/page/4/index.html","0878b9cbc35ba3b903d8da4a33ee84c5"],["/archives/2020/page/5/index.html","ff6a2d58f42e0ca2e0245000f412f9e5"],["/archives/2020/page/6/index.html","835e5f2f8a4b7bd52583332c91edf9a8"],["/archives/2020/page/7/index.html","20d841247ce3462c6596888c18d1d9fe"],["/archives/2020/page/8/index.html","9085c95825dde8934f6ab6adf999595c"],["/archives/2020/page/9/index.html","b9a02394693eb20bcaa7f8427b85887f"],["/archives/index.html","4c1712d2687ef61e5b6a81c51f89c0fe"],["/archives/page/10/index.html","e1dc112239e848fa94e504696c68cd91"],["/archives/page/11/index.html","65343a16d476f7d2320c6217b2092c47"],["/archives/page/12/index.html","998116ecbdef8f4abbb387b64541c8d2"],["/archives/page/13/index.html","217111d1813d163a0f447a8ff92ba5c1"],["/archives/page/14/index.html","6c6cc725ac8a394b10be7a6161377e1f"],["/archives/page/15/index.html","70aae28ba02c0470151f1151d2ead940"],["/archives/page/2/index.html","a5a125e3241303ea4bd6d4ca444feb6c"],["/archives/page/3/index.html","b0777c03089c1924ae32f294eba66935"],["/archives/page/4/index.html","78567730fe53e544be9eab0e7bdaf956"],["/archives/page/5/index.html","f5908a0d8c4ee4e09c56163a980f1f4d"],["/archives/page/6/index.html","af634a95f099ed7bb6b3ef2077cb8e91"],["/archives/page/7/index.html","dfc5e2b3f92c0b2e93de0d1d17e6cd5c"],["/archives/page/8/index.html","b7f34961602d36c545949d6b5f09df9e"],["/archives/page/9/index.html","5c0f7bc7763768690e764dcba76e64f1"],["/categories/Advanced-Swift/index.html","29002e55c8c9e74b56f19367e0c12b43"],["/categories/Advanced-Swift/page/2/index.html","a6f238dd3ff4f8b61d454c464a72f2c5"],["/categories/App-Architecture/index.html","8e73d6d974acd025a93b30131f3eafff"],["/categories/Codable-protocol/index.html","e0ae24ad2b78f67a727fb052b49e2795"],["/categories/Combine-framework/index.html","120ba0644c115f75355e8e82f04d7436"],["/categories/Combine/index.html","afc68da428721bb236fc3688cc26f42b"],["/categories/Go/index.html","16f895c2a2009a686683d530aa63b0e6"],["/categories/Grand-Central-Dispatch/index.html","1aedd25167363ba0d1016caa86f386ee"],["/categories/Hexo/index.html","9afd9b8e94ba3f951f170c13665c0823"],["/categories/Promises/index.html","a7e6ce6605108552e0624c129319c323"],["/categories/Result-Type/index.html","5fe36b484816e5fd99bbbccbac4d348f"],["/categories/RxSwift/index.html","b40f4045a288b6403fc13646b16abb70"],["/categories/Server/index.html","6f7f4f171f7ab18b2a1e9a97e5f8d04d"],["/categories/Swift-Apprentice/index.html","1a24ca22077862b76c6c42e62ae5c7b4"],["/categories/Swift-Apprentice/page/2/index.html","8645831e9e9b4067b2881db0f0b087c4"],["/categories/Swift-Apprentice/page/3/index.html","eb5b2367735fd1f778af3b8726bb588a"],["/categories/Swift/index.html","4fee5a10c1dc7e0b1869ee8f0bc87a0b"],["/categories/Swift/page/10/index.html","b53487d01cd1a231fc442fe71fb6798f"],["/categories/Swift/page/11/index.html","c4cb2eb442f74339e423afbfcf5b2054"],["/categories/Swift/page/12/index.html","853e9c02a6c73c0de4d8ac337475ecfe"],["/categories/Swift/page/13/index.html","d27f9d70e30cf26f00c2bdd068d89cca"],["/categories/Swift/page/2/index.html","f6075dcff5b591fdadc03841b0a2ef02"],["/categories/Swift/page/3/index.html","fc01dceb50613889302cd0747b95ff85"],["/categories/Swift/page/4/index.html","5aadf2d28235381c6f1cad80fe497b41"],["/categories/Swift/page/5/index.html","a8f91320c5fca286c0fcd3d87ce4405d"],["/categories/Swift/page/6/index.html","dbfb74174bd703a52521c05cd8e4e752"],["/categories/Swift/page/7/index.html","18c8686f747e61f95e99455b57a32e60"],["/categories/Swift/page/8/index.html","51b45cc2a488a85a9a6293c5510e7293"],["/categories/Swift/page/9/index.html","7a890aec6b33545834c80058e83a1cf4"],["/categories/Swift5-2/index.html","87e027d454fceb84a870bc1ef27e6417"],["/categories/SwiftUI/index.html","24934f7325a1992e8a744c4be76248a9"],["/categories/UICollectionView/index.html","56e31f9a4909b9975ae133ae29a1b573"],["/categories/UIImagePickerController/index.html","75cdc9f9b34be48cd64cde941f4a8120"],["/categories/UIKit/index.html","0496c2ab3696c1c2c331f3ef08b1ecbf"],["/categories/UIKit/page/2/index.html","7bd311c22c51d837035cecb434324498"],["/categories/UIKit/page/3/index.html","346542fc56d3a09ac9a3bbb8b5b5e2bb"],["/categories/UIKit/page/4/index.html","792f55409cabed9411c0d3559371fe4c"],["/categories/UIKit/page/5/index.html","d001a96abd65df106e007c7e546406ca"],["/categories/UITableView/index.html","a4e1808e2aaa7c644cf524cc0e45c91e"],["/categories/Ubuntu18-04/index.html","233b1a506f5d3e68f41b2134915e2a9c"],["/categories/Ubuntu软件源/index.html","ba21c72c52f8a167e6b06848be05a97d"],["/categories/Uniquely-identifying-views/index.html","6a44b2bf4b1afb52c82428da11b0bcdf"],["/categories/VIPER/index.html","0d22490aeeb4a6202d61e7823813901b"],["/categories/Vapor-4-0/index.html","9e977e6cf633f945e0ec69a4d970aef6"],["/categories/Vapor4-0/index.html","5e5fb488b3d5fade152d597ade3fdd27"],["/categories/Xcode/index.html","5937dbb5aaa284ba0954bb23ea2e132e"],["/categories/appleOS-Networking/index.html","3471ce02c7333c25c5cb110f7d6c37d4"],["/categories/enum/index.html","dc1918530f41b34856c01c3159243724"],["/categories/git/index.html","2b0ccd5a159ef0ad560723be2ef49ac2"],["/categories/iCloud/index.html","cd76bfd888355e496708d7fab88ae81c"],["/categories/iOS/index.html","c3f00b719ed24fbbbb017966f454f8f4"],["/categories/iOS/page/10/index.html","76fb94418e4b235b1efd05524ea51a11"],["/categories/iOS/page/11/index.html","9f6c5dc0948f348412e121e0c9fc6a5f"],["/categories/iOS/page/12/index.html","9389cc1539eb6228303d2b22bcd119c3"],["/categories/iOS/page/13/index.html","4db324f7db8fefd0e72c3ec9cb0ed11b"],["/categories/iOS/page/2/index.html","c62567ecfdc04e860db80cef78130fc3"],["/categories/iOS/page/3/index.html","dd84aa8ae990365e72aadab8ba391136"],["/categories/iOS/page/4/index.html","b9cfbfc5ff2f7ee5383f97cd0acc847d"],["/categories/iOS/page/5/index.html","255d3d0bf1c757216abfabb89e97ac6b"],["/categories/iOS/page/6/index.html","d1fe0adfed0cc62b82bfc871fc41a28e"],["/categories/iOS/page/7/index.html","8e88abe19b913c33d4dae1924f85910d"],["/categories/iOS/page/8/index.html","a3741988c2d2521c76aa6599f5d22695"],["/categories/iOS/page/9/index.html","f6ea11b1d2973b14c62126a39183e3fb"],["/categories/iOS面试题/index.html","969a65a8b1c02c0eaf28dad88cab7784"],["/categories/index.html","83b746a71175dc40ccef9f245f35fd33"],["/categories/random/index.html","b51f78996004b15951617ea1b391affc"],["/categories/三方类库/index.html","3c5763a8a245380ddd5ecf3a7e6663f9"],["/categories/函数式编程/index.html","407b720520a1919d1d8b948876e22265"],["/categories/子类化样式/index.html","52ddadfa5aa087d61ba49ec4dccfe0d6"],["/categories/开发记录/index.html","54f3476ee250867324e2faffd856ee4d"],["/categories/技术支持/index.html","a84240aca0b6a214d39898719847cd4b"],["/categories/架构设计/index.html","4402f918472cf75dddf98ccc9b7fc518"],["/categories/测试/index.html","0d3db5d47e686c8d1ac61981b027cfef"],["/categories/用户体验/index.html","28106998e4c9ee31011cc25f0cc39b2f"],["/categories/用户协议与隐私政策/index.html","27c8f2fe4a517a9e6c61e1f3cec2c655"],["/categories/设计模式/index.html","10fed4b5f691a7f8dd36a45b9c4d13c2"],["/categories/设计模式/page/2/index.html","fd54f181b0cbaff6e13522b537f7f536"],["/categories/设计模式/page/3/index.html","d7b4ad5cfce0bf8f5d5ad3fe410e9921"],["/css/main.css","0ad45631ad7193319162f51b80085d6f"],["/hello-world/index.html","2e051e40f0fc5d2d08b3edc34b14c127"],["/iOS VIPER架构深入实践/index.html","0414d22e44f7c623e29a0e929bd4b7f5"],["/iOS 自定义视图，输入表单和错误提示/index.html","a2dc2837ec2dd0f06d766ca8e9d94622"],["/iOS如何使用iCloud文档？/index.html","0a07078d9a524b317b19ba84b85a362f"],["/iOS子类化样式/index.html","3592d63838546f7c30d3142f172e3720"],["/iOS开发记录<一>/index.html","46bbf533c8be4e80cf5e1be9b4d01559"],["/iOS自动化布局编程/index.html","cd711ff7065011800919848f14661ae8"],["/iOS自定义转场(By Swift)/index.html","d6cbaedcbc4231ec8d68b7a0b1391ca8"],["/iOS项目架构：使用VIPER/index.html","252031fceef5541dded2b42986151f03"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d92b5e668825c47800011ab593268527"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","a926854b31cc3edef1beb8784e77a4e8"],["/page/11/index.html","e178a53c877cfb3ec84346f2be5d09c2"],["/page/12/index.html","4ed8cfa3f58bb061a9a6e4f668093264"],["/page/13/index.html","86c7ba74cfc008f033d7001a5b60ade2"],["/page/14/index.html","af98b1573c216169e97a6bf20a35226b"],["/page/15/index.html","7d42bb5d6f1dd65d796680e34e583a70"],["/page/2/index.html","0615c7eb9b4fb7c27491b52d8efb794b"],["/page/3/index.html","2d5aaa7e4b65187204c897924354811c"],["/page/4/index.html","d62aff0f65c44aeab322389eaf0e3820"],["/page/5/index.html","be0b6594941b4f9b4269b8ee03a69066"],["/page/6/index.html","6569790cc51738a80afaa0a58fc89cad"],["/page/7/index.html","b1208449c1065887f0516b9864841aa9"],["/page/8/index.html","a32d95d803608ce4315d1b86dfd87d78"],["/page/9/index.html","eaee4a007432864010e84073a9772dc5"],["/schedule/index.html","22daef22f08e87688f39441242c79ccb"],["/storyAppPrivacy/index.html","66ba130d1cd5825672ad0e69d10e6f91"],["/sw-register.js","a59e2c8aa82f8c9ea8413d4ca3bdd25a"],["/tags/Advanced-Classes/index.html","78e1f6c1b7bf31bfb4870e92f748ca2a"],["/tags/Advanced-Swift/index.html","45d21af1d4e3099c19da9aca0e63fd15"],["/tags/Advanced-Swift/page/2/index.html","3d7822ceef5dbd708866427283432a9c"],["/tags/App-Architecture/index.html","56f984b7bb03120e299b660153f91474"],["/tags/Arrays-Dictionaries-Sets/index.html","472c6ba85a8dcc1d8dddd884b1eda30b"],["/tags/Authentication/index.html","e612dd5c9d931243c57121fcc6a81ed2"],["/tags/Build-in-Collections/index.html","f34531dd46afdb7a759d419a1c1e5a27"],["/tags/Building-Your-Own-Types/index.html","5087c211d57ef73dad08bbecb47bfef4"],["/tags/CMS/index.html","0a8a0418992bd004a85a1fa93da40aab"],["/tags/Classes/index.html","4080a5b9c0d3285bfae3f0f5007c0da7"],["/tags/Codable-protocol/index.html","0e702f155591a80f3199e733944c3e81"],["/tags/Collection-Iteration-with-Closures/index.html","4e9d7a1b5280b1a628c9e34cd9c8993b"],["/tags/Collection-Protocols/index.html","1194f9eab00c434697009898e08797ae"],["/tags/Collection-Types/index.html","9a236bf2c2d27e8159a3035e0aba6b2f"],["/tags/Collection/index.html","f88a393fe973ac34aa1bcbde4c226411"],["/tags/Collections/index.html","64588267f04b8596d2d7a821931c4e9a"],["/tags/Combine-framework/index.html","b5b7c17db153f54f158a9c704800da80"],["/tags/Combine/index.html","0f57b868624fa5b14c0ca0476dccbdc9"],["/tags/Dependency-Injection/index.html","4162dc68d767a72d650e939b20ef3bd9"],["/tags/Encoding-Decoding-Types/index.html","73a9aee0a8f1d104f8b495b16e1a78f7"],["/tags/Encoding-and-Decoding/index.html","828b5a116d79047851d890b17b61bb0b"],["/tags/Enumerations/index.html","4a5a59a853e09ba1d8205317db36ead1"],["/tags/Enums/index.html","52a0a7d2ac0b20db8deebb9882b9875a"],["/tags/Error-Handling/index.html","35ffe0a8022e793f1e7837e3bcd41566"],["/tags/Functions/index.html","89a7b42e72a84e29a7465b839035500f"],["/tags/Generics/index.html","301cc81f23f8f03e1b301a9d7e9aa6a3"],["/tags/Go/index.html","8983d695516487e2b39a13194855c771"],["/tags/Grand-Central-Dispatch/index.html","11ab632a30d1704066ca2f077afcde84"],["/tags/Hello-Vapor/index.html","41a590f35f96226785094fd84b1facca"],["/tags/Interoperability/index.html","1d88e6822577611286969cf7c4a183ee"],["/tags/Introduction/index.html","d81d61cdc30a4260f54946ba40f7b470"],["/tags/Leaf/index.html","1a76e043f4be62a445bdf6c928b5da3e"],["/tags/Methods/index.html","020e4eba97896108e4c46acab8c9d057"],["/tags/Modules-And-Hooks/index.html","38cdfd75ff49586faf7c43a3477c38d4"],["/tags/Optionals/index.html","fd345f820a6bec79da12bb36fd90b54c"],["/tags/Promises/index.html","76153d1e8f92255399a2b8bedeb0d30e"],["/tags/Properties/index.html","7dc8d6a2b6f2bdb3ed93d8bcc610a2fc"],["/tags/Protocols/index.html","4a4b208ffad3a0a76b6b32ba5420841f"],["/tags/Result-Type/index.html","9d206d7280191f310935c1733954fc5a"],["/tags/RxSwift/index.html","13699e0f048ad196fe91f70434e0a58f"],["/tags/Server/index.html","9288aa9740ae9ab9f803d991af69c7ef"],["/tags/Session/index.html","d31554bdc3e6b1eef53a3bf3560dcf72"],["/tags/Strings/index.html","43ca4731dd34d595677ae1724bddd594"],["/tags/Structs-and-Classes/index.html","9a77a0580f2f953f436940ea5361ca59"],["/tags/Structures/index.html","288dd690e8b8034e96282b6fe6620332"],["/tags/Swift-5-0/index.html","4656636c86b50b43aaddd9b6a2e09495"],["/tags/Swift-5-0/page/2/index.html","0eed3953929c42565340563f98c76768"],["/tags/Swift-5-0/page/3/index.html","b7f0f538bd407f67fd2355b1ed346f1a"],["/tags/Swift-5-0/page/4/index.html","6a2a0c11c761ae1881746affaddaaddd"],["/tags/Swift-5-0/page/5/index.html","bfe78cbee4f6274716d1289d95880f41"],["/tags/Swift-Apprentice/index.html","294328e1545bdd455d6e507535ba7165"],["/tags/Swift-Apprentice/page/2/index.html","dd3e6e7eed4ee9804557312647ed8ef2"],["/tags/Swift-Apprentice/page/3/index.html","9c97b39f38359388976db6fd05cf2af1"],["/tags/Swift-Package-Manager/index.html","6dd9b1ea1fb6b393e5f7da71cb5c23ce"],["/tags/Swift/index.html","d234644b46b26ed1e7e6a164c01ef17a"],["/tags/Swift/page/10/index.html","f3dbfff1f1111d9f82e94b1a772068b7"],["/tags/Swift/page/11/index.html","c533f2c08b7b21b79022ab99a7b5901e"],["/tags/Swift/page/12/index.html","01ab9bd311c92a58beef5f744d1e4e04"],["/tags/Swift/page/13/index.html","1f463e818355def7e6a54b4f271a49ab"],["/tags/Swift/page/2/index.html","de1abe0be421ec012d3efdbd749cbe38"],["/tags/Swift/page/3/index.html","2b43631f56a0003e3515e1e3281b0c5b"],["/tags/Swift/page/4/index.html","392502a4255405b7737e23ac532c671a"],["/tags/Swift/page/5/index.html","ef652c0d2098186636becb68f7789d5d"],["/tags/Swift/page/6/index.html","0e6a984a73bf65716d0b5aabbf306944"],["/tags/Swift/page/7/index.html","564f59988163fa7b5d98b6c79e75850e"],["/tags/Swift/page/8/index.html","a4498ba2c80fa04edbb9df69c2821093"],["/tags/Swift/page/9/index.html","74e4c4a7a21745071024fd52300d89b5"],["/tags/SwiftUI/index.html","c280616d78b7d53be2b0466dfd192369"],["/tags/UICollectionView/index.html","2626d47d50006f9526f8786e15be0f04"],["/tags/UIColor/index.html","7f050c69d74d948c31ac4df71f06e12d"],["/tags/UIImagePickerController/index.html","c98d040200bde4f5a5babbe453a7e6b6"],["/tags/UIKit/index.html","2f869b6e6c2aff1fddd475f91a2499ce"],["/tags/UIKit/page/2/index.html","f2e0867f994b63d430902042a7a633b5"],["/tags/UIKit/page/3/index.html","44a8cdd79f11939dc5ce61347d9ed390"],["/tags/UIKit/page/4/index.html","61534f576ae0e80c353248df6d5af689"],["/tags/UIKit/page/5/index.html","ecc95816cd71db92d58f1156ef5fbc05"],["/tags/UITableView/index.html","3ee861146ad13c2c915839580882181e"],["/tags/Ubuntu/index.html","4863ace84251185d40bf6c2d0e952f13"],["/tags/Uniquely-identifying-views/index.html","d228ee534244cb208f855a10c1358bb3"],["/tags/VIPER/index.html","b0685a8264d4658f3cf37e127dab6682"],["/tags/VMware/index.html","c9b35a88cc4c1637a49f28d971419ed7"],["/tags/Vapor-4-0/index.html","ef5a08f4c6896cef9808d15f69dda468"],["/tags/Vapor-初探/index.html","2c4f8ea169587a24879f350d87e82f30"],["/tags/Xcode/index.html","e92a05ede28877ccf4473aba3eeba814"],["/tags/appleOS-Networking/index.html","4ebf7342060d1f08a52ff9b909a3ef77"],["/tags/enum/index.html","3646bef8958ae5381c57126820f6e68b"],["/tags/git/index.html","a9b2cbfa2dd373d0f5b914d70325e830"],["/tags/iCloud/index.html","3e5998452f93403bcf922823dcba068f"],["/tags/iOS/index.html","2e53f7bde6da1f0706de3a0774372f85"],["/tags/iOS/page/10/index.html","c1278eb124c35822ce3720c0e755b874"],["/tags/iOS/page/11/index.html","9fc2bd1f4560488d3941ef5b8eff96ca"],["/tags/iOS/page/12/index.html","47d8d372eff4bfcf8125111a5a10e0a6"],["/tags/iOS/page/13/index.html","f2ad2a4fb4d12a5d046b46e8003f5eb4"],["/tags/iOS/page/2/index.html","57a22fbed6907dfc1856f08b9b6666c5"],["/tags/iOS/page/3/index.html","8cb6e94bfb99a9faaf2459e6a243595d"],["/tags/iOS/page/4/index.html","b54752d766eb0b5b3c13f902f17aa768"],["/tags/iOS/page/5/index.html","151f8e2668604fad34a068d37c0d6ac4"],["/tags/iOS/page/6/index.html","b3528ec372d7c5ac314c6e0b9032d7bd"],["/tags/iOS/page/7/index.html","26ff1ccb7542ed8f4c801785a7d1823b"],["/tags/iOS/page/8/index.html","6d50b6dfbdd8a63c3311fb14c1b85cdf"],["/tags/iOS/page/9/index.html","903a326ba13379d65928c9bbb97e514b"],["/tags/iOS面试题/index.html","719d602876449cbfe5fca1b924503c01"],["/tags/index.html","430967c34c8662e5a12bdab1729e1c7d"],["/tags/non-optional/index.html","cf0b7ce800218e08b8fa9e8997144c36"],["/tags/random/index.html","81087ddc3c25d1a90d9aa4fdf3fdebe0"],["/tags/transition/index.html","be78ea3e683c8509fa7b223da0a5dafa"],["/tags/三方类库/index.html","516124d52a35e1e4748a663c00380780"],["/tags/依赖注入设计模式/index.html","be1339df7eba7fdae450a5b70e93ea07"],["/tags/值类型和值语义/index.html","057916a552e27523633cd404d43a4aef"],["/tags/内存管理/index.html","6b37d0b77dc601a4c6269bf09c5e6884"],["/tags/冒烟测试与回归测试/index.html","ca777ced77f53f44d5415bfa81357660"],["/tags/函数式编程/index.html","69370e6bb9e2c08bc08cbc8905ff3987"],["/tags/创建博客数据库/index.html","1f75d3f500a8b17984a900829e3ac69f"],["/tags/初始化模式/index.html","ffee8733ca307c056036730cdcd134a3"],["/tags/单例模式/index.html","a4138678a8bc689114a558c2240dc13e"],["/tags/原型设计模式/index.html","396b0a78b0b9e239eda98dfee2f98167"],["/tags/命令设计模式/index.html","7188a0c2e9fb96b84f987f88ddda1d1b"],["/tags/基本控制流/index.html","cbd79fc3a7569d6a2f8b327e5d9b5fc8"],["/tags/外观设计模式/index.html","e8e3f3da36f43f38d9d419dc09685149"],["/tags/委托设计模式/index.html","aac16f32659bfd2ef993932087ef0bba"],["/tags/子类化样式/index.html","de24a3c892635c8887d7b617e5deec19"],["/tags/对象池设计模式/index.html","b947337f3874aaf5589b33244ba2f788"],["/tags/工厂方法设计模式/index.html","81baeda0f7811abe2c2d23a08b5a0054"],["/tags/工厂模式/index.html","37cd7778f6ef4bdc7f53f529f2c0afce"],["/tags/工厂设计模式/index.html","4cff7eae3e34b96d62d4eac533192930"],["/tags/开发记录/index.html","40c1cb39e747d491daac2db8e21e8020"],["/tags/懒加载模式/index.html","a06db08145e5eab33a194abf06b8cd65"],["/tags/技术支持/index.html","44e99789df8234a58c2e64662a31d53a"],["/tags/抽象工厂设计模式/index.html","7e5c395b1e2b9937878c7018eded3c4c"],["/tags/构造函数/index.html","94b0f3e77b8e5bfb60a237503c283e01"],["/tags/架构设计/index.html","19886dd9007fcae5a4b4e19d29c20b57"],["/tags/模式匹配/index.html","a35a2447151fc237a5919ae3ec490e62"],["/tags/生成器模式/index.html","0ed7e05659f9708c7b48845e8f035c46"],["/tags/用户体验/index.html","625afae65d90398bdcc3b390b619130a"],["/tags/用户协议与隐私政策/index.html","f6d95d1c457f4d009baeb9be723e53c5"],["/tags/类型与操作/index.html","56d0b51408d7262072985d72908c933a"],["/tags/自动化布局/index.html","6d4d6eb5e233dda8b840e3d2a42233af"],["/tags/自定义UIView/index.html","9c9a0bd265d5f5872f5ff34d1943395d"],["/tags/自定义转场/index.html","6dded985efb9fc7690c24b37e185db3f"],["/tags/自适应布局/index.html","05c0d5beaf567323d990419c0b8cca29"],["/tags/表达式、变量和常量/index.html","29e74869952aaa63b58d20745477d848"],["/tags/设计模式/index.html","6ca4e56f3f074b81bf7c6cd84dee82c5"],["/tags/设计模式/page/2/index.html","3c7852583c86c63500ed7412f1f4a8f0"],["/tags/设计模式/page/3/index.html","d880608d9cf119e743f7eafe5b91bf12"],["/tags/访问控制和代码组织/index.html","55508faaaebe2c818d00f7080373da91"],["/tags/运算符，下标和键路径/index.html","528e166f6e6319fc58614cd2d9babe8d"],["/tags/迭代器设计模式/index.html","6a2bf09a818642564723c39c06e3b778"],["/tags/适配器设计模式/index.html","2adfd84cbd014751341de7380ced9229"],["/tags/错误处理/index.html","afcc8c4ab9cd6d375f5e896dad2e415a"],["/tags/静态工厂方法/index.html","0d30045c5004b0746fac1c4c35a911b1"],["/tags/面向协议编程-OOP/index.html","9c342ddabb575fd622b433636711fd42"],["/tags/高级主题/index.html","c80bdb22acad65674257ec092514ec4f"],["/tags/高级协议和泛型/index.html","68ce4ef1a49efbbc6d18f99aaa8b67aa"],["/tags/高级控制流/index.html","2134624112853ba8b6456257d9923fb6"],["/为iOS应用构建输入表单/index.html","c24f0a2f15a24000fd76f7534d94056f"],["/产品开发的幕后花絮/index.html","f1a605bd89a3411cae53a34240293a0b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0037d4df9195edf8a53e2e7852723d6a"],["/冒烟测试与回归测试/index.html","75c1ebae84df58d30b43f295d9784f47"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d186059a8bf43609a28d815d743ed1e5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4e8ea0ccfb3cc8b5ff51a00650447f91"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b13e5959035b19278d635c6f4ba9ce11"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","c4b6e512d4220416dfaf0619868abdd6"],["/在Swift中创建自定义集合/index.html","f1e0b339cbfe05a5a1bb1e5894aef203"],["/在Swift中处理非可选选项/index.html","fe5026b2f0031a90d937b2e836cab7bb"],["/在Swift中生成随机数/index.html","fe8fb5d1128941d5ba95d6fa2c9789a2"],["/在Swift中重构单例模式用法/index.html","7fedf1481f5092e3e79542526af6ad74"],["/天天兼职用户协议与隐私政策/index.html","12da13064704ab4e607a1f456b459ec4"],["/如何为VIPER编写服务？/index.html","aa23d02e7090e5093427e76c4ea360bc"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","260c20b87e9cf0d12493f93d55434aad"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8327dceb25b86d25fddc5f550c298a37"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5ff2dbff44cb54ed0c7cbfcd3556c0bf"],["/如何使用VIPER构建SwiftUI Apps？/index.html","84c7057720d105f9bc441303e69e08b9"],["/掌握VIPER架构/index.html","ef340fb4e0afa9e8f4a7b48f70194694"],["/揭秘 WordPress Hook 系统/index.html","b6d2b27d3f970f9aa71992da93f5a39d"],["/比较工厂设计模式/index.html","8b3575cda7974e7fd00eb8259e7e5c6f"],["/深入了解Swift中的Grand Central Dispatch/index.html","779287a50a8a4b9c0523c3557dbae446"],["/深入研究Swift框架/index.html","a35d430b6a2647cfcc26017bdd437c49"],["/美豫直聘技术支持/index.html","60c66def8ec5f4d19b095b87fcef4bed"],["/美豫直聘用户协议与隐私政策/index.html","d35ec771ab6b3057c677186f840791ca"],["/适用于iOS开发人员的VIPER最佳实践/index.html","628d9760dc66b22bed25f7dde798b2c8"],["/选择Swift而不是Objective-C的5个理由/index.html","a5d2307c31ffe02cf0434e6b15b82d3d"]];
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
