/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","bb68e984afe7c9f4fdded04f3e304bbd"],["/2020年iOS面试题总结(三)/index.html","ddbf8209ef38a089e549abde051a941f"],["/2020年iOS面试题总结(二)/index.html","26c8ef456b176d424cc501c49192b676"],["/Advanced Swift系列(一): Swift 简介/index.html","5239083ae14110d045ad7cafc2712404"],["/Advanced Swift系列(七): Strings/index.html","26fb5c4effdaf4f60e260301adb91d4d"],["/Advanced Swift系列(三):  Optionals/index.html","53a41f4b434f8344aadc59d4b985d45d"],["/Advanced Swift系列(九): Protocols/index.html","54aeeb13c35d882b594fe048720675e0"],["/Advanced Swift系列(二): Build-in Collections/index.html","0aca09534c555984668f3f8939202c7d"],["/Advanced Swift系列(五): Structs and Classes/index.html","bfdabf170b1688f7b1d92b44587f586c"],["/Advanced Swift系列(八): Generics/index.html","59a48db39192faa6485140434e9c0f10"],["/Advanced Swift系列(六):  Enums/index.html","001a84e3671818dfd3a4c944bdfcf020"],["/Advanced Swift系列(十): Collection Protocols/index.html","446e87a127d2fd054d556153977a6f4a"],["/Advanced Swift系列(十一): Error Handling/index.html","34dd5b484d590f28d25640a1ab1eef5c"],["/Advanced Swift系列(十三): Interoperability/index.html","14fe6d3e1f7659f643726b9624e8d084"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","86c115c1233ab5c8c25c659c90258e3b"],["/Advanced Swift系列(四):  Functions/index.html","5bc6523e9ecc95951f8a213d20bb12ae"],["/App Architecture系列(一):  简介/index.html","5f40024cc83df37d96de63e50297b00b"],["/Functional Swift 初探/index.html","c8438f9a9f330d4004f29ff6b8edf696"],["/Git 使用小技巧/index.html","c575a0faddd01eed62a7a7591367ee00"],["/Go 基本语法初探(一)/index.html","85f9819a86fb24067d46ab923cd8f5da"],["/NSCODER和SWIFT初始化/index.html","ed2d7e602e528eda3c75fdd8c57a3f95"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","68485caa17d24ee002b1caab3c36f99e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","f694abe55080d700916e13372962b74d"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","2e29cb8df0442365b686c3be0547db42"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9d3d9ff449148314e151198a741c6c37"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","4bc178c31a9d0b16bfb500744a675035"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","dfd582eff40993a14d8736d12c70998b"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","7820f61fb21953650532f7b9b6bced68"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","8c3c67d8c11221c4ed018295012e3aba"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","0041984ffe2da90205a8ace0747b4850"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a5c9dbf2eed5c6c5ed29200811119eac"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","72d6f119e31afd1dafdba798822b9b6a"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","35ce1d0fd16df5df367dcfbcbd110d1f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","abd9908f48884e648c3f7c7020db16fa"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","0e4ad8ad02117d0f37e18abe8cd6324a"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","625501b2edcfa1f4918e30736d17c9dd"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","dd0677c012ac9228d904916924d529cc"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","50e48d2443416e1b7b4d4550ac16e6ad"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","4d9de22ece677c17fa0d3f23a8831131"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","e670213b5316e1c84a1c15b0abdf4964"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","0328754c9674036adb4d08bcfaedcc9b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","deb9f25fd907efcf2c20358ebca24837"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","b0ef4b09e64aa0173825c65ede56cc55"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","77a8c23ea483c62ea04d5e1579a0d01c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","806f2a797f6277671eb0da2516b7e32d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","5150416f22e5d7b48918967ae5437689"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","1d00c9a35b307b6536591112fa41eaa0"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","00e4c0514dbf2dcf260babd84ea0f424"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6509f5868bb54d07b43111fc77f5f2f9"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","8377c15428f2833b1065d8b18d9c16bd"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","456bbce2dc6c16a698de8a5e57a087d9"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f9509b203a9e13b120d410055a3da6d2"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","83e5557e7d678360ebf5e2f1d30957c0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","ad920d30deec1d362b7577a47432f5f7"],["/Swift CompactMap vs flatMap：差异说明/index.html","50327c5bbdcb30e6969fac95221056f5"],["/Swift Grand Central Dispatch 深入实践/index.html","a8761a22696ba287a2df2435694720ff"],["/Swift Lazy属性初始化/index.html","451f900a65a4b9bf6c4523baa9c5fd24"],["/Swift Promises 初体验/index.html","e83be3aa13bcd62225e7a8b13b1d214e"],["/Swift Promises 探究/index.html","2586836f85a2e04b290e34a8a2455494"],["/Swift UICollectionView使用指南/index.html","c1d722fb3f184197764dcf3a87aaac94"],["/Swift URLSession && Combine framework/index.html","3c46e8c613805f2a2aa09ba4cfbeed5a"],["/Swift 唯一识别的视图/index.html","845592f7800afdf682f63524862ea0d6"],["/Swift 如何学习现代UIKit？/index.html","d02694223028f269da99f87e6bf5273a"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","3a5b9fc8603079e90165f51626f0b6d4"],["/Swift 用 compactMap 替换 flatMap/index.html","769ca465cbca682c34ab89e5b1c8427f"],["/Swift 选择和播放视频/index.html","05fc7c535f2b65f62469e9298b3bb081"],["/Swift中UIColor最佳实践/index.html","b6a9e9a330020c6748a76237937cc9be"],["/Swift中快速简单的工厂设计模式/index.html","b2dea62351916010489e7f3cd2477286"],["/Swift中构造函数与静态工厂方法的比较/index.html","3ea8e60a2591384dc3ee1180cc86ebeb"],["/Swift中的UITableView教程/index.html","54aa1f117af563df180406533f909403"],["/Swift中的懒加载模式/index.html","e83b21666045215b08c612fc24e0485e"],["/Swift中的模块和挂钩/index.html","3abfea13c6198984eae8791cf4377be2"],["/Swift使用布局锚点添加约束/index.html","6a9fdef22b5659c8e4243ac614fa4bea"],["/Swift依赖注入设计模式/index.html","6e5cfb60d226eca48545d2db1437e582"],["/Swift关于Dependency Injection (DI)/index.html","97c1fe4b3798ad127b4147c7b90a8067"],["/Swift初始化模式/index.html","5977969b6bbf53daeeb4bdaa12a5d79e"],["/Swift单例模式/index.html","55922fb323403b63891692684055b3a4"],["/Swift原型设计模式/index.html","a1db5145b89995846610853ba38d7972"],["/Swift命令设计模式/index.html","af5367027ec5c4509d2132507239e41e"],["/Swift外观设计模式/index.html","ea140c5a0f8c3cabab8958f0fb2d0487"],["/Swift委托设计模式/index.html","17d402768aca01d5c54004558314efc7"],["/Swift对象池设计模式/index.html","d3795b2460d2b1f881eee33bb7ed1275"],["/Swift工厂方法设计模式/index.html","f0c2fcdd2b73a695cb1f183847268a55"],["/Swift带闭包的懒惰初始化/index.html","0fae59818e8aafe87735cd9186ba5e1f"],["/Swift抽象工厂设计模式/index.html","d10d181bb76a569b7536f1d48b8c5844"],["/Swift掌握iOS自动布局锚点/index.html","71136f93bbf8d277f5beba113fa37ef1"],["/Swift支持旋转的自适应单元格/index.html","c25ddbf3ca223d67d83a58511154a81d"],["/Swift枚举值/index.html","e2ce9f88b8a93dd93f3e56ef1c4de6a4"],["/Swift生成器模式/index.html","fb3095d5a3ecce0efde1bd83d33e7b9e"],["/Swift结合Xib文件自定义UIView/index.html","e630d5c24a7d8c76c0f5e169c09602b3"],["/Swift编写的20个iOS库(一)/index.html","361ad7989092ce1265e0530887be6687"],["/Swift迭代器设计模式/index.html","bd235d9d18d189be11a971bb2f78285c"],["/Swift适配器设计模式/index.html","9702a9da26a1216e2da36bb7f3d44008"],["/Swift静态工厂设计模式/index.html","48dd68839df5725e962a8e587a18771c"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","783da08870bf1f1638c14661cdf472d3"],["/UICollectionView data source and delegates/index.html","eb75f561084857e13a689d6f853e9139"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","512ca1f890d11e9f5a3463f686293b23"],["/UIKit初始化模式/index.html","43770fad43fdd505f359ba12f2115e9a"],["/Ubuntu18.04替换国内源/index.html","d1f9881bd2eb7baffaa81bf617ebb01f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","b6da7b8bc127a9f5e5a0689d1167312c"],["/Vapor系列 (一) :  Vapor 初探/index.html","e6cbf1ada1c778a27f9c78e01932170f"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","84cac5d09944991686c6f75e913159e0"],["/Vapor系列 (二) :  Hello Vapor！/index.html","fac6689a987a195edafe62d14da4a74a"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d6fc88dd59f079f1b66a1c7e051d474d"],["/Vapor系列 (四) :  创建博客数据库/index.html","263c6a060594dad86e3e32c0bc74f797"],["/Vapor系列(六): 徒手撸一个CMS/index.html","136bc1c381460a24f3d5c85a2e9c4377"],["/Xcode扩展/index.html","2d1c94015851e4196f4283f3c09ad75f"],["/about/index.html","8db511d2a622347f34cbb22b0731ed54"],["/appleOS的Networking示例/index.html","f56791922219bf73eb113a6a005aa3c3"],["/archives/2020/03/index.html","e1724b526c3d4a4c2c1d12a3a29ff899"],["/archives/2020/04/index.html","801b050335bd3abb131bff2a600c0bdd"],["/archives/2020/04/page/2/index.html","99428e5a07d3ab216597b350cdb1615c"],["/archives/2020/04/page/3/index.html","28628530d13dd0fcc4036cd3ab4b4772"],["/archives/2020/04/page/4/index.html","867e76040a5ecde6a9b3e5fc16cd5d40"],["/archives/2020/04/page/5/index.html","8431995f5292150d322e29cb9be5711e"],["/archives/2020/04/page/6/index.html","56588e82871ce4f1afb08929eaffabc1"],["/archives/2020/04/page/7/index.html","2fef6d490df7ce0ae4398891823fc5f2"],["/archives/2020/04/page/8/index.html","c44ef4a6d544c6f5a46040e8dd9c2964"],["/archives/2020/05/index.html","0e1f90819427bd28ecd99c5720c27320"],["/archives/2020/05/page/2/index.html","aff70f59cb8264c73772d85e536c54f2"],["/archives/2020/05/page/3/index.html","025c0b014683e921a21f047cc740600b"],["/archives/2020/05/page/4/index.html","fc87eb7e7820aebf1005686ba790029d"],["/archives/2020/05/page/5/index.html","10d69f81a5bb1f94f6e290a3f6cd757d"],["/archives/2020/06/index.html","d849da57943d2274e3481c69225d6dff"],["/archives/2020/06/page/2/index.html","931e43ecd0453d175fcb815b696f5392"],["/archives/2020/08/index.html","828f043f362d4e24e2f4b24f412ce2b3"],["/archives/2020/09/index.html","74c5edcd44f2ddc47c70e9e8fd1caac8"],["/archives/2020/10/index.html","008cbfd55b9ea9f943edae888908ea7e"],["/archives/2020/11/index.html","a6eda0a954e9c9b4650601cc0220c7d8"],["/archives/2020/12/index.html","f0714ef4b23d94c54208d13115d879ae"],["/archives/2020/index.html","0c941af42e450a6116b3ae8c58246ebb"],["/archives/2020/page/10/index.html","0c4d9092fe8e29b996d4ad8c3d578f8a"],["/archives/2020/page/11/index.html","7b143df35e627fb2668ababff56b7159"],["/archives/2020/page/12/index.html","9d14af1d5d7d85a5148421f428bb42e8"],["/archives/2020/page/13/index.html","a2e8baa31cc9c9c2605803b83a797904"],["/archives/2020/page/14/index.html","951d5a1f110a1dc31af01d5a9bcb9976"],["/archives/2020/page/15/index.html","1bb808606b3edd48ca58608bbe065162"],["/archives/2020/page/2/index.html","87af757a133b503630cdf7eeee7b0430"],["/archives/2020/page/3/index.html","77dd3519d11509b7218eed7969899dcb"],["/archives/2020/page/4/index.html","0dcd03872bf353e0aaa80674c21af950"],["/archives/2020/page/5/index.html","ae4de4da570efe6553f45f955adb6bbc"],["/archives/2020/page/6/index.html","dad2bbd4daf1b2a5e8d869322c1e30b4"],["/archives/2020/page/7/index.html","48c24bb0c9a959a65f394a3af479d18d"],["/archives/2020/page/8/index.html","b9df0b94a590308a0aeb371546555179"],["/archives/2020/page/9/index.html","723e3b6935e2b59b035c8f02738fdf26"],["/archives/index.html","828df32602552cd123e1292cd75708de"],["/archives/page/10/index.html","4dd188d1f1b80dc91289f646676140d9"],["/archives/page/11/index.html","c095fb54623389e567665b0dab9e0d5c"],["/archives/page/12/index.html","a4b5bdcba8bb9111e3c7ceef88d7da0e"],["/archives/page/13/index.html","e3fe4788aa2a6976dc9a9d748e1edf71"],["/archives/page/14/index.html","294c4e8064777e35fd5c23f869740ff6"],["/archives/page/15/index.html","281e3830826116010ef361cf0c4d1833"],["/archives/page/2/index.html","1a031fae380307d9be2a7218ae08179a"],["/archives/page/3/index.html","9aacba152eeb3a44dd0a22a944b58fda"],["/archives/page/4/index.html","23ba0a473bebbd12d84c56daefef4f0c"],["/archives/page/5/index.html","a70938f67a604171c344a06156c63c47"],["/archives/page/6/index.html","b8a74d00d9dfd5ef819a5ed4b5a2d532"],["/archives/page/7/index.html","f993070350fbea479b36a104a39dda73"],["/archives/page/8/index.html","a31e16ee1a8472010a4c62db3428b4d7"],["/archives/page/9/index.html","3f2c3b8afcce74da1566640a6c9a55ef"],["/bugly 上传dYSM文件小记/index.html","9f661b5442bcda02776d50c65e80f22f"],["/categories/Advanced-Swift/index.html","57df63e1c6e914d7519944dd427e4d10"],["/categories/Advanced-Swift/page/2/index.html","aa6d9668e6e0ab110db5e696b79aab81"],["/categories/App-Architecture/index.html","3e86727459253451875935fcd0f200b8"],["/categories/Array/index.html","02791d8d28ca3227d67cb4bef2df92d0"],["/categories/Codable-protocol/index.html","fa73b9ed583ea30bd5148c1ca38f22d7"],["/categories/Combine-framework/index.html","21b87cf505a73ff2000915fa241e4627"],["/categories/Combine/index.html","f9d8e5183ea3f7a876402ae8059df631"],["/categories/Go/index.html","d6ba1f82c73a070fed22202963ea2ace"],["/categories/Grand-Central-Dispatch/index.html","d64d1def6db05a19405096efe4936e9b"],["/categories/Hexo/index.html","2cff44dc751fb88349f7b64bc4410470"],["/categories/Promises/index.html","ba336a648dca9b0413c2519dc0f32d35"],["/categories/Result-Type/index.html","c695ce3192ff371cfe60101e5c54d36e"],["/categories/RxSwift/index.html","366c95812d2bb2150b0aae262a2fb2f2"],["/categories/Server/index.html","01cb0f88ed23b6775421687974adf345"],["/categories/Swift-Apprentice/index.html","5a75cd0b1e8d9d5721dd5fe3a4f64ae9"],["/categories/Swift-Apprentice/page/2/index.html","48e6d46c56ba8bda08f6fae0da8da33f"],["/categories/Swift-Apprentice/page/3/index.html","c307a85aa0c587689e2af296adce1a49"],["/categories/Swift-源码阅读/index.html","f2ccdf054496f2b9f6c5fe9919acf527"],["/categories/Swift/index.html","5ae9797a0c2326cae738df79a1ad3bea"],["/categories/Swift/page/10/index.html","d89e7dd29f487ee8e9767d888230df54"],["/categories/Swift/page/11/index.html","b80dbf6dd430fa99d58c4ce3b459491b"],["/categories/Swift/page/12/index.html","abffef4f3267e3d812cc53d65c6c99aa"],["/categories/Swift/page/13/index.html","257f65f29a9aaa0ae8305c787006cfde"],["/categories/Swift/page/2/index.html","791ce17794f2a80b2af22bd10a6177d0"],["/categories/Swift/page/3/index.html","1f7ec6221aa654866b52d7375fd6940b"],["/categories/Swift/page/4/index.html","a07b536c52f85903241bd8f392dee997"],["/categories/Swift/page/5/index.html","ac2af17a0c82418684a1f39927667dc3"],["/categories/Swift/page/6/index.html","ac71fc0f7cb6220398a41e0f63efa27f"],["/categories/Swift/page/7/index.html","2e2b7e7b52a0d4c050065636b5f1c5c9"],["/categories/Swift/page/8/index.html","ae45e53ecb22cafc6fef22e0cbff6960"],["/categories/Swift/page/9/index.html","04f3d4e6dcc0279f55f44fc9209a34f0"],["/categories/Swift5-2/index.html","1bb94f247f51e336a4a2b103f24035c8"],["/categories/SwiftLint/index.html","5bdddcd0aaa5c67eae69328a8892f23c"],["/categories/SwiftUI/index.html","c1df34efb8b1fc30b6c7fd60d7f1a830"],["/categories/UICollectionView/index.html","efea0f0fb36b67085a6f31dbbaa8ac6a"],["/categories/UIImagePickerController/index.html","142e6309d92c7718b003f8e8fbcc297d"],["/categories/UIKit/index.html","5e04c022cd1326cd13df83b3bdfee20d"],["/categories/UIKit/page/2/index.html","cbc4902d0056a3ab4598e1674e6ba255"],["/categories/UIKit/page/3/index.html","0a859d1ea1e6a281702495cd513b374c"],["/categories/UIKit/page/4/index.html","1fb289ccf5b1ad24cb9b8c1812f49bf3"],["/categories/UIKit/page/5/index.html","6a79fb7a31438afd1524a432d2d0dc31"],["/categories/UITableView/index.html","8f3594b9a162555c17ae999a6f650131"],["/categories/Ubuntu18-04/index.html","3cb06e400d982947f1e0dd0968272811"],["/categories/Ubuntu软件源/index.html","0033266a3b281d5dd48e8bff7c612447"],["/categories/Uniquely-identifying-views/index.html","6f33c2d0aad6cee38dfc09c698d1487a"],["/categories/VIPER/index.html","19b314d2e2c5cc5f8a7f53283986351a"],["/categories/Vapor-4-0/index.html","e5e0e29d7710b36179d241f3e9fab3cc"],["/categories/Vapor4-0/index.html","bacc8d264d6afa4c4a254de1d921b60e"],["/categories/Xcode/index.html","963c5632fccfe769bf055802f0314619"],["/categories/appleOS-Networking/index.html","d609f69734f6514cd06626a1485ba29d"],["/categories/bugly/index.html","7fa3ff3563e380896b775090d64f8d69"],["/categories/enum/index.html","a5b9ec62ef338143fa8bbaa632e097c7"],["/categories/git/index.html","9eef63bed716f8d2b9635a95d7c63f2f"],["/categories/iCloud/index.html","45d3085abf6348923b2e1fe8c74b275c"],["/categories/iOS/index.html","af3aaec9518267a657154f5e13e9a1c6"],["/categories/iOS/page/10/index.html","809963194e0fe02d0d82caa997308374"],["/categories/iOS/page/11/index.html","160c4dcfe2505b72453ea66e6b0202c0"],["/categories/iOS/page/12/index.html","c70477e9e6d090d78684980abc88df83"],["/categories/iOS/page/13/index.html","8ec90ea4d474212d37b074608be99b8e"],["/categories/iOS/page/2/index.html","11a19e8f89fe0c17e8d257e30e4036e5"],["/categories/iOS/page/3/index.html","9bde91466b25931453f3f580712d5f8b"],["/categories/iOS/page/4/index.html","f03466d2cc9397d635e272189e9aa6a9"],["/categories/iOS/page/5/index.html","b52cd7ca21b7da36e13f09df60d74886"],["/categories/iOS/page/6/index.html","cda509b75aa801eddca9993050e2c7d7"],["/categories/iOS/page/7/index.html","c5fc039fe4ced388ca11efb07f73c4af"],["/categories/iOS/page/8/index.html","8fe471163b36e266589dc4c740d23459"],["/categories/iOS/page/9/index.html","aa42df6908bd7269fb0512cccab3ea81"],["/categories/iOS面试题/index.html","1c86c7308ae96dfd6802ffb558c1b957"],["/categories/index.html","b23e03ef270030d3d0f0370067508cf9"],["/categories/random/index.html","26bb4b2a03f77da8c8810b063502b26b"],["/categories/三方类库/index.html","30a9dd71fd2d6928923fcd252656f001"],["/categories/函数式编程/index.html","4b37a2db127b9791dfd3b871854c94a7"],["/categories/子类化样式/index.html","af7d59f79dbadcbf108ce46f516581cb"],["/categories/开发记录/index.html","5411254470170054641322c811ce0a17"],["/categories/技术支持/index.html","e8227af7ef42fe7cec544f38a34e158f"],["/categories/架构设计/index.html","885a12ce1a200e53444c8b5efd62bdc8"],["/categories/测试/index.html","142b6cf618f46439605887ba43b42e30"],["/categories/用户体验/index.html","412fa6e5308e8cc73c5144f821bc4a01"],["/categories/用户协议与隐私政策/index.html","07d69b745039f8a93895877b5f6e80b8"],["/categories/设计模式/index.html","91458648f3c07feff48bd8f60b44d561"],["/categories/设计模式/page/2/index.html","28dcb098e85371f30507220b788acf61"],["/categories/设计模式/page/3/index.html","efa5552dda965de878679afd71b432c9"],["/css/main.css","2cae6e7e54942ec4f5385ebf078063be"],["/hello-world/index.html","3f46dc77875d9de2eb5ca690e34b808b"],["/iOS VIPER架构深入实践/index.html","dc99fd88ef84d2753ec9080efe4f584e"],["/iOS 自定义视图，输入表单和错误提示/index.html","da338650174f4ca53f672871888fca6d"],["/iOS如何使用iCloud文档？/index.html","76a015823def864873dca0f6950bc710"],["/iOS子类化样式/index.html","8bd3990004c3ad50964bdd7505b7b46d"],["/iOS开发记录<一>/index.html","1dbc867a649a4246cbcc0b3d1459f32d"],["/iOS自动化布局编程/index.html","8b771016668e6c9008804bbc5071af71"],["/iOS自定义转场(By Swift)/index.html","3c28cb2679f2dd411be0522162e6744d"],["/iOS项目架构：使用VIPER/index.html","831961203c6f7b03e0ca0158ac0c0ca4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","32c122450290917954c24ceb37d3cc15"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","07f0d4d237bf64bb860da0f4da920159"],["/page/11/index.html","4c446bc95df89d966a7d5dd4be6f6d87"],["/page/12/index.html","fd8798577760eebc7026fa86bf6d69a9"],["/page/13/index.html","7ffa94472c7482ce72f8704b19983121"],["/page/14/index.html","4dad26eeebb9d5569fcfb04365d7c9a6"],["/page/15/index.html","a007457c330371da4f06579cc20fbae8"],["/page/2/index.html","2c68a06ddccff928d0e41df739132006"],["/page/3/index.html","70691ebd95ebc3e70b3ec9ee8d2ef382"],["/page/4/index.html","69d371a53d9e85174ffe5d3962dbb6a6"],["/page/5/index.html","81cc3d5eaf8164195ff4109902339bf1"],["/page/6/index.html","d537b30449ad234fca71e4834d1cf62c"],["/page/7/index.html","cd39fac06a73ae785a4cd4b8d4550558"],["/page/8/index.html","66294bcf3000c8453883211a90a9cb1f"],["/page/9/index.html","7448f02036cac0ef3440443f11ca3908"],["/schedule/index.html","4762d795c82b7932a2d84e16fdbdf5b8"],["/storyAppPrivacy/index.html","e6ddf2480dcffe1929ec45fa3b71b626"],["/sw-register.js","d476d08f9c99423ff8c8d6eae5175350"],["/tags/Advanced-Classes/index.html","0fe706c92baddebfd11ac334feade015"],["/tags/Advanced-Swift/index.html","a87099e90439c2c153ddc698880fef45"],["/tags/Advanced-Swift/page/2/index.html","15c2dae2138fa82dbca343dcc2d38274"],["/tags/App-Architecture/index.html","490c9ad2358045a8b418b49f7e00490d"],["/tags/Array/index.html","71249f7db623bd8f9e7e22082243fdd8"],["/tags/Arrays-Dictionaries-Sets/index.html","dc93e932923c75701578962bdc83d886"],["/tags/Authentication/index.html","0d3cad508be3e797126b86eacee5fb6b"],["/tags/Build-in-Collections/index.html","a67b74fccb4ac6a9139107dc19a1eb37"],["/tags/Building-Your-Own-Types/index.html","c6dc2415136ecd7555086169802c8d8c"],["/tags/CMS/index.html","f89d3a9ef3ea8f151cd980d475d8b728"],["/tags/Classes/index.html","c172cad869ed8f3204745d8d3529aaa4"],["/tags/Codable-protocol/index.html","024f2e4c622e5c1edd0b133ecd89f182"],["/tags/Collection-Iteration-with-Closures/index.html","f971618b4e08fee133fffb7add1802a1"],["/tags/Collection-Protocols/index.html","9ce65e21c9ede64b6fb598e3cb5ce780"],["/tags/Collection-Types/index.html","974012727d9d59ffce655e451b179e57"],["/tags/Collection/index.html","8436105b73fcb2916be79827bf450d60"],["/tags/Collections/index.html","4e0b97b18769472748f1db702e920631"],["/tags/Combine-framework/index.html","80eb368377b7e9b4c71151440c4ec71a"],["/tags/Combine/index.html","0af1931e075f96b64ea4d92435e043ed"],["/tags/Dependency-Injection/index.html","ccd93df76bac999fd61f311814fd909a"],["/tags/Encoding-Decoding-Types/index.html","9cbb1e1eb19fb36a8eca7686c563dbbf"],["/tags/Encoding-and-Decoding/index.html","b7bd3b40c7c4496e3be42c0c4632f9ac"],["/tags/Enumerations/index.html","922db157e8f33c8026b8bd36844bdd4f"],["/tags/Enums/index.html","00f63359d857cb05e46dec9257b31bfd"],["/tags/Error-Handling/index.html","e5eab7e707666d54f45a1a3fbc112158"],["/tags/Functions/index.html","1b8b7c6df6080ba8aa7cd1d6234b9bb1"],["/tags/Generics/index.html","05a5e95669cc5f1df00e90bb1a9d1c72"],["/tags/Go/index.html","6c68b5b15839af7f4aa2893dec2fa065"],["/tags/Grand-Central-Dispatch/index.html","0bfca72ba1002a048a7de59f5a0352d4"],["/tags/Hello-Vapor/index.html","57a0a4bc9ddad2231782322762d34c63"],["/tags/Interoperability/index.html","f9bf9d494d0a0ea0eba286fa63f11ef9"],["/tags/Introduction/index.html","91e5817a931bc19ddc7ad30499222b9e"],["/tags/Leaf/index.html","0d2a07039c97af9c6250c030dcd76d11"],["/tags/Methods/index.html","187d6953f81b087a656631fbba00f052"],["/tags/Modules-And-Hooks/index.html","fd5f3dafd731b711549b6d0cd86f28c6"],["/tags/Optionals/index.html","5ab701553cf100bfb5298580240c714e"],["/tags/Promises/index.html","f93d4439388c64a9746fffae29dc73bf"],["/tags/Properties/index.html","fc693735bcda4125ae06b9d292db8a6f"],["/tags/Protocols/index.html","0b34a7bd71f7bf14a5dda1b95bce4be1"],["/tags/Result-Type/index.html","19f14aa9788bce4c569e2b903d0ab701"],["/tags/RxSwift/index.html","bf4d54dcd072f234ac47ade99ca38337"],["/tags/Server/index.html","48171513318da187a47588149cc2d779"],["/tags/Session/index.html","17ac160912edfb3a44dfe4dc370bd39e"],["/tags/Strings/index.html","28ad265aa78000fa9c505f5e3fcd6f3f"],["/tags/Structs-and-Classes/index.html","5d04670996699dfaee32ffaefeb9bed9"],["/tags/Structures/index.html","3f86f3b3138d2a38bb7307e83c1e4e87"],["/tags/Swift-5-0/index.html","a2dae6ed952b44342738d56110bdadc4"],["/tags/Swift-5-0/page/2/index.html","c91754db2c790fe7867bcb7bcd149c3a"],["/tags/Swift-5-0/page/3/index.html","3db05314dc7746a6096315b447649585"],["/tags/Swift-5-0/page/4/index.html","961cdf3b7d786e73b66148eb1521dbbb"],["/tags/Swift-5-0/page/5/index.html","5e37ac268678f56378f027eb5c3d4c44"],["/tags/Swift-Apprentice/index.html","a97cd2675fea9f15c58af08d13db4221"],["/tags/Swift-Apprentice/page/2/index.html","5961725455097ea168d9adee152e5c36"],["/tags/Swift-Apprentice/page/3/index.html","71ea410dc4f76ee933d5b05865bad31f"],["/tags/Swift-Package-Manager/index.html","59b9ece15fe8e2f1f5581326530cc9bd"],["/tags/Swift-源码阅读/index.html","aec015e85c52fa73d0a91e16c5157a02"],["/tags/Swift/index.html","53f487b8c8b7c0805083c03f32806b38"],["/tags/Swift/page/10/index.html","599b074ea2f89760c6afe9522b4f67e5"],["/tags/Swift/page/11/index.html","11c3052475460b5bea6fc5e815cfca11"],["/tags/Swift/page/12/index.html","aa9f5ce877658f75e97651aa51559686"],["/tags/Swift/page/13/index.html","45881661d969919e270ca80766220754"],["/tags/Swift/page/2/index.html","c305f55f2dddf1790d4870fbff1e5b77"],["/tags/Swift/page/3/index.html","bec35ed8c17b825e57feb275f7bc6e45"],["/tags/Swift/page/4/index.html","4ad54a97dcbc0e5662c5587604551462"],["/tags/Swift/page/5/index.html","aa8fc1406c159f2d1817910ec0195b15"],["/tags/Swift/page/6/index.html","a5167c6561d38603ec9fbd57ff673ccd"],["/tags/Swift/page/7/index.html","eb8e9cf64638dcaa6276fab09f13bb30"],["/tags/Swift/page/8/index.html","de6f4ddff9af7af94839f0f38a7d3f47"],["/tags/Swift/page/9/index.html","83483a64665fb02f345a86d5b212df3c"],["/tags/SwiftLint/index.html","eee4cdc45d77012591302cf0e8f812e1"],["/tags/SwiftUI/index.html","7be8b1f41ac9bc1988ab393b84584876"],["/tags/UICollectionView/index.html","c1664688a900e17bc557523b5161b438"],["/tags/UIColor/index.html","71b677a0c08358ca888abcd6cd3b5d9d"],["/tags/UIImagePickerController/index.html","62cc61522d63b53acd55866dde3e7aa7"],["/tags/UIKit/index.html","f08db5d17813c2a0526732b8a1fdb3c3"],["/tags/UIKit/page/2/index.html","2323bc9b90cfc693304f7e1f088373ae"],["/tags/UIKit/page/3/index.html","a2eba78dcd5e7d6d2294e5d8907a1bfb"],["/tags/UIKit/page/4/index.html","5e4e6c008840b8df435e95f6966d3c6e"],["/tags/UIKit/page/5/index.html","dc0ec0de77d2a08d803798494dd2e9be"],["/tags/UITableView/index.html","239f9d167d0e4d043b54da8298dc2291"],["/tags/Ubuntu/index.html","327c5bec9bc3bb3976571eb087223628"],["/tags/Uniquely-identifying-views/index.html","0ef1c1a2e7ca57718aa3f62e551cce21"],["/tags/VIPER/index.html","5a911de32e3c3a615e9b3126b87e098a"],["/tags/VMware/index.html","1c32652a47906e3ea15030e3b73b4120"],["/tags/Vapor-4-0/index.html","c274bfd344240be3fe6e037ae844f883"],["/tags/Vapor-初探/index.html","32fb162e42ee6e85e810870b1d49d5f7"],["/tags/Xcode/index.html","8877b608614c13ff8e25285121068107"],["/tags/appleOS-Networking/index.html","405fb086f56ac6ff692ddf6815c87e54"],["/tags/bugly/index.html","dbaec5d1f5edff28979859de1656c54a"],["/tags/enum/index.html","7948d4d0d8363a6bffde2e8b7a4f6b3a"],["/tags/git/index.html","4ac7d462179cd06d77991a61d969aa3d"],["/tags/iCloud/index.html","05116c41f948d33600d28ffba12fbe80"],["/tags/iOS/index.html","f136860f207380de27a5ddb9e63d5c0f"],["/tags/iOS/page/10/index.html","da791b4276265f1f7b08838bd6421ca1"],["/tags/iOS/page/11/index.html","ee3c2fea0482d8c7e2dd0caae1d3e839"],["/tags/iOS/page/12/index.html","36fad818b3a2e3ad046b5a1221472355"],["/tags/iOS/page/13/index.html","c07e4b5e71921ff7d48780b0cec016a7"],["/tags/iOS/page/2/index.html","25f65cfc930034a1165bd76c1f22fbfd"],["/tags/iOS/page/3/index.html","3026da4b6794aa4178ae5b623c4c3722"],["/tags/iOS/page/4/index.html","554236832ff7a57d460fc5838b0c6cbe"],["/tags/iOS/page/5/index.html","555c664f5731a850194becb1c9e81f0f"],["/tags/iOS/page/6/index.html","a95268c69a35aeeffc579ea64e05f2ed"],["/tags/iOS/page/7/index.html","4bfd872e7df2218730e50324fb0a2e95"],["/tags/iOS/page/8/index.html","3180b67eb0af5cc19a1b08219a41102b"],["/tags/iOS/page/9/index.html","d20a48ba7fc67e970e47001a6d5b24ea"],["/tags/iOS面试题/index.html","5cc877c8b6fb8da9d61a320b0380a8a4"],["/tags/index.html","f92c11de739f5f4f65d286255d4c59aa"],["/tags/non-optional/index.html","7827a7f32d39c7ea76a7eb8d7f8d2335"],["/tags/random/index.html","539bd7ea5cc320cf9c154deb121d3535"],["/tags/transition/index.html","7a2b9e1d56376b4a7681b8ec3f4bfa35"],["/tags/三方类库/index.html","8e1bdabe07f6ac3c8547764ca2dd5c2d"],["/tags/依赖注入设计模式/index.html","72f821a79e6b8a9f3ee4b9d7cbfcf41a"],["/tags/值类型和值语义/index.html","7cb3d88c8fba1cc5d45dfde3a445b7ce"],["/tags/内存管理/index.html","a2543b9af4010a5d3370e53342d72007"],["/tags/冒烟测试与回归测试/index.html","65f9698a9a96efc85eaecd7ff3e14f81"],["/tags/函数式编程/index.html","ba5fe3995d6fd927a71e858e3a2a09c8"],["/tags/创建博客数据库/index.html","32798b0295fda9d29a95bac1a96d8202"],["/tags/初始化模式/index.html","a8f88b49ecb3ff538e00ce3e35397181"],["/tags/单例模式/index.html","18312617ec3dcef8b53be1621c25e459"],["/tags/原型设计模式/index.html","632b7a209b1429b4bc37a4f797bfd72f"],["/tags/命令设计模式/index.html","f998e07b12e299bb591a11b46df61d8c"],["/tags/基本控制流/index.html","8b6f44a6947d3073b839d6582635ffbd"],["/tags/外观设计模式/index.html","ce11d3292f162e8089d96f4954f1a424"],["/tags/委托设计模式/index.html","7f53e98ed801f274a3f989678ffeffe1"],["/tags/子类化样式/index.html","7e62102a6b75d61a750bcfd550f0c3ae"],["/tags/对象池设计模式/index.html","7df0d45a5758915c48cc07c4c97471ed"],["/tags/工厂方法设计模式/index.html","0be19187b65efc41fa99c3bb5a784262"],["/tags/工厂模式/index.html","acc59fb4065bbecb4936e197562ddfed"],["/tags/工厂设计模式/index.html","472c52846f4b94a20d8b855612b9e244"],["/tags/开发记录/index.html","aaadde8d81cb5b162dd7b227fab17cde"],["/tags/懒加载模式/index.html","daab01e1bce2a255a7c42460849c7206"],["/tags/技术支持/index.html","be59cb28149bf2b7c89839ddfd143dd2"],["/tags/抽象工厂设计模式/index.html","994ce7b310ba611bd4f9515716e61492"],["/tags/构造函数/index.html","0798d90eb44ccbc4b38f56e4af17594d"],["/tags/架构设计/index.html","ea3973ae16d77984502c5376925c073d"],["/tags/模式匹配/index.html","c12d6a206f908ee0554eaab922a14a0b"],["/tags/生成器模式/index.html","30f473d35f768b161f9fb61ed2395f41"],["/tags/用户体验/index.html","694d57a1837ebc72d569523f23b44b0c"],["/tags/用户协议与隐私政策/index.html","1f8e58c3f0c1b2feccecf943c2fe0920"],["/tags/类型与操作/index.html","8ddfbf4452ef4b3ac855dd34b6c58e5f"],["/tags/自动化布局/index.html","ef4c3a80e099a5903fc2f48680f257e1"],["/tags/自定义UIView/index.html","ece3d498ccfc6e81ce480f93dad8e1d5"],["/tags/自定义转场/index.html","784df309b89b2d37ea36165f2a9b0d57"],["/tags/自适应布局/index.html","e8e830126f7063cca9dd3a286443975f"],["/tags/表达式、变量和常量/index.html","065bd93b1692b13c9a631ba591138006"],["/tags/设计模式/index.html","b6da02846817c8aff25b1282663f9df9"],["/tags/设计模式/page/2/index.html","595cfd83efbdcabe09c536327261d4d2"],["/tags/设计模式/page/3/index.html","fcbc8f1946c93047ae0e25002d692b69"],["/tags/访问控制和代码组织/index.html","9f69a02665ba25447127c8a1ed387503"],["/tags/运算符，下标和键路径/index.html","08071d0ab484116410d5e8661fd648b4"],["/tags/迭代器设计模式/index.html","c34fb438188a4bf7b9774e549c44f0f2"],["/tags/适配器设计模式/index.html","6aa6d2df2dca5af37f10200dd6f1aeed"],["/tags/错误处理/index.html","cfaffe980801716a52133e386f8b1f27"],["/tags/静态工厂方法/index.html","470055ee105ca2e22a4e865233ac5c2b"],["/tags/面向协议编程-OOP/index.html","deb502bac7f90afdf8b98a4a884e7035"],["/tags/高级主题/index.html","1eea67db9ffacb6036c0d052f4226653"],["/tags/高级协议和泛型/index.html","38a1d2d0f18b2c7e6ba57917f1c62a6b"],["/tags/高级控制流/index.html","095a61dbc96cc2d3348bbc4911330125"],["/为iOS应用构建输入表单/index.html","e8f33208b88123dfca25866340d5c5e9"],["/产品开发的幕后花絮/index.html","d94f6cd6e31c370d097ac4008bf4ef86"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a5b4e92623688a6fc6a6c376efadefec"],["/冒烟测试与回归测试/index.html","b25668cd93df99ad734ee8ba62be603e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1ff222329d871b15c96c7a15d5721d6f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","094cb3e159258760ec7ca71794d62eb8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","77a8cdfc3457c51dcf1abd591d5361ef"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","10f229076c738ca6cdea5520a6f364fb"],["/在Swift中创建自定义集合/index.html","8c73023e6eae2d22d2c3ff1431926b60"],["/在Swift中处理非可选选项/index.html","1221e72de13a2c1c793494388dc6ab07"],["/在Swift中生成随机数/index.html","0f44b0558cb8e5f476ac8998e24516be"],["/在Swift中重构单例模式用法/index.html","159a1634e38c73d1c7b05d805534b704"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","b482d39eba84615fb529a14ae4c3bc43"],["/如何为VIPER编写服务？/index.html","c12bc3ee680d5fc814d5c0a45e1ad4ae"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d81b264caf5c1ea524a1b6272a147fb4"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f499116c89e0131461628cc099f6594d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","cc303b39765668749663200b005fb9dd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","52b9f6ca9e327b8a5564cf7914d49bca"],["/掌握VIPER架构/index.html","b45965eeb6352689a5ad748fa81ca786"],["/揭秘 WordPress Hook 系统/index.html","a310b3407ae4131d5964a510ab0b3e40"],["/比较工厂设计模式/index.html","46603265f2f82023063eed729ca74eb2"],["/深入了解Swift中的Grand Central Dispatch/index.html","540c977a727d9c8e3cf7927d7d8bb313"],["/深入研究Swift框架/index.html","fc7717272c23dc73660375b2c11b8d84"],["/美豫直聘技术支持/index.html","975427ae1deeb34d68d816a45ea422da"],["/美豫直聘用户协议与隐私政策/index.html","f407aa3aa363add351f3f9e664eb6370"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b72de1a1f9277001948f4b7562a54b00"],["/选择Swift而不是Objective-C的5个理由/index.html","2b368b52216e1dd3c97f9c8464a360ef"]];
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
