/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","3ee5bdcaeb11c39a962a71f3b6717a37"],["/2020年iOS面试题总结(三)/index.html","7f536a5dc0d462be63bac0bf4c76a547"],["/2020年iOS面试题总结(二)/index.html","652c6d96b9ff2dba211bf9013ea00464"],["/Advanced Swift系列(一): Swift 简介/index.html","058aa395bc0a9ea8022d9a6dde3ab062"],["/Advanced Swift系列(七): Strings/index.html","280dec3743e1cbeff8e9092d6a6d3067"],["/Advanced Swift系列(三):  Optionals/index.html","c7626938a6f3fddd4a80e11642daac82"],["/Advanced Swift系列(九): Protocols/index.html","6230c5cf0e5d811f71febb2788f22b4c"],["/Advanced Swift系列(二): Build-in Collections/index.html","31e44aa23a5dd3e3f1c6f9b188cf8d3f"],["/Advanced Swift系列(五): Structs and Classes/index.html","ca721a51c1f002edb5ca2406edf9a0ee"],["/Advanced Swift系列(八): Generics/index.html","2a0de3b6d0012cebd5050f4a96bbe5e0"],["/Advanced Swift系列(六):  Enums/index.html","e206f9c0cebe5656cda703a66fd2a34e"],["/Advanced Swift系列(十): Collection Protocols/index.html","de20144c60fd1658ebd8b40951a66ce9"],["/Advanced Swift系列(十一): Error Handling/index.html","21ba4a7e8c53d75dbb994282235527f8"],["/Advanced Swift系列(十三): Interoperability/index.html","0d0b1f29a0cbc7b89c097c9c42cc8a3c"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","eab8b9525d62ba8f119d6e52f6de0b5e"],["/Advanced Swift系列(四):  Functions/index.html","390d62879aeb4a7ee16949cbdb9808ec"],["/App Architecture系列(一):  简介/index.html","09bc310faf8cc2e0daa73d81d4ad397e"],["/Functional Swift 初探/index.html","78b559d24f597b19e9f278031c301f8f"],["/NSCODER和SWIFT初始化/index.html","5ffa593a37ad397e4604c9a08137edc8"],["/Swift 5使用UIImagePickerController拾取图像/index.html","290851678e10302fb3db8c2978842a85"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","37624aeca79b15ebf338aa09a145e08f"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","d60564e40950de058c4ce67d14e9f09d"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","54ea6276fcaa9b1b84668bca0aa70c20"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","55b185a15860aa80a7d93e62cdf14aa7"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","721cd5801501cd1b0e4fbf892c05bf65"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9d4b958a261229cacebae4650f76cad2"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","46a1551ff683660f50c2752ff8a2348a"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","bd4b86c98713369429e32cbb1d399d61"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","44728045a2a411a6f1fc3f4a190051d9"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","6b058183dc3dc0e5a1e47bdd66d604cc"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","e4cdef90eacbd80cca4dd314030a01c6"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","fe4f98b565d6bbfe231d17f7f5325d27"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","be19a35865919b66b2200a305765c497"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","67e476e870fc69acde426ca7456423ba"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","f4f71e56a808d8730c0b6e43731bb4d3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","1b3bc581312e4f06dca27e4aebb0806d"],["/Swift CompactMap vs flatMap：差异说明/index.html","bfc6ff547a3e15f043db010443de9a71"],["/Swift Grand Central Dispatch 深入实践/index.html","9353acd6e285b817004c5ab1e066e9ed"],["/Swift Lazy属性初始化/index.html","e3aa2c6171dd4c613f5cc3e294749bf2"],["/Swift Promises 初体验/index.html","ddcdc8cc3e5322f636d27d4b24631522"],["/Swift Promises 探究/index.html","df2de7afd04c92d7165e260471b9e465"],["/Swift UICollectionView使用指南/index.html","4e971131042d379a791e040e338ae196"],["/Swift URLSession 和 Combine framework/index.html","b94218a9cb4bb8a98dfa7cd5152c0840"],["/Swift 唯一识别的视图/index.html","a50c389f0b90f5ba49d9d30468cf2756"],["/Swift 如何学习现代UIKit？/index.html","44e3fe961858cbcda5cb611304dcbd05"],["/Swift 用 compactMap 替换 flatMap/index.html","913376896dc4afd199d6ddef1bbe7612"],["/Swift 选择和播放视频/index.html","54b3751280385dcdfe1e51611ba9de19"],["/Swift中UIColor最佳实践/index.html","9929d7b0285caffc7cb9fbe0cd46e358"],["/Swift中快速简单的工厂设计模式/index.html","66257531cdc8bb05fe2a82229b452f30"],["/Swift中构造函数与静态工厂方法的比较/index.html","a2bcc44a8af8d7e82abcf9fc6f43694c"],["/Swift中的UITableView教程/index.html","1ca46b5cc190d515ee96048d95186e87"],["/Swift中的懒加载模式/index.html","0d5eb94fa6609f6e098c10442e79d36c"],["/Swift中的模块和挂钩/index.html","8f54fcac33ea3adf030c1d70576102c3"],["/Swift使用布局锚点添加约束/index.html","71577bb12442dad21cda03d81bf8f599"],["/Swift依赖注入设计模式/index.html","4d27c5d234d8eaaa995d0d1f2b9e4736"],["/Swift关于Dependency Injection (DI)/index.html","9e23461f243b05ff5cd0818b14d91b05"],["/Swift初始化模式/index.html","5a4415d4d8d8c63df8c85e0fa7f0f3f8"],["/Swift单例模式/index.html","5dc5a71533940c1388a661317cee62e3"],["/Swift原型设计模式/index.html","01b05e05943b413051f3c17897743069"],["/Swift命令设计模式/index.html","6e4a0a78f85eefd197e2b347c52c07c9"],["/Swift外观设计模式/index.html","fa2df5ec2a948041c9d4b4e0e7fd3125"],["/Swift委托设计模式/index.html","de1abb7214eab6a242b8363eecdaa082"],["/Swift对象池设计模式/index.html","a779b24617f40f8d37db6fc757a1e36d"],["/Swift工厂方法设计模式/index.html","a07497728d22b3b4e97a1bc5a4da2bc1"],["/Swift带闭包的懒惰初始化/index.html","6c43c7a0461601e273e650ddc7aef21e"],["/Swift抽象工厂设计模式/index.html","74feae252f6d2bbd9abd405c3cca4812"],["/Swift掌握iOS自动布局锚点/index.html","1a00fa14bbe8ccc28ee16580cd1d17f4"],["/Swift支持旋转的自适应单元格/index.html","13a6d5b050d1561f825423af974c73eb"],["/Swift枚举值/index.html","49cc6107abdf98eb7e38f35c0679834b"],["/Swift生成器模式/index.html","719f10df8f2672f1e4fb89d8c4c3c268"],["/Swift结合Xib文件自定义UIView/index.html","1244f48dca8a638334842fab4e35e8bc"],["/Swift编写的20个iOS库(一)/index.html","7f526285b67b53e690d21715bc492058"],["/Swift迭代器设计模式/index.html","f7fd21eb244fbce7739e36fbf8b93555"],["/Swift适配器设计模式/index.html","52f61b166f8521af3022db28fada11cc"],["/Swift静态工厂设计模式/index.html","d24f64cef7ad48f19e31f8005bf62ea9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b15aeaa7e46febc13eb2493daec94fea"],["/UICollectionView data source and delegates/index.html","194b35ff22407712d05a20a379ed789c"],["/UIKit初始化模式/index.html","995aabcb8af8a2d9d253061b6a9198c4"],["/Ubuntu18.04替换国内源/index.html","2499946329bb3db1fc01da059a3958bc"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d33227af65c699a8124c11d602dd8636"],["/Xcode扩展/index.html","219bc9d4f66562b18da63c831606cab4"],["/about/index.html","6bf3f1e19c41578ebdef7bdf6eba3ba7"],["/appleOS的Networking示例/index.html","0b3fe7f3cece221434a1c81a2b579f9f"],["/archives/2020/04/index.html","24c67f1d641ed7ebf540a4cb59bc32ee"],["/archives/2020/04/page/2/index.html","f5417085eaca512769ca2d84366b892d"],["/archives/2020/04/page/3/index.html","d1d540d17de6ee8de06f17922dcf8078"],["/archives/2020/04/page/4/index.html","dfe429b33bfa8c26adead647e3bc5579"],["/archives/2020/04/page/5/index.html","7a9f1ff431dd62bd8d1eab6f743d87ea"],["/archives/2020/04/page/6/index.html","dfbc3a5f932722b6307482c9e08841e3"],["/archives/2020/04/page/7/index.html","9ec2cbaa30841334bfa3d32c35dd1933"],["/archives/2020/04/page/8/index.html","9fdda3202554f9d2b8ce3e59e72c99f3"],["/archives/2020/05/index.html","59fdfb4d4d4923614cd98cb2d591eb53"],["/archives/2020/05/page/2/index.html","4199706bf3d63744ee006b299e4b0562"],["/archives/2020/05/page/3/index.html","c7c2856eb74d500b00e3ea215f18d73d"],["/archives/2020/05/page/4/index.html","0b9029004548e875a2bf443ff198c8ca"],["/archives/2020/index.html","343dcd580e178fcc4a43f6d405674bf7"],["/archives/2020/page/10/index.html","8bfea4846c11658fd91ece4529aab363"],["/archives/2020/page/11/index.html","eec78ccc6a80484fdd9a8bca569fdf05"],["/archives/2020/page/12/index.html","5d82b4124ef65961471f0f8be789d183"],["/archives/2020/page/2/index.html","2b0e53e11ef463f9da7909335e4621cd"],["/archives/2020/page/3/index.html","52ef222d23d281725099e692715a1867"],["/archives/2020/page/4/index.html","3aa8b302eb6a1fe20768abd0591393fc"],["/archives/2020/page/5/index.html","0412401da1c9e4f74c1ebe8891200f6b"],["/archives/2020/page/6/index.html","3488f56f6a6669f0b2484d1e10ceb4cc"],["/archives/2020/page/7/index.html","b97ac019bad756ae460c5540bb582d8d"],["/archives/2020/page/8/index.html","1ee484911c09fb767ba34f15837381a2"],["/archives/2020/page/9/index.html","e28851a6320e18370593293964ddfee2"],["/archives/index.html","d2e235275d14cda4eb2ca20807591dc4"],["/archives/page/10/index.html","6277b34ad42e5fd90c35a45784276f32"],["/archives/page/11/index.html","c37c294a1551fb73ba877d69c46d6eaf"],["/archives/page/12/index.html","0ebd7266459ab96e4670decf07708274"],["/archives/page/2/index.html","5b0061b2e6de78e3c31503167d3f795b"],["/archives/page/3/index.html","420c54ef99e5d64a39e830b4db45be75"],["/archives/page/4/index.html","28cd4433a3cf10e8989d6b018789a691"],["/archives/page/5/index.html","1076f70edd6e9d14f5d8ae111afd252a"],["/archives/page/6/index.html","ac8bb1f90d33655644b629247b70e4a5"],["/archives/page/7/index.html","0cc272b70b7ac1dab226f5efc6b05f24"],["/archives/page/8/index.html","0dfc8b5ef9ffb8e597a7c9d7f815d525"],["/archives/page/9/index.html","ca976f4e1033472bb8e672b0a0aef314"],["/categories/Advanced-Swift/index.html","bd59df57863324ceb276c6f4f4972fe6"],["/categories/Advanced-Swift/page/2/index.html","9b3900b01d61b9da5064e03ab9a17c8a"],["/categories/App-Architecture/index.html","37153f757d7064be5c609602c9beb6e3"],["/categories/Codable-protocol/index.html","04039db55fcdd68fbbd38826c7019d6e"],["/categories/Combine-framework/index.html","8c264a3656dcded35f4b1477d221b678"],["/categories/Combine/index.html","0a7ac0d546c6f1c9280ce538dd37eb08"],["/categories/Grand-Central-Dispatch/index.html","cfcceb3cca3d14b4459cbdc0e131413f"],["/categories/Hexo/index.html","26620b678b53cea9e4da5897bb821612"],["/categories/Promises/index.html","e68e5843478d0ff1af141c3c413c0d53"],["/categories/Result-Type/index.html","7ad33b0881dd0a0c70b155a443571f9e"],["/categories/Server/index.html","15ad5f94eebd1548d941f5002375ce6a"],["/categories/Swift-Apprentice/index.html","bae4a8dd5e45856df7e6cb62eac8a03a"],["/categories/Swift-Apprentice/page/2/index.html","564bce3ba699f16c20f1a1ff7272be39"],["/categories/Swift/index.html","afcb29e2f89078e4408666c0196d99b4"],["/categories/Swift/page/10/index.html","40f3c35464dff78dfcaff11b74b87bd9"],["/categories/Swift/page/11/index.html","1ab86df3dcd9bfb91f2527aefe354958"],["/categories/Swift/page/2/index.html","7162dc76087fef9e244d8399e06a6ef6"],["/categories/Swift/page/3/index.html","fda98bee154e56dd2297b37b642d21a3"],["/categories/Swift/page/4/index.html","67014b37b5839ffedcd3e07816c64649"],["/categories/Swift/page/5/index.html","6fd84e8bffe7899e467ad3bbea2e86f5"],["/categories/Swift/page/6/index.html","ea473b620e3cc34074f6c54f368740cd"],["/categories/Swift/page/7/index.html","86bd01a4d0b4ad3a7652fee70375de1d"],["/categories/Swift/page/8/index.html","5a39ae6827553be0054b7c0583c7991c"],["/categories/Swift/page/9/index.html","f7c9d98a490816b03bafc5a769ba36ca"],["/categories/Swift5-2/index.html","ca4e15df4b004bf3a8edd73e6f3936cf"],["/categories/SwiftUI/index.html","62b5938d3cc09f7be24c70190d3dc1ae"],["/categories/UICollectionView/index.html","abfca78b95788a2ffd2ef55fff51ba1f"],["/categories/UIImagePickerController/index.html","7a9eaa08faac0af19143de0b1a6295e1"],["/categories/UIKit/index.html","5c1f1f848736ae0f6bb16ebe8df927ce"],["/categories/UIKit/page/2/index.html","ad88c6333dc1ff4aa1d5ff6cb934989d"],["/categories/UIKit/page/3/index.html","1feda3d4da3da982324c9228767f3618"],["/categories/UIKit/page/4/index.html","89f8ab046dfd52620dec48a5b3f79536"],["/categories/UIKit/page/5/index.html","fdad96965e4ee28bbaef87696a7f84b0"],["/categories/UITableView/index.html","7c4b8751f371be54175754175869f3aa"],["/categories/Ubuntu18-04/index.html","3dbab9cba87f7019f9114bdb13cdc45c"],["/categories/Ubuntu软件源/index.html","fd30b11ea75f8ca2d01bb956d4775500"],["/categories/Uniquely-identifying-views/index.html","ebf5710f7275fc608d002e6a83392dee"],["/categories/VIPER/index.html","fba2d6b826eff2361db4c19205ce151f"],["/categories/Vapor4-0/index.html","8fd94c5ba4a0b880bc839b8a5b36a3ae"],["/categories/Xcode/index.html","61e4d7cf1f16cad738db0e2c047bec6c"],["/categories/appleOS-Networking/index.html","f8fb9624db1b0879e22aa2a9f358727f"],["/categories/enum/index.html","4a0c47fada86dd965526cc1c58d6ed77"],["/categories/iCloud/index.html","d4202ed41ed8a5eb5828dc9a4a4fcf76"],["/categories/iOS/index.html","08a2597789d027fbb8b6780b4a6978ec"],["/categories/iOS/page/10/index.html","073414eab9e501016024472b2e0ea962"],["/categories/iOS/page/11/index.html","cbb6ee40074f51e4faf7b10c02cc7ef9"],["/categories/iOS/page/2/index.html","097cbd48ed6845c2e9fe859f2a6e4a44"],["/categories/iOS/page/3/index.html","cb94561b9abd8fbadcd8fad46864de06"],["/categories/iOS/page/4/index.html","6a20f3b7a4995f9ecdc5e76029fd6dfe"],["/categories/iOS/page/5/index.html","e274545ee1e45b543101d97f365dfe7a"],["/categories/iOS/page/6/index.html","d6dbefe4d351473f1b5a026d0c59bdd7"],["/categories/iOS/page/7/index.html","790d66517d74c2083caf2b372c00634c"],["/categories/iOS/page/8/index.html","0c2c61d6860573dbfa7d4b9b3807069e"],["/categories/iOS/page/9/index.html","4f77d98b58c98ab3cacbb9ddbb775229"],["/categories/iOS面试题/index.html","eea9e2b18fe1f8decdb40e93e873e4a3"],["/categories/index.html","ad9bdc3286a255f7b1b5fab8789fe4dc"],["/categories/random/index.html","dd7d5ebc3484b8330f43e7f5c7a1d274"],["/categories/三方类库/index.html","b867cde03547d4a75e5bd138bf9f7790"],["/categories/函数式编程/index.html","a7d52d99c8d4a536adb2d302caf0f005"],["/categories/子类化样式/index.html","6e8bbd40e747375b987b518ecc63ffb1"],["/categories/架构设计/index.html","9bc4c89c1b13ef3e62e4ab27b9dcdeb0"],["/categories/用户体验/index.html","ebeda2b772e62a9ebddd3a80c01778c2"],["/categories/设计模式/index.html","9de1aa61da083ad29d689933d2f1753a"],["/categories/设计模式/page/2/index.html","c78cb37933a2e7feeec9bdb854ac7a4a"],["/categories/设计模式/page/3/index.html","3a68b57d57217f0a1ec913555515725d"],["/css/main.css","5d97824fa82144a5e6ffb996604e0b8e"],["/hello-world/index.html","49af72f6d2c133712cd1f34134f83ad4"],["/iOS VIPER架构深入实践/index.html","3a4b150357a97c9d5c1aa6e0d45b3e87"],["/iOS 自定义视图，输入表单和错误提示/index.html","89ece04153b572cd7f142bdc10429053"],["/iOS如何使用iCloud文档？/index.html","5a6b54faaa80c39e9d46793ce04d1577"],["/iOS子类化样式/index.html","76d5d1e16cea92a0d846f6c1473338b1"],["/iOS自动化布局编程/index.html","ef26c1819ca8ca186face0cac46760f6"],["/iOS自定义转场(By Swift)/index.html","4db39c5ff782f1348cdae14063a900b8"],["/iOS项目架构：使用VIPER/index.html","dc3d165eca2a62eadc71c7f41b7a6c08"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","5c6f2837ee896e4b35c362a894bd3e97"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","5eaebc86db524e3b72894646a4bb1f20"],["/page/11/index.html","7eb63b410d66e0c4117857369f37b3aa"],["/page/12/index.html","625cd21062626629bfad2b90408f9b37"],["/page/2/index.html","fdb6f103e6cf80ba040cb2b7be80f6fb"],["/page/3/index.html","36752ef2a19692653285885ac210463b"],["/page/4/index.html","800f2b23e3f2f83ca6d7b7f719f3b438"],["/page/5/index.html","dc73fc5d66618aa793f1828dd883ad8b"],["/page/6/index.html","a00275152d2a05a73c54522b33d28112"],["/page/7/index.html","c9137b53412c7efdcd93c311f7f4274f"],["/page/8/index.html","f31277332b6441f608479fd777e9ab6b"],["/page/9/index.html","21005898c017dd038775c84f18a12b76"],["/schedule/index.html","6e6f4075964a3b318b20cf4f58168f44"],["/sw-register.js","9a63b937c7c51055c635841876e16a0b"],["/tags/Advanced-Classes/index.html","6867100bebc81bd5dda0cd7a4dbb256a"],["/tags/Advanced-Swift/index.html","e6dd64f76ec5a65933eacafd69e3ee55"],["/tags/Advanced-Swift/page/2/index.html","363d24aeb75a4df7f4d514a724f2e05f"],["/tags/App-Architecture/index.html","44428bfa6cee6644c6e7e58d433f29af"],["/tags/Arrays-Dictionaries-Sets/index.html","a61a62ea17b8a4d29a194c2448591941"],["/tags/Build-in-Collections/index.html","54dbc4caa41c72a346dc09bea8086bfa"],["/tags/Building-Your-Own-Types/index.html","2c5c443eb1c12e7a829286f85b4d1d29"],["/tags/Classes/index.html","5e1491c7112f9db06d45962869c48268"],["/tags/Codable-protocol/index.html","610d393945da165ff7febfaa5788f10f"],["/tags/Collection-Iteration-with-Closures/index.html","8ce79e5302c47feeecc7f1881cc0fd24"],["/tags/Collection-Protocols/index.html","bc38aa24454b1e0470d5000df155e9bd"],["/tags/Collection-Types/index.html","bc4cb261f590205809e30b46dcbf4168"],["/tags/Collection/index.html","2e3cab1da31ceb5c4ae9f1167c4e0b8a"],["/tags/Collections/index.html","d56c36e2cd16201a1627e2235e8ae298"],["/tags/Combine-framework/index.html","7e7f78216882aae0e9c7b57136545704"],["/tags/Combine/index.html","c7811fc7d92dc708db7a3a2d293a3c5a"],["/tags/Dependency-Injection/index.html","97711b12c0283685131ecb8ba06bde60"],["/tags/Encoding-and-Decoding/index.html","8c2cf7f9b4e2cd7fea8c15c9c4abf97e"],["/tags/Enums/index.html","c69f9203692a32bb5f227ba7ce50e96a"],["/tags/Error-Handling/index.html","c6a67a862c71d606bcc50b2f5a9523a9"],["/tags/Functions/index.html","7014f248929ea437426103a4ec905c97"],["/tags/Generics/index.html","7197b87487c6d18de2d7e8c00f0cc26b"],["/tags/Grand-Central-Dispatch/index.html","acba5507005b21ec82c913bd69880196"],["/tags/Interoperability/index.html","605132674c3f6ea5533c81f242508f92"],["/tags/Introduction/index.html","0fee19ed7de04f1fe940dc47c3add47c"],["/tags/Methods/index.html","8234307591ae9ab1a4dd2db0b55ae2fd"],["/tags/Modules-And-Hooks/index.html","e3b1245d3b264a513bd2b2f3c2ff5c1e"],["/tags/Optionals/index.html","1adeb271eb96f10cd4fb30ad180a72ff"],["/tags/Promises/index.html","6bb2d22f7dc2b3349a6ae63c4dde63e4"],["/tags/Properties/index.html","cb46f07711b1262cb8c62220bcb79b70"],["/tags/Protocols/index.html","bc7a13f113be727f25a540aded14622e"],["/tags/Result-Type/index.html","ff1324ade8ec9faf8c2fab089eba9782"],["/tags/Server/index.html","623d0b19e6f78c2e4ff43bd2992d974f"],["/tags/Strings/index.html","05c463687e9051b5884174b7de2cdf12"],["/tags/Structs-and-Classes/index.html","d9a95203d26446168b7bd31d44411a57"],["/tags/Structures/index.html","d8667b0e90cc0fa5067e47a3008f5ad6"],["/tags/Swift-5-0/index.html","da324913d3482876f9e5ad123d6e34e4"],["/tags/Swift-5-0/page/2/index.html","8770f08d3890142583c03a9788bc3bdd"],["/tags/Swift-5-0/page/3/index.html","b6bb2b14a8239ec64f36476c94e6935d"],["/tags/Swift-Apprentice/index.html","08b4adf5804c6e062800b0ead9923470"],["/tags/Swift-Apprentice/page/2/index.html","2493e2d717419eeb7ca52fc41939d353"],["/tags/Swift-Package-Manager/index.html","044f163f76a19ca543f08b04c604a9b9"],["/tags/Swift/index.html","fb2f832c2cbcbc5c25923d48284c050a"],["/tags/Swift/page/10/index.html","7af5de42fd85594ea26baf3720873435"],["/tags/Swift/page/11/index.html","47bc8981a32f733452a50792dc40b71b"],["/tags/Swift/page/2/index.html","1a27cbeec40ede04ea0b1eac0aeb3175"],["/tags/Swift/page/3/index.html","6fc868da75ea7dea5db0e55dfa68efa3"],["/tags/Swift/page/4/index.html","5fb27d0b41dfd4c02660ba15f2df131a"],["/tags/Swift/page/5/index.html","b153f0507721571edbc004b27599bde3"],["/tags/Swift/page/6/index.html","63023cf2dba3366c91f37fd9e3ed0dfd"],["/tags/Swift/page/7/index.html","cf4de09cbe5fdf176357d86ad045b01f"],["/tags/Swift/page/8/index.html","e531cf56fd3e70a58e9a0a23dc05015d"],["/tags/Swift/page/9/index.html","4945f8cad598c2960891bc54457db3ae"],["/tags/SwiftUI/index.html","97e8878d7af2701ed37f753ad82efc32"],["/tags/UICollectionView/index.html","5f7ab56250c5c60ab7f25226add92bd1"],["/tags/UIColor/index.html","caeca089dad8afc9bfa2f6eb9d032a52"],["/tags/UIImagePickerController/index.html","88fdc0387406d45c89bfd741de62a2f7"],["/tags/UIKit/index.html","6c73803749fb494b5a439d1811e52b6a"],["/tags/UIKit/page/2/index.html","d6322590aa897fea4569f4d0d5b71008"],["/tags/UIKit/page/3/index.html","a2c0affe727b84450cbbfe7ca9620e18"],["/tags/UIKit/page/4/index.html","206d954228980e5b386b676b454a4eeb"],["/tags/UIKit/page/5/index.html","51c729ae0a8946bd077e2515df009440"],["/tags/UITableView/index.html","1b589f5a7bbb97b253ab9224530e3141"],["/tags/Ubuntu/index.html","a9be1772401c1a283fa5b27afa1030f9"],["/tags/Uniquely-identifying-views/index.html","891aff472e8fb298ecd4eff01ace696e"],["/tags/VIPER/index.html","1d414fb8d3057643c51256d88eebb8c5"],["/tags/VMware/index.html","7508bf3ea03deae2aa2119204dd2eaaf"],["/tags/Xcode/index.html","fe9d092f7b02798334c607ebb6f735cc"],["/tags/appleOS-Networking/index.html","cbe828815983b40cbe4cc4b92f3d0326"],["/tags/enum/index.html","f888b7a93b0087a577e2dba0665b23a7"],["/tags/iCloud/index.html","9c9095666cecae344d1b273206d8ccb8"],["/tags/iOS/index.html","7047e3668898b850eb4a0e699d88a1ec"],["/tags/iOS/page/10/index.html","0c43e6c0d98ee0f82bd182793010654b"],["/tags/iOS/page/11/index.html","6eb13f3c0c3497ac2f6cd0541d4af32f"],["/tags/iOS/page/2/index.html","95f35125ef3b769c4481599ad61cd328"],["/tags/iOS/page/3/index.html","bfb645262d84632270c81db48fc11896"],["/tags/iOS/page/4/index.html","c3fa495097ca247179005fc1d8da1e2f"],["/tags/iOS/page/5/index.html","7201c1a4b75360efe3d2e36a3acf4193"],["/tags/iOS/page/6/index.html","984eacfcda346104c06170584c808ab9"],["/tags/iOS/page/7/index.html","afc61209b4f90037f2266b2e0566baad"],["/tags/iOS/page/8/index.html","192e42032123f72bfb05c1d483fa8037"],["/tags/iOS/page/9/index.html","8ac5bdda51eda8510e6b6a2958a6d8d0"],["/tags/iOS面试题/index.html","6e2960ba40c629f5636c18aa08c8459b"],["/tags/index.html","214046372411effa2de0f38d2ae00acd"],["/tags/non-optional/index.html","616ba944a620c5da7ccbda411fbb6761"],["/tags/random/index.html","ecd25509bdfcbc0575f77f8709d214c6"],["/tags/transition/index.html","ca5030e7bc262bc4494780fd1ae8e1a9"],["/tags/三方类库/index.html","33ed05119b8af86e2deefa080a4abebd"],["/tags/依赖注入设计模式/index.html","2b755ccff36cc2ec127e8b8347439dc3"],["/tags/函数式编程/index.html","f97ad5530ca28f56287715922097a91a"],["/tags/初始化模式/index.html","2d24dc4ed0d6634f574229b131c468dd"],["/tags/单例模式/index.html","e6ad2aaebf805d8c2d94e1bbe2ee3585"],["/tags/原型设计模式/index.html","b616701166c172883bb2b7a16ef5af54"],["/tags/命令设计模式/index.html","f05877e1c6153ca959e61cd6d5f877eb"],["/tags/基本控制流/index.html","13c617127e23497450fc7083c6357368"],["/tags/外观设计模式/index.html","e8499ee03c38252f8e633fadfeed94bb"],["/tags/委托设计模式/index.html","d5c31ffe92203de6baf0609d1fb08e85"],["/tags/子类化样式/index.html","73631de72b0041b8b7532d8c5fcda123"],["/tags/对象池设计模式/index.html","8fe2036446b6371e8c038b8020397a6b"],["/tags/工厂方法设计模式/index.html","c66a17331af24eb8b93863f2d3111ab5"],["/tags/工厂模式/index.html","8ee173b61566758531f76d8c748db506"],["/tags/工厂设计模式/index.html","16bda8ac97cb6fd24e434e8e843d6ceb"],["/tags/懒加载模式/index.html","f997af97040f96ed7cf10ffabe73d795"],["/tags/抽象工厂设计模式/index.html","a0a21d4c2bb21c87c6e595a6e55b9972"],["/tags/构造函数/index.html","c16bdd484826724bc5e5516c693c4bc6"],["/tags/架构设计/index.html","e935f4d866c82129648ee7e7debce74f"],["/tags/生成器模式/index.html","d60bbe4640bee771804068f416a433f7"],["/tags/用户体验/index.html","4d55533c1ddf37352b5b4332ede02ff0"],["/tags/类型与操作/index.html","f8588d5b3589c07fb2bf05f7b6cf679f"],["/tags/自动化布局/index.html","2153a2d9ee63eaf5454f9be2e268c1a0"],["/tags/自定义UIView/index.html","b8c4d8ce18a1b579c661dc5a7f637665"],["/tags/自定义转场/index.html","69ea6b531996f37f112465c4a28769db"],["/tags/自适应布局/index.html","388b9b14b237e0d578ef688b71b81fdb"],["/tags/表达式、变量和常量/index.html","0a3a042bb4ca6ce1f079b68d0f788959"],["/tags/设计模式/index.html","f609ff14d03a9be3ef71925f42a8bf34"],["/tags/设计模式/page/2/index.html","ee2b1dcd3c55b719764e2d5b08472e4a"],["/tags/设计模式/page/3/index.html","465369ac1d2d8a2672d8fb513d92f0c1"],["/tags/迭代器设计模式/index.html","ce06cb6bc6b8408727c1aa82686fcddd"],["/tags/适配器设计模式/index.html","574be8170046f9b6c7b30c7d96a51d01"],["/tags/静态工厂方法/index.html","2dc6a4751472ee3dabc54b0e7c3b96af"],["/tags/高级控制流/index.html","ad7651a22bc5360897714f627d1f07d1"],["/为iOS应用构建输入表单/index.html","54e63cd545044ebb1eebb97123e5630f"],["/产品开发的幕后花絮/index.html","95eb0a97af95c5baba0e068e68487d5b"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","94e256ca49f95133a4f3f6abaca4d8ca"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","aeb7002d515514fce1ccdfd80ab6047d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","4ef36cb5b0a8b92f57cc8918e37da1a8"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","49ef97182fc046f0d373dd71b93f673c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8f01f6c69c76c65dac20ba3a5cfa4931"],["/在Swift中创建自定义集合/index.html","9d6b462a472747f6db0c822cf5b2b137"],["/在Swift中处理非可选选项/index.html","96cc5efe319aee82921cfee20a698f13"],["/在Swift中生成随机数/index.html","1dd8babd839bfa4c3da4376c9b872603"],["/在Swift中重构单例模式用法/index.html","612e1bd4961b19a3ca8822940fc6d452"],["/如何为VIPER编写服务？/index.html","7c198f56dd0f08ce3492347d32418eca"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ba5a689461c822ca561dea47c2f80b31"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","93d04edc599dcbc0a202b084f5bf8ade"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","d4dd1f2f7342743e2a8e9234c79d3bfd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c35c4794e0a5fd25deb1c733f2f69f3a"],["/掌握VIPER架构/index.html","fdb0355ede079e59889403a5af8dac18"],["/揭秘 WordPress Hook 系统/index.html","d65d2749685eae48462b742e803e0933"],["/比较工厂设计模式/index.html","a515282179706e06ccafbfe32e51e251"],["/深入了解Swift中的Grand Central Dispatch/index.html","afee8f6c6602b9166f9e031acc7ea6ca"],["/深入研究Swift框架/index.html","a64cc7463dddfed3fa5bbc52a76bff49"],["/适用于iOS开发人员的VIPER最佳实践/index.html","94edd89688b42d2ed90470330fc879d6"],["/选择Swift而不是Objective-C的5个理由/index.html","62a7044c7ffa16cf75df1f73e7c6756b"]];
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
