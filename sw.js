/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","9a41d37851dd0904fd8c0f5cfcf215bb"],["/2020年iOS面试题总结(三)/index.html","484968da9d398bb1a569fa15e3c6c683"],["/2020年iOS面试题总结(二)/index.html","ac1e8e6db4491ca0a3f0eab6a7d09a0d"],["/Advanced Swift系列(一): Swift 简介/index.html","1e8ffae29b2e4361c0908496ce95bbdf"],["/Advanced Swift系列(七): Strings/index.html","ff145c2db8b3240e5e50b86862eba1e9"],["/Advanced Swift系列(三):  Optionals/index.html","2ffc4f85667e7b63f4ae09ef5cb12fbd"],["/Advanced Swift系列(九): Protocols/index.html","9c526475f889e1940a1fa679e84fc296"],["/Advanced Swift系列(二): Build-in Collections/index.html","21483cf747182c8e6f2a969a8b8d7143"],["/Advanced Swift系列(五): Structs and Classes/index.html","3c5bddde1ecd81ff4a5723ddee10bd3c"],["/Advanced Swift系列(八): Generics/index.html","e075f33ad6ceee0794496d6c5f1b0398"],["/Advanced Swift系列(六):  Enums/index.html","cfaadbf8d80c93fa66e6bf9e7418fbe5"],["/Advanced Swift系列(十): Collection Protocols/index.html","8cf9f10f072b3db6c85bb6d17c9305a3"],["/Advanced Swift系列(十一): Error Handling/index.html","d740289ea92d55dca8f0759c54932017"],["/Advanced Swift系列(十三): Interoperability/index.html","63f1b06e5ac849c5011cc616ca2e269f"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","260b5f50e7c439d0c246540b305dbe60"],["/Advanced Swift系列(四):  Functions/index.html","cc5c747031a0f52a58b448d0d796fbe5"],["/App Architecture系列(一):  简介/index.html","0dd0c50c542dc95bb0b13526e35c02ba"],["/CocoaPods 设定版本说明/index.html","099fb1de10d9ad1112ed84c324a226ef"],["/Functional Swift 初探/index.html","5a042f89dcbf05f48bd61eec2023af73"],["/Git 使用小技巧/index.html","e204b0c7abd6a338e7343ba7e11c4db6"],["/Go Protobuf 初探/index.html","59664e0c94bb4444b547d03b2a9f8f3d"],["/Go mysql Tips/index.html","4e1fa252d19bff6a8f72aa9caf7fca54"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","d6738c032ff74f1c242497fc3a1aace3"],["/Go 入门篇：2、Go 实效编程/index.html","e79ca84717d1e45427c32a5ec6bd8800"],["/Go 入门篇：3、Go 重要概念/index.html","2e84100816b72438425fd55b08026be3"],["/Go 基本语法初探(一)/index.html","992acf4e04ba0b97ee32719360555df6"],["/Linux VIM 命令及操作小结/index.html","2af5b453ee1334f0447614a0641bf814"],["/MySQL Tips/index.html","a634ee2282a945554e98d651ba4051b3"],["/MySQL 基本操作/index.html","71151a543d9eecf6e0962c39821b6902"],["/MySQL-列类型和数据完整性/index.html","b1ed3d707707e5c0eab62f932e254628"],["/MySQL-数据库设计和查询语句/index.html","21c895069c12a5489629ff235c71a48c"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","7d8143fa97b7b885b02e6982069a333a"],["/NSCODER和SWIFT初始化/index.html","07cddd2a4186762a1e67949a72c222e1"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","a3b86ebadcdb04fc7658fb9aefb34ce8"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","6762cfdd2615fa30817f42512922545f"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","0e859592dfcb2760588ac4e4b0a8e3a6"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","ff6f48811770548a3a68885527ccba81"],["/Sqlite 使用Tips/index.html","04d03e1486eee061a76b55871d4dd699"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","4cf42793e91c493bcb509cdef755caff"],["/Swift 5使用UIImagePickerController拾取图像/index.html","42006f0d4220d46a356470ffa11b73a6"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","3dbe4033310d878bd26d25f2b9454d83"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","3a3e8fb110acd0c561b3377371b1a605"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a3f224d87fcdf3050e6b4395e70475df"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","6dd1d3aad51b56bb2462d5d478892c52"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","38a8284d9b49c9874921841539cb0444"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","c2192a4f5914da17157dcbeadd4e014f"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","6490da2c566fbdd17b28efdbde9b1a60"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","9903672294d6ba7fa7837036b3b2471a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","70f1c45f2b7b85454c41ea9c592272aa"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","b8501bdca6ebc8db72074e4b14b0033f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","4fb1bd8e87cf22320e074ed724b6ea38"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","d4bd7438df052ca9e1a3a465be05a2e3"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7e87f1540b1a60a9e65eba4ef8345f58"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","b16927110b71e867fed383589ce78022"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","c2cb345b2a16fd2cfec0d289e6193b21"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","57537a637d8ba625f170f0730bae921a"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","02b5d582cc8b258611024d04ff6b6240"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","73f5fbc06bbba0aab2e721cd53773884"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d67b24c2d410dd4fbc304f091050a9aa"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","31f47e5e443ac9db5656852249aa40f4"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","55b222505c5cc2512165f5694b152e48"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","121794e481cd78f5127f9ffe8b4b6340"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","55c7664ab2fe000db9b6d0e9f54cdbff"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6570b6a6530573b9de28f3c991999f25"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","a93740801409058529312c33c66dcf14"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e5cf65096adbfccacf5bf812d7dcd37b"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","510ccb2a4f36eeb884d4adc1f307fe40"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","57b2ea59ead32c5620e9dec94563c265"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","4537614259bc02329ed2d81442bbd484"],["/Swift CompactMap vs flatMap：差异说明/index.html","2ed71c6690d07587d81e3626b80a70d2"],["/Swift Grand Central Dispatch 深入实践/index.html","cbadc0e52aff41260ad128f8545806a6"],["/Swift Lazy属性初始化/index.html","839e70c46ec8883e6260258adaaa0e8f"],["/Swift Promises 初体验/index.html","904bb01c3dd5fc8a0dbdc09ad7a18088"],["/Swift Promises 探究/index.html","ee5493931585d936604a0f75f0a590e1"],["/Swift UICollectionView使用指南/index.html","ffe73f48725eded0ec9483f0f95bd799"],["/Swift URLSession && Combine framework/index.html","dd78ed6eb2b85f14956055bd149d8f67"],["/Swift tips/index.html","cff5b97760d8d670e985eaec1b9afa2c"],["/Swift 三方库：GRDB 使用指北/index.html","dadb86e0aac212eabf052e69dada28a8"],["/Swift 唯一识别的视图/index.html","ed70c87b3bb8ee87d81d12fb2a569a87"],["/Swift 如何学习现代UIKit？/index.html","39547f5b78b74e8672411fa2a3c31a95"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","1acb619b9306f76b0f093e30c2bf12de"],["/Swift 用 compactMap 替换 flatMap/index.html","9c487feb5e509284153edfdf44ba0216"],["/Swift 选择和播放视频/index.html","7a34d815a8bb80159e6ad6b461f05db2"],["/SwiftUI 系列(一)：1、 简介/index.html","3ffa55981fda72d9dec986d2fdb2d523"],["/Swift中UIColor最佳实践/index.html","f69bef314997213ca68faaad87757af7"],["/Swift中快速简单的工厂设计模式/index.html","22842cf7bd50ea583f19eb7208bbbe7c"],["/Swift中构造函数与静态工厂方法的比较/index.html","cf12129df0604d6c3133ac05b5542f7c"],["/Swift中的UITableView教程/index.html","fdc2a357a89974bd3b3f041ee309f4c8"],["/Swift中的懒加载模式/index.html","ed7ffb156db2bdffdbd972d160748edd"],["/Swift中的模块和挂钩/index.html","62547fee55b58685a1fa864672afc4b2"],["/Swift使用布局锚点添加约束/index.html","bc056b082882eebb351816c4be23a5ab"],["/Swift依赖注入设计模式/index.html","9fd53944fe0711df68d67528dee7b869"],["/Swift关于Dependency Injection (DI)/index.html","5f238ab46070526b019b39e7493eaea0"],["/Swift初始化模式/index.html","19ae0814720a1c9c8589269f08b2af0c"],["/Swift单例模式/index.html","a861c548c145b76c8dd7364ff2a0c174"],["/Swift原型设计模式/index.html","5682b5854db6e379b674d87c31f12d80"],["/Swift命令设计模式/index.html","141156efb5655409968d34254efb103a"],["/Swift外观设计模式/index.html","ee784a468676d86e2db1bceb30875cf8"],["/Swift委托设计模式/index.html","e80b2d302a630c9276f0c0e3ea7d38ce"],["/Swift对象池设计模式/index.html","eb45828b3d9b25364ca21519b6f229e9"],["/Swift工厂方法设计模式/index.html","fcfe5b0b9e6b7718b71ac61ac2061520"],["/Swift带闭包的懒惰初始化/index.html","07187c1e444f4d915e055e5c5e81eabc"],["/Swift抽象工厂设计模式/index.html","5d36a1583be2a9348debc41151ec5ae9"],["/Swift掌握iOS自动布局锚点/index.html","38902cb7b4beca17e38e4fc5308ed808"],["/Swift支持旋转的自适应单元格/index.html","d8e1244dbc784e32bfffd5b4d6703105"],["/Swift枚举值/index.html","6a4091c9229eeba410b1b3c42da852eb"],["/Swift生成器模式/index.html","b675b2d6932d5cfc8869d8cc390cf9ab"],["/Swift结合Xib文件自定义UIView/index.html","57d9abe2aa3d2633b801735d3ffeb61a"],["/Swift编写的20个iOS库(一)/index.html","2e06dc495a6df23aee70efc49f418d33"],["/Swift迭代器设计模式/index.html","ecda6e98b06066c5be907a1809f59a22"],["/Swift适配器设计模式/index.html","8b5486449be89f70f1054db006ed9f8e"],["/Swift静态工厂设计模式/index.html","70a90cca424c8057d83a0ad0d45d4eb8"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","88f0f8e21b5bf23d03dd9dbaa8d33c9f"],["/UICollectionView data source and delegates/index.html","f1e395d97283136a0aa4ce6a673e1b4b"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","7d91834c28fcabd8e209e5671422c0bb"],["/UIKit初始化模式/index.html","ed7d181cd32499de21142b6e1dc9f3c7"],["/Ubuntu18.04替换国内源/index.html","b0af55bbf9bba16d72d5a1b9e8917569"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","be5a493c20cdbbc8e2be2bda04a92ced"],["/Vapor系列 (一) :  Vapor 初探/index.html","365e4f7a1b29b9a27f77ab50c46d5583"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","b1b24b6b07338343293ea6d862b6f2c2"],["/Vapor系列 (二) :  Hello Vapor！/index.html","32f4ff885a17cbc95b343ad5ab96ec1c"],["/Vapor系列 (五) :  使用session进行authentication/index.html","7a2ac1116bef14b62ecf58e657a9e3c8"],["/Vapor系列 (四) :  创建博客数据库/index.html","dc02d6a4ba1bdb8cc24ecd56c73db785"],["/Vapor系列(六): 徒手撸一个CMS/index.html","598b10023cf6e12a362feaca90bab159"],["/WKWebView与Native交互注意事项/index.html","3f10fb80aadb8482e22712ec041d28b2"],["/Xcode扩展/index.html","1a2f5fe175b116e80790ab0ba1dd1ce5"],["/about/index.html","17419e7a5887774d5117efc96c1479ee"],["/appleOS的Networking示例/index.html","502913963e42eba9f76eca34509758c8"],["/archives/2020/03/index.html","6f14f3e3a92c7f01e99bc960956a7e6c"],["/archives/2020/04/index.html","ce6773e38c053409b1628cb75b33ac9e"],["/archives/2020/04/page/2/index.html","e69f1196887443a4a16d69cd33732fcb"],["/archives/2020/04/page/3/index.html","4374cc5d47590c80a2cd6e021e6693c5"],["/archives/2020/04/page/4/index.html","042ce579563998ba80a667c93c133f79"],["/archives/2020/04/page/5/index.html","f5be822da36ffd52927d2dce619ca8a8"],["/archives/2020/04/page/6/index.html","75222614d7ff4dce123351b2794e5a65"],["/archives/2020/04/page/7/index.html","c60b85e08a9bad8be5d7157df93e96ea"],["/archives/2020/04/page/8/index.html","249a3e426fae961d05466da8b81cd0cb"],["/archives/2020/05/index.html","2dc1396592820df072996295deb57e64"],["/archives/2020/05/page/2/index.html","0ba37d10cef84c19b934e2a3236b9318"],["/archives/2020/05/page/3/index.html","1f1955db066e106de23a1866426c34d4"],["/archives/2020/05/page/4/index.html","5d5c706762087a8d6bb6c9486ca03aff"],["/archives/2020/05/page/5/index.html","f1ae51155de1f85363c05413ea907bc0"],["/archives/2020/06/index.html","267d2d21abe6b881f8e824ec66cdf64c"],["/archives/2020/06/page/2/index.html","a10948ecf9df0414271d5d128e3595fd"],["/archives/2020/08/index.html","0d20d4557c6822d9e25920f673b4a756"],["/archives/2020/09/index.html","5a64071c404b46e3e0ce87a1e661e111"],["/archives/2020/10/index.html","a1459aa8e06bdb130b77c2330b94717f"],["/archives/2020/11/index.html","a5d36b8eab86d0a068a8c77c897c8eb8"],["/archives/2020/12/index.html","8277cba78e979542d873d8ce295f8c87"],["/archives/2020/index.html","b8d43ae7135b8185bc003429cf1b794b"],["/archives/2020/page/10/index.html","5808479e3141e90b8074b7d8694b3373"],["/archives/2020/page/11/index.html","58b8fed39040de9790a97cc6be94d0bd"],["/archives/2020/page/12/index.html","ffdc03ecd6aa9aa2a0b19b35917bf6e5"],["/archives/2020/page/13/index.html","4f3441a558473edd4f7583ab7526020b"],["/archives/2020/page/14/index.html","99aac094804dd95baf516a95266381d4"],["/archives/2020/page/15/index.html","46017029b0d8bc2cc00d3b39a300acae"],["/archives/2020/page/2/index.html","0d90d4cb6f5dd14a62f9f0fd2adc05f5"],["/archives/2020/page/3/index.html","3fd5c1ba3059cd25db9693c5f1a354cf"],["/archives/2020/page/4/index.html","01b55e6e7e0beb49388f24275fcbef29"],["/archives/2020/page/5/index.html","ba59de3c555d9ba1f030a559b88c8f98"],["/archives/2020/page/6/index.html","078baa10b723dfe88f525b2a081d96f5"],["/archives/2020/page/7/index.html","a0613d500eb3b2dd5e472aa5633b2d02"],["/archives/2020/page/8/index.html","a57b441c35540e35c28ce7ccb5ade6a6"],["/archives/2020/page/9/index.html","305428f1206f8cdfac24d3a2a1bb1ac5"],["/archives/2021/03/index.html","b46f4c49948224ee37e615ddaaca6482"],["/archives/2021/04/index.html","5b8aba3ccc0716138fd8a04ec4fcb0d4"],["/archives/2021/05/index.html","c46644b7b4facec2976282f320834dff"],["/archives/2021/06/index.html","a3e6b1d7426413c4f79921b74ffa27da"],["/archives/2021/07/index.html","fab10ef5ff308e292b443e878340b26f"],["/archives/2021/08/index.html","8d476b47239d8e01b85cad9309fd79b8"],["/archives/2021/09/index.html","25908be51bdb54a858d86c6b83d4494c"],["/archives/2021/11/index.html","4dbd242f562f8b9252903a4f77a68391"],["/archives/2021/12/index.html","b09f37751461fd0fc8e1042104d8505c"],["/archives/2021/index.html","3b2450963dfe75d8e2e95ec131152dfe"],["/archives/2021/page/2/index.html","0f9f63bb763025afffe06c1d1d31819d"],["/archives/2021/page/3/index.html","4787f8a5931a9a0be4d294423d82f718"],["/archives/2022/03/index.html","ee8b3d223eaca189a9e65a45d80d66db"],["/archives/2022/04/index.html","d9101cef55ce86b072a3cc5b4617b1a2"],["/archives/2022/05/index.html","8df67f7111b8b777013228288203f5a7"],["/archives/2022/06/index.html","77857866a9c71f632491472027a3543b"],["/archives/2022/07/index.html","fdb206713cf41dfa08dcd735e4ecb296"],["/archives/2022/index.html","f2b4db4f0f033daa08ac27b9cef51134"],["/archives/index.html","583741cc50ad3693280569ade4578da5"],["/archives/page/10/index.html","45f994c9b871de40709e2762e9762dae"],["/archives/page/11/index.html","d4a0a69698b5379410e00223d635e951"],["/archives/page/12/index.html","df60b92c57c9bac73f285e7a54675751"],["/archives/page/13/index.html","4734ce8947022b2f4baf70305885c6a9"],["/archives/page/14/index.html","3b36c50e7364a176e0834871cea8b667"],["/archives/page/15/index.html","a0f0149d1c2a9f3a8c1327335e0378f4"],["/archives/page/16/index.html","430ac49e436865dc84f890be7e7d2c27"],["/archives/page/17/index.html","04a0f419868457d993201e79d1a8e0ce"],["/archives/page/18/index.html","772f040faaff4d671d6fa27598dc62f8"],["/archives/page/2/index.html","9eca0a46ae72f10081e678c90746bddd"],["/archives/page/3/index.html","904e8d18c322e365afb7aaf12a799366"],["/archives/page/4/index.html","2d8f976709389d9b5c07bdad28531296"],["/archives/page/5/index.html","5dec9742d230f5ec54b08a60962fcca2"],["/archives/page/6/index.html","bc00f1b5c362e9117fedc6b81a4408f7"],["/archives/page/7/index.html","06b921b5ab4df63e9a7107dcdf997d10"],["/archives/page/8/index.html","802a5d48b3c969735216896d666b39a1"],["/archives/page/9/index.html","1f5d1a74306e20ab259baf0d3325f97b"],["/bugly 上传dYSM文件小记/index.html","22bb5450415da7252cf36b7d1694eb5e"],["/categories/Advanced-Swift/index.html","38c80349ef30654a835afecde9e71f43"],["/categories/Advanced-Swift/page/2/index.html","557221e7f9f8eea7001f0108540f7ceb"],["/categories/App-Architecture/index.html","42e83ad76afe6c46de29da9f7f8976a8"],["/categories/Array/index.html","e7230a0f210decede32358fd596a8121"],["/categories/CocoaPods/index.html","a3daa87d704aa584f606807e24af9f6b"],["/categories/Codable-protocol/index.html","0a32f5011320fcae78a5b31af6285266"],["/categories/Combine-framework/index.html","e9dcd602da37173f4cbe0e4cffc38ab4"],["/categories/Combine/index.html","23fd105a5e02da7bcb53853503d4fcb0"],["/categories/GRDB/index.html","449b2ac8408fcf2030ab81887638be1a"],["/categories/Go-入门篇/index.html","7fcfe79c7615fe3f6770ca89e1fd9711"],["/categories/Grand-Central-Dispatch/index.html","513662063bd95b7cdebc60cabf6bf644"],["/categories/Homebrew/index.html","52e86d0b6260dd88123d4ec58589f34e"],["/categories/Linux/index.html","3881c72bdb030d2e6ffc91bca5aa4c83"],["/categories/MySQL/index.html","095a06c9ca77669b2892ff47c55c28dc"],["/categories/Promises/index.html","afe479623f6df359a01adf4f015b64fd"],["/categories/Protobuf/index.html","50914b53e8dfad8807d664a797fe6f3b"],["/categories/Result-Type/index.html","774509b5ebbd98e5edb81c36cfe2465f"],["/categories/RxSwift/index.html","69a698addcc24fcf8fc2e7658c2531cf"],["/categories/Server/index.html","0fbcdd7523184ed5239fc8aa433759b5"],["/categories/Sqlite/index.html","1dfee9177b1dfc4fe88bb9f0a642e36b"],["/categories/Swift-Apprentice/index.html","e5f0f334c2fa292ad173fca9c7b20d64"],["/categories/Swift-Apprentice/page/2/index.html","bb3ac553cdccbe2c2ee201aafec7d647"],["/categories/Swift-Apprentice/page/3/index.html","bc9a54c38a9801627ce5a9eda2b864bb"],["/categories/Swift-源码阅读/index.html","46e3799a7ca30a3d7b440b740b6ee628"],["/categories/Swift/index.html","ec50686c946774d3bff2ec722c822275"],["/categories/Swift/page/10/index.html","4b5164cf72d5c5d067245a76141481c6"],["/categories/Swift/page/11/index.html","cafd262811c05017d28f86b5b943beaa"],["/categories/Swift/page/12/index.html","f5619f96a1ba8ddb579629e5fe59984e"],["/categories/Swift/page/13/index.html","0d1c4994dac37311de7db5f35d3b18f1"],["/categories/Swift/page/14/index.html","ca75094a8069ece6931f191bb27fc086"],["/categories/Swift/page/2/index.html","61607bff7b74ae1a484164625312d991"],["/categories/Swift/page/3/index.html","511087479b5f45e73fa6bd2bb5131a61"],["/categories/Swift/page/4/index.html","1ba1c480d2fbe6890fda8680070b63d1"],["/categories/Swift/page/5/index.html","0a5f12296439eeac3f3b739562bf76cc"],["/categories/Swift/page/6/index.html","124852c5f82f02ad24b047314552ed38"],["/categories/Swift/page/7/index.html","809f7ba34fef7ea86d72f35cd4354c93"],["/categories/Swift/page/8/index.html","48e7c6a1536dbc585cee5d18e52b7396"],["/categories/Swift/page/9/index.html","65b6405e54a60fa42f20a38e2d668866"],["/categories/Swift5-2/index.html","2cf507509ecabec89cf4a33ff90f4caf"],["/categories/SwiftLint/index.html","fcc0f95c440c929e785864f40f4b1e8d"],["/categories/SwiftUI/index.html","efe3f722e29f59eff25320fcdef794b1"],["/categories/UICollectionView/index.html","f1ca0c6ae3df07fb69130920cac4ea5e"],["/categories/UIImagePickerController/index.html","12e4dc1b7a8ee40cdbf234e7d6ab506b"],["/categories/UIKit/index.html","0253cb252682afc6fe9250d4b71dbf77"],["/categories/UIKit/page/2/index.html","d62c62ea9140a251de5fb9f1ecbe5e22"],["/categories/UIKit/page/3/index.html","a1a2b9f194af50f53b23fbf932a2a0f1"],["/categories/UIKit/page/4/index.html","af2ce4127549bb7dd68a2ac66b434c7d"],["/categories/UIKit/page/5/index.html","44da5a9d58ea8c0161e20783c73f14bf"],["/categories/UITableView/index.html","cd220bc73832e50942384e32fe0aebc0"],["/categories/Ubuntu18-04/index.html","5dfc60927e2994d9df801d7d366c7df9"],["/categories/Ubuntu软件源/index.html","1d579cf66f945b9877ddbb74a3996793"],["/categories/Uniquely-identifying-views/index.html","be4d5e5148405fdcb8faf0582eaacf9b"],["/categories/VIPER/index.html","6d62476a67435495417ec0bc68d37116"],["/categories/Vapor-4-0/index.html","097a6dbe2da8b30a59e7a5255b7bf298"],["/categories/Vapor4-0/index.html","1897610b8d5ef39551e4e55d7317810f"],["/categories/Vim/index.html","d07e0f1aef31e90f2fc070b8b82c3c49"],["/categories/WKWebView/index.html","da7c27f95311440decccb6bfce64dec9"],["/categories/Xcode/index.html","5fd48d4a4c47f0cd95fc10cc54c22e9d"],["/categories/appleOS-Networking/index.html","7b5ec80b54c15ad03115bb70560f9c07"],["/categories/bugly/index.html","b2f661054b15a1ed5ae5c32d913362d6"],["/categories/enum/index.html","5af2b1d5350f3e18d556ac1d650b5010"],["/categories/git/index.html","4b58c978af04834c952b5273701d035a"],["/categories/go/MySQL/index.html","9e51671613e3b304ba19c4a6c7d2eda2"],["/categories/go/index.html","3b17f3dc858fcaf1774219010ade91c0"],["/categories/go/interface/index.html","536b071a528c4d2ade9563af2acf3d0e"],["/categories/hexo/index.html","c5ee9f6700494570ed80f77056ced0cc"],["/categories/iCloud/index.html","6c67f4cc7d612649115f5f1140b6427d"],["/categories/iOS/index.html","129b266de2c494e5c96bdeb3d02d19b0"],["/categories/iOS/page/10/index.html","78184959f0b3f69fc9a53db226e72c00"],["/categories/iOS/page/11/index.html","10b9eeb434017e887412d05a1ca5dd5f"],["/categories/iOS/page/12/index.html","030b19fc62d1f46071eda6897e9a8e93"],["/categories/iOS/page/13/index.html","293224ee068901c0d658fda5cf59141d"],["/categories/iOS/page/14/index.html","a07bea5badf50a397e89522410f7c493"],["/categories/iOS/page/2/index.html","0f6e46dfb72f6df87d24c6b851aa70aa"],["/categories/iOS/page/3/index.html","0c86506c8bce350b7eba108b567fa7a3"],["/categories/iOS/page/4/index.html","3d7728aa0e4787f397f51ec0a504e900"],["/categories/iOS/page/5/index.html","14cf5c5aa0ee43a7694e8f70519159b1"],["/categories/iOS/page/6/index.html","c454ed8e6feb622cd9c526468d87f25e"],["/categories/iOS/page/7/index.html","05b5484bf55b43feb3b78ae546ba960c"],["/categories/iOS/page/8/index.html","41ba5261f48137028d35d66a2c3f00e9"],["/categories/iOS/page/9/index.html","21fc2a707424ced95747932d10ebf59e"],["/categories/iOS面试题/index.html","cc91bc18ec30cee3af0d2d596177bbab"],["/categories/index.html","31250c95c29c1625188b5b62cf339d93"],["/categories/random/index.html","1214fab9af78b93197743ccddaeeb09c"],["/categories/三方类库/index.html","1295a454c80a22961bad6ee0744c6d1e"],["/categories/函数式编程/index.html","fabe4a9f8593e88a99a65e872f3a3cdc"],["/categories/子类化样式/index.html","8dc6522ef909f58776270600c793c625"],["/categories/开发技巧/index.html","264cf1673a5978af49c770c9903256b3"],["/categories/开发记录/index.html","77a7156dfea04478b39f5083f908be61"],["/categories/数据库/index.html","dbeb2466c0a02e5bb37f9b99a58bd53f"],["/categories/架构设计/index.html","98cc1f00321ee71326eba390afc9c502"],["/categories/测试/index.html","baa03206c47747ec35e21cdc00b838ce"],["/categories/用户体验/index.html","308eb2e9c54a59ed30841625ea844915"],["/categories/用户协议与隐私政策/index.html","c42586c84d56886912d18f70c1632b74"],["/categories/组件化/SDK/index.html","2910404209353a77020c730a18fbaaf8"],["/categories/组件化/index.html","d774724eb8dec3320aeac1cee6f752d0"],["/categories/组件化/模块化/index.html","e68ad79fec7737558db7544668980726"],["/categories/设计模式/index.html","5fe34d480b05f10b201cd22e7726fcde"],["/categories/设计模式/page/2/index.html","fb6c23a2bf76496670c6729a5245efa9"],["/categories/设计模式/page/3/index.html","3ec0e64855878505b261874bf05c30e3"],["/categories/逆向/index.html","a0a0911572972a5663370d8c6767a47e"],["/css/main.css","aced319ecd74a619549e19f5819d7088"],["/go moudle 导入本地包/index.html","3dacafce395f00c99d9d0fee73bf4885"],["/go 库专题(一)：gin/index.html","aad92f62970bf532ad99b59839593d1a"],["/go 每日一问/index.html","25de4aeaab6d9c70d7321feaa1425eb3"],["/hexo部署失败/index.html","d9e413494e23d70ff366b9b1d7b33e05"],["/iOS 15 适配/index.html","4b6a819a4ae6c67edc6ecac676672ea2"],["/iOS VIPER架构深入实践/index.html","f240c8f38818f446ad6859f31b7fbb32"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","dc207c74bcc25b4e6362f25bffc711ea"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","af6a6038afbfefb4a0f72e000e112cf3"],["/iOS 自定义视图，输入表单和错误提示/index.html","47e8ea9b73ea17db6c8311c54cb59d58"],["/iOS如何使用iCloud文档？/index.html","d67d4f73659abe19cf65298f847ae4b9"],["/iOS子类化样式/index.html","986547f618e9349c0968ba1b3450a46d"],["/iOS开发记录<一>/index.html","d712e4bd9d21c545196bbfdf710460ab"],["/iOS自动化布局编程/index.html","e0eb56eac252ff16583aff0c67177262"],["/iOS自定义转场(By Swift)/index.html","dd65db4ff90c83e5c2c4b16b47bdd465"],["/iOS项目架构：使用VIPER/index.html","2c9bfac4c19235122be9c967a7a017e1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","04fa4bd093ad315605909a564ef2e89d"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","143d6ee67ee1fcc4c43d622d68b18492"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","df1dc6bb917b2ed091f227e83527e6b0"],["/page/10/index.html","feb6284d35b26dfea35a83c77b1f5115"],["/page/11/index.html","597051807982a7256b8182d5ceb33ee9"],["/page/12/index.html","f394e10dc8ed89db24c49e784a490962"],["/page/13/index.html","fbcb6ecfdbd52c33195e58853033177c"],["/page/14/index.html","ae9945b58f276114b4a7e88b3995936d"],["/page/15/index.html","52f22bede5399d413ec3fc75c5565603"],["/page/16/index.html","71512af25f1e0e566d540007fc9b54da"],["/page/17/index.html","d2b9c8c368dd2c98eab89c973922bcca"],["/page/18/index.html","0f9f8eaa74ab8b8b82097243b014c26c"],["/page/2/index.html","e588902668d7460d393220736ded5603"],["/page/3/index.html","f29e3ea04a54d472ed37ffb92ff1fe4d"],["/page/4/index.html","90bba67ec43ea41d505ab5dee408159d"],["/page/5/index.html","6678a0ffea2453d46bf2f9bea61325a5"],["/page/6/index.html","e888bb728b59b3aa8c73b0b7e77968d6"],["/page/7/index.html","dfdeec5214b645a064f9b8618531f542"],["/page/8/index.html","2a85eaa694e94bc1c2886d01d1fdf19c"],["/page/9/index.html","0f2677412cd2a1ec01fb33a82c6feb2d"],["/schedule/index.html","6cae7330ecab277d74631effac4f87a9"],["/storyAppPrivacy/index.html","822104c99b702e01247dd048758374da"],["/sw-register.js","69b3f0340586fac337be85a2080f2fff"],["/swift 专题：函数/index.html","0aff8057c0462a6c2f02154038f15628"],["/swift 专题：闭包/index.html","7cb6cca403fed5a5be678c3f64830e11"],["/tags/Advanced-Classes/index.html","0e39b3cdfc0b327589feed814f483c22"],["/tags/Advanced-Swift/index.html","09dff54c3ab49375bdd8cbbeb1a9c1bb"],["/tags/Advanced-Swift/page/2/index.html","b17c5c1c323a360c4a21069bf19ca1c8"],["/tags/App-Architecture/index.html","1c0a4a4e7d7794a84fa07b21504ff708"],["/tags/Array/index.html","6d33cf7d2c72dec9c4a2c238a57e15af"],["/tags/Arrays-Dictionaries-Sets/index.html","6b86f612046a034b0c923815bc8ff927"],["/tags/Authentication/index.html","ebf4407f76cb0917bfeae682286a9c7f"],["/tags/Build-in-Collections/index.html","2ea66de253d750cf106b8c5e51334941"],["/tags/Building-Your-Own-Types/index.html","3857d638ce13344343cc97106592ad22"],["/tags/CMS/index.html","a160a148e58946cbd47559ba75a2dabd"],["/tags/Classes/index.html","d1a2230488fe7b13293d7e26702bf89c"],["/tags/CocoaPods/index.html","cf21f994b75f1a826fe42fa676ed121e"],["/tags/Codable-protocol/index.html","ede1031fc661150d187bed5c8c4d5dc3"],["/tags/Collection-Iteration-with-Closures/index.html","c52a59e964391fbe2ea6731d621375e9"],["/tags/Collection-Protocols/index.html","13752b312551c0c7fefe0feb47ce9e26"],["/tags/Collection-Types/index.html","fa6ced775b2d4f64d1ce790cc91070d1"],["/tags/Collection/index.html","f686f116fbd4b7b382212ddf300d9c74"],["/tags/Collections/index.html","8b2cd493f90a9330b7418629c4e6fa42"],["/tags/Combine-framework/index.html","b4231f2e291f097cafd73eaf517e7964"],["/tags/Combine/index.html","9969d29522ca7a1c697c3317814e5c46"],["/tags/Dependency-Injection/index.html","9b5c9588706e4644d063d443aaec7a8c"],["/tags/Encoding-Decoding-Types/index.html","3c7998ebc30974a05920a3d5bc50af4f"],["/tags/Encoding-and-Decoding/index.html","706841f2b9b7ec0cb6f0f5f6f11afd0e"],["/tags/Enumerations/index.html","7a976f29e8991dcd14cd0bb98afd23d6"],["/tags/Enums/index.html","8535044781a2bb280d7915be1bf84cc0"],["/tags/Error-Handling/index.html","5cfec011b056de101338b5ccfc45f6f4"],["/tags/Functions/index.html","9387178273e3c29a8a3720ce39d01bbf"],["/tags/GRDB/index.html","aab3e2b19b8e3f99301402560148cf1a"],["/tags/Generics/index.html","22866bb45cb7c71481fbb8f99fd905b1"],["/tags/Go/index.html","4be14b57539fcba03f3dd639ecb94b74"],["/tags/Grand-Central-Dispatch/index.html","ddac2a8b73250abab09bee5e2d78a347"],["/tags/Hello-Vapor/index.html","0342af55a2dcc8ebeb17c7e968df5274"],["/tags/Homebrew/index.html","c518781d903be0f0aa8157a192c0b356"],["/tags/Interoperability/index.html","7b2f9dbbeeb45f9be5767cb4bb02f4f1"],["/tags/Introduction/index.html","a62447214d782f0cf52d0580318b9297"],["/tags/Leaf/index.html","44b61d0d14220b3c0e2743e687c0220a"],["/tags/Linux/index.html","2abce91d48681c65f9f9d56d1cae3a56"],["/tags/MAC/index.html","f428fb6e99cf37b4cde0e143eb56b12f"],["/tags/Methods/index.html","4e998aaaeb3f5052de9a784a3384bca7"],["/tags/Modules-And-Hooks/index.html","3bc6449ff009d94cf42762f31b73547b"],["/tags/MySQL/index.html","f1949a8934a4f31a1b6c0a0a787eceba"],["/tags/Optionals/index.html","3f70c94bbae68bbbef45cc70de4ac64c"],["/tags/Promises/index.html","978d169cd4533e6fb7275c39791617b4"],["/tags/Properties/index.html","09a98c65e73ebddc57334af29490f41a"],["/tags/Protobuf/index.html","230b44745a426d103e80f8dc0cb7cb13"],["/tags/Protocols/index.html","2dd89982a08c8f0ca8d6d95245818075"],["/tags/Result-Type/index.html","3d3153f0a4c121f8ffe3b1a7080aec7d"],["/tags/RxSwift/index.html","cb2ec5e0a30b3b2904c0721cd5ad91d5"],["/tags/Server/index.html","9767a7635babd7147980e68384feddad"],["/tags/Session/index.html","023d696d3a6efbc8d5f5b80abde5eb2b"],["/tags/Sqlite/index.html","81e1b2aaeb5d283270a6a5be358bdb2a"],["/tags/Strings/index.html","d09fc645dcc30ea661070d551b635f6d"],["/tags/Structs-and-Classes/index.html","5ceb85966944ebc7bdcbb88f2cbce35a"],["/tags/Structures/index.html","ffbedff0124e8491ad6e05b9f8ccff78"],["/tags/Swift-5-0/index.html","210a9166116efd6f25368eb12f7ce944"],["/tags/Swift-5-0/page/2/index.html","a9782e21e1965b098b50c0fc26a29e25"],["/tags/Swift-5-0/page/3/index.html","f60ae707534d5ca4b67c04e7d578e175"],["/tags/Swift-5-0/page/4/index.html","50baff25f496178a676ef51c123675f3"],["/tags/Swift-5-0/page/5/index.html","fe5c8a322b2ad4452a1e77c923b97895"],["/tags/Swift-Apprentice/index.html","ccfede64cfe86690b7e69a9818c65f71"],["/tags/Swift-Apprentice/page/2/index.html","d3809a84ddac36a343cc7d80d1dfeb7f"],["/tags/Swift-Apprentice/page/3/index.html","e8e99d224625e13ae76d72df58028704"],["/tags/Swift-Package-Manager/index.html","db5351aa02366bbbb9d6853682464467"],["/tags/Swift-源码阅读/index.html","6b87a7b7d1b3215b9085f7bb246acf46"],["/tags/Swift/index.html","08256f8d799e6d028d5d30b5dcd7aaea"],["/tags/Swift/page/10/index.html","895d51b25b62934741eb9ca14395d6c9"],["/tags/Swift/page/11/index.html","3ab0943562432b3ff2a8ae4137eff065"],["/tags/Swift/page/12/index.html","f8891ae044697e026d0d9ab11b182022"],["/tags/Swift/page/13/index.html","63d788870c8797464a8462f85b541e1a"],["/tags/Swift/page/14/index.html","8791cd437706e50f769e32b31fab5862"],["/tags/Swift/page/2/index.html","bf273d00934823840b03e4924b972ad4"],["/tags/Swift/page/3/index.html","204b9c218b1cddfe139dd1416c289d91"],["/tags/Swift/page/4/index.html","d8494011d55af316363a182a460d9a15"],["/tags/Swift/page/5/index.html","518394a10d4c3ac5a4c103da4c3586da"],["/tags/Swift/page/6/index.html","95e4c7ccd098ce54651654ebe9535696"],["/tags/Swift/page/7/index.html","d6e9edcb2479a2c5338b57db2b0bbcd8"],["/tags/Swift/page/8/index.html","0983f6c34b538509bdb0a9f530ab59c7"],["/tags/Swift/page/9/index.html","9741f0e77a65bea66ec7947dea59edbd"],["/tags/SwiftLint/index.html","67f406bb239e4ab32d2c248aaeeab6ea"],["/tags/SwiftUI/index.html","6b77fd2f2b1ce63cb36b04fabcaa4233"],["/tags/UICollectionView/index.html","d06bc0d62c579c5fffd397ca7fe013b5"],["/tags/UIColor/index.html","51e2a267776d1df7d46214c954a4bb73"],["/tags/UIImagePickerController/index.html","23b5571e614c157d01f8eac44eb3bf40"],["/tags/UIKit/index.html","2e03df585d3521966276bd319f4dbe7f"],["/tags/UIKit/page/2/index.html","5bc82163e524572ca3aadeb99960a6c3"],["/tags/UIKit/page/3/index.html","74a972ce90f1e233cbded331b43db477"],["/tags/UIKit/page/4/index.html","780f0948b1807bac9fe85adbd7602d1d"],["/tags/UIKit/page/5/index.html","b8946d4147f3f3c89b2fe16f06757439"],["/tags/UITableView/index.html","a635b6ab94dde31189ba0ed203693198"],["/tags/Ubuntu/index.html","2bd72a4d140fc9a70eff18314125bb41"],["/tags/Uniquely-identifying-views/index.html","c7f040537d5c25d8d3dfd123c5fef2fa"],["/tags/VIPER/index.html","5fcaea82b1fa597b14595cfaa1184117"],["/tags/VMware/index.html","8f31978819ea748a660a58cb3a2dd964"],["/tags/Vapor-4-0/index.html","fa6de2d19ff3433a588f429dd244021e"],["/tags/Vapor-初探/index.html","1af49f032903e8b8d63d2a4c33e9134f"],["/tags/Vim/index.html","ba98f4b1e1d4e263bac38a85bf34a7e8"],["/tags/WKWebView/index.html","e055b2a63911d99e585d8434c2291c79"],["/tags/Xcode/index.html","29c67cdf6e9706f2b7167a4ea80d17a8"],["/tags/appleOS-Networking/index.html","fa6c9c24f3796efe5dab66d4720daec2"],["/tags/bugly/index.html","579f1fe7e45b16f2c3b4a2af3be8c736"],["/tags/enum/index.html","4707079ca6501c5408c23d2368fa3761"],["/tags/gin/index.html","4753e2ced01bd6f9199201e0a228a8c9"],["/tags/git/index.html","d920ea90e989dba4c1c29b50a49c762e"],["/tags/hexo/index.html","422b77795a0af79de9f1bf6dc89630a6"],["/tags/iCloud/index.html","533a77fdbdf273e30bd507140430a9fe"],["/tags/iOS/index.html","9ee3d7a2afc8ca66b0615dc3383c01f5"],["/tags/iOS/page/10/index.html","679e0d392544e3f4bb748caaf6ebfa2b"],["/tags/iOS/page/11/index.html","354a77212b0400bccc8924452e02abaf"],["/tags/iOS/page/12/index.html","cd07fcc031dc28b212d225f459aadcf7"],["/tags/iOS/page/13/index.html","2c2b51c55bcb7b4c052af46c9a417012"],["/tags/iOS/page/14/index.html","1c3f0c3e7bb0360f3b5abd6cc4af9fb7"],["/tags/iOS/page/2/index.html","70b2269367d18a00bc0d5cf7d7ba7034"],["/tags/iOS/page/3/index.html","a6ed017218c79e19a225c12859597bf5"],["/tags/iOS/page/4/index.html","52b47c8d05aa5e23d6c5e11c5228ff90"],["/tags/iOS/page/5/index.html","0ada43c0ebcc70368fd6e999ee8267b3"],["/tags/iOS/page/6/index.html","67ebce679f7050fc5c219717e395ffee"],["/tags/iOS/page/7/index.html","37934fcb8345a72a361be31249d4cd48"],["/tags/iOS/page/8/index.html","20fd0754fe9d0a7b282032f15f201543"],["/tags/iOS/page/9/index.html","00145c80d5b5428ef36c8459e05d1be1"],["/tags/iOS面试题/index.html","f7e248001c3d6455784718095987afc7"],["/tags/index.html","95dd92916bf5b2652231b8f180238698"],["/tags/interface/index.html","e64c46979e70e32ba3243be33aa0473d"],["/tags/non-optional/index.html","2a34e48092718ee409f6084c99e3b33c"],["/tags/package/index.html","6ecb3ce5b3f390d6f569f35b4daf66af"],["/tags/random/index.html","fa30d05616f3d0d2e9f4a95c416eed0c"],["/tags/transition/index.html","c345027666fe8a58c5596c520c3fbaf4"],["/tags/三方类库/index.html","8ab089cdd5f69c0c0ab6c977c7196676"],["/tags/依赖注入设计模式/index.html","181abf6a447226984299a0ac8e116e0a"],["/tags/值类型和值语义/index.html","568bde3887495c2eba3ac0c60f9e36be"],["/tags/内存管理/index.html","ff105516aa1e4f399206f05d1ba1650f"],["/tags/冒烟测试与回归测试/index.html","6a5148f1135a50f710575a4a77ea1821"],["/tags/函数式编程/index.html","66103cf04fc8adc28654a781f7e8c7be"],["/tags/创建博客数据库/index.html","676f8b619733ecfc8d7ec18767fd1672"],["/tags/初始化模式/index.html","a46a817d3ed239a5871bfe92b66ea22f"],["/tags/单例模式/index.html","43e04ddeb2bcef8c5930a4c54d0d1953"],["/tags/原型设计模式/index.html","b231c5b9da428cf4681d451356391a42"],["/tags/命令设计模式/index.html","594eee8e15071e2aa1f7f7dc45a273cb"],["/tags/基本控制流/index.html","a8e6fd70fdac8ddbe0dbc2a4c4940bfa"],["/tags/基础语法/index.html","2462d463cc4479774fb7efd2d155eb52"],["/tags/外观设计模式/index.html","6e4400ac54479e419d0d74ce19dbf0fe"],["/tags/委托设计模式/index.html","43b21c5c8a3742824a8b870b4cd28543"],["/tags/子类化样式/index.html","b1d13988ea2205318cc58fa708fd21fe"],["/tags/对象池设计模式/index.html","d6d2d927c5be0a4ff129a0d04690d9f8"],["/tags/工厂方法设计模式/index.html","d3668aaccd870bd34eac0656e7efc878"],["/tags/工厂模式/index.html","15f85a8c4f49fcdb9825272b97d4e351"],["/tags/工厂设计模式/index.html","78cee03e7737e0444ab0f70a85312790"],["/tags/开发技巧/index.html","e6f22a110a691090de9a4b5cbe0e3879"],["/tags/开发记录/index.html","0b69475812d1d6dfd6a643cacc6d0e44"],["/tags/懒加载模式/index.html","cb0dc642a3147171e934f92af9026c23"],["/tags/抽象工厂设计模式/index.html","03f758dcdaa89d2571394677af57f834"],["/tags/数据库/index.html","f9562ee6e97c0efef9aa59588b0bcf2c"],["/tags/构造函数/index.html","ca4f0c2c805cb50154a495feff561515"],["/tags/架构设计/index.html","a3fb8b9942ae7125726fe21764ecf8b2"],["/tags/模块化/index.html","627b83aaa5b9e177adbd671020834418"],["/tags/模式匹配/index.html","bf5f5baa3c12c8245a08cc22eed24ec2"],["/tags/环境搭建与验证/index.html","d918cb507a3503c465067cfd79aa575c"],["/tags/生成器模式/index.html","37f279c04ffb87ad02a34611b3a8a424"],["/tags/用户体验/index.html","dc3a7e6a2cfb148f50ee382657247df0"],["/tags/用户协议与隐私政策/index.html","c7135a3384de4e4a05d6a29788273ed7"],["/tags/类型与操作/index.html","e33d67774f554ea4b34cac04756b4fec"],["/tags/组件化/index.html","7794462788843de11bdf7a40170339da"],["/tags/自动化布局/index.html","98ece23f3248d99017949ae930e24469"],["/tags/自定义UIView/index.html","9755488c124a837fb8d9fdbfca4f6b95"],["/tags/自定义转场/index.html","1eb92b601d6e7b6c23d2901f8f98b936"],["/tags/自适应布局/index.html","9a5bd4b435331a2062c2a1d5925e7094"],["/tags/表达式、变量和常量/index.html","ddb1b2ee07c92f8376be759aa9296c5d"],["/tags/设计模式/index.html","0eb769199046a2f09aac429f0f7348a2"],["/tags/设计模式/page/2/index.html","27151bb4a2597cea95ada8298881ba25"],["/tags/设计模式/page/3/index.html","1483bad72751d95de665f1606421f80b"],["/tags/访问控制和代码组织/index.html","04ce89234ccff1d5dba34db9b9f31370"],["/tags/运算符，下标和键路径/index.html","6e5bb500ddf502f57fb9924e985fc812"],["/tags/迭代器设计模式/index.html","cc9efd0147e44722977b5953830073d4"],["/tags/适配器设计模式/index.html","2fad2f286335ee56550d3a322a680aa2"],["/tags/逆向/index.html","0240400674738d07e33e67cc6d49cc5c"],["/tags/错误处理/index.html","187cb597648ba665e55082f7bceac81e"],["/tags/静态工厂方法/index.html","815e4eb325848cd6047fe87656ed5efd"],["/tags/面向协议编程-OOP/index.html","af7ae7291eac1bf54d5dc91b663e8c52"],["/tags/高级主题/index.html","cfe16662a20f44b39cfcf0da4b3b411f"],["/tags/高级协议和泛型/index.html","f379706583ef34e3cd491d5d17247a84"],["/tags/高级控制流/index.html","40b2d8f226e6b98b3f588ec5f1dc2340"],["/xcode 常用的快捷键/index.html","b1f653e96aec3323ad0fcdc232e704f6"],["/为iOS应用构建输入表单/index.html","addc912535bef6b729325441a8c5125f"],["/产品开发的幕后花絮/index.html","97515e98b29531d2e0eb4e4df3f4d7ec"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","d4554864c8d9a2d6430d7315f4363345"],["/冒烟测试与回归测试/index.html","df7b17fd6e10f96efb3df9e904848bfb"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","f71108c181aab14fe6daf4cbeefc5f75"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","e49d4884429b9008328bc2dbe3957adf"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","3a7a6ea6fb6442e9f0a3a225ec2d1299"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","91a67ac6898dc877d126ab2064a36951"],["/在Swift中创建自定义集合/index.html","6f0947f787b6a09d0195fa37aa471b76"],["/在Swift中处理非可选选项/index.html","33b097ef6a9267937853ddf9ecfef812"],["/在Swift中生成随机数/index.html","1c07bf334243bfb638e2e1e2e080854d"],["/在Swift中重构单例模式用法/index.html","505d6911091f466b487ac3497de19bc8"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","82a88fd9f9e2e2c0be48e3e0912d46ed"],["/如何为VIPER编写服务？/index.html","fad99dc60c2c48bcf0ab45b8d00d82f6"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","1bd122a1bbc49e35773d5969dc1d9e51"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c991a88671282e396eca802c511c163a"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","adadd7ce1fe21afef11be4297982a396"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e4d584c6b3930897ecedbb34a8850b74"],["/掌握VIPER架构/index.html","0e96903b734b4e5eeb04013d3d5f9252"],["/揭秘 WordPress Hook 系统/index.html","2631e0f254e2ed06b8cd6a7c961a12cc"],["/比较工厂设计模式/index.html","539f92231361e5ef74688c564fb72702"],["/深入了解Swift中的Grand Central Dispatch/index.html","f94d05bbc04fd6bbf9850f804f62ecea"],["/深入研究Swift框架/index.html","d1f8327b52c7466ed022f72451d86ef2"],["/组件化插件化与模块化/index.html","6e1e3116dd3131d41ef666c1cc794a47"],["/组件设计与SDK开发基本规范/index.html","33422bc3b0619bf8762f7440857fa0d8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6f109fa83bc3df7cf07331f3ed427148"],["/选择Swift而不是Objective-C的5个理由/index.html","23d413cdcc112504566eef1a216ca416"]];
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
