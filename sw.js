/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","7ea65df6188532c90eebfacaed5a227b"],["/2020年iOS面试题总结(三)/index.html","087bd727f3e443f1331927fa35274657"],["/2020年iOS面试题总结(二)/index.html","757bb3996672f54ce11c52f270db74d0"],["/Advanced Swift系列(一): Swift 简介/index.html","b532be91e9f93957d79260528e6b1685"],["/Advanced Swift系列(七): Strings/index.html","2aba6a01d362b38ef03f1dc933940ee5"],["/Advanced Swift系列(三):  Optionals/index.html","63838fcd586bcec2b84c0f7e661c8a24"],["/Advanced Swift系列(九): Protocols/index.html","6bf222a68836548fd5ed642cece896d7"],["/Advanced Swift系列(二): Build-in Collections/index.html","597c16c1cc3a5f6c83801c7e5c13fad4"],["/Advanced Swift系列(五): Structs and Classes/index.html","04466eb2f211956397a3cbefc13cf2fc"],["/Advanced Swift系列(八): Generics/index.html","9fb732499af3336400dd59bf1df469a2"],["/Advanced Swift系列(六):  Enums/index.html","bade61c075211a69e76d21c5d5555bcc"],["/Advanced Swift系列(十): Collection Protocols/index.html","54b66f94aadba65dce0d7b51b6f030aa"],["/Advanced Swift系列(十一): Error Handling/index.html","3eca8b59836cedd5409d164e087e0f82"],["/Advanced Swift系列(十三): Interoperability/index.html","e04720a1bed323e61bd24da1dc485278"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a9c831370c3f57f8443aae8aa349c6f5"],["/Advanced Swift系列(四):  Functions/index.html","832c4781213d2e06c229b04f05751a08"],["/App Architecture系列(一):  简介/index.html","784e2bd7d423945a5aaf5f99eede7c40"],["/Functional Swift 初探/index.html","34632da4229c9012f8de806542752dff"],["/Git 使用小技巧/index.html","8fffe8e690520d905ee8666e87322956"],["/Go 基本语法初探(一)/index.html","b42c9f6665d08444fb2beaf3de3c2c47"],["/NSCODER和SWIFT初始化/index.html","f2665d6c124c890055a2dca45d0cd49c"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","168738812e7464b81ee64cd808077a49"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","46602fd391eb6441faa66c58534e1c3d"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","88ec6f2e03bbdafcaa3edef4c781400e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","ffd24fa65102c4221629b836fd134740"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","fe0257c6e913f836d18586f0c045ddad"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","02950958e33f23d72cd21dacaa37bb13"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","9c9a28d5d2dc04616c0a531f4c9fba88"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c596e876b9050677ad17f8cddbd717c6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d62bdfb4b6da85810cc81146c1d0e4d0"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","042532fc1bc9949e19ce80d3337ab80a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","efedda770e4e5fa9b98bc48e8c845870"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d2aac416e9a411c4b2c6ffd787455821"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","88bd48080b03edf68c8e456a87bd8c40"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","dd4500a696b74cf5d450094dbb3bfa80"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","d667b9942c2736329aeea99394a6b9e9"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2bf73d6ad371ba3d45094e896400c4dc"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","66150a6246107ecb544af0d781ffa330"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","0f70b6ac4df059b6e8c5b6453e52d07d"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","08aeb8d1b109b21759ee8429a0ac01b2"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","a678f1b9617c095640b951e968b11161"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","a380072c9a51d943defb039cc2dcb2b4"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","80c85e8262dca7666f35a879be7c294a"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","806e28bb17fb519e60475f51b31cb985"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","18b4a4f6fc7c2149c8ba1e080c40d423"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","17fec110b2a18d8264afa5c38d787466"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","fa0417b79dbfb6080e53bfc2c3a98142"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","731d4e5329ecd4090c421670ce3ec6ff"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","cc1c78186829d2c2e54430311eec3fb5"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","5f0fbacbfac08edebe5c9ee5cc1681d5"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e4404923109bbc18b97c00cb58a9e0bb"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","052c01a47e6fa722a1f156ea5cdc567d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","fcb8ba686bf8a0815f9ffa6d72691ea8"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b51dec2f882c9310afbc5937f0f3baaa"],["/Swift CompactMap vs flatMap：差异说明/index.html","d3b607cda733edc1ed9d5b69cd4f7064"],["/Swift Grand Central Dispatch 深入实践/index.html","57dd50587fbb1240a986eeb5c6199f46"],["/Swift Lazy属性初始化/index.html","8918f012326793148f56639ecd2e4234"],["/Swift Promises 初体验/index.html","fd6339de9d59028ad6daa70ed469bb91"],["/Swift Promises 探究/index.html","2f077072d08a04558904aa1554b43684"],["/Swift UICollectionView使用指南/index.html","6a962dd5c8539384fe893b5d7d98a30e"],["/Swift URLSession && Combine framework/index.html","0811dcc9de3ee295ebb8944ff1a10c3e"],["/Swift 唯一识别的视图/index.html","b9c965216b1c37591fbce7668053d902"],["/Swift 如何学习现代UIKit？/index.html","d612db20a9564312b9cb2f04d4742cbc"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","5abbe8af4b99c4fb88b04c382409007a"],["/Swift 用 compactMap 替换 flatMap/index.html","38557db537defa278c6697734cd1ea8d"],["/Swift 选择和播放视频/index.html","f0065176cba60a7e307d2f402013dc91"],["/Swift中UIColor最佳实践/index.html","4539c75bbd0c692a8d685cd5e1f87c91"],["/Swift中快速简单的工厂设计模式/index.html","318dfd55367dd7cc25db4d3fbecc6f48"],["/Swift中构造函数与静态工厂方法的比较/index.html","caa873f7edc08d8eac18272cee11f5b6"],["/Swift中的UITableView教程/index.html","821bc0b5e57d13c5688a9bc333939a98"],["/Swift中的懒加载模式/index.html","4e8eefc66b54f183d2c89f2e417e4de8"],["/Swift中的模块和挂钩/index.html","eb6832cb31753629ea42a761d3df6aa6"],["/Swift使用布局锚点添加约束/index.html","531d2ae49c03f7dbb71eba5cf0867c89"],["/Swift依赖注入设计模式/index.html","8f14c19d91d90494cdf5c956d2448e50"],["/Swift关于Dependency Injection (DI)/index.html","a4773e53f8234dc1c429cc255a226ad2"],["/Swift初始化模式/index.html","9c65ebdadab4940e85e84294a30ddb11"],["/Swift单例模式/index.html","a9ec6854def9b0ac9a1ab22f77b3f035"],["/Swift原型设计模式/index.html","b7d8aed5106b74d57b2c9dc962f29c5e"],["/Swift命令设计模式/index.html","1635c0973f2c44bbe7f9016d5b93e118"],["/Swift外观设计模式/index.html","f61bc578a11142adfaa21198a33d1e14"],["/Swift委托设计模式/index.html","8231acab402d96c76bb35db28e2c1fbf"],["/Swift对象池设计模式/index.html","12f2213a98333c8ed52946be09c0631b"],["/Swift工厂方法设计模式/index.html","f2bdc4bef4b596caef042a9d7944b026"],["/Swift带闭包的懒惰初始化/index.html","fe15bcfe181107b34dd1176fa8df2bff"],["/Swift抽象工厂设计模式/index.html","1c625dfcaa0cda6763c9fd5695f41bad"],["/Swift掌握iOS自动布局锚点/index.html","09a69aca503025d0bd01fbef5d80b554"],["/Swift支持旋转的自适应单元格/index.html","5a035c2d297abe893ae871995d60093b"],["/Swift枚举值/index.html","44679e08ae1824143c93dd1e66966065"],["/Swift生成器模式/index.html","56ea085b569c22dddb7fc75e73a1fa00"],["/Swift结合Xib文件自定义UIView/index.html","4f2c2292deaf5aec023c87474357986a"],["/Swift编写的20个iOS库(一)/index.html","31ae36f22259d8a0d607278af67e87dc"],["/Swift迭代器设计模式/index.html","41e6008a8d4ca073f63d81616d1285a0"],["/Swift适配器设计模式/index.html","cf05697711338b6a182c3236e1f01ab8"],["/Swift静态工厂设计模式/index.html","b42fe15c09900992e9077fafbb6a2d33"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b8bd8039e744ed986aaf9c39f16425ef"],["/UICollectionView data source and delegates/index.html","dd46a244cfa73879398503922e826199"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","fa2bae06281e46bb4da4b9cefcb0de56"],["/UIKit初始化模式/index.html","cf69ff9acd95c1463caffc9dc29ea47f"],["/Ubuntu18.04替换国内源/index.html","b4e10c8af87ae613e8219cbf3331701a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ab97580f14a640674d53ff146d3146e6"],["/Vapor系列 (一) :  Vapor 初探/index.html","b3bc4b488edf8a339973c8fb450ca109"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","22fab5dac9e6436bc3ad481b0c34fe31"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2596c13f049e8cf19f4b246fcb16bbaa"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b01dca3ac41a76f7069e71ff9043267b"],["/Vapor系列 (四) :  创建博客数据库/index.html","625c42a85532b91ebd0bbbc7e06a1134"],["/Vapor系列(六): 徒手撸一个CMS/index.html","edcd41c333099ac8601effb7838a4e38"],["/Xcode扩展/index.html","edecc6049fbc053d827ea97cab6c7396"],["/about/index.html","46962ea21d7b004cdf7e36dabcea8e38"],["/appleOS的Networking示例/index.html","07089e2cfa6b6152775986f17ee4b98d"],["/archives/2020/03/index.html","06291a3ede1e8a0084e2a087010d6a83"],["/archives/2020/04/index.html","f7096b2d0dd702120d1ee5c93045b3ce"],["/archives/2020/04/page/2/index.html","bcbc5c4e212f3111e5b79b09a94d8fbe"],["/archives/2020/04/page/3/index.html","efef63267f3ea1ebc861602f0a9191b6"],["/archives/2020/04/page/4/index.html","0bbcf3ca56146b1d5bdee292ab4ad1f4"],["/archives/2020/04/page/5/index.html","2aa3940f36a0d48b320fa7dbfb4e93fa"],["/archives/2020/04/page/6/index.html","e5890fd7d6b9751ad5ace15def1b28a6"],["/archives/2020/04/page/7/index.html","4d35c338e8ca534c4331892833ea3761"],["/archives/2020/04/page/8/index.html","0e9aa90aeb133edbcf90b29e16ff6588"],["/archives/2020/05/index.html","97410facaef17cf91fc0da2dcb30133d"],["/archives/2020/05/page/2/index.html","debf379b7bbe63955fbfc35129b64401"],["/archives/2020/05/page/3/index.html","964772ed55b71bceffad070238b4c385"],["/archives/2020/05/page/4/index.html","926c9f6a907c5528798f93fd3de60119"],["/archives/2020/05/page/5/index.html","c87368696fc5f1c7a18cb093a9063569"],["/archives/2020/06/index.html","36a9d289329203103a5b9e86b080f8d3"],["/archives/2020/06/page/2/index.html","7b0cec0f676557720ba56af360131286"],["/archives/2020/08/index.html","1846ab73c4c1ae8eaf6c1da40bea90bc"],["/archives/2020/09/index.html","f0425cadcc5dd67b0a074d7b9d69d808"],["/archives/2020/10/index.html","ce9fa6693a35fad15f8b36572d798ad0"],["/archives/2020/11/index.html","a723710972f19b151462d9a58443e509"],["/archives/2020/12/index.html","472e757b04ceb7a752c93d1bf01b3857"],["/archives/2020/index.html","01c34143a668be741d8a7dc8594d8383"],["/archives/2020/page/10/index.html","a828c39d3d0c91148c42538a8a955898"],["/archives/2020/page/11/index.html","293d591c628c421da1019311580496ea"],["/archives/2020/page/12/index.html","5f34dc516089716a5886b34a94ccae4d"],["/archives/2020/page/13/index.html","7be6a0d79e58490f02512f992668b0bc"],["/archives/2020/page/14/index.html","facdeed227f281bb25113ccc408ccc91"],["/archives/2020/page/15/index.html","0749940ddd0cbea4df753cd4291a26d4"],["/archives/2020/page/2/index.html","00da51971e84ac1e044a0d9b635f5c26"],["/archives/2020/page/3/index.html","259e001e1e4516f7e62a9e846d7c4ec2"],["/archives/2020/page/4/index.html","fcf2ca4b950487b2d9e2dac8b292926c"],["/archives/2020/page/5/index.html","f6c7e49034f6fbb9732d0f2a770932ff"],["/archives/2020/page/6/index.html","22b73b0fec54585d40f8bdb2811d3654"],["/archives/2020/page/7/index.html","74ee752c12b2a39eaf6d42422be5eee7"],["/archives/2020/page/8/index.html","96adbd4d805e21667a9ed1ec993b93b3"],["/archives/2020/page/9/index.html","af66effcf5110ecceff4ae84eb41569f"],["/archives/index.html","a24fd9ecd70deaa158c3fdf62556dfa5"],["/archives/page/10/index.html","ed53e9b15e0567bb92f167c3adab2d8d"],["/archives/page/11/index.html","a25bf697d01962954ed94ec8691ff8ba"],["/archives/page/12/index.html","59b28afa50bd7777925b173e245c9dc3"],["/archives/page/13/index.html","89e6815862850e882a779cc28082a912"],["/archives/page/14/index.html","e5cfc0b039ae76a125d3c344c0f1af71"],["/archives/page/15/index.html","53d5693cb058dd0793358ed3356af097"],["/archives/page/2/index.html","f764bfe5d821fc942745db06539be36f"],["/archives/page/3/index.html","54d23899e685c55e11eb3c0ac27c4153"],["/archives/page/4/index.html","5204b88acd772cc0c623be5c438ed1f6"],["/archives/page/5/index.html","340c12fdb97077de2c7d05ca6756d9e4"],["/archives/page/6/index.html","867f36df63e8f0450567331be235a38a"],["/archives/page/7/index.html","db7e1beab465d902704a256177cba9b0"],["/archives/page/8/index.html","2f87e21435957197b28b8d2852eeeca9"],["/archives/page/9/index.html","715c29d7495854b6552a3cb9891f9478"],["/bugly 上传dYSM文件小记/index.html","96bd92dcad2c4d570e314448e103df2d"],["/categories/Advanced-Swift/index.html","be01ca9c31523cb34c4cf9641c643f2f"],["/categories/Advanced-Swift/page/2/index.html","8d4da4b12f348fe740e6477cb340065b"],["/categories/App-Architecture/index.html","48af95805d0ad098034ebc13257df2f4"],["/categories/Array/index.html","0871df6d47246e76973c00c4171a9284"],["/categories/Codable-protocol/index.html","86db6199e652880c5ca7f6f52a1bd3e9"],["/categories/Combine-framework/index.html","bc8d4d480d89b4ee520aab45ae4f014e"],["/categories/Combine/index.html","0e87d0393fb0a4da8aa426a8a00fde0a"],["/categories/Go/index.html","a58e3d24487b5f552a15ca1863c65a19"],["/categories/Grand-Central-Dispatch/index.html","83d6cc08476f2e10018b2df15f181f06"],["/categories/Hexo/index.html","27feae893408f2339bedb85ad98e1138"],["/categories/Homebrew/index.html","52cbccb48875d8cf57331ad99e1052cd"],["/categories/Promises/index.html","19e1c70bdb2b32d635448d6233ec3e16"],["/categories/Result-Type/index.html","5da01a0ed267f5950a42ac8e5722fe99"],["/categories/RxSwift/index.html","62eaf45f8146fdc31cc7dd7612250166"],["/categories/Server/index.html","3f184d664d4281969834704d178115d6"],["/categories/Swift-Apprentice/index.html","54d0a2299941d074a2e2ecc7ba9ada13"],["/categories/Swift-Apprentice/page/2/index.html","1c034f9a26fcd39c3eb6bd19ad68ba0e"],["/categories/Swift-Apprentice/page/3/index.html","de8de4100b8d6466a23f90f6c068cb48"],["/categories/Swift-源码阅读/index.html","e466b7aea017938c288db77171759fb2"],["/categories/Swift/index.html","ecd09aca2bb4e8688749996483cf53aa"],["/categories/Swift/page/10/index.html","2e10a6ef6d66dda3d7c1ef848d5a102b"],["/categories/Swift/page/11/index.html","3d43f53e6ab6bbb08e6125af368f35bc"],["/categories/Swift/page/12/index.html","6cdc973e1a62d975441906dd56a26741"],["/categories/Swift/page/13/index.html","4186212b9330416bc16bfcf4bd4dd4c8"],["/categories/Swift/page/2/index.html","91bb1ed3be37998255bb0b5eae70cdd8"],["/categories/Swift/page/3/index.html","4bbcc5606e650921c83bc0d3ebdedab7"],["/categories/Swift/page/4/index.html","6952795660ac2a4f539a5d3121f2f780"],["/categories/Swift/page/5/index.html","97d304df2156f1efd7af2a9d412c2413"],["/categories/Swift/page/6/index.html","66b0e57a90550ef644cc265fe89387d4"],["/categories/Swift/page/7/index.html","21644a9a85c9f56369805e3b934ffec2"],["/categories/Swift/page/8/index.html","55b6fa3123ee1d2b9ebaf6f0af6db48f"],["/categories/Swift/page/9/index.html","5a572ce4d045571ab1d5ecc9bc477a29"],["/categories/Swift5-2/index.html","3caae4e3c3a9139b8c731ec0243858bf"],["/categories/SwiftLint/index.html","2be7c8fccf33462194f35c8c46b13b73"],["/categories/SwiftUI/index.html","a769dbefd77c930a50ffa9dbd6c2c741"],["/categories/UICollectionView/index.html","2a3ad454f5bb1e3ce7be866bed08bf0f"],["/categories/UIImagePickerController/index.html","125ac98cf38c40c00b145d2eb0da3836"],["/categories/UIKit/index.html","c0f6e3aa169decbcafebbbe4753f1221"],["/categories/UIKit/page/2/index.html","6ce224294adcf3b7813d50a2d15cb9c7"],["/categories/UIKit/page/3/index.html","bce1a6f52dc5bb15f4d1d6344bb96fdd"],["/categories/UIKit/page/4/index.html","acba3961dc27c5ea2d1a3407ed680305"],["/categories/UIKit/page/5/index.html","dd154731791e884987e5083767d0360b"],["/categories/UITableView/index.html","7cedec68ec03310c3ed774b068819b38"],["/categories/Ubuntu18-04/index.html","116b9d1b5ae343bc33a7ef894fbd85a7"],["/categories/Ubuntu软件源/index.html","f1cc45e80382bf1e631022bbb69f3bd5"],["/categories/Uniquely-identifying-views/index.html","252c5ed72e2bc30ca5860b482fa10c85"],["/categories/VIPER/index.html","3947b58e628632eaa7c7f2462b5dbe15"],["/categories/Vapor-4-0/index.html","4693dda9ce99975b153d2f0c832fbec6"],["/categories/Vapor4-0/index.html","a1b98ace27619ff2835626c56ff2a880"],["/categories/Xcode/index.html","9135e304333877c9ead562d0ea16c756"],["/categories/appleOS-Networking/index.html","921bde1888dc47c1a23b85797d587a99"],["/categories/bugly/index.html","569e2cf19eb32d8d2fcd54fa0afcffb1"],["/categories/enum/index.html","0860df904d787ec4c683547aa2b0e776"],["/categories/git/index.html","4d94907c9a5e965210ea06c164054bc1"],["/categories/iCloud/index.html","3c440e42c283b3c4ebb8708480b4b9b2"],["/categories/iOS/index.html","1a4fc59f7a8a565f6efb4d48df819c46"],["/categories/iOS/page/10/index.html","9cecb8c4ccad3c42e6364174e96d60ef"],["/categories/iOS/page/11/index.html","2be3d278abbd7fec8291d53313e06410"],["/categories/iOS/page/12/index.html","ce3068d51ccb0e20b7fc17132bc20345"],["/categories/iOS/page/13/index.html","492d3bb25afa6c482970d430ade44c88"],["/categories/iOS/page/2/index.html","d3cd2540baeeb97f1f51df6a4bafd908"],["/categories/iOS/page/3/index.html","e3a3cc76ac36911424618d4117bf808c"],["/categories/iOS/page/4/index.html","e358978f42e087abab88f86e1cfa83e3"],["/categories/iOS/page/5/index.html","74fb660549eb6608018c7e9a7d498baf"],["/categories/iOS/page/6/index.html","74cfa5ba7dbed1de96848db3999799fd"],["/categories/iOS/page/7/index.html","d403a60ac396a2784557a8f5de45cfc4"],["/categories/iOS/page/8/index.html","8f8719c9adca2963db8d60d42096f3c5"],["/categories/iOS/page/9/index.html","3b655c598ec5e07a42fe57cad5009603"],["/categories/iOS面试题/index.html","88b34d1f53b1274e1dfe99c26f8d759f"],["/categories/index.html","f791d15adca89f53b9906a717f935899"],["/categories/random/index.html","0495cb9472a3801b15af9c8919358238"],["/categories/三方类库/index.html","af21f12c1bc907cb0ba8819993287775"],["/categories/函数式编程/index.html","953112ff8c817577d14f98bf986209a6"],["/categories/子类化样式/index.html","d50e42a4bcace88fdcfa000e56712047"],["/categories/开发记录/index.html","9c842998f7fd3177aeb3275d23db1976"],["/categories/技术支持/index.html","4563e981974da8ce032c5f7a880365fb"],["/categories/架构设计/index.html","9c5ac72ead7396733e088474a78429f6"],["/categories/测试/index.html","f94fa7be5c64f768af705122ffb2e94b"],["/categories/用户体验/index.html","84b6db7e5931ab4dd89f6ca2d00f2fdf"],["/categories/用户协议与隐私政策/index.html","3f77a075fd17d7328483f057b0c04cce"],["/categories/设计模式/index.html","c510eab45a73b0805beb5b10688d795c"],["/categories/设计模式/page/2/index.html","02c1fff873824ad54465972c0fe6eed3"],["/categories/设计模式/page/3/index.html","335c45ec63b38a3ae69df34f236947b1"],["/css/main.css","88d56f1005e20da1147f7f85d48773c1"],["/hello-world/index.html","0e982447f95d2df46517ee40a13da96e"],["/iOS VIPER架构深入实践/index.html","ca3953bb5d71d07df7a82d969d9a386a"],["/iOS 自定义视图，输入表单和错误提示/index.html","186683620317831808b87971e49ea967"],["/iOS如何使用iCloud文档？/index.html","10f2a03e22eb3361dfdcc924b763b9ab"],["/iOS子类化样式/index.html","9feb3b94f9725631b0bfd113ae0f7995"],["/iOS开发记录<一>/index.html","a6a595a11c62800d4b5e1f3b777c298c"],["/iOS自动化布局编程/index.html","58a859ffe5ea3eca23cc1fca8af82eaf"],["/iOS自定义转场(By Swift)/index.html","6ceb8b1e17bc8327302046bdb807150f"],["/iOS项目架构：使用VIPER/index.html","91c3b6938d2c148d4bf9d5a96e5e9dbe"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6c865abb4345e389865bc36b7ffbc2f5"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","2037bf5fe0cf215d0d13061816b66503"],["/page/10/index.html","fd374c5f940ed91589ceb26e42285713"],["/page/11/index.html","019b56f005eb84e59c9a43469f4b5e56"],["/page/12/index.html","b5ad8bf63970b9b85c89abd816e591b9"],["/page/13/index.html","73eb1fe1f03f6ce2908ff4c8df36941b"],["/page/14/index.html","b48b0b46d39cd4e98f9696158b33ef08"],["/page/15/index.html","e555d3823d1cfad8219fa3426352c477"],["/page/2/index.html","6f23885f455c46169322fd223515d3b3"],["/page/3/index.html","679ecaef1da0aa93beb236d142b16712"],["/page/4/index.html","908b36aa1581a8eccedcac40f351597a"],["/page/5/index.html","e272deb101455e4b481d75503adb0731"],["/page/6/index.html","e6383ba34900a81d63ba77faacd80081"],["/page/7/index.html","e2922706c64ff149349be0e1b524d775"],["/page/8/index.html","aefff33b92d6c29a269bd14a1139232c"],["/page/9/index.html","3256586729c69af8b9dcbfc1ccd64ee7"],["/schedule/index.html","5ad35580902925b77736683548a80440"],["/storyAppPrivacy/index.html","eae9c080faddd108702de62780b30ee1"],["/sw-register.js","bd80acbf6bf822b06af9603bb359c797"],["/tags/Advanced-Classes/index.html","36cbaef2ac50d5f52122c2d4383c6a7a"],["/tags/Advanced-Swift/index.html","d82d3d728300957ce0546631b12680c5"],["/tags/Advanced-Swift/page/2/index.html","ec90ca9bad1d33cfa7f08638bd07aa9f"],["/tags/App-Architecture/index.html","bfab0f37f477137d36de6532807e7b6b"],["/tags/Array/index.html","bbe8f922a08a89daa55537346f71d05f"],["/tags/Arrays-Dictionaries-Sets/index.html","27bbd2c7b1d4c984f11dcb760a722a67"],["/tags/Authentication/index.html","544e21d0a1c9da0f146c6f1cc9211e04"],["/tags/Build-in-Collections/index.html","2c33a99ff20afff7086d347631f52fba"],["/tags/Building-Your-Own-Types/index.html","f3c2f73c18ee0c14d62de8c9dcfc82f9"],["/tags/CMS/index.html","0e84bea189624b362b6db48a88161d42"],["/tags/Classes/index.html","59fc963daa7570ddad40e9f4025d991d"],["/tags/Codable-protocol/index.html","5e4c01ef89bf3b89129acd9a04e59ffc"],["/tags/Collection-Iteration-with-Closures/index.html","76e1118aaa718909ac0a940c62a05eeb"],["/tags/Collection-Protocols/index.html","23f0e932b54d84c7297fbe76d3e9ecf5"],["/tags/Collection-Types/index.html","efa50247f0fcd431247beaf772195aac"],["/tags/Collection/index.html","14ee7dfb08360d284c2b8d5bd754a516"],["/tags/Collections/index.html","cb31970ff379042ec77ca77a1ce65a52"],["/tags/Combine-framework/index.html","7d7a7c333148d9eb8d007d6b09d0704a"],["/tags/Combine/index.html","94a8a1d74006a50b30813c2bf8af425e"],["/tags/Dependency-Injection/index.html","6a0ef5df686836f84289e8a8fe0ea711"],["/tags/Encoding-Decoding-Types/index.html","c743b2ae7fcaf745f68ada791ff08fbf"],["/tags/Encoding-and-Decoding/index.html","f1a623abff1b4bb6f9dd85c7856351ca"],["/tags/Enumerations/index.html","0ff8c84ef4e9989a47c0acb2bf5ad69a"],["/tags/Enums/index.html","0aa8f77ec41dc72666e766ef2d6011b1"],["/tags/Error-Handling/index.html","257be908ccad9a919445632ccd46ea80"],["/tags/Functions/index.html","b77abe0814f4f8bcca7e3b88013fff6c"],["/tags/Generics/index.html","b9c412da54e2084f25886466d6fc4d0d"],["/tags/Go/index.html","071e8de6d38c9409c2ee82b502ffcd9e"],["/tags/Grand-Central-Dispatch/index.html","8baf6b24b7722760ef5096a0885fd835"],["/tags/Hello-Vapor/index.html","66b6572b2175ea2079fcc314f58218c1"],["/tags/Homebrew/index.html","84f1129f85317e63e0f1be782a943e95"],["/tags/Interoperability/index.html","4ad481e72ac5543440d4fb4c82eaaa28"],["/tags/Introduction/index.html","c097a860baca9ee99c48d9a4492cd00e"],["/tags/Leaf/index.html","74acc280add6716023147a72ba9667a2"],["/tags/Methods/index.html","afe2aa5ffac51d70c40d17d2049639a0"],["/tags/Modules-And-Hooks/index.html","305e0c603e10a123f20e1add5e0d2790"],["/tags/Optionals/index.html","d8815d361fa405794a862de50b925bfe"],["/tags/Promises/index.html","ad2e1bd1dd46b141337d2f771586b1b2"],["/tags/Properties/index.html","f95e4098417d65ab86bac558b1d16e1c"],["/tags/Protocols/index.html","743581ea60547540406e854f6f5c4bb0"],["/tags/Result-Type/index.html","3054d458233723eac12e1554f7ba372d"],["/tags/RxSwift/index.html","8221f4cd06971c0a452d130f9f8a2d66"],["/tags/Server/index.html","99d233ce8c31ec4249fb66edf0bfe90f"],["/tags/Session/index.html","02a1878662b36ee9a96b74c599fde25a"],["/tags/Strings/index.html","904252bc5458730b20b64a85e680d6a2"],["/tags/Structs-and-Classes/index.html","9c1f34b39546d86576cf40845e971736"],["/tags/Structures/index.html","f8097db204120afed8bb626d9f428499"],["/tags/Swift-5-0/index.html","4036bb893fc3605da38b95bc2b2fadd5"],["/tags/Swift-5-0/page/2/index.html","869241a0accd99b6e090adbfc759be94"],["/tags/Swift-5-0/page/3/index.html","52dd4ff679ea0da84c7687d6bbeef3b1"],["/tags/Swift-5-0/page/4/index.html","3e8d0f981af20386d25d60b1ab3761d9"],["/tags/Swift-5-0/page/5/index.html","3f16dbb89758d3185af9ba353e27744c"],["/tags/Swift-Apprentice/index.html","80035860f40a82579c52a78d686f111e"],["/tags/Swift-Apprentice/page/2/index.html","310b8b3e0da46988bc5d6d97bd2ebbb1"],["/tags/Swift-Apprentice/page/3/index.html","d91e1f1f0eb5536792ac7504f55683f6"],["/tags/Swift-Package-Manager/index.html","2d58c41510bd851c2230e0bae1996c33"],["/tags/Swift-源码阅读/index.html","128473db2bc134d1f84e7de16b269159"],["/tags/Swift/index.html","9b997e369647b694d6adcb26c2e075a2"],["/tags/Swift/page/10/index.html","ec1888887bb00aea455d54f171e23bd7"],["/tags/Swift/page/11/index.html","ad6b06b2904a88863bb95ceb15960d65"],["/tags/Swift/page/12/index.html","83a5deb8849e60755b27045fb6dac723"],["/tags/Swift/page/13/index.html","74bdaf4fda2aab0368e6a7e97cb424f0"],["/tags/Swift/page/2/index.html","2542cd802168a2c3a0eab64c6313c168"],["/tags/Swift/page/3/index.html","5ebb2a3e7f9199910258c552f1770fee"],["/tags/Swift/page/4/index.html","3d44fbbdf4c7c9816f14c1ad2ce623e1"],["/tags/Swift/page/5/index.html","8561eabc9a7dce1defb573d3c04a5147"],["/tags/Swift/page/6/index.html","c415a6700ec16a828e28000dffe8d35a"],["/tags/Swift/page/7/index.html","0789ecf03d18f3208ae114ccc087f07a"],["/tags/Swift/page/8/index.html","cb70a1d22ce8e92ba337db6ba6cbcc5b"],["/tags/Swift/page/9/index.html","975cf6a3a90c677c0fbb789ede5403fe"],["/tags/SwiftLint/index.html","f80a5041db562f56c67f845317dc2057"],["/tags/SwiftUI/index.html","b40dfb40904af60e645be81a81760d7a"],["/tags/UICollectionView/index.html","c4a9e4651c37cea65a5ad7a5ef041944"],["/tags/UIColor/index.html","216362e6294484ac6bce46f5739d169f"],["/tags/UIImagePickerController/index.html","479020c48ee1d6a209864e6e0ecac046"],["/tags/UIKit/index.html","412772e3e3bcfb9e37d98552c2962fb4"],["/tags/UIKit/page/2/index.html","fd68410a0fa5f7528ffdd554c1d7fd71"],["/tags/UIKit/page/3/index.html","40dadc8a407d39735c4e8bcfd4fad3b4"],["/tags/UIKit/page/4/index.html","613814e5e98fb855830e80e1ce9da6aa"],["/tags/UIKit/page/5/index.html","d4b41eab94fd97fb41a11c54ba0b5dc7"],["/tags/UITableView/index.html","6566a3db7677a9ff1bd74fd210a4ab32"],["/tags/Ubuntu/index.html","8384743d93a8387e2d7c55341c2b7f5d"],["/tags/Uniquely-identifying-views/index.html","3519f1b3a32a4d36faafb92a595f8f9f"],["/tags/VIPER/index.html","fc12a3b553caa9bf213603680684a302"],["/tags/VMware/index.html","5fa8edf8805517a36acd8a6a1d8bc0b8"],["/tags/Vapor-4-0/index.html","b0b1b4be492ae3da4d7f36efe9470c97"],["/tags/Vapor-初探/index.html","9b7ba8ff3bb7ff07bbfa248360d7126b"],["/tags/Xcode/index.html","421de7d3f4e40e42f8dd07d94bde1d87"],["/tags/appleOS-Networking/index.html","374518cf5bcdbda93ba43f39ab527a59"],["/tags/bugly/index.html","54cb3475250fc7e26a06e9c9ea7981de"],["/tags/enum/index.html","0290d234f21ced6c8809a72ce71e39d5"],["/tags/git/index.html","e1a8f2cf0a300bf3c1d60123348c69f5"],["/tags/iCloud/index.html","27792534f99a2a0bb352e4a34a3c5566"],["/tags/iOS/index.html","fcfdea1c5f854ca6a206a7b054078c28"],["/tags/iOS/page/10/index.html","ccf0fd9bd05549a4e6d7a1c410663da8"],["/tags/iOS/page/11/index.html","32e3a3800f57b70f9eeb0d043d60e9d7"],["/tags/iOS/page/12/index.html","ef2fbb21abd0e9f619996ef633b771fa"],["/tags/iOS/page/13/index.html","69762f7f7b69b25e23cb0d6291f640a5"],["/tags/iOS/page/2/index.html","5a4970b41293a74071c65610cde39d0b"],["/tags/iOS/page/3/index.html","c1bb72b215a0726ea85bcabd77577ec2"],["/tags/iOS/page/4/index.html","f727c0351b10a7d94161fe0c0f6df9a0"],["/tags/iOS/page/5/index.html","df1ac0fd69a244673b92e8766a2163c6"],["/tags/iOS/page/6/index.html","c049488e47d72c372705ba0c2e229cec"],["/tags/iOS/page/7/index.html","41dd591802393f3e229cee06a6865dd2"],["/tags/iOS/page/8/index.html","5844a0dbe015b4178a34d082f07eea87"],["/tags/iOS/page/9/index.html","315954fd31333236e38576acf99a19cc"],["/tags/iOS面试题/index.html","8d5a9fe1fbdec127a2b9c3b079a17e95"],["/tags/index.html","b6dfe875e997f497515e2518522e82c6"],["/tags/non-optional/index.html","df2957cfd81f605fea09f92cf5391109"],["/tags/random/index.html","f6933d606a41763087498e0446275606"],["/tags/transition/index.html","43143ca89c2417cf543001896caaf564"],["/tags/三方类库/index.html","753198e8906d3f44e2e7d20da3c59910"],["/tags/依赖注入设计模式/index.html","58ca7172975b9c8b414ff4ce7d926976"],["/tags/值类型和值语义/index.html","f3f15adaf795fcace4732e48610ace9d"],["/tags/内存管理/index.html","e85e1e0da84fc7944fb46776f98447b1"],["/tags/冒烟测试与回归测试/index.html","173a74c0ca50fa5a2abe507a5de16994"],["/tags/函数式编程/index.html","87a22cbe2b9f73060f59c68bb67373d5"],["/tags/创建博客数据库/index.html","4847b28b99f0caa304987c2111fffd7c"],["/tags/初始化模式/index.html","c13ecffa75a5a1dae2d10a5c0ab9b0d3"],["/tags/单例模式/index.html","6b71eea6fcac7d987badc6ed7380249e"],["/tags/原型设计模式/index.html","f3df8cd6859b4a67c97b71a46924af2f"],["/tags/命令设计模式/index.html","64fcd264e175938d74f683d3de08a9a0"],["/tags/基本控制流/index.html","8b7cbe90365da65865dbe6e14a6107bd"],["/tags/外观设计模式/index.html","975fb7f0c03668a98b00f2570afe91fa"],["/tags/委托设计模式/index.html","937c20b0b1f389c802388e4244ec6325"],["/tags/子类化样式/index.html","70f6b8c313bd34c9dbc1cf212565f473"],["/tags/对象池设计模式/index.html","572282e1c30b91063b89ca266ab56d66"],["/tags/工厂方法设计模式/index.html","e0bbfc535bf69a732bf4aeef6a14a5ca"],["/tags/工厂模式/index.html","42cf66a51e8df74d7d7b88279aadbe11"],["/tags/工厂设计模式/index.html","591421515e3f483966517c985c62b0d5"],["/tags/开发记录/index.html","d9994515b46883f464a2bc1769c1f4f0"],["/tags/懒加载模式/index.html","627c599bf3a17e67c8d6cabd76ee8588"],["/tags/技术支持/index.html","94da22868b15928feef9d0c10a1cb916"],["/tags/抽象工厂设计模式/index.html","18992f1b07eb8894a29f8b1df6b41e5f"],["/tags/构造函数/index.html","c73ca77e2ceb45c11731a7f9a9a998c6"],["/tags/架构设计/index.html","f8ef110514e84da8461a2c73e75f5596"],["/tags/模式匹配/index.html","d9f5bfb6346d9e54f971f732a9cf3a76"],["/tags/生成器模式/index.html","ca6a420262ad5b6255d1ebfb46398a43"],["/tags/用户体验/index.html","775822c261d3d5b76bd54678c12fa76a"],["/tags/用户协议与隐私政策/index.html","20cc61c8822f80cd863b9be14da0636d"],["/tags/类型与操作/index.html","27595f6c119c72b9996f6b391b70f030"],["/tags/自动化布局/index.html","7ed216c9a8b903475fdcb7e882cb3d6d"],["/tags/自定义UIView/index.html","91dad494ecd46591bcd6c57dce198929"],["/tags/自定义转场/index.html","438246a8892ba225e1bd23f5421ff793"],["/tags/自适应布局/index.html","396b2fd027c38230bd0d7299ab90e3e0"],["/tags/表达式、变量和常量/index.html","ffac1fdf5829a29609fffbe742cce178"],["/tags/设计模式/index.html","57f23a2bc64cf0291555426f0d21bfd5"],["/tags/设计模式/page/2/index.html","d0e11ef3c95ad2d023d8a6d2e763ffcf"],["/tags/设计模式/page/3/index.html","796d8f263767f84df40a091ef5640555"],["/tags/访问控制和代码组织/index.html","40867cff71b1d34ee7a1f6086a8e4b2c"],["/tags/运算符，下标和键路径/index.html","18e6190d2dfee320560229807b508832"],["/tags/迭代器设计模式/index.html","9983d854ae4b51ff60c8f89de0c190d9"],["/tags/适配器设计模式/index.html","c17bc448c4f2d7edddd757f0bb29acc7"],["/tags/错误处理/index.html","0a3ed1ae4a9caece7a91806d17aa7458"],["/tags/静态工厂方法/index.html","66c95eaddfe4fca9274e35593051e73d"],["/tags/面向协议编程-OOP/index.html","c5b770dc37a06a29d83a2e3b5c148989"],["/tags/高级主题/index.html","d35fce23e7ffb279a0a342c33e2abf91"],["/tags/高级协议和泛型/index.html","08d030a45e644059676f7d70a696a0f4"],["/tags/高级控制流/index.html","46c4cdd7990dbe4fec850eebba529683"],["/为iOS应用构建输入表单/index.html","2e0b6a1483ef75713b781517b6857a71"],["/产品开发的幕后花絮/index.html","471b4904904b69a5c2ddda8c294fb7c9"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","d2e180c9f6dd87c89d524bf6a451c014"],["/冒烟测试与回归测试/index.html","2ceab3532a88f312c6171d2d6feec2e6"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7c5daf0d82249bdae8ab4e2d085e66c8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c004b92b01ef5a717200660414e662d8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0c8be1feff2252762ab4988947ac8351"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6415fc19d320b1d30d24068e2b97b871"],["/在Swift中创建自定义集合/index.html","f5426df8e65f06bc477263d37959bf15"],["/在Swift中处理非可选选项/index.html","c51f919208daa7e90a13753a2fe3fc4b"],["/在Swift中生成随机数/index.html","ab83ae640cd0019a5a697e8f48423302"],["/在Swift中重构单例模式用法/index.html","f913dc61f414e4e96a27e0d03e653202"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","70a6768aaf47a2bea8af79fe589f0652"],["/如何为VIPER编写服务？/index.html","29ebd10549fc8b5b6d2fc7f3ca100a3e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","195440c876d90f495eaac5e26597a387"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","379fdf9a5b4c8c17920176625e8e6632"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5d87c52c4df55584ced83edb40356555"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f521b551cd2418823383ba0ed3b6a0f2"],["/掌握VIPER架构/index.html","0813200b971d92dcf9b8ea48421e38af"],["/揭秘 WordPress Hook 系统/index.html","f2dd77edbb4fa7e66464b54afec7b921"],["/比较工厂设计模式/index.html","ccade6c5b131c168cf1a52a5638c70fd"],["/深入了解Swift中的Grand Central Dispatch/index.html","281e0158deacc483333df7628711b571"],["/深入研究Swift框架/index.html","268058bd6931bd1b59783456bf6f2dcc"],["/美豫直聘技术支持/index.html","1527906f9a2367ca729fdb19222028e1"],["/美豫直聘用户协议与隐私政策/index.html","53909919ec2e580be509b7281f6f1b71"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5f2fab02931e8952f21ae879ce57419e"],["/选择Swift而不是Objective-C的5个理由/index.html","0f4c82148378ffc98eccdc67b05cb02e"]];
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
