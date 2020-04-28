/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","df396571e834c2ca1870a6781fd2f274"],["/Swift Lazy属性初始化/index.html","4b1b041f8a8d5b8b6d1303ebe862d4ee"],["/Swift UICollectionView使用指南/index.html","8f61a5a746bb5feb656c108430aa9977"],["/Swift中快速简单的工厂设计模式/index.html","c406892dca0df8f6c4036afe06df547b"],["/Swift中构造函数与静态工厂方法的比较/index.html","8eefd2581394638f291d4e4f15227c89"],["/Swift中的懒加载模式/index.html","080bf78ae1273b494b6719193e5ec589"],["/Swift中的模块和挂钩/index.html","c1a22903458ba464e8887551ef555939"],["/Swift使用布局锚点添加约束/index.html","523bb49d58640cba96c1423037cf19e9"],["/Swift依赖注入设计模式/index.html","65a13c9025d292c692c0f00cb1300ad3"],["/Swift关于Dependency Injection (DI)/index.html","5e207f308b7145dbbcd570efba2b3e8b"],["/Swift初始化模式/index.html","05f17f053d6bb59ceabf09ccfb9436b6"],["/Swift单例模式/index.html","c2185640312e00ede71d6f5d344dccea"],["/Swift原型设计模式/index.html","a2ac273ac73991f9fecfa2322d0a5594"],["/Swift命令设计模式/index.html","9b0104293a7e2ee82e224d8be31642e7"],["/Swift外观设计模式/index.html","4964a05c58cae9c48d42aca42c6de1c9"],["/Swift委托设计模式/index.html","c8609b0c7dce4b5329a6c9b7c91f921c"],["/Swift对象池设计模式/index.html","65750cc6d62f7d07740badde5bf00ff6"],["/Swift工厂方法设计模式/index.html","5a3107d73bb1ad0ea2cdee9bd4fa3adc"],["/Swift带闭包的懒惰初始化/index.html","d41a4500713743b89f6bb5b0bcc2a0ba"],["/Swift抽象工厂设计模式/index.html","cd39fd57f52275733ba755334e37e58d"],["/Swift掌握iOS自动布局锚点/index.html","9f52668eb125f75d98476a130e41892c"],["/Swift支持旋转的自适应单元格/index.html","36f19a857803dc5d3fd168297e07a926"],["/Swift生成器模式/index.html","a68cf25bf3f3ea2be97724848226cd7e"],["/Swift迭代器设计模式/index.html","ee419c35c75f68a9ccb94934a67db7a3"],["/Swift适配器设计模式/index.html","6d5a21c5e2c52f6a184814c5d813f507"],["/Swift静态工厂设计模式/index.html","cd4ba932b9c155175b26e44ec6783d21"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","030db12bcf056bfc220360a960a61cee"],["/UIKit初始化模式/index.html","e8a81a3a3489a92a7f9da162364bdec2"],["/Ubuntu18.04替换国内源/index.html","a6ab9c99c8287687b96c37254fec1af2"],["/about/index.html","0dbdf478cb06123ea22c138bd45f580d"],["/archives/2020/04/index.html","abc63b3f8394b1780e6dd8aea6f1724a"],["/archives/2020/04/page/2/index.html","9233a9d1a32a220c3b6db1bed2080502"],["/archives/2020/04/page/3/index.html","c9d9ed1dfbd20a9f193bdd81e470a576"],["/archives/2020/04/page/4/index.html","9d0f0597bd9caa0e3cf261136059c038"],["/archives/2020/04/page/5/index.html","54c7496b7d8b4a248b4728678e628084"],["/archives/2020/index.html","10bafc7e7018585e2510b590e274e79b"],["/archives/2020/page/2/index.html","dd458d05d38ce69aafce228521336013"],["/archives/2020/page/3/index.html","58766dc6216964beab42f9c0ba8b3501"],["/archives/2020/page/4/index.html","e49751c8f4267e4c47fae8b2df2fb194"],["/archives/2020/page/5/index.html","60fda4d866ace82609c21496f1520a7e"],["/archives/index.html","1b71ac220182894a81bbe83d497f4574"],["/archives/page/2/index.html","8cf144666ae13753f9f149e57415ea0f"],["/archives/page/3/index.html","3bd8d565d6fd86d12163e44aa2c81272"],["/archives/page/4/index.html","6fc10ed99040efa70b55641e3cb1324c"],["/archives/page/5/index.html","a22da29eb4ffc97e923c4f41d4b9bd7d"],["/categories/Hexo/index.html","d846571bca4160a09c4f110d3fe15b91"],["/categories/Server/index.html","d61e9cbd64ff11d84a694d0f277ccb95"],["/categories/Swift/index.html","4e5fe4852e844b21c0935c6f5ec1149b"],["/categories/Swift/page/2/index.html","516615a4ec4b2dbdf9d8093567b223fe"],["/categories/Swift/page/3/index.html","d1d7c6e7c794e420d2a3ed2a03452f4c"],["/categories/Swift/page/4/index.html","361babeaa6bddb575b5fbaa0203a41ed"],["/categories/Swift5-2/index.html","a9d6ebe94a33784c339e8598d326ab20"],["/categories/UIKit/index.html","916bb6364e77cbf409436bf9afaac02a"],["/categories/UIKit/page/2/index.html","53530eb870d68686fe7895184bb049d6"],["/categories/UIKit/page/3/index.html","f41422459e1571b062c520a9e3024d1e"],["/categories/UIKit/page/4/index.html","ee43bf9b20d49d7b64d299264e2731ca"],["/categories/Ubuntu18-04/index.html","019f230c80a0c9c07dff13b6765e6aec"],["/categories/Ubuntu软件源/index.html","946a19d5959b0f7dfa8375cc72655525"],["/categories/Vapor4-0/index.html","057668ef12ee94fee0744762305d5fe7"],["/categories/iOS/index.html","e9fad2cc6d3355c2bfa85e234467b733"],["/categories/iOS/page/2/index.html","1a185c63a822b202210d1ebe14cc6166"],["/categories/iOS/page/3/index.html","be75112f1005be9b78da6c33f3ca7a2f"],["/categories/iOS/page/4/index.html","cbf37bcb5ed54730158d0050df7250aa"],["/categories/index.html","0df6692fc63b489f51f322635de04ae1"],["/categories/用户体验/index.html","7719d5dacdb26847ee44498b351964ff"],["/categories/设计模式/index.html","9b7239d48976ffd808bb4b7ab3cb7dd0"],["/categories/设计模式/page/2/index.html","655ff87bcd6abc80397642480442cf9c"],["/categories/设计模式/page/3/index.html","272060fb8abf68d80c28e193fb8cc248"],["/css/main.css","1e3438f61e58c568eb90a9fc2f81afd8"],["/hello-world/index.html","5c1e5b9ac6b86507437d62028d97edd5"],["/iOS自动化布局编程/index.html","76be445f69262c42bf6d053cc26e0ab9"],["/iOS自定义转场(By Swift)/index.html","3cb4f0449208c52dbc99dbe6f86751e8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","23aeaafd779fa433d67f538d8b8c8393"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c80ec42af019033aa987b046f1f27c19"],["/page/3/index.html","6ffac5b015f78b8a6a815aca25a143af"],["/page/4/index.html","4a197dbe6fbbda2864614fceb00fa3d8"],["/page/5/index.html","3fa7c55abfc5f91244bd5225cef28a9d"],["/schedule/index.html","a5012753b9f6aaeb3f288bd2bf32049c"],["/sw-register.js","a56e5b3560dab1af3d0d2414aac6fe6e"],["/tags/Collection/index.html","9b6e67585d77a67502cfad48c28266b8"],["/tags/Collections/index.html","403a8c5546825b1f1d6cab21551cdf69"],["/tags/Dependency-Injection/index.html","3ffda043b7c65df2c2ba3b3d2357c82d"],["/tags/Modules-And-Hooks/index.html","4ca5768fc2bee04e52a2f6e494a09752"],["/tags/Server/index.html","0b1236a0729c8b6372ed84271be9de06"],["/tags/Swift/index.html","ba3a33776de99b17c9acacba95bab9ac"],["/tags/Swift/page/2/index.html","1bdc9240dd12c99dc58ad16b820344c5"],["/tags/Swift/page/3/index.html","09ec69cb8b5e6fa54225a237200a0ff3"],["/tags/Swift/page/4/index.html","52ff4e2b83baa9416d957abfc52a7f7b"],["/tags/UICollectionView/index.html","d4264aac15ec7df4c3a1aba567e5c36f"],["/tags/UIKit/index.html","380fe7046dbab1212d8d66908a68e4e4"],["/tags/UIKit/page/2/index.html","2fd1af0e0f344dfa5218a41ff45af02a"],["/tags/UIKit/page/3/index.html","12ce09d5166b758dad0db6a980365ed7"],["/tags/UIKit/page/4/index.html","ed3ad74f28d1b1666e4f4694a536fc72"],["/tags/UITableView/index.html","e6fe6e980288f49693ed680382a03bf0"],["/tags/Ubuntu/index.html","585b0b466ce78b0dd1420223d9cd4a55"],["/tags/VMware/index.html","15efd2f119eab4336ae9d71c4d9c046f"],["/tags/iOS/index.html","9970d736f01425d2a67f49547934194a"],["/tags/iOS/page/2/index.html","f2d8a7e18dc8d141a65d6f0754a3970f"],["/tags/iOS/page/3/index.html","2d4439ee4ebdd95eb46b0f8cbea1ff3d"],["/tags/iOS/page/4/index.html","b8803615ae3cf3aaf3fee73706312604"],["/tags/index.html","93766fe4a0c63e591512f0cb8f30cf8a"],["/tags/non-optional/index.html","05ec953ab6c9482dafbfe03ee01ee373"],["/tags/optionals/index.html","c12231219870dc16e697aa4f0f3a298c"],["/tags/transition/index.html","54ce9593f74730f0dda96d0c6773ed98"],["/tags/依赖注入设计模式/index.html","9552cd491344eeeb62f2331628fbc9a5"],["/tags/初始化模式/index.html","6f7c3eaca75a2bd21b06ed3c47fb331d"],["/tags/单例模式/index.html","17df98afe87a8f3c125d2d8c72d659b2"],["/tags/原型设计模式/index.html","ae7c15a756e05fa1a175cd533ef42586"],["/tags/命令设计模式/index.html","a65fc74d495f01380916d87717449691"],["/tags/外观设计模式/index.html","b37960733481c6e820beb8ab727b0f1b"],["/tags/委托设计模式/index.html","1e1489913cc3354c2306d7fbbb76b925"],["/tags/对象池设计模式/index.html","7b47e0c980575deb6734c74e574e4a63"],["/tags/工厂方法设计模式/index.html","69bffa75507327cd3853f755c51d9750"],["/tags/工厂模式/index.html","b9d9cc70a58f97af0b2ca805957b625b"],["/tags/工厂设计模式/index.html","fc2d99429494616d41e12e032874090c"],["/tags/懒加载模式/index.html","e102dfc1f08a24356ec5bcdc486de7c9"],["/tags/抽象工厂设计模式/index.html","08500b8e908cf6b50d1b98036bf61f89"],["/tags/构造函数/index.html","22a1fa0161298f895e70972b0a8fbfa1"],["/tags/生成器模式/index.html","236d2fbb1b414f5fb12d99d7fcd9ab26"],["/tags/用户体验/index.html","f779e34efbc6272ef160457d5e1f7da9"],["/tags/自动化布局/index.html","f0ca4ec8fb4251ac30cfd5a0ea36557b"],["/tags/自定义转场/index.html","cf1b1b89e9c9cbce15265ea64610ddc2"],["/tags/自适应布局/index.html","e3f8a64bd0528fb4adaa4ebd0d91e7ae"],["/tags/设计模式/index.html","3769e7ec902ed4bd1986589faeb86aa0"],["/tags/设计模式/page/2/index.html","af2559e133cb71b80c86f007f95f103f"],["/tags/设计模式/page/3/index.html","7f95eba3e92aaca66572c5bed2bc3321"],["/tags/迭代器设计模式/index.html","91efb17902004c80a264597cb7d8f4a0"],["/tags/适配器设计模式/index.html","319855a2383454449d6e192175710a6e"],["/tags/静态工厂方法/index.html","f516de8f757d2ba23714e79b87cb416a"],["/产品开发的幕后花絮/index.html","b0d6272f701a51a32aaab8c28c58a501"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","52f991c7d688ba1fac176b7f69cd1b74"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","550a4411c04a618deabbf2d8fa8b91b3"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","cad89f107dbfdf01e91efa7cb8901838"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","13eb3b74ce8a6092d245724e2398b158"],["/在Swift中创建自定义集合/index.html","71a5f86bd11cc724531c22a88fcb4099"],["/在Swift中处理非可选选项/index.html","51167008fb1ba07a65e2ffd8bce44699"],["/在Swift中重构单例模式用法/index.html","cb7e4f019ba7e1a8f5c586a3c8859c9b"],["/揭秘 WordPress Hook 系统/index.html","e32bda8af30a43c336a40b283c7cc0a1"],["/比较工厂设计模式/index.html","e12374dd0bde9f94883e583c25f10399"]];
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
