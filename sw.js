/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3eb4821bee44ef33212e8649eb98036b"],["/404/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Advanced Swift系列(一): Swift 简介/index.html","5d36a1e7b9de89c794cb14229cc0b95e"],["/Advanced Swift系列(三):  Optionals/index.html","5fdab1eb499fde7d1c7a1f8d72ece4f9"],["/Advanced Swift系列(二): Build-in Collections/index.html","de9e64986d89e24fefef968739125f26"],["/Functional Swift 初探/index.html","15ee0ed1915387993ee3aa9bfe99e277"],["/NSCODER和SWIFT初始化/index.html","96280fe18611282829e80c7cdf2c0425"],["/Swift 5使用UIImagePickerController拾取图像/index.html","31f787d5586df50192325e564da25b88"],["/Swift CompactMap vs flatMap：差异说明/index.html","c93dde71c605934baa4c97025066bc75"],["/Swift Grand Central Dispatch 深入实践/index.html","86ca6379db6ee63b825122d4c527766c"],["/Swift Lazy属性初始化/index.html","2e0324db15cad0738b5711f806c90198"],["/Swift Promises 初体验/index.html","bf8eceff49ce72a3ec85ec1ba8a025d1"],["/Swift Promises 探究/index.html","47fc816a81ab05f145b53dfb216ce49b"],["/Swift UICollectionView使用指南/index.html","6d47f87a659cedc11dce117592b7b8e8"],["/Swift URLSession 和 Combine framework/index.html","660845d6b774e40ebf96607c5c768904"],["/Swift 唯一识别的视图/index.html","696ba467699e5bb67aa6435061d083cc"],["/Swift 如何学习现代UIKit？/index.html","1ebcc0d1ddbbc91641698a7ed3b6ea24"],["/Swift 用 compactMap 替换 flatMap/index.html","86cace33201f6f3269b6f74e89b7302c"],["/Swift 选择和播放视频/index.html","02c6c39409a219ef648f486db9618e4f"],["/Swift中UIColor最佳实践/index.html","9a2bcb21d3d058839e3309045d283f1f"],["/Swift中快速简单的工厂设计模式/index.html","e9c65785d13bc3f62746ad57bfdce79a"],["/Swift中构造函数与静态工厂方法的比较/index.html","500f3bf45fce5e7a033a522b5ecb35ce"],["/Swift中的UITableView教程/index.html","ee72970e3151b1e3c22c1fd4953c0b90"],["/Swift中的懒加载模式/index.html","4c6656bc51db18197e98861fdbbf0c64"],["/Swift中的模块和挂钩/index.html","888e3f54175592c03f0e3744fbdbaa32"],["/Swift使用布局锚点添加约束/index.html","142d69f5b1e95393abaee6dc445a4ff1"],["/Swift依赖注入设计模式/index.html","9d682d439efc7ffa78723fd33a0dc233"],["/Swift关于Dependency Injection (DI)/index.html","561213277e698d01158160f2731e7cb3"],["/Swift初始化模式/index.html","4e639979a74c7fc41c3e9f5314ba3730"],["/Swift单例模式/index.html","7946ccf7dd7b6f0b975d53e74ba11094"],["/Swift原型设计模式/index.html","d00cdd9d23da291c6ff7e5c28514b63a"],["/Swift命令设计模式/index.html","e2459bcb88a27c0d4fbd75e589b11106"],["/Swift外观设计模式/index.html","9fbaadd529ebf8ea7b290ae6ccd7999f"],["/Swift委托设计模式/index.html","75b254879057baa3d8d68f3515b6501c"],["/Swift对象池设计模式/index.html","f1b0b24b672299903b8f8d72efc3564c"],["/Swift工厂方法设计模式/index.html","7a2201f8dbf50e9f8dd09aa5d52dbe45"],["/Swift带闭包的懒惰初始化/index.html","587afcc5077d155db4542eefe539969f"],["/Swift抽象工厂设计模式/index.html","37e04ac16aab149af996b043b28ee68b"],["/Swift掌握iOS自动布局锚点/index.html","1e542eedcdd56a07814c71ff8735af5c"],["/Swift支持旋转的自适应单元格/index.html","87c986799e14b927ff9564f631d0d039"],["/Swift枚举值/index.html","7b90dcf84a262c1271ce6bea2b1aa936"],["/Swift生成器模式/index.html","a726987fd39f6323276d4a76754a11d5"],["/Swift结合Xib文件自定义UIView/index.html","93a4a9dc3405c9ccce5b52b8d9765057"],["/Swift编写的20个iOS库(一)/index.html","0454ec8774aec8e9ce3922ace637f7c3"],["/Swift迭代器设计模式/index.html","c7442157761dc8750470e73a0d721731"],["/Swift适配器设计模式/index.html","abe7125a72cedf6e15ba361c88c3b9b4"],["/Swift静态工厂设计模式/index.html","5a567ff512eb283dc3acaca78ecf79da"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","42010819012514dbdb04b8bd824641a1"],["/UICollectionView data source and delegates/index.html","3dcc6376bf75e71eeffc1f2c384e2603"],["/UIKit初始化模式/index.html","bdb86a25aa5b68c9dc059096480219f6"],["/Ubuntu18.04替换国内源/index.html","c1bcfbca90eb4826d09f15fa0b300630"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","34e31b95bf28fb4409f86e77878af384"],["/Xcode扩展/index.html","2582b474e71d334ffc773d82c14a7e58"],["/about/index.html","0dc6c1137b0026cde8354c6ac29c21fe"],["/appleOS的Networking示例/index.html","e1fdf17489f7f38072dd5d37ec654eb9"],["/archives/2020/04/index.html","50373aaaac872e4ab4bb65c2203311ae"],["/archives/2020/04/page/2/index.html","7c8539c7b3d351a2f9e5f4b08be7aea5"],["/archives/2020/04/page/3/index.html","f94a824e57b5dff50475d98d9dac7f79"],["/archives/2020/04/page/4/index.html","12923af69ed100a63719e773e0b7bcca"],["/archives/2020/04/page/5/index.html","8d9adbb74fa04d2a8c06d20741ff3a3f"],["/archives/2020/04/page/6/index.html","ad253da2c87f92e4ded400e720868171"],["/archives/2020/04/page/7/index.html","1b8cdcfe9317f9a931d62679973a5b4e"],["/archives/2020/04/page/8/index.html","d76088080053d1f7923cefe530955845"],["/archives/2020/05/index.html","dedda58c7d3edf93a223f27990bf9daf"],["/archives/2020/index.html","19e0a20ac722725daba158a1bfbf88e1"],["/archives/2020/page/2/index.html","c9911fed49b205175b78aee61f728c03"],["/archives/2020/page/3/index.html","ceb9a80a3560ae4d6215df4bdb86aeaa"],["/archives/2020/page/4/index.html","5c2fc0b22985c02363d4e8b726970e8f"],["/archives/2020/page/5/index.html","6715e93df2533ddc67d107997e81c4a1"],["/archives/2020/page/6/index.html","ca85ea4d19a7f91c0b971c095c6e68cb"],["/archives/2020/page/7/index.html","8e990a9979086833141852d45436c496"],["/archives/2020/page/8/index.html","e95051ce11fdd1de54f86546d1b69b00"],["/archives/2020/page/9/index.html","fd3fe0c8b5bdd7c424126cdff8f17039"],["/archives/index.html","764f05333c191f8ef62ba3b29e9b8ded"],["/archives/page/2/index.html","a8daeb0e5a18976d362be6b9dc2068d0"],["/archives/page/3/index.html","86e98005ee470cfa074ef9ef682ba13a"],["/archives/page/4/index.html","013af64bc6cf4e5183646f2f938e6da0"],["/archives/page/5/index.html","93853b4f0ef200ef8edc677e264f3891"],["/archives/page/6/index.html","a06c96303dad9f5b4a0eec18933e5cdb"],["/archives/page/7/index.html","5b597d195f1d3435ee6715ba348c7556"],["/archives/page/8/index.html","544481160c8afb8aec9685b79ac62674"],["/archives/page/9/index.html","6933512505e0be06b05e074b01a844cf"],["/categories/Advanced-Swift/index.html","1a21f6c60ac1bde7be309ad2485fe1a2"],["/categories/Codable-protocol/index.html","d5ff4939e929cef0fe071443284bc105"],["/categories/Combine-framework/index.html","322a8294f04692461662570d87ab43ff"],["/categories/Combine/index.html","a8b00c0cbf86c4c5e75097e395c391fe"],["/categories/Grand-Central-Dispatch/index.html","b79ba51ed7e55358eee3f31f73b4d3b4"],["/categories/Hexo/index.html","030adbfc14079a1d3180d974cb7081c5"],["/categories/Promises/index.html","cc9b2366af575d115f94cde3c26bc171"],["/categories/Result-Type/index.html","8fcd1c84f6c6e9ac9c05e8031779b064"],["/categories/Server/index.html","9ab9e2dc045ba6f9cfc880c51669eacb"],["/categories/Swift/index.html","76afd94e8daf363b42dc8dd190cc41e6"],["/categories/Swift/page/2/index.html","d6deb487b164317fc779cb56f9b4b788"],["/categories/Swift/page/3/index.html","2be8214b3f6a087a8a344a721371ac94"],["/categories/Swift/page/4/index.html","4d87c90ac69a9c147a0573a50d570bea"],["/categories/Swift/page/5/index.html","920cde90747fa5bdbf0ce6b18490c5f9"],["/categories/Swift/page/6/index.html","377897340cd0df05262b233fec04a332"],["/categories/Swift/page/7/index.html","bc490ce507ef8859b61475fca9fc0e5a"],["/categories/Swift/page/8/index.html","4c205edc1f7189c6116e4987c633c0a1"],["/categories/Swift5-2/index.html","95845df029fcb3e0175cdc07acc7ed48"],["/categories/SwiftUI/index.html","a7f52b42c5706aca338ed6c847e95f99"],["/categories/UICollectionView/index.html","8670f6b4532280a61e518cf24f9be4c5"],["/categories/UIImagePickerController/index.html","bce29cef66b81a0e5c9bb57a3d583807"],["/categories/UIKit/index.html","6e52f7b0393bbb4c90903e1592afb3af"],["/categories/UIKit/page/2/index.html","209aa8c42010344f5101ebf8ab828612"],["/categories/UIKit/page/3/index.html","37d60e4be1b6c05e69bf98e084a7adee"],["/categories/UIKit/page/4/index.html","b3c6489639d035732b072af0de2a9e27"],["/categories/UIKit/page/5/index.html","9b60b292e6072fd2d8263380e3ad1117"],["/categories/UITableView/index.html","1b10ea5ee1422bdaaaff27efcd2c9bbb"],["/categories/Ubuntu18-04/index.html","c8ed75ff90d0871a660d6da41a567610"],["/categories/Ubuntu软件源/index.html","ae812b1a44fcf9e05b03008e9c1cd447"],["/categories/Uniquely-identifying-views/index.html","48cbcefa17cbf9049d8d4b9909ea3fb0"],["/categories/VIPER/index.html","ac107156e6cb27b1b6f5ef74e44df276"],["/categories/Vapor4-0/index.html","ccade107e5a501027fdbb9e5c1a25b04"],["/categories/Xcode/index.html","db0ced7a6f3f63915ad523f83c6ee247"],["/categories/appleOS-Networking/index.html","953f6497570557ad394f495638c6a65e"],["/categories/enum/index.html","c52bb3e73af95970a31bce6c29e41719"],["/categories/iCloud/index.html","4e4230f8c42ceb78588d6c2dbf0b6456"],["/categories/iOS/index.html","bd85f2540804897082ce07774a415593"],["/categories/iOS/page/2/index.html","6d0739af188f0fdb67335a47ce9581da"],["/categories/iOS/page/3/index.html","798b9406cda464d11d9bf191337a4105"],["/categories/iOS/page/4/index.html","35e7305e5d10ad38cef183b92dee9e4e"],["/categories/iOS/page/5/index.html","a0480f9b096811d01d482b8cae57e859"],["/categories/iOS/page/6/index.html","a2627b050607e1cc9d4ab6db7f6a2df2"],["/categories/iOS/page/7/index.html","4ee6d35dbc8e9d0ab13546e0cb8726fa"],["/categories/iOS/page/8/index.html","a6b2bd95a39dbf04c4eec523385a03ec"],["/categories/index.html","01ad5d3cdbc0b75896a658deaa591eb1"],["/categories/random/index.html","beedcb34cdd1ef0f6ff6097e8af87d64"],["/categories/三方类库/index.html","12d87cce5ac640df076cbd7b93610e0b"],["/categories/函数式编程/index.html","0e34a90a53de411f6b35c4378c4503c0"],["/categories/子类化样式/index.html","09d30396132cb7dba7db13b35e0d98f6"],["/categories/架构设计/index.html","2aaf46fddd003fa3cbefee33633c522a"],["/categories/用户体验/index.html","2bd85c536061d1c94721f2693b1c0c03"],["/categories/设计模式/index.html","4779bb62fa5e41acffb6449cab24fa0f"],["/categories/设计模式/page/2/index.html","db2922b19d09e2bda5cf15f93bc7bea9"],["/categories/设计模式/page/3/index.html","a7685c38744a4a95c82779703b7b0c24"],["/css/main.css","424ffcb3257d99bcc32e28f261fee709"],["/hello-world/index.html","61780140727d24bc151074391e832624"],["/iOS VIPER架构深入实践/index.html","449d72cc14651f1ceda0be1c6745667b"],["/iOS 自定义视图，输入表单和错误提示/index.html","ac6fe47f7461b35b426650b7f97885fe"],["/iOS如何使用iCloud文档？/index.html","b2fe7e64cb7d358f3c7db58f902cff2b"],["/iOS子类化样式/index.html","f5b164fae135d97bfa3b3cfde86bf770"],["/iOS自动化布局编程/index.html","2ddf946fb788c249e4fe84259ec4c9f7"],["/iOS自定义转场(By Swift)/index.html","2f9f4f0ad1b42276909b4098cfcbd805"],["/iOS项目架构：使用VIPER/index.html","8b26201c25484b55b625d13538eb3557"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f12bc91d0025ddb932abdc3ce02b5012"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fbc597718e667f230fb4eda29c320e1e"],["/page/3/index.html","854cd8dbadcf9021e844603c60f9a16f"],["/page/4/index.html","7a3576bfddcc3255947a8e353b7ddf10"],["/page/5/index.html","7a52066a045de2b4889689f0cced4cc7"],["/page/6/index.html","3e1bbd6973ed9a943aa680718abc55ce"],["/page/7/index.html","81173cc971f63e0931383a97e29412ee"],["/page/8/index.html","64a5733e5b6e0d6707d91b73712b50b4"],["/page/9/index.html","9660aa48437a758c5fe7c8b764782c83"],["/schedule/index.html","81b2bca87f70d42d0869942adc9711aa"],["/sw-register.js","1a614e7a614b233a5c00347478f5fbd1"],["/tags/Advanced-Swift/index.html","94086b4ea8b53f795212ba092d9eb1de"],["/tags/Build-in-Collections/index.html","d8d9e801999944e84bd3640af884cec5"],["/tags/Codable-protocol/index.html","77ca7c64bd56ae4823b9153bb086cdbd"],["/tags/Collection/index.html","fafb1268421d2f3ea0b4ddcd7fdf308e"],["/tags/Collections/index.html","a266fe52c4ab395641c7b7c5d805200a"],["/tags/Combine-framework/index.html","dc55273b912873e3c1933adbae25cbd7"],["/tags/Combine/index.html","d2add6b7a5eccf60b2477301838f32d5"],["/tags/Dependency-Injection/index.html","696b4d2a801ba0d81b38e0c9028cda55"],["/tags/Grand-Central-Dispatch/index.html","7c71dea7dc60c7331c31547257c4fa0e"],["/tags/Modules-And-Hooks/index.html","6e93c9d7f050fd105f58712bbaa94430"],["/tags/Optionals/index.html","86bcd282253c23adb888cf86d2e1da70"],["/tags/Promises/index.html","5beb420757bda5a158dc702069c66915"],["/tags/Result-Type/index.html","16df2c5a1921db379deefcbd910da0e5"],["/tags/Server/index.html","4c395effa3883bf2c8735d6f993cf6cf"],["/tags/Swift-5-0/index.html","4e9a999461cba42bdc9bab77753503bc"],["/tags/Swift-Package-Manager/index.html","4524bb86492a9b4d10caf68d91cfed67"],["/tags/Swift/index.html","dead82751acdd4cf1f45876737615a33"],["/tags/Swift/page/2/index.html","4ad798fd0912a1f1a1013fb86c6958c2"],["/tags/Swift/page/3/index.html","6126dc96482e84447eb8c00d3f233c96"],["/tags/Swift/page/4/index.html","2863cbd160cacad74c3b2c28a1ce66ef"],["/tags/Swift/page/5/index.html","712405e63e7279c5816512ceb8b94751"],["/tags/Swift/page/6/index.html","43687cabfafb57aef746155cb76fd995"],["/tags/Swift/page/7/index.html","04111dbce242fa4612c1f83c469edf93"],["/tags/Swift/page/8/index.html","bc2979e6d835c2d72fd34e3f1b58daf1"],["/tags/Swift5-0/index.html","2fd22983fcacbb8de4e63cf895e308e0"],["/tags/SwiftUI/index.html","4d23b4f8dbc0bd63394256bd38a8d9ae"],["/tags/UICollectionView/index.html","7512dcea4b8222a86b787b6c3339187a"],["/tags/UIColor/index.html","2d64c13c204427db312c1716c9bde4af"],["/tags/UIImagePickerController/index.html","98328c7281e559e46ffae91d75d50682"],["/tags/UIKit/index.html","e9e6aae92c7d773e98d2d107493e3e59"],["/tags/UIKit/page/2/index.html","3df6fbedf014602f52570ee9c66f9330"],["/tags/UIKit/page/3/index.html","befd29f8ca7575235ccadb314e3747c1"],["/tags/UIKit/page/4/index.html","8b0cc4d28c5485e1bd9af3dbe796f1c9"],["/tags/UIKit/page/5/index.html","0acc7d26223b215db7dd74e68c7f5baf"],["/tags/UITableView/index.html","ee58f330bb28eb16b642b9a734a51561"],["/tags/Ubuntu/index.html","5b5a868b22f71d373138be667cd78487"],["/tags/Uniquely-identifying-views/index.html","14507407e8493b3d0675c7f5e2c399ff"],["/tags/VIPER/index.html","bf81d43591b046f3e10179767f30a6f8"],["/tags/VMware/index.html","a7a933c2bc9de7dff26bdc23126da5ae"],["/tags/Xcode/index.html","5faa5c5146a0f55ba58d596b335a4b4d"],["/tags/appleOS-Networking/index.html","03a3017fbd72625cb6519936694b117c"],["/tags/enum/index.html","abd10713a7cdf1d1421a542be5c999f1"],["/tags/iCloud/index.html","a7e1938393659e790325b46c4a4c835b"],["/tags/iOS/index.html","81210658ad29acfbfb79875d720303f1"],["/tags/iOS/page/2/index.html","d478a73ae1974b7ee8764873d0f5e829"],["/tags/iOS/page/3/index.html","3e14f0ae8c34d0541952cdcc59326202"],["/tags/iOS/page/4/index.html","5555fa0da32b0bf1fc3d69c1197b3d83"],["/tags/iOS/page/5/index.html","19d97eae5560a7d8ddfa599beb887c47"],["/tags/iOS/page/6/index.html","fd9812dff4becae6ec0567bc90378833"],["/tags/iOS/page/7/index.html","72652f0477d59312b6558a177ec50fde"],["/tags/iOS/page/8/index.html","553dfbf048b3d14793d7237186c5f8b8"],["/tags/index.html","1ffb2a9021d88708bcd6fd23eaf7e270"],["/tags/non-optional/index.html","a1ab352b4c6d80b839f069d56ed92ad8"],["/tags/random/index.html","5ab0ce36de3cc979d7dea1c5c64b80bf"],["/tags/transition/index.html","f8599765da0695351161f04e7c341b23"],["/tags/三方类库/index.html","8b9c798f0eef9845bb1b8ea8c1f11142"],["/tags/依赖注入设计模式/index.html","92ebb5dc51fe7282b2f8f1c85d6cbacf"],["/tags/函数式编程/index.html","f6284ec567bbc4c800e97e68546c186a"],["/tags/初始化模式/index.html","ffe6e9e3b2449379b3a642874af87993"],["/tags/单例模式/index.html","d071a3d96d72974e2b439eeeff8170cf"],["/tags/原型设计模式/index.html","a159acccbab78f99d77a4aa4bc910e9c"],["/tags/命令设计模式/index.html","4442acfda00d741b4bf051421fdcd45d"],["/tags/外观设计模式/index.html","28408696e237b88b73ef7891d7913b3f"],["/tags/委托设计模式/index.html","f29ee75ccb042810943384a81ea121e2"],["/tags/子类化样式/index.html","2bd2151a0c2adec33b84cd135cfc5d8f"],["/tags/对象池设计模式/index.html","06f504d6334b31b2209016c3a35a2374"],["/tags/工厂方法设计模式/index.html","a364265357cc592b945cbd4f9786a197"],["/tags/工厂模式/index.html","c8c8ee5a676fc5ab20176ca7f70ac22b"],["/tags/工厂设计模式/index.html","dc73849838a0a473b5f34bb020a7fd3e"],["/tags/懒加载模式/index.html","0cc19fac460e2ac019ffbe61d7064b10"],["/tags/抽象工厂设计模式/index.html","cbda7513c4f2bbfa7bf937330bc6ac31"],["/tags/构造函数/index.html","a6377104940460c3641f005b121f0e09"],["/tags/架构设计/index.html","74c76f1b927da9eb613ab5a72a33b8b2"],["/tags/生成器模式/index.html","617b2851f7a1cf9e1481a0f55c6bb4b7"],["/tags/用户体验/index.html","93305bb40e6cbaf2cd4fea561530fda2"],["/tags/自动化布局/index.html","ff76d6f6c11fa9424170de36e6e95405"],["/tags/自定义UIView/index.html","d12d4ff15e5ea80b586636e0b854bd8f"],["/tags/自定义转场/index.html","cdd4b2f9ba3ec984f4333518d7979950"],["/tags/自适应布局/index.html","966aa610117fac4ae5efa9a0a36caf5f"],["/tags/设计模式/index.html","2b63e350a96b4a1d15683ae5ebf3f528"],["/tags/设计模式/page/2/index.html","f920354def84dc9e9d0cb1387716b3bc"],["/tags/设计模式/page/3/index.html","0cf38379b3a86933c7c50572f08e08a9"],["/tags/迭代器设计模式/index.html","fbedc054492e1799e176a65d0dfec51e"],["/tags/适配器设计模式/index.html","7610deab926ce93bf008fb6e8ed164fc"],["/tags/静态工厂方法/index.html","23507642f048147756be2f2af86755a8"],["/为iOS应用构建输入表单/index.html","cc04509ad6b56c70ccd32e64fb1ba753"],["/产品开发的幕后花絮/index.html","8e5c2b0b1e1c13a0514368595c34beca"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","49b2f4747b12f44afdd7ed78a3c7293f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","bc9376749517f4e0df34abdf713fc458"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","636962a8efd804b2b3306b1d09898f30"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e3e6768465f43782cb3c6e7832770a1a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8137960089ce669b50ec4973f23e0f72"],["/在Swift中创建自定义集合/index.html","4dd6e21c4f2f62c403da4ea45e775a71"],["/在Swift中处理非可选选项/index.html","3af4a4d0047a7cec219652ff556fe239"],["/在Swift中生成随机数/index.html","324da94ab364831317ca992c75a2c6ef"],["/在Swift中重构单例模式用法/index.html","2ea51a0b4a07472234ebf75bcb35d116"],["/如何为VIPER编写服务？/index.html","2da55e0b790fca01ee1242fc33d12a39"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3ecddbaa9033c83257227c142f49b6e8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","59191b727b8a1b7de82b1b935cd5f4ad"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","0ed5a885c122186e11770ee76caa7b7f"],["/如何使用VIPER构建SwiftUI Apps？/index.html","057bb888d173b00d4f9bdb0d848938f0"],["/掌握VIPER架构/index.html","b04856ac4cdc7e2b675bd2d6e96b2937"],["/揭秘 WordPress Hook 系统/index.html","a07981cd8977758ae5db854f6fa16b61"],["/比较工厂设计模式/index.html","74b16a29431c79631e27c582fe6d859c"],["/深入了解Swift中的Grand Central Dispatch/index.html","379ab6bb9be51652406bfbf65d58087a"],["/深入研究Swift框架/index.html","30bcb51deabd3452b14ffc703c10b7d1"],["/适用于iOS开发人员的VIPER最佳实践/index.html","46800e68181a495be2d6316bea2188bc"],["/选择Swift而不是Objective-C的5个理由/index.html","56612fae42cffe7159aa0341cb5b3ded"]];
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
