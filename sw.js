/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","1c3a53373eacfbf3e904e85f93e3a6cb"],["/2020年iOS面试题总结(二)/index.html","8afd7a277d099b20c9b111f1fedecb9d"],["/Advanced Swift系列(一): Swift 简介/index.html","7059642f99ce8375b39022a1fba11f28"],["/Advanced Swift系列(七): Strings/index.html","51751dbf53e5f4d7be8bd00721381065"],["/Advanced Swift系列(三):  Optionals/index.html","2df0f29ddbc6b60f40a677a6c33a83c4"],["/Advanced Swift系列(九): Protocols/index.html","88800d8593a2a68319168ba71cb2754b"],["/Advanced Swift系列(二): Build-in Collections/index.html","dcf1d18702cc0e6a63d7b8f86e2333f2"],["/Advanced Swift系列(五): Structs and Classes/index.html","b86db5b0b1602d223d0a867bd7c013c4"],["/Advanced Swift系列(八): Generics/index.html","04571f6edbc4a6ff9759ea001f8995e6"],["/Advanced Swift系列(六):  Enums/index.html","40d7d23bc83f5f07427a13177a29eb2d"],["/Advanced Swift系列(十): Collection Protocols/index.html","8ebdc85a5355dc3d52bb003c6ea82afc"],["/Advanced Swift系列(十一): Error Handling/index.html","0f5665b9feb70d9cd3560a431002eb61"],["/Advanced Swift系列(十三): Interoperability/index.html","c280b19c6e3d32847017f386cc8ac53a"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","07a5435855b48d6148446fe649691448"],["/Advanced Swift系列(四):  Functions/index.html","d7f3c681fa5302d03cd55c7158cfdb3d"],["/App Architecture系列(一):  简介/index.html","5156cf2c5a0cb7300a7eafe62caf9da4"],["/Functional Swift 初探/index.html","39725e2b0777c63f8befc7fb678229fe"],["/NSCODER和SWIFT初始化/index.html","92e4e9e7bba10b6d73ae6856f33701c7"],["/Swift 5使用UIImagePickerController拾取图像/index.html","57500371bc7a4f875c0913439ba3e86d"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","b39618f0f4be9ed8526bdef992fb535a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","df65b532d36dd1883af82e6e07b3ddb8"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d8e2547b4ead9fa6cb6994db67db216f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","eba2520d91edc4132528dc9d5eadab0d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","551c12536c663d097ccd8618a33de6d3"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","5d4e0e0ca12b1a045a44104ba6c3cae5"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","3f89a7cd59f75472f852f767ea6179b5"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ec375eab0a55d69db79680a823fab016"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","4079f468e2c50e48939cf0b99317015d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","972c09cc976aa606cac550991fff28ea"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","fff26ee9168828a8d694fafedc5818ea"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","2945143b2471e66bff98321c3dc9453d"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","598da850b8fba1d0093a82e08cf35110"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fc2687b0b3803b999f4a8e34fd5c9490"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","617667fa2d17d757637b880f9dceb819"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","10f5b4ea4f45e0e2e828a2d9a0322a8b"],["/Swift CompactMap vs flatMap：差异说明/index.html","c3c88aab2c8298a443f4421b2e1ad273"],["/Swift Grand Central Dispatch 深入实践/index.html","df87846ea7c3aee4d53e6f711acdd8ee"],["/Swift Lazy属性初始化/index.html","1807e7723832d138dd13eb95288e2cc0"],["/Swift Promises 初体验/index.html","5f8e6f5ca2e1fcf2fa1437b4b78d6417"],["/Swift Promises 探究/index.html","2d8d46e0e9cd1f4af60faf07d11b9573"],["/Swift UICollectionView使用指南/index.html","2262800f72277359e29aaff934751881"],["/Swift URLSession 和 Combine framework/index.html","f6f3adbd4d3e16082a23fe3aedae94db"],["/Swift 唯一识别的视图/index.html","a89b680a3ad6a28907ee8bca7bacb433"],["/Swift 如何学习现代UIKit？/index.html","8a4826897cc884453db988d922e17744"],["/Swift 用 compactMap 替换 flatMap/index.html","2ba99216b2824668847220aa4326a9dc"],["/Swift 选择和播放视频/index.html","8a4c04fd33d3197e18e4c7f12cf31df4"],["/Swift中UIColor最佳实践/index.html","d26e4090baa4c0e017c8295085dc94bf"],["/Swift中快速简单的工厂设计模式/index.html","5f0667978f88238f14348a4d267e1563"],["/Swift中构造函数与静态工厂方法的比较/index.html","64818dbd5a67905c0f0e3791510c4abb"],["/Swift中的UITableView教程/index.html","fd857e01681a2b2fa45a6f6940dff64c"],["/Swift中的懒加载模式/index.html","a57fb19bb1a56f79c2d526e7e3300e90"],["/Swift中的模块和挂钩/index.html","e41a1183ce7fe2afc012e7802ada2456"],["/Swift使用布局锚点添加约束/index.html","c041d21efed4e41b49ced1a28a497e98"],["/Swift依赖注入设计模式/index.html","dcbd5a5bcb73b06ce6c03160e19647bd"],["/Swift关于Dependency Injection (DI)/index.html","a6e1ec9d569c4761ad078af4ab86404d"],["/Swift初始化模式/index.html","c07647727d0c7c320794d6a8457712ec"],["/Swift单例模式/index.html","3c2b70755da8f0298e1c5cbf562fd3cc"],["/Swift原型设计模式/index.html","3ae1ac0cab504189763bec87a12a52a5"],["/Swift命令设计模式/index.html","3c4106c71c3eca5f833d10d2bcc68899"],["/Swift外观设计模式/index.html","1c49e4cb9a987f69ef7741428db14fdc"],["/Swift委托设计模式/index.html","281d84fd46b595004f7be261f0e45b08"],["/Swift对象池设计模式/index.html","642b2bbb384016528233707a653f0aae"],["/Swift工厂方法设计模式/index.html","8626bec4dae1f478dc1a3f7b6688d4a3"],["/Swift带闭包的懒惰初始化/index.html","bd8f8fc70bf5361bff72c8774528504f"],["/Swift抽象工厂设计模式/index.html","31225428da4cd1705c000fe83b52dead"],["/Swift掌握iOS自动布局锚点/index.html","ae5e7be0a386bfde2347c247b831eb14"],["/Swift支持旋转的自适应单元格/index.html","ca88b0722bcb203e4c5d301d174acce2"],["/Swift枚举值/index.html","5ac54ca2a9a39d2bd944e3e539182f05"],["/Swift生成器模式/index.html","6097f9e6bf8139750a0b15466c4a8ec8"],["/Swift结合Xib文件自定义UIView/index.html","cabe14ec982f2651d94ede191d09b204"],["/Swift编写的20个iOS库(一)/index.html","c163bae162d9bc4b86844487fd23e77c"],["/Swift迭代器设计模式/index.html","de4cd72b952278818b50271ce59b8d4f"],["/Swift适配器设计模式/index.html","15683824f6e39913a2e66eb44e62ebff"],["/Swift静态工厂设计模式/index.html","85feee0057e4866358105acf0717c356"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","945e5112b2aec785423776b8ad088094"],["/UICollectionView data source and delegates/index.html","400ed2e3a4f4acbe145ef77e21921004"],["/UIKit初始化模式/index.html","76b76f12cd9c9c3721c0729574b5fe20"],["/Ubuntu18.04替换国内源/index.html","83b9caa4fe52212cdea2f43254f24843"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","71999166d9f0c6bba18fb8c40e17fab3"],["/Xcode扩展/index.html","21d258c915f3dc98e542696832c33a81"],["/about/index.html","993fcc81f2529a9cc52eec573af1b915"],["/appleOS的Networking示例/index.html","2f47d0894d0278df8944d22a5abe40a6"],["/archives/2020/04/index.html","2b5c6d97c602014602d8182f91e11e08"],["/archives/2020/04/page/2/index.html","496fb8e5bcfecdbb6114839dfa006e9d"],["/archives/2020/04/page/3/index.html","1f25148a68d1f0015aa83b127c712022"],["/archives/2020/04/page/4/index.html","db6aaecd903a3db74e512c854fa25b70"],["/archives/2020/04/page/5/index.html","3fada6d8a945b776f9018789e16e1ad9"],["/archives/2020/04/page/6/index.html","1ae6405ce77d915eb65df3fcb7323c62"],["/archives/2020/04/page/7/index.html","fd8cad820ac0c86d02e28e6b77c5a350"],["/archives/2020/04/page/8/index.html","0cff056914768cf07e843f9327f020a6"],["/archives/2020/05/index.html","6fa12dbd40a3f3db8998f71aa1a1e06a"],["/archives/2020/05/page/2/index.html","a034febfa8a1b5d8f01b208c8c7c1b9a"],["/archives/2020/05/page/3/index.html","99585157f77b3b6f7cfff6069b565377"],["/archives/2020/05/page/4/index.html","5c6dae4f315ed24cd40e2d099e5213d9"],["/archives/2020/index.html","9c890ada076dbbc1a38b28a36f3fa61b"],["/archives/2020/page/10/index.html","9caaf4f16a33871c5981a33c09a5b021"],["/archives/2020/page/11/index.html","2ae09850e8923fe70e2a6b416b7463ab"],["/archives/2020/page/12/index.html","8aad237d1d3911a40fee692f6fdb389b"],["/archives/2020/page/2/index.html","c8ee5b998ea8be66b8e296e54dfc04ce"],["/archives/2020/page/3/index.html","56d79e7a212d81299251fefe3e1580b5"],["/archives/2020/page/4/index.html","a0656781fdee255a1515243dc40d67a1"],["/archives/2020/page/5/index.html","d0ed581783cf8ff23ae41e39c15f75aa"],["/archives/2020/page/6/index.html","a2a2682862d666fa2c1a9eeb61c80872"],["/archives/2020/page/7/index.html","a86215bc423cecdfcd686e463b595fda"],["/archives/2020/page/8/index.html","7e7283a3f2f8480a041a741c43aef3dd"],["/archives/2020/page/9/index.html","9b48f99d802465d656c1e945aa75ef80"],["/archives/index.html","462ff42fe180c1237e03220d9e46912c"],["/archives/page/10/index.html","4de737e5bff86f6e6d95a22d67f2eaa6"],["/archives/page/11/index.html","cabb0b3497f7401ed3e3d0a91c99716c"],["/archives/page/12/index.html","e88c257d5e84dbbf43ef321806dac35c"],["/archives/page/2/index.html","f6d0a7e3f5bcf725165db70fe6797706"],["/archives/page/3/index.html","2051ea769af04c1eac7cd1b244742741"],["/archives/page/4/index.html","f007c9248164ffbadf146602ef332aa4"],["/archives/page/5/index.html","bca5e9aabb29c096617b74fa289bc37b"],["/archives/page/6/index.html","61db04d269a82aeea7dee136382fb50c"],["/archives/page/7/index.html","d70adb9d8c7bd673fb229960a31cbd4c"],["/archives/page/8/index.html","04597bce568deac971b537071c9ade32"],["/archives/page/9/index.html","96abe56605fdc645aeada413e746a263"],["/categories/Advanced-Swift/index.html","9f07c10a054ff9e6c3174e8c884da0cf"],["/categories/Advanced-Swift/page/2/index.html","975ff114a77405a7ac86d8d4894b26dd"],["/categories/App-Architecture/index.html","14f9d0414ec3957246d50a22e82ee245"],["/categories/Codable-protocol/index.html","399fc80eca554d5f865d1905ab2d78a0"],["/categories/Combine-framework/index.html","696b2bb912130ce950f725a5c825dc04"],["/categories/Combine/index.html","2678b63d644ea678f94d408922859459"],["/categories/Grand-Central-Dispatch/index.html","c82e20b706f24a36e812a5b31bff3a13"],["/categories/Hexo/index.html","22095fe4ef82ebd8b4ad74175280760e"],["/categories/Promises/index.html","0577553818e1e2b28e16a79da39806e3"],["/categories/Result-Type/index.html","9155b7914b14ea2562bd4f55446a6a41"],["/categories/Server/index.html","c9eb811415682aefb89f85a4a5bbaba1"],["/categories/Swift-Apprentice/index.html","2f31743953d0ba90c3b92dab82f9f360"],["/categories/Swift-Apprentice/page/2/index.html","bee76e25d3aab63e87983e536ada8527"],["/categories/Swift/index.html","3d68d6a50c5c5b156e2d2b6a7a835e15"],["/categories/Swift/page/10/index.html","af146725a083c1073fb2e28420c88681"],["/categories/Swift/page/11/index.html","4248eb7c3606508654b857855e5856d0"],["/categories/Swift/page/2/index.html","0d2f284c1c49d514c448bd082825e245"],["/categories/Swift/page/3/index.html","453b3ef5840503e11f59cbbcd2194ed6"],["/categories/Swift/page/4/index.html","7dc9037e6c079c7eec9b573556c9541a"],["/categories/Swift/page/5/index.html","e76ae1e0f611422a9b69716666aacae8"],["/categories/Swift/page/6/index.html","e5cb725c3bd45e227d16545edf01fac1"],["/categories/Swift/page/7/index.html","5ae22cbf5b2d55e56819bbf91c9929a0"],["/categories/Swift/page/8/index.html","2caaec65904017535f140b4dbeda90da"],["/categories/Swift/page/9/index.html","d0cea92ca73c858188994abe454f46fe"],["/categories/Swift5-2/index.html","8fdd185320f9afc5edc958fda316e04a"],["/categories/SwiftUI/index.html","6bd54c0a6a8a4cff7ef313df68f5c21a"],["/categories/UICollectionView/index.html","47f8b32c0bf3b6923a76f3bdd136c4e1"],["/categories/UIImagePickerController/index.html","bb954b221e761f577fed9d86d2b664be"],["/categories/UIKit/index.html","80ddf2b8257478200a39ce2316090d8a"],["/categories/UIKit/page/2/index.html","375e2d1b294256d0385cd83dacfd5064"],["/categories/UIKit/page/3/index.html","3fb7d0eae0b32a5f96f16a4c7b18df12"],["/categories/UIKit/page/4/index.html","505aff994b0c073bd85acf268e6fcb08"],["/categories/UIKit/page/5/index.html","bba90f2d054800c24ab084b95ddbe59f"],["/categories/UITableView/index.html","477878442afba6a0e7cc3a103ee77ba1"],["/categories/Ubuntu18-04/index.html","3b178e59006b272fa8721e96a6772905"],["/categories/Ubuntu软件源/index.html","21beb2fff4283b64c14a28df07a1d9ed"],["/categories/Uniquely-identifying-views/index.html","4c1d0230da157ced1a4e192aa13294e4"],["/categories/VIPER/index.html","6551ba6773a447d237bc975819a07df2"],["/categories/Vapor4-0/index.html","796e16828ba82efc438962b52a2178ce"],["/categories/Xcode/index.html","6608535e0284a9f12ec3adac592b9de3"],["/categories/appleOS-Networking/index.html","8532952d8d15cbcd53ec802d4b332fe0"],["/categories/enum/index.html","e85e94ee35a669907cf7b297be1438df"],["/categories/iCloud/index.html","a305ce1f959e6f5ee5968bc5936d21e3"],["/categories/iOS/index.html","869641af3e26c2a00539bb7a87bb5550"],["/categories/iOS/page/10/index.html","f16faab18ab76ce5e5503cc713b614b8"],["/categories/iOS/page/11/index.html","c9f8cefc03dd6226f1c812c14cd366ba"],["/categories/iOS/page/2/index.html","534b7e8e9d299b5e06d8de3fec714e4d"],["/categories/iOS/page/3/index.html","d1eefb55adc770ffb56d625b94662719"],["/categories/iOS/page/4/index.html","f8b5ece5ff6975002b493691bf5fe492"],["/categories/iOS/page/5/index.html","b4ceede68cfbe00a0f44c89f8e78f6e0"],["/categories/iOS/page/6/index.html","b08995b34b0c9d225bbaa0450200fbc8"],["/categories/iOS/page/7/index.html","2ad0cc8f30e322dd8a381649969a3e20"],["/categories/iOS/page/8/index.html","b2683ccf7a68c4b2834164cfd55b6f72"],["/categories/iOS/page/9/index.html","7ad96af8c54271dd443216dc3d7371a8"],["/categories/iOS面试题/index.html","aa311559d90ca95800e0d87a088f719e"],["/categories/index.html","41b91d4d2ec0a0afecbf0134f69c83fa"],["/categories/random/index.html","dd8afbb25af05a19b1e19d987cbb0f4c"],["/categories/三方类库/index.html","248d20a00ae00751aa7aadfa09b21d41"],["/categories/函数式编程/index.html","da3dad3992e53d2f0004aa20b75ef660"],["/categories/子类化样式/index.html","e4bbca48dcceee1eddb473d15905eaf0"],["/categories/架构设计/index.html","bd20b20c7dbe12e2589f0874ace3ba0d"],["/categories/用户体验/index.html","f4fcb3a2092899ab79b49b15fba2dcd8"],["/categories/设计模式/index.html","a726775afa795b58c55d578382efb1ba"],["/categories/设计模式/page/2/index.html","a4953164e39cee84fe330bc7a53c8ff1"],["/categories/设计模式/page/3/index.html","12ab1176a75059064ecfad2520e0f618"],["/css/main.css","49254274fdf4f70d3d0bc2baddd218bd"],["/hello-world/index.html","4d747ad8f12f8066838b42ee182b04c1"],["/iOS VIPER架构深入实践/index.html","c484836b394e87320b5e93ca6c5b04e3"],["/iOS 自定义视图，输入表单和错误提示/index.html","bc36a9e97b8a156480df9c3dbb64e2c7"],["/iOS如何使用iCloud文档？/index.html","625f2a16b795411c5e013fb2e94a2bc9"],["/iOS子类化样式/index.html","1766fe9b680bd61ef937bb63b6ce76fa"],["/iOS自动化布局编程/index.html","aa0a8bbe7ccee1c4acf6e6875bb156a0"],["/iOS自定义转场(By Swift)/index.html","3547a7925184bf8dfcc353ca9e25da29"],["/iOS项目架构：使用VIPER/index.html","f646948d2bc3eb6f7059489bdd6f8ae3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4e5db242dac003a25bf4c88d365a2bed"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8297f13e46a6081376dc7408b1fcdc2e"],["/page/11/index.html","8a0b76dccf68e07f12135b95af22287a"],["/page/12/index.html","e62e5c4a05d34192a9ecb504eb179de7"],["/page/2/index.html","01b1f0d9be6ad18893852828ee5a05c1"],["/page/3/index.html","3a593184f93238cb8b01624bb9cc640f"],["/page/4/index.html","a1c7b1840b6f512e275e06e3138e8116"],["/page/5/index.html","6c7e24e11659b39f5413879c9243465c"],["/page/6/index.html","94dac133ab33f30d4656447fc26e9c69"],["/page/7/index.html","511acb71cf14eb0a70876f1716cc784d"],["/page/8/index.html","636615f9d750b8e16a7029347be8fbf4"],["/page/9/index.html","f9b40fd4794367d6b4c9f03cdde5ad73"],["/schedule/index.html","65a425c69f87cb1b2975035877a24bc1"],["/sw-register.js","927a1836bdc7af6c3d1d4c1707f01b01"],["/tags/Advanced-Classes/index.html","fe281e51e88618698e6bbf041505a0fa"],["/tags/Advanced-Swift/index.html","f46e2e292507615a53f507cb5e8c7b15"],["/tags/Advanced-Swift/page/2/index.html","e520df03d36337646a4f789e47d3f873"],["/tags/App-Architecture/index.html","be87626bd16e13c971262ac8cac5a32b"],["/tags/Arrays-Dictionaries-Sets/index.html","7e4f528ca7d02cf5b0ac9dddf9bb4977"],["/tags/Build-in-Collections/index.html","5ec7cd20921bfa72e1bf11d4f0a0b13a"],["/tags/Building-Your-Own-Types/index.html","b911cf39d3bf870fd3fa24f3230d0659"],["/tags/Classes/index.html","f19709187c0e7ea2e8a81fc20a463bc7"],["/tags/Codable-protocol/index.html","bf9fa2f556d933701a1711e6a86cb19f"],["/tags/Collection-Iteration-with-Closures/index.html","9ea1f56f027458b269bcfe9235c27e53"],["/tags/Collection-Protocols/index.html","2bcf3fb7d908ef1905d02f3446bbe234"],["/tags/Collection-Types/index.html","26b7973141db5a592beea669309382f2"],["/tags/Collection/index.html","0ead6008e70edbbba576b9b4ea3883d6"],["/tags/Collections/index.html","ec1addf796ffde288c1d69f599618cfe"],["/tags/Combine-framework/index.html","ee6c2f148811b9904c8d3b0cb03b7411"],["/tags/Combine/index.html","318c416754347e79cb22ee04328a342e"],["/tags/Dependency-Injection/index.html","859385999206881b8e040b50180a0de2"],["/tags/Encoding-and-Decoding/index.html","5e7a301d30a0d82771097fe8bd34d1ed"],["/tags/Enums/index.html","02fc1050ede24d1a38350f2cb0f2c629"],["/tags/Error-Handling/index.html","edc1caa779b5b75613626a0e95a8a57e"],["/tags/Functions/index.html","a522e1719d34e283f270723577e8f216"],["/tags/Generics/index.html","10e1c57fb71b2803c0ee23ce515b26e2"],["/tags/Grand-Central-Dispatch/index.html","b8c57ded505bcb400e15a4cc2dced4e2"],["/tags/Interoperability/index.html","8e38e794ff9617c039da57f03bb920ef"],["/tags/Introduction/index.html","016aa4e9b666a427864b85f54f349b2b"],["/tags/Methods/index.html","302691eff19377041a91726b35f6e98b"],["/tags/Modules-And-Hooks/index.html","883e8e674deb0e66b46a505df6fe9f2a"],["/tags/Optionals/index.html","bbbd58596e2e496d991fbd8c3a0e5fe3"],["/tags/Promises/index.html","272d16cccc22288a623c1f0e4dbdc4c3"],["/tags/Properties/index.html","2304bdfb0ce66964fc4ad2f5fa2cd163"],["/tags/Protocols/index.html","fd40a0bc3b027a9bf4c015530fa6a866"],["/tags/Result-Type/index.html","4e6c88e88f37cc6e94c80bc7d236ae2c"],["/tags/Server/index.html","920cef02df3feb7c438b3a0c192708c2"],["/tags/Strings/index.html","d0bd150b5923d4d5211711ff6f4d0b4e"],["/tags/Structs-and-Classes/index.html","2bbd35c74b642bbf9d85ed91e9ebca8b"],["/tags/Structures/index.html","c6b2b44c12934a55a4a52e11ae68d9ea"],["/tags/Swift-5-0/index.html","c1d5dcb310eb204b35d3b080efcbebc4"],["/tags/Swift-5-0/page/2/index.html","2147e64eadf5d33475a94f577ec18b3b"],["/tags/Swift-5-0/page/3/index.html","31d921658e0768fd509202d23ab1b4bc"],["/tags/Swift-Apprentice/index.html","64b2f2abf8af93800c0f4354112ac48c"],["/tags/Swift-Apprentice/page/2/index.html","8ea907f314aaca0f06fa7986404d5b45"],["/tags/Swift-Package-Manager/index.html","f7603fb74c422db4dfec75721aa04188"],["/tags/Swift/index.html","dbef72b6e86110678637370032b8552c"],["/tags/Swift/page/10/index.html","fb5e7637ab6502dfcc15b20944f55cab"],["/tags/Swift/page/11/index.html","73cf8087582f86e0559a369fed7c7268"],["/tags/Swift/page/2/index.html","82b69ae89731a18ffea9b0387e7d6818"],["/tags/Swift/page/3/index.html","f7d5ba1fb784140e728400cd6d995bf9"],["/tags/Swift/page/4/index.html","4e229317c13b335fc57c186f2fde6e45"],["/tags/Swift/page/5/index.html","55f15d86a49b47d1bc6f2685c7020e02"],["/tags/Swift/page/6/index.html","5d57ebd319f698a41da6a936560d6bcb"],["/tags/Swift/page/7/index.html","aacdf4ae0fabcc304f8168880a849aa3"],["/tags/Swift/page/8/index.html","d8390c3b633f56965b0a0002e9ba816a"],["/tags/Swift/page/9/index.html","e7415c78d448bfc73233c1300a1d7b27"],["/tags/SwiftUI/index.html","024c4aab1709eefa2877294d3f5bdf66"],["/tags/UICollectionView/index.html","d977a907d2ab7e963cb51b7fd7de0aa3"],["/tags/UIColor/index.html","bfd05d6bfb60576e071d4a140f1a6d4f"],["/tags/UIImagePickerController/index.html","af03a5ea95624d731c22cbe0ba9cd389"],["/tags/UIKit/index.html","0097b3ddd81b1caa74c8c497fc21f6ce"],["/tags/UIKit/page/2/index.html","8714abf74dae2e27a8eda8dd1ef7e468"],["/tags/UIKit/page/3/index.html","1b1dd8956ede0e4305d3b2d523cd31ee"],["/tags/UIKit/page/4/index.html","3bdbcf82a59d3b3c5dbc734ffca7c62b"],["/tags/UIKit/page/5/index.html","9325d5fa339ec0b2aa428c53e68821af"],["/tags/UITableView/index.html","338c5e1ae32f2b1a3faf03c6299c5f08"],["/tags/Ubuntu/index.html","636a1bd98f5b1f7f4d64ed2f8f304771"],["/tags/Uniquely-identifying-views/index.html","eb136a267573617eaa71d9e9883e9be2"],["/tags/VIPER/index.html","69c1ddb8f9be83e133059c21c00addf8"],["/tags/VMware/index.html","87ec648ce76fa3caaf7fce3387ad6bb8"],["/tags/Xcode/index.html","2b4d33a1205791b8267830dc553e4469"],["/tags/appleOS-Networking/index.html","aa33672cdbed60e8ffb736c4d4b58134"],["/tags/enum/index.html","3ea5c27c13ef14215710586009b9cdc4"],["/tags/iCloud/index.html","96cd5860c083ae3b1e134aa5a284bd69"],["/tags/iOS/index.html","209ed297ab2b92cfd5c0b8346b9a7f14"],["/tags/iOS/page/10/index.html","e09f094e528f5824d127a5b88d8becd0"],["/tags/iOS/page/11/index.html","b42ac0f6f4795c8d2e85b0a4267d5870"],["/tags/iOS/page/2/index.html","f8563febebe364abff4e7c861c99198b"],["/tags/iOS/page/3/index.html","92ceca657720cd5fcbe4f97827ec4c58"],["/tags/iOS/page/4/index.html","62017c2085e5fcdc470e850960f59089"],["/tags/iOS/page/5/index.html","0489a7565b106336d10e28d7e83b270e"],["/tags/iOS/page/6/index.html","0e97d0005b91c3ff4f8b6954fa00b028"],["/tags/iOS/page/7/index.html","6917c85407413e6feb960542fd4905b6"],["/tags/iOS/page/8/index.html","f875303c5ea4f6b021ea0ab47191981d"],["/tags/iOS/page/9/index.html","ad7efaa9301db3fceb4b97f661a51a8b"],["/tags/iOS面试题/index.html","e9d50f7b7752b68612e0907ef0ddc301"],["/tags/index.html","f529f5e868eb3598da419c220bd30ef4"],["/tags/non-optional/index.html","638f6b919ac1dc85b600f00e49ee987d"],["/tags/random/index.html","bd04eec3a8e08ee2c9b1448318bd443a"],["/tags/transition/index.html","4e33d1a31db7d4d9d330c80de2419551"],["/tags/三方类库/index.html","d2c54945b94fbb173f621a37673e0779"],["/tags/依赖注入设计模式/index.html","0e7118ead0ea086fb01f4e5c9a722186"],["/tags/函数式编程/index.html","8af74cc7ff660e1bb37a4f96302c5147"],["/tags/初始化模式/index.html","8f3848f0f422ae7d0e34f9035b5346ba"],["/tags/单例模式/index.html","87ff503b680a1901fb56f9370874ae5c"],["/tags/原型设计模式/index.html","1be69b16e1e6e8bfc8bcca918f39c3fe"],["/tags/命令设计模式/index.html","f69b9b391f8f9f9aea49f8d219b832f4"],["/tags/基本控制流/index.html","405cdd932540df39601c31a21895e4e8"],["/tags/外观设计模式/index.html","4afaf571a4f6213a6296a261a31ef9bd"],["/tags/委托设计模式/index.html","84fa64c3707bfcfa7b2937b44f3062ec"],["/tags/子类化样式/index.html","7641388c9d31d7f2ec7c1e1130a29085"],["/tags/对象池设计模式/index.html","a11732e90823249347a31a978d9a7da9"],["/tags/工厂方法设计模式/index.html","2063a153fb4d7610631ec600166201ec"],["/tags/工厂模式/index.html","8fa190069804965f939ba5473d0bb143"],["/tags/工厂设计模式/index.html","baaf8c576bba36bb599d334d4a072f9f"],["/tags/懒加载模式/index.html","3b733bfd5c31b00b814cb0b9a8c7da43"],["/tags/抽象工厂设计模式/index.html","24c58247c32a5c9231d3b78d3eb85647"],["/tags/构造函数/index.html","70b2898944df4e0faabc632c85a6a28b"],["/tags/架构设计/index.html","5465e1aa1b4d979ee3bfe97fe56d4ceb"],["/tags/生成器模式/index.html","e3a795ab86f08b59f6e33262624274f4"],["/tags/用户体验/index.html","da88dfc941154b3b886d437ad3d7a869"],["/tags/类型与操作/index.html","6d184af174b11e8d4354a32c6b630dd8"],["/tags/自动化布局/index.html","3933b46c1d0bb8a83c45cc6f2ccf0173"],["/tags/自定义UIView/index.html","c7657b0a70ab381d185e48e25f15523d"],["/tags/自定义转场/index.html","dcf01ed3455b4810e1bf3aefe1538a1c"],["/tags/自适应布局/index.html","0bf8f18547d8860c28d1f0705a81923c"],["/tags/表达式、变量和常量/index.html","9118d976dc6e032c3ea274ff0b0f89b7"],["/tags/设计模式/index.html","58d2af16883d230e425412a358ff3b27"],["/tags/设计模式/page/2/index.html","76b5adf709af97865d974f3bdcf4db73"],["/tags/设计模式/page/3/index.html","74d9d832c3ae997fea57753c30a8d938"],["/tags/迭代器设计模式/index.html","06492826c985436227f244f4148c365d"],["/tags/适配器设计模式/index.html","ecc6537ab0f680225a16150c7ca4fb58"],["/tags/静态工厂方法/index.html","4f5c36d565ea3704ff05f1eb436c4663"],["/tags/高级控制流/index.html","0b4b2362dc8d98f387ab8d233343d182"],["/为iOS应用构建输入表单/index.html","6d00e003069fb5c103e3a3d7d75050ed"],["/产品开发的幕后花絮/index.html","b385477617d7f975d9f91939e290b1ca"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","2309dd4be741905b730890772bcf2adc"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6913b3d2e18a6e370d2d6b9b17733a3c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8019f45a171cd33eef2cc11e69b21572"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","20f8a2e14462ee5ccf4c67a89ab4fb4b"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","00445bee77ae1122b7325f433b680cb7"],["/在Swift中创建自定义集合/index.html","f4a8da95ec33d3dd73d947659d7026f2"],["/在Swift中处理非可选选项/index.html","584209f925ceb3018af847271e219606"],["/在Swift中生成随机数/index.html","a15eae603ebe9f86cb2a7620849c1d3e"],["/在Swift中重构单例模式用法/index.html","b5f4489d445fe75fffd3ca0c229b18ed"],["/如何为VIPER编写服务？/index.html","e22a25128423e10e28aa0c7ceaff824e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a5612aac11d5c8177e35df2e76fd3a3e"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8b97bcc007a1fd1175ea0316f07d84a5"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","35e6c18732f339ee24d93cd11132f40d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","dbd4bedc0a0ab977bfb5bd79a0de0227"],["/掌握VIPER架构/index.html","9c64ce83988d108234eef896ce674400"],["/揭秘 WordPress Hook 系统/index.html","f6f15017a5b9e319eae0cb73b70f66ef"],["/比较工厂设计模式/index.html","67171466e10d8d407aac05ca7f590c4d"],["/深入了解Swift中的Grand Central Dispatch/index.html","88337530bb609f8a74899ca935ad9475"],["/深入研究Swift框架/index.html","0418820ab9e3e7b27f8458ce85382def"],["/适用于iOS开发人员的VIPER最佳实践/index.html","d5c0c23d82112c8529fe0bf42c0c9a9c"],["/选择Swift而不是Objective-C的5个理由/index.html","98e1f59c1b04d1533d6ebffb9c56b4d1"]];
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
