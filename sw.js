/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","973ca8ba07eb838c57889bec9d91dde6"],["/2020年iOS面试题总结(三)/index.html","55ab08234d50188e0313cc6a68b70d97"],["/2020年iOS面试题总结(二)/index.html","5eac7b14526eb6fc3e041661f7c9522c"],["/Advanced Swift系列(一): Swift 简介/index.html","0269bbafdaa090242f88dae1ef197f1a"],["/Advanced Swift系列(七): Strings/index.html","db89e05270ccae15bdb67502b59db890"],["/Advanced Swift系列(三):  Optionals/index.html","7f94094a7704f142c835272195955fb4"],["/Advanced Swift系列(九): Protocols/index.html","7fe2fa33c458589aeb19ca91e94a2dd9"],["/Advanced Swift系列(二): Build-in Collections/index.html","bf421663b75a56bddff2808d1397dbdc"],["/Advanced Swift系列(五): Structs and Classes/index.html","0f6232c2da512a5aacbe8f22aaaf95ba"],["/Advanced Swift系列(八): Generics/index.html","c21079946ebb6bcc07445e86a57fbf79"],["/Advanced Swift系列(六):  Enums/index.html","f530f8aee46869c8283a2bf9dd82d788"],["/Advanced Swift系列(十): Collection Protocols/index.html","8da15086fe462eb008fe37855495dc8a"],["/Advanced Swift系列(十一): Error Handling/index.html","dc1f2d50bf4385d97118d3d01bda75bb"],["/Advanced Swift系列(十三): Interoperability/index.html","a4b058aacdf7b8c972277c1d53832928"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","8e1f8f32c3528abf5456fdb4048789f0"],["/Advanced Swift系列(四):  Functions/index.html","1c76341596d33ab51441aadf03e6a858"],["/App Architecture系列(一):  简介/index.html","890294165c022cfc0b4868740c8115ef"],["/Functional Swift 初探/index.html","e9026cc74a15c15c2d9ce150265c4b22"],["/NSCODER和SWIFT初始化/index.html","9492b6868c9b0cad13c4a8a0b18c5001"],["/Swift 5使用UIImagePickerController拾取图像/index.html","7897b3bea598ae1c7313e85f1ed220b8"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","06267c01f40fffa683b11cf363814662"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","28e6d7450179ad8c7d0f5606b64f7f01"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","9d07a4534879cad93c292aa254b8358e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","2ded7509b8d73a8628fdd876b582aed1"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","64051df1c3164abeef43cc3ac0e92ddd"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","f7dc38ef61b34758426516fcb110071a"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c33173956ea1878f74615a47a2112395"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ebd02ff73e74615d3628a722c8376187"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","54a5b43ffedc78ca4bfd208e36795f78"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","b66a92f159729ca4ec340876b0ca0f95"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","79010959030b6906fdf23492703f8a42"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","b6e323d970cf0f2a122c438458464b86"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","88966eda0ebefaaecf62e0ef64da6103"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","5529385da5277d3e3172f77891076073"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","b0b5394cc055d7995c3299ca08630464"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","52b9cb75e8eeade7d93eaa2433d4dbb7"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","5c10d34a676b75afab4bcef647401563"],["/Swift CompactMap vs flatMap：差异说明/index.html","08f3e063fd7afde37471e09e9d76e9bb"],["/Swift Grand Central Dispatch 深入实践/index.html","118a84ee8807f6e551ad1d54638f11a6"],["/Swift Lazy属性初始化/index.html","d59d393261eb2cd19b7a881d9a7696ff"],["/Swift Promises 初体验/index.html","73f062ce748a1786606aef3ab4563fa9"],["/Swift Promises 探究/index.html","028e18abd7d077d8954f7af155b50834"],["/Swift UICollectionView使用指南/index.html","2bac211bebade4ac3ef6387bc3e8a426"],["/Swift URLSession 和 Combine framework/index.html","8cbb5a71597e569579327dd5ac040028"],["/Swift 唯一识别的视图/index.html","ae42f8b6d6131c6d694653dca4f6ca02"],["/Swift 如何学习现代UIKit？/index.html","5bb15f684580770384ccaad2f8cab226"],["/Swift 用 compactMap 替换 flatMap/index.html","26f73473f26c441362272f4827cd7458"],["/Swift 选择和播放视频/index.html","e8c1a5eb28fc4d63ab68a65b82ce24eb"],["/Swift中UIColor最佳实践/index.html","7b93602a60b0dded85feaba84425ec5d"],["/Swift中快速简单的工厂设计模式/index.html","40ab51a72891100213c5ca776607884a"],["/Swift中构造函数与静态工厂方法的比较/index.html","ec20856a9fd150e64ab29559a1154bd4"],["/Swift中的UITableView教程/index.html","4e5aa1da6d370cc865dc4593a76a7129"],["/Swift中的懒加载模式/index.html","a93e3200f2b1da2cb39b3b2991ab1ed1"],["/Swift中的模块和挂钩/index.html","68ec43edebda842492bdbe7de5fd00b2"],["/Swift使用布局锚点添加约束/index.html","3f0971370b71d0fefb6add0357d37079"],["/Swift依赖注入设计模式/index.html","19da3affef37c8e9873a95b03c4bd88b"],["/Swift关于Dependency Injection (DI)/index.html","04f1447a5ab9cd074997d60bbfcf4484"],["/Swift初始化模式/index.html","722761ad8589d80dd6f744fe76cc7d02"],["/Swift单例模式/index.html","67a2d1fc416a877c7a3863d57d3707ac"],["/Swift原型设计模式/index.html","57c123e87d7d4e9374c39068177cb409"],["/Swift命令设计模式/index.html","3ad6cb760a295a6a091c0c8cf5c67a0e"],["/Swift外观设计模式/index.html","f8e2470fdb5e98243b7a158c6eb658eb"],["/Swift委托设计模式/index.html","89a284401420617b748284029cb17f72"],["/Swift对象池设计模式/index.html","94c074adb276e51daf2689e1c97f2608"],["/Swift工厂方法设计模式/index.html","8426ba0b9578133726d7e535cd3e5b86"],["/Swift带闭包的懒惰初始化/index.html","12e87c7c3ee522504017676529bd4956"],["/Swift抽象工厂设计模式/index.html","11aba50b5f75a7015d1e14f2ab10277a"],["/Swift掌握iOS自动布局锚点/index.html","1cfdae1bce2bc7a7022ec47c32368d7e"],["/Swift支持旋转的自适应单元格/index.html","d1771d0c645d8f78c3a3aee510e245d7"],["/Swift枚举值/index.html","516f328aa65533683773ddf28c864243"],["/Swift生成器模式/index.html","23e53058db2902655fa029fb6a3ae413"],["/Swift结合Xib文件自定义UIView/index.html","1e7e0f32f29214981dc4c9aaae012fbd"],["/Swift编写的20个iOS库(一)/index.html","91b3f78766a41b2155c3181df7d69513"],["/Swift迭代器设计模式/index.html","46892d45e0ea311a070a394bb42d0d06"],["/Swift适配器设计模式/index.html","3a2eb5a9eba937469b92ccb1d36a0c5b"],["/Swift静态工厂设计模式/index.html","134faf6a0f9448bd2c600ab7b004bce6"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3838465c6dc960cb9ba4c95f74a8b56e"],["/UICollectionView data source and delegates/index.html","8bf02a629c344ff76c4da0743e22a4ae"],["/UIKit初始化模式/index.html","9fb87755b253565d7cf00d171c871bd8"],["/Ubuntu18.04替换国内源/index.html","d6d39498fc98536b178f3272744bfedf"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ab28dd49888aefba6fbf31e388fe95cb"],["/Xcode扩展/index.html","ae88f842487de813f51e26d27953160f"],["/about/index.html","a50d24f50a6438b77edc07e8c6427725"],["/appleOS的Networking示例/index.html","1736ccd2b03c70f9f2ee921c77bcfccb"],["/archives/2020/04/index.html","697ba832dd2f9f84b4c77f7f601295d8"],["/archives/2020/04/page/2/index.html","cb89e29ad80ec4afd21f7f2e03d6053e"],["/archives/2020/04/page/3/index.html","adf4a847f8622887935fe8d41da51aa6"],["/archives/2020/04/page/4/index.html","e42116a28d8d53563ec481061fb314bc"],["/archives/2020/04/page/5/index.html","d02811c76a552a58296a805b6116a4ed"],["/archives/2020/04/page/6/index.html","fbf2025c905db672fa0445eb6e05dc16"],["/archives/2020/04/page/7/index.html","47f34bbdab9fae5c88a2dcab2538d60a"],["/archives/2020/04/page/8/index.html","c53ac8dfa9d96fa28a7be26bab340975"],["/archives/2020/05/index.html","75f3e91ba3c895a483d851723e99eb5c"],["/archives/2020/05/page/2/index.html","6ebfb5043da5436d92f37cc9bd17251c"],["/archives/2020/05/page/3/index.html","1d7aea37d47a1280e4eb9226ac95841e"],["/archives/2020/05/page/4/index.html","e26dd1406a12b0c1924ea4cc714b310f"],["/archives/2020/index.html","8f75ea0206ddf37878f575debc9ba7ce"],["/archives/2020/page/10/index.html","e9dd8e034cd0c58c04d3ce4927e08463"],["/archives/2020/page/11/index.html","03dd76801f6ed6e00192976f2a13877f"],["/archives/2020/page/12/index.html","6bbc73fedc31b18dc7d404019556e75a"],["/archives/2020/page/2/index.html","db0d4c4ededa3533a1ea39d6dec80b37"],["/archives/2020/page/3/index.html","a3069aa29af1594f1e3e33d46c8c236e"],["/archives/2020/page/4/index.html","74205c767124fb8c9d02efa82cbad8f7"],["/archives/2020/page/5/index.html","74c8baeb5827dfd25343964373da2cab"],["/archives/2020/page/6/index.html","5432e2d200e612118a764fa767a27b64"],["/archives/2020/page/7/index.html","bd6e938c26b1586e7bd58d7cf4191add"],["/archives/2020/page/8/index.html","4bad0443d90ec68f9822a707d06dfdc9"],["/archives/2020/page/9/index.html","c3def88d5c7489115bec2988f6948a1e"],["/archives/index.html","3353f693dc8496e9a5c027bff782103d"],["/archives/page/10/index.html","1266c239b8f49781526526a452654ef3"],["/archives/page/11/index.html","2333968ebc091610e04f786cd78fba4c"],["/archives/page/12/index.html","63783d38b1d10106df430ce9c981a8fb"],["/archives/page/2/index.html","c704e69e3b8f72b417a59c5c64db8572"],["/archives/page/3/index.html","ac314c23f9fea9b1cab73fcd67568db8"],["/archives/page/4/index.html","bc22371ded0bc2b29769b282e3233177"],["/archives/page/5/index.html","b8dcaecac967c0041567099545921da2"],["/archives/page/6/index.html","9038f8d4532d685aa1ff0b1a1abdb658"],["/archives/page/7/index.html","33f95fec0faa35e3418bbeb145c15646"],["/archives/page/8/index.html","9122338f32f31951431fcf53a11db6bd"],["/archives/page/9/index.html","88e2b2ed42c245b8b841fe9e13e661c9"],["/categories/Advanced-Swift/index.html","819bf04b243aea34be65b6b40d8ccec7"],["/categories/Advanced-Swift/page/2/index.html","a7ea84e7cfd692704e38ba0a1195f7e2"],["/categories/App-Architecture/index.html","fde96d149d1c6eaf15e67a6474b6dd92"],["/categories/Codable-protocol/index.html","54389fd5e7cceeab04daa11d5922487f"],["/categories/Combine-framework/index.html","f65b36a08a910bccfb60bb3ec6da24a7"],["/categories/Combine/index.html","77550421b383bb5be6279f070c0a9639"],["/categories/Grand-Central-Dispatch/index.html","93991b86fce45574c96a69867b878ae8"],["/categories/Hexo/index.html","87155e8c13ec9193916fd29a0e25d541"],["/categories/Promises/index.html","b9ce41f5060abfad42e77de5ccaf15e5"],["/categories/Result-Type/index.html","b7bfccb1e00ceea6ee3afe90c119a0dd"],["/categories/Server/index.html","940fb95911133b9e33dd7c50e09ca564"],["/categories/Swift-Apprentice/index.html","d4f3c7cef1adb32d0597af7e1801bc77"],["/categories/Swift-Apprentice/page/2/index.html","7d56706af9ee47165119409832c8320d"],["/categories/Swift/index.html","d26d902ecc8ef9c4b89286121976c3ed"],["/categories/Swift/page/10/index.html","4c873b43aa24da2991aa16cd02c181bd"],["/categories/Swift/page/11/index.html","e86bb5ab1c2c47b66f0fd08f1acde0f3"],["/categories/Swift/page/2/index.html","78399f80d1f94383a34b5f12ed09e02a"],["/categories/Swift/page/3/index.html","bb77bafea3fd3c7640775dd59df9e3e7"],["/categories/Swift/page/4/index.html","8e164a7b33b9932977d52374e28ebf16"],["/categories/Swift/page/5/index.html","892e3c405f489e78c40f9d7e7bafa7ae"],["/categories/Swift/page/6/index.html","6c3b7b1c94a5799c8fc9fd9a0efc9c3e"],["/categories/Swift/page/7/index.html","78312bba84ea23cc99c68b4694372e63"],["/categories/Swift/page/8/index.html","09afaf37f5e9600b90dbfe41bc215aa6"],["/categories/Swift/page/9/index.html","3bdcf0c28785b5182d1d7ff5c9b27a84"],["/categories/Swift5-2/index.html","a2e90dca7143ecb91a232badc2dbc1b1"],["/categories/SwiftUI/index.html","be89ecba9d9f66377efeb3ae48be3bd0"],["/categories/UICollectionView/index.html","7028d5c73e0991875998f3dc756629c1"],["/categories/UIImagePickerController/index.html","57e36305a9b0fb76feff6957695039ca"],["/categories/UIKit/index.html","a09d356dad70f9f106322bc563629937"],["/categories/UIKit/page/2/index.html","274d950f567790058163c2ecdb1fda0f"],["/categories/UIKit/page/3/index.html","3ec5407da9df2b40191092c07d483ea8"],["/categories/UIKit/page/4/index.html","24030f24120187fd420c500e33b5d066"],["/categories/UIKit/page/5/index.html","92b9825f0a322e34aa77c3eb41bb5edc"],["/categories/UITableView/index.html","41ea2cc5bef4b72a0a64bb6c74a68c42"],["/categories/Ubuntu18-04/index.html","69c21958b6efe887cd6c9edc98c69c96"],["/categories/Ubuntu软件源/index.html","e3840bd4ef7bc24e97e880484f230d1b"],["/categories/Uniquely-identifying-views/index.html","dbc4a46dc4a4ed8adfdb5d33017b2350"],["/categories/VIPER/index.html","f4ccbc3bed838824e008d685e23de4f5"],["/categories/Vapor4-0/index.html","2c5e0c3c5f625e24a5cba93feabeeb0f"],["/categories/Xcode/index.html","a9399dd38223d9b869f9e4c9c7bb1745"],["/categories/appleOS-Networking/index.html","8a9933e02b6d2c0cd67527f018374d7b"],["/categories/enum/index.html","caaa5a5a027b9f4604df502bbbc3408f"],["/categories/iCloud/index.html","66c11fc30de30c5494a27910454eb09f"],["/categories/iOS/index.html","8d9b6bc61f5cb759c504c58dd8c5be26"],["/categories/iOS/page/10/index.html","bac56869c370656e27ed98a7d3470224"],["/categories/iOS/page/11/index.html","6c221926b95e89ccd988f731276f34e9"],["/categories/iOS/page/2/index.html","877af326e6cd6f26fe9abe95200b3323"],["/categories/iOS/page/3/index.html","6f8186dd3959adb160851e8c7af24cc1"],["/categories/iOS/page/4/index.html","c085a339ba408aad23278810a1707de8"],["/categories/iOS/page/5/index.html","34af313d01d3bb14319d17758668509e"],["/categories/iOS/page/6/index.html","457be910efc085201f8532074403b040"],["/categories/iOS/page/7/index.html","9e37e7292a77e227ab892e7ab536fdad"],["/categories/iOS/page/8/index.html","8df5a479e4f445fe4e377baa8ba18679"],["/categories/iOS/page/9/index.html","c5538499fca761ddf5e254c61218f0c5"],["/categories/iOS面试题/index.html","9a7ff9621311ecca31659a14868e9f6d"],["/categories/index.html","e367f2081cc3cc2352dee878ea6e8487"],["/categories/random/index.html","60b588abb83e2eed6e7a0786ebac0901"],["/categories/三方类库/index.html","c829b66b121da2f2e03170d961fc36de"],["/categories/函数式编程/index.html","39a51849cff4e2f213cbe882a7e2e798"],["/categories/子类化样式/index.html","4a02364010600c0aa27a2fd7b4127ce7"],["/categories/架构设计/index.html","bdf30a59fbc73be0f416f06c5e45f6da"],["/categories/用户体验/index.html","911bc1d5af25b8563f1d617488f9d776"],["/categories/设计模式/index.html","6a1a654024be35a447657de5896df4ce"],["/categories/设计模式/page/2/index.html","dfb882803780ff7ef5c5a62db324f9fe"],["/categories/设计模式/page/3/index.html","f6af4ea9a3a1bdbfb7279e4b01d11e22"],["/css/main.css","5154ae06fa3dba7c7c269b26013e99c9"],["/hello-world/index.html","c4833d6eaeabb51058ca924d74c4caaf"],["/iOS VIPER架构深入实践/index.html","da886cdbd5b94e09f9bcc99a235de77c"],["/iOS 自定义视图，输入表单和错误提示/index.html","292a3af6728698ceac0c7b9ecdb3faed"],["/iOS如何使用iCloud文档？/index.html","997bdce109f7b6a9b9d13e1723c62e7b"],["/iOS子类化样式/index.html","7ed153b4f26b4ff12e1505801132246c"],["/iOS自动化布局编程/index.html","f50dfe7c4b6923fff3fb291760863366"],["/iOS自定义转场(By Swift)/index.html","453aab5b49f45e16f3373d88a48ed9bc"],["/iOS项目架构：使用VIPER/index.html","a939f4d320349593defb59fe50edc7d1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b358854e66ed31a0ac781e1c4eda6ea8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","773bd0653f12fde4b35a6fd123303be4"],["/page/11/index.html","6b3a0eea7d5eca20c3b7280a46a0a673"],["/page/12/index.html","ce5027e5a7ced77265ae03993e5645ea"],["/page/2/index.html","c2d3940bfe0577414b8f4942710c3f69"],["/page/3/index.html","2d3cfdc147db5fb84e9d5ee6d61aced8"],["/page/4/index.html","9c905ccf25f9d19875a1ef6b65a4da6a"],["/page/5/index.html","9ca2f71f5f4f58a949d528d58b93a7f4"],["/page/6/index.html","caf8a3edd75ad1cf2566962851b52bcd"],["/page/7/index.html","61c739175135f6c8bf27d56703c51c08"],["/page/8/index.html","d267736a9306e58f67014cec9fd7cb8a"],["/page/9/index.html","5dc9391e014169b0b1313670ccbc6526"],["/schedule/index.html","6b3e762a5a3d8cbf820bcc9cfb115c7e"],["/sw-register.js","0b8bba4de65928e10cad62a6c000febd"],["/tags/Advanced-Classes/index.html","872ae354a48a05b0087fe0bb2382ac3b"],["/tags/Advanced-Swift/index.html","754a4f4e4de4eb0e30edb75b1728d5ca"],["/tags/Advanced-Swift/page/2/index.html","64eacbacca2c310978d5093b3ba78d01"],["/tags/App-Architecture/index.html","a6225e094efbdb2daf4671f7e6fb322e"],["/tags/Arrays-Dictionaries-Sets/index.html","c4838d3ac223d619256be10985b9915c"],["/tags/Build-in-Collections/index.html","27e76a0cf7a35fc582c7cb52369e9294"],["/tags/Building-Your-Own-Types/index.html","7abbfda70593fc6be5ff2767acdf67fb"],["/tags/Classes/index.html","53dfd18d48029e52db03356391b9cb83"],["/tags/Codable-protocol/index.html","a6e86951659d005d7df5b0042d771037"],["/tags/Collection-Iteration-with-Closures/index.html","3b8f3f358f7c46bd457339575e72a0e9"],["/tags/Collection-Protocols/index.html","fad735d2772f2eab60c51e1b95b088de"],["/tags/Collection-Types/index.html","44e33d042610eeca339ed96dbddac490"],["/tags/Collection/index.html","fb217111d4edee8fc9b98b50976571de"],["/tags/Collections/index.html","b3bbeea2aeef26c6f9ab1db1e97adc4f"],["/tags/Combine-framework/index.html","d4db61bc326c35c331483db2221315ca"],["/tags/Combine/index.html","dffc9115df90a0b3d492b1bfedb4108b"],["/tags/Dependency-Injection/index.html","e5ef33c489b03cb5b2d88d45f617132b"],["/tags/Encoding-and-Decoding/index.html","00666a903839a994167830901d4149ad"],["/tags/Enumerations/index.html","b5694cf4581e452b9270c6c2ace5c537"],["/tags/Enums/index.html","198e30e95d81e67a187768e467111ee4"],["/tags/Error-Handling/index.html","ad909cb87efbf7c654235fb812994c45"],["/tags/Functions/index.html","8dda7cfdb093a3b78b8ebc6a3f57d0e9"],["/tags/Generics/index.html","607bda213e1cbbd7a5f2b1256857488c"],["/tags/Grand-Central-Dispatch/index.html","9e791f424d8b7030a54f26e774c0e532"],["/tags/Interoperability/index.html","29ecab96c2d593851ad7f495e3c01119"],["/tags/Introduction/index.html","446f92083e2e67ea6609027a287a4fe8"],["/tags/Methods/index.html","ba68935e7fb3b47c1c58d14edc00f99d"],["/tags/Modules-And-Hooks/index.html","4fe9e25d9058e3ae0969de7d2b6b783b"],["/tags/Optionals/index.html","e1bbce08fcc4a2661e83720f89242be1"],["/tags/Promises/index.html","55786d912c2423d0bc6773603512d8bc"],["/tags/Properties/index.html","44cda5dd9bb05c14a9dd8c7450530fa1"],["/tags/Protocols/index.html","6905feeb2f992f736c167fd15f71ce49"],["/tags/Result-Type/index.html","ae5f50d31b81696afd524e07947be1ae"],["/tags/Server/index.html","04bcfaf54f9ca1bb9cde74e37f4b90be"],["/tags/Strings/index.html","e66c93af5a96df74cca8c989689556d3"],["/tags/Structs-and-Classes/index.html","45a23def53c3e80c1711d6fa434405c0"],["/tags/Structures/index.html","21942da4d4dae69a691aff442cb38dfc"],["/tags/Swift-5-0/index.html","3cb62f016062c2e7942d70e2bdf9ca89"],["/tags/Swift-5-0/page/2/index.html","8155d839685e775799144c8d91509c61"],["/tags/Swift-5-0/page/3/index.html","a220a8ca307856b035d33150aa5a6cab"],["/tags/Swift-5-0/page/4/index.html","77292ceda138f11e86108432d35a76fc"],["/tags/Swift-Apprentice/index.html","34d55c209ff1ae2f489cfbab70463374"],["/tags/Swift-Apprentice/page/2/index.html","3feac213e5519bdfd7f56022d4ee22d1"],["/tags/Swift-Package-Manager/index.html","4424305f7a596f7889bf0099d68aee25"],["/tags/Swift/index.html","a28fa834beb584c237eb5de76deda646"],["/tags/Swift/page/10/index.html","7710babb86920d412c82bdfe4d00c009"],["/tags/Swift/page/11/index.html","d968cb14e78447fb1f5449ff4ab273f2"],["/tags/Swift/page/12/index.html","1b73ca7145a9f3d77099b77659102486"],["/tags/Swift/page/2/index.html","eb4c73c9ae6359f456f2f722af5a71da"],["/tags/Swift/page/3/index.html","9d4628f71e942587ef44df429fab4b49"],["/tags/Swift/page/4/index.html","52005372fe26efb8415781737f2f00ac"],["/tags/Swift/page/5/index.html","ee2d5fb0a620a88d86627774f1ca6d92"],["/tags/Swift/page/6/index.html","1db6fb3847a71c39e1f7060481194f49"],["/tags/Swift/page/7/index.html","73ba0181ec4841acab6bb8e1785c0366"],["/tags/Swift/page/8/index.html","5cd4d2093489a5da9b311946368451d8"],["/tags/Swift/page/9/index.html","84977644c57e2d70426631dcfe13973e"],["/tags/SwiftUI/index.html","881726655e4eab2236a8dad440e78c4b"],["/tags/UICollectionView/index.html","14bd8472360414b45caf1ee0e177901a"],["/tags/UIColor/index.html","f000f1cd392937924beee3adb20f554e"],["/tags/UIImagePickerController/index.html","9877f33666e8d5f3d0b212d8d0a69f7f"],["/tags/UIKit/index.html","67e6bb31f38cf844dff0126f2d537f31"],["/tags/UIKit/page/2/index.html","b85b795d24bb885346a083a03ce5a44d"],["/tags/UIKit/page/3/index.html","5ff05858d1ada48a8002fc957bf0893b"],["/tags/UIKit/page/4/index.html","bc33fe021ee747f371cba59e4766834f"],["/tags/UIKit/page/5/index.html","065192076c5a4942fa04706c9929e111"],["/tags/UITableView/index.html","6a6135c82af65b57b81bdb3cf782ab0c"],["/tags/Ubuntu/index.html","71ceda3054951f851734a8b2c2535d74"],["/tags/Uniquely-identifying-views/index.html","175176bb6c927b3f78e83f4c0efe9884"],["/tags/VIPER/index.html","6068f7e8334c442ff2ebcaaeabd43308"],["/tags/VMware/index.html","4048f4f4fc17e34a4e9384711ec3d0ee"],["/tags/Xcode/index.html","a843fbf51fce0664306e8f8fd5c5673a"],["/tags/appleOS-Networking/index.html","285b323da1138731454f18daafcbe469"],["/tags/enum/index.html","e3bbfdd36939533da85faec1eab7cc83"],["/tags/iCloud/index.html","33b74610a6cff20cdabfd1e3582d19a1"],["/tags/iOS/index.html","01aa777b4b9de1cd602e9e18b8451b4e"],["/tags/iOS/page/10/index.html","9effeedc4beffa4236d5569752e47753"],["/tags/iOS/page/11/index.html","35104314ea1ea8a1e096f426faf46d7b"],["/tags/iOS/page/2/index.html","728ed476657f296ca75be770ee5455af"],["/tags/iOS/page/3/index.html","f2fbe68a43a5b7cd56f398559a13dd8b"],["/tags/iOS/page/4/index.html","5f8ee0a1f60d8e243b4a0bb7ed715bca"],["/tags/iOS/page/5/index.html","320ce362daa0595e0e0df9bf1902add9"],["/tags/iOS/page/6/index.html","a7eb93757006178ab5a1ec16f84f19b7"],["/tags/iOS/page/7/index.html","e8304ea230c6acf304b170cae7c12a36"],["/tags/iOS/page/8/index.html","73ebda1ba2738977f3478bc5790a2236"],["/tags/iOS/page/9/index.html","515357c44dab3d6d0114f7a74dc07221"],["/tags/iOS面试题/index.html","658d5100179d9e61d584e0546cc359a3"],["/tags/index.html","b385874240aafc96abb3529417d71aa0"],["/tags/non-optional/index.html","fa463e14c6659c097ce00e6fc7d79d62"],["/tags/random/index.html","f0aee38fd3fb4102374ac30ab21f0535"],["/tags/transition/index.html","4963a5459fa1a217cd6e4791f8533984"],["/tags/三方类库/index.html","e16c3c7fc2064d5021d6512fb71fb037"],["/tags/依赖注入设计模式/index.html","16c210eaf24c862add2c819b6b5a6ee0"],["/tags/函数式编程/index.html","8ca188b20d53b2795f1347dffe54839e"],["/tags/初始化模式/index.html","88e855a1889d53c1f44e5d66d479b55a"],["/tags/单例模式/index.html","b6ef5ef7bbf8eea7a20d250a5fa834c1"],["/tags/原型设计模式/index.html","78a7a2458e16635bff2ec36aaab53517"],["/tags/命令设计模式/index.html","77e2bcfbe98417849e987b999169b7c3"],["/tags/基本控制流/index.html","308a0c007022262555c85f073f77e26c"],["/tags/外观设计模式/index.html","c70402019195c4e76608f791145f5b2d"],["/tags/委托设计模式/index.html","db9fb787dee583c35e743d3531f969f3"],["/tags/子类化样式/index.html","824f5bbdf1b8375db9d44461929dd1fc"],["/tags/对象池设计模式/index.html","84cf1a8afa7a58255620c50346991510"],["/tags/工厂方法设计模式/index.html","ae0732d8cf619ec8f6df14fae9c7dd39"],["/tags/工厂模式/index.html","a019afe8b82c7cf289e1ef10dcd6d37f"],["/tags/工厂设计模式/index.html","85984cad5c6b52e04d942d9a567e8d9d"],["/tags/懒加载模式/index.html","0990b6eb3a1e547c8cac85da6d5464ba"],["/tags/抽象工厂设计模式/index.html","f658fe8c7427b763f3d2ca1117f67854"],["/tags/构造函数/index.html","ec750ca273a1cde45157ecf205ec0cfe"],["/tags/架构设计/index.html","e951820d1ddcb20ef14e4bb2c0b39bc6"],["/tags/生成器模式/index.html","7d9b6000a795f1f5e378d4d4718fef60"],["/tags/用户体验/index.html","b8ddac192346a09c13a0ab1fadf34905"],["/tags/类型与操作/index.html","66b10e1b5c74a9d3abaf06cdbdff6891"],["/tags/自动化布局/index.html","b1216aa0fe4de080c66ba28a769a8dd3"],["/tags/自定义UIView/index.html","b810ea274fcd1bfb791f1a3eecb7fb89"],["/tags/自定义转场/index.html","c902e995f92384cc51c5bd58019549b7"],["/tags/自适应布局/index.html","2191a3df9575a85c323b5939a6665224"],["/tags/表达式、变量和常量/index.html","3320598f2fc1ba51194d19fcda2b1ced"],["/tags/设计模式/index.html","b5b257fde8794a665404815ac548a19e"],["/tags/设计模式/page/2/index.html","34aca37f56979bb261cea5e85319f4d9"],["/tags/设计模式/page/3/index.html","d9c4d3a0d9467f3f079bf6f15e85b047"],["/tags/迭代器设计模式/index.html","7cee91528c21af534d7178792ab70b07"],["/tags/适配器设计模式/index.html","8992ff3ff82730e0e04e70613aee3b06"],["/tags/静态工厂方法/index.html","f03a5e39ccce482d3183a81fd13a24c4"],["/tags/高级控制流/index.html","070a2d573f6c2bf934483e80fcf1cb3b"],["/为iOS应用构建输入表单/index.html","123d5838599604b3ad66d8e1a6c7a779"],["/产品开发的幕后花絮/index.html","37137d500897503521f0868c42924a44"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","7f460a2941724dabbe369db95fd2b4b7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d7ce1d0e511988a965397cfd8646598e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","009d61cc64b823bb5579a5aac69bec8b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","de840d57770b5a4c99a167161d20c5b5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","40c108bbba7d01f01432c1b6a90ce1b6"],["/在Swift中创建自定义集合/index.html","aac53b79e06b84725decceef5ce0dd80"],["/在Swift中处理非可选选项/index.html","494a79fcc7675e1a0851836dcf88b7cc"],["/在Swift中生成随机数/index.html","21ab438aed5dcf9f622699cfd6950a21"],["/在Swift中重构单例模式用法/index.html","9b0c9d7bda6b107d8394a7a33d40d484"],["/如何为VIPER编写服务？/index.html","669a93ba4c31f8bc4d06f34e6af967dc"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","78cdf4efbf29d3456a05561f2a751674"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c50a436e93c2376d2e3781eca5eb1159"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","87d87a2514dc76181aa90b02ecbe8ad8"],["/如何使用VIPER构建SwiftUI Apps？/index.html","40e93e714a81331b05a9678c1e196411"],["/掌握VIPER架构/index.html","043d6356c33f1a6c3b8a4da802998e6b"],["/揭秘 WordPress Hook 系统/index.html","081d33b07f8f08fbb714dc7837c74547"],["/比较工厂设计模式/index.html","ad30fa9051a9e49500161ba3354b9693"],["/深入了解Swift中的Grand Central Dispatch/index.html","3cdf62db6d2e7556515df5cde120f7e6"],["/深入研究Swift框架/index.html","51121d1c61c71d7e049c1aa2e0c7912e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","639441bd101a14749875dd8fd14f76f3"],["/选择Swift而不是Objective-C的5个理由/index.html","a35a579cf190880c37cf08e20981e6fa"]];
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
