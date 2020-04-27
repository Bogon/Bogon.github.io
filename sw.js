/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","02f66ee4f08d2f209cf42b8ccdb944c3"],["/Swift Lazy属性初始化/index.html","b913604a5efa376c4b378cfa05a905fb"],["/Swift UICollectionView使用指南/index.html","0cbbcb7d3ffe4930307b6d5077db0134"],["/Swift中快速简单的工厂设计模式/index.html","614212b72718f6a87615ae0dc173fb47"],["/Swift中构造函数与静态工厂方法的比较/index.html","98b7a7f3a2bf44d09ce5831bd08613d7"],["/Swift中的懒加载模式/index.html","d706fbfb76db70cd7d69c5ce179ab93d"],["/Swift中的模块和挂钩/index.html","dd3bcf2f3b7269943058182802b396b4"],["/Swift使用布局锚点添加约束/index.html","a4904aebcbe40888e95ad3b687f650b5"],["/Swift依赖注入设计模式/index.html","642b6e71876d499cf4e4666bfcb3389d"],["/Swift关于Dependency Injection (DI)/index.html","b56b39afce3f1eaac48ff8743275bc7f"],["/Swift初始化模式/index.html","d5f674cdf8ab67dbc83f6288b6fdb763"],["/Swift单例模式/index.html","d0e3087d5133679d9f4c2bcb519e6df7"],["/Swift原型设计模式/index.html","659d537b3838712b11087bf69ad5496f"],["/Swift命令设计模式/index.html","4b3acc3a5096be0d1b876ef63ed593ba"],["/Swift外观设计模式/index.html","3445b035030449398d0d4a57c3bc639b"],["/Swift委托设计模式/index.html","35e87e4a016893073cd468efb9c13337"],["/Swift对象池设计模式/index.html","1016471df1875d73c86f1e620a2d3c2c"],["/Swift工厂方法设计模式/index.html","84c7955374e59e61708cad8ed2f8710b"],["/Swift带闭包的懒惰初始化/index.html","f25878486ac4b8d4f9d00a6e01908ee1"],["/Swift抽象工厂设计模式/index.html","adcc56829a2d3eac01bf98c54c158e5d"],["/Swift掌握iOS自动布局锚点/index.html","e588dd89f18b82a822bed06c424ce17b"],["/Swift支持旋转的自适应单元格/index.html","f6cc0f67c222e5f4cc47f39da4054720"],["/Swift生成器模式/index.html","fc56576a17eb21235ac373462134f2f7"],["/Swift迭代器设计模式/index.html","e2daffd3e70f79c9b5520da057d1c77b"],["/Swift适配器设计模式/index.html","baeede44b09a1c66e9e94f32f934f882"],["/Swift静态工厂设计模式/index.html","8414dcee392b4c2ee94c8679b9188618"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","cdfb4ac7fd86567f61c2346168549bdf"],["/UIKit初始化模式/index.html","5dc99a3de88c0a795055d5e9d44179d9"],["/Ubuntu18.04替换国内源/index.html","ce63fbd80f8def5d5f8f6cb0b6b989b9"],["/about/index.html","f76fe3108ffdb46524fa12ac76c4e42a"],["/archives/2020/04/index.html","4fa448cca1e960d3bb97149d32217bd9"],["/archives/2020/04/page/2/index.html","75add570340a712ac4038371cca5834a"],["/archives/2020/04/page/3/index.html","adfade9260528727e83cb9ca617a95de"],["/archives/2020/04/page/4/index.html","20a5b40a546da193859880025ae33ee1"],["/archives/2020/04/page/5/index.html","7a8aae1c5a0df5cf9a613d836ce5dd08"],["/archives/2020/index.html","d16baecf575951acd10dac84fe6f8d1c"],["/archives/2020/page/2/index.html","78b4e204b02eb1f25aa8e97c84fd8ba8"],["/archives/2020/page/3/index.html","38f29550d1eecf54f2446ad5dc85e202"],["/archives/2020/page/4/index.html","f465dae567a5867da5204130e9d50314"],["/archives/2020/page/5/index.html","314c19348063bc3069f81876cdeadd40"],["/archives/index.html","e1546c62215fddf9613d841f8f642dcb"],["/archives/page/2/index.html","0dc57883cfde871f3e61bd39613d963b"],["/archives/page/3/index.html","46b0543a5493c93b7809582e99f03505"],["/archives/page/4/index.html","2656d987e8e180d9eeeea67e56e859cd"],["/archives/page/5/index.html","a08150f2e5a9f0096e7d71d5e0847fc8"],["/categories/Hexo/index.html","df1487298dcfa9c0065eec7a9c95d692"],["/categories/Server/index.html","bfa35ba75f64c3b237df5f57735454c4"],["/categories/Swift/index.html","ca0cfe107f42784ed0bd20f4e489b891"],["/categories/Swift/page/2/index.html","5f124bd3fc5dcbde4c0685aea1ef3682"],["/categories/Swift/page/3/index.html","c35557a25da3fdc9d5aa57d7dac4dc9e"],["/categories/Swift/page/4/index.html","06b5cba92a0ad96daa6e35a18cf97085"],["/categories/Swift5-2/index.html","8099403a23bd613e143670287306ec32"],["/categories/UIKit/index.html","32993e6998d5fbf0786d5c60c0d04d42"],["/categories/UIKit/page/2/index.html","3454c29424a36233a13eb3d4a7fb0078"],["/categories/UIKit/page/3/index.html","b05450282b0809e2a924b3a7477d730a"],["/categories/UIKit/page/4/index.html","fb0d0058f3128e27b58d2f2771d280ec"],["/categories/Ubuntu18-04/index.html","b6a24b69c974e0e18aeaf82acf0bfeb5"],["/categories/Ubuntu软件源/index.html","4ef4f9453271bca3f3b57722c841a4c3"],["/categories/Vapor4-0/index.html","262989b93ca6fb94be733452f7e70a23"],["/categories/iOS/index.html","a3b6cadf217688db8ff4e68f00fe0508"],["/categories/iOS/page/2/index.html","426e5bf3a6fb003070b0ab493467bc8b"],["/categories/iOS/page/3/index.html","425a2af5a8b55dbd26193808bb4d22e1"],["/categories/iOS/page/4/index.html","3dfd49a6c21fcad19bf554bcd702dc2d"],["/categories/index.html","9cd0e0768c2da07e60fdd0f271d745f7"],["/categories/用户体验/index.html","040079950c3cce84926969e4c97943e6"],["/categories/设计模式/index.html","a5120dc94083b68f6fd15347b7581753"],["/categories/设计模式/page/2/index.html","faaae5c944f1830702beae888dbd153d"],["/categories/设计模式/page/3/index.html","fab37f9722341bd5c77db7048e3ccd68"],["/css/main.css","cb9ff0773aa1807a4571a297b3850f77"],["/hello-world/index.html","bf8628b51b77977b40def854003cd08c"],["/iOS自动化布局编程/index.html","c558f9f6805e2b12ef88867c2fb46eed"],["/iOS自定义转场(By Swift)/index.html","c395cb86ee7ff8aafa2e224a04cd7e3a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","c037ada3a9aad009630ffe7a2a1e1cb4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","da1a21b7e924747b565bfe8bf2c156b2"],["/page/3/index.html","6377769ba9ca3b42486518a0d06091d4"],["/page/4/index.html","83835d01980ba5c59d09e33c342797bf"],["/page/5/index.html","92366beb39a6d8d6774f4f89e8cc6e95"],["/schedule/index.html","dbf0ef9623d64907241f0e3f96dcaf10"],["/sw-register.js","2eb296bb337ea5a55d6d9bfc620e9c74"],["/tags/Collection/index.html","441917634c5dbe2e6545c08d68d7f4f0"],["/tags/Collections/index.html","e8a76785e260bb9a4ddc3efe43cf9ebd"],["/tags/Dependency-Injection/index.html","41bac9f1da4f7bb99bda5ed4b3850b87"],["/tags/Modules-And-Hooks/index.html","769c24b7d23fa879cfa90df4d6c2589f"],["/tags/Server/index.html","11b748eb5d4565eaa8fc3c778bcb7ae6"],["/tags/Swift/index.html","0c929fa8f838a2795a1828477c524463"],["/tags/Swift/page/2/index.html","b135555c45b47a40e84b7d5873c49396"],["/tags/Swift/page/3/index.html","df3b9fcdc96de32f85bcd3927ae9d3fa"],["/tags/Swift/page/4/index.html","6f77e8daa5b961777eb052e4c1bfd2f2"],["/tags/UICollectionView/index.html","cbbce7896a0ad58bd35f6c9c85a69426"],["/tags/UIKit/index.html","21218f50909079e3a3848ebbf15f5308"],["/tags/UIKit/page/2/index.html","4744d1ebbb3fe69de02e842c4a89848d"],["/tags/UIKit/page/3/index.html","9104318c2bcadfa3cc3d589a2fc95906"],["/tags/UIKit/page/4/index.html","5aa51ba3f54628315c8a0be07a409320"],["/tags/UITableView/index.html","288b600c3706525623422b92a8e58c0a"],["/tags/Ubuntu/index.html","dbba69ae50fba4340dad15b10bdbf3e1"],["/tags/VMware/index.html","ba3ed83b8315ec55e204c04557272a4a"],["/tags/iOS/index.html","1ad16fc06762d3397d6fa6d3f45df446"],["/tags/iOS/page/2/index.html","eab1bd7901ddf2fab57c373a69fd7dd6"],["/tags/iOS/page/3/index.html","ac15ed715728d029a306de2de7a4ee88"],["/tags/iOS/page/4/index.html","6d8147d1a2842f75d4fcc3aeb55d1b25"],["/tags/index.html","276fa30493aa361138f0629c730f3633"],["/tags/non-optional/index.html","f7e35129ce04d51cdb3945088f97dfc9"],["/tags/optionals/index.html","9cbfe9705ac4f9f4a80f7480b5480f23"],["/tags/transition/index.html","b039af9fbf81427e288200c84d5290be"],["/tags/依赖注入设计模式/index.html","72463c096aa56621962aaca9207696d6"],["/tags/初始化模式/index.html","ca7d9d797c2d277a23ef1383de5d9f94"],["/tags/单例模式/index.html","99ce05fd6ee7dfea242d92e0e6dee52a"],["/tags/原型设计模式/index.html","4e3b8596ef3e67275a25247aeb1d9b33"],["/tags/命令设计模式/index.html","8bf908a99f3f26ae3efac2cf7dbe2172"],["/tags/外观设计模式/index.html","80e30b3f41568e47fb32e2c6988a3a52"],["/tags/委托设计模式/index.html","4e4046e54abd2fdfed352cb751bdd88c"],["/tags/对象池设计模式/index.html","9649fb0c5f72f9d4d9297408d9053782"],["/tags/工厂方法设计模式/index.html","a87739d21c271f44f099e4f31ee52607"],["/tags/工厂模式/index.html","4cd9c2188a3495e0618e7b11f4d78292"],["/tags/工厂设计模式/index.html","247f64cccd18d2b30177aac5b9c60a87"],["/tags/懒加载模式/index.html","e3d1a771e355828cb7d9284208ebfd0e"],["/tags/抽象工厂设计模式/index.html","1692f409084777ffe2942395a914d3dd"],["/tags/构造函数/index.html","09a23dcf5514d4be98246fbe704aa1a0"],["/tags/生成器模式/index.html","e4e8eac02f2c384949b2d49c98a2515d"],["/tags/用户体验/index.html","7f857024e3bc7e10f9a55587264ab13d"],["/tags/自动化布局/index.html","09bca229440bfcadc3e69eebdb7be790"],["/tags/自定义转场/index.html","4a4b4982844ede58f42614ca13565b6f"],["/tags/自适应布局/index.html","e2c27f4508168d249c8ae5f55f0b9785"],["/tags/设计模式/index.html","453d75c22df28dfa780a24fbc7d257f4"],["/tags/设计模式/page/2/index.html","eeb03c028c4c502d1ea64a3d46d80a67"],["/tags/设计模式/page/3/index.html","2a0d9d7b35abe3f749385ff1a2e9c566"],["/tags/迭代器设计模式/index.html","a5dc3463ccfbc1918c994171d3ba5438"],["/tags/适配器设计模式/index.html","885fc9660f9f72123afb0385e1dd6911"],["/tags/静态工厂方法/index.html","446ae1b6c8049726940c4805347b0cc1"],["/产品开发的幕后花絮/index.html","7090149487b450c06c48c132239866b9"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f3ef3e44cab0e5c3bd3f65e65a4241a9"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f5624c0e4f156041be592ca20aa605e9"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d2273a90e9edecf388a68d808da69997"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ed520b9c49f038c585b6a233d9a7493d"],["/在Swift中创建自定义集合/index.html","4539f1fe75b51599d1145ffcdd358db7"],["/在Swift中处理非可选选项/index.html","ce70d291e929db6df754aa8797b833ca"],["/在Swift中重构单例模式用法/index.html","b64968fde007d5f11e0536efe5f2bfca"],["/揭秘 WordPress Hook 系统/index.html","f4948ddddd5983042ad5b5ca553d0432"],["/比较工厂设计模式/index.html","49be380cf2578bca97933c68cdfa9dcd"]];
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
