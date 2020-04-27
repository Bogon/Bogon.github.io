/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","c99275dc05cfa63178899b3f20e6a2a4"],["/Swift Lazy属性初始化/index.html","cdcc48ac0ec8a64b4bbb1f656eef1743"],["/Swift UICollectionView使用指南/index.html","d064b8fb1b31bdfea6a5542a9fdd020d"],["/Swift中快速简单的工厂设计模式/index.html","771e41fff40f5b22f9bb074f782d5848"],["/Swift中构造函数与静态工厂方法的比较/index.html","66d245acf50e193f283c2720a45e7a36"],["/Swift中的懒加载模式/index.html","2f3a16c7b7a037f9befc9be4420e8588"],["/Swift中的模块和挂钩/index.html","eeb204f6af12ed9acd12e45dcc841378"],["/Swift使用布局锚点添加约束/index.html","494b9386fa9605245bf3ceca43b9764e"],["/Swift依赖注入设计模式/index.html","c2fd4c5aaa92ef9a56acf734d3599a87"],["/Swift关于Dependency Injection (DI)/index.html","9f2cd65fff6e4d887c9c1afd9aa5bdb3"],["/Swift初始化模式/index.html","0cddb98a42fbac2af169b18d366d0b70"],["/Swift单例模式/index.html","9c5fd6eda464ba084d9b7805448607ae"],["/Swift原型设计模式/index.html","5d6a60f1db7a3c42a74318ef5c887301"],["/Swift命令设计模式/index.html","b80155fa03e98d3b4f1f347bd33e4642"],["/Swift外观设计模式/index.html","bf85004dc1fcf95daeb52a2626b4d12b"],["/Swift委托设计模式/index.html","51fe7451ad08a4a11b1b5f9c50ad8283"],["/Swift对象池设计模式/index.html","6979cfabbb9964e3aee68aa58535cebb"],["/Swift工厂方法设计模式/index.html","a1717bd00b0f542293aab520fcdde93e"],["/Swift带闭包的懒惰初始化/index.html","7de2a03ecf89e2350f14ba4d7bf492ba"],["/Swift抽象工厂设计模式/index.html","8a08835666e785fc022af8df9a9a44a0"],["/Swift掌握iOS自动布局锚点/index.html","8c8d78a25237bf7cc5800588ec2ff8a5"],["/Swift支持旋转的自适应单元格/index.html","cecdcb8909770492257d333d675a206d"],["/Swift生成器模式/index.html","2e517d938fd82e292c95b8f49f795552"],["/Swift迭代器设计模式/index.html","812179f4b4b7b3d3f882747128cdd918"],["/Swift适配器设计模式/index.html","e5b66594725b36eb444e5852bf0e0108"],["/Swift静态工厂设计模式/index.html","90d449e74320cdc5411aa5663ee9e3ec"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9a5570949b147914d9d8647dc3019389"],["/UIKit初始化模式/index.html","09deb141d02bcf1c7b3cab6db342485a"],["/Ubuntu18.04替换国内源/index.html","c2714e0241f8de95a93234d66dfd40ea"],["/about/index.html","e50ba857549b1d616e69912ab0fe1ad5"],["/archives/2020/04/index.html","b8c0f6c7a60d526a2cef4cf4201f151d"],["/archives/2020/04/page/2/index.html","730e13b0035c492cdef9f795e07647a5"],["/archives/2020/04/page/3/index.html","3db1601c6381779e8ae69fa4db7422c8"],["/archives/2020/04/page/4/index.html","b79be2ca907aec81040b7d3c78ef5962"],["/archives/2020/04/page/5/index.html","72416dfd1de9a0f076c94d733d942579"],["/archives/2020/index.html","5f395e7ebae3f6b8ce4bc6b346cc3403"],["/archives/2020/page/2/index.html","754e4ad412ee36a09c9310ea878b8b97"],["/archives/2020/page/3/index.html","f44e713567ca63eb58bc0a323908e6a1"],["/archives/2020/page/4/index.html","8dc6809cc7dbc57d0816b29de830692e"],["/archives/2020/page/5/index.html","e132dab900bd1921df89198597cafd6b"],["/archives/index.html","c378588f7dfd1f4595d449dc7e297877"],["/archives/page/2/index.html","7a8dad73f6decf51c7005b70015195f8"],["/archives/page/3/index.html","15c55b3c2ef515cabcf759d9fab47ffa"],["/archives/page/4/index.html","d90cc4fb95ea06f0f159207660df8653"],["/archives/page/5/index.html","7d47057cfad35e146b9d9a1b92449abe"],["/categories/Hexo/index.html","66eaae60ef123acc1e00206ae8866110"],["/categories/Server/index.html","8dcb8a2272b1d9e42eac6f7d0c8f16eb"],["/categories/Swift/index.html","ea5dfd0c9bb1b43465e2f6bb8508f144"],["/categories/Swift/page/2/index.html","d45d77ef63cb23f8ecbb67d3181d17ae"],["/categories/Swift/page/3/index.html","2635638cbf2124dd1fdef3dcdcdf4819"],["/categories/Swift/page/4/index.html","7702e8cd3b850223ba3d134a82f80664"],["/categories/Swift5-2/index.html","ad253ccac4e12abb962a2adc0bf6a5d6"],["/categories/UIKit/index.html","8f94421171c684e959c3ed5f321956a2"],["/categories/UIKit/page/2/index.html","a7f97344c18cfcbb81423bcf4c9a1997"],["/categories/UIKit/page/3/index.html","cd9b2619c60cdbcc9a9bae4a80ba7453"],["/categories/UIKit/page/4/index.html","c5866aca3ecc61986f572d879a96d3a7"],["/categories/Ubuntu18-04/index.html","d19aa164f1a94e0e7d61ff2fa1c1d6e5"],["/categories/Ubuntu软件源/index.html","fad102a15e5ab946ea2e6bc52725aa98"],["/categories/Vapor4-0/index.html","69ec44ee50f30f1fe5b2fa966c98344c"],["/categories/iOS/index.html","5279141470fbf245eee22d128911a690"],["/categories/iOS/page/2/index.html","eda9a80abb0e55e8ccdd79ee848f1757"],["/categories/iOS/page/3/index.html","27cae8e72edb2c38576177bbd8707eaa"],["/categories/iOS/page/4/index.html","c0dc6cfd0953919c05999eda0fd07115"],["/categories/index.html","de9ad6b4c5024036478b675c6a931ed0"],["/categories/用户体验/index.html","86189100e35fbdec6437ef6999f48c27"],["/categories/设计模式/index.html","025703c06cf50e8478dd335973069f0b"],["/categories/设计模式/page/2/index.html","9b4a7a00fcf1f8b52e1c991435aa8476"],["/categories/设计模式/page/3/index.html","f09358515275f10fadcd11b47e673d20"],["/css/main.css","25500d23a922e960323e26ef6750bceb"],["/hello-world/index.html","ff42af675ef0bdf383764e8d9acd38a6"],["/iOS自动化布局编程/index.html","a0cf38f10030c20c68596cf8e75bbd9a"],["/iOS自定义转场(By Swift)/index.html","d3c23bb68405edbf6694371de5ccb4ef"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d4ace637943ca75322ed4651e55a3597"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6ef38addb7e2e7fedba7b45a050c68c8"],["/page/3/index.html","9fd6df90f0599b56f1db0c64158845e9"],["/page/4/index.html","e10f0660e8719a9b727a0261cd99ef77"],["/page/5/index.html","4bcb7d333ac984ed36d85f6281f9e1b6"],["/schedule/index.html","bf4c87a5e412a76b4d6d244047eb9967"],["/sw-register.js","07cba62310b6b2003ff7199bd775ee8b"],["/tags/Collection/index.html","5cb6357f00f80e5b74fe275f5880e48d"],["/tags/Collections/index.html","6ea4f18aacb6d1d91b96b9ff71c34e62"],["/tags/Dependency-Injection/index.html","c7993b10d22053218f853c0732c57e24"],["/tags/Modules-And-Hooks/index.html","fb22775a75d7d89b5c06376f5c9ae203"],["/tags/Server/index.html","d4b5bb13b05f5be090554cc5b5cbc474"],["/tags/Swift/index.html","ed5f5bf73e9d7cb6a2bb225216c44550"],["/tags/Swift/page/2/index.html","6a194012e615f47e4c2c1023959db02a"],["/tags/Swift/page/3/index.html","171d7f269fb60fa3fbb1ae219a797fdb"],["/tags/Swift/page/4/index.html","5718ce93e473810cef66b5d421f0d85d"],["/tags/UICollectionView/index.html","2f30e38a4a27bdd146e4b6743970b8f3"],["/tags/UIKit/index.html","9c307cc15872fcf1aca42abcf82c2618"],["/tags/UIKit/page/2/index.html","0f2f8aa3c0e60555f9dc7104daa68873"],["/tags/UIKit/page/3/index.html","9b33163f195fdbdeb759d7f73f661ded"],["/tags/UIKit/page/4/index.html","8b16680e9bbfb3b9506e1b4a20dd5219"],["/tags/UITableView/index.html","4b00b3bbb9e952ef57e91ab4f84e67ba"],["/tags/Ubuntu/index.html","0b4ff13e6f14661384a34de1f553998f"],["/tags/VMware/index.html","7e0db2d6b43e88d40bc023bea48294c2"],["/tags/iOS/index.html","adf8f3629b20007ed948f4b71c8de46c"],["/tags/iOS/page/2/index.html","7dd8b6b5df24901d32a27f4d744ba7bc"],["/tags/iOS/page/3/index.html","64c8636d74c2aa71261130e239c2abce"],["/tags/iOS/page/4/index.html","9bb47e842c2743df93ea801cddced98a"],["/tags/index.html","442a6be5b761d95ccf7382375461631f"],["/tags/non-optional/index.html","0240bdebf34834dc5889de4367bb7d81"],["/tags/optionals/index.html","aae2bc63e7855f9e90342f3e2228e531"],["/tags/transition/index.html","5e6f267e944169ddaa5e4558d931d024"],["/tags/依赖注入设计模式/index.html","94d2836a4e4855974b387170d4202a86"],["/tags/初始化模式/index.html","0e4de9437d4950a9cd5448630f62e976"],["/tags/单例模式/index.html","883e786d6f0629318e407c11d1b7aa2e"],["/tags/原型设计模式/index.html","d5eeaa25ae1bca3ce748684978869601"],["/tags/命令设计模式/index.html","b37092f575d25e497102eea83c15ce7e"],["/tags/外观设计模式/index.html","805e8d136e6183a6b683df3df0a4e34d"],["/tags/委托设计模式/index.html","664b9bca00deac11d7f06c331ebe1113"],["/tags/对象池设计模式/index.html","f53d1fed1240a8fc64f61ed73fca0042"],["/tags/工厂方法设计模式/index.html","34a91abcac60bc7f6eba1bbd97da13dd"],["/tags/工厂模式/index.html","68ffadc47038c8e026e1f0a689d9adc4"],["/tags/工厂设计模式/index.html","50bf5528e4c510298768568bd11e342f"],["/tags/懒加载模式/index.html","84e7144f2c369211ce8ee63f42931681"],["/tags/抽象工厂设计模式/index.html","db82577509edd626dce43175afbda9c1"],["/tags/构造函数/index.html","1487f18c7b1f448a980579d1ed407c03"],["/tags/生成器模式/index.html","9aa0e2512c0c52cc649de337da36c463"],["/tags/用户体验/index.html","46003adb98e14c4f8ec5d4df71c11a2d"],["/tags/自动化布局/index.html","6deb597baa5d0605a10e0f0617635c2b"],["/tags/自定义转场/index.html","9c864316f287f31143f914ba3d2de2e5"],["/tags/自适应布局/index.html","8d5762e86ce387f0c479cd17118819a2"],["/tags/设计模式/index.html","9e9d8214823368a12f86987b56c7904c"],["/tags/设计模式/page/2/index.html","171409ef90c905d35a1a9f46894d5767"],["/tags/设计模式/page/3/index.html","f5ac216118d8fd6c20c9098dfa9f0c1a"],["/tags/迭代器设计模式/index.html","657571500232378d57e28849ae3da7ac"],["/tags/适配器设计模式/index.html","3c6bb0af69e6d3c8f582988205a7f4a8"],["/tags/静态工厂方法/index.html","e787dd4e714969f8323810304715e9fa"],["/产品开发的幕后花絮/index.html","550179c24c6836178e9adfe74067cf31"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","82e4c3fdd106a45ceed24f1f389951aa"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","db68979295a746f298cb09de71eb283f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7320e8431d3e79931a01b96741d0151c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","acb2ad492e5652077c7639c2c3048473"],["/在Swift中创建自定义集合/index.html","0db32f2ed8854718b7c118ea10501f2c"],["/在Swift中处理非可选选项/index.html","c1b2abb90afee0814f899c37a9e597ab"],["/在Swift中重构单例模式用法/index.html","1a0e054fbb6293496da3be6ff8dcc7a3"],["/揭秘 WordPress Hook 系统/index.html","da8a1dcc0fdee05781f808d5b15ce2d0"],["/比较工厂设计模式/index.html","5a509c834d5b78140ea31c826da805c0"]];
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
