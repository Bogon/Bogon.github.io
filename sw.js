/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","9c2fc3ff954d8c789ab9f262e0310347"],["/Advanced Swift系列(三):  Optionals/index.html","ba55a8b8b84b727a4c59e35ed08c44e8"],["/Advanced Swift系列(二): Build-in Collections/index.html","6a4e3df3e60852e15b4bbf264f6ed566"],["/Advanced Swift系列(五): Structs and Classes/index.html","972597c705c13fd79c0a23d4978eae3c"],["/Advanced Swift系列(六):  Enums/index.html","e424100a39dd94c0a8222e79a77469c0"],["/Advanced Swift系列(四):  Functions/index.html","6f0d32e8a78a746ecef236226361ec2d"],["/Functional Swift 初探/index.html","b2d3f5d0165d0bf1df7d8de0a2581620"],["/NSCODER和SWIFT初始化/index.html","d298283f424ff6816a977337c83cc375"],["/Swift 5使用UIImagePickerController拾取图像/index.html","699436e69b6bd68dd084ebb1ae13fb6a"],["/Swift CompactMap vs flatMap：差异说明/index.html","c2d0c0e9b2554fc827124a240e42563d"],["/Swift Grand Central Dispatch 深入实践/index.html","2611507e76855274f5fedbae7f4fac1c"],["/Swift Lazy属性初始化/index.html","39106ff78917682d5f4fa1fd82923265"],["/Swift Promises 初体验/index.html","0513414e818c52af8216e838a44fe2ce"],["/Swift Promises 探究/index.html","627df5e6c8072c2b1ce08633db0a3ff8"],["/Swift UICollectionView使用指南/index.html","0792033ad2da03bd5043e562fe0ae40f"],["/Swift URLSession 和 Combine framework/index.html","13960fdbfc2d272e83023afb8ce61825"],["/Swift 唯一识别的视图/index.html","7ccbe6c95746ee14087492f4aeaf4752"],["/Swift 如何学习现代UIKit？/index.html","411068cb4198ce8efc20a24105a7175e"],["/Swift 用 compactMap 替换 flatMap/index.html","dae86184ce25fa3b87ea42f92cebcfce"],["/Swift 选择和播放视频/index.html","6900ea1547a4000947ca39b0c104eff1"],["/Swift中UIColor最佳实践/index.html","34eb284e6c56f8a5fed3fafbc38d6058"],["/Swift中快速简单的工厂设计模式/index.html","02b632027f18d01e89e68cdacef99297"],["/Swift中构造函数与静态工厂方法的比较/index.html","118a465a67c370393013af6f47c20a46"],["/Swift中的UITableView教程/index.html","db1d0034f5cfbf47405d569a38088164"],["/Swift中的懒加载模式/index.html","e5bb21a44f8c23277e10df375041a0da"],["/Swift中的模块和挂钩/index.html","3a0c88f3555c7c0c24cbe4f1a968577d"],["/Swift使用布局锚点添加约束/index.html","0d107affbee79ecafe4d7e858da445eb"],["/Swift依赖注入设计模式/index.html","1ce9aa73f4f5483e22402a7ea386386d"],["/Swift关于Dependency Injection (DI)/index.html","3c9f0c4fa4b6b843192dcb11eed28a6d"],["/Swift初始化模式/index.html","3a8a9ea88110309d80d2cbc4989dde2b"],["/Swift单例模式/index.html","893dd7a8a316e7641e5fd399de93a9e9"],["/Swift原型设计模式/index.html","c45b572eaff2b886fb143558d5e0c37d"],["/Swift命令设计模式/index.html","3f808a742aad51ba93edda97fb581574"],["/Swift外观设计模式/index.html","52e84a4fb1a4f9db5c02a5fa33ad737f"],["/Swift委托设计模式/index.html","27ab9d0ab09ec4423fc2f58b5b07e528"],["/Swift对象池设计模式/index.html","24152200a93a7914b1811baa4a6cbf58"],["/Swift工厂方法设计模式/index.html","9f84563163dc8f7aca1ac16e8a861f9f"],["/Swift带闭包的懒惰初始化/index.html","f9cf89019f69f83449656ee805e6fcbc"],["/Swift抽象工厂设计模式/index.html","32fffe09726d25003311fe8f094312d6"],["/Swift掌握iOS自动布局锚点/index.html","9d5579eca73fd5ca5c067572321c63b8"],["/Swift支持旋转的自适应单元格/index.html","9810a83ce8aa6eb2495f77a09be85e39"],["/Swift枚举值/index.html","4d9957d15df3092604c4b48b0c5c23d6"],["/Swift生成器模式/index.html","6b07ef72458322ae60cee57e130b409b"],["/Swift结合Xib文件自定义UIView/index.html","2b9821e457c05d340e9be330c03484a6"],["/Swift编写的20个iOS库(一)/index.html","4a5bbe46dea5cf86aec7868f912076e5"],["/Swift迭代器设计模式/index.html","c4e438d8e9383f3dc2b007f6e05ba9fe"],["/Swift适配器设计模式/index.html","eb092b15716b180b8394dd7b630a052e"],["/Swift静态工厂设计模式/index.html","c4b0c365c5d70ee183f6f8af4fc4e817"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","0e756751c238ad7b11326f7e773c30dd"],["/UICollectionView data source and delegates/index.html","219e5fb7a8bfee6893ad03ef8a9a555e"],["/UIKit初始化模式/index.html","7dcb899ddb0482cb3b491cd82fe978ba"],["/Ubuntu18.04替换国内源/index.html","e9f0bfedd2ff84051bf51348883b4118"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","471af8d2256c440c85fe32ce09b7ccf2"],["/Xcode扩展/index.html","462eed3bcc74054d68deff30e364af09"],["/about/index.html","0a1f0fe236b4efd8dc9c57bb1487df8f"],["/appleOS的Networking示例/index.html","7af5d6f1e8ba53550cf83848f39e6d18"],["/archives/2020/04/index.html","25ec99ba2cde361a596c136c36e1af6c"],["/archives/2020/04/page/2/index.html","3e35219e85d9eabc54e64b76637f76af"],["/archives/2020/04/page/3/index.html","2f332166db6c4310c825ce36063febb0"],["/archives/2020/04/page/4/index.html","6aaaf88e0de9fc3a310a7ac81bd74022"],["/archives/2020/04/page/5/index.html","9bcb19019293d3e31364bb85fc23a63a"],["/archives/2020/04/page/6/index.html","38ddda556cc6a69878ecac29096d9929"],["/archives/2020/04/page/7/index.html","f2d06fc83d231067dc432eecf9c67e88"],["/archives/2020/04/page/8/index.html","77f3375307abe9c8691cca5c17478943"],["/archives/2020/05/index.html","098441178347159722f83b1598926d75"],["/archives/2020/index.html","966ff9de8152e0d3564ae93aebadc257"],["/archives/2020/page/2/index.html","2c83704908885d2ab8ebe04cac34de3a"],["/archives/2020/page/3/index.html","4ae6ee3096b6b818482d780c8b62a39c"],["/archives/2020/page/4/index.html","9d392154cc83768b45dcb72fd4d381ae"],["/archives/2020/page/5/index.html","bb4d1fa2d9d60dd9891d0f74446ac6dc"],["/archives/2020/page/6/index.html","b3d5e702f35d02ed50e7389c4e88aa9d"],["/archives/2020/page/7/index.html","0c6afcbe0b93b9369b8d6df0c252ef2e"],["/archives/2020/page/8/index.html","7de80c08c08eb366ad7d427de6fb19aa"],["/archives/2020/page/9/index.html","b0f38ee982babd60fcf6ed013581aa70"],["/archives/index.html","b7710c2ebbbe1e82f75b8de2709525aa"],["/archives/page/2/index.html","a33e95ddc4e65b8734c7c3c4530c74f4"],["/archives/page/3/index.html","50427b2f22a2f08153c6a61abbbfea6c"],["/archives/page/4/index.html","b53cf0d9938b36b61b95c6e6b1b20591"],["/archives/page/5/index.html","50e4d4dd1d9b7da8ed3277ee985f82ff"],["/archives/page/6/index.html","547e40323f003605310cfe224ee6130e"],["/archives/page/7/index.html","292ae0a6cd4c02dc5f50107a58b478bb"],["/archives/page/8/index.html","d58d8c67d5ada257eaa36b730a5320ce"],["/archives/page/9/index.html","833774ad711d434eeec77bea4117a6a4"],["/categories/Advanced-Swift/index.html","ebb79845b5a0509954c0e0c4b78b6268"],["/categories/Codable-protocol/index.html","8808ea2221bc78bdd4dcb682276a067f"],["/categories/Combine-framework/index.html","83c38dfa2adfd141c47f4b65a45869b9"],["/categories/Combine/index.html","d9c35e0f8e4db4c6464468bbcc420f8b"],["/categories/Grand-Central-Dispatch/index.html","6898bd1430884d524b3cc54a7d57907b"],["/categories/Hexo/index.html","abdfe1811292dfe2d10e34cf09bed441"],["/categories/Promises/index.html","c42a89f41933a3c65061e6dd1ca80f9d"],["/categories/Result-Type/index.html","61f0405dd87f6603932202d175c94da2"],["/categories/Server/index.html","3dbffcbd6b073c73a304f866c4bbe5b3"],["/categories/Swift/index.html","5f5c15bbe93627492c0b271bff493065"],["/categories/Swift/page/2/index.html","c3d64e9e7d3af81488b5ee50515bc3a0"],["/categories/Swift/page/3/index.html","bd28fb31709341c76321554b09261210"],["/categories/Swift/page/4/index.html","250b5731894d23fc05c99d6a6dcc867b"],["/categories/Swift/page/5/index.html","2abb1338ab3e96ac48ded7c029c0fcc0"],["/categories/Swift/page/6/index.html","4e4f2d724dd7b537c026bef9ee8d0c5f"],["/categories/Swift/page/7/index.html","447b2727ca31687366518d93ff010f13"],["/categories/Swift/page/8/index.html","5b1710135e52b806c192028b057c5f7e"],["/categories/Swift/page/9/index.html","a910b96e252811b0bc0244b8376c6909"],["/categories/Swift5-2/index.html","eced4b390f991434e89750bf3b6ca67f"],["/categories/SwiftUI/index.html","ecdabaca6999f6c40a89167cc391d681"],["/categories/UICollectionView/index.html","45d6604876d238707f7f57c02131e837"],["/categories/UIImagePickerController/index.html","0e92beb754124815ffe81cd763dd5c43"],["/categories/UIKit/index.html","72f8726f6c3db336d552e5f1b4b2488a"],["/categories/UIKit/page/2/index.html","e097f292dcc53f2aa82b4c49704024d4"],["/categories/UIKit/page/3/index.html","f6203dc079bf22391a017e1c13371d7f"],["/categories/UIKit/page/4/index.html","f2d83a7ab82b0126a0f892acf1f34898"],["/categories/UIKit/page/5/index.html","e72eaeb1d857723a7b5cb435001ae5b0"],["/categories/UITableView/index.html","cf53cbd205e7d533890b7c78d7ffa599"],["/categories/Ubuntu18-04/index.html","1e7e52d76a413f75cdbd45d33cf2b4dd"],["/categories/Ubuntu软件源/index.html","6d807b2e8b4a6ee167662b4ee2709d55"],["/categories/Uniquely-identifying-views/index.html","df08c5fd08fe91bd18be45bfdd436db3"],["/categories/VIPER/index.html","7353a561c71d0e5048dd68e3a00abf9e"],["/categories/Vapor4-0/index.html","8be7a81191432d1be17dfc069fc78bb2"],["/categories/Xcode/index.html","29a022fe632737d8e52d30995c45371a"],["/categories/appleOS-Networking/index.html","cb411d93049c6f283c8194c4eeeb35ef"],["/categories/enum/index.html","3f036f42ad5f3831084cfe65c809ea82"],["/categories/iCloud/index.html","a4180e3da13efbaf3431b016bf2f0450"],["/categories/iOS/index.html","baaa5c9286aa1e1f5305daf8358e0790"],["/categories/iOS/page/2/index.html","52b9382b962fde92c929fa17b9309dcc"],["/categories/iOS/page/3/index.html","1cd33849b49a73c5373e03b3f58fe9cc"],["/categories/iOS/page/4/index.html","929f4055963a26376df8a5ecfdc2c628"],["/categories/iOS/page/5/index.html","7388817cd647053beed9d728cd1a1233"],["/categories/iOS/page/6/index.html","6416f7d7765cf280843044718428be9d"],["/categories/iOS/page/7/index.html","990a0a6672716eaa9e6e20625cf5fa5a"],["/categories/iOS/page/8/index.html","4d4379cd0d2c12bfb2afa2d2a2fec4db"],["/categories/iOS/page/9/index.html","4439e815ece6ebc06889826443a643a0"],["/categories/index.html","21235f02eac11533e1bf6f5ad57d3625"],["/categories/random/index.html","f6c5c43a8db74690ce9c2a747aacd4f4"],["/categories/三方类库/index.html","a3cbdeaeba30ea9525a18a99f4f07027"],["/categories/函数式编程/index.html","bd6740d06ee9f2bbaa805b5e9aa17cce"],["/categories/子类化样式/index.html","82da12edcf3dd6666d84a6cad2e3a5bd"],["/categories/架构设计/index.html","a66203d4041cf6ba48ff97a4bf97a2c0"],["/categories/用户体验/index.html","eb01bf01dabb8b5348cce262b5660fc7"],["/categories/设计模式/index.html","a46a0f8266c59f4e6d018afbec41e032"],["/categories/设计模式/page/2/index.html","5e79ccb74ca3913576a4c71d9ec1a012"],["/categories/设计模式/page/3/index.html","d1f2f41d3c10752a4cdbd3f6c28c157b"],["/css/main.css","8fdea6821bfc9e6e7f72d7f5817680c8"],["/hello-world/index.html","41ce5d3201173f190dc6252d824b92e5"],["/iOS VIPER架构深入实践/index.html","c0398a5e98e758997c5b5ab0ff496575"],["/iOS 自定义视图，输入表单和错误提示/index.html","313a5c44c3c94d340b3b7a303efde092"],["/iOS如何使用iCloud文档？/index.html","84de9c15f3a9c242b7f146e8d712c945"],["/iOS子类化样式/index.html","2fb5758fd803b7c960a1b808e9151e71"],["/iOS自动化布局编程/index.html","1141e97d451a610fb5d3db4492c35fe6"],["/iOS自定义转场(By Swift)/index.html","2698e186419c9951800808807dc4e8fc"],["/iOS项目架构：使用VIPER/index.html","dd3a24aa94d651dda5ddc0da39900ed8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9b76a120ae4b8f9da97312402ecd2d16"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0bbedd053eacb573c5c9615ec9d8509c"],["/page/3/index.html","feb8942a9e5c3255073fc304087f5243"],["/page/4/index.html","2841ac96dbc954446f3b7bb12e5cc77c"],["/page/5/index.html","3d1f7b0efd5aac43e2fc605b004f7ee2"],["/page/6/index.html","775b94c930fc7868d13b859d05b5dd30"],["/page/7/index.html","cde14c0a43b93ca3aecb51e44798e94d"],["/page/8/index.html","dac84d2fbda303c677e79d523ca0d32a"],["/page/9/index.html","c4510efc4a52000f6b75082c781f2e96"],["/schedule/index.html","8e99f9799fc0898958a107b272d480cd"],["/sw-register.js","86a9d79af5830a9872eea730316d6397"],["/tags/Advanced-Swift/index.html","57ea0f3adeb3138ac528964987f56949"],["/tags/Build-in-Collections/index.html","46eae2eba4292bb572e9f5e92a7fbb2c"],["/tags/Codable-protocol/index.html","1c34ac345020148ac7cbe86d48067f2c"],["/tags/Collection/index.html","ed0d5e24773852a6de71ebe33b0c6e5f"],["/tags/Collections/index.html","d080225d611f5c1f228281468ee599f0"],["/tags/Combine-framework/index.html","aff1a441cf8344cac62749b5d112a40b"],["/tags/Combine/index.html","f0029a870a5e8acacb2abd481a017ea0"],["/tags/Dependency-Injection/index.html","130b40867934e07fce8211bdeeb70b5a"],["/tags/Enums/index.html","a7bcd6c3bf6247168775de1e2ac4dded"],["/tags/Functions/index.html","5fabb97dbb2b14a5e35686c2526a4f86"],["/tags/Grand-Central-Dispatch/index.html","bf6a6f2d81830133eb4d428b5986d7f3"],["/tags/Modules-And-Hooks/index.html","815f9e9ffc037cdccda899698d9789a1"],["/tags/Optionals/index.html","aeb0302f19089eb526f448fde875c04d"],["/tags/Promises/index.html","ec3490f45ffa5d1172d17f952ec64879"],["/tags/Result-Type/index.html","f5901f7fc801029c1f0259ed16b46a80"],["/tags/Server/index.html","ad9f0ecb0bc5f2a2d530aca64d700323"],["/tags/Structs-and-Classes/index.html","c704452cb533901c6ff0f89e403e9573"],["/tags/Swift-5-0/index.html","c61c41fc98b344b70e527799234c7e30"],["/tags/Swift-Package-Manager/index.html","052d8ef3a4ff11a180c54f0d4200b4c5"],["/tags/Swift/index.html","b64ff36444a0183edde42dd85ea50871"],["/tags/Swift/page/2/index.html","b89a51546feb785afb1b96baba3c604b"],["/tags/Swift/page/3/index.html","930f91319afa9ea509e0650e3893ec9e"],["/tags/Swift/page/4/index.html","247508c548f2bdfd1b447044b612e726"],["/tags/Swift/page/5/index.html","bd8387b808aa9ad3515ed77e9810e810"],["/tags/Swift/page/6/index.html","59d6ee6ead73cee07d5b542c9255a846"],["/tags/Swift/page/7/index.html","6d2bb644f68c55a130fec3f17f5f7d42"],["/tags/Swift/page/8/index.html","dad99003d506187d36f39fbd6488c78f"],["/tags/Swift/page/9/index.html","ad35cf90f4b3cc271258865fa7cf607f"],["/tags/SwiftUI/index.html","2da91f74c1939ea7d5629c9f8c1d9b1e"],["/tags/UICollectionView/index.html","b6cada7efe16ece696318dd01a99be1c"],["/tags/UIColor/index.html","5ebb9027d534665dbd9f80e9f7b1f8c6"],["/tags/UIImagePickerController/index.html","5f4eb13e9207491de475ac51cc4e20bb"],["/tags/UIKit/index.html","4175c97ccd27f01238f0bcc6d217cbfe"],["/tags/UIKit/page/2/index.html","68b698d7b5ede1a7e37441fca582319f"],["/tags/UIKit/page/3/index.html","1f200139024dde2e9fdf4db54eabe9c1"],["/tags/UIKit/page/4/index.html","351ec56ce59a2b7451dbb616a2b0ba1c"],["/tags/UIKit/page/5/index.html","68229ee4b6f258854e2d5a342687a948"],["/tags/UITableView/index.html","75927003f6668f05bbefaaa7454615cf"],["/tags/Ubuntu/index.html","5fbfa940ef695415b323944ef0496571"],["/tags/Uniquely-identifying-views/index.html","c5d540647addb8a5031996ef49d48e98"],["/tags/VIPER/index.html","f5f923d6c8ce8b23a60ac7f91c448d92"],["/tags/VMware/index.html","63b8919756488cc76f1359705bfe89a7"],["/tags/Xcode/index.html","1667a64cc410f88adcef5a346d5f515f"],["/tags/appleOS-Networking/index.html","2bc1e943007227dd449510eed4c856c7"],["/tags/enum/index.html","df501ce6c53b871308e00ff44535fff5"],["/tags/iCloud/index.html","ea0054058bf90b38b6b4b50a0ea062ee"],["/tags/iOS/index.html","721bb74c63cccfcd8302f7942538dbe9"],["/tags/iOS/page/2/index.html","5baabf827c23185a7b1cc0c623dd2062"],["/tags/iOS/page/3/index.html","996f3357a60c46d8cbc61f08334319a5"],["/tags/iOS/page/4/index.html","c9a968e0b70167f43ba8842cd0b2e312"],["/tags/iOS/page/5/index.html","e87d8c21dcc037261aae7d952c1c3507"],["/tags/iOS/page/6/index.html","db82fa19637251bcce32c46cb51d779d"],["/tags/iOS/page/7/index.html","a4de1558e43098229fe9fd520b004654"],["/tags/iOS/page/8/index.html","9f1acc322efa82f284da1f18d08d0a6b"],["/tags/iOS/page/9/index.html","8980cd6d9c60d842929835f5abf92e66"],["/tags/index.html","d20496ca13a71f2ec2ba305fd68dbaf8"],["/tags/non-optional/index.html","828140cc568c64ba36bd6cdd5f743aab"],["/tags/random/index.html","613f67c2ff75cf5f1c6267e38264de7d"],["/tags/transition/index.html","e8064d48c825c1774f70fec3facd4d82"],["/tags/三方类库/index.html","a0df7f08a8cde3d828182e2f83af5094"],["/tags/依赖注入设计模式/index.html","2cf4108d1e82f74adb7e5dd0c5f31dd2"],["/tags/函数式编程/index.html","67fb2fea769aee489bdb588e5c291c0f"],["/tags/初始化模式/index.html","16f0b3c5726bc1c2c855d38e77bec537"],["/tags/单例模式/index.html","9e238ec60048ed7ba1e69408b731d8cd"],["/tags/原型设计模式/index.html","6ca0ec95a3ad9770c57025c879ccb05b"],["/tags/命令设计模式/index.html","7c4e056d514c9426589bdf1e736cfd9b"],["/tags/外观设计模式/index.html","5969b7735e19afc0ee4dd835e86f717a"],["/tags/委托设计模式/index.html","ad248c8ed6081a451a06aace7b6e9ef5"],["/tags/子类化样式/index.html","3f47f24264d8b0cce6ab24fbf07a88ed"],["/tags/对象池设计模式/index.html","5f4b051211f6d16c2af794ce9651c8f2"],["/tags/工厂方法设计模式/index.html","8bc2c681363d355c0d80f42de7309f16"],["/tags/工厂模式/index.html","9c9910b17598ea098f3f41be4ba542e3"],["/tags/工厂设计模式/index.html","90a9fd5b3714c42c23b63116f9f101cd"],["/tags/懒加载模式/index.html","e9f49a5a63223fd7863900797ee521d2"],["/tags/抽象工厂设计模式/index.html","0d33c20cc35a7f83cb17cdbfbd3b258f"],["/tags/构造函数/index.html","21f759b19f6926965d99f170675dbe20"],["/tags/架构设计/index.html","1e0064fe1ed52ad0277381bf29c29a68"],["/tags/生成器模式/index.html","92836a55dbefc4a5cbb76c1bc436c66a"],["/tags/用户体验/index.html","eac251748f00c4feb1dd3cf6d4789829"],["/tags/自动化布局/index.html","e1a4f1a4f03f5b55193cc29354651584"],["/tags/自定义UIView/index.html","32935cc37a2ca22b96fdbf34e1aeb27b"],["/tags/自定义转场/index.html","3641614a5a0d04cb2889fdbc7dd28fc9"],["/tags/自适应布局/index.html","1492aed53e1013502fde3e517d80e037"],["/tags/设计模式/index.html","587f30a06ae0fcc0a948032a9da86554"],["/tags/设计模式/page/2/index.html","5b0177df6254dace30d1932f5a160d76"],["/tags/设计模式/page/3/index.html","fc664a647d18edef70ce7678e91061f7"],["/tags/迭代器设计模式/index.html","add2f44a544aac5c4298d525ffe6c58d"],["/tags/适配器设计模式/index.html","adb1c96a24575e2504b7eea36d2b69a9"],["/tags/静态工厂方法/index.html","80147714645b4d7b867ec13694c3f7ac"],["/为iOS应用构建输入表单/index.html","3951856905de615d23e36cbd82bfffc3"],["/产品开发的幕后花絮/index.html","a062f460c1cd8a2f02668acf4b673738"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","21dae16784ab08fad68f9ef599fa3415"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ea1ff32de9e730da5e0fcea62d3d6c16"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ec00f3f55810f531cf6a9b99fc64c886"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5fd0e85c6ed995fb75411fd307d68500"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","912510572863ede9b249883ccf8105fd"],["/在Swift中创建自定义集合/index.html","c358dcf2e41d8745a7b2e8a64e91cd04"],["/在Swift中处理非可选选项/index.html","a830e88db1f78e712e27bf2717b39569"],["/在Swift中生成随机数/index.html","d273b06229f3eff4b5a7be83f58a25b9"],["/在Swift中重构单例模式用法/index.html","97ac6f644d610ab5a12693c49570e316"],["/如何为VIPER编写服务？/index.html","db420085c2990ff922bfe33698850b3b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5e30b2a46c441c384b48aca91d555f53"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","0fb4e40e2cae7c8804e051f8bac3e8ac"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1bd5d766076dc89469124f8dca7258ee"],["/如何使用VIPER构建SwiftUI Apps？/index.html","08d55cdf5ac3e80478e1898fd0d351ac"],["/掌握VIPER架构/index.html","3e2d904ef906a0fac641eb0e6bdf09ef"],["/揭秘 WordPress Hook 系统/index.html","19926e44d9c9085361fd0ecb8625f147"],["/比较工厂设计模式/index.html","4123ff6c74b3807fc7e4d64278031918"],["/深入了解Swift中的Grand Central Dispatch/index.html","d215ae17f23c0433ee07ce5c1c9c1e7b"],["/深入研究Swift框架/index.html","1a7a445994f78ebde5b4557a6a440158"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b1d97c190e26184c05da254ee963e630"],["/选择Swift而不是Objective-C的5个理由/index.html","5f1a5e4dddc6d08aab927c84417ee13f"]];
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
