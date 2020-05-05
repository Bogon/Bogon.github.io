/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Build-in Collections/index.html","9b3b08c8fbf4d3b6bf662525a0427821"],["/Advanced Swift系列(一): Swift 简介/index.html","3147f4392b19ed6f80e6bd25dbef1475"],["/Functional Swift 初探/index.html","1346f90d8751b706c2b0a8e6bbd00279"],["/NSCODER和SWIFT初始化/index.html","e66493db89f548f32181cde4bd7c4001"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5fdc2993867e16baec67be83eb3fd41b"],["/Swift CompactMap vs flatMap：差异说明/index.html","f3272fe2756048a78b84c8e1def017e3"],["/Swift Grand Central Dispatch 深入实践/index.html","b1af6fa98dbe8f064b48d9d9cf6c7690"],["/Swift Lazy属性初始化/index.html","5bcae87c3c56979f9a6ae350e36d9909"],["/Swift Promises 初体验/index.html","82f8325a2ad78683a34e7d6a2e9b15cd"],["/Swift Promises 探究/index.html","f5f286695a006c2191fd5dfb39afaa66"],["/Swift UICollectionView使用指南/index.html","c5e72d9b98ef8951ce1ef337b3587218"],["/Swift URLSession 和 Combine framework/index.html","c6e059cc8efb93eb426dca9b5d7a7671"],["/Swift 唯一识别的视图/index.html","1a18aff89709504edb9bff0411fa4223"],["/Swift 如何学习现代UIKit？/index.html","fd11df4cfa4dd4338eb348c5b3fdf45d"],["/Swift 用 compactMap 替换 flatMap/index.html","ca0e6b1cc91768c0eed340b6aa5fb899"],["/Swift 选择和播放视频/index.html","3af0be07b1706bf6c81894c83e345b06"],["/Swift中UIColor最佳实践/index.html","b452549ae307b6f8f9e13e648aa88bc3"],["/Swift中快速简单的工厂设计模式/index.html","a3109aaf86436a760ccde54bd0d15c4a"],["/Swift中构造函数与静态工厂方法的比较/index.html","4be136e954627998e7a1b671a1771b68"],["/Swift中的UITableView教程/index.html","273c7b59cb88c3f5afca30ed83ef95c2"],["/Swift中的懒加载模式/index.html","3ad9fc589b8d4f40e5924a7fe40bcb35"],["/Swift中的模块和挂钩/index.html","fd30c6205d2fb3f828c02ba34130b7aa"],["/Swift使用布局锚点添加约束/index.html","2ce9d9820011bb104287767855fe93e9"],["/Swift依赖注入设计模式/index.html","d7238fa932931b73cd00be0042f20c2c"],["/Swift关于Dependency Injection (DI)/index.html","e990b34f2f954fa2de27f61666fbc227"],["/Swift初始化模式/index.html","07eb58bcdb5c79995ddfb61f20725875"],["/Swift单例模式/index.html","f40e9a30d2c44d5be6e23b10c3447c8d"],["/Swift原型设计模式/index.html","9047d1d7eb21f70e6ab61ee5882cfe28"],["/Swift命令设计模式/index.html","3611a7502c3026336688516f0a10f405"],["/Swift外观设计模式/index.html","f448c51c2b8b4afdbbc86be5d8556b20"],["/Swift委托设计模式/index.html","342eb236b350e66b961eb48dd7a20c49"],["/Swift对象池设计模式/index.html","4cc8db2d33180dedf5c723c68ce79f44"],["/Swift工厂方法设计模式/index.html","2cd39db1deb885ec0a6be7276da8899e"],["/Swift带闭包的懒惰初始化/index.html","29a00e7c2a3b1b6e779398d9189fa3cf"],["/Swift抽象工厂设计模式/index.html","3ec403f6264fdfc7d04a37032a0612df"],["/Swift掌握iOS自动布局锚点/index.html","39c807a25918b21b6cce4bb4c763a61f"],["/Swift支持旋转的自适应单元格/index.html","e9e64da7221be5601bf1336d29a9200e"],["/Swift枚举值/index.html","350bd1cc9cbe61108b0a20eb15bfb7c1"],["/Swift生成器模式/index.html","995992f8449fbb3c99ef5b72c96d898b"],["/Swift结合Xib文件自定义UIView/index.html","de2b60a027f24ed71356d757108f96b3"],["/Swift编写的20个iOS库(一)/index.html","36473adbde2c07151caf15974856e71d"],["/Swift迭代器设计模式/index.html","7ca373afe5ca276f14c618b2ae8b6ee2"],["/Swift适配器设计模式/index.html","59bb9d1a07e486109b5fa6e075d2c1c7"],["/Swift静态工厂设计模式/index.html","2d9aec12fcc0a9c813bab955b4f55ae3"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c41d73fc410a5d2427d74ed55b8a38e5"],["/UICollectionView data source and delegates/index.html","c2044cc3b81ca0e0a966821be772b3e7"],["/UIKit初始化模式/index.html","bd3c4b6d357bd0000bc5a3f4b8b7a10d"],["/Ubuntu18.04替换国内源/index.html","d7900aed45e72cf1c61daf0ce00c7faf"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","35f4a7df2c1c01ba3c1370d67aa58550"],["/Xcode扩展/index.html","6bd9cabddf3acce4663552c8110bc404"],["/about/index.html","bda78b918c8c387f87e36600b2ab21eb"],["/appleOS的Networking示例/index.html","203b4bf062bfe5dd1209d81836f74ed6"],["/archives/2020/04/index.html","6d4d6cc9cd9a56b22f9038926c1bb244"],["/archives/2020/04/page/2/index.html","643fd90691e065a3fc9a9d4d9c2dc0c2"],["/archives/2020/04/page/3/index.html","093f9e12687a2819656cb4a90ecc4897"],["/archives/2020/04/page/4/index.html","060e57a89246ba46650f557da4782772"],["/archives/2020/04/page/5/index.html","3d83fc63dd2e99412b4e88c6bb3f057f"],["/archives/2020/04/page/6/index.html","2c8db13dd311c34d64ff3fb39e5f1ffb"],["/archives/2020/04/page/7/index.html","48d3b1ca0d1ccab077c74f64f160c6b1"],["/archives/2020/04/page/8/index.html","26e81364877d761df4c24da033c10f2a"],["/archives/2020/05/index.html","dea0eec538b283938a1253d78efca851"],["/archives/2020/index.html","2488410aaa7f3204e8ff4fdcd39d5048"],["/archives/2020/page/2/index.html","648461b1170d0685c54aea064f05e70e"],["/archives/2020/page/3/index.html","c67d1f6eb0dda7cfb24086feb09923f1"],["/archives/2020/page/4/index.html","5a4188b586ca487e8f7901ae389c93b6"],["/archives/2020/page/5/index.html","39891a46038f54438e7cf749f3508d82"],["/archives/2020/page/6/index.html","d4114b1ba50af59ba245e1dee224a535"],["/archives/2020/page/7/index.html","d7b21323dd9d5a508cecec02029e5cdb"],["/archives/2020/page/8/index.html","9a68f6a985056634a6014fec3d6e8b6d"],["/archives/2020/page/9/index.html","61096e563779de8937a6a81d9e7f5828"],["/archives/index.html","860f266675d1f6aa812d365fb26588b2"],["/archives/page/2/index.html","e74744908ef18285f89ed41d8599926b"],["/archives/page/3/index.html","6057a30ba2f99b0d98c04ed9e05648d3"],["/archives/page/4/index.html","040c4c85323c070ee8f84c2ea317805c"],["/archives/page/5/index.html","5d186a3a5cebc3e04bd981df80367ba6"],["/archives/page/6/index.html","5eb7c7c624f46bd66ac7d1cac0002f6f"],["/archives/page/7/index.html","6ec150a536376294e19e1530b1454bc3"],["/archives/page/8/index.html","4bb3aeaadc2b562738508994aa74a27f"],["/archives/page/9/index.html","ca6274afb74c5a2e9893f0fe4d6bafeb"],["/categories/Advanced-Swift/index.html","7e837481bfcde69211d22ec05596c83e"],["/categories/Codable-protocol/index.html","faa590146f4843bb6b5096664a985ad7"],["/categories/Combine-framework/index.html","9dd8d2281883d0778c3474c1ebe80526"],["/categories/Combine/index.html","df78336241bc528784b20955dc471211"],["/categories/Grand-Central-Dispatch/index.html","f7f03ad3e619b06ef9136cf2e36f0acb"],["/categories/Hexo/index.html","7cb03435f93cd6db6933ca383a0ef392"],["/categories/Promises/index.html","e57964ec8621c31c1b72d88ef0ee7254"],["/categories/Result-Type/index.html","9a468f63013dc9c17a592d85e6cd0749"],["/categories/Server/index.html","ba037321ddaa509035bbbc81824afd0f"],["/categories/Swift/index.html","934905d1043e3a2dcaa05290ccdea0f6"],["/categories/Swift/page/2/index.html","e39324327462dae8286abe3b0f0428d4"],["/categories/Swift/page/3/index.html","f28f826bf2011dff59de14c8da9fc6a9"],["/categories/Swift/page/4/index.html","fd45e231d2efe0cd93d363146daa6ea3"],["/categories/Swift/page/5/index.html","24e15ce849cdae95c06631d88b7960c8"],["/categories/Swift/page/6/index.html","237ae28da3653fe2cdc3db4ad46bcdab"],["/categories/Swift/page/7/index.html","66660a12ad4e8e947e3ac1a147f806d7"],["/categories/Swift/page/8/index.html","fb177a5cc4874823fcf3d10884fc8f84"],["/categories/Swift5-2/index.html","38c3721978db387ffe11b8712016fd1a"],["/categories/SwiftUI/index.html","eaeada06b5a23295fb5e2e02df127fe0"],["/categories/UICollectionView/index.html","46a922c9a13fec8f94547e31d3650be1"],["/categories/UIImagePickerController/index.html","c0f872bcc6fe026428097e6fb6c28bbd"],["/categories/UIKit/index.html","531711a83970f35f3ac5528dfddd566f"],["/categories/UIKit/page/2/index.html","0a08af594939ea011316ca83c693b7b7"],["/categories/UIKit/page/3/index.html","4a7789d3afb92201bf71eb33dff5c75b"],["/categories/UIKit/page/4/index.html","f7a00ab261221d1bebd9dd49dd3ae54a"],["/categories/UIKit/page/5/index.html","fa3f83ff85c94c882da7bc0dbc7a2af2"],["/categories/UITableView/index.html","2dd58cb6e69c83476ffaf17515f60df4"],["/categories/Ubuntu18-04/index.html","ca0f06b3df03029f6b80849f677ebbca"],["/categories/Ubuntu软件源/index.html","d50db2e2a1339f028a075286cc0648b8"],["/categories/Uniquely-identifying-views/index.html","d6633cc2662923cb28edfee6286d79f0"],["/categories/VIPER/index.html","dead597acb08e2e3b94b477f6ab64083"],["/categories/Vapor4-0/index.html","114c8b2315d3272a1bddf4167f5e73c5"],["/categories/Xcode/index.html","d1e1b068e1610bb88bf9eff6ea64ee78"],["/categories/appleOS-Networking/index.html","68b1a044e39d66fe035dd51a430a9625"],["/categories/enum/index.html","a628118e48017903311090bd9b9ebec1"],["/categories/iCloud/index.html","d0b6060bec8e31a095c69b08fe55b5b5"],["/categories/iOS/index.html","40422da767e0c31d3496a34188064768"],["/categories/iOS/page/2/index.html","4f6bf4c48ddb1a0e8f32bdc6bab6337a"],["/categories/iOS/page/3/index.html","bb8c2210eac9d5fdd3a6aa52e873b335"],["/categories/iOS/page/4/index.html","822fd1a0a512e021c2f3739b739f584b"],["/categories/iOS/page/5/index.html","43637bf5956144605453670c085f2ab5"],["/categories/iOS/page/6/index.html","a7fafe988be93297db29854d0b9ae778"],["/categories/iOS/page/7/index.html","5d44a97aeb53a2f6f26d7905b609d76e"],["/categories/iOS/page/8/index.html","39c58f242254003ebf8c60d6b3181577"],["/categories/index.html","2e1fe5ddd35f65ea4bdf45d9ad06ba42"],["/categories/random/index.html","caa59f995d4b6ebd93fad939f28c4929"],["/categories/三方类库/index.html","96df50e1a4e6e592edc6bb07896c676f"],["/categories/函数式编程/index.html","4dec0db86a512acfbe08691c620c0d1a"],["/categories/子类化样式/index.html","b9d8439b96d4731a7e6079e42cb6c2ed"],["/categories/架构设计/index.html","e5ca80ae5d3c777b7500cf100df03197"],["/categories/用户体验/index.html","d61f31a307adabb4bc86c52894f7a16f"],["/categories/设计模式/index.html","13c77b9ba68b9a219aa2b6cd99c82b42"],["/categories/设计模式/page/2/index.html","36c6eb4c2ff6dd0eee762d3babf92c47"],["/categories/设计模式/page/3/index.html","bbbc898d30808773a03740f26cee441c"],["/css/main.css","9b22f6166167ac1567fea587c8936209"],["/hello-world/index.html","787c17a5253702f65d25c0828e14ce6f"],["/iOS VIPER架构深入实践/index.html","6c96ef31a6733679d5b2beeb8995c738"],["/iOS 自定义视图，输入表单和错误提示/index.html","94a73c4c683fd76824fbb0251ef70065"],["/iOS如何使用iCloud文档？/index.html","54f447075316e3bb5dc27b94c4c86c72"],["/iOS子类化样式/index.html","67f6180774e6dca0b6a138199de07417"],["/iOS自动化布局编程/index.html","eeb2d8e612c214ada52f307c95af2bbb"],["/iOS自定义转场(By Swift)/index.html","84fb95753aa06aca2559217db65567ee"],["/iOS项目架构：使用VIPER/index.html","b3db702f8cea5fd110e4f28aa4ea7846"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2675983b4e1a7e4f6afaaef3196080ca"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","629f0c40a744251c3b54f85dc5b94448"],["/page/3/index.html","23c7a408bda52fc2a3a8ad64b8c8e5f8"],["/page/4/index.html","7ba8f87c525fd87742eead517778821a"],["/page/5/index.html","05398ba85ede329fff417a60651ca97c"],["/page/6/index.html","56aae0aede0ea9656a1972d95f2cca67"],["/page/7/index.html","306db7386076a6318b289f9826fb1966"],["/page/8/index.html","d192d4b8f1e4e7bc43e68799d30318f7"],["/page/9/index.html","630f7541efc3bff5a06e0e875a80d8e7"],["/schedule/index.html","4e7525e3b149ffc2c14dc6ab3eef9c33"],["/sw-register.js","512251a907b28846fd4faaac1876fafe"],["/tags/Advanced-Swift/index.html","94f7f020c5647e0cd67a31129df355a4"],["/tags/Codable-protocol/index.html","c9468d29234ea5e7d37f96ea67a98edd"],["/tags/Collection/index.html","756cf486cea8c14a91f782fc348e3ad2"],["/tags/Collections/index.html","85dc989b41724e57215fa25b618c3b31"],["/tags/Combine-framework/index.html","f12540bdd2d860c587c3dd8dc60b5904"],["/tags/Combine/index.html","85e8c65288997e19499ab7d50c9b659c"],["/tags/Dependency-Injection/index.html","75f0bc079b809f54f39ddb9f20fc0f71"],["/tags/Grand-Central-Dispatch/index.html","86e4f7e444b0cf12f93f0074f91be012"],["/tags/Modules-And-Hooks/index.html","fdb5be374e0013990c8f7dd60c8a44aa"],["/tags/Promises/index.html","2b8c08419832d2464b39c6aa5a5b3acd"],["/tags/Result-Type/index.html","78c9bc63434fb3fa5564240f54fb49d6"],["/tags/Server/index.html","337ca3e5b7a1ef161d79cfa450e7252e"],["/tags/Swift-Package-Manager/index.html","90183230a0075bfa10df07aec7991de1"],["/tags/Swift/index.html","9998a42c97afe7558a6daf8980260657"],["/tags/Swift/page/2/index.html","56c4febf995cccee65623599b60334f8"],["/tags/Swift/page/3/index.html","f9265fe24d21e1625a96dd35f482ad87"],["/tags/Swift/page/4/index.html","4b672483e78d4c9fa7128d4396cf9fa4"],["/tags/Swift/page/5/index.html","3095607871ae33056a1d1d83a7b1ea23"],["/tags/Swift/page/6/index.html","55e929226df5973dccc40253ef18b19d"],["/tags/Swift/page/7/index.html","c2f5370c54f8ab85f36e795870ee29e8"],["/tags/Swift/page/8/index.html","0f1e7e10ce0d3fad60753bd203779869"],["/tags/SwiftUI/index.html","99f7bcb12a897f2ab922dad3d5510dc2"],["/tags/UICollectionView/index.html","452e270eba9933b8e9c5d7a10d358a1f"],["/tags/UIColor/index.html","f482174649dbba04af63d9e06573c678"],["/tags/UIImagePickerController/index.html","74334ae21ad44636de05d698976d1db3"],["/tags/UIKit/index.html","7889797a20e83b52c6eb29e99693cd57"],["/tags/UIKit/page/2/index.html","2abe66d7ee5d8bb823b2853353f435a3"],["/tags/UIKit/page/3/index.html","375175f43b599336d6f59b7c0d4ca8fb"],["/tags/UIKit/page/4/index.html","b12535eac853c36f1e2dbd0a6ddfc5ac"],["/tags/UIKit/page/5/index.html","0a8bab823df87b334bd83ef9bbfcecc8"],["/tags/UITableView/index.html","601c46922aedaf08194b747671fc9c90"],["/tags/Ubuntu/index.html","76119e16c857ce614cdda63c68021a76"],["/tags/Uniquely-identifying-views/index.html","038f98dc4c81691358090db8fb38c0b3"],["/tags/VIPER/index.html","29144dafae25d85ef9568bad68f2604b"],["/tags/VMware/index.html","18ccad8359a21bb63858abba065ed575"],["/tags/Xcode/index.html","e201839a1bb052da033e0db29ff67b2d"],["/tags/appleOS-Networking/index.html","2d181db14079bd5a2e88b9f2d0bd9ccd"],["/tags/enum/index.html","71906c09c5542e540b02570989a71439"],["/tags/iCloud/index.html","f2b43d4886cd98763e6049da363911e9"],["/tags/iOS/index.html","bc4b3c74e24c272892cc9dab378a937d"],["/tags/iOS/page/2/index.html","5370ba6a7aea10cd62016abaa7b41220"],["/tags/iOS/page/3/index.html","66faa561b5ac99df6ae53c10847fd38e"],["/tags/iOS/page/4/index.html","206330c1849ec8fa7b4430abfc7233fe"],["/tags/iOS/page/5/index.html","21ea46821a04aad9dbc3a26bce2fb5ba"],["/tags/iOS/page/6/index.html","bb54f14d2818d30cc467d8d002719d51"],["/tags/iOS/page/7/index.html","155f16ddbdb8b2c21fd83f930d9594e0"],["/tags/iOS/page/8/index.html","b7cbcd34266a4d69fd437610db263bfb"],["/tags/index.html","deca8954550d5f06072665b7c76186dc"],["/tags/non-optional/index.html","e132d20cfdda1e5c18c11b094b540636"],["/tags/optionals/index.html","f62ffa0f7cab8f5b3048241b7e91202d"],["/tags/random/index.html","41201bd947d9b2e16ab3e5bb71a530af"],["/tags/transition/index.html","93b6a1184a988db8100d106c86fca802"],["/tags/三方类库/index.html","5d14dc6d6f51e5d8cca8fc0f608f91ab"],["/tags/依赖注入设计模式/index.html","084334e45249bf1a7c451b64114f7fb3"],["/tags/函数式编程/index.html","8f9bc75c5758a91fb91d534067b7aff9"],["/tags/初始化模式/index.html","4c55bcab57bad1369523d11e9fbc60eb"],["/tags/单例模式/index.html","725442dc79976b36d62f611a0fadea4a"],["/tags/原型设计模式/index.html","3adc3090c2b11d045c75be421d75c45b"],["/tags/命令设计模式/index.html","73b41ec693a2cf1392d5a543407672b1"],["/tags/外观设计模式/index.html","2e255256aa6995a119a170a4c9492ab0"],["/tags/委托设计模式/index.html","e67e482f51a74196e6db166b812d5b5e"],["/tags/子类化样式/index.html","a0ffadc95b0ad7a4fc438cf1b79cdf75"],["/tags/对象池设计模式/index.html","04148ac0ebe696c4730afd2654005aa1"],["/tags/工厂方法设计模式/index.html","e890904ac93985127e75454f845ca6af"],["/tags/工厂模式/index.html","b02577a81f2c824ccb07fa0e15258c18"],["/tags/工厂设计模式/index.html","eac654dcbf9e8dd2fd4cc7e6f683ab1c"],["/tags/懒加载模式/index.html","ccb5b835b29c1e9532b06734d06a3fbc"],["/tags/抽象工厂设计模式/index.html","6fa86feec38f480511d4180557c80c99"],["/tags/构造函数/index.html","b218bee0a3994afdd3cdaad9db0ddb3e"],["/tags/架构设计/index.html","a98405b413535bb9e2db007b7194e8a1"],["/tags/生成器模式/index.html","44009bb404ac3e9e7d7bcd25a5efb674"],["/tags/用户体验/index.html","c9df6ca2616553b4766f76bbd7f8681e"],["/tags/自动化布局/index.html","dc5c173342959f55bc0304fb9d25fd47"],["/tags/自定义UIView/index.html","fd4c105cfbc55f339377c0c1e68f058c"],["/tags/自定义转场/index.html","af02c4e36c0e4d5a5d2b11d2f80dc913"],["/tags/自适应布局/index.html","448cbbab0b9de77c4395c723ee6a4bab"],["/tags/设计模式/index.html","b75a3ee6d2023d701743349b3c91d7cd"],["/tags/设计模式/page/2/index.html","baf70ae811239ec80346166486d4e751"],["/tags/设计模式/page/3/index.html","5c6417c923acb22a62988962a4cdd408"],["/tags/迭代器设计模式/index.html","99a5f7d22a9c537e8b2aceb509d924e1"],["/tags/适配器设计模式/index.html","ed99340f8dd8055b0d51658f9a699ab5"],["/tags/静态工厂方法/index.html","f91271dca9a28ddd36b7e1acf7a4a45d"],["/为iOS应用构建输入表单/index.html","4f9f4713b28c2859b1bcd9d118e30c1f"],["/产品开发的幕后花絮/index.html","f434dd3b02b3b336bfe067499f416edf"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","5597e51918eb6f7e8f975d73f1b9607b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","674e4a133702a20fd629015dcb54f6b4"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","feba64aeadbfce47bdf7feaa75449ac8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4a75dd22f74316c96cde61834026564a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f3ffb78c6460012dc414aa5659d09365"],["/在Swift中创建自定义集合/index.html","28afbee026306596faac5f059aa413b4"],["/在Swift中处理非可选选项/index.html","5ae52e22d543977563798d8126d0540c"],["/在Swift中生成随机数/index.html","0d14d4bd9a51dcbdc215a70b3025700f"],["/在Swift中重构单例模式用法/index.html","095df9d11c9093f0febf032fe6ce03f4"],["/如何为VIPER编写服务？/index.html","1391c86654a8e951a48a4bbe55d48bc4"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","0b47ce7669d8e9a15f0bbce3a50043a8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","23f8ec3293a5729751a2040ad2217cd6"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1d7ba29470c7db5b22e59fc3e2be3249"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c7c88a1cc350bbe0129e79f3ecec85c0"],["/掌握VIPER架构/index.html","ac1738e898a58b97a2eda302b089e3c6"],["/揭秘 WordPress Hook 系统/index.html","506fe1145a21b022e1ca199a4ea6d4d1"],["/比较工厂设计模式/index.html","c418758a656096ffc30e2fc8b39ccfde"],["/深入了解Swift中的Grand Central Dispatch/index.html","9e75cbeb393b363267e0bb6e8746104f"],["/深入研究Swift框架/index.html","176cf9491e3127cd8107075efa2ff09a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","3367818741efc9016351c04416091013"],["/选择Swift而不是Objective-C的5个理由/index.html","2a3a8b7e6acd3770277620ac41cdadff"]];
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
