/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","03da4b206901edeca32294ac01665566"],["/NSCODER和SWIFT初始化/index.html","b477d418bf4ed19df12229e3568f6d6a"],["/Swift 5使用UIImagePickerController拾取图像/index.html","e947cabf64e1211ed0572b6ca50394dd"],["/Swift CompactMap vs flatMap：差异说明/index.html","9225f894a7dabf796433529a1c4316d9"],["/Swift Grand Central Dispatch 深入实践/index.html","682ca9f8a6c583efeaac2d0fac6acfc9"],["/Swift Lazy属性初始化/index.html","18f172d15d6d973b535c0a2bafbaab1e"],["/Swift UICollectionView使用指南/index.html","19fdf91d7a67df238be2476e9c7d09fb"],["/Swift 唯一识别的视图/index.html","6944cce4bbac9bd754393e709a01a8c0"],["/Swift 如何学习现代UIKit？/index.html","6987806f7b1196a38f01b1b473f05c4a"],["/Swift 用 compactMap 替换 flatMap/index.html","ce42251c3e992ddff7de7b127736a032"],["/Swift 选择和播放视频/index.html","b1ac5e996d4c2623fcd3977907286b35"],["/Swift中UIColor最佳实践/index.html","d30decd6ff87ec833640bd59e91f4160"],["/Swift中快速简单的工厂设计模式/index.html","03d9fc07c998cc8eb927e9f4f55f0ccc"],["/Swift中构造函数与静态工厂方法的比较/index.html","589ed59562791e99c0af8c4c00948822"],["/Swift中的UITableView教程/index.html","c8cd6e80eb82377fbfdbcdced4e667d8"],["/Swift中的懒加载模式/index.html","56a43733e98979f202a2b34cb1f5bac7"],["/Swift中的模块和挂钩/index.html","f6feb787fc0af1d2dd8d77cb08490a96"],["/Swift使用布局锚点添加约束/index.html","a82e8b8b5ad9ced21748d08fa081a582"],["/Swift依赖注入设计模式/index.html","9dcb22b3edb1d3923cc9f686c0c79c91"],["/Swift关于Dependency Injection (DI)/index.html","7c071e88580db4ad1cb265aec24c510e"],["/Swift初始化模式/index.html","f94a07836471d9e76772230b76775546"],["/Swift单例模式/index.html","017f86c655e3ae218198f9d8c98badfd"],["/Swift原型设计模式/index.html","6958447a284ff0f5f9517e679cef4d58"],["/Swift命令设计模式/index.html","22d5386168fe97e01be8a9bf83300be2"],["/Swift外观设计模式/index.html","b84d8769045194ae8e362e94dbc990d2"],["/Swift委托设计模式/index.html","146fc91caebef40286eec001f20ac88d"],["/Swift对象池设计模式/index.html","8538f8b2db5f5a043e11df66c324d8bd"],["/Swift工厂方法设计模式/index.html","846ed99aeb15c4c5ff517c42b56a9787"],["/Swift带闭包的懒惰初始化/index.html","0b7487d0d0f47befafff0e61230cda8b"],["/Swift抽象工厂设计模式/index.html","3c29d86193b34f3d90e2a6ddf75a1624"],["/Swift掌握iOS自动布局锚点/index.html","ec4f499604ade3280d92c1139e517739"],["/Swift支持旋转的自适应单元格/index.html","db879eaf52638bf50e6de008559e309f"],["/Swift枚举值/index.html","b193e786925f9ca9a41920045f05796f"],["/Swift生成器模式/index.html","592c9c1fe84f87790abd3d7d8ab20327"],["/Swift结合Xib文件自定义UIView/index.html","1b990e132bb2d28d5712d3eb3a16c6c0"],["/Swift编写的20个iOS库(一)/index.html","8f9de4e0abc6a58ba30ad6b98d8ec221"],["/Swift迭代器设计模式/index.html","6d38d37d5825954c8081960ea56f2fe4"],["/Swift适配器设计模式/index.html","ad659370a7a58e80a2dbbb7a15ca5ae5"],["/Swift静态工厂设计模式/index.html","a8b7d651cbb7eab41ab48bb4d42bf5c7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b223776eeb7ed7a50ece87494287e3f7"],["/UICollectionView data source and delegates/index.html","13b068c32d906b74a0ca75ac3474d1f6"],["/UIKit初始化模式/index.html","e9ecb7279e729d6a279b2a9c5680fb7a"],["/Ubuntu18.04替换国内源/index.html","e45d1d8a4d6ed2a235b0faac0083a21b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","1df37196e01fe9be09ecf6f31cd2ba19"],["/Xcode扩展/index.html","174e7bd14d5db0c1b5568ccb364076f4"],["/about/index.html","2b581a84211e1c4be8a4b18e227c9439"],["/appleOS的Networking示例/index.html","373e58e0c628ba91e551a470e495bab4"],["/archives/2020/04/index.html","672fadb0026e589f37f970aec3eb17b0"],["/archives/2020/04/page/2/index.html","0f6a75c3dd25702bc3332a81373d8658"],["/archives/2020/04/page/3/index.html","5445a7090fbd79c151f5638aae2ccc2c"],["/archives/2020/04/page/4/index.html","4ee890fa340feb5d4cd67e9bf122a7c2"],["/archives/2020/04/page/5/index.html","e50ea88504104ea05558f1fd07e4bc97"],["/archives/2020/04/page/6/index.html","af2c0893bfcb4cb5bd757336e8121bd1"],["/archives/2020/04/page/7/index.html","25b7fec23db9db806026d2296036c79f"],["/archives/2020/04/page/8/index.html","f1fe70c6fc3b6989300b6ca22a9f36a1"],["/archives/2020/index.html","3f6e4c652365cf3b918e418b4bc897ab"],["/archives/2020/page/2/index.html","fba81020ba1a4a6ded66cdfc9c8222f9"],["/archives/2020/page/3/index.html","7e25bada0410d480ac38da562d8befe6"],["/archives/2020/page/4/index.html","290364ea034e01bf807b0a04edd72d19"],["/archives/2020/page/5/index.html","549cb4bb6616d639be2e73958ff7dcae"],["/archives/2020/page/6/index.html","a3dfe016dbd99e11e1ece1fe4127e1f2"],["/archives/2020/page/7/index.html","df821fc97519b6c1c17813043d0b3fa4"],["/archives/2020/page/8/index.html","b2c68d9ccfdcb0e63ac48b74186abf31"],["/archives/index.html","e388a81be33021c90e224cfa0b088ee4"],["/archives/page/2/index.html","e1173fc7550fd942c03ff07f89665c28"],["/archives/page/3/index.html","6578f1340332f3b9bc22ff6e1ea18d94"],["/archives/page/4/index.html","07770fefb2292c8c4fdb548430e9ceca"],["/archives/page/5/index.html","7649d35182a4de6f943c92169c952be3"],["/archives/page/6/index.html","01e92794caefe558c74b5ef3310a6908"],["/archives/page/7/index.html","2d62673f06f0177192486bd504bec77c"],["/archives/page/8/index.html","2e1f4b23f54a080b675aeb6083d3c765"],["/categories/Codable-protocol/index.html","7f49445f424a0f781870faddfa46b21d"],["/categories/Grand-Central-Dispatch/index.html","8bf68b0d84b92285dbf66068cba9545a"],["/categories/Hexo/index.html","8cfcf70520b9650ed52572de1f85bccd"],["/categories/Result-Type/index.html","7c5235c5584aa546d38b07174c6b3543"],["/categories/Server/index.html","bef8ff51146aa44a1d4190678232fca9"],["/categories/Swift/index.html","5e868276af7f43baf932ba49054625db"],["/categories/Swift/page/2/index.html","91155ae5de287ac9bc3aff63fbc02253"],["/categories/Swift/page/3/index.html","b10e288408875e50f3a7baf5132f8da8"],["/categories/Swift/page/4/index.html","428182c2df5792de04a4adb60575c8cb"],["/categories/Swift/page/5/index.html","a4cdf46bc8f4a3a653be4c5cebfa6819"],["/categories/Swift/page/6/index.html","6d5a303338dd5640aca169e338a3b552"],["/categories/Swift/page/7/index.html","fbc6665c7ad4a08082f516307427899b"],["/categories/Swift5-2/index.html","bca88b32888de83d29200758335502cb"],["/categories/SwiftUI/index.html","74ab27d0a3a53aaea31508ab236cc2d9"],["/categories/UICollectionView/index.html","19bec1ddabb977d32843f2524d192691"],["/categories/UIImagePickerController/index.html","071ef89f1debc42250d917822e1ab80a"],["/categories/UIKit/index.html","8d6e5a3ff4198d826252d2e4747fe75d"],["/categories/UIKit/page/2/index.html","2b94723ef962c0763820c785c5eb038a"],["/categories/UIKit/page/3/index.html","37176bfabefff652b7281c3a09e71379"],["/categories/UIKit/page/4/index.html","53934b227b1f84294b33803763bd2066"],["/categories/UIKit/page/5/index.html","cbb1ab53021f332b190e3ee117c5c261"],["/categories/UITableView/index.html","af9ab034dddcab85d0e516f5a63a6703"],["/categories/Ubuntu18-04/index.html","8c9e63c610bddffeff66c5e038b8748e"],["/categories/Ubuntu软件源/index.html","c16033daa2f3153c84974e5810c7a2aa"],["/categories/Uniquely-identifying-views/index.html","e92723fda91f8206b8967a6741882a35"],["/categories/VIPER/index.html","3d860436a7c23dbd9c55467fa1ed4161"],["/categories/Vapor4-0/index.html","872424e0417f09ce74d26a3d4a5876c6"],["/categories/Xcode/index.html","48c4bd678191719d27d1b9c71cb94c90"],["/categories/appleOS-Networking/index.html","5396b0f03144e6700c4646c6784edf58"],["/categories/enum/index.html","8fe2a030e641e4751c01894df7a53331"],["/categories/iCloud/index.html","c401f492883cf6adcbd04c0f2ed3c66e"],["/categories/iOS/index.html","c8e2755e0f4c2658485e7834e58720ca"],["/categories/iOS/page/2/index.html","136e0b62664ebfccf8a053211dedce61"],["/categories/iOS/page/3/index.html","6ee426af11a82b189cd25faf1cb61a13"],["/categories/iOS/page/4/index.html","443c2b91e4e02b08fe38ecefba2e7e62"],["/categories/iOS/page/5/index.html","5952a3af0e51169016aec2a95509d8c6"],["/categories/iOS/page/6/index.html","0da6ef2e8c89fe8fe50a677c9d7c1b8d"],["/categories/iOS/page/7/index.html","fcb27ed865a48f8e5cc7b562b896e226"],["/categories/index.html","8d84e2310c5a0189dd418e1588cc3dc2"],["/categories/random/index.html","b14a2fbf578398a0196bdd51529b0ed1"],["/categories/三方类库/index.html","2ddfda102f9935a9093ed5f8a8b547ff"],["/categories/函数式编程/index.html","2a66eaff83e02415858c32e31952390c"],["/categories/子类化样式/index.html","221ab862a99d6caec1ddf2850e8456c7"],["/categories/架构设计/index.html","d14e770b7e60a8f41abf16880451580b"],["/categories/用户体验/index.html","230de68a90ca50240e0e48a4acec1bce"],["/categories/设计模式/index.html","d3053cf38198e44722d160466094db51"],["/categories/设计模式/page/2/index.html","79c67674ec3cc2efbfeb920143d0ee91"],["/categories/设计模式/page/3/index.html","43bcec776f54574c624abc399d69785b"],["/css/main.css","a7c201717a3cf2978220936f0ccbef8b"],["/hello-world/index.html","1b7288cda1a405608b38acd829e5927b"],["/iOS VIPER架构深入实践/index.html","3f6845a4b8983b19e619e20208f3a53f"],["/iOS 自定义视图，输入表单和错误提示/index.html","c118f357895cd560eb12bee5add18675"],["/iOS如何使用iCloud文档？/index.html","ef6221142f033f2b9db94be04a10e3d4"],["/iOS子类化样式/index.html","bfe58134f0edb520dd2e2683950fa9d4"],["/iOS自动化布局编程/index.html","10e6f8c3d36c227b236409f51b90db60"],["/iOS自定义转场(By Swift)/index.html","378832777f2971218503ceccfaf3b234"],["/iOS项目架构：使用VIPER/index.html","ecfb8f1d7f282e0aa3a111a91ba9fba4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","db2053961e1d94151c26ac24536a749b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5c9eba6b489932c9848a0a65d95c0d5f"],["/page/3/index.html","86d50a007ae8b89b6c56a2be6e5fbe08"],["/page/4/index.html","a73443d6103df3148e97e13ba5bc3d0a"],["/page/5/index.html","2140df0d1f237a2a9eb4c5f88fdbb183"],["/page/6/index.html","1a9781570859fe890bbf6df3152a1443"],["/page/7/index.html","f965a57a84810f27051e02bea258e051"],["/page/8/index.html","0fe57434cf16db820cc42006ac995c5c"],["/schedule/index.html","a67f3fa1cbbb283072d7b2bd8f315b15"],["/sw-register.js","636b8581060d28d743fbea6b4fe7f3ab"],["/tags/Codable-protocol/index.html","d86ced26b99896b5e15873eebc02c69d"],["/tags/Collection/index.html","dce9da40dc5756684d28d92cfba7c235"],["/tags/Collections/index.html","f066e1768cc0b1eed62ee250baf873ac"],["/tags/Dependency-Injection/index.html","abc655ee36d6c2f872815e3ddf11d1c3"],["/tags/Grand-Central-Dispatch/index.html","d99582369d0cf4771d0584d53d78fea5"],["/tags/Modules-And-Hooks/index.html","a2ff26528db4d5f5fd8dc2a466f471e6"],["/tags/Result-Type/index.html","538e21c47473aecaaafe2e3d13a12380"],["/tags/Server/index.html","c40fdc1c8cf2354f011292a4e8b15955"],["/tags/Swift-Package-Manager/index.html","67637b1066c606004a138ed2f1ec01c2"],["/tags/Swift/index.html","08b3fff4e1501be19c0f91d39ee4bb49"],["/tags/Swift/page/2/index.html","eeec156b4089215693a84f83a63995fa"],["/tags/Swift/page/3/index.html","3c5d09ca466dfa935a1690d63da6222a"],["/tags/Swift/page/4/index.html","c59b77dcb7e3d88e932e1ed62d0c401e"],["/tags/Swift/page/5/index.html","6558087b49a810eead5f771e1b76512d"],["/tags/Swift/page/6/index.html","f32e06ade783253cb965aa78347f2b15"],["/tags/Swift/page/7/index.html","2ac5da12f1dedbf69e5faa448c08a3b4"],["/tags/Swift/page/8/index.html","a011ca53ec9946f180296d69dbdd680e"],["/tags/SwiftUI/index.html","63d12ad2da52290164a9816585fb4989"],["/tags/UICollectionView/index.html","f5ad6fe680ecf6bf1871696123cb2c11"],["/tags/UIColor/index.html","b4e678947d7a2ad36a052a513d176936"],["/tags/UIImagePickerController/index.html","e51ac1d1dd2a560e178f523b635f7e59"],["/tags/UIKit/index.html","250c44c7f4a03e16a85d2011d8286196"],["/tags/UIKit/page/2/index.html","fb3937aa26a513965bdffc3e04f19602"],["/tags/UIKit/page/3/index.html","c324ba90cba8af1be486a830f55b9baf"],["/tags/UIKit/page/4/index.html","0245db3790d1a7e7f6b184d0b45983a5"],["/tags/UIKit/page/5/index.html","aebb8108ad020e3f8fc4c1723c100776"],["/tags/UITableView/index.html","bbbb558183a59e57c2ed19c9e4a5ae5f"],["/tags/Ubuntu/index.html","116bb9a99f48db3a5c5ad09b13357395"],["/tags/Uniquely-identifying-views/index.html","29d2b02c872548d224b8665cff22ca78"],["/tags/VIPER/index.html","6934200b78f62033c05ea0a2b8098f6a"],["/tags/VMware/index.html","b4c28f79a6c478935e5dc97d020ead32"],["/tags/Xcode/index.html","30c7e79da692b71cbf601cccc8b88df4"],["/tags/appleOS-Networking/index.html","b84e132d2d7fa12531e6cf755b2f7571"],["/tags/enum/index.html","d36c891fa95f855edd1acbf9ad3b8cba"],["/tags/iCloud/index.html","ef22ebe576e53105d2b0f625b9546dfd"],["/tags/iOS/index.html","d1a99b30f555948259a700d016e06bee"],["/tags/iOS/page/2/index.html","aa686e17e13a2961d7e13f86029744bf"],["/tags/iOS/page/3/index.html","d4f73f7d0bce74884fcfde4904188158"],["/tags/iOS/page/4/index.html","ddd18d17eaee2cc13d685b1964d5bda2"],["/tags/iOS/page/5/index.html","fce512fc1f2e8c2267f2aed23fab8388"],["/tags/iOS/page/6/index.html","0f24b6fcc7a3526853f2d7c70cfa799c"],["/tags/iOS/page/7/index.html","8881176d17eb0fd6a8db2ee3cd56e06e"],["/tags/index.html","e878a0197c2ec2324ae63137adf3d2ba"],["/tags/non-optional/index.html","a3f6bd53dead42efc0936345a01fb02d"],["/tags/optionals/index.html","30a293ff7a1380f80c49cfa94d223012"],["/tags/random/index.html","4384d4cdf30f51ede412c714dcca31bb"],["/tags/transition/index.html","9a1c93a5063d256fbf80818c67febe37"],["/tags/三方类库/index.html","ed855ee8d47080a98f7a460e19c803d4"],["/tags/依赖注入设计模式/index.html","b7f84f78f68e3c4657bcef3643c491e2"],["/tags/函数式编程/index.html","3286b79134c8cfd477d67d40505d0bf3"],["/tags/初始化模式/index.html","3b0270ebc68725b8e22782beb06b025a"],["/tags/单例模式/index.html","8c9f4793e00548d7182c6a28043f837f"],["/tags/原型设计模式/index.html","a7cceff71daf068b9668f7a2176c368e"],["/tags/命令设计模式/index.html","b330e418af8fabb21033654e2330cf6f"],["/tags/外观设计模式/index.html","34da83f246710cd4cc7184c8e8684807"],["/tags/委托设计模式/index.html","b4c96a6e757540215f759f869973e618"],["/tags/子类化样式/index.html","90262b9f7e6c5466c399012bf65f75f0"],["/tags/对象池设计模式/index.html","30dc1df102270d69d1287020c5edef8d"],["/tags/工厂方法设计模式/index.html","47d7af99b6fa008a8c2cf97ac77a8175"],["/tags/工厂模式/index.html","64fcf2863b042f0741fa1a71b0cdf4af"],["/tags/工厂设计模式/index.html","ecf66163a74d3caa6ffe894bda37145b"],["/tags/懒加载模式/index.html","01f3417c29be4f7572aa8f568b4f68a4"],["/tags/抽象工厂设计模式/index.html","0163d4ff2c7268462ca7fe614aeead36"],["/tags/构造函数/index.html","5f58cfc6b271790f5a88b7462767eeba"],["/tags/架构设计/index.html","6bf54b8bc43ccb8cf89019700a578e99"],["/tags/生成器模式/index.html","f7273e2096be40d0a7400c43be5c7e75"],["/tags/用户体验/index.html","81de4d3207b96ac1396fd0bf01d7f748"],["/tags/自动化布局/index.html","16d3401c7cf74b33f0460a7334d182d6"],["/tags/自定义UIView/index.html","8dfd7cf5e8a90bdab342695f3babc3c7"],["/tags/自定义转场/index.html","136454cb5d529883ba6477e7e61aef55"],["/tags/自适应布局/index.html","0dd91e1601d1892469f3d3a95df9d538"],["/tags/设计模式/index.html","c78f167461e6fe1226a3e3910d54342e"],["/tags/设计模式/page/2/index.html","77ab1f67c5276dfee481ad2efbde6e09"],["/tags/设计模式/page/3/index.html","61074ce8d55983f5d59fe625686577ba"],["/tags/迭代器设计模式/index.html","672c829e1153008ced86ffebdbf3b85f"],["/tags/适配器设计模式/index.html","e11cff8eebd60f6fb84e5e49e251b8b4"],["/tags/静态工厂方法/index.html","4b8fe29076238cf7a55027419fcc5a9b"],["/为iOS应用构建输入表单/index.html","b86e3ceb151debbb13a67027483308fb"],["/产品开发的幕后花絮/index.html","053c6734b9065208196e22fe0f2aa1db"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bb7276ca92f12483615fcb3793e3281c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","220edc160cd0f19aabbd9ca1c4228679"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b530b9be0564893d29057860f2077fdf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","def9c5ae70e2a493f68f355414c4d60d"],["/在Swift中创建自定义集合/index.html","d8bae4a400eae46706e31f6d759f0464"],["/在Swift中处理非可选选项/index.html","005e03b3478f8794d28d177f168fbd95"],["/在Swift中生成随机数/index.html","0f1d1765bb225fc4b4fe8affdba86388"],["/在Swift中重构单例模式用法/index.html","07422fad3f62220b1f659754492c4f6e"],["/如何为VIPER编写服务？/index.html","d44dfcbfc2bf862594442d8b9bf8babe"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b9fc25a6906da6e0a7a045587f7fa5fb"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","d8a9e07df0a0459cf0dfba237fffbb8a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8256ee98ef5ada9b890425d78616e10a"],["/掌握VIPER架构/index.html","35018409d8d323ea2c2d9ec7086981d3"],["/揭秘 WordPress Hook 系统/index.html","c540f47b885f7cb58e5fdc4664023430"],["/比较工厂设计模式/index.html","b1ffc642b99304019b08c5344dbc3c87"],["/深入了解Swift中的Grand Central Dispatch/index.html","3c182a69ba0d27d8ac24f4b5e873de86"],["/深入研究Swift框架/index.html","32b7ae37d566eeedf46cbb024b84af07"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5cf19bdfc403ab7fc18a3b88d10b7056"],["/选择Swift而不是Objective-C的5个理由/index.html","e21c4960ce5419da80f476bf370db28b"]];
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
