/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ec1422fb7e0bf3fd9b983803a979d963"],["/2020年iOS面试题总结(三)/index.html","9820b1e27392d68028652f7922531283"],["/2020年iOS面试题总结(二)/index.html","3d3099843865c39208576abc00deb818"],["/Advanced Swift系列(一): Swift 简介/index.html","d3595fc2949fbd21e51013a1deb7e3e7"],["/Advanced Swift系列(七): Strings/index.html","61c1a3fc2c021e27ad369b7aa743929e"],["/Advanced Swift系列(三):  Optionals/index.html","c65454429de417bc986ef88e55d475e6"],["/Advanced Swift系列(九): Protocols/index.html","d9db93434fbcf1f81c106a432c32e2fb"],["/Advanced Swift系列(二): Build-in Collections/index.html","e3e8c80ee014a00e8e0f6cd97ca246c3"],["/Advanced Swift系列(五): Structs and Classes/index.html","1550476bd39b9e9fcb21732f87b7104c"],["/Advanced Swift系列(八): Generics/index.html","6b37634cb9d01d55df556b1b67352cf5"],["/Advanced Swift系列(六):  Enums/index.html","193a4f636d1dbb7ab9c7867b5d338203"],["/Advanced Swift系列(十): Collection Protocols/index.html","f3eaa70ec8ffc829e8c7b3e66a11673f"],["/Advanced Swift系列(十一): Error Handling/index.html","6edf099960a62581d109c0ce3ba3eabf"],["/Advanced Swift系列(十三): Interoperability/index.html","27d9258354688fd1e64566a197791fe8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","2496a6d0c954b315dc76ffd2e6f8727c"],["/Advanced Swift系列(四):  Functions/index.html","5b74395d9ca45e5672cc3cc436114fd0"],["/App Architecture系列(一):  简介/index.html","2c01cc3c20cc3608b787cc526aa524ec"],["/Functional Swift 初探/index.html","c81ccd3054976e7520836005cdcb817e"],["/Git 使用小技巧/index.html","b054c7c8cca112d4657e1bf25ebdbb84"],["/Go 基本语法初探(一)/index.html","f9acc30793c57371ad6b24606a4fc92a"],["/NSCODER和SWIFT初始化/index.html","6a5ed0a182f4309955553e09fc2aaee9"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","4c7040d7b962d03e577cf36a17f92721"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","bd9ebc92a1fa6d3fbcd5c211173a4d4b"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","48e465f01d7bce1fed135fb625e4d328"],["/Swift 5使用UIImagePickerController拾取图像/index.html","ed38ab11f8ad4e3fc8a13e65a06cd47a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","c0d707ee3688147427591b0d8e0345e4"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","220752b6055a11e89d59f3761d798422"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","e6c7a606c658278b04c0bbc78703d1ab"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","62a481cf22ae18ef5b09fcddb1757a41"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","a9b0109cc5a43883e0e440e3b8274239"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","464bb4dbaf983880dde6d20bf42b40bc"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","416e25db08ffd52693f25e226ff3dc37"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","4c8c40766badda82de8aa8a7366e51c0"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","4e13856d50cce55af74020fc8816f497"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","fd89208f33b32e919d9027e12ed2495c"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","520678605d83f7bcc4467cd35e733df1"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","692ee2e5106dcc314c590123285472d0"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","14e55b45275cbc80cfdc90d02f4b3c40"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","0e4075789fdb1292fa70b0bb60fce771"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","16dbf5e978cbcf9d1dd16af2c962c378"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","cac060c131cc21f72d2cb1b33b42fdd7"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","0636449cca11837ab3708c2267305d37"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","0b9187b44ee04f600203f3486fcbf627"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","8a92d83bd4203ac03caf6ca49aec5009"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2215c9961cdeb048d36ca7dbe5cb08dc"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","a899f23f194470be5a5f337df9935ecc"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","80ce5f0e8f4c2a0496a23f2f005a8ad6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","1783c038121872255e037383c1601d25"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","3a95468adc79c79e943b420f97aacde6"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","2478e6a58ec35fb02d5e1e11611a66ab"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","f8ba1cfdc5c67752015d28c736bd8615"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fb72438e262fa6cf6f2002c784046466"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","402880590f1cead0772dde0eb3b0e428"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","02c6e6389be8fa240c1eaee20361b954"],["/Swift CompactMap vs flatMap：差异说明/index.html","bf5284276b836059a35dcdeae93c6619"],["/Swift Grand Central Dispatch 深入实践/index.html","8e831ac4c237203d5020c6f52cb9f5ed"],["/Swift Lazy属性初始化/index.html","f78abf5b886cc1a2704c18c543aebbea"],["/Swift Promises 初体验/index.html","8e330973065b90d50e02e7e1d1fa92f0"],["/Swift Promises 探究/index.html","8b5e40d20fbc0de9ad5011cbf9d55ae8"],["/Swift UICollectionView使用指南/index.html","d86aacae8f1e02e75d59893337b9bbf2"],["/Swift URLSession && Combine framework/index.html","79a89889954b6b4d6ed99a46a72d0bd9"],["/Swift 唯一识别的视图/index.html","8c54317210f16fee3efee95b7814e278"],["/Swift 如何学习现代UIKit？/index.html","1c23bb724cd7ac7a1300fbec87d41a71"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","0a8730a39562b0e4c5f4c0c152caf504"],["/Swift 用 compactMap 替换 flatMap/index.html","4151e64f9a012e85884f09f65a39834b"],["/Swift 选择和播放视频/index.html","32c0aac74f7715af0c1d19ffe2ebd9cf"],["/Swift中UIColor最佳实践/index.html","d55cae4cd8071cd58fc37f3ceee0b839"],["/Swift中快速简单的工厂设计模式/index.html","6fa937adbf329f86cb916659c06c6dbb"],["/Swift中构造函数与静态工厂方法的比较/index.html","7485e7a8b812d6281efbb63e3a928372"],["/Swift中的UITableView教程/index.html","998bb2be1a75bf819ec6af08682172ec"],["/Swift中的懒加载模式/index.html","409e6b94148c0142ffb9f944bc36bfbd"],["/Swift中的模块和挂钩/index.html","3f2ebc7bd016bece4625ee21d3c10471"],["/Swift使用布局锚点添加约束/index.html","35a5266f8faa6d604ba921d6026332a6"],["/Swift依赖注入设计模式/index.html","544715ddaaecf9630f64c44c5eb65241"],["/Swift关于Dependency Injection (DI)/index.html","1970db3a40940a7f96dd525afa3db4fc"],["/Swift初始化模式/index.html","ca2c8c49b1411e956801a6fcac177a11"],["/Swift单例模式/index.html","1a3158de28bcd33559bd506236507d68"],["/Swift原型设计模式/index.html","744e848e1bd909532783a3c73165f4fb"],["/Swift命令设计模式/index.html","3e7663a6d7daae8746e848b1226a061d"],["/Swift外观设计模式/index.html","0758774d238e67108eb903219e20a13a"],["/Swift委托设计模式/index.html","f00ff8eff75f267a5785568b1aab7933"],["/Swift对象池设计模式/index.html","38d3383df8c5164406a3767d564e54af"],["/Swift工厂方法设计模式/index.html","02686c3a144eb20e6600ddffa61068d7"],["/Swift带闭包的懒惰初始化/index.html","c564fcd95334e1f4da44813e6d6eae0a"],["/Swift抽象工厂设计模式/index.html","ab464a8cca20b36055fe4e5f6fc9c7f7"],["/Swift掌握iOS自动布局锚点/index.html","979e85369cb69d3fe1699ad3739a6319"],["/Swift支持旋转的自适应单元格/index.html","1886dee732e3ca00db23d7e915357e19"],["/Swift枚举值/index.html","7e984f8bca2c0a3ef5f12e90794c777e"],["/Swift生成器模式/index.html","71a53a862dd752e9b3a336d47806020b"],["/Swift结合Xib文件自定义UIView/index.html","0d7ffa5239967ae60ddb278020f47f8c"],["/Swift编写的20个iOS库(一)/index.html","cf698db230eaa0bc2a2d872e35f32fb3"],["/Swift迭代器设计模式/index.html","3f60ebc59a3641fa8208503c41892eb1"],["/Swift适配器设计模式/index.html","f3ba5727fee4a3c16198d983b7f7298b"],["/Swift静态工厂设计模式/index.html","243ea3cc45be343f09aee12088c445cf"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","85935452d9d187152d669e2780df8e76"],["/UICollectionView data source and delegates/index.html","82808ad8dcba31d25f7553f77d06d4ed"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","b8bb9c76e6f4291e46486626792ceccd"],["/UIKit初始化模式/index.html","76b732048c1e0b5ee1fc5dc8b381b425"],["/Ubuntu18.04替换国内源/index.html","c02aa62ce9db23967e5e28259e1bf90b"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","640094b49f1e160b9b5aef3258912a8d"],["/Vapor系列 (一) :  Vapor 初探/index.html","3a2748ed7d8b9aa671acd468d627f045"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","127a933a060decb99fd0e9ce54a17840"],["/Vapor系列 (二) :  Hello Vapor！/index.html","47f24b295960a220a1f5ab21ad4cfdcc"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a2551f04908cd882dff449f4cb036e7f"],["/Vapor系列 (四) :  创建博客数据库/index.html","4ed65c6b283cb6497db706d4e31964d5"],["/Vapor系列(六): 徒手撸一个CMS/index.html","80fd3712bed176e963aafcbd14061a0a"],["/Xcode扩展/index.html","cd0b0b784a715df9e883bf6a8ae688ab"],["/about/index.html","861ada0874cd09325b35320224390313"],["/appleOS的Networking示例/index.html","017022b697030fccf8b80286003dbdbf"],["/archives/2020/03/index.html","96bf12dba5bb4fa80e3fca5596094cb9"],["/archives/2020/04/index.html","7818a20126df0c01cab6e26abeea01b7"],["/archives/2020/04/page/2/index.html","4384731e0a200d052b3d46e6289f1d11"],["/archives/2020/04/page/3/index.html","7041ac397bda6285073ccb7a564eb980"],["/archives/2020/04/page/4/index.html","d1f0828898ae3c2608d1ac8acc4c8035"],["/archives/2020/04/page/5/index.html","bf6bb26d7294aeed6d874fc760f5f9d4"],["/archives/2020/04/page/6/index.html","a6daeb91b0b4121bf0f347393e652f13"],["/archives/2020/04/page/7/index.html","5888d87db476545fe09b0c7f4ed62479"],["/archives/2020/04/page/8/index.html","7dc7576919c45dbb2d23f06f7f488407"],["/archives/2020/05/index.html","1b1a099deac002573809871c455f45dc"],["/archives/2020/05/page/2/index.html","40447c5ffa8470165e5f562f814b4614"],["/archives/2020/05/page/3/index.html","b3ea0660e71bbd46c11169eeea8268e5"],["/archives/2020/05/page/4/index.html","d93e14fb960065fa7d8139782cb06553"],["/archives/2020/05/page/5/index.html","9141a52929f17d7356b589f636458077"],["/archives/2020/06/index.html","f84b6c8b2ac6bfbd04477ed7d7b0f9f4"],["/archives/2020/06/page/2/index.html","47145a171f305f474b94810e3b9eb56c"],["/archives/2020/08/index.html","20d3d64eac92b83187a3e671a48beb15"],["/archives/2020/09/index.html","558a36974a2155026058407f39e98d3e"],["/archives/2020/10/index.html","a3d9cb20465c4a98cf99c0421dedd9da"],["/archives/2020/11/index.html","6b829422cc7519b14f1558168cf43341"],["/archives/2020/12/index.html","afbff131ac33cc688314f522f02d9d34"],["/archives/2020/index.html","21b60aa988ae17285a320ed17ebd055e"],["/archives/2020/page/10/index.html","781211700c9da389a55baf9d6d83f483"],["/archives/2020/page/11/index.html","8db2af223227ae4c708456f10f2a75d9"],["/archives/2020/page/12/index.html","a1fbb4aab739042cfb0d630173521e99"],["/archives/2020/page/13/index.html","da77c294ed34924ebfc50f78503f0cea"],["/archives/2020/page/14/index.html","373a329c33ba3533871ae79d936c99c9"],["/archives/2020/page/15/index.html","5bd33b9bf13b3c6ab0c6aa0e6386bc0a"],["/archives/2020/page/2/index.html","e529e06e8232ab692b8c8f10a0ac8842"],["/archives/2020/page/3/index.html","8c3c5dfb64b4f4cf2a318dd66c5205db"],["/archives/2020/page/4/index.html","1fec2cc44b0c26e6ad93bbf9bb4fc039"],["/archives/2020/page/5/index.html","dd56b654cb89ff535143b44d6364e99a"],["/archives/2020/page/6/index.html","0b468a32629620f62d2b1a52d1dab442"],["/archives/2020/page/7/index.html","7bc43122cb123885d625d2831431a82e"],["/archives/2020/page/8/index.html","09a81f79ac2291481fc5d13709c6a97d"],["/archives/2020/page/9/index.html","4c401d334e6c55df8c343620aae6c23f"],["/archives/index.html","25a1c36dd9862d67dd3bc520e823c034"],["/archives/page/10/index.html","cb689d1e4c3fd0791c4d71aba9bd12aa"],["/archives/page/11/index.html","a79092046db6fc5b659c5ba9ddb5f5d9"],["/archives/page/12/index.html","f56b6e9ee74e7fdca9b1aaaaa67c4161"],["/archives/page/13/index.html","877dd7575816feeb34462b2e0512ae81"],["/archives/page/14/index.html","2710d124f5dedd94e5a76c22a4c0914b"],["/archives/page/15/index.html","c47da83ed2d392168e5cfa613ce26635"],["/archives/page/2/index.html","cedfc08b3c2967add67b6c4d928c4cd8"],["/archives/page/3/index.html","e523a8ba2d0aadc8d5fcec92e3dc926d"],["/archives/page/4/index.html","c6ec68a3c9cda9ea7ecf393b0478c049"],["/archives/page/5/index.html","08a62d9254b74d04e4892557d92ab4cc"],["/archives/page/6/index.html","84a2917914ad70d9f9f77f7e9591358a"],["/archives/page/7/index.html","a3cefe3df184b40872d5066ff41f0b27"],["/archives/page/8/index.html","1150f9585772c7b39acb630c83463822"],["/archives/page/9/index.html","3bbe26ca5543898186756ab95b39a4dc"],["/bugly 上传dYSM文件小记/index.html","a49282c22864f7d09a2c10863d0eb976"],["/categories/Advanced-Swift/index.html","192641a3b973f302d906c1bdad721579"],["/categories/Advanced-Swift/page/2/index.html","87bf5d3c72930653f109acdbfe6329d2"],["/categories/App-Architecture/index.html","935e7957d4049ef2e80488335338581b"],["/categories/Array/index.html","57232bc9b126a25296794e355c65f15e"],["/categories/Codable-protocol/index.html","22a16fcdb6add63be1b9bdb9e382edb1"],["/categories/Combine-framework/index.html","268c18b4f8a208507eb1dc629c0458ca"],["/categories/Combine/index.html","ee66f1cdbaa542d774d6a9370001d500"],["/categories/Go/index.html","5aac51996866b85c5d4b52bee0463711"],["/categories/Grand-Central-Dispatch/index.html","a5a348dfe65b12eae86d83a9e82f0fe3"],["/categories/Hexo/index.html","bc5c19f77d2bb465220582c33f507c8f"],["/categories/Homebrew/index.html","9b08fcb9de92c41f355f8e641d32ec67"],["/categories/Promises/index.html","60ef91cb6e1e119405a383b353e979c7"],["/categories/Result-Type/index.html","77b104d67cf6fb7e1b1846bfe25dcb1b"],["/categories/RxSwift/index.html","498ca97e365ee1456f90e5009f6768a8"],["/categories/Server/index.html","4ff94beb6d5abb93940df3ea32f0096d"],["/categories/Swift-Apprentice/index.html","9b071fabe02a45d2aa1718694fef0f51"],["/categories/Swift-Apprentice/page/2/index.html","2a67ade393bc010c3dc785d68661b76c"],["/categories/Swift-Apprentice/page/3/index.html","46abf15434044944bccfbde861207455"],["/categories/Swift-源码阅读/index.html","5677d27ce0e37790275eeee1f8008d0c"],["/categories/Swift/index.html","30a101234cd07b015631b44dcb5c11da"],["/categories/Swift/page/10/index.html","1b6ed62b1d77543e2c7ac1d541e90bc0"],["/categories/Swift/page/11/index.html","7292744c054d3e5718b144fba402afd0"],["/categories/Swift/page/12/index.html","3f551258cbfb1320e06d03dc0abe1f18"],["/categories/Swift/page/13/index.html","21651869f386a7ca45283ebafd4e6e51"],["/categories/Swift/page/2/index.html","e2f03d3c367d1476e58a854b1d1368f9"],["/categories/Swift/page/3/index.html","f8db2356eb297496313f891a28a3317c"],["/categories/Swift/page/4/index.html","10df596b10bfcddd628b1a9ec7335114"],["/categories/Swift/page/5/index.html","ef86b7379ca62df05f442adbbe0058a7"],["/categories/Swift/page/6/index.html","97fe82c49eb4a9847821e91d45d66db8"],["/categories/Swift/page/7/index.html","63b6ef8e8a2e8f5d9b5df1d8adda6259"],["/categories/Swift/page/8/index.html","a4d06766168d3d7a76e008fe1f0a5b72"],["/categories/Swift/page/9/index.html","e27bf91c648f0b368d0fa100ddbb25b7"],["/categories/Swift5-2/index.html","d5988fc581f69b0e6ec6c60f5c987dab"],["/categories/SwiftLint/index.html","ec11f426101e46b7968d880764e4368a"],["/categories/SwiftUI/index.html","e15eb958bfa695febe5bca929935616f"],["/categories/UICollectionView/index.html","497fd08e73cb44d630a5d875d9bab449"],["/categories/UIImagePickerController/index.html","a95369935346cd22197f2bbaa6627693"],["/categories/UIKit/index.html","e249eb8a665f54368e6b80c9dc3af99b"],["/categories/UIKit/page/2/index.html","8c6d898533a16cf5628f77ef2d31a040"],["/categories/UIKit/page/3/index.html","69216408c8cbfa6e9f2eaeafbfded4fe"],["/categories/UIKit/page/4/index.html","70a5c31171bfa6e8ac31370cc6a6c780"],["/categories/UIKit/page/5/index.html","0d37e130fae5e73ee6a0a64541f50cf3"],["/categories/UITableView/index.html","478c4cce68ecc40ea937570cb10a1d57"],["/categories/Ubuntu18-04/index.html","9968584c3b0fa6fc8a7e2e870743d738"],["/categories/Ubuntu软件源/index.html","60783f4632fdd62d274fc766a42d2ac1"],["/categories/Uniquely-identifying-views/index.html","70ca4fd3ec028fcf9eafb8794b8ba484"],["/categories/VIPER/index.html","8bc4962f11651babbd35cc299337300f"],["/categories/Vapor-4-0/index.html","87eb818317d45be88cc8a2987d46380a"],["/categories/Vapor4-0/index.html","247864d4c8ecee607f94e3e6e409452f"],["/categories/Xcode/index.html","3b3e1c4b142bdb6b63b074869abd5056"],["/categories/appleOS-Networking/index.html","9fda45138d5364732d9a531db727665b"],["/categories/bugly/index.html","55f273fd999f0de7eb2fab8cadb29333"],["/categories/enum/index.html","22c3b32e77eea52ccde64e00720e497b"],["/categories/git/index.html","129c26822343177ae9b3558b09113a52"],["/categories/iCloud/index.html","5cd47c5b0438cc418f09c48b3187562e"],["/categories/iOS/index.html","c092dcfb3d1fc5eb342913685fe68ccb"],["/categories/iOS/page/10/index.html","8521bcf65d5c14abff6ff96139326b33"],["/categories/iOS/page/11/index.html","51552ab60bc80cfab4022f09212ca664"],["/categories/iOS/page/12/index.html","b274a5caedd30a39b4ad86d734068aa0"],["/categories/iOS/page/13/index.html","1c113130d372ea161ceba9b5bcd19aa9"],["/categories/iOS/page/2/index.html","13531235067fef473f8f2e4b82efbbf8"],["/categories/iOS/page/3/index.html","070bf7f309954f23ca8de99eac443598"],["/categories/iOS/page/4/index.html","eec1aca0c1bead0261266578f3466aec"],["/categories/iOS/page/5/index.html","58b04473585b5c67f499c0819ab59a7c"],["/categories/iOS/page/6/index.html","d2846a03de3fed5bb71147b8bdc790f3"],["/categories/iOS/page/7/index.html","6d4497fbb13e28457937d4b135364c5e"],["/categories/iOS/page/8/index.html","6f06b4808e2e82eaaa0e1b99cd215c0b"],["/categories/iOS/page/9/index.html","2a9862a5d03ed2cd9af8974a3ccdaa09"],["/categories/iOS面试题/index.html","b719756d32fbfe9dda012aa5c3590597"],["/categories/index.html","ce818263923f1c13d64d87759fc15d6b"],["/categories/random/index.html","fb8b3a09b3d08056f2aaaca52df405c2"],["/categories/三方类库/index.html","90f20f43de1e4d4bf791d822fa03ce18"],["/categories/函数式编程/index.html","5f91fb44781421b4075c02db866b0f89"],["/categories/子类化样式/index.html","51ad32f4f728b733dd9f1f40e4a0d01c"],["/categories/开发记录/index.html","f094df2c63bb2f0ed9a2c6edcdc5a12f"],["/categories/技术支持/index.html","c1eea93cfb7b0c50e995d0d46a950252"],["/categories/架构设计/index.html","42ad7a30a95d44c75aa883bdaa687048"],["/categories/测试/index.html","0b7716eb7996932c352247634d2bc225"],["/categories/用户体验/index.html","af388cf850a2b367bcec30641a062fcb"],["/categories/用户协议与隐私政策/index.html","64d9df2aab9c870c4a07730dc5ef0fd9"],["/categories/设计模式/index.html","723519346e27b802b3f77ac4756d1ac9"],["/categories/设计模式/page/2/index.html","6031380cd2a17f30e14cec32ff60d90b"],["/categories/设计模式/page/3/index.html","01b0e1c1d7ebbfd2df58280654d0c019"],["/css/main.css","7354b719a5352a3bc526f03f1c61d802"],["/hello-world/index.html","6bfa43f4326d7239f71217f20deb202e"],["/iOS VIPER架构深入实践/index.html","1bf4b5d36114163cd616036d8cebecca"],["/iOS 自定义视图，输入表单和错误提示/index.html","8508fb0e2efc8b22433a3465cc6b7def"],["/iOS如何使用iCloud文档？/index.html","5fed38b43afd0f66f077e8fe29a89749"],["/iOS子类化样式/index.html","47db8e9f4bc68d1a5867535417d5da62"],["/iOS开发记录<一>/index.html","765b8d751805feade5c159699680393d"],["/iOS自动化布局编程/index.html","f2edc712c7a870daba99e8c04d538460"],["/iOS自定义转场(By Swift)/index.html","b3fcd19044d7adf45528ed2ece7aff31"],["/iOS项目架构：使用VIPER/index.html","a7b20f62a9171846283d4f87b0003220"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f4857ebbb65e174875442a208763845b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","0d119c462098395d7079e1ca960fbe14"],["/page/10/index.html","31aac541884c35e3e324c82e4d5a6c3a"],["/page/11/index.html","3523017881a0d0880e152bcc9b6b1a12"],["/page/12/index.html","d9077251f5befb1c47985a7b53c35e67"],["/page/13/index.html","ec6a846e4eacda7c215621069e7c3412"],["/page/14/index.html","f1fd09977db2bcc2e63df21109216c14"],["/page/15/index.html","adbbba9cdf6699fa9bf7aa7392783df6"],["/page/2/index.html","dec13a53386864987a10de3fa22db4bf"],["/page/3/index.html","1a0e94dd927f16ad41cf263019857188"],["/page/4/index.html","7435db5d9576b2bb3914da48e3d84b37"],["/page/5/index.html","c063758923365f0ac3b4f0616477f96e"],["/page/6/index.html","8d6f0f2fe6f430127886934416bedb6c"],["/page/7/index.html","fcc8dfe09452a398b44df3b598acdf0e"],["/page/8/index.html","e8cacf7fc54999c18ca1e144d075acf1"],["/page/9/index.html","9a64632c4fd2d1c252ff2b623047c94d"],["/schedule/index.html","9133994b0c6dbbd66aae7704016181fc"],["/storyAppPrivacy/index.html","c43c9406a1b597075c8136e941600bbc"],["/sw-register.js","7095de75f803c6969356f18518c84902"],["/tags/Advanced-Classes/index.html","ac0c794e9f90d30b9799455641cfdfd8"],["/tags/Advanced-Swift/index.html","4ea793cec13b7eb2d32988dc1c76a534"],["/tags/Advanced-Swift/page/2/index.html","5552f3c2c661515062251824503bc25f"],["/tags/App-Architecture/index.html","c54ac808c733f09070a809964bb2b8d9"],["/tags/Array/index.html","c3fb7feda881cfaea375b7d63e2b3b49"],["/tags/Arrays-Dictionaries-Sets/index.html","d2d0a5e8951d098671364f6d417a9ba3"],["/tags/Authentication/index.html","88bf37f650f18cba96b470fa5b5e9eb9"],["/tags/Build-in-Collections/index.html","e4133604077b69e37fbd6ba9f7a69b31"],["/tags/Building-Your-Own-Types/index.html","dd33589f32434fb1566d46cb3ab2aa71"],["/tags/CMS/index.html","4d65a1dabbc8922e9ac438a43eeef220"],["/tags/Classes/index.html","7b1104495f39fcd6e7fe08cab1d6bec7"],["/tags/Codable-protocol/index.html","78afafd3521d0565a753bf24028ce987"],["/tags/Collection-Iteration-with-Closures/index.html","a1cd6b1cd537101ef243cd8329310700"],["/tags/Collection-Protocols/index.html","220e476a0f58588e084378be9ea46daa"],["/tags/Collection-Types/index.html","13b8d4b45c62dd7a66054707e4943d1e"],["/tags/Collection/index.html","06aea41c823bc152c6bb372e61287bd0"],["/tags/Collections/index.html","a930071557e7962540c3a9d2d8ba33db"],["/tags/Combine-framework/index.html","ab116098fdbb0a59e97d92a5c1d92b6c"],["/tags/Combine/index.html","b8f5b6273cc6ce40e4b499fa85a48696"],["/tags/Dependency-Injection/index.html","368648d39d848d11353d834f6d54fd6f"],["/tags/Encoding-Decoding-Types/index.html","4867990b79d5bed2ef2485dc2c2fcc10"],["/tags/Encoding-and-Decoding/index.html","3f26e907ac41e037f618903f5df20c3d"],["/tags/Enumerations/index.html","0a26d533cdc43f13930ce6dfd993946b"],["/tags/Enums/index.html","5a836fa280661f1eda4925f1ade44f2f"],["/tags/Error-Handling/index.html","ba1a6c7f43f1cd616a553effb8754f18"],["/tags/Functions/index.html","a6fdaf7f4bf107ba09a074fbf90fd009"],["/tags/Generics/index.html","73a5f9602b49036892b2ac7615cf57cf"],["/tags/Go/index.html","2e3eb8ac20c2025b9cbe83963fbf2564"],["/tags/Grand-Central-Dispatch/index.html","fc013fe25f931108654e371ee7a4e9f1"],["/tags/Hello-Vapor/index.html","68aa8da82c591878ec89811cc48a90a7"],["/tags/Homebrew/index.html","f075a999020e0483319f24e1c4ec216a"],["/tags/Interoperability/index.html","06f1a7611fd3111b0e2f5e1433ff8a11"],["/tags/Introduction/index.html","7abbba77408762b17b335e0800a53d10"],["/tags/Leaf/index.html","e4e30d960f6730095d10d6ec77e951ca"],["/tags/Methods/index.html","24608aaf59a346416df95cb87ee7f91b"],["/tags/Modules-And-Hooks/index.html","b70aa54e26e9e19b05e1368aa86e714f"],["/tags/Optionals/index.html","b54a3db341c742299ccd0e95b2a60a1a"],["/tags/Promises/index.html","c73a68892cc81163ced37c76cd0a2357"],["/tags/Properties/index.html","4cfd865a31666da7b4147f868ba47a70"],["/tags/Protocols/index.html","d070e4abaa5f4aad74616993f9d75e4e"],["/tags/Result-Type/index.html","c8a8b32c01610245d50e979f8ccde657"],["/tags/RxSwift/index.html","f984e60d334acb2accbd0d7768cdc574"],["/tags/Server/index.html","e26b0a9066300deca6b9a009275b9b81"],["/tags/Session/index.html","bc88975dba055929c6f04de83e4b038d"],["/tags/Strings/index.html","a38e8c97b44596654540df46b9f32f70"],["/tags/Structs-and-Classes/index.html","a57d17447d162c156949d0e52d5f99e6"],["/tags/Structures/index.html","df1e90b052c06b061a2da39765bfb6a7"],["/tags/Swift-5-0/index.html","741a8c35321336f8bb4df1c0e774716e"],["/tags/Swift-5-0/page/2/index.html","77b6124b0e5f0f0c9b8437ff11e76d6e"],["/tags/Swift-5-0/page/3/index.html","8de509eb44ec3f3de77d502ee05a37ca"],["/tags/Swift-5-0/page/4/index.html","5031bc6c2049033281a20299806f5cfa"],["/tags/Swift-5-0/page/5/index.html","be6d978052937e40e7a60cb20e65073a"],["/tags/Swift-Apprentice/index.html","57fb9a364c77d08442e3d9e158236bf9"],["/tags/Swift-Apprentice/page/2/index.html","8256f69d38ee6b4f0d181065ce10348b"],["/tags/Swift-Apprentice/page/3/index.html","a7572b190e1da0b78806a28f162bb877"],["/tags/Swift-Package-Manager/index.html","0ade3e9e00ad26c19dbea0c1b4e405a1"],["/tags/Swift-源码阅读/index.html","5e3887036b568acd663d893bc3f6ad3a"],["/tags/Swift/index.html","78ea7dad1cb403c7864ba1362360d496"],["/tags/Swift/page/10/index.html","7dc4eb638f89cbd0717ba5630bf7287b"],["/tags/Swift/page/11/index.html","0028f680f6fc00d4650b96cf0462b703"],["/tags/Swift/page/12/index.html","88bd2a0506f4e9b27c5619be627b79ad"],["/tags/Swift/page/13/index.html","2e7da2b7ba5393bad6aa5d98c7ed9c2c"],["/tags/Swift/page/2/index.html","45557674db0d5ef0bb38aeabc53d2657"],["/tags/Swift/page/3/index.html","2f52e2527bad5b873bace510be055c11"],["/tags/Swift/page/4/index.html","7265f0a27b5dc239ffc826708d1eb9fa"],["/tags/Swift/page/5/index.html","9ac0940d952f08b012c0e8cdd905e7c1"],["/tags/Swift/page/6/index.html","4fcd7c5be6f8a30cd8ae1312402d440b"],["/tags/Swift/page/7/index.html","879d659abb78821d7643bfacd4482197"],["/tags/Swift/page/8/index.html","8ad094715984ef7df58065162d80230d"],["/tags/Swift/page/9/index.html","bee36495ce1f2718266a64cb8c8574de"],["/tags/SwiftLint/index.html","0f52869457ea94135abfe47e78f0589b"],["/tags/SwiftUI/index.html","fa03e66cd3250c754a43384ab2ccc914"],["/tags/UICollectionView/index.html","7fa97cdf0d6889fc110826e217a9ddd0"],["/tags/UIColor/index.html","7bc86acd5f1e8fea43c60252e5408c41"],["/tags/UIImagePickerController/index.html","fd4802e31e1a3fd81a8333a55e262749"],["/tags/UIKit/index.html","bb4ec1d4a5e8e889098b26e7cacb634a"],["/tags/UIKit/page/2/index.html","4f753c516d55bd66973ab692184e00ce"],["/tags/UIKit/page/3/index.html","7668a4e814bbfa94336382b0036dfc90"],["/tags/UIKit/page/4/index.html","cbf06f700fe3b31ca507ee4a3cb95a20"],["/tags/UIKit/page/5/index.html","57f605e5aa75e12dc3397d0197290d14"],["/tags/UITableView/index.html","5d4094bf519014cc6bb25d7054475515"],["/tags/Ubuntu/index.html","2576f1529a302ecbb28fc568a230c83a"],["/tags/Uniquely-identifying-views/index.html","27010c24f5b721b7eed26a5adcb334a2"],["/tags/VIPER/index.html","ec93a83dd6bfc7606e3d8acb71fc75ad"],["/tags/VMware/index.html","98b322f86fa639612da8a91c54551339"],["/tags/Vapor-4-0/index.html","3a8807468b6863711c59144f998044b4"],["/tags/Vapor-初探/index.html","76a91538a0a96d380dbbf1b6f61f8860"],["/tags/Xcode/index.html","eaa8bd1f26e498dbba3cb0134a3f32a0"],["/tags/appleOS-Networking/index.html","d2e4bfd402def825fb1fb715d85cc8bb"],["/tags/bugly/index.html","de4fb09eefa2887e4cdbf5129f33d7e4"],["/tags/enum/index.html","debe8956812408f0cb56a23367fda8ab"],["/tags/git/index.html","deb077d527b363c73f01c378d59d8e14"],["/tags/iCloud/index.html","1302e3d63680d8ec2cf23c1d67edfa07"],["/tags/iOS/index.html","929158eeaa255d015c57ce11a5831929"],["/tags/iOS/page/10/index.html","cb8a58d737b7c54da4c11fcdf6cef393"],["/tags/iOS/page/11/index.html","63c8751f8599dab28f210b5c350718d1"],["/tags/iOS/page/12/index.html","f841a34d3444d90a8b4f471c2c3f1a20"],["/tags/iOS/page/13/index.html","b1c21576ad74707a0d5dc17efc2f7a0f"],["/tags/iOS/page/2/index.html","32de75f4afae022d9e5ad6206ae3c00c"],["/tags/iOS/page/3/index.html","052910dd9344f5dd4f80874863b97a97"],["/tags/iOS/page/4/index.html","10f52521f5caf1e67c6b81d7325d94cd"],["/tags/iOS/page/5/index.html","d05ccfd189e0af71acd99539848bc422"],["/tags/iOS/page/6/index.html","037d841b5e2364262fa480c78c55a64d"],["/tags/iOS/page/7/index.html","1f805002ba1f3eb650c31edd8bc4f62c"],["/tags/iOS/page/8/index.html","1afd78b9a4aab354cd9c761949a2fdfa"],["/tags/iOS/page/9/index.html","6d54bc57df677d197d0fcc6f7b067c0a"],["/tags/iOS面试题/index.html","e960eb0a7efc1f2b62d2fcbbfc770485"],["/tags/index.html","20616e92e496b2577f0d477a7b7ca7ff"],["/tags/non-optional/index.html","76e21c29ab9cf3efcdaf215c9ae7fcab"],["/tags/random/index.html","0b9981c7792b9d0baebeed8a6920a8f8"],["/tags/transition/index.html","1dbbf5c244627e2ce9464bc7e4cb00b1"],["/tags/三方类库/index.html","889cb1d2feb830a876a7f6ad3d6555e3"],["/tags/依赖注入设计模式/index.html","a3c643a0089dee136fecf9d6d3ca7b0f"],["/tags/值类型和值语义/index.html","c72fa4b814bcc2b0b7c5c3c987867992"],["/tags/内存管理/index.html","fb08d55a85b6b66439e2a05bc6792fe2"],["/tags/冒烟测试与回归测试/index.html","abea8b20bfc0b3f2aabe5092584cf0e6"],["/tags/函数式编程/index.html","fabf9e4c7516c34226bf04f1491deaa4"],["/tags/创建博客数据库/index.html","2ab753aafee7a3fec780799250261c3f"],["/tags/初始化模式/index.html","1030ad8fa8f07e859863dfcd2ef55bef"],["/tags/单例模式/index.html","9a7466de90a70cfba19fef0085faab86"],["/tags/原型设计模式/index.html","5d7b2505101124e2f2c83c12ce7fe933"],["/tags/命令设计模式/index.html","25d87486200958338f3368fbe955bcd4"],["/tags/基本控制流/index.html","d56fd961a0ee876acb4d7318a39ffe16"],["/tags/外观设计模式/index.html","779eab085ed3f7965dae50de4d42a6bf"],["/tags/委托设计模式/index.html","4af58555888dcb12b271714b62b51c7e"],["/tags/子类化样式/index.html","fd2b9c21a19ae012578831939b098ea6"],["/tags/对象池设计模式/index.html","3c194a712c60ceeb3cff5c6a8480666c"],["/tags/工厂方法设计模式/index.html","79ae5511c72ced08baf1f2f1a07b7a07"],["/tags/工厂模式/index.html","43ee999efc55685e434d4e90f0d11f64"],["/tags/工厂设计模式/index.html","718a9b9c452154aceccc03335bd67304"],["/tags/开发记录/index.html","9d150c1fb2da1d75e64bc6d88fea3646"],["/tags/懒加载模式/index.html","a946a0d4c7cc525e92074735d0e977e8"],["/tags/技术支持/index.html","cf178419cb437052ec90693daac07c6f"],["/tags/抽象工厂设计模式/index.html","ea9445b4b802bcc0beb7ca8e5dac3dc6"],["/tags/构造函数/index.html","0c37b6b3930fd6e331d868ba3a3e1399"],["/tags/架构设计/index.html","35dc364239aa3193bff3c7fb85ca9294"],["/tags/模式匹配/index.html","01ab5fd5f3e778306aa4e62dc738c886"],["/tags/生成器模式/index.html","b779decaca80098ba994042163d5f811"],["/tags/用户体验/index.html","86d6701984c2a986274ee4383dcb8b8d"],["/tags/用户协议与隐私政策/index.html","216b3237676a8735511e7f5d242919e0"],["/tags/类型与操作/index.html","71406f89a112b1a18df3704c6039e4a1"],["/tags/自动化布局/index.html","06aecbb94c0408ca2e1e0b3abff682fc"],["/tags/自定义UIView/index.html","30628ed77422e345e8890aba4fda4d85"],["/tags/自定义转场/index.html","451db02eddcb1d6fd4b278cb4d2a1e7a"],["/tags/自适应布局/index.html","ece574b9dde132b344f48ab2ea51ca07"],["/tags/表达式、变量和常量/index.html","2be4fe012decbf85c94de8b582275c0d"],["/tags/设计模式/index.html","9b46e1ab46238cf36a81fa502c38275a"],["/tags/设计模式/page/2/index.html","2a9b779c97519a33f763c607cf80ca31"],["/tags/设计模式/page/3/index.html","920b56230c08df9b57b713ce299cb164"],["/tags/访问控制和代码组织/index.html","a0d5419d79485010a957b77717985464"],["/tags/运算符，下标和键路径/index.html","55ad05c8dc253d3c0a53427b360ca25e"],["/tags/迭代器设计模式/index.html","c91f4bb4451e81bcfc7d268d85a735a7"],["/tags/适配器设计模式/index.html","0bc668c83edade290c872e9e5c68e636"],["/tags/错误处理/index.html","00d77341b7031fdd13eca2199a12187f"],["/tags/静态工厂方法/index.html","a1e3f34784c6927f0477ebcbb200539a"],["/tags/面向协议编程-OOP/index.html","6846398006fff3171ec8d16c517913d1"],["/tags/高级主题/index.html","5cd62e645b67711d0f7d001832dc776b"],["/tags/高级协议和泛型/index.html","26000e367c37547ee294ca9e0de38a23"],["/tags/高级控制流/index.html","44dbbc404ee1affddff08a8bc5820d01"],["/为iOS应用构建输入表单/index.html","b852a2dcfbb60005804da37e6a5d0723"],["/产品开发的幕后花絮/index.html","50e2d120c51549c42a15a47b3dc166e9"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f3a07764ac9d97601db7272dfd405ab1"],["/冒烟测试与回归测试/index.html","caafb10ce82eff02bd1b2763169ef28a"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","ae78fbf584568689b16efab61e412a77"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3f4ffb98e318db7911983dc5fcd49c7f"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","1fee1c541a45125274f491582e996f99"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","2c1284efc3c433201ffde29736add6e2"],["/在Swift中创建自定义集合/index.html","47d7288a6a9bc69c3e0cb64a702af736"],["/在Swift中处理非可选选项/index.html","6c88e14e0f48470a99b91557ab0145e8"],["/在Swift中生成随机数/index.html","871e4a20310c1a0601122f99c78c8c81"],["/在Swift中重构单例模式用法/index.html","3fca1ee070b416a5189072431c6f9385"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","4b1be04a9312c1d10b090fc27813cc9d"],["/如何为VIPER编写服务？/index.html","968aaf3ac1b471f3b03b30594d80a022"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","545c980e514c05b50449730adacb0d08"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3c34530e559fcd81d2b53d0906b4745d"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","68fa9ab533a24ab5a53a06d197756e89"],["/如何使用VIPER构建SwiftUI Apps？/index.html","e82dabc731b818aa84b3302b919fde17"],["/掌握VIPER架构/index.html","6442fdc9100a75483a247c9cd7a238bc"],["/揭秘 WordPress Hook 系统/index.html","394a01a163124cec384fc8eacef88f56"],["/比较工厂设计模式/index.html","777b2fa67e837d79bbcf6706826ac237"],["/深入了解Swift中的Grand Central Dispatch/index.html","f5c7334e042db2200b526fa511196295"],["/深入研究Swift框架/index.html","cbc22a966111fee4bb653902e6424bc3"],["/美豫直聘技术支持/index.html","c8f095412b2294d5fc910c752ed2d76f"],["/美豫直聘用户协议与隐私政策/index.html","289df53595e0f32b56e4020534295d09"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e4ee579c6d01f1bf26d249ac15535791"],["/选择Swift而不是Objective-C的5个理由/index.html","8fabed4341f8942ba71935cc30478e1f"]];
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
