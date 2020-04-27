/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","f6c8fe404f23fbd45f5564176b4b7400"],["/Swift Lazy属性初始化/index.html","14fa7ce82f775b82eac9bd9202117c99"],["/Swift UICollectionView使用指南/index.html","faa4d3e2f2b17d8375a371de87054738"],["/Swift中快速简单的工厂设计模式/index.html","9af36d601da62fc3468e93a0cf43539b"],["/Swift中构造函数与静态工厂方法的比较/index.html","8a9ca38e44a3ffded7b6381b4dc410ea"],["/Swift中的懒加载模式/index.html","ad9fbe2e9ba509d59d0d1e0d0e0386d4"],["/Swift中的模块和挂钩/index.html","881abab03adb889c4406d65d62205690"],["/Swift使用布局锚点添加约束/index.html","01b63b5d7f392cde9a829844217ed7c8"],["/Swift依赖注入设计模式/index.html","b89582aa4b2a9466dac2fb7ed29287a5"],["/Swift关于Dependency Injection (DI)/index.html","b38d92100c350a584c1fed6fef99dda9"],["/Swift初始化模式/index.html","38a67d43378989d72a10cb0950d272f5"],["/Swift单例模式/index.html","ee9b96abc695fb805096bd455f04803a"],["/Swift原型设计模式/index.html","8c1097871b4cddbedb3ecc191b997c9e"],["/Swift命令设计模式/index.html","284267c6d0356c9bfed65d7a90c83133"],["/Swift外观设计模式/index.html","155ce41bbf68b1d7039d2d91ce319144"],["/Swift委托设计模式/index.html","0fc6e52e2ed90bf7421fec2b101e6ee9"],["/Swift对象池设计模式/index.html","a734f87d97d26e50fc662f918c4f1e7d"],["/Swift工厂方法设计模式/index.html","bbd41b7bdf32e03f24baa1341c577bd5"],["/Swift带闭包的懒惰初始化/index.html","cc18e437d35e73b083fe899ceacf0ab4"],["/Swift抽象工厂设计模式/index.html","599a6aa1da47787d2f4282377dcd9c69"],["/Swift掌握iOS自动布局锚点/index.html","5061f11d4cc5d9e64be3174a646810ef"],["/Swift支持旋转的自适应单元格/index.html","9a6148669ff2661fa907828894f66cbf"],["/Swift生成器模式/index.html","bb53e0d8e890ffd1a9e6ea33ac052304"],["/Swift迭代器设计模式/index.html","97df9460d525f6356a07c24af56be8e0"],["/Swift适配器设计模式/index.html","04ebdc5416d10ea34b3b5105403755b3"],["/Swift静态工厂设计模式/index.html","a8ec6a9f59ba15aad61db7d472f8f03f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","694fcdb91dca97f1b31ca4037c70c655"],["/UIKit初始化模式/index.html","6a7c01e8fe717df39a273071637a937f"],["/Ubuntu18.04替换国内源/index.html","3c16807ef0308fca72e773098c03b4d2"],["/about/index.html","f5d8c3c987582d9b68ed5dad7f394013"],["/archives/2020/04/index.html","08413621f92a901447634bfe0523db12"],["/archives/2020/04/page/2/index.html","c41b9e9f44c2e921f9b6c9afd7f9777e"],["/archives/2020/04/page/3/index.html","2699adaf45b7614e2febf63502a9ac63"],["/archives/2020/04/page/4/index.html","e6a7cdcb6e34ddbd5a7126bd9b738b13"],["/archives/2020/04/page/5/index.html","98a59cf58e2d1806bde22878b3c33062"],["/archives/2020/index.html","39f502e607141f5a24746ab19665aac5"],["/archives/2020/page/2/index.html","018bdbc41d17a5cfe57aa2d218dddba4"],["/archives/2020/page/3/index.html","127252b1c4b8e3c04633815f6c62b447"],["/archives/2020/page/4/index.html","577346f9540e0be759ceea0b9c904d3e"],["/archives/2020/page/5/index.html","a24ea57fa488e02e17b2580e88b86544"],["/archives/index.html","0e68f38bcc2bdcd8ac7907b2aa4c82a2"],["/archives/page/2/index.html","9b76f9f2361c371803609fedea720201"],["/archives/page/3/index.html","a7320fc8bac15179a56a97f25b8a24f1"],["/archives/page/4/index.html","44a8096271821b7b2e9969d3f68d5ec9"],["/archives/page/5/index.html","8f5d55022898d76ff0b7dc2fe809df06"],["/categories/Hexo/index.html","9052849271cddba063a4cddae3b3c40f"],["/categories/Server/index.html","388ceaaec26727bd7e102a5b21dd4270"],["/categories/Swift/index.html","da9a5bf8bc35e5af551f9868d9fdecd6"],["/categories/Swift/page/2/index.html","935efba769618c5ed116d6f4c4e691a5"],["/categories/Swift/page/3/index.html","69ae1967ebe083919f322e4f4440cd09"],["/categories/Swift/page/4/index.html","d668c6f2212e3a2f514fee0fa745f4bb"],["/categories/Swift5-2/index.html","c8888bf81b4ecface378adf4d742a0b8"],["/categories/UIKit/index.html","49e19cf63901641f4c856de26f39925b"],["/categories/UIKit/page/2/index.html","eed5b272f778797c458f34a81a619b22"],["/categories/UIKit/page/3/index.html","a8232422bebdfe268accb26351d3e90d"],["/categories/UIKit/page/4/index.html","ba04d654e8244c8b15ac54620fa3c91a"],["/categories/Ubuntu18-04/index.html","713be4b25cb6d61752f2a98d7901d161"],["/categories/Ubuntu软件源/index.html","3a6f45c1667ce4d49ade77c11509ed9e"],["/categories/Vapor4-0/index.html","cae6b9720c3c1ae3b48560582305cecf"],["/categories/iOS/index.html","0a97a057f49937fd556d381696853012"],["/categories/iOS/page/2/index.html","4bf4110d553e23b967722fab42e08e86"],["/categories/iOS/page/3/index.html","814d29321ec80f960186cc06ee094bdf"],["/categories/iOS/page/4/index.html","c3c1ad95bafde076d2ba4356bcc57c9a"],["/categories/index.html","ebbec36572cf33d2a93fb50eb4af5474"],["/categories/用户体验/index.html","3ef1e5cc02f42a6c976120edcca5e37e"],["/categories/设计模式/index.html","bc95542dfbaadb56b11a9d09f49aa349"],["/categories/设计模式/page/2/index.html","594fa54c2d71ae24d4ad92aac6ebfb95"],["/categories/设计模式/page/3/index.html","e92e38fb1e5cefea985f3fb7efe70d87"],["/css/main.css","1398c4b1c2ec85e0d83f12dc57ee1a92"],["/hello-world/index.html","7ad5f614d5e6690b728167590881b610"],["/iOS自动化布局编程/index.html","87bb1c01901e13b90ad2c1a14c9c137c"],["/iOS自定义转场(By Swift)/index.html","c96bedec1ace9656e874fb71c39e3ce3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9a36d3eb65258bcdccf77ff3c5537314"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b730a4d2c0749b6b0d04ee93cc179bb1"],["/page/3/index.html","f1c7c2caae9d478608394c2a8290d529"],["/page/4/index.html","25358a042c75df534c77451cabb93aff"],["/page/5/index.html","7118f75c099c01b68f61a339bee3e835"],["/schedule/index.html","f5c6147a7a7a937dddcc1c79793b648a"],["/sw-register.js","f13b137b20347000deffcfc4d2d7ab17"],["/tags/Collection/index.html","bd8cfd50667c1bba1e1be9fd7522ccca"],["/tags/Collections/index.html","0383ff08ab0aceb97361145edff681cd"],["/tags/Dependency-Injection/index.html","567e77cccf78553a3781fc08f9b0e724"],["/tags/Modules-And-Hooks/index.html","ade33f8a5dea298dad9b5ef0f0294a56"],["/tags/Server/index.html","cd0b28a050ee2bd4c8530f66344651f7"],["/tags/Swift/index.html","f9100a0d823a87079b480d8f6c14a33b"],["/tags/Swift/page/2/index.html","7cfb2bb71ce0ea38263bf8ff8d773013"],["/tags/Swift/page/3/index.html","33fe686f9a9659905eb18da4b1560db4"],["/tags/Swift/page/4/index.html","54e51b7793c9e3e603fa7bb53b57492a"],["/tags/UICollectionView/index.html","baca0cc412a4347575f43cb8989ff7bd"],["/tags/UIKit/index.html","8356f6b1b1a659888144818fd0e4f491"],["/tags/UIKit/page/2/index.html","2c9d42075ccd3d91c25b44135415c087"],["/tags/UIKit/page/3/index.html","d8fa4eb35b2a118f91dfd88637052e30"],["/tags/UIKit/page/4/index.html","498fd6e9447cc02150b0fa772b6dca3f"],["/tags/UITableView/index.html","d00a3dca4da2baea86e26b41178ec8b9"],["/tags/Ubuntu/index.html","e306f30874296559675339634a5e1cab"],["/tags/VMware/index.html","04439de5d49c2a87b967a9ca6ea74bd7"],["/tags/iOS/index.html","ec8fa0d72072cb763ee8cf5f4bf3b5b4"],["/tags/iOS/page/2/index.html","d1c82cf6cbc43ddcf203e176de9c3eb6"],["/tags/iOS/page/3/index.html","3c1f44a1bb150a482572c6d52b81dae5"],["/tags/iOS/page/4/index.html","ad305ac020558485e1b7cdb01a229b98"],["/tags/index.html","1367da6a7bb97ae35c8589be95506eac"],["/tags/non-optional/index.html","58de762ca4d1cec96be6ac1ed8b6837c"],["/tags/optionals/index.html","3a8fa83e17e791bac132b89b5c3558dc"],["/tags/transition/index.html","3fb2a1a0b56206a40cf4bd663d840465"],["/tags/依赖注入设计模式/index.html","a4b358e099d697285428fa00519fd9c2"],["/tags/初始化模式/index.html","11978c589e962c9ffbafa081793a9d90"],["/tags/单例模式/index.html","c7458cc8f1bd07e85a9de7978033e0c5"],["/tags/原型设计模式/index.html","bbf4a1344c698bc2a1ae9359ecc518d4"],["/tags/命令设计模式/index.html","49221847111997af78cd00ea7306014f"],["/tags/外观设计模式/index.html","1a963e01b172953fd60e69d97d46b3c7"],["/tags/委托设计模式/index.html","e542428365056dcbccc625365f515cae"],["/tags/对象池设计模式/index.html","e3a9259279a5fb1853c9208fdb05f2ef"],["/tags/工厂方法设计模式/index.html","76d5cc7dc5583fabfb09a017289e4296"],["/tags/工厂模式/index.html","28be93d5bf2c20fce1145add5a7b4979"],["/tags/工厂设计模式/index.html","e3a538af8ec4ae3c02bc6242323fff6d"],["/tags/懒加载模式/index.html","0adb256dd7f4dafa3271145132ebfd45"],["/tags/抽象工厂设计模式/index.html","ca47465ff75157fd59e69b784d8d4b58"],["/tags/构造函数/index.html","067996ef22f3d2c1702a50c022190084"],["/tags/生成器模式/index.html","9fe850da76f3b625e26a4cf18f2a60cd"],["/tags/用户体验/index.html","852ea51925e8bfc78c764951efc2739f"],["/tags/自动化布局/index.html","1d3c0b75d2f55a6e54a5d82d03d9e895"],["/tags/自定义转场/index.html","4757f878c9989be6a3adcb7be8495573"],["/tags/自适应布局/index.html","5f0102a07b4839055aa71d0761172524"],["/tags/设计模式/index.html","c54669f472c5474c5b814948a5a1495f"],["/tags/设计模式/page/2/index.html","4350d8280fb006c874fd98dc3fab9901"],["/tags/设计模式/page/3/index.html","712cccb63a8c53d5e3b74aefc3c623f8"],["/tags/迭代器设计模式/index.html","d1bd5d42381088550af04d98d0ff2cb3"],["/tags/适配器设计模式/index.html","8c8067c9122f876fd5ab77564506e0eb"],["/tags/静态工厂方法/index.html","c214a4a4c54f0f18fcb2e53a78092318"],["/产品开发的幕后花絮/index.html","1cc56da153a8c80ffbc34f2abbddfc42"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","caca95953f4aeae674203ccd679f366a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","74900593f42af216af194061a7d4246f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3f52bed7f5973829dba9c4dec85ce34f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","62e2c068559184f914c8b3aeee50aa3c"],["/在Swift中创建自定义集合/index.html","38d95631586c4b04973e1233fba0e46f"],["/在Swift中处理非可选选项/index.html","e3b4d4e178c03972d5bb4d40da3e778d"],["/在Swift中重构单例模式用法/index.html","830a35146873a4c49b389695a0dd758f"],["/揭秘 WordPress Hook 系统/index.html","034a7ae0bdcb020aa1b560627c63481c"],["/比较工厂设计模式/index.html","2081c4d90dac8a151669be27ea6a87bc"]];
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
