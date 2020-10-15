/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ccf21c9a73f2a32014e97a1ef62ab8e8"],["/2020年iOS面试题总结(三)/index.html","5897dd06444fe5c66f7b42a58d683e80"],["/2020年iOS面试题总结(二)/index.html","a8a867d8d16a0983b6c0c0a3cb24bb92"],["/Advanced Swift系列(一): Swift 简介/index.html","02ec5eba9b6a5e3a91f1717babc031cd"],["/Advanced Swift系列(七): Strings/index.html","b20319a8fba127946a1707a0b319970f"],["/Advanced Swift系列(三):  Optionals/index.html","ebecfa43faaa64d04a8b4f698fef7efa"],["/Advanced Swift系列(九): Protocols/index.html","269bb2191b1da657f078597af3c37107"],["/Advanced Swift系列(二): Build-in Collections/index.html","ecf8fc2093ec119c41aca519df99e00f"],["/Advanced Swift系列(五): Structs and Classes/index.html","437af03d150873e420cfc8d2a6b3c747"],["/Advanced Swift系列(八): Generics/index.html","000a8c06b0b85cb0f65318f7fadcc3dc"],["/Advanced Swift系列(六):  Enums/index.html","06d129096a17e1a7c67d02ee2527457f"],["/Advanced Swift系列(十): Collection Protocols/index.html","2a410aa2b0f6bd83e18438d34e43b437"],["/Advanced Swift系列(十一): Error Handling/index.html","bd8260acb78422233c85abaa30ed909f"],["/Advanced Swift系列(十三): Interoperability/index.html","3fb0546440af43a31a80c14ac0b58360"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","cc7b45fe01276cea6d5f5f47699a1544"],["/Advanced Swift系列(四):  Functions/index.html","bb6e055a8e7f64e4c8b19e9216f84634"],["/App Architecture系列(一):  简介/index.html","b90106eab7023467c864092433d211f2"],["/Functional Swift 初探/index.html","552d40112b83b375b3fadf311fa26e08"],["/Git 使用小技巧/index.html","c51102a45a768ea7ffd935c8e06462e9"],["/Go 基本语法初探(一)/index.html","ef90577dac338dfff1308068b9c6b4b7"],["/NSCODER和SWIFT初始化/index.html","dc24e60a612977af2b3fcc325e48f0c0"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","4906af4b2b3a0217f8a8dc6a455ed6df"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","76dec166c414e611d83ec718efef04b3"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","f944b874c8e35474582cd838f355e15e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","1f22bddebc6621716c20f7595f714b7e"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","5ff57213abbce9d77a941654bc50078d"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","46303ca9694783f03d738f82c7206602"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","4ddfde99fae3867372399a57092fff14"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","431f6f09e777ae0a9ae7dc486ce6bfcd"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e77654fd56eb868d28b087eee9d0e3ca"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","42996177a58c234fd54c173a54fabefc"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","0e5f7e106c39e8f0ce0dddaed0952e7e"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","bb58f2bf7d2021a976759e2eadc682db"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","7138941d8dab01f447e0a3c5aba02790"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","9ec748e5b764272234bd03dedd6c6db6"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","973f0d34ec55e1f99378e1808599e627"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","7d0a1c24bca0e8baa1b949f2fcd5cc3e"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7c7b49e159ace26929cf53beb956acc9"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","604a5ccf3695f2cc55a5553c29604b89"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","89223239cd491985e3e676bb802bd8cd"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","57790fdd54b94e96b5799e2f8275de6b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","cc42a8346689aa289548f67c87f05d3a"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","7d1fd614243dc2ae191342bab4c5a6d5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","fdabd8ad313ae1c8be1cf7f07522f19b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","1d527ac31703e6103ef7297b9b0d6b2d"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","5ac85d473023348d536505b3e5bde577"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","47934dac6c7da0a2a9deeda81197ce4f"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6f3ea4d636e3458807919efc7147d394"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","a35eb6c64233c152f026dd2fbca87189"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a88576f9f9b906c1a7deecd3e9aff629"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","4d0e29dbc859ef3792273efc657646cd"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","877c81c4e5c5e979017bd23e1cbb8921"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","6837e0e875553611c4ebbc0e33e986a3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b15d30e3f22b41e74aaa9d8580d82a6c"],["/Swift CompactMap vs flatMap：差异说明/index.html","9f3c13538f937ace1844d712f89fea1c"],["/Swift Grand Central Dispatch 深入实践/index.html","134176f4a53a4e369b9f77f23ec7060a"],["/Swift Lazy属性初始化/index.html","8bf668eb211f537e8e568a331001f3f4"],["/Swift Promises 初体验/index.html","7eb4f896157c75cdb4a383051793c5d5"],["/Swift Promises 探究/index.html","5630305884e3a925a38a8bd3fc87a776"],["/Swift UICollectionView使用指南/index.html","cdfe41e32c47fbbf6f31b1cb3f70c7e0"],["/Swift URLSession && Combine framework/index.html","cd0984bb8626bc7c38ee7c42e67b01df"],["/Swift 唯一识别的视图/index.html","b69b2319e1371c277e30f7fc2df3dfc4"],["/Swift 如何学习现代UIKit？/index.html","75fc2a9bcee26bfcd5db5a6fed97a668"],["/Swift 用 compactMap 替换 flatMap/index.html","92c26e20fe4d970c4b1f13954e965dcf"],["/Swift 选择和播放视频/index.html","ae017644f629fda0c773a7c57790e7f1"],["/Swift中UIColor最佳实践/index.html","8e22adc8ceb94d962dd6b4188c1c2b0c"],["/Swift中快速简单的工厂设计模式/index.html","0d29b05242783f1460e93b28e47a37c3"],["/Swift中构造函数与静态工厂方法的比较/index.html","e38bb9527af95f6af20d4f9348ccebeb"],["/Swift中的UITableView教程/index.html","16752a9ff34dce6c9c0b20290c498264"],["/Swift中的懒加载模式/index.html","c8337135fac4b96e6ad6d8f4d312d825"],["/Swift中的模块和挂钩/index.html","9bf6a48ac234f7bf67b34436d926f8df"],["/Swift使用布局锚点添加约束/index.html","03f8576580181ed85d7d99d9ac46cb96"],["/Swift依赖注入设计模式/index.html","ce67ee31cf91a60a0166005c3d1630de"],["/Swift关于Dependency Injection (DI)/index.html","6c48253ed82c3eec4476a18933caf36b"],["/Swift初始化模式/index.html","f63707d23dd755f5affdf4009d9e18e5"],["/Swift单例模式/index.html","88673c3ea9317f40e668e0b0560beaaf"],["/Swift原型设计模式/index.html","7781d719282aff6e22d7b6070554aa55"],["/Swift命令设计模式/index.html","3630768ec7ef08fd871ceed35f0f2002"],["/Swift外观设计模式/index.html","4e09495ea4d86ac5ab4e335fd7961da3"],["/Swift委托设计模式/index.html","6987bdddb51d848f549c19f3a3ce3764"],["/Swift对象池设计模式/index.html","9506b4e394d7c0c78ee69e50f3b2443f"],["/Swift工厂方法设计模式/index.html","6c8b247250f7fc05f0ad8fb6dacb404a"],["/Swift带闭包的懒惰初始化/index.html","63c943d01d5c8a55fc14f937baa509c3"],["/Swift抽象工厂设计模式/index.html","735a7c45a270fd970ac1ba16b361df59"],["/Swift掌握iOS自动布局锚点/index.html","7d8c0d2b0cd6dbda9902236a9d21281e"],["/Swift支持旋转的自适应单元格/index.html","4a10f76a026f50668397ac1d2f4dfc5e"],["/Swift枚举值/index.html","08a481c0bd1996da877908de57f45356"],["/Swift生成器模式/index.html","657674f783d56f42872d81f690a0551a"],["/Swift结合Xib文件自定义UIView/index.html","b57c7db51db8627b65a70195af679a91"],["/Swift编写的20个iOS库(一)/index.html","d5beb1bca4638d978489b91b459ccdc3"],["/Swift迭代器设计模式/index.html","107ee8da4cfefa021c7b5f6a1026e213"],["/Swift适配器设计模式/index.html","de4dc26c24a90b69ad060a36dac181ce"],["/Swift静态工厂设计模式/index.html","1fab6546d07d7002c6dce38b10500ea5"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3530b8dfeedeb458b17981adefedb79e"],["/UICollectionView data source and delegates/index.html","858bbcd7aa4fb691779d39a4cb0a10d2"],["/UIKit初始化模式/index.html","1cb151b10ee8997d637b3820c81eabae"],["/Ubuntu18.04替换国内源/index.html","c31ef1859f0b6983aeda74eca61fa8ba"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","de4a29349abf9c336e42733b67a8963a"],["/Vapor系列 (一) :  Vapor 初探/index.html","0abc5021fbd421f33c4a2f0032a03218"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","6f7283a3514160876171616d12448661"],["/Vapor系列 (二) :  Hello Vapor！/index.html","38bb8bc645dd862341efab2497f9e22f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","af3845b7847f130722e37d19866a3637"],["/Vapor系列 (四) :  创建博客数据库/index.html","62ffb883e7666c61c70f28bf6b890223"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b432be6033022175e57c2bebf4b38a99"],["/Xcode扩展/index.html","b2f84df264fa793c01024f9491e56a26"],["/about/index.html","411d4c167e36a3f8b1b087ac8ff3baeb"],["/appleOS的Networking示例/index.html","f5f24df42786f111062fd65b7ac3f085"],["/archives/2020/03/index.html","cb5703fbde87025c88c59ac09dec1281"],["/archives/2020/04/index.html","aaef1212215a20020aef2c514ed0fd6d"],["/archives/2020/04/page/2/index.html","4f26622b7546dc1214293fdd8bfa365f"],["/archives/2020/04/page/3/index.html","d35508d1a13ee23ad2d249b5e7e725f4"],["/archives/2020/04/page/4/index.html","342c778c0cb532ad5d9218d8e84c6071"],["/archives/2020/04/page/5/index.html","a28d96731c69b5b9a7b30c6bf697bcc2"],["/archives/2020/04/page/6/index.html","2f5f4c2dce816064dba63f9c1982b7e9"],["/archives/2020/04/page/7/index.html","8534f03c50243792f939d65cec15a3cd"],["/archives/2020/04/page/8/index.html","0c737d4405acc51610db875d2fa49680"],["/archives/2020/05/index.html","369806a9870954f7d44e00d016517572"],["/archives/2020/05/page/2/index.html","93f7cdebd7b29470faeb96405d7e4ddf"],["/archives/2020/05/page/3/index.html","1e2add1f95c4b2f18a995f18495ac708"],["/archives/2020/05/page/4/index.html","d27846e1f2e395f3e367bbfe457035ce"],["/archives/2020/05/page/5/index.html","37a974c8186b1d942fad540376fc8c6b"],["/archives/2020/06/index.html","7fe614d95b2d553075a4c273ea05e58e"],["/archives/2020/06/page/2/index.html","498e69423ca0de3d85f43201a9dd7928"],["/archives/2020/08/index.html","92ba34135a1514769b5173adb4891957"],["/archives/2020/09/index.html","207a91c431fa3f0bb3f610f197415284"],["/archives/2020/10/index.html","c8a4a8be965bed647646b4e896aa5203"],["/archives/2020/index.html","e56def594bdb4f1611df09b921527545"],["/archives/2020/page/10/index.html","43a5da2846d1cf54a3b2958f325e2af0"],["/archives/2020/page/11/index.html","f1674bec4324fe82524c1c8cdab03cc4"],["/archives/2020/page/12/index.html","8954f1f51f697295b3b61c707b4ac722"],["/archives/2020/page/13/index.html","12292699cd970e7c03be1c91524da243"],["/archives/2020/page/14/index.html","964a4765256994bcc808a0c0737a7328"],["/archives/2020/page/15/index.html","a2119c58648d24b7f72bbe0fd39c705d"],["/archives/2020/page/2/index.html","c087a31db11b60522c62b5e5f54c99d3"],["/archives/2020/page/3/index.html","8249b1358ee2e7c759c5f678121fb56c"],["/archives/2020/page/4/index.html","d7bee2eec184864ae53d5b21d62c533d"],["/archives/2020/page/5/index.html","6e6c8019cbb0d44b69c2cc3d57640696"],["/archives/2020/page/6/index.html","a5fa3a2c8e2b7f9739172bd9a023fdbd"],["/archives/2020/page/7/index.html","7046a328161a0eda0de85326930fa59d"],["/archives/2020/page/8/index.html","68ec13ff49b56eedbce939ec393d9f82"],["/archives/2020/page/9/index.html","2b0c4fa597272886e97b87c609a82ced"],["/archives/index.html","bd007d59a750e04c044f6f94fe6e1d09"],["/archives/page/10/index.html","96cb2d5efdea04dbdc52a1714ced10cb"],["/archives/page/11/index.html","1f7d030299d84459fae7b5bdc469a471"],["/archives/page/12/index.html","d3146166ae107c7ec7ef34d5c47a1c22"],["/archives/page/13/index.html","7868fa2830c5eb480e2d6680e7f58a67"],["/archives/page/14/index.html","d506bb9a7226c9b60106d8409b5bace8"],["/archives/page/15/index.html","a69b139c523b91011e7e94e67d301ecb"],["/archives/page/2/index.html","7644e86d07b37dcbef71512d16317605"],["/archives/page/3/index.html","e189be75a5410bc7d8576b5184442031"],["/archives/page/4/index.html","8bd7c2a42684b84ad0887b3100d4efad"],["/archives/page/5/index.html","29744226260ad1d2529256b3ab6b2e39"],["/archives/page/6/index.html","3b7794019f28d8f3ba6fc96a4bb239dd"],["/archives/page/7/index.html","685ae317bf194b15d86335509166507e"],["/archives/page/8/index.html","afd5867a3c7a3044454bab4dfa3af570"],["/archives/page/9/index.html","0fb1055649298a0263e14cd412ac4901"],["/bugly 上传dYSM文件小记/index.html","1a4c2fc5856d75c6f29cf1cd49737599"],["/categories/Advanced-Swift/index.html","12fbbc05727529e3433c6b388d191a4d"],["/categories/Advanced-Swift/page/2/index.html","f9cdfa793c537b14971e006c68f8f663"],["/categories/App-Architecture/index.html","d8497428291333ad8fa37dee05f75456"],["/categories/Codable-protocol/index.html","907b940a4adcdf8b097ee68bf817b146"],["/categories/Combine-framework/index.html","51c8ac33c3001ade8bc86ad783d6a8ff"],["/categories/Combine/index.html","73fddababbe4f8396e7c279a2ffabec5"],["/categories/Go/index.html","ace2998d34d6498ff614a2440e2b287c"],["/categories/Grand-Central-Dispatch/index.html","4c800dcb41f63c767df96c52b42c59fe"],["/categories/Hexo/index.html","314c45954a96a0648009f8d9102183e3"],["/categories/Promises/index.html","ce17d3209ac7fa55b488595883f6fddd"],["/categories/Result-Type/index.html","b681b9f82506305cd263ee7dc258abc3"],["/categories/RxSwift/index.html","c03d33ecac8ed8789e1a51f0a2991a5f"],["/categories/Server/index.html","bb2c89d0ee4588c8c19a70f797105ca8"],["/categories/Swift-Apprentice/index.html","3335cf9f5689362e443cc900aefde6ee"],["/categories/Swift-Apprentice/page/2/index.html","f7ce4ac8e47eec1fdf5ca3feb9b1b043"],["/categories/Swift-Apprentice/page/3/index.html","1be3538c220fad000d4b580cf322c6c5"],["/categories/Swift/index.html","98cd7669a0d6a816d72613690e065b46"],["/categories/Swift/page/10/index.html","56aa228a600e13a2b774d426b250b6bb"],["/categories/Swift/page/11/index.html","c24501fc8c1a8923a44e9c9a6e713ed1"],["/categories/Swift/page/12/index.html","2ecc5474a3ed506c458a3f2720f0ea17"],["/categories/Swift/page/13/index.html","f6e8b795a8b2db750dd1929559770e80"],["/categories/Swift/page/2/index.html","65504664fdceeec7eb8870b2f293e60a"],["/categories/Swift/page/3/index.html","4ebdc7a2de09cb3eb40c62103c195cb6"],["/categories/Swift/page/4/index.html","84c8cfcddaf17f8e4ba7b532d41a7ba0"],["/categories/Swift/page/5/index.html","220a37b5c1d63a7e9a33e35266f4c41a"],["/categories/Swift/page/6/index.html","3fc0817de835d28d355b8259840ef501"],["/categories/Swift/page/7/index.html","c63ec35afa9fdc78b7ed50827737fa24"],["/categories/Swift/page/8/index.html","df37407b510e80cc04ec555a51389318"],["/categories/Swift/page/9/index.html","35947946a67be15742f4342ed7d3d86e"],["/categories/Swift5-2/index.html","8d850063f47296ecbfcceaad62ffde40"],["/categories/SwiftUI/index.html","fcbc3431df8de1135cd35199a1b17f31"],["/categories/UICollectionView/index.html","afc89b85b13d355c69eeb1018d3e7f68"],["/categories/UIImagePickerController/index.html","9b00cdc5af58736e877b992846fa1bc3"],["/categories/UIKit/index.html","bd6df909ecc182e3fd68edb8fc851f8f"],["/categories/UIKit/page/2/index.html","681aa63b09ab7ebde15aef47c0bc71b1"],["/categories/UIKit/page/3/index.html","9236662aff318cbd2ed549d543550088"],["/categories/UIKit/page/4/index.html","1b707184fe07419afa7d90cd5e1f8595"],["/categories/UIKit/page/5/index.html","8b061eb23e68f5f5186881d0168bea17"],["/categories/UITableView/index.html","79594beb230fa969b5e1ccd186c82072"],["/categories/Ubuntu18-04/index.html","81cdbfbb65ecc1d4635e80a5c780922e"],["/categories/Ubuntu软件源/index.html","77f8cd916f179174bb6afb20b8011233"],["/categories/Uniquely-identifying-views/index.html","8ace3d4e7cf03091349987590b1b4ad1"],["/categories/VIPER/index.html","5204c9bd2eca9642194730d8fb1a3166"],["/categories/Vapor-4-0/index.html","e97358c013e50c0dee16d94a08a4b280"],["/categories/Vapor4-0/index.html","6d8a493fce2198033426f1e985d27a10"],["/categories/Xcode/index.html","d4b94203e1de3f0d9ad1a917bffe0d45"],["/categories/appleOS-Networking/index.html","9ec318faa64f9c8e9f800c74016a97d9"],["/categories/bugly/index.html","999f22d3cebc9772df330eb25079cbc3"],["/categories/enum/index.html","8e4d4a69b10d90ae43412e481a7a1d08"],["/categories/git/index.html","ff62772c7babb969ee1b605d29f0dbd3"],["/categories/iCloud/index.html","75ce6a5def7239af298e8b30984d8010"],["/categories/iOS/index.html","82823a5fac62aa6527880c75af4895e9"],["/categories/iOS/page/10/index.html","589f6a2e33b0748a7bea3320bc516a7d"],["/categories/iOS/page/11/index.html","337863753df5b986911c981de060f179"],["/categories/iOS/page/12/index.html","a13cdd81e21c2330ab9c7b9e1f2bfe18"],["/categories/iOS/page/13/index.html","9195fdfbe394c8fecf40258e1e7fd713"],["/categories/iOS/page/2/index.html","99f64edf8bad4937fbf37988522a89e0"],["/categories/iOS/page/3/index.html","22f815e2462ff9ed8508369ce61c5020"],["/categories/iOS/page/4/index.html","bc7034d0f0304aa9b84ce56a6731d6b1"],["/categories/iOS/page/5/index.html","6db553bec66343dc9014d9111cb6cf98"],["/categories/iOS/page/6/index.html","f2f50acb4d5af05fcbe1dc6c8c9150a2"],["/categories/iOS/page/7/index.html","1e4193a6fcbda3a78c4ea36d8e5e34df"],["/categories/iOS/page/8/index.html","58702434618e09999940b6c2443559c0"],["/categories/iOS/page/9/index.html","0fb4965c8626a97923373339a4d987e8"],["/categories/iOS面试题/index.html","4af0b51e7bf2c460f03700404a1f7109"],["/categories/index.html","7a2e95b80806580a03d82091f67dfc2d"],["/categories/random/index.html","7c2b11bbfbd485884d5b86edf8580596"],["/categories/三方类库/index.html","ac2a2cf19cbc73a0f81cabf3f0c50c87"],["/categories/函数式编程/index.html","29706a53984c99284fc3eebb06f1a8be"],["/categories/子类化样式/index.html","02697440591a8fee64cbe6f498515ab5"],["/categories/开发记录/index.html","67fb22739bb83c9535adef98f6cb02ec"],["/categories/技术支持/index.html","e57aef7a1e5090e5b1d78b408317903a"],["/categories/架构设计/index.html","bed94b62599eb9b4f331f623266a23b0"],["/categories/测试/index.html","09f7a0a2bd6f89c705d0c0081b56b00a"],["/categories/用户体验/index.html","e813b4c7696b41974e9c5ea7ebecd14d"],["/categories/用户协议与隐私政策/index.html","ce419d2dc2bc15307e59107c660af650"],["/categories/设计模式/index.html","2648715f1a053035b905710e147f3cb7"],["/categories/设计模式/page/2/index.html","84ee530d5fea2653b2a84fb9680e3cb8"],["/categories/设计模式/page/3/index.html","d19333fef338decb3107ae13cb32313c"],["/css/main.css","a4e835f2a1d47c29e030ec0fd0467ad9"],["/hello-world/index.html","c9553e13e16666bc872afcf76f7adbd2"],["/iOS VIPER架构深入实践/index.html","be29fbf2b77c51e7274835a2acd478d2"],["/iOS 自定义视图，输入表单和错误提示/index.html","20985ecee0c0f1c3f010fe165b8e75ea"],["/iOS如何使用iCloud文档？/index.html","7d447d59b1c1307a40602d6f7bffd351"],["/iOS子类化样式/index.html","9b6dc846b131025c69e88c24d19d3e82"],["/iOS开发记录<一>/index.html","8a8f89b91a34dd0d36fa057a60902bd3"],["/iOS自动化布局编程/index.html","8ab0916797064026ff6d91065cf54909"],["/iOS自定义转场(By Swift)/index.html","284db437f7b8101a641bb803f11afa26"],["/iOS项目架构：使用VIPER/index.html","bc2da8ab0dbe426a37841ea01b750825"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d65b02140830c94cc4e10ac1d834c94a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","c9574276b26976c18ee08bd8db318ea6"],["/page/11/index.html","daa52ef7a8888b632b9baa08003e540e"],["/page/12/index.html","42a671df2ba728b9df82e1afc0f335be"],["/page/13/index.html","9c221c58de1390a3b09b024023755f1a"],["/page/14/index.html","c9ce6eb3725fb9d54be09819049cef5c"],["/page/15/index.html","507ae3cbd83eff9c926972a1068c07cb"],["/page/2/index.html","608c318c83863245cc741354a575d2f3"],["/page/3/index.html","ff25cdbdb503141c5bbe793c4a7343c7"],["/page/4/index.html","62ed57634a0654a74ef826e793ef6d6e"],["/page/5/index.html","b441d5b4a4d333f8c83dafb49c5cdb0d"],["/page/6/index.html","593a2aa119e3aff12da5dd02bf6b1e2e"],["/page/7/index.html","af225dfbfb9267f383309d63c17314cc"],["/page/8/index.html","a0d17c70db279266ead061b4e5c9cb0d"],["/page/9/index.html","ee108598c41aad983bc9dca196d3ff48"],["/schedule/index.html","ddd83e9d3b33ba18ecf91b9eced2a1fe"],["/storyAppPrivacy/index.html","e40b229700d5c88491d761c3df97d9fc"],["/sw-register.js","ca22fddae012ce44fbf1e11939befebe"],["/tags/Advanced-Classes/index.html","bfcd15d1b8d26629ec68cf8b1740a919"],["/tags/Advanced-Swift/index.html","56e2326a3cceb847d7d0d9014c75a644"],["/tags/Advanced-Swift/page/2/index.html","6819cfcf59af8be9896a9d9ae963bc2c"],["/tags/App-Architecture/index.html","98905f5d65f607ee0feaf3c2ade13a5e"],["/tags/Arrays-Dictionaries-Sets/index.html","9c76a70b1c2efa5d63418e59b5810bc2"],["/tags/Authentication/index.html","266f684773184df5b20e3d644b11004f"],["/tags/Build-in-Collections/index.html","67a3f34db7c775bf245f0d5767d2cefe"],["/tags/Building-Your-Own-Types/index.html","12830072b9545b37bd4dec83c5a54ee3"],["/tags/CMS/index.html","411f1455a433aad31f85be3abacb1e98"],["/tags/Classes/index.html","30fb5af9a06010f0460ff5e313d0303b"],["/tags/Codable-protocol/index.html","2bfc7b2cf3db797e38063959b606dff0"],["/tags/Collection-Iteration-with-Closures/index.html","512a6b69ce90c440e17c6cf4f3bacab1"],["/tags/Collection-Protocols/index.html","4716dabe5dfa6f5619732109b6ef5b64"],["/tags/Collection-Types/index.html","3febe2a423148c6382a1e1b8513c054c"],["/tags/Collection/index.html","b760e453fa865a70653d970cc7b38b4d"],["/tags/Collections/index.html","b44c71532d90c2878a5de3f5b723b7a3"],["/tags/Combine-framework/index.html","10eb562d1ac62b26cd747e24ffa2e867"],["/tags/Combine/index.html","e96779c97d9b04781c93a4b4a4ae6545"],["/tags/Dependency-Injection/index.html","2f392265354da3db42a18aa2ec7f0fda"],["/tags/Encoding-Decoding-Types/index.html","6566975ce46370be7e0091e4ab495b51"],["/tags/Encoding-and-Decoding/index.html","40c3b2e583c467ac3ee48686efa7cf5d"],["/tags/Enumerations/index.html","ab94f14e9b817fa322146c71ba90193a"],["/tags/Enums/index.html","c6a89632f4c5d9ce9b95f0c57d1116f0"],["/tags/Error-Handling/index.html","0856cea0d5680fff7dd647133a9d3424"],["/tags/Functions/index.html","18555ad642ff9f07ab43c171be6daff4"],["/tags/Generics/index.html","f0eb232e8e08f11fe70f808a61c7a421"],["/tags/Go/index.html","0a2f3cca24e080698a0f1d3d19cb347d"],["/tags/Grand-Central-Dispatch/index.html","32aace39a5ad681e3f503f22f005f49c"],["/tags/Hello-Vapor/index.html","877923f21802ca71293b83b384f79f4f"],["/tags/Interoperability/index.html","e8512f5ca087889bf40e3b43c6889535"],["/tags/Introduction/index.html","3ec59c1997a13c6b6f8887cf33e6c167"],["/tags/Leaf/index.html","bd4cf76c6ad05adf840e05bb1d967cbc"],["/tags/Methods/index.html","42bfedec3863c3990f69e0599a17d742"],["/tags/Modules-And-Hooks/index.html","0e8bf45f071e3b720a2e4391d936e3ce"],["/tags/Optionals/index.html","78a9ee6d20e9fcc0e31f4cc715e1e9e5"],["/tags/Promises/index.html","1734746400cc5eaa45b5ce14c6dc720b"],["/tags/Properties/index.html","9c0c141c2d24efa9c234a9ec6f55b501"],["/tags/Protocols/index.html","34a98aadc122e7d8545bed47c9e5744e"],["/tags/Result-Type/index.html","faec277e3354153fac0523d5702e5ff0"],["/tags/RxSwift/index.html","211f1e5b8d4c360a3d7c4a9fc46dd7c8"],["/tags/Server/index.html","f9c022138310ad3acd1ec022521fc914"],["/tags/Session/index.html","5cc97dc32b45197a54bb7a419f0da242"],["/tags/Strings/index.html","8f3340fd09846eb80860e57acf44e4d6"],["/tags/Structs-and-Classes/index.html","a46d6d6d0d5afa12375c40e3e2d43b5b"],["/tags/Structures/index.html","e21029a22bbf39d3608abfe06a33fac3"],["/tags/Swift-5-0/index.html","06bb7c3a831635aa3e656d395bce1468"],["/tags/Swift-5-0/page/2/index.html","9b0bc1a1e98900440897e8cce64b4599"],["/tags/Swift-5-0/page/3/index.html","94009093a80b5baa9c0c8b090f9408b4"],["/tags/Swift-5-0/page/4/index.html","00ef557680e7d158a2e1192833a17266"],["/tags/Swift-5-0/page/5/index.html","f38680399f1e8030de2cb47d144500da"],["/tags/Swift-Apprentice/index.html","e3fe99ecb12d7923a61f1d5b1ab6d3a7"],["/tags/Swift-Apprentice/page/2/index.html","ca532bd9d6f26b7b69846a2bd8c3142f"],["/tags/Swift-Apprentice/page/3/index.html","4c7cb0efae79ba2bcd5d4effab785e62"],["/tags/Swift-Package-Manager/index.html","f4437cee5faf8b7924856789d28f6ee1"],["/tags/Swift/index.html","9c176dd178517566faeffb96f7b70046"],["/tags/Swift/page/10/index.html","2ead05b39e4f02ef5c1dc3b737719075"],["/tags/Swift/page/11/index.html","e7342bd59b784412b3f060218b8b944a"],["/tags/Swift/page/12/index.html","ccd3c5ed3ea6103af3ecf43524f07da1"],["/tags/Swift/page/13/index.html","a6cb1f2b69b3a4445c803689013f40de"],["/tags/Swift/page/2/index.html","2341cf2b989509e503edda36c692ed04"],["/tags/Swift/page/3/index.html","d52cceddff3909d405db7758bd68393b"],["/tags/Swift/page/4/index.html","4d159aa0483de3587ae2266f6032ca3f"],["/tags/Swift/page/5/index.html","8a20a32b8cccd5d87acb121bb5525c9a"],["/tags/Swift/page/6/index.html","5131dd4a013b12937ec4da55bbe73e4d"],["/tags/Swift/page/7/index.html","823e0558ef65aa9289f38e6583693939"],["/tags/Swift/page/8/index.html","62e645884c64e3c590b55b290c287d63"],["/tags/Swift/page/9/index.html","bcd10ab889e6a5137ae2cb8129c14e2d"],["/tags/SwiftUI/index.html","1295b171d8d08f5477e41f8f36bb735c"],["/tags/UICollectionView/index.html","e7ec621e7f31f20c05eb24014ce2619b"],["/tags/UIColor/index.html","4557f609460ce8847a1ae92557eb10d1"],["/tags/UIImagePickerController/index.html","51adebc935a4f7603de19a692111db22"],["/tags/UIKit/index.html","1a8ee40c952083c91cdb3bfc72b2424f"],["/tags/UIKit/page/2/index.html","87ed4d3dc84778632ca21cc06c43ae54"],["/tags/UIKit/page/3/index.html","4736163a95b301823b669f922314b76f"],["/tags/UIKit/page/4/index.html","722c3e25f76e69eddd50e443b717100b"],["/tags/UIKit/page/5/index.html","16b8e93a17ac51da2b1f845579ff9931"],["/tags/UITableView/index.html","a50b13d13d0316d8e1eda07417951015"],["/tags/Ubuntu/index.html","ee592637d928edcb9d3c8fc19a3ab826"],["/tags/Uniquely-identifying-views/index.html","9df5e17c3ed1bee3fc5cf531194349a7"],["/tags/VIPER/index.html","07933e31dd1e9a8c4c2e72da20fa9b0f"],["/tags/VMware/index.html","6855c8a33555c0e12ddf75d8768c9311"],["/tags/Vapor-4-0/index.html","1b712efd12e8199eaf178e5a2ac61472"],["/tags/Vapor-初探/index.html","3149d707031ed36f7093209a58a830dd"],["/tags/Xcode/index.html","e2ea41763d5a035075ae0cb6d0050d11"],["/tags/appleOS-Networking/index.html","2031527d427cf7e2408f0ad6f840a199"],["/tags/bugly/index.html","c13b4f28e2e0534b3feacdf6be5a4458"],["/tags/enum/index.html","9f337a5f38bcac2afbfadcd27a7c5186"],["/tags/git/index.html","344c7c88c1a46102bf69f83bd8c15adc"],["/tags/iCloud/index.html","25f0832c83ab317eb2fd8e6eb420e390"],["/tags/iOS/index.html","57aa1fbe31217e75b8675f97f1bf0291"],["/tags/iOS/page/10/index.html","d3cd6a62f4726ce81bc551298099973b"],["/tags/iOS/page/11/index.html","41892d303018d6a0665a93831388714f"],["/tags/iOS/page/12/index.html","0690a64840bbd880eab986bfc3e8b0d2"],["/tags/iOS/page/13/index.html","3020461cea0a50bedf56f8d94095ba1d"],["/tags/iOS/page/2/index.html","2b0f321bcd1e6856854e6ebb1d8743fa"],["/tags/iOS/page/3/index.html","043abba169439a8b212ddedcb6a7fbef"],["/tags/iOS/page/4/index.html","564d12f48af9d33e3ac90df83f13d50d"],["/tags/iOS/page/5/index.html","b6a948f71b87d1e06c3283362f568b56"],["/tags/iOS/page/6/index.html","e414bef347e94d142bf88d328cf63f12"],["/tags/iOS/page/7/index.html","40b7f4dc1e66315c304482069251101f"],["/tags/iOS/page/8/index.html","ce97add49b62a660995ac855f4bd344f"],["/tags/iOS/page/9/index.html","92bdad416718b66b2944fd2193e4eb83"],["/tags/iOS面试题/index.html","4b1ce2b448e97a9dfba59c0bdb9ed63a"],["/tags/index.html","bb7651947c95313bb3baaa825a0eb157"],["/tags/non-optional/index.html","5172f553234fb09704b8c81e1de60afa"],["/tags/random/index.html","fb8fa17bbaee4b67e90414c8ca52350a"],["/tags/transition/index.html","dc4da2d5d1bb06da51ea288dc7af11d1"],["/tags/三方类库/index.html","f68c796cca0fcf562d19a8d0df56681f"],["/tags/依赖注入设计模式/index.html","802de062957de4a1abb800e1bb1630a2"],["/tags/值类型和值语义/index.html","3e683d2eb389c8e0a4a81c726018eb04"],["/tags/内存管理/index.html","152969a135328b79ce654a06597c6644"],["/tags/冒烟测试与回归测试/index.html","2e688b9fbb1f7c3b656ee117f733911d"],["/tags/函数式编程/index.html","cebdbf3b728b749f2de7b1fd64ef99e8"],["/tags/创建博客数据库/index.html","70fe80c744bbab8993e1bd27e4151ac8"],["/tags/初始化模式/index.html","6630fc5ed04bcb7b91300892a690d8c5"],["/tags/单例模式/index.html","b75dc8228b7bd41d80343e003d55acda"],["/tags/原型设计模式/index.html","95954ca2cd714b160a0a70e84e9cb3da"],["/tags/命令设计模式/index.html","4170efc1c50085d7c86988ac8e17c11c"],["/tags/基本控制流/index.html","9c15591d98964ebcaa3fb302fa100f75"],["/tags/外观设计模式/index.html","26b9c08772a0169ca2d277539bb0e89e"],["/tags/委托设计模式/index.html","941a381e08abc1aacb6388eb35d2d263"],["/tags/子类化样式/index.html","94c723fb12634e4c06a1b951cec78a83"],["/tags/对象池设计模式/index.html","e474c4fb78368afd4ba11fdd7cee7a67"],["/tags/工厂方法设计模式/index.html","c16f7441e78a464de261a94d98744721"],["/tags/工厂模式/index.html","a8a67c1ea99ecdb1ba37af3b64d6a898"],["/tags/工厂设计模式/index.html","6cf06a7ed1bfee784cb970e29b51a8fd"],["/tags/开发记录/index.html","d5951c7775557ceba0f9ab76f791857c"],["/tags/懒加载模式/index.html","2390521df6fb65d69c50775106e69da2"],["/tags/技术支持/index.html","415c7b150cba8d2750463c359fba2884"],["/tags/抽象工厂设计模式/index.html","c5a32fc7d65e67dd0e5909aa5ebcfdad"],["/tags/构造函数/index.html","92d83b0bc755b1d82b0b6ad826445373"],["/tags/架构设计/index.html","fa75707a7a0493e10c867ddb7823d077"],["/tags/模式匹配/index.html","4db4288aa954ffad67520857e7dd09ad"],["/tags/生成器模式/index.html","34cfe70a078b3a4e7b09b5835399f322"],["/tags/用户体验/index.html","6edf374032526754f741dd9429a49365"],["/tags/用户协议与隐私政策/index.html","cb2b1c150a94858d1e5161a7ea707b2c"],["/tags/类型与操作/index.html","b310e2e4aa54552f2b21c64c911eef1d"],["/tags/自动化布局/index.html","dd9751443fb8f9bc401c381cde96370d"],["/tags/自定义UIView/index.html","b8629e44f147b0aa6feba51b880eddb3"],["/tags/自定义转场/index.html","4bf0eb4bded83181a84961519c7724b6"],["/tags/自适应布局/index.html","67fd8764da825edb66f928947b6102d7"],["/tags/表达式、变量和常量/index.html","edfa304632cbfb67ac5266c1934f878c"],["/tags/设计模式/index.html","e93e4c43790ef307570cc1b01b314969"],["/tags/设计模式/page/2/index.html","3aace38dff5060afccc96561ff23ae89"],["/tags/设计模式/page/3/index.html","ae4cfdaeae30882615c4c860cc70a00d"],["/tags/访问控制和代码组织/index.html","0b28d2e800b14699546a5b0306219326"],["/tags/运算符，下标和键路径/index.html","51ef64864019235acd2ea51a99adee1a"],["/tags/迭代器设计模式/index.html","d6ea983aa7af1ddab247f5c91a6fb748"],["/tags/适配器设计模式/index.html","54743af659072754ebb04314ac15972d"],["/tags/错误处理/index.html","62cb31df854a0b63080d0be3ab27df82"],["/tags/静态工厂方法/index.html","f578e79c370f5998b375347a56b2e8ee"],["/tags/面向协议编程-OOP/index.html","40cba3d3e7b7806f692c16e41e43181d"],["/tags/高级主题/index.html","1bf949dde1738568535a161cd80ef425"],["/tags/高级协议和泛型/index.html","585d7efda51922ce0184ece05ae769c7"],["/tags/高级控制流/index.html","13dea00698e5dba8509ba6c1f87cdf25"],["/为iOS应用构建输入表单/index.html","6180824bf5eda98524988e1a9c42c272"],["/产品开发的幕后花絮/index.html","27d08e7918eb9d0d149796a16d2312a0"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","fc21e0e416d9bcac03169f17bd8a166d"],["/冒烟测试与回归测试/index.html","9cb18de1c61fd644aeca6db8e201c24a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","06b659e1c6902bb776ded5fea4270ae1"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","df4ab846b33cfcc18c4a7fea29b51131"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","80fc0f82db2697e47e5d911a05a9b35c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8ab4f844fd9200b3d7ea9887aaa0883e"],["/在Swift中创建自定义集合/index.html","c7e0a976c600294c2868b12ed54c530c"],["/在Swift中处理非可选选项/index.html","f699c006a2400fde8b222d1c256aed1f"],["/在Swift中生成随机数/index.html","4900d89e09a9229728368f129973ff63"],["/在Swift中重构单例模式用法/index.html","41b74eca142e5b3571d8133a1fddb080"],["/天天兼职用户协议与隐私政策/index.html","c089d25b8321ba8855fb41772f0ce998"],["/如何为VIPER编写服务？/index.html","9873f443c92e697893141fec4516b150"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e2bcae18361cdf812085c9e152d9a493"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","66ba9a7c07c9e06c6818a50f194c53ff"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","67e3e178fb251f2660d09f7c04a6d9f9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bc57ed1ad67cc5ff1e9becf86c57ecc6"],["/掌握VIPER架构/index.html","e9c68dbc6309bc55eab41473fcb09991"],["/揭秘 WordPress Hook 系统/index.html","cd3069a385f8be20d307806fb79e6e1c"],["/比较工厂设计模式/index.html","1e8dc14baf96d453d2b5141d13fa2e97"],["/深入了解Swift中的Grand Central Dispatch/index.html","f806f2d9bafbac75b718fe985496a583"],["/深入研究Swift框架/index.html","60f314e64339f02c4dd62a7e37ecfa9c"],["/美豫直聘技术支持/index.html","368f4d7c3b1a33c51ed2b64685808d55"],["/美豫直聘用户协议与隐私政策/index.html","5c106b2c4510d5324304b32e87708505"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3e0ddf470c796b9f7ee4efd9762b6765"],["/选择Swift而不是Objective-C的5个理由/index.html","dc030011f5c8ed93f38cd5fed26fca4d"]];
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
