/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","a9f41ea667cbc344e6e2bdd34ebc3036"],["/Advanced Swift系列(七): Strings/index.html","cfade641116d42511895885f4bc5f91d"],["/Advanced Swift系列(三):  Optionals/index.html","84a436f1d0975e60b0562137044ffeb4"],["/Advanced Swift系列(二): Build-in Collections/index.html","da5d47ee189d29687a6dfd10e8cd0a57"],["/Advanced Swift系列(五): Structs and Classes/index.html","693abcba881c6771557a5e661e8ba6a1"],["/Advanced Swift系列(八): Generics/index.html","6456d2c45f2767f2e8f35138abfc92ad"],["/Advanced Swift系列(六):  Enums/index.html","c4d9e7882112495013ccc9b3bb6db1b1"],["/Advanced Swift系列(四):  Functions/index.html","9287072c0bb667cd36a728955b3334f9"],["/Functional Swift 初探/index.html","66d7683043b6bc546837f2ff506f895c"],["/NSCODER和SWIFT初始化/index.html","bcd499c58cd031c042874a97262b8012"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d3a34e6665c9db05f925ba75fdb67913"],["/Swift CompactMap vs flatMap：差异说明/index.html","738abb41fb9e55100fe726301bc31b41"],["/Swift Grand Central Dispatch 深入实践/index.html","b2f3b780883da261964f5c4404c2a200"],["/Swift Lazy属性初始化/index.html","7b6d32d99724c51005e28f7eda3a9eb6"],["/Swift Promises 初体验/index.html","a4162a42ca00234a9b8d2251712cd320"],["/Swift Promises 探究/index.html","da846a95c22ec56dcbf1d279209d7178"],["/Swift UICollectionView使用指南/index.html","ef75152b4670bcd3841136bdeb23347e"],["/Swift URLSession 和 Combine framework/index.html","e6e88c4aa25b503918b166ef4f568587"],["/Swift 唯一识别的视图/index.html","bfd55aa7a41e70599f39aeb12385d71e"],["/Swift 如何学习现代UIKit？/index.html","8456385f60f3f990095d542fd9bd6de5"],["/Swift 用 compactMap 替换 flatMap/index.html","46e93a747004af333188e4d8d0ecbe24"],["/Swift 选择和播放视频/index.html","34849442de3bf6252c1d9d5d2c97de0b"],["/Swift中UIColor最佳实践/index.html","836b1e82a18a464621640b374a6b9006"],["/Swift中快速简单的工厂设计模式/index.html","773a1b7ddc383590a3fcd6b51a023731"],["/Swift中构造函数与静态工厂方法的比较/index.html","7bed92c22a6a32c4ebf9dc4b0bbd12a0"],["/Swift中的UITableView教程/index.html","7cb99f7418044ff169ae51864be04d67"],["/Swift中的懒加载模式/index.html","89f7a74a2dfdc6902193edcc1f001816"],["/Swift中的模块和挂钩/index.html","aee7ea4b561443fd7304a4482d3b6de6"],["/Swift使用布局锚点添加约束/index.html","164db57899446cf702e0301c0886cb64"],["/Swift依赖注入设计模式/index.html","066831489378853fc216b7c2f5d576c0"],["/Swift关于Dependency Injection (DI)/index.html","bc7148f99247c8a1cedf8458a7d4c6ba"],["/Swift初始化模式/index.html","12c6af86f08b077ef4ed1dc71c0a2d69"],["/Swift单例模式/index.html","f232b05aef5112ac437e6278388ac620"],["/Swift原型设计模式/index.html","b345b8c7a069554ab5bc8b0d22b39979"],["/Swift命令设计模式/index.html","d99aba62f5e12a54385497a7624dc553"],["/Swift外观设计模式/index.html","40fd5435049830df1f4cdbd3966ed5c8"],["/Swift委托设计模式/index.html","436291f1c590908e0c45f97c4ec9fceb"],["/Swift对象池设计模式/index.html","d4be0339d983ade21026277021d77543"],["/Swift工厂方法设计模式/index.html","ba63c252d01c697feed744a2561be6db"],["/Swift带闭包的懒惰初始化/index.html","6eeb3e80ea7d7ed8d080fa2340118daf"],["/Swift抽象工厂设计模式/index.html","d131c93d97cfb278974cf479fb46d680"],["/Swift掌握iOS自动布局锚点/index.html","a025736e1c0a000eab817b0c503b29fa"],["/Swift支持旋转的自适应单元格/index.html","f7f6443f7938c8232287a4d237c0b555"],["/Swift枚举值/index.html","44b1a184eb7232da5401459dc59d1814"],["/Swift生成器模式/index.html","ad78672022d0a3f925bdc2c85df683de"],["/Swift结合Xib文件自定义UIView/index.html","ec40edce6742867c9907da339779569c"],["/Swift编写的20个iOS库(一)/index.html","756ad1d883facf82469a4f68473ee7ba"],["/Swift迭代器设计模式/index.html","d9f5bc0f6d8cffd7c195217eda9ed164"],["/Swift适配器设计模式/index.html","55ee159752e879518a40ec7873f9b47a"],["/Swift静态工厂设计模式/index.html","24a2742727a211d7edd3781d11f3b853"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","619a38f3270ebd74e976dc9cc59b30c9"],["/UICollectionView data source and delegates/index.html","065eb744789f9e4884f9c325d38d501d"],["/UIKit初始化模式/index.html","5eadbabe3216bd45b405092b878e722b"],["/Ubuntu18.04替换国内源/index.html","9a62fc91883feb55a6f80fea9ee6300e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","92ec56264f0181977cdc7b5afffa2704"],["/Xcode扩展/index.html","f8570e2193b6a8b78d09a516aa6b041f"],["/about/index.html","63d2444d1fbb1f60d824b6c31de5c0f7"],["/appleOS的Networking示例/index.html","b32f24e6442e23600f24967e69244eff"],["/archives/2020/04/index.html","11f4add7226651ee21ed33f7e7250d6f"],["/archives/2020/04/page/2/index.html","4443f3b63c9f7757a1e9e713efe450fa"],["/archives/2020/04/page/3/index.html","8b41f45f3c000da801d087826fbdbbf8"],["/archives/2020/04/page/4/index.html","d8b9a2a5e7d5d9d2fb50c378317bb379"],["/archives/2020/04/page/5/index.html","700f04688719e8a67b9cc62a1ac6c1c5"],["/archives/2020/04/page/6/index.html","a1dd1223b3318f84031ec28f64dea19d"],["/archives/2020/04/page/7/index.html","8b1453306d02861b1709b49793efef07"],["/archives/2020/04/page/8/index.html","7d721ed8e59ab0e0c7a517f99116b20d"],["/archives/2020/05/index.html","6c08792ce65ef03fe8da00d65954bd0d"],["/archives/2020/05/page/2/index.html","961b44bd11e70650ffdcff63be09ebb9"],["/archives/2020/index.html","50db715f8c04432beae6f40579793bef"],["/archives/2020/page/2/index.html","e19faaa32f9626db5740e931316722bf"],["/archives/2020/page/3/index.html","3ec167e0232a5ab1e2b594c0db3718f3"],["/archives/2020/page/4/index.html","871ac4b47bd1c8504c9cb4d73a15d289"],["/archives/2020/page/5/index.html","33504dc14b55c367ccf63b089c419b68"],["/archives/2020/page/6/index.html","33835caf2332403129bec998c42bfdf9"],["/archives/2020/page/7/index.html","f16b5390c876d1205c01914bf9bd0d64"],["/archives/2020/page/8/index.html","6f903d6d8a3fafe144a46084ed5d8316"],["/archives/2020/page/9/index.html","5714d8269266b51f22072daba4c0fcc1"],["/archives/index.html","273a240375885834a9ced4a923dee0b6"],["/archives/page/2/index.html","82fa1036c67a4a71b396e33c3f4052b2"],["/archives/page/3/index.html","03fc755320e9b3006a010f03bf8a0cb3"],["/archives/page/4/index.html","0e774a13cc14fa6a7f3965a6690637ca"],["/archives/page/5/index.html","7ec6b08502207e650b56191f3c99be8f"],["/archives/page/6/index.html","d65adb1b9c6228f5a0002c0029acf9be"],["/archives/page/7/index.html","d6f7542595cd79dbb2b46016505a127f"],["/archives/page/8/index.html","ae37655196eaddea50a3df264a3752ff"],["/archives/page/9/index.html","4e9d08f9ae03b42858fc956c89fbf1c2"],["/categories/Advanced-Swift/index.html","ea96670e844771fd02c6e9005a21839d"],["/categories/Codable-protocol/index.html","b160a7f2e39971ec1c4ca80bb34980b7"],["/categories/Combine-framework/index.html","5cb8948af35bf4737b8985445a5eeedc"],["/categories/Combine/index.html","50505c69378bce17e47dacbf6be24117"],["/categories/Grand-Central-Dispatch/index.html","a7a87980af1d8665d284b516f9b10758"],["/categories/Hexo/index.html","74de39a57a522404d9d3b83c6b84eecf"],["/categories/Promises/index.html","352d0ee85051fffbcf0da3a05b027dc6"],["/categories/Result-Type/index.html","ec826fb86247935d61aafc9adebcc6f3"],["/categories/Server/index.html","5ec840ac543a4efdcf375703fd532a11"],["/categories/Swift/index.html","46f3ffd45f7aa405999cecc491989481"],["/categories/Swift/page/2/index.html","fbcb72b5dc0f1df40ecd753e215132c7"],["/categories/Swift/page/3/index.html","1e3a84cd1da3ea833dc3e413666421b6"],["/categories/Swift/page/4/index.html","ed13ba62aec509e623c831205d2fd9be"],["/categories/Swift/page/5/index.html","db4e4d33286ac71553f8c69cac5c7892"],["/categories/Swift/page/6/index.html","6439d4c92de68e55ebbb4e6bdbd7c11d"],["/categories/Swift/page/7/index.html","bc8be7c4c558ad9effca3f8c296fc966"],["/categories/Swift/page/8/index.html","ddd8c40a9aaca3e15a0d868d5157c44c"],["/categories/Swift/page/9/index.html","9645763888139e3892cc269b88cfeaf9"],["/categories/Swift5-2/index.html","fe0b1a8b09593ed768a2b1d74b25b35a"],["/categories/SwiftUI/index.html","b5e9e1c8f53db8d5554260b96093dda1"],["/categories/UICollectionView/index.html","27bed373e4638364c6baf9f74c4f8af5"],["/categories/UIImagePickerController/index.html","67462971714631a245c7fb47c01bdb18"],["/categories/UIKit/index.html","2d2bfc7f810160d5f089dd10bb63d1e8"],["/categories/UIKit/page/2/index.html","0c1037ea3a2146ee8c921df53832cee1"],["/categories/UIKit/page/3/index.html","439263d98dadef892b19ddeda5a5931c"],["/categories/UIKit/page/4/index.html","831ae7b6eb944b66b777170d972e7003"],["/categories/UIKit/page/5/index.html","6ce6a3dacda13f0f0d22639a9cb9b7c3"],["/categories/UITableView/index.html","5bd4598acc39ee69c9683945f5be7860"],["/categories/Ubuntu18-04/index.html","9899e95f2433eca5b57bee8e428b06e4"],["/categories/Ubuntu软件源/index.html","5772456668165697e01f03568eba8bd1"],["/categories/Uniquely-identifying-views/index.html","b444e96bccd9d8a0cab36797d324b293"],["/categories/VIPER/index.html","921a454fca7ba9fb52fea1f190db5917"],["/categories/Vapor4-0/index.html","df87b52d35c1ba3156927d71d78d8993"],["/categories/Xcode/index.html","bcdc64d08743383494de9ca0343538d0"],["/categories/appleOS-Networking/index.html","6a94919d201124dd67e2416fda8a98f5"],["/categories/enum/index.html","257231da7088994e343e8d14587cc2a4"],["/categories/iCloud/index.html","634ed09666b4ab8238de4ed9f990e76f"],["/categories/iOS/index.html","74711322a14ba20828a5949a5589a4e8"],["/categories/iOS/page/2/index.html","71751d35fc02464d6dca9103a66dd4ef"],["/categories/iOS/page/3/index.html","6e23144b640898ca02f81c808fa97655"],["/categories/iOS/page/4/index.html","a130e981d8793f3c251be34291b1e653"],["/categories/iOS/page/5/index.html","f2839acd9ef5aa552831d8b971411593"],["/categories/iOS/page/6/index.html","0380744218eca2f73a60d6314e224903"],["/categories/iOS/page/7/index.html","acb380bed52d45cab3e9fc3f356761e0"],["/categories/iOS/page/8/index.html","7534ce7c2ee805656c55e002def60583"],["/categories/iOS/page/9/index.html","2d059a4503c7c467171057f0413015bd"],["/categories/index.html","9a500b9f27224a537e0e7641a90cbc3d"],["/categories/random/index.html","6a5a31620ce64f1e6673680019f0af5f"],["/categories/三方类库/index.html","50112eb1e8a8825bec284e30adea81b5"],["/categories/函数式编程/index.html","9204a019bc2784da35bcff91c23fb7eb"],["/categories/子类化样式/index.html","6e6bf2f3e8ee59c644c3076c774b1ac4"],["/categories/架构设计/index.html","a0f49b64076e5d729505e2c27f6f427f"],["/categories/用户体验/index.html","93c8cf438eff28e346e75c7ad1400396"],["/categories/设计模式/index.html","810ab6b695208a20dbf39ea6794e105a"],["/categories/设计模式/page/2/index.html","c7fbf2d17cc7c8f6175550ffd5607a76"],["/categories/设计模式/page/3/index.html","0f6a35b69cccc921e231f8df49026152"],["/css/main.css","555175178fb884df5a4d3b4687e4612c"],["/hello-world/index.html","1f3e65c3e34324ab2090e6ee2d738e82"],["/iOS VIPER架构深入实践/index.html","18f7b72240d5442bd531076e34775ea6"],["/iOS 自定义视图，输入表单和错误提示/index.html","2f5a2581b92639917bf3a9ed85313a9f"],["/iOS如何使用iCloud文档？/index.html","e8231d9426b8e4075753fb634e5bbd36"],["/iOS子类化样式/index.html","75028c91bf1fbf5eabdacee31032580c"],["/iOS自动化布局编程/index.html","e3b361c480c2db8dececdba48c170134"],["/iOS自定义转场(By Swift)/index.html","c796032376d34438d69660110e196516"],["/iOS项目架构：使用VIPER/index.html","d16bc20438602378d5e9351579c9dad5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","9599f74aa4c0199ad0dfb6699eb08f5d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1e01f0fbb7c58f1224f8f4e2fe9a0c7f"],["/page/3/index.html","3c139f044544560ea5093f00710a7e6c"],["/page/4/index.html","62525e4530020c0374d897950ed6de00"],["/page/5/index.html","579b083df65803a51f7b785b0957e3e9"],["/page/6/index.html","bad73bbcde4079fc9109980e5541eab1"],["/page/7/index.html","9a31a99899fa582db6dc196c46abb291"],["/page/8/index.html","b84bf186b3a9522cf62b5d9dcf420614"],["/page/9/index.html","d455aa6d539ba6d38fac9baf6540fc04"],["/schedule/index.html","826fa533090d2e09c80559d45ded0523"],["/sw-register.js","7f4b97a49a4b53759b481fde1653fb8b"],["/tags/Advanced-Swift/index.html","5bc64d4dc0a2cc4e314fe9a423419b5b"],["/tags/Build-in-Collections/index.html","dc4f543fc93671aef1721da731b9c49d"],["/tags/Codable-protocol/index.html","e88240658b890c9c50f7a29a3ae6fd21"],["/tags/Collection/index.html","58058ebabc0f770b148c250e20303557"],["/tags/Collections/index.html","a07c6c4eae683f2dcf6383a804b30351"],["/tags/Combine-framework/index.html","1b5b979f48d4708c9a4b4fcd62511a9e"],["/tags/Combine/index.html","2dfdc279b22487aa534f53e21f50a5d2"],["/tags/Dependency-Injection/index.html","f730f4cc7333892045b8f93d262ce807"],["/tags/Enums/index.html","73f3cdcdadc683b53dc8c2d999893da8"],["/tags/Functions/index.html","ace9ef3df937b98504cfa45cc5f4f75b"],["/tags/Generics/index.html","dd4047b6b48060bbda65f7ccf3f674a6"],["/tags/Grand-Central-Dispatch/index.html","12c82d1e1c8066520dc4370c202be126"],["/tags/Modules-And-Hooks/index.html","965689411f3c2c83886babba3da0be61"],["/tags/Optionals/index.html","0c70709237af5e55b7744e6ff109190e"],["/tags/Promises/index.html","5f02783b2c009a2af5abea950c521427"],["/tags/Result-Type/index.html","dc31ae00f2f8ef2064e0f9c026d0471a"],["/tags/Server/index.html","d6684548b72b01159f217b4fc5262290"],["/tags/Strings/index.html","455bf5cb92d143370ea9a8329b1eb369"],["/tags/Structs-and-Classes/index.html","1d3905468ba941c7965a74d321b51230"],["/tags/Swift-5-0/index.html","7ede8c9572d86cbac4a3bd1a8215878f"],["/tags/Swift-Package-Manager/index.html","1425fa7043c2696ad4a7c8fa7b2414c7"],["/tags/Swift/index.html","4dc4290a533a54bc0ca23c741cd8769a"],["/tags/Swift/page/2/index.html","9ee7f8d9542a0d943152bb6f6500109f"],["/tags/Swift/page/3/index.html","c5a44102766047a747cbcdb15f42358f"],["/tags/Swift/page/4/index.html","9b7a66f98cfb6a829a99a75fea670f2c"],["/tags/Swift/page/5/index.html","a0ae5ce492ff875092511d11a123dd16"],["/tags/Swift/page/6/index.html","ee75d492fc17ec232f485c0654697dd7"],["/tags/Swift/page/7/index.html","c2b55ab12a4260b69bc5fd99ab7b1fb6"],["/tags/Swift/page/8/index.html","0a5159f65b4130020051101758d7d075"],["/tags/Swift/page/9/index.html","45edb1bcf8ce2b153316883765de96de"],["/tags/SwiftUI/index.html","07f6707fa2cfff56aba2b0740de98d2b"],["/tags/UICollectionView/index.html","1b3dd4d27af8d63a270370eb0f1b3016"],["/tags/UIColor/index.html","b2228af064e23296817e9c7395854326"],["/tags/UIImagePickerController/index.html","2054cd7ad059a8d456104ad0a8559e92"],["/tags/UIKit/index.html","99b14124e3794d960c780444e1997b0c"],["/tags/UIKit/page/2/index.html","9a4ab8dd84d66c4fd740b7c2c0eda6ff"],["/tags/UIKit/page/3/index.html","f941c7f2f31c44ea5efbee1deb673229"],["/tags/UIKit/page/4/index.html","fdaa65712bb6f70a3c6c9f28fcaca14e"],["/tags/UIKit/page/5/index.html","7efd5a792c3a75f29bc184d59f15534c"],["/tags/UITableView/index.html","7a2cd848dd11e43a804a077733f0f76e"],["/tags/Ubuntu/index.html","b2016a079d443be331b1b47537b93648"],["/tags/Uniquely-identifying-views/index.html","955123d9ca283987aa329c5d6b1fe014"],["/tags/VIPER/index.html","9fa60415044b9866bc899d1216e27e96"],["/tags/VMware/index.html","9703e7d5b3841136304744a1875c0377"],["/tags/Xcode/index.html","baf7cdd7e7cba82fd27fea7ed023712e"],["/tags/appleOS-Networking/index.html","8f1d48a3d443153eb3a86a9964e940e2"],["/tags/enum/index.html","f59b42699c9a59ba577f3383e2adc050"],["/tags/iCloud/index.html","e30cb89c7d11bc35420893d7d4603e85"],["/tags/iOS/index.html","075db1bc874095c6f516cbe5c8082dde"],["/tags/iOS/page/2/index.html","84eb04d53ef4b8a033f3f7fc5ccbc0dc"],["/tags/iOS/page/3/index.html","37401772b5167323ca9bf69a287affda"],["/tags/iOS/page/4/index.html","ffabde1b57dd9b84e52d5c54482b3184"],["/tags/iOS/page/5/index.html","ab66f698732770da06b9670be16c87e4"],["/tags/iOS/page/6/index.html","b61f3e323f296692dce2df58ca86706a"],["/tags/iOS/page/7/index.html","9215d13fc9e69d76041a9c8424bf5f5a"],["/tags/iOS/page/8/index.html","5124bbabfbf2cfcb05c3fad98db4d323"],["/tags/iOS/page/9/index.html","1289f55108a4a1c8e6a6b83632b56f4f"],["/tags/index.html","ae36b2faab2bba60ee401d729afd9e3d"],["/tags/non-optional/index.html","ac88af59fc3b29c57884646d9022a0ef"],["/tags/random/index.html","19e888df191ffc34bf483ccb269cce91"],["/tags/transition/index.html","99acea0975f67c5f493744582ad281e4"],["/tags/三方类库/index.html","9f1830060dbce2c81eab9d83a6106cbf"],["/tags/依赖注入设计模式/index.html","2080b43520de0646f4e60626fa05ccb8"],["/tags/函数式编程/index.html","5027e65a22d8bffe3aac88a7211c4a2a"],["/tags/初始化模式/index.html","863f5a2a3d4e006c0e31f83c29fdffa9"],["/tags/单例模式/index.html","baf346314e6768ba8296835929e35142"],["/tags/原型设计模式/index.html","0abe30756d020ae624b149404f11115b"],["/tags/命令设计模式/index.html","a9d8367d3b08d323d58dafd97fe9167b"],["/tags/外观设计模式/index.html","f0ff2eb315ba0cd2dd3bb3dfab6c9289"],["/tags/委托设计模式/index.html","d3ea23d42ab7897c46d93ec87d89bc8e"],["/tags/子类化样式/index.html","84186b6f64a182f69e2edf65cf6978d8"],["/tags/对象池设计模式/index.html","4e48341b92ca27efd3f7b87c174d5cd7"],["/tags/工厂方法设计模式/index.html","24920f9f48004c0c6b64a856d9446183"],["/tags/工厂模式/index.html","233c6709219b1cae934bc748d904c34a"],["/tags/工厂设计模式/index.html","ea8170a11be87cc59d03573084f44290"],["/tags/懒加载模式/index.html","f25d3272aa5f0d06f06b9c273302c5db"],["/tags/抽象工厂设计模式/index.html","9f1ffbe85216078e4ebaea151f7827be"],["/tags/构造函数/index.html","6950fe96f6901f5282837fb7c74c53f8"],["/tags/架构设计/index.html","c0c34462994c7982d48d9131809a5044"],["/tags/生成器模式/index.html","89085d165f958ce0561a0fe6814b46ae"],["/tags/用户体验/index.html","168b2fc17bc3bf30a0ed0d312337c57a"],["/tags/自动化布局/index.html","7381cb3ea3b3f76a4d9a48800469b8b3"],["/tags/自定义UIView/index.html","10ee0162afb170762c0b3d81bcbc10ff"],["/tags/自定义转场/index.html","a24d7fa7839fef4c9ca39562b600a309"],["/tags/自适应布局/index.html","f957dabe3e845af7d72036a7fccd13df"],["/tags/设计模式/index.html","6d2b3a9908259dc2668cfce590e70fc9"],["/tags/设计模式/page/2/index.html","4f7642ed9c05b7185166b4ce583b95d5"],["/tags/设计模式/page/3/index.html","2a5741e9e56be7460493a718c144aece"],["/tags/迭代器设计模式/index.html","9e79b08aa9364b0ed461d2e330dcf0c5"],["/tags/适配器设计模式/index.html","2bbcc5caccd412f2b2444778ea8550ad"],["/tags/静态工厂方法/index.html","f79255095a35ae67703cb79fddb8f32e"],["/为iOS应用构建输入表单/index.html","601508164b38f54506a437f1c5ecd84c"],["/产品开发的幕后花絮/index.html","bc094be15abca8e10ddc53d9e3b52da1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","3a5e65dddb78f5ec002c9a2fb21283e6"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","e8846a068dd8468a0d94143e6e99fe62"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","05213653c8989ca8b131334bf8802af6"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b6772c389cc26206701370605a2ecd70"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b3237231c8ba097f9f5512c72268a4fc"],["/在Swift中创建自定义集合/index.html","074502eb818ae5b0551a030cc21e6f57"],["/在Swift中处理非可选选项/index.html","9da182e190c44cbfef35fb8bd2966d48"],["/在Swift中生成随机数/index.html","e298afc7000f75244e923fd67c9ff36a"],["/在Swift中重构单例模式用法/index.html","f92a26f5848c018c611fb8aeb214c7d2"],["/如何为VIPER编写服务？/index.html","5ff2555e528902c5e4553fa50b1fcc4a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","d0dd6596483f059dfca88b3edaa024ed"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","89b70c9a50c07b9da2fcefc7a119b546"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","894620f0b9dac2322447f84d40bab21b"],["/如何使用VIPER构建SwiftUI Apps？/index.html","68ca77be80ee8979a85c78138e9eddc1"],["/掌握VIPER架构/index.html","798e57d52732b4347bc8d9ed03fe0ad1"],["/揭秘 WordPress Hook 系统/index.html","28fc42ea7948056cac1e8e05c965d0d4"],["/比较工厂设计模式/index.html","b4003c41c8c32dbf92403e7c610aa26f"],["/深入了解Swift中的Grand Central Dispatch/index.html","e07f2073bfd2f410ad36f6f7c0e81465"],["/深入研究Swift框架/index.html","83f68e14689c9b987a87af0c44147dd9"],["/适用于iOS开发人员的VIPER最佳实践/index.html","dd6f64d34f71bad8e04de0db6f53831b"],["/选择Swift而不是Objective-C的5个理由/index.html","263e51e75d8537caf16eda4f16f3e1a4"]];
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
