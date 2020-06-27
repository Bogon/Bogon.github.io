/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","f530bbe227bf1b26c9dae660ebece7bf"],["/2020年iOS面试题总结(三)/index.html","f13552b081e593fe55d9866be5964b9f"],["/2020年iOS面试题总结(二)/index.html","1ab3665fad3805138105e7b121edd230"],["/Advanced Swift系列(一): Swift 简介/index.html","f5199ea60932d8e53ac4aa06e7ce9171"],["/Advanced Swift系列(七): Strings/index.html","b2ef1ad8335a1624dbf1145d7191af6f"],["/Advanced Swift系列(三):  Optionals/index.html","84b2eb16878253bd48d354f7b530660d"],["/Advanced Swift系列(九): Protocols/index.html","206898301ba30c26516015ecdf7037e4"],["/Advanced Swift系列(二): Build-in Collections/index.html","08d1670337f7bdee96775838778c53e6"],["/Advanced Swift系列(五): Structs and Classes/index.html","600ca22c534c842ec4259869800213d3"],["/Advanced Swift系列(八): Generics/index.html","ea54cb5f5e194dd2b32ce2592ccd5169"],["/Advanced Swift系列(六):  Enums/index.html","112b16cd2fcd63a930ea23aaf0e27b1c"],["/Advanced Swift系列(十): Collection Protocols/index.html","96f676adc25ebcff41904b651fb16e20"],["/Advanced Swift系列(十一): Error Handling/index.html","6d479748d3db5630f5e63f3fee305163"],["/Advanced Swift系列(十三): Interoperability/index.html","d073c23d5db38995a801bc15075ca9cc"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","301c1af57c63f59e21e1da7c65096134"],["/Advanced Swift系列(四):  Functions/index.html","464c326e695ca3f7748fa44d0d7d7468"],["/App Architecture系列(一):  简介/index.html","bf23c365bc2890ef5df884af88b6f34a"],["/Functional Swift 初探/index.html","176476c97a9a443aecad260c4a7ba271"],["/NSCODER和SWIFT初始化/index.html","c4f152170f50a2936e6eb7f0cddacee4"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d2b81d9fc6de7dfc54315461bff21033"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","be465dc160cd26accbab4bf05f0fc6e4"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","ad4cb190ef422a0159fda71c3ac4afb8"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","47b9d98732a9c61b329218ec511ffd16"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","613ee681f4a32763233ff9f98a6770e7"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","c211fd3c4f32b9bc6aada9a771579b41"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","ac54ab524b0e5bb05fe0feaf53778159"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","dc068de232e9bc7e471926aa5a50cd7c"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b78be93d49f2d239a83a8799b0faa18a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","50bac2afb3e9786606ed44bd02d9b0b0"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","df99ea3ae305703419ae407238ca22e8"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","8d3e230f3fafd1980100c9233c592da5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","ad7b4af4928a2b843a2f5e8e0c646a7e"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","b1f73e3371dc02b8468c8e5af70f372b"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","680c38e1f4f8a9a57e7bc17d47cb3599"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","2061155017722d012e2d721e34f2e993"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","97ade8e998219949899aa3cb6819dd3d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","62120f2fd1101161e3d31c46c5b5ad23"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d8cf49e8fb94949517cf05bf481b8111"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","31e901e4773b8a64c39332eec0b55596"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","5e7530565a289c148c519ef7835f4cb9"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e1d985d894b40f814e95b6c51b45203c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","3f10f60d41e22c86d3851b17f433ead3"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","9b1dbcefd68aa49751b327c12fb3235f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","b723f8efde12484a10b47473c7ad0bf8"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","38ac1b265f198bc4beb062c10812101d"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","5500b855bf850ee45b89f6bfb0f3b12c"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","ea3e47ca5bbe48afdbdcef223514f699"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","461ebab54b956b90cfd6a6151443502e"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","39ef7bf06df816a4d85ea8a465a39d29"],["/Swift CompactMap vs flatMap：差异说明/index.html","efaec17a3678c922b17eb2db2c87798c"],["/Swift Grand Central Dispatch 深入实践/index.html","f8d6cd0d490056d34f57639e8c923eb2"],["/Swift Lazy属性初始化/index.html","c13c05719a35d72bfb73c192cb97cc28"],["/Swift Promises 初体验/index.html","102d03cf34f64adb5df9a59ec6a3638d"],["/Swift Promises 探究/index.html","4926ba0683e76461ffaa97c1fba86c73"],["/Swift UICollectionView使用指南/index.html","8b8be2f76cfa75f36ca32c2a419310f8"],["/Swift URLSession 和 Combine framework/index.html","5d530cb92c72f3d24ae0fb0f46bfb2bb"],["/Swift 唯一识别的视图/index.html","8a0fdd760ebeb1be7d6adb7de2c32331"],["/Swift 如何学习现代UIKit？/index.html","2709c76a9ff7e43359ce575c27c0e74f"],["/Swift 用 compactMap 替换 flatMap/index.html","f75f3264a99650beb98df65122aec2db"],["/Swift 选择和播放视频/index.html","d83d05b7fc8bf0e29a04c3b76284eb00"],["/Swift中UIColor最佳实践/index.html","2265837cc0a8836d9265d56361eba974"],["/Swift中快速简单的工厂设计模式/index.html","0e74f00ab077a952c3528a8b10da453e"],["/Swift中构造函数与静态工厂方法的比较/index.html","70a7718c6f849df37b33219041c42891"],["/Swift中的UITableView教程/index.html","d415bf0c134d14873bd3e813486dade1"],["/Swift中的懒加载模式/index.html","10baf3157762e40be1f85d8ebf58bc88"],["/Swift中的模块和挂钩/index.html","67f489a5faf22256d90b45748e8bf86b"],["/Swift使用布局锚点添加约束/index.html","ebf990656773699d4a51e9c2e00074f2"],["/Swift依赖注入设计模式/index.html","e4c0910a4e8d286baed3e32b185b28bd"],["/Swift关于Dependency Injection (DI)/index.html","0c04eb8583b28e193a4dff848ed655fc"],["/Swift初始化模式/index.html","07153b50c4fd8e66099c295312037a0e"],["/Swift单例模式/index.html","4bb3759773960eed18cf34d43db4b35f"],["/Swift原型设计模式/index.html","44144d72a10a27e7e2a0c01dfd089619"],["/Swift命令设计模式/index.html","7a198b5dddbed7130302f4c797387db4"],["/Swift外观设计模式/index.html","12e311243c4b2f55b772cabb255735a5"],["/Swift委托设计模式/index.html","2d45c624db047bcb619b609e186e01d7"],["/Swift对象池设计模式/index.html","e4bab398082ed738a125f94609225e88"],["/Swift工厂方法设计模式/index.html","a5b8bb4e64d7b5c71ddbc90edd6dc796"],["/Swift带闭包的懒惰初始化/index.html","0fb594793074bf3ff0c1279d3c222e30"],["/Swift抽象工厂设计模式/index.html","d50871fa2e85668c5f0d08d722bd481f"],["/Swift掌握iOS自动布局锚点/index.html","565e5daf6e10225278e38fc86826d29e"],["/Swift支持旋转的自适应单元格/index.html","7e9026c3ad3678feca97c5ff930fec2a"],["/Swift枚举值/index.html","f2cfee9072036d95bd7881a78ffbc4b5"],["/Swift生成器模式/index.html","71a09a8a27bc4247d07254f1f714b2d9"],["/Swift结合Xib文件自定义UIView/index.html","05a9b00da607cc38facbad6e384a57ff"],["/Swift编写的20个iOS库(一)/index.html","1c1d2f8d5f0375d1fac68a38d2fb99c8"],["/Swift迭代器设计模式/index.html","977dbce5ef0afce2bb7384b9cd45bf71"],["/Swift适配器设计模式/index.html","2460b1830ea64d1a5ed57e4d5628051c"],["/Swift静态工厂设计模式/index.html","8c24cd722362854691cebac91bbc723a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","64375dde7e0636ecdccc5d51bd47227f"],["/UICollectionView data source and delegates/index.html","927844fe933ebb1fde8104f4294dc195"],["/UIKit初始化模式/index.html","189c43e67ecee7833291605ab212e32e"],["/Ubuntu18.04替换国内源/index.html","0ee0f6bd43b3b0142560aa3f9619dffb"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9484587a801dcb7c574253f3ecf4224f"],["/Vapor系列 (一) :  Vapor 初探/index.html","2c266c1b87f5c4832c14eea4e912a279"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","62738a4b4fac80354ffece1a68653a56"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e8f05ad421e16ab006ca9bea2672cbcf"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d4382ff3b38ab9ef64db5fb00426930e"],["/Vapor系列 (四) :  创建博客数据库/index.html","2fc7e572c912c74e3a01de511693cf91"],["/Vapor系列(六): 徒手撸一个CMS/index.html","e5ccca14884f84af8681912f79320830"],["/Xcode扩展/index.html","ae322266a2f806ee6d73030921d232aa"],["/about/index.html","7bc4445f3957778711f8402703bd9471"],["/appleOS的Networking示例/index.html","6aad7108691274834712b6a48f11dd9a"],["/archives/2020/04/index.html","5d2148a15305b35986ef17275d21fa94"],["/archives/2020/04/page/2/index.html","b58586a3657278037c62ce68e200dbe9"],["/archives/2020/04/page/3/index.html","d4c861b97df66a6d7d2b372b185570cc"],["/archives/2020/04/page/4/index.html","3bcb05cc82839c1ff60fc79b34ebc049"],["/archives/2020/04/page/5/index.html","c87f72b97fbb729b534ed987d6db03f1"],["/archives/2020/04/page/6/index.html","97e9b7a321166f80c352764bdb37b411"],["/archives/2020/04/page/7/index.html","19fb0129611fa8434864aab91eb3cc4d"],["/archives/2020/04/page/8/index.html","9ba6588a29426b5b0b9cc33b9ad72e74"],["/archives/2020/05/index.html","f058846dcdefb671a28fd4910f915066"],["/archives/2020/05/page/2/index.html","593190dce05d5e2414d104b73725e4f0"],["/archives/2020/05/page/3/index.html","595b3210434ac6511ef61ebe39a73190"],["/archives/2020/05/page/4/index.html","4eaacfafdb9649a004926a872cbbf362"],["/archives/2020/05/page/5/index.html","01a40f1c5d898813002a65cccc290d44"],["/archives/2020/06/index.html","d5395d02f02085e6e244347aa01fcd47"],["/archives/2020/06/page/2/index.html","c0c2b15fe6041bfd437b7300426c309f"],["/archives/2020/index.html","c2e16816e5afd2202144c6fa3b9a3057"],["/archives/2020/page/10/index.html","308812a2a3daf88bf5f30ca1af36f7a9"],["/archives/2020/page/11/index.html","6e762336080b0ac5bae984645aa9aab5"],["/archives/2020/page/12/index.html","9936e03fbbf21fa25fda515e9fc756c1"],["/archives/2020/page/13/index.html","6ab7a8a911fe7457d8a303c6deab05af"],["/archives/2020/page/14/index.html","38b024fab9afb91d49041fec3544b31b"],["/archives/2020/page/2/index.html","93d446e8eef45c4dea60c7050a9c0c1f"],["/archives/2020/page/3/index.html","3ac02d91123235efb097746ad39f5b8d"],["/archives/2020/page/4/index.html","c496af020a44dc6fd6c851b5e833708d"],["/archives/2020/page/5/index.html","88edd27ba79c403914295b5cec921180"],["/archives/2020/page/6/index.html","91aa57396886f4440b9188b6f0fa6cf6"],["/archives/2020/page/7/index.html","df47adfe8b9d43874a9166ac1ee3f431"],["/archives/2020/page/8/index.html","cf8066874efbc6c99965d4184b1ed15a"],["/archives/2020/page/9/index.html","02e98fb48a6d2309c53e80a834d5438e"],["/archives/index.html","ae9f70d89d0daec3daaed5d2893030f9"],["/archives/page/10/index.html","e6b9e35b77084d2dfbce38a97cbc3bcd"],["/archives/page/11/index.html","760e43b1fc923a4adceefb4b46e359d7"],["/archives/page/12/index.html","0fbb0dc8cb47d1903690508ff639fd0f"],["/archives/page/13/index.html","3d2b20e131adcf94be98aed68f517d31"],["/archives/page/14/index.html","9005de91a253eece60ed62c1634c29f2"],["/archives/page/2/index.html","c91d95980be91635e663e964da95b6c0"],["/archives/page/3/index.html","338bc41715231454e11e130f3dd68f77"],["/archives/page/4/index.html","4a7a67dad1d6e69d750718b07bb9db75"],["/archives/page/5/index.html","f86dd2929dc6f68a9ac02cb0d26f8ef9"],["/archives/page/6/index.html","0de668fa90d78aa6899a9496c491d211"],["/archives/page/7/index.html","4b1cf95fd52be9488665f277ed197795"],["/archives/page/8/index.html","6da6b746e45783e7d1e33d0d718d187a"],["/archives/page/9/index.html","d508a18edb286ad50004ce2983bd6234"],["/categories/Advanced-Swift/index.html","a0a3bd1b811748bca8fd35b203044e1e"],["/categories/Advanced-Swift/page/2/index.html","9b88d73cb00b9a80af3dc9256a236342"],["/categories/App-Architecture/index.html","270dcc196141b4bd424a04d0e70822f6"],["/categories/Codable-protocol/index.html","853246766abbf41c14c70f78a5d8892e"],["/categories/Combine-framework/index.html","4b434868b3e6b3e8b3207d431eb48484"],["/categories/Combine/index.html","c58159f20a0320948d3b119749d84cdb"],["/categories/Grand-Central-Dispatch/index.html","e25c1310d6998b0776a13e084d05c7c4"],["/categories/Hexo/index.html","e4e34dc22af5f9c88d0ee88497c2d22e"],["/categories/Promises/index.html","fde1e6cb3294a3eb8dee09b7e7d36efd"],["/categories/Result-Type/index.html","782e490b3269160fce00b824be087e3c"],["/categories/Server/index.html","a4570e103fed38bc9dc9a6fdafe3e47d"],["/categories/Swift-Apprentice/index.html","edce6fc96ff88a27903bb38ad627d180"],["/categories/Swift-Apprentice/page/2/index.html","47c939d35d6811fcf9314da610811f98"],["/categories/Swift-Apprentice/page/3/index.html","ccb7fd1c164582925ef6e5a660e9c1a9"],["/categories/Swift/index.html","a74aed9d276639bdeeb11720407a36c5"],["/categories/Swift/page/10/index.html","1e01faae4efb02f2bdb33d003e62a34f"],["/categories/Swift/page/11/index.html","6b99139fb068f093b2fdc8627fbb5b9e"],["/categories/Swift/page/12/index.html","62232cce040adbde900c3a417d916e72"],["/categories/Swift/page/13/index.html","a3da641941059e5c328adcc17ce68b29"],["/categories/Swift/page/2/index.html","9e49d2adad2fa234c2c04f220377db76"],["/categories/Swift/page/3/index.html","718b83da7ec301b4696217c7e8d15517"],["/categories/Swift/page/4/index.html","9bb245e164ec153213be4a733a8d207d"],["/categories/Swift/page/5/index.html","0586b0f44e5551cf518ae19529f43740"],["/categories/Swift/page/6/index.html","07bf3d872df626a84e84911dd1a0232b"],["/categories/Swift/page/7/index.html","eb15c22c2926a6963657b55c17b4d766"],["/categories/Swift/page/8/index.html","951816ea009af18e92a5d289de35fd1a"],["/categories/Swift/page/9/index.html","6aeb4bad650c627b50df33537a1147b5"],["/categories/Swift5-2/index.html","a4ffb3610c4f04297ab65d15d9f51362"],["/categories/SwiftUI/index.html","7d5c4354e40623e657922853094cc38f"],["/categories/UICollectionView/index.html","853eda5a390ea0486dadcbfbb0b02e3a"],["/categories/UIImagePickerController/index.html","6ae480e5d0899429bbe587925e24a094"],["/categories/UIKit/index.html","01fa388cf2d8d38a52504b3a17bf7cf0"],["/categories/UIKit/page/2/index.html","99ae9cc0543628101e53c84d39bdff42"],["/categories/UIKit/page/3/index.html","42edaaff09e10ed8e80e7c8d91abf3d4"],["/categories/UIKit/page/4/index.html","51c47807c829c285b1d77d9a67190042"],["/categories/UIKit/page/5/index.html","50af44c4c40546dddbcf69279ca2f387"],["/categories/UITableView/index.html","b14b583a6d33e0044a7d2d5c010a983c"],["/categories/Ubuntu18-04/index.html","e8321ace25d1a35725d3326824f67d70"],["/categories/Ubuntu软件源/index.html","b2c7252847dddfd5be3ff171832e2776"],["/categories/Uniquely-identifying-views/index.html","cf32b41a8607a4200d28381e7c127c9b"],["/categories/VIPER/index.html","4ee0a31496ab4ac835dd19f5e79d388b"],["/categories/Vapor-4-0/index.html","32d7e77b48992f6ea5ef8024735d96b8"],["/categories/Vapor4-0/index.html","d5cf933c6b5985fdba82a6d7a5203c94"],["/categories/Xcode/index.html","a149b0343567b6dc505f0fe3acdf7c71"],["/categories/appleOS-Networking/index.html","4f3ae7a59819f5416348d677207b4f5d"],["/categories/enum/index.html","67e4170b21efdc452be323b1437302fe"],["/categories/iCloud/index.html","291d76ca9374174b6327394c46ce6c61"],["/categories/iOS/index.html","c42b30cc2343fe88c905a46e26cb1e31"],["/categories/iOS/page/10/index.html","07e237e689ce88c107ec71868afa7943"],["/categories/iOS/page/11/index.html","8e66a08e0fe7c6c1234079283f7b224e"],["/categories/iOS/page/12/index.html","ba4e74dd321e6da5145062cf2bb50880"],["/categories/iOS/page/13/index.html","255b6b38673541e89d0abe95e9446bb2"],["/categories/iOS/page/2/index.html","d2d938ec319d25bbf9b737f2e7e15dfa"],["/categories/iOS/page/3/index.html","e8f3007018dc539016bc3710abf50628"],["/categories/iOS/page/4/index.html","b75867a1ac8352e39fcbabb6c78aa75d"],["/categories/iOS/page/5/index.html","0b40bb933a52349a9b87a38e926636e0"],["/categories/iOS/page/6/index.html","041859d341eb5daa44969ef588eb9c0b"],["/categories/iOS/page/7/index.html","2a6c9e5b1769a4960c764277cb10d830"],["/categories/iOS/page/8/index.html","660c197871e19f2582e1a2e506b68b44"],["/categories/iOS/page/9/index.html","4de0f55cad37490c79be607484d593cb"],["/categories/iOS面试题/index.html","ffe87fa2e3e3f13d2d6bcf0ee36ea092"],["/categories/index.html","ef8fcf1bb3013bf1d545917f3a87f944"],["/categories/random/index.html","1249085c48bc00b2070c8acd2c13b8eb"],["/categories/三方类库/index.html","62752ea77c12daec74a73921498c4cbb"],["/categories/函数式编程/index.html","bc9e7fc7e6ac0ed3571419dd85f1ff24"],["/categories/子类化样式/index.html","7cf61ffc796b196fa6540490c1715c1f"],["/categories/架构设计/index.html","727f8ac8ddbaf4cf5879c4ca0b501065"],["/categories/用户体验/index.html","e1a992aa5d4c4c8bb7d4e48db2574de3"],["/categories/用户协议与隐私政策/index.html","cb3cc9417e6d59244132d3ec8d9b5f81"],["/categories/设计模式/index.html","a94a7df4cabfd1a9c09c3207da3b6207"],["/categories/设计模式/page/2/index.html","1a0537cb45f97262c7a434ca4510f225"],["/categories/设计模式/page/3/index.html","eb1c6afed1c8756eefd2b5e2cfb135dc"],["/css/main.css","124d13d99ca47b479a778feb45e6d8a4"],["/geckoAppPrivacy/index.html","f757e2dcce6fbff79284342e8bdf04a4"],["/hello-world/index.html","0a0d9182e4db24b62c6219111dd443e6"],["/iOS VIPER架构深入实践/index.html","4c6b1d0c52ff55ca4fcc42e602fa12b4"],["/iOS 自定义视图，输入表单和错误提示/index.html","ab8ac9a09eff8ac2b38451cff0ac47b8"],["/iOS如何使用iCloud文档？/index.html","46a8bb661c31a8dd4dce9128e3bf6f2b"],["/iOS子类化样式/index.html","99b60abe21bcbe3c67da9d76657f06ed"],["/iOS自动化布局编程/index.html","4140ee0d5f7461574e188f45ce90b5e2"],["/iOS自定义转场(By Swift)/index.html","deebe1cfa49a3b44b79585f64e7ae2ce"],["/iOS项目架构：使用VIPER/index.html","8ea61a3f099e9e40cccca6b55dba5c3a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8b05f241a4cc3970fdc439c2f7b5c5f8"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","2661bb8d20a258ede89c8eb2efc7a855"],["/page/11/index.html","ec9b88c7e474f902279da290a36a7bd1"],["/page/12/index.html","14096e3f92e911b51371141ef5ecf5f2"],["/page/13/index.html","df287714a3833ab5e088ebacbf837bc3"],["/page/14/index.html","f7b3353658548f34e7fc4ed3b94d05b6"],["/page/2/index.html","93eacac939c5b50a2265ee3ad32e1a62"],["/page/3/index.html","42ec7bf1d07802df79311e82843de203"],["/page/4/index.html","1e0ad9b8efa222cdb847d762476e685a"],["/page/5/index.html","c75f552b83b43cb645930177ec39fdd0"],["/page/6/index.html","89252537ba9f0e75529f0be0ddfc4743"],["/page/7/index.html","853ee7d33e409ec6d87c23c9f19da4de"],["/page/8/index.html","7567390bacda71da697d7338c00b3354"],["/page/9/index.html","5b12e4d4476111810ec95a0d5ca6ceb0"],["/schedule/index.html","e3f173f3c86a41120ff79a3daa764cd8"],["/sw-register.js","641aa2cfaf7f46c0d5e7436571a6e867"],["/tags/Advanced-Classes/index.html","e33ff53024ba881e56231e1727d6819e"],["/tags/Advanced-Swift/index.html","48cf29810996f0a302e933e1b053b7ff"],["/tags/Advanced-Swift/page/2/index.html","a82be52c6e7aca926924f345c27b7681"],["/tags/App-Architecture/index.html","0b9a33fc1deaf9421b71aef170fe0cf5"],["/tags/Arrays-Dictionaries-Sets/index.html","805007c5dff098c241f49759cbc37322"],["/tags/Authentication/index.html","692467da0a103a742b327ad9eb072ae0"],["/tags/Build-in-Collections/index.html","9c64dd8e6062bf974ac2666c9e16fe83"],["/tags/Building-Your-Own-Types/index.html","2ef9251cda516f49953826929d2e4e6b"],["/tags/CMS/index.html","1d077c99fefee2dc4be93d8e2e0d9ad1"],["/tags/Classes/index.html","4f6f2d0ffed54fb9179a3afef6c78d33"],["/tags/Codable-protocol/index.html","fb7c92701760ac496aaab6d9a956a332"],["/tags/Collection-Iteration-with-Closures/index.html","38956213260a8ec166abe20c25482e78"],["/tags/Collection-Protocols/index.html","b83df97d49bce708ee818d2205f02700"],["/tags/Collection-Types/index.html","f5d26b9a8d24349943bc02b60f2693c7"],["/tags/Collection/index.html","172994c304cda6770a282a74ffe9352f"],["/tags/Collections/index.html","797a55427c42e56c4f2472fab3e9c44d"],["/tags/Combine-framework/index.html","3041b1c26d18dcd132a81372614c758d"],["/tags/Combine/index.html","5a440a2d9e728a885f3ac991a0aca38e"],["/tags/Dependency-Injection/index.html","1240ec04e4ff69861b3e59a8966198ca"],["/tags/Encoding-Decoding-Types/index.html","936624c09f94473461c55e1f36c11d58"],["/tags/Encoding-and-Decoding/index.html","61a3bd09437b30789286ecb6530e310c"],["/tags/Enumerations/index.html","5ad506b4d7cdbc278b4c8c35def5e361"],["/tags/Enums/index.html","94b9e5771731d0f48c7f25d74d25aa8f"],["/tags/Error-Handling/index.html","616fbaa01c3189e7ded2c6caa478123a"],["/tags/Functions/index.html","24c1272db326ce3fe53e5b5882852e46"],["/tags/Generics/index.html","086a77009569bb4f876e0d36c4d2d99d"],["/tags/Grand-Central-Dispatch/index.html","8beeeb6872e2a1f814648464330cd8cd"],["/tags/Hello-Vapor/index.html","60f117d74c1e61387d4b5afcfab0bc30"],["/tags/Interoperability/index.html","ac54113eb6833e94f1243d5d2d6c2ed2"],["/tags/Introduction/index.html","9ffce4b9b399ee3d67a76d5fb31d9fa0"],["/tags/Leaf/index.html","6129ba2df9c6ae80ae79a0818ef675ea"],["/tags/Methods/index.html","504413236c25102bd53d17d0c006040a"],["/tags/Modules-And-Hooks/index.html","abc67bea6cc9c83cad2e9a64dda5e1fa"],["/tags/Promises/index.html","ee45fdac7465363bb83c4a9e95b3b200"],["/tags/Properties/index.html","48d7247236c794259c29077d6be1ff8a"],["/tags/Protocols/index.html","cd71359228cbdb7ca8b254f47511455b"],["/tags/Result-Type/index.html","2ad2abcb773b906649177a2371173af2"],["/tags/Server/index.html","1fbf0738eaa9075a73456db8ae0aa119"],["/tags/Session/index.html","548bd50b8c77d81c2e77000ad3514321"],["/tags/Strings/index.html","102fa00f74553333ab56de0e5463dbe5"],["/tags/Structs-and-Classes/index.html","bc54aec904dfdf0cd63350f5d0ed7fc8"],["/tags/Structures/index.html","37daa35c66f79cf8d79a0ea1a2b52001"],["/tags/Swift-5-0/index.html","ea0b7028281889cffe8c3945c0fd3b8f"],["/tags/Swift-5-0/page/2/index.html","959f2433b71a833ceb14d8b13207916d"],["/tags/Swift-5-0/page/3/index.html","5fce8b50810f96ba602079b7e826869d"],["/tags/Swift-5-0/page/4/index.html","5cc8f3a84019942c09439b63523972b8"],["/tags/Swift-5-0/page/5/index.html","09050e7ad6e954c03dd5e49ba54d6daf"],["/tags/Swift-Apprentice/index.html","9f624986912332b62ae82f0b09f94db7"],["/tags/Swift-Apprentice/page/2/index.html","8a0ccf27b0c0895d30b0cdd04bb06541"],["/tags/Swift-Apprentice/page/3/index.html","9f683d52d8347882d7a7186807f324c8"],["/tags/Swift-Package-Manager/index.html","bded75821467951ecf3eca11df7d7afb"],["/tags/Swift/index.html","f514522ff5f6133be0f0867a5c1e6b0a"],["/tags/Swift/page/10/index.html","e486476950a6531a5ef79f7d0959eb0d"],["/tags/Swift/page/11/index.html","4f3193c32d1b39a46ee004f7802c8017"],["/tags/Swift/page/12/index.html","6d94670c1c7da5e68108012612393966"],["/tags/Swift/page/13/index.html","eb07a98876aa858309189606fbb67ff8"],["/tags/Swift/page/2/index.html","3363b2fe6692b30c65f5e5b4b197ad2c"],["/tags/Swift/page/3/index.html","151abd79d16470ba0cedd47d650492f1"],["/tags/Swift/page/4/index.html","48d1e98635a09138fa8b118d5ce3bdd2"],["/tags/Swift/page/5/index.html","cb49ecbf591b898a31b47aa5f0d125e3"],["/tags/Swift/page/6/index.html","a04e17b0b1c2952ecf56442fff8f1718"],["/tags/Swift/page/7/index.html","73cae1c21d17a501a1c595962791bc58"],["/tags/Swift/page/8/index.html","07df7ae19d20106d1926b4cb39428239"],["/tags/Swift/page/9/index.html","118b5b297c18658e8c3b9ff723c32e7b"],["/tags/SwiftUI/index.html","7304178007c31aefa51a38531132b0d9"],["/tags/UICollectionView/index.html","d5e7a7b3487d31e489f1e4493bb6f299"],["/tags/UIColor/index.html","e3f851b6dfd2a2259a1403eddd334341"],["/tags/UIImagePickerController/index.html","77f041cdfd73c1321528205b15ad26c0"],["/tags/UIKit/index.html","d231b0212cc552a34a8a56753bd1d4eb"],["/tags/UIKit/page/2/index.html","01de3b55d4ff7bc8513c6aa2ec4f9016"],["/tags/UIKit/page/3/index.html","02c94fc928b417c352f88a57d2a004ce"],["/tags/UIKit/page/4/index.html","7be03b5df40c71ffeb424886a721acab"],["/tags/UIKit/page/5/index.html","e08669b78107ffcd6a38cf9a9bf221ed"],["/tags/UITableView/index.html","f86d8ba7c1216e0aac2ca42c9952f16f"],["/tags/Ubuntu/index.html","8964448496624fdba97d464d873f8d1d"],["/tags/Uniquely-identifying-views/index.html","6a83833fc74d971dd3c6701e87e1d765"],["/tags/VIPER/index.html","f160cee129918ceebfb5f16c2687f2be"],["/tags/VMware/index.html","4623df2c68af618500dc338714734604"],["/tags/Vapor-4-0/index.html","bd608a9b9a9931d9d89776d4139ecf0a"],["/tags/Vapor-初探/index.html","b145da0f0d085ef699d5aa59fd1417de"],["/tags/Xcode/index.html","3795f4aa2e04325e233ffb1303bf4f35"],["/tags/appleOS-Networking/index.html","514d6128106328dfc3256852926cdcb5"],["/tags/enum/index.html","d63f45baaf56902b36922ee10ef2741d"],["/tags/iCloud/index.html","361a04ff858127f07c85f9796f51bb59"],["/tags/iOS/index.html","5910d5629b9926f320039e24cf34be5c"],["/tags/iOS/page/10/index.html","3344267b27f0a2198ffce16f555bfe74"],["/tags/iOS/page/11/index.html","fbe81ad3b16e7d941ee2f33ed50272cc"],["/tags/iOS/page/12/index.html","b38d57fabaa02b39217ab68d4a7e2f2c"],["/tags/iOS/page/13/index.html","51bc621dd6030b8bf500295b190dd177"],["/tags/iOS/page/2/index.html","82b6a03b0631c4fe14d41944463e7cd1"],["/tags/iOS/page/3/index.html","dbf9ad0e54cbfed624808a72d74e177b"],["/tags/iOS/page/4/index.html","0428e3a9e269ec58408f07c62b7ad6c5"],["/tags/iOS/page/5/index.html","7c7da6c095458718ef2c261b01366741"],["/tags/iOS/page/6/index.html","7259a1a90c8a3cf78081733c7e0b3ad7"],["/tags/iOS/page/7/index.html","f3189df5f074c5f1d9e098ffa07d0e65"],["/tags/iOS/page/8/index.html","008bdd56463aa1b45cdee93db9b81efb"],["/tags/iOS/page/9/index.html","50d1ed2be1dbbf797f524161b247417b"],["/tags/iOS面试题/index.html","8301ba610e2197becfa18de315ed42db"],["/tags/index.html","c888a7822513729db492ef76fdf634f2"],["/tags/non-optional/index.html","b959b9ff5b18a33ba8fcfb084e98e689"],["/tags/optionals/index.html","8903166293a4fb8bb47437f29b319df4"],["/tags/random/index.html","15851be401b88940c832f43d5d07c5e7"],["/tags/transition/index.html","62de886b571f3550903d606824b4ad4c"],["/tags/三方类库/index.html","62ffa901378fd9ce3ec238c0e1569890"],["/tags/依赖注入设计模式/index.html","31203271d2a755a730dc1041fbc57f71"],["/tags/值类型和值语义/index.html","437292854f123c70dd8d5aa3a19e9d9c"],["/tags/内存管理/index.html","e2144316648d7a7ee08fca9cd5f00871"],["/tags/函数式编程/index.html","8f4053900fcc1bde1db9a3d99ad2cb91"],["/tags/创建博客数据库/index.html","fdf5ae429cc252b8d80760f70c909005"],["/tags/初始化模式/index.html","4082c7f9937ea3e1416f6fd9c333b7ca"],["/tags/单例模式/index.html","4e85b87f2e108c27ebecec9cb4ce266d"],["/tags/原型设计模式/index.html","182e34f6e870406a9a9c887489652d42"],["/tags/命令设计模式/index.html","b3bb310e0c3076ff4d0b6bc91d2fb8c7"],["/tags/基本控制流/index.html","bd63803ad07955ec5972548b22307ae6"],["/tags/外观设计模式/index.html","3a5fc356e5a29d53000c68715431102d"],["/tags/委托设计模式/index.html","25b622705a569695bb957344dcb0265f"],["/tags/子类化样式/index.html","18619bf64a80e704f9c86718371c1b5a"],["/tags/对象池设计模式/index.html","bf0e8c09e724acd2e20c4e81fb698db7"],["/tags/工厂方法设计模式/index.html","60b84357a73c224520d777625d1ec705"],["/tags/工厂模式/index.html","dc5f1bf6ff674c971d61063a544325c2"],["/tags/工厂设计模式/index.html","3202fff4819edf96e6fb93f884a18bb9"],["/tags/懒加载模式/index.html","d7fcf59c42f542965e4715eb991c95e5"],["/tags/抽象工厂设计模式/index.html","907a6c1ef3949d04c4c06faa4c145f8a"],["/tags/构造函数/index.html","3536bd3c4c9f04f28b0371d4f2a0de4a"],["/tags/架构设计/index.html","976486c6c91dd57b072d93df66a2a8ae"],["/tags/模式匹配/index.html","adca99654431577b77f3aa3e2d1a9e56"],["/tags/生成器模式/index.html","24d74ce50b02fbc028f32cb34d6ae941"],["/tags/用户体验/index.html","b48b63f064a1f3b4faf3153921c1e10b"],["/tags/用户协议与隐私政策/index.html","25c4ae6b5f782361edfc23dbb9711ca0"],["/tags/类型与操作/index.html","62345bf0a0b056ccdb656bb1894981a0"],["/tags/自动化布局/index.html","4a79aab04391e1641460276d6b9bae3f"],["/tags/自定义UIView/index.html","310ad3980290bb5b2b862f6a445dd76a"],["/tags/自定义转场/index.html","b0499beb8335b4fe38565e02d88cd10f"],["/tags/自适应布局/index.html","deb289467db8bbf537fdd5006b7f41dd"],["/tags/表达式、变量和常量/index.html","82d699f8a142fd2889c88ca373bde282"],["/tags/设计模式/index.html","eaa992149541c6935f765a5e44262452"],["/tags/设计模式/page/2/index.html","3271024d21b0d1648ad061c82be570da"],["/tags/设计模式/page/3/index.html","0ac6ab0dcd99c666bd07e1f1789e2242"],["/tags/访问控制和代码组织/index.html","0faaf7ab8ea3ad95a6df04db3dc0f037"],["/tags/运算符，下标和键路径/index.html","beb36579fd6ed34717cb6fbd4f0638d4"],["/tags/迭代器设计模式/index.html","7557466fb7dd921ffc928e7b909fe027"],["/tags/适配器设计模式/index.html","b097977de95e3050915785ea19727bf1"],["/tags/错误处理/index.html","2e9e0420462172798d9a8bc2f9adc541"],["/tags/静态工厂方法/index.html","c1cd7a028923c33dabf47d330fb87676"],["/tags/面向协议编程-OOP/index.html","5e4d375cbc87be7a2fa18d6085b100d0"],["/tags/高级主题/index.html","ebd2294b96865d17ae41b4a37371435e"],["/tags/高级协议和泛型/index.html","b293c389d42ccffc2c66d6b99b2f876e"],["/tags/高级控制流/index.html","f7951b8b37e4b202f35dd0a3a992cce1"],["/为iOS应用构建输入表单/index.html","a986cc4d0c9bf99f0c73bb6ebcbd4f2b"],["/产品开发的幕后花絮/index.html","c791c27e506c9e67ff65b0dc80a8ec65"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","92208abb940b7f079a7e1e003f6a2291"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","184f8ac8deb381ee83a957a1b9238666"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","81a99b20650f6a278f58f9e289ac6d48"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","0741989b6160804b9583d3bb2841cf31"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","0d04c96ed0c70e5ab4946b494c1eec59"],["/在Swift中创建自定义集合/index.html","8a43ec9bc917ae887b202ca3a9049619"],["/在Swift中处理非可选选项/index.html","30d056cfbadbac387c09c09a87a451a8"],["/在Swift中生成随机数/index.html","35fdf7eacde695fcd4070945fac81ede"],["/在Swift中重构单例模式用法/index.html","c5686fef5aa2b83627ef2be9c6b5ef81"],["/如何为VIPER编写服务？/index.html","8d7db2303a90fdeded16c1a8b7c6fb25"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","429d6fc47d1492ee3bdf3a5a0e384286"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","0e45e8c6190ac6bf09865228252fec49"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","0667b6875422ccdb93067dc401a75f6c"],["/如何使用VIPER构建SwiftUI Apps？/index.html","aee12c01a4f19cee99653e1ed059842e"],["/掌握VIPER架构/index.html","553f62da30cafedfb26acc9c461fa1b4"],["/揭秘 WordPress Hook 系统/index.html","9e4031d493c44a2ed111a7f4c829969c"],["/比较工厂设计模式/index.html","2308ac4b7c7cd48cef6dcc26046dae92"],["/深入了解Swift中的Grand Central Dispatch/index.html","09d4c6ecd10cfc954b9dee5f4981e49a"],["/深入研究Swift框架/index.html","67935735d46fa559373635ecb0101068"],["/适用于iOS开发人员的VIPER最佳实践/index.html","87f8c22afd7f4471c8d542e96f00c5ef"],["/选择Swift而不是Objective-C的5个理由/index.html","62cdf321b8b56294fc39c8217aea57ec"]];
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
