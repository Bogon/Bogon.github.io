/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","4d1d3d9f8c641c384c65412a437caefa"],["/Swift Lazy属性初始化/index.html","a541208834dbfcf20db5166a39750746"],["/Swift UICollectionView使用指南/index.html","fb7051c6f5108a6ff9bc8ecabdbfebb6"],["/Swift中快速简单的工厂设计模式/index.html","4361705ccdbdea3bd137b11438f72edc"],["/Swift中构造函数与静态工厂方法的比较/index.html","0f439493ffead2442ccd2ec198086f71"],["/Swift中的懒加载模式/index.html","4e07c259f81dc605b1ba002af8a5d756"],["/Swift中的模块和挂钩/index.html","598a9dba5c3d5be8b8c23ae9e0cc6aa5"],["/Swift使用布局锚点添加约束/index.html","06b5be35251f84b52cbb623897c0624e"],["/Swift依赖注入设计模式/index.html","c9a54a14634ddc1e7918697b51fc8bab"],["/Swift关于Dependency Injection (DI)/index.html","5f794e20f0b1f80b827b09c9f425b3bd"],["/Swift初始化模式/index.html","a79612179f45a2283e3dc57fd3916fcf"],["/Swift单例模式/index.html","a2dcf2a470a4fab80f20b562efa3d107"],["/Swift原型设计模式/index.html","369e35d7f1c5d90ca1d4dd627d051bbe"],["/Swift命令设计模式/index.html","27109ea7d79be5f78e179c7cc1b4d4b7"],["/Swift外观设计模式/index.html","8e6ea35340ea36451916eee242d6a7f3"],["/Swift委托设计模式/index.html","b8efc0eba806e694c963409ac81d953e"],["/Swift对象池设计模式/index.html","d8734f2fe7c608857116f52332595b54"],["/Swift工厂方法设计模式/index.html","82e774fcd1929deba700416b2a9ec36e"],["/Swift带闭包的懒惰初始化/index.html","c1f5ab11b3a2db02679ef14090512882"],["/Swift抽象工厂设计模式/index.html","159a5640504f1821ce4a2e69a3bc7ca9"],["/Swift掌握iOS自动布局锚点/index.html","ae3fe94a5d64805411f04fb396723567"],["/Swift支持旋转的自适应单元格/index.html","c56f8d26d084912604ce598b7216ed99"],["/Swift生成器模式/index.html","eeb2482e7e20e263b36ef4bbb1a672b7"],["/Swift迭代器设计模式/index.html","23f012764303ab903b46e14e89a7f0ee"],["/Swift适配器设计模式/index.html","5b241cd072a461f841f63f6cde76ff0c"],["/Swift静态工厂设计模式/index.html","66303d5ea216111d8be5d7ec72fa984a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","76144cc42b0f116a73dd3ed0c81eb078"],["/UIKit初始化模式/index.html","5ff0bb60816b5ea981b699d109812cec"],["/Ubuntu18.04替换国内源/index.html","32452234eea70e4804e301e39eeebe36"],["/about/index.html","c8320661ad9c5f3368cf6b215d96e73c"],["/archives/2020/04/index.html","94b8654c809981113040863804c67c9e"],["/archives/2020/04/page/2/index.html","8ceb24a2b01d130fcde4b02374596fb1"],["/archives/2020/04/page/3/index.html","236ae1e6d689faf477b849043df611ea"],["/archives/2020/04/page/4/index.html","855ed53a0ff918329195c5c1116bf12d"],["/archives/2020/04/page/5/index.html","08c7f03f02dda9dabac5148fc658cf90"],["/archives/2020/index.html","f4b74b1808ee6762440283d95724478f"],["/archives/2020/page/2/index.html","83cde6a3ab8f9a147f91533db591bd35"],["/archives/2020/page/3/index.html","a656f1487658ee1705a4eba455510ada"],["/archives/2020/page/4/index.html","1b99d3b603f5fa2bd328a7df4586924a"],["/archives/2020/page/5/index.html","50daf384eb81e545a0d5b3705b3be15e"],["/archives/index.html","ff92a9f194e80c7f01e144ccb769c4da"],["/archives/page/2/index.html","6f8c5e321f98c626bc58e7f9741af245"],["/archives/page/3/index.html","e95011d23ee87787f30ae87f0f097e9e"],["/archives/page/4/index.html","8f76ad96110ee3c271bb6f0432defd7a"],["/archives/page/5/index.html","81d55ca761531dd9b4769ee48e06ea2d"],["/categories/Hexo/index.html","2dc390314a20d537737081b07d2a57ca"],["/categories/Server/index.html","d6576315a2e6a918be71b973b968e031"],["/categories/Swift/index.html","3f611c8236b21433d05ebe3695893385"],["/categories/Swift/page/2/index.html","e060977c02684ea2efe89e4c9275c82b"],["/categories/Swift/page/3/index.html","1e79fe563c38e2747093731f67bbc44b"],["/categories/Swift/page/4/index.html","badd216f9f4f88afe4b1f5d9a864efd7"],["/categories/Swift5-2/index.html","c1f40146c85a4cece011697c29c56bec"],["/categories/UIKit/index.html","a942f05969b47d4ce50ba1e8d9ce6158"],["/categories/UIKit/page/2/index.html","95899272d723b2941c6e2216e94401b0"],["/categories/UIKit/page/3/index.html","0d62e767588afbfa19353d87393cdd45"],["/categories/UIKit/page/4/index.html","f8dd01a2b7f414f330c49129ef5931ef"],["/categories/Ubuntu18-04/index.html","8913be29fcaaee4e570d00dac5b7ca48"],["/categories/Ubuntu软件源/index.html","37fec1b1d15cf3c3583415825e6b8553"],["/categories/Vapor4-0/index.html","8dac2388b6b3de11b6b9622b852a84b6"],["/categories/iOS/index.html","3fda67fd0cffda8adbf1bed4533ad755"],["/categories/iOS/page/2/index.html","a9c6a4e2afab3a6f66316316b3e3f891"],["/categories/iOS/page/3/index.html","5e7f37a12b3bf425c602179303446c4a"],["/categories/iOS/page/4/index.html","201131dd94ad18ad677f0c55c48ad2c0"],["/categories/index.html","580b949a11e407f91767602302a83bfc"],["/categories/用户体验/index.html","bc4a6e33ecbecb719fcd9e3075a975ad"],["/categories/设计模式/index.html","28f53655e6ef1fafea43dd66be1792a6"],["/categories/设计模式/page/2/index.html","e82123cbc0c59acafcdac2bc426eece0"],["/categories/设计模式/page/3/index.html","2cee9746dc99baabf404470809cad7a7"],["/css/main.css","c3e7d7ad434cafb8c79bfd88f6d47957"],["/hello-world/index.html","d74ce99b2e2c58c0d9d93d6ec3302920"],["/iOS自动化布局编程/index.html","14405cd17c3ee188204c061cf229d4e5"],["/iOS自定义转场(By Swift)/index.html","b8c3db7238188ac3f083f0e9809ea090"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","cb8006d2402983cfaa877e54a3507043"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3d098d060fb65b92e2d5d5224c2ca3a8"],["/page/3/index.html","60da5e8b37735948cacfda819a2a4d7a"],["/page/4/index.html","416be83cc16328402fee95912bbce241"],["/page/5/index.html","88994089cf7ae0a83dd7aa253d4c3997"],["/schedule/index.html","8d666b7dcc07cf50db6dc8616c37dd85"],["/sw-register.js","71ee10e9252856b228fe44e9f423dec1"],["/tags/Collection/index.html","e1d916cd139ee9d42c53b78494d5459b"],["/tags/Collections/index.html","3aca7833d9193f53ebbcb39f43a30af4"],["/tags/Dependency-Injection/index.html","304a66a920c5217b64b3ded67bfb4b2f"],["/tags/Modules-And-Hooks/index.html","a4cf5ddae460751d9941de627bf7b80d"],["/tags/Server/index.html","ef383c4af44b16ca44288df44a456c22"],["/tags/Swift/index.html","5c39089b6b5ff2c5202989af3c52703c"],["/tags/Swift/page/2/index.html","14cd9c0e26e050e8a4047e5b6d54a001"],["/tags/Swift/page/3/index.html","b16d7cfa1fca3dc34f4281b777678090"],["/tags/Swift/page/4/index.html","34bdc70c9dc86ac7c756fbbf0ce158f5"],["/tags/UICollectionView/index.html","9965045d577d60083c6561dfd02c4022"],["/tags/UIKit/index.html","09e3d0c28e7a588d80dac85736f0e0d9"],["/tags/UIKit/page/2/index.html","9f660f284ceaf79e8775166e624b42f0"],["/tags/UIKit/page/3/index.html","5f6b09be34b21240d2b245eee6296b5b"],["/tags/UIKit/page/4/index.html","bab74b16ce8ff12ae0e3bca8b56241e4"],["/tags/UITableView/index.html","721b779041a9fcd73f4a42c7adda9ae2"],["/tags/Ubuntu/index.html","c69161f1e1b0abe7cef6ec7962e24b53"],["/tags/VMware/index.html","febd3c88431cbdacd18ae8840c403c20"],["/tags/iOS/index.html","e36c7f2dc7f259e2c69e24def653eb19"],["/tags/iOS/page/2/index.html","ce60cac874bde9498c8ef4f8668a2bf8"],["/tags/iOS/page/3/index.html","a11c0968fd7e5de7650e94ea6dba14e1"],["/tags/iOS/page/4/index.html","20e2e91e5548a1c17a238f78f7972edb"],["/tags/index.html","6c2ceaddf548beb8724cda31a94fc6e7"],["/tags/non-optional/index.html","29d5d2b41aacf8dd1d444abc6ed175fc"],["/tags/optionals/index.html","fa6ff55a93133a0858fa97abfe631ac4"],["/tags/transition/index.html","65d986047f4124f87438d03b47eef35d"],["/tags/依赖注入设计模式/index.html","0a21d7f7db63e01f94ec48f8fd1f4064"],["/tags/初始化模式/index.html","b66464b4f496e082c56b0368a8ed699b"],["/tags/单例模式/index.html","d6f2979ea855f20ef64fdbfdccfc5886"],["/tags/原型设计模式/index.html","5b7c2298882200b018f6c635ba86f394"],["/tags/命令设计模式/index.html","1c840f3cbae7cdd1884ab6d861815470"],["/tags/外观设计模式/index.html","eca885428599a84f9c57455c0dec6457"],["/tags/委托设计模式/index.html","11ebbd4a112295fc25702d5332b0e48d"],["/tags/对象池设计模式/index.html","76c9b1d087263d3d92e37948840179c3"],["/tags/工厂方法设计模式/index.html","0880c90410a6c74fa8dee1d8dba0b8cd"],["/tags/工厂模式/index.html","b2fd25bbd3b8b2fb6a7c71f4aeb21aaa"],["/tags/工厂设计模式/index.html","d4767cbc64c5ae888b94137735d45f29"],["/tags/懒加载模式/index.html","6804aab92cd655ef02296e1126cb6d0f"],["/tags/抽象工厂设计模式/index.html","bec602789e66ae347ac9ec844a0b5a57"],["/tags/构造函数/index.html","1185a73587be76e2ef86a2343645411f"],["/tags/生成器模式/index.html","42877e850f11f7a91d402651f3dbc6e4"],["/tags/用户体验/index.html","877b2bc8a3194c3553bdc4dc2bbd4de5"],["/tags/自动化布局/index.html","c229f686d94e62c61c4d6f92b5558f41"],["/tags/自定义转场/index.html","9d19ecfd398b64ace2cf8fcce9143fb4"],["/tags/自适应布局/index.html","10c8669de5abf9bb1114739aa0d1128d"],["/tags/设计模式/index.html","ba3d3073cddf44eb14212f58c0560222"],["/tags/设计模式/page/2/index.html","0d611fe7fdd373adaccfc56d268dfa66"],["/tags/设计模式/page/3/index.html","a8443861a36a84aa336906e2e953c50b"],["/tags/迭代器设计模式/index.html","0fe1481adcf40204ee4417fc4507380b"],["/tags/适配器设计模式/index.html","c4db2276c96ed70f1242db05e99b95a6"],["/tags/静态工厂方法/index.html","0eb1d66d10ad16a3befcfff9921b5622"],["/产品开发的幕后花絮/index.html","c0347ecc3d913098984600ccb84035b2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","3a6fdfd1611635536aeb29cdc7529796"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","421de299f241b736c06b9d1cbedd0b58"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","e224bd663d7c8adbabb018c4f4e805f5"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a8d1feb4570bfafc1f4b5ace49b16a5a"],["/在Swift中创建自定义集合/index.html","d54d8af1f946e91cda78d9fb71c3c001"],["/在Swift中处理非可选选项/index.html","b086a983be9a8278e7f80aa75f17adbb"],["/在Swift中重构单例模式用法/index.html","671c0e8dd2c29880438145551ed1912d"],["/揭秘 WordPress Hook 系统/index.html","56551e2b1a86635ce0f67c120b7f172f"],["/比较工厂设计模式/index.html","7e2ee5a3fe57335ddabdce45d175adc3"]];
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
