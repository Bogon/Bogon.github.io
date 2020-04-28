/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","a86f41f90e13dd0827067e97ffc54734"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d48980ee6d7b28f17461d83ae180ca1f"],["/Swift Lazy属性初始化/index.html","e78806dc0fbe437b3bb215beef7eefd5"],["/Swift UICollectionView使用指南/index.html","c425f1fdd2d3049b9251780067cb5fed"],["/Swift 选择和播放视频/index.html","84714789ca7bc6cbbd8dfcda1a47761b"],["/Swift中UIColor最佳实践/index.html","43cda145e664f4bf9d1ddd1ac2bc53e2"],["/Swift中快速简单的工厂设计模式/index.html","a50de3a9b7aa6fe511f1622fc94cf2a6"],["/Swift中构造函数与静态工厂方法的比较/index.html","5bab7a630de84fa2785bafc202009c8b"],["/Swift中的UITableView教程/index.html","17a008002c90ed28e15a33ed7e5778df"],["/Swift中的懒加载模式/index.html","4a6adc8cb228e9ad5ae1d9e9d1830436"],["/Swift中的模块和挂钩/index.html","0e1c5116f215953e975ad6c62d247a81"],["/Swift使用布局锚点添加约束/index.html","78e3a870cd7ba327799faf4ae87b3374"],["/Swift依赖注入设计模式/index.html","c9ce183115f9e7cdf0c15bb5b79f5aa5"],["/Swift关于Dependency Injection (DI)/index.html","a5b06b85e4c509d08f9d18e637edc7be"],["/Swift初始化模式/index.html","d7c7086989b3d45b0f12428bdb318295"],["/Swift单例模式/index.html","73ac88fd9b0a889a16e61a1218461598"],["/Swift原型设计模式/index.html","b9f08c63fa29975c9824a048e7223357"],["/Swift命令设计模式/index.html","80b6e1312edb1cd961364436cc8071b1"],["/Swift外观设计模式/index.html","b4a715570b3dc64e46882785365fca65"],["/Swift委托设计模式/index.html","0a03dd95b9e9402f5760067df54814d4"],["/Swift对象池设计模式/index.html","24aa3b8b42f4dab7acf07706325546d6"],["/Swift工厂方法设计模式/index.html","443e5a799dcb5c1e900685b497aafd12"],["/Swift带闭包的懒惰初始化/index.html","69d24ac0be1080634331d8ab5ec8b170"],["/Swift抽象工厂设计模式/index.html","7bffd397666b0050c480d90f125ab5bc"],["/Swift掌握iOS自动布局锚点/index.html","b140b1f61bdd379c3caed1c5ce5bd9d6"],["/Swift支持旋转的自适应单元格/index.html","40f72ffc27583606d2a24f5c325f849e"],["/Swift生成器模式/index.html","32e02929c055e23fbda867d5dab42c76"],["/Swift结合Xib文件自定义UIView/index.html","1af312e0ce7b49d3d7840258352fb79a"],["/Swift迭代器设计模式/index.html","d5f4477ded2e8dbc9852bead11a2765c"],["/Swift适配器设计模式/index.html","21bc667cbd4115c69a6fbbfdb887d337"],["/Swift静态工厂设计模式/index.html","b61c420a960fc0a0d8fcf9820176c368"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","5db6646710c811191c198df0e45691e1"],["/UICollectionView data source and delegates/index.html","960735fe2bfc9f9713f5ce1568711f36"],["/UIKit初始化模式/index.html","fa62efec6b5013055befeb22d3258365"],["/Ubuntu18.04替换国内源/index.html","68db725a00e3d37b9c38959a4c80a6f5"],["/about/index.html","02a0988c70d4d054aafef2c110029540"],["/archives/2020/04/index.html","e2d6925473ea500012b86fe198b4402a"],["/archives/2020/04/page/2/index.html","c985152196a8bdf50e0e0ca122358b86"],["/archives/2020/04/page/3/index.html","d17db6c7b20365737b1973246fa8feec"],["/archives/2020/04/page/4/index.html","fb285c5f7a3adf259d061a739e2067fd"],["/archives/2020/04/page/5/index.html","913be89e5d2fd3bbed0a86a3b74a00dc"],["/archives/2020/index.html","a9306268ddafb9ff11f757819677ec42"],["/archives/2020/page/2/index.html","b6c922714a3604dd9e5ba9fe254d752d"],["/archives/2020/page/3/index.html","79d8fed54b2f189ccde2a8d7188c1077"],["/archives/2020/page/4/index.html","6505104f922446ad8c9933d265a3f690"],["/archives/2020/page/5/index.html","7fafb589f56785956546652a4351776d"],["/archives/index.html","00229869af82d3a3d8b3d36af39f2f33"],["/archives/page/2/index.html","9d9fa2288c6237db19e78ee862b7e43c"],["/archives/page/3/index.html","ed381df5d50dd1a6681c6dc2afdda8e5"],["/archives/page/4/index.html","e7584704203d1384793cd369467f6d19"],["/archives/page/5/index.html","acb1f24e01c11f1b2af94955b4cd4be9"],["/categories/Hexo/index.html","bfe516864b2201e57c973ca7cf644881"],["/categories/Server/index.html","49f6af3e7bdd3caabc9258500c030fc5"],["/categories/Swift/index.html","b5ea16ac8c726ec480cfa0e116acfca0"],["/categories/Swift/page/2/index.html","0db3f504afad4eba850cc38d25f3c1db"],["/categories/Swift/page/3/index.html","32c77549b1934cfcc3385d9dbd2c449e"],["/categories/Swift/page/4/index.html","7bbc1e685380ac50b88b08c8ef001cc2"],["/categories/Swift/page/5/index.html","99908fcd7895ff6482cfe5b9e2018620"],["/categories/Swift5-2/index.html","8d21365ed5805ae281879b159aa86f34"],["/categories/UICollectionView/index.html","4ae62cd8429a493323f4c9bbd206ace9"],["/categories/UIImagePickerController/index.html","9ddc2d05d1983da8fcf18e6917d48a20"],["/categories/UIKit/index.html","1b8ab0459c0a563b983a52f896ddca4f"],["/categories/UIKit/page/2/index.html","7373ad00a169a87e9e6eb42bb13bcce2"],["/categories/UIKit/page/3/index.html","5dab4b66a33be1fbe866606ce552ddea"],["/categories/UIKit/page/4/index.html","b16fe69a68594807c7d4ff7fc2c5661b"],["/categories/UIKit/page/5/index.html","5d6a1e5b03b655a1f60b8aecd60e539b"],["/categories/UITableView/index.html","886d96878e12c872ece4c3a16c7a6763"],["/categories/Ubuntu18-04/index.html","5dc3e9f18771ad484615853e21da969f"],["/categories/Ubuntu软件源/index.html","ad0ee5d0a2dacd3e8f0b68aa2608ff08"],["/categories/Vapor4-0/index.html","d3957aa4ff8e9da107577b97046376b0"],["/categories/iOS/index.html","c869279f956c41b97cb0da5534c155f7"],["/categories/iOS/page/2/index.html","fd9c1d5f34b2171cd594b13759fa0dfe"],["/categories/iOS/page/3/index.html","426a8b8b6bedca73f78f1c8d34149cf1"],["/categories/iOS/page/4/index.html","7af4cffb93a0b55bff87f1d79f72d8be"],["/categories/iOS/page/5/index.html","aada74db86990e4bb8206c5754059128"],["/categories/index.html","d4929c01452490c92fdad76daebb5086"],["/categories/用户体验/index.html","40ca339f2a37b68f273f7966dff25c3b"],["/categories/设计模式/index.html","75ca1dc59e21e25c0140b09d9bbeb052"],["/categories/设计模式/page/2/index.html","f5a8f4c3b0a22e33ff54cfe4b861f3de"],["/categories/设计模式/page/3/index.html","c11fec645c1e60d6d2a7552d4678afc9"],["/css/main.css","1dca69facd73d837d5cc23d8066fa0e8"],["/hello-world/index.html","d75fe0425973b2f6e6b0c286b261da1c"],["/iOS自动化布局编程/index.html","b8247583be2331427fdabc7bd6502173"],["/iOS自定义转场(By Swift)/index.html","b0f483a8b0058415b2ee79588da397fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","153c6aeca0ccffed19b19b95ad42a74c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","85d7101c44919a3579c0a518e3633db2"],["/page/3/index.html","a28c19b7a658f1c2fadf4e6caf4e67ee"],["/page/4/index.html","3ffb1585e3a315d0fda35e08e3d284ce"],["/page/5/index.html","25a4051da9701eed0714bc6f8970418e"],["/schedule/index.html","792e76370abd9084189fad82e193d85c"],["/sw-register.js","8e0ff5ab8f1bff861b941b4ed1a1dbc1"],["/tags/Collection/index.html","e451157e652f259686cf76070fe0acbf"],["/tags/Collections/index.html","177bc56db6e4268010bf44f7ef11dbae"],["/tags/Dependency-Injection/index.html","78ee82c9d98491df141a440dc60743fb"],["/tags/Modules-And-Hooks/index.html","b0096984c384d3b55e240682c59b2f34"],["/tags/Server/index.html","446eeb4fb07fc2ea1502bf46878e6692"],["/tags/Swift/index.html","de1ca038e1f6811cec914e7a7b0e1ca3"],["/tags/Swift/page/2/index.html","7796af37bce508accd7579d25a715673"],["/tags/Swift/page/3/index.html","4bded72eebc64bf6a8fc1931b7c3eee4"],["/tags/Swift/page/4/index.html","ce2e7aeb9b6ea71e278990659eba94f2"],["/tags/Swift/page/5/index.html","e7361cd84b198871323c7d9a54f5d610"],["/tags/UICollectionView/index.html","68fd3d038ff5ff5bd8b45b2c839810ae"],["/tags/UIColor/index.html","29f1c2cd4955b7603df2fe07b7bd9fb7"],["/tags/UIImagePickerController/index.html","dc9d26867673dc77eedf0b2a3585e958"],["/tags/UIKit/index.html","973c0fda85c6986cf1748c4cab350302"],["/tags/UIKit/page/2/index.html","77b88b23b3d2180132c59d5391c5e424"],["/tags/UIKit/page/3/index.html","c8ce8c223bd13b6b716e42d7b5a0e41f"],["/tags/UIKit/page/4/index.html","c38f525606f11e066eac2c322ce01f45"],["/tags/UIKit/page/5/index.html","dfd334d07bb10b5baa64335e0c539e91"],["/tags/UITableView/index.html","40472c9c227d6c920179176f07092081"],["/tags/Ubuntu/index.html","30add086af8e3b5b9a4e5351bd47cb2d"],["/tags/VMware/index.html","ce6dc8d6ffde9c04621c883e6d6c8560"],["/tags/iOS/index.html","c3657b03dd68d9d2b6abf38ac6dcdc44"],["/tags/iOS/page/2/index.html","5443597edef217c76251a38e475d8bdc"],["/tags/iOS/page/3/index.html","9106fa807f9eb47f36d54f56fb4893ea"],["/tags/iOS/page/4/index.html","9fdb76c1d67dc49b27cee43c5a002487"],["/tags/iOS/page/5/index.html","ef2085faca01065e794a8911a916dd97"],["/tags/index.html","8fac032e81ef5bbbb35f3e21fdbb2c1b"],["/tags/non-optional/index.html","58d0fd59c76faef98a6a783ac67a1492"],["/tags/optionals/index.html","bfa91092ee69f59ba5397b9231c528e7"],["/tags/transition/index.html","2d14da03274f8232d77aa608f51af4a2"],["/tags/依赖注入设计模式/index.html","e8e5ff7d9a69bfffca776f777e4b733f"],["/tags/初始化模式/index.html","fdaecf4d01156698361755ba673e9791"],["/tags/单例模式/index.html","29d1b2e7a6a9f48c7eb4a7215a258837"],["/tags/原型设计模式/index.html","0ea91487db7a764da2e0a93c5bf4444c"],["/tags/命令设计模式/index.html","b19cc0e59b6c25670de6931b9ee2d9db"],["/tags/外观设计模式/index.html","f0d23927d3c487461f9de1df26f2ec9e"],["/tags/委托设计模式/index.html","96ffcbfc242986031c3ba581a5d716d9"],["/tags/对象池设计模式/index.html","aac3a6796e843d358f78a62c6d906cd5"],["/tags/工厂方法设计模式/index.html","cce620b717ebbc3d109217def9fa275e"],["/tags/工厂模式/index.html","ad14da97994817e211e7cdccd19d88fc"],["/tags/工厂设计模式/index.html","6187f1acd3ef3ad3cfb637771da9799b"],["/tags/懒加载模式/index.html","56d02fb8ed56384c6562b466dd54e889"],["/tags/抽象工厂设计模式/index.html","86aef0474e5f147686f5bfcedcce4977"],["/tags/构造函数/index.html","8bf7e06e4b230a1159d74b6b95a9b51a"],["/tags/生成器模式/index.html","8a9a64bfc1089602beec63068b154964"],["/tags/用户体验/index.html","9ff2ad6f13d9c62e25292de6a081fe54"],["/tags/自动化布局/index.html","6a541e5d891a1b37e34a4405a62f7248"],["/tags/自定义UIView/index.html","94453aa6d0daf8c9dc03a328d59de144"],["/tags/自定义转场/index.html","ed5f464a3fa495df2f6449e1e185b14c"],["/tags/自适应布局/index.html","6234bd29f450f1fc06cd74842b27d6f5"],["/tags/设计模式/index.html","bb044eb90ef4c97c78b2602e6f5b8715"],["/tags/设计模式/page/2/index.html","3bc5f70f87ad3339404b904010c05487"],["/tags/设计模式/page/3/index.html","327366f38327991ce148c2904c114a0a"],["/tags/迭代器设计模式/index.html","474f320e1512f3aa34333e1f81802a69"],["/tags/适配器设计模式/index.html","7b0ad61587d45e48351383f3fb32851f"],["/tags/静态工厂方法/index.html","dca82672bbb42517cd7a1c092a0090dc"],["/产品开发的幕后花絮/index.html","872de8b5e683929cf076839fa15e077c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e12e29fa53e06f68217bcca227f71298"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d0a5437addf0da6bb6d21fcd161ad800"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9f237c68edd8be08fa9f08c1876d9434"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","697b2727e80faa188e9d41d5461f0a38"],["/在Swift中创建自定义集合/index.html","0a2384d05523736a5bbbb8e637823322"],["/在Swift中处理非可选选项/index.html","0c6d33d13ffceab124907e4b88bd0581"],["/在Swift中重构单例模式用法/index.html","4cc6f907fac23e8857e6b8c82ea698bd"],["/揭秘 WordPress Hook 系统/index.html","b8681fc237a5e3243b94824bdf794c73"],["/比较工厂设计模式/index.html","a15673ad11834ea1215f49b47856f44e"]];
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
