/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","a81e901b570137d1dbb13d138317e952"],["/2020年iOS面试题总结(三)/index.html","91cfbdc3d385d13844a8c15e7ff6dc1d"],["/2020年iOS面试题总结(二)/index.html","2a653bc5f4a7e77d448b593b3c21c197"],["/Advanced Swift系列(一): Swift 简介/index.html","cfc5fb6a9a9762955994bac02113b0c0"],["/Advanced Swift系列(七): Strings/index.html","67d7ccad5a05ef8b196675d9822a0c31"],["/Advanced Swift系列(三):  Optionals/index.html","26083973d74ca19ac9242369cbc0180a"],["/Advanced Swift系列(九): Protocols/index.html","0be383a0994ecf1ab66a254ab8d06395"],["/Advanced Swift系列(二): Build-in Collections/index.html","b02ffcee267e50523673ce5052d7d29b"],["/Advanced Swift系列(五): Structs and Classes/index.html","6fb45a7c28884532bbbe67637a45e8d2"],["/Advanced Swift系列(八): Generics/index.html","b8b2b9866312a78662b3e3905865239c"],["/Advanced Swift系列(六):  Enums/index.html","ddab10df8b1694760f49a17ad40d254f"],["/Advanced Swift系列(十): Collection Protocols/index.html","32f663105f2818084ddee0136ede744d"],["/Advanced Swift系列(十一): Error Handling/index.html","fc8515552c66e188ff94f598671871e3"],["/Advanced Swift系列(十三): Interoperability/index.html","5c9c9dccabedbf944880d520fc279d5f"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","8c5899b5d3679b2f8fb933b4621058f2"],["/Advanced Swift系列(四):  Functions/index.html","5e7275e81b6771db83fc70797ab15b48"],["/App Architecture系列(一):  简介/index.html","bab77f6b8ada49996581c50ba37cd10a"],["/Functional Swift 初探/index.html","d2fcdbcd5988beacf27dc8a901d76fee"],["/Git 使用小技巧/index.html","d0d205ae829bb20f2fb5ac26ccf1d35c"],["/Go 基本语法初探(一)/index.html","6ebf3f00b0b7682918edb7572e2e6696"],["/NSCODER和SWIFT初始化/index.html","99fc03638716cd40160f81c6a43075a0"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","f2b288da68303978f06c4876aa753e99"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","1d4305d3e8c0611753e873731609782c"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","71c32bde1dd8309cf35d1cf9d3b96eda"],["/Swift 5使用UIImagePickerController拾取图像/index.html","05ee8ed8e4e9f9aac67eafa7970837f8"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","1070466a2b6d88d3a58fe988de1d89ec"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","327e76f266efea1e3ea988ec6a01032a"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","add21c6adaece95406e2e7b896b46058"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","4eeb2567133fdc2f0287bed8f41764b5"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","771ce0929b1400e2f7e10f7c21347ee5"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","f7bc31d8fb446b922acdb95f06566bc9"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","c07f04712867af8cd3bc4edc03b6a0d5"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d9e99f2fa605c5d804de7ae02692ee91"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","153bb799c4858cdc6fbea6dd22c50825"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","de7ddb0c9e08e4f2d5a251f161e95556"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","3eaf58d5804d2a79bd7390422e52e17b"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","9335ec33918206113cfdbc75ab481604"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","bccff6b6b85f232d5db936673e5f428d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","7c3f79a8ee36da9e646dce48a2c5cd18"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","2b77a744a1276682a05ac2d60ac33fc2"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","2e4d3a8bb61d7ac59dffee22c9d6062f"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","78ded9595636bd8485b29162d368ca2c"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ff389dcd16b5ce0066e55a4faab02d03"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","40b8be4d0dc1e26be2b10cc72c323329"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4b4f606219b0d111aff5eddddbcb4d77"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","56eab370ddc6f7ed0f845ff403354ea1"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7d02c6044450894907e7bf9b012fae9c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","2f8726ed6d7ed06fa38fa2cd719e1c72"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","1870b24e37491cd4e73050a86a188aba"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","3a5becd6e5f8484d68ff404c82e3b9da"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ac74c27094c110ff646b398aecab013a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","72c7c023312b09ff94649b5fdc6a2a08"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","a204cad37ab56b37e9dac4facf85e2c4"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","c18a316fd4d52b3c46f37b94f3120b22"],["/Swift CompactMap vs flatMap：差异说明/index.html","1504d26a7c88d9ab69e65e91c7f83297"],["/Swift Grand Central Dispatch 深入实践/index.html","cb3451dd078f89fca8506000317287e2"],["/Swift Lazy属性初始化/index.html","b79d97ecb77fabcbd16627bb9a523bf6"],["/Swift Promises 初体验/index.html","d2b7cfb450003d5629035322f7279e20"],["/Swift Promises 探究/index.html","b30131e8927f6114c13faaceef7d6c0e"],["/Swift UICollectionView使用指南/index.html","8a26c2711ca4ba883a25d6a3e340df6c"],["/Swift URLSession && Combine framework/index.html","f13606994ec35598f4247b08384510f5"],["/Swift 唯一识别的视图/index.html","c6ebee3ec35d9e4f981fcc4d4c5cba1c"],["/Swift 如何学习现代UIKit？/index.html","a6c4c0cd15afadf509307fa398c0beab"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","ba34fac5ece5e6a31997d01daba891b9"],["/Swift 用 compactMap 替换 flatMap/index.html","31ab4fb8dd5ca6e7e1b4ea442d3e9cb8"],["/Swift 选择和播放视频/index.html","b6ccba27b0c61bae7cea71fe5b60906d"],["/Swift中UIColor最佳实践/index.html","430e7a95ff92ff78468e4191a2164da6"],["/Swift中快速简单的工厂设计模式/index.html","ca475d8a115783ace5752e72f0b8cf15"],["/Swift中构造函数与静态工厂方法的比较/index.html","ed68916b938437b72d4e15b28d46d694"],["/Swift中的UITableView教程/index.html","e838c49994cbd70c01b9a8e7db578a88"],["/Swift中的懒加载模式/index.html","1c80c8ff4376dd8296d02ff4d98e972b"],["/Swift中的模块和挂钩/index.html","a6eafede251f7eab93555c9ef7a1f1ff"],["/Swift使用布局锚点添加约束/index.html","5e108ef83f0dba635a6cd94d74ed3c67"],["/Swift依赖注入设计模式/index.html","7f8d869dbd6b1bdc97d909fabe7d288e"],["/Swift关于Dependency Injection (DI)/index.html","fb19a58daa8ab07f89a2d974db2824d0"],["/Swift初始化模式/index.html","ad8ca1f600d356a5134b95b78e70f8d7"],["/Swift单例模式/index.html","eba40a3583cd3555f89a26dbb563d1f5"],["/Swift原型设计模式/index.html","3410947c39c7f8f55cd7b418706a653d"],["/Swift命令设计模式/index.html","78ccf9ee7b00fcc8189af136ccd2b664"],["/Swift外观设计模式/index.html","abcdacc8dfc6e0d1ad575cdd0c2a7ba7"],["/Swift委托设计模式/index.html","dc326b82262ab3e9516ab1a6e0348f3f"],["/Swift对象池设计模式/index.html","b34ccbf08d8dfe6b25a58d795955f86a"],["/Swift工厂方法设计模式/index.html","a95dd69af965c20aa176b81178f96b85"],["/Swift带闭包的懒惰初始化/index.html","e96f7c848167b0b1a7449803b3ece062"],["/Swift抽象工厂设计模式/index.html","7c3fb70b262bfa378eaea34568d27f7d"],["/Swift掌握iOS自动布局锚点/index.html","af9096fc57a880838b5a0bb2defcd025"],["/Swift支持旋转的自适应单元格/index.html","abb69fbf1e94c5c385b530e43506e41c"],["/Swift枚举值/index.html","0216d506ddcb2f8f5ae8d13f6e3326f5"],["/Swift生成器模式/index.html","40be5128a2b40315fd4fdba9b353ec4d"],["/Swift结合Xib文件自定义UIView/index.html","69eeeaaeb1e2cd5e202c52a8e1b5056a"],["/Swift编写的20个iOS库(一)/index.html","6bf0661d91cdfa27609952d902e71fa6"],["/Swift迭代器设计模式/index.html","8896c783aea9e5639835f71efdb0ac9a"],["/Swift适配器设计模式/index.html","7537f440c81e402549cb3ddc1d208ee9"],["/Swift静态工厂设计模式/index.html","61e67843460ec913960872fb5d601011"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c4346e1e457d63c348bb32fcecb5f458"],["/UICollectionView data source and delegates/index.html","a80d3fe873793e54ec4b6e9c243c0b64"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","05a6f7d3e1295705585c16e86ae68b77"],["/UIKit初始化模式/index.html","241f3f6c8431b527cf63f38e372929c6"],["/Ubuntu18.04替换国内源/index.html","8e04a6fb43afb9c78fb0e11422a1acfb"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","3ec6f71ab151c7f5a520842d4f79a50d"],["/Vapor系列 (一) :  Vapor 初探/index.html","60f5efa1388d617c7d283be8cf2304fa"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","bb6b95ceee7c908f50b227cf5c7176e5"],["/Vapor系列 (二) :  Hello Vapor！/index.html","4e4af9528358180c85349b351e194df9"],["/Vapor系列 (五) :  使用session进行authentication/index.html","161f717ff3ceae1d3542986ec0ff1012"],["/Vapor系列 (四) :  创建博客数据库/index.html","92fe64b2f56ab50de317b11473748e09"],["/Vapor系列(六): 徒手撸一个CMS/index.html","0ed73a00dc0db584292345cb8783ccc3"],["/Xcode扩展/index.html","aabd1dcab9e5233bcd8b373927fdfe01"],["/about/index.html","521ffa501e16c19763eac28813ff795f"],["/appleOS的Networking示例/index.html","9484824dd597daa872354e5886aeed2e"],["/archives/2020/03/index.html","3f50185d9642f0dd113e34ea097b640e"],["/archives/2020/04/index.html","cd32d74210b8957ef8dd20c5ead76a8d"],["/archives/2020/04/page/2/index.html","32bb16e92a3616f5eb1051f98f9a7a76"],["/archives/2020/04/page/3/index.html","b388c125055fde1aebe64ca0a88e6666"],["/archives/2020/04/page/4/index.html","b0441b8df2e0824c21836252e925bb5f"],["/archives/2020/04/page/5/index.html","a522109682a37d484b2a74bd19cd7b45"],["/archives/2020/04/page/6/index.html","c52bea5c8c9d822e2bcdbe1622df0075"],["/archives/2020/04/page/7/index.html","6c123f7d673b6ef2b092670a9d43731e"],["/archives/2020/04/page/8/index.html","b990ece6a157043201dfc1c8a2ada0cf"],["/archives/2020/05/index.html","5a76833b4dec566f318553e70337d677"],["/archives/2020/05/page/2/index.html","4dea45091a8f282456da321860d2fcf4"],["/archives/2020/05/page/3/index.html","74d4a5c02cac12f56ae9c25468ecabdb"],["/archives/2020/05/page/4/index.html","43240e67542ab831d807a8728d8f162e"],["/archives/2020/05/page/5/index.html","4bfc7eddc1fdc4073cae41de7ec8fb4f"],["/archives/2020/06/index.html","c800fc60c1c039086600d1c74ea40f54"],["/archives/2020/06/page/2/index.html","cf81036b4c7a872eb6ad7b67286130b6"],["/archives/2020/08/index.html","9681410222eb93cb4c5c587b7f6e288e"],["/archives/2020/09/index.html","f63de296dad3a699d6e070596fa38b07"],["/archives/2020/10/index.html","c276ee0bf875a3c363eb80870507a645"],["/archives/2020/11/index.html","c7e0d892ee01516ad6c3c1b8c2f11cc6"],["/archives/2020/12/index.html","6bff498d1f9217fbec51d20376c7adb6"],["/archives/2020/index.html","2164c55e1901e2a8f5319ceb74b6d500"],["/archives/2020/page/10/index.html","9db7a60858c4ec102877dbf3d1eabae7"],["/archives/2020/page/11/index.html","f22dc4b9ae809cf974a91d770eb0bddf"],["/archives/2020/page/12/index.html","1d322fe7769deaf4ca546acd4ae054a6"],["/archives/2020/page/13/index.html","179e27d2ea8e6e9266d3d97d896df2b8"],["/archives/2020/page/14/index.html","5e20ca021e0293055b02e6b44b53174a"],["/archives/2020/page/15/index.html","c387a53399aad92dd67ae215401655a2"],["/archives/2020/page/2/index.html","c9c4e0c35a218a2105310c9ea6423670"],["/archives/2020/page/3/index.html","ccea834ab0d551cdeb60d06258db7850"],["/archives/2020/page/4/index.html","83e2d3143db50af85bd75ebc2443dc30"],["/archives/2020/page/5/index.html","282b4911f194266900f5328089e6cd07"],["/archives/2020/page/6/index.html","f23c39774202661d3b1826874fe1a173"],["/archives/2020/page/7/index.html","2944684c5f7a407c3152bacb74568b86"],["/archives/2020/page/8/index.html","77d769330b988b4aa3af51a27f10c6fc"],["/archives/2020/page/9/index.html","ccedb2dbcc103932364273d9c471c462"],["/archives/index.html","38cc295c96785ed61efaa654900cb333"],["/archives/page/10/index.html","08be151f831fb872771f4053d11b1df2"],["/archives/page/11/index.html","0b25c9a96950ee4ce5638034ce94658d"],["/archives/page/12/index.html","6a7f67d30ff60ff4359f26b87f70ae34"],["/archives/page/13/index.html","372b928dc89a89a0d8cbe54821667c3b"],["/archives/page/14/index.html","19398446f959af70f056c1d017f0b945"],["/archives/page/15/index.html","2d72c475643cafdde30733170aab6b53"],["/archives/page/2/index.html","c34c2e642eba832663a4ab8ea847879c"],["/archives/page/3/index.html","5925942985fc82cfc9a3105733a290d3"],["/archives/page/4/index.html","e9ed3418271c4bef5878af0b7223aeb2"],["/archives/page/5/index.html","0146e5836a84479341a2540963a0b624"],["/archives/page/6/index.html","c7e32c3bd9b526b05fd7dfc3104dc398"],["/archives/page/7/index.html","a4d3a0a606b0b5e2ab5398edc3ef26e5"],["/archives/page/8/index.html","edb3ad9a6c0f39bb3e9291de5685ad0f"],["/archives/page/9/index.html","5d0c33297959f40eec1d986044c68c6a"],["/bugly 上传dYSM文件小记/index.html","6e96f6a579d84ca641de53951572d8c0"],["/categories/Advanced-Swift/index.html","213d7abd88737ceb74bc3f9e58dd51e6"],["/categories/Advanced-Swift/page/2/index.html","fef18f7b9d15c0f63ccdf2fd14975aaf"],["/categories/App-Architecture/index.html","314a3d2222f78ad6dc627b20b153a9e2"],["/categories/Array/index.html","8caa576937dc05f23498a32eb3ea4d3b"],["/categories/Codable-protocol/index.html","55d587ff4f5d4ac74f46718838bdc5bf"],["/categories/Combine-framework/index.html","bf5c5e2689200807ac751a8599f16ba7"],["/categories/Combine/index.html","a7e008f67941da74ef47c1a665c88442"],["/categories/Go/index.html","0c3629aaa3814f3a14b7d39c54cb6d73"],["/categories/Grand-Central-Dispatch/index.html","64be7abadc9b69b6ae4b75866ea030ea"],["/categories/Hexo/index.html","f40ceaae837a497f9c0540b663aac70c"],["/categories/Homebrew/index.html","5ffb76e3492ab7bd0bbd5a56ab469fc6"],["/categories/Promises/index.html","67a3390c353e4b4c9264fc4e6f3dc227"],["/categories/Result-Type/index.html","b4931f329821133659a77e43b1abe4f6"],["/categories/RxSwift/index.html","1a6ba522878dbf03255d04b1c8685861"],["/categories/Server/index.html","575b03b0331198e629cce8feac2c4029"],["/categories/Swift-Apprentice/index.html","831fe4a2b568f46a96c9659fc04e95b9"],["/categories/Swift-Apprentice/page/2/index.html","9f05babe0c61a136ecacdb3666e34c23"],["/categories/Swift-Apprentice/page/3/index.html","1f10469318544ffa25df9d990b855d54"],["/categories/Swift-源码阅读/index.html","c2069a8601494db14967a306dd2e7c8a"],["/categories/Swift/index.html","2852bf84bcc84a013b2a2c57d7452305"],["/categories/Swift/page/10/index.html","a207da8753266d504bdef9e80281ae44"],["/categories/Swift/page/11/index.html","3c88d50fbbfc5717d9c6052c2f2c5585"],["/categories/Swift/page/12/index.html","2788002e817a2e92993b6a3209945b88"],["/categories/Swift/page/13/index.html","8543190060ccf9220dee47195a0c8404"],["/categories/Swift/page/2/index.html","145d43022177e2cf9cc6fb2d63ff7bbb"],["/categories/Swift/page/3/index.html","ac488e8ba903f096e412cdbc1af67a19"],["/categories/Swift/page/4/index.html","ea59ade68cee0b52ba1dc770fc0d9df3"],["/categories/Swift/page/5/index.html","220b5c592071463f222d70da93e9a694"],["/categories/Swift/page/6/index.html","07e841d1c84d40e80688ff050620bc9f"],["/categories/Swift/page/7/index.html","38eed52c6dced1dcdb8c3730e7642de0"],["/categories/Swift/page/8/index.html","1546c3795c45837c2ce627ee3178face"],["/categories/Swift/page/9/index.html","1793f6604a923511e67b2f63d05237d5"],["/categories/Swift5-2/index.html","6e6b22ddce858a60b1e3e17dab0a5a8b"],["/categories/SwiftLint/index.html","a560e9959a13683f6f0e3b1816a0e5e3"],["/categories/SwiftUI/index.html","aaaee95e9b5852eb80deea529f6ee570"],["/categories/UICollectionView/index.html","48083150d41c2947c859851ccb7db015"],["/categories/UIImagePickerController/index.html","94367c5bf1c8b803d3aba07972340c43"],["/categories/UIKit/index.html","0e95a39551aa9695372ebc3efdd71921"],["/categories/UIKit/page/2/index.html","cc5d5788e9296eb95c40956c8a9516e9"],["/categories/UIKit/page/3/index.html","0a733a9d7c0655623db8bbffaa7b7341"],["/categories/UIKit/page/4/index.html","56deaa32bb277bb98772e5c88d3f9e49"],["/categories/UIKit/page/5/index.html","8cca3f9892e747b79617592523c30602"],["/categories/UITableView/index.html","fb386fa3b88e03864473985f11d9c72d"],["/categories/Ubuntu18-04/index.html","54056db0581c6d6dc3cbd5560f765023"],["/categories/Ubuntu软件源/index.html","d6604281d97fe233316916da1a3d1e68"],["/categories/Uniquely-identifying-views/index.html","f6384076ce22f1fd78c7b0f6c6794453"],["/categories/VIPER/index.html","04f79a2cec43d862d6b09a88111f9914"],["/categories/Vapor-4-0/index.html","e542343250dc1d52fb1b61e8811aede2"],["/categories/Vapor4-0/index.html","866507cc19a6980033ddc90ff4e9a410"],["/categories/Xcode/index.html","6a9b9aa303c9880d77c0dcad32eca14c"],["/categories/appleOS-Networking/index.html","1280a5bce5534e967d32181a904377de"],["/categories/bugly/index.html","8ea00ffc8ea8f080c9a737d43fe20ba9"],["/categories/enum/index.html","329aa4ca2fd5bf7cc83b3a17ff62290a"],["/categories/git/index.html","22f79f88a0e0a90074caea477955906b"],["/categories/iCloud/index.html","df0a60f0b83df11c0a18d4dcc7360c9c"],["/categories/iOS/index.html","1a60bbf1127e8f5f13e5aef9252446f3"],["/categories/iOS/page/10/index.html","ebdf53c2d99bdd9e7749ee147287a82a"],["/categories/iOS/page/11/index.html","f1d41489f60bd6fa1750cb5632fb9735"],["/categories/iOS/page/12/index.html","2a7ddfbcdadcd4d5a3ca8333743ca1b8"],["/categories/iOS/page/13/index.html","b133176acf9794ab30cbb78b0f05401e"],["/categories/iOS/page/2/index.html","e006ffeb9fc968ee0ad941d20430d7e5"],["/categories/iOS/page/3/index.html","0a05ff5c254048631e1d5806f0b3f5ae"],["/categories/iOS/page/4/index.html","e182aed7cce11a50da52af740515564e"],["/categories/iOS/page/5/index.html","c4bf4cb379e0a41fa27a9e15a9fad556"],["/categories/iOS/page/6/index.html","0fb5c0ee14f3d8f34465080ace69a529"],["/categories/iOS/page/7/index.html","425c8b28442f19ec1df014fbd63759d1"],["/categories/iOS/page/8/index.html","3b9df6b40a8069783fd2800cea51eb1d"],["/categories/iOS/page/9/index.html","c43da3ad541ae50331c8294a8d7a5473"],["/categories/iOS面试题/index.html","abe80dc33a9e5a7bcc92821bd046ab21"],["/categories/index.html","99db9fd94d2fcfc4d0e48923b4835871"],["/categories/random/index.html","0486189ec936882f1dba682a7c33389e"],["/categories/三方类库/index.html","b78c06c8997840c02eef528dfb91e0ac"],["/categories/函数式编程/index.html","fc60c76245c687a9a03eda2cb47fc173"],["/categories/子类化样式/index.html","d5580eb8362ac422e346353e5f44257d"],["/categories/开发记录/index.html","5548ffbb1b65e7300e230215a4bc70dc"],["/categories/技术支持/index.html","7cd56a5ad062fe5a0bc53d19b574e5c1"],["/categories/架构设计/index.html","b60e7f7d0db565934b0d4a8d73138440"],["/categories/测试/index.html","52f59d8a5215feb380be0d9fd3eb6cba"],["/categories/用户体验/index.html","1d955184b8a27ff72d03c4cc674a8ca2"],["/categories/用户协议与隐私政策/index.html","8616efa81e2eb57fa1b92cf148c6f6c1"],["/categories/设计模式/index.html","80326858f9ed8529cf7b1be2a2a5cef0"],["/categories/设计模式/page/2/index.html","3e6e71346b89ad0a27635322c0eed229"],["/categories/设计模式/page/3/index.html","d6acb71885de317edd88444230768885"],["/css/main.css","9a5e1fb4414cafb732d12c67a4cf5426"],["/hello-world/index.html","49fe2050d7291a7c63a22b81861d530b"],["/iOS VIPER架构深入实践/index.html","3ade8ac91fe224a98086b90376fc5317"],["/iOS 自定义视图，输入表单和错误提示/index.html","af902e89686071acd0fb298d7ce80858"],["/iOS如何使用iCloud文档？/index.html","1b061a8860ec37590ddb04440e1f3ea3"],["/iOS子类化样式/index.html","b21bea24be355d96b682b759cd0edc7a"],["/iOS开发记录<一>/index.html","006cd944a80fbe6e328eb5712edc9e8e"],["/iOS自动化布局编程/index.html","a7395907ab88fd7c52b3cb006f4ea46e"],["/iOS自定义转场(By Swift)/index.html","d10d08a3484bc5bee36226f0eb939960"],["/iOS项目架构：使用VIPER/index.html","7a40b1db26cf61d39abbf4d0454c887b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","7ed4a1689e3e27cf1550b4ad235c54ec"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","83caf59363e6218d7f48e527773d134d"],["/page/10/index.html","f05bb4717a2cf368f90efe977f586ddc"],["/page/11/index.html","b6cffb72cdef22e77ff211c1d49f595c"],["/page/12/index.html","21b45582e2702f8b3e493e78f20058f0"],["/page/13/index.html","fc3aac22f37e4b28b9b5786880373415"],["/page/14/index.html","69a60c175f1001eb5b4decf367005f6b"],["/page/15/index.html","fb97e0dca028943c9fb014508f58bf3d"],["/page/2/index.html","3ef3da0f0bfdfc42541b28cb0e4801a2"],["/page/3/index.html","44a8e6b9b7e218e28ce28c4cd46f80ab"],["/page/4/index.html","5947096b72a03325dc8f589e92b9d80a"],["/page/5/index.html","7c4b7373c49389201ceeeec6f63ff23f"],["/page/6/index.html","fd240c615ed7fe91b280293db88712f1"],["/page/7/index.html","1132e58adb3247b5d53b47399352f992"],["/page/8/index.html","7ca225c1be2a47c2ff5cee0a7314a4bc"],["/page/9/index.html","e3cf680f79a17c3a3b5595d6ef04d8e5"],["/schedule/index.html","4e3ac53a80c1ab41b1a8715a20e372ea"],["/storyAppPrivacy/index.html","3e065204a278af0eac32eff642a9431c"],["/sw-register.js","f9a0358e3e1ef22f82ad21b2d458357d"],["/tags/Advanced-Classes/index.html","24fd5b144ab885cc3bda45af789648da"],["/tags/Advanced-Swift/index.html","998d001b086e0fbb54a58e086032dcef"],["/tags/Advanced-Swift/page/2/index.html","53812f8c546df7757b7b03199b5d4ee1"],["/tags/App-Architecture/index.html","7c2c74ada7d3742d43e3410ded18c6d0"],["/tags/Array/index.html","6541cdbd9339f8edf1e6527d83d27d17"],["/tags/Arrays-Dictionaries-Sets/index.html","55087cfa7bc084f2db29bf11c8f83000"],["/tags/Authentication/index.html","be40eb041dea4372798df484bed95032"],["/tags/Build-in-Collections/index.html","6ba3508da4f422506d332933a73014d5"],["/tags/Building-Your-Own-Types/index.html","31bec5acec23fcac95a47563c32157f4"],["/tags/CMS/index.html","509ab063232ee6998523e25187e48ce5"],["/tags/Classes/index.html","7120293a8ddc82f0b77a5bfd040f7bb5"],["/tags/Codable-protocol/index.html","8d4efbbcb8ab3b12910b338804001611"],["/tags/Collection-Iteration-with-Closures/index.html","97ba1ff006eacd974848ade7cdf7b342"],["/tags/Collection-Protocols/index.html","2067c46227b43bf2ab75d666279fec1e"],["/tags/Collection-Types/index.html","78e4b9aecf3461dfe0047e2a28166572"],["/tags/Collection/index.html","246459817a8215035c7678178e8a6ea1"],["/tags/Collections/index.html","5ce50c595182cc4fa9219e44d1defdfe"],["/tags/Combine-framework/index.html","472af74d69597a892f5eb50ebd1ac5d7"],["/tags/Combine/index.html","dbea390bce80204de68c662e212d7d6f"],["/tags/Dependency-Injection/index.html","215658848af5ef0d6223dd2c5c366102"],["/tags/Encoding-Decoding-Types/index.html","cc4ecb13995c30af15c479412b74d2bc"],["/tags/Encoding-and-Decoding/index.html","2225daa3bd8e1b0dd9c14b81ea82ea30"],["/tags/Enumerations/index.html","b12e4e0e7845addedce804ae1d328bdc"],["/tags/Enums/index.html","88ce71a746cab51e5824b8169a9a915b"],["/tags/Error-Handling/index.html","66e573fe523581e0c07de30feb65465f"],["/tags/Functions/index.html","cdc2f380a233987acc6825c15276c76b"],["/tags/Generics/index.html","57fd88e467646e59639666a29fd38ed0"],["/tags/Go/index.html","ed037ca0571cf92310dd6608e9588594"],["/tags/Grand-Central-Dispatch/index.html","a2666252389142dc471c92d53314c99c"],["/tags/Hello-Vapor/index.html","e172c45ba91e6483463538ab17c9a6db"],["/tags/Homebrew/index.html","20c50bbc01d05649419b64df793e2066"],["/tags/Interoperability/index.html","9348fc76187393eaf1a30ec0c217f46a"],["/tags/Introduction/index.html","6abfc4054da518017f7d44b9043fe20b"],["/tags/Leaf/index.html","24eab182da5d6810b314c96b2edbef3b"],["/tags/Methods/index.html","e0b9dc08cca4e298fea0917962e629ff"],["/tags/Modules-And-Hooks/index.html","3a3c0dcf9a8b9b868dbd51ae8e4ac487"],["/tags/Optionals/index.html","c59a460dbfcf565ec2e0b7bad1ab20b6"],["/tags/Promises/index.html","a71995bfc6c001f2feac76a6c08e7fe5"],["/tags/Properties/index.html","77c208a49f7f6b13584a2c17e7fb59a9"],["/tags/Protocols/index.html","6e0c1a0847953d922a55ff5d3bb8ad7f"],["/tags/Result-Type/index.html","01090aa7a505a283ea11e37e954f469a"],["/tags/RxSwift/index.html","5b7639f716fa204d498f4b7ec182bfb1"],["/tags/Server/index.html","58590af20a8acef80ba4099c727d25f0"],["/tags/Session/index.html","c40de73e019ebd29886a7689f32a9b40"],["/tags/Strings/index.html","8054c526691b40443abc2e3b2e4c2424"],["/tags/Structs-and-Classes/index.html","298c07b35826f54548851ceef902cd27"],["/tags/Structures/index.html","eed3942d277d97eb57ff80c25744b41f"],["/tags/Swift-5-0/index.html","226ef12b2fe4b7d9b44f73b5f5e34191"],["/tags/Swift-5-0/page/2/index.html","2d152a2c7c79aefb8ac5807bd2d71534"],["/tags/Swift-5-0/page/3/index.html","222998ac0f5a12491fea26c35b7b2822"],["/tags/Swift-5-0/page/4/index.html","d651e6e8dfe561bf29246b667c9c07e6"],["/tags/Swift-5-0/page/5/index.html","d094a3a8d292f656e8646ccc04d5ca53"],["/tags/Swift-Apprentice/index.html","8c522b81348af6be58c04c24b7eec9c5"],["/tags/Swift-Apprentice/page/2/index.html","89d5cd94d33a3df20ca6a5b5049597a3"],["/tags/Swift-Apprentice/page/3/index.html","027aded711c95b3f0e747f784fc12f83"],["/tags/Swift-Package-Manager/index.html","33c131df1f4b9e395b0b85a8d7f2126d"],["/tags/Swift-源码阅读/index.html","1fd229d9448a8b9a75ae64ab330d0d84"],["/tags/Swift/index.html","4dcec3fb842bc14ab45be5b7b07ea50b"],["/tags/Swift/page/10/index.html","6b062b1fca549c77828613dccf68a229"],["/tags/Swift/page/11/index.html","7a9d388bad80f25d8649a2a41ee4f8d2"],["/tags/Swift/page/12/index.html","6454654a13dc8aea0d08832289f4ffaf"],["/tags/Swift/page/13/index.html","cc8f81a83989828a75477413d75d9a6b"],["/tags/Swift/page/2/index.html","778c198b0108e95acdae4e7148e1b24a"],["/tags/Swift/page/3/index.html","bb077120347dfc3ffbe3136cde797ba0"],["/tags/Swift/page/4/index.html","c6e79da7e4f97a2b8de2f1a7ab41bd53"],["/tags/Swift/page/5/index.html","6d2561719aa010f4b2026f9746964d32"],["/tags/Swift/page/6/index.html","530bf266ab1ec5289f35f7af74b78ed0"],["/tags/Swift/page/7/index.html","b7b8675ff7e028436d99961daa4a5bd5"],["/tags/Swift/page/8/index.html","1e40fbad0b1fa0eaa7a857a9d4f2c6b2"],["/tags/Swift/page/9/index.html","6e91f37f1bf5201ba2e96d6a2e6be060"],["/tags/SwiftLint/index.html","eb068c3e98b8d66489ff269dd4d4b017"],["/tags/SwiftUI/index.html","51d216a70e0850fd378f5e5853d4a501"],["/tags/UICollectionView/index.html","f2288fa99210c4bd28cb90a8d02f9ea6"],["/tags/UIColor/index.html","d5ec56e51fe388b3bacc75a24554f9e4"],["/tags/UIImagePickerController/index.html","de6962b6fd93451238b24b4d820ebb40"],["/tags/UIKit/index.html","9c63d1d40db8ce949f5d794b29adfc70"],["/tags/UIKit/page/2/index.html","fa31f12684cae959dc0079e3687e8c0c"],["/tags/UIKit/page/3/index.html","8db0aaad24a075fc886f99e8745cbae6"],["/tags/UIKit/page/4/index.html","b5c3d157cf5a2de6e728601ea226088b"],["/tags/UIKit/page/5/index.html","8eccca406235dcb63657b3736ac068a9"],["/tags/UITableView/index.html","f89c16f7231386d76eae39b4ab616408"],["/tags/Ubuntu/index.html","5e7b0507f3df2f1d9908d36757368843"],["/tags/Uniquely-identifying-views/index.html","4e13e827ebfd5b97812daa9984308e80"],["/tags/VIPER/index.html","a4aea430fd587e91c680866ff820bb55"],["/tags/VMware/index.html","36515dd7716876a650186e36941a5c33"],["/tags/Vapor-4-0/index.html","3cd79b28a07daff9e8630f97baca8d72"],["/tags/Vapor-初探/index.html","41224b4f89c08cb8529a236b7277d8de"],["/tags/Xcode/index.html","5212ed927c7c89ed5ee1751a1a24da74"],["/tags/appleOS-Networking/index.html","343260c5e66b10a7ce30541355bfd76a"],["/tags/bugly/index.html","185a838f3d2474f3b3cd1da1fc33a895"],["/tags/enum/index.html","8d29543720ae71b8fedee4d3b4677f95"],["/tags/git/index.html","1d9c516a0b658a04e1a96e8432508c7d"],["/tags/iCloud/index.html","c9ee0f9f67761b4d539bc4c222f19f66"],["/tags/iOS/index.html","3481579772b97b47e34f5ddbff7094b8"],["/tags/iOS/page/10/index.html","8136d4a0cbd9052467bdf09681f1d834"],["/tags/iOS/page/11/index.html","78b5f8dbee3264570d55f5a45e201840"],["/tags/iOS/page/12/index.html","6b179509a1b1b41a2c420edb407467de"],["/tags/iOS/page/13/index.html","fc5c6348aba778e70deb01d639c6907b"],["/tags/iOS/page/2/index.html","901bc2bb3f3b3aac71227ea8ca68a632"],["/tags/iOS/page/3/index.html","bc61be22d2220ca53d2ed51cdb89ac14"],["/tags/iOS/page/4/index.html","7322fd7de1e9bd5913feac0372bc6da5"],["/tags/iOS/page/5/index.html","414c8aeb3873007f8f55ceaf7f95f64d"],["/tags/iOS/page/6/index.html","718578988fedc8bd02e2b5d8e2ebf59a"],["/tags/iOS/page/7/index.html","7287455a54e832bbc64c719ca7f9c500"],["/tags/iOS/page/8/index.html","e71866c20b975e1cc90f34a2a649c278"],["/tags/iOS/page/9/index.html","9d67f81f60827371ff745920812269d4"],["/tags/iOS面试题/index.html","d6751b4dace50779cfa7767a7d8ccf80"],["/tags/index.html","1adec92ab02b9ca02f7d708200d23fec"],["/tags/non-optional/index.html","7ab26fd04e35aa6c5fbf87d7a0a2c52e"],["/tags/random/index.html","e3617feb308c1535230ea4f95e4288e2"],["/tags/transition/index.html","25f784b71190ddea6c924c2528b6e50b"],["/tags/三方类库/index.html","c77eb523533503e4d51d935d440e0470"],["/tags/依赖注入设计模式/index.html","5a8794d9ef1dc86c721f96dde705a5a4"],["/tags/值类型和值语义/index.html","e265f58b9912fad4ccf001c2a53f9bb6"],["/tags/内存管理/index.html","5d6176aa2796fc9118980f0cd028a034"],["/tags/冒烟测试与回归测试/index.html","cd3be26b99276d4b272f46b62d63e808"],["/tags/函数式编程/index.html","b677ff850e4e83ff6024124293fde609"],["/tags/创建博客数据库/index.html","0083b2f9673b626e35867b1b5d35ab85"],["/tags/初始化模式/index.html","d5d010a3961a9ac82c12c8ba417d7302"],["/tags/单例模式/index.html","11a24ed4e60c1eedd7a9ca4f7478fbf7"],["/tags/原型设计模式/index.html","d74592b687bd946b2d262cf9464ee4ac"],["/tags/命令设计模式/index.html","02c1f41348c60f2a5c8b5b6eb4b27689"],["/tags/基本控制流/index.html","628960c7ccf1ea913e7fb6204575b457"],["/tags/外观设计模式/index.html","877478f76831bacf00b464298f474f44"],["/tags/委托设计模式/index.html","ccb7b5c26b326d94632ad0390845385f"],["/tags/子类化样式/index.html","f7eee26ed84ad5e8d29ab25686c2703d"],["/tags/对象池设计模式/index.html","c188b3483e87f9ad8927c9956b3d3a58"],["/tags/工厂方法设计模式/index.html","0899ef0a82001c795d85bc5c93498260"],["/tags/工厂模式/index.html","fe584960450b1c1e57ee35153373df9c"],["/tags/工厂设计模式/index.html","ec347cbc71507601e7a6263192bddae5"],["/tags/开发记录/index.html","70e7b756021c5ff993701bc4030fe125"],["/tags/懒加载模式/index.html","eeb8f4dd7fdf69a099a8174348dc79f4"],["/tags/技术支持/index.html","800f8247f70f96aa049e61e03be7f2d5"],["/tags/抽象工厂设计模式/index.html","bde2036bcb6886147cfd9bb442d8962d"],["/tags/构造函数/index.html","d837c71384b6218332d7dc2287d53913"],["/tags/架构设计/index.html","c46efba48d27beda1fdd8206d92d535b"],["/tags/模式匹配/index.html","7b14391d0fa87f8306fbf7e244491ea4"],["/tags/生成器模式/index.html","83faaffa34df0cf1be72b1d3ab1944bc"],["/tags/用户体验/index.html","5ea3e23ca443a8509352597ac9ef832b"],["/tags/用户协议与隐私政策/index.html","d7ddae274e0bf2548b1168e24ab390d2"],["/tags/类型与操作/index.html","d9cd71c3c760bb9e2f5b1a49e2bb7c73"],["/tags/自动化布局/index.html","75646b07298e944c9dca3aba7fed7f3f"],["/tags/自定义UIView/index.html","9bff1fcf14391174289d07ef0b85b308"],["/tags/自定义转场/index.html","e79ab4491ea9b54f084e7e1cbfd6d6f9"],["/tags/自适应布局/index.html","37d170ee555213d95faf59c20a463e6e"],["/tags/表达式、变量和常量/index.html","746d2b7e1ef01a6ce5101bc21e54db23"],["/tags/设计模式/index.html","8aaf28435f834f4ba8792b0c0d79596c"],["/tags/设计模式/page/2/index.html","888f3e525b643a8824b77e87d9a9de0a"],["/tags/设计模式/page/3/index.html","528ae36f04e69aef517b5484badcecf7"],["/tags/访问控制和代码组织/index.html","3abea3250771f6a6330684cf062cc162"],["/tags/运算符，下标和键路径/index.html","b240bd60461bd6ffdbce04fc4adbce57"],["/tags/迭代器设计模式/index.html","3d91249a37f18ababda47439521bd8ba"],["/tags/适配器设计模式/index.html","2594c2088dab208dc7e1a274ddd9d4a3"],["/tags/错误处理/index.html","ddc35a2bfb53ea5787a360550468108d"],["/tags/静态工厂方法/index.html","5680672446020c76082ea51991677077"],["/tags/面向协议编程-OOP/index.html","3c488cdce1830df719f92e9648f43153"],["/tags/高级主题/index.html","a24cbfda820c808a270b1c88eb9a7e68"],["/tags/高级协议和泛型/index.html","8c22626344631755c1fdfd4122893202"],["/tags/高级控制流/index.html","71fcd24c39637226ac006fa2c38f51dc"],["/为iOS应用构建输入表单/index.html","4bfbcb2c07e153f81693290ab119ac15"],["/产品开发的幕后花絮/index.html","42be642a1fdc0d381d55ec17ea7ec839"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","afc526e4e9e3a686462c9fb56da2353c"],["/冒烟测试与回归测试/index.html","a9361b72337021f928ba32c54567dad8"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","246aead6f40f051ab1acaf07f694ccb8"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","40fc3c49bd4f7d452424d5c042c23298"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0557e6bb9b57db7e75c20f08def040e8"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","372fb47b3864097abd990c5ff2155c6f"],["/在Swift中创建自定义集合/index.html","52dd3f2fc47a4f6fc95c83f2e4436031"],["/在Swift中处理非可选选项/index.html","3f3c1e91d304c14f6c9fc7edb6aab455"],["/在Swift中生成随机数/index.html","22c4a4692ad5c06368c93592e64d3b2b"],["/在Swift中重构单例模式用法/index.html","000ca418e013e004f13ae3221d002542"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","ae977b9cbfc3a1c585cd78f336445c65"],["/如何为VIPER编写服务？/index.html","44cc315bee7a28659c6423eda14bddb7"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a9abfb0025d1f26ccd664e0a2ea2687b"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","624e1f3ab19902e411b48968f2825832"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5dda686fc802720920db76e3078c76f9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","c9944fffbe0e682296935a21caf93b4c"],["/掌握VIPER架构/index.html","6268abf8de544bda5c0cf88c3c24d0c9"],["/揭秘 WordPress Hook 系统/index.html","d0162684ca22d6e302d5b2e6c336e7ff"],["/比较工厂设计模式/index.html","5ca115fa9e5d11b257b3e73d40317887"],["/深入了解Swift中的Grand Central Dispatch/index.html","de4c7a166a78bf5537671948750e31d7"],["/深入研究Swift框架/index.html","cea38ea44c9007861a3a254962ed9b54"],["/美豫直聘技术支持/index.html","463e6d20923cc7a6472ca7e16907ca25"],["/美豫直聘用户协议与隐私政策/index.html","2e0d06ee29b93bff50a6de0a04e8f6ec"],["/适用于iOS开发人员的VIPER最佳实践/index.html","894d72523b0eca1f3c37674c77d62790"],["/选择Swift而不是Objective-C的5个理由/index.html","f3b8ae1b04e1ce654f993fbe48fe7d72"]];
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
