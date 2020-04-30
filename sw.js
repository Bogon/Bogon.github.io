/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","09ba27f545164b932816c09d60f20564"],["/NSCODER和SWIFT初始化/index.html","723088a2e6bec007bfecbb952c6dd815"],["/Swift 5使用UIImagePickerController拾取图像/index.html","df8a737e15b85ffcb1572546104de141"],["/Swift CompactMap vs flatMap：差异说明/index.html","8714d29b0be8b17bcfd1946576a6e7e0"],["/Swift Grand Central Dispatch 深入实践/index.html","6d65168da10ec5a4f002967bb38f3e78"],["/Swift Lazy属性初始化/index.html","da060d4137afae9b7dce5aa8ec55efc1"],["/Swift UICollectionView使用指南/index.html","faed8f4c7da6f4784884431d4f9dc88c"],["/Swift 唯一识别的视图/index.html","893d709e44cf5058ddb234e0ce572d6f"],["/Swift 如何学习现代UIKit？/index.html","55e40afc12611e91443fa61212ae8a34"],["/Swift 用 compactMap 替换 flatMap/index.html","5f0897812820e3b5165b6286a82d41f4"],["/Swift 选择和播放视频/index.html","c05968d66efc092c3b55a3065a66268f"],["/Swift中UIColor最佳实践/index.html","73d79b869ae131755a11ebdb11201fea"],["/Swift中快速简单的工厂设计模式/index.html","b04693045baa4fdd03f226c3112ca85f"],["/Swift中构造函数与静态工厂方法的比较/index.html","d72e0754b3611845d2161197b4a6e44e"],["/Swift中的UITableView教程/index.html","149d37ca13172cd249e5fd8e0542d5a0"],["/Swift中的懒加载模式/index.html","db710f7607751ba4c89c996b39be8b6d"],["/Swift中的模块和挂钩/index.html","90976750f393a188dc90aed60ec1247a"],["/Swift使用布局锚点添加约束/index.html","9ca7f809931e8c476702a1203ac70a5f"],["/Swift依赖注入设计模式/index.html","139ac32b47826bb15193b9aef20ebf86"],["/Swift关于Dependency Injection (DI)/index.html","29ccfe9d796b2afe23a6bac7638fabad"],["/Swift初始化模式/index.html","a2805cb8e13404eee5b63b80f9fa1795"],["/Swift单例模式/index.html","24e76c49a8d358c3d46d3858d6c0161b"],["/Swift原型设计模式/index.html","0b908cbedaff58ec285274ff8522c953"],["/Swift命令设计模式/index.html","7f4e9937c8981ed941694342deb76374"],["/Swift外观设计模式/index.html","568488d351d8ba6890ff45eb1afdc9e9"],["/Swift委托设计模式/index.html","e84badddad8d0e4d4af88ba1c957e115"],["/Swift对象池设计模式/index.html","a2dc9b8a199a0df1a8d4a32baaf7e9c2"],["/Swift工厂方法设计模式/index.html","0d60e3d6bc9eeb8a48543581fe835ffe"],["/Swift带闭包的懒惰初始化/index.html","f81e4b7954d0789d6d7ab022dabfafdf"],["/Swift抽象工厂设计模式/index.html","aefab02e863f951eb532884acdcc5d35"],["/Swift掌握iOS自动布局锚点/index.html","5321345e52358b2631317fc6dde71984"],["/Swift支持旋转的自适应单元格/index.html","70bb8c9cc5650b5a77b4718f5fbcf7ff"],["/Swift枚举值/index.html","386ba929873cf3e8d5074f1c11b27f04"],["/Swift生成器模式/index.html","6e70139611486e6b3fbaaced3c809274"],["/Swift结合Xib文件自定义UIView/index.html","efa9cacc19ed153faf3407f1a4872f21"],["/Swift编写的20个iOS库(一)/index.html","91952ecaede5267780b9edb770072955"],["/Swift迭代器设计模式/index.html","708af8cfdb470397d667bde3ad4f526e"],["/Swift适配器设计模式/index.html","54565ec59cbb0b431f8d61131e4c9339"],["/Swift静态工厂设计模式/index.html","da64520333fa0755a3a979321eb821a9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","28b7336e325e458b21a99c1f0369c7cf"],["/UICollectionView data source and delegates/index.html","93f1ecd337a4c0d05d400dd0f929a01b"],["/UIKit初始化模式/index.html","87801765deea40f75ad7b7d5dfff9b7a"],["/Ubuntu18.04替换国内源/index.html","1e1bfbd803ae1a48b9ac4bffaff9647f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","f242c7f3684fc5c62d305ba655d966e5"],["/Xcode扩展/index.html","537b79bb5de6ed9311b666267a1a757c"],["/about/index.html","9312987fcb040ced61621cb3f483c358"],["/appleOS的Networking示例/index.html","b5163b989d6eb08689d74674834fb0b2"],["/archives/2020/04/index.html","131f7b6c898692e5e67bcec1f3cb8399"],["/archives/2020/04/page/2/index.html","b7a202ec53e61ca18e7940adbecfa117"],["/archives/2020/04/page/3/index.html","c8f31d55ce5dc44d117ab7f98f4e4600"],["/archives/2020/04/page/4/index.html","5dbca21438cdf7e564edd9a06b8e01bc"],["/archives/2020/04/page/5/index.html","5f5d7c1b480acdf7a82a8a95985b1b67"],["/archives/2020/04/page/6/index.html","e2b7d36bb4c8c4b6e8c81e67d1edfa11"],["/archives/2020/04/page/7/index.html","ed9a8d82428c99473f5c90e3942e68d3"],["/archives/2020/04/page/8/index.html","1be95e7dabd1f6a502b111cc4eb18284"],["/archives/2020/index.html","9deb4bb3475bf48f854e70edbadeaec1"],["/archives/2020/page/2/index.html","bea762b64eacecb7125ee1bd00a3ba2d"],["/archives/2020/page/3/index.html","70c4c515bf65798125619ccdae66ca41"],["/archives/2020/page/4/index.html","7e9743f863e1564c0bfa5834b58ea029"],["/archives/2020/page/5/index.html","9546a0b8e737ca36fbfbfb066b6add9d"],["/archives/2020/page/6/index.html","52ab37852fbea0fc31a8a532a7769f4a"],["/archives/2020/page/7/index.html","ece7041830f9950a0c49ab401427758c"],["/archives/2020/page/8/index.html","a00ff4c91feffa427af69db55d7a6132"],["/archives/index.html","bd890f276a14230891713762df570100"],["/archives/page/2/index.html","f91fe962f895921b4e4a6a9e6eb192ee"],["/archives/page/3/index.html","e6d8c44fbaef60e5d2528d08f1cc8f2a"],["/archives/page/4/index.html","9708f9be8a4f6c4573a5acb5619b19d5"],["/archives/page/5/index.html","f7afce55dd3d0155508280a38673205e"],["/archives/page/6/index.html","a039579e022474d8ec351e7b83df2d42"],["/archives/page/7/index.html","353986ebfc653939ce0383fe1a034907"],["/archives/page/8/index.html","2e190f4545451f325097252fed49474d"],["/categories/Codable-protocol/index.html","4f64a91ddfec068628b6a2561744503d"],["/categories/Grand-Central-Dispatch/index.html","529d43b0162f6a2a08ea5ec059ed8a53"],["/categories/Hexo/index.html","9f54cab5c59aaba2784970115dd2dd8c"],["/categories/Result-Type/index.html","f822765ed634e7ec7c17029c58991f6b"],["/categories/Server/index.html","bda793cbc1b53ad1db27c1944dd032f1"],["/categories/Swift/index.html","600952464040d3a71a221ce18233ac03"],["/categories/Swift/page/2/index.html","37dc96b8f55167851c03d68ea7a716a5"],["/categories/Swift/page/3/index.html","27d52dabd52c9563c876c7d1212cf3d5"],["/categories/Swift/page/4/index.html","31938b4f30dbeba44e91ec9769f81288"],["/categories/Swift/page/5/index.html","be83bf1648c2c407d18e9e75829a1159"],["/categories/Swift/page/6/index.html","55fda62d10c1f77c31680149f1bb90d6"],["/categories/Swift/page/7/index.html","147855869359ebc3245d467f7837c1fe"],["/categories/Swift5-2/index.html","23e8ba5b0f358b2ecc96507867aabee6"],["/categories/SwiftUI/index.html","646c36d30f7cc66b8ec733771ab86664"],["/categories/UICollectionView/index.html","7786e3dabf9c92c5de7c5da5d0c7a05a"],["/categories/UIImagePickerController/index.html","ca15ebe08a46a5725b67d010ea9e94d8"],["/categories/UIKit/index.html","8acd12cf9e88aa936ed6a03022cf7110"],["/categories/UIKit/page/2/index.html","eb2a718e2d620c846f264033174a1e97"],["/categories/UIKit/page/3/index.html","4bb9e4ecba7837e3f89ecc3338ea19d2"],["/categories/UIKit/page/4/index.html","5ef0a9e1086fd68e2c82325ac692d809"],["/categories/UIKit/page/5/index.html","66de629328b8ad76957dba5d2d878519"],["/categories/UITableView/index.html","cabbf83732107ab5d84945bf7048ce61"],["/categories/Ubuntu18-04/index.html","d8396e16b358516aa5f86a921a6f4543"],["/categories/Ubuntu软件源/index.html","498aae99a1c660094562e2388d45dabb"],["/categories/Uniquely-identifying-views/index.html","2e81b5ce8385c817f460fea0f21903e1"],["/categories/VIPER/index.html","30e77055cead04b40e7185b298cca81c"],["/categories/Vapor4-0/index.html","fe990368cfc64067513b60873f8740dd"],["/categories/Xcode/index.html","25022883284277e2a594f590de60fd2e"],["/categories/appleOS-Networking/index.html","edb7b047eb22d35349976ed3b991dd0d"],["/categories/enum/index.html","173f2fa292500bf8181abd2d97c7e59a"],["/categories/iCloud/index.html","0924cee436e6e43121d688c5024f556f"],["/categories/iOS/index.html","e3f61b885d43899d36dc94d7ae8f6263"],["/categories/iOS/page/2/index.html","6568cbff54a064cebf0d0435ddae9c1d"],["/categories/iOS/page/3/index.html","b4334f83b8aa24cff36f1b47c5a448e6"],["/categories/iOS/page/4/index.html","bbff67c1dc29d0794ca879d7adcdfbc7"],["/categories/iOS/page/5/index.html","75ae6f86d9a5dba8fae9780f0845d3df"],["/categories/iOS/page/6/index.html","df4e6bfccd0227ee2cf94d5347c83083"],["/categories/iOS/page/7/index.html","907b43d23451171e362623dbdca92171"],["/categories/index.html","fba1f419dc9d3ca844606026b4d7f7e2"],["/categories/random/index.html","3291a73e0a664029c5f04e6e8bc0ae80"],["/categories/三方类库/index.html","cf65ede9185cd266eaa21a6858619003"],["/categories/函数式编程/index.html","c84b40ff73ea71401d8b4a8416582b3a"],["/categories/子类化样式/index.html","22b7e9c99d424edde26d61e101e6057d"],["/categories/架构设计/index.html","8c6ceabbd8c9dc4d7bffe6672848d722"],["/categories/用户体验/index.html","19e75ab90997274c624f9f43fae6e224"],["/categories/设计模式/index.html","010d153dac3460cc7a3b4a4e12b56017"],["/categories/设计模式/page/2/index.html","7d53cfeea285c5a46864f77ba3d8b554"],["/categories/设计模式/page/3/index.html","7cb3e1d3a75ceca587cda4ba0e05c19a"],["/css/main.css","1d8fd0599eb781300f73d36936c45142"],["/hello-world/index.html","2637f387a7388385cacd65a0fa6dfd56"],["/iOS VIPER架构深入实践/index.html","c3148a51b75c9609a9e4b0a5d66eacad"],["/iOS如何使用iCloud文档？/index.html","3c988e53f55862e026e86ee55c2418be"],["/iOS子类化样式/index.html","046edecbe4e813b5842284b01b7a296b"],["/iOS自动化布局编程/index.html","73e09131dab41644d3b944fd74c9df8a"],["/iOS自定义转场(By Swift)/index.html","1f6dda8e118aa5919e0c145e0fc120f2"],["/iOS项目架构：使用VIPER/index.html","63ed53e6cae7c9bcacbe5e0605fc5e65"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","accb2d93fb064911f9cb9b15df194808"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","dc583ee2b562b37cb621ded6bc46d5b9"],["/page/3/index.html","ada62d3ea14012ee76c38c47ba2e3f8c"],["/page/4/index.html","19a3ec8e97aed11f9c6caa65615af3de"],["/page/5/index.html","deb5a501df33ee6ebd02730c9191c5ab"],["/page/6/index.html","8b7cd52fa82b087c301cf32c5a012b64"],["/page/7/index.html","2b7c00bea6aa09af23ec3de935d5484e"],["/page/8/index.html","c40c9f5024b8cce86874fbfc65595b53"],["/schedule/index.html","00ef2adad505538df96c2a8defbdbbf0"],["/sw-register.js","0a9475d77a66fd83ad9e29173e73f8b5"],["/tags/Codable-protocol/index.html","eee7ad0ff1bbba3fc22927588b398d74"],["/tags/Collection/index.html","b522695bd83babac2aebc6a519f97d2e"],["/tags/Collections/index.html","cb9daa47373f2f214511063244378dbb"],["/tags/Dependency-Injection/index.html","1aef22d3a8f977c79f5ed2a067c02e32"],["/tags/Grand-Central-Dispatch/index.html","a236404e7f10e762737f5c4833247bf0"],["/tags/Modules-And-Hooks/index.html","b053a90cd8374479ea6069ecac9b9ee0"],["/tags/Result-Type/index.html","4180393c7c5348709352dc229fd02b3e"],["/tags/Server/index.html","98e695a1328f959a58fd9643ba36b1c1"],["/tags/Swift-Package-Manager/index.html","0c83937b7d8e30e4cd692fef81f84e7f"],["/tags/Swift/index.html","2b0f888126704349b1d91e8f586c79ee"],["/tags/Swift/page/2/index.html","8a68bb98a677b76d7f2c9a7c6c5d5459"],["/tags/Swift/page/3/index.html","87e9a576ffc4d1832a9758cc92a37e65"],["/tags/Swift/page/4/index.html","9e5b512dcb4cb73516fdb12d62f9cca4"],["/tags/Swift/page/5/index.html","63f31edf4cc7b918ab084e9f90219927"],["/tags/Swift/page/6/index.html","c9f719e7d665769ff71494fde7829b6e"],["/tags/Swift/page/7/index.html","04f8e0fb2ec82b31b3db8eecf1fe9422"],["/tags/SwiftUI/index.html","5a7b05abfca07c1e214e33f455f4f574"],["/tags/UICollectionView/index.html","e8d149ddf81cd1b3bd2f0ef85f8067c5"],["/tags/UIColor/index.html","1b802e547d8e6554735ff72a9d031877"],["/tags/UIImagePickerController/index.html","63faa87949049a3bbbc2f53bc51112cd"],["/tags/UIKit/index.html","23ba41d3f099a5194fd03f8fd19ac925"],["/tags/UIKit/page/2/index.html","77678e8fdf976fb56f26361b65804d05"],["/tags/UIKit/page/3/index.html","75598d18b85ab7b8c7aeeee6ea022758"],["/tags/UIKit/page/4/index.html","848315708b2ec6127b7937273a099e02"],["/tags/UIKit/page/5/index.html","2579dfafd97864d3923098d251ca5d32"],["/tags/UITableView/index.html","9b1234743551f8ff367b935d1717e6b8"],["/tags/Ubuntu/index.html","82cc990e37911ed30b2e028ea0d820f0"],["/tags/Uniquely-identifying-views/index.html","c36b39a35213a4e6ddc796491610206d"],["/tags/VIPER/index.html","9ed64addf5f95d2d6de4354da0c4f2b6"],["/tags/VMware/index.html","36d7ddaa35fb654689f9070dfe257031"],["/tags/Xcode/index.html","e9e5c3d111f546d5c881e123b50603b9"],["/tags/appleOS-Networking/index.html","2597685f14ce4975dcc1b63a62978b9d"],["/tags/enum/index.html","912a52df8eed63572de014d586f880a3"],["/tags/iCloud/index.html","449011b7f8b97034320ec6fdc69095eb"],["/tags/iOS/index.html","bef931f467a09a9dcd668636cfa82f24"],["/tags/iOS/page/2/index.html","a6b6f2e3511e0345805d0f82820c9060"],["/tags/iOS/page/3/index.html","15758b0a5ebf54fe6960a7efb44ccb4c"],["/tags/iOS/page/4/index.html","32bd872bef01d5effe9a395837f621a1"],["/tags/iOS/page/5/index.html","05a5eb1f826dacc11305c6332707c13c"],["/tags/iOS/page/6/index.html","de5ada7a12ce1ba3db978c25e80d7347"],["/tags/iOS/page/7/index.html","61060e181bcbd2c2cba4c033aaef2738"],["/tags/index.html","6e7b4592e0b03732721be8646f49d211"],["/tags/non-optional/index.html","ea2647bc8b64a377c64d4019dafae562"],["/tags/optionals/index.html","f64e7f5c7c06e345a18d36be0e3d1e0a"],["/tags/random/index.html","77c3cf361e1309e929c84f8fa3726fb5"],["/tags/transition/index.html","b21cdfa9aa0c0c78764330767374850b"],["/tags/三方类库/index.html","e90ba0efdd0d6beaf97b561860c5e466"],["/tags/依赖注入设计模式/index.html","5162e559e3731bce010f351bd38de295"],["/tags/函数式编程/index.html","5207fdd8479a483d776b89d0cbfb9776"],["/tags/初始化模式/index.html","4fd91f67e1a1337e030092a3e800e978"],["/tags/单例模式/index.html","1e7b453778f975d411bf3a7028dffc87"],["/tags/原型设计模式/index.html","84c5630a6ce024361d4372a3d9c8e7c0"],["/tags/命令设计模式/index.html","abfb49ceba81fd6aa7352f79c2f39350"],["/tags/外观设计模式/index.html","5214e3a18250f6176636caeff0fddb86"],["/tags/委托设计模式/index.html","d6be59e89fc1c6f8a614d7125e4bae7b"],["/tags/子类化样式/index.html","0555369de640aed5751548dc39afd49b"],["/tags/对象池设计模式/index.html","e371328cfa33a57a7681bb8330c54bc1"],["/tags/工厂方法设计模式/index.html","39fae56b470de2c46710eaf92f9ec043"],["/tags/工厂模式/index.html","053d66352741ad2aa451e75aeb144692"],["/tags/工厂设计模式/index.html","419c8fe406ff4b8e55edbbb55465833b"],["/tags/懒加载模式/index.html","33e2c5a680516a60f85384bb8d82a41d"],["/tags/抽象工厂设计模式/index.html","71e88e6362709c510f23c99bcc8cedf2"],["/tags/构造函数/index.html","bd66cba2c37550f3ce83180c466c60aa"],["/tags/架构设计/index.html","0a77377a4f67c0eb86e640d3748fbe00"],["/tags/生成器模式/index.html","a83d96b6dcb5fc0fa11179d54f274197"],["/tags/用户体验/index.html","f5f7c7821920b3093d8fe7e6c70e2b58"],["/tags/自动化布局/index.html","0cc0bd5b38944c4bcfd6d91fe8f4dc79"],["/tags/自定义UIView/index.html","4726d83c1fa26078a65960265fbeaaba"],["/tags/自定义转场/index.html","85ce4f77ad429d952b1f2beaa3c24b22"],["/tags/自适应布局/index.html","8b19df3d89218f4242272165297d776c"],["/tags/设计模式/index.html","1a2fd9c8b3f05e6c2b87be211d23736d"],["/tags/设计模式/page/2/index.html","d3edc2aaa9366201229d126d73724d6f"],["/tags/设计模式/page/3/index.html","4b1c76a7dc3e0ef3c7387b52c2dc3047"],["/tags/迭代器设计模式/index.html","9bd267e208daba82cbd132d9cac2eb4d"],["/tags/适配器设计模式/index.html","06d5cb8dfd91169fd94bed686d485ee7"],["/tags/静态工厂方法/index.html","bbf16f9445389c602f1006f9c414721e"],["/产品开发的幕后花絮/index.html","40c2cac4a6e4e3d4d07957b3bb01565e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c1308b9a0cdab771a2b72e8918c50a4b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","443478f8c05d0957a21794d2f5e4bd63"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b0b000b5e8b350c0f708de89eb218a59"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a7366d1208328ae9df7c7e6dfd98620e"],["/在Swift中创建自定义集合/index.html","6a0d9629729f4633c9c1fdbe8a99bcc4"],["/在Swift中处理非可选选项/index.html","a79602439ced0becaee8d3a118a4975f"],["/在Swift中生成随机数/index.html","e26dece09188cd8fcc30019c2eed79fc"],["/在Swift中重构单例模式用法/index.html","ec6b2dd86f1fdcd999051d27a53d1655"],["/如何为VIPER编写服务？/index.html","abb56501aa55bb5bb497cf2ad89d8ea5"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d6d96196ab70604f3cf76108bdb24ecf"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b820837d4da277e3ef45b13fcfb9b6dc"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a6da2c44ee0984a39c2cbc724b156dbd"],["/掌握VIPER架构/index.html","1d38fbf9af30894bb4f0b3f56a6c6ee2"],["/揭秘 WordPress Hook 系统/index.html","651d0a1e861bbc449d435419692d46f3"],["/比较工厂设计模式/index.html","eac088be50fcee7c257b4af50c6f3951"],["/深入了解Swift中的Grand Central Dispatch/index.html","40da7b6555ccddb3e5045231df659602"],["/深入研究Swift框架/index.html","f4b9bf0f2eeee83ddb54f99684430ce8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5fbb0ae920edabe42497f95bc72b5844"],["/选择Swift而不是Objective-C的5个理由/index.html","17de20138a578c954aff33b69339aa51"]];
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
