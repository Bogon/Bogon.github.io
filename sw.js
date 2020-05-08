/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","dd4a4665b687711fb8edbeb9649b7a34"],["/Advanced Swift系列(七): Strings/index.html","8875efc483c26df3f09008606205c53c"],["/Advanced Swift系列(三):  Optionals/index.html","919a9ac292330a0e9c04ea2b3acefb96"],["/Advanced Swift系列(九): Protocols/index.html","f725c1ed456b67a2e768d8b94a8b7c8f"],["/Advanced Swift系列(二): Build-in Collections/index.html","86eb2aef1800e3c97b2d2b0221a31577"],["/Advanced Swift系列(五): Structs and Classes/index.html","27fae693595276d7e7f18e817b8ef63a"],["/Advanced Swift系列(八): Generics/index.html","3e64a4c8d07d302b3d3667fba7188079"],["/Advanced Swift系列(六):  Enums/index.html","d5f1c3e84ec0d4fb9dbfce8c0613e656"],["/Advanced Swift系列(四):  Functions/index.html","9368ebd86c6d8536621e5b6988ef9a06"],["/Functional Swift 初探/index.html","7a3b8bda532bba2114118a633a00dcbb"],["/NSCODER和SWIFT初始化/index.html","b5a6b23b7b7ed197ea93e1e3ba795ddc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","86efaea366aa86de6bc0947fb8031d6d"],["/Swift CompactMap vs flatMap：差异说明/index.html","963a49ca0453dcc52d3e440ca68ecbf7"],["/Swift Grand Central Dispatch 深入实践/index.html","a2d3c67d7e4c13ed83585759b7a10838"],["/Swift Lazy属性初始化/index.html","0677b62560f122bd2f2b473771781b85"],["/Swift Promises 初体验/index.html","8d93e03b25bc97a4e2114f09a02c97d9"],["/Swift Promises 探究/index.html","d738ee8512c757cda95c876589394ae4"],["/Swift UICollectionView使用指南/index.html","a05f71060fbdd0413df4ad1f31305012"],["/Swift URLSession 和 Combine framework/index.html","ff531ec636e0ba5fecfc27eba7ae12fe"],["/Swift 唯一识别的视图/index.html","11d161c3e697ae72a2795f5f4f250d3a"],["/Swift 如何学习现代UIKit？/index.html","a64b770a589c6cf4b638cba21c2df8e0"],["/Swift 用 compactMap 替换 flatMap/index.html","b907cc938520e98bd95a505807b753fb"],["/Swift 选择和播放视频/index.html","5e65e006891c62bec428ea122fc6f7c4"],["/Swift中UIColor最佳实践/index.html","cf22d5a4c11d3008d54f62b18cf17aec"],["/Swift中快速简单的工厂设计模式/index.html","0535209152ad73f0d516058831c56c57"],["/Swift中构造函数与静态工厂方法的比较/index.html","489411575d6b07fe2bd2b35795d16985"],["/Swift中的UITableView教程/index.html","6263ba1c5fbd1d172059f6b14374179d"],["/Swift中的懒加载模式/index.html","1991990cdf4ee6909a1ded553a2a13ff"],["/Swift中的模块和挂钩/index.html","b38b99d7884034dd157f7641f25ed971"],["/Swift使用布局锚点添加约束/index.html","e9c61c32359a89518ba195df88b4344b"],["/Swift依赖注入设计模式/index.html","6351017da4010239897eb541c5830921"],["/Swift关于Dependency Injection (DI)/index.html","3d9877849efba2bfecbb7017eeccb80c"],["/Swift初始化模式/index.html","4e40545266c1e76198a7b13c5ae0b2fa"],["/Swift单例模式/index.html","c46c297593a417af70643e1cd6954c08"],["/Swift原型设计模式/index.html","4a0c02a0ba0e106155296c861940e7e4"],["/Swift命令设计模式/index.html","15f024ad0ea0e48d704a05e082fea31d"],["/Swift外观设计模式/index.html","a99f58a8ed8a0ea413ca6bf3ac617c14"],["/Swift委托设计模式/index.html","a01a040ec6ab02c3f06d339da58cfb2a"],["/Swift对象池设计模式/index.html","5ba2613614102abf783291165ae36b7b"],["/Swift工厂方法设计模式/index.html","fa85013bcb3d889133a2df57895811ea"],["/Swift带闭包的懒惰初始化/index.html","f03d3bc683ae6d6cbef7e61014ba7653"],["/Swift抽象工厂设计模式/index.html","15a91ee7eb392ead049f871ce4c87312"],["/Swift掌握iOS自动布局锚点/index.html","2284b8dcbfffd61b5da669d0a9d2c5ca"],["/Swift支持旋转的自适应单元格/index.html","c69598435af5c4288c548a730c075caa"],["/Swift枚举值/index.html","ed62a12064620c4024949fb83d5ba586"],["/Swift生成器模式/index.html","d813d3beab571e80d9bc31fd242cd0b4"],["/Swift结合Xib文件自定义UIView/index.html","b732a789d71a0bf57f2cf27cac992976"],["/Swift编写的20个iOS库(一)/index.html","4ba5b5abb03a45d9e2d271e5419b9a83"],["/Swift迭代器设计模式/index.html","6731f970a49f1dcefb2a21ebb1042160"],["/Swift适配器设计模式/index.html","363a90517487753d9e43395c2c6ed65a"],["/Swift静态工厂设计模式/index.html","bd34c6d1f23ae273443fe62881556e2f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f5c97ad2a7bad28e2956e38d6d9e28ae"],["/UICollectionView data source and delegates/index.html","a61d16287c9af0479c8f2ece12d20d05"],["/UIKit初始化模式/index.html","b9e1f95f35a70d5d0c4c41c7fb732d1b"],["/Ubuntu18.04替换国内源/index.html","9a535e4312c604b8580327aab3c708a3"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e1a3255df4a20e7e79bc52f7a2c5e256"],["/Xcode扩展/index.html","412ac8c9106a00b3c479672585ac47b5"],["/about/index.html","fe37a2c40f14c3d3293b9032c6714149"],["/appleOS的Networking示例/index.html","5d045d97d20a2dc2d2815a2a5a2dd6f2"],["/archives/2020/04/index.html","0092da216e55bff16e92b1c9d9043711"],["/archives/2020/04/page/2/index.html","87976e9f5757d0a1f4670d48b688287a"],["/archives/2020/04/page/3/index.html","f278f35e7bcc8ec3c1a593bcc257014f"],["/archives/2020/04/page/4/index.html","dcc2467a7262e81d92706a3b0783f9b4"],["/archives/2020/04/page/5/index.html","a7a60bd58025817c64b06219cee66d8e"],["/archives/2020/04/page/6/index.html","6621338cb7ed605cb0967853b00e4568"],["/archives/2020/04/page/7/index.html","b6a6c080f1e1d0476754ee9b494e960d"],["/archives/2020/04/page/8/index.html","1af43f3827cf69f905e42c2506d3162e"],["/archives/2020/05/index.html","aec2f5e4290920724ca791d6b0fa1ae8"],["/archives/2020/05/page/2/index.html","5eac706b541b15fd20720c5a21314536"],["/archives/2020/index.html","ff9129de631f878716a97cfd18248298"],["/archives/2020/page/2/index.html","ebc384089af31d3dc2c74710db8785db"],["/archives/2020/page/3/index.html","33cc734d60948562519d6273902eecd4"],["/archives/2020/page/4/index.html","074d0a5cbfaf4391759501ee21026479"],["/archives/2020/page/5/index.html","b53691a60d25087445f24c32312b3d66"],["/archives/2020/page/6/index.html","48c7c1dc20d81e986ebb20519f0fab40"],["/archives/2020/page/7/index.html","257f0617fdd14a65beb6a477b8f9ea3d"],["/archives/2020/page/8/index.html","be9fe9540c61df6be113ab797ab99f23"],["/archives/2020/page/9/index.html","3fdd74a002cb05395a5a7b02bdae511d"],["/archives/index.html","cd3cef1e947fda6fb213d23d47daed72"],["/archives/page/2/index.html","7ee9f04d5394a75f0948387f910e3a58"],["/archives/page/3/index.html","4d09634d62a1603d9b696b4d3b1ca769"],["/archives/page/4/index.html","76693198dcf6d2527a4350861212a6b1"],["/archives/page/5/index.html","1ce26a1d7c4f90f3eff975c7818eea87"],["/archives/page/6/index.html","4bf430e08e30a8a6905f339c7f6dcafd"],["/archives/page/7/index.html","a2cdf765e586f5789c83ff09ccb30e21"],["/archives/page/8/index.html","8a097ff33fc4b97e6d9da60a128d099d"],["/archives/page/9/index.html","bbc3a24c53289e9e88a74f6eaceff5de"],["/categories/Advanced-Swift/index.html","d2c34c209151a65c81fbf32d32217e69"],["/categories/Codable-protocol/index.html","d98da5dd82da29722be8b773efc11ffd"],["/categories/Combine-framework/index.html","6c49b732f365699552ca9eb0e07f7e69"],["/categories/Combine/index.html","fec54a2dcf7f45875a07ff5c7cf8dfa0"],["/categories/Grand-Central-Dispatch/index.html","73025ffad736ef11aadd42e9d4fa9746"],["/categories/Hexo/index.html","6934766ea71434734527df8ee2c88664"],["/categories/Promises/index.html","0ab06f1a7bc4ebf36649ff107ab89794"],["/categories/Result-Type/index.html","70ef13dfc661125bb60da0ee61f5eef4"],["/categories/Server/index.html","493ac82d51dafe286fa9e8057674a38a"],["/categories/Swift/index.html","9080b0660860d6e18803e79bb96ccdda"],["/categories/Swift/page/2/index.html","990260bed15bd75e1f468b2e296bda90"],["/categories/Swift/page/3/index.html","0cf000d6d9ab2d9efeb6564a5cd2d8e4"],["/categories/Swift/page/4/index.html","d3c6b527a570cd9050383b3078d092c0"],["/categories/Swift/page/5/index.html","d39ea3a17367d0db10298683c9444aee"],["/categories/Swift/page/6/index.html","ff39b8c0ea76d97f9a3aebc7559c779f"],["/categories/Swift/page/7/index.html","085b7815fae17f39d30d64a104924c78"],["/categories/Swift/page/8/index.html","f2a7a2c99c070b8bd6a2fce3b94d96eb"],["/categories/Swift/page/9/index.html","fc5f6008ae789e913a2eb133a06222ad"],["/categories/Swift5-2/index.html","23e2043ea66d98fbfaf8cc5de2826628"],["/categories/SwiftUI/index.html","5a9c367f039bdca047aac584301ebdad"],["/categories/UICollectionView/index.html","3c4b062ad69a75d8d1b1905f67d0d326"],["/categories/UIImagePickerController/index.html","3b3f6e7ebaccbec5e94b5612ce48e689"],["/categories/UIKit/index.html","ee01649f7b92b0f42073bf141f0fb6bc"],["/categories/UIKit/page/2/index.html","b5336d29d83b872c46f4fb2c25942e87"],["/categories/UIKit/page/3/index.html","82047011aafe159e2da9f0902db8f613"],["/categories/UIKit/page/4/index.html","e1c7481a93c900d4744c808b21d87a1d"],["/categories/UIKit/page/5/index.html","259fc0d4ac6005a7a8260f04251d6436"],["/categories/UITableView/index.html","ee369359fddfbd5638150383ad57eb22"],["/categories/Ubuntu18-04/index.html","0bb0b930645cb47713eeb45135d3f154"],["/categories/Ubuntu软件源/index.html","12c0241bacc5c37ac3d6516cc9a33ccf"],["/categories/Uniquely-identifying-views/index.html","089e47133c39a1173d859ba045f9df2f"],["/categories/VIPER/index.html","a3435d22521a437b45c325fc29ab388d"],["/categories/Vapor4-0/index.html","dcdc3f51a5f95b61612a35eaaefec804"],["/categories/Xcode/index.html","7f9faee58d761cc56413f75d9081cc88"],["/categories/appleOS-Networking/index.html","6ec418722bf3e3ffd188de1049467d86"],["/categories/enum/index.html","2eeedc6d001982f2492e3df728119076"],["/categories/iCloud/index.html","2c5e367bd157a6cd35d7267b00ed4949"],["/categories/iOS/index.html","cca1f6cea11dc0d23fa69d32794aa401"],["/categories/iOS/page/2/index.html","1e5effd320fd00147ceaaaa0981ff1b9"],["/categories/iOS/page/3/index.html","9f2d8984a8bd066927379ad2575bd85b"],["/categories/iOS/page/4/index.html","86d2f2f3552e64bd98229f4078332f87"],["/categories/iOS/page/5/index.html","68f31ebd5a30364ec11e9c69e262d260"],["/categories/iOS/page/6/index.html","6e12c8359bf259e66dbb11c28e51340c"],["/categories/iOS/page/7/index.html","88b915ec96a15db31352933daa4038ca"],["/categories/iOS/page/8/index.html","c0f345d72e05a443938f0b3c37c4d6b5"],["/categories/iOS/page/9/index.html","6048c5fedad4912bf5de41d01d1985a2"],["/categories/index.html","a54d32cb2891af6aa05875c74060e738"],["/categories/random/index.html","545f5f8f76c6e6c35a49f250c4361365"],["/categories/三方类库/index.html","486418b48062cdcc35ab113ebd420a2a"],["/categories/函数式编程/index.html","f526a213b39c8e6a3b88e18a33ed4be9"],["/categories/子类化样式/index.html","625c5babb22952af3751a73fe1e65eef"],["/categories/架构设计/index.html","cde71e4e7e6a9f86c0c40437a2a87642"],["/categories/用户体验/index.html","5d3f5a9b826ca9cd5c6598dbe0d106fc"],["/categories/设计模式/index.html","53259ff7545f9c6800ebe62c1f977f44"],["/categories/设计模式/page/2/index.html","0bf8c9a93fc22f98d876d1c3efd8797f"],["/categories/设计模式/page/3/index.html","a17c7f6829652c5e29368d651f08b468"],["/css/main.css","6d526f1a33f5b9bb72793135a4ebd851"],["/hello-world/index.html","ec12362ca2fcfbdc2af4626c670c060e"],["/iOS VIPER架构深入实践/index.html","e35e324ef7195cbdb3a51373c535e88e"],["/iOS 自定义视图，输入表单和错误提示/index.html","676dec4220c5be6b523c6ae1d4c87001"],["/iOS如何使用iCloud文档？/index.html","4d68e12454e35e7db103808161b11a63"],["/iOS子类化样式/index.html","61ce3c7b102b3c4783e4e22859e4e3c0"],["/iOS自动化布局编程/index.html","d241753d9f48137583620f2528f693af"],["/iOS自定义转场(By Swift)/index.html","00f91e48dc8a916f8983df5701753f0b"],["/iOS项目架构：使用VIPER/index.html","1004be33fbf3d244f5ffaf12f0082caf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b6c06fa9f4aa01117f753de26e2a2483"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","98d22bca84402f732819ac3b0af5b0ff"],["/page/3/index.html","50277d2837be6cf602afd67778a7d472"],["/page/4/index.html","e5fc4f52a07fcf43775329386e5d5242"],["/page/5/index.html","d862733ac8770ee4230c384bea535d94"],["/page/6/index.html","fe01388d6358f6055d932d0cabafdc2a"],["/page/7/index.html","7a71aa6772b24e6b153bda1fb9209909"],["/page/8/index.html","814f0c9d436b2aeff62805ec4fccc007"],["/page/9/index.html","efb331ef44a3c01ed23172aa7fad96b8"],["/schedule/index.html","04375f692507825a2115c869faac6713"],["/sw-register.js","9b7429b646702d46eb3e3cc7e99dae36"],["/tags/Advanced-Swift/index.html","10c7f666077a2649f8806962b2cc0670"],["/tags/Build-in-Collections/index.html","a18cf95e1407516a9ee5fb4fd2c9f831"],["/tags/Codable-protocol/index.html","7900a4a2f151fea574a72c7adc470cdb"],["/tags/Collection/index.html","c9cdd6acfa3b82e72cc4eb85612c2d52"],["/tags/Collections/index.html","6048447975ce0e62db482c0a6b86da98"],["/tags/Combine-framework/index.html","32872922db8316f5ae20a7494cb8c799"],["/tags/Combine/index.html","24fd504ba228dd709445ee1a4cce14c4"],["/tags/Dependency-Injection/index.html","11a06ff5294479570206945fe05eef15"],["/tags/Enums/index.html","0cf2c2f84149219f0f704538b2c67bda"],["/tags/Functions/index.html","3177dedf49b73d7249fc76b096ff2bfe"],["/tags/Generics/index.html","32e1b1b98cc54ebca35a34b43f73a907"],["/tags/Grand-Central-Dispatch/index.html","549d78fe05246dc04c9c280ca8e78335"],["/tags/Modules-And-Hooks/index.html","9cb35c6e3be6018eee1777d164bd6ea8"],["/tags/Optionals/index.html","5f2eace610735cc30a46d35619fd50c4"],["/tags/Promises/index.html","67c5299806496b1192a886e67d81a579"],["/tags/Protocols/index.html","56860c1dba44166ba51dc6b68c50fa26"],["/tags/Result-Type/index.html","95c8caffdada8d3e532982a1cae6b710"],["/tags/Server/index.html","c1a64e16688d93dcea2cf07db667a9c9"],["/tags/Strings/index.html","f0ef9d0573bfdf4d22616a8f26d26472"],["/tags/Structs-and-Classes/index.html","4e129ca33454ed366c75f9f9cfd8d7ef"],["/tags/Swift-5-0/index.html","3a8e958fb7475dce18e251c7147de6ac"],["/tags/Swift-Package-Manager/index.html","a87be0946d92cfbdf6a999bd8de72c25"],["/tags/Swift/index.html","cf7a126f6503523b8fd3a424ce0ffc75"],["/tags/Swift/page/2/index.html","ed078c633afab1124b2cfdf8f0e2edbb"],["/tags/Swift/page/3/index.html","3af90c68f6c8751726bdf19d5ad908b8"],["/tags/Swift/page/4/index.html","90072ed9406892bc17922a0339508a11"],["/tags/Swift/page/5/index.html","259f42c5282086ab7ff6164f900c496d"],["/tags/Swift/page/6/index.html","636094667ec02aeffc5ef32b123e5a00"],["/tags/Swift/page/7/index.html","81146eb7c8ea5028839e9c041fefa32e"],["/tags/Swift/page/8/index.html","edbd2fa4bd07f4d2ddd079263fb2cea9"],["/tags/Swift/page/9/index.html","6899463c87beb2ad43322d9807af0761"],["/tags/SwiftUI/index.html","62010ecda82dc4c4e0e1f383c289d7a8"],["/tags/UICollectionView/index.html","5013e869c15fc47d6739024758ad204a"],["/tags/UIColor/index.html","b30dbefc44f417aca6fc12ce057163bb"],["/tags/UIImagePickerController/index.html","fa07d02e014243d4a54e533782056ce6"],["/tags/UIKit/index.html","1945259cb7d69774c7c684aa2399846a"],["/tags/UIKit/page/2/index.html","9f05456a0a123038e561229258a9928d"],["/tags/UIKit/page/3/index.html","cabfb39fb9ba7ecd5d4ac6b838cc497a"],["/tags/UIKit/page/4/index.html","5e5ce7a139e55943d957ae9734ea8867"],["/tags/UIKit/page/5/index.html","9ff8353bfae8b0d2ae0d6718dd88a050"],["/tags/UITableView/index.html","9fa6e74586de046cc4f476db6f8d35b7"],["/tags/Ubuntu/index.html","a1198065eaf7d06745abb188e45bb302"],["/tags/Uniquely-identifying-views/index.html","46b2b55704c21b8d4a2a20d3806d21b7"],["/tags/VIPER/index.html","114bacd0fe34b12d826380a6ddb9e7f2"],["/tags/VMware/index.html","e7722c165a44eb196adc7eb991f25836"],["/tags/Xcode/index.html","bd98a623e686479a1cb18d5b31e103da"],["/tags/appleOS-Networking/index.html","017db6a8cc9b6c15aec98232253daf6a"],["/tags/enum/index.html","5e4385725da70b06ebf311900e226bfc"],["/tags/iCloud/index.html","4b03379533fcf00d6627c1e11c1ea750"],["/tags/iOS/index.html","44b29bcbd439fc0b4d53c7b3e135fc48"],["/tags/iOS/page/2/index.html","473a0a25319e5fea689a69ceab886ffe"],["/tags/iOS/page/3/index.html","a92a04f743e2edeb0cd536dbdda8c0e0"],["/tags/iOS/page/4/index.html","58c78f27a1f9b1358a175772e3e97b89"],["/tags/iOS/page/5/index.html","18c4f27aab65b9b3ba584fc164286525"],["/tags/iOS/page/6/index.html","0ef4b520440c587217f6a52a12cad881"],["/tags/iOS/page/7/index.html","87d72832fc47d0bfaef8a47329f95036"],["/tags/iOS/page/8/index.html","10bb934f87455802a78bc3610759ada8"],["/tags/iOS/page/9/index.html","5a18b11ff3440164f6762ead4df06325"],["/tags/index.html","386333a6500545ef1c48b82d525701f0"],["/tags/non-optional/index.html","e6de0c0578ec8d528d9b7bc8bad437b7"],["/tags/random/index.html","2ffa780fe70b7c82a8395e34cc08c5ab"],["/tags/transition/index.html","e0b60755742676f1f064883a07839ce0"],["/tags/三方类库/index.html","06d855ed58446c330b2f94245f1c58c1"],["/tags/依赖注入设计模式/index.html","555691b6913478643f5ac94ef770c610"],["/tags/函数式编程/index.html","e3ebc1129ed0bd29f9eaad20a471c73a"],["/tags/初始化模式/index.html","789a21fcf34f71a14c9d9cc040a82f90"],["/tags/单例模式/index.html","fab6fd8d47b1cc47545b162d549efb2a"],["/tags/原型设计模式/index.html","4932ac1fe5ae8fc489aab61cb1319b1e"],["/tags/命令设计模式/index.html","cd94fe411346641fd149da0727331503"],["/tags/外观设计模式/index.html","0a9bd2e5c28ef91543a8057bba6c48af"],["/tags/委托设计模式/index.html","4f51952c353ab14a85ec3b6d6ee5b3b9"],["/tags/子类化样式/index.html","b54e83218aebfb7f5390cd88d7f8b817"],["/tags/对象池设计模式/index.html","de1bf4678aaa9e37412360a2339d3cc5"],["/tags/工厂方法设计模式/index.html","6d22e82449ce623d335c045d12fad4ff"],["/tags/工厂模式/index.html","f4a4ebe9a990ce38bcb368539dc2cd15"],["/tags/工厂设计模式/index.html","23de1989b1c29627d3351f688436accf"],["/tags/懒加载模式/index.html","00511b220c4069a04ecd2cfaeef89844"],["/tags/抽象工厂设计模式/index.html","47639f9d68f03af5893bf0a5780c21b4"],["/tags/构造函数/index.html","afb9c506a44e7b7b9c22858b342c62e0"],["/tags/架构设计/index.html","426ad5263670df85f4a504586a7db5fa"],["/tags/生成器模式/index.html","439d4565705b7a1dda81d38f9fa18919"],["/tags/用户体验/index.html","37ec13c873f45eed313d61b401990ca4"],["/tags/自动化布局/index.html","f6d992993f2792746d1c41fd8e9dee8f"],["/tags/自定义UIView/index.html","1d39faa699f2e8ef253eb55187e7a038"],["/tags/自定义转场/index.html","e89e492f1c70531bfd94e3946cf6abf4"],["/tags/自适应布局/index.html","f4fc8dabd0135c489072432ed7454bee"],["/tags/设计模式/index.html","4438b129571e2fe3a9d70e237b668d63"],["/tags/设计模式/page/2/index.html","72a192456c5ba2f9e11d148e4d5cc861"],["/tags/设计模式/page/3/index.html","ef09930149dd7a6ce2a4d186781eb729"],["/tags/迭代器设计模式/index.html","213f48deb77e307c865127eeb1782baa"],["/tags/适配器设计模式/index.html","f08a5f8870fd1e45eb693a8597755f2e"],["/tags/静态工厂方法/index.html","2c9f9decbd73186d4b796c07588449f6"],["/为iOS应用构建输入表单/index.html","599f6cd48037389fae7245a888747c09"],["/产品开发的幕后花絮/index.html","a468813dd21085e3dbcc8e21b1898907"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bdfa8c6d25d9490b898df39b463aee31"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","377f18e0eef8b22abc77a4825a463492"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5c2bf7b23ed7f3ea4db8a4ce5d4395a5"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0e9c0ef2a40e652e2b82b261aeb14789"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","c62e0ee98c47943e8fd9a2b175c59b6a"],["/在Swift中创建自定义集合/index.html","313836e3a0d8e80a080e9b4b00ec4d9b"],["/在Swift中处理非可选选项/index.html","1602bcd2b672b8e47640afae029690b7"],["/在Swift中生成随机数/index.html","a0c0fbd265dbe3af4b195ca68a4f4746"],["/在Swift中重构单例模式用法/index.html","bd1ff8ba6d0981a3481b08c53e074f00"],["/如何为VIPER编写服务？/index.html","f7b62a880c3d75380557bef02fd1496f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","24958045ccb1565447e361c98baf2efc"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","a9b80154d6a7c9c362f1505ab0900aaf"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","72f42437359db3d61f5c15443a29351b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","5f712232a79915b8a8bb6aa5601bac42"],["/掌握VIPER架构/index.html","f334345897b1f6ffc0f1778723f88464"],["/揭秘 WordPress Hook 系统/index.html","dc2fae6f8fb30d4ac5a180b1b2ea76e3"],["/比较工厂设计模式/index.html","10c4015109ec49ef519438005850bd4a"],["/深入了解Swift中的Grand Central Dispatch/index.html","410f22b03c0c68807bc80b9a50839cad"],["/深入研究Swift框架/index.html","c991df2a64323046354ff7dbf1e79c54"],["/适用于iOS开发人员的VIPER最佳实践/index.html","45786874509dedde1b14cb238824e636"],["/选择Swift而不是Objective-C的5个理由/index.html","8c2c7d5e513215e9df8f756dcfa7355c"]];
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
