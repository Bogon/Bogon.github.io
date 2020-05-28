/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","38b17f42e71ebf9b3f2408c942f8673a"],["/2020年iOS面试题总结(三)/index.html","90cfd25c2e11e4fde592d197f1a7b242"],["/2020年iOS面试题总结(二)/index.html","7810830706d8be11a6c0817040a0236e"],["/Advanced Swift系列(一): Swift 简介/index.html","29f5cb7323feb2eacab6f0ac0524fa66"],["/Advanced Swift系列(七): Strings/index.html","9fb845d1cc12331a1dfe0cf63f7b2ea2"],["/Advanced Swift系列(三):  Optionals/index.html","035423767a8fb9154c9d5f8af1c0a34b"],["/Advanced Swift系列(九): Protocols/index.html","e4b2994ec22ba81bd69489dc37c0304f"],["/Advanced Swift系列(二): Build-in Collections/index.html","29e35abfbe4b10b3a51c8a6edbf5df3f"],["/Advanced Swift系列(五): Structs and Classes/index.html","abf6f25f4f7d5eb8b6e015eda5c9d803"],["/Advanced Swift系列(八): Generics/index.html","a5186fa1fb27ad0f7be0eeff2507c5c9"],["/Advanced Swift系列(六):  Enums/index.html","0e2f8fa688c30f9697c094a8dd6344e0"],["/Advanced Swift系列(十): Collection Protocols/index.html","1d7da573bc4e2ac815e4dc025ee9725c"],["/Advanced Swift系列(十一): Error Handling/index.html","8796123d23c358bb1e4dbcc4939231c2"],["/Advanced Swift系列(十三): Interoperability/index.html","7d9e3524f6448f9b10b8c896aa722ce7"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a4c0b3b9653aa76954051346389b5d5d"],["/Advanced Swift系列(四):  Functions/index.html","033590d36e1741f4199d819a88a612e9"],["/App Architecture系列(一):  简介/index.html","d5d34e152f7eb0d8ebfb8f7ec1a0ca3d"],["/Functional Swift 初探/index.html","927b3ce9d5ede36765cc0c4d23e401f9"],["/NSCODER和SWIFT初始化/index.html","ab560d631fcb064a76da198056d98666"],["/Swift 5使用UIImagePickerController拾取图像/index.html","94b9777e47702aadcee4217affce673a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8ce7899fcdf83badef9e435062b64893"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","6250010d5c87fa2b695ec1b17ed61e25"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","70c6a37ffd99113dac92d3f0c2e103f3"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a2eb39822be2cda80681ac6e2c005044"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","98003c71d577cbf80986ae508b24f8cb"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","98b505e35a154368b2fdc596f0c3c4a8"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","5d8048f782c7f8f4c4e7ca88f6d1e550"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","581ac8b2f37da4b776aca9f60c4e0825"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","5537c9e063e5f267d5828b939eaa3dd9"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","dd86c71c7beb50f69451a96970d6134b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","337ec0bc204890341d00033de4ad3859"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","9787ea2c1097f6065c8957147d64d832"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","53c2ff546b0c7b85907595656ead1218"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","6f976a4f33d5b40c1092b38b8eac9ed5"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","28a3081f6545b1cfcf58096fee3aa632"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","3ca45d421b63aa7a669d71e4cc860302"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","859e2be0ed1d3dadf4a46e0fe44778e6"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","6695804ed42dfe3a38d97442332a3399"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","30b27a4688f8ef8143acf82c3bc84bbb"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","a30e78a3502dcdddaaf5e484b8c2e3f7"],["/Swift CompactMap vs flatMap：差异说明/index.html","a690179d9d7c73f77efe2675e31f4dba"],["/Swift Grand Central Dispatch 深入实践/index.html","93a3468c58673ef38e32e5369144e2e1"],["/Swift Lazy属性初始化/index.html","ec6cfd12a86840d30bb3edc19732767f"],["/Swift Promises 初体验/index.html","a30fc17ec58f2043f273abfa7cdcdb4d"],["/Swift Promises 探究/index.html","1bbf0c5340330a93857e113276b29394"],["/Swift UICollectionView使用指南/index.html","730132a478bf67df6da0041986fb415e"],["/Swift URLSession 和 Combine framework/index.html","e5dd5e4cb57661f8d860269494a358c8"],["/Swift 唯一识别的视图/index.html","07349a827afc3aa3823538a828d1f353"],["/Swift 如何学习现代UIKit？/index.html","200ae5bfbe0ed72821c870493ac643b3"],["/Swift 用 compactMap 替换 flatMap/index.html","e1372e91a8d7f73fb2bfd380f822d19a"],["/Swift 选择和播放视频/index.html","56eff803e7ee9ffb1cbfd3f58bb86174"],["/Swift中UIColor最佳实践/index.html","4eecc65b2c0ae7da794ec1dcb17193cb"],["/Swift中快速简单的工厂设计模式/index.html","581a104e9494604663e49b5410edb75d"],["/Swift中构造函数与静态工厂方法的比较/index.html","130ae24414f8dfc5c41849a66c449575"],["/Swift中的UITableView教程/index.html","dc7b3c2a832f341cd43fc035b0b039e8"],["/Swift中的懒加载模式/index.html","7163dfa5b2acc9e267385c01e60e5158"],["/Swift中的模块和挂钩/index.html","543f49814fde1e3257c053b9a71d5252"],["/Swift使用布局锚点添加约束/index.html","43192c1c106be0ee1aaf7309160f0178"],["/Swift依赖注入设计模式/index.html","2540d60c10f4bd0c2b37cc1bd26dc1a3"],["/Swift关于Dependency Injection (DI)/index.html","006f746fe786911ad0c79c66b967b7a5"],["/Swift初始化模式/index.html","7c441e56dd7e7571cc8b745ec3023a96"],["/Swift单例模式/index.html","47cb575ccfe8b4547949f944260bd531"],["/Swift原型设计模式/index.html","eadc26272be485b8cac7d49c1fdb727f"],["/Swift命令设计模式/index.html","9ae09260b31090ca77496770aaece715"],["/Swift外观设计模式/index.html","0f441f9e138a3ae87c914b159df9f64b"],["/Swift委托设计模式/index.html","95c96e4f2f7929fb2b20f3e54cff9055"],["/Swift对象池设计模式/index.html","3203d91adf06442cce46c449b5b4c8cd"],["/Swift工厂方法设计模式/index.html","78b4f95a04e399c507135fc09943ccb4"],["/Swift带闭包的懒惰初始化/index.html","4722da277d65700706881a82ea792478"],["/Swift抽象工厂设计模式/index.html","08d77c69c439eb2fd450a1a9440e5897"],["/Swift掌握iOS自动布局锚点/index.html","78fe387dc3fc3499150dcda355575995"],["/Swift支持旋转的自适应单元格/index.html","8f99e7eca7c6ae39e957c07d6d62d4cc"],["/Swift枚举值/index.html","f34769ccf11de119e0c8b1a591a3ee6b"],["/Swift生成器模式/index.html","39d34df26bdf1009d14f894cee116bfd"],["/Swift结合Xib文件自定义UIView/index.html","92a1881a587748d26b0ea4e0cb57d127"],["/Swift编写的20个iOS库(一)/index.html","ea21665409f79d53090fcfd668648c17"],["/Swift迭代器设计模式/index.html","e04744a2cda493af6a57b3a57584279b"],["/Swift适配器设计模式/index.html","4c526572e2649bf9ff811d3cafa7bb00"],["/Swift静态工厂设计模式/index.html","8675a5d728c83fb985fb137cec991955"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1ed86ccc267e83e2d0a595f0a3292613"],["/UICollectionView data source and delegates/index.html","955e7e4c4be08b30102f0b71f6509dac"],["/UIKit初始化模式/index.html","35d3b1f30a24b8650744b70e41a94786"],["/Ubuntu18.04替换国内源/index.html","b8e872bfbe8a36eb5a8cd2d36c381a37"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e62c35a6a879fe0f854a4334241982ff"],["/Xcode扩展/index.html","2c941f06b5a92d22235d2a3acfb8a9f2"],["/about/index.html","da574bda46c566362f3976331ea3893b"],["/appleOS的Networking示例/index.html","e99c742c9163d949b9ab766ba4976c32"],["/archives/2020/04/index.html","19b7a2ead9b7b9d0bc88afdd399add79"],["/archives/2020/04/page/2/index.html","84a77c554d507ecd346a1f47a75afa54"],["/archives/2020/04/page/3/index.html","7fa6adaddbbd788ccfd711f2f008bb7f"],["/archives/2020/04/page/4/index.html","563be71a9c92f3922ae5bd1762bb76b7"],["/archives/2020/04/page/5/index.html","d51378267a4a4ae2d50e80e7cf9f855e"],["/archives/2020/04/page/6/index.html","6229541792ca40776c9391a6ad4e9b61"],["/archives/2020/04/page/7/index.html","d308045262d8155488bdc0bb5a351b85"],["/archives/2020/04/page/8/index.html","b28a72dcd26fd278383731ad355a199b"],["/archives/2020/05/index.html","cc254f600dd181103d6297bef0a0dc38"],["/archives/2020/05/page/2/index.html","7a38f13f9eaab25baf7b5f3a1c1aaaf5"],["/archives/2020/05/page/3/index.html","a8c9ea82119d20323fa6df4209c5cc02"],["/archives/2020/05/page/4/index.html","43a59c25abe062705585a05bae4222cf"],["/archives/2020/05/page/5/index.html","18bd169dea2a4c48de5cc8f91c863b63"],["/archives/2020/index.html","c25c390808aa66b2aa5efd47204dd2a8"],["/archives/2020/page/10/index.html","96869518a1feef4fa7ebc6c767728498"],["/archives/2020/page/11/index.html","0a6d033387675983453eaf4945934b13"],["/archives/2020/page/12/index.html","6171d85d438e88f1765af73b34df7e21"],["/archives/2020/page/2/index.html","80454d4abe1a4fce0bf4cebfdff42d9b"],["/archives/2020/page/3/index.html","06de772b401e1dcfd35073543bf7bdd2"],["/archives/2020/page/4/index.html","4d257630c481fbc82f4181ef62e490c1"],["/archives/2020/page/5/index.html","d1c3ebbb1f7d86cb717215ab8503c23a"],["/archives/2020/page/6/index.html","dc3bd8769f4cc103bbb6bbc6380ac601"],["/archives/2020/page/7/index.html","b2f24765871c5cc1c33ae995a00ecc79"],["/archives/2020/page/8/index.html","cff2f127df7a4e8610539f09625cdb38"],["/archives/2020/page/9/index.html","ca765acdb75d16717b29c0149eb2ad69"],["/archives/index.html","c520ac0be68128da8ab73af9db888d1f"],["/archives/page/10/index.html","81a8b2749ac497b5523e7fe9d8bf21d9"],["/archives/page/11/index.html","c94d5972b7934a88fc794b2c397c6bbb"],["/archives/page/12/index.html","664c65cff359d2ee2cb751c29dfc980a"],["/archives/page/2/index.html","173783b309be1047941959b5b6401c18"],["/archives/page/3/index.html","d706b491b0bf77ff350ee45bf9b6810a"],["/archives/page/4/index.html","17532f0327ea617f47669b87ee54c532"],["/archives/page/5/index.html","04cb32f9a3bb6a634513534c1d7f5b3c"],["/archives/page/6/index.html","1f26d7acb72e3831e2fcfd78ebd5eff6"],["/archives/page/7/index.html","95725f5d65e50ab59306c7f117688b4b"],["/archives/page/8/index.html","6e9b5eb83d8eec928ef3e756183b439a"],["/archives/page/9/index.html","36d823799fe403ad1f14e0f31752158e"],["/categories/Advanced-Swift/index.html","f317a972cc54f716fe74e29fd5d5ea8f"],["/categories/Advanced-Swift/page/2/index.html","4c8510cbd4f434fa47671c7903b9a903"],["/categories/App-Architecture/index.html","4f5918cbecfcb46fb8858d43f344cb61"],["/categories/Codable-protocol/index.html","b759be7496338b7d635733956f37c69c"],["/categories/Combine-framework/index.html","a5a9e2d77c5d51ceddd96f6c1f149fa5"],["/categories/Combine/index.html","94a58757602c925c0d5e141f22f52eee"],["/categories/Grand-Central-Dispatch/index.html","89c1581b156d57ed1db9f8e988441493"],["/categories/Hexo/index.html","a7b932998cadf23727cdd06f2239c6b4"],["/categories/Promises/index.html","2526e218a51710f3c57588defbfbfa3f"],["/categories/Result-Type/index.html","e4417f0eadd410cad3eeb07227376d90"],["/categories/Server/index.html","7ec38d4fffc2a9e570af973466319cfc"],["/categories/Swift-Apprentice/index.html","03758f83bf909442524da8b029cdf792"],["/categories/Swift-Apprentice/page/2/index.html","fafa07e870007aa570ad900c9e0ac295"],["/categories/Swift/index.html","d0bb1741d96278aa639dcf414f0ffedb"],["/categories/Swift/page/10/index.html","1ce0819fc094a18c8230e93ca572c37b"],["/categories/Swift/page/11/index.html","139f65e5fda5679822aa6b7976f0040a"],["/categories/Swift/page/12/index.html","21d23353a78bac0e6e0c1b316c621d42"],["/categories/Swift/page/2/index.html","201f30f321d5d153e500fb08efb4c3cd"],["/categories/Swift/page/3/index.html","882887be0d23eb169007196433902521"],["/categories/Swift/page/4/index.html","2951962f4958b0b4302cc309b90a3ae1"],["/categories/Swift/page/5/index.html","04de00295cf601239e58a74113aa9d6c"],["/categories/Swift/page/6/index.html","1c90a4b3550d8e96f6db0a48f86a7d0d"],["/categories/Swift/page/7/index.html","888303ce63ed6c56ee3d4f105c4b8fa3"],["/categories/Swift/page/8/index.html","34c74410052e0a08201081b375a43680"],["/categories/Swift/page/9/index.html","c4047eee8136b948bd69f2380b80f1e7"],["/categories/Swift5-2/index.html","6122dbe8ab8b98584db90d95c64a6738"],["/categories/SwiftUI/index.html","c079a6755bd5266f9171b417f9fea5b1"],["/categories/UICollectionView/index.html","a025f16b5dfc8e4e6e54afb0b5c47908"],["/categories/UIImagePickerController/index.html","18f74d86e16c5543a51b550d8928d42b"],["/categories/UIKit/index.html","24fe4b856dee84eb985e4134fb4563ed"],["/categories/UIKit/page/2/index.html","e40dc20fbcaa885730542d0466963f31"],["/categories/UIKit/page/3/index.html","a92626b4b5ea3f89754116ee455044a4"],["/categories/UIKit/page/4/index.html","b3f1ca0d17c462e8aeb0d502085c717f"],["/categories/UIKit/page/5/index.html","d75ae2781f6af8bbd0ad5a6bd3ec68a0"],["/categories/UITableView/index.html","70c5fdfde7174d2bdd0166e23475c6f9"],["/categories/Ubuntu18-04/index.html","3ee7542185ed89f27bcb3c103ce2a1ac"],["/categories/Ubuntu软件源/index.html","0c89290f9d631f89e233778aee492e59"],["/categories/Uniquely-identifying-views/index.html","dc611367eafa0327eeed6d9a4405f601"],["/categories/VIPER/index.html","c2f022834acc12eb8702648ad5bb7a3d"],["/categories/Vapor4-0/index.html","6633b6510e93f86237f36ba4c4c8a99c"],["/categories/Xcode/index.html","518a5c80641a81a8b54a6e683ea07ece"],["/categories/appleOS-Networking/index.html","168925da5029f5427c21033a629cab57"],["/categories/enum/index.html","873056d537795ed5d60c77e0ffc7d076"],["/categories/iCloud/index.html","be1ee4a8ab100c59b2a7f713db63fb22"],["/categories/iOS/index.html","d2788049229aa64c20088f3d1a62dd03"],["/categories/iOS/page/10/index.html","c63199720a6152ea539430b24754d057"],["/categories/iOS/page/11/index.html","d4024950f0f5b75da8c838a51ca41462"],["/categories/iOS/page/12/index.html","fb6f83555c14200d67d4dd5e7f19bf4d"],["/categories/iOS/page/2/index.html","c8c781db3f5c09ac5849660bcd0adb3b"],["/categories/iOS/page/3/index.html","6263a4f2b48f42a5126c61529a93bb0c"],["/categories/iOS/page/4/index.html","ea847b52f5d82d29b87de7fff59c8406"],["/categories/iOS/page/5/index.html","d6e0f7f94a81c2e534db6c47fe35d0a7"],["/categories/iOS/page/6/index.html","08e9cad0786dd21ff3be9e88a88da7fb"],["/categories/iOS/page/7/index.html","f8d46be4de34de4165b9ab8a7e5f13d0"],["/categories/iOS/page/8/index.html","dd0cf2d5cf4e6b788799e9b000bd6e37"],["/categories/iOS/page/9/index.html","1ba2f46e370974870c88d01642d94357"],["/categories/iOS面试题/index.html","28d268f1b714627476976b5c4bc8db57"],["/categories/index.html","6c96583fc137418899effc761afa899e"],["/categories/random/index.html","6576df4f472a1ad7d8335be3488007c8"],["/categories/三方类库/index.html","1549c90116876b1bbd4cd68acebdd2fe"],["/categories/函数式编程/index.html","e855a2ed96709da3f0f501c3095b9a28"],["/categories/子类化样式/index.html","1b538abac8cdbafe582f0079701cafed"],["/categories/架构设计/index.html","f846990cd617f6c70c937c291ba3e777"],["/categories/用户体验/index.html","7dbc97f8a3b9909d8b0bff87f9748d94"],["/categories/设计模式/index.html","7795e5d432673f74e995fca7bf191b02"],["/categories/设计模式/page/2/index.html","1ced1c35c5cf20d82cc7e82d769b0481"],["/categories/设计模式/page/3/index.html","5246d78c1fe2083a5da9bedf6ae7510d"],["/css/main.css","fcafa919bd35fe39a441f083bf8acf0e"],["/hello-world/index.html","476fedfee2262a556167852c11823cc8"],["/iOS VIPER架构深入实践/index.html","dab2665b8826b7b6e46a9950b570d439"],["/iOS 自定义视图，输入表单和错误提示/index.html","36ba50d0b1533dc409d000e6d20ace1c"],["/iOS如何使用iCloud文档？/index.html","526697eaeed611fcd9d54ac2cde16593"],["/iOS子类化样式/index.html","0dc3e194b2ee4504927c348eb50c4218"],["/iOS自动化布局编程/index.html","d940d9eb2d077af916d6d55d24e20624"],["/iOS自定义转场(By Swift)/index.html","05514cc0f0795845f05ee2f66248d3e4"],["/iOS项目架构：使用VIPER/index.html","8a34d7ccc62edd0cdaabb27c1ec6d350"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","c02ff0949fb55d295605ab59c0655a11"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","f7902dcfe8d053dfe414ce4ac90c1df2"],["/page/11/index.html","cd0a32ee9aff88679a2ca49b4b85de12"],["/page/12/index.html","ad313f45a86aa261eaaedb1ec6ff6e07"],["/page/2/index.html","43afe0ae5a66e943e2d4a41469f10f6d"],["/page/3/index.html","14e5adc39409f50ff73179238cc9dbfd"],["/page/4/index.html","ec349e49624d981adbf62ab811b51a85"],["/page/5/index.html","7548c3ae24db758d514cb35e25d5b09b"],["/page/6/index.html","d58417c480fdc64c1247a2911476ad39"],["/page/7/index.html","cb774a6e51faa696fb7f88015a229522"],["/page/8/index.html","331b28aee57f801e024b94a8ca523afd"],["/page/9/index.html","c66487dd1d4a23bf9db5a72f112c9ad4"],["/schedule/index.html","80cc3956d28d77485f61e14c9514ca07"],["/sw-register.js","8ac881779e94ae4452ee94f56c37cc30"],["/tags/Advanced-Classes/index.html","82355addb5548d561cb29537bc93bb7c"],["/tags/Advanced-Swift/index.html","a97d2d12c089410832ade16b1d734f91"],["/tags/Advanced-Swift/page/2/index.html","adfd83199c9d0a8c894ec72641bc5cf6"],["/tags/App-Architecture/index.html","0bbb607b53696dfdde2d617d2a6967b4"],["/tags/Arrays-Dictionaries-Sets/index.html","89c7a49b61874c62c2772511c6050e73"],["/tags/Build-in-Collections/index.html","5174a3f20a0f8b47987ee353ad324bcd"],["/tags/Building-Your-Own-Types/index.html","042df3e1a576aa2bc8a56ccf5db978ec"],["/tags/Classes/index.html","fb478dd98fe035fc7f2e652c1811e14f"],["/tags/Codable-protocol/index.html","e389c32434feff676f4aea3afab7e55b"],["/tags/Collection-Iteration-with-Closures/index.html","ff97933796ed935ee1ee0533b472e10d"],["/tags/Collection-Protocols/index.html","70c7878f15b575d816441a58af9037b7"],["/tags/Collection-Types/index.html","55b57adb1d7bc3b9b31a203c2f4890a8"],["/tags/Collection/index.html","359f3105ea059ffdbf971fd71fe46ab9"],["/tags/Collections/index.html","62a1c58eca8e99f6e4106249acf554e3"],["/tags/Combine-framework/index.html","062a2d8ea507eaf1575144e7f5444133"],["/tags/Combine/index.html","41fbef4fd36658c1edf52a03ef3aeb8a"],["/tags/Dependency-Injection/index.html","2cba8d4ce45d99a8b945116042b2b270"],["/tags/Encoding-and-Decoding/index.html","c1f8adadbf03904bc2982dbc9c42b6e3"],["/tags/Enumerations/index.html","53fbd5fc6ed950721c9dd216b03e802b"],["/tags/Enums/index.html","dd0feeaa3c573d5198035ae57e6f0003"],["/tags/Error-Handling/index.html","054db8ede6e34ec9a85a72e8a351dae4"],["/tags/Functions/index.html","b0ee6609334a05bcd9cce721175cf387"],["/tags/Generics/index.html","dc7df1cffcfb6eea1166fd59618e5f67"],["/tags/Grand-Central-Dispatch/index.html","1d7e121673a0126bf03290762897c44d"],["/tags/Interoperability/index.html","b5faae056c6d527237e4bbc60197773d"],["/tags/Introduction/index.html","f6fca298898b4b69cf2849c66d2386a9"],["/tags/Methods/index.html","391d9f728cae34c6f66284386ecdfa97"],["/tags/Modules-And-Hooks/index.html","4c300049d5bdfa390cff236b56d04c9e"],["/tags/Optionals/index.html","acadd9b110c33c27b7716d64b832b9f1"],["/tags/Promises/index.html","855744528ba91dcf6f09051ed3c5c895"],["/tags/Properties/index.html","858103795ed960e2b3503aa2728e2761"],["/tags/Protocols/index.html","06210f3493d3aa6dae02f6f968e4f54e"],["/tags/Result-Type/index.html","2ac6f69e3434f87399f142565e3bea01"],["/tags/Server/index.html","f8758ca66736d056e2a58d7633054e7e"],["/tags/Strings/index.html","5c3559de2e8dad286799865af979e82b"],["/tags/Structs-and-Classes/index.html","67245de12a04da2b68adf93d3e22f76a"],["/tags/Structures/index.html","1c03cc452040f7a80e6ea64ebea52894"],["/tags/Swift-5-0/index.html","f8033a8cdd435315ce73edf5f53fc75a"],["/tags/Swift-5-0/page/2/index.html","60a277af6a52e968be5a3a77aa74bf47"],["/tags/Swift-5-0/page/3/index.html","5cda6781482a7f175ac3364f13bde098"],["/tags/Swift-5-0/page/4/index.html","27220b952e9117135e3defb2ea0891c8"],["/tags/Swift-Apprentice/index.html","fa1902c11bf1be674697b451e94b3624"],["/tags/Swift-Apprentice/page/2/index.html","b6ef66dfecc594f258ca078eb6f5b991"],["/tags/Swift-Package-Manager/index.html","af2e4da50cafa1e8365911830b98afc5"],["/tags/Swift/index.html","9f2a061c2f5f588fc77308918a23ebbc"],["/tags/Swift/page/10/index.html","d19c7d8301dfcb3f7ab1ec90857b2cec"],["/tags/Swift/page/11/index.html","cccc201d1f4ce21d4be7157a92c1c200"],["/tags/Swift/page/12/index.html","e102a2cf797eef32813dce2ec2629e69"],["/tags/Swift/page/2/index.html","636e794651ca46b01eb6894c099f662a"],["/tags/Swift/page/3/index.html","e3efc8453e78879c115d34d69b3c0f4b"],["/tags/Swift/page/4/index.html","3acec495de6231dad613a15380b64b73"],["/tags/Swift/page/5/index.html","4eaac119ec480be974e2577237e5376e"],["/tags/Swift/page/6/index.html","1ebf0ec562a55e3a1e455efc2b41016c"],["/tags/Swift/page/7/index.html","3b63dc182e45d879dba080ebce3288d4"],["/tags/Swift/page/8/index.html","2142688777eb873edb6b143bb1ae7698"],["/tags/Swift/page/9/index.html","0fd5297d4a4d2c2ded75788211ad5d1f"],["/tags/SwiftUI/index.html","1891fb12a10671cb7edfa4b23d6ef9cc"],["/tags/UICollectionView/index.html","1fc826ef6e35acc0b959a1ae04b4de9a"],["/tags/UIColor/index.html","ad61f0f76f3998268b76219122664ac0"],["/tags/UIImagePickerController/index.html","9214975ee0ac87d3765859d472962b07"],["/tags/UIKit/index.html","6fbb99e2d7b9912c28fb338f8ff3929e"],["/tags/UIKit/page/2/index.html","75fc4c6a470b87ace3f375d84b51205d"],["/tags/UIKit/page/3/index.html","7f32fddd262a56130b02f040b56ed149"],["/tags/UIKit/page/4/index.html","080af8d9603ccb4097472a4ab2f655a9"],["/tags/UIKit/page/5/index.html","4c15f53b8b74b0ef94e14d6caba8f880"],["/tags/UITableView/index.html","81d38ccc53d84390177bc5bc8d9525bf"],["/tags/Ubuntu/index.html","53f555717574701c6ffea6e2fe856c4d"],["/tags/Uniquely-identifying-views/index.html","cc6b1f6f5b506fc3221bbed75a35c8b4"],["/tags/VIPER/index.html","20aa11c5bfd0df90e641cbe470842cbb"],["/tags/VMware/index.html","b202fd2594fe689e4ac7469a8e5cd602"],["/tags/Xcode/index.html","6381240b010bb463ff7517fe6731e5d2"],["/tags/appleOS-Networking/index.html","e64ea7e5b3c21be89157ade3a11225e7"],["/tags/enum/index.html","7bf1b3cf191c9b7ee36b6010354b793a"],["/tags/iCloud/index.html","edeabfcf10bbb8b7fd127060b372727b"],["/tags/iOS/index.html","3252cdda038c1cff92e71045b10b0a06"],["/tags/iOS/page/10/index.html","1269f7a27a4797f09fabfd76c81d36be"],["/tags/iOS/page/11/index.html","a18de3262095800487759a302b7c89e4"],["/tags/iOS/page/12/index.html","6bd9f4ef4a3b3d55bd2bdcdfeab0a3e6"],["/tags/iOS/page/2/index.html","74c1b0d6db8b45ae7391af2d3bb0a629"],["/tags/iOS/page/3/index.html","7ae147f374a3ca04b8adc6f70cd2c2e5"],["/tags/iOS/page/4/index.html","bafa903c9bfd9136e8011bb0c3a54859"],["/tags/iOS/page/5/index.html","a5cabb4cc965d5c811430b2a5baa4915"],["/tags/iOS/page/6/index.html","2eae969f986488febd095266becd2505"],["/tags/iOS/page/7/index.html","29df7975f7d58d860bb3eb26e2b9badc"],["/tags/iOS/page/8/index.html","f0b8899bcbd448aa02bf9c51bea97b01"],["/tags/iOS/page/9/index.html","4d6bf4e51e17c7a873930d2191df0314"],["/tags/iOS面试题/index.html","39157ceb8d499665f6a504921c3635ce"],["/tags/index.html","ae16154bc3ffc487bfe1985fb92b0587"],["/tags/non-optional/index.html","f4968cd3f1ed1b612f927d8305236ed2"],["/tags/random/index.html","b06c521e9d475106483eefabebe69c0b"],["/tags/transition/index.html","01bca49e0362b709332194d9df2cec83"],["/tags/三方类库/index.html","42015e1558e7744b1758db49f7e608d7"],["/tags/依赖注入设计模式/index.html","d34427b316c4ce19bafc66a4ef6f6641"],["/tags/函数式编程/index.html","83b9dfdd839e6273819050183cd4e370"],["/tags/初始化模式/index.html","f32d0874daf7c6ce49d433febb917d1c"],["/tags/单例模式/index.html","c3cfef232afd2918fa854d3c35e6ec28"],["/tags/原型设计模式/index.html","806138ed6f14e8fb2edad0d39c04fae6"],["/tags/命令设计模式/index.html","5ed0d2b588e547b341ac75f5dac2f014"],["/tags/基本控制流/index.html","766d506c1ed333f819631a7aa2f71902"],["/tags/外观设计模式/index.html","221d8122c1f2c25c304cdaa98143b0ad"],["/tags/委托设计模式/index.html","de72bef5a2bce885a235ffae12f339ae"],["/tags/子类化样式/index.html","456cf1b1a0dccdb98bf1301a92670998"],["/tags/对象池设计模式/index.html","e04335af22c6a9bf896eac71f936bc6b"],["/tags/工厂方法设计模式/index.html","3b2347ddaab4a5a86adb162f33c9489f"],["/tags/工厂模式/index.html","63b0a40c0e124576eec8b3919fb8c5c7"],["/tags/工厂设计模式/index.html","900fa61dd42d1b56f4a96b67a2d2147f"],["/tags/懒加载模式/index.html","7de33ce721d793709f16a57d61cd911f"],["/tags/抽象工厂设计模式/index.html","9fc96a345b25d9f928386a1a2865c5ef"],["/tags/构造函数/index.html","44233356dd6c62f405f0d078e467fd96"],["/tags/架构设计/index.html","be013f20b7ff0b32b6392a14b0aa9c7b"],["/tags/生成器模式/index.html","649c9a6b5b6b53ecc5a19c13a90c49e8"],["/tags/用户体验/index.html","8182053d27130cbfd087532c8115d50a"],["/tags/类型与操作/index.html","f20fb446096b49386928666116572586"],["/tags/自动化布局/index.html","3201f78eb7844e1bf1fb2103167be1f0"],["/tags/自定义UIView/index.html","c8d5fcf4a2fb7ee15655c125d7c7aaf7"],["/tags/自定义转场/index.html","6d8cc287dfedf0822aa0e7f64b419928"],["/tags/自适应布局/index.html","36b8fd3c021289e91f3332bd35118a38"],["/tags/表达式、变量和常量/index.html","f0e61fef8561429911726c31573d04e7"],["/tags/设计模式/index.html","160c3c2d4aee55d1d419b18ca7ca1ac9"],["/tags/设计模式/page/2/index.html","6d7b9c094ffb123323694bc7fec5d6e2"],["/tags/设计模式/page/3/index.html","42e0d29630b23c4b35a91566df40b3a0"],["/tags/迭代器设计模式/index.html","ec714a14c0e9d8b3d58e888ef9939093"],["/tags/适配器设计模式/index.html","16aaa052cb321adc520bf65bdd87ba9b"],["/tags/静态工厂方法/index.html","01fb5ea13ce042e55194543e9a688ee3"],["/tags/高级主题/index.html","8f46f53e80979adcef152bb35744ee1f"],["/tags/高级控制流/index.html","ede871605eaa2f622c63bbdb680524c9"],["/为iOS应用构建输入表单/index.html","45db0014e32e7c66b4348cdb2581ad48"],["/产品开发的幕后花絮/index.html","af907b1b085fbaf1a6d1bf7acba7f2e2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","01685f32c0fa3503c27d012de1bd2cd7"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9f3264d4aa2e35912df97f4ec46461a3"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","eec227e6d55b97b508ef190233bfb014"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","02aa614b5ab67d2a6c5fbf454e3531e0"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","82fd7613c2c384cf2b6d2c5c3dd83fc0"],["/在Swift中创建自定义集合/index.html","d6fa5cbe76019fcd5d2cb4fc9489667d"],["/在Swift中处理非可选选项/index.html","4dda0497d1fb6b11a5520ca8b1c9f4e6"],["/在Swift中生成随机数/index.html","5b1b08c56b1e38e925282e395b4ea3a2"],["/在Swift中重构单例模式用法/index.html","3c543749f4540fb774b3d1cdfd424382"],["/如何为VIPER编写服务？/index.html","29a600d98430faef106eef8f40e77e58"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","faf1313cb2dcc09e6d9769f0e19b4206"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","5e146a48a6e256dd7e0bdc64669084a0"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a93d2c7e0116ab970dafb240b29c9908"],["/如何使用VIPER构建SwiftUI Apps？/index.html","d16d5e88d649493b85793852bbaf11be"],["/掌握VIPER架构/index.html","a85486f148f16d772bfc0d0925306223"],["/揭秘 WordPress Hook 系统/index.html","e1191699ab3f569ced90b23afd786abd"],["/比较工厂设计模式/index.html","c5fec8eaa47ac357a4b853124bf8a20d"],["/深入了解Swift中的Grand Central Dispatch/index.html","91098e25565f16a1a6a85eb4ca5a5292"],["/深入研究Swift框架/index.html","bc56198bd91164dd91dc4e104933a4d8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","17a4e5168493fca259029a75f09f996c"],["/选择Swift而不是Objective-C的5个理由/index.html","be44486f2a044426274ab5437d405f21"]];
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
