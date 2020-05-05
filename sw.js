/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d82a4ce5758f33f80940a4f37e47c9e7"],["/Advanced Swift系列(一): Swift 简介/index.html","59fddf76021a5944e00a531da7e43330"],["/Advanced Swift系列(三):  Optionals/index.html","70c5f7756052db324c09d35223e6ce6d"],["/Advanced Swift系列(二): Build-in Collections/index.html","e7524becaee284270cde4c9b8957567f"],["/Functional Swift 初探/index.html","6aec9a4f7a5c467d79bd5d64ea53f6f2"],["/NSCODER和SWIFT初始化/index.html","55b1c31621f487c0cb07bc2f87133999"],["/Swift 5使用UIImagePickerController拾取图像/index.html","660f747b3cfedf5c5f694dc9cae3bef4"],["/Swift CompactMap vs flatMap：差异说明/index.html","40a0674af8c08b4d1525fe35aa52c878"],["/Swift Grand Central Dispatch 深入实践/index.html","6dbba059fedfd2c84e85dd9ba4fb47c2"],["/Swift Lazy属性初始化/index.html","27f39ef23c1163ce5db0f44670bd8439"],["/Swift Promises 初体验/index.html","513c456df43cc498cb80cb9f6e28270f"],["/Swift Promises 探究/index.html","d35caf201de3f64bfdce5dc10a0e43c4"],["/Swift UICollectionView使用指南/index.html","51560e6695ccc237fb2fbe21fbb89361"],["/Swift URLSession 和 Combine framework/index.html","81fd30875108fcd4df50253e4aacc850"],["/Swift 唯一识别的视图/index.html","ff1b72c9cc4a50a56ee49abc01b8b13d"],["/Swift 如何学习现代UIKit？/index.html","cb26e055dce727877098557472156b21"],["/Swift 用 compactMap 替换 flatMap/index.html","73302581bd4afeea2728bba3b6f198bf"],["/Swift 选择和播放视频/index.html","92084d7b603071c91358250e3bf4b870"],["/Swift中UIColor最佳实践/index.html","74fb2d78ddce883f85ce717a052a79c1"],["/Swift中快速简单的工厂设计模式/index.html","b333cfc94c0f25b18cd62560a699ea3b"],["/Swift中构造函数与静态工厂方法的比较/index.html","a16d50698aa7a9a9fae73ff7aae25c94"],["/Swift中的UITableView教程/index.html","d33189bb826a2cf2f5a7a5888dedb526"],["/Swift中的懒加载模式/index.html","7fbdfa00e4d4723ea3c658210a36aa80"],["/Swift中的模块和挂钩/index.html","b8bae5935d5832dc3134611b332005a3"],["/Swift使用布局锚点添加约束/index.html","8f844a8cc2aff672a577eff26db420f1"],["/Swift依赖注入设计模式/index.html","5dd9bb5e0ab5ac93424640547785cb93"],["/Swift关于Dependency Injection (DI)/index.html","67d6ae7accb5c989f8eeb65539ab3895"],["/Swift初始化模式/index.html","7b6137faeb4afbec0ddd0449e6d78382"],["/Swift单例模式/index.html","f9de0ac12e581dd597331fe7319ffdbd"],["/Swift原型设计模式/index.html","59041dc2be768f51ed81a6828632966e"],["/Swift命令设计模式/index.html","98fa4fe847312bd9cc46ce08d2b0a20f"],["/Swift外观设计模式/index.html","51e87c4ea160668246f252b351fae5d7"],["/Swift委托设计模式/index.html","d8215d3fa1231cdc817d1155ec207063"],["/Swift对象池设计模式/index.html","092e179ae75a7b3de3467db00639425a"],["/Swift工厂方法设计模式/index.html","6b5c4d908c54684ade5fcf9398d3d8e9"],["/Swift带闭包的懒惰初始化/index.html","f62dba0b19df74991d561eda017fdc17"],["/Swift抽象工厂设计模式/index.html","ef6c4ae4546c8b34ea4861a66e74257c"],["/Swift掌握iOS自动布局锚点/index.html","018b213304eec3ab1065489e4cc0058c"],["/Swift支持旋转的自适应单元格/index.html","21237b4f9bb0cbd1929b8ad8e4ade9df"],["/Swift枚举值/index.html","dc791621eaa8716c279b6b74a2e751c9"],["/Swift生成器模式/index.html","c8030e338d99050e0e6f8ba6a526f875"],["/Swift结合Xib文件自定义UIView/index.html","6b9544c49a2e68c631d716be399301eb"],["/Swift编写的20个iOS库(一)/index.html","4711ab3f166483da221ad3b77f71a845"],["/Swift迭代器设计模式/index.html","6b39011c076dce18c622e65bc6aea34c"],["/Swift适配器设计模式/index.html","6472c6f85f4fe2012e2465113445719c"],["/Swift静态工厂设计模式/index.html","168d187b4aea875a3fe282c979b1afd7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","7e9ceccd988ee98075314e00ecf4285e"],["/UICollectionView data source and delegates/index.html","08009202cc1c9dd5002183597b4c007f"],["/UIKit初始化模式/index.html","f8358753b57b0ba131df2c8759f57a76"],["/Ubuntu18.04替换国内源/index.html","88d19d8d6d9003e63ca72c7e0a6bdace"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","72a7d86becdcf626ec02564cfad5ee17"],["/Xcode扩展/index.html","6ab8d502210179b9f5f3efa9bbcbdfd4"],["/about/index.html","912354524eaf59453798a20d3e74d3be"],["/appleOS的Networking示例/index.html","6e5457a734a45a23f84eb78976106f0b"],["/archives/2020/04/index.html","162ed3a789f5ea7dbda4592d5edf145a"],["/archives/2020/04/page/2/index.html","e6c018310b8f2d36d5fdcace94eab6e9"],["/archives/2020/04/page/3/index.html","65dc00a9982d85c5718b05e4007a3730"],["/archives/2020/04/page/4/index.html","b0cce3c354b1defba27c45e661371140"],["/archives/2020/04/page/5/index.html","ae20a747635cdee91c2ee29278c202fe"],["/archives/2020/04/page/6/index.html","7746419c527346e9fc7d2ac9e47d53a7"],["/archives/2020/04/page/7/index.html","646f8e9a0c9a4840f15f1c7aeb98d05c"],["/archives/2020/04/page/8/index.html","1c4f2499ee49571e8496692b76855eb7"],["/archives/2020/05/index.html","e7aa9e0fd2b35000c20a4a6f02c5982e"],["/archives/2020/index.html","6e7148688a8c707a64777a752803c57e"],["/archives/2020/page/2/index.html","66414470d88e0c36abf9002075abd656"],["/archives/2020/page/3/index.html","7e098310db660ca20216163ce2cf3ef8"],["/archives/2020/page/4/index.html","f59e4c0d52715db32393dd0d877855c9"],["/archives/2020/page/5/index.html","ec84294d3a2119821153f2cac16524e9"],["/archives/2020/page/6/index.html","47de3a268b9d9b84f882f1880e1d4d84"],["/archives/2020/page/7/index.html","45f4a6bc298dc986ceb4a60c7ae266ce"],["/archives/2020/page/8/index.html","76c1bdad239feef02d5a6c3f246347ee"],["/archives/2020/page/9/index.html","6db22559ce322c1adc27aa9663ca5fce"],["/archives/index.html","0059c818f35e354e37a84f96de2c6687"],["/archives/page/2/index.html","76a3ad0f652322e09738eeb953aea93f"],["/archives/page/3/index.html","8002653318fae9582ab09a5fc1bc4fd1"],["/archives/page/4/index.html","24deeb7b8dc1ef0d431c0d674847e437"],["/archives/page/5/index.html","e2aab5df0d3e64b23c335c1303260260"],["/archives/page/6/index.html","d67f9a7dbbf663229890c38d3c9a8325"],["/archives/page/7/index.html","c7815076c8cd1558ff199159b5986beb"],["/archives/page/8/index.html","b153b813c953b4aa7476b2228d097433"],["/archives/page/9/index.html","7de6322d5fe8bd6888b205b3bda4cd9a"],["/categories/Advanced-Swift/index.html","6820de69f6931779cbd3fce55aaa800b"],["/categories/Codable-protocol/index.html","b5d8ec61669382135a37a679d1e51118"],["/categories/Combine-framework/index.html","c65329072f13fced02adb82a522e9f44"],["/categories/Combine/index.html","95e87f148e588f0731d3722ff0c0d473"],["/categories/Grand-Central-Dispatch/index.html","e35b3c8bce6148574d8c43b2b5b03be7"],["/categories/Hexo/index.html","23fe0751ff91652c90a4e7a32b69558f"],["/categories/Promises/index.html","f7291e47c7eafc3645bfb6d11a1f8344"],["/categories/Result-Type/index.html","5ef95d0320de4198456c67e79ccbc0b3"],["/categories/Server/index.html","445417269756a8c200af1ac01ef24c8d"],["/categories/Swift/index.html","b33882e71be8b4a7ddd59f017fabaf34"],["/categories/Swift/page/2/index.html","9b112329eca7ebf8096fab7dcb05a7e4"],["/categories/Swift/page/3/index.html","3d95b847b705a77cdbc12d70a5dccd4d"],["/categories/Swift/page/4/index.html","60402ac3cf0d56c657a6240d8c235135"],["/categories/Swift/page/5/index.html","ddd632d49055a2157c1e9bf911d3538d"],["/categories/Swift/page/6/index.html","82e50a3c0a23c91cde9bc5637f8406f9"],["/categories/Swift/page/7/index.html","3e17310e089519cb9ef8209f3ad7306e"],["/categories/Swift/page/8/index.html","4cd26a6502eab3770e48d104e4e62251"],["/categories/Swift5-2/index.html","062069d0ce06295c4cd3d4ad62b5b8fd"],["/categories/SwiftUI/index.html","4f65ea37804bfad62e409953ab548fd6"],["/categories/UICollectionView/index.html","a39d8530699f37cd9903832798dae7a3"],["/categories/UIImagePickerController/index.html","a49541a1f63585719145026f8f159130"],["/categories/UIKit/index.html","6de11339d2ebf0f6b0dfe0f721574489"],["/categories/UIKit/page/2/index.html","5f046d27d06c4d2b18c0ab37bfa6b8a9"],["/categories/UIKit/page/3/index.html","ad2d99075cdfdc673cdf70198760b5d1"],["/categories/UIKit/page/4/index.html","93fd15fc3ffd013c5439525ebc9ad916"],["/categories/UIKit/page/5/index.html","927a4328a407059b56af2d70483ab7a2"],["/categories/UITableView/index.html","7b8c30a391448ef22a5de9dc0561980a"],["/categories/Ubuntu18-04/index.html","3919a8ba5cb3f32efb0bd9b48a28c487"],["/categories/Ubuntu软件源/index.html","00ce110b9eb1f5d2a78c2ba5e1c338bb"],["/categories/Uniquely-identifying-views/index.html","4460daf145062df91032a9f4d5d29ed6"],["/categories/VIPER/index.html","53dc701c9d396dcec613eeda83197280"],["/categories/Vapor4-0/index.html","5232179fb3206ff3623dd60841dc60dd"],["/categories/Xcode/index.html","6f80546a59e7bcaec62d1b5c242a88a3"],["/categories/appleOS-Networking/index.html","907913b9831bf419d8bca9e2a25243bb"],["/categories/enum/index.html","007f576be9108b06c188647702235baf"],["/categories/iCloud/index.html","d9dd5608e1f17845292d2dad19e71f40"],["/categories/iOS/index.html","07b1a4503e23f73c3819b17fc14df22d"],["/categories/iOS/page/2/index.html","d59dac510df7f0bccab5417a825108f9"],["/categories/iOS/page/3/index.html","2460ee7ade514668216889f146dab429"],["/categories/iOS/page/4/index.html","00b8a2fedd61e14f0d8849829d53222f"],["/categories/iOS/page/5/index.html","b7d9eaf58141c34d52498035253dcb4c"],["/categories/iOS/page/6/index.html","f1844b6a3afcbfe806d8abe6a5b2ef97"],["/categories/iOS/page/7/index.html","a423718498ac3b000e6acf1cf719aa7e"],["/categories/iOS/page/8/index.html","aadab2ab3922625008e06fda44e9617c"],["/categories/index.html","b9ec85e99e7638f79112f9ed2eab300d"],["/categories/random/index.html","30666bebfd0f3843f68739b3b76996da"],["/categories/三方类库/index.html","5fda99090fd53d04ca9ff7781592205e"],["/categories/函数式编程/index.html","d27edae150da6f11848baaa0841b0b61"],["/categories/子类化样式/index.html","5099b56c0cbd123a5788cf1accc3f702"],["/categories/架构设计/index.html","af96335b3542c791c7ef6a95c5a69024"],["/categories/用户体验/index.html","c8fd0e3f34891801f30f15deb937722c"],["/categories/设计模式/index.html","9b5647be3a4276f09a31e0f048c024d3"],["/categories/设计模式/page/2/index.html","b00f3f36aff8bdbfddf4f93043a00011"],["/categories/设计模式/page/3/index.html","7a29ab2ef3a2e68cdc2a2ebd855b2bec"],["/css/main.css","dc64989448c058ab137ac219e7d7ee70"],["/hello-world/index.html","f628bafae8d6ba2bfc08ace0e49ccb7b"],["/iOS VIPER架构深入实践/index.html","42d5f5b61c070f917d8b3ae226c68ff4"],["/iOS 自定义视图，输入表单和错误提示/index.html","bd1c4e939601fe6dde1c1cdfdf34f541"],["/iOS如何使用iCloud文档？/index.html","0e616dc843d1d3a26913e26a1c0a32af"],["/iOS子类化样式/index.html","684de16adcf12cca34765ceafb7b4745"],["/iOS自动化布局编程/index.html","d388d74ab16507307ddae987a96dc402"],["/iOS自定义转场(By Swift)/index.html","cfd42db0e1016ebe419ea8b7cc1b0445"],["/iOS项目架构：使用VIPER/index.html","968475e3fdd21fd4faba49109894e87c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2ec641c812dd36e0207bfa0d92cb16fc"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","55868f77e4f0dd703e814c55746f9708"],["/page/3/index.html","b09cfced4acf66b2fe266af00caa570d"],["/page/4/index.html","b6f548b123dcad32532c81908a32bf6f"],["/page/5/index.html","4386e1f2add088d9a3e04016b6f60f14"],["/page/6/index.html","56375694bac652a73f2a94d208becac1"],["/page/7/index.html","3e561cd32b7bb33b43a25040b7429938"],["/page/8/index.html","9ae296c5234048187655a187d3160035"],["/page/9/index.html","b103745d4c0a2ed6622b92c42a8c67c6"],["/schedule/index.html","deece7efcd4a85c0498d638204470f92"],["/sw-register.js","251b1646db8a62224fb3058b3960f992"],["/tags/Advanced-Swift/index.html","b5b7d02f3ae72b29cc91e33c73c6a1e8"],["/tags/Build-in-Collections/index.html","e2fb3dc803af577d02228b517753f64e"],["/tags/Codable-protocol/index.html","97faeb33c7597d32fe2793c8f8c2e06a"],["/tags/Collection/index.html","b6e1618100ff93969fc22f7f98394383"],["/tags/Collections/index.html","9c0d42c7eba929542b6f988c58566436"],["/tags/Combine-framework/index.html","aa990adf32cca9bd486924acd034fd65"],["/tags/Combine/index.html","9da127c897eb96192eb5350e70c32c9a"],["/tags/Dependency-Injection/index.html","a5e42998b18ce69dc2e75e32fe0224e2"],["/tags/Grand-Central-Dispatch/index.html","7b402c9ec825761eef80916ff16371dd"],["/tags/Modules-And-Hooks/index.html","20b5e285743dec12f1e9e9b8e989bdad"],["/tags/Optionals/index.html","909bb229a34fc99e4b2890dd938e06f2"],["/tags/Promises/index.html","f6900e4ea64d69a1abdf1638cbce45c7"],["/tags/Result-Type/index.html","9384a9c7ec9f9669e1eeb709046ab1f2"],["/tags/Server/index.html","9b177232d8990a3d3dfeaa54b5d9b471"],["/tags/Swift-5-0/index.html","936d39ade04c54b2566ff4081d70925e"],["/tags/Swift-Package-Manager/index.html","2feff4b3ca69474ae380540503e25f17"],["/tags/Swift/index.html","80a82feaf5a6d1d3f0ae0c744ad27b1b"],["/tags/Swift/page/2/index.html","275168d070039c0191f7592381969199"],["/tags/Swift/page/3/index.html","025e74b12023f1749eedfa227e660faf"],["/tags/Swift/page/4/index.html","edc67775f20dadefbaee625a7699c3dd"],["/tags/Swift/page/5/index.html","17bd7fee50a04f86ca50b99b787a77c4"],["/tags/Swift/page/6/index.html","569eecedf4e5ce38b108067491de53ae"],["/tags/Swift/page/7/index.html","d59131b61c3bab9fde93c93f10ad1cd9"],["/tags/Swift/page/8/index.html","3eeb2135834ce1e55f99a9a99072a65e"],["/tags/Swift5-0/index.html","f0233efa1e0b14b29439612ec4ee802b"],["/tags/SwiftUI/index.html","281d0e6ba2a1ff47459fac33fa1b420e"],["/tags/UICollectionView/index.html","bcc04eb719e1d28685612137181ba081"],["/tags/UIColor/index.html","532358a61c0b55888ee8ae35b05cf344"],["/tags/UIImagePickerController/index.html","6f192649d628ad0cbc79ee911351aa63"],["/tags/UIKit/index.html","d532a57d250f935643b4720aeb82da98"],["/tags/UIKit/page/2/index.html","0698af7ec645daaf1bca75d8781a0c74"],["/tags/UIKit/page/3/index.html","4e4bf80af4bb783d7fbba1fac88372f6"],["/tags/UIKit/page/4/index.html","b67ac464c43bae652bb9b20b33ee4267"],["/tags/UIKit/page/5/index.html","cbf02128ab80618d609af49b0ceebbb3"],["/tags/UITableView/index.html","f9505b1b14583ddd63b99970ffe58b6b"],["/tags/Ubuntu/index.html","dd7966aa52c40a629b09515586105106"],["/tags/Uniquely-identifying-views/index.html","643f4f3d1943088b909a190ca553a8b3"],["/tags/VIPER/index.html","58a4341a3e9ae01494471f508d4a3537"],["/tags/VMware/index.html","c6b6b0554e96d8677f030cc2806d0838"],["/tags/Xcode/index.html","7f9a5a3f278c098976ee04b56b54ebc7"],["/tags/appleOS-Networking/index.html","0666807e16b06e301aa128c681537d26"],["/tags/enum/index.html","a955b305c5e7e3de23505fa00b1d9e43"],["/tags/iCloud/index.html","b5a603fd0505f453ed7a0551b7978799"],["/tags/iOS/index.html","4456b69731e0fd01d6a9fd18e34f62b3"],["/tags/iOS/page/2/index.html","718c4b6d0e42b52024e065e03227a470"],["/tags/iOS/page/3/index.html","615d246309d3acb73f9f921bca99a630"],["/tags/iOS/page/4/index.html","1cc17fd2af83a01c0a599856b1b1ae0b"],["/tags/iOS/page/5/index.html","14b6208832f735bac627245ebf586e89"],["/tags/iOS/page/6/index.html","c700260b1c129679556a303961c243c3"],["/tags/iOS/page/7/index.html","02c96312fb4a933b9f197c4a6be4ff0f"],["/tags/iOS/page/8/index.html","b1dcd3dd2e5a44400c4cf69d8473216a"],["/tags/index.html","d3f20b5e0332a8a962dad496d4c978f2"],["/tags/non-optional/index.html","47cfda0313984c9d696d9708d2dfa329"],["/tags/random/index.html","b9a8c5377eac3a43ee0cdb33a7f00ebb"],["/tags/transition/index.html","33a2139abd9fa18c20bd9b004b9ba1d9"],["/tags/三方类库/index.html","e21ecefef9e9b39874632aa3fbf8805c"],["/tags/依赖注入设计模式/index.html","771701d27acffa5628b0c9d5618cae26"],["/tags/函数式编程/index.html","11ff5d302dabc68949e72ebfe2dfb103"],["/tags/初始化模式/index.html","da6f9f704f82c9f457a35d8c73daa501"],["/tags/单例模式/index.html","cb8fd7cae636aeb6237532470906ef63"],["/tags/原型设计模式/index.html","2ab7dff75f2d7e5254c6db48198a4889"],["/tags/命令设计模式/index.html","587984457a733129667ab4fe28fd2518"],["/tags/外观设计模式/index.html","bb24ce186170128782a7e927bd7cf62a"],["/tags/委托设计模式/index.html","a74ab8ae4f7a3db3fad18184e28089f4"],["/tags/子类化样式/index.html","f2cce0a01f732024be0cd7203ffe17a5"],["/tags/对象池设计模式/index.html","819ee34953eca8073a155c03d8cd5451"],["/tags/工厂方法设计模式/index.html","0662de51a71f82ad5a13701a8e731059"],["/tags/工厂模式/index.html","159dd6a1fd703886c068be930534f89c"],["/tags/工厂设计模式/index.html","8ac7c232f7d6af8e078a426bf1801b47"],["/tags/懒加载模式/index.html","90581212b7d6ddaaa956407f841bc489"],["/tags/抽象工厂设计模式/index.html","b98ef17dfc4508859df7584a1d59aaa0"],["/tags/构造函数/index.html","6ee4317961bac80faa3af3ba5653356a"],["/tags/架构设计/index.html","5f14a46d858ea697a7e3e9c8825d28b4"],["/tags/生成器模式/index.html","d576c4e0bd78c6a5676833ed123a5035"],["/tags/用户体验/index.html","d6a6bc0303c48f18e7cbf9444c696209"],["/tags/自动化布局/index.html","3538510a0840eddb5a5122e8b940e492"],["/tags/自定义UIView/index.html","c1f9d52091f6f75517fb3edd8ee84dce"],["/tags/自定义转场/index.html","e4a28cd20237dd40a6c1dae8653892c7"],["/tags/自适应布局/index.html","eda84a9ee8808fac03e4573c6d255645"],["/tags/设计模式/index.html","c48e3a5ac27314fb64459d23969c33c9"],["/tags/设计模式/page/2/index.html","0921b066819839bd1bd37fd3dbcab492"],["/tags/设计模式/page/3/index.html","458ccf0a432df623b85c31ffd4a4151f"],["/tags/迭代器设计模式/index.html","2674e9d2ea16588b4c81256fbfe4a8e8"],["/tags/适配器设计模式/index.html","ee28ec5f486aa448c90f7700eea3bfbe"],["/tags/静态工厂方法/index.html","8405110342d0506a05771588f4d7c3a5"],["/为iOS应用构建输入表单/index.html","b4a5ed10a40692f919b80e1f83a316c5"],["/产品开发的幕后花絮/index.html","b87bcb17058b5d530db5980e48807707"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ac3bb7caa0ea336ebc2dcc6963bb5830"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","024bc22a44463594c756cdda20fe9823"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","6dfc5b4fdc0f28b6ca0327576398a07c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","714e32e1b0fcec8b0ff8db5fab6d0036"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7b6d6ba84f064874963b4ca39c122acf"],["/在Swift中创建自定义集合/index.html","417c9fe8e3e6ca96502c73680c2dbd90"],["/在Swift中处理非可选选项/index.html","b30a4ea656e0de3ab42463c8b0b41799"],["/在Swift中生成随机数/index.html","7b54735fb05ee21d91ee4b246f67e019"],["/在Swift中重构单例模式用法/index.html","81c0450b67b39f9c4b18322d4ddefa2e"],["/如何为VIPER编写服务？/index.html","d8f2f13b229111629f0e86fbab17f432"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ebb4c05bfaca7b16b1ff0b4d59ff3184"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b87a173f461673d9de0bb6a03b5d0d7c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a9a9e57ee5cf0371f1296d8a859b11e3"],["/如何使用VIPER构建SwiftUI Apps？/index.html","79ab473f98c51e56a1209683f6d25860"],["/掌握VIPER架构/index.html","0ad610303b963d5ece8c9666c342b565"],["/揭秘 WordPress Hook 系统/index.html","1019661551b320c5b188866293bdc00a"],["/比较工厂设计模式/index.html","f0fa3cf27fc615c1a7dc7903fde6731b"],["/深入了解Swift中的Grand Central Dispatch/index.html","bf33ab274a0baaaa1236264e38ed63c2"],["/深入研究Swift框架/index.html","2e7db7e6973c084c6e6c98e9d3088e9b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","d3dc85e0ab7332e97c687ce2d7df8058"],["/选择Swift而不是Objective-C的5个理由/index.html","9a96d490a86a043af3ab54a0617adbcf"]];
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
