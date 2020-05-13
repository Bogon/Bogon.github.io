/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","9ad3ecf3eb5513cd0020b34271953fe4"],["/Advanced Swift系列(七): Strings/index.html","9f2794a8463e00330855a707d2c7324b"],["/Advanced Swift系列(三):  Optionals/index.html","6008b1e03725de3ceaf812f60f616e99"],["/Advanced Swift系列(九): Protocols/index.html","0e56082d7d80e643bb36999ccfee9be7"],["/Advanced Swift系列(二): Build-in Collections/index.html","d189aac436a286c73ddc584c10e5c309"],["/Advanced Swift系列(五): Structs and Classes/index.html","092b6a85e0f825dd82c6237d7b14e453"],["/Advanced Swift系列(八): Generics/index.html","cfe48233204ca9abc9ef6d73cc3d4965"],["/Advanced Swift系列(六):  Enums/index.html","c88500b626b7d1a58090b11db374de21"],["/Advanced Swift系列(十): Collection Protocols/index.html","d96567af43ec4214eaee36711dac6a6a"],["/Advanced Swift系列(十一): Error Handling/index.html","500d63ac86cdb7b5613809657d8d7666"],["/Advanced Swift系列(十三): Interoperability/index.html","4512cfe69760820a9ac29dbab99525df"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d7daa9ce2b071939767750e1fad81e9c"],["/Advanced Swift系列(四):  Functions/index.html","ece9f1faa28654c98a311316acd46929"],["/App Architecture系列(一):  简介/index.html","db39dca3b6c21befc0579ea9a1dba9cd"],["/Functional Swift 初探/index.html","bf92b08d9ca2390bb0ab8cb6ac761dde"],["/NSCODER和SWIFT初始化/index.html","65d95d9e6a7ba1a3901bcc2777cc3507"],["/Swift 5使用UIImagePickerController拾取图像/index.html","6d6d52cd45b3df1b5979cc2338c954ea"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3ddfbce48a2c85dbe24883f5ea28f37b"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","54d6d9551814949d8412dd990afc1e3b"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","846e82d8ee2173e6633d0551ca85960f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","033ab227046956d2fab6285c55a44e12"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","4eea359b8b627c9ca0a15641cd193613"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","367cccdc6d6d9a9f147e4f1982c30cd9"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","89a2dd0ed46b1e3a000c0a9cacb0d618"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","2d367cd98b81c7cfeeb41c3204dba9b3"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","f92a45d6a6962d51c5258e03c0707706"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","dcd55854ced9e3b0cd8ee3ff69df95f1"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","81f237ef55c063339b55520a981caf4c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","9a62d5efe529f485a957b7480b764137"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","b08fa464365219c4b8feab058d65beea"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","8d1f0391e1196df6fb194745b0f37b57"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","2925e33d7323ea77f06ca3ba89d99c64"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","392b6f8b9c80b362f0e9a25ccee99eb7"],["/Swift CompactMap vs flatMap：差异说明/index.html","71f8ed1b40d71dd577ddc63ba959a32c"],["/Swift Grand Central Dispatch 深入实践/index.html","082624e9972889aec81a95e3c3d359ef"],["/Swift Lazy属性初始化/index.html","061c6da14d8d4b8359b81a4061f8cbb1"],["/Swift Promises 初体验/index.html","900c98809473fc1bfb4272566b91a3b8"],["/Swift Promises 探究/index.html","f07327123524b1b2121fae982fcebf21"],["/Swift UICollectionView使用指南/index.html","59d60be045730513311520f521e08e47"],["/Swift URLSession 和 Combine framework/index.html","46fce78a37e6f5fbd91106eca2b6194d"],["/Swift 唯一识别的视图/index.html","a1b080789962833768a9fa0efb02f2e3"],["/Swift 如何学习现代UIKit？/index.html","39224769cdb524f39a5dfd57f0075721"],["/Swift 用 compactMap 替换 flatMap/index.html","f14dca1f08ddc741184962d46b6bb8f4"],["/Swift 选择和播放视频/index.html","e9b963e16414ebe709874e13eec74895"],["/Swift中UIColor最佳实践/index.html","b9b8d9e513849a80eb4990d79e13a948"],["/Swift中快速简单的工厂设计模式/index.html","e2c97e15f54d23e1b711449c9aa01b1d"],["/Swift中构造函数与静态工厂方法的比较/index.html","c49b50796fff0ec041906807742bb869"],["/Swift中的UITableView教程/index.html","af4d46ef9979d44ddd8e107fc0f560bd"],["/Swift中的懒加载模式/index.html","8902a0174aaf764a290841e1b3571723"],["/Swift中的模块和挂钩/index.html","e45080e9b9b1f048138885e0e52268f1"],["/Swift使用布局锚点添加约束/index.html","3db98c58b01c95adc31b09090297f468"],["/Swift依赖注入设计模式/index.html","d71d87cd9194f0eb7e81afe1756b49f6"],["/Swift关于Dependency Injection (DI)/index.html","e7bdaf52099fb9c0163a53576708a1b4"],["/Swift初始化模式/index.html","745eacf8c407991e4d2a5b637c956c0d"],["/Swift单例模式/index.html","f4b68123d5176c3db0e8cf29e7018f39"],["/Swift原型设计模式/index.html","3ffa5d2976d976f7af9ddb3804ccb7aa"],["/Swift命令设计模式/index.html","9799ab3030702df2b7afa623ace0a72f"],["/Swift外观设计模式/index.html","2187386e1c228c612e06a5412148b79d"],["/Swift委托设计模式/index.html","3d5ab6f1fdcdc1d76bc0b8c42c0446f8"],["/Swift对象池设计模式/index.html","0788f956599881e1aeb5d0af8eac37c7"],["/Swift工厂方法设计模式/index.html","7afb5034aca7b3129c86a1682fa172f9"],["/Swift带闭包的懒惰初始化/index.html","1150fb3d5db86c27b9ca83657d3f6b4b"],["/Swift抽象工厂设计模式/index.html","5584a948e4c98767483f5980792479b4"],["/Swift掌握iOS自动布局锚点/index.html","90e188e25e0af6cea6eca811a42f5efa"],["/Swift支持旋转的自适应单元格/index.html","6b4f93203b1e668c75a0d1d13a0f0dff"],["/Swift枚举值/index.html","c1eb7b3dacb2f72bfd6e7dc8ed7d504e"],["/Swift生成器模式/index.html","9d7e4c93225552f37516caeb9d47ba93"],["/Swift结合Xib文件自定义UIView/index.html","d887277bd029e2dc74c63391550323d1"],["/Swift编写的20个iOS库(一)/index.html","0074098d0e15b9908136b3cebfbf94ef"],["/Swift迭代器设计模式/index.html","cdc9e20ee08bb43a43df016185f3e237"],["/Swift适配器设计模式/index.html","3bbaf4cfbc7f7ddc7091dbb8b6c6c28d"],["/Swift静态工厂设计模式/index.html","e98a91c27eb94617942ae95a6e2beda9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b3778b3b73dd5453d03e14883bfd830f"],["/UICollectionView data source and delegates/index.html","c5fb882b7967abb758a2b09a7d8ec91b"],["/UIKit初始化模式/index.html","a692a855fa941c3603dc0191672c7ba6"],["/Ubuntu18.04替换国内源/index.html","cb593b1521012b9719f656df52feaa5e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","eaa04c85e5dacd3a8ac3bd22c863105f"],["/Xcode扩展/index.html","9059aa107f652af6cbefd2d0318bf133"],["/about/index.html","74f90020c00f79df80f9d893e9ebae67"],["/appleOS的Networking示例/index.html","431a8d3b165b6b20090dc31d44dab48a"],["/archives/2020/04/index.html","e1f28444a3b5f916aba91c34764c3906"],["/archives/2020/04/page/2/index.html","5570aba6076ec37b9340b621b78c16a1"],["/archives/2020/04/page/3/index.html","c8be3150c05d88fac57b5a6fcd69aaf0"],["/archives/2020/04/page/4/index.html","e21aefbb61ff5cafec2f197808feca2d"],["/archives/2020/04/page/5/index.html","102b5446ecfb139ae36914b80d33cfc3"],["/archives/2020/04/page/6/index.html","61990ecbaee68ce2c98ba4a4e18c98e7"],["/archives/2020/04/page/7/index.html","670d975e07d0f5d792d9b7a02822f8f3"],["/archives/2020/04/page/8/index.html","0b30b298d85344c918df5415ec3d5ef8"],["/archives/2020/05/index.html","7c74f70b89650848b359d7d2ab67e3e4"],["/archives/2020/05/page/2/index.html","fe77da1cc13fa60b76642014530483ba"],["/archives/2020/05/page/3/index.html","872b142e099b34e01d1a33b5b88d0569"],["/archives/2020/05/page/4/index.html","ba986d3d24c23328aa58a3fd20d10ca4"],["/archives/2020/index.html","38340f09fd06cac934726d83e32f9511"],["/archives/2020/page/10/index.html","4e5ad26fc138d86ced6bfb8c86245cc7"],["/archives/2020/page/11/index.html","164399065337fad7578c74e21bf40bb7"],["/archives/2020/page/2/index.html","7afc5cbc946d4760400501b5ec0caa45"],["/archives/2020/page/3/index.html","3f1a65f62980cc85e11d59d9b0266802"],["/archives/2020/page/4/index.html","e97955a94aaaa609e50a8230aceb1a28"],["/archives/2020/page/5/index.html","a77469b9c833706e3158b5475301dca6"],["/archives/2020/page/6/index.html","6c2af6eca75a4c9705acb4ba706c05cb"],["/archives/2020/page/7/index.html","1eec9f006927fb99e107b91192f0b543"],["/archives/2020/page/8/index.html","38ccda10954825d0848487e5485a75b2"],["/archives/2020/page/9/index.html","2c94a2b4bd8ca7ddb276bd33ea67e1cf"],["/archives/index.html","c2ab8d3ab0e7843c6f9447c00826b05b"],["/archives/page/10/index.html","176253e9899a3ce9c5ed831b016a1ecf"],["/archives/page/11/index.html","3e9640691065e4284362e5dd65d28919"],["/archives/page/2/index.html","fecc14310c213732adb70fbb294cd3ba"],["/archives/page/3/index.html","4fb2302836d32624017bc17d867ff6ac"],["/archives/page/4/index.html","7561e1a859b23d6f2e29ab58e8cb2693"],["/archives/page/5/index.html","04f139e00e5759f84a3e6e3feb8873b0"],["/archives/page/6/index.html","138f1baf9fd15f8c20b71ea34051fdac"],["/archives/page/7/index.html","1821dd7cc1cb31ac6bdc9f70af1283b5"],["/archives/page/8/index.html","e6dace3a33a37c60fa7a80146bb322c9"],["/archives/page/9/index.html","c3acada4229e3ad815b827fa38733370"],["/categories/Advanced-Swift/index.html","298d22822ef6f6444b61f958586670e2"],["/categories/Advanced-Swift/page/2/index.html","dbe54ca60b5580243872cafc6a1a3328"],["/categories/App-Architecture/index.html","1392a8304e3c32e2eac27d15896ae139"],["/categories/Codable-protocol/index.html","aec4535915f292c50f24af6781b994ed"],["/categories/Combine-framework/index.html","0a4e97c77d5e344ab38df439952c1c05"],["/categories/Combine/index.html","26d762068a600c7e4fb6c5b01c120ff7"],["/categories/Grand-Central-Dispatch/index.html","9eb3f1fc58f260668a1d10584d4c3d16"],["/categories/Hexo/index.html","c77b8bc775cf9a2b42ffb70dd06da13f"],["/categories/Promises/index.html","48e2c1eb02e5ceb9cb36a2f2deafb7b0"],["/categories/Result-Type/index.html","06780b72c08b36de4099f89426224319"],["/categories/Server/index.html","4230ba8ae29e0f1a7e8d94aad8ed0549"],["/categories/Swift-Apprentice/index.html","1f92d6ef6bdcc65533c4ee05eb54e09d"],["/categories/Swift-Apprentice/page/2/index.html","6c2d970904f63ae10ae2aa9cf4610ab2"],["/categories/Swift/index.html","d3a75a1c2995a103fe9d5a735f2f0dff"],["/categories/Swift/page/10/index.html","71f011f3d85776525535ac62f21b36f7"],["/categories/Swift/page/11/index.html","eca0613c2a5be535e052fb380b7f6cf6"],["/categories/Swift/page/2/index.html","1ac0be2a36b44310461cdf3378fe3095"],["/categories/Swift/page/3/index.html","544f62ea07521212e40518f5f577c061"],["/categories/Swift/page/4/index.html","0286398b8d1c23e718ed5ccda1358c65"],["/categories/Swift/page/5/index.html","51b91d962a7d71a2c62290c25a9091d2"],["/categories/Swift/page/6/index.html","a6d8c6a8c38a8feb5fcb46f8b0c34a15"],["/categories/Swift/page/7/index.html","586eb61a3625d7f793632267403bbf2e"],["/categories/Swift/page/8/index.html","74ed5a7b06fe731662baacbd864f8b71"],["/categories/Swift/page/9/index.html","01483a7676bda1f1007a674f3447a219"],["/categories/Swift5-2/index.html","a9863aa0a8690193e6b741ff5b612cc0"],["/categories/SwiftUI/index.html","ce40c18498444a7f7a9e4935d9119e4d"],["/categories/UICollectionView/index.html","9f41edce6e5757bd4d5eaa84905b6b85"],["/categories/UIImagePickerController/index.html","f0357fb587f919dc3987a06b0470db36"],["/categories/UIKit/index.html","9c55863f428893fbf823b3e131846a90"],["/categories/UIKit/page/2/index.html","94088e19b8aba4d83dcf8ec62db6f69c"],["/categories/UIKit/page/3/index.html","ec870f08157fd82113fd74e5fc852c5b"],["/categories/UIKit/page/4/index.html","9180062b7e3bcc492dca9705663da6db"],["/categories/UIKit/page/5/index.html","ae8809aa88d2018b1b79a4bd220e1193"],["/categories/UITableView/index.html","314629b16d4ac1e5e45750618d625f50"],["/categories/Ubuntu18-04/index.html","cb867066d9b0de4b02d64cc2dd72f051"],["/categories/Ubuntu软件源/index.html","9cdd14652cd8b42de978094b3388936a"],["/categories/Uniquely-identifying-views/index.html","50579c8077b91cf5ff6aa432bee75c67"],["/categories/VIPER/index.html","9a210cd82042f3cdd43107cbf0a05acd"],["/categories/Vapor4-0/index.html","f2cede7732943c255e513b576fca7611"],["/categories/Xcode/index.html","125cdb5449b60527214b133e6a3366e0"],["/categories/appleOS-Networking/index.html","cb33fc82800a160f903f3935eb9c0d9b"],["/categories/enum/index.html","c2b597dd2a4eaeb5d2d1aaabe3b21842"],["/categories/iCloud/index.html","167ba29e91ca2cae3186d55900794d43"],["/categories/iOS/index.html","ae5ac4adace32fc04dee149ff9a31835"],["/categories/iOS/page/10/index.html","37e6172da4ded5a978a4bdf11b9aa932"],["/categories/iOS/page/11/index.html","164e022ed89e5cbb1a6c1c4dcb96255b"],["/categories/iOS/page/2/index.html","f2c241728c104e1222955e9650ebe245"],["/categories/iOS/page/3/index.html","e20270761b30aa1b0a1fc71f33338ad6"],["/categories/iOS/page/4/index.html","ab228efc6e694e631efed38104b96a5c"],["/categories/iOS/page/5/index.html","94031fe064a761ac241bfdf5cbb23299"],["/categories/iOS/page/6/index.html","ed387e86e0f1b097d64d4cb9f42c563f"],["/categories/iOS/page/7/index.html","02f8a0a963f2f9ac6c4887896b296f5f"],["/categories/iOS/page/8/index.html","cf0789c99039c721c37bfa2265af8c07"],["/categories/iOS/page/9/index.html","b8281faa577b51656bfecaaa6eafcbb4"],["/categories/index.html","4befab5a21214d9efa00b3f43f49a5ee"],["/categories/random/index.html","b8263a426278baf0db869c62c69313fb"],["/categories/三方类库/index.html","7c4fe76fd23a9f8f73e63e2af5dd8161"],["/categories/函数式编程/index.html","d28964d619957e90fbc64d4e1cc3a7e1"],["/categories/子类化样式/index.html","6d8a14a87fb028d8e2059f041b20addc"],["/categories/架构设计/index.html","c666c1899c16045b294028a00bea8cd5"],["/categories/用户体验/index.html","488ceb894c14dff88718ed2427741fbd"],["/categories/设计模式/index.html","ef620610914735ad06e30b56097a9c01"],["/categories/设计模式/page/2/index.html","1d60395ebff90e283c355de605012ddd"],["/categories/设计模式/page/3/index.html","c463873f5e775270ad805fa10264868c"],["/css/main.css","8c7589dcc8905a32b1514671c6eead2d"],["/hello-world/index.html","b9e2f1e9f1b0645f15fe1ae79deda103"],["/iOS VIPER架构深入实践/index.html","50574c3a7ef470c433fb8a40338354f4"],["/iOS 自定义视图，输入表单和错误提示/index.html","f0f790ddb34c5962b06b749d37eeb113"],["/iOS如何使用iCloud文档？/index.html","24fe26d3ef5492f809673ca11c0b6237"],["/iOS子类化样式/index.html","e190699a7d55b287c7d7169d7b95206f"],["/iOS自动化布局编程/index.html","b018a4f08e0c667c6450d9be09306e9d"],["/iOS自定义转场(By Swift)/index.html","34bbcebd586b321b8a7be5adf12a20ba"],["/iOS项目架构：使用VIPER/index.html","d0938d486f9a8ceedb19abd813b877b4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","59cdf8b30c9de4daeb691d4df0c24cf6"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","ada5a9d5472de554f2e6bacfddea9e3b"],["/page/11/index.html","43e4f161e875acd7061f1d056bd3d08b"],["/page/2/index.html","b3e1ebbf9c2e8a74bd72e18eaea6ca5c"],["/page/3/index.html","a5019ff2d33f8410015e8a191369b26a"],["/page/4/index.html","96954ba088df458f817d1a9c9ec0069d"],["/page/5/index.html","fe21e0bce492281f63eb838e28add089"],["/page/6/index.html","acc97684e2c06393668bd4a5145c41d5"],["/page/7/index.html","a1c2c3bbcf01948304554afa24a55093"],["/page/8/index.html","c5943b4c2ce921c2bf77cd16227447a4"],["/page/9/index.html","54968611029049f2dd8db6cf53c6e329"],["/schedule/index.html","0abf79abb080e357244c5a372b19b053"],["/sw-register.js","dd6531f3bd10a4f1b6c7c8145e842b09"],["/tags/Advanced-Classes/index.html","2fdca4f615e6e696235b62010573e88d"],["/tags/Advanced-Swift/index.html","0093a6dcef4a28fd3e0449775d4a1c3b"],["/tags/Advanced-Swift/page/2/index.html","c4f6ac4c4677ba204670a4d62126212e"],["/tags/App-Architecture/index.html","ebb5cf497e793eb7033fd63b613df9cb"],["/tags/Arrays-Dictionaries-Sets/index.html","ca36a14511708711b4c53bd88c9dc2db"],["/tags/Build-in-Collections/index.html","a22a99e19c96e8b6bd3fd5e17718e4cb"],["/tags/Building-Your-Own-Types/index.html","6a9e92ff50a52630ae6f04a27c59b1af"],["/tags/Classes/index.html","d02e0924cd74077d755a06b3bcb26ed8"],["/tags/Codable-protocol/index.html","ec2b32f15882cd62bb65b033456343ed"],["/tags/Collection-Iteration-with-Closures/index.html","8621f051a98abc62fb3add99adf335ab"],["/tags/Collection-Protocols/index.html","dc90cac614823ac40794f49760d3162d"],["/tags/Collection-Types/index.html","972fcbe05cb64295714e50f03b2777bd"],["/tags/Collection/index.html","2465c454d20c73f60b00f2defcc0a819"],["/tags/Collections/index.html","d451c20c27be65b90919732141c74abf"],["/tags/Combine-framework/index.html","63fda2898996eef55141e8562264cd94"],["/tags/Combine/index.html","213b6510a922f87af9771690410ab059"],["/tags/Dependency-Injection/index.html","337055493bf7bf398b7e7b5a12d5877d"],["/tags/Encoding-and-Decoding/index.html","dbeea79f84619e4656419afbf00a4369"],["/tags/Enums/index.html","ac930da75c9b4eccfa0e1ffe6c503195"],["/tags/Error-Handling/index.html","a80139285c934f9cbfddeba0be95e9a0"],["/tags/Functions/index.html","d851f9110ea8e5441d688c5a66c592cc"],["/tags/Generics/index.html","04382e77221c3de0755c85b3189ea825"],["/tags/Grand-Central-Dispatch/index.html","c07c91026d86a6e91cd61005ed969465"],["/tags/Interoperability/index.html","9b6a45d1b1bb3be7b182c312a647daf0"],["/tags/Introduction/index.html","54602e82bae7b9b1ed1d34d6748e1c2b"],["/tags/Methods/index.html","8a4949ef09f0cac3b0c13d4a84f75901"],["/tags/Modules-And-Hooks/index.html","a8fdb7f485a05a85a0a417a6c31810e3"],["/tags/Optionals/index.html","7177f531f4ec255970d51db70c8df109"],["/tags/Promises/index.html","16b355a4c4a1ea0726864e920211271d"],["/tags/Properties/index.html","5d0c3d828237e8ad6a88f6145eb4804b"],["/tags/Protocols/index.html","8248d817e3ed69c321e92cf4bfa0b0d4"],["/tags/Result-Type/index.html","e8a147ef3ad8b19b9fb66fcd21c2a31c"],["/tags/Server/index.html","11dfc9bb851aba2035fdeed2ec3ac6bf"],["/tags/Strings/index.html","b45bc542280cabb68d90631608a5dd35"],["/tags/Structs-and-Classes/index.html","804fc29a3d81f210caa562c47843c1e3"],["/tags/Structures/index.html","9fe1214769fa7c2092b67fd496c0867e"],["/tags/Swift-5-0/index.html","8d7c50ee7bb0c7da9184ef64c28d9c17"],["/tags/Swift-5-0/page/2/index.html","07d732a5f902bbe57ec80de314b7ed37"],["/tags/Swift-5-0/page/3/index.html","7c064b14a20628b3ee5d844106059a36"],["/tags/Swift-Apprentice/index.html","0397913d468763512f270492fd2d1828"],["/tags/Swift-Apprentice/page/2/index.html","3a69239c28acdc3b3014a5b271835cb6"],["/tags/Swift-Package-Manager/index.html","33b8c8de0d77333f2b2126965ea4965d"],["/tags/Swift/index.html","34ded5129c0970bb76a7c58975099057"],["/tags/Swift/page/10/index.html","24d6929ffc4bdc66dc8983f68d8fe737"],["/tags/Swift/page/11/index.html","18676a425c8def4e1818f2c64042d861"],["/tags/Swift/page/2/index.html","d50bfcb2525e6ea1f545bbecfa0a7d8e"],["/tags/Swift/page/3/index.html","4a9ade56c42e441d6f0a186a9562693a"],["/tags/Swift/page/4/index.html","a99cdb90a8ec457c57e03775ad1460e3"],["/tags/Swift/page/5/index.html","07d9e3a23ebea299c21b116c95bad7c2"],["/tags/Swift/page/6/index.html","02d3d624103b5d0a2e3310d02bef6d35"],["/tags/Swift/page/7/index.html","6092d63f003dba24d3a0b347a57b8ed5"],["/tags/Swift/page/8/index.html","1328b888949dbcdfb63b20a8a920f491"],["/tags/Swift/page/9/index.html","8bbc998de977ed797d5487ff88883d1b"],["/tags/SwiftUI/index.html","0efe0404eec3668791fe08524e6419ff"],["/tags/UICollectionView/index.html","4cd8b2abda30522750caad72c94607b5"],["/tags/UIColor/index.html","d8bed5c4c42deebfa6281db56830a5f3"],["/tags/UIImagePickerController/index.html","12e9706a8bf470d72ec93de9b4fe4419"],["/tags/UIKit/index.html","e4405c4fadebab4fbe70143acb85e23f"],["/tags/UIKit/page/2/index.html","8dcd0c2ebf8508e390b538503a0ac24b"],["/tags/UIKit/page/3/index.html","b186c74afc8a8507c7445d8ce3428f89"],["/tags/UIKit/page/4/index.html","14b67131c207fba5920fbdbab1e5b0ef"],["/tags/UIKit/page/5/index.html","8463eae58ca67e24681a6bdbdfdd825b"],["/tags/UITableView/index.html","875bc7e5f0c03fbb0503c27f8a948fd3"],["/tags/Ubuntu/index.html","264fc6a82e3d539c31afdaf942295ea5"],["/tags/Uniquely-identifying-views/index.html","11282f01d36231575eeb69cc1bd79ccc"],["/tags/VIPER/index.html","6abb046b94c56302c83e1009dc22467d"],["/tags/VMware/index.html","229da101b50e06ef85875c7cfb7a1fd7"],["/tags/Xcode/index.html","dec0adfa07464519550dfef94b8c8112"],["/tags/appleOS-Networking/index.html","45651fd8c1c5f34ce3bc27b041faab84"],["/tags/enum/index.html","62232ac8b88d6f1f0e6068ea1512eb0d"],["/tags/iCloud/index.html","47a6234322987ac90184f0d04a55ce5a"],["/tags/iOS/index.html","c0790821b47d0eac1bc3df3cc9ca280f"],["/tags/iOS/page/10/index.html","035a9a12d48ffd76d28819a1bcd789b7"],["/tags/iOS/page/11/index.html","b0d0c30a8d1f611c4fbb8e6ccc4d64eb"],["/tags/iOS/page/2/index.html","870d4c3e1a75e82c8f32b18c2f3c57dd"],["/tags/iOS/page/3/index.html","978f268a22eaebdab63610186b01a588"],["/tags/iOS/page/4/index.html","c0f7299a43cc2a15e5f5a0138cacc2ea"],["/tags/iOS/page/5/index.html","ca349e30d128b9036ab89a220b529ea3"],["/tags/iOS/page/6/index.html","234357e4d3bbd905892b53b389e47147"],["/tags/iOS/page/7/index.html","306333f9387c4570a38994bada02dde4"],["/tags/iOS/page/8/index.html","30c624cec01e35fd774e33fcdd4503aa"],["/tags/iOS/page/9/index.html","d158681c175eb12c1a5b79473ac6d663"],["/tags/index.html","bab071b7e561b60d5970dee555de4ead"],["/tags/non-optional/index.html","2bac968f01b1c9a1dcd9be2dc21edc3c"],["/tags/random/index.html","1db5e189d15e9110f6c84913ee53f1cd"],["/tags/transition/index.html","e450c46243a0d3ce920b7c9b2b22c841"],["/tags/三方类库/index.html","41b4ee4896004210e608c1873219a66d"],["/tags/依赖注入设计模式/index.html","8d9cfa6b1a315132ce76a95d1f1ec416"],["/tags/函数式编程/index.html","8cb17af1845f07e1a2d049530fe7b87c"],["/tags/初始化模式/index.html","25ad420bdd7cd4b4c4bee2f744d9c2eb"],["/tags/单例模式/index.html","a3a3e9b259ec2f441d7fe4902609a982"],["/tags/原型设计模式/index.html","0c9742eb55c66c8af0e0d4fa77d11589"],["/tags/命令设计模式/index.html","39aec68ea821e4ba9d4c8b860b8b4a4e"],["/tags/基本控制流/index.html","f08518a8b31dd9b696d294fbd6c7373e"],["/tags/外观设计模式/index.html","a4873f629bf75e30ebb275c3c9ed3330"],["/tags/委托设计模式/index.html","37323f57c426487daba8ad01b454168a"],["/tags/子类化样式/index.html","1dc75ce987cf83338eb76d71cf2d8ee5"],["/tags/对象池设计模式/index.html","6d1395c360f28f2e6941ddb74dd5f03c"],["/tags/工厂方法设计模式/index.html","2d27ba0fca660d7f9aa1d26d0df95267"],["/tags/工厂模式/index.html","1a4d6a5cc908aa9acbcd75f0c1fed8c8"],["/tags/工厂设计模式/index.html","fd2a12bf59a8b41fbf73332771077a44"],["/tags/懒加载模式/index.html","cacc12cfa3a6bac7b31c4a1aa067f821"],["/tags/抽象工厂设计模式/index.html","4bd630c09be29a6d998fa35be7b118ad"],["/tags/构造函数/index.html","7d4b801c3fc2be628325934888fdc98b"],["/tags/架构设计/index.html","28d6fd9b6a5acfe6893bf35aacd8bb14"],["/tags/生成器模式/index.html","64b7f73716fa49578be6a61b4d35f474"],["/tags/用户体验/index.html","e00dc641415f00e0249b062e387c2edb"],["/tags/类型与操作/index.html","781daa15074a50ca55fe776a13a51a24"],["/tags/自动化布局/index.html","7502398dcf9c8eecb26d8eff2d547c51"],["/tags/自定义UIView/index.html","fee9c6c3ff1e99f3b20fbcec5a0f0422"],["/tags/自定义转场/index.html","41e7f7d01359cc2f4f67b7d4963a8b7c"],["/tags/自适应布局/index.html","787027ba47f5f8e01cc9a09d634b4e4c"],["/tags/表达式、变量和常量/index.html","8486c35fd079dd10e1f478834f49c5ee"],["/tags/设计模式/index.html","2203f52895e2af70fdb74a135a1769d9"],["/tags/设计模式/page/2/index.html","e0e8801f6803fb5d52d828e1352bb0c8"],["/tags/设计模式/page/3/index.html","23938c7e013c7eeb7ed0e107280692ec"],["/tags/迭代器设计模式/index.html","c0dd78cd0090d1ae94fad624786a9c38"],["/tags/适配器设计模式/index.html","c2c66f2b68b85c1a777909900628a09c"],["/tags/静态工厂方法/index.html","6856b1b4bc8ba57f37df199c60c7e3a8"],["/tags/高级控制流/index.html","e2c4a07ff50133a58e62b86e10b79615"],["/为iOS应用构建输入表单/index.html","05de9729ba7326144d964c3203a1fe3c"],["/产品开发的幕后花絮/index.html","e68f16f7ecc6fd0b64b3cdc63d80be60"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0771aeb8f9e31deb0230be07cdcd9b11"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d65a28816971992a14d98d41e6613407"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3d7232a8f4922016956fc6fb8a80a05c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","697c6bcfd9c2311deb751c603f816a22"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f2a4b2fb62e0c8351cda75fc90458ac6"],["/在Swift中创建自定义集合/index.html","ac8586cf2abaee83cb9cf951c15615f7"],["/在Swift中处理非可选选项/index.html","cc7add44eec09478186d363e4090d292"],["/在Swift中生成随机数/index.html","cb7f545d57b3a5bb2a587564f995a545"],["/在Swift中重构单例模式用法/index.html","34502e7bddaf91c21c91d07b56a5f02c"],["/如何为VIPER编写服务？/index.html","38347c6c8fd55ee03f05374b8250047e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8c0d265fd1b9ff36351dd61e064217e2"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","4354b2ce35e7bcf0e41ebc178195d4b9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","63b523dba7415ff51e0c22c6c723f5f4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","013fcbb7e369922796e02128abb6fe60"],["/掌握VIPER架构/index.html","88f178472943c7627343c124f5f78c70"],["/揭秘 WordPress Hook 系统/index.html","69db0220b50e9e8ad5c5a634d8008a34"],["/比较工厂设计模式/index.html","baa159ecffbb10857621dac414f28481"],["/深入了解Swift中的Grand Central Dispatch/index.html","4dd9a036163b37bddd37f2d6b1fd9c8f"],["/深入研究Swift框架/index.html","79e03107210ca31eef9551a36676fd45"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c215da11335fce3bbfa176922dee6bca"],["/选择Swift而不是Objective-C的5个理由/index.html","71834c9e16f141f33d11cb18df6de907"]];
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
