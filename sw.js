/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","5b6d314bcb9edd244e538240c9268552"],["/Advanced Swift系列(七): Strings/index.html","5a5696081956e6b1dbb82c631166a5cf"],["/Advanced Swift系列(三):  Optionals/index.html","829b0f0f8f404ce3117aa98dbd685006"],["/Advanced Swift系列(二): Build-in Collections/index.html","7f6965240bb4e2085d7aa498bb752ef2"],["/Advanced Swift系列(五): Structs and Classes/index.html","3307849688d04abec3006e9bca445d40"],["/Advanced Swift系列(六):  Enums/index.html","b7fd09eb49291247287cafd6aa7265bb"],["/Advanced Swift系列(四):  Functions/index.html","a8fcb5e5e0ae08307a628a070ffd5595"],["/Functional Swift 初探/index.html","3f2c706b277fea5909df1ed3d5224d7a"],["/NSCODER和SWIFT初始化/index.html","108ed8896160aa712739c185e24e5a11"],["/Swift 5使用UIImagePickerController拾取图像/index.html","562c3ffd51158ca463dec783819a5472"],["/Swift CompactMap vs flatMap：差异说明/index.html","87c7bf2baaf7f98dff405f137f248583"],["/Swift Grand Central Dispatch 深入实践/index.html","9d00bfd4a8f107419f68c83aebff43e7"],["/Swift Lazy属性初始化/index.html","42533b4870d0d760ef032bcae99d00dc"],["/Swift Promises 初体验/index.html","3f81b3fd9016dfbc7280f897d56801aa"],["/Swift Promises 探究/index.html","35df5992ef46dd8320d51536e2fb4070"],["/Swift UICollectionView使用指南/index.html","66248d6a20941dd2bce6d9b3c15b10f8"],["/Swift URLSession 和 Combine framework/index.html","7a04ac5359689febba9fd0186d9b2e97"],["/Swift 唯一识别的视图/index.html","dfc63f1942bd011b563e81bb263547c6"],["/Swift 如何学习现代UIKit？/index.html","766a22f05fa406298a809399ff137d2c"],["/Swift 用 compactMap 替换 flatMap/index.html","fd0bd7d905433a3a76732071d8fd53ff"],["/Swift 选择和播放视频/index.html","98f195dea976099859615f4a42537443"],["/Swift中UIColor最佳实践/index.html","06d5aaf6cfb2e403b5c828bee133b1d9"],["/Swift中快速简单的工厂设计模式/index.html","f36f3cec1b700ded175f41c855c2f2c4"],["/Swift中构造函数与静态工厂方法的比较/index.html","a60719774b6847e10c8e282f585fe87e"],["/Swift中的UITableView教程/index.html","acbe6512368bb298a7bc125a97fb2f5d"],["/Swift中的懒加载模式/index.html","0a77582d2e30cb2425aa64a59eb8f3a1"],["/Swift中的模块和挂钩/index.html","bcae11a74ff882349e8e4f4ffd0a7725"],["/Swift使用布局锚点添加约束/index.html","58fa278a702f474ca4d4a81b4310c644"],["/Swift依赖注入设计模式/index.html","b9afebf6d8cf77dfa8c01df4ee967c6f"],["/Swift关于Dependency Injection (DI)/index.html","36fcfebd7d27eb3563846d97da65da52"],["/Swift初始化模式/index.html","7339876297330bb6a21619bd71174553"],["/Swift单例模式/index.html","5c17090e3d42547f0cb41fd896341d7d"],["/Swift原型设计模式/index.html","8e31d2ff65c0164b83a72fc3b48f703a"],["/Swift命令设计模式/index.html","b0b4277a9acf08506055e2cf1ffb1f93"],["/Swift外观设计模式/index.html","cd868ff6876d75934fc5cf3ead15408f"],["/Swift委托设计模式/index.html","87a6c71d06db8927d7be44984a532168"],["/Swift对象池设计模式/index.html","153b02a9a9030c803cff1ffa3a9dd62f"],["/Swift工厂方法设计模式/index.html","4f0769e0877a6204e52bd1f4a9b77d87"],["/Swift带闭包的懒惰初始化/index.html","2b625615b76190cdc26c9cc77d31f152"],["/Swift抽象工厂设计模式/index.html","f2885e96268bcba79f2c90db96c7d7ac"],["/Swift掌握iOS自动布局锚点/index.html","0ab26fa1233030b980fe99f53e25e469"],["/Swift支持旋转的自适应单元格/index.html","9fb825ae42889fe55edfcf7321e01a46"],["/Swift枚举值/index.html","abf0a64396223233c983532f8f6aadf8"],["/Swift生成器模式/index.html","ba1c7b81ec403dcd6a4d9d5aec01dfe4"],["/Swift结合Xib文件自定义UIView/index.html","89c6eb3eb91f9ae115dd9ac79d1a7d8f"],["/Swift编写的20个iOS库(一)/index.html","b0ad171efd35ff0c5eff9503e6526645"],["/Swift迭代器设计模式/index.html","27dd1aacf6ba440f810a5fd9ed01932d"],["/Swift适配器设计模式/index.html","c2e25dbceec4cd0783e4eda049b1aaa4"],["/Swift静态工厂设计模式/index.html","cff91d2e780121455bf7ccd66619c98a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","80891d9eee5ce82e8c538728b52de730"],["/UICollectionView data source and delegates/index.html","ad91e9c08983ab8d778b73fefd52e8c9"],["/UIKit初始化模式/index.html","dca3d1eb29945b518415c35d6569611b"],["/Ubuntu18.04替换国内源/index.html","454e06da8e00c56816d5da1dd733e753"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","87065f688e8d454a4975998acc34cc97"],["/Xcode扩展/index.html","10e1a9e00767db6dcbc176f3acdf0975"],["/about/index.html","61fb3a836a059aeef67127461e90ace4"],["/appleOS的Networking示例/index.html","c6ccc936c15049ef786620f1fea2cb1b"],["/archives/2020/04/index.html","0e1375073d1b8fb7aa7d7ed38de02c6e"],["/archives/2020/04/page/2/index.html","34adf3c7c28cd1964e44a3c5c3600c77"],["/archives/2020/04/page/3/index.html","57f144917a9b88db047dd44513268e7f"],["/archives/2020/04/page/4/index.html","daa68f29042ea6b9d5d991243cc9b174"],["/archives/2020/04/page/5/index.html","38214f44b2d8236234d157707cb52af6"],["/archives/2020/04/page/6/index.html","da105d7ce2c9b4dc9fd9454530327b85"],["/archives/2020/04/page/7/index.html","4823cd3d253791cb45c705d4e14f3435"],["/archives/2020/04/page/8/index.html","2b6d67bec287f0bcf488b7d69d6b6a0b"],["/archives/2020/05/index.html","606b48a6cc8231ef5cba426f7f676525"],["/archives/2020/05/page/2/index.html","8ef92b6c0e17072b26c6f1d6db59cea4"],["/archives/2020/index.html","1a01a95422f471033f03fda740894776"],["/archives/2020/page/2/index.html","f6cfdf5f48c633517c52868a7180fb70"],["/archives/2020/page/3/index.html","ae02dd98fec10663e7f8a2c9832d80c6"],["/archives/2020/page/4/index.html","1edd8eda9829c2501767430e42437b94"],["/archives/2020/page/5/index.html","557d06148fc91e66944de0195f0e37d0"],["/archives/2020/page/6/index.html","30e49ca0be120a201e4dc963eb088bfe"],["/archives/2020/page/7/index.html","9798ad5202f73fb5c019d3bb1731f410"],["/archives/2020/page/8/index.html","a6bee41f8f35a3dded497e8ec89ec2bb"],["/archives/2020/page/9/index.html","0281c63b01389e6b4305855a175898a7"],["/archives/index.html","dfecd12550382a85b400fab2ee7f83b3"],["/archives/page/2/index.html","b117d6d5f11c617b5ca3d1e508898332"],["/archives/page/3/index.html","7f3d4a0e8ddeafb826cf1f0854de175b"],["/archives/page/4/index.html","078a0668f181bc0a5ec6a1f75c88d762"],["/archives/page/5/index.html","06c1966a425c1f008dbc870a10f2d087"],["/archives/page/6/index.html","a4f9656d11e5776071798955bd33a14d"],["/archives/page/7/index.html","7785ac522421071679aa46b0dead0d92"],["/archives/page/8/index.html","ac06d45a627f81567fab4f55204ecbbd"],["/archives/page/9/index.html","0a6c8bbebd1b395931f28866397310b6"],["/categories/Advanced-Swift/index.html","9ef7a49c52420efc03da9cc4ab11e36a"],["/categories/Codable-protocol/index.html","e4ffb8eb45dcd486b828a3bc4a8e0cb2"],["/categories/Combine-framework/index.html","6b96882758f2cfa3a19c09b3b7b4af30"],["/categories/Combine/index.html","47b6ddf463303edde061fd36d373f1f9"],["/categories/Grand-Central-Dispatch/index.html","084aa1bbafd12bdb364c52003e53692b"],["/categories/Hexo/index.html","d9ece497b373850b88b4f27debbd4b0d"],["/categories/Promises/index.html","94d644e208f5685133c53bf0dc343a4a"],["/categories/Result-Type/index.html","42fc7551945c0e578305aed25784846d"],["/categories/Server/index.html","5dccbe7f3d7cfb274c8db0f38b77089c"],["/categories/Swift/index.html","daec4318751daaf734579dcbf6afa042"],["/categories/Swift/page/2/index.html","c778d2122a20b5a05ddcfa44f22dcb59"],["/categories/Swift/page/3/index.html","e851d419b4bd85a3c43e6a99b010ed5e"],["/categories/Swift/page/4/index.html","dcd15ae439d20c37d8abf9c012e80b20"],["/categories/Swift/page/5/index.html","28b83f5d35ff71feb5fd16a7745128e8"],["/categories/Swift/page/6/index.html","2e4a041fa6b923750061fd9631ca1a08"],["/categories/Swift/page/7/index.html","20350cf0d7c20c55e01cf133fbc4baaf"],["/categories/Swift/page/8/index.html","889a341dead7cc450d64d0722f54ce01"],["/categories/Swift/page/9/index.html","5a3db491174b4b795605d8b201548fce"],["/categories/Swift5-2/index.html","b4098f034d2a5cd8e1010e5fd83f41cd"],["/categories/SwiftUI/index.html","0401d45696eba07343fa5adc4589f33b"],["/categories/UICollectionView/index.html","117c979e87210e5a9f65eee11f179a68"],["/categories/UIImagePickerController/index.html","4baa1bf1d04f3d3dc9f1fd5b9e1cd2d5"],["/categories/UIKit/index.html","7dca8521e1fd85a699d92d25ba9c0846"],["/categories/UIKit/page/2/index.html","9aad7734ae1cbd2f2abe7b8d15948986"],["/categories/UIKit/page/3/index.html","be8cbb147db41baa073412b2b3c2fb4d"],["/categories/UIKit/page/4/index.html","b7f4cb9bb6f7c6561b2715e716e66ba4"],["/categories/UIKit/page/5/index.html","0ba1cc53e6214fa4c9ba68794324f527"],["/categories/UITableView/index.html","2b5ebbb2b1cf90eb4bc9970422303793"],["/categories/Ubuntu18-04/index.html","5aac071ced06282bd891282440a27b76"],["/categories/Ubuntu软件源/index.html","ffb2c8886deb9ac9f946121ff6525ed0"],["/categories/Uniquely-identifying-views/index.html","78bf2c82a5f84a4b03301aa3660b2578"],["/categories/VIPER/index.html","f6688aec1c27b80259860637fd4ee467"],["/categories/Vapor4-0/index.html","4f1b4dbb3cecc22728e3c6558e6f069c"],["/categories/Xcode/index.html","347d76859e7d540105c3801736cadc47"],["/categories/appleOS-Networking/index.html","0aa97b2ae366b0ee6bd5dd3a42ce8e45"],["/categories/enum/index.html","52d3a75822fba788e50cea9f0d790fdc"],["/categories/iCloud/index.html","9f66240a78e20613eb95a25a703de50a"],["/categories/iOS/index.html","ad369a99367967157187ed62fd70c3a1"],["/categories/iOS/page/2/index.html","ae9a83dea55314d793bd0e93aa3a2c85"],["/categories/iOS/page/3/index.html","12f10172549d6326e2813bd1ac1ef681"],["/categories/iOS/page/4/index.html","89e0743f60faa9f27a678ce1bc0042a2"],["/categories/iOS/page/5/index.html","247c9a944ab28dbd8977231979c1c5d7"],["/categories/iOS/page/6/index.html","c0bace0c528fd062914dbd6cbc6f6d39"],["/categories/iOS/page/7/index.html","c049ecf6b9288b3340507a2165beceb5"],["/categories/iOS/page/8/index.html","0f105d3a189c05f9f7584b42c5b61187"],["/categories/iOS/page/9/index.html","e8795f8755bcef305a9104262f4512d1"],["/categories/index.html","461846f5ec8bcd43516aad1627b002c7"],["/categories/random/index.html","3ce5acc310ea44cb9832bab221ec6b3c"],["/categories/三方类库/index.html","6c842995e46031fee3817beadf52a633"],["/categories/函数式编程/index.html","81eef1b617ce95c77c1b59366d8a0e80"],["/categories/子类化样式/index.html","ba51a4d2b57ae1cdc91253de37b083e7"],["/categories/架构设计/index.html","2f7f37a6412c28d81ab162284d34251b"],["/categories/用户体验/index.html","a9561fe382c415a4c8cc5e9704703d00"],["/categories/设计模式/index.html","ad2cd20d4ebe726434171dc74b23bf59"],["/categories/设计模式/page/2/index.html","30e5ed624b4374fc563408b415725d36"],["/categories/设计模式/page/3/index.html","c0014da562dc6bf26908927a0bb87896"],["/css/main.css","42217e7f000cb027216de36a820ff9d7"],["/hello-world/index.html","a5c02a94c650b8c669e335733d2f0166"],["/iOS VIPER架构深入实践/index.html","dfe67ece64e9200c7450d355f20f6919"],["/iOS 自定义视图，输入表单和错误提示/index.html","911ba4d79eccb8803e7a47813ac331dc"],["/iOS如何使用iCloud文档？/index.html","aa9119f8199432ed41d071612ad0b1eb"],["/iOS子类化样式/index.html","996621ecc5845840173ba5d7d4c2baf3"],["/iOS自动化布局编程/index.html","9708738c52d96bc1d21bad86da579d5d"],["/iOS自定义转场(By Swift)/index.html","bdd13b9595a624550a4481e5ce40e373"],["/iOS项目架构：使用VIPER/index.html","7a7358afe20a37abf23a3b53e0c58d82"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","508aa00ebd0b153479db47cadd74855e"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","97bad3b5fa894f9dad045c2f616fa49b"],["/page/3/index.html","35e9943ee9b6c5b236b824a80a47c036"],["/page/4/index.html","98a56f40542c92e2cfd976b84d4ef2a4"],["/page/5/index.html","9f87957bc2f060eb1c61002877b1130b"],["/page/6/index.html","46edfc2f3aa12abd810f47860fb72ef3"],["/page/7/index.html","05a989eacc6c348a4fb85733973cb3d5"],["/page/8/index.html","9be51d00ad34c78dbc2cbce6a73e52cc"],["/page/9/index.html","f1d4f3d3fce4cf2bc2110f00fb990e3c"],["/schedule/index.html","2e6239248ae970a34318bbc5ede33a93"],["/sw-register.js","f5f1a5b7a87e628d73fcf83b4a336388"],["/tags/Advanced-Swift/index.html","b016ab3b5aabc104010280f608d3d3b7"],["/tags/Build-in-Collections/index.html","7d13625449f8ebf545249fe73add962b"],["/tags/Codable-protocol/index.html","1f14320bfa7eb2e50506881eb4a20738"],["/tags/Collection/index.html","d30b740e7a5f59e074abc714768c12ac"],["/tags/Collections/index.html","5b8bcaa8a312ec2bb4d32767dd5d6827"],["/tags/Combine-framework/index.html","ecf34c07f99c1ccaa2959670cf0fb347"],["/tags/Combine/index.html","ee702b2c8b58ab0c5ef0376081e35e03"],["/tags/Dependency-Injection/index.html","72a0dec3ae1e31a030ea053d3e386f4f"],["/tags/Enums/index.html","faa5c4c328461e955cd04831b5e31650"],["/tags/Functions/index.html","797d137f41c79dfd73ec0e7ca38920fa"],["/tags/Grand-Central-Dispatch/index.html","1a1151cd807a6ff62574ad4d373a478b"],["/tags/Modules-And-Hooks/index.html","b0a4c838f6898ebb71083ea04ff0f400"],["/tags/Optionals/index.html","82ebd6e50af9aae0414d75aca8bd04d6"],["/tags/Promises/index.html","6da4be8624e9e81ca31af92a26b9d070"],["/tags/Result-Type/index.html","b0f913dd13fd934d05572dbc5bc6902b"],["/tags/Server/index.html","ef799b76b93053a0f11ec2b81afcf04d"],["/tags/Strings/index.html","6acde0b1f54ccb7f20ee78e93715b6a0"],["/tags/Structs-and-Classes/index.html","bd15d1a835acc9896849716d913a2f20"],["/tags/Swift-5-0/index.html","aa3136521a4be9b0414a865b5122fcff"],["/tags/Swift-Package-Manager/index.html","56e1e0039172d489998f6de0536f86f3"],["/tags/Swift/index.html","10dcc7824642e8ca79cc69c55b73efe6"],["/tags/Swift/page/2/index.html","f726c00bf05da7336101648e6d2a9a9b"],["/tags/Swift/page/3/index.html","b70055ac1ac65635da690ecdef9065a9"],["/tags/Swift/page/4/index.html","fa9f9fe9ed52fe54e2b220aab26668ee"],["/tags/Swift/page/5/index.html","d93ea1c90893ff562dd5be621183b466"],["/tags/Swift/page/6/index.html","90a98778d481461b5b233ede40615608"],["/tags/Swift/page/7/index.html","9acc67b8c88942c7420fba71d4da4191"],["/tags/Swift/page/8/index.html","7f38dd550715a7446fd2a136eea331f1"],["/tags/Swift/page/9/index.html","e12034494ffb483455cc8237edeb3b32"],["/tags/SwiftUI/index.html","b90bc136503d3ec7c5d2e9eb2a7c6117"],["/tags/UICollectionView/index.html","8aabaec8a5bbf9f62e0474e9e04c649f"],["/tags/UIColor/index.html","7235d4702f39824b55f376692eef3b0f"],["/tags/UIImagePickerController/index.html","94fcaa2e9c6a44de929ee28b67cc8499"],["/tags/UIKit/index.html","e1956f8f842e4b4b94c76cbad38d748a"],["/tags/UIKit/page/2/index.html","cfb04f16f9ec743b4cd4c2795e1b4e61"],["/tags/UIKit/page/3/index.html","de135e405b92b2cb271716ed98199494"],["/tags/UIKit/page/4/index.html","2d52fff805b6c5fcf5a90bd1258df080"],["/tags/UIKit/page/5/index.html","81fb7f63fa910f5cd09f6d5b9e2fca60"],["/tags/UITableView/index.html","527d56d1f4c6c1ace4a0dc8d7edc6028"],["/tags/Ubuntu/index.html","97bc83eae0d283af7dd0e0c9a1eec7f0"],["/tags/Uniquely-identifying-views/index.html","f9504b47de81d9b330d0901d5899036b"],["/tags/VIPER/index.html","8131ccfc37a1617c5480c99e72c0c11b"],["/tags/VMware/index.html","efc841d8a89a0d6d0c5188be39fd4aff"],["/tags/Xcode/index.html","b03aa75c16afd71be0f9184268814083"],["/tags/appleOS-Networking/index.html","a2af128d473d4ef451e24d5483957239"],["/tags/enum/index.html","a70da39718c2011ed0ba747a5a91cce8"],["/tags/iCloud/index.html","282698b30c84beeb195a79f7c980ad5c"],["/tags/iOS/index.html","574b92719226d92ff6e7b85478a785fa"],["/tags/iOS/page/2/index.html","e02c82a8e30b7670e7db55e47b0e8e16"],["/tags/iOS/page/3/index.html","1a593d4afdef0487929e473937712e56"],["/tags/iOS/page/4/index.html","9583211b5962d27a52964e98ed774bad"],["/tags/iOS/page/5/index.html","78457f2f732ed4840503279f681e9865"],["/tags/iOS/page/6/index.html","9d2ea2f064bd0b0674e129c5299c313e"],["/tags/iOS/page/7/index.html","700ee71edac4415d3594ce29305bf76d"],["/tags/iOS/page/8/index.html","adb51b9b39018557a8866065813f2674"],["/tags/iOS/page/9/index.html","5d0641997b895ba300a063e00f264d68"],["/tags/index.html","45cb8230972188c13c68bb9d93b23427"],["/tags/non-optional/index.html","24059834ef4e4b4581cd400486e0e148"],["/tags/random/index.html","67e48b88aca6a1d0255e3e03cc3f62b6"],["/tags/transition/index.html","0c2b46194b9606e16b80a159caceb82c"],["/tags/三方类库/index.html","641d3a45cb44a53a00e85ae3b2de8012"],["/tags/依赖注入设计模式/index.html","7a184d57c9e3690f181455ef1d03be7a"],["/tags/函数式编程/index.html","13e34a60c7589e9dc0c76720dd96eb11"],["/tags/初始化模式/index.html","0a867590fb0bebefe792852bd78a31ae"],["/tags/单例模式/index.html","95a64dc9f82d2e84fa8de04fa420f5e3"],["/tags/原型设计模式/index.html","10718dcd32847e82ba0fc15dd7fb0021"],["/tags/命令设计模式/index.html","5efff4fea1c5b4e19ccc66bed5d79ea7"],["/tags/外观设计模式/index.html","e70ba612d29658ad0a8ff9ff6b2ccd79"],["/tags/委托设计模式/index.html","d44807f4df94fb4d6d4f80168076c506"],["/tags/子类化样式/index.html","e567ea9d2b4ba978b46d84e315f2c0bd"],["/tags/对象池设计模式/index.html","93102a0f8ea25296c9929357223ca23f"],["/tags/工厂方法设计模式/index.html","4be940a461596d40fd864728d4965c97"],["/tags/工厂模式/index.html","bca21e34689e3ceadebb0e77a1635c8f"],["/tags/工厂设计模式/index.html","752f3d12a75c82797b0f2d28216f312f"],["/tags/懒加载模式/index.html","4dedfdb9504d9e23a0add6c43502ddd8"],["/tags/抽象工厂设计模式/index.html","94858d19b4d582419cf858b5c6a8c1c8"],["/tags/构造函数/index.html","ecf67e7a6a25b9cc0c0a9a7b98b2e4ce"],["/tags/架构设计/index.html","478805c8083466a03b253816b81749e6"],["/tags/生成器模式/index.html","311d836ef774d2f27704a2db382a07d8"],["/tags/用户体验/index.html","5f530b0031ef00a168bac963ba61854b"],["/tags/自动化布局/index.html","bfcb5e27b8cee08f3f37952d0115da61"],["/tags/自定义UIView/index.html","2734b720d4363009d8642daa346df6c7"],["/tags/自定义转场/index.html","f228cd014a9e0aa3d9e7f57e44856aa3"],["/tags/自适应布局/index.html","0242b3e5d81628a1a88f5c718e03810a"],["/tags/设计模式/index.html","2af2aa065dbd3a85dcbbbeb4fe494e05"],["/tags/设计模式/page/2/index.html","c633074c7d68eae771386bee8e8ce5f0"],["/tags/设计模式/page/3/index.html","d34502cd44478c399da15dc3c012df43"],["/tags/迭代器设计模式/index.html","2db19b8285fcf00ee709d92a4e9c051a"],["/tags/适配器设计模式/index.html","596ac83e915d43b1def872a14a027cf3"],["/tags/静态工厂方法/index.html","ddb5a58f491c325e4f49037acd8960ef"],["/为iOS应用构建输入表单/index.html","4b9b6e1c3f05db8ad597130d8d3db7b1"],["/产品开发的幕后花絮/index.html","f2166b6153b5a6fc290801fece33e8d3"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","dc29061bc72ad442fb35a506670d97a3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ec21b8eea5cb04e51f780188cf03ca52"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9c971ae9498fde80c459e3150e7547c1"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","760f29b215ed5929e923114a7606e62d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8ee196e1258bcf33321ce37859ae9705"],["/在Swift中创建自定义集合/index.html","48d3d01f8f7ecf09073a58b31cde2d0a"],["/在Swift中处理非可选选项/index.html","1d809c90cfe5735c2b5eaed681d2bcde"],["/在Swift中生成随机数/index.html","a8e3133c1c2585679331ba0aba8453f7"],["/在Swift中重构单例模式用法/index.html","54aea93a2c4478a163da1f1c2a68d165"],["/如何为VIPER编写服务？/index.html","ddac6485833c2e5d801389b543d41e88"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e0694dd178cfeaceaed9853f480cdc89"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ca1664aa3f2c20d149b99b41f845851c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","035c2b0dbf1128ebd9e69c272180239e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","7802e2835a59652c130021ef01f06897"],["/掌握VIPER架构/index.html","c97ad40565f9924b385bf523eb99136f"],["/揭秘 WordPress Hook 系统/index.html","256efd3264c81fa5b3f4c887cf918796"],["/比较工厂设计模式/index.html","a82d2246d4e66e860ffe98ddcdc68330"],["/深入了解Swift中的Grand Central Dispatch/index.html","35626037578b7ea82d262a7cd0a5a4b2"],["/深入研究Swift框架/index.html","a0c35cfa1ecf46bbb6d3cd27a5c37b26"],["/适用于iOS开发人员的VIPER最佳实践/index.html","417a458254d74112335849c61ca45fa3"],["/选择Swift而不是Objective-C的5个理由/index.html","04047ccaca1486e9fc3733bcd92c8d72"]];
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
