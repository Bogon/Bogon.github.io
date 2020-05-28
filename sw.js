/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","acd6c2d041e86ce9923e40cb5b073c16"],["/2020年iOS面试题总结(三)/index.html","523e6ad3d3dc24985c8d9d9791ff376e"],["/2020年iOS面试题总结(二)/index.html","6b3aff0c563d859013eec9354d91667e"],["/Advanced Swift系列(一): Swift 简介/index.html","8136fb243a9fa5b969df718d319be418"],["/Advanced Swift系列(七): Strings/index.html","7fb8afc100f162dac103e45736644cc9"],["/Advanced Swift系列(三):  Optionals/index.html","d7c83f9c3e8da2f356ffa9606d2365d4"],["/Advanced Swift系列(九): Protocols/index.html","f3bfb9bc8ead9db1ebfe504005fd1589"],["/Advanced Swift系列(二): Build-in Collections/index.html","9e27d798684e7e76cf4421d817177c76"],["/Advanced Swift系列(五): Structs and Classes/index.html","9f1deb034aab62e3f0907b0bac08fd0a"],["/Advanced Swift系列(八): Generics/index.html","a0cde55d5492405c04567bab5a931c19"],["/Advanced Swift系列(六):  Enums/index.html","de882a91c0de31b6c1feba1243b51275"],["/Advanced Swift系列(十): Collection Protocols/index.html","46093f81fcd68e3e12e567f3019b1943"],["/Advanced Swift系列(十一): Error Handling/index.html","5d6b2beb00068250f55ccb3313ed81b2"],["/Advanced Swift系列(十三): Interoperability/index.html","e151108c8a5cf67c7ff6dd2755719717"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","bfc38c28bc28d509e1e4c29f153d6eef"],["/Advanced Swift系列(四):  Functions/index.html","2afd566b9d29a826625c88a8ad386351"],["/App Architecture系列(一):  简介/index.html","97e3847187a8bf62a4c549d73b2dfe7b"],["/Functional Swift 初探/index.html","a7f37dc1545f86bb4b7d3e532944f335"],["/NSCODER和SWIFT初始化/index.html","64b45ad869b35b06b36a7540a46bcdb4"],["/Swift 5使用UIImagePickerController拾取图像/index.html","5636cb37aeb4ef2e96444e3e09c36d61"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","187f5020ceecd55e41bd784253481580"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","7b22321e733c7c77204b20ebface6b95"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","fd648a82c37577b0e98095ba727c6ae3"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","0fc6bbe5869e1766f1e31e149e82d71e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","de3ec3302f4ac1873af5871827609d27"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","839f79730c9250cd67bfaba2b51a1afd"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","eb9a08dea1b93f0212224b1dc37b27b1"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d1c064e8e52f19db81fdccae3c668fb0"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","51116885aa331a305f6e1b329230c524"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","1eef7ac6a48f5739f05fd14a8099cf85"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e22757890dfddfc7d5ea243f837a277b"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","51d254c02f2ecf5d46d0a5dc2c2179d3"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","1f04e0427df554aeb15b8bd9397921e2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","02aa56ffd306e7f280ece7f360a1a05b"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","13facdb6eacdedde682dfde769350575"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","c517ac6e465710ffce897ca455083924"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","331e47382f05e552c1052c279ac0b72a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","8f7ee8c2365c77df7128e53232e20f84"],["/Swift CompactMap vs flatMap：差异说明/index.html","2b6b53451ec22464c8210a13cf183985"],["/Swift Grand Central Dispatch 深入实践/index.html","48dcb64a25e5b855c88a9d77bf294bbb"],["/Swift Lazy属性初始化/index.html","730c173b6446ad6c0b0dafccd7613abf"],["/Swift Promises 初体验/index.html","71921fa73f4bb0541060b716cd18b773"],["/Swift Promises 探究/index.html","b83053cafd113af4c05a6a53c8855724"],["/Swift UICollectionView使用指南/index.html","3b926fa4002f936673872961442b3670"],["/Swift URLSession 和 Combine framework/index.html","10adf849bb2c5abaf18ffacb3deb539a"],["/Swift 唯一识别的视图/index.html","3efb81d89b402c9e3b186e4d98ea714e"],["/Swift 如何学习现代UIKit？/index.html","5a0d169a750a55608f7f5c60f8c79be2"],["/Swift 用 compactMap 替换 flatMap/index.html","cb52c398bef8eb5f52e1f7657ef81664"],["/Swift 选择和播放视频/index.html","453bda9d9bc787babdb9e1de7cda65d0"],["/Swift中UIColor最佳实践/index.html","38be2ea88be73a3aba0a279be1f42403"],["/Swift中快速简单的工厂设计模式/index.html","e7cfd5e0d35fbddac7910f5889583ae6"],["/Swift中构造函数与静态工厂方法的比较/index.html","c7c800799e9352c82238d2d51ac8e0fd"],["/Swift中的UITableView教程/index.html","c444bb46bd93f8904949f085c820b34a"],["/Swift中的懒加载模式/index.html","b01e887cf849b6273a6508d59cb4cee2"],["/Swift中的模块和挂钩/index.html","36d36fe52eb20478efd4f6443ae56186"],["/Swift使用布局锚点添加约束/index.html","32a9c3cfe048445463c95281ab931b25"],["/Swift依赖注入设计模式/index.html","a61d77016de9df57cd8201c8ebb13ae8"],["/Swift关于Dependency Injection (DI)/index.html","4ee8dca4ec13153d57d557f6bcae3be5"],["/Swift初始化模式/index.html","761773bebd8fb0ebff466c7ca79127f5"],["/Swift单例模式/index.html","8cc28f5748366976bf6968bb74231d2a"],["/Swift原型设计模式/index.html","48e2ea3420ca4889b7e3325404f6950f"],["/Swift命令设计模式/index.html","f4249a7d7360048bfa5abee7e4459d25"],["/Swift外观设计模式/index.html","bc94b820eebd5b1556a03ccf364b7c9d"],["/Swift委托设计模式/index.html","11e7a824e34c2aa5b551e4c9477af4cf"],["/Swift对象池设计模式/index.html","180342dce853f27199c15dd248fa105a"],["/Swift工厂方法设计模式/index.html","91dc249a0590a49c0bcb868e51ab7279"],["/Swift带闭包的懒惰初始化/index.html","bde35e234908bf68670c766c1bcdfa9a"],["/Swift抽象工厂设计模式/index.html","bac12ced1bb6478215b89d042d599c1a"],["/Swift掌握iOS自动布局锚点/index.html","9608b6a20d5ca455f2ef2acf543c881f"],["/Swift支持旋转的自适应单元格/index.html","13b2c397dc9e8d17e1f06bdd7a3a203a"],["/Swift枚举值/index.html","d0b366271d19836744001336455e38b5"],["/Swift生成器模式/index.html","6aebdd5803776be0352bb589d3c6d918"],["/Swift结合Xib文件自定义UIView/index.html","b842d96eaf2466cd54be3f9e421bf202"],["/Swift编写的20个iOS库(一)/index.html","879d953675f1e3af9ad16881d509bcd0"],["/Swift迭代器设计模式/index.html","8135a1cdb9bba014d48bb59d18a55308"],["/Swift适配器设计模式/index.html","17e5943fca998226c8770f0a51f3ab16"],["/Swift静态工厂设计模式/index.html","aa2ae6c0c92b0c633cb0c20cd63237f1"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","547700304bebfbd6419ba30dddadcb8d"],["/UICollectionView data source and delegates/index.html","b7eaae8bd8a5bc89856c62ab02070a9e"],["/UIKit初始化模式/index.html","fb413e18e112f61ac876422eab36a2dc"],["/Ubuntu18.04替换国内源/index.html","83c78f74c04ef6b70da996b55583aad8"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c3a28be187bc42e37141afc6953d32c2"],["/Xcode扩展/index.html","66fb88189e02315460f1d853915eb6fa"],["/about/index.html","59f87e94dd2a12c498738eeea8934b73"],["/appleOS的Networking示例/index.html","2ce306424ec46cf447d905b76ac5333f"],["/archives/2020/04/index.html","df5dd6e7d234feb243c2de60a675efff"],["/archives/2020/04/page/2/index.html","2b1b30de4c34f47c0c8bd4cae91df151"],["/archives/2020/04/page/3/index.html","867df824eb0f500baa68bb248483277d"],["/archives/2020/04/page/4/index.html","f10cfda2ec0a2ad3d7ad2a6b8c785e53"],["/archives/2020/04/page/5/index.html","a1a01fa848c56f54816e73072997399c"],["/archives/2020/04/page/6/index.html","7ba1354ca11efeb84c5e327b641279f1"],["/archives/2020/04/page/7/index.html","44676dbd9fd2b9dbe3dbc8c99c8959d8"],["/archives/2020/04/page/8/index.html","ea013afb50e5338e97f47b6c837f36ed"],["/archives/2020/05/index.html","471cda3e389244df219796f2526cfdd5"],["/archives/2020/05/page/2/index.html","ad66717f0f08a51ff8f2039d5ab13b15"],["/archives/2020/05/page/3/index.html","4c20d4e54fc71ebc4dee5721e41711df"],["/archives/2020/05/page/4/index.html","0990b84529d1aaa0a8a0104747007589"],["/archives/2020/index.html","6a4d28dd8d0becd639203b8097656e15"],["/archives/2020/page/10/index.html","aa9a8d048f901dfb344846a55f40a868"],["/archives/2020/page/11/index.html","b835ee8e3e4a92b34a3e4e5d98c0cc65"],["/archives/2020/page/12/index.html","c25f62189003f8a067f69f36d0558ea6"],["/archives/2020/page/2/index.html","d8f5d60762a5d413fe8475ddf907152a"],["/archives/2020/page/3/index.html","8f55946066095d9b0faf68b892453371"],["/archives/2020/page/4/index.html","d5a2d0086aa03ea264a31613440e6006"],["/archives/2020/page/5/index.html","4685226f353dcf94d7ee3fcf98f3b705"],["/archives/2020/page/6/index.html","04b975b0fe218c9333a04381c690682a"],["/archives/2020/page/7/index.html","38870cab96db885b6df405eb83ba0d4d"],["/archives/2020/page/8/index.html","e25d8a87b1c251c06c7d5b5001d308c3"],["/archives/2020/page/9/index.html","742c1b53f694293b803a00b4bfc39e8d"],["/archives/index.html","b016c7f8cde081dcafe40106f142d497"],["/archives/page/10/index.html","ad5ef9143a4d9961e617447dfddd067a"],["/archives/page/11/index.html","e100850e7ac4d0f72d463ae2008bf07e"],["/archives/page/12/index.html","27caa9a8d0f1a19f99e22c2eb1af7af4"],["/archives/page/2/index.html","012ec3176d60137806ae76f94751e07f"],["/archives/page/3/index.html","c469fd3898397ad3ae4a18e0f242f45c"],["/archives/page/4/index.html","ab0aee8706d595cde289664baf63a795"],["/archives/page/5/index.html","1c5ad808014a14f810fd16ff616ca4ba"],["/archives/page/6/index.html","26db5a2591d2f820f98a61368ce8d2a7"],["/archives/page/7/index.html","f43ea65b596d4ce1e80ae492ad3d8a0b"],["/archives/page/8/index.html","2c537a192e89ebe6f32c5818e62e3666"],["/archives/page/9/index.html","9f71567e06eb77893a035380d8468991"],["/categories/Advanced-Swift/index.html","cc48923368bfda86d12e9d719d7183a0"],["/categories/Advanced-Swift/page/2/index.html","f961342e6ceb89ef836117bc4065a3d5"],["/categories/App-Architecture/index.html","9a8b72ac92523909508e828d4a672bff"],["/categories/Codable-protocol/index.html","e7018f029a92b89a12628af0e4fa1c34"],["/categories/Combine-framework/index.html","fed57b206783a4f0f2f266cc7ad8930a"],["/categories/Combine/index.html","5c7d936da01647572f075ec3033361f7"],["/categories/Grand-Central-Dispatch/index.html","044b4e2dcccf0ca2e0511804ba1e6de8"],["/categories/Hexo/index.html","b894a452ac0c80538437569a7078c71c"],["/categories/Promises/index.html","0c857f8d7ff7729b52f0d0801931508b"],["/categories/Result-Type/index.html","07c3d24e1b56bc5ea771e7a7d0a76cdf"],["/categories/Server/index.html","30e38270f4b8617f3ae75461fe368b5d"],["/categories/Swift-Apprentice/index.html","213a3c88cef402ceab5139e1a4076bf5"],["/categories/Swift-Apprentice/page/2/index.html","3783b3a3b590144e2920b2c837ab17fe"],["/categories/Swift/index.html","c901d1fa3b71f9ae6e3d0efceaa92dcc"],["/categories/Swift/page/10/index.html","0a2525b4e7a284a7449c4860b8620534"],["/categories/Swift/page/11/index.html","b9d36d57f3ca81dd2f56baf642b43480"],["/categories/Swift/page/2/index.html","312d1ac59c4afb533fe4c4f8d3cee7a1"],["/categories/Swift/page/3/index.html","d2edd0bcadffe3dcf195e9d2ca39e54c"],["/categories/Swift/page/4/index.html","54833145218820312ba26ca27e0c494d"],["/categories/Swift/page/5/index.html","fba68e3afbd583a3369e09eea686c98c"],["/categories/Swift/page/6/index.html","ed6699f34681eb83102c6a1936e02c04"],["/categories/Swift/page/7/index.html","963d73b8e6a05eae6c1accf93dbb3a17"],["/categories/Swift/page/8/index.html","000bdf7ecb98588c7ecb8db1ddac3c5b"],["/categories/Swift/page/9/index.html","cb4401f037eccdaddda1ed116585d7e2"],["/categories/Swift5-2/index.html","2a1bb88f0e9f84d673f49f31a2406680"],["/categories/SwiftUI/index.html","e31e8f5dca84e88b4aac6d7c3900ab52"],["/categories/UICollectionView/index.html","90ca2e4e418cffee9758ee511f670711"],["/categories/UIImagePickerController/index.html","325dedbc6a3ddb5bf3d433b0bf1806c4"],["/categories/UIKit/index.html","383a011f4065ddd8c8cbdb0a81cb3d22"],["/categories/UIKit/page/2/index.html","408a52dfa8ea92a1f1c44dd4ad7624c6"],["/categories/UIKit/page/3/index.html","942b67ad157d26f55cbe51a04aca860e"],["/categories/UIKit/page/4/index.html","8d20703df1e8456e8a9b2213ad77cc4b"],["/categories/UIKit/page/5/index.html","5adcad7b56b493c6a196d2e6dac82584"],["/categories/UITableView/index.html","979a49b21111d034966046930582169e"],["/categories/Ubuntu18-04/index.html","2056637cc0460b377bb4a5a7ef3ca527"],["/categories/Ubuntu软件源/index.html","92daf55a8f4d9706851a992709180fec"],["/categories/Uniquely-identifying-views/index.html","3cf72519c211c0ce566dc4a571616c5e"],["/categories/VIPER/index.html","229988a6a09ea3c66509a9890ccdb818"],["/categories/Vapor4-0/index.html","5e822564a61e16ccd2d2187bc5ef4332"],["/categories/Xcode/index.html","f4c6fb4de47b3a1917a25c52b5f8a9c4"],["/categories/appleOS-Networking/index.html","2e902b344b465ca276e15d4cd8a11f76"],["/categories/enum/index.html","d5a75684b34210d9a397b526ed94dc32"],["/categories/iCloud/index.html","a25748003b058e765762defa234a004a"],["/categories/iOS/index.html","815bb96e8259d32bc2568582609ed15d"],["/categories/iOS/page/10/index.html","38d25dd5ea22e0c08ff4b7ed0d486072"],["/categories/iOS/page/11/index.html","bb6b0da8ca5e99db3dc63855f6678e7d"],["/categories/iOS/page/2/index.html","93365ea6567066359c8c7931bbc474ac"],["/categories/iOS/page/3/index.html","6e5cdf62351ee3aee702c4d6fbfbde6c"],["/categories/iOS/page/4/index.html","54e5211f5e2ec6dfc80f13823ca659e1"],["/categories/iOS/page/5/index.html","59448ccb996c7104ae31233a1b45e579"],["/categories/iOS/page/6/index.html","472f26a372a7b4f712dab7f8f0b3c28d"],["/categories/iOS/page/7/index.html","dd20cbe8d9a51ff1d805f7a4f38b85d2"],["/categories/iOS/page/8/index.html","2cc1b1d699da5ea74b12cb6bad6c33f3"],["/categories/iOS/page/9/index.html","ccea02d7835e5587a7340589df332538"],["/categories/iOS面试题/index.html","c0fe543f88160709b9e13ac90ec31124"],["/categories/index.html","53895291fd38ddc4706f20073d7bddef"],["/categories/random/index.html","b8e8cd794655cacff060231b8f7683da"],["/categories/三方类库/index.html","02c30fe40b3b1f18687a4d01944b672e"],["/categories/函数式编程/index.html","65b80ef68fa1f760ea1251c5a4a8f58e"],["/categories/子类化样式/index.html","262941b163be6c8edcfc81c62fb4686e"],["/categories/架构设计/index.html","eb5433551acb7d283cea3e7ee1975e69"],["/categories/用户体验/index.html","9ed66d2c6c8a7ccce3a731cbaf6097fb"],["/categories/设计模式/index.html","d44a9b02b7951bc3aea65be5f4481cb8"],["/categories/设计模式/page/2/index.html","a8c5a5c40fad875d26fdd936df1b22e2"],["/categories/设计模式/page/3/index.html","327449ca06e707543d53f58838c279ac"],["/css/main.css","20f8d18ed78a2542c490ad5105976e49"],["/hello-world/index.html","1ba0cd286e802be23c37ab72484c61b6"],["/iOS VIPER架构深入实践/index.html","a35e82fa58148188f36468ce6c31edd9"],["/iOS 自定义视图，输入表单和错误提示/index.html","6eeec1111a9b1a727b77c540d39a8234"],["/iOS如何使用iCloud文档？/index.html","4d36d4dc5c8fe0ece1dc80f244fb96b7"],["/iOS子类化样式/index.html","29c69dd36fc419c7cfd4324a10a721d7"],["/iOS自动化布局编程/index.html","22612338f6758c8133a2df684fd6a3ac"],["/iOS自定义转场(By Swift)/index.html","846cdc0d4afe2e836fc3b095b375fa5d"],["/iOS项目架构：使用VIPER/index.html","974169d2971ff944e8d5c39c11972334"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","95f8cdbb0ec6ea363ede22c29e93b9e6"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8a7b24da3fb4cfc18df0e09e7cef6377"],["/page/11/index.html","311e16531fe8fa155a4225f9d385c67f"],["/page/12/index.html","bf6c6c5ab7ea2338d467b0423a909296"],["/page/2/index.html","ac8acecc3e1db9dd24f16394a71cfe4f"],["/page/3/index.html","89f7757e4cb4b090e5293657011573af"],["/page/4/index.html","b59168eec3322f31087a90b551c4964d"],["/page/5/index.html","2c89285002e5fba9a0a49c39f89ff042"],["/page/6/index.html","0bbcba98982e15a1bdff0a1a0cef5e5a"],["/page/7/index.html","3c7e5bcae0cfe316658e44bafcd364df"],["/page/8/index.html","cad097666a75b792980fa5f44b313605"],["/page/9/index.html","289a9ec18c89ad14fb9cc8b8a23b88aa"],["/schedule/index.html","5f572bbaa0962bc8221d195df9f585eb"],["/sw-register.js","39eec9d20c0acdc1b0908b093e1ccc05"],["/tags/Advanced-Classes/index.html","26638d8e6d2f9d13dd64a2f2e3480c82"],["/tags/Advanced-Swift/index.html","1b65e3ad718f990d193d86d17483ee88"],["/tags/Advanced-Swift/page/2/index.html","5c0699d8e6bfa9dbeb6f8357d30a33dd"],["/tags/App-Architecture/index.html","f492da05b62e11db087b1edf7a191d53"],["/tags/Arrays-Dictionaries-Sets/index.html","cd303416a9a9435e08a1ba9c2bb514a8"],["/tags/Build-in-Collections/index.html","1c16b4a3e5b0b1132a5d35cfb5b1aeea"],["/tags/Building-Your-Own-Types/index.html","1d85bb442f750264a8548699aa226322"],["/tags/Classes/index.html","e14878af6996fbe4a15498bd232b3204"],["/tags/Codable-protocol/index.html","3219a6def1bdb10988ff3ea7eaec259c"],["/tags/Collection-Iteration-with-Closures/index.html","78187e811dc00b8e6799557b4cf229fa"],["/tags/Collection-Protocols/index.html","55c7f882e6cfd71b95d19318253b33c1"],["/tags/Collection-Types/index.html","e0ccd5772bce4924e4992a771e14ca59"],["/tags/Collection/index.html","8270240a19e1af7d4295e223c344b015"],["/tags/Collections/index.html","4a06d5214ea072cebebb885a45548b08"],["/tags/Combine-framework/index.html","9c90e87fa41fbf0e47b18cc7503f7aa9"],["/tags/Combine/index.html","cee84ccb1bb8ab579145a4c5f0532735"],["/tags/Dependency-Injection/index.html","69990abb4713350007a3cdf3628dd122"],["/tags/Encoding-and-Decoding/index.html","4b34180b83cb6c5a6fe3807aa8cea707"],["/tags/Enumerations/index.html","b659c5d838f95ec5a5128935283af2e2"],["/tags/Enums/index.html","c18c3a12e5018ac0c7e8ce1f9dfa2fbe"],["/tags/Error-Handling/index.html","83eb0d54fd9b4ed94472a72ad60f51ec"],["/tags/Functions/index.html","1ffa1cd6e803b344255d9693765db0fa"],["/tags/Generics/index.html","3ea8e4ee7e30fa302e753266c509961d"],["/tags/Grand-Central-Dispatch/index.html","f16460be33e802d97ec670c22c3a7753"],["/tags/Interoperability/index.html","751719721402663b14a1385b9f08d026"],["/tags/Introduction/index.html","8dbdf776b0a56c00374a127c7b5b9a86"],["/tags/Methods/index.html","6abd89dcd5ba7c71f791a9239688fd49"],["/tags/Modules-And-Hooks/index.html","25c524fac153f8ebbe2a49465ed767f7"],["/tags/Optionals/index.html","b2a935a0070143212692e26e0412313c"],["/tags/Promises/index.html","71b92c1f057fffcc7741dd4b11304e30"],["/tags/Properties/index.html","aa8fd1299101102e646c7ec9573f136f"],["/tags/Protocols/index.html","5f051329504edfe7d4ab998c262c8e3d"],["/tags/Result-Type/index.html","47cd1a61ad31402742bdaec4a0d356b3"],["/tags/Server/index.html","893e9b24409c738206eff325b6f76f21"],["/tags/Strings/index.html","0f7827696c93319d60d323fa1b8d89ff"],["/tags/Structs-and-Classes/index.html","d74d3d5d8e120e54a12a156090679706"],["/tags/Structures/index.html","9287e3ab90970a6c428905ba5b59d116"],["/tags/Swift-5-0/index.html","cd88147ef7c7380fc92991e253df3e70"],["/tags/Swift-5-0/page/2/index.html","150ab295da143aa864d3afef466ac455"],["/tags/Swift-5-0/page/3/index.html","497faa082ef033ce80c0f645378ffaac"],["/tags/Swift-5-0/page/4/index.html","24af0035ec18e836681a13deec7fce4f"],["/tags/Swift-Apprentice/index.html","97f74e833f213313ddac665c0de6478c"],["/tags/Swift-Apprentice/page/2/index.html","b1eae403dfa17c110a6725f4d2f8c8af"],["/tags/Swift-Package-Manager/index.html","d99eeaa4129519678b39f40c4ddf7677"],["/tags/Swift/index.html","d0d6252513e8e71ad3f9ea7aa5b614fd"],["/tags/Swift/page/10/index.html","1e5fd7b5b4afe198b74f9721117f01df"],["/tags/Swift/page/11/index.html","1bedb25849128f2786726a7e2bae4f17"],["/tags/Swift/page/12/index.html","dab03d2d6c16cb57d6756bae01ec5c8a"],["/tags/Swift/page/2/index.html","be1c3b4225564348cf72822a1266e971"],["/tags/Swift/page/3/index.html","7c321b8f088682c0376c5359cdf063b1"],["/tags/Swift/page/4/index.html","36d350687cee32b34436afbcead037f7"],["/tags/Swift/page/5/index.html","183636d86e918d812c259fa841c8218d"],["/tags/Swift/page/6/index.html","739fbfeaa83e7f2a46da6d95e9fbae7b"],["/tags/Swift/page/7/index.html","ee0f8315b0c533fc7ba5de7709b52876"],["/tags/Swift/page/8/index.html","79fed745d97a3f5467fcc6e35f936db1"],["/tags/Swift/page/9/index.html","7537cd69d7d8b9d8ea897aac06581e86"],["/tags/SwiftUI/index.html","7a56a9f0dd0b510d990e82dd1b0f90c3"],["/tags/UICollectionView/index.html","ce41b9c2334407b7f1ed611dd105114a"],["/tags/UIColor/index.html","dfa51cfa834cd807acbda4106cb1f839"],["/tags/UIImagePickerController/index.html","8165c72bd25de6579b0b1e08985da704"],["/tags/UIKit/index.html","c1f4650718d942652926f76ded9b514d"],["/tags/UIKit/page/2/index.html","016235b52928e560eaf3ff8997d06040"],["/tags/UIKit/page/3/index.html","20779a20c100e3e8a16118f24b2174a5"],["/tags/UIKit/page/4/index.html","e1efdf71f2e553364aa46b767689e06e"],["/tags/UIKit/page/5/index.html","9176d4f0fc8b49a7a9d2e38abfaaa28b"],["/tags/UITableView/index.html","c48f7b41f7156e2402935d6fdc251c91"],["/tags/Ubuntu/index.html","9277268a1827e9940643eb266d22c410"],["/tags/Uniquely-identifying-views/index.html","b9fe6228797e89752692dc75dd0933f4"],["/tags/VIPER/index.html","a529f0678f3af56d5c60d7fd4c8d1105"],["/tags/VMware/index.html","0af95c49031fa9bf71010892a1fd3345"],["/tags/Xcode/index.html","82055e581e9229d049c7943af7d6840e"],["/tags/appleOS-Networking/index.html","367d46fdd55115bcd3dd29d91273357c"],["/tags/enum/index.html","50eb920f7cd4bccd6dc876604f09f8f2"],["/tags/iCloud/index.html","06bae41584a140f4bc4766ed1c46969c"],["/tags/iOS/index.html","22e9d618949850ef9dfde70236ca95ea"],["/tags/iOS/page/10/index.html","55bedaba903e8489c334b3f15c90ad77"],["/tags/iOS/page/11/index.html","65d35a29183f8e5c73e06388bc772e0a"],["/tags/iOS/page/2/index.html","e8bd86ec01bff8dfad3bb332e0aae08e"],["/tags/iOS/page/3/index.html","32b50eeea821002a6a56daa5c1738b09"],["/tags/iOS/page/4/index.html","3bdc703e566193474cac59504775b6c1"],["/tags/iOS/page/5/index.html","db41eed7aa573af0a05086e67866f9aa"],["/tags/iOS/page/6/index.html","e3545d7e57d4ddd8f215085f9b0d1bfb"],["/tags/iOS/page/7/index.html","2f9ab6edafe875b0a86e00ee39b5f515"],["/tags/iOS/page/8/index.html","3f33752ef13fceeab436c6dfc569fbc2"],["/tags/iOS/page/9/index.html","c7902b6eb3021e76d8343e336ee21df1"],["/tags/iOS面试题/index.html","f3e746e488bdcca4e1cea8c53bb326a7"],["/tags/index.html","5fe4df4299fd8a19eef9cef03f60b563"],["/tags/non-optional/index.html","36a22a8ed4d713fcbb391b8f81c1c28e"],["/tags/random/index.html","0efafbfc315e04e6fa32110dc81ebe89"],["/tags/transition/index.html","c9a372e4032327e8dd26760e68830879"],["/tags/三方类库/index.html","28333a3084666db2940b43954ddbdbbc"],["/tags/依赖注入设计模式/index.html","1da44f6433ee27b32f53e753110ce1f8"],["/tags/函数式编程/index.html","87809eeb775d8b39c2f4011c7b539e6e"],["/tags/初始化模式/index.html","f685fcaaffcac59b169504780ecacb52"],["/tags/单例模式/index.html","bf7edfafc543139915621a8b02ce4742"],["/tags/原型设计模式/index.html","210b86f7b2b7230db2a2a962c20a5176"],["/tags/命令设计模式/index.html","dee0ff602fc45f02fcee04d0e464de91"],["/tags/基本控制流/index.html","8da2bf74eb9f4a4970216f55d518f354"],["/tags/外观设计模式/index.html","10c75185aadfb4ce6e4a9713e9112537"],["/tags/委托设计模式/index.html","0d44f83cd0331c319aa91200fafcf9ef"],["/tags/子类化样式/index.html","85a7c273198820fd2678865e23317b52"],["/tags/对象池设计模式/index.html","ed2ddcb29ec23cc0351f381cbb5bb733"],["/tags/工厂方法设计模式/index.html","ee6ba39cc3a80d3cc4793e4139d12b5b"],["/tags/工厂模式/index.html","79232d19864b5e18c5114e7b582ff6e4"],["/tags/工厂设计模式/index.html","447b803c3e1c037c7e3a3ba0061d9b7d"],["/tags/懒加载模式/index.html","d277b189451cf7c61d159c8a555475a7"],["/tags/抽象工厂设计模式/index.html","49f0d7b24486e9b841189a403debeaf1"],["/tags/构造函数/index.html","a84abe73719c41f3477e7f652f9f1de7"],["/tags/架构设计/index.html","6b0d430d519f3126700825f569e7c39c"],["/tags/生成器模式/index.html","d30dc6f1e5bdfaf1a8e3f37141e43d7c"],["/tags/用户体验/index.html","292d0978797755ae9175a91efbb22ee0"],["/tags/类型与操作/index.html","77dabb7434a0905773f7a42e5284e085"],["/tags/自动化布局/index.html","0071a03219772505642de8ceaf3a9994"],["/tags/自定义UIView/index.html","f67add2cd22b5710275dcfdacfa32973"],["/tags/自定义转场/index.html","fb1743b5740cfe74381f40e3b9dfd8a9"],["/tags/自适应布局/index.html","3958e2bcd722eee801857ec793ecb3fd"],["/tags/表达式、变量和常量/index.html","100fb09ef0d1e046ab21a43522b5d46e"],["/tags/设计模式/index.html","240bc967b4f201091471d5073294a05b"],["/tags/设计模式/page/2/index.html","9bcc71dc31606d410850d320f8ca0cd1"],["/tags/设计模式/page/3/index.html","048ef20fc0a83a069a6c2a7be96de483"],["/tags/迭代器设计模式/index.html","e21c3443f5d7022149f9b9230af1ab36"],["/tags/适配器设计模式/index.html","36c0af11cb570bb553b5c4f50f1c6da4"],["/tags/静态工厂方法/index.html","8c587da6f882f458881c72372dd165dc"],["/tags/高级控制流/index.html","6e864fda1cff1a51ff20c8bc6001bae9"],["/为iOS应用构建输入表单/index.html","158e6eb8270ba2650ba950ffa06330f7"],["/产品开发的幕后花絮/index.html","ee45fab169cc201516392546d0bd1ffd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","7aa6aeaae4ae3ca236e21132db689506"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","2313adf19b8c58758b2af475347ac72e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5b1966558f0da239369842b7bc0e4e62"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","939e6ee182fca0b806da326014bf332f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4b81b5157b02738702b02cc272f3cbdd"],["/在Swift中创建自定义集合/index.html","19a1f993b953b3d3d2f7f54c82ad539c"],["/在Swift中处理非可选选项/index.html","6c3b076b6a233f14d116d2e97d904bee"],["/在Swift中生成随机数/index.html","8df47afa15538fe9b3590627843a883c"],["/在Swift中重构单例模式用法/index.html","5645c366c9c078d836fcceb60c4ed764"],["/如何为VIPER编写服务？/index.html","b0a9e6a6e84b12f09055f541a3e0c86e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","61680ab4743e5e226b4b80773ea11520"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ab5b6eeb73a75fafef3ef61c37e6ad10"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1ea87634eac7dfca3a1c79623b6b83d6"],["/如何使用VIPER构建SwiftUI Apps？/index.html","97c954d33133eaf0958dafd5577f793c"],["/掌握VIPER架构/index.html","367c78e5faebe79c31df16601ee4de1c"],["/揭秘 WordPress Hook 系统/index.html","275bcf66e3234065b86dcf07a0472512"],["/比较工厂设计模式/index.html","4845882e450ccf08c392a69b9cfd2992"],["/深入了解Swift中的Grand Central Dispatch/index.html","434c72b53085ac8dd44bb6377db71f43"],["/深入研究Swift框架/index.html","7ccb18167cfc89dd46853a1a06efdf73"],["/适用于iOS开发人员的VIPER最佳实践/index.html","d50bbe8614462e96394b4ac2776a6724"],["/选择Swift而不是Objective-C的5个理由/index.html","5cd3452dd1556296e36820ad85bd7fe2"]];
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
