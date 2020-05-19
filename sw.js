/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ae440fdc5bfa7dba0b43a41817e7227c"],["/Advanced Swift系列(一): Swift 简介/index.html","96c692e5a48d228e65cd6659a8906a09"],["/Advanced Swift系列(七): Strings/index.html","d4108f6e1ef2e7d14c6bf5988b4c0c4d"],["/Advanced Swift系列(三):  Optionals/index.html","c564cb4e0e973d08f294cead05ad8fc5"],["/Advanced Swift系列(九): Protocols/index.html","17fd1cbbdf974831ac2ca42128592a93"],["/Advanced Swift系列(二): Build-in Collections/index.html","5838aa673430ab5b34c97f28ba1fd339"],["/Advanced Swift系列(五): Structs and Classes/index.html","89e465dce1d7c0f78beb73cc525d46d8"],["/Advanced Swift系列(八): Generics/index.html","6c42935f6adfbb98fd3bd9a39e284a0e"],["/Advanced Swift系列(六):  Enums/index.html","b2f7513aba27196bafa0b0d07fc803b9"],["/Advanced Swift系列(十): Collection Protocols/index.html","5f771940f5732eda54f245d29793bc12"],["/Advanced Swift系列(十一): Error Handling/index.html","614af91da196e28f1dfee00ed8bc825c"],["/Advanced Swift系列(十三): Interoperability/index.html","e666ceb82950cf3e040832d723041104"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","28081bf81806faabafecc316e48f8c65"],["/Advanced Swift系列(四):  Functions/index.html","47281bbadf3998805d3582b1ce017947"],["/App Architecture系列(一):  简介/index.html","16c008f77c599a9b8a2457a6ef237657"],["/Functional Swift 初探/index.html","b678cc9702d38bd5b9cf09883ff3f085"],["/NSCODER和SWIFT初始化/index.html","9968000d1951b2430cef8810221d6ae2"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f3e642d397c2ef387e520701c88e7a02"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","b929093ca742ec2886b90d3c60b1d660"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ec9c81f9fa5a055d81deef56e00c1c4e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","b12ffd8d3209a347b8f55651aa3f804e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3a69736f6b649a0178956371f458213e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","dd09a2f4e22086a7396b8b5425e45c62"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","ff709515962aa9c3d8c96ed2d1c13e89"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","2798bd053cf9dff1ffe4b494cb4594a2"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","a4afc4a2cd8233a39c09938d053ee6b8"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","061a26c49945802ab0406290367ec7bb"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","85a61dfee0bc2e84a3b9fe89feee29fe"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","3e440564818ae5218f619eef1c66b9c6"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","866b9cad3bb32e4f1d8c73fde52fdca0"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","c288961fcd88f2c1e1d6e033050bf94f"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","d7409c3c74c0243229182800bc56843a"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","3b88d9b8237282c2d20401f963af620e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","59e7c6120dfc4ea755d5b319d59519c7"],["/Swift CompactMap vs flatMap：差异说明/index.html","00cdb240f7cfd852ac4b26f0c27a8863"],["/Swift Grand Central Dispatch 深入实践/index.html","e042b971ff843b7ee02a3b9728841564"],["/Swift Lazy属性初始化/index.html","45cd4b6e39fc065ef858dc5a11ffd948"],["/Swift Promises 初体验/index.html","9eb9186c74ca053be8004e0088421ea0"],["/Swift Promises 探究/index.html","67bab59161c78969165feb749fadc85a"],["/Swift UICollectionView使用指南/index.html","9304466e7fc660aec2ae6dfd1fa9ab89"],["/Swift URLSession 和 Combine framework/index.html","9e7d107e27fe33c2457cbfcc14912884"],["/Swift 唯一识别的视图/index.html","b15dbd026aa059c0f9880c59919065f9"],["/Swift 如何学习现代UIKit？/index.html","0e4cca812045decdea7b458a6d3c2030"],["/Swift 用 compactMap 替换 flatMap/index.html","6684669c2ce4d2ff15144d0300f8f84e"],["/Swift 选择和播放视频/index.html","e86ebc13f337d7f32d6877ca06e79aa6"],["/Swift中UIColor最佳实践/index.html","664d25fb333090510d33b0035a39cd32"],["/Swift中快速简单的工厂设计模式/index.html","903ea3f6bf96bc25e47589788bc7c690"],["/Swift中构造函数与静态工厂方法的比较/index.html","f7b62ee0199a729277f735b6cb03326d"],["/Swift中的UITableView教程/index.html","8e216131988db6a4149a551c437e917e"],["/Swift中的懒加载模式/index.html","8bad7cb8ac593ad156fa5c81e9e4616f"],["/Swift中的模块和挂钩/index.html","75969a88602734a15ccab2c1750f050d"],["/Swift使用布局锚点添加约束/index.html","bdc98154e58820bd371922a6d2e0e6aa"],["/Swift依赖注入设计模式/index.html","017c57437403cc5cb3de4e8bf5e7f505"],["/Swift关于Dependency Injection (DI)/index.html","7a42975362216cce867b1a492590ecde"],["/Swift初始化模式/index.html","b0a8f5751adc53806188cf197a0aa5ce"],["/Swift单例模式/index.html","e5cf43d4664959a79d17d9de0b543004"],["/Swift原型设计模式/index.html","85d191f62f7c1079dc5f833d997da527"],["/Swift命令设计模式/index.html","2be99629d281de1379663191cb7990f5"],["/Swift外观设计模式/index.html","69aa05b4b87c30f4b652528db0ed771f"],["/Swift委托设计模式/index.html","9d0d28dd1ff57c4f08651bcfe4c1f3ff"],["/Swift对象池设计模式/index.html","b3e5e9f68a3b3707f7d9ed52b99e8604"],["/Swift工厂方法设计模式/index.html","c3a4ab7a76c75bb77d5c328ac5555469"],["/Swift带闭包的懒惰初始化/index.html","ef18fcb0bf8584dc0566a57d0101e5e6"],["/Swift抽象工厂设计模式/index.html","7fd4d6748a9dbc543a85e32342708eaa"],["/Swift掌握iOS自动布局锚点/index.html","b693d0eedff5b8022f451799bdcb117a"],["/Swift支持旋转的自适应单元格/index.html","054f1511420f130c8c79fcc590ddaf4e"],["/Swift枚举值/index.html","abaa36d6ef01a84ecae0dfabda52323d"],["/Swift生成器模式/index.html","397e1df7ba49963b4860af751319d17e"],["/Swift结合Xib文件自定义UIView/index.html","b97cca3aab59b010c0f9f6265b318fe9"],["/Swift编写的20个iOS库(一)/index.html","df98a13b46de856ef633d1fa251dbea8"],["/Swift迭代器设计模式/index.html","d58dde2f7a1962abe229e1f28dd3ef71"],["/Swift适配器设计模式/index.html","ee4ccf00727544e9e9b5c18394988a08"],["/Swift静态工厂设计模式/index.html","6bc21a32c3f4fd6e092acf12c228fa29"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f405520b203f05cab4441edc062671a7"],["/UICollectionView data source and delegates/index.html","ec4b5f1aea9bf8099a51463986fd9ca9"],["/UIKit初始化模式/index.html","5497d7ae48e1b7a053104e12c058b6f3"],["/Ubuntu18.04替换国内源/index.html","074ebbabfc44690edc489b2a2988c13f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e6879c89cf3cb40dd4907a9e04ff000b"],["/Xcode扩展/index.html","e8cc8e35ec053d392d1113124d3f8945"],["/about/index.html","780d798ad7e4b382a5864ec2874b5026"],["/appleOS的Networking示例/index.html","4cbfe8412b6aca4c4e0dfdccc25aa6b2"],["/archives/2020/04/index.html","5aec6a10f269a7c225fbf663a5219297"],["/archives/2020/04/page/2/index.html","f0f05cf2337b0c38388fc6dd9850c6eb"],["/archives/2020/04/page/3/index.html","4413b2e792a01c3fb4c61863156ee3a3"],["/archives/2020/04/page/4/index.html","79555b14f05dafcd87f15dccd6ed09ac"],["/archives/2020/04/page/5/index.html","ad8f8a87743ca07a5002569fabdcd992"],["/archives/2020/04/page/6/index.html","fccff5feb760b47f5a94e1a13cdda0ed"],["/archives/2020/04/page/7/index.html","9d46dfc59830e5388cd3a97be86a07df"],["/archives/2020/04/page/8/index.html","0719e193eff860f7c0b396b9b1c5f25d"],["/archives/2020/05/index.html","16ce41a4981e92ba149aa0fe5c3d4146"],["/archives/2020/05/page/2/index.html","c97e2307a3d5c76ff09a225da7f4cf39"],["/archives/2020/05/page/3/index.html","13bc909c513541ce20155eb301b19831"],["/archives/2020/05/page/4/index.html","140e3fdc25c3870a5a6b676efcc1361b"],["/archives/2020/index.html","4b6d9cfacbd97ce2fa657e9ae0fa909b"],["/archives/2020/page/10/index.html","ea1ffd0ef70d31eb47a6c82920b0eae4"],["/archives/2020/page/11/index.html","8e50462615d5b9cfcaf7f54b478cc1aa"],["/archives/2020/page/12/index.html","647bfe59dd250096f5ede8df5ba2244e"],["/archives/2020/page/2/index.html","5f1e049a6e5e719aafb67ee36070cb67"],["/archives/2020/page/3/index.html","4226b70634516db9abb636f4345b686c"],["/archives/2020/page/4/index.html","1c8d2d5a8bfc4ebd2c9e71e90f23b119"],["/archives/2020/page/5/index.html","8b4bc447559dd9076cfdf15879d64e2e"],["/archives/2020/page/6/index.html","5f657d9180fbdeb7a79b260bdb7cb337"],["/archives/2020/page/7/index.html","cb4d8b62f3b279b7d579595f0855ff72"],["/archives/2020/page/8/index.html","2be16fdb6cfca2225da3f12b91be4e54"],["/archives/2020/page/9/index.html","78920bcf40f832df50096423dd996fb6"],["/archives/index.html","95b0a988cdfbf53556838af1eb2955c4"],["/archives/page/10/index.html","6a0761c504082e7d3feccda8fd6ad05b"],["/archives/page/11/index.html","ebd96e7edb94b00b86030943b67ead4c"],["/archives/page/12/index.html","d4a84da5afb975fd6cb5d2ad3ed025f1"],["/archives/page/2/index.html","cdbc6f979cfd5dae780f1f119c6bb1da"],["/archives/page/3/index.html","ccc5aa79555f1d4edea1961408428a61"],["/archives/page/4/index.html","d54a58b6b4003ef5647b9bf508f53618"],["/archives/page/5/index.html","cb5487e89ca402cf73e03d35ffc7e9c3"],["/archives/page/6/index.html","d242f3765e1749d06dfd7e7de5f8b390"],["/archives/page/7/index.html","2c2af4888b044ba330474a2953413b3c"],["/archives/page/8/index.html","b4694e6c2d403bfded0c6a157d0fd33e"],["/archives/page/9/index.html","e293b6c457632426862d7469e6bf14d4"],["/categories/Advanced-Swift/index.html","cbc32ea0c70ba2fc0d063903fc1b7bac"],["/categories/Advanced-Swift/page/2/index.html","927e44f27786d36e216ef0b900cc5a55"],["/categories/App-Architecture/index.html","2b4e3deff3a704deb1a94e38acfe83fa"],["/categories/Codable-protocol/index.html","3c0b6ff4051e0f26c33fe8188d701a33"],["/categories/Combine-framework/index.html","86a1dde8e8b28d4e42d16bc9a2f8b32a"],["/categories/Combine/index.html","ae86eb9509aa4e582ff42fcca2021d17"],["/categories/Grand-Central-Dispatch/index.html","2f0af691a478fb0637169efdf474585c"],["/categories/Hexo/index.html","cd0a0e55f6f01d85e35c6a3398756ee3"],["/categories/Promises/index.html","2d4ee3330deaf9503977b1de89b186f1"],["/categories/Result-Type/index.html","1d8e2a7da3c9a4a9d8ed28de7cedef61"],["/categories/Server/index.html","702e36f1c6657606a271805017345e0f"],["/categories/Swift-Apprentice/index.html","7a06abed61f14885ebbb0962a4d35d7b"],["/categories/Swift-Apprentice/page/2/index.html","614764ad659839ef159f9a2aac0b2e42"],["/categories/Swift/index.html","552e0703589040bb89a5d269280d1c14"],["/categories/Swift/page/10/index.html","ad6f4c3ba68d4def230aefa75c405e70"],["/categories/Swift/page/11/index.html","84ff3c3600c61aa1c9b2ea1386a25f1d"],["/categories/Swift/page/2/index.html","09a70aa187beba8c6fee326cbb44d2c2"],["/categories/Swift/page/3/index.html","6ffd9bcc871b44dfa8cdc35140acd656"],["/categories/Swift/page/4/index.html","e4328235f8ae9cadbd2f93045314a452"],["/categories/Swift/page/5/index.html","38df8791834a2935e8543980ccc49ebe"],["/categories/Swift/page/6/index.html","cbcb5b6ccd322aa17b56081c7c456614"],["/categories/Swift/page/7/index.html","ec70b0825890d3b50b6f3b0d6de495c0"],["/categories/Swift/page/8/index.html","7efb91a3883384ce6d0a5d4c96354b77"],["/categories/Swift/page/9/index.html","9382be610e809cfee1e71091483c53a2"],["/categories/Swift5-2/index.html","04571d4ba3927fcede1c1669b83d5fb4"],["/categories/SwiftUI/index.html","c374b7e93104feb3b0445f9cb579cda3"],["/categories/UICollectionView/index.html","b698733d9193a8ec0c725e8cab3e1278"],["/categories/UIImagePickerController/index.html","10b869c1cdbeaaca5cf3bc7f9cd69937"],["/categories/UIKit/index.html","3e729b117d6b6d450795ca2dd5797766"],["/categories/UIKit/page/2/index.html","130afab6629368fb44d06540302043b3"],["/categories/UIKit/page/3/index.html","ba2cf64127dbc9ad110262fb3f9443f1"],["/categories/UIKit/page/4/index.html","7951178051eb5c9b3e9497f76e939f87"],["/categories/UIKit/page/5/index.html","a525bbe9ca985228eea56e9f0b61633f"],["/categories/UITableView/index.html","aff8082939938584a8e9bcd5ddb93159"],["/categories/Ubuntu18-04/index.html","88164a9e7271efde3279fad1614b756e"],["/categories/Ubuntu软件源/index.html","33df5e678c698ee898c59a18ff65459b"],["/categories/Uniquely-identifying-views/index.html","320164c7c9340b34149d4e886a438ab9"],["/categories/VIPER/index.html","c97e118d6179549a300a647cb82564f5"],["/categories/Vapor4-0/index.html","95c207227bea116cab877165bfecc358"],["/categories/Xcode/index.html","9c7ba8d082d5ee4141c804030577d9b7"],["/categories/appleOS-Networking/index.html","329b5551becfce01aba23792c6c257da"],["/categories/enum/index.html","b23e70891e1c85a889bece00942560c4"],["/categories/iCloud/index.html","0994bb7bbd21bf96fa02576e26631873"],["/categories/iOS/index.html","8de6528c3fb3efb0a0892b78f3b191b9"],["/categories/iOS/page/10/index.html","c561c9a02518ec3c72ce56dc504631be"],["/categories/iOS/page/11/index.html","d082432f596578eb3f31509a733e0f18"],["/categories/iOS/page/2/index.html","1738b94bfa1bf66d325f7ce70883b250"],["/categories/iOS/page/3/index.html","bf8bb667a298d3106088d788b7b8f4a6"],["/categories/iOS/page/4/index.html","6de798c12359d2d228d4af59241513c6"],["/categories/iOS/page/5/index.html","5c8739cf6eca9fc6191c2572891d3a00"],["/categories/iOS/page/6/index.html","a4af955b8d6b16af0851ec5d89d7f3ad"],["/categories/iOS/page/7/index.html","3372d44ac86de4d7372539062623e5ee"],["/categories/iOS/page/8/index.html","4f1799d595f3871caec47deaab89e1df"],["/categories/iOS/page/9/index.html","795ca64e8fba4d0b86e43a64af925695"],["/categories/iOS面试题/index.html","61a0f30b0ed5b1216054846c435d0b3a"],["/categories/index.html","f7e81ba8b5c9e9993f9b3ee72edd0918"],["/categories/random/index.html","d9b0c75a39ccb3e9dc823dc5ad22b8e9"],["/categories/三方类库/index.html","6f08a36ef7ccfd0ba79088ec51e300a8"],["/categories/函数式编程/index.html","c3252500e9b752587843c852472b3d6a"],["/categories/子类化样式/index.html","09d4dc8b05e9186a549c5ec834058f5a"],["/categories/架构设计/index.html","2755edaba2934f8fff711e156ab85d32"],["/categories/用户体验/index.html","2a437f66c9f20fed6c4eebe70a6a6202"],["/categories/设计模式/index.html","f9dd3e24e3b4d57e91732555cacbd9d8"],["/categories/设计模式/page/2/index.html","1c8b0ed73ff994b304f33b1219991dde"],["/categories/设计模式/page/3/index.html","17804e8823a3b9aee900e9d45c2bdb0d"],["/css/main.css","b5df8bee13595eddebc3c42d8d9b4d58"],["/hello-world/index.html","6b032ed83b1b04f10f6c6caf1bea272b"],["/iOS VIPER架构深入实践/index.html","9bbb347ca5b171a80ad45b02feeb9a6e"],["/iOS 自定义视图，输入表单和错误提示/index.html","22ecf23180dad57ae36987d867ce4ffb"],["/iOS如何使用iCloud文档？/index.html","4af7570206f3b19ba6b50a9a64782137"],["/iOS子类化样式/index.html","6806280dfbff309c4c2db1d75efbc1af"],["/iOS自动化布局编程/index.html","bae07af457719d02922f1bd374a910a3"],["/iOS自定义转场(By Swift)/index.html","1f896ae948c40646bb95f8e8f91dba2a"],["/iOS项目架构：使用VIPER/index.html","d267e327e6473a6d2389faf9d816747f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f7616ef87635684c089fb06a93c86e9b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","532a1b1b784417f28f173912649bdcf1"],["/page/11/index.html","e5c8b8b924a28265a7a154d04a879105"],["/page/12/index.html","f009e067280981c7a84bf742bed9e770"],["/page/2/index.html","e7334b5f963a166c91d2583f7e30b038"],["/page/3/index.html","e9cdf481c31113d09dfb65897ecbfccb"],["/page/4/index.html","6ee7c9d76ec323712d705e2d86a371ef"],["/page/5/index.html","632ac6cc58845063af73e24266e34e6f"],["/page/6/index.html","177e585aaa1891cefc831aa42cca5444"],["/page/7/index.html","1e4b99da17d1b94c9161ee648ada1e71"],["/page/8/index.html","c269d1062e306a593b89e7e4e7e8e39b"],["/page/9/index.html","da33f9f5d3f88025fe530f29f6ea2f9d"],["/schedule/index.html","d757a5588c05c0c73d92fe082aabe649"],["/sw-register.js","bc24424a4ecda02b8bad968e2e9614b8"],["/tags/Advanced-Classes/index.html","f0d731cb4787109031a67f9528cdde20"],["/tags/Advanced-Swift/index.html","f2238802251e7db10bd81e7fc75c331e"],["/tags/Advanced-Swift/page/2/index.html","3b0e25b5746b53f2ddd7cd48ace33a31"],["/tags/App-Architecture/index.html","3223a7f43f95696c48a552cc3208c805"],["/tags/Arrays-Dictionaries-Sets/index.html","de7cc6e398367362af561d69984f84f4"],["/tags/Build-in-Collections/index.html","f1729a60b7780462274951a64a5b81ac"],["/tags/Building-Your-Own-Types/index.html","bb7e9fadd7403c11d7cf689697da732b"],["/tags/Classes/index.html","7748e39fc1880b9258bd36c2a3315270"],["/tags/Codable-protocol/index.html","11e44e3b570c9ab57013074fdf4faec9"],["/tags/Collection-Iteration-with-Closures/index.html","fa94b144bcf9a214f7a9019ee4df0ce4"],["/tags/Collection-Protocols/index.html","317d9e5b318af21ca1fab28117539594"],["/tags/Collection-Types/index.html","cdd0648f7cf1a25a81a52b8b1e8e5a14"],["/tags/Collection/index.html","7c7a738a5a4ffada59b3256afed78912"],["/tags/Collections/index.html","96ad809dd41716856932a076989297b6"],["/tags/Combine-framework/index.html","4f59b71af39ed4080084fab16439358c"],["/tags/Combine/index.html","c2bfd1ba6b3c5414fc9ef50994ac6b16"],["/tags/Dependency-Injection/index.html","7825a378d87a4b2daaa7ee8947e8600e"],["/tags/Encoding-and-Decoding/index.html","69e2e943d4a91c85262e373056b11880"],["/tags/Enums/index.html","5aa780d7a63ef7b12446a63fd527ec82"],["/tags/Error-Handling/index.html","81c01d598f77c7ab17e98e2f4047b5e8"],["/tags/Functions/index.html","7ffd6159e2642b6633dec52b3d3f57d0"],["/tags/Generics/index.html","7ca7f0fa82d9acc6b339a4a9eb0d5ac8"],["/tags/Grand-Central-Dispatch/index.html","a6aed1d2b2fe412dd713417fabf62f74"],["/tags/Interoperability/index.html","8ab5f7e5421b8bc6b4129bbf19b8e9c1"],["/tags/Introduction/index.html","da2bda0876db0edde9fbf4ba4e5a581b"],["/tags/Methods/index.html","4c86b098d31a4146fe7def4916ae01ea"],["/tags/Modules-And-Hooks/index.html","a84288fa3ba1e674a38ebdce50b3ac33"],["/tags/Optionals/index.html","420b1f03634f028b63f6753007bb8a8d"],["/tags/Promises/index.html","0e61e549a471bc78ea4587519a97954a"],["/tags/Properties/index.html","e7538b41b1ce3c448aae331922b9182c"],["/tags/Protocols/index.html","98f8000ef63148e7dda88320a670778d"],["/tags/Result-Type/index.html","4d7b1903dd10c20a7acdebb4a3640540"],["/tags/Server/index.html","a4ee0c910dd2b72b3e4e2e31d9bbec05"],["/tags/Strings/index.html","376b8f26bcfde91d99605efda5573f23"],["/tags/Structs-and-Classes/index.html","7146f59e55916e30c3f7be669e9879eb"],["/tags/Structures/index.html","8d06b468e7329ce7fbef2194af5b6f14"],["/tags/Swift-5-0/index.html","bbf92199eaafda727aca0e22f364af36"],["/tags/Swift-5-0/page/2/index.html","b1ee8e914a1223654132746025b58b85"],["/tags/Swift-5-0/page/3/index.html","ccea25550b9568f9d387681c7d9e0aae"],["/tags/Swift-Apprentice/index.html","575e83e7226a726c2f2c907f829645f7"],["/tags/Swift-Apprentice/page/2/index.html","9eca5b92b358cc98d40e10d8f15e72bf"],["/tags/Swift-Package-Manager/index.html","d071c39438d2437e65ad86b401b5c04c"],["/tags/Swift/index.html","d1e788e7bf852b55b295719478519fcf"],["/tags/Swift/page/10/index.html","3f5a3f6a12775ff55ace6b8ef3e5253b"],["/tags/Swift/page/11/index.html","73268b9587aad49affdf87fa0d164cb4"],["/tags/Swift/page/2/index.html","2b02afc74b3246289f3260aac2f27d35"],["/tags/Swift/page/3/index.html","bcfada1a6450f3ef55d0edb88f40d084"],["/tags/Swift/page/4/index.html","5049b431f9d9e7f678a1402e536c52f0"],["/tags/Swift/page/5/index.html","86e1d094b6421db6030117d8634e47fc"],["/tags/Swift/page/6/index.html","df71034baf4a00a58229775c6a12ee5d"],["/tags/Swift/page/7/index.html","bcc29a27e78d09cda3be554a58ec7faf"],["/tags/Swift/page/8/index.html","553f4e69372ae1c0fd39c0e30514b792"],["/tags/Swift/page/9/index.html","35f51a64c736492d5c876516ef558856"],["/tags/SwiftUI/index.html","bdb03d1e3d5578dfb4f9509fbbe57500"],["/tags/UICollectionView/index.html","02008d3b1da4bef925bb865b78fd92c5"],["/tags/UIColor/index.html","c1ec5b6e40ec7b6c0fdd3691890eaf9d"],["/tags/UIImagePickerController/index.html","eab362b8f76c0fd2ea03a9a76fe4eb37"],["/tags/UIKit/index.html","113744bf22ce8402a5f33f6822d5d48a"],["/tags/UIKit/page/2/index.html","3ecdf3f67a6bd2726165f55fea368804"],["/tags/UIKit/page/3/index.html","34d298aa0d369f53473b5b3389da2487"],["/tags/UIKit/page/4/index.html","dbbc006d3da99774f74cf8f5d3706fc1"],["/tags/UIKit/page/5/index.html","b55d6ee9a3d95d6da45888e5ae80c705"],["/tags/UITableView/index.html","cf2f8a22545937594cf4a04b6f2721af"],["/tags/Ubuntu/index.html","938f29b95bfc5d8919a2fcc02d98f8e0"],["/tags/Uniquely-identifying-views/index.html","c105983cc067223bc01c5a805df052be"],["/tags/VIPER/index.html","5c48f0d7750a64674e7f18b414b087b6"],["/tags/VMware/index.html","f6fe713921619f19a0a63823c72c5c6b"],["/tags/Xcode/index.html","9c12284d919482f847a98453069741b1"],["/tags/appleOS-Networking/index.html","a1a244dacecc640b6e6f16579bf9ff44"],["/tags/enum/index.html","7de38d3a2c528ac751c9ea51b53ae071"],["/tags/iCloud/index.html","1761c715018f9b17766a519f88ee6046"],["/tags/iOS/index.html","8c249116c56fa65ce841d51e3cdb80ec"],["/tags/iOS/page/10/index.html","7791edad64b55410fd36800c5abef041"],["/tags/iOS/page/11/index.html","17f1751e000996a3a20b7f21008f4945"],["/tags/iOS/page/2/index.html","96de73c63fb375431b08cb0040ac591f"],["/tags/iOS/page/3/index.html","71d5b092cd9b0f04183556a076a4e731"],["/tags/iOS/page/4/index.html","8be225e7ba90a77c81f26e6c03585b8d"],["/tags/iOS/page/5/index.html","313f31e04a63b2c6b18824e7b4abece6"],["/tags/iOS/page/6/index.html","22de5486810821845e0b52406a06e750"],["/tags/iOS/page/7/index.html","fabca84e3ee6c75f6a4b620334d3d977"],["/tags/iOS/page/8/index.html","906024608319743a9595310db791f4bf"],["/tags/iOS/page/9/index.html","0ce489dfb34a1c86a53d88f1ce5d5305"],["/tags/iOS面试题/index.html","942bcc53533b46a403d876ba232786a0"],["/tags/index.html","09170dc9315fd0315738100e74785cd0"],["/tags/non-optional/index.html","44446fd2360db074719f3c9355a9873f"],["/tags/random/index.html","223fe8d34f6d6abe6898f66b0a8ff1f1"],["/tags/transition/index.html","610c38deb8024a9d4484fc1aed956457"],["/tags/三方类库/index.html","0de6fd2e36a8e54a47d4970cc25b463e"],["/tags/依赖注入设计模式/index.html","bebccab5fa1d9c2d835f424d31d01911"],["/tags/函数式编程/index.html","946f8ede56c5a0ab5d40f7bddd7f547a"],["/tags/初始化模式/index.html","d28343b0a5b27bc89fd9af46ae335f0b"],["/tags/单例模式/index.html","7b393855b71364efb168aa3b33368e6a"],["/tags/原型设计模式/index.html","5e2d8a82b5e3e01ded54be1660e70475"],["/tags/命令设计模式/index.html","2c1774a6fcd89289ab16fe3634eb4498"],["/tags/基本控制流/index.html","e4512c0883bfb6de3b0f2521ba35e611"],["/tags/外观设计模式/index.html","faeb10df40181a67b8964e8ec60e70c7"],["/tags/委托设计模式/index.html","760a002545f56f5c6e2e0459be1aa49a"],["/tags/子类化样式/index.html","3f71edd5554b2a78972f246cd9f1385a"],["/tags/对象池设计模式/index.html","551459a4196f41679788104dbec9bc0f"],["/tags/工厂方法设计模式/index.html","622e94cb47946559abf90d8eb8b573c7"],["/tags/工厂模式/index.html","05ea4bba41c925cc970e48dbd28527a3"],["/tags/工厂设计模式/index.html","dfab1080168e1acc4ccc1e676afedbf9"],["/tags/懒加载模式/index.html","8582d5c336d13b6d15a08c9363a4b863"],["/tags/抽象工厂设计模式/index.html","f6db3d8699aae7db60191c1ab556da56"],["/tags/构造函数/index.html","447b4897e72b851a4681d429719a3d1c"],["/tags/架构设计/index.html","aac93eb91e39f415978965d6c4ac1f7d"],["/tags/生成器模式/index.html","2b370424e1053450d09f7885271f21ed"],["/tags/用户体验/index.html","4abea05d778cd7bba31fb89d8369c3dc"],["/tags/类型与操作/index.html","9c754efe6e41f236ce610cb287dcd02d"],["/tags/自动化布局/index.html","4f460f8066f85d313e038af201e01637"],["/tags/自定义UIView/index.html","d567beb627f96b98975dd36d09ef8bd0"],["/tags/自定义转场/index.html","cf2d8490fa4110d0882b4564a6714b95"],["/tags/自适应布局/index.html","5cc308bfd88df3e3879a8a97b3df9916"],["/tags/表达式、变量和常量/index.html","1549a836a2e5b3215927680dc398eb1e"],["/tags/设计模式/index.html","3dfab5172fef0439a985ebb895ca37a0"],["/tags/设计模式/page/2/index.html","88d6c0634b13511e56c2ea3c49a71c26"],["/tags/设计模式/page/3/index.html","92b1371f942607d049e31fbb8a727a01"],["/tags/迭代器设计模式/index.html","06bec3ce8304ac6fc7beb01335f22b6f"],["/tags/适配器设计模式/index.html","f4f7316185bd89c3554a7abec2b48c81"],["/tags/静态工厂方法/index.html","9f00f3ace965b242eb9d9ae0578152ad"],["/tags/高级控制流/index.html","9ddfc502dd977bc51df3ea75003f6003"],["/为iOS应用构建输入表单/index.html","6ab83aeec78cdbbb4046dd004f536e30"],["/产品开发的幕后花絮/index.html","b261d401191dec3adae328b939715cd7"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","81ef1ef80596f743f48853bac5819dd1"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","12083e35b8515a4a3b66e60793128ca2"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f70b0d0f18b9bdbec6d50d74a7b2b84a"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","278669003a58e552bc01b53c4ac4d5a9"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f65f3865a377f04a4550dfda0d76b182"],["/在Swift中创建自定义集合/index.html","37db55efddcdc8cd9d18408b5bb631b1"],["/在Swift中处理非可选选项/index.html","e0a2c848fb292e9c491a4e441947d55a"],["/在Swift中生成随机数/index.html","d9d948e16e9571fe6cad8d1e34817382"],["/在Swift中重构单例模式用法/index.html","79cbac41165dc7604c984f8ec850c4de"],["/如何为VIPER编写服务？/index.html","60ab6c432753ca56d5f2504186701d6e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","384e17722db7b2e96dadd7ed6c8583fb"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7ea781be3a1dc26a261fdce5f26a0255"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7d6316bc451cc2068f09d27149265cd3"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f43fc3989f1864d7e015ff9fc9c58014"],["/掌握VIPER架构/index.html","aa55a7724c00d55d0dac1c50dc593f20"],["/揭秘 WordPress Hook 系统/index.html","c9649f61b0a56689c3c7455de0f9dce0"],["/比较工厂设计模式/index.html","1fd694233bb7fce04dad0d1baa50afcc"],["/深入了解Swift中的Grand Central Dispatch/index.html","547001054b915a4c99fad15b138406ff"],["/深入研究Swift框架/index.html","0406675737495fe88a8dd9418df09adb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","0fbcfbc4b01b767f012427a3691a1a16"],["/选择Swift而不是Objective-C的5个理由/index.html","e59284d115b69b888fbc19c3a7889fce"]];
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
