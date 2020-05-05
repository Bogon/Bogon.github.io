/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","48f4c42a1cdf11b4ad3d3d8cf162c272"],["/Functional Swift 初探/index.html","22f7d963a008e129ce16324bfc341dbc"],["/NSCODER和SWIFT初始化/index.html","2d547fb79c5f295f130893f5694444c4"],["/Swift 5使用UIImagePickerController拾取图像/index.html","ed4046fb6d8beeff788a82d97e7caf37"],["/Swift CompactMap vs flatMap：差异说明/index.html","7cab2f73e0dfdeaca204879c3f0388e8"],["/Swift Grand Central Dispatch 深入实践/index.html","6f5fe2d382f66cfedee57eb52ab21dca"],["/Swift Lazy属性初始化/index.html","50c4f710ea6fe58535e91ba74f961ea6"],["/Swift Promises 初体验/index.html","e9f8ce737ac9b5cae452fcccc68c57e7"],["/Swift Promises 探究/index.html","be04cb7690f4fef7a00e840a95524ae8"],["/Swift UICollectionView使用指南/index.html","7b490a655da89d5947b973889630d4f2"],["/Swift URLSession 和 Combine framework/index.html","946055714b56fda707e43b93774c9a24"],["/Swift 唯一识别的视图/index.html","b1d1f9d5a76dfe19fef56a04316c98fb"],["/Swift 如何学习现代UIKit？/index.html","518c79f32039445917b04b4ffe444a11"],["/Swift 用 compactMap 替换 flatMap/index.html","6ec4a94dcb48e591990daec8c0cb4bac"],["/Swift 选择和播放视频/index.html","b24b4cfdfbd56819078804ac6f1762ae"],["/Swift中UIColor最佳实践/index.html","e278934b6af9614793324f262c8f035d"],["/Swift中快速简单的工厂设计模式/index.html","b655a20d6dda74e6b230e8c4a1e9f853"],["/Swift中构造函数与静态工厂方法的比较/index.html","500dae9e0439d0a3c31f9382a46c79f8"],["/Swift中的UITableView教程/index.html","a0f8b5a712f4f6749ca12dd2e35d633f"],["/Swift中的懒加载模式/index.html","db1a42062b22880f1184ab256f4e4a3a"],["/Swift中的模块和挂钩/index.html","8766b603d82b3fe10648d7f9966870dd"],["/Swift使用布局锚点添加约束/index.html","509e56ef69dbe310d809387cb3f0a647"],["/Swift依赖注入设计模式/index.html","8befbe903cbb1d6ef455bfae6e54b415"],["/Swift关于Dependency Injection (DI)/index.html","bc7693c007e340b49e2ca7a54804e6e0"],["/Swift初始化模式/index.html","92c9c74ba401d05bfd1f7ca77afbf1fa"],["/Swift单例模式/index.html","618d2c39a1e71e48cd73852fb1c2eaa3"],["/Swift原型设计模式/index.html","6e8987bcb8eb3074092e4d93f9ce4004"],["/Swift命令设计模式/index.html","e84f225f6e05aae6cc8c6953eaa1ce0d"],["/Swift外观设计模式/index.html","1a5595f9764c98901945bf75e0b23517"],["/Swift委托设计模式/index.html","8c50e2091c0ecaf95b35ae2967edb9ca"],["/Swift对象池设计模式/index.html","adf6b2c2a00796627591c4cf0cdcf5b3"],["/Swift工厂方法设计模式/index.html","c8528376c93b8fd403b67bf92dda81fc"],["/Swift带闭包的懒惰初始化/index.html","a0218aac3c7e612059014b74ad207d9e"],["/Swift抽象工厂设计模式/index.html","0c9815c91d9b189ab45b75b835bb48eb"],["/Swift掌握iOS自动布局锚点/index.html","375e5b005e4efbadadc512ed75b18802"],["/Swift支持旋转的自适应单元格/index.html","506a91c4b2a28d145acbcefae8a21a3c"],["/Swift枚举值/index.html","5223ebb834eda233841d597d668d0ddb"],["/Swift生成器模式/index.html","836f084d0630c2d104a716addb336716"],["/Swift结合Xib文件自定义UIView/index.html","0737e5cff6b4a45a8b8a1d57667a1f6c"],["/Swift编写的20个iOS库(一)/index.html","e727f183b842ae1ff3a9ad0c81bd8813"],["/Swift迭代器设计模式/index.html","cecd463e3a7251acab7481df66ed714c"],["/Swift适配器设计模式/index.html","fee1ed6b55a58cde12de2214a599ab80"],["/Swift静态工厂设计模式/index.html","dd203e7dee8b5af3b2eee5dd8c1981c7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9fadacf8590a18d682ea96d3493a475c"],["/UICollectionView data source and delegates/index.html","b4feecdca4761ce68fe55e3c699b19ee"],["/UIKit初始化模式/index.html","5b7db4223a1f2af75df2714d28510b91"],["/Ubuntu18.04替换国内源/index.html","4a62c9e205795420d4567874bb4266c4"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3bf3ff8eee4dadbdb2a2f55076b7637d"],["/Xcode扩展/index.html","69bbf1c3f71f5fa92f4960078b742ea7"],["/about/index.html","a3377dc8550a6a27316dd7fb92da525c"],["/appleOS的Networking示例/index.html","da4103d178acf4a02f61b39a42274697"],["/archives/2020/04/index.html","15fe9824947fb35d44922b589d7ff24a"],["/archives/2020/04/page/2/index.html","5e616f0d1cf7e0c79a112385acdd75ab"],["/archives/2020/04/page/3/index.html","3a1209ed763e1f8087cdbcfb42a83743"],["/archives/2020/04/page/4/index.html","fdda0b0735e097feb9395080b0b21c66"],["/archives/2020/04/page/5/index.html","b8d720743bfcce783bd4833246b50070"],["/archives/2020/04/page/6/index.html","388cd0dc95ec89679babeeb5c8e3be1f"],["/archives/2020/04/page/7/index.html","10246e551f9e4b19d293880598f9cc71"],["/archives/2020/04/page/8/index.html","4bdf1fbc0c42292cc3a82a0341e876dc"],["/archives/2020/05/index.html","ac29fcfbf839f0e021f0887a32150122"],["/archives/2020/index.html","37b827d842192680d9996ae0b3c9cf86"],["/archives/2020/page/2/index.html","14cac6854932a5e11e34cea274174b60"],["/archives/2020/page/3/index.html","2b8e5a32755fa3365b103681be895e6d"],["/archives/2020/page/4/index.html","406651f30871d49c2ef3a09bbdbfa8a4"],["/archives/2020/page/5/index.html","e11454f3e099eb7cb4ef2487229cd6bc"],["/archives/2020/page/6/index.html","8ec22b367f4fd0de639d99a123b61c38"],["/archives/2020/page/7/index.html","2d01b4ccce28c214a4e03eb814fd645e"],["/archives/2020/page/8/index.html","dda4a1e5e67185da2fd852b27d8a6706"],["/archives/2020/page/9/index.html","87316e5f602ce0a0320e3c1e4d4e8380"],["/archives/index.html","973404f10c7e17ed1068fb6f1dfe653b"],["/archives/page/2/index.html","40f866e621995573714ada278cf6706c"],["/archives/page/3/index.html","497870920faf9ef122c3a95f0a53f2f9"],["/archives/page/4/index.html","4743f4e955b4b285ceb30e0a5c00f27b"],["/archives/page/5/index.html","bee7b3cabc1ff807f0f426c70e52cd68"],["/archives/page/6/index.html","f7ae439c60850a20c56215bbd57f3fe3"],["/archives/page/7/index.html","0da335c3dbb38a1650e1735987c5b49f"],["/archives/page/8/index.html","a6d962d0d47002a63686cdff0d998a90"],["/archives/page/9/index.html","e3dab8dd6f1ff1fc8ab253018f7c22e0"],["/categories/Advanced-Swift/index.html","c92987baa00f61b030d8585fad5274ea"],["/categories/Codable-protocol/index.html","0f9cf502f8b8acfaee5c0d6c74902a9d"],["/categories/Combine-framework/index.html","6043045c9c79fb6a18837e4c4e9ac42b"],["/categories/Combine/index.html","96389f6c39f59ba5e9ec0bcb90359864"],["/categories/Grand-Central-Dispatch/index.html","870277524c749faee17bd0193fda9bc2"],["/categories/Hexo/index.html","be35dd28fdbf9c0da19957df37f0bd0b"],["/categories/Promises/index.html","2336202a6d151b03fa6b9d1f907f65dd"],["/categories/Result-Type/index.html","d19137e0393fbcb2c9b88a94ef647d8e"],["/categories/Server/index.html","a49ee99c703753ff0172c8a9ff633638"],["/categories/Swift/index.html","37f10bd4f8b932fe785a1ff46787f411"],["/categories/Swift/page/2/index.html","f36e0eb19e1e49f63eb1a399357ed5bc"],["/categories/Swift/page/3/index.html","0f286f22e3aa4e1a31941fed26561437"],["/categories/Swift/page/4/index.html","cd1d6be6ce072eaac21028409b80b0f1"],["/categories/Swift/page/5/index.html","698ee26127e0082aa6723df681195935"],["/categories/Swift/page/6/index.html","4ce22412615c8d4ba3d8de53833b0522"],["/categories/Swift/page/7/index.html","a90616e7f00dede95e9a15ff7409d5d4"],["/categories/Swift/page/8/index.html","85a7a9c5f26df41429c8b981143db3a1"],["/categories/Swift5-2/index.html","7a61b35d08afb300e336a37e00bf1248"],["/categories/SwiftUI/index.html","8876a823cec87390d2cb534435540ecb"],["/categories/UICollectionView/index.html","db36acd446960d967b767759085e64a5"],["/categories/UIImagePickerController/index.html","74885ff706eed403cacf715dcbc59edd"],["/categories/UIKit/index.html","e1c523bf8dc7a9fccdf84197cd1dc3dc"],["/categories/UIKit/page/2/index.html","708b694d4a4b0335f5ed8e7d328c5fed"],["/categories/UIKit/page/3/index.html","aeb8c459bf996207941c43b7f8e00495"],["/categories/UIKit/page/4/index.html","c0146b8e386f3b416a8902d2747242cf"],["/categories/UIKit/page/5/index.html","316d2784ab8ba9e0470b844b9195a7f9"],["/categories/UITableView/index.html","35c73406a2e9e7e87eae1a31217aea32"],["/categories/Ubuntu18-04/index.html","bd1c2088df5993b4623d94cc5be27e6f"],["/categories/Ubuntu软件源/index.html","247bbec63b75d2990fc40d9af69ba064"],["/categories/Uniquely-identifying-views/index.html","202e4bf3b3ba6a20ff5dac5a37717392"],["/categories/VIPER/index.html","a945e4346ada16453edb6092345eecb4"],["/categories/Vapor4-0/index.html","43d41a3724367687bf5c77826b75d3e0"],["/categories/Xcode/index.html","b48b33d41a180f36506852600ddcc183"],["/categories/appleOS-Networking/index.html","aeafb30094df1772f8524a6943105cbd"],["/categories/enum/index.html","ec4f4518412384c00f4a3a36b8fec4c5"],["/categories/iCloud/index.html","72658063ce292f7954eb982a31b3ce68"],["/categories/iOS/index.html","03a5580aeae3559fd169624cc7cf5d11"],["/categories/iOS/page/2/index.html","ea04f2ba5c24aecce8f246e97b3637d3"],["/categories/iOS/page/3/index.html","8772c00f1735112052060d44b8b0b420"],["/categories/iOS/page/4/index.html","2bb5f83e847c2c4dc1b95084dc5c548d"],["/categories/iOS/page/5/index.html","daa43ecc11aded29a317e6afc2760e17"],["/categories/iOS/page/6/index.html","0e00ef76a04e05a972226d06365a47bb"],["/categories/iOS/page/7/index.html","5a0691988eb83359561a242e9ff0a004"],["/categories/iOS/page/8/index.html","c4a732f6b1980ecb9e60b3508f69b65b"],["/categories/index.html","f257390726b6b8cf17c44ed8487c1770"],["/categories/random/index.html","f5e42bc53ed37a18ce40e4286b7de235"],["/categories/三方类库/index.html","350cf5857fc945fdddff7a04908ede89"],["/categories/函数式编程/index.html","9b1eb2d858d35d33ed0fad9ce50bd6cb"],["/categories/子类化样式/index.html","c55ca1c7acfcb9301949e0c876276d00"],["/categories/架构设计/index.html","e5b2d756d6b78641c170eb1a44883557"],["/categories/用户体验/index.html","54e7102ffacfff5dbeb2ce3d0fa0d24a"],["/categories/设计模式/index.html","fef8a78f972361dba6cf69450a0dc2e2"],["/categories/设计模式/page/2/index.html","1a44aab81145a70c84b31be74dc58b8c"],["/categories/设计模式/page/3/index.html","29452c7c0eb531b2395b65a1593c689d"],["/css/main.css","c74bdff5db18a63ca25f0fd8680c7e5d"],["/hello-world/index.html","7f4678b56c80111153305a6719784315"],["/iOS VIPER架构深入实践/index.html","dd4a097666cd6e283b20ba5446e94f3a"],["/iOS 自定义视图，输入表单和错误提示/index.html","e5862168e098c02675e5d7916e78dfa9"],["/iOS如何使用iCloud文档？/index.html","e42a5f6966cb5ef723c7348ea9055d72"],["/iOS子类化样式/index.html","572c67f94d7dcd4abfec80c85ef28dde"],["/iOS自动化布局编程/index.html","f169be4b760795833a773003bf0355c9"],["/iOS自定义转场(By Swift)/index.html","0fca60ffa1d4efff7622ae5405e60ea9"],["/iOS项目架构：使用VIPER/index.html","7d666977da4b5225c00e3877e2890549"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7b63d271f550b13bc83f508b1ec24428"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6ac089d069507be2680cfcb93feca142"],["/page/3/index.html","69f76e06cffe5cc01dc38e63e6c54e60"],["/page/4/index.html","0bd1b5e33b3c77f9530c0357676396d5"],["/page/5/index.html","a69fb53d5c9f3a4e13c38ce3d42511f0"],["/page/6/index.html","527da58506d1b745331f61f3504b4a1c"],["/page/7/index.html","448a958f8de154ae81c3fc4255fec540"],["/page/8/index.html","0b5ccd79b7f730a6158d7b922fc0cc20"],["/page/9/index.html","1e350bbeb29c3e8a1c206c24514b0d9e"],["/schedule/index.html","0caa89bd7cd08b64ff29bbfc315d3f84"],["/sw-register.js","9ec50a3d21a61a03b9157c9437639dd5"],["/tags/Advanced-Swift/index.html","13696ffc924dec08b7a2ef37a69d0e58"],["/tags/Codable-protocol/index.html","074a51f9c7558d2078c797ffd8ccfa39"],["/tags/Collection/index.html","40db3b31851bf2ffeb7484553b48af15"],["/tags/Collections/index.html","7ae05eedd354bc6d82eadadd503bc4a8"],["/tags/Combine-framework/index.html","d4cb0cf2d98671b7ad35f826294c8231"],["/tags/Combine/index.html","587753c5760c88f8fe1fc9783db3cef6"],["/tags/Dependency-Injection/index.html","c4222ab44aeee3dc407177dd899c63ca"],["/tags/Grand-Central-Dispatch/index.html","73d4bd296f28cecfdf94813b39a359bf"],["/tags/Modules-And-Hooks/index.html","8b438366fd6786fdbcf0a7983473dd73"],["/tags/Promises/index.html","e6fe6869241b6deb7c6926375d406d31"],["/tags/Result-Type/index.html","560368512c7018255bc55c57956ae971"],["/tags/Server/index.html","8408b7e5cb736a79a4ca0b2c41184654"],["/tags/Swift-Package-Manager/index.html","7c60ef434251973eed428edaf2934b90"],["/tags/Swift/index.html","48276dc2d43429fd89e02a5a52a90aef"],["/tags/Swift/page/2/index.html","f87d0f7c4bb9a4af81c42492ac535cda"],["/tags/Swift/page/3/index.html","10cd2638d9256e258da695c53e660f0f"],["/tags/Swift/page/4/index.html","cfdada305d30c62e52a6c93fe7b76974"],["/tags/Swift/page/5/index.html","cfae12ddd046995a82ddd7b947c9f258"],["/tags/Swift/page/6/index.html","0516c9f5c83e5a1814eb7ae68dfd994a"],["/tags/Swift/page/7/index.html","8ecb037c9e2f61678dd156c11ff0699e"],["/tags/Swift/page/8/index.html","7f616eb4ba8dcf2360512165e2dda720"],["/tags/SwiftUI/index.html","5d4f05fecc56e7dc195a628d18be90a8"],["/tags/UICollectionView/index.html","8245abab7509b54cb92615893d11cefd"],["/tags/UIColor/index.html","0803d59d1d69ccecaf5002dfc05c3c17"],["/tags/UIImagePickerController/index.html","fd38122252f3ce66f193ba70d3f620a1"],["/tags/UIKit/index.html","25299c9f2239c6f3e9ac069c3f8bf95b"],["/tags/UIKit/page/2/index.html","2553849a651a25720e871797c0160da4"],["/tags/UIKit/page/3/index.html","de9ef185b5c58a50d4b343e6411095f7"],["/tags/UIKit/page/4/index.html","85494b6f3bd2b4a7d6694ab7b0ef8900"],["/tags/UIKit/page/5/index.html","a230f65599eac35909b74905d1e353a4"],["/tags/UITableView/index.html","d7a7a4d9656ceb0eee074fa26215c68e"],["/tags/Ubuntu/index.html","66221f08a151c6fd1800f98cf7e495a3"],["/tags/Uniquely-identifying-views/index.html","d98432b588b1691976804bdfed26155b"],["/tags/VIPER/index.html","3b299db8b3f6227ec596340205d5814d"],["/tags/VMware/index.html","a6b37d9000d5ea74e9acfdbefef4e58f"],["/tags/Xcode/index.html","fca0d009c81a56945e8b3134b819ac61"],["/tags/appleOS-Networking/index.html","30d6c4c67b86b336fbf2d4cea7808d0b"],["/tags/enum/index.html","a8d5efc62932c55dfd0e7cffb1628d96"],["/tags/iCloud/index.html","d21afc68476ec0ce0364f622339c2c3b"],["/tags/iOS/index.html","b5d5364a08ecd52c73ab2086c939efb5"],["/tags/iOS/page/2/index.html","dfd71c2e6d364f3d67092c082202078a"],["/tags/iOS/page/3/index.html","e3879d0cb860d446cb64974867fb2abf"],["/tags/iOS/page/4/index.html","3a2ebf83d5474ee5c31125a31b5d58d0"],["/tags/iOS/page/5/index.html","d4881f6d32a6789bf29f71425d61d982"],["/tags/iOS/page/6/index.html","9ef65b0c2d0b572152479a1f84abcadc"],["/tags/iOS/page/7/index.html","72f1bcd5f26ebadfdc32d34146393f1d"],["/tags/iOS/page/8/index.html","20c4709df401e121cdc28b55b46c5800"],["/tags/index.html","2c0f5e1351f630ee64574516a3bace3a"],["/tags/non-optional/index.html","0f45c35b1e3d59a10ab84ea51e99fb52"],["/tags/optionals/index.html","5fbdd33c04e172b338456dbc15caf0d0"],["/tags/random/index.html","79041e15eadf9baa44be5c4550ec6145"],["/tags/transition/index.html","705c953be3b924effcad6c93b5255aac"],["/tags/三方类库/index.html","022078efec354485d685c91e5b1336f6"],["/tags/依赖注入设计模式/index.html","f7a08dd94d283b0568707c467e7ffad1"],["/tags/函数式编程/index.html","a34afe8991f5e0779306f33c5ce738ba"],["/tags/初始化模式/index.html","11ab48c0f9c0c33108b14fa1754cbf61"],["/tags/单例模式/index.html","8bdb48cf10eb7ef64a38041729e24df2"],["/tags/原型设计模式/index.html","1d44514a63cd41fb8153a5b225371064"],["/tags/命令设计模式/index.html","57e8be6dc95fd171415396a4f6beba3b"],["/tags/外观设计模式/index.html","32fda869ea0a6681a96db6514cf31f7d"],["/tags/委托设计模式/index.html","7dce1189e5776b0b9e8c6953af297f7c"],["/tags/子类化样式/index.html","d5fb2cb5e633518935e30301046b80f0"],["/tags/对象池设计模式/index.html","bca85c0255215c01f1efdf1c7ee1ece1"],["/tags/工厂方法设计模式/index.html","9c1646398e369c4aac997b2e46a02d00"],["/tags/工厂模式/index.html","48444e38848c65b06b42464ae32cb50b"],["/tags/工厂设计模式/index.html","a778b85c2fdbde63ad54aaa6d1d1ef97"],["/tags/懒加载模式/index.html","486c638dca245d125d07e9b9506094c2"],["/tags/抽象工厂设计模式/index.html","c80dc2f3811d1936d9ec01ca5e1dbde6"],["/tags/构造函数/index.html","ccd8a282aa618084777938d8990a7d93"],["/tags/架构设计/index.html","867e4dc3dce7db44d1d754c93bee3b3c"],["/tags/生成器模式/index.html","8871978bd0cbd0e8cf129e255ec490db"],["/tags/用户体验/index.html","bc864eae50a7a20c73857a1542483a39"],["/tags/自动化布局/index.html","087d0d00d59f5d90310626ddcb210d93"],["/tags/自定义UIView/index.html","c7487aa1ee33910b19521ca67687867d"],["/tags/自定义转场/index.html","26a20d5c9627207a111b747b310eb5d4"],["/tags/自适应布局/index.html","3d2d825c95c4e62a8e3413c1849b75bd"],["/tags/设计模式/index.html","cd563680ed5f30460ba42dacdfc1ed18"],["/tags/设计模式/page/2/index.html","a7a5ae232ee81febfa3a8717a31c58d8"],["/tags/设计模式/page/3/index.html","5f01de5ad78bbe4e6e350c228bdff332"],["/tags/迭代器设计模式/index.html","e94aa5cfa0d8d9232f8357c02ff72e61"],["/tags/适配器设计模式/index.html","a78c7cd102ba4c366b22a94e1452e2e8"],["/tags/静态工厂方法/index.html","b9528937d8def219af849ec87b9fd2e6"],["/为iOS应用构建输入表单/index.html","ac19f9679e6fd2689960d410e1467715"],["/产品开发的幕后花絮/index.html","5b1e7547953f01c85f816cb96d02dbf5"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","67688e217508e2f0cdc5161b5c86627f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","81f5cf89d7ed557a1e9c51ce7f7e6e64"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5f9dfaf64b015e6018e0aa62ba183b3f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","555659eaffb292ba2882aac40523740a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4d304567d85c379f6ca407e6ebfdb1bd"],["/在Swift中创建自定义集合/index.html","422f91ac82454eb5311fff31075bcacf"],["/在Swift中处理非可选选项/index.html","47e3f3f7d6647dd28e38605586bdf20d"],["/在Swift中生成随机数/index.html","faabf5d1ccff6a202bd64430e4385fba"],["/在Swift中重构单例模式用法/index.html","e93a10fb1d59b5643962edc90b71aff6"],["/如何为VIPER编写服务？/index.html","f88ed7ca66c47a073c575b8eec37bfcb"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c3705e5ce848759ff54d2eb633035534"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","71e7f39c2857177565ff17445a6724ad"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","b1443952216ef165b21b87afa8a2b50e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","04469323172205cf877e4367111ff7b5"],["/掌握VIPER架构/index.html","27ec1d3604d5838d2233584569691a46"],["/揭秘 WordPress Hook 系统/index.html","1f08d5ed2344875f5a0aeecbb70fcd6d"],["/比较工厂设计模式/index.html","8e4e32f78817a69ac93a1399cb1139f7"],["/深入了解Swift中的Grand Central Dispatch/index.html","d5113e77a0651157a23dcc359a1bb744"],["/深入研究Swift框架/index.html","8282e144dd32776c7677cbdc6d9aa056"],["/适用于iOS开发人员的VIPER最佳实践/index.html","06c4d1972ab8c4614a8c231c037c8eec"],["/选择Swift而不是Objective-C的5个理由/index.html","d0bd8260929d7a89917ff395a1e18ad8"]];
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
