/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","27492686b7fe70ac973dd15785225c4c"],["/Swift Lazy属性初始化/index.html","03c2e85a744ea80529c71263fdd1b95c"],["/Swift UICollectionView使用指南/index.html","65ef4d9079f4f28dbb5fc52b45850aba"],["/Swift中快速简单的工厂设计模式/index.html","106839744fed0bee744e08b8a0e53893"],["/Swift中构造函数与静态工厂方法的比较/index.html","496a73e1f67e6a7303daf308585147f4"],["/Swift中的懒加载模式/index.html","c603ab7277b20a8827a39747a270776a"],["/Swift中的模块和挂钩/index.html","ff55783c938b0b24a22968a4c31672a0"],["/Swift使用布局锚点添加约束/index.html","cb3c898ab4213c6b9e70e1f3696771dd"],["/Swift依赖注入设计模式/index.html","f38a621b53f45297acc2609e3c77d9a5"],["/Swift关于Dependency Injection (DI)/index.html","6cfb8407effb36d2e7944f1c41603651"],["/Swift初始化模式/index.html","62f3e56b13161f2b865ae0f7a9330f8b"],["/Swift单例模式/index.html","50792ca471aee08a741974acd85033b0"],["/Swift原型设计模式/index.html","41ad1042dcbf43725e508349d504dd43"],["/Swift命令设计模式/index.html","20a8bdce5a40e932c8b69670ce9eaaf6"],["/Swift外观设计模式/index.html","9f102f636db4678f5997573a291b370c"],["/Swift委托设计模式/index.html","473bb53a9d3ad87d8f8fa4935eaaa32d"],["/Swift对象池设计模式/index.html","e25e7646c7c9b0a50799a92010127f25"],["/Swift工厂方法设计模式/index.html","77f5fc1ff3aaf5e7a4b65144d80e1de4"],["/Swift带闭包的懒惰初始化/index.html","a72943bf107d5a49d5c11512ad2df418"],["/Swift抽象工厂设计模式/index.html","f34b97cc4b9ccc035d391c082bc5dce8"],["/Swift掌握iOS自动布局锚点/index.html","a571f47f9d6a4ce4061a408f5228f18f"],["/Swift支持旋转的自适应单元格/index.html","f66f891a5b323f3bdc25b30a1c858e8a"],["/Swift生成器模式/index.html","8eccebff452dc5aaf22c764b61a66180"],["/Swift迭代器设计模式/index.html","204bd843d665d4a39fb3800b47c9f87f"],["/Swift适配器设计模式/index.html","f06823ef0a362b76fd9d7852099547ba"],["/Swift静态工厂设计模式/index.html","786a9fe08f5df9d74be700b0470f6c02"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c107151fb71322c0d93ad358e777496d"],["/UIKit初始化模式/index.html","68d2292d81760542a78ac42b9ca02e53"],["/Ubuntu18.04替换国内源/index.html","85aa13e1a3bf3f781d5b12493e14f466"],["/about/index.html","1ebfbf3e48c0063f0dd789766b685ca7"],["/archives/2020/04/index.html","36440c3774a5edb4a89b2729b2677d1c"],["/archives/2020/04/page/2/index.html","34e2d9fca1c552258bac80eeffe8b2c2"],["/archives/2020/04/page/3/index.html","e100ee5b540bb9458611a469c20e5c1f"],["/archives/2020/04/page/4/index.html","e9697010636fb88ce6da1ca803b16ff3"],["/archives/2020/04/page/5/index.html","0c762cf6da39a133a3cc29964ac51954"],["/archives/2020/index.html","e9284d25a03c7a24a442cb88c305326e"],["/archives/2020/page/2/index.html","4c272f0f1800a4f9ee6d0192b2982f39"],["/archives/2020/page/3/index.html","297ae1c23586fab1faae8fe9921264a8"],["/archives/2020/page/4/index.html","390090be8666f5518de6ea92de52d878"],["/archives/2020/page/5/index.html","cfa5fe7754e5d79eaa356fbeb4270b49"],["/archives/index.html","a37902e8aa77f15a49a4b208e1ab72c0"],["/archives/page/2/index.html","7aab7391658f78976a3fb5acbccff551"],["/archives/page/3/index.html","2918e676dcd742bfccd689f867645500"],["/archives/page/4/index.html","f54384c936fedab4fbe61869bbdcb672"],["/archives/page/5/index.html","102eef50079c46b4dbe84e98c3edf15f"],["/categories/Hexo/index.html","683a646eb237f8e6bdd609f8907c7324"],["/categories/Server/index.html","fab5acc74160a1b8c2d09f7fcc2de545"],["/categories/Swift/index.html","89c1f3abb07e3b54f332e36836a541dd"],["/categories/Swift/page/2/index.html","2f3cb5af7ca400c2c111135f2988ad0c"],["/categories/Swift/page/3/index.html","6a95814e71a43eeae639820f93bfa24b"],["/categories/Swift/page/4/index.html","a6a5132aac7a9b4914698e5d6fc2adf0"],["/categories/Swift5-2/index.html","878a799a2c7810a04b446802f75fcdcc"],["/categories/UIKit/index.html","2af4542d48473cc5d40db59f8e71d98b"],["/categories/UIKit/page/2/index.html","497dc4c08e2da7ef89bb41cbdf69ac6c"],["/categories/UIKit/page/3/index.html","b44a1a881134567e19193ee37e14997f"],["/categories/UIKit/page/4/index.html","d76749911e527098c89920da626d7417"],["/categories/Ubuntu18-04/index.html","9530f832ccb13d7f96f3966c5d34845c"],["/categories/Ubuntu软件源/index.html","21d3968afd44e0455887df6907560fc5"],["/categories/Vapor4-0/index.html","32311cf0077d8ae5a2c83fc080d8fa41"],["/categories/iOS/index.html","279b6e817f661778e7682b8aa64e3a8a"],["/categories/iOS/page/2/index.html","321d5d3be9da92bdffef2e24f7e807dc"],["/categories/iOS/page/3/index.html","f4730f2235c1edb57e49900cd935f48c"],["/categories/iOS/page/4/index.html","60efdccb3f059f93c9f96923b5f3a47c"],["/categories/index.html","d6999038477a0f5d7e2992dceb585e1f"],["/categories/用户体验/index.html","3ffad86db7a77bd7d89e4b2160784849"],["/categories/设计模式/index.html","41ba3a35653f23ad1316868895a26eda"],["/categories/设计模式/page/2/index.html","c9be8de9ea352528d3188d8094a8e8d2"],["/categories/设计模式/page/3/index.html","5ba8a357f5cdd72c75f704861fa351ee"],["/css/main.css","f1c1e7a82be3025d190bfdc1065b1d64"],["/hello-world/index.html","1aa6f637e63950a015623b2559944743"],["/iOS自动化布局编程/index.html","821a4c208a9786f41508b68a6df7fc42"],["/iOS自定义转场(By Swift)/index.html","00327f516ba88ca645619d7711333375"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a2ddc36c01717d90128509a0dd994e0f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","844c9845549bb9602510b2b3f2b2560f"],["/page/3/index.html","8d11afb0aa2c2a09a4392aa1e250b5e4"],["/page/4/index.html","6abf905406990eba6dd6d83d023c54b7"],["/page/5/index.html","c2c4b3b217a444d747ffb345eca1f477"],["/schedule/index.html","7bbf87a893faf041c6fcd31167580e4d"],["/sw-register.js","5de72f2e8c67553518aa11824cd21322"],["/tags/Collection/index.html","5bf174dd4f9d06224d89e3ec15215e62"],["/tags/Collections/index.html","a2c1d48d84751c8306d7168cae20e16e"],["/tags/Dependency-Injection/index.html","04d83d5c9f862b736113ac3beb8cce15"],["/tags/Modules-And-Hooks/index.html","7c10e615c6e206dead7749d0d73a6582"],["/tags/Server/index.html","30e7e2b8993f287afc015f11182a2e52"],["/tags/Swift/index.html","dc0f7b4b6b57bee45f8d4f7cdd962092"],["/tags/Swift/page/2/index.html","4f513b2b62881d5dccf0735ecbb26657"],["/tags/Swift/page/3/index.html","b8cfccdc29906d7b293e2e5a99124cc9"],["/tags/Swift/page/4/index.html","98331614f04d3282aa790f4fad9b9b4e"],["/tags/UICollectionView/index.html","a47bbc365bef71c4dfabd02dd1852157"],["/tags/UIKit/index.html","2905239ebf9fc356a69dcee7f73ddebc"],["/tags/UIKit/page/2/index.html","6fc63c5f47de7e130c461002416a2e0e"],["/tags/UIKit/page/3/index.html","effefd93588af6d21cc848a440a3f27a"],["/tags/UIKit/page/4/index.html","c1b38f0ba5102414e5fec4738c7c67d7"],["/tags/UITableView/index.html","396f662a44ba3b79e6bdf29c7862d338"],["/tags/Ubuntu/index.html","46cbae3a3f1166b666fb2cbffb1c6768"],["/tags/VMware/index.html","186556f0942be81f092f0b64e1d74007"],["/tags/iOS/index.html","1d5e9b0c1e4914007b5de8313e242f16"],["/tags/iOS/page/2/index.html","fdb4f79fda4787c954d04d2a0b793393"],["/tags/iOS/page/3/index.html","211696212b0d22d9e36cc461b120e387"],["/tags/iOS/page/4/index.html","754c914a51dc0c6dc6d1b12e0d133a0c"],["/tags/index.html","d351670d5a82a94d95a433fbdab45f85"],["/tags/non-optional/index.html","d89e5469a41102dd6d17451be09324ae"],["/tags/optionals/index.html","95d1f65536ff8b497cc0903ddc663233"],["/tags/transition/index.html","3f8a170cca9e99c8ab50f5896afb6683"],["/tags/依赖注入设计模式/index.html","f5510d33ed53eeab42151c0591be01a5"],["/tags/初始化模式/index.html","91863d9f4ae34c841cc07e434f2b4713"],["/tags/单例模式/index.html","f72aa1a09ae324bbd132dcd6efdde9f8"],["/tags/原型设计模式/index.html","4d7526dafe9a5af94d24e1ff726ef73a"],["/tags/命令设计模式/index.html","2b4c5241f86a5887074545cd61a08cdf"],["/tags/外观设计模式/index.html","e1bd8a18219895970f2d2b4093d30617"],["/tags/委托设计模式/index.html","50fc3359ecfdd72f3b8115e709b3c5cf"],["/tags/对象池设计模式/index.html","a228938bc1460167283785b1f474f96f"],["/tags/工厂方法设计模式/index.html","dfbc514d7c626385fd6d8b7fb82ead72"],["/tags/工厂模式/index.html","3b7698b6168755f4003e880a7051da41"],["/tags/工厂设计模式/index.html","3e2fc89c80c34c3d69ba8bf0ec54e5eb"],["/tags/懒加载模式/index.html","daf6ade8880bfdd425c8cd047484b4f9"],["/tags/抽象工厂设计模式/index.html","899451cecdf0ffbd3be0e50f9ac6adbc"],["/tags/构造函数/index.html","d530391194330bec5a0ebd8973ce3cb8"],["/tags/生成器模式/index.html","b5ceedc395e2343097f1a75f01c2e685"],["/tags/用户体验/index.html","d7dd3e5fdc7f6b7e4f935dec79272a8b"],["/tags/自动化布局/index.html","34ea1ab3a2db7079514ee0c0fa3ed030"],["/tags/自定义转场/index.html","f10ca0a8301fecafd3d3192fb03bedd8"],["/tags/自适应布局/index.html","ac239ca89f1824b6902c352bb9f111e5"],["/tags/设计模式/index.html","20265a38de7484beb124edadbbe72388"],["/tags/设计模式/page/2/index.html","7920b1598405c356595bbf3bd4884321"],["/tags/设计模式/page/3/index.html","2c7e20a5123699e0e3a964d9f085f129"],["/tags/迭代器设计模式/index.html","caaa06003a0c43e05868bd762b12a74d"],["/tags/适配器设计模式/index.html","274cefd207521c1132697a03e2141826"],["/tags/静态工厂方法/index.html","4b7529ce541b9daa6fc13262fb5e4a18"],["/产品开发的幕后花絮/index.html","48e7b11f64ee0b29ce2b403f992c1eeb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5ce191871e21762ce448abb2f131e53a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","e665d0501e641a34db482c1ea1fc07bc"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ccfa8522bef4067950cd5b7303036fa3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","522b6e3245a6f44ae04b6f5537752a2e"],["/在Swift中创建自定义集合/index.html","3ee8b9863c35aac31a3c796eb764c608"],["/在Swift中处理非可选选项/index.html","8b0c7a34bddc2af7088d667c71938251"],["/在Swift中重构单例模式用法/index.html","bd46e84b9320e8280dbbd5698c999fc9"],["/揭秘 WordPress Hook 系统/index.html","09ea5824679557a5a38bf0c94eb5d4db"],["/比较工厂设计模式/index.html","870a92f075349410d393fdf0f9df2059"]];
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
