/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f9e7e95d1a037003e0301a057be6cfae"],["/2020年iOS面试题总结(三)/index.html","3a31689d6352383bbb1bcfb853c9523d"],["/2020年iOS面试题总结(二)/index.html","58afb8fb8d03820533da6e1c0e60bf4e"],["/Advanced Swift系列(一): Swift 简介/index.html","833149f998eacfccb2bc3c6c0a3e63e9"],["/Advanced Swift系列(七): Strings/index.html","827c8800c33b3d0373be75ea8e029437"],["/Advanced Swift系列(三):  Optionals/index.html","6dffa4c7da1fa5fa08a3da3565e45b57"],["/Advanced Swift系列(九): Protocols/index.html","5afb2262b1c72a3d088ad29f5817362b"],["/Advanced Swift系列(二): Build-in Collections/index.html","0e5e97cd9257cea722bb2d946dfca6f7"],["/Advanced Swift系列(五): Structs and Classes/index.html","c7c39ca344d0609a70bf87abf1e03f70"],["/Advanced Swift系列(八): Generics/index.html","1d664a649da7d7448433434cb153e8ac"],["/Advanced Swift系列(六):  Enums/index.html","ede54d56f71c829744595051ab6bf08a"],["/Advanced Swift系列(十): Collection Protocols/index.html","8183fc19127e007657b0087f84f301f8"],["/Advanced Swift系列(十一): Error Handling/index.html","9284080a8cf472a79bf170b3f78fe3cd"],["/Advanced Swift系列(十三): Interoperability/index.html","f6ea6fc81a7f0e0a0eea25452d28bcea"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c2faa55c5e76fb547a862b6082c4f4fa"],["/Advanced Swift系列(四):  Functions/index.html","19573b464e2022f5bf3215123a0a4e6a"],["/App Architecture系列(一):  简介/index.html","2c32e007ff4f45da9d43e3cbb719846e"],["/Functional Swift 初探/index.html","f05d33153bedae070a5670a2c978ce86"],["/NSCODER和SWIFT初始化/index.html","532e205cdc08553c7027fcb1e45c6375"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","18ab910fbfa5700e15275893f096a805"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","8f6a9c01a067b13da0dac664342560d2"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","372563ebb8486ace72e57bb63147c0e6"],["/Swift 5使用UIImagePickerController拾取图像/index.html","7e021f2da8d7d3e03fa6afd0c0428a83"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","f5a90c0b14a701e52b2055adbd87d67f"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","36758437d2237106e51eedc70d55b70c"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","41b4683ffdaa8f08f710fd27586a44fe"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","63f4c9b6eb5d7225431fe8cf567ed4e7"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","f58b94a72310f5fc792f352b0c765c9b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","7dbab47e47478ed997c676be28a9cd7a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","fa0dffe27f749e8e40d5f68972224afa"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","eb4a52afa3afabc82710e32646d4b54d"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","0a910cf81a0fbf3334b56e21f967e40a"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","975f58b139160f52a591dadef48913f5"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d4f3cd06aa9c7bd2dc852a73fd28795b"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","c6f3b6e5a457d7ed7e18f7f57eb602ed"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","c8aacc5cf28f0d22e75b4502a0290599"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","03e008bc22e36df930c24c62db2c7a39"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","59dc5a2d26665604545fe4023b131b43"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","8fe2024ea018cf40ecbcd77441800658"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","822703121dda1cdc4e81243531f3a0d7"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e8df76c4dcac580d56e343bcfe2f61a7"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","3ea14886d159947185622689024d3bdf"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6ba3e33716022790dd11e78bdf6447f2"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f8b651978235ca8eb06d0844cb218cc7"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7bb3c1c5fd7c030f9520ff49dffafbeb"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6f40da39a754e09ec82c388d51d1139c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","fa24386104942d9bf7a22f71a384d21d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","36bcf8e94d574e7b286bd208ccc75b6c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","0fc63dc8e1481bcd6da0b9126a2a7c38"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","f07b883e2ff4d75150b15bb8fee437a1"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","53d41a07eb762281f53ecb6c491f522c"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","ec00b9d540d73b009a92848b4c034da4"],["/Swift CompactMap vs flatMap：差异说明/index.html","7707a7c5deff3dc553c82bcb783255a0"],["/Swift Grand Central Dispatch 深入实践/index.html","083810e247809a64e11f6dcb40d9db41"],["/Swift Lazy属性初始化/index.html","98cabf7bad0584f6bbe2491deedc4709"],["/Swift Promises 初体验/index.html","2512db096bf415e4fc836b9b1f56046a"],["/Swift Promises 探究/index.html","14aef344c69b9c21e46c6429eee2edc2"],["/Swift UICollectionView使用指南/index.html","bd813e1499f7094bbd850cd750cd8bb1"],["/Swift URLSession && Combine framework/index.html","486ef73017857a8ad1f7110d66bf4626"],["/Swift 唯一识别的视图/index.html","7579a617daca30bc53d98912c2dd8b78"],["/Swift 如何学习现代UIKit？/index.html","3cedf702c8b584c26060b48ca72a5c7e"],["/Swift 用 compactMap 替换 flatMap/index.html","8522bac9a82bf7e7ca256ff90e9add5f"],["/Swift 选择和播放视频/index.html","9c01ea5a5c68f3c0ce6c385ddd6f7dfd"],["/Swift中UIColor最佳实践/index.html","744f61bcdd9f5eca8c0b1b721eb7d25c"],["/Swift中快速简单的工厂设计模式/index.html","0cc20985b22db93974d4f18f45d67fe8"],["/Swift中构造函数与静态工厂方法的比较/index.html","e4d3850c9ce26707a33c13f49d0ea759"],["/Swift中的UITableView教程/index.html","3833c84f9ea6ef6eaf75483cdef73d88"],["/Swift中的懒加载模式/index.html","8323f1c7268d9bc8ff779841c537d175"],["/Swift中的模块和挂钩/index.html","910ea2cac23c376e1fd91f39196f937b"],["/Swift使用布局锚点添加约束/index.html","cd80aec0a0906748257e0bd7eb57850d"],["/Swift依赖注入设计模式/index.html","2c42d9c436336954328973088571a11a"],["/Swift关于Dependency Injection (DI)/index.html","bca39efb6f8646a12b18d8846750b419"],["/Swift初始化模式/index.html","6b9a1cc8a7eba5a7cc767b6cb7b98445"],["/Swift单例模式/index.html","48c91547ef6ea09847da78b41050bbef"],["/Swift原型设计模式/index.html","b16de0f0bbbab441c7a6c0cd3cd4243c"],["/Swift命令设计模式/index.html","2f9c9307ebc9023b80a3a4de89424ed0"],["/Swift外观设计模式/index.html","746d3e00f4fab1ed9353f35fbe60b6e7"],["/Swift委托设计模式/index.html","ae539a70666fec8aea73e16eec5c5d7a"],["/Swift对象池设计模式/index.html","2330883224982cc4cec1fc7be332295b"],["/Swift工厂方法设计模式/index.html","e09c0a23c6e85efe1f230b7215388882"],["/Swift带闭包的懒惰初始化/index.html","54ad80a8c423dc9224d4523749d559c7"],["/Swift抽象工厂设计模式/index.html","aa608e6a1872801a6e737d7f8e118163"],["/Swift掌握iOS自动布局锚点/index.html","d1390a7911de38e0ba8662eb7329c6db"],["/Swift支持旋转的自适应单元格/index.html","dfafd2cdffa5cae2b672527b4ef12132"],["/Swift枚举值/index.html","8a3ba9222580e97dfee0538ec3a0c1c5"],["/Swift生成器模式/index.html","54687d957f075ffad48b41eda865ff64"],["/Swift结合Xib文件自定义UIView/index.html","8204c5544eb91c9713b2354022da8c57"],["/Swift编写的20个iOS库(一)/index.html","5ba539705a5588a80f3f5d18eefdfd27"],["/Swift迭代器设计模式/index.html","95d2cb2b6875a4bb00fb5fde60fe8ded"],["/Swift适配器设计模式/index.html","ebdfbd4de8720da7c8833995e591cc93"],["/Swift静态工厂设计模式/index.html","436b2454ba7f5e463d2044756cd9c9a8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","fa33c02dd0f3cbf0351383bb9f23ea22"],["/UICollectionView data source and delegates/index.html","35a1051350011881ce75dbf64c9ef4d1"],["/UIKit初始化模式/index.html","66568712c04957f35c528c49739b407c"],["/Ubuntu18.04替换国内源/index.html","ccc8cf080a2baf0831cdb2a341f8576f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","4168c6b1ac47304987eccb8a32e5b74a"],["/Vapor系列 (一) :  Vapor 初探/index.html","3d32f28863b95585ae2b4e0bc76875e9"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b5332732e8797298e2ffa674feb672f5"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2cec49d0e7ff9450976c0a0543b4e799"],["/Vapor系列 (五) :  使用session进行authentication/index.html","99ec012da268410832862c2824686b1d"],["/Vapor系列 (四) :  创建博客数据库/index.html","3e56c172bb4780c0f894aaa6a9f50f46"],["/Vapor系列(六): 徒手撸一个CMS/index.html","8caa168d1ec53d167bd73e4cfc429725"],["/Xcode扩展/index.html","ac37c2eae4a45824f46691cade710fa6"],["/about/index.html","346355559297ad032ae54047ae73fedc"],["/appleOS的Networking示例/index.html","9b3ac7096560ab64caf2ef630d86890f"],["/archives/2020/03/index.html","9d6ec341258696eb9b8aab38c71d88f6"],["/archives/2020/04/index.html","8d67b1e097a3d4717c5737074a60bbdd"],["/archives/2020/04/page/2/index.html","136ccbcf4c1e801fb99c554c7b5e8d49"],["/archives/2020/04/page/3/index.html","8ce53f89c65434457e431f5db00aeb60"],["/archives/2020/04/page/4/index.html","1b26a6e508bc6b906257571985378059"],["/archives/2020/04/page/5/index.html","02794d313cd565b005a6fb0c48b3f82d"],["/archives/2020/04/page/6/index.html","89e444529e998de3ab83f1662ca7492c"],["/archives/2020/04/page/7/index.html","8066372e4a52632e125c8617159af04e"],["/archives/2020/04/page/8/index.html","339ef8538ea8ec8a1e5a17238dc8bc2d"],["/archives/2020/05/index.html","dfb6969af8f20e04e9afcda04532a016"],["/archives/2020/05/page/2/index.html","786fa6f8ba6b5ea0f2f097ad09b31945"],["/archives/2020/05/page/3/index.html","168e70a8d666ffdf91402ea7fe61132a"],["/archives/2020/05/page/4/index.html","ca164d4eac482da7ed9970e2c0ad9939"],["/archives/2020/05/page/5/index.html","0e6dc21ea4060ac2e22e5acd9030595c"],["/archives/2020/06/index.html","2f5eb9141810c8c7b9be7eb098a8716f"],["/archives/2020/06/page/2/index.html","1a58aa921031534f56d9ad133e6618bd"],["/archives/2020/08/index.html","c021e83b22f0fc27ac46556c712260c8"],["/archives/2020/09/index.html","9c7ca6f476980a5be938e16b9f845b72"],["/archives/2020/index.html","3e747a8da7c924e880f88e2fada04972"],["/archives/2020/page/10/index.html","92023ff3d57c7cc488402c9873d05534"],["/archives/2020/page/11/index.html","6ad06aa57a734e6abd775eaf2d3d0f22"],["/archives/2020/page/12/index.html","f7d9e6885e74f83ee65238e8c0801fb0"],["/archives/2020/page/13/index.html","ecf3c2460e608ab5469f05878711a12d"],["/archives/2020/page/14/index.html","cac83e22ef8d2a7a44ef1a8ee5f4561c"],["/archives/2020/page/2/index.html","f8381cfe25ea3819e46c660a9e6a6309"],["/archives/2020/page/3/index.html","a35a9749685e8adf1dcfbe0e0d97cb5f"],["/archives/2020/page/4/index.html","3c1c46b6e7a29dc46bd7e93fc52d46f4"],["/archives/2020/page/5/index.html","201fa1298e3d9cdce606f897c39e812e"],["/archives/2020/page/6/index.html","15867acea10a5280c2e0cb16ca82230f"],["/archives/2020/page/7/index.html","4954d65e8d0c76496488838bc5385874"],["/archives/2020/page/8/index.html","31cb9cb266139304aa300d4e59e3c8da"],["/archives/2020/page/9/index.html","be93e8966abc53cefd26033f172321d6"],["/archives/index.html","737c14b85d85a9c94f48b5e47140ceb5"],["/archives/page/10/index.html","69c1d84ca7364eda28666fb3198c1101"],["/archives/page/11/index.html","701b7c6b5bc983022c0ca3bf4f6895c7"],["/archives/page/12/index.html","14740d1f1669ed24b06700644b6d3898"],["/archives/page/13/index.html","283644e5bd89c3c7861facaf4c7e01c2"],["/archives/page/14/index.html","d1fd6d1731f1940bf53c20c28f01ede8"],["/archives/page/2/index.html","44805798afb2e506ea0e938970803567"],["/archives/page/3/index.html","5d6cce8bade52d7ec0c37df0e03f662e"],["/archives/page/4/index.html","f82bcfcc1bbb4a454730b2d2d9623511"],["/archives/page/5/index.html","80ab542ecf68942cb601d942fdbf0dec"],["/archives/page/6/index.html","af1163850a6577a397b10b7af6764820"],["/archives/page/7/index.html","6ff8c95fc1eb3b2b68568645923583b4"],["/archives/page/8/index.html","e3cc5ef834aaff74b5eb9d2e342e2004"],["/archives/page/9/index.html","9823d170950839c15fbdacfc6411fa9f"],["/categories/Advanced-Swift/index.html","67d23f179cf5fda3eb8114d1937721db"],["/categories/Advanced-Swift/page/2/index.html","4d50adb6db70f2cde5cd6a313fecf430"],["/categories/App-Architecture/index.html","011795dbf0b27b640c705e5d2b2e6395"],["/categories/Codable-protocol/index.html","3880b2490c0165559c0fe953246d0437"],["/categories/Combine-framework/index.html","0a58a73701e81dda938ec57ad5e94613"],["/categories/Combine/index.html","6d7ece55b5fd0e82c69e418e40cf7e54"],["/categories/Grand-Central-Dispatch/index.html","896afae1b57ec03cc7ab70fdb5883387"],["/categories/Hexo/index.html","de003b8d77a4351bc6316aa9641186d9"],["/categories/Promises/index.html","4d71e3d2811432c72986b2e1865c72a4"],["/categories/Result-Type/index.html","192468c306922f07c4d0022536a4e5dc"],["/categories/RxSwift/index.html","57740be70065c8d68841e1d7d0d5199c"],["/categories/Server/index.html","110e83d5780717b094be367d3caa0988"],["/categories/Swift-Apprentice/index.html","b279bc3f778526cf140b55b02fe9f65a"],["/categories/Swift-Apprentice/page/2/index.html","cb3dedd55ffa519187e554814f925023"],["/categories/Swift-Apprentice/page/3/index.html","cbddaeaf3f4ebb9f0d5196f1ef845dba"],["/categories/Swift/index.html","d8fe41be9beb646f53636bcf788afbe4"],["/categories/Swift/page/10/index.html","2abdea8ead0ab777ddbd0628bf82ca65"],["/categories/Swift/page/11/index.html","20909f3d3a912d33a0860c9b09bc15fe"],["/categories/Swift/page/12/index.html","a0ccaa5a1ae5e315d303ba9b7f810992"],["/categories/Swift/page/13/index.html","cad6b6cfbd55f168a71d80ef9f04893d"],["/categories/Swift/page/2/index.html","192ed3e821c25297c9993f19d16b8603"],["/categories/Swift/page/3/index.html","4c04703345ef432816c25f061d6e322c"],["/categories/Swift/page/4/index.html","a2d25059f31b10a6175d4032b06e80fb"],["/categories/Swift/page/5/index.html","4dd80bb2b156c84a226d831dc56bb67d"],["/categories/Swift/page/6/index.html","5a58154b41bbfdfc1b321f0e6d6ca431"],["/categories/Swift/page/7/index.html","47b3e67368dcb9a9b1580e43b32bcbd9"],["/categories/Swift/page/8/index.html","3f792929528d5e7f73842d9aacc97c0a"],["/categories/Swift/page/9/index.html","de330de6213cd273b8e2e4b37c16b4fc"],["/categories/Swift5-2/index.html","66b0bf22b711e7d732d52173d6727588"],["/categories/SwiftUI/index.html","73cd92f6757a7911f83e1ccf923de7d2"],["/categories/UICollectionView/index.html","87b965fb9650045d4ec4b9ffe020af7b"],["/categories/UIImagePickerController/index.html","5a78ec3e6675b8b6ba5879dce463befb"],["/categories/UIKit/index.html","6becce30ba8cd84498f393a9ee7041a3"],["/categories/UIKit/page/2/index.html","6a12d7c520659198d1fe2d712be65c24"],["/categories/UIKit/page/3/index.html","a2f636a22c0fbb0a107ab01606610796"],["/categories/UIKit/page/4/index.html","4bb40832580297faa801b7e3fcf163f7"],["/categories/UIKit/page/5/index.html","ce067761a5050cad8bb734c379f666ea"],["/categories/UITableView/index.html","8484431bbfe91f78367306fcabad99aa"],["/categories/Ubuntu18-04/index.html","7002baf8933ed29c549984f15d4c90a9"],["/categories/Ubuntu软件源/index.html","a319973a9833c941b2bc6cf4a18b9a88"],["/categories/Uniquely-identifying-views/index.html","4c9613203bbbe217763da75b86cc8915"],["/categories/VIPER/index.html","8d2c458fa3c72fe75bab5fd892c3a7ac"],["/categories/Vapor-4-0/index.html","c59e200201c12cab3a8f2926ab3363e6"],["/categories/Vapor4-0/index.html","39ce45b76e6677695dda11ad16949198"],["/categories/Xcode/index.html","3d557e01d70fd8942b48be857eb170b1"],["/categories/appleOS-Networking/index.html","fc2d281cab9c124a982a6fbb5405f85d"],["/categories/enum/index.html","824abeaebe5db585c84a34a5e643dd8e"],["/categories/iCloud/index.html","3da194665838385678a2378e5a3b71d8"],["/categories/iOS/index.html","4fd6610db45983debda58644640d8ee1"],["/categories/iOS/page/10/index.html","62687b373d022b1de8c4932da1b96bae"],["/categories/iOS/page/11/index.html","49c86b1bd1a798904cd9a89c86639103"],["/categories/iOS/page/12/index.html","b9037fbe566fe18a74af79ec2f860296"],["/categories/iOS/page/13/index.html","59d2560ec56ad9426860b4f65fcc3f01"],["/categories/iOS/page/2/index.html","8b1d02d04ff70135466bc455d1d35b45"],["/categories/iOS/page/3/index.html","d792e568bf1785cc759483012754bbf6"],["/categories/iOS/page/4/index.html","b2049ac6b8149d1e7b981d45980a037c"],["/categories/iOS/page/5/index.html","426b1bafb905233142f012f6547428b5"],["/categories/iOS/page/6/index.html","ae640317b7a635a07d87f01c067203bd"],["/categories/iOS/page/7/index.html","124d399770dec8705f1e854b2466023d"],["/categories/iOS/page/8/index.html","0cd21ef71451dde81582936776257728"],["/categories/iOS/page/9/index.html","443661d5805c8da20bd3913bb0008b20"],["/categories/iOS面试题/index.html","2d86fc684e07e5ff3956e755e17ad464"],["/categories/index.html","2c9965f43c2017c79325cfadc40a2c8e"],["/categories/random/index.html","2b7dc6c93a4e83aa912a75569dc4f5a5"],["/categories/三方类库/index.html","48f8d204c4443054fdb34f11716b6ff4"],["/categories/函数式编程/index.html","050c613c275e4341a8f11e3460480843"],["/categories/子类化样式/index.html","026367095fa6226300b1bc7c74ae12da"],["/categories/开发记录/index.html","89448b114f83996f94be4973fe71319b"],["/categories/架构设计/index.html","e1a49d4eaf0dbf00e4f013073e6a76c7"],["/categories/测试/index.html","e03b958cf86004dbad362c12baf438a4"],["/categories/用户体验/index.html","6e93c114d933e1f7381d70036868d275"],["/categories/用户协议与隐私政策/index.html","182f83a571c0dcd4692d4e407c84e3a8"],["/categories/设计模式/index.html","52c352942bb17bdf2d1571563619f35c"],["/categories/设计模式/page/2/index.html","467b82bee68d47ae2270152e410f1a49"],["/categories/设计模式/page/3/index.html","9b2eb4aeea5e79e0029eadafec38f4f0"],["/css/main.css","7412c3b3223dd2cec519a4c995c79be4"],["/hello-world/index.html","4b3f9e0a7e71c2fd74c757705d0abef4"],["/iOS VIPER架构深入实践/index.html","1cc022fa1962782886d4a146e99f02e5"],["/iOS 自定义视图，输入表单和错误提示/index.html","4654f3f94e51027d01e4addd46ded0d7"],["/iOS如何使用iCloud文档？/index.html","4acd103a453d3ac43851ffdba10c734c"],["/iOS子类化样式/index.html","b5c071ea2561a24bf917446c53620f15"],["/iOS开发记录<一>/index.html","bab2d76a8b4df66f1dbcd7f45875c783"],["/iOS自动化布局编程/index.html","bf3f9fe563ab77994f3973d23a615992"],["/iOS自定义转场(By Swift)/index.html","7eb63f8bb94d9ca49f98187b88e054be"],["/iOS项目架构：使用VIPER/index.html","3171293f0c01fcb675ec261c94d55097"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","79a5ceb39553bfd2f05e792b075c2229"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","77efb1daae05d1d51c8249d13602f6a5"],["/page/11/index.html","80106e18f9f760dc80a3e580c2565296"],["/page/12/index.html","07fc2b5a57ab29072333fd85f0cd0cff"],["/page/13/index.html","d79540c299a0f9b88ce5a155eb82479d"],["/page/14/index.html","763aa1b366a9f93d64c807cc306df090"],["/page/2/index.html","cb90c993f33ec499bffcdc61d51531a5"],["/page/3/index.html","e3df6bf3ce626faf8ce8e29a04c71583"],["/page/4/index.html","aa8948dc10c5e91801862cedc27b8671"],["/page/5/index.html","ebe23bdccde3641c0c088acbdaf10951"],["/page/6/index.html","185aa57550c4d678f6444fb455850628"],["/page/7/index.html","511164d5fd613b51a3788126190b620e"],["/page/8/index.html","707d30f5043d00ca6d6a0979e4dee578"],["/page/9/index.html","788c2ac48f8a2669186651fb12e81a4e"],["/schedule/index.html","c78d6562ee6846e2d8df9115e2643517"],["/storyAppPrivacy/index.html","6a4b2c3f245dd6e230eee1e070d60d99"],["/sw-register.js","8736bfe43e664726fc15164c0fd86e74"],["/tags/Advanced-Classes/index.html","fe41d4392efe52347795fef70972ec5e"],["/tags/Advanced-Swift/index.html","57f97f4d01a40cf9c4969520bdfb29a5"],["/tags/Advanced-Swift/page/2/index.html","48bb818b61e53376eb8d2b9dd64d00c7"],["/tags/App-Architecture/index.html","593be2bc66f39b121b908397a31bf665"],["/tags/Arrays-Dictionaries-Sets/index.html","5ee6250c73679e26b70e189a6c421eef"],["/tags/Authentication/index.html","864ef427fae23ba95b1aaf2568b81201"],["/tags/Build-in-Collections/index.html","66d6a1d87a7cf5d612798936f0e68906"],["/tags/Building-Your-Own-Types/index.html","15bfb3812a2b5e7769d48c52c52258af"],["/tags/CMS/index.html","52e55883e4f56450c779ee7ce6a3463c"],["/tags/Classes/index.html","89036a475e5755e375af8c874a10e9fd"],["/tags/Codable-protocol/index.html","c2a8905fb5682eae8ee062ca7b34d9f9"],["/tags/Collection-Iteration-with-Closures/index.html","9f55e76ba2c4b063fff36401dbc5d9e0"],["/tags/Collection-Protocols/index.html","8d0e09156dc431daf4b4fc6ffcb8bb8e"],["/tags/Collection-Types/index.html","1c45b165fe82933abc580d088c1b9153"],["/tags/Collection/index.html","ae7e74e128f471be28178aaa2ab4c9ca"],["/tags/Collections/index.html","15cc215e1cdc14d349151158a7721c95"],["/tags/Combine-framework/index.html","ac83123cdde4b3bde062a4fecd5efe5f"],["/tags/Combine/index.html","9cb7d39a1515b1c1690c390584f608fc"],["/tags/Dependency-Injection/index.html","27385c68d98bb01394b0ad5cf9c4aba6"],["/tags/Encoding-Decoding-Types/index.html","2c73342cb621dbbdbfc79af7bffddceb"],["/tags/Encoding-and-Decoding/index.html","741824b9575e97545e2d4275821d54ff"],["/tags/Enumerations/index.html","40fb2afe757e18ac6fcafa2140b324de"],["/tags/Enums/index.html","99dd454d2c69b73282f2f3d1f50cdf61"],["/tags/Error-Handling/index.html","cfc9ed8f5e062c6bc13ad644bc40f3df"],["/tags/Functions/index.html","0c26ef7174720b16cc486cd2163817c6"],["/tags/Generics/index.html","fc5a13265ec95be1b14af0ea7ad5b078"],["/tags/Grand-Central-Dispatch/index.html","3783d6dbbb78f972c2b91da9619a014f"],["/tags/Hello-Vapor/index.html","e2dcb03152f2c0cdcba7a3efe1e5342e"],["/tags/Interoperability/index.html","0041069f5ed4a314762bd32ae5ffa691"],["/tags/Introduction/index.html","06d569bf0d7dc902d6fa2352fc3ed2c5"],["/tags/Leaf/index.html","33a511b4cf8a998c1beb6df9073320b2"],["/tags/Methods/index.html","8fd166eaf05ecf7084a44c52314962ad"],["/tags/Modules-And-Hooks/index.html","194a86488787992e54779c74aa19e429"],["/tags/Optionals/index.html","4ae84f597218e8ea35e744582fb8ea50"],["/tags/Promises/index.html","dd4ed5b42fbd2c2059697d6794d19c4c"],["/tags/Properties/index.html","54e6545674c1b2c96d94eea24109e3ff"],["/tags/Protocols/index.html","22142addda138c77b2fca78670425697"],["/tags/Result-Type/index.html","fce701c946c9ab7be395bd0cad7f4af3"],["/tags/RxSwift/index.html","f3be7d4410bdb46e0b61438bb2541721"],["/tags/Server/index.html","c2220dcf0686fb3ecd98493e23169eed"],["/tags/Session/index.html","5025044415b161dcc42e1061461a00a0"],["/tags/Strings/index.html","6a5b4ef26901f5518d3310baf36d52e3"],["/tags/Structs-and-Classes/index.html","8438fe22143c2a49c4d4066617fa4208"],["/tags/Structures/index.html","83c9d49f7793cdd2495a65688e4683e5"],["/tags/Swift-5-0/index.html","3bb2ad0faf83d1946c9306e01fd47bd9"],["/tags/Swift-5-0/page/2/index.html","4a95a75fd4a0e94045d6868bd9e73155"],["/tags/Swift-5-0/page/3/index.html","d4bb1426ccdf630a6d802a863d23b14f"],["/tags/Swift-5-0/page/4/index.html","ebafac4ff3205e3dcb79a9f66663dc95"],["/tags/Swift-5-0/page/5/index.html","8f517e1d9672d5194a2fbd88b5e1750f"],["/tags/Swift-Apprentice/index.html","d0008fd02d12f32021aba481d0382634"],["/tags/Swift-Apprentice/page/2/index.html","c48925bb8ba3c054d15e191b98987d0c"],["/tags/Swift-Apprentice/page/3/index.html","e7fda6dc4d9d14b21aecd83e9fe27a1e"],["/tags/Swift-Package-Manager/index.html","7790e700ccf71b415c1bbc64050476f8"],["/tags/Swift/index.html","5aeb85f72211f10be058c08fc35e47f5"],["/tags/Swift/page/10/index.html","7f0bbe505f7f57cc351079e6223b9e1a"],["/tags/Swift/page/11/index.html","c6f9bf6bb1be0c2267309acdd5e55102"],["/tags/Swift/page/12/index.html","3bf5e115c6fa1449cecd5e254ced99ea"],["/tags/Swift/page/13/index.html","9f40ac5f0aeac233a6ca4a68a9184219"],["/tags/Swift/page/2/index.html","cbc607b21929fd251240dc8bed4e21b8"],["/tags/Swift/page/3/index.html","eb5619fc1a7d5fe15884dd15671fbc39"],["/tags/Swift/page/4/index.html","83d8d73ee9ef63101187d48c1f4d3bb9"],["/tags/Swift/page/5/index.html","38691f261578eda753c05b374a38ef7d"],["/tags/Swift/page/6/index.html","30e16bb47a1d84ffff211c8a47c9e33b"],["/tags/Swift/page/7/index.html","3987d42d85ca631c8bf8628a4fc443b4"],["/tags/Swift/page/8/index.html","f91c973786003449581dd505b2482ca0"],["/tags/Swift/page/9/index.html","2347b6a5e60f8045c60f25f55a850270"],["/tags/SwiftUI/index.html","052c66cc0e3e9e61dcbf07fc746ebddc"],["/tags/UICollectionView/index.html","e5fec6f45b7b17b86568a290e0b5ed24"],["/tags/UIColor/index.html","fb1bc179be97acbf9cebcb1cbce9b0ea"],["/tags/UIImagePickerController/index.html","1fa1f238bfb53eb178065e269089d2e7"],["/tags/UIKit/index.html","1f83d14cd31319248604c8e408d5511a"],["/tags/UIKit/page/2/index.html","346c5fe41bb0ec3e76a42d50d8919dc9"],["/tags/UIKit/page/3/index.html","54fdae2aebd6e4529a390424f63a1344"],["/tags/UIKit/page/4/index.html","7601e41dad1eed3d79fcde55c24e416c"],["/tags/UIKit/page/5/index.html","739e000cdd312d393fdde3ad40f89276"],["/tags/UITableView/index.html","f7c3e56f4c8ba40a9d1c51ff1dc0777b"],["/tags/Ubuntu/index.html","d979c8d7d6920409b40e0e73b886b56c"],["/tags/Uniquely-identifying-views/index.html","dd93f3df3fa1b8fa8cd90092bd69c846"],["/tags/VIPER/index.html","3ec45dc637fd402496b1b7c7fadbc2d5"],["/tags/VMware/index.html","281e5211847f54917101bb3f1bfc2d45"],["/tags/Vapor-4-0/index.html","f09b3f62c6c190afed1d7b557fdde072"],["/tags/Vapor-初探/index.html","f4d1647c448b0c684179f02b4cdb45b3"],["/tags/Xcode/index.html","365261a07e2ff3cadf952b2a147fe2e4"],["/tags/appleOS-Networking/index.html","15fad1e08fbc00638383027fda52f369"],["/tags/enum/index.html","67f0c1bb93745b1ee28d650573dc6664"],["/tags/iCloud/index.html","dadf44ea6eb403d6685855515aecef6e"],["/tags/iOS/index.html","875886341f17a2e651987da20427eb49"],["/tags/iOS/page/10/index.html","0a28d740a259674fcf3e203650cb026d"],["/tags/iOS/page/11/index.html","5bf4dafa93b59fe4cd94de066e7e1f29"],["/tags/iOS/page/12/index.html","8f28a8cfb42a46991ce86efe2cfbbcb2"],["/tags/iOS/page/13/index.html","7e5348d693bf4023e9af623a1fd0c56d"],["/tags/iOS/page/2/index.html","f6125206db0cedfcf6f02f6faea42204"],["/tags/iOS/page/3/index.html","cc2a618abcb5897e44b05b4a0e0d98bb"],["/tags/iOS/page/4/index.html","ce8b7d53c662724fcfa1db194267b4b5"],["/tags/iOS/page/5/index.html","0ddb2fe06a6b0f983073d431ef01b1e9"],["/tags/iOS/page/6/index.html","fcec1d484651e18929ae216088b2af01"],["/tags/iOS/page/7/index.html","176c6cf02899c9556be3e4c0ed8174b0"],["/tags/iOS/page/8/index.html","ef6402efb153f95de3690d97a04bca30"],["/tags/iOS/page/9/index.html","5e30d38e68bf284d29e760438f35ac15"],["/tags/iOS面试题/index.html","d6cae0fe02c822ce62a90c58428a479c"],["/tags/index.html","48c2cc95d6f04331defe943bf5d99d1b"],["/tags/non-optional/index.html","a0f2e5a406e28fae7d0249c6166e5696"],["/tags/random/index.html","613d009e526659414823995c5cfc2695"],["/tags/transition/index.html","ef8895fef46963d90dcdba140bc8cfc4"],["/tags/三方类库/index.html","32c677b88824cddc17a61aa9d50acc53"],["/tags/依赖注入设计模式/index.html","7d4aa24ccf9a3d8a50456e56222dabcb"],["/tags/值类型和值语义/index.html","49b8358c1d23db22502fcbd37fea376d"],["/tags/内存管理/index.html","520409b5c64bfcd8a38abd3db10273e0"],["/tags/冒烟测试与回归测试/index.html","f071160a28a043798d159a2b718d0408"],["/tags/函数式编程/index.html","cf894799c1948b2a2002868d8241d7cc"],["/tags/创建博客数据库/index.html","bc478c29d1446685cbe1186fccd4b1c8"],["/tags/初始化模式/index.html","9695542db4708fcb27d6291a776a4101"],["/tags/单例模式/index.html","52b47cc42d5b454db6d3d09a606b842f"],["/tags/原型设计模式/index.html","59c6b98194240e7803cf7238317b19e5"],["/tags/命令设计模式/index.html","04f742325b2aabbcfd1500ac0c6023bb"],["/tags/基本控制流/index.html","7fc84f5f15e0e266005dadc0d33af5aa"],["/tags/外观设计模式/index.html","9ef43577c5f3cba4902d4a75e1203dc8"],["/tags/委托设计模式/index.html","5c9d7ee8916778b7666cf68fa550c43f"],["/tags/子类化样式/index.html","ef018edcd89601048ec9756877e35f7e"],["/tags/对象池设计模式/index.html","11168685f14f5ee9798ac19815f511f2"],["/tags/工厂方法设计模式/index.html","32bb032cbe6a0771b1cf3af3ed1c140d"],["/tags/工厂模式/index.html","be382a84eb203ad2f20513d7823697d0"],["/tags/工厂设计模式/index.html","0dd59abad840683750219d795430f21a"],["/tags/开发记录/index.html","59084354f45a04be1c5afe16ec2ef186"],["/tags/懒加载模式/index.html","35903db895e7667a10a27fbfe526313b"],["/tags/抽象工厂设计模式/index.html","8e6dc027f5a59c31622383d77f1ba6d1"],["/tags/构造函数/index.html","fa6f3687388811da5962f3a20ecc7640"],["/tags/架构设计/index.html","7fcf0651b4baeaa356ee7010e5747b36"],["/tags/模式匹配/index.html","1d281b28c2b4ebac48b33a5b5be42d84"],["/tags/生成器模式/index.html","e78ce61607967252f507cd20fa6135bc"],["/tags/用户体验/index.html","1300e5a03d8558bb1a0949f9ccbe5542"],["/tags/用户协议与隐私政策/index.html","eeb2852f306568efa1a67aa1a82fe153"],["/tags/类型与操作/index.html","fb58cc84c6e25375695499712be35525"],["/tags/自动化布局/index.html","28c9c62dfe7576d14d2971fe173a7c8b"],["/tags/自定义UIView/index.html","eabbfac4e32fa1b63e656f1dcea854a9"],["/tags/自定义转场/index.html","5430d98fb2b88b21ef0a8d9bada496bc"],["/tags/自适应布局/index.html","61a89325641c62fc6f57bb73e00ce564"],["/tags/表达式、变量和常量/index.html","f2f00f32580ee88f98a8ae83534d56c8"],["/tags/设计模式/index.html","2392cc5544e296a9dbd3c4d9492c042f"],["/tags/设计模式/page/2/index.html","eaa5acbbf0c23a5956ef76016eac0842"],["/tags/设计模式/page/3/index.html","3a169307ee1230924f62be941f0d2127"],["/tags/访问控制和代码组织/index.html","289078aa2f3e424e92c902ab4ad13a99"],["/tags/运算符，下标和键路径/index.html","38db0eebeade9213c9319b08ce839f4f"],["/tags/迭代器设计模式/index.html","58d1f12fb3d30fd7ffa395fdf94a5395"],["/tags/适配器设计模式/index.html","fd617f4c1428f3a660fe58fb9a9877ae"],["/tags/错误处理/index.html","ccafb20c95a9925b01c45e575c24d217"],["/tags/静态工厂方法/index.html","12f24ced65c0d630c066da8c7c57e717"],["/tags/面向协议编程-OOP/index.html","1bfc3877d3cd6356b656648657267d17"],["/tags/高级主题/index.html","04e5e877ff53ab6f3442da6292d020ea"],["/tags/高级协议和泛型/index.html","baedebd077e7ebc261fc18bb0e47c4fb"],["/tags/高级控制流/index.html","e0fe900c7cf6727d2e6841da4073dcfc"],["/为iOS应用构建输入表单/index.html","fe72ebc3a4cb61dc890728e2077b6a14"],["/产品开发的幕后花絮/index.html","4bcb3a4f522942ed0873c71b7eb60495"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","7a1cbdb38dba98fffdf3af2e9559289f"],["/冒烟测试与回归测试/index.html","03aae7108bc7ba5759de199ae02196d4"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4098e84de2ff15296fdf2b36c8118498"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9e567abf8d318b665eda97b8039a0baf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","04c4b5c4994d8957adf976f611876acf"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a65972afc5924f4b5bd197e9bad17ded"],["/在Swift中创建自定义集合/index.html","10ed7b063ffb18a00bae54e81bfc405d"],["/在Swift中处理非可选选项/index.html","4fedeb316ae3ae5566b92f779265fba4"],["/在Swift中生成随机数/index.html","78e668add18c222a78f0559a89d201d2"],["/在Swift中重构单例模式用法/index.html","ea9ddd59c184646736c29a213d7dab66"],["/天天兼职用户协议与隐私政策/index.html","35c37d01a3b16acfa723d22b91c2c5b1"],["/如何为VIPER编写服务？/index.html","cb44f2ef4235e442c862201b1916773a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a9c712692feeb40ec1cc55bc123f8c4c"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","737769cc8deeb6413a17664a0ed4c459"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1b6bf71cc9e15c6de6595c1e77dadeac"],["/如何使用VIPER构建SwiftUI Apps？/index.html","31ad993f2191a583aa03a5377fa49c77"],["/掌握VIPER架构/index.html","376701b723f164cbf25cf5d83ea1ce4a"],["/揭秘 WordPress Hook 系统/index.html","5f9c4e1b4ff71961aca5665679cb4aca"],["/比较工厂设计模式/index.html","7db9e4872767e5a9aafdf4b14d11dfb4"],["/深入了解Swift中的Grand Central Dispatch/index.html","76c295b6a0c73722c0f1f6db0997ab12"],["/深入研究Swift框架/index.html","373dab7093befeb0721f03e77d807717"],["/美豫兼职用户协议与隐私政策/index.html","b6618e36b94d72a940ee44eac61fb0bc"],["/适用于iOS开发人员的VIPER最佳实践/index.html","797a9c239db8fba9464f01c10e8ba636"],["/选择Swift而不是Objective-C的5个理由/index.html","5e708889a190c0ecf2bec7c7cb9f0864"]];
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
