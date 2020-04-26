/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","c710d9c1611107c10a7e0b61e7bb51ce"],["/Swift Lazy属性初始化/index.html","59574e0bfde902629a5641334f06dc4c"],["/Swift中快速简单的工厂设计模式/index.html","4119b6b2c856c6ff8e0102fb1ae6edf9"],["/Swift中构造函数与静态工厂方法的比较/index.html","dff03477f3caaa15bd04e9f14841f009"],["/Swift中的懒加载模式/index.html","088dc52cd10d00bafae983ba8eab4a7e"],["/Swift依赖注入设计模式/index.html","c360f598781f3f3b2df561830fc7f0e9"],["/Swift关于Dependency Injection (DI)/index.html","7ed4e67fa16b18de919ae810ace8d4a2"],["/Swift单例模式/index.html","db7aa5b7f1654d764897eee857d39cc9"],["/Swift原型设计模式/index.html","3731192b5c0b9d701d1bb2d7c14579f0"],["/Swift命令设计模式/index.html","42eeb3a554305643a485a46d15b6c180"],["/Swift外观设计模式/index.html","0853f5980050eb71626fe5de8520a31f"],["/Swift委托设计模式/index.html","2fffbf27658f52bebc3fcd9d0440440f"],["/Swift对象池设计模式/index.html","a0d95c793e75cdb8583cc5c056182931"],["/Swift工厂方法设计模式/index.html","a97e82a4f59a469f380bc5cc2b0e3976"],["/Swift带闭包的懒惰初始化/index.html","1989c46bf6b8d6b13c21528072f2bd10"],["/Swift抽象工厂设计模式/index.html","eeb106babab7ebc28604b66eefc2b4e1"],["/Swift生成器模式/index.html","1b2394f2ae832a983ebbfc063bdb5338"],["/Swift迭代器设计模式/index.html","28827a258bf1aa23b46a0bd96cd15640"],["/Swift适配器设计模式/index.html","0071efd4b69b90c59ba541b43ea547eb"],["/Swift静态工厂设计模式/index.html","d9fc34ce20e6358f2657cb4fdd6aae28"],["/UIKit初始化模式/index.html","461e36cb776659bbb676c0b848c1d0dc"],["/Ubuntu18.04替换国内源/index.html","9630afeadb9dc55b39b414aed7967997"],["/about/index.html","91c50001ceee0f619836e0ca43257ef7"],["/archives/2020/04/index.html","1b2bbaca1a44024e908d5581a2954c67"],["/archives/2020/04/page/2/index.html","f5d8b2aa74ad6eeb6793927869c2f818"],["/archives/2020/04/page/3/index.html","081ac636e0a69640081322fe593b201f"],["/archives/2020/index.html","2051b85c4f3abe9329542154384990c0"],["/archives/2020/page/2/index.html","44e3f5ddf8154856e5ec036fa1d2b8e1"],["/archives/2020/page/3/index.html","67f67e0493d6d952687da06a726de8e2"],["/archives/index.html","19bc7d4451f20a85f8b48c67efc5b695"],["/archives/page/2/index.html","78c737239b3ca600cffab114e5266926"],["/archives/page/3/index.html","301f0cd457bed11ea0cd9728d096f27a"],["/categories/Hexo/index.html","a5749ad4d9d1d39e29af3102c62d12cc"],["/categories/Server/index.html","89673b6a3b4ad3e0fed2607f4598be34"],["/categories/Swift/index.html","ed576ffa5d40f64b45c2c16209ae047e"],["/categories/Swift/page/2/index.html","570289b49798fcb4f610e1e4a46459bf"],["/categories/Swift/page/3/index.html","f48a218cbd0f4f585f24e9a20cb48f36"],["/categories/Swift5-2/index.html","12ed4224443999b788cab69918fe5a2f"],["/categories/UIKit/index.html","60796a49d561ea4e5dc79b43bb265ca6"],["/categories/UIKit/page/2/index.html","c15af09c43bf3a51fbbb25277aee565a"],["/categories/UIKit/page/3/index.html","ef98e0eced5a382edcc1b4f0a919da8c"],["/categories/Ubuntu18-04/index.html","e54e1b2cd658b8442b88db15a8bbb2e9"],["/categories/Ubuntu软件源/index.html","1293468b0625f7a5e8d61acabc62a0cc"],["/categories/Vapor4-0/index.html","18a677e6812b7b104ed266c979815593"],["/categories/iOS/index.html","bce4b17df40ab509d1d2b22a57f51561"],["/categories/iOS/page/2/index.html","038907e5b42c8c8a43c667d5eb382591"],["/categories/iOS/page/3/index.html","36456c5eeeb2b6854c4645a2d03ac0bd"],["/categories/index.html","dba4ee99279e6cc86d683aeb3c00c7c8"],["/categories/设计模式/index.html","c8670ba9af0791a21169322e9039bef9"],["/categories/设计模式/page/2/index.html","ad0681e76329b25a0ce1a696909f69f0"],["/categories/设计模式/page/3/index.html","3abb9d63a1e97705ef05f3b94a855921"],["/css/main.css","f3a1d348656f431e8279f469a2e89ba5"],["/hello-world/index.html","1b8610889d1e41137f9784edb1885ae5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","1da2365d1f8a4e86ca027def57a37b46"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d39f5de860f683f07d6b1e31a68c8fcf"],["/page/3/index.html","9eec84ee25248d2bc509c8bc45f83522"],["/schedule/index.html","097a4537e6dde66bc93c74548994b656"],["/sw-register.js","1d783e4cfa43cc61e99075a434255e17"],["/tags/Collection/index.html","4e6835504e11894b97358dc60d34d77d"],["/tags/Collections/index.html","f223fba05e9a04c45b2ce77056d6dff8"],["/tags/Dependency-Injection/index.html","7c5b611a102d5cb1ef8ae89ca31dd01d"],["/tags/Server/index.html","1febd8b1bf5441b814d913ab62ee99f9"],["/tags/Swift/index.html","2818000e895050f9ccecba6eb83f5710"],["/tags/Swift/page/2/index.html","ff3915bdd7655bc011173a6c05622523"],["/tags/Swift/page/3/index.html","6619a93351afe8b391d4d7cc65fe9922"],["/tags/UIKit/index.html","6b3eca1b51ade7d7c9df7dd4b41a3e00"],["/tags/UIKit/page/2/index.html","0b68f0876575a777fe6da2765f513023"],["/tags/UIKit/page/3/index.html","7e2853f4e4009f5cecd1c5c1208b26fb"],["/tags/Ubuntu/index.html","367afedd836c72167026eaae6ee17016"],["/tags/VMware/index.html","53d0f9b03352a8894e053cec60981a8f"],["/tags/iOS/index.html","89e1af648c795aff4c2e64f494411402"],["/tags/iOS/page/2/index.html","4627c27d582cb24f6949138f32b0639e"],["/tags/iOS/page/3/index.html","7ee7d32f74611a595e157baba46926af"],["/tags/index.html","53e0c04ed2d5d326432dcb50395a732e"],["/tags/non-optional/index.html","5f0ea605bd3bec7d839316dd7c263515"],["/tags/optionals/index.html","a15292b93f8dc4d55f9865a73885979e"],["/tags/依赖注入设计模式/index.html","e698211580d4a5c7392babb842206a15"],["/tags/单例模式/index.html","7609ab3d090455be0738f9a127db16c2"],["/tags/原型设计模式/index.html","6d1c8e57ca7138ad66a2b47a949e15e3"],["/tags/命令设计模式/index.html","cff4635aaec1b15e874fb3efae471170"],["/tags/外观设计模式/index.html","f22872ae4766dbfcd7e0870bf0709e4e"],["/tags/委托设计模式/index.html","860f23398e4b4a72a8ca7af3c4c33232"],["/tags/对象池设计模式/index.html","9f08d40f63c4a270f8e3e1a6fcba7d68"],["/tags/工厂方法设计模式/index.html","e1e4f5e198cd032b582caa514017653c"],["/tags/工厂模式/index.html","99ad0c4b7348743b2f8a949f9301abc6"],["/tags/工厂设计模式/index.html","2ced821184202696f8b560aa8cbc0de8"],["/tags/懒加载模式/index.html","a3615f42c988e16b6e45a3f0829e7017"],["/tags/抽象工厂设计模式/index.html","c18e5aa3ab45b49f3fcf10e3335cf9e6"],["/tags/构造函数/index.html","7170f563abfa97c5e269b3818d8a58dc"],["/tags/生成器模式/index.html","77b3bf8ca34fe2aad91fa8bb67fb6792"],["/tags/设计模式/index.html","9df6efade6b8f607feea32c57472ac30"],["/tags/设计模式/page/2/index.html","8e361a0508be97dc1809217dbe1999bb"],["/tags/设计模式/page/3/index.html","8c98fbd391d9c967455d6a15bfb49f40"],["/tags/迭代器设计模式/index.html","4fa9177673042bfd0cf79e82c132ba27"],["/tags/适配器设计模式/index.html","f9e1914d9d0c932e7d60a62c33cc162c"],["/tags/静态工厂方法/index.html","b23bca784373e2b472bb27dd876c648a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","bcfe95213fee965109b89dd8c2664030"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d9a4a076abd526b4b27174b5b5571b93"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a8e27aa9c5ebcd1ef3df3246ea7394db"],["/在Swift中创建自定义集合/index.html","e68acecfb5605c76392b38742a61bc04"],["/在Swift中处理非可选选项/index.html","4afbe7e7e720ebc89f07b9f004b0e506"],["/在Swift中重构单例模式用法/index.html","6a6f0342ae94d7c427cae27234ea4ede"],["/比较工厂设计模式/index.html","f27b2039498d89131f5ef73abb9c1838"]];
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
