/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","050a1d8642763f3cebd34360064688ee"],["/Advanced Swift系列(七): Strings/index.html","22c3072ef69d02ae46682744819b60cf"],["/Advanced Swift系列(三):  Optionals/index.html","616ba0e1c8a725f6ae2c230711332b96"],["/Advanced Swift系列(九): Protocols/index.html","83f7aaec7e07e68d5349a1a034bcc645"],["/Advanced Swift系列(二): Build-in Collections/index.html","47c3d55351c22212cf756761495ec7e9"],["/Advanced Swift系列(五): Structs and Classes/index.html","a2603f5b8a41c5ec7c5f6c5162cc2b6b"],["/Advanced Swift系列(八): Generics/index.html","0e7f3e3ae42ae313772d709740ca8c7d"],["/Advanced Swift系列(六):  Enums/index.html","8031316d10140eb360ec78dbc7c1be98"],["/Advanced Swift系列(十): Collection Protocols/index.html","cdc24361b03f25cbe600b22ba95dc19c"],["/Advanced Swift系列(十一): Error Handling/index.html","ac537ecf971f592f8322790dac441776"],["/Advanced Swift系列(四):  Functions/index.html","d917b5ba9e7d70e886d95528242ea9fe"],["/Functional Swift 初探/index.html","eb3cd7321337412a6705924c8b5db30a"],["/NSCODER和SWIFT初始化/index.html","df51f7155c7b5bde0debfafba50e50d3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","e4a8bc9473ee89b34615774b71421a6b"],["/Swift CompactMap vs flatMap：差异说明/index.html","cd64dab116acc636a23f1aa0a6b9ebf5"],["/Swift Grand Central Dispatch 深入实践/index.html","ed57b898ab309965f3981eaf3150e474"],["/Swift Lazy属性初始化/index.html","c20813d5eb1e81df32293d76941d7dd1"],["/Swift Promises 初体验/index.html","bfa12d4d691e7ee230a537caed23adab"],["/Swift Promises 探究/index.html","d2c20e9eddba63927b67bbd15efc9f60"],["/Swift UICollectionView使用指南/index.html","b369ffb517a66a6731252c3b643a4887"],["/Swift URLSession 和 Combine framework/index.html","8124677f013b9b2f1bfb70e71c74fa5a"],["/Swift 唯一识别的视图/index.html","5c55421ee6eb30e36945dd97cfe22203"],["/Swift 如何学习现代UIKit？/index.html","c341e8a496a043d9fcd0cf9837749aa4"],["/Swift 用 compactMap 替换 flatMap/index.html","d96fe121477f341daea35456a0ab09b2"],["/Swift 选择和播放视频/index.html","b69bef4248c060c8c1cc0563a4fb5bb1"],["/Swift中UIColor最佳实践/index.html","1f850aa384a0bbe519efeaa27a6a0117"],["/Swift中快速简单的工厂设计模式/index.html","d1fe4dabf7c85e20a1f38e53673a8981"],["/Swift中构造函数与静态工厂方法的比较/index.html","1b0c7b3ff88cd76451b5853e1c0fa4b9"],["/Swift中的UITableView教程/index.html","0db7bc8aba189de32ea2111bf43b11e0"],["/Swift中的懒加载模式/index.html","aa57cf375df66cb9478f0f50f05b9b94"],["/Swift中的模块和挂钩/index.html","89f0002ee719cfc8622ada3607deae46"],["/Swift使用布局锚点添加约束/index.html","709f9b66ec03987b67274d569efbf2d2"],["/Swift依赖注入设计模式/index.html","ad342311a15de270cdac5f0a0df6ddf2"],["/Swift关于Dependency Injection (DI)/index.html","02f110d06edf3c0c4541a48db837a63b"],["/Swift初始化模式/index.html","0c121ae42e6c1ead3b1c3b360567680a"],["/Swift单例模式/index.html","70138c585fd350e96560b177c3d360ed"],["/Swift原型设计模式/index.html","29f65eec0c36a1f5caa548cf74fbdd49"],["/Swift命令设计模式/index.html","e3c9e26ae25f6d37074586985a1b7d15"],["/Swift外观设计模式/index.html","5b3afc9b011cd44375ef41ff2057c836"],["/Swift委托设计模式/index.html","3a32161113322ccf80bb36fe7bb81dcf"],["/Swift对象池设计模式/index.html","a055c2cd3fc6290f3a01d07737d0b1d3"],["/Swift工厂方法设计模式/index.html","c265a0f10253e8cc6ec0ce0bc7c3b078"],["/Swift带闭包的懒惰初始化/index.html","9573e29486369ad31f9f0360857167b0"],["/Swift抽象工厂设计模式/index.html","8b9b559da9b2200978960e9cb1ac7a98"],["/Swift掌握iOS自动布局锚点/index.html","fba0219ad02c6d3c7c71d4204e3426ac"],["/Swift支持旋转的自适应单元格/index.html","12f31fbc5a47f46a710382e3a8f1b64d"],["/Swift枚举值/index.html","762071d927b19502d3d160bafe9424d2"],["/Swift生成器模式/index.html","581fc14c1dd897c7ce0de36a184f04e1"],["/Swift结合Xib文件自定义UIView/index.html","a2a6fe865d3a40ea5ed362ff46909377"],["/Swift编写的20个iOS库(一)/index.html","c7600a382ef1fb35732f5dc4990d685c"],["/Swift迭代器设计模式/index.html","75bc106d2f5fcaade1cc86b87466607b"],["/Swift适配器设计模式/index.html","84ba6afea023799c0643545670a3c623"],["/Swift静态工厂设计模式/index.html","3f4ac1435797eab106a1bd1eae4590e7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6e86c2bab80c32d41af33e538055d483"],["/UICollectionView data source and delegates/index.html","8231202053913e76ed1c6d070a5f1d77"],["/UIKit初始化模式/index.html","92a474e40f103fe6f41013f9e69ad078"],["/Ubuntu18.04替换国内源/index.html","e38be8f12b33697e5e9f1876048bd9d7"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","4ec50b1b82362a653b91213f4bccac12"],["/Xcode扩展/index.html","0ec11307d0c99d68f10029d2024f0b03"],["/about/index.html","070934fb96d397d69cf5dd98db0ca660"],["/appleOS的Networking示例/index.html","836cde8db568a54a1c22ef3380f4030e"],["/archives/2020/04/index.html","3447ea1a0cd7d4d945655e1b5337ed2e"],["/archives/2020/04/page/2/index.html","6934979b43b2ba616c7d132af997308b"],["/archives/2020/04/page/3/index.html","74d4c21ed77b3ab98f159c952b55272a"],["/archives/2020/04/page/4/index.html","1e29d72d2c33c704347727d0d0a47483"],["/archives/2020/04/page/5/index.html","dd615ce76762e1395dbde05b3f989ddb"],["/archives/2020/04/page/6/index.html","7aac57872c61c648082f92b580cbee7b"],["/archives/2020/04/page/7/index.html","20269983d67957e2b5c480fb548be210"],["/archives/2020/04/page/8/index.html","e977dc693a80fe758f15f61c4f743971"],["/archives/2020/05/index.html","36b421e9e3668e2da1844298b403c27f"],["/archives/2020/05/page/2/index.html","aaa12ff9d06b4cd7587333e13a74ca38"],["/archives/2020/index.html","13f5c504e43f4b594f4c46a91d621819"],["/archives/2020/page/10/index.html","19d9864688294b8fa3672add2119426c"],["/archives/2020/page/2/index.html","0d068beb4c2b3e6cfa4f4fd797cacdac"],["/archives/2020/page/3/index.html","20486ee7a4da333f13174e0161d911d8"],["/archives/2020/page/4/index.html","1c3cfe17ccd09e2337c1d79da76c5789"],["/archives/2020/page/5/index.html","7beee5a0c3206ddd3cafb15044d7de87"],["/archives/2020/page/6/index.html","465aa288a4712df0b551f190e2c94559"],["/archives/2020/page/7/index.html","806ba5916d360d80a993fa45d036d629"],["/archives/2020/page/8/index.html","dcbec824f82605f638647a5a7d05002f"],["/archives/2020/page/9/index.html","2fc83d1e7a93b32f8ea09b6847d374cc"],["/archives/index.html","87a3faaf26f05ba3225b1e7029cc7d3a"],["/archives/page/10/index.html","93dfaec9677eef865353a876f4750f44"],["/archives/page/2/index.html","bda23256eb1213f9b6b51b7b5f2afe57"],["/archives/page/3/index.html","a92a72bbd4f280ebe497534a5bdad1d7"],["/archives/page/4/index.html","bda4b31b7f5ebcd58b386a74b17bfcdf"],["/archives/page/5/index.html","484f8d53e41db557bf137b3c0fcdb6e4"],["/archives/page/6/index.html","1203a3f56a0a3213ecc3a3dfb9f9ff0e"],["/archives/page/7/index.html","4da5d4eb68823305bb611a78115a932e"],["/archives/page/8/index.html","8671b384dd258b4305e477ac0308b5db"],["/archives/page/9/index.html","c5487a82f386e62f14dbd74bac607785"],["/categories/Advanced-Swift/index.html","aa854c723fc2ef93402666dcb33beb0d"],["/categories/Advanced-Swift/page/2/index.html","da9971fd5c3c030cedf37c9acf49b038"],["/categories/Codable-protocol/index.html","1e39667a6e2f615c9148c232ac158dd9"],["/categories/Combine-framework/index.html","5ac0947cd076abc8939c8fe07cdaed80"],["/categories/Combine/index.html","2f715c2d6153f823231eedf5abdc4840"],["/categories/Grand-Central-Dispatch/index.html","49d04ac6287cc5a7f1ed8d6e58beda01"],["/categories/Hexo/index.html","e6ed67e498e3b8a650070f52fc06400a"],["/categories/Promises/index.html","3b87d8808d1323de3e7ab2af8e03aa84"],["/categories/Result-Type/index.html","c8d2546253b1bba311f99c814bf9f164"],["/categories/Server/index.html","5dccfd3d2b0740761f469c949a206f3a"],["/categories/Swift/index.html","6bd90e8f500acf55ce664fd20301a8f6"],["/categories/Swift/page/2/index.html","e9a80ee12c4dc19b26810622956ce236"],["/categories/Swift/page/3/index.html","1a5bff911cc65cc55475730b5c6764fe"],["/categories/Swift/page/4/index.html","aae461c2dfbefadb3d209fded30da72f"],["/categories/Swift/page/5/index.html","e3d244b6755905db60e0e556ee650aba"],["/categories/Swift/page/6/index.html","01b4cf11c2ae2108e98a5f19b138d473"],["/categories/Swift/page/7/index.html","91885d5dd01a4e81984c608dac69377b"],["/categories/Swift/page/8/index.html","70e5ed8120498a4a531be0c4bb4a03d6"],["/categories/Swift/page/9/index.html","2dd128843745e2b0a84697899b62127f"],["/categories/Swift5-2/index.html","86c424ceaed88db59882c4f98e9f18de"],["/categories/SwiftUI/index.html","ae533deaa6f6b404dfb83e0c3cc0548d"],["/categories/UICollectionView/index.html","ef9e0d4991a643ff3f7b39ec72635380"],["/categories/UIImagePickerController/index.html","21932b9263d4a33bc7745e837b2e0f44"],["/categories/UIKit/index.html","091ca6c8317a0854c92a54721b14e8a6"],["/categories/UIKit/page/2/index.html","89002e5a149dd10e415d35fcbe9fd22f"],["/categories/UIKit/page/3/index.html","14e235dde389afd93bb2f0cd8351f1ba"],["/categories/UIKit/page/4/index.html","a3f6f55e6cb31d54700e68608e6d23ae"],["/categories/UIKit/page/5/index.html","ccb6155a44db96a346e963d7c7acf273"],["/categories/UITableView/index.html","b7200faae40ad9f0c49a80bdad34dd1e"],["/categories/Ubuntu18-04/index.html","2ee0ff8d68d25d5468a5773fc209412e"],["/categories/Ubuntu软件源/index.html","352ed3ca39813f4b5fb8f20a5087914f"],["/categories/Uniquely-identifying-views/index.html","976071854d75fe477ab22e6bb227f28b"],["/categories/VIPER/index.html","c0e2d714e4eb6e59dec050ebdacd6b32"],["/categories/Vapor4-0/index.html","2c842726166a7b8b6cef6e1c4b7df550"],["/categories/Xcode/index.html","acad67a23f9289e1d075cc2b94cbdc7b"],["/categories/appleOS-Networking/index.html","f0ed5b6b95792635b3cf806af250977f"],["/categories/enum/index.html","a49be6c764fb3e782f268b94dca66136"],["/categories/iCloud/index.html","46cda1da05c0fa78ae7e8aa0463183e7"],["/categories/iOS/index.html","fea3e5133e509bdec8ee72bee4999eea"],["/categories/iOS/page/2/index.html","77daa486ce26ade2206829feb3491115"],["/categories/iOS/page/3/index.html","2a60a2d78750dde34b2357c4e37b2a99"],["/categories/iOS/page/4/index.html","6a114e959946ba6e8569f35dcf8b54bd"],["/categories/iOS/page/5/index.html","6350c8ba9abb70720207d494fa4a1dce"],["/categories/iOS/page/6/index.html","af139362a5fc15f630988a0b976357b6"],["/categories/iOS/page/7/index.html","927f6a6e0e9216ed3b88a300729cc074"],["/categories/iOS/page/8/index.html","ab63ce7b4a71e316acb605627496909e"],["/categories/iOS/page/9/index.html","653029a1be1da84baa80d9bbbc506f78"],["/categories/index.html","cb4ee6742b1707321779dc6bd4f12762"],["/categories/random/index.html","da0f627af352f04a70588b89a23c5c2d"],["/categories/三方类库/index.html","6533dd1f37145451c1821b29b480827e"],["/categories/函数式编程/index.html","9d54d8cd91d029bf8a9425df906611da"],["/categories/子类化样式/index.html","0dc1e69558c1df906100d9697364813f"],["/categories/架构设计/index.html","44d60d9b5898487cf75dd4ce36618261"],["/categories/用户体验/index.html","8b0adcc37bad877786b4e0d28220a9f6"],["/categories/设计模式/index.html","fdfba6907dbcc250912a2c0874a71f67"],["/categories/设计模式/page/2/index.html","e0e1b88c8a0d01c9ff306733d5875b9e"],["/categories/设计模式/page/3/index.html","d9e9462a2f3b0db1ff7f1fb0690650fd"],["/css/main.css","d10f1918748dbb303d9b5a751942e59c"],["/hello-world/index.html","550746d39963eecdb969eb85b2831620"],["/iOS VIPER架构深入实践/index.html","d843180e5125f8b40d9ca24e43c2e4a9"],["/iOS 自定义视图，输入表单和错误提示/index.html","b073d0fb98b59a16824585515f9131f0"],["/iOS如何使用iCloud文档？/index.html","2ef417e346206511b5fe6b921549e544"],["/iOS子类化样式/index.html","35b10174f79884ec36665690af9e42f2"],["/iOS自动化布局编程/index.html","c0d6add7b10394ec7e86ce7ec34ea944"],["/iOS自定义转场(By Swift)/index.html","5db3fe9e1a95dec45d6df9bc3ec8c84b"],["/iOS项目架构：使用VIPER/index.html","feaa53e9dad906e7922b8e653147515c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","97392ed287f3d4050fbceb349d889cb0"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","76bc7fd071c79bb6dab494e2d0b099de"],["/page/2/index.html","63939dcb596f3ee0316c27539b7fdac3"],["/page/3/index.html","74f6882ab71ae81f83350d66213a0feb"],["/page/4/index.html","ddf75961a9363f44af1c5f6d8c83aa56"],["/page/5/index.html","6f866e11f76e8ce1e67c5f4ce0940893"],["/page/6/index.html","59bfeb0cfd037bde454ebd5a52be93dd"],["/page/7/index.html","6424e4883ff819b8a7fbe6ec7f5be0b9"],["/page/8/index.html","fbd53b79ed83b6318755eb792be02290"],["/page/9/index.html","570f50896ebbf89b0e60629ab33577eb"],["/schedule/index.html","07850f03767405e00df86ee9c2d31fec"],["/sw-register.js","e00a928431b60ca75a300f8b99b94d7c"],["/tags/Advanced-Swift/index.html","883c94952e365869abb205b8f48e6dd7"],["/tags/Advanced-Swift/page/2/index.html","27fd3054c0a3ceb5a988d80077684fb9"],["/tags/Build-in-Collections/index.html","8ffcf9046bc7f08bf99db79beecf4552"],["/tags/Codable-protocol/index.html","6ef93019ba0d8913b70ba119998de576"],["/tags/Collection-Protocols/index.html","0bd67417d6813d4904f665b5fb5c3492"],["/tags/Collection/index.html","7066ad32573863a7e41e2bbee4b42323"],["/tags/Collections/index.html","8333748646457e7e6cc2ffee7a0a4b94"],["/tags/Combine-framework/index.html","4b606e02fb9762d82ab84e9864952ec7"],["/tags/Combine/index.html","af3d0f9cf39a86dc4c95fd60c506f066"],["/tags/Dependency-Injection/index.html","b2489bf4d164b34987623410aec267e7"],["/tags/Enums/index.html","f49614efb44b7e7447a11c2210d013a7"],["/tags/Error-Handling/index.html","a4f7763d3070476f251c77b0d38724bd"],["/tags/Functions/index.html","6aad01068bcb83fa4405714ecc89c4b4"],["/tags/Generics/index.html","9d9eda416de04660f30d2124753b2352"],["/tags/Grand-Central-Dispatch/index.html","4363dd1d95aad169b42f39c0da2ff49c"],["/tags/Modules-And-Hooks/index.html","a7c49569fd1d9f0399d0d6e193606f39"],["/tags/Optionals/index.html","2136afc3a1ff09d952a20fab914f5c50"],["/tags/Promises/index.html","fc8236cb8fc6df73cd9064c0cfeb8aef"],["/tags/Protocols/index.html","000de2492bf06a5f7cb09ea114ac4806"],["/tags/Result-Type/index.html","b4536780db1ada57d29210e3e6fe7551"],["/tags/Server/index.html","c470bf3d6b95e2789a8effdc7e9ab5c7"],["/tags/Strings/index.html","79ac828baf99d22e4a93c83fef057296"],["/tags/Structs-and-Classes/index.html","fd1cc9a3af51a4089a312c1501135b40"],["/tags/Swift-5-0/index.html","ceb9080fc07bfa112610f57179c511ab"],["/tags/Swift-5-0/page/2/index.html","27385ab00e4429e8326077d9f6acc309"],["/tags/Swift-Package-Manager/index.html","007453f7611a64be2bd551a840d89f19"],["/tags/Swift/index.html","e85ddd223dc83a9622a48bab3578a9d9"],["/tags/Swift/page/2/index.html","5050a0e34ea52833abf46b5a8bc39129"],["/tags/Swift/page/3/index.html","03002bbce61ee7a43c0d3eef69bc71c6"],["/tags/Swift/page/4/index.html","84244580c03405dafa1abf95bf60c7a2"],["/tags/Swift/page/5/index.html","1aa599bc03cb9b5b82b0898879ecc090"],["/tags/Swift/page/6/index.html","01aae8c316c9e49367a8524ec892bb8f"],["/tags/Swift/page/7/index.html","3d6ee5889922b65219287385a6bdd424"],["/tags/Swift/page/8/index.html","4ede6e63d53086016aca53b5d87b9bf8"],["/tags/Swift/page/9/index.html","6a08a782f5601d7842af423b9a059a9e"],["/tags/SwiftUI/index.html","a52a66354586fc5b93816f7f3a054082"],["/tags/UICollectionView/index.html","4ba1fac0daaf0fce1b1865b06fde7652"],["/tags/UIColor/index.html","2abacff23f7278851eef1716366348a9"],["/tags/UIImagePickerController/index.html","56e22be7ed43033484507042f1f7d6ad"],["/tags/UIKit/index.html","ede57cfc0e625f04ff7d5c40b3897a99"],["/tags/UIKit/page/2/index.html","92d0f7a09c54f99ccc0392e8a2895524"],["/tags/UIKit/page/3/index.html","513d3b37271b76617d643dae29dcad7d"],["/tags/UIKit/page/4/index.html","61f2a183b40b47a1b574beeeec2b4d30"],["/tags/UIKit/page/5/index.html","f41b9045130ebe0108de19684ebd58f8"],["/tags/UITableView/index.html","8c9364274e89db078fb14d428fac3627"],["/tags/Ubuntu/index.html","8486e5b8ce3592de3e48670ae70d84b2"],["/tags/Uniquely-identifying-views/index.html","26095e7cf6279408d269c636d46af644"],["/tags/VIPER/index.html","1f19762524530a70dfeea9600f174091"],["/tags/VMware/index.html","993555b06a1fa606dd61706467d5df78"],["/tags/Xcode/index.html","b530f6ede6311a11f6eaf31e88c8285f"],["/tags/appleOS-Networking/index.html","fe9dc815a98336e3915c8a3bc3558fcb"],["/tags/enum/index.html","f62fba4cf9c2da5f19ec966e49329344"],["/tags/iCloud/index.html","3d9586ad4c6222daeb4c1db2177c3776"],["/tags/iOS/index.html","4ad1a06e56bf9c7f322dd98ca9df9785"],["/tags/iOS/page/2/index.html","5d3ff3c272af322510bd53e49409ceae"],["/tags/iOS/page/3/index.html","327ddd70d514bf37dd91770765a12cbe"],["/tags/iOS/page/4/index.html","38cd489eff59907dee3f7fdcc5cdb0e1"],["/tags/iOS/page/5/index.html","0d67cc963ceb93a82a2ad437e13355a2"],["/tags/iOS/page/6/index.html","dfeaf724d04152774a35636fc9120a1a"],["/tags/iOS/page/7/index.html","7879199c4c574c3fdf23f720ef59f90a"],["/tags/iOS/page/8/index.html","edad044016f09219060e227078792c66"],["/tags/iOS/page/9/index.html","9aa5c66b2dca23ae88d25c1978266270"],["/tags/index.html","ee50ac6e6a7f3161d6bbab745a6342db"],["/tags/non-optional/index.html","953e626eea57b383047e07f26a91ad90"],["/tags/random/index.html","a0c31b1331337b6f4b063984ccca7094"],["/tags/transition/index.html","91a1f9f109d1ceba75ea4bd6a7a1631d"],["/tags/三方类库/index.html","73549a4035b9c34c9257523b94001f36"],["/tags/依赖注入设计模式/index.html","05cc29d6fa49656e2447aa716d5ae920"],["/tags/函数式编程/index.html","91e192684308be88ac27a6df987f8324"],["/tags/初始化模式/index.html","c61f136b4fa641791ee9e131a36fe618"],["/tags/单例模式/index.html","108a1763b6a3f0869450cf7b789a6a05"],["/tags/原型设计模式/index.html","6771154239626d4c8d738d96fa29e6f2"],["/tags/命令设计模式/index.html","e64f3d560cbe6be8a6cd9fb4cc4401ea"],["/tags/外观设计模式/index.html","fb969a6c788b4b368d2483c47fe0cf44"],["/tags/委托设计模式/index.html","aebbfbe506c3a8eff49b4fa5ab9e8301"],["/tags/子类化样式/index.html","6320c15be11e57851e6ff96af46de750"],["/tags/对象池设计模式/index.html","5f1fcd7cc9c92b638a43cc348a1e4606"],["/tags/工厂方法设计模式/index.html","af93340858cf1cc5526fd8f29e9ac664"],["/tags/工厂模式/index.html","18837952e678e21de95e01e62e32cbff"],["/tags/工厂设计模式/index.html","08656c2ba7e68658b365856354e9b2ad"],["/tags/懒加载模式/index.html","223c20b22c30cf6d778df10de0399a73"],["/tags/抽象工厂设计模式/index.html","84444c301fc283444b2209d8570489a9"],["/tags/构造函数/index.html","22441e50edf2906be258f0cfb7a366d2"],["/tags/架构设计/index.html","c8e1de18e36f388e978528a58163c28e"],["/tags/生成器模式/index.html","05082b305fed993c65903a8c35a6ea51"],["/tags/用户体验/index.html","d5568f925dfed137da8900aae152eae1"],["/tags/自动化布局/index.html","0d2192a6f9d52226336826599566d668"],["/tags/自定义UIView/index.html","56aec58e52bac460a5f585db7769aa5f"],["/tags/自定义转场/index.html","8c5ef17eb990e85c88773280e95e7b15"],["/tags/自适应布局/index.html","65e3e4f3e02d7bb2a63f61f8f13edf95"],["/tags/设计模式/index.html","3dbcbe8e4614dd145401ba730e084c4a"],["/tags/设计模式/page/2/index.html","c157ead2a15e76a0c02d275f85ead750"],["/tags/设计模式/page/3/index.html","650a4718c4306b920f6b9fd4017132ba"],["/tags/迭代器设计模式/index.html","035ecc3ba1141cceea4a2c8928ce9996"],["/tags/适配器设计模式/index.html","c60a01d91df555aa019ac816f6e22a70"],["/tags/静态工厂方法/index.html","0fb50bfbf0e1e7a2a98d6f7db60bcbe9"],["/为iOS应用构建输入表单/index.html","f57a681860b62f3c5f5dc877e8230d5a"],["/产品开发的幕后花絮/index.html","c3e60aced74d5a69ad89e4bbd0c994dd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bdb5df01fc83b42fc21e30c1e8ec1461"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","cec2a419f17d0d57b0f173bba4005cb5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ac68bdf0ff42d0d796c3899c5281df14"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5fbdc8610a0ab75d3c692bad77391cfd"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b8d7e5873e1b51ca87689dfd542b5d06"],["/在Swift中创建自定义集合/index.html","e094eaa0a50390d31d050562fd7cbf99"],["/在Swift中处理非可选选项/index.html","f8cdbb95b6d3b18d3d707d50cdb5363e"],["/在Swift中生成随机数/index.html","de567256036881407f6bb8b495d06b7c"],["/在Swift中重构单例模式用法/index.html","a140cafd2d692b6217c41380066a5fd8"],["/如何为VIPER编写服务？/index.html","7d313e8427203aa60469f2d4e3bbb067"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","90a12cf9e51eb215efc3af53b5f3df58"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c0dc3c2c475e4f03439393e675a332a9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c32c18c8455e238cc85ec5d45984ad07"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bd6f0187fece4239d0428fa12406921f"],["/掌握VIPER架构/index.html","eb83b412c472c7a2d9aaf22b276b3c5f"],["/揭秘 WordPress Hook 系统/index.html","621b8f02a28905123a59f7f94e8cf614"],["/比较工厂设计模式/index.html","9615a6addf94b319e7d3edc91df64d0f"],["/深入了解Swift中的Grand Central Dispatch/index.html","1ccac4170a575b0479deaee35db847e7"],["/深入研究Swift框架/index.html","d6005e073f1a0b98c0dd79f4a41a9738"],["/适用于iOS开发人员的VIPER最佳实践/index.html","d3885b56697f83fd99f35ce301749d4a"],["/选择Swift而不是Objective-C的5个理由/index.html","e3cdc44c2fb7dd84f62491443421507f"]];
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
