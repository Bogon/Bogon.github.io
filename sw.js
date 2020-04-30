/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","7f75c2ac47b4784a6f89645522c008a3"],["/NSCODER和SWIFT初始化/index.html","94f32d732df9e43ed26c6c5d50548648"],["/Swift 5使用UIImagePickerController拾取图像/index.html","3e790b72ab8284fa19238cca547a4606"],["/Swift CompactMap vs flatMap：差异说明/index.html","5df7a6c3a35770385d17a8a1d33ff8d9"],["/Swift Grand Central Dispatch 深入实践/index.html","de0295604ee1f61bf23106efdd4d6312"],["/Swift Lazy属性初始化/index.html","12d08002fef286559dcd5a73ce6496b4"],["/Swift UICollectionView使用指南/index.html","06fd64873be7cc143a473879c1382c55"],["/Swift 唯一识别的视图/index.html","e572330972515075789a8369bb41d339"],["/Swift 如何学习现代UIKit？/index.html","f5297be5b26db4d3743d0d1a29a87721"],["/Swift 用 compactMap 替换 flatMap/index.html","ca263990881963d48573189a45ae103a"],["/Swift 选择和播放视频/index.html","a61d8b0825cd07770ba1de294e9333e5"],["/Swift中UIColor最佳实践/index.html","50d91e4e6ad33581accfaf3f14027ede"],["/Swift中快速简单的工厂设计模式/index.html","c4f6dba3a0f9e6784c2961afbcf20603"],["/Swift中构造函数与静态工厂方法的比较/index.html","57e7405515f18549d685e0d05ad078dd"],["/Swift中的UITableView教程/index.html","0edb3dd42a0d9f195cd0b8fb8b92c7ed"],["/Swift中的懒加载模式/index.html","237516747cc928c6e4ab13cc9c09db97"],["/Swift中的模块和挂钩/index.html","dc4d303a62cab849fbb592ffc4295476"],["/Swift使用布局锚点添加约束/index.html","991052ede19ea7180c54d7944b9ae8a1"],["/Swift依赖注入设计模式/index.html","f389d20d894650eec5ea5151845368ca"],["/Swift关于Dependency Injection (DI)/index.html","f2f302d612aa0cc068ce6d51ef74a6fc"],["/Swift初始化模式/index.html","7d36462a0a729d6f0206531dfc796bbf"],["/Swift单例模式/index.html","a56b4a7645e4acc659f3ee204f9948e8"],["/Swift原型设计模式/index.html","6034232f9ab969eeb1db00a93689dd0c"],["/Swift命令设计模式/index.html","84195668f81027f7e11e8e46492a1fa2"],["/Swift外观设计模式/index.html","0ebe46755e2c8c1d807d0e91d7426a96"],["/Swift委托设计模式/index.html","dd30bc0798d1bce7a73c89953363eaa1"],["/Swift对象池设计模式/index.html","f346dc8e86c60def6cb20d38bc17199b"],["/Swift工厂方法设计模式/index.html","b079bf5ab8bc98e36d504cd63e05c147"],["/Swift带闭包的懒惰初始化/index.html","23d2e7049936423245a7918ca1564460"],["/Swift抽象工厂设计模式/index.html","a7c3640023461d17d6008b6cac572a64"],["/Swift掌握iOS自动布局锚点/index.html","3c00e35b716ea977f78dc38f91f688e2"],["/Swift支持旋转的自适应单元格/index.html","75d1eb4d6b7695b2f119ab4585d42976"],["/Swift枚举值/index.html","e004d7173ebd0d9d5af5c770db5ee96f"],["/Swift生成器模式/index.html","761b346204347225b229c1fadb2bf0d9"],["/Swift结合Xib文件自定义UIView/index.html","69742df316bc307f8f5e99ea488fe3c5"],["/Swift迭代器设计模式/index.html","c578b6faa3460d03c634cd7cb2e8e7e4"],["/Swift适配器设计模式/index.html","1fc2db17f3e5b2fe3c24d8f7488a3338"],["/Swift静态工厂设计模式/index.html","0e0e42d89a487c02ea795ec635275131"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","4dbc56412746733cdca4efe15fb28696"],["/UICollectionView data source and delegates/index.html","f3548abe9e1b338b20835d9e18b05a78"],["/UIKit初始化模式/index.html","cc0baea06882f71609c1ce35cc09b1ae"],["/Ubuntu18.04替换国内源/index.html","c3ded15e8e9a4c6321e088ab80c6a67b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c1bfeb04a6644749d88c994bb4f36aaa"],["/Xcode扩展/index.html","267cbc2e41febf24a1d5a362070e0c78"],["/about/index.html","8f7aa3c970575330f0df3a6e4be89773"],["/appleOS的Networking示例/index.html","ecea4ce0fa238db122bf76e886972307"],["/archives/2020/04/index.html","51568770624fafdba086ed8c901f79c1"],["/archives/2020/04/page/2/index.html","5ad50aa248a19541f77ba012dd955a10"],["/archives/2020/04/page/3/index.html","276e1ab1c4e8b90214188e6501befddf"],["/archives/2020/04/page/4/index.html","7cd4c9ace8e90b829e4f903509cc6ed0"],["/archives/2020/04/page/5/index.html","28ab834877f7a7cc9e04b89dbcaa3bdf"],["/archives/2020/04/page/6/index.html","b65e81965dd1a9601ac095682e903d15"],["/archives/2020/04/page/7/index.html","821dc09223f1141ec3b035e397d9e92f"],["/archives/2020/04/page/8/index.html","7e842cc684c25301028de5dfedd41a6f"],["/archives/2020/index.html","9cc9cef9467a856db5073e5d99ec6334"],["/archives/2020/page/2/index.html","6fef30d2246e8a05ebfb04dfd38d5be1"],["/archives/2020/page/3/index.html","5340414fbc0b9e150fce00f449197980"],["/archives/2020/page/4/index.html","b3361938f485d0aa695e8ccb34c272c7"],["/archives/2020/page/5/index.html","2efeec36975995dea5da6178949ec17c"],["/archives/2020/page/6/index.html","91b40a1b46546e63c31d2e5bb9a51e1f"],["/archives/2020/page/7/index.html","913156e079a6d4ac7e92717bda976651"],["/archives/2020/page/8/index.html","d3666fa9a7b00196a1561269073ef8fa"],["/archives/index.html","085f558de239ec58ac7b79d562b023e9"],["/archives/page/2/index.html","2ba9864e8355af31d3f105bfba4d4281"],["/archives/page/3/index.html","4866862b61840770a812154b3534fc1c"],["/archives/page/4/index.html","a80469f4c8d0212e7897d7fbe81e001f"],["/archives/page/5/index.html","92007849a6e01d5ee97c3c13add7c4b4"],["/archives/page/6/index.html","983fd94576e6a81f65a008ad22e22c09"],["/archives/page/7/index.html","6c119145e34da6825727dc63a3ecac73"],["/archives/page/8/index.html","6fd3682064ffbbea3849802601d4e528"],["/categories/Codable-protocol/index.html","89e457f6032b828e6702bbc959d307c1"],["/categories/Grand-Central-Dispatch/index.html","33f042ad8b22e2c5f61c8a4c9b93e3ea"],["/categories/Hexo/index.html","5d86be2866d7bf83119839b265742164"],["/categories/Result-Type/index.html","bfcde67a137690e9439be03be7d84850"],["/categories/Server/index.html","f96237cdb5a46c61a59b6833b21f354b"],["/categories/Swift/index.html","b8af378136a986d964e8b147b643cd57"],["/categories/Swift/page/2/index.html","fc9bca4d94307028623cfe9afa5f498f"],["/categories/Swift/page/3/index.html","76883689f6708813f5a9eb4277851d11"],["/categories/Swift/page/4/index.html","4e22050c9877ec14434e8ef1286381f2"],["/categories/Swift/page/5/index.html","ed204d5b22424e67d37c4b88a3a8b3db"],["/categories/Swift/page/6/index.html","a6d5b3705332a1ab4cda88ad25c6a912"],["/categories/Swift/page/7/index.html","25b522cfeb21bbfe3f8d4d6278004124"],["/categories/Swift5-2/index.html","7f7547d3712f34bd26b1535071a90d66"],["/categories/SwiftUI/index.html","a9c9191809593e3301f6452ba3a55b44"],["/categories/UICollectionView/index.html","a554bd8c02246cf7708e9d9b7933fc03"],["/categories/UIImagePickerController/index.html","8a349b6db57d5891b541e143ce294ad0"],["/categories/UIKit/index.html","b431ae4231e2207b1f53fbc473fba849"],["/categories/UIKit/page/2/index.html","f04657efb568e4063b333249385fb64e"],["/categories/UIKit/page/3/index.html","b9b263c310c41480b7d985af6bd994cc"],["/categories/UIKit/page/4/index.html","91e51e3f7038a780bafa41b5a2d2ced7"],["/categories/UIKit/page/5/index.html","295e042a9f86215db881172ac0d44c99"],["/categories/UITableView/index.html","77e37556fca8a733bb082a53e4ab700f"],["/categories/Ubuntu18-04/index.html","1818f6ed0f4feab398b92e88b49a004e"],["/categories/Ubuntu软件源/index.html","5fffc0db377e21f57b60365112fdfd83"],["/categories/Uniquely-identifying-views/index.html","6d4115f891e4aac92cd30ffc7ee92561"],["/categories/VIPER/index.html","000004caec5fcd58be76b3e26c12d50c"],["/categories/Vapor4-0/index.html","312e73a1266bbfcd690b3019e17bc380"],["/categories/Xcode/index.html","ce4bd7bf5429fb680a62887cdbc4f734"],["/categories/appleOS-Networking/index.html","100fc1e58a0440025bd6a3f1234a90c7"],["/categories/enum/index.html","84e2eda1e9093101cda55cd4fc313914"],["/categories/iCloud/index.html","4f745fd8185e888ba1b05cc061704a65"],["/categories/iOS/index.html","1b3aba994859f4d3546bc74f0bf2c59d"],["/categories/iOS/page/2/index.html","587e21e3650094286fab464c5794c851"],["/categories/iOS/page/3/index.html","894e008e2650a6a42eded2a053f577e7"],["/categories/iOS/page/4/index.html","da0bdb090f1e3991844784b5a65aae7a"],["/categories/iOS/page/5/index.html","367c3371fec9d53f0d02f2c98cbdcd76"],["/categories/iOS/page/6/index.html","b8d1326c1dcbf40e9413ebbc8fc7fb6b"],["/categories/iOS/page/7/index.html","1c4f4e3658c9489677e1000681f56121"],["/categories/index.html","a0551df96a8c9fac325e2f4841df73e5"],["/categories/random/index.html","b192d3c172caa808005284b347bf70c8"],["/categories/函数式编程/index.html","5b090842e8abf60b52d6604648605b1d"],["/categories/子类化样式/index.html","66016eb82a96dfb2c27965f00c639a2a"],["/categories/架构设计/index.html","68b189c7e4d63bbb83a3924f6269e6c4"],["/categories/用户体验/index.html","79989276a7af189f562979340423802b"],["/categories/设计模式/index.html","841b6b076c90bf5d670c0858654c2477"],["/categories/设计模式/page/2/index.html","75fabf137fcbb103c4730b47ced968c3"],["/categories/设计模式/page/3/index.html","bd27c5248c353d356cb9df533be9a786"],["/css/main.css","41e870d80b602f24c298fff16d82c8a6"],["/hello-world/index.html","3935c59f016f16354d8540942dd21128"],["/iOS VIPER架构深入实践/index.html","9166bed11c8d99136cdef64e570adc5b"],["/iOS如何使用iCloud文档？/index.html","1fccc9c5f7d0c77a7a305d25e0b05bac"],["/iOS子类化样式/index.html","c04073fee94886b9e6942a1daeba51bf"],["/iOS自动化布局编程/index.html","88e30a4341b0502cff1822b634e5264e"],["/iOS自定义转场(By Swift)/index.html","ad8ba376842f26568eb643e5ef95c883"],["/iOS项目架构：使用VIPER/index.html","be646095235d757e020c34cd0f731617"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d21cb4df7589f44851bfaf587a580860"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","175d684ce190de227e66de81bdeb63b5"],["/page/3/index.html","98bf9693e30948ddc349e41e3e2febc6"],["/page/4/index.html","1583b3608651266b84e8d361dd7b3b5b"],["/page/5/index.html","2d27ac83f4a7f6cab2ffb0b071778708"],["/page/6/index.html","13cde751fbd625197b3523496b42ddaf"],["/page/7/index.html","57c31c1b2c17dab32e0ad10b6ee69ea3"],["/page/8/index.html","34f69e28b4ddebf32a9ee75beed1b56c"],["/schedule/index.html","c4d7ffc8a5665a3dac2afa28123fb17f"],["/sw-register.js","f00560b50039e62dc405c828ad704b89"],["/tags/Codable-protocol/index.html","fc0553616dcf3c040431ee200281e19b"],["/tags/Collection/index.html","ff459093896d5d2d683368081387a9ef"],["/tags/Collections/index.html","107e1d8f2fe3540ac417b3625a3e3c02"],["/tags/Dependency-Injection/index.html","aa0541ba3fd0ea2b7a29868b8ce1f2bf"],["/tags/Grand-Central-Dispatch/index.html","cbd68e718036f746518a7df9c384ba4d"],["/tags/Modules-And-Hooks/index.html","89878cc019e5f33bb208c6d830f0751b"],["/tags/Result-Type/index.html","64709e80ddf475a2b7b51f7b6f101e49"],["/tags/Server/index.html","285867a9ae0718025af88371715bf601"],["/tags/Swift-Package-Manager/index.html","8fe4ef4eba7de21fcd41cd1bad1ac148"],["/tags/Swift/index.html","8c5ea7f2f2c7817ba7550cea55672fd2"],["/tags/Swift/page/2/index.html","5c3af269150192fc8f672a00901855a8"],["/tags/Swift/page/3/index.html","d364acc9dface926324c387345667156"],["/tags/Swift/page/4/index.html","0bb863ce566c9cab9abeb0e573749fb0"],["/tags/Swift/page/5/index.html","98636b34155e9b23bc168f1bc57d6cbc"],["/tags/Swift/page/6/index.html","eb6fe932bc8e449db97876a03656426d"],["/tags/Swift/page/7/index.html","6e53d6a6fab5462e09b6ce1ea9cb14e6"],["/tags/SwiftUI/index.html","a66ca9df1610307a37405f4f55033ac8"],["/tags/UICollectionView/index.html","51620c27bd1c7393e4b7bc01f3fea7f0"],["/tags/UIColor/index.html","6a1879e08bd5bc587eb401a8a315e5ae"],["/tags/UIImagePickerController/index.html","af7c5a6ff0ec1ea17505886ef5db3ce8"],["/tags/UIKit/index.html","70a0c6eef2b4c978c5966437d8fe6607"],["/tags/UIKit/page/2/index.html","caebd37e615976a789904ebf52d13e2c"],["/tags/UIKit/page/3/index.html","8c675c245ea25d743357266e6fa5547a"],["/tags/UIKit/page/4/index.html","61e19cb4d661cf8e30fc8bcbd3ff4984"],["/tags/UIKit/page/5/index.html","eb59c1b9a870240a8b67e73d1d3ad1c5"],["/tags/UITableView/index.html","0c525d46e4bc226b142f97284254817b"],["/tags/Ubuntu/index.html","aaaa68b12f74ca51dc01a2b3a4f3fe1d"],["/tags/Uniquely-identifying-views/index.html","e1a2c7a1932c1f097e91b37d3ce315db"],["/tags/VIPER/index.html","822fdab21f331565772ba17bd4dfb333"],["/tags/VMware/index.html","aa7a2c858b2a4888bf4eb502ce3214d6"],["/tags/Xcode/index.html","ad9649bbeadd6e2b0dee35dcdec15643"],["/tags/appleOS-Networking/index.html","c1c93d8d209a01b51e0d95489f80ef3e"],["/tags/enum/index.html","6bb7d79ab27658595299d8b62e9a6000"],["/tags/iCloud/index.html","83001e5f9f53bb57c429bf12e181445c"],["/tags/iOS/index.html","9164bf5b82d343d7c0bc0917bf3e79c2"],["/tags/iOS/page/2/index.html","e9337722e0d04df87de5594688feecaf"],["/tags/iOS/page/3/index.html","83c9f4d7024a1e4cfe4d327377370eaa"],["/tags/iOS/page/4/index.html","59b42784a80ab696e417e81861e355de"],["/tags/iOS/page/5/index.html","14f7f75c3f12f0ec6b96c4456dc9b65f"],["/tags/iOS/page/6/index.html","e9f2c879b06babcf3e2fcfddbd19d914"],["/tags/iOS/page/7/index.html","2dc7d3f2080776f11c44cf6cfa04ecc7"],["/tags/index.html","51bfafa051514dd9c43fae27bfa92e9f"],["/tags/non-optional/index.html","b6f3f1f993ef503ae20c53633556576a"],["/tags/optionals/index.html","1105a45184186f31537854492fedc9ae"],["/tags/random/index.html","5b446af36dc9461e557f1264a7b83138"],["/tags/transition/index.html","0465fa8a55e5ef7941c77cd679bfaa24"],["/tags/依赖注入设计模式/index.html","f87aa5f8c6197e5cf86cf2a3bb0d4a0e"],["/tags/函数式编程/index.html","bc99beb687ccc7378911b0709247f9d5"],["/tags/初始化模式/index.html","d293900ecb6a96adaedba26561a5bf67"],["/tags/单例模式/index.html","35e392152fd41f34ea3e6073516a28a9"],["/tags/原型设计模式/index.html","3acdc804414e27fedcfa7950fd36e602"],["/tags/命令设计模式/index.html","52d6d6939ca3a0d6fcb154896a3ef2d5"],["/tags/外观设计模式/index.html","0d8579b4379e1bb5b31ed0062c184cd2"],["/tags/委托设计模式/index.html","e1947fc7bb45fac728b645ec76e8ebeb"],["/tags/子类化样式/index.html","3fad207f2abc65037ca82315f55b96e6"],["/tags/对象池设计模式/index.html","5267f6b30ab5f8eedbcfbfe8c66a2996"],["/tags/工厂方法设计模式/index.html","94d7d468ad34c7d1ee8a57090a383cd2"],["/tags/工厂模式/index.html","25a3b604392484e3feaa42e0e11b1c09"],["/tags/工厂设计模式/index.html","b1021d3a128331ffa3c811aad30092d2"],["/tags/懒加载模式/index.html","2914820928040949aafd3abdca2625a8"],["/tags/抽象工厂设计模式/index.html","24ff92e5b7b46a836208ffc773b5e44f"],["/tags/构造函数/index.html","4e4bea1885b958d2bafd9153ab8f05b3"],["/tags/架构设计/index.html","d8d4e4eabc9caadbd40f941e4120e989"],["/tags/生成器模式/index.html","cd66043d060270e6ff47ec2a52ccc847"],["/tags/用户体验/index.html","e1ccf79c45a1fef68af56a8a20ee70f3"],["/tags/自动化布局/index.html","a3ab5adaf6ec071535dd7314cd799efb"],["/tags/自定义UIView/index.html","b21253550b8ff1243ae9333e53ab872a"],["/tags/自定义转场/index.html","6609545106a79a6ae65edad13938fc95"],["/tags/自适应布局/index.html","f318ecbed25855b51d058aa0bfdcc219"],["/tags/设计模式/index.html","be21a4825debd906966603e3d88afd05"],["/tags/设计模式/page/2/index.html","759324749616f065777c7e8a48517c75"],["/tags/设计模式/page/3/index.html","e6e0fd52891404cfe5cc1192a7ebb5d0"],["/tags/迭代器设计模式/index.html","fb56ce4c0ad4250dd002e30cdc39bef3"],["/tags/适配器设计模式/index.html","555067a8602b18afb7f978fff24440dc"],["/tags/静态工厂方法/index.html","f2a2748880441689e10b8de5d3197c6c"],["/产品开发的幕后花絮/index.html","ce7150aed1bc66a7ef26883882ed2a60"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","484a4c75a9cc9358ab6004772ad45b30"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","2fa58a40440ac47a98dcf4b7d1767d89"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8bcbc465656103a6470222c159d45eb9"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","103753820ea92aaaf1020303c1524b29"],["/在Swift中创建自定义集合/index.html","b8b388cef32b9c3c3b7141e0f536669b"],["/在Swift中处理非可选选项/index.html","3a78147e89be8900748f53bebe05810e"],["/在Swift中生成随机数/index.html","281addbf125dfb7712c8255a91fdf0a0"],["/在Swift中重构单例模式用法/index.html","88c04055bcb7f3388c5507871c52d766"],["/如何为VIPER编写服务？/index.html","31609c4d4317f522ba0cce9c9f139e07"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","86464e77047a839b4fa66165fa763fad"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7f638453039d042042e854d21eb9d904"],["/如何使用VIPER构建SwiftUI Apps？/index.html","852df8af72ebe852562100124c8fa3ce"],["/掌握VIPER架构/index.html","6cbec2176eccc6fccec9dd6b52e05996"],["/揭秘 WordPress Hook 系统/index.html","93a5e3f972572feb4e3010596c79d475"],["/比较工厂设计模式/index.html","592889387428cfac7a1250427c0086ae"],["/深入了解Swift中的Grand Central Dispatch/index.html","ad0d4ed5f5804ec0ccf3938e651a1291"],["/深入研究Swift框架/index.html","2eaddaa9d23e256ec1df810c60566dd7"],["/适用于iOS开发人员的VIPER最佳实践/index.html","4ad92d4380c7d825f830a6e02d390338"],["/选择Swift而不是Objective-C的5个理由/index.html","76f18a9b10d5fdc11b70de2153665158"]];
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
