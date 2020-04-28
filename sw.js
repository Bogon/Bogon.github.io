/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","519fc3e50ad92e2ea3b676616a38f5bf"],["/Swift 5使用UIImagePickerController拾取图像/index.html","df40f4c71bde847706c937bdf1565ba0"],["/Swift Lazy属性初始化/index.html","e9ed307dd0f1ecaa6f98097970e292e6"],["/Swift UICollectionView使用指南/index.html","2b74a885e64d22dcc5b15b579cdaec99"],["/Swift 唯一识别的视图/index.html","4b9f35ef883534fafa8382041e829b11"],["/Swift 如何学习现代UIKit？/index.html","a1201b599658b5d58a3e80cab4d63c20"],["/Swift 选择和播放视频/index.html","7baeb21af0154844a19edf1c8fccea75"],["/Swift中UIColor最佳实践/index.html","ddd9e950db11307cc26003c59454f19a"],["/Swift中快速简单的工厂设计模式/index.html","7f261f643070a40f0ba4f298a11f731b"],["/Swift中构造函数与静态工厂方法的比较/index.html","3995a35b5a6a409ba0bc858957570467"],["/Swift中的UITableView教程/index.html","49fbacdef37971c3374d25cf2f415a80"],["/Swift中的懒加载模式/index.html","821aa62fbfe851f762914a845fc1c223"],["/Swift中的模块和挂钩/index.html","465f31171ebf01587938a37818fffb64"],["/Swift使用布局锚点添加约束/index.html","6f2912b438e6504cb17868cb16749a58"],["/Swift依赖注入设计模式/index.html","33254c302a4bec08a1f9f0d9d26a31c1"],["/Swift关于Dependency Injection (DI)/index.html","046949190bc2f1e27cebfd25969ed3fa"],["/Swift初始化模式/index.html","ece2c02331e2cbe0ca4a447aa9177fb0"],["/Swift单例模式/index.html","a817cb4408ea5636007be3f770067296"],["/Swift原型设计模式/index.html","2f3a3fdce3aae68d41f1b4fb95e3eac6"],["/Swift命令设计模式/index.html","bead15ef8f63683e25a6e012018bd330"],["/Swift外观设计模式/index.html","fd682cba171cd9c7d1cf379e40ce5b76"],["/Swift委托设计模式/index.html","f96642ea30dede06b5cdb515cfad3d5d"],["/Swift对象池设计模式/index.html","448e9ce17b1980f15d3888541656c14b"],["/Swift工厂方法设计模式/index.html","8a71851e70b204ac012373802549a032"],["/Swift带闭包的懒惰初始化/index.html","8941d0c55787a7fe2b5d5f104860a224"],["/Swift抽象工厂设计模式/index.html","c5dbf69537edb68e730dc27e9fe546ae"],["/Swift掌握iOS自动布局锚点/index.html","49095d99ca2a01461845d9aaa88d0e52"],["/Swift支持旋转的自适应单元格/index.html","988e037466c3dfcc978409a0747d1b68"],["/Swift生成器模式/index.html","7d11d7d1a6a956151ab5ef442f536479"],["/Swift结合Xib文件自定义UIView/index.html","2135fe88f4a9613ae6fb0c56ce5f1234"],["/Swift迭代器设计模式/index.html","7212044306d6a5686a232bda5a722a8d"],["/Swift适配器设计模式/index.html","0ec5cca3d882c1b6004f6f4a3f1a3c1f"],["/Swift静态工厂设计模式/index.html","c0a227088deba3c807461c85edc2d40b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3bd4620f3d5bfb554795f3f2fcaf4ff0"],["/UICollectionView data source and delegates/index.html","ca6e1b11cfdd6323354f20bbe9003511"],["/UIKit初始化模式/index.html","081f23856467a03f95940d92c764671a"],["/Ubuntu18.04替换国内源/index.html","420b6b17f0e090716347c3009de2e281"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2c1056ac7994079e1d2a6be3be4e1b95"],["/about/index.html","1e6ccaf84e4c1bab281aac746b24abd3"],["/archives/2020/04/index.html","f4977c9950a0bc605f4668c154cd4c5d"],["/archives/2020/04/page/2/index.html","a0a71a02d408f3b3c48f45106daf1c98"],["/archives/2020/04/page/3/index.html","e30cc900214e7fbe29274783f20c2d5c"],["/archives/2020/04/page/4/index.html","c66666d1b41945fa65f926af5e46d890"],["/archives/2020/04/page/5/index.html","7b0f562f57cfa4ac5a1506ccc3768de9"],["/archives/2020/04/page/6/index.html","3a386d3020ac6579edc2f4afbb9d07d1"],["/archives/2020/index.html","7ea2f183a911e58e47551a3f6a882d4a"],["/archives/2020/page/2/index.html","afc09848ed01733a548483b1d48ddb89"],["/archives/2020/page/3/index.html","fcf559211945daa8169c86817de53dd0"],["/archives/2020/page/4/index.html","47de905639106b9617cebfb0e5a70303"],["/archives/2020/page/5/index.html","bcc1423b3144272f0b45d58aedefabbd"],["/archives/2020/page/6/index.html","96c28fc1551ba500e62c280403195583"],["/archives/index.html","386aa42e8054df6a250b78bacd0d6880"],["/archives/page/2/index.html","65533f3edc7678222246aba4e8aace40"],["/archives/page/3/index.html","6514d9b6777a7a420fef94d4c8bb4cbd"],["/archives/page/4/index.html","383862c519be796a7a2e89f8a43f029e"],["/archives/page/5/index.html","e84e5061b1c67ebd3f77e00e8b4cf289"],["/archives/page/6/index.html","55f0bd5107f8dddf404d0ed423bc204d"],["/categories/Hexo/index.html","a24d78e5025052e47dac02feb84f9d7b"],["/categories/Server/index.html","a451b2c8bceee53009c3c0135556e32b"],["/categories/Swift/index.html","b7fd1e5e961c1cf2ee919edb997e2995"],["/categories/Swift/page/2/index.html","78f74e2b4a7c7f1f13096d69fde2d598"],["/categories/Swift/page/3/index.html","1308b133cee2fe30592641d20e3c89dd"],["/categories/Swift/page/4/index.html","1647729d415c6116d8477b343c2948d6"],["/categories/Swift/page/5/index.html","9bd5e391d29df3ebd69ca4e191b69c31"],["/categories/Swift5-2/index.html","0353b355fa7d590709ebfc462f45ebab"],["/categories/SwiftUI/index.html","41fe32288750bcff1e7f11668055e69c"],["/categories/UICollectionView/index.html","d77c1afeff24eda77333b8ef387f57ed"],["/categories/UIImagePickerController/index.html","b71d2292cdb3e047a58d8f2997c40c76"],["/categories/UIKit/index.html","8c79d6e5a3845076144830fb23304b98"],["/categories/UIKit/page/2/index.html","fabad959d173e1bd1c8aa0452cb775c2"],["/categories/UIKit/page/3/index.html","8ef19153eb1b3899d4696f82abfbfe78"],["/categories/UIKit/page/4/index.html","ffc2113798c8b9412b580a653bd57dab"],["/categories/UIKit/page/5/index.html","55e1f9803dcd3818fcbeeda38b265311"],["/categories/UITableView/index.html","66ebaf7306a1ddaacb874c60d54367f2"],["/categories/Ubuntu18-04/index.html","babb5e0fc8022ad18145d008f419bfef"],["/categories/Ubuntu软件源/index.html","634635c33bc3ba9da5125eb0dc073cc9"],["/categories/Uniquely-identifying-views/index.html","33a6325a756c70603615097d27d99ec5"],["/categories/VIPER/index.html","c6b9e6402718cf48e703b78e379fcd11"],["/categories/Vapor4-0/index.html","60cc84da0b0b85581957e575156f4752"],["/categories/iOS/index.html","9b6dd89be6f264ac9cd9e6a4cac1209c"],["/categories/iOS/page/2/index.html","1f5982eb6a393be0678bd4de5ec76636"],["/categories/iOS/page/3/index.html","02ffe9d8bf0372486f05ed102404dbcb"],["/categories/iOS/page/4/index.html","e3d2c622e62032f99569e1b0e7ca76ec"],["/categories/iOS/page/5/index.html","609667eb8d95c5cf38bf643f4fc61b04"],["/categories/index.html","9432a0bc0d16b6fd16f5aae0af962983"],["/categories/子类化样式/index.html","234c4bbc9672d23890c48fc5fad04b8c"],["/categories/架构设计/index.html","43d82847fe6bf364ed4a2429ceae20c1"],["/categories/用户体验/index.html","9263c5f06f6233b2dc99015e5cb4bb12"],["/categories/设计模式/index.html","6b33de4a57f05785d1e1a071174de38b"],["/categories/设计模式/page/2/index.html","ffb89bddc211cf43fcf539771d1b3f75"],["/categories/设计模式/page/3/index.html","24ec2aeacf1b130cfa2377c268e55d2f"],["/css/main.css","0b2a6aaeaef1a6e028f117fb8b6316e7"],["/hello-world/index.html","1246e82dedb3ad1e9d5210eaebfe9caf"],["/iOS VIPER架构深入实践/index.html","45d6f8f5a032ef9efd02a5821b828955"],["/iOS子类化样式/index.html","5df1dc48e8b51a8da6921284343d6853"],["/iOS自动化布局编程/index.html","e0dc6538f4277dfcf5fd0534abb443b4"],["/iOS自定义转场(By Swift)/index.html","16ee615a5a16dfcfeb93a2809ec253e4"],["/iOS项目架构：使用VIPER/index.html","3eb5d1d1a3624b479df34e7c9b136f6d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","94004aca8cd4b28c35a00721a07446f2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ccda877d06542c248b9395b7429c1887"],["/page/3/index.html","9c9db04bd04d64bce7d1176f27e9579f"],["/page/4/index.html","c8a452d7935d679a2877be7ee1b8150c"],["/page/5/index.html","c704af8e04917195f28d67b23a0ccebd"],["/page/6/index.html","cba2c20238b51ff806dc53be7cbf450d"],["/schedule/index.html","ab1c46ddcd93e1747b17af44f26f8698"],["/sw-register.js","7caa23da435f74c2898d855718a51daf"],["/tags/Collection/index.html","e22e993537a7e895c28742b1c746f392"],["/tags/Collections/index.html","1fd9aa9852ae75836edd507ac1f6e841"],["/tags/Dependency-Injection/index.html","52954f7ab0c35c423216a87bff7c65c2"],["/tags/Modules-And-Hooks/index.html","db096d858428390ad8c00daf886ed90a"],["/tags/Server/index.html","218aedad9ea5ce03105573f87aef2765"],["/tags/Swift/index.html","801929cd2828f4512f34d0c115c745c6"],["/tags/Swift/page/2/index.html","7f6a28e258ee9f01e00a687326fb6cb6"],["/tags/Swift/page/3/index.html","7990a426c9a923ceac1e205fb6363584"],["/tags/Swift/page/4/index.html","fc3ac4e7db8875ab7cef3bbc35690643"],["/tags/Swift/page/5/index.html","48ce98d39aab1e4ee0e816e3c4870d02"],["/tags/Swift/page/6/index.html","9611fcb82cf97d6ea0933f520d709cd6"],["/tags/SwiftUI/index.html","dc3fcbb05d5ee490a4fd6d92bdd57573"],["/tags/UICollectionView/index.html","13e0307a6c360a5f8a84caa27d162440"],["/tags/UIColor/index.html","6f0d46db35e836c0d04e8b519b0736d9"],["/tags/UIImagePickerController/index.html","d3df7ac7d79037299903fcac1587d9ec"],["/tags/UIKit/index.html","6848945d2addf9dc7de2b5eaee11e1e4"],["/tags/UIKit/page/2/index.html","fac0b17465413572616f7b17290abcca"],["/tags/UIKit/page/3/index.html","1fff7345a34d9c602495c0e226c37fb5"],["/tags/UIKit/page/4/index.html","100981a2cf6f3ac41d142bb7bc4aa02e"],["/tags/UIKit/page/5/index.html","3f8a1bad0a9b0dd71c476155939a6650"],["/tags/UITableView/index.html","162dc2f104b507dea41ef6e3512b69cc"],["/tags/Ubuntu/index.html","183b989baf93559116fbdfe711db50d8"],["/tags/Uniquely-identifying-views/index.html","f3097139cb03577b7e730249dfe350a4"],["/tags/VIPER/index.html","44ee05430b9a4aa7d5a15eefc7df3147"],["/tags/VMware/index.html","091c32a6538587984344abd5725c2036"],["/tags/iOS/index.html","c13af4db0daab43f9ef7f775efe48775"],["/tags/iOS/page/2/index.html","eb81fb07d101101be6357b6ef02667a2"],["/tags/iOS/page/3/index.html","f06708d9e02c7d1bab771b8bf8d9a817"],["/tags/iOS/page/4/index.html","de3168bf6d6f371c642efc5993d18b89"],["/tags/iOS/page/5/index.html","09f5d2ddfe189391da19c879cfafa7f1"],["/tags/index.html","068c6d78db9ee976badd995bd4992e36"],["/tags/non-optional/index.html","64e56fc110315970f9cf5b055c63de75"],["/tags/optionals/index.html","c79d95a77a1a88e3c5e7f0e282ca6f19"],["/tags/transition/index.html","de509e95edba3aab757d27622d0b3131"],["/tags/依赖注入设计模式/index.html","2c066a3ccb0c092520eea8c531c01be7"],["/tags/初始化模式/index.html","139e332131e2d6f14e4925808074e39f"],["/tags/单例模式/index.html","d003626c36adb1462d62c8051e98e16d"],["/tags/原型设计模式/index.html","e0ae3ae5a7814cd969715dc3bd8208ed"],["/tags/命令设计模式/index.html","095224a651109b7c949bebd541e9355a"],["/tags/外观设计模式/index.html","0d4e836f080c2c1696c5bfe9ce4a81f9"],["/tags/委托设计模式/index.html","d27f198f94c59f98ffdf4d2c575cb62a"],["/tags/子类化样式/index.html","1098da62ad87093c0404f05835325615"],["/tags/对象池设计模式/index.html","f6e10c7b6f7255db408d4a5b27e769c0"],["/tags/工厂方法设计模式/index.html","17bd77182d8ba70baf9b9ff5dca930e7"],["/tags/工厂模式/index.html","327786f5cf75c92d4a1cd18740b3119b"],["/tags/工厂设计模式/index.html","a1455d149fae866bad51ae54d4ff79b6"],["/tags/懒加载模式/index.html","33384f3fc63c2f71c4337b0f7014d378"],["/tags/抽象工厂设计模式/index.html","fbbaae40c8cfd56f233015c1151716fa"],["/tags/构造函数/index.html","0d1958a811d35f34e516df52745bf452"],["/tags/架构设计/index.html","2b255451dbee01caf3dfe2f02bcd841a"],["/tags/生成器模式/index.html","3bca3e5d64ab134868c50dd9ce113405"],["/tags/用户体验/index.html","7c38778e75b4b14dc2314758fe3891ad"],["/tags/自动化布局/index.html","cf26b442a9ca329d594da8cbd170c649"],["/tags/自定义UIView/index.html","e3eda18d8ea32fa314af6761bb7dd617"],["/tags/自定义转场/index.html","80ce3094a28de7c1b561e6ba56514b33"],["/tags/自适应布局/index.html","32e00b96cc092556da87e14eb2b5a12f"],["/tags/设计模式/index.html","1658560da9b045a11db8e213a7ae17c4"],["/tags/设计模式/page/2/index.html","2746998285a6ae6460a913e6f198f0e8"],["/tags/设计模式/page/3/index.html","956e7d643290160e7ca323196803348d"],["/tags/迭代器设计模式/index.html","11cad24efc2b4507a8619cd6409bab5a"],["/tags/适配器设计模式/index.html","793da8b9a95b3981f7b8d16be280addb"],["/tags/静态工厂方法/index.html","7f434eeaf6b0af3041e6de879d10f158"],["/产品开发的幕后花絮/index.html","0894a78960cd08d0b2ac299e7188969b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0dcec71e59750a55cb06fb094d947a2e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","09e265ba3fe1dad07d607cf662801e2e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4e780aee78440ea5359d60814761f964"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ef541385d4599005d89fbd2720950335"],["/在Swift中创建自定义集合/index.html","6f209952deb1fb9f5a21d800b5597c59"],["/在Swift中处理非可选选项/index.html","9212fd50fe06d2b5e0f93034615eb603"],["/在Swift中重构单例模式用法/index.html","c6945aeca3f6dca68600269d31af8d57"],["/揭秘 WordPress Hook 系统/index.html","26fd72875f59cf9a73b5f578ab69e601"],["/比较工厂设计模式/index.html","064f7dc1b85421c2b8effd7419adfcd1"]];
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
