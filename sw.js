/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","eca4ae172e6755497712ec28db8cc53d"],["/Swift Lazy属性初始化/index.html","7bb7ddcbde84c11170cc77802531402d"],["/Swift UICollectionView使用指南/index.html","7a441e883c4bb1bb5daf733b52b1834c"],["/Swift中快速简单的工厂设计模式/index.html","58aa177138f0023731ef6b5a8d2ebc61"],["/Swift中构造函数与静态工厂方法的比较/index.html","0f765c1fb7242faf27b19f70a9496fe7"],["/Swift中的懒加载模式/index.html","0283911c6ecf650dced54af7f79fde8a"],["/Swift中的模块和挂钩/index.html","f337655c6e877a16eeaf98ecbf503ccc"],["/Swift使用布局锚点添加约束/index.html","201c53f33a145e3300ffa910a563f800"],["/Swift依赖注入设计模式/index.html","c5a5051ecab25339fb7f6f3672bf6792"],["/Swift关于Dependency Injection (DI)/index.html","d4b6a4b344637fdca9efc15b8cb09745"],["/Swift初始化模式/index.html","bce73743f90fed1d11f167db1c1b20b5"],["/Swift单例模式/index.html","e0d539b8e4317e0af3ff4effd3595564"],["/Swift原型设计模式/index.html","50f753f27671c9ec12ed4d4c914869c7"],["/Swift命令设计模式/index.html","a2245359287ff01a01fe627064378e26"],["/Swift外观设计模式/index.html","914826529745512bc105d6adfbe40c3f"],["/Swift委托设计模式/index.html","de76430c8d0a1990807650f357312d58"],["/Swift对象池设计模式/index.html","9f85380cb9f3b0f5d8642719f152e4f2"],["/Swift工厂方法设计模式/index.html","67f96924833a8ff9132688b087162a8d"],["/Swift带闭包的懒惰初始化/index.html","01a478758c021e697c9d5a0ecbee3c70"],["/Swift抽象工厂设计模式/index.html","28f2070ccf45539d040aa277f9aa0321"],["/Swift掌握iOS自动布局锚点/index.html","41e6e9810485ad7e66e91c022fd4659d"],["/Swift支持旋转的自适应单元格/index.html","1a82b61ce4ff18ad34d7d4b500173879"],["/Swift生成器模式/index.html","7732a5658445a976e9f8b91e535ecb11"],["/Swift迭代器设计模式/index.html","f37b25b4826b064ce96a0da512437949"],["/Swift适配器设计模式/index.html","af20c5c6da427327e2c246bb4dad9051"],["/Swift静态工厂设计模式/index.html","ff322e72111737e542d494bd9420cb66"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","bfe0644f72f73857fa89638132b19842"],["/UIKit初始化模式/index.html","427148d6eb8d23c6f28969027a69c0e8"],["/Ubuntu18.04替换国内源/index.html","f4d27c14164468847752c13a1b27d490"],["/about/index.html","60a593ee7e8bfe67ae400b0e7064a18e"],["/archives/2020/04/index.html","d011324dfbe43a29e8b26e6a36b8530a"],["/archives/2020/04/page/2/index.html","1c31b4604b2941e815ef6b6f1de76de2"],["/archives/2020/04/page/3/index.html","2df75c7b2ea03639b8b52797ead188ea"],["/archives/2020/04/page/4/index.html","85f2e10a691380338e64bb6efb59081b"],["/archives/2020/04/page/5/index.html","1068ad53aa0ea256ff4ff115b5824250"],["/archives/2020/index.html","a16529b60bc570e71f6ba3d4decb71ee"],["/archives/2020/page/2/index.html","17609f85abdd0cdeedf993faf1b73a12"],["/archives/2020/page/3/index.html","d9ba631049351076881f285d13976757"],["/archives/2020/page/4/index.html","0f20525711019e0d554a2a8a84e7aca6"],["/archives/2020/page/5/index.html","04700c8890486538b0a6568904f55af6"],["/archives/index.html","8fa4cc8dcc8fb3738bc720e31adb9575"],["/archives/page/2/index.html","8260d0b1e53dd18b6d3b9e64016a615e"],["/archives/page/3/index.html","775e7ce159645931e71fa00875dd93d5"],["/archives/page/4/index.html","8ffd0fede24da8ef36e710df82e557af"],["/archives/page/5/index.html","f89119ff972fe9ce0edc2267630a1db4"],["/categories/Hexo/index.html","76cca12c6edc75bfe0e0eb111862f3f9"],["/categories/Server/index.html","4c0a26d9cdca5b7ab940a4d31f4c7f9e"],["/categories/Swift/index.html","bf27c20a3f878e9c2da69a2257d61a50"],["/categories/Swift/page/2/index.html","242b353048550cecd4f4bd173dca9e52"],["/categories/Swift/page/3/index.html","9008903a6b13dfefe82d1dbc313fb767"],["/categories/Swift/page/4/index.html","a0ef97d9e3ee9dba9993b94af33c33d4"],["/categories/Swift5-2/index.html","b9a398d8e0a09e9d1bec782cd1d8f1f4"],["/categories/UIKit/index.html","814d2d2fa4fa636701009c293f03dc77"],["/categories/UIKit/page/2/index.html","b277721e81c55c6549b291dc3e274dc0"],["/categories/UIKit/page/3/index.html","691618e5b33360f556c243f02d671cd7"],["/categories/UIKit/page/4/index.html","15c66f333d7c6bec47e81df2b3eb8f04"],["/categories/Ubuntu18-04/index.html","9789783c2784a07a64f6e4b73628bb18"],["/categories/Ubuntu软件源/index.html","d4f4552234663ef80541714528f48688"],["/categories/Vapor4-0/index.html","fa949b57acb0063ef5af456cb20bc676"],["/categories/iOS/index.html","b979532e729e5763b0baf23d3f0b758f"],["/categories/iOS/page/2/index.html","131e7a0c20ef165f022c6d3cde21c72c"],["/categories/iOS/page/3/index.html","4c03840e75ba2ef448ddb98e208c67a2"],["/categories/iOS/page/4/index.html","3842b429301966d6fa298c24221b20e4"],["/categories/index.html","488d0154a332cdc8e6aa5796fc6478dc"],["/categories/用户体验/index.html","3e20b1b0a8ca3438edc92269f1660f07"],["/categories/设计模式/index.html","1089b1edb00e576c91107892270168ea"],["/categories/设计模式/page/2/index.html","934899fe5ccdc716de112a5a79068992"],["/categories/设计模式/page/3/index.html","1787e66ad5d78dee34c703a66048c47c"],["/css/main.css","74ea3d67410c81c5c6eab427f26cd7c8"],["/hello-world/index.html","ebe6586951a4c87124d38ac45c0ef772"],["/iOS自动化布局编程/index.html","ee8a21f2c244856e5b9c127687cddf21"],["/iOS自定义转场(By Swift)/index.html","1372e9024b720ad8c30981402f1e9406"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e769df59056036a6de6c969186481cdd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5797df617dc16b2fe64c1ef0bce4020a"],["/page/3/index.html","4f068913e9f9b43fe03e7ad48af93e1f"],["/page/4/index.html","440deb44133a1b1c8519f528fd07a2a7"],["/page/5/index.html","eb43f196252874649edd3a80c97e8545"],["/schedule/index.html","7672183b60a0b6c68fb2a42564f6e248"],["/sw-register.js","c9e6f877b658b1fd9ed743c69adf75c1"],["/tags/Collection/index.html","2185d3b0cf674388beb44b3bfc966530"],["/tags/Collections/index.html","4e108803349f69ae3de8d60f62bb0c4a"],["/tags/Dependency-Injection/index.html","1f2ae3d5e5ca7cd3d33d0e170f7baeea"],["/tags/Modules-And-Hooks/index.html","925da1032657bc7bd6d87ec7723e5faf"],["/tags/Server/index.html","4013d2ee40290d9fa78dcd1887017cca"],["/tags/Swift/index.html","276508193a3280f77f1e40884fa3cda4"],["/tags/Swift/page/2/index.html","4cad1303149542e84ac35eb9400d6923"],["/tags/Swift/page/3/index.html","2fd936d07fdc14240d684b4621cb1163"],["/tags/Swift/page/4/index.html","c3577321570027454ba9b0a115ed82d2"],["/tags/UICollectionView/index.html","03e5bc658d7bdd886e204c30ab4518b8"],["/tags/UIKit/index.html","961283399a971ac7deb09805c759517d"],["/tags/UIKit/page/2/index.html","fcdb150e251c06fbc36203421b7220c2"],["/tags/UIKit/page/3/index.html","43b2c8cf55467d4ee9f124ceea0c6106"],["/tags/UIKit/page/4/index.html","6fad10000a732979b1c17208111142d8"],["/tags/UITableView/index.html","3b9cd0b8ead8958e317c5b393844b227"],["/tags/Ubuntu/index.html","e1d15b123998ba6af70c5df6db2ef39e"],["/tags/VMware/index.html","9b5ac627123e48cae10c375add3b0dd5"],["/tags/iOS/index.html","27e69956414e4cd7d02c6f79be6e2e3c"],["/tags/iOS/page/2/index.html","e857dec92de2e7070d03d3885284eb7d"],["/tags/iOS/page/3/index.html","84684c14ebccdc244b69aa1cc56b1250"],["/tags/iOS/page/4/index.html","388c54504889f15b8ff68df7a2d43e13"],["/tags/index.html","3f72e7b26fc129d348ecc7c40f2c1224"],["/tags/non-optional/index.html","4a3d26bd372533ca50ce495f35f80d5c"],["/tags/optionals/index.html","d575dec14a687ea0b26c2e66ecbfec15"],["/tags/transition/index.html","3c4b9c4edf033b0a09a2e5396f801bb6"],["/tags/依赖注入设计模式/index.html","9b828d3fc98668209c2d380b1cea5817"],["/tags/初始化模式/index.html","d23747432b93bb48f972bd4810a78200"],["/tags/单例模式/index.html","055d38ce75cad7b65e8033d98b969c8f"],["/tags/原型设计模式/index.html","f4a5fae81b57d144316b1906654ee4a2"],["/tags/命令设计模式/index.html","5cffc21071f73488edeac74760ab81f1"],["/tags/外观设计模式/index.html","640083183536c0d5875e6791f1235838"],["/tags/委托设计模式/index.html","b58b2f1f257edfc9ca7d1e896fa1927f"],["/tags/对象池设计模式/index.html","377df1eebe96d8b98979978fb655f8f4"],["/tags/工厂方法设计模式/index.html","56e5e039f141b381f24b7896b7ee763f"],["/tags/工厂模式/index.html","93b3fa00cc1fb05d747b7514009aec3b"],["/tags/工厂设计模式/index.html","16b1fd6a1e8863f27802fc06c08eaef3"],["/tags/懒加载模式/index.html","779dd8ca2195653320c4b1ec5dc5e6ff"],["/tags/抽象工厂设计模式/index.html","b51620c62b2398ae3339930b01eedfd7"],["/tags/构造函数/index.html","d4ba235da792ebb3ff30c9bf9444d804"],["/tags/生成器模式/index.html","972afa543c5cf2370e83f97fad2a216f"],["/tags/用户体验/index.html","95ca718979992acc789a61161c89b534"],["/tags/自动化布局/index.html","4f45bf9bef7f3331fd8cd990991732ee"],["/tags/自定义转场/index.html","e559d2d6e29b51783988016f165874f7"],["/tags/自适应布局/index.html","93f9148e2db337a804944d67acdc726e"],["/tags/设计模式/index.html","86bf47a112e351b0df83015c86f18b8f"],["/tags/设计模式/page/2/index.html","867c13591749f6c03f32bd59e6cb12da"],["/tags/设计模式/page/3/index.html","b2a323c0037a2791d887bf7a7e8c6d64"],["/tags/迭代器设计模式/index.html","f705858f76d617cb0287068f2fab11af"],["/tags/适配器设计模式/index.html","515a6c4df1a9471ec8b98ce5400a4883"],["/tags/静态工厂方法/index.html","a97480926ea37f36cc63e4b4655ae4aa"],["/产品开发的幕后花絮/index.html","f9beb07c59b95021b18fbdba11c42f21"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","aa7cabd78b86ea37ce120f5947516c5d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","5ddd7d52ac9d4b3043b7ef464d5e1b12"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","6b5cd8ff37b89cc293db5a8ff4fdd8d7"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","49382c2061ceb102e0b803956aceb424"],["/在Swift中创建自定义集合/index.html","224be6361dfb38219db9da57bc7d1727"],["/在Swift中处理非可选选项/index.html","5b4b14660f5b49680a36226221f47850"],["/在Swift中重构单例模式用法/index.html","33d554015ae9f6aa916f6ddd93e46f4b"],["/揭秘 WordPress Hook 系统/index.html","53e1e1cd2dbd028059888e7cbf818660"],["/比较工厂设计模式/index.html","bae67aa26a7dfb7fdb9ebd3e52e36074"]];
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
