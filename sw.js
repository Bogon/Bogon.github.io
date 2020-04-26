/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","409da9a405b25a291dd3d4ae8d7ebcd0"],["/Swift中快速简单的工厂设计模式/index.html","96529f05309556d615909f6719824215"],["/Swift中构造函数与静态工厂方法的比较/index.html","9df9922e2f88797280f025b2a385c09b"],["/Swift依赖注入设计模式/index.html","8d8bf52a0fe571abc1523e7df627646c"],["/Swift关于Dependency Injection (DI)/index.html","7a0cc203aacabb52f3ae542fb7b99fcf"],["/Swift单例模式/index.html","0dea2da18216e68e4d03a82b01ad3dfd"],["/Swift原型设计模式/index.html","e4c1e286a9e7dcbf2bcbe4208d14daaa"],["/Swift命令设计模式/index.html","31ae93885951c969a4d0ca615a81f4f1"],["/Swift外观设计模式/index.html","cf0f9bfe5f78f7ecfc9e90c6a8e13096"],["/Swift委托设计模式/index.html","5b3274dbea1e12da9b50e480713e3371"],["/Swift工厂方法设计模式/index.html","4f746b9264b9e0f2e3fd960be6adeaff"],["/Swift抽象工厂设计模式/index.html","7888db9c09253aa0830ceaa3b904002e"],["/Swift生成器模式/index.html","0aae0cfb71d469fbf66ee179714b9042"],["/Swift迭代器设计模式/index.html","2222a16f54506d46938cccd72d10ed59"],["/Swift适配器设计模式/index.html","8f99ca758715fbc8d842217852cd1e5e"],["/Swift静态工厂设计模式/index.html","dcbad83a8e55bb1e9a0e7a79b417aa9a"],["/UIKit初始化模式/index.html","b6dd32f3081fe2b0909b6cbee42da588"],["/Ubuntu18.04替换国内源/index.html","b890b4e547752523c33e41a90707a8a9"],["/about/index.html","e8843af72a7f5349fab77f3a6a412501"],["/archives/2020/04/index.html","5f5a59f94bc759c7dcac7023d6886469"],["/archives/2020/04/page/2/index.html","60df99f378fb4a5c1aa897ca7afb114d"],["/archives/2020/04/page/3/index.html","ad1347de7eb79ab828c1833a461bbbc4"],["/archives/2020/index.html","3d3500b5512189343ad44a300a33a3f3"],["/archives/2020/page/2/index.html","9de91e6b09f0bffa05ae5549a94c2615"],["/archives/2020/page/3/index.html","958c125a8f7924e55ac14b8771d59575"],["/archives/index.html","537a2e5c6b329ddb9cc60cbd2b8f48f9"],["/archives/page/2/index.html","a78280d72885f402f40036f12a630847"],["/archives/page/3/index.html","0a425d4d7318c2523dd38bb6824a5985"],["/categories/Hexo/index.html","1b732199458cce0cf317e846c61e9194"],["/categories/Server/index.html","975d4ffd8299e536c3528c915b916155"],["/categories/Swift/index.html","6c2cea58abbd1d6f0203a948a29e13a3"],["/categories/Swift/page/2/index.html","7bf4f0c11beb31360adc575beb295284"],["/categories/Swift/page/3/index.html","811eefbc72033559b2d86252483b998f"],["/categories/Swift5-2/index.html","a83a45c50a06a6e474c181de64384489"],["/categories/UIKit/index.html","56de988b42a0318715d27d01047111d2"],["/categories/UIKit/page/2/index.html","eb11539e14b81da848a459d2baaaa03f"],["/categories/UIKit/page/3/index.html","083af0bec6c644c812c3ba9afa9e3524"],["/categories/Ubuntu18-04/index.html","4ca542a29b1f1fc3b62fc87b3714deb7"],["/categories/Ubuntu软件源/index.html","4e63f5284e30fa87e79cb7cd7ec07ab8"],["/categories/Vapor4-0/index.html","65f4fcb3b478d5504e0f129a6619d1b8"],["/categories/iOS/index.html","0e21b461ba00c610294bffb7a0277764"],["/categories/iOS/page/2/index.html","df7868c32027c79543704de334bf27b7"],["/categories/iOS/page/3/index.html","fe6cb7e3580e2e9f111be263faade533"],["/categories/index.html","e92c992cb46fd01549d432efca5ffc46"],["/categories/设计模式/index.html","e140f8d57c62c9bdbffe5c14b1a81376"],["/categories/设计模式/page/2/index.html","9f1ead604413311fdb6a94750b25f6e1"],["/categories/设计模式/page/3/index.html","9d4102db2985ae7089507a057fc62d64"],["/css/main.css","6a529e647194f7b909e39570be35398f"],["/hello-world/index.html","89fb77f8fa8b021a3c5829e49a752148"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9cf6ea9103598145908b615e2c2b36e9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","db7d74a435637de07e69be46f984d56b"],["/page/3/index.html","d24df70fa15cf259a6e21222bc99d645"],["/schedule/index.html","6c6eb71dc79e5b51fe336b3d5b226aad"],["/sw-register.js","a3638d7981e8150e8e496e92dd588827"],["/tags/Collection/index.html","3792c546cacb9523950ed42016ccc562"],["/tags/Collections/index.html","35f1db4c742d2a57a0f7a89064304c66"],["/tags/Dependency-Injection/index.html","015e6b9583c041e83551a58d8cc1eb1b"],["/tags/Server/index.html","cd8d76b5d7846215e013898b45fcd2b4"],["/tags/Swift/index.html","ff8ce7df90fc127aaf372b8d21416f1a"],["/tags/Swift/page/2/index.html","df7117254448b71cd2c3b17d7fddf227"],["/tags/Swift/page/3/index.html","da63fab0b03f60b1355d416cbe960db5"],["/tags/UIKit/index.html","72da94a3b689a2d65e806a5e0db16283"],["/tags/UIKit/page/2/index.html","c7f45fbdd8af0a69d350227a923f4268"],["/tags/UIKit/page/3/index.html","3a3ad1d521e4019fa7a40e48c67d3742"],["/tags/Ubuntu/index.html","3da7964be2e35eda4163fe9a0acea8c4"],["/tags/VMware/index.html","e390b3d59bf1cbbdf28d27e9f4f85804"],["/tags/iOS/index.html","59f3d5066e6dfc5696b7972a316b364b"],["/tags/iOS/page/2/index.html","cf103866c2758c012c2d2fe8548724b6"],["/tags/iOS/page/3/index.html","8ad7a8c6d69a1f4c1352f074c0bea627"],["/tags/index.html","359ffd7608594e6bc958c0151572b708"],["/tags/non-optional/index.html","de0658dfb056303d944ed5bb54326a0c"],["/tags/optionals/index.html","306a2205cde4e5f9594d86dfb7afd89f"],["/tags/依赖注入设计模式/index.html","59719485bf7147b3ed2d0a1a061102ac"],["/tags/单例模式/index.html","78014c2f463b82e9c4d0e92a43e0d7ee"],["/tags/原型设计模式/index.html","61a783b66f65f7bdc7e38cc845b2c3ff"],["/tags/命令设计模式/index.html","a38b224a828eed447f42bfc6646ebad0"],["/tags/外观设计模式/index.html","f5830e4e482321f0e77b7c7657588ecb"],["/tags/委托设计模式/index.html","ac0f7b6eb097847293da1f4444631134"],["/tags/工厂方法设计模式/index.html","65e3c67b46758bdb1de0f4e707a47009"],["/tags/工厂模式/index.html","acd802fbbc996941b2ddbe388e936ece"],["/tags/工厂设计模式/index.html","e6261933d153e90199094a41142518da"],["/tags/抽象工厂设计模式/index.html","6759ecd6741f961bb6309b196da52d9b"],["/tags/构造函数/index.html","b9a4df7fa2856e157743cd90addd8411"],["/tags/生成器模式/index.html","457b46931756578cda7cff4b6ff2a51d"],["/tags/设计模式/index.html","d0c2ecf701aa4afb74691c55881b8de7"],["/tags/设计模式/page/2/index.html","c8b173a4140f4deccc97e6329092eecd"],["/tags/设计模式/page/3/index.html","8ce28029bd756e448c6ebef87503a14a"],["/tags/迭代器设计模式/index.html","9015035cd4c856bbd6a3c00a5fc7bd35"],["/tags/适配器设计模式/index.html","26c83098123308f2b4f05694959a05c2"],["/tags/静态工厂方法/index.html","697b209c33c5d8abd3cd1c20b2e3f5c7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","047fc5e6a8d048e49b69b96f640716d9"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c5a01f25c3de14b938419b5412950d8e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b446bf6b3a7f55a1ac2c54af97d0ae82"],["/在Swift中创建自定义集合/index.html","f615ad88442d3812d32d9e7c956f680e"],["/在Swift中处理非可选选项/index.html","23181231934f86380c3114f74b4f12ac"],["/在Swift中重构单例模式用法/index.html","c414893183930fcd0a50c0af73c7adf5"],["/比较工厂设计模式/index.html","b346d6d5022d27d2fb36e29861cbd23a"]];
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
