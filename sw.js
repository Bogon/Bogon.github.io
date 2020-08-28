/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","6e1ae0cdb77bea447dfe7afc4f836742"],["/2020年iOS面试题总结(三)/index.html","b35122e4b5d7bbe88d9357ffc228b923"],["/2020年iOS面试题总结(二)/index.html","25264d25a864176149a26bb6c46c1767"],["/Advanced Swift系列(一): Swift 简介/index.html","c85db56b1a8d0cf7756c99386cd7ec43"],["/Advanced Swift系列(七): Strings/index.html","bf96848a105442664b82ace60b52a11e"],["/Advanced Swift系列(三):  Optionals/index.html","9f0024d2ab1ff01863e8e21af55db63b"],["/Advanced Swift系列(九): Protocols/index.html","2f9d39170ff4e77e5b2d528fba16e6e2"],["/Advanced Swift系列(二): Build-in Collections/index.html","505960e3c28aba913e2683d6d4bff00a"],["/Advanced Swift系列(五): Structs and Classes/index.html","7c30f9ed2e3628d99e20ed8445555dd1"],["/Advanced Swift系列(八): Generics/index.html","3cf5114a1584dd7f6632662a07993e50"],["/Advanced Swift系列(六):  Enums/index.html","446297b208ba820f1ca157121f28cc8b"],["/Advanced Swift系列(十): Collection Protocols/index.html","47dccc6fbd1dd1c0a9a99ebdbb15883f"],["/Advanced Swift系列(十一): Error Handling/index.html","7a3feaf63d8eb9869e1750030433bc6f"],["/Advanced Swift系列(十三): Interoperability/index.html","557cf70e5e33d3cb44f12e478c052584"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","636818e359261e59d98b9fbb6c96c4b8"],["/Advanced Swift系列(四):  Functions/index.html","10f701de3df3c258e9cacdf9075dacaf"],["/App Architecture系列(一):  简介/index.html","c646bcdf26ce4af904b89dc0be6a6f1b"],["/Functional Swift 初探/index.html","adf996cc11f6a3452249601ece44f781"],["/NSCODER和SWIFT初始化/index.html","73dc38bbd8784b5805afc5b23b852dd8"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","cef162744774cbedbb716f67044a8b0e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","84d5af2733703dfe4aaac8d68a4d15d7"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","631eb88eff5ac147a14301c723722b12"],["/Swift 5使用UIImagePickerController拾取图像/index.html","99495c9bcea77a60f3883c6b815b09ea"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","ede86d00febdd205a68eb74b1ed2c93d"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","87bcd81828d28bd5d8da9567aa969a62"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","3372a6dd90674f58e91ce408e0d36ef6"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","17e9e048500a02f41fcee23bd5183be4"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","e63ec419e4499ba057ad5b5021b541e8"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1a17fef40f9214e09fbd453c5c99e797"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","6113a6235f54c0ac18fb0fd0125ce695"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b32da554cef1ebf4aa466ecd2b31d685"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","150c91900d0b6889f7f095a84111d5b8"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","15e2758747d2b0304f5f31abf14bc98d"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","bbb634fa3e757432eba5762769ad4768"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2cd2e849568d449695d653738798ee52"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","c67eca488349d8ae51428790024ea5e3"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","fcf3bbc9b130fd3976bcc51221dcff30"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","75a93526846e31eed0363b864d618d59"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","71313d1d9979d7561c997e91e3a60d11"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","4cef36d90649a3a6d43c1d6daf8fc85a"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d25d96cd3ea89232c797d80a221c5dc7"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","e4068f1e9a295e6704923abe7e846dac"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","2d88f5ec4a2deb129c8a1fccf80631f5"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","3df315c209db3b5cf430158476d10d54"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","a584f322373ca5302b044b474e12c70c"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","99c9172868b9f6e43cd0657294ac0896"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","bc2d7f01adbf76519979606138377de8"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","174472ddc320e5c225f1c93d248424c0"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","50372319f4f01503112fec38c575f0cf"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","9f12f35335b6c27aad938b6958f0b122"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","41d38678e05b170422ee893b58464012"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","4b3c73c0e1b56bcc5000b6539fe8c0ee"],["/Swift CompactMap vs flatMap：差异说明/index.html","b4f2ca4a83452c12adebb847dc77ca97"],["/Swift Grand Central Dispatch 深入实践/index.html","e6d525bcfad115f8ed0be7e600ed9326"],["/Swift Lazy属性初始化/index.html","5e5f93234a90357afcd7581a16065b2d"],["/Swift Promises 初体验/index.html","886eef74331c7a705d7f9ad31da04eca"],["/Swift Promises 探究/index.html","a0ce333224a839d80dda02755d6e2e5b"],["/Swift UICollectionView使用指南/index.html","bfa15713a5a93b44ce9ef0ce49dfb6a2"],["/Swift URLSession && Combine framework/index.html","e9f17b3a05c9a2e6f03ab6339c7b7fe5"],["/Swift 唯一识别的视图/index.html","343da088df17c009f237956cb6929a80"],["/Swift 如何学习现代UIKit？/index.html","f4a18ae40ca505608b0db48bd376fc33"],["/Swift 用 compactMap 替换 flatMap/index.html","7ace992b0fde04c6c58e879f6c36fcbd"],["/Swift 选择和播放视频/index.html","0823df6f45df9fa38c9e26a696de1d40"],["/Swift中UIColor最佳实践/index.html","e41457a5f70d0af948ebf19ec08c5d53"],["/Swift中快速简单的工厂设计模式/index.html","0908550379f661931753216c8338940c"],["/Swift中构造函数与静态工厂方法的比较/index.html","5378728f7c3161b77e2d5695627e679a"],["/Swift中的UITableView教程/index.html","e9169d8564657c619909c7bef4dc9b76"],["/Swift中的懒加载模式/index.html","ded65c366ded3fc41ddafd0a7e773537"],["/Swift中的模块和挂钩/index.html","fc96ad476fa7180aff7db595c6fefb15"],["/Swift使用布局锚点添加约束/index.html","1ca123d495cb4dfe134f5449f5a3dc38"],["/Swift依赖注入设计模式/index.html","4e7a01d0c9e47b199e78d54605a48945"],["/Swift关于Dependency Injection (DI)/index.html","3cfd02def5ff09395340b31ac0986cc9"],["/Swift初始化模式/index.html","ac1439bb1637478774ed9b03a7bf6b6f"],["/Swift单例模式/index.html","0d6d29904f943f16098bd1021c4b19c4"],["/Swift原型设计模式/index.html","e6d6a623080397d511013dd735c0788c"],["/Swift命令设计模式/index.html","7d939941fcb64ed906e6bd4956a42005"],["/Swift外观设计模式/index.html","57b62eddb172200e01457ae3161863d0"],["/Swift委托设计模式/index.html","985ca78ccc271393d8e4a94fcef70566"],["/Swift对象池设计模式/index.html","fb59434e16b9517f1163f58dc5ed5807"],["/Swift工厂方法设计模式/index.html","7e80106f228b5917b228b38793ad6b1b"],["/Swift带闭包的懒惰初始化/index.html","93d2c9b0721c11f2c017bae01fd44694"],["/Swift抽象工厂设计模式/index.html","d4ba89815995c74a51c2230f36c47fce"],["/Swift掌握iOS自动布局锚点/index.html","8cc8eb0e19970ebc41430fbcf56faa3f"],["/Swift支持旋转的自适应单元格/index.html","ce244c0367109882f27e0add6a1b0c46"],["/Swift枚举值/index.html","f7ae142165873f17e222a093676fff4a"],["/Swift生成器模式/index.html","4ac258a0f6a7a82ea98e0a1de5a31ce8"],["/Swift结合Xib文件自定义UIView/index.html","b96b06ab1e268028992812b1ddc7ddbe"],["/Swift编写的20个iOS库(一)/index.html","1fbd07620c2b5e9457ab83f1790e596e"],["/Swift迭代器设计模式/index.html","04de20b088ffe90b11ebff590a22c071"],["/Swift适配器设计模式/index.html","e12cd797fc331620eb9723796aebcb95"],["/Swift静态工厂设计模式/index.html","05e3fcaf4d8e5821ec89e6a6363077e6"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","43026633af7c63e3b2ff9544da662f8d"],["/UICollectionView data source and delegates/index.html","1234412bcdd100f107bb03b6d598b739"],["/UIKit初始化模式/index.html","0f28b4baa3a25a86a748a89508f50d21"],["/Ubuntu18.04替换国内源/index.html","490b1b2308e13e2f34cdbe2226f32165"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","c634ddcddea711a6e2310e774a4b1079"],["/Vapor系列 (一) :  Vapor 初探/index.html","1a218c129d6e817d9c1f47773d8a6351"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","083afaf7e7f206ed0689fffda98ad1d0"],["/Vapor系列 (二) :  Hello Vapor！/index.html","40bcb64014650afdfee70bde372f3b91"],["/Vapor系列 (五) :  使用session进行authentication/index.html","84b76025b212c6d5e05260a32ff9b720"],["/Vapor系列 (四) :  创建博客数据库/index.html","f0cf36802924a4d9b2e66c9a1c6e1e8c"],["/Vapor系列(六): 徒手撸一个CMS/index.html","923889c2170d19d4324aeefa18bd0dca"],["/Xcode扩展/index.html","211330f9ae3d02da92d5380564aa75ea"],["/about/index.html","cffc1249d831b6547efc3d30370fb65b"],["/appleOS的Networking示例/index.html","dc9da57f36dcfd573f24475b57031bde"],["/archives/2020/03/index.html","db5735a1ccd70e2815b826e788cf3795"],["/archives/2020/04/index.html","341164192fab63c2ddfc89fa2065e79a"],["/archives/2020/04/page/2/index.html","944ae3d4c57262c264d599dbccaf205e"],["/archives/2020/04/page/3/index.html","d0df70fecad090497f1beb28744671f6"],["/archives/2020/04/page/4/index.html","198550b08b061f89bc5d5f948fcf0584"],["/archives/2020/04/page/5/index.html","1d7591327d0d455f7d6350e408e2e290"],["/archives/2020/04/page/6/index.html","02865a70b11f2539d4113d45f0167d8f"],["/archives/2020/04/page/7/index.html","a5ad9356b435133bbffbe46d19fe79f4"],["/archives/2020/04/page/8/index.html","7d8ef04215dc95321913804674b086e8"],["/archives/2020/05/index.html","73f1c61e4bb91b22f8700c7cd448c8af"],["/archives/2020/05/page/2/index.html","18d7fcfd2a1e568c56ad970ebc62d321"],["/archives/2020/05/page/3/index.html","3a62d183ba4238d2b4c1bd3e380ee753"],["/archives/2020/05/page/4/index.html","032a8f48cb031a458dc54deac22d2e41"],["/archives/2020/05/page/5/index.html","5775bcd81b8de64b43bc64119a8c5c85"],["/archives/2020/06/index.html","2ce78d4f5ce17ad26798c0479c45ec53"],["/archives/2020/06/page/2/index.html","06cea5992f0716f4c9909687dd116647"],["/archives/2020/08/index.html","fff3246485ff9cd3b0c24a532400ec4d"],["/archives/2020/index.html","5d9bbe498b6f7b4d1c2634220024a363"],["/archives/2020/page/10/index.html","5660f5b4e2c269f45cd9cbfdf9265ca1"],["/archives/2020/page/11/index.html","0190d75cb6d97bcac5e72fada2263f3e"],["/archives/2020/page/12/index.html","e0e823b0e6ea014558ad7d2cdefba4a6"],["/archives/2020/page/13/index.html","f55fe4c1ae467d5bc97a5f335a146b05"],["/archives/2020/page/14/index.html","64217a74ee840c342d5c23a56018bc5d"],["/archives/2020/page/2/index.html","fa13205bce19e82908c99e2c5951c781"],["/archives/2020/page/3/index.html","733b9c10ab5d12d422079598a0dc28cd"],["/archives/2020/page/4/index.html","90659c52f8b613ae3ad8d40b045cb872"],["/archives/2020/page/5/index.html","b91a24a87d24cf4476b2fe0998d43715"],["/archives/2020/page/6/index.html","b58fbb4bf1d4de7f4ea1202aafe83fae"],["/archives/2020/page/7/index.html","307e574d6091791cde20fdca8ee4eb97"],["/archives/2020/page/8/index.html","a3630771802ea5dd006e837fe36532e0"],["/archives/2020/page/9/index.html","cd8957fa8395afcc31e2969b99bd548c"],["/archives/index.html","f576c9517033f4d3e9fe94b36e1b7fe8"],["/archives/page/10/index.html","569e046b4133624eb7074196e68e46ef"],["/archives/page/11/index.html","6f8560d2a85ad28b2799775c89fb290c"],["/archives/page/12/index.html","2b828a3cb266dbf18f6818c04140a94d"],["/archives/page/13/index.html","fa8a7c9eed7ca753d24952415c8cdae7"],["/archives/page/14/index.html","ed64cdd4886724cac18c585b63b4abd0"],["/archives/page/2/index.html","3842917394c433d43ff24bd0acc0c504"],["/archives/page/3/index.html","63878131c4bd0987f7b9a87ebcc89ca4"],["/archives/page/4/index.html","c3950c024256e7c6628f0402897654be"],["/archives/page/5/index.html","13d7ec6a836c5db3e4678acc7c02d81f"],["/archives/page/6/index.html","57d0a56f4498123738144259418fa0dc"],["/archives/page/7/index.html","f11eab0e0ff259ad73ef5e28a9d190ec"],["/archives/page/8/index.html","cf405ecc37af043bd542409a9457ae3c"],["/archives/page/9/index.html","2ff66d866f35bc1d83661c180772368e"],["/categories/Advanced-Swift/index.html","b8afe4dcc33c12dc9b651aa9c4acc95e"],["/categories/Advanced-Swift/page/2/index.html","e725ed580ad6022bab7cb18d819ccb5d"],["/categories/App-Architecture/index.html","ba896afcf204f9821501f32230ac5729"],["/categories/Codable-protocol/index.html","3cbce6b6243a1f8c1396826e448336ad"],["/categories/Combine-framework/index.html","82a04667e54f63f70445b0cbfc137b23"],["/categories/Combine/index.html","d6efd9d5294bff08c5f058f059174dd8"],["/categories/Grand-Central-Dispatch/index.html","b477587d0eb2ffb03beb8b9babb8148a"],["/categories/Hexo/index.html","80768840ceaa4af93149dfcaaa45196f"],["/categories/Promises/index.html","8437885602bc22c0bd605e9268e560e2"],["/categories/Result-Type/index.html","fffc87b22153335f2e5e6e5b75c3ec9e"],["/categories/RxSwift/index.html","7c456cc98398a26fea67350b056b9d3f"],["/categories/Server/index.html","6af734b4676e4a9453cdb5b225b3c791"],["/categories/Swift-Apprentice/index.html","6c9bcd56a62e3b13a8ac38c4d886cccf"],["/categories/Swift-Apprentice/page/2/index.html","28606d43e30297c8f702d17d5c5a57d4"],["/categories/Swift-Apprentice/page/3/index.html","484d143ddcf5d45b6705dce087c13f0f"],["/categories/Swift/index.html","80227f4db0887beb91871c1595d525e1"],["/categories/Swift/page/10/index.html","cb682863df0cb578f8988ce573b11d4f"],["/categories/Swift/page/11/index.html","9ab883122574aff4d475f1d45fd99a3f"],["/categories/Swift/page/12/index.html","e7658b3bd3a9a0a69428ce282dfacf5a"],["/categories/Swift/page/13/index.html","0bcf9f85b647ec41639247f8fc4464b7"],["/categories/Swift/page/2/index.html","ac0de0436f34ba8b471f659a3abd628c"],["/categories/Swift/page/3/index.html","99cf8fe6b6043bf2c529fdc7eee283fd"],["/categories/Swift/page/4/index.html","4d91806e7f056b4bfe2c4d2f950d3846"],["/categories/Swift/page/5/index.html","03e0375fb8634112be8a73dab359d0ea"],["/categories/Swift/page/6/index.html","2eb67104dae1c7c261912d25ea3157a5"],["/categories/Swift/page/7/index.html","f675228da9f086cf8c4800c0589e9008"],["/categories/Swift/page/8/index.html","9e3fcd48bbd903c9c553859f68cb8478"],["/categories/Swift/page/9/index.html","9676d7f5c1c4adb87eabbf9241ceade9"],["/categories/Swift5-2/index.html","f435360cef6c4f1a21be07d05d42d3d2"],["/categories/SwiftUI/index.html","e1883c77cf6dfa888f20d10335192824"],["/categories/UICollectionView/index.html","8b145d0fef8bfa6c61c2aa7b85552885"],["/categories/UIImagePickerController/index.html","f8dc02cb1333c6fe15e2585b7a3ab252"],["/categories/UIKit/index.html","889f5985005b8c15bf037d96f273f1a3"],["/categories/UIKit/page/2/index.html","ee1dc627cf20dc80c719ebe96fc66f76"],["/categories/UIKit/page/3/index.html","4aaceb435ccf6cd12ffe4b8e75a2c98b"],["/categories/UIKit/page/4/index.html","b3368d75a1549e13e5d1c44b5b938a2b"],["/categories/UIKit/page/5/index.html","a877c47ff335e017ce14eaba23809661"],["/categories/UITableView/index.html","36153275a971bf35f6f6de31eaad139e"],["/categories/Ubuntu18-04/index.html","f51c478ff13d255f93280dd6c3d0f30d"],["/categories/Ubuntu软件源/index.html","0368aa57c6731f59b7b32b3202c84907"],["/categories/Uniquely-identifying-views/index.html","ffd1d3da27439d383c73f632ce58be9f"],["/categories/VIPER/index.html","551248aa0e46acbf14f971a21e6e9139"],["/categories/Vapor-4-0/index.html","76fc77dbc1e589c19192369343ba694c"],["/categories/Vapor4-0/index.html","d81e8cb3ccae4d53ff97086e91b5eda4"],["/categories/Xcode/index.html","732a2b97b3243527720fa44dd80206a0"],["/categories/appleOS-Networking/index.html","c6363f665dc7110aac7da6a93231450c"],["/categories/enum/index.html","6d2bd39e053967eacc6d0bfa12a9e0dc"],["/categories/iCloud/index.html","7c91d33f407e9d225289e6b4d89984c2"],["/categories/iOS/index.html","f3c9fb0af37837de55d5a2a3ffa70355"],["/categories/iOS/page/10/index.html","e0af0576bc3eee13a460f3032a43b94d"],["/categories/iOS/page/11/index.html","90464d348f54699f00fd52290b11ed7f"],["/categories/iOS/page/12/index.html","c3c09d8b69dd13b5a64bbe3573dd074c"],["/categories/iOS/page/13/index.html","5e1ec14230baeb0ac76a419ab1d04d74"],["/categories/iOS/page/2/index.html","61dfbe2e878a6c8aee3b9d700fed6424"],["/categories/iOS/page/3/index.html","7ace4ee2fac22732ba7cb00392845c00"],["/categories/iOS/page/4/index.html","84d59df5998390e1d6b785ef679279cc"],["/categories/iOS/page/5/index.html","d74f557d7debb431c3744787a77549ae"],["/categories/iOS/page/6/index.html","cb84b06bbb1df83b5284882c57a5d838"],["/categories/iOS/page/7/index.html","7cd919867f3d1936c9db51d9aa482d68"],["/categories/iOS/page/8/index.html","9294565160f6ca71de5e52b7ac3a6db1"],["/categories/iOS/page/9/index.html","d453f5d3ce38b6242d17cbdb0e0801fd"],["/categories/iOS面试题/index.html","9a312b5b73131023b1245a65030d975b"],["/categories/index.html","cb46650e36a52c61e9827e306354ea26"],["/categories/random/index.html","3053a49f64f5047618390bbf14587c04"],["/categories/三方类库/index.html","625afe68df35a1f66d7c368ec163ca16"],["/categories/函数式编程/index.html","5eacbd51cab716a8ee7daf75b6f045b4"],["/categories/子类化样式/index.html","1de6e32a61104c7578576b8ddb8e851f"],["/categories/架构设计/index.html","42610d27d8dc796f112f3068e13bb6a3"],["/categories/用户体验/index.html","12aabc2396d875bf2f00bd82d975420d"],["/categories/用户协议与隐私政策/index.html","85496af4a23fdb446f3ab0f7fb0eb8a1"],["/categories/设计模式/index.html","51ebf5352187e37d87011f63bc84a0fb"],["/categories/设计模式/page/2/index.html","11ca67a9113ca0608480b1651afbbfbf"],["/categories/设计模式/page/3/index.html","04ec30b0945982ec3e81e378f0f7a1a6"],["/css/main.css","04441e6ec0d3f38bace7e1c2234abbf3"],["/hello-world/index.html","c1f7447cb458e85b7434e87d7abd30dc"],["/iOS VIPER架构深入实践/index.html","81ea9ddc5a556d15279914f8ef7a04c8"],["/iOS 自定义视图，输入表单和错误提示/index.html","641a41fab676b580b6d7571d89d4841a"],["/iOS如何使用iCloud文档？/index.html","e55bbeaf92ed954ecd32a994546e0449"],["/iOS子类化样式/index.html","b1be64bf40d7c19059966fa36e0a9d88"],["/iOS自动化布局编程/index.html","067b3f6ac7aae1b4996a20c81a0ff8d5"],["/iOS自定义转场(By Swift)/index.html","389082aa6b1cb3e745c609b4901a4c75"],["/iOS项目架构：使用VIPER/index.html","3d620f77ca12e0cc261e85ea999d73b4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f2fbd7ad1bb99e174db128c7cb9c8184"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","a9b9901c7d7b879230c42496bb9bbf70"],["/page/11/index.html","5f1b25d10b7c11b6a40d74e94b7c0335"],["/page/12/index.html","41f98372efc7dc6048508543fb8b8bb2"],["/page/13/index.html","9e8edfb6758a962a126d80e5209b8812"],["/page/14/index.html","53bb312c6a6afff1bcecc04924d00a31"],["/page/2/index.html","0a9e52155aa04ca1609b89684345560b"],["/page/3/index.html","6d1e1d21eecce1328b52f90684f6b963"],["/page/4/index.html","4b6466b36ce48593a2d4b47d54e31586"],["/page/5/index.html","3dea615e10a1818d80bc3ef36e0db7a5"],["/page/6/index.html","5ba77e809c306138d0d27fe2eb299c36"],["/page/7/index.html","2080b2e43fe0117eebcf3d7cbc76f525"],["/page/8/index.html","a6913e266aa99c839525332bda9d4359"],["/page/9/index.html","ffba66247f27474d1047e0cdbd553281"],["/schedule/index.html","b611b4d31be6bc07de80accea7e7b837"],["/storyAppPrivacy/index.html","05e4f0c222689b53c0b6e515f604b39a"],["/sw-register.js","ad415f3548305fba366c94f0fbfd1fa8"],["/tags/Advanced-Classes/index.html","43ab484cd72dd8bdb6c157c761a52a0e"],["/tags/Advanced-Swift/index.html","981dcd61c53fe2c86d958becea1bf2d6"],["/tags/Advanced-Swift/page/2/index.html","50c5fa9a9406e3f466bd1fae2bfda2a4"],["/tags/App-Architecture/index.html","e63f1c5b56b7a08b592fb0209dcafe97"],["/tags/Arrays-Dictionaries-Sets/index.html","72ebf20e39dba1bd26e24ddd2ae26a82"],["/tags/Authentication/index.html","d82d24035bd5b3273cf88d3c4267f2ad"],["/tags/Build-in-Collections/index.html","8786e5fe8bbd47f5adcb35584dfd9dfe"],["/tags/Building-Your-Own-Types/index.html","0cf1083891391a0e00a00e70858b1747"],["/tags/CMS/index.html","a98d67d5957043400a30c4e306e826f0"],["/tags/Classes/index.html","aec45262d39d278973426991dfe13177"],["/tags/Codable-protocol/index.html","ff5307c23c20663786e7cb0007edcdc7"],["/tags/Collection-Iteration-with-Closures/index.html","fac7b9ce9902a9690b58812fed39c13c"],["/tags/Collection-Protocols/index.html","2fff48ba21016c0713e53834905f67b2"],["/tags/Collection-Types/index.html","e13ae63057599ff34a67ed1a8e764e83"],["/tags/Collection/index.html","32080b289311232497a89837248e771d"],["/tags/Collections/index.html","8e7f40870bb38226cc2a39b0623e059c"],["/tags/Combine-framework/index.html","bf706b196b904c0275acf9e0256afe06"],["/tags/Combine/index.html","982cb0819dc1b41b60f047326e5bc5b8"],["/tags/Dependency-Injection/index.html","96d619379ead8d70c16ad4c304e6e07d"],["/tags/Encoding-Decoding-Types/index.html","0c62586fbff26264373d90e4c0dee5d4"],["/tags/Encoding-and-Decoding/index.html","9d8e58ba76615945da5621fd6c10705b"],["/tags/Enumerations/index.html","c69e5c7d910787cbf41659464c094c38"],["/tags/Enums/index.html","66338267976f86553fd876d8ce877478"],["/tags/Error-Handling/index.html","8a3a2e91d004985f94d03cffcef2713d"],["/tags/Functions/index.html","c882ce852756be87096a5d500ee14431"],["/tags/Generics/index.html","e1695ea5859444e958b4b1dab02d0b29"],["/tags/Grand-Central-Dispatch/index.html","799b91d39b7ec58bab5aef57b19b8bdb"],["/tags/Hello-Vapor/index.html","c109f9b5b7d3980243fca2cd511886dd"],["/tags/Interoperability/index.html","6a38a040c5f4d0fc6d14e3b92254d006"],["/tags/Introduction/index.html","d262961c86847d8d1ea18a0357ac39ef"],["/tags/Leaf/index.html","b0364d9dd823a8ec238f7c3f48260c54"],["/tags/Methods/index.html","1781405ece3a2c598f348c6c41defc89"],["/tags/Modules-And-Hooks/index.html","c42b9849f2d54330cc977193106135c7"],["/tags/Optionals/index.html","f536d812ef9b485c0affe4051d2ddccc"],["/tags/Promises/index.html","daa1f646d607ef683a13649c4f29b2c5"],["/tags/Properties/index.html","7b9f2d9a7074c77a1e61b1091ed4b117"],["/tags/Protocols/index.html","8272b0a65bfb9ebda06d500c0ac5009a"],["/tags/Result-Type/index.html","37a2c01173902c7fb7bcd7dec03124e6"],["/tags/RxSwift/index.html","fb2a93ad8d4dc693ea9b93d58017ab52"],["/tags/Server/index.html","b963ee7a88d5bf9412b5e5e7e83aa5ef"],["/tags/Session/index.html","1f83b8c693aac74be05f0a58f735db76"],["/tags/Strings/index.html","d06ed3d62c3c949fb72aafec9db0c762"],["/tags/Structs-and-Classes/index.html","e9cf364fd1a6110acb2a8cde347fbb44"],["/tags/Structures/index.html","1be066fdc75effb1cc2d4c8c8b0e1ba6"],["/tags/Swift-5-0/index.html","2b67999dad2ff6de7d503a4aa9d5d187"],["/tags/Swift-5-0/page/2/index.html","67c9d8f65c23258a6825017a4794d48a"],["/tags/Swift-5-0/page/3/index.html","11b1590cf1a5b09d4fcf978b023b0890"],["/tags/Swift-5-0/page/4/index.html","aa71cd7d8f46cef6d217a2343fc856ac"],["/tags/Swift-5-0/page/5/index.html","798600d614fd1972021c92987d687136"],["/tags/Swift-Apprentice/index.html","5a22bc37020512567b0c4b4e8b37b052"],["/tags/Swift-Apprentice/page/2/index.html","508bc6528cea495e481a72539c2f2a9c"],["/tags/Swift-Apprentice/page/3/index.html","5d36f074615dbd7aa7a29ae074f487c5"],["/tags/Swift-Package-Manager/index.html","6266e77b7f89d654101e73e533c12698"],["/tags/Swift/index.html","f9cba7330220329f73af48148ca32c2a"],["/tags/Swift/page/10/index.html","afc4bf2427fe12056ce2781925fb16ed"],["/tags/Swift/page/11/index.html","a9f40c2d3f98530945a06106a08841e7"],["/tags/Swift/page/12/index.html","6db78f5347479b8a255b3079eab8e767"],["/tags/Swift/page/13/index.html","a5b615282593ab02809fa7fdd954ac10"],["/tags/Swift/page/2/index.html","dc51ea0b6fb2137057f773035ace0f63"],["/tags/Swift/page/3/index.html","70b10f4b05986a592d83a264b03f1588"],["/tags/Swift/page/4/index.html","a5998bb471458fd3d87c7647afbb9841"],["/tags/Swift/page/5/index.html","654ad338631587c5bbb1f4cae72006bf"],["/tags/Swift/page/6/index.html","26ad3eb290d382d62479e5c0cd9b6197"],["/tags/Swift/page/7/index.html","8b7037918ab2f07f11297db662e190fa"],["/tags/Swift/page/8/index.html","4efe2d315b8075f2f263b3985c0679af"],["/tags/Swift/page/9/index.html","a18579458fb5395c06225ddb4708e451"],["/tags/SwiftUI/index.html","82c46d8946202697ab096a9cd485ddb5"],["/tags/UICollectionView/index.html","9e0e2f239cd50b7acc5b982490a72c90"],["/tags/UIColor/index.html","834957dcd80de6feb81f860d87f6a632"],["/tags/UIImagePickerController/index.html","79f3f9a963a9807759f318a0227a4a79"],["/tags/UIKit/index.html","f220d512284f928c3d95cf12b5cfaf22"],["/tags/UIKit/page/2/index.html","3f8d895e866b3d0733e9b76529652055"],["/tags/UIKit/page/3/index.html","3206e73aeb4cf2d5eb0dfdbfd5404b1a"],["/tags/UIKit/page/4/index.html","06861892c1f2421e07745417974cd306"],["/tags/UIKit/page/5/index.html","3e34e2c166fcbb1da940940cc17d9108"],["/tags/UITableView/index.html","03881ed656ff8f7e987c508ba8a3fa5f"],["/tags/Ubuntu/index.html","c6cb957d7dcbfebd4802cb9f0671449f"],["/tags/Uniquely-identifying-views/index.html","ffe80e3ff25b91fca68bb54dab56a873"],["/tags/VIPER/index.html","6853ef62a85a4ec94b9d8b67336c4948"],["/tags/VMware/index.html","12dc65b90b6921130f7a1b81f7e335cb"],["/tags/Vapor-4-0/index.html","05137200ef2b6f4d9f4e786a67e82af6"],["/tags/Vapor-初探/index.html","ba1c7bffa4c8a6474f63b80cbd251c9a"],["/tags/Xcode/index.html","5b9370b55ca92e3d40eca2f93b839e23"],["/tags/appleOS-Networking/index.html","507a25e7fd7e8ed5b535df8d13c156f1"],["/tags/enum/index.html","a0a5482c179276b04091609711a9d145"],["/tags/iCloud/index.html","ab046e872b91255dd4ab4ab4b51e2aeb"],["/tags/iOS/index.html","2f99e8af3c73e782706f0399a6923dc7"],["/tags/iOS/page/10/index.html","da2377d46dc534179d81fd2ef8b8c3d0"],["/tags/iOS/page/11/index.html","2ca7f7e527d36ffbfe8139e6a5b9f602"],["/tags/iOS/page/12/index.html","dabf75e1708b596707d2f31559e114b4"],["/tags/iOS/page/13/index.html","0900001b8413e01c52caf2f48fe77960"],["/tags/iOS/page/2/index.html","9b1135fbc074aa384c61e86c5e568eb0"],["/tags/iOS/page/3/index.html","4fbe35bc73795b2531fe7b5157d54dff"],["/tags/iOS/page/4/index.html","54240ddc14b93fd7278118b1b1debb36"],["/tags/iOS/page/5/index.html","5243dbc68ece07f4c6c1f88162e9d43f"],["/tags/iOS/page/6/index.html","49fe714dc575e0b628fd4891ac0c7d00"],["/tags/iOS/page/7/index.html","565d288737399a6efdfba30dd5ece5c4"],["/tags/iOS/page/8/index.html","84c4243f29e3d7292090810e24ce6f41"],["/tags/iOS/page/9/index.html","10d3b6818af0514d1000cac12eba5944"],["/tags/iOS面试题/index.html","e1911fa5b0704424a1b152b3b137dbc8"],["/tags/index.html","8140f59af2ac7286c42f0907d6b38f18"],["/tags/non-optional/index.html","2216991a8ed796958467b33753317900"],["/tags/random/index.html","4c2a2db525c36b2f507b302cbec9468d"],["/tags/transition/index.html","26912c3159def3e20c3f9928df8f360f"],["/tags/三方类库/index.html","60ad7fbf5793b399141c21a1d13e2d6a"],["/tags/依赖注入设计模式/index.html","4cb3f0d96f67aa5c2404576625d89bce"],["/tags/值类型和值语义/index.html","5f0826726ec1bfe9eda52cf7fb8be44c"],["/tags/内存管理/index.html","a19bfc06997193f5b4dbee0e7df0f709"],["/tags/函数式编程/index.html","812d94fd4310aeefb6f180629276e707"],["/tags/创建博客数据库/index.html","de2be66e4cc987a791b9517374fa34e4"],["/tags/初始化模式/index.html","16a25de38cc59965d0f83c7f2720a2d0"],["/tags/单例模式/index.html","f1d8039478e67170f7ef316044b668cd"],["/tags/原型设计模式/index.html","941eed0dcecadd99bfc4ea1381bb1d32"],["/tags/命令设计模式/index.html","328b7ae68898510e60c4ce81fd9ed0f8"],["/tags/基本控制流/index.html","eae53a78e0d2266dd282a48a3a930957"],["/tags/外观设计模式/index.html","4a217821274eed5596c9e2745854b21c"],["/tags/委托设计模式/index.html","10de1f3f4871d4bc4e4687e96c825226"],["/tags/子类化样式/index.html","c637ec63fc96b78bedc365a40183f855"],["/tags/对象池设计模式/index.html","4c71577eec584e8f769f30d03d4aeeba"],["/tags/工厂方法设计模式/index.html","edd2e1c023a81cc3bf24052de41e1712"],["/tags/工厂模式/index.html","a747872ce10afe889252938a82ad005e"],["/tags/工厂设计模式/index.html","002cf07b6af890692b4d191e6651464a"],["/tags/懒加载模式/index.html","0c32caf5522a39fcdac47282261bed55"],["/tags/抽象工厂设计模式/index.html","15968c3f934513f91a8bae87dcf5d6be"],["/tags/构造函数/index.html","08235ba491d5ef06a16b8f7daf814f37"],["/tags/架构设计/index.html","e82aad21716f8d85a3b6ceeab6bf25e1"],["/tags/模式匹配/index.html","99322c09dc92cc9cf3657625d8e23cc9"],["/tags/生成器模式/index.html","79af6179a268fdf6bbd95a7f445dedb6"],["/tags/用户体验/index.html","34a48f1e5133d4b9cd0e837143303186"],["/tags/用户协议与隐私政策/index.html","d195487a16b9b5dcd4631376a379e98c"],["/tags/类型与操作/index.html","9bede62ae8664e9ac2e52044a5517d87"],["/tags/自动化布局/index.html","aeca3e1d3c73eaf4eba1465f8ce84439"],["/tags/自定义UIView/index.html","e8b5717c42a8ab6ee580373285eb4f94"],["/tags/自定义转场/index.html","f5f7c9d84e42f19931809130b45255f6"],["/tags/自适应布局/index.html","2c3e12a730c678c2c08e1a3a09fea0ad"],["/tags/表达式、变量和常量/index.html","dee4a8948e0cea9e38d080c5ccd6be1a"],["/tags/设计模式/index.html","fbed021dea70d0f96f5faac370d3fc66"],["/tags/设计模式/page/2/index.html","c0f49165aa3f80a924a06afc7e050174"],["/tags/设计模式/page/3/index.html","c5a8702c253cbed41f2d613b2a50b002"],["/tags/访问控制和代码组织/index.html","36e1089bda9f24d04c14adbd9f57dd23"],["/tags/运算符，下标和键路径/index.html","e01faa13dff14c7796323cdc7224e1d3"],["/tags/迭代器设计模式/index.html","c22e41893fbd8bf1b961e444a4bd65ba"],["/tags/适配器设计模式/index.html","b286b59fd0abf242eb3ba999c9fe1ed9"],["/tags/错误处理/index.html","708f22f78c8f23a9ecfd0bc17ef7feb3"],["/tags/静态工厂方法/index.html","8a4da2a589f24f82df9bfd4f6f94c375"],["/tags/面向协议编程-OOP/index.html","9bda824ec5d273a21eeaefacad50e1ac"],["/tags/高级主题/index.html","cc293c88da602c8f2a72a22b46385851"],["/tags/高级协议和泛型/index.html","4268738d9af441c0221a66a7a454850d"],["/tags/高级控制流/index.html","9ab47da0b83d7e17f147d8d3ffdc0abd"],["/为iOS应用构建输入表单/index.html","631e4f17d58a502785ceec05d9606355"],["/产品开发的幕后花絮/index.html","dc2512d4b147ab5ef74c825ed822c5cb"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6cc7a50386427f1f5383d87a337dafde"],["/冒烟测试与回归测试/index.html","6bd419ab2dcf30c8ef13df450580d816"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","b72669236bc6fc3df3f9369bacf90d80"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","6ed7b881e3eeb474c7da95799799ab3c"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","edbe267339f51f816e882fd7e47475b2"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","f764c4546058b3dcf77f4367f566ab8a"],["/在Swift中创建自定义集合/index.html","5c0a04b016ab2d3e14e0ec441ab16601"],["/在Swift中处理非可选选项/index.html","53befbb6840fa6cfbb8aa7e7cbe687d3"],["/在Swift中生成随机数/index.html","2f5c0bece9eb6282803a69b60de29696"],["/在Swift中重构单例模式用法/index.html","ca5cc35bfcb41febdb3c825d5cf41c16"],["/天天兼职用户协议与隐私政策/index.html","7948ed75e9dff78d9e7a3513361ce1c8"],["/如何为VIPER编写服务？/index.html","3cc9dd0ae3ea35eea81c64791dfb30fa"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","b36463499bc3d2504f0fb767ebcc073f"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1e124383f817b12603cd650b542e895c"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","ab4dcf672e7b594a487552bb35ebaed4"],["/如何使用VIPER构建SwiftUI Apps？/index.html","747b3b66093e9f6ff79008f879b197a2"],["/掌握VIPER架构/index.html","bcaad9336daaf2e06022fbc118f885a5"],["/揭秘 WordPress Hook 系统/index.html","9972f47232046094781847e1a85cad9f"],["/比较工厂设计模式/index.html","3ac4d9b5714b11390681d656ec50d2a1"],["/深入了解Swift中的Grand Central Dispatch/index.html","3e44a0a00f0a52f2fedfc74c40308697"],["/深入研究Swift框架/index.html","51ee164944ee13fe8815d514c672c848"],["/适用于iOS开发人员的VIPER最佳实践/index.html","eedf3feac7c32083a62db922f84bd741"],["/选择Swift而不是Objective-C的5个理由/index.html","2ce62268bacb1762765a6af7f9055b36"]];
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
