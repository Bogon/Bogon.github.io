/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","cd4c212d0c3829e37bb244d869f8ee05"],["/2020年iOS面试题总结(三)/index.html","8f3683cf51b349df744b2d1eb15164d4"],["/2020年iOS面试题总结(二)/index.html","05f23eef8db7f0b11ce52cce49328dc4"],["/Advanced Swift系列(一): Swift 简介/index.html","812a1d1c5413b2e893e42f2aa91d2f71"],["/Advanced Swift系列(七): Strings/index.html","e7728b4e760bdd15f1b25a7935d3536a"],["/Advanced Swift系列(三):  Optionals/index.html","c307e5aa6998d1b63c71266d108bedf5"],["/Advanced Swift系列(九): Protocols/index.html","19db71c2aa5ddcea48e2cb107f636c52"],["/Advanced Swift系列(二): Build-in Collections/index.html","894e723e89f78624038f7d1ed82b05ea"],["/Advanced Swift系列(五): Structs and Classes/index.html","8ad86121c625d48088fd298484141d6e"],["/Advanced Swift系列(八): Generics/index.html","10d20f5358b63a1d08dbe9abc597386c"],["/Advanced Swift系列(六):  Enums/index.html","73cc68415c2aab94eb8caaef1b911534"],["/Advanced Swift系列(十): Collection Protocols/index.html","d139ecf9bc3786a161128acd65d69b10"],["/Advanced Swift系列(十一): Error Handling/index.html","9178878e570e070108a43b5dc9c46f4e"],["/Advanced Swift系列(十三): Interoperability/index.html","758f4d50b7e07ca9dc4e123651b95f96"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7a3f94ebaec019467ba2fc7043012fb6"],["/Advanced Swift系列(四):  Functions/index.html","d4a204d150dd8eb49172009f0e447620"],["/App Architecture系列(一):  简介/index.html","da3ec5a34802cbdd5479bcbf1a42e86a"],["/CocoaPods 设定版本说明/index.html","5c8fb739daedcbf135228365bf615ba6"],["/Functional Swift 初探/index.html","7e75c3d33b313748ef9b9f5d7114092b"],["/Git 使用小技巧/index.html","c1700b3984cfd2d0b6b589141890bf25"],["/Go Protobuf 初探/index.html","68d39a1c713387016a0b6c62a63c07a0"],["/Go mysql Tips/index.html","5af87403b42abf5bfbdfb776951fd49e"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","de510fcf83374c1bea2a7e1796b567b2"],["/Go 入门篇：2、Go 实效编程/index.html","3384646e54b67e5278888d96cea0149c"],["/Go 入门篇：3、Go 重要概念/index.html","d7b9a33b1f0a88eb5fe874d957f87dfe"],["/Go 基本语法初探(一)/index.html","8bf634104d8256d3fa4ef9d7242ee0c5"],["/Linux VIM 命令及操作小结/index.html","a3845b04763d0b54408b8effda5c47fc"],["/MySQL 基本操作/index.html","d15e35cfc1ca4622f3c8483bf3fdbf43"],["/MySQL-列类型和数据完整性/index.html","c77dcb7bb94b80c31ec403ea9fef197b"],["/MySQL-数据库设计和查询语句/index.html","73710818e2a67575ae19f095d8c1186b"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","2300d7db9beb26e21e78b7e6adab2d6b"],["/NSCODER和SWIFT初始化/index.html","cbbb87831c56a1edad7dc16c2303edbd"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","ebb4da5d55b98a92143f22d8b2dcd599"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","0bda9dd6d082f8eab2ed0000ec6d3834"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","1760a96bf238cf0754cbd4b256743e02"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","5172e5a26da85db132ec22c330fc8565"],["/Sqlite 使用Tips/index.html","72a3c02c79d19bd5999393ec9c2b1d28"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","435c1a81c8bf24d3612bdead74c3abf0"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9beaa0a6185ed8231b1804362c0efbb0"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","d5d8ea43df1901e2a89778f4b77864ff"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","40669c2601a2cf902cfdf32cff7a70f4"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","35f6444c08766b766f48589d971074f1"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","28ff4137843de26658f74c757fa1a500"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","8e44c9dd875e17e326f1d97be7fffa39"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","b87b5cf1f341acd44385894dda1126b4"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","50b3b7f941a86ca0b0cbcb64936dcde7"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d2096ce4434f4f678853ac625e17f688"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","1b790d9c352abe5fd2e2a8b5f82229fd"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","a2dbcdef4083c6591a0276dff491852d"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","6e42c4b26bb75c01b793437e88e2f43d"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","724bad3d7f7d6aa622c507e4447d103d"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f194043b3e7905ae0fccf89416f843a1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","b90cb1da648bf1ac701aa7eae67bf4e3"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","4110efd7f74379e7ebdd4f816432eb1f"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e35a4f52ee73119255cd86c86149c9d9"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ed6ba0c662f73a6d07dd938bf1894228"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","80c40a37b85015c80e84067dda66240d"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","086c70330887b67fe3cd266820b09461"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","a29915e669bb678848e23a5754d35578"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","1474aa23c597d07ce0b25e9506b6f990"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","997ee358e1ba207d0607d793ef3c8402"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","0e2f1d60d143f42893f5ea5aa63420cf"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","51b14747ba5ad3d6c24bb9ce8ff1f86a"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a9e83392f8669d148cc947931a7c70e9"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","0465c89134e319a1c185a5c175397d01"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","acba20c987eead00ebbb4411b6f2abbb"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","d5aed0290a6cca71ef221edbae5a8dd5"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","acb1428aa08c5dc324f83216e6c272ac"],["/Swift CompactMap vs flatMap：差异说明/index.html","fc7d27c91531d34ae42f46f92a48cf12"],["/Swift Grand Central Dispatch 深入实践/index.html","d229ac121a1a29cb16ca90a72592c28d"],["/Swift Lazy属性初始化/index.html","2ddcf1ac1c58827472cbd424af5c5e5d"],["/Swift Promises 初体验/index.html","ddfcb38755916b7dac98b2366cf7940d"],["/Swift Promises 探究/index.html","dd7b134fa4ee6d9a9904c684d42d28ed"],["/Swift UICollectionView使用指南/index.html","4942c8bd79fcc06dd8dcc6fa417242f4"],["/Swift URLSession && Combine framework/index.html","29c83d659840fdf5474431ab87ac030e"],["/Swift tips/index.html","69bfec42e2815f53c32da47814248aef"],["/Swift 三方库：GRDB 使用指北/index.html","884c100ed65a63469612cda72b82c2fa"],["/Swift 唯一识别的视图/index.html","cb52691bd101e71a6f75ceac61d5a5bd"],["/Swift 如何学习现代UIKit？/index.html","264e34e9983eb2880b86b7fff4133d26"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","11f6d0b6dc4b8c2036dd22f21234c8fe"],["/Swift 用 compactMap 替换 flatMap/index.html","11f16a2a2a7d49b913f30e4585f912ec"],["/Swift 选择和播放视频/index.html","97e59e612a99470e450945d36f806e19"],["/SwiftUI 系列(一)：1、 简介/index.html","0f48af5fe40fa3f907b22951981f7667"],["/Swift中UIColor最佳实践/index.html","2bd0d868c3eecbcbd736c287e0a80bc4"],["/Swift中快速简单的工厂设计模式/index.html","3f3d9bcbc54084a35d4ec25219828447"],["/Swift中构造函数与静态工厂方法的比较/index.html","498c5a4c09affc022f04e89b26edf1aa"],["/Swift中的UITableView教程/index.html","50551059c6027a916159179b582ca6fa"],["/Swift中的懒加载模式/index.html","4bc0e3a4b37063b75fe7356d37cffb1e"],["/Swift中的模块和挂钩/index.html","2421d05da43dcbc29922edbc23c77d7b"],["/Swift使用布局锚点添加约束/index.html","62f666476b7fed5789c1765cf5c0c3a9"],["/Swift依赖注入设计模式/index.html","7486124ed7316fdcbe4c2a088b2da1c7"],["/Swift关于Dependency Injection (DI)/index.html","426ad37f584078c6a33a166534366d7c"],["/Swift初始化模式/index.html","0fef93b043a9b12465235697b20c8d65"],["/Swift单例模式/index.html","2fc03cc11df1d94c7e1faf34d3277e55"],["/Swift原型设计模式/index.html","d5ee1a7b092962ee72d13ce0c86ee3ff"],["/Swift命令设计模式/index.html","8f6d7a50934bd2bd4c82b5dda6467e66"],["/Swift外观设计模式/index.html","9c395ec74641251d6929315413951c17"],["/Swift委托设计模式/index.html","5c8a8dcc8d267e8ffc6338d715e80253"],["/Swift对象池设计模式/index.html","90f32a3cc3e0e557683f8ec4a6bc4a83"],["/Swift工厂方法设计模式/index.html","17c64c1457c9157cecdd8e97f1b073e0"],["/Swift带闭包的懒惰初始化/index.html","003f091f60e10ea4e4f24192ceac235e"],["/Swift抽象工厂设计模式/index.html","bdddc0ced43b1512929b9b454528c07b"],["/Swift掌握iOS自动布局锚点/index.html","d2500e4c7b5f1797aa3f1f3ea949f642"],["/Swift支持旋转的自适应单元格/index.html","2e66b457f98bf669662fdfcd330a7b6f"],["/Swift枚举值/index.html","41d3b38c1f16c18f007e8d71469caaa4"],["/Swift生成器模式/index.html","fd22c0acb28efbf9178545576db07afd"],["/Swift结合Xib文件自定义UIView/index.html","9cf1935d0756a2debf174f30800e2bdc"],["/Swift编写的20个iOS库(一)/index.html","19cf7701470c51ca3f815c7d63f046c9"],["/Swift迭代器设计模式/index.html","52b68489e7f0d18d02a812738f7b1a74"],["/Swift适配器设计模式/index.html","3657822b882cdefa77a60c4309eee632"],["/Swift静态工厂设计模式/index.html","7fedd7d8d8096aefa434f98c271f84e4"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","034301f12821e5360c327e4f4d8884da"],["/UICollectionView data source and delegates/index.html","272854ad135904edaa0a6ecc0a7ff36d"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","4091960fc1bab3f564bf91ae1b1452c1"],["/UIKit初始化模式/index.html","473959018ace90bbf83d902f980964e6"],["/Ubuntu18.04替换国内源/index.html","39d4a1009681f8fbb7036986942dfa47"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","982d6e881d810735d036899b7ec8013f"],["/Vapor系列 (一) :  Vapor 初探/index.html","8e889a30cde66b71bac26ea88e92bfe4"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","86e720d622a02c5ab96f658f0bb26a32"],["/Vapor系列 (二) :  Hello Vapor！/index.html","30223e1b4c8b9dd31e53c900e2eaed46"],["/Vapor系列 (五) :  使用session进行authentication/index.html","eeaaab62e04e41e49384ec98263373cb"],["/Vapor系列 (四) :  创建博客数据库/index.html","1da9b4806666b9ae10fcd080f6efd090"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f0c5c6166af8605529e9f3403262d1ac"],["/WKWebView与Native交互注意事项/index.html","0a334ef76ce0df9734748e30c629eb25"],["/Xcode扩展/index.html","da010dbf8c4ba117120cca5f24bebbee"],["/about/index.html","37f708aa1e1de5b3ce18a78469151d57"],["/appleOS的Networking示例/index.html","0b898651836721ace56e3be4f90985ad"],["/archives/2020/03/index.html","4b46b2f4eef6b0ad35791fd444d79baa"],["/archives/2020/04/index.html","3c84693e30b8911b3ee489af0cdad8d7"],["/archives/2020/04/page/2/index.html","f69db2212c56ee8b137c348d5b67b09d"],["/archives/2020/04/page/3/index.html","9f5f473274e860de4f5ce08f398e9edb"],["/archives/2020/04/page/4/index.html","61ce9cbb5eeb202cec019c6701219ef8"],["/archives/2020/04/page/5/index.html","d407f1dee4d7920e21c24b92304f3cfb"],["/archives/2020/04/page/6/index.html","0c2ea12b27336f64c89447bd48cbd788"],["/archives/2020/04/page/7/index.html","f48ed6843b3db017a356d28713b39ba5"],["/archives/2020/04/page/8/index.html","d1c9e4acdb902d2265b1918754949ec1"],["/archives/2020/05/index.html","0538f3bd2940ee75196ab10417d2fe53"],["/archives/2020/05/page/2/index.html","1b87adc8d0e50c32f43a7c18bb3e5fde"],["/archives/2020/05/page/3/index.html","ba342ce46c32fb6f68a6a5582fb29f02"],["/archives/2020/05/page/4/index.html","d363dac2287f4dcf112425ac0bd92acc"],["/archives/2020/05/page/5/index.html","2bc26010916e99e1b7bb34764a809bb5"],["/archives/2020/06/index.html","71dc4a43dc14576812e0b2628d524efb"],["/archives/2020/06/page/2/index.html","ca0ff6cb948e313bd8404c67e4630822"],["/archives/2020/08/index.html","fba3481b1e88f380ec829a19db9f4dd2"],["/archives/2020/09/index.html","a2748c342ae6f967f65286de46658e8c"],["/archives/2020/10/index.html","abde01b281eeaa360f19921b97295cd7"],["/archives/2020/11/index.html","1d788fd7a43ef0ac36fedff565991f2a"],["/archives/2020/12/index.html","b4d5e546834c6dcdaf922a1a5596b036"],["/archives/2020/index.html","aa144682e0d84ebbea858b60d7edffca"],["/archives/2020/page/10/index.html","244183ef49ef67f1ac41123822d188bc"],["/archives/2020/page/11/index.html","c56ad4934d4bd7605a9bb961ed78335d"],["/archives/2020/page/12/index.html","412ee18ef50ac57acf52c712c6f93350"],["/archives/2020/page/13/index.html","e731505fb76d77ab4760cc1f564fd596"],["/archives/2020/page/14/index.html","0c2973593b9db9c69bf34b2b5608017d"],["/archives/2020/page/15/index.html","96fbfdd2ecb06d2da36d1ce64d877967"],["/archives/2020/page/2/index.html","7ee14cf1dcd1cc86d70582827b5dae42"],["/archives/2020/page/3/index.html","7d19cd7431444c2dd6358b6b1732006d"],["/archives/2020/page/4/index.html","5c608104f8d8a3e1c340b0f7c0d33eb2"],["/archives/2020/page/5/index.html","7166faa86da8c82bf00b05b81a2dd80b"],["/archives/2020/page/6/index.html","4f7c9507539f84e95756c4b4e8e3203d"],["/archives/2020/page/7/index.html","b223eee57854ca5cacb1dd52cfdf24f8"],["/archives/2020/page/8/index.html","55ca1831d7dde08ba2c77f0797e6e861"],["/archives/2020/page/9/index.html","2c8e509a7e13e7cc0e6f0d017a323d57"],["/archives/2021/03/index.html","75aa2695e3d5a41a539bee5240e4c3b5"],["/archives/2021/04/index.html","005480cbb00d38c603763bcd61bd0a64"],["/archives/2021/05/index.html","3ac9ea873551ef15561af1e90af10719"],["/archives/2021/06/index.html","d5d4f7099e051847ca34da54d0ec438c"],["/archives/2021/07/index.html","f3a76381021fcab970c886f4e7cde456"],["/archives/2021/08/index.html","de9f74016ea81655f3a2da6f8fe22dfb"],["/archives/2021/09/index.html","044bc0ea2c8bc09a3464c7df0fcf11b3"],["/archives/2021/11/index.html","893ecb7e1d16888703e5f927b34c1628"],["/archives/2021/12/index.html","7679b253b80d8e8f1979f25f9d7ceff0"],["/archives/2021/index.html","64357a3f9e9c6e2bec49f37de94b1159"],["/archives/2021/page/2/index.html","73493b214e34de9bd87a1f733fe6c59d"],["/archives/2021/page/3/index.html","c64a8d0e0fb03890efafdfcc8e38b771"],["/archives/2022/03/index.html","a75fde1c0df453fd6c83516bac41e042"],["/archives/2022/04/index.html","81c7fba04e5613276d5af5180930bf4d"],["/archives/2022/05/index.html","d359edb151613a3103e774abc9ee76a8"],["/archives/2022/06/index.html","2b0febfd89cfb920cfe7eea3ddb429da"],["/archives/2022/index.html","5a06989ea2d68462f4c96e9aac9c4297"],["/archives/index.html","40927e848d68e67f09990eea8babc2eb"],["/archives/page/10/index.html","174dc294addf791193203669be720336"],["/archives/page/11/index.html","16be760dbbfe797ac67664c249cec567"],["/archives/page/12/index.html","e6a3ea1c737394479d212f0d8268d86a"],["/archives/page/13/index.html","18b28ff48b54ab7ccb435d214e937319"],["/archives/page/14/index.html","9ab016c2d1d28b19ce43415abdeaa935"],["/archives/page/15/index.html","241f92a494350023c5e6f16262e409cd"],["/archives/page/16/index.html","6bcbfa1953b202a998a2459139ed87c1"],["/archives/page/17/index.html","fb98eddcdb8f45815d814a7eb61965da"],["/archives/page/18/index.html","2e709dc5272e9f03f167ce4704e73d2b"],["/archives/page/2/index.html","f5030d80d37bb12098ac60b6a8d0e382"],["/archives/page/3/index.html","8cc53b52df39f003c7b294eaa926347f"],["/archives/page/4/index.html","fba17234427a6fc78f88d88fc2ea1ce2"],["/archives/page/5/index.html","e94b30f3a87076296b0d722d56613bf4"],["/archives/page/6/index.html","b3f49fc8c4815daaa81c9e3767c08fcc"],["/archives/page/7/index.html","f1f912bb10b378755a9b5e71a4801bc1"],["/archives/page/8/index.html","925432c3c6b6cc24837921e24d6c3d4d"],["/archives/page/9/index.html","64aaedd44d05c143b3cfbe8fae25ec5d"],["/bugly 上传dYSM文件小记/index.html","a804d8365fb7e3f7f8a0e89b8b3f5cc3"],["/categories/Advanced-Swift/index.html","abdb225e16e8051e787b8c2a319314f6"],["/categories/Advanced-Swift/page/2/index.html","c1b0f76128efa63200a419e99f1b8632"],["/categories/App-Architecture/index.html","f6466fad430c9cc5769af8f4cfde4863"],["/categories/Array/index.html","4ba9f14d95680993c0ea7b01ad0555f4"],["/categories/CocoaPods/index.html","d4ae70ceb954c088cee6c97c537c95a0"],["/categories/Codable-protocol/index.html","465ecb41bb35fa9d44b59f371bdd51b7"],["/categories/Combine-framework/index.html","f153e029ecfc8550cd766118203ea97c"],["/categories/Combine/index.html","1411ddbabb8c577648d1515cc623ac7a"],["/categories/GRDB/index.html","a42cf64c447f186157ce9c2c99de21fd"],["/categories/Go-入门篇/index.html","62ae2ec7b062cc555c2d03f40c4b0cff"],["/categories/Grand-Central-Dispatch/index.html","1e8e68c8e0819eb283868bb9f56bb648"],["/categories/Homebrew/index.html","eb0034d83e0bac383411fcb6648f537d"],["/categories/Linux/index.html","ec19a82834cb87b5d80d2d74a78505c3"],["/categories/MySQL/index.html","00d29e24de8c7672422dd9115ef9ecda"],["/categories/Promises/index.html","193590ed0aa8973cd7a9e784b8cc078b"],["/categories/Protobuf/index.html","475d8601c661a59becf28bdced8ddd3a"],["/categories/Result-Type/index.html","e6a8040e8c77e8262c4952b510dbacef"],["/categories/RxSwift/index.html","9c9253326cd64ccdfc1b72a4653676d5"],["/categories/Server/index.html","1302cc4bed8b6734708b9c4b32e45f38"],["/categories/Sqlite/index.html","b25f2684f49c9571be9e27ef551c7192"],["/categories/Swift-Apprentice/index.html","462e70c8eca28490f497926a5efd825c"],["/categories/Swift-Apprentice/page/2/index.html","49f8dfa17adff7c63ac02916e0797edb"],["/categories/Swift-Apprentice/page/3/index.html","4e336553a1a7b8a7accb62f92f2c41e8"],["/categories/Swift-源码阅读/index.html","c40f11e4af3f358c5aca0e6868d31dd5"],["/categories/Swift/index.html","bf73d7e80b62248a5deb35669389d3a5"],["/categories/Swift/page/10/index.html","58c57c00487c1818cf1bc07d685c2678"],["/categories/Swift/page/11/index.html","1bdfc244ae6629f689b508bca2506e3f"],["/categories/Swift/page/12/index.html","0cb3e7f1bba5db2311fb6bdc56a43f44"],["/categories/Swift/page/13/index.html","aab4714bfa50b280a812055c53e0eaf8"],["/categories/Swift/page/14/index.html","a3d64d70442fc6137c328040af1213e1"],["/categories/Swift/page/2/index.html","5a3f2b33c7dcbc7e5cfdd86678030e2a"],["/categories/Swift/page/3/index.html","39436a6465185583a239b6df0daee9a5"],["/categories/Swift/page/4/index.html","1162aabcd4d1be42fced21ffd3467aec"],["/categories/Swift/page/5/index.html","45f64b6483e5995cdc109b5bbe173966"],["/categories/Swift/page/6/index.html","bbd5f1f458b0fd3dd9f95d654eaea3a1"],["/categories/Swift/page/7/index.html","f08bc7a5459fa691dee0efbc0f59db3c"],["/categories/Swift/page/8/index.html","a2f48b00ebe0b7b97f5891505ba91de9"],["/categories/Swift/page/9/index.html","17262b9dcc8a1e89b05cc628304fe1aa"],["/categories/Swift5-2/index.html","69d2bec97bf4c4c7d34f42de2f5770c8"],["/categories/SwiftLint/index.html","58513ab4688e1ce42adfd07ea1cea027"],["/categories/SwiftUI/index.html","e46cc39ed46cdcdb063c643a014a5710"],["/categories/UICollectionView/index.html","3b4ad5caf2443f04f991a71c360e863e"],["/categories/UIImagePickerController/index.html","dae5d3332617a959bb97aebe056ee19b"],["/categories/UIKit/index.html","c3e11dbf839829bee5f3922586bdd193"],["/categories/UIKit/page/2/index.html","ecc67ddd34e83ead35080a2566ab7af0"],["/categories/UIKit/page/3/index.html","d10c5dce8c2527ec9894151aca9282d0"],["/categories/UIKit/page/4/index.html","7ecbc989320365244206fab66e796576"],["/categories/UIKit/page/5/index.html","c0c18b3b7c397ea19fba3e1ad3f6c26a"],["/categories/UITableView/index.html","b0096d250bb1a6b4f31f058027e48d22"],["/categories/Ubuntu18-04/index.html","23db9a4b60febc8c758ffe5e4560fad3"],["/categories/Ubuntu软件源/index.html","865221d099726d2a792c3b9ca5e701f9"],["/categories/Uniquely-identifying-views/index.html","a5d5713a58f4e2ddc9fa4ab9c704fb6e"],["/categories/VIPER/index.html","a6aea43b0a9867d2e57982ba3471a8f9"],["/categories/Vapor-4-0/index.html","761089cba56f39015f3503ee4d464d45"],["/categories/Vapor4-0/index.html","13702e16660a97317c4598975cd0a4da"],["/categories/Vim/index.html","9b01b637ac32ac36a35750685e43cf66"],["/categories/WKWebView/index.html","3d8891c218b0fb5cd4683e86f2a21ca6"],["/categories/Xcode/index.html","e853bbfdf0a07273ed5baeaf5eed4806"],["/categories/appleOS-Networking/index.html","6bb4108cd263f16d716e1adbbbf6c439"],["/categories/bugly/index.html","e6212f240e56212ec1e024631ab5e960"],["/categories/enum/index.html","3122d4a36d659df6b59b2b5a7059bf8f"],["/categories/git/index.html","6ff9bcb80c6981052dec5e71b6f1b959"],["/categories/go/index.html","09b0fa2d54e91281f880674d25b99c42"],["/categories/go/interface/index.html","bb0dd72ff503f553000c24d31e5b483d"],["/categories/hexo/index.html","9a9069a07fdc7e81d17617c036e34a03"],["/categories/iCloud/index.html","ee21c6c422b52f8245ff92656a27a916"],["/categories/iOS/index.html","f7beba9e903a35f594eb2dd3f861c07c"],["/categories/iOS/page/10/index.html","a9529e8a70f7ce37f5c7971d57a08ae2"],["/categories/iOS/page/11/index.html","bde80cf2c6009719df3da17733facf6c"],["/categories/iOS/page/12/index.html","d2d703009daec2d37846910fc51a03c2"],["/categories/iOS/page/13/index.html","e34f2825d9777c94d8520e592e2c2198"],["/categories/iOS/page/14/index.html","8b6e806d2883eb03479f3460b99ddaf4"],["/categories/iOS/page/2/index.html","bb662066f1d6ff10f0b5c0fb1e4b6057"],["/categories/iOS/page/3/index.html","d22a5db7d0f0718902fa91157a3cf7f7"],["/categories/iOS/page/4/index.html","3f6286d27aeb7d3be13a5a2c89bef34a"],["/categories/iOS/page/5/index.html","fc3b13681a2991b4ccc77f79789ba7cc"],["/categories/iOS/page/6/index.html","5f11d9f9fefcad9ca0d838a9c6d25321"],["/categories/iOS/page/7/index.html","7af242ebc3dbde135eb12cf5d158c244"],["/categories/iOS/page/8/index.html","8f535538b6e37747121b0185172212e1"],["/categories/iOS/page/9/index.html","8d854a4a07c71f8fb83aa315682d1315"],["/categories/iOS面试题/index.html","8ce683fa7e9764b36f1e62caea3b623a"],["/categories/index.html","8044bbc0607dfb072dc501a9e51bdd81"],["/categories/random/index.html","1d6a5b221bade82dba7ddc7fe5f3f230"],["/categories/三方类库/index.html","8f9d1e079c227b087df7dca25a4e0327"],["/categories/函数式编程/index.html","f58e878e60f458eea0b402c52fb69ffa"],["/categories/子类化样式/index.html","b045b44edd252728a158c5789e7f4bfc"],["/categories/开发技巧/index.html","d74941f954d7e18fa87ff22852121f02"],["/categories/开发记录/index.html","348572a205b29745a3dc01616475020e"],["/categories/数据库/index.html","9659ecb485347846ee0ed0946520e0cd"],["/categories/架构设计/index.html","dfd3eeeb99b7cc7ba416589e383a175c"],["/categories/测试/index.html","947d07a7b7dcf3bce84a4130bfd1eaa5"],["/categories/用户体验/index.html","9e99bff733a6a5cce73d6d360f8008a1"],["/categories/用户协议与隐私政策/index.html","b6965bd8b33661cd23a70777f901fa4b"],["/categories/组件化/SDK/index.html","5028cd0d711230c2d2db592e4515e40e"],["/categories/组件化/index.html","7d1dba4832a0b9232e833bc619eaa718"],["/categories/组件化/模块化/index.html","bcc46ce98aa2a1d517c390115751c4fe"],["/categories/设计模式/index.html","936e29eace9e4ef632fdbdd2aceb64a2"],["/categories/设计模式/page/2/index.html","83246639ba6c935251178f4945811d20"],["/categories/设计模式/page/3/index.html","3bbc76267f21d703eeaedc0743e78dea"],["/categories/逆向/index.html","95f7775ebba24d3c27fffb6023ac2776"],["/css/main.css","b8eec899f10177ee96c197b991527e52"],["/go moudle 导入本地包/index.html","267bbfa927927dab883cd4ed3d3e2571"],["/hexo部署失败/index.html","5315d1c0b887127d49f763e6f7726fd6"],["/iOS 15 适配/index.html","bec80506925bed9760bcb0d05b176d4b"],["/iOS VIPER架构深入实践/index.html","cdd0971d6873bb4f7ec9a4d9107908fc"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","59507ed25fc46968e4d21b7f3c5e7a9a"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","77a0578768c21104f5d77bac65e8d5d3"],["/iOS 自定义视图，输入表单和错误提示/index.html","bce833185d6949dae57d2caac411ede5"],["/iOS如何使用iCloud文档？/index.html","0acb129dfa7512541f401a25077c6f25"],["/iOS子类化样式/index.html","a23c11cbf1c74454dba1b9359f60f4a7"],["/iOS开发记录<一>/index.html","053b0c45f9d16ad43c62d573c67c8e42"],["/iOS自动化布局编程/index.html","1126d042406b7dd16a4f6c280b885057"],["/iOS自定义转场(By Swift)/index.html","8804dbf5c5b77c2aa99d0fcb29b10c86"],["/iOS项目架构：使用VIPER/index.html","17c181a1dcc4cf658ae4fa14695452ff"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6765c04a28fbdea5c87bdaeed1620bda"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","cc59a13c08976813781a70143558d45b"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a589705d627fda2f2dfce2b0b7b6d785"],["/page/10/index.html","17c3915f22d6df47a2853e4536acd833"],["/page/11/index.html","157df3390a8dd47e8edae8db8561a863"],["/page/12/index.html","0db3dcf9c17a28566d2a3c771a05ac4d"],["/page/13/index.html","b9c5324f8f99145aaf3b3cf969aef49a"],["/page/14/index.html","31cbd7b9e078b6d24ce3baaeaa7d1c97"],["/page/15/index.html","c0ddf73c7786425d8518d049dfce8f92"],["/page/16/index.html","0c484651e204ad46d5330f2f582c5290"],["/page/17/index.html","4a91c8a2edd9d383a8c16cf327d32f1b"],["/page/18/index.html","23f5719040e0e85b27eee0546c58054f"],["/page/2/index.html","dc764f588ce8af99bb13da4d41db5933"],["/page/3/index.html","b886c580d90fc15a694a39f81cf57819"],["/page/4/index.html","c3b0376bdc0b12a0277bac74466ca4eb"],["/page/5/index.html","b9af35472d518f3018efe695b5fed1ff"],["/page/6/index.html","640ef6ad8e95d0b5c2bd22152fe8e6c6"],["/page/7/index.html","c313eb986684a65cc085e9d4e695dac5"],["/page/8/index.html","c3b6f7e5db98ab599a96baddc2a4d56f"],["/page/9/index.html","475145274296ae20e3e6a590661e2289"],["/schedule/index.html","e1cb78cedda5141f59df70a7932afd0c"],["/storyAppPrivacy/index.html","9798f727a409f9efd20c44eabffc435e"],["/sw-register.js","c06854178721670e198cde084c179eca"],["/swift 专题：函数/index.html","c0a9fde2e0ef3c2f5df3d4015949c5a0"],["/swift 专题：闭包/index.html","5e53d3db3b6ced1dbfcac94265d4af25"],["/tags/Advanced-Classes/index.html","326579a6da76b9d60a409b9efffb7b71"],["/tags/Advanced-Swift/index.html","c85adaeeef0464f81f583339add3ae65"],["/tags/Advanced-Swift/page/2/index.html","a86dbb4f8da9999f176118fcda9b657b"],["/tags/App-Architecture/index.html","b8ce5aab85d42475b2ae2ecee6bc12ff"],["/tags/Array/index.html","7c54bebceac6c7e8d36ba1eb4854a997"],["/tags/Arrays-Dictionaries-Sets/index.html","3d52e6cbb9aaf010fc99d48013484b79"],["/tags/Authentication/index.html","ffeb892fa6657bf03efd57a3a48d7d72"],["/tags/Build-in-Collections/index.html","60577e640278a9c76520eccd11360425"],["/tags/Building-Your-Own-Types/index.html","7523ef52d77ef28ad245f6c0afd360c6"],["/tags/CMS/index.html","f6f086370cae26372fcce4f94399b58c"],["/tags/Classes/index.html","11255a4bee50b150b38f8cc059412956"],["/tags/CocoaPods/index.html","73368e166d6094d52f32de7d525fda50"],["/tags/Codable-protocol/index.html","b248dc6a9ef22f86632e616a1e515c69"],["/tags/Collection-Iteration-with-Closures/index.html","234f6bd757de6db1939d89686ac73a70"],["/tags/Collection-Protocols/index.html","7381814fe723fdd9a22535c508cde583"],["/tags/Collection-Types/index.html","28567e195b43889a3947b8a19de740ec"],["/tags/Collection/index.html","5ab4efa446d0605d35a340dfe88cf366"],["/tags/Collections/index.html","116958a1f8a1b6fc58150225c16a4830"],["/tags/Combine-framework/index.html","a0321b3629abb1edbc5fff0a831bd990"],["/tags/Combine/index.html","21b11311e74aed048863f15af39fab70"],["/tags/Dependency-Injection/index.html","309dbd7e34aacf29e1263124dba4eb8d"],["/tags/Encoding-Decoding-Types/index.html","d3fee7d2ff2a5721c2fd5316077ace53"],["/tags/Encoding-and-Decoding/index.html","9527b5c059702d7e946e4c820c1dde69"],["/tags/Enumerations/index.html","1c3c7a2db809ac34efdd135d66a52ac7"],["/tags/Enums/index.html","15e0c8f8a3b749b5037a254d4f1fc74c"],["/tags/Error-Handling/index.html","8319e39e2e7ca93e93f20cd49dac3c15"],["/tags/Functions/index.html","3c8c9136adc6400b963257fef19661ee"],["/tags/GO/index.html","55fd9db33250b521ed9ce11773ae8683"],["/tags/GRDB/index.html","ea97777f78c1fe2b05b117b7051e0d86"],["/tags/Generics/index.html","da816938f5cbcd3d5045d9962ec6c06b"],["/tags/Grand-Central-Dispatch/index.html","64240144ef1a280d0ac23cf2eeed7655"],["/tags/Hello-Vapor/index.html","7b75e5de260e6b214560177028039f5b"],["/tags/Homebrew/index.html","4db449fcc2723fa026a96097f169267c"],["/tags/Interoperability/index.html","5474d492ca17a31c4eef9f12287880c8"],["/tags/Introduction/index.html","95464931adb417ef6b002488384e5353"],["/tags/Leaf/index.html","8d20b894da6de77a174e877f5d073195"],["/tags/Linux/index.html","e3171a1ce9b2b5123e99414e57524b52"],["/tags/MAC/index.html","45fa88a5eadee9ce723b34453fcce4bf"],["/tags/Methods/index.html","c0e6c8b8520736fec0264db15524a5a0"],["/tags/Modules-And-Hooks/index.html","d2d35f9b109eea32778b783768f114b3"],["/tags/MySQL/index.html","0e03b81ac5d81d04eefa83b5367d7771"],["/tags/Optionals/index.html","521d54d4152fbb29c71f26fedf9fadde"],["/tags/Promises/index.html","9d77556613b2a731e1255e804dd0ca88"],["/tags/Properties/index.html","e24a83512102b727aa285922bf94d05e"],["/tags/Protobuf/index.html","91f2665f9f675d920eb65d9c7218faf1"],["/tags/Protocols/index.html","6742af1caf72abc4e6507838df6d4dad"],["/tags/Result-Type/index.html","4a1a4706cdc6cd5a863b6d593e7d936f"],["/tags/RxSwift/index.html","20337eb0f27c06ba78f3a858357ebc97"],["/tags/Server/index.html","8d0b2957560286c8fc139abe30e91b0e"],["/tags/Session/index.html","25c9a2b5a244af6cc8bd457f6be00da0"],["/tags/Sqlite/index.html","b6fd1780ee25b49a4d7a771e1a7a892f"],["/tags/Strings/index.html","03a99e46a524639242c62401cf62c67d"],["/tags/Structs-and-Classes/index.html","9354a5609091304b01ee01f0ba9320b5"],["/tags/Structures/index.html","cada846817fb4102240cef1e26b58ca6"],["/tags/Swift-5-0/index.html","484078cff6babc80710a2edea3e079d0"],["/tags/Swift-5-0/page/2/index.html","a21021acce09ccd7f5499853af4c6efb"],["/tags/Swift-5-0/page/3/index.html","bfd2001a5d92ce54e3058c161120f56d"],["/tags/Swift-5-0/page/4/index.html","4030661dc3fa7eb2a06b7b46d58567c9"],["/tags/Swift-5-0/page/5/index.html","64c26c54fdd18cf136b3a8d3e1252893"],["/tags/Swift-Apprentice/index.html","fff1a93597a49ab7feedf8c631f61e2d"],["/tags/Swift-Apprentice/page/2/index.html","b6bcb128fac3f1bd080e7ddcf5a39285"],["/tags/Swift-Apprentice/page/3/index.html","4f05b5c0822635d474a9a9525c092ff4"],["/tags/Swift-Package-Manager/index.html","7f45eacdb115bb50c1a13bd8fd68be9c"],["/tags/Swift-源码阅读/index.html","81b1645f37c86042b50151dfa9716546"],["/tags/Swift/index.html","671ceb1c0c527270992f86d35d1d8de7"],["/tags/Swift/page/10/index.html","19e55ccdc9c48f6990e6ea5be22f99ef"],["/tags/Swift/page/11/index.html","583ede17a7bbf4405e22c1482cd743bb"],["/tags/Swift/page/12/index.html","d3b3162aab4953893f49e63a84a9d549"],["/tags/Swift/page/13/index.html","7ff5823aa2c44493b7192605d343c02e"],["/tags/Swift/page/14/index.html","a99d04c8b73e3637220fcf5947ac1f11"],["/tags/Swift/page/2/index.html","6944bbb5a9559a9813fea0379c499c95"],["/tags/Swift/page/3/index.html","f3e245491abe5c411158a25018c24747"],["/tags/Swift/page/4/index.html","20ae985ac11d6ea9a04aec7ee9ba1f66"],["/tags/Swift/page/5/index.html","bad7206528919805f6983639c0134e80"],["/tags/Swift/page/6/index.html","5ce04480c11a7d31ad5a61303768161f"],["/tags/Swift/page/7/index.html","5fb907e48b692b11ff9711638e016a53"],["/tags/Swift/page/8/index.html","e3226614ff4e0f7120d437a4c4574612"],["/tags/Swift/page/9/index.html","db1ed447d1cb67309ab3e6e0d2fa2b14"],["/tags/SwiftLint/index.html","70451328b96c2b83d52bd7e7b11d442e"],["/tags/SwiftUI/index.html","8c878b8f2239b4f9598a3bf360266ed4"],["/tags/UICollectionView/index.html","f67d0b3cb1b54987214e55bd10a2b63a"],["/tags/UIColor/index.html","56bd6c1c6a102aa7158e51ceb0d496da"],["/tags/UIImagePickerController/index.html","fe02ac6056fa5ea6769e64b118858539"],["/tags/UIKit/index.html","324a78eae9f41f651c0b2bf22e0102e0"],["/tags/UIKit/page/2/index.html","f31e6189bb5d03aa2381ea574e3be34c"],["/tags/UIKit/page/3/index.html","fb7d338252e4958573281d7c69d77d71"],["/tags/UIKit/page/4/index.html","957ab06be28ef9c5cc6d394b45dc8cae"],["/tags/UIKit/page/5/index.html","2554e83467a98d05829875a26a13422f"],["/tags/UITableView/index.html","8f12925c2c9455df383d274bc89f80d2"],["/tags/Ubuntu/index.html","7c70a66a4a967b9b7a2de7961afded8e"],["/tags/Uniquely-identifying-views/index.html","561c5cabf66df66a5f263a372b53cf87"],["/tags/VIPER/index.html","d0501f20396daca8f37bb4c56a9fadad"],["/tags/VMware/index.html","396bfd131eaffc6699696646cadff03c"],["/tags/Vapor-4-0/index.html","0f139cbf46fd9affe7db0520c293a456"],["/tags/Vapor-初探/index.html","e8768255c828d56ee9bc25d0ce315912"],["/tags/Vim/index.html","3b4414e3f6c576704fe763cbcf9959b6"],["/tags/WKWebView/index.html","5d6f800ef7cddcccb19b5144b61ebfe9"],["/tags/Xcode/index.html","6b84582827ee25115171824598c01d06"],["/tags/appleOS-Networking/index.html","58a8d537dee24593e6bd2c1e62d95a77"],["/tags/bugly/index.html","10b119b3da43bc73a51fd772f1405717"],["/tags/enum/index.html","0dbdf286d966c8cb2ca8e4641333a5f8"],["/tags/git/index.html","332776ccb583be843ad5bfd9f8ce936e"],["/tags/hexo/index.html","462c9ca4750d2d1021c396d19b9b1e82"],["/tags/iCloud/index.html","b37861d96a8d0287a0ddf652d0b7375a"],["/tags/iOS/index.html","1ed8eb00264a1ba0961700cbba684760"],["/tags/iOS/page/10/index.html","c43ec2e05e82732646326a302d1e8a08"],["/tags/iOS/page/11/index.html","eb9fe764633709cc0adb594db75f6d08"],["/tags/iOS/page/12/index.html","e3ab4bca8a4587d10d45d26d5db51090"],["/tags/iOS/page/13/index.html","8d75070a71cea93127b3b89bd7b988cc"],["/tags/iOS/page/14/index.html","ec16e3e3b72effeb9f600abefab506db"],["/tags/iOS/page/2/index.html","3c7861a18013761208b9ecfaa308031a"],["/tags/iOS/page/3/index.html","6b4ecc8db19374c6c44bb73e004dbb6b"],["/tags/iOS/page/4/index.html","678be1da26018997459c0af01545fc66"],["/tags/iOS/page/5/index.html","4aff664ca1292d014e37157ece549f43"],["/tags/iOS/page/6/index.html","b153be7f0ace487514dcbb8efc0fa7f0"],["/tags/iOS/page/7/index.html","6044b96c80435816b22132b81be41cce"],["/tags/iOS/page/8/index.html","5c36c5ca77f923082fecd175ce3b13bc"],["/tags/iOS/page/9/index.html","609256e79e0957156250106fb2130fcb"],["/tags/iOS面试题/index.html","ff17755e90e4ea18ddeff7780c005b7e"],["/tags/index.html","8daa1d592a87faf3f08b6df53eab0286"],["/tags/interface/index.html","55b024384f6bd302cd7bfe36c72223b8"],["/tags/non-optional/index.html","013ecd22c3324a3aa750ee29d5dfc988"],["/tags/package/index.html","1ede745bcf9b388f586ff838b9e7769e"],["/tags/random/index.html","2fe0f8b49e2871825f3f8b7cb176c715"],["/tags/transition/index.html","5557326a7c4a707212b9c9dad4fc86cb"],["/tags/三方类库/index.html","872b70958ef2f5ecfecd4f10efb2e449"],["/tags/依赖注入设计模式/index.html","31a019ea4a83fce17bcdf3b46d4dd36f"],["/tags/值类型和值语义/index.html","7fd8f78949ebda9117202d535baf82ce"],["/tags/内存管理/index.html","a886f2e4f328bab31c41e52b80565938"],["/tags/冒烟测试与回归测试/index.html","05125a34cc4fe7b002d9987164b96403"],["/tags/函数式编程/index.html","5a5110add170e88d2190d8eae5fcbc17"],["/tags/创建博客数据库/index.html","57f710251cfb751c0b3ab867edd013af"],["/tags/初始化模式/index.html","d282870579bcc3082dedbcf9ce21beed"],["/tags/单例模式/index.html","ae04aa44958da0cf9649aa8f5511a6ca"],["/tags/原型设计模式/index.html","e6eca63df573617b74c44bd826cac0d2"],["/tags/命令设计模式/index.html","6ca0378549055cf4145d6e1c6b5cbba9"],["/tags/基本控制流/index.html","bb6c67d3fef17e22adf8c8612a243de6"],["/tags/基础语法/index.html","77989535c6f71746f23a89919d03bc90"],["/tags/外观设计模式/index.html","32cfa56cc47f0d0edd40a05526ca0528"],["/tags/委托设计模式/index.html","bc674bd944842d50a0d200626afedf50"],["/tags/子类化样式/index.html","25f50922a795cb3c62a9324450dc1ca7"],["/tags/对象池设计模式/index.html","d7eb5ff51d4f89fb59ae7f6e34fceda8"],["/tags/工厂方法设计模式/index.html","c4f3ac210de588c801b5d1ec8b6bfcdc"],["/tags/工厂模式/index.html","03562344ef58e49d1bd95a0af5873277"],["/tags/工厂设计模式/index.html","357f61b007a4be28e7e15634d2974df5"],["/tags/开发技巧/index.html","621d91b5aa926da1580cbefb26f4762d"],["/tags/开发记录/index.html","2e377c2b7a72433017d4001e8abb0e02"],["/tags/懒加载模式/index.html","997a5869774ac3bee851719ae88eca1f"],["/tags/抽象工厂设计模式/index.html","28d563a1b354b14b301de95799c00f46"],["/tags/数据库/index.html","7dc9ca0c5370453a96305b69842204ab"],["/tags/构造函数/index.html","c3b4855657fefca095da7fc0dd8beb66"],["/tags/架构设计/index.html","a923e3b4a4f5f11b6da7de997c42dba3"],["/tags/模块化/index.html","cd522640e51f3a7ef3d83b3fdc8d578f"],["/tags/模式匹配/index.html","95762ca702b62517f158e03159b6c89d"],["/tags/环境搭建与验证/index.html","bb4ea9f0101badf10aa33ef52b5e7fd5"],["/tags/生成器模式/index.html","f197c6abd76610d710eafc1e34fb0c54"],["/tags/用户体验/index.html","49f326dc915db9b73fc5103b527cc989"],["/tags/用户协议与隐私政策/index.html","aa59cffa1bd7f7954d181557e0db44ce"],["/tags/类型与操作/index.html","c4986637666758243629cbf2b6219aa1"],["/tags/组件化/index.html","f805c5977bc51a0d690b01d4da5c608e"],["/tags/自动化布局/index.html","8b130d52a6374a06074577e4c666afc1"],["/tags/自定义UIView/index.html","36a07e79e24a098d0b16cc2c021f6a22"],["/tags/自定义转场/index.html","98fb8c50bcb4dfbe4d30081d4108e4e8"],["/tags/自适应布局/index.html","38f73e980f2aef1132086c2b8aba60c0"],["/tags/表达式、变量和常量/index.html","acdce713dcfaa783b0eee4bdd424efc0"],["/tags/设计模式/index.html","f3623627af9f01d79e6cca65ab6802e5"],["/tags/设计模式/page/2/index.html","f98e5e31ac2e722064d659c046c54c5e"],["/tags/设计模式/page/3/index.html","b3e51e4f436a92b4bd836db8fceea6c6"],["/tags/访问控制和代码组织/index.html","33bbec08e1c7726a8ce39c42ad9517d8"],["/tags/运算符，下标和键路径/index.html","a22068fdc5af98da2194402400205065"],["/tags/迭代器设计模式/index.html","7e7a67ff72095cdd7985bbe067c51da7"],["/tags/适配器设计模式/index.html","7d899caf8c7af274d1b0f925d46324d9"],["/tags/逆向/index.html","05ba6233f4a8cb1472e42b94c9991132"],["/tags/错误处理/index.html","78bf4ba048ce273b3f84d6427639266d"],["/tags/静态工厂方法/index.html","a03e54476b25ba9f762dbe139f79e66f"],["/tags/面向协议编程-OOP/index.html","e022c1a57f66e99cf7e8a896c437f50c"],["/tags/高级主题/index.html","24ed47f5022358f2529051c9ed2150d6"],["/tags/高级协议和泛型/index.html","407546ca37a9da7a12dd2ac5ee7f7953"],["/tags/高级控制流/index.html","cca55acbbca61bcae9649773f688dbc7"],["/xcode 常用的快捷键/index.html","bf15e570c473a6f547b5d57cf0711ab0"],["/为iOS应用构建输入表单/index.html","61ca59e480f33ec7191af5afc1cf54b6"],["/产品开发的幕后花絮/index.html","b9f07d6fbf3a4d16ea1a2e00ab4464a2"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","b718715a8f30a31e3f621219755727b2"],["/冒烟测试与回归测试/index.html","106729bf5ea02c923f7782bc42cd0309"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","134c14d2bc45d924c0d4262b336008a1"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","25fdc4a0aeb98d147635a6e09b3a3fda"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c761d3cc481d622a99499a696ea76eb1"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","5f774bf90566d5b3692ecd384b4bb30a"],["/在Swift中创建自定义集合/index.html","d5e06347af08accf0d3fef15e5fa15c4"],["/在Swift中处理非可选选项/index.html","aa0828f5df4fa5ed00051f5bcac7acee"],["/在Swift中生成随机数/index.html","f22a0bbb3c0f5e39a7e2b2959b15a18b"],["/在Swift中重构单例模式用法/index.html","665070e63549095baeee095cf45233d6"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","0c82b4dd695ac9fcd1dcc6d7c6f9ea07"],["/如何为VIPER编写服务？/index.html","085b066df8815f64081136f7cec34253"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","35e122989ad95c2950a97b39f7cf0234"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","dd5819b0eea84a494dc504f9f97ae9e0"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","f0af0d48d7a2cd4aedc733db8734b875"],["/如何使用VIPER构建SwiftUI Apps？/index.html","4dcb34b0c1316efd17c09b8a2de709ba"],["/掌握VIPER架构/index.html","d33fa4043ea411433682c9942760e0ee"],["/揭秘 WordPress Hook 系统/index.html","acd4552278d25ab3cf3a35b5a22f45bf"],["/比较工厂设计模式/index.html","085e4a6443289754e669a1947d6cbce8"],["/深入了解Swift中的Grand Central Dispatch/index.html","36bde8a11c59a8a8bb5ca8b89d8e2ad8"],["/深入研究Swift框架/index.html","3fbe232205af03ec3615c01aff613928"],["/组件化插件化与模块化/index.html","1d15dcc8e0be8e47e6a508fe10dcfe76"],["/组件设计与SDK开发基本规范/index.html","b8a4ed0bb49e5aded11cb2b7a9975f14"],["/适用于iOS开发人员的VIPER最佳实践/index.html","0cf221b2f544b4957adbb803e51af779"],["/选择Swift而不是Objective-C的5个理由/index.html","b85fcd7086171b4e0f739bf8de19ea84"]];
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
