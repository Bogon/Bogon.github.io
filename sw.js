/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","501c804522f04120ebf206177b6c3e40"],["/Advanced Swift系列(一): Swift 简介/index.html","c5e00c831ef3e18e7d7d6c44216d2e8a"],["/Advanced Swift系列(七): Strings/index.html","6ce0c00ccd24fdeeb8ddf19f1dcb1d18"],["/Advanced Swift系列(三):  Optionals/index.html","4d24f0bdddc85f2628c141a037417cde"],["/Advanced Swift系列(九): Protocols/index.html","7ac40dc18b5fd225067af157279193f8"],["/Advanced Swift系列(二): Build-in Collections/index.html","b7ea0e922d93c3cfd604812ccda44746"],["/Advanced Swift系列(五): Structs and Classes/index.html","9c9323e5a9f54df4d4bc5598d3d46656"],["/Advanced Swift系列(八): Generics/index.html","6ba88573193f5b3e3712a64b451ea62d"],["/Advanced Swift系列(六):  Enums/index.html","7c23229174bab6099f0a8f861eff413f"],["/Advanced Swift系列(十): Collection Protocols/index.html","f894d2da2432148829b280dea7b95e3e"],["/Advanced Swift系列(十一): Error Handling/index.html","3543d5bd76e9863ccaf656b7ba1b1231"],["/Advanced Swift系列(十三): Interoperability/index.html","de87acf3f4a60a21c45e688e4de15d0e"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c5ff340f29c621ac77d130cd11393308"],["/Advanced Swift系列(四):  Functions/index.html","49e226846478a1256400087e50397562"],["/App Architecture系列(一):  简介/index.html","042d831428d7c62f38801e66593b142c"],["/Functional Swift 初探/index.html","917db357abe655d01e9231fb5205b8b2"],["/NSCODER和SWIFT初始化/index.html","88ecada575362b61243a23c938878716"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d66f82f6903b72461e5811976d54bc73"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3433b26ad7c910c8e231f39d75e95867"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","72625de90d3ebab66f2fa4b9ee8b1124"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","5d4a78d0aeb0d133c9004a381c4edbfd"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","de66845d217094c3aa1794bf0bb5a887"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","601e72e06363a2c13a3210acdacaf9e0"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7c373d7886289f52869825326337cb4f"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","e18b64883723338c98ae7d3f062e348c"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","5d65a7e84c887d5df2e2a77128fc4701"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","c3b7caab218fd985c72f10c364a47e74"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","1f328d2d53b585443a2d45fdb16eb73a"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","f7ba58c86b00696bb26f8227bdb9ad91"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","9828b8c8b528c5c7591ce218a2e54a33"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","fd7a3d3dd35e28072152204e2629858d"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","e169ea129d70c7959687650f94e2cb94"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","0889224954835b133c1f93471092f2fa"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","4fcb160707f19cd44e7888b5baad9041"],["/Swift CompactMap vs flatMap：差异说明/index.html","9a8757c16b2434ed0c21424d4fa6b824"],["/Swift Grand Central Dispatch 深入实践/index.html","60932e67a4940d37a762306e13034e8c"],["/Swift Lazy属性初始化/index.html","440d2d2df661f9508c65a1ce7fecf3a9"],["/Swift Promises 初体验/index.html","a36f15f22f7527ce4705d2ecd0a50afe"],["/Swift Promises 探究/index.html","b2a4cc2c1509c50a8a9db5660fbf60cc"],["/Swift UICollectionView使用指南/index.html","8fbb4323380f815b015861ab8001e8be"],["/Swift URLSession 和 Combine framework/index.html","eb19f9667872b51e8949f17c4c3c734c"],["/Swift 唯一识别的视图/index.html","9b037ae435efeb5f88e3eacc8b1f750b"],["/Swift 如何学习现代UIKit？/index.html","32b30926c282e5828e438da17f34ab4c"],["/Swift 用 compactMap 替换 flatMap/index.html","480a98d7601e597d80df18aabf706b7e"],["/Swift 选择和播放视频/index.html","a4a8af2e5c5bc620958940d0678c49fa"],["/Swift中UIColor最佳实践/index.html","f7ee69beea466e4d9e9b148a3693f9a1"],["/Swift中快速简单的工厂设计模式/index.html","f32944e33643eb8ebdae5235c2fded26"],["/Swift中构造函数与静态工厂方法的比较/index.html","3691e8162410b4aceea35de7bf1bb177"],["/Swift中的UITableView教程/index.html","7f9d0a307281efb4898e12f71330e189"],["/Swift中的懒加载模式/index.html","c0c18b89c867970e05d0127abf6a4fc8"],["/Swift中的模块和挂钩/index.html","0d5b4445ced623e754d503443043ca41"],["/Swift使用布局锚点添加约束/index.html","18def206ef8765ff74c038922c700b3e"],["/Swift依赖注入设计模式/index.html","3e120daf0d0b259ebf55b6f098a51e31"],["/Swift关于Dependency Injection (DI)/index.html","ac03111e7cf9970c0698a9df186296f9"],["/Swift初始化模式/index.html","94815aa6fa042a594a0aeac7539388cc"],["/Swift单例模式/index.html","ca17d878fa4539a350ade4cc7cdbf7b2"],["/Swift原型设计模式/index.html","9bb771ecaf983a53be4011c2f55b66a0"],["/Swift命令设计模式/index.html","85939b1987b9df2b7a77f8fcf1d6b189"],["/Swift外观设计模式/index.html","3374e563f84b8ca8932f9f417593d94e"],["/Swift委托设计模式/index.html","3d361fc56ebd55b96346490972268aa1"],["/Swift对象池设计模式/index.html","dac67b284672ac81ca8e85e21061f2d5"],["/Swift工厂方法设计模式/index.html","4b89c0c53b6150940e263e9091a0d693"],["/Swift带闭包的懒惰初始化/index.html","319262a8037b0ba15536a6b99b865979"],["/Swift抽象工厂设计模式/index.html","55e25e3b1cc2675fa4ff123f449e5e95"],["/Swift掌握iOS自动布局锚点/index.html","56f1811c0ac48cd7dcf3c0541572559d"],["/Swift支持旋转的自适应单元格/index.html","7d8c25b7f177fb55ff1be434fd29d6ea"],["/Swift枚举值/index.html","42c86acd8ee676081da67e1b22af1204"],["/Swift生成器模式/index.html","933f06c68e80db5955d37339f2f93378"],["/Swift结合Xib文件自定义UIView/index.html","33e59e68b5019aeb9d41476819f4c03e"],["/Swift编写的20个iOS库(一)/index.html","5a3fa338ceaea5778c21808369febceb"],["/Swift迭代器设计模式/index.html","0fa2a45491c6c77831eff0248a1a33b2"],["/Swift适配器设计模式/index.html","8e8cc0ea6555ce65e3e67665eab5cdaf"],["/Swift静态工厂设计模式/index.html","0a7f650028a49338a66f622313738553"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c6f99bdfd8ef196f2d1ed317779ae7b0"],["/UICollectionView data source and delegates/index.html","7c58ebb1d6687067ec5f56b69288625f"],["/UIKit初始化模式/index.html","fbb09038acdfeb7c8660aeb827d8c948"],["/Ubuntu18.04替换国内源/index.html","a229ebb4ac31da11a944b4ffe647b42a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","a24825bbd501f941446bb735230953af"],["/Xcode扩展/index.html","3d07440be30529c5885ff7da13ffbe50"],["/about/index.html","15735e59e3510bfe2c0ecf620a6e23e9"],["/appleOS的Networking示例/index.html","2babf4ac60ad6dac16d8969af73b1220"],["/archives/2020/04/index.html","cfb985426f12974aadc4e48e89f15254"],["/archives/2020/04/page/2/index.html","389b2634346bf5408bdf18db9669a6a5"],["/archives/2020/04/page/3/index.html","e4e315af2ff99112886cd5fbf185c5c1"],["/archives/2020/04/page/4/index.html","090b4a100d241a8666f23eb7b04e291c"],["/archives/2020/04/page/5/index.html","66d4203fce8d952a4af78a078e2d7c84"],["/archives/2020/04/page/6/index.html","189a48026f32bee70c6377099194925b"],["/archives/2020/04/page/7/index.html","bb31c1d7d1c7399bcb8f65f28d832cec"],["/archives/2020/04/page/8/index.html","60325f15873a4e0ad4260571fc646180"],["/archives/2020/05/index.html","7e9d9eb989d7b88a903a90745c5b9778"],["/archives/2020/05/page/2/index.html","8ac3a2bbede8644f7bab2f103b0e8137"],["/archives/2020/05/page/3/index.html","8859c84b0f05519a5e0370feac8774c4"],["/archives/2020/05/page/4/index.html","6a97e2919633a355dbad486fc0876bde"],["/archives/2020/index.html","b53d3a9064a086eb8323f65e04fc6ea3"],["/archives/2020/page/10/index.html","99f98a034e1bd77dfa46918684c25dac"],["/archives/2020/page/11/index.html","1543e37347dd0c3acccb4adb418c69aa"],["/archives/2020/page/12/index.html","24cca85d87c622d771827028532e4317"],["/archives/2020/page/2/index.html","343a9da11adde2417b4e80439bcc6ebd"],["/archives/2020/page/3/index.html","d433560f332dc80d6366468a56d9ce0c"],["/archives/2020/page/4/index.html","c19a6f8509037e4739e9969c19f50bc0"],["/archives/2020/page/5/index.html","00604ce93a924a343183a50bcabea0db"],["/archives/2020/page/6/index.html","2b6dc2fc8bf0c300ad58c07859ec8095"],["/archives/2020/page/7/index.html","a183707040e15ddcc6e7f45fceb7b814"],["/archives/2020/page/8/index.html","103041a38a69052cdcb3fd7a8b76a83e"],["/archives/2020/page/9/index.html","1e7fd02379e68d93838cfced38594e44"],["/archives/index.html","74cee105e1ed501f685d43c9151f0496"],["/archives/page/10/index.html","09e144a8527b9c4f29c4589af0616ef5"],["/archives/page/11/index.html","17ed5245ca346e32b2c922dcee7cf7ad"],["/archives/page/12/index.html","4938b5727c15ed85c93c631bde224f56"],["/archives/page/2/index.html","519ac0789b8fc0e7350b28f9add6fc02"],["/archives/page/3/index.html","942498488ffc8ad24df9800bf9f913f7"],["/archives/page/4/index.html","c6679da996f59c004e085e6b1c5dac83"],["/archives/page/5/index.html","efbc15f8bd80b72fad8260cb3f6e73a7"],["/archives/page/6/index.html","1e608a7751d401ead1f96aef35242869"],["/archives/page/7/index.html","96de2455086b219594c2d38bd0a12187"],["/archives/page/8/index.html","1823e2f1604562d7b1705480426495e2"],["/archives/page/9/index.html","f427881f2ea8cd3c3cf4e33969554635"],["/categories/Advanced-Swift/index.html","98bb09cd07c9357ad519abf92c83add5"],["/categories/Advanced-Swift/page/2/index.html","6e35f966e60e92e2863a8e046abcfe48"],["/categories/App-Architecture/index.html","3c85eb6db1a7dd9be2100c8a38cfa8ca"],["/categories/Codable-protocol/index.html","7fb3782ab95435d7e3edf1f8f9d63be4"],["/categories/Combine-framework/index.html","f2df16a5bcd2bb84fb47edf64ed74420"],["/categories/Combine/index.html","3a08bae4e09cf58260ac61395c06c4a2"],["/categories/Grand-Central-Dispatch/index.html","e703b011c38cf85fb68dc186858080a5"],["/categories/Hexo/index.html","c4ce42892064dbdc96043de25a163b9c"],["/categories/Promises/index.html","69287a8689705c0cf5ee0e560004676f"],["/categories/Result-Type/index.html","0d52397a9fd1c18e1858708bb37fd50a"],["/categories/Server/index.html","0f1f690f171eae251fa7ae1e57b569e4"],["/categories/Swift-Apprentice/index.html","5a2ef9719775e0cc1645a41a2efd0a35"],["/categories/Swift-Apprentice/page/2/index.html","cbbbbf6e461e4896168fde89f6efa4a3"],["/categories/Swift/index.html","da91266991020c645fa1ea60f40ec1cc"],["/categories/Swift/page/10/index.html","34d2768cb91a7d672b75d60658c775cd"],["/categories/Swift/page/11/index.html","4909dcfde084de9867067f9ecd98b1db"],["/categories/Swift/page/2/index.html","0296a7501c319f7696b857edbfea011b"],["/categories/Swift/page/3/index.html","a0c5163d2f5d0440eb08e657c43b97a8"],["/categories/Swift/page/4/index.html","d2987941869e0980b14acc16334ffee0"],["/categories/Swift/page/5/index.html","1cfb18b21a8378fd32dcb46839a87f3a"],["/categories/Swift/page/6/index.html","3f1ee263fd97de0a2e541ddea0947d46"],["/categories/Swift/page/7/index.html","eda8b87050b46350f64d126e10361a5b"],["/categories/Swift/page/8/index.html","9467b5ffee4669a917a5fee361a3f160"],["/categories/Swift/page/9/index.html","db78e04712a427ff3e19ded75386319d"],["/categories/Swift5-2/index.html","0f640524ee6a3c10fab66063f0e0b141"],["/categories/SwiftUI/index.html","80fbf66838c60430bb86197f2817d5c4"],["/categories/UICollectionView/index.html","328c93920c10cc4ab37090fa0722c290"],["/categories/UIImagePickerController/index.html","548cf62d2f9c7e504e347c4dd92d18ed"],["/categories/UIKit/index.html","420d245cb3be7f560484a31693769ae6"],["/categories/UIKit/page/2/index.html","fa72f1dc2b1ec7746108dd0a6c1b9a2a"],["/categories/UIKit/page/3/index.html","ef9848bed5e67148e873a73dd811af0c"],["/categories/UIKit/page/4/index.html","55b21fd84c40796d7c62e532f23c787b"],["/categories/UIKit/page/5/index.html","c98a36def061837a61eb444cb1b0d5a3"],["/categories/UITableView/index.html","2c20aeaf4f07e49f40b9706466b36a1b"],["/categories/Ubuntu18-04/index.html","ba90e8aab6cf47029cd463d4635c4dec"],["/categories/Ubuntu软件源/index.html","a237ef33cec59f178508714bcb56659b"],["/categories/Uniquely-identifying-views/index.html","46029e2691af6748b0c54dca05f6c485"],["/categories/VIPER/index.html","fc0789e260bd6fb79d3e8520dee22b3c"],["/categories/Vapor4-0/index.html","4b94d0a9034c82f5161eeb0107f4a72e"],["/categories/Xcode/index.html","67901c91a01e999f2be01f32fb29b467"],["/categories/appleOS-Networking/index.html","d757ddae7b5407e5d801267810b56c3e"],["/categories/enum/index.html","8788c6011edf26bcf17034ba2970bb44"],["/categories/iCloud/index.html","86a1bfaf2be6e1dc374a028071a3af4c"],["/categories/iOS/index.html","0d6eb358e2b052411c5692ff2877e5ad"],["/categories/iOS/page/10/index.html","29abb8e3ebb974c0fb9d34d85a7193a6"],["/categories/iOS/page/11/index.html","1dfddad6b9878ea635201c51d6bcc505"],["/categories/iOS/page/2/index.html","ada3ebe447e4379a3c9fbf8932589531"],["/categories/iOS/page/3/index.html","0bcd3de39e30f1f5a07501751aadb751"],["/categories/iOS/page/4/index.html","48755345884cac758f6187ef05aebd5d"],["/categories/iOS/page/5/index.html","1a1d49f3228f6404a96da5a05b2fc23f"],["/categories/iOS/page/6/index.html","fb7ddc44ef1a2fdf233b6c4778c3ddba"],["/categories/iOS/page/7/index.html","22b5cc3e61f1c3bc18460262ec97cf20"],["/categories/iOS/page/8/index.html","655efd5ee6d8bd181d438b9d7c550034"],["/categories/iOS/page/9/index.html","0cb53c53989d4347581eed1e04439f6c"],["/categories/iOS面试题/index.html","90b6d8dca05000e755aecc2c76b7bc1b"],["/categories/index.html","7a8129ebf315103bfb21d110018d3bce"],["/categories/random/index.html","774c3ffc3fe39e6162dacb301e214004"],["/categories/三方类库/index.html","39b7c9414b6002fe033c6c11c64c1ca2"],["/categories/函数式编程/index.html","620c903aad8c12eec51be8b690813ebe"],["/categories/子类化样式/index.html","97c7abff978f3626c47f56c2013f468b"],["/categories/架构设计/index.html","2e9a3c8e09a28fc2c90034a2b4e45b38"],["/categories/用户体验/index.html","3b57ea20a42c8094b3211b611d9fb969"],["/categories/设计模式/index.html","2d9ce843ece7ee669f3ce8db6f518945"],["/categories/设计模式/page/2/index.html","18ff62632c10459408376245e3163906"],["/categories/设计模式/page/3/index.html","cb1faf35f19c695ce4fceb3f402a8bb0"],["/css/main.css","d187ae3af0ce00cb917aa225a0641398"],["/hello-world/index.html","b53a651e5bdb2338f3b08959d5d84bad"],["/iOS VIPER架构深入实践/index.html","449000e47d648d11c5189b9f59e94819"],["/iOS 自定义视图，输入表单和错误提示/index.html","5544f9406ff8a477bef32a42ea5e1a56"],["/iOS如何使用iCloud文档？/index.html","7a3369b535377eb83a51a5d4db90a71a"],["/iOS子类化样式/index.html","1fee3b3eb29e08b91d7ff8d568141d64"],["/iOS自动化布局编程/index.html","2368d4d28cdf94a8d7279e4c170de1cc"],["/iOS自定义转场(By Swift)/index.html","9077775113567e6a82c31033d92b70d1"],["/iOS项目架构：使用VIPER/index.html","b6d4e0c1ad8f010a1b31efbe83659ed7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8247b3f2a6ba1c8bcfd5e21f0cf1d79f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","70543ef28cf2821641d4cd238c674a2c"],["/page/11/index.html","73f6df8653b9eb48fcd1806322e63c5a"],["/page/12/index.html","9bedc638d30b5527d729b37b2f06d178"],["/page/2/index.html","83b2da1e474b6d91ef4e00af671496dc"],["/page/3/index.html","566b49505626323f74166755d459a694"],["/page/4/index.html","9050d277e3e243f336c617f3cc48ac58"],["/page/5/index.html","6a9756db3d71b4304925f5eff48705bc"],["/page/6/index.html","ba3ab4fcb32f9d2ba7085b83f4ef88b4"],["/page/7/index.html","050e0ee4658cbddebe6a8ec54baa4041"],["/page/8/index.html","8283e19c63ff41e22c7fb0e124383ac2"],["/page/9/index.html","f0f42c7388a72bd2d2eb02383eab7442"],["/schedule/index.html","1e50a2041aed6a08d017aae3546139bd"],["/sw-register.js","35835b2050cbc74816f71d3fb72f430f"],["/tags/Advanced-Classes/index.html","9d76bdeaa8921fbe7d425347a04327f0"],["/tags/Advanced-Swift/index.html","eb14d5d30feb0f89bfc03cf4edcc7cea"],["/tags/Advanced-Swift/page/2/index.html","04cb4f758813c031478962f3dcd97caa"],["/tags/App-Architecture/index.html","72bc6f7965b36e1de54a753c91f4bd97"],["/tags/Arrays-Dictionaries-Sets/index.html","39d7dc36ede114ead4c2a91c7e5d07f7"],["/tags/Build-in-Collections/index.html","63255a35be043d2acb2fc26b6bb6946b"],["/tags/Building-Your-Own-Types/index.html","006738d81b3cc6cd14872b2de467e51a"],["/tags/Classes/index.html","603464a11ef4f03ba844a417b2df8297"],["/tags/Codable-protocol/index.html","bb043a0f4a2558610b8ff6c337cf77dd"],["/tags/Collection-Iteration-with-Closures/index.html","0977d84886608bed7739d989f67ad4c6"],["/tags/Collection-Protocols/index.html","d8ea07a511ad38ea44d24e888f0fb341"],["/tags/Collection-Types/index.html","6fe06bb55bdbb840570ee4f7528ae35f"],["/tags/Collection/index.html","c2fd7923dec4dd3b88948e96ab7982f1"],["/tags/Collections/index.html","a7510d50bb3c0cb2e1e228bfcb5c793a"],["/tags/Combine-framework/index.html","08dd944aea852eb752997548ece4d083"],["/tags/Combine/index.html","4947b0ea15c33a7d187653e34a7105a5"],["/tags/Dependency-Injection/index.html","1407097bec65a8d67a6b6c00908726e8"],["/tags/Encoding-and-Decoding/index.html","1abd3a1f5831e1ec8f2a058da009d4e7"],["/tags/Enums/index.html","7dfe87ecc475700ac27820f29f15c9be"],["/tags/Error-Handling/index.html","66e1cf13962c2a45f9aba15f2260eaab"],["/tags/Functions/index.html","4be27af780ae26478213dfd55887f89d"],["/tags/Generics/index.html","306c7716d85b154a63a9c3566fd1f764"],["/tags/Grand-Central-Dispatch/index.html","be8f960c26c5ea70b81cab3234ce674e"],["/tags/Interoperability/index.html","cf73fb41de6e02e1af80eb8ac8c7aa85"],["/tags/Introduction/index.html","09f88abf068ea866944ca5fc7339f0a2"],["/tags/Methods/index.html","38036c341c03192b2da1ec01c71f7839"],["/tags/Modules-And-Hooks/index.html","fe0ea1c4979982425939b5728e4d6b0c"],["/tags/Optionals/index.html","9fe64e1a9964a35b6bdca804adf92068"],["/tags/Promises/index.html","bab06b796e354ed1f3211ed32e3643ed"],["/tags/Properties/index.html","660298aa5f9855f94ffc806c0fdf19ea"],["/tags/Protocols/index.html","e48bc18dd30f7db628e5953f973f3d26"],["/tags/Result-Type/index.html","905af0a0ef2cecdf58e1dbca68272b1e"],["/tags/Server/index.html","95e836c775b122ff6da12a39cab4dbc1"],["/tags/Strings/index.html","336872d4c6226dad3895f2ed7a1d1cf9"],["/tags/Structs-and-Classes/index.html","2bd642432f3ba05ff8cccdc7c6e951f0"],["/tags/Structures/index.html","437448f7f07274dcb3ebb54a7fd1590f"],["/tags/Swift-5-0/index.html","aeae02f770a9e68e64c79ae41b91373a"],["/tags/Swift-5-0/page/2/index.html","67604b3162bc49e4e7b51a51ac54246a"],["/tags/Swift-5-0/page/3/index.html","3715e52a81735264aae0b918ef3fb795"],["/tags/Swift-Apprentice/index.html","aabd8033e3e31d59ab6f8ab61761df72"],["/tags/Swift-Apprentice/page/2/index.html","2dcde29d909752365372b49e080dabd6"],["/tags/Swift-Package-Manager/index.html","3d793de935f4cae6c3c95e627922c672"],["/tags/Swift/index.html","29145a8f101db4204b27f3491fe37e14"],["/tags/Swift/page/10/index.html","f8aa87bed2f319bc0a4d31ce0877a0d4"],["/tags/Swift/page/11/index.html","932cf9320941ba7fcf03e551740dc89f"],["/tags/Swift/page/2/index.html","334784393d4fc4989f5e7f6c3fa3df23"],["/tags/Swift/page/3/index.html","e0e01348aef0011d32023a4daa5aaf58"],["/tags/Swift/page/4/index.html","fc3c318d770719bcb8789bc4d8e5e564"],["/tags/Swift/page/5/index.html","6cbf4e3640a1d15e9761dc4f42cc68d2"],["/tags/Swift/page/6/index.html","5ec6a016f4b4d7c56e67450cf1d08082"],["/tags/Swift/page/7/index.html","368bbde1f4f7f2079096a2e4efc54d26"],["/tags/Swift/page/8/index.html","9492d9a9a51dabd0f673bbcd4bd3beea"],["/tags/Swift/page/9/index.html","ff29b918bf425eab61fcaeaaffd1e12a"],["/tags/SwiftUI/index.html","34ba046fafac56c50e24087a9c56c1a0"],["/tags/UICollectionView/index.html","e75f56569c6718d06deabbeeeb6e1628"],["/tags/UIColor/index.html","490105c780e6152f6058a862f269710a"],["/tags/UIImagePickerController/index.html","191d54efdf51c31207444faa2786471b"],["/tags/UIKit/index.html","603cdd5382e80ddb04b1242c9759a72b"],["/tags/UIKit/page/2/index.html","c821656d70295eba893a9cbc9dff3ba7"],["/tags/UIKit/page/3/index.html","b3ae72fac589c96db564be5c09ca1068"],["/tags/UIKit/page/4/index.html","a4fa41b0efd471c4ac15d0cc260cb2f2"],["/tags/UIKit/page/5/index.html","726d53d841a5993bf4a1396a3afcf0c0"],["/tags/UITableView/index.html","f51d700da1e27f47b35c3d229211f3cd"],["/tags/Ubuntu/index.html","edde589ac66f5950b80c84a50a3bd8ca"],["/tags/Uniquely-identifying-views/index.html","05ec5a043aa00bddf3106dda735cd364"],["/tags/VIPER/index.html","d8ee0b20dc8f0a9ca1ccad5fc909b81b"],["/tags/VMware/index.html","7004d774e833d012cc8853c0b6055404"],["/tags/Xcode/index.html","cb3ec5e3f9f212b05e73bb61db1e1447"],["/tags/appleOS-Networking/index.html","1aa1b829822217408d1cc41c0f8e6903"],["/tags/enum/index.html","087f4e5c9bea0bac9aec93024ab44617"],["/tags/iCloud/index.html","437a8577ee3a523e05a1cd7e0a56c858"],["/tags/iOS/index.html","92d153e9d11ef63156623640085ebc08"],["/tags/iOS/page/10/index.html","58cabf9892dcfadb4980f99c527bf73e"],["/tags/iOS/page/11/index.html","0e40b316ea524e9185b565e064ffc7cb"],["/tags/iOS/page/2/index.html","ef700b830fd6444e44dd5a46e7bc7250"],["/tags/iOS/page/3/index.html","244c6a02117e760b635529f99c006d54"],["/tags/iOS/page/4/index.html","8d9706ec3ae19606fa779c7371863d2d"],["/tags/iOS/page/5/index.html","6362c94235933e47df215d681208f62c"],["/tags/iOS/page/6/index.html","0d5c4ccd7310660df60c49e44853d6e9"],["/tags/iOS/page/7/index.html","e60a120c9c6e893695e2d5aa7e2b30c1"],["/tags/iOS/page/8/index.html","e2caced507fc92fd7b3113fded3b5f99"],["/tags/iOS/page/9/index.html","78d13e492b6f43322984e9f1709e9dbb"],["/tags/iOS面试题/index.html","25177f363066339e75f6059a4f340fd6"],["/tags/index.html","81ee7c145a324700582303526ddf55c9"],["/tags/non-optional/index.html","2934d1d7e87857ee263d8223a3e62556"],["/tags/random/index.html","32da62659c152a1142f4fc02b6c33bd1"],["/tags/transition/index.html","79ddfa2a51696a9cbf94e10f4f922dad"],["/tags/三方类库/index.html","63316d09c3c2e9a87d8aa258c05790de"],["/tags/依赖注入设计模式/index.html","d90aad2d54994cabeceea54c77fb5438"],["/tags/函数式编程/index.html","668e0ef44a8c5764239d5d87d1fd5cc2"],["/tags/初始化模式/index.html","c33ca305039a274c68445a83d142bae9"],["/tags/单例模式/index.html","602a03f7d207ec612eaccb00316a17dd"],["/tags/原型设计模式/index.html","cbc8f0a72e208b3af52ff7e52b700c33"],["/tags/命令设计模式/index.html","e5b5f55cc5a0957910fad4c7e1eb2938"],["/tags/基本控制流/index.html","d9d8e174a91351b714c64fc229279919"],["/tags/外观设计模式/index.html","b0709347dac7a7b4b2fb1367041f1224"],["/tags/委托设计模式/index.html","1ea5a52ecc1d3b5c890dd30e30f0ba4a"],["/tags/子类化样式/index.html","694ed77315c9cd78a661d6a3d7fd03c6"],["/tags/对象池设计模式/index.html","a095d5889e2ef5b08a566687471f1288"],["/tags/工厂方法设计模式/index.html","926f72cc52208fc0c5bf53e4d4e0951b"],["/tags/工厂模式/index.html","871b542809296406d12dfbacf5046f1f"],["/tags/工厂设计模式/index.html","70afaaac3005c0c6b87ad101d72bee9a"],["/tags/懒加载模式/index.html","e3391a2988d8b522caf10af9c90c44ea"],["/tags/抽象工厂设计模式/index.html","2acd470f744336f9daa697395c786fed"],["/tags/构造函数/index.html","c51116da50a2256e39199617f8c66a2c"],["/tags/架构设计/index.html","a2828e452460c943754916e6235936b0"],["/tags/生成器模式/index.html","0ced46fd3ae2f7b561c01d1c427a3fe5"],["/tags/用户体验/index.html","750d6df4d85b9448b5e70dd8cfac996c"],["/tags/类型与操作/index.html","e992fdfbfa4a59716699c49c08d20f70"],["/tags/自动化布局/index.html","b4b26aaa58672ae1ab28a11c48091b4a"],["/tags/自定义UIView/index.html","3f480c3d4c5cdd712e795c78612ba2bd"],["/tags/自定义转场/index.html","a07d0c1b9a38754a7be7d8f5f94420ba"],["/tags/自适应布局/index.html","a49d2f2e991b2e8f5f613217f05cbdcb"],["/tags/表达式、变量和常量/index.html","cc6f7f35ec45e4f0bce1193b01be38a6"],["/tags/设计模式/index.html","bf094e0cb8e39708283cf2a24fe47c32"],["/tags/设计模式/page/2/index.html","941bb0168c36e72ccf1bc78561c509bd"],["/tags/设计模式/page/3/index.html","5a93d30fe90fda063b117b95d624bb02"],["/tags/迭代器设计模式/index.html","5537f29f15fc2b6b796b50fc62c5b5d1"],["/tags/适配器设计模式/index.html","dc01109b5d63da25b84ae4c53cc1d7bc"],["/tags/静态工厂方法/index.html","e02593f37ae4ca4d2c14a87ebb500b05"],["/tags/高级控制流/index.html","fa99acbcc06e82832c30a5f0aec20e9e"],["/为iOS应用构建输入表单/index.html","7f90f36fccd0f861d37c9c4c32efbd85"],["/产品开发的幕后花絮/index.html","132f8f7c14af085fd3ef77e82f5759db"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","358c41bbe012587be82dae82fd18be17"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","58e5cdddbcdceaa0ec02e61c84201fec"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8973f6e372a54aa576e547799d4635db"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4e3fad9d6da9051f016083604a6659e6"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4e1f0f21719f41fc9f0685749b569e7a"],["/在Swift中创建自定义集合/index.html","3b4a0f4d6f7dc8d4b18098314445a7c0"],["/在Swift中处理非可选选项/index.html","26b65b2a20fb7e5dfe6e1c09438f8fa6"],["/在Swift中生成随机数/index.html","d7f3b84522375c6ff637c26e68048a93"],["/在Swift中重构单例模式用法/index.html","81fe723b4aff004d799267c2415bd2cb"],["/如何为VIPER编写服务？/index.html","fb088fced66d5135a03d3d5b7dcf4467"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","1a9eb8672bf9f1002bc40c4377cfdf95"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","679bdfad70651c6a38c56480a0c62909"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7d18b88d05687225158403457caf193e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","fbad4a7de990042e662d9a51996edce8"],["/掌握VIPER架构/index.html","3eae392a613da6fcd200e96adc2b6839"],["/揭秘 WordPress Hook 系统/index.html","4faef7d8495a9bba46537e8e35943408"],["/比较工厂设计模式/index.html","d36c355f6fe8430f8e291a9b2f180a50"],["/深入了解Swift中的Grand Central Dispatch/index.html","246b8b495067c209f0db10b71f33bc95"],["/深入研究Swift框架/index.html","2ac165de9f8a084f5d180820e6200fe1"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7f4e191b8213d87de5e746fde9cb7d78"],["/选择Swift而不是Objective-C的5个理由/index.html","4d4fcc518d65b1a66c1edf3d4dec136d"]];
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
