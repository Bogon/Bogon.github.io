/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","4442418934918a154c67b6f7617ec5a9"],["/Advanced Swift系列(七): Strings/index.html","8c56aba195af838b4ce688763601075e"],["/Advanced Swift系列(三):  Optionals/index.html","d423ada377fd4564e0a8f252babc8555"],["/Advanced Swift系列(九): Protocols/index.html","6d00711b75da7364bfc5b9c9b4e18909"],["/Advanced Swift系列(二): Build-in Collections/index.html","d0979aa8690fa430e9ddcd79238fad46"],["/Advanced Swift系列(五): Structs and Classes/index.html","a6c64c4db202b3cc13b935abc1cdb4ae"],["/Advanced Swift系列(八): Generics/index.html","f895b476f74962c741960799eaa44665"],["/Advanced Swift系列(六):  Enums/index.html","31feab2f36ab061f9fa214dd410cf9bf"],["/Advanced Swift系列(十): Collection Protocols/index.html","46cdeb09ad42728fea1a2874c68c76f3"],["/Advanced Swift系列(十一): Error Handling/index.html","0c57eb26c644cc783b6d777a08d36e06"],["/Advanced Swift系列(十三): Interoperability/index.html","0f062392f8252a8940abaa3f54710906"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","bf9afec2e49dbcb3c56a4b231d6877bb"],["/Advanced Swift系列(四):  Functions/index.html","0e93b6139f8973380c7eaa05cc495fe5"],["/App Architecture系列(一):  简介/index.html","bf072641edb9ba35ec5b6bb02a46c282"],["/Functional Swift 初探/index.html","2b9ad90610f608b4a1dd112ba802b710"],["/NSCODER和SWIFT初始化/index.html","be1089c76eb249cf42cdad11dbba598e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","fbb5ce48aa0043e12efcac2be1e0f719"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","91d0f12b86ec6f4dc1071a6e4a2ae131"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","45e23e97cc104dc1a4b72c04f7ce32ec"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","0b56da4afaf3c611434518a555f74eb4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c8fa7e7406bc9b35f626f75a16c45f90"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ba1d2c2c2f74bd183c9f9dcb57181798"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","425891ad3604b91841110a809cc4febf"],["/Swift CompactMap vs flatMap：差异说明/index.html","ca1b7d0d91e736ea62fe03c4c50cdc24"],["/Swift Grand Central Dispatch 深入实践/index.html","bdf1d90a3ce253775e0237107d5f54c0"],["/Swift Lazy属性初始化/index.html","b0ff23d29582c946871f0146b465b27c"],["/Swift Promises 初体验/index.html","ea4fa7d7d07f986589d85d707fcaa495"],["/Swift Promises 探究/index.html","a139849a3cf7ba1ff9cd0fba6cc4b5d0"],["/Swift UICollectionView使用指南/index.html","c2c762a977dc1e4d920e5b23d08e545b"],["/Swift URLSession 和 Combine framework/index.html","b6a10df941ee1dab0fbfcdc724d2bca2"],["/Swift 唯一识别的视图/index.html","35017f1825322c990f669688e538376d"],["/Swift 如何学习现代UIKit？/index.html","f656830b889b3c5f7e93c15bad65586d"],["/Swift 用 compactMap 替换 flatMap/index.html","089115dfc2580b01865ad28249e22dfc"],["/Swift 选择和播放视频/index.html","d39174706b741a0dad5b4ed8ef27ee71"],["/Swift中UIColor最佳实践/index.html","df86b198e277b62adca4c5f1c6e694a3"],["/Swift中快速简单的工厂设计模式/index.html","87ccb66df93e9c38025f253f79bf75fb"],["/Swift中构造函数与静态工厂方法的比较/index.html","874fdc0a2e8b4e2d6016746ee5c829a3"],["/Swift中的UITableView教程/index.html","386fbf28ef52bc30385cbec38f137abe"],["/Swift中的懒加载模式/index.html","bd8f7b09f49def7667f22f1d3c9758eb"],["/Swift中的模块和挂钩/index.html","6c08113da0e0d181d19f28ba5f6cfd7f"],["/Swift使用布局锚点添加约束/index.html","169fc20d6419ca8ff7a9028ccf898a42"],["/Swift依赖注入设计模式/index.html","0a7c338812034d43b296664b417c4c32"],["/Swift关于Dependency Injection (DI)/index.html","a27988cea1331d5f663fb4e0fbcf60ad"],["/Swift初始化模式/index.html","f33b9bd699e8ca41d77452f092467e55"],["/Swift单例模式/index.html","5f165c3bb4687875e6146b96d7241581"],["/Swift原型设计模式/index.html","90fe5ac2d1ff32e98a1b53df7d8b1284"],["/Swift命令设计模式/index.html","30802d9a484ebedc120224c637663643"],["/Swift外观设计模式/index.html","6b804e28c12a83f20cd00754dd5cb49b"],["/Swift委托设计模式/index.html","6ff51b8c8cb91c963bb50ebb2df0aa54"],["/Swift对象池设计模式/index.html","a68ef34964dcfc27188676fbd1e9ff6f"],["/Swift工厂方法设计模式/index.html","2764c102db48002997fd4decd3140194"],["/Swift带闭包的懒惰初始化/index.html","ea14a1a459f6327ed8ba4a1c2cd83aef"],["/Swift抽象工厂设计模式/index.html","9af05fa8e89ea29071424cd548392b41"],["/Swift掌握iOS自动布局锚点/index.html","8e14e398df1df4007046298aee57e33b"],["/Swift支持旋转的自适应单元格/index.html","a347c960ee16c154340bc6a368de9f04"],["/Swift枚举值/index.html","7bfe516667cd214814473694616fa717"],["/Swift生成器模式/index.html","0dc25cf62470a71a0a7ab6d422b3889a"],["/Swift结合Xib文件自定义UIView/index.html","b3ad363aaebdd3839f7273eee032fdea"],["/Swift编写的20个iOS库(一)/index.html","27971efb62028f52cd8453293dba04e0"],["/Swift迭代器设计模式/index.html","28edf4b07ad63837522312f87ff029c0"],["/Swift适配器设计模式/index.html","eab0e0329f6cfc464944c5447c671f31"],["/Swift静态工厂设计模式/index.html","2f07aafe4ace16d9a385ce3c43d1c5b2"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","731cd1db3820e97907cc55aa2f72409f"],["/UICollectionView data source and delegates/index.html","755cad86d750fc1bfe26677c59b8de45"],["/UIKit初始化模式/index.html","b6b85688dc2272f80e42d9a0fcf96e12"],["/Ubuntu18.04替换国内源/index.html","1af02dfeef2792e68ce7630e52810e39"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d63d39e4c5e80ce7e4c25f06f3887687"],["/Xcode扩展/index.html","e0a67a1d425cd4f727dc53123a9433c0"],["/about/index.html","026a7e974b09c52a4d5d4bab9ab99193"],["/appleOS的Networking示例/index.html","0c4e0a7f9db01bef08c87e838fba1ea4"],["/archives/2020/04/index.html","642258067a216d8362e15d6a30e778f1"],["/archives/2020/04/page/2/index.html","b8d6b9018bc5cf85c792b94ac260156a"],["/archives/2020/04/page/3/index.html","409935ff224fb3ecf70d32ae25e43995"],["/archives/2020/04/page/4/index.html","7ee5f6448e6d13dfb448ee63d152db3e"],["/archives/2020/04/page/5/index.html","cc2ac075f840770fe04a961ecea21230"],["/archives/2020/04/page/6/index.html","5d4d5c851b91ca52e03801606dd882a7"],["/archives/2020/04/page/7/index.html","df6c6eee7f40e3b83fb2fb968be29139"],["/archives/2020/04/page/8/index.html","cb8575352974a55bc2963e11b778366d"],["/archives/2020/05/index.html","cf2deff655d52e717d5d87d98d938c1d"],["/archives/2020/05/page/2/index.html","b4267f6ee3ac38fd52603a2c50ad9013"],["/archives/2020/05/page/3/index.html","56123cdf699d0e0b2c6728c455383858"],["/archives/2020/index.html","1abb0961efd96d81408bcd7c12755e00"],["/archives/2020/page/10/index.html","c73aaad7cf20a19cb783db821af4af78"],["/archives/2020/page/2/index.html","d9038f78deb543e12e24d644b5ea8f78"],["/archives/2020/page/3/index.html","cdcee9633d303f5d19200779e3fba58f"],["/archives/2020/page/4/index.html","8e98640130262c4954962e7df1873cdf"],["/archives/2020/page/5/index.html","bc9ac2802656b44ae627787cfa9b4424"],["/archives/2020/page/6/index.html","aa5fc655bfeef4aa164f468616d81e31"],["/archives/2020/page/7/index.html","8c430d30e0387f2339a4ef82f2681f20"],["/archives/2020/page/8/index.html","e902bde2bcb674d33d8cef3d8c8501ff"],["/archives/2020/page/9/index.html","eae785958886e32faae03306e8114f41"],["/archives/index.html","12243ade2a65ae50cad96470d0e3690d"],["/archives/page/10/index.html","9c1869a552f806b1f013b65b9f7961b7"],["/archives/page/2/index.html","65eb62cbbe67ba1e5c00a4f3239c0c9b"],["/archives/page/3/index.html","fe48c1b9d8548ffc06a86a7e8cc7586b"],["/archives/page/4/index.html","970c4354c0e8e715e7a6adc6f38db277"],["/archives/page/5/index.html","64ee958e903397529b032e5c777278cf"],["/archives/page/6/index.html","4bc72d6d8834e42d53a5f1d279358d7b"],["/archives/page/7/index.html","6c6903fbf5268b3b91b7ed805faa53df"],["/archives/page/8/index.html","8a34f96cf3b027a82189ccf8814f9600"],["/archives/page/9/index.html","3e13b1cf184c78ee2981ac9721649633"],["/categories/Advanced-Swift/index.html","6293b467759563f6b5b8eaff3375dffd"],["/categories/Advanced-Swift/page/2/index.html","164d367e2698ba7f39d8200d25fc237c"],["/categories/App-Architecture/index.html","38ceb2c1ba2dd023d323fe8ccbcf0955"],["/categories/Codable-protocol/index.html","decb49914e785d95c39aa3f24e62ed3a"],["/categories/Combine-framework/index.html","411401ab4675ef05a5c885f0fecba141"],["/categories/Combine/index.html","2d078694ee91de777ace16dcd3b24f37"],["/categories/Grand-Central-Dispatch/index.html","89331e4908e59803be4cee68d4e3739b"],["/categories/Hexo/index.html","b2a57d1c294d6e5ca8180df9937c4a13"],["/categories/Promises/index.html","e261a2b6f2ecf649b330f8caab000a58"],["/categories/Result-Type/index.html","f1573b74a06f74624e62a694710ce8b4"],["/categories/Server/index.html","2706e59100c3448cf1d2e3a2e621cf58"],["/categories/Swift-Apprentice/index.html","ef02f8065fae60dcdda91e93877099b9"],["/categories/Swift/index.html","0b989d05dd68fda125776ba555ba60fc"],["/categories/Swift/page/10/index.html","1293714078178dbcf1a61db3064dd300"],["/categories/Swift/page/2/index.html","9a74c4eafbd2237b600ceff5c33749d3"],["/categories/Swift/page/3/index.html","8ce1781c59d63ed62b120c57ec0fabb5"],["/categories/Swift/page/4/index.html","ae0cb277e2e50229f4d895b6c6dbbe8c"],["/categories/Swift/page/5/index.html","076e7baeccfa4f0d033463810bb48d57"],["/categories/Swift/page/6/index.html","41059fd4df975de0d38eb33d28a2fc34"],["/categories/Swift/page/7/index.html","3bbb33fe4ed868715231529778a26450"],["/categories/Swift/page/8/index.html","de092879896b8714a20a003efe53669a"],["/categories/Swift/page/9/index.html","0ce427b6c881abddd5a0034ee6f59525"],["/categories/Swift5-2/index.html","13d0830256a0fe9dda4b4947b5c95e47"],["/categories/SwiftUI/index.html","b59331e75a3a4d9c3dc83f7245d3213e"],["/categories/UICollectionView/index.html","86ca1199245b9480ca1f83cb6fcf7759"],["/categories/UIImagePickerController/index.html","caef8bb61874dd409e9a95bfc85de232"],["/categories/UIKit/index.html","a6d9749964f4462e38c39ae8fa36f647"],["/categories/UIKit/page/2/index.html","cfc9fa5f3decf238e970ba6cf28ae886"],["/categories/UIKit/page/3/index.html","521eae2542365ae6e768837f9adb366f"],["/categories/UIKit/page/4/index.html","2c280eca2864df1c289fbd3952b6ac01"],["/categories/UIKit/page/5/index.html","3bc28bffe3d6f75d977793bab17c83a6"],["/categories/UITableView/index.html","fde6118ab664b9319c5b18fc13abed05"],["/categories/Ubuntu18-04/index.html","fcb6d961ecd45d34f336f2aa658b9d64"],["/categories/Ubuntu软件源/index.html","14d1923c11a31398f92a52bf91e6f2a9"],["/categories/Uniquely-identifying-views/index.html","dc1aee495836059319d7b5a70280f741"],["/categories/VIPER/index.html","48fcd9a3bfce2254e6e7e40553161516"],["/categories/Vapor4-0/index.html","66893b7434f06979c796b4847572b34e"],["/categories/Xcode/index.html","6a45ba7fc4d5d217cb05057bd1047ee7"],["/categories/appleOS-Networking/index.html","45b14e44ae0b8cf884d6747b2df31769"],["/categories/enum/index.html","087d035b312065a552be41d206177134"],["/categories/iCloud/index.html","31686597ea4754086b1687ebee5ad7af"],["/categories/iOS/index.html","cc191311f1eb7f5defad70d5a9ace484"],["/categories/iOS/page/10/index.html","ff02275c63646cca550ba7bede7571ff"],["/categories/iOS/page/2/index.html","62b267fff88d327fbc8ea6b4f6e853d6"],["/categories/iOS/page/3/index.html","327a8d31709b3a7199098de42bc9fd67"],["/categories/iOS/page/4/index.html","f84042aa3604e768e3f8fc0bbb6faca4"],["/categories/iOS/page/5/index.html","de3471dc3749cc120ac96442152abae6"],["/categories/iOS/page/6/index.html","a5dfb285334c1e673951b27940dfbd2f"],["/categories/iOS/page/7/index.html","ff56705aaf1c49271bb323aeb425b618"],["/categories/iOS/page/8/index.html","a6b2ad9635997554e4c5877756ec6ea4"],["/categories/iOS/page/9/index.html","21430f38b615c9cb3d620e65cec92a61"],["/categories/index.html","e7142509334ed2c54703d845be391550"],["/categories/random/index.html","a7457d159ea7819fd217e76f1f3e2c75"],["/categories/三方类库/index.html","a6718702edee26841dea0564a6810dc1"],["/categories/函数式编程/index.html","4c70768b7b3802aaa9f5b85176e4a3b1"],["/categories/子类化样式/index.html","a5bca809e26baee89c3b647bbbb309dc"],["/categories/架构设计/index.html","2a120341d6c41f478ba572173d4b617f"],["/categories/用户体验/index.html","1e5402b6fbac03147a81d7f2aa75134b"],["/categories/设计模式/index.html","52a7c1bbd0ca2383c3a7292de0be36db"],["/categories/设计模式/page/2/index.html","39cbab6e071f12382d30ab7a28849627"],["/categories/设计模式/page/3/index.html","94127cd3d39d4e42e49175b10b16d26b"],["/css/main.css","c55634c3017389b6a637635c1f69037e"],["/hello-world/index.html","9ddb3f0c57005e17e169cb11dbd5e8af"],["/iOS VIPER架构深入实践/index.html","a5270401d9d9f1b04543458427728e54"],["/iOS 自定义视图，输入表单和错误提示/index.html","a968df90b2abea3f305e851540117431"],["/iOS如何使用iCloud文档？/index.html","878ce020f8d2d90db01c31344901c7f5"],["/iOS子类化样式/index.html","6212e8848a307710830c7432da12fa0f"],["/iOS自动化布局编程/index.html","f555c9e57c927786e4d14b4f823dd270"],["/iOS自定义转场(By Swift)/index.html","c27c8304070b93566e197918336c7cbd"],["/iOS项目架构：使用VIPER/index.html","779e432b4f5e1d5ea3d5e133c83729d7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b4d8d1360a969f80188fc786588ac4e5"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","6765574aaf5501cf070105c1d18f9d39"],["/page/2/index.html","dcc81771abeb1accc887aee5cc570df6"],["/page/3/index.html","47ffb0312b0b436da4b166bab497afb3"],["/page/4/index.html","5dd3b7fca70c2609c4bb827b206368ba"],["/page/5/index.html","5c5f0c5b49d886b45eaad91287cd993a"],["/page/6/index.html","63892bc0f1ba499a6b1e8f26ea68fd4c"],["/page/7/index.html","793fd26ee17a444ff1565da3005ee4dd"],["/page/8/index.html","bd50e317010ecb4e107ab540159a00a9"],["/page/9/index.html","c953086786826542fe00156a968e665f"],["/schedule/index.html","f47a0d45b621b278d9942acaa147aeaf"],["/sw-register.js","5ea5bab818eb139fe17004c877d8716e"],["/tags/Advanced-Swift/index.html","046b9291cd5ea4f353a8536cc9745ee0"],["/tags/Advanced-Swift/page/2/index.html","b18bb077874de045390ee98ae90fedbc"],["/tags/App-Architecture/index.html","cdf860d58f54c8013a49923e34f29d7e"],["/tags/Build-in-Collections/index.html","099c23e6992c9b3745603a5530e4e412"],["/tags/Codable-protocol/index.html","026669734812726b9169cc7fb1b2f070"],["/tags/Collection-Protocols/index.html","f837fd5635ecb904ebd3e058051677d9"],["/tags/Collection/index.html","d4141a3b4a8c20fb245d45901b3d0e67"],["/tags/Collections/index.html","4b255562f80d4ac8c11182efd95c219b"],["/tags/Combine-framework/index.html","abf2444d61d5264dbb4d5d7a030db8b6"],["/tags/Combine/index.html","3e7838a6f1bc0ae50d5a7ec282945939"],["/tags/Dependency-Injection/index.html","1a94566a6404be154600023b5d5e37e0"],["/tags/Encoding-and-Decoding/index.html","ad9b4901941386705aad14d95cd72f3c"],["/tags/Enums/index.html","cf4d6a7aaba137c396ac6dcbd4c33a1a"],["/tags/Error-Handling/index.html","4efbdf640cad376a1d87696f639ca71e"],["/tags/Functions/index.html","8fd31f0191fe37cfb9701bc9ab0f951c"],["/tags/Generics/index.html","e2cdff306fdef9a9fcd29880ab934f14"],["/tags/Grand-Central-Dispatch/index.html","68700eece4c1d369cc9cec9d2ebf2dfa"],["/tags/Interoperability/index.html","7fb266d65f0c239518b4ec6e9f59a3ae"],["/tags/Introduction/index.html","059f1d65c14470e1fc8cdd847349ff0d"],["/tags/Modules-And-Hooks/index.html","24474b80f337e13e8ac1ac1fcf479b99"],["/tags/Optionals/index.html","911c63010be49f5ec6dbfe721178321e"],["/tags/Promises/index.html","94da46245e6d1d8a5ea6673a73c7f225"],["/tags/Protocols/index.html","f4c865e3260a18087baa7aae07383c20"],["/tags/Result-Type/index.html","3f642304a5483f977118b9423521abb2"],["/tags/Server/index.html","479faa79e06f0ee4c5df9a3eeff948dc"],["/tags/Strings/index.html","1f924364b1868554d4dd3cb5df166883"],["/tags/Structs-and-Classes/index.html","557cdd134921ff536555453aa126d296"],["/tags/Swift-5-0/index.html","3b438a52f53c003b406c6cbd8cbfb34d"],["/tags/Swift-5-0/page/2/index.html","5f3f38ba4aaeb07e62220f5a68827576"],["/tags/Swift-Apprentice/index.html","559c56a79ece339d46e5205a5186573e"],["/tags/Swift-Package-Manager/index.html","db9c308e631ff06d0ec9609356ebc91b"],["/tags/Swift/index.html","2e007bc4574f6dc041c04f22481a818d"],["/tags/Swift/page/10/index.html","1f397e69f09a5085bd5f6c2edce62e96"],["/tags/Swift/page/2/index.html","568ed89d1326ed91542dea784aaa6684"],["/tags/Swift/page/3/index.html","98582a5f998676f0c95506f19ae115a3"],["/tags/Swift/page/4/index.html","5ac3735efe01d60b79dd7b04a7946fdd"],["/tags/Swift/page/5/index.html","b19e9259bbaac37bd2873fc09cf23cad"],["/tags/Swift/page/6/index.html","83a7ec603f70b5d51f94bc8ce491c98c"],["/tags/Swift/page/7/index.html","5c70b22277dc57a3d50493019270ad3e"],["/tags/Swift/page/8/index.html","1e4f6d6bf29a3c33b332075c3c8276e6"],["/tags/Swift/page/9/index.html","f92617ffe199f32467bfaa7fdc82f057"],["/tags/SwiftUI/index.html","a656f0476ab69ef0057f741672c31027"],["/tags/UICollectionView/index.html","c8a8bb80b8b9adec16b2e0e793ac6a60"],["/tags/UIColor/index.html","f1ac0ad0890bfef75274b17aa21650ef"],["/tags/UIImagePickerController/index.html","5bf43a196a68a487dc209f124087ec21"],["/tags/UIKit/index.html","44a463faaf8ad02c9f50c155639108fb"],["/tags/UIKit/page/2/index.html","11140bf944ca7174875ce30f162c1290"],["/tags/UIKit/page/3/index.html","fbf8ea6c427b6b543c9897b7bd861454"],["/tags/UIKit/page/4/index.html","deb5051b3f04fa3a8475b955612d74d6"],["/tags/UIKit/page/5/index.html","59f171a756729f02781b1aabb79db091"],["/tags/UITableView/index.html","e51bc44a254c1975bd5be3f05bb99331"],["/tags/Ubuntu/index.html","6cc66b529c2b0350e90aee2a8ca27ba5"],["/tags/Uniquely-identifying-views/index.html","27de4950ab693b36061eb5935bce49e1"],["/tags/VIPER/index.html","cf67c2612ea08c6461c58cdb4e472309"],["/tags/VMware/index.html","4000dc55269b38cb228bfa598d86b7c5"],["/tags/Xcode/index.html","8e9c957c55319e7f3acacd239c1e0c52"],["/tags/appleOS-Networking/index.html","a814d5d906535bfb01b762ab1f0812ab"],["/tags/enum/index.html","5da12a89537fc9914737f641974b103e"],["/tags/iCloud/index.html","e0f0969f21b76e090f7c29e03c19604c"],["/tags/iOS/index.html","22dd631c78659a31f1e9acde53beea53"],["/tags/iOS/page/10/index.html","a06eeda33438c462074ae3ed35ba0d91"],["/tags/iOS/page/2/index.html","ba06b86470b28120c1c4d252c2e5e272"],["/tags/iOS/page/3/index.html","168832f0862cb9dcca7b59902ffe1381"],["/tags/iOS/page/4/index.html","9e837f381e8fc313b52bf11d9417add1"],["/tags/iOS/page/5/index.html","c985186599b70494e2ad208fc1ad93dc"],["/tags/iOS/page/6/index.html","c461226df0110628413c17a80ae0ef5c"],["/tags/iOS/page/7/index.html","4f2537fc2314b27482a8d6bdf384d1f2"],["/tags/iOS/page/8/index.html","c748130e878c904aa72efc4e4dfc9263"],["/tags/iOS/page/9/index.html","5216d151013e44e842b04c34f1e3e71e"],["/tags/index.html","6c2033bcd37e0ca905537250be9fa555"],["/tags/non-optional/index.html","6e5968b5455109cf5fee85679232bc6c"],["/tags/random/index.html","d5f6e26f7c829f197b659e7f77cc2b4c"],["/tags/transition/index.html","774a5f3c767e5ef2285beb60d685fac1"],["/tags/三方类库/index.html","9a9234d6ddd685b07ff6e88909303001"],["/tags/依赖注入设计模式/index.html","d3ac52641ce572fe6d0f05b66c7c8c5f"],["/tags/函数式编程/index.html","97bd76fdc731d06224f5a40cea352255"],["/tags/初始化模式/index.html","50453dc39bcf628b001df53fbca4ea3f"],["/tags/单例模式/index.html","8261bc8ebf4d69f25b14537b1cfc5cf1"],["/tags/原型设计模式/index.html","d801b3a286ca73c239c51a78a649b5a3"],["/tags/命令设计模式/index.html","2e31abcb73a351416dab03abd4f0b0d3"],["/tags/基本控制流/index.html","4e02b815a231e2a4aa506fcdd2a1b220"],["/tags/外观设计模式/index.html","6c584c31b778ddabe937430153e495db"],["/tags/委托设计模式/index.html","445badbdf5e1b839b1de6f49741d9787"],["/tags/子类化样式/index.html","455554e1aaa6c39ef789ef3ae9de139e"],["/tags/对象池设计模式/index.html","353725349690485050618e3de12951e7"],["/tags/工厂方法设计模式/index.html","c78c08ab99b41646f468d48442f0f76f"],["/tags/工厂模式/index.html","0b1911b0bbfe2366d70cf6ff43bbc7d2"],["/tags/工厂设计模式/index.html","73d6e21290e2ae028abdfe057145e451"],["/tags/懒加载模式/index.html","7ac3189e1d9c516942d638fec3286b08"],["/tags/抽象工厂设计模式/index.html","612a3c5fff25558fb51d05ddd7ebced0"],["/tags/构造函数/index.html","2a5f39eabc3de87a52f7717f9590196c"],["/tags/架构设计/index.html","b8c2c4260a3416506730764e1ac3324f"],["/tags/生成器模式/index.html","19976330f125dfb16d437e95affc7949"],["/tags/用户体验/index.html","f837f277181031962f5a4f41f06fb45b"],["/tags/类型与操作/index.html","5ccf935d23cfb7a5a0e9f2cec7f29eca"],["/tags/自动化布局/index.html","fed687d39101a2205ca040fe81b08132"],["/tags/自定义UIView/index.html","50dd121813381bfeed127983bf5ab5a9"],["/tags/自定义转场/index.html","807b0835c3d5f24912dd31cf78f59a91"],["/tags/自适应布局/index.html","2369ab3740feaeef838408686fa99cc1"],["/tags/表达式、变量和常量/index.html","35d8c0e16dd191e4d7ebc07fd11e45ea"],["/tags/设计模式/index.html","066689067e0ffaa5626f1a223a94f7ae"],["/tags/设计模式/page/2/index.html","ab745137f500aeb1025c6f2ee2710816"],["/tags/设计模式/page/3/index.html","1b88c4e694b248d71f723fe4281e518e"],["/tags/迭代器设计模式/index.html","c16e6bdff3518b1b668fcf77cfd90239"],["/tags/适配器设计模式/index.html","28f110efbdf59a29910b2ef647477517"],["/tags/静态工厂方法/index.html","2f6e780f6ab7d8fcf0b3fe944d14213e"],["/tags/高级控制流/index.html","38b8b287b66b75445a4d5a96ef7ec226"],["/为iOS应用构建输入表单/index.html","b789a0eca4a9f8d39687516d92565db7"],["/产品开发的幕后花絮/index.html","58d90d4075258b825d2447f0f7a82a4d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ba76567632eba57a71e4889b015906f2"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","561b40c27ab8e86e825f1b8418618864"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","051865edf8977ca2258b6bbc1436a9ac"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","e7687fc521ffacfd07a29112b32f1a1f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","87af24f546515f6142900d761a66f755"],["/在Swift中创建自定义集合/index.html","413f77556d85d835b6107302054b008c"],["/在Swift中处理非可选选项/index.html","5d96b645a98b7a7e046db8dd2e3cccf1"],["/在Swift中生成随机数/index.html","ea3a081192b8374fd88ae9e74bf12699"],["/在Swift中重构单例模式用法/index.html","bdc7d8254c5998ac756c068c8736a82a"],["/如何为VIPER编写服务？/index.html","927f465d9cb6011b2adcf416ae20dd3b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ee16257aadefe37de07e54433a3c2699"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","837a22e64454ec9a9af766a231661f61"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","64e79920615f62871879771207109084"],["/如何使用VIPER构建SwiftUI Apps？/index.html","5f084860fdf8ea5ce6665552e1a653d1"],["/掌握VIPER架构/index.html","8653bd9cb688c615396fe15283230347"],["/揭秘 WordPress Hook 系统/index.html","a15afeedec3b552712bf44d3ec7298e8"],["/比较工厂设计模式/index.html","6decb0e47899c1ca171f9b08c0ba2585"],["/深入了解Swift中的Grand Central Dispatch/index.html","6ac15e1256e2113040008655928df2cb"],["/深入研究Swift框架/index.html","de1372c0a0777fa154d77db6bbc39c1b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b74628e698995960c55d296863524209"],["/选择Swift而不是Objective-C的5个理由/index.html","77497b9e15f9084ff3ee630ff91e1769"]];
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
