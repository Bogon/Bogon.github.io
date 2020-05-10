/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","4cab6c79d4ec5268c0167781408eeafe"],["/Advanced Swift系列(七): Strings/index.html","e2b13168baa95b36c773cd5e2c2c23d7"],["/Advanced Swift系列(三):  Optionals/index.html","ca3942139176aadb924e9c92ede45fda"],["/Advanced Swift系列(九): Protocols/index.html","74f831d0ea829cfa147ace50b694ad82"],["/Advanced Swift系列(二): Build-in Collections/index.html","1139ddd02b6cf7c9d505b098f24827ce"],["/Advanced Swift系列(五): Structs and Classes/index.html","7dd7c5ca9a1ae1f24f0a13cc84e71b37"],["/Advanced Swift系列(八): Generics/index.html","b63057df07f821d060008ee9b4c56c93"],["/Advanced Swift系列(六):  Enums/index.html","8592bf24eadc34eb85c39b0ba57f1825"],["/Advanced Swift系列(十): Collection Protocols/index.html","bae81da05acb95b0c51d7669e0666c96"],["/Advanced Swift系列(十一): Error Handling/index.html","8956af6c578967495e5d188ff5fb4953"],["/Advanced Swift系列(十三): Interoperability/index.html","cd0fc1072077a4939bb265ba7a8ad17e"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","1f7267aa8d6ec0356ef7fb8512e0610c"],["/Advanced Swift系列(四):  Functions/index.html","d88ab920565feb25c2d818686579107b"],["/App Architecture系列(一):  简介/index.html","55de69bedaece66a5389dd828c50052c"],["/Functional Swift 初探/index.html","070176bde6024e56bddf180f7f86f33b"],["/NSCODER和SWIFT初始化/index.html","022a6a77df619e8a48cbb33947546b65"],["/Swift 5使用UIImagePickerController拾取图像/index.html","1b90bc3f5376cab4b162b1848cf4a129"],["/Swift CompactMap vs flatMap：差异说明/index.html","6b82b739d45edb62734c2ab53d73a48b"],["/Swift Grand Central Dispatch 深入实践/index.html","fa3b7f4a035780fda879a29a4f798ed7"],["/Swift Lazy属性初始化/index.html","601626574f6fbb6682c0dac9322fba8a"],["/Swift Promises 初体验/index.html","6ecfe9301a0c1f2d8275fdb301ea120b"],["/Swift Promises 探究/index.html","f76da79a14c0bdd864c18f95e4a429f3"],["/Swift UICollectionView使用指南/index.html","d773291808c89839198d1a3fdc56c6da"],["/Swift URLSession 和 Combine framework/index.html","ac909da2b92b8a3bc2f5feb8f232baeb"],["/Swift 唯一识别的视图/index.html","276e157eaf2eb217e8bb7d45c4234f49"],["/Swift 如何学习现代UIKit？/index.html","4667dcf5f7a6a372dfaaf00b54ec5353"],["/Swift 用 compactMap 替换 flatMap/index.html","4f18239ee1d2b326d7ae8a912f7b8bad"],["/Swift 选择和播放视频/index.html","565b8c8b2110fd2bd936e1e5850d2e66"],["/Swift中UIColor最佳实践/index.html","b74d6dde6450d49d52408b891558cbcd"],["/Swift中快速简单的工厂设计模式/index.html","5cf355076aaeeda9a1c8e813e6110478"],["/Swift中构造函数与静态工厂方法的比较/index.html","63f31e4c57824ebec00d76003b8ae2c0"],["/Swift中的UITableView教程/index.html","76906443a3d3d1856be57f12163a8e03"],["/Swift中的懒加载模式/index.html","78b8a967d44a727dba3a4ba6deed48af"],["/Swift中的模块和挂钩/index.html","09e885a8cf60c0bd2464cc90f2c425de"],["/Swift使用布局锚点添加约束/index.html","324234b57b4feb7afd053ae8106dd36c"],["/Swift依赖注入设计模式/index.html","2c02975b697435b2993d50b43020ac41"],["/Swift关于Dependency Injection (DI)/index.html","ce0580c7a8804a7fe05cf139adca8dee"],["/Swift初始化模式/index.html","6f0f994c40c13cadcecf9620aed10ff4"],["/Swift单例模式/index.html","19b08f31cd9df38d283165fc1f49d423"],["/Swift原型设计模式/index.html","60725bf6a0a99a63f445bcdbf1dfe952"],["/Swift命令设计模式/index.html","7631c75bf09f2fd8408e87c57c53af3b"],["/Swift外观设计模式/index.html","103166c3e3409271db7840084da07164"],["/Swift委托设计模式/index.html","e2ec5c64fbe0dfc8f1ae73b2eb3e4115"],["/Swift对象池设计模式/index.html","9f5eadd33285dec513d18099a7540895"],["/Swift工厂方法设计模式/index.html","d2cc7179b8104cb74f496c91026d95e2"],["/Swift带闭包的懒惰初始化/index.html","634735b9f40c63cdefa0426ca4325884"],["/Swift抽象工厂设计模式/index.html","74171c048ec7025db61c353ada7c38c7"],["/Swift掌握iOS自动布局锚点/index.html","c69746a579ec5b3b3f1ecee3d0cb3647"],["/Swift支持旋转的自适应单元格/index.html","6368d2ca9a91a5819ffc3c0ddd67b906"],["/Swift枚举值/index.html","f162c4e5419f41afa6a11a6761e20690"],["/Swift生成器模式/index.html","1a38b5b26104ebc16246c4dd24cfafa2"],["/Swift结合Xib文件自定义UIView/index.html","840778005661f362400a29e83c729cd9"],["/Swift编写的20个iOS库(一)/index.html","4ee72713c2e7f0daf34d2b7716469e0b"],["/Swift迭代器设计模式/index.html","8b1b503fea65c73eda1caa728f350734"],["/Swift适配器设计模式/index.html","abb858eba365bb3868a0cbdf2bbc268b"],["/Swift静态工厂设计模式/index.html","6cfba68101253542ca2e329565b9a610"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","52744aa6564623c51180593d94a7f119"],["/UICollectionView data source and delegates/index.html","25526f3ef8a93aeec5f85aad7a5d128d"],["/UIKit初始化模式/index.html","a41d57696fab6c3f29961f805f6499d9"],["/Ubuntu18.04替换国内源/index.html","a46999c70189de051782b62bfc934743"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","896bcc97b9476973ddaa25835e3180a1"],["/Xcode扩展/index.html","10e3e3e4900f87a0763c8d1865ffc40f"],["/about/index.html","04c264cf7b974ac1b4bfca41ce9eb068"],["/appleOS的Networking示例/index.html","0e3accb14f57e80cebd87c15341ebdf3"],["/archives/2020/04/index.html","7911563ddbdc4cc7babbdcd088a514ac"],["/archives/2020/04/page/2/index.html","b2cd3adb8875d98adcf176629cafb158"],["/archives/2020/04/page/3/index.html","a2c5f8daadbff68d4f9442a04f0eb71b"],["/archives/2020/04/page/4/index.html","0749ac2bc8901b85838886c80469c074"],["/archives/2020/04/page/5/index.html","9f600d6f899015f05a0e646d638ecf2e"],["/archives/2020/04/page/6/index.html","68b2a92775456ee42401543d4a3ddef9"],["/archives/2020/04/page/7/index.html","8e028a1a0adb250075e7d6de1157bcb7"],["/archives/2020/04/page/8/index.html","d351600216e52d14409c5d83197c2b4d"],["/archives/2020/05/index.html","e19705720bd518a6c571134021ad867f"],["/archives/2020/05/page/2/index.html","4f79ccc9c39240a8c81338c7417fcca4"],["/archives/2020/index.html","b0fb5677015c744866bef732519dd72a"],["/archives/2020/page/10/index.html","42abd13dc32314447964129cfde492c1"],["/archives/2020/page/2/index.html","9f5d5b777755c9d8ccdbd7f9a570c0f8"],["/archives/2020/page/3/index.html","79400e54992a017623de6154b898854e"],["/archives/2020/page/4/index.html","f88dbf26d967620837448702bada2c79"],["/archives/2020/page/5/index.html","3a4be3b129d805ca3a0ad4695447a8ce"],["/archives/2020/page/6/index.html","42e6e5335b79835c76ae7995dded9db4"],["/archives/2020/page/7/index.html","064d06dc1b2a5a84f9e1355f7744920f"],["/archives/2020/page/8/index.html","f26782b5cf8b71b311410f3283424311"],["/archives/2020/page/9/index.html","bcf0b81c73202e2464149f305ef67779"],["/archives/index.html","816db7eeb7eeef9263e2698d547910d3"],["/archives/page/10/index.html","a60c747404b8628692f966ca64877c9e"],["/archives/page/2/index.html","6a88a83d1cbe5526f7e06474ee7ac23e"],["/archives/page/3/index.html","13677e00c76905d75b138e8560d6063d"],["/archives/page/4/index.html","d409e931041ac22f3856791ec455782c"],["/archives/page/5/index.html","f6206e7917a6d327d8906111e247b29d"],["/archives/page/6/index.html","74855da2a825348eb73b8901380a470e"],["/archives/page/7/index.html","7e8582269612ed298d77ceef3d0c5cd2"],["/archives/page/8/index.html","f05996938fb9d3c2b78482c771bdd273"],["/archives/page/9/index.html","35f8138b686e963282b03951a6fd668f"],["/categories/Advanced-Swift/index.html","662af414a1ad86b74c5d34a5255748f4"],["/categories/Advanced-Swift/page/2/index.html","2922eb851cd6bf8d61dec3d2cd62f76b"],["/categories/App-Architecture/index.html","97ab16c1cba3ee4e8ae5dac5ceae1697"],["/categories/Codable-protocol/index.html","ed3f5ae4beed048e4ca7cd3128486ccb"],["/categories/Combine-framework/index.html","b7415ef5310f5603924ca7c3506c067f"],["/categories/Combine/index.html","d2356ff9cf7b011fca7a9d4a9f37d6e1"],["/categories/Grand-Central-Dispatch/index.html","05bef10f1e454e65e4966a44be005e8f"],["/categories/Hexo/index.html","f1ad403cc67f921b3f9348a2983c9f57"],["/categories/Promises/index.html","6381444f94044631095e521efc222599"],["/categories/Result-Type/index.html","3a33db9ee8aba8c814054ef2b36509cc"],["/categories/Server/index.html","e84ad693b9313fd767b31ee09c9f2919"],["/categories/Swift/index.html","95a66fd2f92aa262e40fc7408c02c715"],["/categories/Swift/page/2/index.html","8203091fff505b14262f3199e88a32c7"],["/categories/Swift/page/3/index.html","a22841660b50629717f24153229908d9"],["/categories/Swift/page/4/index.html","45536ec6d705df961159ac6aa6978cbf"],["/categories/Swift/page/5/index.html","81ab78d8ab609a1eaf599ca71a651ca7"],["/categories/Swift/page/6/index.html","0b2ac0f11cf070721cc6bbd644e0cbe6"],["/categories/Swift/page/7/index.html","a1e28a89094ee61fa76b0010b5a18a47"],["/categories/Swift/page/8/index.html","65e8987cbd5f0efe9ffda23468a915d4"],["/categories/Swift/page/9/index.html","8f8aa135ad341b58ccc2b4c0e5f301bc"],["/categories/Swift5-2/index.html","3df1eff8396eaed12e4ae7e5d392159f"],["/categories/SwiftUI/index.html","a485c3e17b57c60d8c28fdf90c71769b"],["/categories/UICollectionView/index.html","d95d52a9065a2d622efcca99d5a22168"],["/categories/UIImagePickerController/index.html","d0fb40aba2d91f2ff2d1755d949023c9"],["/categories/UIKit/index.html","4be436b73a2e3f4fe61150221c827ec2"],["/categories/UIKit/page/2/index.html","270ec58916b9239d0555ff76b1d16843"],["/categories/UIKit/page/3/index.html","c9cea7ced627a4b8ab7ec02f5cc2e735"],["/categories/UIKit/page/4/index.html","157d2ad9ec698a3f75ddae8839f43a46"],["/categories/UIKit/page/5/index.html","7060c49b03dc3adfba5e9b9f0902a0a8"],["/categories/UITableView/index.html","4534bfc33ce1aa7e35d23a0df3d9c2f5"],["/categories/Ubuntu18-04/index.html","344271ddb2071b28b78814c10c632178"],["/categories/Ubuntu软件源/index.html","0998991b8d07f2dde2e60acf31b00642"],["/categories/Uniquely-identifying-views/index.html","59ee515cf5eb745b8391b9d6d8bb462a"],["/categories/VIPER/index.html","df06c0a0ed688f7b0f1106f52859ba4e"],["/categories/Vapor4-0/index.html","3daa259cecebf57502e7e1bdd5a9225e"],["/categories/Xcode/index.html","de4cc3b88845f3477ade19f99a16857e"],["/categories/appleOS-Networking/index.html","83aad76fc71250a72e0900a19f3346fb"],["/categories/enum/index.html","6c08db2a0fe89ba7210edf9b09ea10f8"],["/categories/iCloud/index.html","92e695683c54e648b0de231691fce3ba"],["/categories/iOS/index.html","ce28d8c916bc369a1da381b4535bbef4"],["/categories/iOS/page/2/index.html","28481bd14329cf44dac557fb61445f5e"],["/categories/iOS/page/3/index.html","b4c2e0b1609adc487dc4c1ecf6c95d19"],["/categories/iOS/page/4/index.html","b68e10952f57681aba86e93f53fe32f2"],["/categories/iOS/page/5/index.html","1df75e42d8688fe9d3778310c349011d"],["/categories/iOS/page/6/index.html","bd5e6dc72c00a91cb1b67bf0230ba2a2"],["/categories/iOS/page/7/index.html","1f8aff4b6cfca5a29e99ebe635d86f91"],["/categories/iOS/page/8/index.html","e51c84fb2f93132d74436fff7e6d6fc2"],["/categories/iOS/page/9/index.html","fa3a0916709b12d3a2994ed0fe95347a"],["/categories/index.html","974994a3a0e1138cffa4a8c79db74f44"],["/categories/random/index.html","8c41c891dc4053e4a9192f88a9ce05e8"],["/categories/三方类库/index.html","44ab031a671f0bcc139b6b24b53c1987"],["/categories/函数式编程/index.html","d0f613d04a90b20cb4e9a5f0285ba68a"],["/categories/子类化样式/index.html","6d7f2790f9d9a5ff9f8aba31679ab4fb"],["/categories/架构设计/index.html","6880605635bf1d722125e4fb0bad550e"],["/categories/用户体验/index.html","e022aad7e8ad955c0c1be994994e2661"],["/categories/设计模式/index.html","060033959930e93dee97f994f5533418"],["/categories/设计模式/page/2/index.html","24c63bb55bb846f306792e9a970b7119"],["/categories/设计模式/page/3/index.html","75bf4f06fe4c9f61ba393f1764b843a2"],["/css/main.css","84610e9219037b30416c60447ee3f933"],["/hello-world/index.html","55738e294b6eb950ed1f4d5cda9ef5d8"],["/iOS VIPER架构深入实践/index.html","f1dd10c88202660f54a502717cddf351"],["/iOS 自定义视图，输入表单和错误提示/index.html","77c17b953a0cccf328318deafc4ebc95"],["/iOS如何使用iCloud文档？/index.html","37ff04c458ee1b8d304e6f51e3caded2"],["/iOS子类化样式/index.html","69e749bca5526f19fb64dd9eff28239d"],["/iOS自动化布局编程/index.html","31263651a12d56c56b860ed8c3bd7da3"],["/iOS自定义转场(By Swift)/index.html","3034a2a13ff528ce01d1f0520c5a6846"],["/iOS项目架构：使用VIPER/index.html","99c14bffa31706b51e0107db5ffac291"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","cebcbd0f355bf212d965c5f5865ea880"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","7541d1be1e5fe37f3f2776a2d556581c"],["/page/2/index.html","f61ea4d52ee2eaa3b8d2a444c5691177"],["/page/3/index.html","437cb52f5e9b31458633ea58d068c61f"],["/page/4/index.html","e17ad68ef7d8d9d39dc0796693abbad2"],["/page/5/index.html","3a02bbf704892e5eefc353bb8066b370"],["/page/6/index.html","9392d9a457901b954976404174c06a3b"],["/page/7/index.html","21b9b531082ab8a9da38227612da7c5e"],["/page/8/index.html","275023802c30dbbbf6155afec5387fa2"],["/page/9/index.html","829a515dbc85474146836f36c9df42a3"],["/schedule/index.html","4bf9748dea16b1ab4da1add7a86d8e97"],["/sw-register.js","ffa3656b0ba4d963c3e91df60c7a87a5"],["/tags/Advanced-Swift/index.html","6219bd04ae60d273e70310471b601eab"],["/tags/Advanced-Swift/page/2/index.html","de7c20256d417d9ab17344aed2faa39e"],["/tags/App-Architecture/index.html","ce00675d7d5d60646be885eda41305ff"],["/tags/Build-in-Collections/index.html","0b4412daa24b5265c15efa20a1977773"],["/tags/Codable-protocol/index.html","5c171fadf45bbbb5997bb3c5c8e52790"],["/tags/Collection-Protocols/index.html","fb099fe845e501cb63d26d0e7cb9b9b8"],["/tags/Collection/index.html","3d673abd99f7eec660b97b671c211281"],["/tags/Collections/index.html","60e2495ada0cc0e058d2854a9f934dc8"],["/tags/Combine-framework/index.html","798b3965e2b3dbccbc7524b41accb0bf"],["/tags/Combine/index.html","090b8339c92ef172be0667c60d54d74d"],["/tags/Dependency-Injection/index.html","3044dbc8df6666cdaf9bef302fb5e534"],["/tags/Encoding-and-Decoding/index.html","6dcf48522bd4357d1f9842d8e0ae72ff"],["/tags/Enums/index.html","2219228004d9accc78697422063e65b2"],["/tags/Error-Handling/index.html","5cfe2dbee33f2f93ac0be1bbb2cc23e5"],["/tags/Functions/index.html","87141846f9a3a40ba3fa02c8562bb748"],["/tags/Generics/index.html","3b2b721488e6f18652985540188046f8"],["/tags/Grand-Central-Dispatch/index.html","785f3c3863990ae9755ae9af31dd630a"],["/tags/Interoperability/index.html","35b2874ae8ef703c5bf0693c0ffa71d6"],["/tags/Introduction/index.html","3734c831b1fe39778b034492aea116ef"],["/tags/Modules-And-Hooks/index.html","cacb747d6156edc96038b3a859959259"],["/tags/Optionals/index.html","192f2dc5352bc9a1edcb5a2ef4142cc0"],["/tags/Promises/index.html","6599d63f785c056808d34cf640fac3bd"],["/tags/Protocols/index.html","64a3c19fb1c34dd5eee4c505927ed9f0"],["/tags/Result-Type/index.html","120c681468286eaaeabc329705b4cf24"],["/tags/Server/index.html","353374b8f79825d77d1cd3c57f56bd5a"],["/tags/Strings/index.html","7004e258c431f40ab0029bb42d3a4ff8"],["/tags/Structs-and-Classes/index.html","0d7b14b350c34cc66f2f0abe26656f84"],["/tags/Swift-5-0/index.html","093871e6e95c94abfa8b0b00eca7ff57"],["/tags/Swift-5-0/page/2/index.html","20625944a457a85f2c9599e8e5b29fa7"],["/tags/Swift-Package-Manager/index.html","e6fae67141565282c1acbaba91896dcb"],["/tags/Swift/index.html","4392afb51b1d4a6d42c8f59c2c8ef4e6"],["/tags/Swift/page/10/index.html","8810cc2f129814c4b6eed2d3ed3bf465"],["/tags/Swift/page/2/index.html","5d472de0eff93ebb9862a520ae7999c0"],["/tags/Swift/page/3/index.html","2681cbacb8068b87622c55a6e52377e9"],["/tags/Swift/page/4/index.html","613167bf0b7c9002924b003a26008359"],["/tags/Swift/page/5/index.html","49aa28a69bed56ddb1038426c48596c2"],["/tags/Swift/page/6/index.html","be6d2eb20bf92d096185890288f4bcdf"],["/tags/Swift/page/7/index.html","c81b39356c197e9fce2afe4a506187bb"],["/tags/Swift/page/8/index.html","3f8e085512a807c5e8c519d4e77140aa"],["/tags/Swift/page/9/index.html","7423f00150e085b58a3a795b626ea364"],["/tags/SwiftUI/index.html","7367ef742a814ff87389ae53e35f663e"],["/tags/UICollectionView/index.html","0acbce5e6c07d0a5f6473bc56f527024"],["/tags/UIColor/index.html","29a94df4b6971fd2e399534fe909dd24"],["/tags/UIImagePickerController/index.html","c1350e6d569391fc0ab0675427727c97"],["/tags/UIKit/index.html","80b49b3183ddbe6cf1776f7c71bd2cfe"],["/tags/UIKit/page/2/index.html","007d676c2956cd8c2436d17147306de1"],["/tags/UIKit/page/3/index.html","d51d2a5d8914481c9c33133c711f231d"],["/tags/UIKit/page/4/index.html","55eb28c43747b306e9de2e2d98771793"],["/tags/UIKit/page/5/index.html","d690524e096f7ad14cee9ca9036bd389"],["/tags/UITableView/index.html","0a0530b46534fcb323d7d111e38baf9e"],["/tags/Ubuntu/index.html","eb60af05ff1772d63acd4ee9618ec654"],["/tags/Uniquely-identifying-views/index.html","03030ad3a7c15d5e6140f05b571dc32a"],["/tags/VIPER/index.html","d5084c8c00f7ae49541c2d8974939657"],["/tags/VMware/index.html","be62772bf73993fcec1f4c0b63fce6e6"],["/tags/Xcode/index.html","9354e4976cb36944627ced6aad941b79"],["/tags/appleOS-Networking/index.html","b9ac5fd520455156f8bcb7c60fb963ec"],["/tags/enum/index.html","52ab4877c1e84b0b7d6f6768e7a85992"],["/tags/iCloud/index.html","5c8b23582a43fd3e9db34d909a09fd52"],["/tags/iOS/index.html","bbc8ead51d72d5fd27d707978946db29"],["/tags/iOS/page/2/index.html","c2ede60099dfd0d63cf9a0903eabaf02"],["/tags/iOS/page/3/index.html","2e2ad49aed41f101567dbde63e4ab9cc"],["/tags/iOS/page/4/index.html","11c51b9eac388f66b1ebef74b34f3bfd"],["/tags/iOS/page/5/index.html","bd9db65bdda4786295c089de380f6f97"],["/tags/iOS/page/6/index.html","00e6e453729f3ca33ba1039f62fa4e9a"],["/tags/iOS/page/7/index.html","41eb4b1a76453e427380528a66594fce"],["/tags/iOS/page/8/index.html","f9e0451414a65247e9c6857dc40beb67"],["/tags/iOS/page/9/index.html","58da90dd72b7e44b6a93a94022bbe81b"],["/tags/index.html","db0e2ea4f94a8df932bb5b61584df51e"],["/tags/non-optional/index.html","67b83305e82ef962646a661cecede5a6"],["/tags/random/index.html","fff2a901605138fc39056c4083cf7177"],["/tags/transition/index.html","93590abda0006ca21f63d9280ac72d0b"],["/tags/三方类库/index.html","8981ffb0abb8113827048d68fb72d195"],["/tags/依赖注入设计模式/index.html","2336fa5f3fc195fe2310d412b7564002"],["/tags/函数式编程/index.html","4784483a6a156ae2b91537c0972e2a4a"],["/tags/初始化模式/index.html","216a16822175a428e93dfa0bd128fe3b"],["/tags/单例模式/index.html","e8ac611e2c41ff612dc6f4bda0454d9f"],["/tags/原型设计模式/index.html","95a6af70b0143f8073bb583b5bf39714"],["/tags/命令设计模式/index.html","5b7b68602075150db4a725751be418fe"],["/tags/外观设计模式/index.html","e18db79080e94a25aae03bc3c2008d02"],["/tags/委托设计模式/index.html","bf6adfbd6a5f3e16cfcf26b07a02888c"],["/tags/子类化样式/index.html","1a4b96ae5aca99b7409078e3ef9af257"],["/tags/对象池设计模式/index.html","aa04c8bb49ed0e797e8cc53d501a5c2f"],["/tags/工厂方法设计模式/index.html","cc3f28104617d771be265ca9243a40b9"],["/tags/工厂模式/index.html","b6b61194cb4c8a7b2e3f9b651c13b630"],["/tags/工厂设计模式/index.html","d043c96c05f2c1198804cae3d4100c5c"],["/tags/懒加载模式/index.html","d32313139be899f1abfd4c69c40c4ae7"],["/tags/抽象工厂设计模式/index.html","9a7c94a502ef361e89e363a2261bb0f4"],["/tags/构造函数/index.html","0dd5cff917e1dc7ce3cf412cc465de07"],["/tags/架构设计/index.html","ca59fe99d1848215bd1a0b332f61ad88"],["/tags/生成器模式/index.html","4c29335ff9ee48d7c4e4f882fa52f116"],["/tags/用户体验/index.html","2f3a249186384b30be299f5bcac9a698"],["/tags/自动化布局/index.html","49440a51f780753dec8a80dca67631dc"],["/tags/自定义UIView/index.html","3fee12d875c52ed705abce42179667c9"],["/tags/自定义转场/index.html","78eb1fc122fe292e831a430a2d221116"],["/tags/自适应布局/index.html","6f491db416490fb919c7b56977895fe8"],["/tags/设计模式/index.html","9959df5a0a13d5079c9fb64b35e8e5ce"],["/tags/设计模式/page/2/index.html","a09723a3f93c7478dcfdef53efca2ba5"],["/tags/设计模式/page/3/index.html","1817f272bf48d682d02c80cffd1c2d1e"],["/tags/迭代器设计模式/index.html","9b85d67effcfba6ff8a691803f71df5f"],["/tags/适配器设计模式/index.html","f4790e3f9dad078710a0af7f8398c523"],["/tags/静态工厂方法/index.html","988e09453581207cb0973ea1e5aa7bb1"],["/为iOS应用构建输入表单/index.html","520b1f01f02fc1c09959470d4a87257a"],["/产品开发的幕后花絮/index.html","fefae8023886cd4035a8752da94090d5"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c6a0201c995068ed10d78e5a46e59270"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","de8b3e3d7c52be0baeea6dade87d9e91"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a2e358a9c2296914834a3c89444707b6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","270812ff81957b3e9fb2b776f3ce22d0"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","d79d398aef2a81fddfc73084774c61eb"],["/在Swift中创建自定义集合/index.html","1b57c1829afe563ad879a12aa2e8f8b4"],["/在Swift中处理非可选选项/index.html","398561475a1f26db0af26c53e0cf791e"],["/在Swift中生成随机数/index.html","6550b3863ecfb17aefd0bffb8e3c3667"],["/在Swift中重构单例模式用法/index.html","fea55987fb6010cf842b7ad6369721d0"],["/如何为VIPER编写服务？/index.html","5a89ec8546cecdfe4b6a2e438d6a58d6"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","f170ae0677ea0dffef729a4af63ccc86"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","67b88bb72db20304e16718fb7cba4a86"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","e3609a79edfbee787399c44f13242ab3"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ad1f3fa8c760812cd463bd508095fd84"],["/掌握VIPER架构/index.html","f47bd6a7af7d805c300bb78f6e3b0fa8"],["/揭秘 WordPress Hook 系统/index.html","398df567e463b58dbbb63b73e7bc70f3"],["/比较工厂设计模式/index.html","5d406de17b0c60024f391853305a592c"],["/深入了解Swift中的Grand Central Dispatch/index.html","fcfb677e0cda1ebfffac14e5518dac0b"],["/深入研究Swift框架/index.html","d8264698b111f848e74280c1c748c052"],["/适用于iOS开发人员的VIPER最佳实践/index.html","fdf870937d5086de61caae7b7720db0e"],["/选择Swift而不是Objective-C的5个理由/index.html","9cf5eb9fa31c63af5b28bed5d03f7d40"]];
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
