/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","4b602d984d7a988821b12e47c7ff7cd4"],["/2020年iOS面试题总结(三)/index.html","c189ff4f9599a22a504dcb126fa475dc"],["/2020年iOS面试题总结(二)/index.html","9ee81db1e297a7b77d65fb76ef52c971"],["/Advanced Swift系列(一): Swift 简介/index.html","d625eb0512ff8cd93f69126f24f9e7c6"],["/Advanced Swift系列(七): Strings/index.html","fb9404799845bce0965568dbe7481ea8"],["/Advanced Swift系列(三):  Optionals/index.html","32dd8091abe7203fcecdf43251a629f1"],["/Advanced Swift系列(九): Protocols/index.html","e46018ff05aa35ecced50f7ef7ddf2e1"],["/Advanced Swift系列(二): Build-in Collections/index.html","b4595a847fcc28245f670f8b666af285"],["/Advanced Swift系列(五): Structs and Classes/index.html","19f283ba5ddf20f55f5955f3c84d17a1"],["/Advanced Swift系列(八): Generics/index.html","c0448717a002ab71313dffbf673b2325"],["/Advanced Swift系列(六):  Enums/index.html","74b79c6f4385d288141e39283be947a1"],["/Advanced Swift系列(十): Collection Protocols/index.html","eb7c9ab7c18f317b7cfd5dfe2833fd4d"],["/Advanced Swift系列(十一): Error Handling/index.html","79f0f54d7610da309516c537206e395c"],["/Advanced Swift系列(十三): Interoperability/index.html","a0022e9e224c2b3ef6bd931be4471d7c"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","3667310c51cd3f3782a5cac7201adf9b"],["/Advanced Swift系列(四):  Functions/index.html","c9fe3c2b0563be52e5871ee94689652f"],["/App Architecture系列(一):  简介/index.html","b7e58e2b9d6daa7022605108d7ebf8e7"],["/Functional Swift 初探/index.html","d23989a894322a7ea81ac222b6dd4289"],["/Git 使用小技巧/index.html","d301ad2a3f2f3baace202343609d752b"],["/Go Protobuf 初探/index.html","37a6aa42dd5067020761b75e1cb7d9dd"],["/Go mysql Tips/index.html","8e45e97df0efc1eccb172f1de6a04e2e"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","a10d85fb91d87e7cb2fd14d9921050f5"],["/Go 入门篇：2、Go 实效编程/index.html","73719224e922801cb33250a35018c9ba"],["/Go 基本语法初探(一)/index.html","5abab30e6808bf71c510563c526618f6"],["/Linux VIM 命令及操作小结/index.html","abf4ec5ce91bb058e931e550fac4b471"],["/MySQL 基本操作/index.html","670c2b6b3666571231705bb66b984f53"],["/MySQL-列类型和数据完整性/index.html","feaa3d9ff739ac5c9a596cdf4a4d3b05"],["/MySQL-数据库设计和查询语句/index.html","4ed54145f76c789d6a020cc1f944e683"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","b7d3d24dae7b58abc9140d1cac132395"],["/NSCODER和SWIFT初始化/index.html","2dee92b2fa98bdd20f79fe0a7696b000"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","5e980d444da097f6a22a10a8f6484c98"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","45ea881fb70e590ef4dc7b9863d1ed86"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","37a8bca394e673c641cd2664cff83899"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","9e50daf87fdfb19e79eee2fec51781fb"],["/Sqlite 使用Tips/index.html","3ddb22faa7875fa79dd919670cae5351"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","ad6ea7542236374352de949281819782"],["/Swift 5使用UIImagePickerController拾取图像/index.html","44d224064e7056b0df5d06f9c28b8cf7"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","d9336b8647fbfb5b34bfec8205c474bd"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","596f9a8ac337ab9dfeb92de33fa3c373"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","558b9c53b10a81fb89cb35f20b10bc63"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","fd0d03c66079b4e476d530c0e48f9fcb"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","d1ec82f20c1e249352e2f81c455df726"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","4cab016af619a2b2848b7781b6622774"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","75c7e4b3b148b4633e1f95196c8589ff"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","d171832dc3f262dfa3df14452a897a5f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","88198070655a09d93a584536ace64de2"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ac26455ceeaa4ac5e716322eb3d7b43a"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","b07d9c381fb9a54c7f03db39a6afbb22"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","418aec44d4841b62fbcb1980349aae88"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","da5a84a2a8ee2d080b981fef06378f8d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","39709f9f139dd072d5197b2fffed9515"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","2c865ed36ff2eb5c89369b8397b8cc11"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","fe2d5b618f7ee782e3ebb4f297021f61"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","09d26df4cd55abc206733cf7395c4a77"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","16f236268d1beb49105303666c50c249"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","bf14fc4c1bde8a09f4bbf3c17fdf59a4"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","fec856729860c31db918daf868c840d2"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","1baa51811bec26c0b2a3b73035e60889"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","2b5706ae34cd7cd01af8824f1513ac63"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","33044e75d72f91248f7ef6adc0b026da"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6e63c10b3052eab5e4c53fecccc38932"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","ebfdf73afdaf6b8a8924165d63a7ce4d"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","7c7c11b5b399f3c8a426072ff1ebe462"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","88d93eeea74ae7d357472b0912f95f8f"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","4cdf2fcc21e60e71d57ab3049dd7af22"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","319672dbb83a0b9354146284496fbbd8"],["/Swift CompactMap vs flatMap：差异说明/index.html","f0eac9c71f06a3e7707c34259956b6d5"],["/Swift Grand Central Dispatch 深入实践/index.html","a8f4d83c28e1ee253f42ca394993fa05"],["/Swift Lazy属性初始化/index.html","2ffa0834887a47ff92724f45931741e6"],["/Swift Promises 初体验/index.html","c0540db9dcdb2fa9b803fea6c9d3fc48"],["/Swift Promises 探究/index.html","441e1642bbd09ef9171e9752add18ca7"],["/Swift UICollectionView使用指南/index.html","1283c4663ed5108f7582ff8b7e784b08"],["/Swift URLSession && Combine framework/index.html","ab823f3fc8ef888b00f4886bc44d94a5"],["/Swift tips/index.html","c6d35d91bc5d78923143ca45c094f488"],["/Swift 三方库：GRDB 使用指北/index.html","8f8e8b59956acbd1ad426da871fc9ee8"],["/Swift 唯一识别的视图/index.html","74c32de06840de2027179094eb17cc13"],["/Swift 如何学习现代UIKit？/index.html","942dda5fbeadf16574457abfc3c51831"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","3301f984d50b08592d3d41d1cd7413a9"],["/Swift 用 compactMap 替换 flatMap/index.html","858417665a81edfa6306ddb43680ed4a"],["/Swift 选择和播放视频/index.html","b6c9fc9e0583fab1498b796e68ede4c0"],["/SwiftUI 系列(一)：1、 简介/index.html","b787aa1506122584155cfd7d2fe6c244"],["/Swift中UIColor最佳实践/index.html","0cef30b7066fe9b72299f97dc712f1e3"],["/Swift中快速简单的工厂设计模式/index.html","526d9331ba83e96b9d3a29db10e96994"],["/Swift中构造函数与静态工厂方法的比较/index.html","b7d2a1f3a392924865066b0aefdc03b3"],["/Swift中的UITableView教程/index.html","8c2f740b8bc090dcf65cb71de8646f5f"],["/Swift中的懒加载模式/index.html","633a618aee0aa7a542fec754fadbdba9"],["/Swift中的模块和挂钩/index.html","f395f444661c7d3790140544126104c4"],["/Swift使用布局锚点添加约束/index.html","33d6839c4fa88ded52a4f7cbae5ddd6b"],["/Swift依赖注入设计模式/index.html","0fca027697f389324a304a4be6d4fc83"],["/Swift关于Dependency Injection (DI)/index.html","4812d07266b39c1a63bbb8cdcf730114"],["/Swift初始化模式/index.html","c3b98177b3a4d0574b6ce2195130c5a0"],["/Swift单例模式/index.html","181f82feaf291b27a4889bf112a6dd3d"],["/Swift原型设计模式/index.html","46f64db0a7b58650de41512e8549ce3c"],["/Swift命令设计模式/index.html","1c6b81bda0b130683fbe15a4f285542d"],["/Swift外观设计模式/index.html","d2bdf3a7b72fdf0f1acce7744a8d3a59"],["/Swift委托设计模式/index.html","d65bb6a2c96507cd137241338d90c7e0"],["/Swift对象池设计模式/index.html","f43a1c6862bc8ec49bcd98651f6b794c"],["/Swift工厂方法设计模式/index.html","a7d045701e176e85c7c7b304df999ed2"],["/Swift带闭包的懒惰初始化/index.html","ad9c710e06009201344662453c30b6e3"],["/Swift抽象工厂设计模式/index.html","8aee4d0de6d5e0e48f26d2be64e2db86"],["/Swift掌握iOS自动布局锚点/index.html","b9e512fef9705061fb5a9b70496896cf"],["/Swift支持旋转的自适应单元格/index.html","cfbb6f8be30cd10a5eaf323a3b3b1112"],["/Swift枚举值/index.html","ef211ba8db21775b2e7824913048b482"],["/Swift生成器模式/index.html","143c471238ccc6e842427ee8939be65f"],["/Swift结合Xib文件自定义UIView/index.html","37f027c138eeab8c84d325fc0deb12e3"],["/Swift编写的20个iOS库(一)/index.html","2b14a7c92662d1dad39eb8ca659f3933"],["/Swift迭代器设计模式/index.html","2c9323311f7322d1f52051c134d675db"],["/Swift适配器设计模式/index.html","6a9e826d86b08e61be8043b381c5e406"],["/Swift静态工厂设计模式/index.html","636ffa13ec2c6552a20a4474f8ed12d0"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","c6fa988b76cbc718fbaab387e7d0b25b"],["/UICollectionView data source and delegates/index.html","e9e9d6d121b8dc9983c53cc413da3659"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","9544ce87037eaa8c5defa4ae22bfa0be"],["/UIKit初始化模式/index.html","7d15dba54f19a9c5e546e118a532ae65"],["/Ubuntu18.04替换国内源/index.html","186950638ec0148bc28478bd6967f18c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","39b2df939c55fcf2ee993fe37e6f88b8"],["/Vapor系列 (一) :  Vapor 初探/index.html","59b0c60a238e5a46a3eaf9ce7196b90e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","c8a6eee27da605929f2cd06608e6cd6d"],["/Vapor系列 (二) :  Hello Vapor！/index.html","803d4e2ef3da2da3fcef151b01869008"],["/Vapor系列 (五) :  使用session进行authentication/index.html","d77231204e96afb25343c6dc846c52c0"],["/Vapor系列 (四) :  创建博客数据库/index.html","b331d694eb117861bdd6f7c2b5951853"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b8c61d817054212c71c3ea3368732b1c"],["/WKWebView与Native交互注意事项/index.html","ff6d6ab9fa74e8db1730166044bf9ab1"],["/Xcode扩展/index.html","1b80d9600cbac3484986d97c21de31d3"],["/about/index.html","60bd8f903d82b3127a4a5704d4eed4f5"],["/appleOS的Networking示例/index.html","f5e069720fd2065eaf4f7e6f6ec7e02a"],["/archives/2020/03/index.html","83b1fb204b1eaea543d18314add14633"],["/archives/2020/04/index.html","8036f37a4e8ef155c102b83d18137337"],["/archives/2020/04/page/2/index.html","afe9719ebe513e668e3bed86374a8de7"],["/archives/2020/04/page/3/index.html","fa2a7838dfe0f1ba9c27d121a8bebc3d"],["/archives/2020/04/page/4/index.html","be7eea3a0abf6b6432c5b3601c118015"],["/archives/2020/04/page/5/index.html","ef1d0edb47e2e157a0c3b37430a28477"],["/archives/2020/04/page/6/index.html","9d4750f81a10da4fedec314de20823bd"],["/archives/2020/04/page/7/index.html","43a943b20143c2a061681b31d566daed"],["/archives/2020/04/page/8/index.html","005d50305254b03e8d3ee7e3f48fab39"],["/archives/2020/05/index.html","debc8a95fc8bff0a1701b21d2bebfebb"],["/archives/2020/05/page/2/index.html","923821843bb15e610762b9b7f16b69ef"],["/archives/2020/05/page/3/index.html","5a8e12d5644e1dcae6474af224c6a332"],["/archives/2020/05/page/4/index.html","aad3eeab9497746aa119286688e00282"],["/archives/2020/05/page/5/index.html","7cb0f8c27bcd1ca184917171afa09edc"],["/archives/2020/06/index.html","a42c525adf24a313060b10be7b059334"],["/archives/2020/06/page/2/index.html","33fdf7339d91dac197e75ae6323aec6a"],["/archives/2020/08/index.html","fdde4b6e6d87baf3a8e620dc12d8382a"],["/archives/2020/09/index.html","f133a53ae1aa3413abd9ec7ec0b09931"],["/archives/2020/10/index.html","67113810d41e9ee043168f08280c37ed"],["/archives/2020/11/index.html","321b3a075f93dbada4b726641a262ac2"],["/archives/2020/12/index.html","2b949450148b93296d33e221a8ef2fc4"],["/archives/2020/index.html","b8c0c0c8d1ff50d4995f8a96ff9ddbf0"],["/archives/2020/page/10/index.html","e42e4d7a58a5b3195a3ab890008642a1"],["/archives/2020/page/11/index.html","09f1ed4dbca630ef9aff080733a941fc"],["/archives/2020/page/12/index.html","37db4758bab631e85ab6cc3036c4a5b3"],["/archives/2020/page/13/index.html","0a89637238f7c6fed46f53ff481d2a1e"],["/archives/2020/page/14/index.html","12012cb5000a42702988cf3c9bdf6e9f"],["/archives/2020/page/15/index.html","3d6ed5e6a826ceea79256d0689f1ea23"],["/archives/2020/page/2/index.html","80ee545ab4ff519c8933fcfe003c1ddc"],["/archives/2020/page/3/index.html","00c950526af444e1402757d95780dee2"],["/archives/2020/page/4/index.html","63cc07911d2a6823f5dd74a6cbb861d1"],["/archives/2020/page/5/index.html","27d02a80c1c3dc18f052284849533001"],["/archives/2020/page/6/index.html","160f4d012b0b63ddc51b62276d7080f7"],["/archives/2020/page/7/index.html","6cd2b1b6021468087cbcc053b2cb40a6"],["/archives/2020/page/8/index.html","6184eab6cdb0cea91238f42dd346fa72"],["/archives/2020/page/9/index.html","3fa6c953b3b0137ac3e178a74ff4c125"],["/archives/2021/03/index.html","12deee7aee85ca53965ac596ec500f1b"],["/archives/2021/04/index.html","4d562701ac17f32bf80c8c1625f2b264"],["/archives/2021/05/index.html","8832cabfce1e31dc0f6e86c87d6748c8"],["/archives/2021/06/index.html","7bd0fd825ecef0a3118c4bc12fb44877"],["/archives/2021/07/index.html","bc691bf0ed3c43861507c9767cbfbcec"],["/archives/2021/08/index.html","ae29544b9e936a2f9f36873e23b7e238"],["/archives/2021/09/index.html","b8452a02f3eaba97d1eb1bd350768296"],["/archives/2021/11/index.html","642bd13520279588d919c9cd6718bfeb"],["/archives/2021/12/index.html","f56e27903b38838cba2c1a387a19cfd5"],["/archives/2021/index.html","0b3996a58131654f0455dbf7f309939b"],["/archives/2021/page/2/index.html","4463c4e06b37ea187b1d2625fb858957"],["/archives/index.html","f073b2cba5e669f4f12ff54a13c2515c"],["/archives/page/10/index.html","329c7bb3cb54878d747f36249e1ad70d"],["/archives/page/11/index.html","05bcf6d8218864e3de28fa75407e0ff5"],["/archives/page/12/index.html","3ed75fe2bab972c4f91ccf65c158d156"],["/archives/page/13/index.html","74ee03a23a1797607f0c5682a59ad477"],["/archives/page/14/index.html","aa4c41d8f42a97ccc66f084b31b73484"],["/archives/page/15/index.html","2bb17282ee9767db2ac6452c2aa3c223"],["/archives/page/16/index.html","b65accec390c3084d474d4af096ae584"],["/archives/page/17/index.html","08c45f807c6bdb2f3ff0e260c8d23414"],["/archives/page/2/index.html","555008258eb7581c4d87613b6c37de70"],["/archives/page/3/index.html","9bf15bed9ecc7728b5278c63885c71dc"],["/archives/page/4/index.html","81de3111584236d7d4119b0ed3dcf3f4"],["/archives/page/5/index.html","67b11b62e8c450f1600dc685ea86db41"],["/archives/page/6/index.html","4f5d53bab8c9c324192118e2b00dd7ba"],["/archives/page/7/index.html","c3feb3bef7502f45f1888a25e8f502dd"],["/archives/page/8/index.html","1a2effa0e595d97422874839ac9f9665"],["/archives/page/9/index.html","2a51afb77fda9f645d8fdc83010e403e"],["/bugly 上传dYSM文件小记/index.html","e76f2f106f8eb629f37521488498154b"],["/categories/Advanced-Swift/index.html","fd749e67cb61a687f5e575cac7659208"],["/categories/Advanced-Swift/page/2/index.html","d12d0688256603b281750272021192e4"],["/categories/App-Architecture/index.html","9a9ece7a7812f500862b5ad732e54d01"],["/categories/Array/index.html","1223b5e6c423a15e65fb736f5eac692e"],["/categories/Codable-protocol/index.html","13fcd52d000832446162f124577f9099"],["/categories/Combine-framework/index.html","63f17ccc3afc0e25f43e6b4eaea43ae9"],["/categories/Combine/index.html","ff51a006207a274a4216bde8345d2ffa"],["/categories/GRDB/index.html","833ba491aedb633b902655bd2094e181"],["/categories/Go-入门篇/index.html","212c69baa85f256d6e0459679beb09ab"],["/categories/Go/index.html","badf0ebf7e347d13fce1e82ca331925e"],["/categories/Grand-Central-Dispatch/index.html","c738ce40b1fae279ae2f3291012432d1"],["/categories/Hexo/index.html","bb1c2dc6d20ef55f490752a30a4e94a0"],["/categories/Homebrew/index.html","04e934ed7d81581b6400f5d4d86084fa"],["/categories/Linux/index.html","f34777f4c5a053854acb0864bb83f0b8"],["/categories/MySQL/index.html","c5d2ab6e99c73a82f94031f19396ccb5"],["/categories/Promises/index.html","36a21884ac95d990aa1b363fd256b65c"],["/categories/Protobuf/index.html","cb271559024930cfa72a9215f7db7757"],["/categories/Result-Type/index.html","93e9c16c33d332a574d71512186c480f"],["/categories/RxSwift/index.html","228ca660dc8d3cc4eecd5933a2f7152e"],["/categories/Server/index.html","f01c2cecd2769c822742ffcc6097aa64"],["/categories/Sqlite/index.html","0cacf99e1520bdb777ddd60999a1e333"],["/categories/Swift-Apprentice/index.html","3a2e5ed6eef793f8224305066b3f9b66"],["/categories/Swift-Apprentice/page/2/index.html","6e49914e1cc60324272de7a3c56814fb"],["/categories/Swift-Apprentice/page/3/index.html","f0b5be050e325b3c8fa5cb0fd6c02bb9"],["/categories/Swift-源码阅读/index.html","7b10149fce58966a30736e43eebc0274"],["/categories/Swift/index.html","513731290fb08b76734e6b874d600a51"],["/categories/Swift/page/10/index.html","613baa0f48a29134bf246925fde67a2b"],["/categories/Swift/page/11/index.html","c27c9ceb3a094f47e16da563ed07c30c"],["/categories/Swift/page/12/index.html","e37b8ee48db4a4f67ed448240a9cb4b5"],["/categories/Swift/page/13/index.html","8fc97682140a1446e65a11fd2c96a2bc"],["/categories/Swift/page/14/index.html","25fa645f7bb28d7772447741ebc105db"],["/categories/Swift/page/2/index.html","a1875fe5b956b0f99671ea08d16e63e3"],["/categories/Swift/page/3/index.html","b4de3ab24466e42ddf27baf24267f09f"],["/categories/Swift/page/4/index.html","498ad266e8cb9899219320695477232c"],["/categories/Swift/page/5/index.html","b88860d9a08de7bb6af3f9769a058ac1"],["/categories/Swift/page/6/index.html","7574c58f970cc04009eeb19aa43f08b9"],["/categories/Swift/page/7/index.html","91b326217769f9d153d483da0e06e62e"],["/categories/Swift/page/8/index.html","516e6efc541e72082ba14a001f643a5d"],["/categories/Swift/page/9/index.html","b20869f4490a2a7c1a3204a9dc419776"],["/categories/Swift5-2/index.html","1382045ffb8ba7ca86b86336314258ec"],["/categories/SwiftLint/index.html","39c3a887db10cae05716cc1183ad3d99"],["/categories/SwiftUI/index.html","f7210f037d31190ab40e5a2f3b06582b"],["/categories/UICollectionView/index.html","5351e68d36b074691bc5c64e0009f6fb"],["/categories/UIImagePickerController/index.html","78e7a74b455bda395b98782fc3b33ea5"],["/categories/UIKit/index.html","bb70a1a6accd443845d33d19f50d6b50"],["/categories/UIKit/page/2/index.html","fb7f9b492f0a41b31683ab5b37e5f997"],["/categories/UIKit/page/3/index.html","68e445c78f4919a2fb181ee874cd4116"],["/categories/UIKit/page/4/index.html","6d929ef99f0419cba98b9ce46e6669f6"],["/categories/UIKit/page/5/index.html","e3d80e817c2941d119ff2a9198396fcb"],["/categories/UITableView/index.html","844d556e295ffc226c624c89cd47f2d2"],["/categories/Ubuntu18-04/index.html","6a1f67074ca9942deefb0fcd708505ba"],["/categories/Ubuntu软件源/index.html","e090af4879f74362a3a630faffc1566f"],["/categories/Uniquely-identifying-views/index.html","bf49b77e8b599bb4e1ed8cb9400d7cd3"],["/categories/VIPER/index.html","d564c76fe42d5706fc360e9ba77b2d81"],["/categories/Vapor-4-0/index.html","310196893f3a2d85d3c3028b307537bf"],["/categories/Vapor4-0/index.html","92290c86391e122628da5e17b6e432a1"],["/categories/Vim/index.html","4d94d0ede35f1edc63457e373ea39c73"],["/categories/WKWebView/index.html","7834285e4043af42199a7bfb0445c6bc"],["/categories/Xcode/index.html","8e686bf3ce0938458eea84d554189a0c"],["/categories/appleOS-Networking/index.html","70b427a574acdf616149687c932537e8"],["/categories/bugly/index.html","f54e494d73408c8badc10f9f8cef890f"],["/categories/enum/index.html","0fef9ceec4e9c8e52aea281efaa10be2"],["/categories/git/index.html","0f9f9767ebee5a6175bde4e74086412f"],["/categories/iCloud/index.html","37d297b25ae4b8f3a0c73bfe845ba5a0"],["/categories/iOS/index.html","3d9792c9d730305ce33414f5252bbc9d"],["/categories/iOS/page/10/index.html","a2de63c9ed8b675569086730b105cf9a"],["/categories/iOS/page/11/index.html","f01443ed5c10d319a1cef67669bc5628"],["/categories/iOS/page/12/index.html","e98e33ff8977b457be22696b116cc47e"],["/categories/iOS/page/13/index.html","8157e71797170c551cc8c365f34b638a"],["/categories/iOS/page/14/index.html","6ddf046c4e2a83b8c333e9bf8df8de70"],["/categories/iOS/page/2/index.html","f72f459a63c6520a3f962f66e722357f"],["/categories/iOS/page/3/index.html","14c0a371cb00357faa25471817536a12"],["/categories/iOS/page/4/index.html","a6b1319c8d639f21f3a9fe2b6c3a2288"],["/categories/iOS/page/5/index.html","dbec81980350f8683cb01352d4083b52"],["/categories/iOS/page/6/index.html","c0b8cbd187faabb12785c6ee0466058e"],["/categories/iOS/page/7/index.html","d9a7c985b562317da1fe5d54849bd1a0"],["/categories/iOS/page/8/index.html","4c28f853b5d2a56fc203ef25c61e305a"],["/categories/iOS/page/9/index.html","7fbfad643ad306a111b7f734f5b42a1d"],["/categories/iOS面试题/index.html","2b5cbe8a146e1a4528f8769a24aaf400"],["/categories/index.html","ef1524b3826c4e91effa6e0c5917ba74"],["/categories/random/index.html","0a02376d0ea572251acd7e73db1efef0"],["/categories/三方类库/index.html","5272b3abb613e2724d982441214a5b3e"],["/categories/函数式编程/index.html","9c1cbbbb08c8741073e87c163fd7d004"],["/categories/子类化样式/index.html","1c6dd03e074e28b5bae51da23a8f5207"],["/categories/开发技巧/index.html","cd1012ff0ca7a0304360f8441f7a64a3"],["/categories/开发记录/index.html","0c48102ab5bdbea067a5ef2bb67f9c04"],["/categories/数据库/index.html","10b08af38626dddebf7936008939b3f5"],["/categories/架构设计/index.html","f94cf9a46d544500df2aafd1398e43c8"],["/categories/测试/index.html","282204194d93bc9088fdca76d7f272a5"],["/categories/用户体验/index.html","170907a60b90ab1fa9062408bddc2960"],["/categories/用户协议与隐私政策/index.html","b93432711647ed99fd96dd97fff9f049"],["/categories/设计模式/index.html","22fead8becf6a6ed1a92819424471ce2"],["/categories/设计模式/page/2/index.html","8d8aeaf20310301cc7697bdc9b2583a5"],["/categories/设计模式/page/3/index.html","e5d0e8c534c29e4d24bf202dc0817374"],["/css/main.css","83e0c066a7afe9e9f03f298ffcec3aec"],["/hello-world/index.html","07f3962b93fa152421423bd8063c7e93"],["/hexo部署失败/index.html","c7fa3e70755f4cfa01cffb8a2984e892"],["/iOS 15 适配/index.html","52ee3d793c243923916ad7d7097fc2ac"],["/iOS VIPER架构深入实践/index.html","967257fc2226e3203bd67acae41a13d6"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","cc58d815a0125c0784227c407a8bc1ce"],["/iOS 自定义视图，输入表单和错误提示/index.html","f40d1466396ea8e8ce110574be4dd6ff"],["/iOS如何使用iCloud文档？/index.html","6695c48181a74a7b583ffe5e5dcba54c"],["/iOS子类化样式/index.html","ba162afbbf2fef3332a1e02a0c292121"],["/iOS开发记录<一>/index.html","e7250785eb956dbcaf4372781512d923"],["/iOS自动化布局编程/index.html","8947640d821c588e7128408b7661560d"],["/iOS自定义转场(By Swift)/index.html","2cb7cbd44e1633bcdb57f6daf030f9f1"],["/iOS项目架构：使用VIPER/index.html","1348b48a2440df7f6526e8614d3e91af"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","74d4ff4adedb5e0d35a13cbe1bcaf034"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","5670b071b0effaa5e673fc473abb5bb8"],["/page/10/index.html","368ef275f0be4250dc720bbeea100ced"],["/page/11/index.html","a8ac51a63fb61b7eb1dcf70255ca9850"],["/page/12/index.html","54b0c8c13e405f0340e209edfdfddc29"],["/page/13/index.html","3378f99b914ffff4952e132042c291e9"],["/page/14/index.html","2b7f165f4bc090f868131123f5037dbe"],["/page/15/index.html","2b4aa9aab2a85edae5a4a770c66dcd61"],["/page/16/index.html","f66997f9f2c0781cf71aa43cac0290bf"],["/page/17/index.html","ad4765db48a38e33a4c930ecc6a77b00"],["/page/2/index.html","5fcc560db64bb65c61d1ccf84f8a9334"],["/page/3/index.html","9675ed1c3738a82932fbeaa0f93aa33d"],["/page/4/index.html","35c478490066b882d5012906d0e6cd00"],["/page/5/index.html","7f70696c48dcd49bb54d455fb55b63e5"],["/page/6/index.html","7679413c9fd3ab063bf8cfb2818540e1"],["/page/7/index.html","622900c6349e2282065f193707decf1d"],["/page/8/index.html","5df10c8918203b8e7a9dc1ebbbcd41cd"],["/page/9/index.html","6621d39c1555dbba2699e4932b7f77e6"],["/schedule/index.html","c9ab901298841fa53222e5c268d9238e"],["/storyAppPrivacy/index.html","8570e3eb293c09c050bf15ed3ac3e64b"],["/sw-register.js","b3ed4496fba04b3cbcd146f4dca63d88"],["/tags/Advanced-Classes/index.html","e2d226aec263ae18433b399acf451691"],["/tags/Advanced-Swift/index.html","2c386b2fccb816d6b405f55549ab9022"],["/tags/Advanced-Swift/page/2/index.html","a2781e7090bdcb2e2d9551130a4e25ef"],["/tags/App-Architecture/index.html","2c091dec6927524eab063feb852899fc"],["/tags/Array/index.html","74645870e0adc9547ad1174e5ac8e507"],["/tags/Arrays-Dictionaries-Sets/index.html","250c2749c3958c73b9e3b80b0b50f1fe"],["/tags/Authentication/index.html","9e6735ca504e19329d87d511ccad9b72"],["/tags/Build-in-Collections/index.html","ec565f733193ebb3c982e7ae5d7c5313"],["/tags/Building-Your-Own-Types/index.html","06e61a5238fca8cd173385067a22e17f"],["/tags/CMS/index.html","a5ea18091f17447b6234e70c5e5fb4d4"],["/tags/Classes/index.html","4b6acc1a2cce19dff72b0c4d564a3cd0"],["/tags/Codable-protocol/index.html","08ed195a3bd69157d7435ce2b723d738"],["/tags/Collection-Iteration-with-Closures/index.html","56c5e32aeab763b98de0beaa0659906e"],["/tags/Collection-Protocols/index.html","066d4ac3f5bc1c66b52fa68ca7a9a10e"],["/tags/Collection-Types/index.html","518577009e4c470cb4d0276f9b01566b"],["/tags/Collection/index.html","881f630474f50b55dc9e8abc7450e29a"],["/tags/Collections/index.html","bacffbd3ecd67f42b30fa462a757573b"],["/tags/Combine-framework/index.html","78829e3d09b84ce8aac2c201f84bf1fa"],["/tags/Combine/index.html","57771ddd388ea8faabc72d8f8df957f5"],["/tags/Dependency-Injection/index.html","eeb6df76a4035f3f01f5074c81d5b963"],["/tags/Encoding-Decoding-Types/index.html","1af05e470384e57f480813392f8a6bf4"],["/tags/Encoding-and-Decoding/index.html","e1b42a6b8ff0f1a09fcb28c6939d46a6"],["/tags/Enumerations/index.html","0ade7043e1fd4f4fd37fcc57653e5785"],["/tags/Enums/index.html","d4693019bd2fbfb22119004c153874f3"],["/tags/Error-Handling/index.html","1b7c843d8d8750afcb34bc62448e17be"],["/tags/Functions/index.html","e7f5da12337f3c925023104de59cc0d8"],["/tags/GRDB/index.html","a5477c58ab8f8f8bfe381b75205ab3b1"],["/tags/Generics/index.html","5172ded3d5c4a9a2165436e8ab375a8b"],["/tags/Go/index.html","eec8e90c91007a5608f9a378c57e8ea5"],["/tags/Grand-Central-Dispatch/index.html","01d073111fd66eeed2bb8259b9a9499f"],["/tags/Hello-Vapor/index.html","109f62891435ba83ec7386a680128f4d"],["/tags/Homebrew/index.html","5623256d2e36c891fba38f0da79a2d43"],["/tags/Interoperability/index.html","46630bc29320b98fc3fa5d56ab8f1fd2"],["/tags/Introduction/index.html","831951846967d426b0a69ea7a35fac2c"],["/tags/Leaf/index.html","3a5dbbb45d59eabbe77e28e46e85d399"],["/tags/Linux/index.html","bc90ac0280afcee552442965d5979bb9"],["/tags/Methods/index.html","d035a4806e2db8cf4cd8c93d4b7a8fd7"],["/tags/Modules-And-Hooks/index.html","bde5dd2c428210fa39eb28f734065780"],["/tags/MySQL/index.html","c84f7f706af6f49befd2fd2384e4cb16"],["/tags/Optionals/index.html","76524b9066cb6b7c1538a9594987dbb3"],["/tags/Promises/index.html","a6eeada1fbf0bff75285d25cb9543a07"],["/tags/Properties/index.html","d916c9aafd8330536d774b8fd1f6c0d5"],["/tags/Protobuf/index.html","a49f1f79a09de6c0dbd20dcd901d635c"],["/tags/Protocols/index.html","66fcf5d496515e6f598994cc293533c8"],["/tags/Result-Type/index.html","8dcd7b65248b61effbfd0997a38818d6"],["/tags/RxSwift/index.html","4f069d0d9a1cd1cbd6f3b1df11db5e8d"],["/tags/Server/index.html","02e31e1a53877d6d66d3371cfd4a2dcb"],["/tags/Session/index.html","94cd2620ad2c13369a6534f492386ecf"],["/tags/Sqlite/index.html","d3c8c78300b5d505bb5931b22245f086"],["/tags/Strings/index.html","229e44180248b9ddb63e4213c29ecc6f"],["/tags/Structs-and-Classes/index.html","1d8b6b23a653b8e7efdfa7e30ad26e28"],["/tags/Structures/index.html","5ef14a4fb5350ea2d7d6a3810ca8a1e5"],["/tags/Swift-5-0/index.html","514fb5a75c79c9b6c9953cda6330f82a"],["/tags/Swift-5-0/page/2/index.html","999921a55fa3f2fed4538e579ac7cd37"],["/tags/Swift-5-0/page/3/index.html","cc8e049f1a47fa0279b9107b72972f7a"],["/tags/Swift-5-0/page/4/index.html","2c751f40b1a4f7b31d131ccf6b73b9cc"],["/tags/Swift-5-0/page/5/index.html","ca02aeb0bdfc12631b645f967f44e10a"],["/tags/Swift-Apprentice/index.html","ae1bfa91bbd9c64d8a7cc19b4f38663c"],["/tags/Swift-Apprentice/page/2/index.html","ce00dafeb01b49bdfaeb5f0f857d33e4"],["/tags/Swift-Apprentice/page/3/index.html","ff6dd13790c25622136f2f7a67f55a4f"],["/tags/Swift-Package-Manager/index.html","a61f589d4efb6539c196a2766430fe06"],["/tags/Swift-源码阅读/index.html","ac1a020cb3fbc9854a4f7887b760eea5"],["/tags/Swift/index.html","63303ef1758adbd793d588064b239abe"],["/tags/Swift/page/10/index.html","cbd0b3fa1e044f64db709b4191bf4d7d"],["/tags/Swift/page/11/index.html","6d9a0d3ec9d21a8f3b350cad4fe5a402"],["/tags/Swift/page/12/index.html","8ac0def37e36792c7e0357edda9247b4"],["/tags/Swift/page/13/index.html","76030a4e39b8e05c3b2c8e6c720c54c6"],["/tags/Swift/page/14/index.html","07997f6cd95c1aea6b1605570f2c0558"],["/tags/Swift/page/2/index.html","74cb32c86c047f9b2f7e3e7b059d02ae"],["/tags/Swift/page/3/index.html","cced03afc4b2fa0032dbabc716275e4c"],["/tags/Swift/page/4/index.html","d1167103fd40ac7602c87275360ef230"],["/tags/Swift/page/5/index.html","08623fef46a90966832326a07c2f7798"],["/tags/Swift/page/6/index.html","4f36cbd20b425ca3f8a8e97d1df25875"],["/tags/Swift/page/7/index.html","7a2fd1bf424cf4b095777cede7ab2ec3"],["/tags/Swift/page/8/index.html","f88710a3816cb380a3665ee26d7e3b1d"],["/tags/Swift/page/9/index.html","1454610712359e0774ed1c1a7829e5f8"],["/tags/SwiftLint/index.html","09b434237f95924bc7afc9d39578b77f"],["/tags/SwiftUI/index.html","52e6002c96b466b34169ea1f23eefd37"],["/tags/UICollectionView/index.html","fcba09a73aa4b44a5850c8e490db0363"],["/tags/UIColor/index.html","4cd0ba86372ff0e32db0afffc5d38cfe"],["/tags/UIImagePickerController/index.html","ba843eea9717ef4403314d4a2e7f4d6b"],["/tags/UIKit/index.html","07cab97196b09456c9536c3a455e647e"],["/tags/UIKit/page/2/index.html","08cff59d5616ca299b90a85ad1198c5a"],["/tags/UIKit/page/3/index.html","283847ffff84855eb6d7f2bb5a408ac9"],["/tags/UIKit/page/4/index.html","b47d8e356f4b76e15fd9550ad6ae182b"],["/tags/UIKit/page/5/index.html","b8ec541a667e95948dc35d8a416ca3f6"],["/tags/UITableView/index.html","4450a84c8f68fe7ff41375ad64a0598a"],["/tags/Ubuntu/index.html","de97fd14065882d090403d346aa7952a"],["/tags/Uniquely-identifying-views/index.html","35b5d7fefc841faf52574964f196cb61"],["/tags/VIPER/index.html","9401f36673669c4c6dede56a33793fdb"],["/tags/VMware/index.html","c9f5c2f2f231aa5792752ffd756734d9"],["/tags/Vapor-4-0/index.html","30d0e631213d0496a9401b03e2bc8d15"],["/tags/Vapor-初探/index.html","3bd4169faf77592edc8650059d193ec4"],["/tags/Vim/index.html","6ba6398466359ef36ad75bbc2b302165"],["/tags/WKWebView/index.html","e47cbae4620f8d2494495e2dcacd37aa"],["/tags/Xcode/index.html","636cd8dbcbaeef615c53e40cd91c649b"],["/tags/appleOS-Networking/index.html","b5776267d1103ebfe1278f861bf70bfc"],["/tags/bugly/index.html","ba31bbcdc134b05dda2b82c5a9a1782f"],["/tags/enum/index.html","ac6aae322534f99d8e2650df25f47737"],["/tags/git/index.html","eb698e7e3c59006d355c7c7545312c09"],["/tags/hexo/index.html","13c0b41b4e19f58319c84591b2f4f92f"],["/tags/iCloud/index.html","fccba5d83a2c25d3189239a951450920"],["/tags/iOS/index.html","1d303acda2c5451f26a4e560a2b1dd0d"],["/tags/iOS/page/10/index.html","28bc00e125a1ded6dae38db7956b8f0c"],["/tags/iOS/page/11/index.html","55180161af49321af5862df7d287004b"],["/tags/iOS/page/12/index.html","272feaf2affd9a728bb5c38e6f07aa7a"],["/tags/iOS/page/13/index.html","f18e434fec2509aad938ce323d0b07f9"],["/tags/iOS/page/14/index.html","13e34ecd741b31957dc6592f634cf5b6"],["/tags/iOS/page/2/index.html","629d02d2f1ac66c4da3e773bfa992ac7"],["/tags/iOS/page/3/index.html","181bd7ded92ed4ae6747cdab7997dd7c"],["/tags/iOS/page/4/index.html","b4c1aaeb68f3c62a8f786f06f03b5dfa"],["/tags/iOS/page/5/index.html","5c966f05327200de508f723d3e3bb77b"],["/tags/iOS/page/6/index.html","409d978ed6814ecdd8493e46528ff79b"],["/tags/iOS/page/7/index.html","76247ebe244094e67db84f8f6cf8a551"],["/tags/iOS/page/8/index.html","606e243aebe244d3e5a28fe245de5eb7"],["/tags/iOS/page/9/index.html","695a948e1814f48fa3437aff69923c27"],["/tags/iOS面试题/index.html","89dff04e236ffbb210b2158dc9ef6f46"],["/tags/index.html","70affeb984621602edd3885871a1f671"],["/tags/non-optional/index.html","e20394627ddb8e88d960af15c19b993c"],["/tags/random/index.html","ffea8b9fad3acd366fd2a7b3d4d2be64"],["/tags/transition/index.html","0fcbdc994e9a10c780abfa766b012527"],["/tags/三方类库/index.html","813a5eddf0432b6458d06315b8f14bd0"],["/tags/依赖注入设计模式/index.html","fe5943d56ed5aa23d900a81cb2e65517"],["/tags/值类型和值语义/index.html","de433a15792c10547f299c08689300ce"],["/tags/内存管理/index.html","839e16f9fa49e4eeda7d0c50185c9107"],["/tags/冒烟测试与回归测试/index.html","549fcc62b96bb534136ba428cb8d7c17"],["/tags/函数式编程/index.html","d3ff1a428cc5de2254148eae5621e891"],["/tags/创建博客数据库/index.html","208a36cfaf52730b833d5c918512ef57"],["/tags/初始化模式/index.html","4d8bb513fa3a5f9a22131f76c15614d2"],["/tags/单例模式/index.html","d6ee918175e8950f6c62984db9d4645e"],["/tags/原型设计模式/index.html","4e09e4e9cf57f065826d05b36046b7fc"],["/tags/命令设计模式/index.html","29dc28a0ccd625c9f2d8d57a11fb664a"],["/tags/基本控制流/index.html","2be5234d94a8ae98fcc0fbb7103db90b"],["/tags/基础语法/index.html","0742b07749f9bad6ce5219ea9966bfb0"],["/tags/外观设计模式/index.html","9b1d50e20daa8e76b9bf740e2ad329f7"],["/tags/委托设计模式/index.html","dd263749ec9ec413fc34679a1caf2ff3"],["/tags/子类化样式/index.html","3ead49d575679f4e0affa73a0ff76e2d"],["/tags/对象池设计模式/index.html","f52ecb778c65e3325558028f1d2b8e68"],["/tags/工厂方法设计模式/index.html","b84f41fa3ecd313ca0b830174db6be86"],["/tags/工厂模式/index.html","fff8720410a80737e6c2a94bcc3f90d6"],["/tags/工厂设计模式/index.html","01841bf949c0c4288014b17b2b69c778"],["/tags/开发技巧/index.html","d65ec00e607c1761083574883b72c567"],["/tags/开发记录/index.html","5efba7e9de9ac76085dd04975dabf333"],["/tags/懒加载模式/index.html","8c46d4a32817d780557505026cc04247"],["/tags/抽象工厂设计模式/index.html","8262a868227e6235af5f0baaf3a8f206"],["/tags/数据库/index.html","789e96b0789ec26e53683ecef7f9a5ac"],["/tags/构造函数/index.html","96eb181fc520f326cdb15391038304d8"],["/tags/架构设计/index.html","fcd3999eeb06187ed0a7e4fa7c89a88a"],["/tags/模式匹配/index.html","87fea785af04ab6855d2da6c478eb4af"],["/tags/环境搭建与验证/index.html","41bd51978cb1c8c44042a52108727ae1"],["/tags/生成器模式/index.html","93702d373e6635db55d20f888bddca5c"],["/tags/用户体验/index.html","6b135900fe49f0022f33b90d1ff52414"],["/tags/用户协议与隐私政策/index.html","118887c37c6c52f7f8bb1aac9f757916"],["/tags/类型与操作/index.html","5af02c63643e25b4b2ddf21f3ff77d6a"],["/tags/自动化布局/index.html","510e0e1f901c2f9cd1a6ac1c67e2410f"],["/tags/自定义UIView/index.html","db860ade0d30f1df9427daacaedc3f23"],["/tags/自定义转场/index.html","5adfe544dfe4e869b064818d3c2bf813"],["/tags/自适应布局/index.html","d968ec90a6aaa2443f6c54b178e91e80"],["/tags/表达式、变量和常量/index.html","6e2571ac15290b9920bad2d1c907388e"],["/tags/设计模式/index.html","b127f41bd7d2d7ac84c1253efc700bd1"],["/tags/设计模式/page/2/index.html","ec1dec0a72801b793429bcd20f53e730"],["/tags/设计模式/page/3/index.html","ea13b5af879da7585bd235a8ae362f40"],["/tags/访问控制和代码组织/index.html","58b1efef8c0382c6f5bc80b5aefb6b72"],["/tags/运算符，下标和键路径/index.html","66b01d6b5c6ed8543d09b508e60c3327"],["/tags/迭代器设计模式/index.html","9d61be9d3c869d1170eac71a60150070"],["/tags/适配器设计模式/index.html","b55e993740ecfa306491cf0cc0f94538"],["/tags/错误处理/index.html","ed63ff8a5d9cdfab67a5d3e31a237a36"],["/tags/静态工厂方法/index.html","eb2093f61152990691e4b92c88874257"],["/tags/面向协议编程-OOP/index.html","cd3ede8695b4b2f58aff587ccc732b61"],["/tags/高级主题/index.html","3507cc5ac12054278724b3ea31baf954"],["/tags/高级协议和泛型/index.html","d9448f2fcbff9695fcb646bedc9acf20"],["/tags/高级控制流/index.html","5331310d3f506aa88a5597b5929d27c7"],["/xcode 常用的快捷键/index.html","f863d44caf58e782792d5b51362e5936"],["/为iOS应用构建输入表单/index.html","622a7fab9d1256cd5122541ba70c7d1b"],["/产品开发的幕后花絮/index.html","7f7e7a63872b14b152a43e444055a445"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","713d6e57ada217076e7750e01bc49a75"],["/冒烟测试与回归测试/index.html","91885fd9694ad83649b4819e243a0774"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","0682a1106fc506b661b6b21058083a4e"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","3e9a7582951cc3a431f7bae2496ca9c0"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9e8d53a9245b6d0a50a80da0d023ddbb"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","a9bfd7cec8a9823a1458516c58fd0d6b"],["/在Swift中创建自定义集合/index.html","c591bc9d429deb23052d6ee2f553f26d"],["/在Swift中处理非可选选项/index.html","e7d4dfc5665ef05296234e7cc327abb7"],["/在Swift中生成随机数/index.html","c93340c7423e17169298ddba28695822"],["/在Swift中重构单例模式用法/index.html","29fe393e8af71e682b04f8a416bbd6ab"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","ff85bbcce49ee40e77d541f78803c568"],["/如何为VIPER编写服务？/index.html","7d62e6061340a54afcba0a863ddfa1f8"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8e172cb40aea897a6b510532e3c4e54a"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","ff623a473a93d182d204cdf3a989a8ad"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","13f1621a25b697d1df0f44c83d8e6b31"],["/如何使用VIPER构建SwiftUI Apps？/index.html","193129128e5972c8a6fbddebc3a8873f"],["/掌握VIPER架构/index.html","a81fa010546c6ce43dc5804e7699ad75"],["/揭秘 WordPress Hook 系统/index.html","b27d605f3ecc6967e317ad81c8cfa04e"],["/比较工厂设计模式/index.html","0f457f0b264ee22124cc751671ec2850"],["/深入了解Swift中的Grand Central Dispatch/index.html","707265a82bf4515a370992f5475d8a93"],["/深入研究Swift框架/index.html","c2bf31c0d2c9e2800055fa103d67472c"],["/适用于iOS开发人员的VIPER最佳实践/index.html","caa2ff6408ec272c6b982ad1549c610e"],["/选择Swift而不是Objective-C的5个理由/index.html","eb4a6912a06fbba9df0957aad7dfd96f"]];
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
