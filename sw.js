/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","779188c86d6ffce4dc1d90a389848070"],["/Swift Lazy属性初始化/index.html","b1b78848e992167dd750943c1ced230a"],["/Swift UICollectionView使用指南/index.html","fe16dbf4083f7eae4174afe61d07bad4"],["/Swift中UIColor最佳实践/index.html","07ec19daca619e5667261ebbfe030b4b"],["/Swift中快速简单的工厂设计模式/index.html","0260be6a99db1618d546b8a4fe62cf98"],["/Swift中构造函数与静态工厂方法的比较/index.html","53b65a5f1945844c742df4359a09ed5e"],["/Swift中的懒加载模式/index.html","5b8b7013a6cb31b338d997d3a7f67821"],["/Swift中的模块和挂钩/index.html","a62dfd189014533863299bffb7853c35"],["/Swift使用布局锚点添加约束/index.html","addd98e4c0ccddebf3b5494e006b5ff4"],["/Swift依赖注入设计模式/index.html","5b9375c320b63be1d310ea8bac925d06"],["/Swift关于Dependency Injection (DI)/index.html","6d2000e49562a41054711a80f375afb3"],["/Swift初始化模式/index.html","73b99a5ad11247cfdd960bbd4ab61724"],["/Swift单例模式/index.html","5eb1a4e63311890799f3be3e8b42c28c"],["/Swift原型设计模式/index.html","2b888e1bfd7d266b4859e24cd3d404c9"],["/Swift命令设计模式/index.html","a5f0ea99a196b6363d49bb45b17e9c92"],["/Swift外观设计模式/index.html","b362ef86be55b8c2ecaa3625841e5425"],["/Swift委托设计模式/index.html","182e11ddf09842a1ae0c086dbfbb3901"],["/Swift对象池设计模式/index.html","c3dac49f8db30e4051299c4f77e4f0af"],["/Swift工厂方法设计模式/index.html","e328119bf227b0dfd6de5a192f337a78"],["/Swift带闭包的懒惰初始化/index.html","a87f9a26a2227ef5eeba54c806bfdd61"],["/Swift抽象工厂设计模式/index.html","e5c3fe37f1818ad9347b5829c82cb0a0"],["/Swift掌握iOS自动布局锚点/index.html","49232b24590451d4c36e653d0bdd0b97"],["/Swift支持旋转的自适应单元格/index.html","2ecba81fa4a01e52daf2d8b043b377af"],["/Swift生成器模式/index.html","9f3815a6857930fcff9daba33cdb10fd"],["/Swift迭代器设计模式/index.html","8d1c2e9c6181bf7afd868ff762c4ef45"],["/Swift适配器设计模式/index.html","74da918329b550450ec54f6a4cbd6fab"],["/Swift静态工厂设计模式/index.html","f1b26caed3b4b0b297a97508a5ba57ea"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","bed67b37b2759466eadcad9f1450bb95"],["/UICollectionView data source and delegates/index.html","85202437c72bb89a2c1e1ea890093871"],["/UIKit初始化模式/index.html","c60dc96962b31ddef910213497422de7"],["/Ubuntu18.04替换国内源/index.html","6cebd46f8d201691ed11ed226812b3c2"],["/about/index.html","5e3f97e908190ee7895ea59028702fd7"],["/archives/2020/04/index.html","e89cad7274ef05bd16f66f1dc839a4de"],["/archives/2020/04/page/2/index.html","daac4b35a726a920005e5dc41c832463"],["/archives/2020/04/page/3/index.html","120c7d5f42d0999808e5cae82e02e261"],["/archives/2020/04/page/4/index.html","1aa400832dcb2e3079529bc8ae758f13"],["/archives/2020/04/page/5/index.html","08cbdef3e0ac08212221b9db63a7d415"],["/archives/2020/index.html","563a54450fc8d57fffa0677b9cc193f6"],["/archives/2020/page/2/index.html","d6df4322cae13bf2b220538040809315"],["/archives/2020/page/3/index.html","10ac1dfc7cac52b5263f16365fa25707"],["/archives/2020/page/4/index.html","1f9ef808f2ad0eb4f89370b1c383cce8"],["/archives/2020/page/5/index.html","0cbabef2d1029780cfbc56fc73ac32a2"],["/archives/index.html","7f1424b0964b621452e67ba6789325c6"],["/archives/page/2/index.html","5092ec0991aa9f71c2422e8f02ee6be8"],["/archives/page/3/index.html","187c6f18e20ee21fb7ce75c40d7cb2d7"],["/archives/page/4/index.html","b195479246a7ca7ec92ebb68928093a9"],["/archives/page/5/index.html","98e3aa7bba760c271d498dcb06bd0546"],["/categories/Hexo/index.html","2da8ec5d8ebc785291bbb807a09a4e78"],["/categories/Server/index.html","e40cb7d0ffec632643473bfca3e2a2c6"],["/categories/Swift/index.html","d0cd628427f6be3a150228362958b8c2"],["/categories/Swift/page/2/index.html","6024607ba783980ee6083291e58729d6"],["/categories/Swift/page/3/index.html","acb9f597ce1f2e9015f1d30a67d8a046"],["/categories/Swift/page/4/index.html","c71c7b0228a11f8bad377d820f712757"],["/categories/Swift5-2/index.html","b1367d8d451389e0803babf4a6172b76"],["/categories/UICollectionView/index.html","6af6f1267f7fa6ed116c531cf817ba7a"],["/categories/UIKit/index.html","ba76dabc759a686a123f8b8a8a7f56e7"],["/categories/UIKit/page/2/index.html","e2a35b4ce451e2e304ac9de744905915"],["/categories/UIKit/page/3/index.html","e46e7e6e5b1ea6313841288a9ae14931"],["/categories/UIKit/page/4/index.html","748b7266f42f18f393654c677388951d"],["/categories/Ubuntu18-04/index.html","2b125ab206f22b45f7bb0e819bdf2c36"],["/categories/Ubuntu软件源/index.html","7629202689187d4af1876171fb11e8cf"],["/categories/Vapor4-0/index.html","a7791a792008ece7c755f8f82fa14ac0"],["/categories/iOS/index.html","5b5c3b277eb5725390c2b93e298a3a32"],["/categories/iOS/page/2/index.html","044311abc0c04ba3dd3b5c3501f90b90"],["/categories/iOS/page/3/index.html","1706c25e3b86bc2038e8fa30f42d1cd8"],["/categories/iOS/page/4/index.html","adf6ee32a33a0ca1855f73e9c586c244"],["/categories/index.html","64d13e339e8c85200d4accb71c91ae44"],["/categories/用户体验/index.html","3bba7d11eb223b92f0e2e5f0f4a946a4"],["/categories/设计模式/index.html","4375697e6a0434e57eacf9856c15c45d"],["/categories/设计模式/page/2/index.html","28665409ee25da1f5fa026acf9fd575c"],["/categories/设计模式/page/3/index.html","593e1333a7ea68e206950422198f0a5a"],["/css/main.css","f1d08b4bc1cac10e61ce48faaaf84225"],["/hello-world/index.html","13564a3d2b8f1ec7c71cdf4c8a9e808b"],["/iOS自动化布局编程/index.html","6cabc324557b9478dc6749b21ab78263"],["/iOS自定义转场(By Swift)/index.html","cff5f27a2e914797f74614be64b74c48"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","30390d07cc2bd31540b492aa49a503b3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","baf01fd1fc96718a2ca02de36ddadf36"],["/page/3/index.html","9e21099310c46e51b4bb2e0674e3837b"],["/page/4/index.html","37b25e174e873451ee02de3f20d0fc43"],["/page/5/index.html","904aefebf4fa30d1e084474cddce8d96"],["/schedule/index.html","34d3235358b6d54fd6d4b8c1ca8d439c"],["/sw-register.js","2902aa77a6a48fa08d65c1b39268a8a4"],["/tags/Collection/index.html","184c628ff57d5214904bc9a483110147"],["/tags/Collections/index.html","204b8781872c11739c13c3f3d7f62cab"],["/tags/Dependency-Injection/index.html","2a4b004ba6149cc3d02f7686040e351e"],["/tags/Modules-And-Hooks/index.html","cc18bc5af083b675d0722629c795e553"],["/tags/Server/index.html","a60d9a25d7c82c09a8d69e1ded8ba4c4"],["/tags/Swift/index.html","6b8579254165f81d722235aa933f4399"],["/tags/Swift/page/2/index.html","75c6412abee7eae0c47781548ad4f07e"],["/tags/Swift/page/3/index.html","14d5df3091e8e319a2eec8adcc7860e0"],["/tags/Swift/page/4/index.html","817f0d1b0f3d4d7f1b5df04b5076a183"],["/tags/Swift/page/5/index.html","9af627cb85960b28e66b1573c9f6b096"],["/tags/UICollectionView/index.html","e7e7461db7e98cbea8cf99cbeec6d152"],["/tags/UIColor/index.html","52d4ef66a700869d7af6ac0db3b9ba83"],["/tags/UIKit/index.html","8874905eeb0780582ef7575363136142"],["/tags/UIKit/page/2/index.html","4c9934fcc684ce862e79f62eabd29c57"],["/tags/UIKit/page/3/index.html","ab3529c5dc27b73d52f1a9e11f81042a"],["/tags/UIKit/page/4/index.html","ad4c9389e5f67a4914f26b655cd17f70"],["/tags/UITableView/index.html","a8342d3e50516bda63c24eca208ba80e"],["/tags/Ubuntu/index.html","4c5c9cbe446c5e80b98884083e67a75b"],["/tags/VMware/index.html","2e5ded7ee31e18fb949c056a25b838fb"],["/tags/iOS/index.html","db46d3aa0c6b654757ff622d5d324010"],["/tags/iOS/page/2/index.html","7f93195242a605b961f815a5a6bb431c"],["/tags/iOS/page/3/index.html","0bbfc5ad920f375e6bca3033d6a2c411"],["/tags/iOS/page/4/index.html","4a54fe77b7da0cbb4fc7236c7117a313"],["/tags/index.html","e1b52761e56f987d15199337a3d87a6a"],["/tags/non-optional/index.html","68b1f12cd25329c591e57fc6a2ff825d"],["/tags/optionals/index.html","589a69655873764ec0e4215e9bfdab7f"],["/tags/transition/index.html","942b8dc25bf1a2b27d58de5ceea8c304"],["/tags/依赖注入设计模式/index.html","2e36b7eacf6d649c1fb8e6708e2c6605"],["/tags/初始化模式/index.html","630c183bfd065b6363e6ad13cd16839b"],["/tags/单例模式/index.html","53aaef1fdf6342415ccd739c6a7fdddc"],["/tags/原型设计模式/index.html","82b18893aaf2030818df23903c2b37d4"],["/tags/命令设计模式/index.html","891157ea1733f2dab5332d068595da30"],["/tags/外观设计模式/index.html","7767ded2f89668455367647d9d42718d"],["/tags/委托设计模式/index.html","8bdab47ed2013417251613e555094967"],["/tags/对象池设计模式/index.html","0e0fe14b6744ee598c55322931fee25f"],["/tags/工厂方法设计模式/index.html","7702be1cd083e93f30fc850f933ead32"],["/tags/工厂模式/index.html","25cf109fa99f6ca02c4d20e467bb8b75"],["/tags/工厂设计模式/index.html","342f5eaab51a1be13e1c6170a692c12b"],["/tags/懒加载模式/index.html","5234c4a73e828ff5db91aa1d14ee3147"],["/tags/抽象工厂设计模式/index.html","7317dc56139892e94d13209eab8b1274"],["/tags/构造函数/index.html","a293756d01c18a4c660f4d93f0d84bcd"],["/tags/生成器模式/index.html","3861c6d493f2b3f08967fdff287c88a4"],["/tags/用户体验/index.html","d1c4b61e610e4be99b20c481fdfdc931"],["/tags/自动化布局/index.html","2109d214467ed527ef0bb5e2860dc11a"],["/tags/自定义转场/index.html","a735e3b8d0fda8ff7f7bb16860db7df1"],["/tags/自适应布局/index.html","9fc46b58af367058c4dc4d73fdd7433e"],["/tags/设计模式/index.html","66b7ecfd70b6f1be9c48d6e0664b9a02"],["/tags/设计模式/page/2/index.html","1e2fcee9468c57c6556fb159d26ab654"],["/tags/设计模式/page/3/index.html","2878d78a81670f1430ea4f6293e0af14"],["/tags/迭代器设计模式/index.html","f77555dc4bf8f7aa3a9af07dc7ae316b"],["/tags/适配器设计模式/index.html","46475384aeb5f3cd9336f64d93619d08"],["/tags/静态工厂方法/index.html","653226732b01f08673f6e762173cc298"],["/产品开发的幕后花絮/index.html","e776743866b57e4f080490fbeb389b81"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f574e535b55b6d1e202536f00329190c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","cb21724762415fa8e23ffa53f673e72f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","e81e14cefa9cccae411f3e59f46c3e8c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","813a4c1d661c1638e83147d47b16d82f"],["/在Swift中创建自定义集合/index.html","30d073b47bca0a5cb726a9f287eafae3"],["/在Swift中处理非可选选项/index.html","184ecf4e3f24790b393afc2e76f93184"],["/在Swift中重构单例模式用法/index.html","9bbc5058903b5630a84033d95a5cc3ad"],["/揭秘 WordPress Hook 系统/index.html","18d29d9d6fed7063df10f8673139141e"],["/比较工厂设计模式/index.html","1a40dbb94e4aa6e896aa49e3716b4559"]];
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
