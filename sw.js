/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","3cdb99edba637ca914ca64480b108d43"],["/Swift Lazy属性初始化/index.html","00abd93be06835257fef985e20c7214d"],["/Swift UICollectionView使用指南/index.html","19346716b2c465a48991c5697d211654"],["/Swift中快速简单的工厂设计模式/index.html","3aa01ea53f14f482efd02f87ede80083"],["/Swift中构造函数与静态工厂方法的比较/index.html","caf24d59ba45d01368acdda4d1d62884"],["/Swift中的懒加载模式/index.html","877698b1b91eb68dbe41e60043b89559"],["/Swift中的模块和挂钩/index.html","da6125d11a510558ad83e135c164d5bf"],["/Swift使用布局锚点添加约束/index.html","36398e44c8709216ec3313949070d478"],["/Swift依赖注入设计模式/index.html","44d478e712b5317dd86120fa440590df"],["/Swift关于Dependency Injection (DI)/index.html","1c9717dbe22c741239e6865c175c2878"],["/Swift初始化模式/index.html","b0002ec5f059584232f5cf07cea5bda4"],["/Swift单例模式/index.html","14f690f44f69c968ab609d5e51e58595"],["/Swift原型设计模式/index.html","f34b6a263e007c28904382e626ebbb05"],["/Swift命令设计模式/index.html","4252b322ae8c740ff297a315c512bf33"],["/Swift外观设计模式/index.html","b201853d5691e095ef0396b887ccd8b1"],["/Swift委托设计模式/index.html","4dbab659125d038327bcd14dd6fc8e9f"],["/Swift对象池设计模式/index.html","ca8e076cb4532808a84af6a3c901c017"],["/Swift工厂方法设计模式/index.html","5160d44233be27979057393d6dab1ad5"],["/Swift带闭包的懒惰初始化/index.html","6413e781940323ed462d5036f7fd0ac1"],["/Swift抽象工厂设计模式/index.html","71edf441c0ed6cf7bf25f977abaf5eaf"],["/Swift掌握iOS自动布局锚点/index.html","d424105e95f8f7ee6012ed886c7a3aff"],["/Swift支持旋转的自适应单元格/index.html","23907a4985b752139c95cff93de06d33"],["/Swift生成器模式/index.html","6ff62649577b01cac3f557687125a66a"],["/Swift迭代器设计模式/index.html","fdbeb17bb05fda98d1371c10fd6903b9"],["/Swift适配器设计模式/index.html","aa742b16883a60bbf4715d04e9551f82"],["/Swift静态工厂设计模式/index.html","f03023d5a1d019db31bd7472147d57f7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","cd6f63a384a045cdab9c62766766b054"],["/UIKit初始化模式/index.html","99b8cd0f6ae4a911a1ec2347d660f2ea"],["/Ubuntu18.04替换国内源/index.html","64b9562ae16e7942f0acea7ff330e915"],["/about/index.html","948445910190102b5149f7b329add4d7"],["/archives/2020/04/index.html","f2e722cce0a852ec76005890dd73cd4d"],["/archives/2020/04/page/2/index.html","61372df7ec589243f3d6c13ba01283da"],["/archives/2020/04/page/3/index.html","c595627b5e6d08f91d870d927dd81137"],["/archives/2020/04/page/4/index.html","70cb512d2f0f398df2351e58d33ebc81"],["/archives/2020/04/page/5/index.html","dfa64358f4d5cabfc04708a0ee94f6d1"],["/archives/2020/index.html","d6cae010a972d7604ce1b491514e99a2"],["/archives/2020/page/2/index.html","555e3e6b57eea1f351201fdfd2314134"],["/archives/2020/page/3/index.html","423287739cbebd58816b8e7e455c8d56"],["/archives/2020/page/4/index.html","bb6f8696573cdc9df7adf34bd82b9bbc"],["/archives/2020/page/5/index.html","17f1e835f3acdcc073bde8dd2a4fc5ff"],["/archives/index.html","91572bb2faee6b9d4fed8588aea50b67"],["/archives/page/2/index.html","43e5ef74e8594bde8edc0a96fc11431c"],["/archives/page/3/index.html","5edba1d3aca217cfa5e3a8fb5bc46f5c"],["/archives/page/4/index.html","016d434e8216b57c654d07672b0eb495"],["/archives/page/5/index.html","49f1d752d6f8c716851384a32c257727"],["/categories/Hexo/index.html","0c242fe2cfdd64d9fc31bc0ec9e8d549"],["/categories/Server/index.html","70446e3fe3a960785a8e09c051754b9a"],["/categories/Swift/index.html","a46a98962af6a52f6efbe5d999133610"],["/categories/Swift/page/2/index.html","70df6ea32188a4f26745209994ecce6e"],["/categories/Swift/page/3/index.html","c7c70c2f219b778e27923c4e7f2f4535"],["/categories/Swift/page/4/index.html","d9a7fd202144558a6b79a0d1ee22269a"],["/categories/Swift5-2/index.html","d3601e6da14e8c70ce7863fe2e3f0878"],["/categories/UIKit/index.html","2b0891a470fea55e8b4de6026789043d"],["/categories/UIKit/page/2/index.html","5547454ec881360276f66d0ac5cd80c4"],["/categories/UIKit/page/3/index.html","05e7160fd6a1ad11dafb1c7c29478af0"],["/categories/UIKit/page/4/index.html","324e3e3876d6421fa91197e6f59921ab"],["/categories/Ubuntu18-04/index.html","ea27c73cd9c0ac801343f9314ccc00a4"],["/categories/Ubuntu软件源/index.html","2b5f00964798d653ed10ffe4ce665b8d"],["/categories/Vapor4-0/index.html","43c0f5ce02e56f93fa8a558639515b10"],["/categories/iOS/index.html","a4e877f6a90930875b07d1618e8fcea9"],["/categories/iOS/page/2/index.html","fea0c18189ba55d5fcab2c1c168885f7"],["/categories/iOS/page/3/index.html","6e98e6d6bd4f9b28836700b5e12a987b"],["/categories/iOS/page/4/index.html","371a0bea06023fa97db6e25ca4e0e21c"],["/categories/index.html","940f8d4bf684b9671e9e0244c767d8db"],["/categories/用户体验/index.html","746cadb946a59bcaabca40a2f8919c89"],["/categories/设计模式/index.html","d499e6a35531e37999e39606e9e7beb1"],["/categories/设计模式/page/2/index.html","e035cda68414b7450ddf058d9fb1f82d"],["/categories/设计模式/page/3/index.html","7dce105766363ae1540e65a544911a30"],["/css/main.css","07a6bb5fee632795d878a81e19eaf4c1"],["/hello-world/index.html","bfb3c5479e04c5b71a11897829166c25"],["/iOS自动化布局编程/index.html","ccabf2ac2ceb93902b0de0ba8bf00679"],["/iOS自定义转场(By Swift)/index.html","f4a898900b59195ef21852e2dbffad26"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","323c54a4bedf427df514f5fad10b16ae"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c56ed6433811042ceda34198cba85021"],["/page/3/index.html","6c6a78794db390e90b321f87acad9a4b"],["/page/4/index.html","18165931d3a70237ba8f6e95132a0a3a"],["/page/5/index.html","58823dd68794724991c61ff9292cdd09"],["/schedule/index.html","d300182aacc70a73742e23b656aeb051"],["/sw-register.js","f22085a577e51a3b189ea817447a3f9c"],["/tags/Collection/index.html","6718a9e6a96c60e7425e208129c2b81d"],["/tags/Collections/index.html","d8acb3857b2677ff7b8ecb896216df57"],["/tags/Dependency-Injection/index.html","650522437654b74d73f9c667d7d9999b"],["/tags/Modules-And-Hooks/index.html","af8e7884e0adeae65a5ecc71a93491ca"],["/tags/Server/index.html","693f218d52b9e205dbc90000da746e4b"],["/tags/Swift/index.html","2de7f525d9fad2384a2c1e2ebabf8458"],["/tags/Swift/page/2/index.html","0cdac2bb984d03e9938fc1070c7152ba"],["/tags/Swift/page/3/index.html","2c258b9b0d9f7a29e2f6ab83a4ea729f"],["/tags/Swift/page/4/index.html","50a9ee51ab447d702b45fcd22c1acad0"],["/tags/UICollectionView/index.html","c853297f659560016dc3f3e55d944efc"],["/tags/UIKit/index.html","c012c574ddc312c3010e8295cf4597af"],["/tags/UIKit/page/2/index.html","05a88a13c62f0be0d0ee2602e7302e13"],["/tags/UIKit/page/3/index.html","ee1eb5133cbb79d2e6e142cde6c7fb70"],["/tags/UIKit/page/4/index.html","c469cce3a7ee87a82560b11a20953cfa"],["/tags/UITableView/index.html","dff6cafb7a1cdcb6af0a00dcdcab54b2"],["/tags/Ubuntu/index.html","6b1b4c967c42ca7c887aaf0f68833b86"],["/tags/VMware/index.html","9cb551fe432607953b5180d3408b2f28"],["/tags/iOS/index.html","301301f0014737c778c0e1c31ae67103"],["/tags/iOS/page/2/index.html","357d1627d4aaeade5464e7e249decddf"],["/tags/iOS/page/3/index.html","d89d9ab161c463b2839b2c6acfc0dd2f"],["/tags/iOS/page/4/index.html","1197d376717a954eae73b3a0c58acb59"],["/tags/index.html","a7dcd6586e3fb3796122bc17fc7e9779"],["/tags/non-optional/index.html","a5fb196b5b88d6fbda1813b0185952df"],["/tags/optionals/index.html","c6b46575f6ee804b066110bcf9871023"],["/tags/transition/index.html","4e9c57c9f5f7a7c09dd3a143571c65a3"],["/tags/依赖注入设计模式/index.html","02336feca9c1f5e04ba81d2431bfadcf"],["/tags/初始化模式/index.html","034ea110b129fe0741061f2a438467aa"],["/tags/单例模式/index.html","725c22dd5b7916dbe54974024b78a1ce"],["/tags/原型设计模式/index.html","6dbaf43ca94fd62afee0d7c05bdc0619"],["/tags/命令设计模式/index.html","2cdeaade5c06a6b301bb305150655243"],["/tags/外观设计模式/index.html","e4aa7162e601869d9efe858fd880cc3c"],["/tags/委托设计模式/index.html","079293592b9c667578ed89337ec49b2b"],["/tags/对象池设计模式/index.html","576037960334b855293e1da521bf6629"],["/tags/工厂方法设计模式/index.html","1392207c26ebe5eb8d81ec13f45a3419"],["/tags/工厂模式/index.html","05cc66f5452d8564a78ffbe6eb4bc0c7"],["/tags/工厂设计模式/index.html","dde06e64491f8be15cd141dcfcc6cc49"],["/tags/懒加载模式/index.html","2cc5118df6f420c157b11b749b3e2373"],["/tags/抽象工厂设计模式/index.html","c55245ed13fc29daaae8864a49ce94da"],["/tags/构造函数/index.html","847f9faef632e51bd89f91e71143f231"],["/tags/生成器模式/index.html","3a31964aea742580a9acaa81229b372b"],["/tags/用户体验/index.html","2b15c70a5b94ea44f1c399e12a4aaeaf"],["/tags/自动化布局/index.html","ff8b7eeb253c1b2c36bc8089157a4948"],["/tags/自定义转场/index.html","612fa842623c8344c472c2d34e33bc52"],["/tags/自适应布局/index.html","1543808c2341071148a7d79edb448182"],["/tags/设计模式/index.html","8fad39991edda7154d74bd886d116afc"],["/tags/设计模式/page/2/index.html","e2ea6df0f77884c5431495ec72258534"],["/tags/设计模式/page/3/index.html","2cecd26e274f0676b9da89525478fcca"],["/tags/迭代器设计模式/index.html","cb50314b027496747f7d29079eb4c2ce"],["/tags/适配器设计模式/index.html","1b0424a2d909a2750f505f5ea9109c0c"],["/tags/静态工厂方法/index.html","5bb4f2f8ed0382bc2ccc1070c7be3df1"],["/产品开发的幕后花絮/index.html","6aab6d55eb5351590c7df67cf8fe65ac"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c05c0c648d8f2e40cd21f1f95fab65c3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","2869133d31fd17f8d7281a5a04501d92"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a66f245d88a8e3455122df9d626cb0b3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e87b3ec0c1ba3b52a8f9b2123a4d7be9"],["/在Swift中创建自定义集合/index.html","d741e951776e228e6ab6de516056c4a7"],["/在Swift中处理非可选选项/index.html","2b0940669d73848d79cd0054910d194c"],["/在Swift中重构单例模式用法/index.html","d3f294e16f69b15362de91889c509451"],["/揭秘 WordPress Hook 系统/index.html","32ee712e44b5082871530212e138fe40"],["/比较工厂设计模式/index.html","385174956d8731d672de40a2f52a57ec"]];
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
