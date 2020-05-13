/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","036eb8019be973bbc11666b2fecf2415"],["/Advanced Swift系列(七): Strings/index.html","30f7ba29a908c433e277797b0f231023"],["/Advanced Swift系列(三):  Optionals/index.html","2349ff52605bba6f702eeca4c61aa5fc"],["/Advanced Swift系列(九): Protocols/index.html","86275acf488f5e6b4d7b9ae1e95467be"],["/Advanced Swift系列(二): Build-in Collections/index.html","100c886680a80e67ea19986e2a44915a"],["/Advanced Swift系列(五): Structs and Classes/index.html","558c145c4641eee8ed5ff3da37b8e6ef"],["/Advanced Swift系列(八): Generics/index.html","716b00a33261488c0df66073c5f9bf55"],["/Advanced Swift系列(六):  Enums/index.html","b59b5c1920ac626912daff949feb3bd8"],["/Advanced Swift系列(十): Collection Protocols/index.html","868595a7bceb5f929132738eff7d9eae"],["/Advanced Swift系列(十一): Error Handling/index.html","dcc5d397ad018699be545ab86ce3fc3d"],["/Advanced Swift系列(十三): Interoperability/index.html","bf96932c0fd2d23c1f8e8933e00762ea"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","777f290de8dd77b1b00d11ec0623c1bd"],["/Advanced Swift系列(四):  Functions/index.html","d16e555e99181f9c2cd70174c978af8e"],["/App Architecture系列(一):  简介/index.html","6fdd6def9301177055e94554e4147084"],["/Functional Swift 初探/index.html","64c721fb40a85570f244987dfdfcf840"],["/NSCODER和SWIFT初始化/index.html","18ae1447805406644584368ae72af08f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","abd279c52e3a69cc6566830ea579d5c5"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c07a70f7961a0aa84f7aa6e564d39677"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","1bcd3ec809eed3d6e52aaeadc23d46d6"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0bf643a238118c2f3dff4e614b373f01"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","b8044b225b862ee54dcd73bced448f08"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","67a1febda21afd01850b17178d52832c"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","064d545888f00c0a600f41c11a401ba6"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","0fedd6da66ca17ae419c4ec7dae37a1e"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","c9a734f15ebe97d5a4ce7c8b52711010"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","676a05b4f7acb1cad02685a867e21d3c"],["/Swift CompactMap vs flatMap：差异说明/index.html","dc211b5973311077d7fceb12167b27cc"],["/Swift Grand Central Dispatch 深入实践/index.html","b8b56218005baaa55d49a07d48b8b4e0"],["/Swift Lazy属性初始化/index.html","43a85a2ceefba5e6438a00f3ae35e3aa"],["/Swift Promises 初体验/index.html","968e10b8b0b485a86395a05f46faecdf"],["/Swift Promises 探究/index.html","deb360dec82415db4237368826df330d"],["/Swift UICollectionView使用指南/index.html","92c03cdfd33a7844f6dfe114db648f09"],["/Swift URLSession 和 Combine framework/index.html","d352da23d9c87d91064ac13b3cce8e99"],["/Swift 唯一识别的视图/index.html","6028bc07c15ac7a7fa8b2e267d546087"],["/Swift 如何学习现代UIKit？/index.html","76e9193058439d2164403e5784263320"],["/Swift 用 compactMap 替换 flatMap/index.html","7ad674a00240cdea041a2eea8eaf170f"],["/Swift 选择和播放视频/index.html","17beee9d283739819f7025cc35fe257c"],["/Swift中UIColor最佳实践/index.html","7145a010ccf35c4d9a2d528573415130"],["/Swift中快速简单的工厂设计模式/index.html","69177b5aca69a93578679d54e212b688"],["/Swift中构造函数与静态工厂方法的比较/index.html","aeba7e501e01478b1158ecfc4ad5d159"],["/Swift中的UITableView教程/index.html","dd57b0573c8c2a428160dd919a24671d"],["/Swift中的懒加载模式/index.html","9362bd9aef4505a15007a8ac9f4cba05"],["/Swift中的模块和挂钩/index.html","7ddc1cedd8f841b8d51ad230a496ec2f"],["/Swift使用布局锚点添加约束/index.html","84f8f179b94494f9895b7808014afcab"],["/Swift依赖注入设计模式/index.html","3ee6fa6345dba1a52e2a050c48fcc2f1"],["/Swift关于Dependency Injection (DI)/index.html","87658cccde991db08a1cf415a4035dd0"],["/Swift初始化模式/index.html","81ee5368758e59e319eecaa373f563ca"],["/Swift单例模式/index.html","2cce8795c35cba986801d839bc64543b"],["/Swift原型设计模式/index.html","fc1111751d0c44c5a4daa7d692b9fce8"],["/Swift命令设计模式/index.html","a0c49529594767c44967c291913cdca5"],["/Swift外观设计模式/index.html","7c35ad1abe5b459a870e4f930e3cb46d"],["/Swift委托设计模式/index.html","867bd05b9cd5cce1179e60f02cfad7ea"],["/Swift对象池设计模式/index.html","8e23b6428c1b792836821f2a0dc0f9b6"],["/Swift工厂方法设计模式/index.html","cdfe686a03493e167abeae92bb43ade7"],["/Swift带闭包的懒惰初始化/index.html","87c909a2f6f16425dda7978a88cface9"],["/Swift抽象工厂设计模式/index.html","0e5e368cd3e1849c0cf58ec352b3ac84"],["/Swift掌握iOS自动布局锚点/index.html","125780ebc9e42d66e1db2643dccbdbc7"],["/Swift支持旋转的自适应单元格/index.html","64d260723da7f038e571b52354446550"],["/Swift枚举值/index.html","53882f23fc1ad8f3eec66b6754ebaf4a"],["/Swift生成器模式/index.html","aa72faa6987c36dc7bb127ea5f7caa5d"],["/Swift结合Xib文件自定义UIView/index.html","5af01cc5c396ea5ad7a15082269303bc"],["/Swift编写的20个iOS库(一)/index.html","f9bf22dc227546bde2cc16107dce99b2"],["/Swift迭代器设计模式/index.html","79a2ba8d3be688db3da303e2a2344602"],["/Swift适配器设计模式/index.html","453bb1c57bfd208b408ec602468f7a0f"],["/Swift静态工厂设计模式/index.html","d36b06c94b3035d03e5ce3fe9e96d564"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","fa49656001b1e77b1c7829f95fdbd7ec"],["/UICollectionView data source and delegates/index.html","f9d6b07dc3205e4e977dc8ac817e5985"],["/UIKit初始化模式/index.html","c9ecbbcf98b5fe0faf16c7f43b11cd63"],["/Ubuntu18.04替换国内源/index.html","35bec4208ad5918a99698933589bc64a"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7ade1c24c7ce4f2ccb5990a30439ab80"],["/Xcode扩展/index.html","7a8d664d734bc66dfe38d46369ff9485"],["/about/index.html","3b27bc49af1bc8c86c1609fa8ecd3afb"],["/appleOS的Networking示例/index.html","fa9da9e1099eddc86b1424b02caa9cf3"],["/archives/2020/04/index.html","8b08eff79d7e5bc32aa5b499b005ef85"],["/archives/2020/04/page/2/index.html","71ffe529c281924b45d1e3a016e668e7"],["/archives/2020/04/page/3/index.html","12e90399022f763a9f4b8370ca0f5f26"],["/archives/2020/04/page/4/index.html","c35dae312b9706fdf6ba0d73d677f64f"],["/archives/2020/04/page/5/index.html","29779768ec8674dcc28ac07740be55ef"],["/archives/2020/04/page/6/index.html","24ca46487d1e46562d55b9daf1a40064"],["/archives/2020/04/page/7/index.html","8c6ba0cf2153ae047ab6ea5dc53e0a74"],["/archives/2020/04/page/8/index.html","5f076d7c9eaa3584fc7260afe23857dd"],["/archives/2020/05/index.html","ff115b470668d6cb1ea0871d983bdeeb"],["/archives/2020/05/page/2/index.html","d9603394b7aa502fd8fcdef333b4db47"],["/archives/2020/05/page/3/index.html","557ee88ae9a698e55ee1345e0f59ad95"],["/archives/2020/index.html","4b02e83d95e70272e3dd28eb086e4a96"],["/archives/2020/page/10/index.html","869f393406e27e0730902c618b3747a0"],["/archives/2020/page/11/index.html","c86993d872252bd64136634b88d5e1af"],["/archives/2020/page/2/index.html","0060b5830f36ce429ae8bf12c6fc9189"],["/archives/2020/page/3/index.html","6e505998f2820936943a1b2a89cc8783"],["/archives/2020/page/4/index.html","a624adf6b9e7387d5f3e4fd2be7195d5"],["/archives/2020/page/5/index.html","82be772e2550cafe63010c0ed69c0d6f"],["/archives/2020/page/6/index.html","4e1aec4a71d96f9c8d996655486e21fc"],["/archives/2020/page/7/index.html","dbcf1a10ab015c2a687e73d0ea5d8fff"],["/archives/2020/page/8/index.html","4d422b9be0890e19d43d6da175def805"],["/archives/2020/page/9/index.html","d8d54680185e38851d973b87afd2487e"],["/archives/index.html","61da6dff0ebd193e5c49597d89805b84"],["/archives/page/10/index.html","b50aa23515bd2176b4fb7f7f09ce8400"],["/archives/page/11/index.html","cfdf1274bd56e89607db3cd942fab93c"],["/archives/page/2/index.html","75afadab0a2992315444504d59d86de2"],["/archives/page/3/index.html","54d1d23a6297efd45b1c3274062d6e0a"],["/archives/page/4/index.html","b3550f69a0449657f81c7bd454914c00"],["/archives/page/5/index.html","948b4e9af78d229e26c2835469158576"],["/archives/page/6/index.html","c4f18e08bfdddf895d1da7fb9269e740"],["/archives/page/7/index.html","81b23d70b19ccc02ea2443311a4f99c1"],["/archives/page/8/index.html","2f3a9cac367276bd22ff49d6a98d2084"],["/archives/page/9/index.html","678e23d3edba6ceb3ebe6e3471b8c03a"],["/categories/Advanced-Swift/index.html","201dae4cfe6b1c71b3be1fe58f13536c"],["/categories/Advanced-Swift/page/2/index.html","f28b6cd52a814fe8c78b366be8f7514e"],["/categories/App-Architecture/index.html","db0d1b6da89cf89a41fac464722dff88"],["/categories/Codable-protocol/index.html","1e1ce6cabf6852bd21c26db3353a1ff1"],["/categories/Combine-framework/index.html","4c0cddad74fc3c0b20cd87c4fa089a93"],["/categories/Combine/index.html","8a0f6c0303e0079fdc5f375d7f131460"],["/categories/Grand-Central-Dispatch/index.html","36b6e3931c967c1a4afc618ad41fd5bc"],["/categories/Hexo/index.html","f997f2db3915962a1926c792df1694a3"],["/categories/Promises/index.html","536ac5431d8b085920ac5e3c1184c039"],["/categories/Result-Type/index.html","076f2c1bcd805736808e109fea6d9cb9"],["/categories/Server/index.html","aab2726201c1f124c8e361180e754080"],["/categories/Swift-Apprentice/index.html","96fa63896f3e383cdcb5c0fd323d88ee"],["/categories/Swift/index.html","90547070983076171c760657143a7ce9"],["/categories/Swift/page/10/index.html","21ac0474bf7ac9453b9aa610f04b1874"],["/categories/Swift/page/2/index.html","f41233fb53a34d520482b798c7eb5634"],["/categories/Swift/page/3/index.html","89d43b9ea4777d65a37be14f093c0cda"],["/categories/Swift/page/4/index.html","76d8b68b3c758bf16e5b34dc23af15d7"],["/categories/Swift/page/5/index.html","6d18f3d5dbbd46457c8eff4db450a0bb"],["/categories/Swift/page/6/index.html","f3816ea2c67d84aec6c62ea0ebb3bbcb"],["/categories/Swift/page/7/index.html","4b66db7a6645c76e15257832364f9b92"],["/categories/Swift/page/8/index.html","83cd7254f0f41a36c532a82f071519cb"],["/categories/Swift/page/9/index.html","cfdae74df0a4fcd27d0a707f8d4444c0"],["/categories/Swift5-2/index.html","47b0ff5ecdb3e7dd1e851cf74d814eeb"],["/categories/SwiftUI/index.html","ef22ae132253dca609b747e483f62a28"],["/categories/UICollectionView/index.html","be1a3148783458d965b174261bbf3e16"],["/categories/UIImagePickerController/index.html","7c9fb09899afbfca373f65ee8f74d171"],["/categories/UIKit/index.html","17690a0dd3c9cbe781ce96a6571b3ab8"],["/categories/UIKit/page/2/index.html","a15844c0a31f95f6bd6bd799bb19b724"],["/categories/UIKit/page/3/index.html","a922acec92c7da3cce94938c1598ac9c"],["/categories/UIKit/page/4/index.html","e493a080012aa092126752ef5bc2e977"],["/categories/UIKit/page/5/index.html","2e79c1ec7afcbcf718effdea9eb39662"],["/categories/UITableView/index.html","6e662f07a7207d8080d4a798970830ae"],["/categories/Ubuntu18-04/index.html","fe02ba192d7cbae9858293e2abbd1639"],["/categories/Ubuntu软件源/index.html","abcb972f7eebabcf5a22c61cfd23f694"],["/categories/Uniquely-identifying-views/index.html","106b0249cc22c5b017ea379e666b8042"],["/categories/VIPER/index.html","2b0d95270bfd043cef43bbcbc00daacf"],["/categories/Vapor4-0/index.html","4c0d25943fc399e445654ff5fdc00b1d"],["/categories/Xcode/index.html","bc797792c4d04da7b22b30ce369a1438"],["/categories/appleOS-Networking/index.html","41302bed472be80836e56a777d6e207b"],["/categories/enum/index.html","3d4dc1eeee29df1cee7ddc37e9c97831"],["/categories/iCloud/index.html","dd94aff3c87da2599712b2cde7fc5412"],["/categories/iOS/index.html","5f737db8b12b5324680590b853f019bb"],["/categories/iOS/page/10/index.html","cfd598ce71b0bcb5fbd54be05b804155"],["/categories/iOS/page/2/index.html","caa9c0ef69873968b1dcca6f1f962400"],["/categories/iOS/page/3/index.html","3b5821f5372eb013ac50b1e224c9a611"],["/categories/iOS/page/4/index.html","daa34bce9ed740c25fa19f6566d960c1"],["/categories/iOS/page/5/index.html","4a85faca2e84c128f0c5a86d74ef1b41"],["/categories/iOS/page/6/index.html","add477b285f670cbd2d2a67ac1cbb16c"],["/categories/iOS/page/7/index.html","e695f65f4141e5d721567d7ef8c0df1f"],["/categories/iOS/page/8/index.html","1e8eed184b617a57f1a53e3f74bd4e84"],["/categories/iOS/page/9/index.html","330c81074219a9707118645364bf8fc2"],["/categories/index.html","38f3aa06d68aaa7a00671f643d055bb0"],["/categories/random/index.html","2203aafca66c8c8411f91bfc69a4900e"],["/categories/三方类库/index.html","6ead5d859dc44e595a2e1ecd6a8ed5c0"],["/categories/函数式编程/index.html","b32a100e3e840a6592c78de627b4374a"],["/categories/子类化样式/index.html","a1dbf315b7bc5db07c2b277ae020727e"],["/categories/架构设计/index.html","a2e2d8200a3f2df5fc035ab3985ed503"],["/categories/用户体验/index.html","88462475c21803e39ecf17b3da1e2119"],["/categories/设计模式/index.html","d64585dd2b130b47b301005ad459e8fc"],["/categories/设计模式/page/2/index.html","6693b74970aea42c2bc5e05f46b13d5a"],["/categories/设计模式/page/3/index.html","993e9fc3c27b395ca04d79480ff61702"],["/css/main.css","99d5180f621b5ad10d4ee8184fb669e9"],["/hello-world/index.html","81cc4230fc16397c909f812e22592ff8"],["/iOS VIPER架构深入实践/index.html","e7049945590d66fd80dcaaf500834eae"],["/iOS 自定义视图，输入表单和错误提示/index.html","b74505ff2edbfbad77c90bae99a085a3"],["/iOS如何使用iCloud文档？/index.html","f43676bf66c0cf4f54d74fac3ea36b0d"],["/iOS子类化样式/index.html","85fdc31bf6847fe885b326980e09406d"],["/iOS自动化布局编程/index.html","f6e2d71fadf92ca4a8b140e25f202eae"],["/iOS自定义转场(By Swift)/index.html","7a2bfeaa13c521014da4dd4a224d436a"],["/iOS项目架构：使用VIPER/index.html","6c9a282d4fe8bf8b754229b46fe01920"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f19e86800de670e520dff2f52497e0c8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","4ad3a25605745360a0856423904b7bbe"],["/page/11/index.html","a278bbeff220e75197048137a91dbcf2"],["/page/2/index.html","d0d3f2f813bdfb33683f420da3aa62d0"],["/page/3/index.html","57240354ccee8a569f947556d37116a5"],["/page/4/index.html","2ac0ccd005e07166a4e1d6745dcbfe82"],["/page/5/index.html","b4927a246482a19a624d7f50ea525cf0"],["/page/6/index.html","a85d1d65bcfbf9eb785b3897a0d43d4c"],["/page/7/index.html","ed6908a23b148970f24000e20f564f76"],["/page/8/index.html","a2b1fb37dbed0ed87268afa7b1ddfc5b"],["/page/9/index.html","b88bf10e9c3996c16425574159b31ad8"],["/schedule/index.html","8392f7f2d1d1b3e58de7bcaefa1b280b"],["/sw-register.js","e0491f11e05baff4c6266652dbf16a1d"],["/tags/Advanced-Swift/index.html","bbb44194ab896d71d1bba754ef7e4be9"],["/tags/Advanced-Swift/page/2/index.html","e0f583e1cf04911a135960f6462b178b"],["/tags/App-Architecture/index.html","a9c6bbefa333f104b11f1c12c3ed93aa"],["/tags/Arrays-Dictionaries-Sets/index.html","668e1ddcf73a0faba6b8c08244bab4e0"],["/tags/Build-in-Collections/index.html","8af01b89bb06b2ed63ec131d85a630ba"],["/tags/Codable-protocol/index.html","02d4fc775c537f2dfa20e7ab57d78991"],["/tags/Collection-Iteration-with-Closures/index.html","3a669a2faaad63a5c15f96c6fb947eeb"],["/tags/Collection-Protocols/index.html","6180cc298830a423729d0a265e903529"],["/tags/Collection-Types/index.html","e2143ebe0ca1b4c72bc2df2fbff7118b"],["/tags/Collection/index.html","d042b371dba3e27a750ce2946f34e0bf"],["/tags/Collections/index.html","d26ad89df3f479da2e4c3176a92aeee0"],["/tags/Combine-framework/index.html","b5825a73bcb36a963889233c3b73d185"],["/tags/Combine/index.html","81cea739a0704caf6d257dad8025810b"],["/tags/Dependency-Injection/index.html","124b2c74f413f2f0d3851c1512dd1e14"],["/tags/Encoding-and-Decoding/index.html","690669479663711eee34342c89405a58"],["/tags/Enums/index.html","c934fdd6003776d4993a1f079d8d5581"],["/tags/Error-Handling/index.html","bd59024223e84c0f19aeb314d98c26cd"],["/tags/Functions/index.html","ce7c0e005875d111d161dc5b2fef0d33"],["/tags/Generics/index.html","86ed8b864dccf9a8bb1682dff9c2f340"],["/tags/Grand-Central-Dispatch/index.html","5979e85ab20547fc64a64a26cd3832d7"],["/tags/Interoperability/index.html","3af9013b39d7253d2eec337bd39b333b"],["/tags/Introduction/index.html","633eceabe3e589c56800155f3a0d1d3a"],["/tags/Modules-And-Hooks/index.html","9a5f6cabbf8cca8b7c31b00f851a2b90"],["/tags/Optionals/index.html","76af0028c433202595e4f6b75adf698b"],["/tags/Promises/index.html","edb08e39d1771187fd762749fd2ccc6c"],["/tags/Protocols/index.html","7737ba72113b5db732b9d89a46f60edf"],["/tags/Result-Type/index.html","c1f7ac83829603e2c9932dc76d7f6c35"],["/tags/Server/index.html","fba3e3f2dff6b91a1cf232840b035b42"],["/tags/Strings/index.html","4a01583f3a6c6cd89f9a374fa87b18b4"],["/tags/Structs-and-Classes/index.html","2992220a27a45e9a7c46926fe7f6f262"],["/tags/Swift-5-0/index.html","69342789fec0423219ccdd8cee1d5f6d"],["/tags/Swift-5-0/page/2/index.html","3527c390cdbecdf831b8647a5b121cfd"],["/tags/Swift-5-0/page/3/index.html","94ebf6305ecfd9fd5cb6a54ae2cf294b"],["/tags/Swift-Apprentice/index.html","aa278cf9b3e008e0451ddcc57d407198"],["/tags/Swift-Package-Manager/index.html","8ed50c5ba66ee4c06d88bf503e5098e6"],["/tags/Swift/index.html","8facfe067157f8beca62a13fea91a1f9"],["/tags/Swift/page/10/index.html","dbdd3bd3d0ecaad26f40aa7145a5a682"],["/tags/Swift/page/2/index.html","23dddf697735ae8bd91bd7be22a16178"],["/tags/Swift/page/3/index.html","66685448cfcafce13b2f64eb427c41fc"],["/tags/Swift/page/4/index.html","b535caa8a5b16e83e9ff6fa0e2e4e038"],["/tags/Swift/page/5/index.html","0ae1e88995410e312681931077278130"],["/tags/Swift/page/6/index.html","641c64ed6b3969ffa8e67076cdb3e309"],["/tags/Swift/page/7/index.html","a91e9dcd8e5eb538a9a35b9a695f3e65"],["/tags/Swift/page/8/index.html","cef6e344cedf3323de95947b468573c7"],["/tags/Swift/page/9/index.html","17ce5808488d535d35b88acc0001e43c"],["/tags/SwiftUI/index.html","599e4ce57efe2a6440334d75f8767616"],["/tags/UICollectionView/index.html","3841c10666981c930e7d5b5551430ef4"],["/tags/UIColor/index.html","e099cb06bccacd59496b5e22ded6871a"],["/tags/UIImagePickerController/index.html","add260e21a9c5bb4a7cf8816ce70843d"],["/tags/UIKit/index.html","dfc1f584b9f6fe1e30e9b0d75975545f"],["/tags/UIKit/page/2/index.html","566b8318c42bfe1d9b8fa68259097bb6"],["/tags/UIKit/page/3/index.html","19d27924bdf82c26e446d24d7f7f8b94"],["/tags/UIKit/page/4/index.html","a78dc5e2c98a827820bad199809c873f"],["/tags/UIKit/page/5/index.html","1f8347dbcdf69b20331aeeac92c3bb73"],["/tags/UITableView/index.html","6446e6c7523369103dd553054b0c0cae"],["/tags/Ubuntu/index.html","9ebc41288a007ee590d6b59022f700eb"],["/tags/Uniquely-identifying-views/index.html","7ce141c35825e6de1a9363a3e31c44c1"],["/tags/VIPER/index.html","35e19c930c2b20d9f260803653b723ec"],["/tags/VMware/index.html","4e6df74a863daa38816341ae314b1ad8"],["/tags/Xcode/index.html","f4c55ad433c7320ddb4ca76301567da3"],["/tags/appleOS-Networking/index.html","26f928c633b7202e8d837cbd09d21f97"],["/tags/enum/index.html","f9e0b87fe2478af318dac61ce9ff4116"],["/tags/iCloud/index.html","34baa0927dfc2d9cc455deac9b81283c"],["/tags/iOS/index.html","1a20da2208e54cf087e838e3b8b841de"],["/tags/iOS/page/10/index.html","4fded9601167753e0fbfa58a809d884a"],["/tags/iOS/page/2/index.html","1d18374207763766b8bf6785de2c2b8e"],["/tags/iOS/page/3/index.html","becfd9377ca47d471d7c1ca854ed7f98"],["/tags/iOS/page/4/index.html","f1baff9f66d602bd05f37736eff36304"],["/tags/iOS/page/5/index.html","ee9c1a7436e1f98d293f4cb87670e8cd"],["/tags/iOS/page/6/index.html","add83d713a6371795deb1d149a89e44c"],["/tags/iOS/page/7/index.html","1309c5a7ba4679a533155a9a7bb1b050"],["/tags/iOS/page/8/index.html","c766c357cbaef57ee726abe0ff30d05d"],["/tags/iOS/page/9/index.html","b675f8972a4743de76384c342c4433ed"],["/tags/index.html","9bb15cb57ce4f8e28805b6794a617bc3"],["/tags/non-optional/index.html","b3aa5def3081337251041d0fe78fac85"],["/tags/random/index.html","fd1c8d79fefd60b8b7626012c3d1d529"],["/tags/transition/index.html","9b3f40989fe2c65da133943d027e9fc0"],["/tags/三方类库/index.html","55cc23eaee26ba13dffa19df894b18f4"],["/tags/依赖注入设计模式/index.html","b9744e103c43064a38cee4b0c04176f9"],["/tags/函数式编程/index.html","8615846047d0afbac20db9a26af5040c"],["/tags/初始化模式/index.html","267aa05f4b70eb365900fff4f667bc25"],["/tags/单例模式/index.html","c8a1989de3069874939dfe47289b2e06"],["/tags/原型设计模式/index.html","a5d76985575c4faeb6dff2dc43a7b3bd"],["/tags/命令设计模式/index.html","3219313a31ee4c22eae20643e22d9bd2"],["/tags/基本控制流/index.html","5f1bea34c38583644c9717ecf2e23e1a"],["/tags/外观设计模式/index.html","83fd3f021767ceea7852b17a65783e3d"],["/tags/委托设计模式/index.html","5d17fd8bac496515d279417daa1af717"],["/tags/子类化样式/index.html","719357d21d4a85af01f445ec251a2495"],["/tags/对象池设计模式/index.html","3c916d8e565f5d5c70efdd99f13188e6"],["/tags/工厂方法设计模式/index.html","07a9407a1bee77e5bd99da94ef020f9c"],["/tags/工厂模式/index.html","75da296afae9d4d4fa71a7e687e9400b"],["/tags/工厂设计模式/index.html","6bb4b77494b4ed50cc7d8272f9f69224"],["/tags/懒加载模式/index.html","147157aa879d941647ce17c4457d74b3"],["/tags/抽象工厂设计模式/index.html","957c3455c79b91030d7519f9922b6d73"],["/tags/构造函数/index.html","0966b76cf29d98c0d60b7419c6c11e7b"],["/tags/架构设计/index.html","681b684caa24187794bbb6d288fcdd10"],["/tags/生成器模式/index.html","d9621d0b7de43bec3718c45dca0fc74a"],["/tags/用户体验/index.html","1ee3c306b3f85b751a7002fd662be069"],["/tags/类型与操作/index.html","33971be51efe17af6c71974c4d11bfb0"],["/tags/自动化布局/index.html","255b5c72dfc46a46ac7f0dcd0aac3c8f"],["/tags/自定义UIView/index.html","35264227cf23d13696dac9ecb165d9b5"],["/tags/自定义转场/index.html","fb05c95ada3d7c91461cef6fa985c981"],["/tags/自适应布局/index.html","bfa98e383c41530d0a1a1fdda07fcc03"],["/tags/表达式、变量和常量/index.html","fb228c780882e7b34c4e139fff7a143a"],["/tags/设计模式/index.html","caee26a7ae7634f0c1d2ea78ccc69564"],["/tags/设计模式/page/2/index.html","a3d3662e9c50fb532bc652e706ac5403"],["/tags/设计模式/page/3/index.html","28ad5a1ec85d61b8673aeeb0d65ba6a7"],["/tags/迭代器设计模式/index.html","0692ee126358fdd4ac819c5e4bafe1b1"],["/tags/适配器设计模式/index.html","6b990dcd2479f95973ff7666cc8f4cdc"],["/tags/静态工厂方法/index.html","4979f06eb6321f63f9b740f4e494933c"],["/tags/高级控制流/index.html","a437afa72729533ff1094d790ac01c59"],["/为iOS应用构建输入表单/index.html","59c141eaebb8ea2062f4c0d9b3cc357e"],["/产品开发的幕后花絮/index.html","1f8f395d3b5f4b4c1beef5c48562b8d1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","98b11ba06d3ff94668a912387397b434"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","60ac68c1a598a01938d125653e166f7a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","47acc49ddb2a4890630dada70beb1aa3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b4f87ea675c8256808101ae3bbc413fc"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","066c42640877f886b51ba55fc83e1c99"],["/在Swift中创建自定义集合/index.html","0c75bb0466c07f87ce52caeaf5454f47"],["/在Swift中处理非可选选项/index.html","f36b3fce6113e7316cbe306750a17e3e"],["/在Swift中生成随机数/index.html","b73ba894a082384c4eccd8dabddf9d0a"],["/在Swift中重构单例模式用法/index.html","a28c318956710a443efea3d55a3bf8d7"],["/如何为VIPER编写服务？/index.html","137b224ecf8dc16a14f7cc9389dbbf7f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","f143385d8e172776966712ec936430a2"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8a462eda6375020ef3a32cc2fa225136"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","85c337ee3d80a1c6f4f1af8d169b06e2"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9e78c7a56a4c6f39a78dfaf499038517"],["/掌握VIPER架构/index.html","a2bada1786c7007feeebf060a3c7b4bc"],["/揭秘 WordPress Hook 系统/index.html","c90d98a6355a72f429f1cf7a89e86196"],["/比较工厂设计模式/index.html","72dd4af26d3de9aaa1f38d1ddaa730bb"],["/深入了解Swift中的Grand Central Dispatch/index.html","a02fc813089c2eac626e3458bfb01ad4"],["/深入研究Swift框架/index.html","a24fe1d97a3015287bc7944bc28cc082"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3544c9982f09da7a54c53d77d57e1925"],["/选择Swift而不是Objective-C的5个理由/index.html","97c16f1dea65ab0155be7f6fc4d47d4c"]];
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
