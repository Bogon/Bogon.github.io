/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","a64cf8412c960a76d25279de04bd43bc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","e673707f7aba98ba3ca9f9345606e646"],["/Swift Lazy属性初始化/index.html","723be5e0fa9cf092f5d31a7247feddb0"],["/Swift UICollectionView使用指南/index.html","4dc26dc37edfe6a0913ffd2f1ce4362c"],["/Swift 唯一识别的视图/index.html","6ba7cfdf13c88e7afea082f2d419ec39"],["/Swift 如何学习现代UIKit？/index.html","6c76570987030ead2c4112d7b2e89726"],["/Swift 选择和播放视频/index.html","e4da8361fcb3f84586b8e105d55bdf84"],["/Swift中UIColor最佳实践/index.html","5877c6a89b87cc0bbcc186c8b17e53fc"],["/Swift中快速简单的工厂设计模式/index.html","ac5c1f31dc462a011b81ed7377ca633d"],["/Swift中构造函数与静态工厂方法的比较/index.html","a8d42fa2bea931cec0f1a80255cd2281"],["/Swift中的UITableView教程/index.html","b42a3228f45fcfdb7f0a8b41cdce52a7"],["/Swift中的懒加载模式/index.html","536f8b557e4b9990f6f9b20ed2a21706"],["/Swift中的模块和挂钩/index.html","5ed9092adfea1dfc51b2675702ce270d"],["/Swift使用布局锚点添加约束/index.html","5eddd30bda15dbd2c7a91c0da591dd08"],["/Swift依赖注入设计模式/index.html","10799544fe1265b36a5202b58e2787cf"],["/Swift关于Dependency Injection (DI)/index.html","4940ae5f68bf0a65b780e9fe01ffb1a0"],["/Swift初始化模式/index.html","99d643e593863d708c398a770fa4d531"],["/Swift单例模式/index.html","5614c3aa1365d753712ed9a7f12ce7d0"],["/Swift原型设计模式/index.html","2943481ecc0e59a60d6198ccfbcf2584"],["/Swift命令设计模式/index.html","292c9b083bbd635a1bea5580cc9f739f"],["/Swift外观设计模式/index.html","8fd51574a60f7cf97ecd1b55b1309c9d"],["/Swift委托设计模式/index.html","74e43d003dbf18b494b4b7ec554dec7b"],["/Swift对象池设计模式/index.html","7e2b0ddcf4f023d5d431c922263aabf4"],["/Swift工厂方法设计模式/index.html","33cecdf58dfa94975c3d374ab9755de8"],["/Swift带闭包的懒惰初始化/index.html","f1bd003eea4dd25a56ff3be7b06dd68b"],["/Swift抽象工厂设计模式/index.html","d98b3d64958fb1455a0259b689cc18ab"],["/Swift掌握iOS自动布局锚点/index.html","b9d1663927cfcf1d969e4b37c9ce55f1"],["/Swift支持旋转的自适应单元格/index.html","e51db72b1779c2d242de9d0b0fe456c7"],["/Swift生成器模式/index.html","69b381fcbca95ad5d91b1cf549508bd9"],["/Swift结合Xib文件自定义UIView/index.html","e9ab66571b3b3337e1790a077e22e8a6"],["/Swift迭代器设计模式/index.html","89f29f545d29fdb74f54725f0c75d23d"],["/Swift适配器设计模式/index.html","0284b1b77d71e24b99fd8c4320aeb00b"],["/Swift静态工厂设计模式/index.html","99f914c4782742e1bbe5a2e80247e068"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","dd064feac425e269036e5a6f8ea2a590"],["/UICollectionView data source and delegates/index.html","ed6e602e7f6335f1cf537b871936e3ea"],["/UIKit初始化模式/index.html","f68f20ded661c13f53d32058542dd1ff"],["/Ubuntu18.04替换国内源/index.html","1b3eb0af03c53562e83ce9cb0dd912fe"],["/about/index.html","8867f9f78cc1f2fdeb2d650a6ef25b2c"],["/archives/2020/04/index.html","88cc191b4fe7648bfe56e902f4d4e18c"],["/archives/2020/04/page/2/index.html","18437b795c9513520c654585d8a82008"],["/archives/2020/04/page/3/index.html","4385720d752540026befb21e8c8d7a68"],["/archives/2020/04/page/4/index.html","4448b5dde891663ba2cb4e80508b2b84"],["/archives/2020/04/page/5/index.html","8d4f9759a772a09ec501487ff713cb5b"],["/archives/2020/04/page/6/index.html","4964164bb55a3e6a38b3ede9800152c2"],["/archives/2020/index.html","e3009f99d060ab6618543e30faa1a7af"],["/archives/2020/page/2/index.html","268d755bf1603cf992f85e6f420cbe8c"],["/archives/2020/page/3/index.html","7a910994e3c2ebe4a490932fcd6507e6"],["/archives/2020/page/4/index.html","b1ec6280cd28f26065532892f83285b7"],["/archives/2020/page/5/index.html","ad66186c9f8acdf4083f0cf9b1d5c653"],["/archives/2020/page/6/index.html","d101f4a709651f992f15f827b5443b24"],["/archives/index.html","19ec71cf7f420a2145c91f2783e2257c"],["/archives/page/2/index.html","f4695004a8634a0c9b12fadc48d19d09"],["/archives/page/3/index.html","68e29c824ed817657915b3ba954f1889"],["/archives/page/4/index.html","f2054f54ff1d871105c2f5a2954e2136"],["/archives/page/5/index.html","54addf9a61af329a48fe11a51fac0a0b"],["/archives/page/6/index.html","96cd0510ed4e28e70e039bc13f91e74a"],["/categories/Hexo/index.html","08dd616870c13e8005efe67d2ce67fc8"],["/categories/Server/index.html","794a84e24f09500840ba79e95b30d1f2"],["/categories/Swift/index.html","aadfc893a3226424dcf61ef49dda2334"],["/categories/Swift/page/2/index.html","5bf04025f710e26401fa82c04ac0d1c0"],["/categories/Swift/page/3/index.html","5595b8345a517cc54661b5e757679e12"],["/categories/Swift/page/4/index.html","0f0c9a334b8d84151865ec6955919308"],["/categories/Swift/page/5/index.html","d98f83bf1307512bee29dde82311c26a"],["/categories/Swift5-2/index.html","33b88b70317e41c33a875b4e71245f1b"],["/categories/SwiftUI/index.html","d259acfd7cffece2cfbd9f3eb0a7d107"],["/categories/UICollectionView/index.html","d4ef19dc9c24e11fe278d19a8cab1842"],["/categories/UIImagePickerController/index.html","348949c7befc3daba3ca8e5c9c03e08a"],["/categories/UIKit/index.html","5ca6d789b299f50b7f774706ec96a078"],["/categories/UIKit/page/2/index.html","fd85dfffc91282b17d60400e75fa5b66"],["/categories/UIKit/page/3/index.html","d73410f6747060b81d22b52ea96254c8"],["/categories/UIKit/page/4/index.html","88f6fb3b83e24eadde30e8794869aa7b"],["/categories/UIKit/page/5/index.html","616b842509630389ff730ea2c0297e4a"],["/categories/UITableView/index.html","09678c393c6dbadf7adb1b0308fe462a"],["/categories/Ubuntu18-04/index.html","378b311233c2e2b2bc206f7ce8c5abab"],["/categories/Ubuntu软件源/index.html","c4e59c79f5938f08a0276aef4c309698"],["/categories/Uniquely-identifying-views/index.html","980e2017aa86fa004fe1b3d4a87e6d4a"],["/categories/Vapor4-0/index.html","25c98e501ca7599e251283b02ce4c094"],["/categories/iOS/index.html","b0c2412b0d2c61763cd6b4c7a6a3bee4"],["/categories/iOS/page/2/index.html","cc5cb9119f1d1339b9d979165830ebf1"],["/categories/iOS/page/3/index.html","7ac1effc1a8d919ef9008ca06803cda5"],["/categories/iOS/page/4/index.html","7cc018d95ba12ce84f76c5856fa4cac9"],["/categories/iOS/page/5/index.html","7f7c458ebbd7780c540a42cc5059acac"],["/categories/index.html","b64d04aed54efe233723e81a43deb9b5"],["/categories/子类化样式/index.html","43c92e58325ab1e92653c3f38ec6be54"],["/categories/用户体验/index.html","7ed48e44dcdbf0e772b8e5aaef84a683"],["/categories/设计模式/index.html","7aeb2e0c2d0c0edf9b47733d8704c435"],["/categories/设计模式/page/2/index.html","ab555f03e5ac756f30b0ae8318dec14c"],["/categories/设计模式/page/3/index.html","fd0372b71cb3af93b00bf79337f090f0"],["/css/main.css","b409d62d39318036923cf961d0e68a11"],["/hello-world/index.html","09128e38d2ac5fcfa1e8c9244da5ab04"],["/iOS子类化样式/index.html","f148a4fb7e65338c72e3e8bfc212ada1"],["/iOS自动化布局编程/index.html","1ffa52618d1a09bf5a92e00e03df30bf"],["/iOS自定义转场(By Swift)/index.html","23dfba831bf8594d8a924e40b0592df1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","78f9b19762747b06cbaeab9d0c99f38a"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c4a9fd3905935104cd5af8a5434f5ba5"],["/page/3/index.html","5f05a13420d3600da6a566fae4c71bea"],["/page/4/index.html","e660012f19e090a4a79639bd176d19dd"],["/page/5/index.html","d12e387106894520ccd87bc1940612ba"],["/page/6/index.html","6e9fd71fe71d231e06a73e6c2d95b739"],["/schedule/index.html","aea60aa17dc2fb744dcaf883b438c488"],["/sw-register.js","1c9973651394e9b9beda0cbcd8af9a81"],["/tags/Collection/index.html","54ca8930f6a44cf92713657c86bcfc44"],["/tags/Collections/index.html","fc49067837b87917da841f2fe47465a4"],["/tags/Dependency-Injection/index.html","c59804d61bf71452f248cdefc76a7efa"],["/tags/Modules-And-Hooks/index.html","efc1d6cbd43a7fd735378f787b9276b9"],["/tags/Server/index.html","0a052088d9c4bc93ab72f287fa88381d"],["/tags/Swift/index.html","e620e3eca58bcdde9576d603f001646b"],["/tags/Swift/page/2/index.html","9badfe0dd88fbf564f6115074a9c7cfb"],["/tags/Swift/page/3/index.html","a45a07ae40add1e1b67df86b40e51455"],["/tags/Swift/page/4/index.html","70ba17a3a5302c8852ea4988e47a13c0"],["/tags/Swift/page/5/index.html","b6d06f8de7c6810382773189a5ee1328"],["/tags/SwiftUI/index.html","91c9868e5643a4f60bc224f30c30f98d"],["/tags/UICollectionView/index.html","e6fec4ddd866d63edcfccdafa6b06b2f"],["/tags/UIColor/index.html","a6936139a2056ceec65e9cc465403b1d"],["/tags/UIImagePickerController/index.html","98b9f93023c2f080b69ec0f845e4e7dd"],["/tags/UIKit/index.html","d038eb9fdb9029429aa5a46e31381caa"],["/tags/UIKit/page/2/index.html","e583ff3001a9bf09533631c590caf318"],["/tags/UIKit/page/3/index.html","c91438607eef27ab8d3ddebac21c677a"],["/tags/UIKit/page/4/index.html","3bcf06bf203ca10c9b7058d62f359bb1"],["/tags/UIKit/page/5/index.html","592444eff1a23d99663371d9cac701d2"],["/tags/UITableView/index.html","1e5322a73c8d4bc7f75c3b70532a9801"],["/tags/Ubuntu/index.html","a582ddda61aa19458775701da314e887"],["/tags/Uniquely-identifying-views/index.html","1237caa10953aa89425df42d86b351bb"],["/tags/VMware/index.html","de7791bdfb0afb94490d40384a1361c1"],["/tags/iOS/index.html","096e28c573547058785a488cb54c75f4"],["/tags/iOS/page/2/index.html","9c3ee37e1d97838d264641aca77d037d"],["/tags/iOS/page/3/index.html","191362bedccff98684ae249163f33b49"],["/tags/iOS/page/4/index.html","6232cf7fa893893defe44e5ddc4a6d88"],["/tags/iOS/page/5/index.html","f2aeb899c3e4b42c16449fc182fcfc8c"],["/tags/index.html","c8332089cb24386671534d772109a7b1"],["/tags/non-optional/index.html","1b066a9f75ec3f0a4aa417de3b185069"],["/tags/optionals/index.html","3f799acf33847b2cc8c597a36f1af7c6"],["/tags/transition/index.html","08b0b8081479c79d55ef68400c257df6"],["/tags/依赖注入设计模式/index.html","6f8da1ba3a1eb4671d23493ee3928580"],["/tags/初始化模式/index.html","cdcf9b85b6e34cc1965b64ebee6ac1a9"],["/tags/单例模式/index.html","d44f362eeb05b36ee69046cb07be1e2f"],["/tags/原型设计模式/index.html","58cf56ef2bc3facd402775ab867cfbad"],["/tags/命令设计模式/index.html","48d7996854c236793a1a7edc6d9434af"],["/tags/外观设计模式/index.html","dc54b3a0948f5f43b03ee590ed3001e8"],["/tags/委托设计模式/index.html","2a4078247594282e1958c5046f2d50ee"],["/tags/子类化样式/index.html","3bc830db0bb854afe92242f56c7ae27a"],["/tags/对象池设计模式/index.html","445d974c7b630cac6c8cc519342fd2e1"],["/tags/工厂方法设计模式/index.html","b0ec0739b66e6ac451299b945c8605ab"],["/tags/工厂模式/index.html","16c97169ec3497689cf81353b3e65141"],["/tags/工厂设计模式/index.html","f0e3adfa32828f70cf370b931fcfc612"],["/tags/懒加载模式/index.html","bc9c5a20755e9e76fb977e994bcfbe21"],["/tags/抽象工厂设计模式/index.html","21ccfa538292de4ab7e47aa9f073d5a2"],["/tags/构造函数/index.html","8b18ff89bd48359061226c666ebdc44f"],["/tags/生成器模式/index.html","9aef7c8ebba920a38d04846c49cf1f62"],["/tags/用户体验/index.html","4446345f7db84d39c1079fe9f0de0ad7"],["/tags/自动化布局/index.html","7a0ba9dff17ff31641fb3ef1b9438fd9"],["/tags/自定义UIView/index.html","496620fc43e89dad49daea8788020e8f"],["/tags/自定义转场/index.html","ec22804bd00f230f27c38b4a22cf80c9"],["/tags/自适应布局/index.html","1dfebbe817815a0a3a5b5602014a867f"],["/tags/设计模式/index.html","820c54f3005e5f711455433d58e72e72"],["/tags/设计模式/page/2/index.html","beda7aa7b258fb58d9cfa99c8bad247c"],["/tags/设计模式/page/3/index.html","fd068e06c17d00189f518d4bdbf8648e"],["/tags/迭代器设计模式/index.html","44a8ce02ebfffca6a66e38c3a9205965"],["/tags/适配器设计模式/index.html","4f5117ac446402fc234a8a54a591da6d"],["/tags/静态工厂方法/index.html","b8518b4ef4dec68c33dab927a58b74d5"],["/产品开发的幕后花絮/index.html","e6724f0f70a76c8e6aaa9382669ba4a7"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e36b3b81e8b3017d633abb2f68b87d14"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9a84f7f82fb44bb73d3a13c9f8f79d65"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4d0bd23f2df968a3a9f1c2247fbc6e4e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f2d29cc50ca6b1d5bcf15a4c7df6ed04"],["/在Swift中创建自定义集合/index.html","0b382543bc3938c84ffe1c96b9cefeaa"],["/在Swift中处理非可选选项/index.html","ce4b15282499017d2f54d2c0b1d5196f"],["/在Swift中重构单例模式用法/index.html","eb4a5b0d0f4f6d3f602b6c23aec48b03"],["/揭秘 WordPress Hook 系统/index.html","0baa1c1cbf0ce18fe5f2950f2fd52ff6"],["/比较工厂设计模式/index.html","8dec28368dc4e98bdbcf32065dbf1414"]];
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
