/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Build-in Collections/index.html","ffcc631b1237b593e911697eafcedf81"],["/Advanced Swift系列(一): Swift 简介/index.html","4f9e5f4eae65025d6a2f385475a5ba65"],["/Functional Swift 初探/index.html","00bd6f43feb178aeea77b3c643917309"],["/NSCODER和SWIFT初始化/index.html","8efc9ba82495f1fd928f8e35c2fe6c56"],["/Swift 5使用UIImagePickerController拾取图像/index.html","10929352b36f3c10b4726a2d4523ad0a"],["/Swift CompactMap vs flatMap：差异说明/index.html","91ac53889a20702390c552d693b79a89"],["/Swift Grand Central Dispatch 深入实践/index.html","5fc57951d3b47de926dd469835b6613c"],["/Swift Lazy属性初始化/index.html","bb2303c8b95cd090f82c251f197957a3"],["/Swift Promises 初体验/index.html","80692ecc8f861e1f3bb0cc50cde80f14"],["/Swift Promises 探究/index.html","90393f49c700d3ed9d430dc536b3a39f"],["/Swift UICollectionView使用指南/index.html","aa1597c09eae17f6397ec7de522dee31"],["/Swift URLSession 和 Combine framework/index.html","e02f7443c1272da517ae81aa2373cbea"],["/Swift 唯一识别的视图/index.html","79c07db11ca99e9b2d1d7273ba2126d8"],["/Swift 如何学习现代UIKit？/index.html","c73f32b7f05c8c47bcfeaec7799d8613"],["/Swift 用 compactMap 替换 flatMap/index.html","5aac53fbe7a0de823c54e0891a80c343"],["/Swift 选择和播放视频/index.html","16c51a76568b5e97dba421681870b5e1"],["/Swift中UIColor最佳实践/index.html","b9ec187fc427719151fc0f51f3790a53"],["/Swift中快速简单的工厂设计模式/index.html","63170a9b7d2f07bd879995d4e6949355"],["/Swift中构造函数与静态工厂方法的比较/index.html","f6e3c76ee508689ff7c9ada1f6e07de3"],["/Swift中的UITableView教程/index.html","e3fa4ba110c03643e7763549400c007e"],["/Swift中的懒加载模式/index.html","ecbd459d889a136c1cd49a05529fe53b"],["/Swift中的模块和挂钩/index.html","9fe4f88b99f536577624bfd633c922f1"],["/Swift使用布局锚点添加约束/index.html","81f6f52018cc01c17e6fe05fbc400df6"],["/Swift依赖注入设计模式/index.html","1a92f6234b654fdedfa71c4e95f6def4"],["/Swift关于Dependency Injection (DI)/index.html","002a26bea144a2000eeaffb686527636"],["/Swift初始化模式/index.html","4515995a5361a319465781ad095cf82f"],["/Swift单例模式/index.html","3b229c734e318de611949f1a90f6c3fd"],["/Swift原型设计模式/index.html","db8617f6959d2736b7a18fe020068ded"],["/Swift命令设计模式/index.html","4459d69143d66d4635be06655d95401b"],["/Swift外观设计模式/index.html","dd3d3797a07502856451952ff028ad85"],["/Swift委托设计模式/index.html","6afa0b461915820e161f4c4ba28fb2f5"],["/Swift对象池设计模式/index.html","a6d45e390561e20a9c8cc376a41339d4"],["/Swift工厂方法设计模式/index.html","8d3374c0ba307e5676ddd4c0c831a938"],["/Swift带闭包的懒惰初始化/index.html","4e6bf24943ead1cbd42aada55999b373"],["/Swift抽象工厂设计模式/index.html","d797e99bcf68f1d2272d238b2bd47d0a"],["/Swift掌握iOS自动布局锚点/index.html","fd08489a67384ee210ad1a7fdfead32f"],["/Swift支持旋转的自适应单元格/index.html","3296c9d35cb9b50ed972cd5d02745100"],["/Swift枚举值/index.html","8a7a6d90fa62349ae41d7786d72b50e8"],["/Swift生成器模式/index.html","7d9abe1240837b8b4ab3f7a89ca0b89f"],["/Swift结合Xib文件自定义UIView/index.html","2975a1e9cfe7d8c7afcfa65110632698"],["/Swift编写的20个iOS库(一)/index.html","ce6fddc457aa624336c7f07aab5c2472"],["/Swift迭代器设计模式/index.html","9c47b4c1aa09437e35b5400bc56d6985"],["/Swift适配器设计模式/index.html","8cf7a916cb6336771de3f283c9bb7362"],["/Swift静态工厂设计模式/index.html","bcb3e508ad849aa84ac76efc8d43069e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2bc97b527db81fda5d1a51f1d3f42f9b"],["/UICollectionView data source and delegates/index.html","8057c19902cdf8c11eb4ff3bc60a93f6"],["/UIKit初始化模式/index.html","e3413f6b70d64cedba443eef4d7d649f"],["/Ubuntu18.04替换国内源/index.html","d491bccd0fd2b724e061164bdbe492ce"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e9524a4c8dcf2b82acd2f78a8440d0db"],["/Xcode扩展/index.html","5c6a28e8135feda6450ee686b5fe4299"],["/about/index.html","f8a11030c6474f3b3543570b4fe79ba9"],["/appleOS的Networking示例/index.html","3b61a4787c205cdbe84d4f05f7f243c7"],["/archives/2020/04/index.html","cff72e0f9a2a5098b669b7a6560c9b4e"],["/archives/2020/04/page/2/index.html","ed89319c03e4c4bd11de274d5a7a3d2f"],["/archives/2020/04/page/3/index.html","579bc3174335378e729d5c413c49e542"],["/archives/2020/04/page/4/index.html","320fd71b9b7caf0348facf9d1ab6c813"],["/archives/2020/04/page/5/index.html","0322e185bde971534699f44b4196b7d5"],["/archives/2020/04/page/6/index.html","ea9779df18663bdb7497db557202ed81"],["/archives/2020/04/page/7/index.html","5405d8544dfed85e2d1cd49bd3a23071"],["/archives/2020/04/page/8/index.html","33f569a273de6d02d81507b68ba0719f"],["/archives/2020/05/index.html","aa6e9f2d160d3619671469c2ae30adac"],["/archives/2020/index.html","b27d459d1a0f43dac299135de0ffdde8"],["/archives/2020/page/2/index.html","0dee103e1fa91756b229ce4547194703"],["/archives/2020/page/3/index.html","fc3808f3dd1c6d76a1081a22e092d9da"],["/archives/2020/page/4/index.html","068e7e0da625d69037e86cd9865d0705"],["/archives/2020/page/5/index.html","6811c15c37dc23a81780592be9446aeb"],["/archives/2020/page/6/index.html","df1f953f83c622caa375e731bb596622"],["/archives/2020/page/7/index.html","0012966c81ab2236666be2dbfb880a57"],["/archives/2020/page/8/index.html","65086d96cd52b1062f084925345b55cf"],["/archives/2020/page/9/index.html","b7162ce9e1183629c528bbc7bdfe90a7"],["/archives/index.html","08278f629dc09d9c328d97b78794b021"],["/archives/page/2/index.html","f6ebe1e86d865193a40c4f3f8be10219"],["/archives/page/3/index.html","5e6a328af7ae1ede8aa02730c37dc5e3"],["/archives/page/4/index.html","d443594767e5277f3241c56d8849dab0"],["/archives/page/5/index.html","4368865d4eab8ad95c792b867cd6423b"],["/archives/page/6/index.html","ccc259533773490b18d8c6ee1f48c323"],["/archives/page/7/index.html","182a86945d6c0f5b1b24fda094f052ea"],["/archives/page/8/index.html","a76eb4f10565f27e8b068200d212face"],["/archives/page/9/index.html","95c7d61a7277d5db8b0754327585bb42"],["/categories/Advanced-Swift/index.html","95b6532f02b00b0fbea1ea78e8cf8bcc"],["/categories/Codable-protocol/index.html","d24b6693ad5c9097f660cbc9b27a9939"],["/categories/Combine-framework/index.html","f724614b0af82da1608b85e5400e4d36"],["/categories/Combine/index.html","f7617536d1957b1514e63b0dcac276ef"],["/categories/Grand-Central-Dispatch/index.html","4c70e82e1825fe15a605f8a6e8163fc1"],["/categories/Hexo/index.html","0fd9dd7c38fbd5fc57744fe725dbd0fb"],["/categories/Promises/index.html","113e7fe6039400480e2868ce484c86f9"],["/categories/Result-Type/index.html","9863f74ee97f2690446a5363e72c874c"],["/categories/Server/index.html","a404313ae8e494e84a406b889e514c53"],["/categories/Swift/index.html","268cc32435b9352e68058c1a84947ba5"],["/categories/Swift/page/2/index.html","9153dd9b347ec134584f47dccf6d91ae"],["/categories/Swift/page/3/index.html","48531ae36d7a8bf27fb6ca2f0f2871ed"],["/categories/Swift/page/4/index.html","08abf30470b1afbe7752ce6c33094966"],["/categories/Swift/page/5/index.html","6690965bf8d682690d6f1ee3a97d35f8"],["/categories/Swift/page/6/index.html","2fc52875dd2ff90095e28ac0f041844d"],["/categories/Swift/page/7/index.html","b5596a4148c3a678780e918145ef6d47"],["/categories/Swift/page/8/index.html","0b67247ff95b14d8c5b91f7c3c511c71"],["/categories/Swift5-2/index.html","24dab4f8f88e795a5e0c2c941092babb"],["/categories/SwiftUI/index.html","67c248402e7a562fb0efd78d3b4184e7"],["/categories/UICollectionView/index.html","fc4419462a007d8c70e03c8c7c38ffd2"],["/categories/UIImagePickerController/index.html","974c931b72f9ba10c3e14d5d64734f32"],["/categories/UIKit/index.html","08fcf78fe68c9fd8f8660aa28cbca139"],["/categories/UIKit/page/2/index.html","29ad31a65087cd117800747252d996d8"],["/categories/UIKit/page/3/index.html","52bac078975920f86532f20c00cf70c9"],["/categories/UIKit/page/4/index.html","c12bbdf6d3020551fcd580c14b16ac4a"],["/categories/UIKit/page/5/index.html","96ebb7645734c6c877d19bf97fcccb4b"],["/categories/UITableView/index.html","19a51f052aeccc27b27613cad515a992"],["/categories/Ubuntu18-04/index.html","241fb11b0d46cd4faa7f1f2576862e42"],["/categories/Ubuntu软件源/index.html","ecfa3240fd71c4734dac14833d2cf653"],["/categories/Uniquely-identifying-views/index.html","2edd8e3ae394fc05ba906baf29156c79"],["/categories/VIPER/index.html","db77dd7e860ca54cd044e2ad832434cf"],["/categories/Vapor4-0/index.html","f1d3f32d951445bfb12de410a6a4fe97"],["/categories/Xcode/index.html","fc5388df18546d956f6e3b812d1c07d4"],["/categories/appleOS-Networking/index.html","8c9471ed966a871f06da981eaa370b21"],["/categories/enum/index.html","56bc421c361fae0cfb0acc24619bf59a"],["/categories/iCloud/index.html","5ec8114223ea6eeb37fbaae92fd92f75"],["/categories/iOS/index.html","2ac867d0b57c728bfefc002e3929e7e0"],["/categories/iOS/page/2/index.html","d593123b8d542ece3a17aa80a8705e12"],["/categories/iOS/page/3/index.html","95c2d14af809f989032c05a8463428a2"],["/categories/iOS/page/4/index.html","d422d23d07e36c56ecb6927abdfb5f06"],["/categories/iOS/page/5/index.html","4e15dd00791e124545c01457ada9d3b4"],["/categories/iOS/page/6/index.html","0fad6597dc9d5e15ad6fe082ca84ec13"],["/categories/iOS/page/7/index.html","68aa416f42368faa9fd16464dd0ab616"],["/categories/iOS/page/8/index.html","0421b99b51a221024c904e25c87f5c4b"],["/categories/index.html","ff17e78ff4b98219cc28fb056f6ae95a"],["/categories/random/index.html","59853bd5167612a24017bfc274f9e7f4"],["/categories/三方类库/index.html","266e5fe9249ffe3a8aa48c91af8f649d"],["/categories/函数式编程/index.html","e1b510bcbb14a109b15814e0e5a67e4a"],["/categories/子类化样式/index.html","3fad73370594c0ca4e427aadf802e04d"],["/categories/架构设计/index.html","afc72ed7ffe2ba529dd08ac4cbbf202e"],["/categories/用户体验/index.html","2d4e6a78a7a8c97f46df0f97a68ead3b"],["/categories/设计模式/index.html","aaf380004bd20fa838942b9df1e57b30"],["/categories/设计模式/page/2/index.html","80585614f8682b164ce2f4598b67f732"],["/categories/设计模式/page/3/index.html","3014e98bbbc9784ecbb5f6e9db0bcc46"],["/css/main.css","9984c7068429b7f2613289f71e0ad9d2"],["/hello-world/index.html","83e247aa0036e2b7a36276e6507584f0"],["/iOS VIPER架构深入实践/index.html","e6119ae7289b21447dce2de3d926b63d"],["/iOS 自定义视图，输入表单和错误提示/index.html","939669c0350c2b9548dcee0b0ce348bd"],["/iOS如何使用iCloud文档？/index.html","57b37539830dc8d3133b00a57cd82783"],["/iOS子类化样式/index.html","7c781b4348bd18a5654825e6b778a3ec"],["/iOS自动化布局编程/index.html","a9f8dbaecfc2725e0681d49fef9699e8"],["/iOS自定义转场(By Swift)/index.html","af9ea8d0c1f5bb0b25d027d1db6d4058"],["/iOS项目架构：使用VIPER/index.html","8e6742b48c887167e9a088281a1e80bb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","fe1485cf07935576282120d3a6da685b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","368d9f0ac922acfb322ff990d3637e47"],["/page/3/index.html","3cbec457908e526da2effcebda5b03d3"],["/page/4/index.html","41f8c1fd05966db11dd0de5bdded7d58"],["/page/5/index.html","633399c2bf6459ac53fc4437349fe512"],["/page/6/index.html","4a2903fc032ebc3373121f5e6eea1017"],["/page/7/index.html","f11417921f63c44cc300a56f2be7a3db"],["/page/8/index.html","7742d262f24545d2a0f3dc7986556f47"],["/page/9/index.html","468abf5eba0e5ba395c5954919b2e105"],["/schedule/index.html","d7e783f6b1818fc35fa7bb5f2bd6bb09"],["/sw-register.js","48fbab37a0d76c9ade5d8124fa1af480"],["/tags/Advanced-Swift/index.html","e9cbaa6f0b023b9f75c18241b7d863a8"],["/tags/Codable-protocol/index.html","bf629690ea256ff727dad858045998e2"],["/tags/Collection/index.html","0a051872e84886fe3e94ca0d6aed462e"],["/tags/Collections/index.html","27ca47e0e80a328d86886f00eb29f93f"],["/tags/Combine-framework/index.html","b7de48bd6746cf58ad3d06a1470d63b3"],["/tags/Combine/index.html","26bbfc05e039d0e280df8e4fb82b1851"],["/tags/Dependency-Injection/index.html","b6140b09b4dcbae24fd7bd7ef14cc2bf"],["/tags/Grand-Central-Dispatch/index.html","36bffe05dd36c6c34bc3da2883a591e6"],["/tags/Modules-And-Hooks/index.html","28c8b97064df694510d9ff60967bbddf"],["/tags/Promises/index.html","8de052154741abbfc787aa404b662ce1"],["/tags/Result-Type/index.html","70f41203d26529fd72497538273c0db0"],["/tags/Server/index.html","6abe85092a65f3ad78f354e575130453"],["/tags/Swift-Package-Manager/index.html","92e2998c660b7467486c2d6383b7dfaf"],["/tags/Swift/index.html","6324fbda17840197fca57b05ab7f4154"],["/tags/Swift/page/2/index.html","11b9a2f41a26c73155957f2a4e5e8a61"],["/tags/Swift/page/3/index.html","95d3521714b0f9f49d73d6e8160bfee7"],["/tags/Swift/page/4/index.html","cd1fab9b7ccc8eb10d79e3d0348b5941"],["/tags/Swift/page/5/index.html","b4862e91fbc50545552697870a38ebd6"],["/tags/Swift/page/6/index.html","3c9564f2bc3375ee5c201f644b77f840"],["/tags/Swift/page/7/index.html","6be5f9bc6ed1355eb8d471f77690536e"],["/tags/Swift/page/8/index.html","6768cc90d9ef93919e3080ff69f1010b"],["/tags/SwiftUI/index.html","874b8ca8bd6c3d3a03f53b471afedf0b"],["/tags/UICollectionView/index.html","40ea0c6c61b3696caa9d5721e752607e"],["/tags/UIColor/index.html","2d255893690d2669410f41885d7628a1"],["/tags/UIImagePickerController/index.html","48e9e170e0bbfa08a908744a61ee74fb"],["/tags/UIKit/index.html","69e51031400eaf7dc87a694cfa5077b2"],["/tags/UIKit/page/2/index.html","b60b5dbb0d908accc7e38c983730387e"],["/tags/UIKit/page/3/index.html","b488d16b22c8156c02cf1c482a4c6903"],["/tags/UIKit/page/4/index.html","3793111400885f54cf03e397187ce392"],["/tags/UIKit/page/5/index.html","d6fcd7ef9d7cca3b410650352dd883c2"],["/tags/UITableView/index.html","a5e694cb97080876449bf54dd14b91e7"],["/tags/Ubuntu/index.html","8a6a97fb501b861f4a19a83198a1e242"],["/tags/Uniquely-identifying-views/index.html","bc103b57453a14ad2d7f1f81c7f21091"],["/tags/VIPER/index.html","b16a8893182817c77c7a222a82251c0c"],["/tags/VMware/index.html","e84e494d6675366a141c7d3b8e566a5d"],["/tags/Xcode/index.html","45b091e9b03e549af9787258806be15e"],["/tags/appleOS-Networking/index.html","790a56ddd53e2fc2972f6a72a09d98b8"],["/tags/enum/index.html","337a6cf5f42f32f055cfd70fb7be19f0"],["/tags/iCloud/index.html","be5d5ab0b6122da62f9e9e5d9b8a5241"],["/tags/iOS/index.html","096dc4783990708d6cd8fdbfc0c5fba9"],["/tags/iOS/page/2/index.html","8be7df25c2347f0b73573e95784613aa"],["/tags/iOS/page/3/index.html","f1b5cd14f76fdf503fddc6e2b0905a5f"],["/tags/iOS/page/4/index.html","8c5c907eec320d6cd9a402b6082d7360"],["/tags/iOS/page/5/index.html","b6d72ccb165ad75af75325f92f38377e"],["/tags/iOS/page/6/index.html","6b5745be94549a65ea1b60cf7f559948"],["/tags/iOS/page/7/index.html","59ea91ce861d377bca834727742f6388"],["/tags/iOS/page/8/index.html","f34179e25ac02f4ffed806d4e82f7bcf"],["/tags/index.html","29f612724392bb55a108cf534da8b4a5"],["/tags/non-optional/index.html","b96ed882f5d779817de7967067853a94"],["/tags/optionals/index.html","0a444252c761e538a8fd7c390a34d2b6"],["/tags/random/index.html","baac16dff879c3eef374c4ee804047f0"],["/tags/transition/index.html","45643eddfe6d08f94081c6f1179b1c4f"],["/tags/三方类库/index.html","3db8c2f8503617afff90058b678ce094"],["/tags/依赖注入设计模式/index.html","963d1e85339b009421b686ba5dc3e39c"],["/tags/函数式编程/index.html","58d2539243d45e81a7cafcc1b6658332"],["/tags/初始化模式/index.html","05f519aa010fe2555c6e764d14893b5a"],["/tags/单例模式/index.html","5d4e0d590e5d4341ea9ef5a92742178d"],["/tags/原型设计模式/index.html","d60a022888a1aeb3402ba180a4f1e2b0"],["/tags/命令设计模式/index.html","ae21823cc2b26355e42400699fb53c38"],["/tags/外观设计模式/index.html","9c9478618cb3fe64b59a99523ae997ee"],["/tags/委托设计模式/index.html","de60862de06fd63b5f3c94301bdd156c"],["/tags/子类化样式/index.html","d4e35ae32a5c60195fc307a257cb1a13"],["/tags/对象池设计模式/index.html","b72e6a2d2fcd269788819b1d25c14601"],["/tags/工厂方法设计模式/index.html","9858938b8b574acbae4efbc5fa0f6140"],["/tags/工厂模式/index.html","8c6470f96d80f9a27f3970d3299dbeb3"],["/tags/工厂设计模式/index.html","2c3045e8d7d047cf0152c4def85e894d"],["/tags/懒加载模式/index.html","a1e8589bd4d850becde97471bc48cba5"],["/tags/抽象工厂设计模式/index.html","ac0e65e0abda59feda5faa2ff3ceba95"],["/tags/构造函数/index.html","cef394852418c23f9e3408e021fedb94"],["/tags/架构设计/index.html","871b1791d3968fd1ec64190335c54e81"],["/tags/生成器模式/index.html","9f1f39628d7799f44456a910f000dfc1"],["/tags/用户体验/index.html","7d34a77db5d5ab7b634b69ee33eedcc8"],["/tags/自动化布局/index.html","909c95109d94229106b19aa917042e69"],["/tags/自定义UIView/index.html","2f1df7fd69d7af46ea82e2ac5080f659"],["/tags/自定义转场/index.html","038942d2f6ab5942a4adeff3225389fd"],["/tags/自适应布局/index.html","0d566983311743089906c09f9ea986d1"],["/tags/设计模式/index.html","78572b5c5e6d35d8423afd2395f49543"],["/tags/设计模式/page/2/index.html","959e49f30a7575379a48857e27e066bb"],["/tags/设计模式/page/3/index.html","6018f8f796ec922814cd4d5b64403369"],["/tags/迭代器设计模式/index.html","404194e09e0db24b259ec1c97287c5f4"],["/tags/适配器设计模式/index.html","bff180235138428c4a04c407972cff6c"],["/tags/静态工厂方法/index.html","031f0419573ad67ab9d02f866be45e75"],["/为iOS应用构建输入表单/index.html","0c4d199d2153213302a274172bf6c5e0"],["/产品开发的幕后花絮/index.html","93dd6d35159b0a85781a9c1b62e2b863"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6bd28e981012156ce872e009110fe6ea"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","70bbf87483858cc9a01e341ddcf8c4da"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","837f7df8b37ac5505523b01c0209cde6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1c12f6a5a11c5f959f455de78eed8182"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","1f3960977fda042f9c639f0a12bab077"],["/在Swift中创建自定义集合/index.html","9b3cde7fddf5ace552d79e608fbed322"],["/在Swift中处理非可选选项/index.html","686794aa29627c5e3740ebb3b12ea4d3"],["/在Swift中生成随机数/index.html","b485ad7bb6bce4000d906a01b3db029d"],["/在Swift中重构单例模式用法/index.html","8225d97bd2abcf89eb9993fc9097ffdd"],["/如何为VIPER编写服务？/index.html","7d83b411b428cd5decfe540c924ba5c8"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c51a1d9183efbab1c6e712a4ec9d5814"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ca4ddb61d805eaaac631ba94108951c1"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","016d99dd2f4c4852a12f6171bc90f17c"],["/如何使用VIPER构建SwiftUI Apps？/index.html","dce73aa8d1ce569880a22e5f887111ef"],["/掌握VIPER架构/index.html","b7ce0ec381e8c4d0a0e52da1ba5b5872"],["/揭秘 WordPress Hook 系统/index.html","4d7794d65411c07a4d7cb2ae6f15d4a1"],["/比较工厂设计模式/index.html","51ef02af6adf5a9865e7712524508214"],["/深入了解Swift中的Grand Central Dispatch/index.html","02f1e61a79bc228756bf589d3e2e863b"],["/深入研究Swift框架/index.html","095e9ed4473dd8390d21c624c28b0b5a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3fccfca5fffe51e5ec03f7e651b678ed"],["/选择Swift而不是Objective-C的5个理由/index.html","561c01b4d58b22a29b371bed65d91f3c"]];
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
