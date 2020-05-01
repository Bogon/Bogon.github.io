/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","3edb1bf0ddf4d9c23625aaae15b28eb7"],["/NSCODER和SWIFT初始化/index.html","83aaf7d7b17febda94e8543e6dc3de9c"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b993fd4a7a57cabe61211ac0c64a202d"],["/Swift CompactMap vs flatMap：差异说明/index.html","f2a553c319f474cab3c498373a44b2e7"],["/Swift Grand Central Dispatch 深入实践/index.html","0170d34e1066cab6f7e3217fad3fdf43"],["/Swift Lazy属性初始化/index.html","5e45d511c048d77985b7ce626b41764e"],["/Swift Promises 初体验/index.html","22da650923c2ec3122d711360d79e14e"],["/Swift Promises 探究/index.html","f086dfca6ee3882284f21f6aa5acd930"],["/Swift UICollectionView使用指南/index.html","3d72c64c7600ddc1dcf4d13e5a9cbbb4"],["/Swift URLSession && Combine framework/index.html","98aaed3c4657f704849b63b65699da5d"],["/Swift 唯一识别的视图/index.html","0edd0a5af9213223f5e7a45e8ad62586"],["/Swift 如何学习现代UIKit？/index.html","783a828df82e21fb20a0cf169f62f431"],["/Swift 用 compactMap 替换 flatMap/index.html","43891cdf493319c4e4c7999a7e23cd81"],["/Swift 选择和播放视频/index.html","2533b668280467fc03f5c8614fc78ebb"],["/Swift中UIColor最佳实践/index.html","d9052e59538982bf19ec8c790bc52775"],["/Swift中快速简单的工厂设计模式/index.html","aa3a6b0a5e2e3619990ef52bcf765264"],["/Swift中构造函数与静态工厂方法的比较/index.html","a2659f542ab92e5343d6ed06d8bff080"],["/Swift中的UITableView教程/index.html","a43423a6af3b5c539280342ec772a3e6"],["/Swift中的懒加载模式/index.html","a46cde6e570a1142a4abb5caafdb5a68"],["/Swift中的模块和挂钩/index.html","775dfdb956d36b892d52f2c6f568750c"],["/Swift使用布局锚点添加约束/index.html","a15cbe8f8ea8400ccc0cf9d545932018"],["/Swift依赖注入设计模式/index.html","ea28420e7a212c351a7334188018dd41"],["/Swift关于Dependency Injection (DI)/index.html","cab0481494b8b6db80541048a5b066df"],["/Swift初始化模式/index.html","b61406d7318ffe0f7adbd27b144078d4"],["/Swift单例模式/index.html","612d51840284d4cff5a92b1a119d1fd5"],["/Swift原型设计模式/index.html","8ca96477cdd5ea79550a8b1b50e8da59"],["/Swift命令设计模式/index.html","07a42febe1a333932a9dfa7a9ccae4ed"],["/Swift外观设计模式/index.html","d8a4232fe72dd876a6d241509481543a"],["/Swift委托设计模式/index.html","d652e89f8ee7963a53b104c054d9c8f2"],["/Swift对象池设计模式/index.html","6ea1b3ee88adcc957a9fd1110027bb36"],["/Swift工厂方法设计模式/index.html","f4d6b78e4c51ed39b958db40bf7d8adb"],["/Swift带闭包的懒惰初始化/index.html","215e353d4580e184591db2b3725d49c9"],["/Swift抽象工厂设计模式/index.html","ee82e2de90b616a4f5ce272d15c3be9b"],["/Swift掌握iOS自动布局锚点/index.html","1184709e2affdeba0ee75ea852e30770"],["/Swift支持旋转的自适应单元格/index.html","6c3b62e45796b4ed338c0c261dd624fc"],["/Swift枚举值/index.html","e21c8050a01ca6eb0d996f5f43fe33ad"],["/Swift生成器模式/index.html","813d45629252087af34278dde0b9a8c7"],["/Swift结合Xib文件自定义UIView/index.html","2f5939040785f96d34ac1513a36b2513"],["/Swift编写的20个iOS库(一)/index.html","bb33c4755febabb46e49a57b6fc804ef"],["/Swift迭代器设计模式/index.html","2c8476ec82a8ca8630b91b71b265f65c"],["/Swift适配器设计模式/index.html","af3142c14ec1161a295c0c9aff8191fb"],["/Swift静态工厂设计模式/index.html","7e01924510b16b34fc3de9e5c11de604"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","beda6d478b59f810538d24bef5474e03"],["/UICollectionView data source and delegates/index.html","e049b9feea761bb97166e3653f11142e"],["/UIKit初始化模式/index.html","a215aaa007d781b881754ac8b6de8502"],["/Ubuntu18.04替换国内源/index.html","0efb0810ed6511a234d49c8a3bd5282d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d80ef1f83affab6e8f32d9f6a8d6729b"],["/Xcode扩展/index.html","f34c83fa1ee6da56729662e93f721a0d"],["/about/index.html","1665563bb53b239771588e7e87139c26"],["/appleOS的Networking示例/index.html","c72b834f705e7cdf013be4fbd4f4ad45"],["/archives/2020/04/index.html","ff3034f67cfead003beab83ce4790e8d"],["/archives/2020/04/page/2/index.html","2567f7ba717cbd1bc824787f5d25a676"],["/archives/2020/04/page/3/index.html","137541501d89f204d01d92faf7a0ef87"],["/archives/2020/04/page/4/index.html","3664f74180f13e3ebf08977ee0e06125"],["/archives/2020/04/page/5/index.html","d3427ac08d9d8e0bd3b2bd44b4c92a67"],["/archives/2020/04/page/6/index.html","9b2357ba8fa952539fa60df329124837"],["/archives/2020/04/page/7/index.html","125984105c3b89fbbf7f33acb0c09a36"],["/archives/2020/04/page/8/index.html","5b104a988d663be6f774499306258c47"],["/archives/2020/05/index.html","ad12f7cea543f8ea2b43a5e3d4945f92"],["/archives/2020/index.html","8192115e27d51ff54b8e8c4a6fe4bd47"],["/archives/2020/page/2/index.html","97d0100b817162e72745fbede35e200b"],["/archives/2020/page/3/index.html","80aff3cd3416bc45d2e8fda4670db9e8"],["/archives/2020/page/4/index.html","4a48e374549e85453f6dbf77d3b41b9e"],["/archives/2020/page/5/index.html","790f613d20d5b750f7a269907a76113e"],["/archives/2020/page/6/index.html","31f0ca7083168bce818785ecdeb287c4"],["/archives/2020/page/7/index.html","6fa07da8f9a575bdab70e4fd9a3510c9"],["/archives/2020/page/8/index.html","12307771f8bc8395893151881adfe34f"],["/archives/index.html","94eb7284da90d60626eea28b0e338663"],["/archives/page/2/index.html","f4737881b31823bf2d66cf343f4b15c9"],["/archives/page/3/index.html","801c918fe040f70b8bc7e0d90154c06e"],["/archives/page/4/index.html","d1d0d1aee28b1b5ba74d6687ebbcc3d1"],["/archives/page/5/index.html","7799925d76a238d5c0493427676e0f3a"],["/archives/page/6/index.html","50e638e3fa380d6a3a79ebae7880fba9"],["/archives/page/7/index.html","bebd58944041a2e58de5ea5ccb0fd8df"],["/archives/page/8/index.html","16715c128bd04ca73b953f8599a306e2"],["/categories/Codable-protocol/index.html","d0bcfa47eaa9050670b744a7a17806ec"],["/categories/Combine-framework/index.html","1cce82cf20f89b9ce5a97bf93b83a078"],["/categories/Grand-Central-Dispatch/index.html","e7fb90265cd877f052bdbfa24b92aacc"],["/categories/Hexo/index.html","c790692c053fd90a0bcc42f06a1b6419"],["/categories/Promises/index.html","d8b6f328cf352f24fb92462968e640f5"],["/categories/Result-Type/index.html","0e567659758ac2a37e5d53c329612e20"],["/categories/Server/index.html","be6a638a34145a738dac5e2b772a9987"],["/categories/Swift/index.html","e50d4644d19537a60d88a9373dcb04cf"],["/categories/Swift/page/2/index.html","e0ec854d35bc0d4fb1c0151d49d301ed"],["/categories/Swift/page/3/index.html","0560f5942a2ddd7ec0a42e15605987ee"],["/categories/Swift/page/4/index.html","1aba2cf1235aca9874ce2f90886ce2f6"],["/categories/Swift/page/5/index.html","12265bff49972a919538f1f1a3aa68a2"],["/categories/Swift/page/6/index.html","1648a227ef3cee17fe4e08b6db9d707a"],["/categories/Swift/page/7/index.html","835ea810a4eeddb777bb20af446c389f"],["/categories/Swift/page/8/index.html","220f26c233b0819eb0e7ab00238969d2"],["/categories/Swift5-2/index.html","f80dca0f6df78b8993399e5e17d8cbc5"],["/categories/SwiftUI/index.html","735911e0c986876cd10c856e7a90eb43"],["/categories/UICollectionView/index.html","0fb758a2b7851d7e6890fe5afd3b8493"],["/categories/UIImagePickerController/index.html","0c45e922863373e519751584806ac966"],["/categories/UIKit/index.html","83a1dd431449b839ce104fc1f24b3d3c"],["/categories/UIKit/page/2/index.html","f3bf68ff431cc2c1f9a1f6fcdc97741a"],["/categories/UIKit/page/3/index.html","3aabe500f1573e22bc132eadc0b9ddad"],["/categories/UIKit/page/4/index.html","35954dec585689782f12e795f6268d25"],["/categories/UIKit/page/5/index.html","703a13d0ce2518b895619af9f2b2786b"],["/categories/UITableView/index.html","c3080cc583c0828542bf0de98966ae06"],["/categories/Ubuntu18-04/index.html","bcb8ba8e10a72f7eb6fcb5bc15f5b60a"],["/categories/Ubuntu软件源/index.html","f32d1c6445b1646ec3e786739f660fb8"],["/categories/Uniquely-identifying-views/index.html","38a5a2cd697afee2c41c65da4cf8da3d"],["/categories/VIPER/index.html","d6fd240944847b8d7a3fcc0a47c27600"],["/categories/Vapor4-0/index.html","8fc01c162d56d0f83c6c1cd0f16fc250"],["/categories/Xcode/index.html","308f32f8904e6ffe1d9d04f8b620285a"],["/categories/appleOS-Networking/index.html","d7c46120084208eaa39a6b2c4d2eae89"],["/categories/enum/index.html","06582fc68c3e9d1be6f5a18ddf2f27f4"],["/categories/iCloud/index.html","4c2134c0d2a6fc79a9c67dc8ad5e900f"],["/categories/iOS/index.html","6b8167f15dd562b54d3db574fbf04dde"],["/categories/iOS/page/2/index.html","295ba44b677c00f41af1fde6002e2db2"],["/categories/iOS/page/3/index.html","36d7eba5a5689c42e6ea031967f3017f"],["/categories/iOS/page/4/index.html","2aa231a8f8818091663abfa3cb91f217"],["/categories/iOS/page/5/index.html","ae50928ed0415fbc05394068007e54ce"],["/categories/iOS/page/6/index.html","6a68468585a3c418ab37758d6986d2e7"],["/categories/iOS/page/7/index.html","84e34c4d08c2b3da34701d0a5cefa3c1"],["/categories/iOS/page/8/index.html","4a3fccefb9ef96f18e74a344cbe3488c"],["/categories/index.html","613f327b52d0763082339c3350e2787a"],["/categories/random/index.html","3222ad2206def2242c949903ade4a164"],["/categories/三方类库/index.html","1b1d5e397a7d0955ccc0ec27dc55d8fd"],["/categories/函数式编程/index.html","ecd9a803997710cc1016d7630f170a51"],["/categories/子类化样式/index.html","d3466d9d99d142c53178cfa2cc3d3d62"],["/categories/架构设计/index.html","d8f375670e3cb0b5851949f05f943bab"],["/categories/用户体验/index.html","c3e76bb457d5e35cfa9c0de7dbfb0a18"],["/categories/设计模式/index.html","1b9192dff5685f57aad5eecbe8146552"],["/categories/设计模式/page/2/index.html","cf026692c3ce0556d8b0149f20f87c68"],["/categories/设计模式/page/3/index.html","75dfab78950b34ea01f53cd06851b12c"],["/css/main.css","e001c525db2b91277ab4b997d282876d"],["/hello-world/index.html","e42355e219c26c11c6f4b40226214278"],["/iOS VIPER架构深入实践/index.html","417779b2e46c90f35ce52e9d60c48c54"],["/iOS 自定义视图，输入表单和错误提示/index.html","6caf3c23aeb641745d6a382ec4804412"],["/iOS如何使用iCloud文档？/index.html","663a4cd2e7edb3444ea82cd574acde7b"],["/iOS子类化样式/index.html","b2b507735bf3af4472bf2312a170e6ac"],["/iOS自动化布局编程/index.html","0191e435461dd2991cd16b3a7b83e64e"],["/iOS自定义转场(By Swift)/index.html","bb6915a22d35147dc7c078ef3d0ec664"],["/iOS项目架构：使用VIPER/index.html","c7c7b716a93acba586926ad75a09977c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","bce054a0adb24cb2babd6c97f5b502f5"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3f358965ceb2868d5239a4097028d42f"],["/page/3/index.html","cabbcccdc11d1e81bd7af0ea5b7cd81b"],["/page/4/index.html","c55ef873224449e830505e60aad870e7"],["/page/5/index.html","fa48c7d0195bf11d4dfb566848186bcc"],["/page/6/index.html","dbd23d27a654a1c25d44f6d623c9a3c2"],["/page/7/index.html","8942a7de8d1b45c447f54b9e11bbc753"],["/page/8/index.html","b1d7538f4e38b7e0324e5c471bddf3f7"],["/schedule/index.html","15f2b4b606752627b3bf602e54bd71ef"],["/sw-register.js","82aa4a11e24f2c8ccf60b8c409725daf"],["/tags/Codable-protocol/index.html","876df4d501df61d5eeba87a37f80c6ad"],["/tags/Collection/index.html","4c13e0487a2c9b1562fd117ce7d835db"],["/tags/Collections/index.html","e749d3734254e53c0b6983c4aa1c7972"],["/tags/Combine-framework/index.html","7ce52a4aeba34d24f5e959e6a1ac7480"],["/tags/Dependency-Injection/index.html","0cd361c58e38b2ff997b95e8cec2f7e9"],["/tags/Grand-Central-Dispatch/index.html","1e8894d7716aebe018b9d11a527d5bdf"],["/tags/Modules-And-Hooks/index.html","4bbcdef2bed8f4b059098bd5f6a5674d"],["/tags/Promises/index.html","2c7b441bf868acd65eae4c990814ab8f"],["/tags/Result-Type/index.html","c99206e02a6d577e4282bcdfe35c90e3"],["/tags/Server/index.html","77fa6151c6a4ea51f04412021785191a"],["/tags/Swift-Package-Manager/index.html","fa603f3e809d3451743b9057bf9c6930"],["/tags/Swift/index.html","87abbc3730135f6c4c3fb3b6a6e73433"],["/tags/Swift/page/2/index.html","60978fb0590097209dea8408165fc090"],["/tags/Swift/page/3/index.html","d4ba50f2de6c74abacd619e3b496bd08"],["/tags/Swift/page/4/index.html","fa78773a0d4bdeef944d502dcba156d5"],["/tags/Swift/page/5/index.html","013ec48e14738f9ac5b270ae84d18040"],["/tags/Swift/page/6/index.html","96c666e82f3d925ba9577bed45bed9d9"],["/tags/Swift/page/7/index.html","afa26ba6e62009ef2f876ac229fa5441"],["/tags/Swift/page/8/index.html","b8f9282940461f673874dddef29bbd10"],["/tags/SwiftUI/index.html","7900843e3a6bff39cd79db6329b5f2f8"],["/tags/UICollectionView/index.html","465c187fb33f5f9da7d3b789329c4cc1"],["/tags/UIColor/index.html","5bf590929b2d2e5e7dd0f22f7a21f240"],["/tags/UIImagePickerController/index.html","f4b1c61dd665b4c543a573142c2e3f93"],["/tags/UIKit/index.html","ad008332b405a7658b5d7f957964bbec"],["/tags/UIKit/page/2/index.html","c4d52e87129ccefdb81dd797af886af6"],["/tags/UIKit/page/3/index.html","c45b68ab5369154e7568c05f06c6729d"],["/tags/UIKit/page/4/index.html","10856670e07b68aeba7e149f08a362b3"],["/tags/UIKit/page/5/index.html","70ff8fb85b0ca232fecf783952e0a6de"],["/tags/UITableView/index.html","5ee3146692d99ce9350ef68607ef1b47"],["/tags/Ubuntu/index.html","dfa59c9a4a67ff7b8b68caba2438d4f4"],["/tags/Uniquely-identifying-views/index.html","7974a1992b47f77525f97458ac8fe4f6"],["/tags/VIPER/index.html","99bb953853c989d7924fd469d53f6376"],["/tags/VMware/index.html","1c95f45fd46463d4898069d6b360f4bd"],["/tags/Xcode/index.html","89987e05a1f793690d5ede258e4ad134"],["/tags/appleOS-Networking/index.html","95088ce3757d6db5319f6f2c18498ed4"],["/tags/enum/index.html","1323b2bfa1f0b0465d6387477baf1936"],["/tags/iCloud/index.html","f888dd7b4abd81aa38d0785fef20e3a0"],["/tags/iOS/index.html","04c7f254e2778bc927fb55a31351363a"],["/tags/iOS/page/2/index.html","f54d06891213f30418729f98c9e6a2e7"],["/tags/iOS/page/3/index.html","e897debe7323486d98cce6a248b7fad7"],["/tags/iOS/page/4/index.html","93ce149e7347347ebe88f79cf0ea7804"],["/tags/iOS/page/5/index.html","56a9d87e260e5b619d2145d47a6e1357"],["/tags/iOS/page/6/index.html","6417af51c885169ba858a2e9b2f89881"],["/tags/iOS/page/7/index.html","92e1dd0e778289af29da081cfd0ce016"],["/tags/iOS/page/8/index.html","75301f9cf76c08ad0a81aacee365b5d7"],["/tags/index.html","f9788ec3e1e99705a384b626f83703bf"],["/tags/non-optional/index.html","2ad9af6a9e4b40fba135b9738f26c82b"],["/tags/optionals/index.html","e03c4f407d4ac5da84b39b58e9655d52"],["/tags/random/index.html","2bcec5659f3d186b8c1481eaef0609bc"],["/tags/transition/index.html","7c8f2fa2e20daf8de6caa017a66b8b75"],["/tags/三方类库/index.html","7aae49afd69b5a25f00bffe48cebe8a6"],["/tags/依赖注入设计模式/index.html","475c784690453590bc457d017f5a76c5"],["/tags/函数式编程/index.html","7d023f3baebf8d62f07ec404794b8af6"],["/tags/初始化模式/index.html","cad53a3f5c7805b58254ee600c12492b"],["/tags/单例模式/index.html","a8b47c679ad6f8611dad63975d26ce6b"],["/tags/原型设计模式/index.html","ffbb8e7a04cad66657fea946086895b6"],["/tags/命令设计模式/index.html","c79977c1336758fc4eb58a639888004e"],["/tags/外观设计模式/index.html","40608150707a3ea622a8933f2fd13e63"],["/tags/委托设计模式/index.html","5987f71c3ff04c4863f433dd6659a9f2"],["/tags/子类化样式/index.html","95ecd3b80d9065e1e8f338fb693b8e63"],["/tags/对象池设计模式/index.html","2c2d2defc2af1acaec23dc11e3c905aa"],["/tags/工厂方法设计模式/index.html","a11e5db423d8ef112147909055e0f78e"],["/tags/工厂模式/index.html","e5207acc000f33efb8006114ea1a6638"],["/tags/工厂设计模式/index.html","dd8b6e356649645299aa9729b959e958"],["/tags/懒加载模式/index.html","f558e158897c3246c569f55e6bf34b76"],["/tags/抽象工厂设计模式/index.html","f9b200f79c85e6e64359b0ab06d8339d"],["/tags/构造函数/index.html","09a65a2fab26bec7ddddbf060d079055"],["/tags/架构设计/index.html","e22c5cf035a2451aac2a60c58a78f537"],["/tags/生成器模式/index.html","bdd3e0be0bc9359e23638934ec3f68f3"],["/tags/用户体验/index.html","f9f6a94e5e3b0947f91417496dfd7cfc"],["/tags/自动化布局/index.html","2aea658baf20671b7201b9198ba3b843"],["/tags/自定义UIView/index.html","0c391ffd0e9dc1cb32e582767f37440c"],["/tags/自定义转场/index.html","8f5171794a7a617f373b0b684cefc267"],["/tags/自适应布局/index.html","e1abd45a7d7c55c2dc1f302818027538"],["/tags/设计模式/index.html","72e7cedd0db6e2e7cae36d0b36f9c051"],["/tags/设计模式/page/2/index.html","e9cdfd6eaffffdcaad67e2e0d2d34db3"],["/tags/设计模式/page/3/index.html","11e4e62a871d5f3e8d46a4b464d72d7a"],["/tags/迭代器设计模式/index.html","775b0f1570b2514c074f67b0940923c5"],["/tags/适配器设计模式/index.html","4784d91f7b404bae25d7f232cbc053bf"],["/tags/静态工厂方法/index.html","5a883123f92c911c94eba8540ce8741c"],["/为iOS应用构建输入表单/index.html","8b13690797714841db7bddeaec564296"],["/产品开发的幕后花絮/index.html","d609dacaa15a9c30e6dc00918e22a8e8"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","72c33fbb6c1f3230975291d523ed5c8a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","d0224f0e05c8f19d31735ae412e44589"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","18c59b13ec7272bf0c1078c04d4d1e5a"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b37d00c137fd547c74bd1268e4bd45d8"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","9c6683c1949a28c5d0a7e380634b21e7"],["/在Swift中创建自定义集合/index.html","c2837c886fa6ec277dc8ffe8294e497e"],["/在Swift中处理非可选选项/index.html","e222bd27f77bf16fe41f4442159de52e"],["/在Swift中生成随机数/index.html","60a7304168a82a1b09fa3567fc391abf"],["/在Swift中重构单例模式用法/index.html","11a4bcb3779812a09c513b5aa0f807c8"],["/如何为VIPER编写服务？/index.html","c1c7836961cffd5b0807cd8a46c82978"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e4cb35d45592d94c1fe64316c8a2d438"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f509742ce63a2bb7023ade9e9d82aed6"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","397d6719916422f1361f6c0a6252cb25"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8f941bc21b3f692c3c757e766dbdf381"],["/掌握VIPER架构/index.html","56f7da76a8221ca11af1e7b9fdd62647"],["/揭秘 WordPress Hook 系统/index.html","850f3db4a21df5d8a9fba2281dc36574"],["/比较工厂设计模式/index.html","05bffc819f3446003459bed7b75ab1e2"],["/深入了解Swift中的Grand Central Dispatch/index.html","77a0662dcd7226df1472a367c3a1188f"],["/深入研究Swift框架/index.html","3e5593ab299f8d200e7afee4bfd1546e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","ec297a465db3260bebfbe90f91e5bcd9"],["/选择Swift而不是Objective-C的5个理由/index.html","64caee0cfcba81c88085cf5bd3c7d0a3"]];
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
