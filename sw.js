/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","cb1782935ef2efa8aa07ecb37b02d5c5"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5c45eec66729e734b7b8a19dab740fe8"],["/Swift Lazy属性初始化/index.html","d148bfb0328c708fd52200d4752de014"],["/Swift UICollectionView使用指南/index.html","6af4dfe0858b8f81c7129b3d25ff8550"],["/Swift 唯一识别的视图/index.html","060d570167ab1ea37608424d3f397b41"],["/Swift 如何学习现代UIKit？/index.html","e88ec75bbff0d4f76650cbd6055be11b"],["/Swift 选择和播放视频/index.html","8514331f4b472414015e56686dbf1f54"],["/Swift中UIColor最佳实践/index.html","9fb923f554619bf0fc04da5fb1c255ca"],["/Swift中快速简单的工厂设计模式/index.html","f7b6e103d8d586dbc080a44a13d9a429"],["/Swift中构造函数与静态工厂方法的比较/index.html","6778550ec5f22c099f918357f846b6ec"],["/Swift中的UITableView教程/index.html","09ea5ff83ba4bd4dd4058f0b914d20bc"],["/Swift中的懒加载模式/index.html","351fe8a6f3939cd76802ef93a05dc51a"],["/Swift中的模块和挂钩/index.html","7f2e247c005b0a93ceb7076425d125a8"],["/Swift使用布局锚点添加约束/index.html","789868cd9e3417132dc1b8100c427899"],["/Swift依赖注入设计模式/index.html","7037a77bfb77438e77ffebe8895993ab"],["/Swift关于Dependency Injection (DI)/index.html","afcab2b9201e0e3cbbb5e122d5075a8e"],["/Swift初始化模式/index.html","b42a0590f325bdb9a6212c333b5ae931"],["/Swift单例模式/index.html","3af4b90ba2067b87ca28c68e140057af"],["/Swift原型设计模式/index.html","98786f04d13d6e87f1c201632c49b71f"],["/Swift命令设计模式/index.html","41eeaeff46fb3f188d612d88bf8e3ea4"],["/Swift外观设计模式/index.html","10d87bb103b5c57b484869e53e9c23ab"],["/Swift委托设计模式/index.html","2e98b1ab6990652cacb45bef2492bdfa"],["/Swift对象池设计模式/index.html","6ebfe507e76e8966d1b120cdb9228b1b"],["/Swift工厂方法设计模式/index.html","0b07618bbb274cb7ba04e9c7c65cbe6a"],["/Swift带闭包的懒惰初始化/index.html","180a548e59d8ad421618bfef90c7f4ed"],["/Swift抽象工厂设计模式/index.html","df6b028ec43bb12644a93d7b3556aad5"],["/Swift掌握iOS自动布局锚点/index.html","186591ca844c74377b42bacb342f44d9"],["/Swift支持旋转的自适应单元格/index.html","55d897a26e657b5e849720dfa589269a"],["/Swift生成器模式/index.html","4fa8ab2a30ef1116bdf05282e2dbefd8"],["/Swift结合Xib文件自定义UIView/index.html","d2c615ba988a77c3b509d4e786acd809"],["/Swift迭代器设计模式/index.html","f2f6cc193424e704a83c9b3b3c18adbe"],["/Swift适配器设计模式/index.html","2b90144951df71de69b8735250ae650e"],["/Swift静态工厂设计模式/index.html","39e7aba925432f874363d6f02ecb1113"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1bc60af4f9c1034e4bddb7fe85d0bdbd"],["/UICollectionView data source and delegates/index.html","90f086abeb0e1044a5fbfa6f28a14293"],["/UIKit初始化模式/index.html","18e42b7de9683f3d4fde02b15b89cd0e"],["/Ubuntu18.04替换国内源/index.html","e75fb0aed5aae2231c31c5c06e7c439c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","97c9fc77cdc9e775564f257a109fbb11"],["/about/index.html","3eb2a36e4fd6e5c878a2bf4c83963dd6"],["/archives/2020/04/index.html","fa8a30ba68479d28b9bff057b603b2ab"],["/archives/2020/04/page/2/index.html","7291b471a8ea60b0ddb821f1629c74aa"],["/archives/2020/04/page/3/index.html","30bda31bd8030e3e22420e8648b7c346"],["/archives/2020/04/page/4/index.html","c8a7e9d78964216fbe30899dd0b5d6c0"],["/archives/2020/04/page/5/index.html","1aeb13cf7148b7ffec09559779fad11f"],["/archives/2020/04/page/6/index.html","76d96993369ec0723d4fe9bec15ce891"],["/archives/2020/index.html","c630cd917fd2522336e81a63b90e7585"],["/archives/2020/page/2/index.html","3c4c06fd1438c256e13148703247ab42"],["/archives/2020/page/3/index.html","ea7ebaff0ca3baa9719d9b4ff3ed6b32"],["/archives/2020/page/4/index.html","cf79874c1aceb600d6a19e40748bae24"],["/archives/2020/page/5/index.html","9f9120037caa8ed17be562c4e361f2db"],["/archives/2020/page/6/index.html","91a0f93e836111c4e0a13353572499b5"],["/archives/index.html","2e504e42b8ededb8211ace099d987108"],["/archives/page/2/index.html","4437fed10f6cbd4508b0aae882c23e34"],["/archives/page/3/index.html","c289119e60518e0f8c6bb33933a7e711"],["/archives/page/4/index.html","8a62766abebe3e561c3b7ea522f10a59"],["/archives/page/5/index.html","2caaaf81fc5c06a9d311ef2beaef19e3"],["/archives/page/6/index.html","267225ac2852d874bfd5012460709c67"],["/categories/Hexo/index.html","c431e966e9183d0dd329e1b8ace8d445"],["/categories/Server/index.html","91925e0accf7778a26fab696fba061e7"],["/categories/Swift/index.html","03b59065b92ccb7def5bdd8ca14a215e"],["/categories/Swift/page/2/index.html","e81e90c4dfba44f2104adef9b006c9d3"],["/categories/Swift/page/3/index.html","e78a63bed7bcfecff85befc25959af04"],["/categories/Swift/page/4/index.html","0d193e448710c59588195424685f68ad"],["/categories/Swift/page/5/index.html","019baf9b94b73adad371741f27c94678"],["/categories/Swift/page/6/index.html","d1a016bc2a15f3442423ddbcff5423d5"],["/categories/Swift5-2/index.html","75a844c751443e9348032e2f64d1bdef"],["/categories/SwiftUI/index.html","0bcd975a9f3e43e362391b70d7acc9c0"],["/categories/UICollectionView/index.html","35792c5ed8dd5e9898205dcd64c62a46"],["/categories/UIImagePickerController/index.html","7f92b2f505ad630d93697c32e1bad2cf"],["/categories/UIKit/index.html","1a5b96727b3a1fa7be79ba60bdaef174"],["/categories/UIKit/page/2/index.html","beb480afb3c4ae702d6e7a1c958482f8"],["/categories/UIKit/page/3/index.html","a9f8ee831b55c0a3ab4d76a92543c018"],["/categories/UIKit/page/4/index.html","d6852572b9c9cf7476223a084082e570"],["/categories/UIKit/page/5/index.html","09e85830a99ed95473b48434db0d32ab"],["/categories/UITableView/index.html","d29520c253242fb76d5f0658bd15d892"],["/categories/Ubuntu18-04/index.html","30144d931c76d798752efc0ef9ac23d0"],["/categories/Ubuntu软件源/index.html","d372510fc86e2d0e0a0352b2caca7ca6"],["/categories/Uniquely-identifying-views/index.html","86a22dc5138030456d7613d0ba4f384c"],["/categories/VIPER/index.html","e2fcf04c6940535662fd57f2b9026f61"],["/categories/Vapor4-0/index.html","961396a1134942b9cfcb91553414b666"],["/categories/iOS/index.html","75a666ece6bb0bba3eb8254569f7deb5"],["/categories/iOS/page/2/index.html","5c3090213b6c8f18e32d58b67723a2fa"],["/categories/iOS/page/3/index.html","28095e605f4843eecc338b700fafb041"],["/categories/iOS/page/4/index.html","59c4b925c9ac5f85b59404bc48a8aeb3"],["/categories/iOS/page/5/index.html","df93382eb767d4f13807f8d99a342bbf"],["/categories/iOS/page/6/index.html","b1f7b419b4257d6c5c6617d51411d059"],["/categories/index.html","93be03db231f5261d437bbfecdf6daf7"],["/categories/子类化样式/index.html","80c3b22bf542001333ec97066ff215b8"],["/categories/架构设计/index.html","86e8a7f8ededf3a019dccda0cdc64ef6"],["/categories/用户体验/index.html","703bb464ac5044d7843f09008d1b4e67"],["/categories/设计模式/index.html","36602c59b583473dd1487d02896aed20"],["/categories/设计模式/page/2/index.html","54b12daf85c2e1c83b6bba27676fcbd6"],["/categories/设计模式/page/3/index.html","9fe00269e396a74819b4d66cd084fa08"],["/css/main.css","1d1abe91fdb9c544dd5a3f324fbc7cbc"],["/hello-world/index.html","3812b872a22603a3ad8c6b61635ea27f"],["/iOS VIPER架构深入实践/index.html","408080aab028ff376687a5b34b34a41c"],["/iOS子类化样式/index.html","16af90f3b7749c4cd5827c9f196c85ba"],["/iOS自动化布局编程/index.html","fb201170be821a7e1a86fcdc27ac16d1"],["/iOS自定义转场(By Swift)/index.html","ff578e67c248eaa8a80a79b262c5db6f"],["/iOS项目架构：使用VIPER/index.html","5047be607c3950bb89691c925b803b06"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b9f3e9f18fc68a5bb2c5d181f8cda39a"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","23918595313966333bb999ff8fcad693"],["/page/3/index.html","d7211b76ca9a6bcd9f1dad9520d51695"],["/page/4/index.html","0eb899a2989481348408ded00e0f66ba"],["/page/5/index.html","7cf3fdc1441360fd764683efe72b8ed8"],["/page/6/index.html","15d560257c49eff78a397070f8c08be5"],["/schedule/index.html","9dfe3390551131dd49ce4f915f36776f"],["/sw-register.js","a3b5248380aec5edbb283fdb0f9654e5"],["/tags/Collection/index.html","268c26a0ba2abe07065958316d1ab6b5"],["/tags/Collections/index.html","d72cbe24b1386780f425da19ed0f43ca"],["/tags/Dependency-Injection/index.html","4e7edc5a5c91d8f76303f695ccc474b3"],["/tags/Modules-And-Hooks/index.html","43c16a4df420db8d2c49074eb96909fa"],["/tags/Server/index.html","c15fc1fb23896a0b56f97132c2fe10e4"],["/tags/Swift/index.html","34a63940ca3a8217e7f492c865c232fd"],["/tags/Swift/page/2/index.html","c20571cbafd95f15853ab5c187aefb25"],["/tags/Swift/page/3/index.html","ecf9743a9ea43f2712bce2393a9804a9"],["/tags/Swift/page/4/index.html","c232ca7039644a7b6436873309ed39ba"],["/tags/Swift/page/5/index.html","6e068d28e84243374d16e91de4c6dae5"],["/tags/Swift/page/6/index.html","0a86e1c545bbf9e34f0a29045db5fd1d"],["/tags/SwiftUI/index.html","4c2a7a34adf197aabec491f8d569fafa"],["/tags/UICollectionView/index.html","57ee90c8611f319df40566c3e9672373"],["/tags/UIColor/index.html","a46fb63b08ee0dea4b50805948adfdaf"],["/tags/UIImagePickerController/index.html","88be4f2cd9c77d2db68926a2d2583f0e"],["/tags/UIKit/index.html","69020edd207bfac04ace38624dd465d3"],["/tags/UIKit/page/2/index.html","4b250f7f82a98c6ad889c03df49e3260"],["/tags/UIKit/page/3/index.html","d65b91a179aa998eca6eac8c26bd66f5"],["/tags/UIKit/page/4/index.html","dcd80c8f51b21056adc18cf2f719bcd4"],["/tags/UIKit/page/5/index.html","006c7fce831d2cb286703b2b16fa3121"],["/tags/UITableView/index.html","25733a9c84e38d1cdd1cf476a570468f"],["/tags/Ubuntu/index.html","fd886779acb5bad6d391e0244061928b"],["/tags/Uniquely-identifying-views/index.html","6ea1268989917e1e3f8d6e213f88d345"],["/tags/VIPER/index.html","9e09efa930376affe9b2cb1d97217bb0"],["/tags/VMware/index.html","a6ad68eb0bb7df8fe1fe5295302e7bb4"],["/tags/iOS/index.html","fa0a3bead271abdc86feae8590457092"],["/tags/iOS/page/2/index.html","b08ec9b1f753af301ffe6eeedd358411"],["/tags/iOS/page/3/index.html","ee25b3bd2469cd4cf3a2c73c6ecbea6e"],["/tags/iOS/page/4/index.html","3242b09a3fb9fc481ae193ba85b3b268"],["/tags/iOS/page/5/index.html","88e9fb9c1393bbe15cc925c6f356f75a"],["/tags/iOS/page/6/index.html","9914495b01dcc7f1bec62cff1f3eed1a"],["/tags/index.html","36e6765a7217284feff1702f094dbac2"],["/tags/non-optional/index.html","81581098e92100d6dbb76562e7dc4953"],["/tags/optionals/index.html","e71777d86cdb7c374e73aadeb17b9071"],["/tags/transition/index.html","de31ca73ef907bdb98c5dceed1c91698"],["/tags/依赖注入设计模式/index.html","46fc3f670fe77e12332f72df7670162c"],["/tags/初始化模式/index.html","1f3c1f87d2ebd9b44a75335a3350dcf4"],["/tags/单例模式/index.html","9420acc642181be158496cee22b8e3bd"],["/tags/原型设计模式/index.html","2a9c646c4ea5090177d2b6a20c52270c"],["/tags/命令设计模式/index.html","bc76672b67e47eb338ed92703ff87d01"],["/tags/外观设计模式/index.html","fea18ecdaff79a6ade4b3b7bf8df2656"],["/tags/委托设计模式/index.html","44946e97ac20d7c53f209fb6f3867760"],["/tags/子类化样式/index.html","cdca64cdafb6d828ced674aab854be01"],["/tags/对象池设计模式/index.html","be0fa7da157ce21b9d7c95a49cea16a5"],["/tags/工厂方法设计模式/index.html","60ce464e7f894afe9de789807b45a846"],["/tags/工厂模式/index.html","4adc0b562aaae791b6e9bd0778809a79"],["/tags/工厂设计模式/index.html","550b1c53123035a4585b4f46d52ac237"],["/tags/懒加载模式/index.html","3755f81b2c9f64e5ea5e9c75e5440c0e"],["/tags/抽象工厂设计模式/index.html","3114a9b9061d9296b816a6e25d1ad464"],["/tags/构造函数/index.html","f9c42d49bf79ae5a95393d5418c2af6d"],["/tags/架构设计/index.html","3e8ce3d5da89519f835db50c9a7b4066"],["/tags/生成器模式/index.html","b14a8c36c317a6414c47df9c2154dd60"],["/tags/用户体验/index.html","c2863f74521216aa89d7b8e3aab45905"],["/tags/自动化布局/index.html","a82dc72ce2355b12912e386d83fc7cd9"],["/tags/自定义UIView/index.html","6b4fe730b262d45b18e359e080ac3f30"],["/tags/自定义转场/index.html","5fbfab0964bb4079abec78d1c4773834"],["/tags/自适应布局/index.html","52ab6ca50c39051f9afab17dce5e76d6"],["/tags/设计模式/index.html","a10c1143975f55fe7c5b6c00547958a2"],["/tags/设计模式/page/2/index.html","0d6a4f7fe59ac83198cddd4e87b8ce76"],["/tags/设计模式/page/3/index.html","02537a15174b978c85141413d36b42a7"],["/tags/迭代器设计模式/index.html","652c25c34f4410af8db696202e111917"],["/tags/适配器设计模式/index.html","7a3d3f4d18f9877cf4f023e1a27375ec"],["/tags/静态工厂方法/index.html","f8c9d0a95dd0e06911e33805aa9f979d"],["/产品开发的幕后花絮/index.html","ed27822859e1c3a5e99e2080db70df41"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ae44260d5ebc7d3070b56d18cc5d4063"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","36c1655727c8b1e1792aeb1e16bd4cd4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","76c98c7727bcc7f85920761d08166059"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5ec3b46a826e1b67ade103696d3eba1f"],["/在Swift中创建自定义集合/index.html","1caf9a27421a50057c157b5f828b0277"],["/在Swift中处理非可选选项/index.html","8ecf263ece17777200a01d67f3d0e0e5"],["/在Swift中重构单例模式用法/index.html","45ca753bbc20c110825fae6c2c5b6ca7"],["/如何为VIPER编写服务？/index.html","7ccdcfc5ffac18b09143548e94ad2ae4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9c88d460b44af5bd25ce940d9be48d87"],["/掌握VIPER架构/index.html","528bafcbefcdb79435201480ccb75795"],["/揭秘 WordPress Hook 系统/index.html","8999f3a14d96cb132bc3bf2b806b26df"],["/比较工厂设计模式/index.html","7fa42c17c6aeae9dfc8d6192dd1f02d5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","0aeae44c66c1c5d592b45d0ea89544a3"]];
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
