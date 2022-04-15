/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ae409165d994ecc055adc6ce9e823f96"],["/2020年iOS面试题总结(三)/index.html","b11a25123273494deb3e0617f5749869"],["/2020年iOS面试题总结(二)/index.html","fdddf5e05a8fb2f6003c552795763779"],["/Advanced Swift系列(一): Swift 简介/index.html","3a428df57f139972981e41ed5e27fe3b"],["/Advanced Swift系列(七): Strings/index.html","643b2255c26cdc684bdb9f1524192fcd"],["/Advanced Swift系列(三):  Optionals/index.html","3539b04889269d80c59df050c5ef66eb"],["/Advanced Swift系列(九): Protocols/index.html","42052579f15b9f0b48fae927ec74556d"],["/Advanced Swift系列(二): Build-in Collections/index.html","36b4b32089ba4edc91cf8d11c99f4c76"],["/Advanced Swift系列(五): Structs and Classes/index.html","382193c6de83a3a07f603b1e1a4836b4"],["/Advanced Swift系列(八): Generics/index.html","98c0d8000d40021504a8ac821dfa6d89"],["/Advanced Swift系列(六):  Enums/index.html","675e3822a60920da300fcc995f41c6bc"],["/Advanced Swift系列(十): Collection Protocols/index.html","156bb3e2ca7202d8c24b83aaa27f5e73"],["/Advanced Swift系列(十一): Error Handling/index.html","0b01da8c298b2e06e0c0ac7189a92028"],["/Advanced Swift系列(十三): Interoperability/index.html","b972779a255f335fe95b75a89a5a975e"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","40283b58a624897549cd90b70c9ca98a"],["/Advanced Swift系列(四):  Functions/index.html","4a9612d85ca274b83204b29f0db54762"],["/App Architecture系列(一):  简介/index.html","7d1fcf7974fd388d6c3fdc5a5bc77e13"],["/CocoaPods 设定版本说明/index.html","037e745805dafd26df3e5379e9c394a2"],["/Functional Swift 初探/index.html","5e206b91e7a6214e17546194065aa9a5"],["/Git 使用小技巧/index.html","70848e1d64c6a10213ba1b65014f8e63"],["/Go Protobuf 初探/index.html","f9885e9ed95fc4b93da1bc833b6bb6be"],["/Go mysql Tips/index.html","57b51991c5bfda0dec97d071303cd746"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","35473aa64fe547bab621bf76cf854b07"],["/Go 入门篇：2、Go 实效编程/index.html","af5e448fb03bcf14195764136bde2b6d"],["/Go 入门篇：3、Go 重要概念/index.html","f98395a4a35fccb79439e13115fd6931"],["/Go 基本语法初探(一)/index.html","4e5714da8cab5383f3c9464d6a937ad7"],["/Linux VIM 命令及操作小结/index.html","f9f493f244d74aa792c577d7220604de"],["/MySQL 基本操作/index.html","c3d0c56bec15b3b4af9541f7e1b3cc4d"],["/MySQL-列类型和数据完整性/index.html","7c9d8ceacec102fb0e71448193991305"],["/MySQL-数据库设计和查询语句/index.html","509fc9ecbc091e3c4ee2c5b1fba3f3cc"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","c3bc18acd30d8996307b95a54e91685f"],["/NSCODER和SWIFT初始化/index.html","7de799d450e5b232d38e2deb39ac318c"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","8a8077ca0cd3abca7479b99df1617995"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c6909e08154444db30ffec80984d76d1"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","22ff8df991c801e70679f76ba66da11c"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9be6ea2bcd8a5809bafcdef762a63bc2"],["/Sqlite 使用Tips/index.html","a806b35df9e0eb947e6f222e7b797766"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","f14572a20348e7e058344ad36236c7ff"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d036d66767d43f16828b4629e8e7619a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","8f35572a5deffcc8cc2a7b33f75fb52d"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","f8b67d2c60e794b5c3f1e8f7d01965c4"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","c029873e591500e51c8f2198bbcfd463"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","af331cd42014cbe2d40b59cb09544367"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3bcb0882588ed758127401f84109a797"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","04fc97cad4fee2a98e9d18835d4b797d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","80f2138ad6d100c035cf46544a65174f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e34209742fc8971b870a99ca4f836635"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f33f4953420b39dfeada3da1c2ac1822"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","8fe021f65ddd59d57e834ff3fdfcb07b"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","cdd43cce0edadbc84ab3124fde4440a5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b335c718192a2b6bf0bc7d51a221d5c0"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7b4e3cc5782c525a6cbc48f460102e9a"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","af05fb30fe4317e74a4ead6db0713899"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d72df9925d3eeb3a4aca35d396e37ea4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","cfd79089479a58387418a7883cfea746"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","28af51e3c1d7793f45130657c70ecdf4"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","5620d81e6a26fff87f4627bb85d5554e"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","55579e961958937a1452a89b4921f0a1"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","a290b5d68012f6b4b08e8780b575a2d0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","9953853f1ef4d6c3b8a8b5a6a9b91efb"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","de26fa8b8bfc02d582babef9e06edd96"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","3a36368e289969e5e29956b8c6eaef49"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","5a442d8d0b65f9844e4f43ea11091600"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","e7e5c62364082061cac18d9c195dd945"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","d15ffdaa14c99894209552514972922e"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2df20529e84e0f81bbdb1f16a2002c03"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","846503b81e3e0b4a65d4d61e6cb71a27"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","2110b122a3f9d5dfc25881d41ae747a6"],["/Swift CompactMap vs flatMap：差异说明/index.html","2d9dd08b80d63667ff9c0938849efe4c"],["/Swift Grand Central Dispatch 深入实践/index.html","fc5729b54bf702fafc7e1a93e00ec9c5"],["/Swift Lazy属性初始化/index.html","bb00de557f6e13a68d240730eba434b4"],["/Swift Promises 初体验/index.html","44510caf22d337a337172176c08d2282"],["/Swift Promises 探究/index.html","132ffd02a292f247a4262c23543b5f37"],["/Swift UICollectionView使用指南/index.html","5feacb6c4603aa1d2c14952d536079d4"],["/Swift URLSession && Combine framework/index.html","9a6063a69079af816e3bcb51053f0743"],["/Swift tips/index.html","de584181941f1055386e41cfe526a150"],["/Swift 三方库：GRDB 使用指北/index.html","d33b957989898085afcbf4f225bbc15a"],["/Swift 唯一识别的视图/index.html","618b23d6b857a8a4e1edde7034f2b634"],["/Swift 如何学习现代UIKit？/index.html","f15e8731d423287a343df466925d9696"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","580c1787d477d475568b9c61580d2c78"],["/Swift 用 compactMap 替换 flatMap/index.html","adfb396e72eba485c8e06da15925102f"],["/Swift 选择和播放视频/index.html","46d107ae9e2fd975ddc2983bd759ed86"],["/SwiftUI 系列(一)：1、 简介/index.html","e8689ab6157b1ba12ce4cbc5c08b14c6"],["/Swift中UIColor最佳实践/index.html","1728748e408e846a19e1fd7a5e7a8014"],["/Swift中快速简单的工厂设计模式/index.html","08878f62173531ddbc905f8718748f90"],["/Swift中构造函数与静态工厂方法的比较/index.html","d55dd1f64134ac0e4f79ed050a80d099"],["/Swift中的UITableView教程/index.html","e845cefaa835fe0484a63222599ce53a"],["/Swift中的懒加载模式/index.html","c1aaa41d82945fd6cf582609e87282a6"],["/Swift中的模块和挂钩/index.html","5939513a498e741a960cb3a07c8deb73"],["/Swift使用布局锚点添加约束/index.html","21696ac6d6ab478f5b2cbdeee8e49544"],["/Swift依赖注入设计模式/index.html","ea12c15c2a4b881494d557b19b293a23"],["/Swift关于Dependency Injection (DI)/index.html","fa7233eec373213792600949d6cd3aa8"],["/Swift初始化模式/index.html","eff19777da4a3dcf664a3e6abaff5901"],["/Swift单例模式/index.html","b03c8a9315eea05462f5a4d764ec7fb3"],["/Swift原型设计模式/index.html","6b7e69bdf672ab4cd182d12ff2c08211"],["/Swift命令设计模式/index.html","d8bb7ebc8ce9bb2953e14ff522350cff"],["/Swift外观设计模式/index.html","6e09012ccae6cf84ed6b2c59f8ec27da"],["/Swift委托设计模式/index.html","e72323b83607ee3ee32c60474b2760b9"],["/Swift对象池设计模式/index.html","5b47c16e64151bd37da582965a7ac1b0"],["/Swift工厂方法设计模式/index.html","fa2d36b643ddfc9c143266cfeae2c01c"],["/Swift带闭包的懒惰初始化/index.html","eac2f14343b913939f33323992e7e4c6"],["/Swift抽象工厂设计模式/index.html","5f13c193f0fa7687ed4f7e82543df655"],["/Swift掌握iOS自动布局锚点/index.html","35cdad2661a4f99303255b5bb7dc8642"],["/Swift支持旋转的自适应单元格/index.html","ea34e51815d06f8b743c8cf813954e9b"],["/Swift枚举值/index.html","895a2f53169ff82b26e4b01181cc961f"],["/Swift生成器模式/index.html","6f08bcfc6584a2f0e5e25ebb26a35a48"],["/Swift结合Xib文件自定义UIView/index.html","675888e2cef5d31cc8da82942d2b4c25"],["/Swift编写的20个iOS库(一)/index.html","3324c8608487cc5d38513fa1ba35c962"],["/Swift迭代器设计模式/index.html","8af6fac37c60d32353ae447fdad2498b"],["/Swift适配器设计模式/index.html","8b5f47870e874ce6afe5fd793778dc9c"],["/Swift静态工厂设计模式/index.html","92d7272888180a51846d0cf7e48b8092"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","73d138b02da880b58398ad6b6a476096"],["/UICollectionView data source and delegates/index.html","c5c99e59baf40e69bdb543cc539304c5"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","8fab98cd1662dac7027055296e56477a"],["/UIKit初始化模式/index.html","2e158c734fc3970159a2cd1df00beee6"],["/Ubuntu18.04替换国内源/index.html","16bf7fbd59e965eb050c39f4193d81e5"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","938f72220775c8a1b34150eda2d872bb"],["/Vapor系列 (一) :  Vapor 初探/index.html","7b10a1dd573d3c95ccb3a91306bfa563"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c5f1b459454e22331f8f6e341db414a7"],["/Vapor系列 (二) :  Hello Vapor！/index.html","624841d83ba38735f217ae6561b7466f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","3e76ccb919607d266b1f5f5720bbbbd5"],["/Vapor系列 (四) :  创建博客数据库/index.html","956277ff11577c8098bb9d02c5005602"],["/Vapor系列(六): 徒手撸一个CMS/index.html","d42a16df51f2d3827c5eb67651fe7276"],["/WKWebView与Native交互注意事项/index.html","6663f7a1c0e44110bbd08bce5d006e61"],["/Xcode扩展/index.html","b9280b2dd82b7e7986397318bf4f512a"],["/about/index.html","32ef0d86c0cf59644ba3b1a0dbee7cbc"],["/appleOS的Networking示例/index.html","d0dd1fa3354de9368aa3de9c2b6532ef"],["/archives/2020/03/index.html","3012743e47cfb39aa19cba3ec555a65b"],["/archives/2020/04/index.html","0fdb61dd29bf2839fd57fc0d72343f78"],["/archives/2020/04/page/2/index.html","f4f23022cfddbeb7fd2a0c808512ffa9"],["/archives/2020/04/page/3/index.html","ce82042902c3785ea4f4c7abe4f9cd73"],["/archives/2020/04/page/4/index.html","d13e7242270052fbe346105656d6fc2d"],["/archives/2020/04/page/5/index.html","81a13627d7d5fb793ec03e5a53272f48"],["/archives/2020/04/page/6/index.html","9c280b1bd509505e3e40caba8af02284"],["/archives/2020/04/page/7/index.html","f8630216f360301741dc104578cb7b15"],["/archives/2020/04/page/8/index.html","6dc9b8b3ca953d2de98980daeaed2b3b"],["/archives/2020/05/index.html","a62ee669a24bbdd242829ea883595c44"],["/archives/2020/05/page/2/index.html","9d13ec00bd208a86af971f8ffc203b54"],["/archives/2020/05/page/3/index.html","65aa8e203cbc464fb7c62e75e39e96d6"],["/archives/2020/05/page/4/index.html","b56b07b0ce85823d5cabb4ea6f025e4c"],["/archives/2020/05/page/5/index.html","24700d6bd65379902db8aefcca4eb77a"],["/archives/2020/06/index.html","0a28d5b3eb89bf3bbbc13cae7aac206a"],["/archives/2020/06/page/2/index.html","68ed16905155516e2194664378320575"],["/archives/2020/08/index.html","c41fd80704cc8d46870c40ff2624c1df"],["/archives/2020/09/index.html","89cdd518472314f5dbeb2040e91a5e83"],["/archives/2020/10/index.html","cf3fb59f0d256f81fcb64bb3a66b10a9"],["/archives/2020/11/index.html","15c4904b93e097f1563e8308618f4564"],["/archives/2020/12/index.html","0df7b4ac4285726b6fe969d47a40927e"],["/archives/2020/index.html","121c0fe1e9afeb6ec871d1313a126329"],["/archives/2020/page/10/index.html","41904711d66a4a52014e1deed73e37d3"],["/archives/2020/page/11/index.html","55f177c002dca674145a562c2d1fb80e"],["/archives/2020/page/12/index.html","d9cee422ae6d41b928bdf1e65081f88d"],["/archives/2020/page/13/index.html","613226df50ed3f917912ff44a677db51"],["/archives/2020/page/14/index.html","b3850b404b631f02187b85033e0d282d"],["/archives/2020/page/15/index.html","fa668520511377f5cbcd3904c8c10c38"],["/archives/2020/page/2/index.html","0b707ab2dda5bb38f27279c8e5ea2a8e"],["/archives/2020/page/3/index.html","0fd2c25bc20de6b2f6eeb6745a3a51d2"],["/archives/2020/page/4/index.html","295d5e109567f1dc1f7615e4efe1f3c6"],["/archives/2020/page/5/index.html","0d27ac502cd221fa0ba3e50a86219d2b"],["/archives/2020/page/6/index.html","63db8dcfaeb745c56226c786e93a86a5"],["/archives/2020/page/7/index.html","bd6ba7efed266960462e8037188434af"],["/archives/2020/page/8/index.html","8b6d53a30c95e054aed8c5e91bda5e55"],["/archives/2020/page/9/index.html","5c63e655896afe3f55217b545447f302"],["/archives/2021/03/index.html","ad8d542391afdc298cea1b03668ceba8"],["/archives/2021/04/index.html","2973a691b8617b65029e2deb6343a3bc"],["/archives/2021/05/index.html","20e53e3e66b2936df091d6a4592ad079"],["/archives/2021/06/index.html","a74b6554be63467f755bb8f8beb801e6"],["/archives/2021/07/index.html","3b161735cc743976e6b33c18401dee1e"],["/archives/2021/08/index.html","f20c124193415d4cd7725840b765cb55"],["/archives/2021/09/index.html","4ebce27c7a2142d7a1ec8dddbff580e1"],["/archives/2021/11/index.html","4b0d0ba3a2f27171c839181ebee6ce04"],["/archives/2021/12/index.html","5e13021f1163c6b2c641bcf04794010f"],["/archives/2021/index.html","1a2a418c7c3b9ba0f957b181fe3cdc67"],["/archives/2021/page/2/index.html","4676008cf419ecf92791578dbfc356b0"],["/archives/2021/page/3/index.html","7c619bdbdd9a2dad13b3328fbf26f582"],["/archives/2022/03/index.html","701868005e24a48f005188501d640771"],["/archives/2022/04/index.html","15d6463e5d07adf1d5dabf9a05fb84d2"],["/archives/2022/index.html","78bafa46731411c3af20aecf63e94285"],["/archives/index.html","2c53118420e4badf707ddd1a21475dfe"],["/archives/page/10/index.html","674e6bbd6c2a791fa89491360d8b4044"],["/archives/page/11/index.html","b0ec847f96cb172e2139a089415c734d"],["/archives/page/12/index.html","704c3dd4185f43e38c68da1062dd836e"],["/archives/page/13/index.html","9a34a0d55d0b1875c860486b368f792d"],["/archives/page/14/index.html","20c62750d18632719bb6de2d6dff4c59"],["/archives/page/15/index.html","8b8429bbd27e2cbb6d7a1cca9567aea2"],["/archives/page/16/index.html","155c2d5c8417ff2e89c9afafba6b3706"],["/archives/page/17/index.html","59aa91c7eff6a51c40e1b54f1ade1888"],["/archives/page/2/index.html","028aec0a6f6adc393619dc2b041c24d1"],["/archives/page/3/index.html","c902f8c8190e0b8ff7c9873351d1814f"],["/archives/page/4/index.html","98153dfce30681201d6a3670a714fba5"],["/archives/page/5/index.html","0a7ab9d69283da4ae4351314d2e1c935"],["/archives/page/6/index.html","27cea74ba99d6634c270844485a75492"],["/archives/page/7/index.html","eac3ad95108357c3e90772c6151eaa58"],["/archives/page/8/index.html","a75c11f427ead8d18037af8e55ea3130"],["/archives/page/9/index.html","6b03fffe037712e06ba809828cf5bb02"],["/bugly 上传dYSM文件小记/index.html","0c93c835e1e8c4167cd9792fb82058b1"],["/categories/Advanced-Swift/index.html","fdc1720b9112121ce76772a28ac28f9e"],["/categories/Advanced-Swift/page/2/index.html","717b1badce736725c6e334ef29ff8762"],["/categories/App-Architecture/index.html","24d1e7cc56fd158cdfe701ee49387c4d"],["/categories/Array/index.html","aa502b4ddd72bd2e299798beb481155f"],["/categories/CocoaPods/index.html","c11e48f79b2113e48cbcfc414a5f1e5f"],["/categories/Codable-protocol/index.html","51cd5c37ce6045436f6a77566e3fdb54"],["/categories/Combine-framework/index.html","1be2da29cdebefe5259c7ace2aab1e2d"],["/categories/Combine/index.html","3ea11f5e19f9e18bf5696d799bfcc4a2"],["/categories/GRDB/index.html","44211574f0e0489a9956074656624d59"],["/categories/Go-入门篇/index.html","74abee2a05e9f112517a1db12541f737"],["/categories/Go/index.html","cd6132a30bd7b94420d3556437bac998"],["/categories/Grand-Central-Dispatch/index.html","36dbe30cb32aa8cc9ed51124d5c13b1c"],["/categories/Homebrew/index.html","0c67553570b65371f5d4699abb144d2d"],["/categories/Linux/index.html","cc80574f43e683064e09ae5cd1265f0b"],["/categories/MySQL/index.html","66fce84f3a4bd54e20a8baff879f87df"],["/categories/Promises/index.html","49b41af795bd078e46d36c60c0ffc8a4"],["/categories/Protobuf/index.html","367d7005129088ea71c807c01ee3d7f5"],["/categories/Result-Type/index.html","10ff8bf5684e9cd5d4a0be620f7968d7"],["/categories/RxSwift/index.html","f57a80359ed356e5c4bb76de8d24b387"],["/categories/Server/index.html","82d6b23107f8bcef748b1507647b80f0"],["/categories/Sqlite/index.html","1331b5bffe6984a2df9b7030396f131c"],["/categories/Swift-Apprentice/index.html","1612e3858114c3d62f09bac9e281bd39"],["/categories/Swift-Apprentice/page/2/index.html","227cfa08abbd4e58103943b0152c3dea"],["/categories/Swift-Apprentice/page/3/index.html","77f462fa8c55bed593319e3fdc7d7a36"],["/categories/Swift-源码阅读/index.html","a3c2e586b401c36db514c070e0658bbf"],["/categories/Swift/index.html","fa1208c284c2e6ad11db012e66d0f251"],["/categories/Swift/page/10/index.html","cec3d8eb7d96fd5d670a8085609fae36"],["/categories/Swift/page/11/index.html","9b12a8f771fa78ee2ee408e274f484f5"],["/categories/Swift/page/12/index.html","7d5b471953816939371a53edfa06ff0f"],["/categories/Swift/page/13/index.html","23843d675ac28e601e675f9eac284ba8"],["/categories/Swift/page/14/index.html","73526b4537900fb670b4898d7251cd2d"],["/categories/Swift/page/2/index.html","3345aee89e9e3aaecf0b79e20ef6cf72"],["/categories/Swift/page/3/index.html","00428d45f64efff3c024cf9cc5fdc173"],["/categories/Swift/page/4/index.html","2e05dc0187dc61638d0933902be49b86"],["/categories/Swift/page/5/index.html","32af11e7e27745c4b4b9cbd1c5e21690"],["/categories/Swift/page/6/index.html","d630af365ffaeaae97c18a5e037764a0"],["/categories/Swift/page/7/index.html","b6b37d1d42d10823b391518c7e44d237"],["/categories/Swift/page/8/index.html","8e2aedd4fa231ae16505964ecda64c22"],["/categories/Swift/page/9/index.html","ee39bab22387835f51a9b86ad9a78525"],["/categories/Swift5-2/index.html","05534cca8a7da6a6c8a557b6e13835fc"],["/categories/SwiftLint/index.html","5e9e64f03f1992aba582c7b87a750771"],["/categories/SwiftUI/index.html","983ed2ab1c7d8157522cea3346b8de72"],["/categories/UICollectionView/index.html","310b9e1796170f8bdb968ba5959887e7"],["/categories/UIImagePickerController/index.html","4b1a31f267b0ef3661bd6f65bd36f654"],["/categories/UIKit/index.html","d0c025e508417acb03ddf0d5ddfd4e0d"],["/categories/UIKit/page/2/index.html","ce94a12aa47f8293622c6d7227f40090"],["/categories/UIKit/page/3/index.html","0810e8047144b8b71a5e3a9e801efc2a"],["/categories/UIKit/page/4/index.html","2f64d4e8b7e2cc6e6f1579096d4b0d2e"],["/categories/UIKit/page/5/index.html","20915ac4ebe09b2f1b3fb9f10e5d24ec"],["/categories/UITableView/index.html","529d40a89efa011f311d6cfb3c09ce5a"],["/categories/Ubuntu18-04/index.html","31ecd3aeab301a634be7835d34f6a532"],["/categories/Ubuntu软件源/index.html","13e08e83f66fa83b77a85964ecc73f6a"],["/categories/Uniquely-identifying-views/index.html","b21e14964f3d47be8e7075e01f342da7"],["/categories/VIPER/index.html","bff4ee2f43b88be0203ddf4f50a57507"],["/categories/Vapor-4-0/index.html","a719f8fd4cec1756d8afb2ea272c99d5"],["/categories/Vapor4-0/index.html","2721b064f267f26f55e85f001ce20e1b"],["/categories/Vim/index.html","62759fef74b821d256f34ed4069e74dc"],["/categories/WKWebView/index.html","247d9760b2949b05907377e97518993f"],["/categories/Xcode/index.html","a22387c90e83b0ea9b9ca367372f2ba5"],["/categories/appleOS-Networking/index.html","332b29f7fdffdc5787d7ab2bddf6e0ed"],["/categories/bugly/index.html","784dfc7fdf1d55709509089fe134ac7c"],["/categories/enum/index.html","6b897f674e3668449db6e10c526bd4a1"],["/categories/git/index.html","839e074d9a3809e25236440d4d0a0eb0"],["/categories/hexo/index.html","26fc3f2afdbb3b513c1a38e415515beb"],["/categories/iCloud/index.html","a47d37945f4a47e2fc139e99022332ee"],["/categories/iOS/index.html","f52ebff2fdd4d8b6fb54241199313f31"],["/categories/iOS/page/10/index.html","5549645f635e43b2a362c22508783293"],["/categories/iOS/page/11/index.html","6379a72e963687f6a812ae5b819cd99c"],["/categories/iOS/page/12/index.html","ff6b60441daa56ad1e9b19197e5cb924"],["/categories/iOS/page/13/index.html","6a73582ef39fa382b01b4d1ed92504d1"],["/categories/iOS/page/14/index.html","3df8a4f79d2a781df47dd10ea19f7b40"],["/categories/iOS/page/2/index.html","828192ff91af98dbe742fd239d98cd9d"],["/categories/iOS/page/3/index.html","781ac678e15d772354631442f4ed68ae"],["/categories/iOS/page/4/index.html","c4c047d9ab73f748748d19ff5c6127ef"],["/categories/iOS/page/5/index.html","fa7675178fe8ff33ef8f0d71c93bc4af"],["/categories/iOS/page/6/index.html","a1c4facb9a84bbf6895aedba499633fe"],["/categories/iOS/page/7/index.html","979280a45199d6275c1d14137a443fd9"],["/categories/iOS/page/8/index.html","665f6cfc6cdb063dd3f56ac1eb59f15e"],["/categories/iOS/page/9/index.html","5b39ce097a4d30f3f2667ea396f6a11d"],["/categories/iOS面试题/index.html","c9b0ad700bb4ad43183e085348344602"],["/categories/index.html","22eb1233a89857eccea5d090f65e5672"],["/categories/random/index.html","dc1b30ed54d4a2ead1792a02ed2812d9"],["/categories/三方类库/index.html","f52173d8e4008616efb22a37e004e789"],["/categories/函数式编程/index.html","f7acb9bba7db33df8f13d7edbfe4277d"],["/categories/子类化样式/index.html","3807e0758a660fb2a6cf0cfc7196eab6"],["/categories/开发技巧/index.html","61908a67214aeb7134b9ae4afc6c441c"],["/categories/开发记录/index.html","10bcfb7a1c73129df789205b27ed5355"],["/categories/数据库/index.html","ccec136b56e47308063da70f9019c886"],["/categories/架构设计/index.html","c2a717c74edc896d18ab591146b9b33f"],["/categories/测试/index.html","4bb0c50d7ce08d43e053860e454456e4"],["/categories/用户体验/index.html","85d85dbdbc22b69a7a55e0d66ccde4ce"],["/categories/用户协议与隐私政策/index.html","9bdcd50831e5b6e920a85a415c9048ba"],["/categories/设计模式/index.html","cf407fed68a9154064b78b701c407d6c"],["/categories/设计模式/page/2/index.html","b28256a4e9226571d501fedc0789e74c"],["/categories/设计模式/page/3/index.html","b11f7d9a3e06561c419543e1cb293881"],["/categories/逆向/index.html","838b79275fdbb2a785961823e7b37fc4"],["/css/main.css","bf75f5e182f2ee4160d7d61856a33e29"],["/hexo部署失败/index.html","cd9bc6b804818baf4f21fb3dc69f4874"],["/iOS 15 适配/index.html","ed8e8cb48d03a366dc99bdb867d2582f"],["/iOS VIPER架构深入实践/index.html","981e09adfada0067a36610bf675c3e50"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","561bb70a15deb3aa89a8cb3c7da10267"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","7bcd9e01a7f15db2360b010cd00b1f9b"],["/iOS 自定义视图，输入表单和错误提示/index.html","ffa9885d30cb26f3f86bbd826e4be371"],["/iOS如何使用iCloud文档？/index.html","56eda224e38b402cc1a03902eb3dbc1d"],["/iOS子类化样式/index.html","6530d47b6fe212ccdc1098a6598380b4"],["/iOS开发记录<一>/index.html","1032d0114206dbc2ab151d5aa6f6f830"],["/iOS自动化布局编程/index.html","c08868e4e1ab7ba85a9d71cb03b8d4e0"],["/iOS自定义转场(By Swift)/index.html","16e67462598ab92e95613fa45f2f8f5a"],["/iOS项目架构：使用VIPER/index.html","4e233d93de00b12d4174df24371de430"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8df44773a50e593e080137e6ebb02ec8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","09c7c2ebc6397ec1011a265df3efb35b"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a930e758cc3f0cb08057d44af0af826a"],["/page/10/index.html","7df9f8f4e44b0b23bab13de352a2512e"],["/page/11/index.html","f9917d92051278423348e4d77597a8e6"],["/page/12/index.html","feddd4549ba3e6d3059b1864d7d1736a"],["/page/13/index.html","da6b6cb60845437a7864badc346a697f"],["/page/14/index.html","d2a700043adc972124ddef34862fa272"],["/page/15/index.html","f0bcc7541409fbd023ee286d5f020f31"],["/page/16/index.html","d220b8a1cbcd1832368769e528e4584c"],["/page/17/index.html","c26d6afdfa5c4d93898ceac77629b735"],["/page/2/index.html","abfca3e528b1362cbfde70face58f7a4"],["/page/3/index.html","b4ed836b1d6d37ae7927e669aedcdbd4"],["/page/4/index.html","85c14b0e26cf998e92a4ae59b3ccb147"],["/page/5/index.html","b17156db630ae1b5f47d23bd8b0437c7"],["/page/6/index.html","f90422102884afa443a8833adaf81285"],["/page/7/index.html","f24b54166dab538e57c5605ac7cc4f92"],["/page/8/index.html","e7546c937b1e7c97d0430a9f1e39c351"],["/page/9/index.html","c1a20711a28c3692b92148a00077a81d"],["/schedule/index.html","1024fb99e70774fc71c5274e026dca8e"],["/storyAppPrivacy/index.html","ab390eb7129b5d2607f410a43b06b5f1"],["/sw-register.js","98dd6de333cf03f15feba308cceb6812"],["/swift 专题：函数/index.html","4f77bc15df7b72fe0a45d01f6ae63f7d"],["/swift 专题：闭包/index.html","b7fb787f3ee751fa0f3abae7fa531adb"],["/tags/Advanced-Classes/index.html","569aa482a2beb8788a8b3db718930cc1"],["/tags/Advanced-Swift/index.html","0a90860791fcdf16df56eaaeff20f0ee"],["/tags/Advanced-Swift/page/2/index.html","b05c58a79692394ba19771632b528da9"],["/tags/App-Architecture/index.html","8e886652274c7e5da499c4e4629b8d30"],["/tags/Array/index.html","9111a158d1d6f158e61a47f04ea947af"],["/tags/Arrays-Dictionaries-Sets/index.html","c078d075e5758b3ba4beef29c86e44c1"],["/tags/Authentication/index.html","219188e9ce50587427803263984fc5e5"],["/tags/Build-in-Collections/index.html","416694a0dd316f6b81b0e0ec3d3b8263"],["/tags/Building-Your-Own-Types/index.html","a72fd9f7af8a77ac20e20b01ff777337"],["/tags/CMS/index.html","1c1ffa0de0e9c60939001b175165b88c"],["/tags/Classes/index.html","bb21467a962195ade8b3ff745ed7ee0e"],["/tags/CocoaPods/index.html","8fca68b1d372c462b16487044fa95e99"],["/tags/Codable-protocol/index.html","abe7bc1add05eb465fe5c6d6c618ab2a"],["/tags/Collection-Iteration-with-Closures/index.html","4815ea714a7cb1772285a81f219af759"],["/tags/Collection-Protocols/index.html","8eff887fa1c8d0b035673821a27a1906"],["/tags/Collection-Types/index.html","792deab816789e3f94be621c2434eaef"],["/tags/Collection/index.html","6dea4b04c87de74e198cc39ce44ea5a6"],["/tags/Collections/index.html","e7b9c3ad4972ab8adb8b93fdba24af54"],["/tags/Combine-framework/index.html","4ad6786eaf649fe5330d970acfd25e9a"],["/tags/Combine/index.html","b030ad420730140caba016f729a2784b"],["/tags/Dependency-Injection/index.html","b0d6bac32e0ae0008f67d6ca20baa3d9"],["/tags/Encoding-Decoding-Types/index.html","81616919dae0f7ef4106437522db6c53"],["/tags/Encoding-and-Decoding/index.html","53dcc3574f9a8dcd546a07362ba307f1"],["/tags/Enumerations/index.html","258cdff79018ac1bbdf630dfdd30ceea"],["/tags/Enums/index.html","3795c512c025164b7454267d1b5f635b"],["/tags/Error-Handling/index.html","1f23c1499d45664c9bc3a4761a5ef2d2"],["/tags/Functions/index.html","83677f15dd2fd92a08fd4ad553fe6ead"],["/tags/GRDB/index.html","c97751643ae80c9035d5b01759c21b0e"],["/tags/Generics/index.html","37fc966a3f60b2e1325aac950e938a3d"],["/tags/Go/index.html","d4690a34c3b9fb18492fb16c75e0e9d8"],["/tags/Grand-Central-Dispatch/index.html","1b44b911531bff9d73f6948f17ee9bbf"],["/tags/Hello-Vapor/index.html","31d655c87cbb5912cf5e043e5d2c706e"],["/tags/Homebrew/index.html","32ad523b204c5f0b7296f3e45989cd02"],["/tags/Interoperability/index.html","49d2c93bb38fceba4a3d0475bdf27650"],["/tags/Introduction/index.html","d25ae7972c661569ccfb1e9a0e06027a"],["/tags/Leaf/index.html","5516c65fa823ffb65efcc3939c4b6ca0"],["/tags/Linux/index.html","56d54566eab9ebe3c0b4793b45bbe48b"],["/tags/MAC/index.html","71696311258600318e35b810d70d6e8c"],["/tags/Methods/index.html","832570c28fb25fdd56c1f78b6e90e849"],["/tags/Modules-And-Hooks/index.html","7a67dc0b73a47716a3fa5841aaac484f"],["/tags/MySQL/index.html","51dc72e14217b61c7988ef6e2b932f12"],["/tags/Optionals/index.html","8f6ce11d3e923e06e8e5694916433a0d"],["/tags/Promises/index.html","e57a53b57e36c5f3975db9ff63c93a89"],["/tags/Properties/index.html","060df2a6077638724f5d3628e5f34484"],["/tags/Protobuf/index.html","48e92d53784e7a2eeecc62a4be406d56"],["/tags/Protocols/index.html","86af16299db839ae485859ad92f03fce"],["/tags/Result-Type/index.html","e74effa63441c4ccf90ce51cf4ac32d4"],["/tags/RxSwift/index.html","41dbf08200cba8cfcaa588f936d9bf5b"],["/tags/Server/index.html","fef398af412646bc7105b18b5d4ec0f4"],["/tags/Session/index.html","dfd2893c4160e03f22d7d59c6ce3ac88"],["/tags/Sqlite/index.html","e05bf9873288cdcd636f8c4e3641e2fe"],["/tags/Strings/index.html","b22d97517820136b98fc6febfc002837"],["/tags/Structs-and-Classes/index.html","f24e06cae21b04f0607c305b75c8b197"],["/tags/Structures/index.html","6f0d93df277742e095abde3703adef1d"],["/tags/Swift-5-0/index.html","de3ada4e984af6a3a0dacb1c7bf582d2"],["/tags/Swift-5-0/page/2/index.html","8938fcc414a95f0eed8ca67221e99870"],["/tags/Swift-5-0/page/3/index.html","c78209b03240e60a51ac62397817950a"],["/tags/Swift-5-0/page/4/index.html","a5a6b2da644fa88fd1dee4cf6a3bc965"],["/tags/Swift-5-0/page/5/index.html","86a9f508e64113059c47f56235d6f183"],["/tags/Swift-Apprentice/index.html","52347fcc8053cf38fa11a27fee29ff1d"],["/tags/Swift-Apprentice/page/2/index.html","2c2f2bb40850911e831eed79cdeb300f"],["/tags/Swift-Apprentice/page/3/index.html","fc6ccf31260e08397c96fc363d77a4e9"],["/tags/Swift-Package-Manager/index.html","2aab92e892ff6e0a17e193a8b96d48e3"],["/tags/Swift-源码阅读/index.html","6a8ec3d2a8f9cb5b645c6f276be68238"],["/tags/Swift/index.html","edf71d42e9b1799e57774f1639ea356e"],["/tags/Swift/page/10/index.html","dd7f509c760754559cf8040cf776b857"],["/tags/Swift/page/11/index.html","1bec53c99fa290f7295c478a1ca14888"],["/tags/Swift/page/12/index.html","fb0c7b6015ea86a55a7066cf3651c6ee"],["/tags/Swift/page/13/index.html","4fe72875f64443a6f37110388a84b406"],["/tags/Swift/page/14/index.html","4b761a2eadfc2a6645e163e98551d185"],["/tags/Swift/page/2/index.html","87d7877274434ba700dda693a822245e"],["/tags/Swift/page/3/index.html","69f156c3108e97faeaf275e6c56f2c9a"],["/tags/Swift/page/4/index.html","313e1bb23e92689818d04325bb0d45bd"],["/tags/Swift/page/5/index.html","0bb358115b80c42d03f20c4537e07b8e"],["/tags/Swift/page/6/index.html","5f105001023cd7c821804b82a0988792"],["/tags/Swift/page/7/index.html","1521bd6b2e9f5686b8c243d71faa5d9b"],["/tags/Swift/page/8/index.html","d31141f6a907e689741d88a28f601dd0"],["/tags/Swift/page/9/index.html","21751ab04dc8db2ed910f725c183d741"],["/tags/SwiftLint/index.html","852bcb56971254feadf7010a25a5b3c8"],["/tags/SwiftUI/index.html","b84919db76c463c874ff367f74a2b81c"],["/tags/UICollectionView/index.html","6431cb940f2ab7ea25a166e74207604f"],["/tags/UIColor/index.html","fe220e244b2bde60d47bc0392e1bfb6d"],["/tags/UIImagePickerController/index.html","9c359e246094ad247e2be121aa54424a"],["/tags/UIKit/index.html","b0cd79a8741dbe74a02fb2351544e6b2"],["/tags/UIKit/page/2/index.html","87e9cd58540f697678d3256f58112730"],["/tags/UIKit/page/3/index.html","6613f853d6027dd566662b3f38a2dc4c"],["/tags/UIKit/page/4/index.html","c5ac14da2d356fef8f82308d4353c5ff"],["/tags/UIKit/page/5/index.html","ad8a232ef80eaa1ee2166e7ccbe45eda"],["/tags/UITableView/index.html","42fd2aeb15d30132cab291561f4d46bc"],["/tags/Ubuntu/index.html","e17e73fef41759797316fdf312db6de4"],["/tags/Uniquely-identifying-views/index.html","2b7f70c7472118dd48b3ccc8b56404c7"],["/tags/VIPER/index.html","003a042fb7a4342b6757c1033a229a81"],["/tags/VMware/index.html","5c803659810c9572b7628f41b76d29be"],["/tags/Vapor-4-0/index.html","10a4d12369412c0b855d72bc43c53b7d"],["/tags/Vapor-初探/index.html","daed5c99c1493f0e7514394c19cb80ef"],["/tags/Vim/index.html","42fde24aca9ea75e6a6d0a3f2c6def19"],["/tags/WKWebView/index.html","01cc7e31733c4f2bdf4d2e0a0ab15015"],["/tags/Xcode/index.html","bf0cff2cf64133a11d6dd6b51974cce2"],["/tags/appleOS-Networking/index.html","46f7962f10c8e0b96e3c35a84f02aaaf"],["/tags/bugly/index.html","6d313085c6cd70c0f9762c3bb014677f"],["/tags/enum/index.html","b95dff253e94456fa62ac16779348612"],["/tags/git/index.html","89dc687538435c9e0128824048d0da47"],["/tags/hexo/index.html","2c4e716e6390f33d1addc5fecf50b600"],["/tags/iCloud/index.html","ef65f574250dfdd08d0da03d2805d236"],["/tags/iOS/index.html","cb9a00c43b588b942681f4f401e62c14"],["/tags/iOS/page/10/index.html","70726a34f3aa90926d21a8c314a204e2"],["/tags/iOS/page/11/index.html","057fb8c3dd42349ef6e8a2b33ffc35b9"],["/tags/iOS/page/12/index.html","1b8f8c8674da8d6eb172a9029fb2fe86"],["/tags/iOS/page/13/index.html","f4cfcdfc3f8fd935cd1e5e63aa7d4890"],["/tags/iOS/page/14/index.html","8da22e7110b9220dd3b6b34f570237d8"],["/tags/iOS/page/2/index.html","bed33b4debba53f4bb300382a46c820b"],["/tags/iOS/page/3/index.html","6fd99f5b5a54ad3eac326cbb2bc243be"],["/tags/iOS/page/4/index.html","d078e4102d7fd8fcf087f1318a60aed2"],["/tags/iOS/page/5/index.html","732973a027794c9091238bdceebc18e4"],["/tags/iOS/page/6/index.html","66b7164743d16ccc8cb6fb64527ec182"],["/tags/iOS/page/7/index.html","59a764eedb9a4f34bf831a22bfdc8ddd"],["/tags/iOS/page/8/index.html","2f534403bbcd887ddfdd7dc200fd8e56"],["/tags/iOS/page/9/index.html","2e0be1710acafbf71ecc8793ddb3639c"],["/tags/iOS面试题/index.html","a6da1c24e82a044cf2f94248be3e8d52"],["/tags/index.html","142c5a919c25f3be1c8479289da8fc40"],["/tags/non-optional/index.html","79f815b2cf14c07f606c38da4f40b4d2"],["/tags/random/index.html","c1c04a79fdc71d60600aae943d08987e"],["/tags/transition/index.html","fc0807c4b042bb44922ea0383bebdcd3"],["/tags/三方类库/index.html","f9d69fadee1e81583aa22368398c0921"],["/tags/依赖注入设计模式/index.html","67187366b8c4246f298a3d463604b09d"],["/tags/值类型和值语义/index.html","74b030e40aef3e11f1bde433e4c26fd4"],["/tags/内存管理/index.html","e5f85d927e6543123af9cf80218f5f33"],["/tags/冒烟测试与回归测试/index.html","0ce92b915ff2cda789376a63e2cbf0f1"],["/tags/函数式编程/index.html","849ea41300a70510375ce1c1ecb1226c"],["/tags/创建博客数据库/index.html","9da4aa71641e04314937fa96f413c33a"],["/tags/初始化模式/index.html","0fbf14cd800917293a101961c2b048b8"],["/tags/单例模式/index.html","9915e1f3dd9386986a698fab91174c12"],["/tags/原型设计模式/index.html","36b210e8fc87c756504603375f22c324"],["/tags/命令设计模式/index.html","da957a31d0c2c194ff3216320ecc764c"],["/tags/基本控制流/index.html","239bea9e0123513235870209d01b2de5"],["/tags/基础语法/index.html","1e7d47e8338e4dd192288ac18ae44aba"],["/tags/外观设计模式/index.html","c1054489290bff639333278977c372ef"],["/tags/委托设计模式/index.html","85b407f9e0672bf37b8eb63066799a4d"],["/tags/子类化样式/index.html","91db0219e3aa6556302beaf26d9c82fb"],["/tags/对象池设计模式/index.html","89d4289af64452f0581a06915c97a61e"],["/tags/工厂方法设计模式/index.html","675786c5e47a8b3628794b36ac7c7f69"],["/tags/工厂模式/index.html","46ef95dcd6077c3b65beeef6f775660a"],["/tags/工厂设计模式/index.html","5fe7baba099c574566c8ecdf6bacd9e5"],["/tags/开发技巧/index.html","496a54d78ec8c680054b698d5df991d5"],["/tags/开发记录/index.html","b959d252e2f8cf2729d146f230880375"],["/tags/懒加载模式/index.html","1947e72cd696d5d6b1a502f903a887e2"],["/tags/抽象工厂设计模式/index.html","d515f603ba599bed6301642f1cb0fd4b"],["/tags/数据库/index.html","9665167a930ab53c7f05829acda7c87a"],["/tags/构造函数/index.html","4ac18a99718e5d6dbaf370398b9572b6"],["/tags/架构设计/index.html","2957859853baa31207b37735a6da12cc"],["/tags/模式匹配/index.html","30eb0b80c5a866c6e8cfd35cec09fb57"],["/tags/环境搭建与验证/index.html","500b10004bc5e843c664c14e002f5484"],["/tags/生成器模式/index.html","82ecab82234738941eb2f9c4e8c65974"],["/tags/用户体验/index.html","6371ea9e470c6ce288c0a0cf14a8b7e6"],["/tags/用户协议与隐私政策/index.html","b20abcdca35fd1440aa4c78db89c2453"],["/tags/类型与操作/index.html","d6c7e9d42dd25f0bd4f3c9cd40c38349"],["/tags/自动化布局/index.html","d20c224f69c33b201841b98f7638f2c8"],["/tags/自定义UIView/index.html","80e242664e9fbe248ce47a11ad7a1b58"],["/tags/自定义转场/index.html","9724da36e0143e3830791ccf85ed37ae"],["/tags/自适应布局/index.html","f58b921e38f3da8a95d09e418ef971d8"],["/tags/表达式、变量和常量/index.html","8aac433289b676772b69d1bd2b0e3286"],["/tags/设计模式/index.html","bb614e487424a2f76928158631236242"],["/tags/设计模式/page/2/index.html","fb3b4ac1024bf9d52d49b2571ca9e874"],["/tags/设计模式/page/3/index.html","ebe647c1719a8c01660f0d252e0c15c2"],["/tags/访问控制和代码组织/index.html","e4492eb86c3aebf018c4f6bf5a26b352"],["/tags/运算符，下标和键路径/index.html","1b1db588d373ffee25632ab44bf5c9a2"],["/tags/迭代器设计模式/index.html","1db4c74e618d7cc2cf2929c692c7e67b"],["/tags/适配器设计模式/index.html","46c7b93e25a0ae7e9b499fb8da23f2b2"],["/tags/逆向/index.html","347b13d154e71fd08d23b2f899d1d019"],["/tags/错误处理/index.html","97275fa3a4c08a759300ea77bdcf2a03"],["/tags/静态工厂方法/index.html","8e2535be341baa46d3b496ad9b40d7fa"],["/tags/面向协议编程-OOP/index.html","bb91cabef420e21a39c6f65d03bc42f5"],["/tags/高级主题/index.html","698a80fbcd76afc3d72d7fbf395eb0df"],["/tags/高级协议和泛型/index.html","a5ec8ca87a4289030aa5822e3a273e78"],["/tags/高级控制流/index.html","0dadf6f7c530d9f5e4060d8578a2bed0"],["/xcode 常用的快捷键/index.html","8044fa79e93a5e1c2b0123074d7c4828"],["/为iOS应用构建输入表单/index.html","857cb98c4220e4191c52091c6b413ea1"],["/产品开发的幕后花絮/index.html","642be5a483c54673982d58181dae0b8c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","4f76a24f52d0203ac80e3dd9bdeb49fc"],["/冒烟测试与回归测试/index.html","a75d808dd02e18e0cb0e76a7ed4f50e3"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","77b3afb0260b7dbfb6475882500873e5"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9d87714399da3faaead9e902855b1c9c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","50719de3e8cef4a287bd0e1b8b1d5886"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","7a9ed0959e5856d282f5baced864a11b"],["/在Swift中创建自定义集合/index.html","24c947daef548754d8747f51fcd43e72"],["/在Swift中处理非可选选项/index.html","d12c612547edb8567042d6a87eddaa49"],["/在Swift中生成随机数/index.html","2ddeb3d4930412b82c4bf8c90952e55b"],["/在Swift中重构单例模式用法/index.html","e008a14d8cd965f65ba02469d613acf3"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","6a51f1523375f71cb8491af9876feab7"],["/如何为VIPER编写服务？/index.html","654ffe79124bd79601927fef10481f35"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","85b5c945396c44d84090bc370c9af6bd"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7ffe3216cfa116656b2fabcb28fe6a4d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5772bead2face1cc777056cc9ac7c202"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8ba1fb86cdd42d2d787a0223a33cab90"],["/掌握VIPER架构/index.html","952b55998ac5f1567fc180825390a232"],["/揭秘 WordPress Hook 系统/index.html","bb45fb4689098eb052de376cc29391e9"],["/比较工厂设计模式/index.html","7af4cbd41d72ac713bdb7f02f93c919a"],["/深入了解Swift中的Grand Central Dispatch/index.html","5111adb9fd048b0f7e80c3b19a5594c8"],["/深入研究Swift框架/index.html","7123abf1246b5c84b80e5270c6a2c5e5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","75cf319457a1eb3352cc78381235666c"],["/选择Swift而不是Objective-C的5个理由/index.html","63211638a8056ed6cf6cae9b3e9235c4"]];
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
