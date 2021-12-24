/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","4540c19812d7fe56f68e532fa5f24683"],["/2020年iOS面试题总结(三)/index.html","ec17bae7d0f8b3240dec2cac287925e8"],["/2020年iOS面试题总结(二)/index.html","5613312755cb7d9f176586b91728aee5"],["/Advanced Swift系列(一): Swift 简介/index.html","59da5a88bf7398d57b456ee29579e06a"],["/Advanced Swift系列(七): Strings/index.html","9a70563d28ea5c4976abd6a4ba04b814"],["/Advanced Swift系列(三):  Optionals/index.html","76e07cb146277267ee2e02fde289c208"],["/Advanced Swift系列(九): Protocols/index.html","2c0d23efa18af33d276a7c247443ab5b"],["/Advanced Swift系列(二): Build-in Collections/index.html","b47eeaf345f9b0db77f60e8e40140520"],["/Advanced Swift系列(五): Structs and Classes/index.html","5af3616dc40559e84a077f0cfb5faca2"],["/Advanced Swift系列(八): Generics/index.html","f66d5c9e1c134172b2e623752d699493"],["/Advanced Swift系列(六):  Enums/index.html","4719dce42b2f958d18a2a87bda2a2e1e"],["/Advanced Swift系列(十): Collection Protocols/index.html","0914b191e4364f2127c232bf5d2e6af3"],["/Advanced Swift系列(十一): Error Handling/index.html","f95d847179860335e0e17eb2aa7ec727"],["/Advanced Swift系列(十三): Interoperability/index.html","7f87403d7198f0389d951fdd7ef36809"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","ee4c600ff724d7066952d46e181b9bc3"],["/Advanced Swift系列(四):  Functions/index.html","f181e2d6d24033e0d78a99f3ab483097"],["/App Architecture系列(一):  简介/index.html","ed39276fc07c11420927b1ff88e06078"],["/CocoaPods 设定版本说明/index.html","0f67b14f47482ff211f699055b48cf5a"],["/Functional Swift 初探/index.html","647558d253d08f23536ddccb4e6c8b62"],["/Git 使用小技巧/index.html","bc014edb5e3c86c3da88aa039f288bd2"],["/Go Protobuf 初探/index.html","5cbefec69b349ac0812f09e04369e284"],["/Go mysql Tips/index.html","6494f37c07e4591c9d3cae45028b656b"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","55bc4edcea137ac599cd4826a59e491d"],["/Go 入门篇：2、Go 实效编程/index.html","461a971b0de55b5144a1755d82c42e31"],["/Go 入门篇：3、Go 重要概念/index.html","1851e381ba3b6d3543e058f53ba9c6b0"],["/Go 基本语法初探(一)/index.html","aba24beb0faf53b46937cf72161828df"],["/Linux VIM 命令及操作小结/index.html","e53926ad922323e41d3f22b4b488f149"],["/MySQL 基本操作/index.html","2347a2ef7892d8c21555b3117618f8a4"],["/MySQL-列类型和数据完整性/index.html","b9d8e90dab8cb918cafb4edf5ed772a6"],["/MySQL-数据库设计和查询语句/index.html","54de687d90977c8b3fbeb8c3d62273dd"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b296e1a1c0e3a58d38a5416132764189"],["/NSCODER和SWIFT初始化/index.html","a1b0b646330ab96c1b61f6d1f9217173"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","d80011493d3c73c184df6d64e8a48fff"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","b8e63334475d93ceadb1974ef22120fa"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","c1acb15c711939e51b41daa3926c1a4a"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","b165c3bfa1a142f53a8a7f8e2a4589bc"],["/Sqlite 使用Tips/index.html","39838b3f41a0d46f9b8a68e5b327af0e"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","b61989a830ea0071c1c6aecbe7b1b4df"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4ac960697404a6ee84b2900129852f53"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3d8aba2debdd86baecb29f5b6a135755"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","f7b874248031e0cc715d8661d5f27ac7"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","5ec430981188179fc152f6d2f11e87a2"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","30c9ca5afc47ff146c63bd1247e23c4a"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b56767518a37faae7ee21d9d70d70f9e"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","2c472a54c70ea7df047f9641a991da14"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","cce8e7b672c605425fa0cca039dee5d2"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","7243a85ccac73470f7d109e678ee23dc"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","fbfd0122c75eecb37142479680262d12"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","e4c99ba31cadba7ac815b942e39ae869"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b4684871f50d26430653f06ce4c89858"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","eb4d59e5c89f0aab779a20f92c906316"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","03ec1df02e942a6b2fc0870e1dfdcafc"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","3c5a05db3ea812bd15cab6e1c89efa29"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","a1744c185024ce4887060bcb9c0519af"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","db411728abc93aa06d90f78964c055c8"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","a20d3bc497eaec2ef82dcb02b697338f"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","bc9d8330bf673119b7128cdf8210d171"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","cf68eb4c8ee00395fa8dfedd0aa566fe"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","90c670d48a5bc0b0097146079eaa6979"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","eb07ca59f218bb7c773ca0d168be491f"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","fcc32f2e9b32fffda44e90ca8662caf4"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","24d3183ff3ea2ee8bd2a664673fe24c2"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3034b7a478b995c6d822eb1925e44e7f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0257cfd41819c7f61d156711419d305c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","370e484b5a8b2be769b683721de62e72"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2d3ddb8f71f97950a6f2b85d74f967f6"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","24252af244cd66b868b9556cf2714079"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","06449561544d396903d3b1a05d0d0998"],["/Swift CompactMap vs flatMap：差异说明/index.html","1ee23af42b29ccf6b1b418162054d4a6"],["/Swift Grand Central Dispatch 深入实践/index.html","13bf5be6f9eaaee1c7c08fff5d7c64a4"],["/Swift Lazy属性初始化/index.html","bb1253219efdadb565dbee16de8c1a37"],["/Swift Promises 初体验/index.html","15afeff52a9ad2f9cd3f19dbadb0c489"],["/Swift Promises 探究/index.html","26abf84f7fcb9a8485860b826be2f165"],["/Swift UICollectionView使用指南/index.html","a761e2c30ad34fa0a5585fc1895dd77e"],["/Swift URLSession && Combine framework/index.html","4c26077e7155699367b7103afeeacd94"],["/Swift tips/index.html","66a4cceb5cd778eb359b5ad3dc71cf71"],["/Swift 三方库：GRDB 使用指北/index.html","e5224c9a5a277cbb77a7c48b0d735e1c"],["/Swift 唯一识别的视图/index.html","1ea547bcd3174594fc7e0954c48a9db2"],["/Swift 如何学习现代UIKit？/index.html","f37500e7519a649bc9d022578d60f69a"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","fe47c3dcd2a3f0baf735888dc95fb302"],["/Swift 用 compactMap 替换 flatMap/index.html","d7ee2d1446d2b0aae82d2ce8c8211deb"],["/Swift 选择和播放视频/index.html","070a6b07d410daa2fdae2f8642d6c8e4"],["/SwiftUI 系列(一)：1、 简介/index.html","0fee73f030d43738bac2ee98c7edf2a0"],["/Swift中UIColor最佳实践/index.html","ca3c26d99b24de9bcaeceac07c43d6f9"],["/Swift中快速简单的工厂设计模式/index.html","a178ff53fa92fe21ad3f23789bc24d6f"],["/Swift中构造函数与静态工厂方法的比较/index.html","f735df2771500574db8b2e20f8e24485"],["/Swift中的UITableView教程/index.html","21f08d13b072e917e0dec28a36f0e8c8"],["/Swift中的懒加载模式/index.html","d8a242b581ecd671abb3c6ecba92bd85"],["/Swift中的模块和挂钩/index.html","4ece59e912b8e1e85f83cffd6f6eb1a2"],["/Swift使用布局锚点添加约束/index.html","15dbd0ce8f6f6c2b5641361539d5840e"],["/Swift依赖注入设计模式/index.html","cff7ff5e48129b8f1b30aea0d3affaca"],["/Swift关于Dependency Injection (DI)/index.html","628c9a9c1c01a392fd2951ecf8005633"],["/Swift初始化模式/index.html","fa46328675649f6e36abe16ff7252a28"],["/Swift单例模式/index.html","5e18c52b4f8f3bdb829fa158b7698d51"],["/Swift原型设计模式/index.html","0385cea89c06c8274c849efe73bf75a1"],["/Swift命令设计模式/index.html","c1ae57b7ae996b8162c64c0b7dd5b46c"],["/Swift外观设计模式/index.html","6c90103ebe60b51d4400ff29d9891da3"],["/Swift委托设计模式/index.html","d5e6819cded3b28564b04961e04de4fd"],["/Swift对象池设计模式/index.html","9ec65f84d47a743350d0e99b913be007"],["/Swift工厂方法设计模式/index.html","861684413a841aff4700f47f345c4e4c"],["/Swift带闭包的懒惰初始化/index.html","e3569320690c115183579580259aa239"],["/Swift抽象工厂设计模式/index.html","ef3be8c39230766f109692d1fe620ef5"],["/Swift掌握iOS自动布局锚点/index.html","5b7b1e32106a55ad43774139b5d00574"],["/Swift支持旋转的自适应单元格/index.html","6db250456349c5e5c78939392bc5adeb"],["/Swift枚举值/index.html","9ee07e024a1d80ffa37e30189fa3c63b"],["/Swift生成器模式/index.html","59790731d067b1a78816219af9eb7b92"],["/Swift结合Xib文件自定义UIView/index.html","3b36f47601de750c8501548fc0a86da7"],["/Swift编写的20个iOS库(一)/index.html","0c7e7bacc5c8e6f9746c047941e8baf9"],["/Swift迭代器设计模式/index.html","990f23c1a99bdbd9735745bf45e53e52"],["/Swift适配器设计模式/index.html","afe6948100f7a04426574d145f36040c"],["/Swift静态工厂设计模式/index.html","7503533aa66279f4c56bf8331d451c30"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1553f0fea947bbb9339623ecbc5a1beb"],["/UICollectionView data source and delegates/index.html","177c6a1b23dbf3db76754d2512588277"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","4ac3cf3c98fdb7cd7b0dbd3d426aa6fc"],["/UIKit初始化模式/index.html","8333b4fb408cd8ab622f0729f6ed6464"],["/Ubuntu18.04替换国内源/index.html","e251f71cfd41aea7d2221eda87538d98"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","8d33e0ade99678ce0fe07c08c618cff8"],["/Vapor系列 (一) :  Vapor 初探/index.html","e2921c9e7d9564d342800351c67ad8a5"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","e979b9d9785d8e9fd909202bc6bdf3dc"],["/Vapor系列 (二) :  Hello Vapor！/index.html","12460dc09916266ec206a19521c39021"],["/Vapor系列 (五) :  使用session进行authentication/index.html","ea95a3ca2c5fb5e129273d425a6bb262"],["/Vapor系列 (四) :  创建博客数据库/index.html","cd8491aff41cdadaa3a178e7c245a6b2"],["/Vapor系列(六): 徒手撸一个CMS/index.html","2c89e6457c3461febf2f5b98572809bf"],["/WKWebView与Native交互注意事项/index.html","1228e9fe7c7ec915e145daf393a5ae81"],["/Xcode扩展/index.html","c0bcf4c9d1f17878742fbacc9044bc37"],["/about/index.html","2c5ee2ce59e9bed7aba3c9c5d726a735"],["/appleOS的Networking示例/index.html","8ccd60530a0ace26b7165b68f17a2407"],["/archives/2020/03/index.html","e937a4ce2ac2c63983fe26c431380ff5"],["/archives/2020/04/index.html","1f98e846285c4b9592eebb8657bcdd4f"],["/archives/2020/04/page/2/index.html","74d6cc55d1fa08c6d0a0d20b8fa28ba2"],["/archives/2020/04/page/3/index.html","71f079381f793fdb7fdf43949b56696b"],["/archives/2020/04/page/4/index.html","856021444b676433785e8e48e0d19830"],["/archives/2020/04/page/5/index.html","12cc869fa5a628ef56709475d24b750e"],["/archives/2020/04/page/6/index.html","28211e92cbae87c306c44b9ae533ca5b"],["/archives/2020/04/page/7/index.html","77375cf5c37029199708bd309518f531"],["/archives/2020/04/page/8/index.html","dbf2743027550ff371eeee43e5bf335c"],["/archives/2020/05/index.html","9d171329563221461d0b9c9a75811c75"],["/archives/2020/05/page/2/index.html","44730f396f50a35fa7352afe95772ffc"],["/archives/2020/05/page/3/index.html","22ce32a0007b94b767c6d9b4d369f7a2"],["/archives/2020/05/page/4/index.html","f18d77b2b8b6148548d9ca4f8a7833a8"],["/archives/2020/05/page/5/index.html","e42dddd65caf47f5a003d169fe8ff477"],["/archives/2020/06/index.html","9f08890b34e1d0e6a0d52503d59ecaca"],["/archives/2020/06/page/2/index.html","9ceb56cbe75df2b5bb32f8506a1c1fa6"],["/archives/2020/08/index.html","d7a5d6c514883c4a30af48fc5542e40c"],["/archives/2020/09/index.html","b30cc08da73404a2eee636de3e9aa9d6"],["/archives/2020/10/index.html","f92fc8e9fad684154ed2f43fb7010d34"],["/archives/2020/11/index.html","316937e1168b9048569524c8c8336635"],["/archives/2020/12/index.html","06f4213b4e07e498435fcb0c2bc7cdca"],["/archives/2020/index.html","d99a6a03a074bcbd8e9d5b5df971957a"],["/archives/2020/page/10/index.html","638d26d419a687b7fadba8fc6e143d3a"],["/archives/2020/page/11/index.html","80d9984f43d43be923e222da55526841"],["/archives/2020/page/12/index.html","c042a742dd3f7eabffab59865bebcd8a"],["/archives/2020/page/13/index.html","39ee2e4bedf6862b4a6dca9eb9144d36"],["/archives/2020/page/14/index.html","e19dde0d837f18dd12ada49a8550bce5"],["/archives/2020/page/15/index.html","0d29fd60c8df9585225b91e9a2a0ceae"],["/archives/2020/page/2/index.html","e44598c03897f8d8fbea68a17c368321"],["/archives/2020/page/3/index.html","f2b0032755babf92bc8a7e185bd33911"],["/archives/2020/page/4/index.html","b71fb753e56057d90362c4ac9997599d"],["/archives/2020/page/5/index.html","c35056e3fa2adbe0109f788e9438c20e"],["/archives/2020/page/6/index.html","31fd751a86fad1f0d995b0dda41e7029"],["/archives/2020/page/7/index.html","3b6949842c29d632397e23a90dd95b5f"],["/archives/2020/page/8/index.html","8101fc6761ab713711eca2552eabffa8"],["/archives/2020/page/9/index.html","f77c0a30d0a345d61da74d1021526e19"],["/archives/2021/03/index.html","ab3738f31d881612622ff269b51a87da"],["/archives/2021/04/index.html","c4456d30cb220503f16aed63107ac73d"],["/archives/2021/05/index.html","6a4f6129eea79cc29f22a4b418675d93"],["/archives/2021/06/index.html","93bb4c99bfff4723073f484870d09372"],["/archives/2021/07/index.html","61b501240f40ed98d57652e41d02dac7"],["/archives/2021/08/index.html","d9a89f9b3d7aa23eb23033650391d42b"],["/archives/2021/09/index.html","0804aa493dcb310f1ee0833bfe7a663f"],["/archives/2021/11/index.html","78563dcc7caa996dc01e9487c75ad652"],["/archives/2021/12/index.html","9d01f61898d064943ddb4499e18738da"],["/archives/2021/index.html","04822641953043d2ae04ef202a4a3fcb"],["/archives/2021/page/2/index.html","6c91953ad6b41585ccd4342b24986703"],["/archives/2021/page/3/index.html","add79d27d0039d0069cb11354c939207"],["/archives/index.html","85e95f4c578c6b1564ffefd563b5c608"],["/archives/page/10/index.html","9307326f0a3f23284c1289f4d4cf46a7"],["/archives/page/11/index.html","c0dcc419e6827c608af2a50c3ad933bf"],["/archives/page/12/index.html","4a2055edce886db8e9844f5dd6d78705"],["/archives/page/13/index.html","e68377946797ee18d02deb306b94721f"],["/archives/page/14/index.html","5b9848bcdb8bf696f7b4e35b684c8b70"],["/archives/page/15/index.html","a29c508e3ed7bee6926e84dfcb57d408"],["/archives/page/16/index.html","ec5c2dc1e55f418fc8ac8864938ef5f1"],["/archives/page/17/index.html","942701913675da377f2d9df1c8626e47"],["/archives/page/2/index.html","c28eb5d5acf08dfba0fba0888a5c033e"],["/archives/page/3/index.html","5135b89517eb8289543248aed29fd927"],["/archives/page/4/index.html","b134e95bf9769ab9f8cd77e60aee998c"],["/archives/page/5/index.html","111368b1e5a547255d2888905dcf23b0"],["/archives/page/6/index.html","0f75385a3803cba94fa4e1ffb891ddc9"],["/archives/page/7/index.html","30abe6c118f61fe2db5e1c43b16d991e"],["/archives/page/8/index.html","6c20d940704031ff73588c2a1cca8ebe"],["/archives/page/9/index.html","c861c4ec8f618537a877cf321e0df64a"],["/bugly 上传dYSM文件小记/index.html","81dc30ad4f803a461a72a1ce1216045a"],["/categories/Advanced-Swift/index.html","ccb5b051f1614ca61261b3a929695ed1"],["/categories/Advanced-Swift/page/2/index.html","bb6c8ed2d002f6af7a7fb9f410674486"],["/categories/App-Architecture/index.html","b7b5313a26cd626395ff71076b16c372"],["/categories/Array/index.html","3633a54aaca234330523770a16ef379b"],["/categories/CocoaPods/index.html","591ab8d63d618ee0637ee5069a58bad8"],["/categories/Codable-protocol/index.html","3f3d46405cbb2e62b967f9fed1757888"],["/categories/Combine-framework/index.html","e7dde5a9a50674109736df2d8e537d7f"],["/categories/Combine/index.html","f3e2c5c41806976572d444f1756ac37b"],["/categories/GO/index.html","2abcb0c30f70ea54344f7b459fcda6d1"],["/categories/GRDB/index.html","1cd1d4fea608e1162888fc926a066654"],["/categories/Go-入门篇/index.html","4f80be30e0a060670af9fbef7b0cbb6d"],["/categories/Grand-Central-Dispatch/index.html","979a83d4d776ff83ffa6789dd185b1e3"],["/categories/Homebrew/index.html","2cb2770ff2cd7604a287fc5bdbf48b61"],["/categories/Linux/index.html","48787c576149442f6de917661c78a196"],["/categories/MySQL/index.html","23cfca3806a4ae9ad34eb95193933ca5"],["/categories/Promises/index.html","574239e677c5cd1f526253d24921b50e"],["/categories/Protobuf/index.html","5bfca2c575264d8d977462bf7d3091f0"],["/categories/Result-Type/index.html","7c090019fe33c18e507a38985b608633"],["/categories/RxSwift/index.html","4bdab4285dd04c57e473fcbefc875a2c"],["/categories/Server/index.html","af05238b1e98b12dfdf0bd637525b3e2"],["/categories/Sqlite/index.html","c7842819813a51d09370343dda4cc344"],["/categories/Swift-Apprentice/index.html","76e7a7203297f064bd248baa9d9aa1e8"],["/categories/Swift-Apprentice/page/2/index.html","ebbe025dfb06044ca90978057221bfe7"],["/categories/Swift-Apprentice/page/3/index.html","099a3c9e8443662a27f98688b2ddfe4a"],["/categories/Swift-源码阅读/index.html","0854b64ce6042e6d32deb686631dfa2b"],["/categories/Swift/index.html","a3be1ad006584d5310a65c62021c02a4"],["/categories/Swift/page/10/index.html","52b86348b6df5dcf0617a61b7df95269"],["/categories/Swift/page/11/index.html","49552986d9bcb39c8c31e9600a837af7"],["/categories/Swift/page/12/index.html","cfeabd6f195af28fa9fdcc65a481c3d5"],["/categories/Swift/page/13/index.html","4d5f07d24dfb3f41aa43f4c6dba8bffa"],["/categories/Swift/page/14/index.html","634cc13d1dc534e932f5cefb8f44bd31"],["/categories/Swift/page/2/index.html","ec9d83bdb2c8cd03ef4bafd31a3138e6"],["/categories/Swift/page/3/index.html","951cc5d5fdf17a87c46daa33482474b8"],["/categories/Swift/page/4/index.html","0677bb72bcad675faca0f0415d8e375c"],["/categories/Swift/page/5/index.html","bd17343be15a3c47a9b8c85421579c94"],["/categories/Swift/page/6/index.html","54e7e6bcc8ac162d7fb0271774659461"],["/categories/Swift/page/7/index.html","4194bae6f7a70c4eca44c8c340d92c94"],["/categories/Swift/page/8/index.html","a8a7d184389210b290c668c68a72bec7"],["/categories/Swift/page/9/index.html","66bd5a4cddd7b30e95766ab2016739de"],["/categories/Swift5-2/index.html","304bbe18e2ce2333900583eea27b4696"],["/categories/SwiftLint/index.html","0f08b87783e5e048f029d7e3022f1004"],["/categories/SwiftUI/index.html","289f27b5740f571965a0960b1cbf3751"],["/categories/UICollectionView/index.html","2e8a041ef9ca384b9b75fb386ba71079"],["/categories/UIImagePickerController/index.html","f9e88643c6eeec22c9ddd2e359a8dbcf"],["/categories/UIKit/index.html","02257edbef3c1231a67d006bba224ca2"],["/categories/UIKit/page/2/index.html","a7344c3dfafd8baee48e5654fe64c61c"],["/categories/UIKit/page/3/index.html","69e299b041dcaa9b9afedcfa3879544c"],["/categories/UIKit/page/4/index.html","051925b68732d70f9931bdc5c315ee9e"],["/categories/UIKit/page/5/index.html","b16615903e8fec5072ee4b66e62de1ba"],["/categories/UITableView/index.html","6a26f05b3c61bf7a55abea003790de82"],["/categories/Ubuntu18-04/index.html","ce0d9ee414d4d6d8640e05adf6e6f265"],["/categories/Ubuntu软件源/index.html","d1bd05c407cf0ad67c2f848a7c772881"],["/categories/Uniquely-identifying-views/index.html","ea3f4cb8c8fe888a6e3203b7675e3aa1"],["/categories/VIPER/index.html","9c4d7b50cd526da63de0edfcadd9aee2"],["/categories/Vapor-4-0/index.html","3c12f19892aa5004fb7649ff1381fa14"],["/categories/Vapor4-0/index.html","43eef93a5ac780152159ed00c4fc4550"],["/categories/Vim/index.html","22c8b4265f89a73e02c7165cb33d0ed7"],["/categories/WKWebView/index.html","7454c7eec50b9b2186e286d17f9c55fa"],["/categories/Xcode/index.html","57ac111330c064739d02471a8b165d28"],["/categories/appleOS-Networking/index.html","e06fc9fd7ccb57055c904c93568354f3"],["/categories/bugly/index.html","b39eabe069e21127050857243745ab63"],["/categories/enum/index.html","630e8096973767855bd87ba4c14bbbb5"],["/categories/git/index.html","10f3cdcf39e042a994751027e0d52e8d"],["/categories/hexo/index.html","81435be5fdc2229fc619d01d95d77982"],["/categories/iCloud/index.html","48b64dda44beb49d43297855f41acf1d"],["/categories/iOS/index.html","f78b06beb7765fe98044ce16fd105620"],["/categories/iOS/page/10/index.html","afae95701f1074f509d1af8d0445e3f2"],["/categories/iOS/page/11/index.html","2567056d524218d7cb98da34bd721e0c"],["/categories/iOS/page/12/index.html","fa56acd376191164c2e9ba5522c5a5c2"],["/categories/iOS/page/13/index.html","09285a0e6a8a3fbcc08df1a5e0f5574e"],["/categories/iOS/page/14/index.html","c6ced9cd4fb08776af855d41caa278d6"],["/categories/iOS/page/2/index.html","b2aa734e231dd64d29772a6240fb2b28"],["/categories/iOS/page/3/index.html","8f90ca288df5c6e78139ed59d874ef95"],["/categories/iOS/page/4/index.html","c4d175712fe1c2cb2e09065e26f10a78"],["/categories/iOS/page/5/index.html","9e2474e371489bf143e26d61e17ff4f5"],["/categories/iOS/page/6/index.html","eaec12be7f1775e67e6a38622bfad32b"],["/categories/iOS/page/7/index.html","ef241c524e3c5fcc3371115f248ae0f4"],["/categories/iOS/page/8/index.html","0e7493d87aadd86efb0cbc3f04b4b042"],["/categories/iOS/page/9/index.html","58a1074a5b49496b822bd31ef7c87166"],["/categories/iOS面试题/index.html","34e9bd5188b6bc95e61d525655960ed0"],["/categories/index.html","e77d7f8fadc85a07b6aaf05616c77c0a"],["/categories/random/index.html","af1dc0d86a3db701aaec7737cdda856f"],["/categories/三方类库/index.html","435dec8d28e4036e5e36c0c5d6170bf7"],["/categories/函数式编程/index.html","4cab11f2807834a1d5ad4b8f90f2befc"],["/categories/子类化样式/index.html","fcce1868251b973471503aec4735dfd4"],["/categories/开发技巧/index.html","9652d172129e36e0782ca6c91f8db670"],["/categories/开发记录/index.html","61c965da437a83d1d8510fc4fc3bb0d5"],["/categories/数据库/index.html","177124c89a29b4b5214c632234f6247e"],["/categories/架构设计/index.html","1641c1778ac652a8566ad29f0ecb6444"],["/categories/测试/index.html","94df3aa522738b383a308429f672b601"],["/categories/用户体验/index.html","3ff412edae9196dd1d7d8b0b5194b112"],["/categories/用户协议与隐私政策/index.html","4169747c8e699378f91b8b2f158d233f"],["/categories/设计模式/index.html","ee6daa5932027bfe140a8718d9a5809a"],["/categories/设计模式/page/2/index.html","bdc9f425bf446c2757d84e8869143607"],["/categories/设计模式/page/3/index.html","8e1fb8dc1fbc07b3a1b266e99c910170"],["/css/main.css","f95b1aea7c4bbdb05d77ede67dcb84e8"],["/hexo部署失败/index.html","66d4a61b6d89308b0fd359bb5f79df60"],["/iOS 15 适配/index.html","8f5d1bf781c9aac7288c8a85c2db1c0b"],["/iOS VIPER架构深入实践/index.html","806e9f8d2f84a0f8e0af915f22ebe157"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","b8ee17d21194a203c69bd3c16411bba9"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","2a6c9df39dbe9056be10b9fbf609e709"],["/iOS 自定义视图，输入表单和错误提示/index.html","a5f58791556c900d8f67021d4430a42f"],["/iOS如何使用iCloud文档？/index.html","d0badff980ed91a42310cc19c9e62548"],["/iOS子类化样式/index.html","bd56b9ffa463fe83f5102eff9eef111e"],["/iOS开发记录<一>/index.html","1d4f371af88aa8d93bc2c60daa8f9c89"],["/iOS自动化布局编程/index.html","a66a54cd496d5c7ca915580757d4e9e6"],["/iOS自定义转场(By Swift)/index.html","6ac8f87ba7f9ec9c8c5a90c08e6f033d"],["/iOS项目架构：使用VIPER/index.html","480bdeefb7a5dd4ad8c7e942a4acf73a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2d6a2fe99ec69c4cc548a314bdd668a3"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","0de2aa9387e82906209b8d3f983bff37"],["/page/10/index.html","72fc99e3b66b2104f5d2b363f403b3ec"],["/page/11/index.html","7ae5de96e8a6ed6572c335a9bbe1d7ab"],["/page/12/index.html","4d839a65aa9648dea9d03459a512921a"],["/page/13/index.html","471d995bdd8aff779ba1517e1f908cec"],["/page/14/index.html","e49e550b198752f04e8c4990eaa55b29"],["/page/15/index.html","c970e0850668b1d142296c122da0c333"],["/page/16/index.html","d092fb380915f1319f4f13c2391cb0e9"],["/page/17/index.html","fe1aba3710b6e1c8f891d90a6c27c96d"],["/page/2/index.html","af3350db7f373269de4225e8186b44ec"],["/page/3/index.html","139f17b97d05f6ce79bc7e7be84d8111"],["/page/4/index.html","baeb16ae0740ee25bfc6501b5dde3fa6"],["/page/5/index.html","f89645a79c83f69d18b8ad544ba58d6f"],["/page/6/index.html","e78ecd9c503fc15f0ef091c76488e7cb"],["/page/7/index.html","c4f2ae93d2413f862a02b273e6d8bcb2"],["/page/8/index.html","25a8702ad72f7be7fa031fb8d7e116e7"],["/page/9/index.html","8194b77433c25342440fb28e9a4a881d"],["/schedule/index.html","06aaba9e25931997fa42515aaf599d63"],["/storyAppPrivacy/index.html","d27ae86451c988eae486a41c5f1d3fa2"],["/sw-register.js","f4335d97269f131a5e82675bba168883"],["/tags/Advanced-Classes/index.html","3250263e4187c0f894bc35c2feba1e54"],["/tags/Advanced-Swift/index.html","0d5d8f97725e3b6cd6b57ce19985ab63"],["/tags/Advanced-Swift/page/2/index.html","bac1f7a98bf45e35802be6641db045f2"],["/tags/App-Architecture/index.html","7a14c67dba88c814c00d20129432e688"],["/tags/Array/index.html","efc696fadb650539390487835badc994"],["/tags/Arrays-Dictionaries-Sets/index.html","2cb029d3b6b706877d5ec8d6551464ed"],["/tags/Authentication/index.html","5290417a321ee8ed0ac39f833246f941"],["/tags/Build-in-Collections/index.html","74fb854ae162e95a94c56da4a5c9a2ac"],["/tags/Building-Your-Own-Types/index.html","4f79ed2794e941f9520403b39543f99d"],["/tags/CMS/index.html","2f66279ea009254eb7c54d2cf08ef751"],["/tags/Classes/index.html","7371376c3d8d78f84ea7ea149cf90e0d"],["/tags/CocoaPods/index.html","42e3279b402836ea0eca27f785e31057"],["/tags/Codable-protocol/index.html","4646b908f58bec670d34db3466e1d4d5"],["/tags/Collection-Iteration-with-Closures/index.html","bb703f58b498cd3cf74d8d128a57c2fe"],["/tags/Collection-Protocols/index.html","f1eeab950bb3ca0f6c76e120cd930a0c"],["/tags/Collection-Types/index.html","e44787cc5f6b3282006a2cd93ac6b1f9"],["/tags/Collection/index.html","db0d05a27767b2fe07827dac628ad227"],["/tags/Collections/index.html","4187be654020e5d5cb835a44ed8c35cb"],["/tags/Combine-framework/index.html","3a7fd702d91973b06f5c2e3a57c4dcf2"],["/tags/Combine/index.html","d8bda811154b15db06ec4093334b001d"],["/tags/Dependency-Injection/index.html","6f09dd8db1aefe2a9190e030c331a7da"],["/tags/Encoding-Decoding-Types/index.html","ef2dfcff70353db58e62683d79a2155d"],["/tags/Encoding-and-Decoding/index.html","8f68441c965dde54e8f70d4fbc011273"],["/tags/Enumerations/index.html","754a265faac77daeee077247ddce3d56"],["/tags/Enums/index.html","25ce402860c03aef9a5d0ce294704de7"],["/tags/Error-Handling/index.html","e2641e78ba4a83aa9872b283c3547ea5"],["/tags/Functions/index.html","5bac90a977161db64827df48cc187b46"],["/tags/GO/index.html","b7779a78d5d2ad8757c1c169bca80e87"],["/tags/GRDB/index.html","3bc15cd584ebdefb8e7f060c8dd9012c"],["/tags/Generics/index.html","ac166022ab42242ad09ad5258dfdabf7"],["/tags/Grand-Central-Dispatch/index.html","4fea94e4e15f05c3753a55def81ea3af"],["/tags/Hello-Vapor/index.html","4c587b7b3cbbbe02ba47dee96803eef2"],["/tags/Homebrew/index.html","318533c4a3a5691333635e556bd96cd2"],["/tags/Interoperability/index.html","58ff5b13a25b50d55001fac5202f18d8"],["/tags/Introduction/index.html","91cbd2665a2e09a42a20fccbd05f2db7"],["/tags/Leaf/index.html","26fc57a024d7089901423128536ef168"],["/tags/Linux/index.html","b909fa6d70431bf3793389221be2153a"],["/tags/Methods/index.html","d755fe5ee0c6aa099593d18c463bdbb0"],["/tags/Modules-And-Hooks/index.html","c3564b4943e812f84bc79a7d6b04090c"],["/tags/MySQL/index.html","e42a51e8bec72668152d2dfc7a3b09a3"],["/tags/Optionals/index.html","ee24acd8f85d5a2557f224dbcfa894b0"],["/tags/Promises/index.html","61fde74815e56d49d57f684dc2bfaaec"],["/tags/Properties/index.html","ab7c17fa518f7ac6564c55e44647adcf"],["/tags/Protobuf/index.html","36c9981ea9f5c4d2aa56e8f5549b76d1"],["/tags/Protocols/index.html","f34abb7be7cb824f2b820c57ba73b03e"],["/tags/Result-Type/index.html","b9ba85602d4b16fbbb807db16a20f315"],["/tags/RxSwift/index.html","adce24038ec7f8e402dcc9ae6da1961b"],["/tags/Server/index.html","0831c93fc52bb99a6615b678493c9577"],["/tags/Session/index.html","af153c71f3468130aee391aad3d27f9e"],["/tags/Sqlite/index.html","f67c8fb230d0f4f9f7f995bb70db1e48"],["/tags/Strings/index.html","8cf68dbe2adefa3024955b89cb10ce4c"],["/tags/Structs-and-Classes/index.html","6022227285f0f6cd0e43b1357de1d19b"],["/tags/Structures/index.html","def1b8b96ffac4022ad284c506948384"],["/tags/Swift-5-0/index.html","4d18481f37e16ad787549d57ea6418a7"],["/tags/Swift-5-0/page/2/index.html","ecb8d6229f39a821199f6502ef090e0f"],["/tags/Swift-5-0/page/3/index.html","e89a6e052fef56db8cbc0617fb5adc57"],["/tags/Swift-5-0/page/4/index.html","1bc952b3b1a13ffaef8d87b5afde64c5"],["/tags/Swift-5-0/page/5/index.html","2e5f3897bed6e8abf2a0a4d22d8c3f4d"],["/tags/Swift-Apprentice/index.html","28fee102b9f75420aed8ffa09cef9b3c"],["/tags/Swift-Apprentice/page/2/index.html","a904a9567a04bb515b2a762b8348f49e"],["/tags/Swift-Apprentice/page/3/index.html","e787e3023898cb38b23860953098aa37"],["/tags/Swift-Package-Manager/index.html","da8151bbd565b31a60f35ce429d5c776"],["/tags/Swift-源码阅读/index.html","f6dda32d117f299bde4168d7cf12768c"],["/tags/Swift/index.html","925010cdfa8d16fba819eb4204d5a8af"],["/tags/Swift/page/10/index.html","8fbc5e18b2361578a98bf11be51bf250"],["/tags/Swift/page/11/index.html","ea189bac31ca14e361052ce91237bfac"],["/tags/Swift/page/12/index.html","cb93d4f078da0626be22acd94b3a5c15"],["/tags/Swift/page/13/index.html","d26178d2b1be2beda8488c36e5faccf2"],["/tags/Swift/page/14/index.html","7fd86a2287ee0a2c4d7628a75e2b0954"],["/tags/Swift/page/2/index.html","152f98bfe2b879bc3dbe1935042b9b7b"],["/tags/Swift/page/3/index.html","11bda566932c0705cf72b5c259714f0d"],["/tags/Swift/page/4/index.html","8a11d1fff9733296578414d1998907a2"],["/tags/Swift/page/5/index.html","c01b539e5109ff2ca4faa64ca9a8e74e"],["/tags/Swift/page/6/index.html","ad7fba8f107a21791efa2bc212591df3"],["/tags/Swift/page/7/index.html","762e689f9d939870b70b7e6789d376d3"],["/tags/Swift/page/8/index.html","78bfde6b8d1fdbfa2adc354c1dbc14f8"],["/tags/Swift/page/9/index.html","2398acb4d4bd97a9330ebe0d19a529ec"],["/tags/SwiftLint/index.html","8d8b4be0800ceeeb108ea94fd1f3badb"],["/tags/SwiftUI/index.html","e42c1af5f6ed218ef1f398184006da89"],["/tags/UICollectionView/index.html","5da3f25bf3c2af502421a8e3753b7392"],["/tags/UIColor/index.html","ce7cc36fe8c131357a168daeaf884862"],["/tags/UIImagePickerController/index.html","2e51416f23b262a72a9bc55a9494104c"],["/tags/UIKit/index.html","c9743dc02c2db738bd47d12a0b5ce424"],["/tags/UIKit/page/2/index.html","71bc39357f208a27d13514da792ca0b6"],["/tags/UIKit/page/3/index.html","42b5d7a8b0a8f3d4ba018590f58faf60"],["/tags/UIKit/page/4/index.html","fe248b7b27d57f6c48e5430bcde65448"],["/tags/UIKit/page/5/index.html","8578741c0fda65c2aa20bc7b62bef46e"],["/tags/UITableView/index.html","3527eca1def426d774453b1f08250676"],["/tags/Ubuntu/index.html","e6b764d7e2fac6b6bf8cc5f9cdcb48b6"],["/tags/Uniquely-identifying-views/index.html","a08a71484425966884e6353523d5c2a9"],["/tags/VIPER/index.html","1f02766e2d9872b1e11a236241439570"],["/tags/VMware/index.html","3eb96dbaa5e22611ac3e8997f277dbe2"],["/tags/Vapor-4-0/index.html","bac76ed5de4d192cbd23fa5aa6e47ef8"],["/tags/Vapor-初探/index.html","412085924148712c2e9e769aa092b66c"],["/tags/Vim/index.html","1a0ca5c7740aea3ed4c6c4fa13745f8c"],["/tags/WKWebView/index.html","ddcbda80518bb0f3fc61b22bb514391b"],["/tags/Xcode/index.html","be8f790575fc178a7b4c23db0b251097"],["/tags/appleOS-Networking/index.html","c7204461568bbf0f40d6cb0c06a8d734"],["/tags/bugly/index.html","ec3fede907fccaade1d67fae0cd04a67"],["/tags/enum/index.html","dbeb453ca0f52d802c430861ed4f815b"],["/tags/git/index.html","b9dbf4dbc1e4bdf7f477cf22ddacb835"],["/tags/hexo/index.html","4684ad7319c1ab1aecb6edc7f91c0837"],["/tags/iCloud/index.html","1b58c1888832444089d39c143ca1ad17"],["/tags/iOS/index.html","cf5b5b2879a604cd1d08c7f733f1c1b6"],["/tags/iOS/page/10/index.html","b36908827df25f991e869198e9f366cf"],["/tags/iOS/page/11/index.html","d1c097a12431c8bc478c6a12516c4073"],["/tags/iOS/page/12/index.html","916452870fb55c781bc5ce899fb81741"],["/tags/iOS/page/13/index.html","8949150dba4282fe2cdab57430bbf80e"],["/tags/iOS/page/14/index.html","36c185ccf940ecb3cdeedbcd98e2eabe"],["/tags/iOS/page/2/index.html","f505056b4a9efe9078a73dbf33b514e0"],["/tags/iOS/page/3/index.html","8158c3a0ecf39b3f3bf2b13b44ac5302"],["/tags/iOS/page/4/index.html","a4cd28027a35d2005e5ee190e824afb5"],["/tags/iOS/page/5/index.html","a0f041de98815a04a01de625f6f85253"],["/tags/iOS/page/6/index.html","94e4b9796e34f95584a4ccbc138f16e5"],["/tags/iOS/page/7/index.html","747fd3121ce27615b4bfd88c95551db7"],["/tags/iOS/page/8/index.html","d35f65eaa2c25be470fb0de0bab97612"],["/tags/iOS/page/9/index.html","fbd87547206d332cf7a24aaa5928b2cf"],["/tags/iOS面试题/index.html","5712487e95a035577d4fac3e8a5ef83e"],["/tags/index.html","ebaf1c6b82dbcb64fd2e265ac43fe69a"],["/tags/non-optional/index.html","7b2c0cd7d59de002f26e6273c11f04ac"],["/tags/random/index.html","c6d62b26e888a6fe7e54464d707a2dbc"],["/tags/transition/index.html","a207ca31c482894f072094cdcf78d5ee"],["/tags/三方类库/index.html","0de97f5ffc48bf91334ef12e02451551"],["/tags/依赖注入设计模式/index.html","f433168d6141428d7dc5f55b79be59e1"],["/tags/值类型和值语义/index.html","4b76fc1736054bcb8e771c9bea2e5bdc"],["/tags/内存管理/index.html","e6aa78f03a1b8558ed3f82c021a428b2"],["/tags/冒烟测试与回归测试/index.html","30c4ebd85f1a965049ce22c491d6e1a0"],["/tags/函数式编程/index.html","287ae6c174752c5f47c6871b31a8654f"],["/tags/创建博客数据库/index.html","57679ee5ced1be5717a59153e89d5cfa"],["/tags/初始化模式/index.html","025ab359b3e3365178d20e7ab6148b48"],["/tags/单例模式/index.html","90d9072a620e6e17149354998a54b0af"],["/tags/原型设计模式/index.html","38000e5f1cfd1d9d497b5f86745f399b"],["/tags/命令设计模式/index.html","766e439786b7f7ec2c667d4a19a24b75"],["/tags/基本控制流/index.html","173d6db5ecf4bec40fc21ae7e16c83aa"],["/tags/基础语法/index.html","5e4f2a593afb89306aa3290348e9434a"],["/tags/外观设计模式/index.html","3c23d061e32006d8c07726f0856ca990"],["/tags/委托设计模式/index.html","22fa7c30e56c765bcf64fe10d0ef7914"],["/tags/子类化样式/index.html","a8b3689f2482e938350600a0b20e9d48"],["/tags/对象池设计模式/index.html","ea3089810d48d5a5c9b1240e31a902fa"],["/tags/工厂方法设计模式/index.html","545ce71ef51e8742f56f3f8f5e1ce0a6"],["/tags/工厂模式/index.html","9382c6a104f6dafc8837b56e263f7fe9"],["/tags/工厂设计模式/index.html","7b7e3b5b79d209bf7d5c6015b84da291"],["/tags/开发技巧/index.html","33cd2184bf8a19e9cff3169f9b026463"],["/tags/开发记录/index.html","b3740b165d9701e99f353dcc2c06f8b0"],["/tags/懒加载模式/index.html","4360807cf93a7fac958bbabcff08d74b"],["/tags/抽象工厂设计模式/index.html","b66bda83183eb090ad030aa4a86cda9c"],["/tags/数据库/index.html","66cbd2bd11cf60b8f59db984abfc0bca"],["/tags/构造函数/index.html","9accfd04e4f403c8be3f4844d5a75e12"],["/tags/架构设计/index.html","4b373e401dd4256cb162064b6dec3275"],["/tags/模式匹配/index.html","48ecfe702e6f6cdd411f175fdc5a447e"],["/tags/环境搭建与验证/index.html","1904cb75240ab3d5b6b4017da070244b"],["/tags/生成器模式/index.html","81e61984265aa72104fe3fcd506d21ee"],["/tags/用户体验/index.html","ee7a4edc3b33516c22ee2198096cf446"],["/tags/用户协议与隐私政策/index.html","740c9e2f19b98a96119ba6630d23070b"],["/tags/类型与操作/index.html","18c43aace4991f0da1b3aa9abd99f8e3"],["/tags/自动化布局/index.html","4c7d8d7f73168ebc9746e1ae2449acd8"],["/tags/自定义UIView/index.html","bbd683eb3fc0890d408e866c41f1a82d"],["/tags/自定义转场/index.html","8d59fa829547d4325573e424f9d65a08"],["/tags/自适应布局/index.html","b0ea64ad7f0100ca0f183c4540d13170"],["/tags/表达式、变量和常量/index.html","a60a1885a6f523f6f5a9286078b6b3fb"],["/tags/设计模式/index.html","105f1aafbd61d93bf7c9d809ba3c7a43"],["/tags/设计模式/page/2/index.html","198c40ad670920ad1cf03d79e6d94064"],["/tags/设计模式/page/3/index.html","90dc22ef9bf07acfb6db446627bb8906"],["/tags/访问控制和代码组织/index.html","c2b655ef476d9904a9904b00ab0c706a"],["/tags/运算符，下标和键路径/index.html","0f09bcf678435be1348d56b19494637f"],["/tags/迭代器设计模式/index.html","d83723097588dd51e252cb8ac3a27dbe"],["/tags/适配器设计模式/index.html","29cd7a7da920bcf4be15b1ccf2f3e4ff"],["/tags/错误处理/index.html","ba284184d486ceeca3b89cda893bb14f"],["/tags/静态工厂方法/index.html","bc392e1b628caf173626eff0c00f5a84"],["/tags/面向协议编程-OOP/index.html","0a763c9c2a28c1df1d9e4505f077a799"],["/tags/高级主题/index.html","469e216e9c2279a59671bf9bc4e3d316"],["/tags/高级协议和泛型/index.html","fa34421e81c5a40cbb32b23193ab8f75"],["/tags/高级控制流/index.html","394fae22f52c32ff7fdd360979de6bc6"],["/xcode 常用的快捷键/index.html","7054f4665aa36bb4eb9ae0b565ec2e28"],["/为iOS应用构建输入表单/index.html","57ceda2669b0155b2e4c2bb3467b72c1"],["/产品开发的幕后花絮/index.html","08e64fc9c98432826e758f7c451b3e2c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","32c1978a0d8d95da6fd8390e3d3432c6"],["/冒烟测试与回归测试/index.html","beed9813d54d3cd30ea27e530cae080c"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b6468031b0cafea07131c6e41cc0d54d"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","493864ea8910d26c028b2070e84c4a03"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","ad25f4d0fcc1332bee8553c80ca47550"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","31afed9161984fe597a19f45c4640da1"],["/在Swift中创建自定义集合/index.html","6b5eeb8dfcf80b6b87eb548178c1f3bc"],["/在Swift中处理非可选选项/index.html","fc9fa37820065af4603ad0e02f0558f8"],["/在Swift中生成随机数/index.html","4b122b0c5c01373b5a6e010027caa7f9"],["/在Swift中重构单例模式用法/index.html","c22f516b9b1e5bccfc18a742ab1d1375"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","d3e15127a9f857211c36693e45597439"],["/如何为VIPER编写服务？/index.html","a41feef6dcd83dd8afbea8180979812d"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","6e61353be205ef1c50b4caf8af2df283"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","b2f128fb9df585c853b5bd10e38c8799"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","c42de4e36ba2d7392e0c3c8e41f492a1"],["/如何使用VIPER构建SwiftUI Apps？/index.html","727b408e90db0f6defd9f0b463f1eade"],["/掌握VIPER架构/index.html","fb0f4a27bf38991143dd20bb72f97c3e"],["/揭秘 WordPress Hook 系统/index.html","73562a733989476b0746269caa01401f"],["/比较工厂设计模式/index.html","5d6b63c8032dad72a62329f09e68ce25"],["/深入了解Swift中的Grand Central Dispatch/index.html","428f9c4ffddb7a1943c52b46e66c29f3"],["/深入研究Swift框架/index.html","ac768c34b4e91be25b93973706a1f2a7"],["/适用于iOS开发人员的VIPER最佳实践/index.html","87798efea4e28a89f5b39d07a374b26b"],["/选择Swift而不是Objective-C的5个理由/index.html","2ab73c7466671808ef4ba8deab3acbec"]];
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
