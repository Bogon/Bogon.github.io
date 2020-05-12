/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","ffb48042596dea932a99931fd0527bb6"],["/Advanced Swift系列(七): Strings/index.html","640ff8d06a8503a214be352e7acbbddd"],["/Advanced Swift系列(三):  Optionals/index.html","fc6ab1af0607a3dc9f03c59b873f6fa4"],["/Advanced Swift系列(九): Protocols/index.html","17633a0005786c4e986291be2d4fc0ab"],["/Advanced Swift系列(二): Build-in Collections/index.html","410950cf6f2b2c646ccaeb1a63a11763"],["/Advanced Swift系列(五): Structs and Classes/index.html","984f1d250b9badb6a3ab3ec6d013a3de"],["/Advanced Swift系列(八): Generics/index.html","a7590db17228dcc9cb9f03d43b373ae2"],["/Advanced Swift系列(六):  Enums/index.html","a62da2ae25a4a50e13b73bb21d063037"],["/Advanced Swift系列(十): Collection Protocols/index.html","dc81844657653b09931d9e47a5af65ae"],["/Advanced Swift系列(十一): Error Handling/index.html","cdf0c1d5ad9f6705e01d363362f912fa"],["/Advanced Swift系列(十三): Interoperability/index.html","eae3f469c1ca508581c67de0386bbf01"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d68f1ca23d1d84f0b9e824d3ee90fff2"],["/Advanced Swift系列(四):  Functions/index.html","4820bf8623c7748e7ce6450cc4f4ea7c"],["/App Architecture系列(一):  简介/index.html","dc508310efc464596bcf54e5cba86065"],["/Functional Swift 初探/index.html","7db6db1c106ebbd86780782fcb082821"],["/NSCODER和SWIFT初始化/index.html","458c0a623aa84a71eb3f05ced9aff052"],["/Swift 5使用UIImagePickerController拾取图像/index.html","958e2297422064c034bc48fe124d85aa"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","f606ecbe644aa70f9721db15072779f7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","9067c6c35b4503a6925822ea85a385d9"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","55fa71e413ef24b0e12f740d7ce7d31b"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","1677805fda272e87058f479f7231f770"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","adc7e43128beebd180a0cc8fd285bb30"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","9c186636f1c81add0a0b6b3521ddc477"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","580ec842e7659ed7496e63c62e499772"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","db649e9d30ad539a551f680c75ea10e4"],["/Swift CompactMap vs flatMap：差异说明/index.html","77065c3fef53081d92a4632865c67e71"],["/Swift Grand Central Dispatch 深入实践/index.html","11c3ebf013d6a92d8c37787b31935c49"],["/Swift Lazy属性初始化/index.html","b25d60c579de8ac9d39e191e52a4d1cb"],["/Swift Promises 初体验/index.html","de42606bcdf91443376f980e4c6e37ba"],["/Swift Promises 探究/index.html","e69c0186cdc9acb5bbb7b9c8bad382d1"],["/Swift UICollectionView使用指南/index.html","2e69cfcec16582c4d9e6f4b0167c5b3e"],["/Swift URLSession 和 Combine framework/index.html","347c66353ca4602c7fbc344c4901e14d"],["/Swift 唯一识别的视图/index.html","45d76b2a853edb8a65e8dd06469cb7d8"],["/Swift 如何学习现代UIKit？/index.html","af06cbb85e044b041cf533527ebbb2ee"],["/Swift 用 compactMap 替换 flatMap/index.html","206c99f1a689aadcc93f24c72d7c45d5"],["/Swift 选择和播放视频/index.html","ba6128f5795f75a97959a09c4c3cbd91"],["/Swift中UIColor最佳实践/index.html","ca5bedd5b4e93ea046d20638d37452ad"],["/Swift中快速简单的工厂设计模式/index.html","eadaf201dfeef8d7cae9913a6894cf09"],["/Swift中构造函数与静态工厂方法的比较/index.html","8a3664c8a2e40ed2e78fc49837d65189"],["/Swift中的UITableView教程/index.html","317ec286b221425c3ed0b4895f6513cf"],["/Swift中的懒加载模式/index.html","829a90bb42c6162dbf3db79c90926dad"],["/Swift中的模块和挂钩/index.html","4338bc65b65581e632aa1304e1997d3a"],["/Swift使用布局锚点添加约束/index.html","f26761adaf727ac7550727fb4f1bb00f"],["/Swift依赖注入设计模式/index.html","1e98b005bcb94261d09fe86768171e15"],["/Swift关于Dependency Injection (DI)/index.html","ff65e2ce2c234d1f474ecfd352cb5e9b"],["/Swift初始化模式/index.html","d93aad2268f829b09a60c2295aec47c3"],["/Swift单例模式/index.html","d994b9f7fbc37d1a5f4d8f0c586b2308"],["/Swift原型设计模式/index.html","7d151fa0a17bab1447a14057422268fc"],["/Swift命令设计模式/index.html","3d2f0d069c35f29210f34b6482512f4c"],["/Swift外观设计模式/index.html","f6ff72242c0ed0278101006d926df644"],["/Swift委托设计模式/index.html","d8012d04209b7271e6a1a13da31aba16"],["/Swift对象池设计模式/index.html","7a386032b5cd36c4f26b36fdc2c74a74"],["/Swift工厂方法设计模式/index.html","36d713acc93a9b44a4f5bcf5c841aef3"],["/Swift带闭包的懒惰初始化/index.html","aea613ecf8bb7780f1dafd9e4fbaad5d"],["/Swift抽象工厂设计模式/index.html","6630711dbd462fd3f82eef4f8f15aec2"],["/Swift掌握iOS自动布局锚点/index.html","e7e4b9987e5da169cafd82e0b527531c"],["/Swift支持旋转的自适应单元格/index.html","ef05753f8564d5a7272d2b86c73f73b9"],["/Swift枚举值/index.html","07d26b5ef9aea93c3354432c9c7b3b62"],["/Swift生成器模式/index.html","0ce02b170cce9104d34cefc6d8b746ea"],["/Swift结合Xib文件自定义UIView/index.html","6f2f848f2eb56ea68c91e1dd7958df38"],["/Swift编写的20个iOS库(一)/index.html","ae6794ed93a406b8fffc1ceb36d7ffff"],["/Swift迭代器设计模式/index.html","9d3ed8a5014058c097d35e19e73ba99b"],["/Swift适配器设计模式/index.html","739b63d1f9eea7a19eb314d541a56690"],["/Swift静态工厂设计模式/index.html","5b8b52687ccf9c46b704e18e868b10a1"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","58d6a1e6deb7b64876da9224cda82da1"],["/UICollectionView data source and delegates/index.html","1d91647a6d9259235b4b5ae58c93bbcd"],["/UIKit初始化模式/index.html","a573d46fc1b8912d260c0199440d9227"],["/Ubuntu18.04替换国内源/index.html","6646875d09cbe3070bbd02d579ff5e65"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","678d4718ee4d89fdb7913b17171dab30"],["/Xcode扩展/index.html","4a093f0f910c036c3b00108e89e3cac6"],["/about/index.html","0a6f15fa71b3254d4f1c7f1e9458ae23"],["/appleOS的Networking示例/index.html","6051cde71bec4c3937c4b8e4e8c57c01"],["/archives/2020/04/index.html","b9378c865d9ea1b661ef049cd7217098"],["/archives/2020/04/page/2/index.html","c18c48def44a8fcdedc656cebf165cec"],["/archives/2020/04/page/3/index.html","9a6f343995b949f661c3592028d89cad"],["/archives/2020/04/page/4/index.html","ae972f21e5eeb1320b1bb7e17f0bff10"],["/archives/2020/04/page/5/index.html","1f5a6a2f58861811d46383a28defb62f"],["/archives/2020/04/page/6/index.html","4c070771037b5e54e264b815ed99280a"],["/archives/2020/04/page/7/index.html","a714a17b8e7c01338a543d01585aef9b"],["/archives/2020/04/page/8/index.html","b7ad3327a2b7c050723b008e3b45d5ad"],["/archives/2020/05/index.html","7485a0289ad1857873a8fca4155a08d4"],["/archives/2020/05/page/2/index.html","b3711adac92206394bc6eae05a8a6e10"],["/archives/2020/05/page/3/index.html","b5d06934b66476ac3fe5c08806e2c90e"],["/archives/2020/index.html","a7c023835a35862197c98c01a7e7cc55"],["/archives/2020/page/10/index.html","557c351b37a69d7ae68269db3b30b537"],["/archives/2020/page/11/index.html","78932c8130740d9b7e37143123c4391c"],["/archives/2020/page/2/index.html","06965435006c747bf1bb645c497730ab"],["/archives/2020/page/3/index.html","5e3ab8a9440b9f7d3dfaa93131693500"],["/archives/2020/page/4/index.html","16241f5d426fda760af14d328ccc7f03"],["/archives/2020/page/5/index.html","a3844e49e1a9d6197d28c43137427e92"],["/archives/2020/page/6/index.html","d8d1ab61608cd7456838559ddbe5f033"],["/archives/2020/page/7/index.html","9479f356ddc3cb35ab95203b9dc1899f"],["/archives/2020/page/8/index.html","d0bc2f41bfb49d1bffcf516356ec099a"],["/archives/2020/page/9/index.html","6db49763ba3907f5bbca25dea3f97caf"],["/archives/index.html","e6dfc0086764b459623e0138638a6e19"],["/archives/page/10/index.html","1f4f144f4048aab187719a448c453ebd"],["/archives/page/11/index.html","5f0677642f05d402a1b04fbae781378d"],["/archives/page/2/index.html","11b93af53bd628efda1a8fabd586223c"],["/archives/page/3/index.html","1b27a327ba738d6165f03cddfb258bc3"],["/archives/page/4/index.html","5b4ff8ee385df9ac02a84aafe7ec8a2f"],["/archives/page/5/index.html","fb79935293c80982aa256eda0f25eb99"],["/archives/page/6/index.html","3d88072fd48db0a6051d6cfc4f4ec7d3"],["/archives/page/7/index.html","6c17d66756182b3e25cff8f81a5b4578"],["/archives/page/8/index.html","c39f978655772f0528e1bc2d839426dc"],["/archives/page/9/index.html","0575aa2c452ba7007d601a9fb3f0ec6f"],["/categories/Advanced-Swift/index.html","8c06959457ab203cfa4afc3078e9174f"],["/categories/Advanced-Swift/page/2/index.html","24fdc70326ca1dde9cc7aa1d7be9594e"],["/categories/App-Architecture/index.html","be1b4d4d8a1b32f53c185e4215fa167b"],["/categories/Codable-protocol/index.html","54c8737f72f09367d785e81b6404700b"],["/categories/Combine-framework/index.html","191f21d4a635e3983d9eb45b58796382"],["/categories/Combine/index.html","1efed0c69909d2baea9eb994f790915c"],["/categories/Grand-Central-Dispatch/index.html","b41ea00e97a79f7e1ec0240bb5c19e51"],["/categories/Hexo/index.html","33e8218ea5f77da958a8debe0a30f485"],["/categories/Promises/index.html","a4186d8fd309c2f76f2fa9757f03afc3"],["/categories/Result-Type/index.html","c49ea2295d8a39fb3c3e6927781b2594"],["/categories/Server/index.html","54e754b95fc07ac8270420b196a0d3ff"],["/categories/Swift-Apprentice/index.html","43c3a4d93cc46e91a3d3883433e17558"],["/categories/Swift/index.html","c405ada48fc3a1dff548cd8265a2768f"],["/categories/Swift/page/10/index.html","c7cef5e39687e189ea14067ae66b45b3"],["/categories/Swift/page/2/index.html","9ef6ade29ebc9fe588f4923233859727"],["/categories/Swift/page/3/index.html","1a8bebefaa4ca8f483c4a6bcf64cc623"],["/categories/Swift/page/4/index.html","c28eb54a54678cfa7175e8e3ef988875"],["/categories/Swift/page/5/index.html","843eae44e7c0b787aa084a242a5fe7d1"],["/categories/Swift/page/6/index.html","4709d2dbf58c60c991c7b4a2b9b0953e"],["/categories/Swift/page/7/index.html","eeb852a25476dd072fa184b118e4e3dc"],["/categories/Swift/page/8/index.html","f02beecd0b4c89ac3d3f12b9fa5e5c75"],["/categories/Swift/page/9/index.html","0001bf7b536edf565dc107d2774d34a8"],["/categories/Swift5-2/index.html","5e0a7e267454d0d33f681015760b86ed"],["/categories/SwiftUI/index.html","ba49413056ee8ac1cfeed8ffc5330fb9"],["/categories/UICollectionView/index.html","78757d5a2a331b59cc0d175b858108d9"],["/categories/UIImagePickerController/index.html","c5c925e06c8831ebceae3c68d52d2757"],["/categories/UIKit/index.html","feec8fd90d3cdcf412f393471368356b"],["/categories/UIKit/page/2/index.html","5c69ba9a322e6f9a081a3c309b096aa7"],["/categories/UIKit/page/3/index.html","c401d392cad52de16e84d869f5fb3b19"],["/categories/UIKit/page/4/index.html","33008ade7c9883da0ad225f553bbd239"],["/categories/UIKit/page/5/index.html","b9251fa9ada8e91fea49653dd888bb7e"],["/categories/UITableView/index.html","c0af2145e41b7b0a309cd4da93e6789a"],["/categories/Ubuntu18-04/index.html","e6243dec7857414dd91de35aa4f8c56c"],["/categories/Ubuntu软件源/index.html","b6712ef06ca8d55dddf264ff8d4716a2"],["/categories/Uniquely-identifying-views/index.html","64b69224bfdee39762e776ab1f6fa282"],["/categories/VIPER/index.html","74da22b08081f5ed1268bcd36928d1b4"],["/categories/Vapor4-0/index.html","a92933e4aa61bf7d87e1c8ef800de57c"],["/categories/Xcode/index.html","b6d33c6646cf84eb34d412e1bc77873f"],["/categories/appleOS-Networking/index.html","26e35d28f7ba2c9e2bd80daced366b2a"],["/categories/enum/index.html","038e25e81216b5e00a6b96c6b45a2091"],["/categories/iCloud/index.html","bc79fcbf3f5c0ade488fc87a07b10ae0"],["/categories/iOS/index.html","30f96392c3654b30a214d8db2812a337"],["/categories/iOS/page/10/index.html","6919cfc58f5bc16db6fcc26d90608f75"],["/categories/iOS/page/2/index.html","b6673b57ba9834c545e9763aac4f1f88"],["/categories/iOS/page/3/index.html","8248d8372476810ec6f5d09b03c74c50"],["/categories/iOS/page/4/index.html","ea5b40d25c5356d1083d90561089339a"],["/categories/iOS/page/5/index.html","9f897affc68a595db7660819645e9b7d"],["/categories/iOS/page/6/index.html","2f63fc0b21b414c1cf5eba979bc677b8"],["/categories/iOS/page/7/index.html","d2f34065cf6619a27b24f7b36b8466db"],["/categories/iOS/page/8/index.html","80f15b9cfa50937fbf90d454141c0100"],["/categories/iOS/page/9/index.html","b3b1e60af57f2cbdbafa472f829fe3d7"],["/categories/index.html","3f9796cba0427db43a45599f1763b43c"],["/categories/random/index.html","e29e0dbadc2967de5c652925d17672f8"],["/categories/三方类库/index.html","918d2fadaf22f9cb47e5e4bc28ef32c0"],["/categories/函数式编程/index.html","d65e40760bbf1bfa95cd93adc92e96f8"],["/categories/子类化样式/index.html","9f129ce0732b5f6644dc654169f11a18"],["/categories/架构设计/index.html","954abae5e0338a725a3c0ee74c6b6abf"],["/categories/用户体验/index.html","b5077a6f00deb71b1507d06c46885c74"],["/categories/设计模式/index.html","f3f5c1befaa90fb8da243f12bd8d0aad"],["/categories/设计模式/page/2/index.html","ec7d07914a9c77ce47f33b3523ae1f02"],["/categories/设计模式/page/3/index.html","527cae7842c4f3532f3d5ffe83356aab"],["/css/main.css","18e4fe8316356522a2cea1156fa1fe52"],["/hello-world/index.html","c87f8958dfbc7a4f768da79833d5e12d"],["/iOS VIPER架构深入实践/index.html","4348348664e2926b423821ddcdeafba6"],["/iOS 自定义视图，输入表单和错误提示/index.html","c08ed8314eafe42c67188ea1bc9fd406"],["/iOS如何使用iCloud文档？/index.html","bb0a922dc0ea4543febfa42a2a801dcb"],["/iOS子类化样式/index.html","cbe7422128b27db901b845db3277b097"],["/iOS自动化布局编程/index.html","a261e95efb37ddb36b52d6be19886913"],["/iOS自定义转场(By Swift)/index.html","42e5708a656537fbc04645a39d36c765"],["/iOS项目架构：使用VIPER/index.html","8c8dc52513433fbfb65ae08e0fa969d6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8a7d481d7ebd5d5ac7f2a2cc2674a6ea"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","b77ff61350630cae9499bd0b285dbe08"],["/page/11/index.html","d866fd5b5191fd89cf25f5bc48f420c0"],["/page/2/index.html","467611115400ae3b7dfb8510a75422de"],["/page/3/index.html","99bfa7dc38dd2547df31b430053776d9"],["/page/4/index.html","22ce8901466162824ea1c86e56f5fbb4"],["/page/5/index.html","d5120aa3dbc83a8ea084f67fdc15140a"],["/page/6/index.html","4a7b494563beb7f00be849001e1745ed"],["/page/7/index.html","7f887e1121f4c2bae99461610283391a"],["/page/8/index.html","af9acd2137906028ef77d33ea6ca0285"],["/page/9/index.html","b53eb428b826831473d034593890c174"],["/schedule/index.html","37069758703b6647ed56af7ca9f2d86c"],["/sw-register.js","4cbe6a72bad8fb4f47072698f8a3c369"],["/tags/Advanced-Swift/index.html","48f4ed6bf403fd40ff1dbd7c17b95d68"],["/tags/Advanced-Swift/page/2/index.html","f401336374c8fc40bcd72a735cdfdc2b"],["/tags/App-Architecture/index.html","45d852e01ad3facd0fea4030120205d9"],["/tags/Build-in-Collections/index.html","8c075e94550de4223e9e79a45d74db65"],["/tags/Codable-protocol/index.html","d98b59bfa76a32c12edbd16cb6106a89"],["/tags/Collection-Protocols/index.html","a4d6d20ec2b03de149d4b61a3f25e28d"],["/tags/Collection-Types/index.html","c4f1a20e9ddc253298fa55600742d207"],["/tags/Collection/index.html","a7b9dd871a044c1929a5caed52d1e9da"],["/tags/Collections/index.html","7399e175cd69bbad6789549c0d409f51"],["/tags/Combine-framework/index.html","5fec22a3b35d297c1af3a5c6392c072d"],["/tags/Combine/index.html","9ab22e011f85c46c8206f596a3bb9eae"],["/tags/Dependency-Injection/index.html","d2fc3bedf9019df343e4f0dfcd6b4bbd"],["/tags/Encoding-and-Decoding/index.html","945dea0dd2bc4f33664f056ae18902fe"],["/tags/Enums/index.html","8fd58606e1688c22b3808ee700dabfa2"],["/tags/Error-Handling/index.html","2c9a6146410896f672b0fcd943ba5e4b"],["/tags/Functions/index.html","29d8c0782757ebb63029ffbcf9f2da14"],["/tags/Generics/index.html","41bda120d7d710f47aa19b50ab6fe97c"],["/tags/Grand-Central-Dispatch/index.html","afff690fa719409bb6170e716819c0ae"],["/tags/Interoperability/index.html","f7bb44c7896bc9a832bd917b8298f10e"],["/tags/Introduction/index.html","d494adc9f594bbfa63b3934dd46850d1"],["/tags/Modules-And-Hooks/index.html","eb1a87beaab66c5ef0296810376e56f5"],["/tags/Optionals/index.html","1b46de5203d5d92abfffd5f19e125412"],["/tags/Promises/index.html","8e591920d186ae409b0590f572f4da65"],["/tags/Protocols/index.html","f6be2fb023a705ed923612ddfb969824"],["/tags/Result-Type/index.html","834d08ba665295c69467e05601aeef39"],["/tags/Server/index.html","5c31ff26133f2d0087061bbab5f9abc8"],["/tags/Strings/index.html","7d6296ddff88caa3ffc9777a41bc8f0b"],["/tags/Structs-and-Classes/index.html","4e4da1e2cd0253519d49b79184a8e1ca"],["/tags/Swift-5-0/index.html","4ca9f7b0cb1e15fc3de0f4f93289b5a2"],["/tags/Swift-5-0/page/2/index.html","e66a5a94b3438db80e46fc8b2723af73"],["/tags/Swift-5-0/page/3/index.html","fb0b8f36542543fa8b9bfc20868dd575"],["/tags/Swift-Apprentice/index.html","ab57c863f140ea69cc18c4035b0423c6"],["/tags/Swift-Package-Manager/index.html","4ac70362dc02e7bce3c11501aa8e74cc"],["/tags/Swift/index.html","bd2a68cdec884bb29ff0031d3864e852"],["/tags/Swift/page/10/index.html","946bb1b9e3d8644987113ee5e4a4079a"],["/tags/Swift/page/2/index.html","5c41018282ba10c342935bd332ed3a57"],["/tags/Swift/page/3/index.html","16fe2b4ffd9d999ad335fcf75fd1b41d"],["/tags/Swift/page/4/index.html","12a5f37d11d9eedd4bb588919cb0c5b0"],["/tags/Swift/page/5/index.html","674d4bfd2f9ee14f5c45ffc691467631"],["/tags/Swift/page/6/index.html","93678bf48725e1ab1ff89c4f1a596299"],["/tags/Swift/page/7/index.html","ecad32fb40b6badb76c896680f2c876d"],["/tags/Swift/page/8/index.html","fb364b5da29ce9c690a440604147cdfb"],["/tags/Swift/page/9/index.html","0171f89b3c44efb821abf71499623eb2"],["/tags/SwiftUI/index.html","88d0c9f11a2f19fb588fdd619962b2d4"],["/tags/UICollectionView/index.html","90d63a75924e99783f8329b8e2b97c1d"],["/tags/UIColor/index.html","e6345e073527386a6806219c4366e424"],["/tags/UIImagePickerController/index.html","783fa71234c622ad520a03301b7060c0"],["/tags/UIKit/index.html","2a8edb83bcb45440c3e80b68cd88fb5f"],["/tags/UIKit/page/2/index.html","955297cbdcc086d565c039e1637da38e"],["/tags/UIKit/page/3/index.html","a0d5251b2381a289341dad4069acd11b"],["/tags/UIKit/page/4/index.html","a075e221a8c6b3d8b411c88629feb6a7"],["/tags/UIKit/page/5/index.html","cc8cacf82a08ac0a1ab6bf94bfe98cb9"],["/tags/UITableView/index.html","eb5142151c0f32c2db3d7458ba561cb8"],["/tags/Ubuntu/index.html","d751208c902bd23e083ca19c07a1a437"],["/tags/Uniquely-identifying-views/index.html","7be58ab2cbd80ef4f221602fd86e9583"],["/tags/VIPER/index.html","d14ec7afdc7546d8a73752b4a190b020"],["/tags/VMware/index.html","5d94429d2cb7bb3e9080e4bd1a1363db"],["/tags/Xcode/index.html","30a621da4cd17a635d514b1f8fd1908c"],["/tags/appleOS-Networking/index.html","1adf514dae5b3fd114d53f6554189402"],["/tags/enum/index.html","6f19c73ce842fad37b3141ed4b423312"],["/tags/iCloud/index.html","3571cd48d8f75bbe5833e596b9cf0f0e"],["/tags/iOS/index.html","5be00464e9da4fdf97f61f4fe50cc760"],["/tags/iOS/page/10/index.html","0edbff2773af8b4191a0be15d5da6015"],["/tags/iOS/page/2/index.html","2d30a4c1eab951efe26c05d2b996b24c"],["/tags/iOS/page/3/index.html","2515061a91f122e12b02ebae1f62b0ea"],["/tags/iOS/page/4/index.html","bcae89c7146ac0db95e7dfe4031edf15"],["/tags/iOS/page/5/index.html","ebd9f012865c27f2b7f84671865da538"],["/tags/iOS/page/6/index.html","fb4966718250a70bc41e7f870c3b6d48"],["/tags/iOS/page/7/index.html","aa0f24852d858fbec46717223897897d"],["/tags/iOS/page/8/index.html","cad830d04d79a428ac7d8d6a65ab20e0"],["/tags/iOS/page/9/index.html","bb4c9511c003cf22c4f4bc0bc3af4cdb"],["/tags/index.html","f9ff78564981ad11976065b8270e4e70"],["/tags/non-optional/index.html","e7a30edb13dd35ff4f2348f28e9eb140"],["/tags/random/index.html","d021dc2bf9fe39641f367a2d3950c452"],["/tags/transition/index.html","259600248323d7a3a2e51173d5e49137"],["/tags/三方类库/index.html","c99fbefd4de31131b23767ff03968ba5"],["/tags/依赖注入设计模式/index.html","d93244c4017f0ba5b917a06e799da8a7"],["/tags/函数式编程/index.html","0cf768b5bf5e2c28d9ba1215ce96f5b8"],["/tags/初始化模式/index.html","a197c2e483449b1a1e73f12da1cd6f89"],["/tags/单例模式/index.html","963a8982999d98bcc433c714ff5b1f5f"],["/tags/原型设计模式/index.html","1d44f9f3462bcff0c29f7059fd650612"],["/tags/命令设计模式/index.html","a54429a8038924821b0ad3c8a612041a"],["/tags/基本控制流/index.html","24d5fcc8956d5075942a420134fced57"],["/tags/外观设计模式/index.html","4a5b4b092fd3c9e5e773dcd8c9086bfb"],["/tags/委托设计模式/index.html","eecb26be7cd2b2c1d7d033a85ef5d938"],["/tags/子类化样式/index.html","09db73f971769a08dbf9416311e5aa13"],["/tags/对象池设计模式/index.html","5448133712038f89ae995f21b079609e"],["/tags/工厂方法设计模式/index.html","0c4cdf99bcdce97923b2a4cd5684a603"],["/tags/工厂模式/index.html","b04676375ba60c3adb3beb5335d45252"],["/tags/工厂设计模式/index.html","bba074a06e8357ad5b8a7bc0b54ad03a"],["/tags/懒加载模式/index.html","28dcd07cdb9e966b3026a80c5dd5bb59"],["/tags/抽象工厂设计模式/index.html","678a8be8e07ae9e6cf196939b34e5cc0"],["/tags/构造函数/index.html","0a172e1a8139180de7534a42bf50eaa0"],["/tags/架构设计/index.html","2a5dbce1c77129e15a41f022094f48ca"],["/tags/生成器模式/index.html","ea22127fef90b583cbe1cfd1b1495d08"],["/tags/用户体验/index.html","a1f71174fdd315c5f6db206916b7ba13"],["/tags/类型与操作/index.html","a88e0c86fe9275969c60f4a97dca3aad"],["/tags/自动化布局/index.html","22f1a95a8df20ee07773e9a7b2e0800e"],["/tags/自定义UIView/index.html","a4f55683eed620f24577e49583893c75"],["/tags/自定义转场/index.html","fd80dd25e2ae689b3e18463311a2c206"],["/tags/自适应布局/index.html","df5cd366d9b7cee215f6284c8cf80719"],["/tags/表达式、变量和常量/index.html","640b0ef57d9c5f11625f534ee1164f2b"],["/tags/设计模式/index.html","ad1f4bcf61c868b567b972351f83fbf6"],["/tags/设计模式/page/2/index.html","86702286862e5d67fbec4feeb854329f"],["/tags/设计模式/page/3/index.html","89eeb63b7f4b536085f65d80dcee554e"],["/tags/迭代器设计模式/index.html","1b62480ca9c8f2537e71f58f70a7531b"],["/tags/适配器设计模式/index.html","22da0d8339d7c12bc790e32165ed1e6b"],["/tags/静态工厂方法/index.html","773b3f02131e8bec61c36aa5c98ae1e6"],["/tags/高级控制流/index.html","59fc7071c8a8d52fdd99aa959af29740"],["/为iOS应用构建输入表单/index.html","2989aeabbd91a0f03685c700dc9f3c9c"],["/产品开发的幕后花絮/index.html","9a5ff505e785aecb1961051f9be28ddb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","68a3be1d00b887b4db916697742b8054"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ceefad0ba582122b1e22d2afa166efe8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","bc740e030eca7312515221cc117941a6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4205d49baf8007d9f1f262a8038421d2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0c70d55cb8ab549f56c8e096834430e0"],["/在Swift中创建自定义集合/index.html","1b9f6c58d910cc18912a2e29694533e2"],["/在Swift中处理非可选选项/index.html","57c0ac46313132d2573d63b9d87ccffa"],["/在Swift中生成随机数/index.html","f8aadab0cfca6da9f4d5bdb4fd7a0c31"],["/在Swift中重构单例模式用法/index.html","5047113d0a6ef8eb76a828b260205352"],["/如何为VIPER编写服务？/index.html","e4d25f32dad4836fb81af75f1d07f2ab"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6b6e9bc3f524af649354f22cba7a4744"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9e653d48ae612beb2626a0433e791a8d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","66d1e69a9ee6a246d13222e235eed84b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","79abe6f24f495eb658e71ef105fb2c0b"],["/掌握VIPER架构/index.html","ce6d73c98c0f7d1a7f8518784577e0a9"],["/揭秘 WordPress Hook 系统/index.html","1cff0c8a6b149f70a11f938a695e9e13"],["/比较工厂设计模式/index.html","3433e027a42a35be701fce7a68a40358"],["/深入了解Swift中的Grand Central Dispatch/index.html","831295cec48bb422a0a5a936c79ce331"],["/深入研究Swift框架/index.html","5f1edcbc8ea22a50ae0a706828aa3060"],["/适用于iOS开发人员的VIPER最佳实践/index.html","26079872d45dcaa0b3fd03e6b67bfbdb"],["/选择Swift而不是Objective-C的5个理由/index.html","5302d80d1b6ce2cb55ab9b63e6c93574"]];
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
