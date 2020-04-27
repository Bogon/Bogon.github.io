/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","3ec7c54c38f02c46f6a6d1543024315d"],["/Swift Lazy属性初始化/index.html","2ea7f81dd4db73a4416d025c15a66e9f"],["/Swift UICollectionView使用指南/index.html","a66ad551cf79d88fa224092953e15fd0"],["/Swift中快速简单的工厂设计模式/index.html","920cc8d421a295ad55acefa9969be720"],["/Swift中构造函数与静态工厂方法的比较/index.html","292461188a93db6f3b062ea882b2b378"],["/Swift中的懒加载模式/index.html","a6a73e9cca62f28fa3844f27d84ac2b0"],["/Swift中的模块和挂钩/index.html","4e2f4a32b9140e14c03e314bce35d544"],["/Swift使用布局锚点添加约束/index.html","10f802b7f97bfff95f9491fcd9355c79"],["/Swift依赖注入设计模式/index.html","24338ce70d48232787416ea2aad96b98"],["/Swift关于Dependency Injection (DI)/index.html","4ac93320db2bfd1e140e461b7bb8449f"],["/Swift初始化模式/index.html","1ac43dee92ad610e0c8182b871cbca45"],["/Swift单例模式/index.html","5c4eb5c0c81e33a1f04a3fc08eb7bf30"],["/Swift原型设计模式/index.html","081913c0e433a498db1a3187da659e46"],["/Swift命令设计模式/index.html","f7a942d7ac8fabf10ecd49abcdaf3de2"],["/Swift外观设计模式/index.html","8aa0c92fdf0e4c82c12fb97b8eb50b82"],["/Swift委托设计模式/index.html","fee9d40167f0f3a9c20cb43321511124"],["/Swift对象池设计模式/index.html","7e7b25b98eb8f653e744e0f721c8f92e"],["/Swift工厂方法设计模式/index.html","23f0a89eb5684dc699257aab21bca69a"],["/Swift带闭包的懒惰初始化/index.html","c71088886409fc629f5bef33de0809d6"],["/Swift抽象工厂设计模式/index.html","196d9f3f8f4845212d180e6625ed9522"],["/Swift掌握iOS自动布局锚点/index.html","6e47616e2e14885ad8934839417cda87"],["/Swift支持旋转的自适应单元格/index.html","535442d55f4b36ba40d4382e8ba0a132"],["/Swift生成器模式/index.html","67b327d7fb2c2b8ac759ded95f0b5e39"],["/Swift迭代器设计模式/index.html","d21c900b67c916baa29f361cecdca539"],["/Swift适配器设计模式/index.html","7dfeffad96fe66050320ba1ca029bf98"],["/Swift静态工厂设计模式/index.html","7f2479557f31892391151ff3b16a4d15"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","8f1029e1e930a33e1b5521e15e72303d"],["/UIKit初始化模式/index.html","3f9fe1643767bd276d0949d0c09c2b47"],["/Ubuntu18.04替换国内源/index.html","35e5ba87829a9cff8a9072ee4344682c"],["/about/index.html","d8b6949bf93536b9b0883078d0bf95a2"],["/archives/2020/04/index.html","111258da39eb30702aa24907a1e646d9"],["/archives/2020/04/page/2/index.html","33b46cfdf944183706301d1a1e4d6544"],["/archives/2020/04/page/3/index.html","b603f404aceccfda6b399dcef5189543"],["/archives/2020/04/page/4/index.html","41fe143c32c62b12b802985b25cf5dfc"],["/archives/2020/04/page/5/index.html","1e9bb0eb8bf1878afa7e6835e8e57924"],["/archives/2020/index.html","1f7541220b6bdcaae7c4067cb2d60e50"],["/archives/2020/page/2/index.html","857df7ec9144b3019d2b884e1c5d6b79"],["/archives/2020/page/3/index.html","5663d314630eb56405e0527911121786"],["/archives/2020/page/4/index.html","1ef795af888857af6e6e43c6957190ce"],["/archives/2020/page/5/index.html","b8ecf46660ad6869d7e564fbe0f92132"],["/archives/index.html","7c7c70d856aaf4509431d2a4fd525e49"],["/archives/page/2/index.html","e55df7c7d71b04f192f3287d49afe98f"],["/archives/page/3/index.html","91e646566feff58cb7056fe58d00d275"],["/archives/page/4/index.html","4998432dd943562dcea8a555aae52047"],["/archives/page/5/index.html","1a798725c7e1becef1765aa73938c73a"],["/categories/Hexo/index.html","d631a78d47da5234c3e5c4a89fd02fa9"],["/categories/Server/index.html","914fe44d708332e6468728347a8674bf"],["/categories/Swift/index.html","b0e1cbf6a1f69ff704d9acc18bde78a4"],["/categories/Swift/page/2/index.html","32a1536562d3f324a6706acc9f0a0693"],["/categories/Swift/page/3/index.html","c1adc4611370c6e2e59bb2a2243e7a8d"],["/categories/Swift/page/4/index.html","880ecb27cf2e548b3d56d4de529d5679"],["/categories/Swift5-2/index.html","b25d2c2d35055bcd303ec14fdbc039ad"],["/categories/UIKit/index.html","d19287e07379bf80097bdc2f6cbd7705"],["/categories/UIKit/page/2/index.html","7517ea3ec46a81a8a902c0d06fccf578"],["/categories/UIKit/page/3/index.html","b3b1c0a2797676b90c2a9e84006b5667"],["/categories/UIKit/page/4/index.html","3f2eca9bb1e5ada8ab2c8cb21878e086"],["/categories/Ubuntu18-04/index.html","ebffc8537d626a01f56060107bc57b03"],["/categories/Ubuntu软件源/index.html","7bb43dcfe004ba7e9d7448e7969b305d"],["/categories/Vapor4-0/index.html","cf9062cba26135809ebb369b8abb5604"],["/categories/iOS/index.html","205a649957d5f36aabb49bb5d0c0476f"],["/categories/iOS/page/2/index.html","8e0df372e2d8cf94594cc10e5c76b4c4"],["/categories/iOS/page/3/index.html","7f3902c40b7bf766e5ce99028c6cac2d"],["/categories/iOS/page/4/index.html","db93505f97b63039d0675c82f6385ffa"],["/categories/index.html","f9c237a6d73131e3b4af337f7cbecc49"],["/categories/用户体验/index.html","8b5b425f6024bcd98913b651a86c48f3"],["/categories/设计模式/index.html","e3463912c86d41e84bd1b683d15a7745"],["/categories/设计模式/page/2/index.html","6146325efa72578ee0b16668be8df906"],["/categories/设计模式/page/3/index.html","636b22de3320f09c5b9a6130522d8dfa"],["/css/main.css","108eff2f468e6e644b92534330387d15"],["/hello-world/index.html","8dace07d30a24d29ce34a02af53b2d27"],["/iOS自动化布局编程/index.html","430733c49155752ecab5a1c19ebcbc15"],["/iOS自定义转场(By Swift)/index.html","66d09a53b7d5530a4c6b4cacc9360735"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","bc833b47d473805313a09c0331fcfcb5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a3e59d8e4260b00a4c1007f3ed8ed82e"],["/page/3/index.html","eaf562a827138af9a7a862012852eb49"],["/page/4/index.html","447ea94b20e9d6add191019522ada93e"],["/page/5/index.html","01bb245c7a6b38ec3757cc51242414f5"],["/schedule/index.html","a6a3d380519854097415a44a69e12e2d"],["/sw-register.js","00f1b69f1327704b99b3f1a1c862d3a2"],["/tags/Collection/index.html","b78513af363583b9c4d2e70ac5568ad1"],["/tags/Collections/index.html","acbcd22ff93e761f35c61782e722535f"],["/tags/Dependency-Injection/index.html","a1b2447a65f490c6b5750fb4cb42770e"],["/tags/Modules-And-Hooks/index.html","27c30a3f51dcc75e6b5dce9f9bd88743"],["/tags/Server/index.html","90cb73ffc5309de27cd638ea158cc071"],["/tags/Swift/index.html","9e1d8938f418a1003da9e7132510da67"],["/tags/Swift/page/2/index.html","638a74692a43c292f5a13518cc906af1"],["/tags/Swift/page/3/index.html","543ae600102649db69adbbaa8983910e"],["/tags/Swift/page/4/index.html","e3bc1b9802f74eb189cea71d3f4bc7cc"],["/tags/UICollectionView/index.html","1d2528f8ff9d657a7a2c54f088b00c93"],["/tags/UIKit/index.html","8db63dbdb06d5458e40ec7fc69017634"],["/tags/UIKit/page/2/index.html","df9b378ddd0401e9e5d5e68d0b463a73"],["/tags/UIKit/page/3/index.html","b86234dd6c0b4d4e90dabbb1290610e7"],["/tags/UIKit/page/4/index.html","da18761363d5dfdd76b9c95cf6cdc9d1"],["/tags/UITableView/index.html","76f5b96d099c32be33aee0d5814cc165"],["/tags/Ubuntu/index.html","0301df2b54ac19ed3375e16b2a75bb32"],["/tags/VMware/index.html","d2399fcf1560c8228dd2e0d786559a3b"],["/tags/iOS/index.html","104250babcc12a7f9fdb887818cc0b24"],["/tags/iOS/page/2/index.html","521454e985f027e10095c725c73b5fde"],["/tags/iOS/page/3/index.html","8b59f9c10ce752f70d9bff97af7065ed"],["/tags/iOS/page/4/index.html","c7ad7b90fd485b2ae6bf5e116adb3193"],["/tags/index.html","611fe1aeda7638e57eb597992856f152"],["/tags/non-optional/index.html","71fa498cc5a2e0ad794a905d801b39cc"],["/tags/optionals/index.html","3adf6a46f341ccff3e3a72be45c19278"],["/tags/transition/index.html","eef1dbdb5821f4785c6827b37d8a2ae7"],["/tags/依赖注入设计模式/index.html","0e25b42710743e4d8b43084591938347"],["/tags/初始化模式/index.html","ca34f8d15657d2d41d5b71986ccfe8fe"],["/tags/单例模式/index.html","ea9f79bc9bd71bb487c7a9de4f9937f1"],["/tags/原型设计模式/index.html","d0b7f9adce57a1af90ab29ecef42adc0"],["/tags/命令设计模式/index.html","0546624556e9b00d73e9ea73d35f83d5"],["/tags/外观设计模式/index.html","74f405fa57565f2cc6da394180b4823e"],["/tags/委托设计模式/index.html","05fbe15d9398941b588201fbeeed487f"],["/tags/对象池设计模式/index.html","695d5d3df168297f608cee43b6b8e02a"],["/tags/工厂方法设计模式/index.html","cbde6b5c2505ef496446d9ee074c6b92"],["/tags/工厂模式/index.html","54d65ade0c7b38fc33073f993f1924d9"],["/tags/工厂设计模式/index.html","4c53e5202558aa699ba81eebe646d460"],["/tags/懒加载模式/index.html","670c6db82aab38d72cf46c19f623f567"],["/tags/抽象工厂设计模式/index.html","caf1a21bca5f1a31a910a5e51e650745"],["/tags/构造函数/index.html","918c89409e4d7929bb6be70c22df6c4f"],["/tags/生成器模式/index.html","79b629f1dc6c788e9c29135e4b398cd5"],["/tags/用户体验/index.html","e1a7b9ed4f6fb4dd2a3225cdacd66a05"],["/tags/自动化布局/index.html","2a080680c942c29810aad3409447b221"],["/tags/自定义转场/index.html","fc21ee07d20dc3b831ec6b5687dff2b1"],["/tags/自适应布局/index.html","e1cbec4ba69b4cc85a14a439c3a46819"],["/tags/设计模式/index.html","a9a28f3c7f8a245a0ba22eabb9b1b478"],["/tags/设计模式/page/2/index.html","1c7d77d13f57dde52dc14127d92c124f"],["/tags/设计模式/page/3/index.html","8f14ba626617a890f13e3347a3e90652"],["/tags/迭代器设计模式/index.html","cc138995209d7a9f7770374fd8a66c1c"],["/tags/适配器设计模式/index.html","0b55504771875af05da8a8531e1fe668"],["/tags/静态工厂方法/index.html","59ee4d0f8a23a90e57d8a1b672d1387e"],["/产品开发的幕后花絮/index.html","61132bce101d49cf89ba375dc079aff8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0e1b86f7dbffa83662efd65d7d70d65d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d009418743abd2b517882f515dee233f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","30e96c6097f30e1f8f47cd6d60042a7b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2d42ef562dade46fb1bef374bd6325d9"],["/在Swift中创建自定义集合/index.html","529144186841b7c262902b32bf6d8d61"],["/在Swift中处理非可选选项/index.html","59cd91afdef7f1b69369b7e79cdc732a"],["/在Swift中重构单例模式用法/index.html","fbd16fb1a9f0e8afb1fe03452347e641"],["/揭秘 WordPress Hook 系统/index.html","6cfd521e5918ab3073ae0c3a38fab0af"],["/比较工厂设计模式/index.html","5d29a94f2643c4f5c708884fa16d84c0"]];
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
