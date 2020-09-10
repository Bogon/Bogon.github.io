/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","89a5fb6b67da8f398260c71979669f48"],["/2020年iOS面试题总结(三)/index.html","2a565bf5bf477480204e1299ffe52b70"],["/2020年iOS面试题总结(二)/index.html","937280be2d87145de34bc9fabdf55775"],["/Advanced Swift系列(一): Swift 简介/index.html","2304e31f229670ee68c102a9d400c4ab"],["/Advanced Swift系列(七): Strings/index.html","e2bf6c11267d484352511c459d0f4891"],["/Advanced Swift系列(三):  Optionals/index.html","50db8ba7c679f19e494f3c678a8a3dd3"],["/Advanced Swift系列(九): Protocols/index.html","635b0ebff5837aaaa0abf34eb30b0bfc"],["/Advanced Swift系列(二): Build-in Collections/index.html","0f024030a36a94b67fe91997c605f7f0"],["/Advanced Swift系列(五): Structs and Classes/index.html","1282664e6bedecfa311775962fd001ba"],["/Advanced Swift系列(八): Generics/index.html","626aa95ea4190d143f6bef4ac751535b"],["/Advanced Swift系列(六):  Enums/index.html","96883825cf5a9ab94d510525143e25f6"],["/Advanced Swift系列(十): Collection Protocols/index.html","7c5f46ea4b08f3ee42f2cff77a9e27c6"],["/Advanced Swift系列(十一): Error Handling/index.html","d0db54408784060ba972463b93a5e52f"],["/Advanced Swift系列(十三): Interoperability/index.html","0ea98d23baa0f443cd1da30aa9bbfe51"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d07d9efbc6ebf6254cfa556900aa292c"],["/Advanced Swift系列(四):  Functions/index.html","3c71762e259b5e47a2eee51d404e6980"],["/App Architecture系列(一):  简介/index.html","0917ac10a688def41f1b45bb36b2db5f"],["/Functional Swift 初探/index.html","770ddc265dd71b04886927d38e3d8887"],["/NSCODER和SWIFT初始化/index.html","54deb07d80e3eabdc9ef690bd4191324"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","e3800316f82412200895c7a05abee553"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","90e859d600b124ad826f2333d9954c00"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","bfb3c8a92c2c725629cae4299ff56011"],["/Swift 5使用UIImagePickerController拾取图像/index.html","58596f24a6862527391e0dba4570ba8f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","39d363840f5596362c2ce64e2e0aa1a0"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","22ee82454e8413aeffa44e7efcf0d63e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0f44319b7e876d2bed10d75a2dabea5d"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","a544441dc7a11f7a22c404d8d1f06e3e"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","48c0cd17bc61a82456d6a80480449652"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","20d4a1205157cf0a6dc791842c6c281c"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","90f04522abdb10f267bcb9eac2a7a77f"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cbc5a8d80a67456b996efb846ef7768e"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","e8597e761365f954afb2cab5492d49fd"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","f38dcd30410d48c10fa46307714ffcb5"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","495d7f5be32ed0413d9c1ba003d008b9"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","81a5b785183e72225773df704733ca87"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","a9cd3f51a43011a2e1f484c2b02477a6"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2cc45f2f1658daee008cf6f2a5576a1d"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","554c36aee807a000ea507c03cf0a54d7"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","0eb5c045bece72c4acbd3b37629cf4fa"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","3bcd5b99ee753fc4be4d3fe4fa134c72"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","90549d637d79d6473630b994752bd662"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","2ff14273853ac7bfc4fe0ba11dfaa9d1"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","ab559f926861318b41a19cf9bbee1b91"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","f1c0b2bb1223b60ad0d3130ee82a49fa"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","824bb612a0ce9be71a3b80e3581c0653"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","178a6a341c442df97544609984238c2d"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","a69020317b06b7018f45741e56de46ad"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","bc4e38f0927a312c43ceb57766a0b9e3"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","28fcb512486c342d925808fa4572cf96"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","c73c8131d5cd7df2cd3b31621466df88"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","4ad8ea737a849c5fb00d0c881fb5c02e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","8613be608fa79cbfb916441805ccc16c"],["/Swift CompactMap vs flatMap：差异说明/index.html","0f184308bcd2d2015f41e5365a9c1304"],["/Swift Grand Central Dispatch 深入实践/index.html","bdfe67e797098f6d586e5deae0e1df0b"],["/Swift Lazy属性初始化/index.html","0425d5f6fb2229d2ea4ecd227fbbd9e7"],["/Swift Promises 初体验/index.html","7839b41964dc99888d6127dcc9b82ecd"],["/Swift Promises 探究/index.html","948599ff0a5c372ea04bbca73aa2ce76"],["/Swift UICollectionView使用指南/index.html","755b5f5192e53e51a790d926ec22bc1c"],["/Swift URLSession && Combine framework/index.html","a7ffc79f43cc2df6ca860a237d028be1"],["/Swift 唯一识别的视图/index.html","7e5295d1d3c7d92d6ce399a78622d0ba"],["/Swift 如何学习现代UIKit？/index.html","7a08b0e772e232fff49cf6b20a84cd06"],["/Swift 用 compactMap 替换 flatMap/index.html","e9cbdc923b0139a33eada9eef862ff2d"],["/Swift 选择和播放视频/index.html","a32ee11cef1c4981a040cb76a450d973"],["/Swift中UIColor最佳实践/index.html","6f9ab2838b143032bf7c281859a7a1a6"],["/Swift中快速简单的工厂设计模式/index.html","8a180f0d5610f1189e1d28e0e792fe18"],["/Swift中构造函数与静态工厂方法的比较/index.html","fc0e46e34062f70bbd3985921aed4d2c"],["/Swift中的UITableView教程/index.html","bf7efde18e5fe12fa4f7d907f77970fb"],["/Swift中的懒加载模式/index.html","de9a3be5e5d5577609c0697c7c7dc422"],["/Swift中的模块和挂钩/index.html","5ec015ebfd87cfdc1e14bb3a7f9034a7"],["/Swift使用布局锚点添加约束/index.html","348cb0c06553b2144b0972a9a0c3e73d"],["/Swift依赖注入设计模式/index.html","7a63032a1e379b2e21918af7dd0ef059"],["/Swift关于Dependency Injection (DI)/index.html","1c44c3ddba006ea5c5bde0478c8f2593"],["/Swift初始化模式/index.html","dc11341d389bbe2410cae0ae209a6b2e"],["/Swift单例模式/index.html","2fffe1e156281c4d2900187e88921095"],["/Swift原型设计模式/index.html","b36395edb0b75433cb36b81426786ba1"],["/Swift命令设计模式/index.html","1a21bd0865ba0e2377dc9b01bf70ae33"],["/Swift外观设计模式/index.html","f32ad4191200f74d741e5e804b6560e5"],["/Swift委托设计模式/index.html","f10cd618d6f1c3903e900fe42fb69fa3"],["/Swift对象池设计模式/index.html","a8e772c7865bffae2693db834d284ae9"],["/Swift工厂方法设计模式/index.html","86020433fe96c89880b934d3488b4275"],["/Swift带闭包的懒惰初始化/index.html","86d460ff88b50fdedb45757f95818140"],["/Swift抽象工厂设计模式/index.html","097532233e5962dd195981dabacd24be"],["/Swift掌握iOS自动布局锚点/index.html","d80510820f02af2bd1d4bb0c9c0e8d02"],["/Swift支持旋转的自适应单元格/index.html","1eee3477e61e11a5e371e22005ff01a2"],["/Swift枚举值/index.html","77371cceb57c58db199e52671a829a80"],["/Swift生成器模式/index.html","114bbfe4cda7a41fd144d02658a7ab21"],["/Swift结合Xib文件自定义UIView/index.html","51d7ff5f25d63cbad287f606dc92e1bb"],["/Swift编写的20个iOS库(一)/index.html","5d6eded0dace807efc8b729afb7115a9"],["/Swift迭代器设计模式/index.html","2e46146a4134ea47e1e1554864611317"],["/Swift适配器设计模式/index.html","a17711f7f3065cc529db6ea04b908ca5"],["/Swift静态工厂设计模式/index.html","c70eb50df8a2e7f6c33ed3da6b44006a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","4711eddaec67a5ba274a61c35888b14c"],["/UICollectionView data source and delegates/index.html","69323b8d13384bd61f516231b7e96e66"],["/UIKit初始化模式/index.html","7ee1893eab8c45aa75dcd2ef2a6cf2e3"],["/Ubuntu18.04替换国内源/index.html","5a939995736b40a1a73c24c261c98467"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","763ef7c7f03f985ce6e0b00dff26d982"],["/Vapor系列 (一) :  Vapor 初探/index.html","d4d6b48cb1ec5b176240ecaf4ee4c309"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","d7944ae032c2b6be346e9961d780de38"],["/Vapor系列 (二) :  Hello Vapor！/index.html","8b4279a522789e1a90fa3c38199ff7b9"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a136456c52035289a74d0b9336303c6a"],["/Vapor系列 (四) :  创建博客数据库/index.html","7ea74185137dacaf8e35fbcac2b9ff2c"],["/Vapor系列(六): 徒手撸一个CMS/index.html","7e4932680562ad24dbeb739c2513ed36"],["/Xcode扩展/index.html","4c3e08685f38a28be3788564a4df1f0f"],["/about/index.html","10806eaa37c80cc1f3fa9683d371d915"],["/appleOS的Networking示例/index.html","462a7df48bbadadc9fbe9cf26f3f8337"],["/archives/2020/03/index.html","90de94e396cc7631042ed1e18fb0f303"],["/archives/2020/04/index.html","2d216e14f816765356b9e44bda1648f4"],["/archives/2020/04/page/2/index.html","d445d920a431c94660cb281182f2a899"],["/archives/2020/04/page/3/index.html","41c06d8d6947d2a03298acee1499a77c"],["/archives/2020/04/page/4/index.html","f45526df75c6ed9ed69e33c37199de1a"],["/archives/2020/04/page/5/index.html","1778f4f26ab0abe0183ce921859347b1"],["/archives/2020/04/page/6/index.html","42e926138572f318725282230586634c"],["/archives/2020/04/page/7/index.html","fe6f3279bf856c1847a19b20350e8538"],["/archives/2020/04/page/8/index.html","453980c610e9aec25ed9d73e12cd0dd9"],["/archives/2020/05/index.html","31a86ba2b0c59708a77b0a347d0d2ec1"],["/archives/2020/05/page/2/index.html","7c74d3d588e9c9f44754da38ca92ef6a"],["/archives/2020/05/page/3/index.html","d41db31f1218e48a0f3e91f3115c2a2a"],["/archives/2020/05/page/4/index.html","216587983deed9a8b7a3b9388c15d1fd"],["/archives/2020/05/page/5/index.html","5bc970a5d74e1c7f1fcdaf0a77e9f47f"],["/archives/2020/06/index.html","75c4535ddcb761b55d94e9e58ee4f36e"],["/archives/2020/06/page/2/index.html","6620856416a3835993005efe0ab87408"],["/archives/2020/08/index.html","5e0bc1ba9bf2b6b0e7a4296807ebcb98"],["/archives/2020/09/index.html","f37646ce2b1c9fb3e612dcfbacde6f33"],["/archives/2020/index.html","5a70f3598e77e554db34160f60767be5"],["/archives/2020/page/10/index.html","92ef6963f26000ccb6495dc0f688331e"],["/archives/2020/page/11/index.html","5ed8d5d81355aee4cea1ae75b3947906"],["/archives/2020/page/12/index.html","340769d60b8ea7c96ad44370e2b4558d"],["/archives/2020/page/13/index.html","c815770156979b9a62196c2fd394a9c4"],["/archives/2020/page/14/index.html","8dd314ac23b76898193279da1e848b6e"],["/archives/2020/page/2/index.html","c162a9c1d97fd6279954b101863a0cfe"],["/archives/2020/page/3/index.html","38e43a8aa1dcfc159830622c48456a5a"],["/archives/2020/page/4/index.html","e3bdc5f0dc0a3351d51e0566a87db92d"],["/archives/2020/page/5/index.html","344055e3d8e09d42d98a24c9c95dfce3"],["/archives/2020/page/6/index.html","5dec5b815c7307427bc33d1dfa02924f"],["/archives/2020/page/7/index.html","7543cea169f6aa15b67e0f3c0c5d5532"],["/archives/2020/page/8/index.html","16f14605d3369522d26adb4956496844"],["/archives/2020/page/9/index.html","d696f61404e83280c27527d212c1727b"],["/archives/index.html","e8456f3272fce5edfb3467af5769cbae"],["/archives/page/10/index.html","60a7edc090943d4fc0d6eca46868686f"],["/archives/page/11/index.html","c0adb3407f64eeae43b6d34ac1165a86"],["/archives/page/12/index.html","b4ed0d6b1a348f93618e6ab4fc44f3f6"],["/archives/page/13/index.html","3e4c109ba5ccec433627364eeafec452"],["/archives/page/14/index.html","5b3b9e338fff553425d1b754a4adee28"],["/archives/page/2/index.html","49cc8bdc0daeda1b7d654707349ef4e8"],["/archives/page/3/index.html","9e50a06c8f6e3f3fb6a5652c8471ec4b"],["/archives/page/4/index.html","69d6f5f4c3333d0ef654ce7525a0910e"],["/archives/page/5/index.html","82c642cf5d397da61c347b803395a1b7"],["/archives/page/6/index.html","15db81ded9f2250c684b66b24749090f"],["/archives/page/7/index.html","33633a9aebd6535b95b85b54f5eb2d62"],["/archives/page/8/index.html","dc79ec1025753f4aa5b6ec55e48fd704"],["/archives/page/9/index.html","ba3586136d3843841f0ecf2477c19a8b"],["/categories/Advanced-Swift/index.html","0b9ec3e7a222bc273f4f820c773eaec3"],["/categories/Advanced-Swift/page/2/index.html","826f4c597d0f9b6bc0f1709b73289748"],["/categories/App-Architecture/index.html","b9f41958850fd9fe316f4be395383105"],["/categories/Codable-protocol/index.html","503c36ea1047969f0f2cf7c1da87b4fa"],["/categories/Combine-framework/index.html","652faf8e0c50571ac5c89894ab59ff1f"],["/categories/Combine/index.html","0b8dcae8fd6811e03313b8adc8544646"],["/categories/Grand-Central-Dispatch/index.html","84363fe5eca742ae851255c33192fbd0"],["/categories/Hexo/index.html","02caacd6eb42786ee9a7f80f1b46a4df"],["/categories/Promises/index.html","a35bb8d4434be715de0d68c55154473f"],["/categories/Result-Type/index.html","4060e4b94d4b806b88a41b759ff5040a"],["/categories/RxSwift/index.html","cb935e3e8ffdd22ab8ac26047ca920f0"],["/categories/Server/index.html","328e5430052d1b6193433d8e874103d0"],["/categories/Swift-Apprentice/index.html","8596a8930e0ec7a1400d075945f8de8b"],["/categories/Swift-Apprentice/page/2/index.html","98953ebe09323167cac4a90bfd17aa05"],["/categories/Swift-Apprentice/page/3/index.html","309f7b47ae9652e53fecc5b930d805af"],["/categories/Swift/index.html","ad071186641268194bfea372a466538a"],["/categories/Swift/page/10/index.html","8a8b09146151136625162f724ba1bc8a"],["/categories/Swift/page/11/index.html","b8aa9bd0e3a9855f3d745d8f6d2a5e04"],["/categories/Swift/page/12/index.html","0a3a85a537527463d31a6a4f1f0461e7"],["/categories/Swift/page/13/index.html","1d131993b7e31bffcad11ab18a90b440"],["/categories/Swift/page/2/index.html","6fbb83894b1fa1d7204638102828b97f"],["/categories/Swift/page/3/index.html","0abba89a80692b677a6864aee9162e72"],["/categories/Swift/page/4/index.html","46382556dcca54de38f4a82e1aa9e58e"],["/categories/Swift/page/5/index.html","afb8f00fef648f121aea85696d6d506a"],["/categories/Swift/page/6/index.html","93cd2a8dbac37e0f68e94619757c4af8"],["/categories/Swift/page/7/index.html","04605b607bd54a4b5d4a8173ed03e3c0"],["/categories/Swift/page/8/index.html","ba0925c230f0369b522f2629032cd276"],["/categories/Swift/page/9/index.html","2c4358849ebeac6ce5e54cbd6fb63750"],["/categories/Swift5-2/index.html","e20c594924bf222696659dde4e2e72e9"],["/categories/SwiftUI/index.html","8d726756fa9a0d3e91a8db851198677f"],["/categories/UICollectionView/index.html","5940256ba9ec5bad8f534190ab04ac9b"],["/categories/UIImagePickerController/index.html","e7b2a43e45607475476800092f1d9e9a"],["/categories/UIKit/index.html","ab9bbccf630dd31ad51b6d9cc63ecf1a"],["/categories/UIKit/page/2/index.html","247a4ab8fc456a332ad9b4223680f958"],["/categories/UIKit/page/3/index.html","8421f9e300b8a3bac5142f99b64c38c9"],["/categories/UIKit/page/4/index.html","1e999e0781c928dd7d1d79aedddd86b5"],["/categories/UIKit/page/5/index.html","5c05286f7dfe06a9c7bd4903fe178f05"],["/categories/UITableView/index.html","0bf9a7a48d5d0a3c3a749b4245f6c85d"],["/categories/Ubuntu18-04/index.html","01e78523cbdeaa7cfa92b7ddcd032201"],["/categories/Ubuntu软件源/index.html","f4d27131f80f50bf8f152476ab1e8d00"],["/categories/Uniquely-identifying-views/index.html","6faff2d0554bd005d6f3266d05ce8f94"],["/categories/VIPER/index.html","11aceabbb4b13eb37f1d089c298ee7ae"],["/categories/Vapor-4-0/index.html","2b9f124e0be17aaef584a73cb0c85a2b"],["/categories/Vapor4-0/index.html","fef59081c8b15ce3a0855092b51ee2ff"],["/categories/Xcode/index.html","fc7da480377e6f6d8a3068b442f6639e"],["/categories/appleOS-Networking/index.html","9261bb318a578545a9f5a58aa2b027e7"],["/categories/enum/index.html","f3c6e24a015a1ac13ceac228f8834fa4"],["/categories/iCloud/index.html","77b9c06732e764c5dc5c224a6b0e6ced"],["/categories/iOS/index.html","fa6f6279fcfecd8b2963fbd27cb3f814"],["/categories/iOS/page/10/index.html","a0e5eec09fa22ce764fac63daf37b1f3"],["/categories/iOS/page/11/index.html","627d3e2814f642d016da06108f071f97"],["/categories/iOS/page/12/index.html","634ed66f10e7281cb78d8d4eaad9b4eb"],["/categories/iOS/page/13/index.html","b2f0d2f59693e955b6650f1cd65e2e7f"],["/categories/iOS/page/2/index.html","56fe34b71e9bda44d05ea8d4dd2c459c"],["/categories/iOS/page/3/index.html","06e6436ebb34955990eb2de3933d24e2"],["/categories/iOS/page/4/index.html","bacd2535d7d474a9b2c19d45bad2b288"],["/categories/iOS/page/5/index.html","9778593cd748b5f708556d72c89619b3"],["/categories/iOS/page/6/index.html","5391a2268210ef003dfe02f3d09b3bb5"],["/categories/iOS/page/7/index.html","c156033a7f3fc9b733f3f53eabd6cfa1"],["/categories/iOS/page/8/index.html","53bfb6b5ffdda7d4656db867f170a152"],["/categories/iOS/page/9/index.html","dd20890cebd00869d9cde966e041fb2c"],["/categories/iOS面试题/index.html","d55ded991d3391d5aaa4b4ae885874d8"],["/categories/index.html","77b0952a91232f80e69e8f5dec5ba2d2"],["/categories/random/index.html","5fb655905f3c370c3c0eb8c1ed3175c8"],["/categories/三方类库/index.html","3e21e368eef6f2c5021681aeb3dd211c"],["/categories/函数式编程/index.html","572fd92ca16595a06d63a736ac5fb4d0"],["/categories/子类化样式/index.html","ed139b833dbfea4c0b471051b6690d6a"],["/categories/开发记录/index.html","735012aeb24a812dc631874b0b1be5cc"],["/categories/架构设计/index.html","b87e970f45be440589122df47e60c923"],["/categories/用户体验/index.html","2d2ec500c4ea183bd47671968ec6e4a3"],["/categories/用户协议与隐私政策/index.html","92ba4696baee3f9638e99549d2965f10"],["/categories/设计模式/index.html","5b108ab009fcd832716145dc4e2ef405"],["/categories/设计模式/page/2/index.html","803472a30b81c637c7b856090c0a4123"],["/categories/设计模式/page/3/index.html","c9c6d8ebd3d8a4051e3e31cfad6cd408"],["/css/main.css","f2604113f8128bb0fe92ce8b415768b4"],["/hello-world/index.html","536fc093f3d2356560c7613f65f111b7"],["/iOS VIPER架构深入实践/index.html","7c506507cb21594b36cc4ef999993920"],["/iOS 自定义视图，输入表单和错误提示/index.html","f761a7a03aba31616a489aea06e7e22b"],["/iOS如何使用iCloud文档？/index.html","7328fee8cfd381c59aa79a2c1ae00eaf"],["/iOS子类化样式/index.html","5bbf073a9d4f54aae6eb76ae164e5858"],["/iOS开发记录<一>/index.html","a2a21592642e22e6c69bcc0054651e51"],["/iOS自动化布局编程/index.html","48d9ad96362ff5b307918d9ea0eb4ddc"],["/iOS自定义转场(By Swift)/index.html","8a433f2d15232eb2a19568a23bdf2d86"],["/iOS项目架构：使用VIPER/index.html","57220f7537d838f7136daa1fd28470b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","81250f3109ad6976cacb8b26f50070ac"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8eedbcd8b2c08ecc06a159bac95d9480"],["/page/11/index.html","3ad7dfb34318cec13b7851c189b983d0"],["/page/12/index.html","1a78c5191e77ca601bda5692c4415cee"],["/page/13/index.html","772e60aeb3d918e6e6d275b77100df18"],["/page/14/index.html","dac2721d97cdb7d6e2da16e3255dff2d"],["/page/2/index.html","3bdc07a58227943562c0978779a42a91"],["/page/3/index.html","43066af58fd6b4ace147ea4031e7a659"],["/page/4/index.html","2d3ad74d20bd53425dbca1a529e4c066"],["/page/5/index.html","fab30357d997af86a84a5e58a38dfd64"],["/page/6/index.html","458ebb54440153aa3f02213e78398335"],["/page/7/index.html","cf486b10ba143a88bd9015c799ff6c00"],["/page/8/index.html","c75e08a824b3d28f2f48395018d64006"],["/page/9/index.html","f4977c013dbe10c457db30098932f633"],["/schedule/index.html","5e350a97601e997ffd64a2c586883834"],["/storyAppPrivacy/index.html","3ae23b2008755d38a2afed4847d93602"],["/sw-register.js","57207acd5df40a5f302bc83f79b9db47"],["/tags/Advanced-Classes/index.html","b0245cca684e191480632e93190f46af"],["/tags/Advanced-Swift/index.html","b09e773265bfd2e2996b64bb7b252ccd"],["/tags/Advanced-Swift/page/2/index.html","ee7cc6c290bb5379ca85e717d7449c2b"],["/tags/App-Architecture/index.html","acfe39782d29be8968b36d7dfff2f3c9"],["/tags/Arrays-Dictionaries-Sets/index.html","128ce009915136029bf3a240911344dd"],["/tags/Authentication/index.html","7bdb830f4240471a9fbb9831370d594e"],["/tags/Build-in-Collections/index.html","a286f6010f393223f0502b30df9b8834"],["/tags/Building-Your-Own-Types/index.html","7512d06ba6edc7beb5c43dae8b04a605"],["/tags/CMS/index.html","81894f905b18104e4b640b5ce039b184"],["/tags/Classes/index.html","ae369c7af0b9cdc470170b73e82bb17a"],["/tags/Codable-protocol/index.html","14e99a3eb20733c21fa58493d646ee61"],["/tags/Collection-Iteration-with-Closures/index.html","04da491f329790d7c1a4d460b0b1f108"],["/tags/Collection-Protocols/index.html","2158c61e8fd7edde32c55f2dc411b7bd"],["/tags/Collection-Types/index.html","052ec342e33d8e00d5c300592329d539"],["/tags/Collection/index.html","28897b6da40cedefbf3f8704aa9bb2e5"],["/tags/Collections/index.html","7f63e13c2f4a9e28bb75add962a4fdd1"],["/tags/Combine-framework/index.html","9cf4c299d3d5fd0b796c1a3cc05f327f"],["/tags/Combine/index.html","6ce37cc66c17b79cdc3f6798d296c5b3"],["/tags/Dependency-Injection/index.html","88f42a3899a44fe1a771636bd7a5f509"],["/tags/Encoding-Decoding-Types/index.html","aa11d67f176f53014ace3b78371e1ea5"],["/tags/Encoding-and-Decoding/index.html","10fcbd7f23573a89bf8f99600225f224"],["/tags/Enumerations/index.html","c84d304fc04c81b9c54023a4521810ad"],["/tags/Enums/index.html","79fd6d4ae9e39184f9054abb101a7d8f"],["/tags/Error-Handling/index.html","ec311c0bde05975f9c5d30801a4d56f4"],["/tags/Functions/index.html","2642b62832a444f1f1a4233bd8528367"],["/tags/Generics/index.html","bd43379ede1d42893ef8c0d0eecfd6de"],["/tags/Grand-Central-Dispatch/index.html","d4eeb292a7e98acccb0fe8ddfa010f5a"],["/tags/Hello-Vapor/index.html","fc8fa8447f370d671201f07bc7509993"],["/tags/Interoperability/index.html","3f06adbb32dcdbaa556112cf1e83c4de"],["/tags/Introduction/index.html","69ba3cfa737ebdbda015c2529850b6af"],["/tags/Leaf/index.html","b5f17c721f163f5b2a9efb68d311017e"],["/tags/Methods/index.html","c7a3fc65c487d9090b35eca44fee59b1"],["/tags/Modules-And-Hooks/index.html","5c41515a7f55df3c444c96616eb66be2"],["/tags/Optionals/index.html","31fdc89367de303407c47d7520f4772f"],["/tags/Promises/index.html","8fb7258a514dd9dec966e27d077f0b00"],["/tags/Properties/index.html","3cc846b0b2d6afbac83c664853d84037"],["/tags/Protocols/index.html","d60110a4fa05a661b6bcb9f34ab1ff5a"],["/tags/Result-Type/index.html","1dd6355729e6cb95c1d632583b63434d"],["/tags/RxSwift/index.html","813dfbcb2cdf838188a7ae0ff0674a76"],["/tags/Server/index.html","51d5e2491f033e7a7f0e04d67dfbda0c"],["/tags/Session/index.html","4d3e626d8f5b43de99470436acc235a4"],["/tags/Strings/index.html","beb468c1e1f88a63911b9dbd1e7be841"],["/tags/Structs-and-Classes/index.html","3e66223a32b8ff2ca526dc7f462d484e"],["/tags/Structures/index.html","909a1027c60a0bcc1c1a8c2e94874eaf"],["/tags/Swift-5-0/index.html","6305ffeb955c85c051d32a1c95716c92"],["/tags/Swift-5-0/page/2/index.html","93d5371f91ffeaec9856aeabb2e6ea53"],["/tags/Swift-5-0/page/3/index.html","4e1c21cdd92f59bb501e2dbef6d08556"],["/tags/Swift-5-0/page/4/index.html","4a44572b769f5c73092df0286ed9af31"],["/tags/Swift-5-0/page/5/index.html","88993df509cab70a1acc0978efa7d7b0"],["/tags/Swift-Apprentice/index.html","4a57e4326d30b4f9a60f182b5ce21eb1"],["/tags/Swift-Apprentice/page/2/index.html","212a37d4c130b9af6579d70057656ff9"],["/tags/Swift-Apprentice/page/3/index.html","9df449d296b90825140b036f11564366"],["/tags/Swift-Package-Manager/index.html","7863b99777c4db60aacd88e69f7b2dcc"],["/tags/Swift/index.html","373d28d7e4a2045493c1c959af6d5ae8"],["/tags/Swift/page/10/index.html","f57c850f78faab308965d876275678d8"],["/tags/Swift/page/11/index.html","de707f373ec8c7aafdc6375f22908bac"],["/tags/Swift/page/12/index.html","72481e9b7c3483cadcc7ccc5b938dbfe"],["/tags/Swift/page/13/index.html","e67309a42311630600d11ee39d6c69da"],["/tags/Swift/page/2/index.html","673d17b978a35b86172905f218beebb0"],["/tags/Swift/page/3/index.html","5ee66354cb63f6a97a8f0e1918c8940b"],["/tags/Swift/page/4/index.html","42d2904a438fecbf68fc1dae421a138d"],["/tags/Swift/page/5/index.html","3840f181696e916dcf3146e5b2901d21"],["/tags/Swift/page/6/index.html","a43d40562b745ed3b893c51dee36c3b4"],["/tags/Swift/page/7/index.html","d02167a91168aa10cde196116ac50ea2"],["/tags/Swift/page/8/index.html","2dc7c07bfaee9c2475f3b94fc8d2d57b"],["/tags/Swift/page/9/index.html","4d721036c529d50fdd49838870bc19df"],["/tags/SwiftUI/index.html","27afd61ab80fcb0c866cae54447c8a32"],["/tags/UICollectionView/index.html","2659e263e26c880c3fa2caa186469e9e"],["/tags/UIColor/index.html","45dde4e466a33ccaf58664e54f50ec50"],["/tags/UIImagePickerController/index.html","44a005ef096822a9f2099573e6b7ce5d"],["/tags/UIKit/index.html","55ce4bf1f178ced956a8db99e3672c47"],["/tags/UIKit/page/2/index.html","1686976e458435895ee86bb137995a99"],["/tags/UIKit/page/3/index.html","a3c2df56f29b339a9e498d5b0d5cb938"],["/tags/UIKit/page/4/index.html","87804e05d4cf213973ceaa933ca1ee47"],["/tags/UIKit/page/5/index.html","4ccc47c30bc044fa6f450f1a6cf645ba"],["/tags/UITableView/index.html","40c9e360ef90ff7804dd62ba1b6a8200"],["/tags/Ubuntu/index.html","71818b84b5e6962e24eb5fba56b32c16"],["/tags/Uniquely-identifying-views/index.html","3d7ab9c26bae264ce6e1c7225237da9b"],["/tags/VIPER/index.html","555feaa408167ac1025ed318a729a8d7"],["/tags/VMware/index.html","6aeb4cbe7449516b9e7e4f7e4ad7bef6"],["/tags/Vapor-4-0/index.html","25d2e5d1f22df2d57cbb8d16291cd328"],["/tags/Vapor-初探/index.html","9a8ab807817f40ccdac69db0feba6362"],["/tags/Xcode/index.html","1d98ac1b80e2d88612134f8319cf715c"],["/tags/appleOS-Networking/index.html","3b084c91ea28e9c419a320f79fdebb32"],["/tags/enum/index.html","f56620369df26e1a8a6536805d5cf2e6"],["/tags/iCloud/index.html","5c4cc882604ba39021278281308eddf4"],["/tags/iOS/index.html","0b463a8a32d8f1492989a8acb06ce70c"],["/tags/iOS/page/10/index.html","408fbab4f16821c5b7bf2237b69c3300"],["/tags/iOS/page/11/index.html","4df37d4243888686f94e83a6405ccf60"],["/tags/iOS/page/12/index.html","f4929799e762e9fa5f1b3fc7116b46f9"],["/tags/iOS/page/13/index.html","1148f67656efd9858d599262a0bfa09e"],["/tags/iOS/page/2/index.html","28986ccfd1f1c885005c55c223d447d7"],["/tags/iOS/page/3/index.html","9a015a6b8dc3e61c098257fdbf80b9f4"],["/tags/iOS/page/4/index.html","c807f5fdba42191e23d9be938e7c706d"],["/tags/iOS/page/5/index.html","dc31c14d66a2be57bb3ed702adf94123"],["/tags/iOS/page/6/index.html","fa22c32c15d44fdce9786c0841b46d11"],["/tags/iOS/page/7/index.html","c9b7c5e49ab16ac2729e480739bdfb38"],["/tags/iOS/page/8/index.html","40715111afbac09e40008b9aa55e958a"],["/tags/iOS/page/9/index.html","6b0f6ea811b02b80bae7649398d42a6a"],["/tags/iOS面试题/index.html","0fbf8cace6612c94153d21551a280203"],["/tags/index.html","32a12eccd2a5c125d1ec3e820063a7c8"],["/tags/non-optional/index.html","7cdaa709fad94b32267708b1210274d0"],["/tags/random/index.html","f4917231a0bd30915f1f0bddbd47ce53"],["/tags/transition/index.html","490058d00f88e5d8875e46f49a42f43a"],["/tags/三方类库/index.html","901d6085da12fb2aea7c870292131287"],["/tags/依赖注入设计模式/index.html","592caabf54a0f7c46a5279b6b0024898"],["/tags/值类型和值语义/index.html","e53eea71ccabf7f023da19fee547b66f"],["/tags/内存管理/index.html","2f1f57af6cb8fb5d3af35f81d377736d"],["/tags/函数式编程/index.html","d6f871847a521294c5f09fcf07f6abde"],["/tags/创建博客数据库/index.html","020f695d6bff36926afb84796b2d3cb8"],["/tags/初始化模式/index.html","50a3cf612ec0830abf5e8bc9b2940d65"],["/tags/单例模式/index.html","916735143dcf05ad9bffc2775861de10"],["/tags/原型设计模式/index.html","794a656145090b26a560da4bf49199b7"],["/tags/命令设计模式/index.html","ccff8f178957bd03ade8eafd8c178b48"],["/tags/基本控制流/index.html","fe4540a2add616d324d426053ac112c3"],["/tags/外观设计模式/index.html","c68ecb279d1cd0f1f8a3af1631a86e39"],["/tags/委托设计模式/index.html","4d27bf65a5c039e09ed284d95b38b273"],["/tags/子类化样式/index.html","a22e459af758efc52810fceced1ca7d8"],["/tags/对象池设计模式/index.html","0f5a1bee2da3f4758df93035693f2491"],["/tags/工厂方法设计模式/index.html","3dba890d24fd3026448c6f8accf26c0f"],["/tags/工厂模式/index.html","9cd4e63385e72b10bef57e2425a38c6e"],["/tags/工厂设计模式/index.html","12162d9dd5f325986e19c2d7e13450ac"],["/tags/开发记录/index.html","633c47ad8335eedc32e1b8cb0983664d"],["/tags/懒加载模式/index.html","5592636f3ef79823f5f2e2b35b1589b3"],["/tags/抽象工厂设计模式/index.html","0ef0e7e250541b65d59f1859e5bf9179"],["/tags/构造函数/index.html","dc73acdaba604041e7daf4689af36752"],["/tags/架构设计/index.html","a0f4dd5c69e02ec0b5c415be6f9f8b22"],["/tags/模式匹配/index.html","5c12d5fd457b0a8b0cb9b24bf72162a3"],["/tags/生成器模式/index.html","4fd2c0b3cd2423a9e100916267f082cf"],["/tags/用户体验/index.html","834f6b7222e58500f0667008f4da616e"],["/tags/用户协议与隐私政策/index.html","707a887388e30285527a28abdde576d6"],["/tags/类型与操作/index.html","9c96aab8aec78bdab77fe05a1d189b0b"],["/tags/自动化布局/index.html","00832ec1624e88615f0e144ff4c89d35"],["/tags/自定义UIView/index.html","193846a8993b64f8efc96ae834944981"],["/tags/自定义转场/index.html","d5ba23fabd3e2155513b5e949ecc340f"],["/tags/自适应布局/index.html","92b26ff5f549089e4a54e89a1da228c4"],["/tags/表达式、变量和常量/index.html","23e87061b6a923d4d4e78891bc276df1"],["/tags/设计模式/index.html","4bab904d53fc24875f2f00ba446a74d9"],["/tags/设计模式/page/2/index.html","248fb223f622a954320932101c05c0f1"],["/tags/设计模式/page/3/index.html","430f8e774021b1d5868ae90d0193ab9f"],["/tags/访问控制和代码组织/index.html","b009be03edd446f2213255598a44f6f3"],["/tags/运算符，下标和键路径/index.html","273582a7b238d1158cf84aa49be48299"],["/tags/迭代器设计模式/index.html","c37f8ae5be3db394f649304b24f96484"],["/tags/适配器设计模式/index.html","8a2cc8bb5ce456c284c52828f3cb0f99"],["/tags/错误处理/index.html","68a0724a2868fe1351c6a0a68f7034db"],["/tags/静态工厂方法/index.html","6d8c8cd1067ff2020db536e0104c4d9a"],["/tags/面向协议编程-OOP/index.html","2e368128f6ebecfdaa1069c4db863b16"],["/tags/高级主题/index.html","4215f44aea768a83d777f2a361f4b078"],["/tags/高级协议和泛型/index.html","f9e20a3b6b94ceb2b0b386fded0bce80"],["/tags/高级控制流/index.html","71b8a51c8a5e9e19fa28a6773381b7bf"],["/为iOS应用构建输入表单/index.html","dbac21249b7664981bba90b668c21181"],["/产品开发的幕后花絮/index.html","cb32e3df6e4430508c535f105d767661"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0cd89caf63b09fa902469abe0bd02f7f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","81543ca0a06b85f1d52f2d932470db7e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","c81036546b26ed320e283624b04c05bd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","44511bff472d88da0ca8e173f09a155c"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","41b6af57050a40591a26e131e041038d"],["/在Swift中创建自定义集合/index.html","6ecb30749806f19f4574fcf9582871a1"],["/在Swift中处理非可选选项/index.html","b336aaea19a4dd2feada0324fd3fd4d3"],["/在Swift中生成随机数/index.html","be1b7f40480370508ff8c6446bcd6378"],["/在Swift中重构单例模式用法/index.html","e6076b0814ba19de116bede839b0a42a"],["/天天兼职用户协议与隐私政策/index.html","138523bcbc9436c402edd24fd27f20d9"],["/如何为VIPER编写服务？/index.html","11610fb9b527b6eb513dfea4174b0cba"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","c57d35940cd6e29797a96df74c23642b"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","da723ce1add67cf458aeca98b74b9db8"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2f0ace4ed22cb3cf96546bd1094eae13"],["/如何使用VIPER构建SwiftUI Apps？/index.html","29ca0699d4fdbd7d7d4135c542a087a4"],["/掌握VIPER架构/index.html","ed947d8bb9dd6b41f4049b08aa73957f"],["/揭秘 WordPress Hook 系统/index.html","032ac163fcf04adad4a46c57650f8d55"],["/比较工厂设计模式/index.html","3d1e5dd687bc4e4346be774054a7dd2d"],["/深入了解Swift中的Grand Central Dispatch/index.html","e94e3010fb680878de79f8e2c58c9d28"],["/深入研究Swift框架/index.html","6b3f1fd6b5e4425a9196d04e3bc6a895"],["/美豫兼职用户协议与隐私政策/index.html","98adaed6358a474a2a2436b7d874e78a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","da1cb396b939c1913687919d476b455e"],["/选择Swift而不是Objective-C的5个理由/index.html","843b1305993150451c846a7e5c396427"]];
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
