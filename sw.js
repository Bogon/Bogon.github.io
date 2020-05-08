/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","ec374421639327845790c760ec44d343"],["/Advanced Swift系列(七): Strings/index.html","f280087c8bcefddda2e793a64561515f"],["/Advanced Swift系列(三):  Optionals/index.html","d315298185a757c3a0ea847e07bd41ea"],["/Advanced Swift系列(九): Protocols/index.html","164c00042554635aa6fdcd6cc296e155"],["/Advanced Swift系列(二): Build-in Collections/index.html","225de07709dc90d3349041978f714ec0"],["/Advanced Swift系列(五): Structs and Classes/index.html","c696c158d87e9586047ae3c2bb6bceb8"],["/Advanced Swift系列(八): Generics/index.html","cff6abeb9fffd767f33f1c50fb9444b2"],["/Advanced Swift系列(六):  Enums/index.html","07009e181621432818fc9928de5a04c1"],["/Advanced Swift系列(十): Collection Protocols/index.html","195b149dc12af745810209a3a809efe7"],["/Advanced Swift系列(十一): Error Handling/index.html","94b18e06fc8ff558d7e89b8a70bc06cf"],["/Advanced Swift系列(四):  Functions/index.html","b1ce0d96ca08a529bcba2af13d179b33"],["/Functional Swift 初探/index.html","9f89bb41f1e6562fcc8d5035784955be"],["/NSCODER和SWIFT初始化/index.html","122da8ef3314f2ed5be976b344fcd94d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","173f08d28ab501fdceea3b0446c6b8aa"],["/Swift CompactMap vs flatMap：差异说明/index.html","edec084ee8747325a7028378dde4baaf"],["/Swift Grand Central Dispatch 深入实践/index.html","87301caf12502a1b15461152ef2b6508"],["/Swift Lazy属性初始化/index.html","8834a02238185b959ceaef13f2bd58e5"],["/Swift Promises 初体验/index.html","da9da1d5d5cdaa043ad98b0dd10e9ed0"],["/Swift Promises 探究/index.html","89d786716e7b7d320348bb88346ba9d7"],["/Swift UICollectionView使用指南/index.html","c28b18c5047e862bfbfebb8fe9ee1d8d"],["/Swift URLSession 和 Combine framework/index.html","4dc9eccca5ef5df9276361e97a2821f9"],["/Swift 唯一识别的视图/index.html","32a44920e97f48a20e2d7970036f7103"],["/Swift 如何学习现代UIKit？/index.html","053da41f917aa892d06f8cf844c59bfd"],["/Swift 用 compactMap 替换 flatMap/index.html","adffaeb244e6b3890a520ce43fffacc7"],["/Swift 选择和播放视频/index.html","09b1d4a40b5ed79ae1c0e944c50243d6"],["/Swift中UIColor最佳实践/index.html","47a5cd65d04dee16fcb8445436c1fc7d"],["/Swift中快速简单的工厂设计模式/index.html","ffa4bc082b93391dc240de2676525348"],["/Swift中构造函数与静态工厂方法的比较/index.html","52ce81c4fd6dc4e74de7d8e216a546f7"],["/Swift中的UITableView教程/index.html","0bf8b0008ecfc277f4b5f0ebc3b16581"],["/Swift中的懒加载模式/index.html","d82bce8f2a1b94f171e840b104e449c5"],["/Swift中的模块和挂钩/index.html","dc7297f58c1c3a2175ece90f8c5b833a"],["/Swift使用布局锚点添加约束/index.html","7ce5fdf10d6ffc8e935331aec5b97d29"],["/Swift依赖注入设计模式/index.html","52343b2acdd8ad26cbed432e2a13ca34"],["/Swift关于Dependency Injection (DI)/index.html","29447e8673c43bbf266197d071be836d"],["/Swift初始化模式/index.html","0e6a932edfbd8dd43dadd0cb15aa8c36"],["/Swift单例模式/index.html","dc4c3401c914ad2d8ca09cc5452e68f3"],["/Swift原型设计模式/index.html","ec7cf73dced1399c2113af8598430d71"],["/Swift命令设计模式/index.html","c1c8c707078d0f3debe8119f6f18beab"],["/Swift外观设计模式/index.html","2200d5f8caddaf291f464760ce86b539"],["/Swift委托设计模式/index.html","d0340c1ac3fe0fd8eac8374c138406f3"],["/Swift对象池设计模式/index.html","e270bf8a249266564b262cc5fd10b40b"],["/Swift工厂方法设计模式/index.html","7e6f987940c4fef6242c602d7781995c"],["/Swift带闭包的懒惰初始化/index.html","10b1ef3d22ccd65fda3ac6ab52d9571c"],["/Swift抽象工厂设计模式/index.html","93163b474648298dd2a499e272f85127"],["/Swift掌握iOS自动布局锚点/index.html","123277d041b3e9675abaac48e8dbe7d4"],["/Swift支持旋转的自适应单元格/index.html","56bf96536b0f5d1b93487a1494be4d7d"],["/Swift枚举值/index.html","c898861257c578a134a744d2d8f6e894"],["/Swift生成器模式/index.html","964e0818e2d93b7cd7dc40ed39d07a64"],["/Swift结合Xib文件自定义UIView/index.html","af64819cf44aef18c3e4a0ddcc791f18"],["/Swift编写的20个iOS库(一)/index.html","7c1340d7f9553951dc7d5c94a6b0cc40"],["/Swift迭代器设计模式/index.html","14dc3752b41e7ed7c1fd4f2de6a2f6a4"],["/Swift适配器设计模式/index.html","df5b000b9e7462f51c59ec65090fc746"],["/Swift静态工厂设计模式/index.html","fec2e61718fbed3bc80cdbb2fa959ad5"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","13cefadf5a5ebccf398331799c07efbf"],["/UICollectionView data source and delegates/index.html","39dd8b5dfdebffa748bff93b0e297b1a"],["/UIKit初始化模式/index.html","ce88ad7d7f7967bbd818899f1a5e8d13"],["/Ubuntu18.04替换国内源/index.html","cb0fedc371a7795e113a0ef2a87f9075"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d1987ee7e07e6628191f1ac95bfea997"],["/Xcode扩展/index.html","7c9c1ce71710591ca0e48e0f12f68d70"],["/about/index.html","c56734aba6c69724c02c2d6983d85aa3"],["/appleOS的Networking示例/index.html","fc61c25d3f56039886ba9c71cb879a7a"],["/archives/2020/04/index.html","511bae2256d9df91567922eeef7b6ebe"],["/archives/2020/04/page/2/index.html","3f7ee173efee7c4cf8d8aa6441734276"],["/archives/2020/04/page/3/index.html","ad93f2687d1959f31e044d681c59f022"],["/archives/2020/04/page/4/index.html","be1da414690db0358bcde42e4a634799"],["/archives/2020/04/page/5/index.html","80dee733e29db73a82d5427760402d83"],["/archives/2020/04/page/6/index.html","24411257e50231ea168bd40c673905ca"],["/archives/2020/04/page/7/index.html","ba10d8882c4b15d2216ea4edc786cada"],["/archives/2020/04/page/8/index.html","42cb8855fd8aec3dfa3059687a89cd3f"],["/archives/2020/05/index.html","033dd0b299faf9f4772a535994e72cd7"],["/archives/2020/05/page/2/index.html","f887aab8d462dbc21eaf1f0d294d458a"],["/archives/2020/index.html","1972b1fb4fc8fab0c5a281f8077e92ae"],["/archives/2020/page/10/index.html","feb3c2663d0fe44de0bbdb73f2a11f2f"],["/archives/2020/page/2/index.html","7284379f244e6961bbaad111cd4465fb"],["/archives/2020/page/3/index.html","dda09bbe62b8c27d6e0de5818c219c32"],["/archives/2020/page/4/index.html","6b1d62392f2aa507901b0133fcaeef0e"],["/archives/2020/page/5/index.html","ceab4feca618752bbbd2d91e16fd4de1"],["/archives/2020/page/6/index.html","e835c43210cd89c71d747020a712ba25"],["/archives/2020/page/7/index.html","d66c160201b0327075622de40fc50bd5"],["/archives/2020/page/8/index.html","1ec63e0cdbf4cc8dbab3121baceeffdd"],["/archives/2020/page/9/index.html","16ba567601b4d6c73dc0b9c59aaf6bd5"],["/archives/index.html","1bbaed43c92eac653ff3cfd70766097c"],["/archives/page/10/index.html","d115bc9bd13f4ee2006a343eb5165165"],["/archives/page/2/index.html","d45943e2dcc613b55b67a4e44626c7c5"],["/archives/page/3/index.html","a580468b6f396a8632d93fa80b842b09"],["/archives/page/4/index.html","22cd20b9fea21533c5d2fa3a308653ac"],["/archives/page/5/index.html","3dd00f3adf8fad9df817e3d923f89c6d"],["/archives/page/6/index.html","7be7209673c156b05546b2e9fe6f4475"],["/archives/page/7/index.html","16151fb8dff90e0dff3abd850b4d0f75"],["/archives/page/8/index.html","ce981fc666d24688adbe6718483503c0"],["/archives/page/9/index.html","2ffc7feafc57bf9f23ecad05f74d325a"],["/categories/Advanced-Swift/index.html","99d62a14fe3cee007b890cea2455812a"],["/categories/Advanced-Swift/page/2/index.html","01dcbc118529a9714e25e3e47fcefa8d"],["/categories/Codable-protocol/index.html","0b5b9ba0e0aff585de2014160405c3e0"],["/categories/Combine-framework/index.html","5184697d99b817977cbd29357b73966c"],["/categories/Combine/index.html","45401c64f398861274df8f1dd11fac53"],["/categories/Grand-Central-Dispatch/index.html","3b71cc943fc3a6f18b2a902c45b7a7df"],["/categories/Hexo/index.html","f40951a61b22b76ca771a9ba7209b09d"],["/categories/Promises/index.html","e530062c534299e7adb19419e86c2fd7"],["/categories/Result-Type/index.html","592a86c886194f642c5869b7ef2bb5ab"],["/categories/Server/index.html","3ea65ff999762dce06a27e30dbf4f937"],["/categories/Swift/index.html","a7e2d26784ad59098c73e7cbe050967b"],["/categories/Swift/page/2/index.html","9562b77bca510772672248adec6d3eb7"],["/categories/Swift/page/3/index.html","256d0ab8fc27b6fdf7ef084d2568c9c3"],["/categories/Swift/page/4/index.html","2dcb0eb83d473b9bc9ef2e71746f5b27"],["/categories/Swift/page/5/index.html","5288361b336d64f38b88600a6016b3c3"],["/categories/Swift/page/6/index.html","bb69374211e1648f43014914ec6bf5fe"],["/categories/Swift/page/7/index.html","414e9197f8d1a8fdaedb17303ab63ded"],["/categories/Swift/page/8/index.html","ba52859f7f853e8b049af8ec3558aedf"],["/categories/Swift/page/9/index.html","43e1ee1133ca3486888e7cf8b1c8b762"],["/categories/Swift5-2/index.html","5591317ee59e1993829328a464a1b331"],["/categories/SwiftUI/index.html","cf298072e70e715340765eba3e55c28e"],["/categories/UICollectionView/index.html","effd3c00f194ee40cf75106d40405e42"],["/categories/UIImagePickerController/index.html","8a5f0423e4eac0ada7c8d4dc9e7ed31d"],["/categories/UIKit/index.html","71b683260f453027fd0f4eb12afaefbd"],["/categories/UIKit/page/2/index.html","d62fac9293301aa7b5fa1001bc387818"],["/categories/UIKit/page/3/index.html","148b80f02b944af7a0a43fa20e22d29e"],["/categories/UIKit/page/4/index.html","75a25e9fdd478b64e3c47cc76679e1c1"],["/categories/UIKit/page/5/index.html","3a166f9750318df3b33064c2560ccfad"],["/categories/UITableView/index.html","b902a0367bfe06d3dc5e76f4d2d1f557"],["/categories/Ubuntu18-04/index.html","2edd2f1b65591f10cc4dcd4e1125b5ad"],["/categories/Ubuntu软件源/index.html","91d6db0906cad505ae59e4fc5d7a480f"],["/categories/Uniquely-identifying-views/index.html","40ec5a63a467b83e5a06ee50a67ebf6d"],["/categories/VIPER/index.html","6030cf13415a9caf1ad21c83ee96c6cd"],["/categories/Vapor4-0/index.html","3fc8d935a38a103c9993c2a04f47e7b6"],["/categories/Xcode/index.html","3d5297342cd304fe6c2ad80587002303"],["/categories/appleOS-Networking/index.html","0d5528b4c8e9d101d5d5e1789da6724b"],["/categories/enum/index.html","de469f43225165a697612396dbf2b04f"],["/categories/iCloud/index.html","8fea4be6c208d007953479567f126698"],["/categories/iOS/index.html","e803a4fdab72e46d7ab6b24c68270f79"],["/categories/iOS/page/2/index.html","fc1e57f3ab1b62fed40811a09fd35c41"],["/categories/iOS/page/3/index.html","f6c9e6606cb73bc144a8f466c3dd3b0f"],["/categories/iOS/page/4/index.html","9d4b5e6fd707f4d08798c69d53370b9f"],["/categories/iOS/page/5/index.html","268309ce19090fb2c8071f6d3815cf20"],["/categories/iOS/page/6/index.html","017ddb9208f3519f86e8e5fd38b9f8b8"],["/categories/iOS/page/7/index.html","3601145dfe3ddead09735b9846901aae"],["/categories/iOS/page/8/index.html","14e13158ac9eb7c6d3964d459206e841"],["/categories/iOS/page/9/index.html","1759b170c0a1cc5eb8b547a987470be0"],["/categories/index.html","d66ec804582f56910c8346b06f1a7f99"],["/categories/random/index.html","294b7ea1426f5371c2cbf2446c38db2c"],["/categories/三方类库/index.html","c369082055cc85f3dad0204e0a333368"],["/categories/函数式编程/index.html","c9de63d88f48138f61b4328447c0630c"],["/categories/子类化样式/index.html","144fc50ff7c08ba1fe5b887d07bbfd01"],["/categories/架构设计/index.html","9feda88a0080771b95c7d8e465b5d698"],["/categories/用户体验/index.html","d50dc03b1342981b07152794ba0203b2"],["/categories/设计模式/index.html","68e487c69db8a54e498dddb00a34f333"],["/categories/设计模式/page/2/index.html","feb2dd60238269585b790468506621f2"],["/categories/设计模式/page/3/index.html","5bd1665707cae961b8dd24a90c8ca4a0"],["/css/main.css","9e9352e2ce65098b3cd0dff1d42a77f1"],["/hello-world/index.html","d14dc14308557b702c5dc2dfae718db7"],["/iOS VIPER架构深入实践/index.html","0139aeadffe69ccbdc07752d52fe5c40"],["/iOS 自定义视图，输入表单和错误提示/index.html","ec2c703a6bc29f9857015a86833cfcea"],["/iOS如何使用iCloud文档？/index.html","90715b04ca6adabbb6c5228576ee234a"],["/iOS子类化样式/index.html","a2140576847ef60c3bebd685dca5bd5e"],["/iOS自动化布局编程/index.html","b042c911df51b28ab6e0f9d3c9aa9b43"],["/iOS自定义转场(By Swift)/index.html","99e9e2982d25d121434f532ddbfeb33c"],["/iOS项目架构：使用VIPER/index.html","74f9ce341067e1b1850885ff8bee5200"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","56b4403941e62f8d228ac46753eb343a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","811c467d086ecc4fc6cba7afb27d5162"],["/page/2/index.html","e3fcb8948503f414925d36a59cdd6658"],["/page/3/index.html","c2e1b129f3a4353fc44e47890b7fc01d"],["/page/4/index.html","a4c854cade95ec261013da4ac2ae4a6f"],["/page/5/index.html","40d4287ce61a758dfc9fb3d1145916d4"],["/page/6/index.html","50f231616b481ed66672fd11aed55966"],["/page/7/index.html","a3bf7fa929917a260d4a917d830cf984"],["/page/8/index.html","974cd6c8a47c28587c302225c40f981c"],["/page/9/index.html","3061dacbcab59af8f8d20fbe039ca27f"],["/schedule/index.html","1ffeefbd6e1b1874dd8984a252c7c602"],["/sw-register.js","45d2b6b4adbe3e50763e76442beb9e33"],["/tags/Advanced-Swift/index.html","8461617d4bbff6f027736bf48d68b5bc"],["/tags/Advanced-Swift/page/2/index.html","4fa4684fd9018fdd0f8de80a0e367203"],["/tags/Build-in-Collections/index.html","3972c407b9810104c8701e6ded6c30a6"],["/tags/Codable-protocol/index.html","6b15cad401dd8a9e527712ce98f52906"],["/tags/Collection-Protocols/index.html","12d36feaea5ce253c6d472f6c1519ba0"],["/tags/Collection/index.html","31ada5db987f75885f3211b4e7f683e2"],["/tags/Collections/index.html","52149f1b68a59723c2ade36a2c482608"],["/tags/Combine-framework/index.html","cd2f3d4c63b5dda1d444ca3b374e23cb"],["/tags/Combine/index.html","b815a571d1c0e906a8a3431a6c29434f"],["/tags/Dependency-Injection/index.html","81bf32e8ba504a30eca0615ad2a98fc3"],["/tags/Enums/index.html","33f4cf7266ba31159e49e673ddcfbfe9"],["/tags/Error-Handling/index.html","6ae03d25e0ccec6ecf2e7d522bf955c1"],["/tags/Functions/index.html","e3a4b0d527cf1115dab1b3573352b541"],["/tags/Generics/index.html","418e30255a52e88d110f6859083b5a90"],["/tags/Grand-Central-Dispatch/index.html","84d42151e89bbc052e79c131c2e69740"],["/tags/Modules-And-Hooks/index.html","48f55360c58e78fbd44f96cf2a019747"],["/tags/Optionals/index.html","dc0b63c2d8d9f48c546a0e0f9ecbef85"],["/tags/Promises/index.html","61cef4fb66d7420d0e3e26ba03856401"],["/tags/Protocols/index.html","cf366c4bafff75e80909905401218405"],["/tags/Result-Type/index.html","c058606806e02bcb3d981f8cf2fdc4b1"],["/tags/Server/index.html","4c4e000c839e466b063626ecbe0aba38"],["/tags/Strings/index.html","6066c10b09a3f7dcf8978acdbcc4d397"],["/tags/Structs-and-Classes/index.html","2fc67f71219a2c75aed30fd1dcac4a06"],["/tags/Swift-5-0/index.html","6f3e7ab635932df2c32cf9aa70a3945e"],["/tags/Swift-5-0/page/2/index.html","68be54ce28b16a6806c9cd3c0d9d627e"],["/tags/Swift-Package-Manager/index.html","facc1b1e81b6de5989256b9046899345"],["/tags/Swift/index.html","5f1f719b27e02f89b995cc8424dbede7"],["/tags/Swift/page/2/index.html","b696717dab90677a93c35b39152f9a6b"],["/tags/Swift/page/3/index.html","b08bbfda3799e0885a3ca4ed2d95acc6"],["/tags/Swift/page/4/index.html","7db8c79dd7fe11b1ba68b8d1043561e3"],["/tags/Swift/page/5/index.html","98bb559d23f1c1844892d4ec17f626b1"],["/tags/Swift/page/6/index.html","5b5769a3e6072f3c1ccaeeade8395a5e"],["/tags/Swift/page/7/index.html","5c80f16bb55de5ed84a49c5e20f9857e"],["/tags/Swift/page/8/index.html","b0a5a6233fc167f10abd0aa075e73ab0"],["/tags/Swift/page/9/index.html","a67aa7c32fd92ee4aa9ecb1b193b1ae9"],["/tags/SwiftUI/index.html","bb7e7b4decba838ac07da4943793df1b"],["/tags/UICollectionView/index.html","2d0e93dd366e26440fb9655682d1f534"],["/tags/UIColor/index.html","0a4d236680776443cf2725701f986a6b"],["/tags/UIImagePickerController/index.html","2cd689f3992a6d7400285cba3a2f7157"],["/tags/UIKit/index.html","e2fbd1ae229d9bdb9cb1e63875a9bef4"],["/tags/UIKit/page/2/index.html","67f124bc2e28e1c5950360c2a4fd63b9"],["/tags/UIKit/page/3/index.html","baa86b72d5ba632565bf4a8ac0d766b8"],["/tags/UIKit/page/4/index.html","8e19de9a02429b865bd6f416405aa6cd"],["/tags/UIKit/page/5/index.html","f825e796f8edb0e1756511c85b37ea8c"],["/tags/UITableView/index.html","225146cf4ea8d871754cfb94c37e2b95"],["/tags/Ubuntu/index.html","169dd5804d3e593074f0ea4a8100161b"],["/tags/Uniquely-identifying-views/index.html","16059517c036dd51f0590ca25d03024f"],["/tags/VIPER/index.html","56caaf17d094fbe516c531e6725bd73a"],["/tags/VMware/index.html","2a9f36bf1c3f39e22da1ca62832449c4"],["/tags/Xcode/index.html","d8ceb1c5b55b46d83621553888c6f75f"],["/tags/appleOS-Networking/index.html","c5e522a9d6b15a0c8ba0e67eceaad293"],["/tags/enum/index.html","b33f31221ab81beb158fb5e249b11251"],["/tags/iCloud/index.html","31ac8e2e0bb7992406833603801f669a"],["/tags/iOS/index.html","97c806677df6647d2d9c5f3ef95925b1"],["/tags/iOS/page/2/index.html","e6b56cc7222a188c9c14992908304a92"],["/tags/iOS/page/3/index.html","50e34bbfaa6bb88c76caaffa53347c1c"],["/tags/iOS/page/4/index.html","8518178d33949264b27ec62458755d9f"],["/tags/iOS/page/5/index.html","b6178be9a0af5a87cdbce3eac7c26f14"],["/tags/iOS/page/6/index.html","16945e0ef377dd5baaefd03c04615c24"],["/tags/iOS/page/7/index.html","96bbfa262545be7180b171df65083c94"],["/tags/iOS/page/8/index.html","20909ed4b9be5b4c761bdb4d91c0d40f"],["/tags/iOS/page/9/index.html","8d16c2e1692756d7d4725038d43b243a"],["/tags/index.html","c71a93b709519068a1bd9a28e07023e8"],["/tags/non-optional/index.html","c3313d137f5ca91f33f44fcb491539dd"],["/tags/random/index.html","79ce3907bee3c229480841d58196183a"],["/tags/transition/index.html","38faeaf69322b9fb636066fde8beb6df"],["/tags/三方类库/index.html","267d1e05beaa1a9b07d2e3d2ce9b467c"],["/tags/依赖注入设计模式/index.html","71171f04d1e5fd6aee4c56127bf7bdd2"],["/tags/函数式编程/index.html","e7b2f8b41f319a2db07c8f549798ccf6"],["/tags/初始化模式/index.html","652576739e3e57edebee221dbad1e0c2"],["/tags/单例模式/index.html","1e4dab1ae318c2aa3bee4ab87eb6daaf"],["/tags/原型设计模式/index.html","b28107813c36cf494014f899b5ea18bd"],["/tags/命令设计模式/index.html","57b38ed4fdaf09171ea4e4d4f8fa4154"],["/tags/外观设计模式/index.html","138ccb427c239b1b2c0b9a23d138d66a"],["/tags/委托设计模式/index.html","34b8e33d5fd83b1e740c932f1929972f"],["/tags/子类化样式/index.html","03c2e0af0d8b347069ad5ecf0d06a310"],["/tags/对象池设计模式/index.html","cdf405a6300c768502fb5e07113d5333"],["/tags/工厂方法设计模式/index.html","161a91414ad43d34045a8009eb678239"],["/tags/工厂模式/index.html","e75efa4ec3cb06e413c88ec05d9e99de"],["/tags/工厂设计模式/index.html","209b5dddcc4b13c40030e2021794160c"],["/tags/懒加载模式/index.html","dcbaa6ff2cb38996df73bb68a4d047e8"],["/tags/抽象工厂设计模式/index.html","e53f2a3cb8f9afd9d758ab2229aa21b0"],["/tags/构造函数/index.html","1bdc478279165b7032c2dfdd7dff9c1a"],["/tags/架构设计/index.html","04127c8c16e933561aa6b77d60eb55fb"],["/tags/生成器模式/index.html","a365f0274fe3ee1d4730e4c4a4518bd2"],["/tags/用户体验/index.html","19942b8b1ea9512085632f254d8a132e"],["/tags/自动化布局/index.html","ff9162fea9c64b70ee8181038b045b92"],["/tags/自定义UIView/index.html","92d372f57eda4f25dc124e7632ea80a2"],["/tags/自定义转场/index.html","662abf194ab3ac24b81ea54d3eed86a7"],["/tags/自适应布局/index.html","5f9eb5925ce450cb360f8a9a9b853e52"],["/tags/设计模式/index.html","dfd9140578c7cc26e2bc9d983a79e0b5"],["/tags/设计模式/page/2/index.html","c6872aa44da6bee53a2348aded1efb24"],["/tags/设计模式/page/3/index.html","f4c45cd88b0f7bea722b1fe6b662fa07"],["/tags/迭代器设计模式/index.html","eb56b8cf0d0d35e7722c78802388376c"],["/tags/适配器设计模式/index.html","60026d7191286a8d7a5be3e671dc3a97"],["/tags/静态工厂方法/index.html","0442fa5516a2e008cd6c121b05d38ca2"],["/为iOS应用构建输入表单/index.html","b226dac320d45ffb30c34931ba841b3c"],["/产品开发的幕后花絮/index.html","f72da350afbc0ce109b0c1f6393b17da"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6d498b3da20ef207a966f902bada733a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6ef8646fae7ed951254e0c9a3ae4f12b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","13f564f6c7f416a476f03b56b9d1d879"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","16b356d01e199275070e241639723336"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","84e383c9413b823cfb61eb651160a019"],["/在Swift中创建自定义集合/index.html","90b9e32ee01f7322ea55157b93a31d21"],["/在Swift中处理非可选选项/index.html","12738ea8a3734138779df9db9df20243"],["/在Swift中生成随机数/index.html","70d3478df2384dc7c4e972d185a30f19"],["/在Swift中重构单例模式用法/index.html","59a8cb6d1f830f83b9ca020d543fcaa5"],["/如何为VIPER编写服务？/index.html","fe6488e4f1de5871f1cb587ccabe84df"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","28671bc8d5fac8333d599c27e3c30f66"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9f6cdd4686425315728eb6cecb5e08b9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7f3bb0d101598ab28ca6c7f9d4b99ee7"],["/如何使用VIPER构建SwiftUI Apps？/index.html","b5b69fa2b4f70439356f67f17a032ba4"],["/掌握VIPER架构/index.html","cfd29a7f3640be0b7fbf496f1a66b231"],["/揭秘 WordPress Hook 系统/index.html","f96e5b0b2b72d6b1d9f66e767f9c6deb"],["/比较工厂设计模式/index.html","023e37b529ccb9fe13fadfde34ebf3df"],["/深入了解Swift中的Grand Central Dispatch/index.html","8088b05639c08503b0918451b3202802"],["/深入研究Swift框架/index.html","22436af9ad9fc9fee711e8b510278c38"],["/适用于iOS开发人员的VIPER最佳实践/index.html","5cb329fa41ae41dcd08ecfd21eadf779"],["/选择Swift而不是Objective-C的5个理由/index.html","cdd79d8beaed75cf4a934b4503d8ec53"]];
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
