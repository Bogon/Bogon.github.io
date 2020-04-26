/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","6116b356eb4e750aefb47961ae7565ed"],["/Swift Lazy属性初始化/index.html","6b65ecb0e9816d185dbc5e015a18cd5f"],["/Swift中快速简单的工厂设计模式/index.html","e4ec68d1583a77c15eaba256de2c30a7"],["/Swift中构造函数与静态工厂方法的比较/index.html","935a04cf5944169091261f22f2d0088d"],["/Swift中的懒加载模式/index.html","21b4c7e56b4076c4920122f3fda11307"],["/Swift中的模块和挂钩/index.html","b2f034a07a33102d3e3e622ac448093f"],["/Swift使用布局锚点添加约束/index.html","29e8dae4d6a7ccaf8e94752469791e97"],["/Swift依赖注入设计模式/index.html","1340a1f01bd74cbaca8ff049fe087db1"],["/Swift关于Dependency Injection (DI)/index.html","e79a565c601eb68eb1cc98830085f759"],["/Swift初始化模式/index.html","00a90e6f6d1701f074df4ad38713e039"],["/Swift单例模式/index.html","903d86bf14e7de9034ab5adb7164ae2d"],["/Swift原型设计模式/index.html","081e3bfa859fc631bc95f92f15f6a5b4"],["/Swift命令设计模式/index.html","e3e99ffb0eede19b6bee2fd8fe6a6acb"],["/Swift外观设计模式/index.html","1deac13a9d17cdaf0ebd167cc424767d"],["/Swift委托设计模式/index.html","2aa10ae60b4381cc57f96089bd77a3da"],["/Swift对象池设计模式/index.html","40c3040568b78393e6bb12297b97b903"],["/Swift工厂方法设计模式/index.html","eae93e025b3c552b8502c03f3fcd5560"],["/Swift带闭包的懒惰初始化/index.html","aed1d2a9ec427a27a7df75d0ddab9d89"],["/Swift抽象工厂设计模式/index.html","07a2fa0be823a7af8bab04ea2f2f22a0"],["/Swift掌握iOS自动布局锚点/index.html","25076ebbf94ec45e62e65a028f84e326"],["/Swift生成器模式/index.html","caf3f9e1b09f2d3517a54510575299a4"],["/Swift迭代器设计模式/index.html","1965af2dbafce9a1e6b8837b068a1a8f"],["/Swift适配器设计模式/index.html","c6f60c0175a05592daedd5e859bccf08"],["/Swift静态工厂设计模式/index.html","993aa832e070d5ee4578035cd3e5c267"],["/UIKit初始化模式/index.html","ba64d896a9f2f108358e2a6ec5060c4d"],["/Ubuntu18.04替换国内源/index.html","0af5ffc7ae6ea287957cc536b4d0a8c0"],["/about/index.html","4ca2fb5bba37d4b3fa3f990baa1cce20"],["/archives/2020/04/index.html","b7a6c4dbc50f1f85cb7cab92cbe01376"],["/archives/2020/04/page/2/index.html","0240a7f004a66b19f3ba94165be80d10"],["/archives/2020/04/page/3/index.html","8d429ebd2d4ef5d53a90b76ebeeee7f0"],["/archives/2020/04/page/4/index.html","abf91260023445d50254cd89c9c164fd"],["/archives/2020/index.html","48508bf69d087350818e62141129864a"],["/archives/2020/page/2/index.html","d3e69036ecf3ec619cde464213b93a85"],["/archives/2020/page/3/index.html","ce158d24ccf9c401c7c26b3ab880ed8b"],["/archives/2020/page/4/index.html","e7e0ebdf3acab78f3bc85babcb7dbc3f"],["/archives/index.html","35d5ed710cb120b7ece454b3e0de433a"],["/archives/page/2/index.html","acbed10b19d3ddc665ea9990c918a519"],["/archives/page/3/index.html","81f2c5aad7fde43c3e2070bcb1a32f84"],["/archives/page/4/index.html","72d403a75f5db5f22bd906e6226fc338"],["/categories/Hexo/index.html","bac66b34d351febce46985194e7c7778"],["/categories/Server/index.html","b263b6078dd23bc0a409c472609942ca"],["/categories/Swift/index.html","0236f3207ddf2f252d511722dff98dad"],["/categories/Swift/page/2/index.html","966a86b45b92b32c7eed08cffb2815cc"],["/categories/Swift/page/3/index.html","74493387cd9bea088472ef625bc012c0"],["/categories/Swift/page/4/index.html","baf4dc287aa286cae7433d5c3c1e5d92"],["/categories/Swift5-2/index.html","ffc2c5d1d85fe3dba432debcb42531e0"],["/categories/UIKit/index.html","f145004d5442a035ff783df6ec143956"],["/categories/UIKit/page/2/index.html","d3caec06b7350ef9f00f36bf0a2a9262"],["/categories/UIKit/page/3/index.html","ca8885564321d22cada73e4e08621a3c"],["/categories/Ubuntu18-04/index.html","a3bec1c840be09eb39f8194f14c15bad"],["/categories/Ubuntu软件源/index.html","45e0fcde0b54ff619c7ded7564c76e81"],["/categories/Vapor4-0/index.html","57c6f09e7a321427e712ebb88748aeb2"],["/categories/iOS/index.html","ab290747b3d77bf8d028f55effa969dd"],["/categories/iOS/page/2/index.html","71bb388d3ad7facd1c2d423beb9e6cc2"],["/categories/iOS/page/3/index.html","daf519871e8e6e697408ef8b7544254b"],["/categories/iOS/page/4/index.html","eaad3758ec3f8a27ed6905b49b5c2b84"],["/categories/index.html","17c41a60fc160339d268fbff8ad021de"],["/categories/用户体验/index.html","31431bb0caa041f2710abe8f05e036f4"],["/categories/设计模式/index.html","97a595a1509faa6aa4e23f1753c264c5"],["/categories/设计模式/page/2/index.html","f6a148c86fe8295c8b097154142373b7"],["/categories/设计模式/page/3/index.html","9fe759c2f9b329248fe2e8e02bcad435"],["/css/main.css","a5e88865ecc6938bd261e719b40802e8"],["/hello-world/index.html","45d9d698330072af48ed26b7386acc3f"],["/iOS自动化布局编程/index.html","c2693b5703c3d58f956548f3e21461de"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","564b472ab5d24c4379356ce524997e4b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","698ea7edeaed9c56cee88ae07e36a36d"],["/page/3/index.html","dd9aa55ea038434e6ca9929429c7dd7a"],["/page/4/index.html","da91115e65c17508814662b6e4f6e2b8"],["/schedule/index.html","3fe339a46e86bcc22dd026943cd0633f"],["/sw-register.js","cd0b507fa1b93b221dfa16ceb78774ef"],["/tags/Collection/index.html","581b213f7b8633f895eb78708d2a08f9"],["/tags/Collections/index.html","5f2ecda53f70177c46a60ea47a8392b8"],["/tags/Dependency-Injection/index.html","878a982ad05a091e9f597b345359a6df"],["/tags/Modules-And-Hooks/index.html","407940e9b54ffd9726c967a46cff9225"],["/tags/Server/index.html","5d9977c2b8a7e53b0720ba0888ad3f96"],["/tags/Swift/index.html","3d466fb19f1cf90e261ba97621912c8c"],["/tags/Swift/page/2/index.html","d98783d909461e99417ef061d731f513"],["/tags/Swift/page/3/index.html","aa5c7df9034e54d6b6a770e420d0b459"],["/tags/Swift/page/4/index.html","3496955e677853dea086cd4415801092"],["/tags/UIKit/index.html","018634b6ad5f805df93f7268c06b88e0"],["/tags/UIKit/page/2/index.html","c2c0d7c0de3e677bbb6416c53a9e9e35"],["/tags/UIKit/page/3/index.html","3d03dec59baa47e8d5e4f256cef0ac45"],["/tags/Ubuntu/index.html","6e71136347c4c83c1f3a5b60e613d142"],["/tags/VMware/index.html","01ae161139b609292f3347036f4eba75"],["/tags/iOS/index.html","bdcfec2faeede497b1f71da91870a59f"],["/tags/iOS/page/2/index.html","047f275101290b58add822e78dd0a0ed"],["/tags/iOS/page/3/index.html","903b79db5934778329f4c3bf5be01837"],["/tags/iOS/page/4/index.html","cf1ab3738c43a3d68b069b2506ea5ff4"],["/tags/index.html","cbb4ff0b65ded6eef5e44f6514854a2c"],["/tags/non-optional/index.html","66db15b341a48925cea2531824b7203c"],["/tags/optionals/index.html","5aec34e72e9f3ac050fb74591c914dfa"],["/tags/依赖注入设计模式/index.html","d763e412a51fc41df95cbe583e9904ae"],["/tags/初始化模式/index.html","2447f68ea50a46d00910a561fa2ca271"],["/tags/单例模式/index.html","f9ef9e8f1768f1dd80e0ddfc60c601d1"],["/tags/原型设计模式/index.html","5edd1b853f8ce274621735c93c376229"],["/tags/命令设计模式/index.html","11cef6ab4ee04def0eea47f8fa7141f4"],["/tags/外观设计模式/index.html","efe0861f163e49d3a6dc4f833d87d718"],["/tags/委托设计模式/index.html","cf563f6000a00bdee90cedc15fd1eaf4"],["/tags/对象池设计模式/index.html","49c9173f0e0f1807bf3cd0bf130d6d81"],["/tags/工厂方法设计模式/index.html","8cc2b1b7cb2c4c384d7b6dfb57ca5b87"],["/tags/工厂模式/index.html","933afcdab7d4c2ec5dbb756af8b8c3de"],["/tags/工厂设计模式/index.html","a82618218430d67d70669dcf21ead512"],["/tags/懒加载模式/index.html","e7cb128f8164d15d94c01165b5fbcb40"],["/tags/抽象工厂设计模式/index.html","e1a748fcc5d3a23fa75e8f25a9ac1b4b"],["/tags/构造函数/index.html","cdd43ff6b732402db46e0b192b8f0301"],["/tags/生成器模式/index.html","02caf3f064dde9d8f0dd3cbc689cbded"],["/tags/用户体验/index.html","8aa2f1f5f660ccbf720db004acdf2bfe"],["/tags/设计模式/index.html","e841203fcfb5e9912d328f2dd1fdc49d"],["/tags/设计模式/page/2/index.html","e47c11371b2e895770395413b0a508d1"],["/tags/设计模式/page/3/index.html","71ff120deb6149bc1dca91c119882052"],["/tags/迭代器设计模式/index.html","2b482c229ab42cfc2b4daed45c83afa1"],["/tags/适配器设计模式/index.html","399e271ed06c51407e6bbf1e1565f735"],["/tags/静态工厂方法/index.html","77dde254e9b4112e5a58732bfb6a4eba"],["/产品开发的幕后花絮/index.html","a72524510607b63831aed9d8575b2b5c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","8ed3239e2c35bfacd8f1af59dacf9a15"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","848b2c5816e3c1a30b99d39d65c64e4e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","0768c8d6c206939a7f883a3c11c431f1"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b416a6bf85ed5b71abce3bef4469ee43"],["/在Swift中创建自定义集合/index.html","9ee0ca2c4a9cc2e2a13781b4e6188eea"],["/在Swift中处理非可选选项/index.html","6a11ac01ee047dabf4f4c9382fbf2f06"],["/在Swift中重构单例模式用法/index.html","d7ec6661a6121887ae55c55a11605da1"],["/揭秘 WordPress Hook 系统/index.html","75828352d8249c3c2f05246c270f9c4e"],["/比较工厂设计模式/index.html","e653e324766a8b579ccea6aa259294f4"]];
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
