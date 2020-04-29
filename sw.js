/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","e2339f80939442eab4f29b205a467ea8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","bdf89f4fad8a1f10ff881665031e1f57"],["/Swift Lazy属性初始化/index.html","02ddff444bee2490e9825180c699fcf2"],["/Swift UICollectionView使用指南/index.html","0fd50e1b5e0fbb52216b74f98f2dbcd0"],["/Swift 唯一识别的视图/index.html","52a456ab42f4859b9d98f8cbabc8d167"],["/Swift 如何学习现代UIKit？/index.html","b75939356223c4378e33d5f3a4f8c49b"],["/Swift 选择和播放视频/index.html","49325f0aefd744ce5433356c06d49e5c"],["/Swift中UIColor最佳实践/index.html","df0553dd286134cfdf0e390226217b5b"],["/Swift中快速简单的工厂设计模式/index.html","36be6b76063f908fc6499eacac2e397e"],["/Swift中构造函数与静态工厂方法的比较/index.html","53c41f191cdc422aaeb7c8796d1a3565"],["/Swift中的UITableView教程/index.html","ec1b4c5e683c7bbdf965c2ae99b85dfc"],["/Swift中的懒加载模式/index.html","9ac7e40d182f8e183999643310a5b275"],["/Swift中的模块和挂钩/index.html","6b1a944c7965c86ba5449469a5388167"],["/Swift使用布局锚点添加约束/index.html","2ea58b971ed460873c1f3ba0823a1e09"],["/Swift依赖注入设计模式/index.html","5e0a3de09ef298feb8a3f8ff2db4f2c2"],["/Swift关于Dependency Injection (DI)/index.html","e76291d0c4c377c1c408a99a848ec0f7"],["/Swift初始化模式/index.html","2b5d95d64683ebfcbea45167a552a642"],["/Swift单例模式/index.html","8e1fd81e52317173d09b6d055c661215"],["/Swift原型设计模式/index.html","1c9364e930e06cf5a189f568cf9ab71a"],["/Swift命令设计模式/index.html","6d3a53c5f3d57d6bf261ea96365c6a9f"],["/Swift外观设计模式/index.html","07f8da2604eef85c01a2a0d8053430eb"],["/Swift委托设计模式/index.html","0a02e310382bf393c2c2feba57a9926e"],["/Swift对象池设计模式/index.html","064424f5be8aa15643f0119ebc34c2d5"],["/Swift工厂方法设计模式/index.html","b44d0d74f399c01b45b34dc0722818c7"],["/Swift带闭包的懒惰初始化/index.html","e089522ee4aeee1824c94f79ef39cfc4"],["/Swift抽象工厂设计模式/index.html","567ff547b49a3504126372a0d951f64d"],["/Swift掌握iOS自动布局锚点/index.html","ed7fd0b4adc641571506b82d5fefd5c9"],["/Swift支持旋转的自适应单元格/index.html","9be672763ed02db19937a73962572b2f"],["/Swift生成器模式/index.html","7a46e26a2f98d87a27db5cec08459337"],["/Swift结合Xib文件自定义UIView/index.html","8182e593811d7f84990d440e6787cc00"],["/Swift迭代器设计模式/index.html","a758fc5613b9a907ffb0f62f63d463d0"],["/Swift适配器设计模式/index.html","8e74dc9f86ae87849ffcc51a34aa606b"],["/Swift静态工厂设计模式/index.html","d2592b3bf2905204dc69659e953b247e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","790b59be6761418f75b36223f2d5582f"],["/UICollectionView data source and delegates/index.html","d7847a4c6e3a233d50f4bed5ef1f9bde"],["/UIKit初始化模式/index.html","ff15edbdb8f1986d40fdfb5f587b2045"],["/Ubuntu18.04替换国内源/index.html","ae830c9664b781359a58ba313f83c960"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","b214baf34ae01a64da28d4c06e8d3ebd"],["/about/index.html","26d812d3e550533cb0b603f2852371f2"],["/archives/2020/04/index.html","d3e8bca8786a48fe856db8e5d2add894"],["/archives/2020/04/page/2/index.html","5d6ce9d29ad7da1da70f41f48cfa48ac"],["/archives/2020/04/page/3/index.html","58c508a621f9431a2fb06af170a284e3"],["/archives/2020/04/page/4/index.html","dcf3fc46d2e5e9aa04101d1bdd3da9fa"],["/archives/2020/04/page/5/index.html","ac5164261a2f1c145c355ee76821ab13"],["/archives/2020/04/page/6/index.html","7971e1affd1866217dc544ab21716d71"],["/archives/2020/index.html","e8faa5330581014cf945e4084bb3b293"],["/archives/2020/page/2/index.html","6d3162635be00a08cd0161324929ae5b"],["/archives/2020/page/3/index.html","63caa484692eb7cf239448edfd93f938"],["/archives/2020/page/4/index.html","3ed7601320cedb6af9c470d6fbedd53a"],["/archives/2020/page/5/index.html","ba0dee09bd8e21e512acc03855677f89"],["/archives/2020/page/6/index.html","7599b89d175b8f48d02f78136b6d9738"],["/archives/index.html","4f73762853297b65fdb454e5074f4a7f"],["/archives/page/2/index.html","efb2cb825ebcbf659cc9e0c4e2fe0a12"],["/archives/page/3/index.html","713e9fc477b3d8e4d768fcdc3695292d"],["/archives/page/4/index.html","6b3ad1ea9c6db4e98589ae45c3113cdd"],["/archives/page/5/index.html","cc24ebac9924e3ef09aee21b7320606f"],["/archives/page/6/index.html","d025948ae6858235ebb905804779e7c4"],["/categories/Hexo/index.html","bb67577e013187ae66f59b8331a0a90f"],["/categories/Server/index.html","8b7f04269a2fbe67064e9f01ecf7f821"],["/categories/Swift/index.html","acb0a2d3d9a2ee0365e883e6783d22c0"],["/categories/Swift/page/2/index.html","a3593ec4b0a6e931be88ab5baf40ba66"],["/categories/Swift/page/3/index.html","e11c1fb4a3db77a754dbccde0597edb0"],["/categories/Swift/page/4/index.html","a001c5255a18eaa047e3dc7210a94687"],["/categories/Swift/page/5/index.html","6b5c600e9c2c73e33c5c4264179038a3"],["/categories/Swift5-2/index.html","76e912a6eab716cdc2061acb62b3fcfa"],["/categories/SwiftUI/index.html","abc172c805cbc5c7d98e0a5679176e6e"],["/categories/UICollectionView/index.html","fff0b5769335f240df8cd8264f3f7fdb"],["/categories/UIImagePickerController/index.html","26cc4f05f093922eee79cd14eb035f5a"],["/categories/UIKit/index.html","22227f74408e9743e77350b50d6e0df0"],["/categories/UIKit/page/2/index.html","fa85c387ed9be813489550c07c21ff18"],["/categories/UIKit/page/3/index.html","18ee49a0a4681ae0a523e7a9f3d41086"],["/categories/UIKit/page/4/index.html","8d94773e5cb14e13c06fe01de640466c"],["/categories/UIKit/page/5/index.html","eedc5306a090d04d0ef90ce955a506dd"],["/categories/UITableView/index.html","44a54930ca935253ae246564cb8a2d9c"],["/categories/Ubuntu18-04/index.html","3b73abbe837be052d8d09b44564d74aa"],["/categories/Ubuntu软件源/index.html","294e0e92b43da18f44bcf76526a86f00"],["/categories/Uniquely-identifying-views/index.html","adc084bac48143b5edeae8cb50c4a926"],["/categories/VIPER/index.html","d948d8270010e4b0e6da1b617b51b774"],["/categories/Vapor4-0/index.html","554205f998c84e00f03abaa75abb37fa"],["/categories/iOS/index.html","75223f5560c4dad5c10ebb22dc398c61"],["/categories/iOS/page/2/index.html","1062b9b55b3f82d3227b0ccdff471a41"],["/categories/iOS/page/3/index.html","d5affae335486276db35935b3406c948"],["/categories/iOS/page/4/index.html","966ed71c61cff702722db9ef52b2ab62"],["/categories/iOS/page/5/index.html","3e728ecddb330ecf0c5de4c09afee4d4"],["/categories/index.html","6fd3ebb134441cdc27161f50e3898258"],["/categories/子类化样式/index.html","a910430930a36c22121531469c367a52"],["/categories/架构设计/index.html","ba5dfcf9f574cf0b86434371d5c3b19e"],["/categories/用户体验/index.html","2d5cdf770c2fa079fae02e16c2c0ad9d"],["/categories/设计模式/index.html","78fcf86ab53b975e95d8617fee7ece31"],["/categories/设计模式/page/2/index.html","24080ba6a08c3141ef63267e49a7833b"],["/categories/设计模式/page/3/index.html","cda1e790ba94fe89cc6f643d51682a2e"],["/css/main.css","b411c1997125d2ea35ec65c094afe837"],["/hello-world/index.html","8ec0313f71ddaa571ce6b52aaa1a67ec"],["/iOS VIPER架构深入实践/index.html","de8f4063ac26e6c327873ffaeb3eaece"],["/iOS子类化样式/index.html","25a215036e2a06f72bbaa8c9031a0f81"],["/iOS自动化布局编程/index.html","a5df24f7e45344db78972807d523b151"],["/iOS自定义转场(By Swift)/index.html","2b9802afea1edddc7073497e83d9a4bc"],["/iOS项目架构：使用VIPER/index.html","a2354812cb24c20c09de6cb35cd2f2e5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","c739b3ae7e87b606a061835572cb4099"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5169afc4f1956a1f68e21d58ee4f844f"],["/page/3/index.html","e0821167107d99bc6b4b003c632647ec"],["/page/4/index.html","49cb0e8f28961783cfc7f8b5983c1be1"],["/page/5/index.html","449146d85c654c9448e6cd0f034bc5f9"],["/page/6/index.html","53f54d3625fc37b4ed2c3e8f8862f638"],["/schedule/index.html","05b755bb86822d4fcc16bbfce552e7d0"],["/sw-register.js","b0e1ab04265ce5b38873f4341712d283"],["/tags/Collection/index.html","a428dd6fb9bf48ae0c0368152a845cd1"],["/tags/Collections/index.html","9ed10fe30d3e5da412eb2e3bb83be654"],["/tags/Dependency-Injection/index.html","eeff45931f3007613bdb796ca7b504c8"],["/tags/Modules-And-Hooks/index.html","ef9eae29116d4184ae95b13267eb08e1"],["/tags/Server/index.html","b4a0d94c715223713e62d9d3a27a4285"],["/tags/Swift/index.html","2c85d4605292e131832ad61b41cecfe3"],["/tags/Swift/page/2/index.html","ecaa7a396b458c815e71405af292e9b9"],["/tags/Swift/page/3/index.html","afd32bf4e900c6c5b911520340ab7daf"],["/tags/Swift/page/4/index.html","3c6198270298f3b0aa042635dc9afd52"],["/tags/Swift/page/5/index.html","25109debeffdd0749d2df55ddab0c536"],["/tags/Swift/page/6/index.html","3fb79d486255347982d42eb10de5c898"],["/tags/SwiftUI/index.html","adb6da48498f5e30597dcc6d232880e7"],["/tags/UICollectionView/index.html","93e440663d153c9c487fb33a63ecd46d"],["/tags/UIColor/index.html","454893f4398e06ceb830446a6e7a46fc"],["/tags/UIImagePickerController/index.html","87c7b6ea261fa184e1b0a24b979e7161"],["/tags/UIKit/index.html","25c8b828f665364a8a2192f3889071da"],["/tags/UIKit/page/2/index.html","228fc39f9cbbd23554fbc343a047ed4c"],["/tags/UIKit/page/3/index.html","b95b7b8af5003a3da7eda2f8a3856e26"],["/tags/UIKit/page/4/index.html","63f3804b1be98f352cc9b1869e5391e6"],["/tags/UIKit/page/5/index.html","342dc24332cdaede3a4dff37cb16e502"],["/tags/UITableView/index.html","aedf945c1956cea3c23b20304e124ae5"],["/tags/Ubuntu/index.html","9acb4b158eda0298217946e31923537c"],["/tags/Uniquely-identifying-views/index.html","08ebc2a8af1e0f14c28ee0449c1f0e97"],["/tags/VIPER/index.html","98b6a9fa445344537dc2e6f2fbd0f062"],["/tags/VMware/index.html","865b8cc18da24033be3338ebe80af45c"],["/tags/iOS/index.html","22819f71af52ee21f1543e52ce95ec2d"],["/tags/iOS/page/2/index.html","cb706e2631dc3a90d053d0e7ac461029"],["/tags/iOS/page/3/index.html","c67164ff594e7613415d1d015c4bb472"],["/tags/iOS/page/4/index.html","cbf3e95e9487fc02b014d28c6851751e"],["/tags/iOS/page/5/index.html","fcf8de287c5edd83695892479391171b"],["/tags/index.html","a5380c8a0c822fbc42c52501f39e2c97"],["/tags/non-optional/index.html","8edac20f4f2ed5d5eddd78898a8a74d1"],["/tags/optionals/index.html","b818906b2cd51d7b5a693a5103066e9f"],["/tags/transition/index.html","f883d99f1a94da0d278332f070b1b883"],["/tags/依赖注入设计模式/index.html","faa94f7049a5d63ef327a4094f1cc289"],["/tags/初始化模式/index.html","51fdc291da93c7b891fc1e7998f646fa"],["/tags/单例模式/index.html","3a7a1c8529cf92c36d73eec6aef1cdc6"],["/tags/原型设计模式/index.html","4ecd050cdf5a28b3bf261732f1c7176d"],["/tags/命令设计模式/index.html","71d56cc39166e951383c84e797e974cb"],["/tags/外观设计模式/index.html","7091afdd63879ab5569c56342a183078"],["/tags/委托设计模式/index.html","966717938e85b348a679a3614f5fd352"],["/tags/子类化样式/index.html","4b7400fdf87573f9388a127549d97445"],["/tags/对象池设计模式/index.html","23f8cf4d59b22902729ed84ec4f53a4c"],["/tags/工厂方法设计模式/index.html","e5e020cbe8b86211730fb987b08db4eb"],["/tags/工厂模式/index.html","929c94f9006384f7048d4f7a03a4a99f"],["/tags/工厂设计模式/index.html","12f6186ddacb5a30005dd437bb83388e"],["/tags/懒加载模式/index.html","9063cc4fd1731825c15e1b9eb4a49623"],["/tags/抽象工厂设计模式/index.html","4a8b77f57b8c8bac2d44ad463aa6709b"],["/tags/构造函数/index.html","12dc2763e30f530a2e1e61cdb97db51d"],["/tags/架构设计/index.html","bfa2f6a8e2cc1d746d654aa3f26511ef"],["/tags/生成器模式/index.html","2a0b49324383cdbefcf5abbac7b912ce"],["/tags/用户体验/index.html","25b3b7370eff4b63ca844241767f4149"],["/tags/自动化布局/index.html","2ea51e50087260d0b82d6ff0716ed3d0"],["/tags/自定义UIView/index.html","75cc4c62b62eb9a7412f0ed271373686"],["/tags/自定义转场/index.html","52b98d4a6a528156133d5c5c4707ba7f"],["/tags/自适应布局/index.html","548c0f3b81e8b769bcd3e42bfa751491"],["/tags/设计模式/index.html","1cbec831cf7d35442076e59569b5e538"],["/tags/设计模式/page/2/index.html","b8f7e03261f653fb0ab1b41b0dfd3699"],["/tags/设计模式/page/3/index.html","4691740b48fc876f233efb831159be55"],["/tags/迭代器设计模式/index.html","a594bf9f1d2eb50aa8e2b2ed0e6b0883"],["/tags/适配器设计模式/index.html","c9f981ef17d8c6877a8e014353958c42"],["/tags/静态工厂方法/index.html","26e5d510d40affc02aabc8572d7c0c0a"],["/产品开发的幕后花絮/index.html","84c16911be92325324022b98424b03ac"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","1593ec0ba9eaa2f27b44bc135774b53d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9f9fe5024d2ecf05db351bf3f51f9591"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3cafaaedc8fd58991f0bef81edc88f85"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ba8220f2e9393de56fe6d33b4336a129"],["/在Swift中创建自定义集合/index.html","2b5fe79380134e710e7444da1e185a8f"],["/在Swift中处理非可选选项/index.html","9bf5bcee0b6e447047bb0ea5aa3736e9"],["/在Swift中重构单例模式用法/index.html","81a0369e89d583e94d2c3f2df5164c6b"],["/揭秘 WordPress Hook 系统/index.html","6bde7b51cd07f31a27e17d9739da95db"],["/比较工厂设计模式/index.html","9eed782859da439f54bd8f99d154a589"],["/适用于iOS开发人员的VIPER最佳实践/index.html","28ddb9da9ef543b4386b92a215a275f2"]];
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
