/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","3f86c5069651c5aeaf89b17ddc648572"],["/NSCODER和SWIFT初始化/index.html","1c5789de5c58f158b26873615a470c4d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4ecca490cbcd044c4d50f8569b13da8d"],["/Swift Grand Central Dispatch 深入实践/index.html","6ce2ebae0b271704363b48db9a8f02e7"],["/Swift Lazy属性初始化/index.html","b966c0864d488420dce013c248603463"],["/Swift UICollectionView使用指南/index.html","b14fae307f11b7a00cc18e79e0274fa4"],["/Swift 唯一识别的视图/index.html","744689d197d6d3be0c78f3d373a4af19"],["/Swift 如何学习现代UIKit？/index.html","fcc8bcbf556dfb76b414c4a184b0782e"],["/Swift 选择和播放视频/index.html","bdbc2cb3ab4dd41a94f92e2a0967ccde"],["/Swift中UIColor最佳实践/index.html","18f509b9b8e73d32e125e4406b25fa0a"],["/Swift中快速简单的工厂设计模式/index.html","35e714c83e0c33ba31dcddf530791750"],["/Swift中构造函数与静态工厂方法的比较/index.html","0504f2e7385554920387ef9b22915f5b"],["/Swift中的UITableView教程/index.html","d5b5c87208d6af75cd17348b75c4d51c"],["/Swift中的懒加载模式/index.html","2e4a0a38a4dcdaf156fbf1f8562b17e9"],["/Swift中的模块和挂钩/index.html","bf226f569bb74b18493dbcb76d1a7f56"],["/Swift使用布局锚点添加约束/index.html","659af2f87e762f1e1a75fb768135f3d2"],["/Swift依赖注入设计模式/index.html","688c56a638fee2a2769a37e4839641d0"],["/Swift关于Dependency Injection (DI)/index.html","9b12a09923e29b167d9431f69365d791"],["/Swift初始化模式/index.html","69a92919a4738ae1c2cefe7ffda890cb"],["/Swift单例模式/index.html","895b5df7c642295ed6dcbb68e8d80d47"],["/Swift原型设计模式/index.html","9932b2e218033c68f37ef40c6d6fde9f"],["/Swift命令设计模式/index.html","99281d9567419dff18c4f83acea6fd1e"],["/Swift外观设计模式/index.html","02faa0a671ce8cbf968bb805c0eeb739"],["/Swift委托设计模式/index.html","fd56cc2bfdbd0c9253c3c17079c43771"],["/Swift对象池设计模式/index.html","ff551f03f6e3c39da18d7b922d22b68d"],["/Swift工厂方法设计模式/index.html","5adc172277a64e89660b419b782f5f31"],["/Swift带闭包的懒惰初始化/index.html","d8f3e8a7d582445ca91b32e5c3c97680"],["/Swift抽象工厂设计模式/index.html","d206b8d7032b61e14d898940c5e79f38"],["/Swift掌握iOS自动布局锚点/index.html","b27c27856dc0b3ac9e9b5207458a22bb"],["/Swift支持旋转的自适应单元格/index.html","3322a0f3f9df45f3a868b2b3eaafbfe0"],["/Swift枚举值/index.html","9b64799dcaee0b023dae069fb2860a30"],["/Swift生成器模式/index.html","efd6a334c6fd9251ce14f5934809d031"],["/Swift结合Xib文件自定义UIView/index.html","d9e96f48099ace45f5faadd974882b91"],["/Swift迭代器设计模式/index.html","831e2db8dd6b8611f205f5b476aa56c1"],["/Swift适配器设计模式/index.html","6ca5c6cac3ef0c11f95e584a9a75a59f"],["/Swift静态工厂设计模式/index.html","fde559df1146fcccb055704279765a97"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","22bcdb01bb6aae5679eb45f161d6fa97"],["/UICollectionView data source and delegates/index.html","21bf19e7b90f6364576ddb8a430996f0"],["/UIKit初始化模式/index.html","4b6785dc6a1283a323d6d4a6f1e487fd"],["/Ubuntu18.04替换国内源/index.html","9f7eee336273efaa2ad55239a5db2da1"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","86c8071e3dfd502e275c0b6e9ea3282c"],["/Xcode扩展/index.html","f97488996d885a9139c2adb54b6adcdf"],["/about/index.html","c3f72ac95bcdd469cb0723b6f2da2077"],["/appleOS的Networking示例/index.html","5175e27b17555e02299b63898bb64e81"],["/archives/2020/04/index.html","1bfe18b591405c2b7359c38af3319957"],["/archives/2020/04/page/2/index.html","915b72bdcfee84b9e52adfdeb91f6713"],["/archives/2020/04/page/3/index.html","1ef19dbfb6c3c9ec115f473b2eb61b26"],["/archives/2020/04/page/4/index.html","53983f22226561d72becc4a11190bcca"],["/archives/2020/04/page/5/index.html","10082e8dc827d9d37d79fb7d4cc68b92"],["/archives/2020/04/page/6/index.html","4e2d16dce3aaa418ffc2c799b1b27a17"],["/archives/2020/04/page/7/index.html","0ebf6fc517ac269329a2e40ba7d4a7ae"],["/archives/2020/index.html","4cb3de1f1b219090c329de7c93907c61"],["/archives/2020/page/2/index.html","9af7d268e2e5e0370c1c0b56df68f918"],["/archives/2020/page/3/index.html","a51c05425dfa9d45a40bcb2795946cf7"],["/archives/2020/page/4/index.html","cbd03e45132363a002bb69b49c9a5cbc"],["/archives/2020/page/5/index.html","b3a600992646ad75c564d8d90e967a04"],["/archives/2020/page/6/index.html","6f05bf55650f3755c45d99cd38befc0b"],["/archives/2020/page/7/index.html","a62bd8bd75220294734da989fff97f29"],["/archives/index.html","027de5b7a8a23f0dae94d954f0207335"],["/archives/page/2/index.html","396fc5a2f1e7305614371ac4a88b1c70"],["/archives/page/3/index.html","317894694a49ca2587dd054b027f952b"],["/archives/page/4/index.html","9e320f2a9bf6ac485435e14d40efbf39"],["/archives/page/5/index.html","9238dc8fdcfa707375f7ca3f416d638f"],["/archives/page/6/index.html","31256688b9c5df5e0ea551080779d2f6"],["/archives/page/7/index.html","240d406973ffe58627842a0e854c760d"],["/categories/Codable-protocol/index.html","b0dae174c08fa619ab2ed424abc999d0"],["/categories/Grand-Central-Dispatch/index.html","f770f4ae5c21690ea7a5bcd948b1d4ad"],["/categories/Hexo/index.html","c55fa77cb0986060dbdd1a3d939cb613"],["/categories/Result-Type/index.html","ae61dbef4491649fe2a0ed512c0c1d11"],["/categories/Server/index.html","4c2ca06c65541d2f878335b91dcfb4ce"],["/categories/Swift/index.html","5c546976a248a8966077aad1e4d74cdb"],["/categories/Swift/page/2/index.html","5b8e469a005995325570d2ec20fec00f"],["/categories/Swift/page/3/index.html","b36b40957ef7927ac781eace57e6577c"],["/categories/Swift/page/4/index.html","4410b0d55aaeae0b9ab86b66fcf5fe63"],["/categories/Swift/page/5/index.html","be849d096d658b897a5de6668c101977"],["/categories/Swift/page/6/index.html","71672864c1926a782983fc7beaf667bb"],["/categories/Swift/page/7/index.html","e6c0f460346ff656cdcbed804a99829e"],["/categories/Swift5-2/index.html","2d1c6fb91210bc5a8f1fc963e56c633b"],["/categories/SwiftUI/index.html","f7e6bc21d8eb728fae3999f65ca7be0d"],["/categories/UICollectionView/index.html","1d9469cb948f3fab641bb6b1e07ba7ff"],["/categories/UIImagePickerController/index.html","d970bfe429ff821ed1a17800ae14b558"],["/categories/UIKit/index.html","112162d924117432c740fe4fa599ff2c"],["/categories/UIKit/page/2/index.html","1fc81d0a6a476dfb5bbf04e6ee86927b"],["/categories/UIKit/page/3/index.html","d147156a2b4021e9f354aa7ef36a0393"],["/categories/UIKit/page/4/index.html","23fb6ffdeed838672f5ecdacb8c6e8b5"],["/categories/UIKit/page/5/index.html","f935ac39f0c9fd6e4c29c76fd3fae00f"],["/categories/UITableView/index.html","70ab57668e9d056ad97d36b0fd882d54"],["/categories/Ubuntu18-04/index.html","8dcf7f03ec8e51ccd74910f59ef1e5ba"],["/categories/Ubuntu软件源/index.html","393864b5369f332779dee96af8543046"],["/categories/Uniquely-identifying-views/index.html","56f1daa78dbd207f66f046a44f912b53"],["/categories/VIPER/index.html","796494dcde75d01b020468256c8729b4"],["/categories/Vapor4-0/index.html","199d4e24627f2b6e87a3e789dc84c9de"],["/categories/Xcode/index.html","0136b297360607bccc7323c45e7e80e7"],["/categories/appleOS-Networking/index.html","8ca3c405afb81b06f726abdd4559fd74"],["/categories/enum/index.html","4e93ecc1f7b2587bdc092702d3f57dd2"],["/categories/iCloud/index.html","17e0981fd7f4e324f5bad98b496e422b"],["/categories/iOS/index.html","c72dc232f03d9470f78ed636862403a2"],["/categories/iOS/page/2/index.html","152b8020caa49f575a7e257d2cfc806c"],["/categories/iOS/page/3/index.html","2432323e7cc8eece2abc02e157402933"],["/categories/iOS/page/4/index.html","5feef282606ec897b2f22098cf4f587a"],["/categories/iOS/page/5/index.html","ae1f76636710304109860ce0fbe42086"],["/categories/iOS/page/6/index.html","b7d7e078775894409f97152cec2a76e1"],["/categories/iOS/page/7/index.html","285c2654a34537448dca9526f9b260af"],["/categories/index.html","7113efedf74fc17634e334b087d3268d"],["/categories/random/index.html","87ef3b55c18438c555fb8f96d07c2761"],["/categories/函数式编程/index.html","4c326e90aa5d4ae639298f59cdbfdda7"],["/categories/子类化样式/index.html","1614afd68723947e49204ced00dd5e85"],["/categories/架构设计/index.html","87a85ab731392c0ef08f9eafa1bc5c0d"],["/categories/用户体验/index.html","47d5e400f9c91ddc83626dbf2c131bae"],["/categories/设计模式/index.html","566e0327f21e32582d5794f144e920cd"],["/categories/设计模式/page/2/index.html","b89a5b42b749ac0f41fce809850e7dae"],["/categories/设计模式/page/3/index.html","f07b9b6b81dfb315095aa6783f8e5a9a"],["/css/main.css","f328afcb035e82f004d01b35073c89a9"],["/hello-world/index.html","96113677bc802b9dcb948c46b105e6f7"],["/iOS VIPER架构深入实践/index.html","2ce2e324ddecc634ccd1dc125541d414"],["/iOS如何使用iCloud文档？/index.html","ad233ede2eb15cce38e9913bbb94e394"],["/iOS子类化样式/index.html","cff41ee87b017cf0e6c1e861bf9b8572"],["/iOS自动化布局编程/index.html","3d8d4c0000efb724d382ceac8738211a"],["/iOS自定义转场(By Swift)/index.html","89268a79ea7ba4e673523b2bf55c743d"],["/iOS项目架构：使用VIPER/index.html","c1d7c3676905620c61a69477d2bd49e5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","671262129596bbdfb3612b7f8e4973bc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8d9ce2fa6d74fd1b65e2647f7d2fff8c"],["/page/3/index.html","8ceaf7b635f9220c0ca70c2b922e3a16"],["/page/4/index.html","9b3ca7567a0954f2d58f53332d4888ba"],["/page/5/index.html","3ec642c10672241f6244f23841cb84eb"],["/page/6/index.html","4e842e5d2b859181f487e4f4169fba25"],["/page/7/index.html","abe2e7e760e410aa7a1d5d2b2b5967fe"],["/schedule/index.html","1bfcc9f53c1c890b0b1ac38667a19285"],["/sw-register.js","ea4410a873435b6a57ebc45637a638e6"],["/tags/Codable-protocol/index.html","bfb84aaa8e7c48fa82d9445a36d2d9b6"],["/tags/Collection/index.html","44c0e8606ed5e56a4fb32f06bdd5d96b"],["/tags/Collections/index.html","695c3ec8bfc1cf02c91407276e5e95b7"],["/tags/Dependency-Injection/index.html","1c46edc1d02711853d030e0b1a864d5c"],["/tags/Grand-Central-Dispatch/index.html","4192982e2d154f89cf2946da1d123d6f"],["/tags/Modules-And-Hooks/index.html","01cbae5c85d1606d447c7bc509d543ac"],["/tags/Result-Type/index.html","6e82011a928273ecbd1c67f764a93d87"],["/tags/Server/index.html","77b4cefbc38cf775f4a0fc577fd5804d"],["/tags/Swift-Package-Manager/index.html","fe91e7ba95b029eef060b871df1e447d"],["/tags/Swift/index.html","c4da3633a7996072ab39f505b0c70345"],["/tags/Swift/page/2/index.html","3373fda01537e417d395748bebbc093d"],["/tags/Swift/page/3/index.html","99e953680817d95981710a9cb087d7cd"],["/tags/Swift/page/4/index.html","081d8f3afab939c1d0b60789c3551ba5"],["/tags/Swift/page/5/index.html","01a0f1bcdb78e6886224b23e20f7945b"],["/tags/Swift/page/6/index.html","3a44ab4ab010f9c70276d070790f7840"],["/tags/Swift/page/7/index.html","54971e94bb6ef6893090df2e88988eae"],["/tags/SwiftUI/index.html","ab8f9851df23cbd770a236380b096f16"],["/tags/UICollectionView/index.html","be5e2e3447c7e684951f21b5497e21e1"],["/tags/UIColor/index.html","cab047a46d5e89e4fb897f16ac29052d"],["/tags/UIImagePickerController/index.html","00198bfa7fdf6926b21e52698a341c36"],["/tags/UIKit/index.html","5ab1ff1685c6064cc66984a743990b41"],["/tags/UIKit/page/2/index.html","706cea8c0c39eb9e33676902091557c5"],["/tags/UIKit/page/3/index.html","dce1d16a9bebcef6fe3d226b2c8ccd45"],["/tags/UIKit/page/4/index.html","e566d34a9f933ee979c19af295417b02"],["/tags/UIKit/page/5/index.html","b3dc8bd01d2ab95cf56f0adfe40fdba0"],["/tags/UITableView/index.html","a1266f4dd8bb564d0b4a4441abd0b186"],["/tags/Ubuntu/index.html","b828901441bf936e47a5a0c4c92cf016"],["/tags/Uniquely-identifying-views/index.html","3dd7602c47ce3ce668de9dd85d656423"],["/tags/VIPER/index.html","7272e90f8c2df137d848a226306c734d"],["/tags/VMware/index.html","3a4af21179cb2a067003a5e927340729"],["/tags/Xcode/index.html","a04f650cf5b262061f7fb59cefc2b85e"],["/tags/appleOS-Networking/index.html","26e9d0cf43e42dbb2284b2538aa4f12a"],["/tags/enum/index.html","4ef17f1ed34cd1688a981d8dee8d6e3c"],["/tags/iCloud/index.html","1ba8a144b5850e3dceb1587735dfee0f"],["/tags/iOS/index.html","87ee73367f00488728e680cb7cdb67ff"],["/tags/iOS/page/2/index.html","0b28f7840ff8dd383de607ab0ef1fa42"],["/tags/iOS/page/3/index.html","d63b75fab93c83d4424d97e0bf8c0e26"],["/tags/iOS/page/4/index.html","c6c17ef6c0983de10934e0d083fa2f73"],["/tags/iOS/page/5/index.html","a52002750072f0dfe94e9dac7e61a312"],["/tags/iOS/page/6/index.html","598ba148b9ff47a0e93177f7108181e7"],["/tags/iOS/page/7/index.html","fa3bc32affaf2ccd65c3ac28e1e62610"],["/tags/index.html","4850016ddf01ec4003ddfa54c965661b"],["/tags/non-optional/index.html","b2c4bf8420df5587ee40f0c7607db552"],["/tags/optionals/index.html","920965383d6d579eb444e7b66e40829e"],["/tags/random/index.html","f760be230038f8b1324e6edfa92fe719"],["/tags/transition/index.html","d786810991a341f820a223a3fdfb5bac"],["/tags/依赖注入设计模式/index.html","a3873469b0e5f051562867037272743b"],["/tags/函数式编程/index.html","21ea54271848ea038b8a19551cd26912"],["/tags/初始化模式/index.html","b1aa9ef85d072aaa52721c18af67acb9"],["/tags/单例模式/index.html","fe83dbb826cf3638d262be2b1847c1c3"],["/tags/原型设计模式/index.html","bf2ac09df13ce332297fcf4f7e55f378"],["/tags/命令设计模式/index.html","8ff489170be7de88d15361a5869c6351"],["/tags/外观设计模式/index.html","137bdb703697514d5bed696cb39ee626"],["/tags/委托设计模式/index.html","28a3603e8c205890054129d4674b57e7"],["/tags/子类化样式/index.html","3f9812e9f3d8e58a8c2114b103dd82e0"],["/tags/对象池设计模式/index.html","7e56eebb6a8294649810ceda99803402"],["/tags/工厂方法设计模式/index.html","f2cd773f8dc6bd66ce615169162d1c07"],["/tags/工厂模式/index.html","c1b5f5e562719b97ecef67dd9355d60c"],["/tags/工厂设计模式/index.html","090ceb904d2b2fcda1adc09aec6cd301"],["/tags/懒加载模式/index.html","516e83d46badeba8c67b2cb4d476aebf"],["/tags/抽象工厂设计模式/index.html","d1e9eb578b2eb4e719279ab129f7ddf8"],["/tags/构造函数/index.html","a0a69c1d7f4d84bb9806dc1e0e4d4642"],["/tags/架构设计/index.html","b92fdff2404e75be231aca351ac99cc9"],["/tags/生成器模式/index.html","9230913f9bb82f740a02ad993018bfdb"],["/tags/用户体验/index.html","6938cc659e8102dff044ad7b67b118d5"],["/tags/自动化布局/index.html","ed5f4ad6bcbf4ed955d3a2fcbf719dd0"],["/tags/自定义UIView/index.html","a42cf926df0ddabf996c25a922f46fa3"],["/tags/自定义转场/index.html","cdaf8d58cdecb79b3bc30f39a2e024ce"],["/tags/自适应布局/index.html","a32226689893bac8dc0118d1499bc50b"],["/tags/设计模式/index.html","832c6a326c4b0ea67f8871aa9113bde5"],["/tags/设计模式/page/2/index.html","39fcdf7b17c98efa5f974f111940a7c5"],["/tags/设计模式/page/3/index.html","182bea7bd753d3f8ca01a69e9c4849aa"],["/tags/迭代器设计模式/index.html","ae820e8bfab9c58d2906c4c4b9cd524d"],["/tags/适配器设计模式/index.html","465904d336fdabac8d031d5faaaac998"],["/tags/静态工厂方法/index.html","03fa4ed772f729a593f09a2a0df99150"],["/产品开发的幕后花絮/index.html","20c750af70b5f07fec6b03c6705536f7"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","b6338b65a7057a661b78331c39fb79df"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d16b0b2190fe2b98be1e9b2cf90e2ce5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","efa60140c9a8e306926181fb4eec3cbc"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","cf320004c67e3b2f4ccafd7aba3ced93"],["/在Swift中创建自定义集合/index.html","4c4217770966f11624b55cb8e0535b7c"],["/在Swift中处理非可选选项/index.html","a133dd96eadd1158e301deef8149c129"],["/在Swift中生成随机数/index.html","3f3cd1dec27590fb309d42ecb78fb3f6"],["/在Swift中重构单例模式用法/index.html","7e55da36f2c08a8574b69dee2e737d3f"],["/如何为VIPER编写服务？/index.html","daabb641c1f5c32e659be121906878c7"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","e27bb15c19f79eb48b206535b171002f"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","3104899b35a4bf49b0ab233a14c18f66"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f3b02d16d83beb274e443ff5d1efa9ba"],["/掌握VIPER架构/index.html","67e3ee05d65298a5d991fdb331294d6e"],["/揭秘 WordPress Hook 系统/index.html","ec4d419ebb67b64fe9036d779b30101e"],["/比较工厂设计模式/index.html","8653af357f204a0928ed10c5713173f1"],["/深入了解Swift中的Grand Central Dispatch/index.html","34cd98e9d0ced7edb86f253f1edad649"],["/深入研究Swift框架/index.html","6d769667cc86cc456b003185660c0d7c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c5ad4e7970883d85254962343a68675f"],["/选择Swift而不是Objective-C的5个理由/index.html","eb6cdd2c38c48c0abd822294a2619dc8"]];
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
