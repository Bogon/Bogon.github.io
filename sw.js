/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","5377aefa0eb20b8458ad628ed6a57e43"],["/2020年iOS面试题总结(二)/index.html","b70cc347bc7635f8df65ba24a7e672f7"],["/Advanced Swift系列(一): Swift 简介/index.html","085e7c6d84565b78a15f1f91545e046d"],["/Advanced Swift系列(七): Strings/index.html","cf9e8026bf4083630b817763164a192b"],["/Advanced Swift系列(三):  Optionals/index.html","c025f8ee936cea7c9e252d640be14f77"],["/Advanced Swift系列(九): Protocols/index.html","1b3cf336e73f63cf79c704012a0362d4"],["/Advanced Swift系列(二): Build-in Collections/index.html","d73ef81c763679446a788d0f89af3e64"],["/Advanced Swift系列(五): Structs and Classes/index.html","3c965664db10d8b3dd936db47475254f"],["/Advanced Swift系列(八): Generics/index.html","54a474e0ee71abe138525d2a458a6ade"],["/Advanced Swift系列(六):  Enums/index.html","fdde8016d62c83c8fb8ee5bc85a997a7"],["/Advanced Swift系列(十): Collection Protocols/index.html","634e71acf105b7159fc38ec520d79f99"],["/Advanced Swift系列(十一): Error Handling/index.html","104c9fea679fb06c04cbc7f9e446c970"],["/Advanced Swift系列(十三): Interoperability/index.html","4aa3a49459f74a9b3467eadd97623242"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","96ce88a0149ccd1f010d3908fc957eb9"],["/Advanced Swift系列(四):  Functions/index.html","f744ba9ef70f9e064f1b6c3ef0f10dad"],["/App Architecture系列(一):  简介/index.html","e6d062d77676e03f1cdbed18d3841ca1"],["/Functional Swift 初探/index.html","a8bf11e65578cc2e650c1f93eed62f2c"],["/NSCODER和SWIFT初始化/index.html","e04b94e3c1bcc0b2b7e56da38aae997f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","835efb806f3b2b189b365e766c610bc3"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c11fbec2407e7fc1ca843d8e32ff57fc"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","e9e63719d99e8d85879fe308f39422ea"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d54971e5eafc8dd03b6dde13bf77fd6b"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","9da4627d500eabe9e5d144198b828632"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","fd7c470c062f4ce3ca3cbec3845bf00c"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","fa36e195fd172206a46d179d9baf9c1c"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","f915af9e09f56c1242ab4b8002378c6b"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","006f1947ebfb394a1c368841a9777e16"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","25dbe6d618c487d703d62da1cd79e62b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","c63336c7869891496b25ecd0e2938897"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","d973345427f5c83a994e4c546e31a7b7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","63517a5e4dd31b2306fca7e799279bdd"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","10b106b18a18b1f5b3bce287bf0ca226"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","290fcc57251be4f26f980b35a39ec34f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","2956fc3a06cdffc8a5a67dd0eabc5b80"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","61c4b1b6ba26df0b3fed843f1989cd37"],["/Swift CompactMap vs flatMap：差异说明/index.html","41c1215b573c25ff1d0ddd652ff71400"],["/Swift Grand Central Dispatch 深入实践/index.html","276e6a6516a455554f4ecbe21fe24efa"],["/Swift Lazy属性初始化/index.html","ffe610ea70a38ff8d58c20469cc898a5"],["/Swift Promises 初体验/index.html","6b412d2ad5c69c452851b18458c59fa3"],["/Swift Promises 探究/index.html","b6d82e9d8e9a7a256ab1c9dfda2e3fc0"],["/Swift UICollectionView使用指南/index.html","d423ae8b8a6b6bde005a59facdb2fc76"],["/Swift URLSession 和 Combine framework/index.html","dc4e875174b41b7c824a2d13ab7750e7"],["/Swift 唯一识别的视图/index.html","9c4a7e8a2907a7ffee388e486c636202"],["/Swift 如何学习现代UIKit？/index.html","c206276dbd7050cbba6b46b299158f88"],["/Swift 用 compactMap 替换 flatMap/index.html","be6d4f7aafef554de547e916913723c7"],["/Swift 选择和播放视频/index.html","352a86d89456cd720864c095294de032"],["/Swift中UIColor最佳实践/index.html","b6527039fc420851f5663f837c5f9810"],["/Swift中快速简单的工厂设计模式/index.html","344c1b1fc134bf3bffba794d97dab5a8"],["/Swift中构造函数与静态工厂方法的比较/index.html","fd6de4520d0bf0525b20061287212838"],["/Swift中的UITableView教程/index.html","cc772803bc31464a767382e7478ae86d"],["/Swift中的懒加载模式/index.html","14266940813e5571594354ec3fe581cb"],["/Swift中的模块和挂钩/index.html","cdb3dcea2d9419f1bfc9a41265c90b77"],["/Swift使用布局锚点添加约束/index.html","7b5074e0755fe94b08037f45a06cbc06"],["/Swift依赖注入设计模式/index.html","e5f2d7c3b5e35d2f39e90e23eeb5fe33"],["/Swift关于Dependency Injection (DI)/index.html","0c96f2b59904d94efd60c6173e0dac78"],["/Swift初始化模式/index.html","79fa0ed16fc4eb924523d29ba0f7bd08"],["/Swift单例模式/index.html","86ae43cd4b7409f5060f0d032ef15ae6"],["/Swift原型设计模式/index.html","975372f268cea4874b397f41c2e96503"],["/Swift命令设计模式/index.html","a0a66bcc848036e2af8d759607017a50"],["/Swift外观设计模式/index.html","d488c146ebf5e54317f9f9399e3ed949"],["/Swift委托设计模式/index.html","c987aa7c70b95fca97b007f7290305cd"],["/Swift对象池设计模式/index.html","05213ca3773e91aa3717ac0bbc9adea7"],["/Swift工厂方法设计模式/index.html","0727fd6dfd46fb480f437d5859a0c308"],["/Swift带闭包的懒惰初始化/index.html","b1a7ba949f0b52e8e69e4e99498f0241"],["/Swift抽象工厂设计模式/index.html","a2a0cd5657f8c63da9fcfde91b3459d0"],["/Swift掌握iOS自动布局锚点/index.html","49503977e0f05228879a06b89878b1ed"],["/Swift支持旋转的自适应单元格/index.html","b2db7f71b78842839ecc409a47a336ea"],["/Swift枚举值/index.html","7961243b9864ac2b35d4d9fb0c131e7e"],["/Swift生成器模式/index.html","55dc9e2e297153afdf087fce879740e3"],["/Swift结合Xib文件自定义UIView/index.html","aa71f22c3314b3755d1df345cd88dd34"],["/Swift编写的20个iOS库(一)/index.html","696e9b832f579675ed4b3cdb0ea99d67"],["/Swift迭代器设计模式/index.html","7425971dd3deb2353607c2b96758dae6"],["/Swift适配器设计模式/index.html","5f154537c4b0672dfd3bf64e59ee5c6f"],["/Swift静态工厂设计模式/index.html","a9cb15060242d485dc5c003e5a0032c6"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","3f5f1e1afadc7b6855d3fbce4cac8cde"],["/UICollectionView data source and delegates/index.html","7071e676efc2e9f5b9091661afc9bccf"],["/UIKit初始化模式/index.html","677b84ad61c38adf00d9ee3714462f76"],["/Ubuntu18.04替换国内源/index.html","75e76468c5711695cfee517c11e086d6"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","99e7d1a6112823633ad3a35ebd189479"],["/Xcode扩展/index.html","9e901e121053bbabf20d7ebcb3559304"],["/about/index.html","07a0a8156984443038fcb038ef8385b7"],["/appleOS的Networking示例/index.html","0793002e110240b01847fd3de58c978b"],["/archives/2020/04/index.html","f0128b7ad1965582d988e34359c22de1"],["/archives/2020/04/page/2/index.html","852ca0269e69d6db97974294209bed4f"],["/archives/2020/04/page/3/index.html","bc0be6127fe45e11c498d957ad7a8f8e"],["/archives/2020/04/page/4/index.html","8f48a39c25a408e9adedfe8d6fc9aedc"],["/archives/2020/04/page/5/index.html","75801a5dc851f18cef1994937375d277"],["/archives/2020/04/page/6/index.html","27d0cdd51877ecb74d31f6dba06c8863"],["/archives/2020/04/page/7/index.html","a9fcd4456a761f20cccc97ea6ad961bc"],["/archives/2020/04/page/8/index.html","b199c20c4cb7b73a09163165b7da3e71"],["/archives/2020/05/index.html","b58f91aec42db8294417d22787e60a36"],["/archives/2020/05/page/2/index.html","273269c7f81c480f44b178114ac5ebbf"],["/archives/2020/05/page/3/index.html","6db587f05bf34ca2ff1a0bd3df2885b3"],["/archives/2020/05/page/4/index.html","383d0ead688e189456a8003ab69048f7"],["/archives/2020/index.html","b619589704fcdca4081f1c2d900b0bf4"],["/archives/2020/page/10/index.html","13026d4740c19204fe649b0807ed1bca"],["/archives/2020/page/11/index.html","4f42ad317ef558eaea875c003da894f3"],["/archives/2020/page/12/index.html","7d28e615ed519ba09eab0a2b44246167"],["/archives/2020/page/2/index.html","c8d0b66712fa31d83ced7deaab90ae78"],["/archives/2020/page/3/index.html","c4d6fce8ef38e112987851b43a6b7378"],["/archives/2020/page/4/index.html","b072e688abb41bf3e59ae9f446baa185"],["/archives/2020/page/5/index.html","7b73b343816a227f3bfc175e134927d6"],["/archives/2020/page/6/index.html","a49b13110dcbff323324538f6236c550"],["/archives/2020/page/7/index.html","487e92daa032e314406c8264b489d81a"],["/archives/2020/page/8/index.html","ffc8c731260ebe69bd97144cb31da49a"],["/archives/2020/page/9/index.html","f94ad8ff72f1346c74c1f09d39667a9c"],["/archives/index.html","f75935c9bd24d86ba237c4627b55aff9"],["/archives/page/10/index.html","35dc012fbab80c08d2a961eee825f653"],["/archives/page/11/index.html","d013607333142e4720d94df3802144d4"],["/archives/page/12/index.html","7e5d19de45cd27be3a521bf8538b3599"],["/archives/page/2/index.html","2e5ce93ab9fecf15abe6a5bc95349089"],["/archives/page/3/index.html","f11c2b217ec7464b096090fb1b342dd7"],["/archives/page/4/index.html","98b2ff4ac1939386844abfa79230c3b6"],["/archives/page/5/index.html","a80989a53bc43f4917895c3b83af8d7a"],["/archives/page/6/index.html","00bf7603e280baf0798bd49afd31e93b"],["/archives/page/7/index.html","c9f712103bf8aa67e48ce03ebb3048ba"],["/archives/page/8/index.html","ff1e507f002daf4e5365cdd8a9a506a8"],["/archives/page/9/index.html","da2ddfa51c2e4b3c22c9b7fcdc4faf1d"],["/categories/Advanced-Swift/index.html","ba495f73d16c628619a351fb111cedac"],["/categories/Advanced-Swift/page/2/index.html","b8cd3eee7ca4683f533dfe8cd831ed6b"],["/categories/App-Architecture/index.html","38557e3d8668800e7f8d6f676c4c818e"],["/categories/Codable-protocol/index.html","1398f06a6624f249dfeba91f4aec936e"],["/categories/Combine-framework/index.html","647972c7d2600de2bfa2ff9e0caa7a0c"],["/categories/Combine/index.html","b64365da67d078583c5ca6f46f655e01"],["/categories/Grand-Central-Dispatch/index.html","2e2985c42d8893b2a2ef8ddf7ceb6bd3"],["/categories/Hexo/index.html","6a229f066c5f20b6f3923cad1e7e8a5f"],["/categories/Promises/index.html","f812f89d3f192cc7d41be9f53e539b0a"],["/categories/Result-Type/index.html","0b94b922da42866f7c586b48317acf0f"],["/categories/Server/index.html","6200eb04a886a9da646b06405ba85b8b"],["/categories/Swift-Apprentice/index.html","35d0d2de9d239c931509f13522efd14c"],["/categories/Swift-Apprentice/page/2/index.html","557a29cea99a3bbe6b1620ee5630e29a"],["/categories/Swift/index.html","505bfb5116dbb4b43078d668cdd26abf"],["/categories/Swift/page/10/index.html","6417310359cef0da0baf68f2bf03e79d"],["/categories/Swift/page/11/index.html","4efd1adda31e20dc5465562b975ca917"],["/categories/Swift/page/2/index.html","f30e2e0fc71f88f05192511b45b501e7"],["/categories/Swift/page/3/index.html","b29a7f23d8509c21d3b416ecbe2c381e"],["/categories/Swift/page/4/index.html","a8948dd822a137234b1f968cb3a3b35f"],["/categories/Swift/page/5/index.html","237a0ab9b7d1f08bc3ab3a50fb71ba73"],["/categories/Swift/page/6/index.html","638297b47e2270558afbb647d86ad9be"],["/categories/Swift/page/7/index.html","f118b2fa7f6d9099641e2cd00100b970"],["/categories/Swift/page/8/index.html","e1691adab27f2d734d7a63e3e752969e"],["/categories/Swift/page/9/index.html","f664b3667a9144a989c4179c5f9ba4f2"],["/categories/Swift5-2/index.html","b928bd0edb2c88ffcc229f876abf9c22"],["/categories/SwiftUI/index.html","eb7ef71e21ff8fb0ef14de18922b628f"],["/categories/UICollectionView/index.html","4516e1b3b59d619b12c146c0cb138d35"],["/categories/UIImagePickerController/index.html","5ab7f654ec76b681c13e7093c0298a06"],["/categories/UIKit/index.html","be2d955db21fc1109169beb3268d9a5f"],["/categories/UIKit/page/2/index.html","b7cc7f42e55c94259d29dc875dfceb82"],["/categories/UIKit/page/3/index.html","7f0805cc874e3e11257e013cffc429df"],["/categories/UIKit/page/4/index.html","13d3bae58a7f17b15f8685e4a31f84d2"],["/categories/UIKit/page/5/index.html","8276dee24720bde936b6dba8fd8bd174"],["/categories/UITableView/index.html","922350911edc296d7432f9faee6522c7"],["/categories/Ubuntu18-04/index.html","3b613e91cc77b48f76d1b7ef1ce90f51"],["/categories/Ubuntu软件源/index.html","b560ac0bda05760ad8ed501ae6e3c493"],["/categories/Uniquely-identifying-views/index.html","6b0eb369bfa790b171eeeca5e90261a8"],["/categories/VIPER/index.html","ea4741278c78d5647fa2a6d0b76271e9"],["/categories/Vapor4-0/index.html","ea40150b152bc60548936cace299b049"],["/categories/Xcode/index.html","071062065da6f6bdcf938be16ce10ffd"],["/categories/appleOS-Networking/index.html","e805217a3d354dda9bc3da34bf6305e3"],["/categories/enum/index.html","59cc3fde522ebe488db82d08b6de9b84"],["/categories/iCloud/index.html","33c1d490b250ac87e10e7beee7b9c146"],["/categories/iOS/index.html","1dd0e54a9da4c92c1b3f4c19e954019c"],["/categories/iOS/page/10/index.html","5c2609e1e7250fb96efe492b6bde53f9"],["/categories/iOS/page/11/index.html","3fba689b7122be478a1bb465d33c6352"],["/categories/iOS/page/2/index.html","e539333a796255526c866e2d548c5916"],["/categories/iOS/page/3/index.html","d7710957e7c9c3f60c5268ff6c59bcc1"],["/categories/iOS/page/4/index.html","27473781719a798837e2261ec46882d7"],["/categories/iOS/page/5/index.html","1715461a27da1a284baeebed44747c32"],["/categories/iOS/page/6/index.html","001bb1797655f024a5401939e4c08e8b"],["/categories/iOS/page/7/index.html","dd11a3230aca5e9b5e442f6b43814cf7"],["/categories/iOS/page/8/index.html","8dc3dd048d959b43cb8e53e99fee5706"],["/categories/iOS/page/9/index.html","685188d0cb5d038f30eb9738e354befb"],["/categories/iOS面试题/index.html","b92ab402fc780e8b6395195ad30dddb7"],["/categories/index.html","cc18c2cfe7fbcfe451370ac8ad897e48"],["/categories/random/index.html","2d114cbcd3fb784900eec7e55b02eb0a"],["/categories/三方类库/index.html","eab648611a1c0005be837f8058a02fd2"],["/categories/函数式编程/index.html","2a031e96e24f337e331b83b716245505"],["/categories/子类化样式/index.html","89db01d9a8d114f5046af7bbdaee017d"],["/categories/架构设计/index.html","c5b5eec7f82bc1ca70216d18c9cd5484"],["/categories/用户体验/index.html","a615dfa06a9ecdd4be00bb1e4f702eca"],["/categories/设计模式/index.html","f67ad7d552b8300e59bff4fb9dd14424"],["/categories/设计模式/page/2/index.html","8faa2c9cf663bcb00d888c74afd747be"],["/categories/设计模式/page/3/index.html","da131de60c3efc8756ea1d051e4480be"],["/css/main.css","f32e762cdaf143be75b1d6fd13abd2ea"],["/hello-world/index.html","61ca7184d89b6b5539f9991a98afadb6"],["/iOS VIPER架构深入实践/index.html","e7d4975604bff9583674fa4251d63189"],["/iOS 自定义视图，输入表单和错误提示/index.html","fd336d256c3407ae2bfed7b95a1ea136"],["/iOS如何使用iCloud文档？/index.html","24d5ffbe26bd3e579d0ae20dec4f6c2a"],["/iOS子类化样式/index.html","af110b1447925f69f89ef75f2f7e1b5d"],["/iOS自动化布局编程/index.html","661d07408646e20b2505bbb330a46d08"],["/iOS自定义转场(By Swift)/index.html","e5f26fae0b68ee1cd7ba171c6f1a147b"],["/iOS项目架构：使用VIPER/index.html","565f854fb36d4b5ef4ede9764e0c1c91"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","597899c86a095c5eeb702a6f61b72c9b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","ff915693432e3a7b545389ae40b2b184"],["/page/11/index.html","5fabbdc6933e39ba9ba889dc8a33097f"],["/page/12/index.html","abff966ba8058ddf4b736130ec3f6427"],["/page/2/index.html","c11c5d1b886c52b7a0dfb1b7fe01a19c"],["/page/3/index.html","03e06022b3132fea5e5dd6adba976088"],["/page/4/index.html","c01e9cc145adafc19b49b00f9fe95835"],["/page/5/index.html","146dc405bd07389b299a2cdda3f2fd1c"],["/page/6/index.html","a1647be372eda90f81893112ae63365b"],["/page/7/index.html","2143add58ac251ffeff3629ad51ae52c"],["/page/8/index.html","9cb178dc6764af7fbb6d4120d307426d"],["/page/9/index.html","b330667709859bf12fa3b624c9cee191"],["/schedule/index.html","7210d634f8bef19e9ebfd67833d1b9c0"],["/sw-register.js","782be6e4b290c82bf0554854a0af19f3"],["/tags/Advanced-Classes/index.html","806b7affc0469d91cd425a51bc16a6f6"],["/tags/Advanced-Swift/index.html","818cb192e12c72b735668f3b3deb1c8e"],["/tags/Advanced-Swift/page/2/index.html","d2d0ea71a3c108e838799b9d26836295"],["/tags/App-Architecture/index.html","f439000783caff38680995e0b16c3e5d"],["/tags/Arrays-Dictionaries-Sets/index.html","302ecd9d82180d3820c152dc05327477"],["/tags/Build-in-Collections/index.html","9b99a53e671adee1e7c217b427b1cbdf"],["/tags/Building-Your-Own-Types/index.html","94bd3adacbb57db17f788f2fe64bf149"],["/tags/Classes/index.html","330549d883f50b4fc6a44abfff19fd2b"],["/tags/Codable-protocol/index.html","ae6375c2fbd114e30d2445626fca5a6a"],["/tags/Collection-Iteration-with-Closures/index.html","46aba85515a02b9734f1fab03aa8b19f"],["/tags/Collection-Protocols/index.html","d7b080a5d38553147e3ebe1ce4d1927d"],["/tags/Collection-Types/index.html","dc6def4ff8aa268e35dc84363e5aa1ea"],["/tags/Collection/index.html","6170bc30ecb06df56e516134c22fe0eb"],["/tags/Collections/index.html","ab473eedf7d7dafae2d80fb8d5c9e445"],["/tags/Combine-framework/index.html","ceedfa7ade627870c3bc199d54558518"],["/tags/Combine/index.html","b5f37071f023e518c9804aef2be35bb1"],["/tags/Dependency-Injection/index.html","34cebb1c3473ad2fbbf1613b3ce03a18"],["/tags/Encoding-and-Decoding/index.html","c5a0cac648bc9787f41d7a2f20cef068"],["/tags/Enums/index.html","6c93474e284d8a8beb23086c92cb6e85"],["/tags/Error-Handling/index.html","1ce9af673a8ffad65f4d2c1effaef89b"],["/tags/Functions/index.html","3df92da0f8498ca5de565d7e8630b918"],["/tags/Generics/index.html","76735e27638bee8f68570044f5b00335"],["/tags/Grand-Central-Dispatch/index.html","c267cd41f6fa5db3703b978999325cbd"],["/tags/Interoperability/index.html","df006f645433c067e53239c10892bd0b"],["/tags/Introduction/index.html","606cb61f431472fb529488290efbf979"],["/tags/Methods/index.html","34d8f42b131aa107fff636f72c3e3475"],["/tags/Modules-And-Hooks/index.html","fa92f136b741aa51076c8fd6b1415ddd"],["/tags/Promises/index.html","171df68741f5724b3ba454c24f70af67"],["/tags/Properties/index.html","d13417e21bbcbb22f14a24089006deb7"],["/tags/Protocols/index.html","3c667220518b12831c1a435585a2817b"],["/tags/Result-Type/index.html","bf76ad721a1e270d17e0a897a5bd73b2"],["/tags/Server/index.html","f16dd31e0da8f7c16fec5204b1003115"],["/tags/Strings/index.html","54716fafd1a2e3751d91f9079fb07fd1"],["/tags/Structs-and-Classes/index.html","f2f30063cb954122cd784b7105ca5318"],["/tags/Structures/index.html","19247e7db72dfd2e610cc00ada5c55b2"],["/tags/Swift-5-0/index.html","68cb8b08fb03f1709827e347b8cf284d"],["/tags/Swift-5-0/page/2/index.html","eeab6603c04d7e1e0a59622d54c9edb1"],["/tags/Swift-5-0/page/3/index.html","de34a7f2c4e4de651b9c06bbedb5295a"],["/tags/Swift-Apprentice/index.html","33145fe4d00bc5d6881fc4b2d23e7925"],["/tags/Swift-Apprentice/page/2/index.html","136098049c7e5c16855814e68d9cfd69"],["/tags/Swift-Package-Manager/index.html","8502b110068837243cdc62e8b1308fa4"],["/tags/Swift/index.html","9e3faacad57b117cf1e94d6dda4c96e7"],["/tags/Swift/page/10/index.html","47a25bcc475692a905f3c751e733bf49"],["/tags/Swift/page/11/index.html","da2567e7c1f46f74a71e082bdb8a3f0d"],["/tags/Swift/page/2/index.html","b8b212a7e9f81345dc85fe3a54fa88ec"],["/tags/Swift/page/3/index.html","b42765bcabd01b6c55f2918b7bf9627a"],["/tags/Swift/page/4/index.html","60563161c98b93ce52c6c6de4eb2056e"],["/tags/Swift/page/5/index.html","bd21b31c21eca3654caac88bf0d7b635"],["/tags/Swift/page/6/index.html","ff5248ed5d20d88d027324c13df0f16a"],["/tags/Swift/page/7/index.html","8fdcdf18968be582f31552f96eaf7748"],["/tags/Swift/page/8/index.html","e26a0c57c75372e8a38fff94cc5a6a69"],["/tags/Swift/page/9/index.html","3a1e8ef50cdf0fad1e333c7fb6020d9d"],["/tags/SwiftUI/index.html","b2ac981bab107b812729c6ba7e1ae3a9"],["/tags/UICollectionView/index.html","8442aeb13c2b9ae81267761d8c402f8c"],["/tags/UIColor/index.html","ab5c92a7ecbabbed4e506b0db942b207"],["/tags/UIImagePickerController/index.html","3629f081099cc61bf32abc1b08b6c7b7"],["/tags/UIKit/index.html","4217b1420f9f8edcab9d6a8e63fd3f25"],["/tags/UIKit/page/2/index.html","acce5aa69f720ab680d04b1f0da8ec97"],["/tags/UIKit/page/3/index.html","ab3aabd591bb933dd9fafbb6123bcb42"],["/tags/UIKit/page/4/index.html","eb0b6d387d205b6a5d05d6e6e9c22bd9"],["/tags/UIKit/page/5/index.html","94143374985847bbd5ad99f3f9311a3c"],["/tags/UITableView/index.html","954773494c70f558d4df60c468b5204b"],["/tags/Ubuntu/index.html","35165d53f87bac4fc2ca4e6db4f54354"],["/tags/Uniquely-identifying-views/index.html","ae8314fde193c13e346619da3577655c"],["/tags/VIPER/index.html","c71572b21922fa3163822748c358a7af"],["/tags/VMware/index.html","7042b20653cb2b49ea6fe2746aaa3c30"],["/tags/Xcode/index.html","36681b302c83fe35ffcf9f0d59758f8d"],["/tags/appleOS-Networking/index.html","2853c2f9771c487037bb7ff5bce74144"],["/tags/enum/index.html","cdb6faca1a47597bd462abed91fa1889"],["/tags/iCloud/index.html","9a59b426dd67addd42b2c8f1dcd18f19"],["/tags/iOS/index.html","9b7874427bc8af086fced10f322e21d7"],["/tags/iOS/page/10/index.html","59f801466db624f6ebf99ebc991d849e"],["/tags/iOS/page/11/index.html","38e0c8d79f37d661ac7b140c7f861418"],["/tags/iOS/page/2/index.html","4633ae012b303840cfb461f269d2b8ad"],["/tags/iOS/page/3/index.html","13c445b980212a568cc65c5c4b4fedd2"],["/tags/iOS/page/4/index.html","b5c7a0a8f136134e4c9bc6ddbfafbaa0"],["/tags/iOS/page/5/index.html","d08363765c502515c4b46e37f05b70d0"],["/tags/iOS/page/6/index.html","e9de839a82d01ce4752f9580b3c69595"],["/tags/iOS/page/7/index.html","7c6cc27dc9b4b517ddddb3463bc975da"],["/tags/iOS/page/8/index.html","b8857a7517e5ccc7d5bd01272eeeb6b3"],["/tags/iOS/page/9/index.html","05ac9382414a0b95e361aaf56271f3eb"],["/tags/iOS面试题/index.html","fc18dedbe047bdfc11dce6d514e1f867"],["/tags/index.html","a2f094706c9fd7d87c9696dcbf1f673f"],["/tags/non-optional/index.html","6098d2e97981a70f2f911a31465a20f0"],["/tags/optionals/index.html","b642da77ec51f4e7eec1c631fbc9a84a"],["/tags/random/index.html","21d9a1d0f77031959bcb722e08343f38"],["/tags/transition/index.html","902b70fd7c56fcb65725388f5a78af27"],["/tags/三方类库/index.html","c34def0a586d47350e3efb895d8866a9"],["/tags/依赖注入设计模式/index.html","94a34e2d5c38d42886d80560b1876af0"],["/tags/函数式编程/index.html","b48ceca19cf4a79ffd5b34b15974427e"],["/tags/初始化模式/index.html","cadcdbee9b68ccda01dc151de84bc3c3"],["/tags/单例模式/index.html","ae5038d2bd745b1ce48f500ca3624ed5"],["/tags/原型设计模式/index.html","e1c5b245a6621fbe968f232db562bd35"],["/tags/命令设计模式/index.html","99c0baeead85b7729fe1e3ba4c4180e4"],["/tags/基本控制流/index.html","d90c8616c7deb4a0e46639df16055b6a"],["/tags/外观设计模式/index.html","0183056dc5cd644f3d4fda4f9b9c9abf"],["/tags/委托设计模式/index.html","5c57f5c2e4b9d146c1b7fdc39e3ec3f0"],["/tags/子类化样式/index.html","245283f11b555f27b99b852e3971fff8"],["/tags/对象池设计模式/index.html","f56268f293c50d6e83589b788f5ffe08"],["/tags/工厂方法设计模式/index.html","209f2cc7f73efb10218b83e8b0789ba0"],["/tags/工厂模式/index.html","f4e12ef5973a5a7ad9be667f324682cb"],["/tags/工厂设计模式/index.html","34d6957c3a58105eb15de2c3ffa028b3"],["/tags/懒加载模式/index.html","e61217705452d17b661e87036950dc90"],["/tags/抽象工厂设计模式/index.html","aebb88c64685952fc6efa63f5c4afe83"],["/tags/构造函数/index.html","46d19ed55e99d84f67e3bc5226be6fa9"],["/tags/架构设计/index.html","a8d6add232ce11fdbc3666643ab36e1b"],["/tags/生成器模式/index.html","77f3984c255b94f5ec632317a0324910"],["/tags/用户体验/index.html","d784568557aad6accac997443afa26d7"],["/tags/类型与操作/index.html","6ad8673a78b6acb84c71f4e1f982debd"],["/tags/自动化布局/index.html","016f9ebaeea57f90ccd17298c69468cd"],["/tags/自定义UIView/index.html","8f1f17258500239c272d90f837855ba1"],["/tags/自定义转场/index.html","0bc29d353de0a70589170ea141fdcee2"],["/tags/自适应布局/index.html","de8fd385bb9ce8286d3421b3eeb85d21"],["/tags/表达式、变量和常量/index.html","cdc1c0bcca0826ea3f36a66add5f0134"],["/tags/设计模式/index.html","49056b3a718e8f1e796b5394232f0d48"],["/tags/设计模式/page/2/index.html","c1a2c69b10f556b8ef5e5c6fc0eade9f"],["/tags/设计模式/page/3/index.html","82d3a1994c82ce286538612b69d8760c"],["/tags/迭代器设计模式/index.html","b56579cc20d27fc652884a865ed9d4bd"],["/tags/适配器设计模式/index.html","97da16dc38a0b3c7ee78c6f7e30f980c"],["/tags/静态工厂方法/index.html","728141c38e4b219c6a6d8df80d7bc2b2"],["/tags/高级控制流/index.html","836012ab7e0da83f613db7c9f801a607"],["/为iOS应用构建输入表单/index.html","c1a247c0ea524ffb1216d723fc34e90c"],["/产品开发的幕后花絮/index.html","9f9a4e253644a9f3e99fcf696e50b22a"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","eed409ba7c94b2875972d017441f141b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","1606f93c95714021c4e842f38ba87b76"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b3c21e312c5436f60401fc22e0af3dba"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","adae9bac6b439c51ced721ba9a0f6db2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0e000568ee1bd3a02b299acbedd42d8c"],["/在Swift中创建自定义集合/index.html","b529f5c6996e874acc34567619ab8ad1"],["/在Swift中处理非可选选项/index.html","ab357b3c24ea1296c105c3de16c2828a"],["/在Swift中生成随机数/index.html","d69f88db86383b9e9bdc56ae2048baf0"],["/在Swift中重构单例模式用法/index.html","a8ef56597bd2df0de07045b144568b1b"],["/如何为VIPER编写服务？/index.html","0ec4a90f1488f65f499d6c3aa7968204"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","7cd7f0127f90dd36ae8387fdd2a7bc4a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","878eb0b3e9eb6795d425d54374ef53f9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2d85d8a827ebbee13e2f4c88cb46603d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","02fb07513af0462275fc8a75f5b1262f"],["/掌握VIPER架构/index.html","e5df3dd5ab666ed1b9fa1f7984252a26"],["/揭秘 WordPress Hook 系统/index.html","3f38fe4a86a9b535c950ba055ec52aa8"],["/比较工厂设计模式/index.html","50dd8c6537a993e587918b7a95686188"],["/深入了解Swift中的Grand Central Dispatch/index.html","368c209f69e0fe183b82ff39025b2242"],["/深入研究Swift框架/index.html","3bfa6ee3093cf76399cbb43a85e1c5a0"],["/适用于iOS开发人员的VIPER最佳实践/index.html","dbd3162253ea0d55d24c8cdbe09cde63"],["/选择Swift而不是Objective-C的5个理由/index.html","95c4d23c1ef539443703dc607e08c716"]];
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
