/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","cc08f04aecd393b1f4c7e1848103428b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","28577df8b8809a3c19912eb3d6e14277"],["/Swift Lazy属性初始化/index.html","dea2ac99c05e8b263d90faae7441d6d8"],["/Swift UICollectionView使用指南/index.html","0fff5225e8f229663609b4057ebe62cb"],["/Swift 唯一识别的视图/index.html","cae1b3bbb8eab6bf75ed4e521d2e8c6c"],["/Swift 如何学习现代UIKit？/index.html","5e45ec36e8088a8c25e8398ff406072b"],["/Swift 选择和播放视频/index.html","46f6161a81d9809638fb4b81de7c6764"],["/Swift中UIColor最佳实践/index.html","818385227aaa1001cad0add149ea2eed"],["/Swift中快速简单的工厂设计模式/index.html","5527f68709083b1732aa49c6638dda01"],["/Swift中构造函数与静态工厂方法的比较/index.html","ced358c08bce94a71f5eef131ea2605c"],["/Swift中的UITableView教程/index.html","67bde0c81c1f79dce642c034cb372d93"],["/Swift中的懒加载模式/index.html","974f9e5b6bf064a00bbaaa3f67b721a3"],["/Swift中的模块和挂钩/index.html","049213d94fd225aff7bd8e96d43d59af"],["/Swift使用布局锚点添加约束/index.html","9b9482346f4dd16e5a9a9a4c3f6e0943"],["/Swift依赖注入设计模式/index.html","11216f467462798164b6cd1149d056d1"],["/Swift关于Dependency Injection (DI)/index.html","de92edd8f291bc76c499c96edc7f3ebe"],["/Swift初始化模式/index.html","ddb3acd95f10afc22411c559c2365c1d"],["/Swift单例模式/index.html","93afee6e178a2734a6d011b3167a5ace"],["/Swift原型设计模式/index.html","0eadf4fa493901c12c21a6d98c0b779b"],["/Swift命令设计模式/index.html","5173a36e9b3bf85ce27f7e9aa8b3188e"],["/Swift外观设计模式/index.html","5a75188e72f68a7e73be902244a26c24"],["/Swift委托设计模式/index.html","099f64889ed2b7b32dca90b287ba491d"],["/Swift对象池设计模式/index.html","020c9aabab362464d7970c67f7cf3dc6"],["/Swift工厂方法设计模式/index.html","e5acbd77776f2d149eadae2e1b5f3188"],["/Swift带闭包的懒惰初始化/index.html","fc9f8cceecff9e682d94cc28eed75512"],["/Swift抽象工厂设计模式/index.html","05590f81e5fdaa2dbe5811d7756837a2"],["/Swift掌握iOS自动布局锚点/index.html","0819edaf6d851a801ae5662850091e8e"],["/Swift支持旋转的自适应单元格/index.html","bd526586b99982a10511eaa4651ad957"],["/Swift生成器模式/index.html","e03b9e7742e944550da7dc3b7beab910"],["/Swift结合Xib文件自定义UIView/index.html","d35381234f105907e626ab450ffb6b76"],["/Swift迭代器设计模式/index.html","632a5295f2ed53712f9f53cc8e827fa4"],["/Swift适配器设计模式/index.html","d1f4790cc80f45ab7b6db9844c83f32a"],["/Swift静态工厂设计模式/index.html","28eaf551c8044291f877bd17e74c6794"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","7da8f164bc800ed4e454ccaf422f1b6b"],["/UICollectionView data source and delegates/index.html","ac6b4cfe926d2b6bed88fbc7cb2d3d02"],["/UIKit初始化模式/index.html","e2c24c6a86e847cc560e77f63e252a2a"],["/Ubuntu18.04替换国内源/index.html","126f7113fdc2fd292383182dc17cd8c3"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7ba2d2a0182648fe09f52f017a1e6455"],["/about/index.html","072189f53762d93d87901e53d2ad2075"],["/archives/2020/04/index.html","704fc672121192ad0e4b9d42a113f97d"],["/archives/2020/04/page/2/index.html","51b5e1a374a1922a7ca80f787cd34837"],["/archives/2020/04/page/3/index.html","f1cbf04330f2742b9b75d9532fd31a50"],["/archives/2020/04/page/4/index.html","238b74b6b85d25be30c3731d1101fa12"],["/archives/2020/04/page/5/index.html","5cff1a1d5898f7b66a80cd66f9fbdfc3"],["/archives/2020/04/page/6/index.html","a2574c086cf7f182f3475b476c83a38d"],["/archives/2020/index.html","ea1fb76e49d8fda7d8a99448612c7437"],["/archives/2020/page/2/index.html","f9c7e90f194cd843ace8ef8d8ce3510a"],["/archives/2020/page/3/index.html","384d39fc5dda4bb144b5e8cba5e5a427"],["/archives/2020/page/4/index.html","2ac9772ab4073aa87bfd86f82855cbdb"],["/archives/2020/page/5/index.html","84cd800162aef67d1c0f0ca8e8852453"],["/archives/2020/page/6/index.html","77a8b1df9261cca251f41259bb92e526"],["/archives/index.html","113dcd0afbdcc35a05d08b396d0cbb11"],["/archives/page/2/index.html","d4c656ff9a2d8610e8b90cac78da10ef"],["/archives/page/3/index.html","774b682f2a2ce126d70b81331f0bbaae"],["/archives/page/4/index.html","4db8021addab00ac2bf278bedaec8b15"],["/archives/page/5/index.html","925926376c223933c84f0083be732461"],["/archives/page/6/index.html","541e57e90db3347332debcc93d4d2aa2"],["/categories/Hexo/index.html","7801e73ad4779d62f6bdd37d16d38a24"],["/categories/Server/index.html","1f00dd0f17aa071e89620c071100ea98"],["/categories/Swift/index.html","0013c904a5df1d0ca5b86ef33173d6e2"],["/categories/Swift/page/2/index.html","2bc74340808c0d252195be64c3ed2319"],["/categories/Swift/page/3/index.html","4aab14f9930628de09812b51fdd18a10"],["/categories/Swift/page/4/index.html","8520911da704e7fd5f318adfeb247b70"],["/categories/Swift/page/5/index.html","4668eabe62e23c8a2df325b1591b34a4"],["/categories/Swift/page/6/index.html","3b98250f9e7047a407c8a6204844e15c"],["/categories/Swift5-2/index.html","83eaa663031c5ad56fb577275881218e"],["/categories/SwiftUI/index.html","9b813546cb17f4f4cd10f69a4a1d0b2e"],["/categories/UICollectionView/index.html","212b20b26d42ee3f2c1d345c1c1fba2c"],["/categories/UIImagePickerController/index.html","899461a49ff0c9d64f42021c49e1a53a"],["/categories/UIKit/index.html","4b28cc2d8809983d329a3a036f5f8d19"],["/categories/UIKit/page/2/index.html","8ac9426851adbc3b8028451907bfe4bc"],["/categories/UIKit/page/3/index.html","a4d3cc0179fc232e830d5a388f7027f3"],["/categories/UIKit/page/4/index.html","c3532c5dcc1c52759977a19632945c68"],["/categories/UIKit/page/5/index.html","2ad28b09b193f1b716b8ed8b09a63ffc"],["/categories/UITableView/index.html","a59390afa833c1178698ec0f7620b866"],["/categories/Ubuntu18-04/index.html","9f39c7434e63882d08b06854adcd1e82"],["/categories/Ubuntu软件源/index.html","7dc286510ace458827fc1cd5d3421ff3"],["/categories/Uniquely-identifying-views/index.html","71799d609832af36628e6d8b032d267d"],["/categories/VIPER/index.html","36aaa8c175f633d7f1522d53a5664be8"],["/categories/Vapor4-0/index.html","f537de962308282c8d0a734c52bddd43"],["/categories/iOS/index.html","edf08e97e981ffbe77ca205c05db2458"],["/categories/iOS/page/2/index.html","485908ad7ef23ec1312ba9375202fade"],["/categories/iOS/page/3/index.html","dba1c790aa203157dc0edd1aad5af5fa"],["/categories/iOS/page/4/index.html","274eecf1421e0853d6e121ef6f462312"],["/categories/iOS/page/5/index.html","8ebc6c42eeadb84a233b9466764d082e"],["/categories/iOS/page/6/index.html","a25cb0a7c3bfc2e5bf8d07a2571fb7c1"],["/categories/index.html","83c7f08fbb5b672b42d97b3f1f58ae79"],["/categories/子类化样式/index.html","e45d32b0a91db53baea6e7833c5268cc"],["/categories/架构设计/index.html","e734fcfcd70f6ba1350eb833b1da2b22"],["/categories/用户体验/index.html","9e721890323f4095cf2d6f165d657fdb"],["/categories/设计模式/index.html","58feca34e02873985c117d8139c1faff"],["/categories/设计模式/page/2/index.html","d9d9a008dfacbb8a46c52a57f9b07aa4"],["/categories/设计模式/page/3/index.html","16aaf4d39b15602b3999b5c9cd867760"],["/css/main.css","10a8d34c1c5a92e21ec3eccbe1f82e1d"],["/hello-world/index.html","7ba5e50de36b969e1e0ac1c61a4dffff"],["/iOS VIPER架构深入实践/index.html","917e2733a212eac9ebc80c7f8463cfac"],["/iOS子类化样式/index.html","8bbbb9ea559a21d7dc8c3af5796a8035"],["/iOS自动化布局编程/index.html","2e181442f99a6bc6f491199a48ea5308"],["/iOS自定义转场(By Swift)/index.html","f9e7fbaf418ff8ee1d3bbd12ba2bea7c"],["/iOS项目架构：使用VIPER/index.html","8b7b385d8eee2901bf103004478349fa"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2cad7cfa3036fcbdd1c48d1e3e782e63"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bfd4e72f8a2520e192d2c002d61b46db"],["/page/3/index.html","5218ca3efdff81a71aebdba6495223cb"],["/page/4/index.html","10755bebb367f072968da11d80bbea4d"],["/page/5/index.html","0f0555e582b6a82fed8fe982615b2d90"],["/page/6/index.html","961e2a8aa75f11c6fb874a77f4d65cd3"],["/schedule/index.html","a83d83430fccbfdea4358b51db98d00b"],["/sw-register.js","b44c39e0e8a3f588c05813dd715c3c0a"],["/tags/Collection/index.html","d946e97f7e6556e41a8a12e0b4c638ee"],["/tags/Collections/index.html","2210428abb89e1032a2b1f32f66f6b18"],["/tags/Dependency-Injection/index.html","f347f7a14d27856f0d07fce647f74d2d"],["/tags/Modules-And-Hooks/index.html","91ec1b2b9d9c0b3f3df0fc656d2525ae"],["/tags/Server/index.html","93eaf2eb372bf94d06e8a524b397b965"],["/tags/Swift-Package-Manager/index.html","cbf92ae72b5513b58261aaf1d195408f"],["/tags/Swift/index.html","46142e5168739e3c6b1680dcfa11f382"],["/tags/Swift/page/2/index.html","be6dc715e19401c393e9cbdf0e8179bb"],["/tags/Swift/page/3/index.html","74b115843aebbed0458629f1b2d6914b"],["/tags/Swift/page/4/index.html","d3a947771afb149987bcbac81c4287e9"],["/tags/Swift/page/5/index.html","2ddca69a8312115cc2228dfd95808c06"],["/tags/Swift/page/6/index.html","08af6ec513488f50df66a610e5630290"],["/tags/SwiftUI/index.html","7f7fdcdb6f12dbacffce657e20738b52"],["/tags/UICollectionView/index.html","823b36d70811724d46874c1ddc03cdae"],["/tags/UIColor/index.html","ee32347dd8a1b9e9c691510f876996a0"],["/tags/UIImagePickerController/index.html","76620b4be0eaec138256cf0593263e72"],["/tags/UIKit/index.html","38b2a38fa85cdf866bdd72f0a4dedd57"],["/tags/UIKit/page/2/index.html","4961b2e989b5668b3b4d777d4930223d"],["/tags/UIKit/page/3/index.html","d62275c73084791491312fd0ac05d501"],["/tags/UIKit/page/4/index.html","7dd3b2e360042e7df8fa239ee1a4bd71"],["/tags/UIKit/page/5/index.html","ab7fa6e16885b1fb0cacc02145863c0d"],["/tags/UITableView/index.html","9b6105fc681963e4fedb871a91242747"],["/tags/Ubuntu/index.html","778bffa40b73536d63f447857cbeb080"],["/tags/Uniquely-identifying-views/index.html","5ac398d3301d49df6800e8c70acf16a5"],["/tags/VIPER/index.html","369a084133146c3e063705abf8fdad55"],["/tags/VMware/index.html","03fa3c5d703697277f4283259cada8b8"],["/tags/iOS/index.html","6db5ad8292f8b454dc4e3a7f68b9da4d"],["/tags/iOS/page/2/index.html","b3c5ed18ac6df7b0d034c51defe63909"],["/tags/iOS/page/3/index.html","29f10b18455c5e923273709d8b0dc7ce"],["/tags/iOS/page/4/index.html","09b9d61fe17b49b8cfb59a5720cf03b7"],["/tags/iOS/page/5/index.html","bbaa7c26e4a22c163f11ed000eec8a7f"],["/tags/iOS/page/6/index.html","8cbceccd0e3cedc6f75d12d399f03dd8"],["/tags/index.html","3fb7bf45c27873ab134c982dd1c24798"],["/tags/non-optional/index.html","74d81427ee6bd83cbfd82f833a7a0692"],["/tags/optionals/index.html","edfe1e9212bcd79c510bfd2344b9ccd3"],["/tags/transition/index.html","1dcace57c5ae6c84d21c23b0e06c86ab"],["/tags/依赖注入设计模式/index.html","975c74eaa0307997437cd09d0cf17350"],["/tags/初始化模式/index.html","92d865a1b1b5f4229c7ace42188f05c1"],["/tags/单例模式/index.html","c3db83ab7bc651fda8a6344336a4855f"],["/tags/原型设计模式/index.html","a32e07a73140fa88a6d2806335679525"],["/tags/命令设计模式/index.html","e9cc5456dcb4e94851040c6ac304ec93"],["/tags/外观设计模式/index.html","fd30f847767f283702fecaf5c3a64b56"],["/tags/委托设计模式/index.html","53e3fddcc8c561e4025003c5691409d3"],["/tags/子类化样式/index.html","268e77e26ff0ec619868c105201503db"],["/tags/对象池设计模式/index.html","1f0f0215e8f0f6c4e1845ea215a323fe"],["/tags/工厂方法设计模式/index.html","b4637c1d10b341697fcec2f94a426588"],["/tags/工厂模式/index.html","209dec3b91a4eaf970de688f981a710e"],["/tags/工厂设计模式/index.html","eb6fd75c7172cb74a6af8ad592ad3fe9"],["/tags/懒加载模式/index.html","c32d53f5dcfce5cd718bc95c20e2a5ef"],["/tags/抽象工厂设计模式/index.html","79cbabc58900dd1e3415927827d70204"],["/tags/构造函数/index.html","6ccd618d6df649ebf990bcbbbe186670"],["/tags/架构设计/index.html","35cd38aed3a1ea9393d4ceaa2611debd"],["/tags/生成器模式/index.html","c673b4716b992bf60b9a84ac94521e49"],["/tags/用户体验/index.html","2e8e1b64471a0ac32dd9a19013f89725"],["/tags/自动化布局/index.html","4495f1b47716695fdf506f69a5369f21"],["/tags/自定义UIView/index.html","e2f29db1178e4b8c52b1d230684dfab5"],["/tags/自定义转场/index.html","e81b946d35864e0ae207df5bf40a88d1"],["/tags/自适应布局/index.html","70565902aa0d6146b1fe66bd2862a0c9"],["/tags/设计模式/index.html","c9347f5b6ee4c24f4afd38f704e70282"],["/tags/设计模式/page/2/index.html","cde7ce7c719814b1f3c9dbbfc7320112"],["/tags/设计模式/page/3/index.html","c646e3c407939c0512467e5ad9482053"],["/tags/迭代器设计模式/index.html","a3ae1ddc9cc21c215609e5d459a99c1e"],["/tags/适配器设计模式/index.html","9e942b2437acbf9b5740e0b2053073df"],["/tags/静态工厂方法/index.html","c9c105a8938520613a357731aac0a66c"],["/产品开发的幕后花絮/index.html","c478accaeb48afb39f34084fb9a64b30"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f8c71c7a96598ab5ac6940c9faef708b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8d1cfc15a715d8758e056b6d8461ffff"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4ac3f22a2b240dddb589700d8a9a0e99"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","47bd61082141ca4ceb4ac131772b037d"],["/在Swift中创建自定义集合/index.html","ef1cceed3d54fbed7d641e48da316cd3"],["/在Swift中处理非可选选项/index.html","6aa87060c95834eb9faaf6fa441cc1ec"],["/在Swift中重构单例模式用法/index.html","317c004ca0fcd134e5340368d0d8a5c7"],["/如何为VIPER编写服务？/index.html","eb690c396ad304d7cc2cb0606c8d3234"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b1e7f31717f6881c6d359002def3e9cd"],["/掌握VIPER架构/index.html","9b5aef660c45053a799eb375d827f104"],["/揭秘 WordPress Hook 系统/index.html","2e5afae81b5a2a5598ee12ea947df47a"],["/比较工厂设计模式/index.html","b86226ee7731d15ecf86d53e41b1c5eb"],["/深入研究Swift框架/index.html","8d8dd96a58f121acd245fd18f9b27ac1"],["/适用于iOS开发人员的VIPER最佳实践/index.html","8f77d0534e9e6bb94e0b2569fd2fba33"],["/选择Swift而不是Objective-C的5个理由/index.html","57164476cc91edacb37204bb710e578b"]];
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
