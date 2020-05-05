/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","76bec2b872eb48fe91fecf149c12492b"],["/Advanced Swift系列(三):  Optionals/index.html","6165d5a3d4d2eb8973f8c01229e1352a"],["/Advanced Swift系列(二): Build-in Collections/index.html","cc63e541e41b7dcba8e94bd8ea40a12e"],["/Functional Swift 初探/index.html","3399200f96dbaf9e0adc5845c956bd74"],["/NSCODER和SWIFT初始化/index.html","966323052fb033ae0d4c4592ee7c79e1"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5b00c37250ee8b18a92701cbae1e8957"],["/Swift CompactMap vs flatMap：差异说明/index.html","c43c05dba1012d24e38c5b25350829a7"],["/Swift Grand Central Dispatch 深入实践/index.html","eccaed9db636f7fdc15dda4be9c5fc0d"],["/Swift Lazy属性初始化/index.html","535566bf407774842b8e37bbcb85222f"],["/Swift Promises 初体验/index.html","2cc397c1a29e58a1bd359008f8395abf"],["/Swift Promises 探究/index.html","7f7d23358b249935890cb0e2c9d6975f"],["/Swift UICollectionView使用指南/index.html","80654f1661f48fb938b06650520ef1ae"],["/Swift URLSession 和 Combine framework/index.html","2468cfd349939118117ec24e0db76a73"],["/Swift 唯一识别的视图/index.html","d98f3b430956c034df5c369c41535c91"],["/Swift 如何学习现代UIKit？/index.html","0295be6223e03263d022383ad2a108f8"],["/Swift 用 compactMap 替换 flatMap/index.html","e11364e48d16e684d1c9289d9526cc8d"],["/Swift 选择和播放视频/index.html","dfedc204ec1437df56461e9b6bf69971"],["/Swift中UIColor最佳实践/index.html","b39e8fe3e574629e9170f52d100275e3"],["/Swift中快速简单的工厂设计模式/index.html","ca150a8d15e6e7509593f07f9b793860"],["/Swift中构造函数与静态工厂方法的比较/index.html","a04b65c563d45a330a5c9f52a2b64886"],["/Swift中的UITableView教程/index.html","51fcb32e930ec6797f5225dbcd0c3762"],["/Swift中的懒加载模式/index.html","d326b952c2b298a3c7a675fd46a4f900"],["/Swift中的模块和挂钩/index.html","9db867380a65ea150788d480ee35fba8"],["/Swift使用布局锚点添加约束/index.html","429d5bafbb854f9177241786018caa9b"],["/Swift依赖注入设计模式/index.html","f790d1ca3c040d229f9d6552a01518b7"],["/Swift关于Dependency Injection (DI)/index.html","298e1ec5dd0ebb60037e2eaa64b45dc9"],["/Swift初始化模式/index.html","505f5c8afa6ab4c0ed29d582dc5f981a"],["/Swift单例模式/index.html","73c0c284ced00ef70163a2323e5bb951"],["/Swift原型设计模式/index.html","b4880a234d2b2f6cc576ca4fd3b8617d"],["/Swift命令设计模式/index.html","9aa9e2a80faa005305e02a5e0a2f6ffe"],["/Swift外观设计模式/index.html","322751054ff0022bacbfa9662d6402fb"],["/Swift委托设计模式/index.html","bd2aa8935eb9f72be1063dc297ec8ff4"],["/Swift对象池设计模式/index.html","f81751bf6151a8240e6c471393af0149"],["/Swift工厂方法设计模式/index.html","920b85756e1e493a740d63fc483815c2"],["/Swift带闭包的懒惰初始化/index.html","97446a3009076ed34a8f34ab68aa6102"],["/Swift抽象工厂设计模式/index.html","f28b495ec352936987e90f3b8edb6be6"],["/Swift掌握iOS自动布局锚点/index.html","bd2836ab02bca57819bfacfacaddcdb0"],["/Swift支持旋转的自适应单元格/index.html","7d89c21876a1fc8043e18cc54f21225a"],["/Swift枚举值/index.html","a62fb48b731bfd43453ec2ad6e8ec614"],["/Swift生成器模式/index.html","a8706046b9395e298570cde8bf389f72"],["/Swift结合Xib文件自定义UIView/index.html","a240afc0e063aa5f09e9cffb564e524e"],["/Swift编写的20个iOS库(一)/index.html","9ae22708fa9cc2224459b04e98b4088b"],["/Swift迭代器设计模式/index.html","96a7aeff5c526af39aed623f9cc32d41"],["/Swift适配器设计模式/index.html","685ba96b7282249901ec8d94810d2d4c"],["/Swift静态工厂设计模式/index.html","750d3e8e89a39b723b7371c72a85ecbf"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","ff81766593b2b266bd4bc2845c694301"],["/UICollectionView data source and delegates/index.html","041759807dd9c9957f4dda55d17e765c"],["/UIKit初始化模式/index.html","5a79dde5f7ddba8f09cfa63953b7b22b"],["/Ubuntu18.04替换国内源/index.html","e14b862a0f1283a3fe76e88b6a95b85d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","486068ba51b208f5e8917fdc2a5c7ffb"],["/Xcode扩展/index.html","d2df368ccff7de56d972d28a7fbe42b5"],["/about/index.html","69e784617a5a04a5cca5fe87a2a49c41"],["/appleOS的Networking示例/index.html","56ac584a6c5590c39078608fde5a9ed2"],["/archives/2020/04/index.html","b0fcb8f5d385c9382b93f3398e13201a"],["/archives/2020/04/page/2/index.html","c90b3ab35218ae5756a15dd0abe059ae"],["/archives/2020/04/page/3/index.html","04e2d357b2a87d77383eeb78d6a26a33"],["/archives/2020/04/page/4/index.html","86fa05682d018913cccf404b99708b2d"],["/archives/2020/04/page/5/index.html","9664a1838c335ca345db5837d406afba"],["/archives/2020/04/page/6/index.html","5a93de5ab9eeb9c660704e8b7ba6de23"],["/archives/2020/04/page/7/index.html","91ff5137ad9a54cac211d1b44499da2b"],["/archives/2020/04/page/8/index.html","09877482a26b7d053a07806bcfdec56e"],["/archives/2020/05/index.html","d4bcacb5f85b4a895c8df55dfeeb0219"],["/archives/2020/index.html","63479de8e5badbaedee50a368dea5b86"],["/archives/2020/page/2/index.html","501685488dba9d2ad5eb228ffad42677"],["/archives/2020/page/3/index.html","4acaa70968f28c86f435c63e2defdaf0"],["/archives/2020/page/4/index.html","eeedd9a6cc87a86d7b213acd4ce9884e"],["/archives/2020/page/5/index.html","46dbe85c3f88739a41cc539e196ed6ae"],["/archives/2020/page/6/index.html","8591e1881e3b42a207575357e813ca82"],["/archives/2020/page/7/index.html","63644b894a69cf94c2d65225dbed8d46"],["/archives/2020/page/8/index.html","ac4158d96e4cf1849b768005661e284d"],["/archives/2020/page/9/index.html","35cb413f996e84473fdb11251389da9d"],["/archives/index.html","754f1d7223b732277cb350f2a0f19e5d"],["/archives/page/2/index.html","340ee9d62e481d567e174c02e08f0195"],["/archives/page/3/index.html","35d7f8d3c2a41093a19c1e6188374118"],["/archives/page/4/index.html","f1ee804ef82a2c79c147cc562dee962a"],["/archives/page/5/index.html","e2900ebbac20b447902f823d4b434b0a"],["/archives/page/6/index.html","7b46a0207dbcda6eba7436f84e8c16a2"],["/archives/page/7/index.html","54fda7c155b575290a6e4963fb945c15"],["/archives/page/8/index.html","0b8e8aa5e271578e81246ce48a3cd03b"],["/archives/page/9/index.html","00bf8905da3ebc99980f136612fb778e"],["/categories/Advanced-Swift/index.html","e0f75c2e4577b7bbeb7c8b6c22eaa632"],["/categories/Codable-protocol/index.html","f2f16e8e0ff29441e27279e1cf821d0f"],["/categories/Combine-framework/index.html","db30bce37fd4d7e15946431567a74743"],["/categories/Combine/index.html","4786757ab4b01164706da2b4a16c9958"],["/categories/Grand-Central-Dispatch/index.html","a02db9810e411f3d94dab997edbd5359"],["/categories/Hexo/index.html","38ce3cbe7931de78fc7237a3bc34615f"],["/categories/Promises/index.html","e5b3c73b9140bcd14a0f397b3827b308"],["/categories/Result-Type/index.html","6e067c515e734a312448e51307bc2fd2"],["/categories/Server/index.html","2f4b65b65345eae5324ca0dd0dfe0260"],["/categories/Swift/index.html","255cb835c1525e79c7b73c6a495d4047"],["/categories/Swift/page/2/index.html","d47394c0c34036b315080c631fd78152"],["/categories/Swift/page/3/index.html","cb0c2c4a2c0a4935b29a1a5265708c0f"],["/categories/Swift/page/4/index.html","70ecccca2c4ebe07ca8124ea62e39d89"],["/categories/Swift/page/5/index.html","bae2b3ad2a78d7fd6c4bf72b02234d44"],["/categories/Swift/page/6/index.html","a51708bbbe7a505a704bf98365ca9fce"],["/categories/Swift/page/7/index.html","7870fe29046f0b228861bf86a031053f"],["/categories/Swift/page/8/index.html","efb7ad31796c5dc97276e3f2762d1e52"],["/categories/Swift5-2/index.html","59d9aa6c47279a31744434ae46872959"],["/categories/SwiftUI/index.html","bc9ed009b1556ed5f54224dfc04508f1"],["/categories/UICollectionView/index.html","1698200cc25c335beca2f91899994803"],["/categories/UIImagePickerController/index.html","e906571cd21827a0cfb7a176f26efb4f"],["/categories/UIKit/index.html","c8e1078855bdad363cb77ad1f1d8bd41"],["/categories/UIKit/page/2/index.html","a666324f222c66d9ebdcb32c077251ee"],["/categories/UIKit/page/3/index.html","0c737f7c209bbe4d6c8f8eb54097f5e8"],["/categories/UIKit/page/4/index.html","4ab730a636c0551c9bd1296e29417fa9"],["/categories/UIKit/page/5/index.html","b4d5186b5efa745f19c200b62d1711a4"],["/categories/UITableView/index.html","3d8d7539d30208444d20e7dbeae14080"],["/categories/Ubuntu18-04/index.html","0513577a44d544f98c21eebe7bc7eac0"],["/categories/Ubuntu软件源/index.html","d7706fce69fdc122a4760343f7a37848"],["/categories/Uniquely-identifying-views/index.html","938a1dd08ffa65f29f4e052d36c7b51c"],["/categories/VIPER/index.html","32c0358a017bc9ca876b0ec0338662df"],["/categories/Vapor4-0/index.html","73fb7a4be847ac29111cc188f7f1feb1"],["/categories/Xcode/index.html","631d6b8c9c6d6af829f2be7d53ec0cc0"],["/categories/appleOS-Networking/index.html","9b79945e486d9371020aa07ee263ce29"],["/categories/enum/index.html","3b5a1c1d16f430105578e4e16b0ef859"],["/categories/iCloud/index.html","9d85c3b3603aca24f2989aa31c2e0e3d"],["/categories/iOS/index.html","3bc69d5c8567d997b601d7e9e4f06cb5"],["/categories/iOS/page/2/index.html","7d13fafd94bb3422f7c47c453d6815b9"],["/categories/iOS/page/3/index.html","a1fe9cd2eb5b1aff63ce1bf36ceef2fb"],["/categories/iOS/page/4/index.html","f6068f7c03e42339b58822fcf3c4fb9d"],["/categories/iOS/page/5/index.html","02febeb49eb6e03ea0183efd790a6787"],["/categories/iOS/page/6/index.html","f22638175b02bcb013f67ae9094df03b"],["/categories/iOS/page/7/index.html","7755400b8daecd052352273755cbf399"],["/categories/iOS/page/8/index.html","ccded13c4755fd7ecbaa8f616a31c17a"],["/categories/index.html","5bc2c0dd9d5e6eaece5f79dcc7bbd7c9"],["/categories/random/index.html","2fef4b99aa9e6d8b1404b7df09036971"],["/categories/三方类库/index.html","b652bad102ea9ea786e4f5e219b00bbf"],["/categories/函数式编程/index.html","d2ffd1396d9d7ad2f38629df5989fa0c"],["/categories/子类化样式/index.html","0ebb66f0885c8536dc383cf84ac166aa"],["/categories/架构设计/index.html","6bd6c92d5791c42a99e357017461f25b"],["/categories/用户体验/index.html","6035c1d67deb24f1967026c0634dd41e"],["/categories/设计模式/index.html","a0aab9a8540e5e7223a82e8ec10cb49d"],["/categories/设计模式/page/2/index.html","4c9cd47da756dc8639625d8cdfaa6311"],["/categories/设计模式/page/3/index.html","3eb2a34a7a0b2e87ab461f37c1bda695"],["/css/main.css","d6cfd1f0587060aac8f2d4bfa614d0a7"],["/hello-world/index.html","c64a19c1fcea73ab524f72455f68944f"],["/iOS VIPER架构深入实践/index.html","c267285cb01c79772e17143e58b7bcd9"],["/iOS 自定义视图，输入表单和错误提示/index.html","0815594cc2fd2360917565d21549c7d1"],["/iOS如何使用iCloud文档？/index.html","2eab218578fe88baf36eb2bd43433d47"],["/iOS子类化样式/index.html","24f20b43c066b140c2ad8553104a4001"],["/iOS自动化布局编程/index.html","37796dae51c01ae68d10863513d3b2e2"],["/iOS自定义转场(By Swift)/index.html","3e5cc898f9e5a69f3c0133e7a568087e"],["/iOS项目架构：使用VIPER/index.html","f08a487254c3bfbbbbd4e598bdd7670f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","51c5b712cd7f58de5a1cc81de6f24441"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d7dba80584ab9ccbb114149f30f36e3c"],["/page/3/index.html","3590288781d5ee6b12d8fbc37959be83"],["/page/4/index.html","af1c7bb2421c8ced67cf78310f1492ef"],["/page/5/index.html","b4aaaa74752f69c369bd175067c548ab"],["/page/6/index.html","1e46fac48be784e5f8b2a1d4bac136cf"],["/page/7/index.html","a0d3af1b95d67ae183eaacb583085c56"],["/page/8/index.html","797f4ebb8da9a4171d3aa1e222d92ed3"],["/page/9/index.html","c746e102b147d69a01bb866ba55cc93f"],["/schedule/index.html","ca96eced057b66f8036de1715c6e6c5b"],["/sw-register.js","82e8b1ffede21d267888d66f9cc2c92a"],["/tags/Advanced-Swift/index.html","f8d7750e0d5973154f780159cc2750fc"],["/tags/Build-in-Collections/index.html","06e5b95a6a6e0a03fd45f2c273deeffd"],["/tags/Codable-protocol/index.html","7edefbe5e0011f39fdd793763742d6c8"],["/tags/Collection/index.html","a4a0638e9ae9124e7cbf858c4e65ef9c"],["/tags/Collections/index.html","42f9451ffb1908061dc691a05a64b46b"],["/tags/Combine-framework/index.html","b74c68330b1ffb468bfa4b68982ec618"],["/tags/Combine/index.html","6d3a55a2c92505efba0fe057fa7d21c9"],["/tags/Dependency-Injection/index.html","3c73ae0c1eb899c56c108b9120d37fb5"],["/tags/Grand-Central-Dispatch/index.html","04503c3468ff484b03d3efb37e8dd7cd"],["/tags/Modules-And-Hooks/index.html","25db6ad62078bf591acdef8a1c44ac62"],["/tags/Optionals/index.html","fe36690232a5ec446ecdea0784bf44be"],["/tags/Promises/index.html","870503e87423d57e122483a34c2c3410"],["/tags/Result-Type/index.html","4a56db5a3c806f828010a85c2bde34ee"],["/tags/Server/index.html","327e4c7774b137430792f7547acc6a75"],["/tags/Swift-5-0/index.html","864586d3621d132594bc9ed0f0608582"],["/tags/Swift-Package-Manager/index.html","bde0f3249dfbea4cfe6e132954c901df"],["/tags/Swift/index.html","3d60ff34f128ee2e9ceae735cfba9a75"],["/tags/Swift/page/2/index.html","c8d87ca379603aeb7a25a98901c2d572"],["/tags/Swift/page/3/index.html","094142eab0893310a6259b00ce46aff2"],["/tags/Swift/page/4/index.html","2e5322410f350e2d0ac39ea17af2f0ac"],["/tags/Swift/page/5/index.html","185cdcf4ca4bd8df4f711fc2e2b8e3bc"],["/tags/Swift/page/6/index.html","24e4c68f76c9586ec6f690e4701329d0"],["/tags/Swift/page/7/index.html","3ea7107723c3a637d63cb57d2671b566"],["/tags/Swift/page/8/index.html","170820fd3809acc5a17fbac7f6b87249"],["/tags/Swift5-0/index.html","4165fe2391e6a296c981920b7e4e2c39"],["/tags/SwiftUI/index.html","4c1e0318f1afbcc9729c84c860002a75"],["/tags/UICollectionView/index.html","ee34d87012da5d257aee08397808f06f"],["/tags/UIColor/index.html","ce279e22c73ebf02aee02c5cf638f908"],["/tags/UIImagePickerController/index.html","61a823800ccef91e8a701a93b91500b5"],["/tags/UIKit/index.html","20a3cd4a92ca1bf1ebd4eb9edc8112a0"],["/tags/UIKit/page/2/index.html","ac94ceaa498aef8f236e1e420c65b9d5"],["/tags/UIKit/page/3/index.html","69023861578fce0f8b7fa3906fa61c17"],["/tags/UIKit/page/4/index.html","28fbe583bddbe10c5fdbea816a1d95f8"],["/tags/UIKit/page/5/index.html","e052be53dd05c5c2d506c36b66fe9bb9"],["/tags/UITableView/index.html","f72fc6ff328bec2820480039c8ab2bb8"],["/tags/Ubuntu/index.html","f860f6c1b5d0cd01a2b203cdb9bfd4cc"],["/tags/Uniquely-identifying-views/index.html","9488fa74140d6c44a565ac331fdcad70"],["/tags/VIPER/index.html","f5412d35eb3c3812e7fb962a2cf4b01f"],["/tags/VMware/index.html","f713bf61b7decab5fbf16d5e0a853882"],["/tags/Xcode/index.html","667548af233b1c1691a5ebec3dd8a544"],["/tags/appleOS-Networking/index.html","8af4c657bd14ea14de6f51bec7edeb45"],["/tags/enum/index.html","44ce6f8c598326ad67de7cbe688ea425"],["/tags/iCloud/index.html","5bb955e7657da72ce96306d1b885aa4a"],["/tags/iOS/index.html","a78ad57da753caeb80c57aa2e45ef35a"],["/tags/iOS/page/2/index.html","0250b7812634ccd123857f3ce902aa6c"],["/tags/iOS/page/3/index.html","27d63b405d03da85c8241a7185492868"],["/tags/iOS/page/4/index.html","3048d69016050aad06a6437cf6d788e8"],["/tags/iOS/page/5/index.html","abb1f9ec9f04ac6c62e0880bc6f06b79"],["/tags/iOS/page/6/index.html","8b92cb8c3184658e6fb6ca7b29276cec"],["/tags/iOS/page/7/index.html","2c4e803aabde6b9ee6db6f492b4b95a0"],["/tags/iOS/page/8/index.html","1cf65e0d1ce167ee7119c638065cdb70"],["/tags/index.html","cc2bcf619a126fc4f59e93332a088e5d"],["/tags/non-optional/index.html","0e67612d69d8fb4da0fb604720c3e646"],["/tags/random/index.html","b8c13b4fa9d79b3a7d9349f81fd0e37c"],["/tags/transition/index.html","be102d2051f0d3318bce95e6216baea1"],["/tags/三方类库/index.html","1efa68b4fdb1474dcbb7661773cd5215"],["/tags/依赖注入设计模式/index.html","5c0a04265202bacdcc5a7ebcb829c0c3"],["/tags/函数式编程/index.html","ea0570e7ad9c3b9fae702b0ad0eb5e7a"],["/tags/初始化模式/index.html","97fbd4511584071cf62bd84fa9d0e8bd"],["/tags/单例模式/index.html","27dcb2457e093773f3e05252f984ae5e"],["/tags/原型设计模式/index.html","503724f649b71a5191fa0ab627c4c276"],["/tags/命令设计模式/index.html","5432a1413931169c09ab0833a79093d1"],["/tags/外观设计模式/index.html","3b2cd3c62fcc49f9728734ba3f4ec3ad"],["/tags/委托设计模式/index.html","a12c4ecc6d5f01bdccce53003bce02b4"],["/tags/子类化样式/index.html","a8409f5442f784aefd4a657841c21199"],["/tags/对象池设计模式/index.html","110bef90ddf4f095f255ff2a743f8e77"],["/tags/工厂方法设计模式/index.html","501d0103f356ff87e3cce94eab7945e6"],["/tags/工厂模式/index.html","82e7bf6b22c5e7f663a6da15024e96da"],["/tags/工厂设计模式/index.html","504cde74a4bca719fc2706b88a695d54"],["/tags/懒加载模式/index.html","e9b37939c252b0394f3670fc0cc9aef2"],["/tags/抽象工厂设计模式/index.html","9c63400d3944c164a6fc372e948f3b09"],["/tags/构造函数/index.html","5d32d37ac2aafcd1c6b0328cd2330616"],["/tags/架构设计/index.html","e42173dc94d4941344845f7966ef6792"],["/tags/生成器模式/index.html","93592c8a1de2500337b8ac98caf6161f"],["/tags/用户体验/index.html","379e01b51ff541f50c21388fceea80e0"],["/tags/自动化布局/index.html","acc5e356a2986a37bb4abb990ee0682b"],["/tags/自定义UIView/index.html","7b06717e9d7e3f72150d929660d7f266"],["/tags/自定义转场/index.html","dc0871c50d6cb2f0bc22018e1aa6ce2b"],["/tags/自适应布局/index.html","a3a6868c62a8f58d8a692e7ebc9feac6"],["/tags/设计模式/index.html","f9c9ad539ae71d41bad8c0daf147ddb5"],["/tags/设计模式/page/2/index.html","d3ec2336a6978dff56fdd170c231dfb4"],["/tags/设计模式/page/3/index.html","43538245ab5f9f76680625782f8a706d"],["/tags/迭代器设计模式/index.html","3461a3776b6b0dd1a47a704ee5bf624a"],["/tags/适配器设计模式/index.html","f4e21f05490a768d8dc3e79538622c6e"],["/tags/静态工厂方法/index.html","733de0d0c1d15a0a00f61e9ec230646e"],["/为iOS应用构建输入表单/index.html","2feb53c610ca045284197923e4376f32"],["/产品开发的幕后花絮/index.html","fcdf0b2adca282a2beaf11cae61ca727"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","228c3e8b9c1d63a018225f4d320d2b7e"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","315657d57edbaa2ce19bac0f2e58bc59"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","10950790c5b3bab24df67080be4e6eb8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9623507c8c59096721ee0fe89d8b9197"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","e44476eda97af1d39f492551f7eb7b3d"],["/在Swift中创建自定义集合/index.html","91c3c25e0fc587b9558e8d51282bc3f4"],["/在Swift中处理非可选选项/index.html","998222755692228121658b36733880f0"],["/在Swift中生成随机数/index.html","0fb930fa8cd8560c3cb21aa97891e109"],["/在Swift中重构单例模式用法/index.html","32b47f85a838118e52e45fcf761d4dd8"],["/如何为VIPER编写服务？/index.html","0d9ab6ab0a31b5de0623aba044329492"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d072503ee772ef4b98631225111535b3"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9beeb77e7b2b0557611529f73b7a4cb9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","cf2cb0396991a7cc80a26e456202af06"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e86ae609971e9f3b3d0ad8947584f7a9"],["/掌握VIPER架构/index.html","c0a3f1d797ae516de88175fd195c49fb"],["/揭秘 WordPress Hook 系统/index.html","9076969066dc3d2e0c9687efb8ba655e"],["/比较工厂设计模式/index.html","de6706df55e2d2e3ded532e84318d6be"],["/深入了解Swift中的Grand Central Dispatch/index.html","738ce1a40b1caa2926e03d7c49cf2f45"],["/深入研究Swift框架/index.html","7c99a789f4f19933406ef6e9141a3d14"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7d053fed4631178c35feb811f948c5da"],["/选择Swift而不是Objective-C的5个理由/index.html","51c48a98775723708a8ad91f48f52975"]];
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
