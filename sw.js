/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","3bbd3a278723f67046bb707cd0562ad8"],["/Swift中快速简单的工厂设计模式/index.html","14e3273758455e0cc16df6b89b1adb3b"],["/Swift中构造函数与静态工厂方法的比较/index.html","297c7f230cd668c1b7ab659a246ab058"],["/Swift中的懒加载模式/index.html","656e4d3cd1ee15247ddba6b8de953cb6"],["/Swift依赖注入设计模式/index.html","15517b4276553aea997fc260e870dff6"],["/Swift关于Dependency Injection (DI)/index.html","565773d03c5099c362538a74573d289d"],["/Swift单例模式/index.html","7e289511d35afa31bacb628388deeb38"],["/Swift原型设计模式/index.html","503b91af44e8f12ada721b4c85877ff8"],["/Swift命令设计模式/index.html","e503f1233e6842160963cb28d36db9ee"],["/Swift外观设计模式/index.html","eaaa7d043aa611b05d42b4633ea846a6"],["/Swift委托设计模式/index.html","33d1b1f5dbe59c61067c5746198bc512"],["/Swift对象池设计模式/index.html","c0c40b3b22e703a0efbe4054d9d7d921"],["/Swift工厂方法设计模式/index.html","16cb640bca8ed698b53788deec9d2857"],["/Swift抽象工厂设计模式/index.html","04ff9b92a24167a11a32201da9970dfa"],["/Swift生成器模式/index.html","db3d77d01f2f5cbeef9f3cc1ebcaa966"],["/Swift迭代器设计模式/index.html","6298e2fef916a2715d04ba493aacf06c"],["/Swift适配器设计模式/index.html","209a4cae65f7eaafcc1cdcaadfd981ce"],["/Swift静态工厂设计模式/index.html","f0b92943ce2965b5b814b892776bec1c"],["/UIKit初始化模式/index.html","a49d64e2eecfeae3fa351998bf464271"],["/Ubuntu18.04替换国内源/index.html","17a761391081cf4ccce7e3c72ae066d6"],["/about/index.html","835309fdf3ef8ff1e286b9886f9ea04f"],["/archives/2020/04/index.html","815503546a8e2756a5be13667639b084"],["/archives/2020/04/page/2/index.html","3f1f23cbe361bbd03704fa947ccd8fcc"],["/archives/2020/04/page/3/index.html","dd8f6d709b93b0fe431070a28bf0b8ea"],["/archives/2020/index.html","03f57b73cae292790c92829914f2f911"],["/archives/2020/page/2/index.html","30891fb3b48caacaa021b53bda8951c1"],["/archives/2020/page/3/index.html","78d8e8a300b5013108b9453595a2d3d2"],["/archives/index.html","137cd1d7b8cacad3a34b4b58866d1b37"],["/archives/page/2/index.html","e5de2a10ed4bd416a0f3c73e64eeb15c"],["/archives/page/3/index.html","78bebfb8249b972ef501b6d1e041d32f"],["/categories/Hexo/index.html","b856ef15027ad2cabfc89a54b7d9a3a7"],["/categories/Server/index.html","3f2b914b4d4320e3448d2b10a748d128"],["/categories/Swift/index.html","95732be0923028cc114d958a7a48b7dd"],["/categories/Swift/page/2/index.html","a932c1158491155ed74689927acc9055"],["/categories/Swift/page/3/index.html","90479e9e302c99b918d80c7a465f5176"],["/categories/Swift5-2/index.html","f2d8df6ceafed5c11f3155518017b9ac"],["/categories/UIKit/index.html","46ba61e765ab33defd9cd3884fb21805"],["/categories/UIKit/page/2/index.html","6501eb3cedd5d971bb612466921090de"],["/categories/UIKit/page/3/index.html","e38a498afe25cbad5be02aa852d05b3b"],["/categories/Ubuntu18-04/index.html","f76e6bfc8f1b2e20e550420c180c0381"],["/categories/Ubuntu软件源/index.html","bc47f822430047b88ed069300a7f9a8c"],["/categories/Vapor4-0/index.html","db6b96c6730dfe9902efb5cc772d9bee"],["/categories/iOS/index.html","c777429ff7f401779d59488767008eda"],["/categories/iOS/page/2/index.html","bd6aaeff66a918471b629648b51efaec"],["/categories/iOS/page/3/index.html","f7b72438bd93e71e89305040de5d9929"],["/categories/index.html","1c040a91f233092f024f6abb5ac870f8"],["/categories/设计模式/index.html","27a459ba749410f75a45db96cd8e81b2"],["/categories/设计模式/page/2/index.html","a9730cd22c41a5e0a7b25deace9aab89"],["/categories/设计模式/page/3/index.html","062092c7ce099da9e605d11c5f6a954f"],["/css/main.css","5a5dc07a0b39d39b1b89a746b926bb29"],["/hello-world/index.html","5825d69652fce68a00e0cec3d9230242"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","fb2a9fa112f1c583cd6f7c6582fa87b5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","36f297d4966ec8f279ae06a72e341dea"],["/page/3/index.html","52987643c2b5ea843616ee6ee46237fe"],["/schedule/index.html","97b21859b7d9f6989ffccf384f610f32"],["/sw-register.js","7232a47fe4bd0fde5240dc26d5a95d88"],["/tags/Collection/index.html","6171814821f4de9210ee064f9bbadd44"],["/tags/Collections/index.html","6ed5568ddd639088b9ee79976eff0db3"],["/tags/Dependency-Injection/index.html","1f421eb269296bc36b48f74cdf145732"],["/tags/Server/index.html","0a11593e9fc810e0b11bba40cb675178"],["/tags/Swift/index.html","6fc2f2948061d930a19fba284fe7b4bd"],["/tags/Swift/page/2/index.html","cad804186a189cb4fe66d5950b148ed6"],["/tags/Swift/page/3/index.html","60bca79376108885f647135f3ab1d612"],["/tags/UIKit/index.html","e39f859fab68724d47f4c8328390e682"],["/tags/UIKit/page/2/index.html","cebf320768203244853e6c7474bf2ef8"],["/tags/UIKit/page/3/index.html","12c22841cd9baf08ee1d75c942c2f20e"],["/tags/Ubuntu/index.html","ab2b34fdcb35ad251ff3a39d4209769e"],["/tags/VMware/index.html","614eacc2dac2dcedff0362e065abb351"],["/tags/iOS/index.html","6b26f7e57ccd5607b3acbb2efe237979"],["/tags/iOS/page/2/index.html","8c5dac773382f89c0b0b755d38fe62c4"],["/tags/iOS/page/3/index.html","c10e1a1479b459e3b12f23442d11b473"],["/tags/index.html","3bc07ccb3603c945834a35f30a3fcb28"],["/tags/non-optional/index.html","8f1c59a926e383359bbc69bd56f958c0"],["/tags/optionals/index.html","1ffa4e4d57cc9ca6c071bcade8e126de"],["/tags/依赖注入设计模式/index.html","ea97aebd9f64fd5c8d9e5903cdd0f3be"],["/tags/单例模式/index.html","d7a8c70bd80f638ce6b57030d605a123"],["/tags/原型设计模式/index.html","09dc5b74abadec6d2be83c23ee85a637"],["/tags/命令设计模式/index.html","8735711d17906d26ff2ed27c9cb0dafe"],["/tags/外观设计模式/index.html","9609f137e7c73fdbeeebd63c9e83408a"],["/tags/委托设计模式/index.html","df477e2f2c99524fa2a2f132c385b349"],["/tags/对象池设计模式/index.html","08cea8568aef33de45d015cd7e759f44"],["/tags/工厂方法设计模式/index.html","8eb25148076642b78094a22f9e00f128"],["/tags/工厂模式/index.html","d1e8cfcc2bfea4f0e4f6c38098685cc5"],["/tags/工厂设计模式/index.html","fc6635185fe03da62566fbf99874cf9e"],["/tags/懒加载模式/index.html","81a9a27aeb9c2875fb384620da8daea6"],["/tags/抽象工厂设计模式/index.html","90f37d050f36a488e57b5697e9e71ed6"],["/tags/构造函数/index.html","17c388245cf76bbf7fd2621f38d71278"],["/tags/生成器模式/index.html","1102710292883dc809196c12c3c2fe62"],["/tags/设计模式/index.html","63c63d31f4aef0c09e42866163cc31ce"],["/tags/设计模式/page/2/index.html","89e45a3fd65a012666f6103392e1fa7a"],["/tags/设计模式/page/3/index.html","a852d1b90426b68516933d8991c22545"],["/tags/迭代器设计模式/index.html","a32a08d9f37412de551a0057a529a469"],["/tags/适配器设计模式/index.html","4a4a5e77ed3a6e58fbca0914e31cad4c"],["/tags/静态工厂方法/index.html","860e19c0eb621fc40dce6c100856d385"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","dced31d798bd678007038ce452c0ea3d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b4d9c66f46cb88e32786e161ba5bd77f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","74f6a07076fcf3c25687151e9e8540d6"],["/在Swift中创建自定义集合/index.html","4ac2a7d9e54c02073941d33d3537da29"],["/在Swift中处理非可选选项/index.html","c3f6be060c253a76ab955b2d9ea0883a"],["/在Swift中重构单例模式用法/index.html","8e9e78339004c7cbfa77827eea8a9603"],["/比较工厂设计模式/index.html","9808aee4b4c29841ba2511bed724a46d"]];
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
