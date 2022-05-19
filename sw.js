/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","adc0bef5b5cd4d18a34d4c05be06b03a"],["/2020年iOS面试题总结(三)/index.html","235ec932c466b34d4988a79c1e76fd0d"],["/2020年iOS面试题总结(二)/index.html","c3284b24a98348ef1c8f5d7804f4adb5"],["/Advanced Swift系列(一): Swift 简介/index.html","47ed49c601b04ad1a4f2e11fb6fcfc5b"],["/Advanced Swift系列(七): Strings/index.html","f9c1a3a4ccc34b06683cef53d87c71a5"],["/Advanced Swift系列(三):  Optionals/index.html","2a989d6b0089888f151d7ed3c080ba58"],["/Advanced Swift系列(九): Protocols/index.html","c151eab4edd114b99f578e31e2e814fc"],["/Advanced Swift系列(二): Build-in Collections/index.html","4dfb8b3d1e96a0a6c04c1d425389f0a5"],["/Advanced Swift系列(五): Structs and Classes/index.html","f4697fbe9a0f022f3e9cd917adb52a63"],["/Advanced Swift系列(八): Generics/index.html","e136d8a7f5b5ca995e8fae23f7c43f16"],["/Advanced Swift系列(六):  Enums/index.html","0800ed2d32498c6cc838ad9236c16b0b"],["/Advanced Swift系列(十): Collection Protocols/index.html","dd3570bd8f11636c8b81745c163cb52f"],["/Advanced Swift系列(十一): Error Handling/index.html","d15980e252cfb2416c64eb32d08df8d9"],["/Advanced Swift系列(十三): Interoperability/index.html","ec6eb3db42f2e80fa7916575501ac846"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","9f628fab7841c831238f1c21235a0c6b"],["/Advanced Swift系列(四):  Functions/index.html","5799fc9b36e44b4ad27b983a43b6273e"],["/App Architecture系列(一):  简介/index.html","369686da560419136628fb0560077423"],["/CocoaPods 设定版本说明/index.html","070dc5a6d5ff06b0e2bd05a4a2fb18a8"],["/Functional Swift 初探/index.html","b22ff3c2451697ac6c54b56c8706704a"],["/Git 使用小技巧/index.html","446e77527640466afc249d14914e25a8"],["/Go Protobuf 初探/index.html","80f84e3a92fd84d5446be1eda3f6c5fb"],["/Go mysql Tips/index.html","d0b0609f8b4507c7ef2ed10de5d2c373"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","7f5bbbdfd953d2210c5e12c89f2eb886"],["/Go 入门篇：2、Go 实效编程/index.html","0f11f173d4552bcfac193028e40c8463"],["/Go 入门篇：3、Go 重要概念/index.html","234a4855f36b3973f510048e2b579521"],["/Go 基本语法初探(一)/index.html","4d483964b2f3bcb5d8eb4d1dcb8b3c9a"],["/Linux VIM 命令及操作小结/index.html","18d65f32bebcb3751eb47819206cf247"],["/MySQL 基本操作/index.html","23fa569a4ef0fe085d5e4f5552297b29"],["/MySQL-列类型和数据完整性/index.html","5d185904a7611cd13ea8496a1dd1f330"],["/MySQL-数据库设计和查询语句/index.html","b488582915bce4258f03d3a520f80d26"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","0e5ae61f9780bd19a2d0f71201917f76"],["/NSCODER和SWIFT初始化/index.html","27bfa95051c3979497a964b4aae5bf87"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","c320393d84d7ef4b4e2fd698ba6fd268"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","965b4413ec50d609dd6801dbe00b6334"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","97a3e2e3a9f2ea2907b8abac5dd51dd7"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9aab65239c9e00d2dff5ae67d1d5919e"],["/Sqlite 使用Tips/index.html","de3bf931e7f33ac994af143ed7065ec5"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","4f8b3dbc15450c7f58f85271c7893356"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4db8029b4106b8b55f549aa525a54e1f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c0cea2f89591c548b030d74bcef3c169"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","a638c05c93c0db18c55f04880ae12fef"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","745d5207e301e23968ae3186f30ba680"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c58aa6cc68c15b67a36bad15705a04e7"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","607d0bf0194e5b4855c318d3cca32ac8"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","eee77eeb75c617f0458db4a804ec926b"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","2fe17f58aed81e70fc67f51bf90db474"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","4cd9268f177306df3817ad12656b514a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","049a7b3291b25995334de57fcd4e967f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ecfc13223b69d5262907f7aa2429ceb0"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","4ec0601bfd00aab379c51a6cac4b0008"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","db323cf0ce985b9a340e541c523e4c69"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","abccfddaa2ea3daee976738161ecbd18"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","f6b87310d296a64756d5cbaada347c34"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d2a1c27878c735459061b8553d836a4f"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","23c1387e5b7d3213203ad7fdb7fb9ab4"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","cb9438b90ac0110176f393388cfe6694"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","add6173121e5d3cafcd76a5268b02691"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","4ebc30e26e1bd8877b7136dd87724b26"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","87eb20d9570c5aa397138e0616f6f7c0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","3ab26af8dea348954fca78254cc6af7c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","62f1ed0d369ba6e183dbec32cd98257b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","e1bb93f32a3e9359f618ec1db543cf2f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","99123c1b4558fd112115f9d5af2fb22b"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","278ae20dae384e9b8f5f6c4fdfc45ecf"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","d52f22012d064ea9abfe8cfadadf9207"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","d93357921e9be39e87427881922d24ea"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","09893d36df22c00eabc0d0480b12274f"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","81f5c3761ff60845310a18b690e527fb"],["/Swift CompactMap vs flatMap：差异说明/index.html","8caae30615a27f90098400ba58502fef"],["/Swift Grand Central Dispatch 深入实践/index.html","73c0d39419f92aabf14a23e7fb4898cb"],["/Swift Lazy属性初始化/index.html","be670ab984ba6ba81eafc71209c1275c"],["/Swift Promises 初体验/index.html","d62261e5564a28d562e3fc875cb2592a"],["/Swift Promises 探究/index.html","b63c69b1dc732027b6f5913bec04f12a"],["/Swift UICollectionView使用指南/index.html","d1b926d631fc24edb03cf7b6b037d5c4"],["/Swift URLSession && Combine framework/index.html","692e80871e7c9f628f905b6d37ee6053"],["/Swift tips/index.html","dceed0db52af302b976342f97e4d98eb"],["/Swift 三方库：GRDB 使用指北/index.html","365cdfa7477794b5d888d687cfcfca5c"],["/Swift 唯一识别的视图/index.html","eae63770b48ded217ac9814027372040"],["/Swift 如何学习现代UIKit？/index.html","cdc8586ee1b41bcc2ceab07de48d9907"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","8bfb6b09f2a5a2039121af01645622db"],["/Swift 用 compactMap 替换 flatMap/index.html","914976d5cf3e54709ce9c8c0f902c072"],["/Swift 选择和播放视频/index.html","1922c3dd193a104600516aa8dd1655b6"],["/SwiftUI 系列(一)：1、 简介/index.html","c2e895a2304f0abfa3cf3cea02932a7a"],["/Swift中UIColor最佳实践/index.html","af734f462ae8783026ac613b4ef76303"],["/Swift中快速简单的工厂设计模式/index.html","f66cd3bd967e2806a2d6e3ac5a28eb19"],["/Swift中构造函数与静态工厂方法的比较/index.html","a06230fc8da850bbb4c0a84a1ffa1c5c"],["/Swift中的UITableView教程/index.html","57ee743b30ea5c21e013ff4ef9e435f8"],["/Swift中的懒加载模式/index.html","7d69b0b6338e08e5c21cc06a46e43278"],["/Swift中的模块和挂钩/index.html","fa6e005586edc19879d144e9d70522bc"],["/Swift使用布局锚点添加约束/index.html","666cc2fe8ff86dd7e507695d4b93d352"],["/Swift依赖注入设计模式/index.html","a165822202f2d15c74d897b7fd90073a"],["/Swift关于Dependency Injection (DI)/index.html","9fdf04c1e810f3c0f79878d0b14a96be"],["/Swift初始化模式/index.html","3550017114f7638109dcf2752a7d56fa"],["/Swift单例模式/index.html","b50eda78db957c28ee2978b25db139d2"],["/Swift原型设计模式/index.html","432b905ac91bff8d502b423b9ae40a49"],["/Swift命令设计模式/index.html","3d143e73eb80e911cacc0c85660c2279"],["/Swift外观设计模式/index.html","2bf80c4b1fad32b4de0ac88e11e5478b"],["/Swift委托设计模式/index.html","d3390c4002fc9eff01a49d1964f84f35"],["/Swift对象池设计模式/index.html","e8c7636c15658eb0c113013fb43a1a53"],["/Swift工厂方法设计模式/index.html","3d241197b25bc0f13e8a9167e54934de"],["/Swift带闭包的懒惰初始化/index.html","a3cc9a05076ad6dc3d9df020d2e71e00"],["/Swift抽象工厂设计模式/index.html","25e9f4afd51828ff02ac77ab4f23e1ed"],["/Swift掌握iOS自动布局锚点/index.html","fb64253102a1aaacc2f56b31546bdc29"],["/Swift支持旋转的自适应单元格/index.html","a08464c2a4a25b97765c6d1c5a708860"],["/Swift枚举值/index.html","7fc66131feb9c12601ffa24c7226bc55"],["/Swift生成器模式/index.html","f2c3628d3c308c644c51d7818423da86"],["/Swift结合Xib文件自定义UIView/index.html","67900851629c8c4d3a8309e0be3e7f38"],["/Swift编写的20个iOS库(一)/index.html","45be298bf32f46295382f36bab3731fc"],["/Swift迭代器设计模式/index.html","db23fddc0151545fa4fea2c467761419"],["/Swift适配器设计模式/index.html","76fb15d5575e5b290365109565055f58"],["/Swift静态工厂设计模式/index.html","e1628cf6459f830f614124e9b8f37cd1"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","e5ad96352fc542fd48863cefea9ee8bd"],["/UICollectionView data source and delegates/index.html","93f962df2b2b912c6c7a3d12362606dd"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","d8e19c902c4d9dffca388862d40018bc"],["/UIKit初始化模式/index.html","5410ac713c8f8d2b85c14053842f62f3"],["/Ubuntu18.04替换国内源/index.html","2e343b579dff0a2817701b9e6395ee76"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","76e606f2218c2d51267fa1eae5c39c78"],["/Vapor系列 (一) :  Vapor 初探/index.html","cdf249dd0efd30548d2add531d4bf068"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f362c83b1305072c61f4886b778f603f"],["/Vapor系列 (二) :  Hello Vapor！/index.html","44eb390f9d38235a8c6ef201d6228a66"],["/Vapor系列 (五) :  使用session进行authentication/index.html","7242c66f866c3b04835cd55d52e6cf67"],["/Vapor系列 (四) :  创建博客数据库/index.html","9b4c31cadecf8e9076a8a644f14d59ac"],["/Vapor系列(六): 徒手撸一个CMS/index.html","345df489523e2d887ecb75fb5dd07fd8"],["/WKWebView与Native交互注意事项/index.html","34f6aabad28073101041449f480d88e2"],["/Xcode扩展/index.html","2adc1a7d2ab034bee206c7d42851928c"],["/about/index.html","d0d7833edfd94815390fee1133923d47"],["/appleOS的Networking示例/index.html","78db75165f14dffa697a9fe8fb2a2d88"],["/archives/2020/03/index.html","6350cc6ec6272fd7681aa046010c68c6"],["/archives/2020/04/index.html","2bd539f14d5a81c86425a3d26cbd62a5"],["/archives/2020/04/page/2/index.html","d03d07d9555fafb51f05ea47ac365d82"],["/archives/2020/04/page/3/index.html","4b0de8d1498f7c9f99fd1fe3c6ac3061"],["/archives/2020/04/page/4/index.html","8c9bfbf96516071d4c78fdd7387c009e"],["/archives/2020/04/page/5/index.html","5c7b1902534a99751e58ae6479089350"],["/archives/2020/04/page/6/index.html","26ff61c65cae955a1e11127ce2eea181"],["/archives/2020/04/page/7/index.html","fb2cf666d2555869a2051295a6082d61"],["/archives/2020/04/page/8/index.html","9f070b88ae3cc654c962624287710d90"],["/archives/2020/05/index.html","b84292c6620ec9b961ec3d1485ac0b00"],["/archives/2020/05/page/2/index.html","ff4eac0640ab00e95fe73bbfb48abae2"],["/archives/2020/05/page/3/index.html","0a77bcb27315c328544d1a58c056ed88"],["/archives/2020/05/page/4/index.html","c081885ac6d17e8e4e4197560bedac84"],["/archives/2020/05/page/5/index.html","984e32295396d9d223beac8eaede4998"],["/archives/2020/06/index.html","20321207d4c23e790877d13728b4eb2c"],["/archives/2020/06/page/2/index.html","a0f88f87d6a15e32da9442e1d2f51f64"],["/archives/2020/08/index.html","a2367a9fb2006e26b38e0df601793251"],["/archives/2020/09/index.html","5ca2fd0e83fe6ea8db6ba24a955b4510"],["/archives/2020/10/index.html","c736e1c5d74ccaaed0b071caac7b8833"],["/archives/2020/11/index.html","019930c89519871d0c805caa226711be"],["/archives/2020/12/index.html","c8d920d60ded5548c09cdfcc9b5c1943"],["/archives/2020/index.html","4165a1f6e65dc46caf3f68b4bca058af"],["/archives/2020/page/10/index.html","d3f792311368c309edaf2b1dc23b6219"],["/archives/2020/page/11/index.html","730fe9b29baa1f0e1be593b5433f5a44"],["/archives/2020/page/12/index.html","909cd8f6543d72d18e2beffba7989493"],["/archives/2020/page/13/index.html","7e9a376a5b6d9275fbcc7f8edf1d898a"],["/archives/2020/page/14/index.html","d1a4134870f7f71768b13f4dd469f84a"],["/archives/2020/page/15/index.html","9f952dd079f542f34c59fcae6d6d65fc"],["/archives/2020/page/2/index.html","a970f9589fab8173044fba8ab47e99d7"],["/archives/2020/page/3/index.html","195ef5f49e85d22c460a8df605769aff"],["/archives/2020/page/4/index.html","01c46ba204a261873b8792d03b976952"],["/archives/2020/page/5/index.html","0734034f97360ce514e1ed62db5e550c"],["/archives/2020/page/6/index.html","7e16ca8e37b5ea43670e23f8a002fff8"],["/archives/2020/page/7/index.html","239777c109382e37b214e6c5882c4036"],["/archives/2020/page/8/index.html","eab47be0a5400b5c349b203381a99d5e"],["/archives/2020/page/9/index.html","f071227273d7b8c9a4d187612ce9df78"],["/archives/2021/03/index.html","8208252ae78dfc3c523e27d289b80344"],["/archives/2021/04/index.html","6422ee15313402e8c943cdcb488c7d49"],["/archives/2021/05/index.html","a895377af114a13f9aa0f7a9a49e5046"],["/archives/2021/06/index.html","bdc37349207d120b0cbe7221a95dd967"],["/archives/2021/07/index.html","8d7b849e369b11bda35a5270865b7500"],["/archives/2021/08/index.html","2eefed5baf460d65e1dc0b08ec240a57"],["/archives/2021/09/index.html","bf0cb06484fd447589b82836471b963e"],["/archives/2021/11/index.html","6b53b85e4c2c039f58e9fbd0616ba3e3"],["/archives/2021/12/index.html","3442467f917cab6a34e5bdbbba70a714"],["/archives/2021/index.html","fc150c05e62644c9588fdaadfe006c70"],["/archives/2021/page/2/index.html","ce24f74d6b3ddee96195cc820abeb87b"],["/archives/2021/page/3/index.html","955d5b8b57bd03ec6d215096728cd227"],["/archives/2022/03/index.html","e097baa8943f806e9e0d8ce8aba40181"],["/archives/2022/04/index.html","d07808e2ba7a7c5c518e41c54c6ae5b7"],["/archives/2022/05/index.html","a2f2865c0ace94d9660bc8cc66fe8017"],["/archives/2022/index.html","d4c67cca33c8a350263db56357654bc2"],["/archives/index.html","8127d4bed8cbc7118e5ccc0de63038f6"],["/archives/page/10/index.html","570b0b99a4e111c0e403bf836c3832ce"],["/archives/page/11/index.html","4b9c4827fcd5fe9d633160ec935cc356"],["/archives/page/12/index.html","ffbcf50e46ed3f1085bcf02cfca25e35"],["/archives/page/13/index.html","26a0fc1ad1007126d0140ab6248341ec"],["/archives/page/14/index.html","c7f5fdd0ed8b24154c5ee43c14b081e8"],["/archives/page/15/index.html","9d2e87c655b889c07ef3497c3173853a"],["/archives/page/16/index.html","1d6457419832f0b64f6a3ac70eec8dcd"],["/archives/page/17/index.html","40fee19fa4a6e554901a6e29ad87732b"],["/archives/page/18/index.html","e432bca457e6651ed96c4560390129ae"],["/archives/page/2/index.html","e34bfe0b7305301b5b380d8f0c351e20"],["/archives/page/3/index.html","e5f88e3099354018b990c88d2b47b608"],["/archives/page/4/index.html","83bcb2613e24640b1692c9166b73bf60"],["/archives/page/5/index.html","57c95ba5f6dae9f1aff2690e4bb9c5d2"],["/archives/page/6/index.html","3bca9281c1a78c0405578b5de10dc1c1"],["/archives/page/7/index.html","3b21729dd9f2ecc931edd5c15ebeb6d2"],["/archives/page/8/index.html","7a60858519cac3440954f0668710d92f"],["/archives/page/9/index.html","ef49d72f38879b4d209b4243b8532f1c"],["/bugly 上传dYSM文件小记/index.html","84c662808c92d74045c6b623c7c84679"],["/categories/Advanced-Swift/index.html","418bc927b4dc7b2187e30d35940caa77"],["/categories/Advanced-Swift/page/2/index.html","b7ba0fe79080c11c2c47679f451c06be"],["/categories/App-Architecture/index.html","95b3047c335add273ea87d37a4be3908"],["/categories/Array/index.html","18e2f2e7e66aa2f1aa144b7f3b066ac6"],["/categories/CocoaPods/index.html","cb118988d0ca12cc5455b13de1166594"],["/categories/Codable-protocol/index.html","0fb78bf47ea2cfc4b0d199efd3c12663"],["/categories/Combine-framework/index.html","d2cc722193ca88f330ed42bfff4337d4"],["/categories/Combine/index.html","2d45656f7fcff7a020235093527f0dbb"],["/categories/GRDB/index.html","0485f26b843f2afb86e9edbcd33c594b"],["/categories/Go-入门篇/index.html","7d134fa68580d82bfbc5995be477150c"],["/categories/Grand-Central-Dispatch/index.html","565e572a7b01cd6dea551b8f8d1ac253"],["/categories/Homebrew/index.html","49ec03e576ceec11e77dabb7262a994b"],["/categories/Linux/index.html","e42783313febe86baed6fe72cf51b317"],["/categories/MySQL/index.html","614dc1499a3e2b776f6480436cc696c8"],["/categories/Promises/index.html","ec6a48cebef2de121cdf30520fc8475c"],["/categories/Protobuf/index.html","3a5ca49e0d3698d28abb34944a26da1c"],["/categories/Result-Type/index.html","3860edf6ff2bb4ddc160ae5a21dc22fe"],["/categories/RxSwift/index.html","7ca9ca723cecc980527b171ab20aff84"],["/categories/Server/index.html","453c658a0a4001dd6ad86a04605d52b8"],["/categories/Sqlite/index.html","bf8d340b1bf0f7f9a2f94022dd1775ab"],["/categories/Swift-Apprentice/index.html","98dc8163a5c82693faccdea420c2fba1"],["/categories/Swift-Apprentice/page/2/index.html","7e73de10787e65922bffe57e33cf56d4"],["/categories/Swift-Apprentice/page/3/index.html","6fc4b9675947f5514ab9e1e6b11a3b6e"],["/categories/Swift-源码阅读/index.html","a81c8e66dd6fe8024153ac50040355b0"],["/categories/Swift/index.html","f28c3f7368bcabdc3f60f6995f373aca"],["/categories/Swift/page/10/index.html","e4aa683ec9a6645b120b8db2c0e68f1c"],["/categories/Swift/page/11/index.html","1e03af5f27054be439b248a243674374"],["/categories/Swift/page/12/index.html","68c2953ca65ccac3fa7c4376f509e63e"],["/categories/Swift/page/13/index.html","d1d805aa9f64ade8655b5b59445fd020"],["/categories/Swift/page/14/index.html","b3a289ffc5c90d1b773b2dbff3de852b"],["/categories/Swift/page/2/index.html","c61b599492efc3dba2c1dafcdce384b0"],["/categories/Swift/page/3/index.html","0679804f3f5480a7d4797bacf9892667"],["/categories/Swift/page/4/index.html","6c528bdafedfb46082869436aca3da98"],["/categories/Swift/page/5/index.html","d5f54eae0db43d9dffdfa555fd9cadbc"],["/categories/Swift/page/6/index.html","52c5d635d90ec31ccbd2a403cc3653bc"],["/categories/Swift/page/7/index.html","97dc9887d1753d724136e89c2fb8ff10"],["/categories/Swift/page/8/index.html","68918b1907a8ae9bee2593fd6ccf52bf"],["/categories/Swift/page/9/index.html","e41b6864775768f7c6c3c994d5fb6c34"],["/categories/Swift5-2/index.html","8f90b9cf73bcd98c1b685429a54aa73f"],["/categories/SwiftLint/index.html","98b1fe18a012f849c3111192b15f4ad5"],["/categories/SwiftUI/index.html","584ec79f353fe845eb7eb10fcf9b2e1b"],["/categories/UICollectionView/index.html","1c51e79c88c1a764ea2f13948baa1945"],["/categories/UIImagePickerController/index.html","93087228130fefbd445ab4c51fb83cd4"],["/categories/UIKit/index.html","61abf4c9874b928e75bbcb8c8b1b0b76"],["/categories/UIKit/page/2/index.html","a561eb6996120581a5fc054e7e5b9dcc"],["/categories/UIKit/page/3/index.html","ae1fe7fcae32bd3cddfac8c0e3265baf"],["/categories/UIKit/page/4/index.html","455f4686ebefbf02752237093f8eac6b"],["/categories/UIKit/page/5/index.html","67cb26b79438c344fd53106a37b521e6"],["/categories/UITableView/index.html","e8b7f3e99a75e7108b43a5a5dc23675b"],["/categories/Ubuntu18-04/index.html","62f9e200cd8569a28de4f3cdcfec795a"],["/categories/Ubuntu软件源/index.html","2962b527def7a3547936cb1ccd378726"],["/categories/Uniquely-identifying-views/index.html","3b35c9eca5db5dfcf4cf5fe846d3d585"],["/categories/VIPER/index.html","9ccd62a0d2f8418fa209d7964fcecb7d"],["/categories/Vapor-4-0/index.html","d379f4cd03bced4b29387b05667ad57e"],["/categories/Vapor4-0/index.html","12741f197aff5af2d6a65c28c8167eec"],["/categories/Vim/index.html","233fc7c6ebcd3963d2449ef4368feeb0"],["/categories/WKWebView/index.html","cb62e99ca72242655f2840230c3d83c7"],["/categories/Xcode/index.html","02bdf1438ffd8678034dc0329a485e23"],["/categories/appleOS-Networking/index.html","5c2d27d36ca0892e0b95d571e4e2658d"],["/categories/bugly/index.html","36bcd83ac8053da6f0072180ea428f76"],["/categories/enum/index.html","97041643dfc0e18a73cfbd522c05771d"],["/categories/git/index.html","1de5e4105791498791d8f8e818cede75"],["/categories/go/index.html","55b20ac87c3e63698204fb5490907e07"],["/categories/go/interface/index.html","920656d9460fcdb55c6db941806d3bb8"],["/categories/hexo/index.html","7edf6952c1d742caf980e01a303b6f7c"],["/categories/iCloud/index.html","e5e0d42088a58421413d8dbeff9fd5e5"],["/categories/iOS/index.html","a32f7f47a8f77251287e7fcd371e5f07"],["/categories/iOS/page/10/index.html","5d8bf94af0d6f0c732cda3f69e9ae021"],["/categories/iOS/page/11/index.html","905d4fa037e6b1fe9fef24bfa69fd723"],["/categories/iOS/page/12/index.html","1e8f859e3aeb6c4ea361146d169e7de7"],["/categories/iOS/page/13/index.html","fb100c590e7d690fb1ae754866289a37"],["/categories/iOS/page/14/index.html","2b72e808ec167a4346661ffc4de74cec"],["/categories/iOS/page/2/index.html","33ce8801b4a8c9298cbe73d5af6536bc"],["/categories/iOS/page/3/index.html","93e029799caa8e41aadbb16ef80c7ce1"],["/categories/iOS/page/4/index.html","3cdbc8d10409c8e53ff8c4b147b14d6d"],["/categories/iOS/page/5/index.html","50c5d40067d92c588f9f9e0ab7d1c773"],["/categories/iOS/page/6/index.html","45d2d54753dd002de7a00bb4c12cc81f"],["/categories/iOS/page/7/index.html","5fe1a523220605f462f8d83d37feceb0"],["/categories/iOS/page/8/index.html","0839a14dd23e82c285f8bbb30059fd46"],["/categories/iOS/page/9/index.html","a8ca28ed3a8d133b1394c348ae18e333"],["/categories/iOS面试题/index.html","0cd018895d372d3904056b2df69b2bc3"],["/categories/index.html","aad113dd4e04af8491418dc9089c0a2e"],["/categories/random/index.html","0baf0c04196c19f98f832ad05f079b85"],["/categories/三方类库/index.html","9253e0a0e1dc73e6f45c369b8c3d4e68"],["/categories/函数式编程/index.html","95cef3799fd2335ebe610dab327104a5"],["/categories/子类化样式/index.html","4d475e02a031cf914b6adf62fb7b09b5"],["/categories/开发技巧/index.html","30c909136bd4421155d6b8193d32785c"],["/categories/开发记录/index.html","56c4215fc3a820440a9a83e9fb62c630"],["/categories/数据库/index.html","5ddd6ad66556be0e72ecea027481476a"],["/categories/架构设计/index.html","4fce070bb1e1e869e263e508417787e1"],["/categories/测试/index.html","ae6680a927f1a205ac74dfc4223b9d35"],["/categories/用户体验/index.html","c0ff750aff17c61f0e2df8c1ebff193b"],["/categories/用户协议与隐私政策/index.html","dcea274292acee0a70437183ae4e9ae1"],["/categories/设计模式/index.html","148d653b5f906de568c198c3a83fff6d"],["/categories/设计模式/page/2/index.html","96a83d2e66a5ea549a6139abf44e5005"],["/categories/设计模式/page/3/index.html","3ad9f2843d114161bda218e7bb81e297"],["/categories/逆向/index.html","30005db4d01eb3e3cfc3f40bf06c8bd9"],["/css/main.css","4150eff8fe067fea3aa82a936a52679d"],["/go moudle 导入本地包/index.html","c532221cfd76607a0fd29dfc7110c51a"],["/hexo部署失败/index.html","895bf105ccef8b43490b1daf3466d785"],["/iOS 15 适配/index.html","de616cc597c968b5f5ca0b9198ab0f22"],["/iOS VIPER架构深入实践/index.html","8b26ce9508965bf0aa54007eb62f0879"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","1463f5bd8ef7ca0cc1a860f154394b9a"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","ed1e484ee8d05f787c34d85609cab1b4"],["/iOS 自定义视图，输入表单和错误提示/index.html","909269131a8eaa76fb54877f398b23a5"],["/iOS如何使用iCloud文档？/index.html","621eefdfb97bac314e9d1a1202a09944"],["/iOS子类化样式/index.html","c2b443d76b608d48a9537cf8f8278259"],["/iOS开发记录<一>/index.html","12e9935aa5657e6821c16e98eff5c109"],["/iOS自动化布局编程/index.html","968d77adb7078366b56249c33e880b9d"],["/iOS自定义转场(By Swift)/index.html","0f5854f9d1d754bd07e111b3a8f88bdf"],["/iOS项目架构：使用VIPER/index.html","a214514455d037dab0bb8f2f97570ac5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","261920517d0e8258d9ac18e7c500b0ad"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","d359414440ffcac8e1660da5f8f99629"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","c3f9954e9dc6757ced30cfe8c1c752c5"],["/page/10/index.html","d36f0e7c33f079fb7a0cec6b038aa795"],["/page/11/index.html","1b095fbc125fe5812ea33a50f41be958"],["/page/12/index.html","9ca05447891af17c1944a318ccdfbb9c"],["/page/13/index.html","43ade000f66cf2f1b5fb7f470eeaa4c0"],["/page/14/index.html","6e8bdc52e7c603f6418ad876505f8944"],["/page/15/index.html","5e50cc6865bea7868baa0230b404f3c9"],["/page/16/index.html","a2973c2a79c3d12435e0e780c7bb3936"],["/page/17/index.html","be235f7f5a5a52c4f2c25515b5ae8dfe"],["/page/18/index.html","797363f08321c33e60d374900681f433"],["/page/2/index.html","1a86fe7c42b49bb6682a05f55970c035"],["/page/3/index.html","bc6b6de4a58f75390454bc1346f7b45c"],["/page/4/index.html","f115ac77c096672137f1909cdd33a98c"],["/page/5/index.html","2851caf65b19f20d2a60a39abbc945ac"],["/page/6/index.html","5b2617b0104a2e0f10fa7f5c7b92f326"],["/page/7/index.html","0996497296db8b120cff94e6e1c77f4f"],["/page/8/index.html","1321cc93687b9b9c38ac16c856037097"],["/page/9/index.html","2624ac4e7107bd1d36867d14e2dbf76d"],["/schedule/index.html","0f924c4a01cac6f974eae0f3b340b73e"],["/storyAppPrivacy/index.html","ae4016d7a393d9af5303eb370c76722d"],["/sw-register.js","e44db781f4f97bf30ddcb726bed14818"],["/swift 专题：函数/index.html","e5057da90ba3d358fc5c35adb2badd35"],["/swift 专题：闭包/index.html","ae40ff94b5ac4340cf5dc6e100f9dae1"],["/tags/Advanced-Classes/index.html","c94eb1b9f51719ec3d0443d92272d6ff"],["/tags/Advanced-Swift/index.html","60168336e3c50e78c45d2d3c04376932"],["/tags/Advanced-Swift/page/2/index.html","d33912a0b090bb676d64f5b75a2cea67"],["/tags/App-Architecture/index.html","49dbfb1032bd6bd5c76707a8af58b838"],["/tags/Array/index.html","0eda91a05adebcd86e5be5a793560b07"],["/tags/Arrays-Dictionaries-Sets/index.html","d2ebc180d6a4d29b7b097aba8c7f2a7d"],["/tags/Authentication/index.html","4015b486fbc2d39b40d07df3ad96225b"],["/tags/Build-in-Collections/index.html","dd4f59f583f3fcd9fd6a2b744044786e"],["/tags/Building-Your-Own-Types/index.html","251c2fdb6da1688d42a2c3e7861f1d3e"],["/tags/CMS/index.html","977dd735c8d7982c86eee46e65206f3c"],["/tags/Classes/index.html","8df5244afb60b5c50a34e3a241c5ecd5"],["/tags/CocoaPods/index.html","735d664d257f9ea4a0a65620a9903762"],["/tags/Codable-protocol/index.html","23533f22a1b539b3a6b5c96bda83edc6"],["/tags/Collection-Iteration-with-Closures/index.html","cb1a176a618fcb179db257b7012ba300"],["/tags/Collection-Protocols/index.html","861bd6e3cda829919f110dbe6719bc7a"],["/tags/Collection-Types/index.html","e52cabeef3312f3d73a03fd3b41e3fc0"],["/tags/Collection/index.html","e97a61ff4ab781c3ce6827cbd0ed8be8"],["/tags/Collections/index.html","88b8191fb1ae6cf7697ad3fd5879c58c"],["/tags/Combine-framework/index.html","a2ea2cf20e8f55478c45b32e98787125"],["/tags/Combine/index.html","1153ade2ffbe3235ecfc260831962f58"],["/tags/Dependency-Injection/index.html","2c12627c2b89c284c1134da33853d99f"],["/tags/Encoding-Decoding-Types/index.html","56c75a77ac8b7b6ef495b71157e5874d"],["/tags/Encoding-and-Decoding/index.html","36cb2d070d761362325b50c82a8f74ac"],["/tags/Enumerations/index.html","c98b25bcd3d362196633712c5c202bab"],["/tags/Enums/index.html","e49a3b7b0e0451551e18d3399c71cf1e"],["/tags/Error-Handling/index.html","71be15c0deb83b6442e93613720f03e7"],["/tags/Functions/index.html","3f0d13a9c3b60ad2616f72f05086002d"],["/tags/GRDB/index.html","91ec871092c5f66d6e70f169d73e80e7"],["/tags/Generics/index.html","287bcf622ef61d87cd8e84a8345fb5f8"],["/tags/Go/index.html","2b5a44cabb1bc0a03713d0e67063b85b"],["/tags/Grand-Central-Dispatch/index.html","c8279b63f80fe64d06c143f6468d0d1d"],["/tags/Hello-Vapor/index.html","2af60e842775a3fa21d860faecc0cd14"],["/tags/Homebrew/index.html","9bc7e74e64305a2094705506a5222804"],["/tags/Interoperability/index.html","bc73525336e28a936e2dd08db50497b6"],["/tags/Introduction/index.html","6d1f833fe4159287e53c24531c9d1931"],["/tags/Leaf/index.html","ca6a0ceb4f15a4e52eab671318176e71"],["/tags/Linux/index.html","f99033d2f3aa6069d683710be56820e0"],["/tags/MAC/index.html","fd03b96da9783f1dcff59488a8b5ae66"],["/tags/Methods/index.html","72573958d7ad0b5b410ace8601b47a5f"],["/tags/Modules-And-Hooks/index.html","845d0082068eac78114040d63cc135be"],["/tags/MySQL/index.html","e150784ee5a0f11fc83c8caef9816c42"],["/tags/Optionals/index.html","77992fda42c76e09dd3293f9fbed0a9a"],["/tags/Promises/index.html","cc02b6afe27d3231dfa404b313051cd1"],["/tags/Properties/index.html","a9e104946bdd028b032bcb69563cae3c"],["/tags/Protobuf/index.html","3c31b2b0b7944e7b3eb2d744f8518a5a"],["/tags/Protocols/index.html","c34d53c5c351646b0feecf86cd5807b8"],["/tags/Result-Type/index.html","a68cf38925ecdb77fdf0ef4554aea475"],["/tags/RxSwift/index.html","0a42373510b8d6f2191df55d9c7a0975"],["/tags/Server/index.html","2392257ccc18dc06827853267e4baeda"],["/tags/Session/index.html","42208526695c297250944c83fb8c1217"],["/tags/Sqlite/index.html","4100e6bcfe468fac30f6cc0c7ec29032"],["/tags/Strings/index.html","355a5a6779f835676a5208f446859a11"],["/tags/Structs-and-Classes/index.html","2323c1d2a6c95ae8168062b228f876a2"],["/tags/Structures/index.html","a8f5779132db4cf09d90a6b85b4fe816"],["/tags/Swift-5-0/index.html","32383d6a8459e666ed47cfe39387e0c8"],["/tags/Swift-5-0/page/2/index.html","a4b7b8fdac850fe7b745984f74d50d30"],["/tags/Swift-5-0/page/3/index.html","fbe85713e7549f28ab51867be400e560"],["/tags/Swift-5-0/page/4/index.html","84be1865275e5ed9fb622d3567d40b35"],["/tags/Swift-5-0/page/5/index.html","6214c541c3221d8fee1bd146644e1a6b"],["/tags/Swift-Apprentice/index.html","0ff15bb109ee50771a403a803da4191c"],["/tags/Swift-Apprentice/page/2/index.html","0f127962d3eef82be517de23c024f7ac"],["/tags/Swift-Apprentice/page/3/index.html","2c197354e68b36f60502797a8665a207"],["/tags/Swift-Package-Manager/index.html","a51fa1d2e6f5792018ba533b0d0f5bf7"],["/tags/Swift-源码阅读/index.html","218532f25391a9933a42183ec80732d4"],["/tags/Swift/index.html","939a1a9cbeffe30e56e57abc1d2f1403"],["/tags/Swift/page/10/index.html","6d0da06cb33e30247ad6624ae7441213"],["/tags/Swift/page/11/index.html","7f3318acef5213aea5b3b6b378de459f"],["/tags/Swift/page/12/index.html","bc11788ee91b4a863e465500d1e497a1"],["/tags/Swift/page/13/index.html","b386778a0d0c9cb86c6a48f80c7b9b77"],["/tags/Swift/page/14/index.html","966f30f5d043a979ee145199df39ae8a"],["/tags/Swift/page/2/index.html","9b6ada01a0459f511234d5b1d26e6268"],["/tags/Swift/page/3/index.html","6f1a13b35146f89b0bed69b5ae5ea670"],["/tags/Swift/page/4/index.html","7d9e8e59b8f2d6a61cd9b6f910fbf3f9"],["/tags/Swift/page/5/index.html","ced9444e658cfa15a094087f59a75d51"],["/tags/Swift/page/6/index.html","c08b6837f355df837cd4326212c7f545"],["/tags/Swift/page/7/index.html","82875e3dd16bd8ef0295037a17f16a53"],["/tags/Swift/page/8/index.html","9e37fd2fbb2dfa7e3ca9009a406e91a7"],["/tags/Swift/page/9/index.html","eb05dbfb7d0cff5d4eb4cb6899ae016a"],["/tags/SwiftLint/index.html","ec9885b917305972d4577fdd690f0bb8"],["/tags/SwiftUI/index.html","45e0577bd8336e8aa935417a6572560b"],["/tags/UICollectionView/index.html","09ddc29ca947335aa6be22ef3ae8e969"],["/tags/UIColor/index.html","f5f1815655fede50ba0cad3f3ba44bc5"],["/tags/UIImagePickerController/index.html","171243b7913b4ca927ccf0da0bc37e39"],["/tags/UIKit/index.html","f214e7e5a12e60f5838f5c3b204aa652"],["/tags/UIKit/page/2/index.html","23c5babdeecb6f769c94259130a03aa8"],["/tags/UIKit/page/3/index.html","67cd5b60f1bf3b69679779468e791803"],["/tags/UIKit/page/4/index.html","7f1ac53abaf34078c09f43dd5a8df14b"],["/tags/UIKit/page/5/index.html","1f6326d59d15434b966932e8ae24bab7"],["/tags/UITableView/index.html","54fb59cef43019bbd8c17eb8cbbbb83d"],["/tags/Ubuntu/index.html","fec6dcd041b1fab2ce758faf193f5e41"],["/tags/Uniquely-identifying-views/index.html","d9b1d45edad7939cdbf40d7acb3b4b48"],["/tags/VIPER/index.html","4978d27985c0edf9a5dda8922925cd2c"],["/tags/VMware/index.html","16ffd1457a47d42e3382f6ef70276240"],["/tags/Vapor-4-0/index.html","dbc51331ba69ef9ff6d7d29346b9881a"],["/tags/Vapor-初探/index.html","04f2a7c60914189603c6ebd8244405b3"],["/tags/Vim/index.html","3db36d63659fe144ab1ad9e0c5417e0d"],["/tags/WKWebView/index.html","cf7f6a2a0bb89293571ba8e9a8dbb6d7"],["/tags/Xcode/index.html","334a22dd46e09dd9df103bb1c3c34154"],["/tags/appleOS-Networking/index.html","95ac6ae0c7f2bc187afd2f952543fc97"],["/tags/bugly/index.html","cdf45db111d3e217579cb2a68eadf07e"],["/tags/enum/index.html","ac120755ebad047fea126617dcb5bd6a"],["/tags/git/index.html","c07966c0c82530d3b35f6a336a100a3c"],["/tags/hexo/index.html","9d2b1aff8774e7a786d67d97e0e70950"],["/tags/iCloud/index.html","d362d78999d3473421f293a4d9545a58"],["/tags/iOS/index.html","aa2e200153dcb98f2ef9766ae6db2573"],["/tags/iOS/page/10/index.html","815bdf5f35e0d5ebbebde32d2e496651"],["/tags/iOS/page/11/index.html","cd821945b398854f2de1a77d28664337"],["/tags/iOS/page/12/index.html","70fa33bc45a0004a58945feef678d60b"],["/tags/iOS/page/13/index.html","67de106316cf2698c684cb35bd0c759d"],["/tags/iOS/page/14/index.html","0d848f094efa9372927bba77fae0be7d"],["/tags/iOS/page/2/index.html","37b478de127bc1ecef732ebffa2fb33d"],["/tags/iOS/page/3/index.html","746f5ee6d29c8e86c06df6396dc5ac62"],["/tags/iOS/page/4/index.html","54946b9aad46835c0586bee715437294"],["/tags/iOS/page/5/index.html","ed17a7be2ca84e2fafc0cd6b8614d69f"],["/tags/iOS/page/6/index.html","ee79eca1b109007c5f1642f545c8e4c4"],["/tags/iOS/page/7/index.html","52123196119b8d0e8e7f480b4ecf594c"],["/tags/iOS/page/8/index.html","22a857abd3c1a79e29ce546153a679d7"],["/tags/iOS/page/9/index.html","56774dcc482eea39b944ecb5d7c5ced5"],["/tags/iOS面试题/index.html","7b42df2691b4f5a8dbc17cf5a08821b1"],["/tags/index.html","6dea0365a82db18ced85d83427d7d3b0"],["/tags/interface/index.html","81b993e4637ce6460a2f928b3c06ebb1"],["/tags/non-optional/index.html","9935faee78267334017b7e9e94169a95"],["/tags/package/index.html","ab2b253e3ac439c5eadf2cd54a9c1a6f"],["/tags/random/index.html","83775f635a9625b11d31443dc429965b"],["/tags/transition/index.html","d8dc78ace5b7930bb62f6a0988bb038b"],["/tags/三方类库/index.html","d6158711929ee6d02b1ce2fe91824ccd"],["/tags/依赖注入设计模式/index.html","1a0f97a07cc1aea54c9ba06a030a3a00"],["/tags/值类型和值语义/index.html","656c495f7ef34af6523b80de0fe58793"],["/tags/内存管理/index.html","a5f1b212a5bc23c46ee0a88935532b59"],["/tags/冒烟测试与回归测试/index.html","2a60f211cbed36e83934f818930b0f62"],["/tags/函数式编程/index.html","314a36e1591ee0a31664719bef03812f"],["/tags/创建博客数据库/index.html","c1bfe00183dfeb8457091e7639ee7768"],["/tags/初始化模式/index.html","5663f561e0b804c8b0d344e22493e1bf"],["/tags/单例模式/index.html","f217cf28de13c5ba38ed60917d23e876"],["/tags/原型设计模式/index.html","bcb0b9f371388bc18a36f211997ba96b"],["/tags/命令设计模式/index.html","dd6df9000559b424d6ebea58f07c1dbb"],["/tags/基本控制流/index.html","e39f9773a387a1d7207a8e8246121b5b"],["/tags/基础语法/index.html","772ff6a84e0a353e34e895f46c857559"],["/tags/外观设计模式/index.html","d45628bdc01dd46dfe6aab7f4e59db5c"],["/tags/委托设计模式/index.html","eec7d8af543a03b4f345e377b0ffc6ac"],["/tags/子类化样式/index.html","fd9a5b89afdd14ea8eec93ce452dac84"],["/tags/对象池设计模式/index.html","44ea08e6427d1c27f3a96123cd9c4535"],["/tags/工厂方法设计模式/index.html","6b743a78da986ef6516c5498e9e331b7"],["/tags/工厂模式/index.html","c74911e25d01f7596eca7c59ed54b23a"],["/tags/工厂设计模式/index.html","f11b25e1f4ea4e37e06b95defb934fbf"],["/tags/开发技巧/index.html","f6e39388519b7ba9b4dcce2477aa767e"],["/tags/开发记录/index.html","36a27e9125f153585ac30fe0b99f0eb6"],["/tags/懒加载模式/index.html","daebd51510da4a82e88a5b3e5a2a5148"],["/tags/抽象工厂设计模式/index.html","0a83a44b0ea486aaf385e3fd9988d5ec"],["/tags/数据库/index.html","281f5ee18e423974754c6d1444a67433"],["/tags/构造函数/index.html","470448691bf9f796d27a6f473860c2b8"],["/tags/架构设计/index.html","fb54829993207adfe709233f62b3201d"],["/tags/模式匹配/index.html","44a21b62c61ec92495a4474014a37a76"],["/tags/环境搭建与验证/index.html","c8051953e19fa0c28fdbf59680e45b46"],["/tags/生成器模式/index.html","85686970482b4208bc967352a840f3aa"],["/tags/用户体验/index.html","a98730dc0e42931fac5eeca734b53c11"],["/tags/用户协议与隐私政策/index.html","331b80de9272a8cef4abe9d44145c58c"],["/tags/类型与操作/index.html","081e72d824e04de87e9b322b52b7ef7e"],["/tags/自动化布局/index.html","542164b6e852de654a54b453c422280d"],["/tags/自定义UIView/index.html","8028df4c5fd47b898ac11924c69c2f80"],["/tags/自定义转场/index.html","52ee4e4c0ff50f8fdb38d6242f1837a7"],["/tags/自适应布局/index.html","99f9f5f7b239637408b5a9b34b562091"],["/tags/表达式、变量和常量/index.html","8b6f3ce9d884918a4e00a40e0adca02a"],["/tags/设计模式/index.html","cf97c65db14c9cd6b0c172abdbbb456a"],["/tags/设计模式/page/2/index.html","535428a67b93aa97991cbaa788d0ca1c"],["/tags/设计模式/page/3/index.html","0984121dc8edaed9189f4b6cb88c6f61"],["/tags/访问控制和代码组织/index.html","8c7d0c08d2ae2556356392caa986d7d5"],["/tags/运算符，下标和键路径/index.html","1f1b45c62bb86dd827462924526b7021"],["/tags/迭代器设计模式/index.html","e7d429a6e9b38c31ee7e2bcbe42b3b94"],["/tags/适配器设计模式/index.html","f71f0868b9f0da6ebe96e56e1c18f68a"],["/tags/逆向/index.html","5ee6d88b373fa63b1f3907582c86238a"],["/tags/错误处理/index.html","625c12a13ad01f496e67930aaf5ea5b0"],["/tags/静态工厂方法/index.html","6077e8a7901937643b9f27d04e6ff3bc"],["/tags/面向协议编程-OOP/index.html","d42e5d71f459f8707fee133ecf389825"],["/tags/高级主题/index.html","430b53905786a655385f54a6bd04fc5a"],["/tags/高级协议和泛型/index.html","7a9823100077129b8ff2eb7e67afdede"],["/tags/高级控制流/index.html","004f7732ff5b646fa94e084aebc65367"],["/xcode 常用的快捷键/index.html","f33d17336ddf1e55db6915a0d6a91b54"],["/为iOS应用构建输入表单/index.html","ef6d6a6fce5e5c150acd438d21a6913f"],["/产品开发的幕后花絮/index.html","8ffd1d57000017ea9462586beb74ab8e"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9fdd34352aaf58895465416684be1fee"],["/冒烟测试与回归测试/index.html","dfa81ed59384a00b0497add2faa3200b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b0825cf7d269ed2f2964a9907c578aa1"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9bfd6dbd473c471cd3cbdf3a05a81f9b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","94d12a71a89241e61cbfd5ff4ff0edaf"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","026ef61c6c0a38463e9e10831e0d0ed7"],["/在Swift中创建自定义集合/index.html","009bbe07e48f64f667104e92f999322e"],["/在Swift中处理非可选选项/index.html","8a018e9a17ada0cebb96318df50e7815"],["/在Swift中生成随机数/index.html","bd389d643a7ae6224d7a03ac12152e16"],["/在Swift中重构单例模式用法/index.html","22c4af7b43164b0964d1d539676d3a7a"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","a1eec726e35e97e32489d906bcb86b0e"],["/如何为VIPER编写服务？/index.html","8b50cef27ee0253373967921223a2eb2"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","5786377237adf34ab27bdc74905d6fe0"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","50d92a798e74abd2edae11454ca7672d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","82563c1527d2f77c02739f399c8fa6af"],["/如何使用VIPER构建SwiftUI Apps？/index.html","a5b25d093ed965c85ebd6b48a9c94902"],["/掌握VIPER架构/index.html","88c4021aad30ca2f581ddd5ccf45f8ac"],["/揭秘 WordPress Hook 系统/index.html","9f6bd0ac4cfc2ff39e8cc7012e4fe5f8"],["/比较工厂设计模式/index.html","b2e744300e6cc4cd9597c153f75f908b"],["/深入了解Swift中的Grand Central Dispatch/index.html","bc13d0bab1c7cbb6279b543e3effa480"],["/深入研究Swift框架/index.html","c124864c180fdfff9948b95e9732732b"],["/适用于iOS开发人员的VIPER最佳实践/index.html","b33289486ab84cc948edb91e02343ca2"],["/选择Swift而不是Objective-C的5个理由/index.html","92e149fc0121d50cf8c706daa543ad91"]];
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
