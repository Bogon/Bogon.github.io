/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","c29e0e7128d9d42374a38fea755ed1b7"],["/NSCODER和SWIFT初始化/index.html","ea5ff790223cb3036341c554f1591110"],["/Swift 5使用UIImagePickerController拾取图像/index.html","751b2bd68eb2381115a76214861c5eec"],["/Swift CompactMap vs flatMap：差异说明/index.html","3f4cafa4334b65f12f69fb7a2581310b"],["/Swift Grand Central Dispatch 深入实践/index.html","0eec2f025d5c139b2381db0755f53dac"],["/Swift Lazy属性初始化/index.html","14eef044cf408765b40b96175b6788e0"],["/Swift Promises 初体验/index.html","873a9c93efc57f12189f3ecde7f8eecb"],["/Swift Promises 探究/index.html","92e5935655d196b72f6d131bc4f97747"],["/Swift UICollectionView使用指南/index.html","3e14601b325497d6a7a9c0d7211779d2"],["/Swift URLSession && Combine framework/index.html","a3a0dc4d3c5907a530d2c2234256c3be"],["/Swift 唯一识别的视图/index.html","040654f95d37219a590af09b0a54b0e1"],["/Swift 如何学习现代UIKit？/index.html","cc75ad33c1e9008c009150864361ad71"],["/Swift 用 compactMap 替换 flatMap/index.html","c1350c3b543d627c4d210c484b0107bb"],["/Swift 选择和播放视频/index.html","ea82614e4788a1939751287aeac92b78"],["/Swift中UIColor最佳实践/index.html","8e1858e00a4e4d29a3ef9e33d6d9ef5f"],["/Swift中快速简单的工厂设计模式/index.html","90f0f37877eda3fe05d0a327c6a41566"],["/Swift中构造函数与静态工厂方法的比较/index.html","db52171ebe881f79b323e278045ad3a5"],["/Swift中的UITableView教程/index.html","790efdb1b12e035a1f821407dee8ad0f"],["/Swift中的懒加载模式/index.html","1a643eff8c65d31c73d31d7d1f263f08"],["/Swift中的模块和挂钩/index.html","b4b0e71494cfcefd46918f8544d80962"],["/Swift使用布局锚点添加约束/index.html","88bfad952302a9b150681df7e9a6b888"],["/Swift依赖注入设计模式/index.html","af6f0c18f5e153e93ac41a29b70b46b2"],["/Swift关于Dependency Injection (DI)/index.html","28abb68b2334ec158ab9771ba0caabd5"],["/Swift初始化模式/index.html","c3a1f934e4467269846b0cbbb7ae5d16"],["/Swift单例模式/index.html","f7e57ef5bd68a9b3c6669ef0e8007503"],["/Swift原型设计模式/index.html","fcd33fc8518ffb14c4c75fa737ad4b94"],["/Swift命令设计模式/index.html","f45b4008e41034cf373679a29f955eb4"],["/Swift外观设计模式/index.html","8f488179df5011ae45177aa839fc15f2"],["/Swift委托设计模式/index.html","56525e2f2cfe58d656a722f3add33ff8"],["/Swift对象池设计模式/index.html","2f626067a2b5d8f199e64695c9f1f9ff"],["/Swift工厂方法设计模式/index.html","a419ae8948bd03f6b3435cd1d1768d23"],["/Swift带闭包的懒惰初始化/index.html","b352ad8d46f88ad1bb53538b3b6150d5"],["/Swift抽象工厂设计模式/index.html","d41aa5fd5f9de536ef3ba8e8d5f85287"],["/Swift掌握iOS自动布局锚点/index.html","1058a5a3616b1ed1ffd8dbfd1c75b20a"],["/Swift支持旋转的自适应单元格/index.html","4d3599d786e70b0c842d4d6e04921f12"],["/Swift枚举值/index.html","e13f20b3a2713aec1a65e749deee142a"],["/Swift生成器模式/index.html","c5c601f5630b6320435b3e112e44e4ef"],["/Swift结合Xib文件自定义UIView/index.html","ae7c09e05daa80e7b34bd2e44e9910d7"],["/Swift编写的20个iOS库(一)/index.html","a4b6d2c2c28c52cb1874063d6e3789cb"],["/Swift迭代器设计模式/index.html","a792908f5fe009d86ee75114da23a6e7"],["/Swift适配器设计模式/index.html","a18fd7c2ed8423cbbf21408f63488b52"],["/Swift静态工厂设计模式/index.html","ec07f11f5988fdbb98a99f7303cece1f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","72f05702e83b3f7b2741571a19d44a6e"],["/UICollectionView data source and delegates/index.html","16180e91b574860f22f7ae1ca4903284"],["/UIKit初始化模式/index.html","17e4d522a8c7e94a74906d191dbbcb18"],["/Ubuntu18.04替换国内源/index.html","f323bd20144953156df48cf8c58409ee"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","dcf09e6c5051abe0ac25ad1f96cd554f"],["/Xcode扩展/index.html","f5774cdbd6c09040482d2aa72426bc9c"],["/about/index.html","18e62a51069e0bb83ea5d25becb74c3b"],["/appleOS的Networking示例/index.html","0a51e21f3456bd4bb6742b05748eca95"],["/archives/2020/04/index.html","66d432604f7ade11998c51253b7bd1a7"],["/archives/2020/04/page/2/index.html","64fac06afe977551103a3fe55e4fe110"],["/archives/2020/04/page/3/index.html","952ceef516f40983cd0d41a755f685ba"],["/archives/2020/04/page/4/index.html","179af578643db5caf14772ea9d574074"],["/archives/2020/04/page/5/index.html","bc9a076c5b8c2d395400e5809312b130"],["/archives/2020/04/page/6/index.html","4a0a8a08f45254145d03410d321dc9bc"],["/archives/2020/04/page/7/index.html","984177945b9c055744c59eac89783c63"],["/archives/2020/04/page/8/index.html","6283d0b5e5902f53798a4c3fd93a0bfb"],["/archives/2020/05/index.html","1ebec8a6af9dcd7aa34db775120c2b8c"],["/archives/2020/index.html","2bb4e630a808d43cd1322d4734c6c127"],["/archives/2020/page/2/index.html","e08d2703a465a2c2de74321468530c50"],["/archives/2020/page/3/index.html","b8ab706f7414c9e87ba8191c496dffb3"],["/archives/2020/page/4/index.html","87a3495f90a8162d55bd726229dcdf1b"],["/archives/2020/page/5/index.html","dee9e25730981e553e94e87c98e009cc"],["/archives/2020/page/6/index.html","5d4485a83058d667db5208b8b586a7ba"],["/archives/2020/page/7/index.html","80296998d1028e75cf0f1bbdfb6019ac"],["/archives/2020/page/8/index.html","5dc3ef707a1436b90668bc05bb00b316"],["/archives/index.html","c55bc0e2fc750badc78e216e916995f7"],["/archives/page/2/index.html","7447c682a45773b2354520d1bf391530"],["/archives/page/3/index.html","fb10c6cefd7d4522f0b0e4e5c8c5ab1a"],["/archives/page/4/index.html","4f56aff39091fab8f326c210b74d8f0c"],["/archives/page/5/index.html","fc01d86a224ed1947236e71d0d750895"],["/archives/page/6/index.html","68c044c0a1aac64fd43c0c2fb1e56f03"],["/archives/page/7/index.html","bf30244baaeb34a349db3d76702084f9"],["/archives/page/8/index.html","978b70dcf5580d36c23a4fe8bd10060b"],["/categories/Codable-protocol/index.html","4328866445f4e1355f150b11e3095e56"],["/categories/Combine-framework/index.html","c218eb763e3bdb9aa98edf0c20087944"],["/categories/Grand-Central-Dispatch/index.html","c58df70cd89de5d2c0fac136fb3766f9"],["/categories/Hexo/index.html","ad15c4844719d2ede6f2918781e1b188"],["/categories/Promises/index.html","1be1ea1677c0138ebb8fa5f74b2d8321"],["/categories/Result-Type/index.html","9d149deee8a596bf07a706f160fcfead"],["/categories/Server/index.html","fdafb2461c4c0d2b112d7757f20d942f"],["/categories/Swift/index.html","552b18f161922a98218f617c9ce7d1e5"],["/categories/Swift/page/2/index.html","567a06ce81d500ed96e10b8a5a04fd1d"],["/categories/Swift/page/3/index.html","71e49d6db015ed62f29b4dad08038900"],["/categories/Swift/page/4/index.html","0fd44a25a937d860c2b7967473648cc5"],["/categories/Swift/page/5/index.html","2ae8cc24f82cd68e247ee09fe2fbae6c"],["/categories/Swift/page/6/index.html","7142d258962c3b29b9d721daab2af540"],["/categories/Swift/page/7/index.html","3b0fac04fc4bdb0c6b73e8bb494b1f9b"],["/categories/Swift/page/8/index.html","58b845018905bcaf8831805ce98d0def"],["/categories/Swift5-2/index.html","2191599d5c93544eaf332bc89c952e1c"],["/categories/SwiftUI/index.html","ae15c0b2c54340e3cd9ab00151c2d727"],["/categories/UICollectionView/index.html","d3e0120476721215beebed1d06bc3d83"],["/categories/UIImagePickerController/index.html","46724842a883c50588361d8a5fd4fc95"],["/categories/UIKit/index.html","11aa59e47ce62d26d0d5f484cd0c2b2f"],["/categories/UIKit/page/2/index.html","8a409ce3327cbd3c324f38ae092340fd"],["/categories/UIKit/page/3/index.html","bf356cadb6a21945a4576b0a5b6b5d60"],["/categories/UIKit/page/4/index.html","1d6bf6a6de21812de7caf5ca497954b6"],["/categories/UIKit/page/5/index.html","508258e2bf1402d7726e0a03797a08c3"],["/categories/UITableView/index.html","24b272ef4d8178df938470a82d97b153"],["/categories/Ubuntu18-04/index.html","8ea26c45391373609c986bc119fa934e"],["/categories/Ubuntu软件源/index.html","c0307f2e038c808b0810f9a653a397d4"],["/categories/Uniquely-identifying-views/index.html","980a1102f3de1b1de8a3404a0970a86b"],["/categories/VIPER/index.html","a6845dbbac5b36968ff1c90f4b18fea9"],["/categories/Vapor4-0/index.html","47edc738f6b96efde5f8d388a1ca7fac"],["/categories/Xcode/index.html","f36b1460643b153fb57ae7d9d7d27a82"],["/categories/appleOS-Networking/index.html","391c53b15266308a7cbc5863afc808be"],["/categories/enum/index.html","dfc32093968c826829274c8a16195645"],["/categories/iCloud/index.html","ec64fbe94aa327b74a19f5fb42218e78"],["/categories/iOS/index.html","e21ae7c62a0acf73bc451633be26a43d"],["/categories/iOS/page/2/index.html","28f1cade331919e5b2f90a7dbedfbe63"],["/categories/iOS/page/3/index.html","4eccc54575c9d3611426ce2db1b4f980"],["/categories/iOS/page/4/index.html","95b75975cd96ec86b39c1c8719b3d783"],["/categories/iOS/page/5/index.html","882b9246241cae92da24ed717be176b7"],["/categories/iOS/page/6/index.html","ad4d07182989643b87ed2751b0595fef"],["/categories/iOS/page/7/index.html","e6a7ce15de2e8745c4e1ee337e444669"],["/categories/iOS/page/8/index.html","3cce5db240e89bdfb7f4aadb9b0238ba"],["/categories/index.html","fc92897d1092f5128db19ac81452fbd8"],["/categories/random/index.html","a7edeb8a8e199e217100c2cf33690ab5"],["/categories/三方类库/index.html","837a67f1bb9c59b954c1100f2c5c0c3d"],["/categories/函数式编程/index.html","c177e265725e2363024208ea3ecb3cbb"],["/categories/子类化样式/index.html","1d456180967de5a68d3719dacc1b0367"],["/categories/架构设计/index.html","0abb2ef7842802cfe437eaad3cd9c551"],["/categories/用户体验/index.html","3d315b29c6b508bc4171cea5fa3bfbde"],["/categories/设计模式/index.html","7e96fb8a8a973be8c72c3d05f43f9bdd"],["/categories/设计模式/page/2/index.html","c559c92d17dcd991d2b67ffdc0ee3010"],["/categories/设计模式/page/3/index.html","f1cf7519922470328254db4716a7ebd8"],["/css/main.css","7513c4d186ccae2361099f70ab241eb7"],["/hello-world/index.html","1de8ecb89e8f0910a3f40dc7cea4c2c8"],["/iOS VIPER架构深入实践/index.html","180f77004b0cac88238947f197ce0532"],["/iOS 自定义视图，输入表单和错误提示/index.html","c78a51e928fca8512c3c05a62c26a722"],["/iOS如何使用iCloud文档？/index.html","01e1cba08047ab041c547384812cf83d"],["/iOS子类化样式/index.html","c59f82e13cbc647bf93869d679abaa87"],["/iOS自动化布局编程/index.html","052b9102ee111c4e840612ebb6d4ae08"],["/iOS自定义转场(By Swift)/index.html","d300a77cccdae6edd2f5fc808d3872c2"],["/iOS项目架构：使用VIPER/index.html","a746c71660696375705e2ff686ca2228"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b8d93a39ccdf12af69bd9f414493bd20"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","71902702d66c5e803a16708297a8bef7"],["/page/3/index.html","5417886c57c8cd5dffb6b99031feca33"],["/page/4/index.html","b968815e300c704e4b47d3d83f2fa449"],["/page/5/index.html","ea3db171976c9baabff1d9bb46b8a9a7"],["/page/6/index.html","f9cdb3a6b4cae1daffddbdcc264ffe1c"],["/page/7/index.html","e0c20d04fa1ba3d7ab5a093d77687b06"],["/page/8/index.html","c53aa12c5fbca40f8374725b0f2515e4"],["/schedule/index.html","2a6d20230f6a43f5bbab805a572c5c92"],["/sw-register.js","66b8a6bf0bffd95b039c15b9a782c1ce"],["/tags/Codable-protocol/index.html","1470394a09e349e33026323757b5a7d9"],["/tags/Collection/index.html","a673ff35641139d548d26ec456422274"],["/tags/Collections/index.html","9593d0afe989f05d6ae6cbc83bd7900c"],["/tags/Combine-framework/index.html","6f8119ddf118de81ef5f6aa25c11cf68"],["/tags/Dependency-Injection/index.html","1c54479826f8334161db238b5460f7c8"],["/tags/Grand-Central-Dispatch/index.html","3c2362b4b3592753cdbebdfab8c2bdd0"],["/tags/Modules-And-Hooks/index.html","4c8d23ca034fd4c4280aee0b67714801"],["/tags/Promises/index.html","d3e9cccff8871351a06e62cbeb1be086"],["/tags/Result-Type/index.html","8875bda1aac97fc86c51a74826d18a81"],["/tags/Server/index.html","4a1bf5ecc2a5d0cb25cdf1eebf92d39e"],["/tags/Swift-Package-Manager/index.html","2ab8cf82102c68fe1f76ffab00682d63"],["/tags/Swift/index.html","8abe62bacb8afdb7d6dbf0de75c2e1b7"],["/tags/Swift/page/2/index.html","2f81b96342e115df543e213e39e3a43e"],["/tags/Swift/page/3/index.html","3348300d33a374bc1be6536efac928bb"],["/tags/Swift/page/4/index.html","74c208c9616b94305a12669aac943e04"],["/tags/Swift/page/5/index.html","e3bbb322ccf25cb94708171210c24adb"],["/tags/Swift/page/6/index.html","09f5882f7b5d74648246cce7e4dafe20"],["/tags/Swift/page/7/index.html","bed9ea3ad27ef7d26ef4ba16716068ac"],["/tags/Swift/page/8/index.html","18f5ac033715c7f3fdc214179e070817"],["/tags/SwiftUI/index.html","af6d78dc399d06257d11db9a9143714e"],["/tags/UICollectionView/index.html","34882bd5fd9601b8f749ed91f99e8ca6"],["/tags/UIColor/index.html","df6418169c12764ca671cc5db95fecee"],["/tags/UIImagePickerController/index.html","146b79732c7a4aea04aa8a6e830de7b1"],["/tags/UIKit/index.html","6da6f7fdd83ec1ba899ce4e7a2c915be"],["/tags/UIKit/page/2/index.html","09e766f7c6543010f7d0a477f68fd5ab"],["/tags/UIKit/page/3/index.html","e37121d178f872b62ad18a4710008249"],["/tags/UIKit/page/4/index.html","a6be3a36e52fdf91cdb47c136fba186d"],["/tags/UIKit/page/5/index.html","fdf033aa165f2e94b6e2ef207ced5559"],["/tags/UITableView/index.html","f7771f03b5c9a92340138a9f96213ea4"],["/tags/Ubuntu/index.html","b3ba2e863e7769ed343f0654adda8c1e"],["/tags/Uniquely-identifying-views/index.html","5aba68dfc7cbc3da937213d3c903c3c5"],["/tags/VIPER/index.html","6cb2f18ee260877b6885f839bf09c39f"],["/tags/VMware/index.html","481989004f3145f368d6c5779ea1b437"],["/tags/Xcode/index.html","bbd327627f6d7292c10eb429ab59dbe6"],["/tags/appleOS-Networking/index.html","dd392e43ffeb1f5b419d00b51266a875"],["/tags/enum/index.html","c67e5f0afe2e732fa416920d858a5abf"],["/tags/iCloud/index.html","f7f136ebcfdc4e934fc3abc624475e00"],["/tags/iOS/index.html","56de7fd84ecc5a2f1ec5f32b39a9a4b0"],["/tags/iOS/page/2/index.html","38b77cc64cab4a53ac28744936114fec"],["/tags/iOS/page/3/index.html","c5b4d4ee97467b0fda5ece79150214d4"],["/tags/iOS/page/4/index.html","b8020cfb1c890e0a7d8fc2890a5a08d3"],["/tags/iOS/page/5/index.html","d7eecf8679866738542d644f370d6574"],["/tags/iOS/page/6/index.html","e8ab1246577253b702c0008aea3048f7"],["/tags/iOS/page/7/index.html","b738791c4afb22860839537871f0687a"],["/tags/iOS/page/8/index.html","53c3270a97cab783cc81e123df23eee8"],["/tags/index.html","6588a7f6b16dde3f731602c7b452c44f"],["/tags/non-optional/index.html","56a578f92712e56addbfc2e602affecf"],["/tags/optionals/index.html","d0909b4e52d06768f6f720423d0841e1"],["/tags/random/index.html","8f3cf38ef32fd5e748731ee970dc1330"],["/tags/transition/index.html","6df5397a1ec90335cf202a7c6b846a4c"],["/tags/三方类库/index.html","7b11ac9f7c74b41144e754d463621506"],["/tags/依赖注入设计模式/index.html","a6d8f145fe8fcabd6b669f2d0712d98a"],["/tags/函数式编程/index.html","fe94ca88bd14e937849fc7d9239d5e44"],["/tags/初始化模式/index.html","61e1899d34c8df3fd9aa5edad7bbb98a"],["/tags/单例模式/index.html","5280cb1267496cb9122b5eb24b97ed33"],["/tags/原型设计模式/index.html","71c110e80fa205cd78e374aaff2209ec"],["/tags/命令设计模式/index.html","5f3d2c0d418a7cb8efcae400adad209b"],["/tags/外观设计模式/index.html","5906d02561ea624142f5752273ff2fcf"],["/tags/委托设计模式/index.html","c38e7a07d72a728e846b75897b9711c6"],["/tags/子类化样式/index.html","66ed16791e2e240ab512b3f301db6061"],["/tags/对象池设计模式/index.html","4348e425b770d49709b1aa889ec8014c"],["/tags/工厂方法设计模式/index.html","82a61d96eab87b1e371dca9aad3e5791"],["/tags/工厂模式/index.html","fdb1c82de3571faacab08f327ec53bca"],["/tags/工厂设计模式/index.html","5c27d98cfbbc03c9a91862ff7dc39be6"],["/tags/懒加载模式/index.html","3c0384d2cd780ae7f70349de1a1e42a5"],["/tags/抽象工厂设计模式/index.html","ca33a3e65ce104552ae182e2a0f337d2"],["/tags/构造函数/index.html","f3e5b12e52d52fa05a8382bd5084e537"],["/tags/架构设计/index.html","3d0675a3ce1891db8b917104022d0ce6"],["/tags/生成器模式/index.html","f4cd95c15613848cb55a6360d346c2b3"],["/tags/用户体验/index.html","d36838003141474305c85968e22bcbf7"],["/tags/自动化布局/index.html","660b7d1a8db56bdf7b8f00afa17e7995"],["/tags/自定义UIView/index.html","2e05bee60e564ed007350b46711b7f2b"],["/tags/自定义转场/index.html","43c1b20b32a099fe9cfbbb6c451a85aa"],["/tags/自适应布局/index.html","c33842682902f065861c8e8d9fe470fb"],["/tags/设计模式/index.html","976c240ea56b16c68bb0658ae0d134a3"],["/tags/设计模式/page/2/index.html","cab9fc596fb2fbd86b9bbf2a8813cf01"],["/tags/设计模式/page/3/index.html","9afbde20b9a9f780d0d585e94bcefa08"],["/tags/迭代器设计模式/index.html","5b4c1b5d8922b8287fc0094e22d63364"],["/tags/适配器设计模式/index.html","3f1b761b5a6d22328cf8da0bd4732074"],["/tags/静态工厂方法/index.html","e4691829cffc8029bfe5bda37fcb8d15"],["/为iOS应用构建输入表单/index.html","05ac3f0ae205044c4e2443074fce727e"],["/产品开发的幕后花絮/index.html","631bc98efe8110006216866f351a1d68"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","311547cf0e7e466e11c165502eedea0c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","695e8ee85f0dbccbf51cdba576f7c1f0"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ae90f1e61bb02acdcbaa93ca6cdaf674"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","23604e258fc2e78f6b404f1f3e674fb4"],["/在Swift中创建自定义集合/index.html","dbb4e4cc933b43895eace047381b4bbd"],["/在Swift中处理非可选选项/index.html","110a04c51bf3153907edccf7528c9978"],["/在Swift中生成随机数/index.html","aa126c3057bb55c210b7195a26fedc5d"],["/在Swift中重构单例模式用法/index.html","5528bb94509d7a85d235bb1377a94e99"],["/如何为VIPER编写服务？/index.html","345e6d897b87b02f1638451fb3779106"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ab7be8474d75c91d93c543ee0ed20790"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2e3e32ce8806cad2344f4e8c4df90285"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b84f4fc387f7de13566fb7d52b80bdac"],["/掌握VIPER架构/index.html","f250704d337259d716f3db16d5ca52fc"],["/揭秘 WordPress Hook 系统/index.html","9e3362867499064af9996599a0ee792c"],["/比较工厂设计模式/index.html","5c743bfbb300f278125f120121cd2e1f"],["/深入了解Swift中的Grand Central Dispatch/index.html","943b6dc115e94e76ae25f54a20e233a7"],["/深入研究Swift框架/index.html","7a88b416ef9c041633a4bd0930c03117"],["/适用于iOS开发人员的VIPER最佳实践/index.html","f51ccd91e880411b719db219f9c82cea"],["/选择Swift而不是Objective-C的5个理由/index.html","4271a788c6a5e2c34a2403f2b3336a24"]];
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
