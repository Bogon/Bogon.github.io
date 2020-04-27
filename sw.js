/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","42723b2d0c09cbc6743a529dbb5fe6b4"],["/Swift Lazy属性初始化/index.html","d95e7ccedd6a2a1db3877e4f1cf1fbb0"],["/Swift中快速简单的工厂设计模式/index.html","e255877e4c53a546fb6aa7474d6df622"],["/Swift中构造函数与静态工厂方法的比较/index.html","b8589c1bea398d3e5d12b50b5f7c112c"],["/Swift中的懒加载模式/index.html","8aea88ab0c1903a1ca0b1345302ec247"],["/Swift中的模块和挂钩/index.html","a20bee4ae5f4f5bfb16903e1be8340f6"],["/Swift使用布局锚点添加约束/index.html","350a80ab26c11ff57d9c988f3517b6e0"],["/Swift依赖注入设计模式/index.html","fa38b0549074e1c186c00ac65b22a652"],["/Swift关于Dependency Injection (DI)/index.html","56050845022f29458f79e8dd5247987f"],["/Swift初始化模式/index.html","66f6389af1ac9ed1420d375d18c643f9"],["/Swift单例模式/index.html","0827ddd44ce3601065aaab30ef98a875"],["/Swift原型设计模式/index.html","f265697f7f2701cd6cd1e8f541a279ed"],["/Swift命令设计模式/index.html","b5c838ea9bdc6d63560b7c06659d432a"],["/Swift外观设计模式/index.html","cf853259d4cd3bd28c51b837f3fc5012"],["/Swift委托设计模式/index.html","a2d041c05ddaedb21d129998c8a23d1e"],["/Swift对象池设计模式/index.html","24986548561117ca2c77ee11bbe05280"],["/Swift工厂方法设计模式/index.html","d6b95688850304bfece7ff67cddaea6a"],["/Swift带闭包的懒惰初始化/index.html","50c1d80aa9bc86b9c3def3cbe0197ff9"],["/Swift抽象工厂设计模式/index.html","f9fcbe3833b2dca230aa560a0a3313fa"],["/Swift掌握iOS自动布局锚点/index.html","f85e01f57e8b3313b1f8bf66bfd0662c"],["/Swift支持旋转的自适应单元格/index.html","54120e401e8dbfe1bb88478658242eae"],["/Swift生成器模式/index.html","341d7eb8d3195bbaec5bca3b45f0b11f"],["/Swift迭代器设计模式/index.html","789c5d8141168104c3bd6b603966e541"],["/Swift适配器设计模式/index.html","cdb1f392319401b0a89510e713972413"],["/Swift静态工厂设计模式/index.html","3a103d9288a7bd8aa00ae0be62e7c54a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e9a800a33af979a4fe8dbd008bae76f4"],["/UIKit初始化模式/index.html","1daf8a3291de53998b55c3c6e359d5a4"],["/Ubuntu18.04替换国内源/index.html","1d4aad07ad94b527c4026d4e4473ca3b"],["/about/index.html","a1e75d30f76fc78b039354d2cc8a37eb"],["/archives/2020/04/index.html","9fb32e4f958e99780831e3e27d05f326"],["/archives/2020/04/page/2/index.html","3d50105487b3c0d759b51d01aac46b28"],["/archives/2020/04/page/3/index.html","60d636cb93301e9527a9e063c7bec7e9"],["/archives/2020/04/page/4/index.html","4fd20280465ae6d5eb8b64963187f314"],["/archives/2020/index.html","58a456d264e138d952529b9c525d4df8"],["/archives/2020/page/2/index.html","acb42762f60143befae84f2e44769754"],["/archives/2020/page/3/index.html","cdedb543df1cce26217a1140dbdbf4ab"],["/archives/2020/page/4/index.html","9b4b0d88d96f5e49756743087d487eff"],["/archives/index.html","55caed9d5e22be6d7738b170cc289a94"],["/archives/page/2/index.html","ce4e88321143d10e3a357dba47d0ff16"],["/archives/page/3/index.html","5189cdb5bace9b850eb227c5f5b24cb3"],["/archives/page/4/index.html","9c7b89fc516c5e5d7ce04be7b117bcd0"],["/categories/Hexo/index.html","dc2f6a38610358f6f0f0edd741a0c748"],["/categories/Server/index.html","c55bfbef478d51a579b2c597e38a403c"],["/categories/Swift/index.html","fe9e2d74a58431bf24696203ca626615"],["/categories/Swift/page/2/index.html","ce773ae69b4b1f52655f32df861efcae"],["/categories/Swift/page/3/index.html","c5f31147b973bcafc8a512dafdb8252b"],["/categories/Swift/page/4/index.html","0bac3b00d46836261d67af964587f8e6"],["/categories/Swift5-2/index.html","886b99abaa5fce68e04f7e48c634a3c2"],["/categories/UIKit/index.html","233768072af71e265534a434fb800bc3"],["/categories/UIKit/page/2/index.html","06b25f447ba0787eb1baf930c6734535"],["/categories/UIKit/page/3/index.html","1928289f1b766a4680ed51a858292dbf"],["/categories/UIKit/page/4/index.html","48c1dd27e5fabf162032e0f5134e022f"],["/categories/Ubuntu18-04/index.html","86a4777b6fa4742b40212c0c262a381d"],["/categories/Ubuntu软件源/index.html","181af8c707c5bfdbad8161fed78de108"],["/categories/Vapor4-0/index.html","b906d6705d996be4481218d2a7bd2472"],["/categories/iOS/index.html","a47978511113c17cfeee66ffe5f6accf"],["/categories/iOS/page/2/index.html","d8c58ddc4e75ba281b9a9f3f48f00fb8"],["/categories/iOS/page/3/index.html","29541b08320d86938f449f07e736c836"],["/categories/iOS/page/4/index.html","01bd140eeef8bd35382ebab238882760"],["/categories/index.html","195608b6b75c844e8561fe0eb592d670"],["/categories/用户体验/index.html","beb43b49fd3a5fc673695b7cf6ce9cf6"],["/categories/设计模式/index.html","9020a4a56526be119c59864f060b11c0"],["/categories/设计模式/page/2/index.html","29855249839acdf571cee56ee8b8fd7c"],["/categories/设计模式/page/3/index.html","b81b271c6c095d3fdea801235c5c68de"],["/css/main.css","82ff4e93b34f0ea9e360320dabfe6b3e"],["/hello-world/index.html","f8100fa3b5fac532e6512f43b98788fb"],["/iOS自动化布局编程/index.html","64f161738451538283c4232d56f3c2f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","518ba9408dd62e52f962996225fd0417"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0319c510fa0fcc1e78f8963445fcdedd"],["/page/3/index.html","af0228b1be53ed28617fa27e18bf3c08"],["/page/4/index.html","8eda4baf3ab332d91c23e8d0c79277df"],["/schedule/index.html","a6c7ed4c0dca2640d6b641cdd8e2645a"],["/sw-register.js","aa39d8ef5abb49c0154f3047beb0f1e8"],["/tags/Collection/index.html","46d60b8de4d1c9c53bee76e1eacdfea0"],["/tags/Collections/index.html","ccd499a347ba160e1193a57bcad1f779"],["/tags/Dependency-Injection/index.html","88fabdb26810922c7a952f1eb6c4d256"],["/tags/Modules-And-Hooks/index.html","0b2c323c028e09b89fd9651fed5c717b"],["/tags/Server/index.html","110da45bd1a926c5bd30ef90eb6cb132"],["/tags/Swift/index.html","81637fce8f71868bd210ba9926095ac6"],["/tags/Swift/page/2/index.html","48868886fc6b36c5dc502f43bff2be98"],["/tags/Swift/page/3/index.html","1511d7f8f17cd43e661a7d5a337a84c5"],["/tags/Swift/page/4/index.html","4812923791eebaab379f98d91f0b6231"],["/tags/UICollectionView/index.html","3c30ebeca38eb6fffa85d335e996cd11"],["/tags/UIKit/index.html","29b3d69e4f958cab06c128bdac4c5da8"],["/tags/UIKit/page/2/index.html","a39b9af13cc601be07d2fd600e6b3c0d"],["/tags/UIKit/page/3/index.html","4a7deb57be3af98c37c1c8cac8de5843"],["/tags/UIKit/page/4/index.html","2024751e8f80267b4735b358d98b25c5"],["/tags/UITableView/index.html","8ca074ae1ee1f733072535fda0a6e3c3"],["/tags/Ubuntu/index.html","54ac676ec1247e840872b815bb45dc85"],["/tags/VMware/index.html","11be4dd5153e95f589efdc35af937f78"],["/tags/iOS/index.html","39c2eac98ab54129bb1472a50d70b84d"],["/tags/iOS/page/2/index.html","92e72a78f9b872bdc795e6b35a7a9d9c"],["/tags/iOS/page/3/index.html","84a532d11bf4f1db173d58e96e761e56"],["/tags/iOS/page/4/index.html","2ea68a227d99c90dc2f86d702130d0d6"],["/tags/index.html","1bc84fbaa4cf1256af13f1d58334a35e"],["/tags/non-optional/index.html","8d8f0af5ee5adae717d4b857623a0372"],["/tags/optionals/index.html","c39003893225cc668ed3fba895ccabba"],["/tags/依赖注入设计模式/index.html","02cab3571770c080caa063bc1effb564"],["/tags/初始化模式/index.html","c3ae435ac778dfc5f4a39f670626cefc"],["/tags/单例模式/index.html","ca2211df81821020e01e242b0c69c86b"],["/tags/原型设计模式/index.html","11177878de81fecc3f8a0d725d07cd2a"],["/tags/命令设计模式/index.html","bdbfcfdc3d0459bd4abdbde12e773a77"],["/tags/外观设计模式/index.html","77a62f3dfdff603aa10219835f494a74"],["/tags/委托设计模式/index.html","9c01b1d991a4b5a44f5ba6815ae5bff3"],["/tags/对象池设计模式/index.html","bc8e217787b5ebfbda091738531cb690"],["/tags/工厂方法设计模式/index.html","31770f956e6eb6cbe152d5e0986b8e1b"],["/tags/工厂模式/index.html","d26e9fc3e7ea3f0987f557d38d8faabe"],["/tags/工厂设计模式/index.html","59b0598daa09a2b12604e0a8bb590b66"],["/tags/懒加载模式/index.html","4b57a5ee910a870690e9c2f9e2194aee"],["/tags/抽象工厂设计模式/index.html","5289300cf3032684508c38d411009f2d"],["/tags/构造函数/index.html","5bea8c8e97032b8254769dc4fc10821b"],["/tags/生成器模式/index.html","067ad04dca826a5cb216f58a8f04f5c4"],["/tags/用户体验/index.html","d0677cbf816bb172e9fa5432d01b09f0"],["/tags/自动化布局/index.html","5f6698f3fa384419fbe47d01679470a0"],["/tags/自适应布局/index.html","06f2da6a50305850d6c6fd084db820a0"],["/tags/设计模式/index.html","064ce7a7a9a8e5a2e3db48ec35e989c1"],["/tags/设计模式/page/2/index.html","95277386f3d22833b6792cae91a68a8b"],["/tags/设计模式/page/3/index.html","2613a02e6b98c8b9fdf647521357f889"],["/tags/迭代器设计模式/index.html","cc085a8f54dc24fe27eeb808ec49985f"],["/tags/适配器设计模式/index.html","da379accdadda14de78efa7ac0a98dea"],["/tags/静态工厂方法/index.html","195a9e01e3d1aafde1a95d3a812ade91"],["/产品开发的幕后花絮/index.html","15fd70d0a5a1f02c5612570a30e2e227"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","90a8a7a99a619a0ca0960c7242f63723"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8d66498412769dae4cf8d0542d23990a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","302ab033573e759a5e8bbb8cb0603aa7"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1cc203a56c6176e3911fa3ec68372f51"],["/在Swift中创建自定义集合/index.html","c5bace2244eda68339ddbe3d4f7a5a16"],["/在Swift中处理非可选选项/index.html","1005fd181a72cac902356597a7538d88"],["/在Swift中重构单例模式用法/index.html","772a599bb2524c08bafa5bf4b88f9e42"],["/揭秘 WordPress Hook 系统/index.html","4fe506f888e61ec9062a31e024263184"],["/比较工厂设计模式/index.html","43b7106275e0540509b1cd2dbbc49144"]];
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
