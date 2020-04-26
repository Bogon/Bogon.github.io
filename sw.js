/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","5f1272fc488afe73d07a72ad88d21fb6"],["/Swift Lazy属性初始化/index.html","dc569b578c59c4cd672343bed5f0a419"],["/Swift中快速简单的工厂设计模式/index.html","339a229c62f4c46cd4a5fcd913383223"],["/Swift中构造函数与静态工厂方法的比较/index.html","3b3175578f6fb3910fa05f090ee45707"],["/Swift中的懒加载模式/index.html","7097c287dcf2d6f79bd202bfb7c68e02"],["/Swift中的模块和挂钩/index.html","3e8d75800925cbbe7eb089d400dd27f6"],["/Swift依赖注入设计模式/index.html","5afcb6b8f39021bcdd6a04b6b6f405e0"],["/Swift关于Dependency Injection (DI)/index.html","ec1a46471497ab88e2b1fe77bfae116f"],["/Swift初始化模式/index.html","afb3ccc1d6caee69cc0fd845442d1c92"],["/Swift单例模式/index.html","2c142540b13ebf3ff647895d788c409e"],["/Swift原型设计模式/index.html","10004b23c3b85383d4677894268197fe"],["/Swift命令设计模式/index.html","ef4e4420944141b1026eadcf13af41fa"],["/Swift外观设计模式/index.html","a93c1bbcba3823db086a187df99698b4"],["/Swift委托设计模式/index.html","507f02f041a0707e0f75bfac35d9666b"],["/Swift对象池设计模式/index.html","0244f86e3e188ec754d4dfd152d0ebec"],["/Swift工厂方法设计模式/index.html","41ee4ed7d902cf252950f557dcbbacba"],["/Swift带闭包的懒惰初始化/index.html","b7dc3fc71da59103986c5cc28b5e4721"],["/Swift抽象工厂设计模式/index.html","2c02fce398b8059d9f1827e3d58578e9"],["/Swift生成器模式/index.html","384d8e9415bb3711f03bb4b6591270b0"],["/Swift迭代器设计模式/index.html","91c5806f037a2bb42c98fc5f027bfe00"],["/Swift适配器设计模式/index.html","667ecd526cfd04e592a0cc15877f5952"],["/Swift静态工厂设计模式/index.html","d01ffcab4db82c3ace9e70e3049f528a"],["/UIKit初始化模式/index.html","dab995b6c9d69b409dfcd3dc6829455e"],["/Ubuntu18.04替换国内源/index.html","1b483cb98f35f6f7e9aa196a6d511622"],["/about/index.html","b07067e19cc06d8866f39f6bc0c6cf2d"],["/archives/2020/04/index.html","95ed92402e58ec4faa7972f8851e601f"],["/archives/2020/04/page/2/index.html","ae425a81e1283a57775f531aeb9566a0"],["/archives/2020/04/page/3/index.html","290369320ddbfacb255cf8196bbc9bc8"],["/archives/2020/04/page/4/index.html","766fdda07dad42f1c4bada7515106521"],["/archives/2020/index.html","73542fd8f02b6cc4546c886096457638"],["/archives/2020/page/2/index.html","500f4ec3777c49ada9e69bf698aa7bdc"],["/archives/2020/page/3/index.html","79a0cbec0fef8b59f43edd38d400d4da"],["/archives/2020/page/4/index.html","31af46a2956946234823a1812573c816"],["/archives/index.html","9c6a98db11e5ca7b862a6d835ae865b4"],["/archives/page/2/index.html","139523e4639da5a38771c78b32ce5a13"],["/archives/page/3/index.html","759243fd0170266ff44c5451e9b72f85"],["/archives/page/4/index.html","0f633693542ffc18bc624b30a2730ef2"],["/categories/Hexo/index.html","5d7871f3dee4379ac55b49b7d16ef61d"],["/categories/Server/index.html","b26b3735420b83ae417406f8c3811401"],["/categories/Swift/index.html","7f2b18e9b483ae03d150fd4cee8f3206"],["/categories/Swift/page/2/index.html","e4f185ce6f9ef39d92b0309f00d6ac65"],["/categories/Swift/page/3/index.html","abcf4501a17d7e22f65b9f5f5198327c"],["/categories/Swift5-2/index.html","0ba94e814a2801ad3a37712efb50d745"],["/categories/UIKit/index.html","eb6a07185f57877746bb1cbbab6998f9"],["/categories/UIKit/page/2/index.html","ca37f28ac2af6e6fb5e145d8302f47a7"],["/categories/UIKit/page/3/index.html","4bacc1688348bc0676c4c071690d18e9"],["/categories/Ubuntu18-04/index.html","2b88274c060c845eb7b90f367118bea1"],["/categories/Ubuntu软件源/index.html","8f4dc2b14eea73c7b61119d73051f657"],["/categories/Vapor4-0/index.html","f3ff161f5013ee82fdcc55d0f8583328"],["/categories/iOS/index.html","d0b00a74225270d61a2d0762de78d5dd"],["/categories/iOS/page/2/index.html","a42b6026f6bbbd333f57fb7332ee0796"],["/categories/iOS/page/3/index.html","8c06842c2239be1b2b728d7acbb667ff"],["/categories/index.html","50d404672ad8193860dd170e843f6720"],["/categories/设计模式/index.html","a9eeb8b42cdb80b834e77767d8f71564"],["/categories/设计模式/page/2/index.html","e7e6448aaa032a8d69dc8b029f8a87f7"],["/categories/设计模式/page/3/index.html","7966f26c7773bf30b64cea10125a98d4"],["/css/main.css","5535388368c6d920275eb71f363ce7a3"],["/hello-world/index.html","66c86f2f09b53275d628ec59415036cc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8a7b660f8a4e0d5fc90a3185400fd342"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","19bd5dd7d6f447f4b6e92537a6e9c39c"],["/page/3/index.html","0ffbc7ed5bf9d3bb9fdca5312910ba8e"],["/page/4/index.html","17934774e5cfe52961bd52a914c19ebd"],["/schedule/index.html","9c5aeaac7fd2609aae1d8437ed06eff0"],["/sw-register.js","1f6377ad52130d73c273e2412b10cc5d"],["/tags/Collection/index.html","17734d2d8e7785aa664579a93441e66e"],["/tags/Collections/index.html","857fe5c968cd7525084f3d811d15e947"],["/tags/Dependency-Injection/index.html","7c787cbd5a448bfbfb27d9c7d9ce1eec"],["/tags/Modules-And-Hooks/index.html","1d21a36dccf035e2cbf799113eab0534"],["/tags/Server/index.html","3f3965bb6b230b2ce8fc4143c2286625"],["/tags/Swift/index.html","f02478766c775a40db4914ae5e5881f5"],["/tags/Swift/page/2/index.html","441a7b651f1b81411296c22c28bbed0b"],["/tags/Swift/page/3/index.html","9b7e15f7f0b2625420fec5a59d276b9f"],["/tags/UIKit/index.html","1b8fa1824caa46d3ab817060cceeba93"],["/tags/UIKit/page/2/index.html","0fd3ac2e212effd48e739a4cfa6b13d7"],["/tags/UIKit/page/3/index.html","59cc9fb268f6f83e77214602c72ccdfe"],["/tags/Ubuntu/index.html","bc2b3d836dedadee0ca1d34835ee88c6"],["/tags/VMware/index.html","c126ba392b5c8a69c7898d471c64c88c"],["/tags/iOS/index.html","e7449ca512e417b2fbf41efb36be53d4"],["/tags/iOS/page/2/index.html","19fa64b70341ca33dba9ede263f6e33e"],["/tags/iOS/page/3/index.html","c7b70629b7dcc40a3c6b7a531eeaa7dd"],["/tags/index.html","880cd0b2f2c73e9a9c0ecade777ac697"],["/tags/non-optional/index.html","06626d36b14e65c1546b6596b05ea3f9"],["/tags/optionals/index.html","f9557b5b7c97abf2e50132bdb5e55dd5"],["/tags/依赖注入设计模式/index.html","8b8a0b3bb1cb0941c7277ade63a9ac78"],["/tags/初始化模式/index.html","14451f3eb55cf0a5c0fd1bac3813623f"],["/tags/单例模式/index.html","fa0e5308736917e9adae3c0e70a7b0ae"],["/tags/原型设计模式/index.html","cb3dfccf76ab0ddd3d38ca22618a19e0"],["/tags/命令设计模式/index.html","a9791e4263bd731731982b81154c3484"],["/tags/外观设计模式/index.html","f6aebd7c5562f4c916b9f7ad586402c8"],["/tags/委托设计模式/index.html","a025406b841bf2deeef2256c58a61a1a"],["/tags/对象池设计模式/index.html","9e79c270ebbf6c56fd66a97f36146018"],["/tags/工厂方法设计模式/index.html","8fb150db25dc4c19a3d68104c90f946d"],["/tags/工厂模式/index.html","5d09ff528f5fe30180ccf3b0602d71da"],["/tags/工厂设计模式/index.html","ee3f9e5077f5cb9306922c4f40259c3f"],["/tags/懒加载模式/index.html","108be3ae97e197160720ce08d8966d0a"],["/tags/抽象工厂设计模式/index.html","fac866130c5188b1667fc35c88a532be"],["/tags/构造函数/index.html","5a7476756b3e5913996f4420726c280d"],["/tags/生成器模式/index.html","fdf5287cb110ed314c175098dbed960d"],["/tags/设计模式/index.html","9281abf357c21f5bcebc0d0579f6e349"],["/tags/设计模式/page/2/index.html","2fe923f5f7717d0883d3f2e673dc7993"],["/tags/设计模式/page/3/index.html","76305ad3c91d6b1014f56dc114417271"],["/tags/迭代器设计模式/index.html","39aebb56f5a9e766931b8e8446c85f2c"],["/tags/适配器设计模式/index.html","599e427943664c4cf6a9be6be2012776"],["/tags/静态工厂方法/index.html","93ac546b1cffbd17912e41fdedf31ee7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","eff4971c6aee38add7dcd42b98eb3d8f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","66f9583d4d19a558e8983560fc4b16fd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","52db155f11043531491476d3ce8aa52f"],["/在Swift中创建自定义集合/index.html","21d72530d7818fa0ddf5942e857f399f"],["/在Swift中处理非可选选项/index.html","e1f4590dbb379fe7309102d6d653e51c"],["/在Swift中重构单例模式用法/index.html","ea7810f9a474ea14a1c04efb06cca165"],["/揭秘 WordPress Hook 系统/index.html","280493a14bdc7df052ef35b19a776734"],["/比较工厂设计模式/index.html","c31096303faaf4b09a2f2102690aa122"]];
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
