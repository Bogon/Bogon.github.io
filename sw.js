/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","eac064faff50d6c5492ea50d1b2ca5b7"],["/Advanced Swift系列(七): Strings/index.html","b2a9128a190d4f9bf4fb225a2fdcb5e7"],["/Advanced Swift系列(三):  Optionals/index.html","82cf84578b684a538c6d758daa83bd98"],["/Advanced Swift系列(九): Protocols/index.html","217eecae2586cc7636e05bd941dea52c"],["/Advanced Swift系列(二): Build-in Collections/index.html","d7555c2aec18bbf439f8b25318cf76cd"],["/Advanced Swift系列(五): Structs and Classes/index.html","940c92a02645bd76814d3a663ab209a4"],["/Advanced Swift系列(八): Generics/index.html","9de943cfdef21e29e9c7d2f62877405c"],["/Advanced Swift系列(六):  Enums/index.html","81d422509968268651b085ed19822d4b"],["/Advanced Swift系列(十): Collection Protocols/index.html","8c252c588db0855f565b9a798ab28659"],["/Advanced Swift系列(四):  Functions/index.html","8da2d014c32e8eb2ae88101f876160cd"],["/Functional Swift 初探/index.html","ca0b4ea8d0fd028fadff59294e79af1a"],["/NSCODER和SWIFT初始化/index.html","f2213cb2fc98ddd5d231d1d826c5ae47"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f9d1ca33c92cc3ff0d4b1f9789942049"],["/Swift CompactMap vs flatMap：差异说明/index.html","d1031750c319ee1f781365b5293a31ed"],["/Swift Grand Central Dispatch 深入实践/index.html","8125f5d49afd8591d7a03a05586a0ad5"],["/Swift Lazy属性初始化/index.html","1837688cf91c8eac45a1c2b551b4a53c"],["/Swift Promises 初体验/index.html","0313f841a16b0c72f1b20eef8f895c15"],["/Swift Promises 探究/index.html","749e06250a7665b5fe6e7fa179d13fa9"],["/Swift UICollectionView使用指南/index.html","65acf08931cde61e2edc740f99653e0a"],["/Swift URLSession 和 Combine framework/index.html","331aff848021e3e87d728a14066e0a16"],["/Swift 唯一识别的视图/index.html","c2c2ae271e9ce9db6040ec5e14f408b3"],["/Swift 如何学习现代UIKit？/index.html","ddb5df37c7cf4103ea260a19195b3426"],["/Swift 用 compactMap 替换 flatMap/index.html","d6750fda1cee07a9cbb9603646495512"],["/Swift 选择和播放视频/index.html","abab8734034f9b07ca7b187512889425"],["/Swift中UIColor最佳实践/index.html","25a033205bd5ebd53e291e3cc1885c6b"],["/Swift中快速简单的工厂设计模式/index.html","62f7b066e384845e9f8c4cd32d3fac80"],["/Swift中构造函数与静态工厂方法的比较/index.html","2009f5b5113e83e421945e298c58e58b"],["/Swift中的UITableView教程/index.html","cf48984465f02f4e787af5f79f66a8b9"],["/Swift中的懒加载模式/index.html","dac0a0fb079df32c6ce44a32ef1d1179"],["/Swift中的模块和挂钩/index.html","6ae07909f9e699e206a652eced549b9f"],["/Swift使用布局锚点添加约束/index.html","1e772a8096de0282f9ec32d7f29f5c41"],["/Swift依赖注入设计模式/index.html","02435baa2b865e4e9905596fcb22f028"],["/Swift关于Dependency Injection (DI)/index.html","2ecebb1703d9b08b7e569c17207573db"],["/Swift初始化模式/index.html","d0f16ecc6e3051aa818adc266b4519cd"],["/Swift单例模式/index.html","33d3be76a63464fda69e76d17f2d6171"],["/Swift原型设计模式/index.html","3f42a45abd7133f80a1e70e5f0b68b07"],["/Swift命令设计模式/index.html","dbcf7b39cf34f9dced2c51c1cddcea6b"],["/Swift外观设计模式/index.html","8d4b02ce1b4797c051778a19cf0c8e25"],["/Swift委托设计模式/index.html","d0ac6be58b0347cc30983b6d0ab76071"],["/Swift对象池设计模式/index.html","ac44076d4b0ac647c4aba7628a95a6ef"],["/Swift工厂方法设计模式/index.html","df531310a047a42550777b7b12b80914"],["/Swift带闭包的懒惰初始化/index.html","380f2a5634142e3874bd50c62365e3c5"],["/Swift抽象工厂设计模式/index.html","a258a9a0985eda837c9a459fcb074f3c"],["/Swift掌握iOS自动布局锚点/index.html","b565b81fdb763ac95e821d43cd1f0135"],["/Swift支持旋转的自适应单元格/index.html","3392efff449bcdc73a808c5475ed4cb6"],["/Swift枚举值/index.html","4ab935656306e3c9dc60c381faf34b8f"],["/Swift生成器模式/index.html","64ae9799077e4ab4a18a9f7184921ec2"],["/Swift结合Xib文件自定义UIView/index.html","5a8118ee732458447cde818b1d9694cb"],["/Swift编写的20个iOS库(一)/index.html","bc4312e79b82299863d78e634c596827"],["/Swift迭代器设计模式/index.html","77c4d70bbcb887436f8a077a54a1db6e"],["/Swift适配器设计模式/index.html","41bcb932c942d04271a4d08df744c0b3"],["/Swift静态工厂设计模式/index.html","af1315c976bff4008d9bdfda930e6962"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","02a03e030cf48188fbb04190dbdcde3d"],["/UICollectionView data source and delegates/index.html","ecfc2af20bfaa68009045182c4e6aa02"],["/UIKit初始化模式/index.html","91294ca23c880a59153c2200e56178d5"],["/Ubuntu18.04替换国内源/index.html","1d6e2fcf768d3392ceddfe901905f90d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","b4dcdce5fa49f135afa1cc7570f1e3b3"],["/Xcode扩展/index.html","f72ad581694be4dfe933e2ba45f41c98"],["/about/index.html","6c4d8cb404994b02301f7bf8d3d1d12f"],["/appleOS的Networking示例/index.html","8d692affe6aa81a1ca26e2b2382b43bb"],["/archives/2020/04/index.html","7371502244c821e7e3cd831c1c41ea91"],["/archives/2020/04/page/2/index.html","8f0ad41bdd2d5f46c6cc893ee05efb8b"],["/archives/2020/04/page/3/index.html","959c6101d04078cddcf6fdf61ea91550"],["/archives/2020/04/page/4/index.html","85727c234e5933f39809323bdf657ae5"],["/archives/2020/04/page/5/index.html","85902fcc9a4e24b7c1bf1ac52c77bd52"],["/archives/2020/04/page/6/index.html","46951faed2523ddf49aa05729a59c299"],["/archives/2020/04/page/7/index.html","8941a0f6718d662c0ee5c2437e955bb3"],["/archives/2020/04/page/8/index.html","bae14b04cb4d84b38b5a3478bda485db"],["/archives/2020/05/index.html","fde1f6df170882bd7d888fe6e8c5ebd9"],["/archives/2020/05/page/2/index.html","f0a1c7f3a97c88f2231dd4ef8ecb9ab0"],["/archives/2020/index.html","0a50d741323991c20955dfb4fd049c4b"],["/archives/2020/page/2/index.html","db1c16a00ab2e2dc34cb8693f53dc771"],["/archives/2020/page/3/index.html","415a47e3688f0133706ef2e89c9edee5"],["/archives/2020/page/4/index.html","3b7bf7acafe49518d3e869e89d369a67"],["/archives/2020/page/5/index.html","1420543d3aab577dec89bcc568ff70c9"],["/archives/2020/page/6/index.html","0d7383b06f76a5a01c1ec9ed20dff625"],["/archives/2020/page/7/index.html","2cf88b272a9b9be3a0bb4fc01aaea502"],["/archives/2020/page/8/index.html","c658ddc94cdbcdaf041dfe770985651b"],["/archives/2020/page/9/index.html","9f2c70db62d9a8580f9fcb7ed8274263"],["/archives/index.html","d4ebd991c34b483d839b920fb209fc71"],["/archives/page/2/index.html","9d924446b3765c52faa0777b276e0560"],["/archives/page/3/index.html","17979d7e5416dfcda4352ae92e52b7b3"],["/archives/page/4/index.html","263360b3daba72d3ebbcde289476077e"],["/archives/page/5/index.html","d24e013eee0207f11c430d726e2afd94"],["/archives/page/6/index.html","c9c4a4f5c2a699c3508935c7b2ea32d0"],["/archives/page/7/index.html","fb74f13542265acc49bbdcc72d7c98e1"],["/archives/page/8/index.html","39854f5b2b4b030fa4422b345cae6b92"],["/archives/page/9/index.html","183b7bd280e503b1b1bf6b821023539b"],["/categories/Advanced-Swift/index.html","90f508602ff285cfb164679091caaf43"],["/categories/Codable-protocol/index.html","fe6c39deeecb4096522144d19e7e9741"],["/categories/Combine-framework/index.html","795ebcf74512ef7f965a5e7a7e232fb5"],["/categories/Combine/index.html","0c6a351db079f6446f1d1b00a4bebd41"],["/categories/Grand-Central-Dispatch/index.html","8db5630708768c69ff6cbcd52c3a3f26"],["/categories/Hexo/index.html","5f1c8bc0a466450a720bd306edee759d"],["/categories/Promises/index.html","b1c0eca836fd08f1c9a454d991f4b883"],["/categories/Result-Type/index.html","7942d6962d4e7909fa75dd7a108b8d9f"],["/categories/Server/index.html","17f3f46f6d83cbad86f4313b4d48d879"],["/categories/Swift/index.html","0e636d26ee9f56dd815d0d3aac07fbbd"],["/categories/Swift/page/2/index.html","6a0d2bcff8715c8ab6c28480a92f6faf"],["/categories/Swift/page/3/index.html","6b36e6c63f4a9d8571828dd6f90e8b9e"],["/categories/Swift/page/4/index.html","2964d5ed0dd7b1b6cc7b4e2114100797"],["/categories/Swift/page/5/index.html","bdeb4cecf13865688fe92bb55e308448"],["/categories/Swift/page/6/index.html","c44037d41df3363af925b191d0a6f077"],["/categories/Swift/page/7/index.html","a993a44143a4992efd02f2278048b33a"],["/categories/Swift/page/8/index.html","3583616e93758eff1e4ea58a3133f475"],["/categories/Swift/page/9/index.html","96517c9ffedc22154459da864cdc5bdd"],["/categories/Swift5-2/index.html","eb86a45219130c64d533c0b0f675a791"],["/categories/SwiftUI/index.html","6bb4f0be03d7c369c5c61ffc8002f2db"],["/categories/UICollectionView/index.html","61423fa8317e766bf8e99394c8e12b7b"],["/categories/UIImagePickerController/index.html","47e59eb8d8c4fc534d7620248fae4855"],["/categories/UIKit/index.html","c59874d0ea06f3f10814b4b0430be665"],["/categories/UIKit/page/2/index.html","feaf57b02de96061beb89d3758a13035"],["/categories/UIKit/page/3/index.html","24649ed460cd0cb57019ff2605958075"],["/categories/UIKit/page/4/index.html","be8b5559e94d6aa30f7889164173e067"],["/categories/UIKit/page/5/index.html","802af0073632f712b493d878f839b674"],["/categories/UITableView/index.html","b6477445517c123cb2a0bbefd04162d7"],["/categories/Ubuntu18-04/index.html","aa8a4b260823bf483de228019af20fd7"],["/categories/Ubuntu软件源/index.html","5f9790204bd94f32344230baaab9b4eb"],["/categories/Uniquely-identifying-views/index.html","7883706a90741e332dc5a82592b6fd2e"],["/categories/VIPER/index.html","f1d7628bfa8b589fabde049553573612"],["/categories/Vapor4-0/index.html","65deb4e37c29f54f71dbd670c0be4248"],["/categories/Xcode/index.html","c24694a9fb2c6384dd9c56f44abed9f8"],["/categories/appleOS-Networking/index.html","2755b12cbd077843d91d090a8f3dd646"],["/categories/enum/index.html","64281493501f1c9d30c2dc22609dbdd3"],["/categories/iCloud/index.html","c137555c4e269749eb4fd837852d4dd5"],["/categories/iOS/index.html","3a3d6069f16bf373b448cb53245fafab"],["/categories/iOS/page/2/index.html","1f7a80955b048a32fda53e78eea6eb29"],["/categories/iOS/page/3/index.html","0405b611fd8256cf5a452be5ec7bbf7d"],["/categories/iOS/page/4/index.html","d0dc68cf60bb5b9fcacb0b5ac8ffd1ae"],["/categories/iOS/page/5/index.html","f833527bc2e4858484b248f7ee508484"],["/categories/iOS/page/6/index.html","1acaf483f7ca1532e3f85acadf7a4e39"],["/categories/iOS/page/7/index.html","52818c910eb464c51a3fc98016d1912b"],["/categories/iOS/page/8/index.html","0013b770252931cfac6966dc597bb8aa"],["/categories/iOS/page/9/index.html","d2d85ecbb96880eea121d2d1825cfaca"],["/categories/index.html","0f79e6833882b3429635dce858e710be"],["/categories/random/index.html","2a5e5b0add48dd86fd955583c3ca4424"],["/categories/三方类库/index.html","e49d4e87df10a3c69ddfd5c27b6c802a"],["/categories/函数式编程/index.html","52e6ba50ac5a70e459a1425f96dd4221"],["/categories/子类化样式/index.html","d8567852984d6d58328bb68723b9cb81"],["/categories/架构设计/index.html","b31987d0cb2099cc71ec5c0bb4530a4d"],["/categories/用户体验/index.html","19eaa84700b549e09fce0062c44616a3"],["/categories/设计模式/index.html","504800e7c6d335d7495aa7bd3460d840"],["/categories/设计模式/page/2/index.html","a83335536e0efa83741a688d51f7bb84"],["/categories/设计模式/page/3/index.html","49507d51053b997078b00f96c58f862e"],["/css/main.css","fb62b7091c14cbc0355172ea685833f1"],["/hello-world/index.html","2862ce9ea8d6de55ca38b0ab0136e359"],["/iOS VIPER架构深入实践/index.html","ce899d321121e3b053375155f4646727"],["/iOS 自定义视图，输入表单和错误提示/index.html","25d41ce374bd1c5467c23dc8e65bb184"],["/iOS如何使用iCloud文档？/index.html","c61e938b1faecc1feae000c76ae446d8"],["/iOS子类化样式/index.html","3ef6651bb581546d77d74821599f53cf"],["/iOS自动化布局编程/index.html","2e866dda6237ce424cc2e00aef4c6df5"],["/iOS自定义转场(By Swift)/index.html","3713cdf92307d6a8a921fed69e522321"],["/iOS项目架构：使用VIPER/index.html","ed59dac149b01d1296b69c74456f3ccb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","87413b557ba2ae6635136225f82e2c6c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9fb75ef993f1279b9b81ebcbabd0dbab"],["/page/3/index.html","0da01cc280630f96f4e8c45b96521588"],["/page/4/index.html","9f76ae2da8ef57d2c4c68ff498fdf3f6"],["/page/5/index.html","48d24098098000251c1e050fcee6b844"],["/page/6/index.html","2e9cb940aa376e66df1be40beec18577"],["/page/7/index.html","23637984885482e35b90f78bba6dd263"],["/page/8/index.html","c79c53f6a0668964fcd72e6b0f59c3c3"],["/page/9/index.html","e8279561cd1472acdbc9473bfdb7b492"],["/schedule/index.html","c2a2c1a3f174664119e3ff9d80b28844"],["/sw-register.js","d310e90c60dc55887c5be6bbd6261b0d"],["/tags/Advanced-Swift/index.html","70502c00710a6d2e9e55460d6c0e7269"],["/tags/Build-in-Collections/index.html","e7cd1dbe1638034c003bba9a17958e2b"],["/tags/Codable-protocol/index.html","1b2cf17a120f4c0893fc9750568c9680"],["/tags/Collection-Protocols/index.html","9f94edae2b328a77020857af7158d2e0"],["/tags/Collection/index.html","519c6d3a3243ccb66b9f060b4cea0a74"],["/tags/Collections/index.html","d668136b3d40359ecd454f23173e49c3"],["/tags/Combine-framework/index.html","4ddc19124c7425bb35a522618f810f92"],["/tags/Combine/index.html","5f3ce7519bf9af7ec742bdbe4b108200"],["/tags/Dependency-Injection/index.html","1bef87735440960bd7803cda416c5081"],["/tags/Enums/index.html","5d4cdee73eb92d5aab1ae9c5d062ade8"],["/tags/Functions/index.html","c4fc84738548b575cf2b45c10116dd3d"],["/tags/Generics/index.html","93cb327f3e7423e91b5bbd060a1dbc2b"],["/tags/Grand-Central-Dispatch/index.html","c6f9dd264d127c1c49fa20d983b7578f"],["/tags/Modules-And-Hooks/index.html","731f6a2d69abab3c45a2d7ac5cc5ee6a"],["/tags/Optionals/index.html","3d3d05f44949009e0fe0e097c3da43e8"],["/tags/Promises/index.html","527fece15c26661e520e5eaa0af3b0ad"],["/tags/Protocols/index.html","d6a2d4d9651f3a5186ec08b99980e93f"],["/tags/Result-Type/index.html","e2a04a3f1a190a90a3a7c765e730f2b0"],["/tags/Server/index.html","8e8253e6229a87f8d443a127702dd9fa"],["/tags/Strings/index.html","f430b347baac7c98c8792105dc1cb3ba"],["/tags/Structs-and-Classes/index.html","83a50c6f0932099a7a4dd1531038c820"],["/tags/Swift-5-0/index.html","f7a46c17ffa4b7dc70ab4dbfe0a3e3a4"],["/tags/Swift-Package-Manager/index.html","9fe4e73b434ac864a4e1e285c6ec9cd2"],["/tags/Swift/index.html","da10e955889f1ea6f052a045e19667c8"],["/tags/Swift/page/2/index.html","9e0322703090e0308c4ca300561fef95"],["/tags/Swift/page/3/index.html","97985b6040748b78b09679fb7ef9ed61"],["/tags/Swift/page/4/index.html","3c2803f74d40863db0ddc8081d35fba9"],["/tags/Swift/page/5/index.html","d2a431744ccadb1445ea97a2e51f2d89"],["/tags/Swift/page/6/index.html","23299bee9eaf9e34a1b0b9409e15ec51"],["/tags/Swift/page/7/index.html","50f53afe099bd22bc6010616f40eefe6"],["/tags/Swift/page/8/index.html","b1fa8aad21cba09b5bc3614cd44c9e67"],["/tags/Swift/page/9/index.html","e26c74a5e7f1b8516f9f6936340e5cc4"],["/tags/SwiftUI/index.html","c666df8c63e957b6ca11283446351757"],["/tags/UICollectionView/index.html","5ee3d9890b496335da75b25dd3d89f6b"],["/tags/UIColor/index.html","9f922e96d657939aaa48edbc0db19236"],["/tags/UIImagePickerController/index.html","402aee59b07a1fad2502db29d6c2a570"],["/tags/UIKit/index.html","4c52de5598af1d277c144240103dcc4a"],["/tags/UIKit/page/2/index.html","596314a2066ed79b4f03a7faabd4598e"],["/tags/UIKit/page/3/index.html","ea842c68000bca8b53259bbd925e346d"],["/tags/UIKit/page/4/index.html","5b7ecdb20d810f3a278d09400062c91e"],["/tags/UIKit/page/5/index.html","74231f3931b99b745150483cb4a19bb8"],["/tags/UITableView/index.html","de4e831056415c0aa2d50c164ffe2eb7"],["/tags/Ubuntu/index.html","f8309eed993a85e5ef007395a6a96fad"],["/tags/Uniquely-identifying-views/index.html","b88e90c75a765df6b470107bbf86c009"],["/tags/VIPER/index.html","60b249a9644014d5f050266b9f6db3ef"],["/tags/VMware/index.html","cfcab2e6e50f02fcd3f5783f5a986998"],["/tags/Xcode/index.html","54146521a7e7d4b15c95987e2781adea"],["/tags/appleOS-Networking/index.html","da37af25b75ffe784413ced809b0bbf9"],["/tags/enum/index.html","e3d4b3bff6cfda2c9cb70bb580675ea5"],["/tags/iCloud/index.html","598845f116f5fabc5658cdd263efb174"],["/tags/iOS/index.html","6d6db8d720e927eac7d8812cf96cf389"],["/tags/iOS/page/2/index.html","3f9019b65bffc62f478caf3271a5288c"],["/tags/iOS/page/3/index.html","e68ae0ac7ed50e598a5474cda884a267"],["/tags/iOS/page/4/index.html","62f62553d8af52eaa118317b0b56c3e5"],["/tags/iOS/page/5/index.html","440af3515dd930e64c03a349945fc4f3"],["/tags/iOS/page/6/index.html","fc918392abeb1548ccb073b6c7ba7585"],["/tags/iOS/page/7/index.html","b84826035426362c1ca200079ab50bb5"],["/tags/iOS/page/8/index.html","36c3291576de88ef6c68c90a08435eea"],["/tags/iOS/page/9/index.html","2484e7b75920d6de1e04100a0908a2c8"],["/tags/index.html","e18e9285fa5a137e5f7a2d7d29609ef9"],["/tags/non-optional/index.html","089e478d0d69f91f46450ee87cef9227"],["/tags/random/index.html","fc41c1ad3fcfbaced90d6b19b0741d7b"],["/tags/transition/index.html","1ca7951102f14d526f1b0b86a5a5c7c7"],["/tags/三方类库/index.html","fdaddca25048c6ca86e225bbc4b6fbfa"],["/tags/依赖注入设计模式/index.html","0f03d7dd8dac4f3a7f327cd7b50cadf6"],["/tags/函数式编程/index.html","0f70bd7a53ef2771c689e6db4c1f7e6a"],["/tags/初始化模式/index.html","db80b86f2fd9578899358a425dce8e09"],["/tags/单例模式/index.html","960d475a462d781a957d9295194c8f90"],["/tags/原型设计模式/index.html","7b38f7314a6af258e2ee3e4dd533e735"],["/tags/命令设计模式/index.html","f695e9ddb39029e00192f249183ce45f"],["/tags/外观设计模式/index.html","f8935f67455b3015fa26f69c77954f6c"],["/tags/委托设计模式/index.html","342c9c395c9e4a979058be91ad351b76"],["/tags/子类化样式/index.html","ce6b12d426ade4d1b8a3a23bdca5db52"],["/tags/对象池设计模式/index.html","679787f63b17a208393eb419a45224dd"],["/tags/工厂方法设计模式/index.html","92d7d13164e318a558aea286cd502a33"],["/tags/工厂模式/index.html","82e5bef533e81223bd0c4404eaeecde9"],["/tags/工厂设计模式/index.html","9923f094a262551e79816b7a025b6f93"],["/tags/懒加载模式/index.html","6e6d3958a25c4e87fc0e60e5b7109556"],["/tags/抽象工厂设计模式/index.html","8b565ab6c2489aaafd1b40fe2c66df70"],["/tags/构造函数/index.html","59a90531112b330993cf73ecf434a0c7"],["/tags/架构设计/index.html","b095a19a87f98c7bcd66931a4ac6e524"],["/tags/生成器模式/index.html","605783bd4748fda4c4332813bb144761"],["/tags/用户体验/index.html","e77b026ca40c2b2876d745d72367835f"],["/tags/自动化布局/index.html","0b4ebaa4e71b9859bfb01e6e489bb459"],["/tags/自定义UIView/index.html","95c619b2d715d6e0fcb3a55f65c2ec05"],["/tags/自定义转场/index.html","53eb08618f84114e178cba6893687e7b"],["/tags/自适应布局/index.html","2e784561454ebdedc70d5ea8641b9b83"],["/tags/设计模式/index.html","aabfec068e024450b8a61de02116c8de"],["/tags/设计模式/page/2/index.html","50090c1d41612336015e1378149706af"],["/tags/设计模式/page/3/index.html","206d638671f0ce74e2fe0188160cceaf"],["/tags/迭代器设计模式/index.html","ca929f1676d804295382584edc836b9a"],["/tags/适配器设计模式/index.html","1c6b3253702759e84b3f70178af500e3"],["/tags/静态工厂方法/index.html","2240002c9933a6da97653873949de06b"],["/为iOS应用构建输入表单/index.html","c9a5b017f72189c05675a94ef5ec08e5"],["/产品开发的幕后花絮/index.html","2798a64782772852ae6015b726cc4b98"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","2d91dec4ba2b96b740c621bd942492d0"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","0f501c7fd9e0a416ac23e54356e79f52"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5270323c9b59007f57f5f60c8ad14232"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","43f2b2396c9b700e0931cd34bc82a367"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","35563721275e3cc55f33d1db761b8def"],["/在Swift中创建自定义集合/index.html","4d36b37155c8c4dac920117c41c6e909"],["/在Swift中处理非可选选项/index.html","02c08670d4b3cb77a8a711f6c3bbc231"],["/在Swift中生成随机数/index.html","c8e1054001b9cdeddfe5ba58cb8b81e3"],["/在Swift中重构单例模式用法/index.html","aa57d2f1c5b45f62428fcbcb2fd27126"],["/如何为VIPER编写服务？/index.html","268fc37409f3be3d1e7821bfa2ad450a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6d7f69fc98b32164119fb02ca17b1769"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8b2c82b00f3145f9c04c07798e503994"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","49775f2d2e4cca36fa7a6b8c9874d2cb"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a22f67b7374b8079c0947239afcbbc06"],["/掌握VIPER架构/index.html","648df536e5b85985069c493ce9c45caa"],["/揭秘 WordPress Hook 系统/index.html","77c8d97ccd0b6eb6bb03c65e2aef7dda"],["/比较工厂设计模式/index.html","260f595edfd0cb4612137f928df462b0"],["/深入了解Swift中的Grand Central Dispatch/index.html","91dc5f641a74dc649814e6010f14cdc3"],["/深入研究Swift框架/index.html","8d52b06acde4d794cb34389f9b1b31bb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c27d170c721ba718929675a5a6e877a6"],["/选择Swift而不是Objective-C的5个理由/index.html","3074aa45befbf675e2fa2df7dc5fe6a0"]];
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
