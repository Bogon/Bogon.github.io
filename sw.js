/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","109205b4136cbf11980dddd8bdc64390"],["/Swift Lazy属性初始化/index.html","a089fe5904509b8662278fe488681d77"],["/Swift中快速简单的工厂设计模式/index.html","e6ec915041c262cc1f871ef1927532fb"],["/Swift中构造函数与静态工厂方法的比较/index.html","9f1fe2bdf0c1a1fd40ca54ef269f0fb2"],["/Swift中的懒加载模式/index.html","1583cf35c200085f24965836bafec5b0"],["/Swift中的模块和挂钩/index.html","d46c257e7e0e116952bbc5518f7682c9"],["/Swift依赖注入设计模式/index.html","92f1bdb81760d1fc2d0e8aaabb253da7"],["/Swift关于Dependency Injection (DI)/index.html","efa8e6948c5627857330594730c69029"],["/Swift初始化模式/index.html","3780f331f0e2ed323a4d9338d06257a3"],["/Swift单例模式/index.html","38196fb72f7977fc5d19a9e8ffc2963f"],["/Swift原型设计模式/index.html","963d04c29e6864964d2accb3b2197b42"],["/Swift命令设计模式/index.html","584d6e4557135078f464fec1fee923c0"],["/Swift外观设计模式/index.html","5a616b648353f924f6407da832e5bee4"],["/Swift委托设计模式/index.html","1b46ab26c854a916ffeaa28d83558f48"],["/Swift对象池设计模式/index.html","75c508dc277d9edb5b9823ae713fd115"],["/Swift工厂方法设计模式/index.html","769f266447380dbdf0621dbd14642291"],["/Swift带闭包的懒惰初始化/index.html","6b8c7f2be2245fa6829eabff773bdfbd"],["/Swift抽象工厂设计模式/index.html","4a396c593524d1123784bea4f6158586"],["/Swift生成器模式/index.html","b69a0cc779cc824c472f9f86678de08e"],["/Swift迭代器设计模式/index.html","773572a118693717150f8e3daa92cd9f"],["/Swift适配器设计模式/index.html","9cff720e1a392d5bb203ccf8c62697cb"],["/Swift静态工厂设计模式/index.html","547c408c1a01f9f29075bb9f3855c1ef"],["/UIKit初始化模式/index.html","eba3174b361ba6bdbf24b8b7df2810a3"],["/Ubuntu18.04替换国内源/index.html","2a2cceba00509b6690fd32e464fcf608"],["/about/index.html","95ec39c80cee798eacb2eabb17f557ba"],["/archives/2020/04/index.html","68f201e5d0c485591ad46bc9f80c1a2e"],["/archives/2020/04/page/2/index.html","d1569a8938c27ad725f104a9a0bc4c6c"],["/archives/2020/04/page/3/index.html","1f195e0f7de1cbedae6653e44a9e7074"],["/archives/2020/04/page/4/index.html","65502a5038cd9818273f808140712884"],["/archives/2020/index.html","c6a7edc17d2bb643d82b581315a5c61e"],["/archives/2020/page/2/index.html","774d9ede4fd09b14c084f2fc582d79c1"],["/archives/2020/page/3/index.html","cfa9a310c3cd90d92a9d4e6549fc18ef"],["/archives/2020/page/4/index.html","1934f3784b0d9fe385aabafaa2efd9c9"],["/archives/index.html","1cb1ed41e53b80bd2168ca8ec0329697"],["/archives/page/2/index.html","5b1ec6f581c67350ca2fea71dd624ad5"],["/archives/page/3/index.html","bc87c9bb9c6bb9508f3103b7f6a40b2d"],["/archives/page/4/index.html","4619da06bdd581b006f0bd4e1aca49d1"],["/categories/Hexo/index.html","4e8a83e2619219e33d06e6b66ca567b0"],["/categories/Server/index.html","3c0df8fc35667d3773646451f7fc6fba"],["/categories/Swift/index.html","442b93e1bb10993b9b783e0a4f83a90d"],["/categories/Swift/page/2/index.html","128eee321d2dc1d24a71b8cdab150c14"],["/categories/Swift/page/3/index.html","4a754fc110dae25eb6834062702e757a"],["/categories/Swift5-2/index.html","19f1400981d40ddea00356109dde7f58"],["/categories/UIKit/index.html","f113248fbdf538df02357a1752970f35"],["/categories/UIKit/page/2/index.html","a78e23b89719c1e06c1f2eee6c901797"],["/categories/UIKit/page/3/index.html","db2b1e9dced0ffad755e550b05f6579f"],["/categories/Ubuntu18-04/index.html","5d764332e878783ab4d483045142549b"],["/categories/Ubuntu软件源/index.html","2f5efb3ff38273db4862a4646faca8a0"],["/categories/Vapor4-0/index.html","9cd3d855a7470a91f2c1e91e452f8507"],["/categories/iOS/index.html","a268442337dcb579a3050e9fe258c18f"],["/categories/iOS/page/2/index.html","67cada21e85219a8b6357961873f26c0"],["/categories/iOS/page/3/index.html","e420dd3d7b72583c831adc90b57be069"],["/categories/index.html","603cebe260934560113290f7c9021af1"],["/categories/用户体验/index.html","e6618691cfd10acfae3fe3b00a65d400"],["/categories/设计模式/index.html","f1c3a6febc7fcae302b4f545000572db"],["/categories/设计模式/page/2/index.html","0ef110266fe7c31acf9f7be9c082b414"],["/categories/设计模式/page/3/index.html","5eb6e721d4e653a4300222396949f852"],["/css/main.css","e631372c71e2dd5234c9a60350236c28"],["/hello-world/index.html","891c3d06afa599037a9f3b57619a61e6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8db5129738e28ac12d83c6caf1c81463"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1c93afb30bf08727291ddc331de10bad"],["/page/3/index.html","ae13c2cf72ca8799b2d0a29293c579d1"],["/page/4/index.html","47a5d1ce93622a2c13de13cfae7166c6"],["/schedule/index.html","8ebdee71de5ac719fa5e987954b7442a"],["/sw-register.js","06c92fe5392f7eb08af9b108e29897f2"],["/tags/Collection/index.html","189f57423f008eea3ceac72d17ae64e3"],["/tags/Collections/index.html","3e6ed689afe0cda7605028ab1a4f9c4b"],["/tags/Dependency-Injection/index.html","0f925a6d5df3d063e07ce8e6ebb31fb2"],["/tags/Modules-And-Hooks/index.html","0268695f1cee4cfcbf05a84656e3a427"],["/tags/Server/index.html","a4183ef684d3aa5e58250b4b8b37cb84"],["/tags/Swift/index.html","75a815f2d8748e4b04adb4cf7ef83260"],["/tags/Swift/page/2/index.html","1cec094a9a273cf6b6c93bc06ce8ec57"],["/tags/Swift/page/3/index.html","fb2c6c551d353c32f45ecd9dcc40c216"],["/tags/Swift/page/4/index.html","6f9858599993f1cdaaba576872a69639"],["/tags/UIKit/index.html","a2efa53779f61d1179b00d72f5878d18"],["/tags/UIKit/page/2/index.html","61e6a94e4d0041c08d34bb9d0fa0e212"],["/tags/UIKit/page/3/index.html","0099f632fe877a179e02628f5a8bf282"],["/tags/Ubuntu/index.html","fdb42064938778e28542b64a85e57e45"],["/tags/VMware/index.html","d816db22da499ba778037d61370d6706"],["/tags/iOS/index.html","5e2140bdc4ba41746481e85285485cb6"],["/tags/iOS/page/2/index.html","494b985e39fda0a061c690b572a157f7"],["/tags/iOS/page/3/index.html","991df018acce9871a639d2a7bf87e170"],["/tags/index.html","22a9dfd484c9b5c34530c6cf061d5031"],["/tags/non-optional/index.html","1fdbd1cc64ad3cd45708ff84f78d7ac4"],["/tags/optionals/index.html","d24f5c11fe6c4b5ff523b99e3d866243"],["/tags/依赖注入设计模式/index.html","90797357dc54cfeed37ca00c96e8ccae"],["/tags/初始化模式/index.html","c3a9ab5dd91e5e32bd4e2b63a23b12b0"],["/tags/单例模式/index.html","5a554a2871023524764f2a3acfd92925"],["/tags/原型设计模式/index.html","de6bd555167bdb3237fe2af41c25633c"],["/tags/命令设计模式/index.html","a83adea3d88ab19a9122860740827b25"],["/tags/外观设计模式/index.html","dd181617e04c562e45584d0b5ea9e2e2"],["/tags/委托设计模式/index.html","004cbfe6ec9965661abc00d2ab448b01"],["/tags/对象池设计模式/index.html","89ef20061dc4fd82d7874cb04d4fdf14"],["/tags/工厂方法设计模式/index.html","92e123266e70ea46e47f4f8067d31d45"],["/tags/工厂模式/index.html","f94e52a2c6b88b89721777d429ac6852"],["/tags/工厂设计模式/index.html","5ee4c2776b4ccf842604bdcf90ca7c26"],["/tags/懒加载模式/index.html","ed18d205516641eacdda595006d014b9"],["/tags/抽象工厂设计模式/index.html","ba265bdf515ae6447345651eaa40874f"],["/tags/构造函数/index.html","787d8e49da5ace283379a5cdad4e389a"],["/tags/生成器模式/index.html","f15690283f0a3874881f4e1d4505bd02"],["/tags/用户体验/index.html","a2e28fd85ef9d5388bb9733306bf0ee6"],["/tags/设计模式/index.html","521303844b289b0a9ee9a83e59781567"],["/tags/设计模式/page/2/index.html","f0b8f76a68eeb7f1dd6ae1ac338b5174"],["/tags/设计模式/page/3/index.html","109d7b2aebb9fc49da97a354f69d89e8"],["/tags/迭代器设计模式/index.html","9222d8335324777e24d36232fd431270"],["/tags/适配器设计模式/index.html","8d53d1518181fdc641f64a9dc47bc7ce"],["/tags/静态工厂方法/index.html","8f078d7a0790f3cc1241cfdb67efb636"],["/产品开发的幕后花絮/index.html","214e6cc55c80ce462a27de38e595dbcb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","8a2ed22c91b27963b86dc0f533041b1d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d4923bbdd9020184464b4cc2fc2296cb"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","98d8541abb8e3c065ccb49c39a743214"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c0079ca0f1d4b8fc429c65380c9a502c"],["/在Swift中创建自定义集合/index.html","045eabaee7e3ecbb11f47de77a2230df"],["/在Swift中处理非可选选项/index.html","824525bc22bddc95fe585add4d1585bb"],["/在Swift中重构单例模式用法/index.html","8ecffcf5a470aef64b6bf627a3d3314c"],["/揭秘 WordPress Hook 系统/index.html","56407a0f8761b1fa617fc9896c05bb25"],["/比较工厂设计模式/index.html","2d898e7f253ad6e427e37065356bfb2c"]];
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
