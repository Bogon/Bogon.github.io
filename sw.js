/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","d1d61962f19a843ea94c426e0787dc63"],["/Swift Lazy属性初始化/index.html","78ad13d27e403831b91ae590701acdf2"],["/Swift中快速简单的工厂设计模式/index.html","b0430e7dab1a36b819dc7548b96a3ecc"],["/Swift中构造函数与静态工厂方法的比较/index.html","cf9000a5f596da711e35273d1e2dd8b3"],["/Swift中的懒加载模式/index.html","b664b342df079da357c057bde37eaba3"],["/Swift中的模块和挂钩/index.html","5dd53c9901e15de249698fcecc677512"],["/Swift使用布局锚点添加约束/index.html","d16d8632e3a2ea77a2c5fb155e63707e"],["/Swift依赖注入设计模式/index.html","5b729e532453e35f739eec17db87f109"],["/Swift关于Dependency Injection (DI)/index.html","673363ee328b4d4d32c373a6fd882046"],["/Swift初始化模式/index.html","6d40289be69e793c2e88ccc7e8e419ed"],["/Swift单例模式/index.html","43944166e219c2c46b4a11450203cab5"],["/Swift原型设计模式/index.html","424a2a1161075108e430b81d5827c44b"],["/Swift命令设计模式/index.html","e851ccccfcee7be9639c131a442509b5"],["/Swift外观设计模式/index.html","9101937667aa346e8baf60dbf721d2ac"],["/Swift委托设计模式/index.html","97678c84f8a24fbb57932aa8036c20f9"],["/Swift对象池设计模式/index.html","c4e6f8b48c323ce37cfdf77fb76f664e"],["/Swift工厂方法设计模式/index.html","d9ce676ce2d1bb6da510347f45aa9d8c"],["/Swift带闭包的懒惰初始化/index.html","2a98bca21a69e96596d3be25e5f938ba"],["/Swift抽象工厂设计模式/index.html","a7a7212fff6073b1a20a81d6c87ad108"],["/Swift掌握iOS自动布局锚点/index.html","d864724e624ec1d8aa5c02dbaef7ecd6"],["/Swift生成器模式/index.html","694a1e518fe569cb69dbbfb62a46067e"],["/Swift迭代器设计模式/index.html","e57553fb0604fe8a14a55241cbccac27"],["/Swift适配器设计模式/index.html","ac4ac91341cf30dca551062d321c9268"],["/Swift静态工厂设计模式/index.html","7b39dd6b73dc5f03fb3ad06c42a919fa"],["/UIKit初始化模式/index.html","3d7f8668f6260b7ca082c716a4d28f5d"],["/Ubuntu18.04替换国内源/index.html","128abe0d6c521676641981f94b8338a6"],["/about/index.html","87c4ab181ebce11b2711268a7431479a"],["/archives/2020/04/index.html","4d5b6f13b11e63571fe09ea4970c0646"],["/archives/2020/04/page/2/index.html","f501f842af5843bffefce16745dcbacb"],["/archives/2020/04/page/3/index.html","22a13de1982e213376cc6b3e2f1f3baa"],["/archives/2020/04/page/4/index.html","31315cce406006d13aea76fc9847ad6a"],["/archives/2020/index.html","f006afef19ababbe5294ebbe8bb21787"],["/archives/2020/page/2/index.html","16060281f2452fe1303f279c5a4ad754"],["/archives/2020/page/3/index.html","1cc0abbece61ef3389f45a5f6eb048d8"],["/archives/2020/page/4/index.html","e11c30ddc0aa3658b1caec74277c4de9"],["/archives/index.html","615dd6614cf9f9e0b7e195ce2814a1f9"],["/archives/page/2/index.html","4c130364fc71a84259a0fac493c42487"],["/archives/page/3/index.html","983bfceba663a19f28390c04ddb2dfab"],["/archives/page/4/index.html","dc314c0aa871c9ee7167b72d7bae1d5a"],["/categories/Hexo/index.html","5c751be820b6df4045fd3920e20bb6ca"],["/categories/Server/index.html","843290bdd20ab08fea754144697d645a"],["/categories/Swift/index.html","010387b64a0f9081b7b36b858b5914ca"],["/categories/Swift/page/2/index.html","d0af4afd792bda0b4040684a33890757"],["/categories/Swift/page/3/index.html","07418a7ab0dafce226c04f176e0756cc"],["/categories/Swift/page/4/index.html","6c661152f27561558ef343f7cdd9e9c7"],["/categories/Swift5-2/index.html","2f760f4a2b9e11d577d2fe3171d2522a"],["/categories/UIKit/index.html","576bf7ecad01fef8537116362bcff9e6"],["/categories/UIKit/page/2/index.html","d1574bee1bfae129bcfdac1098d64a31"],["/categories/UIKit/page/3/index.html","501019109585d661048ddab54ea02868"],["/categories/UIKit/page/4/index.html","ec512342431223a1914ceba056033e43"],["/categories/Ubuntu18-04/index.html","0f27bad8d63f6a6b6a2b70c958f1b01a"],["/categories/Ubuntu软件源/index.html","8c3e4f6ed8d8dc636219d686ebf3459a"],["/categories/Vapor4-0/index.html","5475b462d306a695c1f2ae96ebfaecf9"],["/categories/iOS/index.html","a363a678ad99caccb73bc04bdd17acc5"],["/categories/iOS/page/2/index.html","6ab67333f2e932bf47848a0c888ad8fb"],["/categories/iOS/page/3/index.html","a765351a25e76143162d8b6ed28e266c"],["/categories/iOS/page/4/index.html","cd4272f98367b54253445fc082aa96c1"],["/categories/index.html","702598e29fab64caecb03fe05e23cbd8"],["/categories/用户体验/index.html","24da5cdd83eb006214401a5fa34942f0"],["/categories/设计模式/index.html","7c227beacea8a084523c91da744637d2"],["/categories/设计模式/page/2/index.html","ea4bf3fb4bd76120c4f536a872330d94"],["/categories/设计模式/page/3/index.html","e0abb4151f599e1c87e0e0258bf89861"],["/css/main.css","49d330d6db8e35fa25dc53f3fe2eadd5"],["/hello-world/index.html","3af2691400052264b2bc60661711f446"],["/iOS自动化布局编程/index.html","0a11eac53ffe6b97d4b0dff1385f79eb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","54e2756b74c2b03409643a602eac7b7e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4f4f31a01572a467c00934d026418a01"],["/page/3/index.html","0c3ffba74668b3120ffaa70f1684434f"],["/page/4/index.html","643e0275f1b70eef85978d6e84b0a39f"],["/schedule/index.html","9b065ceaacffd5ae177ef43b81fd5bcc"],["/sw-register.js","095a0302a42cb08d4f63e888c1299980"],["/tags/Collection/index.html","81ad5e265de3fbdd76047ea49758a4ce"],["/tags/Collections/index.html","1b0e0580004a584ce47973388452dd4c"],["/tags/Dependency-Injection/index.html","30dbce2fbdb42d058444a0f856edbb44"],["/tags/Modules-And-Hooks/index.html","ee4f0896eb5f509235ec364768bb94d5"],["/tags/Server/index.html","37f1cff46ef257cbcfef8cf9cee06761"],["/tags/Swift/index.html","a9f72bbce87105e4377117ac5ae817d0"],["/tags/Swift/page/2/index.html","4476c3e1420c1ab3fa54ee6feb11aaf0"],["/tags/Swift/page/3/index.html","f5961a24e2134c860711c335c109214d"],["/tags/Swift/page/4/index.html","6eb61967c881ddb664652c70e3ccc419"],["/tags/UIKit/index.html","3644e51a541b7a3971c7dc3a27acb24d"],["/tags/UIKit/page/2/index.html","0e42ad2cb2c4dfb4f7e9362fc771ee1f"],["/tags/UIKit/page/3/index.html","895e839f5debc110545be0a93959ea47"],["/tags/UIKit/page/4/index.html","14caec8b2342617dcfc4dd03c111cf5b"],["/tags/Ubuntu/index.html","b3474eea9e207f9d9edb1a6aea87b68c"],["/tags/VMware/index.html","8c506bac11b44fd88b633295c8795d89"],["/tags/iOS/index.html","4db97ac2c6f4a837c7276decee6aef52"],["/tags/iOS/page/2/index.html","ad353337e8c4ed91d480d2164d4261c1"],["/tags/iOS/page/3/index.html","357f1d9981b52561774e6835e62326ec"],["/tags/iOS/page/4/index.html","e4079cdd7b6c13b6d404691664f6eb0a"],["/tags/index.html","aa0a3d99cb21e35dd32ccd08ab645fec"],["/tags/non-optional/index.html","df224b47a44de17fef099cde1683c3e3"],["/tags/optionals/index.html","3e9e84ab66750ae1971a5f958bfa000d"],["/tags/依赖注入设计模式/index.html","08c4d42ea73b9a350976a3965d07f0d3"],["/tags/初始化模式/index.html","ad3e350cf047ef46eff419b2ae15b943"],["/tags/单例模式/index.html","f45526c4cd305f4365d5afe82e7d9413"],["/tags/原型设计模式/index.html","bd4d2c09faebca7247e4ca81c0694d24"],["/tags/命令设计模式/index.html","781e0eb6727a47d5f80525b7a8cf9e86"],["/tags/外观设计模式/index.html","187ff311261b9fa7ffa829633ebb561f"],["/tags/委托设计模式/index.html","fb4b0188652b17a70c36816dcbcc9a65"],["/tags/对象池设计模式/index.html","86d71ac6929a69d3fe5715f6d1077c5c"],["/tags/工厂方法设计模式/index.html","8db793048558518367095cb4dc18676b"],["/tags/工厂模式/index.html","a393c5a5e9adeef85816116aaba0e43c"],["/tags/工厂设计模式/index.html","ed56ef706b91ffe1be237acc0e6696ef"],["/tags/懒加载模式/index.html","58b8250e240d6ad9b6937e2c549561c6"],["/tags/抽象工厂设计模式/index.html","bab5ba30622c0d9c50a3ccec9f9ac6cf"],["/tags/构造函数/index.html","df8054f52e12649758bdf75b485be51a"],["/tags/生成器模式/index.html","c87f6a8a80b2cf620ffa5a81020718a5"],["/tags/用户体验/index.html","9815df00e4fc9d6dc7b15f5d238e5a00"],["/tags/自动化布局/index.html","dbdc2f1211f9643d6e383d769fd7cdd6"],["/tags/设计模式/index.html","586b7d0458180e3ed64b2e4125b4692d"],["/tags/设计模式/page/2/index.html","46713a17e6e40a769584ac1a510cd985"],["/tags/设计模式/page/3/index.html","9361bcb82db4615b8e2c62e1522115c9"],["/tags/迭代器设计模式/index.html","371f39dec5ca097a015e96a0d076c834"],["/tags/适配器设计模式/index.html","59eb206c3dd89a13ac130569a94cfd4d"],["/tags/静态工厂方法/index.html","fa348052cba5ada6b05ac167ea0c94e6"],["/产品开发的幕后花絮/index.html","9395d9b8b99c734755e9542b1eab0e0a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","838c2f89e80828d1ebb08807363bd97d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","db3ca34a760546b424ed87a8c8cb8907"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9a718ddd94ebb749d0b7b1e27467cadf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e86d5a26b4a88e758c023f6d10815ce4"],["/在Swift中创建自定义集合/index.html","cfc74086a9219d9c7ea7e34a7ae20f7d"],["/在Swift中处理非可选选项/index.html","4da1751b39d9a4e86bb6481b32e8768c"],["/在Swift中重构单例模式用法/index.html","8fa58c1d0aa2eb377b72c642ba3d33d9"],["/揭秘 WordPress Hook 系统/index.html","6b4f9c87dcf1aabc1524c28d8e18cad3"],["/比较工厂设计模式/index.html","8475c03bb79f9a7815c77b4b6fdcf40a"]];
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
