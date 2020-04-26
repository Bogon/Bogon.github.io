/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","2eddc401c97c1b665ac2c8ab73657352"],["/Swift Lazy属性初始化/index.html","67a8343593ae78d05eab459fa73c30aa"],["/Swift中快速简单的工厂设计模式/index.html","407ef035a4e150e58a1009750763547f"],["/Swift中构造函数与静态工厂方法的比较/index.html","1225e61ae088ec676d9c86c623a2de44"],["/Swift中的懒加载模式/index.html","3e2537b5cf58d2b82a3a3f0e628c2e0b"],["/Swift依赖注入设计模式/index.html","2735ec415786b2a5ae9278c07fb6b55a"],["/Swift关于Dependency Injection (DI)/index.html","7ed5e8623963dd223e7dc775d10e43ca"],["/Swift单例模式/index.html","8355dd18197a9e91121c834e297d723e"],["/Swift原型设计模式/index.html","ee59b5581ee2d35abe67bd99cdaeffc6"],["/Swift命令设计模式/index.html","040bd09203827a1aa964000a0bc12c13"],["/Swift外观设计模式/index.html","e3b35fe69b36f0b90b94a6493f12250f"],["/Swift委托设计模式/index.html","00851b79d5d78578a5a496cfa243c7e5"],["/Swift对象池设计模式/index.html","087641845071569e56d3d3ef93fab83b"],["/Swift工厂方法设计模式/index.html","c34677fe5f2ce401ef7c0da50fa92884"],["/Swift抽象工厂设计模式/index.html","3897de87923d0747fc45b55502bd835d"],["/Swift生成器模式/index.html","a89846ef0ffcba699c8d077e0a6c7d83"],["/Swift迭代器设计模式/index.html","d36ee3fccfc01c92439e784296d6c72d"],["/Swift适配器设计模式/index.html","6365c11322327fcef5316797f9d5ec03"],["/Swift静态工厂设计模式/index.html","c3bfeb01f279d6f231bda735c30d533c"],["/UIKit初始化模式/index.html","688954ce52a04f9612906df0bd955670"],["/Ubuntu18.04替换国内源/index.html","efa4b389b22248db5fa95420bd6f6642"],["/about/index.html","9f4f6ae32c70805d6b21a4e68cd70b6c"],["/archives/2020/04/index.html","ca92b11f9127a1def9bd3fd5737ba90b"],["/archives/2020/04/page/2/index.html","c443d347df1c0fad0dd8a0ddda6c5f4a"],["/archives/2020/04/page/3/index.html","1c44a97fe4caf0f5023cf4b4b950f93b"],["/archives/2020/index.html","3c2d3e00d4a87bcd25c5d9de1b6ebd90"],["/archives/2020/page/2/index.html","2dfaf3c08d62608a24c471ee669fa3f6"],["/archives/2020/page/3/index.html","9995db9a075c50513c9af41d045ebdbf"],["/archives/index.html","8a051cf5a17b4e897f7bbdfb750446f9"],["/archives/page/2/index.html","e22e9a4d768a7f9e8759dddabc1a3908"],["/archives/page/3/index.html","c3abf51041afc2818e53bcdf7f708e3a"],["/categories/Hexo/index.html","3ac023c11e4b4b7517dfc8e8bbb4cde8"],["/categories/Server/index.html","6f18d2781bfea85bb4782210dd27fbbd"],["/categories/Swift/index.html","b0a38cc73b7aa20781b3f6a36f710d25"],["/categories/Swift/page/2/index.html","53c695d451df25049ab36314734848e0"],["/categories/Swift/page/3/index.html","c3c8b982006abd051b54c44428c2e05b"],["/categories/Swift5-2/index.html","02d3d3d56390a2fe54230ee96cb62dc9"],["/categories/UIKit/index.html","bb5d437ace18f4005377c8402f14db00"],["/categories/UIKit/page/2/index.html","686c7371e4e9ebf783f6dde484e8aa7e"],["/categories/UIKit/page/3/index.html","67275650798dbc738c5af826b1d2c6e7"],["/categories/Ubuntu18-04/index.html","c9f169d40a5395f4ea4023e07d810552"],["/categories/Ubuntu软件源/index.html","6def5f5d02d8eb63ad1f834ab67ef0c9"],["/categories/Vapor4-0/index.html","d4dcbe5c4010fbc8fd4ff59360323cc0"],["/categories/iOS/index.html","b98baf10396764ac573199420c036dca"],["/categories/iOS/page/2/index.html","40991b214a22725b05afc4f3528904fb"],["/categories/iOS/page/3/index.html","916e07e80acc648fd3f6552b44edc194"],["/categories/index.html","9dd68f387deefcf1e51ca1b889890f73"],["/categories/设计模式/index.html","825ebdafd3039b8a526434d7ef01d41d"],["/categories/设计模式/page/2/index.html","83a2f59437c32f68da4bdb8770b8730c"],["/categories/设计模式/page/3/index.html","2cb745b96c16d6b8e2f2d65d5df0062d"],["/css/main.css","22a66fe828672e9b76ae420883a35e29"],["/hello-world/index.html","0986cf4024cb05ada68a01c0a10df743"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","24720ca3277d61f851c5dd4712bd0afb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","536c251e015266018a798288358f0985"],["/page/3/index.html","8f792fa9fdee320fb2f0d6bf4b1819a5"],["/schedule/index.html","d34f444e85f167cb4bdf460db168b62a"],["/sw-register.js","919c9065e16ee322c8abe32c0352a856"],["/tags/Collection/index.html","8b836bcb18c0715929165dd0c140c15e"],["/tags/Collections/index.html","aff4937c345490ac447f5681989a5777"],["/tags/Dependency-Injection/index.html","24430d8adf43f977a746ba0b08e869aa"],["/tags/Server/index.html","3ff261c6d249bca0a554c8c3427b2818"],["/tags/Swift/index.html","195b8a059343587d706c79738d6dded7"],["/tags/Swift/page/2/index.html","f5f912a750194a67c83ff9a59320faf0"],["/tags/Swift/page/3/index.html","93e4d08c0280a7176b573782318ac532"],["/tags/UIKit/index.html","d555891805b6a6719f3de71b359f411b"],["/tags/UIKit/page/2/index.html","c64cc3845e0e8c569b7a2d02521edc8b"],["/tags/UIKit/page/3/index.html","f2370386886b063b9df33002a6e84787"],["/tags/Ubuntu/index.html","261232640882796ad662134a7669af38"],["/tags/VMware/index.html","4d74fe99e12f635b73f6146538a1a40c"],["/tags/iOS/index.html","7be21f9e520a5bb8bc8adb76798fe060"],["/tags/iOS/page/2/index.html","8d91daf80ddca2d5dcd2c9040190709f"],["/tags/iOS/page/3/index.html","b0b372b06f9fa4f1a2899de3d726e65f"],["/tags/index.html","1da57bc2d454f9da04f936b199c31a3d"],["/tags/non-optional/index.html","85cac39261b63eef77f62d9a2d4bca75"],["/tags/optionals/index.html","9329cc7b020f72b1e1ffe3867943ec95"],["/tags/依赖注入设计模式/index.html","96a6ec89c39719634f5372bd200f60f4"],["/tags/单例模式/index.html","e5efc1dc247722423bb40ef17a817d39"],["/tags/原型设计模式/index.html","bc3c77e7914c3ae831bbed9ca34cc5ea"],["/tags/命令设计模式/index.html","3f6c2a4cc769013a8903c0b888aff9a1"],["/tags/外观设计模式/index.html","9591d6659eb3ffc41462305a33d12079"],["/tags/委托设计模式/index.html","51727c2137c8ee0be46a6b025eb3c34a"],["/tags/对象池设计模式/index.html","773c550bb9a9be2c93e9915a5580b7b8"],["/tags/工厂方法设计模式/index.html","5288c98860ab2d4d787035240084668a"],["/tags/工厂模式/index.html","440fec2b054a1e9c2be668afc1f0e4fa"],["/tags/工厂设计模式/index.html","52330ed8b13af0de0a8cd0bb58579b3d"],["/tags/懒加载模式/index.html","c672d0d4ad0aa49d44a0520c86846d71"],["/tags/抽象工厂设计模式/index.html","d1fc14ed8fbaf810800cdcf0c0bb5462"],["/tags/构造函数/index.html","5e31ae8406d4df1c5ec0c51568842162"],["/tags/生成器模式/index.html","201307d2bc0bbb0c3f195cf52f4e87e6"],["/tags/设计模式/index.html","fc04b33ec586de054990e6acc5d2c049"],["/tags/设计模式/page/2/index.html","fd12f83246e0710df12fb3d1c3dade99"],["/tags/设计模式/page/3/index.html","2c07344630a4051c2e76055ba61c07da"],["/tags/迭代器设计模式/index.html","158838df0bb964eeed9aba6032b0601e"],["/tags/适配器设计模式/index.html","7f63044931f1ac9b41def2b4c3520270"],["/tags/静态工厂方法/index.html","103ebd70c5cf45cbba383d95516d7a2a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","57e732f06262538d30831b6c25d37215"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2ca73fa6e87922e5d5e49b2ccf12585c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b533e4db3f280c5746552308973cb954"],["/在Swift中创建自定义集合/index.html","2b7715c3abeda2283151530140e51082"],["/在Swift中处理非可选选项/index.html","8fbcaef567042d77a15f61c7ec586ea8"],["/在Swift中重构单例模式用法/index.html","2bd6cae21c074f49e4c5a914102da88f"],["/比较工厂设计模式/index.html","f71f53b66f9cf25b4c246bfffa915e3f"]];
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
