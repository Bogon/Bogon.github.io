/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","99a0cfdcd8625ab2bbb96e6764f1d232"],["/2020年iOS面试题总结(三)/index.html","19523625c4d827da807bfd45ccf38335"],["/2020年iOS面试题总结(二)/index.html","d6a94deb9e47dcf0e8c2633cb35b7746"],["/Advanced Swift系列(一): Swift 简介/index.html","eeeab0b8e9050b38b710a6ccff4a4cdd"],["/Advanced Swift系列(七): Strings/index.html","33ee5e08272e9a4f11682d6e4bf04fcf"],["/Advanced Swift系列(三):  Optionals/index.html","6ce70795dee0b838ce11e9d1e47fd131"],["/Advanced Swift系列(九): Protocols/index.html","d631132342fa0b2d134193ea76c962ac"],["/Advanced Swift系列(二): Build-in Collections/index.html","0830b9ef46067c3717aafe316751d1ea"],["/Advanced Swift系列(五): Structs and Classes/index.html","4aedc4365a99b87e705a3422f3fdfa84"],["/Advanced Swift系列(八): Generics/index.html","5c4b78b5a690a7421a3a04a6a037ff5c"],["/Advanced Swift系列(六):  Enums/index.html","5200154614cd930c5fb903f1666b0796"],["/Advanced Swift系列(十): Collection Protocols/index.html","9e1debdf2dc8814588556801033e600f"],["/Advanced Swift系列(十一): Error Handling/index.html","30d3a22c84fbfaa21f32b35cef7dfca1"],["/Advanced Swift系列(十三): Interoperability/index.html","19aa579612f95c662164f07180aa512e"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d0c6e264ee71849f01d04ae037c183c7"],["/Advanced Swift系列(四):  Functions/index.html","1f42c28555f33a338118fafd1b6c1669"],["/App Architecture系列(一):  简介/index.html","6db985ebbca102cafd47c819ec20af62"],["/CocoaPods 设定版本说明/index.html","8bd3446570e1a9dafc42fd120a05c6e5"],["/Functional Swift 初探/index.html","8759faf5fcdefb720d92875e4831f1bb"],["/Git 使用小技巧/index.html","89abfc4756cf296fe30c6c95cfce8886"],["/Go Protobuf 初探/index.html","e1996c69bb96852a5f9b3aea900ad6fc"],["/Go mysql Tips/index.html","1f4795d56d7376fd4f58c3634f2d0fdb"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","3dfdefd3b966eba30ca6bd6b033471af"],["/Go 入门篇：2、Go 实效编程/index.html","46caa7375b7da0e9cd528f219518b18b"],["/Go 入门篇：3、Go 重要概念/index.html","b775c2f03da551035b4b8a04a9bda326"],["/Go 基本语法初探(一)/index.html","2756b6f1964c91e8aa491288337b1d51"],["/Linux VIM 命令及操作小结/index.html","4a7609ef405488b6ced69124585e28c6"],["/MySQL Tips/index.html","2d4e1bb3fbe9b2cd3a357c84963778dc"],["/MySQL 基本操作/index.html","409a70d3ee297448599e096e3a0f8ed0"],["/MySQL-列类型和数据完整性/index.html","9047eb7d8ac144c96db8a1c491cdc578"],["/MySQL-数据库设计和查询语句/index.html","32c5e6795a022fff699ac79be80c2999"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","97f4644115f94dd618d1e68dc3ed6bf0"],["/NSCODER和SWIFT初始化/index.html","cdea1e9391a28c8824adc3ec758b1896"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","6a0c7a8fde867428590501a8d305ea93"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","004cefc081210acb21caeaa5f2dce9ad"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","a7b577a0f20a0c80216624fe17e7a4f1"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","8cf0da4a81848a48f557d5e28e031dae"],["/Sqlite 使用Tips/index.html","bf0d712f1bb344a62f084e7b1bc5ad35"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","acd915eac15ea6b87d76eb4b51286e5e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","992398be5a448964334bffeb8ffdd3bd"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","ae1951dcf1e5503417bf9f527e784c83"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ebeb1d47445da29fa7af283e7a56aacb"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","65591baf54c66f59c2dafdde2a4b3522"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f4cae543a9acab3bff286a4a75ec43b8"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d3bd283a1e1825ff0b2f402d768def01"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","b39e50211bb9cd518eb3e5466c015f72"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","241b36288b53615c74e844b4d2e378b5"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cb10dd7718cb474c68d15388db24785e"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","bf1ce22ba8be409d53855ec0e62b74b9"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","e205f04146a69eb9be706ddacb015684"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8650a5396e3383e22a6574817c54054f"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","7ac850daa0a2eda9ba427ba273744e74"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","9b734ffdb3899f8d73a9d12a3296157b"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","d6898dafb14402ae2d35100e0fb568ce"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","daa04e0d90696ee0e9494944379d98e1"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9055a3668048e9bc8ef287d8ec2ad273"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","5755298669b8b252c2d04677eb95335e"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","78967a4993ca162de53b1201ba3fb1ab"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","0ae61ba35b28af7e960a9e224cb7382b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","23c674982c1a8e2e5499a9203c2ff694"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","0bc1c0590411811cc621da4c50c45157"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","936285a9ba4a1fdbe6ae69d152eda30f"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","22ca1f61146c58c82a3e6c7e6d8353a9"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","e703bce9a31013537c4949343b1e9353"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","2a89b2d0356a5e130e22a797302282c5"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","d1e83f6f5234b765e8f6a5a513a25db5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","39eddbbe7efac8a5385a1f0a9720991d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","acaf97afe40489bf6082fbbbeba0ea98"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","070eddb87a616064c6ef2cb1c06679da"],["/Swift CompactMap vs flatMap：差异说明/index.html","e1fecc445b19056174284fd563a9cb22"],["/Swift Grand Central Dispatch 深入实践/index.html","449efc7a34254ccc1635a5cb629020e2"],["/Swift Lazy属性初始化/index.html","8f6c36626c13fde9425f0de2c141424f"],["/Swift Promises 初体验/index.html","8e0f0fd4b5112f9293c36ebe633e4eda"],["/Swift Promises 探究/index.html","c8c4de9fbc6135f1282956e4e0c3768e"],["/Swift UICollectionView使用指南/index.html","5bc7dea31b3c52ec4375915d43bb8f7b"],["/Swift URLSession && Combine framework/index.html","31aed2176196bdfdad8d3e378168f861"],["/Swift tips/index.html","a01dcb59151a11882a542bdee07b5b38"],["/Swift 三方库：GRDB 使用指北/index.html","a429e9838173eaf4af4d14f4c398e007"],["/Swift 唯一识别的视图/index.html","04efd77359784629390fc5ca7cd06c61"],["/Swift 如何学习现代UIKit？/index.html","5586e2d19f6eea0b8916db24aa927cfc"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","242b318b57dd20e21e8477590316ddc9"],["/Swift 用 compactMap 替换 flatMap/index.html","d0eb435be9136eb5dd6d1328a41334c0"],["/Swift 选择和播放视频/index.html","2b02c860481b1ddcc68a3f7d8f69ada0"],["/SwiftUI 系列(一)：1、 简介/index.html","e04b48b7de6eb34334fd6821e91e2bb1"],["/Swift中UIColor最佳实践/index.html","ed0c0115fd01e2b3d8318b971799258c"],["/Swift中快速简单的工厂设计模式/index.html","c6ad8e2b115cdbec3c08fc7776791cc4"],["/Swift中构造函数与静态工厂方法的比较/index.html","586ebc06bc2c9c67f3977958477e8d67"],["/Swift中的UITableView教程/index.html","982df4d03f6a1c84efaa24e3d1472a6f"],["/Swift中的懒加载模式/index.html","4fd430dd1e2590e2e451d0e17570e2e6"],["/Swift中的模块和挂钩/index.html","3584b6fc854966b2e36d17e88b308a84"],["/Swift使用布局锚点添加约束/index.html","ff0b4574284d35c43a0ff3f7218dcff7"],["/Swift依赖注入设计模式/index.html","e4f4081b22f8850927872ad15d18adda"],["/Swift关于Dependency Injection (DI)/index.html","254b952e45e0ab491d4ee3d6f590f436"],["/Swift初始化模式/index.html","80abcb743464d3c3d5dc72fd0744a8d5"],["/Swift单例模式/index.html","8e9f342cadc204721bc03396d198135c"],["/Swift原型设计模式/index.html","84d52ee8d1f1ce2beb7b76fcb3986f36"],["/Swift命令设计模式/index.html","7d670d590977d52fa82698f0e55b65ea"],["/Swift外观设计模式/index.html","eca8fa70ac46ea1c770de6984a497173"],["/Swift委托设计模式/index.html","7c2433a93fac2d98a46d3a99552d8413"],["/Swift对象池设计模式/index.html","465a81bc71cdd6980b6d349513e119e8"],["/Swift工厂方法设计模式/index.html","8dcdfc40ae9b36830b00c29988c6f11b"],["/Swift带闭包的懒惰初始化/index.html","abe57b0df3d6047996d99d6c8bd37df3"],["/Swift抽象工厂设计模式/index.html","49f9f6d758b22f45fa9fd16f2c53e5c6"],["/Swift掌握iOS自动布局锚点/index.html","ffefdc4b933602132065ad8dd3f771bf"],["/Swift支持旋转的自适应单元格/index.html","66b7c8c2c62e00d3b51f7b1744c9e29f"],["/Swift枚举值/index.html","e4d2fd3c5e44d926833a45963cb5e610"],["/Swift生成器模式/index.html","8a5e5beffbbe01b9d34a7d1610da3f43"],["/Swift结合Xib文件自定义UIView/index.html","10a09ca02c80427174b235d7878ceaf0"],["/Swift编写的20个iOS库(一)/index.html","b370c702fb33c64596305cec42b59a0f"],["/Swift迭代器设计模式/index.html","c0d1ba356debb7b9c6a648a3075d2698"],["/Swift适配器设计模式/index.html","43f57e3a80f63a0c193a0ebb57710f2e"],["/Swift静态工厂设计模式/index.html","3b1b48e0b5020b0605c50aee8c9aefec"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","6e9e0d6bada2234fa1c65dccd9cda73c"],["/UICollectionView data source and delegates/index.html","6f9a5e0ee87693d5483f5b9198d57b1b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","8f86137fe1b81622f91081f3e36e2a5c"],["/UIKit初始化模式/index.html","0e1c750d7ed134e84d9c262482d430f5"],["/Ubuntu18.04替换国内源/index.html","d60dbbb52aaee7307d386b94b8a03d59"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","22e6d9804e2452abbd24ce6108aa6e88"],["/Vapor系列 (一) :  Vapor 初探/index.html","f98a76f42ec5dc7e25c03b4276cee1cb"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","81d45c1dcc46cf6488d56e9414712504"],["/Vapor系列 (二) :  Hello Vapor！/index.html","a61deefb161b9d49aa1c87bd2e61d112"],["/Vapor系列 (五) :  使用session进行authentication/index.html","ea91812f47933d590ad8bddf742eefd5"],["/Vapor系列 (四) :  创建博客数据库/index.html","668e1ae217a7c773eaf93abca96107ca"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3049768654eb72e70496324fea87b9f3"],["/WKWebView与Native交互注意事项/index.html","83fc02c3b94139bb568ed4d333397b9a"],["/Xcode扩展/index.html","f48de0c8c14a3f60169c3776184372da"],["/about/index.html","20f72182853939a6f249090517288dcb"],["/appleOS的Networking示例/index.html","6dae902f6b4f0fe71a057a54234667db"],["/archives/2020/03/index.html","862d9fdf22d356591143e2dc3b98f2c1"],["/archives/2020/04/index.html","704ac5e8c4649dfb3205a81ad0566868"],["/archives/2020/04/page/2/index.html","20f74dfbb9da8387d838ebd42569b242"],["/archives/2020/04/page/3/index.html","de35d9cbb469f6aeb86a2db82df21500"],["/archives/2020/04/page/4/index.html","7c7b59cbf92ff161a60048e932ac6f86"],["/archives/2020/04/page/5/index.html","18c95c102011dd51b06332ef7d6641a9"],["/archives/2020/04/page/6/index.html","dd35170a66b7bcb1accccdce3b44ced8"],["/archives/2020/04/page/7/index.html","686b8cedc8cdd84c30ddd97ce44dabdd"],["/archives/2020/04/page/8/index.html","7c7ac9ef269156522687fc2a31df2d64"],["/archives/2020/05/index.html","32b757cbe067c0c4753510792d5ef592"],["/archives/2020/05/page/2/index.html","00f58c2811d2336453d84d6ecdbcb2e4"],["/archives/2020/05/page/3/index.html","959635b59a072d7b25a3babe238000f1"],["/archives/2020/05/page/4/index.html","dbecbfb9dec2675924ba9a104b51dee5"],["/archives/2020/05/page/5/index.html","da6353184427eed2f3354070b07a422c"],["/archives/2020/06/index.html","32a7651e5ea06addb3441b04d96ac06e"],["/archives/2020/06/page/2/index.html","1128e60d4bb0de0389c37bfd846404bc"],["/archives/2020/08/index.html","64dbf8cc51ba443cfc73f24e17b34df1"],["/archives/2020/09/index.html","8e3b38f84bf8e4eaeeb34551e75a57bd"],["/archives/2020/10/index.html","5839047ce7e740e43a08c4f870880d35"],["/archives/2020/11/index.html","0e18ceb161c326986faaadcea2617a00"],["/archives/2020/12/index.html","a629f80a0228ccd1eb99887840d5513b"],["/archives/2020/index.html","f047c34605e278ec615e9c43e07e3829"],["/archives/2020/page/10/index.html","a8cee7ee0192631f8aae2acdef361089"],["/archives/2020/page/11/index.html","c64c8c27940deee2dd306992eceb035b"],["/archives/2020/page/12/index.html","9b804f9fa8484735e4d48acf6c8d9eb2"],["/archives/2020/page/13/index.html","6a8256e0686411a505ff7f58031807bc"],["/archives/2020/page/14/index.html","f59eca72de97a1d909b0d1a7211c97b3"],["/archives/2020/page/15/index.html","fa8129f137999d77f99a5864192fbcf8"],["/archives/2020/page/2/index.html","97f98d3d3520858aa5a247f899498aae"],["/archives/2020/page/3/index.html","a707853ef696430fdbdfd73092660689"],["/archives/2020/page/4/index.html","93e96aab4cc657fe38103edcffbb23ae"],["/archives/2020/page/5/index.html","2009e98a463bf01565d0409545f28181"],["/archives/2020/page/6/index.html","14373edf26a833ed66291d2ebd57bcfc"],["/archives/2020/page/7/index.html","5c5c7f014a6d92302653f2b1eb2fef5b"],["/archives/2020/page/8/index.html","69a6c4d5d9f93a586b30780672421c6e"],["/archives/2020/page/9/index.html","1a19c92a21cd3200a8365f94dfef2743"],["/archives/2021/03/index.html","8ceaf245d981b0b7caffce4ae779f5ab"],["/archives/2021/04/index.html","c3c4cb350f96da78865806828848da96"],["/archives/2021/05/index.html","3fccbd0d510d0c9841e656f943002a5b"],["/archives/2021/06/index.html","dc1b354935f6c509b08006b538d20071"],["/archives/2021/07/index.html","a3f8f8529b07ceb75b92fe490843aba1"],["/archives/2021/08/index.html","2c8f6f3d7debcb90befa69f6c96e5452"],["/archives/2021/09/index.html","5988019e8fcb8005fb340f2ccbbd5ccd"],["/archives/2021/11/index.html","de0c69463841d76e30e899ee2aaf73e9"],["/archives/2021/12/index.html","47d384492ed7815e356e43afd4e4b6a2"],["/archives/2021/index.html","38378f372f906042792dd16937bf1149"],["/archives/2021/page/2/index.html","c5bc04b6e937f24c48115d04b2482ef0"],["/archives/2021/page/3/index.html","ae86bc79462ba3fda13f1649bcdc76fe"],["/archives/2022/03/index.html","500cfa4f42e6eb107077f9185a6f3180"],["/archives/2022/04/index.html","e50483ce7b849a2b3e39c795c89e6a3c"],["/archives/2022/05/index.html","b4208fe11ffb392e9258892b18406cd1"],["/archives/2022/06/index.html","1f7b43928435cf5ff50fa8638c52faca"],["/archives/2022/07/index.html","bb9271506954f606b4e295d1880932c8"],["/archives/2022/index.html","fea4a11265d4f82bcea7c991a46f253a"],["/archives/index.html","1f5596a06ad579f5c3813e49f1b8da4a"],["/archives/page/10/index.html","27e807ae2fb85999c9260a571345e04d"],["/archives/page/11/index.html","a740f726d67a32d42cfa2c472d3b1093"],["/archives/page/12/index.html","ec371a51abbf23b0876eef207b51b926"],["/archives/page/13/index.html","9536121698cd3cd54940177d62b4bd59"],["/archives/page/14/index.html","9d5541d355cb320b8818c98268356965"],["/archives/page/15/index.html","3d315762993bf82082d9e3e4bd9323d8"],["/archives/page/16/index.html","0c9c7f6455eeae85322bc06ce6682472"],["/archives/page/17/index.html","810cdb59542018a39e35211b4dbe2513"],["/archives/page/18/index.html","8988402a0728e5df7b042ca0dd954e8c"],["/archives/page/2/index.html","ed7f8960ac8b53b2d2fe15db112aa973"],["/archives/page/3/index.html","271213f8465a7db4d88ffe3624138d32"],["/archives/page/4/index.html","3dfd49ac3cb323da2406466daf6f5f68"],["/archives/page/5/index.html","368ace396322df37731f9e66cff121ae"],["/archives/page/6/index.html","7a7ed8350d8d6f36ca8e1937c48d0a25"],["/archives/page/7/index.html","e2297809a3a130704c8faee68f533db5"],["/archives/page/8/index.html","e041a726fffe0104135bdaf9a840205b"],["/archives/page/9/index.html","874e2df36165058af2633f731264dd19"],["/bugly 上传dYSM文件小记/index.html","c9a9879780c27ebbd7abbc7becdef222"],["/categories/Advanced-Swift/index.html","49321530aa5ad783a0b6150d21486e37"],["/categories/Advanced-Swift/page/2/index.html","be74c7e30c67b38b737a491cce6570f1"],["/categories/App-Architecture/index.html","9d067cc92b5450a64232917fdf04a51b"],["/categories/Array/index.html","a6d01de21a525019e72937ffd1c62e12"],["/categories/CocoaPods/index.html","a2163a4ed01e2b6ed8793ab4c43e40a8"],["/categories/Codable-protocol/index.html","02e4b9e63765a90030b9b47e9283edf0"],["/categories/Combine-framework/index.html","5eda25f88ad6cb458f79c572d62bbba3"],["/categories/Combine/index.html","bf247a30a8992dbed852fd94c9c58740"],["/categories/GRDB/index.html","b132b48e3dd620d439447992fc959df0"],["/categories/Go-入门篇/index.html","afb6ed1606042147a82f3f703c5bb612"],["/categories/Grand-Central-Dispatch/index.html","fcc2902ea18d87a81e04482592cff389"],["/categories/Homebrew/index.html","b09cfb3ced3f1b20b3ef7fee81b6199c"],["/categories/Linux/index.html","560ec54c3956a056911805beffbd14c4"],["/categories/MySQL/index.html","b0e6646ac955d282e742c7bc652b17c5"],["/categories/Promises/index.html","0313b79d684694018b9e1a495765bffa"],["/categories/Protobuf/index.html","499be9e6b94094b2839e31f07b5c0fd7"],["/categories/Result-Type/index.html","fdcfd6781b867e2f220515b216f0e4a4"],["/categories/RxSwift/index.html","5e894a187cc240226678bc1d5737aed9"],["/categories/Server/index.html","5e11a9dda4b70e40cd10f36ddf75899d"],["/categories/Sqlite/index.html","b18eb8f197a8bd7f1aa71bafc2c324e6"],["/categories/Swift-Apprentice/index.html","d15e45ed53f0175f302317bd7521cffd"],["/categories/Swift-Apprentice/page/2/index.html","551341b34cf195be6d28014c2973d224"],["/categories/Swift-Apprentice/page/3/index.html","1ba8897339d04388b9ca2ff2a479a656"],["/categories/Swift-源码阅读/index.html","f1f2589e81b3ecd1f78d92ac93482e5e"],["/categories/Swift/index.html","eb23745206b3aba19d08a4b7c5896e12"],["/categories/Swift/page/10/index.html","66ada0949c1f9812884bd13c734b0ab9"],["/categories/Swift/page/11/index.html","678212e16e07fbf76d2aa47787d94455"],["/categories/Swift/page/12/index.html","6c71d70bd027c222c760242079398207"],["/categories/Swift/page/13/index.html","e7b615ca8b97ef68c84fff35509b2eed"],["/categories/Swift/page/14/index.html","9ef54bf0ba7d7662579d73c9271a0678"],["/categories/Swift/page/2/index.html","2c8b8e083d2a9e614df1c4223f66d62a"],["/categories/Swift/page/3/index.html","7155fb37e2554deb593d988d7afa381e"],["/categories/Swift/page/4/index.html","081e6e119cc07ccfa11fd75f76c927bb"],["/categories/Swift/page/5/index.html","b01446a369409d79dfbc2a8931deedaf"],["/categories/Swift/page/6/index.html","843bca12533c7532a3c510773e155f30"],["/categories/Swift/page/7/index.html","1c435f6af9a6471c7fb51b7ad03b5629"],["/categories/Swift/page/8/index.html","61810e874e3871fba442700175535056"],["/categories/Swift/page/9/index.html","b4a5f80cc972e4f1841f5222c4a95f98"],["/categories/Swift5-2/index.html","55a6f33d391b7cee95b625678fb9d385"],["/categories/SwiftLint/index.html","fd95ee2d73119e795c5b9dde5764a018"],["/categories/SwiftUI/index.html","e64c0f1546bc0bb3be9dba1001acc412"],["/categories/UICollectionView/index.html","a2e72a9c59e7202a341a405f28b9511c"],["/categories/UIImagePickerController/index.html","9c5bc425f9858c3a9de657c5f97e46db"],["/categories/UIKit/index.html","427153de6ca1259db2aae8c54bf7cfe6"],["/categories/UIKit/page/2/index.html","c4ef23355a7aee71d0c28d28f19d04e1"],["/categories/UIKit/page/3/index.html","502139433e5bb8fd4edeccfcb653434e"],["/categories/UIKit/page/4/index.html","747bda879f0cc516936a27437261364a"],["/categories/UIKit/page/5/index.html","f2e849020e70f09929751d528eedce7a"],["/categories/UITableView/index.html","549f3096396be2181a936a658a9809fb"],["/categories/Ubuntu18-04/index.html","95439a7779d76e8cb66a355f10bcdf75"],["/categories/Ubuntu软件源/index.html","2414b6509133a7d3af3fb3bd48c60d76"],["/categories/Uniquely-identifying-views/index.html","0429db3062cc5b7a5bb2e120e3c86f46"],["/categories/VIPER/index.html","72d8388aa7372f2ef8ec990c5d0f11ce"],["/categories/Vapor-4-0/index.html","487a2fa8e91fa0a538445fd21c3c1080"],["/categories/Vapor4-0/index.html","60ecc7471d0cb8dd6bfb9a846334b3e4"],["/categories/Vim/index.html","88fc787ebab15ccc1f4f9a6903699d5d"],["/categories/WKWebView/index.html","51222d6a8da052513ee5d314dabff1c8"],["/categories/Xcode/index.html","2c950747a95237a06aad7c32f3d48730"],["/categories/appleOS-Networking/index.html","a615b38618196681c7a94223732f930f"],["/categories/bugly/index.html","0fe541c65f9773e35610b48e8b894d6d"],["/categories/enum/index.html","2b7d04a1b7915ab9e901409c376d30b1"],["/categories/git/index.html","4087141e35e14d940944a8297bb523fc"],["/categories/go/MySQL/index.html","73270d6f447dba6c3773f4b75034249a"],["/categories/go/index.html","fe9c1154aec80d6c40d20aa762fcbfce"],["/categories/go/interface/index.html","42b59b81ca5c66444423ff4a3b1c4ee1"],["/categories/hexo/index.html","34f28e108b234fe8fced4bc253deed04"],["/categories/iCloud/index.html","6473e7d8b3bbc016b82eb8d1b801122d"],["/categories/iOS/index.html","7ffc496ed3fc22202ecc9cba9005487d"],["/categories/iOS/page/10/index.html","062b5ab3026e600732f795f16ae9f383"],["/categories/iOS/page/11/index.html","ed461c7353c500c9f5c1cc85bdbe5927"],["/categories/iOS/page/12/index.html","eaaf8450746936b70b5cac2bac647427"],["/categories/iOS/page/13/index.html","771776f1ab2c9013c34e7d28739e74ca"],["/categories/iOS/page/14/index.html","28d10b9fdcf65d852ff89a97c627bbf7"],["/categories/iOS/page/2/index.html","892eb00d9ded6423790298f67bb72c1a"],["/categories/iOS/page/3/index.html","6f37d79ef23c3f1e90b415fe81f1354e"],["/categories/iOS/page/4/index.html","4f49b7e2d38cc9ea9f0ccace3959e022"],["/categories/iOS/page/5/index.html","0e1514acc3e376299d408f35bf9c0d10"],["/categories/iOS/page/6/index.html","ae12693ea627e9cd6db8bd29249ec925"],["/categories/iOS/page/7/index.html","a739ed51d8cd8f68374a4083d84ecbe7"],["/categories/iOS/page/8/index.html","3c1fa596994a3c423f377da51f74f5cd"],["/categories/iOS/page/9/index.html","5e2308a6bfc97af185ba4f827e3defda"],["/categories/iOS面试题/index.html","f2a7c57b75f0af1db69a981846a12469"],["/categories/index.html","bb84ec0a896e38a8faf7843aedb5e549"],["/categories/random/index.html","1e325a00ba34573322c5ce9c45047744"],["/categories/三方类库/index.html","da5b5ea86ed3e5bb4991797fc3fc759f"],["/categories/函数式编程/index.html","a188f8c22dc12b91136c05701eecaa65"],["/categories/子类化样式/index.html","0e5897bb76d6b4cc6a838709d5884664"],["/categories/开发技巧/index.html","fc879653d869cf9a1746a03dd7c1c1cd"],["/categories/开发记录/index.html","8de1e90fe9f2e65961d4271159544ca7"],["/categories/数据库/index.html","a7433bca68438bc48f00227f6910b086"],["/categories/架构设计/index.html","433d2801441411291fea702125c58604"],["/categories/测试/index.html","715786172b6e92780cb5879a6c0e1493"],["/categories/用户体验/index.html","0afb13caf15b01971f5b5a938a17f28a"],["/categories/用户协议与隐私政策/index.html","91b0ee8fd83d0f13a60d141aa9314e45"],["/categories/组件化/SDK/index.html","03327e1e9528456f36c9227162fc7564"],["/categories/组件化/index.html","d1eba64a0520bce273b0e8f4742440f4"],["/categories/组件化/模块化/index.html","4969cb9e465383873981cf015e54c37d"],["/categories/设计模式/index.html","62b2c28aabbe6202f2263427ba09324c"],["/categories/设计模式/page/2/index.html","fc424e2258e74c008840ca1b20bf050b"],["/categories/设计模式/page/3/index.html","facb213d6c20ab7d22911228453ec24b"],["/categories/逆向/index.html","f6a50b3e92b7d786f8ee80460b8070a1"],["/css/main.css","8d5a83a82bca0ff83d84c6c5c15f4eb8"],["/go moudle 导入本地包/index.html","621b17aac53deab70ba7f1d0007fa9a9"],["/go 库专题(一)：gin/index.html","37bf5ce64f98aa1066a4f182a8779fa5"],["/go 每日一问/index.html","92526b2a6ed96c757080b265c46388f6"],["/hexo部署失败/index.html","e45cef7db47a857e3f8e14cc18838e72"],["/iOS 15 适配/index.html","6520d2a603c21de08250eb8081646c6b"],["/iOS VIPER架构深入实践/index.html","d45eab912ae4a6ff3259ccd9a2f09238"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","1600b584b0428361abdba92d6bafec5f"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","e1639bb6d6b9bdb9fdd4ec34f14191b7"],["/iOS 自定义视图，输入表单和错误提示/index.html","efeccb115664498244234676c449bdd9"],["/iOS如何使用iCloud文档？/index.html","08eadb765cb6eefa97b9166362dbd5f3"],["/iOS子类化样式/index.html","f1ecc17558eb307fad707094f15b963c"],["/iOS开发记录<一>/index.html","1972e0e98013507a2cbadd6d036c2b61"],["/iOS自动化布局编程/index.html","fb09071ace507c150400a9cfcc69ea7a"],["/iOS自定义转场(By Swift)/index.html","d2a84e1c28da5be111c87ac2b640a175"],["/iOS项目架构：使用VIPER/index.html","2a83e188b919895dd05bd721c27061af"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","6ce57cb6be8d2bce484d8cd8df3a6e39"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","6c267cbb44f9e1f3bf810e6925b52f1e"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","d684e90e3fb7414058d5706297423d5d"],["/page/10/index.html","250227157591a9aa75acc19ba8b99813"],["/page/11/index.html","943098a21409f2894b6ce371be581b97"],["/page/12/index.html","5a40a31ef00349ff24eb219529b4f113"],["/page/13/index.html","245b27eb0003af62156238d1e568d63c"],["/page/14/index.html","e77d36955ce1ae39bac3439611dd5b40"],["/page/15/index.html","e711a37874836bc2bab330ba5b5addd1"],["/page/16/index.html","9b03350452d616ecbb9da702b65c196e"],["/page/17/index.html","f2ab79f96cca4c5bbc4f06c3b6058c8d"],["/page/18/index.html","085927c4eba7f1ac15cc7b93508fd9a8"],["/page/2/index.html","aa531c85f24ad26c2b4e96446e76718d"],["/page/3/index.html","1044ba63c346bfcb862b63d46430da11"],["/page/4/index.html","2b09944c7b896720fe04c169e8bdd147"],["/page/5/index.html","ba2cbfd0cd7c41b083495b49537682d5"],["/page/6/index.html","8b6f5b090de7586b3f0aa0180bc4dc3d"],["/page/7/index.html","4af7103526ccb635625a4c2209ed9f40"],["/page/8/index.html","7f3b510007a0d1117ccaab080391dd89"],["/page/9/index.html","b1afd64d52376a1639a3e34bf78ceae8"],["/schedule/index.html","3d138d7f3db2d5ebfb2a60e72ed52b12"],["/storyAppPrivacy/index.html","b3598270c8d0ae8f3c6823d27d72ecb2"],["/sw-register.js","5bcc72085b0d312ef86e217219f5dc3a"],["/swift 专题：函数/index.html","e59e190f76f95d5cb2949606db6dfa47"],["/swift 专题：闭包/index.html","8c52f1fd904b0496c2818e55468da187"],["/tags/Advanced-Classes/index.html","84d008fe82ee8c47e00c0e7bf877ea7d"],["/tags/Advanced-Swift/index.html","9f0967ae7228e4c45ffc4313fc0f261f"],["/tags/Advanced-Swift/page/2/index.html","692de38f9a4559bf080c62a167384832"],["/tags/App-Architecture/index.html","f6c3ebf636b2b0c39307e792906497fa"],["/tags/Array/index.html","f1a82cadfcc40a60a2b2e164aedc76e9"],["/tags/Arrays-Dictionaries-Sets/index.html","d75dd3805ca33807d70bba1f39e48375"],["/tags/Authentication/index.html","a12e52a870aae095e91bbe31f570c815"],["/tags/Build-in-Collections/index.html","45f381a0d8e76cd5d779a0e74809e695"],["/tags/Building-Your-Own-Types/index.html","36223b087494d1f42b58fac5669ec0cc"],["/tags/CMS/index.html","28a216ccfefc2ad3c424834d6c5bf0c5"],["/tags/Classes/index.html","27eb75e5427d351224ed335fb41284c3"],["/tags/CocoaPods/index.html","0a64e1d65c6283d5a6d8c34e133b783d"],["/tags/Codable-protocol/index.html","82f14a0e77781d7210aaf550051e444d"],["/tags/Collection-Iteration-with-Closures/index.html","c3c5a2f949732bee7af136cd91691c98"],["/tags/Collection-Protocols/index.html","a2776a8562fae226d0e6182df7c442df"],["/tags/Collection-Types/index.html","f643ce72f2e19b6639d39da908655588"],["/tags/Collection/index.html","de4367d66468828a2654cdb96ba6506f"],["/tags/Collections/index.html","cf52f66dff209dfd6c7a5fe06a93bbcc"],["/tags/Combine-framework/index.html","8b494a9da15e4a4db7a42a0f3d95c859"],["/tags/Combine/index.html","2a973ff429b011a2b83aeb65ceffe1c9"],["/tags/Dependency-Injection/index.html","11c4e3df2170f64d215027214bcb3981"],["/tags/Encoding-Decoding-Types/index.html","ae1a4a7cc553cfbf9b6c323ec4fca91c"],["/tags/Encoding-and-Decoding/index.html","0f914687b26207e8eb5af92d3ebb5f72"],["/tags/Enumerations/index.html","9dceff5e969737422503a69c3b9032d2"],["/tags/Enums/index.html","595759c3ea0e7281f9209a7e388ccd6b"],["/tags/Error-Handling/index.html","6b62fb7f5d044c69c5f3a1be1b81bebc"],["/tags/Functions/index.html","04c7e79023c23044f4af7e4da3d5c4df"],["/tags/GRDB/index.html","3d2b593444b4c6a62e44162f24d2b993"],["/tags/Generics/index.html","d0002132b76178ee96abe45b0c9f72f4"],["/tags/Go/index.html","42914db8ae6696ccf31669e8d4290c61"],["/tags/Grand-Central-Dispatch/index.html","10745af99dbd07301010cee1f1a41553"],["/tags/Hello-Vapor/index.html","6d4be63ea2243f728694a3240dafa28c"],["/tags/Homebrew/index.html","bfc6742b24705b4b3c8a9d273ee81675"],["/tags/Interoperability/index.html","acc3077b255303a9bf0e102a2ee23d1a"],["/tags/Introduction/index.html","061b3f1eb077287949178f952932041f"],["/tags/Leaf/index.html","2b7959ff262f4e48bddbf5a9d4a8600f"],["/tags/Linux/index.html","1f5649f7b158bd5b2133f2f2bf6659aa"],["/tags/MAC/index.html","f25c780d318300731366f4a20820c7cd"],["/tags/Methods/index.html","35813225c3655c9b263958493b63897d"],["/tags/Modules-And-Hooks/index.html","ebbaa0204a8d10882bd818340a174cf2"],["/tags/MySQL/index.html","596218af8f2c61521253a6edf8e8b172"],["/tags/Optionals/index.html","5e40bf5d7ab886c6f22b864d0fbe37af"],["/tags/Promises/index.html","5702547bf79db8f7d5f5e4c3e90c40b2"],["/tags/Properties/index.html","ebc8dd663ed434c1e337125135600abf"],["/tags/Protobuf/index.html","15727a14b3c832d01efdf094e236fda8"],["/tags/Protocols/index.html","feddd8ec82d9c4f8397fc02feb521ede"],["/tags/Result-Type/index.html","bfa0e2262fdfb6235b56af39043c008e"],["/tags/RxSwift/index.html","22914952d4f9e784d62f66388c297e09"],["/tags/Server/index.html","f1b484b3fa9521388fb8c113135d9379"],["/tags/Session/index.html","ed771a2390519d02d02e9a8430d6a356"],["/tags/Sqlite/index.html","25efd63501b6a9393cfbf56c1e2066c6"],["/tags/Strings/index.html","eb320c6de96c9af148230a85bb9e4c6c"],["/tags/Structs-and-Classes/index.html","ac4aea52c6e598c6def44ab0c000ccb3"],["/tags/Structures/index.html","c6ab2fbbba455bec34372aa4bacacfa2"],["/tags/Swift-5-0/index.html","eff9727db333dfa48d89cd59671fcf64"],["/tags/Swift-5-0/page/2/index.html","595b9c15e4bd20b2014ee5933c4a9e72"],["/tags/Swift-5-0/page/3/index.html","61046a4a45c0f0b65f01f580b38f6de0"],["/tags/Swift-5-0/page/4/index.html","12756eebdf0b96e5b113bbf2e1e48ad8"],["/tags/Swift-5-0/page/5/index.html","400d62fce31ca4b2f07e86406e18bdae"],["/tags/Swift-Apprentice/index.html","46cc08301fc3f40131e37be41fcfba22"],["/tags/Swift-Apprentice/page/2/index.html","6abff97b7b1e4c3a85492fb4062304b5"],["/tags/Swift-Apprentice/page/3/index.html","38502199ba316bf9b3a13909e4c4167d"],["/tags/Swift-Package-Manager/index.html","db6eb722d4cb38acbdedd34555fe91e2"],["/tags/Swift-源码阅读/index.html","35edc89f79b0644ca8751301e8cb7801"],["/tags/Swift/index.html","a81ce5a8844c0abb18ddb2148ed3751d"],["/tags/Swift/page/10/index.html","b355f224e34204e39deb333f72ae8233"],["/tags/Swift/page/11/index.html","e167ef22dd4589d9e7955d5b4dc73616"],["/tags/Swift/page/12/index.html","d156b102feb3defbaed8b19bb4e04dad"],["/tags/Swift/page/13/index.html","58e5e83196f61c561851002fead070d3"],["/tags/Swift/page/14/index.html","bb83952e9e4ebc3d266420c479cb0406"],["/tags/Swift/page/2/index.html","92f456af592e6b114b7813fb846a8bbf"],["/tags/Swift/page/3/index.html","8e5eddc47f9041cafee894b3dc9bd6ec"],["/tags/Swift/page/4/index.html","f76d00a5098ac68c7f8ea3674db9ce70"],["/tags/Swift/page/5/index.html","cd4bd42d6ca0d1ae7e8f3320c3899de2"],["/tags/Swift/page/6/index.html","3d9d854b4547ac5db0b49023b330ac39"],["/tags/Swift/page/7/index.html","d77fbfc72f2208b1750511f9a6620216"],["/tags/Swift/page/8/index.html","36799ff6066378b0ddfe2347a9e3afcd"],["/tags/Swift/page/9/index.html","a43e79c425e2d4de7bc08fe881e120ad"],["/tags/SwiftLint/index.html","ed530b9d40aa5c9e55834905e1567b8b"],["/tags/SwiftUI/index.html","0921ddccf940e3c5f8a875c22d4c5eb7"],["/tags/UICollectionView/index.html","e4f6ff1a31c6a48553b666f938783388"],["/tags/UIColor/index.html","82f15fcc9987d546e20439ff730417c8"],["/tags/UIImagePickerController/index.html","b65ace0e1054884be5160334811a7f56"],["/tags/UIKit/index.html","4d67e4c306bca48b6449dda96595fee0"],["/tags/UIKit/page/2/index.html","30e9432fd2079ecf8997b6e760fcbb70"],["/tags/UIKit/page/3/index.html","fde789e004a06a9172f4717818cf64de"],["/tags/UIKit/page/4/index.html","e6b0b12d9bc6d3100a0a585729da6484"],["/tags/UIKit/page/5/index.html","f5728d6341aa832e8a39216990a20cbf"],["/tags/UITableView/index.html","071badf30d0012e49b6f2b1124d12307"],["/tags/Ubuntu/index.html","b1bccd1668dd1729fc6e02bb586ac27e"],["/tags/Uniquely-identifying-views/index.html","238d7c74fa680ffa02b6db9c836d1307"],["/tags/VIPER/index.html","24636c96d31c75c3958553cd40706f2e"],["/tags/VMware/index.html","9551cb0c2bb2ff3de67fc37bc8e0a613"],["/tags/Vapor-4-0/index.html","f5b585637885303856dbfdaeaf89ab63"],["/tags/Vapor-初探/index.html","e140a6eaf49f8d31220cb5e40b5b1fbe"],["/tags/Vim/index.html","0e30893d936300e82296c2906b06b4de"],["/tags/WKWebView/index.html","f87a5e309ca293e532c594ddc5f0af6a"],["/tags/Xcode/index.html","7f110d9e4e2c944a36b1bfd966a43ce9"],["/tags/appleOS-Networking/index.html","c9b100aa630659ae35f88a3a882413c1"],["/tags/bugly/index.html","263e434246b4eb994ef38ecc0b39ad3f"],["/tags/enum/index.html","0423c0979f646f8879f49ce57231594a"],["/tags/gin/index.html","eb4a5ac1fc8a456ef7ae2da2799f7c57"],["/tags/git/index.html","58b517eeb383426bb68ed5f93f0d9d7e"],["/tags/hexo/index.html","9249ce25360a521997113823540675d2"],["/tags/iCloud/index.html","851e940aff58bba4cd19c84c22da0c2f"],["/tags/iOS/index.html","c4257cf467fbf37c3283d47467e6a543"],["/tags/iOS/page/10/index.html","2638275fd6d7b9e5fc2ce33e9bc13ec3"],["/tags/iOS/page/11/index.html","2c565e7399d92d610898dd7ec91d68d4"],["/tags/iOS/page/12/index.html","2babee9b7bc327c014789d7201c02975"],["/tags/iOS/page/13/index.html","7650022b0c3f803acf26fb584ea8de5a"],["/tags/iOS/page/14/index.html","5d9e4faa1421faefe013465d2a1eb78f"],["/tags/iOS/page/2/index.html","eb559acb98b3f84f8e494a3c4160f327"],["/tags/iOS/page/3/index.html","29e704b5737dafdc24fd1919d5a1fb31"],["/tags/iOS/page/4/index.html","ea4273c967f7b1820900f952a4f43a58"],["/tags/iOS/page/5/index.html","7527d8ef461f09db58a50257a9462b2f"],["/tags/iOS/page/6/index.html","3d2be74a48f1262275627fc24d22dafd"],["/tags/iOS/page/7/index.html","753159b0af4fe08fd3e8c9cb8aa1e466"],["/tags/iOS/page/8/index.html","9721998d6312505714b83c3beb60e944"],["/tags/iOS/page/9/index.html","c535d0411c8251676c7a6d1389f373e4"],["/tags/iOS面试题/index.html","d891ad5b988b100f802bee339d12b26f"],["/tags/index.html","5191fabf862753a565287508e92ba150"],["/tags/interface/index.html","04b50b075941c73ef2d6d00291042ee0"],["/tags/non-optional/index.html","18d1aa9008eb428a2a5cef479a5b22ad"],["/tags/package/index.html","788ac840e6874fc2f24a9039b47ead98"],["/tags/random/index.html","f1f16fe1e057f17a1ab94360c1262489"],["/tags/transition/index.html","ae4c6ee5d394505a5f113df091072808"],["/tags/三方类库/index.html","20fdfb29000345909392d13b5735ed25"],["/tags/依赖注入设计模式/index.html","5380df0233cb2afcd6d9cb5704b8cabc"],["/tags/值类型和值语义/index.html","4350116100d4821c137b692503332dd6"],["/tags/内存管理/index.html","4c25d2c85883f8dcd44b7119231bcb9b"],["/tags/冒烟测试与回归测试/index.html","2daa4ef00cfd028c01db78dbaa8f68b4"],["/tags/函数式编程/index.html","dd903ccf14ce36c9e36f475ab5130baf"],["/tags/创建博客数据库/index.html","3e9174fdc0f3226c88ce5dff46cca5b6"],["/tags/初始化模式/index.html","6290d955db8a7a12fabc8b3854e61a02"],["/tags/单例模式/index.html","2067b0aec80f050c51acab671be2f10d"],["/tags/原型设计模式/index.html","1427ef6d7470ef1892406709d577b850"],["/tags/命令设计模式/index.html","fae01b449cdef6cb75a9592921e48998"],["/tags/基本控制流/index.html","b46c1ee0c1c12679585452d0915df69c"],["/tags/基础语法/index.html","8963454105b8e8c930d93c1afc597e89"],["/tags/外观设计模式/index.html","6ea9ef12921b2a2c5581d6cc7841e6cc"],["/tags/委托设计模式/index.html","3d451f4c55dfd5f6bb292a81f0361cc1"],["/tags/子类化样式/index.html","e04f0e5feda7402dddd154bc14456ee4"],["/tags/对象池设计模式/index.html","17056f93ddbf13c90ee0ed54bea2650c"],["/tags/工厂方法设计模式/index.html","aee2a5bae74f56d0706b34eaa43daf0c"],["/tags/工厂模式/index.html","631fc06cf2816e1804a4a1f5e21c23c8"],["/tags/工厂设计模式/index.html","edff769884e0667a9f7671775ddac5a3"],["/tags/开发技巧/index.html","4363909e216965007a591539f6b0ae27"],["/tags/开发记录/index.html","4b839deb7e1c3d72dd500a054aff17b2"],["/tags/懒加载模式/index.html","1ab0b6528d94af6b496406aa733eac09"],["/tags/抽象工厂设计模式/index.html","1868ef1c0990229b36e1484157a86064"],["/tags/数据库/index.html","a9839ac0038f3bf54231f184607c02c1"],["/tags/构造函数/index.html","c90468b416318301c0b6a9f03fc9c449"],["/tags/架构设计/index.html","56d2961218ebb1c7408d955210aa9022"],["/tags/模块化/index.html","770bfe2ee1923df450c8c9468af2e162"],["/tags/模式匹配/index.html","6aa65e72691ff4edf878bd3eca070297"],["/tags/环境搭建与验证/index.html","ef37c4ed0c1a968797b4e22aed2b7e81"],["/tags/生成器模式/index.html","f470847ccdf0ec5e328c9d9345541835"],["/tags/用户体验/index.html","7f64d426a995a4bbfc069d57193d3f8c"],["/tags/用户协议与隐私政策/index.html","d3740eab7ac8f218a262ee50d9a23ec7"],["/tags/类型与操作/index.html","ff91f5dd8e5781ed0faecae246c5bfb1"],["/tags/组件化/index.html","d23407513bfeda37d56963143c576043"],["/tags/自动化布局/index.html","746aae04097911c29fb1c1ba0e79fe8a"],["/tags/自定义UIView/index.html","2ad838ee691ed9d4e7773731636f97e3"],["/tags/自定义转场/index.html","18e9f1af5ccc508466725479288fbfdc"],["/tags/自适应布局/index.html","456ac1dac3c6db5155b019aadf9f9442"],["/tags/表达式、变量和常量/index.html","b9217767e7f603a40c01d9e9982dd547"],["/tags/设计模式/index.html","49b3b2faac0347afdde25e9732fea3e9"],["/tags/设计模式/page/2/index.html","f50a961d708bb81c27c1abfefdac7ab0"],["/tags/设计模式/page/3/index.html","72a2d04031c8f4f5a1ddd952f1a3c14d"],["/tags/访问控制和代码组织/index.html","63081508f1fe6947fe42b1e0f13360da"],["/tags/运算符，下标和键路径/index.html","30321f482a05021edcee2dc2190ced30"],["/tags/迭代器设计模式/index.html","7ab22e77fcded381893054037428da1f"],["/tags/适配器设计模式/index.html","5aa01ae65f8e343d25c82f3201df9865"],["/tags/逆向/index.html","98cf2862729b21a972686b6a3ab43330"],["/tags/错误处理/index.html","099b2ceec087546d7b580063a5f5470e"],["/tags/静态工厂方法/index.html","6b6641ba0e70ff79caa557af11e12688"],["/tags/面向协议编程-OOP/index.html","12d01bf5ae234ae0b96792be9759c516"],["/tags/高级主题/index.html","050d9289266e3447057565916fedf17d"],["/tags/高级协议和泛型/index.html","57d484c59ad133f062f07d40ba6ee164"],["/tags/高级控制流/index.html","649b32794979d583ff7ae8eb93452e20"],["/xcode 常用的快捷键/index.html","00d30f77972e2acbcf5d144915b3916b"],["/为iOS应用构建输入表单/index.html","a223bd9f170b2bbfaba7ec53e71aa8a3"],["/产品开发的幕后花絮/index.html","56cd31c52e3e33a89684e2268dcfe0b1"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","67591dbd8c2b84d9da67f5777139acc5"],["/冒烟测试与回归测试/index.html","7a5c8eeba2c3440fdc02e35215a6dd98"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","efb5f51b7723ca049fbfa9202510b24a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","79429864b6b05aa8eb6282e68d1824ec"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f7c555db97074ae6f34349b265eeb77d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","947b5c09330e55547f4561cf3df3e526"],["/在Swift中创建自定义集合/index.html","5013f39a096274d8a5c873be3191294c"],["/在Swift中处理非可选选项/index.html","30075550c5a68f237fba6e814032cef7"],["/在Swift中生成随机数/index.html","295b5809403198830a029b1598ec74ba"],["/在Swift中重构单例模式用法/index.html","80c23e30572dd4cf397874e3261c54d3"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","ce911e8fa0c0f3c3c617d3e4c2726032"],["/如何为VIPER编写服务？/index.html","183b7005071d6f13fe8e085a8f0f9a8e"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","17a1913ddcdc807e91c53a26898bece3"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","aa600b32e3fc1b571dabbe5b9b6e9599"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","229a07bd1623c8a2fae64d69643026bc"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ec9ba4a120bdf3484513166db323add0"],["/掌握VIPER架构/index.html","6c546d55bf86891f60ece023b5b4ef3a"],["/揭秘 WordPress Hook 系统/index.html","b0df8dbba84104be9f7d47858f9d8cdc"],["/比较工厂设计模式/index.html","b87e04c224ac5b73c696bb5cb10d7121"],["/深入了解Swift中的Grand Central Dispatch/index.html","abe10a5afa52e606a882025721faa2f3"],["/深入研究Swift框架/index.html","d2a30a11fd081aa2f202865bf1ca912b"],["/组件化插件化与模块化/index.html","dc24ca7e14f8514794eaf47974452a40"],["/组件设计与SDK开发基本规范/index.html","c12365f0a45325099acc5297c933e026"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c2ce1534c1c105609e407c96f047a078"],["/选择Swift而不是Objective-C的5个理由/index.html","66f636ec48f7392f06d674f9703bb15d"]];
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
