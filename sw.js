/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","5769795039470fe7ca46a9656b7450bc"],["/NSCODER和SWIFT初始化/index.html","530c26709769717cec3a2aefe13bdd1b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","59a18e5edbad52a539bebb126d887b10"],["/Swift CompactMap vs flatMap：差异说明/index.html","67f61b1b2d43195754af0a2e736d7422"],["/Swift Grand Central Dispatch 深入实践/index.html","25a80d9d66cb1263c55b5215de8898ae"],["/Swift Lazy属性初始化/index.html","26a973d26ee8a66ee5af2edaaa5bfe4e"],["/Swift Promises 初体验/index.html","7f29d426a094c620fe96aa5b13e79db0"],["/Swift Promises 探究/index.html","c0505713db1abb1c595024b2e534531f"],["/Swift UICollectionView使用指南/index.html","479acd2a565d1b4863eb56393e6abab5"],["/Swift URLSession && Combine framework/index.html","20e08b0a8f39bff9e21852d56e1e8c0c"],["/Swift 唯一识别的视图/index.html","88bdac94fd8df2ed60d0fb8f0b973a6c"],["/Swift 如何学习现代UIKit？/index.html","7d1a00066b1f8a4240b68336e797814b"],["/Swift 用 compactMap 替换 flatMap/index.html","48e6ca281d4ebffc9298ab1143d0a7cf"],["/Swift 选择和播放视频/index.html","294da1377a5e898939b53ecd919f45d6"],["/Swift中UIColor最佳实践/index.html","ea638ba1d48070f533ae5e57f66046a9"],["/Swift中快速简单的工厂设计模式/index.html","0506839e275f67fc97c9d8ea09fba5b0"],["/Swift中构造函数与静态工厂方法的比较/index.html","80cb9540be1e3c7d7a2be988c8eafec9"],["/Swift中的UITableView教程/index.html","2009e23052675bc759254456ea1f8ced"],["/Swift中的懒加载模式/index.html","30b382cd4550b54a32cff33b4ef06977"],["/Swift中的模块和挂钩/index.html","9b32e53b48d32edcc115be49f4284e19"],["/Swift使用布局锚点添加约束/index.html","fbd9094298287838a762b829b4261b1d"],["/Swift依赖注入设计模式/index.html","0ba0e980e7cf1300a4980e2d93ff55ac"],["/Swift关于Dependency Injection (DI)/index.html","cdca24d2f70d5182ab9bacca32426139"],["/Swift初始化模式/index.html","f20c006ba2424e72348a5b8f3213cb79"],["/Swift单例模式/index.html","e4eeac8b7a9d64f86c8d4a4cc32b758a"],["/Swift原型设计模式/index.html","2c57cd603089cf64e7d21a876b63a93a"],["/Swift命令设计模式/index.html","b69d62360e54db2b70d8ced01b3efa83"],["/Swift外观设计模式/index.html","0b7f4b28a2cf65b03fbc7c55d6651247"],["/Swift委托设计模式/index.html","905570c6f8024cd8752aa07c81c01abe"],["/Swift对象池设计模式/index.html","20e826e191b5068539c6c94766fe10bc"],["/Swift工厂方法设计模式/index.html","d1033229a7a4c0e3ba734ff48afae0df"],["/Swift带闭包的懒惰初始化/index.html","237d81b1f3a63100e75a8686224edab0"],["/Swift抽象工厂设计模式/index.html","7692dc32492aeca44e1c9432ea664095"],["/Swift掌握iOS自动布局锚点/index.html","a3384454aa62fc6fa045cd4db2910a5f"],["/Swift支持旋转的自适应单元格/index.html","f523b8fb2f2ce8b107f129e93e42fa05"],["/Swift枚举值/index.html","b7bb8d3e93ff53d217fe79eca53fd298"],["/Swift生成器模式/index.html","58ec8d23f6686d2a98115c128dd6d6d5"],["/Swift结合Xib文件自定义UIView/index.html","8f446e8c440be7e6e53931ec88ba3e55"],["/Swift编写的20个iOS库(一)/index.html","8f1bb6462b965c5c95bc52f6808afc3b"],["/Swift迭代器设计模式/index.html","9e8a9dd3fa31b7683b4be696871ef531"],["/Swift适配器设计模式/index.html","c976d9c8f313877d74d51f721bbf1e11"],["/Swift静态工厂设计模式/index.html","f694c2f1fc61e401f3e9d3b2d7ea5e5d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1ecc2acd40b7159a2ed6ae4ed19a37fa"],["/UICollectionView data source and delegates/index.html","4dc49a315aa715997231aa4a7ae76b10"],["/UIKit初始化模式/index.html","718b613287e7302f2d46c56a17fa77a8"],["/Ubuntu18.04替换国内源/index.html","8a0c3a56c53f7386c505347570fac3dd"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6dbc631d7ea2799401424ce2564e13a3"],["/Xcode扩展/index.html","ac483fa6185263e5cf229d9b371a9266"],["/about/index.html","8426dad6cc1ef6a0d3011dc7aa807d10"],["/appleOS的Networking示例/index.html","11c34d8062f11479200ceb0eb517db79"],["/archives/2020/04/index.html","227a09c797ff9fecd2027a23e527bb00"],["/archives/2020/04/page/2/index.html","d241ead69316d5c4f7a9d6ba85317a65"],["/archives/2020/04/page/3/index.html","13ceb63f1429358f3ed4e9b86c564cb6"],["/archives/2020/04/page/4/index.html","f67d132cc96b38fdaa32a6bb56f768d5"],["/archives/2020/04/page/5/index.html","51d47d3bb85bb8b5ac25e39b3df7ba5d"],["/archives/2020/04/page/6/index.html","a7b243918d0c4b287980e175628159b4"],["/archives/2020/04/page/7/index.html","9c6dd04636d06d30cbb8441338ad6098"],["/archives/2020/04/page/8/index.html","0238957ed7cf102e056764e54fbf48d0"],["/archives/2020/05/index.html","88dec97e5dbb0f6942231b96c0918947"],["/archives/2020/index.html","6cd32ffc50d1a9f0d63bbd4499497d00"],["/archives/2020/page/2/index.html","36916d9e7598c56989db6fa9584e4efb"],["/archives/2020/page/3/index.html","3551db1034ed820d8f973ce96a1a006a"],["/archives/2020/page/4/index.html","107b8ea77e9fe78952d1888999a0768d"],["/archives/2020/page/5/index.html","ff94b9e8234bebeccf63e3f6c5da3aa8"],["/archives/2020/page/6/index.html","17a72ea2fe8227784c60fd594013af51"],["/archives/2020/page/7/index.html","c950bf7a0a7a24c26d22983298ced1ab"],["/archives/2020/page/8/index.html","36b2f11977d4d2f50a4f58b5374ab176"],["/archives/index.html","2d626fd4e57a51b3d6a615b31f12eeee"],["/archives/page/2/index.html","a57d271a66bdb2c6fe803c469f8e8310"],["/archives/page/3/index.html","4ff2d3212f56e876a080a42d7f8698a7"],["/archives/page/4/index.html","d117bd21985a62ca85209d5936749375"],["/archives/page/5/index.html","a947c5ada98b36d493fbccaeff240814"],["/archives/page/6/index.html","ab651989cc3aeb5cb7db5e5497a331f1"],["/archives/page/7/index.html","2c6ed49d8cf0b1ab112ea545b5736184"],["/archives/page/8/index.html","c89f2b2a22f5ac3d34eacc7cfcca6dc0"],["/categories/Codable-protocol/index.html","ac2ba19d58923282800e08dacaacd0fe"],["/categories/Combine-framework/index.html","6b96c0d5a7a6e268619f3b133abae8fe"],["/categories/Grand-Central-Dispatch/index.html","fc7aef798d6bcdb52a1858ebdf088587"],["/categories/Hexo/index.html","132a27bcbfc662e9a9af5290d14f1cd9"],["/categories/Promises/index.html","5ac1d33adaf84d4c4f6814b4ffedf26b"],["/categories/Result-Type/index.html","845ebb1ca99fa8d08ba1e0d6e238c9e7"],["/categories/Server/index.html","a91b37e76025bb0c01bf3fa949fc9826"],["/categories/Swift/index.html","40ecf2bc25b2ed8371bad1fad1192cd2"],["/categories/Swift/page/2/index.html","62ef3d49db7f77f9c3e2667cce765aed"],["/categories/Swift/page/3/index.html","27b96f0a1f1ac8380016ceeb984b6285"],["/categories/Swift/page/4/index.html","70e8f01a99148dcc5327289e50bda288"],["/categories/Swift/page/5/index.html","b88ba9637e3ba157e5e3b8f3520d89b4"],["/categories/Swift/page/6/index.html","697902afb111547a3ce950e971bc236c"],["/categories/Swift/page/7/index.html","d48953bf180b8f036109aefdf01e31f9"],["/categories/Swift/page/8/index.html","818415ccff4963e7334459b41dd402ff"],["/categories/Swift5-2/index.html","e73342b94f9400c7b93504b0d1b44d33"],["/categories/SwiftUI/index.html","4fd5cf5e54015bde47ded8e3769cdaae"],["/categories/UICollectionView/index.html","277e5b9a31430962e76328130fd2ec32"],["/categories/UIImagePickerController/index.html","a8c9ce68585b3790a4c1a009a1386972"],["/categories/UIKit/index.html","5e275f952c9c581ab1261804fadb7e8b"],["/categories/UIKit/page/2/index.html","fe69d395911f364f472137df78e25461"],["/categories/UIKit/page/3/index.html","694b73fbff715cf6a6246ff64bbc6b6f"],["/categories/UIKit/page/4/index.html","8001065a6a2c76ab54d2dfa1e25fef25"],["/categories/UIKit/page/5/index.html","7c9357c217a4473d1650f9744ace13d7"],["/categories/UITableView/index.html","2287c9103019b8563a85f26b8d87d58b"],["/categories/Ubuntu18-04/index.html","64cd3935ab8593d6f669037231cf2572"],["/categories/Ubuntu软件源/index.html","86824234ac9ec4095cf112bc9d5ba9de"],["/categories/Uniquely-identifying-views/index.html","925cbccd865423c6d3ad4a624f438a10"],["/categories/VIPER/index.html","1abf4ce6de8ebb60243529bc31ed5795"],["/categories/Vapor4-0/index.html","16a4db03155dbd7a2afd63ef7fa945d7"],["/categories/Xcode/index.html","15f9fea6c90f1f20e4a7b4c996e05c11"],["/categories/appleOS-Networking/index.html","8b93bdbd28d4af1028479218ed4a46c9"],["/categories/enum/index.html","394551f14510af18a02b40a6241ab750"],["/categories/iCloud/index.html","ef3ddfe83724906ae1ca7bcfa28f40b9"],["/categories/iOS/index.html","a9e3ade00fd9634b0038ad61772dc047"],["/categories/iOS/page/2/index.html","804d387b20fa11a800137bb87d701203"],["/categories/iOS/page/3/index.html","d047aec6ddce01dd2eb06af1ea4b4b2b"],["/categories/iOS/page/4/index.html","4e076570ed4e6bff843ea15a230734cb"],["/categories/iOS/page/5/index.html","b194fa5f256babce36465999faea3bf6"],["/categories/iOS/page/6/index.html","7bd755a02a35387bf86080d1542f14b9"],["/categories/iOS/page/7/index.html","822e2758cbc08c833881fa1136356b0c"],["/categories/iOS/page/8/index.html","abe9d54f02c85182b9420d3b1290580e"],["/categories/index.html","a1d6e2ff2c35174290567ed165af00d2"],["/categories/random/index.html","4b2e87a3b850a341adf9fcbc53ab7c21"],["/categories/三方类库/index.html","bb2de26194ed0cef66b93b17b2624ac9"],["/categories/函数式编程/index.html","713b5dcf8bfce0ad78047f542be350ad"],["/categories/子类化样式/index.html","c571a93d82b6c7e3a1742a74839d3165"],["/categories/架构设计/index.html","a8f3a58d7c2d7e0bc83a822d59e2b104"],["/categories/用户体验/index.html","0c58598b5cbbe50a833f1d208385c6db"],["/categories/设计模式/index.html","c53ab2f70b7e8a0be56747fc21fb94b3"],["/categories/设计模式/page/2/index.html","d6d4499734f75f42a9fb8cbf2bb4348d"],["/categories/设计模式/page/3/index.html","c5df53af8d30fe3f486efcaeef513bc2"],["/css/main.css","ebad4d1dd55a2c84c229160a8fa63284"],["/hello-world/index.html","ed3c2acc58409ace2875e91f90c565a7"],["/iOS VIPER架构深入实践/index.html","ea6d159a1e27ad156c8f07f4a01e30ac"],["/iOS 自定义视图，输入表单和错误提示/index.html","9ec4b187cfc21e3ad1de6860ea750bac"],["/iOS如何使用iCloud文档？/index.html","45b062a9b63f3eb822d6f5ec93ee6edb"],["/iOS子类化样式/index.html","f86e6c40d8c365d8f0d9d57950c66b5f"],["/iOS自动化布局编程/index.html","6b519bc627a698081374cc779e79266f"],["/iOS自定义转场(By Swift)/index.html","79cec2400bec6c4f431efeac06389351"],["/iOS项目架构：使用VIPER/index.html","002cf5a0d715c19c7c6cd09850a8ed71"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a6863ae3145a0750fabfc2ca30b3a2cb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d1cbdacc540329ff2cea22532116e168"],["/page/3/index.html","215cd0a3adb87a66802031d4ad72cd14"],["/page/4/index.html","3321e045856cddd0372953e4f46d59e3"],["/page/5/index.html","3dc4507ece0477f86410c5edb24775cb"],["/page/6/index.html","66eb0722a5bf24251f2a3c9cf8886bde"],["/page/7/index.html","10a5a81246658d6d8e90f43c85fd849a"],["/page/8/index.html","20cf11d6d516bff5a47d31e429427118"],["/schedule/index.html","f9d963a378bba03a6d36f2d5be987582"],["/sw-register.js","913ab72aa2befbd9d9219a12ce53246a"],["/tags/Codable-protocol/index.html","2ee82fd997756b7e138a1bb2cd8a9398"],["/tags/Collection/index.html","0b57e33541f21e10b7abe9cf661f6339"],["/tags/Collections/index.html","123a107f3d267ebaca696c859735c154"],["/tags/Combine-framework/index.html","33b5a2ce8e98eafa83170ced0ad0eb08"],["/tags/Dependency-Injection/index.html","63fc4c0bebba508c0e78357eb5d651e4"],["/tags/Grand-Central-Dispatch/index.html","cfcf56bef7c4f7bf60764afc09eda56c"],["/tags/Modules-And-Hooks/index.html","3692de054568a91fb90f00dbad65a956"],["/tags/Promises/index.html","80695728822f91136cfa2cc730192b06"],["/tags/Result-Type/index.html","a29a69e11d4303f3b907a767bf5514e7"],["/tags/Server/index.html","3f2d6f1785c8c8b414ae6249ba40eabe"],["/tags/Swift-Package-Manager/index.html","3d0739f116f09185c43dc0494bd77e81"],["/tags/Swift/index.html","c9e7e645a4a0e35e6910bbced92a4e15"],["/tags/Swift/page/2/index.html","f3eda4dd4ed5b59546054e1ba7837cb3"],["/tags/Swift/page/3/index.html","9aaa35416c76007ebf0653d68a952c28"],["/tags/Swift/page/4/index.html","4f4008fcefc6d066c4d40ce40b684d7b"],["/tags/Swift/page/5/index.html","7c32d2416dedb77553d596029dbf0ef1"],["/tags/Swift/page/6/index.html","28c53014611f82db6e292c91852b761b"],["/tags/Swift/page/7/index.html","ec389ff145dbf36f84322a93fb269b98"],["/tags/Swift/page/8/index.html","155716fcb25c5803804e6f5f5dd79839"],["/tags/SwiftUI/index.html","d8d08ae8ba069bcb4b39050df63ac3f1"],["/tags/UICollectionView/index.html","b2ef8c65966e29ee39e82b34adf4e78d"],["/tags/UIColor/index.html","e70510809fa2bb1cdf0c5f4e2e8cf8d7"],["/tags/UIImagePickerController/index.html","746b22303f6bc86ba087047198e9e9e8"],["/tags/UIKit/index.html","257b2a0d3426a3ecf2ad141688e97603"],["/tags/UIKit/page/2/index.html","aa1513de6e0bbb77841a80bfb1a9dde6"],["/tags/UIKit/page/3/index.html","747e86c6178b1b451a97a5f85240e26d"],["/tags/UIKit/page/4/index.html","83b1531c040c717ddd713278917081ca"],["/tags/UIKit/page/5/index.html","a16955206c858b9f997f941fb0db6347"],["/tags/UITableView/index.html","c0f8c9e904e5ce72c0ace427e497dce6"],["/tags/Ubuntu/index.html","c5986108c752814c080687feb489ff54"],["/tags/Uniquely-identifying-views/index.html","5dcbc37c811d4b30340b8641da31ea00"],["/tags/VIPER/index.html","cfb02c69c5f61c80052e3999dca5eefa"],["/tags/VMware/index.html","11f92cd4d8943dbef5625173acdbb6a1"],["/tags/Xcode/index.html","57daa149561270dff0dc9e02436c2c1e"],["/tags/appleOS-Networking/index.html","966c583d03cfcacf65ce0c473d6707d0"],["/tags/enum/index.html","09cb0ae43da05b622dd48f195b41911e"],["/tags/iCloud/index.html","c006999007bbed71e7385527511bd36c"],["/tags/iOS/index.html","6bb39c1b594d53242833b802d9e5a12e"],["/tags/iOS/page/2/index.html","a9ba39083299064487e05e5ad967ed0c"],["/tags/iOS/page/3/index.html","92a0bc752eb5d378452e207a6e64a658"],["/tags/iOS/page/4/index.html","4e2c8209ded28b83fa1a09936310a210"],["/tags/iOS/page/5/index.html","f5aea3993efbf3a6a7cd6c93e80f88d6"],["/tags/iOS/page/6/index.html","447f3af22216af10c1cc7f6a57554aa8"],["/tags/iOS/page/7/index.html","d5bd3fc4ce667f9f0d510f64ecc5138a"],["/tags/iOS/page/8/index.html","c37f73ce89d13e99242aac26db7db02c"],["/tags/index.html","3cee9febd421c636add4cc013ff06941"],["/tags/non-optional/index.html","7ddd15cf7ba00c986a92fa7d4bb6535b"],["/tags/optionals/index.html","203a9c4b16e4b7208035f73332981243"],["/tags/random/index.html","62f83854e7a0e3fa6cb303842d38bab2"],["/tags/transition/index.html","844ae83e210ebf78d7af1b77ed704b4c"],["/tags/三方类库/index.html","d7749d0d195cd4d53c12aecf369c7539"],["/tags/依赖注入设计模式/index.html","c42a518596f324e93f285bbb859050e7"],["/tags/函数式编程/index.html","b401289d673d1c585daa3e9fc9a34065"],["/tags/初始化模式/index.html","af87a721960399d689d5a25adc998046"],["/tags/单例模式/index.html","33dd61eb3bc6756627482a6195defe31"],["/tags/原型设计模式/index.html","e3935273138bd453b1bf75d369b7c927"],["/tags/命令设计模式/index.html","3e5cd6c30b57c0593a2eee5d9993823d"],["/tags/外观设计模式/index.html","0582c98952c197474b9d898902820b09"],["/tags/委托设计模式/index.html","57d7e3488244f03b6e5b725685fdb1c6"],["/tags/子类化样式/index.html","77ed275b2bd8bcba0c42863a3fd07a46"],["/tags/对象池设计模式/index.html","7dc689fe9db87d858587030f23d45c92"],["/tags/工厂方法设计模式/index.html","5bb78ec8a37c45f3f6760ee0237e1987"],["/tags/工厂模式/index.html","73f7b14ca60089247a5d428c0c7a3781"],["/tags/工厂设计模式/index.html","7e683f37a0ac9abdbfacf970cd6fe2a7"],["/tags/懒加载模式/index.html","fc67ad9c17a69a94e64f4ddd255308e3"],["/tags/抽象工厂设计模式/index.html","0894f8917683405000afcfab1885d005"],["/tags/构造函数/index.html","6b7417998b6aa29cdfde87756b9b68b5"],["/tags/架构设计/index.html","fed2c1b3d777edf31df464c03d3d63d3"],["/tags/生成器模式/index.html","f6b7902655884be4fa1af7f16c564168"],["/tags/用户体验/index.html","8484318ae5f8216b77a6abc7234e05ac"],["/tags/自动化布局/index.html","87194102efef46b1fc6f0dc52f72ff4e"],["/tags/自定义UIView/index.html","1481ca594052feaa1fc84e4c82a9acc7"],["/tags/自定义转场/index.html","bb01c1fb13f2fa1ded5e11c73d4312d2"],["/tags/自适应布局/index.html","08b31a48bd7b43c76bede7d53d0f3275"],["/tags/设计模式/index.html","b1aad3626580b4a227faaae097301d77"],["/tags/设计模式/page/2/index.html","d436976e9032e36a35c06dee42a1332a"],["/tags/设计模式/page/3/index.html","78e7259272e96483ba9e56bdebd2983f"],["/tags/迭代器设计模式/index.html","3fda6429da6430eacc5e5d663f9b2077"],["/tags/适配器设计模式/index.html","cff41ca62869f23caa474d5789700d01"],["/tags/静态工厂方法/index.html","6eca08294cd748a489280e19b9760305"],["/为iOS应用构建输入表单/index.html","b787dcd43a3d3361d7820500b3a20852"],["/产品开发的幕后花絮/index.html","9a804ed0b594ca180d2c6fb1e73f4bdd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5dcb73cf23aeab2bad72e59d7b1443e5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9d3da7874f3f024dc30d8cfe8d7f2278"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c8bc23a4aef4cc3b866f15e756965e39"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a92b81e1356ebf5bccf01a04a70a3ae5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","26bd8d7d7d984085026f2120b3b6e39e"],["/在Swift中创建自定义集合/index.html","1683b994612d98d734670d4066f3c275"],["/在Swift中处理非可选选项/index.html","523e4be3a529ff21dda8b4ab39dd7a53"],["/在Swift中生成随机数/index.html","10506543483f371c857dc38e7b9a9b40"],["/在Swift中重构单例模式用法/index.html","6baeac05b3a5447965c9d57825459081"],["/如何为VIPER编写服务？/index.html","6e8fec8fde614560978b22d03bebe351"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","810d5eb1d694d26b8623325539faf425"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8f2abc1ce0159cbd1a8b120112f35605"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","310d5e6881301083211af88c375dc31f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c7d7644566b846fc8da95c4eec08f6a2"],["/掌握VIPER架构/index.html","a2d742492320655ce2647ea5cdac97bf"],["/揭秘 WordPress Hook 系统/index.html","726f86b55ba67cb9ff8ca558dfa71dfe"],["/比较工厂设计模式/index.html","5e545ec0dcc447c63f5539b5e751fde9"],["/深入了解Swift中的Grand Central Dispatch/index.html","3be7d5bb538c44188f72c5ba61a0bad7"],["/深入研究Swift框架/index.html","8f678e9dd1c44b42100a0f954b8ea11b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c7a4024a1ab2ffd3cc3f2f9171bfed11"],["/选择Swift而不是Objective-C的5个理由/index.html","1a9fa2b326d67d38c1b3fbf524e2f51f"]];
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
