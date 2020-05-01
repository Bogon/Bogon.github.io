/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","794c2a7a5a511c3ab6cca74ec4a3b802"],["/NSCODER和SWIFT初始化/index.html","789707342e69d28e7800964d5ca20f13"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c8e82a2238a8484ca8f09aab81621910"],["/Swift CompactMap vs flatMap：差异说明/index.html","5d771db4d24c12467543dec7878613d0"],["/Swift Grand Central Dispatch 深入实践/index.html","e876afa30db03b9fe40558ca7842f7f5"],["/Swift Lazy属性初始化/index.html","543291da5aa88f00249e8805462e3952"],["/Swift Promises 初体验/index.html","bd1a720bf69c144dca765db3a2a7c456"],["/Swift Promises 探究/index.html","143c64d3b56e1bb8fcf8f4902f182412"],["/Swift UICollectionView使用指南/index.html","82b4242ebfb3dec57dee018c446c3c38"],["/Swift URLSession && Combine framework/index.html","a1e4baa87e388a81633050406d96fdeb"],["/Swift 唯一识别的视图/index.html","1a05e49df3533a80164dd16ea3608df0"],["/Swift 如何学习现代UIKit？/index.html","af2f8fa34fa84543964153a20423fe26"],["/Swift 用 compactMap 替换 flatMap/index.html","01de37a3f0d0f0437c15a90f152996a5"],["/Swift 选择和播放视频/index.html","9c2925a4338518b278b70ae85f0cb12e"],["/Swift中UIColor最佳实践/index.html","a48a5f60c4a752c71ed88ccf3a8ebe1a"],["/Swift中快速简单的工厂设计模式/index.html","7f9c63d8b2592735fee4c599f7bcae48"],["/Swift中构造函数与静态工厂方法的比较/index.html","582e3d46ab49e99423420f578ff8f860"],["/Swift中的UITableView教程/index.html","a45eb96f2155f85288ae861f2e671198"],["/Swift中的懒加载模式/index.html","50f09799fd066cb9e3805ea3bffa6441"],["/Swift中的模块和挂钩/index.html","6bd59b8a80a2ad720f490d7643a677c8"],["/Swift使用布局锚点添加约束/index.html","4da072596f45bd421f6e96b736054dd0"],["/Swift依赖注入设计模式/index.html","cd1a6a5d0e89bf08a1453f2fff1930e2"],["/Swift关于Dependency Injection (DI)/index.html","9139d9bad65b31e2f58b4224ba07bf68"],["/Swift初始化模式/index.html","89f04cf8d4fe723836745ec56a7f1eb3"],["/Swift单例模式/index.html","83e6786ca9ef026f880e78ddf7a84eec"],["/Swift原型设计模式/index.html","6f51a1ed8e616a988b1d52f078e90acf"],["/Swift命令设计模式/index.html","9b76cc25314de3a336460f7f0be34d2d"],["/Swift外观设计模式/index.html","2cf024cbb80d0d6ddeef36e0a2b3c13a"],["/Swift委托设计模式/index.html","1257586dcb0a7dfeeab1c54402037365"],["/Swift对象池设计模式/index.html","e3b192f0afe0c6bb905eba462fd96def"],["/Swift工厂方法设计模式/index.html","5c68f707321f9d299c18576399fd26bb"],["/Swift带闭包的懒惰初始化/index.html","9284c8366b940e4a27afcfd218187ebe"],["/Swift抽象工厂设计模式/index.html","91d17c87254abccb1e3f4224b2bd3fba"],["/Swift掌握iOS自动布局锚点/index.html","b4214e40a9f776330d39f48aa5114510"],["/Swift支持旋转的自适应单元格/index.html","d6828aa61d59a6d85e55fbfda1bea272"],["/Swift枚举值/index.html","01a9d62aff56c0e7eb360b7c4a69ab77"],["/Swift生成器模式/index.html","f1a0754f5daf170830221ecb54cd3f6a"],["/Swift结合Xib文件自定义UIView/index.html","2aca52e04eb539b0e5c234c12b67af18"],["/Swift编写的20个iOS库(一)/index.html","b35a8729a1d1cdc5d3f289368d16be12"],["/Swift迭代器设计模式/index.html","85879cf825dd70e5a32664b3e1d650f0"],["/Swift适配器设计模式/index.html","dfa1a9383198719e8e7e808574ba9d94"],["/Swift静态工厂设计模式/index.html","f429407f2ec0eeaae841d64c46d274d1"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","267f6b99f20def923af5264b22dcc967"],["/UICollectionView data source and delegates/index.html","819c6a8f757f21da1beb4e41759eacb2"],["/UIKit初始化模式/index.html","05874a42aadf9986f52aab0afd5a16d8"],["/Ubuntu18.04替换国内源/index.html","f9cc01078a8d0337e1e79cd5829af281"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","5254d1ebbf0dce5639514479a2d243b3"],["/Xcode扩展/index.html","88868d1c8e48ce9ff36165ee5e29a801"],["/about/index.html","939b1e47b2db5fea8a6398391a18fb59"],["/appleOS的Networking示例/index.html","8c886a7f5823a2298ee25c35ab71dcb3"],["/archives/2020/04/index.html","e605a274ffcf2b1d1e9c4d97beddb277"],["/archives/2020/04/page/2/index.html","624933e1c02824a22f5d4e5c56761065"],["/archives/2020/04/page/3/index.html","d92de2d95f869e74fcf801b597191c01"],["/archives/2020/04/page/4/index.html","7c0ebfc0f9abfbda771a4f67bbdbf1f3"],["/archives/2020/04/page/5/index.html","0c9ef3b0820eceb0164f3b0bfe8c3c1a"],["/archives/2020/04/page/6/index.html","807337fb840385276e8bf682ff5e16ae"],["/archives/2020/04/page/7/index.html","4dd9f5787b90d9e99f77e67b8be514f0"],["/archives/2020/04/page/8/index.html","5294bcde5cf94a48c184671d55e0e020"],["/archives/2020/05/index.html","c7371b2fcb322c948db8805a887acb7e"],["/archives/2020/index.html","0062c0340a84802ef3f64fcc1816a0cb"],["/archives/2020/page/2/index.html","50c1314544d73be159bf6e2a0c0e4b40"],["/archives/2020/page/3/index.html","c441ef9dc3c4ddad77adf463a003cc76"],["/archives/2020/page/4/index.html","bbf549ddaee394af3a913958a23cad38"],["/archives/2020/page/5/index.html","27fa978b0feed409ed021a4a8f8a359b"],["/archives/2020/page/6/index.html","e8bc82f2e689d49ea4d31da3800404db"],["/archives/2020/page/7/index.html","06831462dd824578b61a02c58e40b7ae"],["/archives/2020/page/8/index.html","790e60c684a6b4271d4e43e8ce6f3624"],["/archives/index.html","6f6a0c9ea0a59bfca91924dfdd8d6273"],["/archives/page/2/index.html","68d173dd023cd98877b511206eb3c8c6"],["/archives/page/3/index.html","05a6e17ce38f34d1dc5d211f49775f56"],["/archives/page/4/index.html","3ed7e59f5fd42122c2d03ec72276351f"],["/archives/page/5/index.html","006d1b3499cd6c3997330bccd5ddfa34"],["/archives/page/6/index.html","10d7d1efdf13b1a96f4db7e6a0d36ec4"],["/archives/page/7/index.html","d94b2cfed69100c92f6bcdcd837e0adc"],["/archives/page/8/index.html","aba759e68f0f86f0f965cc7b06cb0818"],["/categories/Codable-protocol/index.html","48d452574c0eabca4888ff80b6f9dc66"],["/categories/Combine-framework/index.html","61c17873b85978d61910eaacad8d34b6"],["/categories/Grand-Central-Dispatch/index.html","64bd0cad4fd01f345d3a0c8fca82e986"],["/categories/Hexo/index.html","44e9867d5fec38e7839b24e9a0fabe06"],["/categories/Promises/index.html","84fe212bf39f1741c8bbe62f0884c498"],["/categories/Result-Type/index.html","ce435e391ad1829da0553700ee87a4bc"],["/categories/Server/index.html","6749a33d0e6fd81ff536fa0fc97328de"],["/categories/Swift/index.html","75072d83865772de3f320456937da425"],["/categories/Swift/page/2/index.html","55107aa3928c7ab1583b77ca33c3ade2"],["/categories/Swift/page/3/index.html","5d2fb66abc7fc040f2cc1b26c9be8130"],["/categories/Swift/page/4/index.html","1603c8018ad9bc33d6e7494f5ce03f17"],["/categories/Swift/page/5/index.html","6a718b74bc8af6f54da1c900eb8b06e5"],["/categories/Swift/page/6/index.html","4d2c7afb1fe2bd53eb4004a9fb260d5f"],["/categories/Swift/page/7/index.html","6fcc35b4a896e19ce3e03a0c7e2c9606"],["/categories/Swift/page/8/index.html","afc90ecf5c7eeee170e9a0fc8ae3dd73"],["/categories/Swift5-2/index.html","8142578b260454e3ee782c00bc8df39d"],["/categories/SwiftUI/index.html","705001ee25662463a1cddec54de7cc4b"],["/categories/UICollectionView/index.html","df4c85b005a8ebda96b421ff5c5b10c1"],["/categories/UIImagePickerController/index.html","878fdf27ccc1b6268c330ef711e6b50e"],["/categories/UIKit/index.html","0c701f29f4c07370692691abce110863"],["/categories/UIKit/page/2/index.html","d243991d1888fcba053cf2c0ae4a0abe"],["/categories/UIKit/page/3/index.html","fbe26992e7d1864d31729a16f1aeea57"],["/categories/UIKit/page/4/index.html","933fa32c59b3249f40dc9342dd70deb3"],["/categories/UIKit/page/5/index.html","254bbd04937757e94ed5d957c2aef9a6"],["/categories/UITableView/index.html","9985d413d81ee0e5d80a0e83c5104b83"],["/categories/Ubuntu18-04/index.html","5f50b6720428a637aca9fb98a9469e96"],["/categories/Ubuntu软件源/index.html","fded6c0d7c063acfc3eccd83f521ab1b"],["/categories/Uniquely-identifying-views/index.html","354cf1d069e6a57f2f11edfc4e457dda"],["/categories/VIPER/index.html","8bd4a56b5686de748b9e91a4de7580dc"],["/categories/Vapor4-0/index.html","5a94cc55ca1d369934779b8a95baf553"],["/categories/Xcode/index.html","6fd9730527db923e1a04a961c9292fd1"],["/categories/appleOS-Networking/index.html","5d5eae7f1b32bac463675bb529fdcf6c"],["/categories/enum/index.html","628302d0fc63f978bbc6d0edec064f2c"],["/categories/iCloud/index.html","9d00306fffe1da7eb1e44b062ca96040"],["/categories/iOS/index.html","d0034d4fa09cf86acb7c10283d647cdf"],["/categories/iOS/page/2/index.html","85b880d414fbb18afd60c38aeb5ed2cd"],["/categories/iOS/page/3/index.html","4cf192ccad21039f79dcdabee7728e7e"],["/categories/iOS/page/4/index.html","9870b74d77c0839ec344a3a1319936ea"],["/categories/iOS/page/5/index.html","7d9fe3542a308c12743b053ddab119ca"],["/categories/iOS/page/6/index.html","f9c4101565d9b923280bcbe6fc586a12"],["/categories/iOS/page/7/index.html","3fec15ad2d5e24b786d43910185a28c1"],["/categories/iOS/page/8/index.html","5b866369963044dc243c2456a8b7d594"],["/categories/index.html","627e7cb4e15023ebe4366611bacfc652"],["/categories/random/index.html","019901e57af961479303d8c06839e7c6"],["/categories/三方类库/index.html","697800da6f6d800e35699afcbc809ebe"],["/categories/函数式编程/index.html","80a470af999213e0b4573fcbc4c83d02"],["/categories/子类化样式/index.html","52683052510d1128c2ae07cc2c7580a6"],["/categories/架构设计/index.html","157cf55051ce448db88b3c363ff9756d"],["/categories/用户体验/index.html","c0e8a93d7fe420300ab854ebd13e8282"],["/categories/设计模式/index.html","25c61389a87ec53515a0c9ab980fb5a8"],["/categories/设计模式/page/2/index.html","92378f19b87674b6f450e25f4d1e6a50"],["/categories/设计模式/page/3/index.html","82be657a91e895d578c4afa224c2a797"],["/css/main.css","578ef27497d1cb8214d3ccf85bf67357"],["/hello-world/index.html","4b105fa2666e4a25ff01e02281f3563c"],["/iOS VIPER架构深入实践/index.html","d0ec33ca967eafac16606bbe48d847b1"],["/iOS 自定义视图，输入表单和错误提示/index.html","86641c2eecc1818643c8b0704842f00b"],["/iOS如何使用iCloud文档？/index.html","71a92d0cb223096b7060f303ae2a17cd"],["/iOS子类化样式/index.html","8553c23e7e10133ec25799dfcad447ca"],["/iOS自动化布局编程/index.html","b330350bbeea473d6f94a2f03e9ce85e"],["/iOS自定义转场(By Swift)/index.html","cc7ff69cd42c2986467fcb172ad6b9d7"],["/iOS项目架构：使用VIPER/index.html","b98107483ebad2ec27e608bb387da07a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","27976e394e87064a09f24238be16586e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","68947c1e1d9f0c525d1b06e962622bba"],["/page/3/index.html","5ec82c1d96c5f899ca1616982f73e395"],["/page/4/index.html","bf6cc370088c34e86b190554b1fb11a8"],["/page/5/index.html","328bd255109f15d2186772fe173355df"],["/page/6/index.html","6f6cee5c1927297e221dbc2598cdcbdf"],["/page/7/index.html","c17c2dd7daef4949752904f1641da992"],["/page/8/index.html","bb51771538231b6d7014401f7e80a9b9"],["/schedule/index.html","96075769a30e0cb63d9c61d1192e41c3"],["/sw-register.js","7f0e3bbbfe2fae8abc098b90c2a5d1fc"],["/tags/Codable-protocol/index.html","292df6b74c8baea84abdf9c07d5c15c1"],["/tags/Collection/index.html","8b33cc0776650d3bc537635ce7e99658"],["/tags/Collections/index.html","4ebcfff18258b757c8b6cf97687561a3"],["/tags/Combine-framework/index.html","8316bedf4f9d2363e24c3dad798593ca"],["/tags/Dependency-Injection/index.html","30184e3a0ae6ab96a3233fa3d07fb5f1"],["/tags/Grand-Central-Dispatch/index.html","f335853812e250d02febb73fe646a3e5"],["/tags/Modules-And-Hooks/index.html","443a5bb415342f9fb241875ca1ee4dbf"],["/tags/Promises/index.html","2099586beb30dd2dfafc90e70e5a40d4"],["/tags/Result-Type/index.html","9add177bfa2f13b94e03b29566458d83"],["/tags/Server/index.html","106fdde914ddd028cc26bd0e07e1b790"],["/tags/Swift-Package-Manager/index.html","99ba40f6775abb6d48144e0de7e0c5f0"],["/tags/Swift/index.html","f5cfd54435dda95217d928d79d427d85"],["/tags/Swift/page/2/index.html","d928a4417f407c2f2318cff8c1270930"],["/tags/Swift/page/3/index.html","a72a9d7edc38703d3fe1fad54577b183"],["/tags/Swift/page/4/index.html","56e9686eef38ec17f991e3a745e58c14"],["/tags/Swift/page/5/index.html","bbea8806a8e8821e75f911fa157f14d7"],["/tags/Swift/page/6/index.html","6d3dced048e3ec8ce3607d08580f6791"],["/tags/Swift/page/7/index.html","181b96a490c52c7aa3bb7bf6b705a9b3"],["/tags/Swift/page/8/index.html","d26c63cbc4b337906ab74a22ffa4d943"],["/tags/SwiftUI/index.html","f3623d31c79c2d9f369f3408765c9e41"],["/tags/UICollectionView/index.html","ae9e7f18fc9a1790e93c791f5c102e0f"],["/tags/UIColor/index.html","b0fec353aa8541ed218a9c724b4925fa"],["/tags/UIImagePickerController/index.html","0c14a7d100762916e9c7ea39b5fe18e2"],["/tags/UIKit/index.html","5518713957a866d0b62ebe3a96c8407a"],["/tags/UIKit/page/2/index.html","c9ea69336b8d9a5ff55ff263fcb9a8ed"],["/tags/UIKit/page/3/index.html","b4aecbacdac5a2be2abb5f0557b44fbf"],["/tags/UIKit/page/4/index.html","23be774bbbbeff8276a135ad730ea10b"],["/tags/UIKit/page/5/index.html","4d9a05f26ab62d606e38851d9235290f"],["/tags/UITableView/index.html","b52768f285af503c734b25d82b476319"],["/tags/Ubuntu/index.html","36319de409b855e38c9d46f383c6dcfa"],["/tags/Uniquely-identifying-views/index.html","4fd8ca71441e300a1ca4f39ffc5b0b50"],["/tags/VIPER/index.html","f781fba8cd6ca9d98d3f55e21ad72df3"],["/tags/VMware/index.html","ff072d469a24ad71459f0728240a7055"],["/tags/Xcode/index.html","d3ae562099e19986551f1d5822429aa7"],["/tags/appleOS-Networking/index.html","be24b3c2db7d08a718ff0017f1dca737"],["/tags/enum/index.html","a280c6560b3bbf936487630e06a6b534"],["/tags/iCloud/index.html","da6a9e67f2ac36365b8bc49f8a947e4a"],["/tags/iOS/index.html","0f0199400499fd5f9186bf65522bae83"],["/tags/iOS/page/2/index.html","5df10afcf65e8b6da34578331e36e3a8"],["/tags/iOS/page/3/index.html","6ca27fe66df9f40c60d1652861cc2560"],["/tags/iOS/page/4/index.html","306266374ea3b73f0f86fc5fe7e5d69a"],["/tags/iOS/page/5/index.html","31c65afd129de772969f81eebcca93c7"],["/tags/iOS/page/6/index.html","2c6ffd3e22815a569148a8072342a24c"],["/tags/iOS/page/7/index.html","8dbffce6085262fcb050d6b79465021c"],["/tags/iOS/page/8/index.html","e064617f40a62d2745f074e13fe77795"],["/tags/index.html","6a4ad8187c9a887a9abb0a0642007fc5"],["/tags/non-optional/index.html","1d28d8a84b8492c8259247e39a91d833"],["/tags/optionals/index.html","0a7ba6aa593607219619908d5dbbdb8a"],["/tags/random/index.html","1b6c0389f069d180613ad8315c6d58b2"],["/tags/transition/index.html","561a5a65b1104703c8632cd3e95e769e"],["/tags/三方类库/index.html","1e5343099aeefc864ebb63891da4241f"],["/tags/依赖注入设计模式/index.html","85a7388fcbd155c2c15b25b0e7e7b8c9"],["/tags/函数式编程/index.html","a996b22e30091490dcb8df1e997c741d"],["/tags/初始化模式/index.html","d7d60eb7c6588f99034692e8d3046a58"],["/tags/单例模式/index.html","e47e8b8ef92a8c6042210b9a54701cb8"],["/tags/原型设计模式/index.html","ce25928062561b3ff62276f562398fc0"],["/tags/命令设计模式/index.html","b0370456f8913c7ce8e37553efc229b6"],["/tags/外观设计模式/index.html","77bbb8e64246b7f5e4608c70309f840e"],["/tags/委托设计模式/index.html","dce650e711626a39c17b2d7a5669de27"],["/tags/子类化样式/index.html","69029076a49c8ac11eb3e1c69be783e9"],["/tags/对象池设计模式/index.html","bc8830490f5ebb6832e3c6ae4fbe0477"],["/tags/工厂方法设计模式/index.html","bc54bf8df2ab3f382bd7318abb74ff8d"],["/tags/工厂模式/index.html","8b6dd63f3fe69c18ad52200edcde8f34"],["/tags/工厂设计模式/index.html","a80d3dcc8026095d36921634ff485332"],["/tags/懒加载模式/index.html","7d0ad52e8637d92a4fd378d58d5c0261"],["/tags/抽象工厂设计模式/index.html","69eb95922e2c673929cd0e27c99a7314"],["/tags/构造函数/index.html","aa4058f2bfd8f8e33c3c15733065ea98"],["/tags/架构设计/index.html","ad78b98b83a6df5503b26798b3162e4a"],["/tags/生成器模式/index.html","3a79efdfd593c77162baf40ebf10bcca"],["/tags/用户体验/index.html","70f91a202fbe77ed8b15ac44d1fdb578"],["/tags/自动化布局/index.html","6611aae6addd23f747579b1085954139"],["/tags/自定义UIView/index.html","81aa34344823216f1defa47dfa119b7e"],["/tags/自定义转场/index.html","a8c1dbf3a14323ac68b828c278947d67"],["/tags/自适应布局/index.html","6ed03a7f3c526a0e876024890349f3ee"],["/tags/设计模式/index.html","41da6ef94255a65ec01b0a5b7f634e73"],["/tags/设计模式/page/2/index.html","f7714daaa1875708773b3055a27e4f7b"],["/tags/设计模式/page/3/index.html","9365cd782de1c8bf95138d13d8dbb982"],["/tags/迭代器设计模式/index.html","325ddcee9cf041e49f00b980aa9242a1"],["/tags/适配器设计模式/index.html","b144dd2c3b3a1014f039376c0c271d25"],["/tags/静态工厂方法/index.html","6c2ee3926691f54bcdce383e4870f71f"],["/为iOS应用构建输入表单/index.html","7d8b727576d31b3c002eb570bb2d6726"],["/产品开发的幕后花絮/index.html","c3c12814f38288266d47d4ab3cb8c80f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","883364ded262c37eb922ee2423748a73"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b32939b0816a1e1b758f24ead1386823"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ccbc31151be470e95ad34766aa46159e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","802a3d5ef75ea71e69db1131a4fe7dc5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b96d0de484b25938bb332f9925362732"],["/在Swift中创建自定义集合/index.html","6a40d5efad9a82a1830c7b891ecb89cf"],["/在Swift中处理非可选选项/index.html","46d27bb1a886dae3d4c56fc3c5e4afd2"],["/在Swift中生成随机数/index.html","c2b6f8a6e0154b7e8fcdf82fd7955386"],["/在Swift中重构单例模式用法/index.html","5739ad47fd6213f1cee6ee7f4d622c04"],["/如何为VIPER编写服务？/index.html","ed95f3f0b4fe4a5249f24ce0daf3d22d"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","719ff11dfbdb47db707cde138220e758"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1ce615b1b389317fd9dbf23f544c2644"],["/如何使用VIPER构建SwiftUI Apps？/index.html","7ae5affb841eb06a4fc2e2028f817997"],["/掌握VIPER架构/index.html","6123ba09cd950c899c8e4a954a8767de"],["/揭秘 WordPress Hook 系统/index.html","04b6cbf8aba51730408e8f4e469a0f20"],["/比较工厂设计模式/index.html","1dffdac8cc47346d77a33a61460578d3"],["/深入了解Swift中的Grand Central Dispatch/index.html","1fd5d2fb9cd24b02c39d2f3332bbea7c"],["/深入研究Swift框架/index.html","b770dfedd57bd10f135d0153bda33c5f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","bee563ce8d4285acec0596f787bb359e"],["/选择Swift而不是Objective-C的5个理由/index.html","a27267d70bb2979471177f17591ede45"]];
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
