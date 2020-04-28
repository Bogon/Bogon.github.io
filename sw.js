/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","41ab8949d359e96defe8b639c5c052d4"],["/Swift 5使用UIImagePickerController拾取图像/index.html","25001e7891e2e52b6221f85c4cf6df7c"],["/Swift Lazy属性初始化/index.html","c2f5753245a0426c1973174c00bd4064"],["/Swift UICollectionView使用指南/index.html","1417e6bef8743520f5fcf2f7e93c1dca"],["/Swift 唯一识别的视图/index.html","c72203955fd3be483f8f9a106e652a4e"],["/Swift 选择和播放视频/index.html","87a6e7d3b58b4ad6986af7cd7167e00a"],["/Swift中UIColor最佳实践/index.html","59798f8db8ecc79423f950d3b2fc66ce"],["/Swift中快速简单的工厂设计模式/index.html","34f3a6a4cebbabf7824d3e86976a1713"],["/Swift中构造函数与静态工厂方法的比较/index.html","a3bc6682f5e617dadbd29a73b60e2e6d"],["/Swift中的UITableView教程/index.html","d87f1bf270479b1072e7da6ee74c8322"],["/Swift中的懒加载模式/index.html","3512c7fc84b252bfe553fbc4bdecff6a"],["/Swift中的模块和挂钩/index.html","4e1a0660c7d491a9e9b0b465ee3a9f88"],["/Swift使用布局锚点添加约束/index.html","4a1a1ec2bdfd11ea0fe63079f95887f9"],["/Swift依赖注入设计模式/index.html","7fde02440b71c37f49afdbfe300d07c5"],["/Swift关于Dependency Injection (DI)/index.html","6d957539f70ee95cec53f356030085e1"],["/Swift初始化模式/index.html","27ea5f60a4449cba26de8619aa28c6ce"],["/Swift单例模式/index.html","1f759a5200d94b4d6d5d3b11b4abba6d"],["/Swift原型设计模式/index.html","87720cb6e1aeb1f2c0e40c1999dd59de"],["/Swift命令设计模式/index.html","bf242ad1bb4c1586d720d31438f289ef"],["/Swift外观设计模式/index.html","a607cad880b38ca7f8f9dffb1ea13285"],["/Swift委托设计模式/index.html","0cabde1b3bae09e59757a1b7c5b70ade"],["/Swift对象池设计模式/index.html","57ee835eeff9b978bd49bc673e1960b9"],["/Swift工厂方法设计模式/index.html","7e985d7e7a9c0a0b5ace0db5cf4c69e5"],["/Swift带闭包的懒惰初始化/index.html","0413f7aa204690b791cb22ee10168960"],["/Swift抽象工厂设计模式/index.html","a288e3fb0c0a7597381ce4c8096627ca"],["/Swift掌握iOS自动布局锚点/index.html","06087a09bb129ba4cbb1aa21493f1e96"],["/Swift支持旋转的自适应单元格/index.html","f02f83687140f5a098edb6f12a2f9d97"],["/Swift生成器模式/index.html","16395e3340e8e2ec7230e0bcdccbb351"],["/Swift结合Xib文件自定义UIView/index.html","82c48b9ea1fcf194d7737d8c979edb71"],["/Swift迭代器设计模式/index.html","5a16ac1f0ec4a3d3864f2640de8fec85"],["/Swift适配器设计模式/index.html","275b3a44099706589152d6c093bbf630"],["/Swift静态工厂设计模式/index.html","6ede4a6a2afc70590d018b8a8e42cfcd"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1ebe9a6fe67b4f9fc26d8ba5c12ff8ff"],["/UICollectionView data source and delegates/index.html","024b5e2215c63d83c043963e71e5352b"],["/UIKit初始化模式/index.html","5562e0f125984680b92fad6dfcbf6a5c"],["/Ubuntu18.04替换国内源/index.html","a5f7a0aed9aad187daeea0c31fb8d1c9"],["/about/index.html","f2d80554c9df274b33e9aa683b6e93d8"],["/archives/2020/04/index.html","6677b7ab7818a21920512279f606dd5c"],["/archives/2020/04/page/2/index.html","db5241e17a78820efbe463b75e70ecc7"],["/archives/2020/04/page/3/index.html","483c67daf2a4ce9e297201b448192d1a"],["/archives/2020/04/page/4/index.html","310880a9b5de7b113190a0d3853a5dd2"],["/archives/2020/04/page/5/index.html","27061e4ba630eeb4d2095af631f554b3"],["/archives/2020/index.html","475b944624fa636bbed69e97930d9892"],["/archives/2020/page/2/index.html","d0c8b63c3e3f54efec700552487238aa"],["/archives/2020/page/3/index.html","5bc018d1b6bfae5c85b842e1ec4ef2d3"],["/archives/2020/page/4/index.html","355da3500e8524553c023175ba1df005"],["/archives/2020/page/5/index.html","84e2f70b85373c923de0e5a137b9a5a9"],["/archives/index.html","4a83ac228a4c6d9eb344549a983e3ebc"],["/archives/page/2/index.html","42a6abbad7ac4484546ea5d3070f845b"],["/archives/page/3/index.html","8082c46f6e879623132270bf98a4ac0d"],["/archives/page/4/index.html","a791ef30618a0f8432cb688102f58fa9"],["/archives/page/5/index.html","dba5bffb34bc6723e6350165f9520d83"],["/categories/Hexo/index.html","d2039d2805814424f719e9cee7aece81"],["/categories/Server/index.html","c8b690ca6d7fc022abfa1d56456f3fd8"],["/categories/Swift/index.html","4e7160cea65af381163f8daf93426751"],["/categories/Swift/page/2/index.html","c939da47b8f76850a5ee965175ea15ab"],["/categories/Swift/page/3/index.html","162703e397d7efddb94d0409e49255f9"],["/categories/Swift/page/4/index.html","3ab877ebf11c6a93bcff78f107e9e841"],["/categories/Swift/page/5/index.html","c045289741f010e6169fcf1a408f3e41"],["/categories/Swift5-2/index.html","aaf6dd5adf35ff53635130c3ff65cad6"],["/categories/UICollectionView/index.html","c7a390e6a25b69cc00e95d2c716eb878"],["/categories/UIImagePickerController/index.html","0de6af96f4c6b020cc90343c7dcc9ad0"],["/categories/UIKit/index.html","e534f9611589a654b07d60739884d698"],["/categories/UIKit/page/2/index.html","45aed45a47e8df7fae62da7c9de5b0e9"],["/categories/UIKit/page/3/index.html","68f3f0e97134a0a62743d1696bb29715"],["/categories/UIKit/page/4/index.html","2eaacea2188d1fff970da53d4f6243d3"],["/categories/UIKit/page/5/index.html","3cf105839be25da5236235ab9f88e0e4"],["/categories/UITableView/index.html","94cd82f8d8afa3e92277dc7728d1c896"],["/categories/Ubuntu18-04/index.html","3f692e78f89e2a5f0c7f2fc2eb3c7c6b"],["/categories/Ubuntu软件源/index.html","b9ad6b0e76c9d50adf8ec7b2d748564a"],["/categories/Uniquely-identifying-views/index.html","c00ee24075e37364fa3e6eb7f96cfc0e"],["/categories/Vapor4-0/index.html","5516231c93c3d9f044b4397838ba565e"],["/categories/iOS/index.html","8bca57584d38a5b2668c302653fd9451"],["/categories/iOS/page/2/index.html","5070dda65cef2700585ce46872c3a072"],["/categories/iOS/page/3/index.html","1a5a5d1a3330de73295464fc1e8c76fd"],["/categories/iOS/page/4/index.html","0c9b6f6611e8201df1abd32e4efb249f"],["/categories/iOS/page/5/index.html","b8576d2dfaca763fc9d9c6f6f1929b51"],["/categories/index.html","8ea702cdabc54fe995948cb0c3ebf5d4"],["/categories/子类化样式/index.html","339a14e49647638cd108dd46f3816a14"],["/categories/用户体验/index.html","afa9144ffc10641467ba157097d020e8"],["/categories/设计模式/index.html","910af2e3c88439ffc41e281aa5809589"],["/categories/设计模式/page/2/index.html","cb83f9269694f51711bf4b25fcf7c643"],["/categories/设计模式/page/3/index.html","cced27fb786b6a60836f8b7ab4e10267"],["/css/main.css","68936cd7ee5195bd61f59193e5a422a7"],["/hello-world/index.html","e843e087a264c1e7a86ee84857b143a7"],["/iOS子类化样式/index.html","039dab47a2adb76185c7996c43a832a4"],["/iOS自动化布局编程/index.html","afdaee109a9598beffe62974dfb441c5"],["/iOS自定义转场(By Swift)/index.html","18dfcbc88ca0eda1f820148fbe6f39cc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","36248cd613364e048ffb1a681580f159"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","437429112799da7c6921741cebf7eafd"],["/page/3/index.html","72375efc504ae9063e21e4c034068445"],["/page/4/index.html","ff97c038551b4a0f38bb13957a7682a8"],["/page/5/index.html","50d91271c846456ee2e3a0f98d1884ee"],["/schedule/index.html","1c10f72a55c01b1d74a8985e5d82c6db"],["/sw-register.js","cd5ded0d1a2a5c95d404ef30bdb685ae"],["/tags/Collection/index.html","f2898afacd4b6dc80ab13249ab1c8315"],["/tags/Collections/index.html","1e2b05fe5c795226b2ba46b1e177d32d"],["/tags/Dependency-Injection/index.html","01495cde7fbd4623d82b2eea5f33df34"],["/tags/Modules-And-Hooks/index.html","ae43b664e01e339cab398cfeb4154224"],["/tags/Server/index.html","f37829ce06171124b963629e6f11a09c"],["/tags/Swift/index.html","ccd171ee386e91d60d90ca620a03b080"],["/tags/Swift/page/2/index.html","018e76288653528a7005e5fcfddfd884"],["/tags/Swift/page/3/index.html","f3e5d4dbb45be901df272725a05c5a77"],["/tags/Swift/page/4/index.html","a3623dd3af3eb054088c97ce574c2f16"],["/tags/Swift/page/5/index.html","53b1feb4e5651d146dabf190d28b79e1"],["/tags/UICollectionView/index.html","e1f44b2e2b885c6cda8c150a8b309e29"],["/tags/UIColor/index.html","7aed5ccec7f88392f7b348612403cf79"],["/tags/UIImagePickerController/index.html","10d168395706d69bf3c5ccf2a55583f0"],["/tags/UIKit/index.html","d71e1272e456e28c323b0d8c539210bc"],["/tags/UIKit/page/2/index.html","c2aab9bc902b51f7a640f5ff8a50b1fc"],["/tags/UIKit/page/3/index.html","3bdd580e38122622313816d89b82971d"],["/tags/UIKit/page/4/index.html","6a15935fff63896645fc0f0af4642a6f"],["/tags/UIKit/page/5/index.html","af20ec70eae3fc4cdb6110757ef08b22"],["/tags/UITableView/index.html","ffbdc171277cb0f8a667fa21f6d6f74e"],["/tags/Ubuntu/index.html","074d816c3ef7b67cc308585322824832"],["/tags/Uniquely-identifying-views/index.html","480266c2986537a3b0237d9e2132efd2"],["/tags/VMware/index.html","c43a562e6bd5a4d165ac925f46cb8481"],["/tags/iOS/index.html","4e1b37c1eb919b2221c095a056266c72"],["/tags/iOS/page/2/index.html","9e2cb73f0c3f2dabe726626286d224d2"],["/tags/iOS/page/3/index.html","6ec6339501f73c38ba4263dba1cf96c7"],["/tags/iOS/page/4/index.html","645fddd1b84ce230d88acdcdc402cb77"],["/tags/iOS/page/5/index.html","ae4ff16bab64bb123ffee2b0ee6f452d"],["/tags/index.html","02a21c44a1ed5c3c8b1a997b6718fc0a"],["/tags/non-optional/index.html","766da8637fa2c3f6a087eec61c900db6"],["/tags/optionals/index.html","822752e96bc0f64096a849ea186e8e2e"],["/tags/transition/index.html","3fb56212a27152dc03002eaed6bc7ee9"],["/tags/依赖注入设计模式/index.html","5a1661144f3104449eaf3cb88ac39164"],["/tags/初始化模式/index.html","7c1c48f75bbdafdd996e85fbec4ca699"],["/tags/单例模式/index.html","cceec0da6f279bb241e41a6b6d3b35c7"],["/tags/原型设计模式/index.html","120ff0efeb83d2eeae4e19b98aeb689c"],["/tags/命令设计模式/index.html","732bb6d0181fab9df54112c761da7208"],["/tags/外观设计模式/index.html","2dad945e59ab87d60dff9d5eb3ed60aa"],["/tags/委托设计模式/index.html","9843a2436466e9eeebb9f92a0d79b047"],["/tags/子类化样式/index.html","2fdfb2d6ac163586812da3bc6a425e10"],["/tags/对象池设计模式/index.html","b6e60e8a188f5779c4d9aa3e0410cd5e"],["/tags/工厂方法设计模式/index.html","b79994a45fbdfce2ccea2c8a1b0bf1e3"],["/tags/工厂模式/index.html","23133466da21eefadb751e42653dfb25"],["/tags/工厂设计模式/index.html","7e38b85b1fc6e274c538fa857824f7d5"],["/tags/懒加载模式/index.html","9d0a86dca775c380b490be0121dc0a9d"],["/tags/抽象工厂设计模式/index.html","fd0d4851db2335c728e7aa3a23ab845a"],["/tags/构造函数/index.html","f2cef240fa05f5c8e10f11ec1786a485"],["/tags/生成器模式/index.html","cb841261515239c7f0b3c9117b266167"],["/tags/用户体验/index.html","eb406aa80f7985123815c9c17feadd21"],["/tags/自动化布局/index.html","80de15971880784a63f359ad169a7d62"],["/tags/自定义UIView/index.html","ffe370977c6abdd40483ce08d9460c5e"],["/tags/自定义转场/index.html","127c4b323190991b26a86dd0d3936e7c"],["/tags/自适应布局/index.html","dd58b657959cc98cc655a1e29ad5ea57"],["/tags/设计模式/index.html","4904aafebd8c6407da8249e46b8be959"],["/tags/设计模式/page/2/index.html","c61d3bd4746b52ff87f5c20493a3aad3"],["/tags/设计模式/page/3/index.html","e83be6982280c337acaa5cd376dd3ebd"],["/tags/迭代器设计模式/index.html","41836e3e2edbd552eca0f075e489ff2c"],["/tags/适配器设计模式/index.html","196ce911526f1198766a1a802d3b30f7"],["/tags/静态工厂方法/index.html","f1f131293a9c4ffea744b1b61a831d8d"],["/产品开发的幕后花絮/index.html","3bf7245e2508d562a9ba5148eb70f504"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","3141f98f03199feb6c9f110d960fb747"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","3b5fc7a52cb6f103992a2b35fd9b5b31"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3ee32693e861c78f4c798a01724553bf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","02ae2be620236f186f28a6aff1dd85fb"],["/在Swift中创建自定义集合/index.html","c5843ae64d54c6a677cd655a995d660b"],["/在Swift中处理非可选选项/index.html","be4469e4ae74614f30030a5289e5dd8c"],["/在Swift中重构单例模式用法/index.html","3a793e677168be8fdf6f2c4fbb7ac592"],["/揭秘 WordPress Hook 系统/index.html","2df97937bc3c20c03fafce06a067576f"],["/比较工厂设计模式/index.html","31c51547601b4686c8ae7fe69c1fe868"]];
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
