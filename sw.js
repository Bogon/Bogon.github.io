/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","0b6b51c4f5209a20e35c8b6ca6771b92"],["/Swift Lazy属性初始化/index.html","357682688fc057919993fc412c6ec3ff"],["/Swift UICollectionView使用指南/index.html","29fd458b9f422f725698234d4030f932"],["/Swift中UIColor最佳实践/index.html","fdf23ef2fb33ebd6368ce3eedfc8b59b"],["/Swift中快速简单的工厂设计模式/index.html","26dbd4bf0992c2c5869516d254ede6e7"],["/Swift中构造函数与静态工厂方法的比较/index.html","3c4e8bc25317bb907726eceac1099287"],["/Swift中的UITableView教程/index.html","09e121834fb71e7bd31d1e6e05e1c846"],["/Swift中的懒加载模式/index.html","90c661719adefa22cba2536ffad7007b"],["/Swift中的模块和挂钩/index.html","5b24dfb021a171d17f5f590a8a57e690"],["/Swift使用布局锚点添加约束/index.html","acaba518e19d5d71029c56b80bf59c59"],["/Swift依赖注入设计模式/index.html","639e80d12fa6f35a3cb971f95c3a9d53"],["/Swift关于Dependency Injection (DI)/index.html","6c08dfa9e7ebbf41282d3f0e14b6d38f"],["/Swift初始化模式/index.html","b8b5a2e10b141d5d9a493f3fc4cacc91"],["/Swift单例模式/index.html","0758ce285c7a7a96407e6b744f0c10b8"],["/Swift原型设计模式/index.html","ef8a01706bfc4f2cbd4516bdade5b9bc"],["/Swift命令设计模式/index.html","bcca6e8c73cc231398da4b9b069aca80"],["/Swift外观设计模式/index.html","c03ce9b46e861ea81fb71d63bf5a0f69"],["/Swift委托设计模式/index.html","2cbde0c2e2934e3f2d4fe32a6800b1c7"],["/Swift对象池设计模式/index.html","273f662859cbe7542f16ea1500af9d4f"],["/Swift工厂方法设计模式/index.html","bdceb42cf14fc4cc05071f4b7d55fdbe"],["/Swift带闭包的懒惰初始化/index.html","29181905004a1944da9437e117021d72"],["/Swift抽象工厂设计模式/index.html","15d0335c5ceb5e7accc4e8e22c5f9506"],["/Swift掌握iOS自动布局锚点/index.html","fa4e40f405077ae8d1b742caaf5adef9"],["/Swift支持旋转的自适应单元格/index.html","ef7bcd8a6369cfac59a27aebb033dc22"],["/Swift生成器模式/index.html","4c79dcf17969628e0775b87dfb253040"],["/Swift结合Xib文件自定义UIView/index.html","485d96c54dbcc50eaab5d6d4d392d0db"],["/Swift迭代器设计模式/index.html","7cfd810d738a91c25ce7283942eabcb2"],["/Swift适配器设计模式/index.html","e00b97e94ff759eccb5bb1108d5102e6"],["/Swift静态工厂设计模式/index.html","c65682b8c02610d296e16cba7862435c"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","ddfbbdcaac712d00ce7cbf826447f752"],["/UICollectionView data source and delegates/index.html","3014360a721e9ff772d58e0c5103f19b"],["/UIKit初始化模式/index.html","16f1aaa716c172844f8679c49ef5fdba"],["/Ubuntu18.04替换国内源/index.html","4ea6f86930e14a7e165cc37690245841"],["/about/index.html","886002afdedfa3418a411197f80afc25"],["/archives/2020/04/index.html","e619d17a1fb2993639c84d9ef9b679f0"],["/archives/2020/04/page/2/index.html","5c5210308baa9272c5ca92577f6ec945"],["/archives/2020/04/page/3/index.html","0258054e8a3afe2973690492957429ae"],["/archives/2020/04/page/4/index.html","e89276b825d9e20c777e35fb01cfff40"],["/archives/2020/04/page/5/index.html","31f081849fa543407dd2bd7438f887dc"],["/archives/2020/index.html","38ff5f6b90d4852bde5c4711dd45f3ca"],["/archives/2020/page/2/index.html","e233fd9dc108a6e5f40448a8c4e5d1ba"],["/archives/2020/page/3/index.html","68639381143163c0d913b99269e8f187"],["/archives/2020/page/4/index.html","0bdd2318bba9721206780ed22304c2f4"],["/archives/2020/page/5/index.html","456824eaeda8d24c0f42738a32b16ab5"],["/archives/index.html","46d7ffc240ca24ed3a85820217d98eb4"],["/archives/page/2/index.html","5c1ce6e1e32736fc94e751d85d366dbf"],["/archives/page/3/index.html","2b272771be0e4190155294aee6ff0672"],["/archives/page/4/index.html","a8414978e49b9bd0572f9b5722643618"],["/archives/page/5/index.html","9a1344a98326e9457a9fa8b5bea4b7f8"],["/categories/Hexo/index.html","1d3cfb872382fc85fd98fa283376d3f7"],["/categories/Server/index.html","e14d31801e417e710ec63523e6bbf920"],["/categories/Swift/index.html","68e5b138fe7dc5c694160454ee516067"],["/categories/Swift/page/2/index.html","9163458f3001ce05f419e6bbbf681241"],["/categories/Swift/page/3/index.html","8855ca6cc7afa24074ae04a099593b44"],["/categories/Swift/page/4/index.html","13034cfde890feb3daef2822e921a77f"],["/categories/Swift/page/5/index.html","7fc744ef414721e033b23aa50d80cd82"],["/categories/Swift5-2/index.html","abfe63e928b6744f1dff198bbc4cf3e9"],["/categories/UICollectionView/index.html","c1f08e048fe6ab889ea65feba9f8e5f2"],["/categories/UIKit/index.html","a3ca619168291a95c5fc1131089413ec"],["/categories/UIKit/page/2/index.html","a1d7c7430d868be4e89fd9467115068c"],["/categories/UIKit/page/3/index.html","c6f31445e0a47bc5b9b0ea7b8c3234c7"],["/categories/UIKit/page/4/index.html","83c3b693bfeca761d4abd88e787a9cbc"],["/categories/UITableView/index.html","083c0ee9a9172dde416277a794da5677"],["/categories/Ubuntu18-04/index.html","29c954657ddd5d8da3a83dc4adf094e1"],["/categories/Ubuntu软件源/index.html","422c0813bef0726cbb5aae48c0cc056b"],["/categories/Vapor4-0/index.html","e0035521d8c647303efa1cb44872b9e3"],["/categories/iOS/index.html","675f98087cebc57d278ae61007d2be15"],["/categories/iOS/page/2/index.html","8559fa2be0c4987e841619aae2363e0b"],["/categories/iOS/page/3/index.html","c447b68b755187406d030e383b19bbb4"],["/categories/iOS/page/4/index.html","bfca6f52f379d91aedd140662d6bfb26"],["/categories/iOS/page/5/index.html","6e438de261a387c9fe2fda364433fe3f"],["/categories/index.html","8494048d5e369f11ed1f41f8555d352b"],["/categories/用户体验/index.html","a34805e9e5ffbe4b076688f1f1cc99be"],["/categories/设计模式/index.html","46125bc83ec4f0a53fcf0151c12140bb"],["/categories/设计模式/page/2/index.html","4146d3ede3ddfac9a590fe5c6212a8d3"],["/categories/设计模式/page/3/index.html","e228616014ef4c26dbb44a30c22097a4"],["/css/main.css","ca0daa0e3016dd2278db5fb5afff2221"],["/hello-world/index.html","b49ab8aa25a97e18076d58ec033f4a4e"],["/iOS自动化布局编程/index.html","93ec7a5e7ad9e318036298edbefb2e36"],["/iOS自定义转场(By Swift)/index.html","17fc6f094da971e9b0fbaf6f9b2d4dcb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7c68ee19efb12c2be533c75d11fefe01"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","23f07c3871283541962655b9ff5ef1b0"],["/page/3/index.html","017de7b060bbd40d70ef3297928dc824"],["/page/4/index.html","2221b713a6ee5e98763563d685a129e4"],["/page/5/index.html","28958fb2b572065fe5fa79e04737102c"],["/schedule/index.html","d953f3525075225c5ccbc9202db2e28e"],["/sw-register.js","cbcf8411dca5b5c3035860cc4485ebf3"],["/tags/Collection/index.html","850b46650ce5cd0f321f18f4997a098e"],["/tags/Collections/index.html","f2ab80937bca3439fa9346a8bd418d68"],["/tags/Dependency-Injection/index.html","03ef61c72859cc7c5929a33fa10b3aa9"],["/tags/Modules-And-Hooks/index.html","69915590842c38ab10123dba8e07f746"],["/tags/Server/index.html","7a42b5dc8b2be732471eb789af62310b"],["/tags/Swift/index.html","b14db73bdae47a04c999b6f562a28d7c"],["/tags/Swift/page/2/index.html","bed928f4e261ccfc9c677e0b8c2b2e1e"],["/tags/Swift/page/3/index.html","7c1d4c6841e4aca3e51d38fa40237046"],["/tags/Swift/page/4/index.html","abb49c9f246363f24ba905226e5594d4"],["/tags/Swift/page/5/index.html","5778d3fe28b4f415677f00b6ddd95ef7"],["/tags/UICollectionView/index.html","bc25b15b8365601c56084fe4df56f0e1"],["/tags/UIColor/index.html","fbdbd1c9f139230aae6c45e8256f84a5"],["/tags/UIKit/index.html","3aa0d627d6196bbf91f5cd109f728b59"],["/tags/UIKit/page/2/index.html","251ad2cd9877bfc82698b48fb0baa32e"],["/tags/UIKit/page/3/index.html","cc3ac587f2afe09d9a2c48b72a023b60"],["/tags/UIKit/page/4/index.html","7f82f62006c6028f127488043aa3c6c1"],["/tags/UITableView/index.html","176600a4999ad8580592198fe87c148e"],["/tags/Ubuntu/index.html","d011621aef51a428ffbc2b9e3710c20d"],["/tags/VMware/index.html","28d618d9906684b1df668abed6540340"],["/tags/iOS/index.html","06bdbd722d4c09e73cff99c07cd13870"],["/tags/iOS/page/2/index.html","4ae57c3035251417185e920d9bfeb7d1"],["/tags/iOS/page/3/index.html","5defaaf4ddd1fc8ee0e508157a0eb8a2"],["/tags/iOS/page/4/index.html","837fc42f40828e6fb966fb5a0263da50"],["/tags/iOS/page/5/index.html","932debec072232ae2b4263e986571f95"],["/tags/index.html","b10971cd14eb3174d6149953180791f7"],["/tags/non-optional/index.html","7b26802f53d60d823bbef0264aa87f86"],["/tags/optionals/index.html","d04fae680b716e69f875c852613150c7"],["/tags/transition/index.html","e4f4e2a11973cc8416149c4528a2077b"],["/tags/依赖注入设计模式/index.html","3a3520ae2485644e135bbe072aa73cfd"],["/tags/初始化模式/index.html","973f81fa720873e4d4c52665270fb4f1"],["/tags/单例模式/index.html","89ec9d43d50f4fe8e3b2dcf540f81a3f"],["/tags/原型设计模式/index.html","1a21383a1a51aa1193db02f21a5aa205"],["/tags/命令设计模式/index.html","28b3b30980c064fd3aab25ceb3886398"],["/tags/外观设计模式/index.html","befc42dc885c277b6d4e4da4e1de48fb"],["/tags/委托设计模式/index.html","d5bed2df151060ad67b20df858a22210"],["/tags/对象池设计模式/index.html","adfb722cd6e959d32779ea9009e56579"],["/tags/工厂方法设计模式/index.html","4a20435ef5df45600c8dead83c4d4d06"],["/tags/工厂模式/index.html","a901649b85ceb690ed06e7ee4b3d2928"],["/tags/工厂设计模式/index.html","c27266becff83e5a4d5b59c068d5ed5b"],["/tags/懒加载模式/index.html","b923f427f859576898b8d8c0affa144f"],["/tags/抽象工厂设计模式/index.html","0a54a886a7a78bde8a64ba128e397121"],["/tags/构造函数/index.html","68673de041550b9bf252f5695dc6ba1b"],["/tags/生成器模式/index.html","1bb9033cf08f7bb874b787619c2ad333"],["/tags/用户体验/index.html","6bee903f08ab98d1e783ca5e7ae9091b"],["/tags/自动化布局/index.html","240aca47444b2c2e2220f474761e0fda"],["/tags/自定义UIView/index.html","a2614edd8b6150d717aad3e100fb2e5a"],["/tags/自定义转场/index.html","ff47cd622bc7555beb51a45e224dc5fc"],["/tags/自适应布局/index.html","10c6aa7b8e9afad346a16a9ae098267c"],["/tags/设计模式/index.html","09e69761dd7b8b871af0ae457f1827dd"],["/tags/设计模式/page/2/index.html","7b0d0859a4f0b387afb42855c4b1f02b"],["/tags/设计模式/page/3/index.html","df2bb043b4d17d202cc7dde7d453e64b"],["/tags/迭代器设计模式/index.html","94fa7076134903a44880498562827abe"],["/tags/适配器设计模式/index.html","106b683cb6ae95517716870142e6cd50"],["/tags/静态工厂方法/index.html","fbd49fae7270105c2b09ef1ae1e2f3a3"],["/产品开发的幕后花絮/index.html","7f4c839e49d7a4613d3f179b10c36ac2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a1b712bc0e5b3fbb95371fb94d6b7b1b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7271d71a62f555107d47937d1e04629d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","e9fb7651fc8c04feb0898f4aaa07b8aa"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e00eda789b7cf8c7f4af2d17d901b6e3"],["/在Swift中创建自定义集合/index.html","17f91bf64dc9f70c455cc5c140f2e275"],["/在Swift中处理非可选选项/index.html","51276049730c9c1b9b8895d2a262d688"],["/在Swift中重构单例模式用法/index.html","19e539650d5f951640fd2bd6fc8b4e66"],["/揭秘 WordPress Hook 系统/index.html","619a2d502c25f646147880f5052f1d25"],["/比较工厂设计模式/index.html","7871fe509581fbe31164bbd5e9fa43f8"]];
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
