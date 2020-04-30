/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","b508465b3915a65c140a33b687e2da3d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","81bfe11dc213c47d286c62d68bfc1be3"],["/Swift Grand Central Dispatch 深入实践/index.html","662342bff073f1dd06ad740d4d8d4885"],["/Swift Lazy属性初始化/index.html","2d190125684076a7208790fc56a26bf3"],["/Swift UICollectionView使用指南/index.html","747b780ff65a22122b7c19155bb7da70"],["/Swift 唯一识别的视图/index.html","24b52dcfc1382726db0c9d8e068382b1"],["/Swift 如何学习现代UIKit？/index.html","b9e63d0b1237a9d121354851b1418d5e"],["/Swift 选择和播放视频/index.html","0a7e85e340457f13cf1fe2b93b9711cd"],["/Swift中UIColor最佳实践/index.html","a290414d5d0135727800bdd5a52e4feb"],["/Swift中快速简单的工厂设计模式/index.html","6db7a77856d5b581016365e551450ce8"],["/Swift中构造函数与静态工厂方法的比较/index.html","e115c05d33dd5e57899fab372dd881a0"],["/Swift中的UITableView教程/index.html","629f6d03b3b08d33ace4ae726a2e10a1"],["/Swift中的懒加载模式/index.html","278ee5670e445218fef20b827207f182"],["/Swift中的模块和挂钩/index.html","ea39444ceee20345e637037df77b8bc4"],["/Swift使用布局锚点添加约束/index.html","7f14ee97de67eb0b2cca689bdc4b3687"],["/Swift依赖注入设计模式/index.html","aad9483e7b66e0bb903ccf4e88a45321"],["/Swift关于Dependency Injection (DI)/index.html","5dd1ad8ec86e27070e70c46c23ab168e"],["/Swift初始化模式/index.html","5983fe2bb8586c337a6feaa2790a5bfa"],["/Swift单例模式/index.html","fb702c09e328aca54527b1e8ae780533"],["/Swift原型设计模式/index.html","bb4eabc3edee87d65238473bea93018f"],["/Swift命令设计模式/index.html","83614b30de93c7f48cd5a36253873696"],["/Swift外观设计模式/index.html","812aaad722db265c2210b403cab5c6c3"],["/Swift委托设计模式/index.html","8d9a120d23227bfe14bf1ae4bd88e386"],["/Swift对象池设计模式/index.html","a3107ada381fefb2ed425d14136d6396"],["/Swift工厂方法设计模式/index.html","c217e58d9eaf1ef1c30a7829ad63d50a"],["/Swift带闭包的懒惰初始化/index.html","924c8f95caa847ea21d71584e447a467"],["/Swift抽象工厂设计模式/index.html","7b6d384269b6f8d195825fd068c8f158"],["/Swift掌握iOS自动布局锚点/index.html","78898051ee3b94c634fa1d18f805e15b"],["/Swift支持旋转的自适应单元格/index.html","fa24d8642d211441b922553701e68222"],["/Swift枚举值/index.html","6de6bb31d3639c8164a71abf59f72616"],["/Swift生成器模式/index.html","d139490f8b52093005632a11deae62f1"],["/Swift结合Xib文件自定义UIView/index.html","05531aee83ba1e11e6e45207a341bf9f"],["/Swift迭代器设计模式/index.html","319b8f3d3bec515541bc3b5574a06dc8"],["/Swift适配器设计模式/index.html","4e289b20b622718cb2e69042cde9c099"],["/Swift静态工厂设计模式/index.html","755ca8055a7cdbe3be2dcd37f8771551"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2355a08d3a60e925fbbf2e31eeb255f1"],["/UICollectionView data source and delegates/index.html","7fc33dd4172f53159199d25e6a0a9e17"],["/UIKit初始化模式/index.html","08c03c6f6b23e89cc8ad653544e78507"],["/Ubuntu18.04替换国内源/index.html","6db5cea23447fd3232ea27cd18ad504b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","916d05baae703be33101d19b9b432fa2"],["/Xcode扩展/index.html","af7deb144914774029ba274368c1215c"],["/about/index.html","f1981309de92c094cd31da25b72a2e58"],["/appleOS的Networking示例/index.html","ffba6eb067fbb1bc1166211748fa8719"],["/archives/2020/04/index.html","8672558abe699250ea0bbad4754b79d8"],["/archives/2020/04/page/2/index.html","29efc47b1befe5d385e723685d5f29df"],["/archives/2020/04/page/3/index.html","7e55d1aaae1fafe70eeb5d985c9e9ae2"],["/archives/2020/04/page/4/index.html","3c6d216e1b20247af7b9f45643335028"],["/archives/2020/04/page/5/index.html","7aa066d76a4671010b71f010a9b8c789"],["/archives/2020/04/page/6/index.html","9f144f4253fa0faa3cd6888ec69b57e8"],["/archives/2020/04/page/7/index.html","9a3d4cc3a8c8cf354862d60f382ae0af"],["/archives/2020/index.html","000bd517ff1c820f5acc648a06860e81"],["/archives/2020/page/2/index.html","de9dff76b472ca65511f3fbd70cc861b"],["/archives/2020/page/3/index.html","581d5603277fd336b98d45f4c1b45ffb"],["/archives/2020/page/4/index.html","6b755d022953586c0364b2221a7f028b"],["/archives/2020/page/5/index.html","a9f42bf279c798357ad3ec5260f70443"],["/archives/2020/page/6/index.html","ad4edb4e5ad9ac0caf30e6ecb2f66486"],["/archives/2020/page/7/index.html","67fcea3046526163584fda95360d3395"],["/archives/index.html","9cdc8dd4c962d5acd9957cdf4870ff3f"],["/archives/page/2/index.html","55cf6b2a9b77d4ddbc2e950f60244156"],["/archives/page/3/index.html","67fc777dfa9abfc14615f2aa48e0d625"],["/archives/page/4/index.html","71659b36051a8db7afb050f2a582a89c"],["/archives/page/5/index.html","eb8dd0015e12ca47d6bc5bbb3581328c"],["/archives/page/6/index.html","49d8af55ae87d1e3435c590f39f091a2"],["/archives/page/7/index.html","8a75769c8885b34f9fb8023ad9a76cfe"],["/categories/Codable-protocol/index.html","2011767485e3b11910186bd14b172a6f"],["/categories/Grand-Central-Dispatch/index.html","20dab2f4892f240577e5daf0b2ecb273"],["/categories/Hexo/index.html","0745d96fc3843c549431b60cfd83c8ea"],["/categories/Server/index.html","654d020746efadfc7bc04f65c2432e3d"],["/categories/Swift/index.html","4901837d8f7c3d6574e5bf9a2d13e444"],["/categories/Swift/page/2/index.html","e12915789b244959c732ca0251e9233e"],["/categories/Swift/page/3/index.html","6ff8decf1b62ab2fa076690ca693d72a"],["/categories/Swift/page/4/index.html","b04c6d81bff381f793a8d54c91fd4b1e"],["/categories/Swift/page/5/index.html","5b3b19e13bf88701de485daae588a3ec"],["/categories/Swift/page/6/index.html","ae2ab97870820c78fbb3269413bc7401"],["/categories/Swift/page/7/index.html","8bd2312c3a7076b98384fef189c1fbde"],["/categories/Swift5-2/index.html","9ee601434aa3c7853db3c9e441190adf"],["/categories/SwiftUI/index.html","7a2412608691d762a1184bc75642573c"],["/categories/UICollectionView/index.html","7e819165911ac4ec2dcfefa43cda6223"],["/categories/UIImagePickerController/index.html","0ceb94dded353fc7d9123ece7e55f5cf"],["/categories/UIKit/index.html","e6b6d7a4d57a1c8b9d77cae81141b899"],["/categories/UIKit/page/2/index.html","2af7a29ba7ea9587274a17e321b87b24"],["/categories/UIKit/page/3/index.html","7ead64f5fa9eaa922051b02461f26bb6"],["/categories/UIKit/page/4/index.html","b317dd5460f4dd309088bd56beded827"],["/categories/UIKit/page/5/index.html","d43e90e7db67ee8d147750f06fd1cf28"],["/categories/UITableView/index.html","9df49c01013d201385a42d685b88a8b0"],["/categories/Ubuntu18-04/index.html","8d5c0bc2d3e44b1032fcc20889708807"],["/categories/Ubuntu软件源/index.html","8b13f26727e5e148401a18c68d531f34"],["/categories/Uniquely-identifying-views/index.html","a95633dfc2d4ee11bfbb3dff2eae9390"],["/categories/VIPER/index.html","2b196c649d8fb4577c1aae6bd1f288d3"],["/categories/Vapor4-0/index.html","3a3ecd26532e8279fb134f8906607025"],["/categories/Xcode/index.html","d51080fbde5c669b785e3e672a16f29b"],["/categories/appleOS-Networking/index.html","23a3976e103bffda0adba7bac25fccf8"],["/categories/enum/index.html","00a7a31917acbc422d90ae4b808ea22c"],["/categories/iCloud/index.html","61e1476b36fbc38456b97dc89e330952"],["/categories/iOS/index.html","75d06e75ba5270e00b25f1625dcf8c2c"],["/categories/iOS/page/2/index.html","311aaeaa789607b6987f1916aa20b4d6"],["/categories/iOS/page/3/index.html","0dd1cbd12c317eaa5193d056df8d9e75"],["/categories/iOS/page/4/index.html","babc3bfbf9917c892d7ac71a8a248f49"],["/categories/iOS/page/5/index.html","111146c391150d989c416711833e9fd3"],["/categories/iOS/page/6/index.html","10e9e4efbd1e8398714be1a1e45d6e15"],["/categories/iOS/page/7/index.html","91ee09ef94cb785e304dc49bd2c199ef"],["/categories/index.html","2d49b78497ec507bc03cc294e8a50269"],["/categories/random/index.html","6fc5d215008342d424e2e5646a7b9cd9"],["/categories/子类化样式/index.html","7e75d86a8070c1a336d20468d4691d53"],["/categories/架构设计/index.html","cac31d994464d0eeb3d5d3960942574f"],["/categories/用户体验/index.html","452eee085e8939f3d1e30c682bf53b5b"],["/categories/设计模式/index.html","c2b1eb192d390db4e7f39fe42f4bf0d5"],["/categories/设计模式/page/2/index.html","983f956deb9052ebcf260203ec6c5908"],["/categories/设计模式/page/3/index.html","8260197d78644d05df843df645fb8adb"],["/css/main.css","f133e37ec2bcca129875c84d57558956"],["/hello-world/index.html","e6676944abbd65a897c82b84423614c0"],["/iOS VIPER架构深入实践/index.html","948b9ba47dab65f92b4049751fba94dd"],["/iOS如何使用iCloud文档？/index.html","9c78f1a85351c0a12a59d26a1d9da0a8"],["/iOS子类化样式/index.html","01b7d782f47f6c562186ffdc34dbfcc0"],["/iOS自动化布局编程/index.html","5d721558858d8cdf1a5579e168fa3462"],["/iOS自定义转场(By Swift)/index.html","eb916f843687152336e2fd5b4da5b786"],["/iOS项目架构：使用VIPER/index.html","9553b5e2d900607e5e1ea7bfba310f58"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","86ff99cd502a9def71c5b100f418ae44"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1c5ad9fb2c5edb90b793912609e59218"],["/page/3/index.html","210e687a7554a25237cf58716f472738"],["/page/4/index.html","55632f3ef00040cedfed39e88a4d5ec9"],["/page/5/index.html","8fc7fbed914ea130a66840c8fda68910"],["/page/6/index.html","8d20e037d6758cacb42f7d224bb32e43"],["/page/7/index.html","2a74e8e9a1efd670a10bd4c113f03a0f"],["/schedule/index.html","bcb15d0f4adfb19223552ce32caea333"],["/sw-register.js","9fd03edbe1529712ec6aad43a3072f34"],["/tags/Codable-protocol/index.html","e774bac5353da33dad2fcddd464aab51"],["/tags/Collection/index.html","529043f2363559b2141f322ee8c70c28"],["/tags/Collections/index.html","b130ae05dac63f7515c4a208f279ebf8"],["/tags/Dependency-Injection/index.html","cbf193525f05cdf4a8e21db957505085"],["/tags/Grand-Central-Dispatch/index.html","de8f13d85a0ea0bcaaac40012740dbf3"],["/tags/Modules-And-Hooks/index.html","26b1a40f579437a70858531a444ef007"],["/tags/Server/index.html","38e404fc33c1b607cc336cf05dcf260f"],["/tags/Swift-Package-Manager/index.html","c8956ba6ced1f4ac0e363c4c9bb10c66"],["/tags/Swift/index.html","19061ec7f78712645d37d79d16318a12"],["/tags/Swift/page/2/index.html","76e67562d8d88840e6ab7a67a73dd9d6"],["/tags/Swift/page/3/index.html","af852dac2bb94eedaf0e949d5343aa53"],["/tags/Swift/page/4/index.html","56866e84e34d41a5e024adbc46ab1388"],["/tags/Swift/page/5/index.html","252866ab29b8537773b04e253f4ce967"],["/tags/Swift/page/6/index.html","6e48559778c269becc8bd015f07a5c61"],["/tags/Swift/page/7/index.html","538d8f31ed07c74de340e677f03f2e5d"],["/tags/SwiftUI/index.html","5ac1c5b8ba15d18db9749f8fe11019a7"],["/tags/UICollectionView/index.html","0f1f7d399f6d45b0fae1f990dce6fe2d"],["/tags/UIColor/index.html","3e7daaba78d32f20e3b191650b789696"],["/tags/UIImagePickerController/index.html","b6f24aaa474ac45fd0369e7ec13c6eed"],["/tags/UIKit/index.html","5c8ec1d12e0ec39fb2b557e096b73e0f"],["/tags/UIKit/page/2/index.html","35c915e4f057fefe76d820e1cc6983e4"],["/tags/UIKit/page/3/index.html","8ff13b48741bae1ede39c8518373a878"],["/tags/UIKit/page/4/index.html","c5ea70fdcdedb7179adca97c9c35ce85"],["/tags/UIKit/page/5/index.html","94a7dbf96ec665cb9e0a87a5f08f23d8"],["/tags/UITableView/index.html","e72faf2dfbabe653f46627cd78d6bfd1"],["/tags/Ubuntu/index.html","cca4a7b698bc19d77432334b075e5489"],["/tags/Uniquely-identifying-views/index.html","cf216e52279881711ec7c1b914c00f95"],["/tags/VIPER/index.html","6b238a989c2f9bdbf13ef0d3fbb647d1"],["/tags/VMware/index.html","1baaaef41a70fbd2d63d03327e9983f0"],["/tags/Xcode/index.html","6927ab09c4ab5ac7bb514859659a9710"],["/tags/appleOS-Networking/index.html","9ea1d8db5e648a75bbda218bd55945da"],["/tags/enum/index.html","d27fa7ee12ff3601031d7d5d3a6b3c41"],["/tags/iCloud/index.html","55c75378209d9147c791e726fad32da4"],["/tags/iOS/index.html","d8b77078290029ed817b0433ae8ea3a5"],["/tags/iOS/page/2/index.html","49f3cefa47228f3116dd9198028d19b7"],["/tags/iOS/page/3/index.html","c5c49ab8b9de0fd87f07b7984e6fda87"],["/tags/iOS/page/4/index.html","45a9d7bf127a5dac22a9345f832fd26b"],["/tags/iOS/page/5/index.html","88f1e37b1984427aab3c87c45b56b97a"],["/tags/iOS/page/6/index.html","ec1864c81d73cd230e9ad59b7b40d981"],["/tags/iOS/page/7/index.html","03dbb56076aef0d83ae4ced1a601499e"],["/tags/index.html","1d2887008f973b40569a0ffa6f23949a"],["/tags/non-optional/index.html","83474e305293c7871ba870236d2bda4e"],["/tags/optionals/index.html","e26e2856495c5d813428aa9dabaf4a50"],["/tags/random/index.html","6e9aafd8ad97e78800f1b6721e289624"],["/tags/transition/index.html","535f684fac4e004b4968d31eb670c6d0"],["/tags/依赖注入设计模式/index.html","c049b39b023202d5aa97aa39e9f73d94"],["/tags/初始化模式/index.html","39c0f6559b9b136ad43e32e8dd5b9cc7"],["/tags/单例模式/index.html","945fc34c048219157b148270ee3b8dc4"],["/tags/原型设计模式/index.html","1bba19ca6a387543c4e6318cc2081ddf"],["/tags/命令设计模式/index.html","edefde323757b43af4419b4456000521"],["/tags/外观设计模式/index.html","cd12bdf47c71b66553adf97812f873a9"],["/tags/委托设计模式/index.html","a0514200c02b030eacd4f4451f752ec0"],["/tags/子类化样式/index.html","1da5cd174fc8aabae40e622012f4deda"],["/tags/对象池设计模式/index.html","d285fab8cc9e222e02adefac34378c67"],["/tags/工厂方法设计模式/index.html","52e201a944ed3649545c578b729637db"],["/tags/工厂模式/index.html","ea832094d47eb6051874115b09af8c87"],["/tags/工厂设计模式/index.html","a9888672f45573802327c782fb2d4e7d"],["/tags/懒加载模式/index.html","6577b663c6f34c1099fa7edd5e905cf4"],["/tags/抽象工厂设计模式/index.html","28126f68879c49ce751f21089625edcb"],["/tags/构造函数/index.html","8cb93392a14fe0c25dfbdbcd74c4ebf4"],["/tags/架构设计/index.html","f3fa265498c249729a65c99f8012abf7"],["/tags/生成器模式/index.html","799e2d6cfcff93796fd4c051505f120f"],["/tags/用户体验/index.html","35fbbf709129ba0c1d9893ed5c293263"],["/tags/自动化布局/index.html","dc9bcd08a21a114cce6d93f7eb85e5c0"],["/tags/自定义UIView/index.html","ebc184a98947b5eaf4d4d33d5ac0b727"],["/tags/自定义转场/index.html","bfa5821900632dc096310915775c7321"],["/tags/自适应布局/index.html","6c334038e319ad760f070eb5b0925818"],["/tags/设计模式/index.html","e60d643576c1b9b2abe4da72503c5acb"],["/tags/设计模式/page/2/index.html","e82cbcf9e9c45afd2b40b8b11d278318"],["/tags/设计模式/page/3/index.html","c8b9f2f9fd87bf02930ce29647eae86d"],["/tags/迭代器设计模式/index.html","e9de016953893dd40219f0449e0807cf"],["/tags/适配器设计模式/index.html","0a00da258c8a2fa783f77ba6e1df4021"],["/tags/静态工厂方法/index.html","79449e8b79b761d3fd1d9795010d6672"],["/产品开发的幕后花絮/index.html","e3f970f3164e474f591892d4e9bacace"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e24cd96fda8b35d6c54aa27098e8fa11"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d3c291011076d72f518cb158320ea6d0"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","edac85c4cf8211255869127319e15185"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","8fab43e6bdaa5cac53e9831a8eec94de"],["/在Swift中创建自定义集合/index.html","bea6b4009f6e2f9ad2325b3f6da71b9a"],["/在Swift中处理非可选选项/index.html","943eb90d2d438aaa0faa44f82d483c01"],["/在Swift中生成随机数/index.html","4440d2b9d47cb0a3afdd4f70888c7014"],["/在Swift中重构单例模式用法/index.html","436462c77c0a0eb0321f59cc03f31bf8"],["/如何为VIPER编写服务？/index.html","f32a577084726ffb07ac02581a8fd82c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a9cbc94e43396f2158e3597bcf661daf"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f3e030fd161976eaca245fac628ddee7"],["/掌握VIPER架构/index.html","9915be6339aa4c465e23e2f953987d2b"],["/揭秘 WordPress Hook 系统/index.html","274efd61343f411e22771134c3a35b7f"],["/比较工厂设计模式/index.html","181c56a37789525adece5f187b3f1d75"],["/深入研究Swift框架/index.html","de16441b017cae61b48de5bf1838baf2"],["/适用于iOS开发人员的VIPER最佳实践/index.html","1074fe4fbdca26f55ef6f577e552ce3d"],["/选择Swift而不是Objective-C的5个理由/index.html","ca719270435ea910a4f0a5273ac30ed1"]];
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
