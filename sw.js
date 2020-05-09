/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","5c7a9a48aaf378b39b54c5b6637c885c"],["/Advanced Swift系列(七): Strings/index.html","c937cb385b978e8f407f802337d02040"],["/Advanced Swift系列(三):  Optionals/index.html","a4338cc2faa9e0fc79ecef1b97b41cb2"],["/Advanced Swift系列(九): Protocols/index.html","f483536100388b69bc409d63277293f2"],["/Advanced Swift系列(二): Build-in Collections/index.html","64911b48ac503eab1735f0f1f3cee802"],["/Advanced Swift系列(五): Structs and Classes/index.html","15287a3dbd19cd9a3120e0b87ccb9961"],["/Advanced Swift系列(八): Generics/index.html","0ffd23b26ac54cc6869c15c28cdd5833"],["/Advanced Swift系列(六):  Enums/index.html","af0f246fbb6f80446664249dc0cc6a6d"],["/Advanced Swift系列(十): Collection Protocols/index.html","01007f7c151f429df454e1156e06d527"],["/Advanced Swift系列(十一): Error Handling/index.html","5569a5f7bb0b659649eb88efcd617aa8"],["/Advanced Swift系列(十三): Interoperability/index.html","10b50871ff1e41bbd797b00579da6e55"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","e56cd05be881831d69a5a190ef5ab462"],["/Advanced Swift系列(四):  Functions/index.html","1cce0e967162d6f7c2e2b3eb15dde1a8"],["/Functional Swift 初探/index.html","a1940b9d841617742e5f567670f46c18"],["/NSCODER和SWIFT初始化/index.html","f682c1031ef9ddbdff3deadec5270ab9"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4b656ad4a80a5aa3ea23a1bde2b55417"],["/Swift CompactMap vs flatMap：差异说明/index.html","740a6dc8b1d08b72499ab30196a97af1"],["/Swift Grand Central Dispatch 深入实践/index.html","73a73175cb77a4441e20c85912a5cf62"],["/Swift Lazy属性初始化/index.html","e2334395809b8c38e7b9794083d6690a"],["/Swift Promises 初体验/index.html","e1e1a180c0e7be3cf9418a84f0035344"],["/Swift Promises 探究/index.html","c7b2e2b882b31547483258a3096e3a0c"],["/Swift UICollectionView使用指南/index.html","e90cd98fe077bedee68c16737c92ce2d"],["/Swift URLSession 和 Combine framework/index.html","5e8de2bacaab25a5f38dac708eccb443"],["/Swift 唯一识别的视图/index.html","fa3ad12296d942035f472485b0021fd9"],["/Swift 如何学习现代UIKit？/index.html","29a5a294d3b55f81a4c7c7b290fccd6f"],["/Swift 用 compactMap 替换 flatMap/index.html","2a95c28e78e0fa49b221389c27689a82"],["/Swift 选择和播放视频/index.html","4fcb8e46e010d48e863e6875f3912cdf"],["/Swift中UIColor最佳实践/index.html","1359b67abb0156ad44cec5916652902a"],["/Swift中快速简单的工厂设计模式/index.html","6f32fa9ae3d171249f8fc04d69829aca"],["/Swift中构造函数与静态工厂方法的比较/index.html","4ab182e6d0b99e284b2ee693bba1b849"],["/Swift中的UITableView教程/index.html","b32d3a689cc01767063bdcd71256c63c"],["/Swift中的懒加载模式/index.html","0c7e44ab0bcb7d629d7ed8f4e0540851"],["/Swift中的模块和挂钩/index.html","9c4a8ddeac4ff13efbca14d19ee40524"],["/Swift使用布局锚点添加约束/index.html","6114ca5ee9c18326040aea4397062dfd"],["/Swift依赖注入设计模式/index.html","6e23de30946f9e05f43b1bd4bd5a092d"],["/Swift关于Dependency Injection (DI)/index.html","8ff80dd38c948e720c0aad3104d1a1f5"],["/Swift初始化模式/index.html","5fe1e1f0ca7b5dfe5976d85aaee45bd1"],["/Swift单例模式/index.html","795c940b326029c9e9e0816ea60b7526"],["/Swift原型设计模式/index.html","7271b91110c6220a78fb419e0958b7d3"],["/Swift命令设计模式/index.html","480b9436687de27afc5c539953c3376e"],["/Swift外观设计模式/index.html","06467efe853a105f88ec778719c0f319"],["/Swift委托设计模式/index.html","bee9e293a01b0df677232445b1574eaa"],["/Swift对象池设计模式/index.html","467c8e2c4e6b83bc5ce781d3768d6165"],["/Swift工厂方法设计模式/index.html","5b24b79e9620c12cb0226acce4060118"],["/Swift带闭包的懒惰初始化/index.html","389b102d97b3f8c5a8c32640d85bcb5d"],["/Swift抽象工厂设计模式/index.html","300adaa968e4671bf7df4c9a4e7ecd5d"],["/Swift掌握iOS自动布局锚点/index.html","45e2b842dc8501fdd6a5977065d7a1d5"],["/Swift支持旋转的自适应单元格/index.html","591af00a94a70a28d9273443d4798238"],["/Swift枚举值/index.html","66d2ef009567205a7ff0a8b1f36f0c97"],["/Swift生成器模式/index.html","eca61a0ea5bbb42d9e55b6156db80a7a"],["/Swift结合Xib文件自定义UIView/index.html","b3fa474f5c58927f27e44f0aa6650de2"],["/Swift编写的20个iOS库(一)/index.html","f30d91e898bf055342349c8443c588a0"],["/Swift迭代器设计模式/index.html","3fbd2aa79f9d38084b36011b3cb0359d"],["/Swift适配器设计模式/index.html","f512d62aaff64a058fb0d3d5ae43aa8c"],["/Swift静态工厂设计模式/index.html","997ffb6e37042479b428b6266cfb242f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","320c506707bdb9811aa89c94ddf2bad0"],["/UICollectionView data source and delegates/index.html","a0f66c26793e483f54a5400d86360028"],["/UIKit初始化模式/index.html","edb5632d992b8a872ef07b5363c5b76a"],["/Ubuntu18.04替换国内源/index.html","aaca8a4ebcd3a38e84affd6fef642306"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","994adfbc8935be607f99e870569b8738"],["/Xcode扩展/index.html","2c94223cc05ea8aa220cfbdc1c481b81"],["/about/index.html","479a9b9f5ff8bae9202b59bdb0faf106"],["/appleOS的Networking示例/index.html","aaf7b054ef7524ca525b23688c9b9710"],["/archives/2020/04/index.html","dc7f3384772169aea21332372fe9f59c"],["/archives/2020/04/page/2/index.html","40260abd52290bfe319d6aaad7cca341"],["/archives/2020/04/page/3/index.html","d783c661681ed3ecae7a2c36d5a40057"],["/archives/2020/04/page/4/index.html","885f7768b06dc804595a5444b93fada2"],["/archives/2020/04/page/5/index.html","1214fc41c812c82b41b93cb37f0fdd3c"],["/archives/2020/04/page/6/index.html","2704f2b18adc9e802eaf6d1d0b0ebae9"],["/archives/2020/04/page/7/index.html","00753852d3c8322f817518866961bb8d"],["/archives/2020/04/page/8/index.html","8cf1efbdd49a9ae4ae5eacde22a6c572"],["/archives/2020/05/index.html","392b41061bfe92a1f35309f20ad37ed5"],["/archives/2020/05/page/2/index.html","2591551fd0ed90524ac051628134c439"],["/archives/2020/index.html","d184c448e094e0e06e7c9db00e6c83fa"],["/archives/2020/page/10/index.html","56c70f8adce991d940f5bb6fa6d581d0"],["/archives/2020/page/2/index.html","2f6af2806de04a8618bcfc54d6feee94"],["/archives/2020/page/3/index.html","a3160ef06a1126e20f9f3a479904c2a1"],["/archives/2020/page/4/index.html","6f84403770e899078b47f15a8a281c7c"],["/archives/2020/page/5/index.html","01d99a520986233c455dbda44903121b"],["/archives/2020/page/6/index.html","798e958f5ddc4caf046e2d79ee963f1f"],["/archives/2020/page/7/index.html","0837fdf09f06f38d8e5c3109826c3840"],["/archives/2020/page/8/index.html","4f09bac8aa5308d0a24071019443989b"],["/archives/2020/page/9/index.html","587e7073e6936ac9eac567e01717ead2"],["/archives/index.html","a206761a0bb82f277e73f3b935ec2666"],["/archives/page/10/index.html","35039d9a675d8bf4a8a27960aabbf385"],["/archives/page/2/index.html","23f2f47ad8bd49b4a50099f8a48303be"],["/archives/page/3/index.html","8acbe5ba926cc3864d41ddcaf0bd2440"],["/archives/page/4/index.html","205a540ac84da8b120a16547c270315b"],["/archives/page/5/index.html","ff84b2af0a40f1eef1a2934239694cf0"],["/archives/page/6/index.html","5b527826c309cfa4023f5c05f577bebf"],["/archives/page/7/index.html","629bf803e5a9b1120398592136a8be2d"],["/archives/page/8/index.html","e8034e93fa26054cc9b4fa9f63564dce"],["/archives/page/9/index.html","2ba5f0ef066b0dbee38f254141af296c"],["/categories/Advanced-Swift/index.html","de848c44426083d3731b5ec16a623109"],["/categories/Advanced-Swift/page/2/index.html","3f851bf9f26de180b9c652ab8675ecfd"],["/categories/Codable-protocol/index.html","e3889872898f6227d4bf5de1de10cb7b"],["/categories/Combine-framework/index.html","3cc7ab94735e493754747c25abf7ece7"],["/categories/Combine/index.html","b56e8c3e72bf5db4dd1b7541068c9a1a"],["/categories/Grand-Central-Dispatch/index.html","f13335ad5244c85f152f4e50b346ccab"],["/categories/Hexo/index.html","29d876bdc1e8d03fd56c112304b1fa30"],["/categories/Promises/index.html","a1e93818b0c57f48dc097e65a2d2ec3c"],["/categories/Result-Type/index.html","1d0dff6c2cfe207c46455b6af11636d6"],["/categories/Server/index.html","be6319bfc1f7553b8faf4c7306d9d050"],["/categories/Swift/index.html","498a18d2dfef197c5a037451cb2bd347"],["/categories/Swift/page/2/index.html","ff25483cab122d69f03ba5980130b57e"],["/categories/Swift/page/3/index.html","63f0fa6efd438438cef15175cdf332aa"],["/categories/Swift/page/4/index.html","893b95d77de9039fd741b48cd847dede"],["/categories/Swift/page/5/index.html","0c696604b1b1d8ba4cabdae5ec1599b1"],["/categories/Swift/page/6/index.html","c4b2cd49752868a438d932b1e0cc66dd"],["/categories/Swift/page/7/index.html","9d01096f3fb1065f0e4967fc63de732d"],["/categories/Swift/page/8/index.html","10dd7b14af9959335dbecf4b619a3f0e"],["/categories/Swift/page/9/index.html","5cf2eddf700b7f595153b9637a6239d6"],["/categories/Swift5-2/index.html","9458b0a8e6aa5628eea25a6a93c7afa0"],["/categories/SwiftUI/index.html","7a38bb460755e383465310ad240b2928"],["/categories/UICollectionView/index.html","1ff99d5d9a4248dd1b8bfdde191ddd37"],["/categories/UIImagePickerController/index.html","9e108d3538942af03f702cfb4c4af258"],["/categories/UIKit/index.html","5e809f3065091a07c37f434e92c2e7e6"],["/categories/UIKit/page/2/index.html","f6e7a30b50b2d0711866facc7eedc010"],["/categories/UIKit/page/3/index.html","b2a248b21e640c4615842a13d8e5d91f"],["/categories/UIKit/page/4/index.html","c9216a4d578bb25acd319f310aaa0bcf"],["/categories/UIKit/page/5/index.html","206a6fea1304bbb50379178b1ac6389b"],["/categories/UITableView/index.html","b99371aec1c4cafc578ff8f6bb81ae68"],["/categories/Ubuntu18-04/index.html","470f9364079c7c968400aead6ee2447b"],["/categories/Ubuntu软件源/index.html","374cdd8862f84119ef994bfc1ae1e6c7"],["/categories/Uniquely-identifying-views/index.html","c3c7ca03e218bb448d2ed653fb698176"],["/categories/VIPER/index.html","36d9f898068cf1f919758c44fc37a289"],["/categories/Vapor4-0/index.html","36de06b3e43b1218e0517bf71b798dbe"],["/categories/Xcode/index.html","90260f37b362a4f154e43411bff0e941"],["/categories/appleOS-Networking/index.html","d4ab950275ea5c95a53b5c68f242d229"],["/categories/enum/index.html","c0223ce8f5e760af0d83a45ce2e1f6b1"],["/categories/iCloud/index.html","a5c2f3bd83d9703481902b3fdeed8ae7"],["/categories/iOS/index.html","5c0e8815b6092a50461613186c75819a"],["/categories/iOS/page/2/index.html","5c143cef8cae71ac5ecf1b44545e2531"],["/categories/iOS/page/3/index.html","25dc3b6f74d0a480cd9eb0a32e226628"],["/categories/iOS/page/4/index.html","f64f8ff8128a29c8e9f0f5c7f714ecde"],["/categories/iOS/page/5/index.html","9c0580a58c74e663564cb58b0aaa0ea1"],["/categories/iOS/page/6/index.html","7659a7f5c76262231ab72056e487317c"],["/categories/iOS/page/7/index.html","c761de19fe2f1afe41616df39fbd8d61"],["/categories/iOS/page/8/index.html","e8667fc6ecb7e42445755f72ce4622b0"],["/categories/iOS/page/9/index.html","306c8ab1e42ee91d910659fd328986be"],["/categories/index.html","f2636ed0097cc3983ac9b429be4ee1b0"],["/categories/random/index.html","ff2ccdb387d82b939ac8c6a8bf883536"],["/categories/三方类库/index.html","2739c2fdc81cf50ef138a377987e5c90"],["/categories/函数式编程/index.html","247442f732684024b5f8c21d54be2413"],["/categories/子类化样式/index.html","7a43efe04720f8f987d0c642cdf1b8f2"],["/categories/架构设计/index.html","54f6868ca97b0c6b88a7607baa329e20"],["/categories/用户体验/index.html","5889bd9feb9727bb15b84c9e71b0e33c"],["/categories/设计模式/index.html","023bbacca468b464a8397046be150840"],["/categories/设计模式/page/2/index.html","980c56b9a6ef42bfefdb1b31d7ac1b40"],["/categories/设计模式/page/3/index.html","3e0e8b261ce61c42a488355d2d1b7e03"],["/css/main.css","e3ea4a9cd06f69554a341b3f9beb7d6d"],["/hello-world/index.html","e6af0151eae127d94d51b37f97265571"],["/iOS VIPER架构深入实践/index.html","704bca1be430bb1599e4ddb756e0bb1e"],["/iOS 自定义视图，输入表单和错误提示/index.html","afc337086f86521d888154a99dfe70f0"],["/iOS如何使用iCloud文档？/index.html","a2db15fbfb46febbec2425a2545fc9d3"],["/iOS子类化样式/index.html","8fbf93e3ca234ae11336abff7b22bd12"],["/iOS自动化布局编程/index.html","d2588e1565f02a74a368f188c885e851"],["/iOS自定义转场(By Swift)/index.html","0a2eddc3a7ab106ab7bf6b839cd06db3"],["/iOS项目架构：使用VIPER/index.html","ae11ad8816ee899c6e221db9595f34e8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8868b187999467cb65f746681dc5e81d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","9ccd607c52ee59726db58737a191ff57"],["/page/2/index.html","8ef447d4bca598fedba909111f34c603"],["/page/3/index.html","e368ce11355a173627d5080ae7ac67b5"],["/page/4/index.html","56b7dcba412637cdaf25f988c419a376"],["/page/5/index.html","67db541d8798186da96d9fca9c9a4e6f"],["/page/6/index.html","9166f4466d13d1b92958882025e1e800"],["/page/7/index.html","28da48ea74cb241d1108cec7d4280f47"],["/page/8/index.html","c51e8ec1f0cf8893047d4000ed0af803"],["/page/9/index.html","b29009e8ea3e23c9dfe675ff5c649331"],["/schedule/index.html","4a770b691c28197fc02bfe73039bd80e"],["/sw-register.js","9d4170f08289217a930754eabfa0202c"],["/tags/Advanced-Swift/index.html","1b2d75a4a0b0fcd311cd4b05a7b53bf2"],["/tags/Advanced-Swift/page/2/index.html","bfd948244e1c95e7c7f6861a34fbc809"],["/tags/Build-in-Collections/index.html","716a1f604e0c7d7c5c2f7b1cc3528d68"],["/tags/Codable-protocol/index.html","bde86de8d4bf447abfa9b9d884d1e771"],["/tags/Collection-Protocols/index.html","b289a41ccb2ae0370a78c0dfce694211"],["/tags/Collection/index.html","a44d08a5a9cacd2369b63d2192b8ab6f"],["/tags/Collections/index.html","4df2adce1c8e81452f781b8f8b8ca683"],["/tags/Combine-framework/index.html","5259450113aba3e552c789602dc72755"],["/tags/Combine/index.html","31dd1ccb08b940f382e04d72d7295ee1"],["/tags/Dependency-Injection/index.html","070ee4a8fe9b359cc2eece63ec07b272"],["/tags/Encoding-and-Decoding/index.html","fb9f09cf23a9f279d5ab9639ffa9b9da"],["/tags/Enums/index.html","c3be8c7a0338e473e73006a6dabbe451"],["/tags/Error-Handling/index.html","1ae1b5c1ad9162eab19ff8147f46da88"],["/tags/Functions/index.html","9818206d035134302c31c2163a593238"],["/tags/Generics/index.html","f7797fb0396dfe454997ce283590dc46"],["/tags/Grand-Central-Dispatch/index.html","e9366d7fff8cebc5ee6751f651a2e820"],["/tags/Interoperability/index.html","3926d8ead7a3110cd8e06be985c9d91c"],["/tags/Modules-And-Hooks/index.html","d7e248e96a7be7d5a92221ad6c232304"],["/tags/Optionals/index.html","355a061cf23a03828c8a1cad32ae4a36"],["/tags/Promises/index.html","1e25c8169fa9f797a491d0935efbda9e"],["/tags/Protocols/index.html","e1eb189f1500498a5ae7b9a55d89a97c"],["/tags/Result-Type/index.html","8066e48c603830e51f23fa7fe5fa17d2"],["/tags/Server/index.html","67d670ab7b8a6d32aeadceee1d60625c"],["/tags/Strings/index.html","30be5bb9d167a30aaad0fc7a35d1c816"],["/tags/Structs-and-Classes/index.html","07b8eca13fa97f5af37a49e97c60e272"],["/tags/Swift-5-0/index.html","1b51faf168822154447fffd054a435d9"],["/tags/Swift-5-0/page/2/index.html","601f52be5abb560a537655940b6376b5"],["/tags/Swift-Package-Manager/index.html","c1c839ab6d0ad285f0966547374b7af9"],["/tags/Swift/index.html","c19a5056fb81e986e61937423f3bc34d"],["/tags/Swift/page/2/index.html","04d0594dfd9a24eab46799da04123a3d"],["/tags/Swift/page/3/index.html","ea7e41522000fed65b068135d25d0d6c"],["/tags/Swift/page/4/index.html","1d3c96267890ac11808376422942be17"],["/tags/Swift/page/5/index.html","9f5eaf73e3185c226cee18df3956fd2e"],["/tags/Swift/page/6/index.html","ebd768c2f753911f34d117e7e109074e"],["/tags/Swift/page/7/index.html","b71ccae96e644299ae8780658d40ebb3"],["/tags/Swift/page/8/index.html","b050ac1ef583e1a535de32e41c5fd585"],["/tags/Swift/page/9/index.html","b7d3f06723d57094d0e8bd3fc221dffd"],["/tags/SwiftUI/index.html","cf18c532e48b90690ccbfb468644d8a6"],["/tags/UICollectionView/index.html","dbef6745042e94331d829e09b3522cfe"],["/tags/UIColor/index.html","22b8de454cfa505241858600c02f4901"],["/tags/UIImagePickerController/index.html","a7f5ebb9f762fc5e61ecf7c35edc57a8"],["/tags/UIKit/index.html","e9060bd3cd92e88fb389d2d8b69419f3"],["/tags/UIKit/page/2/index.html","71e5f427f43d13c14ba20aeb032f00c7"],["/tags/UIKit/page/3/index.html","6738a344ae7c92aef23354ebb25a95ad"],["/tags/UIKit/page/4/index.html","a669970213e7a5a2e9d39c017d8c0cca"],["/tags/UIKit/page/5/index.html","df960c5da8353943856339ec89c433bc"],["/tags/UITableView/index.html","d3b4cfc7f92c73831e2bd61e133e8701"],["/tags/Ubuntu/index.html","fea028ed8b1a21a855e30b13aecea4d5"],["/tags/Uniquely-identifying-views/index.html","e7aa7f6044e47102299f63634abb2b5f"],["/tags/VIPER/index.html","240a92d81cca027e01ef70678cedddc7"],["/tags/VMware/index.html","036bf3bb433a49679c0a5d4bd9e2bf5f"],["/tags/Xcode/index.html","1f776c09aaf068f0b23ffb38928089f2"],["/tags/appleOS-Networking/index.html","ea9d2b8e28bbf1fb5811a42d63676d32"],["/tags/enum/index.html","6d79778b0c9481837a32583dc0dc024f"],["/tags/iCloud/index.html","0951f14d9625813baddd20127d7c9af3"],["/tags/iOS/index.html","eb5b66d9e0f1aa4e4dbc4ae83e60f65d"],["/tags/iOS/page/2/index.html","7959a9144f3c1ce5c4a2313f44f889b0"],["/tags/iOS/page/3/index.html","2e2cf9fd81039b937d9655707a4d7598"],["/tags/iOS/page/4/index.html","e4156d0d1c270f3c37113c75f6874f54"],["/tags/iOS/page/5/index.html","5978955df4027e04340e841164cfa01b"],["/tags/iOS/page/6/index.html","2364f713bbc02e6e4a34f26902ce48c5"],["/tags/iOS/page/7/index.html","def9b004aea82cd00c13696d573d8695"],["/tags/iOS/page/8/index.html","010a6cb48768e9d2acddc8c7f3a0b9a5"],["/tags/iOS/page/9/index.html","bf3bc05960b2b8908697c749b9072219"],["/tags/index.html","9b9f032ba126b9440c67c713afbc8cb5"],["/tags/non-optional/index.html","d4af84513dadb9388fd59ded5dbf88e7"],["/tags/random/index.html","ad1838de66f37db4f5c1afaf52490d67"],["/tags/transition/index.html","5e297b66c63a28d210fd0225311cb782"],["/tags/三方类库/index.html","9973d6aa3a7d381d2104e98b823a0b84"],["/tags/依赖注入设计模式/index.html","da369450327d312cf82e91e45606f22d"],["/tags/函数式编程/index.html","dd90d63cf066420c504047e5c97ffcfb"],["/tags/初始化模式/index.html","ed23b7ead72f6d608c6681e240868b15"],["/tags/单例模式/index.html","5b818812e1384ee863b1344be5b96271"],["/tags/原型设计模式/index.html","48e8509004cfe82a0d0beec7a9897b1a"],["/tags/命令设计模式/index.html","fbd2617e8a600e2a54786a20d3c98bee"],["/tags/外观设计模式/index.html","a2fcdbf5282dcaecb97ae3b0e89ed16c"],["/tags/委托设计模式/index.html","bb1db3bb0d944cbd1694a7f0ae8f60ad"],["/tags/子类化样式/index.html","f7a1f96f38f9f81ac10737b828e2da0b"],["/tags/对象池设计模式/index.html","bfec3d2016d6e53160d85394a11f846e"],["/tags/工厂方法设计模式/index.html","2dd3240593c609ad46e33e9fe4558681"],["/tags/工厂模式/index.html","221e723ed2d1aa5e27098d1dd848e286"],["/tags/工厂设计模式/index.html","6d5f150027dc2ce10f86414bbef259e1"],["/tags/懒加载模式/index.html","6834bcc6058303605fc53450517478aa"],["/tags/抽象工厂设计模式/index.html","7a7a700b2c65f9a43c634c742f8bdc06"],["/tags/构造函数/index.html","bd77c5c9470ea87a1d11ec19d662b748"],["/tags/架构设计/index.html","97fe3bfa6be2bb357817ab0a5a4f1543"],["/tags/生成器模式/index.html","2bfeb02ade89484103713e35d6433042"],["/tags/用户体验/index.html","100c8b210a76c2df133382fd530b3eb8"],["/tags/自动化布局/index.html","9f33622694db49b302fdb8309bbaf96d"],["/tags/自定义UIView/index.html","1a1fba049e4817f620e61940a1afbda5"],["/tags/自定义转场/index.html","22e49debc86f8a162065ab5b1fef1d3e"],["/tags/自适应布局/index.html","7cb2e30203a6972f9bd8fbcbf213a4c6"],["/tags/设计模式/index.html","222fb0bbad360f4415ca83151e7eb737"],["/tags/设计模式/page/2/index.html","e2eb7a3e8b700f704e67e1509ac4fb6c"],["/tags/设计模式/page/3/index.html","547e5780c476a285a272776283ca6b74"],["/tags/迭代器设计模式/index.html","2399e19c2267d91d8972bfd502b63a33"],["/tags/适配器设计模式/index.html","215cadfbcb5022feeab8a3753d078e9c"],["/tags/静态工厂方法/index.html","9a1c1b7d5fc130bd002dd6d9911c42f5"],["/为iOS应用构建输入表单/index.html","6ba18e1a14e1c3d41141e952e6f98fb0"],["/产品开发的幕后花絮/index.html","9b6ee090f7b2f0ebb46f4f6146816715"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","dc4cc22d9132f42d5fee4a1c4f926b34"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9b825e24116900916382d2676909099f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ba2129ea5177f72cc24f85d23ebe5896"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","79d892b8d37d80e88f498dc3205df919"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","86156f020a5a4548c782ab8a59e1070c"],["/在Swift中创建自定义集合/index.html","b33e103e4a7a30e4e5f2de7616481cb5"],["/在Swift中处理非可选选项/index.html","53bc3066c23d8f8f735e4c8c3ed82fa1"],["/在Swift中生成随机数/index.html","88438a79e338f4fccc6bcdc51ce8f590"],["/在Swift中重构单例模式用法/index.html","0c6fce157164b3d9f45a38de10b92a92"],["/如何为VIPER编写服务？/index.html","4b39458c827f0ef54c9b280cda79ea4a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8e7f77d5a35bd875ef170b9c864c1548"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f11bfddf85b7cc61d505ce24d2c19aba"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a2578f7b2fe9087983208a7821fc6211"],["/如何使用VIPER构建SwiftUI Apps？/index.html","0d609f2493e7b7cfc06a69fceb573da1"],["/掌握VIPER架构/index.html","aff14ea24aad274f4301528b1aaf5c7d"],["/揭秘 WordPress Hook 系统/index.html","8c9f9dc7be63c4803a20a606c779730e"],["/比较工厂设计模式/index.html","711bcee962af31608072bcfd88540920"],["/深入了解Swift中的Grand Central Dispatch/index.html","2b4dfa023ee6448f2a55ec77b2c5e45a"],["/深入研究Swift框架/index.html","507d52fd90a880f8bde89b355cd3da0f"],["/适用于iOS开发人员的VIPER最佳实践/index.html","8d7ab8c41c0d0d23bc038a637e24f287"],["/选择Swift而不是Objective-C的5个理由/index.html","f5bfe2bb758d39c865b170c1c48980a5"]];
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
