/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","2ec82413c759cc7e78a3b6789a174b54"],["/Advanced Swift系列(七): Strings/index.html","e3ac1bd433ba75306e82f7fc01406d47"],["/Advanced Swift系列(三):  Optionals/index.html","9b931444be2d9a307e96c3c2ea1fd145"],["/Advanced Swift系列(九): Protocols/index.html","7bad39f7e4dd9a84970d8e9034cf4b99"],["/Advanced Swift系列(二): Build-in Collections/index.html","9158cc70eea5ded41f95f1afcd539c81"],["/Advanced Swift系列(五): Structs and Classes/index.html","5a2937d8d83991a1a103db5ad2a7c561"],["/Advanced Swift系列(八): Generics/index.html","1f8333bdb52e0be05e368f51bec663fa"],["/Advanced Swift系列(六):  Enums/index.html","fc36b27ad262378f79f395063d47a8dc"],["/Advanced Swift系列(十): Collection Protocols/index.html","79701782a344f95f36bb201806cec4d3"],["/Advanced Swift系列(十一): Error Handling/index.html","50ecc1d83f881d8ccfef17b9a6d09e8a"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","967f9e9209e7193d049e8a7faa7a4230"],["/Advanced Swift系列(四):  Functions/index.html","dfc61132ab0bfbbdf5927fee3dc2aed2"],["/Functional Swift 初探/index.html","29ecaa06a8905a6baf6135e0fcf1fea6"],["/NSCODER和SWIFT初始化/index.html","852486dd41a2187f8569f16006d8dc46"],["/Swift 5使用UIImagePickerController拾取图像/index.html","470eaea721f4a32a82f73bd161c99a54"],["/Swift CompactMap vs flatMap：差异说明/index.html","179a4ad1afdfd2cec2d37f58bb712959"],["/Swift Grand Central Dispatch 深入实践/index.html","afc382cc2c4c4e45ad85129588428653"],["/Swift Lazy属性初始化/index.html","0d9257eaa3646f4147701ded882fccb4"],["/Swift Promises 初体验/index.html","d25ac3e64a848c824a2de3b9e1fe7125"],["/Swift Promises 探究/index.html","7ca42c6c5bc0d85c117d1d82ebe4b8a6"],["/Swift UICollectionView使用指南/index.html","092a7b80a6148d14a031bf6caa1235b6"],["/Swift URLSession 和 Combine framework/index.html","7bc25bea966a31f2d95cfb587c847cba"],["/Swift 唯一识别的视图/index.html","24b050cfae360cd5c6a29cbeab4fcee5"],["/Swift 如何学习现代UIKit？/index.html","af92ec7611eac43a07615662463033d3"],["/Swift 用 compactMap 替换 flatMap/index.html","7bc6a14d0643012888fa0b32edd01296"],["/Swift 选择和播放视频/index.html","c78fd1c12d096b7b34fdba43213af71c"],["/Swift中UIColor最佳实践/index.html","c2d1bce2c6c91bfd5085ef9e318b57b1"],["/Swift中快速简单的工厂设计模式/index.html","df5cc76698f98864bd7229fd641e7c98"],["/Swift中构造函数与静态工厂方法的比较/index.html","d447008b3b8a40124242d17a494640b5"],["/Swift中的UITableView教程/index.html","323881a85750d182eead815164abe3ac"],["/Swift中的懒加载模式/index.html","fe2a5ba3518b9fe8dece080f97f4391c"],["/Swift中的模块和挂钩/index.html","5eba29b648bc3c147324419d45c10f2a"],["/Swift使用布局锚点添加约束/index.html","99c547b3ec3276aea6e48fb16c1c607c"],["/Swift依赖注入设计模式/index.html","aae7b4f37a57b1f530e69e0986d9c62c"],["/Swift关于Dependency Injection (DI)/index.html","32084ccb4a06f5512b628fbc54c32283"],["/Swift初始化模式/index.html","58cbd69a339d0eeefd04370923d91141"],["/Swift单例模式/index.html","2e1e2725fcab4f1349b0fff5186c27b3"],["/Swift原型设计模式/index.html","7c1ff4133c218a161f95812befe2a150"],["/Swift命令设计模式/index.html","da451bdeff59c7b10785f9bb95e2df24"],["/Swift外观设计模式/index.html","11c18fc14465b3c86cd6506b26410059"],["/Swift委托设计模式/index.html","56d426ea2925efab9c8c68713b69d153"],["/Swift对象池设计模式/index.html","8dab957b6cf8df4faf6719e6088102e4"],["/Swift工厂方法设计模式/index.html","ac5e81d0990150b95f617ecb9cc5ad5e"],["/Swift带闭包的懒惰初始化/index.html","dde712345751eae552704768d2e84990"],["/Swift抽象工厂设计模式/index.html","bd2706e90ef303f8c7b09237df0ac7cd"],["/Swift掌握iOS自动布局锚点/index.html","97009ef882eb25e4a108f0dd5206cd2e"],["/Swift支持旋转的自适应单元格/index.html","0fb9c1cc2fd079db472ca66588b7919a"],["/Swift枚举值/index.html","f991e0e078baa48d1c4fcbb99157bb38"],["/Swift生成器模式/index.html","704da2ececc4f3b4b8aa677b1b114485"],["/Swift结合Xib文件自定义UIView/index.html","578045ecac244528441cb3dff3311c63"],["/Swift编写的20个iOS库(一)/index.html","be5f5951daf54d18f3a2ea20a6a6e8bb"],["/Swift迭代器设计模式/index.html","307b5f6b688670cfbca7718e7845d0e6"],["/Swift适配器设计模式/index.html","0338a3af19b75c6fa8e07553803ed7dc"],["/Swift静态工厂设计模式/index.html","24f709e246a8491a4e97b606e0cd49e9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e7d1a67548315c9b047b26954078b783"],["/UICollectionView data source and delegates/index.html","ef43d8291b85f3f63f5497909cc7e624"],["/UIKit初始化模式/index.html","ca3bedc89fb7f957eb0e407fb2881cf5"],["/Ubuntu18.04替换国内源/index.html","8bdef1d45a0184a3c45ef013bb48f7b6"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e5193b0e6ef95f4bbf47f49a533cead1"],["/Xcode扩展/index.html","943a6005047a3b1139b1f71e2d9c9aa6"],["/about/index.html","1c4bc954bee81af1687b14942b73bfae"],["/appleOS的Networking示例/index.html","4bf9f05ac303a4ed2f70d38e85203a25"],["/archives/2020/04/index.html","44ad0793ce351f72998b320d26d26650"],["/archives/2020/04/page/2/index.html","067b8eb1724576125932829bb5448e20"],["/archives/2020/04/page/3/index.html","152a050580a62c70125838c755616fbc"],["/archives/2020/04/page/4/index.html","cce4cd4836bee995770a04b8de749d35"],["/archives/2020/04/page/5/index.html","cc24e919993ba15cde8e361c55c332f3"],["/archives/2020/04/page/6/index.html","afdbaa42f05889401a5a7d9769342bcc"],["/archives/2020/04/page/7/index.html","93660ddc1c7a9b626b42773f46272703"],["/archives/2020/04/page/8/index.html","c266a5484b6876b6d862ba052d6ce486"],["/archives/2020/05/index.html","b77d5e318cafaa99bac9c0f298f64109"],["/archives/2020/05/page/2/index.html","4583a663717a79bb0b81a071e13ccd9b"],["/archives/2020/index.html","eb887bcc238ed4087526bcf1d1b6759a"],["/archives/2020/page/10/index.html","8869d8f02b8b48109813449f4f134ead"],["/archives/2020/page/2/index.html","dc95774ebb5a0ce3f406907a4a740421"],["/archives/2020/page/3/index.html","401344887bce336d1c935e45d5e834cb"],["/archives/2020/page/4/index.html","bc879b51db076c84316818c84789f0f4"],["/archives/2020/page/5/index.html","f54916c6ae96f3409a2d8a040e162777"],["/archives/2020/page/6/index.html","580ae1668a4418b3fdbf46e680706905"],["/archives/2020/page/7/index.html","e84ad6fefaf8f3a283d9d69846bb1c90"],["/archives/2020/page/8/index.html","31ac41520e120ef480ee72600484d746"],["/archives/2020/page/9/index.html","680ac0cd121230bdb3be69cf302a173b"],["/archives/index.html","b9a010f4f06d437e8af8a53f575aa329"],["/archives/page/10/index.html","d241b3754c782740f219cdeaed41ca94"],["/archives/page/2/index.html","7a22f89b356c4f45ab30e178766c3586"],["/archives/page/3/index.html","0667e0516e8e0b85ea5e3b0757519519"],["/archives/page/4/index.html","d8c10f2434fa6265803ebedfe15b3c30"],["/archives/page/5/index.html","acab015f101f7cbb029dd806c5df8980"],["/archives/page/6/index.html","bbe32d420c8ca14b730a3a1deae12891"],["/archives/page/7/index.html","a450a0d52cf833952855472e633318c7"],["/archives/page/8/index.html","e82e8982e27bb13051500cc5fde7802a"],["/archives/page/9/index.html","6825c586be485913f7c35c38277f3ff6"],["/categories/Advanced-Swift/index.html","1e088f38352ba7d87c65e7351b268f24"],["/categories/Advanced-Swift/page/2/index.html","61a4babf326478e91b07ad51d08d9285"],["/categories/Codable-protocol/index.html","40aeacef676f31b2467931134e6c27be"],["/categories/Combine-framework/index.html","d6ada1b48a43f96464e9cf48de7097fb"],["/categories/Combine/index.html","225feea76f4d46f418502dd552b51cf0"],["/categories/Grand-Central-Dispatch/index.html","c73fad83bb0fea8041bb146dd3cef0c5"],["/categories/Hexo/index.html","549386ad14e0c9c7180d830930223101"],["/categories/Promises/index.html","364304bee2aa79a93c5968586c1b5c38"],["/categories/Result-Type/index.html","295adf4b483dc27d59f14df8104c9bd7"],["/categories/Server/index.html","93ea6b1003bf7cf00dd66b0a31520e18"],["/categories/Swift/index.html","5f4cfc81c9aa6c227363ff7fd7c5d7f4"],["/categories/Swift/page/2/index.html","e2c8aa4d0932783337c1f6b0fbdc142a"],["/categories/Swift/page/3/index.html","995e9c55a0d45e58b1af27afeb48abaf"],["/categories/Swift/page/4/index.html","3b6484115309026ad7032d9c53ab5286"],["/categories/Swift/page/5/index.html","c271c52b803ce74679448a97e16c51f1"],["/categories/Swift/page/6/index.html","775f53594b7bcab1716069a83dca62a8"],["/categories/Swift/page/7/index.html","5253c110b94ee707e930356ec554bdb5"],["/categories/Swift/page/8/index.html","21379bc4f4e79cd69e454f9286426860"],["/categories/Swift/page/9/index.html","df57da74dcd150fce20938f5ff139fb7"],["/categories/Swift5-2/index.html","4de5c34a0ae96795dc1a1c40dfe8717c"],["/categories/SwiftUI/index.html","4b17fac770914a4ed91da35017294274"],["/categories/UICollectionView/index.html","3492328875a137b3fafce28812eb823d"],["/categories/UIImagePickerController/index.html","31d60a4ee607a15834871b001caee140"],["/categories/UIKit/index.html","2acddc16e9a53031257d240c4c536d15"],["/categories/UIKit/page/2/index.html","15f19556ecfeaab02fdd991b2ad290eb"],["/categories/UIKit/page/3/index.html","da92e2a0bd6efbe50c88b0b97d444f78"],["/categories/UIKit/page/4/index.html","7d9c563a7ed43c74d5259350fdb52c5a"],["/categories/UIKit/page/5/index.html","35be72f7c1918eb9a58145de8d807620"],["/categories/UITableView/index.html","31e6e7c86d23dc159bde4e8080ca8457"],["/categories/Ubuntu18-04/index.html","69a4c74112c24be6e00ec46059d1dfa4"],["/categories/Ubuntu软件源/index.html","7221b51df8433b75db854bcce54ce23a"],["/categories/Uniquely-identifying-views/index.html","3b91ecc9cd87f7a514ff714b3b784781"],["/categories/VIPER/index.html","a401640f049fefce09fb68464581781e"],["/categories/Vapor4-0/index.html","0a6127d76e5cd8badcae7d287844a1f4"],["/categories/Xcode/index.html","5170334d25c8444f13dc7bccbd0809e4"],["/categories/appleOS-Networking/index.html","5aebd1d0481fdb5fc6dea837beb299a0"],["/categories/enum/index.html","9e546d54abc1bfb947c38a6a510a3df4"],["/categories/iCloud/index.html","60066229f90b1440353de545d8edd904"],["/categories/iOS/index.html","8eabbd4326560a918906855a23d5a599"],["/categories/iOS/page/2/index.html","d401af9ee3b481d52bb0cb08c3cc3af4"],["/categories/iOS/page/3/index.html","c4926cc381a3866aebd4b496811a32ad"],["/categories/iOS/page/4/index.html","55d216cc14cf3a4b1a0edabdc66733d4"],["/categories/iOS/page/5/index.html","f474ec0ca04f5fc7b4a7c649ae2d7350"],["/categories/iOS/page/6/index.html","d174c468b3d81d4e9ad34978aaac6605"],["/categories/iOS/page/7/index.html","221d4d0963e65b816ccd98f650c43bd2"],["/categories/iOS/page/8/index.html","365cc70ca656f5c9ae3eb53fd4a91b34"],["/categories/iOS/page/9/index.html","f8a192c4eb7063c0d094b8cfb1e59862"],["/categories/index.html","b31acc2c26948bbee3a2e5aa5b07e828"],["/categories/random/index.html","e3e14be65449e095600fa521dde5dffa"],["/categories/三方类库/index.html","69cbf7fb78bcc46cd3f34db07736959e"],["/categories/函数式编程/index.html","d549b05fd939ed4606882ab06240d11d"],["/categories/子类化样式/index.html","dbfb78c3915abb657d9396e59396d06f"],["/categories/架构设计/index.html","af7f6c9a3c31f295c63e3b2714704f68"],["/categories/用户体验/index.html","eacaa508ff9185fbeaba57a1269564a5"],["/categories/设计模式/index.html","170544f8dc294dd68827c5788d676e93"],["/categories/设计模式/page/2/index.html","d437e7265994c468bc2c83e662486677"],["/categories/设计模式/page/3/index.html","5354041edc448f322a855f452f18ac9f"],["/css/main.css","d5a99d06606885fe628ca6429eca2f8e"],["/hello-world/index.html","677e100e3948bd6eb495a17075c9b139"],["/iOS VIPER架构深入实践/index.html","0871e564dc25ec6b12e1b1112e2bdbb6"],["/iOS 自定义视图，输入表单和错误提示/index.html","d7bd2d79dc8c85d09af2fb6045a25638"],["/iOS如何使用iCloud文档？/index.html","509c6e5cca2a3c8f0a3e2e3b6e7895e2"],["/iOS子类化样式/index.html","f61ed9de0f927c202b450ee2df3c7ef5"],["/iOS自动化布局编程/index.html","841d9a2e5637f3d81cf0485953de0dd9"],["/iOS自定义转场(By Swift)/index.html","65664a40323053177a7a312cb4e90a15"],["/iOS项目架构：使用VIPER/index.html","923716a3a2df6fea7d05799d26e94049"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2ab258445d62aa774f87b7e9f13161c4"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8c93a79ed2a0bc2330b468a8a1705804"],["/page/2/index.html","eb1766989e60bdeefd1ccb4414a96fb2"],["/page/3/index.html","0e3676fa655634198dcf033c9906b1e9"],["/page/4/index.html","de743272a243ff10c68cbb768ae1ab32"],["/page/5/index.html","512cbe2abde9ce2b38aa2c4b1e5fb7da"],["/page/6/index.html","03b1e162248c508c23557adde9bddfe7"],["/page/7/index.html","a27ab49d4c2593aa7e782ec6e98fb1ba"],["/page/8/index.html","387dfb621b2261b647eeb26694608222"],["/page/9/index.html","708f9af2a1502c049b3de353746fefc6"],["/schedule/index.html","b0a115c703a83fe8664c2db1bfb28f63"],["/sw-register.js","c8f653afb453bc129d9678bbca4a0fae"],["/tags/Advanced-Swift/index.html","561b2e0c74e8ab10edfb7d8df3d42e35"],["/tags/Advanced-Swift/page/2/index.html","bb5096ede5cecc228835a727f7944055"],["/tags/Build-in-Collections/index.html","e6d4b29147a89bd00d24f7cce8faf1e3"],["/tags/Codable-protocol/index.html","e342caf46aa930040a218163e05b338b"],["/tags/Collection-Protocols/index.html","27053cef60be57b67629006bb6179e87"],["/tags/Collection/index.html","2894be505c150104ba38b22ea73884b9"],["/tags/Collections/index.html","708b77f3c7a4454799b3522309962c19"],["/tags/Combine-framework/index.html","80e2d2d3b8a2f2acd669cdabe147f0b5"],["/tags/Combine/index.html","f1677078816b4098c0b4f05d5bd96292"],["/tags/Dependency-Injection/index.html","c2542518cf307d3f6b9b1d22cebb49dd"],["/tags/Encoding-and-Decoding/index.html","1ad93a98bb3170b54af954bf60b49e66"],["/tags/Enums/index.html","be23a2f5502fb792a3bec50c87dace4c"],["/tags/Error-Handling/index.html","509d14d543a00b0e3e511f991f8868f9"],["/tags/Functions/index.html","f2441d1c97d81e4d72f7f64096586119"],["/tags/Generics/index.html","d666b95c6ae640776a3de6a868496668"],["/tags/Grand-Central-Dispatch/index.html","ffc651611e20da338e93f8e1ba316563"],["/tags/Modules-And-Hooks/index.html","af9c7df43f88220b203ed9e4cf664593"],["/tags/Optionals/index.html","56154d5aafee0968fcaf18ea2e48f0db"],["/tags/Promises/index.html","ad9976c30cb882f17ceb7c05e119db92"],["/tags/Protocols/index.html","4934bb1975eff89aab8168972f29ce6d"],["/tags/Result-Type/index.html","ce32791c6663511168ab3aa6ce468d48"],["/tags/Server/index.html","d7f3f3cc016419ddbc62ad858252c6f3"],["/tags/Strings/index.html","007165f8c9a81dc109636adf126fbed3"],["/tags/Structs-and-Classes/index.html","f9f1bcaf2768cee3833c0b95d9eb3322"],["/tags/Swift-5-0/index.html","2dbb197c5c192823a06e7d57f43f5b03"],["/tags/Swift-5-0/page/2/index.html","d230b1bc4b5747bc765a2a835a5b02a4"],["/tags/Swift-Package-Manager/index.html","3f4ceeacdeb2c4c391e60aa0b23fb8c7"],["/tags/Swift/index.html","62e7afaa3d962134a0cc2a2a20070ae7"],["/tags/Swift/page/2/index.html","943c2a6ae7e18f090e40e1833b973d05"],["/tags/Swift/page/3/index.html","a0f10d958f8bf0165e47e5e0a1272c5d"],["/tags/Swift/page/4/index.html","baa0310d4c6c06452519b0e2c9e5f13d"],["/tags/Swift/page/5/index.html","2b922ab1102cdfd620dc4e683d9844a1"],["/tags/Swift/page/6/index.html","71acc2b265295f67a19b2414749f1385"],["/tags/Swift/page/7/index.html","f7dca510fa647ee3efa9a8a7601adabb"],["/tags/Swift/page/8/index.html","255890cac576e863c15591a108579af9"],["/tags/Swift/page/9/index.html","5c0331ede363e77ccaac85296384ac25"],["/tags/SwiftUI/index.html","7491d083cf7952eacd7ac04af243cc08"],["/tags/UICollectionView/index.html","f570aee4533656a97a16aa956c6c0ba9"],["/tags/UIColor/index.html","ddeecfe9813429349130972ba8c17617"],["/tags/UIImagePickerController/index.html","368f2e9468112e63cdd04af354f34952"],["/tags/UIKit/index.html","1f554b11e0c4914bd132a4f76b393d22"],["/tags/UIKit/page/2/index.html","046224c3c7a40c39f3ce1ded671fef9c"],["/tags/UIKit/page/3/index.html","d08b0c539fe208ffa523c069a2edbcc6"],["/tags/UIKit/page/4/index.html","e1452ca16b989cd5c39ee50ed916150e"],["/tags/UIKit/page/5/index.html","b5bf3b2031debbf8bd4bb2c95aa85e70"],["/tags/UITableView/index.html","c1683862d2e6ccc05ea68f50a59c7526"],["/tags/Ubuntu/index.html","a6ce38fa0431da44445045dcd166d5ab"],["/tags/Uniquely-identifying-views/index.html","64ec9e5a0e9963938fff14e2a94a116f"],["/tags/VIPER/index.html","d13a992ae8d672681f8365d41c52824d"],["/tags/VMware/index.html","2f0d3087d3a3d78f11dc5da5f5d5249f"],["/tags/Xcode/index.html","30e223b8792cd2442222a73f287f11b4"],["/tags/appleOS-Networking/index.html","66fe7025d16653d38c2b8984bb42d957"],["/tags/enum/index.html","742dad5035046c03ffb6edb9c3fcea3e"],["/tags/iCloud/index.html","a929f72e059cb89de9b1cb4d2d08b0fc"],["/tags/iOS/index.html","5db19f7818459fb0cf11f1ba2b1071b3"],["/tags/iOS/page/2/index.html","f241145f8c397309d333099b94356219"],["/tags/iOS/page/3/index.html","fd842a65e5a3dfc0917349f527cf57b5"],["/tags/iOS/page/4/index.html","6d045d73ca8011928ecc1704d5e94f01"],["/tags/iOS/page/5/index.html","ac34eb14bb38ab06eb71abcccc0b0ae0"],["/tags/iOS/page/6/index.html","ec253a2af6048ee6e7ebe8310b5b1889"],["/tags/iOS/page/7/index.html","e64ec86988d0029907118c48f13f922a"],["/tags/iOS/page/8/index.html","a43e1f8a031a37b98cad1f14054ebbb5"],["/tags/iOS/page/9/index.html","d3d658a5d0392ad3b6ed2b1fd3123117"],["/tags/index.html","000399cc263df8435ce178e7d34008b5"],["/tags/non-optional/index.html","c63b017da95c8d62bae69106fbf72ff9"],["/tags/random/index.html","ed8b1fa1e169292dd09ec7963589c25a"],["/tags/transition/index.html","e1853abcdd292e892e0412670fff19b8"],["/tags/三方类库/index.html","848aa9e16251075c2e1d5555ed8c62ad"],["/tags/依赖注入设计模式/index.html","d49d85193fcd98f5c7a800d8e623e7cd"],["/tags/函数式编程/index.html","26075fc66171a106e1ff229b66854a52"],["/tags/初始化模式/index.html","99762fefe9f4c8e111ec8278ce1b3e8a"],["/tags/单例模式/index.html","bbdf1f10a3e4865cc34d2ec8214b8928"],["/tags/原型设计模式/index.html","c8f2c81acb11b03000f74eaa658f8d9d"],["/tags/命令设计模式/index.html","d27ee146f05950eec998165c51f53528"],["/tags/外观设计模式/index.html","62d7de455c33ac5ee446f33f7dd8acb1"],["/tags/委托设计模式/index.html","dba1bc24ca2b6f170e1c0d5e86bb5fde"],["/tags/子类化样式/index.html","49d686e2a0b44547a116b6eb5b70da1f"],["/tags/对象池设计模式/index.html","b2792e71a3733849e0e75f28f2f0ba64"],["/tags/工厂方法设计模式/index.html","866eac1aa7af0d3344812e82fcfc0561"],["/tags/工厂模式/index.html","cc0403130f4738328fea741ecc5605a3"],["/tags/工厂设计模式/index.html","62acb31ef5c9f5231710dec16752b4da"],["/tags/懒加载模式/index.html","3571dfe2174fd14a1eafd8cd96ddafeb"],["/tags/抽象工厂设计模式/index.html","6e56ae6b1005323ba90c129f63e81968"],["/tags/构造函数/index.html","c6535a77a7534a2a679d0df85b7968d2"],["/tags/架构设计/index.html","aecfb9d3aea34c6c43a8ba0d0e798337"],["/tags/生成器模式/index.html","592b3653173149df705831d79136ae16"],["/tags/用户体验/index.html","13c57b32109fdeda301aab1a03237b0d"],["/tags/自动化布局/index.html","ed64a0c3e78f32a7917b69c2dc53a877"],["/tags/自定义UIView/index.html","432d08244ec744af18884790e43415f1"],["/tags/自定义转场/index.html","6904e822a799ee3028d38e2e79fd21c4"],["/tags/自适应布局/index.html","d9f561b4f4db4a02f8f1b55527439060"],["/tags/设计模式/index.html","5e531434114f9327c4803d52f68cb3e5"],["/tags/设计模式/page/2/index.html","68fe6c6014f18f370eee1c74ddc107a9"],["/tags/设计模式/page/3/index.html","ea2bdf6ed6b1af21a13ec2b1b262c493"],["/tags/迭代器设计模式/index.html","00f99e65ceffc78819ad2ff78046c694"],["/tags/适配器设计模式/index.html","c3fed1e2f07f154756dd85875070d62c"],["/tags/静态工厂方法/index.html","32026b9ce7857513e572043c94807e44"],["/为iOS应用构建输入表单/index.html","b1f73af80554b8fcb98f36222c4ea175"],["/产品开发的幕后花絮/index.html","8d28aa6d47c64f4e7aec2ecb7b14ee9f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","42560bdf70071b6419dd0ef1ec24fe1c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","47dac6a3c331a8abe93b49cc45f596a6"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c4649d9a1426f30043b7b608458402c7"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","cc5a11f14cde15a0750e6f29daa23b86"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","059e149779d6b8e3dd216466c577c6ae"],["/在Swift中创建自定义集合/index.html","4b1b70416fdb6422428413b990cf01c5"],["/在Swift中处理非可选选项/index.html","0055c9b9c8d4860f6793d8d0be054c9c"],["/在Swift中生成随机数/index.html","62c7da4eb3236250430d8ddf72df8263"],["/在Swift中重构单例模式用法/index.html","0bc4f4fc30c7a682883fcd137893b258"],["/如何为VIPER编写服务？/index.html","1e3e549049a4ed33afb85f78d274d2bf"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","1627bfb1c82a670fd3b6647ad537f145"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9086827a1d7c028fdc3426bf784005ae"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","493f59387ea1af79a32d8801d88d335a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e7748cd233d981f05a41632e81d96185"],["/掌握VIPER架构/index.html","4c5ff305bb0e1e08db8f8ec96a3cb614"],["/揭秘 WordPress Hook 系统/index.html","f3bdee2440e68505f033fcbe6ea5484e"],["/比较工厂设计模式/index.html","95176c029d148f78ae0eb7e59cd72ac1"],["/深入了解Swift中的Grand Central Dispatch/index.html","947a20c0074b87239cf8fff1e9d6afca"],["/深入研究Swift框架/index.html","82e999c95068e239777c322a68dfc0d8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","a1ff8c04e90df126f3279d3c4036d76b"],["/选择Swift而不是Objective-C的5个理由/index.html","89ff111f7a8087ba7256369f22c0d42d"]];
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
