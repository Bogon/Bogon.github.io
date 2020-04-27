/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/NSCODER和SWIFT初始化/index.html","29143a52e1b6b221acdc6d79e8949d2b"],["/Swift Lazy属性初始化/index.html","10faea06de2e7857d2b2be81d7f06864"],["/Swift UICollectionView使用指南/index.html","e27fabc052c986c8eab0afbca4004df5"],["/Swift中快速简单的工厂设计模式/index.html","2e85db338d1fd31c406152e025c52adb"],["/Swift中构造函数与静态工厂方法的比较/index.html","a7f333a85c5dcc99b33a82879b95b436"],["/Swift中的懒加载模式/index.html","741d65d7ab04f0bd6583e020f9449131"],["/Swift中的模块和挂钩/index.html","292807abe94e2e5dcec2f699487f04f1"],["/Swift使用布局锚点添加约束/index.html","23bb24e64b3678d69c973c4076043a86"],["/Swift依赖注入设计模式/index.html","6b4a699ddf3338a2a706c3249fd141f9"],["/Swift关于Dependency Injection (DI)/index.html","852a64745164a2c46d01a96c59fb9ae0"],["/Swift初始化模式/index.html","ed616e74b9ffc53122f6ee84f69090d2"],["/Swift单例模式/index.html","f04a780e12b47ad37380e3ad56e4206f"],["/Swift原型设计模式/index.html","62743e759a46f27bebcab91cba0750c7"],["/Swift命令设计模式/index.html","4e3f7f2f3283391cf399f97c26d4949d"],["/Swift外观设计模式/index.html","1e4f8c034d7cd76eb60b3ce4b085bc9d"],["/Swift委托设计模式/index.html","f08e51ed3a5e6675608eda69639b7296"],["/Swift对象池设计模式/index.html","7c640974463f6ef21a3f9883ac50d27c"],["/Swift工厂方法设计模式/index.html","ae6f2557881a289c40382d803140e533"],["/Swift带闭包的懒惰初始化/index.html","7ee74f839cb1d7cb7dcc5e872cdd8681"],["/Swift抽象工厂设计模式/index.html","daace76b3407d5911079188cf9acbd0b"],["/Swift掌握iOS自动布局锚点/index.html","ad01166834776f19875f632590cd4090"],["/Swift支持旋转的自适应单元格/index.html","9aa9fa00c8caa28f871aaff799407c94"],["/Swift生成器模式/index.html","35c378e100fe893aa561d949b75d83aa"],["/Swift迭代器设计模式/index.html","5e461e6df06d3fc08df4de54c7bd3217"],["/Swift适配器设计模式/index.html","585140f41adbfbd67eda1b81d8f5b616"],["/Swift静态工厂设计模式/index.html","f2c4a8ea42f47411793a02f98cbd7bd8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","301feeb4f8c650d3be0b12b7c2b2b099"],["/UIKit初始化模式/index.html","c51f6831e81436b2e7544f89559a0681"],["/Ubuntu18.04替换国内源/index.html","d683fa20db25cdf0a079ea40f1943851"],["/about/index.html","9f0897a0f7c62047a4f0a9744502260e"],["/archives/2020/04/index.html","b43342511cc9481f9eb358df89c8bea5"],["/archives/2020/04/page/2/index.html","371fa59940abc9e508f8576c293758df"],["/archives/2020/04/page/3/index.html","fffeff718b80972b621eb02f8fe28b21"],["/archives/2020/04/page/4/index.html","67c4e71bfd94642f40f306364f4115a2"],["/archives/2020/04/page/5/index.html","41089e49bfc64fa9040de70f6f52bc62"],["/archives/2020/index.html","c30bceb3745a86a642a600d7e2ecfc3e"],["/archives/2020/page/2/index.html","0b9ef7c2a300f735eb83729387e3d48a"],["/archives/2020/page/3/index.html","e9062d850ae78c4a834bc002d4b854ba"],["/archives/2020/page/4/index.html","17c27fce137f6bdcc201137a57da3ade"],["/archives/2020/page/5/index.html","c5bb7384ab99b22615c3985ebdaa0ade"],["/archives/index.html","bc66140ae54d54ffa5e13c681efd209a"],["/archives/page/2/index.html","038b8d0788c19eea4deae5cd9b69fb0f"],["/archives/page/3/index.html","1b9160fafe133476e6ac02bdee51b682"],["/archives/page/4/index.html","6b0b3d30bf9bb312b677dc172289eb14"],["/archives/page/5/index.html","f10efd423a379f9e39af41798342c9de"],["/categories/Hexo/index.html","f59000d3a71cda7d41fc92d783ded014"],["/categories/Server/index.html","0db6d88ae3c9ff14089f423a8df0db56"],["/categories/Swift/index.html","4f2f6e9e5e88f7d1093ca457bae8f327"],["/categories/Swift/page/2/index.html","bab1328ff1138cd7a7d6eb1cd195d840"],["/categories/Swift/page/3/index.html","b7d81ed0a22edd78aae386c2c15d2809"],["/categories/Swift/page/4/index.html","8475a17869eaa8d0766917ecd366e31b"],["/categories/Swift5-2/index.html","259493800db6dda7134dcfdd357bb500"],["/categories/UIKit/index.html","a87db541caeaab0fd0fc70e13d6dcd79"],["/categories/UIKit/page/2/index.html","d17a32a694bd71f301f3e3f30c9cb826"],["/categories/UIKit/page/3/index.html","d33e0d8ff4949f58057dc47f49ab10e1"],["/categories/UIKit/page/4/index.html","46f3a81f7580505fa001d016b4a12a4b"],["/categories/Ubuntu18-04/index.html","0f3dad1213db31be93cb2cb110c12051"],["/categories/Ubuntu软件源/index.html","e85c711a43bf3ac70120a1d1d90ba62d"],["/categories/Vapor4-0/index.html","e54eff5ee93f07af3ae0bf2a8c3e4561"],["/categories/iOS/index.html","d8aa6152455196744db94ed6a528d50b"],["/categories/iOS/page/2/index.html","fc7245452f7512bff3e1164809853708"],["/categories/iOS/page/3/index.html","25cbb8778cd7ab81959051623dfee3ed"],["/categories/iOS/page/4/index.html","e2beb0031dd73bc6cbc100658d87e50a"],["/categories/index.html","4acd0382112326ab5e93eb9b1e360826"],["/categories/用户体验/index.html","808c018581d83f1eeb1e225d49c25241"],["/categories/设计模式/index.html","6cf8710b32fc1b1bfe476f7a552b0695"],["/categories/设计模式/page/2/index.html","d9eb50c4e1507d384a1df1f5cd64e725"],["/categories/设计模式/page/3/index.html","38bd60a859d6d8a793e0570d108bfccc"],["/css/main.css","f2b757763e0026f029bcca250ad95f2e"],["/hello-world/index.html","4bfdc1b93c8577fcdcba007dba90031f"],["/iOS自动化布局编程/index.html","c6e4bd555dc54710d49b78e018fcf371"],["/iOS自定义转场(By Swift)/index.html","a6f7d8059b9271a4426478269fbb39ee"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beian.png","064fbf70630f1cfc3dc8361ae800186d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a745dbfe8ec86350f031e435664d1a3b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","dc59d7d960a113aba2b60e9c5a8cc222"],["/page/3/index.html","5cfabcf9caf13023f547785eb6e753e6"],["/page/4/index.html","c617b44d34f3da3aba613ef40d0d4cee"],["/page/5/index.html","a02942fbc134d991b2acfe48da383533"],["/schedule/index.html","293aa2a60d0c154c80d40bd6fbfed098"],["/sw-register.js","f14046a58577e95f788e20c72433dc15"],["/tags/Collection/index.html","8c42980a6af2a9608f47100d797b2de0"],["/tags/Collections/index.html","19c3b1301630835bf02b72b7788d16c2"],["/tags/Dependency-Injection/index.html","dd758b65f8399ba9b9a22310a1348819"],["/tags/Modules-And-Hooks/index.html","a12468ff2dacdf342c739e036fce3684"],["/tags/Server/index.html","7c0299deb1b57662b323b05279b3cc01"],["/tags/Swift/index.html","ccee0ce9b7ed4eb8820eae62902de333"],["/tags/Swift/page/2/index.html","e159eb7257f945c4c3b0f08c2c87a0e1"],["/tags/Swift/page/3/index.html","93e5374cd5ac6d9530b0efdfaacb1e1e"],["/tags/Swift/page/4/index.html","60eb37dc50926ec062c5025db12eedd8"],["/tags/UICollectionView/index.html","3cdf91b24e7c6fb28babe325e62c17e8"],["/tags/UIKit/index.html","162eec351e3cf60074b4cd285eb7bfe8"],["/tags/UIKit/page/2/index.html","3b67de814d63d36dbc29614c467e5598"],["/tags/UIKit/page/3/index.html","760dda9cd51a6f91c2a8434844f10c75"],["/tags/UIKit/page/4/index.html","d0d60be47e0f42fd8d15e2d4f31ba858"],["/tags/UITableView/index.html","1d7d8446469228654d6d2a0dfae12ff1"],["/tags/Ubuntu/index.html","2cece4eb2e53e0cdbdc78a493420a94c"],["/tags/VMware/index.html","8a06bad451043c53cb79ee20d6b3bf1e"],["/tags/iOS/index.html","65cdae527950e0a138855fe0597547f3"],["/tags/iOS/page/2/index.html","bf8fa951b76b324e19ba492d0b9f5a89"],["/tags/iOS/page/3/index.html","44c35cbcecb3e5e1c66ff8e7ef5d5291"],["/tags/iOS/page/4/index.html","4c5b4d39537ea833d08c52756faf3b8d"],["/tags/index.html","b52ba7a2a8578c485e5bf703cef58ae6"],["/tags/non-optional/index.html","4c4393bc6867992a3b2240017e5448b8"],["/tags/optionals/index.html","a508ae67223c459c0018bbb2e6f8ffcd"],["/tags/transition/index.html","89ee4cf3e9a21393c1356a63cdb7ea65"],["/tags/依赖注入设计模式/index.html","a795d1aa207af9d3ffe24de9dff16f92"],["/tags/初始化模式/index.html","c435fd1cc2efe37b6bd2be736e48a1e0"],["/tags/单例模式/index.html","d8272b62952183d9f92963c05dc2520e"],["/tags/原型设计模式/index.html","a7b37b0b46da011e27d78d092ff48f61"],["/tags/命令设计模式/index.html","5668c71b586fd308e9a481ad1e5c65f0"],["/tags/外观设计模式/index.html","00f6d8900a2a94629e06613e511be68d"],["/tags/委托设计模式/index.html","8328ed50941be7cf93ee746262184db8"],["/tags/对象池设计模式/index.html","7b4999096f22f27dd1bde140af612924"],["/tags/工厂方法设计模式/index.html","021c6a819a5d9b1d52892859316eefc0"],["/tags/工厂模式/index.html","9f582d735e197eb73f02b589a281f979"],["/tags/工厂设计模式/index.html","3346f1a66209f0ca72e55d976505f4bb"],["/tags/懒加载模式/index.html","44c51d6cd72149f246dbcf115d67d3e0"],["/tags/抽象工厂设计模式/index.html","00890993380a8b172ed8d18ddb2dd892"],["/tags/构造函数/index.html","ca6de5837c844bb9c3dc285cbe61ad4d"],["/tags/生成器模式/index.html","51006b8b4c36de5ed0004bd4a1d66eef"],["/tags/用户体验/index.html","8086994470d0205dbc5c1204690931fd"],["/tags/自动化布局/index.html","c430de25e4c35745af0e84dc8b9b2ca4"],["/tags/自定义转场/index.html","c72bdf9ca9d2ac5de4518b152302a063"],["/tags/自适应布局/index.html","6993048de72ce9d5fa54f8c0689253f8"],["/tags/设计模式/index.html","801d1ea5d99321442d4e3f9572f719d8"],["/tags/设计模式/page/2/index.html","6b357dcc8837d49ed4199420292e9239"],["/tags/设计模式/page/3/index.html","6392c09f286156da67f673977a45ad7b"],["/tags/迭代器设计模式/index.html","2bc080c8014c6dfa259cec9a28cc50f3"],["/tags/适配器设计模式/index.html","48971ed4c73d0c131f8b1170c9f5d837"],["/tags/静态工厂方法/index.html","cec0f497f7b3009d7860a02607a57f49"],["/产品开发的幕后花絮/index.html","941d7bea159a317026ad83436b7df194"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5debacf70990c941a942d00acc785878"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","c2b6758bbd211d2dfd30280ad6513574"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","33c815b52d47868e3ff00ffe449a051d"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5aae3624a5c597cd0fcbe60d7c7d71c8"],["/在Swift中创建自定义集合/index.html","7504a83cb7fca530a79cee3852936f2a"],["/在Swift中处理非可选选项/index.html","e29930e6a5b3b7c896701fde20162246"],["/在Swift中重构单例模式用法/index.html","f9f164e0c5410324e26d406af54c2805"],["/揭秘 WordPress Hook 系统/index.html","61a1747f1b8b3e4ba06ee7366f003106"],["/比较工厂设计模式/index.html","a98a4d21a59b3cbafe389857214f03cd"]];
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
