/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","18e0e94d128a00c6d74e040ae0d13f0a"],["/Swift Lazy属性初始化/index.html","0b0aa94f1ae92500e849186b5f23378d"],["/Swift UICollectionView使用指南/index.html","93f1b439e165af07737e8353129abf8c"],["/Swift中快速简单的工厂设计模式/index.html","e2cac4cb1af87048216eafd58b83ef36"],["/Swift中构造函数与静态工厂方法的比较/index.html","ce4759a243ae87d40c95cb8bb458f8d7"],["/Swift中的懒加载模式/index.html","c9dd486d2f57186b087e4dc7a359676d"],["/Swift中的模块和挂钩/index.html","579d9870a4a25b09d86cb7ddf8c2b0ae"],["/Swift使用布局锚点添加约束/index.html","871af9e5162560e361ac634bdacf2544"],["/Swift依赖注入设计模式/index.html","36b1ca83aaf99ecd9a9425d2f172d323"],["/Swift关于Dependency Injection (DI)/index.html","9617a395ae0f5295a5a5d484e2c04279"],["/Swift初始化模式/index.html","8a5f61ce64504a86ff01ec0926a9be05"],["/Swift单例模式/index.html","0a722e3904f908350450da12d94611e0"],["/Swift原型设计模式/index.html","0ac2dd0b30444a184eb6ccddb61ac93b"],["/Swift命令设计模式/index.html","4f6e6b2dc38e4a1bf6738cc9954c6ea3"],["/Swift外观设计模式/index.html","23a5b8b8603493947e686b471eb6fc17"],["/Swift委托设计模式/index.html","0d17a119e669f18c0598770ed5595dbb"],["/Swift对象池设计模式/index.html","804e1fb419c84ff9c010d98e6ae2310a"],["/Swift工厂方法设计模式/index.html","6c3cba37415a96c7fdcca6701c30c482"],["/Swift带闭包的懒惰初始化/index.html","e5edadf06d6cdca2bc76c1cd73d07cc5"],["/Swift抽象工厂设计模式/index.html","8eaebe063284d810a7029b52dc242276"],["/Swift掌握iOS自动布局锚点/index.html","eab3081f766bfcda05c2ef5214821db5"],["/Swift支持旋转的自适应单元格/index.html","44dc0e5ac66732b0c3c9467d8ec08fb5"],["/Swift生成器模式/index.html","9f2120be0a4bc752a87342785cc6ec67"],["/Swift迭代器设计模式/index.html","c12b1623d6794bf4d39a2040c72da075"],["/Swift适配器设计模式/index.html","d99a706666faea9ead91bc3c599f3768"],["/Swift静态工厂设计模式/index.html","d9745d833b15747a4d655e4f680dc070"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","7f2afae2faca4a47dca8525ebbe9c4a8"],["/UIKit初始化模式/index.html","79ff7d1a2f69a54bff9f4a90d86a2b1a"],["/Ubuntu18.04替换国内源/index.html","0082230fa8a210201389f418095783bc"],["/about/index.html","dd649f61cd228468145ecbeeb9825a2e"],["/archives/2020/04/index.html","b121a52369e626fafa4ed775aec4e852"],["/archives/2020/04/page/2/index.html","360223a568de9c02b1d9f2443afe00ae"],["/archives/2020/04/page/3/index.html","fb8820d02942aad0f5fa44606e65f2e1"],["/archives/2020/04/page/4/index.html","d0e7e8694f85ade44b07425bf67cf3e6"],["/archives/2020/04/page/5/index.html","c0645f772227dcdf72fe4f422bc5fbcb"],["/archives/2020/index.html","d8494bf885416fd9551bfa0167fe9c7a"],["/archives/2020/page/2/index.html","1ca892c5157349826ee41c8ff13c82f0"],["/archives/2020/page/3/index.html","e947e7e87cd51681c911ea517035852c"],["/archives/2020/page/4/index.html","f9c9a60e67886ee44ccaffda63693856"],["/archives/2020/page/5/index.html","f7996b04e25a4cef6f72b4df14d3a504"],["/archives/index.html","fb98c437e0d937691cbb785604951865"],["/archives/page/2/index.html","c8565f30c9707fefc37c9a85039eccac"],["/archives/page/3/index.html","22d93d04fe553fe3a07042dd93e1545d"],["/archives/page/4/index.html","692e0c329bd913b6e995dfcdd1485de2"],["/archives/page/5/index.html","c72964a3fdb1ae291cd1eb84a852788e"],["/categories/Hexo/index.html","5cf71fde3b09857be245825c9ba48fad"],["/categories/Server/index.html","f181cce58ba6b3b5e14d97acacde9243"],["/categories/Swift/index.html","95cdff37d72763e35149a8500864759c"],["/categories/Swift/page/2/index.html","ab9cae7ecbab5ecc7f01877b70e7d937"],["/categories/Swift/page/3/index.html","1b2e96d6942db840a49b9736ae53bdc2"],["/categories/Swift/page/4/index.html","ec0160b7a2146e62d9debe2996d363a4"],["/categories/Swift5-2/index.html","fe9789d6e8adeed9f9792916aeabcf8e"],["/categories/UIKit/index.html","a62f223bac423051ce9bfbd0676ccf28"],["/categories/UIKit/page/2/index.html","711c9995dcb1da0a5f6bf2151912fa60"],["/categories/UIKit/page/3/index.html","4792bc35b25bef1d8ca9f39d25169333"],["/categories/UIKit/page/4/index.html","af3fd478684cfa51928adb455215f7ec"],["/categories/Ubuntu18-04/index.html","26a485d28e715e46474dba7c044756eb"],["/categories/Ubuntu软件源/index.html","24f946f61a8510ab9470f247a7acf898"],["/categories/Vapor4-0/index.html","0295bc3eeb801dee638af7503352b647"],["/categories/iOS/index.html","87d33dfdd477c0debfeed0e0f16a49a1"],["/categories/iOS/page/2/index.html","31704671f75638300c7b90d88285dc62"],["/categories/iOS/page/3/index.html","5b0b6df5d6644619c518cce54498097c"],["/categories/iOS/page/4/index.html","37e105815e8de05b10bd17cd6e4384e9"],["/categories/index.html","0b06637446bc264db28353a929a58503"],["/categories/用户体验/index.html","743585d8ed446b52b6477ac89971f528"],["/categories/设计模式/index.html","88f91f0384d0eaa3ede1aba65aca3ac5"],["/categories/设计模式/page/2/index.html","5673cc4a808702ab37742dc6cb294b1e"],["/categories/设计模式/page/3/index.html","019375f2a820066c23086c69e7f70949"],["/css/main.css","2e0c7d5cd9667ec94f26f6caeed7744e"],["/hello-world/index.html","0c1d55cd3f4d128fcea0b318935cf2bb"],["/iOS自动化布局编程/index.html","1bc4ebaede490df908956aa97c147308"],["/iOS自定义转场(By Swift)/index.html","86b2f05b76883ad1830eedc96d6203e7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","81340404cb3f3cd22ffb28e52a7a1925"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","47b4cdd775d9d575888b6e4b6270e2b1"],["/page/3/index.html","e156e9de53652d48bc0f03e6a5736e06"],["/page/4/index.html","826abfe5fac8bad25994a8055e9c3ed0"],["/page/5/index.html","35f000a5216e78747bba7f9c2bb856fe"],["/schedule/index.html","560905e8659b346cb30c4be4ed41ab2f"],["/sw-register.js","fd6a5f80ef672df8c3d0781f499ce0f2"],["/tags/Collection/index.html","bd4435bb2fe1d3655a35ef7e78d67af1"],["/tags/Collections/index.html","a12238d166c1c97858d9b088be670c8a"],["/tags/Dependency-Injection/index.html","99e3af3812181b2476d401df61d78fbc"],["/tags/Modules-And-Hooks/index.html","7db90548ef1affec35c93af03fd10d3f"],["/tags/Server/index.html","c2654b1b337ff4ae9586853cdc44a54e"],["/tags/Swift/index.html","ee5dcea862b558d1e1826877fc193206"],["/tags/Swift/page/2/index.html","cfb04cba3c8273c2d05c13cda61cb818"],["/tags/Swift/page/3/index.html","8e5a58c32dbb1995cebc9d472ef982fc"],["/tags/Swift/page/4/index.html","77d7af06b7c9b2f4870b46cf0ceb7df2"],["/tags/UICollectionView/index.html","7d0dc1ef09d5e682a23c7b826868306b"],["/tags/UIKit/index.html","dc46d695e28f468c9f0d52866b205604"],["/tags/UIKit/page/2/index.html","22a4ac0cfd9d566af7dfc38b3acfce99"],["/tags/UIKit/page/3/index.html","652d60adf2de40f9cf02a49f2135f397"],["/tags/UIKit/page/4/index.html","5e97eeeec8f97b92982d98ee9a12e29b"],["/tags/UITableView/index.html","126f16de0449eac2f9b78b0d1763b457"],["/tags/Ubuntu/index.html","c9673fb5272af55894d1a31222940e07"],["/tags/VMware/index.html","38062e7edd94793dc0f70bf44c056014"],["/tags/iOS/index.html","985d4fc3a3fc6280fab776fcc5568a88"],["/tags/iOS/page/2/index.html","8ed65c83ff6446b158e441f889eb0145"],["/tags/iOS/page/3/index.html","86cb3e5ca86cb05dfa6d5497f063b8dd"],["/tags/iOS/page/4/index.html","2e8d1a67e019f02174a4955cf3e7a9a8"],["/tags/index.html","830ec638126634ab23ed72c304b77557"],["/tags/non-optional/index.html","6ac6b7c871cbe9df337d87fda348daa7"],["/tags/optionals/index.html","c830a4eb076a20a325c977b75171ebc0"],["/tags/transition/index.html","9edef64f795b3fc9a8644fe4bb3d3f49"],["/tags/依赖注入设计模式/index.html","739a021377b1ced0d5f1dd72abaeb1ec"],["/tags/初始化模式/index.html","8eb396cb44750fd7719362fe8c3092d7"],["/tags/单例模式/index.html","44049e53f0226704d03879e0eb975d08"],["/tags/原型设计模式/index.html","fe11ba6352566eb7555d54cc1b56ec03"],["/tags/命令设计模式/index.html","fb8abca5fcc941c627f93b04071fed19"],["/tags/外观设计模式/index.html","b8ea8289d087b82ac63376b98195bd2a"],["/tags/委托设计模式/index.html","b9294fc5a610fc8b335115330a9138f9"],["/tags/对象池设计模式/index.html","da969d22529abcf1050a117928891c7f"],["/tags/工厂方法设计模式/index.html","5143f9b9d9f90e1e2a0f4264b3228953"],["/tags/工厂模式/index.html","1fb53a8006062f46c3ac451288c55245"],["/tags/工厂设计模式/index.html","4f1643d7a395191974a74990a940383d"],["/tags/懒加载模式/index.html","6791ec977a3b542169a45c8a9a83a460"],["/tags/抽象工厂设计模式/index.html","81316e8aa7f940888c4090549ea72f94"],["/tags/构造函数/index.html","b99a81b75326744bdb8e50cd64f20433"],["/tags/生成器模式/index.html","4b06529ffb6debf28c2d8486bf5ded94"],["/tags/用户体验/index.html","41170037c1aadaeace2f62716de44a81"],["/tags/自动化布局/index.html","824924d846e74cde09129d1fa510cfd6"],["/tags/自定义转场/index.html","b8bcf2a8b78c81bbdea2404dac318cfb"],["/tags/自适应布局/index.html","12a7f50769487b4642ed6b525e727cc3"],["/tags/设计模式/index.html","65da9f53a4d1f3f1e0a0a887a16d3091"],["/tags/设计模式/page/2/index.html","6100e2b2771e58d39b055877e2cd46d8"],["/tags/设计模式/page/3/index.html","b42340ec85c54e9f13f5b145a33053fc"],["/tags/迭代器设计模式/index.html","73e15e906a8ba5e6ea978397a80d5cc2"],["/tags/适配器设计模式/index.html","1666068e012505ba7b7edbae6dbb1b16"],["/tags/静态工厂方法/index.html","86490bfe9454a3106388c0978d63d1c4"],["/产品开发的幕后花絮/index.html","afc549664482fe8c3af09822ff4eb230"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9efa4ebb34a22e330754ff3bb6966718"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4e65c55b8df7e857ad64c6e5cf1d906e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a8fe8973ba1a808e99fea2f0b80a9651"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2904c23c59516c6ed320065136e02030"],["/在Swift中创建自定义集合/index.html","584d85464e4dc4caa29649c119194c83"],["/在Swift中处理非可选选项/index.html","97c79370261b3f090afb21abed58f73d"],["/在Swift中重构单例模式用法/index.html","c5bf5c8077b59f110cb4b98575860061"],["/揭秘 WordPress Hook 系统/index.html","98f709f6448a3be11aa1174e785525a8"],["/比较工厂设计模式/index.html","0fb46b766af95ec57b2d652adc95dba0"]];
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
