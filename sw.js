/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","ec4e3894123fac2ebd09a329b0ce8ff3"],["/2020年iOS面试题总结(三)/index.html","bca12ecb88970b5c635eaa4392800139"],["/2020年iOS面试题总结(二)/index.html","9d62b5250efccbbeb33210ae46ad5cee"],["/Advanced Swift系列(一): Swift 简介/index.html","d3d7c3c3223a1baa22fce8cbe4084cd0"],["/Advanced Swift系列(七): Strings/index.html","76f156c497e7f642a7a80f69bbad5980"],["/Advanced Swift系列(三):  Optionals/index.html","ec7a1a691f14e0c1009fe6ae6029057f"],["/Advanced Swift系列(九): Protocols/index.html","5990acff8bf5698261767cd8cb5dee7c"],["/Advanced Swift系列(二): Build-in Collections/index.html","f822f21dd88acfd6c0018b5152bd9bda"],["/Advanced Swift系列(五): Structs and Classes/index.html","9399801825ea0f39677f484ad9d8177b"],["/Advanced Swift系列(八): Generics/index.html","a4f400ef8a9efc097254fb26de1ca1ed"],["/Advanced Swift系列(六):  Enums/index.html","c8366ab6a5f5d4ba21d90d95274a2bd2"],["/Advanced Swift系列(十): Collection Protocols/index.html","beed6fdf20ae81b70de735ffb83557e4"],["/Advanced Swift系列(十一): Error Handling/index.html","d49c38846a94dece5fd68f930576d2ac"],["/Advanced Swift系列(十三): Interoperability/index.html","3edf3b784ed1772308e3d0fd8871ae41"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7279ce0e01a53af8c57c2bd9232ca634"],["/Advanced Swift系列(四):  Functions/index.html","7da3fc314a3e009595b83c11acfec5ac"],["/App Architecture系列(一):  简介/index.html","7d151b6b46b5a1021118b32a7ab8777a"],["/Functional Swift 初探/index.html","4d19f47942727e72e12c34aa41c4c4f0"],["/Git 使用小技巧/index.html","ac6af4fbcacfabc8ca33be1fb2dc90be"],["/Go 基本语法初探(一)/index.html","e5fa4b6afc8c50b1b85bbebc3d1f496c"],["/Linux VIM 命令及操作小结/index.html","71c9827acab7bd2511e0a84d6608b1cd"],["/NSCODER和SWIFT初始化/index.html","41d9a24ab225ce963dd12e7fd6500edb"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","53107a9022e60e97480fd6f5493d0816"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","4a3c4a1bceced1aa7988eba0f661b4fc"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","cd1854da96fd4e642d67f49612c62989"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","b90adda90020a1279b03f68d93d1778d"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d02af65dd5dfabc6577701eef276fd87"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","7a8cd52d3c4ee3d23a400334d38a9ad7"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","e2480ebb1ae8f58b3a8a27c6e2245b2e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f916ca6bbb0dc1ef69cf40aefa00431f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","3f7816c1019b85720d073465d797c1ad"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","7824bdab2ba96dacbffde9851aaf1fca"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1bacc87ffd552cbf72bd2eb51bc653f8"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","fdbf3b0fe1a4aecbbdd0231582dec0cc"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","1012b1a14e814b655600a130eebab868"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","7a9ef6edf7b87ee2861ff53ed04d9441"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","7f1ba11b39f547a432df6167feff97ae"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","038c423749dbad38f12c66bbfecadc5b"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","12a26ad394a9d018132879694f56ab15"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7e796eabceb0595fc429c619409d33c9"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","1de8f331d60335525cf7186d9aaaaf16"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","d4858a7160d3cb6950f8687a25ca4dbb"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","5badf1b4b24077ad8ce4df49b8c385dc"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","6b0a9c92ebf0353ba77684407d215924"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","00685a785997965068454bc296aefae1"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","c6c71196ce86e2ed10777887861b6bf1"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","23cbbec33c69d4fd950c2ece0e66c992"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","6bf3fe1a90a6938670968786275719bb"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","0e4fd0c6e4cd3b6fad64940580dde6b3"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","a49e3071c269bf72643bb6f808d09228"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","190427f4e6e27d5a60ef724f3ebb52df"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","90cf5d5d30064aa9826acfe1743acbe1"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","2e8505d6c68e0434d28a402b2e5b974a"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","8a6900d74a72078619e72a4602e1c5c3"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","53aed984e41fa623e82cb00576009b4d"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","b0e60e3240ed12959dd99581dba9c5c2"],["/Swift CompactMap vs flatMap：差异说明/index.html","33d7b9221a5c5f144ecee57523021786"],["/Swift Grand Central Dispatch 深入实践/index.html","c49c58d3d7ce33cbdfa983ab1810b3d6"],["/Swift Lazy属性初始化/index.html","dcf81ba1e63dc15d2830415bc317eb50"],["/Swift Promises 初体验/index.html","82bf6cb84ae5b702f6634377d5c6a9be"],["/Swift Promises 探究/index.html","d9e75192e53cc13135dafa057383b843"],["/Swift UICollectionView使用指南/index.html","2f4865646027f04be42f56c278e50b97"],["/Swift URLSession && Combine framework/index.html","a6d7e020901fa19c902d114193d664cb"],["/Swift tips/index.html","11a8caa280b38894a1ee1af4422c9a3d"],["/Swift 唯一识别的视图/index.html","c5481cc1db0bc881a8db14cb3c497a4e"],["/Swift 如何学习现代UIKit？/index.html","f17b3f9fb1af1a7abf4d8d0589a81f5b"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","b045d9a7f476a0b32195b199240fd3c7"],["/Swift 用 compactMap 替换 flatMap/index.html","8e32ca7daa86861ae55309f354ce2db4"],["/Swift 选择和播放视频/index.html","7fa7c4db01d55858e560ba48fff24cdf"],["/Swift中UIColor最佳实践/index.html","4e221415f27c782b9c11f9b6d8906a10"],["/Swift中快速简单的工厂设计模式/index.html","49cc6510812b603866f084ffaf3a44e7"],["/Swift中构造函数与静态工厂方法的比较/index.html","a1cf68fc51be225a851e2a4467932b58"],["/Swift中的UITableView教程/index.html","5f59dc91d04466c7fd25255d05647f4c"],["/Swift中的懒加载模式/index.html","9b38f05e71e77fb236cb95b1ab8dc8ff"],["/Swift中的模块和挂钩/index.html","75dc0dad22fe64954ecc12be22d3b95a"],["/Swift使用布局锚点添加约束/index.html","73c3bab09c2c1e6160fe81cd455f71e6"],["/Swift依赖注入设计模式/index.html","c2c1aca8518609cddd819316b734f6ad"],["/Swift关于Dependency Injection (DI)/index.html","d1bb49b85f64ff64a26b727dd5e29ae6"],["/Swift初始化模式/index.html","871077a5ceb6d9b441f46fcc4b999e89"],["/Swift单例模式/index.html","5eb437d2c79438924ac503ce0ea4b858"],["/Swift原型设计模式/index.html","ebe8401c1fd6760f0de21bca16091adf"],["/Swift命令设计模式/index.html","3e3f12b2a695d773c127e0f8ea318bbd"],["/Swift外观设计模式/index.html","9db5e495ff779dfa59b16931c542d124"],["/Swift委托设计模式/index.html","5443ea73caa0f33955db1240a328ffa1"],["/Swift对象池设计模式/index.html","b5ef2d9186a488483afd58a3cbdcc8ac"],["/Swift工厂方法设计模式/index.html","43703ab8dc65879bfab51097ecf87089"],["/Swift带闭包的懒惰初始化/index.html","9e9079ee9cb123317ac2b90875069103"],["/Swift抽象工厂设计模式/index.html","c728f6a08470f9dea278ec178b18e6e2"],["/Swift掌握iOS自动布局锚点/index.html","4b4edd90d5f49237b0718bafe3512b1e"],["/Swift支持旋转的自适应单元格/index.html","038a33c80fd43c27ef69e48cf47e25d6"],["/Swift枚举值/index.html","0821251e73984e1920907a0d2c7558b6"],["/Swift生成器模式/index.html","afbb3a9bf06c74de0908b24e655aa85d"],["/Swift结合Xib文件自定义UIView/index.html","ae1af70ecb3f16db7851aebe7ce69f2a"],["/Swift编写的20个iOS库(一)/index.html","3589ba6137be4d76e680bcf3970c7b7b"],["/Swift迭代器设计模式/index.html","bea8e18c666537bf46ba9b3783c7be04"],["/Swift适配器设计模式/index.html","66c17ec56c2181ffe5d804a4ad2880cf"],["/Swift静态工厂设计模式/index.html","cb5add532cc91664230d8eeeea7a6f34"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c2db12926d82fed5375dd5ee978af6a7"],["/UICollectionView data source and delegates/index.html","296254903637a0963713259d579c47e6"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","a8a2d2b11dabeb31bd861350326ce871"],["/UIKit初始化模式/index.html","5fbec6d0901d08faecfe5d52e54efc6f"],["/Ubuntu18.04替换国内源/index.html","e3ff0376d189f2833fbd9733f74119ed"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","a113a478cbed5694778de9ec448f1970"],["/Vapor系列 (一) :  Vapor 初探/index.html","55a7340901d3636fc8cb31e8fe3f9d04"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f66c4683daa6aa7b91b8f13cd1d5d117"],["/Vapor系列 (二) :  Hello Vapor！/index.html","9114308e5909951dc1fa37d12dd0396a"],["/Vapor系列 (五) :  使用session进行authentication/index.html","37c3b59dc57cbf76461bec29178bc73b"],["/Vapor系列 (四) :  创建博客数据库/index.html","6d1c6e0bf44683c0f8d3ace22d0de37b"],["/Vapor系列(六): 徒手撸一个CMS/index.html","94f5bb769b7a4cb11aef2e1bd07cb1da"],["/WKWebView与Native交互注意事项/index.html","a1d5d1015cac58633ca01ec2db8d89c1"],["/Xcode扩展/index.html","826f9f52072f6cb7f46c09db8ff49c53"],["/about/index.html","4634bf80c2a20efe408d6a4a2a24b432"],["/appleOS的Networking示例/index.html","e80021fe9fb1f850a745dde5b3f372a2"],["/archives/2020/03/index.html","6e1e2a42a768386c8187cc14dffb763c"],["/archives/2020/04/index.html","6aacf5d2b97c4035988e5818a55b01a8"],["/archives/2020/04/page/2/index.html","0b848a4d5d995c78ffe4772725dd1adc"],["/archives/2020/04/page/3/index.html","62223bf59acb4a8b17eb19815ebdfc7a"],["/archives/2020/04/page/4/index.html","c20027922f9f488133b3ab27130dbc5f"],["/archives/2020/04/page/5/index.html","cd2fb84521f786b663e81798b7dff163"],["/archives/2020/04/page/6/index.html","c9580d3bbec1ac62734dbf835bf0200f"],["/archives/2020/04/page/7/index.html","96a41dcc6384bdce1311e640d52cd23f"],["/archives/2020/04/page/8/index.html","f2f14e6d4bd518bcd1b7f8545f3c6142"],["/archives/2020/05/index.html","5b03be92f248023af93e4ca44c7429b1"],["/archives/2020/05/page/2/index.html","53f531a7fca7e796db146199cd1416a4"],["/archives/2020/05/page/3/index.html","44f077394faebba135517cfc5087a40d"],["/archives/2020/05/page/4/index.html","dd4eb82348257c909f83cdb5dbf7abc0"],["/archives/2020/05/page/5/index.html","3e7081b122d3487fa055c554257904ed"],["/archives/2020/06/index.html","2e5f9c1d949661cc3ee0db0a9f9e3672"],["/archives/2020/06/page/2/index.html","af1f133550247c5b311633f660d5a333"],["/archives/2020/08/index.html","d711bcc73013618353b40e3cefa0c37b"],["/archives/2020/09/index.html","31226da2e7427bc6b4294a7fc9deec4d"],["/archives/2020/10/index.html","734b4206ac85d579136e33480f940b68"],["/archives/2020/11/index.html","f58adbe0fb3e45cb8fee32f92c15b623"],["/archives/2020/12/index.html","38bb475ed72248d26593d581da75293b"],["/archives/2020/index.html","c1752aa1a243f2f7c727059ae92225f3"],["/archives/2020/page/10/index.html","ea273946061a16f3837b14c3965116a9"],["/archives/2020/page/11/index.html","6993b6d1b19e6fcb922c4f090e276f78"],["/archives/2020/page/12/index.html","08a0bbb66ad6fc53e9d4d0cd78684e26"],["/archives/2020/page/13/index.html","032fde803b26e6cc63bcb4e576ca87e7"],["/archives/2020/page/14/index.html","eebc525e0bd5349de17901d1e9805103"],["/archives/2020/page/15/index.html","8fb3fe6b041768601023220c0c153f0c"],["/archives/2020/page/2/index.html","defe75120e170d717681c29696b1848d"],["/archives/2020/page/3/index.html","da922849ea3a5b7bf04a18481e6e0623"],["/archives/2020/page/4/index.html","d56f0e3613f2295a14284fae50069a13"],["/archives/2020/page/5/index.html","c2a7b357fbae6debea699aa54f6bf720"],["/archives/2020/page/6/index.html","55f2c39e963c7363cb699037845f2025"],["/archives/2020/page/7/index.html","d69a325094e46c3a06d3ad301a691585"],["/archives/2020/page/8/index.html","9305f227bc08c45b6e23272d8a140eb3"],["/archives/2020/page/9/index.html","2a854d4952f1fda22df019d37266134d"],["/archives/2021/03/index.html","2b2ca11a8b8e523fe0208476f32c0cb7"],["/archives/2021/04/index.html","df0589ebb53f5d143397bbfefdb6c92f"],["/archives/2021/05/index.html","ce351a01cdd7df300c17ab957a7ca5dc"],["/archives/2021/index.html","cd7158b5d5961e41a9c48ded86622d8f"],["/archives/index.html","b1e257c2b5d63c84424af720c528c75a"],["/archives/page/10/index.html","3d901812a6714167ce25d4f432a0351e"],["/archives/page/11/index.html","93509819ab3858eb32add4a33dec8e1b"],["/archives/page/12/index.html","84bffb1f7664215417d9a9583f806548"],["/archives/page/13/index.html","fad5f2d72a39a74d7e38c4317816b470"],["/archives/page/14/index.html","ad645adaa379f4bd031cd33006a7f1c4"],["/archives/page/15/index.html","81d34b46d07fb4750ae68bb1e82b0481"],["/archives/page/16/index.html","b0054470937118d1d2407bce91bd9250"],["/archives/page/2/index.html","1da6a07c74325906bb117931f0691b52"],["/archives/page/3/index.html","2e189d45f7b265f067221cd92f4acfe5"],["/archives/page/4/index.html","2cbfa7cc387d5827969f61bbfc76b74a"],["/archives/page/5/index.html","2df13c174824792e435822c4c29fca7f"],["/archives/page/6/index.html","971ad9829d5839f84c6ac76334e2b57c"],["/archives/page/7/index.html","a4b341392719a6c2680027e4b4b1250c"],["/archives/page/8/index.html","3f8de20ec7fd25d4f8365f3e98206a33"],["/archives/page/9/index.html","fa38b10a3861ee69fed000dcf9fa2a60"],["/bugly 上传dYSM文件小记/index.html","bb18c2d55a281139a123266252403bcb"],["/categories/Advanced-Swift/index.html","1c4d98419a56cb31385b6b85dc14ef9a"],["/categories/Advanced-Swift/page/2/index.html","63ab989e7b4c520e301ff7fa13dc54f6"],["/categories/App-Architecture/index.html","3fc576e676a333569348fdee5a394f6e"],["/categories/Array/index.html","052c7d745fd6f6a86b84750edaffa200"],["/categories/Codable-protocol/index.html","91b0dabd0ee42c83d9cae51d5165e7c9"],["/categories/Combine-framework/index.html","49e619546155f9e21abc46428c0085f5"],["/categories/Combine/index.html","0eecc57d7eff5d18183a2b9b84d374ca"],["/categories/Go/index.html","3665fa3abfff1751e7798ba4d29c96fb"],["/categories/Grand-Central-Dispatch/index.html","dc21375789cce04b2cb70d6968a34c1b"],["/categories/Hexo/index.html","3ee01c507f784776dfd70d7d4200c402"],["/categories/Homebrew/index.html","403c6ba7e6dcad5fae4ac87dd3564678"],["/categories/Linux/index.html","8f0ffd75666ceac686933b003957c7eb"],["/categories/Promises/index.html","f05c37a51aba2004399962d42d7a6854"],["/categories/Result-Type/index.html","b8407ddb7ab536729ebd116a27c55bea"],["/categories/RxSwift/index.html","9e13f534dd49c2925228e2adedf4042a"],["/categories/Server/index.html","560fd873e2fdd60229d4985649f0ffda"],["/categories/Swift-Apprentice/index.html","e7128e8128fc949b266110c3604f1fae"],["/categories/Swift-Apprentice/page/2/index.html","e6c2c383cf5b200a8f30fb78f7cf3523"],["/categories/Swift-Apprentice/page/3/index.html","d92da88f3c4d011e17c67ea25dced1b3"],["/categories/Swift-源码阅读/index.html","4e842d4df2d8265f33a3710f6771199b"],["/categories/Swift/index.html","79d96401397d1f2efe3c13bbabe8506c"],["/categories/Swift/page/10/index.html","d2b7f75599710a1bc2f6a0b39eedb450"],["/categories/Swift/page/11/index.html","742d42a4ed5f924c91b83882598a2842"],["/categories/Swift/page/12/index.html","55a7782a7de7054d1d3ae05ffa158a1f"],["/categories/Swift/page/13/index.html","aabbc2c2ded20f8afa17e5688319569a"],["/categories/Swift/page/2/index.html","edc0bb6540b8715272d537f933732881"],["/categories/Swift/page/3/index.html","807e0e46859831d5982a11b742af6e13"],["/categories/Swift/page/4/index.html","281095e63d9ce3e4ec2e8dfc42e27ce9"],["/categories/Swift/page/5/index.html","497d025226119ca1acec4eb662eab9f8"],["/categories/Swift/page/6/index.html","ad0f67c7888b96cc9551318230a5e2a2"],["/categories/Swift/page/7/index.html","a454722f7a0df022c7d09474f55a3fbd"],["/categories/Swift/page/8/index.html","ab21a55e9e28a4de2b15760c3d892b82"],["/categories/Swift/page/9/index.html","939a0b8cc6b435d4273f3533cae0321d"],["/categories/Swift5-2/index.html","be57f6c9cc1b4588f69075d1e76b7220"],["/categories/SwiftLint/index.html","21ed783ea19e314e76f7c4e97b480716"],["/categories/SwiftUI/index.html","7d3ce72f0114eae49f8b213ced653574"],["/categories/UICollectionView/index.html","2fb9cd963deff3d78a73b55d988b6879"],["/categories/UIImagePickerController/index.html","f6365be29b2d9569f8fee16d4e5a1281"],["/categories/UIKit/index.html","100260238cfa1c5857ba1cbeb8807315"],["/categories/UIKit/page/2/index.html","4792f510ecce1df4b369e13a21b4b4ba"],["/categories/UIKit/page/3/index.html","86d7d39bc1edcb37583cc78bc74d68ff"],["/categories/UIKit/page/4/index.html","8040c82cc205a6786595ebc942443f9c"],["/categories/UIKit/page/5/index.html","619f4731e4d125e087ca4f8258cb50c4"],["/categories/UITableView/index.html","83b31cd002e6cd7d3b14cb3704d90a60"],["/categories/Ubuntu18-04/index.html","005bec5af1852968fab3ca8ad6e09c31"],["/categories/Ubuntu软件源/index.html","f55b6d41697f5f42e196716428b26920"],["/categories/Uniquely-identifying-views/index.html","65af9247b50af2bdf47f892c807bb733"],["/categories/VIPER/index.html","024a0ee424f477816a62c694d5f6aad6"],["/categories/Vapor-4-0/index.html","ec5a999e826c3ca4e987a870baf3e292"],["/categories/Vapor4-0/index.html","fb4846241ac028e68a667523faa8f144"],["/categories/Vim/index.html","bbc4652b10780d8c4e58207d83e89195"],["/categories/Xcode/index.html","546ac5b888125469abf4a1537c4e0532"],["/categories/appleOS-Networking/index.html","4fa5cc32c497523efa6377aa4c4164dd"],["/categories/bugly/index.html","09977ec2935aefb5fea7286005f70fd6"],["/categories/enum/index.html","a8f5d72b601fa99814da91ca64d1f203"],["/categories/git/index.html","d5c70d122d66d4ff96e4c446d2e35d9a"],["/categories/iCloud/index.html","3fe7c218a4607e61a3eebb9cb5b59e9e"],["/categories/iOS/index.html","6f4af6b7cb0c493664a632cf9f3aa4b6"],["/categories/iOS/page/10/index.html","803052011f9b82c101ec07b1d5f026c5"],["/categories/iOS/page/11/index.html","fdfcc2bddf4661b4152153c0537fdf40"],["/categories/iOS/page/12/index.html","ed2ccec645e24f462da2043f9880bd4f"],["/categories/iOS/page/13/index.html","c68daaaabebaa707adaffd06b627ead5"],["/categories/iOS/page/2/index.html","ed3ffbafa0777c01c6fb9a763076f2ce"],["/categories/iOS/page/3/index.html","bbcabee48e634a818f2a7655e32c84ca"],["/categories/iOS/page/4/index.html","ddefa09fe8a3f38b63704b81db38eda0"],["/categories/iOS/page/5/index.html","d332b2ca6f11babef882cdd5e331d058"],["/categories/iOS/page/6/index.html","67b003edc6188e513289c76e1afce683"],["/categories/iOS/page/7/index.html","452813dca6cc39fc640a4026788a2132"],["/categories/iOS/page/8/index.html","bff6fc9cf6aee9feaf4c7bd572767727"],["/categories/iOS/page/9/index.html","3e4eb3ee25a87950c5ea9b23c52db515"],["/categories/iOS面试题/index.html","a36bdaf613a396ed4b5496934a40b48d"],["/categories/index.html","a10c0c03a441a4b8f1d4cdf58cbdef50"],["/categories/random/index.html","83dc265de71236b2f1e218e9fae9de9c"],["/categories/三方类库/index.html","31194a4485859aa9a5c85bc1c909dbdb"],["/categories/函数式编程/index.html","39db35d301e0b86dfaea7aba5b3038fa"],["/categories/子类化样式/index.html","754dbd57f32a627c46074f93562d810c"],["/categories/开发技巧/index.html","b9c3629da5629dcd4191814016de58d6"],["/categories/开发记录/index.html","b718f1ea90beb5c4217abb2d69522327"],["/categories/技术支持/index.html","d16a800c244307c5fa89442a00027d96"],["/categories/架构设计/index.html","48056485752920c8416d70c37f33da82"],["/categories/测试/index.html","64e6de9fd016d4c39073647b63d864cd"],["/categories/用户体验/index.html","04a0b1377e98a0a4588b7eb4606b02f4"],["/categories/用户协议与隐私政策/index.html","1c0f997c97b14873786ef11f7c5b9817"],["/categories/设计模式/index.html","2a23b5ab6f8f834f4c8133529881b26f"],["/categories/设计模式/page/2/index.html","932280e08d0c82f2b52bba3d31f36777"],["/categories/设计模式/page/3/index.html","5766052f61d24eede7e192949661a5a6"],["/css/main.css","559d789ff765bd49462bd9e3e91fe7ef"],["/hello-world/index.html","5426e5000a7aea3f37764fe81ea9bfbd"],["/hexo部署失败/index.html","cabebd79d0b673da715b402b6c69f503"],["/iOS VIPER架构深入实践/index.html","64b81910346d23c43d0d5bcb1e5765f9"],["/iOS 自定义视图，输入表单和错误提示/index.html","90d692a1b5308abcb230782b365741a1"],["/iOS如何使用iCloud文档？/index.html","2d52ba72af027743b38ad25fa4ae1593"],["/iOS子类化样式/index.html","730e5f9f748e375fb27e96a96912bb2f"],["/iOS开发记录<一>/index.html","c4557798deb4a94c92749cc841f25efc"],["/iOS自动化布局编程/index.html","96948b58452234a6834b8caca7615bb0"],["/iOS自定义转场(By Swift)/index.html","bd047c63f7f1cbd0b65ae54321492f0d"],["/iOS项目架构：使用VIPER/index.html","ad2035ead32a013ea431b933d2197701"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","cd7905480865da0f07f59a98f13d8b93"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","4d364aa39274ceb2182b38ab6de713ce"],["/page/10/index.html","e0cfd469f8dc6519fb317bcbe2b2d12c"],["/page/11/index.html","82da6238e1877c0c6d091867849f5f15"],["/page/12/index.html","92ed39f8369bf0e42247ed59ee089359"],["/page/13/index.html","442180ecdaabd150a07a799d3d09c5a3"],["/page/14/index.html","9e0f5e44bd0cbb003c31e51adb45efeb"],["/page/15/index.html","9e61f5a8fcb4d6dc1325c0fcd0f5b571"],["/page/16/index.html","45618a78ac9b1f003653d2636384feed"],["/page/2/index.html","853e703c6377583672ec51573fcee210"],["/page/3/index.html","65b8aa96a30cd1822f77eb8b5dffa378"],["/page/4/index.html","d99ed0c9db6c443c21b141f16fcd1385"],["/page/5/index.html","69d17935d7add1f19abf72a5883ebd8d"],["/page/6/index.html","311ef874cd0b68b240479b22ab9a3fd4"],["/page/7/index.html","b8adc127c940a178b475e41e368fdedf"],["/page/8/index.html","4e93b707ebe2ac11022c20732916afa4"],["/page/9/index.html","82fa9eb240a1798df91121d712082f45"],["/schedule/index.html","666b516c513772b51298a112f8876389"],["/storyAppPrivacy/index.html","35a426a5bf1449596b685eccce044c65"],["/sw-register.js","867244595a72e99f7add6037443f86f5"],["/tags/Advanced-Classes/index.html","e34524226c4c716fc9e85fc37e9016f2"],["/tags/Advanced-Swift/index.html","7caf310b97113899d76638b0a75fe57e"],["/tags/Advanced-Swift/page/2/index.html","26c777a2526e995d132c2e708bdef67a"],["/tags/App-Architecture/index.html","5e8367e9cc4e96060fd7be50e319488f"],["/tags/Array/index.html","5d9a37b97aba24336c07fe068cea66d8"],["/tags/Arrays-Dictionaries-Sets/index.html","91febf5772f1509f118ecf8081d921e3"],["/tags/Authentication/index.html","d12fd85a61078ba34375ab47b9cdbc8c"],["/tags/Build-in-Collections/index.html","6b785db1390824945f7bde76c573bbd3"],["/tags/Building-Your-Own-Types/index.html","94e2fdbb8acbc5031dc7dcbb687641f5"],["/tags/CMS/index.html","c55c9580bcc4683331ab671379a50ab5"],["/tags/Classes/index.html","6bda0340b6e46951dd19f138f70fa85a"],["/tags/Codable-protocol/index.html","9bc2ff5bcfcac0ff5b5deea06900b41f"],["/tags/Collection-Iteration-with-Closures/index.html","ea7aa0109997af5aaa897cab2222df6c"],["/tags/Collection-Protocols/index.html","d8d0d3be84972f329580517b76244b45"],["/tags/Collection-Types/index.html","25de46d3e123ede80e047e7f799011aa"],["/tags/Collection/index.html","c95e21e6d5ba2b2c14e2354ae1b2be96"],["/tags/Collections/index.html","3b2b20999f65720d7269eda0c23df79c"],["/tags/Combine-framework/index.html","4eec98857f42434fa531d49298c924aa"],["/tags/Combine/index.html","eb73095ae3ea940eaf1e7a359a67fe67"],["/tags/Dependency-Injection/index.html","b4be0c87264b2ed65f160879cb1ced63"],["/tags/Encoding-Decoding-Types/index.html","5687f1c618799001eae6a7603d7e6658"],["/tags/Encoding-and-Decoding/index.html","c9a92a29b774dfef0cf98b3108acfeeb"],["/tags/Enumerations/index.html","caa04729d2386a4592e8c199ade39fff"],["/tags/Enums/index.html","c04c07a7ccac6288d388d5b42f134449"],["/tags/Error-Handling/index.html","d76480f34dddcfa7dcac5b9ddc0beac7"],["/tags/Functions/index.html","b523e917da6f9e4d87c6d208daf22092"],["/tags/Generics/index.html","fb924d1a7755424065b5905dc6fb5572"],["/tags/Go/index.html","5ec9b648e4b2d0c48e9f9a0e7c70d03a"],["/tags/Grand-Central-Dispatch/index.html","005d3d3c82bf8ee46baa8adb7104ea6a"],["/tags/Hello-Vapor/index.html","d25c520693acee9804d8f3e78b93e5e9"],["/tags/Homebrew/index.html","a3baf983aa6348d07c5b727060819223"],["/tags/Interoperability/index.html","bc028b520cd1d8392bdb1d5182a63b2a"],["/tags/Introduction/index.html","39f366b6c8cfb8c34f459036e4685db9"],["/tags/Leaf/index.html","a60de45637eeb23709484eb058b94cb7"],["/tags/Linux/index.html","00734dc8c4c39fef9bb29d316c593b5e"],["/tags/Methods/index.html","9feb73342e19291a96ca6e953f36b14d"],["/tags/Modules-And-Hooks/index.html","3366858554c13df787530e3d536c674d"],["/tags/Optionals/index.html","d5ac37970eceb85adab3981bc1b3a6b0"],["/tags/Promises/index.html","365d0e6401049ea69a2f018af3d53028"],["/tags/Properties/index.html","480dd845da574911d37611f94df52a48"],["/tags/Protocols/index.html","3adff33bca2d5e446682570ddfb9a6cd"],["/tags/Result-Type/index.html","4eab86e6d0c9fb5ace5e7f91cb5a51b7"],["/tags/RxSwift/index.html","6df6f5fc375a2f7d5261dd5aaafcc8b5"],["/tags/Server/index.html","97e4eb6cd2f8048a59cce539935909a2"],["/tags/Session/index.html","bb5773c3d9531d20391127b2047c8553"],["/tags/Strings/index.html","6e8c792472b2d6b2868e277b637ece05"],["/tags/Structs-and-Classes/index.html","c954bbdd748abbde55ab76789691141b"],["/tags/Structures/index.html","05f6b35b17b2957ae0a507126e9a5a3e"],["/tags/Swift-5-0/index.html","f730763af1661a62d1a4b78514ae9cdf"],["/tags/Swift-5-0/page/2/index.html","c9071046250a370d171999a4bde26d99"],["/tags/Swift-5-0/page/3/index.html","513e770e9e9aa781994bcb5e9aff4d79"],["/tags/Swift-5-0/page/4/index.html","6843fe75e813cde1af628c237ef81a0a"],["/tags/Swift-5-0/page/5/index.html","ed35156267f08cabdc2ed01f38292fe5"],["/tags/Swift-Apprentice/index.html","bfedca3ab4d7094113fcd3d585cd5252"],["/tags/Swift-Apprentice/page/2/index.html","0459682c530f8758cfd4a67271de1406"],["/tags/Swift-Apprentice/page/3/index.html","3b170087bff532a36e702538e2ef0afc"],["/tags/Swift-Package-Manager/index.html","f005d0670cb658a8146dea1b874fd358"],["/tags/Swift-源码阅读/index.html","1180968edcb0e71b6952f47b51cb3a60"],["/tags/Swift/index.html","828b5b4c1b47012f86b2035f88ceaa8d"],["/tags/Swift/page/10/index.html","691870606c56245f0f3a657a27f0e689"],["/tags/Swift/page/11/index.html","844121d8f56c88ac292f2ee3b1637594"],["/tags/Swift/page/12/index.html","c43655ff4755e8e7f9b306d9ceeb44ae"],["/tags/Swift/page/13/index.html","9314e87a1dd949ffaee4ed8f725e06f9"],["/tags/Swift/page/2/index.html","d7193928762294df5abea35fb0de165c"],["/tags/Swift/page/3/index.html","a6c7d07489f60bc4b2dcf6e1f6a0dca1"],["/tags/Swift/page/4/index.html","5af1a8809d7cfbae467926e2a59f05f3"],["/tags/Swift/page/5/index.html","681babb4cd2490475d6ef6062732b306"],["/tags/Swift/page/6/index.html","cd96512d9752433913fa235f79909499"],["/tags/Swift/page/7/index.html","6c97ee6eb8618b7ab301e665f75da254"],["/tags/Swift/page/8/index.html","70512c4563b4b227391baaeee4a173f6"],["/tags/Swift/page/9/index.html","13f8f0e87ee021d2e36ff0f884ff9ecc"],["/tags/SwiftLint/index.html","8149e2345046668a93f8aa57fc06699c"],["/tags/SwiftUI/index.html","1e5210634d4d7ebf90ae2ec9f135f1b5"],["/tags/UICollectionView/index.html","cd2cf2b56fcb50ed288acd8cda5ebe20"],["/tags/UIColor/index.html","85ddc003cbbc4517a80fe154f43987d5"],["/tags/UIImagePickerController/index.html","723bdfad1950c5d23a9bb3226f16e103"],["/tags/UIKit/index.html","c6c2434cf2b50701ab5a177457bf0b7c"],["/tags/UIKit/page/2/index.html","477313c0c5f55c9d8a5b466c062f6f75"],["/tags/UIKit/page/3/index.html","6c897c5beed4f415627710c2f030e855"],["/tags/UIKit/page/4/index.html","7076dcdaeeb83c6e66f1b2bf67c86c03"],["/tags/UIKit/page/5/index.html","4148a728f97c9663423c5d58a3d10c15"],["/tags/UITableView/index.html","561f824d50edaf3b2f75c437b77e0d5c"],["/tags/Ubuntu/index.html","27cd996d70a9e60f7031c015ed237bcb"],["/tags/Uniquely-identifying-views/index.html","5f9dfa83ebb8d99a6da8bf58b67ac721"],["/tags/VIPER/index.html","55782f0922faeea946adc93950ed525d"],["/tags/VMware/index.html","60786a2aa255b2fe3edf4d113531c1e4"],["/tags/Vapor-4-0/index.html","0268dde561cf64e26b16c4c841ecf260"],["/tags/Vapor-初探/index.html","0f4cccecda2faa9e1225ef1f1a69a137"],["/tags/Vim/index.html","e18d3cfd53374d3dea5b4e43e3cee641"],["/tags/Xcode/index.html","c398329629c295cf94d76a9ce06ff230"],["/tags/appleOS-Networking/index.html","35aa47910af32f127760f99003cd13b6"],["/tags/bugly/index.html","17026eb52272ba9a5e3328a4945f092b"],["/tags/enum/index.html","3aa2f21f5c5b8bbd41a8a40a558adf99"],["/tags/git/index.html","1bce6d9efbc68ab0e2c3ad83c42b15ac"],["/tags/hexo/index.html","b6e6b7dbd00ce42dfaf599e669735867"],["/tags/iCloud/index.html","5a81071dfdd012e66d513d9b31475b3a"],["/tags/iOS/index.html","e839a609208984908437c2f462cc3af8"],["/tags/iOS/page/10/index.html","1dc2ced8ab6726a2f1d71dffc23eab2e"],["/tags/iOS/page/11/index.html","d14daf804d83d88ebd60700dfcb9c2cd"],["/tags/iOS/page/12/index.html","e38060a9faffd37dfca72f8152944ac8"],["/tags/iOS/page/13/index.html","8093eaccca75433712cee119eb28f502"],["/tags/iOS/page/2/index.html","a35d0f9d0e80ba06408f350a7007d8e1"],["/tags/iOS/page/3/index.html","8b3c2e9163ced097d7143d12788a1467"],["/tags/iOS/page/4/index.html","bf67371d05f6c2a99590b9bdde19a38c"],["/tags/iOS/page/5/index.html","612ecb0b28dbe8abe00b7d01c584a438"],["/tags/iOS/page/6/index.html","f30547098cd692cccdabd85b87b2458b"],["/tags/iOS/page/7/index.html","6345cecbc59f9e147405b019a7439562"],["/tags/iOS/page/8/index.html","5a8d21971925ec1ce0e2e65234475186"],["/tags/iOS/page/9/index.html","4425d71108f3a53d5025b24a6d4294d8"],["/tags/iOS面试题/index.html","0661ceef96158b97bcd0cae7d63b8a60"],["/tags/index.html","13eeb13d5ab1fb08d911b8b86e8a38fb"],["/tags/non-optional/index.html","435d6ef071f601432e8e6642aa1600fe"],["/tags/random/index.html","64de1c5cf46decbacf1a8274fd22cf06"],["/tags/transition/index.html","8cc5a85ac1f25a4a6d04f08a911aee94"],["/tags/三方类库/index.html","d9c9ea1aec9a8b6810be6f0da4700036"],["/tags/依赖注入设计模式/index.html","dab0b1d14edd5a706ccc6d6043e5e6e7"],["/tags/值类型和值语义/index.html","330bf3347b4f04bfbd2a33a6cf660b5a"],["/tags/内存管理/index.html","2ba748ca10c35103108ebedbe7ca93e2"],["/tags/冒烟测试与回归测试/index.html","c82c2186c34463e3cafac300e3fd9d68"],["/tags/函数式编程/index.html","83275f0922c6c7040589640e400efd82"],["/tags/创建博客数据库/index.html","4940d7a81bb2597691a5c2c0aff8a1b9"],["/tags/初始化模式/index.html","df54fc34adabe2fb8453743966c21a17"],["/tags/单例模式/index.html","ef348e4b14c1cbfb5fac460cd5d6ca49"],["/tags/原型设计模式/index.html","e532bc250c62412b3bd1c8db7184a78e"],["/tags/命令设计模式/index.html","0628ce6ae6b2b764adfd0045b54f163b"],["/tags/基本控制流/index.html","74479f55c5de1c90e0b3d7cbc85ebd03"],["/tags/外观设计模式/index.html","24d0c8600a3f204f67ab2cd0e035742c"],["/tags/委托设计模式/index.html","df8c825eeb91a695072702dc49448c76"],["/tags/子类化样式/index.html","eb4f4cf603ca3c3e2ac34ed731c8dd88"],["/tags/对象池设计模式/index.html","84a82acc63c4d9428f77f9099550497e"],["/tags/工厂方法设计模式/index.html","4bce7b97bf61da3f3d557b430629462f"],["/tags/工厂模式/index.html","e85cbb849f36d396f69818d8a3e93f36"],["/tags/工厂设计模式/index.html","cdca6ccf504a92826f7883abc4b1bdd7"],["/tags/开发技巧/index.html","9b8bb63d871be767faa16ee82492d150"],["/tags/开发记录/index.html","de07bf8a7f7b1bb7e0a05a6c50710a0d"],["/tags/懒加载模式/index.html","41dbea2373b73840cef1c887b6508ffc"],["/tags/技术支持/index.html","98be9166feab1a250eb7ab704c7edb81"],["/tags/抽象工厂设计模式/index.html","d31f2ceec6f08b6a597020042d9ff268"],["/tags/构造函数/index.html","ebff302f33905e0be23636d60c8e7f1e"],["/tags/架构设计/index.html","52d735a1323e08653fca8adad4163458"],["/tags/模式匹配/index.html","e1a3b1eef80879f5f2d041f3dd7ff5e0"],["/tags/生成器模式/index.html","c52a16ffc9b7a696512f7d608fba20a2"],["/tags/用户体验/index.html","525efe570a14bb2cd9f1a2ac169d4bd4"],["/tags/用户协议与隐私政策/index.html","2c6bc6cf81592487a5b34e649e42dc02"],["/tags/类型与操作/index.html","4a6cb7b0ea886bb1a6ec217933813748"],["/tags/自动化布局/index.html","ced9a397a21ae52c9979b6b4ce4d80a0"],["/tags/自定义UIView/index.html","c9179068b2e561108200f61f5b890083"],["/tags/自定义转场/index.html","5ce50022bba0b69e204a11468bb5fe54"],["/tags/自适应布局/index.html","20058933d41130599d7f428d9041b71b"],["/tags/表达式、变量和常量/index.html","86a6e9edb5c665719e7e76b934d36373"],["/tags/设计模式/index.html","af93c85c18c5e29fa86d1985960e4d69"],["/tags/设计模式/page/2/index.html","e893704f3a4cec94163f19153a84197e"],["/tags/设计模式/page/3/index.html","e23c2632a1605e46048cd7fe26893ea2"],["/tags/访问控制和代码组织/index.html","ec59afd91f338fdb44ad7423b78b9ead"],["/tags/运算符，下标和键路径/index.html","161241e0bbc9187ca39c31bfea5d3537"],["/tags/迭代器设计模式/index.html","8212552d5c8939474fbffc78ba6f02d6"],["/tags/适配器设计模式/index.html","041ea4bd3f3ede5c1b65be94c32c9009"],["/tags/错误处理/index.html","58aa9896fe375d8942f0796f093d3c5b"],["/tags/静态工厂方法/index.html","418a9d195b90e61fc85dfddf75a47318"],["/tags/面向协议编程-OOP/index.html","8c71e25e1e67fb0c3f2167fa7b4f1468"],["/tags/高级主题/index.html","1795ad2760aafadd294955908a5a8672"],["/tags/高级协议和泛型/index.html","8c55ca3830957985495e040be2c80078"],["/tags/高级控制流/index.html","361637abfd0b311d66eaec7a98e0408f"],["/为iOS应用构建输入表单/index.html","034aec329970817edec6748fade7758e"],["/产品开发的幕后花絮/index.html","7dae679e4441e006885fcb72d997c535"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","c8dd64703788312f6e74fcd7e413ebae"],["/冒烟测试与回归测试/index.html","ee1900574b0fb1bfec2879ce4b5cbfb0"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","be785bcfc356307d9986f6bcf6b7e164"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","8c0cc5e41acd43dc0900ffeb0bb70f17"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","427a27f35bdf92014d63250da7495939"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","e99892879ae49c6837d1a5f383e5b777"],["/在Swift中创建自定义集合/index.html","90a8d12c13ad7e91cf26d95a6f5e9b07"],["/在Swift中处理非可选选项/index.html","1d01a0afa27e8baa3937bbe8b73a1950"],["/在Swift中生成随机数/index.html","00c68902a4c36d96975ef265c8dae5ed"],["/在Swift中重构单例模式用法/index.html","fe4449b893c6803d4046a1cb1e6d34ef"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","c642b85ae7a6c391fa0f41a5ef41e473"],["/如何为VIPER编写服务？/index.html","d57e3fad2efd93d2d50391319e467c6f"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","a6a9ce5acd55fc01eb4f7375f19c5328"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c9c5b27e35fdd417b496c42f8cf87aaa"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","cee3c6b6d2b2e9eb795915202c7b320d"],["/如何使用VIPER构建SwiftUI Apps？/index.html","ba14240edf74ab8765610410662bd038"],["/掌握VIPER架构/index.html","85906cbe65411f5345112654ae3c75b3"],["/揭秘 WordPress Hook 系统/index.html","6769ea171cecfc48a54d9efa38bd044e"],["/比较工厂设计模式/index.html","6e84d65fef230827dc5495307848707d"],["/深入了解Swift中的Grand Central Dispatch/index.html","e71d52e9dc7b7129aa200dc35a196af9"],["/深入研究Swift框架/index.html","effd00563a5246bd2a6a3f366cd91a1b"],["/美豫直聘技术支持/index.html","0665669ff0772d26d74962aff38cf0a6"],["/美豫直聘用户协议与隐私政策/index.html","775ce32000df89001a082b70a3da670d"],["/适用于iOS开发人员的VIPER最佳实践/index.html","7c7323ad1c09d3ab1d4fd9d641ee85b1"],["/选择Swift而不是Objective-C的5个理由/index.html","8c7b4c76139153bc386996c4b3d7581f"]];
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
