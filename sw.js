/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","c4a3d7e578687a56da988a0006f8bb87"],["/2020年iOS面试题总结(三)/index.html","ba71eaeb7d6685a97cabb3b70d7ebbe1"],["/2020年iOS面试题总结(二)/index.html","c2ab91abf7327b60d60b0f801ee67f05"],["/Advanced Swift系列(一): Swift 简介/index.html","2e122f1c794961db05d9b9f511c5419c"],["/Advanced Swift系列(七): Strings/index.html","3d3ce313dcd8987fabc0df8057252a85"],["/Advanced Swift系列(三):  Optionals/index.html","a042d2a06006fb349cb98bfedd20a778"],["/Advanced Swift系列(九): Protocols/index.html","43278f66d827816f93a2965e6fd3283d"],["/Advanced Swift系列(二): Build-in Collections/index.html","db183b7ca8ada2bee1873aa059b09483"],["/Advanced Swift系列(五): Structs and Classes/index.html","d9d07ad026a22309782e00085b9487c1"],["/Advanced Swift系列(八): Generics/index.html","aaed85c6c9319ff968315fbff2a86882"],["/Advanced Swift系列(六):  Enums/index.html","1b9d7a5a7d2a272d8d58a163dd2484c8"],["/Advanced Swift系列(十): Collection Protocols/index.html","5d8cd2748f485ee1ae3dc038770cd98e"],["/Advanced Swift系列(十一): Error Handling/index.html","dc7d6712458bf842d53c72c088d6b006"],["/Advanced Swift系列(十三): Interoperability/index.html","a0c9e62156870adc9584aa296be581f1"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","76bc351d389ea35d6529b23c9ef26643"],["/Advanced Swift系列(四):  Functions/index.html","0177d56e5035b7b78f7770c35122387a"],["/App Architecture系列(一):  简介/index.html","1b335e2247d7776096e81b127b23951a"],["/Functional Swift 初探/index.html","244db44e2efa9e58703b7feb0dcf84d1"],["/Git 使用小技巧/index.html","108134814d210392b6030c2f30c45ab5"],["/Go mysql Tips/index.html","a6ff5eaba7dc2dede6e917c1658ec94e"],["/Go 基本语法初探(一)/index.html","2156292dda042d48a5c22e74215d448e"],["/Linux VIM 命令及操作小结/index.html","51adac8125f05bb3c2b0eb26cbec93f3"],["/MySQL 基本操作/index.html","47adc4a97bef938be2bc0c54fdbb4c46"],["/MySQL-列类型和数据完整性/index.html","4ae8f7adb79538e03773a843ed19d9cc"],["/MySQL-数据库设计和查询语句/index.html","bb834dca7edd242c659c8461642bf588"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","100b0bed22e2ac3eac97bfba855c8faf"],["/NSCODER和SWIFT初始化/index.html","124a53f61b972453d90c908dea752e99"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","d5f882527ec5d404dfd6c43d45032a3e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","37a9a56c45538451a784401d07bfd9ca"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","81246eb3b34e22e584f1eccef542e731"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","43f19648f4e39d414445c935dbfa6591"],["/Sqlite 使用Tips/index.html","5b9006b54902553c054dd03ad1d3564f"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","990bdedfb8957fb31424653141f764e7"],["/Swift 5使用UIImagePickerController拾取图像/index.html","f7f9c462eb118c27fc442f39e798ddbc"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","5a93eeaf5b2931ce27d383184e995e3f"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","58d4ef8acd69b9a2b88b5fc59a4c165b"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","08676a6e33de8d7730ec3ce35db23094"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","6586dbd0127a9675237b55f7f0b2775a"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","7087cf403b242810aa2545ec625d64de"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d90211dc8ba81c26eb5a0904dde1fe4b"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","ba5792a62743afb9f48091e4aab24947"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","4d8d60ca3d38efebb0c3f5be25d15350"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","dc7763637d28e8f655064d8c156c46bc"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","5b27a63e563482426e66145b38ac309e"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","10dc85ffc1ac6f5b771a9f79da3236f5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","06015e9440d18109b4c58523739647d3"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6b22ae83cbb9f39c4b0df39bb80d7805"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","8fd2853270106d957e0fd2f6c77c20b4"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a2092b26910fe0be8a3ec6da1c7a38df"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","ac85970903bceeeb183bcace29d26038"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","831fb44ae4baf122f6f05bffd31afdc9"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","71ae3aaaef9c2ea17c94a0e12dc6e93b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","73dcb19c63746a1d47c2c290e05ee4ea"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","5eeaa062167529f327e8a03660bb5666"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","ae3fec65252073812f033172b2cfca2c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","76fda1ee5775c15683c4930db2eaab32"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","67186385f09ddefedd8793698d7286e1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","2e7fd38fc44db7342c9bb3a24bc8403f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","98612bbd589e4e105dba6d25e253037a"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","c1834eb1f7f9fc6da645c1efa4605510"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","6f514e6978fa5a92c0739abbfd03c3c9"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","14d1d2c9eacc50a6ea84d90dbc3b724a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","f23b7c8b68fcf52428a4106fe8c08131"],["/Swift CompactMap vs flatMap：差异说明/index.html","30a355854fcf818c6f8496ee705f06ac"],["/Swift Grand Central Dispatch 深入实践/index.html","b01942fe488082a0afa09a56b0d940d6"],["/Swift Lazy属性初始化/index.html","b9e832834c9d6647c8d4ac1661f607bf"],["/Swift Promises 初体验/index.html","cd3f7d0e0718b307eb61a73badbbda4b"],["/Swift Promises 探究/index.html","e1379d75f4fd104833ba10e486c84831"],["/Swift UICollectionView使用指南/index.html","19e497dab7c8f73f50542f3200b03628"],["/Swift URLSession && Combine framework/index.html","7e0786456548a69a95be5904bd7f183b"],["/Swift tips/index.html","42121d788e522de14cf0494d17d15561"],["/Swift 唯一识别的视图/index.html","2674250030a53520c6419e287774d467"],["/Swift 如何学习现代UIKit？/index.html","c292b85379368c9af3d5ee7ab685331b"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","cd69ed1405286ccd4bc20c4dfd101b42"],["/Swift 用 compactMap 替换 flatMap/index.html","257ec527ba058457dffc99f57594b526"],["/Swift 选择和播放视频/index.html","2618c5f1c10d3389046237f3f81d58d5"],["/Swift中UIColor最佳实践/index.html","ce1b8aaf386a0633b7f1ed2d32675889"],["/Swift中快速简单的工厂设计模式/index.html","afd627533439992c8d4bd3339020ad35"],["/Swift中构造函数与静态工厂方法的比较/index.html","e4f4fe211e55b5f92087d33e5579f548"],["/Swift中的UITableView教程/index.html","e7d576efccb39a1a569383855ad4d3de"],["/Swift中的懒加载模式/index.html","7782be2e74225997b72f0718aa6e647d"],["/Swift中的模块和挂钩/index.html","c16a0006566dea726f1a8aa8fdc2513d"],["/Swift使用布局锚点添加约束/index.html","d743cfe3af9a3b71f6c18fc1e2e4767e"],["/Swift依赖注入设计模式/index.html","abf9e1eac200415662142c50d0559fd9"],["/Swift关于Dependency Injection (DI)/index.html","1b25e773b2d04d2dfec85e8215faf253"],["/Swift初始化模式/index.html","7d12ad1a31d91f932b279131313c81ec"],["/Swift单例模式/index.html","3d0de9c6e1e4519b929e91a6c6201cd2"],["/Swift原型设计模式/index.html","4fd2b864cf377d6f2e929c07822755d8"],["/Swift命令设计模式/index.html","0f83667d596fca0e188a11c52445c5dd"],["/Swift外观设计模式/index.html","1ac3bed2507358ce8e7aa64bf242e7e8"],["/Swift委托设计模式/index.html","232e73c9c04cb0433d14d07b5fd7f729"],["/Swift对象池设计模式/index.html","1481fae8f975a4404b14b7b35958cfbf"],["/Swift工厂方法设计模式/index.html","00174cbd267a38f7b45de0f497ab4bd1"],["/Swift带闭包的懒惰初始化/index.html","77dc170e4e9f46a5a85702812b4aa39d"],["/Swift抽象工厂设计模式/index.html","54e502a895c492e4b6ac8f91c8f85038"],["/Swift掌握iOS自动布局锚点/index.html","a565e2a79fdb91c11dae4cf6d00eae97"],["/Swift支持旋转的自适应单元格/index.html","91a3775e2fd1e5ebd62395fc63507e79"],["/Swift枚举值/index.html","0c5ac447e92eee89a96b4d86e95c133f"],["/Swift生成器模式/index.html","e799ab2d8b4f58e53812ecd8fbad847f"],["/Swift结合Xib文件自定义UIView/index.html","256a4e434159a55988cb64500db57413"],["/Swift编写的20个iOS库(一)/index.html","add1c9accf89b1247ba5e6551357952c"],["/Swift迭代器设计模式/index.html","dc7f1fe33ace483a4824d48fab15bbe0"],["/Swift适配器设计模式/index.html","b9f5082d7aef36abd40bb58ae8e1d740"],["/Swift静态工厂设计模式/index.html","80700aa4d80e70f6671aa5623169c68e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","60739643e97e92551d1fa24c35688aab"],["/UICollectionView data source and delegates/index.html","ffb2c69d1a90f6ea843a1b50f2407943"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","0a29dcf611b3210e1148801f88f08496"],["/UIKit初始化模式/index.html","55fa0ece8ff29d075ea6d4deeb969bef"],["/Ubuntu18.04替换国内源/index.html","de14f119900cd68461172d36359593e7"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","bee7d769fb37276d27815fa01bf42c0e"],["/Vapor系列 (一) :  Vapor 初探/index.html","802cf15d74201fd7f8fe41a5c538e774"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","4e20867a94ccaf6f8c489f1c097cd988"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e7a725224e91fd5ee23d2d6ccd605d38"],["/Vapor系列 (五) :  使用session进行authentication/index.html","c311a3f5395eadcb6b7ea5be38ea1f63"],["/Vapor系列 (四) :  创建博客数据库/index.html","14b88c1e15bffc411896881f6172811f"],["/Vapor系列(六): 徒手撸一个CMS/index.html","c16201fdc52ccbd992f68a4139670468"],["/WKWebView与Native交互注意事项/index.html","2262b559cbd657b9a21e4de7f1b69935"],["/Xcode扩展/index.html","d24fadbbba27df3bc341bc369889cdc6"],["/about/index.html","869f964f05cd3decec2f0b2f0f18fd41"],["/appleOS的Networking示例/index.html","cd259b20af4fee4a1f9a9700aa7ea00e"],["/archives/2020/03/index.html","c9ecf3c6e733d225ec0dbd213107e8cb"],["/archives/2020/04/index.html","29202de27aa2c9a3d88afee9abce2d1c"],["/archives/2020/04/page/2/index.html","7b27edcc1cef50599af50073f76f4879"],["/archives/2020/04/page/3/index.html","b4927426267a9d90733f955a38442959"],["/archives/2020/04/page/4/index.html","2b4bd536b6b077ea14ee788a20076bbb"],["/archives/2020/04/page/5/index.html","8d8d15c803f788c17692a0ba57439b20"],["/archives/2020/04/page/6/index.html","5663e00dc357ee9daf9f657b5743d19c"],["/archives/2020/04/page/7/index.html","d08059686a18dac843485991c11450f9"],["/archives/2020/04/page/8/index.html","4f32eb5e20d7a932ffb61c7b94b2ca08"],["/archives/2020/05/index.html","6e40176a495f630047edca18996bebf7"],["/archives/2020/05/page/2/index.html","55f45a9fb9e4b5a47002577c02fa3a99"],["/archives/2020/05/page/3/index.html","b85c56997d58191d5bc4491fa7c8bb9e"],["/archives/2020/05/page/4/index.html","c2821dfb69302d612704647e977e361e"],["/archives/2020/05/page/5/index.html","fc1bd1fd8012d0b29a437a0517c501bd"],["/archives/2020/06/index.html","9445d0ce46d33b38b60f4cad956b40b3"],["/archives/2020/06/page/2/index.html","fbd676cdcd7ded950799b31320f0ebf1"],["/archives/2020/08/index.html","1fd5ede057cebcb9b9b82c8222d6d766"],["/archives/2020/09/index.html","5a14f7862b1b5648173249408474903b"],["/archives/2020/10/index.html","d6ec3e26c7404d330c502b73e584525c"],["/archives/2020/11/index.html","9bcbf73577051291d56434e76aae59b6"],["/archives/2020/12/index.html","19d403d381eaf4a9f37f66964896fd6c"],["/archives/2020/index.html","512afbee863a43f21536051077ccc3fe"],["/archives/2020/page/10/index.html","1c7c54a1da2bb0c269f538496a690f63"],["/archives/2020/page/11/index.html","8d056a1d56a22b152ebdec5d2df8a3f3"],["/archives/2020/page/12/index.html","379b87d38a89ecbf17ba89edd7361433"],["/archives/2020/page/13/index.html","7b522d43d5dac6d8dcd168955b2b0571"],["/archives/2020/page/14/index.html","d4023ee4c16f94a8910dc757a52a0101"],["/archives/2020/page/15/index.html","6c284a419c893fce7ec2c214c1fd7db3"],["/archives/2020/page/2/index.html","1a32911ed2f7c51380db0d9607423568"],["/archives/2020/page/3/index.html","45bd289718655d88e6c0b8688ce46d09"],["/archives/2020/page/4/index.html","4f560f02edc86f0f778f6c0a29cd5aa4"],["/archives/2020/page/5/index.html","fc66b2acb0f674d8527c8d867d86743a"],["/archives/2020/page/6/index.html","7df288e36f1ee8abb58836899c80cfb0"],["/archives/2020/page/7/index.html","1e587eec890f4c7ec6c0ec72bc3ac4a6"],["/archives/2020/page/8/index.html","83d62e9674da77966e3753c748672754"],["/archives/2020/page/9/index.html","35cae824b604ffe3abbd421566fc5bef"],["/archives/2021/03/index.html","5cf16d486488654dadcabd448cb78b68"],["/archives/2021/04/index.html","894b8c9582b8b5b2260082edc4057683"],["/archives/2021/05/index.html","0c5aaecc2f75f0e5c468d266dd068f62"],["/archives/2021/06/index.html","49f8bc52b0952cd038f39feeea898a2a"],["/archives/2021/07/index.html","2e291a1297cac3469862b0675459b2bf"],["/archives/2021/index.html","016b92783a1bb728f193e36466f8e735"],["/archives/2021/page/2/index.html","8da39598ad19027e9f7d3c8f7c2a4841"],["/archives/index.html","e004040461908bb44fca510b142c4417"],["/archives/page/10/index.html","e87cbc2cd0a9e134d1dc7d9f1bff9130"],["/archives/page/11/index.html","4ad07bdf9b3a2040ab7b55ffdb7e3566"],["/archives/page/12/index.html","101cf6f5631a60c74792662bd0ab9215"],["/archives/page/13/index.html","3a870cd56b9fdd95fbf8a00757ffc0ab"],["/archives/page/14/index.html","5ddcca09479675e3603d3ac542ef8af0"],["/archives/page/15/index.html","5744ed99199e663b15761489c6bd4447"],["/archives/page/16/index.html","4fcff89f103126f78e1a09811951d870"],["/archives/page/17/index.html","8601b4902f9902ddb57abd910c411190"],["/archives/page/2/index.html","6fcfdb660e4b8aac469142c9cf57fa8a"],["/archives/page/3/index.html","713902cf91310077ba8bb81e39c279c0"],["/archives/page/4/index.html","7e072973eb8010ad6c2dda04fbb161b0"],["/archives/page/5/index.html","770544c56e9a61867e152b22b6adfb61"],["/archives/page/6/index.html","8fd64a7e0ff658065f2eb36226668ec5"],["/archives/page/7/index.html","c65cb6d7be055ea92a812c8f42abdd66"],["/archives/page/8/index.html","e744e6b08d0ae222d6919babcf5c2099"],["/archives/page/9/index.html","b3705bfe15855cbba604c896e3fa1265"],["/bugly 上传dYSM文件小记/index.html","235b8f3ea3490ab3548e81409b7ada33"],["/categories/Advanced-Swift/index.html","c737ac76f33a60a506fce548a832ab42"],["/categories/Advanced-Swift/page/2/index.html","e269e60aac7e68d0d09702d0eff6d9b7"],["/categories/App-Architecture/index.html","d8eb2ba8789caefaf15649e1af9baecc"],["/categories/Array/index.html","af39776c5901539b253eb5cf4769c85b"],["/categories/Codable-protocol/index.html","beeb2623bad9f204f524a7eefe6d224f"],["/categories/Combine-framework/index.html","3937235231b909816762086d781e7de2"],["/categories/Combine/index.html","36339d1a0ef42a00fe3c8a3657307ffe"],["/categories/Go/index.html","c1e8ddf1de752a19a4426a0697c7be72"],["/categories/Grand-Central-Dispatch/index.html","470c27125e0546b5c36dfcf5122f1245"],["/categories/Hexo/index.html","e89d84829e8d29424bfabb2b75e8b962"],["/categories/Homebrew/index.html","a514386a8526a800ffa00bceacef0f41"],["/categories/Linux/index.html","5ac5a8e2fcbe278ac27424027f96084e"],["/categories/MySQL/index.html","83898b7e077a0eef457877599f1bd741"],["/categories/Promises/index.html","0e21c3db6728b859a996f92924a9b8c7"],["/categories/Result-Type/index.html","2e462d215bee906157eba874df07d623"],["/categories/RxSwift/index.html","9c601e216c118c38e7acba0103f5efe2"],["/categories/Server/index.html","397da3836009b5cf1bac29aa74ef9037"],["/categories/Swift-Apprentice/index.html","c66ec2f8ac5507dd40089145da7170c1"],["/categories/Swift-Apprentice/page/2/index.html","b5d1b9704258e0fafcd047251b578419"],["/categories/Swift-Apprentice/page/3/index.html","408a0de6a8d34585d80303dde5ce93c9"],["/categories/Swift-源码阅读/index.html","d1c6f545ed5c7ad1e4b4a7cad22a0733"],["/categories/Swift/index.html","d8537ba365225f483a5e5452bb947a20"],["/categories/Swift/page/10/index.html","f768cc24eaf6c41d687df3a7364ab567"],["/categories/Swift/page/11/index.html","c1452f3193f1f90e48a708a7d161daef"],["/categories/Swift/page/12/index.html","eb6d9e20be145edcd28c3e6f566931ca"],["/categories/Swift/page/13/index.html","3ff46ba20495b50dac76fa11d0ec21c6"],["/categories/Swift/page/2/index.html","da41b2167afbd5241b6a7958d04adf87"],["/categories/Swift/page/3/index.html","3c3a1ce4032ffa4622e91c7b8f9edbc3"],["/categories/Swift/page/4/index.html","73cbd1690cec9edafa2237e2d8de7ea1"],["/categories/Swift/page/5/index.html","97e452c7563e25fb07c09beca2152d11"],["/categories/Swift/page/6/index.html","5af66817c05ed4a6779486a8c265df05"],["/categories/Swift/page/7/index.html","852322ca790d666506fdaf19d4f28de5"],["/categories/Swift/page/8/index.html","ea4e1acad037db3f6b841e2ab7708012"],["/categories/Swift/page/9/index.html","2bb566ef5c393ab8d376b825782cb899"],["/categories/Swift5-2/index.html","528516de239f97e3acf5941b66090437"],["/categories/SwiftLint/index.html","2ba4ba0ccc379a31432dd41bcd6cde6f"],["/categories/SwiftUI/index.html","1b7418b7e93ee18049c8f32592ccbe63"],["/categories/UICollectionView/index.html","9f9550830da57ec02f75ed9c884a2de9"],["/categories/UIImagePickerController/index.html","7b371d1f62aedd394dec1adaa5d60181"],["/categories/UIKit/index.html","e4ad14e69d23549af4c67b04b9891068"],["/categories/UIKit/page/2/index.html","c7482ac99649911d0e33b17c57d8280a"],["/categories/UIKit/page/3/index.html","c072d5bff64b100e87ba3cd97df3adae"],["/categories/UIKit/page/4/index.html","18478f73d96cc06e8fb5e2e0623ad6e7"],["/categories/UIKit/page/5/index.html","bf700a06208daaa5e549aae858db9d15"],["/categories/UITableView/index.html","c2f423f54ca02ca56fbd444ca981d0f9"],["/categories/Ubuntu18-04/index.html","ced37939df30c1f2b84708b018ed2a0e"],["/categories/Ubuntu软件源/index.html","858b87d65011048751ed4e53fbe4a41e"],["/categories/Uniquely-identifying-views/index.html","966973930e759ce969c4d6dbdf7ac73d"],["/categories/VIPER/index.html","b268bc42fcc73e3509a73f107516d2b2"],["/categories/Vapor-4-0/index.html","ba0a231d92a995cd12978bbafbb1b28d"],["/categories/Vapor4-0/index.html","9d97af406fa7353a89a26728bdb7fdb3"],["/categories/Vim/index.html","88b74ba5e2100e29764e275cfee2cfd2"],["/categories/WKWebView/index.html","631c4d75c04f41bdcdf9295d5be75ba4"],["/categories/Xcode/index.html","187baab5ab88b514e4dfd791f5173f9e"],["/categories/appleOS-Networking/index.html","80f6d502b9456e13f33b03714b218165"],["/categories/bugly/index.html","aff2fd124b47ddf775d53c7368feb19e"],["/categories/enum/index.html","9a2647f643c63a1df25a863e6eb09ca6"],["/categories/git/index.html","5ccff34ab96a37c771c683ad1dc76a2f"],["/categories/iCloud/index.html","7ce3943d0008b638526fa7074ff2264e"],["/categories/iOS/index.html","d06b5bb0f5fbc97122a326635efe1179"],["/categories/iOS/page/10/index.html","f99ab10c2ee14781d599780626ea5749"],["/categories/iOS/page/11/index.html","48156b62b288768d90567ab388c80872"],["/categories/iOS/page/12/index.html","b5f2523b6cdbd87d8f3eefd8141d097a"],["/categories/iOS/page/13/index.html","6cad5063f047e23474a72dbb3b643a5e"],["/categories/iOS/page/14/index.html","6813a5f079616d8f6aa6a2b929a4d98b"],["/categories/iOS/page/2/index.html","565bf18819d5fbba9abaf1f1cb1050cb"],["/categories/iOS/page/3/index.html","1266b169c12fc82337106526b667b772"],["/categories/iOS/page/4/index.html","03e241bcba12ebf4a8f722e26507c299"],["/categories/iOS/page/5/index.html","d9dcf77cb18325252ac25e800122595f"],["/categories/iOS/page/6/index.html","1e53f9d0e6cb3816c49255df73125a97"],["/categories/iOS/page/7/index.html","d31fe30e0c42cbcb581959d494924852"],["/categories/iOS/page/8/index.html","832c8686004e9d1be5f4b151aaf7c6a7"],["/categories/iOS/page/9/index.html","6124e40ee01f6a1b70427da000f2a20b"],["/categories/iOS面试题/index.html","51ef262a7b19a6d75bbc6c198ed0a94e"],["/categories/index.html","e5fdd9c443c97b0cdcf624089de559d1"],["/categories/random/index.html","e33db3dc1794048076e30b27c24efbd6"],["/categories/三方类库/index.html","211b7ba2b83928a7e2ad72656d4fc232"],["/categories/函数式编程/index.html","d08941e90de716ff2607025f4be04d26"],["/categories/子类化样式/index.html","0b598c72c8a2fbff8bdb706b348f5673"],["/categories/开发技巧/index.html","73237e2c0883f53f35702eb76f4b1a63"],["/categories/开发记录/index.html","c23c113813ba977dad12c0c3e75c5229"],["/categories/技术支持/index.html","b7fd4f1f27ff0f6a328b38f6e583aaa6"],["/categories/数据库/index.html","de7d11857dbf4ac32840c9c5774a2729"],["/categories/架构设计/index.html","4639a821b0a2d59e34dd50eda9b67660"],["/categories/测试/index.html","37db5fd77aa91c1a469d18ade0a768ed"],["/categories/用户体验/index.html","6b4e4c53fe5a710778820aed1d2e4d57"],["/categories/用户协议与隐私政策/index.html","deff52b65c991adfce7c77677c0cd93b"],["/categories/设计模式/index.html","7d8148bede7233953aa5d9a1f242085b"],["/categories/设计模式/page/2/index.html","fa5125d52d7717d838171dce13259153"],["/categories/设计模式/page/3/index.html","2f70efc815af27ea40c35ea5ebaf3314"],["/css/main.css","d5ea8e2b1471d98e1a7bd27989e729e6"],["/hello-world/index.html","ef822da3c69415a16d7028535288a7a6"],["/hexo部署失败/index.html","67b4f0780245322bfcf5405e36ee263d"],["/iOS VIPER架构深入实践/index.html","c13867be41e10c3e3cb78d34a4a31faa"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","7e7a4c41220f9ca413fba6e8ff756235"],["/iOS 自定义视图，输入表单和错误提示/index.html","23f4adc3dfdcdb44002ef3e0ec80f351"],["/iOS如何使用iCloud文档？/index.html","30f923356b768ab32447453bf9e2b4bb"],["/iOS子类化样式/index.html","6393afeaa3b30c69bc5a51c6b0a95f56"],["/iOS开发记录<一>/index.html","ce553118f01ee1e4ddbf31e1d08cd458"],["/iOS自动化布局编程/index.html","81b74ff77c3748ec87ff28073dbc2539"],["/iOS自定义转场(By Swift)/index.html","0c2557282c618f1d8cebd3fbd7bdb6e5"],["/iOS项目架构：使用VIPER/index.html","5d393d1eae39529c02252a4eaa6abee0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","54efa5ad38e104679dfe03842fc261a3"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","66e3b3354260257fd917deffff51f612"],["/page/10/index.html","4826ff8e940383b699e55014fcd8de3b"],["/page/11/index.html","59bd97e4142de0c9edc9e632c5f01e9b"],["/page/12/index.html","eefabbe7b7b4cea7e982544c9cf854d1"],["/page/13/index.html","24af8f2aa58390ef92242375f0ef8806"],["/page/14/index.html","ffbf2acf8de0391c7baae18e5d7fc9cf"],["/page/15/index.html","577cadb5459b7144987c1771e97f646f"],["/page/16/index.html","ad455a53b2820e2613de99685ea81c16"],["/page/17/index.html","4fa66c65718c2494182932016940f3fa"],["/page/2/index.html","8e6c33702e20fe3c1d6e97c7596c7e4f"],["/page/3/index.html","1ee567f587d43831cc767cb4b5d744d1"],["/page/4/index.html","1ef9413580105cbe98e5dee63243d7bf"],["/page/5/index.html","cf822ba446da3b8df2e698a1006d06ea"],["/page/6/index.html","5303bcb224f5c5d55dab82d550a9e4e7"],["/page/7/index.html","82c98954dc891c985bb75c14c3f2d73f"],["/page/8/index.html","35229365a3ba3d5d9302e421107f8552"],["/page/9/index.html","e1f580d40b3b3b55b0951e78405e781d"],["/schedule/index.html","c18bd771d3d6487fff2df3a3f2f87376"],["/storyAppPrivacy/index.html","403a5627d33ff8bf511f0e784feba6b1"],["/sw-register.js","634d6964c36b32e49734924b6bf3566f"],["/tags/Advanced-Classes/index.html","935cf9f84ee4398a1db9288aa9aa4aea"],["/tags/Advanced-Swift/index.html","e33c4ebe7428e5d2d9408ba124392577"],["/tags/Advanced-Swift/page/2/index.html","45c3c0cc4ce19ef8889b23a89c68afce"],["/tags/App-Architecture/index.html","3714f0c8333994dbd28f5e9cb1bec9ee"],["/tags/Array/index.html","c24368b8ac7f606287b472317c8ed2d6"],["/tags/Arrays-Dictionaries-Sets/index.html","7ac536526a1c8b7fae7d5fbf07655cc3"],["/tags/Authentication/index.html","129b62a27ad3d9b96dfea82d021fb3a2"],["/tags/Build-in-Collections/index.html","ff18aea039d8b543a8864bf7ba1efa2b"],["/tags/Building-Your-Own-Types/index.html","f3a7c8c26afded876ecc9d0503e24777"],["/tags/CMS/index.html","af27e21ca02ad548cd71d81cff77be84"],["/tags/Classes/index.html","95c9488e9fc8e51eedb972af52d81ff3"],["/tags/Codable-protocol/index.html","31198d6f53ccc180fa32f722a59a8239"],["/tags/Collection-Iteration-with-Closures/index.html","7b2ca7317b6216c2c4ca4be4b48eded4"],["/tags/Collection-Protocols/index.html","ec9ab926abb34253c483475e53c46b1c"],["/tags/Collection-Types/index.html","ad0adf00cdff06cc9c02696b30c334de"],["/tags/Collection/index.html","fd6a980b7ffecdf7b58763d89c0c5285"],["/tags/Collections/index.html","a709c8776fac8c1391d95f033e961960"],["/tags/Combine-framework/index.html","2e96782a0f95c372f0357319558731c9"],["/tags/Combine/index.html","c81b1894b700c5196499f9f66bd68344"],["/tags/Dependency-Injection/index.html","e3ec20ed0c687db799aaa0bea5105a23"],["/tags/Encoding-Decoding-Types/index.html","ac3cafbb04ae77735b86b950d2a26bb4"],["/tags/Encoding-and-Decoding/index.html","a8a664bd7c54e6de1a150805bc1d57ed"],["/tags/Enumerations/index.html","4e2361bfcceb993e7f1d378998a0f271"],["/tags/Enums/index.html","e531dc229d81f4f604dfbd959c6b393c"],["/tags/Error-Handling/index.html","6e8f2c4947d72f8cf70feaa271f7d9f1"],["/tags/Functions/index.html","eb735967c12852ce2a61c132bf79ec8e"],["/tags/Generics/index.html","5c21e22fb841f4836d3881626d29f0ef"],["/tags/Go/index.html","3100f160cb6bb157ba2c0660e8367761"],["/tags/Grand-Central-Dispatch/index.html","3cdca3b17610e65151e67fe7c95ac447"],["/tags/Hello-Vapor/index.html","1b45703c3e992955741c569139399846"],["/tags/Homebrew/index.html","80758d0863c77bd7dc903d4fc318311d"],["/tags/Interoperability/index.html","31e30bf6421b71535be4add8d2fe71b5"],["/tags/Introduction/index.html","061c4eddf8e429ec5c09c9f1b2c34b47"],["/tags/Leaf/index.html","d303349b32b1a724596feb9c624a5975"],["/tags/Linux/index.html","26d4dabb33e985e5d01cd3ded87f71c6"],["/tags/Methods/index.html","bf009873f6a960801559029b6d64f6f6"],["/tags/Modules-And-Hooks/index.html","27615c5aae5f2cb39098c7768b63c7ae"],["/tags/MySQL/index.html","56ba1a8b289cbe75479de9295bf061c2"],["/tags/Optionals/index.html","f09423fafe24bf3d97865cfb2f446e6e"],["/tags/Promises/index.html","d361e7d18de91c241099762c39a44741"],["/tags/Properties/index.html","5f21fae06adf89b537d6fb85e9c80b66"],["/tags/Protocols/index.html","4d71c6cd25cfebfca6e6d70b6f984acd"],["/tags/Result-Type/index.html","53f6fe969f061b63094bee6f64c20775"],["/tags/RxSwift/index.html","2228470752c40741092414cd9af47c9c"],["/tags/Server/index.html","a357d1891a87c31ba16ff21183b3b9bf"],["/tags/Session/index.html","d21c941aec1f295d0ba9a7906d1fa78b"],["/tags/Strings/index.html","37b411b222c6ff64215b7c8d268a15a9"],["/tags/Structs-and-Classes/index.html","368a5297191ab97c707f011bfd6a0048"],["/tags/Structures/index.html","34aa5e4ff66afcdfad8264ec21e5412e"],["/tags/Swift-5-0/index.html","0da36dc465501b08c2fad3e61054bfe7"],["/tags/Swift-5-0/page/2/index.html","54b1d70adf6eddf4d63d9b13419d4d8c"],["/tags/Swift-5-0/page/3/index.html","c98dd63d0f0a61d555fdf73cfe29086f"],["/tags/Swift-5-0/page/4/index.html","e5b4d8e048961446aef073fbb033b3f3"],["/tags/Swift-5-0/page/5/index.html","47654f79fe465693273e8e0d75dc784f"],["/tags/Swift-Apprentice/index.html","819af8a2244b4adb2c56f7d71fd6781b"],["/tags/Swift-Apprentice/page/2/index.html","236bf3981e1040a6bdd0958c6cb2d4f5"],["/tags/Swift-Apprentice/page/3/index.html","dc6fdd7d75e38b9d4d182df66db9a915"],["/tags/Swift-Package-Manager/index.html","ba8f65854491b052a33b7e6e72ffe87f"],["/tags/Swift-源码阅读/index.html","84b456477164f92b0cff048cd42c7f58"],["/tags/Swift/index.html","7ac034a50975e9a732def6a9c60b5852"],["/tags/Swift/page/10/index.html","ba110cf4c2cde41c5a8299d48f535b1b"],["/tags/Swift/page/11/index.html","e4d6938c33a4218e32ef4494059d9e0a"],["/tags/Swift/page/12/index.html","3397e64568dd5a6123ef3d14dd180bdb"],["/tags/Swift/page/13/index.html","3846022c0ec4e0f6268b72512ef33562"],["/tags/Swift/page/2/index.html","78ff9da1dd3c51ac760bc898a4f7cffe"],["/tags/Swift/page/3/index.html","691d081779eb49578369a62042ccc9ad"],["/tags/Swift/page/4/index.html","925fdfca7a290a87f289944ce6946871"],["/tags/Swift/page/5/index.html","22099c9f22458c1a21971034383590f5"],["/tags/Swift/page/6/index.html","c9d9fd41dba5b141caaf1edbad009b17"],["/tags/Swift/page/7/index.html","c7b13ba50eaa879225ea7ca678c32b78"],["/tags/Swift/page/8/index.html","a3b0ffd0320666ea1f391c1e7165c441"],["/tags/Swift/page/9/index.html","38c0493fc4a75d9d8eae3f8508c305cb"],["/tags/SwiftLint/index.html","1b3156def8284711048a419a947681c1"],["/tags/SwiftUI/index.html","b048af8dd854cf50c395ca5bdc98a043"],["/tags/UICollectionView/index.html","973f06d43879e307bed3c7ee87bd6f6b"],["/tags/UIColor/index.html","4084f6da953b765dc0e9875f999ca6cc"],["/tags/UIImagePickerController/index.html","241a3097f386aef51cb55235475ec9af"],["/tags/UIKit/index.html","d0ffb9f0de306b4c225a91e3a9754375"],["/tags/UIKit/page/2/index.html","c0bc05543b076aa9fcf8f329f285b037"],["/tags/UIKit/page/3/index.html","ae60b8c50f6b325b05c64d5ec1f35fd7"],["/tags/UIKit/page/4/index.html","6e9ad0c16f46cee4fd8cdfa02daa0253"],["/tags/UIKit/page/5/index.html","a0c4413036947fa4655950d4c2b82777"],["/tags/UITableView/index.html","6650362a489742ca6015a324833bccee"],["/tags/Ubuntu/index.html","034530767f680b76c6ac9d08db0b0301"],["/tags/Uniquely-identifying-views/index.html","4c7ab2539ebe56587aafa111fb26c0ec"],["/tags/VIPER/index.html","0db1b45973a80e2d29adecfa0364681e"],["/tags/VMware/index.html","36760feac7822d870e110a7c07184f41"],["/tags/Vapor-4-0/index.html","1fd6054bc0602adff8cd88e5a9476f3f"],["/tags/Vapor-初探/index.html","b55b1027cf651d0a145744c8396c102f"],["/tags/Vim/index.html","07f51e8a27abf723ad73a9578125965b"],["/tags/WKWebView/index.html","5fea5e862f10da1e30c4e36208dc24f7"],["/tags/Xcode/index.html","94c1a4387d6da7cc2b025905e2b8248d"],["/tags/appleOS-Networking/index.html","7a9f59f4f74c91f9718fb28bcc0846ac"],["/tags/bugly/index.html","b160b0ebccc66b754396da6cf72da191"],["/tags/enum/index.html","e1db48725026128fca22d9035b08bdd2"],["/tags/git/index.html","9fcbd85d9ac95ed9f7b0594a3f6bca7c"],["/tags/hexo/index.html","53cd348579b17da79dca560f537219cf"],["/tags/iCloud/index.html","eda8615195ae6f9bda9addb7ccda2442"],["/tags/iOS/index.html","523dee3947d6b1434fe09cc1ffe8b15b"],["/tags/iOS/page/10/index.html","99250317d05fdd271c13b8776e0c5bdb"],["/tags/iOS/page/11/index.html","79a773137ff67a2e6882c113ee1f0c9d"],["/tags/iOS/page/12/index.html","5c314697d28be4ae1b2f49a5e80ffc98"],["/tags/iOS/page/13/index.html","e0e381b56317de511a67368300fdac4d"],["/tags/iOS/page/14/index.html","eaef8f8cdeb9c3e03832c834c637200f"],["/tags/iOS/page/2/index.html","a40b2314f5408762144d04feb8097711"],["/tags/iOS/page/3/index.html","96456e54ed9e2c5652b4a62714796ca7"],["/tags/iOS/page/4/index.html","c63bc1b7eb9e23cfd2d25aef6a8fc8f6"],["/tags/iOS/page/5/index.html","055ff81baddd0e54b197404cfde7603a"],["/tags/iOS/page/6/index.html","7392ed5141fb5c65c688f215495e6fc8"],["/tags/iOS/page/7/index.html","1c1696f465db572b908b91f206d01424"],["/tags/iOS/page/8/index.html","0bf31735924e3bf1912e2bc420dd2659"],["/tags/iOS/page/9/index.html","d5065482f194cee32bb1af41b1e84256"],["/tags/iOS面试题/index.html","0584ff1275546ca5bcff0312cd0d5af7"],["/tags/index.html","e555820eabd7461c61161e708c670ca7"],["/tags/non-optional/index.html","07ad2fc00d6372e3e13eb2a0d9835093"],["/tags/random/index.html","629a46ae2c066a74d72f611af4aa7a57"],["/tags/transition/index.html","c0cb5c237fe4741a8f3483a691ef1a04"],["/tags/三方类库/index.html","fe559508e84634f92e53d1d294528ddb"],["/tags/依赖注入设计模式/index.html","355bf208c26d9bf639bf0c92b2f945af"],["/tags/值类型和值语义/index.html","933503b5f6ab212725525e88f3e32085"],["/tags/内存管理/index.html","df2f6ed80f7c7649545f5ae587a2efe6"],["/tags/冒烟测试与回归测试/index.html","3c908511a403926d5a46029d7ba4e4b8"],["/tags/函数式编程/index.html","0b6755bf3ab31c60e9505dea61e4feb5"],["/tags/创建博客数据库/index.html","d4f68c3a1dbaca56a250782ef0700628"],["/tags/初始化模式/index.html","45ce6accef1320c9d82984d4ea4de477"],["/tags/单例模式/index.html","cdfd254cda2bda521915bed215b9e82d"],["/tags/原型设计模式/index.html","85d689d99c3a71b9542f1679b181c643"],["/tags/命令设计模式/index.html","9c33fe1aac6b8ba57906f09b1fd2f906"],["/tags/基本控制流/index.html","530ab6fb740ab622ae4421f48808438f"],["/tags/外观设计模式/index.html","6f2be1b0c2da3064b6bb5d4863b7c513"],["/tags/委托设计模式/index.html","7f288b49ce42ca99758c3d2e2e654a54"],["/tags/子类化样式/index.html","7616a615719f2f2069d9ba99aea906bf"],["/tags/对象池设计模式/index.html","764e676b90803a7e9123300eb5d2a992"],["/tags/工厂方法设计模式/index.html","204cf77f8144128d58172bd01c6fa35a"],["/tags/工厂模式/index.html","427e9afe01f081067e66c6af0e177728"],["/tags/工厂设计模式/index.html","b7f529386fc0d84a856063b591b66d02"],["/tags/开发技巧/index.html","c8a66490f6581d17acc626d09105a40a"],["/tags/开发记录/index.html","16f1fd9bb51af4a989d18cf2fb5eb995"],["/tags/懒加载模式/index.html","07c3c765db6d4466930a705605931871"],["/tags/技术支持/index.html","f48ae423e2f54e9063beae33827b56f8"],["/tags/抽象工厂设计模式/index.html","2c148d990075419c1c0aa7cc1be84071"],["/tags/数据库/index.html","fb464b9bc2a6282132ebf9f42e1907d1"],["/tags/构造函数/index.html","09d7ed0608c38d9e38d6073685b8110b"],["/tags/架构设计/index.html","c4ac3aeeabf3f85051f228d45d9fae5e"],["/tags/模式匹配/index.html","8b419270e7bd6fe0d6d199a1744e94f6"],["/tags/生成器模式/index.html","03b5e37d8baeaf4bdbd8a4deb89e8475"],["/tags/用户体验/index.html","6adc358813e88e4b801a9120ab2750dd"],["/tags/用户协议与隐私政策/index.html","6be9f83537ed2457901430b39581685a"],["/tags/类型与操作/index.html","6cad2900be7646c5658488e691266f80"],["/tags/自动化布局/index.html","40d3fd8fb054aa09c5292e2918d11ddd"],["/tags/自定义UIView/index.html","acfe327deee245ab80a72b706c195db6"],["/tags/自定义转场/index.html","1e7af935618b10258bc64bb2ef119948"],["/tags/自适应布局/index.html","e826ffd54d0e70095c52cdd7de6d8046"],["/tags/表达式、变量和常量/index.html","50560d8bf4f9300b92e97867e3ccf41c"],["/tags/设计模式/index.html","a77b945caa01708b8e724820ae3bb9fe"],["/tags/设计模式/page/2/index.html","0c9d01c2b9209d7b924337da45020ee8"],["/tags/设计模式/page/3/index.html","177f411bd9730a5ae8b0d727bcc376bf"],["/tags/访问控制和代码组织/index.html","0cbaa26c80eae4ce34de876a856b2a58"],["/tags/运算符，下标和键路径/index.html","aae6536774a54a46e8894a5006cfbdbe"],["/tags/迭代器设计模式/index.html","3646546c615e511672af960ce4bb3b3d"],["/tags/适配器设计模式/index.html","fb8528ebc4aac1e3ed8e7fde5c12cdf5"],["/tags/错误处理/index.html","c263b297dbc599188fcadb929a916d13"],["/tags/静态工厂方法/index.html","9116cc1325f2670ac62d48d032160dac"],["/tags/面向协议编程-OOP/index.html","fcb2c065b9051713f387f1bcb7750b0b"],["/tags/高级主题/index.html","32f98278445d5429924be9bb0a63c139"],["/tags/高级协议和泛型/index.html","2ac7c5c6d90c2f50654df04b297d4d0b"],["/tags/高级控制流/index.html","5f0527a88b6d8a349b4e8a6da4bb94dc"],["/xcode 常用的快捷键/index.html","f3c08f3a2ccfba114b0765168737c4ad"],["/为iOS应用构建输入表单/index.html","87e3574a38c8b598990d4306115924ba"],["/产品开发的幕后花絮/index.html","492de2d1dc3a62143fbff5bb25d86213"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","b86df74db73ea2558b667bd2adcee161"],["/冒烟测试与回归测试/index.html","4bb64b39dbac1d581e9c2180d58adbc0"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9031691462a9c50c9bef952570a2d0ae"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a498799315a9bbeb24ccbcd58eff85a3"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a0a677d7725cf28d4760ec6553c1a117"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b7dfd90da44b036fd4ab4b64726eafc7"],["/在Swift中创建自定义集合/index.html","2b45def22324c8f1e5def1459f9b303b"],["/在Swift中处理非可选选项/index.html","b37fa5ebbd17e0901165eb6bb373a329"],["/在Swift中生成随机数/index.html","f3ccfcf3e1b86a7303115c961c7a9f4d"],["/在Swift中重构单例模式用法/index.html","82b7d7f91ab1f3404edb8a6622d0d956"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","b32d1e592a20dc650a55f6931f21f7bc"],["/如何为VIPER编写服务？/index.html","58b15e74ba959e6842e3225a342efcb2"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3b2e328cb0db83dc217b7dd996bcba3a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","7eb405b349a0716cefdc7fc7d475fd33"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c5893bef19121df1e1076bd2bf860940"],["/如何使用VIPER构建SwiftUI Apps？/index.html","37e4b57a7be396b5a332ba083989ce8d"],["/掌握VIPER架构/index.html","341f14512da77c2fbe527c05a7ad0cdc"],["/揭秘 WordPress Hook 系统/index.html","54e076e4bab99e2a1c71d4eef965bef7"],["/比较工厂设计模式/index.html","70faa61c98c5d21da5c3c304f0fb445f"],["/深入了解Swift中的Grand Central Dispatch/index.html","1fb6953704ab6d9ce7eb2b44684e1ec5"],["/深入研究Swift框架/index.html","245bbb353c9473bd39cda89fe0a5075a"],["/美豫直聘技术支持/index.html","4c5b7e4e6e7cb5b0dccd2973102442c1"],["/美豫直聘用户协议与隐私政策/index.html","672a176ccdb438c01101f675e325c648"],["/适用于iOS开发人员的VIPER最佳实践/index.html","72b362f9a6b7a65a1296ffbb94be09c2"],["/选择Swift而不是Objective-C的5个理由/index.html","f4fde721e9f19493799375e0909831c8"]];
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
