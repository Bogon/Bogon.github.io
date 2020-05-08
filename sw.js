/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","820756e8ad09121710472485621d7144"],["/Advanced Swift系列(七): Strings/index.html","44f3d808c63577383314e241526eac40"],["/Advanced Swift系列(三):  Optionals/index.html","a08e716d5d88332cd3f8fb012c2f92aa"],["/Advanced Swift系列(九): Protocols/index.html","717556f61506ad50af021d14ebd7ff45"],["/Advanced Swift系列(二): Build-in Collections/index.html","cc82691fe378b81fee42939d4914648e"],["/Advanced Swift系列(五): Structs and Classes/index.html","49dba50b64da28df3efc5e4984b5ee72"],["/Advanced Swift系列(八): Generics/index.html","0ca3ad4b04c1b9762552345b4c4a1339"],["/Advanced Swift系列(六):  Enums/index.html","77f675073d5dfe5e9da5235e7f16a6f7"],["/Advanced Swift系列(十): Collection Protocols/index.html","7c504d86161bb5c7c061a924552625c0"],["/Advanced Swift系列(十一): Error Handling/index.html","1bb87b79df7a0383a3f13ea5636c66fe"],["/Advanced Swift系列(四):  Functions/index.html","e23acf346c43fa4cf3da5e932b80ac48"],["/Functional Swift 初探/index.html","8e78e3a4388db4be655aa651cb4daea4"],["/NSCODER和SWIFT初始化/index.html","68bdb2512d90fd5053fd85cfc9affae8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","abe037db6f82897142ea7ea0688f7c88"],["/Swift CompactMap vs flatMap：差异说明/index.html","9b0ff02d2b9d092457e20570c1c3b325"],["/Swift Grand Central Dispatch 深入实践/index.html","f6129b18052829f23ee9e4e58c9e8e37"],["/Swift Lazy属性初始化/index.html","10b2bcc6c5f9dd43551033a44b14d7c3"],["/Swift Promises 初体验/index.html","7a2352ba82dca5c7f76daca0c3f29abe"],["/Swift Promises 探究/index.html","924a7d413df0a771047c999228ff1a85"],["/Swift UICollectionView使用指南/index.html","9e8828de07cf70c6b1c166c8ac3d09f0"],["/Swift URLSession 和 Combine framework/index.html","927c840f899d28388fc3fd74f6c1526b"],["/Swift 唯一识别的视图/index.html","ffb1b323b44dafc88d013bb1b69fc7b2"],["/Swift 如何学习现代UIKit？/index.html","e8c7af4520384c00afaf85630acf37a7"],["/Swift 用 compactMap 替换 flatMap/index.html","2c4e28516517cabc6c76ae34998b0623"],["/Swift 选择和播放视频/index.html","db30e31bf7f47248fdc82e0521db5e09"],["/Swift中UIColor最佳实践/index.html","c9099598a53577069a4c1ca46358a0b0"],["/Swift中快速简单的工厂设计模式/index.html","4c063cc910fc9627a2e8e5c27e9c04df"],["/Swift中构造函数与静态工厂方法的比较/index.html","b5fcf58792d85a9e13ff16cd3ca339e9"],["/Swift中的UITableView教程/index.html","5f5b7f175e9da513383005d338b338ce"],["/Swift中的懒加载模式/index.html","094a4e1efe2c5b6f4e436369aa681f34"],["/Swift中的模块和挂钩/index.html","5b86af68783e046fa0c7c774f0dd1a68"],["/Swift使用布局锚点添加约束/index.html","ae050eb29208a6ec9c682bcbd8764b07"],["/Swift依赖注入设计模式/index.html","76efd063233f14473a0563e1f00b3cd4"],["/Swift关于Dependency Injection (DI)/index.html","f7bc5cf83650b7f98f013de7d5600b87"],["/Swift初始化模式/index.html","f77c884213372a218add515392831b60"],["/Swift单例模式/index.html","bc3b47cf64efcd445facdce0ca5933b8"],["/Swift原型设计模式/index.html","84c4c2ad2e8fee1785063b01e355f12a"],["/Swift命令设计模式/index.html","8c2315e5d25079523b5857f64e160881"],["/Swift外观设计模式/index.html","cfc622721ac013de9f959e480f045fb0"],["/Swift委托设计模式/index.html","3514987cd644bd9b1fd39b62b43ac15b"],["/Swift对象池设计模式/index.html","44c782ded040f88eb1dceca2be93a92d"],["/Swift工厂方法设计模式/index.html","b7c2ee7ac61b91516ee0c2590fd2e2b4"],["/Swift带闭包的懒惰初始化/index.html","4871b29cabf215208f676b82afa008b3"],["/Swift抽象工厂设计模式/index.html","b56c62decebd41a6d5efa6cd07ee2c3b"],["/Swift掌握iOS自动布局锚点/index.html","658a09dd726e433cb52202d8ee270f53"],["/Swift支持旋转的自适应单元格/index.html","06c079074d271ce5eba351cc0eb289df"],["/Swift枚举值/index.html","5ad4515eac5041440e786a5f3c3ae47d"],["/Swift生成器模式/index.html","5fb716b36d5c187f35f1454401ba6c51"],["/Swift结合Xib文件自定义UIView/index.html","b29224aa80eb19af3d9618e21bf1df8e"],["/Swift编写的20个iOS库(一)/index.html","f1c95cd3ce99a252f770baa121298003"],["/Swift迭代器设计模式/index.html","180c7c9560b4842e8f49a3f929656361"],["/Swift适配器设计模式/index.html","496a359ffb1c71e757ea021c3072e036"],["/Swift静态工厂设计模式/index.html","9a0cb7fde7f514ca7c585ecf90ec7913"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6fe307a5c0355c88052502cd796b42d3"],["/UICollectionView data source and delegates/index.html","fedb3a88392ad7c4ac79e4dfbca1ed29"],["/UIKit初始化模式/index.html","dcae6cbb5f4f9ed31e10d452b41222fd"],["/Ubuntu18.04替换国内源/index.html","822f138d5c7ad0d695e64d09af65d539"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","bdfd73f6891be9b4a3aa430e4c2bbf6e"],["/Xcode扩展/index.html","20e5ff6982919d526a9629b137e7bd6d"],["/about/index.html","01c22730f06fa12c8f315c2f525dc1b9"],["/appleOS的Networking示例/index.html","381f93787f38412d0ca0e0855a7c6e35"],["/archives/2020/04/index.html","545d580cfe41bcde00e00720f81f4793"],["/archives/2020/04/page/2/index.html","1ce5e01ecdb705762249cadbb1c38519"],["/archives/2020/04/page/3/index.html","10e875b8b7ffd91c32b7cd60e1c8948d"],["/archives/2020/04/page/4/index.html","9e131ee1d31c384a1355d2fddde23875"],["/archives/2020/04/page/5/index.html","23eba787f2fa5c7201ea97cfca22b832"],["/archives/2020/04/page/6/index.html","818d355de2f0184ae1a79c6ca9e1d2fe"],["/archives/2020/04/page/7/index.html","c100d3c66916176f7a93f3f3b2fb2e8c"],["/archives/2020/04/page/8/index.html","fbd25d8e53290fb81debfc071b77795a"],["/archives/2020/05/index.html","c2b974abf16eba7dd84b453deb6e0dc0"],["/archives/2020/05/page/2/index.html","5a1e581907179094223cd9cbba10a664"],["/archives/2020/index.html","e2d52e2c91f5c50ae3962af16f91934f"],["/archives/2020/page/10/index.html","3d6d47329c35bfac0472938e1fc4d5fe"],["/archives/2020/page/2/index.html","96fd885ce38481dd159fd3bce18d4ee9"],["/archives/2020/page/3/index.html","b4a83f5579a0479c4fba74fadf443b2d"],["/archives/2020/page/4/index.html","e2211af8e08fe170870499e5203da159"],["/archives/2020/page/5/index.html","ab4ae27ecb0d0a7be5d515da1829c3e8"],["/archives/2020/page/6/index.html","7b3b9cb944ded7be694711c7f6806f79"],["/archives/2020/page/7/index.html","af224325c338bcba08f9d3ec0f892b3f"],["/archives/2020/page/8/index.html","886be80f2278dd90792cf2487c9ddd1e"],["/archives/2020/page/9/index.html","9e50ba2ec10680abecc6a2f87f449da2"],["/archives/index.html","9eac557f606135d2614ad143eecb67d3"],["/archives/page/10/index.html","1a0a00408bb72bce786b439ee170baf5"],["/archives/page/2/index.html","be74845a2ddd0b58cbf0990ce50c0cd3"],["/archives/page/3/index.html","b35eee3ced748fab781092028de3d0a6"],["/archives/page/4/index.html","173e8beeaebdbf9a3e6454294d2a3460"],["/archives/page/5/index.html","db0e4ca28e249b72ce6e42a504d036ee"],["/archives/page/6/index.html","bec8add370b0baa31595c36baed7bf8c"],["/archives/page/7/index.html","c4517d3e5b2f697c2eae5fbbef039f1b"],["/archives/page/8/index.html","be33426dd73689c6637eb63ffebd1f63"],["/archives/page/9/index.html","3630da2298f8745cec4719ea697ff595"],["/categories/Advanced-Swift/index.html","e42ab6f6dcc83d9edca5c13e8e01b6d3"],["/categories/Advanced-Swift/page/2/index.html","2652faf02098df6771d5c59845ceee46"],["/categories/Codable-protocol/index.html","06a7a7e46c5060770bd39f29b8f2991f"],["/categories/Combine-framework/index.html","7f31a2a2452928414e3b6277e1e7ce07"],["/categories/Combine/index.html","c10e93c02765a3937e6e224a4288dfe5"],["/categories/Grand-Central-Dispatch/index.html","0729886addc79a6f1e32d6199611954a"],["/categories/Hexo/index.html","9091847df8d2a60125b98338bb98e607"],["/categories/Promises/index.html","fccf35f881aa017a425cdecf2cca8c91"],["/categories/Result-Type/index.html","d4c469946edba1e161cf79d4ab75c67f"],["/categories/Server/index.html","4be1d6bc6beced58860902cd9771489b"],["/categories/Swift/index.html","07576c265bec70431effe1dfd605a8b0"],["/categories/Swift/page/2/index.html","f209fa38b4194e472baf44986de1c105"],["/categories/Swift/page/3/index.html","bff94a0726caba6b40069b0c25a6d64f"],["/categories/Swift/page/4/index.html","0f2fb094d393a9108ce5f5a6b09a6ee4"],["/categories/Swift/page/5/index.html","3a94959fb11b12bb45fa94733211bf6f"],["/categories/Swift/page/6/index.html","74dd652f03454d7f74be0a48095ae5d4"],["/categories/Swift/page/7/index.html","8e59c4940fc42613f4100d3a677eafab"],["/categories/Swift/page/8/index.html","f8329f8b8cab2d0718684ff1f3a71cfa"],["/categories/Swift/page/9/index.html","6cb94e3cc62a68a79fb4df94e7ca395a"],["/categories/Swift5-2/index.html","061f39eccbb5ca36f112f63f1d2da48f"],["/categories/SwiftUI/index.html","5d52b9b82f64ad27e3da50e240839af5"],["/categories/UICollectionView/index.html","51b342c2fcbedd0eaf5eeef076d212e5"],["/categories/UIImagePickerController/index.html","521815a97388ee2526d2379e01a52e5e"],["/categories/UIKit/index.html","4ab42c47d1c7a1779a7fdb3c56e8f87f"],["/categories/UIKit/page/2/index.html","4ede06f0bb047899696e24ae9feab8ec"],["/categories/UIKit/page/3/index.html","e906cb3eeeb84cdc242ad05f9b88c0db"],["/categories/UIKit/page/4/index.html","39f54dacdd86bfb04ab0ec4fa15cb06c"],["/categories/UIKit/page/5/index.html","ca5e0d85dd5ddfa92bc43093d63444c8"],["/categories/UITableView/index.html","85712f78ea2ad158d83c21dab86b421f"],["/categories/Ubuntu18-04/index.html","9d577dec3f393758e713e492e43981c1"],["/categories/Ubuntu软件源/index.html","5cb164c891bccff82ead6e00c8725a7f"],["/categories/Uniquely-identifying-views/index.html","0c006b74596deee4fabdf7b7693d8706"],["/categories/VIPER/index.html","90d03fd0c8eb2434d0fe13f3b6332cce"],["/categories/Vapor4-0/index.html","de49f544b57120acf535a1004302b730"],["/categories/Xcode/index.html","a8fc030d5ff193d14a22f1c468a43bc5"],["/categories/appleOS-Networking/index.html","62a35afaad1ad972a70c8ff720d567f5"],["/categories/enum/index.html","4f3734e62768b539be3d96b933ee926b"],["/categories/iCloud/index.html","768d38fd5444d6373cdbaba1f6bd791b"],["/categories/iOS/index.html","46cddd84e506c8022ea63feb3a3f91cc"],["/categories/iOS/page/2/index.html","35791d6468e6f32121f1b67a21a4eeb1"],["/categories/iOS/page/3/index.html","3ac066dcf1c6259e9d004ad66b1e7549"],["/categories/iOS/page/4/index.html","d6b9a830b75aae4aceee46ebf2cea8f0"],["/categories/iOS/page/5/index.html","caa577372d9a13a442f99214c1909a79"],["/categories/iOS/page/6/index.html","6ab777907413da90e5a163376ca06e83"],["/categories/iOS/page/7/index.html","6ffa0d61f68cfb127e65bd98e4376af5"],["/categories/iOS/page/8/index.html","18a0b996b5f2f0ee48daa3a54bcd91cf"],["/categories/iOS/page/9/index.html","4c80b20aa2ac8d3008ba556a96b24172"],["/categories/index.html","a753c6800433a2b72ffb61436ddbd33b"],["/categories/random/index.html","c60e7c11c93289ed5850bfa2789b22e5"],["/categories/三方类库/index.html","102c0af225c65a810648c2ed0c2e8e19"],["/categories/函数式编程/index.html","12dcaf90352295cacdc4d87545a27a30"],["/categories/子类化样式/index.html","f792bf0c4aa9ac13b50014760f4e9d4d"],["/categories/架构设计/index.html","e8fa11564f81b261dfb66952ede773fb"],["/categories/用户体验/index.html","87149601ba7b5078f8fb8f7c040055c7"],["/categories/设计模式/index.html","00a440a2e45985ec5ceb6ba6c7031220"],["/categories/设计模式/page/2/index.html","fcda2035f21912cad0a0dd29ca01d671"],["/categories/设计模式/page/3/index.html","c81d76908315681d8bf701074ebfcb15"],["/css/main.css","b982580ffb0d4bd877c771e95388b0e2"],["/hello-world/index.html","ec9dbbca960e56986f741db9f83279df"],["/iOS VIPER架构深入实践/index.html","c4ea0f51b1d7a4ef3b8f45e42407f04a"],["/iOS 自定义视图，输入表单和错误提示/index.html","bfe8a18288d40531e8c046ab6b76ca30"],["/iOS如何使用iCloud文档？/index.html","410ea5b919c3d9e16f2514398e8b7d6d"],["/iOS子类化样式/index.html","67c2fb49ceac0cf4aedead1ae5a9a809"],["/iOS自动化布局编程/index.html","ae10f50d54384d1ac5a1499db3961136"],["/iOS自定义转场(By Swift)/index.html","8e453e6999d619e352e711372c16c726"],["/iOS项目架构：使用VIPER/index.html","fdbcf208f025eb2e7151d76e05ad030b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","adcb2eff8f9059bac29cd7c645767aca"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","fee0ba0799db1253bede6eb53aa108ac"],["/page/2/index.html","97e7a54ece25dad844e9e25f2f749c16"],["/page/3/index.html","f7da3c6d75428132c1cb3a581b5787d9"],["/page/4/index.html","7bbaa84d7b690a6377ee8bb0d9556bea"],["/page/5/index.html","1c8321a0fe3ed626f73d2ae60917cce6"],["/page/6/index.html","c13802706770b316b322476d5f4e09ab"],["/page/7/index.html","a87c816aeca5aae7c17fcb06a4cac922"],["/page/8/index.html","29234c05cf5fc585420b7f28d92f408d"],["/page/9/index.html","c76d242b2b50ea5012c9b50862b10736"],["/schedule/index.html","a27847ddbba21834bb120f3f4e75ecd4"],["/sw-register.js","0bfddade13521d884b36b61d5d3bce98"],["/tags/Advanced-Swift/index.html","3bb43d5c07b65baf0a6255b5968a06e0"],["/tags/Advanced-Swift/page/2/index.html","40d4e7e23f451c93979f4fb47de4356a"],["/tags/Build-in-Collections/index.html","ca4d8a2a9d8eabd9ce162b9465eacc33"],["/tags/Codable-protocol/index.html","78407b590a1896e3e317d07ca6002c2d"],["/tags/Collection-Protocols/index.html","1f75aa8ad1f9d01fd4b1ffe0e064fb16"],["/tags/Collection/index.html","1cc9540e6ee09e496d574fd6a6496579"],["/tags/Collections/index.html","8601122aca5cc2bc2d2fdf02b9df4d39"],["/tags/Combine-framework/index.html","13f332150fe8b7f3c653d0d31906df6e"],["/tags/Combine/index.html","7f0e0ceb4cf4335eef48e4ffdaca8cdb"],["/tags/Dependency-Injection/index.html","3d40556149f4ed5f3b2f0b653ab2ce7d"],["/tags/Enums/index.html","1ba224aabd4434a7cdbadef40d9e75ca"],["/tags/Error-Handling/index.html","97c8ab99b09f5c1529f5ad5fcc8cb9ea"],["/tags/Functions/index.html","4cf6b3d7d1c313c3ca83da2e7bdca10e"],["/tags/Generics/index.html","03951dc49cc6c089bace1c2c089e209b"],["/tags/Grand-Central-Dispatch/index.html","c76c80799218cf2cc3c3f4da52d4ab79"],["/tags/Modules-And-Hooks/index.html","39a13b2c6b2bbbd2ca29a173d068f171"],["/tags/Optionals/index.html","734fa89771c707499912c69256c9ef3a"],["/tags/Promises/index.html","f7528465126c99f9f321745ee59cf36f"],["/tags/Protocols/index.html","2eefc743e63d206525a336da36397b14"],["/tags/Result-Type/index.html","1096786375dfe09fe9eb88f187195be8"],["/tags/Server/index.html","f8b893e28dccd623a423c745841f8fe1"],["/tags/Strings/index.html","2da26548a3e37e72c59522586c7fe7ec"],["/tags/Structs-and-Classes/index.html","2d51309ad3bebd616549d1013f6a1611"],["/tags/Swift-5-0/index.html","5b037b57382334690f732d9976d88e2e"],["/tags/Swift-5-0/page/2/index.html","32532812b623a999f6891f67b880bf66"],["/tags/Swift-Package-Manager/index.html","b93869a3425cc343933ceddbf335d7d2"],["/tags/Swift/index.html","e15fc6f0905adafbeff0e16992f43c67"],["/tags/Swift/page/2/index.html","bdc1ffdcb80db2de62c9a066510c7eb2"],["/tags/Swift/page/3/index.html","7a7b487f6c0675c219cc51a33e9cd8fa"],["/tags/Swift/page/4/index.html","71165c08bb4f09d2fe2ed43af5f0ba4f"],["/tags/Swift/page/5/index.html","fa3353994be6180b5beb968a68a9342d"],["/tags/Swift/page/6/index.html","09d09a7519a18b72fee2a79e30cb082e"],["/tags/Swift/page/7/index.html","2d5eaba4515375e9fb7d8de991d839d5"],["/tags/Swift/page/8/index.html","666429313d81c3a0c21e496016fe17f9"],["/tags/Swift/page/9/index.html","9b3c974c95c40474a68887894222b569"],["/tags/SwiftUI/index.html","40462e58fd6a9f219c4b92aef0ad915e"],["/tags/UICollectionView/index.html","1496cb4d51ca1611c02dd84b72653bb0"],["/tags/UIColor/index.html","0b544dacc0396fdd57b3cac3dcfbc11b"],["/tags/UIImagePickerController/index.html","9b769fcb4233dd97a0c9ce2af8ad59de"],["/tags/UIKit/index.html","a8c34cb38fbf6d710099b25e76ff9bc4"],["/tags/UIKit/page/2/index.html","52249cf2af853a4e3759b265e6275bc3"],["/tags/UIKit/page/3/index.html","f192296d61260971681f183da415a84e"],["/tags/UIKit/page/4/index.html","cadaaa8fbb389974055eeee47ce9588f"],["/tags/UIKit/page/5/index.html","567835d34e8dcb49a810c5c7f015b1a2"],["/tags/UITableView/index.html","ef2b6e22d11ee0f92e4f3f0788d430f7"],["/tags/Ubuntu/index.html","6675cb7a0da2c2b9af573274a4eb1656"],["/tags/Uniquely-identifying-views/index.html","bcdaf3b725a0e8f493bd53cd6a0b7daf"],["/tags/VIPER/index.html","5baa1e340069d572ebcb785ed0985d50"],["/tags/VMware/index.html","c67232eb0af6951b0588567def25a5ca"],["/tags/Xcode/index.html","aa02967e62616658f839a30e20743c0a"],["/tags/appleOS-Networking/index.html","f99d12757756f5f42135e27b1e33b0ce"],["/tags/enum/index.html","d446a3405f8c3cbaab5ed1326d3997e1"],["/tags/iCloud/index.html","98d32e574b39f4b0a85454ce181a6840"],["/tags/iOS/index.html","380ece8099466e9c0e8ff60881cfd2a3"],["/tags/iOS/page/2/index.html","c71aeeefe2456acef6a2a621a9169ce2"],["/tags/iOS/page/3/index.html","04e038a8bbfbdaba18517698b82ea315"],["/tags/iOS/page/4/index.html","05349271fb60e402a8e597ee37ab5d12"],["/tags/iOS/page/5/index.html","fb19bae4f9eef610d2687a781a697bc1"],["/tags/iOS/page/6/index.html","0abbb313c1b4127f96fd8209c912226e"],["/tags/iOS/page/7/index.html","b58ea71e62c8f799069f299c8624deec"],["/tags/iOS/page/8/index.html","9fa0bc7d2efa32c4d471809ca1ac0e67"],["/tags/iOS/page/9/index.html","62f19ecd6b9b883df5ab9c9c3be01aa3"],["/tags/index.html","8d49393653ea666a190c770caf74082e"],["/tags/non-optional/index.html","7d7ce62594fbcb2dd29102042d78b46a"],["/tags/random/index.html","beea12e50248a77c75f700ba1876eb7d"],["/tags/transition/index.html","938671dc75b23a5d5be287efac0d04f0"],["/tags/三方类库/index.html","39523c94d44cda5ee87c275c65a175c7"],["/tags/依赖注入设计模式/index.html","641aacf9148cdd5cdc56f6c9cb57d38f"],["/tags/函数式编程/index.html","fde6642fdee71c8726cf3f0453466a46"],["/tags/初始化模式/index.html","9cd463a3adb9bc9d64e03a103ec1f77c"],["/tags/单例模式/index.html","328d9fb8954e2c0929ffffa4a1376f77"],["/tags/原型设计模式/index.html","9a5365dc1fd8c8b049a6316ee39f1e3c"],["/tags/命令设计模式/index.html","c77046b43b7f97d33f55042e1f7ab71d"],["/tags/外观设计模式/index.html","1c846ae2818d84d6e625746a31742a68"],["/tags/委托设计模式/index.html","1212cdc749bdd4ce7cf7298ff9738bcf"],["/tags/子类化样式/index.html","59cce044b092ae96a15128d603c3e393"],["/tags/对象池设计模式/index.html","342b5a2d25207ecfb4cf6f8240707ebf"],["/tags/工厂方法设计模式/index.html","c5aef0f69887c5b55da6f97a20841d74"],["/tags/工厂模式/index.html","517ef7b5fef3c74cd0c94c32a945f7ed"],["/tags/工厂设计模式/index.html","44746d0cb3cd49916c3bd3905a9ffe93"],["/tags/懒加载模式/index.html","6d43a6c60b3125a38f42d9adb97c8ebd"],["/tags/抽象工厂设计模式/index.html","0cb1fdb71e9c013c1112a863f5faa260"],["/tags/构造函数/index.html","ee6b9d34c222e01ce02666a677e2415a"],["/tags/架构设计/index.html","4f02a25e71cd4f8cf131117fae29b094"],["/tags/生成器模式/index.html","b01a12fd88905e363481e74cdcaac1ed"],["/tags/用户体验/index.html","7b3b4b1302345ab35ec464041c326952"],["/tags/自动化布局/index.html","e790b0bf1c11b803a25e81f7a0b15c9e"],["/tags/自定义UIView/index.html","d19d51bd793e88f54c1be506403ac033"],["/tags/自定义转场/index.html","fca8fc1b3d178a471f0064eb21d954a1"],["/tags/自适应布局/index.html","4c2e84ef2f62daec0a436a13afee791f"],["/tags/设计模式/index.html","598564c7f5818aeb70991b019a547f10"],["/tags/设计模式/page/2/index.html","a919e55534b1fc13e56b1902b1b2c714"],["/tags/设计模式/page/3/index.html","edea34e53eb69c55ca71826ef70bbd5e"],["/tags/迭代器设计模式/index.html","bd54bdd13528172e66d38a761bbd3bc3"],["/tags/适配器设计模式/index.html","7d19c9b7820c2808b6ceabfdb8d7e914"],["/tags/静态工厂方法/index.html","69dee042d245dd80f6ccb782c32d292c"],["/为iOS应用构建输入表单/index.html","a56bbb39b41d0463736510208fa0022e"],["/产品开发的幕后花絮/index.html","2f1fce2419959c017b7a4a091fe1eec3"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6291b6ed95b3df4aa36373150dfb9c10"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","e4d630c24a60033f2356ee88c0283e81"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","21b47dc5f75ebede361120b98418a14f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9e48704c53e4eed57bcb6d13e43d0714"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","86af468b36cacfe95a42c4370d85552b"],["/在Swift中创建自定义集合/index.html","f03e011f55a993e53cacbfbb658e664f"],["/在Swift中处理非可选选项/index.html","69eccad7f26d10d631509d7c540958fa"],["/在Swift中生成随机数/index.html","3093bddd73213259a4429238d94f31f3"],["/在Swift中重构单例模式用法/index.html","b9d37459eeb66f938c771f16fab0ae08"],["/如何为VIPER编写服务？/index.html","0036a286de403e5d8ea140052ebd9140"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","2d06d8976533e995a1264d270c56738a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","6916f661aa581e5ac3f45d099e2721a9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2c8f15444a2e68195313f4cb2d67d67d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e9c7aa92f3bace0241363f2ae483aec8"],["/掌握VIPER架构/index.html","bb7e88b00fb098e4a21d2b7806efbfea"],["/揭秘 WordPress Hook 系统/index.html","4a8fc0e52e575f96eb5e45b7685b22bd"],["/比较工厂设计模式/index.html","9e31c71c2796e5815bf4adf3937f6b2a"],["/深入了解Swift中的Grand Central Dispatch/index.html","0884106150dfd8c22c0e8c22fdd6d84a"],["/深入研究Swift框架/index.html","946002413b374390e6a63a211bad3cfd"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c5258eb84bf6c1ddf32d4cfaf00d784b"],["/选择Swift而不是Objective-C的5个理由/index.html","333bb454da8d22f6266325924c659302"]];
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
