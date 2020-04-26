/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","1f82aae51ba700531e33a14bb437d5a0"],["/Swift Lazy属性初始化/index.html","fdd96a928134778ae0cd306d37a8ffdb"],["/Swift中快速简单的工厂设计模式/index.html","286d2ad95d108c3f4d1306299936fdb1"],["/Swift中构造函数与静态工厂方法的比较/index.html","1b01fda3cf43d66dff95f29dab87e89b"],["/Swift中的懒加载模式/index.html","63fc7bd91abf9cb2fa1e0d927cfbf030"],["/Swift中的模块和挂钩/index.html","a89c0e19fb998f0587e9f04eddc421c7"],["/Swift依赖注入设计模式/index.html","f61654099e2bda5e2841ddb9f3ee3076"],["/Swift关于Dependency Injection (DI)/index.html","a7a912f9d963dc3f5ac38efda0a1c85f"],["/Swift初始化模式/index.html","9f6221cf92e8e75b037c6b1efabeef9e"],["/Swift单例模式/index.html","acac1c43371a58cd275f14afac8aa656"],["/Swift原型设计模式/index.html","5b5ac5ffbbe155fc6b853c68491f7a36"],["/Swift命令设计模式/index.html","015a733713e25c54b91960c555eee37c"],["/Swift外观设计模式/index.html","e18629486482beaa6a2d2d6f9f96ca9f"],["/Swift委托设计模式/index.html","258826b6d839999091b63771c872bce8"],["/Swift对象池设计模式/index.html","8f6e430ea0b4a07f6ae72bb9dc2a6713"],["/Swift工厂方法设计模式/index.html","29db859770e1707186254e225b741634"],["/Swift带闭包的懒惰初始化/index.html","a27eedf264d374bb9fc6933a60a68188"],["/Swift抽象工厂设计模式/index.html","48cdf42b00675347a3dc496cc81d096d"],["/Swift掌握iOS自动布局锚点/index.html","7e0f633dea53655182819cab4d2e10ad"],["/Swift生成器模式/index.html","42d73b9c956b3ef3bc76ba434223ce5b"],["/Swift迭代器设计模式/index.html","de5c4e03437aa198a6677f86116c9856"],["/Swift适配器设计模式/index.html","8fef5cab5053729f1365f8360de62634"],["/Swift静态工厂设计模式/index.html","cb0fc9a2cd8dc047e2aa74e9af09395a"],["/UIKit初始化模式/index.html","3421e53cfbcf0bf63b833cf026895272"],["/Ubuntu18.04替换国内源/index.html","0f1965289361a7f3a75bfcbb9237d636"],["/about/index.html","02d4b2ed5678d32514225169a57632c9"],["/archives/2020/04/index.html","660a60c76c90bbb32190dd3e362bc3cb"],["/archives/2020/04/page/2/index.html","76e6856fdc54690059dfcf20090fff7b"],["/archives/2020/04/page/3/index.html","4bd1affa5b4fe8c0e27bb9514b39fb80"],["/archives/2020/04/page/4/index.html","f789329144085577fbf8274e9680cf96"],["/archives/2020/index.html","e34bcb5ba09610b0931369b7e638db90"],["/archives/2020/page/2/index.html","6ad1427a3f71793a838d829972fb928e"],["/archives/2020/page/3/index.html","1221a60f5ad99917793d12a686428966"],["/archives/2020/page/4/index.html","7d759fb699d3654f0afe89643526de46"],["/archives/index.html","7391a53b9b676900aa244acde49b9acd"],["/archives/page/2/index.html","bb39b3304bf48bc310312fea682c74fd"],["/archives/page/3/index.html","25c67b7cbea17b7014887392e0021688"],["/archives/page/4/index.html","da481a796e1f517c2b6117f1d566dec4"],["/categories/Hexo/index.html","44d21446a1633a562fce4fc94a920643"],["/categories/Server/index.html","b2782a3983ac4592cde36a3aa894bc74"],["/categories/Swift/index.html","b3511bb481866c9a4aad33b2963cd181"],["/categories/Swift/page/2/index.html","b4055f3ba833f31f6096d3888d57f96e"],["/categories/Swift/page/3/index.html","f7faa5742699bb26417c8ea6515fd766"],["/categories/Swift/page/4/index.html","77b46e49f06ff67c7c3e67b133b2a4e9"],["/categories/Swift5-2/index.html","6a37704f54d316eadc30bcc5f9c70f62"],["/categories/UIKit/index.html","29c5fdd37d498d755a0c92b26699c752"],["/categories/UIKit/page/2/index.html","57575708f3d8b64bea2c28d0a462ecf7"],["/categories/UIKit/page/3/index.html","223c07b97235f20115396c439f3e522a"],["/categories/Ubuntu18-04/index.html","5b8580d2e5fa5f0bcd1f0fa75a9acd53"],["/categories/Ubuntu软件源/index.html","7b81973d055a6ad368757e9ed55839c1"],["/categories/Vapor4-0/index.html","3b0e4656defef04cd2e9dd54e699acd6"],["/categories/iOS/index.html","674d0fb20c61bd9c1202c7fef11c1752"],["/categories/iOS/page/2/index.html","1d61f9895c21f29664938307aa55bc5d"],["/categories/iOS/page/3/index.html","09380f45a9c6f754bf7f8b3fe55f55a8"],["/categories/iOS/page/4/index.html","d6c3136b7e1062dc75c89b5752a224a6"],["/categories/index.html","a7f994348bfdc6e07b0f7ef39a141f1f"],["/categories/用户体验/index.html","9ce24994d0e05f0048008ced5ea0b0ea"],["/categories/设计模式/index.html","08d0a9455cbf5446096498d472919e29"],["/categories/设计模式/page/2/index.html","ac4ce2f1a08c9d0f39d11d4f7cbb8a7e"],["/categories/设计模式/page/3/index.html","e6bbaf5f9be6ccec650e518cc7e24b19"],["/css/main.css","4058cb7c8174a99f06a5bb1e3d281cd9"],["/hello-world/index.html","a51a31c6e68729c418f6e5cb80d5db81"],["/iOS自动化布局编程/index.html","c2c86ed8d00db9465e655370a793d4a0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","3ead92eee3e3074b298b75feaab42bb5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0b1dedd5f48b644d115ac9b4337c90b0"],["/page/3/index.html","9be8cf248be4a9e3a19d84c9d6aca05e"],["/page/4/index.html","77ee433ea70d69be46a12ce20698b277"],["/schedule/index.html","9442c9c34e4b6b95bbbf4e09f3f9e391"],["/sw-register.js","f315a4b0785b331f2e716ff9277403f8"],["/tags/Collection/index.html","f143ddd0d867612d27f8b1b4da836674"],["/tags/Collections/index.html","9ef847e1e9d7315448634a9d61c43db0"],["/tags/Dependency-Injection/index.html","b983b240e9c1ac5404e8f53de9135ca4"],["/tags/Modules-And-Hooks/index.html","8ae4fb4d00ed5395c8c49411260e31d4"],["/tags/Server/index.html","8b39240adde19229dcc9ac04537c5023"],["/tags/Swift/index.html","5246c36a53c02941b48bc123314ba746"],["/tags/Swift/page/2/index.html","068a59867db99fc63461a9030a0f810e"],["/tags/Swift/page/3/index.html","4a027ab39bf02308c8b0f8a9a8f938cf"],["/tags/Swift/page/4/index.html","f2504f8060f9b0a833c52704d957f258"],["/tags/UIKit/index.html","252aa0b0205a6e020a86baccfb7df812"],["/tags/UIKit/page/2/index.html","3dcb62c76956c06eeaa626da19e63f1a"],["/tags/UIKit/page/3/index.html","7b32de478506135112e956f3c6c9b8ab"],["/tags/Ubuntu/index.html","f5280c2bcd670ae62392321bbc45ea8e"],["/tags/VMware/index.html","e223c3e77a7be6d46e96b4de3d2dbcd8"],["/tags/iOS/index.html","657b7110c48e46e73cc0b060562fb552"],["/tags/iOS/page/2/index.html","9c8ecd4127f9f3c24e256906e3d8053a"],["/tags/iOS/page/3/index.html","b664f517437672bf6949b59bdf067888"],["/tags/iOS/page/4/index.html","903b83575f27e9694bb12d007373904d"],["/tags/index.html","6c1ad23d4bea5ce1c6ec960388f9b08c"],["/tags/non-optional/index.html","7e17e66569059e77b764f72647645a2e"],["/tags/optionals/index.html","0c8434ca637c5125f65e3ec190bf4e3d"],["/tags/依赖注入设计模式/index.html","0a52f3d3cb9f6b07b23ec0600834d741"],["/tags/初始化模式/index.html","ee62e65dfb1b9a39075f27811ff1b090"],["/tags/单例模式/index.html","21024f468eb286bbf1334467a4b2997e"],["/tags/原型设计模式/index.html","14c5e914e2e8d6d18d67475896bd459d"],["/tags/命令设计模式/index.html","6db6d144c38dff61be09311a9424f794"],["/tags/外观设计模式/index.html","736fefb8c505b71b761fea766f69ca42"],["/tags/委托设计模式/index.html","e2e80fb5572916bda501404dbc38ee30"],["/tags/对象池设计模式/index.html","f3c92a80e1d540ec7faf72cb30c4ee54"],["/tags/工厂方法设计模式/index.html","4c62520c50ed93735419ccdf1c131758"],["/tags/工厂模式/index.html","24bd8d61eb4965e95642cc4b299596f0"],["/tags/工厂设计模式/index.html","d02e573e3400f4b2362353ed6a6bb296"],["/tags/懒加载模式/index.html","ab9b458170267bd6d854371d60560351"],["/tags/抽象工厂设计模式/index.html","25fba2b05325810da9e90c76849df166"],["/tags/构造函数/index.html","dda686aebc82456716aaa511bd06bcb0"],["/tags/生成器模式/index.html","2ff7e3af73dedd730f5a82df14d8b83c"],["/tags/用户体验/index.html","2ef11a5a3c946ce3fe0ad85d63dafa07"],["/tags/设计模式/index.html","9bd2ecd05a615598dbb312267f395731"],["/tags/设计模式/page/2/index.html","3f92ce6b966125defa2940ea50a638a9"],["/tags/设计模式/page/3/index.html","aef1aa1f6b2c2ce2439bace97902e43a"],["/tags/迭代器设计模式/index.html","882302b5d3e643dd1ae450ce2e347970"],["/tags/适配器设计模式/index.html","f4c60303c114d1c2d246cf25811acd5c"],["/tags/静态工厂方法/index.html","485f05d8f493ce4c539a3c021a942d07"],["/产品开发的幕后花絮/index.html","3137845cc9a3e398ee71781ca957ef72"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0fbec2feabe3b23cb6a4c3e84ad04085"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6be59936e2a049dc414947c93c97c40f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","14f963d86fb2e65964878baaecfa5dfd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","7b067ca6f74fb2e87cb4bd3bace4b9f8"],["/在Swift中创建自定义集合/index.html","ba4e7cbf364f78b91c224f4e76c18fdd"],["/在Swift中处理非可选选项/index.html","c7e152dc5b9407a5ac9e7e1f9626f098"],["/在Swift中重构单例模式用法/index.html","35d7d9247b86296c4bb8dd7b82b987b7"],["/揭秘 WordPress Hook 系统/index.html","2c13610fd30eba9a80279ff9513381a3"],["/比较工厂设计模式/index.html","fa539c16ac9fb1b596c3cea1153279d0"]];
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
