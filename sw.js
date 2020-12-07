/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","b6b8a84868ed76995b0de6a97d448be6"],["/2020年iOS面试题总结(三)/index.html","59ec356b1e100ac7f9e4434383bb7efd"],["/2020年iOS面试题总结(二)/index.html","923c65c0edca051a578931ddc865fb82"],["/Advanced Swift系列(一): Swift 简介/index.html","18f2661aab3a607ff8d49dc51c2f504c"],["/Advanced Swift系列(七): Strings/index.html","0f7895492d519731a4ba78d1e28b1e7d"],["/Advanced Swift系列(三):  Optionals/index.html","ab637861a68a8d65a4d09f6bfe2b0005"],["/Advanced Swift系列(九): Protocols/index.html","af9b9bc07b6929b1d1c1728c6aee37fe"],["/Advanced Swift系列(二): Build-in Collections/index.html","d5cb496fbb7143f0261825757c847695"],["/Advanced Swift系列(五): Structs and Classes/index.html","b09289aa55a3248bff5cf7db03b0ece6"],["/Advanced Swift系列(八): Generics/index.html","b282f1e53710110fe781716ae54b55ea"],["/Advanced Swift系列(六):  Enums/index.html","5fe296a48a13363dfd46dd1c56aee5b9"],["/Advanced Swift系列(十): Collection Protocols/index.html","4038029043a927e59d570aa1f75a4342"],["/Advanced Swift系列(十一): Error Handling/index.html","bdf4e491e02e87b3f67501af55d5ecfc"],["/Advanced Swift系列(十三): Interoperability/index.html","d4db731da860d005842f779b5c3d7e76"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","57d474e4669866248e17d5bc0f938ba3"],["/Advanced Swift系列(四):  Functions/index.html","b9e1f51466f6b016861af8b195ced691"],["/App Architecture系列(一):  简介/index.html","a605f18259c12f1c2cac1be8c3d310e3"],["/Functional Swift 初探/index.html","d20fb92e10dfc24a731fb1cdabe080bc"],["/Git 使用小技巧/index.html","f8cfce299c8a4fcd9a1f28e840ba63ae"],["/Go 基本语法初探(一)/index.html","e09a0aea355ce3ed4d468593b648c393"],["/NSCODER和SWIFT初始化/index.html","4704a973362e9e9deb83f2813c8fc1f6"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a824e0ae52c1e7750fa3755244511a76"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","70175fc97f5ab8a8cfa5d77b15de92ed"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c94c26709a30a35d91bce474639698e1"],["/Swift 5使用UIImagePickerController拾取图像/index.html","44738a58ff8b13d5275eaf7889aedb15"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c56e761e782ef887c12e499aef5cbe7e"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","e2b19cdb0ae338f0414c6b9e96d1a092"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","d81e3addc7f14c463cec1cfa47d5bd70"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","076ed208d13a24f3e41a1c1c72be8cbe"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","657f0a8f00106051b2a13416abf3d1a0"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","81774616d956c9f3b6f3d389f0263200"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","57805d7c74406309cde1df1745a2396d"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","e24b35048463e958cc39bc23c8784f19"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","83ba2093762246d838c533161b7e6e1e"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","d1b224f1f05254407ae0660e08b7a6ec"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b4266086df388aed34e93b3dbf762e0a"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","eff0e25e98fa74943714021a64da61f7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","166dede5a3af772dea76ea8f532ee301"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","84292d757f5446f450b2dc9c46af4917"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","956f62b5884d5fc14406a8ef2838a02c"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","738ef91aac390b86a8bbea3455582b91"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ccfd4479fb721647dd48e9c76e26c568"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","e5eefcf0dbf201732eafcd8af952a1df"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d7e658f017a5969995c58c572826733d"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","be2801f74f6263621e06e588c2605e88"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","08733fe4da897dea511fddf72d4b21d3"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","0f28fc47612cb72600e70873601e0548"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","b682021cb1fc7d7df8895f5b0a2f9837"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","93cacf4ea2e36434d29f4bee3944ca18"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","52fdb4047404ab56520fcbc3075cca51"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","9d612736121117f80857a7c77ebb4582"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","1335ddec9f27072a8e6692c007a6661f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","491b8bbff6c15183bb151fa7d74df5cf"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","8b2ee1655484ea251a50701c7134c395"],["/Swift CompactMap vs flatMap：差异说明/index.html","078750fe94f0f127d2e904b4d30a53ed"],["/Swift Grand Central Dispatch 深入实践/index.html","c256c449d6b3a51c94c86637af070aca"],["/Swift Lazy属性初始化/index.html","a021a8a3e91662a1a14429756c23c217"],["/Swift Promises 初体验/index.html","f0fc278dd6823fc8a068759dc7b19330"],["/Swift Promises 探究/index.html","82e73f07428f3f23cf2b5da878718bf9"],["/Swift UICollectionView使用指南/index.html","0732bad62b8ca097a6bd000c618292dd"],["/Swift URLSession && Combine framework/index.html","67c4e201f8c7cefa49ad8eeec638fce1"],["/Swift 唯一识别的视图/index.html","7315a1e0ac0fe88e6c78eedddf5ecbd4"],["/Swift 如何学习现代UIKit？/index.html","06a2da87072f24d48e3360b11b3dbdb9"],["/Swift 用 compactMap 替换 flatMap/index.html","d29537a850015940e4fd7dd4f4fbbc00"],["/Swift 选择和播放视频/index.html","71654fc2281f4ac01849f11a90d18e74"],["/Swift中UIColor最佳实践/index.html","ab64fdb3d4f7850313669e47085f0c6d"],["/Swift中快速简单的工厂设计模式/index.html","628b4981e8bea150bc587c0857ed9713"],["/Swift中构造函数与静态工厂方法的比较/index.html","2b4576fb4d9259ce56546b678aa05f37"],["/Swift中的UITableView教程/index.html","02493f0c4848b21dc251887d15cf0d90"],["/Swift中的懒加载模式/index.html","83dbe001d1d9c88ad6573b0b78bebca8"],["/Swift中的模块和挂钩/index.html","1c882d4bdbfdc703faeac834c2644e00"],["/Swift使用布局锚点添加约束/index.html","9d12f4e63b1a327d61e949d77be6b6ac"],["/Swift依赖注入设计模式/index.html","5df36f6d6ee166624f0a453a671db69f"],["/Swift关于Dependency Injection (DI)/index.html","5509e0833ea008f24e57ca274eb0bfa4"],["/Swift初始化模式/index.html","d331a7cbb4b6f3f2c5198c856e134954"],["/Swift单例模式/index.html","94ff50d66ca9e7f3ba37f33507fcd2d5"],["/Swift原型设计模式/index.html","8fc1181a0e171490e023deb997a021a3"],["/Swift命令设计模式/index.html","4d2f75f0ddfe73477cfaf6e6a99d6b33"],["/Swift外观设计模式/index.html","dcf7b1c107e2acac16fa1f4bb5f748b8"],["/Swift委托设计模式/index.html","35b5d37bb2895c96d8ed36ee6b8e39d8"],["/Swift对象池设计模式/index.html","1f9cbd33cb34e8f534831e6f290dac90"],["/Swift工厂方法设计模式/index.html","44af018aa00fe6a9cf6e969f34120fec"],["/Swift带闭包的懒惰初始化/index.html","74f42817023a993be8cb4da6eabed815"],["/Swift抽象工厂设计模式/index.html","41e544c0813ca9d123d443b5a17d85a6"],["/Swift掌握iOS自动布局锚点/index.html","00908db291d3b2e3e66a440bc334f8a4"],["/Swift支持旋转的自适应单元格/index.html","bad9e996b8966996369a2254f6b9608d"],["/Swift枚举值/index.html","0be73b53cd2cd4c0e90065cdad6d248c"],["/Swift生成器模式/index.html","7842af0c6a248649395512e49cc678c8"],["/Swift结合Xib文件自定义UIView/index.html","2935aa0f739fe53f7ae5654d6f57d2a8"],["/Swift编写的20个iOS库(一)/index.html","ffff434eeba2a2112d16be49c8b49cdc"],["/Swift迭代器设计模式/index.html","8f7d07499e2760b233fa2a2c9f7d4183"],["/Swift适配器设计模式/index.html","2be8855865585ad3e1a91d2451c6439a"],["/Swift静态工厂设计模式/index.html","42664c6a8e0d4b9aeae4a03d8ba29490"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","55543696331b7015ab2a83ed3b1cf121"],["/UICollectionView data source and delegates/index.html","b2f0d9dd2c00a5a2e02b7f1fd3bcac87"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b59b6b00a845df0aa8951e47e6a75e4e"],["/UIKit初始化模式/index.html","4dfd03f4b1055c1afbfdcee3717c3729"],["/Ubuntu18.04替换国内源/index.html","e74dcf38a650fa3522983f49915709d5"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","00478f0cb45cca0bee24711c3a568b80"],["/Vapor系列 (一) :  Vapor 初探/index.html","6c390b0d5a879b5e021c1f635caec2fa"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","0590e7b6fac06c6e53ab6d45d61da103"],["/Vapor系列 (二) :  Hello Vapor！/index.html","023b1c94c4f148897130410bbf69eb56"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d490f567062474cebfd2175049a63c49"],["/Vapor系列 (四) :  创建博客数据库/index.html","19c8de389ed9c7dbbd901eddc351ee7d"],["/Vapor系列(六): 徒手撸一个CMS/index.html","cd8e8cae4dd917dfb03e23776cc735b0"],["/Xcode扩展/index.html","6a22888c6a109a61f8e30260bf4dba90"],["/about/index.html","66463d253fb19db2bb571c9f5febcc11"],["/appleOS的Networking示例/index.html","d6cbac327ddaffe68db1819aeb9b29a6"],["/archives/2020/03/index.html","899ea41680cf97274e61e76c1d7da3bb"],["/archives/2020/04/index.html","aa2bc804858bdb3af3d3891aa9634cde"],["/archives/2020/04/page/2/index.html","75a9029a577136883b8eb70a7725d29d"],["/archives/2020/04/page/3/index.html","d13c4204ca950b9de2a5009ca5f23bb1"],["/archives/2020/04/page/4/index.html","b5491c87890586b9a9ea9919d1b950c6"],["/archives/2020/04/page/5/index.html","2efde40d2c715aa9d2d93c8699c151ae"],["/archives/2020/04/page/6/index.html","8cdb47a745cc04f13cfc4786a8303fec"],["/archives/2020/04/page/7/index.html","57286b3e6a9177a7f6bce16a19527c8c"],["/archives/2020/04/page/8/index.html","ba00d7ccc98e5406be0a8b6119407975"],["/archives/2020/05/index.html","dc8d679b9ae680f0a9e1e7ad7615cf58"],["/archives/2020/05/page/2/index.html","f127958a149dbbca71bbbd7edc8d6c0d"],["/archives/2020/05/page/3/index.html","8c57a34cc7be639060b66366e410e0fa"],["/archives/2020/05/page/4/index.html","5c97a1316a2a85b31bb6c0623f07615f"],["/archives/2020/05/page/5/index.html","e198f8d391d815e51db6ee7783f07069"],["/archives/2020/06/index.html","bde695101db2b256e4d86f0abd293060"],["/archives/2020/06/page/2/index.html","3d40802f317d06e6185bab7513398ec0"],["/archives/2020/08/index.html","97706b116f1dcf6f7a61fa8a59176442"],["/archives/2020/09/index.html","3056c1cb6eb2dd0511d8d55c196bbaea"],["/archives/2020/10/index.html","2f23be3ddbcaadf3d67558957bdb0971"],["/archives/2020/11/index.html","027590cbcbc51af97d18fc31deea2713"],["/archives/2020/index.html","1646ef7d5860d5e993359026c404978e"],["/archives/2020/page/10/index.html","07d1bf742c7d36a1c7740fbf3b13039a"],["/archives/2020/page/11/index.html","65e98ce9b41d2d487ef833388eb95e38"],["/archives/2020/page/12/index.html","81c544625df6ba5bfb4d3e844a2a9563"],["/archives/2020/page/13/index.html","b7dc1e9cb932ab8a849265133b74b611"],["/archives/2020/page/14/index.html","73853dc03bd9fd000ee32b5953314500"],["/archives/2020/page/15/index.html","6448a919b83fb23b7a3d1609d8e4b621"],["/archives/2020/page/2/index.html","5103657cd2e0ef2cf307df5987bd9c90"],["/archives/2020/page/3/index.html","9802c3bd36b716156c5837c99b5536d6"],["/archives/2020/page/4/index.html","aa71513cbebe01076065e9615a37c74f"],["/archives/2020/page/5/index.html","41694fb011545780d03b525de6cf5fea"],["/archives/2020/page/6/index.html","38a55bda023611b72161af17f68ebf72"],["/archives/2020/page/7/index.html","65b1ced60f88035ee7bdbc4970fc3e7f"],["/archives/2020/page/8/index.html","024e7b2a08ba91e2f521e2abae260217"],["/archives/2020/page/9/index.html","c41df31644ad5ede2ed9df9d4a8d8f19"],["/archives/index.html","2bc3814f0b9e8346bb2a4286d86a61cf"],["/archives/page/10/index.html","81156c8ec2f782ff91187351fb38f2d3"],["/archives/page/11/index.html","b00c53e03aac7236f917b626c12a8610"],["/archives/page/12/index.html","b931a27693f2162648c5aef4d146921f"],["/archives/page/13/index.html","72447be228fdb116d12c8017ebeb37b1"],["/archives/page/14/index.html","4f23bcd4253bd4aaca9e94faa5762174"],["/archives/page/15/index.html","c7800466c0ac57b44f17a31d4c99cb4c"],["/archives/page/2/index.html","cedefaf67e2b2b66fbe61cfda850e777"],["/archives/page/3/index.html","2a291d92e9a69a36843f53c7b568ef9a"],["/archives/page/4/index.html","fb831c8b8b0087f7de90dd1b3abd093d"],["/archives/page/5/index.html","628844a47c310f361a29ebca16cf1fb0"],["/archives/page/6/index.html","8b8f809dfc06b3b712a73d548e7f082f"],["/archives/page/7/index.html","473eb1acda2a0e081679824a963f3014"],["/archives/page/8/index.html","844f9e37f922f6183395504efe69b079"],["/archives/page/9/index.html","1082335707944440a3086c97778d74af"],["/bugly 上传dYSM文件小记/index.html","4222af171615755463be4102f06cd897"],["/categories/Advanced-Swift/index.html","974b120d4c606a6a3865a84763039eeb"],["/categories/Advanced-Swift/page/2/index.html","83eb012f9686e0c1ee336b5a81eb3c09"],["/categories/App-Architecture/index.html","206a5986e6fc4d683919769775035edb"],["/categories/Codable-protocol/index.html","834f5dbed06f532937ebafda4b99148c"],["/categories/Combine-framework/index.html","35297ba23094e07d92b390bf5f99b2f7"],["/categories/Combine/index.html","8996a2e38e32ec74c9739e405cd4f4d6"],["/categories/Go/index.html","5d23f194d6771d5cb4670ea4d2dbca41"],["/categories/Grand-Central-Dispatch/index.html","4d8807e42418ed1bf1f66e1f6a4dd41f"],["/categories/Hexo/index.html","2a8c8dbd6558c37ec45662906e014c29"],["/categories/Promises/index.html","81833410a850df37d542a64cb3c1a764"],["/categories/Result-Type/index.html","21f58f5d53c6be89666569622eae296d"],["/categories/RxSwift/index.html","c023687f0414ce87296c92e5a4f84108"],["/categories/Server/index.html","bf287122d1a747d8b983a1416010500e"],["/categories/Swift-Apprentice/index.html","91c09dea0c9390cd1306c9c89e55eff0"],["/categories/Swift-Apprentice/page/2/index.html","86f7c154e25357929ac109a631fd1075"],["/categories/Swift-Apprentice/page/3/index.html","f629480a5cb788719aacf99223ce723b"],["/categories/Swift/index.html","d9984b47e09be35cc9397e4a156e1e7c"],["/categories/Swift/page/10/index.html","53d4636a44160fbaa899b38be1b64753"],["/categories/Swift/page/11/index.html","8cfb94fdc05020e47cfc6ac576a84b81"],["/categories/Swift/page/12/index.html","9e312c950746177654111796f6f678fc"],["/categories/Swift/page/13/index.html","61e603dec156fd63d29aa02f8f355b91"],["/categories/Swift/page/2/index.html","a7e78012abafa8e221592cddf1eaa1c9"],["/categories/Swift/page/3/index.html","8c852eb02734051c58e4808f6e05e025"],["/categories/Swift/page/4/index.html","00e3b4a64c0b294f26f94108cc36d6af"],["/categories/Swift/page/5/index.html","66a53e55def6b29985eec542eb99ca20"],["/categories/Swift/page/6/index.html","5877bc4d905a42d25b0a1a6d19a616e7"],["/categories/Swift/page/7/index.html","ec0ec002b0fa912d78df1bc4873b019f"],["/categories/Swift/page/8/index.html","345167ec5c2f270dd7ee21e706bfb7c4"],["/categories/Swift/page/9/index.html","28c51969cc0b04ec18bae225ec84fcc3"],["/categories/Swift5-2/index.html","94e3807c95b3ce0efd8c618f6e80f1e2"],["/categories/SwiftUI/index.html","0022c89df7f61737c960f547a3406321"],["/categories/UICollectionView/index.html","537975d10ecd8baeabe7f2a75092a272"],["/categories/UIImagePickerController/index.html","3f7b1604574ff7591b073530cc75fad5"],["/categories/UIKit/index.html","6f8f48b5997d14b1aea715bb786d7e70"],["/categories/UIKit/page/2/index.html","9b9fbb497a85740b46f8deb43f5223b9"],["/categories/UIKit/page/3/index.html","a5ca0e14fc714c6dd9a4d19d0e9e1462"],["/categories/UIKit/page/4/index.html","aaf024128fba3868bd2f857da6e0da60"],["/categories/UIKit/page/5/index.html","9ae17b7d209056dd3b6527850f2111f0"],["/categories/UITableView/index.html","393706d531aa5c4ccf6d2137f75812a6"],["/categories/Ubuntu18-04/index.html","96268ff8d5931d1ca0cf8aee4cc38bbc"],["/categories/Ubuntu软件源/index.html","69e8f65b91142d511afd8e0a1b02a5c2"],["/categories/Uniquely-identifying-views/index.html","2936efb84c6c880e6f6fc1897ffd299d"],["/categories/VIPER/index.html","818564acfcc85208455e73f0ac2471ed"],["/categories/Vapor-4-0/index.html","05179d0c45bf4b64898cedce4e689a8a"],["/categories/Vapor4-0/index.html","0e6f7e72db24984bdbc4e3aa9d71d092"],["/categories/Xcode/index.html","edc13ded49e4103354ac4a02bc662a70"],["/categories/appleOS-Networking/index.html","b6a4c01f5486b7d2ee14ec50990528d1"],["/categories/bugly/index.html","a323978ab9391bb697e689c80b7a3d0c"],["/categories/enum/index.html","582a31f2f57e4acdb40d75258d9a2cfb"],["/categories/git/index.html","d12e9ef3a82882acde8caaa393df091c"],["/categories/iCloud/index.html","4ee332370c482d9aa1ed528bbbcad29e"],["/categories/iOS/index.html","937ab71a3d0a18da52b3098c1f41ff9e"],["/categories/iOS/page/10/index.html","b4f5cda3c3dc7cbad65d596392418453"],["/categories/iOS/page/11/index.html","a1b219f1f1003bf9926d5166d060e443"],["/categories/iOS/page/12/index.html","9fac5be972e2f96b5bcb4acf5187e463"],["/categories/iOS/page/13/index.html","1d24ebc8175a0b04d14a090ea7105140"],["/categories/iOS/page/2/index.html","3187cddb83b10b8e7663d6806468cce1"],["/categories/iOS/page/3/index.html","008d905072839f18d85ccd1dbb9ab2f9"],["/categories/iOS/page/4/index.html","d73573a33cb86002877972a16dac7445"],["/categories/iOS/page/5/index.html","8eec8f6d48e8ff08f9f4173132cb07cf"],["/categories/iOS/page/6/index.html","b26d0dc57bf3f5ef8a988742faa6260a"],["/categories/iOS/page/7/index.html","7d6d9124a85bbaa71cacd0e31127e2c8"],["/categories/iOS/page/8/index.html","71fef9977ba1be5dfc527bf812662862"],["/categories/iOS/page/9/index.html","cd782917fe447bbb0356dd2d79c3d047"],["/categories/iOS面试题/index.html","72b894811bc86a247309ceb60b08ba72"],["/categories/index.html","34285487cf2ec3b35569f2d662a9a0e0"],["/categories/random/index.html","7bcedf9de9410c86375cf77edc188ad6"],["/categories/三方类库/index.html","94f5d50e3992c8866cc14383bdd797f2"],["/categories/函数式编程/index.html","7aaf519b7aa869dea28a573b9b9430f0"],["/categories/子类化样式/index.html","6e632667a3bcfcce287eb7268bcf02fc"],["/categories/开发记录/index.html","63c10477f715123773d69c5d3f332672"],["/categories/技术支持/index.html","2b0e909f7c3f1e8ba78cd52921e144cf"],["/categories/架构设计/index.html","442fa5fffcf7f02e61544c716bac6452"],["/categories/测试/index.html","973e3cf2b961d83dfb9bfa742f288c4e"],["/categories/用户体验/index.html","a6ca21269b772b4cd858bdd769bb2ac5"],["/categories/用户协议与隐私政策/index.html","bea574bee1037f78f283ce1f979358b0"],["/categories/设计模式/index.html","480d5425f98f400194f8a0e9399d30b0"],["/categories/设计模式/page/2/index.html","64e8c96bb2e8c2cb197268d17ff6417a"],["/categories/设计模式/page/3/index.html","bb0f9b9b47bfd6e7bc16bc984e584710"],["/css/main.css","020244d40993f0cfb142d24b3f738eee"],["/hello-world/index.html","f69ed3870899b24e8adfd9812eaf424e"],["/iOS VIPER架构深入实践/index.html","5fe965eed32c3f5f36c45cdead933d55"],["/iOS 自定义视图，输入表单和错误提示/index.html","a1456e9b1153958df61868e8d941382e"],["/iOS如何使用iCloud文档？/index.html","02971fac0f8752825968dd36dc427e4e"],["/iOS子类化样式/index.html","e1d116bcaa48edf8faff4b5673c5d6be"],["/iOS开发记录<一>/index.html","f0611100ee11d2907a206d16b71c4e4d"],["/iOS自动化布局编程/index.html","7f9da91c23172f90d6f24c8730c647d7"],["/iOS自定义转场(By Swift)/index.html","55d709f69e7a8dc796fe3026bb6adfed"],["/iOS项目架构：使用VIPER/index.html","928a225e4f62639d14683b949d4c42f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","d77d9b8595eb0d1b1220cbff2dd81576"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","7315f52b5330679ddadd60089f467eb8"],["/page/11/index.html","1738211515534670e285e731d0880559"],["/page/12/index.html","e0d45e51c26202b5c6370498fc08b916"],["/page/13/index.html","25ad7cf6e4964aa68b53c49414771ef3"],["/page/14/index.html","6c905623800f0102ef3b5c9de9955bd2"],["/page/15/index.html","2f87f8ef72cb6d577e14b699b225a52b"],["/page/2/index.html","76b2acedc7e57d4dbbe6b7a0c992ca01"],["/page/3/index.html","025dfa1a31fdab685c4a8b3c1d15b237"],["/page/4/index.html","d60b466d9d01c08a2c5506395e2c4aa0"],["/page/5/index.html","4c2346245a956eb80778ebf2a09204b0"],["/page/6/index.html","46bdd83f9e0714fa440f93614e8d285d"],["/page/7/index.html","6b2c8cd5aa297e5c583cce2d8793b44e"],["/page/8/index.html","f240dcede6d704ebabe4b19c9cc8a7f0"],["/page/9/index.html","6d8ac8642713a63d6e69fc29a155ad88"],["/schedule/index.html","2c51e51b24a97ba75192765bf9fe93cf"],["/storyAppPrivacy/index.html","488d6d859751553d8cad99f534cc96b8"],["/sw-register.js","0b2e54b227e0b6dabfd4bf2f918bd329"],["/tags/Advanced-Classes/index.html","6b06f30595dd475ae0161830238fb8e3"],["/tags/Advanced-Swift/index.html","4374d860d129270b153c6fd8956908a6"],["/tags/Advanced-Swift/page/2/index.html","711fdc8b60b967aa4344da63eb9d68a0"],["/tags/App-Architecture/index.html","0403bd6dbeac8bb74c2be8619933f121"],["/tags/Arrays-Dictionaries-Sets/index.html","c0af33102a8f8afae40e04c9230d1f71"],["/tags/Authentication/index.html","730bc78722ede8f3b7c7f43ef7438223"],["/tags/Build-in-Collections/index.html","37dc76c6735c690600586fd24b86e068"],["/tags/Building-Your-Own-Types/index.html","23746a57357dc14c6e11703e80c52372"],["/tags/CMS/index.html","8dda24b46712c42bfc721bb86a1a76d5"],["/tags/Classes/index.html","69c4965bf0884750c2efbb170b28530c"],["/tags/Codable-protocol/index.html","024bca48bd8c9a92a2b0ed20fc7afef3"],["/tags/Collection-Iteration-with-Closures/index.html","e3ce9d498ffc55741225840ab86d8a11"],["/tags/Collection-Protocols/index.html","c509e2dd9f3e3a5b2c4efd18e901b05d"],["/tags/Collection-Types/index.html","a78854389772580eb3a7f06a34a724be"],["/tags/Collection/index.html","54f3338d256824ad0e02d0229140232e"],["/tags/Collections/index.html","3453a9b30e1fa79e0158e1ea5747f05f"],["/tags/Combine-framework/index.html","a858af41cf0636d513490e0efa497f1c"],["/tags/Combine/index.html","d1dd00e90654863e9ebbe0f34c8efd4b"],["/tags/Dependency-Injection/index.html","615ca622ce15238b4d17e92fc7768edd"],["/tags/Encoding-Decoding-Types/index.html","b8a05f1bc569ac17369c1468ae5ff5aa"],["/tags/Encoding-and-Decoding/index.html","90ce9a1986142c6799cdda5a4ac32cc8"],["/tags/Enumerations/index.html","89ebb1bfa0addd19085bc05f6d640231"],["/tags/Enums/index.html","806711bf9581b11ca88e1691a0cfb04c"],["/tags/Error-Handling/index.html","389ba06413a06a850fa1b22743e9e450"],["/tags/Functions/index.html","1fffa63b5a9fc00f0e9eea303cdf4fb9"],["/tags/Generics/index.html","c081d7b5eae322d9cd275f491e4d374d"],["/tags/Go/index.html","1839bf8ee6261e4ff5be14092eea3681"],["/tags/Grand-Central-Dispatch/index.html","a3076033ef796c85156dc9805aec9d99"],["/tags/Hello-Vapor/index.html","590c48ed42d8ca5fc7cd145b717ce272"],["/tags/Interoperability/index.html","28e3f259fa92adba7398be7873798148"],["/tags/Introduction/index.html","f925a46928163683f4f30c8b7c2e9343"],["/tags/Leaf/index.html","e19fe9a06833690486e5a5e42b5e44fe"],["/tags/Methods/index.html","ba5743a9bb4644546e3b25a16661e31c"],["/tags/Modules-And-Hooks/index.html","946ffdbcf54956a0bca5fc7bc6eafb88"],["/tags/Optionals/index.html","44d6816b576aba624e051b64161e7faa"],["/tags/Promises/index.html","823a17d1a87a99bf1d24032b283bdc1d"],["/tags/Properties/index.html","747354a3e4193eccc453577fc7dd5329"],["/tags/Protocols/index.html","826fc6310295a00e5f236959c9d4ae4c"],["/tags/Result-Type/index.html","f338dffd8a3ec673052f2c5e88bac625"],["/tags/RxSwift/index.html","d3882f636ba76f2e881e547f1620b53e"],["/tags/Server/index.html","10eac9343d0f7b6e354b0898050858a6"],["/tags/Session/index.html","f158ec14baa21bf105f0092e9e68a5ab"],["/tags/Strings/index.html","bdd3869c2ab13dbcfda0fd3fc0341ec4"],["/tags/Structs-and-Classes/index.html","0cef8d549065c20a6426e05c3a912f19"],["/tags/Structures/index.html","2fb13730604781fd60ad4b903a87c7d3"],["/tags/Swift-5-0/index.html","812509dd720502064828cbb1e3b0fc79"],["/tags/Swift-5-0/page/2/index.html","49e5b5a6ab1ea3ea9c7b9abc0e7943c4"],["/tags/Swift-5-0/page/3/index.html","3601960805c9a2f2759c0ce931b67c8c"],["/tags/Swift-5-0/page/4/index.html","6767cf5575bc9603e6c57c5394859647"],["/tags/Swift-5-0/page/5/index.html","bc47356c2119dac2c8ea687e3fc248c4"],["/tags/Swift-Apprentice/index.html","97aa5724829e52d44e2156c75abb3729"],["/tags/Swift-Apprentice/page/2/index.html","c38f799c5f9de413899bd8b1735eed43"],["/tags/Swift-Apprentice/page/3/index.html","aafa915c70cbf82579bef9ea5db7235a"],["/tags/Swift-Package-Manager/index.html","aee6eb2701c78a9cde89b9207ec8b634"],["/tags/Swift/index.html","5b7e936105d6f735fb762b02ecb6cb60"],["/tags/Swift/page/10/index.html","bd8dc828162d4361b7ff7bb90b2b73fb"],["/tags/Swift/page/11/index.html","62ad1478304d196a2bb7636972f04a9f"],["/tags/Swift/page/12/index.html","94540203a2adcb0e80834303afb3cd71"],["/tags/Swift/page/13/index.html","a5096f244af532463d7bd5488147cea7"],["/tags/Swift/page/2/index.html","0a5b0586f75a905faa4f26e5113d95a8"],["/tags/Swift/page/3/index.html","4a846c40bb100392656d632da4361bff"],["/tags/Swift/page/4/index.html","578e01a30d23b0fbaa95f50a625ebebf"],["/tags/Swift/page/5/index.html","7d001d5f52d3bbaa594baaf28731ae0a"],["/tags/Swift/page/6/index.html","ebc62b0bc0552dc65fa09573bc86aaad"],["/tags/Swift/page/7/index.html","bb56e3eaeb4a277d4956ae76c685fb8b"],["/tags/Swift/page/8/index.html","5073295b1ce632c408d98889f00ac79f"],["/tags/Swift/page/9/index.html","c185b2185b90c6628a0e7cc375b3c3a3"],["/tags/SwiftUI/index.html","2bc6780f468b471f84bc8f7644de2f83"],["/tags/UICollectionView/index.html","abb7c8902a40931513fc3fe361361c30"],["/tags/UIColor/index.html","8fd3809984f3e27c9ddc666e9d08910b"],["/tags/UIImagePickerController/index.html","7cf77218b5ddb130dfd3683e8396b1a0"],["/tags/UIKit/index.html","6efd5739efc4657fbc12f4b18771c2a8"],["/tags/UIKit/page/2/index.html","1b441d71e90c056943047673ffdada1b"],["/tags/UIKit/page/3/index.html","f20a3660a4bb82be22cf35d74bdc0e2e"],["/tags/UIKit/page/4/index.html","8d4ccfb2416d979535b143b6907d2bdd"],["/tags/UIKit/page/5/index.html","31a720c62a8132138a76c48ab9bb6b86"],["/tags/UITableView/index.html","f60029dd28da86a94bda0f0125e65048"],["/tags/Ubuntu/index.html","cdf2c1524bd17f32a747957efcf4ffe2"],["/tags/Uniquely-identifying-views/index.html","170e7559d142ac1624d8aea7aa67765c"],["/tags/VIPER/index.html","659d7f1e53dcfc839101445bd15f4735"],["/tags/VMware/index.html","bd4d3e31af713d2bea842d1448601e23"],["/tags/Vapor-4-0/index.html","af15018634b40a31df6964fff62d64e4"],["/tags/Vapor-初探/index.html","f3ac37747395e2134803436dd89e854b"],["/tags/Xcode/index.html","162634609a2f083ef11dd20674847d79"],["/tags/appleOS-Networking/index.html","25b61844bfd2d0b99004802aca3b102d"],["/tags/bugly/index.html","58d3c575ed09d915ec6d500b17b468b1"],["/tags/enum/index.html","d0347d8039733260c47b3ba2dcb0fa61"],["/tags/git/index.html","05e0a2890b91b348053046986dae9873"],["/tags/iCloud/index.html","8a1d0c3ae1af503e8fd34954279991b8"],["/tags/iOS/index.html","8e25330e70fde27045ba1c640366a532"],["/tags/iOS/page/10/index.html","1a400960eeb7bdafbf98bf922fb517b4"],["/tags/iOS/page/11/index.html","ebf991a0883ebf7d75e6c78ddd399cfa"],["/tags/iOS/page/12/index.html","d7767242736fad67b77def96fc4aee18"],["/tags/iOS/page/13/index.html","42456a79a91264ca7fa3403d05f9d730"],["/tags/iOS/page/2/index.html","ec50c52a38612d9e24d887a5585e184d"],["/tags/iOS/page/3/index.html","2667c3f7b31bd54934b7cb7393439112"],["/tags/iOS/page/4/index.html","5e5d907cb7143337474279444252854a"],["/tags/iOS/page/5/index.html","36afc03728f4497c82c658e56deb565f"],["/tags/iOS/page/6/index.html","6d2b2583799bb0a71597bdc7f15911eb"],["/tags/iOS/page/7/index.html","34428aa2b46081a37470149bdc090f8b"],["/tags/iOS/page/8/index.html","75284ae0f592fa3a8775c156e8b38788"],["/tags/iOS/page/9/index.html","38417c05bc52decd0fa6c4bbad81631b"],["/tags/iOS面试题/index.html","98a03344812b4538800cf08897b84e2d"],["/tags/index.html","8690c5162dbd202a3cfe201237808bf4"],["/tags/non-optional/index.html","ddee338be5b2b475cbfddd4bf1a62ed5"],["/tags/random/index.html","8ab222d7f9bd82279167cb644c09ce84"],["/tags/transition/index.html","83f45fb08c0600890ee63e657e57ad61"],["/tags/三方类库/index.html","5ddffe6158c0e8492e9fb339792364c1"],["/tags/依赖注入设计模式/index.html","9af7d7c684e2ab12d936ac3d2bd6da6b"],["/tags/值类型和值语义/index.html","1b13f16fa8e2f3161ff75fbdad2f1e40"],["/tags/内存管理/index.html","edb55f92f8366cca6bb302189fd4dd53"],["/tags/冒烟测试与回归测试/index.html","2b7642e29044a8ea7696eab236672117"],["/tags/函数式编程/index.html","a18836e421f073e3fa748ad7c2f72891"],["/tags/创建博客数据库/index.html","b9752e5a02bbf9a948e2e0e399e905ec"],["/tags/初始化模式/index.html","bde58d2d648acdbec182f2fd1d5ae529"],["/tags/单例模式/index.html","d25780bd7c3c41c1108ceb95c25f61fd"],["/tags/原型设计模式/index.html","ab724b6cca9ece7ce556b86ef6f3bf13"],["/tags/命令设计模式/index.html","b8eec6c257033a402fcfd083d154ff94"],["/tags/基本控制流/index.html","5a6dd38a5dfc7e78402528b888da738f"],["/tags/外观设计模式/index.html","27a4c6bd39147410266d452398749b09"],["/tags/委托设计模式/index.html","fd6e8ba44753aa3fabe5d0868987e967"],["/tags/子类化样式/index.html","2cd1f253aa994810510315b1f2c5dffc"],["/tags/对象池设计模式/index.html","6203356a0527d1e6b8429c3117d160e9"],["/tags/工厂方法设计模式/index.html","2f06ca5ddedf41ac44119f6c512fc4bf"],["/tags/工厂模式/index.html","7fd4fe66c99d9fc6be6f6a69a1c10bd8"],["/tags/工厂设计模式/index.html","80c41b8b03e96338fac6395ebb424930"],["/tags/开发记录/index.html","4a73bacd9de08ac83d806e1503dc31d0"],["/tags/懒加载模式/index.html","1f73a5dfb2bb57c21145b8ec930e2d4e"],["/tags/技术支持/index.html","19c9930b6d36492f6c2682019e392c6f"],["/tags/抽象工厂设计模式/index.html","fbe35620bfd05443638ece79cf3e1463"],["/tags/构造函数/index.html","1c6f237a9089ba304a1d4fb14aa13ccf"],["/tags/架构设计/index.html","e6cf145f40f66bb9f66b1d9d933a843f"],["/tags/模式匹配/index.html","34ecdef58efab1e0136765ec0e0e5b28"],["/tags/生成器模式/index.html","1d33ad4fb98ee2b03821b0f4422e9bc6"],["/tags/用户体验/index.html","3f6776f9f8068c1a3acacafc150c1551"],["/tags/用户协议与隐私政策/index.html","63cec06225bb478614c4836df237832d"],["/tags/类型与操作/index.html","2e1779839daf4df985489b7d00e1b109"],["/tags/自动化布局/index.html","81d1229bdbf77ff86c6ba7bba8473cee"],["/tags/自定义UIView/index.html","bb7f825e4f3c29808f3b038e19e7a72a"],["/tags/自定义转场/index.html","63a79e3a393d0d8295f7b9e32d0f69c8"],["/tags/自适应布局/index.html","3e23179fe624e63c9391ece26664e879"],["/tags/表达式、变量和常量/index.html","116386e144b4ec247146e1a35b014984"],["/tags/设计模式/index.html","2fee5b1860dac000cbc759dcb389814b"],["/tags/设计模式/page/2/index.html","1298177cb23c1b82f4dd28ea92c012dc"],["/tags/设计模式/page/3/index.html","9916929fb48b95f9ed8b4c91c5af3b2b"],["/tags/访问控制和代码组织/index.html","02353eced3d6051b6b26c37ce1e009d7"],["/tags/运算符，下标和键路径/index.html","4337459a0a46861d041ade814646c059"],["/tags/迭代器设计模式/index.html","e5b87cb2ceb0821839bb4223c8f023e0"],["/tags/适配器设计模式/index.html","141b6c0cfc75d953eaf1bf2f9fbed20c"],["/tags/错误处理/index.html","6d5241bf72a0f8ee7e9cea7b4fd9ff92"],["/tags/静态工厂方法/index.html","ce85ea959e67babf427572dfbd475f62"],["/tags/面向协议编程-OOP/index.html","1d1b84fddf53c6ae1417a66b0560dc04"],["/tags/高级主题/index.html","8735563c87404c12639c148911699129"],["/tags/高级协议和泛型/index.html","a00ab83eeb30a25d93b488beee359a84"],["/tags/高级控制流/index.html","eaa7efb104b5b1e3000b6477ccc0f9e0"],["/为iOS应用构建输入表单/index.html","cc7a3b1e7df9b338eb3eab8a8b9ef642"],["/产品开发的幕后花絮/index.html","30e540bfa43fbf3bf24512ee480de93f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bbe1dda3d9828aef3a8f4f07fdd23bf0"],["/冒烟测试与回归测试/index.html","262abfe3176f42a26457bc52d7b127d8"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","beb48e02a694bec8d19aaf91eb66c7aa"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","a7886fe63611add1c75c836cf08b0aec"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","a976cf2e620a8622badc654de987a55d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","8d2c4f6f5031cab937adf70e46f07e87"],["/在Swift中创建自定义集合/index.html","3cb57d57d77f672dc1f7b1db205fe138"],["/在Swift中处理非可选选项/index.html","90538bfe8b778d00fab125ac1d238058"],["/在Swift中生成随机数/index.html","a40421d70c33ec5244f62c092be12b41"],["/在Swift中重构单例模式用法/index.html","8c81fe630564ee1164d70ccfd02ac44b"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","098840eab5714620e419f1ca2fbdac40"],["/如何为VIPER编写服务？/index.html","fad7ce3367968550133e822089e5f9bf"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c1421871c420acf648265606ffd814dc"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d65095b27d1c49680b72ceb81ca77503"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5cd8fc96efecbcd4ee60099538a5badd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","5611cdafb5dda7430a9e0be1058eee35"],["/掌握VIPER架构/index.html","0615b5c1dfa5d700c55459e9812d6457"],["/揭秘 WordPress Hook 系统/index.html","12ce1d1fed0eb2f9219a872b4f9918e5"],["/比较工厂设计模式/index.html","12342e5219222a81dff4f1073ff6c6bf"],["/深入了解Swift中的Grand Central Dispatch/index.html","b2f2cabc1a94a293377b2134fac32af4"],["/深入研究Swift框架/index.html","69227044d1e1de0069432dc78a52ed8b"],["/美豫直聘技术支持/index.html","49458fb4c88a9c0f69f065e74e2439ee"],["/美豫直聘用户协议与隐私政策/index.html","f89ed16daa50a1671b5939ea5250d810"],["/适用于iOS开发人员的VIPER最佳实践/index.html","ac4d76c14c388dc72250c929de608cc0"],["/选择Swift而不是Objective-C的5个理由/index.html","153bf33ae1bf75867e2c47ee3f78b536"]];
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
