/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","d3d5577b0c3da86d34d1321b4290155f"],["/NSCODER和SWIFT初始化/index.html","4aabb4934c163d6058e34979afad1402"],["/Swift 5使用UIImagePickerController拾取图像/index.html","defdd5c39c437035fd8113d600ad0d0d"],["/Swift CompactMap vs flatMap：差异说明/index.html","4bbf802afca972ffba0a5f1f47ffe436"],["/Swift Grand Central Dispatch 深入实践/index.html","e91ee427578e782b12ba847672aa4368"],["/Swift Lazy属性初始化/index.html","656b2b930f41ad51d7d9798cb1f993b7"],["/Swift Promises 初体验/index.html","f34dfd5e3eb877ea087066c97ece8248"],["/Swift Promises 探究/index.html","e5573d527e6f0e6e4abeb2b76e9d3387"],["/Swift UICollectionView使用指南/index.html","6c5a9f8e11c38d71aa2f74a6a80cfe12"],["/Swift URLSession 和 Combine framework/index.html","8aa100477e4157f5ed847664ff63abc0"],["/Swift 唯一识别的视图/index.html","d3094e39655382321810fae90d348bfc"],["/Swift 如何学习现代UIKit？/index.html","e7176fb461c54924cad3dfee5adccab8"],["/Swift 用 compactMap 替换 flatMap/index.html","755508ccb317df75baec2dc12a2aa3c3"],["/Swift 选择和播放视频/index.html","238cf098d712757995a4f0116f2642e3"],["/Swift中UIColor最佳实践/index.html","1326fdd01a6b7d74c01f5e7ff7400b32"],["/Swift中快速简单的工厂设计模式/index.html","7030553ea3478b612afa86dfc14cb7e8"],["/Swift中构造函数与静态工厂方法的比较/index.html","a56d70dbf3de72b5c8c0dd998c48a3f8"],["/Swift中的UITableView教程/index.html","1a915d892d20defdb88b5412d416d4d9"],["/Swift中的懒加载模式/index.html","ea0ba65b0dc368726c351f52af5f8ab1"],["/Swift中的模块和挂钩/index.html","bd7de734713536afb4b0ce34b1e7032f"],["/Swift使用布局锚点添加约束/index.html","044afd06d341df69aef149b86f078f9a"],["/Swift依赖注入设计模式/index.html","944c89c6174b9de708df4c8ff9b1aabd"],["/Swift关于Dependency Injection (DI)/index.html","1dcfd3d6ad52017749c6a7484621f06a"],["/Swift初始化模式/index.html","d85840daddaf69fad1c2bcf81f7742b5"],["/Swift单例模式/index.html","038542792de8a683de396b371cfaf6d7"],["/Swift原型设计模式/index.html","01302d1764564a47d02ebc0abf40835c"],["/Swift命令设计模式/index.html","23d4cb72b272767373ddb18af96ac43e"],["/Swift外观设计模式/index.html","2b92a7649b19198d909a3f346126697f"],["/Swift委托设计模式/index.html","967fd27b36ac5fce46bb290f32c1baf7"],["/Swift对象池设计模式/index.html","4bb68a99f86a52b1a3c30b678d8382a8"],["/Swift工厂方法设计模式/index.html","81dfc51c12d10c2942424c6639636c95"],["/Swift带闭包的懒惰初始化/index.html","2ead308b3b6b6b96e83adb9f2062601d"],["/Swift抽象工厂设计模式/index.html","324ee7771872a4c59795d74417ace47a"],["/Swift掌握iOS自动布局锚点/index.html","fae437487838635ab8309f777a8e6d15"],["/Swift支持旋转的自适应单元格/index.html","363765b84d2b138ff5196bb69030e454"],["/Swift枚举值/index.html","55b7f7eaed6041300b2256a07ed712fe"],["/Swift生成器模式/index.html","eff07fa9d156535287dae2406c718275"],["/Swift结合Xib文件自定义UIView/index.html","9e940d1873bd6efb8936aa986851f1ea"],["/Swift编写的20个iOS库(一)/index.html","723581dd6b9d9cb267300bf7b21cb6db"],["/Swift迭代器设计模式/index.html","865ab5711fe8746b98c1335066b34e42"],["/Swift适配器设计模式/index.html","0079e57913130a7ce19d11d346daaadf"],["/Swift静态工厂设计模式/index.html","1a281ae9163c2d18c87a4efeb4ad7651"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","5c48b148d576e9c25f01c0a0e4388e97"],["/UICollectionView data source and delegates/index.html","6024cc91708be1d0b09d5c05612caf25"],["/UIKit初始化模式/index.html","cf0acac0b3422ea2d9531d490b5126cc"],["/Ubuntu18.04替换国内源/index.html","9a7b6223bf466f37ca46de63cb8b0dd4"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","11b120cd0630e46c141b644023b82876"],["/Xcode扩展/index.html","834abe41134729f9963c358c735e9486"],["/about/index.html","26dfc54786629358f27ff33e9d456a61"],["/appleOS的Networking示例/index.html","4d175ddd2bada555782f11f1c9492b9d"],["/archives/2020/04/index.html","80c3d866d520a826b02d3078b09da135"],["/archives/2020/04/page/2/index.html","e054f5576ad23e2d3ef0c867c203784f"],["/archives/2020/04/page/3/index.html","367589de806c752f219946620c21f461"],["/archives/2020/04/page/4/index.html","7af08d3ef6a1b4b53fb436c9c9b60b63"],["/archives/2020/04/page/5/index.html","7112a36c03864a7974debbb91d376c4a"],["/archives/2020/04/page/6/index.html","d62e924fe9d02e5833dc46b62f9d40a5"],["/archives/2020/04/page/7/index.html","17dadd2916a4646f8d55077935d9caf8"],["/archives/2020/04/page/8/index.html","8ad40c17c8c4143b0eecc82e4daff6cc"],["/archives/2020/05/index.html","77dc01bcb17463b7b0af941afad319ac"],["/archives/2020/index.html","c9db88082bdba7c6e583133f87cf59b8"],["/archives/2020/page/2/index.html","a23fb3fd26a961add77084d618bfc4d0"],["/archives/2020/page/3/index.html","7a912839ff2bc87b61e61b8b6272972e"],["/archives/2020/page/4/index.html","18260b28a429f08847e87a5bd2a53bfb"],["/archives/2020/page/5/index.html","6e44c3de411ce5b6cdaf7f6faa3f5030"],["/archives/2020/page/6/index.html","a57aff0d9ac7f57992e43e01382ae8fa"],["/archives/2020/page/7/index.html","6f06e6aeb95bc7ef75310b6ca7d73687"],["/archives/2020/page/8/index.html","587e341345a87f3e6b50fe8f388b2f62"],["/archives/index.html","55c26aab4ad3ef3ce0da87060a9dbf9c"],["/archives/page/2/index.html","6114b72c04c7e330661cda8f5b56a2f2"],["/archives/page/3/index.html","7803af0c00a815f922e3caa143b1f92f"],["/archives/page/4/index.html","e982c76db6b26e4797650132df646c0b"],["/archives/page/5/index.html","3821cc40d857affca5631f2d9a96b26c"],["/archives/page/6/index.html","6b358dbccfa59f25a428ea47a78882db"],["/archives/page/7/index.html","fcd1b5c5409af09d8370f707ff1b61d6"],["/archives/page/8/index.html","7cc6c76627c6e5e7ef31d6a9c5ff5e2b"],["/categories/Codable-protocol/index.html","f1e56aa517e90c388253ccf8d10ae0c7"],["/categories/Combine-framework/index.html","92a29f8b4be6374dbb7638dbdb60a852"],["/categories/Combine/index.html","86091909e8ae78d943a00f96e37a4264"],["/categories/Grand-Central-Dispatch/index.html","84983ee0cb1106e7a4e99e8d29d965af"],["/categories/Hexo/index.html","e83e24559c9264ddc2a26b0fceab560e"],["/categories/Promises/index.html","58893cb1d2e5dbb12fc8f25d212a0f28"],["/categories/Result-Type/index.html","2a85b0e908477746028e64b5a5298e90"],["/categories/Server/index.html","6f091db21a7a33026c3384971b5e735f"],["/categories/Swift/index.html","bcc033021de2aa0dc5b82b08f69a5dc0"],["/categories/Swift/page/2/index.html","6ac5f8f387d47a54c8aefce00a74bd51"],["/categories/Swift/page/3/index.html","864e22a5f402c1d70a44ca4836c12fd2"],["/categories/Swift/page/4/index.html","a38862ba3ccedde74ec52a8ed035ebc8"],["/categories/Swift/page/5/index.html","d73b13254a69af984a8184581d79e2e6"],["/categories/Swift/page/6/index.html","d72c5d88e23c954c3fe5bb4d23b6fa40"],["/categories/Swift/page/7/index.html","9c65114b98de2d413699f001a1c4fc4e"],["/categories/Swift/page/8/index.html","5789166533f5fd5022ea869bb66603fd"],["/categories/Swift5-2/index.html","bf0a3d6fbbb48b318cada254f72d47f4"],["/categories/SwiftUI/index.html","8a6e9e9f7ed7e1bc4175bdb18db7f30e"],["/categories/UICollectionView/index.html","b05afbded5b8e3116c5523ac11966f83"],["/categories/UIImagePickerController/index.html","0a648685e7b190267b3f4ab1eb240edb"],["/categories/UIKit/index.html","7284cb99d6fa6ababe348f8c0662ad09"],["/categories/UIKit/page/2/index.html","cc07f6e8dfc362a25e223c040c3922c1"],["/categories/UIKit/page/3/index.html","67e01ff0b9f3b3959dc5ef9d00e351ed"],["/categories/UIKit/page/4/index.html","7976bc584ba85f90209d399e047d2d42"],["/categories/UIKit/page/5/index.html","23d4495641ef1d4445b1093085a652ba"],["/categories/UITableView/index.html","96400e291b83e22752562b0c1525de61"],["/categories/Ubuntu18-04/index.html","0130781224cac310140a8c661c1c7ddc"],["/categories/Ubuntu软件源/index.html","c150152c2ee9bb4e388f3975a6e54e2f"],["/categories/Uniquely-identifying-views/index.html","1b416af59ba4a7eed747ce3d69dcdd20"],["/categories/VIPER/index.html","ef77348ff6cfb1b54b11db3e75325ca0"],["/categories/Vapor4-0/index.html","592876663d167a630d49773b89225dc0"],["/categories/Xcode/index.html","6925e56bc9f1823cab4d9db24c8f2c97"],["/categories/appleOS-Networking/index.html","fcd242a3a84918fbb03db4c14bc9deeb"],["/categories/enum/index.html","5d3699dfab74c91fd3d151089515531a"],["/categories/iCloud/index.html","7fa63b4f96f9927f4a926aeb8b779cbb"],["/categories/iOS/index.html","5b7991680619e475acf02e880ea717b7"],["/categories/iOS/page/2/index.html","316272f857415c73259902b05f0bc98d"],["/categories/iOS/page/3/index.html","5ad1ee89bb3391b2043ac32a3a425d08"],["/categories/iOS/page/4/index.html","9e34f080ee6eceed8da8ee36fce1ac87"],["/categories/iOS/page/5/index.html","03d645595379d62e6e917f356c58e57b"],["/categories/iOS/page/6/index.html","c6f67de592eff7a23e8ecffa159aa5f5"],["/categories/iOS/page/7/index.html","6b503b5b9320ca5b00c659b347ad6306"],["/categories/iOS/page/8/index.html","d1646e83a32da8aa2015407b7ea62e94"],["/categories/index.html","5c79e7d122079f45d564e233c9732809"],["/categories/random/index.html","4cff85cd5638d4830eb382073303dc83"],["/categories/三方类库/index.html","d2d9a393aad011896f21b1932dc88d84"],["/categories/函数式编程/index.html","14a53b1133c072b04484de55f0e7f2a3"],["/categories/子类化样式/index.html","adfc2608f06c17595525f824f8448058"],["/categories/架构设计/index.html","8b6c8b18f8aab084cbd083284596d6ad"],["/categories/用户体验/index.html","e0013540df4de3f0657d08ed8a93bbf0"],["/categories/设计模式/index.html","e5882b1576156ca66db1b2fa88fcb26d"],["/categories/设计模式/page/2/index.html","696a1792a9b4d9854c7c85b931139794"],["/categories/设计模式/page/3/index.html","57c4d1718bbe6f350c2f1e787afdd82d"],["/css/main.css","95b37cea52aeb9e3537ea66a516849ec"],["/hello-world/index.html","845d2a60cd0433767b58891d0cc4d11f"],["/iOS VIPER架构深入实践/index.html","775fb50c0fe0bfd91ba2a60cb0c3d917"],["/iOS 自定义视图，输入表单和错误提示/index.html","b87cfb97b8fba82786537d51884633a7"],["/iOS如何使用iCloud文档？/index.html","466b39da2f682b1412cca52683c69398"],["/iOS子类化样式/index.html","74f4258a6b9915a18d791933528346cc"],["/iOS自动化布局编程/index.html","8b1a99e108f3888f9d6e5c683b3cc905"],["/iOS自定义转场(By Swift)/index.html","d2e7278f8ceb05a46f54ce25c3a9cf4a"],["/iOS项目架构：使用VIPER/index.html","684ab347981c247b3ac1d4cd1fb0732e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","1e95561aa7d287da55053ee0e6e11ff2"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9d6472c4c025d5e75228f61f21312aaa"],["/page/3/index.html","e28cb837db26678ec9fc7ad20bf96761"],["/page/4/index.html","9c27a8a01cc96d0ddbce267d1bbe78f2"],["/page/5/index.html","3f61c8f7ae179eda08bc0d95cd1167af"],["/page/6/index.html","ea22dd95f88defe84f8b7befd73497c8"],["/page/7/index.html","de1f1a75bdaa2914ac2c4697b39a9e16"],["/page/8/index.html","815505c23771087add3573142f4c0e82"],["/schedule/index.html","9effad4f0defb6ebff879155524832c3"],["/sw-register.js","395483fa45ca7f2c201d08555cf28c79"],["/tags/Codable-protocol/index.html","76a2089c825a53baf8224abf595dd8fe"],["/tags/Collection/index.html","657dd4a541fa9c7fc13eea1707181d29"],["/tags/Collections/index.html","fcd7107139f919352115b3852efedd52"],["/tags/Combine-framework/index.html","b4d3a8d33da13ff429b3bdec6bc721aa"],["/tags/Combine/index.html","c9e4b790c5fded90bc738ab3429e7ed8"],["/tags/Dependency-Injection/index.html","895f740574f102953f08e6ec74928ec1"],["/tags/Grand-Central-Dispatch/index.html","ec33dc3bf0d4211156e01f12cb7d5a1f"],["/tags/Modules-And-Hooks/index.html","151f47856343457fead42ac1b4841795"],["/tags/Promises/index.html","ca9c929612aeba3f33730795fbdff985"],["/tags/Result-Type/index.html","d279471d1e24d3191ed7c9c6b8088dc4"],["/tags/Server/index.html","491c78a62f2cc6f9698c50904b09b97c"],["/tags/Swift-Package-Manager/index.html","252762776d88f0d5c4fc10e83d081c56"],["/tags/Swift/index.html","814580589304b45c8135c57a1ec9d4db"],["/tags/Swift/page/2/index.html","77aef1ce3434dbbd5c73975871d9e547"],["/tags/Swift/page/3/index.html","99db15315dae6ed25f7213966850bf30"],["/tags/Swift/page/4/index.html","138577f85d20228487c71dff6ed40686"],["/tags/Swift/page/5/index.html","32d3c3dc247ae4461e483b51b660b23f"],["/tags/Swift/page/6/index.html","1e1e8a8e8466fdf859cfb0a48b5cad94"],["/tags/Swift/page/7/index.html","9c40fb99d83ef937ae7582cc78843a45"],["/tags/Swift/page/8/index.html","c231ea7bdf01cd2b3c0c49931233b145"],["/tags/SwiftUI/index.html","18b55600d1c5b454272a7693989ebae1"],["/tags/UICollectionView/index.html","67e666822b3ded6a8368b685f33ac74f"],["/tags/UIColor/index.html","da4f32123e5fb82b89e1bdcbe841ccc9"],["/tags/UIImagePickerController/index.html","b83b3529c9b52a6b295df18854994cba"],["/tags/UIKit/index.html","0de41148d6a683f694ec1a007bd289ee"],["/tags/UIKit/page/2/index.html","d3aff132c05e9a5fa036f70fc7752212"],["/tags/UIKit/page/3/index.html","b2be176165bde81ae963eb7c3bc41975"],["/tags/UIKit/page/4/index.html","ec396b3c1e077b3bb2746734d78a142d"],["/tags/UIKit/page/5/index.html","1bf16eb314e438db72071eac97848826"],["/tags/UITableView/index.html","432a4ee352e2d06fceba4fdd1d2f0b3b"],["/tags/Ubuntu/index.html","fa87c16ca7af8bcf2096cc9ded2bf5b2"],["/tags/Uniquely-identifying-views/index.html","e24b4c1519a1207fbb92c7948bfecbfa"],["/tags/VIPER/index.html","d5e212ab6963a4826f9f31d74a64e63c"],["/tags/VMware/index.html","1a8ce968c3202019a31f522337a825e0"],["/tags/Xcode/index.html","5eaf4d92e5bc025fbacba4bf480fd7c0"],["/tags/appleOS-Networking/index.html","21910aff30dab839a5c93f4c36e49292"],["/tags/enum/index.html","f4f404d222a69c830778e895b94a95b4"],["/tags/iCloud/index.html","8f1734ee960d3e8fa2f82610fa488cff"],["/tags/iOS/index.html","f0d911f80d5eb3afbdcaaf27958982e0"],["/tags/iOS/page/2/index.html","2508d3ffe05e460894741f5bc8569ee1"],["/tags/iOS/page/3/index.html","f3740d2acf2a2b6f63e149576fcd7077"],["/tags/iOS/page/4/index.html","6eea744c45619f48aa2ae020a48f7316"],["/tags/iOS/page/5/index.html","bf159c52e9c72d9090439f866212c2ee"],["/tags/iOS/page/6/index.html","5d068b80a1da74912b0148d57054233c"],["/tags/iOS/page/7/index.html","f03f21489f509e25b7dc6e2529627c23"],["/tags/iOS/page/8/index.html","cd6a16e642fbe4448a590e1b4721018e"],["/tags/index.html","562ec808cd3e7d361deb3d53c73ab4dc"],["/tags/non-optional/index.html","e6f6359d07df6a85f10feb235e458dd5"],["/tags/optionals/index.html","b081881584bffc8a967470a6d13d1ccd"],["/tags/random/index.html","46a9ece4d063dcd53ba015348edbaee4"],["/tags/transition/index.html","ed9c44844f5880e1caf0e1b18219b757"],["/tags/三方类库/index.html","f22d9b5389dfa4f57ef47e2c050e4036"],["/tags/依赖注入设计模式/index.html","2cf379493fed29c39839310700aee3dd"],["/tags/函数式编程/index.html","0b1f4e21a389ca9022c7692674fe5f36"],["/tags/初始化模式/index.html","8caaea464fe9347be3a319f632a21628"],["/tags/单例模式/index.html","ccc747acc20421f35a15839648982702"],["/tags/原型设计模式/index.html","af98eb584ae2c79881157e528eca4d2d"],["/tags/命令设计模式/index.html","a351cdf15ca5ea2d4f307331d8d711a6"],["/tags/外观设计模式/index.html","8eb480dd2e352bd6be03db3ae8669604"],["/tags/委托设计模式/index.html","91329ca7400367557f5daa50e9d1ac54"],["/tags/子类化样式/index.html","fdd209af61c178de6adfedf1d01c358e"],["/tags/对象池设计模式/index.html","89385f7f675446d7917fb6b4fcd4c04d"],["/tags/工厂方法设计模式/index.html","a516f60ea9bc4859e0817c7e0a5a7958"],["/tags/工厂模式/index.html","1c6627665bbe123664c534c1c31dfae3"],["/tags/工厂设计模式/index.html","211d694aec1376d8c11f06e32b945fe2"],["/tags/懒加载模式/index.html","1f23e631043978282c5cf736a0bac65f"],["/tags/抽象工厂设计模式/index.html","3476faf7e1216d1ba916e6bbaed9b855"],["/tags/构造函数/index.html","4ecfa1f980f6fdf563c317e5ef2aad25"],["/tags/架构设计/index.html","e96c7a56883a15446e0df8d8296d0757"],["/tags/生成器模式/index.html","b437f46d4c3ffc205e795e704dc31901"],["/tags/用户体验/index.html","5cc1a4ecd2841c719292e971cc623182"],["/tags/自动化布局/index.html","eaaa4a0ad38b2aa5fc62e3fd0310f123"],["/tags/自定义UIView/index.html","360618ffc1c4c49600b86406d2131a19"],["/tags/自定义转场/index.html","db68f5ae1a3d5523e32722059d0f7550"],["/tags/自适应布局/index.html","e0976c1282b0c792161cc08e0311b523"],["/tags/设计模式/index.html","b511ffbc2a741c36012160a4cd1f9f30"],["/tags/设计模式/page/2/index.html","aa6140fac5f86c5433419b26f02870d3"],["/tags/设计模式/page/3/index.html","564f54996ac7f5ce628c38f9dbe513b5"],["/tags/迭代器设计模式/index.html","de9f60857f321559cce241e98e4fbb46"],["/tags/适配器设计模式/index.html","530e3e3e45474fd41de6d0313db88844"],["/tags/静态工厂方法/index.html","59726fa4273ce99eab96b8ff6637f7f5"],["/为iOS应用构建输入表单/index.html","f037190e2182e55b693d161e9f517be6"],["/产品开发的幕后花絮/index.html","3f225e0960d69ab628169d2a068c9613"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f2bc75f4bfb6ac0bb9b6d1ec07a6b5ec"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f3ba9891491b93a4d6164e77155fc03c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a74bd74b4f57827fe664353d4b249b5b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","461866430130f05d6dbce4b87cb1168a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","32014dc26049be60b72ddcc96d1c6b4b"],["/在Swift中创建自定义集合/index.html","1e5a1cb6cf828d5d79b213dd05454388"],["/在Swift中处理非可选选项/index.html","e06fb5f6d40eadf4c2381a64e4eb275f"],["/在Swift中生成随机数/index.html","8df91bf0dbf97a9d74fd85eece135309"],["/在Swift中重构单例模式用法/index.html","111011c30b9a7c25d3fb23c7ecc54e90"],["/如何为VIPER编写服务？/index.html","5386ea32fb97f72fc4eb994f6b5a8a94"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","387b8623bdeb9a1a12c4c0e1a87ad2a1"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","5ba69e109cc89f3b8b6226fe5de6e4b0"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","402e40742c7926493dd089c72dcd4163"],["/如何使用VIPER构建SwiftUI Apps？/index.html","faf8c2423ec530d16ba6dbbffd56329a"],["/掌握VIPER架构/index.html","e4c128e992a56d9d8be1c598861180a0"],["/揭秘 WordPress Hook 系统/index.html","4a877656dc5b628a4a99927f5c96f9c2"],["/比较工厂设计模式/index.html","04038a6e54241c65da9eb9d734188af1"],["/深入了解Swift中的Grand Central Dispatch/index.html","04f139f84a13052ec16f04e60c981e86"],["/深入研究Swift框架/index.html","ea413020af4350d236c60dc04e23d2f7"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2da73acf023cb889d15cc8ca714addf9"],["/选择Swift而不是Objective-C的5个理由/index.html","04ac30104d8db094bc35354717b63f4a"]];
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
