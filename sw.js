/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","a8f1f393a5f6cd3e3ba91085ee653add"],["/2020年iOS面试题总结(三)/index.html","520e5e8f16468ce1902c3d67f79ee048"],["/2020年iOS面试题总结(二)/index.html","ea3393f67b715ae29f1075ae860c6979"],["/Advanced Swift系列(一): Swift 简介/index.html","ba108fce5c4c8dfb9f4892fbed8c8c8c"],["/Advanced Swift系列(七): Strings/index.html","f7c8d5a7dcaaf4c131c0b13fe77794d7"],["/Advanced Swift系列(三):  Optionals/index.html","00701c1357cb6a0facfa381641245abd"],["/Advanced Swift系列(九): Protocols/index.html","1eaba32176cc1c1ab717d1952fe682b6"],["/Advanced Swift系列(二): Build-in Collections/index.html","148c1b89377d497bae37bda4e9184e9b"],["/Advanced Swift系列(五): Structs and Classes/index.html","b93cb4e2782e343649fbe255c277da63"],["/Advanced Swift系列(八): Generics/index.html","a83560a1e46e2cb13c18223a113173b1"],["/Advanced Swift系列(六):  Enums/index.html","59d6e765e9a0166aa3522f97646544c9"],["/Advanced Swift系列(十): Collection Protocols/index.html","fdb2317545de78f0c53c6ad935c67ae6"],["/Advanced Swift系列(十一): Error Handling/index.html","56c67065d9e04c4d7a52c9c487963801"],["/Advanced Swift系列(十三): Interoperability/index.html","7b171980522a9fcbdcdf921ccae4d874"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a79b2bf300ba9abba078bab6e5958941"],["/Advanced Swift系列(四):  Functions/index.html","6a628d13f26b3a40fdd5278fb580e44b"],["/App Architecture系列(一):  简介/index.html","7cd22db4b992100b6ba4cc52d5958945"],["/Functional Swift 初探/index.html","bd8f65e87c76fce52887ca19e19eceef"],["/NSCODER和SWIFT初始化/index.html","1374bacefb7fa52a3adb0132d3ade516"],["/Swift 5使用UIImagePickerController拾取图像/index.html","463e3316a56bed612660128e2afc9778"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","2591c29bdcb13c82a0f0246b11c652e3"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3155d2df6c9b241a294a26ec7fc6afe6"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","07c5339ddb40cc5734aa2d5a8809bdcb"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c6c313a22bd79bf3ca7c7aef86f007ab"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5f103f88d55a4cb1f638c4a509cc65d8"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1b6176a1eac0ec11bdc2d36a4fd46ab1"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c30d47fd4c7d8587aa55907f6b118a8f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","b897f457a2924d602167bd38c0ff479e"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b705a94913dd3ef061281696e73dc3c7"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","8b42e93f85243b04d726e356280a7aef"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","cde45d6c7fce8cc42a1fa8435e1a3dbf"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","47cb89d980a8de63c27ba1d8d013d3cb"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","93be2dd633a02865c99413fd71bb7e5d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","fe1ac8343185fa1700d05885fffafb1a"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","d24d5453a0a97c4b56db3823cb33a9f9"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","7a08d088f460439355f94cbf9ebd4806"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","16582b574aedf6b3e5c892dd17782b57"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9055d6b5a82ad98e44103014dfe1ed9b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","168edd8ffce791a914a820da8efaccb2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","154345a76545ffb00091fda0e5ce85de"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e85cb78fe41c4f7c8a2f7a0b3eed4cf5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2083bd5720dc15c78e0478a9e344a43f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b6568608a85583b76f3f73f8965e4496"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a500b55b049094a57bc0ada59f5afad3"],["/Swift CompactMap vs flatMap：差异说明/index.html","fcffc343d8872ab8a4e6d778749c5a2c"],["/Swift Grand Central Dispatch 深入实践/index.html","0d1381e7923cd033922515bc0bb8a7f7"],["/Swift Lazy属性初始化/index.html","d1fa77415792d2c8dc44c4c65601c586"],["/Swift Promises 初体验/index.html","e3dde7c2fc4a63273a014983d6a8953e"],["/Swift Promises 探究/index.html","8891d333a2d0bc949f3780dcf109bea3"],["/Swift UICollectionView使用指南/index.html","8d51c65dcb9d60acb72d9c16b0fa1fa3"],["/Swift URLSession 和 Combine framework/index.html","051fb75a09c66f41ef8ee6444ac571e8"],["/Swift 唯一识别的视图/index.html","19beecda688ca7a6401a4f5dddfb8312"],["/Swift 如何学习现代UIKit？/index.html","24bb35c1818e473697fcfc9601140297"],["/Swift 用 compactMap 替换 flatMap/index.html","21856d406a28ccc00d6a54a000e0782d"],["/Swift 选择和播放视频/index.html","7810a82aca3200c0cf4c000841f7f145"],["/Swift中UIColor最佳实践/index.html","1c0287f0535198559d98b50bc1740970"],["/Swift中快速简单的工厂设计模式/index.html","f402b85951df2bd100d62de539ce19e1"],["/Swift中构造函数与静态工厂方法的比较/index.html","e814d44f179a8d18e69e4fa8e12a5109"],["/Swift中的UITableView教程/index.html","5e1fecc54785e05e136e79ee375a94ef"],["/Swift中的懒加载模式/index.html","a64de676bab1eecb75a5afa459eacecb"],["/Swift中的模块和挂钩/index.html","3421b3b1a1a27a02baf06f5358527af1"],["/Swift使用布局锚点添加约束/index.html","f1e2d5b4d382b70bb08989fca0d7556f"],["/Swift依赖注入设计模式/index.html","d5af6082a443c99c26503d31c569e051"],["/Swift关于Dependency Injection (DI)/index.html","885255531aabb329c1e6c14953eaad35"],["/Swift初始化模式/index.html","0753f1ccf20bf4f226bdda2c69b967cb"],["/Swift单例模式/index.html","ef2ab408d94929297c8732a91ec6ad2e"],["/Swift原型设计模式/index.html","f4d03abe89bd77045514a9b6481a9137"],["/Swift命令设计模式/index.html","e5d69669efd2f4e56143882122ebd3e6"],["/Swift外观设计模式/index.html","96da620afe35923f89591ccfd97b43a9"],["/Swift委托设计模式/index.html","da168a7d84e4f4f3563ad33687128537"],["/Swift对象池设计模式/index.html","6b4e128ad978dee2cc3fbf04a4d1a485"],["/Swift工厂方法设计模式/index.html","4ed35e2be9d6309b3a00375e0db47215"],["/Swift带闭包的懒惰初始化/index.html","a5ad3d47e96a1615fadb0ef40f12ae0b"],["/Swift抽象工厂设计模式/index.html","9061891875a173ba81a04241e474ea17"],["/Swift掌握iOS自动布局锚点/index.html","cb6f0424a43135e4d8aa46dbdbdb52e6"],["/Swift支持旋转的自适应单元格/index.html","611b373a39aef46566f7d20a6e88aad8"],["/Swift枚举值/index.html","d79a4d5fcb4662fdd5caa81706ad1cff"],["/Swift生成器模式/index.html","cd0ebb001c514155ebe7241c4a02b78c"],["/Swift结合Xib文件自定义UIView/index.html","fd7d77e383b929c773f2f12199a2631b"],["/Swift编写的20个iOS库(一)/index.html","7ab52074f2c02200969ac0faa4ab2c84"],["/Swift迭代器设计模式/index.html","16fba52a57079068c87528c9543a7996"],["/Swift适配器设计模式/index.html","966f8fe38d88541f9ab531828ff30a7f"],["/Swift静态工厂设计模式/index.html","6d5916ad7a52b1c8a529821a30d16e9d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6094b3a6ddda651a86163db4e0dd705d"],["/UICollectionView data source and delegates/index.html","b810c93da6fe7af252242136ab5c0de4"],["/UIKit初始化模式/index.html","045ff2c16695ec1e127bd4dfad171a00"],["/Ubuntu18.04替换国内源/index.html","6c5799bd4b9c4f65a9b568d5f3c0b7ba"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f2e69056b40e8de8319b59b8bcc21bd7"],["/Xcode扩展/index.html","65b180a5e52d583f60a87b3b4c433213"],["/about/index.html","ac9054fd58b6bad7f8e1ecf62f3fe048"],["/appleOS的Networking示例/index.html","f6abdf6f47a88d6b785f70980762cdfd"],["/archives/2020/04/index.html","101e760deae435859db4097865df4097"],["/archives/2020/04/page/2/index.html","d9b3b07bd1856a4b3d0607d6877c1e7b"],["/archives/2020/04/page/3/index.html","295096d64bf94045de96255e4cdfa9f6"],["/archives/2020/04/page/4/index.html","94d196fa230efb0e94629f4b54cd84cd"],["/archives/2020/04/page/5/index.html","629bec4ca59b3b8d6a0476c9f7825d4b"],["/archives/2020/04/page/6/index.html","4a9a7b783b17bd25d9446cfbb0cedf3b"],["/archives/2020/04/page/7/index.html","914ddf994766ca6b7cf5ea6c4bf9c9d3"],["/archives/2020/04/page/8/index.html","e250ee951700b3ab2d7806a59dcc7ce2"],["/archives/2020/05/index.html","31dead9bf0e49d95b92132daa9894bde"],["/archives/2020/05/page/2/index.html","cb03fddd2dff859443accfdb24fd5554"],["/archives/2020/05/page/3/index.html","17fc733669e3cdf260b14a17d1243033"],["/archives/2020/05/page/4/index.html","d9a272d832947b0647a32e76172a5edb"],["/archives/2020/05/page/5/index.html","35e8d076e47d342e5d0ac14abb36e82a"],["/archives/2020/06/index.html","b1d52e8babc20bc679097cb95f320dc9"],["/archives/2020/index.html","ea0c0a99dbf911589f6ddec91ef35a8c"],["/archives/2020/page/10/index.html","7700e14e6affaad1be49792ea70edce4"],["/archives/2020/page/11/index.html","51a92672f843f8c1fdd0e871d7bb98fd"],["/archives/2020/page/12/index.html","b17836496e2e85ba3252e93ea5ff9f36"],["/archives/2020/page/13/index.html","c093eb64c0678fc501440d10f9ba9720"],["/archives/2020/page/2/index.html","55d2f79109f50b4862f461188739f511"],["/archives/2020/page/3/index.html","7453ec2d280a28c938b7a98661036bab"],["/archives/2020/page/4/index.html","96eae085bc6d71687d6c21e99b91f676"],["/archives/2020/page/5/index.html","0a1b048ac0300220ad75086106960005"],["/archives/2020/page/6/index.html","87d56ff114d5b81842ea4b6c73ded47f"],["/archives/2020/page/7/index.html","311337a2d3fe237c55acbbcd1d0a0848"],["/archives/2020/page/8/index.html","3e7c932fb16fb24d9d7014225a034db6"],["/archives/2020/page/9/index.html","17d69855e584e95709f14526fbee9b58"],["/archives/index.html","21222a61d2e4bfe80d724c32be062933"],["/archives/page/10/index.html","76d3315409558f454f1251e8c1acea18"],["/archives/page/11/index.html","611b263c2407e99ab457037e4cdf435c"],["/archives/page/12/index.html","71b8c83669ecd7c6f4651c452916c736"],["/archives/page/13/index.html","2eadc65c47625f8180a0d336f92e38a6"],["/archives/page/2/index.html","c31acbda7ef5959a6c547f7917f80efe"],["/archives/page/3/index.html","0ae4de8f0057a27c3e6adc1e4a032c16"],["/archives/page/4/index.html","14a41d05ec4bd0722e46dde6a38fbefc"],["/archives/page/5/index.html","05a33c13400f4703425111dfd1a60c58"],["/archives/page/6/index.html","fa77ee7e64c4cefe27867f357bd3da4d"],["/archives/page/7/index.html","5a780af98590be7125265291b8316201"],["/archives/page/8/index.html","b5c05edb0c5e7b84824a28323c2ec35d"],["/archives/page/9/index.html","783b9b46df43b5b0e052f6e146a706b4"],["/categories/Advanced-Swift/index.html","1040d37ea5a91a3e1ccb9280214e11e9"],["/categories/Advanced-Swift/page/2/index.html","2004d8133c560b6f8b88a2a021d9d588"],["/categories/App-Architecture/index.html","326cb888a5ca70f549832f2d032602fa"],["/categories/Codable-protocol/index.html","594af880e64fc3551bb965c2b6a2fc49"],["/categories/Combine-framework/index.html","0bc90fcab8a034394823fe6f6eb5f141"],["/categories/Combine/index.html","e249d0771b480839818c8d6d657186d3"],["/categories/Grand-Central-Dispatch/index.html","0e50bf541bbdb222bef3260b7b8ae50e"],["/categories/Hexo/index.html","bbb61dfc91be1c60715252eae4471a2a"],["/categories/Promises/index.html","3f68f191c659c38a16252dd813efed24"],["/categories/Result-Type/index.html","766a1dac23ddfbd8924efa8c664563df"],["/categories/Server/index.html","96a11ed757aca76fd40c958db31facbb"],["/categories/Swift-Apprentice/index.html","53ca17f0ccf3f1d1c9eed1af25acdc4d"],["/categories/Swift-Apprentice/page/2/index.html","f4e37cea28f09ce4ddf5abbe91ac2040"],["/categories/Swift-Apprentice/page/3/index.html","a6d099199f4996a1d53ba747a7e2566c"],["/categories/Swift/index.html","885a7fb4cb2febffdac588ca8b89371a"],["/categories/Swift/page/10/index.html","d2e81b6c82a9eed9cd712e633587badb"],["/categories/Swift/page/11/index.html","2cf9fbf3e6bad014233cac24f318d4f6"],["/categories/Swift/page/12/index.html","5d2e37ea6f71ecfc7751ebf4657b27c6"],["/categories/Swift/page/2/index.html","4b42750b9c885c1fc12ecbea60c537b5"],["/categories/Swift/page/3/index.html","a4f5e87cdd8a01e827a592596afce437"],["/categories/Swift/page/4/index.html","1b8878b20e8b7904d98517360b471ffa"],["/categories/Swift/page/5/index.html","6bdf93421cfbc2e5a41be7d7b48d7705"],["/categories/Swift/page/6/index.html","299291f70c993dbd39b761070a0c76fd"],["/categories/Swift/page/7/index.html","89e7049c25d0a3f2c4c0fa158ed7f6e5"],["/categories/Swift/page/8/index.html","3acf8d426f06b8d352d277fa00cfabae"],["/categories/Swift/page/9/index.html","15b31d07b50f3f124b0dc060fcd35354"],["/categories/Swift5-2/index.html","1104d61d4e3ca698556db3f8d440ca7d"],["/categories/SwiftUI/index.html","dde35d320f6535f5cde567ca4e05cc47"],["/categories/UICollectionView/index.html","53bf33d376a6351f251040d7d75d2f05"],["/categories/UIImagePickerController/index.html","703beff8c0fc2df4e05e5582140429b2"],["/categories/UIKit/index.html","b0522862b7bf4689a5c780143bad92f6"],["/categories/UIKit/page/2/index.html","ca08746f93ee35364c524814ec14c6cb"],["/categories/UIKit/page/3/index.html","ce2ab98715f82917aee7101fa287140a"],["/categories/UIKit/page/4/index.html","e37ee820ac547cbbf49b946faab6f59a"],["/categories/UIKit/page/5/index.html","9a3e5646c666197d6c67a2cd743df515"],["/categories/UITableView/index.html","9e24667924a44ca07225cba972dba366"],["/categories/Ubuntu18-04/index.html","1730e0a16eac47a846231d8760718e04"],["/categories/Ubuntu软件源/index.html","215dfd119e00619e65061dc96c219c72"],["/categories/Uniquely-identifying-views/index.html","bd15d211533830dc18eb47cab82d770b"],["/categories/VIPER/index.html","c514576a9bc0cda52963db4054ebba5c"],["/categories/Vapor4-0/index.html","f0c9bcc7d8f895baac56553941a9f325"],["/categories/Xcode/index.html","77ed71060011b8bf30424198a8138f59"],["/categories/appleOS-Networking/index.html","6619787a4bcd023275a0638d35b75981"],["/categories/enum/index.html","abf226f1382fce6f796147cfbde89619"],["/categories/iCloud/index.html","a6f881edcf6f3a544c6bb7af86d60fb0"],["/categories/iOS/index.html","2af092c12390bc2407e5f5d87d7d76e5"],["/categories/iOS/page/10/index.html","95e887ca0095f3e77999ad2aa00e551f"],["/categories/iOS/page/11/index.html","5c62c90699de9deed858e55f1b9a171a"],["/categories/iOS/page/12/index.html","bb693e84c28bd765111c0668cab5fffe"],["/categories/iOS/page/2/index.html","599af6f41bdd668aa2a2cfd666214a55"],["/categories/iOS/page/3/index.html","1172d794aa79a4b6b6763baca4461d75"],["/categories/iOS/page/4/index.html","8e8974d1170af452adf95d0a1187a57b"],["/categories/iOS/page/5/index.html","41b776663c49e99e70dffac6f4fd0286"],["/categories/iOS/page/6/index.html","9fc44964d9554967e14d7627aa570a9a"],["/categories/iOS/page/7/index.html","bcee29ed7d6e5e7e5a0774789087e85e"],["/categories/iOS/page/8/index.html","9dfa8b517f8bbc8048011cebd824e082"],["/categories/iOS/page/9/index.html","39904f219eecf901614a574352f92ef7"],["/categories/iOS面试题/index.html","77dbebef14616d82372ad283da8df7ff"],["/categories/index.html","b4da474b3ca0c12fab3a387c7a9f9b3a"],["/categories/random/index.html","6cd52b6bf3ef4b32476714c0b7336eab"],["/categories/三方类库/index.html","5ef20810e1d60198b9e49b3e021f8bd9"],["/categories/函数式编程/index.html","4f9f787f66b6e698e9d1adc74575c665"],["/categories/子类化样式/index.html","9596ab94121cbecabba19dcc03ae6a4c"],["/categories/架构设计/index.html","bddf6c796f700d2a5fcdb05bf0032651"],["/categories/用户体验/index.html","026e8ed2f55797b585315b142ed89fcc"],["/categories/设计模式/index.html","0b3d142f79f203f1a95a1e01a83a916b"],["/categories/设计模式/page/2/index.html","9078c30c9a025f5ee6be2bebe7502d6b"],["/categories/设计模式/page/3/index.html","a263c016511143f01e21c35be2a8722b"],["/css/main.css","f508d46ecfe576995907f1966b66a24f"],["/hello-world/index.html","61f937b271965e3692aba2b5539be9c0"],["/iOS VIPER架构深入实践/index.html","a42526e31c5502e7978bb1fa2f773886"],["/iOS 自定义视图，输入表单和错误提示/index.html","2708914d5f8694a8cf666fd92f5fcc9c"],["/iOS如何使用iCloud文档？/index.html","97c0844ce99cc59953ec00f7067dd387"],["/iOS子类化样式/index.html","c8f31d38ced6cfa3c228625a742942ab"],["/iOS自动化布局编程/index.html","505ab4db4a9a220ea006ed3f710f0993"],["/iOS自定义转场(By Swift)/index.html","c333e0abbc2b6d388f68a1cd3f27a4c9"],["/iOS项目架构：使用VIPER/index.html","faaab774785a4f7a9156fb2fad7e20d5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8e8d447776ae7ffced8bc410400a3d33"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","3568bde9f94f39592a72dee65ce407e2"],["/page/11/index.html","0146887f85ce66c1ec26df2948117a69"],["/page/12/index.html","aa83458b61e5c25f12793005c435b1b1"],["/page/13/index.html","51944938a80bb2da2d1fa07141fbf305"],["/page/2/index.html","3103f8b494afbac235ea7685b6f7a08b"],["/page/3/index.html","021150e9f5f29d5d4398d86ea8ceb04e"],["/page/4/index.html","1e95621996725c15dde6d69a54b06bf0"],["/page/5/index.html","557e05781c9144a1cc4b7b70dbe329b3"],["/page/6/index.html","b2417ccb04804447d99542ad8b872cac"],["/page/7/index.html","a941cd8fa23a04656771f0e919fd2eca"],["/page/8/index.html","8937cd488c17184a54bf6b79c3f3f086"],["/page/9/index.html","9b188817adece5b1f6828db58a7cfe27"],["/schedule/index.html","ed0f98b88e1b8c3f0e2c10ddbe258201"],["/sw-register.js","6bb699ce705acb751fa014b1f8a42f44"],["/tags/Advanced-Classes/index.html","6f6091cbbe06448528c04cd9cd48b11d"],["/tags/Advanced-Swift/index.html","7bd56a26c782987267fe4cf61d45bdf5"],["/tags/Advanced-Swift/page/2/index.html","f871b47b9babd079600c2f67c5c2881b"],["/tags/App-Architecture/index.html","4b4ff4444c3623bc4924a0810f325fbc"],["/tags/Arrays-Dictionaries-Sets/index.html","ce717610b392bc44d5535b47e71abb25"],["/tags/Build-in-Collections/index.html","d707525743e0565e8b0459529513b040"],["/tags/Building-Your-Own-Types/index.html","9a6814e22450a3cfbf6d774e53a2daf9"],["/tags/Classes/index.html","22acdec8bd53e773a799cbfd89cd8f9e"],["/tags/Codable-protocol/index.html","b2119c6649c15e70c64c3f989602e356"],["/tags/Collection-Iteration-with-Closures/index.html","4a1a519ca2a2c8af87f0cded64450495"],["/tags/Collection-Protocols/index.html","53f10a705abf0e0a48b1f0fd9482297b"],["/tags/Collection-Types/index.html","2fb2d9937bd647bfdb1db421b6299dd3"],["/tags/Collection/index.html","982e194398cc733080344bf20a00fbdb"],["/tags/Collections/index.html","a563e2efafc986fe07d8799743005b41"],["/tags/Combine-framework/index.html","c72f033c3b98b2e347d4a11042de63ed"],["/tags/Combine/index.html","3494800254ee439f12ad9986a7b01a6d"],["/tags/Dependency-Injection/index.html","680db1e1680cb041fb2c103792e59b00"],["/tags/Encoding-and-Decoding/index.html","9f51c79fa83191d3467023d34a87869f"],["/tags/Enumerations/index.html","a564e1fad9c1aa40c2a18798d6dfc12e"],["/tags/Enums/index.html","0abdd05c00ebda4b44b6eccfbd220124"],["/tags/Error-Handling/index.html","490188d57333e6912aef9c5e3e1f410c"],["/tags/Functions/index.html","77494dc3122dbdc5fa3e7c5d2e76bf4b"],["/tags/Generics/index.html","0a36a6f2759ae4cedc13a5c2516eab0c"],["/tags/Grand-Central-Dispatch/index.html","297b8742708a8d335e09a0da71c55acb"],["/tags/Interoperability/index.html","9e2c426b9524c5f14cf0f3fafe99673c"],["/tags/Introduction/index.html","1212094012887a098eeead98f0960d29"],["/tags/Methods/index.html","ff2ba5e40f710ca0ade1af0972f0634b"],["/tags/Modules-And-Hooks/index.html","eccdd0fe48a24613bb8d74d28b88f437"],["/tags/Optionals/index.html","ba000445e25e39c329c192f76f8eb63a"],["/tags/Promises/index.html","6862ec7c5a16063a735f44bf09ad0737"],["/tags/Properties/index.html","7fd44c1a543ab0f8c93ca875d0198dd1"],["/tags/Protocols/index.html","17fc31f08bf4e731edb4401870dfe99c"],["/tags/Result-Type/index.html","34f621223378d2b86163b9056bc8f1a9"],["/tags/Server/index.html","e05ecaa17813efcf7e7a330e939f7fe5"],["/tags/Strings/index.html","000610b7b587f5e67e8101505b9d7788"],["/tags/Structs-and-Classes/index.html","f41a1ea3d4739254d1f5e80a7ac625b9"],["/tags/Structures/index.html","7a1729132f3c5b835a4bc43b9770a4a1"],["/tags/Swift-5-0/index.html","dedf2fd1d831cb3860bf7abd688ee3b2"],["/tags/Swift-5-0/page/2/index.html","edc323e971161d07f48b94766c3e8609"],["/tags/Swift-5-0/page/3/index.html","6cff632b555b7e34fb1b9f4968bba2bd"],["/tags/Swift-5-0/page/4/index.html","d1d2e66f1c253f5c3c8f1bacf7890d43"],["/tags/Swift-Apprentice/index.html","a61707c6aef8aeb618166073a43ad918"],["/tags/Swift-Apprentice/page/2/index.html","d9d6d017ff6a5d58261b92362c2e8078"],["/tags/Swift-Apprentice/page/3/index.html","b02d043ee3f855d9ebf21385df014844"],["/tags/Swift-Package-Manager/index.html","8719109a67c42d46c9b98d50c3a0c7bf"],["/tags/Swift/index.html","86c91e23fdf90dd0b9cb444dcb5da908"],["/tags/Swift/page/10/index.html","b51c935e057fd9f248c056e29fff72b5"],["/tags/Swift/page/11/index.html","f82528349bcc0f8f519e8ecf27b88062"],["/tags/Swift/page/12/index.html","927faaa04739cc52acb14cc05b50ee16"],["/tags/Swift/page/2/index.html","1727711f6e44b88c7da5b5f0dac3dae9"],["/tags/Swift/page/3/index.html","b31365d677949c5d02279911421ad2c7"],["/tags/Swift/page/4/index.html","feb3d2475a26b4fdd11fbcefb04eadc9"],["/tags/Swift/page/5/index.html","75c9b81485bac7902bb71dc0419c9992"],["/tags/Swift/page/6/index.html","8b73e8aa2414745aec06449d5259fb7b"],["/tags/Swift/page/7/index.html","b12b5d220b83ebe809c5b84dbd3b7bac"],["/tags/Swift/page/8/index.html","f5b2533661893065129a862ba32ea785"],["/tags/Swift/page/9/index.html","cc7a470352754939893ef9bdf863ad21"],["/tags/SwiftUI/index.html","46008878be35407ae871e4a2429c6a9c"],["/tags/UICollectionView/index.html","be7d8e0aeb758ae4d51e61cbf757752a"],["/tags/UIColor/index.html","be7da22f65a6ef38d5b599219258a9a2"],["/tags/UIImagePickerController/index.html","7cd14395762bc3c9821d9ce2d8149247"],["/tags/UIKit/index.html","64a3d0e57f9712d6ca7891466c0164bf"],["/tags/UIKit/page/2/index.html","cec8f25b922feb6ee7f24b7ef5acb5ca"],["/tags/UIKit/page/3/index.html","a24c1121cb1e7892ece95392a565239f"],["/tags/UIKit/page/4/index.html","eb7a79f0c1edebfae46a3d77ea8b4cf4"],["/tags/UIKit/page/5/index.html","a101727998f647b9333c8f363a38c72a"],["/tags/UITableView/index.html","42cd75785c22ef95b545facdfb492780"],["/tags/Ubuntu/index.html","08d68da746c634d5c2cad7240c16fb66"],["/tags/Uniquely-identifying-views/index.html","d9469a686e00c3acd62f130fdec7b8e3"],["/tags/VIPER/index.html","93256e4f33b52f712d5023361760aefc"],["/tags/VMware/index.html","0112b05c82eeb7da895b04e9e7d21a65"],["/tags/Xcode/index.html","f1c3e35079a7a0e1524078eaf838d906"],["/tags/appleOS-Networking/index.html","c1deb28aef36527dc432e8cfe716a3db"],["/tags/enum/index.html","4b48b561cfab129ce192930452e2b7c5"],["/tags/iCloud/index.html","8c56b514cf58015640bf73a7340b1c44"],["/tags/iOS/index.html","e97f27fd4e187f1483827830fd38d7f8"],["/tags/iOS/page/10/index.html","d5f0e205521a26c446b9a8c0355f0bbb"],["/tags/iOS/page/11/index.html","af1ba3f954c10745ea77954a989c46ba"],["/tags/iOS/page/12/index.html","7477e416d4f2345e77f54b551f11a030"],["/tags/iOS/page/2/index.html","35b205662560df189c18b21484d50d6a"],["/tags/iOS/page/3/index.html","d688c46dc8c4b3862f28f2855114b19a"],["/tags/iOS/page/4/index.html","775a6e4fefcc2d58873166fecb508fe0"],["/tags/iOS/page/5/index.html","fc6a5f222dc77de1aafc42c6f62d6b2b"],["/tags/iOS/page/6/index.html","5df3bb34ed8ebf93dcdcf55309a3c471"],["/tags/iOS/page/7/index.html","9529c0c24fd0bb93f33d49673f13e3c9"],["/tags/iOS/page/8/index.html","77a2bfbc232873fbfd7fab452e223e92"],["/tags/iOS/page/9/index.html","5f6e2d1262d89967373fe68bada46295"],["/tags/iOS面试题/index.html","abb7b9f13a625ce46b6ddf5384603be8"],["/tags/index.html","80aafc5e316af856c6d5bc03d25d370e"],["/tags/non-optional/index.html","c4f0f4742addfdb2e7f519f28f8863a4"],["/tags/random/index.html","402062f67795db9257fc9caf41f757f0"],["/tags/transition/index.html","7a8ae7e717febb22091e7951763d919b"],["/tags/三方类库/index.html","0c8fea372a8f4680b093771c6eeb927e"],["/tags/依赖注入设计模式/index.html","5e1656fcd7f017302639a734785fb3df"],["/tags/函数式编程/index.html","1a113fb3a0d9454035555181af3764c9"],["/tags/初始化模式/index.html","3423af047df500868a43cb64befe77d2"],["/tags/单例模式/index.html","88c3d8ad1d0182b40fa75f72018a973d"],["/tags/原型设计模式/index.html","2579df1859eb3f22ed346b3c737fe817"],["/tags/命令设计模式/index.html","cd596614207e2b61089274661bd33b9e"],["/tags/基本控制流/index.html","39fba78d8be4a64a9f19b7e77164000c"],["/tags/外观设计模式/index.html","d0e5838277c7f94764c45d53bc8aa122"],["/tags/委托设计模式/index.html","635fa4221ccf3715dedc6ce23d0cc655"],["/tags/子类化样式/index.html","d218956bc043e2dad2d5840b7132161b"],["/tags/对象池设计模式/index.html","7aae73fb0243ef91b0cd3ef271494066"],["/tags/工厂方法设计模式/index.html","cb492f9f73d35f9af049b1741b997129"],["/tags/工厂模式/index.html","2cfb66ad8a4af9f558599dd1871c713f"],["/tags/工厂设计模式/index.html","9df3d7465faae45d299b83c74cdb67c8"],["/tags/懒加载模式/index.html","5ff82ebb94c314c804aaf6682a5a5379"],["/tags/抽象工厂设计模式/index.html","ebbefaaed5c20c9765e02414967cbb5f"],["/tags/构造函数/index.html","43bb57eb19062c0e6a14a7928c5b7eaa"],["/tags/架构设计/index.html","7fa0fcb8e09e0082ba743d96153dba5e"],["/tags/模式匹配/index.html","ffe3691c469e4a725d4344e2acb05da6"],["/tags/生成器模式/index.html","b149bb103ba5c03e26d2a2a5ef71b173"],["/tags/用户体验/index.html","d8516c8475bb9de3538d5fbaf502552d"],["/tags/类型与操作/index.html","560a658a86544bbe8dfd9ef2616295ff"],["/tags/自动化布局/index.html","07147482b627b75ae0220dec708f8817"],["/tags/自定义UIView/index.html","7bdbdb0ea2036b4377232b2ca99f2b3d"],["/tags/自定义转场/index.html","e79f049d40163723b1768d0dcf2c492f"],["/tags/自适应布局/index.html","5360d81fc7a7ba2aec9c4504e5c30fdb"],["/tags/表达式、变量和常量/index.html","62987526095e8d623c33ef2c24f8467e"],["/tags/设计模式/index.html","5c7ce5023f724695166338ef7b5d03d8"],["/tags/设计模式/page/2/index.html","92ae5129e4056e956485081b1ca9e54b"],["/tags/设计模式/page/3/index.html","8527bff81a7f21f17dbda6296c86c004"],["/tags/访问控制和代码组织/index.html","9abe0cb4a54ded15ec5c03c2e7d8076b"],["/tags/运算符，下标和键路径/index.html","6a56541d57786403d212d7eecdad0f22"],["/tags/迭代器设计模式/index.html","3c79820e996da967651d95bcb3aabf37"],["/tags/适配器设计模式/index.html","659ba223ba88622b0c418c906d22a2d5"],["/tags/错误处理/index.html","e94d463e981c462eae5399b1a8b25047"],["/tags/静态工厂方法/index.html","c80ab78b2ab751476390d9e838fa4c59"],["/tags/高级主题/index.html","7e2d689fb2fb9bbbdb7d025025ff8376"],["/tags/高级控制流/index.html","f9ffcff1e76add62370015ca400df099"],["/为iOS应用构建输入表单/index.html","61ce031249d748bf402975c89db47023"],["/产品开发的幕后花絮/index.html","f97cb65b7338fae38fcb9674b9dd33dc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","98343093ff2483813802f7d1958588a3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","37ce86aec9301a1209366ad68f07002d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","133dd6e18d0d5dedecab895fdb8e95f6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","687222cf1a2b4b541f25dedd7fc2f5f5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","33521fa6cf7bc7b79a8366b59c25cba2"],["/在Swift中创建自定义集合/index.html","a027dc4a0ee1a0b33acdf45a8ccecb4c"],["/在Swift中处理非可选选项/index.html","23c5757c0e8e2fe318f5070e3a11215c"],["/在Swift中生成随机数/index.html","c4c09e81112ab599710a901fce5c9f6d"],["/在Swift中重构单例模式用法/index.html","0f1a3b94bf76fc1d7d98acc58dc73ade"],["/如何为VIPER编写服务？/index.html","0618937622ca5b14cc0f57d89c6fdad1"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d8b5bd2e6a6824808ccd357ae3fb8da8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8af0069ece14770645d2c5a64385ddff"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5f3ee504a0ad041e94dc4fdb335218a2"],["/如何使用VIPER构建SwiftUI Apps？/index.html","284bf7cea58c3660d3704584d28086a5"],["/掌握VIPER架构/index.html","9e9cd8a4d1a1aac6e40311d5f81ffbd8"],["/揭秘 WordPress Hook 系统/index.html","d8a38eac3ea1ecf45920a5b90b3d57c5"],["/比较工厂设计模式/index.html","cd0dd4ec2da63e3b46e20ab9b352e572"],["/深入了解Swift中的Grand Central Dispatch/index.html","9dcbc2151adbd64190ac2caeef2dcdf3"],["/深入研究Swift框架/index.html","150bd5f4cbda3fecc1e40e27df81fe1e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e0a111deedbd1fc6d04ca9c9ed20fa4d"],["/选择Swift而不是Objective-C的5个理由/index.html","ecc258db679228ede8f91cdea1a470bb"]];
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
