/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","15c3606bbf09e18ca227d88477cefc48"],["/Swift 5使用UIImagePickerController拾取图像/index.html","7ec051ba06b80051caf14c3131a519b2"],["/Swift Lazy属性初始化/index.html","ac6a34ed5603a9053cbd0bff035ec2e1"],["/Swift UICollectionView使用指南/index.html","565c25baafcb551ce343f480c52746cd"],["/Swift 选择和播放视频/index.html","ba0674a80d222ad55253351b45dec766"],["/Swift中UIColor最佳实践/index.html","03304026a0d3ac69f0850115b6f1e828"],["/Swift中快速简单的工厂设计模式/index.html","3cbd908dabf750d0e8ca5a08044c39bb"],["/Swift中构造函数与静态工厂方法的比较/index.html","118a255798184a3cf3138089dd126d53"],["/Swift中的UITableView教程/index.html","c5ad3b13d0db2e9582aa30625fa504d2"],["/Swift中的懒加载模式/index.html","7b7574f3233792a5113aad8552044636"],["/Swift中的模块和挂钩/index.html","ff688fcf4a4d891b3578255edb9d209a"],["/Swift使用布局锚点添加约束/index.html","e61633d7c0bb786978e9208b74c2662b"],["/Swift依赖注入设计模式/index.html","e80abc4cdba04216b3f77f7107c73386"],["/Swift关于Dependency Injection (DI)/index.html","761419e94f9c46cb1717a596b4e90311"],["/Swift初始化模式/index.html","f9eca66cf5fd086942e807a354ea0487"],["/Swift单例模式/index.html","7b5e3749e57c433825520e1f8474b7a0"],["/Swift原型设计模式/index.html","8dffc2339ec7b5d2669ec81efd5a59a3"],["/Swift命令设计模式/index.html","2e0c5ded231877c3368bb781518cd47c"],["/Swift外观设计模式/index.html","2e86cee6ffe7585719e412e92589c2a6"],["/Swift委托设计模式/index.html","70dda2d82a87e272a2b65fee083562ff"],["/Swift对象池设计模式/index.html","96a44503bd5919b4e34eb1afa185953e"],["/Swift工厂方法设计模式/index.html","c594d2fe3aa09613b39152a19b05f07e"],["/Swift带闭包的懒惰初始化/index.html","95554261c43dd3329b754d70f7c89ac0"],["/Swift抽象工厂设计模式/index.html","df3a3a2cab60f042c402c6860c865911"],["/Swift掌握iOS自动布局锚点/index.html","edd486e6271bd13b0454388de44e761b"],["/Swift支持旋转的自适应单元格/index.html","ced7c340efe37567e83ab24c56bf90e6"],["/Swift生成器模式/index.html","d04c7a9484c08cea06ebbca7e0467b52"],["/Swift结合Xib文件自定义UIView/index.html","8b39442f1783e737b5c0bac5fb06e65d"],["/Swift迭代器设计模式/index.html","9282d0d129d581b32d7967e4ba8d850d"],["/Swift适配器设计模式/index.html","89055e6c65606a8155c026d063335bdf"],["/Swift静态工厂设计模式/index.html","ed696fb6d8f6c766293c92ee489347ab"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","769ac8cc9db80e409526f033a1e79fe8"],["/UICollectionView data source and delegates/index.html","ba8be2ed18997fd7e30fce0556491b6c"],["/UIKit初始化模式/index.html","4d96f52b2f330ebff3f3113d1289275c"],["/Ubuntu18.04替换国内源/index.html","2624925e7dd0b9bdfa8d7b5d53e35c31"],["/about/index.html","6c7774e1b88247379dfbd3bb32098b52"],["/archives/2020/04/index.html","1a1061a9fc0bc6e48c1a9a17e34e7aec"],["/archives/2020/04/page/2/index.html","800da004fbfeb28dd48f2f857b878155"],["/archives/2020/04/page/3/index.html","96e7bfaff871e696d3c45ca828a3a81c"],["/archives/2020/04/page/4/index.html","ebe539edc6fd5f5f28fa09b8b0110ab7"],["/archives/2020/04/page/5/index.html","24380b71662e61ad26790f24911408ea"],["/archives/2020/index.html","f1f78de0eb59ceb02a5aab3a6f17064b"],["/archives/2020/page/2/index.html","43085c272c740993a634edaf08fc2512"],["/archives/2020/page/3/index.html","40674d52c1ab458d3cd3abeaeb4ec5b7"],["/archives/2020/page/4/index.html","b21d0c029f55df37c9290867e187d4a3"],["/archives/2020/page/5/index.html","d9e0d7fa4bd86c68ab8e6857b3c0520a"],["/archives/index.html","37e4651c06cd124c2c979a65856bc022"],["/archives/page/2/index.html","f256820b5492c42e09314bad69e4c624"],["/archives/page/3/index.html","9110e0fb6c7fc49d80d196c4a742c119"],["/archives/page/4/index.html","09165c6b9f7549f9f2d6bd9de7a17891"],["/archives/page/5/index.html","3525e667bfd98b4f3837491cf9aa50fd"],["/categories/Hexo/index.html","d06bdaec9b6872f99818f604feba38bc"],["/categories/Server/index.html","7f666b26286e49147d35d67df6e91945"],["/categories/Swift/index.html","9ecdd90efada8b565cbe7fd2bf4624d8"],["/categories/Swift/page/2/index.html","9303a621cb0c9ab9d2515319e53cd6c3"],["/categories/Swift/page/3/index.html","d52343c6a22910d96e03b2af2879015b"],["/categories/Swift/page/4/index.html","ef79f794acafc3ea7e11a9720f426368"],["/categories/Swift/page/5/index.html","fc5a9bb6fb3c10741d803c8fa0561fc3"],["/categories/Swift5-2/index.html","707ada4fe7e1389ad60de5bcf078411d"],["/categories/UICollectionView/index.html","6d09e6478a95e3929d03d4b13c2b1a5b"],["/categories/UIImagePickerController/index.html","ef898d1c2d96020e8a5f6987421dd2a1"],["/categories/UIKit/index.html","48c470da5f903556d865b76b2923535d"],["/categories/UIKit/page/2/index.html","6d2783adf3d211a6597de0e6f58645c2"],["/categories/UIKit/page/3/index.html","bf28c70a49ff6cf0acf270534d705f28"],["/categories/UIKit/page/4/index.html","b487a2dc9c999c3695a5d109518acd8f"],["/categories/UIKit/page/5/index.html","2ae5ed58c86023b0fdf7a1e9316020da"],["/categories/UITableView/index.html","a74ce88a9f01540ba207d4b7d5b3b26c"],["/categories/Ubuntu18-04/index.html","59f92e826bfd53f12e8e198c4d1335b5"],["/categories/Ubuntu软件源/index.html","dbfd1a560477594d5a63fb0506a5caee"],["/categories/Vapor4-0/index.html","00a88284e3e32524e849619694bb3b58"],["/categories/iOS/index.html","6104007d98d173e021c7fbec550e1ee7"],["/categories/iOS/page/2/index.html","8db840ffb433a5c9049ea9f40720f941"],["/categories/iOS/page/3/index.html","146537ddfb766d782e0bac1d33e62fef"],["/categories/iOS/page/4/index.html","9147322d44b849b63f29b5b6ce49fbaa"],["/categories/iOS/page/5/index.html","872876eadc3af933f93d7a2ff9995d6d"],["/categories/index.html","56b36d8b37c8252e4f1118cc66e5d2b1"],["/categories/子类化样式/index.html","132691ad3b444b0b0f49c334030af3b8"],["/categories/用户体验/index.html","326811632d6dcb555d7976347879eed2"],["/categories/设计模式/index.html","87b70c8b8031ebbf52dcbbd96a2e96ac"],["/categories/设计模式/page/2/index.html","affe104e3b14c57051c417d08d1261e4"],["/categories/设计模式/page/3/index.html","57b801e0298cd5aa034234c3ce0c4ffb"],["/css/main.css","5de0830a89b1a0fa478ecc77eac662ca"],["/hello-world/index.html","b507a42b046dcca1ffd97dd21f53fbc1"],["/iOS子类化样式/index.html","f57ed86eb8e2d942c6a4b644ea6c60d2"],["/iOS自动化布局编程/index.html","f87fc72682dfa037636167673d932e7d"],["/iOS自定义转场(By Swift)/index.html","356b8629f04f4fa70a290b4fe0bebf21"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","00fa15007c14469e2e9e82a38dc4928c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","097849edeb3c123b50bbf885f7fe3dc0"],["/page/3/index.html","3cc287cb9c6a791dbbf068c41cc7e853"],["/page/4/index.html","c79fd91e3168aec7e16bed55baf397ca"],["/page/5/index.html","88722e7bb3221177c130a2d9791ac259"],["/schedule/index.html","40e6dc768e04ba92b48e13a118c10887"],["/sw-register.js","a429acb0ef4d8259cd2b526c56377714"],["/tags/Collection/index.html","9aa3e8123460089c71cc830a0d362553"],["/tags/Collections/index.html","1d49bc44a55c1ea48f00ab025d5cf281"],["/tags/Dependency-Injection/index.html","ae6ba7bb690b3ea4a6f83d7f4a24d5d8"],["/tags/Modules-And-Hooks/index.html","159ee17cdc2044dce9c827c91187e464"],["/tags/Server/index.html","947f6d3f0702203a0ac5ed49d4d2e397"],["/tags/Swift/index.html","f108699e34f9329ad198b65170a15760"],["/tags/Swift/page/2/index.html","d687138dde2ba0ab81650e02ed03bc36"],["/tags/Swift/page/3/index.html","660c78f6f34022549e35e3fb1ec7e01e"],["/tags/Swift/page/4/index.html","9006f29a8eccc9229bd2155000bbecd9"],["/tags/Swift/page/5/index.html","863436638c3287ecfcdfa0bdd858cdaf"],["/tags/UICollectionView/index.html","d77b0fad6929a38774f04f9bd4db78c6"],["/tags/UIColor/index.html","0d07455f2b7cfd7bfee6d0d2e72bcea8"],["/tags/UIImagePickerController/index.html","7148561483ce69120f141adf42f020b8"],["/tags/UIKit/index.html","22cdb647ad2a5b6d410469c2fa5703ae"],["/tags/UIKit/page/2/index.html","bfec2865d894535d39b616279cc1e419"],["/tags/UIKit/page/3/index.html","51a7e733dff3de0461b45da7cef1f54f"],["/tags/UIKit/page/4/index.html","850c606e59519c6789da783b0ce1c857"],["/tags/UIKit/page/5/index.html","d615eafd9fdf883a589d7271ebc45bc2"],["/tags/UITableView/index.html","17838848068abde64d041a318a895f39"],["/tags/Ubuntu/index.html","abc3b31235a8081b53fd159132b558c5"],["/tags/VMware/index.html","0fe961fd7a02c373d59839ccacef2260"],["/tags/iOS/index.html","e5ca747502e50b350a8c1a8810596072"],["/tags/iOS/page/2/index.html","7c865f611ead2dc88bedcef076ec1ef0"],["/tags/iOS/page/3/index.html","fb47b9ef6094e2421d57324a520b7cf3"],["/tags/iOS/page/4/index.html","ba184861c4ba377b0b9c0aef148c284f"],["/tags/iOS/page/5/index.html","e45313e1ac77e7823062cd64b7e45e72"],["/tags/index.html","61b9c0c785179e3f261e7b8800f6b179"],["/tags/non-optional/index.html","1df04e0a89be105e731a3c6e4f464931"],["/tags/optionals/index.html","32eac56156ec9eedfe82e83a8138e63f"],["/tags/transition/index.html","b13ab3f494c13019e69a3b3bab21e546"],["/tags/依赖注入设计模式/index.html","f4f220c6093e0e203861e93848b4e51c"],["/tags/初始化模式/index.html","b5720a4a976e1ce5b6294f68af3a77f5"],["/tags/单例模式/index.html","a89b8f1f6d3ef8c14fb5f2e452f43ed2"],["/tags/原型设计模式/index.html","1ad728201866a8b926ced265a25f460e"],["/tags/命令设计模式/index.html","e927b47a30efb338c75e680ac886e7fc"],["/tags/外观设计模式/index.html","2415661eb16b78fe6b06feab82b980c3"],["/tags/委托设计模式/index.html","e1099df115e51052903d8b5e86070d55"],["/tags/子类化样式/index.html","9883e09964851c5ff95bed48ab70f7ff"],["/tags/对象池设计模式/index.html","439f9f53df9eb1cfbf612e3028e80942"],["/tags/工厂方法设计模式/index.html","c4a5bd9b19fb9da5ffc0323de9a6cd9c"],["/tags/工厂模式/index.html","87fea87ca74a55496973fb4fc827f4ee"],["/tags/工厂设计模式/index.html","386bba7baaf4d1a3f0b4f2bde206b312"],["/tags/懒加载模式/index.html","76ce2f9e75db18c36b3d03a9a6e438d8"],["/tags/抽象工厂设计模式/index.html","32111b18b5b574768ebff3530a69c460"],["/tags/构造函数/index.html","9d03a5eff902df8b2c85e68d89cb1b30"],["/tags/生成器模式/index.html","b7cf4c362d53ca662f9cb211a8ae4dd2"],["/tags/用户体验/index.html","e21fa9ad66e2a4198812135cf4aeea95"],["/tags/自动化布局/index.html","6430ac8636c563c26d8fceea62fc6173"],["/tags/自定义UIView/index.html","2d776b75ccc4137ffe4896b136ea0403"],["/tags/自定义转场/index.html","8636d04d9ff912c33f6d8401b0e0fdde"],["/tags/自适应布局/index.html","88da0f026e60be6beed2d398d926a0a7"],["/tags/设计模式/index.html","f349f885f190e21a605eb97a55f3de45"],["/tags/设计模式/page/2/index.html","b5abd2d2ff3d8980515853f5e83cd4c6"],["/tags/设计模式/page/3/index.html","457a4a6a7b1a2f1b42fa67b2e9bab002"],["/tags/迭代器设计模式/index.html","38593616e3952823c84b409a17455d30"],["/tags/适配器设计模式/index.html","ff612633b81c962ce4aa0d2fcf2a8740"],["/tags/静态工厂方法/index.html","3e1650a683cdcb0fa5da26804a4e73a4"],["/产品开发的幕后花絮/index.html","09f5419fb5e351817a1c76c7add74f81"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","eb233689a619eb1436d6f0d520438493"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d9c49a5a416dff12833701c921097c93"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","1757b6a569c381b6e3cb5753e01e8028"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","82b583a4c20c9acb45584c5f9317d491"],["/在Swift中创建自定义集合/index.html","f854f2b22de10f8a168aab068fee1396"],["/在Swift中处理非可选选项/index.html","9ad807efbdf10371d4f9ec1a7832e96c"],["/在Swift中重构单例模式用法/index.html","0789078b6e1956f951c4177d6ef08bd7"],["/揭秘 WordPress Hook 系统/index.html","77c76079002e2e8c36ffd4120a6b1189"],["/比较工厂设计模式/index.html","65a96396210ce6972e7caec3089d7149"]];
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
