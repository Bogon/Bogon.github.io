/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","3f888705e180551aa5f1ecd0ac43821e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","40f8e229155c73ae7b51f688d757fdbf"],["/Swift Lazy属性初始化/index.html","3bf0a34798157007f8eadd4e3df508d0"],["/Swift UICollectionView使用指南/index.html","438f765f401e2af546cadf4268550691"],["/Swift 唯一识别的视图/index.html","8fb894914289add1d6da93b0da85a092"],["/Swift 如何学习现代UIKit？/index.html","f6b68ba745641002956d1fbc81e40326"],["/Swift 选择和播放视频/index.html","c0e035d140fdaf8756a897063df41dd1"],["/Swift中UIColor最佳实践/index.html","9fbbae9529954217b3ebf29fb16065ee"],["/Swift中快速简单的工厂设计模式/index.html","8fcd9f94e659387aba6396237c544824"],["/Swift中构造函数与静态工厂方法的比较/index.html","f8fbfefcda64451b9a0583ab376c71e3"],["/Swift中的UITableView教程/index.html","a4fb588afccc287e05d9f221f2b1238b"],["/Swift中的懒加载模式/index.html","8d6dddf8e0c44cc24c8dc87793165ef9"],["/Swift中的模块和挂钩/index.html","c60668283266a843be996e2f3869614c"],["/Swift使用布局锚点添加约束/index.html","52b5c886a17060a75730b4a1270a1a97"],["/Swift依赖注入设计模式/index.html","dbdf91d55f6e67365a5ca182380163c2"],["/Swift关于Dependency Injection (DI)/index.html","ac9836c5b1c51f318c23452f9e62337e"],["/Swift初始化模式/index.html","4e24143ed288f08e3bbf2d360d63d357"],["/Swift单例模式/index.html","a6668072a940d79afc0e345250e2db29"],["/Swift原型设计模式/index.html","54a4372a7deef13280211b0f1a8d81fc"],["/Swift命令设计模式/index.html","cc0ad11cc052cee55c07021bedc3528e"],["/Swift外观设计模式/index.html","e3d695cf980fb33171e3ce321a3739d1"],["/Swift委托设计模式/index.html","db3b3cc31490ef844d8c60ef6feee536"],["/Swift对象池设计模式/index.html","995ac1ddef1a54207389eb7e543f71ed"],["/Swift工厂方法设计模式/index.html","7bd901154f61aa851238761ce2bb6106"],["/Swift带闭包的懒惰初始化/index.html","5490c71d146f64ad58a3a7a56ac0b45c"],["/Swift抽象工厂设计模式/index.html","e0ba76227bd1e26deb52e4e6237056aa"],["/Swift掌握iOS自动布局锚点/index.html","112da026b8b3f0d3412b2c91f0892785"],["/Swift支持旋转的自适应单元格/index.html","466be86670d04c6ef269697d1802849c"],["/Swift生成器模式/index.html","4d1ec04e9e7fede178707db913dc8e89"],["/Swift结合Xib文件自定义UIView/index.html","a0847db5d8c7a6ad05c456aea4c02ba5"],["/Swift迭代器设计模式/index.html","d354c2bff1daea4f591bb544ca04c213"],["/Swift适配器设计模式/index.html","d282c2f85d71f5ae84c4f6eabdd44314"],["/Swift静态工厂设计模式/index.html","9e431c35a55626c9be7ba659a8d3f70a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b1eb802a33ea8c67acb0778fdc67def1"],["/UICollectionView data source and delegates/index.html","d9fe8a54791c61613b1fcf8bdbc0e38b"],["/UIKit初始化模式/index.html","36ab6294dcab24afe7fd6107e0610677"],["/Ubuntu18.04替换国内源/index.html","7be3465a803feedcbd10b63634da3450"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","75aaa2fb755b0c066f0b0e4b7cf4f70f"],["/about/index.html","a8aacdbe36aad8b05cde1e2933d7ac6a"],["/archives/2020/04/index.html","b43de85908929d6cd2c0c86ffe2d6515"],["/archives/2020/04/page/2/index.html","a1230d696fbfde7f533319f771e27501"],["/archives/2020/04/page/3/index.html","bd75d14c2358296c92e01a71c9dcf9f3"],["/archives/2020/04/page/4/index.html","7eb2633259257c2c857947ff43da0c48"],["/archives/2020/04/page/5/index.html","4dec5588eb7820e0e1cc0f9df6b712a7"],["/archives/2020/04/page/6/index.html","33f621f85b7839253d2047bf25810725"],["/archives/2020/index.html","54acac8a2c726735b57fd2e8c308e909"],["/archives/2020/page/2/index.html","f3e850aec0bbca2fb938caa846349c1c"],["/archives/2020/page/3/index.html","238bb5e5a846a57588473bd908241382"],["/archives/2020/page/4/index.html","bba8e03fff6b8b59395d41793c516dba"],["/archives/2020/page/5/index.html","3727644ecd73fe0ebe224df8de4a5eed"],["/archives/2020/page/6/index.html","8ada23b3437582e967eceb9d0841f2c6"],["/archives/index.html","d2d570240068cf6786b96f3672eb5fd5"],["/archives/page/2/index.html","b2370394d5f60d55f1b26a202dc121bf"],["/archives/page/3/index.html","2a2a31587ea79edb1048d3cb380847f3"],["/archives/page/4/index.html","f1a38b65085b46f223f77e6a9427bd42"],["/archives/page/5/index.html","b5377626b226cdfef8cf0fb47b6d11e3"],["/archives/page/6/index.html","4c8c3796ee4e20b7588846fbb71971ec"],["/categories/Hexo/index.html","fe9c6311954e867c2bd46ed94f93e808"],["/categories/Server/index.html","eb95b65c3f2cab0f2b11729f6efb4fbb"],["/categories/Swift/index.html","2d779785f1d2b1cc1c9e661c1aa7ea73"],["/categories/Swift/page/2/index.html","482563b66542057740ea3e149623f7d1"],["/categories/Swift/page/3/index.html","ef4bb0a95076e909720a26cf968aab1d"],["/categories/Swift/page/4/index.html","1b36d6fe521e8fef0d0a21c6b036c7ed"],["/categories/Swift/page/5/index.html","fd7ef6d753314c1673882bbc4f824362"],["/categories/Swift/page/6/index.html","f393d18f989ef2ff53753aeb814ef2ba"],["/categories/Swift5-2/index.html","7cb6c99a7f6b7fdc8f7a8231e7bf6e04"],["/categories/SwiftUI/index.html","17ff5974071b9b0147e178a43873d73c"],["/categories/UICollectionView/index.html","7702a0dba41e208f4d518775b4380289"],["/categories/UIImagePickerController/index.html","cd9b97e42cfdf4e6d13b57ba06aaa932"],["/categories/UIKit/index.html","606675aa404da272605a57dd9a0c433c"],["/categories/UIKit/page/2/index.html","6b191eee9dabea7e9e08829c4863f946"],["/categories/UIKit/page/3/index.html","3a35e8c790619c7424856f19fd696ec5"],["/categories/UIKit/page/4/index.html","c68fe56b0dc1e5777ae8bd777382ed63"],["/categories/UIKit/page/5/index.html","e58c639b810565d945f609b5156d97c0"],["/categories/UITableView/index.html","03be72b8789850ef77ad2a80b28aa86c"],["/categories/Ubuntu18-04/index.html","aaf9c672bc0db7a5d95bf25350c79cc9"],["/categories/Ubuntu软件源/index.html","cde53be6a39d7cac5458840a58c9c105"],["/categories/Uniquely-identifying-views/index.html","f440aee4f04990c35911ec69ad174ddc"],["/categories/VIPER/index.html","bed894e567d1b2f44baf7e23f9e1fc7d"],["/categories/Vapor4-0/index.html","6397dfa95ec76f381e552e9c9c455a05"],["/categories/iOS/index.html","a37b916b9979cf0b3b4529535c4e9c61"],["/categories/iOS/page/2/index.html","651484d00f1e77e56e333fd04d23ceeb"],["/categories/iOS/page/3/index.html","8c3666f1b741773387390f70ee13d044"],["/categories/iOS/page/4/index.html","d1f3e30b77efe121d7058b1c75edc122"],["/categories/iOS/page/5/index.html","7ea570f80231ff5094f8b4d0425579bf"],["/categories/iOS/page/6/index.html","36928222d2de1a84b55ce6419151464e"],["/categories/index.html","e3042c84eb765a9cd76511eea00e1f8d"],["/categories/子类化样式/index.html","61bca78d5d2b72a076fb578f971a2b14"],["/categories/架构设计/index.html","98ed40bb232934da4e08374df6db8b55"],["/categories/用户体验/index.html","5a083593e8a3b54b4e16ee416f017972"],["/categories/设计模式/index.html","340a1238e23171755daac929ea305cf6"],["/categories/设计模式/page/2/index.html","f0fc26a9e51a46b4463199bb8a588e03"],["/categories/设计模式/page/3/index.html","fa2566b015033f0139777bebaacf5ba3"],["/css/main.css","acff98d586451dc194de0b360ab50e94"],["/hello-world/index.html","48b11ad57031f46f1a72537a766b807f"],["/iOS VIPER架构深入实践/index.html","45ed6c372b7da91bf93cab9902561188"],["/iOS子类化样式/index.html","6d291dbab2da7cde40af4854dcdffc5e"],["/iOS自动化布局编程/index.html","ddce375c1f1b5a1aa720a6f18f757195"],["/iOS自定义转场(By Swift)/index.html","4697a93dcb3b4ebf63b67fbfd8e4f9a8"],["/iOS项目架构：使用VIPER/index.html","b2dd16e72684020e7e557b2b0328dbf6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","31c1af207f536c06cc78f4aa1a746eb8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","2ad8ea52733cdf89926d8fecc83ca0f0"],["/page/3/index.html","2699845b1c863f425a2ff3423984b9af"],["/page/4/index.html","3a25ac31003e3a8b6ff58306a57b71f8"],["/page/5/index.html","dbcfc5c46851fc5c40e6ace40f8f1a0a"],["/page/6/index.html","36c78060de6fd603c398f3ef7af4932e"],["/schedule/index.html","b9e3c281b93fc2051bf78b0dccb3009b"],["/sw-register.js","f5b474f346c85c5dbca50cb45229b3fe"],["/tags/Collection/index.html","c5188fab7da61d0e0f662ad416416edf"],["/tags/Collections/index.html","b4911a66d420c7983c027a9d3b578900"],["/tags/Dependency-Injection/index.html","e2d37af90fef7b283a83787f6820679d"],["/tags/Modules-And-Hooks/index.html","ce870985459eb59108cc312bb687aaa1"],["/tags/Server/index.html","c24335663cd5b926c9af90e214c43b5a"],["/tags/Swift-Package-Manager/index.html","8560a6337d418408b4d7b6b1a112e783"],["/tags/Swift/index.html","11b1b1d1f87026a52b1436ac23548531"],["/tags/Swift/page/2/index.html","9452337010745ca308247e28319457ff"],["/tags/Swift/page/3/index.html","8b7900c67eb5d9023173336ba3edf74c"],["/tags/Swift/page/4/index.html","07f233fddcb815189ebd3a2e00755e0a"],["/tags/Swift/page/5/index.html","e7291f4257b434507b33ac5051391355"],["/tags/Swift/page/6/index.html","93448e3e10d59a9413ee396fb1875be0"],["/tags/SwiftUI/index.html","a1257791442405919d258af1f9741e70"],["/tags/UICollectionView/index.html","ccbdc128a05713ebb7d0c5f8ffcc7bf1"],["/tags/UIColor/index.html","beb32621e7d730c27dd70a943155e583"],["/tags/UIImagePickerController/index.html","9d74b790a096a3ec38db702523810a0a"],["/tags/UIKit/index.html","2771dae5da3eb6b3e8471ad22f7e4d13"],["/tags/UIKit/page/2/index.html","20a4773eac9219fc4399aa7ba8669ef0"],["/tags/UIKit/page/3/index.html","0bbdab54267b52ad7949734a10dca3c8"],["/tags/UIKit/page/4/index.html","e843fd0f2803d0e9748196736195155d"],["/tags/UIKit/page/5/index.html","9f83d81a3aec215d8bae3423a7d8ffcc"],["/tags/UITableView/index.html","0872a076e1f148c73bb53aa5f4041ede"],["/tags/Ubuntu/index.html","5c51bd5c8762ece2c45b5a89632fac65"],["/tags/Uniquely-identifying-views/index.html","6a849bfda3420342acc92f6a17d53e6d"],["/tags/VIPER/index.html","07fe0aaa035342a33340c69591cd6ae6"],["/tags/VMware/index.html","a007cfe699f2a0877c1cbe72ecf72011"],["/tags/iOS/index.html","c24886e1d7f33b424b872059ad7bda96"],["/tags/iOS/page/2/index.html","fc00aba5134558900b925b07a7957ff1"],["/tags/iOS/page/3/index.html","34cd40e141418dffb3bd8d61c7c9e6bf"],["/tags/iOS/page/4/index.html","74d9854538f355db076049b72e619b5a"],["/tags/iOS/page/5/index.html","b2f9b2f987b8251ea7f970ea6f7155d4"],["/tags/iOS/page/6/index.html","9df85c81711e0c50846d7026a7678fa1"],["/tags/index.html","902e1f8ab73e3df8aa7b484198df5dfc"],["/tags/non-optional/index.html","4623d1aa27bf915f20891c83defe4e20"],["/tags/optionals/index.html","574bdec0d3705bd51f16d05148a8eb3f"],["/tags/transition/index.html","6f12921898de7bab4fbcf53d90e6a0fb"],["/tags/依赖注入设计模式/index.html","0250cd6cd6a67da1c1b9a4d5c1bbba73"],["/tags/初始化模式/index.html","ef889ad6c42cf33a63e062fc20d86c1b"],["/tags/单例模式/index.html","44c980cb9821874fb91706f107cbca68"],["/tags/原型设计模式/index.html","de052f75e271389665bff4a6799ab9c2"],["/tags/命令设计模式/index.html","e89b590f1ea31379a4a5a6b62f4c52b1"],["/tags/外观设计模式/index.html","578d59eb9820e9dad2d20cb8b40beca5"],["/tags/委托设计模式/index.html","53bbd6314c52fec9dd5cef8fb07c7277"],["/tags/子类化样式/index.html","ba3f1bb073360a2168065338399858fc"],["/tags/对象池设计模式/index.html","3ff339d60e3e2ec03573bd6b0e1f7bf8"],["/tags/工厂方法设计模式/index.html","cdb4cd10f79007daabf8cf989a8b4d8b"],["/tags/工厂模式/index.html","2dd89d9d311d60bac6396b36201d6d40"],["/tags/工厂设计模式/index.html","858a502681e5cb286067f9092d740219"],["/tags/懒加载模式/index.html","840cc2dcb177169fa7be680095ad4d94"],["/tags/抽象工厂设计模式/index.html","56ce70715b5e81ac83ca50a28b84a45d"],["/tags/构造函数/index.html","e62addad0cdbcfd01a780211a25bb6f0"],["/tags/架构设计/index.html","d1709e9cdcd8ba45c2617202e4b625b7"],["/tags/生成器模式/index.html","35035ccd25a331ddd1f5804166c63f58"],["/tags/用户体验/index.html","45c4df379f4fff1f9c38d6a48b4b23c9"],["/tags/自动化布局/index.html","8fdc844eebd95349f6e7512dcf958b46"],["/tags/自定义UIView/index.html","0ccaddd9a81e47368141170498bedeef"],["/tags/自定义转场/index.html","6134a235d42845c22a148ec4193f63e1"],["/tags/自适应布局/index.html","a779f924cd92d39e48a5684af32da43a"],["/tags/设计模式/index.html","f7df39a9c4203964632d973a6cb762fc"],["/tags/设计模式/page/2/index.html","5776327465a1ccb68cd13211888a7f43"],["/tags/设计模式/page/3/index.html","c9049325cc5211af41a9e6f7c4d2fc53"],["/tags/迭代器设计模式/index.html","1d18768e564efaf62d0bf9da1172bdae"],["/tags/适配器设计模式/index.html","c27bd6c47a4efc751689e58d08c16738"],["/tags/静态工厂方法/index.html","e83c39db9af8581e12294d5cab7ea5c6"],["/产品开发的幕后花絮/index.html","e10241e0198e6611d903c85c7108ebfd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","262af8c47ec54c9cd4bd7f8ee8cd6bb5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","13257fa95368432c6733e914121e1b3c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","0ae974bf3c33de15ad29d6aa530087d8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","7044766db249949d54b72c1572273e85"],["/在Swift中创建自定义集合/index.html","420e05f39640e6d168178f74c48739e8"],["/在Swift中处理非可选选项/index.html","b81653004cc5a856f4db5d361615e95d"],["/在Swift中重构单例模式用法/index.html","1d01fea668739e693c063a6ca8ef2524"],["/如何为VIPER编写服务？/index.html","0764d09ff91c427213684acf269bc750"],["/如何使用VIPER构建SwiftUI Apps？/index.html","734ead085f9c5ce8c71d223566290640"],["/掌握VIPER架构/index.html","405771d9195040fdb1232cd87bbad6e0"],["/揭秘 WordPress Hook 系统/index.html","dc4c24f8dcf9bb97945dfa78fe3829fb"],["/比较工厂设计模式/index.html","83b65bcef1d17b292725ef1ef1435baa"],["/深入研究Swift框架/index.html","ab071bb1ee2ee4de4d87306a4f8b90db"],["/适用于iOS开发人员的VIPER最佳实践/index.html","badcf75f6848d72d0b4c38978b45d12f"]];
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
