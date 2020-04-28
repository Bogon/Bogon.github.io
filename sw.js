/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","3032d2ca9e90196647cfa64cff8e466e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c88bd369ce9de03f686e5ec28dca7993"],["/Swift Lazy属性初始化/index.html","e41ba272aaa49bfdbf095d303cde8505"],["/Swift UICollectionView使用指南/index.html","37ff5d0de09029fd821c9c350cac6362"],["/Swift 唯一识别的视图/index.html","c787ea936fd72f6a9d4fe0686c29be73"],["/Swift 如何学习现代UIKit？/index.html","13108241b55c8d14e72a103aabf71edf"],["/Swift 选择和播放视频/index.html","25661d28c3b6d5336d2ebf9b92716adb"],["/Swift中UIColor最佳实践/index.html","74a5a794d24757f625cfcd178650096e"],["/Swift中快速简单的工厂设计模式/index.html","83abe9c5ea706e09c27691303bc29472"],["/Swift中构造函数与静态工厂方法的比较/index.html","d8c2306583bcca7bf744f27c31eb6447"],["/Swift中的UITableView教程/index.html","5e524dd51a02572f636d26954c6f6581"],["/Swift中的懒加载模式/index.html","fcdd533228895537dc6863015d871902"],["/Swift中的模块和挂钩/index.html","7bb959062bda3e03075c40d7a9ad2b4c"],["/Swift使用布局锚点添加约束/index.html","f02e126ee823e253f509003724b8873f"],["/Swift依赖注入设计模式/index.html","27fca75769173cc2f862c41f6bb0dda3"],["/Swift关于Dependency Injection (DI)/index.html","5019635059134b621d16c360b856521e"],["/Swift初始化模式/index.html","d94bb48a68fdeeceebdc7ed93199e450"],["/Swift单例模式/index.html","1dfa24f88297c05fd3c2db0ea38dbda5"],["/Swift原型设计模式/index.html","22c6720ae3eaea4720399902376b569f"],["/Swift命令设计模式/index.html","63128d0304c0c55af380ba0d7c6f7922"],["/Swift外观设计模式/index.html","4124254323b2408c21c08059c402cdf8"],["/Swift委托设计模式/index.html","a88512d8499b98975d9dff20eb2d49cd"],["/Swift对象池设计模式/index.html","1d194c712d0a66832f1c7b34124fda06"],["/Swift工厂方法设计模式/index.html","120f06d6fefccf93e0eedea0477fcf3d"],["/Swift带闭包的懒惰初始化/index.html","67e29f31edf2008251d96ba991cee2fb"],["/Swift抽象工厂设计模式/index.html","9e66710e54c8060f88b7d38e860bed8f"],["/Swift掌握iOS自动布局锚点/index.html","6a550b05a153b1704073a9beab058a68"],["/Swift支持旋转的自适应单元格/index.html","4b3e57bf1da0fad1073011ff727298d8"],["/Swift生成器模式/index.html","60b40dc157ede715acc447e26bbdda2f"],["/Swift结合Xib文件自定义UIView/index.html","8ea1e9225d402a764e55c17df78cf61c"],["/Swift迭代器设计模式/index.html","40bc9b044cb544e863b3aa59404a3814"],["/Swift适配器设计模式/index.html","56843e190e18f2d074942bd547bc2c6f"],["/Swift静态工厂设计模式/index.html","f10902d6cf1e6e3c7f832dd5794bd976"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2d724c58401248dff078ed3665b46004"],["/UICollectionView data source and delegates/index.html","ffd272e3ec890dc5e43a4b98a908d6be"],["/UIKit初始化模式/index.html","ff97b93d59d33e68d41efa9da470f6c9"],["/Ubuntu18.04替换国内源/index.html","d339496a0a0ce0f2913d4e58f871e6c3"],["/about/index.html","bab9289a320dff98d5d152ee02ad8af3"],["/archives/2020/04/index.html","9c8edea353715c970e072fa11d90cb0d"],["/archives/2020/04/page/2/index.html","8a21754e140d0a10c62615d42747f872"],["/archives/2020/04/page/3/index.html","a3e57fe634ee39595f5a38b70eff5937"],["/archives/2020/04/page/4/index.html","e4acdedfd62333085c28cfe9f426d00a"],["/archives/2020/04/page/5/index.html","8013d10672c77b486c50c318321ec6e5"],["/archives/2020/04/page/6/index.html","0000bace4fdd933380b8be8811732d9a"],["/archives/2020/index.html","ac353edaba5f6c055ae353a0d771b303"],["/archives/2020/page/2/index.html","e25949473416a863f771166833ff7c06"],["/archives/2020/page/3/index.html","b30bb670f1903cfa3cf5f44c74c8b335"],["/archives/2020/page/4/index.html","fec42422c63b000a92d6be332c9234e8"],["/archives/2020/page/5/index.html","68e4dabc5d596a28ce43bf686a1b9761"],["/archives/2020/page/6/index.html","e5faf397f1a933e084b9811fee645f8e"],["/archives/index.html","1242b69684195f78d4cff019d824931e"],["/archives/page/2/index.html","053e005cedc86b81ef6f1eea3e18e04e"],["/archives/page/3/index.html","297616bd86c962cf135a288f25b151fa"],["/archives/page/4/index.html","675da004d8c00c84a7d06407ee8392a5"],["/archives/page/5/index.html","7aeccc50ce4e206b45aaeb4d4f8379c7"],["/archives/page/6/index.html","2e4fa77328a1556769f701e034fb7ea6"],["/categories/Hexo/index.html","ae8d3d0c1c8be703a611e257a3a6bf07"],["/categories/Server/index.html","009e6ea961a45a7a278e18508b55b59a"],["/categories/Swift/index.html","6fc633791593951e9dea6d52cc808c99"],["/categories/Swift/page/2/index.html","e6c83fd89de5e0aeae9faa116c971bb4"],["/categories/Swift/page/3/index.html","f3e9ca504ad55f6e3736e8fa529244e2"],["/categories/Swift/page/4/index.html","67d8ffa5b874aa9f315d669625d299cd"],["/categories/Swift/page/5/index.html","7401f4173cb6c553c1a9ea91393e5ebc"],["/categories/Swift5-2/index.html","2bb4fa25eb5eb799ace0bbf52f7ad305"],["/categories/SwiftUI/index.html","fa4e3c012f62faa6ca3be0870bd03204"],["/categories/UICollectionView/index.html","4751c8b34a2dc167d9d433398f803a04"],["/categories/UIImagePickerController/index.html","0035edaf5f246c175e5b4c7cb6c0a0d3"],["/categories/UIKit/index.html","5566c69663aee44d7532ccbcf80d80ae"],["/categories/UIKit/page/2/index.html","797f90875f089441399135f840100dab"],["/categories/UIKit/page/3/index.html","f178bdbf6db6755d971784b75b2c4a94"],["/categories/UIKit/page/4/index.html","e43deb02038c691f25df23ac93d1d028"],["/categories/UIKit/page/5/index.html","02371a833511610bfe8e0eaa98d6adb9"],["/categories/UITableView/index.html","f4e65e733aadbe9cffaee5fa62d246ab"],["/categories/Ubuntu18-04/index.html","e977e4f46ac14ce971a22147b6041d68"],["/categories/Ubuntu软件源/index.html","19c17df5e3c70cd7142c7967ce351fe8"],["/categories/Uniquely-identifying-views/index.html","4e876bdca66910bf5dd667ec62d0ef1e"],["/categories/VIPER/index.html","f7450e66294ff68a4690ca83dc8dffbe"],["/categories/Vapor4-0/index.html","c23922195dccbcce3ed82b7f760b4b1e"],["/categories/iOS/index.html","186d83af7b102be4a948977850b2fea5"],["/categories/iOS/page/2/index.html","32ebf3f1cf01af07ff629242576173d7"],["/categories/iOS/page/3/index.html","09b5a9e169178e113efe5d00eff99304"],["/categories/iOS/page/4/index.html","f0781ef2eeb40ea236933fd80fe3b8a1"],["/categories/iOS/page/5/index.html","189eeb6fb44c4eb09bcbf556d5b47bdf"],["/categories/index.html","4c5e6b4c9122db73112a989ba88565a7"],["/categories/子类化样式/index.html","a52f4f9a74507332df284be99452c711"],["/categories/架构设计/index.html","d20a7cb2f5ef700ba6982ba9ed293898"],["/categories/用户体验/index.html","f96a9fbfc0771dd6cfb49ed9b4cdb437"],["/categories/设计模式/index.html","7f175b7d61b0852d5bb111c9a268b8eb"],["/categories/设计模式/page/2/index.html","787ec0f41ed138ab173b376b5036dc55"],["/categories/设计模式/page/3/index.html","dea4ef0080a54630969020565351c46e"],["/css/main.css","30af27e4a52b32f19db4a512eeb3411c"],["/hello-world/index.html","6bf6ab21506e2393f3e454ca56d9edcf"],["/iOS VIPER架构深入实践/index.html","1cea8ed5b478e94e563fe4b682fe5f5e"],["/iOS子类化样式/index.html","101e1a0b35c275430d069150af16b67f"],["/iOS自动化布局编程/index.html","019699f83c6833d91bec49e31cf0c7bd"],["/iOS自定义转场(By Swift)/index.html","2bfcef198640d221c6a9fd19f20b0970"],["/iOS项目架构：使用VIPER/index.html","2fe0e5a4a4a1f8620fa1a0f1e8962e9b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a6d90f29229cd42b3a29820ad8cb2ba4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1baea712afed193d81a8be9498bcf2cd"],["/page/3/index.html","9f317c244f56836b8b079ef8d0bb3f85"],["/page/4/index.html","a5847bb010693ede1f9567b958c3eb48"],["/page/5/index.html","3a007eb0df3e63c873ef87a3bdbc33ac"],["/page/6/index.html","0cd28aafe4ac0b2e9e5162599d3bf1e1"],["/schedule/index.html","9b6877aa3776fad08b9c1898c42934b9"],["/sw-register.js","6a865995e6bb4828a2710d07a75a6dff"],["/tags/Collection/index.html","1df6fc3435473b917dbdbf945657e6a3"],["/tags/Collections/index.html","e4857e25e835d89cfa9e45854a526c26"],["/tags/Dependency-Injection/index.html","50cb582e4ccf1239b8d2e9f9d984dfb8"],["/tags/Modules-And-Hooks/index.html","3494728ab6e99bdda89d2d5170d23ea2"],["/tags/Server/index.html","49bcba73e2890ebae79e91dc73b5d433"],["/tags/Swift/index.html","4f096f5d7f6dcaaa16f1e8bb457c5801"],["/tags/Swift/page/2/index.html","49f9d00cab551d5ec6ad8dc2bf13cee3"],["/tags/Swift/page/3/index.html","d41f12327cb8e48a835d648d3d1810a1"],["/tags/Swift/page/4/index.html","fb7caef190e3713b9635dec9cc9dd13a"],["/tags/Swift/page/5/index.html","0c90663978a91835b088e0c816d479ac"],["/tags/SwiftUI/index.html","6f3549837e5fe0b6d62111f646e5b61b"],["/tags/UICollectionView/index.html","b068fc8735cea786c735fae0cf878d4a"],["/tags/UIColor/index.html","6044bfc5047f0258b23ce0e4b38b4f39"],["/tags/UIImagePickerController/index.html","3a7a5b00a6e07cb43fa97dc104979d18"],["/tags/UIKit/index.html","9046b83cf9a604239599bb213756dd50"],["/tags/UIKit/page/2/index.html","291dbd2bfe88f9c5ae7334f5a128174c"],["/tags/UIKit/page/3/index.html","15d32145da85886937b986e48c93af7b"],["/tags/UIKit/page/4/index.html","e41f638addbc64b343124ee4964a4146"],["/tags/UIKit/page/5/index.html","98c59e478fb31baf12d245b3080245de"],["/tags/UITableView/index.html","7e62dada8ca98e5af5baba0c4fe5342a"],["/tags/Ubuntu/index.html","573154364ce3ffe307e840e32cb0f0f5"],["/tags/Uniquely-identifying-views/index.html","5ba6db5e41f1142de71cc59875c842a6"],["/tags/VIPER/index.html","dd92af4f26887e21fc2be76c828ddb30"],["/tags/VMware/index.html","8ef8222159c78ea269b717aff80d0a67"],["/tags/iOS/index.html","2cde3f0a0bb93c1359315d1ae86360e9"],["/tags/iOS/page/2/index.html","724f14403761d720ba5a64a51b3560db"],["/tags/iOS/page/3/index.html","b6cef8d05107425b9bbb70b80cdd34e1"],["/tags/iOS/page/4/index.html","c78025e2e68df21f3eca869bdef530de"],["/tags/iOS/page/5/index.html","c67dab0447c4037a1cfd80fd6759de9f"],["/tags/index.html","d90143df0dab44eaa8bff7ca8d82abac"],["/tags/non-optional/index.html","c92030bc6d2f57fbcb19ff16c79e521b"],["/tags/optionals/index.html","30561c32e9bee994809066dab8ac7bb6"],["/tags/transition/index.html","cc3f22d9157aa8e5c55bb9b55b9bb88c"],["/tags/依赖注入设计模式/index.html","b3c3181a9e8f9febba8da20979599a3f"],["/tags/初始化模式/index.html","e293d9b603c5b019d9635756f8afadb5"],["/tags/单例模式/index.html","ad18649d796eee8e331ba08d1cd2b07f"],["/tags/原型设计模式/index.html","19b294d389ad67ea2f50243ecd6db742"],["/tags/命令设计模式/index.html","3d6d2aad0eb93252e8fa4ee5b5330cd1"],["/tags/外观设计模式/index.html","75ffd8919fc1b8ef343b8f7b60910ca2"],["/tags/委托设计模式/index.html","54417292f497a669908dd36d1f25012b"],["/tags/子类化样式/index.html","003e4711b0513aee9f626fa7993ceedd"],["/tags/对象池设计模式/index.html","42d35fa808758407f976effdae066ae5"],["/tags/工厂方法设计模式/index.html","2bd42f09cc85b34ac13a08389109091a"],["/tags/工厂模式/index.html","9d10a8c1180bfbe99cb8771ee22bf9ea"],["/tags/工厂设计模式/index.html","239c7a2283365683d505442bce9fbdb9"],["/tags/懒加载模式/index.html","b52e81465792373321f1d493a71e6033"],["/tags/抽象工厂设计模式/index.html","33886061dbb2da31e9fa2b5b0f22100f"],["/tags/构造函数/index.html","858ab49a2708f7a5bfe825f3e87bc6c0"],["/tags/架构设计/index.html","ef0fca732c500d69371fc099831943d3"],["/tags/生成器模式/index.html","4c5930ccf71b90401d1660e801a153c5"],["/tags/用户体验/index.html","3479fab0dbe58188a19ab73d8b1090d9"],["/tags/自动化布局/index.html","ca7f87ffdf183c526b0bf988c1a40faf"],["/tags/自定义UIView/index.html","15f500684fb973d62048f0058c5082a8"],["/tags/自定义转场/index.html","655b937bae093198275b6d5c4f72b948"],["/tags/自适应布局/index.html","fec078fe3a0113b6c02444e21a0ab695"],["/tags/设计模式/index.html","7121c038ddd12de190e732718181f800"],["/tags/设计模式/page/2/index.html","dee0b7da021d939006b709eb83a1da24"],["/tags/设计模式/page/3/index.html","c347731d1ff4696a1397423bd39dd5fe"],["/tags/迭代器设计模式/index.html","0e0250f5e7a26ffe3fbe7355da75b1a3"],["/tags/适配器设计模式/index.html","412017201ab5b7019e57f962f372b127"],["/tags/静态工厂方法/index.html","98a50de6f4f18b80b65f16c309ada02e"],["/产品开发的幕后花絮/index.html","348aa6d3578adca0041e1c4647ab139f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","eee06707c86efc8c05b3b4fc8eeee973"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","37e5be3c52d8d4a9ad8c9657b4b0bac4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3bca3f380cab17bb7a32d38fc7b5a3cb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c49c2f3927575d27de29b04958727353"],["/在Swift中创建自定义集合/index.html","0707a581e9492d1f34a156f779517dc4"],["/在Swift中处理非可选选项/index.html","687d19a89221fceaae9c0d9331d9a9c9"],["/在Swift中重构单例模式用法/index.html","3ebb03216a75e7ccd2b214aea1b761e2"],["/揭秘 WordPress Hook 系统/index.html","1540e8abcdd9ffd44f092b8789449c2d"],["/比较工厂设计模式/index.html","e485c5d4ce54153ef9098ffce75397e5"]];
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
