/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","822d4266b9fd6c36fb30db7aaf25be72"],["/Swift中快速简单的工厂设计模式/index.html","0f45f27397da911746addeb1549de658"],["/Swift中构造函数与静态工厂方法的比较/index.html","9241e828ae739a41582438d3ed0baafe"],["/Swift依赖注入设计模式/index.html","6e8894f55a006d1850805b4b1620a910"],["/Swift关于Dependency Injection (DI)/index.html","71ad63492ca7322bffdf552bfb6387f7"],["/Swift单例模式/index.html","2f6b8afda7d9646d70e690b3713b235e"],["/Swift原型设计模式/index.html","fdd93e209a582f81e2ecd0c963f94471"],["/Swift命令设计模式/index.html","9bbf19fdbcf6b0663642aa0bf33b5d67"],["/Swift委托设计模式/index.html","e3051baef284795d2fd6eee2be60e2f7"],["/Swift工厂方法设计模式/index.html","96c28ce9771bda5902ee251df65892d5"],["/Swift抽象工厂设计模式/index.html","7bb230c20cff099c13c6b0dd46ea0e71"],["/Swift生成器模式/index.html","247d1ddedb39fe025ed85f2dddeb1196"],["/Swift迭代器设计模式/index.html","dfe84ef26ca8072007b31b17b928b2ea"],["/Swift适配器设计模式/index.html","571376f2bb94edee1f1ee40dfdd016db"],["/Swift静态工厂设计模式/index.html","433911a4739fd4b785a2ca19dd603ce0"],["/UIKit初始化模式/index.html","81cb4f22fbf715737f6b228829b265d1"],["/Ubuntu18.04替换国内源/index.html","8035ba48e2fd0c863b4d6ce7960c1eed"],["/about/index.html","27d3df5b51ea9d7aeab623efe532dd92"],["/archives/2020/04/index.html","09d61b552a434fdf969e0e24ae2c3fbe"],["/archives/2020/04/page/2/index.html","0fd9a5222b9a15865df9d33aed55686a"],["/archives/2020/04/page/3/index.html","7176d209e6252d2f44234d3d72f3f262"],["/archives/2020/index.html","e0d752dd426edda5d7693a7f96da7df6"],["/archives/2020/page/2/index.html","628257e9296d070628202972d825cef2"],["/archives/2020/page/3/index.html","d3ade14fdacebf496307ed20cf90fe75"],["/archives/index.html","3855d6343450ed3002478620b1b68d4e"],["/archives/page/2/index.html","83b9b4bf970ad721523f2882615dd6d6"],["/archives/page/3/index.html","d77a06eeb4126eb71849f454090560ef"],["/categories/Hexo/index.html","e665afd2494c08c37525126e3124f3df"],["/categories/Server/index.html","3805358bcc612733b33e144b51fc1af4"],["/categories/Swift/index.html","23dbd1a0038c79eae3c963c034e3e5a8"],["/categories/Swift/page/2/index.html","1cd07822e84c76bf27545b8372bb23f2"],["/categories/Swift5-2/index.html","2c9976f614101f7f66a501e1fd447273"],["/categories/UIKit/index.html","3e85ccabaac67fac09e2a62bb78d7302"],["/categories/UIKit/page/2/index.html","e17377d9d706ad4304e93104285754f9"],["/categories/Ubuntu18-04/index.html","017e66280a1824a5312b3b6f792a7e58"],["/categories/Ubuntu软件源/index.html","8ea384a3732d5ca253b70b754087cf6d"],["/categories/Vapor4-0/index.html","80c76ce71077b8fd3210101480770e04"],["/categories/iOS/index.html","6c77546cd891915f8973ba61d5f8cbd2"],["/categories/iOS/page/2/index.html","6322b60294f5203845cb797ad0972e59"],["/categories/index.html","743193af19bf5f51c3131e0f28181d66"],["/categories/设计模式/index.html","5d859ab26c04bbde4e7ca6c3d4277b92"],["/categories/设计模式/page/2/index.html","568af224d2cfdf2f23878d304778e7dc"],["/css/main.css","76ffefbdc93d48bf6994f64f01cae0fe"],["/hello-world/index.html","ac9f3cfbbfb596c4a5cff30c3d12f277"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7483d5cc07f10ae9baf48959388b4652"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ee3ce2c7fb58d68fb6599bac44029e23"],["/page/3/index.html","31c402af418569c40f0c050594ce0bd4"],["/schedule/index.html","542d876c11a446fc4a94fa4c5e42a10c"],["/sw-register.js","b94d28e852ced561b91b59a772f3e9fd"],["/tags/Collection/index.html","bec2fa4091aff5764627aafcb7757fcd"],["/tags/Collections/index.html","ecfca96b40e641bc21db774088249c57"],["/tags/Dependency-Injection/index.html","e5c25feb89ae6fe7fe6ece4fd93a84a3"],["/tags/Server/index.html","92b50137dd73a6f9fae5c81390817f8a"],["/tags/Swift/index.html","7526d30230d7093871e987b63af07d5f"],["/tags/Swift/page/2/index.html","6fb0becb292f09d478168166b578caf7"],["/tags/Swift/page/3/index.html","1ea47c70c7c4170735609411d71c9462"],["/tags/UIKit/index.html","152aad18581b1fece390a155edcdd4d4"],["/tags/UIKit/page/2/index.html","0427ef452255f1c5344e9d7f92af18b3"],["/tags/Ubuntu/index.html","5c7b5843b3d68089552b33118921fdff"],["/tags/VMware/index.html","a19f46e993f0584616c53d88f1f05a53"],["/tags/iOS/index.html","aea961d47e876f693c65eaafe2fe2dcb"],["/tags/iOS/page/2/index.html","c5d6f442b51fa866c57275b9be1839bd"],["/tags/index.html","179e621ea5589a3ae7e642a638d6e299"],["/tags/non-optional/index.html","cf710c5fbf11ce0b4885a5d0eff3bbd6"],["/tags/optionals/index.html","17e7baec129c0350f3bb0a43c1e89ab9"],["/tags/依赖注入设计模式/index.html","dac9820e23e25032d86658ecf1ec6702"],["/tags/单例模式/index.html","c75126713dc93dbadad69f8d4b4eb4e4"],["/tags/原型设计模式/index.html","13adf501217bd628f4cfb3a592e1183c"],["/tags/命令设计模式/index.html","c0578e6cf2e4f335e73c59361f702f50"],["/tags/委托设计模式/index.html","a48702da1b70766ba8ae9228de9030b8"],["/tags/工厂方法设计模式/index.html","2bf550020fc79759ca7302de39d3039a"],["/tags/工厂模式/index.html","88364f4ac070fda5dba901b4624db70d"],["/tags/工厂设计模式/index.html","4c13d0735efc563963f9797b6cc8454d"],["/tags/抽象工厂设计模式/index.html","d4c8d8986934af11e39278c3b9402861"],["/tags/构造函数/index.html","58fefe6a3dbb3d23fff3f48a0a12b629"],["/tags/生成器模式/index.html","2c2b0caf8b8d4ee3b124118bd06e42f5"],["/tags/设计模式/index.html","52fe1f6b1bf85e13410fb2dd6ca82193"],["/tags/设计模式/page/2/index.html","2fed7e526975ffae2dccac1d0f0ca677"],["/tags/迭代器设计模式/index.html","4a133a50dd4dca8782ddb7480fb41006"],["/tags/适配器设计模式/index.html","d8716812a1adb2f1b478c3d3bc2a21ed"],["/tags/静态工厂方法/index.html","8f77498a0ed810644fd36c070aab96ac"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","2a4a878ef25ecc88c46214ed85d8aea5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","fdcabc55391844d62bd70ac7868fe875"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ce4fdaff740e715b27e15279933ad173"],["/在Swift中创建自定义集合/index.html","c2f2d3d0961d0beedd5f0c66d570b257"],["/在Swift中处理非可选选项/index.html","aae7a618bfaccadc5c73686cf198e67c"],["/在Swift中重构单例模式用法/index.html","aac69cd06a70b369af60057009278c25"],["/比较工厂设计模式/index.html","c4377c864c70044f71f2bc5872e1e00c"]];
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
