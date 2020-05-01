/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","aa6f2725456060728953ecb3f6924a91"],["/NSCODER和SWIFT初始化/index.html","de5c3e5f0ec33c5fc06ee70b52a814e8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","24e3cdcae08d8b72f36d73ab176f6750"],["/Swift CompactMap vs flatMap：差异说明/index.html","ed97d12406fbae71f3775a2da2b9d705"],["/Swift Grand Central Dispatch 深入实践/index.html","28042280f9946d69f02856986fd727c4"],["/Swift Lazy属性初始化/index.html","9a658c494a0881f7fc95d84eac0419f4"],["/Swift Promises 初体验/index.html","fb7c4ed1d1be444adfb2cc06273fa310"],["/Swift Promises 探究/index.html","555fb0e952cc7387ce42672b7f51d143"],["/Swift UICollectionView使用指南/index.html","4ad8f8fcf1062110bc997f5442884d06"],["/Swift URLSession && Combine framework/index.html","e3f6048509a2ea6d4f8daf470f956db8"],["/Swift 唯一识别的视图/index.html","0aed802cb3715169be5743a35debb22d"],["/Swift 如何学习现代UIKit？/index.html","9ae9261d1238c97382d84c3aee3a4b9b"],["/Swift 用 compactMap 替换 flatMap/index.html","7d4bd7c97bc1935615ce7e624ccc4a5a"],["/Swift 选择和播放视频/index.html","38c5ab289ccdbcc22f93597adc542bcc"],["/Swift中UIColor最佳实践/index.html","e0d2e24a935a15aa8177b3e4d862a045"],["/Swift中快速简单的工厂设计模式/index.html","34d0d76cd4b779085f3928226b34c331"],["/Swift中构造函数与静态工厂方法的比较/index.html","f4978d7e7218108117ec4cb01d5ac1c9"],["/Swift中的UITableView教程/index.html","4f0f46af65ee50465ec2e2f2dbb214e4"],["/Swift中的懒加载模式/index.html","29e19913956853449794668a11bb2c29"],["/Swift中的模块和挂钩/index.html","e9b959191462deded190d9ce4ce77d6f"],["/Swift使用布局锚点添加约束/index.html","d5bdd0520463f2b38837847a03bd3e9e"],["/Swift依赖注入设计模式/index.html","9f18acf2bb384aad92c61618e06b948d"],["/Swift关于Dependency Injection (DI)/index.html","4fb0c2e5598409da80d61693715b33c7"],["/Swift初始化模式/index.html","8c7de55399d75e3df88bf6c5772be0d6"],["/Swift单例模式/index.html","bea589437b7d1767a39dec1d0a7c4e7f"],["/Swift原型设计模式/index.html","26a5b9fd3cc216636ce8d2d1caa753f1"],["/Swift命令设计模式/index.html","0c939c660422059d8f60dd671bb23761"],["/Swift外观设计模式/index.html","ba8edf18f5b000585a0dc21c33d9ef23"],["/Swift委托设计模式/index.html","aa89c3635b88d9ec35b836288a3d54bc"],["/Swift对象池设计模式/index.html","511623b25c6698868fe08aba45d8d619"],["/Swift工厂方法设计模式/index.html","dfa95de3394c3f39e6a1e9b877c88354"],["/Swift带闭包的懒惰初始化/index.html","39a7ee4d2f847c9d0419091d836355e0"],["/Swift抽象工厂设计模式/index.html","207a4403023105b029e5e24ab68b1133"],["/Swift掌握iOS自动布局锚点/index.html","89b8d0c77b20d19393baf79ca0750135"],["/Swift支持旋转的自适应单元格/index.html","259209079aa110d7b3197afce73ecce4"],["/Swift枚举值/index.html","c89a90bb921343cf1f67a5ed83eeb88a"],["/Swift生成器模式/index.html","2776f6da6381aa0a2868610142c23c07"],["/Swift结合Xib文件自定义UIView/index.html","738d9627ded97c9c70eb3f6a6760c1c1"],["/Swift编写的20个iOS库(一)/index.html","99258dc885b83aba9d9711b7fbfa87fa"],["/Swift迭代器设计模式/index.html","c3636c7a45dacb9aa0ef6af912c5f2ac"],["/Swift适配器设计模式/index.html","8d2ce07c57ddbaa5844a1feec8e374be"],["/Swift静态工厂设计模式/index.html","ca6a24699361d0a5564762aa4f5de8df"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","bdf727c677bd49572d958f555980aba0"],["/UICollectionView data source and delegates/index.html","2d825da29afed1a4a79e00cade1a1750"],["/UIKit初始化模式/index.html","69640ef3b841d9ca641fb1622bc8596a"],["/Ubuntu18.04替换国内源/index.html","a50d530ac6764b8c1dd5f83f023ba35f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7838e10d012beab53ea2d085b3aa30d6"],["/Xcode扩展/index.html","8e68a097749607b6fd4f6677bcd66fe4"],["/about/index.html","8426dad6cc1ef6a0d3011dc7aa807d10"],["/appleOS的Networking示例/index.html","b156b082d1f1b1028d600a400ac0607f"],["/archives/2020/04/index.html","227a09c797ff9fecd2027a23e527bb00"],["/archives/2020/04/page/2/index.html","d241ead69316d5c4f7a9d6ba85317a65"],["/archives/2020/04/page/3/index.html","13ceb63f1429358f3ed4e9b86c564cb6"],["/archives/2020/04/page/4/index.html","f67d132cc96b38fdaa32a6bb56f768d5"],["/archives/2020/04/page/5/index.html","51d47d3bb85bb8b5ac25e39b3df7ba5d"],["/archives/2020/04/page/6/index.html","a7b243918d0c4b287980e175628159b4"],["/archives/2020/04/page/7/index.html","9c6dd04636d06d30cbb8441338ad6098"],["/archives/2020/04/page/8/index.html","0238957ed7cf102e056764e54fbf48d0"],["/archives/2020/05/index.html","88dec97e5dbb0f6942231b96c0918947"],["/archives/2020/index.html","6cd32ffc50d1a9f0d63bbd4499497d00"],["/archives/2020/page/2/index.html","36916d9e7598c56989db6fa9584e4efb"],["/archives/2020/page/3/index.html","3551db1034ed820d8f973ce96a1a006a"],["/archives/2020/page/4/index.html","107b8ea77e9fe78952d1888999a0768d"],["/archives/2020/page/5/index.html","ff94b9e8234bebeccf63e3f6c5da3aa8"],["/archives/2020/page/6/index.html","17a72ea2fe8227784c60fd594013af51"],["/archives/2020/page/7/index.html","c950bf7a0a7a24c26d22983298ced1ab"],["/archives/2020/page/8/index.html","36b2f11977d4d2f50a4f58b5374ab176"],["/archives/index.html","2d626fd4e57a51b3d6a615b31f12eeee"],["/archives/page/2/index.html","a57d271a66bdb2c6fe803c469f8e8310"],["/archives/page/3/index.html","4ff2d3212f56e876a080a42d7f8698a7"],["/archives/page/4/index.html","d117bd21985a62ca85209d5936749375"],["/archives/page/5/index.html","a947c5ada98b36d493fbccaeff240814"],["/archives/page/6/index.html","ab651989cc3aeb5cb7db5e5497a331f1"],["/archives/page/7/index.html","2c6ed49d8cf0b1ab112ea545b5736184"],["/archives/page/8/index.html","c89f2b2a22f5ac3d34eacc7cfcca6dc0"],["/categories/Codable-protocol/index.html","ac2ba19d58923282800e08dacaacd0fe"],["/categories/Combine-framework/index.html","6b96c0d5a7a6e268619f3b133abae8fe"],["/categories/Grand-Central-Dispatch/index.html","fc7aef798d6bcdb52a1858ebdf088587"],["/categories/Hexo/index.html","132a27bcbfc662e9a9af5290d14f1cd9"],["/categories/Promises/index.html","5ac1d33adaf84d4c4f6814b4ffedf26b"],["/categories/Result-Type/index.html","845ebb1ca99fa8d08ba1e0d6e238c9e7"],["/categories/Server/index.html","a91b37e76025bb0c01bf3fa949fc9826"],["/categories/Swift/index.html","40ecf2bc25b2ed8371bad1fad1192cd2"],["/categories/Swift/page/2/index.html","62ef3d49db7f77f9c3e2667cce765aed"],["/categories/Swift/page/3/index.html","27b96f0a1f1ac8380016ceeb984b6285"],["/categories/Swift/page/4/index.html","70e8f01a99148dcc5327289e50bda288"],["/categories/Swift/page/5/index.html","b88ba9637e3ba157e5e3b8f3520d89b4"],["/categories/Swift/page/6/index.html","697902afb111547a3ce950e971bc236c"],["/categories/Swift/page/7/index.html","d48953bf180b8f036109aefdf01e31f9"],["/categories/Swift/page/8/index.html","818415ccff4963e7334459b41dd402ff"],["/categories/Swift5-2/index.html","e73342b94f9400c7b93504b0d1b44d33"],["/categories/SwiftUI/index.html","4fd5cf5e54015bde47ded8e3769cdaae"],["/categories/UICollectionView/index.html","277e5b9a31430962e76328130fd2ec32"],["/categories/UIImagePickerController/index.html","a8c9ce68585b3790a4c1a009a1386972"],["/categories/UIKit/index.html","5e275f952c9c581ab1261804fadb7e8b"],["/categories/UIKit/page/2/index.html","fe69d395911f364f472137df78e25461"],["/categories/UIKit/page/3/index.html","694b73fbff715cf6a6246ff64bbc6b6f"],["/categories/UIKit/page/4/index.html","8001065a6a2c76ab54d2dfa1e25fef25"],["/categories/UIKit/page/5/index.html","7c9357c217a4473d1650f9744ace13d7"],["/categories/UITableView/index.html","2287c9103019b8563a85f26b8d87d58b"],["/categories/Ubuntu18-04/index.html","64cd3935ab8593d6f669037231cf2572"],["/categories/Ubuntu软件源/index.html","86824234ac9ec4095cf112bc9d5ba9de"],["/categories/Uniquely-identifying-views/index.html","925cbccd865423c6d3ad4a624f438a10"],["/categories/VIPER/index.html","1abf4ce6de8ebb60243529bc31ed5795"],["/categories/Vapor4-0/index.html","16a4db03155dbd7a2afd63ef7fa945d7"],["/categories/Xcode/index.html","15f9fea6c90f1f20e4a7b4c996e05c11"],["/categories/appleOS-Networking/index.html","8b93bdbd28d4af1028479218ed4a46c9"],["/categories/enum/index.html","394551f14510af18a02b40a6241ab750"],["/categories/iCloud/index.html","ef3ddfe83724906ae1ca7bcfa28f40b9"],["/categories/iOS/index.html","a9e3ade00fd9634b0038ad61772dc047"],["/categories/iOS/page/2/index.html","804d387b20fa11a800137bb87d701203"],["/categories/iOS/page/3/index.html","d047aec6ddce01dd2eb06af1ea4b4b2b"],["/categories/iOS/page/4/index.html","4e076570ed4e6bff843ea15a230734cb"],["/categories/iOS/page/5/index.html","b194fa5f256babce36465999faea3bf6"],["/categories/iOS/page/6/index.html","7bd755a02a35387bf86080d1542f14b9"],["/categories/iOS/page/7/index.html","822e2758cbc08c833881fa1136356b0c"],["/categories/iOS/page/8/index.html","abe9d54f02c85182b9420d3b1290580e"],["/categories/index.html","a1d6e2ff2c35174290567ed165af00d2"],["/categories/random/index.html","4b2e87a3b850a341adf9fcbc53ab7c21"],["/categories/三方类库/index.html","bb2de26194ed0cef66b93b17b2624ac9"],["/categories/函数式编程/index.html","713b5dcf8bfce0ad78047f542be350ad"],["/categories/子类化样式/index.html","c571a93d82b6c7e3a1742a74839d3165"],["/categories/架构设计/index.html","a8f3a58d7c2d7e0bc83a822d59e2b104"],["/categories/用户体验/index.html","0c58598b5cbbe50a833f1d208385c6db"],["/categories/设计模式/index.html","c53ab2f70b7e8a0be56747fc21fb94b3"],["/categories/设计模式/page/2/index.html","d6d4499734f75f42a9fb8cbf2bb4348d"],["/categories/设计模式/page/3/index.html","c5df53af8d30fe3f486efcaeef513bc2"],["/css/main.css","af3edd31ccd13f3129e63b135e192471"],["/hello-world/index.html","3d7a5d78229c1be435e271dff47e38ab"],["/iOS VIPER架构深入实践/index.html","4700b22903761087eae2523b6560b920"],["/iOS 自定义视图，输入表单和错误提示/index.html","ba8de4de5d96e9d74f41fd74e750bdf8"],["/iOS如何使用iCloud文档？/index.html","c85ac9c3da6dc49c8b1e2e64f7ef2b3a"],["/iOS子类化样式/index.html","ac6e53e4c96158558ff11a471761ebaa"],["/iOS自动化布局编程/index.html","b36074155267bdd9a44ae724dc0e03d0"],["/iOS自定义转场(By Swift)/index.html","36e2b089a21a3dff7d504e4eb8e30437"],["/iOS项目架构：使用VIPER/index.html","1e5a19eb636c06f513ba5ecd0f379deb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","676791e3ea59f65d7b255e8282e8bb3c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d1cbdacc540329ff2cea22532116e168"],["/page/3/index.html","215cd0a3adb87a66802031d4ad72cd14"],["/page/4/index.html","3321e045856cddd0372953e4f46d59e3"],["/page/5/index.html","3dc4507ece0477f86410c5edb24775cb"],["/page/6/index.html","66eb0722a5bf24251f2a3c9cf8886bde"],["/page/7/index.html","10a5a81246658d6d8e90f43c85fd849a"],["/page/8/index.html","20cf11d6d516bff5a47d31e429427118"],["/schedule/index.html","f9d963a378bba03a6d36f2d5be987582"],["/sw-register.js","a4c9b600bf865e953241735b13a6c6af"],["/tags/Codable-protocol/index.html","2ee82fd997756b7e138a1bb2cd8a9398"],["/tags/Collection/index.html","0b57e33541f21e10b7abe9cf661f6339"],["/tags/Collections/index.html","123a107f3d267ebaca696c859735c154"],["/tags/Combine-framework/index.html","33b5a2ce8e98eafa83170ced0ad0eb08"],["/tags/Dependency-Injection/index.html","63fc4c0bebba508c0e78357eb5d651e4"],["/tags/Grand-Central-Dispatch/index.html","cfcf56bef7c4f7bf60764afc09eda56c"],["/tags/Modules-And-Hooks/index.html","3692de054568a91fb90f00dbad65a956"],["/tags/Promises/index.html","80695728822f91136cfa2cc730192b06"],["/tags/Result-Type/index.html","a29a69e11d4303f3b907a767bf5514e7"],["/tags/Server/index.html","3f2d6f1785c8c8b414ae6249ba40eabe"],["/tags/Swift-Package-Manager/index.html","3d0739f116f09185c43dc0494bd77e81"],["/tags/Swift/index.html","c9e7e645a4a0e35e6910bbced92a4e15"],["/tags/Swift/page/2/index.html","f3eda4dd4ed5b59546054e1ba7837cb3"],["/tags/Swift/page/3/index.html","9aaa35416c76007ebf0653d68a952c28"],["/tags/Swift/page/4/index.html","4f4008fcefc6d066c4d40ce40b684d7b"],["/tags/Swift/page/5/index.html","7c32d2416dedb77553d596029dbf0ef1"],["/tags/Swift/page/6/index.html","28c53014611f82db6e292c91852b761b"],["/tags/Swift/page/7/index.html","ec389ff145dbf36f84322a93fb269b98"],["/tags/Swift/page/8/index.html","155716fcb25c5803804e6f5f5dd79839"],["/tags/SwiftUI/index.html","d8d08ae8ba069bcb4b39050df63ac3f1"],["/tags/UICollectionView/index.html","b2ef8c65966e29ee39e82b34adf4e78d"],["/tags/UIColor/index.html","e70510809fa2bb1cdf0c5f4e2e8cf8d7"],["/tags/UIImagePickerController/index.html","746b22303f6bc86ba087047198e9e9e8"],["/tags/UIKit/index.html","257b2a0d3426a3ecf2ad141688e97603"],["/tags/UIKit/page/2/index.html","aa1513de6e0bbb77841a80bfb1a9dde6"],["/tags/UIKit/page/3/index.html","747e86c6178b1b451a97a5f85240e26d"],["/tags/UIKit/page/4/index.html","83b1531c040c717ddd713278917081ca"],["/tags/UIKit/page/5/index.html","a16955206c858b9f997f941fb0db6347"],["/tags/UITableView/index.html","c0f8c9e904e5ce72c0ace427e497dce6"],["/tags/Ubuntu/index.html","c5986108c752814c080687feb489ff54"],["/tags/Uniquely-identifying-views/index.html","5dcbc37c811d4b30340b8641da31ea00"],["/tags/VIPER/index.html","cfb02c69c5f61c80052e3999dca5eefa"],["/tags/VMware/index.html","11f92cd4d8943dbef5625173acdbb6a1"],["/tags/Xcode/index.html","57daa149561270dff0dc9e02436c2c1e"],["/tags/appleOS-Networking/index.html","966c583d03cfcacf65ce0c473d6707d0"],["/tags/enum/index.html","09cb0ae43da05b622dd48f195b41911e"],["/tags/iCloud/index.html","c006999007bbed71e7385527511bd36c"],["/tags/iOS/index.html","6bb39c1b594d53242833b802d9e5a12e"],["/tags/iOS/page/2/index.html","a9ba39083299064487e05e5ad967ed0c"],["/tags/iOS/page/3/index.html","92a0bc752eb5d378452e207a6e64a658"],["/tags/iOS/page/4/index.html","4e2c8209ded28b83fa1a09936310a210"],["/tags/iOS/page/5/index.html","f5aea3993efbf3a6a7cd6c93e80f88d6"],["/tags/iOS/page/6/index.html","447f3af22216af10c1cc7f6a57554aa8"],["/tags/iOS/page/7/index.html","d5bd3fc4ce667f9f0d510f64ecc5138a"],["/tags/iOS/page/8/index.html","c37f73ce89d13e99242aac26db7db02c"],["/tags/index.html","3cee9febd421c636add4cc013ff06941"],["/tags/non-optional/index.html","7ddd15cf7ba00c986a92fa7d4bb6535b"],["/tags/optionals/index.html","203a9c4b16e4b7208035f73332981243"],["/tags/random/index.html","62f83854e7a0e3fa6cb303842d38bab2"],["/tags/transition/index.html","844ae83e210ebf78d7af1b77ed704b4c"],["/tags/三方类库/index.html","d7749d0d195cd4d53c12aecf369c7539"],["/tags/依赖注入设计模式/index.html","c42a518596f324e93f285bbb859050e7"],["/tags/函数式编程/index.html","b401289d673d1c585daa3e9fc9a34065"],["/tags/初始化模式/index.html","af87a721960399d689d5a25adc998046"],["/tags/单例模式/index.html","33dd61eb3bc6756627482a6195defe31"],["/tags/原型设计模式/index.html","e3935273138bd453b1bf75d369b7c927"],["/tags/命令设计模式/index.html","3e5cd6c30b57c0593a2eee5d9993823d"],["/tags/外观设计模式/index.html","0582c98952c197474b9d898902820b09"],["/tags/委托设计模式/index.html","57d7e3488244f03b6e5b725685fdb1c6"],["/tags/子类化样式/index.html","77ed275b2bd8bcba0c42863a3fd07a46"],["/tags/对象池设计模式/index.html","7dc689fe9db87d858587030f23d45c92"],["/tags/工厂方法设计模式/index.html","5bb78ec8a37c45f3f6760ee0237e1987"],["/tags/工厂模式/index.html","73f7b14ca60089247a5d428c0c7a3781"],["/tags/工厂设计模式/index.html","7e683f37a0ac9abdbfacf970cd6fe2a7"],["/tags/懒加载模式/index.html","fc67ad9c17a69a94e64f4ddd255308e3"],["/tags/抽象工厂设计模式/index.html","0894f8917683405000afcfab1885d005"],["/tags/构造函数/index.html","6b7417998b6aa29cdfde87756b9b68b5"],["/tags/架构设计/index.html","fed2c1b3d777edf31df464c03d3d63d3"],["/tags/生成器模式/index.html","f6b7902655884be4fa1af7f16c564168"],["/tags/用户体验/index.html","8484318ae5f8216b77a6abc7234e05ac"],["/tags/自动化布局/index.html","87194102efef46b1fc6f0dc52f72ff4e"],["/tags/自定义UIView/index.html","1481ca594052feaa1fc84e4c82a9acc7"],["/tags/自定义转场/index.html","bb01c1fb13f2fa1ded5e11c73d4312d2"],["/tags/自适应布局/index.html","08b31a48bd7b43c76bede7d53d0f3275"],["/tags/设计模式/index.html","b1aad3626580b4a227faaae097301d77"],["/tags/设计模式/page/2/index.html","d436976e9032e36a35c06dee42a1332a"],["/tags/设计模式/page/3/index.html","78e7259272e96483ba9e56bdebd2983f"],["/tags/迭代器设计模式/index.html","3fda6429da6430eacc5e5d663f9b2077"],["/tags/适配器设计模式/index.html","cff41ca62869f23caa474d5789700d01"],["/tags/静态工厂方法/index.html","6eca08294cd748a489280e19b9760305"],["/为iOS应用构建输入表单/index.html","e8da5a950b51de97f879b04658f92d8c"],["/产品开发的幕后花絮/index.html","efa74ae76e3b6c776b068d5a9c662e0d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","66dfdede0cf97ec65fa42061585b8bcc"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","fa64e53bb9a7a20612cec068b6e42579"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","2a7325e7881dd04dba036632cd15079f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","73b1822a4f4a37f62a19c83f34c9755b"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","597b6f71a76b7b5d17871380937b894b"],["/在Swift中创建自定义集合/index.html","28b27a130445fec92dd7f6eb343c40ec"],["/在Swift中处理非可选选项/index.html","5f69f24463f111eb0c7be25e0e362202"],["/在Swift中生成随机数/index.html","c4f30822b392b55436f35d2c9ea2403c"],["/在Swift中重构单例模式用法/index.html","1c728763048420ea082b68394c1a76c0"],["/如何为VIPER编写服务？/index.html","9e751faeacd314b1768af642d91ba9c5"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","15afd586952be308cb0f6395b591f531"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","32378f51ec426ea4ce86895d452d3964"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","f0997351a4d8ea19bcf49c22a3e53168"],["/如何使用VIPER构建SwiftUI Apps？/index.html","049d6568daa42bb0fed9f174d142fca8"],["/掌握VIPER架构/index.html","ae6d7975be90d99708d091a79e0b1c60"],["/揭秘 WordPress Hook 系统/index.html","1e99fb917aacec864f6103c7b98ec75e"],["/比较工厂设计模式/index.html","327b973083089015674582f826b7b345"],["/深入了解Swift中的Grand Central Dispatch/index.html","42598993d4d7a0c185c612707595657a"],["/深入研究Swift框架/index.html","bb15302279afbf292d21f6feb70c728f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","77b23a4d6b71dde2837f8a219054a891"],["/选择Swift而不是Objective-C的5个理由/index.html","84bec0c362ffb953793e450c973c9433"]];
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
