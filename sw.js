/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","0b725b15fb39e972d5fb36cf78f2be90"],["/2020年iOS面试题总结(三)/index.html","0fd029f996a282010887801d1542a6d1"],["/2020年iOS面试题总结(二)/index.html","e01206d40db37b0e246eeef4eba209b6"],["/Advanced Swift系列(一): Swift 简介/index.html","fcc72790f05964be31e9c21b7d0f65b3"],["/Advanced Swift系列(七): Strings/index.html","072bd931035c11e1c25bc63fce0712a7"],["/Advanced Swift系列(三):  Optionals/index.html","68f180151eef432ff85013b80947829b"],["/Advanced Swift系列(九): Protocols/index.html","2576a57c9d6006bbea031d0f0aa3c1cd"],["/Advanced Swift系列(二): Build-in Collections/index.html","d41929edfa316e5cc231f48d1e30c482"],["/Advanced Swift系列(五): Structs and Classes/index.html","d1f59b780f1b09958bd5e96401e819e1"],["/Advanced Swift系列(八): Generics/index.html","a92a715fc30bdd435fe382d4c183008b"],["/Advanced Swift系列(六):  Enums/index.html","c67b71aaf749fd71254398401339494a"],["/Advanced Swift系列(十): Collection Protocols/index.html","f27a47e99736066d5ddad4bfd7ed9cc9"],["/Advanced Swift系列(十一): Error Handling/index.html","46aefecaa89d544a37a723d567504111"],["/Advanced Swift系列(十三): Interoperability/index.html","b0981a9819eaeeef51399e71ea559488"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","3de810e9f2373d311ef4020fe875b045"],["/Advanced Swift系列(四):  Functions/index.html","fd8ee417a8ae87aebcab00062938e05a"],["/App Architecture系列(一):  简介/index.html","7ad7603fe4c562a7ac11fce38f7e4b47"],["/Functional Swift 初探/index.html","03852f5a5e4ccd8c805e3f867f40f9ae"],["/NSCODER和SWIFT初始化/index.html","f3636369ce0414fd5ede026718f460e3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","3f207fe0f48831f427b9024e75e9056b"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8b08f3b34417bad441f648274df45d69"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","f04cc7d0c974fd11812e4cd97e8ebd67"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a34b4400c97290b6790bbaafd33b23ca"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","1e8830fddd86156939c3e147c5e1c6fe"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","7de8336341867ba2f40a6cd3ef3c3d26"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","55d37360667cc436a5eacda0dadbaa2b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","e23d2e33176c22c24e46b331d107a7f0"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e7b937865017d5e548a70aebad0867aa"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","2b64f84e05060f46e7f11602d619921c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","87d9afaa82856e7b08d2db92f74f67c1"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","724dd24cee78eb1bb84c97962c99d50b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f1fa918f1ef74c62096ed4582ec0e8f0"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","737d3e706bca2bb6dd8974ffdd6ce871"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","867c662038855b3edd3a94addad66672"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","ba116221ea835d517af157558c3572c0"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","0b7d19eaec9ba6fea868b138260bf53c"],["/Swift CompactMap vs flatMap：差异说明/index.html","13daaff801ed8798e3a71cc0621a25af"],["/Swift Grand Central Dispatch 深入实践/index.html","68ea9140517d383cb926a45d96a47021"],["/Swift Lazy属性初始化/index.html","f659d3461ea5cf782606216cb762a569"],["/Swift Promises 初体验/index.html","86b252be6309a493b0e0944ac672414b"],["/Swift Promises 探究/index.html","c739ccde112b0847e7ef3e73b0e7dee1"],["/Swift UICollectionView使用指南/index.html","64a5643e320d990580849cea1ba73e18"],["/Swift URLSession 和 Combine framework/index.html","41457318ae67e09bd4fb08e3074d8bd9"],["/Swift 唯一识别的视图/index.html","a7f0bd17fd1bbfa004e3ab76a8f7f877"],["/Swift 如何学习现代UIKit？/index.html","4b1ecb81c3214350b5f113a9088f7a6e"],["/Swift 用 compactMap 替换 flatMap/index.html","e53b79cffce05133a256e004db3df531"],["/Swift 选择和播放视频/index.html","4ea84dc37b9ea1f893905e93e21648ad"],["/Swift中UIColor最佳实践/index.html","1712b587acf0a3b9b5970c2f6770f422"],["/Swift中快速简单的工厂设计模式/index.html","9f7115c40a4e378dcc9917aeff6910b0"],["/Swift中构造函数与静态工厂方法的比较/index.html","d95191124e28b033ef61a853f92f827b"],["/Swift中的UITableView教程/index.html","2b83684462736fe1de512ef9644f747c"],["/Swift中的懒加载模式/index.html","1d11cb6c15ab970b326029d7a7e92ba3"],["/Swift中的模块和挂钩/index.html","680e5943bbbbb6a12c4dce8ff8830ff2"],["/Swift使用布局锚点添加约束/index.html","acf28e2f7365a311c196a6aa1f981582"],["/Swift依赖注入设计模式/index.html","7594ff3d60195d5a85fb89ca13053d12"],["/Swift关于Dependency Injection (DI)/index.html","16d360dfc56cae37ed70ab96a7647f55"],["/Swift初始化模式/index.html","d6d4af77ac2b85e4654be08e2371c4a9"],["/Swift单例模式/index.html","285557cadb547c73b45d700883870499"],["/Swift原型设计模式/index.html","c6b2e60b15de036b068b1a310eb1b7ff"],["/Swift命令设计模式/index.html","598873ffeae9ec9d281ac201ef680b38"],["/Swift外观设计模式/index.html","4a89f7c14843b3afb9faf1618763ca5b"],["/Swift委托设计模式/index.html","5767310387b326a92d2fbf6619fa6fa2"],["/Swift对象池设计模式/index.html","c912ed25e882de6cb76b602c08456062"],["/Swift工厂方法设计模式/index.html","a16652cddd86c4c6fe6fefbfdbc77496"],["/Swift带闭包的懒惰初始化/index.html","7df052d7c5633543cb31aaf6617ec213"],["/Swift抽象工厂设计模式/index.html","319a2b6323117cb29f4f51c144cdb686"],["/Swift掌握iOS自动布局锚点/index.html","31a65f81064498083ec11cf2693010d0"],["/Swift支持旋转的自适应单元格/index.html","9f8530785851c0e3e9436b758cc8ab05"],["/Swift枚举值/index.html","e27b0811d745ac7af783bc403d887749"],["/Swift生成器模式/index.html","470fd30f99a5084440ed8f60431a6559"],["/Swift结合Xib文件自定义UIView/index.html","2db7762e79a4fba6fa9017a10138b5fa"],["/Swift编写的20个iOS库(一)/index.html","aedb9079768736ba0d558a2720e9b40c"],["/Swift迭代器设计模式/index.html","9c4593a88239c7fa259e22dcca6f92e3"],["/Swift适配器设计模式/index.html","ece0cbd43819fb15fe37cf3f51ab4d05"],["/Swift静态工厂设计模式/index.html","d917a91370c574ecdf8e03cfc2706cd3"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","34880ad2e7b950b1e098b7154da58789"],["/UICollectionView data source and delegates/index.html","94143ab4d1704d8ed2439eddf1173ff0"],["/UIKit初始化模式/index.html","9a7d12497321f43aec6e243227761f01"],["/Ubuntu18.04替换国内源/index.html","b0da5e311d4e98dba52cb280c0ff7f80"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d194e0f2899e0158d07114547a97935c"],["/Xcode扩展/index.html","d186fe1034c1df1af60c3ce44a0b68ad"],["/about/index.html","20212f83c446084261a92f2d2ae453c5"],["/appleOS的Networking示例/index.html","3b92e11f478e893e39293b3b137bcfae"],["/archives/2020/04/index.html","cac4f2f482359798d001ef37d0933645"],["/archives/2020/04/page/2/index.html","57e515732d7fc5045c99e70de89a2248"],["/archives/2020/04/page/3/index.html","552dd2d29635b6b9e65c10fce68325b3"],["/archives/2020/04/page/4/index.html","8e33d13b4e56314ccaca6f8fcb5a600e"],["/archives/2020/04/page/5/index.html","5f749755cb331bfc66aaa2f8ce2b662a"],["/archives/2020/04/page/6/index.html","1cc102b04bf3b9700c65aec62a1cafb4"],["/archives/2020/04/page/7/index.html","5c42b83c56f5ac57a5b5c6a3b29c5cca"],["/archives/2020/04/page/8/index.html","12d26475e25a0d00ee4fcf72565c78ce"],["/archives/2020/05/index.html","f2b12b1153286838106e2c6a51a16275"],["/archives/2020/05/page/2/index.html","468572e56c5057d8440943116ca505fa"],["/archives/2020/05/page/3/index.html","29aa2b04d43cf7bf4dde19e065f596b6"],["/archives/2020/05/page/4/index.html","1c8a529c1d63dac119ee8e13d2dfad0d"],["/archives/2020/index.html","0a0c66da8d96e2f02ff93a2e953b864d"],["/archives/2020/page/10/index.html","b86166057e8f580c806d53a18e4f7520"],["/archives/2020/page/11/index.html","3c54f43e4bf410d2bd6fd46c56c77692"],["/archives/2020/page/12/index.html","c9cbda07f20862616db71a56705c0c23"],["/archives/2020/page/2/index.html","cd21933ce456a0af963b645e8bef1842"],["/archives/2020/page/3/index.html","03ce3cbdbf5fbdf143ac33781ef0c6c4"],["/archives/2020/page/4/index.html","28402c85a51557875d6dead00ae71077"],["/archives/2020/page/5/index.html","20f62111859894996653f019edce92b4"],["/archives/2020/page/6/index.html","0f6da0d57dc36cbd82f9b6b9fbcbb375"],["/archives/2020/page/7/index.html","96c00a87b876cadceb3f2bb6438de24b"],["/archives/2020/page/8/index.html","5d5e4c6cfbf5966b3c4216092451aa11"],["/archives/2020/page/9/index.html","63dd718d7a910c51c5e7f7f561b8fd84"],["/archives/index.html","8798c6b61bcaf9bbb37902cf1c3e553a"],["/archives/page/10/index.html","33ba73723ac1b824422ba75d08f618b4"],["/archives/page/11/index.html","07b86a3250e17be76d4112d5a729105a"],["/archives/page/12/index.html","c8a82679e526a3810cdb5a5e2c1627cf"],["/archives/page/2/index.html","867c7531a7647c34e5bca12f35b5bbd3"],["/archives/page/3/index.html","75928708afbcd10163166b8800ef4f6d"],["/archives/page/4/index.html","ccb991ecbdfc6135818a333fceef05c4"],["/archives/page/5/index.html","f2fadab813a6db99fd1b11861baf9cd3"],["/archives/page/6/index.html","8f1a5706a58930b2dc957742ac29ef7a"],["/archives/page/7/index.html","e9fe4528a5639f0cffa78bc1781ec41e"],["/archives/page/8/index.html","c082db50e1237d1ce44f2f5ecc382772"],["/archives/page/9/index.html","f2e5af881cc7f6f34ae73844e2428359"],["/categories/Advanced-Swift/index.html","ce001a2156184a0f8578ca59173c47f8"],["/categories/Advanced-Swift/page/2/index.html","06bc663e93f8e2cbbb83ac4eca2eb6a7"],["/categories/App-Architecture/index.html","8f3556c37c318388560b6a935d626825"],["/categories/Codable-protocol/index.html","3ebe556f15d50ed4aeaa5accce77b976"],["/categories/Combine-framework/index.html","1a14e465f4c1b9a956893171dc605e7a"],["/categories/Combine/index.html","abfeb476a1ebdac8ab2f2369ff2299bf"],["/categories/Grand-Central-Dispatch/index.html","d50cd0ab3aaa7b2d8559a3fc6c6da73b"],["/categories/Hexo/index.html","88e9c8a371b9a29bc6af78529d00215e"],["/categories/Promises/index.html","8db647422629b555e6eba37fbfe464fa"],["/categories/Result-Type/index.html","9962cce5e47bad8122c1f1837df947cc"],["/categories/Server/index.html","f7ecb58a8aff26a7d4afa82261287cb6"],["/categories/Swift-Apprentice/index.html","6a8d6e6da3bf76a2af26d97b49037247"],["/categories/Swift-Apprentice/page/2/index.html","ecff342448befac4766f26619f895606"],["/categories/Swift/index.html","13ef22a5f2ff5d538bf8b05ed8b29573"],["/categories/Swift/page/10/index.html","0c04a8f6910a30362d216eb213f56822"],["/categories/Swift/page/11/index.html","6addf637a83ce624792ed5ed7862a9c9"],["/categories/Swift/page/2/index.html","af61ca639aeceb4b368b34e4be08650b"],["/categories/Swift/page/3/index.html","edba535eb5adaf238742700ce6d5276c"],["/categories/Swift/page/4/index.html","d4083ff63d6e508a80211f6656f2d179"],["/categories/Swift/page/5/index.html","6d180d938755801e688e5274f22309fe"],["/categories/Swift/page/6/index.html","968a0a0c97e8262eb53f3fec13c0d683"],["/categories/Swift/page/7/index.html","3ed2f7217878159c97361bc4c196d630"],["/categories/Swift/page/8/index.html","af65981e7d10815afd2f25970feed11c"],["/categories/Swift/page/9/index.html","ba03699183b5218f0f77ac5b0c6d1020"],["/categories/Swift5-2/index.html","5826ded280164b2d4d1fe711d895f6a5"],["/categories/SwiftUI/index.html","28e337f9ee7231fa1a58547c8a17f44a"],["/categories/UICollectionView/index.html","d9c46233ff29a97f75a8f4324c822a8e"],["/categories/UIImagePickerController/index.html","5378ec55468f0e3f19044c2213e52a4b"],["/categories/UIKit/index.html","d591da3aaa1370a8d016d2ec0306a44b"],["/categories/UIKit/page/2/index.html","923c4291312e15cfafcae46298c433bd"],["/categories/UIKit/page/3/index.html","97c8f57680041326f244781bf74b1bdd"],["/categories/UIKit/page/4/index.html","3ccea5d30190ff04b615c31a31fcffe0"],["/categories/UIKit/page/5/index.html","5178f9ef2cee6413559b329004c6c0e5"],["/categories/UITableView/index.html","bf369c87086d378b4a49b8b0b114b5a9"],["/categories/Ubuntu18-04/index.html","ae9f76ad618f2dbdb1dbedf23094149e"],["/categories/Ubuntu软件源/index.html","e51407d65b4b076c57913bfb298f08ca"],["/categories/Uniquely-identifying-views/index.html","264ec15bb4ad24c79ffe1c5f3800b179"],["/categories/VIPER/index.html","4c1f9c2bf0cfcc27f0c5f92287894550"],["/categories/Vapor4-0/index.html","a3cf53dfc916ba1dbc37d2b6e015f7f1"],["/categories/Xcode/index.html","678c8042c767312d5d14f7366b4fc1c3"],["/categories/appleOS-Networking/index.html","9b79070e1ff6b20599d41d8a98068e7f"],["/categories/enum/index.html","21ae011c7c9d288c20f654497ba39804"],["/categories/iCloud/index.html","cd07ff6e4837450745120e42b8c0af68"],["/categories/iOS/index.html","b74ac5f886cee90ffad5c230ccd1f318"],["/categories/iOS/page/10/index.html","431472b31072e22fc231e853a54ef789"],["/categories/iOS/page/11/index.html","bf75c78a6f2c4814f7d86578c4d2e4c3"],["/categories/iOS/page/2/index.html","a7d0d0ca7ada4552f4c7a8670159937a"],["/categories/iOS/page/3/index.html","95a417d491e2e52871cafdd57f0d81eb"],["/categories/iOS/page/4/index.html","8d11718bdcc45f0ac7034d15f7582396"],["/categories/iOS/page/5/index.html","bc7520f143c17970c1738c7c890b9801"],["/categories/iOS/page/6/index.html","df9f3e634dd933089de9f07f07ad34ec"],["/categories/iOS/page/7/index.html","d04ca2cd5432cfcff8a464f8810ca4b7"],["/categories/iOS/page/8/index.html","67f345c7a1fc80b8ba7a69d8dda002d5"],["/categories/iOS/page/9/index.html","cbf5625d07bf596fc5d35428d6eeff22"],["/categories/iOS面试题/index.html","5550854169ed24397fc25b6f5e50ecfa"],["/categories/index.html","92787a84f64ee73355c9dc6b8a4bf06a"],["/categories/random/index.html","1a0a3ef9d635e285eef22c85dadc45da"],["/categories/三方类库/index.html","bc3118b5ff8b0189f257f69bd81961a2"],["/categories/函数式编程/index.html","6bfb5681ea04c84dc0073bc3e3a980f8"],["/categories/子类化样式/index.html","02f17be4c261e8daa2c58dded18f12de"],["/categories/架构设计/index.html","337b515bd8c289eda02dd07dedd788bf"],["/categories/用户体验/index.html","abf10b8c7290721822897c9c09c9f1a0"],["/categories/设计模式/index.html","401adbfcb205e98e2212102b87fd0e06"],["/categories/设计模式/page/2/index.html","35dc567a530fef15a772b9d0ceb78456"],["/categories/设计模式/page/3/index.html","5555a2dcc1ceb4ac4cf833f4f48cda51"],["/css/main.css","458dac6a12bf75cc206ff7a621af5949"],["/hello-world/index.html","f795c1ae59f4923dd3db72c5f4fde975"],["/iOS VIPER架构深入实践/index.html","4912bdf731d6d7a952d1eca27321fd2d"],["/iOS 自定义视图，输入表单和错误提示/index.html","d3ac5e08c8c6196beb9ed8f73e155da2"],["/iOS如何使用iCloud文档？/index.html","45b836033f2011f777b058f90c05e0c0"],["/iOS子类化样式/index.html","61f3c976cd943ef671af9e5a699ed7fd"],["/iOS自动化布局编程/index.html","bf29474ca48bb2a9b37043f067ac8f2b"],["/iOS自定义转场(By Swift)/index.html","273c41708efed156b69ee2535acdc3a5"],["/iOS项目架构：使用VIPER/index.html","b32314b2b87cfde7e027be5395848963"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e215fa687edea135ce75449ecb5be613"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","14c8a68be8948211570924445d487c47"],["/page/11/index.html","bcfa585744c5333ab91880c947d604d1"],["/page/12/index.html","8e3a9a83982c2e5e9b494ab9083e7a9b"],["/page/2/index.html","599c7b212e68737b5b840a4c97d282cc"],["/page/3/index.html","cd5f5fda2394104d78fd5bd9f3f56cbe"],["/page/4/index.html","be1cc65c0e148649bcb4cd31ca6a7ac4"],["/page/5/index.html","04d7637300d75398c9500200e883388a"],["/page/6/index.html","9d15b1e15ff65534210ff0deada37886"],["/page/7/index.html","cef961594fd51f8221c0516b83946956"],["/page/8/index.html","d3d1b592b30fdf79eab748a928cfa509"],["/page/9/index.html","dff0463c68736aecea5e25b09b527b02"],["/schedule/index.html","a22f0b06c5c2b5cc7e69d005e30c9a2b"],["/sw-register.js","d78afcc2d10ccf0501bf87db584495f8"],["/tags/Advanced-Classes/index.html","21c117b59f941978aa434ebfbcb48b0c"],["/tags/Advanced-Swift/index.html","14fe4f593b1be5513c02e2a16eea0f2f"],["/tags/Advanced-Swift/page/2/index.html","de6f48463d891e8eb11a8146876b232a"],["/tags/App-Architecture/index.html","4c71dd5c4c2f16af235e39f11bbf86a3"],["/tags/Arrays-Dictionaries-Sets/index.html","8a5682ccb4f7ff88a1d861059beec352"],["/tags/Build-in-Collections/index.html","6aa0eb8ed3a44a716bcf428bebb91f74"],["/tags/Building-Your-Own-Types/index.html","8a85916bf876481b192ef6bf4a9778a6"],["/tags/Classes/index.html","4332a8ee6f425c9aee75e49f30dba41a"],["/tags/Codable-protocol/index.html","a3b845f75381058fae39f76a06914436"],["/tags/Collection-Iteration-with-Closures/index.html","59ec44e599706672db06737e13d89d6a"],["/tags/Collection-Protocols/index.html","533ecf5d1b274b9c713b5abec94aa9fa"],["/tags/Collection-Types/index.html","b68c0ab024cf864afbab378cf36e155c"],["/tags/Collection/index.html","34f8e118ae026e470898aae29f874a89"],["/tags/Collections/index.html","597d7420b6207bce23d6c7686c897bb7"],["/tags/Combine-framework/index.html","609faee17f3c5f841a90fc25815f42f4"],["/tags/Combine/index.html","f79d51a19ac3da918a01337d47844f54"],["/tags/Dependency-Injection/index.html","cc540659d217a0452f8540083eabbfa9"],["/tags/Encoding-and-Decoding/index.html","f2ec481d7c0200ecbfc798c5ddf54b24"],["/tags/Enums/index.html","bce3ac5508464e72140c82f3602d1454"],["/tags/Error-Handling/index.html","07d1cbbb3ffcdc100158401fe41ad0ce"],["/tags/Functions/index.html","5a0eb16654edf58e2d5342a9319b81d0"],["/tags/Generics/index.html","d50a3149d67d5168b90e67ff6bb2b0b6"],["/tags/Grand-Central-Dispatch/index.html","41aff092f5429a12b41fd8fbbd3128fa"],["/tags/Interoperability/index.html","1866193ada41f73c7ecea14e34efe346"],["/tags/Introduction/index.html","9893b6d570bf36ea71fbd31666d83be2"],["/tags/Methods/index.html","cb6fdcf256f93695f2984fdf70b87c11"],["/tags/Modules-And-Hooks/index.html","0905c05b820b11814c15322350bb7b07"],["/tags/Optionals/index.html","8bdebe95a30ec863476cb9463ae61eec"],["/tags/Promises/index.html","f9fb95927d8a14a881cc6d3cfe837219"],["/tags/Properties/index.html","f07b8b2d4e1f2ce545bac1a4379f3598"],["/tags/Protocols/index.html","ea896edf98aebad43811181df53834ea"],["/tags/Result-Type/index.html","ffe86161a11c5c4ddf46abc0c274ccc6"],["/tags/Server/index.html","c9821198201808aebb569d1383922c8e"],["/tags/Strings/index.html","c4e7d4302dac25aeb832fa556c2f0645"],["/tags/Structs-and-Classes/index.html","05f71a54c7b2acdf608456e2cf258958"],["/tags/Structures/index.html","97835b75a2faa878ea572e5281b566c0"],["/tags/Swift-5-0/index.html","54f75db574bafac22a17aa114ae95caa"],["/tags/Swift-5-0/page/2/index.html","9696da982e7a6f51dba501a0a499e965"],["/tags/Swift-5-0/page/3/index.html","34e1ed0a556ae594f0ea5421067b6872"],["/tags/Swift-Apprentice/index.html","c86bacc3d90c3eba400888c9f4f08635"],["/tags/Swift-Apprentice/page/2/index.html","7283c6e6ab0c783755972ee416a6a425"],["/tags/Swift-Package-Manager/index.html","0ebb48e8a90ed9d12247c4bb4617a77f"],["/tags/Swift/index.html","e9f6098366ae3a3ca8ea5fd36f73c815"],["/tags/Swift/page/10/index.html","900064136ae3f605a6130a27aeda1e44"],["/tags/Swift/page/11/index.html","73b98fd7c758e2792e6c5817a78d53d7"],["/tags/Swift/page/2/index.html","9a52425299e152c33e83f27fdd5ca2ef"],["/tags/Swift/page/3/index.html","a2b5f1f778b4fb9592b9e7bc8f6dbba9"],["/tags/Swift/page/4/index.html","4b1d9006e5c473d4dc4a4cbd3d51804e"],["/tags/Swift/page/5/index.html","702a26517bb4b7b6ba23f8e64d87e49c"],["/tags/Swift/page/6/index.html","01651526ff54cb565788a3b9cd1d775c"],["/tags/Swift/page/7/index.html","0a865ca2e080a85f7ad1814029a790ed"],["/tags/Swift/page/8/index.html","b36789f5510bd7069338e88c4c7b30f4"],["/tags/Swift/page/9/index.html","528e780eeb1adc8c52c51cd3d62096b6"],["/tags/SwiftUI/index.html","492db6793306cb620db10a48789a576b"],["/tags/UICollectionView/index.html","175b6b2836935d201f2f0912acffa0bb"],["/tags/UIColor/index.html","cfce94600ae36c89de4f1aa84aba3d68"],["/tags/UIImagePickerController/index.html","be91866fff335ba0f8082815a1762a5b"],["/tags/UIKit/index.html","5e52c11a4b2b3272612dc06ce74ed89b"],["/tags/UIKit/page/2/index.html","79706b6a1b12f1f89ad14fac6dfc7815"],["/tags/UIKit/page/3/index.html","ffcfa9ea4fbfe3a2ec9554b368b7748c"],["/tags/UIKit/page/4/index.html","18588f6d642d9a8dd6b618a66d95695f"],["/tags/UIKit/page/5/index.html","7a17463f5b5940c589c0b774a0864703"],["/tags/UITableView/index.html","2e9e7bf735a46587a3590f77c79264b4"],["/tags/Ubuntu/index.html","22bba7db02b1c589a0fd6dda7ca1ed12"],["/tags/Uniquely-identifying-views/index.html","366bd0a37e374b4ce341d94b28d3a5f9"],["/tags/VIPER/index.html","46b63bd155320bb415c093fe8a866ce1"],["/tags/VMware/index.html","4ea043f11a62ad087535ea47b358f244"],["/tags/Xcode/index.html","bf474eb47d6bad177782a0c9445ce34b"],["/tags/appleOS-Networking/index.html","873f19406f6711146c571a284e15872e"],["/tags/enum/index.html","dd47afb6b0724436ad21e0d69c00d551"],["/tags/iCloud/index.html","2bb8c577a346ce3a016f4dc4a26d39e1"],["/tags/iOS/index.html","a454e86ae19bc323b705969e4f56b86b"],["/tags/iOS/page/10/index.html","34e217fc0e6ab4f58bf65cfe21188ac0"],["/tags/iOS/page/11/index.html","a18f73d390cd35f9d25e3cc3c398794b"],["/tags/iOS/page/2/index.html","54a23ee19fa6e7ed3e51d54e80dbfa6f"],["/tags/iOS/page/3/index.html","f790019d2b17c545e5101a76a049641f"],["/tags/iOS/page/4/index.html","bdfbaff7a794806a1142e43cc6562bca"],["/tags/iOS/page/5/index.html","44bc67228a4ef5d59ee7e2e004d9cf12"],["/tags/iOS/page/6/index.html","e924325b5eb56bd4d4e0af220336622e"],["/tags/iOS/page/7/index.html","0c0a4dd9729245081cbaf53939436087"],["/tags/iOS/page/8/index.html","3abefdab7935294e0bfe02afdf7ab0b8"],["/tags/iOS/page/9/index.html","354bee427bf917e2096a911a173848ba"],["/tags/iOS面试题/index.html","1c0b113f7968e05471d65cdda5a294c6"],["/tags/index.html","e219f458601b3198a68ebf62c3d2f0b4"],["/tags/non-optional/index.html","63106fef1d4217d38ca59899970d7298"],["/tags/random/index.html","513425adb44a4c795e10e248c98392c8"],["/tags/transition/index.html","dddf335436874f108d6bb8c5580cd72b"],["/tags/三方类库/index.html","6cd5497926ded7022dfcf6bdb9c155b5"],["/tags/依赖注入设计模式/index.html","aa44d029200a168d14173664c8db96a9"],["/tags/函数式编程/index.html","b6edc55b2309d8ec7c4a4d130bc6631d"],["/tags/初始化模式/index.html","b67a68fea832ee4c99ca12618ebc7450"],["/tags/单例模式/index.html","7b921dd70b0672b7e06fe919db73fcd9"],["/tags/原型设计模式/index.html","ecbb92d8ed18d817abf725dd0bd522ba"],["/tags/命令设计模式/index.html","df39b60fcb7f0ad4c0c0df5736157733"],["/tags/基本控制流/index.html","2921e51b126507c5b78258a21b74d5b0"],["/tags/外观设计模式/index.html","e4743eef40b32ab78a1d1041c81585b9"],["/tags/委托设计模式/index.html","854586c433ed59c2b3f0677ddea1ee07"],["/tags/子类化样式/index.html","c0e8bd71cb7ca12775faec23d78a4881"],["/tags/对象池设计模式/index.html","b40f663bc6c00847c5c0b2380fdbbe1d"],["/tags/工厂方法设计模式/index.html","84f94500b6fbded385863c1bbda4be16"],["/tags/工厂模式/index.html","af0f6b50bafbf07a31cc53d5b3bfdcb2"],["/tags/工厂设计模式/index.html","ecd0b3286021c9fde51b7753eedaf5c0"],["/tags/懒加载模式/index.html","72cc2c890453ea50d8634605c4f78e4b"],["/tags/抽象工厂设计模式/index.html","66e9e9c22751884547655ad53f6a042a"],["/tags/构造函数/index.html","e0681cef4d9d0be6e821ca97d7bebdd5"],["/tags/架构设计/index.html","2e587d92990af4b74d4cddf016317222"],["/tags/生成器模式/index.html","38ab7e80e20e4fa1cf819a81e5400b78"],["/tags/用户体验/index.html","5159a757ccb46751954c8a98a170dcb3"],["/tags/类型与操作/index.html","1925fb3b406c096d36061e2901b4f3a2"],["/tags/自动化布局/index.html","804fa6f0de628a5f0023a43fac3d7d49"],["/tags/自定义UIView/index.html","b6febb17307d36fb060e1ac497acf668"],["/tags/自定义转场/index.html","4e92c05b4ea8c04d0495c90a68fbb8ae"],["/tags/自适应布局/index.html","6fdc9628a32bdc1fef57c0e279439e2d"],["/tags/表达式、变量和常量/index.html","51f68961b4a96f21567fe1895c73284f"],["/tags/设计模式/index.html","97e5efc9c5477a418c84e80636f34be7"],["/tags/设计模式/page/2/index.html","6abd7589bc11cee45de9d3c3f5a3cd70"],["/tags/设计模式/page/3/index.html","253ce47284da50c3e7fcab781e15557a"],["/tags/迭代器设计模式/index.html","687f51e1053b77ed53a0d03ac925280c"],["/tags/适配器设计模式/index.html","f8491ee48635d019b21e1185a7b5696b"],["/tags/静态工厂方法/index.html","23bee087ff6453c7285ed3304e34ab30"],["/tags/高级控制流/index.html","c68baa2176f23227be764444c9eb97b6"],["/为iOS应用构建输入表单/index.html","c675c057a7e0275c515726dd13c1dd65"],["/产品开发的幕后花絮/index.html","e80a3673941cbf91b7db8a292a80605c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5009610bd925e9e487693e12954a1a8a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b8c3203c25cab2bfe3c679614ddd9a9f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","0dfbcfaf13fb0ef2b0ed04fd55470e6d"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e41812bf3cdffec8bd914aacb4161172"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","e9c163a7a9bb7faa6584fad97229f97b"],["/在Swift中创建自定义集合/index.html","8fc0f1950c57946696a98b94a430e701"],["/在Swift中处理非可选选项/index.html","0250144696f1e02e427db7520b9fb44a"],["/在Swift中生成随机数/index.html","de44cd9db26a6d6e4648e1d022d8c1bc"],["/在Swift中重构单例模式用法/index.html","539948cd6919fd89418770c3ecdb6bf5"],["/如何为VIPER编写服务？/index.html","69aca10425bbc12ad290adaf87f69a06"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","2df5b9434155f5ed5705700100aa7be6"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","faf009e6fd105e278a7975f02a0ffe6d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7b3506e6d394af5a3c8df3f330f2ea9e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a7a71f0ba146c48be2f0842dc6ada73f"],["/掌握VIPER架构/index.html","60057e53a81ae2a88f0e2dd6d7126643"],["/揭秘 WordPress Hook 系统/index.html","4c9f72846fa656bb07f2617668cd3f5b"],["/比较工厂设计模式/index.html","e9e11ba7b9c79ba589020354286c407d"],["/深入了解Swift中的Grand Central Dispatch/index.html","ed8dffeb2eb1181045345093e7cef694"],["/深入研究Swift框架/index.html","bd1ac52aaa38f00f93e6e3078a35b1a6"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5a968cee82952c41a39404b455205ba3"],["/选择Swift而不是Objective-C的5个理由/index.html","922fcb782755a907020ecf6be49ad4fc"]];
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
