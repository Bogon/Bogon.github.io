/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","34413c23f7f9c8a9a9755f9e08118a6b"],["/Advanced Swift系列(三):  Optionals/index.html","ef0f0ade2d237f03e827f642d74b2bd4"],["/Advanced Swift系列(二): Build-in Collections/index.html","fc08008df259c9c362753e8919a96ecb"],["/Functional Swift 初探/index.html","797da69197d92a9f5e28eb94fa6bda7f"],["/NSCODER和SWIFT初始化/index.html","1bc6d7d115fb40c4385c9c193ec17a6a"],["/Swift 5使用UIImagePickerController拾取图像/index.html","6214a80dd4f6171e3cb54d3bdb51a2f0"],["/Swift CompactMap vs flatMap：差异说明/index.html","2077687da71443967007cf1633a3b8a0"],["/Swift Grand Central Dispatch 深入实践/index.html","c2f74faa6baa9bf9acb142f2c0459c4d"],["/Swift Lazy属性初始化/index.html","73a8de9c77525f30529214caf9a85b79"],["/Swift Promises 初体验/index.html","dc33ad6e16eb8097dc0c72110c904ac4"],["/Swift Promises 探究/index.html","b86a281dc120bcb44fc4e2c3c7b9bff5"],["/Swift UICollectionView使用指南/index.html","afc009c847fdafad64d1053cff2b8dcf"],["/Swift URLSession 和 Combine framework/index.html","8fa2d8060a2f9d1a1db088ed6b7f2d91"],["/Swift 唯一识别的视图/index.html","04270ae3e54ca6a6a7505c61987b69df"],["/Swift 如何学习现代UIKit？/index.html","a6c4468dc7856d346d66a20620c4b14e"],["/Swift 用 compactMap 替换 flatMap/index.html","5fc67a6c00ed9e9012a6886e45238bd7"],["/Swift 选择和播放视频/index.html","e8e1f80c503e583fc0a0d8a8d9a79970"],["/Swift中UIColor最佳实践/index.html","e1bac16662528352d29de1e44fbec68c"],["/Swift中快速简单的工厂设计模式/index.html","ccc071cba54ac0d67a70b8553d994091"],["/Swift中构造函数与静态工厂方法的比较/index.html","cd909fac631da4b33335f82cb7de9594"],["/Swift中的UITableView教程/index.html","2288d630d760853e111471fc8ab298b8"],["/Swift中的懒加载模式/index.html","b58aa0218d9e8fe4b13878935a56f89d"],["/Swift中的模块和挂钩/index.html","affef51960ef06422cccecb35ec554cc"],["/Swift使用布局锚点添加约束/index.html","0ead6f5e0660e4bb10e378de3cde505d"],["/Swift依赖注入设计模式/index.html","f71b9758ef1741d32819ceb2cc64b6aa"],["/Swift关于Dependency Injection (DI)/index.html","fac6b65c323391755ca3acf5dc69a80a"],["/Swift初始化模式/index.html","eb64e84e1069a7e1662a7a02b3e3d26c"],["/Swift单例模式/index.html","3f51cc9e38aac57c66c5945f02b897ad"],["/Swift原型设计模式/index.html","7382f8539ee0a1456e333f540e5deeca"],["/Swift命令设计模式/index.html","bce249d674f8e2339981681e45cfe71f"],["/Swift外观设计模式/index.html","cb39f5e95c2a3524ce98885d7ddf9c0d"],["/Swift委托设计模式/index.html","745fbb889c80d8c554d047aaddd9d4b0"],["/Swift对象池设计模式/index.html","ae48bd7d675dbe1b207e28c7b8411d0a"],["/Swift工厂方法设计模式/index.html","556033520d71a73fcca5db01fb280921"],["/Swift带闭包的懒惰初始化/index.html","6c1be38dff3385db28e65129dcb85388"],["/Swift抽象工厂设计模式/index.html","5c122a6a1fb781a65639343814002e4a"],["/Swift掌握iOS自动布局锚点/index.html","ab3bfa5dc523069f3a6372319f179d59"],["/Swift支持旋转的自适应单元格/index.html","9f678b83871f8555111ebd63290484f9"],["/Swift枚举值/index.html","25f37e3f454ae0c82605e1fc603d6cef"],["/Swift生成器模式/index.html","1e093542dc1fbeaa92cffbe2bb39c116"],["/Swift结合Xib文件自定义UIView/index.html","08408bcbc9679e5f57916dd7bbd928a0"],["/Swift编写的20个iOS库(一)/index.html","9eaa836f10f1bd7f716118b29559b652"],["/Swift迭代器设计模式/index.html","26bcdfa699da46b57e8da8c8c95bb761"],["/Swift适配器设计模式/index.html","05ca1ab0f52bc676e307364174e60270"],["/Swift静态工厂设计模式/index.html","5f687f04198821641bb584a9f2840176"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1dbed50ac2472f4ae1acba236c31f506"],["/UICollectionView data source and delegates/index.html","dc4bf539c5d9670493e2d50e8b819df2"],["/UIKit初始化模式/index.html","b1cb21c8bb138230407bfd08952e4733"],["/Ubuntu18.04替换国内源/index.html","ec6bfc1e4b8703498671f6686c2da384"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3cd10b2e3ca6e8b7dc6359aa60367df3"],["/Xcode扩展/index.html","a5291f1dc9380a381a2938d0ed6efea8"],["/about/index.html","017932abb4348fda87573c560c20f6e4"],["/appleOS的Networking示例/index.html","9d5cb577cb1f33f26cecfae84b37de08"],["/archives/2020/04/index.html","4c552a59e6a3c59586cf3559533c0e87"],["/archives/2020/04/page/2/index.html","fe198945219c737fb8c5e3c4e32785f5"],["/archives/2020/04/page/3/index.html","a9e02363248ba2da68ab43b670e8cfa5"],["/archives/2020/04/page/4/index.html","a851f785774a3e761c973a6eeb0b07ed"],["/archives/2020/04/page/5/index.html","25b934cc4572bdbba818b4f212a465eb"],["/archives/2020/04/page/6/index.html","76b837818e2e5253fddc13b8eb9ed1c4"],["/archives/2020/04/page/7/index.html","ef31fa96039a8d933e2d623795bca259"],["/archives/2020/04/page/8/index.html","db282828ce7f8bfa712968984121109c"],["/archives/2020/05/index.html","e0a3f834d6bedf4118cefcc6ae765a38"],["/archives/2020/index.html","81feef7150a3793375de0e8173b58abe"],["/archives/2020/page/2/index.html","a45ee431b754f892172098c5d01a81e0"],["/archives/2020/page/3/index.html","29708a86e601f3287a2b111216aa8fe9"],["/archives/2020/page/4/index.html","0692e7798346408d9c8bca04019c9df1"],["/archives/2020/page/5/index.html","c015a64eac56130335ef61d6323283b3"],["/archives/2020/page/6/index.html","6cd77c2c019089b9044bc474ca564983"],["/archives/2020/page/7/index.html","757425984fb6e58c38fe6891f0825e5c"],["/archives/2020/page/8/index.html","2e6588f7d8839216319612434e80871a"],["/archives/2020/page/9/index.html","0ea023fb79967210a32e39040c6677ef"],["/archives/index.html","6d7d870cbead5d8b3da753d9e55deb1b"],["/archives/page/2/index.html","a1a32311d43f11e5d422c544a4d792eb"],["/archives/page/3/index.html","c545a42790c56ee95db00f18633d66b4"],["/archives/page/4/index.html","5dc67d05bfa298971ec6a80e0f1c868d"],["/archives/page/5/index.html","fbd7afd152f1327b1020ff1806abfb3b"],["/archives/page/6/index.html","8277d33297f9492b498be32a40d4e596"],["/archives/page/7/index.html","b70d68b953eb883299aeef6d9e0fae45"],["/archives/page/8/index.html","6eebf0e01dd8adee42cab77889720864"],["/archives/page/9/index.html","0e496c8826bf4de6059d13fbe174eaeb"],["/categories/Advanced-Swift/index.html","caa52ab2cd0ffb26ed8ce691583ccd9a"],["/categories/Codable-protocol/index.html","0ba537e00eabf39c6ea6cdd777885911"],["/categories/Combine-framework/index.html","b8b995dc3fb697887a79bea7a89f84d2"],["/categories/Combine/index.html","74c699f02affc6bc19509a2b8d564b31"],["/categories/Grand-Central-Dispatch/index.html","b52b06f95e1ff09c241b1133a902833b"],["/categories/Hexo/index.html","622899dfa8e9c3b75beb0b972d96b3dd"],["/categories/Promises/index.html","8de13274005d3e89193f8d68679ba7ed"],["/categories/Result-Type/index.html","8bb8b993f893f501a243b898130ab596"],["/categories/Server/index.html","04e10d487757bd4a5a8fc886d4adbcb0"],["/categories/Swift/index.html","d1be1f3a514128ccb4f63ad1f1065c52"],["/categories/Swift/page/2/index.html","fd8423099ac1ef5066d2b04199290f09"],["/categories/Swift/page/3/index.html","b379a71e669e37e35d6d2654c156fc7d"],["/categories/Swift/page/4/index.html","b236af9904fc38557148149e15a81cf4"],["/categories/Swift/page/5/index.html","59a75160053ada1b3bb07251801ddf92"],["/categories/Swift/page/6/index.html","6e506c45402c72da8aec4c2995df2e51"],["/categories/Swift/page/7/index.html","6e6f826ed084cbbd28708c91d7a37b70"],["/categories/Swift/page/8/index.html","16f726916df6a17b9b2556059d757246"],["/categories/Swift5-2/index.html","878bedd75234fa5f2d0acb9c71c70f6c"],["/categories/SwiftUI/index.html","78f725f8123582c565762dbc1805710b"],["/categories/UICollectionView/index.html","bad8dae6b4498ea30cd4dc2db25db75d"],["/categories/UIImagePickerController/index.html","74f52e860e7d585f97b421e8e6e25a53"],["/categories/UIKit/index.html","5a3fc7e11f8f4ab98e0c26bac92eefb3"],["/categories/UIKit/page/2/index.html","3a04a0749f2e6bd4c7ca62403c28d636"],["/categories/UIKit/page/3/index.html","0a63b5ba8f6a7318ce1b4da7d8c15e6a"],["/categories/UIKit/page/4/index.html","8448005ef604be6d70ee1b01154c0503"],["/categories/UIKit/page/5/index.html","f9b26fef58194d2f7aa052dda4e4ea32"],["/categories/UITableView/index.html","05c964e6721275634f2f05d57ca64796"],["/categories/Ubuntu18-04/index.html","6d019b001584d38f19a794fdeafdfb3a"],["/categories/Ubuntu软件源/index.html","c2c3a86100c8713c67926f547b201eb0"],["/categories/Uniquely-identifying-views/index.html","82938d693385c23c9d9b8b973251297c"],["/categories/VIPER/index.html","ab2027e6472694e8958c441d255a3a36"],["/categories/Vapor4-0/index.html","17068b761bf42d7c9bbd1369e71224f0"],["/categories/Xcode/index.html","40a6d4fc776cdd84ff80463f7cdd7500"],["/categories/appleOS-Networking/index.html","aa4e69a8b71316addac8b74fbec7b948"],["/categories/enum/index.html","64fe7ade601d04cdf00942579d85100e"],["/categories/iCloud/index.html","050bc96d357cc99d65bc055eb6d3caf1"],["/categories/iOS/index.html","37cec71f4aa33475d08aaea070788990"],["/categories/iOS/page/2/index.html","9519df3f3791dd4eb7bd9d12b000f494"],["/categories/iOS/page/3/index.html","2af9e466af21a9aa1c9ff29e1130eaf7"],["/categories/iOS/page/4/index.html","73cad3f3f6daadcdfabbe5757a7c2f8d"],["/categories/iOS/page/5/index.html","2f9bdc67e4ca2387294685fbb1154ab2"],["/categories/iOS/page/6/index.html","db5ada7fa0cda1fc2cfab1a84ca1bbcf"],["/categories/iOS/page/7/index.html","7b56c0a0408b086539cea5b3e5089ef5"],["/categories/iOS/page/8/index.html","8f04600c22b1b8c574bf47a2aabbee3e"],["/categories/index.html","28022d53750ab01f5a4ff6eb3b44f5e9"],["/categories/random/index.html","f1c26220f469f7dd6b67f3b9d2921b10"],["/categories/三方类库/index.html","f8fca0562b377d51dc288ad9003dbc03"],["/categories/函数式编程/index.html","180f7cd1fa0514988b62b03fb9c9d3db"],["/categories/子类化样式/index.html","f9adeb0c5bb466d8796d3d43168874f8"],["/categories/架构设计/index.html","af79cc1e20fb292bc02da81978a05ee0"],["/categories/用户体验/index.html","2d122c965334f595600ac0f8b6723c41"],["/categories/设计模式/index.html","a39d4a38abe84653ea87ea958f4cec18"],["/categories/设计模式/page/2/index.html","972e2cb58125fee4b108da3a790b68f8"],["/categories/设计模式/page/3/index.html","a7bafd4778707ae16bc2613fb1ec7d0f"],["/css/main.css","d0e30474e17fb97a8dcc724b235b7bf4"],["/hello-world/index.html","9e4276a32f4e53ddc43d8df1ba468a6e"],["/iOS VIPER架构深入实践/index.html","b1cc85257e0c7dd71c683f0ebc730bce"],["/iOS 自定义视图，输入表单和错误提示/index.html","498476b24a06104f843b6e160a16e394"],["/iOS如何使用iCloud文档？/index.html","8fe1e167b183f4eb61cd5559f9bc1eb2"],["/iOS子类化样式/index.html","96b3b20c5842496476e2942b7c51dd79"],["/iOS自动化布局编程/index.html","c57a425180344e7cd4b6cecb9c602499"],["/iOS自定义转场(By Swift)/index.html","81fe763c321f2dc43782a89b7b3fbe65"],["/iOS项目架构：使用VIPER/index.html","bd3f44bf305bcffa3703a882d89a9aef"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f52c143372b7187365ac12c749f993a9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","73baa0d10b8b981d39e31f3f6fe2a499"],["/page/3/index.html","33e35e60dc2d1c03d4dc24ccedb50122"],["/page/4/index.html","8df48a48729057ba5c14e65ea81cf774"],["/page/5/index.html","e32186bfb30a1a36cf087d6f0aa045ce"],["/page/6/index.html","229a044eef1a05743c923de643e89839"],["/page/7/index.html","74ccfd1ceb264ae649d66eaf1e26cd48"],["/page/8/index.html","e5eb097acd3e8ba61b2e65364fea967d"],["/page/9/index.html","951ea09c26094d02e391c7abbc1adba5"],["/schedule/index.html","7b82854b83bfd4650ba26af04c05def3"],["/sw-register.js","30d1e8cea0296eec85e2a81e36d6b479"],["/tags/Advanced-Swift/index.html","86d7a6bec46b5d292e45d95891920216"],["/tags/Build-in-Collections/index.html","68c4f0e040eb77c7560d0a60321b5abe"],["/tags/Codable-protocol/index.html","b51f1937f8f2857a0c62868c1bdbcaac"],["/tags/Collection/index.html","1f05d443763d17b3dad60c186715d02a"],["/tags/Collections/index.html","dd5cb9a3a44ce60fae2b1af3e2f4ef1c"],["/tags/Combine-framework/index.html","8ceef82e3d95a5750bc9055b1eac415c"],["/tags/Combine/index.html","ca1c27ff45fe9788cc79a58b7d541d69"],["/tags/Dependency-Injection/index.html","bd7b24f24ff6a255fdbbb9e4d2ffafb5"],["/tags/Grand-Central-Dispatch/index.html","b3c3fe6dbb943775841d8892df41d3ef"],["/tags/Modules-And-Hooks/index.html","aa23956a1eb68e9aee9e5e71a0b3b20e"],["/tags/Optionals/index.html","f2b297f1d88a9f5884f89ebc95025a25"],["/tags/Promises/index.html","eaf77768f6da6c6d0f68b4ade79f4150"],["/tags/Result-Type/index.html","49d7f0e930f730ef79b446b9b53a415f"],["/tags/Server/index.html","ce554afe1f972e117260bd0b98b9b95f"],["/tags/Swift-5-0/index.html","a8055ad4b82841f0325e2bf0396c3761"],["/tags/Swift-Package-Manager/index.html","55ef5275988eeba37c0e6e6d727119c5"],["/tags/Swift/index.html","2a8def1372242ae734f237815fca9261"],["/tags/Swift/page/2/index.html","60bd93b641cc031d701408fa2b515ff5"],["/tags/Swift/page/3/index.html","04cac89f67cd442b1432f2314485cf5a"],["/tags/Swift/page/4/index.html","66d19ef1316cf02206bd876159ba64cc"],["/tags/Swift/page/5/index.html","9af94649a4963486e3063eb23bc63d34"],["/tags/Swift/page/6/index.html","f063378a8ea32651448cc0f26e6ca851"],["/tags/Swift/page/7/index.html","e785832dc02fc4e7ee4cd26862983a13"],["/tags/Swift/page/8/index.html","8ae8f0d78f5004b1beee040529ae77d0"],["/tags/Swift5-0/index.html","fb350dcce1a2862cac744bda5c057496"],["/tags/SwiftUI/index.html","ba746a4458349663e35323202d75b4b0"],["/tags/UICollectionView/index.html","692e738c3cc82f6d78cc03222298b984"],["/tags/UIColor/index.html","c4a6692be0a8adad7ec4822754c20c25"],["/tags/UIImagePickerController/index.html","423ee9b5a49d2088a315e91466e2149f"],["/tags/UIKit/index.html","9c9288b4173a69034613f1b62b0fbebc"],["/tags/UIKit/page/2/index.html","371d619e2e39f8ffd1493fcd3ef6cf77"],["/tags/UIKit/page/3/index.html","d6304f1fb0d2b88b665cbd8ebfae94b7"],["/tags/UIKit/page/4/index.html","943dd424e8474c3814875662676891ae"],["/tags/UIKit/page/5/index.html","7cf46be9716aa77238dc0886c72bb048"],["/tags/UITableView/index.html","7630813d4b9ce3794f4f36d96ef3dfd4"],["/tags/Ubuntu/index.html","b5795564ea2e6cb08acce44ab356f3fc"],["/tags/Uniquely-identifying-views/index.html","19cfc5db0ef3ff627ac909ede1717847"],["/tags/VIPER/index.html","0eedcbb649f84234f8e6e76bb4432b0b"],["/tags/VMware/index.html","b4ab68209332c22c2cf2d60ca062f87f"],["/tags/Xcode/index.html","f90329c26a90425f44b3217bc569798c"],["/tags/appleOS-Networking/index.html","0aa78dcb9624923ad448c172a94770b6"],["/tags/enum/index.html","c6876e8fc0db0ed84e075a40153e9b49"],["/tags/iCloud/index.html","3c3eec44705831458a4c76cb4da92d00"],["/tags/iOS/index.html","8308f24bd5fffeec92159cfe9b129ca1"],["/tags/iOS/page/2/index.html","010e7271fb9dae26801ec5b065b212fe"],["/tags/iOS/page/3/index.html","4a4adee08ba6f13819ad7e2af0dc938f"],["/tags/iOS/page/4/index.html","00a81c27372877ef8edbf81eb2fc803f"],["/tags/iOS/page/5/index.html","0f55aba5e993198261422db872dfa22e"],["/tags/iOS/page/6/index.html","9f40e5a9c74cc7a977cb2bbcc4383f94"],["/tags/iOS/page/7/index.html","4803f5639de23de3ba622c0cd55fa889"],["/tags/iOS/page/8/index.html","6e0185f73c5e1e255533d3f6b63b6b6f"],["/tags/index.html","6d2f0607fc45be3ab376bac2ce8c7288"],["/tags/non-optional/index.html","b9f29755f4bdd906a4d5a8e130e4500d"],["/tags/random/index.html","9310bdd9019f9c1decc9b1304e8a8347"],["/tags/transition/index.html","d6dd35dbabd76221a5c2dfdc4394db1b"],["/tags/三方类库/index.html","be097a30e160e341963bc592d0378b04"],["/tags/依赖注入设计模式/index.html","7e722972b9bf56e1620b0c87a06aa872"],["/tags/函数式编程/index.html","2d86053891d002c1aa4f8d9e5c852bc0"],["/tags/初始化模式/index.html","6a5816bff1d7b64c6567a80c6d5ec2a1"],["/tags/单例模式/index.html","ad960f66ed9bcd47f9d547d48d2acd3e"],["/tags/原型设计模式/index.html","c1ddaf4ae93aacbf03c4810c2512d362"],["/tags/命令设计模式/index.html","8907340f94b138b6569bbbc257f18944"],["/tags/外观设计模式/index.html","2261d38d0f098811c6bcb3ed739a8f4b"],["/tags/委托设计模式/index.html","62ea33599ffd6b391a5fdb7121d31931"],["/tags/子类化样式/index.html","cadae903eb62a9030bc324efc89b922f"],["/tags/对象池设计模式/index.html","42534dfe2cac671d86b7646adc3c19d1"],["/tags/工厂方法设计模式/index.html","94bcb64bcc78ea5ad9bfc07447d6d160"],["/tags/工厂模式/index.html","f1df9ed3a5be8bbfd42570897d2ff1b6"],["/tags/工厂设计模式/index.html","91f25d2f99e2a1a98b9a625b52eea03a"],["/tags/懒加载模式/index.html","e4473713b38ecdb5d5439e835e34f356"],["/tags/抽象工厂设计模式/index.html","80cefe804d5d9b4012aa6a7a32c99bf8"],["/tags/构造函数/index.html","742bf3c4e26dbf517c06d3d0bffbd23b"],["/tags/架构设计/index.html","4948c519ddf15a70eaefb8355e63b073"],["/tags/生成器模式/index.html","0ed7b817ff0adf5bdcd655001ec214ef"],["/tags/用户体验/index.html","011a6fb7a514a4854552ee73cf44ccc2"],["/tags/自动化布局/index.html","fde36f48cf95f1a9396c440a25c0b9e7"],["/tags/自定义UIView/index.html","5668ba8205822bcc70c871a08bd59215"],["/tags/自定义转场/index.html","29353a573a3ccbb7bc9fcb2f49299fb5"],["/tags/自适应布局/index.html","93e55472f81764eef6b185d9150f5e79"],["/tags/设计模式/index.html","2abddcc81ab305b9f3b86e75808c7a7f"],["/tags/设计模式/page/2/index.html","3dadfd7aad3cc954647ae8ce8642d5f0"],["/tags/设计模式/page/3/index.html","df29e106e68188aa558b38d3aaf58b95"],["/tags/迭代器设计模式/index.html","c3b50104c15532a92d04643904713f7b"],["/tags/适配器设计模式/index.html","2e227005fa91a19bfd2a0814bc46277d"],["/tags/静态工厂方法/index.html","1d2f0bc4f2b56820de0f2efadf3a49b8"],["/为iOS应用构建输入表单/index.html","2be0b12a654f94a282364ace958bdcbd"],["/产品开发的幕后花絮/index.html","dbe307622bb1a0a5f186fa270276ad86"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","4e6de6f5b11a9c9d7b6121cb781e4799"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","4cbffa76fb9729fa2e9ee9594a4a35a7"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","ea8139d41ee3b84c200b07104971dde5"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","95477351ff37c97b4c8159b1ac661a20"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","734d47d5adae79e7959ab544fe979608"],["/在Swift中创建自定义集合/index.html","c79afe9d61185a89c6baf72f8a5c7e60"],["/在Swift中处理非可选选项/index.html","90a56db2d5398d3ee9bbdb80d29ae404"],["/在Swift中生成随机数/index.html","b0f99c35eeb48a818bb47b7b91ad580f"],["/在Swift中重构单例模式用法/index.html","5d4e0e63e605ca505003e1570b4bdb28"],["/如何为VIPER编写服务？/index.html","eec183c1c1d4683590e6418f4382e83b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","33d7b3e97479bc57fc1542cbbdb4e256"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8ddf50fe054ad8fcc839fcdf6c55a15a"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","21719ec481f06ba78dcbdfd0ca8c6c5e"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c8b0925d5e5fbfae35233c28fed89b9a"],["/掌握VIPER架构/index.html","f9bb71e86594e4bdb6fc4018a0e1debd"],["/揭秘 WordPress Hook 系统/index.html","857975dfd0fca8f30c438c52ddebf74b"],["/比较工厂设计模式/index.html","23d43db1b3b33bf4dc7681d55b81dbef"],["/深入了解Swift中的Grand Central Dispatch/index.html","831617dfe1301faee9178442308db811"],["/深入研究Swift框架/index.html","7076a430e1be674f25ad689270117cdd"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2718410470a60da21e471b0dcebf8fb0"],["/选择Swift而不是Objective-C的5个理由/index.html","3cacf72b2531ea0109cf732ea89941c4"]];
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
