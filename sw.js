/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","ed05883f557051c26ae5366b7e90c508"],["/Swift Lazy属性初始化/index.html","6a654a10c3ca55d91aad03de1f123ed0"],["/Swift中快速简单的工厂设计模式/index.html","6d3fb330fc8c157911cc1d8e0d06bfd6"],["/Swift中构造函数与静态工厂方法的比较/index.html","17cda221a2662cbbc22d245b9ae9d549"],["/Swift中的懒加载模式/index.html","62f454c25e484f5038a4ff7893b0e31d"],["/Swift中的模块和挂钩/index.html","ccbc2c88a862deca58df287c23dc6320"],["/Swift使用布局锚点添加约束/index.html","7b5712e08b0105979c5765d612c5c605"],["/Swift依赖注入设计模式/index.html","685729dc24a77f81381bd5c487170a74"],["/Swift关于Dependency Injection (DI)/index.html","af2695a6d5d59590efd744036bf0cd60"],["/Swift初始化模式/index.html","51f73709f3707abeb86448748512299e"],["/Swift单例模式/index.html","a9fd3ac6a1e7a6e7cf8817ecc19055fc"],["/Swift原型设计模式/index.html","dbd13e77140da9f5f7348c3f0fb05202"],["/Swift命令设计模式/index.html","b1023d2dae06db284996c3a3c68eda81"],["/Swift外观设计模式/index.html","f5439efa657afc04e64e304573487992"],["/Swift委托设计模式/index.html","86f63085677fe620c374e8cb1654a57b"],["/Swift对象池设计模式/index.html","4cdd3738bc0ff2330ccee202e22e97b6"],["/Swift工厂方法设计模式/index.html","b2448beb7a8924064b45c5e02af0841a"],["/Swift带闭包的懒惰初始化/index.html","dc331026eaa39ab0b55de02eb78abdd9"],["/Swift抽象工厂设计模式/index.html","510e9631551031262ce47b0299858eeb"],["/Swift掌握iOS自动布局锚点/index.html","5276af93436c606ff969a145bd86b439"],["/Swift支持旋转的自适应单元格/index.html","d468ff38ee5a0d8af8759f6c238e42d3"],["/Swift生成器模式/index.html","45c2f89e3ff373028a6ea5354a4242cd"],["/Swift迭代器设计模式/index.html","16d06248dd35f19c9c90bcd625860107"],["/Swift适配器设计模式/index.html","09594ed761df2894e137d36d123ef136"],["/Swift静态工厂设计模式/index.html","e884ee99b69f78bc09d17df8c2f2048b"],["/UIKit初始化模式/index.html","9e8f3e92c0d4768bf41989c1fbb8dc56"],["/Ubuntu18.04替换国内源/index.html","80e5e6c6ab0cb56ca59685010a907fbb"],["/about/index.html","94c635dc297fde436b9e1e8e9e5b4f7b"],["/archives/2020/04/index.html","ddca09f48aa355252209b71324b44301"],["/archives/2020/04/page/2/index.html","352808fd78f3428920dd9705a9d90641"],["/archives/2020/04/page/3/index.html","1847d3058d851f6f173ac9f6b56d1f83"],["/archives/2020/04/page/4/index.html","464b9e9b2a219028359825656dd1e4fa"],["/archives/2020/index.html","fdb59f09649da0670487eb2a9f20c6e2"],["/archives/2020/page/2/index.html","d4be2b82fe0970b472fc921425f70e97"],["/archives/2020/page/3/index.html","61145800247f90f59717fd3333339826"],["/archives/2020/page/4/index.html","50383779fceef56e1a6a0d5d61ca82ba"],["/archives/index.html","18d4eea3568771624a3adcea1029b973"],["/archives/page/2/index.html","7fac23c1ab151262bd19885fff186e4f"],["/archives/page/3/index.html","f68d8a126c579f221692d6a67a7eb70a"],["/archives/page/4/index.html","89dc123bf7e9a64e9d23dc9332f846ff"],["/categories/Hexo/index.html","01d8ef4e31d0a3d64f74e6931dd37866"],["/categories/Server/index.html","8021c923d0ecaeb9f230bf06432f5d77"],["/categories/Swift/index.html","b25445500f093525a7e283884614dfb5"],["/categories/Swift/page/2/index.html","a1ea9c5e3dfe2168abd08a1407504412"],["/categories/Swift/page/3/index.html","5b4451f8346273239b8a79bcf7f5129f"],["/categories/Swift/page/4/index.html","17b826ea45718401b9cc5479d8a2cbe5"],["/categories/Swift5-2/index.html","5ade3b27e1108079370743caaaa19aaa"],["/categories/UIKit/index.html","a711396542fdd3d3b36b82448da77df2"],["/categories/UIKit/page/2/index.html","5b78c6a5a44c30f3b63448f3481f27fb"],["/categories/UIKit/page/3/index.html","9a3f9a0b1a4989a66d08f27d89d1a4ad"],["/categories/UIKit/page/4/index.html","9bb65d16e7d71a87bbae28ad1933366c"],["/categories/Ubuntu18-04/index.html","777fd2bd9cf904a5ba304edf7d57156e"],["/categories/Ubuntu软件源/index.html","3b71fb0518dd95e73ffa242644c624dd"],["/categories/Vapor4-0/index.html","2ced1d448b94d8e7d24023c3a77d48c3"],["/categories/iOS/index.html","24508f31deedd18a3753fe7a4ded3d42"],["/categories/iOS/page/2/index.html","ec63c9fa4707d4a3c5f2b98d099a2b47"],["/categories/iOS/page/3/index.html","81b41d44916951be94de3ebc9fb6c6be"],["/categories/iOS/page/4/index.html","97d0ef3aef413d621c8f4c74b3a40773"],["/categories/index.html","123cef515ea0e6073f7ff61f06f9e86f"],["/categories/用户体验/index.html","e1cbb1d8889cc443b6a9c49ec195bffa"],["/categories/设计模式/index.html","d4add2feede605fada029441abec9121"],["/categories/设计模式/page/2/index.html","ff22b0cc4e157a29e43f3d488ea99ef8"],["/categories/设计模式/page/3/index.html","0fc2634db6977f9f01e32b706eb93b7e"],["/css/main.css","c3abeb445994c05374f3103562086406"],["/hello-world/index.html","1c42c5999c7fa20f7653991fd8169eae"],["/iOS自动化布局编程/index.html","e612eed4372dc97b60ed7fd6d182bf3c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6e55fc509f2c38b80e6aaec6dc99f6b4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","83b0b58da22769e73020b200b6534d6d"],["/page/3/index.html","82792089d85254c07fd4271975275041"],["/page/4/index.html","831ec88f4b059fa9dfcda33ea7f5f332"],["/schedule/index.html","a7f7988614cb2d8818fb9c6bfa772a65"],["/sw-register.js","c109a0528cbf1e735e5ac6875faa7d2d"],["/tags/Collection/index.html","f20dbeb3e0b50b5b172546a865bc74ee"],["/tags/Collections/index.html","bb6d91449c729b77cd88fbf174efbf06"],["/tags/Dependency-Injection/index.html","b80ff1bcff36418c756045d726828103"],["/tags/Modules-And-Hooks/index.html","0ad90444cd48ef1a35524d5ff0aeb85c"],["/tags/Server/index.html","41010e12972b1036d59dd90568c68237"],["/tags/Swift/index.html","86983893bd48699eebb933ec276fc258"],["/tags/Swift/page/2/index.html","93f94a3ca8d471ea312f561cf9569d44"],["/tags/Swift/page/3/index.html","e82c79793c91102cc81264f426443dcd"],["/tags/Swift/page/4/index.html","bda62142c8cc5919b680c3085bdefaac"],["/tags/UIKit/index.html","5779b83a40c67909ece38d190ccab4af"],["/tags/UIKit/page/2/index.html","556e4a0de899a2aca315216d35fee2e0"],["/tags/UIKit/page/3/index.html","70f7996f01a5ae10e66dd8a5356a8389"],["/tags/UIKit/page/4/index.html","0de3ef84f77cc6cd07345217e9c9785b"],["/tags/Ubuntu/index.html","00ee53eff8d5611ce5911e98314e91b6"],["/tags/VMware/index.html","2f7d286cc1911eac4959d95747cf1faf"],["/tags/iOS/index.html","0738fff4a8cae49e151b5369c6af7ce4"],["/tags/iOS/page/2/index.html","3e8ac295158eefd49a8acce122c7a223"],["/tags/iOS/page/3/index.html","470e0025fa37182aa6ba2170fc3628cc"],["/tags/iOS/page/4/index.html","0f948bea3026961446839c9155d994f8"],["/tags/index.html","b20b4055138bed3f84f1e2d6d259cc3b"],["/tags/non-optional/index.html","e72cf59fc18bef4951c7b4b05ad28930"],["/tags/optionals/index.html","8e3ad3ea6ca814183be263563bafca4a"],["/tags/依赖注入设计模式/index.html","57a7e14dd4e031ddf53b377f1cc014f5"],["/tags/初始化模式/index.html","d8a41acb9fb2dc0c122d0ad44bd9acab"],["/tags/单例模式/index.html","51940bcadfa486b7028f822a6c0a252d"],["/tags/原型设计模式/index.html","ef6506996b22db34ec8cfa2ab116db3e"],["/tags/命令设计模式/index.html","55a305b5c40fe717e0cec49419df77ca"],["/tags/外观设计模式/index.html","26c9fb1336cd12aac3b7ff5614f79016"],["/tags/委托设计模式/index.html","6bea2c7c74c6dfbd00b3a43cde09ce9e"],["/tags/对象池设计模式/index.html","9b38ec650a7bfa348b7f87837d43bafc"],["/tags/工厂方法设计模式/index.html","76d51827103358b23f4f2a0600d591f2"],["/tags/工厂模式/index.html","7042e5fbfe4ba9f6a858a3f0ca9dfe45"],["/tags/工厂设计模式/index.html","09132ca52fa35fa84b15d8cd872ac0ec"],["/tags/懒加载模式/index.html","2538581b17f0b479bf17df46c3ae770b"],["/tags/抽象工厂设计模式/index.html","c8b44454a809731d012646050cadea42"],["/tags/构造函数/index.html","096311c55297fbda6fd5dc98931b9ee8"],["/tags/生成器模式/index.html","1dadfcd312998fc1a0ef699181e66945"],["/tags/用户体验/index.html","3f5040b00e4f208e1f078d314c6d319b"],["/tags/自动化布局/index.html","6a57007a0ca171c23d0ba518c8d653bc"],["/tags/自适应布局/index.html","ebf5e096637e378ff0bb9e07dcbf8bdc"],["/tags/设计模式/index.html","4ded62a9c679cabe2b540125b336fd5b"],["/tags/设计模式/page/2/index.html","121f62b67babfedde8ccb3239d1d7002"],["/tags/设计模式/page/3/index.html","d48711efda5e39ce0f437c9d54c2b849"],["/tags/迭代器设计模式/index.html","d80db7c7dcde35d4dfd95040e2890906"],["/tags/适配器设计模式/index.html","582425b3b70058a25a59b10809daa9ec"],["/tags/静态工厂方法/index.html","00cd728b8a4cdd900d7d7a8e68ceaacc"],["/产品开发的幕后花絮/index.html","83a513360bc1a1887bf66e84d886d918"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","7eba4b77fbb3f44ab952fb18b8299e0a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","11f1eca5d9962a7b4128c3d97f7ce396"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","beaedd3625414da5e1eefda058755003"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4bb8a3f757759048faf90511004ec726"],["/在Swift中创建自定义集合/index.html","5c3f346f0f93889c757d0e7d64c95a3d"],["/在Swift中处理非可选选项/index.html","2e053143b9aa8e97c898f81f55b060da"],["/在Swift中重构单例模式用法/index.html","a7f3091b7faead7efdca22cbdb3a9b86"],["/揭秘 WordPress Hook 系统/index.html","e3b47921bc7e8259022f92021e7c2a79"],["/比较工厂设计模式/index.html","a6368faf224a65b4176dfaf843b9bf8e"]];
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
