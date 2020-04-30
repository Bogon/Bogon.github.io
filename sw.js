/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","422eaa45165c3b2e88b0ebf3e04a3535"],["/Swift 5使用UIImagePickerController拾取图像/index.html","85bc9d16db82bfc2ca1e251dd7bfde78"],["/Swift Lazy属性初始化/index.html","ce2aa273da064fa697c88baa235d6ae2"],["/Swift UICollectionView使用指南/index.html","e0f8d2e5f37c0b5c710207718f9e7d1f"],["/Swift 唯一识别的视图/index.html","97b715a599959fab29412c362ef7ea8d"],["/Swift 如何学习现代UIKit？/index.html","da339afe2d3eb275399e43be3d216a98"],["/Swift 选择和播放视频/index.html","5265bde00cb791a3c26b3657e4c6a424"],["/Swift中UIColor最佳实践/index.html","a95d06053f4af79a340e77d479f6d0de"],["/Swift中快速简单的工厂设计模式/index.html","90a741a405a2842f82daf1282cf80d5c"],["/Swift中构造函数与静态工厂方法的比较/index.html","3908cbf5c56c5fe488f763dce55c1ce4"],["/Swift中的UITableView教程/index.html","cccfba8982367ee79b744f8a4bdecf13"],["/Swift中的懒加载模式/index.html","c49c08b58053f0bd2a1095fae917102f"],["/Swift中的模块和挂钩/index.html","a8037e2ca671abe76344122b9549f26c"],["/Swift使用布局锚点添加约束/index.html","d25655c8ca50276c481ff159264415c9"],["/Swift依赖注入设计模式/index.html","811a7d4168bbb2bb56e92f53bf7ba11a"],["/Swift关于Dependency Injection (DI)/index.html","1d754e6e154eeae68319b592ad6a2780"],["/Swift初始化模式/index.html","2a930dde02492ba8ed380f1cee750963"],["/Swift单例模式/index.html","0e23d8c47497f2fe1c717920fc8b22a7"],["/Swift原型设计模式/index.html","19676158e2790d057229d86188ed6d1a"],["/Swift命令设计模式/index.html","5856bd5403a396780b1d4294d30e46f7"],["/Swift外观设计模式/index.html","c019f5a31c65a02ee7267e6c6e474afe"],["/Swift委托设计模式/index.html","0b2413b7a9f8c1e62a2eceddaa6bdcd3"],["/Swift对象池设计模式/index.html","8ad76e9c3cd20259a880c63e4eeca624"],["/Swift工厂方法设计模式/index.html","751a87653b217a56c884f846cd6f0512"],["/Swift带闭包的懒惰初始化/index.html","9541fa8ff3a11ee052e32f0d563e6b17"],["/Swift抽象工厂设计模式/index.html","c212ac5ec83ed717b9563932e4eaf9e8"],["/Swift掌握iOS自动布局锚点/index.html","4c099b287deea8577a5cff8d5de0460d"],["/Swift支持旋转的自适应单元格/index.html","078d864868309876a8468320e14d846b"],["/Swift生成器模式/index.html","c0d304315bb318762fb8ccfea908f582"],["/Swift结合Xib文件自定义UIView/index.html","6abdc77b01614c28af383856f86fc937"],["/Swift迭代器设计模式/index.html","b32579f25696ce84c34fc91b6d42a91d"],["/Swift适配器设计模式/index.html","1e03bd045d09b24feb4e4908854ae386"],["/Swift静态工厂设计模式/index.html","72eb8c471cbbd31cf9b907c6422e2bf0"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","63b12abdca607e20473659db473eb4f1"],["/UICollectionView data source and delegates/index.html","abbcd08bb9f8a4c4c6367104a2d605c9"],["/UIKit初始化模式/index.html","a35c5a819a18ea10acf142cc820caf9c"],["/Ubuntu18.04替换国内源/index.html","843044689b4c761a09fa160797e58735"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c70b30508c60fce2b56818e886990f0b"],["/Xcode扩展/index.html","f799489c633953c8222d6ece91205009"],["/about/index.html","130f0275340b0763b06daf5e7510ea3a"],["/archives/2020/04/index.html","7c61667c5a624ba3db67413e2c5877f9"],["/archives/2020/04/page/2/index.html","c13f3ff2758910ff1315d16435164d41"],["/archives/2020/04/page/3/index.html","74f6f9db56bf28349f3e61d3ac317e32"],["/archives/2020/04/page/4/index.html","9a1894a8c24c53a03f6bb4de445741d3"],["/archives/2020/04/page/5/index.html","39f0fb3a6d4d16641704fc399350898a"],["/archives/2020/04/page/6/index.html","66244db517e1b24f2b7b2e55ce6078ba"],["/archives/2020/04/page/7/index.html","0d1feae84867bd695ed7be83588f9493"],["/archives/2020/index.html","985ec0f41f87b77581fc55f4ee0c97be"],["/archives/2020/page/2/index.html","9a52e6454a4f424b6365c2ccb525df82"],["/archives/2020/page/3/index.html","8ceb44608c31ff3f6b62931ee28b9d33"],["/archives/2020/page/4/index.html","34756131f7476f6a4215fc46428a8388"],["/archives/2020/page/5/index.html","40a9ef0f19a78cd2ff92d8e049245275"],["/archives/2020/page/6/index.html","b754ccf04a2a5f71aa4e74cf1b2b988d"],["/archives/2020/page/7/index.html","8c53f25a3060ea483f36258cc68182aa"],["/archives/index.html","6e3807243414b179d5c7ff565a32b224"],["/archives/page/2/index.html","5e789fea30ead2a2e8260f9fcdd2b04d"],["/archives/page/3/index.html","ddb4bdba2f57868875d7551c641645ce"],["/archives/page/4/index.html","42facccfbd008a56cfdcd852b66f5775"],["/archives/page/5/index.html","4c25b983f7a9bc06640b71e220e5f0bf"],["/archives/page/6/index.html","d0f79f52e4a9e44f7b64afaa3b3af2e3"],["/archives/page/7/index.html","0c4086be3f01dbd69f1b3eded6265b5a"],["/categories/Hexo/index.html","ca0509345ffeb8caf3ebf549553ec9aa"],["/categories/Server/index.html","12f5c99d2baa77a8c32b9a876e0bc764"],["/categories/Swift/index.html","f7e999ed97b40be536500282852f3cdf"],["/categories/Swift/page/2/index.html","e823f449efe2d8c9b4db2155ad8ca880"],["/categories/Swift/page/3/index.html","c124480be57b0e6cae35eaeb09bb0428"],["/categories/Swift/page/4/index.html","6cc8c180dd5c6f532b01464585208411"],["/categories/Swift/page/5/index.html","c681f825f00be170bf86adec3e26d31b"],["/categories/Swift/page/6/index.html","0a23203eb4ee546ca28a86e6257ba1c6"],["/categories/Swift5-2/index.html","b6325f43b84c67b19ae4dc28b7fc6ed8"],["/categories/SwiftUI/index.html","d35d0c5c98f21ca31665812354c2f726"],["/categories/UICollectionView/index.html","3c16645c66d65741d2a10579db4ceafe"],["/categories/UIImagePickerController/index.html","8f6520a381b296cc8e1c9edd72766d20"],["/categories/UIKit/index.html","c6733732a83371db33224d3e3a863665"],["/categories/UIKit/page/2/index.html","5cc47017c0938961150363056ac519d4"],["/categories/UIKit/page/3/index.html","5739edef1fa68731718f80367f7f176c"],["/categories/UIKit/page/4/index.html","3d4be4c47db608977d45add52bed4505"],["/categories/UIKit/page/5/index.html","bed2cf15da6041f08485a185855fb2c8"],["/categories/UITableView/index.html","e84fa03b91e4113d891eeb4ce1f56db5"],["/categories/Ubuntu18-04/index.html","c8e9831c76aa1af9e6642154f387b37b"],["/categories/Ubuntu软件源/index.html","593a9aa5e01190c24b23fa18914cb2fa"],["/categories/Uniquely-identifying-views/index.html","832952142f8bd1cc2da086d4b8578f05"],["/categories/VIPER/index.html","692dcba700f028091e75fa2c85a34d52"],["/categories/Vapor4-0/index.html","c999eeed1c1eb7ef7f9bac000be5ce04"],["/categories/Xcode/index.html","6864ce063f53b2005ff320ae1045a0ef"],["/categories/iOS/index.html","dd6e15911e89ee5eb25329e6e182245e"],["/categories/iOS/page/2/index.html","e7672d7a0fbef7f9289df83726d435ff"],["/categories/iOS/page/3/index.html","18b865cfc13336b879cdfbab2a082643"],["/categories/iOS/page/4/index.html","a9a7c135792520a8143df5f2b9821a2c"],["/categories/iOS/page/5/index.html","76c882d95e4c9f8f5e8cdec024767fe3"],["/categories/iOS/page/6/index.html","9718c4dfc2f6993bb9eba9c051dd5a8a"],["/categories/index.html","96e72ad7e4192c8702d0e682d7bad58d"],["/categories/子类化样式/index.html","ded77dc1ef74693ef6f8e622e39d159c"],["/categories/架构设计/index.html","4abb38eef1ca5f9901eb7493f0be3fec"],["/categories/用户体验/index.html","a00a59c054a3cfe47f4e2ef5c9e956bc"],["/categories/设计模式/index.html","b808d67a3c09660b260f226c9a0e3719"],["/categories/设计模式/page/2/index.html","3198be6fb951c1919d7ca03940a9d34b"],["/categories/设计模式/page/3/index.html","13611cbfc45061daa21f8581ab1855dd"],["/css/main.css","a429a1084c6d69e14899292a55502434"],["/hello-world/index.html","de2562336034fe7eef4d0114b8f7ba52"],["/iOS VIPER架构深入实践/index.html","e1bfc72681d7199c1eae5a050ace2d81"],["/iOS子类化样式/index.html","39fab33df248e2d38570676af0bbba7b"],["/iOS自动化布局编程/index.html","a8e254e3aea4de84bfc4f43cd11ba614"],["/iOS自定义转场(By Swift)/index.html","78783932aaafa0546c1f8f2700b115d2"],["/iOS项目架构：使用VIPER/index.html","dee9e269b7bed18b30592a932bdac431"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6542a9e8cfe4da3d857ad2af40fc546c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","151d8d10197e0faf79ea715fc3afc705"],["/page/3/index.html","421c331b05cb401313f7fcde3e032187"],["/page/4/index.html","11b87e0976b5a094cbfed969e9ec0c2e"],["/page/5/index.html","067638fca888a6abb903782fcc13a316"],["/page/6/index.html","6f46a6d3b5e76d393a3c4898106652c8"],["/page/7/index.html","de3a78d1a2abe1fa181ea83635db3624"],["/schedule/index.html","9628804606d49b5cdd5e2e23f3152549"],["/sw-register.js","d037f51a1bd9dd49beaa698f8a0f0553"],["/tags/Collection/index.html","f0dbeea385afeb5dfb91297e21987274"],["/tags/Collections/index.html","e49706d99819da7ab8358b4fd8a1ec39"],["/tags/Dependency-Injection/index.html","2b2a3756de48f3521b9fdae50eb4c07a"],["/tags/Modules-And-Hooks/index.html","0213d61bfa0906099181dd3903902df0"],["/tags/Server/index.html","a4e1c74176795ae00f70de6e060fd787"],["/tags/Swift-Package-Manager/index.html","601621d434db375acd181465ed90532a"],["/tags/Swift/index.html","d0559c762f59a2d57f0d11a5d80f6aed"],["/tags/Swift/page/2/index.html","c9ce449fb513e15c9b9cc4a30e2c810a"],["/tags/Swift/page/3/index.html","47b9918dc8eefb14094905ec6bacf827"],["/tags/Swift/page/4/index.html","af02aacb5823be0ac8351c74f60b108a"],["/tags/Swift/page/5/index.html","60315c6c6b6f947dffbc6fc93e603848"],["/tags/Swift/page/6/index.html","cc2bc9ac8d0d315b339299fe346c0633"],["/tags/SwiftUI/index.html","044af5858b673cb72fde6e8e1f097ec0"],["/tags/UICollectionView/index.html","f579b1575099026ab27dea28cf655830"],["/tags/UIColor/index.html","9b310060b8362f7d91fb36e0138fa283"],["/tags/UIImagePickerController/index.html","942837d7fb0b6290a29fe1c5d90c0707"],["/tags/UIKit/index.html","39ff6e9622a89a6ecdffb09d0aadcc2b"],["/tags/UIKit/page/2/index.html","c057851e66951d242e454198b9bab542"],["/tags/UIKit/page/3/index.html","25fc9adf9170e05af98cf9b5143c4182"],["/tags/UIKit/page/4/index.html","f72e7eb912fde1e5871f4866961d98d7"],["/tags/UIKit/page/5/index.html","83b80dca6361a07fb57f6fd81048e658"],["/tags/UITableView/index.html","ff2cfb13735472ec4032fdd9dab34c07"],["/tags/Ubuntu/index.html","b88363a731db31f5bd4eee8331c6ac9e"],["/tags/Uniquely-identifying-views/index.html","6821c1a437945fb4bef1a1d0e1776ffb"],["/tags/VIPER/index.html","14b0252210dfb4ec190d939341a26614"],["/tags/VMware/index.html","a5dd0c25c52b32e79fc6c5ce98a7f951"],["/tags/Xcode/index.html","0158379eafb9fbc26160a46232b499dd"],["/tags/iOS/index.html","bfaa145f1e99d4bc37a607a890803fd2"],["/tags/iOS/page/2/index.html","8cc10988f65f91d2c2687e74f44b3fee"],["/tags/iOS/page/3/index.html","bea468939252b4ac0340317988ed2b50"],["/tags/iOS/page/4/index.html","36697cb3bca1271f216c5fe9d4791dc8"],["/tags/iOS/page/5/index.html","7b1cb535ca302dc332a98f91d8d2908e"],["/tags/iOS/page/6/index.html","67cb925578177f588947916a436698d4"],["/tags/index.html","e28d62b01e8dfa4c8899cb3568c2ac72"],["/tags/non-optional/index.html","9c8d96e700a4c7389736ebd57b15d61c"],["/tags/optionals/index.html","5a5541587f1d0bdc3145419765ee76ce"],["/tags/transition/index.html","d3a6648ccead0761a11ef60a1c181daf"],["/tags/依赖注入设计模式/index.html","ea2f480b33ae0a753961f4a5f891e510"],["/tags/初始化模式/index.html","360e3e6408286c3a69f20b9903ddff69"],["/tags/单例模式/index.html","fc94fe4656d6661b5a89ed32ea4cfa55"],["/tags/原型设计模式/index.html","2352ec282539590473be8d0a10466af9"],["/tags/命令设计模式/index.html","e2f00db869a7429398d5090bb274cfce"],["/tags/外观设计模式/index.html","a47ffa9c68c72601cd40b35c3fc90e82"],["/tags/委托设计模式/index.html","a2aa034b87da3215f7e335f8ee03fee7"],["/tags/子类化样式/index.html","de7c154ef2ab75ae40e615f9b97383a4"],["/tags/对象池设计模式/index.html","cb9af8b7c36c712a9d16b2fc8137ca18"],["/tags/工厂方法设计模式/index.html","87b9cf47864bc400a53703612584c30f"],["/tags/工厂模式/index.html","aa82ed10860c98c05d8098c8e39bead2"],["/tags/工厂设计模式/index.html","1278000055d434e4b344ef950016a949"],["/tags/懒加载模式/index.html","9c4774039687bf70896ab7e30594cb5b"],["/tags/抽象工厂设计模式/index.html","3851fe24fd97cbd7ca4ead585a69442f"],["/tags/构造函数/index.html","5d181ed79ee888a7cc66b98d0c785941"],["/tags/架构设计/index.html","b3b5fad634d822c697d4064f391e6342"],["/tags/生成器模式/index.html","b808a57cac68c2b14b881a6028967b59"],["/tags/用户体验/index.html","0cee8211230d81f4dd72f3006765ce6a"],["/tags/自动化布局/index.html","895599a23117554872d1908d69836928"],["/tags/自定义UIView/index.html","432d7a5a5e23336549dc4ac06e23456f"],["/tags/自定义转场/index.html","83471b52f579c1f2a29813adbec036dd"],["/tags/自适应布局/index.html","e78b0e3d85552b59d4bc3a941c22a98d"],["/tags/设计模式/index.html","f94749c601a756a53c79eb669230a081"],["/tags/设计模式/page/2/index.html","de10e52a6ff3ed80c1b7305253bf9959"],["/tags/设计模式/page/3/index.html","4eeae68a0ee0a5bc05c04394acd6c4c4"],["/tags/迭代器设计模式/index.html","71df3b900666f04dc77c80ea61bc9e1c"],["/tags/适配器设计模式/index.html","12f6b13a5ab8e1b6571c15765598cd9e"],["/tags/静态工厂方法/index.html","fea7e26b844eeaff4e4c7ab20596be36"],["/产品开发的幕后花絮/index.html","5a2f42dbcb9009d8db6d531e9e879410"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","efc34942c477742654c467bb33ac6277"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ba5123b1139a65e9fd1a499154b44b0c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","633c5b7e9934283eb916afed9a7d60a0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","6de042e99a5c93171cbf01158a3261b5"],["/在Swift中创建自定义集合/index.html","235dfc72d9b1cfce10dca4093dc9eaa2"],["/在Swift中处理非可选选项/index.html","e0202829d744fc866c6ef586f230809e"],["/在Swift中重构单例模式用法/index.html","b80d6fd758ec02a3832781030e1b31dd"],["/如何为VIPER编写服务？/index.html","3eaf6008f00a67441a088f4f0d312d37"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ed7f38d81986d6a2cfa59d755290f3fe"],["/掌握VIPER架构/index.html","2a76e8cdac0931ba176c4b9fe7528b5a"],["/揭秘 WordPress Hook 系统/index.html","be106cbc751136c61b98aa610a16a73a"],["/比较工厂设计模式/index.html","0e6f5b521c7d10aa26cd7afd3c021675"],["/深入研究Swift框架/index.html","1c942a3894fedba8cd76b9b5153b3706"],["/适用于iOS开发人员的VIPER最佳实践/index.html","211e5b88766f9b69dbcedcf48e683115"],["/选择Swift而不是Objective-C的5个理由/index.html","9444b8a2ed55f3642c6dd848159c802d"]];
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
