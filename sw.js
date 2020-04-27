/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","79f8ef9cb0400af5405070cb42238bf3"],["/Swift Lazy属性初始化/index.html","8471aed5e2337cdc49478ef786bd13ae"],["/Swift UICollectionView使用指南/index.html","0bbd1de93cb18d06da04caa20d7f07ff"],["/Swift中快速简单的工厂设计模式/index.html","5462a58ba23fc0ce921a9627e75fbfdd"],["/Swift中构造函数与静态工厂方法的比较/index.html","82d76483b5ba16b58bb33bc00414a281"],["/Swift中的懒加载模式/index.html","44d6f6056fe23651325b13269376a07a"],["/Swift中的模块和挂钩/index.html","43b7efd0fa348465b8296900e64ef6b2"],["/Swift使用布局锚点添加约束/index.html","59a3e66a816cf22bd4a9636a9314afc5"],["/Swift依赖注入设计模式/index.html","3bcf28badd3860ad129cb701ab6d4c40"],["/Swift关于Dependency Injection (DI)/index.html","49061a76d0d25183c66fb7079ea5356f"],["/Swift初始化模式/index.html","25283d10270acd3854becd17b6fa88b8"],["/Swift单例模式/index.html","c19b35bdc4897e9c814b0da08347f1fb"],["/Swift原型设计模式/index.html","654c5626d1d30d0a40e12a55b5bbe996"],["/Swift命令设计模式/index.html","36357db4e37a1775e2c0109970f61c34"],["/Swift外观设计模式/index.html","810c70c7919473f4a6d67f7ed74b693f"],["/Swift委托设计模式/index.html","8b7c25155bb1df0c82866b60c048310f"],["/Swift对象池设计模式/index.html","7447a1488af153e2522d61efae941a5e"],["/Swift工厂方法设计模式/index.html","af92a7cb89c1e3165580510faecc5dfb"],["/Swift带闭包的懒惰初始化/index.html","7c8003d08194111326f293870a0c1478"],["/Swift抽象工厂设计模式/index.html","8e3ae6bd861a55e18b2c701b33aef9b0"],["/Swift掌握iOS自动布局锚点/index.html","967df3a054e3fe6e8cd721c194cf4fd2"],["/Swift支持旋转的自适应单元格/index.html","75cc67726505b72b4af5ee3d4b512c5b"],["/Swift生成器模式/index.html","6e6a42b45e2b5f328a4530e18f14b07c"],["/Swift迭代器设计模式/index.html","d125e9ec2182da13fae9085275de5544"],["/Swift适配器设计模式/index.html","0e4017b6a6638068d71cff75f0e12f9f"],["/Swift静态工厂设计模式/index.html","7c78a49d0c73a62f98700c0305d7521e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","03b24e37efde0b117efece638c7f5f99"],["/UIKit初始化模式/index.html","d469fb6deb6737697329f8f29728bd6d"],["/Ubuntu18.04替换国内源/index.html","f5efc1447d607d3d13eda1cb8f0bcb9e"],["/about/index.html","a664334a9ab53818cb099a5ee0555deb"],["/archives/2020/04/index.html","c881fec7218cf8467f826bae8c78b7ac"],["/archives/2020/04/page/2/index.html","491404d8e87f3827637eb58093d1421b"],["/archives/2020/04/page/3/index.html","282db24204ab479b382af867adcefc49"],["/archives/2020/04/page/4/index.html","f4024fc1994564e824fcd6246c6d2d2e"],["/archives/2020/04/page/5/index.html","08d140c19c43b5b11a42ae8e986e64fa"],["/archives/2020/index.html","16f67fc93c370234f846e02978c0a4ce"],["/archives/2020/page/2/index.html","6e9088366783ff532eee98883e2ea666"],["/archives/2020/page/3/index.html","51eb14bc50dd698697e80659c6be1fce"],["/archives/2020/page/4/index.html","c7ad98ceb646ffac994f4fe6139cff0c"],["/archives/2020/page/5/index.html","cd616d1865cc7ec179c057f4e72463e7"],["/archives/index.html","26354352a2dd840c84b48c71675ed9f4"],["/archives/page/2/index.html","f3c1b3f4bcb20f4efc38df46e61ed898"],["/archives/page/3/index.html","3965bed4106ff9d1d379756177d9afc1"],["/archives/page/4/index.html","2f710ede7c77aad74f30095a42d554c4"],["/archives/page/5/index.html","0a436ebd2175fe473a205e50719bd169"],["/categories/Hexo/index.html","e12d7fb7c7ec70a2012220014d41f6e4"],["/categories/Server/index.html","2b1b2c77314019825154859305afe112"],["/categories/Swift/index.html","28c107681c6812c1fe480efcd14a7a9d"],["/categories/Swift/page/2/index.html","5e999b13905111f0bc964f3933bcd380"],["/categories/Swift/page/3/index.html","b2d2b65a90dcba17d3afdd71738cc193"],["/categories/Swift/page/4/index.html","a2aa33e21801fd9a5df3484d8f2c7f6b"],["/categories/Swift5-2/index.html","8ecfb6c636ddb2f35a100a380578b643"],["/categories/UIKit/index.html","c267df1700b5225fa1b0ee1c5918518b"],["/categories/UIKit/page/2/index.html","556b0c1a5fdcde08f3c622588cce7fce"],["/categories/UIKit/page/3/index.html","b94c3154d9774b5f246591d631580c76"],["/categories/UIKit/page/4/index.html","eb761c24b20ebc9f0f2d08be950c9885"],["/categories/Ubuntu18-04/index.html","2ea7918be392ab0a57b7af1ed694dfe1"],["/categories/Ubuntu软件源/index.html","75ccf73fc965e85a13cb9fdd8e462e61"],["/categories/Vapor4-0/index.html","41e2f5f808eb00145c486191a4d21ad8"],["/categories/iOS/index.html","ae638120c0937c6eee84137e22da0d3c"],["/categories/iOS/page/2/index.html","dae414730ceb86c2d1f83ab1203d68ca"],["/categories/iOS/page/3/index.html","c89344681a3878ee5c6a4f7ad43f335f"],["/categories/iOS/page/4/index.html","f68a1caf1a5507fbd9607f7104b58ce4"],["/categories/index.html","5a698cd5d3d6608e5a999ce600ac8151"],["/categories/用户体验/index.html","2ba0c20a0542bbc6dc3da0131f1a43ef"],["/categories/设计模式/index.html","a9f7de8fa404f96dc9b14c49a730f2cf"],["/categories/设计模式/page/2/index.html","82773c7c84ee93720a33a2dc996c75fd"],["/categories/设计模式/page/3/index.html","6f60608e75b15c7efb7c956a0fd1dc8b"],["/css/main.css","85593b01e64e979cd6410ea424fc29a5"],["/hello-world/index.html","5fb20ce8e60773f36cf305ef3f38a6f2"],["/iOS自动化布局编程/index.html","0ea247931c76470fa72bd3dbe8bafd0e"],["/iOS自定义转场(By Swift)/index.html","ca828da4ba0f4941fc137048ee7e0f6d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","87f3118b27481ed698c5c8c12362b4b0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d4d9c1f6cab7f4b83ad087fef36cfc27"],["/page/3/index.html","24540d808fb5249f338b2036fb96f0d1"],["/page/4/index.html","76c25c591e3be3f424721ae22487c7c8"],["/page/5/index.html","c5c2afe691a3ddca1dbf0e9b94d1e4b7"],["/schedule/index.html","ec4d98c9b4d6846a71784ec0936aae96"],["/sw-register.js","3392616c104c6f2bfc39c25645886818"],["/tags/Collection/index.html","3c0689c08de5a05d43c032db616aceb1"],["/tags/Collections/index.html","ef312aeba8220b7c8aeb28a42219790e"],["/tags/Dependency-Injection/index.html","abf08f7008c545cfb9d60070821e6fdc"],["/tags/Modules-And-Hooks/index.html","2d05d0cc64db9f33263b579288698004"],["/tags/Server/index.html","52ebac5738692decbd5c0380b2ffb5cf"],["/tags/Swift/index.html","e0d13e98f2077429f732c5116c09c0c1"],["/tags/Swift/page/2/index.html","ea18f22f6757f5cdafd4392c235fb183"],["/tags/Swift/page/3/index.html","ee2a491399f6e1e6f2287f6b6a8aaada"],["/tags/Swift/page/4/index.html","4371b11424e59df396b28f5dc83395d4"],["/tags/UICollectionView/index.html","c8fa94a2dad524eba31469db4e490367"],["/tags/UIKit/index.html","ad99a9eb196f5701ed77cb0ef470485d"],["/tags/UIKit/page/2/index.html","ca4ffb515381f7ada3aabc7c208ac975"],["/tags/UIKit/page/3/index.html","5ed0c7ae7d6aa40b94890713c337edbc"],["/tags/UIKit/page/4/index.html","3aab32c6f8080808dc2c09008fa9cffc"],["/tags/UITableView/index.html","bd0b73c9f45599c5ccba87fdb0906676"],["/tags/Ubuntu/index.html","a849c46250b448d19c2987f7b15f8d17"],["/tags/VMware/index.html","4a6b1d7ac8267afbb552fed48d68d3ee"],["/tags/iOS/index.html","082484758642805b7287415747c61b39"],["/tags/iOS/page/2/index.html","fc123c6406bcba387590af293155bb77"],["/tags/iOS/page/3/index.html","db519bcd250a071f240c540f502f16be"],["/tags/iOS/page/4/index.html","69a9db729625fc66d08ce60e05b4e4e1"],["/tags/index.html","a29b3c2fba343241bc247d12a956246a"],["/tags/non-optional/index.html","3119802d34d2bc34dcde0470fe5f1ffe"],["/tags/optionals/index.html","48d1089e85b422db7ef75498069461c5"],["/tags/transition/index.html","39f3e5a17710f92e83d497dadbe94b6a"],["/tags/依赖注入设计模式/index.html","cd4ac8a7ec0708f7abd4dd33a065fa84"],["/tags/初始化模式/index.html","144abca619de18654132e0a537011dfe"],["/tags/单例模式/index.html","2138221e9c201dbccd72bc97ed8731ff"],["/tags/原型设计模式/index.html","09c78c182312209e3edf90d9e27457c2"],["/tags/命令设计模式/index.html","253f1fce9c73175155346fb649bbc946"],["/tags/外观设计模式/index.html","4955d5ce5dc99b87a86cf29e97fdf57e"],["/tags/委托设计模式/index.html","4e8461074d1e2cd42cd30e0d58a53a17"],["/tags/对象池设计模式/index.html","0806a3373597038aa28210906b6a4091"],["/tags/工厂方法设计模式/index.html","cbf4560ef6b5a0888c8fa19d41b2e7a7"],["/tags/工厂模式/index.html","4210224227e1878413f67a2714443f6a"],["/tags/工厂设计模式/index.html","9b1deb9b0010695242f0a567ae48c207"],["/tags/懒加载模式/index.html","9121a5b69ee976b6446e909e7d86f673"],["/tags/抽象工厂设计模式/index.html","0323b52e6a64ff8ef2aa5c30f3d69a6f"],["/tags/构造函数/index.html","a1cafa70f11af1d58e696a2bc94c44f7"],["/tags/生成器模式/index.html","8df09aee09d8684c995d157a45764157"],["/tags/用户体验/index.html","83732c1e0f84977ff3800cdeafc76bed"],["/tags/自动化布局/index.html","dc37867c5a4080b63afedd60ac887b73"],["/tags/自定义转场/index.html","eb4798273494bf7ee8fe5b9e49878821"],["/tags/自适应布局/index.html","409d8e9608f99e3f19144d176d191c8a"],["/tags/设计模式/index.html","acc9b855c6fd38a8f4cb7bf13bddc6c5"],["/tags/设计模式/page/2/index.html","8e6c4972f7c83aa9d03e3cc18d862e92"],["/tags/设计模式/page/3/index.html","720f4c98ee14220b45e0fd81c7805c32"],["/tags/迭代器设计模式/index.html","0a87e59abd6ef049922e03e5c2f355e2"],["/tags/适配器设计模式/index.html","4836b145e76cde068e12921c703cf059"],["/tags/静态工厂方法/index.html","645566abe9d44dd6eab64525b828177a"],["/产品开发的幕后花絮/index.html","c1874ff0b462e3643becc3a20e3c808d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a7bd531997fdf9f110ebbab30bcda740"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a9b24bb04f5c790afa4e6714058bc07f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","d65320dab34ccee6f47444173ba0a8d3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5a77b8ddfd0583f15a3c7338fc6c77fd"],["/在Swift中创建自定义集合/index.html","8b9d5ddd4027ba7729b337da83edfa0a"],["/在Swift中处理非可选选项/index.html","4cedf439830892eced966c77d4d21214"],["/在Swift中重构单例模式用法/index.html","9535432f08b03068cd9a30cca0d0f25e"],["/揭秘 WordPress Hook 系统/index.html","d152eacef89945c84aa975b9d570d079"],["/比较工厂设计模式/index.html","ecf53d8420fe0b00ce629af0def51483"]];
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
