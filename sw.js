/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","84aceea961985a1e066f85bba449e156"],["/NSCODER和SWIFT初始化/index.html","b430be777c8ce1e509a7f50ac2133d67"],["/Swift 5使用UIImagePickerController拾取图像/index.html","be89c8c24a7b90b07b3b4cffc10a5558"],["/Swift CompactMap vs flatMap：差异说明/index.html","7f888c027abbff74db131586f86d1c86"],["/Swift Grand Central Dispatch 深入实践/index.html","6862880876d4057263ffb928ee5bf776"],["/Swift Lazy属性初始化/index.html","be4cf34e65e6cb40646d1b1c3076e7d6"],["/Swift Promises 初体验/index.html","d48cfa9f8a47b4e3fbdc2d75d66822ee"],["/Swift Promises 探究/index.html","f1a3b6d55c68cbb5f789f667fe217e68"],["/Swift UICollectionView使用指南/index.html","38be45cc0a68bf6737ef0553ee415f87"],["/Swift URLSession && Combine framework/index.html","c6a6072219df69607295de0912025645"],["/Swift 唯一识别的视图/index.html","2794f2a7836089f43ac31cdd9dc41531"],["/Swift 如何学习现代UIKit？/index.html","30e9e5fcb88db11e92cb34989ceb5902"],["/Swift 用 compactMap 替换 flatMap/index.html","c2f1c898033255ef83e02de945380644"],["/Swift 选择和播放视频/index.html","f12cb2666cb5a9090d410f3fbcd9867b"],["/Swift中UIColor最佳实践/index.html","b98fbc809ecb518595cf4b948f29f55f"],["/Swift中快速简单的工厂设计模式/index.html","ce787588fe294a8e98e9d2be6f0cd4e2"],["/Swift中构造函数与静态工厂方法的比较/index.html","ff7817a6ce036a759d029fca12e9c12c"],["/Swift中的UITableView教程/index.html","8c45ee61f0c3f40ab573192c0ad03de8"],["/Swift中的懒加载模式/index.html","1d08cd867feb0c653dbd664df25437a4"],["/Swift中的模块和挂钩/index.html","17d9c96d1c8bdb9b9a0dc9d724d36f47"],["/Swift使用布局锚点添加约束/index.html","da506c8402548894da6e430525c48b99"],["/Swift依赖注入设计模式/index.html","1cf16588f5f8a845156f618f26c30ddc"],["/Swift关于Dependency Injection (DI)/index.html","b8ccfb237dbad665485e4e7e01418b31"],["/Swift初始化模式/index.html","c9bce5aafd9db57f8d5cbb0d4ad7690b"],["/Swift单例模式/index.html","1367e6bce1b17ede42689ae0cf577e16"],["/Swift原型设计模式/index.html","9f36b42efa2570ddd42470a949ab172c"],["/Swift命令设计模式/index.html","62f8ebec154b7cec53b93dda9217ddef"],["/Swift外观设计模式/index.html","f0d0e175bd2fe820e14b30f8b945468c"],["/Swift委托设计模式/index.html","6c95aa83649e92a0c80ffd453a6128c3"],["/Swift对象池设计模式/index.html","681337b1476596eb9845f7dccf0271c6"],["/Swift工厂方法设计模式/index.html","de900bca95d826d58a8a920bc78f4888"],["/Swift带闭包的懒惰初始化/index.html","c3557f3cdddabf1dc95d7b308c21c47f"],["/Swift抽象工厂设计模式/index.html","20a1ebe22dd411ff9b5c6d68afefe33e"],["/Swift掌握iOS自动布局锚点/index.html","f062a65cdad2b8764d77559c5020581a"],["/Swift支持旋转的自适应单元格/index.html","dd410b700f958f88cb36e3fffa17100c"],["/Swift枚举值/index.html","37753f99ed900d6d592458f7a5df538c"],["/Swift生成器模式/index.html","7648a79ee4586f9208f3d77cbc8a4e39"],["/Swift结合Xib文件自定义UIView/index.html","7f5d27bc1a2452f646cb82aba67d57bf"],["/Swift编写的20个iOS库(一)/index.html","6d233ccc695f45446108a76882a5fa32"],["/Swift迭代器设计模式/index.html","5b1833245904d6d529783f49c83190bc"],["/Swift适配器设计模式/index.html","45d1f520d319f3058950d6aaa94fb8ce"],["/Swift静态工厂设计模式/index.html","0e526803a76704540312841b9f094073"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","bfa907902c0bee5532d6671b16d410e9"],["/UICollectionView data source and delegates/index.html","599c5d1a99c95774b841c9fc60beab87"],["/UIKit初始化模式/index.html","b08c22f62ff2a5f02a436924ce63970a"],["/Ubuntu18.04替换国内源/index.html","d55f6442e2fa3539312839fc92f43a9d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","ca5cb3db521794ac67240e5ee36e3166"],["/Xcode扩展/index.html","9ea451694cc6b28a312dd19ab1b85c6f"],["/about/index.html","10ed0304ba57297bd4a50c60c449b64a"],["/appleOS的Networking示例/index.html","dd59e9b764b9298ec1ac0dee1c9d3a73"],["/archives/2020/04/index.html","a75dc5362112cb2e5ca648b1d6e947d6"],["/archives/2020/04/page/2/index.html","afa4ae8bec284a6cd7f018e617dcf9cc"],["/archives/2020/04/page/3/index.html","ae6841d70e2223ff79aa791f3b7bedbf"],["/archives/2020/04/page/4/index.html","767297f09a5ab2572084bd2c1ae64f6b"],["/archives/2020/04/page/5/index.html","b76dafb2e485d3c9e8d61f22c306886b"],["/archives/2020/04/page/6/index.html","fe9974a1e7836898ed6ed66a704062e6"],["/archives/2020/04/page/7/index.html","62424a9708794513975893ccb113aa7d"],["/archives/2020/04/page/8/index.html","1c8275df76ae52a5b5c97967b6bf3981"],["/archives/2020/05/index.html","a5e6e04a57493ec01e1d507f38980bd5"],["/archives/2020/index.html","0e7d0cfff2338f35d370cfacf893cd8f"],["/archives/2020/page/2/index.html","864e5558c786c22cfcbbe780ad3aa08b"],["/archives/2020/page/3/index.html","b3dacba960b1fae46d588b2ee4359c5a"],["/archives/2020/page/4/index.html","1e5d3b5fb451977744c348d10f5206e4"],["/archives/2020/page/5/index.html","4ec0ae73b726122c81b353d7e6a13010"],["/archives/2020/page/6/index.html","388c2f548042b7d0da2dceaff4cbea8c"],["/archives/2020/page/7/index.html","73dc83f4600bad6345043464ab784087"],["/archives/2020/page/8/index.html","c5ec92da156dee6e9950092e859db12e"],["/archives/index.html","0694bfc4183e88eee22ef3ec2ff97f12"],["/archives/page/2/index.html","c984fd8e92ce9b25f2e9bf73e5f2f3bf"],["/archives/page/3/index.html","c7b06c7773af6deaee5e5be99a83951b"],["/archives/page/4/index.html","24acc79c80f3cda50487a15c6a679c3d"],["/archives/page/5/index.html","5521aca2728974aa9a634f626b7c7fe8"],["/archives/page/6/index.html","b93c6925deeb6d0c2de1b333c9dda91d"],["/archives/page/7/index.html","edce96b5aa1abd09f4846884945e5b9f"],["/archives/page/8/index.html","ea328cafe90b897465014aa8aadcd622"],["/categories/Codable-protocol/index.html","7dc8c18156d06d2928ebe7494390dfd6"],["/categories/Combine-framework/index.html","438b047f20284abcc64d1f09c194e9b3"],["/categories/Grand-Central-Dispatch/index.html","5a8ed88f412826385748fd8462fb3727"],["/categories/Hexo/index.html","6b80cf5b72a0d69f3cec05cc07b9fb64"],["/categories/Promises/index.html","b426d9a0cc83da0f4b3275db735af5f7"],["/categories/Result-Type/index.html","a61ed968f542973274973c52c9d7f716"],["/categories/Server/index.html","908dc80fbf44956d2d40d9f33004f751"],["/categories/Swift/index.html","625b8683ed2eaf904a256942bdf2d743"],["/categories/Swift/page/2/index.html","843d73ead79a89b0cc855c620688ccaa"],["/categories/Swift/page/3/index.html","9ff2e50081b73a161d9c2ae85922b8f7"],["/categories/Swift/page/4/index.html","ad0675b2dc7fb3e461fa0e658b9ff29f"],["/categories/Swift/page/5/index.html","3a307b84a672477c18404cc0f56c40ec"],["/categories/Swift/page/6/index.html","d1fd0ca33948f5367d4ceadd1a847014"],["/categories/Swift/page/7/index.html","34ca6bea39db7fcc0eddb4d596afe0d1"],["/categories/Swift/page/8/index.html","d175f88e98c262a168bbdb2f094aac89"],["/categories/Swift5-2/index.html","165bc666c4cc0f1917dcd4b41714ec3d"],["/categories/SwiftUI/index.html","a885816fad9f3ee170ec0dfbf8760341"],["/categories/UICollectionView/index.html","64c085ee8cd95c7f676e76e9cde9931b"],["/categories/UIImagePickerController/index.html","2ad4542f3af7c858027dc2167ce0245b"],["/categories/UIKit/index.html","38edf11284c3aa6d8f0fcbb06569112b"],["/categories/UIKit/page/2/index.html","9dccd1a0f666fa6e5e6e8216346cb6f1"],["/categories/UIKit/page/3/index.html","f8c658b1ab91e034062b02c7bcf45a51"],["/categories/UIKit/page/4/index.html","345dd37a1e93b9083c489090d7bc0f06"],["/categories/UIKit/page/5/index.html","6c19993a5d936eccaa80e438fe73d2c1"],["/categories/UITableView/index.html","4c3be57f09d5364cac7cbc6b6ce84b5e"],["/categories/Ubuntu18-04/index.html","e3bda4032c8aa90c21f7ab95d26ac505"],["/categories/Ubuntu软件源/index.html","1bb99f410162470b96964b2923edbb80"],["/categories/Uniquely-identifying-views/index.html","b310cfefb819b773012d12c9eaf750c2"],["/categories/VIPER/index.html","5090b8cba28c02898b951e5aeec05036"],["/categories/Vapor4-0/index.html","37a47911ff2bd628e87772e0b2ffe18c"],["/categories/Xcode/index.html","b258ee4e2a464358b6a7a450cf34f2dd"],["/categories/appleOS-Networking/index.html","4cbd236a0765b9955b4cb9c6a7a09317"],["/categories/enum/index.html","7c16e5d49f60f0ad11885634ae47adc4"],["/categories/iCloud/index.html","963a7ff1ddb47b25dc2af70d0a54c0ab"],["/categories/iOS/index.html","06d53d7ba23ee56d1ef8fe38ab9ebed0"],["/categories/iOS/page/2/index.html","ee0cb0f1f0a919850af6cf44374387c4"],["/categories/iOS/page/3/index.html","12eb3b8e364051f74c0cc0ea71cf43ec"],["/categories/iOS/page/4/index.html","b9c3c3601c009a5bf2ac890926eaa308"],["/categories/iOS/page/5/index.html","35643d40b2fb9434744ea922392cb6c1"],["/categories/iOS/page/6/index.html","3eccdf7b2ab07a6b87ab98cf946b9529"],["/categories/iOS/page/7/index.html","5d6289b3ae133cb9d6b570e7f390a594"],["/categories/iOS/page/8/index.html","db6191a557d1561ee89bca3e6ba3b9a0"],["/categories/index.html","683f16bca5a32dfb59eb08d766b87b5c"],["/categories/random/index.html","e9d2b2624c5e7237656aeb18af796265"],["/categories/三方类库/index.html","480628b3785beebe088b66b54babd79e"],["/categories/函数式编程/index.html","af6955700b1af243f92ded8ed55929c7"],["/categories/子类化样式/index.html","277c28a42e351e0ec478990b3b5723f9"],["/categories/架构设计/index.html","2ca9af3b81040205499374f771fe00a0"],["/categories/用户体验/index.html","cd5edf4f1ef2c4d513e1ce4457f90798"],["/categories/设计模式/index.html","475723b8bc3ec5c3a6da12a5bd25065a"],["/categories/设计模式/page/2/index.html","b464742b8ff262853d57e29d1a44f993"],["/categories/设计模式/page/3/index.html","ef2bf4bbffe7e6337f819325fc6887c3"],["/css/main.css","bf33181a32afdc295c46128d7868a9d2"],["/hello-world/index.html","d969ff85b7abff1fdb46ab81f99a05e9"],["/iOS VIPER架构深入实践/index.html","c2a383c067c695ece2ebaed6f9627dd0"],["/iOS 自定义视图，输入表单和错误提示/index.html","38035cf00f73ec84464fff3ed593f3e9"],["/iOS如何使用iCloud文档？/index.html","3cc11152ec6dc9b947187c752bb796f5"],["/iOS子类化样式/index.html","3417ec3deb8fe0e1a8d3ccc8bca9e79d"],["/iOS自动化布局编程/index.html","df5cd1542f7d7bcc4ac1a5eb76e04607"],["/iOS自定义转场(By Swift)/index.html","0e40c587ba49bb98bf26d9f2ed169e3a"],["/iOS项目架构：使用VIPER/index.html","5a8c967c4c552d1de4593f8ab9386846"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ae39d733408650dbfe33c24a6a49b6ca"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4502b2e74dcb05a83fd23f458c095c22"],["/page/3/index.html","71d6e70d61d9e717af970ed373a1b147"],["/page/4/index.html","30a7435d3c24ba847c0cff6060b31459"],["/page/5/index.html","b24fef6db0fa1e737452ade473e43e48"],["/page/6/index.html","dae32bf6908799241b4dc97209dfe840"],["/page/7/index.html","5b7e8c0b568a749495b66bf1909c681e"],["/page/8/index.html","c139bd84091cd0de1776a71aacd1a514"],["/schedule/index.html","8d8e697eb73f51345820cd12fbbb9f0a"],["/sw-register.js","80edf3460ddff680cd1e728a4d0fe72d"],["/tags/Codable-protocol/index.html","134ebfab88c1dbdcaf2ca8d1ab09c217"],["/tags/Collection/index.html","50a6fcd40d9e324b4600a632e5a873da"],["/tags/Collections/index.html","efc89069edd9691bca2d2594473a40d2"],["/tags/Combine-framework/index.html","a618b12aca7553fdaa35def792445a57"],["/tags/Dependency-Injection/index.html","a81c6aa6e9a017dd974bcc6429212f0e"],["/tags/Grand-Central-Dispatch/index.html","851def9f46cc0303d124dc1f306ba017"],["/tags/Modules-And-Hooks/index.html","798fec1cd56a0e6a7a90cf76ca5865e5"],["/tags/Promises/index.html","2211cf66496aef0ee65e475ec11ea842"],["/tags/Result-Type/index.html","56ef218e1ba9660c74ad32c5a5ab7fea"],["/tags/Server/index.html","922f7de72e5a7fd5028d98ad4f1832cb"],["/tags/Swift-Package-Manager/index.html","b8828e03611f8289f295f7951150ea1d"],["/tags/Swift/index.html","a5767d279a63097cdc893518acfd219b"],["/tags/Swift/page/2/index.html","fc47422932721001cf18a855941e2a18"],["/tags/Swift/page/3/index.html","62d12a7aa3e4a466fb213fb0c53fc78f"],["/tags/Swift/page/4/index.html","5b5359c6ac0f6a645bc3183421ae9215"],["/tags/Swift/page/5/index.html","92b9c0711c3db8dabd15593393eb5839"],["/tags/Swift/page/6/index.html","9f95404164f903ee10db9d4f35afa216"],["/tags/Swift/page/7/index.html","d1394f60f140d6992bf4707e4af83212"],["/tags/Swift/page/8/index.html","22733b9832c6e88ebd238b2489518de5"],["/tags/SwiftUI/index.html","34f6c42f3d8194450f71346e7c209c70"],["/tags/UICollectionView/index.html","88dcb68c1effcf440a4549aef551fbb3"],["/tags/UIColor/index.html","70aae64fd2ab97eede5e7c6c71372a4a"],["/tags/UIImagePickerController/index.html","0d2d2c2826ef80aef75f865d0789a0b9"],["/tags/UIKit/index.html","b5e8d1ed73761a7622ab60ae0fe561d4"],["/tags/UIKit/page/2/index.html","cc2f6c73bedd46839374d1773d574861"],["/tags/UIKit/page/3/index.html","e2531c2b91cc5e7ddf8cec2e195ab410"],["/tags/UIKit/page/4/index.html","447f48c552529a2cb262d9e775fc7bbb"],["/tags/UIKit/page/5/index.html","165b506913a9a6a12f3e9fedd7efde64"],["/tags/UITableView/index.html","4b8ea6f7005f4e6c5de4166594511d20"],["/tags/Ubuntu/index.html","a0329b99796d3bf4f1f3f9267b2c76c6"],["/tags/Uniquely-identifying-views/index.html","26bb95701376a0f50aa4194b7da36289"],["/tags/VIPER/index.html","48bea9876b4c1392fcf16eddb0255770"],["/tags/VMware/index.html","137afaaa908c73c4876ad20afcf64fa6"],["/tags/Xcode/index.html","ac5d99464a43dd5c8f35ffb309a2172e"],["/tags/appleOS-Networking/index.html","97a4b12771088ed72934cb26b7dbef06"],["/tags/enum/index.html","472be26dcbd17dd5f10a57f92856b207"],["/tags/iCloud/index.html","f6f077b4f43a57131b4dfc11a11a7a91"],["/tags/iOS/index.html","06888390b3ad3297612943946e39cd43"],["/tags/iOS/page/2/index.html","e51ff53e8436181873b04f45be332ed0"],["/tags/iOS/page/3/index.html","d886ffc3c621311e8280ef1cd2edaf3d"],["/tags/iOS/page/4/index.html","2a6028634c6bd4155916b8572ab6af59"],["/tags/iOS/page/5/index.html","bf0ca5be3be84b7cf2d059fc813cf507"],["/tags/iOS/page/6/index.html","47ee465ec61870952c185190f0e7a66d"],["/tags/iOS/page/7/index.html","8968d86568d281e2406dece870c26fe4"],["/tags/iOS/page/8/index.html","208a4204cdad432cc6c36eaa4bba2097"],["/tags/index.html","c618234afc92066ff102c5c0afa4a4d4"],["/tags/non-optional/index.html","6c00bd363b61950565e89044fb8b340d"],["/tags/optionals/index.html","d83384e995db2f4cfdec6e388ac1fa4e"],["/tags/random/index.html","b11d115464ec0604d8a1a4a3283eb773"],["/tags/transition/index.html","182981be717062e90b835b0ae80cf661"],["/tags/三方类库/index.html","ebb5818d132de84ae550db17eba04789"],["/tags/依赖注入设计模式/index.html","d067260b216d0ab43b884aea90efa30b"],["/tags/函数式编程/index.html","ac265fee92f5cef4cb24d2deacfba850"],["/tags/初始化模式/index.html","72fee5ce82e06c730cd4187472c197d1"],["/tags/单例模式/index.html","ebe0195f054b846bcb48cb17b8f97614"],["/tags/原型设计模式/index.html","77df02a9b212205776c9850edd996542"],["/tags/命令设计模式/index.html","2263692e1ca2ddc39504be0d9ee106d2"],["/tags/外观设计模式/index.html","aeb4df60911b1934d2b7e9497cbcf1d3"],["/tags/委托设计模式/index.html","bddf27d6b880c1f264b93bf2fb54efdf"],["/tags/子类化样式/index.html","6ce81b4fe2411d8c79e65b6afb2b2f31"],["/tags/对象池设计模式/index.html","fd8e6dd642fcee811def1fac10c8b25e"],["/tags/工厂方法设计模式/index.html","5dc84694ada766f82717977eb6c598e9"],["/tags/工厂模式/index.html","7fe91568f5cff7eeaa20a8d2aca60c36"],["/tags/工厂设计模式/index.html","f078c76e596671ee472f1a3ed10de127"],["/tags/懒加载模式/index.html","0a5b7093290e8bc9e62358da142c5988"],["/tags/抽象工厂设计模式/index.html","c26ea191e9e36670c99540b922790148"],["/tags/构造函数/index.html","e074575159e216f11b701e803354e970"],["/tags/架构设计/index.html","43865409e76d4e73cf00a6633f1cafd0"],["/tags/生成器模式/index.html","a37bfb438aed1fc4e0934954a6423caf"],["/tags/用户体验/index.html","c0935a25d7f19c137f1ad6f14b6c0dc0"],["/tags/自动化布局/index.html","a9a425e36bb91de83e10128d0dc530bb"],["/tags/自定义UIView/index.html","ebb39a3ef0c0febbedb9ec30ecaab781"],["/tags/自定义转场/index.html","49648d48356f680f46f210d6f8ceb8a7"],["/tags/自适应布局/index.html","fe215fedd3c2659174b1c8d38af01ab6"],["/tags/设计模式/index.html","7d0e55d8437ae5eb7e9af4701436b9b3"],["/tags/设计模式/page/2/index.html","c7a9db6115c90c555e7e95d5aa20969e"],["/tags/设计模式/page/3/index.html","b7c7992fa24c0daf88be342c0cb73b3c"],["/tags/迭代器设计模式/index.html","1882e871df1587d569fd73a666d4d310"],["/tags/适配器设计模式/index.html","1db4b65a03e418e291c13f0531fbe98e"],["/tags/静态工厂方法/index.html","358502337ea822efe623900833887ebc"],["/为iOS应用构建输入表单/index.html","7f1cfeaea0266cf8e33921ab02023913"],["/产品开发的幕后花絮/index.html","bbf9d8ec68355db75709deebbdfc9ff1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e451e2930477e1f300696545b25dd23a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8ad5ff0bb78d012aed0c00037feccae8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","14e63c27904109acca905e38514f28d3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","61a46a5b2355184dbd02411dadcc3a22"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b16807361582476dbae8684fd755d063"],["/在Swift中创建自定义集合/index.html","1ebd924979a044af321e2512819479e5"],["/在Swift中处理非可选选项/index.html","fa92af6bf5395a73e2bfc942b03a49d0"],["/在Swift中生成随机数/index.html","433cf3a6fb3abbb360fdb6d2385c7eb3"],["/在Swift中重构单例模式用法/index.html","d9e02ff95df2d871fbcf2f4c75650374"],["/如何为VIPER编写服务？/index.html","84da993ac3fdbcbb27faad0515011bfe"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","4a82319b78405d6eca9bb0aade20d60a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b6eb46c2bc1bf3a4f243f5a39116d640"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7c1622478e8dec6b7686144a1527a49a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","01f485e08614d78251e71da6dfb416c1"],["/掌握VIPER架构/index.html","69dc64680a825a04052c981e073a447c"],["/揭秘 WordPress Hook 系统/index.html","068f576eb9fd21750146c0bab77becd9"],["/比较工厂设计模式/index.html","1f8b92945e65297dc010401cbc4725e2"],["/深入了解Swift中的Grand Central Dispatch/index.html","de332031e9b6675f03f76f86da4ca437"],["/深入研究Swift框架/index.html","312a7a6e71dd4987db830722e22ebba8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","83c89f063947853ab0b0a7cb4085df8b"],["/选择Swift而不是Objective-C的5个理由/index.html","cceee999868387ca27d3491db9e5ac1b"]];
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
