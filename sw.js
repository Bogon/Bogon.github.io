/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","3387e9f2f81123670a81aa0516391a4a"],["/2020年iOS面试题总结(三)/index.html","17ef7e87a8abd9810adbf216dc098819"],["/2020年iOS面试题总结(二)/index.html","66bdb2ed9a93163f7295ed6ffb971dfd"],["/Advanced Swift系列(一): Swift 简介/index.html","4ceed02bb7b2e53c8a6be43b75f2e0b6"],["/Advanced Swift系列(七): Strings/index.html","dff73ca24901a00946c697dc09caafcc"],["/Advanced Swift系列(三):  Optionals/index.html","c395ebc9ee4be672ce7cb2f245eee158"],["/Advanced Swift系列(九): Protocols/index.html","76f5b689f875aa33a4594142cc940efd"],["/Advanced Swift系列(二): Build-in Collections/index.html","8952077f893c2139b0805579ceb229c8"],["/Advanced Swift系列(五): Structs and Classes/index.html","4f848b47d1f7cdfffb2224fe1dd9e4f4"],["/Advanced Swift系列(八): Generics/index.html","ef92b3849e4cfaf7d055844ebadeab18"],["/Advanced Swift系列(六):  Enums/index.html","8e516275567953334672d7832ea763e8"],["/Advanced Swift系列(十): Collection Protocols/index.html","036fb57081a86b7cdca2a6e839006721"],["/Advanced Swift系列(十一): Error Handling/index.html","7ad24c3404786866b4ca5d889b222b66"],["/Advanced Swift系列(十三): Interoperability/index.html","0917e7c2211eb9e82d2fdee30cdd74c8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","6e6f875c19de624970452f57428a72b4"],["/Advanced Swift系列(四):  Functions/index.html","03f10635fabda0784b3b4287816a46d5"],["/App Architecture系列(一):  简介/index.html","6da4c404b96c9d9cb8850e56dc62fc2f"],["/CocoaPods 设定版本说明/index.html","1baaf2738ec4c076b44ff9d21173b68a"],["/Functional Swift 初探/index.html","e8fccbb1db74285b53ed6178e822908c"],["/Git 使用小技巧/index.html","67d5fc9b03291e569adb5139f693bbf3"],["/Go Protobuf 初探/index.html","a007c88d49bffd0e78cf96d273a20cb8"],["/Go mysql Tips/index.html","eb97da1db6c738e49fbb232c8fc20295"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","7427f3e88d0b4c9bbe6e94ac414d409c"],["/Go 入门篇：2、Go 实效编程/index.html","0f4fc2e53d4c06089a33f68cb5169b48"],["/Go 入门篇：3、Go 重要概念/index.html","e0abdf34a4adb5360fc8145ddc47fef9"],["/Go 基本语法初探(一)/index.html","8b05042aefc256a4961fa009e1976adb"],["/Linux VIM 命令及操作小结/index.html","75edfa3293e7758f229158cd16ddf518"],["/MySQL 基本操作/index.html","2d87dabd27c66ee04c3bba7538866a5a"],["/MySQL-列类型和数据完整性/index.html","e93ec2a3c11e83e02393c586e1e9a6b0"],["/MySQL-数据库设计和查询语句/index.html","5c23f470ad3d835d0d09f81ecf889204"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","f0cd0d37f6040e63f9aba95d6f0958ba"],["/NSCODER和SWIFT初始化/index.html","742362fd3ea32a19b8208212f1a60935"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","59248d1b21b437ef98b9a711c6c1a9f2"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","6e68180e4c941b57c98ee5e2b77e3e25"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","79a7f37581d36b70ac0f22c9d2aaf692"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","733eca7400bbdb9c4d1b2c8ac4976447"],["/Sqlite 使用Tips/index.html","de92dac206be9a3b8f2d6ec442733c33"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","08931cbc254c0fa812466fe0e654287e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","b204b522e7b6d53b85bb21221c88d309"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","39c7e1ce86143a7abb29bbc77a7b2534"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","051cddecc05f41cd8d18c2d8c1e1b050"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","10f043ab88310597bb283ec9e3a44f33"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","103b37bc1c08f197b7c14d59a0116a6d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","3d874e689f2db589fa9752a49612538d"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d637d4c40b0818e928ee181bfea9909b"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8c9c2f2e952a58b2316357a268f0db4f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e45b555d5df2acfd7d59b84c5a02b160"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","aa211af7967a908e679520840c5576ef"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","caf6577cd88034bc27bf8f7f2e514323"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","af921cc69c3b659f5d0242f4c871e143"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","dd75f1005a0dce83dfd8f280ede2b93f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","2552171f1a13c18e5079643a68a50e82"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","1e149fac1a9f8e9796e5c694f47d4282"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","12202046b4d4700fd2541e2212d4a06b"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","fa02e2f592264f741f4b9f16f397782e"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","5b3a2a4623297ea54daa711f0a4ffb91"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e010b5cb9f5b67561a8694234c6579e5"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","376a37b696d91fedee5b043cdf2a912c"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","74c691184c390668f18362b404e5f40a"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","953fa5adbfd944dafc2456b039737c97"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","a840ffe4389fc77747a936c0bd4656f6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","2798739a671759657be74c1767baeefc"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","e30eaf2bd97b835dd22949da29886c7b"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0a7a294578e9b611e53ab7a117f38951"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6b30352f301f3db7003b11d9b2b8bc15"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","931e1071a9f195842d365fb3c599d096"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","360ab22e6e740f16897cfc92ae7acd5a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b86b845161022cfb2f1d20c4dbc3a9a3"],["/Swift CompactMap vs flatMap：差异说明/index.html","54c9ec01176daf6a0614fb7ea33aa49b"],["/Swift Grand Central Dispatch 深入实践/index.html","ba2180267c097e3e98a576ad1902edd8"],["/Swift Lazy属性初始化/index.html","4d80125663e48acec34bc3d075619e6b"],["/Swift Promises 初体验/index.html","f81251646402ebbc3c42fc4aed1257cb"],["/Swift Promises 探究/index.html","7e6a9ec8d275c0e708b3d440443277cc"],["/Swift UICollectionView使用指南/index.html","96246f8d68b3859d653feda45c897049"],["/Swift URLSession && Combine framework/index.html","88a8f81cf1e8ed9a0fcebc39764f6d9e"],["/Swift tips/index.html","fb42cb56978c389b95c457ca1c8221fe"],["/Swift 三方库：GRDB 使用指北/index.html","5dc8590bf705b7181707a994bd587221"],["/Swift 唯一识别的视图/index.html","e4066db3ca6b68607870ee5f49cc8c4f"],["/Swift 如何学习现代UIKit？/index.html","4761f7f892611e6f0a0614145f2402bf"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","e25c062ec8aa9223551affb868768d96"],["/Swift 用 compactMap 替换 flatMap/index.html","81272d38f6fe40675b366c04ec657696"],["/Swift 选择和播放视频/index.html","5f21db0e665d55013b14935a4c1f0573"],["/SwiftUI 系列(一)：1、 简介/index.html","dc89b076d4ab8a3379253edea52b2ed6"],["/Swift中UIColor最佳实践/index.html","4aecdfd927b5ee910fc6ed615dd9f51b"],["/Swift中快速简单的工厂设计模式/index.html","6ef4bf0470dbdedf78f23e78810f5799"],["/Swift中构造函数与静态工厂方法的比较/index.html","887c4961f8900887b847aab2943437c0"],["/Swift中的UITableView教程/index.html","dfb3f7daff7a9f1620e1470c94519a05"],["/Swift中的懒加载模式/index.html","445f2acc19758565b7c3ca065c3ae947"],["/Swift中的模块和挂钩/index.html","4850455d3ae58672d8c8c31921c7c40e"],["/Swift使用布局锚点添加约束/index.html","c82073bc4506ab365a5e1e0905e4a6dd"],["/Swift依赖注入设计模式/index.html","02cde9f7fb41b195b6cd580dab8514c0"],["/Swift关于Dependency Injection (DI)/index.html","ca8affde9b0bde02972a4247304d3d43"],["/Swift初始化模式/index.html","ea44acf2c995513ee33eda8e5180688f"],["/Swift单例模式/index.html","592407599edc11b7301429ef4d1c3b7d"],["/Swift原型设计模式/index.html","592bb6a7d0c2619b04f920024328f21a"],["/Swift命令设计模式/index.html","0e24af4d96527160bb53f9c3846dd080"],["/Swift外观设计模式/index.html","8d234880a4136ea6597617c32df9f0ae"],["/Swift委托设计模式/index.html","5aea51c2a13a5444519b014c6801f7c3"],["/Swift对象池设计模式/index.html","a36e83fedd8951fb3f497c0e62830606"],["/Swift工厂方法设计模式/index.html","4118dd21430f9461a5e2a44eac3749cc"],["/Swift带闭包的懒惰初始化/index.html","8fbc8aeecf16f7c32b7c124e56cc9002"],["/Swift抽象工厂设计模式/index.html","e95eaf99b5ff70f059be4151bf51eb2d"],["/Swift掌握iOS自动布局锚点/index.html","a35458219969ac7faae708ea73f6302c"],["/Swift支持旋转的自适应单元格/index.html","df089d157ae3ca7dfc0592d08f487e5f"],["/Swift枚举值/index.html","9339a2a33d91e56e5cf340ddf8f2c999"],["/Swift生成器模式/index.html","b269a36f3d218f5ab137c1d0efd43494"],["/Swift结合Xib文件自定义UIView/index.html","b1f8aaad635c5e32001dd9c50686736d"],["/Swift编写的20个iOS库(一)/index.html","e2a0ca84dfceceb05ef470182c321701"],["/Swift迭代器设计模式/index.html","407d7b56acbdcd55e1278680e71369ec"],["/Swift适配器设计模式/index.html","03887afece0c2a6bde30ba36256d0e6b"],["/Swift静态工厂设计模式/index.html","ff66a738baae8ba4080f7e7f10fe53e9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b0102e895e22791164a615249fd8ad68"],["/UICollectionView data source and delegates/index.html","91fa7f854320c3cb69709ee981ccc047"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","31a8292cae8ef29661d725b822da4ef5"],["/UIKit初始化模式/index.html","db77dc346341c1c33e1a933e5ff4bd79"],["/Ubuntu18.04替换国内源/index.html","2478884ef251ef0162b04581b94d5da5"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","e2081c4b237566545b3220e0bf1c7f3e"],["/Vapor系列 (一) :  Vapor 初探/index.html","ae125224ee59c70f60c2b7292501872e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","339eaaf12cb508921f8b510be2b21ffa"],["/Vapor系列 (二) :  Hello Vapor！/index.html","dc35f355dac81aaa19769314623afbb0"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a1d5c8b3c6a1a514f2f7468ff333c994"],["/Vapor系列 (四) :  创建博客数据库/index.html","fcf8d8eb29fa4a218d262e9a312eafc1"],["/Vapor系列(六): 徒手撸一个CMS/index.html","ed01e3e3f972017c1434ae9e811a1fe0"],["/WKWebView与Native交互注意事项/index.html","aa765e00d98554b6e545beb1c374b8a6"],["/Xcode扩展/index.html","53ec74de7ab6e537bbb179438a6e8c77"],["/about/index.html","80ec5560e1ae2391f40f55b674513aa2"],["/appleOS的Networking示例/index.html","4493e2a6ac79fc3fbd84f511acc355fa"],["/archives/2020/03/index.html","c5937209d8362c701849adede39a4eee"],["/archives/2020/04/index.html","bff2399743701b972b35e16039863312"],["/archives/2020/04/page/2/index.html","139b167718891ea4113d816df9243088"],["/archives/2020/04/page/3/index.html","45693c17c2dd8f8453e4346888b359db"],["/archives/2020/04/page/4/index.html","25a4b7cdea8d3f784377ce27f653a8b5"],["/archives/2020/04/page/5/index.html","f694139f9a9af0b1b7fcd70d70c944ce"],["/archives/2020/04/page/6/index.html","4c200710d4208fc6d5f42cac9a742908"],["/archives/2020/04/page/7/index.html","bf9e4303af60f168ac18fccbf255888c"],["/archives/2020/04/page/8/index.html","573d6649ac3a45607bff30dea484a39c"],["/archives/2020/05/index.html","6152b3fbc7834adc62d1ed55317a0806"],["/archives/2020/05/page/2/index.html","a014c1672c1d33272578bbc60fc48011"],["/archives/2020/05/page/3/index.html","d0d6f08ac0676d77af1c2a1c1d1882b4"],["/archives/2020/05/page/4/index.html","d89d73e63bd56166057bb64216a53d73"],["/archives/2020/05/page/5/index.html","ef285f54d3888caa75ead9b0e7dd62b3"],["/archives/2020/06/index.html","058b28e341e1dfb477d7ce83a737ea2b"],["/archives/2020/06/page/2/index.html","5ec93474b7573635432043fc5e8fcf85"],["/archives/2020/08/index.html","3ce109701f263c913b3b5240c7a768b4"],["/archives/2020/09/index.html","4d0c8189aacd289d9f65c3f78cb04aca"],["/archives/2020/10/index.html","b77101e532b96f12da24f292f62fc16a"],["/archives/2020/11/index.html","6c3b6707f199fc42e2fcf217c4fa1218"],["/archives/2020/12/index.html","b81ae34b8f94f602f1967ef8aef0d063"],["/archives/2020/index.html","09b30765df7175e9f73c31d808f82ec4"],["/archives/2020/page/10/index.html","d9cf0c1ac4dbcbed426183cfbca5c605"],["/archives/2020/page/11/index.html","b62790b8ebe46eb049523fad83de2739"],["/archives/2020/page/12/index.html","e589d3da12a78a4e1752ccd5d5099e42"],["/archives/2020/page/13/index.html","17847e9c3a9274b282b69ae429bd44a9"],["/archives/2020/page/14/index.html","4265e3cbcdd2de55f7f8918bfda92e33"],["/archives/2020/page/15/index.html","9bb7bf2a6ae79d5417eb60d79438b833"],["/archives/2020/page/2/index.html","9f4fdff878c6233e31b6aaadc5d790e6"],["/archives/2020/page/3/index.html","e775ebcccc8ffef051c4fef1d7200053"],["/archives/2020/page/4/index.html","3cf341212271bcdc09eff36cc0e29515"],["/archives/2020/page/5/index.html","a3b2a7960fe408551175c5109a4e7380"],["/archives/2020/page/6/index.html","6bfad203bf2bfb79c2667dc0257e64d5"],["/archives/2020/page/7/index.html","8f0bbbd1cb8f3ecfd7e8cd2be4827e6e"],["/archives/2020/page/8/index.html","e61ad1850cde7ab2043386ac9fd44151"],["/archives/2020/page/9/index.html","95f23a019df842c7ae5c6ad31ebf67a4"],["/archives/2021/03/index.html","b0718a7f52b3b22e10eec79370d498b2"],["/archives/2021/04/index.html","6fd95c1fb55828433ae5fc15eee67596"],["/archives/2021/05/index.html","7422cd630990a397908bf1834c42e00d"],["/archives/2021/06/index.html","ec5118af520300afc849771bd73119ac"],["/archives/2021/07/index.html","8a7854cd0af02e17fc30e104ba9b0d20"],["/archives/2021/08/index.html","37467903aa9f5bb3106a27ed85158fa1"],["/archives/2021/09/index.html","78d2927823f918e13616948c8bb792b1"],["/archives/2021/11/index.html","35381e6713cbdf73a99ab2008273c303"],["/archives/2021/12/index.html","48f52f00db6a5aecb9f1fad9cb5e9711"],["/archives/2021/index.html","6effa78e233fcba3e7d090ad19aac8a1"],["/archives/2021/page/2/index.html","e7aaca0ae1b09124bad38e3185714627"],["/archives/2021/page/3/index.html","bdb961db5841fd29cc1ec8ec9f5a16dd"],["/archives/2022/03/index.html","a0a9fd89dc1dc4118c76e4f3ce43fdd2"],["/archives/2022/04/index.html","53055ad858631aa27d51349540e5cd4d"],["/archives/2022/05/index.html","6361f5edd182502d22ab065d5faa119b"],["/archives/2022/index.html","835f85867b693acf05749fea53cf09bc"],["/archives/index.html","fe6c1016a3253104b156f08817106c07"],["/archives/page/10/index.html","046b2fc5bcf9c50f00961589499e36af"],["/archives/page/11/index.html","2f54b729d12a26672f289a82cbf51b9b"],["/archives/page/12/index.html","c2e8de9ae16325b2e161d1438c772a5b"],["/archives/page/13/index.html","16502b6fcfcc8e16392ee07424b03513"],["/archives/page/14/index.html","223f8a1c208dcc5c8dbbd2c33838397f"],["/archives/page/15/index.html","a71982e05c6271c4bb9f56fccd8e0afc"],["/archives/page/16/index.html","3cddab0a6564fe0e0c5847615dd7b5cc"],["/archives/page/17/index.html","3a2e5c438ca5f05081240ca1ca481cbb"],["/archives/page/18/index.html","0d184a24e28ccfd8e3b52d18f20cbdfd"],["/archives/page/2/index.html","3cd26ec00326bc2893e9af5fa8efa9dc"],["/archives/page/3/index.html","e857239910453f27ef04b0e2734462d4"],["/archives/page/4/index.html","b6e55a92e1a4c801cb5f76cf9cd1f8a6"],["/archives/page/5/index.html","0e9cf4641b4a2ad722d8a0948b46f7ac"],["/archives/page/6/index.html","9169c6b95bc01427fcc9b63e8f0a09a2"],["/archives/page/7/index.html","0b39cdc92d99b5b90831c1af5d3b827c"],["/archives/page/8/index.html","a26cbf4ef4fe020b0d095d727668b292"],["/archives/page/9/index.html","3cdef76151d1aca9b5a8da5fb78df7ff"],["/bugly 上传dYSM文件小记/index.html","89c4b9bbc980368acf00c9583fc98588"],["/categories/Advanced-Swift/index.html","65816123e0d4cc0847410d4a70291b6e"],["/categories/Advanced-Swift/page/2/index.html","7617d7b1330e4eb8062fa591c6792ed8"],["/categories/App-Architecture/index.html","c37266d1d28cc35fd32d3ea708e77d08"],["/categories/Array/index.html","454a681c296aa9db6589260918243e64"],["/categories/CocoaPods/index.html","914b1d92f707a935b183aed5da2cf3aa"],["/categories/Codable-protocol/index.html","f2ab802b2458e8268ca77f363546803f"],["/categories/Combine-framework/index.html","a3fd71f241418b78c86de0e14f8643df"],["/categories/Combine/index.html","4ea1cdcfa7f690d03a4118ba3279edf3"],["/categories/GRDB/index.html","66678ffdfeeffd9dd5530d4bd641a403"],["/categories/Go-入门篇/index.html","aa82bc0c6acef19e57da3cb67e904d7b"],["/categories/Grand-Central-Dispatch/index.html","da396706f9830650f1f36ea819902053"],["/categories/Homebrew/index.html","69afa853ad9c910ac6bb3b073d6588ad"],["/categories/Linux/index.html","9b34d9f5947a8fa5fc0492bb72843008"],["/categories/MySQL/index.html","28a11e384fa61f8e7c2d9247232d875c"],["/categories/Promises/index.html","e6cdca8551c15db694c2f25c0172c00e"],["/categories/Protobuf/index.html","b66cb7101f44563a9f695bcfa55534ce"],["/categories/Result-Type/index.html","c208ca3c893edf8b82cb0d0370871a63"],["/categories/RxSwift/index.html","39dd9e8f5b9a9a869996e4839d41c0ce"],["/categories/Server/index.html","1007583d03b13e4e636df1b9898ce75d"],["/categories/Sqlite/index.html","e687f76946a53f2039b3bd6f05eb4698"],["/categories/Swift-Apprentice/index.html","16db97787ee594f110a94eaf6d6eee49"],["/categories/Swift-Apprentice/page/2/index.html","4b744796253a4fa24fc21dda837e9db5"],["/categories/Swift-Apprentice/page/3/index.html","c10b21b99bd3713173c44f584f6940e6"],["/categories/Swift-源码阅读/index.html","59546f2076948a6bf8cfe2951d281af6"],["/categories/Swift/index.html","d58e86cf940a797381465b24b7e8540d"],["/categories/Swift/page/10/index.html","e675b9cd579c7c908e67d99ffc61413c"],["/categories/Swift/page/11/index.html","b351ea0766d53b0a23f77f34032b5d3c"],["/categories/Swift/page/12/index.html","34c96c68f6b0ef802ab0288f0f4158e2"],["/categories/Swift/page/13/index.html","c09c0b720851fc3c35290d5ae291fc29"],["/categories/Swift/page/14/index.html","63d14f6dbcdc3c3807d487f025026df6"],["/categories/Swift/page/2/index.html","b5d9b9cd772f055edb23a9f68ec22c4e"],["/categories/Swift/page/3/index.html","f19e974faa98af393d6721c5e6df20e0"],["/categories/Swift/page/4/index.html","ec540200f9f56a8b06ea3ad1c5eccb53"],["/categories/Swift/page/5/index.html","bf88b51fd356b0f6c604e3391fd2ff7a"],["/categories/Swift/page/6/index.html","9fcb91e7f87690df39b8abe4db118337"],["/categories/Swift/page/7/index.html","afd21f7c5d06e2570b2990d30a327e48"],["/categories/Swift/page/8/index.html","5480c7a2c208be8d7cfd560bb684690d"],["/categories/Swift/page/9/index.html","7bd1b43e44d3c08afade6b43bd0864fd"],["/categories/Swift5-2/index.html","2e28ee5ee366dcc4542ca35e7e5b45cb"],["/categories/SwiftLint/index.html","ff3c8d8c7c90522cf3847a0c3b900c56"],["/categories/SwiftUI/index.html","65d81cf6dd51b424008afb77d47dd806"],["/categories/UICollectionView/index.html","5682c0d95001b1902f2069bc2e180e6f"],["/categories/UIImagePickerController/index.html","50cc87c20aa10db58b37c318e1f864df"],["/categories/UIKit/index.html","77fa6d285a200b578f6550ae7bab0d17"],["/categories/UIKit/page/2/index.html","70070ef746fa9b329e4fbfde4c302c42"],["/categories/UIKit/page/3/index.html","c3897da1e10e2cd0715445263e97fccf"],["/categories/UIKit/page/4/index.html","2155722c335e5905eb373b872ac3ae14"],["/categories/UIKit/page/5/index.html","3b9c369934ecdc56fa4b6572433b7d8a"],["/categories/UITableView/index.html","938a16ee91b412f4c2ac07fe3f0205fe"],["/categories/Ubuntu18-04/index.html","894d27a14cebce13d80c625b3fa99579"],["/categories/Ubuntu软件源/index.html","c1a76ba5063b11fd958986eba55cd24d"],["/categories/Uniquely-identifying-views/index.html","1a710c13049a49439303723619a6ec4b"],["/categories/VIPER/index.html","81be9b4928734c048ca60e30984e1067"],["/categories/Vapor-4-0/index.html","ce583f0aca77391516863659dad2c82e"],["/categories/Vapor4-0/index.html","d5682d5cdb09d34c4f6cc67803f5323b"],["/categories/Vim/index.html","0e6b4209f13c3b2f08f963ad1c567e4a"],["/categories/WKWebView/index.html","51b3815691798af8917be1d86181a70b"],["/categories/Xcode/index.html","5260b9188213cd638ddf4970efdac1eb"],["/categories/appleOS-Networking/index.html","4188097517b295d2c4e63a5e8aba2486"],["/categories/bugly/index.html","6356973ef7b234bf60503b010312f5b4"],["/categories/enum/index.html","57b40a02127306baadc70d2d3854ddfe"],["/categories/git/index.html","5ae9d77da2337752aabaaa1c9656ac9a"],["/categories/go/index.html","761b29d4dc20d6784f4fe55c6e0a7b4c"],["/categories/go/interface/index.html","cc63d02632e59702487e8025909d33d2"],["/categories/hexo/index.html","67f858b97192e991c5d15d1199debe7f"],["/categories/iCloud/index.html","9b2c73a2e7640983ce6d6b1b01d527fb"],["/categories/iOS/index.html","34a5178127d77bd1d7351905af77fdd5"],["/categories/iOS/page/10/index.html","e18ef58ac09793cc59a5a0512255711d"],["/categories/iOS/page/11/index.html","9eee752b8283de06a72019ff8fa75f16"],["/categories/iOS/page/12/index.html","961709e27fbecf2809c72bf809e1a791"],["/categories/iOS/page/13/index.html","3259e271f9b2df2c3fbe5c226f511831"],["/categories/iOS/page/14/index.html","20dba18ed627cc641644a8ff7eec0554"],["/categories/iOS/page/2/index.html","d63c5e24a02b2e2d232f447dc18cf6e7"],["/categories/iOS/page/3/index.html","b77f082995bb9e1456d3daaf2dc48eb8"],["/categories/iOS/page/4/index.html","a7b88385e7d5c4d067341c96891dc2a2"],["/categories/iOS/page/5/index.html","aa23fa8fe0d43a61cf7985931c3d1e39"],["/categories/iOS/page/6/index.html","f6ec1a096e84c04fed5d42286a1ddc63"],["/categories/iOS/page/7/index.html","243fe1317f035fa9e56d5081fb6dcf57"],["/categories/iOS/page/8/index.html","fd3f0b5ca126f443c12427761baf9343"],["/categories/iOS/page/9/index.html","71be160ad7803d86f049b0dfc6d470df"],["/categories/iOS面试题/index.html","9a1d9cf67f8c29cf0accc24ec1e9c583"],["/categories/index.html","f11efaa9352c0833d55f1c9c860ec461"],["/categories/random/index.html","28c736e5f458a5ac891cf71a06c8c281"],["/categories/三方类库/index.html","4f8af876535ecc719434c5d2bb8414d2"],["/categories/函数式编程/index.html","48607e2603426ddbb9fd99ea6d6b5774"],["/categories/子类化样式/index.html","9511cf179699774efa39a502924459b5"],["/categories/开发技巧/index.html","eed629a732c354bb1b6983fddaacb75d"],["/categories/开发记录/index.html","a8ccea733433b5e4dde9d5c14393aaa2"],["/categories/数据库/index.html","292741e1009ec613d37a9e3580e20e0c"],["/categories/架构设计/index.html","cb4488c793207c9ea3325103f98dc45f"],["/categories/测试/index.html","a3344616aa162f7985c9d68b43be4c43"],["/categories/用户体验/index.html","8cd981fa17a1f5dbc0e74d29fc423afd"],["/categories/用户协议与隐私政策/index.html","13f3f247abd8f4377e5e40097f286693"],["/categories/设计模式/index.html","4df523f75fa1a29ed64ba0267bd52e40"],["/categories/设计模式/page/2/index.html","e5732a3eceeeaa52da51e3d2a00801c3"],["/categories/设计模式/page/3/index.html","21ea9d5ce5fcb731f587d83020f187a8"],["/categories/逆向/index.html","4a25a3d0b3644b714b8ea41f3e6def8d"],["/css/main.css","e2f4804dfb452dd772d571fd429d1e4e"],["/go moudle 导入本地包/index.html","4cc578cc1827e46c8e7b276c9757165d"],["/hexo部署失败/index.html","20c245ec70fc9baffb823466b7d9b568"],["/iOS 15 适配/index.html","5ba42996984924916b29ce1ff2bb7dab"],["/iOS VIPER架构深入实践/index.html","4eec32be6589078c4bdabbf2d63c9e1d"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","644cc9e37518f2e72dd09be0f21f89a7"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","5a31a7f64921fff66a089c63739f82bf"],["/iOS 自定义视图，输入表单和错误提示/index.html","afd5a83b755d1097f9bd7d5d3beae5fe"],["/iOS如何使用iCloud文档？/index.html","b5ae95f4d45c066258939ef0fcff95dd"],["/iOS子类化样式/index.html","e7630f342665d69a68e282ef60c0b716"],["/iOS开发记录<一>/index.html","e12c3c0c34c837950be46a171b4c11a5"],["/iOS自动化布局编程/index.html","2f9677634c11b37313ee35f55333f946"],["/iOS自定义转场(By Swift)/index.html","888ced998a3fdbed4c79eb28bafeb834"],["/iOS项目架构：使用VIPER/index.html","d6f6875c9219a5066fb4ab5d1d0afcdf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","baed7291ba14e260c3e261a3d71af1c2"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","e51568908e802cde9c67a4b91f19592b"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4221a1bc8d41f99e6e1260cfb7f612b8"],["/page/10/index.html","802ee7373d1aec5afc05b4cbe2f883ef"],["/page/11/index.html","21bf8853281731d9d496689897ff92bd"],["/page/12/index.html","e53136c293fbfd2a68b871a0fea218fd"],["/page/13/index.html","9121b3ed5c2fc64aa9bcab2244b6216c"],["/page/14/index.html","1456cee6e5945d70dd0c50967694e189"],["/page/15/index.html","62f8294bf6910f962e463f7198b3caba"],["/page/16/index.html","6f06ca877fd4d09b41298f653e4a15af"],["/page/17/index.html","7d0dd85777db8f4962da86848078be2a"],["/page/18/index.html","68be2c12b5683f33d46de240ba0f0824"],["/page/2/index.html","bf28f80160f4f173c300f37326237588"],["/page/3/index.html","140f39ac84f8aa9e388527d23681da2f"],["/page/4/index.html","dee59e4dbad4c5077aa6569d75fa12e0"],["/page/5/index.html","1418f9ede60161756ea7584e18db1a67"],["/page/6/index.html","ee8aa5a361358a1142212277025bdecb"],["/page/7/index.html","7234b55f8359cdd3f7617419fa4b0eae"],["/page/8/index.html","d45f86a79fb07875540b43a6495e42a2"],["/page/9/index.html","9e14abe12fa8451986ee71693caf31ca"],["/schedule/index.html","b8c53b4c0f90029f89c0b42f1eafca6e"],["/storyAppPrivacy/index.html","a7d34be7a4266ade04146505233c2213"],["/sw-register.js","cd69b8670d50cd3c168ed8ce573257fe"],["/swift 专题：函数/index.html","4237fd20fc7259e3d515ffe60fb928f0"],["/swift 专题：闭包/index.html","2f4415040a2f4659a9da81378597e5e7"],["/tags/Advanced-Classes/index.html","2ec1cb5fe744d4bbf34e76cea9ceba2a"],["/tags/Advanced-Swift/index.html","0df7a323650f51e5eeb4d117d1a88d67"],["/tags/Advanced-Swift/page/2/index.html","48b5ec6757cb72b4745b051450c64a97"],["/tags/App-Architecture/index.html","3e403f4b71453a8030721399f917d8ff"],["/tags/Array/index.html","957a395f644e8c09fa745dbd29d976b5"],["/tags/Arrays-Dictionaries-Sets/index.html","acf4f553b7d733aae5eeb5d533914e98"],["/tags/Authentication/index.html","98b15b46fbbe1d1e04dfed158b317954"],["/tags/Build-in-Collections/index.html","197df285cc8771656950700735c3aa9f"],["/tags/Building-Your-Own-Types/index.html","c46e7adfe6e7da11d45c4c9d17e3f00a"],["/tags/CMS/index.html","dce8775fe9adc3d7494f37e7aad85a25"],["/tags/Classes/index.html","f0d1fd70e7a1e7839a391018eb3c417f"],["/tags/CocoaPods/index.html","8eba0a98875fea709ae27524b813f43d"],["/tags/Codable-protocol/index.html","23ec454df1542932faee8635bfea2172"],["/tags/Collection-Iteration-with-Closures/index.html","df2a7d1d28deadf09457ba66dd89750c"],["/tags/Collection-Protocols/index.html","b79f929af91d7e88a06faf5970b5bf46"],["/tags/Collection-Types/index.html","946dc840a804814c4d2c5f91eaa7830f"],["/tags/Collection/index.html","4a3c85558439e571f7c17c7dfc2f2b35"],["/tags/Collections/index.html","73e16c5f84e87c804537692a0c22808c"],["/tags/Combine-framework/index.html","67613442867666457f271c6fe9e32715"],["/tags/Combine/index.html","b10eccbd67aa59e17db721a107779c8b"],["/tags/Dependency-Injection/index.html","6cd3f0e95dd3b45bd35439ed8f1ee4e0"],["/tags/Encoding-Decoding-Types/index.html","36b862da45eee6a1bd13b42092954d3c"],["/tags/Encoding-and-Decoding/index.html","0b8d196709029cce78b0eede0cf811c4"],["/tags/Enumerations/index.html","5bdd4eba44492fbd370101c4fe7d11f3"],["/tags/Enums/index.html","9df81a93256e1ba0b36a967bfa098561"],["/tags/Error-Handling/index.html","97e5386b1c928fa9e2376cc3f99d8945"],["/tags/Functions/index.html","cade255e3a734ba5f8328fcee908eb97"],["/tags/GRDB/index.html","3c5af7cf8c8e2c7a4272e4c37352ee2c"],["/tags/Generics/index.html","1547707704fa987067074034e8a50305"],["/tags/Go/index.html","fa1f307e4db8872426e9f6181c5273c1"],["/tags/Grand-Central-Dispatch/index.html","653b8f9367cc8c1056e0d798a17427d4"],["/tags/Hello-Vapor/index.html","7bb9b4d14192d534f7f964df69db3a3b"],["/tags/Homebrew/index.html","fb6c4c9d93faf3b2dadbf6644882fbef"],["/tags/Interoperability/index.html","9210b996f02d119d8378f3514ccce575"],["/tags/Introduction/index.html","1ac361305e8d49de870286e4f02583f3"],["/tags/Leaf/index.html","f78ba766ba0053fe674426e079cc8bf3"],["/tags/Linux/index.html","443d8526df6145b7281f643f14e54aa0"],["/tags/MAC/index.html","0e844f7edac58d18c579693e1e8068fd"],["/tags/Methods/index.html","5e38f267418b8e169206fdcbe5bdc9d4"],["/tags/Modules-And-Hooks/index.html","6aa9df5a34c124399ddd0a125f6c292d"],["/tags/MySQL/index.html","0be4b7c44e0eb57bf3735fe53cec063d"],["/tags/Optionals/index.html","f4027041c7cfce9eee9a72d7c21ef2c0"],["/tags/Promises/index.html","8f731e64575a5fb75516ed6d8afc912b"],["/tags/Properties/index.html","e50624084a59fc732bbbaae259a35b4e"],["/tags/Protobuf/index.html","ef5da80028512cd42fbfa6582ea5c76b"],["/tags/Protocols/index.html","38309b9c4d475b7af0a4cc99b2858311"],["/tags/Result-Type/index.html","f4e26ca70a5255c55966fce72c3c9811"],["/tags/RxSwift/index.html","bef033d7633d0297e77bd5569229c01b"],["/tags/Server/index.html","3c33a9476d3a83edb2aa8ef95fbef852"],["/tags/Session/index.html","bc48b496ae9d1928dfe7f8eeb708fce2"],["/tags/Sqlite/index.html","bbded0e7cf8209900ffe8861538a562e"],["/tags/Strings/index.html","8a9d91e05f502de3ebd7fd8cd3a1ac65"],["/tags/Structs-and-Classes/index.html","51033c09b032a31e2398b4b27aad4328"],["/tags/Structures/index.html","adb672e0528b28c3ee1a48c3fc12486c"],["/tags/Swift-5-0/index.html","f10ecdf5cd7236e13446c983cff021db"],["/tags/Swift-5-0/page/2/index.html","c3bd5645be7fc243f33b239d11ba7440"],["/tags/Swift-5-0/page/3/index.html","85a9b5be43be7241d0c00badaaa1cfb7"],["/tags/Swift-5-0/page/4/index.html","1ce65cde17f89e12c81aa4afbff62621"],["/tags/Swift-5-0/page/5/index.html","f0e43d045f82f5b96c9b20aa8bbb7fd3"],["/tags/Swift-Apprentice/index.html","7d24abc2eb9a7fef05bf46b046283bac"],["/tags/Swift-Apprentice/page/2/index.html","01820bc62b8ae3fc8d2d49b8c532934a"],["/tags/Swift-Apprentice/page/3/index.html","d5775b9879dbe264d5ff40d2df60345f"],["/tags/Swift-Package-Manager/index.html","537e9e6b1eb707b48e552547e61fa93e"],["/tags/Swift-源码阅读/index.html","4cd22f8ac6f61886007a67c0b7504e85"],["/tags/Swift/index.html","d1045f04407689e5fd9b0fd240ccb57e"],["/tags/Swift/page/10/index.html","7a0e48926a0ff792afb49df94be3391b"],["/tags/Swift/page/11/index.html","6b8f2afefa7c12d3558c242380ff0094"],["/tags/Swift/page/12/index.html","1ff7dcb3c9a00624b22b852e0b67f4f1"],["/tags/Swift/page/13/index.html","3b26cd3bd0ffff2b4693c595e0af53ea"],["/tags/Swift/page/14/index.html","afb6f0737ffbe8e19160e917900b97c2"],["/tags/Swift/page/2/index.html","d8bd2a8cdb609c09a863bbfefcf487a1"],["/tags/Swift/page/3/index.html","3beb1c075a6657bcbe029aff73420a2a"],["/tags/Swift/page/4/index.html","f6aa8d864785a43608d8b9a49dbc4b8d"],["/tags/Swift/page/5/index.html","33d6cd46a58141d7643199b3a2e3eb0f"],["/tags/Swift/page/6/index.html","0dbbd88ddf92bc743c5835c4affd19fd"],["/tags/Swift/page/7/index.html","fcdce46a613affb58616c1b3c21de4e9"],["/tags/Swift/page/8/index.html","379767de31e1efc3e10d3dfdd768149b"],["/tags/Swift/page/9/index.html","406e65b0909bb8c9a5e320469a94881b"],["/tags/SwiftLint/index.html","de2ad7c00eae5ebd5277e74aa9be10bf"],["/tags/SwiftUI/index.html","f642a83ed23289db659dfcc5396e77e9"],["/tags/UICollectionView/index.html","255e9ab9999ee6e66c6a2c198dcd3dc2"],["/tags/UIColor/index.html","ca1c35bed52a08a666f5b4ae2a3aaa1b"],["/tags/UIImagePickerController/index.html","a10cea56f9b99069a63d503c4ebd6567"],["/tags/UIKit/index.html","9d9abf14730916ca68dc58571beb3fc8"],["/tags/UIKit/page/2/index.html","1eee1bfdad8badf9833a69a748432329"],["/tags/UIKit/page/3/index.html","13d267325ce92db67042067c3606741c"],["/tags/UIKit/page/4/index.html","2913ea6e0a3ae3892af787c1e14ac518"],["/tags/UIKit/page/5/index.html","0ee3fe88190203d3782b7e89daaeaa20"],["/tags/UITableView/index.html","7962a67fed36437a4413ae21b7b899a7"],["/tags/Ubuntu/index.html","57dcbf56bd9a298d6b306b2539d49ccc"],["/tags/Uniquely-identifying-views/index.html","9634af64ade3e71ca32245308ae81037"],["/tags/VIPER/index.html","139bde5794c8780414a566b6d02d2163"],["/tags/VMware/index.html","2cfd1256965d0724a5c1fea6c5539387"],["/tags/Vapor-4-0/index.html","049db1ba6774d3ae8bf5870d6ad1e92a"],["/tags/Vapor-初探/index.html","90aa2088beb85e8ecb803dc0df2b4060"],["/tags/Vim/index.html","7b647e8273b7ff12989ec3b60b0b249e"],["/tags/WKWebView/index.html","0e2efd5d576bef990f9e76d563e30287"],["/tags/Xcode/index.html","e6f52a04abe768279bef6f9b7a4d9bca"],["/tags/appleOS-Networking/index.html","440b773de9d04d5b7b53c164edc2a306"],["/tags/bugly/index.html","b0bcd4e53e5fa2002d5d2d1698a668fe"],["/tags/enum/index.html","ed524964aafdc358cfb2cd9e1ca5e845"],["/tags/git/index.html","f5d3f3df6679214227ad82271273eaa8"],["/tags/hexo/index.html","afe8b843d6b71277101b42a4363f473c"],["/tags/iCloud/index.html","e87f4e48fba3f540194738e94c192c40"],["/tags/iOS/index.html","d0b1af2041acdaf860512e0d56b4e8b8"],["/tags/iOS/page/10/index.html","b80f8f848854873a371286c1521dd350"],["/tags/iOS/page/11/index.html","eeafe8387ad09d24560c4e07c0d0af01"],["/tags/iOS/page/12/index.html","8ce14166104c0df2f473230416d2e915"],["/tags/iOS/page/13/index.html","2da6cebfcb464bc5e58140ae38908114"],["/tags/iOS/page/14/index.html","954fe3010ef9fe699d240de614acb2b6"],["/tags/iOS/page/2/index.html","0310bf55927c8ed1b85037864b8fc79b"],["/tags/iOS/page/3/index.html","a6074a9b8e208a16c93b287b8283faa3"],["/tags/iOS/page/4/index.html","ba75f90efec077b78e70e4c49a309349"],["/tags/iOS/page/5/index.html","826926b20b30a554bf14884fc6cffe6d"],["/tags/iOS/page/6/index.html","d05be4df2cdefba9c1e3f84b46bfcc0a"],["/tags/iOS/page/7/index.html","ac1ab1706de0bb4eddd2d867dbc791c8"],["/tags/iOS/page/8/index.html","ab2d2c949082829875f8ae1c28a3d6b8"],["/tags/iOS/page/9/index.html","70ad6f7f426836a36d7af39a78632d11"],["/tags/iOS面试题/index.html","d1e145d0172a132275ff80c4520b4254"],["/tags/index.html","67b3e4f4f63f82ac964bb7fcd221cd2b"],["/tags/interface/index.html","cded818a63da6ee175d01b0a31354b74"],["/tags/non-optional/index.html","b02fad2d0d560824608fd52daea00050"],["/tags/package/index.html","274ce0d3079bb93bb0db8c96ba918f8d"],["/tags/random/index.html","4393293314f06f6341696799c6b44928"],["/tags/transition/index.html","ecfccc390b96652352e36dc8500f9ba8"],["/tags/三方类库/index.html","025d1b11eb671f03920899093c9a812c"],["/tags/依赖注入设计模式/index.html","63d5152f12c19d6204608281753e219d"],["/tags/值类型和值语义/index.html","cb2040a6d6d9f429641ed67b5682b371"],["/tags/内存管理/index.html","1f5304134e4e4aa1a03246cc82db8650"],["/tags/冒烟测试与回归测试/index.html","4a6c2cd1825eb8215a5c4df58918bed0"],["/tags/函数式编程/index.html","104383275f18d9e40a6a412a776c7e51"],["/tags/创建博客数据库/index.html","fc4e3db6abfb84a9730403762098e228"],["/tags/初始化模式/index.html","c2890bbe9481d894085b4aca8d3e7482"],["/tags/单例模式/index.html","56478c49322ee97cf9ae5fe5de70a1df"],["/tags/原型设计模式/index.html","49ef01cf318206d00034001f9c36e652"],["/tags/命令设计模式/index.html","7a1f83e6dc1c7aaa9cb3af4fd01b6473"],["/tags/基本控制流/index.html","c6836b62a9ca0e304702f589097f14b6"],["/tags/基础语法/index.html","f67e4d963224c0d409f872106a633ccf"],["/tags/外观设计模式/index.html","3c082ed088c84c18bc0e3b335b11b7e0"],["/tags/委托设计模式/index.html","8e1908e76e54fd15af790286f4991530"],["/tags/子类化样式/index.html","e1815c9ef47324f5d71ed120321d1993"],["/tags/对象池设计模式/index.html","80d7f65c6af448f92cdf7ac20a5a0fc2"],["/tags/工厂方法设计模式/index.html","280f240bfe611a3eabc71ad70ae7b273"],["/tags/工厂模式/index.html","543e939746bed8dde26d65b789a0ed38"],["/tags/工厂设计模式/index.html","5a7b09c8c0194cfe620723afd742b141"],["/tags/开发技巧/index.html","ee4e23bb65dc839629f7ef03fd94706c"],["/tags/开发记录/index.html","1c50644f7e7601918fbeafd9f1768041"],["/tags/懒加载模式/index.html","7b5f7201fbb6da5e6260af8432e52423"],["/tags/抽象工厂设计模式/index.html","252a9ba9b253af9ff227e3e985fe4455"],["/tags/数据库/index.html","ec0528a46924adfe0a6985b16a999507"],["/tags/构造函数/index.html","359b54bb19d14c63a737d9dc7d20a83e"],["/tags/架构设计/index.html","33404a0db226a803ba0c2a8d9df3c4e5"],["/tags/模式匹配/index.html","e03d89c396b345c7dc5d36024d910fe9"],["/tags/环境搭建与验证/index.html","f9e3541d0fca5d8bcfea773d1f93ccbd"],["/tags/生成器模式/index.html","a1cbbab1d7965d0283c4db8c27eaa749"],["/tags/用户体验/index.html","b01f08885ef1eba49257bbdf7cce6d31"],["/tags/用户协议与隐私政策/index.html","5ed2e92f6e8158eb4f56657075e83678"],["/tags/类型与操作/index.html","a5fe72da5b3d90d33d14dcfd98af69c8"],["/tags/自动化布局/index.html","da521838abca887d2654b87d677ec3f3"],["/tags/自定义UIView/index.html","913f1b17f83674d133fb108b05162587"],["/tags/自定义转场/index.html","bc83adf3e92d74e765ff99df29e545fc"],["/tags/自适应布局/index.html","7534094cfd432ea4f4482d4865d41a53"],["/tags/表达式、变量和常量/index.html","6bcb819c534dddb8089c363a8571365f"],["/tags/设计模式/index.html","74130c26b8a0f568090c751e8ba58327"],["/tags/设计模式/page/2/index.html","07f2ebd4083e0d25d7f9a237c3b8c3c3"],["/tags/设计模式/page/3/index.html","4df431e1c72c4ff326c6ea5a49be3635"],["/tags/访问控制和代码组织/index.html","46ee2968e79c9f3a0b1bd7ddc87e6aac"],["/tags/运算符，下标和键路径/index.html","ef3dc1d2c315295c84646bbc423e58b1"],["/tags/迭代器设计模式/index.html","4101654bb656df4820e3a1835397cdf4"],["/tags/适配器设计模式/index.html","7c1833e656c89e3acfc64b917286b2f0"],["/tags/逆向/index.html","20121bcf45a11e3411e93f6684218b50"],["/tags/错误处理/index.html","a746a30c0455eb03624a61d7ebd4a272"],["/tags/静态工厂方法/index.html","d385b60130371fb597a6eb4745365ebb"],["/tags/面向协议编程-OOP/index.html","984547fbb0278a84d9c33a7bf1604bd1"],["/tags/高级主题/index.html","ee22330fcb4d1a7e644dc28ab551a76a"],["/tags/高级协议和泛型/index.html","9b409735ee1940aa7cf414c279a34623"],["/tags/高级控制流/index.html","d890c82a2d214032aba096ae4a557582"],["/xcode 常用的快捷键/index.html","02e73cadcf0a3d68948c2d66e1438369"],["/为iOS应用构建输入表单/index.html","4cfcef9428546a2c2662a3ab19437378"],["/产品开发的幕后花絮/index.html","7d6bcf1527035484a4c9996b78849021"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","763a92a6068666f6571747c5579f56b6"],["/冒烟测试与回归测试/index.html","65d0177a5e2ef3211d0c78bb07b07933"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","cdf5193346940843a4383af845879c30"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","fe831c1b8f0f9d67b79d08c9b19b5d81"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d45ae8fab80c505e592dbe17e189309c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","ef58eb4364021ed7a45b35ba22c07e37"],["/在Swift中创建自定义集合/index.html","596c07a6194e9222c9d990668c8e57ea"],["/在Swift中处理非可选选项/index.html","4bdbf0538499840d5afa07e2161a59a4"],["/在Swift中生成随机数/index.html","e608cea2223e400a28c70ffc1f793107"],["/在Swift中重构单例模式用法/index.html","f46dacca0942fdb75d864f1812e3be68"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","290d486cce6b89f4d8044e029e06eeea"],["/如何为VIPER编写服务？/index.html","85f9bd69d0373279489a6297c7ceb8f3"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","df53957332e3b2f87e5da6dc81b6f499"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","145c4a0497af4fc0f39394fda978c522"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","05cf1b5299f7ae97e32865f5468fe892"],["/如何使用VIPER构建SwiftUI Apps？/index.html","bcbd192c3c49ef52db09e2007e219913"],["/掌握VIPER架构/index.html","aad41a70a4ee72ed1ab6a8d302cc365b"],["/揭秘 WordPress Hook 系统/index.html","cac193c8f0220ee88bd4d8d9e0286ed0"],["/比较工厂设计模式/index.html","19e0c2203344258ca1f59ebae8d24027"],["/深入了解Swift中的Grand Central Dispatch/index.html","a3f0a2edd49540fcaf5d4698171d979f"],["/深入研究Swift框架/index.html","b40647d663806b78c6f5c1538404953b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e798d1fb1dd846f045ee3ff54013f881"],["/选择Swift而不是Objective-C的5个理由/index.html","3da9b1a4498bab71cad7b47af2443b4c"]];
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
