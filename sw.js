/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","507ae1eeb6a3a132be591fba15649393"],["/2020年iOS面试题总结(三)/index.html","455d0a65d622d18ad140e88fe72390bd"],["/2020年iOS面试题总结(二)/index.html","4ec50c692fc645a406b68507b20003c5"],["/Advanced Swift系列(一): Swift 简介/index.html","bf86792db35bf7266c66af102732aec2"],["/Advanced Swift系列(七): Strings/index.html","053d0417516e683d3c2869297894126a"],["/Advanced Swift系列(三):  Optionals/index.html","749e85d05164941970075c0cb287c316"],["/Advanced Swift系列(九): Protocols/index.html","66b187ea5e475409fca2c8016c85e803"],["/Advanced Swift系列(二): Build-in Collections/index.html","51b2b8e3597c1a8bcef4dd92868ae917"],["/Advanced Swift系列(五): Structs and Classes/index.html","1935ecf8b37e1cf375115139d9f09700"],["/Advanced Swift系列(八): Generics/index.html","eac7747608aca655da8a97ee98eb725c"],["/Advanced Swift系列(六):  Enums/index.html","0002fccd5d5c1fec9a1aa0a889fcd9fd"],["/Advanced Swift系列(十): Collection Protocols/index.html","9becd19e4c88e228e787925845779545"],["/Advanced Swift系列(十一): Error Handling/index.html","628699fd5d0e7e0edaf454751dd2a238"],["/Advanced Swift系列(十三): Interoperability/index.html","fd9f668caa2a14512f7913f8e42f2bc6"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","faa075f12fc8f50c94a1386d87af2c33"],["/Advanced Swift系列(四):  Functions/index.html","de6c2a633563eebd7fb882f8bb42b6c5"],["/App Architecture系列(一):  简介/index.html","7ed5f232d706f4e005d3b22ddf1cb86d"],["/Functional Swift 初探/index.html","c4a15ebc2bd1be4d74fbf8bf790e673c"],["/Git 使用小技巧/index.html","06e962e663c07aeb5e17cca095905a2f"],["/Go 基本语法初探(一)/index.html","19603cb0800b57bc4a2a1563802142b3"],["/NSCODER和SWIFT初始化/index.html","f5e6f7a27be2ea6a73372bcdac2f0abd"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","eaff84ecc0610f4082836224545c5cdf"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","52e04522b1a26d709135894989bca6aa"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","4cf08c3a1019ab284bcf22af37e3d79d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","1b74ca9e9e1cc02ee1e1721f3b446c5d"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","86466e4d945993f7853b2c8df0dbdb0f"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","cd8042c40d7c4f654a9f05a5c8d3e97f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","45e1ee4a02c298c1863c5f5bf20187e1"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","bba14bbc4b5e8f92e4178fba4b17be2e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","2607571932d912d187ea3c91f02fdfc1"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","4de904d1fa67e81e288e2fece4f2be9f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","6f35dacbd011a6d524070b86900f13f6"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d74c0007f53817d59eee85f65ce1a086"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","0c7651df565cebff7b1c897b110a199e"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","9060fcb609d60703a7e3c76721689023"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b4e4ba09fff316db60679af5f3ac3fce"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","92f0c1ef78046da19f2fb9e9531ece1b"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","e591ee8ba9673584756d19c08cb56896"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","284645eda11aeccfbf9b3d46ed5b65ab"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","75a91cf8acab7b6b9d21763c7e34d8bf"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9c776b7bbde9d42d9907503431767ef1"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ca002e4e55f35357eb8a8b16039dbe98"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d550b297d81ba1f0d010b162099c382f"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0a5146ef1f4f1eab50136b0c522de78d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","49cbc6ecc6beec7fc2b71b4724ce7dc5"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8118cf42e8eed87b6c4801dd3b607856"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","3923fde0ee99ea7ee8cfb8e9bfbb6180"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","fb062ea738f70bd2a570f4acecba4d1c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","7ce9e90ace07d5cf2657405c45f4c047"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","70236d8a3e4ebbd46d93fa8f5a4e6fcd"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","584a4205d3b9013b8c5b7a898a82338d"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","c6b39f9e1dcb1d423bdbb35a858eddf6"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","e0c63a42560d309dc5610e729775eee4"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e0746a8e8939a6789ac8f7997b5251b7"],["/Swift CompactMap vs flatMap：差异说明/index.html","6529aff1e08cd6ba204c674f7efb1a4a"],["/Swift Grand Central Dispatch 深入实践/index.html","c23aa943a797b00d35fecdae72f2f024"],["/Swift Lazy属性初始化/index.html","c8f5bc108b567e5fc19871f2064dc108"],["/Swift Promises 初体验/index.html","6b7d295455be1b526097ebd8ca27cf83"],["/Swift Promises 探究/index.html","02b05a0ad5c34eb9ab8bd6f330aa0431"],["/Swift UICollectionView使用指南/index.html","d96828536e3d0a6607fcabec863a051e"],["/Swift URLSession && Combine framework/index.html","7beab9991c44aea1580728c39feff916"],["/Swift 唯一识别的视图/index.html","2a6120ad00faad3dee856275780f6707"],["/Swift 如何学习现代UIKit？/index.html","68bfe0441e65c9e9fc924e690d34ef53"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","36a43f7f8ed3c9bbb36fcb139db9811f"],["/Swift 用 compactMap 替换 flatMap/index.html","d06e69328e4426da39769c8d4a911690"],["/Swift 选择和播放视频/index.html","80a084ed896e1a1b56b96f0c99a97bcc"],["/Swift中UIColor最佳实践/index.html","ed37051053193d52c8ca4d14f8a46d29"],["/Swift中快速简单的工厂设计模式/index.html","fdec8ed021a754378e420e1e87d9bddd"],["/Swift中构造函数与静态工厂方法的比较/index.html","4a4d4dc9b54745343135ac4073eb5203"],["/Swift中的UITableView教程/index.html","8663966de6d8c7f1cf2455ecab49b4cd"],["/Swift中的懒加载模式/index.html","de2dde693967fc65e32896f9db06021a"],["/Swift中的模块和挂钩/index.html","e6616b55f453c3b552631d1ec1ceaffc"],["/Swift使用布局锚点添加约束/index.html","5439d621ff94588727beb140ada46e63"],["/Swift依赖注入设计模式/index.html","3b8ed30a8027ef1a26676d764020cef0"],["/Swift关于Dependency Injection (DI)/index.html","9c6024c6f4def4b36b3e24e2c1fca797"],["/Swift初始化模式/index.html","95995684d7c3b1f365a5451aae05768a"],["/Swift单例模式/index.html","789f483c889373b7dc8cc8b5ae4ddbd5"],["/Swift原型设计模式/index.html","a7136aa0a3bf5f1ede62c5e63e6bf953"],["/Swift命令设计模式/index.html","471794c5b5072ccedf6251e9a9ba29fb"],["/Swift外观设计模式/index.html","8e003859aa485f81058a1a20ad9f034f"],["/Swift委托设计模式/index.html","b48cd222fb1862b785365609bca4bb9b"],["/Swift对象池设计模式/index.html","d024b3be05240b59bc998becac89f721"],["/Swift工厂方法设计模式/index.html","663bfc8e91d76a2ea74bd00b63273952"],["/Swift带闭包的懒惰初始化/index.html","16becffe486c30af3626ca12d7167a8f"],["/Swift抽象工厂设计模式/index.html","893ea6f65b7b932a1a088de62c1f9da2"],["/Swift掌握iOS自动布局锚点/index.html","a7c729e5dd60ecc40dcb5dd634ea688f"],["/Swift支持旋转的自适应单元格/index.html","50a3e60845d3236433056af5bffdcef3"],["/Swift枚举值/index.html","e6a892b78daaac43e312bf7d8118fdee"],["/Swift生成器模式/index.html","bb4c0b725bd78de78b0a8ae5000c5ae5"],["/Swift结合Xib文件自定义UIView/index.html","586e7e4c1a2b5722f4ed58a92c0587b6"],["/Swift编写的20个iOS库(一)/index.html","723a1da2db329c6629ed0b2c5ac27747"],["/Swift迭代器设计模式/index.html","096ff56179c38a5f59bf760b2f878a1d"],["/Swift适配器设计模式/index.html","365030a44ef9fb3eec74c214e5b38752"],["/Swift静态工厂设计模式/index.html","b0f0a0a2e73120b8c4cc7366c4098652"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","8565e841ec7f5a3a5cbcd4a08629378f"],["/UICollectionView data source and delegates/index.html","11f6f8adf338f52aba4413766d203ffd"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","cbac5323a25bfc5cef3a404977f0f495"],["/UIKit初始化模式/index.html","c27774cb1e25509f687aee5f7692bef4"],["/Ubuntu18.04替换国内源/index.html","83669a53128c238f774e0d0f1208b44c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","cbadec6596d823e5c3a3a030417942f4"],["/Vapor系列 (一) :  Vapor 初探/index.html","d48ab509df46d5f27e5c61f2e6c9a150"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","449a57e8cf1f403251f1cc4966ecc99b"],["/Vapor系列 (二) :  Hello Vapor！/index.html","c6c7c3c14e1477b797b619e985665316"],["/Vapor系列 (五) :  使用session进行authentication/index.html","08a09ea4875197732b0291ac1b4ffb14"],["/Vapor系列 (四) :  创建博客数据库/index.html","d0c8a826507031ecb10bc13298992bbc"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3d5897c8a0764a3955c2f437df9420ce"],["/Xcode扩展/index.html","b328967b363f0f83f54f86786ebbde3a"],["/about/index.html","a55f698d8cd983baf7ab217053482e4c"],["/appleOS的Networking示例/index.html","946a3ac500bf171ef3e3d15648f8c78e"],["/archives/2020/03/index.html","f338742c24ea5091889d7e3925bf4dc3"],["/archives/2020/04/index.html","de5ac9fffed8ce6f2721c9b6e3912e65"],["/archives/2020/04/page/2/index.html","15ed4d3c806ab11b701dcee882a43172"],["/archives/2020/04/page/3/index.html","0e2bd4ac1872d45a84029eb8443e8e1b"],["/archives/2020/04/page/4/index.html","91dd73816fa14c936feec9cded86e629"],["/archives/2020/04/page/5/index.html","4f7ea2aa4bb7db1860f341a591934e23"],["/archives/2020/04/page/6/index.html","5b3dfacacc31a342a2ab5da4531b15a0"],["/archives/2020/04/page/7/index.html","23a09f5bdf4e175f2d3f63467e8eb945"],["/archives/2020/04/page/8/index.html","1ffaf503a084646177ec9854e20a6cca"],["/archives/2020/05/index.html","5adb596b4818dea2dafae5228fbb85fc"],["/archives/2020/05/page/2/index.html","f73a35c2c59161bd9f7b788f4e9320e3"],["/archives/2020/05/page/3/index.html","5a9cca073c1c91222fb34ac1a5c40711"],["/archives/2020/05/page/4/index.html","fba2d5d7b22121cb072c457f617e1084"],["/archives/2020/05/page/5/index.html","c38a2e09c96869ca931923476c4a3500"],["/archives/2020/06/index.html","dc1f9c73e9d1e3c062628c8e5d9655d2"],["/archives/2020/06/page/2/index.html","d3352861aff789a20a0767e4696fadd4"],["/archives/2020/08/index.html","bce908892432dbaccb6c703a1a16ef77"],["/archives/2020/09/index.html","ccccf0cb8a06375e0f6c2a7b3fe9e873"],["/archives/2020/10/index.html","0ca66e274ff25d159eb309966caea743"],["/archives/2020/11/index.html","6ba35f8da80b060502b6378b3de8a6bb"],["/archives/2020/12/index.html","b9859a9bb305cdaf524e839713788dd3"],["/archives/2020/index.html","2edcc26ad0b291d946e309b5e5c8fc99"],["/archives/2020/page/10/index.html","f32aa3f4583975fd2e000bd09bd4d147"],["/archives/2020/page/11/index.html","309b27e42af0a943cc05798da460464c"],["/archives/2020/page/12/index.html","3c60a1883b42f73de936260d8e56261b"],["/archives/2020/page/13/index.html","75b0bf23cb7a4e7449235e64595cd71c"],["/archives/2020/page/14/index.html","9635d916a6b60df65559a2ce5f94c14f"],["/archives/2020/page/15/index.html","bacc6f64e44d9b88c424ebb27e882a0d"],["/archives/2020/page/2/index.html","665d8d533b59a52f0165de46426bcaf6"],["/archives/2020/page/3/index.html","3dbaa0978234280898ef84f68b0866b3"],["/archives/2020/page/4/index.html","158bfc91288f99041524207ab275c2da"],["/archives/2020/page/5/index.html","0e90b373763197ca69e1a7d50eb649cb"],["/archives/2020/page/6/index.html","f7dfe5cdc3cb9c427a09ac5249547a46"],["/archives/2020/page/7/index.html","997cf07ddfe621aa1920a75faeea843a"],["/archives/2020/page/8/index.html","97b914a404f7c871a7856f48e09ff4ad"],["/archives/2020/page/9/index.html","5e44793d7989a462ab30271c4dce83d9"],["/archives/index.html","6b68bd3cdef74062843f7bb78e0d2e91"],["/archives/page/10/index.html","67285da73cccba8093edc9f8942ee02e"],["/archives/page/11/index.html","621133c4df4029af8c8d46c5c023a9bb"],["/archives/page/12/index.html","b5a0dc5d797066f1c5833d4d5e3fdd21"],["/archives/page/13/index.html","649ea0179bd78c3b54bb1e043052da28"],["/archives/page/14/index.html","c3dcc1d3f700aeb171267a6a7fa5dbe4"],["/archives/page/15/index.html","4a40d34bd874311c2643e31fc7f213cf"],["/archives/page/2/index.html","0ca17c32f488099ea3e6ad4b0be230c7"],["/archives/page/3/index.html","e1aafc17af2c608873533d32a215f9bb"],["/archives/page/4/index.html","e72487fad00e6548c3fadec177aa6bd7"],["/archives/page/5/index.html","91c620177f8a43e6d9805b7e159081b5"],["/archives/page/6/index.html","e643e8ad34b383190f5ab4ddfccc8b91"],["/archives/page/7/index.html","7cfed6c117189c8448ffd2b38da845ed"],["/archives/page/8/index.html","aa4900f360dff09c26933dffc3d8d61f"],["/archives/page/9/index.html","61369a3b18146c6d8752e423cadea58b"],["/bugly 上传dYSM文件小记/index.html","d2b3b6ddaa1d2aa876d4446943a4cba6"],["/categories/Advanced-Swift/index.html","bcd8d90cfc59385bd83e45a539f57df2"],["/categories/Advanced-Swift/page/2/index.html","75919d8b420cfa79b0562b9fa8d3ac33"],["/categories/App-Architecture/index.html","0cb584c177d11417f5f2465a95189198"],["/categories/Array/index.html","8fdbeeac85e649915209fba5961b3abe"],["/categories/Codable-protocol/index.html","b0bed6ffa74d4cd2a32b9ceccfa48616"],["/categories/Combine-framework/index.html","f36e0d5a143dcf02f38936b575613fb5"],["/categories/Combine/index.html","d58c206d9cc9a6152a4d8c88f595e0cf"],["/categories/Go/index.html","c0407393c090f61ee04e58c72163d235"],["/categories/Grand-Central-Dispatch/index.html","89208f6e8c0115cc5b42b43179d3c379"],["/categories/Hexo/index.html","e6775896b48cd836e8a4c39a77d2deea"],["/categories/Promises/index.html","6adac6c97465ebc8714321504341a5ed"],["/categories/Result-Type/index.html","f5ec6192f31ea41270539d8bee5a3de1"],["/categories/RxSwift/index.html","cf52c769a5b97a43b3f737a2a563496b"],["/categories/Server/index.html","b4808a0173ea8f65deec3fa09d2102c7"],["/categories/Swift-Apprentice/index.html","be752a07331e6146d59368e089cdd944"],["/categories/Swift-Apprentice/page/2/index.html","73b7f3e6cf3253a2d3044921d934e585"],["/categories/Swift-Apprentice/page/3/index.html","8fd5b03af2d16b5d677e528af302760c"],["/categories/Swift-源码阅读/index.html","0137e90c99b7d92d7ad5ed4ee257e5af"],["/categories/Swift/index.html","85fb183cfe1b01bda96e6e1967528fca"],["/categories/Swift/page/10/index.html","4bcc510cf321e22e1a27ab61fd644f9a"],["/categories/Swift/page/11/index.html","40337e6de042f8ba3a6b64276c2d5476"],["/categories/Swift/page/12/index.html","46c6f71e670cbe7735ab02b1257a9b62"],["/categories/Swift/page/13/index.html","fa0832dbe9a65ee70abeb5e2e47a0268"],["/categories/Swift/page/2/index.html","3b069141970d53798c38e1b0651975ec"],["/categories/Swift/page/3/index.html","ea80724c0675257261308dcd3bb3e2dc"],["/categories/Swift/page/4/index.html","12032bb24120524cd7cdbfb41887a727"],["/categories/Swift/page/5/index.html","91cf70a6e368cee608fefbca04a2ef64"],["/categories/Swift/page/6/index.html","c9d443db6126e40153be514563605659"],["/categories/Swift/page/7/index.html","3023cf81444d4327443856b169c02d80"],["/categories/Swift/page/8/index.html","f359d760e69cdf2667ab3a4a7b558a0a"],["/categories/Swift/page/9/index.html","e99c50d2b2c82aebc929c97d08a38e50"],["/categories/Swift5-2/index.html","e13ec9cd44c688513680b5edfa1cdd55"],["/categories/SwiftLint/index.html","7d3ec865c2291e0822e99554be1b76f5"],["/categories/SwiftUI/index.html","b08bd70e8e92d84d6ea5458063e202c9"],["/categories/UICollectionView/index.html","731901988671778f37b7fd45a12bc234"],["/categories/UIImagePickerController/index.html","4d1ae3f14a97621ff6b445fca501c6db"],["/categories/UIKit/index.html","7df7efcbd25ec6e595349dbca7060977"],["/categories/UIKit/page/2/index.html","28d38abad0a1a17d4e51447f618fe08f"],["/categories/UIKit/page/3/index.html","6bd4d26af8ffda71a1c10b4e980de633"],["/categories/UIKit/page/4/index.html","e91ecacd748d22f21719f70493193dd2"],["/categories/UIKit/page/5/index.html","615060696b89ecc08599a50963e3f6a9"],["/categories/UITableView/index.html","44ff6fef45e20f8ee4f61803fbf23c2e"],["/categories/Ubuntu18-04/index.html","f19fcf5f3744c896e4acee73a6e96c9c"],["/categories/Ubuntu软件源/index.html","17868a40f478ea08f53f15e67637837a"],["/categories/Uniquely-identifying-views/index.html","b174841587632fe344ab223cdf8773a4"],["/categories/VIPER/index.html","f00c2a7803dab65e9e6c63a8dac29d98"],["/categories/Vapor-4-0/index.html","8bcbbde946d836a00578edf185573187"],["/categories/Vapor4-0/index.html","86dfb094dbff25ba5110be2b92779937"],["/categories/Xcode/index.html","a370d9ef3e50264c286647f8941f8f57"],["/categories/appleOS-Networking/index.html","ad5af0e2be45c041a726f192cb99b742"],["/categories/bugly/index.html","0c9e58c33c03b0684509224da5f4ebfe"],["/categories/enum/index.html","7afde16db090d467e3293235cc04e6fd"],["/categories/git/index.html","caad90816ee0887e75ef839e02db6b42"],["/categories/iCloud/index.html","301a8d11e4070d25f9393205d4ffc45d"],["/categories/iOS/index.html","1a69ce9cea1fc96e4d13c0ff1f074fae"],["/categories/iOS/page/10/index.html","ee95951797ce63458a8793756f60b4f0"],["/categories/iOS/page/11/index.html","a833875cf80d9da379fa715cde907898"],["/categories/iOS/page/12/index.html","2124eccd3517d2187291570fbc1b8466"],["/categories/iOS/page/13/index.html","d386be0d165e4bdafad71d2af075d258"],["/categories/iOS/page/2/index.html","077d65d7de052a2093ddaf03daa58469"],["/categories/iOS/page/3/index.html","e1026650cd4f93b7b63574e435601a1b"],["/categories/iOS/page/4/index.html","5ad8748bcf529a43d88b3553bceddfb0"],["/categories/iOS/page/5/index.html","1ee4a8ac9b600504458d7baa1fe811e6"],["/categories/iOS/page/6/index.html","925b9647a8b96ef860a7608588a89194"],["/categories/iOS/page/7/index.html","33b09824ea764266e7185d1f0cace740"],["/categories/iOS/page/8/index.html","0646515e14e7a6ff2517b106204ef316"],["/categories/iOS/page/9/index.html","0b858bd96ad63bec8ee438b2bb223db4"],["/categories/iOS面试题/index.html","500523f5efa0eaa5d5bfbf0b7a355796"],["/categories/index.html","37339cb0c718272826e1479c98d7c0f8"],["/categories/random/index.html","18442081f40ff91411da4f145568ff5d"],["/categories/三方类库/index.html","f79be67586e19cb026e1f2cbaac1beeb"],["/categories/函数式编程/index.html","6de9ca835ca0840b579c2133ecd2d61a"],["/categories/子类化样式/index.html","1ff4a39deee51cec50ffd6ff8b3a9653"],["/categories/开发记录/index.html","ee90134bd3fcc03332437f3ecf7de60f"],["/categories/技术支持/index.html","67231101d5f3611b1f201ecb00b758a9"],["/categories/架构设计/index.html","b3cf4ceb31362d7da6e2003c8556a4b5"],["/categories/测试/index.html","d232a069102ebeb57b3a6c090c76190d"],["/categories/用户体验/index.html","043939be6cd352374b46527cdb67467c"],["/categories/用户协议与隐私政策/index.html","5f27cb01dfa6f610828ea3646ce7b4d9"],["/categories/设计模式/index.html","f3fff11bef9e848db43fb015e590c5bb"],["/categories/设计模式/page/2/index.html","7980eac12ed379dbd3f9233b83100c69"],["/categories/设计模式/page/3/index.html","7b4b12d91e881ab31b0c9d4136e06026"],["/css/main.css","e7f55e595bb58749f00047f0a279074e"],["/hello-world/index.html","b2bfc03a10f577efd89951020cadedb5"],["/iOS VIPER架构深入实践/index.html","c1fea6ef36a6d278ca3fac7a5b71f58f"],["/iOS 自定义视图，输入表单和错误提示/index.html","ce8b28d5364f30b0b3f2af7c977e3039"],["/iOS如何使用iCloud文档？/index.html","0863a4c4d5fed061d70d33b7527f3d65"],["/iOS子类化样式/index.html","0052206d7e03f500b741a784d899392d"],["/iOS开发记录<一>/index.html","e050b04c95b729d524f304af7080d7f1"],["/iOS自动化布局编程/index.html","c45372dea3e93c5f40558ca5297b0be5"],["/iOS自定义转场(By Swift)/index.html","a7c1286bbe11a3c4ae50734bb43889f3"],["/iOS项目架构：使用VIPER/index.html","2e5abc5c9b85c0c641d44f33fbcc3e6e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","68dbd5466cc48df509747cccd7c6279b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","41ab9eba683baf811fa3d9aaedcbdfd9"],["/page/11/index.html","6cf46e41f01b0cf153fa6579af259798"],["/page/12/index.html","ce5d7b2ada9b8ce23aeefbff84057866"],["/page/13/index.html","23a1a04b97b3acf8208d9b4726f2b9db"],["/page/14/index.html","88b88fbe38da4dc0f47b08cf9f0dbc7b"],["/page/15/index.html","3223352dd83f9e7c0e79d973ca1bf7e8"],["/page/2/index.html","ff0a9d4ac877812cb25d1c1032a2b1b9"],["/page/3/index.html","02db841fe952fb9aab28d0d65dce5620"],["/page/4/index.html","043898bd483e14ff0bf9e30c8c6d81fd"],["/page/5/index.html","9472a7c520e4e3db3d77761ab5215b87"],["/page/6/index.html","9268a27af4323fe10649453a762c6136"],["/page/7/index.html","90656124fae79ac1e77efa852b9a9b28"],["/page/8/index.html","dab6e750e591c84ee6f3b23defa6e3e4"],["/page/9/index.html","c23612378d02002418a2f8c8a2b541e2"],["/schedule/index.html","6d7247aec734bc7e8c5266812175c12f"],["/storyAppPrivacy/index.html","5df5b9554d9ee59e8067fd67443598b7"],["/sw-register.js","db14943cbb58268ed78201b6fa337767"],["/tags/Advanced-Classes/index.html","2731c7102bd96ae58300d8fc093e5013"],["/tags/Advanced-Swift/index.html","9c7a02408f1c31fa26588ed9d705a542"],["/tags/Advanced-Swift/page/2/index.html","54a1e3c5da67b47ed067b9931d8dfb73"],["/tags/App-Architecture/index.html","5f662f376554ace53f26aa95478f4c91"],["/tags/Array/index.html","37c279588cf5dd12dd6c75d5b6560946"],["/tags/Arrays-Dictionaries-Sets/index.html","44b0449ad9b8db1b9149a1b67f46aedd"],["/tags/Authentication/index.html","e09d4208a597dd12ad5ed302955e9285"],["/tags/Build-in-Collections/index.html","adb8276939dc7b547a1453e18e0fd664"],["/tags/Building-Your-Own-Types/index.html","9036a01fc0df5e60f07973b02010be74"],["/tags/CMS/index.html","4411b1cb38080b66c949e54f39a48236"],["/tags/Classes/index.html","fae67dde96b18ede12432e4163409470"],["/tags/Codable-protocol/index.html","67c35b38c962516b578049fdc02ce877"],["/tags/Collection-Iteration-with-Closures/index.html","a9cc705f399fea45b8dd28a149374b22"],["/tags/Collection-Protocols/index.html","34dd95489aa7d6a646e3e374377b76f4"],["/tags/Collection-Types/index.html","51a7a65c0fd222c5a30731f6ea979ee7"],["/tags/Collection/index.html","fb775672f86af0697159e123cd11e47d"],["/tags/Collections/index.html","96238fd00e105723e7e72ce59904914b"],["/tags/Combine-framework/index.html","7bbd493a42143815f91dcdd2117cce56"],["/tags/Combine/index.html","a27a87e0940fe72bc7c5966544c2842a"],["/tags/Dependency-Injection/index.html","409310dac3baab99cd02e72e6a66be17"],["/tags/Encoding-Decoding-Types/index.html","10ea50d4baac6f26ebe6120c50f3ba39"],["/tags/Encoding-and-Decoding/index.html","1d72e40e24763775e73492310e4b5c5e"],["/tags/Enumerations/index.html","379c34a85e3ec1396d0fa4f1419b172c"],["/tags/Enums/index.html","25b68c86d42e36944b3765e1c21d325f"],["/tags/Error-Handling/index.html","c4cf4f9bff0d0774a262dd8a31fbfccb"],["/tags/Functions/index.html","ff61f5f39959c0151cd2be796e5154c8"],["/tags/Generics/index.html","514c18c64f9916f57dbc3a2663478ae4"],["/tags/Go/index.html","7ad42abd00f8a93fd020c8cf3d6b4421"],["/tags/Grand-Central-Dispatch/index.html","d8fd62da8ed4f42a2c49ea278d044de5"],["/tags/Hello-Vapor/index.html","31de2ef40fc7ae15975a067fe21662fe"],["/tags/Interoperability/index.html","0e1ca66f2a977600ceac43eb00c8ddde"],["/tags/Introduction/index.html","f28acbe3e2158913cd1ffefda580f034"],["/tags/Leaf/index.html","7c1f1e53e7fa2ee0547175c00c1c7156"],["/tags/Methods/index.html","5f0d4e9d18e6b24b0d9cae914a07320b"],["/tags/Modules-And-Hooks/index.html","e6636985d75ee5a57e4226c471c248b7"],["/tags/Optionals/index.html","f823a426286438341065f37855ec8d66"],["/tags/Promises/index.html","11ecc69a449df9a7de1cd7d90920025c"],["/tags/Properties/index.html","d568c8064ad8c8b4e1cd54565d60b9a7"],["/tags/Protocols/index.html","db88686cf8f80645f5d2edc33d1b35c5"],["/tags/Result-Type/index.html","2000a6b76e9a0803b6c22e4640d90fa2"],["/tags/RxSwift/index.html","7c9c2dafc626800e30bba41d3429f8c2"],["/tags/Server/index.html","4c28121cd42e6aad38560650bf24c6cd"],["/tags/Session/index.html","b51bbc7ede574421f3ae54919a755dcc"],["/tags/Strings/index.html","6c9d85243dc3654366171c9b741d074d"],["/tags/Structs-and-Classes/index.html","353d99b773cf416c3070bae888df041e"],["/tags/Structures/index.html","421072aeceb6f29169753acc6f157ed2"],["/tags/Swift-5-0/index.html","cae37da7606034ed0591768ec8d2b43d"],["/tags/Swift-5-0/page/2/index.html","a6b5260f52c541187f57c30fc33e9de6"],["/tags/Swift-5-0/page/3/index.html","37ff79d700dfd2e058e9816f38d7aa98"],["/tags/Swift-5-0/page/4/index.html","ee98c90a88f45463695f13625b584d3d"],["/tags/Swift-5-0/page/5/index.html","1f23294a771ba81d665fa82edd1ab089"],["/tags/Swift-Apprentice/index.html","24ef46aa5ceb375d79106b50fc64feae"],["/tags/Swift-Apprentice/page/2/index.html","e1d83e68d7b77429427ee0d90b341a5b"],["/tags/Swift-Apprentice/page/3/index.html","1893f44cd25cf1fc5fbfe5d1992b158a"],["/tags/Swift-Package-Manager/index.html","b3a293efa6845fc700cb6ada63ddd9bd"],["/tags/Swift-源码阅读/index.html","52fd58c677432e4ed61bdb3b70e4cc30"],["/tags/Swift/index.html","7fa2d292a6d3ce62357b47487d94fdc0"],["/tags/Swift/page/10/index.html","809ddffc5ed4828324dbb3fb92874913"],["/tags/Swift/page/11/index.html","3a5197c180821415756c7fdf63ccf312"],["/tags/Swift/page/12/index.html","b3dc5575e64ced5541e40b5f773a3b71"],["/tags/Swift/page/13/index.html","badc9d78f0882fbdd559e49424938b3a"],["/tags/Swift/page/2/index.html","d439d14eb4ac113e1fd962ec74a79ba1"],["/tags/Swift/page/3/index.html","d24e46ed36c022d7fa4d615874969a3e"],["/tags/Swift/page/4/index.html","dd549782acb20b54b9585b02f9e1dc6a"],["/tags/Swift/page/5/index.html","8460ff18ef6ba1a196030d0c37e574ec"],["/tags/Swift/page/6/index.html","946d75593eb060cbec11ea9c247a18e4"],["/tags/Swift/page/7/index.html","6a55ae33308fafc6a620b65832f5f65d"],["/tags/Swift/page/8/index.html","c519bf9e084a1e95896576f4a6939cf4"],["/tags/Swift/page/9/index.html","87376a5cfce12e0fbb5af750c96677c6"],["/tags/SwiftLint/index.html","9f2d0a6667539eb8f7284d5fa6ab4b2d"],["/tags/SwiftUI/index.html","5cd76c85eebdc4c37d3014cb364d6976"],["/tags/UICollectionView/index.html","be84ffe04203795c35425d873652745a"],["/tags/UIColor/index.html","e7855de25e1d320a66bad2db2ab9dadc"],["/tags/UIImagePickerController/index.html","5b20d86836d4303c18f8e9ee3d0d4265"],["/tags/UIKit/index.html","476ad0f81e45218a7442ce3554d297de"],["/tags/UIKit/page/2/index.html","c6acd04075af3a4b1e22af16bf440490"],["/tags/UIKit/page/3/index.html","2306b656f2f1129468cc16a9c05574d2"],["/tags/UIKit/page/4/index.html","3b594b8b84d7e0effaeda3ac01971b34"],["/tags/UIKit/page/5/index.html","c9f14dc2cdcf645b830e6130163c57f1"],["/tags/UITableView/index.html","3dc10d3789633b0957adaf478472d9b5"],["/tags/Ubuntu/index.html","48ee161d559b3ffebedc6ef907d448fa"],["/tags/Uniquely-identifying-views/index.html","507d500729d20b1dd51300e6f6c1859a"],["/tags/VIPER/index.html","c9d48794731745328b2f60a3b45bb28a"],["/tags/VMware/index.html","ded3ee759faed33237fbc8fbf5946d78"],["/tags/Vapor-4-0/index.html","fbbcba4fc8d11703f99ffaa30e1e2963"],["/tags/Vapor-初探/index.html","2a75dd0fac59883162fba31f93724606"],["/tags/Xcode/index.html","9c08e6f6161a593a95f1c463b0c8415e"],["/tags/appleOS-Networking/index.html","e3d8da9ccf8cd6a496a145e6e90c1354"],["/tags/bugly/index.html","5ec6aa0683764541f6c6aeac7e39441c"],["/tags/enum/index.html","347b0f2ec8f3c4bbc26c10ff5c8577c4"],["/tags/git/index.html","a4740ce728d8003b719cba016033e6de"],["/tags/iCloud/index.html","4de2bd3830da2347bc77c1425943854f"],["/tags/iOS/index.html","994f6f1f378ba71aeff676cd84fed320"],["/tags/iOS/page/10/index.html","9ab3ba75cc3709dab61586aa6022a6c9"],["/tags/iOS/page/11/index.html","5331ff3edfaa1ee55dcc7fb23aa3097b"],["/tags/iOS/page/12/index.html","c1aa8ab6bbd392434fa8315ee4963afe"],["/tags/iOS/page/13/index.html","d773c13ad7c5aa0323f473778d08ab48"],["/tags/iOS/page/2/index.html","0330ccaf9d7236de75208040cdc4f390"],["/tags/iOS/page/3/index.html","5f7034552f85cb5391a53f6ac4a78898"],["/tags/iOS/page/4/index.html","5609462246bddd669b6dda695772b6d4"],["/tags/iOS/page/5/index.html","3cb121909f99af614b0f547db2efb03e"],["/tags/iOS/page/6/index.html","e4571e6a3037a54699e3cdcd3a2cab1a"],["/tags/iOS/page/7/index.html","debdf52e0b20fe18efcdc258673b7d5d"],["/tags/iOS/page/8/index.html","abf1f8e892054de91f5b7d0f5d1aa143"],["/tags/iOS/page/9/index.html","f11b8f3538035cd04ad3c44fb2ee12a5"],["/tags/iOS面试题/index.html","1567fe0683d7948409ff8c955c6aafd9"],["/tags/index.html","942fb6f4830fc64be12325a232122c9f"],["/tags/non-optional/index.html","08b1830054e6aa613db96a11143d13e0"],["/tags/random/index.html","8ba77a8269c8215f394e501c40d01d33"],["/tags/transition/index.html","f89f56f69bb858116cd0c58f1d6f0265"],["/tags/三方类库/index.html","720c66ea0c9a88b9a34b276c0f782ac6"],["/tags/依赖注入设计模式/index.html","af3b43ce5e4ef0501b648871d064daa0"],["/tags/值类型和值语义/index.html","9308bb538471c48dce34a7d12703a52e"],["/tags/内存管理/index.html","d1d51cac71e83998726f0e5651c704da"],["/tags/冒烟测试与回归测试/index.html","1e6ca83d4764c7000620c50aafa5a86d"],["/tags/函数式编程/index.html","f91d4d26ab0bf573a2d0f57dfb787ed1"],["/tags/创建博客数据库/index.html","d1ad28c6e0a8eb418e1500414a99bf34"],["/tags/初始化模式/index.html","e8b231c94746c0222ecaf89d98626a48"],["/tags/单例模式/index.html","e9934e88edd4a166c93ba733e220f44a"],["/tags/原型设计模式/index.html","b25926c3fb1b9d8e6613140c7004838e"],["/tags/命令设计模式/index.html","32acbb3e646f28b2b24b00b34f87659e"],["/tags/基本控制流/index.html","dd8170ff2574a3cac87e573ef118aacf"],["/tags/外观设计模式/index.html","420f9d0cba4891d95f9f070007dfe419"],["/tags/委托设计模式/index.html","b69aa9ca8f1a10c30519a715ee18931d"],["/tags/子类化样式/index.html","d3aec21935e325a37ed607a3e1a71227"],["/tags/对象池设计模式/index.html","f5fa4e72d586327088f6b8363733d71a"],["/tags/工厂方法设计模式/index.html","f197d6120c86571cbc91139e88c03d9a"],["/tags/工厂模式/index.html","be21eb9138238eb7785bcb8bfd7f337c"],["/tags/工厂设计模式/index.html","9cd4ab9418cdb51a88881f8bd135c679"],["/tags/开发记录/index.html","466456dbd140078628ef4570f47ffedf"],["/tags/懒加载模式/index.html","5e1f64243095e291a09212180ce82ad4"],["/tags/技术支持/index.html","3bfe8e1a16b7798873431c0fa878f495"],["/tags/抽象工厂设计模式/index.html","bd5a282710b69b5ced8c42cf80f9ec28"],["/tags/构造函数/index.html","7bc7526834d8e108e001c43fae16d730"],["/tags/架构设计/index.html","422527a4ec591f85211138dbcd706ac6"],["/tags/模式匹配/index.html","19f70ab18f5e88331fd455fb8cbeda2a"],["/tags/生成器模式/index.html","58e96d2e05ad9ecb568ddc40c59a639c"],["/tags/用户体验/index.html","1fd1cf918daac7525500a3a0e09b68b8"],["/tags/用户协议与隐私政策/index.html","699c93a4eb84e17450d1660585a2b6e4"],["/tags/类型与操作/index.html","7f2fea284c8bfc13eea1c61a53f00083"],["/tags/自动化布局/index.html","5df4177bc6d7929e97f8ff8a04fccaef"],["/tags/自定义UIView/index.html","812b447160d648b7c9da323e8ba2b921"],["/tags/自定义转场/index.html","c8aa53062395e9aeac3d4f90f00955dd"],["/tags/自适应布局/index.html","19da0458000e1b218af737148b642787"],["/tags/表达式、变量和常量/index.html","47ccb019e2ed10c795326eeac03e912f"],["/tags/设计模式/index.html","35d0bca9d72687638aab3a492c1243b4"],["/tags/设计模式/page/2/index.html","85e2e80cf4d6229548f78a7fefc0e7de"],["/tags/设计模式/page/3/index.html","2d8b72e0e1761fea7477cd060c1ee8af"],["/tags/访问控制和代码组织/index.html","38451c7368199d3c76bb832f9d191253"],["/tags/运算符，下标和键路径/index.html","d4824eec7d7a034f267633a6401b71bd"],["/tags/迭代器设计模式/index.html","ea6b05163e2a5490c3e90e9ae831f51d"],["/tags/适配器设计模式/index.html","04e78dec510cec47ca1c14f57ee98d3d"],["/tags/错误处理/index.html","5522ef39282d9ebb873c2bf7b5e992da"],["/tags/静态工厂方法/index.html","fd279a83c4e3d47adbd90588a0a2cc16"],["/tags/面向协议编程-OOP/index.html","fec995ff12a5b988b4149e42ef26b017"],["/tags/高级主题/index.html","4a86077e6425f25e15bc848fd057e2ba"],["/tags/高级协议和泛型/index.html","3e245c95824ca926d66edd5a781c4351"],["/tags/高级控制流/index.html","087f9f0a825db453cc63c9be74c805f5"],["/为iOS应用构建输入表单/index.html","e125f223887a9461bd76a9b025271397"],["/产品开发的幕后花絮/index.html","ead7823107edf56ed328fc80084a45bc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","cd8b63cc1457ed3c1fa73c898a6e7d89"],["/冒烟测试与回归测试/index.html","d21856563796b4a935f79c49606272f7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1d74f2ec99e0f6662ba1ff38d27d38ce"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","43174a0249293360e6d7bec2b68f7556"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","984cca73373f697fd447c104faf20a6a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","3ed0bc8653309cb38d0a8f08d45ec479"],["/在Swift中创建自定义集合/index.html","58f69ce2da077a73aed8d81e0cde4aca"],["/在Swift中处理非可选选项/index.html","3ff45ab16c7383d3ae5414e8bf11aae3"],["/在Swift中生成随机数/index.html","0153813bf7f0fdce82b5bc9546b81836"],["/在Swift中重构单例模式用法/index.html","ac0ec077623edc45f9ab0512c4593c7a"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","fd4c98671d6c87de1bc5a8eb566ecb69"],["/如何为VIPER编写服务？/index.html","45429b5631b79fce8a3404bf955c6d24"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c8e9b3faa5cfddc90de7139fe5a84ad3"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f09f24c4313507ce2d928c49c6765202"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2ab4a88fdbd1c9b6643a10047868169e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f7d932998aa2d96da379328cee8955e0"],["/掌握VIPER架构/index.html","c8f3a81a9627c99c05e7180a68efc47a"],["/揭秘 WordPress Hook 系统/index.html","a87c7ef7caa618fe17d5919f55149d25"],["/比较工厂设计模式/index.html","9163cd73071d5147e1f7ff6b4ed2af89"],["/深入了解Swift中的Grand Central Dispatch/index.html","fd88e3cba82b8f1047b9d6977820fb6f"],["/深入研究Swift框架/index.html","44d58e111ffaddc3038f9c3e5f60f417"],["/美豫直聘技术支持/index.html","41964cebd19d02fdbe61942ecc28fa06"],["/美豫直聘用户协议与隐私政策/index.html","dff35b35fb54410865cfe8c59813e391"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b1452d9ecf73ab22b197b83aed787e55"],["/选择Swift而不是Objective-C的5个理由/index.html","788b0573c0eb44133e6f40d1d4effb84"]];
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
