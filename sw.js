/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","7744ac5ed0f677c77acf9874fd8e6a22"],["/NSCODER和SWIFT初始化/index.html","6ec963f8f5be204b704e7116d282198e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","2342268dafd61e63202cc0dad6d1851d"],["/Swift CompactMap vs flatMap：差异说明/index.html","4214cb80d657097591577ed69e50b1e0"],["/Swift Grand Central Dispatch 深入实践/index.html","a8f4a6df95784b4a0ee6e69d5f0a75c3"],["/Swift Lazy属性初始化/index.html","7d2fb9114745d7a6ebebc0f08f03c4f5"],["/Swift Promises 初体验/index.html","7ea8a34646f9316159d4d77740e3015a"],["/Swift Promises 探究/index.html","d2bc2b049f125fd4acd074953fdb4ed1"],["/Swift UICollectionView使用指南/index.html","3456f3947065eca6d42e0ba0b296583b"],["/Swift URLSession 和 Combine framework/index.html","13b5d9b97bc72c5dfa4ea9ee335b9ccb"],["/Swift 唯一识别的视图/index.html","c8554abcb13002f669c9a93d809edf6a"],["/Swift 如何学习现代UIKit？/index.html","0f3b0541b418909f594dd39f4eaf3411"],["/Swift 用 compactMap 替换 flatMap/index.html","629b3be3c8ec02a902d0dd1385e18d2d"],["/Swift 选择和播放视频/index.html","c151349a87f49854fd77e88142bbc40e"],["/Swift中UIColor最佳实践/index.html","e0acf32c9e5c71eaa65dde42c00222f8"],["/Swift中快速简单的工厂设计模式/index.html","ff55eb8da06908bd3614ca0d5fbea543"],["/Swift中构造函数与静态工厂方法的比较/index.html","dacb03c4854c700158b5e975002da897"],["/Swift中的UITableView教程/index.html","aebf349e8ec5773ff64f23050fd3c1b3"],["/Swift中的懒加载模式/index.html","49c4adb97ba06fa4722539bc527b4b0c"],["/Swift中的模块和挂钩/index.html","75a5c0781017cda8ae27d024e8f7fb1d"],["/Swift使用布局锚点添加约束/index.html","138dddbb0e4a46bddd817fcce43526ed"],["/Swift依赖注入设计模式/index.html","e5da28b5d7ccc6e13ea8c4e4add3866a"],["/Swift关于Dependency Injection (DI)/index.html","a32e819e926e9239e24c66f029966c6c"],["/Swift初始化模式/index.html","954fb59d2459630fdfb81727a4e5a8f8"],["/Swift单例模式/index.html","7bb38ee22dd990ae2d9f30c7a421342f"],["/Swift原型设计模式/index.html","37b68d6008ee2493ee7fb9210882324e"],["/Swift命令设计模式/index.html","848f16abea0ebca8bbe46f30fa089274"],["/Swift外观设计模式/index.html","437ff3dc06ccf2f7973359764488411c"],["/Swift委托设计模式/index.html","fcdc5399095decf1559b70cc7f1fd832"],["/Swift对象池设计模式/index.html","b522e69873024f443284d6a915a3e4ab"],["/Swift工厂方法设计模式/index.html","274374abc42b01a30657c5630afba9a5"],["/Swift带闭包的懒惰初始化/index.html","8134318dde0bac4c2954348760e6bc92"],["/Swift抽象工厂设计模式/index.html","481b1e6eb3fb1699016f0a35d7be8e13"],["/Swift掌握iOS自动布局锚点/index.html","6fcef51cdc1efa14884e643d71c13c74"],["/Swift支持旋转的自适应单元格/index.html","1149020c9789ca4cc0a20636bad1b687"],["/Swift枚举值/index.html","a5e61d1a159e29adc1721280e42298dc"],["/Swift生成器模式/index.html","8e6a234504e173787402eba3726b4840"],["/Swift结合Xib文件自定义UIView/index.html","14218fd14359af524f99e5afe447206b"],["/Swift编写的20个iOS库(一)/index.html","a0b48a1278949a64f2655753cf0ea664"],["/Swift迭代器设计模式/index.html","2f6420c7b6757398f31c7c8b2e53f17c"],["/Swift适配器设计模式/index.html","6915edd9b5151e8687c69f1e3cd3bed6"],["/Swift静态工厂设计模式/index.html","104fe9693fc4f7cfb537b272ca1b86e8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","191a100e6c155525cfa5655a68dd03f5"],["/UICollectionView data source and delegates/index.html","98bd5e688c750fc6dcc0b0444530dfc7"],["/UIKit初始化模式/index.html","c1b487b730b97210e2d0f1d574359995"],["/Ubuntu18.04替换国内源/index.html","2317a5354e700769e793d11b70e30975"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d60787e3ed155ad4e19d2e1c5b232c6b"],["/Xcode扩展/index.html","aa8ffae29341a3bcfc99a6390bb7e677"],["/about/index.html","03410fbe3bcbc2b62cd8e87e7adca0e4"],["/appleOS的Networking示例/index.html","fda8207478ea45d7297119ee41dd884d"],["/archives/2020/04/index.html","14ec64ec6df7902d3b717af9b0da29bb"],["/archives/2020/04/page/2/index.html","d39fdd20fe25b62ac019ac411175e57e"],["/archives/2020/04/page/3/index.html","e4dfa4ee7af91a3057e9d0075823dd36"],["/archives/2020/04/page/4/index.html","6d52053001a827432ade7e2c658dd79c"],["/archives/2020/04/page/5/index.html","996992ad39a9138598ab3a40f6821492"],["/archives/2020/04/page/6/index.html","79d4b6ce361d6ffa6f51beabeb89cbd4"],["/archives/2020/04/page/7/index.html","7880ef8ccc01c962208a0aa52a244fb3"],["/archives/2020/04/page/8/index.html","f67e161e7b8adcde1db3b3ce677ab0b8"],["/archives/2020/05/index.html","9b85ad9d9ea916f701c4d0dde2ca4be1"],["/archives/2020/index.html","3a754def6e3af2ab912b13d1d37c7683"],["/archives/2020/page/2/index.html","8ab56c696401713a000cbb7a1aa14134"],["/archives/2020/page/3/index.html","6d1ef228bf244a1079c7297ad6f08c99"],["/archives/2020/page/4/index.html","973af4371cba504927cfd9b76da288b4"],["/archives/2020/page/5/index.html","27bbdbd7c70a9abe1b5cdfd6b8ba70ab"],["/archives/2020/page/6/index.html","773f42e75d08c460951d8b7bf6c5e3ec"],["/archives/2020/page/7/index.html","e7d3cbae7e3a6525b5b58fd59c504232"],["/archives/2020/page/8/index.html","f478e62323cfd44b53b87f546f302254"],["/archives/index.html","597a0247daad8a5869cfaf577e6e5eea"],["/archives/page/2/index.html","47c6a3a416431249693a9438921bdf2a"],["/archives/page/3/index.html","160b846ef004998339eeccea8d918858"],["/archives/page/4/index.html","cde2b19c10ca45b43a820e395ec17916"],["/archives/page/5/index.html","d94d4f222b4c714a5bcd0986ad515f16"],["/archives/page/6/index.html","5825b216ba1f83a8ed7f747d1576ee89"],["/archives/page/7/index.html","2d6f79b3ec9d3a863e1fd9ed2df6089c"],["/archives/page/8/index.html","8cf1df54df1525615f993d34ab722a9b"],["/categories/Codable-protocol/index.html","5ca5ad694d2ae7b87ca3c49bded29177"],["/categories/Combine-framework/index.html","020a6a832c36db9f4eedce6a29c9892d"],["/categories/Grand-Central-Dispatch/index.html","3221c7ec560c3697138decfb292006da"],["/categories/Hexo/index.html","da49dda7a530afcd13339c295ee4f135"],["/categories/Promises/index.html","582b294a2c1d4b866c5dec0f66b1c963"],["/categories/Result-Type/index.html","cf4999c66f148b63bc912c2e7d6ac55a"],["/categories/Server/index.html","60df08061cdae7717f57126221fefcd3"],["/categories/Swift/index.html","66c001e137b63287a189e9ab17c0a581"],["/categories/Swift/page/2/index.html","0482b558cf802bf8ec09956c67449bed"],["/categories/Swift/page/3/index.html","a9061e47c2682216d03c80f15718c66a"],["/categories/Swift/page/4/index.html","cc8264b03a077404c0ba29eb4fccf3c4"],["/categories/Swift/page/5/index.html","b7c687428f6e1e7bbff5ae1f4d014759"],["/categories/Swift/page/6/index.html","feccf19362dde4da7bf080ec56f006ac"],["/categories/Swift/page/7/index.html","2aa0d48d3640329758e998f8dfa1be5b"],["/categories/Swift/page/8/index.html","72aebc61208fd06cd0724fc6165dfbb5"],["/categories/Swift5-2/index.html","ddb0828d7d35d437264b78b143221635"],["/categories/SwiftUI/index.html","83db4295ef5cf11809afcb4154b0be13"],["/categories/UICollectionView/index.html","b8b544ab1bf16a3967f7670d61bad547"],["/categories/UIImagePickerController/index.html","449205dc2ae24d27759304906eec6de1"],["/categories/UIKit/index.html","3f3cdbc28bb632b64bb9984229122ce7"],["/categories/UIKit/page/2/index.html","349487a72447cdbe321f30bfd4be0274"],["/categories/UIKit/page/3/index.html","20a73b31683553a30a0a0448c3917d6e"],["/categories/UIKit/page/4/index.html","6a2db2ce5677fb3d5ac181c57a05167d"],["/categories/UIKit/page/5/index.html","452762741e2877ce17b419ff3608097e"],["/categories/UITableView/index.html","dfd22525d8d93d5fa3d5adb5ddab9abc"],["/categories/Ubuntu18-04/index.html","dfdd4f017861df082fcda5b8345f1300"],["/categories/Ubuntu软件源/index.html","a2d892ecc1e64e92064962ea7d591e05"],["/categories/Uniquely-identifying-views/index.html","190737263c45a0dd9b950510751a6a99"],["/categories/VIPER/index.html","e14f694aaacf34a3072921373ae3cbaf"],["/categories/Vapor4-0/index.html","d291f30dc31566b41c0a82b73079a4ad"],["/categories/Xcode/index.html","ec3e3e5a6038efe5397ac9c349f7c012"],["/categories/appleOS-Networking/index.html","5bb4824fb9179b5441c0588d6f79c147"],["/categories/enum/index.html","59054bf0091716d5cd02f4deeb94419c"],["/categories/iCloud/index.html","42fd7da26d7003cbd47991d1ef92a360"],["/categories/iOS/index.html","cb43089614d2bd39cd740c7cfda13531"],["/categories/iOS/page/2/index.html","9b66922c9e7b2c2f431dc8b0ccdb539e"],["/categories/iOS/page/3/index.html","f979278ea4898a819b72edc0cea2300b"],["/categories/iOS/page/4/index.html","780de8f7d99c6b2604bf9f8185313684"],["/categories/iOS/page/5/index.html","9f1a7b0bb09d4bbbafd908ad2e659828"],["/categories/iOS/page/6/index.html","3fd4c344055a8238338e904aea77999c"],["/categories/iOS/page/7/index.html","99507c6315d98af54e9429b3309352ab"],["/categories/iOS/page/8/index.html","77ce6a675a2daeaf05e560e7bf326052"],["/categories/index.html","dd310ef063181126785dbf1911747224"],["/categories/random/index.html","f64eeeeebf29a16dc49bb7c80d33db38"],["/categories/三方类库/index.html","a16191d27142e53bc792b8c3c8b489c2"],["/categories/函数式编程/index.html","3c2bab721fe95513f601970adf3a2435"],["/categories/子类化样式/index.html","84d39c2f8c3c053778ff01f047f56748"],["/categories/架构设计/index.html","fc9080ccf56e74eae9bffabab70e583b"],["/categories/用户体验/index.html","a4000d8fcd955998dcc1275db81ddcf4"],["/categories/设计模式/index.html","c15bb8df8bc0fa99e232c7a7d027ff8f"],["/categories/设计模式/page/2/index.html","d3d25560e265183614632e38120c4fd7"],["/categories/设计模式/page/3/index.html","ab260604f60b234744cd917ddf32d9dc"],["/css/main.css","ae5e40cfdd6db4c018c4ed7301eef8d1"],["/hello-world/index.html","dbd1c56d63090e55c0a7d5ca8b8b48ba"],["/iOS VIPER架构深入实践/index.html","3a220ecd3bc94d2f4a8e60c294d501e1"],["/iOS 自定义视图，输入表单和错误提示/index.html","0d6165b6d0880dca188b0b7071a02c7a"],["/iOS如何使用iCloud文档？/index.html","40ee3a536acf06cc27bd6efc252c0f51"],["/iOS子类化样式/index.html","ea98c6ad3368278b81ff41e5e2dd3809"],["/iOS自动化布局编程/index.html","aa1d2e819326bf1e3f02c2fe1b679509"],["/iOS自定义转场(By Swift)/index.html","a85610d70f697a38d33aa332bb9be378"],["/iOS项目架构：使用VIPER/index.html","960c21d7097b19e87bca79c8bebc784f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","130dec823cf0e4dda9bdfa832294db09"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4bb5b78f1c98f6deb37cefbc6ddf8b27"],["/page/3/index.html","3cad49c9f1fec65ee6ac23ff25985b86"],["/page/4/index.html","ab1ab5425c3d06e55c382aac6d6ac5cf"],["/page/5/index.html","1fa13878dcedc2444d42fec4f53b4dc0"],["/page/6/index.html","e9e751c0bf08c082a0982c031730ddbc"],["/page/7/index.html","439ac17d393e8d86be877753d62e6eca"],["/page/8/index.html","89ae1db75dce75bc90daa1d12b0cf0a6"],["/schedule/index.html","b036a03f58b5b9be0e5afa4294070174"],["/sw-register.js","2e64e8a92efc266e866b93531b48693a"],["/tags/Codable-protocol/index.html","bac94ada95806a259f448c0a97fdc25a"],["/tags/Collection/index.html","b6269182405ba76cfad9718f64acd632"],["/tags/Collections/index.html","04c79641240ac74ca1ed63639ec9402b"],["/tags/Combine-framework/index.html","020452a4ffe28f18814b836bc0796492"],["/tags/Dependency-Injection/index.html","8f9b6c3488f5cc44178fbf2e924f84ca"],["/tags/Grand-Central-Dispatch/index.html","31e3bc2f38f79ad3acdb072c787513dc"],["/tags/Modules-And-Hooks/index.html","52e60aa4ce6e1272df95945b09dc207e"],["/tags/Promises/index.html","5f50f1c9884d2fb728295135e7d929ba"],["/tags/Result-Type/index.html","23f187cfb7782459276458d9203e1c7e"],["/tags/Server/index.html","d56664da001fba6d80acfd6be3d20ada"],["/tags/Swift-Package-Manager/index.html","9010ad18bfea0e3ad1be7c2a1233aa7a"],["/tags/Swift/index.html","5848f4cfb134ecdadb019b82e363e8bc"],["/tags/Swift/page/2/index.html","2c8363e9932a4730c097b453df79787d"],["/tags/Swift/page/3/index.html","85b57a6fee318c9fff3579ffd604b075"],["/tags/Swift/page/4/index.html","6fb54182d927446751649ea4a5d102fd"],["/tags/Swift/page/5/index.html","ada371659b89c39916aa08df1d4b801a"],["/tags/Swift/page/6/index.html","6aa31ef794d4098f4c56b1fdfba63404"],["/tags/Swift/page/7/index.html","d687c4b2a7f5aab6b0513208cad3569b"],["/tags/Swift/page/8/index.html","b26ceecba5ec0dce04c7d57f73a69347"],["/tags/SwiftUI/index.html","c263ddeb60b29dde09ca2af80ce5ba14"],["/tags/UICollectionView/index.html","a4d559db206e3d85e3fd1d718afc4dcf"],["/tags/UIColor/index.html","05a74f1feb63fdb926b09c452fd57de8"],["/tags/UIImagePickerController/index.html","bda8d9f7ebd39a287775544bd105edab"],["/tags/UIKit/index.html","738f70762165ba2691ad6ee1b08d7424"],["/tags/UIKit/page/2/index.html","010981605fdee91cc0bcc23d6d5846c8"],["/tags/UIKit/page/3/index.html","690113fc92f32d14ebfdd4251af54303"],["/tags/UIKit/page/4/index.html","da743711a4f36f12dbced11d383ae4ca"],["/tags/UIKit/page/5/index.html","2f3db7253ad1c65430252d2d728399be"],["/tags/UITableView/index.html","73f28c2baaade511a1bbfe7b52dab367"],["/tags/Ubuntu/index.html","78429099113395bb4b2623ff56367bcc"],["/tags/Uniquely-identifying-views/index.html","656a7c6010acc37e636f08e2c8d561f3"],["/tags/VIPER/index.html","7722e56a5e6859dd251a2707f12a4ba9"],["/tags/VMware/index.html","60c6a529ed2db471e2af81cdbc368c23"],["/tags/Xcode/index.html","b554b70f90f72d3a2409cc7dc21012f7"],["/tags/appleOS-Networking/index.html","90c1f807e86b94f2d7df0265e92079d6"],["/tags/enum/index.html","c06714aa2fc3e1be9e5862c430ad84ba"],["/tags/iCloud/index.html","37881ebd87b5bfb65189a685aea287d2"],["/tags/iOS/index.html","e30696c70955fae74df47325f53234c7"],["/tags/iOS/page/2/index.html","ae5f1fd2a75a769b449aa9bdd1752c72"],["/tags/iOS/page/3/index.html","f6ae620df0af1020c1936fa38111ba46"],["/tags/iOS/page/4/index.html","69d2409ece7891ff7d6652b5b50d3aae"],["/tags/iOS/page/5/index.html","e1a263780a03f6ce7b157582622aac16"],["/tags/iOS/page/6/index.html","53d6e175438e335feb3b0c4e77a7255c"],["/tags/iOS/page/7/index.html","88303471b1b9b1dff95d600169e75cf7"],["/tags/iOS/page/8/index.html","816bf639cc4456504da6a1e4d4d335d6"],["/tags/index.html","215eb37fff2519e467c41c8c03b9e95b"],["/tags/non-optional/index.html","d0acf09121abb529a0cca4d26b2f7ed2"],["/tags/optionals/index.html","372148fc08c08c15aee4a8fc8b93680e"],["/tags/random/index.html","b236b9387356ddc3c079b574c9f668cb"],["/tags/transition/index.html","4c3aec0f64d39f813a2f8fe795f8f640"],["/tags/三方类库/index.html","30a0749562396f1a5d71d824c535f443"],["/tags/依赖注入设计模式/index.html","3d35fec9fac61bfb2f03c167cedcc72f"],["/tags/函数式编程/index.html","086eebf3a13d6ce2034ab9d20bd7c6dd"],["/tags/初始化模式/index.html","3d5a28f90eadde3bf328b1ec0c0dc35d"],["/tags/单例模式/index.html","9077abdd7b86952b8a5addc1973e663c"],["/tags/原型设计模式/index.html","a2b04fa1b239ce103b437a51b41cb72e"],["/tags/命令设计模式/index.html","0a7100ce5c55b460bff3ac7434f78b75"],["/tags/外观设计模式/index.html","8305d3b0667aaf3ffd00a6f27bf4a2a0"],["/tags/委托设计模式/index.html","a212ba8a9703a58e3e2d00231ad4d7d4"],["/tags/子类化样式/index.html","de56a89dd3c5f069871e7c9688b63bb6"],["/tags/对象池设计模式/index.html","7e848badf87a431c5fbcbd885a9b71a8"],["/tags/工厂方法设计模式/index.html","ee8da6e68aa13da5112b3a90bbc25fdd"],["/tags/工厂模式/index.html","220f23a2200868d7364da9ac3e0d4c37"],["/tags/工厂设计模式/index.html","dd8549139bf8c662e664c9b41c9db704"],["/tags/懒加载模式/index.html","8ec6c5458d3e031998a9e10836445d45"],["/tags/抽象工厂设计模式/index.html","4d71f055793074003d508bb5ec8e54f3"],["/tags/构造函数/index.html","270875d5658e8d8e47cb121b09cac762"],["/tags/架构设计/index.html","74462565dd0f007f93dca6f2730005b6"],["/tags/生成器模式/index.html","c1013d94e286a0c02012bc213d6a9188"],["/tags/用户体验/index.html","b26ea8612d9c5054b788ce44096649f7"],["/tags/自动化布局/index.html","198e621ed10749dd92b419585316ac69"],["/tags/自定义UIView/index.html","55a58148baf1d5bdfb59597cf421781c"],["/tags/自定义转场/index.html","abbb27317e776c5c87eb1b2b0b6319f6"],["/tags/自适应布局/index.html","2dc4f6cf6931005dba802ed66713bdc9"],["/tags/设计模式/index.html","342465718cf1cd6167fb4d55aa268004"],["/tags/设计模式/page/2/index.html","4f718858c347b0fa9af0ac56a39c2ab0"],["/tags/设计模式/page/3/index.html","2b6f2514ccc99628e7d7be769a4d1150"],["/tags/迭代器设计模式/index.html","fcddd09a9eb2bacd8aa84b043bbb89a2"],["/tags/适配器设计模式/index.html","0c2edccf39731625a97da4a7ad460e91"],["/tags/静态工厂方法/index.html","ab9f7f780f07ed49d716fe25fe965ea4"],["/为iOS应用构建输入表单/index.html","b9bacf4cfd25a133b8a863bd6406765a"],["/产品开发的幕后花絮/index.html","16668e80352cfa8235e0feb2b66ad57f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","3d68fc51ab1eafa2ed753d3fd86f17e7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1aa568a53948a06a7d3e4b99bacd61c6"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","48c7dceca02ff84d22e3dc5f005c53bf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","8e249b2d3203dc7095b40c1ab61f11f6"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","dd18d0540c707f0ede5cbbcf9b3c17f3"],["/在Swift中创建自定义集合/index.html","312cc7a8df16a32e53a343bcef624780"],["/在Swift中处理非可选选项/index.html","1317d6511fc9338bc09c048aec72dd4d"],["/在Swift中生成随机数/index.html","08990df13b8f653c76e0ae7e3d9165f5"],["/在Swift中重构单例模式用法/index.html","8833981c90e2d4bb2ef5e4de73b8a355"],["/如何为VIPER编写服务？/index.html","ea82b5dc49c29c48fd0314130e74f7ef"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d41dee74b0faa72bd5b3caa57ae10d41"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","df10e94fec632ec5d34d552c1770fab8"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b466a819e10caefa960e8230cf6ccdb0"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bb619c8c2a05a90cebae7f9d51a1fa66"],["/掌握VIPER架构/index.html","2ce97c6ead41e3db784cf18d681fe8fc"],["/揭秘 WordPress Hook 系统/index.html","787e12f5b29adf2866ff835b5f9a49df"],["/比较工厂设计模式/index.html","ca555d990713152df30d064d7b67987b"],["/深入了解Swift中的Grand Central Dispatch/index.html","3e018780b1467004c3cc236ad6564e12"],["/深入研究Swift框架/index.html","9232e9d3fd46b782effc32b78d723b0c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","27e4ec71862d8f2217a2f2ef79498cc8"],["/选择Swift而不是Objective-C的5个理由/index.html","64151ab98366ed5a9a1b0799f0944179"]];
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
