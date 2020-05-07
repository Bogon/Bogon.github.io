/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","c636415fab9913549d1a330494c9cd60"],["/Advanced Swift系列(三):  Optionals/index.html","4b94f9342f392a78e961233ff419163c"],["/Advanced Swift系列(二): Build-in Collections/index.html","d1dd01dfdf2c5ee59d057e328abfaa9b"],["/Advanced Swift系列(四):  Functions/index.html","d287c0c2d120eaefa8733b8c7e28305d"],["/Functional Swift 初探/index.html","48552786f4e91e0e60357e1404e37580"],["/NSCODER和SWIFT初始化/index.html","b4bd9703d585d726b9f3df561ff65653"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9a5eb85501569896e740668bd6eababd"],["/Swift CompactMap vs flatMap：差异说明/index.html","59f084cc7b1c7953b66453f9aed4d247"],["/Swift Grand Central Dispatch 深入实践/index.html","93e4295a0c725b072f35acb587f134e9"],["/Swift Lazy属性初始化/index.html","52eedf5d4abf0141b8bd2c26deddf000"],["/Swift Promises 初体验/index.html","5d75408064328b7740dd418e450b9d88"],["/Swift Promises 探究/index.html","68146c86ef74682ce01a1816c0c74d29"],["/Swift UICollectionView使用指南/index.html","2858b2d7e214cde940d13fae56bb76b9"],["/Swift URLSession 和 Combine framework/index.html","1cb0936005c9d6390f90be1611c0eb03"],["/Swift 唯一识别的视图/index.html","809c57b3e37dd50bc927ce8f53d5a368"],["/Swift 如何学习现代UIKit？/index.html","d49465b731802d7d62ed00a216c4fa99"],["/Swift 用 compactMap 替换 flatMap/index.html","8fa9a626ae04128aaf66d7995257367a"],["/Swift 选择和播放视频/index.html","b676d9cbf2122ac586a0b2740f5bb65d"],["/Swift中UIColor最佳实践/index.html","0d2074a69070e53f0263b5260c00ee11"],["/Swift中快速简单的工厂设计模式/index.html","839226c8b52b8f13b4d70930538d69f7"],["/Swift中构造函数与静态工厂方法的比较/index.html","51360dc2bc43cd02a26fe6d217d6f935"],["/Swift中的UITableView教程/index.html","22abfebb52b06963add4fe8d4bf32e7b"],["/Swift中的懒加载模式/index.html","a50a4471223a0012a6da4402fbe8b2c3"],["/Swift中的模块和挂钩/index.html","548f5dfdd15086d34cc06e39edd7f0e4"],["/Swift使用布局锚点添加约束/index.html","23dc02592c8f07d14427063ba67d5059"],["/Swift依赖注入设计模式/index.html","9107df1022c20cda9ed5f134a8ddf75f"],["/Swift关于Dependency Injection (DI)/index.html","cde85b604df49c1ae336face800d9ba2"],["/Swift初始化模式/index.html","a4996499be355282c9f6760bee3683d2"],["/Swift单例模式/index.html","5b1ab06dc0b353b55099fe8f8c52cba1"],["/Swift原型设计模式/index.html","3e46277ed36827c5b91a8c0c41a6e6e3"],["/Swift命令设计模式/index.html","15ba74da5203500e6f8c344c45aa6fcd"],["/Swift外观设计模式/index.html","33f9a174f476554d2ae8a5640274b935"],["/Swift委托设计模式/index.html","77b6fcef46c1cf4d98967084c1e3760e"],["/Swift对象池设计模式/index.html","e63d68038950cc13cf75aac0bee2b9f8"],["/Swift工厂方法设计模式/index.html","f375c65c0d48c6f34717726625aed06f"],["/Swift带闭包的懒惰初始化/index.html","2a1b59e08d99864935717f12c3b46995"],["/Swift抽象工厂设计模式/index.html","efc91e922cfe320221485ddae05d92b2"],["/Swift掌握iOS自动布局锚点/index.html","441cc893ea2f1035814bcf220147f10f"],["/Swift支持旋转的自适应单元格/index.html","f60d57662516cb5e7c35f0a1edc524f5"],["/Swift枚举值/index.html","2e0b86de43758238f7a8f5162a99ad9d"],["/Swift生成器模式/index.html","4e3bbb672ca18ddac571d99828a1ef24"],["/Swift结合Xib文件自定义UIView/index.html","1f44bb6bdcb96d002ec2f09ca35bacb9"],["/Swift编写的20个iOS库(一)/index.html","0e92585a1f9116fab87ff3ab70a08ab7"],["/Swift迭代器设计模式/index.html","d3bd856db0d49694ef2cbdade0de68b4"],["/Swift适配器设计模式/index.html","e2b29f335988ea513aaa376d6445b787"],["/Swift静态工厂设计模式/index.html","b35fc8b5622cdd6b85e706a0ceb778ba"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","d0d065fe970dfd07eaeaf0d03c6b6322"],["/UICollectionView data source and delegates/index.html","824137d22f5bfb58c0ef4e852deeec14"],["/UIKit初始化模式/index.html","3e25f04181f3864e5c8c78aca2f360a2"],["/Ubuntu18.04替换国内源/index.html","b7249d0c97bd2e67c4743b82c60d5030"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","331d201732bb2d5b9788ec8a6280de21"],["/Xcode扩展/index.html","b4c11b933104030ba6bfd97007cd888e"],["/about/index.html","5a617f4900aa1f4479f98bcfd0a7f1a2"],["/appleOS的Networking示例/index.html","3b061d7d7d960a1fcbbc5efb2d327c27"],["/archives/2020/04/index.html","708898356c839f874162c012ddba8c80"],["/archives/2020/04/page/2/index.html","84fbb5ded720bb8eff10e764431eadb6"],["/archives/2020/04/page/3/index.html","537f5c447fb2bba3729167686b17a17d"],["/archives/2020/04/page/4/index.html","9684960e7db623973d66f351e62ce360"],["/archives/2020/04/page/5/index.html","6d734602ccf1874b2b60890672f8b291"],["/archives/2020/04/page/6/index.html","a3b1ea558c4510910c86eb6a22ba718e"],["/archives/2020/04/page/7/index.html","ee485f04a00eb2f7bb5800c312f94525"],["/archives/2020/04/page/8/index.html","311cb19f02cf11b49909be4c9f619652"],["/archives/2020/05/index.html","5af0eef513bc413dcce82d251aa3330c"],["/archives/2020/index.html","36bc34d53737651d205a72da9aeb9a8c"],["/archives/2020/page/2/index.html","e5a195f47a18b64b601d3e49dbfdbee8"],["/archives/2020/page/3/index.html","6182c2cb71a399f377741d4a26bc6c38"],["/archives/2020/page/4/index.html","0033b7009eab2353293887d8b0c62b61"],["/archives/2020/page/5/index.html","920aea49480b6360c4d0e6dabb1f531a"],["/archives/2020/page/6/index.html","2882194ab1848a578e6e7eb8d210c604"],["/archives/2020/page/7/index.html","85f2f51c3d030e185f25ea8021768476"],["/archives/2020/page/8/index.html","76d6a0c2f88e70bb1c72e6dfb41885c3"],["/archives/2020/page/9/index.html","8773b7b34746a4c97909b5f8889437b9"],["/archives/index.html","cf2351b63c4922247090bbfcde772807"],["/archives/page/2/index.html","18e77ff193a9b0ba8ac05b8e23cdb548"],["/archives/page/3/index.html","ddfadf742c4fe58090e63c20d11bc245"],["/archives/page/4/index.html","91682d373ad56f513669803366e7f9b1"],["/archives/page/5/index.html","599c26ccf649b14ebdc723aa5943a331"],["/archives/page/6/index.html","845d2c7520f9d9bf47bfe4d75f6e050f"],["/archives/page/7/index.html","677275d5ba304d08cf40c3a403ac66e7"],["/archives/page/8/index.html","6f12d43d132b2b39005d85cfbe1760aa"],["/archives/page/9/index.html","bbf0bdcb0c5d0864d3d5580afc83a4c3"],["/categories/Advanced-Swift/index.html","f2ec62cbb85a4bfe934532960264e87f"],["/categories/Codable-protocol/index.html","83eabc210acf26fc3e2bc3d3ab85c489"],["/categories/Combine-framework/index.html","44919c8e1fedcc82550cf26cf693583e"],["/categories/Combine/index.html","40debbc6ef389f49f9647aac4606251f"],["/categories/Grand-Central-Dispatch/index.html","3a0515d00a7027a5ed4542bba3396703"],["/categories/Hexo/index.html","42ebd7d87c91e4e636e060df5edb9465"],["/categories/Promises/index.html","4edfed65aa4573fe9e691d8144e62928"],["/categories/Result-Type/index.html","cc12414b5cbc97b105b74cf852b1a707"],["/categories/Server/index.html","a2a176efbcec905814a9528ee1cdc37b"],["/categories/Swift/index.html","e3707d370a0e5a3e6d0a8365b16521c0"],["/categories/Swift/page/2/index.html","bcfabb736db336b57cb70a962b61a355"],["/categories/Swift/page/3/index.html","ce64c1b4e1d6bdf0d4318565da4ca711"],["/categories/Swift/page/4/index.html","995fc036e8145358df094012ae04d8f8"],["/categories/Swift/page/5/index.html","36e52480e4e6e7b57678c26e742860e9"],["/categories/Swift/page/6/index.html","5b33f4b809568327d3baa2d30efc3a7f"],["/categories/Swift/page/7/index.html","5776c6534f5398a2b246d6057a2e5b53"],["/categories/Swift/page/8/index.html","b063acfedcbde184823c7f4245f6b188"],["/categories/Swift5-2/index.html","cc75fa71f94b66df6c2e1d912f3f464f"],["/categories/SwiftUI/index.html","62aea87ef350d48808156f5f680d1783"],["/categories/UICollectionView/index.html","b9d878ec70a1bfa62134daeed8ca008b"],["/categories/UIImagePickerController/index.html","7d290d83829b48058cc539b5f0667f88"],["/categories/UIKit/index.html","4736b49b61213c5ad6d321fb744da152"],["/categories/UIKit/page/2/index.html","793b00f9bd981a0d0c5c28c33314cda6"],["/categories/UIKit/page/3/index.html","8f4ad0f2c4d7a26d43000f8f7692c244"],["/categories/UIKit/page/4/index.html","10ebdb73a5c98768519f8a1c8eace52c"],["/categories/UIKit/page/5/index.html","dbb1d486868039de7b53d477c4063896"],["/categories/UITableView/index.html","6e135d14613ce16e5187e6885eaa6834"],["/categories/Ubuntu18-04/index.html","116fb6870e08b4f4bd52364122a75449"],["/categories/Ubuntu软件源/index.html","d75051721be0af210db2e7bf5d5a4628"],["/categories/Uniquely-identifying-views/index.html","9d5682eefab2c9cd1035bcd744f01392"],["/categories/VIPER/index.html","af11aabcf586e00f23c5bbab0748010f"],["/categories/Vapor4-0/index.html","8f8591254c4e3a17506d944512760e0b"],["/categories/Xcode/index.html","07e74b0c2472f0d949bf55c3a3111efb"],["/categories/appleOS-Networking/index.html","a031a0c5b1f52904af7edee0f2ceb18a"],["/categories/enum/index.html","d1610183f3b4747586a2d5478fb83630"],["/categories/iCloud/index.html","41e6fe1833c51cbaba9d1c279fac7bf8"],["/categories/iOS/index.html","1db027dc5ba1dc20a77b4fa039cc05e2"],["/categories/iOS/page/2/index.html","577b442d436e80a3084be1d98f8e0143"],["/categories/iOS/page/3/index.html","bd71e92a38ef56d4d074c7dd8775ba05"],["/categories/iOS/page/4/index.html","9583915d0580c0019750e1bb08fbd164"],["/categories/iOS/page/5/index.html","82e18746adb23b1b53b1e1f1fd75bba7"],["/categories/iOS/page/6/index.html","8933adb3d0ad8dd7322323a7157d0ffa"],["/categories/iOS/page/7/index.html","81497ff99a30f7d77386562810b223a3"],["/categories/iOS/page/8/index.html","b981c269cd9e914313aebcb1a45055df"],["/categories/index.html","45bd648ef3ac509e66744c32b11b111e"],["/categories/random/index.html","581f3d997964ca0dc00f93371efccea3"],["/categories/三方类库/index.html","83f292543fa3e94a7849834bc1e3a771"],["/categories/函数式编程/index.html","810b943d2bf37bba3ca87d0a57abfc57"],["/categories/子类化样式/index.html","e12634148eebb6644386ba0e879ca1b5"],["/categories/架构设计/index.html","c5240d76ae796798b89eb0100c2515a9"],["/categories/用户体验/index.html","48b4ac6e514e110451d970904159d7c3"],["/categories/设计模式/index.html","47e931bb7cb25ad25daef62eb7c2789c"],["/categories/设计模式/page/2/index.html","a6a70e7041b1ce34b125881beed318c6"],["/categories/设计模式/page/3/index.html","06d1bbd245cb3feb1401289826e13a1a"],["/css/main.css","e2fc291c29d262d4131fabf5bc09e44b"],["/hello-world/index.html","055689cd7a995628a4628bfb06202f96"],["/iOS VIPER架构深入实践/index.html","407362f6cd6d337f30edbb26f3454fe8"],["/iOS 自定义视图，输入表单和错误提示/index.html","60050c3610fd4da1174114eff3e84c9b"],["/iOS如何使用iCloud文档？/index.html","cbe093ccc98a1bf7716abae52d963eb4"],["/iOS子类化样式/index.html","69e64fd27553cdccaeb7830ede45d557"],["/iOS自动化布局编程/index.html","5ce6713e35d54212a2e93883a32b751f"],["/iOS自定义转场(By Swift)/index.html","6164af78e8fdcae773c8f96527de3fd4"],["/iOS项目架构：使用VIPER/index.html","7287d1124db443032ae2aaffde3db415"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","80c5bf0f7a82988b22ae2f010b4f4b3d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b290c01b3b55e2d327f069f305564886"],["/page/3/index.html","380c57092d932815ccb2ff6d1ec2d71b"],["/page/4/index.html","60515c170c6fdf5375f231b0375ed606"],["/page/5/index.html","641bc0ea67842ad56a63ba1b96184dda"],["/page/6/index.html","ea9b8731839beeef42556ffd20543c61"],["/page/7/index.html","75f7b4ac9921fc450218890befa3ca9b"],["/page/8/index.html","e6cb46f73adda4e0db34e232b064d8ee"],["/page/9/index.html","f3bed4229f35420365e68be4c4a58453"],["/schedule/index.html","37dd7145863a596806d227080f9ec71b"],["/sw-register.js","d0ee21e1a10099d9c6c31ec140524e7f"],["/tags/Advanced-Swift/index.html","3354d97cc73d52f8470dbf80eaed7398"],["/tags/Build-in-Collections/index.html","66b5be84c42054ee702a55cd84dba08c"],["/tags/Codable-protocol/index.html","519bb2fcf5c05c0179691367c6b40494"],["/tags/Collection/index.html","84cb64da4a9a54e33c31e00bd149b7a8"],["/tags/Collections/index.html","e00e31a62871b234afaa9a8907fcf07d"],["/tags/Combine-framework/index.html","b2a3151b48c3ffaaa3d7bd92f3f85237"],["/tags/Combine/index.html","9bf8924dd9384d15c764f9ea91cefb9e"],["/tags/Dependency-Injection/index.html","5c8e22b887e9b0338435f0e14fea58c3"],["/tags/Functions/index.html","34a39afd92335f8e33f0a2c423a8f05f"],["/tags/Grand-Central-Dispatch/index.html","5bba1d7ba06082019e96df11c0defd43"],["/tags/Modules-And-Hooks/index.html","86501ca00c541b3440de95637d5302c5"],["/tags/Promises/index.html","7e5f1a5c16a9712ea9852092be470dca"],["/tags/Result-Type/index.html","e07d81bf682a905bda82d12b19cf235c"],["/tags/Server/index.html","0c29ab5f706cf5d4b6791c6094637d44"],["/tags/Swift-5-0/index.html","f948a1b44f98d1f1f258c65cdad2a83d"],["/tags/Swift-Package-Manager/index.html","8bacf569416932b40235223d53319892"],["/tags/Swift/index.html","68d34ad3f07e27e1b562ce2eb53ea2be"],["/tags/Swift/page/2/index.html","81f9b687f57ad289517cfbb09388026d"],["/tags/Swift/page/3/index.html","e5e60ac48db28bce17f0bad95a738dec"],["/tags/Swift/page/4/index.html","ca3c872ab86600ce0c895c78fac35d07"],["/tags/Swift/page/5/index.html","94ab67ac287622f62364fc2e8d99fb65"],["/tags/Swift/page/6/index.html","e971cec8b5ec372e9386a82608b6e28b"],["/tags/Swift/page/7/index.html","a87f6ce1b6e9d348460b2ae5c3ddb64b"],["/tags/Swift/page/8/index.html","cb79cc0323b016814e5e7ffb83f0a117"],["/tags/Swift/page/9/index.html","84bf5aca9f8ccf003012e43f420c8e8c"],["/tags/Swift5-0/index.html","7c66336cd2c9bfbd3468565c9efa71ef"],["/tags/SwiftUI/index.html","0ef27d66b7d622006204a02e9ffd2a81"],["/tags/UICollectionView/index.html","407f8935fdf90267ab20f2401e50eae8"],["/tags/UIColor/index.html","e03e79228d04d8f9a98c4d8967d5c542"],["/tags/UIImagePickerController/index.html","3d2f953b9da23f954bf060f1e2ef5a8f"],["/tags/UIKit/index.html","66fda258f5b65bcf9712a2a7cc896fb6"],["/tags/UIKit/page/2/index.html","928915679068f2a6feb2dbc3fcdd4689"],["/tags/UIKit/page/3/index.html","99dd31dbbbeedf2286d08b3acbae545d"],["/tags/UIKit/page/4/index.html","0a71a2bd2b70e65810f847efe560506f"],["/tags/UIKit/page/5/index.html","d5950e6f9cb795a7e0fb4a055d862f0e"],["/tags/UITableView/index.html","4c9b15916884c2199d61615bc5409f0d"],["/tags/Ubuntu/index.html","caf88b9a3d7d5a4e29686800c498ee74"],["/tags/Uniquely-identifying-views/index.html","ff492e2f41645ab1c7c855301aa4b645"],["/tags/VIPER/index.html","6ed72deb97c10af9c17902a68bb6a321"],["/tags/VMware/index.html","4e40e7d7b63126af9ba7d3242d219812"],["/tags/Xcode/index.html","7cbd5905c27c63b9bce6fba200c6ddcf"],["/tags/appleOS-Networking/index.html","6c190caaee94d90881bec2cb3dbfa856"],["/tags/enum/index.html","d72920be0b7c6e1d940bc9540ab411f8"],["/tags/iCloud/index.html","c0681e981645f8a36f1e81538febe5b1"],["/tags/iOS/index.html","06ba4ee071ddfa0a5fb0a7650ce3b0f8"],["/tags/iOS/page/2/index.html","b57758bf01b708892830d5ea504493cc"],["/tags/iOS/page/3/index.html","5e15139f75dbdf9d9b7e6baf1c157b6b"],["/tags/iOS/page/4/index.html","2acb4667cba3083ea11e06d2fed57d2e"],["/tags/iOS/page/5/index.html","653a0f37e8531187969b3db749ee4045"],["/tags/iOS/page/6/index.html","8c59564bac979112111458028e156724"],["/tags/iOS/page/7/index.html","e4fb8429aa2dfd8143ce70f06f56a566"],["/tags/iOS/page/8/index.html","9d3f43f68c2291f4e4fad3cfc6189dea"],["/tags/index.html","f44c4c5418f51b2d89a65d98b6327f80"],["/tags/non-optional/index.html","33f769d2adc2237475b468326748fb7c"],["/tags/optionals/index.html","c70d04ad77220aef9d08573e21c17295"],["/tags/random/index.html","e12403f683d64fd9f386eb876748a812"],["/tags/transition/index.html","30aa429e9d442eab161d45e5e5910765"],["/tags/三方类库/index.html","e3681befbd1b111373ab5ec3aa088fce"],["/tags/依赖注入设计模式/index.html","5d23413a3a9398531087b749e0de885a"],["/tags/函数式编程/index.html","4c9bb786a7e069f8db6d4ac1c5931cf6"],["/tags/初始化模式/index.html","f541d484c39296e7fe471496bd89e427"],["/tags/单例模式/index.html","8b3a55c6a288b00dd88ed0bedc7b3fec"],["/tags/原型设计模式/index.html","dd44281d2d2eb008e0972a48953c7ed9"],["/tags/命令设计模式/index.html","2022ab8f677f99d7f9ea834286610771"],["/tags/外观设计模式/index.html","12b8e9396ac89e40592179ac01066412"],["/tags/委托设计模式/index.html","ace6021acf369b4a6eaeb0fd582a8468"],["/tags/子类化样式/index.html","a0d2906ef8aefdecee5741d7e70b84b8"],["/tags/对象池设计模式/index.html","b78b6bf0135665ebcb860636fff3993f"],["/tags/工厂方法设计模式/index.html","5a705ddb838714580da73a4d3c59836d"],["/tags/工厂模式/index.html","b4d9e278516ca41cf88744efb8469223"],["/tags/工厂设计模式/index.html","e6cc0e80e1d1e5b1b48249da821ebe8e"],["/tags/懒加载模式/index.html","aafb979254bad3973c5676bb7985ab07"],["/tags/抽象工厂设计模式/index.html","ada5fae0e5f9ed07ca72ba4ce63055a1"],["/tags/构造函数/index.html","f8724fe5e00dfc71bdf534536e6b9a93"],["/tags/架构设计/index.html","28725c14bfd5af3964b8499694b51583"],["/tags/生成器模式/index.html","628f4c41a0c51fb9985a30b86126ce49"],["/tags/用户体验/index.html","93b81d9b59573e24ca55aab1914d079d"],["/tags/自动化布局/index.html","735d509b5eac2d50902c346e679e6bd8"],["/tags/自定义UIView/index.html","7fce162f8a5699ab955b9a4c8b3b7a32"],["/tags/自定义转场/index.html","45117bc1b766a2fcbef85628697783e5"],["/tags/自适应布局/index.html","125bed419264e7255eefd87cd3244fec"],["/tags/设计模式/index.html","7e8c0a891a17ede7acfe73df938839ea"],["/tags/设计模式/page/2/index.html","98992ba8a4e78251e2a214fa4a419d23"],["/tags/设计模式/page/3/index.html","c4c8f9cadbe6c5fd950e806d1526609f"],["/tags/迭代器设计模式/index.html","a1709dee5540c1b2a84e39ea6e7ec190"],["/tags/适配器设计模式/index.html","4629310a32411257127ecfe87090a688"],["/tags/静态工厂方法/index.html","6c432db1ca21973cc68cfdf88feedac7"],["/为iOS应用构建输入表单/index.html","32d09994b7a04a84f8caa0ab5a2ec52c"],["/产品开发的幕后花絮/index.html","813b7555aab9af8be949fc2ef768128e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","2d8a93fa368683ac9e626534bc63a266"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8b6b507c398243fa5f196020d1e13e71"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3a0bd36b12dc2418af023eba7d9c16e6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","91e50a019e26e14b2bf63589c32c4b50"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","1d6983414c2d6505839ed45f00d6591b"],["/在Swift中创建自定义集合/index.html","eb0837fc0d60dffbfbfd0b02bc01dcf5"],["/在Swift中处理非可选选项/index.html","2053b99972502231103e6020ef48b1a0"],["/在Swift中生成随机数/index.html","8cbe15e9d11b6cf7673a6cadf9789af4"],["/在Swift中重构单例模式用法/index.html","03c15df0332a193f1ffa0487cbca2b36"],["/如何为VIPER编写服务？/index.html","dda5c8659fb106091f1754e6652d6ccb"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","bf85d12217283ea81b7248b280eeeb0b"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c4e3c7d40c35a75f1faa6336174c4aac"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","4d027b802a72689b9b7f027bb3878b2b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","775407ead49988a5165b5ad3d8661fd3"],["/掌握VIPER架构/index.html","6739276e419f9b9d39b16949456c3a26"],["/揭秘 WordPress Hook 系统/index.html","509c9b5cca81ab6fa3868c0854e9eb17"],["/比较工厂设计模式/index.html","8d82f22027427a73500449a395486415"],["/深入了解Swift中的Grand Central Dispatch/index.html","0d02ef7f14aae21b9f92466226d6edc5"],["/深入研究Swift框架/index.html","639dec224c971961426dc2518510c56f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7141d05ca95f830c00b483466906ba54"],["/选择Swift而不是Objective-C的5个理由/index.html","7d9cab6528a2cfa40801382ceb92294d"]];
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
