/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Build-in Collections/index.html","166e88c3272623ad10e220da51f94691"],["/Advanced Swift系列(一): Swift 简介/index.html","b5f63dac0f456d56466804ad0396e3fe"],["/Functional Swift 初探/index.html","e015f855642aeaf0843bad07475fb3e0"],["/NSCODER和SWIFT初始化/index.html","5fe97132bb4360a3545b52192d51c018"],["/Swift 5使用UIImagePickerController拾取图像/index.html","acfdfe6f9c294a594eb0f6430493c426"],["/Swift CompactMap vs flatMap：差异说明/index.html","e35f2af58f506de08cd723c7bba1eb71"],["/Swift Grand Central Dispatch 深入实践/index.html","269047a2906a5e954c92ec15b3ba9dfb"],["/Swift Lazy属性初始化/index.html","e8f1dcdfa41c4b0d51dff5c9fb371ea7"],["/Swift Promises 初体验/index.html","b5b18d2c0954a032dffeb624e0acc67f"],["/Swift Promises 探究/index.html","fdaf792f511a577202f29db960b729b6"],["/Swift UICollectionView使用指南/index.html","6fc7bbbcf8be274253c7d64b9ebc341e"],["/Swift URLSession 和 Combine framework/index.html","b8982c314fe8fa6ffe5176ea45c18cd4"],["/Swift 唯一识别的视图/index.html","ea3af3c8212299145e5e1a66323202ed"],["/Swift 如何学习现代UIKit？/index.html","fd8a096e76db403e313332c62d69ac9c"],["/Swift 用 compactMap 替换 flatMap/index.html","92d5b89b3e74e0df8e1b28d05c043ec4"],["/Swift 选择和播放视频/index.html","9a1c4a96774ea8d9f00d2ed58fd8ce33"],["/Swift中UIColor最佳实践/index.html","7b4fc7e77c3f4b0b87ba0af53a020737"],["/Swift中快速简单的工厂设计模式/index.html","cc865dcee2da3a891eee2bb57d3ab440"],["/Swift中构造函数与静态工厂方法的比较/index.html","94a09944e5ea6eacb6bd05b2696b0972"],["/Swift中的UITableView教程/index.html","3c663317455368189293174103c0b7dc"],["/Swift中的懒加载模式/index.html","c51b21c058fa1558a852c1e35685023e"],["/Swift中的模块和挂钩/index.html","19d7db2eaaf373c6edd562cbc3c3dc5a"],["/Swift使用布局锚点添加约束/index.html","4df5d29e18b5f7f87c5f71319ef0e516"],["/Swift依赖注入设计模式/index.html","20e0d44b1f42ee3449d5fa42229d9b2b"],["/Swift关于Dependency Injection (DI)/index.html","9213f9f05eb326c671d01f27a2247fc7"],["/Swift初始化模式/index.html","789a5bbf8bad3b34843b40a7e3a3f620"],["/Swift单例模式/index.html","82789a08bb28271f9ad478ed0244710e"],["/Swift原型设计模式/index.html","97c428ca1e1751e567830130d38989c0"],["/Swift命令设计模式/index.html","7b29c057fd2d5855fee9c11ff26d7ee7"],["/Swift外观设计模式/index.html","53a89f7636987e37e9af36b40f3de72d"],["/Swift委托设计模式/index.html","fa72e91e5a5bf605a852261eb84bfe74"],["/Swift对象池设计模式/index.html","6f13d4fdf658959ced249b4015bf78a6"],["/Swift工厂方法设计模式/index.html","f3e426cc3170e8455f0ababff680b726"],["/Swift带闭包的懒惰初始化/index.html","78a5acfce42b215824cbf742b5228c58"],["/Swift抽象工厂设计模式/index.html","ead974ae3b88b792dfbfcb562f0d6393"],["/Swift掌握iOS自动布局锚点/index.html","86ad24fa6ea05a2d3e7a2545f4b8d7c1"],["/Swift支持旋转的自适应单元格/index.html","728e11b1a0f7a67f56d300c2e732f839"],["/Swift枚举值/index.html","5b4e1bd0b071c46bf4ac4a2fdcf391eb"],["/Swift生成器模式/index.html","c39179fc75f39ed34fe980450a140a13"],["/Swift结合Xib文件自定义UIView/index.html","0a3892413a4e6d24d14f6aedf56cc614"],["/Swift编写的20个iOS库(一)/index.html","66ac8d21270203680640087a66ddd965"],["/Swift迭代器设计模式/index.html","54b65bf195fc6376e4284c9783dd6266"],["/Swift适配器设计模式/index.html","3c5de1684e29824b93b440cbaa357556"],["/Swift静态工厂设计模式/index.html","ab5cad3023dbb6aebbba0459f22cad76"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e145e50887070324b1d9d60d69cf0767"],["/UICollectionView data source and delegates/index.html","781934281b356ff1ed34a9fff40b33d4"],["/UIKit初始化模式/index.html","eec09b49e07df9722db778c14d7a3b75"],["/Ubuntu18.04替换国内源/index.html","2b92a2249ef9199531287990c8ca8911"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3e5f38f8f93571eee3d7f830c6210e10"],["/Xcode扩展/index.html","380d6b0e30622a83c507069a173b3b28"],["/about/index.html","424e711fb42bcaf77d75b733a46ab764"],["/appleOS的Networking示例/index.html","8a3c220dc5f4e2366dc735b7d7473810"],["/archives/2020/04/index.html","727f156a26e1a59d265cd7a6faf95e94"],["/archives/2020/04/page/2/index.html","1f186de280e32de33b2c8f0863ae807e"],["/archives/2020/04/page/3/index.html","7a856259edd9e7eff1b5c6c68c7ab840"],["/archives/2020/04/page/4/index.html","747cdbdbce73fbe1686b906e5bbac65a"],["/archives/2020/04/page/5/index.html","1cf9063b9091b8ecc9c445133947d713"],["/archives/2020/04/page/6/index.html","61e99ef8f6ab359db5a1ae77145274ce"],["/archives/2020/04/page/7/index.html","d0a66a2b2c7ea2b9a8afe1c26d7f8250"],["/archives/2020/04/page/8/index.html","d089c065633e88834c6725124380bd2f"],["/archives/2020/05/index.html","1a51c2f9346be781615b2dd183419826"],["/archives/2020/index.html","3b23ee909ac921b5c784b2c2df63eb08"],["/archives/2020/page/2/index.html","6a3d0040c7e57a27a105b0afc8e43dbb"],["/archives/2020/page/3/index.html","d476ce3208656195bd3430b99c503120"],["/archives/2020/page/4/index.html","ea751b5795848241a3c360d47b49f3a3"],["/archives/2020/page/5/index.html","eab4bf03904b2e193623f00d6f4af3de"],["/archives/2020/page/6/index.html","acee3f4d154c476529071b062cee3207"],["/archives/2020/page/7/index.html","226a8fabe395f91cec54be86a71cb91f"],["/archives/2020/page/8/index.html","9090836c1862cdfa16960d0a131f8bcb"],["/archives/2020/page/9/index.html","62d27c00791693261150456229d59dd1"],["/archives/index.html","05329a587f3346855a1d377e8a5c1104"],["/archives/page/2/index.html","bd2e71ed0c097c3c5108bd3f9cac46c8"],["/archives/page/3/index.html","288f0c4135270ded35521b12ff1617e1"],["/archives/page/4/index.html","e5e4d3b4b9c0183bb0bb5ba6621ffb3a"],["/archives/page/5/index.html","2be35dfab05d0ad88de9bd6cad3c829a"],["/archives/page/6/index.html","60960bb77e9c9e66e0f43ee98f563294"],["/archives/page/7/index.html","0b9034589ec9d2d8af038ec0453050c8"],["/archives/page/8/index.html","41088c0fce195dff664c1a9cd53f9935"],["/archives/page/9/index.html","783cbbb944759af41ae08c13ebcc7720"],["/categories/Advanced-Swift/index.html","60a4302ff3f94e1b4667302fc611b325"],["/categories/Codable-protocol/index.html","f8ec8474686f7957afcc9eadb9e89249"],["/categories/Combine-framework/index.html","acb100c442b3fb9442be4812e1d51b26"],["/categories/Combine/index.html","78acef8b58db4d819d4cd23b1ab9a746"],["/categories/Grand-Central-Dispatch/index.html","6d660538ce31e22b6fcb2928e19d3712"],["/categories/Hexo/index.html","5c1c4ad56d74ef187840b4c35a147652"],["/categories/Promises/index.html","a7c8d0b7e74c67379175ca153de57ba7"],["/categories/Result-Type/index.html","ea67edc6ca2653ca45234a86d1766f6d"],["/categories/Server/index.html","4f9324813272e37916514daa2ed2a840"],["/categories/Swift/index.html","611dab28c4ecc29a608a302c301a2184"],["/categories/Swift/page/2/index.html","ef52a7b85a9eb68b5c6d7ccbe0413927"],["/categories/Swift/page/3/index.html","f6a5052785c2db8053cc74b6e8d6a8a6"],["/categories/Swift/page/4/index.html","f0fce304ea8cdfa38424406484525a1d"],["/categories/Swift/page/5/index.html","92af873a4749a959117861d42a889d34"],["/categories/Swift/page/6/index.html","ebe3c41572edb644bf5138d00df27a26"],["/categories/Swift/page/7/index.html","65745e1f6feeb1eb4b9de2d7e5f2e29b"],["/categories/Swift/page/8/index.html","daf364ac17b62046400b7e974835b9a0"],["/categories/Swift5-2/index.html","1cbd46be843ef22f9624230c0e7d6893"],["/categories/SwiftUI/index.html","51b1620d7e3fdaee386502bc65412f3d"],["/categories/UICollectionView/index.html","c1f8669063dbd65fd8b4b8725d65a573"],["/categories/UIImagePickerController/index.html","eaf160470f59f79efe35330331709cd0"],["/categories/UIKit/index.html","98ff5ee2f4120241c2771ff20aeae70d"],["/categories/UIKit/page/2/index.html","0e8e696c9433976cf09c5f84ccb420b5"],["/categories/UIKit/page/3/index.html","6b0f2dba9cfffda0c090993c8a6393a8"],["/categories/UIKit/page/4/index.html","bee14b964e4ea13196cd87a344786148"],["/categories/UIKit/page/5/index.html","c3be1dd60ef4d11f0ef0f861b0bbb391"],["/categories/UITableView/index.html","a2e961ade26f6220428ba0ce0fedee35"],["/categories/Ubuntu18-04/index.html","7f35c5ea811ab395d8ac0b8add019c5e"],["/categories/Ubuntu软件源/index.html","ebed766e153f0c49c19352b8546f15f2"],["/categories/Uniquely-identifying-views/index.html","24881ad913b7d95f815c270055cf97db"],["/categories/VIPER/index.html","0941e12557da760a5ce9d5a863600acf"],["/categories/Vapor4-0/index.html","bf2b008076f2aa362535e456ef9a79c5"],["/categories/Xcode/index.html","0b20cc1f4c56ec64d68e3e7c29cbf607"],["/categories/appleOS-Networking/index.html","b1651dffa49ff45864a76ebf429354f5"],["/categories/enum/index.html","bbc2b7bb39b8815395c5718d53dbf23d"],["/categories/iCloud/index.html","21ab0309c1896985443b8a79c425ea27"],["/categories/iOS/index.html","b671a6c9913388ce1aa3c2af1ab17353"],["/categories/iOS/page/2/index.html","bff4738a87c83fbf6db5f40f6ae21cf0"],["/categories/iOS/page/3/index.html","f2e4c8537171db5ee9cab22059dcb409"],["/categories/iOS/page/4/index.html","16ec9ecada616b51280de8a5ced04032"],["/categories/iOS/page/5/index.html","ace741f42338e6aefd502ba83209de15"],["/categories/iOS/page/6/index.html","906d8b5f166628e36549ecab38968e08"],["/categories/iOS/page/7/index.html","84c36b6c6ef3a9112514026422978c70"],["/categories/iOS/page/8/index.html","04cb5aa11df057e472d5db25dda52400"],["/categories/index.html","3d26c536116d30e33bc4895b7c1e0bd6"],["/categories/random/index.html","6ae2cb76ff4ceff95b6b7af3f38c23b2"],["/categories/三方类库/index.html","9d0dd8cd030d552d812d5b85807c32fd"],["/categories/函数式编程/index.html","3c705e691e1f92bb3e12608e5e3bc13b"],["/categories/子类化样式/index.html","98f46838a70435031b8f35c6a2244362"],["/categories/架构设计/index.html","47de4ea29c5878a9a299f9919117ea4a"],["/categories/用户体验/index.html","7fa4594dfb558021ac61b84f5daf8013"],["/categories/设计模式/index.html","57daf021d575103978cc31d2884549cd"],["/categories/设计模式/page/2/index.html","a6b2dbcfb904da7f38ea7091709a62c0"],["/categories/设计模式/page/3/index.html","440a1cac04d13afe6557e9c8c7f6f901"],["/css/main.css","904ad80a5a94e67bbe8d18975dd8ef99"],["/hello-world/index.html","8fe1702a10432dfa168258885c079cfd"],["/iOS VIPER架构深入实践/index.html","a5c2a4f83d7e02b36aef4ae10cc4e335"],["/iOS 自定义视图，输入表单和错误提示/index.html","13d36e89ffd2eae7d952287c165ac7fb"],["/iOS如何使用iCloud文档？/index.html","712a152a0f8c15156071d91606c38613"],["/iOS子类化样式/index.html","4fc50d8d07655e3e4e11ebe7fa2a4fec"],["/iOS自动化布局编程/index.html","89637f7f66c28e7b41c57bfcd6353f56"],["/iOS自定义转场(By Swift)/index.html","1581e58848f9d45d01d3dbe1b26d9227"],["/iOS项目架构：使用VIPER/index.html","71e72f0a6920ca37623e6c25b1d684c1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","988e8e554f833ac7cb01ec4533d6bc15"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4c309aa10b7b1451c4152b3f7f43d345"],["/page/3/index.html","32ff0bc1cc5a0a5f2a5f7eccb3b3e180"],["/page/4/index.html","8bc7c17e297e552946e816a5cd62ec8b"],["/page/5/index.html","f4ac24932f2d30cc0b5a33dd26047701"],["/page/6/index.html","d2a3ecd1bf581a7c5de9f2ff9dfd591b"],["/page/7/index.html","65344339cbaf0e831e4e84860209974a"],["/page/8/index.html","ce9c9c0f9e5ef5bba772abb3a2425656"],["/page/9/index.html","8ef0836266e74df42bd06c99678d7372"],["/schedule/index.html","0245f4ad9d177d24ee04623b0a462e0d"],["/sw-register.js","47c52e444ec3ab36ad2d335e9fa65969"],["/tags/Advanced-Swift/index.html","a658252c6b34f85ddb69cecb73263f73"],["/tags/Build-in-Collections/index.html","228da744187de5431fa0a296f61cefab"],["/tags/Codable-protocol/index.html","cf1cbbc031842dcce7f4a82278cc2138"],["/tags/Collection/index.html","bd08202541ad48c7b89835fac777bd37"],["/tags/Collections/index.html","99383dc4b70d9f85a261488d0d298fce"],["/tags/Combine-framework/index.html","be0717f05ab562cb24165cf47d07fb25"],["/tags/Combine/index.html","5b931a46b2f01ec27044b88aed87d4c2"],["/tags/Dependency-Injection/index.html","c99ce683c447a4e5cb328da4e3328b31"],["/tags/Grand-Central-Dispatch/index.html","f11a8d8bfd5d6a0bd96cd015e2310c37"],["/tags/Modules-And-Hooks/index.html","e29aa779bc27ebb047cd503a2a852b95"],["/tags/Promises/index.html","829e673c561184872c0e12bdce3df459"],["/tags/Result-Type/index.html","8ff3fd16cb3639b92a6e234fb0f51ed6"],["/tags/Server/index.html","915cf6fe0475ee1cfca1a99dc268bcdb"],["/tags/Swift-5-0/index.html","592118b4f8ec9b787d863e689b022f3c"],["/tags/Swift-Package-Manager/index.html","ea7a7c7bdd096676d0beee2b2a5d13a8"],["/tags/Swift/index.html","1400b709edeea9fa747ee5b7e83a6c12"],["/tags/Swift/page/2/index.html","018807851c133c29f3f34ca967a3b575"],["/tags/Swift/page/3/index.html","c13d8026c13547872936a416c876b08e"],["/tags/Swift/page/4/index.html","b895d6fca2055bece71438a2f4bcda0e"],["/tags/Swift/page/5/index.html","54ebbf02340c7f7889a85667fba10e3d"],["/tags/Swift/page/6/index.html","822a6ed2d9dc8fd6ac30f2bf0c97c122"],["/tags/Swift/page/7/index.html","b484408700a163ebf14a05ee0d10cf95"],["/tags/Swift/page/8/index.html","53a11f37ebee05126fe47c8da9d5b717"],["/tags/Swift5-0/index.html","9d8ebf0e929e168d26271058f022f595"],["/tags/SwiftUI/index.html","83cfb4f8344ee7c638d2925ea55052ae"],["/tags/UICollectionView/index.html","9d7ff45293a1f6022f1f8d92259da27d"],["/tags/UIColor/index.html","228ad213bf8fefc95096db8e31ddb66a"],["/tags/UIImagePickerController/index.html","d548914999a99c62c0f461ebe4250e56"],["/tags/UIKit/index.html","eeb682a360949f1ffe7726b8a709fcdd"],["/tags/UIKit/page/2/index.html","8e7a33cf8fb724f6e1a34c27e70cbbb3"],["/tags/UIKit/page/3/index.html","2779ddb54c119b0e5402ff49d9991856"],["/tags/UIKit/page/4/index.html","fbed6da9700888e7f9d1e71c88fe370e"],["/tags/UIKit/page/5/index.html","528cc33e4c2d53df45b49ccccafbb3e9"],["/tags/UITableView/index.html","df17988793703054de62ac863329c78f"],["/tags/Ubuntu/index.html","8b88fb8314ef47f24a988c38b86f2474"],["/tags/Uniquely-identifying-views/index.html","ce5ee0ca3fb53454f2ae81ffb48bcd26"],["/tags/VIPER/index.html","f15b15b6e93812f1de29933ed502f31f"],["/tags/VMware/index.html","325e5eef45b677cbece046b578761ecc"],["/tags/Xcode/index.html","d9abe0dfd1e002e8ab3340b8feff6b86"],["/tags/appleOS-Networking/index.html","bd7535d5323247281724169eb01287e6"],["/tags/enum/index.html","5e2fd732fa4d18338096b162aea5b9f5"],["/tags/iCloud/index.html","fd4018edaa2714768d2ba1238a341d71"],["/tags/iOS/index.html","e0b7e309830a94f3c355c7ee3cf5e6cc"],["/tags/iOS/page/2/index.html","4a16607c793d391bd67a1dbdeec0c5aa"],["/tags/iOS/page/3/index.html","9ae5ce425ba23e8d50541aa7d002cc73"],["/tags/iOS/page/4/index.html","1dc8ffeb9af865df4b9b9bd19a6e9ce4"],["/tags/iOS/page/5/index.html","e9cd7b8ea789e157cc43898a43534dc1"],["/tags/iOS/page/6/index.html","6dacf053d22ebaba38e5cc518475d25b"],["/tags/iOS/page/7/index.html","c781539f13b0ce1cd1c17caed2ce56f2"],["/tags/iOS/page/8/index.html","e0fc57f88187a8dcd3824ec471fbfa9a"],["/tags/index.html","50a4e3c2f5c8dc592d62147ed8932fc2"],["/tags/non-optional/index.html","4dd129627233ce71ef7a1604228e01e5"],["/tags/optionals/index.html","8661e6a9061d4db16dd8ff18a7feb72e"],["/tags/random/index.html","bef17685464e3b849260bfedbc2c9968"],["/tags/transition/index.html","b2809371357b5f1d524f42633455b62b"],["/tags/三方类库/index.html","fd9cc5c892c75d1b9087cf2aae092d4c"],["/tags/依赖注入设计模式/index.html","f8fc70031d1b7f3c7062342c2208d065"],["/tags/函数式编程/index.html","a4b400789a5cccc74f75ffadda006a60"],["/tags/初始化模式/index.html","d176bc014d129277e78d1e8177917998"],["/tags/单例模式/index.html","243e401a906304792855126b21da193b"],["/tags/原型设计模式/index.html","872f904bfd4623cec2ac55a1f51704e9"],["/tags/命令设计模式/index.html","397110b5b432845added6053afdcf6c3"],["/tags/外观设计模式/index.html","aaa808a9863ff428652913e7d33b08b5"],["/tags/委托设计模式/index.html","8b8d85008c16f4b9ae714fa3b02d748b"],["/tags/子类化样式/index.html","0b65d540204604d98970899fc856b945"],["/tags/对象池设计模式/index.html","0ec57df1912c5721073cff87bed2a7af"],["/tags/工厂方法设计模式/index.html","517fcabad409155b8c2e18c974752da6"],["/tags/工厂模式/index.html","1e4812568b67342003df2be0e106bec1"],["/tags/工厂设计模式/index.html","0a7db88c174f8f4508fbfaeeabc9ce9d"],["/tags/懒加载模式/index.html","0b214719a79fb52c6e1890558a24d84e"],["/tags/抽象工厂设计模式/index.html","51912f4db4c9215ee5e237174fa1602f"],["/tags/构造函数/index.html","ab2ab5fd96d75cb9ae799b334ff6b975"],["/tags/架构设计/index.html","ca95efe1138f4269d8c865d6293a9b85"],["/tags/生成器模式/index.html","7e33c492a68883b9824712653f22b4b3"],["/tags/用户体验/index.html","97288e8b90872a90e7c71f7014a59f06"],["/tags/自动化布局/index.html","557bbb02eec6a296115c26b6a302ec62"],["/tags/自定义UIView/index.html","1fce66824db90a4d3dcb7d0e2314d6e5"],["/tags/自定义转场/index.html","01d07d91482d2cff6880e361f1df9542"],["/tags/自适应布局/index.html","561d35ec21b007a649eee1ee79025036"],["/tags/设计模式/index.html","a8dd72b159c165cb5d8d65af90c397c0"],["/tags/设计模式/page/2/index.html","008025a0197da53a2b5def98a19d64ad"],["/tags/设计模式/page/3/index.html","3ee16b525d7fb45d530ed0ea3385687f"],["/tags/迭代器设计模式/index.html","0fb980c150ee3f8fedd239fadf191467"],["/tags/适配器设计模式/index.html","aba1fc8066e67f0a2cea646083f6095c"],["/tags/静态工厂方法/index.html","8f18ad1b5b5ccded3a0dcc5f41eb4906"],["/为iOS应用构建输入表单/index.html","82204c6a02752468c79d2531a583d65b"],["/产品开发的幕后花絮/index.html","bdd2508e5bc3637c42fcf68da2e84a47"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","52662b6a46aa01b3956cb26b2121e81e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b589f9015bc2e3ea00fdfd05bc3258e9"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","91a3aac341fce98c71057cf2c90dbf80"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a456b03094099e606be654fc4cfb6cc6"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","6f601b9523d9f4e0bc4e6b9f8206ef83"],["/在Swift中创建自定义集合/index.html","cdf79de75274a90f60416970bb88c766"],["/在Swift中处理非可选选项/index.html","f424d0cf15cf37c6f9dd96c10a5f405b"],["/在Swift中生成随机数/index.html","e0de3c49bcedbf591361882dadddf595"],["/在Swift中重构单例模式用法/index.html","d8a69c1596a5b7dac28ae1083091de05"],["/如何为VIPER编写服务？/index.html","1883195e34b2897208207e347c93cfed"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","20ad6bd05f20719e85671e5a22f60552"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","95ec80d2bcdc8685bb8998acb0989b26"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","8bec4f18fcf069211ffac48d700a0d44"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f1536aba9fa599c6e44c928bfc4ba78b"],["/掌握VIPER架构/index.html","13d0654ad8293c85647336e60d248821"],["/揭秘 WordPress Hook 系统/index.html","9b7dcb63256b13728c39ada22de6f33f"],["/比较工厂设计模式/index.html","eadbaf39c51ea3a9fcf8c8dfbc3581f5"],["/深入了解Swift中的Grand Central Dispatch/index.html","e68584eb91e00c7bed58fe56915bc649"],["/深入研究Swift框架/index.html","3e73d30755851d4dd0046f9f069069f5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9b5b9b8c4b10265c76f53f85480477db"],["/选择Swift而不是Objective-C的5个理由/index.html","c94b85bba079582ff5512ef8aa1f504f"]];
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
