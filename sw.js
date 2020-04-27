/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","c9054f4207b2a7bd06fb74a6a72a581d"],["/Swift Lazy属性初始化/index.html","201b5d16b5bd6e12492e04d6651d2fb9"],["/Swift UICollectionView使用指南/index.html","e4ecee74cd36c3a1407455bc3146d65e"],["/Swift中快速简单的工厂设计模式/index.html","e3049a1f70d06be535d8a8e3c33916b6"],["/Swift中构造函数与静态工厂方法的比较/index.html","a9dc3d8b6b23426dfda43d413eac6038"],["/Swift中的懒加载模式/index.html","293ba83a05128c7cd086018f1f634db1"],["/Swift中的模块和挂钩/index.html","b303119ad7e6b807e52afb5001742348"],["/Swift使用布局锚点添加约束/index.html","0fbbac9573bee45721b65f8a6848c145"],["/Swift依赖注入设计模式/index.html","7c86995ff012aa5cca8a0c5a7558f98a"],["/Swift关于Dependency Injection (DI)/index.html","628fba24a54245c826a745f2dd58c9a8"],["/Swift初始化模式/index.html","24f50ec2135ea1363e246580f006df5e"],["/Swift单例模式/index.html","1a9d1809a02e9c433bb062e92e7bbbaf"],["/Swift原型设计模式/index.html","51856e83d7f4286ebd20b585c7d24085"],["/Swift命令设计模式/index.html","783b66b8c589916cb82a83de3f5b5f43"],["/Swift外观设计模式/index.html","dda71c21a8995978e7122d107b71f827"],["/Swift委托设计模式/index.html","40aa3d017443529f1cbf680bf5fe99a9"],["/Swift对象池设计模式/index.html","f75cdc76ad81be0026fbbbc228299d29"],["/Swift工厂方法设计模式/index.html","71496daef7de6edeb5808bf53b1d231f"],["/Swift带闭包的懒惰初始化/index.html","d07dece14fc63d5d2ec4236c47df5601"],["/Swift抽象工厂设计模式/index.html","21e382f7565da0df508b515c7ac7e5d5"],["/Swift掌握iOS自动布局锚点/index.html","705639f0d07947a90ecad8e50f152532"],["/Swift支持旋转的自适应单元格/index.html","054155f6930a682abb4e6e54286a8423"],["/Swift生成器模式/index.html","fd42466abc289545b443bab64685392b"],["/Swift迭代器设计模式/index.html","8ece0c1a90584b46a7064951f05625a7"],["/Swift适配器设计模式/index.html","a7611d0a55e3f3fc3ba87c61fed27e0e"],["/Swift静态工厂设计模式/index.html","26627cdd43582d6c4328cf02565aff05"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e6022f53c581f770fc7e3b64e40494a9"],["/UIKit初始化模式/index.html","b3c5bbb40abb129162d43276d3012f2b"],["/Ubuntu18.04替换国内源/index.html","57c85633a4cace31007b3c3e17d9cca4"],["/about/index.html","b6f6e1188b44358a09cbdd45530627ec"],["/archives/2020/04/index.html","4f948b618c0f8e366880b622c70c2921"],["/archives/2020/04/page/2/index.html","9e8b45b91ad86d495cc2068bee1d9884"],["/archives/2020/04/page/3/index.html","5db8187afc99ae6d2775dee23732950e"],["/archives/2020/04/page/4/index.html","1d6206b5c701084dd708069d527258c3"],["/archives/2020/04/page/5/index.html","94d6584a0b69c07b81b79c1f327e696b"],["/archives/2020/index.html","6ffb4daa8fed39ed4c1442854cf3ebd2"],["/archives/2020/page/2/index.html","4ecac518a1817c0cd942ca08328cf235"],["/archives/2020/page/3/index.html","bc379e619274b7bb8657ad88fa7e27e9"],["/archives/2020/page/4/index.html","ac0b6a53a551c1a1f5bdf06cc63e99f8"],["/archives/2020/page/5/index.html","55ac4fac0d5ac7218402f102ae9fb3a2"],["/archives/index.html","b63df690e68b318cd4536a738a71b794"],["/archives/page/2/index.html","196b32675b635b1ff69af52748ee0ddd"],["/archives/page/3/index.html","604146941c7301ee34e9af31d8a12704"],["/archives/page/4/index.html","eeb47e7a142b179c62f25aef25767479"],["/archives/page/5/index.html","8b5ad60679cd5c53de5235bad71a67a0"],["/categories/Hexo/index.html","a2092373e083a980c6a0c30ac468f4ee"],["/categories/Server/index.html","4b3dd027a9e26b60514f4d49a2e49b05"],["/categories/Swift/index.html","786f7e79f1b29707bfe3b5e65a0753f1"],["/categories/Swift/page/2/index.html","742c5d606eecefec37a4b1d414259cd1"],["/categories/Swift/page/3/index.html","b1ec484df96e45e8deed42254f2e69e4"],["/categories/Swift/page/4/index.html","de5a8c0e31f295cfe2c153b4f48949cd"],["/categories/Swift5-2/index.html","4212250af4a73c6743cd9b9917f2e6e1"],["/categories/UIKit/index.html","0faaf7fdc40053fa5ad5711b75952f06"],["/categories/UIKit/page/2/index.html","de1d6f46909784ff13122251681cb565"],["/categories/UIKit/page/3/index.html","ba908e9cc52637441d1c44222f76ec3c"],["/categories/UIKit/page/4/index.html","208e711b0f0c3ffca85f2e749a6aa5b6"],["/categories/Ubuntu18-04/index.html","90b7389a69be55edfbd99f5c7cd961de"],["/categories/Ubuntu软件源/index.html","60e9fc6d529f5560830aed8a6a19195a"],["/categories/Vapor4-0/index.html","706bef361c8384315f55edd640dabc85"],["/categories/iOS/index.html","55085ce04a64c6cd87cf053f76931208"],["/categories/iOS/page/2/index.html","6ab3ec271b80c1c498df639c985c9b28"],["/categories/iOS/page/3/index.html","f3ac4dbeb81f05ba81901210ba8550fa"],["/categories/iOS/page/4/index.html","0ef345ad476e700f487ad820f63c31fc"],["/categories/index.html","9322445d52f3e74f2fb58894771612f2"],["/categories/用户体验/index.html","986364899b4497dcae0bc581599c7a6a"],["/categories/设计模式/index.html","88f0a623a17e9e6c6aee1b7539669a32"],["/categories/设计模式/page/2/index.html","035f437ee4753eee2d1f401449c4352a"],["/categories/设计模式/page/3/index.html","73eaf33551f9e63964b7255ca2cce625"],["/css/main.css","b4a0c92877988ccb739a2d358a3a5e70"],["/hello-world/index.html","072bcf00e66fb6539d6719aecf4be1de"],["/iOS自动化布局编程/index.html","6dbb3d52e32e77d2cfecc6769d9d0373"],["/iOS自定义转场(By Swift)/index.html","b75263dc42ff55321512bc72bf823972"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","644f4a475a616755fda476596d317ee3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b325c3a3133a7674c887160f16781048"],["/page/3/index.html","ba96de2f2867b1e79f99db6ff49f3067"],["/page/4/index.html","1b0a98922c7f8699343e3df3c9c3d58e"],["/page/5/index.html","527765f04291a73d4776b62b77623d94"],["/schedule/index.html","6fbcb7cd50ae9462ae6bfa3d8776e98c"],["/sw-register.js","ccf9dc2ec52bc9a7bfc29cc1244aa435"],["/tags/Collection/index.html","d1bee39e1cbd1479a1c5723f43b25959"],["/tags/Collections/index.html","8cbd1b40b7216fd2f59de21c3320207f"],["/tags/Dependency-Injection/index.html","3de02689d2743df160f1aef392e1eec5"],["/tags/Modules-And-Hooks/index.html","36c4cc3bcbdca5765319146a43a16e88"],["/tags/Server/index.html","2bf83b6fde1813d038b5eb4e05ea072d"],["/tags/Swift/index.html","6a18acd676d0eae6e466f460fd45c2d1"],["/tags/Swift/page/2/index.html","11e805afcee2fcf9f52f1ebd044ef62a"],["/tags/Swift/page/3/index.html","e186a0821bfe4be405faec195492e1e1"],["/tags/Swift/page/4/index.html","659e7e9ec1c57c3b1fc76e63d16f5ae7"],["/tags/UICollectionView/index.html","cb2b4c4aa10af9c0708027b312345915"],["/tags/UIKit/index.html","27a34f89226d1a8ced092a24172d3760"],["/tags/UIKit/page/2/index.html","67d87215e525e7a0c417a8c273606030"],["/tags/UIKit/page/3/index.html","44835b77311484995353d55c966fb579"],["/tags/UIKit/page/4/index.html","1fd9a947d0e49a76bc0f75dcfc6de199"],["/tags/UITableView/index.html","81082be57e35f5b7c5a1bca5c269efb0"],["/tags/Ubuntu/index.html","6a388738535908b8e3376f52a7b8dfbf"],["/tags/VMware/index.html","9a265143daef02d0e4d996c78de98d6e"],["/tags/iOS/index.html","15924d564aab355b5926cad1239e333c"],["/tags/iOS/page/2/index.html","7700eeaa22154589734a539e17620ae2"],["/tags/iOS/page/3/index.html","91beb9022e8dd77a68ab62d63101c02f"],["/tags/iOS/page/4/index.html","d7ea8df7b699fb580d832fafdef76462"],["/tags/index.html","260a06c1f47286ec3f150cd3c9a21b2f"],["/tags/non-optional/index.html","3489bcbc9ca7692e0b16b0170efa3fc5"],["/tags/optionals/index.html","ffcb7f85aa7006a18d0aa771fa9ce4de"],["/tags/transition/index.html","234d1b064db19451b49ac586192b7a30"],["/tags/依赖注入设计模式/index.html","43d15ed28658f6e9451dd9ad415ebf78"],["/tags/初始化模式/index.html","4bbfed0d2089d39c24ba8533edb8ef32"],["/tags/单例模式/index.html","a9ac6d373555534f98e39f68839fc7fd"],["/tags/原型设计模式/index.html","1597254cc7dde42d129ba5097f65d237"],["/tags/命令设计模式/index.html","4fa181020144ac11fe3e9f99a1322dc7"],["/tags/外观设计模式/index.html","d384f94fc12f5c71213204d400a3ed02"],["/tags/委托设计模式/index.html","269a74b6832be5d8ee5ffd18fe372a2d"],["/tags/对象池设计模式/index.html","2261a25d217edb7960a12e7d67c23d1a"],["/tags/工厂方法设计模式/index.html","c7f4969cd80b3067047b8649512a958b"],["/tags/工厂模式/index.html","55d994f105575182ecbfec21557ea83c"],["/tags/工厂设计模式/index.html","aaad8b5db915d972ac12f4a2d7f93397"],["/tags/懒加载模式/index.html","b303eac89e787edb90415305c6e9ed94"],["/tags/抽象工厂设计模式/index.html","804c52f08105473ffc28feb22dc6776d"],["/tags/构造函数/index.html","d17c56a1f20a9382ac48b5daa8c4adb4"],["/tags/生成器模式/index.html","8107c1374d02a4f8ba9144a180f3c157"],["/tags/用户体验/index.html","f6ee3d148fb01931b2f068a3fbef1867"],["/tags/自动化布局/index.html","6f97f541b587a4cfb9de41cb5bb0ff6c"],["/tags/自定义转场/index.html","3926c64f7eee84fcfcb68a0257030650"],["/tags/自适应布局/index.html","67a92748d55d206abfbb0c3a18c9b487"],["/tags/设计模式/index.html","cbd00b4eaaaf78ea1931a30a50b168b7"],["/tags/设计模式/page/2/index.html","d18fa621ebdd8f3439a0dfd636804273"],["/tags/设计模式/page/3/index.html","0ee4ee9c70af301bcf2ceb003a66eb4f"],["/tags/迭代器设计模式/index.html","9119afb63c7ef7f02b9607e69db3bad1"],["/tags/适配器设计模式/index.html","a7bb0c15ecd80d29cba8de20a1322c2a"],["/tags/静态工厂方法/index.html","0126c2eca353fe1c886d36f98126ffcb"],["/产品开发的幕后花絮/index.html","020864163d5c0b6a63a8b0337a4d81ba"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","93394c6a3e9b7f4d2fc1a7a51477acd6"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9ddf6bbdf2405a7f5842a592ec7fcb17"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ca093268f3b8dd93ba717d7c59b2901e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","cc52eb8b0ca81a213fad216f9ce61d77"],["/在Swift中创建自定义集合/index.html","765362b2014e15d6b4ca6df79fe0060f"],["/在Swift中处理非可选选项/index.html","f5a7cbedd811577d33d7df4bbd19fe31"],["/在Swift中重构单例模式用法/index.html","53b8abe077d56d8bfe28491c455b571a"],["/揭秘 WordPress Hook 系统/index.html","c02a4034ee8e5ddfeadab2f76ccca477"],["/比较工厂设计模式/index.html","24f69e933189e745955d562d08f0385c"]];
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
