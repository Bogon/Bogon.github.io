/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","b7a63a9f5465849297317dc9a3743f6c"],["/NSCODER和SWIFT初始化/index.html","9cbb5be8e3e704e857dab404cbe2a71b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","2a58cbfefee080287b7759d8d32d68cd"],["/Swift CompactMap vs flatMap：差异说明/index.html","4e1eb3efce8b7305225ad859b74157e3"],["/Swift Grand Central Dispatch 深入实践/index.html","cbc23c69e89d8108a4aa45b609f51efd"],["/Swift Lazy属性初始化/index.html","3c3fd80d003bfd91fdf81e113fbcdde6"],["/Swift UICollectionView使用指南/index.html","639fb2ef3579afb64e950c64981c7bf7"],["/Swift 唯一识别的视图/index.html","60d8594d35e6fc329e015342bcc9c19e"],["/Swift 如何学习现代UIKit？/index.html","2c93623eb423109ab657b1a27ad054c7"],["/Swift 用 compactMap 替换 flatMap/index.html","215ed3cae8f7130c60bf385911a4e062"],["/Swift 选择和播放视频/index.html","bc3c4dff66281d1e73b039b145941c19"],["/Swift中UIColor最佳实践/index.html","b2a9314bc85f3cfcb5e125419035968d"],["/Swift中快速简单的工厂设计模式/index.html","335d98dc5a4eee8c9e713e4f37c5ca05"],["/Swift中构造函数与静态工厂方法的比较/index.html","fde6813e4595ea0fe867a499835fcbd7"],["/Swift中的UITableView教程/index.html","0aa65b0c8c40ca18399542a51b9bc768"],["/Swift中的懒加载模式/index.html","1a52c95c3a426f474f13034129791f87"],["/Swift中的模块和挂钩/index.html","cfedf4beedb29f62840f20fdc0dfd72a"],["/Swift使用布局锚点添加约束/index.html","2c8942a7094cb3ffef0ad704fb92c6ac"],["/Swift依赖注入设计模式/index.html","5874e1112d51c648e9ecf31bf4c4cd4a"],["/Swift关于Dependency Injection (DI)/index.html","0cff30b0ce1e84b8b2b0fad3b35fa374"],["/Swift初始化模式/index.html","bfbbb11d07d98861efa835b507544298"],["/Swift单例模式/index.html","7c7aa6f6f48a24e6641e64a88861edf9"],["/Swift原型设计模式/index.html","8a4e823761bd2fb784936142cfd3ae48"],["/Swift命令设计模式/index.html","9b706b3044a4f3264c2b1a52cff2fbd5"],["/Swift外观设计模式/index.html","3dfa34f1295398926d4a0b6fe4ed2acc"],["/Swift委托设计模式/index.html","90660912185d28afe38c9d39aae66bbe"],["/Swift对象池设计模式/index.html","db7932848c17c55fa01d76422fe39ec4"],["/Swift工厂方法设计模式/index.html","7afb59b77948530237f5924a170fce05"],["/Swift带闭包的懒惰初始化/index.html","7f67d87032cd2576112cf979f5eaf108"],["/Swift抽象工厂设计模式/index.html","801117c1aec33e3ded65508c5f803991"],["/Swift掌握iOS自动布局锚点/index.html","6000d96658dee7823d1f30c3ec322fa1"],["/Swift支持旋转的自适应单元格/index.html","1f4620dea9327861812bc562cb761466"],["/Swift枚举值/index.html","1bfa3f5bb18b69b9fdc1b2421bee40ba"],["/Swift生成器模式/index.html","80dbd237a753febec72442d030d2a582"],["/Swift结合Xib文件自定义UIView/index.html","91b2b299878697562f4c85b92eb8bb03"],["/Swift编写的20个iOS库(一)/index.html","40a38f15a99037b086b91b9b8ba3ee07"],["/Swift迭代器设计模式/index.html","271f7666897fbed9ad9baf5f5b6ba071"],["/Swift适配器设计模式/index.html","8d1613f35b9cfc066cde3a5e7a9c4faf"],["/Swift静态工厂设计模式/index.html","013f7dfa52a657c3f86ebb08e135b8ae"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b4a4b223bdef3732224b26f1e9b43889"],["/UICollectionView data source and delegates/index.html","f6fc6e757a53a08c67fd37730f38221b"],["/UIKit初始化模式/index.html","52c68f012bd01a8a8fe2906340a0733e"],["/Ubuntu18.04替换国内源/index.html","adad465099d172f02c0a6649b23d8c61"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ec3f2a9703a2332e4309070d8305c67e"],["/Xcode扩展/index.html","0e765c915e8225870717b56687747233"],["/about/index.html","1edf2bf7537c20e0d86ff03c1a24d806"],["/appleOS的Networking示例/index.html","7cde8ba773695408fe6228f7ac1e314a"],["/archives/2020/04/index.html","6a7d6450952f8116a5c90bfac44dedeb"],["/archives/2020/04/page/2/index.html","21421f9ac5448eeaff35673d0d43cbbf"],["/archives/2020/04/page/3/index.html","eaedfda355a0f8f59760b301bf45cfc8"],["/archives/2020/04/page/4/index.html","96ba2d90833e62b6da451ed6d4ec220e"],["/archives/2020/04/page/5/index.html","47bae53499b6969d0b2c41e4a4c85b5c"],["/archives/2020/04/page/6/index.html","a8420d2f19d3fa91151b007e09c49f01"],["/archives/2020/04/page/7/index.html","57d8ddfc1b51f5b434fa91b8337304bd"],["/archives/2020/04/page/8/index.html","6e9514f5a505afc1be218edbe206f630"],["/archives/2020/index.html","b3af1f624d8b54cd09cac80f48b06ea5"],["/archives/2020/page/2/index.html","b8c1946e9103922550be1da6f0a20cba"],["/archives/2020/page/3/index.html","03692dcaeb35a138b168079210e4dcdb"],["/archives/2020/page/4/index.html","907ed9c6618d012a5d01d39c7a9ce573"],["/archives/2020/page/5/index.html","9f126f679138ebe38779cbf0bf4e3837"],["/archives/2020/page/6/index.html","239673a91be59bf529a7922ae89793b3"],["/archives/2020/page/7/index.html","9ab0ed71c0678bd5b25ea03355baf36e"],["/archives/2020/page/8/index.html","a267e49c8c607b11b2b453d1286e9470"],["/archives/index.html","7371b16dccb696d97f6f816a153f1cbb"],["/archives/page/2/index.html","64a8aec8d7b245df16b50be462d069d0"],["/archives/page/3/index.html","c6f8bbe6cb19fb70d656893dc8f3d6be"],["/archives/page/4/index.html","45c5bb471bd9d8241951c45f54dfb501"],["/archives/page/5/index.html","05ee01c48be7b2ed9960433d21ae7f85"],["/archives/page/6/index.html","eb241a9bed0f4ec747233ac9c76bcdb2"],["/archives/page/7/index.html","9e79156bae86785a7d6d972263c5b193"],["/archives/page/8/index.html","bbb9027818cd9ec39672b91e2f44086f"],["/categories/Codable-protocol/index.html","2fb8be51e59f162ab76be7f28306fd58"],["/categories/Grand-Central-Dispatch/index.html","ae7edfaeffd29a9896d3ed8ddbb34a06"],["/categories/Hexo/index.html","51180f4e9ee1b6e8e16702cfbc2605e7"],["/categories/Result-Type/index.html","201354eb917e4b0412c115e041545b3c"],["/categories/Server/index.html","96beabe345d7ed3fc93abc03926cd6cf"],["/categories/Swift/index.html","6505989cfa06d560ec59df5f0bac6fbf"],["/categories/Swift/page/2/index.html","efa64fc89ee0b44a581d56222ad793c9"],["/categories/Swift/page/3/index.html","70eb1f2073fb09a662fd05d44fba5888"],["/categories/Swift/page/4/index.html","3df430c5d35c2a6fe70a6567cada7034"],["/categories/Swift/page/5/index.html","e8832a4149d63dad27933b230e0554de"],["/categories/Swift/page/6/index.html","c924ac94c3628a37e553743af3a60f6f"],["/categories/Swift/page/7/index.html","0f9bb9ccced8a6f6903993921a4d4e06"],["/categories/Swift5-2/index.html","2cf900425453752bcd0dc155be098472"],["/categories/SwiftUI/index.html","ca0a729bc5e7996f8761c0bfa8642ba8"],["/categories/UICollectionView/index.html","a75c0bb5a913c0761ea1ad596ff52776"],["/categories/UIImagePickerController/index.html","bc40cf971a675a0ee4825014d56a8dae"],["/categories/UIKit/index.html","cc10e639fcf2267e00eb032368fb19f9"],["/categories/UIKit/page/2/index.html","25b726282719c9e106ece37346a9aec0"],["/categories/UIKit/page/3/index.html","bee4a0660d8c11184d6fce72c5d1c206"],["/categories/UIKit/page/4/index.html","979d502659d2494f7469778ad25955a5"],["/categories/UIKit/page/5/index.html","220a4e25c34bc9c01c47cdb599f650ef"],["/categories/UITableView/index.html","8987c8bd7c43042be45aca7ebf638786"],["/categories/Ubuntu18-04/index.html","f4a6f21183a3adcc34f2680b1f7217dc"],["/categories/Ubuntu软件源/index.html","7c30cb3787806aa1cd92db0046c387f5"],["/categories/Uniquely-identifying-views/index.html","31022b9ed013e43893f0dd325aa6de9e"],["/categories/VIPER/index.html","d1cb9c4c999d8d12df7a6565007cc1a9"],["/categories/Vapor4-0/index.html","34d4d6cfbec3be6990b73974234e9cb1"],["/categories/Xcode/index.html","9866d1a84f3d8d3b8a20f9aeb7d90d42"],["/categories/appleOS-Networking/index.html","00df7efcf020ac8f77adccc48d33e3d0"],["/categories/enum/index.html","aa67f514b938cc92623112fb23964e71"],["/categories/iCloud/index.html","8e25231bf2d27b99ef1c58c2435ac430"],["/categories/iOS/index.html","fb5e77a13c44cec534abe14dedcb84ab"],["/categories/iOS/page/2/index.html","1c990753a7d843693cfd97e47f9db2a2"],["/categories/iOS/page/3/index.html","d19e738c3325bc2357fb27fc31747b83"],["/categories/iOS/page/4/index.html","ed1901b301235477c50b349b60a8b2b4"],["/categories/iOS/page/5/index.html","95cdf2605f45dd71d0f551e4985e1509"],["/categories/iOS/page/6/index.html","3662fa0f640925b29a57f935f065fa70"],["/categories/iOS/page/7/index.html","b138231f05ad4783b5ffe8d2f2c1ff73"],["/categories/index.html","36e29ceda26703c0a76b029a84ff6df1"],["/categories/random/index.html","ca0102291f43339c5aa08ca6b31a6fce"],["/categories/三方类库/index.html","71854e4b926a1e8f5844baa9ffefa546"],["/categories/函数式编程/index.html","8c713de6b3c1b50f0c43cbb57c0a0deb"],["/categories/子类化样式/index.html","ce2fff63162c41aaf3d45335f2d3714e"],["/categories/架构设计/index.html","0f1b34aa7a0a1889a00530283ee64d0b"],["/categories/用户体验/index.html","287cee3dac80db9421f393365729f9ae"],["/categories/设计模式/index.html","6e1f4955ae591df6671a71bd34c7523f"],["/categories/设计模式/page/2/index.html","121878c952fafa73396d467fd157aaab"],["/categories/设计模式/page/3/index.html","502115b72ac2a7df64a12b9987f53d99"],["/css/main.css","ede66e9e55c7559b0f3baf1a6cc6f0a3"],["/hello-world/index.html","206f0f391c96085d5d0126237b999d8e"],["/iOS VIPER架构深入实践/index.html","68e82c0d85be6774edb10894517900e1"],["/iOS如何使用iCloud文档？/index.html","93de0e6a24e38874d282daaf30af3386"],["/iOS子类化样式/index.html","9974a9f81db343689319a412397e3e06"],["/iOS自动化布局编程/index.html","70a2cee90f406c69d0e285b3468ac31d"],["/iOS自定义转场(By Swift)/index.html","556e2eeac5dfe782f54f8ee5b3dbf3cc"],["/iOS项目架构：使用VIPER/index.html","9eabc8f31020abf93e6b6b93d519b5f1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","45043e62cfc2b996a928ba996c532439"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e9659fb796d0f096e314a70ccc34c53a"],["/page/3/index.html","7c26a3b5ff55ff09a929502f11dcc52b"],["/page/4/index.html","e3d88359f6357a6011a2a3dcd43e9845"],["/page/5/index.html","40756d8598543e2522e34b9ab62aff54"],["/page/6/index.html","228e35a043dd6618e98865aa4e9d7259"],["/page/7/index.html","7a9c1fcee619e7ba699355c8ee5c8063"],["/page/8/index.html","1fd06e043cc81f2c425b753bc3a2d571"],["/schedule/index.html","e07179e6e8b6fc573d0d32cdec1923ec"],["/sw-register.js","2fd49777f71342ff6b75d41190384477"],["/tags/Codable-protocol/index.html","833e8645881b000fd618ca42298997ae"],["/tags/Collection/index.html","8bc825a90c0a546ebf5eafa168c7abf2"],["/tags/Collections/index.html","bf5efb593795d6755aaae71e857fcb8e"],["/tags/Dependency-Injection/index.html","429128ed4bab918a470dffa765588a5c"],["/tags/Grand-Central-Dispatch/index.html","5656889b658fbafa1407ca04e1fa87af"],["/tags/Modules-And-Hooks/index.html","ed7312ab5c42894ebb6d885415384dd7"],["/tags/Result-Type/index.html","bfc3462f370664b53ee4f4d37ad56a45"],["/tags/Server/index.html","9813e7483eb15aaffbf384a2620a275d"],["/tags/Swift-Package-Manager/index.html","64e1678c38333f7941dfc3f3e081aa2c"],["/tags/Swift/index.html","17daa70ab258199cb1bbad850270f76c"],["/tags/Swift/page/2/index.html","73e792ac31f9699d86bded4afe223fbd"],["/tags/Swift/page/3/index.html","8987177ae3874350e75c80ee70e6c105"],["/tags/Swift/page/4/index.html","77dfbbd0934b6a33f0aacca281b91f5a"],["/tags/Swift/page/5/index.html","bb1d79167924aa206efad9777298a29c"],["/tags/Swift/page/6/index.html","12a615da71f076e8e443eba12616340f"],["/tags/Swift/page/7/index.html","04f4be0cf5e9bf9822a03998fb28b6f9"],["/tags/SwiftUI/index.html","eff27d0ab22c7a3e7eec95879d7ce38b"],["/tags/UICollectionView/index.html","35259fa03f8c1021f1977dc07895fd15"],["/tags/UIColor/index.html","d25d644038431d3eca802765cbd88952"],["/tags/UIImagePickerController/index.html","97b79f471a9c25c8880dbea16443d2c0"],["/tags/UIKit/index.html","d3f65b88b6fd415ffdcb761fd10ce126"],["/tags/UIKit/page/2/index.html","040d9b0f14c60056f4f73e195c445a74"],["/tags/UIKit/page/3/index.html","79ee15db818777a2597828f79a69c543"],["/tags/UIKit/page/4/index.html","0857595ac5bf2f4a9a4e65d0903ccc53"],["/tags/UIKit/page/5/index.html","d0f459103a8c118990fc6c9bc3c7d603"],["/tags/UITableView/index.html","568dcda5cc1328d4ea70657f42c88160"],["/tags/Ubuntu/index.html","6e02cfde47a7b52219ffce91a656d2f4"],["/tags/Uniquely-identifying-views/index.html","4ac70b93ace852f82167c832dc401072"],["/tags/VIPER/index.html","c4073b46c13ba14bd81cb2bb730da581"],["/tags/VMware/index.html","8335481c36cd56732b65101c0aee32a2"],["/tags/Xcode/index.html","1ee2d9930112c90cc115a51232d84564"],["/tags/appleOS-Networking/index.html","6522c5989b78423c595719aa0d6b44cd"],["/tags/enum/index.html","1fe00cd334ce78138163a2af61985ce4"],["/tags/iCloud/index.html","d6d433aa08d27df82e8aec58262797f0"],["/tags/iOS/index.html","7c604eaa72868b3077f2b36daa5031ed"],["/tags/iOS/page/2/index.html","ee13c7745f35f17c4b478c56696b5146"],["/tags/iOS/page/3/index.html","04eb9cef2cd6ca37b7596309f74b29d3"],["/tags/iOS/page/4/index.html","d4bc6abaf64ad301904e8b1ab9d9eac5"],["/tags/iOS/page/5/index.html","62184843201740caa9e6d6fb051a169b"],["/tags/iOS/page/6/index.html","7c62bc1a3a338e462d191bb351a8f5d0"],["/tags/iOS/page/7/index.html","c6d9a894f5eb224cee5cacb94e043111"],["/tags/index.html","22ddb0557cce697ee60dce3f7f143db8"],["/tags/non-optional/index.html","8ff5054d26390f96ee197834995a2ef7"],["/tags/optionals/index.html","af73a99bc488254c8952ee13c4564020"],["/tags/random/index.html","f15b46b7cfb03e798aa277dd841fd003"],["/tags/transition/index.html","585149267f41a09f3deff2e5aab4fa55"],["/tags/三方类库/index.html","1bb43a50c8662f00f09dae81155e53f6"],["/tags/依赖注入设计模式/index.html","727ba9f076acde86035b5adcf7157031"],["/tags/函数式编程/index.html","3ee83c7a23193d31993699c36dca9d6f"],["/tags/初始化模式/index.html","d7cba5be0dbf2af55ee85951eb364705"],["/tags/单例模式/index.html","4f2d051e2fd5d538710860877048b2ee"],["/tags/原型设计模式/index.html","da7b5c76f9d52c1b39fc3bdbc6591ebb"],["/tags/命令设计模式/index.html","ac23d8ba0a76f2dccf67d754248c6641"],["/tags/外观设计模式/index.html","24f9086267199632510123bcde09e4bd"],["/tags/委托设计模式/index.html","127ad43f64ae838694797df8474f4523"],["/tags/子类化样式/index.html","1d13a1dbc2d39289608554b766176dd5"],["/tags/对象池设计模式/index.html","c4e146574f052201bba731cfeb33f24d"],["/tags/工厂方法设计模式/index.html","9e669adbec7497a926748e78a295f73f"],["/tags/工厂模式/index.html","2215e0c95f233c727c8c8cb26cbe5019"],["/tags/工厂设计模式/index.html","f6c716733141dae7da08fde6d2ffa29a"],["/tags/懒加载模式/index.html","f7a638849d88de6ad2c1ab3fafa2a537"],["/tags/抽象工厂设计模式/index.html","8866a2c939f06a8a947e5701a7aa875c"],["/tags/构造函数/index.html","b189bd968acf4f58a3f9cf20b03be8f1"],["/tags/架构设计/index.html","6a8f31147a466dac14357941558112b7"],["/tags/生成器模式/index.html","b8fbf26c8ea61be2e6303fb2eda2f6e8"],["/tags/用户体验/index.html","9a24e76d91d3d098feb7aa1a4ca6d8d8"],["/tags/自动化布局/index.html","98931ce563be29535a959ff968979a38"],["/tags/自定义UIView/index.html","4bad3ac663a30e44bf20b2fe7a1bc4ab"],["/tags/自定义转场/index.html","120a600accae3633ce969abf7ae9fded"],["/tags/自适应布局/index.html","3b99ae5fde92dfb34729e15c90a7e2ac"],["/tags/设计模式/index.html","06ddf70fbebed2fa4d62fb10f8388f85"],["/tags/设计模式/page/2/index.html","089cb59d268dfc46741a73693440fb8e"],["/tags/设计模式/page/3/index.html","bcb02706a912652fcb41dd6ea98c5564"],["/tags/迭代器设计模式/index.html","849a25998c81a25174c10e9b8a749431"],["/tags/适配器设计模式/index.html","47481b78ab8351057052020893507ec1"],["/tags/静态工厂方法/index.html","a7df4783179f6c39113f908f102db61f"],["/产品开发的幕后花絮/index.html","2aaaba33707c93f02c129858747365a9"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c68251a4eddfa1ecc9266b042697ccfd"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fab6b6a6b29a14586ce7aeca20c4bbe4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4bb3e361394b1b4ea3e7949d0ae168c0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0219afa8c834416945715f8e71f7b231"],["/在Swift中创建自定义集合/index.html","0ccb45b4aa226fe97fbaa522199f8e93"],["/在Swift中处理非可选选项/index.html","ef4717337f8218db1f5fdbc9377c4eee"],["/在Swift中生成随机数/index.html","da95b73f4ad2a44423130dc1d6786c26"],["/在Swift中重构单例模式用法/index.html","984d9566b06d00a74d4562de6f2ef588"],["/如何为VIPER编写服务？/index.html","5552299689bbeaea8ae06642246cca04"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d819fe93af0d46da2c71bea285e6a32e"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1ccd4d25038221b6ab0715ce8c6f424e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c675c1bb133b19852ae80aa0ec57ef6d"],["/掌握VIPER架构/index.html","0f208766daaa97e19d11a64888356707"],["/揭秘 WordPress Hook 系统/index.html","07c110edce791ea6d851833c2f21cfce"],["/比较工厂设计模式/index.html","7a08e8beab66e19504da345ec5c2bea1"],["/深入了解Swift中的Grand Central Dispatch/index.html","650d8bd8b82ec3776213a036fd3a7236"],["/深入研究Swift框架/index.html","08d350588de7640f45b36c94a80f2273"],["/适用于iOS开发人员的VIPER最佳实践/index.html","791b3c785a487996d185ac74994f88c0"],["/选择Swift而不是Objective-C的5个理由/index.html","2edf3ea12bcc98d63e84b7cbd0c56bd6"]];
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
