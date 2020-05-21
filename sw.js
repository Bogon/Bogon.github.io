/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","82e85f9dbef1218e22dec728b19abf7d"],["/2020年iOS面试题总结(三)/index.html","bc5b21288bfae1cac3f433fe42a2f945"],["/2020年iOS面试题总结(二)/index.html","db038a04ef759c8dd03adf5e381b15e0"],["/Advanced Swift系列(一): Swift 简介/index.html","6a1d127a3b52cfec62ca2b13cbe24e1e"],["/Advanced Swift系列(七): Strings/index.html","403f4c456cd88f3503796b432da4b789"],["/Advanced Swift系列(三):  Optionals/index.html","ec0c3d760d4778f30a08d8a2456738f9"],["/Advanced Swift系列(九): Protocols/index.html","e5377e24277f1bee206968663b83aa39"],["/Advanced Swift系列(二): Build-in Collections/index.html","1c993a2676dc7fec2d4c4cd33e0c2a7d"],["/Advanced Swift系列(五): Structs and Classes/index.html","9233712c6e667933930b35734ab23612"],["/Advanced Swift系列(八): Generics/index.html","f93053c0911e10e6825d1af41787e858"],["/Advanced Swift系列(六):  Enums/index.html","30951ad8aa47c7c4ad259f8975fcc040"],["/Advanced Swift系列(十): Collection Protocols/index.html","5a56bfc9071a9563cc3c47161e4f34f5"],["/Advanced Swift系列(十一): Error Handling/index.html","21713be32268f01cd9410429ea5f926a"],["/Advanced Swift系列(十三): Interoperability/index.html","57f8202105b96d34a7181996e77f2401"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","deec193d56d9193f0e9b38c66c04d820"],["/Advanced Swift系列(四):  Functions/index.html","70be2392b701d560fbd3ed1b20eac651"],["/App Architecture系列(一):  简介/index.html","2c19a25278459cd04094251bf45ad5b1"],["/Functional Swift 初探/index.html","9325ebd82cf93cfcda558f7282bd4418"],["/NSCODER和SWIFT初始化/index.html","b340b16fbcb1962feab9888b346cefe3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","40fab4b01ae46e87802a4a0cfde6efe4"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","24e13879c2f42285aecb43e437f82e5a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3cd305059dafff91edef4f5d244679fe"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f7db686be2abd3e36b5e0ac7c0451247"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","bfd2d26623832b4cc5c4a24338df642a"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","23de26629113568d32b11e8cfcf653d8"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","15379c8249b44bc7f84808f418163a66"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","fc235377fa2afecab011c25ba450ec4b"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","6ee71acc54bd5604c8f829c6edbee260"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d89203ef8069960e5862daaf658d44af"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2149994b2d4292391988c7fb64bcc612"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","afce7d6a46fcaf81da27269bc607744e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","a06d24ac5a173a8de9e7709990b0151b"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","3bbec9ff1e69c2c12be6a56788c5452e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","613a51a26adc35a57eb9eac14a206b16"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c2260c80c94e3b9a28f7569ddcc8a825"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","adbb936aa3450fbfdd621c2d7ed6fbed"],["/Swift CompactMap vs flatMap：差异说明/index.html","a8245e6d80f72dd2fb00dc370b83a513"],["/Swift Grand Central Dispatch 深入实践/index.html","185b2ba54d8c9e008432d8c16d9976c7"],["/Swift Lazy属性初始化/index.html","182e89d9845f5c3112f3f11086b8d98e"],["/Swift Promises 初体验/index.html","2a19c2f82c57be68d08af0e583c2b64e"],["/Swift Promises 探究/index.html","2e5501c810aedcf633ce88499d6d3d88"],["/Swift UICollectionView使用指南/index.html","1671770752f461b4c4aebf341ed3c2b7"],["/Swift URLSession 和 Combine framework/index.html","4840597d12cb3bcbba80b1964bfa52a7"],["/Swift 唯一识别的视图/index.html","1cc0dfbe6040d401427f734c3ac5e2a6"],["/Swift 如何学习现代UIKit？/index.html","9725926981cc04838ba7fed4f27c2f29"],["/Swift 用 compactMap 替换 flatMap/index.html","5576300dd671f9c37c178f63cd445c20"],["/Swift 选择和播放视频/index.html","217750ecfad679995ab904a3546f7654"],["/Swift中UIColor最佳实践/index.html","be16ef136d1e8d7b9d816ec3a8e083f4"],["/Swift中快速简单的工厂设计模式/index.html","026ceda480cf717cdab4701984341b1d"],["/Swift中构造函数与静态工厂方法的比较/index.html","826e31d849438d198e555782ab4d79b4"],["/Swift中的UITableView教程/index.html","099843c456c5fb9962389b5fef329edf"],["/Swift中的懒加载模式/index.html","1aef3782acbbce87f9fab8f4ea0bb420"],["/Swift中的模块和挂钩/index.html","da44e30777178bdba12427d754c48c86"],["/Swift使用布局锚点添加约束/index.html","fa6a68a2c21d6b2320aeb7b32a3f06df"],["/Swift依赖注入设计模式/index.html","0fd385bcb65a6cb68dd9ff65feceac10"],["/Swift关于Dependency Injection (DI)/index.html","3507a2c94477c686e0d29d779b391da9"],["/Swift初始化模式/index.html","59fa2fd321eb6f3ff7cfb351b32baa74"],["/Swift单例模式/index.html","c442246da5aece968710c3c3f1bd3cca"],["/Swift原型设计模式/index.html","0173961c3109570e920e9b7eb0e3bc8c"],["/Swift命令设计模式/index.html","e0107e7a8bd34c7f92d283d14cb4b61b"],["/Swift外观设计模式/index.html","2e9e59b67cb42791e7f961714ed5b5f8"],["/Swift委托设计模式/index.html","d2e28cb893e98dfe7037310d402a0615"],["/Swift对象池设计模式/index.html","150cf5f17204a583d870ef05d9fdf491"],["/Swift工厂方法设计模式/index.html","a8f83687c0efcb3ea1564870278c61f7"],["/Swift带闭包的懒惰初始化/index.html","fc5d01e4d445fbea9d5939a00f7b4e74"],["/Swift抽象工厂设计模式/index.html","5b0001d32b2ac98044378763dc38efbd"],["/Swift掌握iOS自动布局锚点/index.html","1b2bbdce02ce2faf374d44ade87cb424"],["/Swift支持旋转的自适应单元格/index.html","5924e40acdcfd6b8f8ad035619a12fe3"],["/Swift枚举值/index.html","605eaa0bc42f583c148c506d3c7d88a4"],["/Swift生成器模式/index.html","23e0cdd2e812c319a6e01529b3e4ea9c"],["/Swift结合Xib文件自定义UIView/index.html","40ab515cc03711194b0fd71d94eb218e"],["/Swift编写的20个iOS库(一)/index.html","f11ea85cc341dd66be344a515414aafe"],["/Swift迭代器设计模式/index.html","7878fc3a8990011ec493305afd2342e3"],["/Swift适配器设计模式/index.html","a0861c80624d95d0309814fb2ff21548"],["/Swift静态工厂设计模式/index.html","8c77d39c0b4201fa3c7b8e2fd336b058"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","72c2169be44fb4f2bdd979087ffe811f"],["/UICollectionView data source and delegates/index.html","d84c47363c226505cff9aa5f9ec6a34d"],["/UIKit初始化模式/index.html","f5f463df2f0cedb2f42eb80e84253d75"],["/Ubuntu18.04替换国内源/index.html","f7ae0410859c4ce92835d4ea0282b010"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e8e79774bf2306b043430b931267bc1b"],["/Xcode扩展/index.html","ecc15671c9787cda70c123c3459b7d65"],["/about/index.html","bcff0212938b045337431cd7b7454f66"],["/appleOS的Networking示例/index.html","0c5293aa587ad53d3c3e96ff1f4577c8"],["/archives/2020/04/index.html","0d2821b5e1b8fcd1315a50ac3f4e0c6b"],["/archives/2020/04/page/2/index.html","f7fc052bbb671cefc75e5a940e681042"],["/archives/2020/04/page/3/index.html","c149b7f0b04cdd139d519582fed18853"],["/archives/2020/04/page/4/index.html","3049f7b55a16a28046e20ec34df282af"],["/archives/2020/04/page/5/index.html","c6e03958ab114783ca54ac076ce121b3"],["/archives/2020/04/page/6/index.html","f5f10191ca32dfb70d9000b86dd92e0d"],["/archives/2020/04/page/7/index.html","a68232b194569e08c3453f54b2456a00"],["/archives/2020/04/page/8/index.html","cfc26d55cdf42297b1984aae23ab9a30"],["/archives/2020/05/index.html","32cb36dff6532f2fe01eb52715a47b01"],["/archives/2020/05/page/2/index.html","722b6bcd4710f8b122edd3ed0232281c"],["/archives/2020/05/page/3/index.html","0b6766dbe75bd63c8131ae138e6c673d"],["/archives/2020/05/page/4/index.html","45b28d714e755c96f93a70f1b08b5116"],["/archives/2020/index.html","67565dc488ec51bcea73352720610ac9"],["/archives/2020/page/10/index.html","2725b9a83d86d52c0e398165502249b8"],["/archives/2020/page/11/index.html","0acba3fb6b199445fb761a01eaf8c46b"],["/archives/2020/page/12/index.html","742930d4f386e705214c6640eef475a6"],["/archives/2020/page/2/index.html","456c93343e7fe76d827d8063ad983540"],["/archives/2020/page/3/index.html","27c32cd686b3f2a09fb4c3af6a6eba27"],["/archives/2020/page/4/index.html","e3f0677271897f763645f18aed2d5dd3"],["/archives/2020/page/5/index.html","52eefc0b697339b826024623fe854f97"],["/archives/2020/page/6/index.html","88147306c3761c87459abfe0895baf53"],["/archives/2020/page/7/index.html","0f79de89d3f21df40fc1a6bcc01128b3"],["/archives/2020/page/8/index.html","3756561f6c1c2e70978a196d33766c6d"],["/archives/2020/page/9/index.html","f515279306c70ff9b8e124cc485ba2a6"],["/archives/index.html","9c8ac6b5962c0533d138cf4bdd9fbd03"],["/archives/page/10/index.html","a3568b5a6c1903267d9f25000a5874c2"],["/archives/page/11/index.html","256d9c98cdf15045f9126f52c92b235a"],["/archives/page/12/index.html","dcca313f06ac0202681e9a8b19c78404"],["/archives/page/2/index.html","5654ff08c46c3bfc960903f188e941c1"],["/archives/page/3/index.html","5353c2190cb8ae2db2843d3bb3f481d0"],["/archives/page/4/index.html","fa3b8bc9aae2693718d031dcd035b421"],["/archives/page/5/index.html","505d0c8c10272467301da6b62f631962"],["/archives/page/6/index.html","aeffe17264df1e766d408ed428bfefbf"],["/archives/page/7/index.html","646645fb37cfea6a8d5508e64925fd60"],["/archives/page/8/index.html","c3997aab8624da440a6d99b80bd898ef"],["/archives/page/9/index.html","8154c48c6b6a68fbaca807839a07b49b"],["/categories/Advanced-Swift/index.html","f20c9509f101fea349b90a6357e1f580"],["/categories/Advanced-Swift/page/2/index.html","4c166cbcc812ad18ebe0f1771276a821"],["/categories/App-Architecture/index.html","432baf1ad7f3f4d67394b94a4102ca7e"],["/categories/Codable-protocol/index.html","643ab3085b4e484fcc66038ed70293f3"],["/categories/Combine-framework/index.html","dc2056a60aa9dd45990cce8841079f12"],["/categories/Combine/index.html","37dad95c558f7798cf5895d970f5505c"],["/categories/Grand-Central-Dispatch/index.html","40ce628f3f47d3a2de93b166a9b79381"],["/categories/Hexo/index.html","200e924062065ac6b35faa3fde427b53"],["/categories/Promises/index.html","dfa5602a280b1ad6a70e4cef487a90bb"],["/categories/Result-Type/index.html","d6d2dfeea83ae7843ed46876109a8f48"],["/categories/Server/index.html","60a7510c02c3951992d85366956ed081"],["/categories/Swift-Apprentice/index.html","1569091b295ee265368992d25337641c"],["/categories/Swift-Apprentice/page/2/index.html","69488c375e7831a4f42ac231f7b9f374"],["/categories/Swift/index.html","552c89a081de22c53b27b0c6d73a3f68"],["/categories/Swift/page/10/index.html","70a7fdbd8e025d3a5bdea96662cec3af"],["/categories/Swift/page/11/index.html","da2af1db076beff3dc505bae3f3a2fb4"],["/categories/Swift/page/2/index.html","c2217d311af476be0542f367c6c143aa"],["/categories/Swift/page/3/index.html","e2de4c616ece8b490e0d2fffea49ad99"],["/categories/Swift/page/4/index.html","4ab8f76a96907e1726ca5c840d599bc8"],["/categories/Swift/page/5/index.html","b3a36e8e9cce9b691cb6e2c3d4d2b4f9"],["/categories/Swift/page/6/index.html","0e97f356b239d42ae8f0f8c6cb29b028"],["/categories/Swift/page/7/index.html","36eab26013d363ba21e4fb63103b37fa"],["/categories/Swift/page/8/index.html","a80f6288a50ae76e3ee6facc8e9fa17e"],["/categories/Swift/page/9/index.html","4a015700f0cb1cd7c56b35b5be7e2118"],["/categories/Swift5-2/index.html","85ffe75b89428120ac41c0609cdfc1ef"],["/categories/SwiftUI/index.html","289f336f792a175752bd683a827b34dc"],["/categories/UICollectionView/index.html","8b252139d8eb5da22a8478a8d1391a4e"],["/categories/UIImagePickerController/index.html","5e93753f5a363d9e25ac8372d1611a9f"],["/categories/UIKit/index.html","e1c9cf7af7c84dcedcc7160195007a9a"],["/categories/UIKit/page/2/index.html","6908d8565151232a812d6a87b611c146"],["/categories/UIKit/page/3/index.html","493a249029cc045e88e339e689a12127"],["/categories/UIKit/page/4/index.html","7cd01c0dcda6855d9cad10c0402bd175"],["/categories/UIKit/page/5/index.html","e936a44d66410c1aa47bf05b056d7ca3"],["/categories/UITableView/index.html","03d58293166315a2c18a1f28fac9d267"],["/categories/Ubuntu18-04/index.html","080149a0da73e8bb633662fabf103fdb"],["/categories/Ubuntu软件源/index.html","db28e0ee9d7dc16cc507cacffce4260a"],["/categories/Uniquely-identifying-views/index.html","53b463a3ca665798bce667e29a48d69b"],["/categories/VIPER/index.html","a0d3aec62aad2cac55e7449724111dbc"],["/categories/Vapor4-0/index.html","dce60b32013c780e749a3a2e437f4f54"],["/categories/Xcode/index.html","4d05114bc99c4cdf8023bed2c43aaa54"],["/categories/appleOS-Networking/index.html","d26489791ce36d16e2253bdfe2154794"],["/categories/enum/index.html","9ccae14030947a5e9ec7d6f643302f98"],["/categories/iCloud/index.html","c38eb3da9138e4052bed60c9090e7e15"],["/categories/iOS/index.html","0c384efb511dbebc25f228f2d5fae68c"],["/categories/iOS/page/10/index.html","d20cc182bf7c73a5a9d2ee69b2abacfe"],["/categories/iOS/page/11/index.html","29576addd4da616f3c8743b99bb6db7a"],["/categories/iOS/page/2/index.html","aff2f6cbc3da5027410ea4abae92e967"],["/categories/iOS/page/3/index.html","a5c0658cab03606edecc4bd7f126761e"],["/categories/iOS/page/4/index.html","b2df27ceed3aef5e4205c0ba1e6dffd9"],["/categories/iOS/page/5/index.html","bf7b30fb09690e59d4e46e44abe103ac"],["/categories/iOS/page/6/index.html","cb17c445ab0cb19debdddb0edcc3e7d2"],["/categories/iOS/page/7/index.html","fa518e77e3ea7393c568cf912bac1c82"],["/categories/iOS/page/8/index.html","c129fa3b08c21c88885042ece1524957"],["/categories/iOS/page/9/index.html","bc511c2973c1b57f97b18f96b1873dc6"],["/categories/iOS面试题/index.html","742960e57a8594c35b0931c361b85462"],["/categories/index.html","1fee1cbc8d883074fcf50980bc19cef8"],["/categories/random/index.html","4d4f0a0b00af680be937dc1d335979a0"],["/categories/三方类库/index.html","b0d5da8b102ccb76cb49b47070469012"],["/categories/函数式编程/index.html","78b3caede52d716e8484d04e59b7ce13"],["/categories/子类化样式/index.html","6516135326b9aec33f5920e6e4051ed8"],["/categories/架构设计/index.html","cbf033e34afac70e6e3c8cf02efc2394"],["/categories/用户体验/index.html","a374bacebbe5f5bedc30cbd39ec8040e"],["/categories/设计模式/index.html","ebc58cf047a631ee41f70d251e373511"],["/categories/设计模式/page/2/index.html","2fafe58b000613a172efd9476877b85a"],["/categories/设计模式/page/3/index.html","c339733e96857967560c72d1aec0e4a4"],["/css/main.css","19caecc37bac5a3e8d0cd266b0a80527"],["/hello-world/index.html","b4511b759b82f17957fae32129ff8ce6"],["/iOS VIPER架构深入实践/index.html","78fa4d69072491bc3354db3767923c61"],["/iOS 自定义视图，输入表单和错误提示/index.html","2fc2730c0178e6b05a464ab4a2290a6a"],["/iOS如何使用iCloud文档？/index.html","f8b399624daaedc6da99b3cefa38b345"],["/iOS子类化样式/index.html","dd223d8ad62d396789da0f7fd70fd1aa"],["/iOS自动化布局编程/index.html","9517b6caad48bff251009ae770f9081a"],["/iOS自定义转场(By Swift)/index.html","e8ab5ce9415c08148a5f4932f55c7c0a"],["/iOS项目架构：使用VIPER/index.html","1322efcf51c61c25656212d634de9cf2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f944f461b59d9e9388ec5db0d6cf8ff9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","f95ca4028efe9699fbb08faff3da842d"],["/page/11/index.html","a32c1d8f4de71846fdd00047bad9a205"],["/page/12/index.html","1214d78dc0b7ae183088536b9ff06dde"],["/page/2/index.html","be22ad28d03990e9dffcf05b502a2d2c"],["/page/3/index.html","0183d186d56a9c4ac04c5657b7714e41"],["/page/4/index.html","588c9ede6a8613a6c157ea8e336731a9"],["/page/5/index.html","a43b628da48d11525e5fdda632f09144"],["/page/6/index.html","705bdde3821f5f09d8c6a04cfb6d36f7"],["/page/7/index.html","04a1caaa010066d7bc39e36bd66a4dc2"],["/page/8/index.html","5f9e064035d36964c6eab564a5a50d55"],["/page/9/index.html","24bef8a11ed58bb199f1cfa5d632639f"],["/schedule/index.html","3d3206c8cb81c6b0cf29922e42668735"],["/sw-register.js","5532be8d38634bf92c60196d8f60f3bb"],["/tags/Advanced-Classes/index.html","a01daf33ac8d56436373484a152f31f5"],["/tags/Advanced-Swift/index.html","75d66cdc17a3de4728218505d5cba18f"],["/tags/Advanced-Swift/page/2/index.html","e563787dc9e4d6b6982cf3d97830d718"],["/tags/App-Architecture/index.html","fcfa95fb05300112b6fb0ca9410c9760"],["/tags/Arrays-Dictionaries-Sets/index.html","45203fe23ac40f44d0a4a2f49a647618"],["/tags/Build-in-Collections/index.html","1279377ee684620bf5fa8710953037c0"],["/tags/Building-Your-Own-Types/index.html","2e676e4b6b178fc78ddeac2d2dd67576"],["/tags/Classes/index.html","b57be52c366838119e4c865892cf06b7"],["/tags/Codable-protocol/index.html","76d71e3d240f38597afd9f201e5832e2"],["/tags/Collection-Iteration-with-Closures/index.html","d279768e343ed9a73290d0fed40b84c8"],["/tags/Collection-Protocols/index.html","e0e40e939466fbf10cfedae1a35412f8"],["/tags/Collection-Types/index.html","00614a98c007de59a022a48c5c91848b"],["/tags/Collection/index.html","a584a70b4377d46bccd5084b3f19601a"],["/tags/Collections/index.html","918e8bc12154577e0186d32f9eb0365c"],["/tags/Combine-framework/index.html","5ea2e15cdc7606451f509e20c513d5bb"],["/tags/Combine/index.html","9e392811f26f9ee43312faaf1ee8ba3b"],["/tags/Dependency-Injection/index.html","b6121e11d3a858f05a3df68c973a68a2"],["/tags/Encoding-and-Decoding/index.html","d6076d5cb21d79dc0c87725a875ff3d8"],["/tags/Enums/index.html","85e8a74dd8740b507bb3fb9509cb66b9"],["/tags/Error-Handling/index.html","12408b3a8eeec871c17ac13948ad00cd"],["/tags/Functions/index.html","32e04a59ed9cebf2952e1d52a15374af"],["/tags/Generics/index.html","ccd41e9b772d2a85a1442188693a1558"],["/tags/Grand-Central-Dispatch/index.html","73ac4de8e5724d1a92b3299f1c686e38"],["/tags/Interoperability/index.html","b01b5d91cac79dd38515a89f52ad577a"],["/tags/Introduction/index.html","1e625544f4dd0e9ba0d33b609cae6876"],["/tags/Methods/index.html","aa6b2fad3422639935fdb38a91961f83"],["/tags/Modules-And-Hooks/index.html","466d68c2604941de01a3f0f9f8769c1e"],["/tags/Optionals/index.html","5a72511b1314f68198364690a93fda81"],["/tags/Promises/index.html","8ab448f0e7d311b12f5ccca4013af411"],["/tags/Properties/index.html","b6680b7e9b0c9010d7e54ac1483ecc12"],["/tags/Protocols/index.html","825f82976bb862d2da34d084e33e2be3"],["/tags/Result-Type/index.html","2eb7c4dc620a16d52419147041562756"],["/tags/Server/index.html","21484cc631a625e8454411f74615005e"],["/tags/Strings/index.html","3f2ee94618bdf297f24c17377b566c0f"],["/tags/Structs-and-Classes/index.html","d0133d9bdb79def795a0a118268c189c"],["/tags/Structures/index.html","deb2017e5b45ccd51bde634d781f594a"],["/tags/Swift-5-0/index.html","75e4534c3248ee1677363d89cae45128"],["/tags/Swift-5-0/page/2/index.html","dc4218987f2358b58c98667d7f8dc26a"],["/tags/Swift-5-0/page/3/index.html","f1f20ac91ee92d945afffcd929334dce"],["/tags/Swift-Apprentice/index.html","15cf2ecd907383e6044fc06129c7f6bc"],["/tags/Swift-Apprentice/page/2/index.html","98327ad6f85796eba6743eed74b6fa8b"],["/tags/Swift-Package-Manager/index.html","49b8e8f808f5179c7f23b31016861e64"],["/tags/Swift/index.html","b6e1c0c31f2acfe86ba226fa02bfb2a6"],["/tags/Swift/page/10/index.html","412ce54a918544b13ae566ac594380c1"],["/tags/Swift/page/11/index.html","6a458b69da4a992a28ec0e9efd686180"],["/tags/Swift/page/2/index.html","0771f636f43429acbb93a0b8e9b25563"],["/tags/Swift/page/3/index.html","1cbe799d44c311305a2c6e86fd7739d7"],["/tags/Swift/page/4/index.html","548464c2f1a98f979307aa46a508ced3"],["/tags/Swift/page/5/index.html","d36f841ea4c7276985f83fa089eb1d5c"],["/tags/Swift/page/6/index.html","3c2b8716c67495db86c7889b7b8c0a13"],["/tags/Swift/page/7/index.html","58ef409545ef6f0656cf8b34c4dc9824"],["/tags/Swift/page/8/index.html","8e4923105e99e91f8fd0b0b383a4c9b3"],["/tags/Swift/page/9/index.html","b96eb6f8353901de99a7bbdcc8f8a872"],["/tags/SwiftUI/index.html","54abd59d0fc7c8a084759d3f301eb97c"],["/tags/UICollectionView/index.html","d2bfacbe809ee9833e0b1a7a2f3adabf"],["/tags/UIColor/index.html","c7eed4af74423cdde1df45a888fd699d"],["/tags/UIImagePickerController/index.html","2a49d7bff83920023497e5df196b06ed"],["/tags/UIKit/index.html","6db97aa317d91b060ad11717add7bcad"],["/tags/UIKit/page/2/index.html","9439b144a0cb7671e7b7e0ab89d3257f"],["/tags/UIKit/page/3/index.html","8baff299ce8a71bb914a8f8b6b748afc"],["/tags/UIKit/page/4/index.html","ac3827042d1fc55966e024933b24e67f"],["/tags/UIKit/page/5/index.html","79d3529f2030967dd572fa25c9559981"],["/tags/UITableView/index.html","60dc58f6d0c3139489af0e6edada0b4a"],["/tags/Ubuntu/index.html","9fff6fcd91fde2bd7f0188af6104f182"],["/tags/Uniquely-identifying-views/index.html","a5e376b249890d9dc869347430002afc"],["/tags/VIPER/index.html","b49ba28f224d398330d7b6bf0f4f4f63"],["/tags/VMware/index.html","0acac656883aa40e6f0c0bee4937b233"],["/tags/Xcode/index.html","b45a999be86db3378c11b80b7d67fe5f"],["/tags/appleOS-Networking/index.html","783af7ecc98c45012713fc8ec0f3df65"],["/tags/enum/index.html","b8e72c077341103947ff689beb1818b8"],["/tags/iCloud/index.html","8cd6f361bfac2dc8706ce423bfbeba4e"],["/tags/iOS/index.html","9e7716426fb78cc4ecee6be33a5a0091"],["/tags/iOS/page/10/index.html","7b67bdd4c0e1b0bb649bbfd23951de4b"],["/tags/iOS/page/11/index.html","c485264785354801c908b89404f6e1ba"],["/tags/iOS/page/2/index.html","04358d161d5a2c5ff3c1c5971b9e4acd"],["/tags/iOS/page/3/index.html","1665b5f6eef5dc7c0c4f1ed4fa05c50d"],["/tags/iOS/page/4/index.html","6482f091579b4cfe31f04a087b4c32b1"],["/tags/iOS/page/5/index.html","4cadb60766d7761de7b7ae09f919f381"],["/tags/iOS/page/6/index.html","9eb41c6e83fdf89c821bec6d729f22c4"],["/tags/iOS/page/7/index.html","944e94f7149f9d749782c87b3f97da2b"],["/tags/iOS/page/8/index.html","9d62a5879bd87a2b613a7613aa686305"],["/tags/iOS/page/9/index.html","e3c021eff8935e5a548773dd2f9dcda9"],["/tags/iOS面试题/index.html","0daf0fb3179e03ca59d964c6f0828754"],["/tags/index.html","93f580304c51b80bd40ceaf03fff0f27"],["/tags/non-optional/index.html","688b1fa1ab6285fd24bfa46dfb0525b3"],["/tags/random/index.html","68840f111e4c7d0cb09ad0043fb72028"],["/tags/transition/index.html","2ff908a946f2d87b2699a55fcc9fd1dd"],["/tags/三方类库/index.html","7ae31fa773a2b7341c63d2cb946bf609"],["/tags/依赖注入设计模式/index.html","cabc43780b49a2a377429d922152e6e5"],["/tags/函数式编程/index.html","24be56820ea3d5b8c4f4bba63c28b742"],["/tags/初始化模式/index.html","a8a8b6fa2d47f2a338c3bd4358ae6f02"],["/tags/单例模式/index.html","82c92a81105e9eca513f2a87a4b462df"],["/tags/原型设计模式/index.html","ac1bd09b77d146b65ea0a770d9d806d4"],["/tags/命令设计模式/index.html","d37b9108297bcaf9aff4488f65f1bb84"],["/tags/基本控制流/index.html","c32ba875459e90f85bdc24b8d5b5f49a"],["/tags/外观设计模式/index.html","2bc5070cca0d6b84f3c32155325bbe1d"],["/tags/委托设计模式/index.html","d7d1782c7ac4a1aa41b1764f6df730fa"],["/tags/子类化样式/index.html","7dc11cdd0c6dd28d1b277ab3474e7333"],["/tags/对象池设计模式/index.html","e27b4e523b0da76ca94e71a948687066"],["/tags/工厂方法设计模式/index.html","ef4727ef987083ff2c419450a8e2bc55"],["/tags/工厂模式/index.html","021a8cf806c7382a60db6f55d438fdcc"],["/tags/工厂设计模式/index.html","25caae8fab4749af3254b5811237ef09"],["/tags/懒加载模式/index.html","5a2b3da3949785de46856385e8658aa8"],["/tags/抽象工厂设计模式/index.html","c75b333157da88b0e5a0a9179ca4b7d5"],["/tags/构造函数/index.html","1c9707c5c8b610e6003f8bdec7b4d272"],["/tags/架构设计/index.html","f29416c8036344c7892e3ef740dc4fee"],["/tags/生成器模式/index.html","4e64f78b63b33bb0cbca7b2317ac02a1"],["/tags/用户体验/index.html","9876494a02f512337cdf7c885784ae9a"],["/tags/类型与操作/index.html","8521da01876b6d1a1637d5ac65e2a2db"],["/tags/自动化布局/index.html","9c536ac5d0faf460df59fff2670c9c3e"],["/tags/自定义UIView/index.html","0f14f4e3cd794d6057ab71d0a4f32cb5"],["/tags/自定义转场/index.html","a63d2000c6fbc8d32a3bd888b68dad9d"],["/tags/自适应布局/index.html","7cbdcae21143cf37064ec22560dd2a36"],["/tags/表达式、变量和常量/index.html","e9b54f064e4d5269a055a5529ba1f6fc"],["/tags/设计模式/index.html","571874d05b22164596b9ac497c257ab0"],["/tags/设计模式/page/2/index.html","1081837e1ef967732cf0b72305938047"],["/tags/设计模式/page/3/index.html","fdb06436b569157227cce179c81e9c32"],["/tags/迭代器设计模式/index.html","80d843d78363f881c072acb66aab68b6"],["/tags/适配器设计模式/index.html","bab3a14ebffc7455ae54cf5c15226d57"],["/tags/静态工厂方法/index.html","e90c58fc8e08ae890b30495fce3211aa"],["/tags/高级控制流/index.html","d05401baf32727b71f8c2e6647c2b2d4"],["/为iOS应用构建输入表单/index.html","9f180b98ef88be4a5b27745526956a86"],["/产品开发的幕后花絮/index.html","4fd064e98726c591950e9229fa9d624b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","42ff3ce3be5cca7cb284d747365d9df7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","19580e4acfc5ee34533c3a90b35c7c92"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","02f6f1ee3cdbf3c6d950b5439fc2136c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","aba97a539d5de165939dbaecda112854"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a7b8efa3568bce0058ae67df7a777cc9"],["/在Swift中创建自定义集合/index.html","64d6f4277cd22a9a50bfe9b23c016486"],["/在Swift中处理非可选选项/index.html","51ee01888d9275008e4ce4f220ae486a"],["/在Swift中生成随机数/index.html","9d6d08517a1bdfc37237c0e0453e5418"],["/在Swift中重构单例模式用法/index.html","d41241f162f061924aebe6f3bd7003d4"],["/如何为VIPER编写服务？/index.html","9c426c819d10a59cbd37451db4ccedaa"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","304f58b85018fe2aeabb1ae73fc8c1e1"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","6954dfa7d2f44a98182f1a08bfefad82"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","12d916ee70feb8f70ce71f756b9a08cd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","9282b15ba5d864c72c47f7ea76e61fdd"],["/掌握VIPER架构/index.html","06aa8dcaf44420d15695df0d27e87dbc"],["/揭秘 WordPress Hook 系统/index.html","dc7245a4be763279f8136196eaf66b70"],["/比较工厂设计模式/index.html","9f9abd7e0f128535649f13660e4612a1"],["/深入了解Swift中的Grand Central Dispatch/index.html","58c5e9fafc9c8cbcbcf884a767c9799c"],["/深入研究Swift框架/index.html","4f8d5c55287aaced2508e11b3cb2710c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9f69aaaf63f7dd0aa270b5144a3eab92"],["/选择Swift而不是Objective-C的5个理由/index.html","a7a64d9a5953e2943318b6af80803471"]];
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
