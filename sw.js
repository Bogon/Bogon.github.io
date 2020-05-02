/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","e22b83ca683df2108cdf00c557d50d1c"],["/NSCODER和SWIFT初始化/index.html","cb07f6358449712d464c433636f72cbf"],["/Swift 5使用UIImagePickerController拾取图像/index.html","608752f2c18525017918c744839650c1"],["/Swift CompactMap vs flatMap：差异说明/index.html","7cab5e0f3f57bdc3173fd7fc6f840dd0"],["/Swift Grand Central Dispatch 深入实践/index.html","7df06ff7907db5b3c5ae9c52fcfcec5b"],["/Swift Lazy属性初始化/index.html","cc7039c92c5b8b5bdf9c3b0b82457dc5"],["/Swift Promises 初体验/index.html","5af1a62975ed39739876636a34900079"],["/Swift Promises 探究/index.html","786b9360cefd0463300513d206f45087"],["/Swift UICollectionView使用指南/index.html","5a73e40f6b1f61e7f59020921810b990"],["/Swift URLSession && Combine framework/index.html","84a8e11df02dbcdcb38506be9a82aa97"],["/Swift 唯一识别的视图/index.html","82d48d0caa38e1886ff972b6ff9ed860"],["/Swift 如何学习现代UIKit？/index.html","7b6c48c4594327d8d746b59e8a2522ae"],["/Swift 用 compactMap 替换 flatMap/index.html","5f25d7ac63679c0571c837d52e2bc681"],["/Swift 选择和播放视频/index.html","2be1ebab41aa6de0ceb1775adf954c49"],["/Swift中UIColor最佳实践/index.html","250597ad595939dcbb5acceb16d366a6"],["/Swift中快速简单的工厂设计模式/index.html","322cd651ff024fe59ba61a987444c506"],["/Swift中构造函数与静态工厂方法的比较/index.html","2023add7edc15f21af50cc4056519993"],["/Swift中的UITableView教程/index.html","86bdf35d3c2ff38107107bbe73ce3035"],["/Swift中的懒加载模式/index.html","2ded0ee1966774f0f1b643ea1182599f"],["/Swift中的模块和挂钩/index.html","f911c430a8d6ea1351df82edc80743ec"],["/Swift使用布局锚点添加约束/index.html","1eb1a5cba160b64b8f70430dbee96c9a"],["/Swift依赖注入设计模式/index.html","4ea1a6e735648085f6eaa8e8303446b9"],["/Swift关于Dependency Injection (DI)/index.html","b36044b4c0720535e5311d938a70f76d"],["/Swift初始化模式/index.html","9a1fdb6036e48de949664b2b1b18ba16"],["/Swift单例模式/index.html","a693e765bb620fb4a55130780b99389f"],["/Swift原型设计模式/index.html","f36409dd045dce46b623c9e8f3d9dc16"],["/Swift命令设计模式/index.html","de5ced89b1f138627d7404e6056a3528"],["/Swift外观设计模式/index.html","1f41a68eb8e20b9763248f8956a24b1c"],["/Swift委托设计模式/index.html","4eb2283869ba4f94553120d6067dfa6a"],["/Swift对象池设计模式/index.html","f26838f92d73f578931cb6957c532977"],["/Swift工厂方法设计模式/index.html","0bab36c77ff1a42d2c0987088f6ebfe9"],["/Swift带闭包的懒惰初始化/index.html","319ee3ace0c91231848594b44a8d0f0d"],["/Swift抽象工厂设计模式/index.html","8887d12b9c35223d95e853c35814f9f4"],["/Swift掌握iOS自动布局锚点/index.html","fd91168ee174df33db4dff35e787a696"],["/Swift支持旋转的自适应单元格/index.html","46d85fce148036cd4cc2aa448188347b"],["/Swift枚举值/index.html","0c7f8e9b30b0259332930ba6755e64ee"],["/Swift生成器模式/index.html","4adfc86136f9c870573ebffaaf8f3155"],["/Swift结合Xib文件自定义UIView/index.html","fc88a5ca5b46548c3e703ad89df2ca15"],["/Swift编写的20个iOS库(一)/index.html","0c756f26438128d5f9ed4293da2fa91d"],["/Swift迭代器设计模式/index.html","24efea7ce2554305771d429967cdab1f"],["/Swift适配器设计模式/index.html","c69b3c071adafe7dcb262077ad1214ca"],["/Swift静态工厂设计模式/index.html","5f4a3a11dfce02911f24e9ef30884c75"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9b4024b57e6912d2bd63a789ee329f73"],["/UICollectionView data source and delegates/index.html","5510a3fe41e778ddf88746c5ef218bfe"],["/UIKit初始化模式/index.html","087587a1147f1f972ad494cc7b10930c"],["/Ubuntu18.04替换国内源/index.html","c9918747f8996e84ebb85e4f72280b32"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","00ee89a2c507508631197cf07a99acc2"],["/Xcode扩展/index.html","e495672cee65bb2eb111ac2c48d1ddf5"],["/about/index.html","95842f8bbe99e08e61e74919a0598bde"],["/appleOS的Networking示例/index.html","cb03676099fea654d70cc5cfc3cb1a8b"],["/archives/2020/04/index.html","9847939be01429e10bd7498848b2e7e9"],["/archives/2020/04/page/2/index.html","8a47bf4664481e424b5bc8188844c21d"],["/archives/2020/04/page/3/index.html","fa92f7c693bdfc47ed34d5357bfa8042"],["/archives/2020/04/page/4/index.html","4b1b925053cbbb819ebc595f0ef2403a"],["/archives/2020/04/page/5/index.html","c3efb859d8fcda67ba505156841d2844"],["/archives/2020/04/page/6/index.html","144bc49959011b2acaae2b2868e5f8e6"],["/archives/2020/04/page/7/index.html","2890b688edc8c95cf2e16f44640d56c0"],["/archives/2020/04/page/8/index.html","18dc55fe42c1d9089db89fd3b15eeb69"],["/archives/2020/05/index.html","e5311a1c58a548dab6c6386f7d691c53"],["/archives/2020/index.html","e7330c0b5ed2125121003724b8e0b21e"],["/archives/2020/page/2/index.html","17ae25c64df070ce3fe96d05d445dd54"],["/archives/2020/page/3/index.html","07b52b4ef470346ce2f3487086aa5d20"],["/archives/2020/page/4/index.html","3bc4b73bf5a46ea429ad8aae11cb728b"],["/archives/2020/page/5/index.html","69ff8258aedb53b2c4a56da9b65972ed"],["/archives/2020/page/6/index.html","d2ca566d34871b9ef3b489a5ec290070"],["/archives/2020/page/7/index.html","46d01c9efbd767bfedc5b736db6e85a8"],["/archives/2020/page/8/index.html","713c723c61ef127a6218b2b3adc3156b"],["/archives/index.html","563f58bba01ac202844992c10917bdfc"],["/archives/page/2/index.html","a8906eba3fab8c3b31cc490b0984ce29"],["/archives/page/3/index.html","f9eeb34e581bd38748d31751201eb429"],["/archives/page/4/index.html","54b768b43e518a668d95771dc86c7870"],["/archives/page/5/index.html","bf5e3abfd75cbfc9dec2ac4a39b1b36c"],["/archives/page/6/index.html","7cb174628845bd9b2518aa2e4444c5ea"],["/archives/page/7/index.html","71c344c2f824bce6a82bdad2b8fb21b1"],["/archives/page/8/index.html","59fe96a901a4a1a3b410a775d604a0cc"],["/categories/Codable-protocol/index.html","14b47fbfffe90ee063db584b4a277a4c"],["/categories/Combine-framework/index.html","e782b1c6f7adb060f05ce28fa810fea9"],["/categories/Grand-Central-Dispatch/index.html","cad9f5c7e9ea483c26db9555188f00b5"],["/categories/Hexo/index.html","5674f41f4e35252b19789d27048083d4"],["/categories/Promises/index.html","b1b23510b7c9799d3401751b5cb68676"],["/categories/Result-Type/index.html","76816a55e4bf2299c8152f422dcdc2b8"],["/categories/Server/index.html","606dbf363858b2eb4019a2dbcecc8c12"],["/categories/Swift/index.html","bf0d42d0bc3c997823518c9e8209c509"],["/categories/Swift/page/2/index.html","4105d9604a1ce1a698376584702299d1"],["/categories/Swift/page/3/index.html","0e973d18f1a5aa806e4e7f443c050b0e"],["/categories/Swift/page/4/index.html","d81a9af2302f83035a921c569dd76af7"],["/categories/Swift/page/5/index.html","82160dabecded54d1df25d33c36333a8"],["/categories/Swift/page/6/index.html","d66c671fbe7e1466499940aa71492927"],["/categories/Swift/page/7/index.html","09ab17114b5652a8d8b878a72eda1f09"],["/categories/Swift/page/8/index.html","610707c07cd5437e5a41e8ffb312b254"],["/categories/Swift5-2/index.html","a6bd323cbec34a37d4ffe638d345431b"],["/categories/SwiftUI/index.html","da32df953d76d04c83e6999a7954974e"],["/categories/UICollectionView/index.html","4272f932efe63a6e3ce909db70a2a1a3"],["/categories/UIImagePickerController/index.html","def9b8e1c98d7acb50420e4c51f16f95"],["/categories/UIKit/index.html","58d12325721f3b14c0bc5e62f28fb17c"],["/categories/UIKit/page/2/index.html","b51c126db681206f1b1953167712b8b6"],["/categories/UIKit/page/3/index.html","b418400816723ffbf0b5aded498483e7"],["/categories/UIKit/page/4/index.html","0d7d486a62d9f451a31b14f7d3a89ecc"],["/categories/UIKit/page/5/index.html","302656cc4b6a89de02888fac1e94a275"],["/categories/UITableView/index.html","adadda23d497f44738a185b20a9bb690"],["/categories/Ubuntu18-04/index.html","362ab7989e204b9b6e5920f7d6265061"],["/categories/Ubuntu软件源/index.html","5db0e0861734f922393f0b4d07ef8172"],["/categories/Uniquely-identifying-views/index.html","472baff64f1a034d6528c559d888edaf"],["/categories/VIPER/index.html","5fb1d20a6cfa0ad2a28bdc7e9c16f199"],["/categories/Vapor4-0/index.html","478a9b25fd6d83a0bfa95303fd38a570"],["/categories/Xcode/index.html","a08acd228bba7184b00f2b96847e7762"],["/categories/appleOS-Networking/index.html","022a75eca85df45302e0d82d9ffd7a43"],["/categories/enum/index.html","dd4ae5142ca5b9908a0132bcb84c9374"],["/categories/iCloud/index.html","466cb9a84893d925d90b80b4fe4c9a44"],["/categories/iOS/index.html","cad83475efb329c1c71e31691e598b94"],["/categories/iOS/page/2/index.html","1ae5b9f63b62e2bc546d2f8816d76331"],["/categories/iOS/page/3/index.html","499d93d2e73ac4880075b9d1b57bf4af"],["/categories/iOS/page/4/index.html","f5a9b068e21d6363f71d6f02c0584869"],["/categories/iOS/page/5/index.html","ec14ef8103bb7b61ebf276e6c1c5da76"],["/categories/iOS/page/6/index.html","53117d079ce9b8915c9b58d8a13e0668"],["/categories/iOS/page/7/index.html","0c3e2f6139870b5438fe50a29a5e1433"],["/categories/iOS/page/8/index.html","7fb267e5103b17d10435eeeeac63a664"],["/categories/index.html","cc014f0ec2ea96696468849aeab2d818"],["/categories/random/index.html","201ff09bf80c6559d7086c8adb788e7f"],["/categories/三方类库/index.html","2ddb274b5ab7a2047f1f1c50946387ae"],["/categories/函数式编程/index.html","e80e987455c7f457d04e7b07e0a6a48b"],["/categories/子类化样式/index.html","70b7af80d8e9b2b94af27034fc4c0540"],["/categories/架构设计/index.html","c5124d65f30ca3f821ae45a9ca946149"],["/categories/用户体验/index.html","eabaa4b11654da4a2913b527fdca6532"],["/categories/设计模式/index.html","fcdc04c41842ab27b2866a97924eef78"],["/categories/设计模式/page/2/index.html","9c104997abe507379b7cfeee419a95d6"],["/categories/设计模式/page/3/index.html","27735d3f88df928162a0667924e7a0c7"],["/css/main.css","d826cd478700cc53cbb7abc533421c2b"],["/hello-world/index.html","49a75c55371ed56e4f6c0498ab0f7cf7"],["/iOS VIPER架构深入实践/index.html","e3576a5e240f5a8fbd9fa140e6f81dcb"],["/iOS 自定义视图，输入表单和错误提示/index.html","d7489b2b8298b5d6486982c4276d5e7f"],["/iOS如何使用iCloud文档？/index.html","273a3c1a9a885cdec7c51077448b956c"],["/iOS子类化样式/index.html","28e37caaff339d649ea4884ac7e23381"],["/iOS自动化布局编程/index.html","9882a1d2e84371eddadcf2062d09fa95"],["/iOS自定义转场(By Swift)/index.html","3a5a83be2e74530fd5d6e7e1cf5d395f"],["/iOS项目架构：使用VIPER/index.html","63a154aade28eb06668afdc9c773745c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","dbf8f7bf0aa15748a4541301ebe2e6bc"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","528b15e4b21622fed0780b5ae5f4fdda"],["/page/3/index.html","59562e213970cf2698cc445dde1ab0b4"],["/page/4/index.html","f96d36b35c39cc3e97292e57b67d432f"],["/page/5/index.html","b69d95655e1dfb54d9095cf3762b70cc"],["/page/6/index.html","b60b68e0e556da0a88409572dc48c9f3"],["/page/7/index.html","90dcc67c3d5a19bd49c75d66124e4282"],["/page/8/index.html","2953eaf17d47305583a1ad73f7425158"],["/schedule/index.html","9444524f4dda35679e5954eb70c430cd"],["/sw-register.js","4d355c01120b8228bf8cdbfb1cf20de9"],["/tags/Codable-protocol/index.html","80e95f9280369972d266bca3dc17210b"],["/tags/Collection/index.html","4b904408b339d456d5ad0662460b0b9d"],["/tags/Collections/index.html","bdc41fcdbd6b58919e8b9c2d85b99919"],["/tags/Combine-framework/index.html","3f4477d37c8bc70e0e487414c82faa24"],["/tags/Dependency-Injection/index.html","a12f90c87f879ac725e36a635281ff9b"],["/tags/Grand-Central-Dispatch/index.html","b8a3289ce5234fe6f58281f55151573f"],["/tags/Modules-And-Hooks/index.html","c29fa64f4273889473c6c9fd2bb63639"],["/tags/Promises/index.html","598182a9670b0738e6b200a30dfb5cc0"],["/tags/Result-Type/index.html","2820a0900369cb3cad56afe70bc51b47"],["/tags/Server/index.html","d3a342c6b37455ccb206bdfb14a501fe"],["/tags/Swift-Package-Manager/index.html","c2851e27004638126d984deaea0f0041"],["/tags/Swift/index.html","e1a5d7f2a5cf6731089036952d2aeb75"],["/tags/Swift/page/2/index.html","125afc86b3b8868a13da31881c705960"],["/tags/Swift/page/3/index.html","39e40e8db4f42aa5d604f385be4c4e42"],["/tags/Swift/page/4/index.html","0062c70b151601d27e60b53a2c7fd18d"],["/tags/Swift/page/5/index.html","fe97c8934bd0ee1ef3e23fa1bcaf45b1"],["/tags/Swift/page/6/index.html","b8caf7ba4faef35944ee109b3a8c15c7"],["/tags/Swift/page/7/index.html","10024890799491bfe167b6b89b55124f"],["/tags/Swift/page/8/index.html","b732e4b70ba53997658fcc3f73107275"],["/tags/SwiftUI/index.html","e3e620e5bb5a34ca2ece8cb21f03f74a"],["/tags/UICollectionView/index.html","2637645a846963c497938b6a47a62718"],["/tags/UIColor/index.html","0cbc25dfa9ee9eec71d49832d338366c"],["/tags/UIImagePickerController/index.html","3298ef51f40008985d08903b09801c1f"],["/tags/UIKit/index.html","e5d684891e300c359885ef48a4ce1ed7"],["/tags/UIKit/page/2/index.html","ff78563e89fd328de0195d8663c1737f"],["/tags/UIKit/page/3/index.html","62296da2d1dac65c031e410e094fcaac"],["/tags/UIKit/page/4/index.html","2e1d4108a548440e310bb3c896fb8408"],["/tags/UIKit/page/5/index.html","874abd8263e4ce7d8f2bfa6daf7b42f4"],["/tags/UITableView/index.html","e3125c290ffcf953d381f65f8f98e9b7"],["/tags/Ubuntu/index.html","2575d64a44a122539e266f0f53505552"],["/tags/Uniquely-identifying-views/index.html","80a31ebda2d6a0e71a215c161a0971d6"],["/tags/VIPER/index.html","e670304acf11fdc122803e8132588041"],["/tags/VMware/index.html","b049d0770d94ccf19a37559d0c9f62b6"],["/tags/Xcode/index.html","c81c3006376d7d777e49aa2f32666dd8"],["/tags/appleOS-Networking/index.html","65331cbae60e44b0c91f8ba2a6a7593b"],["/tags/enum/index.html","a1b3dd89bc2d1edd498ac3181dbb6b62"],["/tags/iCloud/index.html","2a73217c418a7531ccccaf2bf65c3e75"],["/tags/iOS/index.html","6f8513a188809509bed76c9c5a6993ac"],["/tags/iOS/page/2/index.html","caffc18e83c636f79a10756e34a04244"],["/tags/iOS/page/3/index.html","4d49aef44a748513af980190c587e042"],["/tags/iOS/page/4/index.html","84177e88154321d0fed94735fd2a7617"],["/tags/iOS/page/5/index.html","40ef617c7d4df70f80e6fc6bb4076e34"],["/tags/iOS/page/6/index.html","6f5d83b5a4643647998eef16d97927bf"],["/tags/iOS/page/7/index.html","37461dde89b17beca6743ff173781536"],["/tags/iOS/page/8/index.html","f56c60ae8e4c95e2eae8e11e5d5c9e4b"],["/tags/index.html","66354a00c14e10e4e5d8f46953034c0a"],["/tags/non-optional/index.html","c8c04101a549ece5c9fadc8a3fa39edd"],["/tags/optionals/index.html","981cfc500cce6bbab2ea3187981866fb"],["/tags/random/index.html","a4149f6b0529cfc71ebbd5ab2b67297d"],["/tags/transition/index.html","b9b535a191ba80f7fc1df54725263dd2"],["/tags/三方类库/index.html","6546445ed0d1cdae1691fac9cd738d4c"],["/tags/依赖注入设计模式/index.html","4f1bb50893d6c78fbf6039c6de5e7676"],["/tags/函数式编程/index.html","7243183b7c92be6b08f9251144a579fc"],["/tags/初始化模式/index.html","1a95dc3c7872df7a43c83da08dad2513"],["/tags/单例模式/index.html","f3db691d4d3f99852584f7e1f5faf439"],["/tags/原型设计模式/index.html","793e82fb880cbc3bb45d175e68102fdf"],["/tags/命令设计模式/index.html","5e24e10cabb4d6c9a8bf84dcf8fbeae4"],["/tags/外观设计模式/index.html","30152e70a81a12fd2ba09049ad1c9ecc"],["/tags/委托设计模式/index.html","50e0483fb2522c0b8a9d10424496fddf"],["/tags/子类化样式/index.html","e7a609c51a3df7478eb0af82a4bd4b1e"],["/tags/对象池设计模式/index.html","5231d4348f3843cc11d43ba5a9cd21db"],["/tags/工厂方法设计模式/index.html","8820d9d1b9eb8c147719f5faf6775b7e"],["/tags/工厂模式/index.html","0939a40052a99468cbf97666a691d440"],["/tags/工厂设计模式/index.html","14debc9317b9f79106d9cc6fb66a496f"],["/tags/懒加载模式/index.html","557994c4920e675a81f908fceca48dd1"],["/tags/抽象工厂设计模式/index.html","4e947db33c8d05b105eaffbc072fb0af"],["/tags/构造函数/index.html","ca87a6c06857f4c97c866c114fe017e3"],["/tags/架构设计/index.html","e559f5ce45bba810cc739407b402e758"],["/tags/生成器模式/index.html","4a3e00f3d8a7128be6f2aec8a53588e4"],["/tags/用户体验/index.html","59dbba44350ca58e5ba35adf3b83c597"],["/tags/自动化布局/index.html","31c9ad2865611214d88d88d8f5c0093a"],["/tags/自定义UIView/index.html","dbbad1d61f3f59cc74a28aa8e73e2709"],["/tags/自定义转场/index.html","763b2cc25c2f53208791018246c2ad54"],["/tags/自适应布局/index.html","95df4b4628ef289a8cf08ef5ecdcb117"],["/tags/设计模式/index.html","2a18f5c1fe26955df14beac1a2daa9d5"],["/tags/设计模式/page/2/index.html","f364edcefe41fce0a0d801e0b3e7719f"],["/tags/设计模式/page/3/index.html","b47d708e978623f7470017e1b7c2525e"],["/tags/迭代器设计模式/index.html","9f29e556467c241a8a14203ac1402184"],["/tags/适配器设计模式/index.html","11ad2d66b02e0b0efee485d377d6c631"],["/tags/静态工厂方法/index.html","549ed35e429d68e884ea7c2c0917b954"],["/为iOS应用构建输入表单/index.html","489f8b5b74b05349598891980e01243c"],["/产品开发的幕后花絮/index.html","822de45efac7697a5932d7bee1d64401"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","169c9fef22c8185a39879572e15bd55d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","059e500837572e2741ae567bf78e9e08"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c0811e1c11071200f43c3ea665c9a8f8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d9451821fdf2f39d99082a72d4a095b1"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d2c195677bd0438166587a238706c0a2"],["/在Swift中创建自定义集合/index.html","3ae8470af14fac88e5a4ca66f175ca00"],["/在Swift中处理非可选选项/index.html","f7590239388b14de9d87b364ab662255"],["/在Swift中生成随机数/index.html","a31379f8eb5677b3abc8723d6d4796c6"],["/在Swift中重构单例模式用法/index.html","27e5514524702b7e1a322ce360f3c517"],["/如何为VIPER编写服务？/index.html","8a144d59ed2ea6422ab5c587920e774f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a28a5672e9dbdd322b724be8c0abaa57"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","463c8484bf3c2652c87a6258ebe99b81"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","4151237ee12d5398104c9614ec031903"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8908ef2aef429e6ce2fde8b17c85a298"],["/掌握VIPER架构/index.html","d7611e94dc9059cd3dbb9f5636c223e2"],["/揭秘 WordPress Hook 系统/index.html","10ef062e37106d11540b990e18baf605"],["/比较工厂设计模式/index.html","30345a4037220dba49930b6e7b2a8285"],["/深入了解Swift中的Grand Central Dispatch/index.html","03fa578096df20d6c26805680ee4fbbe"],["/深入研究Swift框架/index.html","50c9e2cff7c22f26e0564c8d6dc9d5f3"],["/适用于iOS开发人员的VIPER最佳实践/index.html","530143e2d6544b2fda54fb73f45ba29e"],["/选择Swift而不是Objective-C的5个理由/index.html","56b6cd66096d4d7654e5ee97f7d25d09"]];
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
