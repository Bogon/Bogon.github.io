/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","92e52af65c80a878c3db0553ba95ca0a"],["/Swift Lazy属性初始化/index.html","ec5baebb564868026c900a928d7ce17b"],["/Swift UICollectionView使用指南/index.html","61114041ec3b1479b069c52899cda194"],["/Swift中快速简单的工厂设计模式/index.html","a09d336d1cac2e5810270318d9ada7fd"],["/Swift中构造函数与静态工厂方法的比较/index.html","e8a0ffb65cc9335766e408f0cabd215b"],["/Swift中的懒加载模式/index.html","bae5ec3516fe8ea2e92696f65dd1cbea"],["/Swift中的模块和挂钩/index.html","c54f7af81340470053dfab2dc7b55302"],["/Swift使用布局锚点添加约束/index.html","10029c47be7242296b8d452b900b0806"],["/Swift依赖注入设计模式/index.html","92107b25e39661837f413aa8d32045d6"],["/Swift关于Dependency Injection (DI)/index.html","0c7fa98ad92c2da68b11e2ae5ef97e78"],["/Swift初始化模式/index.html","0d6ac2e87112af9c23c6c51ed67b1da2"],["/Swift单例模式/index.html","1ab5d4186f1c219daaf1320c7b3bb1f9"],["/Swift原型设计模式/index.html","5c256834a73794bb4469c8b567e73421"],["/Swift命令设计模式/index.html","fca69636867ef5e8ee1f12abdd015f08"],["/Swift外观设计模式/index.html","1817acdc522fe8d4b94928f9b16b9bd9"],["/Swift委托设计模式/index.html","12c385b807072ddb087b6cb8edea1c29"],["/Swift对象池设计模式/index.html","db6e55f1934bc26822ac32fbfa66d1e5"],["/Swift工厂方法设计模式/index.html","028e5be7f6320f9e4ed4d5c412f94acd"],["/Swift带闭包的懒惰初始化/index.html","10ebb7c97fe278b9bc0b64fc1c5a359a"],["/Swift抽象工厂设计模式/index.html","151d840b8ff6eee8a632139daaf1eacb"],["/Swift掌握iOS自动布局锚点/index.html","b7cc5939b555f46d18f4dc9d22626e5c"],["/Swift支持旋转的自适应单元格/index.html","d61f7502e78364b62663d091e92b12d5"],["/Swift生成器模式/index.html","3da39ffbd7b5baa0b88d80b6b167c571"],["/Swift迭代器设计模式/index.html","40c6a4ed342a12b0702cad72dccce1fa"],["/Swift适配器设计模式/index.html","4b0317f15c25d91025cd430049792ad4"],["/Swift静态工厂设计模式/index.html","5c3f8773837c72f5d3d8ee3206542130"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","438d020c9ec6f62e58cfc6f55f12cc19"],["/UIKit初始化模式/index.html","d1a9dd72d87d68f1c62dffc19796a9e0"],["/Ubuntu18.04替换国内源/index.html","0e3999f638cfdc5d38e83172783aa5dd"],["/about/index.html","16b2bcf32080e30bc2fe7977f45b066c"],["/archives/2020/04/index.html","566f9337250901c7c835a12ac177e999"],["/archives/2020/04/page/2/index.html","61719f981cba769f3f02218b661d71d3"],["/archives/2020/04/page/3/index.html","fe977ce1c09771f91208b3b5a6d6a02a"],["/archives/2020/04/page/4/index.html","ceb3084d5d72190f5200ef9f652593f4"],["/archives/2020/04/page/5/index.html","1a13653896ccdd0fd3e636334df0d8f6"],["/archives/2020/index.html","4b6a234158759258a4aec4ff0fa15685"],["/archives/2020/page/2/index.html","d8bbcf30091110c4bd1cce47de6992f1"],["/archives/2020/page/3/index.html","7708a80a56ec2361c750500c02412384"],["/archives/2020/page/4/index.html","1ed2d5ee09f85c4dd0867e7ceec414c3"],["/archives/2020/page/5/index.html","07d626d950ead2b1c4418a60667fcd12"],["/archives/index.html","e7aae3c7fc4b7d19fc839e6120bc6205"],["/archives/page/2/index.html","bedb7d6e10290de945e416382606cf30"],["/archives/page/3/index.html","c9e5d67b1d7548f29a61f9767e4e21ad"],["/archives/page/4/index.html","7ffa9acd4c01f67d6eb5e6376acda0f1"],["/archives/page/5/index.html","236cb3614e13c32e8cc928faae15fa09"],["/categories/Hexo/index.html","6730106a19b94c1f20d3a5de191a51be"],["/categories/Server/index.html","988c8993bfe8ad1fac8c8d4687a5b37a"],["/categories/Swift/index.html","7c1a5094cc4dd6671ec51936bf49cc99"],["/categories/Swift/page/2/index.html","6d9b31e265f54272b939a2a6cb4dd81e"],["/categories/Swift/page/3/index.html","e700b155f50367e09278b0f678109430"],["/categories/Swift/page/4/index.html","7e9a42f3cf1a095d6663b13957421be5"],["/categories/Swift5-2/index.html","4d5902586ea5a2c75b5c40e234ad4574"],["/categories/UIKit/index.html","106d743fea2b43cbeb9ae68bce27a1b6"],["/categories/UIKit/page/2/index.html","a174829efa6d7d608abdcde1ccd26bc7"],["/categories/UIKit/page/3/index.html","e14a111f805ef342f6d6cff663cca394"],["/categories/UIKit/page/4/index.html","d262ac72cd8b811e3d1e018cd6b6fe2d"],["/categories/Ubuntu18-04/index.html","5f8b99770f6485e1f986c10d3e50ac88"],["/categories/Ubuntu软件源/index.html","5541e57a83f9efd03d55dcb811616df6"],["/categories/Vapor4-0/index.html","f74e3445293203d6342a70197b8d3398"],["/categories/iOS/index.html","9c574c4dda0f371203929d237b80eaae"],["/categories/iOS/page/2/index.html","051239ec0d18c36ac24c6c49996d95d3"],["/categories/iOS/page/3/index.html","f7fa3bcf386baa9b3ec5e8867305a355"],["/categories/iOS/page/4/index.html","c1791cb990c39a4e38c5bfc84524d315"],["/categories/index.html","70df32782cae500de3a31170803b05cd"],["/categories/用户体验/index.html","e7a0056c094e18c706be8013b13ac7cf"],["/categories/设计模式/index.html","1f08c07c1cfb84cace78afcf6cacdb5f"],["/categories/设计模式/page/2/index.html","1068ba08269ae3dbd2b645680c329fa3"],["/categories/设计模式/page/3/index.html","cc849524a6cf923dcc438e05b1ea62d5"],["/css/main.css","a4b5829780bcf1087be6a9da73aacff7"],["/hello-world/index.html","77c9bce0fd8ad9f7fb895e6d8e4470c5"],["/iOS自动化布局编程/index.html","9eb188947db796399405b15bbc92b3a8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ae6e9a717d9dd61bd954ac72e476fa1d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e163888d264c39fa24933f0ca83b6f76"],["/page/3/index.html","0b177b294a6016050e968ff947a6fdb8"],["/page/4/index.html","941167677097b1bb712309750776a32c"],["/page/5/index.html","9d0fa8f835ef7924661f71b42481377c"],["/schedule/index.html","0bf4b40b0a35157f4103eff7aabd3084"],["/sw-register.js","417f13f5cb8b4d2378384a776735cb34"],["/tags/Collection/index.html","45facd5082e70c2f68c48f6bddc2a81e"],["/tags/Collections/index.html","993f456af2a41cda6e1d4da0d4416a16"],["/tags/Dependency-Injection/index.html","10936f94c55eddb4c371bcd990013b37"],["/tags/Modules-And-Hooks/index.html","9f19a8c619b1304ff22f88283972b074"],["/tags/Server/index.html","a77361c2940c6a5a6df6c72d71c1416e"],["/tags/Swift/index.html","78cb518e357dfb5acc59c5e55f796ad0"],["/tags/Swift/page/2/index.html","d43be840264ad05812592dbe532e80da"],["/tags/Swift/page/3/index.html","feb24f5794f6ca53e082921c66bbcde0"],["/tags/Swift/page/4/index.html","62f3a796ce91b25c81f6e89729320304"],["/tags/UICollectionView/index.html","ca82b62a86714bddcf307260dbb0987c"],["/tags/UIKit/index.html","e488dced769bebea2330f6e5e8dc0e46"],["/tags/UIKit/page/2/index.html","cab8297cc379dbe6a4de9f847e9749d6"],["/tags/UIKit/page/3/index.html","bc3fec9fa96d3c36b479ff588aea2c1e"],["/tags/UIKit/page/4/index.html","e669e6e6e18cfcef10f67a5c4aed8534"],["/tags/UITableView/index.html","b9bdb978693cd5c1014bce2bbc1078cf"],["/tags/Ubuntu/index.html","cca717678c779613aec7d5529a566c7b"],["/tags/VMware/index.html","ba61269db3e6efb357b5c8ada12572c6"],["/tags/iOS/index.html","99533f298b8f68c5b0bcc3e9e0b8b960"],["/tags/iOS/page/2/index.html","4e83221ba7cf3544c4f4d5b5ffdd1353"],["/tags/iOS/page/3/index.html","65006d8f356e1c689194e277fa8f0dc5"],["/tags/iOS/page/4/index.html","6a578bf094980ac1bb1e4bc903bdc35b"],["/tags/index.html","bc9abc1131b0adcc52ca33b3bead49ef"],["/tags/non-optional/index.html","fb9dc996f971cd7d6d7dc1c6bd6c591d"],["/tags/optionals/index.html","91bdb9b54f956109426ad7a0e16a7463"],["/tags/依赖注入设计模式/index.html","a152174118a24bba4bbcdba9cde0be1d"],["/tags/初始化模式/index.html","006265b321983aaabd40d481c08158e4"],["/tags/单例模式/index.html","7517cffa9a4e284e7df422dddf60ba09"],["/tags/原型设计模式/index.html","0f15c276a82fd99ef96f28772e4c6227"],["/tags/命令设计模式/index.html","d8ff55c9b611e2c92e14b04667b64e26"],["/tags/外观设计模式/index.html","1426ec7b151ba80aa00f5c8adc712e7d"],["/tags/委托设计模式/index.html","5ec131bd5fc26d2c8a43c58bde776051"],["/tags/对象池设计模式/index.html","bc88e8fada8ee2166997677d8d44352a"],["/tags/工厂方法设计模式/index.html","dbc509916667b8f415c1509ef9763ab8"],["/tags/工厂模式/index.html","44b15e3b8e3ca8c3a0e9cabdd4c732de"],["/tags/工厂设计模式/index.html","42bcfe1ecfbb25ceb20b90a04c669182"],["/tags/懒加载模式/index.html","c610d02aeae6a11ee624819ce346e1d0"],["/tags/抽象工厂设计模式/index.html","211b3155fe60afae97191525471e8aa7"],["/tags/构造函数/index.html","8ba63a2f4e7eb7c8c4e686f4dbaa189d"],["/tags/生成器模式/index.html","fa32cbc0cbabf1bdac12fa3d86683295"],["/tags/用户体验/index.html","8bd9c152ca7eecd8f9e304aae5750acb"],["/tags/自动化布局/index.html","7e234b5e447c0452cc1403016ca9621c"],["/tags/自适应布局/index.html","f0f5cdd8f2dd4e02485365aae8a62a8f"],["/tags/设计模式/index.html","dc4b75222fdc0d3f1a9f0f04f3636aa3"],["/tags/设计模式/page/2/index.html","229bf1cf78a809d67b3d2b09366d95db"],["/tags/设计模式/page/3/index.html","3184064d221c991a249814c9396a5b49"],["/tags/迭代器设计模式/index.html","11d0ceb9dce8089a5604c51f8f7e57bb"],["/tags/适配器设计模式/index.html","7b9061e66db85dbe5de40a54f9c5c551"],["/tags/静态工厂方法/index.html","29c8be9fbd7b2056f796fef80f7cab9c"],["/产品开发的幕后花絮/index.html","567f4e8282ba9e4f77ff987794afe442"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","468532428799b3dd4aee22ad4a1cf0c7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","cec4ed05c9f19b8daa6fc1430b7c3d5a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d4234d9c50d87b7e5d82eb3de7b3a80f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4d4e13f918825e7df9afe6d1bb1bac9a"],["/在Swift中创建自定义集合/index.html","9fbcd904207e6aa86e1c0f98c4be3f7c"],["/在Swift中处理非可选选项/index.html","b39ea1782380816708e4c8483907ca2f"],["/在Swift中重构单例模式用法/index.html","0422f39858f820c0212954a641cba738"],["/揭秘 WordPress Hook 系统/index.html","a83b89aaf0b4cca26db38e0a9af5abc3"],["/比较工厂设计模式/index.html","13c5b9542136025fdc79e38e4e6239d2"]];
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
