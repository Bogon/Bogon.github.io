/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","6015d64cb51731e81d3f55868be50b67"],["/Swift Lazy属性初始化/index.html","20ff4685b4751d5ff458243ceebadd5d"],["/Swift中快速简单的工厂设计模式/index.html","ea8a5329fa7c056ec5469296aaf79449"],["/Swift中构造函数与静态工厂方法的比较/index.html","7721c997b98920c27601335510f27bf7"],["/Swift中的懒加载模式/index.html","fa3a55353a0efe6726a37015ee887e1d"],["/Swift中的模块和挂钩/index.html","5e46eaad581a9c96e02cdefd1c723a63"],["/Swift依赖注入设计模式/index.html","47463eda7b333529fd43a54b0aee0efc"],["/Swift关于Dependency Injection (DI)/index.html","c820554885b701839382df48d86a42e6"],["/Swift初始化模式/index.html","d13f0ac271cd50a098fa25e885df29db"],["/Swift单例模式/index.html","52b5f42040810ce0beeabf325a74cfcf"],["/Swift原型设计模式/index.html","06f24588d02001e959dea7cdc045ab59"],["/Swift命令设计模式/index.html","29c36d886d1361156f1e42cbf57d5417"],["/Swift外观设计模式/index.html","cef2ae7439d4fcf384cf76a32ae287b9"],["/Swift委托设计模式/index.html","ebf483d206dbb23d175e02ba604d6c4c"],["/Swift对象池设计模式/index.html","1e4d562e172a5d54c68eb98fbdb4bb90"],["/Swift工厂方法设计模式/index.html","3dab649152f6806c0dcbb86a735430a2"],["/Swift带闭包的懒惰初始化/index.html","1ac4382b9dcd493a0b0b3d058ab368cb"],["/Swift抽象工厂设计模式/index.html","43bbc84c92714e421558e437b72e3085"],["/Swift生成器模式/index.html","5be42b1d2c80acc3d5304c4582fc6fd3"],["/Swift迭代器设计模式/index.html","7a0bc3f28603c56a73393d8091b56bd6"],["/Swift适配器设计模式/index.html","3381a6347d0590e6b400deed92699850"],["/Swift静态工厂设计模式/index.html","b0af18628fc09be761069d8cbdc974a3"],["/UIKit初始化模式/index.html","8ea47458edad42c98a311941eeef4c3f"],["/Ubuntu18.04替换国内源/index.html","7949a3bfcd72a79047a8e48895ed5f7a"],["/about/index.html","d2702a5eaf45f22adc0a154edb4b5738"],["/archives/2020/04/index.html","5a75bf2c480e525af2c7899b617dc7b5"],["/archives/2020/04/page/2/index.html","886d49562ccc49db4858d829f1e0f98c"],["/archives/2020/04/page/3/index.html","6aa2b377a048a2b0367410b4b89171e1"],["/archives/2020/04/page/4/index.html","1d2ef21376ebaf9210b1c6cdc903eecc"],["/archives/2020/index.html","3c3cecb558387b1984340a564777ad0f"],["/archives/2020/page/2/index.html","3120711ec6b62ba61fd7365016038819"],["/archives/2020/page/3/index.html","30e164624065acf91353d57a82a1afab"],["/archives/2020/page/4/index.html","4830a99243d79e06fafde3b0b3556daf"],["/archives/index.html","974bbeab9c5c1f3a1cbe7262adaa08a8"],["/archives/page/2/index.html","c57acea20b145c2d8ca7f3ecf2cb1e07"],["/archives/page/3/index.html","00e489db2e03eaed4a30cf3e228fda7b"],["/archives/page/4/index.html","410695da868107c8ddbb7f344ad748b5"],["/categories/Hexo/index.html","5b4ac25a62492182b2d9f62da8014c78"],["/categories/Server/index.html","3504a9304f898db326fc096b008be490"],["/categories/Swift/index.html","422a2d51e6e18ca99f12b580bc0e6207"],["/categories/Swift/page/2/index.html","6ffb1b6b8ed2a1ec02116f69764a2f0f"],["/categories/Swift/page/3/index.html","bf8d69ba03b598f529cdc4c3aedd92ea"],["/categories/Swift5-2/index.html","5026e99ada921611db532d9047898a4f"],["/categories/UIKit/index.html","1d2c0854b5267ee4a52edf96e4e12c20"],["/categories/UIKit/page/2/index.html","3255d8263d6921a61a5326b22da06809"],["/categories/UIKit/page/3/index.html","16d3bd0e8dbb4c12b1bb6e3889871822"],["/categories/Ubuntu18-04/index.html","5eee437e5a33db53533636479c66b8ed"],["/categories/Ubuntu软件源/index.html","0849445709e81865816b71640e9bc0c8"],["/categories/Vapor4-0/index.html","54c1ef6011f90bd1117ffd952aa9ee4a"],["/categories/iOS/index.html","0e94452c946105d63073faf89d573fd7"],["/categories/iOS/page/2/index.html","4cfc248ef1525f60963cabd7014f6798"],["/categories/iOS/page/3/index.html","b36a3add39859044cbaa5b410c8624bf"],["/categories/index.html","eb06ccfdd81ad71a2d2e11385c19021b"],["/categories/用户体验/index.html","7e986df15259b29028ae3a19e066ef3f"],["/categories/设计模式/index.html","23356b5f61063c39ca083daea607165d"],["/categories/设计模式/page/2/index.html","401eb7e8edf82fb8ffb57226bad171d4"],["/categories/设计模式/page/3/index.html","c5caa2691b1b04960ea94439e5d6ef78"],["/css/main.css","59abfcaac6ac531e266a1ce1b88c064e"],["/hello-world/index.html","afe39bc82a7b66bca5d39fd11373544f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","948e613459f7ac33ab7bb33600669a8d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","adcb5241b2015903a08c162daa304824"],["/page/3/index.html","194f331a2317eb885910e77beef48282"],["/page/4/index.html","ba0c3247132abb9112804b3aaf95a32a"],["/schedule/index.html","cf266a4a6585714606ed889dab4eb2ad"],["/sw-register.js","6f4749655c3656d435939077612a467f"],["/tags/Collection/index.html","c748c68accd048c003a1b02aa070b06b"],["/tags/Collections/index.html","a415571f1efc6c416f10006db409e12e"],["/tags/Dependency-Injection/index.html","7d29a5900c78fd3c52d375ee329e5af8"],["/tags/Modules-And-Hooks/index.html","8db818ef2b43a8a28d43a64c573ba4df"],["/tags/Server/index.html","c7be0f17bdf50e79e4892567bd17cf51"],["/tags/Swift/index.html","b0c54d40b72683dfb70424be354ceea7"],["/tags/Swift/page/2/index.html","c9c541a81d1eccfd0ad4501b6ed9a590"],["/tags/Swift/page/3/index.html","c6bfd8215fbd89f4fb25ef22087f36e1"],["/tags/Swift/page/4/index.html","632c07eb92b7d222d9986b67d107998d"],["/tags/UIKit/index.html","17283ca21ebd8dd319629ddced0bd1db"],["/tags/UIKit/page/2/index.html","514dd3ba611a6e8e253f85d4a44b38c9"],["/tags/UIKit/page/3/index.html","5b0d22863d021fa12c86f1f8241c1183"],["/tags/Ubuntu/index.html","e14a18721fe060901645f7c0b27e9481"],["/tags/VMware/index.html","e1c565704c9b2395af44334bfdc35ecf"],["/tags/iOS/index.html","67000e5a69fdc98f3a4409025160b68c"],["/tags/iOS/page/2/index.html","e6bdd3b0ab40be608686650b4ce85ef2"],["/tags/iOS/page/3/index.html","c81a1e3401d46b47901a53f020803d69"],["/tags/index.html","349400ae660e289fb0266ccaaf1a226c"],["/tags/non-optional/index.html","307f570b7b8c3066a985d7ba46cf7331"],["/tags/optionals/index.html","9efc042804b0cb635aeb6dac10e18c1f"],["/tags/依赖注入设计模式/index.html","62683734ab37a25448b8b9b1360ad2a0"],["/tags/初始化模式/index.html","5a03c6f53cea4d265bae1409e9d6c803"],["/tags/单例模式/index.html","fcda45aeef1f43d8cffac395412838b4"],["/tags/原型设计模式/index.html","ccb29fc97e1c57ad60d9412d331f4286"],["/tags/命令设计模式/index.html","671d8ee41e8f7cefccaabad588e3b9c6"],["/tags/外观设计模式/index.html","acc45eb5f67df062dfdfbe9d3503f0cc"],["/tags/委托设计模式/index.html","1902a02086adc2f2be265d7152102259"],["/tags/对象池设计模式/index.html","bbd57e4aaccca24f307cb5057b9bd898"],["/tags/工厂方法设计模式/index.html","3ca54add25f5e8626374e059430e8a34"],["/tags/工厂模式/index.html","1f48f69e1d34e877ce1d4d86c92206dc"],["/tags/工厂设计模式/index.html","4813f38f5f23c9fa820aa963723bd8d3"],["/tags/懒加载模式/index.html","22c1b7a0c0cdb41959c7f8fa091df5bc"],["/tags/抽象工厂设计模式/index.html","2882d86113cb389abd5674b10b17af47"],["/tags/构造函数/index.html","15cce2ef11a4317b2d195ad98c5496dd"],["/tags/生成器模式/index.html","2df0c01009a4707cac0958a0a146779c"],["/tags/用户体验/index.html","f9a27045c3c4b98f5aa4b944c90d97ba"],["/tags/设计模式/index.html","2f62bfda63e947712b55589bc1b1f94e"],["/tags/设计模式/page/2/index.html","f59870c266c2ffaed604607fed8ef791"],["/tags/设计模式/page/3/index.html","2a49dc80d5d78db980a1bb318780cba5"],["/tags/迭代器设计模式/index.html","985fab534edb9f8a70c96fbffe255dc5"],["/tags/适配器设计模式/index.html","041c97f23ea43a132edda27796e5a94c"],["/tags/静态工厂方法/index.html","451c828934c8ad9bf69ce1728de339d7"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","50faac248948b0495581509994c2985d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","0974ff977ad70f9a086a2d77ae25b4aa"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","cd70ed8aa44d1f7a00421b4c2d0cdebb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","17b714bf32668531d02f70a4f4414d84"],["/在Swift中创建自定义集合/index.html","c6376334e5bf891c6645e884e8d6bce7"],["/在Swift中处理非可选选项/index.html","e3f1fbe3cd736d9323e33c1cb208fb99"],["/在Swift中重构单例模式用法/index.html","218802854b0bbfa52d5355da7fcbeae3"],["/揭秘 WordPress Hook 系统/index.html","f402cfdc9736d40d3e0276403e3b2901"],["/比较工厂设计模式/index.html","59c5843154e04544a80ebf1be5b6a133"]];
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
