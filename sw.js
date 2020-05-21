/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","82e85f9dbef1218e22dec728b19abf7d"],["/2020年iOS面试题总结(三)/index.html","bc5b21288bfae1cac3f433fe42a2f945"],["/2020年iOS面试题总结(二)/index.html","db038a04ef759c8dd03adf5e381b15e0"],["/Advanced Swift系列(一): Swift 简介/index.html","6a1d127a3b52cfec62ca2b13cbe24e1e"],["/Advanced Swift系列(七): Strings/index.html","403f4c456cd88f3503796b432da4b789"],["/Advanced Swift系列(三):  Optionals/index.html","ec0c3d760d4778f30a08d8a2456738f9"],["/Advanced Swift系列(九): Protocols/index.html","e5377e24277f1bee206968663b83aa39"],["/Advanced Swift系列(二): Build-in Collections/index.html","1c993a2676dc7fec2d4c4cd33e0c2a7d"],["/Advanced Swift系列(五): Structs and Classes/index.html","9233712c6e667933930b35734ab23612"],["/Advanced Swift系列(八): Generics/index.html","f93053c0911e10e6825d1af41787e858"],["/Advanced Swift系列(六):  Enums/index.html","30951ad8aa47c7c4ad259f8975fcc040"],["/Advanced Swift系列(十): Collection Protocols/index.html","5a56bfc9071a9563cc3c47161e4f34f5"],["/Advanced Swift系列(十一): Error Handling/index.html","21713be32268f01cd9410429ea5f926a"],["/Advanced Swift系列(十三): Interoperability/index.html","57f8202105b96d34a7181996e77f2401"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","deec193d56d9193f0e9b38c66c04d820"],["/Advanced Swift系列(四):  Functions/index.html","70be2392b701d560fbd3ed1b20eac651"],["/App Architecture系列(一):  简介/index.html","2c19a25278459cd04094251bf45ad5b1"],["/Functional Swift 初探/index.html","9325ebd82cf93cfcda558f7282bd4418"],["/NSCODER和SWIFT初始化/index.html","7dff5c076b6f9cf3cde2d6652937c556"],["/Swift 5使用UIImagePickerController拾取图像/index.html","40fab4b01ae46e87802a4a0cfde6efe4"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","24e13879c2f42285aecb43e437f82e5a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3cd305059dafff91edef4f5d244679fe"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f7db686be2abd3e36b5e0ac7c0451247"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","bfd2d26623832b4cc5c4a24338df642a"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","23de26629113568d32b11e8cfcf653d8"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","15379c8249b44bc7f84808f418163a66"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","fc235377fa2afecab011c25ba450ec4b"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","6ee71acc54bd5604c8f829c6edbee260"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d89203ef8069960e5862daaf658d44af"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2149994b2d4292391988c7fb64bcc612"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","afce7d6a46fcaf81da27269bc607744e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","a06d24ac5a173a8de9e7709990b0151b"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","3bbec9ff1e69c2c12be6a56788c5452e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","613a51a26adc35a57eb9eac14a206b16"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c2260c80c94e3b9a28f7569ddcc8a825"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","adbb936aa3450fbfdd621c2d7ed6fbed"],["/Swift CompactMap vs flatMap：差异说明/index.html","a8245e6d80f72dd2fb00dc370b83a513"],["/Swift Grand Central Dispatch 深入实践/index.html","185b2ba54d8c9e008432d8c16d9976c7"],["/Swift Lazy属性初始化/index.html","e55c97684b9b8c392e6672191b3d35a6"],["/Swift Promises 初体验/index.html","2a19c2f82c57be68d08af0e583c2b64e"],["/Swift Promises 探究/index.html","2e5501c810aedcf633ce88499d6d3d88"],["/Swift UICollectionView使用指南/index.html","1671770752f461b4c4aebf341ed3c2b7"],["/Swift URLSession 和 Combine framework/index.html","4840597d12cb3bcbba80b1964bfa52a7"],["/Swift 唯一识别的视图/index.html","1cc0dfbe6040d401427f734c3ac5e2a6"],["/Swift 如何学习现代UIKit？/index.html","9725926981cc04838ba7fed4f27c2f29"],["/Swift 用 compactMap 替换 flatMap/index.html","5576300dd671f9c37c178f63cd445c20"],["/Swift 选择和播放视频/index.html","217750ecfad679995ab904a3546f7654"],["/Swift中UIColor最佳实践/index.html","be16ef136d1e8d7b9d816ec3a8e083f4"],["/Swift中快速简单的工厂设计模式/index.html","efff6a5d050c8b4800a5c45d02579062"],["/Swift中构造函数与静态工厂方法的比较/index.html","4ee8c64ae4e07b8e8b095e9b3cc487e8"],["/Swift中的UITableView教程/index.html","099843c456c5fb9962389b5fef329edf"],["/Swift中的懒加载模式/index.html","e3b49ec285fe13ab6b7def7b4040921f"],["/Swift中的模块和挂钩/index.html","c067a7db2cb55dd5a1bbe0b9d9aad050"],["/Swift使用布局锚点添加约束/index.html","fa6a68a2c21d6b2320aeb7b32a3f06df"],["/Swift依赖注入设计模式/index.html","b2ae54143751b57a923d1d1d8e5a574e"],["/Swift关于Dependency Injection (DI)/index.html","7fe352b432b3b46781375102bf4092c5"],["/Swift初始化模式/index.html","6707999cf7abd4f59a4c65f74569a43d"],["/Swift单例模式/index.html","6548cc5ca5f6f5ba5a8d0128aff4e966"],["/Swift原型设计模式/index.html","cb633519b5d01be6f807d0eeb486d123"],["/Swift命令设计模式/index.html","a64423b7abcb6e9fa00cfc48ddbd929c"],["/Swift外观设计模式/index.html","989bbc181e4fa4345e7ce0971ba78017"],["/Swift委托设计模式/index.html","c70d239b82c168c2e032d97397db309b"],["/Swift对象池设计模式/index.html","073027152c71a5051147ce5df4578cd1"],["/Swift工厂方法设计模式/index.html","09b7633c9c0ff987fb114a58d4771e91"],["/Swift带闭包的懒惰初始化/index.html","64b026e4da88a8791b28dd82a578a093"],["/Swift抽象工厂设计模式/index.html","40e33a7d63b65aa9d70c3527ffbabf68"],["/Swift掌握iOS自动布局锚点/index.html","1b2bbdce02ce2faf374d44ade87cb424"],["/Swift支持旋转的自适应单元格/index.html","5924e40acdcfd6b8f8ad035619a12fe3"],["/Swift枚举值/index.html","605eaa0bc42f583c148c506d3c7d88a4"],["/Swift生成器模式/index.html","2614a2a9211986b91002d3f05aae6952"],["/Swift结合Xib文件自定义UIView/index.html","40ab515cc03711194b0fd71d94eb218e"],["/Swift编写的20个iOS库(一)/index.html","f11ea85cc341dd66be344a515414aafe"],["/Swift迭代器设计模式/index.html","e1de6938aff547ed7fcde736a7889902"],["/Swift适配器设计模式/index.html","607c6e03d89ea7c4bd831bc645013dc5"],["/Swift静态工厂设计模式/index.html","28a601310e5823a7b01aeefd0640ab49"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","72c2169be44fb4f2bdd979087ffe811f"],["/UICollectionView data source and delegates/index.html","d84c47363c226505cff9aa5f9ec6a34d"],["/UIKit初始化模式/index.html","3470f3a962f6be1406157437a37c447f"],["/Ubuntu18.04替换国内源/index.html","f7ae0410859c4ce92835d4ea0282b010"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e8e79774bf2306b043430b931267bc1b"],["/Xcode扩展/index.html","ecc15671c9787cda70c123c3459b7d65"],["/about/index.html","e7e7b1e88a1166529b02d87b2b6a3341"],["/appleOS的Networking示例/index.html","0c5293aa587ad53d3c3e96ff1f4577c8"],["/archives/2020/04/index.html","3db4ad1989a99b03257f05681235b78e"],["/archives/2020/04/page/2/index.html","698021c690a4becb3aa8f5178b9a33bf"],["/archives/2020/04/page/3/index.html","4b06c723d7291ca9655ec3b8eca0d7a6"],["/archives/2020/04/page/4/index.html","bb79757e6890874eba411a6bd302b8fc"],["/archives/2020/04/page/5/index.html","a552a1d69a0f599d6f59d0adc3ed3e44"],["/archives/2020/04/page/6/index.html","39fa8b081132f0a1ba29746a68599ad8"],["/archives/2020/04/page/7/index.html","f9cb05b0683cd634872822e4273edcf4"],["/archives/2020/04/page/8/index.html","d46d04b369d4a24d11d46fed33e8c06f"],["/archives/2020/05/index.html","bebd66829bea2af3608b83f7e25c63ad"],["/archives/2020/05/page/2/index.html","fe257462d34d0317f566aa9b32c35032"],["/archives/2020/05/page/3/index.html","db4ec2e55b1fabc165eb63855f995d3e"],["/archives/2020/05/page/4/index.html","d884bb340055026d2cbea7749d3fa6ee"],["/archives/2020/index.html","5df89b126a17d5098696d567594d249a"],["/archives/2020/page/10/index.html","0f2a3f119c0ce17733cd8bfbd2a3b47d"],["/archives/2020/page/11/index.html","f6979d940eb346fdb2c2b6bb96b6ef20"],["/archives/2020/page/12/index.html","abdaf5550d117515e2026480a5091153"],["/archives/2020/page/2/index.html","6d0d2220eeebb0a90ada3cce2bc3953a"],["/archives/2020/page/3/index.html","ffb52d5736e2c237a44dcfd821c92e31"],["/archives/2020/page/4/index.html","5956fe1ec1087331f3b176ec03a8aaae"],["/archives/2020/page/5/index.html","d97d835a1b3545ea7c2bbb113dc93232"],["/archives/2020/page/6/index.html","9d59931bdbebaf79a738255b8ff816ed"],["/archives/2020/page/7/index.html","0f67d94cceefbb53ebc2b88b4255c453"],["/archives/2020/page/8/index.html","6124223cb08af1eaa6be831f85ce6ea3"],["/archives/2020/page/9/index.html","b847aece96506e21dca375cf9261464b"],["/archives/index.html","c4f2ed84ebc57ffb6fadfecc7749e4a7"],["/archives/page/10/index.html","f5d4b09ca02c319e642b62d101f50be1"],["/archives/page/11/index.html","35f03c990d0c974b184714b54c10bc18"],["/archives/page/12/index.html","9dc5bdb17643fc90eef98970852d9fa4"],["/archives/page/2/index.html","acb0d3b4d992291875092e2bbbda2ec9"],["/archives/page/3/index.html","52edcfed93a3fc8467db8ba7301184d2"],["/archives/page/4/index.html","5a111ed7b061cd277ddeaf8b745c307d"],["/archives/page/5/index.html","391e21f83423dc97aa072f8c17036e5b"],["/archives/page/6/index.html","a76b9daa6f57aa7316f10afe81d0f1fd"],["/archives/page/7/index.html","4f35cb60ef6876eb25a863ae1f02ee76"],["/archives/page/8/index.html","54305c1ed6fa58a7eb70ac06877b7e4e"],["/archives/page/9/index.html","d7562315257e416023be32183cb7470b"],["/categories/Advanced-Swift/index.html","645bf6a1f01877c1c6b7c33ca92c55a7"],["/categories/Advanced-Swift/page/2/index.html","0e4a65ea70852443db0a4d0c9d797f06"],["/categories/App-Architecture/index.html","a43d37eec23921768c77598e83dbd791"],["/categories/Codable-protocol/index.html","f92962eddc633e19e09a9f1ecebaf0e8"],["/categories/Combine-framework/index.html","8f9c8266d6f308d5a9808ec42e5b32e7"],["/categories/Combine/index.html","409d2a7eedda14affa70c52db5dec7a7"],["/categories/Grand-Central-Dispatch/index.html","84b437237886c9d3dd9343582b228c61"],["/categories/Hexo/index.html","8242f006219b865c3a59e7a3b57553a0"],["/categories/Promises/index.html","7235b0fc9d34fe0c168e03d8904a7c06"],["/categories/Result-Type/index.html","939a8376d288d370adf6c234ab920368"],["/categories/Server/index.html","63ab079d04537b68a8600277817bccd8"],["/categories/Swift-Apprentice/index.html","d0974d42d4ffff46b19883f03a5ee67a"],["/categories/Swift-Apprentice/page/2/index.html","bffe268745a5ed727fa9970e3c31080a"],["/categories/Swift/index.html","a6396fd060e5b6184405e03cfc2651b1"],["/categories/Swift/page/10/index.html","1d25e70e35f8bb2a3ff353c3973458b4"],["/categories/Swift/page/11/index.html","936b589733f41cd38837591758e1fa84"],["/categories/Swift/page/2/index.html","ca52614f967958c52c705a97b6d243e8"],["/categories/Swift/page/3/index.html","188891a75ea992fe94be6b1440b2328b"],["/categories/Swift/page/4/index.html","caebb62db3ba6884457df90fc5b405ca"],["/categories/Swift/page/5/index.html","193bd3b308ff45135323e82854d05e11"],["/categories/Swift/page/6/index.html","8699f1fe4deee1f64bb2b760dee15093"],["/categories/Swift/page/7/index.html","4c70531f4a9eb20df64b604495659a54"],["/categories/Swift/page/8/index.html","828c81e90558ab4569c33394e8060e95"],["/categories/Swift/page/9/index.html","eb43b219a3d8cc8ddf1388b228a9ebca"],["/categories/Swift5-2/index.html","94b45a24e56ca1da2f935542df066cb6"],["/categories/SwiftUI/index.html","3732e4fb083f1fd43391ea04b74e2e33"],["/categories/UICollectionView/index.html","d075a056252bd3b3946d9b06d1782e96"],["/categories/UIImagePickerController/index.html","6471678ec68e6af94d286811cce0966b"],["/categories/UIKit/index.html","331dfdffa040014372645cf6dfd3c08e"],["/categories/UIKit/page/2/index.html","2e1ee8f76326878c0570bc2d52ef7283"],["/categories/UIKit/page/3/index.html","f9604b9c09c3111426914db4600f179a"],["/categories/UIKit/page/4/index.html","1ac07f033e27f015231e233d8e0354d0"],["/categories/UIKit/page/5/index.html","7fa5722718bea0c5ad35e3a8a0971efc"],["/categories/UITableView/index.html","39782c8a498d218266bd94d560a5df17"],["/categories/Ubuntu18-04/index.html","602a2b2d388871fdc835d7a7d31f0cf5"],["/categories/Ubuntu软件源/index.html","e2e9b48b68ed5d0591e499aa1ef82b02"],["/categories/Uniquely-identifying-views/index.html","83bd26035cf7d1ada7931e4a98e32806"],["/categories/VIPER/index.html","14ea85d62a195b91cd1e7a6814fd73f8"],["/categories/Vapor4-0/index.html","9dc8b5dbfa2fb898a9697a5450bcfd2f"],["/categories/Xcode/index.html","200e36ce0b794682455f742996f7321a"],["/categories/appleOS-Networking/index.html","db312f51928111bbd030a9acf0af7e5f"],["/categories/enum/index.html","57909b23bff85fac70aa7ddd229b9210"],["/categories/iCloud/index.html","3dd820b643ee43779646abf2c29c3bc2"],["/categories/iOS/index.html","4bc8da11098c410a18aac9ee30d2756f"],["/categories/iOS/page/10/index.html","3ea1279193540f900943b6e3a08ba894"],["/categories/iOS/page/11/index.html","09bf49317bbb123f6453d70f4517253c"],["/categories/iOS/page/2/index.html","d0e0e5ec99a066941488f41247fe70f8"],["/categories/iOS/page/3/index.html","1a0a5dd0ecc9010acc54c3a2244ac504"],["/categories/iOS/page/4/index.html","f35406ff004d3c19a0b4dd81de615857"],["/categories/iOS/page/5/index.html","b6e3463829f745f57b61699ddb7edb2c"],["/categories/iOS/page/6/index.html","a079a9ea7e355f2d1e2b4b4ef80492dd"],["/categories/iOS/page/7/index.html","3c304005189f97ba999ff7f5212d948a"],["/categories/iOS/page/8/index.html","db90d3fb370ace7dd0765425b6a7f8ea"],["/categories/iOS/page/9/index.html","a5449afb681965c5f16bc178fbce0486"],["/categories/iOS面试题/index.html","a8c845a37338e6fb1c46561e6f1bc6dc"],["/categories/index.html","c918f798fd9a7375ecd502624c9d0b1e"],["/categories/random/index.html","402e5d71a6eb410012b29d1992fc9476"],["/categories/三方类库/index.html","793d2831baaf160d1f6c72da51f895e9"],["/categories/函数式编程/index.html","6547bde52262985b2c7a62bfaff90f5b"],["/categories/子类化样式/index.html","bde0b7c668a0c9d0e73b77035acccaf5"],["/categories/架构设计/index.html","c82bc6a3d1829ff208580380b0e95d99"],["/categories/用户体验/index.html","2fd26e490cadc948d8bd0ad5532c2ce1"],["/categories/设计模式/index.html","4bd0f4c04af1a83fa1df5c1993ed5309"],["/categories/设计模式/page/2/index.html","9e742ca620cefb94462433d446f72d39"],["/categories/设计模式/page/3/index.html","74302cfbc5312282c058bdc6af88d7d5"],["/css/main.css","478b917f9b16afdf6ddaff7b80eda71a"],["/hello-world/index.html","f12092e6368ea04835e23a9c0fbab448"],["/iOS VIPER架构深入实践/index.html","78fa4d69072491bc3354db3767923c61"],["/iOS 自定义视图，输入表单和错误提示/index.html","2fc2730c0178e6b05a464ab4a2290a6a"],["/iOS如何使用iCloud文档？/index.html","f8b399624daaedc6da99b3cefa38b345"],["/iOS子类化样式/index.html","dd223d8ad62d396789da0f7fd70fd1aa"],["/iOS自动化布局编程/index.html","9517b6caad48bff251009ae770f9081a"],["/iOS自定义转场(By Swift)/index.html","e8ab5ce9415c08148a5f4932f55c7c0a"],["/iOS项目架构：使用VIPER/index.html","1322efcf51c61c25656212d634de9cf2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4ef2ac41d93cb801a2bc7e6140b900b7"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","e6a19b7bfebabdde68cd18a7d310e698"],["/page/11/index.html","6e83772170ed27cb21de35803956ad16"],["/page/12/index.html","26ededca74dd27c34d78b615ea19d593"],["/page/2/index.html","cf589638c534861495c5e30a119d7334"],["/page/3/index.html","0496d401f1bbc50d31d0c539390e6f83"],["/page/4/index.html","f6a9c37ef59770a0520b968fd1b16f28"],["/page/5/index.html","1566f2eaf2d47df217db29595f9ed45a"],["/page/6/index.html","f6e2a09f9418205ac1ffb3e3f21d853e"],["/page/7/index.html","30e4215e22e2730a8f89f6f224605fa8"],["/page/8/index.html","5f570409ac87df62b91a63675107ac9a"],["/page/9/index.html","aecbda70dc1ffae4f61e79e44bb0a9e6"],["/schedule/index.html","73dc262bdec5a1876b328b6ca5425146"],["/sw-register.js","1a1f7cc59c2719bb10dc16bef4015f0b"],["/tags/Advanced-Classes/index.html","5da4e06bdf0c0054b891e6841b9409aa"],["/tags/Advanced-Swift/index.html","195ece0f44680090d83c2283c6b123ff"],["/tags/Advanced-Swift/page/2/index.html","58f5bdfc940f59e1dabc6cae31c25c53"],["/tags/App-Architecture/index.html","3619df7cf23c56df1ac361c068709b04"],["/tags/Arrays-Dictionaries-Sets/index.html","7dc4675a1715426e1ce438c2aca9db14"],["/tags/Build-in-Collections/index.html","8de87f5130c6e0e211ad2e4d0d7d6c20"],["/tags/Building-Your-Own-Types/index.html","9379281b46d99f4f9706d1e353be4ee2"],["/tags/Classes/index.html","4c750f344f2c8168a7066d5f37f9ea1b"],["/tags/Codable-protocol/index.html","c7ff2ea292c74f2826e4edc834b8c65a"],["/tags/Collection-Iteration-with-Closures/index.html","5028d412460d50f8f2dcde2a39f9b79a"],["/tags/Collection-Protocols/index.html","5ef4e9ebd23976a841d59d30927b4d78"],["/tags/Collection-Types/index.html","d30f7189b888f0aa09fbc62b8ae1507d"],["/tags/Collection/index.html","4398114bd7f1c5c467f6829aa747ada9"],["/tags/Collections/index.html","331a4e32bf90408d2b56bc0e117773e5"],["/tags/Combine-framework/index.html","e17208e09d2cb355a7aa7221c5a4e89c"],["/tags/Combine/index.html","8b010912999021c0a47c0b80fc514155"],["/tags/Dependency-Injection/index.html","c68b50be1a1ba47e17436c9a8fae98e4"],["/tags/Encoding-and-Decoding/index.html","5c63d45e046686477b6c11e839f4af21"],["/tags/Enums/index.html","5551e545e08b411798d79ec0a511fe78"],["/tags/Error-Handling/index.html","9d248582889a360651b93a098d2f39d9"],["/tags/Functions/index.html","5259edeccfc60d9b8a5e5053260dc478"],["/tags/Generics/index.html","7166c00323c15dba36c8302c8bf5424a"],["/tags/Grand-Central-Dispatch/index.html","692748ee66865c7fa06f14702bbfa320"],["/tags/Interoperability/index.html","3bd5656f83e86fa0b24534a408632675"],["/tags/Introduction/index.html","9f66ad3b2b459c4667ad797b5dbb11db"],["/tags/Methods/index.html","af82101c9e2c9ea7d45ad80aaa22517c"],["/tags/Modules-And-Hooks/index.html","a6ce702d249935dc3662ce6dc76bc591"],["/tags/Optionals/index.html","114e3916d12c5419076d836c6f19cc7b"],["/tags/Promises/index.html","b67f04e531839aadddd7331c3933e6a7"],["/tags/Properties/index.html","9ec68f1b089289f027c1958738d8f6cf"],["/tags/Protocols/index.html","d0c53c69d7cddd22ff38938a6e85a005"],["/tags/Result-Type/index.html","e57e4b891422a3a0097bf885ac1d9b80"],["/tags/Server/index.html","f621888bb50067a6adab8cce77c5f83c"],["/tags/Strings/index.html","6574786872792338ed56e5feb35adc22"],["/tags/Structs-and-Classes/index.html","cca29d0b9f3aa5b97956dd327d724de4"],["/tags/Structures/index.html","059c903878c430bb246fceefec988dbb"],["/tags/Swift-5-0/index.html","5821ab6c06f6dfc24dcfedb7085088ba"],["/tags/Swift-5-0/page/2/index.html","db2c9509ae2f56f190302381e22ee76d"],["/tags/Swift-5-0/page/3/index.html","e842f2a1311a5e6494e2c42f2466e624"],["/tags/Swift-Apprentice/index.html","786f715b23e67ed439d64f8223e8a13d"],["/tags/Swift-Apprentice/page/2/index.html","349fa4221a29d14131eaabc2512b5ee8"],["/tags/Swift-Package-Manager/index.html","c3cb8130b0bf0ed89b3a98124dcbb88b"],["/tags/Swift/index.html","cc6502899b0db035751681e17a778117"],["/tags/Swift/page/10/index.html","da6bca9aae19b3ee11df47806ebc35d5"],["/tags/Swift/page/11/index.html","bec26de2ee530316969bf7877e737eac"],["/tags/Swift/page/2/index.html","6865ee45b8f67637c04dae5d45109425"],["/tags/Swift/page/3/index.html","b8cb18e994e1ded37bbd4ac0e63b1fad"],["/tags/Swift/page/4/index.html","9c29be8279a651750a25341e7979d950"],["/tags/Swift/page/5/index.html","c7c94872ef42cf00729d50f0a84e06a3"],["/tags/Swift/page/6/index.html","f3ffa1c93695ed209d941dc3445ede4d"],["/tags/Swift/page/7/index.html","2cc9b5b10adfde3a5aaeee1ad06acdcd"],["/tags/Swift/page/8/index.html","d394d0513f7554ac6035cb14ca64a1b4"],["/tags/Swift/page/9/index.html","2345094c2160d181ddc8fc46058bcf34"],["/tags/SwiftUI/index.html","090f2a3abd4b45571203fc4042ca46d0"],["/tags/UICollectionView/index.html","11adde8dfa404ece34a94eccb5a36afb"],["/tags/UIColor/index.html","4fefab556d5866a1493a0daeb0c99e16"],["/tags/UIImagePickerController/index.html","f14007243ca6c478b1b16cdc11a9570b"],["/tags/UIKit/index.html","3bfcfb2ae1c1e57ffbcc54af5f7ec370"],["/tags/UIKit/page/2/index.html","341a696fa248f915899650bb8785ed97"],["/tags/UIKit/page/3/index.html","59350eb70a4ae374d980cf37248165c0"],["/tags/UIKit/page/4/index.html","551bd4dc5dfb5549fbdb4aab69222587"],["/tags/UIKit/page/5/index.html","5ee366b7225f2686374b005e422d4202"],["/tags/UITableView/index.html","39a7752b5da5c7682f3034a807b9ce0c"],["/tags/Ubuntu/index.html","84726016bba04bd56a8af4d537615176"],["/tags/Uniquely-identifying-views/index.html","3007c8e9d2efb863302e19c7131dbc37"],["/tags/VIPER/index.html","1b48c4370086369c6cc66f6e0389b937"],["/tags/VMware/index.html","a8bc2fcf4cfc9c70249c696473f67d5e"],["/tags/Xcode/index.html","21532cfc813d88de323519e42016166c"],["/tags/appleOS-Networking/index.html","a4e240d6de615b10052a87d3815b093f"],["/tags/enum/index.html","bf33aeee32652aecaa6fb4d206fe1ac9"],["/tags/iCloud/index.html","7059eff9aa05a2c65a1fd74be3c7041b"],["/tags/iOS/index.html","7139b6f1bc46ecd09853eac30befa146"],["/tags/iOS/page/10/index.html","4fd056826c1154219a20222d08d55750"],["/tags/iOS/page/11/index.html","1fa6b3694eec10369a48206ab20e1452"],["/tags/iOS/page/2/index.html","4efa9036be0f844e6b963db831bd30a8"],["/tags/iOS/page/3/index.html","9a79955b97307e7cc402301be1313146"],["/tags/iOS/page/4/index.html","ac22a962568ffdab58457fe2a80f00ef"],["/tags/iOS/page/5/index.html","c0e5d33ed21f2c2b66ef0b483dfb7329"],["/tags/iOS/page/6/index.html","ec9b9e610f8f42ea25406f534a288c8f"],["/tags/iOS/page/7/index.html","3ef9a37834605096e930719a94990e75"],["/tags/iOS/page/8/index.html","769e4cf202323ed8a1b2669b7b8a5be4"],["/tags/iOS/page/9/index.html","155a65aeb91d4262d77d58abc9081da6"],["/tags/iOS面试题/index.html","6977c80907b8ce3deb6ae7b97e311187"],["/tags/index.html","a38c0abd56599a0f92b28b9a1cfaa875"],["/tags/non-optional/index.html","8e0c631b7b39f12afae2224c98fffdbe"],["/tags/random/index.html","f515f2dab9aaa4c9fb87b25aa006181f"],["/tags/transition/index.html","cc485a9639e3fe5692f4209e37239b2d"],["/tags/三方类库/index.html","da0314571cdedfc3e440bd910ee4ae8e"],["/tags/依赖注入设计模式/index.html","b1e99209966e6126adff45d1d18f7e68"],["/tags/函数式编程/index.html","364e21a3b964be7233b0771517c86417"],["/tags/初始化模式/index.html","e5580f82efc273213921fc718c055d8c"],["/tags/单例模式/index.html","b091376430fb7b86392442e35adf2876"],["/tags/原型设计模式/index.html","0c5a93d82f4172c54fc55dd129b8abd7"],["/tags/命令设计模式/index.html","a2642faafc5f827a7c2f5640940b6b95"],["/tags/基本控制流/index.html","03a0768d2e7f9b0b9d1a0c5abf90d5ef"],["/tags/外观设计模式/index.html","afbfc03388dbce499ab87cc9db1be439"],["/tags/委托设计模式/index.html","2719a4e1062d6ba2fdd00332002f49f3"],["/tags/子类化样式/index.html","425f8421e86250fa68449c49f907205b"],["/tags/对象池设计模式/index.html","fc086b7a9c71a1394ca202f3b1fc1b0e"],["/tags/工厂方法设计模式/index.html","e9651930a579e33c96da2b6b10f998ef"],["/tags/工厂模式/index.html","abc5e932c9dc8565027dac0e923e1968"],["/tags/工厂设计模式/index.html","38ff45bb549b6de40c2791ce7f9a874e"],["/tags/懒加载模式/index.html","e7406be89fcf8982dcd4c7c438097114"],["/tags/抽象工厂设计模式/index.html","77adec75dd46a54686365da367ce72be"],["/tags/构造函数/index.html","9bc0ed05a46c78685e1a93cc600f70d3"],["/tags/架构设计/index.html","a35302eddc0c487392b6552b19cd0ef8"],["/tags/生成器模式/index.html","4acb37f908597c1c434a92249bf915de"],["/tags/用户体验/index.html","d977474f6cfec894018960bad80e5265"],["/tags/类型与操作/index.html","54e70c4895ea0f08ac0472ba9c6edd74"],["/tags/自动化布局/index.html","d31408959790a929f6b7a288b2efd40d"],["/tags/自定义UIView/index.html","bff41a5fd552a586b76762215341e9f8"],["/tags/自定义转场/index.html","4d7b3254dae92108d8c5df9683a6558a"],["/tags/自适应布局/index.html","517ac63063ed31d1c74ccdd69913e52f"],["/tags/表达式、变量和常量/index.html","49c18eff48235399b1f1112e496e47b7"],["/tags/设计模式/index.html","3324a9734e11e9ae81bf4f4646688298"],["/tags/设计模式/page/2/index.html","b1c1c7b961213bb76f88f6f5e4468db4"],["/tags/设计模式/page/3/index.html","77982c4ef9660ba122d8cb88b1527b0a"],["/tags/迭代器设计模式/index.html","0e1c656db66f0d0dffca813f84c53013"],["/tags/适配器设计模式/index.html","088ddb6d9ef2c304dbc6ebd66e222dcc"],["/tags/静态工厂方法/index.html","402cdecf1eb4a4e249542ce77336dc4d"],["/tags/高级控制流/index.html","4436ad6497e21e1be3f824d4af756b2b"],["/为iOS应用构建输入表单/index.html","9f180b98ef88be4a5b27745526956a86"],["/产品开发的幕后花絮/index.html","4fd064e98726c591950e9229fa9d624b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","42ff3ce3be5cca7cb284d747365d9df7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","19580e4acfc5ee34533c3a90b35c7c92"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","02f6f1ee3cdbf3c6d950b5439fc2136c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","aba97a539d5de165939dbaecda112854"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a7b8efa3568bce0058ae67df7a777cc9"],["/在Swift中创建自定义集合/index.html","dbebf3658c77e2f309b4f669cb1ff9f4"],["/在Swift中处理非可选选项/index.html","efda6fefeff550fcf97d115ec02f0d8c"],["/在Swift中生成随机数/index.html","9d6d08517a1bdfc37237c0e0453e5418"],["/在Swift中重构单例模式用法/index.html","8fa39a2bfeabeb214c7f838429972d70"],["/如何为VIPER编写服务？/index.html","9c426c819d10a59cbd37451db4ccedaa"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","304f58b85018fe2aeabb1ae73fc8c1e1"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","6954dfa7d2f44a98182f1a08bfefad82"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","12d916ee70feb8f70ce71f756b9a08cd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9282b15ba5d864c72c47f7ea76e61fdd"],["/掌握VIPER架构/index.html","06aa8dcaf44420d15695df0d27e87dbc"],["/揭秘 WordPress Hook 系统/index.html","a6d570abd34b0b6b122772677f6920b4"],["/比较工厂设计模式/index.html","ef2a2323d194fd39766e893ff897c932"],["/深入了解Swift中的Grand Central Dispatch/index.html","58c5e9fafc9c8cbcbcf884a767c9799c"],["/深入研究Swift框架/index.html","4f8d5c55287aaced2508e11b3cb2710c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9f69aaaf63f7dd0aa270b5144a3eab92"],["/选择Swift而不是Objective-C的5个理由/index.html","a7a64d9a5953e2943318b6af80803471"]];
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
