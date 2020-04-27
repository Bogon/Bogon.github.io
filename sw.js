/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","e607c211e4d3f9191af127396834b38a"],["/Swift Lazy属性初始化/index.html","798babea818a5da6f95cd96b652acecf"],["/Swift UICollectionView使用指南/index.html","36ce5b6416bdce55af6761dd8727f62c"],["/Swift中快速简单的工厂设计模式/index.html","9cc2faf82c328a0703c78e95088cfb4a"],["/Swift中构造函数与静态工厂方法的比较/index.html","32ba4894fd4b08fe818826a2418901cb"],["/Swift中的懒加载模式/index.html","d5d4a910cd82ba9da48f5a8f4cc09241"],["/Swift中的模块和挂钩/index.html","1f6d641af86caa7e69546491b74dd7f5"],["/Swift使用布局锚点添加约束/index.html","3ac69663e4f85366909ae007f94b8cec"],["/Swift依赖注入设计模式/index.html","8c92b7ce4df22cb7b9e673c05ba68c47"],["/Swift关于Dependency Injection (DI)/index.html","d821bcc8619efdd23beea477dfda44da"],["/Swift初始化模式/index.html","fe09de22494994cbbf72767a80021e50"],["/Swift单例模式/index.html","f2e0a4f676ec588153e374ee8ef56a91"],["/Swift原型设计模式/index.html","196bf264ec4ecb4e7a1c894f7f95d3b2"],["/Swift命令设计模式/index.html","172924cac8d309f0f88d2e477454abd6"],["/Swift外观设计模式/index.html","b7ea9bcc8f1ec12d2288fa1c81bf1424"],["/Swift委托设计模式/index.html","7ba99775be048ceadaa762974e575e08"],["/Swift对象池设计模式/index.html","f3ffd4f1a2482a3812042efc3a61c1a2"],["/Swift工厂方法设计模式/index.html","e52c5bf1044e35dc8d12fa842c5734af"],["/Swift带闭包的懒惰初始化/index.html","96bd233eebfe27562b2840b46cd6a9e1"],["/Swift抽象工厂设计模式/index.html","e4db833b7e1f86e7a54bd10a211970b3"],["/Swift掌握iOS自动布局锚点/index.html","c7c3ed7e469be71e1fa83229420a814b"],["/Swift支持旋转的自适应单元格/index.html","8a8a1c1e9f5333b5109756f1ab6895c6"],["/Swift生成器模式/index.html","e1ce608bcbb23e51ee9b113e7b42260c"],["/Swift迭代器设计模式/index.html","24ddd2c93364951bd312047f828a19e0"],["/Swift适配器设计模式/index.html","fad022c9c87d65081393084686c8ea9c"],["/Swift静态工厂设计模式/index.html","ba5453079d1da99d70c51d0925382751"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3b2ef02de84a07c34fe007579b1f98aa"],["/UIKit初始化模式/index.html","6be89b67e98339623fb16b14141ca36f"],["/Ubuntu18.04替换国内源/index.html","b01c662ec36f3933f59fe775844ee3b1"],["/about/index.html","4f9fe245f2a8ff50c30934b6b84b8293"],["/archives/2020/04/index.html","4f0ca7b6a886c1bf7f73b40864a1926e"],["/archives/2020/04/page/2/index.html","ec537b289d385b2f7703b0ad6de689b5"],["/archives/2020/04/page/3/index.html","3d85a6bd3c80fe3149491dac2e28fb58"],["/archives/2020/04/page/4/index.html","c329730d366299f87e074a6e4b58c067"],["/archives/2020/04/page/5/index.html","c5b8c86d8d925c36d3bd1ed437789d03"],["/archives/2020/index.html","928be5d80cbe565206b80af32c71cc97"],["/archives/2020/page/2/index.html","ff75e4bc9636383ec53e0d3fbd22d2dd"],["/archives/2020/page/3/index.html","2d3455443537396274edeccbc6b9047f"],["/archives/2020/page/4/index.html","add43e6325e4a8b5a47efbe024cc571b"],["/archives/2020/page/5/index.html","81ba2054864e35ead335d94fc29678f1"],["/archives/index.html","1c6d2ced80b58c46899e8ad96d6b0728"],["/archives/page/2/index.html","d24c26505c0d0f680cd23b8a7a7e92fe"],["/archives/page/3/index.html","f0626a87128ddc17cd96bdfcea045262"],["/archives/page/4/index.html","576659237bc6d931c764acb1b8fd37b2"],["/archives/page/5/index.html","2f4ba52fcf8f22a445907c00737f5c70"],["/categories/Hexo/index.html","271327ebe684a73445f30b33c02927e8"],["/categories/Server/index.html","537eae37d0ce995f82e4ae26713351c6"],["/categories/Swift/index.html","0b2f1846e5d0d61d6b422c6e61148366"],["/categories/Swift/page/2/index.html","e9813f9bf3103b57582d32394bbdcb50"],["/categories/Swift/page/3/index.html","4a4b7dc8698fea9f71b17251aa92fa6a"],["/categories/Swift/page/4/index.html","390298a91ecf031cf55ec57d3d8e415e"],["/categories/Swift5-2/index.html","20101b9adc94e93e994962669c11dd0c"],["/categories/UIKit/index.html","ef4f5c89a02eeeb342f8070947f5dd5d"],["/categories/UIKit/page/2/index.html","44531137da75aac56e8de40aa474c011"],["/categories/UIKit/page/3/index.html","1b236453b5e412acebf8b0987ec72b11"],["/categories/UIKit/page/4/index.html","4b1823debb33b92fcf6930d6dd60dc72"],["/categories/Ubuntu18-04/index.html","d2041619afa86dcf8812745510ce6672"],["/categories/Ubuntu软件源/index.html","576c0a1ac313cea6860dcb7106302606"],["/categories/Vapor4-0/index.html","46ab3ae15ff868876c2c24571b42bad1"],["/categories/iOS/index.html","e4475c0836f19fad5d5d27d659c62f19"],["/categories/iOS/page/2/index.html","bc188fad60c00d3643a7cc560e0acdcf"],["/categories/iOS/page/3/index.html","20f30a28e2ca371615cd40514441bfb5"],["/categories/iOS/page/4/index.html","05dd5732dabe2a2245e80cfb1535d984"],["/categories/index.html","5ab9412a674fb16abdcbcdcff2eba9ae"],["/categories/用户体验/index.html","6cb8f90c1320d41d60cc9913ed863f7f"],["/categories/设计模式/index.html","6641782fc50ff2946ee0ee689c19823f"],["/categories/设计模式/page/2/index.html","0b826212eb9881b2063258dd13a87938"],["/categories/设计模式/page/3/index.html","1580bcb1f6e60177a6331f46b0b8eb12"],["/css/main.css","fe30147ad576e50da5788555acb12424"],["/hello-world/index.html","4e8d15219b1a68eb44b311ab4938477a"],["/iOS自动化布局编程/index.html","7859d769b1679de42f6b75d9c76028c6"],["/iOS自定义转场(By Swift)/index.html","deef98fbd86535b4b8e8e13e37e8673b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","df6ebaa8d0b076807b40b4e6fef84008"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","921bd2c05a62afb2a1da15d6c6a4fa4b"],["/page/3/index.html","5c1814f14e5d01e29dbe978abd23c8d3"],["/page/4/index.html","89825fe5201250b02269e42966180e09"],["/page/5/index.html","8d7e63c997ae9443d92b9d44d863c3f9"],["/schedule/index.html","ee1fcc69c096ce69b7c712dc16e02ffa"],["/sw-register.js","462b5d86bf172fd611cd50ef4909eb22"],["/tags/Collection/index.html","077c1139658d8c5422bb57aca26ab276"],["/tags/Collections/index.html","a45a2bfffbdd84b2c320baa4c894ae30"],["/tags/Dependency-Injection/index.html","782ff83909544001211543da6f7a04f4"],["/tags/Modules-And-Hooks/index.html","df4f8d7e86247ed68c9b704dc6d885a3"],["/tags/Server/index.html","a5bdfa5244791374828b8a871db9ed94"],["/tags/Swift/index.html","71ee5d2c1d299b825ef09a045745e57b"],["/tags/Swift/page/2/index.html","71e57a1be9e60a88c4124b7922150211"],["/tags/Swift/page/3/index.html","8b1304e66194c0827098472d51dcf920"],["/tags/Swift/page/4/index.html","bc5ee101cfa6821a57756fab4daefb3f"],["/tags/UICollectionView/index.html","63e61e972226cc0eedcaa53a26587f98"],["/tags/UIKit/index.html","adbf3a4880691bc7ab7121ac07a2da3b"],["/tags/UIKit/page/2/index.html","83af0acfca9bbc52ecff678e748aab79"],["/tags/UIKit/page/3/index.html","4dbf7fbbc665b88780d9db1c0855e535"],["/tags/UIKit/page/4/index.html","44a064e57bb422db4cf88cdc05837704"],["/tags/UITableView/index.html","a03888f3f44acde8b0bcfd3561f823c0"],["/tags/Ubuntu/index.html","1ed40e70242eb130bcbbd7cc956623f8"],["/tags/VMware/index.html","3ecede11411647f3231e5604bb9f66ea"],["/tags/iOS/index.html","abbf24993c8ba1f3454379dfc64dff27"],["/tags/iOS/page/2/index.html","55ad713856920ceddb380e49970779ab"],["/tags/iOS/page/3/index.html","a05b6db1c78f5bd03cf88f983a4ec312"],["/tags/iOS/page/4/index.html","fc3d380a71a27517373ee9ea07fb74ae"],["/tags/index.html","4732ece72e0ca6b1875b62fb6fbcb2bc"],["/tags/non-optional/index.html","41cb438e539df7a3014969591acb02a8"],["/tags/optionals/index.html","cc9d4a5791c6dcdee5a0b724d0b7d9f6"],["/tags/transition/index.html","81bd0c8703c315846a72510c60d701d7"],["/tags/依赖注入设计模式/index.html","7fba788a705d38d3b0f4f58492f70f1e"],["/tags/初始化模式/index.html","80a984478053db6c7f1a1be311ea8ca9"],["/tags/单例模式/index.html","7eda8b2e9e724d6a1a52079b0e12f09c"],["/tags/原型设计模式/index.html","22f84c6aae7fcd9c313fb59f6b4542ce"],["/tags/命令设计模式/index.html","65befbc1f27c2ab3a2c6ccbeb9ba2d84"],["/tags/外观设计模式/index.html","9d38978c9307f106433aa0041d31a694"],["/tags/委托设计模式/index.html","7d5716aa48a490fcfa6680c6eb5308f6"],["/tags/对象池设计模式/index.html","23ff98e4927046da8f19f20cb6498c10"],["/tags/工厂方法设计模式/index.html","1ce23e54f462bcafe51d4d8ba046a6c4"],["/tags/工厂模式/index.html","ad8b6b89c355c983ea541f4b17078599"],["/tags/工厂设计模式/index.html","4a45be5d47ba197152d501f9d9fd1e32"],["/tags/懒加载模式/index.html","d11d130a2b8c43ad7e2f3652bad7a0ea"],["/tags/抽象工厂设计模式/index.html","d0b02b9d0831d5f4931768a9ebcd270b"],["/tags/构造函数/index.html","ccb96a331c9ca04a05ee181ce13cf4e8"],["/tags/生成器模式/index.html","a8fc3cdaba7c98d4e953f93a8e524f4e"],["/tags/用户体验/index.html","ac7059a0cdb880d26c3ee6003aa6bfd1"],["/tags/自动化布局/index.html","ce1598663b7e2bfcd77a80fd3b713d85"],["/tags/自定义转场/index.html","a3db06252e944287b348b47e5c64df7a"],["/tags/自适应布局/index.html","b9cd14d58e531fc9ba5985047a5e1362"],["/tags/设计模式/index.html","9f8f14b99c7b900b98765851d9ac8723"],["/tags/设计模式/page/2/index.html","42eaaabe35a0db077edc3f756efbfafa"],["/tags/设计模式/page/3/index.html","c590771472be97ba562c38c28e18d85c"],["/tags/迭代器设计模式/index.html","0fd54017fbfc8ad54da9df74e638e72e"],["/tags/适配器设计模式/index.html","17d05a6eb8b4f6ecd5c33f5df83a02ca"],["/tags/静态工厂方法/index.html","05eac247dd3485c3cbabdfe9369d1b72"],["/产品开发的幕后花絮/index.html","d55d7cea868c4359540a48dbebc66c9b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","fa1a56ee88b0a6529398a0039d281002"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","c3be6803390c5714b1df0c0b07ec6caa"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","0b034a8ad4db2b018c35c4a16fd3b97b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1529d68426742e2046fe871132ffc301"],["/在Swift中创建自定义集合/index.html","e7d3bca8770657f35a233654092d6d55"],["/在Swift中处理非可选选项/index.html","04df9cca2488da9fee4f1a5626bad319"],["/在Swift中重构单例模式用法/index.html","05bdbbb032a9d88c8ab670e41ac8b297"],["/揭秘 WordPress Hook 系统/index.html","1796d419754bcf39529ab94b24694783"],["/比较工厂设计模式/index.html","62d8f0f140a58aefc9a31134ee482a43"]];
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
