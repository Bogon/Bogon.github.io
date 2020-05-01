/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","bc36e0f363ac0aa0e20317dece183d0f"],["/NSCODER和SWIFT初始化/index.html","ae5bc0143f234900962cbcbc86d8d2c3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","3b2a5bdf5d70b3ef0a794c65a2764255"],["/Swift CompactMap vs flatMap：差异说明/index.html","36a506560ba0c0508ea484e583c1558e"],["/Swift Grand Central Dispatch 深入实践/index.html","54045ff3066a6937ec7c9881ec5d40ab"],["/Swift Lazy属性初始化/index.html","484f1fa9431f41586b7efe7fc98fe8b4"],["/Swift Promises 初体验/index.html","b0f5b652ac0faa3d3f9193830806e641"],["/Swift Promises 探究/index.html","c54b1d03ecf9cbbe224530ab6ef144c8"],["/Swift UICollectionView使用指南/index.html","5da41ceeca3e7a795020cd28d7822479"],["/Swift URLSession && Combine framework/index.html","12fa498f8a9118961000455a8801f634"],["/Swift 唯一识别的视图/index.html","33a6f1de9cb015bd29e252ad2dec5738"],["/Swift 如何学习现代UIKit？/index.html","afef451c4da01399d371c852dc18b634"],["/Swift 用 compactMap 替换 flatMap/index.html","9fb71e4b61e9775bda831be8cc20b3ba"],["/Swift 选择和播放视频/index.html","ceacd560228f4d1a8f1f0df8847bc045"],["/Swift中UIColor最佳实践/index.html","c8fdd5d21e43e5229951adec22c2a680"],["/Swift中快速简单的工厂设计模式/index.html","2345e0c4e691ba22ac952000c0146966"],["/Swift中构造函数与静态工厂方法的比较/index.html","3e0621c4406c31f421c2ac1159423c22"],["/Swift中的UITableView教程/index.html","ffa98ad305a8ea4b457e6ab732a8b107"],["/Swift中的懒加载模式/index.html","5f0f5b15d4ad0c2ac611951941db8ba3"],["/Swift中的模块和挂钩/index.html","5ffdb135095c229fde5b3ee9d2471817"],["/Swift使用布局锚点添加约束/index.html","cd0f0c29a98889205de34c2d4a91cbe1"],["/Swift依赖注入设计模式/index.html","9f2fe99373befc989ba136c8b3ad676c"],["/Swift关于Dependency Injection (DI)/index.html","08eaeab4b48953dc2b585f1691f471c5"],["/Swift初始化模式/index.html","cc1c870675821f8c10acd3e877ee14fd"],["/Swift单例模式/index.html","c4c2bc1dead95eac3f4ad97dde23c1b7"],["/Swift原型设计模式/index.html","0d716e60676bae70217cbcbf88d566ae"],["/Swift命令设计模式/index.html","a0671762a7233bc19afacae4463248a4"],["/Swift外观设计模式/index.html","6b2f1a89b6d44aeed94780d095f6c72e"],["/Swift委托设计模式/index.html","94061e5d5cfdcfa2d7bcd6104b0f23e3"],["/Swift对象池设计模式/index.html","670de52a31c25ac9e35d5696ac068842"],["/Swift工厂方法设计模式/index.html","946e97538c110f7c34013be581020f0b"],["/Swift带闭包的懒惰初始化/index.html","adcdc86cac967b6ebf636d80fe16da8a"],["/Swift抽象工厂设计模式/index.html","12a56aa599701a917afc6c8ff00b6e55"],["/Swift掌握iOS自动布局锚点/index.html","c305d5f47b5ed560485808598a94a5b1"],["/Swift支持旋转的自适应单元格/index.html","094c33f3467a9d481c3df659b4639bd9"],["/Swift枚举值/index.html","34c75c494289815ab4f31040a44d2b11"],["/Swift生成器模式/index.html","84fbccf19bc248cc76d0668279891c48"],["/Swift结合Xib文件自定义UIView/index.html","e685b21f1d2dfde8468b19c27af96dba"],["/Swift编写的20个iOS库(一)/index.html","7b14a26a985133ca6793d4061365136e"],["/Swift迭代器设计模式/index.html","7138100807c005c7bb58fd3c469f3f42"],["/Swift适配器设计模式/index.html","64e6e4d8c737e4a0a61560140480b491"],["/Swift静态工厂设计模式/index.html","e9e053fc4e729cbf45b6ab399e92dcdd"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1bb6c9de52f340b1f2548b2a066b307b"],["/UICollectionView data source and delegates/index.html","0c31b5fb4c7ef7a61a53115f72d96a30"],["/UIKit初始化模式/index.html","ee0eebcf25b1f45f716d1f3be10bd0c4"],["/Ubuntu18.04替换国内源/index.html","9b788f7c611dcd051e0edc1de831b24e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","b8ab6096818a567c28abbe39f5acc107"],["/Xcode扩展/index.html","44564054f1984bed336a4528dab5030f"],["/about/index.html","3962eb4ba088975e5b2e3b0b84f7e06f"],["/appleOS的Networking示例/index.html","6b271c64ece3dd2012b1dd9cc77e2771"],["/archives/2020/04/index.html","1a969389a543a39c287ce7c3b2707203"],["/archives/2020/04/page/2/index.html","b27d0c800581b3e47606b4b904a281c9"],["/archives/2020/04/page/3/index.html","64214935c7c8395311d30bc103f5bf2b"],["/archives/2020/04/page/4/index.html","a20e7375f9a9ef8d40f983f080c1f79f"],["/archives/2020/04/page/5/index.html","ca224aa07871064d81e4866f6188d6bf"],["/archives/2020/04/page/6/index.html","53afda7b39da779c823995fc9318b43c"],["/archives/2020/04/page/7/index.html","07f8beae14142f790204f17a424ad24b"],["/archives/2020/04/page/8/index.html","e441d9e721182b8150745cfb670b6377"],["/archives/2020/05/index.html","e4014e31e29a4cf856dc8c87c84d1826"],["/archives/2020/index.html","587b4958eb4f91da5594255ec712e6de"],["/archives/2020/page/2/index.html","e90912f7fc3e408473cb0e8b77e8cb19"],["/archives/2020/page/3/index.html","f62a5d94d4c832464efeb0ae581ec478"],["/archives/2020/page/4/index.html","1c716cc86ce0e4182a0b285b19585a88"],["/archives/2020/page/5/index.html","58aa54454c2d8b396a5388429dceeae0"],["/archives/2020/page/6/index.html","7c45761b655e12fe74b3fa3e8bc1952f"],["/archives/2020/page/7/index.html","651a11fbcbead1092281d7a18fc250f9"],["/archives/2020/page/8/index.html","356ffa0bdfef420ae6f5d3247516909d"],["/archives/index.html","76e431eacc386ca5955023154be47da0"],["/archives/page/2/index.html","3ddde7b0df9961085fcefabc221b1a2c"],["/archives/page/3/index.html","6c8ba2a0db3372054fb2f5b1a229c629"],["/archives/page/4/index.html","22d60914a2e4df2db429611db8211baa"],["/archives/page/5/index.html","9f72a0e68e23423c87523cb0b15c9a96"],["/archives/page/6/index.html","1313bc1fdf7e3fd6d3a6af5cc0e26e54"],["/archives/page/7/index.html","cf1141cb8089a1f1f65c03ed2f83e8fa"],["/archives/page/8/index.html","9ca6a29c750adba19c9745b23c7c02c2"],["/categories/Codable-protocol/index.html","daa8908919147c0b3cf5bc99c542a226"],["/categories/Combine-framework/index.html","f8e753331e816e97c050a46c13856f1d"],["/categories/Grand-Central-Dispatch/index.html","541cf9e06dffe18270b1e370972382c5"],["/categories/Hexo/index.html","358e43be9f7aa058535941046144de73"],["/categories/Promises/index.html","28a0466571871996028d8ba984814d83"],["/categories/Server/index.html","c1724df7d043583c0f8f4962e01839d9"],["/categories/Swift/index.html","acfdc681c0f38fbd5eab87c250716b7c"],["/categories/Swift/page/2/index.html","21686c053c0eb9ab41c1c09aaf463912"],["/categories/Swift/page/3/index.html","ccd731b2ac061a5beb33549bc3af5d81"],["/categories/Swift/page/4/index.html","0334f754fcb6bcdcc483c9938f58f8be"],["/categories/Swift/page/5/index.html","c7a997f9c289284905be212e8922783c"],["/categories/Swift/page/6/index.html","226d9aea7bb3e9ce3ac89b5bd8dd99af"],["/categories/Swift/page/7/index.html","8bdd45c1521cd7617fd52e4d103b849a"],["/categories/Swift/page/8/index.html","05f29c7be8b76750159e644f841fb3d3"],["/categories/Swift5-2/index.html","6663750d677670ea13df94f72ed4d776"],["/categories/SwiftUI/index.html","9a7a0f64b512efe3677407049f289e99"],["/categories/UICollectionView/index.html","6b5ade1f7a3765aafc2d4730c754ddff"],["/categories/UIImagePickerController/index.html","de695a73489a94d737ed38835aeae5a4"],["/categories/UIKit/index.html","5a2ec7d2e1821b552be3d2bb87883c65"],["/categories/UIKit/page/2/index.html","0d299769170f47aba47dff805935bad2"],["/categories/UIKit/page/3/index.html","1789ff012f80b290d85ff3ac0a6755fd"],["/categories/UIKit/page/4/index.html","d4864d9054645275bfa503ca54f6c52c"],["/categories/UIKit/page/5/index.html","0f09e70b7781b6516c241b2ddca70afe"],["/categories/UITableView/index.html","48ebf19f766f38c451b6bfd45fa4aaec"],["/categories/Ubuntu18-04/index.html","daeeb9eda8d6c1a14cf90e52691c76f8"],["/categories/Ubuntu软件源/index.html","c73ab89265e4f0377dd9ea8c7c5d73de"],["/categories/Uniquely-identifying-views/index.html","59fd922505c4c483390cf61a513bce58"],["/categories/VIPER/index.html","470bf7b3d8ca02fd6baf1b38b7e64577"],["/categories/Vapor4-0/index.html","812094278510d3b8dee34811da0150d0"],["/categories/Xcode/index.html","019582341966a8826efef8aaf78270a7"],["/categories/appleOS-Networking/index.html","1ff3ab3a7b84a1bb83fbbbd6a65fa404"],["/categories/enum/index.html","820e9889ec228168468a447734e6e3e8"],["/categories/iCloud/index.html","6885a42cf53055646d557ef967212369"],["/categories/iOS/index.html","4c13372feac880ade19d63029997f69e"],["/categories/iOS/page/2/index.html","7ae966f75272c246499e4a643aa923e6"],["/categories/iOS/page/3/index.html","a9c8afb7f536ec1c2c22bd2af15b5bfb"],["/categories/iOS/page/4/index.html","755c999d0a4d1727e9717c5fdb7c1071"],["/categories/iOS/page/5/index.html","6689c22ce18fcf1cdd0500ae178afb9e"],["/categories/iOS/page/6/index.html","6d5eba67678aa5df49aca0ecfbf1ecea"],["/categories/iOS/page/7/index.html","823879baa87bdde5188626afda7d008b"],["/categories/iOS/page/8/index.html","0881db883e61435591e7ebed94cd4868"],["/categories/index.html","ba29e521e1c8c6fe6e0c8353fe067342"],["/categories/random/index.html","8d339e91a3b1ad4ed99a28bc0e2f1152"],["/categories/三方类库/index.html","c57e31b6821e2bacfe650a0cd6e2acf6"],["/categories/函数式编程/index.html","b50a0447b20c6aee41216568fce1272c"],["/categories/子类化样式/index.html","3d6e137ee0eba55d038e54cf87cc71da"],["/categories/架构设计/index.html","1151a31c1825f676d9a1059164235f37"],["/categories/用户体验/index.html","9259ce8167c241ee786f42d8242ec213"],["/categories/设计模式/index.html","6d4450c631cf9d5b5d6934c17d8f245c"],["/categories/设计模式/page/2/index.html","fb634c7c70b367edf16730d5cb589c17"],["/categories/设计模式/page/3/index.html","b45a8504fa9813e41389d13a44c74d1c"],["/css/main.css","25fd4f01eef6de4c24da16c09b90db19"],["/hello-world/index.html","10989f9c8c60da8a9c50dfd947242a3b"],["/iOS VIPER架构深入实践/index.html","6e21eba8bec756d72b17834c8d14b089"],["/iOS 自定义视图，输入表单和错误提示/index.html","cde585dc9b18488abc40cba6e87d0ba5"],["/iOS如何使用iCloud文档？/index.html","18b183b117e3224d822504e980c857cf"],["/iOS子类化样式/index.html","3478190485a90ecd391e30f0eaacd383"],["/iOS自动化布局编程/index.html","09239089c89627ec43e479308c4745bd"],["/iOS自定义转场(By Swift)/index.html","20e7e687671f836e7c171ae8e5426ae3"],["/iOS项目架构：使用VIPER/index.html","ebd7132f48cb4a3a60bc707f431647b1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2104ab558e1cbf656086728ae503b253"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c608c5ee212d4f32df5dc73f0101fffa"],["/page/3/index.html","219102ba5e855580c88a8a242e066e63"],["/page/4/index.html","1db1e60f6a71a654fcaada50b73a93f8"],["/page/5/index.html","0c553d494c68eb015e8bb729077ae967"],["/page/6/index.html","8433b19e2218f43b48c49f747ad6506f"],["/page/7/index.html","f06901cc449fd7d5be93a007c500e635"],["/page/8/index.html","0522f403b3a42fab9793ff3a5d94fa88"],["/schedule/index.html","5804ca06f537a3fa02d82d18aaefcf83"],["/sw-register.js","46bbdc8337ea9b685021b5b92d191e9f"],["/tags/Codable-protocol/index.html","6d613832b7c1331b386aacb3c6fa9db0"],["/tags/Collection/index.html","5c0c5e158509ef05e73b57826a1f5247"],["/tags/Collections/index.html","eb83e1550687efc3fd2607eb8ffa8738"],["/tags/Combine-framework/index.html","eb6300d08f14d54e285c3a32a222a09d"],["/tags/Dependency-Injection/index.html","59ea1d4b5d6954c755a67188f3318a83"],["/tags/Grand-Central-Dispatch/index.html","675d3691953be955eaf064c7b946dae7"],["/tags/Modules-And-Hooks/index.html","b5de1342aa0d2bdda901f7da8d8182ed"],["/tags/Promises/index.html","5baca3ea82880b02f79db5a637ea6b3d"],["/tags/Server/index.html","f7a8438888ac354b95d29249cee46a20"],["/tags/Swift-Package-Manager/index.html","650e37eb9c53a02e3fda7e39fa1c12a3"],["/tags/Swift/index.html","7502c03c52ea32b97ab23deee89d954d"],["/tags/Swift/page/2/index.html","bd0137cb4170b9ec77661c57955266ad"],["/tags/Swift/page/3/index.html","926b4d8f96989102574cc9207852449d"],["/tags/Swift/page/4/index.html","6919ae39739bab5b43d61ab29ced1468"],["/tags/Swift/page/5/index.html","7f8456755b634cbb1538ee5f19c86832"],["/tags/Swift/page/6/index.html","96324c02489230e04235e2078ba47269"],["/tags/Swift/page/7/index.html","6ba9d86140b73db677fbb71c71153075"],["/tags/Swift/page/8/index.html","80df9c3d532793b512db8612ebaebe7a"],["/tags/SwiftUI/index.html","c1ad13c6f85cbb2414f919350fb1c246"],["/tags/UICollectionView/index.html","c26f36043ad1ed2b014bdbdba44b777a"],["/tags/UIColor/index.html","f953eb315abb05e9b3980e17c39c71b0"],["/tags/UIImagePickerController/index.html","51dced5f7795369ec6905ce05afa213f"],["/tags/UIKit/index.html","c5125e8586f0b5bd887b084923eca81f"],["/tags/UIKit/page/2/index.html","10c13105a3f6106b9a71a28ee6d17a88"],["/tags/UIKit/page/3/index.html","a2f91772bd3acefcc102c9eff33c8107"],["/tags/UIKit/page/4/index.html","b1aa48629316df517c3092de41b54b6a"],["/tags/UIKit/page/5/index.html","018ddad0bda0b7d4980f3fb40ed7624a"],["/tags/UITableView/index.html","fa01203cd6e9a8eddff49e13e0694560"],["/tags/Ubuntu/index.html","822cad8cc88a26f59ccb4e54c07f2e45"],["/tags/Uniquely-identifying-views/index.html","83d305d2e64fb8e0fdc0fe631800238f"],["/tags/VIPER/index.html","d78f1c6b1449f460490788607e3da83e"],["/tags/VMware/index.html","1d9b62e4162a20207da21995cd4c8c2b"],["/tags/Xcode/index.html","efc60e8aff32dcd4b825991be1fb3f78"],["/tags/appleOS-Networking/index.html","f2254234c5669a314caa2a3811c91f00"],["/tags/enum/index.html","54513da1d29d3b70326db86702ee4c56"],["/tags/iCloud/index.html","a4a3ecdd926a01885e21636aa191d0d1"],["/tags/iOS/index.html","75bec885e3c132ca0023d364bc856832"],["/tags/iOS/page/2/index.html","e7d4872404cdf1f03a7a5830078aae88"],["/tags/iOS/page/3/index.html","528bc824c7dac8eaa9bdeea3b2bec6e7"],["/tags/iOS/page/4/index.html","8d6537132752856f34bcd9a2caf417c4"],["/tags/iOS/page/5/index.html","a476ef5db822bc7e4ced682f1edde7fe"],["/tags/iOS/page/6/index.html","f8172b4cfc71a06edc8702a65fb25ce0"],["/tags/iOS/page/7/index.html","2bb07776675db0b236eb929e801d9545"],["/tags/iOS/page/8/index.html","f5665c0d0e49cf894a7412b9a8616144"],["/tags/index.html","51317fa149d899e4f4e728dea5b505a4"],["/tags/non-optional/index.html","ae932f51d03ad7dc48fe4beca6d4f48e"],["/tags/optionals/index.html","e075c911e48d97bb7de624b16b3a549e"],["/tags/random/index.html","e6039fa600742e2ab81de764e22918b1"],["/tags/transition/index.html","cad1c0aadab7e43895c13aa51d2dc475"],["/tags/三方类库/index.html","c601d431bc155f755857f4cba86d8add"],["/tags/依赖注入设计模式/index.html","763e081b164a956891d04af21831c833"],["/tags/函数式编程/index.html","ca72427bdd7cdd5cb4d8ca700a8db414"],["/tags/初始化模式/index.html","7795b6afb724eb267f5227408950aebf"],["/tags/单例模式/index.html","baf44ae5a9a81cf8727139b605727ce5"],["/tags/原型设计模式/index.html","0804c40bd3bed2ee9ae70dd0304ba939"],["/tags/命令设计模式/index.html","6be2ac6c0db87343a4eae23849216d36"],["/tags/外观设计模式/index.html","5e627a464a8259a13ccd084e16b377e1"],["/tags/委托设计模式/index.html","cd87208a16385dddf9dddb50420d1194"],["/tags/子类化样式/index.html","dd8528f23ed85a092172715b890ec0be"],["/tags/对象池设计模式/index.html","cad008ddc0514f6882b1567f45e753fb"],["/tags/工厂方法设计模式/index.html","82482c9484e12fc290d5e7b7d86e1403"],["/tags/工厂模式/index.html","12897b891a6fdba2a693cc4775c123a0"],["/tags/工厂设计模式/index.html","50ae6166dc6005e7af12951c591019d6"],["/tags/懒加载模式/index.html","b7f0a3b6f20ac5d709eb572a5c4e5e13"],["/tags/抽象工厂设计模式/index.html","f134226b19c8bd92b61deeef5a08bacc"],["/tags/构造函数/index.html","d1e8c1f03b3d0b184008e64f5d1a5de4"],["/tags/架构设计/index.html","ca325935972c4bce83ee946f9c7e54ce"],["/tags/生成器模式/index.html","98701e02abebb1ecc824520873f3a597"],["/tags/用户体验/index.html","14a5f8e8b76ec4b8305309052e427857"],["/tags/自动化布局/index.html","761ef27fe2c2911eded0cf6c3321c745"],["/tags/自定义UIView/index.html","07109436b66f09fd1ce9dd2e1031d2b0"],["/tags/自定义转场/index.html","4ddc295dabd308886a4feff788c9f38c"],["/tags/自适应布局/index.html","d4a56f37816c2c9735cb5be8435c3fcd"],["/tags/设计模式/index.html","754893291f9959cf13f90c21937ba5a5"],["/tags/设计模式/page/2/index.html","54c64be5af3919e3c2e57c8aca5a9e63"],["/tags/设计模式/page/3/index.html","6441bdb5a746601667b252fe36d1f6a5"],["/tags/迭代器设计模式/index.html","3a5aa0acd15e55995cb68fc097054ea7"],["/tags/适配器设计模式/index.html","c894f193a097ad5d1cf957c5c3813e6a"],["/tags/静态工厂方法/index.html","fbbf715d26b4b81e2746abef710aa44d"],["/为iOS应用构建输入表单/index.html","1c8bf804d0be4a40a10b8a7857684ecd"],["/产品开发的幕后花絮/index.html","5a21408bbb1b1da032d9ac2a5da3fae8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","97a5447f4c3ac1433b94f406e516a9a7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9d17b883ec8371ba8d384d754ef969f4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b789644f03d7554183a6f8da509761cb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a4440d4e17cebaf0be6030aa489e8e35"],["/在Swift中创建自定义集合/index.html","1d595ae9f2ef7c07539f3fd7a0d08887"],["/在Swift中处理非可选选项/index.html","a24541309badd5ee8fc8dfc3022cc1ab"],["/在Swift中生成随机数/index.html","27ddce03da8ccb31a77d79df8b587576"],["/在Swift中重构单例模式用法/index.html","90d8f26635a6a0fad3e1ffc6d67f3bf7"],["/如何为VIPER编写服务？/index.html","85016c6e09426aa1fa2a12202dde200d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","d6fd396cd7b42cfe84f681200f62f05f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","66f47e8a19199256ce2149b5dd3831c0"],["/掌握VIPER架构/index.html","af77e17b82a333e879cc787a383da975"],["/揭秘 WordPress Hook 系统/index.html","ae69ea464d78b4b55cb9051eafb6493f"],["/比较工厂设计模式/index.html","357447a52ef7e62588cbe85f0fd39333"],["/深入了解Swift中的Grand Central Dispatch/index.html","8430b0fbc7509e5ceaca71d4477b25cd"],["/深入研究Swift框架/index.html","b89a1e7f9cb3cff77dd8f95a31f516eb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","399a6f36a8be62453173c56138f59b57"],["/选择Swift而不是Objective-C的5个理由/index.html","51aa9d7e00f930e52e871d7e8a09d41f"]];
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
