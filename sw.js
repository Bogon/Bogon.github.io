/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","bedb630f392e5818356c3263968299ef"],["/2020年iOS面试题总结(三)/index.html","53ef1d2603cc1984a064e7d4d3878332"],["/2020年iOS面试题总结(二)/index.html","8642dda8d58b00ba0bf5ce3ff6737ea4"],["/Advanced Swift系列(一): Swift 简介/index.html","e957a6b5716324f3f9e1ccb06fd40ec2"],["/Advanced Swift系列(七): Strings/index.html","fc1fc23123b4049edf79f3bdd8349003"],["/Advanced Swift系列(三):  Optionals/index.html","69edd318c78a72949979dcbe2d6b169b"],["/Advanced Swift系列(九): Protocols/index.html","9d5e5ee7f2373d3c238d4fe173b379ea"],["/Advanced Swift系列(二): Build-in Collections/index.html","eab10f0ecbb31520897e5ccdf060fa99"],["/Advanced Swift系列(五): Structs and Classes/index.html","7d50c6f91232aa615bfdcfec63b78af1"],["/Advanced Swift系列(八): Generics/index.html","c5a04b0031bbaf7f35715354eeb68979"],["/Advanced Swift系列(六):  Enums/index.html","e3b687e6b0e0f320bfe51b16d7ca4935"],["/Advanced Swift系列(十): Collection Protocols/index.html","f3809248d732a357e428537c79734bf4"],["/Advanced Swift系列(十一): Error Handling/index.html","dbda92e116c982c131166d5cc4c439df"],["/Advanced Swift系列(十三): Interoperability/index.html","18fbc1aad3373ac4522ba88cbea5833b"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c938d7971ee9db2ba1e55cb9752d4303"],["/Advanced Swift系列(四):  Functions/index.html","2524a0a4b204e7e7619388b8f7aabed2"],["/App Architecture系列(一):  简介/index.html","b403442e68d66356741537e18f5e7943"],["/Functional Swift 初探/index.html","edf3cff4762a3fb2f71c62b6eb8134d5"],["/Git 使用小技巧/index.html","79c34585348b9d1895f5b40c79f3cdf1"],["/Go 基本语法初探(一)/index.html","19b2c7ee0a193969b8bad924a05be6fd"],["/Linux VIM 命令及操作小结/index.html","2356c34210646fc4b0448358a3d930f0"],["/MySQL 基本操作/index.html","8c8df1596332d19ab88fc6c073377341"],["/MySQL-列类型和数据完整性/index.html","856836d928e69eb5976cd9ab9e6d7865"],["/MySQL-数据库设计和查询语句/index.html","67042bce11b0298ca8b5be57bfe54ec0"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","39ecaf996d02960e5472d2d66cba701b"],["/NSCODER和SWIFT初始化/index.html","270b92741f1e14b3e07134d27df6f02b"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","38b19d0a1559f579e4b2073be5f936e3"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","0dbdf2c04c7fca4814afff5ccf5c6ee3"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","e6491d8751f427212d5597022e0feb02"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","757901053fa1f2ddf74bc33a64c36613"],["/Sqlite 使用Tips/index.html","40c659dbc3eb294f208ff350bc48457b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d026c2fb01740eb661671b9132c56c62"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","dbbc025567c4cf07685e9730a690a4f6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","1bffbd387433b263834805eb891f7191"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","235b47e5b2ca4bff450c23adafe3a8a6"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a66b63553aa791a50a1d7b17ce6bfb63"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c106730dbc574397d57a406ceaeeb550"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","3d90fc597a369304e6667815a31c4d07"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","17ffefacfb6918dd4422cfaeae6477ec"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cb088c0684807c327f69e8df06dfead6"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","3e4cba7319317729e4d6aa659a6aeaad"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","c1637aae1a86becb54cbe21968da1347"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","cd721bddb44b5df4c0f02ddf8979565e"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","8298031f26fdb0796ca959c0cf0f2491"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","37c77107229961dfc3de43af9853760f"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","64ff12729b24d86dac116ca30fa1152f"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","7e841cf9e48fe2e197a0170f3d6d981c"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","49292138892f91d64c7a555c1104582c"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","3a378aef6e21ac73797d123372e0b4fd"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","8b3e1477eaaa51cf1677143aea389570"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","3e21ca53ce600bf6d5a3e8f8a1f83fa3"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","a0ef3d86d3b86f97ab78b3ebef5f6df5"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","362017e0ace51e6f1a48f001bc129e6e"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","5c9d40f241389958ac6f95fe6a8f1633"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","7fa705882b18329ac9577e7b9cbea552"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3f68fab2e6c90196ed24eb49518b9ac6"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","e545079a7b8ca6de034cd0fc89e26c41"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","b5a7d84cf0176939f5b142fb6528c72c"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","57e7af24a0e8e5e48fd1b83b0b1209c8"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","edcb56022e348412fb8f043ed9283109"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","9b4506ab0c0722b09d2bf4902a576bc1"],["/Swift CompactMap vs flatMap：差异说明/index.html","2d2cb54f9d2d840095b17723c5c5b849"],["/Swift Grand Central Dispatch 深入实践/index.html","cb6c4e1b5f298729bd03974ba1c63bb8"],["/Swift Lazy属性初始化/index.html","348d07d21cf9ac733aae46ca5732a995"],["/Swift Promises 初体验/index.html","2d953f5d379ed9317daba79f83a908a5"],["/Swift Promises 探究/index.html","3b47456d05b1cea2b899609a2a2a06ce"],["/Swift UICollectionView使用指南/index.html","746fccf647803c93b25e1c7bad92ada8"],["/Swift URLSession && Combine framework/index.html","57d67b3a10fc6d27019bc41791ce5bde"],["/Swift tips/index.html","ac62c3c5a9fc5e6925ef10154ef6010d"],["/Swift 唯一识别的视图/index.html","0aadef8c51ad91ee0e6028aef763a586"],["/Swift 如何学习现代UIKit？/index.html","838e407dca8dd74869d56678f6cb0cee"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","2f68f982d55c5b592a6488a3ef6e7bc2"],["/Swift 用 compactMap 替换 flatMap/index.html","175959cb14713def75d1740566cc4ff5"],["/Swift 选择和播放视频/index.html","1af0ea9e037a9bdb36d300efab52cd08"],["/Swift中UIColor最佳实践/index.html","94ee4e65f5fde03025c8297e5c4cd1de"],["/Swift中快速简单的工厂设计模式/index.html","16401e8a7dfdf919a45eccb1cac103f9"],["/Swift中构造函数与静态工厂方法的比较/index.html","2abe6afa1dfe30146f22829efcc6e4fd"],["/Swift中的UITableView教程/index.html","18fa837e2ee6a6ae652ed04ae0cd5b66"],["/Swift中的懒加载模式/index.html","3699f99add3eaa4d0ccd764f23a08beb"],["/Swift中的模块和挂钩/index.html","f4ef91814abfd4e0fd7652708812cb23"],["/Swift使用布局锚点添加约束/index.html","b9a4ac45aa950ffa19094d185e71f3a5"],["/Swift依赖注入设计模式/index.html","f8a5f192e88988cd1f1cfd732f3c2cb3"],["/Swift关于Dependency Injection (DI)/index.html","78108ea25adfcf58b0cec52fa7d225cd"],["/Swift初始化模式/index.html","b6ba43dae80383289768bf18f3b29b1c"],["/Swift单例模式/index.html","d6b6b86446d3c20fb897113e654df3b1"],["/Swift原型设计模式/index.html","5a54f5e58a8726196be088c2166fec90"],["/Swift命令设计模式/index.html","d330ce03d00782e1a49014a4d15093dd"],["/Swift外观设计模式/index.html","af319a1311b901d88074614dfd630a9c"],["/Swift委托设计模式/index.html","640891cd6157d80309e8dcfef7204e7c"],["/Swift对象池设计模式/index.html","893fcd88d1b9b51582368ae3404ea8f0"],["/Swift工厂方法设计模式/index.html","9aa5fe594a92eb2671432f90b90326de"],["/Swift带闭包的懒惰初始化/index.html","4692abfc4fa6faf1eb12e5ec0c797ce2"],["/Swift抽象工厂设计模式/index.html","ff4e5babf4006e84b5ae24d59cbcc0d2"],["/Swift掌握iOS自动布局锚点/index.html","2b0d43810da1ff7834dd6f27c3569789"],["/Swift支持旋转的自适应单元格/index.html","9e3b63812ee64de156b31c55bcae6737"],["/Swift枚举值/index.html","3850b14e392cb41162398bb96b8721e8"],["/Swift生成器模式/index.html","bf055831e2bd31c83fd37aba6c103e05"],["/Swift结合Xib文件自定义UIView/index.html","dd7a64e2442c3e7397a8339b7bcaa6d5"],["/Swift编写的20个iOS库(一)/index.html","949d5f7426391561c2dc27d525c06b31"],["/Swift迭代器设计模式/index.html","95c34fb228f741536ba79debc08ce97b"],["/Swift适配器设计模式/index.html","8824c50259d54e45e796f9075383f85c"],["/Swift静态工厂设计模式/index.html","1cedd17a3da703f9f0c435433c1669b2"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","a718f859f317c9c848c5ad706fa3871b"],["/UICollectionView data source and delegates/index.html","e5c3b4efd8eea0078e2199426082c13e"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","a2774b49a4e1ed6241265cb6b1d4cc8e"],["/UIKit初始化模式/index.html","a111f9acfa72e8c4e743f3ae3bba96ef"],["/Ubuntu18.04替换国内源/index.html","e06dc832ddec0276091a99470f34246b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d1a20fbf60620c08e203aae9d7806d5c"],["/Vapor系列 (一) :  Vapor 初探/index.html","56a0e68b61ec20e12c317b6cfa2db26a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9cc25ec0f5334b0f1cc690f1a92b259e"],["/Vapor系列 (二) :  Hello Vapor！/index.html","6338b8b91299ae862dfccb91a2a84aa6"],["/Vapor系列 (五) :  使用session进行authentication/index.html","cf978f736c678bb5b334ff7002d8711e"],["/Vapor系列 (四) :  创建博客数据库/index.html","27afa6d7db3bd1a5dd2bd36172fc9237"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f646f9fb4063cc851814b15ea1265391"],["/WKWebView与Native交互注意事项/index.html","aab0aa04914c1209ad2843115e77fe07"],["/Xcode扩展/index.html","232703430cdb5d500e95596817e5cdb3"],["/about/index.html","7e2275b172cc456ad99eb1b2633cfebf"],["/appleOS的Networking示例/index.html","3efc92bbd0ed5ba450b5fa9869d8fb63"],["/archives/2020/03/index.html","4270e4036d43afe6b9892f3e2201767f"],["/archives/2020/04/index.html","f294ab26eece9ba5034526c4a9f3dbcc"],["/archives/2020/04/page/2/index.html","d648a9726194c2af6f18c5b240fddc45"],["/archives/2020/04/page/3/index.html","1a2dbf51b9aa26aff7c15117b738b5a2"],["/archives/2020/04/page/4/index.html","f08f92eb76bde260e00bb327983bce42"],["/archives/2020/04/page/5/index.html","00dc99670277eaf3de3b26e892bf039b"],["/archives/2020/04/page/6/index.html","767d0b0e417ef48616af52b311f7627f"],["/archives/2020/04/page/7/index.html","d66eee638f6d2c3ca000ed84b6ead6af"],["/archives/2020/04/page/8/index.html","7fc6a6d579e43bc9e449b43815c6aa22"],["/archives/2020/05/index.html","b86aafdaf4552db0a2257128ff609a67"],["/archives/2020/05/page/2/index.html","abfe60f0f961fefa88593162de161291"],["/archives/2020/05/page/3/index.html","81816ef9c19b436ece19a5e1b7e8c8e4"],["/archives/2020/05/page/4/index.html","1cad9aeb0faf85a16053488164100634"],["/archives/2020/05/page/5/index.html","40e49290b9e3c957fce01752217d3933"],["/archives/2020/06/index.html","ee50820147d9b68286b21ca677369dd0"],["/archives/2020/06/page/2/index.html","ba1104b736756157dd601f1cdb29dad6"],["/archives/2020/08/index.html","85c240e56a761c6c57e9ae792d7f5941"],["/archives/2020/09/index.html","8d6f3d52a0d9db26a3884c66819c8514"],["/archives/2020/10/index.html","5a5e5eec4cb627dac7dd2defd30b0a57"],["/archives/2020/11/index.html","3935a99159b4dfaba6465b98fa363089"],["/archives/2020/12/index.html","3efe651babc989294ce51306dc09d348"],["/archives/2020/index.html","8fc74d525b0f28e9cade1dbb8c662874"],["/archives/2020/page/10/index.html","c05decc5b318b908aa6287f36bbbdd75"],["/archives/2020/page/11/index.html","e1671718a94cfc8ad9152d613314e4dc"],["/archives/2020/page/12/index.html","b98c454e25071ff0bd6d5dd017e3c4f2"],["/archives/2020/page/13/index.html","4d78a324c7f3b7c178d7e8303d62c638"],["/archives/2020/page/14/index.html","9752a83c630b3f777592e1a711ec3c00"],["/archives/2020/page/15/index.html","8bbe50a59c92c8ed0400c76ac670521c"],["/archives/2020/page/2/index.html","f011ce3cdd61c59ce2e67b20584d9a5f"],["/archives/2020/page/3/index.html","551080ef37032e6695d0717a4843ebc5"],["/archives/2020/page/4/index.html","8f525a9b3813a77bd77c1636afebb31a"],["/archives/2020/page/5/index.html","bab9b683080e14ec1e0422a344270a7b"],["/archives/2020/page/6/index.html","ad54a0842c313ffb99391947ab98431f"],["/archives/2020/page/7/index.html","70775248ea808304aa8069f57c465506"],["/archives/2020/page/8/index.html","d61874ba63478eecd2c6b260cad9b0d9"],["/archives/2020/page/9/index.html","f503b9c63885754a4aa8f9a302b7a62c"],["/archives/2021/03/index.html","f41fc483e09626120b7548880b314221"],["/archives/2021/04/index.html","dcbfefec74aa9ad1860a1d4b089ac104"],["/archives/2021/05/index.html","2e6bc6473ee30db1b6e44abcbc694750"],["/archives/2021/06/index.html","ac8123b3228d9a0b096ce8752e5dc60b"],["/archives/2021/index.html","66b641cdaacc17df843b64b520902efb"],["/archives/2021/page/2/index.html","716d6c381254e161ceff619dd2546ce7"],["/archives/index.html","3118186aafbdd414e07b29299c99419b"],["/archives/page/10/index.html","f2a10296748cebc0e53f9ebdcc402219"],["/archives/page/11/index.html","247924c89f0c98b8601e764d8ab86b57"],["/archives/page/12/index.html","76e120add2b50c3bd287a0b1ea8ba92a"],["/archives/page/13/index.html","07e0e24bf894dcdf3cbb2cf342bf953c"],["/archives/page/14/index.html","53b0340132474a4ba25d73b98300a330"],["/archives/page/15/index.html","979a84fce0dd5362b45ba3405a468ccc"],["/archives/page/16/index.html","9e2b503eb91a82d404ace75ea7333530"],["/archives/page/2/index.html","85b37261c04062973faae33b386d5f3f"],["/archives/page/3/index.html","eb1a06ff437de323776d219af27cd2d5"],["/archives/page/4/index.html","767913771ef617d5178a40642475fea8"],["/archives/page/5/index.html","cbc2139a0b6e4669aa008f212e775bbd"],["/archives/page/6/index.html","794f593ac7d28ec29a7475a0451d85f7"],["/archives/page/7/index.html","71dfff816d96c7ba0b76038ddc43bedd"],["/archives/page/8/index.html","533b24c431c88d0d21832e035e40b155"],["/archives/page/9/index.html","7f69c1624e0060333ad84963548eb084"],["/bugly 上传dYSM文件小记/index.html","24c0a71fcca0ae67107d508fa1b96cbd"],["/categories/Advanced-Swift/index.html","bf2ed587f030e1089452fb7bd8b57235"],["/categories/Advanced-Swift/page/2/index.html","7ab4c009781c191b2d778c99e4615755"],["/categories/App-Architecture/index.html","41907db0874f8a1338407eed3ae256b0"],["/categories/Array/index.html","5116f88149e0ca3a11209bd92099ce72"],["/categories/Codable-protocol/index.html","c90217f62eb4623cf33752af5a3498f6"],["/categories/Combine-framework/index.html","c0e38b730f912fb53f73330d4cc9f615"],["/categories/Combine/index.html","579a380c64c6f62a0bbb5c3fa89f548b"],["/categories/Go/index.html","8fe94bcfb8e3886cd47e321cc9420985"],["/categories/Grand-Central-Dispatch/index.html","461b91b896a6e0d8645e31c7876eca5a"],["/categories/Hexo/index.html","c9ff6961eb8b1e205ad8e51751c93f01"],["/categories/Homebrew/index.html","6e9fc636a7e0a4bcc0c6a1243765cf4f"],["/categories/Linux/index.html","fff95d90beb53b29538061ee11a20806"],["/categories/MySQL/index.html","a5c9da1c3b055cfd87fb4162828710a2"],["/categories/Promises/index.html","ff2450ef7b11fa297a4fad090e0a74c7"],["/categories/Result-Type/index.html","948dd90ee0fad0538a3b9b9f8b1a040b"],["/categories/RxSwift/index.html","d6fe27a89aa26fc5699f839ff228397e"],["/categories/Server/index.html","809decf4178b5be3f47c203a370e600e"],["/categories/Swift-Apprentice/index.html","d09dd3eb52856b571f8c237d7f9967fd"],["/categories/Swift-Apprentice/page/2/index.html","e61ebe943e9dd2c5930bb07a288997cb"],["/categories/Swift-Apprentice/page/3/index.html","5f8f811790e2c04f941d1d17f3ee2af5"],["/categories/Swift-源码阅读/index.html","799ec2a5e49078a2ddea9f98cb84675e"],["/categories/Swift/index.html","273274b197921bd3e04b5c0f4e2f791a"],["/categories/Swift/page/10/index.html","b93e8212a52044dfe5943cc731f0ff8e"],["/categories/Swift/page/11/index.html","71671ef995d12086259cc895e838e56c"],["/categories/Swift/page/12/index.html","746f368f640204a4037f433f9a79bd27"],["/categories/Swift/page/13/index.html","dd42ed4cee1e9d3f0cba362628514b5d"],["/categories/Swift/page/2/index.html","3edbbfca6fc9620e3c08d764fc461c2f"],["/categories/Swift/page/3/index.html","e6adab175aaf6502659b95114696e9c9"],["/categories/Swift/page/4/index.html","4b978c9151ce8822f35f3f454c837f59"],["/categories/Swift/page/5/index.html","84ec43799a9efb4ca4a374d11f6c4d4a"],["/categories/Swift/page/6/index.html","e53bc3f1b7cae5a6161e4ad33145fa3a"],["/categories/Swift/page/7/index.html","50f5ee18cef386226f8d184c4321c850"],["/categories/Swift/page/8/index.html","822561233c419dc5063fdc0afedb1a9d"],["/categories/Swift/page/9/index.html","0f28b2ad2f95e6c41cb4f342eeda727b"],["/categories/Swift5-2/index.html","5891493ca17856bd16fbd6c3907bc34b"],["/categories/SwiftLint/index.html","d317e7ac8bdce1b7c54a43894910a611"],["/categories/SwiftUI/index.html","dfdbaed047b36c25d819b7ea5e6a3752"],["/categories/UICollectionView/index.html","75c41156948b7c6560e69c21e648fa33"],["/categories/UIImagePickerController/index.html","23b108dd6960c5c4242fe92196496a89"],["/categories/UIKit/index.html","28f07b8440c5dc586ac9a068081819ca"],["/categories/UIKit/page/2/index.html","4487110ae6ced847a83fdbe30fe08f78"],["/categories/UIKit/page/3/index.html","91aeb1b2cc4a1bee8234273ff68ad0ed"],["/categories/UIKit/page/4/index.html","b0ba5271db9ef05cc69532034dd2f7c2"],["/categories/UIKit/page/5/index.html","6ae2283c6780ea36f7d6573177f22b09"],["/categories/UITableView/index.html","a280a1e3390b94577756694d3b3695d3"],["/categories/Ubuntu18-04/index.html","8b6dfcdf07f4b2f0618c869ee4f4b150"],["/categories/Ubuntu软件源/index.html","33df5125b02584ae57a48220099e87d3"],["/categories/Uniquely-identifying-views/index.html","f09dd3ef4f37281168c63873c9aeaede"],["/categories/VIPER/index.html","f10a1898adc74f7d24ebf2423fb1bef5"],["/categories/Vapor-4-0/index.html","3ac3139cc0319a5717828e523eac1951"],["/categories/Vapor4-0/index.html","5d2656f49d3190cc9632ca3d1f0c1783"],["/categories/Vim/index.html","269333071d603c69d1bbd1228c1814d4"],["/categories/Xcode/index.html","110a853b0f18ba9fc888004ccaa84867"],["/categories/appleOS-Networking/index.html","8243cdde4c1777c5481e8e30b782874b"],["/categories/bugly/index.html","6a6841e87aff795a5fba971404ab9544"],["/categories/enum/index.html","a2c3501d6a68bfb96ca10411444ad6d7"],["/categories/git/index.html","89d72af91d7f5d2fdce6532ceb9313f8"],["/categories/iCloud/index.html","69fa8287e4b870c98e0c35097e84309e"],["/categories/iOS/index.html","5cfb3bd279d7fe84577aef78ea3c8c62"],["/categories/iOS/page/10/index.html","d4ad1f3ff140d1b7cfa5eb86a29d4746"],["/categories/iOS/page/11/index.html","594d0d26b00838d6c142c35095e3035d"],["/categories/iOS/page/12/index.html","a12e80d8e0eeb12749a38ba625dff8eb"],["/categories/iOS/page/13/index.html","64293d71eab07ead0061f6ed37436039"],["/categories/iOS/page/2/index.html","2137ccc2a874d01b3bb4beb91719f128"],["/categories/iOS/page/3/index.html","c9a20a67f2a042b2076536fd93fe0d66"],["/categories/iOS/page/4/index.html","e49fe203cb567507b3590767368abbee"],["/categories/iOS/page/5/index.html","d34ea537372e5aa3dbb4978f6310013b"],["/categories/iOS/page/6/index.html","ec2acfdef0c031d3f29e3119a62a4ffe"],["/categories/iOS/page/7/index.html","8bab7fe460d8c6ecb61d953583dfc124"],["/categories/iOS/page/8/index.html","8124595d5efdf2a80804aec32e2ca812"],["/categories/iOS/page/9/index.html","95bb5bb2bd5463a8d512fdbe87742d8e"],["/categories/iOS面试题/index.html","03860aef404e2b65cf954fd996c09d66"],["/categories/index.html","346f09e6944d8388a21af93637320ac9"],["/categories/random/index.html","63913366e8f9aa5bb91c0793d5ff0907"],["/categories/三方类库/index.html","e8c35c1e5c9b673bdc5570d357cb7c8c"],["/categories/函数式编程/index.html","6eb12bca7a2b890f46b13c0fe433e4c4"],["/categories/子类化样式/index.html","b6b75a06108fad23880f70c8ec35ad3e"],["/categories/开发技巧/index.html","7c20fb32c000c28b5350d38afaaacc59"],["/categories/开发记录/index.html","f2638c46b88574d8827a6bc823f6bd06"],["/categories/技术支持/index.html","9177bd6a240114971a583ac4879f6922"],["/categories/数据库/index.html","d366d35f9661f8fc106ef9fa228cef1c"],["/categories/架构设计/index.html","db2efd6c9c36404ee36f9234d61b5ca0"],["/categories/测试/index.html","a86205a58df177bd2e94bd241854b674"],["/categories/用户体验/index.html","45eb080030ec64ba8a2187f7cbfa3749"],["/categories/用户协议与隐私政策/index.html","194315eafa0c17726f6cf3b8b8e84ec3"],["/categories/设计模式/index.html","7e8d344c99e5d84ec5bca741fa070f26"],["/categories/设计模式/page/2/index.html","299c5d7cbb8794422f0c963353230a89"],["/categories/设计模式/page/3/index.html","3c728bb6048a9e1294cdadaff5e3e285"],["/css/main.css","2934fa9fbb1bfdfa832336c56929c292"],["/hello-world/index.html","fe55b5e3fa6ec85a65f041a2d1a855fa"],["/hexo部署失败/index.html","4478430d90a62ee1942a1f696a034df4"],["/iOS VIPER架构深入实践/index.html","ef023c24f5229f1847361f63bcc53536"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","0541fcb29414b1dc340741a5dea5fa6e"],["/iOS 自定义视图，输入表单和错误提示/index.html","20e377cb412bbb725c3ed0ea26f48213"],["/iOS如何使用iCloud文档？/index.html","25c32d30a1c927f93d8a82a131b61110"],["/iOS子类化样式/index.html","d6651eea66b126a27e986eb6e99192cf"],["/iOS开发记录<一>/index.html","79de463db91ae43162f24679e6c45c36"],["/iOS自动化布局编程/index.html","f47968f008445e675defa9cda214afd9"],["/iOS自定义转场(By Swift)/index.html","2f3d9e506f8c2281fbc3eec16af99d70"],["/iOS项目架构：使用VIPER/index.html","e0a0717cd3bec3fe8a72fcee6dca7084"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","b6f3c36d39230a99af8e3c2f07d93472"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","683da2e216ec35c1a38748aa4e9150a7"],["/page/10/index.html","3fc454eb84acef4c7a9036d3115c39a6"],["/page/11/index.html","3dd250ec98a94a5f826866bcff955dd2"],["/page/12/index.html","4aa0e02fd24e0af3d1c82361a0d6fceb"],["/page/13/index.html","7b5702dba752f302d35bb83bbd9a4823"],["/page/14/index.html","d3f543ce11338e714457226915fbdea9"],["/page/15/index.html","49de6886be4f7a8267361034f56b597d"],["/page/16/index.html","1d85201665ed9e0016295d4202101095"],["/page/2/index.html","e50fc7e033286a470e8db992863c701a"],["/page/3/index.html","e1605f7f14effc1507d656f12f1f484c"],["/page/4/index.html","da08ee27f1ab4bc2a6ad3af78655db72"],["/page/5/index.html","6b2f21627137823f72fbaf312c81ee48"],["/page/6/index.html","d7cf07b2322afe78e027b9d6779f86fe"],["/page/7/index.html","1dbb46635d3c62b02c956423fbc58c89"],["/page/8/index.html","e08ca059eba8644b87005e6db97af89a"],["/page/9/index.html","44fc634bea8c812b7d2e01966310ddc6"],["/schedule/index.html","b5471120ac6f61b48cc6070505fc7e36"],["/storyAppPrivacy/index.html","af38b791d06542f584cf850053690241"],["/sw-register.js","70992cc4455a57d99c58d35a6c213b77"],["/tags/Advanced-Classes/index.html","afbe49d3c505ca2d2fb3e5978a226d2d"],["/tags/Advanced-Swift/index.html","5b266ddf62610d2207b8a1830c4d542d"],["/tags/Advanced-Swift/page/2/index.html","89384b6e9407274c32ec87409c19e9e8"],["/tags/App-Architecture/index.html","5c344cb519deb18cac1d94161eb3c843"],["/tags/Array/index.html","5b3f85c5989815f103d2370d67b3d072"],["/tags/Arrays-Dictionaries-Sets/index.html","473ea5c0aecaa7c6d40e3f4435d3eb44"],["/tags/Authentication/index.html","e4b32bc60e23251b4b91ec30316cc471"],["/tags/Build-in-Collections/index.html","5da71239e1994104985cb58d28a5fa3e"],["/tags/Building-Your-Own-Types/index.html","13ab1f89a9314ad6c3b8f5b4afc87d51"],["/tags/CMS/index.html","b3ee907a295155c75876c980a1880d91"],["/tags/Classes/index.html","47ba102e565434a595b32f092b991601"],["/tags/Codable-protocol/index.html","63ddb8d44b0fd923b202c52af360a234"],["/tags/Collection-Iteration-with-Closures/index.html","a58896cef3423547513d4cbe646fb919"],["/tags/Collection-Protocols/index.html","c69937162ad8cc787d3a43bdd991f956"],["/tags/Collection-Types/index.html","fb7962450f5a000dca91a3dc7d3deaa1"],["/tags/Collection/index.html","13faafac852ef467fd46f3ab520e4ffb"],["/tags/Collections/index.html","032591e8b2a75571537508c6f48d105c"],["/tags/Combine-framework/index.html","390dc7fc2251d460feb5e728c03bbce4"],["/tags/Combine/index.html","525f809de5969dc2093c0ca2d3a95133"],["/tags/Dependency-Injection/index.html","c833cffd2b37f64de295763393fc4dd3"],["/tags/Encoding-Decoding-Types/index.html","00dbdd8a5fbb8f033ee42fdb5f3e4e74"],["/tags/Encoding-and-Decoding/index.html","ad26f1533d786a91d7e123229169b54c"],["/tags/Enumerations/index.html","ab67e25dc967e8b6f786180389c4a154"],["/tags/Enums/index.html","323d9bcdc12da34455b9d34f6a17c20f"],["/tags/Error-Handling/index.html","cd78da3d3a436d80d8cfb701959999fc"],["/tags/Functions/index.html","4b5a323eb62d6fd7270cd8e5feea577e"],["/tags/Generics/index.html","f8aed067048c7d487a5167809fd0b19a"],["/tags/Go/index.html","7278ee93ca9e1428a65e60aa52e1ad81"],["/tags/Grand-Central-Dispatch/index.html","720727e68b4c34bdae934f9064175538"],["/tags/Hello-Vapor/index.html","c90af9c884738c9f05a84665a3fd2e9a"],["/tags/Homebrew/index.html","7fa6d3e10794f91a78ab8b705e97b2f0"],["/tags/Interoperability/index.html","3457efbb5cec0dd3b7223bf712693417"],["/tags/Introduction/index.html","86f635cd3e4d4fdcfa584d12a829308c"],["/tags/Leaf/index.html","871d5bfbfc2d33f63ab8f5c02c96cc2e"],["/tags/Linux/index.html","cfd42b469fbbf469e934da3e12366d0c"],["/tags/Methods/index.html","c616bf91b61696aa01fc698154127140"],["/tags/Modules-And-Hooks/index.html","cca86fc8a0631958dc0d08e705db40ff"],["/tags/MySQL/index.html","d2c22e4c83a0b6082ecf3a60152b3560"],["/tags/Optionals/index.html","b186e339ef6297475a4508af4dbcf286"],["/tags/Promises/index.html","8911c9b7f3991f1c741a150b679c557a"],["/tags/Properties/index.html","65bc5a01355aa8790ae6d7c0e32bed72"],["/tags/Protocols/index.html","c44928cb5782b4e5ae0f25b822649a17"],["/tags/Result-Type/index.html","488b45ab7c21925a26b52a8bb4409e2c"],["/tags/RxSwift/index.html","c7060b1908d83569e1e6d1d4ed8296f2"],["/tags/Server/index.html","2b5f82a8db986a3a02c417bf7c11e81e"],["/tags/Session/index.html","1e04f9c2086882c949d96f1b95c31e67"],["/tags/Strings/index.html","9035ef7268151d0cf6be92da637d9417"],["/tags/Structs-and-Classes/index.html","799c190aef916eabeea79ee61caae246"],["/tags/Structures/index.html","f385dbb29044cc1563b33126116e6d48"],["/tags/Swift-5-0/index.html","45701431f557c604599a6f5342384e9d"],["/tags/Swift-5-0/page/2/index.html","2c04b8d581de4bac40a984c830683487"],["/tags/Swift-5-0/page/3/index.html","df609812c2670d5de5824c56d4ebc96c"],["/tags/Swift-5-0/page/4/index.html","25a779fd3391b6e9c8aeb03a40ed2e46"],["/tags/Swift-5-0/page/5/index.html","91be54e9c73ab34351d988aeb57c6735"],["/tags/Swift-Apprentice/index.html","b0087bb9cabb95d7168ae3936a2432fd"],["/tags/Swift-Apprentice/page/2/index.html","abb1af4c347773f3aa6efff0f221d4f6"],["/tags/Swift-Apprentice/page/3/index.html","eea8c38fc6e3d681f33719cabbbbf462"],["/tags/Swift-Package-Manager/index.html","e8fd827b5d67a68480b52432debe978c"],["/tags/Swift-源码阅读/index.html","853dc19ec290035936ebdd3bd5096815"],["/tags/Swift/index.html","9a2729fe617567c4a0a8646dec60f78e"],["/tags/Swift/page/10/index.html","08b06f4b5c44b84c2f213a38f6849368"],["/tags/Swift/page/11/index.html","a347cbab5b1aaa9550765b3afd3da229"],["/tags/Swift/page/12/index.html","644f835983dffcb8cab53867143a7c22"],["/tags/Swift/page/13/index.html","fbb5a3b6cac29a479e698e13321e3528"],["/tags/Swift/page/2/index.html","674053e45ac87e4d3847ff1d55a3286e"],["/tags/Swift/page/3/index.html","16dbf825b1342b57ba7c66b27ec521f3"],["/tags/Swift/page/4/index.html","1950b04da3136654190cc45c51d7c2d7"],["/tags/Swift/page/5/index.html","b0f948add1fed875ae70e3c5b02b6c7e"],["/tags/Swift/page/6/index.html","ea639ca3fb295cb72ea69cc9f972d691"],["/tags/Swift/page/7/index.html","9eaae0a83f72c4d7a42ee88a46a879fb"],["/tags/Swift/page/8/index.html","d8a551b4f9a41dceb954a7a56325cfa5"],["/tags/Swift/page/9/index.html","45b2a01c038972ba543cce0eaa7304a7"],["/tags/SwiftLint/index.html","68a3065b0bd176a7a31845cfc1a30c7e"],["/tags/SwiftUI/index.html","ed31a7b03ece258589a9a296650c01de"],["/tags/UICollectionView/index.html","6f1e65b45b3c357d29cd1e3e5ab8a33e"],["/tags/UIColor/index.html","7fe0a88fa19902daa6423d6929f053b8"],["/tags/UIImagePickerController/index.html","2f93dfd1350dda400b5c0405cd9d42e0"],["/tags/UIKit/index.html","aa323fefc7751c725a609b3a5cf1f5a7"],["/tags/UIKit/page/2/index.html","4b5834ddd89bce53369590101996a291"],["/tags/UIKit/page/3/index.html","2a8d5abeecfaf07e358c51d6cfb2e287"],["/tags/UIKit/page/4/index.html","217c59b5c412f80b8e50345889c7bd0b"],["/tags/UIKit/page/5/index.html","bae40028af7b04abae82dd6d26617250"],["/tags/UITableView/index.html","664a6b93877f67356c507e46ef47d68b"],["/tags/Ubuntu/index.html","afa38d87965eeefea847b3d58beaec69"],["/tags/Uniquely-identifying-views/index.html","f0fdcafe2fe95cdb0562d716a4ddf6a4"],["/tags/VIPER/index.html","41241e6883dfc3355826da4ef5eaee13"],["/tags/VMware/index.html","6bcafa22325b75eef77e7dcf86820674"],["/tags/Vapor-4-0/index.html","dabdc9298ea0f197d04b0e2fdc9c0b6d"],["/tags/Vapor-初探/index.html","1fd7efa3cd972b2a6b952627761e1242"],["/tags/Vim/index.html","b223d1a0a7164f59b15f6b1099fa7ef1"],["/tags/Xcode/index.html","a1692148564545ab13b2c865e2f59224"],["/tags/appleOS-Networking/index.html","2540fbcf118a335107cfc3cd2f7a29e6"],["/tags/bugly/index.html","17a18d28f4003808956d7a04d880503e"],["/tags/enum/index.html","64e3f094e4e3f3944cab47e1c9550b53"],["/tags/git/index.html","4722e596310d8106cc72dab46b65be56"],["/tags/hexo/index.html","5f06cc8ab6f3359ce74c742fb1b5b9a8"],["/tags/iCloud/index.html","a8366958974e743c1af6a0e89fb7966d"],["/tags/iOS/index.html","e936485396b673f3dc6228fb0af9cfd7"],["/tags/iOS/page/10/index.html","db469766b7ddf3d6daca43b838bad33f"],["/tags/iOS/page/11/index.html","96d3cade2a8af005697ad0a4eb74abb2"],["/tags/iOS/page/12/index.html","c02d93dd75f594a7698e6ebc48ba076e"],["/tags/iOS/page/13/index.html","123e8380517698589f56197d307764ba"],["/tags/iOS/page/2/index.html","19d783d1a0d764e874ac55c70f9aef0f"],["/tags/iOS/page/3/index.html","836bcf89a628995b56728a444cf7b0f2"],["/tags/iOS/page/4/index.html","2641d14b3c2072b376aee1167a7c063c"],["/tags/iOS/page/5/index.html","c294831bf050ccbc6fc1847bbab4a810"],["/tags/iOS/page/6/index.html","bba9f73cba39fac52064f37637ee35f1"],["/tags/iOS/page/7/index.html","e9c7ff6288c7ce8011ae31369c6f65b7"],["/tags/iOS/page/8/index.html","32ff626087dd11bae4a386eeb2ee2bc8"],["/tags/iOS/page/9/index.html","47adb12ad0855cf0ebeef3c5d34a82ea"],["/tags/iOS面试题/index.html","c7d376ac2f9293eb09d3cfe8e32b96d2"],["/tags/index.html","bcbc7aca56fc17dd491304a0737b3138"],["/tags/non-optional/index.html","e91643f96cff21c2a050f81b0eff54a0"],["/tags/random/index.html","4797b73431c15ac202ee4b380c9cf28b"],["/tags/transition/index.html","af97e79ae1f9e5b181b32b778cef387a"],["/tags/三方类库/index.html","8fa64a0b3c9ea2635989885ab8fa3d61"],["/tags/依赖注入设计模式/index.html","472e10bc49a98e4af5bc191b196c1d89"],["/tags/值类型和值语义/index.html","7bc2b5d77b8d343923663c4c3ff50b0b"],["/tags/内存管理/index.html","cd5f2a8fbea1c89b923316d54aa5b47b"],["/tags/冒烟测试与回归测试/index.html","4d5abf7a09d38866f7d40cb546f5ef1d"],["/tags/函数式编程/index.html","23f9794376db4a282cd0e2e726e9ec18"],["/tags/创建博客数据库/index.html","a596cade8fe22a7daabd3570399af11f"],["/tags/初始化模式/index.html","5ab181f8432e373b9431c2846b3e85f8"],["/tags/单例模式/index.html","df84785ac067566bf74bc8cc94134b8b"],["/tags/原型设计模式/index.html","066d969e4cc8b17ce432fa1b5aa48727"],["/tags/命令设计模式/index.html","205c9cb6cf687356343b6a1a6d7e0d92"],["/tags/基本控制流/index.html","99571f96bbc1f54e8c286089ed968153"],["/tags/外观设计模式/index.html","eab28c42b5c407c79dfc9cc7a473888b"],["/tags/委托设计模式/index.html","34a7dd0de887eaafcf1acf9c5b3c1b7d"],["/tags/子类化样式/index.html","ef397967903ad8648a6f66d7b632d221"],["/tags/对象池设计模式/index.html","e61efb8940c1b56e4789b3630250daa4"],["/tags/工厂方法设计模式/index.html","7dba6d4217fd4bd6bd7e5b5280055186"],["/tags/工厂模式/index.html","ba8248967acdf203bbaf01fff9097171"],["/tags/工厂设计模式/index.html","52e01f27ad1104be587e948648b3fdcf"],["/tags/开发技巧/index.html","175be26992919d95879246ce8df79c06"],["/tags/开发记录/index.html","d62d8a319794fa41707749efe7f7907e"],["/tags/懒加载模式/index.html","c154846c07d3feaff85f62273c812ada"],["/tags/技术支持/index.html","52e6ab3fe6d4071c40347cbe4cb882bd"],["/tags/抽象工厂设计模式/index.html","e95202cab2dc213a0ad1a7590ec926a1"],["/tags/数据库/index.html","5d7c95b45eb1d210748cb1eb9d045edd"],["/tags/构造函数/index.html","46ad6030e8d53449a22333f92253af91"],["/tags/架构设计/index.html","7845b1d049f508e3b854e20363996172"],["/tags/模式匹配/index.html","4799f6a1403a0fe77f810e01315dad04"],["/tags/生成器模式/index.html","4caba21269e87190e39b53a22ca49253"],["/tags/用户体验/index.html","7965592a739f0d934dc82bbb9e860ecb"],["/tags/用户协议与隐私政策/index.html","28d32dd310e77c6ca7796151d76c21ee"],["/tags/类型与操作/index.html","df5966a188490380070f24bb346966f5"],["/tags/自动化布局/index.html","ef60e7efc0ca9ed8ca7bf6cdcf48da2b"],["/tags/自定义UIView/index.html","89e2dcd73d0056229b399b9c369de31f"],["/tags/自定义转场/index.html","bf9217cf2a9f2c2225ac66e4aa78b4c7"],["/tags/自适应布局/index.html","a5cffc4b7343cd786741fc01845246e1"],["/tags/表达式、变量和常量/index.html","f9b63ba83a18c3d7b40061a09d9d8db0"],["/tags/设计模式/index.html","ef5807425c1074eb0e69f6168d61beea"],["/tags/设计模式/page/2/index.html","85b071097c1ee1b8f867bf6a328135cd"],["/tags/设计模式/page/3/index.html","77e51c8a30c70358bfadd4a70808686d"],["/tags/访问控制和代码组织/index.html","6cae788692bb3a64f7f54d2842de1870"],["/tags/运算符，下标和键路径/index.html","b91620de95ed54d6937cfad2b6c37b23"],["/tags/迭代器设计模式/index.html","c74a08e82363be4081fb965b870ecbbf"],["/tags/适配器设计模式/index.html","af935d5ca2dbb90a48da4e77e9606b7c"],["/tags/错误处理/index.html","0aa93710e74d6f6ceab0e1d1931705b7"],["/tags/静态工厂方法/index.html","e7ae23028479e500cacfde5f586357f0"],["/tags/面向协议编程-OOP/index.html","ab507101a47edb7524361de5930730e8"],["/tags/高级主题/index.html","65ed39e8f14761d3403add02283a41b7"],["/tags/高级协议和泛型/index.html","c28366085877b2164fe46b94ed1b7117"],["/tags/高级控制流/index.html","c6f0831c4a2b6d3afd436e7b4aa7884b"],["/xcode 常用的快捷键/index.html","4e4ffb5f8203d069ad774245c58cd1b9"],["/为iOS应用构建输入表单/index.html","f34c76f0dbd92f6123dfcf34260f6d12"],["/产品开发的幕后花絮/index.html","d5acbbe9757bf3b9ced4b039de3cdcfc"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","b26465ffeb7e386c61e53d99abd87deb"],["/冒烟测试与回归测试/index.html","c61668011801c674929ce152a59cb0db"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","8e0042f3ad3812e3301a5ef876333b26"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","7c94f3a86bb9099da4b5857bb266bab1"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f64c804a2cbac858e367ab45f1ad65e3"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","22363d5b71f162a040318156e70e99da"],["/在Swift中创建自定义集合/index.html","5f2c82cc7b801bcb7b36897104098b68"],["/在Swift中处理非可选选项/index.html","12bf04f60c0beecaa5dcc70f7d7920a2"],["/在Swift中生成随机数/index.html","b7918914ca3b53d98e91853a0d14c2d1"],["/在Swift中重构单例模式用法/index.html","db953c6b9f07b5dbecf1d83e4dc9e6bf"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","e852cacdadc11504d13cef0761469ba6"],["/如何为VIPER编写服务？/index.html","e3c40f9a188fc86916ed09b72a3b822a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","ead08d87f1a6ce9c66c223760b15af01"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1295d2ba56d383ec4171df4c6d9225a5"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","abfae305e62098417f2c1070c2470fea"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f4d6b78113a5dbbf41af060b72532a81"],["/掌握VIPER架构/index.html","e4abc58e9785ee3a1edaec79b158a7e4"],["/揭秘 WordPress Hook 系统/index.html","ab13e50526f624c16c6e3a26e00f8688"],["/比较工厂设计模式/index.html","5a678d468ff6e4e216a9099799706079"],["/深入了解Swift中的Grand Central Dispatch/index.html","a9053ae6bd6b6d84f9994523d04fc62d"],["/深入研究Swift框架/index.html","f7bed0d7490dd8219b8d994a42867d5c"],["/美豫直聘技术支持/index.html","c172dd51457efb724b8bf798d0ca42f4"],["/美豫直聘用户协议与隐私政策/index.html","9bb681e7d8f706f8ef195ca49463da6a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","f3d3c3ebcf63158328a74bb9fcd5d0ea"],["/选择Swift而不是Objective-C的5个理由/index.html","cf6aa3b5d4f6cf417c234d45e29e495f"]];
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
