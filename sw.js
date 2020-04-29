/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","4e0ac89fc1a38dff79eda08d6742bb84"],["/Swift 5使用UIImagePickerController拾取图像/index.html","90a8387f687364065205bbd18fd08a32"],["/Swift Lazy属性初始化/index.html","74c3a78ae39bd39219d8d19532b953f1"],["/Swift UICollectionView使用指南/index.html","520fe4f5114fed6d0914f818084c7fd8"],["/Swift 唯一识别的视图/index.html","8ba68f17af43d69c5f806b36f9d748ea"],["/Swift 如何学习现代UIKit？/index.html","5fbf1b622911c2a0dc102cfad3e055fd"],["/Swift 选择和播放视频/index.html","0e212d64e3076e5d0765aa25bac8bc19"],["/Swift中UIColor最佳实践/index.html","e2ac883eacd2c01823c3db0e8bb5d118"],["/Swift中快速简单的工厂设计模式/index.html","5c31474f9fda71c3d2b0114e31f2580c"],["/Swift中构造函数与静态工厂方法的比较/index.html","6474f8cd29d7d98bb0c635adf75b617e"],["/Swift中的UITableView教程/index.html","9cbe4752e5722a1c1b52610cfb30eb19"],["/Swift中的懒加载模式/index.html","47fbaaee170d5cfa36186be8760ccbe5"],["/Swift中的模块和挂钩/index.html","c5795fa1c44ede63644df604f9d26e7a"],["/Swift使用布局锚点添加约束/index.html","4081b719e76ff1f04b1ed1c422ef7ad1"],["/Swift依赖注入设计模式/index.html","055d934f1f99fad79d28632dd48c5ba5"],["/Swift关于Dependency Injection (DI)/index.html","385afc8f5ff8420741b20fb869588b4d"],["/Swift初始化模式/index.html","a821ab3e008e6f85be8c15dc2a264801"],["/Swift单例模式/index.html","600b54e36950d462023d74dff96c9fbe"],["/Swift原型设计模式/index.html","9c44074d3f69cc9dce201b02be90863b"],["/Swift命令设计模式/index.html","031be58ac4c56ebdc0daab6ab0354485"],["/Swift外观设计模式/index.html","c3c9d3c0db8a14667e426cf69794148e"],["/Swift委托设计模式/index.html","40cebd48512fa5e5f8bf45a0dcb9060a"],["/Swift对象池设计模式/index.html","29eb7548be5c394695831ff69ea1c4fe"],["/Swift工厂方法设计模式/index.html","c41e4cfb8c8d03de869ab1f77b9d3ed7"],["/Swift带闭包的懒惰初始化/index.html","fe898037b54924bbd66d2d22d2ee49a6"],["/Swift抽象工厂设计模式/index.html","7d155fc7e8497474a2c5f4237f601608"],["/Swift掌握iOS自动布局锚点/index.html","b661fc7ed8444c202260eb298854bd86"],["/Swift支持旋转的自适应单元格/index.html","30266a68d05aa06f90d2b17426ba8e48"],["/Swift生成器模式/index.html","e7bd91b82a9237daccc80fca4719776d"],["/Swift结合Xib文件自定义UIView/index.html","7a1772c8532b27521eaad404b4de094b"],["/Swift迭代器设计模式/index.html","613b86c60ac907bebd19269d94f1d34b"],["/Swift适配器设计模式/index.html","1cb3bef3ef9121fcb0368074869774dd"],["/Swift静态工厂设计模式/index.html","deadf13745e19366302bcd1b88de22bf"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1b336a6769895037134bc273b059e90d"],["/UICollectionView data source and delegates/index.html","74a1322e589088bc898c540cd47453a8"],["/UIKit初始化模式/index.html","c55b3b211ab6ebab83ecda841de43c62"],["/Ubuntu18.04替换国内源/index.html","8977453b073a835d8b1b9faa5eef1593"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","5b89bc2fafb407dfce641cb8f934eb16"],["/about/index.html","338011ff3e1c272361036e0ad2096d3f"],["/archives/2020/04/index.html","2efcb49ba5c7792ece2e7b0e25bb8164"],["/archives/2020/04/page/2/index.html","7e97c952dea58be7f018e087a49b3bd6"],["/archives/2020/04/page/3/index.html","290d1f681efd0d519ee15cebd4e66580"],["/archives/2020/04/page/4/index.html","09954a506e0146b6b09b738f518e251b"],["/archives/2020/04/page/5/index.html","f21ce7943059a71b48376bb0b68f1987"],["/archives/2020/04/page/6/index.html","94ec590965bfa98ba19f9b4b5fdbc814"],["/archives/2020/index.html","8dce4c25d506184da9a586efe531dfe9"],["/archives/2020/page/2/index.html","963711dc382e57df08806309a5a1b41a"],["/archives/2020/page/3/index.html","4f052f4cc87d33e3787a15be73701a76"],["/archives/2020/page/4/index.html","633fdaf929b0de2e4a4f44310fef773b"],["/archives/2020/page/5/index.html","b72723ee0450eed7d68284f45ad21db2"],["/archives/2020/page/6/index.html","6c8fc765f5980e29ac3f8a6405f2cf94"],["/archives/index.html","84dc651e2b679c231bce4cd826b1821f"],["/archives/page/2/index.html","696f0cb3cb555cf27c9eb8d606d1ac29"],["/archives/page/3/index.html","ce98350657462440db41e09c9044a7cd"],["/archives/page/4/index.html","88e56ea572c6a0d04c56187e033dd359"],["/archives/page/5/index.html","5cde2910bf28a89cf941cbfcc0a2a741"],["/archives/page/6/index.html","8c6eb935d608e5356fc59885c483e5c1"],["/categories/Hexo/index.html","d91da66ca4922091c34df20acd7243c2"],["/categories/Server/index.html","5c3a786986c5bb074022e4824850cdce"],["/categories/Swift/index.html","ae07afcb100f8fcd9a140910bbaaab7a"],["/categories/Swift/page/2/index.html","aaa3ba88ae0ee861df2f6134164a1808"],["/categories/Swift/page/3/index.html","3faa867ae292cf77dd93c161ff36d19e"],["/categories/Swift/page/4/index.html","8b27b4cc443761ed1bb9bbd591ac11ba"],["/categories/Swift/page/5/index.html","e50ce0687c143c40ab3ce91158bd4516"],["/categories/Swift/page/6/index.html","6ea3a6ea4ef8618f376970bc02a1b925"],["/categories/Swift5-2/index.html","62fe1a5a5f611a25fe96bfa5d70c94f1"],["/categories/SwiftUI/index.html","f2fc55567c8301a05c5f46755b03a603"],["/categories/UICollectionView/index.html","fe9c0f17bb733309eccbb54f38f5d1b2"],["/categories/UIImagePickerController/index.html","22255e5c695d969abfe7c46bf60d25bb"],["/categories/UIKit/index.html","425e4e4fdae01c8a059c4ebd7e8bc042"],["/categories/UIKit/page/2/index.html","8599600797a4c77cf39ba27bc33b6289"],["/categories/UIKit/page/3/index.html","a081101268f7fcec15c329a6ba977eda"],["/categories/UIKit/page/4/index.html","bb43d23a44c8b00d072211d37c197f35"],["/categories/UIKit/page/5/index.html","cc89c133652fbd52cd0bc5fde70d594d"],["/categories/UITableView/index.html","8df5187e16cd87e1045d436778d5326f"],["/categories/Ubuntu18-04/index.html","5008cf3e16e92fd41e0f3895f41e0412"],["/categories/Ubuntu软件源/index.html","d771e23c10a276dbc5f380f440b2a02d"],["/categories/Uniquely-identifying-views/index.html","0ff37f00990faf77ac4be31837653bd1"],["/categories/VIPER/index.html","ce574db0c83fe1bc5a5ef513ce8e3f0b"],["/categories/Vapor4-0/index.html","3055b122625ea5f7315ac010f4baf08a"],["/categories/iOS/index.html","6469c1045b3c3ab806b80c75722a54a0"],["/categories/iOS/page/2/index.html","46b277e8f2a3fb4f82cb4b5d4e476a49"],["/categories/iOS/page/3/index.html","3cb55ed9736211125cb1324ad7a0612d"],["/categories/iOS/page/4/index.html","f76ce6624255f5c769bb3c280037e332"],["/categories/iOS/page/5/index.html","2c79f57ed6bf0f06a8a83ecd22779478"],["/categories/iOS/page/6/index.html","4ee6e5094ce317486c1dbc55c7132e4b"],["/categories/index.html","e38cb856ee801fc35f4e1ec0372eacdf"],["/categories/子类化样式/index.html","31180a40b6ce78e6a0b74b7d88fe6d21"],["/categories/架构设计/index.html","3fb4a3e9e8ef396cdd068ad902f230a6"],["/categories/用户体验/index.html","6755a2ffe5849fed1691af9b05e4119b"],["/categories/设计模式/index.html","f9e48ed415c28359cbdbc09ad3fcb099"],["/categories/设计模式/page/2/index.html","8d299263b4b747c8f8d5f57554019df0"],["/categories/设计模式/page/3/index.html","0c3277110105288d04ce777c10938dc7"],["/css/main.css","48fb274033b55ebb094ec654f9f239e2"],["/hello-world/index.html","1c5c2d6ca19511c1d4342be8840065a0"],["/iOS VIPER架构深入实践/index.html","bb17976da238bd0e07454dd72e4ede2a"],["/iOS子类化样式/index.html","4195f7d8a973b8e1567745477b3ecb3c"],["/iOS自动化布局编程/index.html","ffdfd88ee8840cc9ab52d0d37a212875"],["/iOS自定义转场(By Swift)/index.html","0ad7f8ed44fb3e945933536e48a0a083"],["/iOS项目架构：使用VIPER/index.html","9af26d7018e56c615d8e7020fe15d646"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","022b596d0d780ce09f49f33c2ecadb38"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4e8c9193951775691d65e7a6a79f1ead"],["/page/3/index.html","4768352a5ff742ba2bfd5f0e43a3b998"],["/page/4/index.html","5e827f45ad5af041bbeb42c2a67933be"],["/page/5/index.html","cc802967851408bcd9b46fdf57a5cb43"],["/page/6/index.html","b9cada2d1428bf880171aae01c820678"],["/schedule/index.html","d068084d1da830168e652a0d3250b947"],["/sw-register.js","b4677f57fe049ebd60566a99bb7a77da"],["/tags/Collection/index.html","792edce0835d4a1cc330c7d9107f35c5"],["/tags/Collections/index.html","b25e1074297dbbe39beb7e7e52b325a6"],["/tags/Dependency-Injection/index.html","576f8e2d8fbc5c45890528bd2f9e8728"],["/tags/Modules-And-Hooks/index.html","ab322bb24ff77d1e99f83ed730f0183e"],["/tags/Server/index.html","c8116ad2e761a67251b562cd928b5420"],["/tags/Swift/index.html","1cb549d61df434a48ecc82dd1090b47c"],["/tags/Swift/page/2/index.html","4abb8af590726d3c1722c4cc9d217541"],["/tags/Swift/page/3/index.html","7c8f77da7ae8c8f2c51e0b5526390d8f"],["/tags/Swift/page/4/index.html","b1ee5a5612dde7a66452df12bfe9a0bd"],["/tags/Swift/page/5/index.html","bfab2dbab0d01c8ee3fb0d0c7a3010a2"],["/tags/Swift/page/6/index.html","723adf3d971ca1bd1ecce15cb90332e7"],["/tags/SwiftUI/index.html","914dc3d5a810a921bf593be8b1b134b6"],["/tags/UICollectionView/index.html","a8ef919bab840b036d3c2b63265f352d"],["/tags/UIColor/index.html","d7a23bd9a15ee44d4ec78bb86893e08d"],["/tags/UIImagePickerController/index.html","6699b3489ae453ac887e1d5d703e1cdc"],["/tags/UIKit/index.html","8f839703f1b368e9feebb91b7b6883c2"],["/tags/UIKit/page/2/index.html","b7b524594c288575353ced51ca47eca0"],["/tags/UIKit/page/3/index.html","b34d762915c9b85e25e26e8e0bdf773d"],["/tags/UIKit/page/4/index.html","dea48c6e7f52d8c7badea171a120e437"],["/tags/UIKit/page/5/index.html","9f6f311e9069e91dcfc0804b9950cc25"],["/tags/UITableView/index.html","2409df90a2b9c7299fe6f5a6c63c879d"],["/tags/Ubuntu/index.html","c09bd12434436b8c05852cbab5c6d3f7"],["/tags/Uniquely-identifying-views/index.html","8862ed4a858a730ad70baf93a2fc0f5b"],["/tags/VIPER/index.html","d147413dd57c81ea0e0881255bf44e3d"],["/tags/VMware/index.html","f003de67e81fa0654467f848fe4292f3"],["/tags/iOS/index.html","eb947746c1bc1ce12be3b40800cb72c6"],["/tags/iOS/page/2/index.html","99396f2732b2398501a928075b5ced72"],["/tags/iOS/page/3/index.html","e2e581e86c512276f2417fceab130dd4"],["/tags/iOS/page/4/index.html","3f3026137aa3cda0c6f4dc9421103121"],["/tags/iOS/page/5/index.html","5ff37a9ad6cbd9566bee8584ad4051bd"],["/tags/iOS/page/6/index.html","f260c5845c3e68246027cd0978593675"],["/tags/index.html","5971c59c5d0316a9e4812985e7fa05df"],["/tags/non-optional/index.html","9014b46a0bad9f0c7da3b2d82c6e2392"],["/tags/optionals/index.html","2bc507d58a13dcdeabfc479682189850"],["/tags/transition/index.html","35eecc3bd456d2eb15453c4f7c480ceb"],["/tags/依赖注入设计模式/index.html","abbf35da68381b5f7c38606053550ad4"],["/tags/初始化模式/index.html","bf169fe792e5dee34c7c302fd67810a2"],["/tags/单例模式/index.html","f02a680440648f87c536cf58b3fa8964"],["/tags/原型设计模式/index.html","c52544234eb9c88c4684bcaca0030668"],["/tags/命令设计模式/index.html","e34ac047ac3c263427aa0fb55bd5ad80"],["/tags/外观设计模式/index.html","609f9ff23daddcd298a93cee3fbbead9"],["/tags/委托设计模式/index.html","77943bd201d85869cb8f564b768d2e90"],["/tags/子类化样式/index.html","10bdebcc906e07b024512f5bb1b100d8"],["/tags/对象池设计模式/index.html","8ddde529204223a515c11c89f49fee9e"],["/tags/工厂方法设计模式/index.html","91b5ce4dbd52d5a9870e6d32b887c62a"],["/tags/工厂模式/index.html","d8ecaad280dae9b425f477b9ab1cedbf"],["/tags/工厂设计模式/index.html","23f634acc29ed7cfab2690538b627d41"],["/tags/懒加载模式/index.html","b7adfa5653192c0a41ebc4a9be3a8d33"],["/tags/抽象工厂设计模式/index.html","13ebf3dbc6807f9e5a6087178e853508"],["/tags/构造函数/index.html","afafabd866fb2dfa26ae715086c42a05"],["/tags/架构设计/index.html","bec5bcd214d903ad415f9140f68476af"],["/tags/生成器模式/index.html","a27e54ce1c578d79c1d4fd8ee7a259b3"],["/tags/用户体验/index.html","f1148f5bd083639e0c8a31555e05dc55"],["/tags/自动化布局/index.html","ee5a48562241a9da203ca30dcac60acf"],["/tags/自定义UIView/index.html","fa5f0d4da91306e5151d090de91621d4"],["/tags/自定义转场/index.html","bf08b7d364d219ff884167d06cc3ebc2"],["/tags/自适应布局/index.html","6b25cd635bd37d808391989cb3cdea6c"],["/tags/设计模式/index.html","39338a84726ed0b5c50de1436256d10a"],["/tags/设计模式/page/2/index.html","5170b6370a45053406d54a3df4ac2ac5"],["/tags/设计模式/page/3/index.html","0f117882a607c5cba6136ed3f7b06e26"],["/tags/迭代器设计模式/index.html","ec845947384a253685eae1112ece4adf"],["/tags/适配器设计模式/index.html","0eaf43a72503d8709dc24e6d96110a49"],["/tags/静态工厂方法/index.html","127918c09decc5e8d3c69d3d6b9405f3"],["/产品开发的幕后花絮/index.html","b134cf57f4081927037af9d472d96543"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a213ec7450d1d6fc85ac518913f47446"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a1e7cef5cd5ee8bde20eeef36a618ac2"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","fe32d153040d9c54b16b29298d6c1a18"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","7b1394c7f22a6767214e6ed1f72a1738"],["/在Swift中创建自定义集合/index.html","539ebd2d007188472d26f361a086899e"],["/在Swift中处理非可选选项/index.html","048fcd8a30b8189157f2ddc6134afb0b"],["/在Swift中重构单例模式用法/index.html","9d93054d4ef14a4bd3bc285644ef3bf5"],["/掌握VIPER架构/index.html","00d210d77deddf40edd9b082f71994ed"],["/揭秘 WordPress Hook 系统/index.html","41c2097fe226c4233dfef69ebee207a3"],["/比较工厂设计模式/index.html","f3ba3c24d87c07ad6b0d9c20b96ccae1"],["/适用于iOS开发人员的VIPER最佳实践/index.html","aa041ddbf9624b4addcbee556a1a4311"]];
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
