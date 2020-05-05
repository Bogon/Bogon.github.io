/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","7c13c20240df1a2e598c6d83539b0ed6"],["/Advanced Swift系列(三):  Optionals/index.html","2370d75b1f69b8fe2b491ffe0b7e7183"],["/Advanced Swift系列(二): Build-in Collections/index.html","a041cd19978ecc1cdb6f72e11752d483"],["/Functional Swift 初探/index.html","122ea4594d96aec2ba01fe3476aaeb60"],["/NSCODER和SWIFT初始化/index.html","a67a37d1a15b83673b845059960cab74"],["/Swift 5使用UIImagePickerController拾取图像/index.html","e28fc92cdf4b2da8caaf8bf0c265c2d4"],["/Swift CompactMap vs flatMap：差异说明/index.html","5298aa665700916f205b735be7bb32ae"],["/Swift Grand Central Dispatch 深入实践/index.html","1da7f7adcc75bc4d27e459915a425957"],["/Swift Lazy属性初始化/index.html","b356750601d56537d3bd9378ffe0a8e7"],["/Swift Promises 初体验/index.html","7c6a22059acafc9122072d40fc43c0d6"],["/Swift Promises 探究/index.html","c7d75f5664cac73c725db6d9bc99262a"],["/Swift UICollectionView使用指南/index.html","8cf77f7fb987ab583fa70d48154b2b3e"],["/Swift URLSession 和 Combine framework/index.html","c73fdcfa8a40c89c707cea9b51b2476a"],["/Swift 唯一识别的视图/index.html","82ef1f584dbdda075f45523872171823"],["/Swift 如何学习现代UIKit？/index.html","b2d5b5be8cc6911663423dc6ca333035"],["/Swift 用 compactMap 替换 flatMap/index.html","48b2002971d9844d1e8eec4ca2cfea2f"],["/Swift 选择和播放视频/index.html","97b4e2ab71a348923763494dcca6ff98"],["/Swift中UIColor最佳实践/index.html","398e2585b6d26f41f49a13d56067bb4f"],["/Swift中快速简单的工厂设计模式/index.html","41e8c41c1e3d4e2ea36fbe676f049ed3"],["/Swift中构造函数与静态工厂方法的比较/index.html","e785e5b1d50461d9543f1672b254aea7"],["/Swift中的UITableView教程/index.html","35e30478f5d87732a5a9fe9b25b6e3fd"],["/Swift中的懒加载模式/index.html","c15baee8fffaa8cc0d80d1f13d91f746"],["/Swift中的模块和挂钩/index.html","0d8521de05f29a5bfa03f5dcd8362d1d"],["/Swift使用布局锚点添加约束/index.html","b9afea2b5ec12d52ce642f2c0d219023"],["/Swift依赖注入设计模式/index.html","c6a5f99ccc32c05ca9eb04d0e7cd272a"],["/Swift关于Dependency Injection (DI)/index.html","cc96e5a63aafb1a275a55b36c8e6a587"],["/Swift初始化模式/index.html","db7a94aa5e5de9df2883130e10c3cb99"],["/Swift单例模式/index.html","fd11d11495e938accf0c9d2baa2916c9"],["/Swift原型设计模式/index.html","be042c6897d42dba370beab8adabe592"],["/Swift命令设计模式/index.html","261491cd97e84a56098e731be62b306e"],["/Swift外观设计模式/index.html","fce93fcfa923b811b8e3426372f9848e"],["/Swift委托设计模式/index.html","1e6f71af2f89a79efcd77009db361d5c"],["/Swift对象池设计模式/index.html","34807511a9eca19cb78013cb2af9cb86"],["/Swift工厂方法设计模式/index.html","4044cc87fb0f4308e29978c28a282bed"],["/Swift带闭包的懒惰初始化/index.html","d05e3076420174aab6badb8b731ca9fe"],["/Swift抽象工厂设计模式/index.html","004b25fd7c367edfabb69783487f2e45"],["/Swift掌握iOS自动布局锚点/index.html","adca3fbf20ceb79329590ad16c4b17ab"],["/Swift支持旋转的自适应单元格/index.html","f5bef63db3a514f51ebac93c041df040"],["/Swift枚举值/index.html","5e67e3276fdbbc4c0091908c1ff4b789"],["/Swift生成器模式/index.html","0dfb7749ca6e3edf58eef798925c10f6"],["/Swift结合Xib文件自定义UIView/index.html","325d7a264b5c9fb2d2e89cbbea872676"],["/Swift编写的20个iOS库(一)/index.html","d76613c8dbc01427d11730083fcb9ec7"],["/Swift迭代器设计模式/index.html","624a4da35342d62a1b626f881bcce21f"],["/Swift适配器设计模式/index.html","f064ca52e610369af9d749a69410f7b5"],["/Swift静态工厂设计模式/index.html","af0646b2b555283b3a498aded448f8b7"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","0815b5c0fd52fd3647f83aabfef92860"],["/UICollectionView data source and delegates/index.html","06e11d004eeb0776fcb235952d0a8011"],["/UIKit初始化模式/index.html","72dd93d4d793c3788812f30714835a57"],["/Ubuntu18.04替换国内源/index.html","50d7249480db39355d8d874ea09619f7"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","404008469ebf6752896d1f697e790d06"],["/Xcode扩展/index.html","593e9a502e786a1d97558f90c9f319da"],["/about/index.html","83deddf3328b8541eefd3cead6dd33d9"],["/appleOS的Networking示例/index.html","1f663d5252832829eab38f42b726d313"],["/archives/2020/04/index.html","114181b3966fab8a2a9c6437b36abdb2"],["/archives/2020/04/page/2/index.html","a7d9b644043d16fcc6844984ba0bd6e3"],["/archives/2020/04/page/3/index.html","468cdd241c44773cfb779000798d4aa6"],["/archives/2020/04/page/4/index.html","f3446437729aa4119a4e4765a1565333"],["/archives/2020/04/page/5/index.html","8304c98f778b54e35c50240e9dee7b9b"],["/archives/2020/04/page/6/index.html","b2c6789932cfb621aa743cfbe351b990"],["/archives/2020/04/page/7/index.html","ac5b966401914f58bc13736b5ef84317"],["/archives/2020/04/page/8/index.html","d0d5bc8a87cc7ef11bca177691417ee5"],["/archives/2020/05/index.html","112c52938df38d85972e1efd62e48cdf"],["/archives/2020/index.html","b3b4e80d151e2924be71b1fdb6470a86"],["/archives/2020/page/2/index.html","227416ad9e00f70ad012e002a37a91d3"],["/archives/2020/page/3/index.html","5fde7804c719090a98271cdcf7a2f359"],["/archives/2020/page/4/index.html","719c432dee8c7e2b8ff514241e2087c4"],["/archives/2020/page/5/index.html","090117536ce4c356c97e8e34c652396f"],["/archives/2020/page/6/index.html","63d12fadf1efcddf28dff28f81510a78"],["/archives/2020/page/7/index.html","78fa38a293c3d15bb481c12659e8df83"],["/archives/2020/page/8/index.html","3c768bf850f78c2c6db87a0cbdbbbc10"],["/archives/2020/page/9/index.html","3ccc20aa5a2258772bae79c33c8befd9"],["/archives/index.html","8b779035f016ac150f61e983d480a757"],["/archives/page/2/index.html","9b87414c67243353efbc137181f276a9"],["/archives/page/3/index.html","bfb237547d56aadffa94bbed38b0a504"],["/archives/page/4/index.html","beba4a49642f971259f6513a3758bf89"],["/archives/page/5/index.html","43ba1c17b8e213736b2aa92c434ac0fb"],["/archives/page/6/index.html","01654365f69b6ead3106af4bd32374a9"],["/archives/page/7/index.html","54516ada8b8a32264e9385706a8aa5fd"],["/archives/page/8/index.html","1cf77feeeca2738853e29e52594f1a7e"],["/archives/page/9/index.html","564a2e7f876cf08b4202a252e98525df"],["/categories/Advanced-Swift/index.html","4989588a2b2dc7d5e88a7179e63f3cdd"],["/categories/Codable-protocol/index.html","f34e9cacaf8370bc5da33a4e0666aff9"],["/categories/Combine-framework/index.html","d465c5c5cd9aeca4f736b4e5317343b3"],["/categories/Combine/index.html","bece73d9c18abbbdb261d6900948e454"],["/categories/Grand-Central-Dispatch/index.html","ef3cb8c535f728bbc3236535620f4e46"],["/categories/Hexo/index.html","2ff321ffc9eea3736a0a52e30b701f9b"],["/categories/Promises/index.html","c3aabd14efdecb682c13dd311e3c659b"],["/categories/Result-Type/index.html","bc373887bca894b80894966ce9c307fa"],["/categories/Server/index.html","92b4ce14d26f48ac43ec59efecf73fac"],["/categories/Swift/index.html","5bd32d561ff2f27a08fe2734281369dc"],["/categories/Swift/page/2/index.html","6330615d5ffec6bdb193fec029dbfa42"],["/categories/Swift/page/3/index.html","c2916a94cbf44ec154fc231de7f95264"],["/categories/Swift/page/4/index.html","f94ad10f42ca95d27eb1bf3a4136df55"],["/categories/Swift/page/5/index.html","75836983fe5580dfe802beb1ef580f97"],["/categories/Swift/page/6/index.html","da231dd9a4426e24b9ce23e37a09a805"],["/categories/Swift/page/7/index.html","e16ad243a0d2067e9368d814b003051b"],["/categories/Swift/page/8/index.html","ec97b04e048dcd17a3cd009626039bc5"],["/categories/Swift5-2/index.html","32fbb9394c9a7f266fcd8f0fb01858ef"],["/categories/SwiftUI/index.html","738ecd39c588a020bb5c6cf34e65c505"],["/categories/UICollectionView/index.html","8ee42a40b349f071ad034e8c1aecdd41"],["/categories/UIImagePickerController/index.html","7418823ac9cc82b5953c8f9ec04aec3b"],["/categories/UIKit/index.html","9f8390f66d91cd5cd85e64f31f564a73"],["/categories/UIKit/page/2/index.html","a7a0f9f8685d4c2be18fa75cb311984e"],["/categories/UIKit/page/3/index.html","a50d1d121dd6b79ef9ccd752af98036f"],["/categories/UIKit/page/4/index.html","e84c1b65a5fc8291f7c3a0faf41b58ae"],["/categories/UIKit/page/5/index.html","2444e7d5a08f59c1801f75e0b5e9ed60"],["/categories/UITableView/index.html","c829c1e842ed2e4142a51a4c17fcfaec"],["/categories/Ubuntu18-04/index.html","406a2761b2d46316fdc885e86692923c"],["/categories/Ubuntu软件源/index.html","4260b0ecf58449fcccb99abb1397ff6d"],["/categories/Uniquely-identifying-views/index.html","a806c71891cb8a17ef3b23f951851904"],["/categories/VIPER/index.html","ad45321feb02bef8facb9bd4f526c51e"],["/categories/Vapor4-0/index.html","ac32eb865612e1b656d2feb24c2d74c4"],["/categories/Xcode/index.html","a3ab044a21ddc4e1bc55cdb99820ef4a"],["/categories/appleOS-Networking/index.html","a7165ae2d383f59088e5849377cb346e"],["/categories/enum/index.html","87b73fd1d23407976d00d561926798be"],["/categories/iCloud/index.html","299f6ce0b77861eb4bf43d7747a7cefd"],["/categories/iOS/index.html","7dd2bbf028c49b3fd7ffa8fa462af22f"],["/categories/iOS/page/2/index.html","3f76ed808e3a3876984bf009d6351d90"],["/categories/iOS/page/3/index.html","d2dfc812d6c07b071080fd57430b7cf6"],["/categories/iOS/page/4/index.html","18f9213460a1ef14cbf72610108cb671"],["/categories/iOS/page/5/index.html","b09441da279b2efeb159a5b7d181fe96"],["/categories/iOS/page/6/index.html","10e63d06496b3aad303f1b5854821450"],["/categories/iOS/page/7/index.html","6a99049101a1e2fd31d9267755875b1f"],["/categories/iOS/page/8/index.html","9d7722b6c4221e675e4d6fb8382ed5dd"],["/categories/index.html","c752bb20d20833a14373e5ec6458488c"],["/categories/random/index.html","93f0b4bff24e441dae20f8bf4392e242"],["/categories/三方类库/index.html","f2b1e598ed153fa003b4696e981435d6"],["/categories/函数式编程/index.html","dd0da2c7dae4e288ee0ec68a874d4255"],["/categories/子类化样式/index.html","f7bfb2e81b063edca49017933b7f434f"],["/categories/架构设计/index.html","5eb61dc9b61536321c086d0e0256b78c"],["/categories/用户体验/index.html","608b9f2566be543bd1a1cd54eb2ccf33"],["/categories/设计模式/index.html","26615f4d5b8b080f96626c6869b27e12"],["/categories/设计模式/page/2/index.html","c866947fed2b804d78e3dc828cb7feb5"],["/categories/设计模式/page/3/index.html","5ee28dd076d95f8593428e10f0b69a89"],["/css/main.css","eb91f9bbaae35d7baa9a99be36737c35"],["/hello-world/index.html","0e0974cc649132719d30bb71caf6dd0f"],["/iOS VIPER架构深入实践/index.html","9220106418d17cd6d877d13c42e86765"],["/iOS 自定义视图，输入表单和错误提示/index.html","da8f6f9eb5bc2c3acabeea1fc2897af7"],["/iOS如何使用iCloud文档？/index.html","ef5439b0d25d8adfbaa254dbaf0d4bb1"],["/iOS子类化样式/index.html","10dc49a166c2438712944cb83a2aaff7"],["/iOS自动化布局编程/index.html","a9f05b860bd2c212d6450a2134d558e3"],["/iOS自定义转场(By Swift)/index.html","8b31a77e8805b6063a6dc6a3e99700c4"],["/iOS项目架构：使用VIPER/index.html","b6be17b7dbdfcd34d85c64628a99c0ca"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4e78137281c3bb2fe8894be72d215b05"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7cb224285fa46eee6eaaac140057fe77"],["/page/3/index.html","fcac9a18db1cfa02657eaf5a35eeebd1"],["/page/4/index.html","c292195d463cc1f5990f97c36adbcf27"],["/page/5/index.html","ecb76e9dcdf252b3252755e4120ccc7f"],["/page/6/index.html","6f0ddc2dabbea930659618eb4642af2e"],["/page/7/index.html","3b82e926964831d564dca051b9f6c7db"],["/page/8/index.html","2df83dd4b3bfa3137aabc40ac75ee6fd"],["/page/9/index.html","42741e0d6b2370b038a99a3c3b7cd63a"],["/schedule/index.html","b16ecaa5f3c0fe6d4f9471e2130c8cf0"],["/sw-register.js","844b6cd87e3694e32333632286826cf4"],["/tags/Advanced-Swift/index.html","647d04c327c73dfcbce0f50c8923ffe0"],["/tags/Build-in-Collections/index.html","f618ef265b5b7a945254867a8a49db03"],["/tags/Codable-protocol/index.html","553125ccb66c5cd2cbd16bae2546d2c1"],["/tags/Collection/index.html","4bc69351dbe07716715fcf316f313140"],["/tags/Collections/index.html","d270cd6b80f23d7516bd86fbdc83579a"],["/tags/Combine-framework/index.html","8cc8fbb1066bb3126df3ca6bad1b1b99"],["/tags/Combine/index.html","b3abc368ef729608470d9714f983c527"],["/tags/Dependency-Injection/index.html","d39725f984a224e4fada81a76a4393db"],["/tags/Grand-Central-Dispatch/index.html","c684aada75698c925b9c6c8277c6d959"],["/tags/Modules-And-Hooks/index.html","fe164c910de3abd3fed7f796b4b807ed"],["/tags/Optionals/index.html","10a844735efe73c9bf00917fef55f9d5"],["/tags/Promises/index.html","d7b4bd78e3a95abe0d8cd59e29b2fdde"],["/tags/Result-Type/index.html","ceb52e8bebe43e0805221ca0838c56af"],["/tags/Server/index.html","aab4a02a7f78b9256f3075aee6c1860f"],["/tags/Swift-5-0/index.html","1aff38ef51ec4c2a6b70268872861e87"],["/tags/Swift-Package-Manager/index.html","0a16c05b4137d2ffc3bc2b8cc43b0e8a"],["/tags/Swift/index.html","97ab20ffcbfdad1a7ab7adcdc04870a2"],["/tags/Swift/page/2/index.html","b4f8e8506edc42a8fe3c3a868bb03c12"],["/tags/Swift/page/3/index.html","0a38c9d487be9f62dcf8358799221488"],["/tags/Swift/page/4/index.html","d511cf8f7b730a7f8a9d8df45b4aeebe"],["/tags/Swift/page/5/index.html","ad1bf3f5fd43bea041c28b8f374b48ea"],["/tags/Swift/page/6/index.html","d036b6b084ff660b8fd19981e02eea1b"],["/tags/Swift/page/7/index.html","3ac8c8fd7cebe869f6ce8d223d01f5b9"],["/tags/Swift/page/8/index.html","959f0cacf19cbc9b2152551cee4ea58c"],["/tags/Swift5-0/index.html","d402e5e25e404551f478b8b2c734a8fe"],["/tags/SwiftUI/index.html","6aa4799157c249ae468a3597eb4da97f"],["/tags/UICollectionView/index.html","ec00e531fdcf16cb7ec08bcbd52c18e5"],["/tags/UIColor/index.html","d9a61be8e6c42aa5590a2aba8f83757c"],["/tags/UIImagePickerController/index.html","fb5a6d3aec762c0e2b9ad2f45f3430c7"],["/tags/UIKit/index.html","897655b0c22eca84f1227bd8d2d77f0e"],["/tags/UIKit/page/2/index.html","8b0ddd826706a00a32c156a86f624279"],["/tags/UIKit/page/3/index.html","054ce26922a19b0f31d2108fce065bfa"],["/tags/UIKit/page/4/index.html","747867088cc7f186d800765effc64673"],["/tags/UIKit/page/5/index.html","956203a52b6c659a0a879d4ef9c0514b"],["/tags/UITableView/index.html","f49d3d711e679a5adfa0e58d29d1177b"],["/tags/Ubuntu/index.html","991402975ac576eddba6d40a0e3965ee"],["/tags/Uniquely-identifying-views/index.html","cda4ce2bac9d671b22f44a1849985524"],["/tags/VIPER/index.html","578b37fe0f4522706d114f52a85be3e3"],["/tags/VMware/index.html","d8720283c761c4ecc24f7760e07b8d03"],["/tags/Xcode/index.html","5a8fc0275189810b2f80c05c505b51f7"],["/tags/appleOS-Networking/index.html","aac8547a1695ecf18097cb57c6099ab0"],["/tags/enum/index.html","356cabdaea609f5f9de1833d173c258d"],["/tags/iCloud/index.html","ec10f5fd37915d1468a50eaf408071c3"],["/tags/iOS/index.html","3d7731ea6d32c6ff4ab0bf6e97a111c2"],["/tags/iOS/page/2/index.html","2326658fd4473cb7b2bfab111afc32f2"],["/tags/iOS/page/3/index.html","bcd387f78dcd88db276fac12905a7337"],["/tags/iOS/page/4/index.html","a4d6f5aa07cf19e07cf7b631a452c73f"],["/tags/iOS/page/5/index.html","ac693f94c0b429fb4c37d786b760f837"],["/tags/iOS/page/6/index.html","e85db5bab31ea0ee798f7ac2a398fc24"],["/tags/iOS/page/7/index.html","895b5abd5fff8293d9b63327eb26435e"],["/tags/iOS/page/8/index.html","dc5383a12093f452086bd62d79e90a7f"],["/tags/index.html","0fcaa24152eb74aaf15132d869f420de"],["/tags/non-optional/index.html","97e9f905d11e53658f3e7392189ab995"],["/tags/random/index.html","d064bcd40cdfff5ed523a21fa5cb2ade"],["/tags/transition/index.html","acbbec8cefd10507a8e061ab982296c5"],["/tags/三方类库/index.html","3f0f99980753797473d97ee0ca1550b2"],["/tags/依赖注入设计模式/index.html","920fb025df202376dfb9a67ef1ac339d"],["/tags/函数式编程/index.html","6dc93bbf2a4340ad5887a730aa07519d"],["/tags/初始化模式/index.html","b91b6d88bceb1f93b772de15bcf75e54"],["/tags/单例模式/index.html","756bc6559b1c55e0a664491d457d25d3"],["/tags/原型设计模式/index.html","1590ea843ea4fe2430e28bf9233b7668"],["/tags/命令设计模式/index.html","c29c492a13d149a7cca87b4dd48cbcfe"],["/tags/外观设计模式/index.html","64638eea16b5fde8efbb30987ecbef47"],["/tags/委托设计模式/index.html","1614107a02e17fc89a684b6440ad6fb1"],["/tags/子类化样式/index.html","ea29754066b0afe0aa2028f3a7723800"],["/tags/对象池设计模式/index.html","2783fc5fa7e281773e7f5af9cd7d1fd6"],["/tags/工厂方法设计模式/index.html","1ee5214f9980826929339c68cc740374"],["/tags/工厂模式/index.html","59d6ddd9f64b8c5d255c9052f6799343"],["/tags/工厂设计模式/index.html","c09b9ae073a1a453498b5bd9b4d4d39b"],["/tags/懒加载模式/index.html","99ee5fb492ceccbdcff726e06129b4b9"],["/tags/抽象工厂设计模式/index.html","8769ff7b0be2d8e22532cf1b46c4bad3"],["/tags/构造函数/index.html","86925f02bb2cbf0f033961923e29afdc"],["/tags/架构设计/index.html","562ef3d4d027d775a60411fe6e8ae823"],["/tags/生成器模式/index.html","50099c811b3f35bd67ee2aff133a6e01"],["/tags/用户体验/index.html","30f8223ac6a26dd5c46e74e16c938d8c"],["/tags/自动化布局/index.html","7a7e6f02afe886bd9a491e2fb9704fbf"],["/tags/自定义UIView/index.html","d5a7e64a6a3e51af5e7f63b3ae3e3d7c"],["/tags/自定义转场/index.html","21f06818919642d399c77daf59b2398b"],["/tags/自适应布局/index.html","5a29b8d904cc2805ba389f38cd9a474c"],["/tags/设计模式/index.html","2c280a88b496316214276140804725af"],["/tags/设计模式/page/2/index.html","632eb61bed8214c29ff61cec589e17d5"],["/tags/设计模式/page/3/index.html","6f96f1ad9cd7c51544cdb78effcf4ad0"],["/tags/迭代器设计模式/index.html","2c032051bf376469f475ffc2e44e9421"],["/tags/适配器设计模式/index.html","3482829471400e277548b649ae1e7d76"],["/tags/静态工厂方法/index.html","6507710d199183e163f9ccf03f146b80"],["/为iOS应用构建输入表单/index.html","9a690543c3d2ba435a74342d52f66a67"],["/产品开发的幕后花絮/index.html","52cb2bf05154176ead6b3e2a157825fb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","ce14efc2d9cdee4fad2adb1f7142e82c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","3ec159dea8d6291a4c07436e2e67c239"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","b56d5577c5e6040bcae83fe2b325ce65"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","77738f3da5baca3cbfc19d45e80cf2c6"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","11ae547436ac59a46405d733ad576847"],["/在Swift中创建自定义集合/index.html","339a1f803ad8f4af6fa1ff3e8eb08e28"],["/在Swift中处理非可选选项/index.html","a2c543dead207e9e3677b8fed1b80f19"],["/在Swift中生成随机数/index.html","78d90f5d1076b786f5266d1269434b2a"],["/在Swift中重构单例模式用法/index.html","f6dbe2f45bfa273723353b74f11ffb0f"],["/如何为VIPER编写服务？/index.html","c115aeeb4393292a1c4759c4c986142f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6a2a0b423a2e1eb1255a79c81e7f9227"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","a1d1b537a2fb5ed718b1f30b1ff48834"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","132a30f4b9ae5d9225b5871dfbd6b30e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1157fa316010199bfced622a23299551"],["/掌握VIPER架构/index.html","cc874a2aa023e31252be2090c1af7740"],["/揭秘 WordPress Hook 系统/index.html","01c20f495bde49b418380dab936aec07"],["/比较工厂设计模式/index.html","932841fd3b34598434c4b8201156851a"],["/深入了解Swift中的Grand Central Dispatch/index.html","fe8e839c618ae33777d7cbf3ba4c03de"],["/深入研究Swift框架/index.html","df48d81cc3a813d09d9a57d4b3089714"],["/适用于iOS开发人员的VIPER最佳实践/index.html","446774cafff20fa05f0be2347cf0d9d6"],["/选择Swift而不是Objective-C的5个理由/index.html","bad156b474976a26f8fc56f95909ce19"]];
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
