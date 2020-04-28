/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","a68b42ee2f817b5ab9c050644c57425d"],["/Swift Lazy属性初始化/index.html","c7fe0c2eb97287dcb983d77b06f513a7"],["/Swift UICollectionView使用指南/index.html","fcee2f4acbbb64530fd2c1c8f27e2521"],["/Swift中UIColor最佳实践/index.html","eb1ebb35b40fadbf12c85d7417c4dea4"],["/Swift中快速简单的工厂设计模式/index.html","f5894964de8d3771a7a2d32b02340843"],["/Swift中构造函数与静态工厂方法的比较/index.html","a022f4fc27af42d50e682e4ad2072d30"],["/Swift中的懒加载模式/index.html","bd0a6fbd34e8b745d5ec5dc6e33996eb"],["/Swift中的模块和挂钩/index.html","b7bc331e1690b1d3107344abb830d2da"],["/Swift使用布局锚点添加约束/index.html","f0b137fd2ab44133f5839c6aa7cbf29d"],["/Swift依赖注入设计模式/index.html","27142d4df56af01b83a7716724345478"],["/Swift关于Dependency Injection (DI)/index.html","2937d315cb02b9084ce82b1f65aa485b"],["/Swift初始化模式/index.html","c00f732118a92d4d0b8281d92ea026bd"],["/Swift单例模式/index.html","8227de61647c7f1bee880f6a8dea9248"],["/Swift原型设计模式/index.html","23288b3517884044302cdf16e25a28a6"],["/Swift命令设计模式/index.html","e4f657bdd9ea0e06ec4cbc217dc56177"],["/Swift外观设计模式/index.html","bf321d9bac2f582fc4e26823d65677e3"],["/Swift委托设计模式/index.html","2bf5044219b53f4b0ba1b5029e0e64bb"],["/Swift对象池设计模式/index.html","1a4bab485685fab2489522772182708d"],["/Swift工厂方法设计模式/index.html","c9c455179da3e56670dc0c6323a25d81"],["/Swift带闭包的懒惰初始化/index.html","24c8d9fa122bb2bb0181e67358e715a7"],["/Swift抽象工厂设计模式/index.html","e743a5210e4fc1e65dbebecd9887f5b6"],["/Swift掌握iOS自动布局锚点/index.html","dd6c6ae5f5a7297f674712b465b8d40e"],["/Swift支持旋转的自适应单元格/index.html","25e65a53be43ad9ad92a585b2dc40617"],["/Swift生成器模式/index.html","db3eddc630e2c864a43bc09683b38e03"],["/Swift结合Xib文件自定义UIView/index.html","1c03270fa48b1afd28a129353361e6e0"],["/Swift迭代器设计模式/index.html","e3facf6fab87dc0e1cb6d461c7a9ffb9"],["/Swift适配器设计模式/index.html","8c55a15a10c67f5c77d0437acec6b4c7"],["/Swift静态工厂设计模式/index.html","2ad74091bf2fe5a3d37506243f7a1cc9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","8ae6bdccf2adba31bca5cece8994e93d"],["/UICollectionView data source and delegates/index.html","a72e607cd7524e1c7f914a266976f35d"],["/UIKit初始化模式/index.html","38852e043257a5510a914b48c68a6a18"],["/Ubuntu18.04替换国内源/index.html","e88dea7dea51f28a8869930e8794a63e"],["/about/index.html","4eab0d51f48fc45e1e86d504b3bcef97"],["/archives/2020/04/index.html","f3f051ac7d8aef67026271eb6f1d1c72"],["/archives/2020/04/page/2/index.html","7f8cd0b61e565fc5fd34e224cfc3a6d2"],["/archives/2020/04/page/3/index.html","725dd59972904b44dd3590dfbe55eaa0"],["/archives/2020/04/page/4/index.html","232584304f39290b248b44244300784f"],["/archives/2020/04/page/5/index.html","809861414108c5706c22d9f71f897290"],["/archives/2020/index.html","f61b02049703b341da68256302b8513d"],["/archives/2020/page/2/index.html","81377842487feed3e59ccf77813e51c2"],["/archives/2020/page/3/index.html","500cf936c3208172fde900cf4316ff82"],["/archives/2020/page/4/index.html","f27e91c2de9ef239ce49c21630e8f757"],["/archives/2020/page/5/index.html","76701c8c988b28444955dc6eb7839721"],["/archives/index.html","14c31fcc145b3aade1a6e58394d03dbf"],["/archives/page/2/index.html","6c80b05016bcced0cc955d9616f9252a"],["/archives/page/3/index.html","d29cd988220b352d4f35ff4ea72cecc0"],["/archives/page/4/index.html","02eb2ac1d92b6cba3262145af74f3a48"],["/archives/page/5/index.html","bac11d6bc5ac3d487c7d4a3ac8d84dbe"],["/categories/Hexo/index.html","fd7f6222b5271e1a41f992e3e7862585"],["/categories/Server/index.html","681e07be43e93e371afd6245f0b9e1ad"],["/categories/Swift/index.html","78587bd55f2ca12df292a45634853e83"],["/categories/Swift/page/2/index.html","8c2a01dc282221924ee2a3a54b2d3a2d"],["/categories/Swift/page/3/index.html","1746cc55a4e14c1f0928728d62c31adc"],["/categories/Swift/page/4/index.html","3039b043a77e6d6a2ce2c627be47c6f5"],["/categories/Swift5-2/index.html","6ef196bcd1ebcc4c267823ce77e3a678"],["/categories/UICollectionView/index.html","ff8d4ff7446e6466b3026258f123a294"],["/categories/UIKit/index.html","2ff8730d52f953cf8815b519c35d6f7a"],["/categories/UIKit/page/2/index.html","1c92fec4a2f8bb566cb3dc5703d6a78c"],["/categories/UIKit/page/3/index.html","93c73fb036dd6f72a9bd0ceda0873038"],["/categories/UIKit/page/4/index.html","908b3fdc9e193e1bf78c213bbcf53a91"],["/categories/Ubuntu18-04/index.html","4ca2cc43fdf8ce0b899e4365aeaf39cd"],["/categories/Ubuntu软件源/index.html","4a8e4b6d270f079fd899a47ad1983650"],["/categories/Vapor4-0/index.html","1e842458f69166cbb52c584b711bdc19"],["/categories/iOS/index.html","05907e0a20567182a391d88692fe0dbb"],["/categories/iOS/page/2/index.html","223775d1b98db4094e141199a334cf85"],["/categories/iOS/page/3/index.html","f80ed35f94a3dbad4e5306caf2caf865"],["/categories/iOS/page/4/index.html","0d98d723dbd199f8a5ee0abde5d027f7"],["/categories/index.html","32021d2d21a399c072b07831b9ec9329"],["/categories/用户体验/index.html","b81d9585f2436d6bef8e933ec6a7b898"],["/categories/设计模式/index.html","d48a3c03f6f44f6626e5f9d62a24bc99"],["/categories/设计模式/page/2/index.html","f174daf59b76947eaa2ca24feb834781"],["/categories/设计模式/page/3/index.html","04301bddf0408a92113da00e2a5e6388"],["/css/main.css","c00ffb6c1b377397d7559eeaa15d5046"],["/hello-world/index.html","eab9cb5316307e0d9e45cbd0530c19dd"],["/iOS自动化布局编程/index.html","55534b833b92b5f86057d77a3f3f15c8"],["/iOS自定义转场(By Swift)/index.html","f258aedaaf572c0896345a136ba46a77"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4674d704b62dd1e92626d326f9853a39"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","29bfda28a58036b6d168917db6ec6fdb"],["/page/3/index.html","84b4bcd6dfbe0d3dc988f4fb7372736c"],["/page/4/index.html","9e5464631f5e12f169b8510f90fcc614"],["/page/5/index.html","9028759c95d3e927a0c00e9f60e6e2a5"],["/schedule/index.html","e232b1b19e01ca5146cfaac572c16241"],["/sw-register.js","f561fbfbb1c9a44b6801f597d2be18e8"],["/tags/Collection/index.html","2add152e6b8231260190f6072740c766"],["/tags/Collections/index.html","318020e65aa19eeee8cb09af340d8770"],["/tags/Dependency-Injection/index.html","852dc1fbbdc2b13182a1f91984fb714a"],["/tags/Modules-And-Hooks/index.html","52dcf62522b5182e510daef67e70d344"],["/tags/Server/index.html","f5b4c0fd9df4bd1f393fbbf4aa7fb70d"],["/tags/Swift/index.html","332debd66b92552869f81525430daad1"],["/tags/Swift/page/2/index.html","ade6e81cb2c5a7fdc14a09c85210b7fb"],["/tags/Swift/page/3/index.html","04fb4a327294a2dc24739fafed4bd43d"],["/tags/Swift/page/4/index.html","25eac85554146dfc17801bf5e1ac21f5"],["/tags/Swift/page/5/index.html","811bce94cca90c67d119f788654d8081"],["/tags/UICollectionView/index.html","64f67fc4b45b57a654d2fbf0bf882da9"],["/tags/UIColor/index.html","4ecfa5173773e07bee053f5581b30555"],["/tags/UIKit/index.html","b4e7941bf4bd7a5dd2889a6a0f7f67e0"],["/tags/UIKit/page/2/index.html","1ae40ca82ec0e96b73d9f35055536d9d"],["/tags/UIKit/page/3/index.html","360df7675231598883510beee8572cd7"],["/tags/UIKit/page/4/index.html","34ca2affe4433761f8e2006d4d88a24f"],["/tags/UITableView/index.html","275e41afd6df4d4c6af8c8ae55db9a63"],["/tags/Ubuntu/index.html","e756a66dcbe79d0fb99d3f8abde827df"],["/tags/VMware/index.html","11c0482fec4357595f444bc08d1f7f37"],["/tags/iOS/index.html","e15d1839dec66b2e342dfa4d441555ce"],["/tags/iOS/page/2/index.html","aa5ba5377749d936eb072d999164a0f1"],["/tags/iOS/page/3/index.html","624b54627b830ba0916ce88d87e23a07"],["/tags/iOS/page/4/index.html","b16d52b1d088ed36d63356f609a81a9d"],["/tags/index.html","7f5c67c70d961dc6d2fe4389e28c2e87"],["/tags/non-optional/index.html","f752d01c5b3b4bea7435aceec6f8e8fc"],["/tags/optionals/index.html","41de15a48b9e63c6e605fbf62aa0c00c"],["/tags/transition/index.html","eaaaa0151369eb61c936c30797395e9f"],["/tags/依赖注入设计模式/index.html","fde74401ed4077e4f0d39695d0aab70e"],["/tags/初始化模式/index.html","796b902755cb29091c3fda684ec351b2"],["/tags/单例模式/index.html","a1bee927f036215742400c1354ea153d"],["/tags/原型设计模式/index.html","a38737fa3928b601e5909184a7c2577a"],["/tags/命令设计模式/index.html","58811556305e36d82789af6f63968c50"],["/tags/外观设计模式/index.html","fea648d72d88e8c45f08e9aad1e79898"],["/tags/委托设计模式/index.html","dbd3a34aa3b8274182a912a6ddc5739f"],["/tags/对象池设计模式/index.html","9353ed6963bc47e6228a58839a311920"],["/tags/工厂方法设计模式/index.html","d4c38bf99380625f520d41d30f522398"],["/tags/工厂模式/index.html","13df6b9487bbb2f09e79bfd549b7baca"],["/tags/工厂设计模式/index.html","728f250822197285ce9a3eb2d9b213e1"],["/tags/懒加载模式/index.html","68f023a1449e13de480f5ab39eb3a31a"],["/tags/抽象工厂设计模式/index.html","a125b3116a3b759205107d007fea3566"],["/tags/构造函数/index.html","e17d90da95dda00a8835ae8255ebfa89"],["/tags/生成器模式/index.html","bead1b0438b29025ed75b0f43afbc95c"],["/tags/用户体验/index.html","65413ce06837143f8e380b0f30214e52"],["/tags/自动化布局/index.html","7318df69e7ce0b98d81abda5c1c5e4ee"],["/tags/自定义UIView/index.html","7489b92bb9a9ae948824f69a8d094075"],["/tags/自定义转场/index.html","be3fae14917ea38532de75d14424aeec"],["/tags/自适应布局/index.html","3a3cfe48a23fb8e9b8fe6bef22d08452"],["/tags/设计模式/index.html","c367c7262ca141d2f8736f792c4e8775"],["/tags/设计模式/page/2/index.html","098f84348dc6d51297e5d5966194732c"],["/tags/设计模式/page/3/index.html","7f6046e0dd31e42c60c44bf0f67d6856"],["/tags/迭代器设计模式/index.html","dbd348c1aca9ec60b06b1e2a9ef2ce36"],["/tags/适配器设计模式/index.html","169e820df53ac0c2038962c24c902063"],["/tags/静态工厂方法/index.html","a6cc11adfe9aa650ab8ee6dc6bba04a0"],["/产品开发的幕后花絮/index.html","3cc9b613a52cbb4998dd7ae2e8cd4d8b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c76f99dcf61b75cdf160b226931185bf"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fc07a614af065a1053b6c7a9d5c93e38"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2a403ba78b3d98c599a1239d8e934047"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0463b3f6720e1e7747e7a25ccfc718f9"],["/在Swift中创建自定义集合/index.html","07762c8d4bf41de1346f3d5e8257c5c8"],["/在Swift中处理非可选选项/index.html","dffa011657d7c2dfc3e6e6937d20fcd1"],["/在Swift中重构单例模式用法/index.html","6dedc596cd0f14c137e7a8bb4b6289ae"],["/揭秘 WordPress Hook 系统/index.html","28ac4fd669eb2a4a5cc97a799220e2e7"],["/比较工厂设计模式/index.html","87ec8fbb8cab4ccd98e3d5c6c72a3e57"]];
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
