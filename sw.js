/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","4b0d4b37cbca1de8f2e704020154bd2d"],["/2020年iOS面试题总结(三)/index.html","892dc9732f2d954d2b2b40b812a954e2"],["/2020年iOS面试题总结(二)/index.html","9e56ba6ba74d04d2119c1889b162aeaf"],["/Advanced Swift系列(一): Swift 简介/index.html","77303d9f9b1316c5ed0a5c92ce03052a"],["/Advanced Swift系列(七): Strings/index.html","9a22c7a1c68f26220ef7f6793ddf97fc"],["/Advanced Swift系列(三):  Optionals/index.html","1a58d5620820177693fbabaf5b60c3d5"],["/Advanced Swift系列(九): Protocols/index.html","a3d5653682f3b5a5867136c1388e1070"],["/Advanced Swift系列(二): Build-in Collections/index.html","83a7112bbc0f38dfd9f31f123f06bdf2"],["/Advanced Swift系列(五): Structs and Classes/index.html","66ab8ab7dce37001c6032235d7806e32"],["/Advanced Swift系列(八): Generics/index.html","47eab7dbaacc70356393c3cdb5dc2f2d"],["/Advanced Swift系列(六):  Enums/index.html","14f9fa6b1bac7872af5c740e8e17ddc4"],["/Advanced Swift系列(十): Collection Protocols/index.html","3a9d945856adbba709b2b8d149e71895"],["/Advanced Swift系列(十一): Error Handling/index.html","2b79f4cf5ef5fc773d40094b6b82e76c"],["/Advanced Swift系列(十三): Interoperability/index.html","ca199a45f7255effff6ae9cdadb644aa"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","66268c86aedbad04f62f0d3a94ca4f37"],["/Advanced Swift系列(四):  Functions/index.html","153da3ec5cb36662dd6d8beb144ce117"],["/App Architecture系列(一):  简介/index.html","8458357759329fbd5910f98d531267c8"],["/CocoaPods 设定版本说明/index.html","561f58d2ed316277e3ae734463c1d77a"],["/Functional Swift 初探/index.html","1d37676d5451831b40b6f97833084cb8"],["/Git 使用小技巧/index.html","db7df3caed5e53bd2feb17707339f266"],["/Go Protobuf 初探/index.html","ec0fb6db1c329737ca9dd10f10a4f772"],["/Go mysql Tips/index.html","dfab313d3e5a27ce14471003f632d56d"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","703192b5b14383f46fda684cd534e4f3"],["/Go 入门篇：2、Go 实效编程/index.html","19c7b9bd62bf097a960091a65a456816"],["/Go 入门篇：3、Go 重要概念/index.html","10a45c6537168b8ccba9a5d8ccee7121"],["/Go 基本语法初探(一)/index.html","5aac41b28b6059f790be0c6d75f99a2b"],["/Linux VIM 命令及操作小结/index.html","ded32748c698198eab1a1923e53e5a90"],["/MySQL 基本操作/index.html","04ebabc7148088afd715b9ce668cc056"],["/MySQL-列类型和数据完整性/index.html","22bc2ace9d5f733d3c04ca4b3cbd7dcb"],["/MySQL-数据库设计和查询语句/index.html","69db8e39c592859f01199b86186bc55a"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","caa03f83b245cbb0a4430440a0e7fad6"],["/NSCODER和SWIFT初始化/index.html","4add5382a485783d5d3a0bb80c4d4b6a"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","37229433abeac704e255dc8faac0de31"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b58e3837036ffe9569f923950aa4245a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","6ccb6de564f8127cf95f9f3259cda1c6"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","e264b5d17024e7489c9bcfbdba3855a5"],["/Sqlite 使用Tips/index.html","6d96bc6ce2762e73cb0f840e649dd03e"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","2cced931f2c9b0407010dc4083f4672d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","254de2c9eaf4f28369f2520e5504a6b5"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","1f635672a5715582cbcd10c409954b85"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","5c3cd37558640a5d59e1b834926c7aa7"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","2ed7cbd043360cac31fd407e9243e4b6"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","8612a2366499c465faceac4bf8705040"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","4b4320a7f010081b730fad972d3fe68b"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","cf8113862cd9499bc6fc3bfbd9e93a71"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","e8b719f16957c0cac945ab61ff0b12a3"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","5fc8af45f930688e5406d2164d57cc20"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","d5d0e9ea7960c7cd6089301f37a2200f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","fb9cb3b95e0067537e432e213c425a70"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","a5bba488111143af946d8d30ce45a600"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","f4993045a39ebdd5ff3f4f0c026fcae2"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","42c9d895e30fe61babd1cbeb82112521"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","c836a838c8ce718dbf4ade175f1dcfe5"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","af3f227b00b504c5b5dff79b7f852266"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","6a71a486648366d02e3c5261962645fd"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","c367f2899c891e7adcdc6f696e1f92f0"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","56680ddf1b81ac1eea083eff70bf4d50"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","b03f950685c106a2beb44c5cbb7c40b6"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","aeef9f6d1a3d8a3ce8031440fc29d4d3"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e83812ad8f328a6ec4e0fc8ca4d5429e"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7e5cc355c25fa6ac7db00381ef53c551"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","523b7a1d474a4798f7e9682891f794e7"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3775459b7a0d199a61f74a8a9b2c19fd"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","fc34ad03ca9d0155f0bd69e8e686b19f"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","83e1bc9b3960c172c9f0d7f08f612298"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","368b689c7330bfe7259eb8334f55337b"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","525e218ce8350527f2b7e1c75bffa57b"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","87a3c2b8d32bed2a566ae253ae7638a0"],["/Swift CompactMap vs flatMap：差异说明/index.html","964b9219acf6d36bc666cd5a1d983f4d"],["/Swift Grand Central Dispatch 深入实践/index.html","892b93c98b5c2be8e5e1fea1fba28291"],["/Swift Lazy属性初始化/index.html","6e1d409c5a51d7e426ea843b7422daa6"],["/Swift Promises 初体验/index.html","2799d9a06b6cc0b097a5da76faf467b3"],["/Swift Promises 探究/index.html","c9d7d54f07837e96c08597c2724e0abd"],["/Swift UICollectionView使用指南/index.html","42ba5e543fd83a25bbdddb8abb90ad58"],["/Swift URLSession && Combine framework/index.html","11f9b5feabd8f7c67969a56d2e9f24b4"],["/Swift tips/index.html","8b147b1a890b669fddda0f76f42cf256"],["/Swift 三方库：GRDB 使用指北/index.html","ad443d118703433593c19338f82a8fcc"],["/Swift 唯一识别的视图/index.html","b958c1e5673f436853b30fde13cce66d"],["/Swift 如何学习现代UIKit？/index.html","332885522977f2089a4f526012e0dac0"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","761afc3c001ef72c83ad8dd025fdf33f"],["/Swift 用 compactMap 替换 flatMap/index.html","4fd99f9fb04f2c298f89b57377850afd"],["/Swift 选择和播放视频/index.html","e10eb67dbfaf3b5f4a629405a63334ad"],["/SwiftUI 系列(一)：1、 简介/index.html","b8a3ffbfb3e6baba6abd2fde01eff9cf"],["/Swift中UIColor最佳实践/index.html","4002cfe4081fefede92b24d78b157f5a"],["/Swift中快速简单的工厂设计模式/index.html","8e22a80f40339a8475a7b05eddf43b55"],["/Swift中构造函数与静态工厂方法的比较/index.html","b2af8f096d7f2f9463a3bbbbfdbd4960"],["/Swift中的UITableView教程/index.html","a8d2ceb9a7e956e8f53cc498e883b228"],["/Swift中的懒加载模式/index.html","f03036370fed311cdf868564da0ad963"],["/Swift中的模块和挂钩/index.html","cba8f58a7d3e4f60e179bac43e0da147"],["/Swift使用布局锚点添加约束/index.html","31dcf9cd7d01fdcebe875eef8c4a1fa1"],["/Swift依赖注入设计模式/index.html","6e4d83cd565f2f77d478e639580aded1"],["/Swift关于Dependency Injection (DI)/index.html","934145f4a55c7237c40d14c99b6e1cd2"],["/Swift初始化模式/index.html","5ff5a37ca4b5bbdce412af9e3db170ea"],["/Swift单例模式/index.html","10fc776c75045bb6ac93f946317c89f9"],["/Swift原型设计模式/index.html","047a7495afcb7c280cb062b383d1f600"],["/Swift命令设计模式/index.html","40d92bf46254af85d4137db4123dc2a3"],["/Swift外观设计模式/index.html","c73fcb8c7d41ce980ab2342cbb1d56f9"],["/Swift委托设计模式/index.html","218ae32e6e135a67da79c42d89db9feb"],["/Swift对象池设计模式/index.html","fd794b5d1f598378ca8427caa467a332"],["/Swift工厂方法设计模式/index.html","c478ab08ea1baec3c718849907cfa3c4"],["/Swift带闭包的懒惰初始化/index.html","c2a8e2c088b2f2f842c370e4a77ae547"],["/Swift抽象工厂设计模式/index.html","564ad671c44c8004a86eebad3f3a64ba"],["/Swift掌握iOS自动布局锚点/index.html","2afb3d1f8e0a97d6edcb84fc1d1b6a3f"],["/Swift支持旋转的自适应单元格/index.html","f1b00ee092a7c86e0531b3b718ac1fe6"],["/Swift枚举值/index.html","80ffd1bc021e95aea75a6ef080d047d6"],["/Swift生成器模式/index.html","30d01103a999270f2209ae4cbc34951d"],["/Swift结合Xib文件自定义UIView/index.html","2931303b527d6108e41d0947aac3750c"],["/Swift编写的20个iOS库(一)/index.html","c2ba73acfe1529f006c2aa2dc43c729d"],["/Swift迭代器设计模式/index.html","608df3f32a53fbe74e08cebac50339df"],["/Swift适配器设计模式/index.html","85361bb32bec3008a22c09d09cf3c929"],["/Swift静态工厂设计模式/index.html","858c73cbef474f246b31defc17193d5b"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c6aaca40b0a20aa7549240fdd9db7c68"],["/UICollectionView data source and delegates/index.html","24bebb0941fdae87d3b5c0c115474118"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","ba1a33d8ec72ae3011d24f2367911ed6"],["/UIKit初始化模式/index.html","49fe8e09f34b23efe9e99f43642d0367"],["/Ubuntu18.04替换国内源/index.html","9ebac561ea96cfc9b59529e38f98b885"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6dc43af68f1291ed363d4e4cda376b08"],["/Vapor系列 (一) :  Vapor 初探/index.html","7e5128a0a0e1c15e7e29853ff59a25a3"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b9914fcbc69bfddb97e4e4eb8b6701bf"],["/Vapor系列 (二) :  Hello Vapor！/index.html","7d5d5b903fc2fcc570715d69bcd9c7db"],["/Vapor系列 (五) :  使用session进行authentication/index.html","3a16a0f3b96582d6262c34147f38c9ea"],["/Vapor系列 (四) :  创建博客数据库/index.html","7b368857b206d3262f461cf051b59251"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3ab9e7e45055115939c2188d4872346b"],["/WKWebView与Native交互注意事项/index.html","0cc3ebfa05ac9859cdc345d569ef36ab"],["/Xcode扩展/index.html","a97cd24defaee487750fdbb49dbf526c"],["/about/index.html","fb879ca397daa3da478d823d2c469858"],["/appleOS的Networking示例/index.html","cc54b3059eca88e52e295416d6649cda"],["/archives/2020/03/index.html","1fca0c5f93601b33aefa6006158cc131"],["/archives/2020/04/index.html","4a2799f2c8b16ebbe90f2fe05f721a1f"],["/archives/2020/04/page/2/index.html","995f22c442b87240a0acad69e144011b"],["/archives/2020/04/page/3/index.html","0835b1f65b5283d4ad5fe76da7605401"],["/archives/2020/04/page/4/index.html","476632f5c7b79f10c1d1846755212591"],["/archives/2020/04/page/5/index.html","94e3f95ee1bfb67103dc369244149f5b"],["/archives/2020/04/page/6/index.html","d6a0e42120fccb4c18c6308ebc53ffa6"],["/archives/2020/04/page/7/index.html","0e46e9b3a5eb6e21301ef7ad75588b0c"],["/archives/2020/04/page/8/index.html","4fa604b4a321ed370fcc140f35020849"],["/archives/2020/05/index.html","6d6e3f0d7bae64628b1395decae982be"],["/archives/2020/05/page/2/index.html","2344908f2d2ba65f67d96d637a9c9b6c"],["/archives/2020/05/page/3/index.html","3f44b394c15cc523045cd8e76286f928"],["/archives/2020/05/page/4/index.html","d4d60b768839e805c81c35aab8279f88"],["/archives/2020/05/page/5/index.html","928a3209b78c7291abe7c54a5dc5fda3"],["/archives/2020/06/index.html","8e8586ac9f0c02da26027b42e2497fad"],["/archives/2020/06/page/2/index.html","191eab5962c0fba3e442125b3eab2ad1"],["/archives/2020/08/index.html","9605e65ca9df5243a33d73a074e2e6c1"],["/archives/2020/09/index.html","23bd664bc3a1eab8e5a08da88a72a6ff"],["/archives/2020/10/index.html","22ac2a1a338c4d8cfcd537ae006525d4"],["/archives/2020/11/index.html","2f3d87b998f89478aef07478687696aa"],["/archives/2020/12/index.html","2c996a0dabd2193e7ca1140da2f76f32"],["/archives/2020/index.html","9350ace042e6da834a73f26dbf981654"],["/archives/2020/page/10/index.html","facfbc4cb081d6bb1b08489785f0d776"],["/archives/2020/page/11/index.html","118c20663ca9ac113b730e919c5f9be8"],["/archives/2020/page/12/index.html","a6f5a92c149c4399e6ea66820fb3a737"],["/archives/2020/page/13/index.html","593bc2ebcad9c7a1fd4304c2f98673d0"],["/archives/2020/page/14/index.html","87deca216ec43d7ccb5e840373e726fe"],["/archives/2020/page/15/index.html","096502956b814e513cab7898407d7ba1"],["/archives/2020/page/2/index.html","4c6197f19a8c2fb6a10092a701bfe8bb"],["/archives/2020/page/3/index.html","bc96ced0f718680c8cec9c70784c82fc"],["/archives/2020/page/4/index.html","0f3132abb787d031ccfd27136cf23700"],["/archives/2020/page/5/index.html","6593cf57383e0f877521e4ff6c299be5"],["/archives/2020/page/6/index.html","660242ab23b4e7c8f39e458e106db586"],["/archives/2020/page/7/index.html","8efb4fe4b291cd591580215d54f5f05b"],["/archives/2020/page/8/index.html","764fc2e6bb729154747d413eb835cac2"],["/archives/2020/page/9/index.html","330387b5b321cf4aedd814a9e37320f8"],["/archives/2021/03/index.html","94bf737b2393ef50a813232c75b13ba6"],["/archives/2021/04/index.html","fcf2ac11dd923240c278ccb14f245aa6"],["/archives/2021/05/index.html","52752ca8f9a403be2385e9df9afe2a83"],["/archives/2021/06/index.html","913813143149e6cc5c44c08fc98e302a"],["/archives/2021/07/index.html","7e6e348c2b136d4063a404fd6f48dfd8"],["/archives/2021/08/index.html","b2229667511133b2e2610dbdd8392d73"],["/archives/2021/09/index.html","5461aa31097befb7a82700fdeaeee6fc"],["/archives/2021/11/index.html","06003576c01c99c41130c471473004b8"],["/archives/2021/12/index.html","6e1215ea02e1bad045b5a9bdf3d17606"],["/archives/2021/index.html","fc438afee9739a6d432540c7ac68f55c"],["/archives/2021/page/2/index.html","ef16d2a370f915187156eeda32042cd5"],["/archives/2021/page/3/index.html","cffb8911d06b4c66122b5691f8b13d66"],["/archives/2022/03/index.html","a797ae8b258cf391a57566ca21067c8d"],["/archives/2022/04/index.html","196286ccf594c39df10d97d945471647"],["/archives/2022/05/index.html","7032f736f22ebd727ec9e7d6258017c7"],["/archives/2022/06/index.html","53ef819c8122795982ebc15ccc8f151f"],["/archives/2022/index.html","2f9fce4df6f85e80919dfb06fca37699"],["/archives/index.html","e77bbae2acb77db77d904dff7a544226"],["/archives/page/10/index.html","e4b91faefc40682b3be64418b3d45967"],["/archives/page/11/index.html","fedab0fa47c98315f8884fea0b483cf7"],["/archives/page/12/index.html","7c8086f949fec998bfe509a1b8bbdb86"],["/archives/page/13/index.html","9ff702cbacebb60a022e3894279e8e09"],["/archives/page/14/index.html","46936791e063b4188561d0f695c7f2dd"],["/archives/page/15/index.html","b8cec60e4d5ff62d785c0464708b3723"],["/archives/page/16/index.html","8db553b5ebf4b9d293235684da644e62"],["/archives/page/17/index.html","17d9b9507f30749d51e5a8634e710e77"],["/archives/page/18/index.html","443ddc3a39bc41ed8ffc21e07063d6bc"],["/archives/page/2/index.html","aacc5ce45b506b63771d32acb168c6f3"],["/archives/page/3/index.html","db595e492e12a451d067ff1d22143e23"],["/archives/page/4/index.html","e383785fdaac3b7cd131446a6935e494"],["/archives/page/5/index.html","9de041ad8f41be2c3a8e9d6f56dbf3cf"],["/archives/page/6/index.html","77b91fd4e7d5dbafd8b79dfe971bcafc"],["/archives/page/7/index.html","fff339b2df084d602a5507b8a35364cf"],["/archives/page/8/index.html","0996192ede952d926daa4bb02d4277b5"],["/archives/page/9/index.html","037f4b4d891f8c4eb2543fa3146d7f9f"],["/bugly 上传dYSM文件小记/index.html","f99f10decb4d469ccadb7cf06523e8e5"],["/categories/Advanced-Swift/index.html","2450555d25b68dab8f70bc7397f330ed"],["/categories/Advanced-Swift/page/2/index.html","ba040b68bd6577923c13cdb4ba3a2d81"],["/categories/App-Architecture/index.html","03c036c202498bb1974619d4ad10610b"],["/categories/Array/index.html","9cc98ac170cb8d59794e448e001ce23c"],["/categories/CocoaPods/index.html","d27f50478c68e1c6a0313a41654ae6b4"],["/categories/Codable-protocol/index.html","c5680afe9346a5980576ce292dc06393"],["/categories/Combine-framework/index.html","7330da10e685e588d5aeb96c997036bd"],["/categories/Combine/index.html","d28c4aee08cf7d30c08d05860d626ee1"],["/categories/GRDB/index.html","7b3d20a96739e599cb2ed80128f432a4"],["/categories/Go-入门篇/index.html","7f0e8e52270f5db4d1a3eea82ab9fc29"],["/categories/Grand-Central-Dispatch/index.html","60f7749bfc681c6e5e4b8e1f88d2b298"],["/categories/Homebrew/index.html","b911c0cfd4b6f9ffa68a9b35fb7c1ccd"],["/categories/Linux/index.html","11848a5861b5c191e75edba0158daa70"],["/categories/MySQL/index.html","64c887ba8ea758ffb898715ce3dbbe5a"],["/categories/Promises/index.html","bd51bfeb9af54f9d2f20d93dfd478451"],["/categories/Protobuf/index.html","45350a95aaab1a07673717a56c526e79"],["/categories/Result-Type/index.html","662ce1e6ee3e07092a684159735cde33"],["/categories/RxSwift/index.html","be73029f2b475d0a3e2cef4efde948db"],["/categories/Server/index.html","bf98488c59d9b9ec767890bf8262ed66"],["/categories/Sqlite/index.html","1064ac06c681d5f62978dcfb7dd414cc"],["/categories/Swift-Apprentice/index.html","5ae0e17a366262cb7456d353822bd5ab"],["/categories/Swift-Apprentice/page/2/index.html","4a35fec5b8242571ade531990d8808a6"],["/categories/Swift-Apprentice/page/3/index.html","212ece0e22374a03e9008d6d8aacc990"],["/categories/Swift-源码阅读/index.html","37242c2590d394824d20055365bfecc1"],["/categories/Swift/index.html","e8ccf74583b8d3742872d13af8726158"],["/categories/Swift/page/10/index.html","66a555dc2d84b60dfc9b2d233f086491"],["/categories/Swift/page/11/index.html","22f41537c21489c7cd219992e57a4e9b"],["/categories/Swift/page/12/index.html","48e8c995eef08f61f07f0d08d91516f7"],["/categories/Swift/page/13/index.html","643648b51f6dc6877fe9234d823ce1a2"],["/categories/Swift/page/14/index.html","bd206d948f0afc529daeafb302bb8056"],["/categories/Swift/page/2/index.html","f6b615bb55d70dc946b7afe4b24af6e3"],["/categories/Swift/page/3/index.html","6db10c206b2b6248e2dca1ef3fe877c6"],["/categories/Swift/page/4/index.html","968162090fc8eda601310a1d5a30c6e2"],["/categories/Swift/page/5/index.html","892019384a258602c72f6850a3cbe226"],["/categories/Swift/page/6/index.html","420f6c6133a20ae1bfaa61f7c37b1b74"],["/categories/Swift/page/7/index.html","ce12520fb601df53928bb41530deec64"],["/categories/Swift/page/8/index.html","f6de06d9068957dc654f75b7d1171bae"],["/categories/Swift/page/9/index.html","9e71fad597ec2ceb89f99a4b209823e5"],["/categories/Swift5-2/index.html","99b1cc1ffe38b2a08a9e6777ecc0c9f3"],["/categories/SwiftLint/index.html","95399aef2326b62d3f4944bec9b3b6d9"],["/categories/SwiftUI/index.html","816a2a372ff4d3b035036b7c2cb6f603"],["/categories/UICollectionView/index.html","7a78ebdaf5762c5bfa6111dc74bac3b0"],["/categories/UIImagePickerController/index.html","ac3ab30ff9c6dad1a4ce5a92e9a2661c"],["/categories/UIKit/index.html","20051ccc1639b5cd78a89bbf7a94b7cd"],["/categories/UIKit/page/2/index.html","044fb9bebdd000accaefd08a013e76a1"],["/categories/UIKit/page/3/index.html","ff02d590f95f4f4dda6135ed51ca0eff"],["/categories/UIKit/page/4/index.html","1df57049217d6518f4e9e261b3b51ac6"],["/categories/UIKit/page/5/index.html","8c7af0183a5b14f31f4d709ef3f7a817"],["/categories/UITableView/index.html","2540e17e0cc6ad23d7fb193b096a36b8"],["/categories/Ubuntu18-04/index.html","d576cee12307d7483ed27067b96c0924"],["/categories/Ubuntu软件源/index.html","41fd0cdd6a1563a31afbc795bf72dbc7"],["/categories/Uniquely-identifying-views/index.html","657afa259e1a0807be733aff5339618e"],["/categories/VIPER/index.html","f8ef2a7067b5b8053d960a1b063e3399"],["/categories/Vapor-4-0/index.html","0d17593e07df9164cd66b1b3e112395a"],["/categories/Vapor4-0/index.html","1c18f2587c45a137d445383ee07fed60"],["/categories/Vim/index.html","7d8820d7394cc3f366191b4aa408d503"],["/categories/WKWebView/index.html","106692ca4ac0da5be8ee9c5d4a2fbed5"],["/categories/Xcode/index.html","309b11aa972fefdeeca960bfbab90178"],["/categories/appleOS-Networking/index.html","2997158ea8bc3432684ad3bc2de3c49a"],["/categories/bugly/index.html","08f771118cbf9aaee3740668a07f6813"],["/categories/enum/index.html","c3e7289d74bd84032a02d65b9e517602"],["/categories/git/index.html","effeabc73e6d16fb68f35ca36c85fb38"],["/categories/go/index.html","329d71c783a414b3ccb430f6af80c170"],["/categories/go/interface/index.html","25cfe153752b40b58899f66b58227931"],["/categories/hexo/index.html","927f110ca58fb58e72a6ab0a66ce59f1"],["/categories/iCloud/index.html","840af50b71571893b04218d2bc059c79"],["/categories/iOS/index.html","88d5f9360b3b1ceae7733660ab5ecbe8"],["/categories/iOS/page/10/index.html","d4b7be0f9be55a14483dcb6b342e5e1f"],["/categories/iOS/page/11/index.html","b930416a6929d10e45f25d4499ea0049"],["/categories/iOS/page/12/index.html","b2ceeb58fe13d9af45132109cca59741"],["/categories/iOS/page/13/index.html","478a40be2da6545e4b45a0fb78e95d3b"],["/categories/iOS/page/14/index.html","748fcb4ac5a0d97268d1012d2b54122f"],["/categories/iOS/page/2/index.html","597c08cb7cc4d7fa70529b98115a8716"],["/categories/iOS/page/3/index.html","10908ab1b91969f1ef937652df1eb597"],["/categories/iOS/page/4/index.html","5650f0b5370e3b7ec44e534e4869e3db"],["/categories/iOS/page/5/index.html","12e2c2d0a84b1d8b9456e30015fbe0c6"],["/categories/iOS/page/6/index.html","304ac8ee27f9a73998732dc55fec2656"],["/categories/iOS/page/7/index.html","1fa5d9ddcf93e1626e9a1dd117a62573"],["/categories/iOS/page/8/index.html","3bae98a19a6ec1026e2798bdc841b0a6"],["/categories/iOS/page/9/index.html","9c4c984bbf634f81c73ba95620c2e2af"],["/categories/iOS面试题/index.html","bfadbcce9baa9a63faf9969aec59c37c"],["/categories/index.html","5a37df15ff82726545d06e0cb0893472"],["/categories/random/index.html","15902bf6d91eed99ce605926f7fce27d"],["/categories/三方类库/index.html","222f6f9085f6f03c1debc1fb2fa91f77"],["/categories/函数式编程/index.html","a02b95ef1a5b556f7d1c686beff6e34a"],["/categories/子类化样式/index.html","8f08c11811decf90415f9d9a97b476cc"],["/categories/开发技巧/index.html","9a1ed46539ac342a3ae9d8838fa54503"],["/categories/开发记录/index.html","8bf53a5f5a51254413e44bad846c05d2"],["/categories/数据库/index.html","5048e044832749624ae4dc3949a5e73b"],["/categories/架构设计/index.html","8a735c800c33da7475f6a5dbbbe01296"],["/categories/测试/index.html","102009985d17620b3d1651db3ba3e38a"],["/categories/用户体验/index.html","1ad142bbbb33523954d27b167d71a290"],["/categories/用户协议与隐私政策/index.html","67527a242a84ee491d61722511acf59f"],["/categories/组件化/SDK/index.html","0e1f6a5c931504f9c473257655d8d480"],["/categories/组件化/index.html","b84f749ed5c3c3d6e86255375028da5b"],["/categories/组件化/模块化/index.html","c109bfdf6ad1dd55925aa43a2274f765"],["/categories/设计模式/index.html","f33b181789db7f8e0ee1904515c667da"],["/categories/设计模式/page/2/index.html","233d26a8369c1e175cde24b61a7d58cb"],["/categories/设计模式/page/3/index.html","fb58e197f0979e7fb32001b88f51dc4b"],["/categories/逆向/index.html","b16c64b9e17ec9659e155b04d7d2a34e"],["/css/main.css","8becceb5d3bd3341df4e2cf8ca72ed28"],["/go moudle 导入本地包/index.html","7ba1ee4de797d3a596810b6c8c47991b"],["/go 每日一问/index.html","800a88a8d65583b9b900272916f069fb"],["/hexo部署失败/index.html","3ccd80196cd63a08e9f8ed744f102559"],["/iOS 15 适配/index.html","f33201ae6e8cf1b86b14a89a55b6f22c"],["/iOS VIPER架构深入实践/index.html","d4eb41d42f7fa61793fa1d9db3c4c70a"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","65f7edd6482629ecef19e4782fd0ba17"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","f56f44695fa9304e9d43c7d3706d9d96"],["/iOS 自定义视图，输入表单和错误提示/index.html","7f9db419c7376921c9956d9010778f05"],["/iOS如何使用iCloud文档？/index.html","6b2efb8d743f864c62773c8a7ac9d769"],["/iOS子类化样式/index.html","240d454fa5c1ae91739257e1dc4883fc"],["/iOS开发记录<一>/index.html","bffa136c7a3b33cc037d9119caab1c00"],["/iOS自动化布局编程/index.html","fb7f1f614f8e430f448948e6d89e6696"],["/iOS自定义转场(By Swift)/index.html","940c6e090c6eceab6ff16e56b926d92d"],["/iOS项目架构：使用VIPER/index.html","08a12234518a764126976836bd09e1d8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7dc0451d271cf55632468448071eca8d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","d9965996c60c51323f2ade2496f341f2"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","a776074da88297d7a433d6635a033826"],["/page/10/index.html","1d0729ff8c2ff520f7d870af5639b82f"],["/page/11/index.html","010695569f4c39c3b76c4614ea684225"],["/page/12/index.html","ca1a25f3a59d14eae2fb91afe434e4e3"],["/page/13/index.html","1dd9fb7a421804823d7a5f0fbfdd9b9c"],["/page/14/index.html","fb7f69d8957f7a96917f3a09c6408b2d"],["/page/15/index.html","fbdbb5a959543d77eded442ed0285556"],["/page/16/index.html","2ff3f069d893fa802b10aac59ec20faf"],["/page/17/index.html","a5f9eaca1d826bcaa4fbfde2bc82f526"],["/page/18/index.html","580da1558432731f9f82c88f0fef639f"],["/page/2/index.html","c2c10107fcefbf4da66733591d43b6be"],["/page/3/index.html","a9c569786e53f38160bb06e5b199c77d"],["/page/4/index.html","5228dc1de86ebfa74d6de82b2fba4674"],["/page/5/index.html","5906ba838a8c0101602817c3f2ddcd96"],["/page/6/index.html","f03c1eb76e5d66c911f776daf45e17bb"],["/page/7/index.html","b3232f85069b3842c7eac04c121d8ed7"],["/page/8/index.html","7bfe1400204453adbe9e1fb1101e7bf5"],["/page/9/index.html","2aa8f1f51930a4040ed78e5876fea8cb"],["/schedule/index.html","d3e2555eb767f43c9ab0684d4a48ffaa"],["/storyAppPrivacy/index.html","7d7204bac0f68ca3605f6fb6a5c279e9"],["/sw-register.js","2054a974af9c2e1b3cad7017bfd20cc9"],["/swift 专题：函数/index.html","0249e3b4653fc75dd0e6c72a1164b348"],["/swift 专题：闭包/index.html","750756c5a4160c380ebbd0fa2b4ad8e6"],["/tags/Advanced-Classes/index.html","4653480f30e6f7b6d8a184e31d350bce"],["/tags/Advanced-Swift/index.html","49b8b4e8b4f511309971cc61a1da7a9c"],["/tags/Advanced-Swift/page/2/index.html","09befa6b3ac7e794fcb2341ea19d5019"],["/tags/App-Architecture/index.html","a0bf79d7f2365ef4075a3e03a55fbeff"],["/tags/Array/index.html","4a8ce64ad2aa255e8cef8e8e20104277"],["/tags/Arrays-Dictionaries-Sets/index.html","c8f04eacef1474cd8c0fc5cb709b1f22"],["/tags/Authentication/index.html","18dd849b71700cd17dd2fc82a67f82cc"],["/tags/Build-in-Collections/index.html","5b003d1eb15ba269a353914b6eba8f8a"],["/tags/Building-Your-Own-Types/index.html","6aa24538b2eacf5e33878327b2bd2241"],["/tags/CMS/index.html","bc4256aa34a7b21989ab720f07706f78"],["/tags/Classes/index.html","8fe4001373d54798c5f86b90572e53a9"],["/tags/CocoaPods/index.html","6371fb112595ae6fcc4fb0b6b19b26cc"],["/tags/Codable-protocol/index.html","9155dc810ecf93f9948a6ecb51641d97"],["/tags/Collection-Iteration-with-Closures/index.html","f523fa32002c2a44b92005ad2935a497"],["/tags/Collection-Protocols/index.html","24b05a0147e974c833a86768c853051f"],["/tags/Collection-Types/index.html","365c030707f7682d61e063d751c93229"],["/tags/Collection/index.html","231175a1dc598e623b6b1e1615752541"],["/tags/Collections/index.html","b1a08db5024b2df8c54577dfceebabb6"],["/tags/Combine-framework/index.html","20baf78f262db65df0ddb4f150a7710c"],["/tags/Combine/index.html","483195b1cb4f2f0def51ad48b8be421c"],["/tags/Dependency-Injection/index.html","dc3b0cfbf9c454d8728bc6031bc467e5"],["/tags/Encoding-Decoding-Types/index.html","3f9b233ba2e089bef638c35f261c1839"],["/tags/Encoding-and-Decoding/index.html","9dfbe26f559042b2adb7cbe3dc480fb9"],["/tags/Enumerations/index.html","0907f2484ee984b9f9cd748379dd0f49"],["/tags/Enums/index.html","37ae2a85993f6636c35b9f7f8c62d3fa"],["/tags/Error-Handling/index.html","c4dd8e10d298174d20d0687a3d3639b9"],["/tags/Functions/index.html","e58d62aa69dd459ab604c05d615833f6"],["/tags/GRDB/index.html","9d263264d6c5f3f6445cf9d6fc9403e9"],["/tags/Generics/index.html","53ea6ef3f750ebbebc7b03a51913971b"],["/tags/Go/index.html","ea00bf1a1d7aa7d7051b657e5a7ef882"],["/tags/Grand-Central-Dispatch/index.html","725c0ada1988717be25a71766e5e92da"],["/tags/Hello-Vapor/index.html","355b332165ae7c94c0939c5c28ee73d4"],["/tags/Homebrew/index.html","48ad5c3bbb60b6f72c4a072919caa8f2"],["/tags/Interoperability/index.html","6d754c43c03801aa180179f8772aa232"],["/tags/Introduction/index.html","2880865bf118353b5df1d7ce17e7054f"],["/tags/Leaf/index.html","a235ba18133beb4898cfe3204baaba5b"],["/tags/Linux/index.html","e598af3a878a91ee1f56d6b9bb7f3ace"],["/tags/MAC/index.html","847fea3d98aabd2a230baa0dbdf598c7"],["/tags/Methods/index.html","80eb9a8930223ee7ce93405e8d80ff0e"],["/tags/Modules-And-Hooks/index.html","ede3a380420a6edd70b518a20f3edb70"],["/tags/MySQL/index.html","732e02692e363c5c18dc3b350b9de4e0"],["/tags/Optionals/index.html","157450dd24460c448142e432def700f2"],["/tags/Promises/index.html","fb5940f2d1521c61a430d84d366d9131"],["/tags/Properties/index.html","2a55fa4fff1547ddc8b13009bb4cb5e3"],["/tags/Protobuf/index.html","b6fa5c7edaa5949c74ce6bf3551d10b7"],["/tags/Protocols/index.html","af47d5e9d093d60a5a84b6a4a7fcbfba"],["/tags/Result-Type/index.html","65d2c6f1315ba5ec2e6a56a5791c6edb"],["/tags/RxSwift/index.html","fc51309e45380f66e6de9bbbbe22d176"],["/tags/Server/index.html","a3880a421edad36b4209bebefd90b472"],["/tags/Session/index.html","6708bc671bfdb3dd09b22c63cbc62047"],["/tags/Sqlite/index.html","1d7a2027899ba378128d740efc761e36"],["/tags/Strings/index.html","67136cb83ad0bae1232eb1cc55e92742"],["/tags/Structs-and-Classes/index.html","cbe0b371da225a9bd22d54740b37f3b0"],["/tags/Structures/index.html","efef41423de7684c7bf7fb0c83b6fa37"],["/tags/Swift-5-0/index.html","d7986466d6439db362839839292f1683"],["/tags/Swift-5-0/page/2/index.html","a3351b6a1bacd96bb51097ceb5a7d26c"],["/tags/Swift-5-0/page/3/index.html","254a01f2ec47d474e012da81ad1c3ef0"],["/tags/Swift-5-0/page/4/index.html","130cfa63abce84ad137c33664c5c8828"],["/tags/Swift-5-0/page/5/index.html","9e5c60f6e653183efe38105dbf4aeee2"],["/tags/Swift-Apprentice/index.html","1d5d03f4882c1c75beb0ca98aabf40a6"],["/tags/Swift-Apprentice/page/2/index.html","b9f3ab523bbc1e7c0be8e933341eee98"],["/tags/Swift-Apprentice/page/3/index.html","0b0ad8c4bab63934d8f271c4aae777ef"],["/tags/Swift-Package-Manager/index.html","0b5916c79fc77c8a814c5134438d4003"],["/tags/Swift-源码阅读/index.html","a96808b50905bfb5432f7e43c423d572"],["/tags/Swift/index.html","a980e25bc4ee486bf51b42e225850797"],["/tags/Swift/page/10/index.html","2d93970618aa8b5c6b41377f0f947bb3"],["/tags/Swift/page/11/index.html","f2d0755774b4498d8e80f223e6417132"],["/tags/Swift/page/12/index.html","c14060ef67473e29221f8abd25b6f8fe"],["/tags/Swift/page/13/index.html","e721cb9939335a77eac3ac1966c74efd"],["/tags/Swift/page/14/index.html","a528ea5a0c6bced89dd942dde635fbc2"],["/tags/Swift/page/2/index.html","6c1f5f24aaabbc04ad489eab2e75e3b5"],["/tags/Swift/page/3/index.html","612c0dc6c3120d710833398e0ba453ba"],["/tags/Swift/page/4/index.html","540edb10a998417a2e33c183aaa87bad"],["/tags/Swift/page/5/index.html","77d0ecd232436af5f34e167767e34dd0"],["/tags/Swift/page/6/index.html","261341cf52982ac323738b3660184e51"],["/tags/Swift/page/7/index.html","c6fbc19f174f9a6317747a4c42e988f7"],["/tags/Swift/page/8/index.html","b6a4cd214e7a16eec6f489f82bb34daf"],["/tags/Swift/page/9/index.html","be86d1fee79ed9e40a39f400890d4f39"],["/tags/SwiftLint/index.html","4c47f90bf1a0789e67797439bd014bc3"],["/tags/SwiftUI/index.html","8ee67114d7ddf6a6eb781959cf83515e"],["/tags/UICollectionView/index.html","c6f2a771407334cd744d3ad8f93fc5af"],["/tags/UIColor/index.html","737c07c2d3261ee0d58b16e78633b6cd"],["/tags/UIImagePickerController/index.html","923877717ca36f14fb1b242a57a8926c"],["/tags/UIKit/index.html","6aa159904847b3589e99a527df560e7e"],["/tags/UIKit/page/2/index.html","ce4e421ea1cddcfd753a16bb2e11399e"],["/tags/UIKit/page/3/index.html","357268ea29b1b6f6272471e2bbf35c0f"],["/tags/UIKit/page/4/index.html","ac78e4f400deb15b91182c58ff59431d"],["/tags/UIKit/page/5/index.html","e012aa89560a61a4a7dad2407b5280c8"],["/tags/UITableView/index.html","2be9acaec5d7a7580db6c018b272b602"],["/tags/Ubuntu/index.html","4ca538e5e853a935a438357de143035a"],["/tags/Uniquely-identifying-views/index.html","8fb866cb939880d32191245351cfc689"],["/tags/VIPER/index.html","e19a52b7c3b095b06b43b013450b19b6"],["/tags/VMware/index.html","a8b2f067e313ba57968974ce6b452f42"],["/tags/Vapor-4-0/index.html","f717aa8633f52761a9c947c664f7f337"],["/tags/Vapor-初探/index.html","953784b3228e3e6a95d04087dd4f3c7c"],["/tags/Vim/index.html","11ecff37c61ab46b7c2be0be3e48aa40"],["/tags/WKWebView/index.html","4b65ae4639dabae9c2bd1098268a325e"],["/tags/Xcode/index.html","7792b6f5fa1c5e57663615824523a806"],["/tags/appleOS-Networking/index.html","5b4a839b9e3f8023cf0d67e720568f0e"],["/tags/bugly/index.html","21ea2b4f727ad9022512e787e9ee1372"],["/tags/enum/index.html","d97354080be07b3a42f36b2f71e17dd5"],["/tags/git/index.html","73e1d96c1b7e1e519846cead0d3a1730"],["/tags/hexo/index.html","65645ac1ac7c0cff7fd61a5fb0994f5f"],["/tags/iCloud/index.html","56a2ceb5d69063cce4fb4d5da4616c62"],["/tags/iOS/index.html","9bf7ce8f9253ede1bdd5864d1b0fa72c"],["/tags/iOS/page/10/index.html","d5908f2195b6e5c86005e9adf2c64351"],["/tags/iOS/page/11/index.html","ec4c04e4972eed5158f5bce630884b3e"],["/tags/iOS/page/12/index.html","fde16577e8984abea3111f024c9ee1c8"],["/tags/iOS/page/13/index.html","86e3399d5a3cff25febbe74878e87b30"],["/tags/iOS/page/14/index.html","e063f3318973e4f63c50135560f024c5"],["/tags/iOS/page/2/index.html","44d582003814304be7ca02a3d7810c25"],["/tags/iOS/page/3/index.html","da4c23a08076bb54568aa1cd1d015917"],["/tags/iOS/page/4/index.html","9b0ddcc998ffadae00a91b661ea944a9"],["/tags/iOS/page/5/index.html","9021756acf691b24b9b59381cdb46dd9"],["/tags/iOS/page/6/index.html","d3c9d71f2601c1bf38f1eb1c19732668"],["/tags/iOS/page/7/index.html","63faa7f0d95b7e72e32b870425f7c7cb"],["/tags/iOS/page/8/index.html","c821d9d403726d68c89393bea82b58d6"],["/tags/iOS/page/9/index.html","e5be319ac5217c313d3b9115b9cf6338"],["/tags/iOS面试题/index.html","b655819a139959f45838038218584485"],["/tags/index.html","4ff84cabb0bf6d0c665a2848569b5c19"],["/tags/interface/index.html","a939cf499cee4823ffb3b4bd1ed46a0c"],["/tags/non-optional/index.html","0329dd1014b231aceeff0b4d3b70c787"],["/tags/package/index.html","ea02c14ed86d951cc35be01ba65eb28a"],["/tags/random/index.html","9fa0710e138812e63269942863ab1071"],["/tags/transition/index.html","4a628d3214eb9b005c274ee501b0bd6d"],["/tags/三方类库/index.html","42823b0d371abbb3bebb40d676fa7c91"],["/tags/依赖注入设计模式/index.html","037ae919632f20da63933ba8837ccea1"],["/tags/值类型和值语义/index.html","696ed3e0da14cd832b5c67207b20841d"],["/tags/内存管理/index.html","4ec88a78c0ee1eadb7c2314289087393"],["/tags/冒烟测试与回归测试/index.html","05e01087490dc3579c3c5a29f92bd450"],["/tags/函数式编程/index.html","eceedf8e4e97d0d098117baf17ba2f93"],["/tags/创建博客数据库/index.html","8a68592bdef46eba0ebbec9909bdf55b"],["/tags/初始化模式/index.html","fb20597ccf50268bf67a56c94323febf"],["/tags/单例模式/index.html","44b8b66d296cfa0a1fe5e7c6d4ccf654"],["/tags/原型设计模式/index.html","93f88d1495783d2fbd86a95b32e110bb"],["/tags/命令设计模式/index.html","5535f01151da247bd2b826d0f4e2e804"],["/tags/基本控制流/index.html","73fe7d176022913e2be711052fd385d0"],["/tags/基础语法/index.html","2e8c1bc556b0b2420cb2e9ba0d75c412"],["/tags/外观设计模式/index.html","3c9b933cc194d12ca63e299154aa7356"],["/tags/委托设计模式/index.html","83e77c795f703d598cada812d144fd41"],["/tags/子类化样式/index.html","7891a53d1165fa83194410c5ee6c2b79"],["/tags/对象池设计模式/index.html","d0d4beb5ebb5844f9076ae546bc5769a"],["/tags/工厂方法设计模式/index.html","280aa108ae97469331bcbed2e4276d5c"],["/tags/工厂模式/index.html","48ecfd05d5e1123d1618d4abb648b2e6"],["/tags/工厂设计模式/index.html","a7faa3d544f87599ecfcd6eced5478ab"],["/tags/开发技巧/index.html","dc5708235956dc863846f3294040575a"],["/tags/开发记录/index.html","c1ab70c9c1f30c3ed4a24455af597ef5"],["/tags/懒加载模式/index.html","c8b9764e563fa5b1d0119d7af4e8161f"],["/tags/抽象工厂设计模式/index.html","8fd27d97792470624595e2d786ac3c07"],["/tags/数据库/index.html","6355b6b5ec4fd340f0b285ee5d7bf3ae"],["/tags/构造函数/index.html","25916b17f2d5688c763afb2949a60bcc"],["/tags/架构设计/index.html","90049f2ec54026f0f8c10d6630ca1115"],["/tags/模块化/index.html","dd16f92f253ebca65a23d4a56da765e1"],["/tags/模式匹配/index.html","d22ba803ee2f1a9e50ef047afef1fa58"],["/tags/环境搭建与验证/index.html","f31306248d7974e9c1e51a427e3999da"],["/tags/生成器模式/index.html","0b58247c1f2b88880b08e30ab8b2e1eb"],["/tags/用户体验/index.html","495cb041a05d57981c9562d9abf95954"],["/tags/用户协议与隐私政策/index.html","4b220df9b51d624de1002a4a5271cd4d"],["/tags/类型与操作/index.html","ecb4276b461193dd758b2c6930eb3d2a"],["/tags/组件化/index.html","410954000e433b1b3eb9533070aa3672"],["/tags/自动化布局/index.html","cfb54489000fc6557a356cdc1886fd60"],["/tags/自定义UIView/index.html","243b2c983faa65c07fa9212cee5a4d22"],["/tags/自定义转场/index.html","21a7bbcf3d30fbd84fb4261bdba6cc55"],["/tags/自适应布局/index.html","4c9793547fa554e9f4835922ae67ca6e"],["/tags/表达式、变量和常量/index.html","c2a1c8512297678e78a09c050391f238"],["/tags/设计模式/index.html","5d6e293cc4fa35018e14b18cbb9bbed5"],["/tags/设计模式/page/2/index.html","e5c939bcdd3e53ba19ead32fe48593b1"],["/tags/设计模式/page/3/index.html","10c948ddf961c75fcc1c9bce5107ca67"],["/tags/访问控制和代码组织/index.html","4d75b8f64d0b74bf264d0704186c2aeb"],["/tags/运算符，下标和键路径/index.html","e3b0cdd706a46a9e3322195e32f8fef1"],["/tags/迭代器设计模式/index.html","af82061163e9ac762602cb3d07394020"],["/tags/适配器设计模式/index.html","5b401d35786ff73573ab875b04e72661"],["/tags/逆向/index.html","825e72d89c67b6f0d8e2b5bfb1cdc184"],["/tags/错误处理/index.html","86f13dc5797e7ff6314cd4a7efe1a472"],["/tags/静态工厂方法/index.html","efd74f4d70a566479d6e6add144af85c"],["/tags/面向协议编程-OOP/index.html","c5ac4d48e286775c200b011ed36be9fe"],["/tags/高级主题/index.html","f4a2377d0ac421af12ccb60c32659132"],["/tags/高级协议和泛型/index.html","019a9f2a6c00d094ad343fa6d2d6a6b3"],["/tags/高级控制流/index.html","2b9d0ed4a6053a5abda2a044eccb4507"],["/xcode 常用的快捷键/index.html","106bc8f5e735e311b130c3e267f94024"],["/为iOS应用构建输入表单/index.html","d785807b14c7777f6a1f6b38092f50b4"],["/产品开发的幕后花絮/index.html","e51dd910315c3fc904287323bb008089"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","85f5e75ca888987cc81552314c3e4942"],["/冒烟测试与回归测试/index.html","dc307a62cb299086fc0f38376cdf343f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","83f15cb798a971982e03478fee4e3871"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","6aa110536dba91c28df426d4c0c74237"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","c8bed1634fcde0d687c640fb7ef75e94"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4ce9ad78365628c842e5be9007aaf228"],["/在Swift中创建自定义集合/index.html","a109a19e74fe5522d1c0d359ce0e2eb6"],["/在Swift中处理非可选选项/index.html","46b7c8fcee15f6cf98a752641627c7d3"],["/在Swift中生成随机数/index.html","012bfe8cb10be63cd278852ed7a4884d"],["/在Swift中重构单例模式用法/index.html","63351f3e2a7b7150fc3270871d1aea10"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","33e724439328d1f69ab7aad3eb87f7b4"],["/如何为VIPER编写服务？/index.html","236332d8b032be23acdd5d7a20f4187a"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","98be61d4d3beb7a650070a24adabbf48"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","cbd0ddceac92f80d47c00a69a36d2b09"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","884fef469d193de6cfa2d6078117fcd2"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f89490d422d5cfeb0071469ea8551a45"],["/掌握VIPER架构/index.html","8c9b2f286f2f49a05f747e5f82fdb6ac"],["/揭秘 WordPress Hook 系统/index.html","f39301c33c6fb5e86de8db90a55da80b"],["/比较工厂设计模式/index.html","02f9794eb70d45145f6f3fac9d6eab8f"],["/深入了解Swift中的Grand Central Dispatch/index.html","31f4ca73caf72a2654f0b52412502d42"],["/深入研究Swift框架/index.html","83bbbb2a031a78cf090641b1087b413a"],["/组件化插件化与模块化/index.html","886fec5fcebc5d28df2ab9088a8f9c58"],["/组件设计与SDK开发基本规范/index.html","4cef17599073b61232527e6a837c74c5"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e62909a3dfc6b05eb74d5991580c1378"],["/选择Swift而不是Objective-C的5个理由/index.html","a32f41016415a745db75624fb4bef71c"]];
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
