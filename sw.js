/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","b753d54bcf31a2b98865d162c7fe4e30"],["/Advanced Swift系列(三):  Optionals/index.html","029a14d9723013b9a0552d2f5dbb475b"],["/Advanced Swift系列(二): Build-in Collections/index.html","82c0dd13eb0b861455c07fc04194243d"],["/Functional Swift 初探/index.html","e283ac8e8e66ad1263024a46356564a4"],["/NSCODER和SWIFT初始化/index.html","63cb6091f0f238f0c08166d84a5f3786"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c448c581bb2add19763df8ad466c82f8"],["/Swift CompactMap vs flatMap：差异说明/index.html","1094fb62df38af8eecfae8148e1679b4"],["/Swift Grand Central Dispatch 深入实践/index.html","74e1f452224727718aa624a9b389138a"],["/Swift Lazy属性初始化/index.html","4f4824196abebc56195dabfa5a3c20a1"],["/Swift Promises 初体验/index.html","007bedc801a506c2691a06766d3291f6"],["/Swift Promises 探究/index.html","616a8a4329c9fa4332655a100f6eff7e"],["/Swift UICollectionView使用指南/index.html","fbbb5d1350eb2602ed77468e45c79970"],["/Swift URLSession 和 Combine framework/index.html","613ebd85cf9b9697aa11b3207d95b67f"],["/Swift 唯一识别的视图/index.html","3fbbe4edf6a091aab5b058034a46bdc6"],["/Swift 如何学习现代UIKit？/index.html","e1739bd69a2ef2a632880c2ba5c9ca30"],["/Swift 用 compactMap 替换 flatMap/index.html","b346a439eca54398636b069a27179700"],["/Swift 选择和播放视频/index.html","29dfe2aae218e2630fd0de5f6b03193e"],["/Swift中UIColor最佳实践/index.html","3fccdaddcdf69eda908080c2a83f9931"],["/Swift中快速简单的工厂设计模式/index.html","9d555b6b6a67ed0fd4b8d50f464153b1"],["/Swift中构造函数与静态工厂方法的比较/index.html","3e78a9f649a01d38339904d959342683"],["/Swift中的UITableView教程/index.html","82760e4bd07d3d8e254df63f10a940ca"],["/Swift中的懒加载模式/index.html","1f12f2c4dc644d8d7aec38850731d93f"],["/Swift中的模块和挂钩/index.html","2bc7eac1c254fe11f636487418ea74ed"],["/Swift使用布局锚点添加约束/index.html","e5c549e15b3c2db941f975a654157c26"],["/Swift依赖注入设计模式/index.html","aad0bdfdadbef76af550992ff1d57321"],["/Swift关于Dependency Injection (DI)/index.html","87b2447062e1fcc9deabbe4b91491176"],["/Swift初始化模式/index.html","96e56619a54686d8431d01c3a710f1e6"],["/Swift单例模式/index.html","ff7bea86f8a2f0b474738426052f9544"],["/Swift原型设计模式/index.html","5fa69835abc0f2ea0c9720a37f3cbe05"],["/Swift命令设计模式/index.html","253a9c60892e28c4925a18da3085794a"],["/Swift外观设计模式/index.html","b7704c603874753e20671cf650510b20"],["/Swift委托设计模式/index.html","582e960f688aa9117e1e78406f135f15"],["/Swift对象池设计模式/index.html","26c05a3b9e3014023387b655c9f053ab"],["/Swift工厂方法设计模式/index.html","2ece66c29b8d339d2e8b2e84d5b3aca5"],["/Swift带闭包的懒惰初始化/index.html","43423921ea85b994af078e2f8a0609aa"],["/Swift抽象工厂设计模式/index.html","dc91b09eb525e226ca3781e85ee362d2"],["/Swift掌握iOS自动布局锚点/index.html","021a813a31a337671383f004ac66adc2"],["/Swift支持旋转的自适应单元格/index.html","2cc5ab739ed95afba652651e85e5d1b0"],["/Swift枚举值/index.html","97de0a3502137ac70af1c3c3f1e9ad8b"],["/Swift生成器模式/index.html","398c107e1736db932760541aeca08980"],["/Swift结合Xib文件自定义UIView/index.html","ed6865103b1739f97d37ea2207a5fdd3"],["/Swift编写的20个iOS库(一)/index.html","e4929cfb6b4afdb3144eb76004ef537c"],["/Swift迭代器设计模式/index.html","0f0229d0d3bccca785d9317db874c0e8"],["/Swift适配器设计模式/index.html","263ab8edcf6d455afeeb03af8fa13152"],["/Swift静态工厂设计模式/index.html","69ebc6d024383bf45a08609865b6e052"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6495ccd0fe10bdf6f8bb0bf8af1c3f37"],["/UICollectionView data source and delegates/index.html","23b6f8e9c12cb9cf2d7844a9c38f314e"],["/UIKit初始化模式/index.html","566a7ac40655c530795d4a8de0b6f16c"],["/Ubuntu18.04替换国内源/index.html","e970aa39d775dd8b9375d1570af1d367"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","694449016920a19616f6170f6bef2140"],["/Xcode扩展/index.html","b1d7a72b64cb1c3cb3756758c664801c"],["/about/index.html","7ebb61bda99372a7c63928fccd92d039"],["/appleOS的Networking示例/index.html","31828977c6e1970de99306909a83b1c7"],["/archives/2020/04/index.html","afe1a1b26ad1e2acac9c09ae40c49392"],["/archives/2020/04/page/2/index.html","bd3061f67279991ca93ff25fa1674a8f"],["/archives/2020/04/page/3/index.html","1a6639f6883a90c1cb68265e124eac42"],["/archives/2020/04/page/4/index.html","030e13a9d9dd001c474c68c819c6a985"],["/archives/2020/04/page/5/index.html","15a788196753b3f5958a6c368366d61b"],["/archives/2020/04/page/6/index.html","9ebde9d6fc93b710335429f95b6cfe53"],["/archives/2020/04/page/7/index.html","e9ec351cd9a855ec6b6213c9cca031eb"],["/archives/2020/04/page/8/index.html","0e877ae6e1321664e6aa903c8473c597"],["/archives/2020/05/index.html","94f9aaf862a48ee404e743beaa1614d9"],["/archives/2020/index.html","ec50bd57ab883bb833cbe853d4dae9eb"],["/archives/2020/page/2/index.html","001bdd31692f8d2560c816ea6066aaa1"],["/archives/2020/page/3/index.html","23ad5786ae7086799ee3b90b056bf7fc"],["/archives/2020/page/4/index.html","02613e9c4eb209c157b89e11793668c5"],["/archives/2020/page/5/index.html","4ae18e190527db06c05e0d77d834ec62"],["/archives/2020/page/6/index.html","18a1a88ea4a2f99deaad769619f9c19e"],["/archives/2020/page/7/index.html","e7b107eefad9c11dd2ebc70b0604d45f"],["/archives/2020/page/8/index.html","8d21823bda68fda6ad821df52e75ed5a"],["/archives/2020/page/9/index.html","7b2153242ab93ee3d7b3f355be4b379b"],["/archives/index.html","f1a1424389b01135346c87c52eacede4"],["/archives/page/2/index.html","429c97e03cffc9407291c802ed96d65e"],["/archives/page/3/index.html","cfaa405e19a022f0b8b829a61bb3a9f6"],["/archives/page/4/index.html","6bff460c7915f9f3282c0718315aa368"],["/archives/page/5/index.html","d6ed2153f8c1dc0fec0a98ed235720ea"],["/archives/page/6/index.html","f1a423516ecff19ccdf481fd63eab84a"],["/archives/page/7/index.html","0745e16b2e0ba592bdd8c7ec1a86f904"],["/archives/page/8/index.html","ffd30258565fb87d10ba3b6759c9aeca"],["/archives/page/9/index.html","bc6acf78cf565d3c08ad30da34f8fd32"],["/categories/Advanced-Swift/index.html","9a46d0a66b72b17372813fd2c6996fd5"],["/categories/Codable-protocol/index.html","3fad57a372c4351cb8bfa28f18626758"],["/categories/Combine-framework/index.html","012388fdf530d187eb76eaec10e4371f"],["/categories/Combine/index.html","d0cf3fe84e09525a9c9be1f565c46d7e"],["/categories/Grand-Central-Dispatch/index.html","c03553cfac29c45ba2e344b8d177786c"],["/categories/Hexo/index.html","615233427214068280a5fcbd1d59be38"],["/categories/Promises/index.html","c37a22133b1267932dd291c376d49b09"],["/categories/Result-Type/index.html","d7397597a2c27eb8a99008254de389d0"],["/categories/Server/index.html","883cb644ffae9f36826ae6d075a0ad33"],["/categories/Swift/index.html","842334e3109fcbde0be0ed411f5eaf92"],["/categories/Swift/page/2/index.html","80d50d5895c8e42dbf4b95a44017ae37"],["/categories/Swift/page/3/index.html","4a31e02147e702da568cc710a9b16ddd"],["/categories/Swift/page/4/index.html","559bd1dc516b175cb39650dbbccf7aef"],["/categories/Swift/page/5/index.html","cd74002096c94fae343a541b01c71d8c"],["/categories/Swift/page/6/index.html","b2170a898fefc89650eeb0dcccaa4166"],["/categories/Swift/page/7/index.html","0c39fc5fdab1d6b92a28721d71abb7b4"],["/categories/Swift/page/8/index.html","a91ce0f92fb68beed18898203e939db9"],["/categories/Swift5-2/index.html","000f437b7096b54053f424a5b300acfa"],["/categories/SwiftUI/index.html","5d06d42e01b3eb99fc1f6d223691654d"],["/categories/UICollectionView/index.html","4784a82e1055870d624136991c1bbbb6"],["/categories/UIImagePickerController/index.html","fed57208e6e72fd05c56b913c3607e83"],["/categories/UIKit/index.html","1502456d7a048fdc0b5ae9c9b0ad5237"],["/categories/UIKit/page/2/index.html","1d7b858790dc4729478ad563e19d316a"],["/categories/UIKit/page/3/index.html","a6af6fbf54ce99a35ced56e47029514a"],["/categories/UIKit/page/4/index.html","68e19bfb83d0e6a9aa03b6646fdce452"],["/categories/UIKit/page/5/index.html","c6cab1ba52bad263c762f47bc1649cb0"],["/categories/UITableView/index.html","24dfb2d1ec70b51fe1a09dfc7f0b5d50"],["/categories/Ubuntu18-04/index.html","72607b3a7f1706d2316396ec540cfd20"],["/categories/Ubuntu软件源/index.html","d34bcdd438479cc6fa5e391d42b83522"],["/categories/Uniquely-identifying-views/index.html","05903bca4de13c80d13ba1257abd0954"],["/categories/VIPER/index.html","0cff667ba6d01610b6e76dcd94343a4f"],["/categories/Vapor4-0/index.html","e825ea1b552fae904218631bbf961c75"],["/categories/Xcode/index.html","20c21576eb1386a42fc5b9c4b62122e1"],["/categories/appleOS-Networking/index.html","1d1ecddc5c2bf73ba3831006e96c1139"],["/categories/enum/index.html","f14d9fe5c73f36ded42a0d7d506ea603"],["/categories/iCloud/index.html","f3f4d89f98d7e3b98967f9b3ecc06163"],["/categories/iOS/index.html","731137e7b6acf38dbdc15e64901cb878"],["/categories/iOS/page/2/index.html","47addce063eabbaab987aea670db674e"],["/categories/iOS/page/3/index.html","392cd243c096539e7e3c41a3d93d4cbe"],["/categories/iOS/page/4/index.html","7d1af8eead5b05ff233688da0a0dba89"],["/categories/iOS/page/5/index.html","dc58153d0863eed54b0270a4e659d6de"],["/categories/iOS/page/6/index.html","421066541ad1c9be9a0fcf946ae6b482"],["/categories/iOS/page/7/index.html","23ec65a6fb91b87d3228c552a77932d3"],["/categories/iOS/page/8/index.html","bf2f06da2030d03d9cf3c4996e9d508a"],["/categories/index.html","a68c7dc79df827d217c5ed2031740f4c"],["/categories/random/index.html","46a6e1fe9ac977c54173a85476e67bf2"],["/categories/三方类库/index.html","58747d92747efdd5d45aea5410c28e3c"],["/categories/函数式编程/index.html","5e36ac40ecef6a2925206791ff824862"],["/categories/子类化样式/index.html","86bda65870d65a42c5d28ef6fae8c44b"],["/categories/架构设计/index.html","c0c4f2587e8bdb1f70fa8f10501fc88c"],["/categories/用户体验/index.html","d65b2ea409da934999ea0517a3655bfe"],["/categories/设计模式/index.html","d1e486221861edfb6b7bb71ea4e61b3d"],["/categories/设计模式/page/2/index.html","b5d46b5ac8fe5e9897351606d6c28a32"],["/categories/设计模式/page/3/index.html","25454b87045f95bca5cd483d907e8273"],["/css/main.css","177195191d844facc72e5bd779d7bd5d"],["/hello-world/index.html","b7d9bcf966de12774aa13c7278d4e1e8"],["/iOS VIPER架构深入实践/index.html","1b5fd2800e9ebff1807adf58759dca86"],["/iOS 自定义视图，输入表单和错误提示/index.html","c3f4ea60ededb2c19c5a603a08d5b979"],["/iOS如何使用iCloud文档？/index.html","f70abc4371e3fffb4fc6fd4f73cde06c"],["/iOS子类化样式/index.html","bdacb29ccecf6c9361e73e0cc3f5e46f"],["/iOS自动化布局编程/index.html","4f0f8b3ea6ceceda191b67f24e8522c0"],["/iOS自定义转场(By Swift)/index.html","df985ba4ef61e5ef61ce712404ab04d8"],["/iOS项目架构：使用VIPER/index.html","5f5d56f00f806dd77f7a3a170dc924ea"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9b966266a21832c945eb95a55fce5577"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e8b1501482d8d0ed7044ab214100da5a"],["/page/3/index.html","04d8645a548b73dcb90180e2bdbe7d3e"],["/page/4/index.html","7195812d6ac37bd08cc9b2fae6f472c3"],["/page/5/index.html","c226fd0bd343d94259e25b3e2dbf7011"],["/page/6/index.html","b72254d0a9a95400e165da2ea5003411"],["/page/7/index.html","a2b8b3da4e19e0127416e4faf9e84b0f"],["/page/8/index.html","628055e60ec70cda79d21882a9258536"],["/page/9/index.html","7f31711c62fd502a5a4493595206d097"],["/schedule/index.html","188fcd54b06821b12c33598b385c9166"],["/sw-register.js","34285ef3e2459fc8c29d1725ccc4c5db"],["/tags/Advanced-Swift/index.html","9f078c9a3f85929c2c6b9de206af22a9"],["/tags/Build-in-Collections/index.html","f423a13ddf2bb7a656f41ef0ba0e45a1"],["/tags/Codable-protocol/index.html","63ddbc2195852d8bf038f33507ced8f9"],["/tags/Collection/index.html","b6fdd8bcce932667371c3858a4c9e4b0"],["/tags/Collections/index.html","b2ff1b1b899b362af665717f99629c91"],["/tags/Combine-framework/index.html","296593b97a61f345cc6a798f173d6584"],["/tags/Combine/index.html","1135d00a1f371add479c05f61a1ed7cf"],["/tags/Dependency-Injection/index.html","6676a576526babff8a0ca0203d05b472"],["/tags/Grand-Central-Dispatch/index.html","eda844742198f1c94595156994625688"],["/tags/Modules-And-Hooks/index.html","d3844d9fed41f0a91b47da42fb06f385"],["/tags/Promises/index.html","02f748345175f9142cec27c4a6db014e"],["/tags/Result-Type/index.html","0f3a0be53f453a223a769f2549bfa2ec"],["/tags/Server/index.html","ba25d74f8528b0069121d8fda42aa166"],["/tags/Swift-5-0/index.html","974866a505e21b33482e91f7b57cf36b"],["/tags/Swift-Package-Manager/index.html","5e1c7cbeec3e33ed3815ea251d1c9447"],["/tags/Swift/index.html","92a397f3df640848c93a06d4f5b5b8eb"],["/tags/Swift/page/2/index.html","ccb1efaab083b847899f2ec1c1ed3351"],["/tags/Swift/page/3/index.html","ef5a60c50461b34192ece488fcad997b"],["/tags/Swift/page/4/index.html","2a3b58fd5bd6df52e078b975b611b505"],["/tags/Swift/page/5/index.html","179313de5668623a849a1990af18b4ea"],["/tags/Swift/page/6/index.html","b28cec2dbc1d1d859b56ed7b6200cc7c"],["/tags/Swift/page/7/index.html","78276c573f76928ffb89568d2e70161c"],["/tags/Swift/page/8/index.html","903501245eb01270ec57406413d2982e"],["/tags/Swift5-0/index.html","ee7bd7a2fbbe9b51ae00377af0abf09d"],["/tags/SwiftUI/index.html","df3c566aa20835bbdc02de5c6bd7a8c4"],["/tags/UICollectionView/index.html","9f1fdbccb78a5e5c20cc7f01487eba42"],["/tags/UIColor/index.html","362a4b7154adac12b40f991b9119e618"],["/tags/UIImagePickerController/index.html","c09ba094c51674c2be9f14923618acaf"],["/tags/UIKit/index.html","6e7cd95f02ceff90e14db3c7d47e919a"],["/tags/UIKit/page/2/index.html","9a9ac6023edc4ebe4a6217786bf5a90f"],["/tags/UIKit/page/3/index.html","f99aecd57473552141b559c129c30ef2"],["/tags/UIKit/page/4/index.html","310801e99dfc788198dec3a3e2baa23a"],["/tags/UIKit/page/5/index.html","0f4cd8ea6fd9b850091e25365c094202"],["/tags/UITableView/index.html","72a1ddaf92cf7c61066d94a08ed609ea"],["/tags/Ubuntu/index.html","1848d09e7a08ad47c4eb892696bd4b7c"],["/tags/Uniquely-identifying-views/index.html","f4a51082067954b5445bd70994d8318b"],["/tags/VIPER/index.html","94fa00bfa3c32a51dc3a88b936b00532"],["/tags/VMware/index.html","c184e952687adb7116187b8147b24576"],["/tags/Xcode/index.html","e092123f34d53d137a74ca279b48bafa"],["/tags/appleOS-Networking/index.html","ef4a502178178f90fafe3ef010517997"],["/tags/enum/index.html","d0174df6928b6cbad7d79e73082c8c22"],["/tags/iCloud/index.html","d4f4c71c868ca40a632d25edf738fcaf"],["/tags/iOS/index.html","c6fdcb2d2bc9e9051672223d1153e5c4"],["/tags/iOS/page/2/index.html","5bda56237638b529c9fea85b9a545f3f"],["/tags/iOS/page/3/index.html","dd0a55dc89f888eede7cdc5de3562756"],["/tags/iOS/page/4/index.html","0c810747ea3340a21cd5f1a1c33f0a2c"],["/tags/iOS/page/5/index.html","ccde2b8e85058d67d08f9ab8a2487201"],["/tags/iOS/page/6/index.html","50df32982018caaac90b823191b48357"],["/tags/iOS/page/7/index.html","70da7e443cc025a903d1c988ccf9a6d2"],["/tags/iOS/page/8/index.html","153db7cd6f8dc2b5e9c8ceaad036faef"],["/tags/index.html","846df0be143f6a91494dfe81612f2b32"],["/tags/non-optional/index.html","ebc9a9a891a3bd63069e52f72fc51ef1"],["/tags/optionals/index.html","0fbd4c96190e2ffd528fdbd49b10ff5f"],["/tags/random/index.html","6725396d96f7595947e353d48a31e927"],["/tags/transition/index.html","82ef8a5b7ee26b627db5a6d6770e2eab"],["/tags/三方类库/index.html","fcd8e52f23ec5ee7c73d3291ca2e42db"],["/tags/依赖注入设计模式/index.html","cfe791d8196e459dde298ddb236ab07a"],["/tags/函数式编程/index.html","3d748cbcbb3ebc40242d3b54a5b7579e"],["/tags/初始化模式/index.html","157835f49e3a939548f393456771e9c0"],["/tags/单例模式/index.html","88437d6982df32b900d9c4dee8978965"],["/tags/原型设计模式/index.html","e9bbeaf64c5737895e467e2b1e32ba67"],["/tags/命令设计模式/index.html","6294ef7a2f34a5a9a929dd461e05e1fa"],["/tags/外观设计模式/index.html","a15fa5b40db58fe6fb453b162423d915"],["/tags/委托设计模式/index.html","4bdf70ba791a01dc21de82c43a6e6b27"],["/tags/子类化样式/index.html","46f8f9bcb97757e66c3f73d0b2585a9d"],["/tags/对象池设计模式/index.html","8fb9285a532d6bf749688edee45ea6f5"],["/tags/工厂方法设计模式/index.html","0b3064fd88a83549ca13f769869602ba"],["/tags/工厂模式/index.html","cf17b1b798081ba2abd4abeb7a000b1f"],["/tags/工厂设计模式/index.html","9274ea3b48269f4cf57616fec74db30f"],["/tags/懒加载模式/index.html","ee54477e85f40b056eec02a19785586b"],["/tags/抽象工厂设计模式/index.html","9f63e265115140236c9f6168dd50a27e"],["/tags/构造函数/index.html","6475eb281cb07262127ee4c2ae76d940"],["/tags/架构设计/index.html","33ceb4e77a21e0f34406600540ccff1f"],["/tags/生成器模式/index.html","bd159b544a43e0a60c43e4294183988f"],["/tags/用户体验/index.html","1b7c1aaea57eeb285b51b7918cbcdaed"],["/tags/自动化布局/index.html","dd27ace5af0195888e8769c11f25aeed"],["/tags/自定义UIView/index.html","fcd89f2288d6b2755a81e99625a12c7d"],["/tags/自定义转场/index.html","7386acfa456c83283b4626dd3d8572eb"],["/tags/自适应布局/index.html","5684a1c3d953fce722a8d6d74f526136"],["/tags/设计模式/index.html","2f39c05be4d34f4c5d5659dabde5db69"],["/tags/设计模式/page/2/index.html","e49c2b85b1f6fd2b5c68f2a6db271515"],["/tags/设计模式/page/3/index.html","267d5801821f33695a19c7b39d6bcffd"],["/tags/迭代器设计模式/index.html","aa267f1400ae4c1bafe6e8d1eeea3214"],["/tags/适配器设计模式/index.html","dcec0ad488f297c6d42358693a55b07e"],["/tags/静态工厂方法/index.html","3fb73feac548723be4273f76c58da4e5"],["/为iOS应用构建输入表单/index.html","c2ce23f1f80363a5ebf6e01474dd6d78"],["/产品开发的幕后花絮/index.html","be072131ed1e1333205808252fad4050"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","488397c220526fb6b232aa786cb24102"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b18f82b5e0c97f70ff03cc9f4b1c33e1"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8913cb4f057cb33f6e541ce3a7e99092"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","44da27fc62e68eb12c5ed4dfbf16544b"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","38d402e6f857c8eae8d87c4a7e163cc3"],["/在Swift中创建自定义集合/index.html","ef2b820283e6412e7dd76901401b7c53"],["/在Swift中处理非可选选项/index.html","f05af3fd5644764df2eec4eb0be620d8"],["/在Swift中生成随机数/index.html","fd881b7de74d57f183b4c1f6ca8f5b7b"],["/在Swift中重构单例模式用法/index.html","fe03dd8680b8b726b4f6125912e94f58"],["/如何为VIPER编写服务？/index.html","b933639245364d47b36cd82e9cd2a95f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5fbb959a7c55078800eda13843bce7b5"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","5dda9a0645cb926cb4db415b7229b1d1"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","0105d70547a87e69f8078d2881333c40"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8a6c74842febc2c427189c36c3d621d3"],["/掌握VIPER架构/index.html","c5fe61bc74e0fa17d1f871e2be629c4d"],["/揭秘 WordPress Hook 系统/index.html","76b98d2fc4ce0b5f5b3614188ecff0ff"],["/比较工厂设计模式/index.html","05ac752070add5f1972debbb29acf69e"],["/深入了解Swift中的Grand Central Dispatch/index.html","e409fdc68205646f1d6b3f1a899011ab"],["/深入研究Swift框架/index.html","4408a7451708faa8fd4938fb025d4312"],["/适用于iOS开发人员的VIPER最佳实践/index.html","75349e984e75741b7bf05db410394435"],["/选择Swift而不是Objective-C的5个理由/index.html","09b3c72552d2cbe886f4c5510a088920"]];
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
