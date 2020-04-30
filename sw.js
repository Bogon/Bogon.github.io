/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","0f6d4bee38f5713121ccc3e6b012211b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","0de3851827edca5eec3c2a4ab85adc95"],["/Swift Lazy属性初始化/index.html","2f44d5e8f0211ca224c0f2c6f9a29137"],["/Swift UICollectionView使用指南/index.html","d07284d0f0741b9936fd4ecf41b2ccf8"],["/Swift 唯一识别的视图/index.html","63d974d3934452fa97f5bce76bef0256"],["/Swift 如何学习现代UIKit？/index.html","a76a9f82177372ef143615b52e3a5017"],["/Swift 选择和播放视频/index.html","2121a371fd0b7d2b9bac1d99e347abde"],["/Swift中UIColor最佳实践/index.html","55ef445f3916e19b10fb8b60bc65c2aa"],["/Swift中快速简单的工厂设计模式/index.html","80a4df693469c89afd52f2e0d40ca419"],["/Swift中构造函数与静态工厂方法的比较/index.html","e090a9cd378f78167fdfb27443d832a6"],["/Swift中的UITableView教程/index.html","a53c8738c478b6c364ea1ba37f430684"],["/Swift中的懒加载模式/index.html","7ef7c5e2b19cfc48aac5f17c75e8eb14"],["/Swift中的模块和挂钩/index.html","74efa9811a72f93787110752877fc9a3"],["/Swift使用布局锚点添加约束/index.html","6ff5aa637220b4a6d5997d69ed88c42f"],["/Swift依赖注入设计模式/index.html","0b88192696f1c37b9542bb1897a9bb68"],["/Swift关于Dependency Injection (DI)/index.html","1ee9df161e987993e24f566381035123"],["/Swift初始化模式/index.html","454dc7e0bbc8eca4ead9c636908d4fd3"],["/Swift单例模式/index.html","cb4e9f761d9be80732aa6c11491e4548"],["/Swift原型设计模式/index.html","486ac89724dc4a536f29fecb9aa2ee67"],["/Swift命令设计模式/index.html","6897120569e8e9d65b2a22b5995ff4ef"],["/Swift外观设计模式/index.html","72af2efd09726e94b7d5e23d5a45bebe"],["/Swift委托设计模式/index.html","0c349da96ef49b8b492d1b954a9a80e5"],["/Swift对象池设计模式/index.html","cda810e963c07922b55c02dff57f68c0"],["/Swift工厂方法设计模式/index.html","76a8fa513888ab4538a44e53d6e3c7ac"],["/Swift带闭包的懒惰初始化/index.html","52218baafb0869cd2d2f16cb29d07fc4"],["/Swift抽象工厂设计模式/index.html","a86a64b7c26df0c101c92e85711747e4"],["/Swift掌握iOS自动布局锚点/index.html","9bc83c32f93658cc87a8de1054722f50"],["/Swift支持旋转的自适应单元格/index.html","0feb43b9773e245870be94207b77bf70"],["/Swift枚举值/index.html","0652a7a795c4047c7fce7894e838d8eb"],["/Swift生成器模式/index.html","3b0f7bfe5809b2f6037cfafe8084098c"],["/Swift结合Xib文件自定义UIView/index.html","04a1c7c5db266fd4d5bdf9a3c31a37f2"],["/Swift迭代器设计模式/index.html","1833bf6b06eecd196fcfeeab08a77a8d"],["/Swift适配器设计模式/index.html","e3059b5824cd5ddd426184dc7afc6496"],["/Swift静态工厂设计模式/index.html","659203ac5227362a71333890e2dba6ab"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","7b13789975fc3c86c129ca2df9cd57f0"],["/UICollectionView data source and delegates/index.html","341ef1b67c5a9ac65897140b8ce40163"],["/UIKit初始化模式/index.html","1824cfd8d587ff510f97c326254de157"],["/Ubuntu18.04替换国内源/index.html","ea113eeaf0046c1b5e9a9600e8f11e9d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c081a29e9abc4996120620f781b9cbe5"],["/Xcode扩展/index.html","3f8a12323f0734a372b4018d16138d16"],["/about/index.html","c9fa365643983a27e9b30f3635023ed1"],["/appleOS的Networking示例/index.html","3e5359f53df4741c9068b76134494b3e"],["/archives/2020/04/index.html","9a469f9d7ac440894f88ff21edd8b7ba"],["/archives/2020/04/page/2/index.html","261c318caafc90458f73045503c6623b"],["/archives/2020/04/page/3/index.html","45f0bcb23575e4ce6b79d0ff2668cb0e"],["/archives/2020/04/page/4/index.html","1db94603667df7da368ecbd317e36c71"],["/archives/2020/04/page/5/index.html","0eb3b3a91ccfdc192707d4dd373917c7"],["/archives/2020/04/page/6/index.html","e97ac1a77f647f3c694ae3974118cfee"],["/archives/2020/04/page/7/index.html","07c9f0830eb396969c4186afa5a8cd12"],["/archives/2020/index.html","32d6252f55f5c484475d79c22345190d"],["/archives/2020/page/2/index.html","b71e7d0b8612e92b75c2dc591ad959e7"],["/archives/2020/page/3/index.html","3cb514571c26005cf81d198ef1f7f1d8"],["/archives/2020/page/4/index.html","af272e6d9e727280076c09a1d1c476ea"],["/archives/2020/page/5/index.html","276da263934845ee4b6011c95b385aca"],["/archives/2020/page/6/index.html","5b0637f8d2c25d4436dfdebcddaafb50"],["/archives/2020/page/7/index.html","df12ac4dac3fc4df59bc2a4ad850a001"],["/archives/index.html","8bbf923e6f218ddb236dcd655c342da8"],["/archives/page/2/index.html","17dc0140b63ce95de55fa50bfc3f12b8"],["/archives/page/3/index.html","ef20abe5103bc8f91bfd0f217b531ff9"],["/archives/page/4/index.html","4ce19fdd9273ca2eb60c950e97664d5e"],["/archives/page/5/index.html","04d5bfb0975f053c443b78eb77c2587f"],["/archives/page/6/index.html","efab67e6a90eee1e320325969ac95879"],["/archives/page/7/index.html","781db95b64bf815f41fe70bcf5107187"],["/categories/Codable-protocol/index.html","6d5ef1fe94a1d3347ddc01b8ab2bfbe8"],["/categories/Hexo/index.html","6497e94fd92b641644e5810c7117f3fd"],["/categories/Server/index.html","f930d97e7f5c428dafa2ebcb6293db46"],["/categories/Swift/index.html","a827dd28f874548999263cc83c060a1a"],["/categories/Swift/page/2/index.html","c92926fad1e86104cd078173f29acaab"],["/categories/Swift/page/3/index.html","f0ce30e6802617f08e95e6c5435546c9"],["/categories/Swift/page/4/index.html","344a4a0aaebc604f304e8dd869a065f7"],["/categories/Swift/page/5/index.html","9506e5e733b6a6f4e469e1c2ac2e8c11"],["/categories/Swift/page/6/index.html","2a8fcfe876b21195be881bb884431e6d"],["/categories/Swift5-2/index.html","705ec4f941c23dff24023495e77a67f3"],["/categories/SwiftUI/index.html","1753f14f560f36141cfc3ee60ce57ed9"],["/categories/UICollectionView/index.html","aeb1f2e6e431218de6e6ec5a5f9bc2ab"],["/categories/UIImagePickerController/index.html","c8faf89b8790f65be0be81b31784e31f"],["/categories/UIKit/index.html","329e58cac2ac9674d29b23364486278a"],["/categories/UIKit/page/2/index.html","61518cc3dba867c65a264c774db9a98d"],["/categories/UIKit/page/3/index.html","31b7cc96610c146e8ff4c1a7bb6e733f"],["/categories/UIKit/page/4/index.html","970cfb99713b0d6bf5f9337586cd66b6"],["/categories/UIKit/page/5/index.html","2df6d5286351a69b66e09988ae2aa2a6"],["/categories/UITableView/index.html","93135039d4840bf9a49a3df5636e3a6b"],["/categories/Ubuntu18-04/index.html","74bbae94a1f189bac43b24ae3d43eb43"],["/categories/Ubuntu软件源/index.html","a66d31b28ccf2b25e0c17e1689357d7f"],["/categories/Uniquely-identifying-views/index.html","7ca4688270df1f1d20d69c6c55e5bc41"],["/categories/VIPER/index.html","4c8954f77c955f82ed689b7359a1ab94"],["/categories/Vapor4-0/index.html","32de8d21234860c16dc7ad6bb32f75d1"],["/categories/Xcode/index.html","ad52b2a7b46eef707f4585371b78b6d2"],["/categories/appleOS-Networking/index.html","daeb9d375b2b8f9ebb48c9eb9949de39"],["/categories/enum/index.html","0040cb121611adf40104000baf6f429e"],["/categories/iCloud/index.html","7a8261914238a75d70fac1c1b1deed5f"],["/categories/iOS/index.html","a00b27679e9b6d0f8f4876f480280717"],["/categories/iOS/page/2/index.html","3f493d94c291589c934352d622a722f5"],["/categories/iOS/page/3/index.html","e1f2a689fd604fd4cd82e4d913691c37"],["/categories/iOS/page/4/index.html","b9c6d3fd4ae0f3d82f6d3419566ec4ab"],["/categories/iOS/page/5/index.html","b6ea268d54dbfb83ec02f5b44bc1dc00"],["/categories/iOS/page/6/index.html","5c017ce96b2881177df4bc1fb1976271"],["/categories/index.html","3fe6a030116754f99fba0f482bcbff4c"],["/categories/子类化样式/index.html","a8f858cb7003c21cc5523fe2621d9ffb"],["/categories/架构设计/index.html","c8f179f865f8ebabe2bba75e0ba9def0"],["/categories/用户体验/index.html","ebd3ab48aa155ffb1c4e361d0404f92c"],["/categories/设计模式/index.html","98478f127ddb7c7281f0e9c0c88185fc"],["/categories/设计模式/page/2/index.html","e52490e56b238f7aca5d5acc386380b2"],["/categories/设计模式/page/3/index.html","7ccb553ea9b4527dd0d9654cb638b966"],["/css/main.css","af85264a9b3e43baee029f6b3052bf32"],["/hello-world/index.html","d9f5a0909ac5349fa9df905b2e1abf02"],["/iOS VIPER架构深入实践/index.html","e78740b65b860415d8eca2135087fc21"],["/iOS如何使用iCloud文档？/index.html","d2f17ab08f2340be35f92d9b85272c7d"],["/iOS子类化样式/index.html","a6953897f0f70155cb681066b34b8026"],["/iOS自动化布局编程/index.html","1d6ad62c69a8824ee10df488258bb58c"],["/iOS自定义转场(By Swift)/index.html","f50a332f041da2d36cab84945faf9a9d"],["/iOS项目架构：使用VIPER/index.html","fdf403b68f8b787530e18ab3e6391036"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","bd1c729aa684b2125bb1441b4a153520"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","aec39a33d728d933f8c5a1733a875877"],["/page/3/index.html","7aeeb6e3679baec64a4445c47674f642"],["/page/4/index.html","beb55328100344046d52d967d6d106a7"],["/page/5/index.html","601b1b42833921d773a6f507bc1bb842"],["/page/6/index.html","8a6e9b9dda9a2400a6f1db9da93b8238"],["/page/7/index.html","9fd34bbf13899a9028448812edc21f2a"],["/schedule/index.html","02437229b35996260369e3f044f70237"],["/sw-register.js","80f12c0c8b21cc0fab30e424c9aae06a"],["/tags/Codable-protocol/index.html","87155a7db8772cab631d6d7087b2c5e5"],["/tags/Collection/index.html","a34437dba2b359d00bf36ac7aca058e6"],["/tags/Collections/index.html","1dd9bf7a67306117a0593ba22631877b"],["/tags/Dependency-Injection/index.html","8d302b524bae6b8f25ff1b9fbb9591bb"],["/tags/Modules-And-Hooks/index.html","b6f61ef76c41d90dd560ec2467bc7ec2"],["/tags/Server/index.html","02e6288849dd25631cebaf4953260a8e"],["/tags/Swift-Package-Manager/index.html","eaea98d713828dc10eb99742a9732393"],["/tags/Swift/index.html","ae445642f91c6b090ce244b17ac76ddb"],["/tags/Swift/page/2/index.html","4da8102a3b2e17d02ffd422eb95bd081"],["/tags/Swift/page/3/index.html","765c20168bbf49e795f056e22e644a4b"],["/tags/Swift/page/4/index.html","31f296594de33806944a23769f11b813"],["/tags/Swift/page/5/index.html","127267199adb8ad69e349132068887e1"],["/tags/Swift/page/6/index.html","8e4b664febc0eab8b46b5d86dc3750a3"],["/tags/Swift/page/7/index.html","fc7e48445e2e68e27955a65e475dbf83"],["/tags/SwiftUI/index.html","2953185c77612409f02fbe003a377b78"],["/tags/UICollectionView/index.html","fe76b1a1e320d62151fb1530a4c8bed9"],["/tags/UIColor/index.html","1a41068cd98753576a36547b824cf6c9"],["/tags/UIImagePickerController/index.html","10c3aa7fc2f03707444a047c2864e8ca"],["/tags/UIKit/index.html","225a304cd22b0986eac8da6d272153c4"],["/tags/UIKit/page/2/index.html","79e76c7d29ff6cf06554b2d7c2607978"],["/tags/UIKit/page/3/index.html","2a772ca10faf92be6aaabcb62e16d972"],["/tags/UIKit/page/4/index.html","841e5e99fc0d15ed124b959bdbc67fc8"],["/tags/UIKit/page/5/index.html","ef87f1d5615d602cecec9952c40922fc"],["/tags/UITableView/index.html","918d6eb5af070befde5a7964d06c0a73"],["/tags/Ubuntu/index.html","e8e4ff7d5b95c48cf7592c63258ab69e"],["/tags/Uniquely-identifying-views/index.html","e364bd37d3778ddfcd026cd0ede0c32c"],["/tags/VIPER/index.html","19454eb5cf88dc1e53ef8f045c5642a5"],["/tags/VMware/index.html","311aa9ae4df03c4e8b28928263e0fc12"],["/tags/Xcode/index.html","a7dff96adc5f4470a48921007817bfe5"],["/tags/appleOS-Networking/index.html","b007a7ee61a2c19d7ae9d113b14a3b7a"],["/tags/enum/index.html","b70c6c0c9a6eb7adcd35ce226d6d637f"],["/tags/iCloud/index.html","d5667d8ebad662b2ec7cf88b3b1b81e9"],["/tags/iOS/index.html","b5cb3c0e18af0e39cf15d5dff6212705"],["/tags/iOS/page/2/index.html","0fc162a2908b392bbe4fdab38f54b411"],["/tags/iOS/page/3/index.html","d44b4fbb7d879b499be32c4609ec8fd0"],["/tags/iOS/page/4/index.html","8f6161f24a094898a90d3f0447578ec2"],["/tags/iOS/page/5/index.html","9a0e5f2a9d3325f59ca26942fb646157"],["/tags/iOS/page/6/index.html","0cac7d862e93723f372e958d32ead89d"],["/tags/index.html","53304c560c8dd2c3c3b2d3e4d53eb972"],["/tags/non-optional/index.html","391119c266c862c2f868eac815372232"],["/tags/optionals/index.html","56945d268c845074b8babf00f5769cf2"],["/tags/transition/index.html","b283d91d9d9a8a22e8194634b5623ede"],["/tags/依赖注入设计模式/index.html","e2b88547506645668c27cb7c016016dc"],["/tags/初始化模式/index.html","27659a8e1934bc6c788d271f1f6bbf09"],["/tags/单例模式/index.html","d7a41c463a9f5d5231011a539987b94a"],["/tags/原型设计模式/index.html","b32e2374e91c7af742d1bfef19a1d41a"],["/tags/命令设计模式/index.html","b3fb774e1321e09c2e05a2275b9da098"],["/tags/外观设计模式/index.html","164a751ee1c0b74e9edc6a76e0a5ed1c"],["/tags/委托设计模式/index.html","7314948d71363cf91c1b8dd50cc8e807"],["/tags/子类化样式/index.html","61eb95727b91b03bf18f8498489a36b7"],["/tags/对象池设计模式/index.html","196b397cc535473c67967f1bb1f8a13f"],["/tags/工厂方法设计模式/index.html","abe0df2a1c113bb761d746bc8bbd6aa0"],["/tags/工厂模式/index.html","67e12ffd1e8a9dff76c62724837e376c"],["/tags/工厂设计模式/index.html","905a54aaf39086bebd5af9784f2b5571"],["/tags/懒加载模式/index.html","45a44dc0d79f7fe35f1554f4ae8dbef3"],["/tags/抽象工厂设计模式/index.html","f141e88c2f7ba12a7f22f4ad33104dc6"],["/tags/构造函数/index.html","433699b9a847010dcc918d33abd9835f"],["/tags/架构设计/index.html","faa542160e9c9c95db92625a913b454d"],["/tags/生成器模式/index.html","fb17d4e63321dd51e5b624080c31c6ff"],["/tags/用户体验/index.html","05d835b0fd484d158aed7c2aae0b4457"],["/tags/自动化布局/index.html","510f9dc1013b4a6bc1ea185119031498"],["/tags/自定义UIView/index.html","f62718aca2879186be156a76800c4a80"],["/tags/自定义转场/index.html","b7e6c08185bc1cbaf83e24c3e6b9283e"],["/tags/自适应布局/index.html","8b8850feb6bcedea64c3e18f2b0806fd"],["/tags/设计模式/index.html","1330ae7262666974230a7273f7df2c16"],["/tags/设计模式/page/2/index.html","72e3b41dd50833ead3e5d1d1aa204b8c"],["/tags/设计模式/page/3/index.html","b8c317d94a14dbd8eb77f2f29fa3364e"],["/tags/迭代器设计模式/index.html","5939ae57ef2c8bc5f5e8469711994b2f"],["/tags/适配器设计模式/index.html","30c78f2d8b2638695b69ab0616e29d2f"],["/tags/静态工厂方法/index.html","848e57d17e268dc7ab1eb2bf182294fc"],["/产品开发的幕后花絮/index.html","66b7c07777f1c185652e697205d21c25"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","cf21723e425081a60dec4233ccac9a8a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fb693487b53933d16c7b56255521c5ea"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","893d1456f4c3ff8670b04a2cb03d112a"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f60fd5394f2e5883b86b6da2fb901519"],["/在Swift中创建自定义集合/index.html","3ffe677910a52ab75a9ee85465eac3ed"],["/在Swift中处理非可选选项/index.html","27d393c6cddbead3107d283c70de6afb"],["/在Swift中重构单例模式用法/index.html","4b726fbd6251ede5174d64d61d4e4aae"],["/如何为VIPER编写服务？/index.html","eeb59f09b1486ab3c751723d6d8cee0c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","d26c3e81d0e5a377737bf4d90bd03c7d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","900a047e6bcf73b0d3a72c92917cba52"],["/掌握VIPER架构/index.html","32242e7a7dc3f9c112d137b41f70c563"],["/揭秘 WordPress Hook 系统/index.html","b9ef70a753a5659f767a395618381795"],["/比较工厂设计模式/index.html","cc433a56552a06759e32db8caf4d9f7e"],["/深入研究Swift框架/index.html","663b28fabd791797afabb0f2897cf7c4"],["/适用于iOS开发人员的VIPER最佳实践/index.html","480d028b855a9c528e26b6649917d002"],["/选择Swift而不是Objective-C的5个理由/index.html","ea7521220b923e2714571df73b46c511"]];
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
