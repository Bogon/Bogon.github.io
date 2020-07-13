/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","08ac81ed3790b79c4fb7b143cda68231"],["/2020年iOS面试题总结(三)/index.html","0e66a1338aa431212d269dd9f2f57a68"],["/2020年iOS面试题总结(二)/index.html","84e4f62d5d2004b2fc48c42b8b8d7023"],["/Advanced Swift系列(一): Swift 简介/index.html","668239c0ea49ab9c80c82d40924e7908"],["/Advanced Swift系列(七): Strings/index.html","e3bd3734416564fc5152390ae6041323"],["/Advanced Swift系列(三):  Optionals/index.html","b94844f9640b3708c2127715856be9b8"],["/Advanced Swift系列(九): Protocols/index.html","065996394f2237fe5b5be367dd00c7b0"],["/Advanced Swift系列(二): Build-in Collections/index.html","51b05228a6fcf2f380fc29b21af45afe"],["/Advanced Swift系列(五): Structs and Classes/index.html","cab940242f4bb65a4b04c2bef86bb3e9"],["/Advanced Swift系列(八): Generics/index.html","0dcec92818fe0696e1ab9c98f06cab6e"],["/Advanced Swift系列(六):  Enums/index.html","c87b1ab055c702a927e9605823285565"],["/Advanced Swift系列(十): Collection Protocols/index.html","4648b52d8626fdc5312b715eaa559877"],["/Advanced Swift系列(十一): Error Handling/index.html","9af4c98ae5eab9a6417be752d59a1652"],["/Advanced Swift系列(十三): Interoperability/index.html","64ff2ca644b0458ef3d2feac6c113dc7"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d9e55d6f11e21734ef5bf49970cd364b"],["/Advanced Swift系列(四):  Functions/index.html","0e1a52360cd5a35a337fcd0772a6cd0c"],["/App Architecture系列(一):  简介/index.html","c29cf24262f1e81ab48fb642d1546184"],["/Functional Swift 初探/index.html","0e2d9177ae56183ceb79c5fd4c6a6129"],["/NSCODER和SWIFT初始化/index.html","1175abf52b0b0bf117d0215cd321a204"],["/Swift 5使用UIImagePickerController拾取图像/index.html","fc1c202e6b90a8bc29f9d02bc6f1d247"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","e23831263bc90803e21576b20f4da3f7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ed187c9e2d0fe2b076cd799e70883c3f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","2707ae293715057724306502b07beccf"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","e3bcd24ccbf8890625b8d6ac5eeacea8"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","802373b4dc488bfe1accc576fcc15a24"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","e4900110af9240c66e487262ad4dcf8f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","a179c5c64ece484cab1408aba01e176d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","46aa01e32a61a5449619d1ad154cc882"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5990791448aa7b3591871299bb851f37"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","15af80d0fd3a911a463bd2987aa50b91"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","9217b3ddc207c09b61555005b326e9b6"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","957357c22c8601b86a6c091396d8f7cd"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","c3ab555829902d21aeeb54ede3c4950b"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","03182b41264ce47c531058a379fd7e2b"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","e12407f4d8ff68043b01c71992009c7d"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c45d46875b5bfbd6b504c908cced099c"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","e3325934769813500c0a6ec308b47938"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","0fceefb75c1c3ebc3011fd4d36abfac3"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d26d1df80dff81a18ba10eb3ebfc678c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","448f62014c7584f3f8172eb5bc7b1587"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","2e6bd7e676a4884d468062518de1c11a"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","c1eff312135736dfb0e1ebfe358a5617"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","a0beceefd768313ec46bf9c922b747b6"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","616caecc1484f1afd64b99326c7778ce"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","858abbec81e9d83adb6400ef31e6e35f"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","60dd26ad283344a681a4e0904d4e7a14"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","946e688a4bc56e50aca6644224055c1b"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","246b62959ca7f8a958df4918c3d9e4fb"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0e7c83ade7b170b886edacc29d0062e6"],["/Swift CompactMap vs flatMap：差异说明/index.html","f485db39edf63cd4cfa28e062967022f"],["/Swift Grand Central Dispatch 深入实践/index.html","5576c0441a8e578ee8ed72645d9b7ef7"],["/Swift Lazy属性初始化/index.html","db69c0b8955e0f7c1978e66bb45e09d9"],["/Swift Promises 初体验/index.html","9436665951705ca6681d846505b5f0cc"],["/Swift Promises 探究/index.html","ca14682de8c063e7971f44e51c481682"],["/Swift UICollectionView使用指南/index.html","4cf03d8ce6314c82811038334aae9c0f"],["/Swift URLSession && Combine framework/index.html","c1b8dba332c10ac4e67c6fda9fee6ea7"],["/Swift 唯一识别的视图/index.html","f836e04ebbd23224d2047acac5f20bf4"],["/Swift 如何学习现代UIKit？/index.html","c657a2629a811cf64c78c57d7e55ee25"],["/Swift 用 compactMap 替换 flatMap/index.html","c8c4a81a99ae362d67382f3950f96af9"],["/Swift 选择和播放视频/index.html","99dd64017a9bca9ebd69b1b6516cf032"],["/Swift中UIColor最佳实践/index.html","e212e20b8183db71fb35045ed5477302"],["/Swift中快速简单的工厂设计模式/index.html","4a5b72e6b58103056f4874f0780137f6"],["/Swift中构造函数与静态工厂方法的比较/index.html","f8485b35903d94c0ece508246917b987"],["/Swift中的UITableView教程/index.html","c1489287799ea63e1e91830e8b09c66f"],["/Swift中的懒加载模式/index.html","278dcd4850dd8692139ea054bec1d48e"],["/Swift中的模块和挂钩/index.html","36f47b45aa50dc7cb3bf2dfa033344a5"],["/Swift使用布局锚点添加约束/index.html","55dda5c48d126d0b6500b437ad856275"],["/Swift依赖注入设计模式/index.html","0f4884a5e037dc5f1d23b250568cc67d"],["/Swift关于Dependency Injection (DI)/index.html","18424091042f17797cfb6979fb04164a"],["/Swift初始化模式/index.html","d3f8553560e2e03c513177ce217bd2eb"],["/Swift单例模式/index.html","cec190a1a8b1f0bd200d4c60f706fa52"],["/Swift原型设计模式/index.html","3fb50fbb9e500149e9417660cc2e0e5c"],["/Swift命令设计模式/index.html","bf40907c7acec5d1155b754612f88de5"],["/Swift外观设计模式/index.html","e4f60763cb001d31159c7738d0101db3"],["/Swift委托设计模式/index.html","4fd4133415f1a06ea019e734fcda5c84"],["/Swift对象池设计模式/index.html","396b0ea33a3a18c44a653f15d8837422"],["/Swift工厂方法设计模式/index.html","d47509837118ab1143f1858dd2f22ba9"],["/Swift带闭包的懒惰初始化/index.html","3a24923614e8ef7557dc9c448f4db89f"],["/Swift抽象工厂设计模式/index.html","e6eaff09560a0d3574fffb3a62ec61f7"],["/Swift掌握iOS自动布局锚点/index.html","5203ecca2d6e6943f5ab0f55d64e6d44"],["/Swift支持旋转的自适应单元格/index.html","8f422df76f658fcc55967241decb7469"],["/Swift枚举值/index.html","50a84adbc768f84d3f2510bfd4976fcd"],["/Swift生成器模式/index.html","562f3f7c4b2b0a63b93d3a6c46f825d3"],["/Swift结合Xib文件自定义UIView/index.html","2eb1a1d000fde35ab95a88d4a2cf1105"],["/Swift编写的20个iOS库(一)/index.html","70c4e68d7f88cb19dc6cb52879573e2f"],["/Swift迭代器设计模式/index.html","b3b54ca146ff4d4961fc0a8cea20cc87"],["/Swift适配器设计模式/index.html","85c75e9f0a3f7105af942f48faee3f59"],["/Swift静态工厂设计模式/index.html","7451ecbe50d0b4200b648e5c6280bfb8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","8b45762dae6e11fbe1cfa11b57438a44"],["/UICollectionView data source and delegates/index.html","8c4d6fce0d634273c293d388ae484bcf"],["/UIKit初始化模式/index.html","5bf91502f8db1c34f980ab5833aebc23"],["/Ubuntu18.04替换国内源/index.html","8b87bc041fdc1a9165772b95af0ed365"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9d7da64b4fe99a02b5938df44b029dba"],["/Vapor系列 (一) :  Vapor 初探/index.html","8d49e90509f21fe2aa5e619d1fd3c1c9"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","aa2114d081e0b0a972aaad6d809d963b"],["/Vapor系列 (二) :  Hello Vapor！/index.html","0f2699d3bfa1b1ee3516e8b04f2a127c"],["/Vapor系列 (五) :  使用session进行authentication/index.html","dc3ccefbef1f3561ce9a3c661d70eaf6"],["/Vapor系列 (四) :  创建博客数据库/index.html","1fd90360cdcdfc94520e76de481e1d0d"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3484cd37740e61b261fde77bee61780c"],["/Xcode扩展/index.html","4fb92e06d1c7a42342635dfa509b93e9"],["/about/index.html","48333071ed909535338364bf814a433d"],["/appleOS的Networking示例/index.html","d9a9a89a75a3c918521ab84e1b8b2456"],["/archives/2020/03/index.html","76d8ba35ace63664b3ce811e85835333"],["/archives/2020/04/index.html","0b9c52c99c89391c17cd101459b10e46"],["/archives/2020/04/page/2/index.html","309b32a601fd9894abe7acb92dcffe4e"],["/archives/2020/04/page/3/index.html","aba8d02a4c6684d86723a6398abebe51"],["/archives/2020/04/page/4/index.html","eb91ed101a99d0955653d840e06e62db"],["/archives/2020/04/page/5/index.html","4d06759b01b3e844dd213aad8e319b21"],["/archives/2020/04/page/6/index.html","5a0149db5b66bb423bafe8a0024c23b4"],["/archives/2020/04/page/7/index.html","76400624a7ec946fea42632cb8834b2c"],["/archives/2020/04/page/8/index.html","fc7e53e52de02520c517586c41783adb"],["/archives/2020/05/index.html","4a4b0f619b5fb07d1c01a59b81d4e7a1"],["/archives/2020/05/page/2/index.html","caef6235265ead32db55c301377b5203"],["/archives/2020/05/page/3/index.html","aa20b5b55b79b193f2dfd1c2c1c5ae2c"],["/archives/2020/05/page/4/index.html","f45d3fcef69733b9d097b76865c3bd7e"],["/archives/2020/05/page/5/index.html","bc8660fec3ad469cce87c72634ee88ad"],["/archives/2020/06/index.html","2bec3b58a32f487f27460e23a6265158"],["/archives/2020/06/page/2/index.html","716cd2912d519b826884b57dc4fcd6f5"],["/archives/2020/index.html","fe65e356117be4f295bf63f0248c666c"],["/archives/2020/page/10/index.html","1f12ddfc20e8b3a2851da91d0bb08180"],["/archives/2020/page/11/index.html","b215c272ba129bdafed8bb64074db114"],["/archives/2020/page/12/index.html","e7f49e03196cc21609a6c605b27209c2"],["/archives/2020/page/13/index.html","77af93cdce3b3989d9e9ccf50f2471a3"],["/archives/2020/page/14/index.html","9141b40ff170d7fa6fa4d630f406a1d0"],["/archives/2020/page/2/index.html","4e5aabcbc553bfe722ef78ce18d916a8"],["/archives/2020/page/3/index.html","037d032e5b2f9050ee44eb0f30bab1dd"],["/archives/2020/page/4/index.html","d1f8876f6d7f54162fdfc5f02c39bc13"],["/archives/2020/page/5/index.html","f51cfae9170637037237d8ed309b84ae"],["/archives/2020/page/6/index.html","9c20ad84cf1c3cbbb5e959fcfc8e9813"],["/archives/2020/page/7/index.html","2ebaf4c036a32f964461aafa3f0a7b2f"],["/archives/2020/page/8/index.html","20b31593f8344813d7143336b30a1bfb"],["/archives/2020/page/9/index.html","dd08f6f9b672c038dffbd79bfcdeb3d5"],["/archives/index.html","30c9f26d54de942f9f5ccd301b23e1b8"],["/archives/page/10/index.html","9eeebac09951c69826f06d0dd8bcefe8"],["/archives/page/11/index.html","01e4cb644b7d2869a36a1991ba2f4774"],["/archives/page/12/index.html","e0ba67374a586ea6b37b3f8c5e9c0357"],["/archives/page/13/index.html","bc359a6abde377ac75bdf145034b9e6e"],["/archives/page/14/index.html","943234251cb0ed6ed8e8432ce8defc63"],["/archives/page/2/index.html","add02b7010e6db91f47fddb173c8a43d"],["/archives/page/3/index.html","29939bd048370341c36e5dfcc252f597"],["/archives/page/4/index.html","20fde865fbe24756e1a3fd6420f2245e"],["/archives/page/5/index.html","5b4b761b3b6ef8e5ade3fda0c592a377"],["/archives/page/6/index.html","f4cd96b57c457e1d431193af3d2408ff"],["/archives/page/7/index.html","094bca72c845189c9e90bd7b645853c8"],["/archives/page/8/index.html","12e69c234b439f71a050a40ceaad1c73"],["/archives/page/9/index.html","1e8c50cb6701eb9d31dcebe2a900ce34"],["/categories/Advanced-Swift/index.html","c9906bb8a56f005702478dd171f526aa"],["/categories/Advanced-Swift/page/2/index.html","ed3034c214c192698183bf79384b1e7a"],["/categories/App-Architecture/index.html","bc34554049351389d7f8a2a7f8d5f959"],["/categories/Codable-protocol/index.html","021302d9434ad47c8ee01dbf91f8d42a"],["/categories/Combine-framework/index.html","6356fac2fa574c80ece255efc8f2a2aa"],["/categories/Combine/index.html","3a84b5c7e09f18a13079edc6097f8dca"],["/categories/Grand-Central-Dispatch/index.html","2b5bc73f83c09036df47c63d97be90d6"],["/categories/Hexo/index.html","1b91fec41de20ad93a2076ab1a29557e"],["/categories/Promises/index.html","a4c68becc03b50fec340fb8e4e399865"],["/categories/Result-Type/index.html","dbaaa3dbec5e2aaeb47cef8374d5fbc7"],["/categories/Server/index.html","e8139830de298c2217fd77b5133cdfe4"],["/categories/Swift-Apprentice/index.html","de1dc5a08c19275755869b36a2842df3"],["/categories/Swift-Apprentice/page/2/index.html","974952ba389ad0d2e834ecb164e766a3"],["/categories/Swift-Apprentice/page/3/index.html","6317e84a7142e5f4fe30d1012968fb9f"],["/categories/Swift/index.html","80b6b6a61d423681fa5609e22171040a"],["/categories/Swift/page/10/index.html","3250e27fb191a532bd59f4256563bf86"],["/categories/Swift/page/11/index.html","49e1feec0b7bd534e8d1c7b11a838fc8"],["/categories/Swift/page/12/index.html","38c3875534349b20834344ea69539aab"],["/categories/Swift/page/13/index.html","772d51c12f323c2b3f00b372b7c491ba"],["/categories/Swift/page/2/index.html","f99c3001844dce777c0e82cb81bc7711"],["/categories/Swift/page/3/index.html","839ff1b322208a8de97af2eb3de8c615"],["/categories/Swift/page/4/index.html","00b5120389f7f199051a4085a5cdee17"],["/categories/Swift/page/5/index.html","4b77ae076e50bc0d9daf2c1dd26e219e"],["/categories/Swift/page/6/index.html","6205b16218d60d04d00f61f3d8ee367f"],["/categories/Swift/page/7/index.html","6bf97d8602c08fb3fd9c6c8ce3b48b59"],["/categories/Swift/page/8/index.html","8b843e4c176b2cc113be663f72e3e6b2"],["/categories/Swift/page/9/index.html","c6846068ecd9d2585a1b5384610d8b05"],["/categories/Swift5-2/index.html","d606cf292603a7d757756873b213f37b"],["/categories/SwiftUI/index.html","30c24f6a47d024808e77d3dd1296c526"],["/categories/UICollectionView/index.html","fade36a80d572dc4e1965e4a7a08b496"],["/categories/UIImagePickerController/index.html","27a822f5fd89bc5847f112b4180e7b85"],["/categories/UIKit/index.html","9ca6a2e1ea9ab7bb8cd546af3f0a3955"],["/categories/UIKit/page/2/index.html","930f910c92832ce537553cf0c0cd5bbd"],["/categories/UIKit/page/3/index.html","446a0304bcddcd007e451183d4fb9a27"],["/categories/UIKit/page/4/index.html","f91de631f5c62f746d7b6722d6de4334"],["/categories/UIKit/page/5/index.html","b2cf1a86e9879e748a66d360736416bc"],["/categories/UITableView/index.html","f6416a24505f750a29749ce9c08ab7a1"],["/categories/Ubuntu18-04/index.html","d1972cf26cd28881fceee1af03e0f98c"],["/categories/Ubuntu软件源/index.html","0b359732523b098f6940135f8e4c8000"],["/categories/Uniquely-identifying-views/index.html","ca2deb56129640a3146278443068b163"],["/categories/VIPER/index.html","bd2942de1181be1402ce44fbe0e0952a"],["/categories/Vapor-4-0/index.html","7b1f224baa7c624aac377437878cf22e"],["/categories/Vapor4-0/index.html","dca731d2bf1632995f8280b277645f92"],["/categories/Xcode/index.html","63e8c279651da7e4ceacf819cc8a557d"],["/categories/appleOS-Networking/index.html","d79d9159e48aa93f9476044dadc34aa5"],["/categories/enum/index.html","7cad0fd6460d2136fa7a5dea11e1ed2a"],["/categories/iCloud/index.html","14cf6ed7ca23db7cac3d86185dd17a28"],["/categories/iOS/index.html","786db8b8628abd742da5f0001c574205"],["/categories/iOS/page/10/index.html","c63219e3fa37d4559e49e5010bda24a8"],["/categories/iOS/page/11/index.html","3d0bf759fecb9918cb03027950caa8ec"],["/categories/iOS/page/12/index.html","91a38c4d9a540002284e249a6ae02abb"],["/categories/iOS/page/13/index.html","9c7be15ceab6c03d9d21fcfbcbad26f5"],["/categories/iOS/page/2/index.html","882f1c842210e2687ddd59ca0a710bd4"],["/categories/iOS/page/3/index.html","298a42866e1ad2c5c7c0657db6869512"],["/categories/iOS/page/4/index.html","aeda75b04f480eaed6199a5a14256688"],["/categories/iOS/page/5/index.html","92f1aad797eca642e9060c671ba45081"],["/categories/iOS/page/6/index.html","5b32797589bde7e16765e9aafa2c6cfd"],["/categories/iOS/page/7/index.html","eb507c7267f99cfa08e87e22b5f52aee"],["/categories/iOS/page/8/index.html","d312934caaa1ce87e12b7ed19aaf1395"],["/categories/iOS/page/9/index.html","2cda800cb2648e49cab6ead87dc2d472"],["/categories/iOS面试题/index.html","36e170f8779a22143fc41e330dfb6f87"],["/categories/index.html","75bf614a7605e66b293a1ceb6effe777"],["/categories/random/index.html","eef203957a81f47af335937b39dd428d"],["/categories/三方类库/index.html","5a1943785a4242dd8fca79895b2291d9"],["/categories/函数式编程/index.html","79902fbb3cd260d6feb8289832c54201"],["/categories/子类化样式/index.html","0cabe92c892753b0f176622a43d9d3b1"],["/categories/架构设计/index.html","036e90714bb622e687bd98b72e72b9c0"],["/categories/用户体验/index.html","ce2d264a56d5178409780afd05d01d0b"],["/categories/用户协议与隐私政策/index.html","afaeec53968a3d05f7dad7af937ba195"],["/categories/设计模式/index.html","103a4a728c406d969cdb1f0d29f68687"],["/categories/设计模式/page/2/index.html","e7b54cc658044268f28ab48ef35042b6"],["/categories/设计模式/page/3/index.html","914f79eee1a9a626989474aac97209d6"],["/css/main.css","9f23926876edf724120b1045b7687bf1"],["/geckoAppPrivacy/index.html","8a8eca3362e4224c675487f99979f1ad"],["/hello-world/index.html","9ad916d8d6928f88b81637eebb0d612c"],["/iOS VIPER架构深入实践/index.html","23c9d5533881e6eba75c78c83897cdaf"],["/iOS 自定义视图，输入表单和错误提示/index.html","cc61f6db504344439589ddf00ea92b4c"],["/iOS如何使用iCloud文档？/index.html","6284104d40ad05fa46df4890135c0f38"],["/iOS子类化样式/index.html","74dd3c73ae0a72f5dd9eb864946507f2"],["/iOS自动化布局编程/index.html","8ea622d4ca385d55e2d5d1c5f1a999f8"],["/iOS自定义转场(By Swift)/index.html","092326bd8376a11fa4bcc74cfdec3162"],["/iOS项目架构：使用VIPER/index.html","87c41a0473f10ce42df5e7aa5c232f55"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","03ebc9150f5598cf2efe097390ee934d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","9a5c9f9e937e43e2caa222090cd6f67b"],["/page/11/index.html","2802cd8cdcbc9536ea5a1841500e0b7b"],["/page/12/index.html","7455ef8541cadd56909723d99857dc22"],["/page/13/index.html","2210d777ac32208e363e771cba174b0c"],["/page/14/index.html","b5a695c83899dae6cca8d9e0ba9e9f26"],["/page/2/index.html","d97cae84ed5d569e751bfc398b427624"],["/page/3/index.html","26310f36a286d7d67a726bc672eb99c4"],["/page/4/index.html","e9dd3792af137384c5e8f685944f93b5"],["/page/5/index.html","7494ca98e513dba11daf28793f492c99"],["/page/6/index.html","0de36e55d63388237ef9177b0da7da50"],["/page/7/index.html","8e7cd32f238a1a8930605b02661521e3"],["/page/8/index.html","c4dae55e8710e7dc4cc6790dabd7626c"],["/page/9/index.html","6e9e6cb6733a675236a928eab95a3f7f"],["/schedule/index.html","30ca9c0f327143528c4d0ab15b54117d"],["/storyAppPrivacy/index.html","919b02a924d84381863de1ac81e3320a"],["/sw-register.js","2fcd0d251ffd768df13190547ce343c4"],["/tags/Advanced-Classes/index.html","6247a1c342ed81b33aeccb0e63687644"],["/tags/Advanced-Swift/index.html","f2456022649f29f38681a97e3c9a83bc"],["/tags/Advanced-Swift/page/2/index.html","a4a148d07f4f6ccb7401ca961f077e42"],["/tags/App-Architecture/index.html","bbf7a3b60ce6fcd63718300f04eef06b"],["/tags/Arrays-Dictionaries-Sets/index.html","7b905fafc09f3ad2fee2dbc0f4b9a478"],["/tags/Authentication/index.html","84b65b3c76fcea2eacae20978897c298"],["/tags/Build-in-Collections/index.html","a024f93a40514a484fe4c85bdc380e4d"],["/tags/Building-Your-Own-Types/index.html","750d4a047ff4a0747007040b19013ef2"],["/tags/CMS/index.html","1d0ff0588ad78f43c2148b0076387a5a"],["/tags/Classes/index.html","99b815dea45ecf54a4ef740268a0f6f4"],["/tags/Codable-protocol/index.html","37e4bb5a382233be9b4ab18473785a01"],["/tags/Collection-Iteration-with-Closures/index.html","ab6dec0cf9d0f7f5380257de52419c19"],["/tags/Collection-Protocols/index.html","135c542cf275ddd3f3775ffc3d26e220"],["/tags/Collection-Types/index.html","0e53f7c6691264a717f77a6bb398efc0"],["/tags/Collection/index.html","895f5deb7a84b21a7fa977cf4f4ec3b3"],["/tags/Collections/index.html","5b6c38c7ec8bf3d8e69122ef2d77590a"],["/tags/Combine-framework/index.html","403c0d38aefcbd63db3b79b4da6b4631"],["/tags/Combine/index.html","15d237bd07c9fe25da6ed954ed575fc2"],["/tags/Dependency-Injection/index.html","d3bc721998982fa73e8d0104fc23a42b"],["/tags/Encoding-Decoding-Types/index.html","b8cc2f84f023c0f5005b8f219b77d5a1"],["/tags/Encoding-and-Decoding/index.html","7de769e4e0527a4ac1d9e165814ca218"],["/tags/Enumerations/index.html","a7c4c272c2bc9c98320542c11ef2d21d"],["/tags/Enums/index.html","6b993dc689202cb851bd488d151bfa85"],["/tags/Error-Handling/index.html","48644469792363b9b930940442316874"],["/tags/Functions/index.html","3d264007432f75822a3c1b0c8d9951a0"],["/tags/Generics/index.html","d08f3137b2af605bc0f4ed33cf573586"],["/tags/Grand-Central-Dispatch/index.html","7be6f0f3c69e7e6f432bdaebf0f1589e"],["/tags/Hello-Vapor/index.html","bb815da533fc2df914a19e3087c3c6b4"],["/tags/Interoperability/index.html","5e5bd6156989f90f2b58c7927bb531d9"],["/tags/Introduction/index.html","0a45d69b2d55b3046f9305d6495ec099"],["/tags/Leaf/index.html","45e2a60a29e62db531c16c6640516ca0"],["/tags/Methods/index.html","20236e0710d7b74745774c2f01873628"],["/tags/Modules-And-Hooks/index.html","f2a32fc50168057491724451428e6d55"],["/tags/Optionals/index.html","d2ccf61e8ed0c8d8787bfdc1b276d6fd"],["/tags/Promises/index.html","c9e89f77f505e837682babb18d956b6b"],["/tags/Properties/index.html","c68e9a8b10002fc5c842dd9da35ae29d"],["/tags/Protocols/index.html","3d4c237c6d255f4ec52924817cdd9c6a"],["/tags/Result-Type/index.html","7ab9de7afbfec372e1e26e1672433b68"],["/tags/Server/index.html","6ed4679ed5072b1c0c14811d698c8bae"],["/tags/Session/index.html","6d48cb70e4edd74f65bee989774cbbb6"],["/tags/Strings/index.html","bd4778be8d92239b6962bba486747577"],["/tags/Structs-and-Classes/index.html","b4813f72aa875ee6ab60dfa6fb4d97c5"],["/tags/Structures/index.html","a3a69d1f3c1bdd05f232051a36d5b338"],["/tags/Swift-5-0/index.html","6a0ff5664470881749f312f73789ce1f"],["/tags/Swift-5-0/page/2/index.html","9f866d075100177e963e8ae51d52dac0"],["/tags/Swift-5-0/page/3/index.html","6081a5d69cb54c3e9d8d5116c8868b44"],["/tags/Swift-5-0/page/4/index.html","1849cf4ee8f1ff2ec3a794e792ecfd17"],["/tags/Swift-5-0/page/5/index.html","4e3479288470584b48e03f50a9eac47a"],["/tags/Swift-Apprentice/index.html","a857a3f452400567235a0b56141fb49d"],["/tags/Swift-Apprentice/page/2/index.html","a0d9c2e2a7cdb6c97117962e5722582f"],["/tags/Swift-Apprentice/page/3/index.html","34e3827237a47ffb49e3e89ea94b36ec"],["/tags/Swift-Package-Manager/index.html","9a0598d9405860be1f570147e1bb9baf"],["/tags/Swift/index.html","bd16eb26a6040d05645fd3984d5334b7"],["/tags/Swift/page/10/index.html","59e27ec97467face1b56e1571ae887c2"],["/tags/Swift/page/11/index.html","f8902b18c8224db9ffa0d506f70d15aa"],["/tags/Swift/page/12/index.html","53f959c45b4ebbff510eb48fa1b7d843"],["/tags/Swift/page/13/index.html","bcc940e059f4da91348c1304c204de3a"],["/tags/Swift/page/2/index.html","28dc8aa82a2dd350783fbe1bb80c75cd"],["/tags/Swift/page/3/index.html","446315d9b4e66881218ba62d99452132"],["/tags/Swift/page/4/index.html","6877369fea9a6dc89a1abf01b46e0cdc"],["/tags/Swift/page/5/index.html","c6328f7478fc04d0d24c8351263f0b57"],["/tags/Swift/page/6/index.html","d8495465be68065d71906bc02254973f"],["/tags/Swift/page/7/index.html","cb9c64fd15128c9144acf3b98d79e275"],["/tags/Swift/page/8/index.html","77b4c473c12978c353b895d6db09ac90"],["/tags/Swift/page/9/index.html","95b41a1512ed8925db088d6d623a9e4a"],["/tags/SwiftUI/index.html","f93b22fa9a2f1f6becae07c5b49284f9"],["/tags/UICollectionView/index.html","4552563d7909973d2c1af1498585e24f"],["/tags/UIColor/index.html","bc78558c18c44b7f27f02b07d903a51b"],["/tags/UIImagePickerController/index.html","ff4467f05f2fc1793fc7bb321cc65ab9"],["/tags/UIKit/index.html","9f0a7fb37a263d7478e87ff3fd0f1a19"],["/tags/UIKit/page/2/index.html","8dbe59d440cbb75c0e02bdc0a05aeb4b"],["/tags/UIKit/page/3/index.html","921936464dfd600a78f768a83b42a484"],["/tags/UIKit/page/4/index.html","5719652e3a3e814ab5cfe3c338777e84"],["/tags/UIKit/page/5/index.html","964ae81ae6e7700744a65820b127e1a0"],["/tags/UITableView/index.html","83ae8a187cb08916366aa7447d8ba153"],["/tags/Ubuntu/index.html","fc9db468a4c9bf70df418b4c183c4681"],["/tags/Uniquely-identifying-views/index.html","9ba36eff82a60fb7f97a9e7efeffa7ee"],["/tags/VIPER/index.html","c98bf9bd75c26c8ef378c334de61bed5"],["/tags/VMware/index.html","1719b8ab4ad82d90c0d560b5d15fd432"],["/tags/Vapor-4-0/index.html","7d3e05ae938f9270e39ca1384bc94c1c"],["/tags/Vapor-初探/index.html","1d14ba0901706029ad4f03cfa162db40"],["/tags/Xcode/index.html","e066a32ea0629c457db6acbe41ead5fe"],["/tags/appleOS-Networking/index.html","dcb73d5de1a0d0c054b0619a8ab57d9b"],["/tags/enum/index.html","935a01f7344c8217d1d60b50ad8c3a46"],["/tags/iCloud/index.html","18988bbf752801f00ac7c5cbafde25a8"],["/tags/iOS/index.html","fcd156790819aefd7c4ab15b9dee0f07"],["/tags/iOS/page/10/index.html","819922f620066314a135bfd32bc0e055"],["/tags/iOS/page/11/index.html","22fb9de1a7b20f4bebf389941b1f031a"],["/tags/iOS/page/12/index.html","24e61af09484518d2f4c5dbc6c7139f9"],["/tags/iOS/page/13/index.html","9decb7004b1edc4156232a6400310592"],["/tags/iOS/page/2/index.html","cdb16f2df9a5c2e1231a23cb6457b7f3"],["/tags/iOS/page/3/index.html","e969d208a3db7be19b83e36284923f4a"],["/tags/iOS/page/4/index.html","8bb838262f54c8fd09af3edda8b6dd22"],["/tags/iOS/page/5/index.html","0a77dc0090d3a643c754a9f3e97412d9"],["/tags/iOS/page/6/index.html","85ed45221c06e1005f8a4f1302c6249e"],["/tags/iOS/page/7/index.html","c8f2b02dc30740ecd7d9472af84b285d"],["/tags/iOS/page/8/index.html","0efb69b03d6d8d819d45bb66d9271b75"],["/tags/iOS/page/9/index.html","eb95b8341c449dc290b47dfd2df17279"],["/tags/iOS面试题/index.html","2ddb41da9c581a2704d17e8263d19b06"],["/tags/index.html","0959ca36e8db58080bca2bb0ff9b8e77"],["/tags/non-optional/index.html","167a28b661461318722b1ee49ab666e6"],["/tags/random/index.html","3824f3e09a499a7689fcf1eb98de2ef6"],["/tags/transition/index.html","4ae4bd9d89c84747684ce9fb25db486c"],["/tags/三方类库/index.html","4a4e83dd628d76d9d03c6ce287608e7a"],["/tags/依赖注入设计模式/index.html","bdda7ebbca44b5c2890b43bf1cf8571b"],["/tags/值类型和值语义/index.html","6b95a7090d2f77c067b279cde47162a4"],["/tags/内存管理/index.html","c5f252677b103a7d79ee7d0117e8b77d"],["/tags/函数式编程/index.html","bdcc3b1a00aff42e941eab549ef514ac"],["/tags/创建博客数据库/index.html","43700ae9653f08c0b142bef01361ec3e"],["/tags/初始化模式/index.html","699ae1d8865bee3eb6ac16f85a3598b0"],["/tags/单例模式/index.html","766306602ed45baa09cfcd1a512b1031"],["/tags/原型设计模式/index.html","eecb85ce1cc688d76fd229d2179024bb"],["/tags/命令设计模式/index.html","e1e7d76a8e307cd01f085db0e924afe4"],["/tags/基本控制流/index.html","bdbb5fa779a51022db558f2e4158635a"],["/tags/外观设计模式/index.html","ee6a54566ea9ce84085720f249fe945d"],["/tags/委托设计模式/index.html","a90e5f36fb41e843b245603c90eb9405"],["/tags/子类化样式/index.html","7884e87b27751ce19cc66ffcb626a266"],["/tags/对象池设计模式/index.html","fae3a6c8c8ebc3fa2433d09f4a57c8c2"],["/tags/工厂方法设计模式/index.html","b4905d3fb5f9cbb54b42eb416dfd464c"],["/tags/工厂模式/index.html","ec1aa9202786aee02ddda6727c124940"],["/tags/工厂设计模式/index.html","a3c4a683215775d8eae2b350a31d2007"],["/tags/懒加载模式/index.html","8e67403ec3c6167a4dc6fda7b1dcf332"],["/tags/抽象工厂设计模式/index.html","a5a98aa333fc0f6a5af3b222661d0b57"],["/tags/构造函数/index.html","ebf6727e33880929f101cd6deef0a342"],["/tags/架构设计/index.html","a28185c1a68f47f007d39096ae582912"],["/tags/模式匹配/index.html","db2bdb56973296d9fca16bab7218f5f5"],["/tags/生成器模式/index.html","ba6a61a9eb7caa98d9ad852840d6f217"],["/tags/用户体验/index.html","bb38e0666058d5d62043f31674f53137"],["/tags/用户协议与隐私政策/index.html","9ac6deb65aaaf50e957e18b02e1536c5"],["/tags/类型与操作/index.html","9fe403282544c72f382f7a9bb0100210"],["/tags/自动化布局/index.html","c479b9d71d592808ab33375f8a586d43"],["/tags/自定义UIView/index.html","768fe7138eb9c963b4523c6be3061c43"],["/tags/自定义转场/index.html","6bce2dca858e24dcdd7a8372c062a561"],["/tags/自适应布局/index.html","ecb65c51f9ec81a455eeed1de10b7591"],["/tags/表达式、变量和常量/index.html","138838b871bef39a505a772a6e7e550c"],["/tags/设计模式/index.html","d745d73257bf9b4dbbc551c835502727"],["/tags/设计模式/page/2/index.html","1fbf44baeeba6e0ee6e7cf0090945286"],["/tags/设计模式/page/3/index.html","d3a46cc0f82aa003110c6257292abc07"],["/tags/访问控制和代码组织/index.html","9a6f00121283d21b0d4c0667d83ea8ef"],["/tags/运算符，下标和键路径/index.html","99b1ce291b2351020978b5ca34d7d518"],["/tags/迭代器设计模式/index.html","b808845697775297591e90c4a7afc51b"],["/tags/适配器设计模式/index.html","143f8e178f8d7f211c9a508425d01bca"],["/tags/错误处理/index.html","8332f6022e15cea24fbb5f0a5fa39026"],["/tags/静态工厂方法/index.html","845f1dc6ecf3a4e77ccb02988e9bd4be"],["/tags/面向协议编程-OOP/index.html","8b7cd376e964b930144fa5b73b6115bd"],["/tags/高级主题/index.html","faffe24d27af44cc99fcafcb6cac273e"],["/tags/高级协议和泛型/index.html","3374f265f9bd7b652942fee92e753076"],["/tags/高级控制流/index.html","24db9b710312200ead05d58f476c6481"],["/zhizhiAppPrivacy/index.html","00e041d8a41e337ca1065f17edf67018"],["/为iOS应用构建输入表单/index.html","5f4e0ec8092175be1843ad786318cdfa"],["/产品开发的幕后花絮/index.html","018de4e200a0b8cd1a25dff6e5b7bc92"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","4b2e8e32733b94534dd11563fa0eed21"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7e500c89f3db83b1acac6dcd7c4f5c6f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","effc01eb84b806c3f92f614b340d2766"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d8dc4ae58704897c8f7763b3730f40df"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","41c9e4157282ad0d122fea842576c838"],["/在Swift中创建自定义集合/index.html","e9e8562289a0df388663f7498273a017"],["/在Swift中处理非可选选项/index.html","56e080da165528ade8fba6e1acc03821"],["/在Swift中生成随机数/index.html","a72cb109cfaa4fbf405ff07f36b6bd7b"],["/在Swift中重构单例模式用法/index.html","bbeaa4f4fdf1720d6acd86da05835099"],["/如何为VIPER编写服务？/index.html","4c2d8de393f87e0cc7777e5493cf2455"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","1b98534df9fe616495a069d072f67467"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","351efadd6252d070ad91b3db297c9753"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","44acc3be8202b0316a1ae1a1f229081c"],["/如何使用VIPER构建SwiftUI Apps？/index.html","720a404b75a84f9a34458cc810c62aad"],["/掌握VIPER架构/index.html","63b7ee51a32ecaa91115103dad670daa"],["/揭秘 WordPress Hook 系统/index.html","f11f9b47204dcf3c16dada04bedfb5c6"],["/比较工厂设计模式/index.html","52385f2a5bd7342079a3cd41e385b7fe"],["/深入了解Swift中的Grand Central Dispatch/index.html","464521cb9f07efb25426dd52b3820cc4"],["/深入研究Swift框架/index.html","1feda0282dd2625dbcc53e438c479f72"],["/适用于iOS开发人员的VIPER最佳实践/index.html","61d0781665a439e287a9bfa6a3a99132"],["/选择Swift而不是Objective-C的5个理由/index.html","3451f2c8ff893669dac2c7e63ae14e08"]];
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
