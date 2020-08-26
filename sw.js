/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","b9de33bbf0ae9fed5b8e32a0f98b13dd"],["/2020年iOS面试题总结(三)/index.html","afb102b8d9354eb7093e9cda1eb5c03b"],["/2020年iOS面试题总结(二)/index.html","2f02fed8ed0962820c3d9b053358975b"],["/Advanced Swift系列(一): Swift 简介/index.html","c67bfb20f2013b426c7690bf47f94f9a"],["/Advanced Swift系列(七): Strings/index.html","284f7445dd2b9d73baa0d5440ae98223"],["/Advanced Swift系列(三):  Optionals/index.html","e3eb399840d2771f7fd96f9a448ba863"],["/Advanced Swift系列(九): Protocols/index.html","4332006332b18ea4b4d62f9784d5ae94"],["/Advanced Swift系列(二): Build-in Collections/index.html","13d1115ce44771fb6542b9432541b13b"],["/Advanced Swift系列(五): Structs and Classes/index.html","a81e8e4715252d929046a44ce3dbd584"],["/Advanced Swift系列(八): Generics/index.html","20b15aa134c7ed247ea42476e4990dd1"],["/Advanced Swift系列(六):  Enums/index.html","d1897704c0ed205155ced26bc784359b"],["/Advanced Swift系列(十): Collection Protocols/index.html","6aadf1931cbe2feca9f3b5e94b88e2c7"],["/Advanced Swift系列(十一): Error Handling/index.html","3c6ea9071b28516c614ef79a88110c68"],["/Advanced Swift系列(十三): Interoperability/index.html","5c284514f1d64557e8cb6653e569662b"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d9a97f27bae2570b4f51efc98fddb994"],["/Advanced Swift系列(四):  Functions/index.html","5eec0f1ff1848763e8036c789ebf5701"],["/App Architecture系列(一):  简介/index.html","44914a9757118e12ab9cf53d96182dd1"],["/Functional Swift 初探/index.html","839210ced9ddb6d3c4c59f727513ce51"],["/NSCODER和SWIFT初始化/index.html","5525887b537f45cf7991ab68b0eac6ce"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","bdc20b05d3ec446c932cc9ba22c65721"],["/Swift 5使用UIImagePickerController拾取图像/index.html","7eb149092916e6110bdd95063a689168"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","d6d7efb8e55b2cc33ead23d95621f500"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","55b896f11e04e5ffc63099340cd1e282"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","a08c0919937d60c9bb8722244cd589f2"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","0c55981b2aec677bcc75d8ee18329107"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","88b60fa08b22903998916a1ca75aec5a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","88680e07740390ca6603751a2b40b3c0"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","8de3df81739b8dd8593733638d28544c"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","cc389297a920c864928e5300c6dcfadb"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","535ada6be45d14cb0c5fbcbfbed354a9"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","bff53b1faff68abf7fef3031225ccc6f"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","28f635f2609ea4a9945ad33e40a30559"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","fee686295bdc5c98640accca0fdd02ad"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","6c4f8dadc2e6aa6d5367f39ce9c4e27d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","e106a93c13519d448baabba2c7843013"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","e78a0efc9e15b10f605ba42e05f026d6"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","a6ec23cd69672c13480ff93e2c8a2556"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","ab80c87dc52d0d89ef664f8b3b63dd80"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","46e9485311219782510fd946715e1c1b"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","6fd02f8d5352e57ecffca88f4211a70b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","a19fade0c2fec5b9a823fd4b1cc6d4e0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","53ef19be34f1c302c5b3360330c69a48"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","049d0d54033a6436618dabfafb694f15"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","4497780737d485d643f2335082bd09d4"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","f132175979c5518fe76c61ca846ade61"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","c412a2d156ee68742f9cd7192ca414a7"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","cee987563a634a293f3b2ad6dbf302f1"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","971421692a2545ead0f8c9e867477f87"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","56fa2b59bf19728e3348a911a725f566"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e63ec1ffdc0e469f79d7021eb2c537b2"],["/Swift CompactMap vs flatMap：差异说明/index.html","9f4ccc8cf2191dc0a3c4f32ea7651ae6"],["/Swift Grand Central Dispatch 深入实践/index.html","1fe24a6a28ac24dce0e1da3cef71257f"],["/Swift Lazy属性初始化/index.html","cb0f93ce239e7ae3c0c6176b36220d69"],["/Swift Promises 初体验/index.html","cc2dea976c2ed2ce7cdbe86a65978d2c"],["/Swift Promises 探究/index.html","7556dc8c4da7059b4c6ed6e0ce1344f8"],["/Swift UICollectionView使用指南/index.html","252bc0d1472d2aee8acb8cac0414c817"],["/Swift URLSession && Combine framework/index.html","4c6024f80bc0acce7bc0cf95d9704dfa"],["/Swift 唯一识别的视图/index.html","e697fa9b72a16deeaac9928992132365"],["/Swift 如何学习现代UIKit？/index.html","b2264bdf0c5d6e5f62f45ef8d4d6efe5"],["/Swift 用 compactMap 替换 flatMap/index.html","66f83330f8931279171d49bb481125d3"],["/Swift 选择和播放视频/index.html","cdca7cb07404842166736a7348cc67c2"],["/Swift中UIColor最佳实践/index.html","2e67e8f2bb317f0b16484922e97a2dd9"],["/Swift中快速简单的工厂设计模式/index.html","df4829364d06ba8bc1ae8e5848a13dae"],["/Swift中构造函数与静态工厂方法的比较/index.html","11a4e2b48a1f15b886ae2cecfe9213c8"],["/Swift中的UITableView教程/index.html","d528217265804734c3c1a47cf5fcf2b0"],["/Swift中的懒加载模式/index.html","c2668c793cd92903de3bf6ae0b1ad6c4"],["/Swift中的模块和挂钩/index.html","cc4ce150f4ab3af5f5951f60489d7581"],["/Swift使用布局锚点添加约束/index.html","2091aa67bc9ea31eb3dbe367f5c28b0c"],["/Swift依赖注入设计模式/index.html","81c3a8c4c6d4cc48bbb537f7012aea0d"],["/Swift关于Dependency Injection (DI)/index.html","da82a2aa3893a55c13f0892d52a8921c"],["/Swift初始化模式/index.html","9e061a87969c2025eba3f3df88aaeb15"],["/Swift单例模式/index.html","96bca971fd64081f7bea2e6d7ce42ee4"],["/Swift原型设计模式/index.html","2f6410b6e655d18dcd940fbec5bd38ba"],["/Swift命令设计模式/index.html","8b39c670820c3df9c5839096fc17ef8c"],["/Swift外观设计模式/index.html","6f51826c5159199a45bc4aac7283ecb8"],["/Swift委托设计模式/index.html","ab9d4ffca98cfefb0e872e17c52e9a6e"],["/Swift对象池设计模式/index.html","04ef406dd02de39e633f102183696a59"],["/Swift工厂方法设计模式/index.html","fef184f0b3253d678097c2ef024bd91f"],["/Swift带闭包的懒惰初始化/index.html","f4383a6b6ec3f3b463f9b5ddd1f4fcc4"],["/Swift抽象工厂设计模式/index.html","1c612ba9d70635bf3825f82d227a758e"],["/Swift掌握iOS自动布局锚点/index.html","e21504d193b9625510fda529a592fdba"],["/Swift支持旋转的自适应单元格/index.html","3d4cb3ec5b9344aaafbc3b6f3cc1b32c"],["/Swift枚举值/index.html","10a19eb91a4b835f8f4b73f58b3c20e9"],["/Swift生成器模式/index.html","acb6b76b4ded6a93e8755469d5ff3540"],["/Swift结合Xib文件自定义UIView/index.html","49fdf0100a8a752c1d054d9476762ea6"],["/Swift编写的20个iOS库(一)/index.html","8302a0a5640acd150e597247b35d64a1"],["/Swift迭代器设计模式/index.html","951bdfdd8180fff29ecc1c2db3e662b4"],["/Swift适配器设计模式/index.html","ff8648a788672e00e518f25fd08b8932"],["/Swift静态工厂设计模式/index.html","9b5e69cfa2b4aab6581fea9a2fe1c562"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","aec761a10cbd33afb635c9270609ea1a"],["/UICollectionView data source and delegates/index.html","651eebcc79acef129355bd32abc4a883"],["/UIKit初始化模式/index.html","8069cdd2799acd568ff660dd8424746d"],["/Ubuntu18.04替换国内源/index.html","b778521e471ea6a812f229c74af2502d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","fe36315bef2c50ac27809d9bdb91fd4f"],["/Vapor系列 (一) :  Vapor 初探/index.html","094b08b06a9d3315ddd9d8bf06dc9a7d"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","f36373bec2f9ec10a827f8150c29af63"],["/Vapor系列 (二) :  Hello Vapor！/index.html","7dffab728ed7826356953950cd45cff2"],["/Vapor系列 (五) :  使用session进行authentication/index.html","81a31d08cf8db21c0a70e07e1739bb2b"],["/Vapor系列 (四) :  创建博客数据库/index.html","bb5a941d4ca6c547f42feda51a29a1e9"],["/Vapor系列(六): 徒手撸一个CMS/index.html","64b603a4d0789568362f70963b15f886"],["/Xcode扩展/index.html","92e8794123cfd759a7baa23f8e9992f5"],["/about/index.html","53a5d7220c47119ef9926065c7da20c2"],["/appleOS的Networking示例/index.html","117d949d3e1b89e70c2ee941fb31670c"],["/archives/2020/03/index.html","d7ce891112c695ad36a0b31417615d3a"],["/archives/2020/04/index.html","41130d5adb613df06caaa03c067a96d8"],["/archives/2020/04/page/2/index.html","8df6a83d07fd706b0bdb1d45fff3b308"],["/archives/2020/04/page/3/index.html","2d186c10f9fdf58c264af1ceb5ac0c62"],["/archives/2020/04/page/4/index.html","dc0a695b0f62078edb2e6f16bd68c0fe"],["/archives/2020/04/page/5/index.html","3f845c80ee8694942df0923429e7f4a3"],["/archives/2020/04/page/6/index.html","a1bb58e6ac1174e864c8cca9c95ea8f1"],["/archives/2020/04/page/7/index.html","f2eb219268af0cef5430f239a81985d9"],["/archives/2020/04/page/8/index.html","1299aabaa106ad5a22e2c13ffa912309"],["/archives/2020/05/index.html","e27585efdae5aae5e65ecc3bd6e6a4db"],["/archives/2020/05/page/2/index.html","a5979fa17eac61a500faf7ba018f81c6"],["/archives/2020/05/page/3/index.html","0df55826e977f8be0b57afca0c5a791d"],["/archives/2020/05/page/4/index.html","dec0f24a8edf4570b9eaaac3929723a0"],["/archives/2020/05/page/5/index.html","c5505023d971ba511f4f45f865ba150b"],["/archives/2020/06/index.html","9692640b6937b730f8d364cd358c6cc4"],["/archives/2020/06/page/2/index.html","36eaef0601034b339edeb510f924b6f6"],["/archives/2020/08/index.html","64b664ce5e0364ce1a3a5053b03f50cd"],["/archives/2020/index.html","cfdfdb8ad7e287bb2b919c8d0c373c9c"],["/archives/2020/page/10/index.html","680b553e9e802c91c175dc1f2ddd35c5"],["/archives/2020/page/11/index.html","1673b23753296babeb1bc48ac45cc61a"],["/archives/2020/page/12/index.html","1b9677f96279b6c3c1fd7a4fe8caced1"],["/archives/2020/page/13/index.html","3fad7fd96b5d9c0cd56b5aae39edf65e"],["/archives/2020/page/14/index.html","30a3d807c56ae3a1da56ac15dcfd91f7"],["/archives/2020/page/2/index.html","6703dc25c3511d966de58ac238c676f0"],["/archives/2020/page/3/index.html","96e51acb985d021c41d23913a97e0f77"],["/archives/2020/page/4/index.html","b586c25e8c5d95d4963b152aa2f25cbc"],["/archives/2020/page/5/index.html","512edae773529c4739b8831e363753b1"],["/archives/2020/page/6/index.html","571975d8d0119cbe9b224c39bcafab82"],["/archives/2020/page/7/index.html","28609885873c130e59534e0c6ada57ac"],["/archives/2020/page/8/index.html","916541dfa48f7496e30986472af08a45"],["/archives/2020/page/9/index.html","b7ecbfa29a5cc9b9c4d89e169e0e9b3c"],["/archives/index.html","47f4b996689d1adf6a23c9c537c5f0ca"],["/archives/page/10/index.html","2a47c321bf8c614b00e7e4a727c2cb73"],["/archives/page/11/index.html","0cb1022b8df451b588750983918868fd"],["/archives/page/12/index.html","98446912962e6b73cc0598225d940c12"],["/archives/page/13/index.html","dfb8e048b4599c79c504a046083ae8d3"],["/archives/page/14/index.html","f0dc1020bd7e1d9336b10ea081c028b8"],["/archives/page/2/index.html","5184672cc0559eaf4b5034855914065a"],["/archives/page/3/index.html","2600350c71f8eb7331e923d55a8726f4"],["/archives/page/4/index.html","66a11e60070f7e961ef26194a69b08cc"],["/archives/page/5/index.html","857087068765cd3179ba79bf431f608e"],["/archives/page/6/index.html","0a774eba8aae874b35a5406e8cc19132"],["/archives/page/7/index.html","e6c800ca3846efdadd723f9606125a07"],["/archives/page/8/index.html","0a65428ae594dfa7b8fe8f8a6fd76f71"],["/archives/page/9/index.html","6b9e77cfacd810fad20a6d0e4bdbb726"],["/categories/Advanced-Swift/index.html","3e380df9748fa2bd22441454d477e07d"],["/categories/Advanced-Swift/page/2/index.html","f72a78ce493256cf957be84f46cf35bf"],["/categories/App-Architecture/index.html","9b1b1e2407de247253e422b2f0bff2a6"],["/categories/Codable-protocol/index.html","8179e545009efa7e08407af4d90678cb"],["/categories/Combine-framework/index.html","135e2556a48f08ac7464418999f7845e"],["/categories/Combine/index.html","b313fd8434af4d42a9d5ed61581db089"],["/categories/Grand-Central-Dispatch/index.html","205eaf618b85dc0393216d331b3a2aad"],["/categories/Hexo/index.html","927b55fba3936fc67eb5ebfd6ac27f73"],["/categories/Promises/index.html","cc0b3a8b4ccbaa785e4c7f984efcf420"],["/categories/Result-Type/index.html","aa2d340e5353a1b94fda797facd8c03a"],["/categories/RxSwift/index.html","f4f31f098d1d66c6f9d6ad3e5a22c3d6"],["/categories/Server/index.html","27e295dcda7c64cd36435b6ae3f9348b"],["/categories/Swift-Apprentice/index.html","0a87a3a4cbb6c57d503cbc4b4f487692"],["/categories/Swift-Apprentice/page/2/index.html","d9dd98e7ef75459935a4bfedaeffd871"],["/categories/Swift-Apprentice/page/3/index.html","272ceed9c13b04b476d9915bdf16170b"],["/categories/Swift/index.html","d00d63af53fbdd3bbc045d6ab18df591"],["/categories/Swift/page/10/index.html","c05a7161660d9d8667474d25e5c5566c"],["/categories/Swift/page/11/index.html","d171550a593ddfdf6c3d54a9f0975ee8"],["/categories/Swift/page/12/index.html","2f80ee809b2dc6a86a1cdeec160fed5b"],["/categories/Swift/page/13/index.html","87d32665b2f47fe81098de114b0ddcc5"],["/categories/Swift/page/2/index.html","5cf243c28da3f8c8213b08eea30ba852"],["/categories/Swift/page/3/index.html","a1f1c870f6be5e1ab8abda21a96c21fa"],["/categories/Swift/page/4/index.html","4ca3c24f408923ab140e436ff21737b6"],["/categories/Swift/page/5/index.html","a94d6e67180ee531a160eaec25b4e066"],["/categories/Swift/page/6/index.html","87a9fda218a2171cad3076f08462142c"],["/categories/Swift/page/7/index.html","a3dd1c4c9ebbf419dff51d302f8b26f4"],["/categories/Swift/page/8/index.html","0242c98f621356be845b3c21e196a2de"],["/categories/Swift/page/9/index.html","9bcfd98b1524b64f2d3f804bfe742ccf"],["/categories/Swift5-2/index.html","c14fa701e16d8ebb0c5b1d74dd6dd46b"],["/categories/SwiftUI/index.html","9bf8fe697130771fd6312b705de0fe08"],["/categories/UICollectionView/index.html","80d01218e0c0af596b54894469430834"],["/categories/UIImagePickerController/index.html","1e1afa7f24e53fbf65dcf4fe59267725"],["/categories/UIKit/index.html","69bac7df08aabbba63c4a2f40c96877e"],["/categories/UIKit/page/2/index.html","25707da14dcd9a8f6c64d1eec181f4ea"],["/categories/UIKit/page/3/index.html","1e4d45497696d06d5a45394f4577a6e8"],["/categories/UIKit/page/4/index.html","61ce11cb13cbb42c9c06cf01f62b18ec"],["/categories/UIKit/page/5/index.html","d7e9f24d4e90a843b4be37bba4e28a0c"],["/categories/UITableView/index.html","55045b83b58343a2743cede8f29b4714"],["/categories/Ubuntu18-04/index.html","3f532f2cd19c57eed3174cf4f66c775f"],["/categories/Ubuntu软件源/index.html","a12e964408a8a52661d4a2cb3ab9d110"],["/categories/Uniquely-identifying-views/index.html","fa4ecf5ac716929f3397866b9a38aba4"],["/categories/VIPER/index.html","5774bed11eed57aaeae79fc647fc304c"],["/categories/Vapor-4-0/index.html","917b5ffa5df136ef1a2282091e355312"],["/categories/Vapor4-0/index.html","16cd68f6ba2f6aa1ec2ecaf6fe06dcf6"],["/categories/Xcode/index.html","dad014c0f0e4673185d3edffde21006f"],["/categories/appleOS-Networking/index.html","cf2c6a0f93743512f51273c88fb9d23b"],["/categories/enum/index.html","93e62d7596b5520b1bd5b15ef829d42f"],["/categories/iCloud/index.html","ebf2559b37071169800e67c0023c043a"],["/categories/iOS/index.html","f01bc25424f4b4b449fae9e436fa9e53"],["/categories/iOS/page/10/index.html","a3f3864c0e398e038031a9322248cce6"],["/categories/iOS/page/11/index.html","536278ad65b52495b66be9110528c940"],["/categories/iOS/page/12/index.html","f38bee7d388b098d19970c3686c716ff"],["/categories/iOS/page/13/index.html","462ca19b9cfe0c0ff33caa1b8ca4bac2"],["/categories/iOS/page/2/index.html","251ef4766a2fda083a02735a6e8c918b"],["/categories/iOS/page/3/index.html","2ae260c48ece8bccfcbd8c2e7a771596"],["/categories/iOS/page/4/index.html","7af65b760f21e0c7d6f04db45aa5a80a"],["/categories/iOS/page/5/index.html","f9dc8b54acdf2b81d8218321e12bcc45"],["/categories/iOS/page/6/index.html","86114571d88fc7e5bcbef9d9cb506521"],["/categories/iOS/page/7/index.html","bf1698ef9aab8d7c684ee2be571e867c"],["/categories/iOS/page/8/index.html","32bc641bb9f4fa3051078b1f50ea6197"],["/categories/iOS/page/9/index.html","6121a29a14065e6c8f2f4e60b5008446"],["/categories/iOS面试题/index.html","6a71ab037676991c53840873123f599a"],["/categories/index.html","52c853222bcf13cdbb57ef2289ca4875"],["/categories/random/index.html","0a85abc1998f0b4a25f07afaa389396f"],["/categories/三方类库/index.html","53a33ded398fca02c999ef802c9e14a7"],["/categories/函数式编程/index.html","c550b04a8e18111f87790b8c7559f225"],["/categories/子类化样式/index.html","7b2792a234f92325147595c94b37d805"],["/categories/架构设计/index.html","54a66e0bfaaf5d98031d6e5e60e188b3"],["/categories/用户体验/index.html","73a9edd8fc114511a62a5bffcefcd976"],["/categories/用户协议与隐私政策/index.html","7ee6f261ef08431b6d57689300e6924c"],["/categories/设计模式/index.html","fb615b59263f585a830ce0f6c5946332"],["/categories/设计模式/page/2/index.html","365f4380bb2a43f4040cfeeb2496a63e"],["/categories/设计模式/page/3/index.html","0d102f3f62928a41deb1c7c3e87ec8de"],["/css/main.css","47f4ae4e688304f9a37ba143e0267031"],["/hello-world/index.html","e5014cb6fecc7ebb7250163b661eaf3a"],["/iOS VIPER架构深入实践/index.html","4c5bb426b06a12f0ca787fbb9248fe1d"],["/iOS 自定义视图，输入表单和错误提示/index.html","3ccf5546c8e9488cd7c733520d73c419"],["/iOS如何使用iCloud文档？/index.html","2404b8839a5e1b5f6eff98c3cd00bbb8"],["/iOS子类化样式/index.html","f5275b3834bb1cb10d65346aa3969658"],["/iOS自动化布局编程/index.html","92613740aeac29b26933a5b243b33736"],["/iOS自定义转场(By Swift)/index.html","461501cb955e65973dd9b51046dc0f4f"],["/iOS项目架构：使用VIPER/index.html","63f9d2140854631fadf0cc9b7d043884"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e1f1e32e21e98034b53130506aed18a9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","8f37a894ab88a748dffacbf48678d11a"],["/page/11/index.html","78aed3fe0e3c9700a24d1fd20ff73a98"],["/page/12/index.html","8cf0276883ebcbb52ef5cd3b763c096e"],["/page/13/index.html","7ca960cca09371325368549dc06c19a9"],["/page/14/index.html","fbe09aaed5ee337bf78d66ddcded5bc6"],["/page/2/index.html","b5b4219691f63da32eabe26521469776"],["/page/3/index.html","c123bf4cba11ccc47abbd06d96b85879"],["/page/4/index.html","6769278ef34f0feb491fd316b3313cf5"],["/page/5/index.html","4fec4782facbe43d517e9465e83343ec"],["/page/6/index.html","6b9e7c0660f31a9eb4db8c9af8d9cc03"],["/page/7/index.html","8f3d49f958d238fc40fa63d38ddf7129"],["/page/8/index.html","dbd7b6bd19810e8b85a05cd58ca6f04a"],["/page/9/index.html","1b91b13799fa09ea50fb7606a66723f3"],["/schedule/index.html","f2bf7e2497005903642a1453ac525e5e"],["/storyAppPrivacy/index.html","0064cd533a87e3efbbe0ec42fa2d8149"],["/sw-register.js","41d53ab01e98e75aea026b2bb5cf7350"],["/tags/Advanced-Classes/index.html","a65448d99bc2da91592c071743f94f8d"],["/tags/Advanced-Swift/index.html","7a7a95a3e2a6080d848850e4198e5aed"],["/tags/Advanced-Swift/page/2/index.html","69021cad536d00cec5605c4382bae59f"],["/tags/App-Architecture/index.html","95b0feaccc00c705556f114187afd063"],["/tags/Arrays-Dictionaries-Sets/index.html","c57a3adc63cc520696d556696945ef7d"],["/tags/Authentication/index.html","7689ea282b8bbeeb3ad6aa89dc17734b"],["/tags/Build-in-Collections/index.html","ac8e05ee8055d25b85c5c359904ed1c1"],["/tags/Building-Your-Own-Types/index.html","03d0f74d5735093565215a9c70e0ce3e"],["/tags/CMS/index.html","ffb1021522f6b6ea6f8481e1fd0b1060"],["/tags/Classes/index.html","c087ea9e1e2b35fd91d359da3a3fb6c5"],["/tags/Codable-protocol/index.html","6224146a68869343dfb18696a0ed1fca"],["/tags/Collection-Iteration-with-Closures/index.html","9a45ffabf401283502759f9d2f84a5ea"],["/tags/Collection-Protocols/index.html","0d3a8d1a2d2f1b9f0ce1423b8aba6038"],["/tags/Collection-Types/index.html","a0ba9f469e8ca6d09a5f1d8104adfde5"],["/tags/Collection/index.html","694315f676137d597bb6e01b860ca22c"],["/tags/Collections/index.html","74538df2db57e6a30d293dd55eb578cb"],["/tags/Combine-framework/index.html","b8b0b0062f696b3bcc388dad9d615861"],["/tags/Combine/index.html","09ccd8f29e42e832652fec26c1a87d40"],["/tags/Dependency-Injection/index.html","3b17ec44dabc80b1b6d7cc4bcfb2bd53"],["/tags/Encoding-Decoding-Types/index.html","e31a3015922dca99890f95f7eea9ff7d"],["/tags/Encoding-and-Decoding/index.html","bd63a7983f35502143d1c064e56b7a32"],["/tags/Enumerations/index.html","c63eb4d9e21acb40bdae20c60aec3dfe"],["/tags/Enums/index.html","b2f09cb76e3ff7caa684e142eb2ddd4c"],["/tags/Error-Handling/index.html","899a7a704b79f6d19c03d7afd4741e1f"],["/tags/Functions/index.html","627fab328ee3730e342596d18f5ceb57"],["/tags/Generics/index.html","b67c1164f0f79d37de401e52f59ec584"],["/tags/Grand-Central-Dispatch/index.html","5bab187582a03efc0c64a3aefe2c96a7"],["/tags/Hello-Vapor/index.html","31bb8101def498a39bea89298d2cd9d3"],["/tags/Interoperability/index.html","9f3a7733dcf16997060bdc0ff4dd0e05"],["/tags/Introduction/index.html","8405daca54efc0ce1413cfa1caed2fcc"],["/tags/Leaf/index.html","73435b9f4b636b3f6b4c598b5eca7058"],["/tags/Methods/index.html","5b5142468b745716d52e201b747c3861"],["/tags/Modules-And-Hooks/index.html","465bf3a7c21dfd4d09b784edc67966d3"],["/tags/Promises/index.html","af07078abffb33303572d1e98f8bc33e"],["/tags/Properties/index.html","ddec90522320441333870e54299973d7"],["/tags/Protocols/index.html","be7ccc97dd19c8449b7cc0ecb8a23fd8"],["/tags/Result-Type/index.html","39efb074240da1e1864862032af55339"],["/tags/RxSwift/index.html","b339b35020ff2b8c725023b760bb2913"],["/tags/Server/index.html","0c4f8f348e2035bf08b363eed3e2d3e5"],["/tags/Session/index.html","18bbff57d283ab48c7587a658e9819a9"],["/tags/Strings/index.html","d4cf602bc6c01cc2c6acde1ac32ba279"],["/tags/Structs-and-Classes/index.html","5d9e0b959c92a1c76e3ee9ffe4dde70f"],["/tags/Structures/index.html","c561151998bcdfccf1917205a4d46ae1"],["/tags/Swift-5-0/index.html","c709b74ec91894d219b337c93b55af3f"],["/tags/Swift-5-0/page/2/index.html","cbea528635f982ac553d90773f89471a"],["/tags/Swift-5-0/page/3/index.html","6c6925d72f05554b5b88518452449c2d"],["/tags/Swift-5-0/page/4/index.html","7d5538bc2704fc355bfdfe3fe3236fbc"],["/tags/Swift-5-0/page/5/index.html","ace5a9e7d77852cafb8e451689287e7e"],["/tags/Swift-Apprentice/index.html","aef22fe107525f18f1988e13b8ab1755"],["/tags/Swift-Apprentice/page/2/index.html","d2e66d183044d24841a0f9b6d20a1b62"],["/tags/Swift-Apprentice/page/3/index.html","2e8fb4e5159ed0e2321c7673260601d2"],["/tags/Swift-Package-Manager/index.html","50bd3334dd6bed112647214bc20128e0"],["/tags/Swift/index.html","06ca3d79b07bdb30b794ba2f33a68826"],["/tags/Swift/page/10/index.html","459a50fa90114ad5eb80b542460a447d"],["/tags/Swift/page/11/index.html","d769890da037dc1f168a14b9c56e733e"],["/tags/Swift/page/12/index.html","1bd32dc1bde42b38a84b80c6174e23ec"],["/tags/Swift/page/13/index.html","9fc569b48102691a88c3b76717d7c008"],["/tags/Swift/page/2/index.html","262d5aecb2fc6ffc366655cfd870ebcf"],["/tags/Swift/page/3/index.html","f568be2593addcd0b82be877b2a29f5c"],["/tags/Swift/page/4/index.html","7bb485810288bb55104eeec286fde98b"],["/tags/Swift/page/5/index.html","086dcd585b315a34d1fe2e200ea530bd"],["/tags/Swift/page/6/index.html","150d25db0b3736f3fddc0be533472644"],["/tags/Swift/page/7/index.html","f82f6cc5a913a82488faecf9edd77530"],["/tags/Swift/page/8/index.html","a2c4be3d809185ecccf18aeb4ee958b1"],["/tags/Swift/page/9/index.html","488781ee3ec456cb78a2523886ff1b9d"],["/tags/SwiftUI/index.html","c50740c7da03decf9a9da6dfb07f08b2"],["/tags/UICollectionView/index.html","8c63a2161b988c86b687e0c02f79f4f1"],["/tags/UIColor/index.html","1b4e8446bffa29836bfdc3b3d547fb83"],["/tags/UIImagePickerController/index.html","d31b901512d90f67a96c656ce56197c0"],["/tags/UIKit/index.html","0f5afe51b0a98d5bf96a14d4050c3eaa"],["/tags/UIKit/page/2/index.html","db0ef998deb36cdda2b393eea963f678"],["/tags/UIKit/page/3/index.html","95dec74012fb167f3451a4b7806efa03"],["/tags/UIKit/page/4/index.html","c1ac2e2123a2a4ea01fed23c082f7612"],["/tags/UIKit/page/5/index.html","096a5c045355d3d7810b544b17ab95e9"],["/tags/UITableView/index.html","b19dbce4ab8820f734f057670227186f"],["/tags/Ubuntu/index.html","840e95346915aff9391571296f978b71"],["/tags/Uniquely-identifying-views/index.html","7bc471f061a061a95eb4a9cb07aa23c5"],["/tags/VIPER/index.html","108f06cac645d7e2625c445726f487bf"],["/tags/VMware/index.html","bbe89d1da9cd13f5de927cf7e9a90f9e"],["/tags/Vapor-4-0/index.html","70faec7130fe85b7783e59cc02241c54"],["/tags/Vapor-初探/index.html","547a2518ea25b1f97a6d425f7c153aa4"],["/tags/Xcode/index.html","03483ff0656cd1f6a2bbc63139db5279"],["/tags/appleOS-Networking/index.html","730e91ea0f50f1844191312262bec4e1"],["/tags/enum/index.html","88db78a77f384c11d7091a58c1f8a775"],["/tags/iCloud/index.html","9cf1ab7a5052d6099a7551b24bdf8cb1"],["/tags/iOS/index.html","1d06e15aeca44c24094c5f2c62aef4fd"],["/tags/iOS/page/10/index.html","e47343d25bb254d317fb5ef739098792"],["/tags/iOS/page/11/index.html","ba74ac1f99d44ea0a441c097dfb6e254"],["/tags/iOS/page/12/index.html","282e248d9c418ddacfb465e28eb042f1"],["/tags/iOS/page/13/index.html","a7d5d083150ab9d6d267b36e139c8b73"],["/tags/iOS/page/2/index.html","dcc26f98894fc93e8a874a83c6e8f966"],["/tags/iOS/page/3/index.html","b5e0f08ed4b21128578b9dbacf49cedf"],["/tags/iOS/page/4/index.html","a3cf4abd608433f776f212697605927e"],["/tags/iOS/page/5/index.html","cccdaeaf4880150ce96f4eac45dfbeae"],["/tags/iOS/page/6/index.html","d198af6a49e3370b5c4544865ee1cf33"],["/tags/iOS/page/7/index.html","7e5acffc13cb531a7a58e26849601016"],["/tags/iOS/page/8/index.html","80d815e872b5a2dcc0cf5c2bfe284c9c"],["/tags/iOS/page/9/index.html","c687d7add6208020ab9fd3ec9a60cfdd"],["/tags/iOS面试题/index.html","2020f907fb78af10391131dfe240cf03"],["/tags/index.html","467e1f321fd69b98acc2cfee548bfe97"],["/tags/non-optional/index.html","3afab0aa9c8964994bea33a7528f09d5"],["/tags/optionals/index.html","dd85a2f8b37447668e994e3e1482aeb4"],["/tags/random/index.html","e967b9e7d0bbe5e2815ecd720978d486"],["/tags/transition/index.html","ecc138046a3fe611b9fedc8f75fcb396"],["/tags/三方类库/index.html","d209ca1166060b3ea0eea6bceee02cbe"],["/tags/依赖注入设计模式/index.html","4e120eea2506c7fb09a387193148f551"],["/tags/值类型和值语义/index.html","7054fb50c9b069b654a956b393b95c5e"],["/tags/内存管理/index.html","2e875ffd0fdc58ae13814a18c4550bd5"],["/tags/函数式编程/index.html","1e7b0e7297c23ed194b2feee9e36a26e"],["/tags/创建博客数据库/index.html","9c87a88d5ef1b7cc38d8fc11bb267be7"],["/tags/初始化模式/index.html","13280a58c125ccae894587727f1b5805"],["/tags/单例模式/index.html","f317999dd0f4090a68d7f8e46087bfe3"],["/tags/原型设计模式/index.html","cea4b1b3a0875b22341fe6779baf6084"],["/tags/命令设计模式/index.html","aa70890b0f8649a0501b66331a2610dc"],["/tags/基本控制流/index.html","5bbaf6bc9332998d5e616761a0194ae4"],["/tags/外观设计模式/index.html","0fbbf38b7e1a824889d69b29dd878f50"],["/tags/委托设计模式/index.html","3883bfae424ab1cd43e992701aa7701f"],["/tags/子类化样式/index.html","f922cba173bc46acdee88195593f77d0"],["/tags/对象池设计模式/index.html","91989584ee249c20e54d31acc7609fa6"],["/tags/工厂方法设计模式/index.html","d025ea23bdf4440aef2250e3ad21d03a"],["/tags/工厂模式/index.html","1491a522a4d4799f3c19c9f6d7712663"],["/tags/工厂设计模式/index.html","c29cf3a47734da3720b9bc17468281ac"],["/tags/懒加载模式/index.html","8c32577ec3c5a641be146f5efb59972d"],["/tags/抽象工厂设计模式/index.html","36778763a388a5320bcb84a6731d5980"],["/tags/构造函数/index.html","0dde483afac96e798178a2f702256f97"],["/tags/架构设计/index.html","6b1c9e33d3d35528084c128c5941ab91"],["/tags/模式匹配/index.html","febf1d48a4c910967116adedca2ccfab"],["/tags/生成器模式/index.html","c90e5f979194b97c31b95dc3d55f7aef"],["/tags/用户体验/index.html","910ce2d477d31b6f23e2886e6c50aef7"],["/tags/用户协议与隐私政策/index.html","432c293dc43f61a6c3d2c5a01ef89954"],["/tags/类型与操作/index.html","550a6683a3c112f6875d1c146a9c27aa"],["/tags/自动化布局/index.html","bfaefd0a37100a78d57200e61bd908bc"],["/tags/自定义UIView/index.html","44c0b1e9b64bede1b923c7d0c4f306c4"],["/tags/自定义转场/index.html","b2ab15ee0cb5386059e33f4432f53382"],["/tags/自适应布局/index.html","f067c7121650b40df81c618234fc3013"],["/tags/表达式、变量和常量/index.html","8f89b993a4cfe3bc2531449f0f782d79"],["/tags/设计模式/index.html","d93bd0e50d83a296b1439ec07d9b000a"],["/tags/设计模式/page/2/index.html","d6d3ad6fbe0ed0b1a50ccf3b31e981c8"],["/tags/设计模式/page/3/index.html","db208c42c3155819385c042b3da456bc"],["/tags/访问控制和代码组织/index.html","05b1a44777de6f96b4796fee51af8437"],["/tags/运算符，下标和键路径/index.html","992ebfb5d68989a2a66219cbbbc81b8a"],["/tags/迭代器设计模式/index.html","5de835570f7f9c8d2881e9a6e39d9e97"],["/tags/适配器设计模式/index.html","0ae048201837ddacad5d936032a30d9d"],["/tags/错误处理/index.html","dc9359bb83cfba5883d1ebd963563cec"],["/tags/静态工厂方法/index.html","fcc0f587d0f78a9a670ca120ce62afef"],["/tags/面向协议编程-OOP/index.html","441a508ce4fcefb064d90a446bd54a75"],["/tags/高级主题/index.html","d6151b1bc23acde24212e79af33306f5"],["/tags/高级协议和泛型/index.html","cc3901ac7c0151e8a67f8b5707c49e26"],["/tags/高级控制流/index.html","a120e8bdc14f78dc5799401cd3b8c8ce"],["/为iOS应用构建输入表单/index.html","2e764428c06f9f31d644c0e3ed95a115"],["/产品开发的幕后花絮/index.html","c157c835071a92b2546f53e7146fb733"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","0f62f1c806ce84d9e328ad083b014c23"],["/冒烟测试与回归测试/index.html","39ba4eefbf441ac76a143adc6c481b7f"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","9aede7209992863f881ea44ea09c737f"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","67ed2bb13c1e06a3a906d0318757f155"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","49f5e20eb50fa27edc54b5a1a30c1bcf"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","caf490df11e0bac542f44524b49b6467"],["/在Swift中创建自定义集合/index.html","24305ae451fbfc082328df1174eff4f9"],["/在Swift中处理非可选选项/index.html","0ce2fac28c46f93a540e038d671d535d"],["/在Swift中生成随机数/index.html","24324a7bde6b4cd047431ba77d05f606"],["/在Swift中重构单例模式用法/index.html","f2b24b5dbd481b0d095db0c4b1d40684"],["/壁虎兼职用户协议与隐私政策/index.html","3d3ff36176011f47ac1c366cdc262254"],["/天天兼职用户协议与隐私政策/index.html","3d23d777b8604b220a62015a1af5fadc"],["/如何为VIPER编写服务？/index.html","2a28f1a6402b94da0056dddbb96fa965"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","44afd6e3bf7c8bc60a1856bf69d31005"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","8202e1c6cc6f8bc66f18ad55c043b230"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","41005c2c6972a06dc2a359090d98198a"],["/如何使用VIPER构建SwiftUI Apps？/index.html","0146e6078aa350507d3ae39936048ed9"],["/掌握VIPER架构/index.html","a8e640a7b8111386e52e3f49ab57a6db"],["/揭秘 WordPress Hook 系统/index.html","936c329bc8e99c39060245eaee13e56d"],["/比较工厂设计模式/index.html","0d5d7f68cff381b0a5fc28c6afa57205"],["/深入了解Swift中的Grand Central Dispatch/index.html","c5c5c2231a00a00f4dc34c14f79b5e95"],["/深入研究Swift框架/index.html","19cdb312a4623d41fdf0277b3c616cd8"],["/适用于iOS开发人员的VIPER最佳实践/index.html","703ff380facf586b35c66a8bee513c2d"],["/选择Swift而不是Objective-C的5个理由/index.html","a0e031e03a2c77e00c5fb3d799cae97d"]];
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
