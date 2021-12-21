/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","77305c6c3b9965adefa908d729eec5f7"],["/2020年iOS面试题总结(三)/index.html","4adc09dd3f4869d68fd028ca78ba0c78"],["/2020年iOS面试题总结(二)/index.html","4699df2fa52d459d53134574be0db173"],["/Advanced Swift系列(一): Swift 简介/index.html","ef6eb3d60443db86f923325ff4e3be23"],["/Advanced Swift系列(七): Strings/index.html","542830c782a8d32708d06dfc904ad323"],["/Advanced Swift系列(三):  Optionals/index.html","b1607b7d7397d0cd926d62f11ab28121"],["/Advanced Swift系列(九): Protocols/index.html","b9c5a3647fa2f9983d75e18db85a27ce"],["/Advanced Swift系列(二): Build-in Collections/index.html","f0ef1c107095059415ce39c78cf2abb8"],["/Advanced Swift系列(五): Structs and Classes/index.html","196bf29f1e7c97d553aae7346e63ac15"],["/Advanced Swift系列(八): Generics/index.html","5f63b8c44f090a69e9c81ed1d587c85c"],["/Advanced Swift系列(六):  Enums/index.html","7aac988dd8c0ab98ff06ab91cebea8c1"],["/Advanced Swift系列(十): Collection Protocols/index.html","8a8e099de43b2794afa200532df5b891"],["/Advanced Swift系列(十一): Error Handling/index.html","a3ee374215bf9d695d3186324ecb98ea"],["/Advanced Swift系列(十三): Interoperability/index.html","625dd2af4da13f65ff21fe7732812ed8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","5f9b202e1085ae832d2fe6331f756b6a"],["/Advanced Swift系列(四):  Functions/index.html","c5fca6e1dae70553513f615f001d494b"],["/App Architecture系列(一):  简介/index.html","c65602438d2d6896725b0b4815e42976"],["/Functional Swift 初探/index.html","fee50dd53e018b461777e6795dc830b9"],["/Git 使用小技巧/index.html","40a7bc706c4a135e4c352bb28fbdbeb9"],["/Go Protobuf 初探/index.html","c31ca3d0eeec9a08b576a911a8073be1"],["/Go mysql Tips/index.html","7f9c3d80a7fa45055a9aaf5afd461fd4"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","21b434ab8a5fca800f9982833a086eb3"],["/Go 入门篇：2、Go 实效编程/index.html","f5c202df951fda2ebaded96d28456ba8"],["/Go 基本语法初探(一)/index.html","d247f0198b44229e0355da7434acb4af"],["/Linux VIM 命令及操作小结/index.html","af3c7afe8411f6573485587c09f48c61"],["/MySQL 基本操作/index.html","d9f97443b73e9378de37805a222275ba"],["/MySQL-列类型和数据完整性/index.html","6f564e8eb6c1adad18b41d346e983dc0"],["/MySQL-数据库设计和查询语句/index.html","885ed52dc60ad89a95f47f49bcae164d"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","11c10f5c2ed96f29d3e9ede2259f601c"],["/NSCODER和SWIFT初始化/index.html","d0f8ac1113a700bfeb72f30a61d72779"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","2d884a04d9dd73358cfd847d0c196e9a"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","110cd616d6fd2e10968998eb1cb01d5a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","26819a00ec4bf10db7e880e606643c69"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9d594d927cac4c78f1cfa554b9263c05"],["/Sqlite 使用Tips/index.html","7dc20737863faa7ec585ee018ea52959"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","990e9a5de3aa3a468c0489f8255b6889"],["/Swift 5使用UIImagePickerController拾取图像/index.html","e49e5f541c60ce67867294ad9a471602"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","f2a3771c118920ee5b28e6b6d9cc2cb7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","af18284dab41815a8c79593e0fb46509"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","b81e42cdfda3b3a3a6a7072a9dea110e"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","f88e8ac078835f86263934ac05f28ac6"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b12723429fcb64b1796944fa16c061e0"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c57dd4cf567b33a86dd39e5f299cc0c6"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","ee16a6d52a9782297c5d6199e250c1eb"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d36eebd8f7bbee66873e6508cd0b0f58"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","50b1929bb384c7469c79b149f31b033d"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","db23ea1a4c1d06251eff8fd617f79180"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","fb90fcf5ed87769ad5fb0752919a91d6"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b53458e0647e508fb22aec0565248631"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f9c30705cdd8ac0b97bf497a73eecae0"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","af69ee52730bb4dff38d0dcb72a96229"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","6aace8f7efae27afbe049143e1ba172d"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c4fa41fb7986314ce7295a06496767a4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","0784911ccd2db1ae96b7b59fea402aa8"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","cd52d59e3112dae630c1767589b233f6"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6ac7a339c33dbff5f124f4d648531b9e"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","8e6f8b267b6e2ee650ae82921365d80b"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","60f872ae236befec6f928496a1820a1e"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7ff8da5af74f80265bff17f4d379bdfd"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e4f5a4df6cab45abf567deb95bad2345"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ef1d0ded558019a83f113ba0cc89b9a2"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","86351edb680068186678d903276b6c89"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e3f002f8071c37e7989ec2d422ec7e2a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","09015bdd83675800c4de89a20030008e"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","01c3bbedc44351ff94c81a2b9f8e6fce"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","637a88b8defbf5da0f5677e64440767f"],["/Swift CompactMap vs flatMap：差异说明/index.html","32be67682de1a3cd52de9596d53438e2"],["/Swift Grand Central Dispatch 深入实践/index.html","67f8c597444d2ffba70d133f69ee6617"],["/Swift Lazy属性初始化/index.html","a51f28aca4382970a93f390ab48fbaf0"],["/Swift Promises 初体验/index.html","1fd306cc95b38f955e1e0a4c6797aa17"],["/Swift Promises 探究/index.html","eb29c1713bf1c68d14ea0d811d4fb389"],["/Swift UICollectionView使用指南/index.html","e7fabecc47d969b438f7b2fe2c5a45cd"],["/Swift URLSession && Combine framework/index.html","e8435fea5cee28878f54a3d67051f963"],["/Swift tips/index.html","a24623f7e6a34bcc9914e9536952b560"],["/Swift 三方库：GRDB 使用指北/index.html","b850b8bdca638db1af08e2ecfab87c13"],["/Swift 唯一识别的视图/index.html","8e901b583072123cae16815e29a82203"],["/Swift 如何学习现代UIKit？/index.html","4431f2784c264f7281404e4ca3f49438"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","79d7e56349b340a01aa0d94e520f9e1d"],["/Swift 用 compactMap 替换 flatMap/index.html","95b59316f7a61af7ab9794337e7f09d5"],["/Swift 选择和播放视频/index.html","b2408e32f2f1143379d3acfdcca8008e"],["/SwiftUI 系列(一)：1、 简介/index.html","0e975a8965c3e105bba22d6d664c8726"],["/Swift中UIColor最佳实践/index.html","d9149119579f3a76905a352f7c6206b5"],["/Swift中快速简单的工厂设计模式/index.html","76e3057ec53561d3513e769e5829e0f5"],["/Swift中构造函数与静态工厂方法的比较/index.html","de99e70153badf36650fb3cb86e2f87c"],["/Swift中的UITableView教程/index.html","02d5ec91712e1c17e6878536b0e9e6f4"],["/Swift中的懒加载模式/index.html","e159fa4f174f43f27ffea3d24b08a8cc"],["/Swift中的模块和挂钩/index.html","3f9972649988203abef1e296ce607d1e"],["/Swift使用布局锚点添加约束/index.html","4d15b99131dedadf4dfb80c5eda6d48b"],["/Swift依赖注入设计模式/index.html","024bda0397ccb3643974af78841d236a"],["/Swift关于Dependency Injection (DI)/index.html","725466b5d84fbdfd323b16d0973a5afb"],["/Swift初始化模式/index.html","c9247fd3f01adfc5c672e343fd9db882"],["/Swift单例模式/index.html","12b79587c0a158ff801af90a4605a5da"],["/Swift原型设计模式/index.html","4b239390784506916cffb5cf21ab98c3"],["/Swift命令设计模式/index.html","9ffb8e6e120eba105241fed3ea5d94ac"],["/Swift外观设计模式/index.html","d21ab9c93cd1e950a7d97c3dfd8dd30e"],["/Swift委托设计模式/index.html","f32699463e63dc60713db1e3e83caf6b"],["/Swift对象池设计模式/index.html","91bf07201bc2cc2eb1c6b5890a02e13a"],["/Swift工厂方法设计模式/index.html","89176a273d22a1698d9e622b4ba38060"],["/Swift带闭包的懒惰初始化/index.html","0b1c84936f959672c1005d2dd95c5fec"],["/Swift抽象工厂设计模式/index.html","efedf8642f1447ec1fe49fbe9e5b61fb"],["/Swift掌握iOS自动布局锚点/index.html","8ff4a4c2b27bb93466942f4586a9f189"],["/Swift支持旋转的自适应单元格/index.html","5f12bdf914b8079e24ad16046f9ee4a2"],["/Swift枚举值/index.html","285c339ccfa44f40e6ef3bb62adf1b9c"],["/Swift生成器模式/index.html","f6226f762400b5a458713d53903f68ba"],["/Swift结合Xib文件自定义UIView/index.html","20c6b8d22ae4b815690d5d9d2c1c575e"],["/Swift编写的20个iOS库(一)/index.html","64dc142701f89c808ea40b8a678a4068"],["/Swift迭代器设计模式/index.html","faea14b9d93a905cd784869a1cbd5be0"],["/Swift适配器设计模式/index.html","9f6963bb0d19ab8eb2b886bd107846e2"],["/Swift静态工厂设计模式/index.html","60a5528c61093bbfc07ddaae43d3b1ce"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","243a6f07c1824a2f836d2625f382b3a8"],["/UICollectionView data source and delegates/index.html","14ab875486482963d128643e1915d54c"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","4d2398afe7cc4ef7b3d917cb1e860bd5"],["/UIKit初始化模式/index.html","99464f317652ea6b6dda33dbc6801ce1"],["/Ubuntu18.04替换国内源/index.html","7b218176209b734424d843067d916d6f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","51a89777cf3f87711e490847d33e9df6"],["/Vapor系列 (一) :  Vapor 初探/index.html","cefe5006f2a1828606e9df6cacb95b15"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","44d0f5149eb9321de03b3adbbeecf487"],["/Vapor系列 (二) :  Hello Vapor！/index.html","b20c4c3fb8156825d30d39f9693ded81"],["/Vapor系列 (五) :  使用session进行authentication/index.html","4272cd398557ea0468ac54c72865c24e"],["/Vapor系列 (四) :  创建博客数据库/index.html","cae2338bd713f8dc746ad18b4979591c"],["/Vapor系列(六): 徒手撸一个CMS/index.html","766dafa06bc8516dfce77e1e05395b29"],["/WKWebView与Native交互注意事项/index.html","052559ad433d8b9b8ac2bcd00c46d959"],["/Xcode扩展/index.html","0a53500aa2dea04772a4bf01eab87208"],["/about/index.html","95eb18b6a5f7422e2c861349523f523c"],["/appleOS的Networking示例/index.html","fc820e7419fa21884099c91297d86653"],["/archives/2020/03/index.html","d8a7ac1c9fee501ba068216557b5fc6a"],["/archives/2020/04/index.html","ebf141ae2d137d93b1a5fbf6df950f5d"],["/archives/2020/04/page/2/index.html","965b0e22c2962fd2f6604c0844febb42"],["/archives/2020/04/page/3/index.html","991a6fea30ab645ba8db986608ba9ec5"],["/archives/2020/04/page/4/index.html","ee7bb147dee55954307eb4cb1d40ec3f"],["/archives/2020/04/page/5/index.html","764354fa9179687a7222492a55b0a37d"],["/archives/2020/04/page/6/index.html","8533e1a3bcf629244b8bab7ec256743e"],["/archives/2020/04/page/7/index.html","f90338374d756b9522d8d775555beb7b"],["/archives/2020/04/page/8/index.html","9685ab94707a0930dc2f51d18acc7d50"],["/archives/2020/05/index.html","379ada0402209aad34b32f7bfc3aad7f"],["/archives/2020/05/page/2/index.html","da90075bc5477be1d54f763cdbb51d80"],["/archives/2020/05/page/3/index.html","50f6e254a7e1ca6c6637757175130205"],["/archives/2020/05/page/4/index.html","7eb454e6ffd84ba051c1d65d04c1da44"],["/archives/2020/05/page/5/index.html","da829af22f4521ab8876f30717d11d02"],["/archives/2020/06/index.html","e315376a28e9640da7385e59b78b464b"],["/archives/2020/06/page/2/index.html","5e5dc69a167d98461e4aab1db7292d4f"],["/archives/2020/08/index.html","d3f561979a8061701e5d355a91bc8643"],["/archives/2020/09/index.html","7b57bc39350548ff74f492e525ca23c7"],["/archives/2020/10/index.html","6e6a93c2819d207634648b00f0a84055"],["/archives/2020/11/index.html","e0bfa75b76c6ba5569abab2625b43f74"],["/archives/2020/12/index.html","e01274dfa5193f87ca12f5af1ee65598"],["/archives/2020/index.html","79d4ebd5d17e8baf791dba1d87734005"],["/archives/2020/page/10/index.html","25e27741236c1f53adbdab7d9d36251e"],["/archives/2020/page/11/index.html","771b907795a0271b8de777bfc79c5f57"],["/archives/2020/page/12/index.html","65432b30fd0837e283b0a266435a2d66"],["/archives/2020/page/13/index.html","fa75bce3a1092ae506bb66db7b5aacb6"],["/archives/2020/page/14/index.html","85dd813b945813f3f7eb4bb722d24b44"],["/archives/2020/page/15/index.html","8206e84734842d19a66086f6e7f6906a"],["/archives/2020/page/2/index.html","08fdf93c96530321abe619622aad74a6"],["/archives/2020/page/3/index.html","999260f73dfba92774ad4fca3e78a582"],["/archives/2020/page/4/index.html","8c8f86acc5a17aa7f6e6b49a51408eef"],["/archives/2020/page/5/index.html","00f89fbd27626746e2a415b3f5553e3f"],["/archives/2020/page/6/index.html","0923571ef26697e1c5d6c2b7aff0888f"],["/archives/2020/page/7/index.html","9ee84fe6bc1f7916f4e5a35a37b96ea8"],["/archives/2020/page/8/index.html","d8c316eb079b5e72d9782bca1e19cccd"],["/archives/2020/page/9/index.html","10f756a80a8ae81a36b53b692e5bb2bb"],["/archives/2021/03/index.html","0d299023cd87ca6746b20fce304c2cc8"],["/archives/2021/04/index.html","d7ff39a32c32fdb0c85ec02210cefccc"],["/archives/2021/05/index.html","acbe2295bc877fe40f0501a9b76ab2a4"],["/archives/2021/06/index.html","9f18eeb100b30f5ae8372ea132050e67"],["/archives/2021/07/index.html","5095319ce38c05e8dfeca1db9962c340"],["/archives/2021/08/index.html","9c8a24b5c6c75cf9dfaf5140eaf69a8d"],["/archives/2021/09/index.html","5c67438388ce514a62d433f2d7f205de"],["/archives/2021/11/index.html","01072a106951c81e82874e0464562474"],["/archives/2021/12/index.html","a7108a62f55a77091920c217af03c4b5"],["/archives/2021/index.html","153510d1aaa0cee556963412d3b16e79"],["/archives/2021/page/2/index.html","51d77d52345689b2245d999ffd55c5f8"],["/archives/2021/page/3/index.html","3a5b504025c90cb2abab33a8a3352474"],["/archives/index.html","25e58b891cf2a84a4d663dcd882141c8"],["/archives/page/10/index.html","ee3b7119b7b1fe78bfefcd4c9aefe142"],["/archives/page/11/index.html","a06d6b517bad5ee986110bdd8ac652b1"],["/archives/page/12/index.html","6d94f6f79eafe2e3a7859ebf92ad1e20"],["/archives/page/13/index.html","5a7834952b64af4cc68270f376a4b3b8"],["/archives/page/14/index.html","b1c60f176da89c95831e87b354178b4c"],["/archives/page/15/index.html","667af06d1f79ab139aeb260c659550c2"],["/archives/page/16/index.html","ff20b0adfdbb785ed938465f45bd5fd9"],["/archives/page/17/index.html","1bfe7721878f0dc15b570da709329767"],["/archives/page/2/index.html","4920564c97d8bc7bd8fe2e50730d3be2"],["/archives/page/3/index.html","eaad010a867863a33c8e49cd409ddb41"],["/archives/page/4/index.html","47a3f2ad8fe3402a14f9e63db3e1899b"],["/archives/page/5/index.html","18ca85bf3d60654846c63b46a9f34337"],["/archives/page/6/index.html","f5c3680e414650930a51120017db56d2"],["/archives/page/7/index.html","6c5614169314c568dfcb12d518d9ca27"],["/archives/page/8/index.html","b7e0896799419b83eb68ea46f2dcbff6"],["/archives/page/9/index.html","4b0be065ed1a14577106ff31c398d12f"],["/bugly 上传dYSM文件小记/index.html","0ace531af76a55657a76853a0000ef5e"],["/categories/Advanced-Swift/index.html","a3a2ef5ebe6846e30d0145f1129e51ed"],["/categories/Advanced-Swift/page/2/index.html","b4bbe4ddae04b7e8cb5ada4dd53a09dd"],["/categories/App-Architecture/index.html","ec763472f0ea788b5ec80848cbb2af1d"],["/categories/Array/index.html","f2fd31c13120a500f2c7789abb8af36e"],["/categories/Codable-protocol/index.html","730dec191dd1091c017346dc3ac0d452"],["/categories/Combine-framework/index.html","eb93e24fe691b51b8a9561e61f8ee47f"],["/categories/Combine/index.html","9e7f0e33d7d9066680141dc328937b59"],["/categories/GRDB/index.html","6f2b1fda8ee39cf2862617e5597cbe49"],["/categories/Go-入门篇/index.html","e97cbed5cb169d677decb12fa0c59b6d"],["/categories/Go/index.html","5c8d9a90a6be166b0594d816c8e7ffc3"],["/categories/Grand-Central-Dispatch/index.html","5e1e26d36914ce5d2d7164b9b9e9e0a5"],["/categories/Hexo/index.html","7a6fd73f9e1e7bab4d7b371871b608e4"],["/categories/Homebrew/index.html","a5ddd2942566f97b1921aa00211965bd"],["/categories/Linux/index.html","5c8a92b04dd7322e6143132a304237c4"],["/categories/MySQL/index.html","bf57e4af0d8470878b01ab1feac8c601"],["/categories/Promises/index.html","22a8fe3617bc75af7f5551dd6bacde77"],["/categories/Protobuf/index.html","8990c55eaea1c7383388698457dcc761"],["/categories/Result-Type/index.html","34f699d4521a43246691590d0a8cf796"],["/categories/RxSwift/index.html","29d74722c3147d19a2e50a4f53affd2b"],["/categories/Server/index.html","ae78aa1b59e03e68ec3f8b1cd08c24f4"],["/categories/Sqlite/index.html","55741388b4134d943b5120afc58772c1"],["/categories/Swift-Apprentice/index.html","b56d87fd50c811b4abaf421ad3448ef6"],["/categories/Swift-Apprentice/page/2/index.html","0e92be05dace76e40e54aeae7564a2eb"],["/categories/Swift-Apprentice/page/3/index.html","de77c60c033cfb22c35e1d3c34096e07"],["/categories/Swift-源码阅读/index.html","f1dcc61336660a18bf524cdeec9096ab"],["/categories/Swift/index.html","d9d260be8fb9184856cfd99fb5e47fbb"],["/categories/Swift/page/10/index.html","ef2950060122939923ce2feafae8f3c0"],["/categories/Swift/page/11/index.html","b6dcdc5d96722c161c8102a32e0c89d7"],["/categories/Swift/page/12/index.html","4e26b894550b3b92ea83766752c4c23b"],["/categories/Swift/page/13/index.html","979c1159e638223e6ba08ab7df786a33"],["/categories/Swift/page/14/index.html","021c73721404a3a4afcbbb312feef476"],["/categories/Swift/page/2/index.html","c3f542332b6ca778b6bd458b5b1916c6"],["/categories/Swift/page/3/index.html","95eeedcd4798528f96bd44263d5e9702"],["/categories/Swift/page/4/index.html","b1d58336fb4b300c1c3ac45bd1ff3f51"],["/categories/Swift/page/5/index.html","d2a90700d21b790e983a38322a921910"],["/categories/Swift/page/6/index.html","5932d75448d6529811c22f1673d07fad"],["/categories/Swift/page/7/index.html","278fbfe10f5a1ed2d78cd0c50a100e59"],["/categories/Swift/page/8/index.html","7ebc57c743e13749a9fed27e6254ba38"],["/categories/Swift/page/9/index.html","d2b2d6fc040da3447456f70d69f10f2e"],["/categories/Swift5-2/index.html","59076894e616207278224251713c49a8"],["/categories/SwiftLint/index.html","b449529d30f434d00a20d390a4492351"],["/categories/SwiftUI/index.html","df1c46de84969f0344b015d6c60a914d"],["/categories/UICollectionView/index.html","b657a9351071e062ac547c22a3bb1530"],["/categories/UIImagePickerController/index.html","a4d506b17f0bd5ec98bc3e56b78390e6"],["/categories/UIKit/index.html","951c91a61eb3fb62164330f89838308e"],["/categories/UIKit/page/2/index.html","7005b206e1c5086cfa31a3f6f1144eba"],["/categories/UIKit/page/3/index.html","01efb36ebe15de9c5e400b3439161c7c"],["/categories/UIKit/page/4/index.html","3fd5980f7cd27bd012c9bc2e1fea39ed"],["/categories/UIKit/page/5/index.html","6553192c98a08536c0d7832189cf9c74"],["/categories/UITableView/index.html","7859d392e9fa43da78df8ec5595e460d"],["/categories/Ubuntu18-04/index.html","61d6f90c87ab7c5eb5639acad95af384"],["/categories/Ubuntu软件源/index.html","fed0d34d2f08938f9cb581ea6c5aab56"],["/categories/Uniquely-identifying-views/index.html","ad94f8668f5423686267d14b57cf5efe"],["/categories/VIPER/index.html","5745cea6c0dd94507c560cc134dd2c7c"],["/categories/Vapor-4-0/index.html","23a5d1fa3c6385c2292d20f9a4f3b7f4"],["/categories/Vapor4-0/index.html","37311f54501b5192ef0611f8ba91d720"],["/categories/Vim/index.html","ac0e44392f0abbb4ed9586ebb0d5d693"],["/categories/WKWebView/index.html","079638fda73d6f72bad1904b14f60708"],["/categories/Xcode/index.html","7dc742b6db0deb1ec1bceeac9269f4f1"],["/categories/appleOS-Networking/index.html","dc056e6c4bb8deefd173eccc85ddf0ec"],["/categories/bugly/index.html","7a3bc141ded630d78284d33a45d24565"],["/categories/enum/index.html","4db71f8e9336fc9ea572ffd3f858c58e"],["/categories/git/index.html","0aaf7c4af315ff2caa93572dc8522d22"],["/categories/iCloud/index.html","1ed62f3ad4997071d00f035784b5e1c7"],["/categories/iOS/Swift/iOS面试题/index.html","db755256a9b182e5678fec7c4bfb98d0"],["/categories/iOS/Swift/index.html","78d4c4eed0c29c52b78d63c9df0b1c96"],["/categories/iOS/index.html","fd159770bf45787a6dfc24ea2709dd36"],["/categories/iOS/page/10/index.html","83d0b61623be5172bf9f2f1c7baafc55"],["/categories/iOS/page/11/index.html","97e54504a4ce0cb9791aad4692681604"],["/categories/iOS/page/12/index.html","21c57269b3230d35800862c37953eb60"],["/categories/iOS/page/13/index.html","be53d2c0f3a9197ba640b54a27f68a78"],["/categories/iOS/page/14/index.html","aa8f16a44278240e6590db916be10ec1"],["/categories/iOS/page/2/index.html","d925b4f8a2c06e8df77bfa759b5a3882"],["/categories/iOS/page/3/index.html","c9dc8ceb63451a63bf1324833c5d3a50"],["/categories/iOS/page/4/index.html","7508ff8db72ceb827e9132d5f0e0e86f"],["/categories/iOS/page/5/index.html","7a67b508184a545fd135777da4f57caf"],["/categories/iOS/page/6/index.html","81df09257824fa400a9859ba0ac2a92a"],["/categories/iOS/page/7/index.html","300a79aa32cad2d6bb76ff098a5a636a"],["/categories/iOS/page/8/index.html","0c5a9d30891998f5ea6806df23729581"],["/categories/iOS/page/9/index.html","871e1d1c36efbba29ecad8ff7bde5de7"],["/categories/iOS面试题/index.html","90c2a2684516e5cdfaf3853cca4ad0ce"],["/categories/index.html","7f696ee1b61759450ea9d9ff61d464b6"],["/categories/random/index.html","c54519cb7eb19d69766ce1ebdafeb8e1"],["/categories/三方类库/index.html","18d31d6177783ebb37215ce1a9e94446"],["/categories/函数式编程/index.html","9810dd6e357f67abd0273ec1e5f568cf"],["/categories/子类化样式/index.html","a72e50cc7af4b207413054116b334c93"],["/categories/开发技巧/index.html","6caebe17a8202dcf862095394abb6bff"],["/categories/开发记录/index.html","68de09865ff6a7633d6c06384ff45f54"],["/categories/数据库/index.html","d2462a27b89dbd9b7f98c3edbef128e5"],["/categories/架构设计/index.html","ebfad51409d8b6dfb412b7684c66ff63"],["/categories/测试/index.html","292a943f93c9978702152a6793e944bb"],["/categories/用户体验/index.html","02365be87c55b5852695a5f0eb33e8aa"],["/categories/用户协议与隐私政策/index.html","c7befebde2abb8cc9e61c2fd8107db4b"],["/categories/设计模式/index.html","22d53f8589b7842c80170209e78b79c3"],["/categories/设计模式/page/2/index.html","56107625399b66c0efbd6e05b0ea99fd"],["/categories/设计模式/page/3/index.html","b55617ef4b17092b5a973001c0946619"],["/css/main.css","585ab32b8be3ba0165430359c6255d00"],["/hello-world/index.html","6d24087b7f6a4e89fa209b70ad615d9d"],["/hexo部署失败/index.html","363825581c80efe5bb7db9eb60a6c05c"],["/iOS 15 适配/index.html","8207def091a585118529a4b276d2c2b1"],["/iOS VIPER架构深入实践/index.html","7ca2ffdc67d9f940a2561558fd1e9be5"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","a33c685265bd279a24b635b55b32dba9"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","fcd497714b7d87dfbbca96015fe8cfd8"],["/iOS 自定义视图，输入表单和错误提示/index.html","e2a979f8d68e76690cac13d9aa833e68"],["/iOS如何使用iCloud文档？/index.html","94a80fcd714fc944f7218794204d3c56"],["/iOS子类化样式/index.html","4123c55168ea7ee17050e255798843ab"],["/iOS开发记录<一>/index.html","c0c2e9ec0111b49b6edfc65c02668539"],["/iOS自动化布局编程/index.html","aee63987eb3e525486da7d80ca0f71ac"],["/iOS自定义转场(By Swift)/index.html","08e46f380266b0cd6c1438d93925e90e"],["/iOS项目架构：使用VIPER/index.html","3442ed3efa7855844ddd8d4e73d4d4b6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","ce4de77295b3c8495f783cf1b8c4ed34"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","950609844574c3c2358b6c10959ea280"],["/page/10/index.html","b693419d52e45798d8e1214df8024443"],["/page/11/index.html","e224071e8a4a742fa36ad787d9bb2aee"],["/page/12/index.html","cb98a121e1418132b39a62b689297ab6"],["/page/13/index.html","0c671261c641f8063cb7a02f6dc71479"],["/page/14/index.html","c19937eff67a4f05aba42f33bf89640e"],["/page/15/index.html","898666d8370e19d7dbc0b24c1c127ce8"],["/page/16/index.html","694fd9ea176bf59e40900dc58145dc2e"],["/page/17/index.html","97f10ca10ff81c9007a86c79ff31a6f2"],["/page/2/index.html","a5e129663a184bd90ad2155d254ab422"],["/page/3/index.html","8cab3f5f39baa2ace2d5a889c6f476e1"],["/page/4/index.html","4d08140e4f8177f870b2b229fdaa1821"],["/page/5/index.html","764be8a6bb32d026657883f00d077fb7"],["/page/6/index.html","d436bdc406f09cda13c9fffe8c150913"],["/page/7/index.html","9fb89deb30221d77b78ac8caf0c53710"],["/page/8/index.html","be7ad258ef07fa3e57c07d80723d2556"],["/page/9/index.html","bf3c2c9e683328faeed4753c83f9d61c"],["/schedule/index.html","ce5406355218191034cebc7521f184e4"],["/storyAppPrivacy/index.html","92075c25046e488d0c85359f9acc5a6a"],["/sw-register.js","bebafd1d16e94ed2d22092846a24b231"],["/tags/Advanced-Classes/index.html","c64cee2c759912d3a2bcf1c6e8e4ff7f"],["/tags/Advanced-Swift/index.html","f68be2f3e3932867ae2e9e6d7be283d0"],["/tags/Advanced-Swift/page/2/index.html","375ada8fcd14490002ac598c397ae083"],["/tags/App-Architecture/index.html","81968b84069ed8ae32ec89235785fe15"],["/tags/Array/index.html","21b8f11154410fed1ad86714f2b22666"],["/tags/Arrays-Dictionaries-Sets/index.html","e39aae0021a51c46a0808fd07981d811"],["/tags/Authentication/index.html","e5dbfc0fdfdc7559231203acfad70c4c"],["/tags/Build-in-Collections/index.html","4454b32cbdb270489199dfa8821d59f7"],["/tags/Building-Your-Own-Types/index.html","faf52e91eebc77385d55c53d0214a32a"],["/tags/CMS/index.html","0712a9ff983522d17bd9042025619fc8"],["/tags/Classes/index.html","4c9e2877c83fc337e3d5a8a8f4899beb"],["/tags/Codable-protocol/index.html","9a71673a409cb416764646fea08e148f"],["/tags/Collection-Iteration-with-Closures/index.html","0323eded17da024a2ad075318648f533"],["/tags/Collection-Protocols/index.html","b13407f20f3a505a884739c7a4c9e960"],["/tags/Collection-Types/index.html","fdde14bab2c4cd2cf140d3a7633ac12e"],["/tags/Collection/index.html","86b44acaffdfd1c3f81eb18dd611a09d"],["/tags/Collections/index.html","dafdb81142135bf210bb1db97716a991"],["/tags/Combine-framework/index.html","de1f623259847bc9d4cb23a5492f5f96"],["/tags/Combine/index.html","bf7d557cd70bda418b8a29c993bab863"],["/tags/Dependency-Injection/index.html","3ba641efcfe7c7a674a054e15d6b141b"],["/tags/Encoding-Decoding-Types/index.html","6e927d5c6628351bfeebf096d9326476"],["/tags/Encoding-and-Decoding/index.html","69e0286e069780106e65a0e62702ef81"],["/tags/Enumerations/index.html","669511e3bc91a8d7e380b77af45e7672"],["/tags/Enums/index.html","3d0c3b4634c7cccfdd06d26769834969"],["/tags/Error-Handling/index.html","76880b94990e9b09ce77c7fd8d34e144"],["/tags/Functions/index.html","ada3614437f171125a025223ddd05086"],["/tags/GRDB/index.html","d0e518d3312857370d7cba7c9644bc18"],["/tags/Generics/index.html","65793cfd31f400306d8a8c486ae91270"],["/tags/Go/index.html","46ea0b320d5d5119e04f4c135d498fac"],["/tags/Grand-Central-Dispatch/index.html","232b2d0e0dee97e608006c4dcc9778b4"],["/tags/Hello-Vapor/index.html","b5ca9a453d9a2ef8e98aa6177bd938aa"],["/tags/Homebrew/index.html","9b4be61d71ceef852ad774a9ed28cbd1"],["/tags/Interoperability/index.html","4bd8983b8d853492692af3feff6c7ede"],["/tags/Introduction/index.html","a545117c495b1c80daa623cfd821ca88"],["/tags/Leaf/index.html","9759c9b61e5e6fe0ee4b55334754cc3c"],["/tags/Linux/index.html","6f1690c2397fbfa859706f7ce8ab1158"],["/tags/Methods/index.html","4314916b83a0fc87f0546b58343d873c"],["/tags/Modules-And-Hooks/index.html","de5147b4276257ffd97eb0fd5365564e"],["/tags/MySQL/index.html","f05faacad3eff223664b9dc2fec05161"],["/tags/Optionals/index.html","c840f389e618999f3ef329d8d8d92ab0"],["/tags/Promises/index.html","55f05967ebdcda4c792633bbcf4e8113"],["/tags/Properties/index.html","c3c1f68ca802943621fee91e9a8a9748"],["/tags/Protobuf/index.html","0befffcdd155084d43ede2e39d7efc52"],["/tags/Protocols/index.html","97237278563b95838437071b73411540"],["/tags/Result-Type/index.html","5a2389d686b3ea57d27d9e1681674520"],["/tags/RxSwift/index.html","91e9cfe050a69b18b90c7206ee3243ea"],["/tags/Server/index.html","fecce7677f1a7a11c6c31f7bef311694"],["/tags/Session/index.html","b397d563897bd98966ab8e86a71281e2"],["/tags/Sqlite/index.html","4c36330aca4987207c9d9dce4f5b9d6f"],["/tags/Strings/index.html","0dc93ed0db2024cdb5fef0330597776c"],["/tags/Structs-and-Classes/index.html","487605dee3fe6850ac18810745021f53"],["/tags/Structures/index.html","a3f545ba7c12d4098b2e5f970ba4e0b6"],["/tags/Swift-5-0/index.html","ecffc2e51dd0265665eff69feea0dcd8"],["/tags/Swift-5-0/page/2/index.html","a9099175c10dc0519acb771740ecdc1b"],["/tags/Swift-5-0/page/3/index.html","a882eb3e3cfaa009a39fa24ad0b428c3"],["/tags/Swift-5-0/page/4/index.html","7d0fb853121ca6b9e3700ca8f6f599a6"],["/tags/Swift-5-0/page/5/index.html","10f7cd5078755e4eade84d9d8062208e"],["/tags/Swift-Apprentice/index.html","f000b58f0d75f1d63de03d56101a339f"],["/tags/Swift-Apprentice/page/2/index.html","2d3bcd75b2ba6643a8ab6a6e00f808da"],["/tags/Swift-Apprentice/page/3/index.html","f91629fbf3be0244ab6154ffd627493e"],["/tags/Swift-Package-Manager/index.html","18aba9de7e6cd78d1c2fed56cb1482f8"],["/tags/Swift-源码阅读/index.html","4d2cd0dff203abba323e714c21315725"],["/tags/Swift/index.html","0734912172f38ba765441fa07858ded8"],["/tags/Swift/page/10/index.html","b2bc02082fe2c6fed5ae8e89c8cc7ad0"],["/tags/Swift/page/11/index.html","926575d1cf1b5c5819712a14ac4d07e6"],["/tags/Swift/page/12/index.html","ca12804cce079ec43f5c7c6c9296e9f8"],["/tags/Swift/page/13/index.html","d7e7b572daf3f6dfcf72bc2d2fbcae28"],["/tags/Swift/page/14/index.html","18b5b9984e2cb22723f16ae1c563049b"],["/tags/Swift/page/2/index.html","0124eecdf02b6885fead86c41c1723a1"],["/tags/Swift/page/3/index.html","ee1cd62b1a7e00b285ecb093ae3996c1"],["/tags/Swift/page/4/index.html","be45ce77e4c0a8cb528776f20fb2afbd"],["/tags/Swift/page/5/index.html","35f209d6269353879ca7cf2b7edac12e"],["/tags/Swift/page/6/index.html","928d11a7825c660149372fec4e86a541"],["/tags/Swift/page/7/index.html","bf50836cf46778d6c798c706f08590c0"],["/tags/Swift/page/8/index.html","8fc59157d75fad94407181f6a5cf2d1d"],["/tags/Swift/page/9/index.html","0d3fc809cdfc0715a25bd985071f79e1"],["/tags/SwiftLint/index.html","da5e68bf0c168ed89e86a800b82f464a"],["/tags/SwiftUI/index.html","2e8053128f83ff53847b35d10f0000a7"],["/tags/UICollectionView/index.html","b0651b74d41730c7fc2cd492d0a58fac"],["/tags/UIColor/index.html","7b28b5dab1656aba4d32a2c1a105bd69"],["/tags/UIImagePickerController/index.html","ed2d846fb9b6b7821189b840b34a9662"],["/tags/UIKit/index.html","530e7d0e4490f1654c1c17e8fc4161e5"],["/tags/UIKit/page/2/index.html","968351aa4d53cdfb688978114a0670ab"],["/tags/UIKit/page/3/index.html","060842f88e7c52ec34231035074e959b"],["/tags/UIKit/page/4/index.html","91b3132f85e88c045643c98a080fd715"],["/tags/UIKit/page/5/index.html","df013caa51a33d090604ea2e9e3a3f85"],["/tags/UITableView/index.html","90ca55a2251d74ab2eb95fcfaf13e1f7"],["/tags/Ubuntu/index.html","24597a4552f87ef75b172302c8f440b9"],["/tags/Uniquely-identifying-views/index.html","1eba95bbedd858ac7ef324efa30f2b83"],["/tags/VIPER/index.html","b4042a3d8c2babe4a5e0d80d27dc647c"],["/tags/VMware/index.html","faa796b924a45746b681faf4e774c59f"],["/tags/Vapor-4-0/index.html","c6515b033aa7aac1220cba2f54b3ec74"],["/tags/Vapor-初探/index.html","6f5510b65ec38b08308670b7a3acc4b4"],["/tags/Vim/index.html","3c05562e88b2e3e9b0e2dc74e4719a63"],["/tags/WKWebView/index.html","80d9e3bcb39185679e1fb581250d8295"],["/tags/Xcode/index.html","1129b278f6777738dc0766b4b21b6d09"],["/tags/appleOS-Networking/index.html","cb337b40c7b33523f3cf10cfcd02c8d3"],["/tags/bugly/index.html","44628405b8715860f67d22e5873d2b4d"],["/tags/enum/index.html","35dc3c722617f6bc4e7d8467aa349bb4"],["/tags/git/index.html","750ab6d7fe1830fceabbeda396111ca9"],["/tags/hexo/index.html","8bbe6eef43663e00bfa3bbef37d69636"],["/tags/iCloud/index.html","e4dce48edeca219b30ff16d7e01b6c75"],["/tags/iOS/index.html","73069bd54de57a2c827468909282c1e9"],["/tags/iOS/page/10/index.html","b515b1d66ea401b5bb2aa4a9eb6c9d4e"],["/tags/iOS/page/11/index.html","c35817afb85f41d02472ff8f64b9bd82"],["/tags/iOS/page/12/index.html","2419a1e435fe63e0ee0be7956f0d18bc"],["/tags/iOS/page/13/index.html","1525770d39ceae9bd357f117692076e1"],["/tags/iOS/page/14/index.html","ed7b4c7937786e26099bbe8532cd0c22"],["/tags/iOS/page/2/index.html","ef7d19b1b13dc39eb021070375f06db4"],["/tags/iOS/page/3/index.html","b970ee5a5dbcbe3520ee0648fdd859bc"],["/tags/iOS/page/4/index.html","6d84baa398b32aceb5e9e9f9f934b090"],["/tags/iOS/page/5/index.html","bbb2ccb1cadd57a581f9bf6ad1d139be"],["/tags/iOS/page/6/index.html","e524b1a1a6a1b35abef003ed57289201"],["/tags/iOS/page/7/index.html","8ce050dee21416bd10d9e88e0602608d"],["/tags/iOS/page/8/index.html","e90a1fe80c20e98baa909fd9942fc2b3"],["/tags/iOS/page/9/index.html","35519ba4ef87ffe1bd449d256c43d35b"],["/tags/iOS面试题/index.html","6880d96ee1850a3a87c76140bcfab148"],["/tags/index.html","d54640c9550bd838fc4b4c31950da6f6"],["/tags/non-optional/index.html","d019ef3b827a2a92d58acd064c138aad"],["/tags/random/index.html","74b092820ad750a4b39175c1544d4dc7"],["/tags/transition/index.html","03529824026f5144ba05618715efd80f"],["/tags/三方类库/index.html","597af61a00fa8dd57b070f54b6d0aa43"],["/tags/依赖注入设计模式/index.html","2ee0c4c67a15c6d5cfa00d7c73514d72"],["/tags/值类型和值语义/index.html","3b1b6f43f0efd12be0aa5e81d0ae648c"],["/tags/内存管理/index.html","2069ecbc8034c0e66ddcad8b2755fad4"],["/tags/冒烟测试与回归测试/index.html","1a0a011d8e232070a83c4498dfe99931"],["/tags/函数式编程/index.html","5fb3112b44d1707b1fdee1aa27ecca86"],["/tags/创建博客数据库/index.html","c84c6daf17c8e6344f4d396e14141b63"],["/tags/初始化模式/index.html","085303077ae3a3a85562ab2c8e06a6d8"],["/tags/单例模式/index.html","e8f5c08866901e8230f933d54ce003ce"],["/tags/原型设计模式/index.html","5e8fdd43400e1a638ffd9b997b8173ee"],["/tags/命令设计模式/index.html","7378b5688947df4594ef815451cad1a4"],["/tags/基本控制流/index.html","baec48d8689055cdeee611a042c27e80"],["/tags/基础语法/index.html","df2b99802398926535f48d6dfe5a9f22"],["/tags/外观设计模式/index.html","5d81149f97ea4a37203c3efe354d28a4"],["/tags/委托设计模式/index.html","b21c8f0489be1efb93f1d5a8c7eaa47c"],["/tags/子类化样式/index.html","006790fc325a2d8c02c5369c0353ae4d"],["/tags/对象池设计模式/index.html","c028c0a5ecc1fd21867d1cad1b7710fc"],["/tags/工厂方法设计模式/index.html","fd9ed6f79c9c77c406ade7ba6e5a3ff8"],["/tags/工厂模式/index.html","38a8120d0c087bbc26475e617f03e49e"],["/tags/工厂设计模式/index.html","5c54f6dbcdc75fdbc9c3205aea55bef6"],["/tags/开发技巧/index.html","3573e26387b1bea2500fac8e8495fb73"],["/tags/开发记录/index.html","3910b9fa7c5edce11e7efcbcac1cdf53"],["/tags/懒加载模式/index.html","b2dcfd1f6ac1966af6738a5014046335"],["/tags/抽象工厂设计模式/index.html","b33bec77b13050b9b3b7f37d814f3f09"],["/tags/数据库/index.html","4c9bf9159fda01643a3df66a0ae27915"],["/tags/构造函数/index.html","e88f622d2ddf370e4bc6dc7dd76c168d"],["/tags/架构设计/index.html","f8592f1677b0270b91d1348b1871524f"],["/tags/模式匹配/index.html","5585e152fce17065b499141a6584820b"],["/tags/环境搭建与验证/index.html","a727c9e97d9d6bbe0845941babdebf17"],["/tags/生成器模式/index.html","e4cf650365f3280bb5693ee2a42e9475"],["/tags/用户体验/index.html","1aaf095aa32d2b5e724b34a98d2116f6"],["/tags/用户协议与隐私政策/index.html","4ff7a425e2b48a8e8fa4e82e0254bf5b"],["/tags/类型与操作/index.html","99668e6175c5d3af9be59c59de2df17f"],["/tags/自动化布局/index.html","15e8d211a5b4b0b9fb68a05cc4f0015b"],["/tags/自定义UIView/index.html","cef7ee5309a0175a523b7955142f028c"],["/tags/自定义转场/index.html","bc32b16b8e1bdac5f1096fb2e26e5c7c"],["/tags/自适应布局/index.html","56d6e50288adcd31eb03629c02cc876f"],["/tags/表达式、变量和常量/index.html","9f60e42096318f4722de4a894b38df10"],["/tags/设计模式/index.html","dc7f7a6e2a621ccb7eb7fa242e31c1a3"],["/tags/设计模式/page/2/index.html","e706d382b69c2a34d526523c39ad9553"],["/tags/设计模式/page/3/index.html","727b2c853542dcd6cd7c51366b0c38dd"],["/tags/访问控制和代码组织/index.html","269633bdc25b048c8454b7aaf7c30778"],["/tags/运算符，下标和键路径/index.html","56097124295273b5cbc0fae75aa83e5b"],["/tags/迭代器设计模式/index.html","0367fca080015124cdb21af9f43ca776"],["/tags/适配器设计模式/index.html","65d6bd13f9fa56bbb7742e827f5ebe13"],["/tags/错误处理/index.html","e1068230459f02b4d006c4ba7949169a"],["/tags/静态工厂方法/index.html","acb890e147df998df274a63099c60914"],["/tags/面向协议编程-OOP/index.html","3bf4063333d68bed0376351e883ae210"],["/tags/高级主题/index.html","f621956e806984f3e478e1a724388f6c"],["/tags/高级协议和泛型/index.html","7d52d38aceebf014006efab81a549d52"],["/tags/高级控制流/index.html","870bfe52706477d171da7b605c35506f"],["/xcode 常用的快捷键/index.html","f341878610fa47513b00b5e181e73345"],["/为iOS应用构建输入表单/index.html","9f57061cbe0a911fffdadf53d7fb0564"],["/产品开发的幕后花絮/index.html","1499ea6912358c52fb9cf7582a310f79"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","97c8dc9e984c6b94d94e3a80092293db"],["/冒烟测试与回归测试/index.html","62b1873176656e34ecf3c6de1d8c9e41"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f2aa4b0e1d0fda48aac52fd6b3df28dd"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","45fc95b00c4e8d03c299134a59de3959"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","24e697c1e870b5fead8b3fde9c443401"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a760e7b93eda687ecc0a93206d854c90"],["/在Swift中创建自定义集合/index.html","3372dc95cb7b8b31e6a33df007fd8a2a"],["/在Swift中处理非可选选项/index.html","056b590be9f710872c395fc95cfeabf5"],["/在Swift中生成随机数/index.html","195df0c975fe7b876f0b9ac962a354b6"],["/在Swift中重构单例模式用法/index.html","f1d9189572913bbb62c38e7cb30a4010"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","564269d7117589b8342e1e6636b68f8c"],["/如何为VIPER编写服务？/index.html","33928eb630c5a0706a87173b61fafa6b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e381582e4813a0d7da6168cd8c4fbd99"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","317183039d89bfad120549e7c14f7738"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","db34b8e2b646b21defa2c289199bd7de"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f36b0ffd4cd16f8ba1b99b3e11d871c7"],["/掌握VIPER架构/index.html","1abcfd7f8d3aad393ea31f1fddd0a6dd"],["/揭秘 WordPress Hook 系统/index.html","0cd2f4f0b83bc9c3d62665844ceb9237"],["/比较工厂设计模式/index.html","67706f48ae33c42683cfa437110e37cc"],["/深入了解Swift中的Grand Central Dispatch/index.html","be337e7d48e596bfa2561f7a7d7ebf22"],["/深入研究Swift框架/index.html","05d79cd6c18e86136c60ee0e5cac989a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","be30c25685cecf15d38953f5f336502d"],["/选择Swift而不是Objective-C的5个理由/index.html","b0ebe71332c138553c13c33dcb28ccbf"]];
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
