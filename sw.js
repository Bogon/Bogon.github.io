/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","9d6569ccf27bb120e63f83ebd023641e"],["/2020年iOS面试题总结(三)/index.html","a8333206e6380a5a12840e5aafa2f594"],["/2020年iOS面试题总结(二)/index.html","df2706aa9e386a9c2e65ece2885a5310"],["/Advanced Swift系列(一): Swift 简介/index.html","46885f84276261273da5fe6e06f3bba2"],["/Advanced Swift系列(七): Strings/index.html","3d49604ca170ad75020565419c9b5aef"],["/Advanced Swift系列(三):  Optionals/index.html","0d7c597b5e40d879d27367890161ceb9"],["/Advanced Swift系列(九): Protocols/index.html","3887707143958fa5726334c6a6d10081"],["/Advanced Swift系列(二): Build-in Collections/index.html","fb47669db4c22b6c89fe3f179b7a52c2"],["/Advanced Swift系列(五): Structs and Classes/index.html","506c0ed0e7bf1130a360b2de176ae994"],["/Advanced Swift系列(八): Generics/index.html","36456d8361e52f2e50a0f5bd9e9e04eb"],["/Advanced Swift系列(六):  Enums/index.html","59922eacd40d0410120d6b12e09bcb02"],["/Advanced Swift系列(十): Collection Protocols/index.html","364472a84341f673f02817f33b60b6f1"],["/Advanced Swift系列(十一): Error Handling/index.html","b96e3f485e8f354d4b671bee561458b6"],["/Advanced Swift系列(十三): Interoperability/index.html","4b942d15d672464abbf4c4fc2758f29d"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a4f7c890fbf378bf7f086342938c1863"],["/Advanced Swift系列(四):  Functions/index.html","809ceb40407d34f24e010b374659bb6e"],["/App Architecture系列(一):  简介/index.html","57d0aaed1be8d38e4583813db4d66665"],["/Functional Swift 初探/index.html","e176bc26f1c0c873b96cc4e74d61bfa2"],["/NSCODER和SWIFT初始化/index.html","936d63c6a6749d6a16911ad1ee24f699"],["/Swift 5使用UIImagePickerController拾取图像/index.html","6b4e7af45acccbe4e7aa65f836f55c85"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","77f38c85baab8d9e6daeea9f01742fb4"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","932baa7047bc7e03e6d5385a900f833f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","4ea6d12b77c3e4efbf22c05eaed7e5c5"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","b98dc36e58a19cfb13d0ce671022e9e5"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","872e91f9b8637e1c10721ed17a4536ba"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1b5fe89f0ad50105e67d236c595437a8"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","ab1e71f49c5472c9bc7f7a363e4a0fb3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","c580a1cd6690340844b1c4e1cefaa754"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","2ed915f56f9cc715302f73f5a7c0d688"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","9de95c6bd5355fb9e119f22ad72a187b"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","95e2ce9c9711321f019e67d380458e2c"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","2db460b7ddeb749ed77293c7d0c398ac"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","75503e2510b8209adb66ccda34fae115"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","588a0e887a35efc11b62c09b907ead08"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","9f623ded22f04ddce7d868a03814e082"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","51aa8cc6f148df5da7449fc61a634ff6"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","ac604eed70551760c17ad3c01e2eee2e"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","889c47560d83e263afbf61a1a228fd13"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","0ff61f4370e31a0d9f5c1a67b9800583"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","bec50e97405f6372a57a1b422ecb17e5"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","8cee11d88925ee01bd061516daa3e5c4"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","7cfa63cdb2acd065b0d419ed5298b1dc"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","86220ca2925e89eb5614a090a4b67b84"],["/Swift CompactMap vs flatMap：差异说明/index.html","5edd7017000dc2e5041f9c71aa9d8ce1"],["/Swift Grand Central Dispatch 深入实践/index.html","98ce627a09608325416d04346deeb28d"],["/Swift Lazy属性初始化/index.html","0098216ed8d93db2a8b427b40ee0a713"],["/Swift Promises 初体验/index.html","b937f1f2e3245c39f6f6d86589456946"],["/Swift Promises 探究/index.html","89f5ef0f8d7d728cd3b93be07d361524"],["/Swift UICollectionView使用指南/index.html","3732f27b7fe1e634668701ee7ad0e524"],["/Swift URLSession 和 Combine framework/index.html","bdf19c6ec4a6442e83c6fca52e020fba"],["/Swift 唯一识别的视图/index.html","9cff4e0285abb340be240f8e0fe4f8ef"],["/Swift 如何学习现代UIKit？/index.html","a07f2c6eef8a8e7c50e39e5124d6f7e2"],["/Swift 用 compactMap 替换 flatMap/index.html","9b93905009ec83a6b6ee57d681e92e8b"],["/Swift 选择和播放视频/index.html","a84d2bc3493919fa55c82a93ac23a6d8"],["/Swift中UIColor最佳实践/index.html","f9ad2e835d09025e691326601b193c64"],["/Swift中快速简单的工厂设计模式/index.html","898c8b6643f10337e5bdddd3cdcb25e8"],["/Swift中构造函数与静态工厂方法的比较/index.html","a2eca1380c72068ee218e5c30d25ba94"],["/Swift中的UITableView教程/index.html","40c7b83aa35386863745db9bf4252e3d"],["/Swift中的懒加载模式/index.html","c1a506d591fce5912829cf8b3ac5fc8c"],["/Swift中的模块和挂钩/index.html","b3a1103672b9ea808893a1448414f52f"],["/Swift使用布局锚点添加约束/index.html","71a20a4c564e17416995305b73b9cdde"],["/Swift依赖注入设计模式/index.html","440cddaa3b513192632b67dfbc8a919d"],["/Swift关于Dependency Injection (DI)/index.html","3b65920ba9ea4236741838ea81675035"],["/Swift初始化模式/index.html","d5e290ec63d68c6fd55b59beaa4f3d2c"],["/Swift单例模式/index.html","dcba02d54a6d5aeeaa90bb4d54c75538"],["/Swift原型设计模式/index.html","e16f85b8b0f5ea31d51a38177d79e68d"],["/Swift命令设计模式/index.html","346a2ef64ca48b1a2cd3339dfd2d0637"],["/Swift外观设计模式/index.html","2546672529287886db746e51aaef03d3"],["/Swift委托设计模式/index.html","e31ecc2c910ef69b8e2346df03e54f71"],["/Swift对象池设计模式/index.html","473e21998279cfc40059e4eb135c339b"],["/Swift工厂方法设计模式/index.html","59df1a9ce27de7a381d0316c31ce9484"],["/Swift带闭包的懒惰初始化/index.html","c7bf044af2edd6351419b56f76d9cc82"],["/Swift抽象工厂设计模式/index.html","23e3de0d8979ecd13ac3dbf5ea109bd2"],["/Swift掌握iOS自动布局锚点/index.html","f3fbcb9af8260d5618e6826e4e19387e"],["/Swift支持旋转的自适应单元格/index.html","ecc50a64b94ff3ffd7388a89c37fe875"],["/Swift枚举值/index.html","c2243ee787fca79d3f76a52ca45286da"],["/Swift生成器模式/index.html","c00afa8e42f448b7f7c79ad68a4f9968"],["/Swift结合Xib文件自定义UIView/index.html","eefc87d003eba33507e135494eb22eff"],["/Swift编写的20个iOS库(一)/index.html","9add56aa64b0532f3486ce1f8092e7b2"],["/Swift迭代器设计模式/index.html","f504e278565536da456bc9e020bd409a"],["/Swift适配器设计模式/index.html","72eb251278d0f2365ccdef2e28592c9b"],["/Swift静态工厂设计模式/index.html","0d20bd082b04d6b093abe1299f586055"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","a06d85e48d7212243d0cd39c59693210"],["/UICollectionView data source and delegates/index.html","e3c92debb91032a51b251690a079e3f4"],["/UIKit初始化模式/index.html","2530624506c2c93437801ae605bcab30"],["/Ubuntu18.04替换国内源/index.html","7a038e1f2cc2330e1a39afccac3d6e57"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","7a5186bd72540e7076d953afdb4db4d3"],["/Xcode扩展/index.html","67092247ab5b056341f2b83c4381eeb0"],["/about/index.html","c462919e4e5b73cdc4a0cef800e5b2d8"],["/appleOS的Networking示例/index.html","82e7a8a9eb174d5e6c4a7907b336135b"],["/archives/2020/04/index.html","1b6e53d931190d0525fa9dbe2d2b027f"],["/archives/2020/04/page/2/index.html","a9e64ce486b7de9427a3cc3245a30893"],["/archives/2020/04/page/3/index.html","165ff43b17a0d2a29570c406dcd25243"],["/archives/2020/04/page/4/index.html","fdf466473f5343c5c73e33ee1778971d"],["/archives/2020/04/page/5/index.html","bcbe37f2ca1e221720202e0dc6b76ead"],["/archives/2020/04/page/6/index.html","d1516566577266e07a6e6a90f92aea7a"],["/archives/2020/04/page/7/index.html","8f34332b59f396572bc4470ddca9d3c5"],["/archives/2020/04/page/8/index.html","b51bdab7f023a54d358ccc3a190235be"],["/archives/2020/05/index.html","438679a50da44e8347f2a14aff212c35"],["/archives/2020/05/page/2/index.html","497c1cf9706063b55a94a6e6d6cb7fd3"],["/archives/2020/05/page/3/index.html","7026791e1e49e631d25fb572d48a875e"],["/archives/2020/05/page/4/index.html","a36f59a5005aa0eb1a713a8841effed8"],["/archives/2020/05/page/5/index.html","a9a72fceb784b433d47665556e2c0b8b"],["/archives/2020/06/index.html","72a6dea1104df7496f2561c4bae20de2"],["/archives/2020/index.html","a0eee40514210ffc9c0b6bc68e12ae0a"],["/archives/2020/page/10/index.html","9c7d6a17f1b6078fc98dc0385dabdc73"],["/archives/2020/page/11/index.html","fc04ee051c4dc16c48bff1e1268f9b1f"],["/archives/2020/page/12/index.html","f015f2ba7ddf9d4bc15e40352f0e3156"],["/archives/2020/page/2/index.html","c287215007e2be519a467db9a0e2d27c"],["/archives/2020/page/3/index.html","2ded844933a72eaa30d30c5826eecf87"],["/archives/2020/page/4/index.html","a0c45c4a30bc131d2c44ddf56d60751a"],["/archives/2020/page/5/index.html","7687fc37b088ff4effd8a851bc6b21bd"],["/archives/2020/page/6/index.html","aad078ebcb287b5a1687ac3ce6bd0132"],["/archives/2020/page/7/index.html","23137c65678238d498dee89650ff8fe9"],["/archives/2020/page/8/index.html","6180b8bfb5e901d5cee376916d5f5b60"],["/archives/2020/page/9/index.html","65d18d2533690efda81308cea11a4d64"],["/archives/index.html","39f4c497b6bfd1bcdf46e90ca6aba384"],["/archives/page/10/index.html","d94d1103b6e7f1741cf6ff731bb0cb24"],["/archives/page/11/index.html","268a061f7746d0fb2567cabfcaa76573"],["/archives/page/12/index.html","832db97963ee4df0aec638534eaceb2c"],["/archives/page/2/index.html","d2ed6b1bc9dbc3e52f5cb3b9415765ed"],["/archives/page/3/index.html","b9f79fd637a3f976d0f0f36b96871f20"],["/archives/page/4/index.html","3b1571ce7e85973f47909e0d0d318e50"],["/archives/page/5/index.html","0fb23defe8e6fed07f8244ac27db5aea"],["/archives/page/6/index.html","e53bdbd6674cb526e54d1695cfc2c13f"],["/archives/page/7/index.html","7946068d2dbef3915e59172359afee85"],["/archives/page/8/index.html","2baad2842a55d58162fc9f317988cbfc"],["/archives/page/9/index.html","859f9a47244e5bc2c906a23bb56f42cc"],["/categories/Advanced-Swift/index.html","76fb2e6ce1c3bdda492b7f2015fd633e"],["/categories/Advanced-Swift/page/2/index.html","72b72116d3d90f1e24e8c2e4b3b9d720"],["/categories/App-Architecture/index.html","797030da8a0c4a65cc7f075ae4f3aa68"],["/categories/Codable-protocol/index.html","36b8f503f7766761418880e9f6f4c10e"],["/categories/Combine-framework/index.html","85e16fcfda34e4ca375c54873c5a07bf"],["/categories/Combine/index.html","2f270e5c1b0b32837e4f2ac906a71550"],["/categories/Grand-Central-Dispatch/index.html","9aa2658dcff561747c66164666cd476d"],["/categories/Hexo/index.html","99831923fc852e176312b607d436b4cd"],["/categories/Promises/index.html","492c02b48dd5be6dc8c28249f8479ccd"],["/categories/Result-Type/index.html","f2daf374e9fff85bdfff40643e3e9435"],["/categories/Server/index.html","bf79b36ea2edbe2a5a0257ca809d247a"],["/categories/Swift-Apprentice/index.html","036b4c8081de5b11bef11defa9f9046f"],["/categories/Swift-Apprentice/page/2/index.html","a946cc84623da6c2cee87b35cddc37d6"],["/categories/Swift-Apprentice/page/3/index.html","5c6ec24cb94edfbcaa6fcb2672a49a5f"],["/categories/Swift/index.html","12fac58b4c64ccee6689ea88331133fb"],["/categories/Swift/page/10/index.html","218cc21c0d5ed69a94e7791f3193ad99"],["/categories/Swift/page/11/index.html","a67b585f2db72595625370fda8458c3e"],["/categories/Swift/page/12/index.html","d30715ece20398c7fa088d07c86b038d"],["/categories/Swift/page/2/index.html","2d103422ee551c3d0c8a491d76a199cd"],["/categories/Swift/page/3/index.html","b63a673c016b2ae4e771733d9ab21e0e"],["/categories/Swift/page/4/index.html","6325a69a188a7cfc2f541507276d17e5"],["/categories/Swift/page/5/index.html","1f6a5ee443c76ae42ae10201b814f273"],["/categories/Swift/page/6/index.html","c97ae2af7c79f267dc962b66e9141545"],["/categories/Swift/page/7/index.html","7a609467f160f72436bef48fab624d4e"],["/categories/Swift/page/8/index.html","2a202cbd05e221b3e6bbb34761676afd"],["/categories/Swift/page/9/index.html","381aece898994b7de94031a4d3316174"],["/categories/Swift5-2/index.html","7c50d1c46d9fbde37232cba100b71a61"],["/categories/SwiftUI/index.html","4dc4556e54640fcc3b9d1eab3e5a895b"],["/categories/UICollectionView/index.html","71e4102ec84ba538f22cda17cb46fbc7"],["/categories/UIImagePickerController/index.html","f6e374e3748b5bce0cfbdbb9d5929759"],["/categories/UIKit/index.html","6c203b9c40a9981a232d4e0a1c2e1022"],["/categories/UIKit/page/2/index.html","44c47bc4b9aa359aa5c13589862b8dd4"],["/categories/UIKit/page/3/index.html","b16f9003cfe0eab50956da7639ecf3af"],["/categories/UIKit/page/4/index.html","caf273c6627c58941624196aeafe8e2d"],["/categories/UIKit/page/5/index.html","433a7f1e7212d96cb301d25856de44dd"],["/categories/UITableView/index.html","a63650ef4afd18d432624cfcfc376739"],["/categories/Ubuntu18-04/index.html","9264af469fb999c4824ff5098b9ecfbf"],["/categories/Ubuntu软件源/index.html","2a5cbd4d656c4c35ecd993f82df19a19"],["/categories/Uniquely-identifying-views/index.html","dd6a95407b280d1ca65cf3c7d4415f37"],["/categories/VIPER/index.html","d5ac28b7fef3094d939e1f3f9f99e6c3"],["/categories/Vapor4-0/index.html","2265b6412f593dfa50f4381f1b63ef10"],["/categories/Xcode/index.html","87a032f6a0bf2bb985d82c8e8594d5ec"],["/categories/appleOS-Networking/index.html","fa55d1b1d5664ba49bb21ed686528761"],["/categories/enum/index.html","938b54caba8cd84c7fc0a679e39d974b"],["/categories/iCloud/index.html","a4b9398aefbc4a066bdc3a6628081f74"],["/categories/iOS/index.html","9ebe874ce4e976579a6661cb323fe019"],["/categories/iOS/page/10/index.html","4daf75bb6bbb0f3cdfdb3d039c7a2d22"],["/categories/iOS/page/11/index.html","0c9340cb068c27fb3719a9988ca92a1c"],["/categories/iOS/page/12/index.html","26a6d76e7a6efe9849827b2a95defeaf"],["/categories/iOS/page/2/index.html","0ce1346e58df3aab4ef22be501c5a21e"],["/categories/iOS/page/3/index.html","239cf686175c883850633d161b837bae"],["/categories/iOS/page/4/index.html","44aa19d3be8c5ee443cf55f98cea0c9f"],["/categories/iOS/page/5/index.html","d506222fd4ad0e82a5bdb1887b1a5142"],["/categories/iOS/page/6/index.html","81062d9fbbd14ade0011d53f83467f1d"],["/categories/iOS/page/7/index.html","5943138b1a49da1f5f26fc8fb7fd1a22"],["/categories/iOS/page/8/index.html","7672e9983327028fe6d7232866d49834"],["/categories/iOS/page/9/index.html","87dd0ab1e6bcf0d91161a91a714833f2"],["/categories/iOS面试题/index.html","1fb21e45a38f4eb91ef418433ab7421d"],["/categories/index.html","0e2350bfe11fa9b029733543a37b99db"],["/categories/random/index.html","27faba99196a3abf02220f3f31456020"],["/categories/三方类库/index.html","80443ded1e59a2830e090eb5cd8e63b5"],["/categories/函数式编程/index.html","c0ebf4d085e8cfdf3f9f27c3415137f9"],["/categories/子类化样式/index.html","89c5e950d2602d2609567a3101c80c7e"],["/categories/架构设计/index.html","48032d0d947937cc3e3b2de5fd26fe41"],["/categories/用户体验/index.html","f7e514c18b3a57302f0d52f4caa72e83"],["/categories/设计模式/index.html","fd18f54815ce4f7562a255058810b68f"],["/categories/设计模式/page/2/index.html","a7c3fae0c661abac2610238cc7552691"],["/categories/设计模式/page/3/index.html","3231a52f5e35f872afff757bcb404643"],["/css/main.css","6bb4b6fe587578ab264e0f0cc50d9e60"],["/hello-world/index.html","b7c8a65bda650bbb5c52c413503ab5fb"],["/iOS VIPER架构深入实践/index.html","834b780e988d613c785ff7b3b24de5a7"],["/iOS 自定义视图，输入表单和错误提示/index.html","314b5866f092c88798dcb51a67fa9370"],["/iOS如何使用iCloud文档？/index.html","50a125ffb72fc32cdaaad31139038b4a"],["/iOS子类化样式/index.html","95df9f38d7d752af67e14aa3f810bd80"],["/iOS自动化布局编程/index.html","849d10e8a84117bbef396f936ca36d98"],["/iOS自定义转场(By Swift)/index.html","0cf86b2cabe3c04ca1418aed560041ea"],["/iOS项目架构：使用VIPER/index.html","e388c3e4196d0e15a9e8d39dde7a44be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","a1d7f4a4c5204772d97dba037f4170d4"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","833d1e27a9f1fa27374a37e3f1d99b01"],["/page/11/index.html","b162f66159427186b7979fc22387e60f"],["/page/12/index.html","b0262f93bcc4e2dbd5a13e2d5db210ed"],["/page/2/index.html","f8725cad36a0f05d91c90617aab4f079"],["/page/3/index.html","6b9bb65399a71172a6ae95d93d9c7ac7"],["/page/4/index.html","f25c91e974034957312fad484f433f99"],["/page/5/index.html","c763fbf6be7e4d4710a90c094489d311"],["/page/6/index.html","69c9c18728adf9ddb543af6df3d00080"],["/page/7/index.html","56ac05dc1ec77c4a32fa0b93f260acee"],["/page/8/index.html","fa9162a4b5e5387b58e1322b1f43274d"],["/page/9/index.html","c77d2910f1a676d11ba7599cf46031a4"],["/schedule/index.html","50091aa48a765bc8c4541522b44b842c"],["/sw-register.js","48c4173ce4fcdfa77a8493f018dc25b4"],["/tags/Advanced-Classes/index.html","55aaca0cce197e6a95bb92c245f5c482"],["/tags/Advanced-Swift/index.html","1d3b104d564a27f7158d6fc87102ce4e"],["/tags/Advanced-Swift/page/2/index.html","d42dc5070be4453a2fb64f84b5b1731e"],["/tags/App-Architecture/index.html","b335f0ef4fc3a68d701e4ac43d0f5e71"],["/tags/Arrays-Dictionaries-Sets/index.html","ddef7add1580550c51c456892c50a2e5"],["/tags/Build-in-Collections/index.html","2b650699f6732dbf6091a84816c41596"],["/tags/Building-Your-Own-Types/index.html","3684076b6288c88c9a1a48e004a95d95"],["/tags/Classes/index.html","0dac5b1ccbec9271afa507aa42857b8d"],["/tags/Codable-protocol/index.html","308ebc86f1c981289d41f46315a2a9ce"],["/tags/Collection-Iteration-with-Closures/index.html","c578dcabd767c2dd57fff75355823193"],["/tags/Collection-Protocols/index.html","1ff7bef2701ed193f1057331b197f40c"],["/tags/Collection-Types/index.html","25d95f2ad68d315195cdf50e0afdc126"],["/tags/Collection/index.html","24f3dbe512dbe1c7ef10df91f0b97d80"],["/tags/Collections/index.html","5b14ebb9f75dcb9284bfa3368a79a6ee"],["/tags/Combine-framework/index.html","090fd505fa271da0002634f303185ddb"],["/tags/Combine/index.html","d65f1bf076faa2cd412c92283067bc50"],["/tags/Dependency-Injection/index.html","011db03709b5e53572e434952a00b06d"],["/tags/Encoding-and-Decoding/index.html","5a985ad53de32fa50c6614c3d49d1a51"],["/tags/Enumerations/index.html","a2d2182267fa63c599abc087d70ef5a0"],["/tags/Enums/index.html","58026ee00dea0d09c26ccf81bad47769"],["/tags/Error-Handling/index.html","4c797b02106c4e0c13a20e4ae423c15d"],["/tags/Functions/index.html","28225ed19726183ce2806936831f6ad7"],["/tags/Generics/index.html","969e518fff698caf753d29387ea1a17c"],["/tags/Grand-Central-Dispatch/index.html","d776f81fee87b0dc173999809cf05d17"],["/tags/Interoperability/index.html","69ac1f79d78b50e7dcc931c570f5a783"],["/tags/Introduction/index.html","d3cf6f431f3275e983bd4d243c1a685d"],["/tags/Methods/index.html","527ca268439f6ae4c1accbbdab4f952b"],["/tags/Modules-And-Hooks/index.html","3c3b25b13677a728dbae9140733cc602"],["/tags/Optionals/index.html","89fbd6d4d112a991c6867fbd56c752bd"],["/tags/Promises/index.html","b7446f13cec893816f11b2c3f19e7f0a"],["/tags/Properties/index.html","0a7bd1dcfc5d146c179fb237f9b2f358"],["/tags/Protocols/index.html","e65846d68cb1aef470f284021e745820"],["/tags/Result-Type/index.html","b0091570f51ca3c3f0ba54cb28b65c8a"],["/tags/Server/index.html","7c2167ba946035a147c229867b1775e0"],["/tags/Strings/index.html","1ec407f734843fdd78655c214246a7cd"],["/tags/Structs-and-Classes/index.html","4a4794c7db852528639853b35d37c097"],["/tags/Structures/index.html","2fc00f852981331be3ab37b88cf2dacd"],["/tags/Swift-5-0/index.html","f0ca95fa7b418da372dc8fe80af38b41"],["/tags/Swift-5-0/page/2/index.html","e508dd082627ea15c4664e4c0a8baff9"],["/tags/Swift-5-0/page/3/index.html","b5f86f0cd01b70daf85a29e066f607fd"],["/tags/Swift-5-0/page/4/index.html","f12fafb9fb28f2fa79c4d9526c5a16e8"],["/tags/Swift-Apprentice/index.html","8abe178ddeaf92a53c09e1006644680d"],["/tags/Swift-Apprentice/page/2/index.html","fe1c6e785f114ceea646866e2be00376"],["/tags/Swift-Apprentice/page/3/index.html","99a6ae2472c4634f20467ad24baa8219"],["/tags/Swift-Package-Manager/index.html","1c02ca29e4597bb5678021bbe15d3b3a"],["/tags/Swift/index.html","ed9d7012b14941717f984a81c59728bd"],["/tags/Swift/page/10/index.html","3313a8737ae3b29fef7c28b38f0fdd76"],["/tags/Swift/page/11/index.html","56f72c2310ce2494625886a8c95436f9"],["/tags/Swift/page/12/index.html","9a07aaab1a4b9ce3fba8050c89909cba"],["/tags/Swift/page/2/index.html","543cd9a9a8797bd96f2285f813683366"],["/tags/Swift/page/3/index.html","5f33690cccd20fdbf73a8e49d51e7fd1"],["/tags/Swift/page/4/index.html","363fd0f3a093da0af188ba72e205c15b"],["/tags/Swift/page/5/index.html","92aa00b535d84fc5bcffedd6d07adb52"],["/tags/Swift/page/6/index.html","3b493bd23bfdeed9fbdbcf82e7e80570"],["/tags/Swift/page/7/index.html","23d3cbc65dacd994c4121ea2125bbd93"],["/tags/Swift/page/8/index.html","0caf77edce0b3211e030c32a6fe410e0"],["/tags/Swift/page/9/index.html","cf3a764867a46721100df0078c01271c"],["/tags/SwiftUI/index.html","d2ba80bdb6713920557bc7a5aba7dd8d"],["/tags/UICollectionView/index.html","05d7b769fbc5d3a8cd133af5a7ea106c"],["/tags/UIColor/index.html","32768616874a8f722c25eebe743b17c0"],["/tags/UIImagePickerController/index.html","20dca5e565f0d7d721a6e5cb0276b7ce"],["/tags/UIKit/index.html","ce68f2ce54d6c616dc1c93f10c769448"],["/tags/UIKit/page/2/index.html","68e5e50c3341ce2282df4d62ed31c861"],["/tags/UIKit/page/3/index.html","77613ce2fcb02ddfafcbf14df70c6e35"],["/tags/UIKit/page/4/index.html","bebcb37d5d8fe5a92c0bf6755bdd8683"],["/tags/UIKit/page/5/index.html","c2164f2d17aff38d8b0d893de1e43d84"],["/tags/UITableView/index.html","137a03bb87224d07df845912fbc8d1e5"],["/tags/Ubuntu/index.html","7bd7661cdba5373cbdb5ac668b733f5f"],["/tags/Uniquely-identifying-views/index.html","c607c36376098f403d8db7c8c6c70758"],["/tags/VIPER/index.html","181885389d6ede815dcde4ff65d046ec"],["/tags/VMware/index.html","511a0f9e8f19247a769f41a19beec494"],["/tags/Xcode/index.html","745102c1d678665705f3bebd3a3dd246"],["/tags/appleOS-Networking/index.html","5ed1427c3bc0b6ab69991e9413f9f466"],["/tags/enum/index.html","53936a6759f5b1db1dffe78d4f99d6a9"],["/tags/iCloud/index.html","53f9a756e925f3cfd6991bcf168a16cc"],["/tags/iOS/index.html","f7ddecaf1ad9b121a3dcf5fd05d36383"],["/tags/iOS/page/10/index.html","ecc70cd85e2ac58c6ae3664aa36e1bad"],["/tags/iOS/page/11/index.html","8b074823b70a644fed55616d3301e959"],["/tags/iOS/page/12/index.html","04206e39f39f8a86deb02f3e2325fec8"],["/tags/iOS/page/2/index.html","0ed1c53c9aa0386b9c79af70094a5795"],["/tags/iOS/page/3/index.html","6394b149be5a64a235ac4e2fafb7a9a8"],["/tags/iOS/page/4/index.html","cb405da6fec304422cda26076304f001"],["/tags/iOS/page/5/index.html","489ea5885923970b1b5a4e8856f68a2f"],["/tags/iOS/page/6/index.html","b9a7e582cd2dfbd47b50bd545ed12f98"],["/tags/iOS/page/7/index.html","c9f68172a3e072bdd09884190cc8f131"],["/tags/iOS/page/8/index.html","b34f17503762f2baf6b61df2f77d0b6c"],["/tags/iOS/page/9/index.html","883522e743b9b30f341adffaae6d6b5c"],["/tags/iOS面试题/index.html","c1d74d7ac6dd1bd081fc29ce7ce07478"],["/tags/index.html","3993c87cac1bafdd1ddbaa8f416d7c89"],["/tags/non-optional/index.html","af397cb45f31983085f48fee0455723f"],["/tags/random/index.html","2c7b100f2dadbb5f59045c5b3b7ff0d3"],["/tags/transition/index.html","01f9fbc1f7ec05642bdfed474162408d"],["/tags/三方类库/index.html","f2ddf421880819c79b5c7e6467ef4230"],["/tags/依赖注入设计模式/index.html","6ca02338a2522b73b1ac78b9befb2e74"],["/tags/函数式编程/index.html","8a2ed8c78ea96fc991db5710afaa0aec"],["/tags/初始化模式/index.html","81fd92a3615ba66de61093a8fc28f316"],["/tags/单例模式/index.html","e1ea0b7ad9129661a59a431dd031bf3a"],["/tags/原型设计模式/index.html","c978fb5c4a88758b4e061cdfa0062495"],["/tags/命令设计模式/index.html","93fd293610b0b32d623840a2fa399dde"],["/tags/基本控制流/index.html","957849515947ce1dc68992c27c90ff73"],["/tags/外观设计模式/index.html","df35746afe806821325cfce03821ace8"],["/tags/委托设计模式/index.html","033515c6098bb8df3d37ea0c7d6f9633"],["/tags/子类化样式/index.html","82ab63d01f7f3fd0747282cda893c827"],["/tags/对象池设计模式/index.html","8ba55862c5921cb8e39a6c2f42f36964"],["/tags/工厂方法设计模式/index.html","d1c627b43adb2213728956809893b256"],["/tags/工厂模式/index.html","62b26a9c9e17720bab1dd87731eb0c95"],["/tags/工厂设计模式/index.html","c5f24168810509f2246f49a39c481bac"],["/tags/懒加载模式/index.html","188ca5548c2b0c36c868f7768b64d7ff"],["/tags/抽象工厂设计模式/index.html","30ba9ae5fcdda59a2ad67623afd16676"],["/tags/构造函数/index.html","520c12ef3c3550d9aed9b275c99887b2"],["/tags/架构设计/index.html","df2f0601cead39bb9085462411e745b7"],["/tags/模式匹配/index.html","4f8806d1629184da48f56735598c20aa"],["/tags/生成器模式/index.html","a2777dd2632c55dc9bc61a1945643135"],["/tags/用户体验/index.html","9f823e291079b77c4031c9b000e6c8e3"],["/tags/类型与操作/index.html","3d536b632a00cdf46299c5ed25596a85"],["/tags/自动化布局/index.html","1cd27a4547f48eca7f65744d94866f53"],["/tags/自定义UIView/index.html","cf22ac6d87d41283784f49d83d70f5ba"],["/tags/自定义转场/index.html","744a1f81eb4b595a814d3310e8bc6974"],["/tags/自适应布局/index.html","74da216d71cf398f69b0f5326a8de12d"],["/tags/表达式、变量和常量/index.html","c96b9a82f0cab8597d1c6890fa091b5d"],["/tags/设计模式/index.html","fd866742defcd2c92a6fefcf648d7662"],["/tags/设计模式/page/2/index.html","825ccd97a91c5620a6a02bec80309074"],["/tags/设计模式/page/3/index.html","a2e5436c445c882221265282abd92c34"],["/tags/访问控制和代码组织/index.html","684b9bec05385193d77a106e77c59210"],["/tags/运算符，下标和键路径/index.html","7fd7e61519affd2b31464844d9b7ace5"],["/tags/迭代器设计模式/index.html","1118c4fae09388923a1f646f76fc857b"],["/tags/适配器设计模式/index.html","9e856824583c5ff6b96efa250eca8de9"],["/tags/静态工厂方法/index.html","2fef80ec11bb7c96b327a401b9400188"],["/tags/高级主题/index.html","954f2595d8cd9c92a4eb00577ad734f2"],["/tags/高级控制流/index.html","5337dd11345b00a0eb46d477a913a09d"],["/为iOS应用构建输入表单/index.html","c960c261eacae817bc52ef2ba7e92731"],["/产品开发的幕后花絮/index.html","2a7c7721f85b89db37ed26be9244604f"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a6237da18b0ffec70a6aacf0abe7fbc8"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","0d4a14ee65e47ef992f2d2ad1f0b2063"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","664a570b1cbf95de4e972787a11cf8eb"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","17bbd80164b5dfbe4b153f283ad78316"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","5560c3bb61a9455299d193052f6a344b"],["/在Swift中创建自定义集合/index.html","13777659f06bc6f1bd060d583eb3597e"],["/在Swift中处理非可选选项/index.html","73d5d4e96c46bab527e3b12a6d2077c4"],["/在Swift中生成随机数/index.html","cbfab0c02965a28d54a57a02ca2986c9"],["/在Swift中重构单例模式用法/index.html","7204d3ca6031b3f573dd2a84cf7503b2"],["/如何为VIPER编写服务？/index.html","e837f4e772f5f25e5a698a406c8e904b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","0796b299e1c06deb883ebdd77fa78fab"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f6158437b72798794a8ffdec979daa74"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","a6fb0a7fae992a0e754bf6b9b820abc9"],["/如何使用VIPER构建SwiftUI Apps？/index.html","608c406958172082b6a5d977b585f77a"],["/掌握VIPER架构/index.html","804fa4f541fef4b162ede634a490a9ea"],["/揭秘 WordPress Hook 系统/index.html","02c2fa9ce52433042c7602884cd24cd1"],["/比较工厂设计模式/index.html","b42228ee06ddefa598d86294a1ba4e51"],["/深入了解Swift中的Grand Central Dispatch/index.html","eb4de31e56dcaca80069ca8bc299c3a6"],["/深入研究Swift框架/index.html","54525051029cd6435821fe0a745d72de"],["/适用于iOS开发人员的VIPER最佳实践/index.html","1d44b81f5d6febc6f6393ef0eab827e7"],["/选择Swift而不是Objective-C的5个理由/index.html","54e33dbddf1fbc771471b1eb55ef7736"]];
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
