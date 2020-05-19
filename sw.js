/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","4d4cca7be486ec9d8fe0100bdcc92371"],["/2020年iOS面试题总结(二)/index.html","c6b265b8bb25d6a5fa8875ca981a1afc"],["/Advanced Swift系列(一): Swift 简介/index.html","d2494e1cba0486add35bdad4d5b37740"],["/Advanced Swift系列(七): Strings/index.html","ecc1594aaf2e4ccd9d4b5ef303634586"],["/Advanced Swift系列(三):  Optionals/index.html","c3a4c2d5a27d08bb07f0b6fd3fe26d1d"],["/Advanced Swift系列(九): Protocols/index.html","ebb50d9e4e067cdec62e61eb3a1f8752"],["/Advanced Swift系列(二): Build-in Collections/index.html","239a1be90f057def4c381eeaff8b7195"],["/Advanced Swift系列(五): Structs and Classes/index.html","b4cbea5937faa1081e271deed84bff14"],["/Advanced Swift系列(八): Generics/index.html","d3427242684efd2060d6061194e28a95"],["/Advanced Swift系列(六):  Enums/index.html","c98e5139673b93c46ed8f6aa617da0b1"],["/Advanced Swift系列(十): Collection Protocols/index.html","a7dae1be95ef8f1b88ee39728b6a1d38"],["/Advanced Swift系列(十一): Error Handling/index.html","01cac7477138790ddcbbece35c80d2e6"],["/Advanced Swift系列(十三): Interoperability/index.html","666c90c25a6f8a55e0a8e3aac5326f2d"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","76b70cf9a0d9bccd9b6c6129ec7ef635"],["/Advanced Swift系列(四):  Functions/index.html","be9caea08904949279e9a58bf10cc50d"],["/App Architecture系列(一):  简介/index.html","57eb6dbc293e176ac226466eef60af79"],["/Functional Swift 初探/index.html","d098cd28cc63ec27ba4f15f8a5e00846"],["/NSCODER和SWIFT初始化/index.html","c0b18496f8d48d746f028e959b0cf824"],["/Swift 5使用UIImagePickerController拾取图像/index.html","13eac2a0bd06a5a49b7c0dbae3012fe6"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3c3f2f9d75c4ffdcec36fe0f16797ee7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","bc5493fdd73b6d82460103b0987c8818"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","eecc46d37e27c96daaed237f6a4a5acc"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","1936bd41ff0390574e34bae9f97522fa"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","2a0ccef46a5d534d080449d3140afefb"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","dfa979b93fcca53a50a3863bd78a61be"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","262b20e6330f6d2bc2d1cf25d7c9ccaf"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","577e7af04670abe69f27e87489063484"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","ed153486a4e4839dec652cf1c87e7b39"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","db5a12afc287dc7121cf704fbe0972b4"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","8b3ff734c889eb98b925ffcb068ca40b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6c133e4d1b542fe8a1b8844858b642de"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","506ebfe23ac133b114b9bef79db68cb8"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","87fea2f7fb9367ee6936bde8d00fd176"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","6f0e0f2b16d63303f990dead2f2b420c"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","f180f2a5cd0f318bec9f7e935330b36b"],["/Swift CompactMap vs flatMap：差异说明/index.html","070ca686e0f4fba4f7fa5a6917f53e88"],["/Swift Grand Central Dispatch 深入实践/index.html","2f47d4f96f65f3112d907f36597e8e1c"],["/Swift Lazy属性初始化/index.html","3da8160e75637bc646a4f07d268dc6f7"],["/Swift Promises 初体验/index.html","b670c5ab84c248d0478b574452ddc163"],["/Swift Promises 探究/index.html","d2fd8fed7dc32fbd4290b165d54d7db9"],["/Swift UICollectionView使用指南/index.html","19d6e25816b76dd2ef6fd462e6c4991d"],["/Swift URLSession 和 Combine framework/index.html","e970e5a6ad277e184e7e563af679e45c"],["/Swift 唯一识别的视图/index.html","173f76ddeaf9d5e75ff5b78f201c9ede"],["/Swift 如何学习现代UIKit？/index.html","55fb0404d7cfcfbb84129d3d35a8525f"],["/Swift 用 compactMap 替换 flatMap/index.html","98b0f4728072404510e5b6d8e9cded8e"],["/Swift 选择和播放视频/index.html","a439dc5c7359eb45cf81c345a0295bfa"],["/Swift中UIColor最佳实践/index.html","cd04a1656a3b66196c42e7e38f827fd9"],["/Swift中快速简单的工厂设计模式/index.html","3e1fb5eaec7dedcb97b23c99c8c2c295"],["/Swift中构造函数与静态工厂方法的比较/index.html","b0470a314857fe3ec4861f9eadfd2335"],["/Swift中的UITableView教程/index.html","ffb0cbe4f9f3ae60576a7d3bb801558b"],["/Swift中的懒加载模式/index.html","0be5981f6b0b2e7d83aa80f9f6b231ea"],["/Swift中的模块和挂钩/index.html","f7d123d467ac3d5f0db92d8aa6623442"],["/Swift使用布局锚点添加约束/index.html","ee57d33954f200887292d92d86be252d"],["/Swift依赖注入设计模式/index.html","903815700d72d56753bbf7eecee8ea19"],["/Swift关于Dependency Injection (DI)/index.html","7c634e4d308dfa3e1de0009d83a06160"],["/Swift初始化模式/index.html","048b839a4acb6f228548faf9f85f0b50"],["/Swift单例模式/index.html","a503037c38c1367fa0e35898c38e40d9"],["/Swift原型设计模式/index.html","df1f69f2cacc044e609c82cfbfdaf62e"],["/Swift命令设计模式/index.html","e9cc548faccb19b9c50696c8e4816662"],["/Swift外观设计模式/index.html","bf492dab4346248fe27da9c9e6466adf"],["/Swift委托设计模式/index.html","526a1821a317c05bf7bf0f5b286bf922"],["/Swift对象池设计模式/index.html","1eb4866706212297a2e6447579856729"],["/Swift工厂方法设计模式/index.html","4c0e6fdd10d646a1183f04345385d032"],["/Swift带闭包的懒惰初始化/index.html","9d2165f72b7f210038c8a1a5145fab9e"],["/Swift抽象工厂设计模式/index.html","db3ca49296daf97d2e6741ebc10ea00d"],["/Swift掌握iOS自动布局锚点/index.html","96818d34c7f55b4d075c32ed1f126763"],["/Swift支持旋转的自适应单元格/index.html","d387b96614a821eb9293165ddc535b42"],["/Swift枚举值/index.html","38ca21ee32f996b9d47620833fb0c359"],["/Swift生成器模式/index.html","bbec1b9aeb9923995a01856aebf36a8e"],["/Swift结合Xib文件自定义UIView/index.html","04dc3c8c1b19072e97abd6875c0d7e2f"],["/Swift编写的20个iOS库(一)/index.html","a462f1b907756c27450e60f3c1d71bc6"],["/Swift迭代器设计模式/index.html","f645243f71d95182d761fb06e8c095fc"],["/Swift适配器设计模式/index.html","583bc1e8eaaff567218ad500d015ded4"],["/Swift静态工厂设计模式/index.html","2e1c1596af1ad9bdf5404bf647a0cac1"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3531c55537a3a8c3114dee29dbfd16ec"],["/UICollectionView data source and delegates/index.html","d5656beea77038d2faefbf20f2c811a9"],["/UIKit初始化模式/index.html","3473579013899bf19282ad5b40f31123"],["/Ubuntu18.04替换国内源/index.html","2fa352ea8204fdb43f9232db42247c19"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","b512487a3c8b7e7562074f88a5c98b40"],["/Xcode扩展/index.html","9509a0a6a1891916c88ba5dd96e97df9"],["/about/index.html","9b4b38ce68ee1a39b60a0f073711e73e"],["/appleOS的Networking示例/index.html","e0ab3e4690a17ebd38de7f0891202b60"],["/archives/2020/04/index.html","829722632ba7b172279e540e8879026a"],["/archives/2020/04/page/2/index.html","ce1c472c3b4fc7907b853c8182479de8"],["/archives/2020/04/page/3/index.html","1d235423b66756b309a562bcd79567f3"],["/archives/2020/04/page/4/index.html","ee08b1c2e85831a3809d6592b3b1f911"],["/archives/2020/04/page/5/index.html","fdb4fa8472ef629a3dbb0d18a90fd7b7"],["/archives/2020/04/page/6/index.html","2a980e9815c2099662a6cd30ec267ca5"],["/archives/2020/04/page/7/index.html","a1ec4e8b61520bb526cccb475f2b4c2f"],["/archives/2020/04/page/8/index.html","fb1f7598c91e3f22903d8a9f35860e32"],["/archives/2020/05/index.html","9f603b345c514687d1197e4fd31faa47"],["/archives/2020/05/page/2/index.html","3754c3492a248f8d95ed1dc0f24bde58"],["/archives/2020/05/page/3/index.html","c6b2e5243c16991fa4f1f77971cd38e1"],["/archives/2020/05/page/4/index.html","99759b6e2b9820561ff6f4b8205df4fc"],["/archives/2020/index.html","d7a0fe66a001b7e5f85daf01e606b872"],["/archives/2020/page/10/index.html","b43591472b3389f14dbc3467dffdb9a7"],["/archives/2020/page/11/index.html","b2f28b1251ce37fa929692e4eb1e6a5d"],["/archives/2020/page/12/index.html","eaa7d48e98f6e9fab8e3b2027b03a7bf"],["/archives/2020/page/2/index.html","678693d09a4a85a593af73e38f432d50"],["/archives/2020/page/3/index.html","5c67031d1ce7e16d2fdcb59831d02f63"],["/archives/2020/page/4/index.html","320e759fa7336e969b4dd8957ea2b725"],["/archives/2020/page/5/index.html","6a31ecd38778fc18881d9a1b839ac1ba"],["/archives/2020/page/6/index.html","60d4652d628e2206a2bd117d6d34d556"],["/archives/2020/page/7/index.html","6bb4bca54f704ffda709f95f40d1acfb"],["/archives/2020/page/8/index.html","ad8abe326fa4b298284b84e3beaee3d5"],["/archives/2020/page/9/index.html","ca50b3c802019f884f61eec3d129b0ab"],["/archives/index.html","fa55f84c3c5e5c1c5698b4d6bd6beba7"],["/archives/page/10/index.html","390d941ab0012dce512edea6bde0c0b5"],["/archives/page/11/index.html","9a31d5b501b3cc80f4c0bd3a6ea3fed4"],["/archives/page/12/index.html","4ca56c6583ce386083208252afb8b468"],["/archives/page/2/index.html","44469613ebd07d8d9adfcffdb3011d1e"],["/archives/page/3/index.html","5bdb776daa0b3c05a7af65c6a06b98cc"],["/archives/page/4/index.html","cf1227f8bc1a29d8c022502765fe026d"],["/archives/page/5/index.html","175153da1a60295e9fe12a0ddf0d0d57"],["/archives/page/6/index.html","7bdba015fd1336d1d9b28e018914b6ff"],["/archives/page/7/index.html","38b033feb81b55415852d9a77c7c5ef5"],["/archives/page/8/index.html","c20166748c56bcc1d039909331327980"],["/archives/page/9/index.html","d0ff186af6d70bd32ac399d7cb5380f2"],["/categories/Advanced-Swift/index.html","dbb30414a719c4a2faf97e135f7785e4"],["/categories/Advanced-Swift/page/2/index.html","fd578e6b08d8807be046aa8c318828c9"],["/categories/App-Architecture/index.html","7711b42054f90deff7ad08d7fccadf42"],["/categories/Codable-protocol/index.html","3401f6c07ccecafcccadfc4795ba0d93"],["/categories/Combine-framework/index.html","dee8161e91feb56ee25ba28ed3dc7f52"],["/categories/Combine/index.html","f47e8e6cf1a409fd58e0e6eaa889aa0c"],["/categories/Grand-Central-Dispatch/index.html","16c2956b7c0c61970d4ca613561822e0"],["/categories/Hexo/index.html","6925124588d8589655af87b0c50fddc6"],["/categories/Promises/index.html","1618345093dc88936f72e86a2c2de6f0"],["/categories/Result-Type/index.html","aef77aef2a968836a1911773af39e591"],["/categories/Server/index.html","5a97047669b816362242c293215f3d47"],["/categories/Swift-Apprentice/index.html","251e47e5f529e08e7c9fa8c500a6a6d9"],["/categories/Swift-Apprentice/page/2/index.html","3a6aaf3d7d1d7a658565f4516fce00a8"],["/categories/Swift/index.html","94fc25a33af877c3e26fe88908efeb24"],["/categories/Swift/page/10/index.html","16a104e634ca2124beba258b046268bf"],["/categories/Swift/page/11/index.html","d813e160cd3f8fa6eeb5fc02507422c4"],["/categories/Swift/page/2/index.html","d041cbf6413c7a38a054e739ce61b732"],["/categories/Swift/page/3/index.html","6663bb6cdb0b02af1ab0b831e2de728f"],["/categories/Swift/page/4/index.html","56438b414d87a49ad368ea1de5f93e70"],["/categories/Swift/page/5/index.html","07873657b79dfc2cda2960be4a8ff6a2"],["/categories/Swift/page/6/index.html","446368a30fd5e53adfc8334ea488c9e4"],["/categories/Swift/page/7/index.html","f84430e914e543d3e4451dd85d79dbf5"],["/categories/Swift/page/8/index.html","c702866939b44a3b55ff24c2ada27fbc"],["/categories/Swift/page/9/index.html","4541375099daa0acf5f4ea34e5673aa0"],["/categories/Swift5-2/index.html","d01ec48bf924c14032216e93be07b4a6"],["/categories/SwiftUI/index.html","0cd65ab7249d4b7872b69df41194fada"],["/categories/UICollectionView/index.html","3aa2bea662737954766273a1ee795543"],["/categories/UIImagePickerController/index.html","756d1e1bdaf73085bc42bf08957db9c1"],["/categories/UIKit/index.html","6ca6f04ff076fac1932978d718aa2488"],["/categories/UIKit/page/2/index.html","b3a3aaedaec521b4034002da55eea626"],["/categories/UIKit/page/3/index.html","b0f07549aba9ed9484a2692bcd473e66"],["/categories/UIKit/page/4/index.html","f60b4b5a9cee8ad69ecfa1096d7eea69"],["/categories/UIKit/page/5/index.html","e6109331a618702fda0e6dd518e832f7"],["/categories/UITableView/index.html","50a0fca9a815aaa0f49bef1a05a9e84e"],["/categories/Ubuntu18-04/index.html","a9f01f6678a58971d635302f08003b22"],["/categories/Ubuntu软件源/index.html","feab6a19d311e81ffb519b205360277a"],["/categories/Uniquely-identifying-views/index.html","cfcf65d711e82f982dcd2cbf2b3a7096"],["/categories/VIPER/index.html","caab9abbffc6e58f4ff7d393b4917083"],["/categories/Vapor4-0/index.html","30500b737645e05ad4da33670fe573b8"],["/categories/Xcode/index.html","7304904710478aea772b18948ff4f58c"],["/categories/appleOS-Networking/index.html","ff74510000847319cbde00cd6c8774b2"],["/categories/enum/index.html","3a60fca942e76ca683c8fbe2b1b5804c"],["/categories/iCloud/index.html","d8409c75c1ccafb89c9b74c373ac12f4"],["/categories/iOS/index.html","90279a9611132f85c0ffdbf9a9799407"],["/categories/iOS/page/10/index.html","f1ca3bb7505910928b071b2f794ae771"],["/categories/iOS/page/11/index.html","cc71becb401a9e5dee11af9272afc925"],["/categories/iOS/page/2/index.html","c568deba83b817ecdfeac8bc2ba917a4"],["/categories/iOS/page/3/index.html","49db6e8a90a075081b6b03e8708fb6e6"],["/categories/iOS/page/4/index.html","4aa084d2ad3254502d686349f1da25ae"],["/categories/iOS/page/5/index.html","211d28a4678d18ce3aa5cce1a60b7a06"],["/categories/iOS/page/6/index.html","ab12d5d1166e266acb7d60db547f3cab"],["/categories/iOS/page/7/index.html","a13f63b780420106718a7031cb1c77df"],["/categories/iOS/page/8/index.html","17bf33100238799e226404c0b5334986"],["/categories/iOS/page/9/index.html","3bf7b16d99fe97620d4f363a6e43bade"],["/categories/iOS面试题/index.html","4c746677fb9e04a4dfa07804e6357afe"],["/categories/index.html","c1b6e9a019d8cef3c9c8687134eb37eb"],["/categories/random/index.html","1d53b4770d1ee2beb9359d070ddbae90"],["/categories/三方类库/index.html","0274e4b084085d8a91cf449aec681d2f"],["/categories/函数式编程/index.html","ef09b5c6e5d2bd2f06532947f4af7c07"],["/categories/子类化样式/index.html","fec611ee3df9829232d74ce92d932c0c"],["/categories/架构设计/index.html","13df5dcf6428ded02ae6f0888b86fd35"],["/categories/用户体验/index.html","86df50f6213882ccb51edffc8409a7dd"],["/categories/设计模式/index.html","e4db841e121b776807515b060df9726a"],["/categories/设计模式/page/2/index.html","6a49ef93355932986f8b64a8bb331aac"],["/categories/设计模式/page/3/index.html","563385d37856394b215d8013c8d16e33"],["/css/main.css","fdea5c79d8d46e16ea747214f1ee6f91"],["/hello-world/index.html","e172646a86446d6e8ad07c3398f28bcf"],["/iOS VIPER架构深入实践/index.html","3a7761cc3ed06ef9486e9b3a57570d07"],["/iOS 自定义视图，输入表单和错误提示/index.html","5d3a59d3f945bddadb2f87476dc0ba1f"],["/iOS如何使用iCloud文档？/index.html","36f58ca52b3555caa4f807569ce8c7fe"],["/iOS子类化样式/index.html","ca60a035e89e771f341e3c209f10d4a4"],["/iOS自动化布局编程/index.html","faa8643fdf1fce3720c1b90b3f453166"],["/iOS自定义转场(By Swift)/index.html","13d6d432df12c2934aed8416cfaaaed4"],["/iOS项目架构：使用VIPER/index.html","ff33be3baf60907e0180b9364fde1d7b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a82d91ab5d773457a6bb7fbb66ea93ca"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","e06b316f3a132cb8f4d9d07434205bb4"],["/page/11/index.html","8a8212e372bbb22f10eaf60b12a46091"],["/page/12/index.html","adae9860e5464b64783cf221e846097f"],["/page/2/index.html","9f1cadccd335c449c2ecaa4df1f3b831"],["/page/3/index.html","9d7d16e275c6c5f39936250cb74907e8"],["/page/4/index.html","04a35d5af615a771e6579bde953cf75f"],["/page/5/index.html","28c5caa88cb5706fda9ca463abe2f657"],["/page/6/index.html","c9db9c8921346058bdb607afd4a15d5d"],["/page/7/index.html","91a06d20fb1f205eec7808074a8dbe32"],["/page/8/index.html","4d5c550305e18a6c8681a8c473b3444a"],["/page/9/index.html","78d5079e8c98700d94abf6188d339423"],["/schedule/index.html","f9a70e6b5e2e3196c08a41782db0042a"],["/sw-register.js","497ba0cf8658f94ba06e6fdcc223fbec"],["/tags/Advanced-Classes/index.html","3c1ff7e64035165b9f8951310edc5b73"],["/tags/Advanced-Swift/index.html","e148cef7b8a477eef0a82a86ae2ee53e"],["/tags/Advanced-Swift/page/2/index.html","63aa27545def492a8da779a83b30cf4d"],["/tags/App-Architecture/index.html","32d124893bdfdf9a3f82e2fb96d4f7f7"],["/tags/Arrays-Dictionaries-Sets/index.html","042267b70e47426bdcb1d8621e5e531b"],["/tags/Build-in-Collections/index.html","2ee5bdb639169e45b5936c962ae7a6c8"],["/tags/Building-Your-Own-Types/index.html","5763702c79460a11911f4957d10c0fea"],["/tags/Classes/index.html","fb852d9ad57710c85244d4b6a78754e2"],["/tags/Codable-protocol/index.html","1b24e83c6e14161743c6698dbf77f089"],["/tags/Collection-Iteration-with-Closures/index.html","9bb0a2127172c2b82a2b805e9185234f"],["/tags/Collection-Protocols/index.html","ac6ef7da50cd0af4fc6e244420f265cd"],["/tags/Collection-Types/index.html","6361a57b9f5270f5ffb4de5022cbd3a9"],["/tags/Collection/index.html","cd0574a6c400ceef7ea9f26215ff258e"],["/tags/Collections/index.html","9f663434eb6a060f387b8a7a8687685c"],["/tags/Combine-framework/index.html","eb8546bce3b6a1c5f9fe875cc7e8bc77"],["/tags/Combine/index.html","f3a9774f6cc3ecaa5e9dc155c0169dfb"],["/tags/Dependency-Injection/index.html","0c9ce2d4a65a89d57725ecc348dbe73b"],["/tags/Encoding-and-Decoding/index.html","ba88806915a0f7846506de552d560038"],["/tags/Enums/index.html","322d5b457299df34657b08aac9813a20"],["/tags/Error-Handling/index.html","3d328cd4f58096f2ee46dfcb0b19d992"],["/tags/Functions/index.html","f94b89173a50e609f17004787596861d"],["/tags/Generics/index.html","001fde9094c6d3202f57a5e482f60e26"],["/tags/Grand-Central-Dispatch/index.html","4e42160a8e1fe2ae4a2dee704cb67bb9"],["/tags/Interoperability/index.html","413847498c21fb3fc83af5acefa946cc"],["/tags/Introduction/index.html","50fbc9d51caa8ee8e868b0f993549b44"],["/tags/Methods/index.html","1a65d6f3477f69a0cb26e1560f031c1d"],["/tags/Modules-And-Hooks/index.html","4f90ab6a9bc358922a8a3435d4f89e2f"],["/tags/Optionals/index.html","7ea1da3cf02b680cfd185b3fd962af1d"],["/tags/Promises/index.html","cec2350884c4132b43e8a371f383ee7f"],["/tags/Properties/index.html","2b13bae6803fc25d87040b8d088e3268"],["/tags/Protocols/index.html","0c5071cc64f12f141e8d434b8743d043"],["/tags/Result-Type/index.html","e5e0d17be3584fbea296312a993540e5"],["/tags/Server/index.html","8fd6729428b849af3236987408402036"],["/tags/Strings/index.html","e2325c8f4fe21e908da20f294d63dbb2"],["/tags/Structs-and-Classes/index.html","87efced9a1ee5ed303c472cc24f16397"],["/tags/Structures/index.html","d98ab56fc6f0c0e1d724ccf2cfdcf63c"],["/tags/Swift-5-0/index.html","231d2198e04c8e4ccc1a1e2d49dd05b2"],["/tags/Swift-5-0/page/2/index.html","a075082a6a04b823365dc3b398451f4b"],["/tags/Swift-5-0/page/3/index.html","672594d1d51c210cd99feb2a31f5db44"],["/tags/Swift-Apprentice/index.html","3e53a8b5d8ccc43cd2bdc945718683bc"],["/tags/Swift-Apprentice/page/2/index.html","51cd1fcd88dcb08b632def6315b07742"],["/tags/Swift-Package-Manager/index.html","19fdfe93dcc5a60dc7d33ede73df8c38"],["/tags/Swift/index.html","3ccee8fbcda88c54fe5afa8d56f8c265"],["/tags/Swift/page/10/index.html","214ba7340b487a6f01ec6b1f7fc293c8"],["/tags/Swift/page/11/index.html","c61eb9250e6d248294a6d40dfe48a948"],["/tags/Swift/page/2/index.html","45ebd3564be9cca0726b199cead1bc4e"],["/tags/Swift/page/3/index.html","b99f244175f656dac937305a56abe788"],["/tags/Swift/page/4/index.html","9f51e4913f7955a43643c1865d6226e5"],["/tags/Swift/page/5/index.html","729ff50bd887db9d83f805f6913bd78e"],["/tags/Swift/page/6/index.html","f324f5d579d33ec8d3d54de44ab29210"],["/tags/Swift/page/7/index.html","63d38e8cea700789845b83bd93496551"],["/tags/Swift/page/8/index.html","93ffc7eded67781011e26876288c7e64"],["/tags/Swift/page/9/index.html","57ae484268b86038d80aa036de565cdd"],["/tags/SwiftUI/index.html","ad78267bdb857a23d7676ef4706da6be"],["/tags/UICollectionView/index.html","1e012133e0cf2ce49d2c2ede6e434481"],["/tags/UIColor/index.html","40d7dcf1af8b0c5da746bfd9541f9a8e"],["/tags/UIImagePickerController/index.html","3b09034182fbb2231aea40c268d48409"],["/tags/UIKit/index.html","57be3996018b46b4dcf2f34db318171b"],["/tags/UIKit/page/2/index.html","c36aa6b1ee039c6dc071b11c64e0ae4b"],["/tags/UIKit/page/3/index.html","d5ff3417468eaa676b0db794d3566e7d"],["/tags/UIKit/page/4/index.html","783e0e523c9e0fcd84192aed9ee904dd"],["/tags/UIKit/page/5/index.html","38472984c585a85e8248d483b2a9cb6c"],["/tags/UITableView/index.html","b4c3417e510c63aadc4ff8f9b916c97b"],["/tags/Ubuntu/index.html","1d5d747acd977cf3bc33ad9cc2852153"],["/tags/Uniquely-identifying-views/index.html","18801781c090d1accea6609bd3ba2ea8"],["/tags/VIPER/index.html","43cf8868edccb79f2b9ed01c4e7b2e72"],["/tags/VMware/index.html","7a387cf5da09e52057cd28bcb0b3f620"],["/tags/Xcode/index.html","ae4ee08673ab94dc9d722c2a56aa86b0"],["/tags/appleOS-Networking/index.html","6134f2f5bc346815b915eda5679406f1"],["/tags/enum/index.html","b286086c6428c6714964b24ba126aa4f"],["/tags/iCloud/index.html","1e4b79f6ec36853a2cacdbda7e532df7"],["/tags/iOS/index.html","12bcfbb888b8b3ef7a852197f5130231"],["/tags/iOS/page/10/index.html","057905358874e630ed4c5967053e8c5e"],["/tags/iOS/page/11/index.html","e5520748d7702043ce1a9d0004d61ccd"],["/tags/iOS/page/2/index.html","461d8507afff751bd6e64fb90f19ee35"],["/tags/iOS/page/3/index.html","b26bc7d807371608bbae07a29bc836f8"],["/tags/iOS/page/4/index.html","cef07466044ba6cee4187101ae9ba560"],["/tags/iOS/page/5/index.html","98f629126f90961fe5cecedcc17d97ed"],["/tags/iOS/page/6/index.html","680d9b63e83700d8da3af1479cf00d6e"],["/tags/iOS/page/7/index.html","e00ae6a9f7cbc8d847965d0628bc3ee2"],["/tags/iOS/page/8/index.html","639866a6a9fc1a32b9551711aaa01153"],["/tags/iOS/page/9/index.html","a9b15a913949a760515a2892595c9c6a"],["/tags/iOS面试题/index.html","0378620be80010692e39767dc656d937"],["/tags/index.html","51bb849729186c9e35fa8783e0216d56"],["/tags/non-optional/index.html","153fb2ac0337185fe0a8b3b1fc7ed66a"],["/tags/random/index.html","802fe8d7cc15d694d703dac465775457"],["/tags/transition/index.html","c6515169e009af084101f570e9f63dd6"],["/tags/三方类库/index.html","64bac2f1b06f90dc0348829f21e6d623"],["/tags/依赖注入设计模式/index.html","33443d0d944e4b1ca232d2a07110d72a"],["/tags/函数式编程/index.html","c06e604c1ab2db4d4511c8d772d3a88c"],["/tags/初始化模式/index.html","93de31b3c47b0ead5eace77b1a4272c6"],["/tags/单例模式/index.html","a1c0d2f3cce07ac5e53ad4488875056f"],["/tags/原型设计模式/index.html","2b6f15d35d5a44b89794dd8cbdc2ec43"],["/tags/命令设计模式/index.html","7bd712e47ba9930fabdaa7757616e1e8"],["/tags/基本控制流/index.html","7b0bee5d27a0c87f60a0adfca7046b92"],["/tags/外观设计模式/index.html","94599c7855cbe753cdf56e397baae3a6"],["/tags/委托设计模式/index.html","0b6822c273f0f1813cfd68e3a613330d"],["/tags/子类化样式/index.html","b9139ffc00ac793c6979ac6009bffe8e"],["/tags/对象池设计模式/index.html","17b1757132780b8387d2f332bb09dd3c"],["/tags/工厂方法设计模式/index.html","aca4d03204161711c90c41ab1b236765"],["/tags/工厂模式/index.html","4b59050bfa55c49f268b657f337765fd"],["/tags/工厂设计模式/index.html","606e9f6433a73650e035b60047867899"],["/tags/懒加载模式/index.html","fc3977d2c0b852150eb602a432e45fb2"],["/tags/抽象工厂设计模式/index.html","992dc6ce648513a95c187572acf160b4"],["/tags/构造函数/index.html","d6e6ef6a8212548fbd6bf2cf320ce61f"],["/tags/架构设计/index.html","49d45da37d47eedd44ee506da227ce1f"],["/tags/生成器模式/index.html","1df9149fe2ae94dea12a380a4674189e"],["/tags/用户体验/index.html","03a2029ab21c15f3f7c68d17c64c6ce8"],["/tags/类型与操作/index.html","02255da2a3714fc23b4ae0196d4d68c4"],["/tags/自动化布局/index.html","85ad6b9aa15741b1d87601aa686fd162"],["/tags/自定义UIView/index.html","a1e177aa87dc25dec943d7d020959ddb"],["/tags/自定义转场/index.html","ea5d185077f644820fc654832322ba8f"],["/tags/自适应布局/index.html","b291878e8239dcf1027eeffdb8089cb9"],["/tags/表达式、变量和常量/index.html","af369e7712b3813e906188be538829e4"],["/tags/设计模式/index.html","34797c9b711dec0655b092b9c13ae9ab"],["/tags/设计模式/page/2/index.html","a59629637b6e95164af74307ad9c941b"],["/tags/设计模式/page/3/index.html","8416ac3a72dc6c84e44b70b5d27df091"],["/tags/迭代器设计模式/index.html","506d199b27e601b570bd5105501d34de"],["/tags/适配器设计模式/index.html","d8df29b9138f095e2f9a9a4234007858"],["/tags/静态工厂方法/index.html","ec6d55dfd2bcfec4dfd9487ce4f03b03"],["/tags/高级控制流/index.html","db26570fc135a6b11afed8bb0bf0fed0"],["/为iOS应用构建输入表单/index.html","b0e21dc4a0e15725d0cfa6ecacc93869"],["/产品开发的幕后花絮/index.html","3927a39914c4a87d370d6639226ef56f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","4fc4db7b995ad6bcd7f405228392775d"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","97f51b31e4f23b1dc0a4bae1c5ed1afb"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7e88e4f5fd29752c1e7398194e703f2e"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5da58f898d5c27525011ea3c51c66fea"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","49b00750c165a99487c96bd5c812a33f"],["/在Swift中创建自定义集合/index.html","9cc8ee404195282e76144e8738591a54"],["/在Swift中处理非可选选项/index.html","4b2942aeba039389ab5eaa2423d55004"],["/在Swift中生成随机数/index.html","813c96b2448ad96810783777880809d5"],["/在Swift中重构单例模式用法/index.html","5b7731f02ef5a09a022efa22cfddb708"],["/如何为VIPER编写服务？/index.html","7309ce35a32a4fe1ef702fd0ec19fcc0"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","020a2afa61fc749a19857478efafe0d8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","a371d2c9c5636cceb8276a9b31472e62"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","69bc7a93bb77ce73b4e36dd7f10ac704"],["/如何使用VIPER构建SwiftUI Apps？/index.html","aba988b2c07ede5cfd9d75cb08497dba"],["/掌握VIPER架构/index.html","bfe677caa0db4733cec1cd796ca9831b"],["/揭秘 WordPress Hook 系统/index.html","d0412004c35e5b8649f361053b77bc44"],["/比较工厂设计模式/index.html","b3bfbf874c44fba27c264f0b5037023a"],["/深入了解Swift中的Grand Central Dispatch/index.html","641a0f7f8a7d4eed4774e51d863793ac"],["/深入研究Swift框架/index.html","722e1cb7ab6821f38ae7d53ccc1dbcd4"],["/适用于iOS开发人员的VIPER最佳实践/index.html","cf977378becd368b64569f7a65d6c9a8"],["/选择Swift而不是Objective-C的5个理由/index.html","15c3dfe3b026bcfa2320c08f69bb48c9"]];
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
