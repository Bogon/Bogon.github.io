/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","fb854f7d9db98ae9826e836d0b13eed2"],["/Swift Lazy属性初始化/index.html","35be0d133c8035468398d8d1a28ef42f"],["/Swift UICollectionView使用指南/index.html","e8809b22b404e68f5884a20dd01bd61c"],["/Swift中UIColor最佳实践/index.html","cdaf54b24590335c10f533e5db478210"],["/Swift中快速简单的工厂设计模式/index.html","6611a461bd6eebdc4ccf41ce3dca4123"],["/Swift中构造函数与静态工厂方法的比较/index.html","f8317702c62414ea79232ca661fd173a"],["/Swift中的懒加载模式/index.html","ec2c2d8843f79c8f15ebdccf42c0e752"],["/Swift中的模块和挂钩/index.html","d3b5974472d7d5845c7b4918e3857c86"],["/Swift使用布局锚点添加约束/index.html","2a24c32299626bad5f111536361270dc"],["/Swift依赖注入设计模式/index.html","3e9ba74b1a4ceec75b9b0935d57b2e38"],["/Swift关于Dependency Injection (DI)/index.html","c24cbe35c795e4e389f10e65715f4a4b"],["/Swift初始化模式/index.html","80eb0267d3cc9f62fc97bc82fc8a30c3"],["/Swift单例模式/index.html","6180be75d74d9fff29196bcab837a38e"],["/Swift原型设计模式/index.html","61a0cc9c3761f759dffde752291223e0"],["/Swift命令设计模式/index.html","1b80ec8893174ae63ce7270d81b96421"],["/Swift外观设计模式/index.html","ee35467bd9b30be87c4449566777c5d4"],["/Swift委托设计模式/index.html","f5e1daf922cdb95b2371cc7012339b3c"],["/Swift对象池设计模式/index.html","4936cf31920a082902116e2af54a0353"],["/Swift工厂方法设计模式/index.html","bd6689a6a4d7bef58a6b2cb284e606da"],["/Swift带闭包的懒惰初始化/index.html","5132a524a10b49b84b837c53d15a269b"],["/Swift抽象工厂设计模式/index.html","85a8f8b96b3594dc3d9c5d3e70c5eb38"],["/Swift掌握iOS自动布局锚点/index.html","0ca71cd08f44c40ad488390d19d0e103"],["/Swift支持旋转的自适应单元格/index.html","0592034b40c1976320ab441d3783c81c"],["/Swift生成器模式/index.html","2055fdf8c51e08c9bf6cc5b29e0ec220"],["/Swift迭代器设计模式/index.html","fabc46925925c6ab592b067a8607b1dd"],["/Swift适配器设计模式/index.html","090e17720cffcddc4ef9c9e9285dbe8f"],["/Swift静态工厂设计模式/index.html","5eef93bf7519aa0368e6d3f5b26e2f0c"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","110391cdc70c99e21f6476387f1f6a6f"],["/UIKit初始化模式/index.html","969c116b39a3dfab7a54c9c26079ccb2"],["/Ubuntu18.04替换国内源/index.html","e59b54a83cd272a28d8b42183711ddac"],["/about/index.html","4fa3115b487a3b2e66f9436ec8c3fcda"],["/archives/2020/04/index.html","9ebaec501811b4c25e69545f67aff0a4"],["/archives/2020/04/page/2/index.html","2a55f94fda2442877b8d3bb91598c56c"],["/archives/2020/04/page/3/index.html","fc950cee05181f2381d66cd9e4f1dde1"],["/archives/2020/04/page/4/index.html","e46cfe17eb089ab5fcb5c5d32244605b"],["/archives/2020/04/page/5/index.html","4de7bdd038287ad845e31dd77b47cd95"],["/archives/2020/index.html","0baf1101460ccb8475f4668a39ef56c0"],["/archives/2020/page/2/index.html","dd823e33c2888e10aebe82fdcb21a9bc"],["/archives/2020/page/3/index.html","61d821c86cfeb90b9812a4d2fc4f9fb7"],["/archives/2020/page/4/index.html","3e5c83ce96f8203f9b06bb3a2203592b"],["/archives/2020/page/5/index.html","921b716bc2ce91920e4180f8882315a2"],["/archives/index.html","201d42312a468c012d25762a177d57c5"],["/archives/page/2/index.html","b09ae1a83fd6f5fa35b28b7f5ded064d"],["/archives/page/3/index.html","5428d01a4f9a6aa8ec8d0e9b3fbc78bb"],["/archives/page/4/index.html","d0eb14e4d00e193a27930befc3147d24"],["/archives/page/5/index.html","7fa2a8ead86323316b411244906de4b0"],["/categories/Hexo/index.html","29c18803ed18f059263c3d53c0fe4045"],["/categories/Server/index.html","dc9b59ce54cac54de10d456bab335c38"],["/categories/Swift/index.html","d8f009dd6621bd9964e4532a8f7b02b2"],["/categories/Swift/page/2/index.html","afd4189217d61c6ddd3923c9ffef7e52"],["/categories/Swift/page/3/index.html","22b622cabe678994871ef377246a4282"],["/categories/Swift/page/4/index.html","8275579819746ba8b3599cfc7f890bc7"],["/categories/Swift5-2/index.html","7ea7acc11135d218bc05f0987f260bcd"],["/categories/UIKit/index.html","2ec1a50bdca489fd6bf72fea15246369"],["/categories/UIKit/page/2/index.html","7257195504134691358fbafae7227ae1"],["/categories/UIKit/page/3/index.html","c848ed944c540a2beeeaa4e48192101b"],["/categories/UIKit/page/4/index.html","70a7fbba064bcaa08436d735e9bf0cf5"],["/categories/Ubuntu18-04/index.html","3f0299db4ce4422cb987c068e484b23c"],["/categories/Ubuntu软件源/index.html","7e8474cb917336984e40432a1c8cc842"],["/categories/Vapor4-0/index.html","574335eda800c3db9e59288cea51eab2"],["/categories/iOS/index.html","f62fb7ca5b0b38a4242e9a93c575c1fb"],["/categories/iOS/page/2/index.html","d7ea049a876a8c77723db4b047a9c70c"],["/categories/iOS/page/3/index.html","caffbb2ee2478e4d6782f076ef0a4e4b"],["/categories/iOS/page/4/index.html","8c401b3713319c441e3b1708745f86d9"],["/categories/index.html","bfb1fa58359eabdc03f1c840f94ec8cb"],["/categories/用户体验/index.html","aea6297ef9c9d922e4c1a4cdccce2eed"],["/categories/设计模式/index.html","b79e23cadebd02bd21f8e8f1f6c8b823"],["/categories/设计模式/page/2/index.html","a1d716fe4596d08515583ffc5b69e530"],["/categories/设计模式/page/3/index.html","5cd45e4ef1c725555b4472e833900851"],["/css/main.css","1de94b559c3df0a5b1b6f350e6f632ec"],["/hello-world/index.html","1aef9b4f33e857917c98d932f0ebd57f"],["/iOS自动化布局编程/index.html","ddb97d214534f98dee4579419562750e"],["/iOS自定义转场(By Swift)/index.html","3c20e89761c382380c46010084d5f51e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","0696fd7b023eb9a4c2e1a38e391db64b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","dbfb96ca191567cf3ff99b36dc1b5acf"],["/page/3/index.html","998c05b12508723deff06680645bae43"],["/page/4/index.html","bb7ddb4138eff82a0ecba354ae7ec700"],["/page/5/index.html","6d64384032780cc0e3453ad5e23c98d5"],["/schedule/index.html","6a895303e970dd0a40daa8416effab6f"],["/sw-register.js","faeafdee23f13a40fa20a883c1a975fc"],["/tags/Collection/index.html","02b2a835d05f0ad201955f28e57f0f14"],["/tags/Collections/index.html","29d272129a73f44ba4547306c1aa8d7e"],["/tags/Dependency-Injection/index.html","c1c4a52a21564fa5f1a5e705f31b0396"],["/tags/Modules-And-Hooks/index.html","624c70dd599bdf51cd66e69224aab530"],["/tags/Server/index.html","17a9227463a77b7d58766d3ac5a92996"],["/tags/Swift/index.html","f4e3c975a7a4fe3370c6f34bfa5682ba"],["/tags/Swift/page/2/index.html","f36bd9504b35fe838a1cd64d180c4f58"],["/tags/Swift/page/3/index.html","e9c983db29eea69fa0eb801a2e23477f"],["/tags/Swift/page/4/index.html","ea237ff25a346088d198f5b6ec1c1c36"],["/tags/UICollectionView/index.html","4a52cc086eab2d964aa966b8b76cc752"],["/tags/UIColor/index.html","752a50083e6fddaece92e35f492ab926"],["/tags/UIKit/index.html","59ec7a7710358ed5c0b8b63f2ae105b3"],["/tags/UIKit/page/2/index.html","84ebc442cffd10ac3b03c0d393cebba8"],["/tags/UIKit/page/3/index.html","e94e2bd830fb4e579119acf9834501aa"],["/tags/UIKit/page/4/index.html","4d407d69a67ebe10e7cf4ee03078b88f"],["/tags/UITableView/index.html","ff8675ce3942f7ef57dcb5a852c30d68"],["/tags/Ubuntu/index.html","aa74a8c59fb74e2ced62fa61e81f3902"],["/tags/VMware/index.html","e52227c1be3fa17f6b565fdf10694e84"],["/tags/iOS/index.html","dac6ffda16eb50fab711f9aa17c1e722"],["/tags/iOS/page/2/index.html","7130c5e71ca96a734c54b1b683e6ce91"],["/tags/iOS/page/3/index.html","44f11a48d9528324a8938ce5fb12f7b3"],["/tags/iOS/page/4/index.html","b091397fb2b4fc69e6a5de864b4c8437"],["/tags/index.html","cad69a0fbafc0363fdb37397a0ea14b1"],["/tags/non-optional/index.html","cc8428e7d24540edd11334beb8a5e292"],["/tags/optionals/index.html","0be3fffe4dd1c6034ac8d109b03acb46"],["/tags/transition/index.html","d516f330fa7830ab20321437446b3595"],["/tags/依赖注入设计模式/index.html","325d212d0d7412fc2f49f61d76d4621b"],["/tags/初始化模式/index.html","ac5f151cdeaf8907918fbca4d40d144a"],["/tags/单例模式/index.html","01c1c33d8497385f4532224f43f42abd"],["/tags/原型设计模式/index.html","d075df73f9d17bd929cfe41d77db750c"],["/tags/命令设计模式/index.html","1281fc33268ca147c80594cbc02ad452"],["/tags/外观设计模式/index.html","0f69b9bdc5237e3d49a83b23d54c43af"],["/tags/委托设计模式/index.html","da9847aa12b7e2b49da87b84c9f2b1c0"],["/tags/对象池设计模式/index.html","8597a504ebba56cc5f851d28418a7c18"],["/tags/工厂方法设计模式/index.html","c2ddf8aadaf997f9058d294b52d05590"],["/tags/工厂模式/index.html","a7a3ee52e4ea9ee1a08ee6c4895345c6"],["/tags/工厂设计模式/index.html","0989726ebc2b9bf601b185de1f667a9c"],["/tags/懒加载模式/index.html","95dbb39ea9c6adfbb8d61f3da89f4c4c"],["/tags/抽象工厂设计模式/index.html","e7d21141bed99f6b568887ed81ec18a9"],["/tags/构造函数/index.html","714e32ef3c32272c6f8c91b47211d3b8"],["/tags/生成器模式/index.html","42f2144a909384071327f007a0d33c63"],["/tags/用户体验/index.html","4ade3b04b54d08236f6547a7b66b8fb9"],["/tags/自动化布局/index.html","f14eb40ef2c31c09f6c3c9523107f45f"],["/tags/自定义转场/index.html","3f20bfa6b28bc6a86d13d18409c223ea"],["/tags/自适应布局/index.html","3ee851ae7fd6cf708d2400622a1e25b8"],["/tags/设计模式/index.html","85bcb9d493c057ac3f0aee62a9246dc2"],["/tags/设计模式/page/2/index.html","32c7903909e4061f3a588579760e4dc0"],["/tags/设计模式/page/3/index.html","1eacc1fe891ce8d44c17af36b4a570d4"],["/tags/迭代器设计模式/index.html","3d514b7f67d724e64ecf1e46fc03dd0d"],["/tags/适配器设计模式/index.html","95d92447c1bb803046eaaf64a08a1ca8"],["/tags/静态工厂方法/index.html","adb3485320ad43404ab209789de3addb"],["/产品开发的幕后花絮/index.html","d01cb1c3c6eb4221a3a4e4de4e18f487"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","d0acf8182f6312508d79aa3c61d994fd"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b9c90c2a6290856207921a9e026a0af8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5926fe6ff26ce4669ede97ad308292b3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f7c52d2e9b9dd0acb5df61ee2ac018eb"],["/在Swift中创建自定义集合/index.html","ad9c49142dcd17bc028993c9dbb4abea"],["/在Swift中处理非可选选项/index.html","31619a9c686cb004c3651dadbd0d98ed"],["/在Swift中重构单例模式用法/index.html","02b09d973b3f0de07271a0da67f43a37"],["/揭秘 WordPress Hook 系统/index.html","a7c52f751bdfc0fcdefabfa55b8128df"],["/比较工厂设计模式/index.html","30cbd745af06c37d5e1d2101c1d9cfa1"]];
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
