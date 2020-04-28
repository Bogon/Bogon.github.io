/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","df2a64801a65189f8fb908ba26347259"],["/Swift Lazy属性初始化/index.html","9526acfb67f97130316620485adfdcf8"],["/Swift UICollectionView使用指南/index.html","4a4add16b087dc86f28458f35069d218"],["/Swift中UIColor最佳实践/index.html","7a7859e8765e669367ee21a37f45f76b"],["/Swift中快速简单的工厂设计模式/index.html","d40752ebebbc6746885fe72f88f38bd8"],["/Swift中构造函数与静态工厂方法的比较/index.html","add540ce421a830c3e72625e77a097c2"],["/Swift中的懒加载模式/index.html","c6b3049466729138c34795870b995b79"],["/Swift中的模块和挂钩/index.html","e206f893e820a0e5b2a6ae860f7b8ecd"],["/Swift使用布局锚点添加约束/index.html","ff35c08814fb1ea3fe6e5c8fddbe0e55"],["/Swift依赖注入设计模式/index.html","510e96f2e75ef2971e4eeb79a989f32b"],["/Swift关于Dependency Injection (DI)/index.html","62c2515aa1aba7aa6ebee8d32c299663"],["/Swift初始化模式/index.html","b7d8faecdc1c921a6c696e19202b04ff"],["/Swift单例模式/index.html","806cb0992c9ad2ad14d1dd1693ee5708"],["/Swift原型设计模式/index.html","ae8b0086be3d5ee4dca5205e2e78232c"],["/Swift命令设计模式/index.html","f6dad682e1ace3891f1beccae1375fe0"],["/Swift外观设计模式/index.html","bd126b5005c861e992b60ebaf3167f10"],["/Swift委托设计模式/index.html","f27ac120933a977b20b84c4bc4447467"],["/Swift对象池设计模式/index.html","23818069adf6d9262fb811a215a6e392"],["/Swift工厂方法设计模式/index.html","eae231e38ec37987018ad5e03dff89cb"],["/Swift带闭包的懒惰初始化/index.html","212384883a4b77751cd12d7b01b1f959"],["/Swift抽象工厂设计模式/index.html","ce11447b8d1ce7e2bdd578bce3c1c636"],["/Swift掌握iOS自动布局锚点/index.html","e40b74f8611254a3fbcd2908e1d160d5"],["/Swift支持旋转的自适应单元格/index.html","1b0ced7f158a78e9e260b74079e521d3"],["/Swift生成器模式/index.html","03d79fa57bd79972abe6367b70d81bb0"],["/Swift结合Xib文件自定义UIView/index.html","27d33d2d5464984c6485a523f841a726"],["/Swift迭代器设计模式/index.html","ccc1fe030516ac2eb3315178ecd5c9de"],["/Swift适配器设计模式/index.html","68732d23b54466efdfc3bb182dc1217a"],["/Swift静态工厂设计模式/index.html","eb5ec13e8ad4b022793bcdb02b9be49e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","eeaeebec5e2543c4d35387c8462d4af9"],["/UICollectionView data source and delegates/index.html","02f6441bcbd28b811611f1aa33563169"],["/UIKit初始化模式/index.html","f9ca3ee4302ccb7affae8640121b3eab"],["/Ubuntu18.04替换国内源/index.html","4ab42a7ff7533ac7b9d18041d1054b28"],["/about/index.html","a23ccda5e8863314b7a18880456dd611"],["/archives/2020/04/index.html","f4262e12145310fe65c6d0e33927729c"],["/archives/2020/04/page/2/index.html","538835b6b6569d1c04d38778044a8f9d"],["/archives/2020/04/page/3/index.html","87333b928865a5e2b6e431d4c026ee9c"],["/archives/2020/04/page/4/index.html","354ec5e40060e5525bdfe4d991af1542"],["/archives/2020/04/page/5/index.html","2e6723062a8ffec0003f4823a02ca467"],["/archives/2020/index.html","2788fcc412f0dfc47c1b4678fb292938"],["/archives/2020/page/2/index.html","e80e82887063d97ba4a85384108dae48"],["/archives/2020/page/3/index.html","3e52eb261b4ea2a927d002239df63d8e"],["/archives/2020/page/4/index.html","43b10019705cc24152434690e9c57331"],["/archives/2020/page/5/index.html","4a4584a2e5524cb07b0a615e3bf2b27b"],["/archives/index.html","9448c05f9b01003411870827b2d71947"],["/archives/page/2/index.html","fc4bcfe463f5bf09f86891ee9c0f0f14"],["/archives/page/3/index.html","fe7039737d2a692240bd593c5ade1c37"],["/archives/page/4/index.html","0e61dd67a3b7af449d490c73ae66afdb"],["/archives/page/5/index.html","5a5f0169229bd87796c473bf87f7b1ff"],["/categories/Hexo/index.html","e56b9c623d139ed86e183a65f128b737"],["/categories/Server/index.html","d251e6db6a3a5c11efd3b689b3e81db2"],["/categories/Swift/index.html","2aac86e16a254496d5cf0797fe12691e"],["/categories/Swift/page/2/index.html","4a331b384d0c10f4ca49f53e7273768b"],["/categories/Swift/page/3/index.html","48a0fd89a455490e919f3facc1c6d650"],["/categories/Swift/page/4/index.html","69d8afc9d33756dbdbda50b3a91671cd"],["/categories/Swift5-2/index.html","f94adb43444839ecedcf27c27f4e67ce"],["/categories/UICollectionView/index.html","a91197cc3fea26562227dfe60873badd"],["/categories/UIKit/index.html","5870b731f187b4e2ee87f01b1a7aa98f"],["/categories/UIKit/page/2/index.html","6b72c687b86a60148965960a1ef96b71"],["/categories/UIKit/page/3/index.html","9a832884830236d4c43370e0e7c85d21"],["/categories/UIKit/page/4/index.html","393e83a7a982c9140312c869a327551e"],["/categories/Ubuntu18-04/index.html","d82457dfc689e9a5391e647744ccda57"],["/categories/Ubuntu软件源/index.html","914de1816ec74113a9ec77366b3bd2b1"],["/categories/Vapor4-0/index.html","a48ade3fc59cb4347c496c2d74d08301"],["/categories/iOS/index.html","ae448d4301a1c029f374f0f9ac17a92a"],["/categories/iOS/page/2/index.html","d5a37e1b1269ae3df8f5321d0db54bf3"],["/categories/iOS/page/3/index.html","e6c533446ede987e14f6f99759075576"],["/categories/iOS/page/4/index.html","308823554c0d2279d407213638d98a8c"],["/categories/index.html","08d8ae04282a98b43b26703ec6487384"],["/categories/用户体验/index.html","a23217b5160d1133fce41b61d56b1435"],["/categories/设计模式/index.html","2acf843f0c13997f880816049814318e"],["/categories/设计模式/page/2/index.html","968fc01a1629e31525aadccb3b70d3eb"],["/categories/设计模式/page/3/index.html","b3c354d5d4007306f2eeee6356184f7d"],["/css/main.css","6f8e30ccec3a1e9da4262814c8333beb"],["/hello-world/index.html","f7ab434b2ad71c839d6acc117fe2900c"],["/iOS自动化布局编程/index.html","015d5e0cc0dbfbc5ed13a4829f15e892"],["/iOS自定义转场(By Swift)/index.html","4473aa7343faadd99a9aaeeb9a39c980"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7136e04d17388480ca9a42c91fb0d010"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a0cad9ecc54d40f2c340b15bfa4d2f19"],["/page/3/index.html","e46fedbb87d993349877a8a0abaa5572"],["/page/4/index.html","55a9172c1b0ae8380c7f506b4ae89150"],["/page/5/index.html","cf4a8d536d8e9ed87286b662b2d23854"],["/schedule/index.html","b13602ccb8b9e5f25bc7c982c4e37042"],["/sw-register.js","49eb1703a1d7cece1d550bec28e0ffc0"],["/tags/Collection/index.html","d7406ea4bdb79e1dabd41da358d1e695"],["/tags/Collections/index.html","c9e0436e0b2b75bbf8180e45b347d8a1"],["/tags/Dependency-Injection/index.html","529676a1188631e39efa39de2968e8aa"],["/tags/Modules-And-Hooks/index.html","e1ea498e32f156a1c7f7c6386946d9b4"],["/tags/Server/index.html","00cfd091e473382e205571647c83c2cf"],["/tags/Swift/index.html","054f87b69e2e6dfa79678aa01fd27836"],["/tags/Swift/page/2/index.html","58ac2344b0f5339741b548a0161d0b13"],["/tags/Swift/page/3/index.html","b09b7d8920500bd8ada3e17aa2edf34b"],["/tags/Swift/page/4/index.html","f22675c041d138a1460420f9b5cdd4d1"],["/tags/Swift/page/5/index.html","c2631dfdfe0f080a3b7dc267c3e3a972"],["/tags/UICollectionView/index.html","cacddaa1d21bb42fa9a6e1f39d1ac61e"],["/tags/UIColor/index.html","4735d61ef748d2629739960ecfe1580e"],["/tags/UIKit/index.html","f7a3a53d92acdd5abe92b5bcde4bbc5b"],["/tags/UIKit/page/2/index.html","622df68164c9333af232fa3020b08a73"],["/tags/UIKit/page/3/index.html","4f3fd8664710f57842063bf00a7fbe2f"],["/tags/UIKit/page/4/index.html","46c2f9311ec291e68fd4c508c8b9ecac"],["/tags/UITableView/index.html","78e9369a11c578b5ecd74adc8f4caf01"],["/tags/Ubuntu/index.html","4daa077a54900954de2de3e3fc9c230d"],["/tags/VMware/index.html","3f544a8af0ec50d7662d31e7e2d9f0fb"],["/tags/iOS/index.html","7014673c482714870fa547f75d945ed5"],["/tags/iOS/page/2/index.html","9ba0fb534164a1da4600d48dba44a853"],["/tags/iOS/page/3/index.html","4b4b092380eb7b6cb0643d976d6bc17e"],["/tags/iOS/page/4/index.html","2fe7ef3832b19142d411873183ef91d7"],["/tags/index.html","bab5b6d1adc509fe53935c360298e03e"],["/tags/non-optional/index.html","486486becbd58471520063e0d9f9e35a"],["/tags/optionals/index.html","8105c0daa5c4d605ace5f827bf0aa848"],["/tags/transition/index.html","274a25ab568916292a04bb98c83e961a"],["/tags/依赖注入设计模式/index.html","80ce57a71c13c1fcb905c0159cd9f266"],["/tags/初始化模式/index.html","cc0c2c8008281c5b1465eb07d69242b0"],["/tags/单例模式/index.html","17a81757d597a7e48fb8fab25333bfd5"],["/tags/原型设计模式/index.html","8d1525588f41ea38cf8c8d29eec5531e"],["/tags/命令设计模式/index.html","48433a847621032ad9dcae5e3bb50ced"],["/tags/外观设计模式/index.html","8e5841a831c2ef29a7f7e78c676862c4"],["/tags/委托设计模式/index.html","b299c438fdc3dbe53661c009d51fc91e"],["/tags/对象池设计模式/index.html","7228ffa422c720b935b4ed2732678b94"],["/tags/工厂方法设计模式/index.html","4eb8b9eaab49f22f64d4b667153cdc72"],["/tags/工厂模式/index.html","d0a2a68bbf773ebe22c7c20a68762ba3"],["/tags/工厂设计模式/index.html","dde471e7410a03168e43f893e1fbea0e"],["/tags/懒加载模式/index.html","b77387c9ba90236e2b7fe1f8ecc2cad7"],["/tags/抽象工厂设计模式/index.html","68dcd9ac08d90abc5347286075286d93"],["/tags/构造函数/index.html","e086c47b657ec358c025666b7c4e9da4"],["/tags/生成器模式/index.html","976e92c58860e87b377b0e1841822515"],["/tags/用户体验/index.html","2689fd56ae4ed845217e6f521395b351"],["/tags/自动化布局/index.html","d9d35fd80cc46ea7faac028ddc6e1e65"],["/tags/自定义UIView/index.html","852acb89144f58f51efba9b370f56170"],["/tags/自定义转场/index.html","3bad9746e24d2e00dd7fcaa60596bd73"],["/tags/自适应布局/index.html","61f79c37b687f67bc213814999939b46"],["/tags/设计模式/index.html","dd25a10e1690e398be6c39cafedba5a3"],["/tags/设计模式/page/2/index.html","535fd483920f4cbef8d6274f028f3ac9"],["/tags/设计模式/page/3/index.html","86b615a1b19f251270d1d667fb0b4cc3"],["/tags/迭代器设计模式/index.html","89268981920e54d1fbb9554a61ebeedd"],["/tags/适配器设计模式/index.html","7818e45a86a147474325fe5913c3a5ad"],["/tags/静态工厂方法/index.html","8e33f46abee6572536a8c50f4c54058a"],["/产品开发的幕后花絮/index.html","7f6229ef34280552536cdf0bc651df1e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","50132ced3503e1d917b26b86380a980b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f685a7d5daa6c47cc3f20a90c731c037"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","34134fa6d78b151fd9038dcae2984956"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d026d9a4ab168295f4436cca33fd3f6f"],["/在Swift中创建自定义集合/index.html","7369c646390446863d4ccaaecdce2438"],["/在Swift中处理非可选选项/index.html","81bfe4ba5e0a59b6aee8ea2780c73627"],["/在Swift中重构单例模式用法/index.html","48d1e6b84c35748ee6e21f72b374143f"],["/揭秘 WordPress Hook 系统/index.html","9c3d763c9a51c42e9846dad58bbd40a5"],["/比较工厂设计模式/index.html","dedadd61a434c602549550e687a3acd1"]];
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
