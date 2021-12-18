/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","55822521ed4514506e04169385c6db08"],["/2020年iOS面试题总结(三)/index.html","0339a189b70ed7d84bbf77c5e27a09ce"],["/2020年iOS面试题总结(二)/index.html","395a747debc9c800d7771c325354f911"],["/Advanced Swift系列(一): Swift 简介/index.html","8185ebb930b1afa3a0c3505b7070626a"],["/Advanced Swift系列(七): Strings/index.html","e9b3abec5a26f2ca408ce66d405ef066"],["/Advanced Swift系列(三):  Optionals/index.html","89b7d335c05538b9a62a5c4ea9804c86"],["/Advanced Swift系列(九): Protocols/index.html","63423fdd5fa502524c243ecbf76db279"],["/Advanced Swift系列(二): Build-in Collections/index.html","48178b397b6b776ce023a200f6e6853d"],["/Advanced Swift系列(五): Structs and Classes/index.html","5bd0568bfa93f96da141920f75cd7beb"],["/Advanced Swift系列(八): Generics/index.html","37a7268bd0cc8bc014bb79014afbf06b"],["/Advanced Swift系列(六):  Enums/index.html","bd57c6c20823dd0ea0aea9efe0e4adfc"],["/Advanced Swift系列(十): Collection Protocols/index.html","a19c45141b69223fbe7dc3a639333e3f"],["/Advanced Swift系列(十一): Error Handling/index.html","93a6fa9548f2165ec202193d1b4d6c24"],["/Advanced Swift系列(十三): Interoperability/index.html","160edb89080d3313ac49f18e284fab02"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","0960b8db957c1faf123b95349caa1e48"],["/Advanced Swift系列(四):  Functions/index.html","fda0b305de73ccd673480da32a33ffb9"],["/App Architecture系列(一):  简介/index.html","a2f7a17f55f5f6e465853563bac68056"],["/Functional Swift 初探/index.html","cbc904e5e007c063b828e528ce6d70ed"],["/Git 使用小技巧/index.html","89ba4b7be04a3042b62c5706170fda3e"],["/Go Protobuf 初探/index.html","99dbdc176a9f8883ef2eb0f775046dc1"],["/Go mysql Tips/index.html","e21b036c1e22164d487f9173f00553a1"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","7c6e1b0644cf25abe6679e55131efc3b"],["/Go 入门篇：2、Go 实效编程/index.html","c718223c07417f6d39489e39994cccf6"],["/Go 基本语法初探(一)/index.html","64aa8ff1f56e87f12682823ef28e9fe7"],["/Linux VIM 命令及操作小结/index.html","65e89c05bff238560d56e5c694fa3bc0"],["/MySQL 基本操作/index.html","250b98a84f3b44f6d2b71b573126f308"],["/MySQL-列类型和数据完整性/index.html","e924b41d55b11dc4680433003da943c1"],["/MySQL-数据库设计和查询语句/index.html","3ee35364804e180bf7e9472acdd286b4"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","6a070167b3345cfb1af2b3eb79f5ccef"],["/NSCODER和SWIFT初始化/index.html","da7ee53ea6f9fd1133617077463798cd"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","51408f30c6850d296f6414d2785316e4"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","af977be32a3d132f766bf094d43f4fb6"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","b563d5973a5b15ca075b6d1af9cee857"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","c9584b8211420cfd85e192f78eeb3134"],["/Sqlite 使用Tips/index.html","c979126725b81e38a9bd947ee1a48db5"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","19d85a7db6b13643bd6e61a7b8e34223"],["/Swift 5使用UIImagePickerController拾取图像/index.html","334b2467198a69a02c9641f7137d1c9e"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","9eab14ad5fd6d6b7cb09cf4fef0d67f6"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","2849fc1ce2e49c55189ba75b66c28eea"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f7b79088502be58db0de40a3ed507ba0"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","6163e05ae49f431469bdacdfd81e1963"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","400078d6e82aa065c5b177f0a27a69f9"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","fdec38b0a10118472b5a7914769a21ea"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","ec5d7565f73cb602f0ab3c79fee8ee31"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","a9102c186bffebe34cd514ade5bec96c"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","af021c9b51a1c2a156235ce5445a7f2f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","fda0fe7fc1e744c3c5c9d2bd0f1dabde"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","56691b2e4387f43f1d59a7e0ea2f8a5c"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","b18f63eb947d565002fb88a2fe76ac3c"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","0723745bda0d9f4a1eb01eb518c3e545"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","13d46ad77de63815d221a04cfe138ad1"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","35e8074a0a70fd9b9ee6803fed8445c4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e45b944df39948d476c65fb76f783c82"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","3c01e29556e254710d12a64e16be8803"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","bf5213355341b2ab6e969ec24702181e"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","f9416d819ee02017f8820f0bc69e9b86"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","c47c3da09ac8bfd851c1a4d0299027e9"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","67ff51efb17e89d42221487bdaaa5741"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","92c03a96a44c7c5c257b7bf3fa7ba489"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","595133dd652c5ddaf226b1bc9427552f"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","b3065c3d1886e8b36a44f3f0ca388c10"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","2e3418aab6fd70bc5de68643880b2a70"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","4922f8ad6a558f7c819fbe775e9913f1"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","3898db2bff24e025a2be1f97c8818f35"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","fcf899016303119663f7ebeb7711f142"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","f780cbfc4e761fb20c443d0797a76509"],["/Swift CompactMap vs flatMap：差异说明/index.html","c9b8c13c20db19c64ab09e70880258fe"],["/Swift Grand Central Dispatch 深入实践/index.html","02726cc1d3b2a663575369cc8344207b"],["/Swift Lazy属性初始化/index.html","37190e95c55cdda4d1768a1775e19dce"],["/Swift Promises 初体验/index.html","0978ac3273fb4951c48a16e7a7055a7a"],["/Swift Promises 探究/index.html","a8e0612832dfe93ab5c01ca2f10422d2"],["/Swift UICollectionView使用指南/index.html","8598d3282715b9fd772786aafaea281e"],["/Swift URLSession && Combine framework/index.html","9a2e71a66d5f3a6cecdcbcc0b6e7f95b"],["/Swift tips/index.html","d54422e3cd215785b8fdf97db3372fa5"],["/Swift 三方库：GRDB 使用指北/index.html","21af0071e773dc18bbcf78410f7e6485"],["/Swift 唯一识别的视图/index.html","bb2ff72dc83875ff87679a719e22ef89"],["/Swift 如何学习现代UIKit？/index.html","c2af654df57d37fcc041690e92dc4b2c"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","30d16a2511756b8cfb4e154361f5ac4b"],["/Swift 用 compactMap 替换 flatMap/index.html","4e746562046c5787e8a83cb67b96c7b9"],["/Swift 选择和播放视频/index.html","03229773005657a88d1ba4cb0ee034a5"],["/SwiftUI 系列(一)：1、 简介/index.html","56f61e8eb8ca284f025cd9ba2c22a1e7"],["/Swift中UIColor最佳实践/index.html","8334b7e5b66f64315ff2f674f453d639"],["/Swift中快速简单的工厂设计模式/index.html","d151d711feba70fa4f0f5c2838ebbfce"],["/Swift中构造函数与静态工厂方法的比较/index.html","978f0975f40e77121b2558d84371e1e2"],["/Swift中的UITableView教程/index.html","fdad019be25e0f1f678c669764f98240"],["/Swift中的懒加载模式/index.html","a4d68d0f28dab2decb039f4d20e5fb32"],["/Swift中的模块和挂钩/index.html","0e4e630b35d16af7d39bf2a50bb2bb89"],["/Swift使用布局锚点添加约束/index.html","dd4a797277e5d82af4ac2757001954f7"],["/Swift依赖注入设计模式/index.html","1bf407216991b267d5079bc81ca269c1"],["/Swift关于Dependency Injection (DI)/index.html","a5a44b0da724af05fa8fa31f37af96b0"],["/Swift初始化模式/index.html","c678f12d9e770d26c2b8a359e8335872"],["/Swift单例模式/index.html","9e3cb5d599709f61e8c22ee759d1d52c"],["/Swift原型设计模式/index.html","7ec2aff16fe27bdb862a8fce755b457b"],["/Swift命令设计模式/index.html","a14fb94f9644a924bacba18d47612e1d"],["/Swift外观设计模式/index.html","3ca2f070d6634328d6c0f5129f4e3540"],["/Swift委托设计模式/index.html","166617cff635196bd7a4821c2fe04127"],["/Swift对象池设计模式/index.html","5e05085f54297b1ebf5362bb4c33c131"],["/Swift工厂方法设计模式/index.html","731470c04e495c853ee0b944c6a9277d"],["/Swift带闭包的懒惰初始化/index.html","baffd44e0e6af7bcb54deba99f32ebd2"],["/Swift抽象工厂设计模式/index.html","25645c544e4884bcec2bf1c3d1b7305b"],["/Swift掌握iOS自动布局锚点/index.html","b710a5f62223acecbd9126d2a3df78de"],["/Swift支持旋转的自适应单元格/index.html","2bc9e862c823cba5ab1e55522f8c0999"],["/Swift枚举值/index.html","69ac9b0612cbd25d36ecfcff21d3da84"],["/Swift生成器模式/index.html","b32ceb65fc433b29d3a19df7a875e425"],["/Swift结合Xib文件自定义UIView/index.html","cd4aa3330a27cfc7a7e9e26574232215"],["/Swift编写的20个iOS库(一)/index.html","841b9ffaea452a71d1fa2b7ea26ef37a"],["/Swift迭代器设计模式/index.html","6c0a26fd2c2d6e2063ff5d0fa93837a3"],["/Swift适配器设计模式/index.html","ee0e09cebaa856061fd39b057da571ee"],["/Swift静态工厂设计模式/index.html","8397ee2c260dfa5b09c175824cd2027d"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1634e6021a5a237b5e60ddf66106d958"],["/UICollectionView data source and delegates/index.html","212e63d5570e13462bcd7e2cf38a83e3"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","df58ddf199a28562e24bc33d33bfb767"],["/UIKit初始化模式/index.html","f65473f0b297508a5b229bc45a9b2853"],["/Ubuntu18.04替换国内源/index.html","2a07e755c260b472a779e70b54ff2f10"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","9cc4acbf7c5d57e849ca922411d6e827"],["/Vapor系列 (一) :  Vapor 初探/index.html","4293068a232ae87d5097426e31f2a462"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","cfc3272046b5ff9b0d6a4da678d79b44"],["/Vapor系列 (二) :  Hello Vapor！/index.html","52aecfb57ddf8c51417c78b85255208f"],["/Vapor系列 (五) :  使用session进行authentication/index.html","e299578215d7569f2415ee4e2e65a46b"],["/Vapor系列 (四) :  创建博客数据库/index.html","94258114c551ba8964089b260ff03e82"],["/Vapor系列(六): 徒手撸一个CMS/index.html","f57a224db1b1675f9e0617711643b355"],["/WKWebView与Native交互注意事项/index.html","3a88ceda48c7940452f375d367dd6df9"],["/Xcode扩展/index.html","51e78cc2a4a44877f83dd56d1c9c04d5"],["/about/index.html","35e662db60921927c7fdc2ca992304de"],["/appleOS的Networking示例/index.html","808ebc0df5b5724d5865f4b4b2d3dff5"],["/archives/2020/03/index.html","0d8d83da83b634c3ca1644b9dd8c2a98"],["/archives/2020/04/index.html","a7ae667bde530159477749ac8c273ce3"],["/archives/2020/04/page/2/index.html","c660fea33c9102fb9023914707ff9b6b"],["/archives/2020/04/page/3/index.html","0b51944e1c2516b0c008a58729938914"],["/archives/2020/04/page/4/index.html","9a7bd139a3410d15f4be2827ddf43cbd"],["/archives/2020/04/page/5/index.html","be80c6a06c840f3bc1b1b14f4055aca3"],["/archives/2020/04/page/6/index.html","8c9243a8ea909afa81b615a211a2972b"],["/archives/2020/04/page/7/index.html","cab4a3dd56390f88ad8a953fe35f2d17"],["/archives/2020/04/page/8/index.html","3f21053e2fc578852489c675e800f45c"],["/archives/2020/05/index.html","026ba30decc2d6960d469a8a2b5df506"],["/archives/2020/05/page/2/index.html","7fd796b9641618af92e2e26e0e612958"],["/archives/2020/05/page/3/index.html","06c891de5246fd9f00293519b070d609"],["/archives/2020/05/page/4/index.html","d238463f14b4a40a9b9c6605b320bc93"],["/archives/2020/05/page/5/index.html","25e4ce273104b7caa1d1fd2c654c99e1"],["/archives/2020/06/index.html","44f0aa7b78a77b9fcaae62ac161fbc9e"],["/archives/2020/06/page/2/index.html","3f8d37b18db93fa69e7a59711cdae683"],["/archives/2020/08/index.html","5664aed9455a364c59b804d279d31afa"],["/archives/2020/09/index.html","72f0f2caa5b52af3d74dad73ada91ed7"],["/archives/2020/10/index.html","c5e30e32561ea3671b439f70bcdb1513"],["/archives/2020/11/index.html","046be24028ee05f6e9e09933806d788f"],["/archives/2020/12/index.html","20615272393b883eece0b76ea3b20296"],["/archives/2020/index.html","558eaee1d5e648067e7724fd7bbe63fa"],["/archives/2020/page/10/index.html","eaa8fa0350146b8b73bfcf945cc0f803"],["/archives/2020/page/11/index.html","f4fb998882d72e74cb4c6173db7b1230"],["/archives/2020/page/12/index.html","c59c0067760a414d2d3a58547219bf74"],["/archives/2020/page/13/index.html","1c1ca41733a30efdc30c4eaed8f26c1f"],["/archives/2020/page/14/index.html","1b03a4396a222df08f2e28e713a999f7"],["/archives/2020/page/15/index.html","02038275af696797d9707ae019f9f047"],["/archives/2020/page/2/index.html","0a8ac0b5484ea109dcb0b1324252feff"],["/archives/2020/page/3/index.html","bbce8f8759969fe84c635422a2d467b2"],["/archives/2020/page/4/index.html","bf0626c4d2b328826ce1b157fc4093b0"],["/archives/2020/page/5/index.html","170d8348dc648f9f0d352f4e2576b10c"],["/archives/2020/page/6/index.html","ccec81fdaa073dc371107e8a0aac2ecc"],["/archives/2020/page/7/index.html","b41a513bda38fd36bc849b012c5e6179"],["/archives/2020/page/8/index.html","97910cd017a70f3acbd2186744069515"],["/archives/2020/page/9/index.html","82a3d1f59673c0afd03c7653a7bf27d9"],["/archives/2021/03/index.html","487a587f14a1a26a691ef410b645384c"],["/archives/2021/04/index.html","a3fb180f8ed357f17d86b5773a248f86"],["/archives/2021/05/index.html","c409655b4d42301830c2e3633e584968"],["/archives/2021/06/index.html","292f32eef3fb87899963934b7e5e6d7b"],["/archives/2021/07/index.html","f5fd37769de984a5640e658c4cd3c083"],["/archives/2021/08/index.html","75232b130d77ef44bc48cf0e6266697e"],["/archives/2021/09/index.html","d678847a18b62da32e79824988b5782d"],["/archives/2021/11/index.html","242908fcb6cb1b53872d7cfc7dfaf3b7"],["/archives/2021/12/index.html","337321b1977cc805056e5b7403260c76"],["/archives/2021/index.html","5eabab6d375a6f2b953b0606f756d5a9"],["/archives/2021/page/2/index.html","8dc1a34455052338487394684f7e2981"],["/archives/index.html","0a7285a36b9f2be8c971e40e13f3aa3d"],["/archives/page/10/index.html","b6eda8ce4347f7df66d24efc226e1688"],["/archives/page/11/index.html","309628026381b4c55ee2a61a5dfeaf86"],["/archives/page/12/index.html","e58d9c6ecca4f64d428f3748b7910e6b"],["/archives/page/13/index.html","f7edbc334ea0ce761359b08e5e45a191"],["/archives/page/14/index.html","591752b9608f18dd5a5a80d6f73afaa6"],["/archives/page/15/index.html","029a860014b27f0b8b87c321118b3f8e"],["/archives/page/16/index.html","21f208327da09112841ff26808cf4206"],["/archives/page/17/index.html","ac06587a32fd6e7c660bba81b89c6a96"],["/archives/page/2/index.html","fe997676d442c3e2c931b89eea68c188"],["/archives/page/3/index.html","12cfb9622749d0eb642b2e3a7cb68239"],["/archives/page/4/index.html","f902796c1c29f8cb4ab0476b93731387"],["/archives/page/5/index.html","34df9dafe567bd2d3f4b0f23db78a803"],["/archives/page/6/index.html","8a3ff517d1cadab330b8f929885fc391"],["/archives/page/7/index.html","1d773290647209af621a33eff0dfc64e"],["/archives/page/8/index.html","5a79232045249bbcc7ae092505019f30"],["/archives/page/9/index.html","590dc38a4ec8fd05f726721bc955aee4"],["/bugly 上传dYSM文件小记/index.html","8eb9de461b77bb078c8ee62182f57c79"],["/categories/Advanced-Swift/index.html","db7f5041c505b22957b70a0442968b8f"],["/categories/Advanced-Swift/page/2/index.html","d05ec72d27f42d50be02393d9384a849"],["/categories/App-Architecture/index.html","98cc07d3fb6670476de03fd78677d96a"],["/categories/Array/index.html","221046bf14a5906f8234c07360a75ce8"],["/categories/Codable-protocol/index.html","a717a4546fbd3fb2b2f8817cac7bb4ac"],["/categories/Combine-framework/index.html","44fb43ac62e4c86c7aab692385a27550"],["/categories/Combine/index.html","33b98265cce47538fce414d4e30ea366"],["/categories/GRDB/index.html","ecc79cc258de4c937a98564a262fd928"],["/categories/Go-入门篇/index.html","90052a43d478d72e943e5404eb10f008"],["/categories/Go/index.html","92d62b9706a1db0c116317ab99b1f6a1"],["/categories/Grand-Central-Dispatch/index.html","175603ff0883dc4b4c9955be1a337c4c"],["/categories/Hexo/index.html","c9924840d4dd910659e0e72ba29d2a0e"],["/categories/Homebrew/index.html","464bf44d9e110e5ecc42e0419ad76073"],["/categories/Linux/index.html","59499267c9f21d3ee6c470f24623849f"],["/categories/MySQL/index.html","c2cbb9d859fd9165d1d8c19721da1a48"],["/categories/Promises/index.html","097a64877fa7430f6f297829b5f5e5ea"],["/categories/Protobuf/index.html","287fb33f0aa9ce5d41490802425ddf50"],["/categories/Result-Type/index.html","e1755bffa7259745b1ec2331b510ca30"],["/categories/RxSwift/index.html","0accf7ab538193135bb0ffb3531718d0"],["/categories/Server/index.html","e61336ae651ffbc27d3ac1f0d8e3a678"],["/categories/Sqlite/index.html","7ae25a9af963206e9e817d4ab0f6dddd"],["/categories/Swift-Apprentice/index.html","4a8c153b898e14a784eb80c9e63371f9"],["/categories/Swift-Apprentice/page/2/index.html","ead1be411bb8b0b2a448b69857413896"],["/categories/Swift-Apprentice/page/3/index.html","062b126a94e58fd89904f4e0ae2f121d"],["/categories/Swift-源码阅读/index.html","3979cafd692d2b63745b3de7267c0222"],["/categories/Swift/index.html","4b9545d8697f265a07a050c6ee0116cc"],["/categories/Swift/page/10/index.html","1b92f7ac005a04edbd79afd831b0b2f4"],["/categories/Swift/page/11/index.html","e1e8197a186a2606004f4a092d757501"],["/categories/Swift/page/12/index.html","49603b2e00f183cb2e4e30a24a73d4eb"],["/categories/Swift/page/13/index.html","1789bfaca5aa5d9fa60d34489adf76e9"],["/categories/Swift/page/14/index.html","9cd100799ccca9480124e2c49e1abb36"],["/categories/Swift/page/2/index.html","f664183b7096f4b19802a536f986cbba"],["/categories/Swift/page/3/index.html","de997d5af1efe6e44e6e6096aef50632"],["/categories/Swift/page/4/index.html","fd5fb9a3d4f0110a403ce2f9e126d2a6"],["/categories/Swift/page/5/index.html","d93f22c0a241e2080396b249e7dd9946"],["/categories/Swift/page/6/index.html","9a4784aeb0e2f3f5b80a70a15c8351a0"],["/categories/Swift/page/7/index.html","42c1eaed97d092c942d3ab37f348e777"],["/categories/Swift/page/8/index.html","fa91fa77c5244e861156b96de69ab335"],["/categories/Swift/page/9/index.html","671f85191d79da9d583579bdd85192a5"],["/categories/Swift5-2/index.html","0f6efa811707dc94b06a41d76387dedd"],["/categories/SwiftLint/index.html","71796478ddc8dfbfe20b958807cc69db"],["/categories/SwiftUI/index.html","25a988465b60b97bb2f1cc023e0b6875"],["/categories/UICollectionView/index.html","9a7b55b0f1ce43a9b4dc7e086c1c85b2"],["/categories/UIImagePickerController/index.html","9961cdaed0b4c04657dbededb8d3f3f6"],["/categories/UIKit/index.html","cee86fd1434b48800f4d4d6aeeeaed91"],["/categories/UIKit/page/2/index.html","5c4e36c6822b89bbb9b77e50d0c60647"],["/categories/UIKit/page/3/index.html","ad420b4d6bf880cb238163e5b07a2ac0"],["/categories/UIKit/page/4/index.html","e7e344d53cd68e0869940698a3503898"],["/categories/UIKit/page/5/index.html","4e55b689a2c31fd2e50b6171d3c05f59"],["/categories/UITableView/index.html","e8a97ba6405077c8458bc8e3ec1ab669"],["/categories/Ubuntu18-04/index.html","12607fa6e43a43352ed510e0644def14"],["/categories/Ubuntu软件源/index.html","51990fd12a759d6de2b52ae303d9ddd3"],["/categories/Uniquely-identifying-views/index.html","088bf8974dce9029a692c8bb04a827e0"],["/categories/VIPER/index.html","f941b0c44644d06dd0fc200c8ac2d74e"],["/categories/Vapor-4-0/index.html","131c7ed027f5afc4e906d39f4d6aea33"],["/categories/Vapor4-0/index.html","2bbca116d490c259e49b7889c6439796"],["/categories/Vim/index.html","5cbc42e3bb1e89b101a9530136c20c67"],["/categories/WKWebView/index.html","9f37c06592940692ee67c0eb09d2dc8c"],["/categories/Xcode/index.html","f60473e6d8705996b9c475b2c5cfeab6"],["/categories/appleOS-Networking/index.html","1ae0a92e21b987304d8a436f94216ffa"],["/categories/bugly/index.html","f13318f5cc2b96b761deb5b94a005f97"],["/categories/enum/index.html","ce390ac8fe5384dae0b75b2bc015f1e5"],["/categories/git/index.html","d0b563d8aa291e1a5fe81888d6cba9d2"],["/categories/iCloud/index.html","394b1ac4bdce359dbf39487628234208"],["/categories/iOS/index.html","416725a3b6a9657da11fcded6b0e5efa"],["/categories/iOS/page/10/index.html","94eb6bab11fdb10675bc70d830bd4bdd"],["/categories/iOS/page/11/index.html","69240d69625527a3723831b31844492c"],["/categories/iOS/page/12/index.html","4a76ee59d63a5d7bbd35c33d0bc28d76"],["/categories/iOS/page/13/index.html","4b35c6cba5560b31e92c2c753605a3d3"],["/categories/iOS/page/14/index.html","26652a67e47f3663026f8b30b6696f2a"],["/categories/iOS/page/2/index.html","bb53671e938f377082ce454842abdc5a"],["/categories/iOS/page/3/index.html","9a42f7871b2d14988b2d15c3735dc441"],["/categories/iOS/page/4/index.html","3d64bca719e2cfacdeeb1f2569819e4a"],["/categories/iOS/page/5/index.html","579064d9850f206830cc0e3067c00bf0"],["/categories/iOS/page/6/index.html","15dea58c298efa88da023756f345115f"],["/categories/iOS/page/7/index.html","aef66891396c1a08bad764b85785f3b6"],["/categories/iOS/page/8/index.html","59dd650745adaef877fd0f1acaf2c9d8"],["/categories/iOS/page/9/index.html","692741faedb2b9e81fec78b13efc376a"],["/categories/iOS面试题/index.html","8070628001bc42fba5acbe94ba6d8809"],["/categories/index.html","6937e8902fad28d906961a1c96d7fb0d"],["/categories/random/index.html","d87f213534ec9ac8f1f76c292ecb8a84"],["/categories/三方类库/index.html","d71dbdc820f8eca9020d151454b32eb7"],["/categories/函数式编程/index.html","87e9f6e00457b4fc5822b13fe864e2ba"],["/categories/子类化样式/index.html","b09966aba4e660405cfde0b269398c65"],["/categories/开发技巧/index.html","1c571d7b2b00bfacbd6a604180bbfe92"],["/categories/开发记录/index.html","5ef097df55d84aace86e724bdbaa3145"],["/categories/数据库/index.html","9c67bdd2f2ccb036077c273a7f9074a3"],["/categories/架构设计/index.html","aa3e18de4fd5abce459aa4014210edb7"],["/categories/测试/index.html","8dc87e27f9ab40c3bac12b3f2d6cb584"],["/categories/用户体验/index.html","ece0d4b0273621e82ad5db940c737d8f"],["/categories/用户协议与隐私政策/index.html","d86e579a66554567c83fae91f3718b45"],["/categories/设计模式/index.html","bb001da8c7810329c54ec240d5c6f7b6"],["/categories/设计模式/page/2/index.html","79bf6ef4f71f3e1514d67ef3241fad3f"],["/categories/设计模式/page/3/index.html","574bdbf0af89b34be9b35472f169439e"],["/css/main.css","af58b4ac072152885130749a62c6e66c"],["/hello-world/index.html","fc0e05fb54d5061ba42d63fa72997f74"],["/hexo部署失败/index.html","2655d935114f228ade0bd040282bd9f7"],["/iOS 15 适配/index.html","604739d956aa4648aa046fd26591acaf"],["/iOS VIPER架构深入实践/index.html","8edbc7beb786e29a436d5e6a5d594c8e"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","88e3b4312efb5f22f47c33ff7221a455"],["/iOS 自定义视图，输入表单和错误提示/index.html","339ca1006de4e95f59236cc7674ce29a"],["/iOS如何使用iCloud文档？/index.html","5456390ac0b9ba0230821135c29229a5"],["/iOS子类化样式/index.html","c59cb98fc2db21d8ec0772f0e4209601"],["/iOS开发记录<一>/index.html","3e58fb13d863947ea41db09cdfca79b7"],["/iOS自动化布局编程/index.html","c806aabd3b7a39039baa26d742bd9bac"],["/iOS自定义转场(By Swift)/index.html","c9fbc9fb7bbb8607478709b1f242d099"],["/iOS项目架构：使用VIPER/index.html","ab6508b5ef8c4ec32db5815aab9a95c2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","19e9c069aff7192dd89a2553f41a017b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","70824ba90d44b0d67b574dadcdf26a7f"],["/page/10/index.html","f4e1a30d2968842441858c6ec3d6c521"],["/page/11/index.html","90d9b8402699f7e520955e7eb2d0dcb6"],["/page/12/index.html","24a60a57796ba56acd88ad2ce2abc4c6"],["/page/13/index.html","2d769b1634bd475beda5069a63fec54a"],["/page/14/index.html","e46809ec189c36bcccc292d10d6aa6ba"],["/page/15/index.html","82136e397cdda5695c4c39071a4e5f5f"],["/page/16/index.html","8a838980d8798918970e59744dbaad11"],["/page/17/index.html","10263cda55d31f36f0ba85ac5ead8104"],["/page/2/index.html","b2c2eccbb8af1010c86c8f7ac1d56b61"],["/page/3/index.html","bb023a2345c85da21d04f9c5519f1d17"],["/page/4/index.html","b6798733e5775f3dcff039ef13dc1c76"],["/page/5/index.html","da7d2729be98a97a1ca9718e964b06f8"],["/page/6/index.html","8b85b4625f93121539f27a14cf8d764f"],["/page/7/index.html","d77e5fe931191026fdbf38f2de18b804"],["/page/8/index.html","7b342b6f041d4075141a4c7abe8a8dce"],["/page/9/index.html","c624ff227a85e2881c52ee1aabf3f059"],["/schedule/index.html","3bcf6229b0bfda5b69cce6d9249bea0a"],["/storyAppPrivacy/index.html","ef3769cbf8a174e910f80bd55846f796"],["/sw-register.js","f2b66fe3a04e9902d7fcfebc3d71497e"],["/tags/Advanced-Classes/index.html","810a4dfdd29dbbc70b03115aa14a86dc"],["/tags/Advanced-Swift/index.html","545101683b8a040cba333b7e017c96b7"],["/tags/Advanced-Swift/page/2/index.html","e58d01ac72445bfefa4bdb7e49796212"],["/tags/App-Architecture/index.html","653d91d9676416a8a59cf40599f72027"],["/tags/Array/index.html","06bb7f399e204417b3a28d3d2b634c57"],["/tags/Arrays-Dictionaries-Sets/index.html","a328e1c9e298d7ef4ceb559427232e78"],["/tags/Authentication/index.html","c225fe6bcf633bde8a6010065f37ad87"],["/tags/Build-in-Collections/index.html","e023e5af5c29aa7f10efae1570a61c44"],["/tags/Building-Your-Own-Types/index.html","cd79bdfe1781ab36e1021b2928252837"],["/tags/CMS/index.html","12c07cba5007f5ed53a9f7d415325304"],["/tags/Classes/index.html","adc3c78f642ff1c996bd863531e777cf"],["/tags/Codable-protocol/index.html","6ed8504bc18f10ba05bb4b1baec3cff8"],["/tags/Collection-Iteration-with-Closures/index.html","2f1733d342d3326aad6377b4e772cd86"],["/tags/Collection-Protocols/index.html","0085f416fa72a72a172e3aabb0752962"],["/tags/Collection-Types/index.html","54d826d4b1ff2277285fa1170a42853f"],["/tags/Collection/index.html","7d6a3122d9bf9b2859cf4aff963fb55e"],["/tags/Collections/index.html","ed5ea5a0a409aab16c790df1473d0441"],["/tags/Combine-framework/index.html","3c55f90fee16851aa8a23023bcbd9bb2"],["/tags/Combine/index.html","5761bd8a2c0b68a19da3226d7ad5da55"],["/tags/Dependency-Injection/index.html","593319c8780b508c6ba62894aa96a56f"],["/tags/Encoding-Decoding-Types/index.html","5f2dbd4b1ff43617d09af5566b21d7c1"],["/tags/Encoding-and-Decoding/index.html","fe472d9157340204039bc5a0f81c7392"],["/tags/Enumerations/index.html","caa6d743c41d239d7d218f81f1fbe06d"],["/tags/Enums/index.html","232db70dcb8cee0d279f8023a8e14ce9"],["/tags/Error-Handling/index.html","d206ff3b7ed000a180ad2cdd779629ee"],["/tags/Functions/index.html","dbc4059fa6dc84eb4e95344fb9318374"],["/tags/GRDB/index.html","0a931fd61db95f83ef4c5ed1ec62aeb5"],["/tags/Generics/index.html","ce0504d22d7fc748175e94edc064f207"],["/tags/Go/index.html","5a069e02b6ef43bec878a5a9cd70e40f"],["/tags/Grand-Central-Dispatch/index.html","604357b39ed30fd548d517eba1140a04"],["/tags/Hello-Vapor/index.html","3f73f5558db7ab4174966a26afc15f38"],["/tags/Homebrew/index.html","5ebeb6e74f8a9231f260b2932d25b491"],["/tags/Interoperability/index.html","4bc59babda55be837ce6167ab438304e"],["/tags/Introduction/index.html","63ec4ff4b10528558b0db3f68d85d4cf"],["/tags/Leaf/index.html","97eae1555e7cebf3a30098808d71241f"],["/tags/Linux/index.html","62c9e8736ac11a28aebc25d95cc78798"],["/tags/Methods/index.html","0eeca2f38b573854dff0b56e4b00ce75"],["/tags/Modules-And-Hooks/index.html","a8d0b7c076aac7d94a7b1d12d8bab17a"],["/tags/MySQL/index.html","0e4d8e529afd19ba7ff94a349d0a41a9"],["/tags/Optionals/index.html","aea8aa3f1f59d711b333f93fc780740f"],["/tags/Promises/index.html","997693e75b8285159483bfe9066a81cb"],["/tags/Properties/index.html","9753ea4406591d59954c72e242e0c5d6"],["/tags/Protobuf/index.html","148fefb303b5c5e092b9016bfbe923dd"],["/tags/Protocols/index.html","6046393429dc70e696a94459ee129966"],["/tags/Result-Type/index.html","38949e6a86ce766c95f82ff6395b5d18"],["/tags/RxSwift/index.html","b829a5c265a1537717d7a41d31c80386"],["/tags/Server/index.html","369896b8aeba01c8e00a233be6ef83a4"],["/tags/Session/index.html","8b7b6d9dde6f2bc21ad63c9797ed73b3"],["/tags/Sqlite/index.html","db447b46e4290c83342a954f095818c5"],["/tags/Strings/index.html","624c8b1893374792555554c9a4fcb5b4"],["/tags/Structs-and-Classes/index.html","b9ebb365151f1cb4221ee56933cd60e2"],["/tags/Structures/index.html","153437bf341366110ac359d2336b9f4f"],["/tags/Swift-5-0/index.html","e90e78f5df516ba5f1b2f834345a5d95"],["/tags/Swift-5-0/page/2/index.html","b226fd0be61c7a683bf03f414f0b4bde"],["/tags/Swift-5-0/page/3/index.html","2357c04ac4a3011e455e0b5b3988c1f0"],["/tags/Swift-5-0/page/4/index.html","92cda60768333e617dfb66c76f776461"],["/tags/Swift-5-0/page/5/index.html","01433539931e5eeb96bc2c05b6166a04"],["/tags/Swift-Apprentice/index.html","65f26c256560986b9bb04baa4f74dfb2"],["/tags/Swift-Apprentice/page/2/index.html","2773b1c3df54be70e6ea0621257a1565"],["/tags/Swift-Apprentice/page/3/index.html","a53fc81eae733f2d0833b7f4dc4ee38f"],["/tags/Swift-Package-Manager/index.html","88c55e4cf63816483b3558fc04f1cc76"],["/tags/Swift-源码阅读/index.html","56d7faa76d3a5532345531463657e869"],["/tags/Swift/index.html","acfcdb8daae1d1a62e615492b2c91ca4"],["/tags/Swift/page/10/index.html","28be4c0c005e5e85a753681ecb4ba797"],["/tags/Swift/page/11/index.html","7bf2bcfef399329a1dee7fe6c4165c6a"],["/tags/Swift/page/12/index.html","d58f939bcd2de486bf2d7b74e6f7de14"],["/tags/Swift/page/13/index.html","8b73737a149053a82f4fac094ea2009e"],["/tags/Swift/page/14/index.html","77942a37b145740823cbb5d8ed73e7ba"],["/tags/Swift/page/2/index.html","2f023d5ec9a94a5a2c5322091f10871d"],["/tags/Swift/page/3/index.html","0486f191bad80564489a000136852835"],["/tags/Swift/page/4/index.html","aca4f700821b852f8507ec9eeabc43ad"],["/tags/Swift/page/5/index.html","8c58307b1a1bbc473821e470536eaa83"],["/tags/Swift/page/6/index.html","f8d5deb4ac263ba4d3737187964670a6"],["/tags/Swift/page/7/index.html","84eccddbc31a1f5e3fe4b0c8ac065381"],["/tags/Swift/page/8/index.html","42abb7a319bbba6d2fe612d26d904662"],["/tags/Swift/page/9/index.html","161f4f05666bd7824639c48a44279370"],["/tags/SwiftLint/index.html","e2af0659a99db13bdc74b35f39505b8a"],["/tags/SwiftUI/index.html","5a7ad89f6d3ce50c763e9f1c0c0199cc"],["/tags/UICollectionView/index.html","731d0bb1b5d36ba340e4fbad45e6f1e4"],["/tags/UIColor/index.html","86896f11ac2c391fa05c77b37d11fac1"],["/tags/UIImagePickerController/index.html","fb6b742b050f99b55d0f6f1a512868c1"],["/tags/UIKit/index.html","2bf77fb311fd2f7118984ccdf18f197b"],["/tags/UIKit/page/2/index.html","de02cb9d04916ebb092867b68af32693"],["/tags/UIKit/page/3/index.html","e00be94a7cc3fe900c1501f0966a20f2"],["/tags/UIKit/page/4/index.html","4eaa13993ba58fd1ddba389f668a9ebd"],["/tags/UIKit/page/5/index.html","08290ff1caa7b48b3d83dc14aed30374"],["/tags/UITableView/index.html","961617d55f490cd9da72432fe5519f22"],["/tags/Ubuntu/index.html","255cc1c1d1b9ee02220c01acadaa45e2"],["/tags/Uniquely-identifying-views/index.html","58536599c16a49a44499f56c55f6c402"],["/tags/VIPER/index.html","51910a94411cf55a790b2e7c33cc5584"],["/tags/VMware/index.html","f7d793b3b23a9120598f7168bd1c140d"],["/tags/Vapor-4-0/index.html","d15fc7dd3252558f62f12fc3d833cb53"],["/tags/Vapor-初探/index.html","6d17b186e01264ca0f25b0161fbb7c91"],["/tags/Vim/index.html","01ca2896ff93d7ba19ab5f955a66b1c9"],["/tags/WKWebView/index.html","001592019641993d0a07ed3c972699a2"],["/tags/Xcode/index.html","e986317b2f683f8ca55b9a4283a0fc20"],["/tags/appleOS-Networking/index.html","4b61c318f9d67d6a997cecfc368923bf"],["/tags/bugly/index.html","3bab8a1690792dcd164925d3d1d34d1f"],["/tags/enum/index.html","9a60072065490d4c5df14b2f614b6c71"],["/tags/git/index.html","e94605cbd0aab2d4cc40dca1c9569870"],["/tags/hexo/index.html","4ae9acf3a4a547c4135984945ff39c60"],["/tags/iCloud/index.html","84ece15941088940e4d8082d24f387b5"],["/tags/iOS/index.html","fac3347000ed4e2929ec9cde31732354"],["/tags/iOS/page/10/index.html","e86181ff109762808cbccc9ad606962b"],["/tags/iOS/page/11/index.html","bb745c28902f44c1c35062c247efc407"],["/tags/iOS/page/12/index.html","a0926187715cad121b4eef7a2f8a6f8b"],["/tags/iOS/page/13/index.html","329096fe1374fa4d889d15a358ed31bc"],["/tags/iOS/page/14/index.html","eadf42dc82053f76c3ebe8e3e29aa1cd"],["/tags/iOS/page/2/index.html","a770b16d97944f263c871b1c62e31282"],["/tags/iOS/page/3/index.html","0274e7df448121b97dc06a2ff06ad5ba"],["/tags/iOS/page/4/index.html","01bd62be455e6dfa38a622496d4644ee"],["/tags/iOS/page/5/index.html","1a66a40f877d9ab552b8b35efde5bbcc"],["/tags/iOS/page/6/index.html","b7f92d3a0d8946a5e46844e72724f989"],["/tags/iOS/page/7/index.html","a3c8917f8370adb8b6cb4a04a6860006"],["/tags/iOS/page/8/index.html","ceb6cbab090b348b0456f85a7a6d4a49"],["/tags/iOS/page/9/index.html","12f6df60d2d109944faac41cfa090f15"],["/tags/iOS面试题/index.html","850c6959fcb7ef6c3fc805c7c90d9ff6"],["/tags/index.html","cad26f39782495c73bf9d1b4f6a799dc"],["/tags/non-optional/index.html","d08531396214efd4309ae62fe433dbf4"],["/tags/random/index.html","c54ac0d5734398c8acc958c5dcfcfb69"],["/tags/transition/index.html","52f5265d04512fd4f7085b5406113e19"],["/tags/三方类库/index.html","c8d26cf1a41ea8d2e99f0923ca504add"],["/tags/依赖注入设计模式/index.html","bee88a1c9786e37d4b0d6a3b692912be"],["/tags/值类型和值语义/index.html","d10603d04d831ebbf3ac6acd6d81616d"],["/tags/内存管理/index.html","4a550cffa6e6f3e966350dbad84b2d18"],["/tags/冒烟测试与回归测试/index.html","dadbc96bddafec1b02f7601d9507926c"],["/tags/函数式编程/index.html","25848d6b1b42204e0196276055f9b4fd"],["/tags/创建博客数据库/index.html","452b91214975bf20f83f7f5ac7cb00ec"],["/tags/初始化模式/index.html","7356e9853df2b69c6482c7475f068525"],["/tags/单例模式/index.html","733ab02e0be2d1d76904e7c09649856d"],["/tags/原型设计模式/index.html","4735bca3d4081501e8575c751b9d6c26"],["/tags/命令设计模式/index.html","214f6ddcec3d171c77c72cb96aaa5f37"],["/tags/基本控制流/index.html","e54d05da44b3f2a7423ecfeef9dba339"],["/tags/基础语法/index.html","a163eb3c7fd2387d8e8b8ce70133a968"],["/tags/外观设计模式/index.html","c7bea24539ae5586bfd68c0da6d54abd"],["/tags/委托设计模式/index.html","84ad6233350b28f3c41a77e91451008e"],["/tags/子类化样式/index.html","41d4f07c8b549daa76d71423c012aa86"],["/tags/对象池设计模式/index.html","a4cfcc34e21cd1810e0a6b8ab093baca"],["/tags/工厂方法设计模式/index.html","4dca30450262406fcc660352a69a9c3b"],["/tags/工厂模式/index.html","96e51ebed63aecc209ec851365e9add6"],["/tags/工厂设计模式/index.html","8be0a17e02e52f2f522dae0be29fa477"],["/tags/开发技巧/index.html","a547db72037e7ca08824bc18abf4ac26"],["/tags/开发记录/index.html","16fa1ff27159b0c95d68551e9d01e065"],["/tags/懒加载模式/index.html","e4a45fe2783be0585343d6363760639f"],["/tags/抽象工厂设计模式/index.html","5c291241591d4f06b2735e4f2d26974b"],["/tags/数据库/index.html","c5c3ad3547fc673edeca52a478d84857"],["/tags/构造函数/index.html","9306a9c948a807aa7288645bb1083dde"],["/tags/架构设计/index.html","4087532a3252d22b9bf30d7184a50eb7"],["/tags/模式匹配/index.html","8e4bdd09096284bba3d7942a10db1317"],["/tags/环境搭建与验证/index.html","4f83c12d0a44fbbbd4792bf6aa2fa4f2"],["/tags/生成器模式/index.html","98e26f9b05df027f697ae60dc44b4143"],["/tags/用户体验/index.html","6a4cc87a273156144275e0eea36f03d2"],["/tags/用户协议与隐私政策/index.html","11a8c38dae3577dfbb4fd90700dccfab"],["/tags/类型与操作/index.html","851a4d275c92ca43602641d19c425c8e"],["/tags/自动化布局/index.html","350cb184a4e346f06763ce9a5697a536"],["/tags/自定义UIView/index.html","fd53389d31f085de7d67efd80293df4b"],["/tags/自定义转场/index.html","c60b269a8921f6b02df064a024f4062e"],["/tags/自适应布局/index.html","8ac14cd32ea0fad7a5af712e69f90421"],["/tags/表达式、变量和常量/index.html","35c8e8717c544f4587d68435d23fb2c3"],["/tags/设计模式/index.html","c8ab0e731bb1457dc3873dc1ea67839d"],["/tags/设计模式/page/2/index.html","f80314a52aa553f31c9c889607687963"],["/tags/设计模式/page/3/index.html","065a68f4a4dd4fac683430abbf2c2be8"],["/tags/访问控制和代码组织/index.html","58ebeecf67743640e2a3fe97eeab04d5"],["/tags/运算符，下标和键路径/index.html","e036b14c4d95c088a86762a3d40177b8"],["/tags/迭代器设计模式/index.html","58206c2a7933c547670cb8404a0c485a"],["/tags/适配器设计模式/index.html","0182f6797595162f29c1bd197cd54baa"],["/tags/错误处理/index.html","f39c3622af0ea60b29f657f1f4bd607f"],["/tags/静态工厂方法/index.html","592cb9fe98111e2aa4d88747a8d0d09a"],["/tags/面向协议编程-OOP/index.html","c2f555b837865763c025abe2e8edcdba"],["/tags/高级主题/index.html","09d3f3e66b99acbeb5fd58f2ecf401ca"],["/tags/高级协议和泛型/index.html","f4af73f31a78fa8d06ac8aec60c846b6"],["/tags/高级控制流/index.html","7cfc8d1100dc7240add8c2b8c79dc30d"],["/xcode 常用的快捷键/index.html","244684431df493f52493582281920ba2"],["/为iOS应用构建输入表单/index.html","6a3c603983a8c615e1d9bbbfaaa26260"],["/产品开发的幕后花絮/index.html","9abd9a4d82056c55d3cdea93316b1839"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","f353db360dbf95c28181189889ef6bb5"],["/冒烟测试与回归测试/index.html","520d9b3071781a63635747887a0ca100"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","5738f30611313816bb8d519334c3134a"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","04e3d888143858c484db614f12ba36dd"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","d9b68aa4f2f5092250cf8555ee7e49ce"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","9da241d6c3a73f36c513dd6149969ed1"],["/在Swift中创建自定义集合/index.html","ca633fc92d35030dafbcb6733e1da80a"],["/在Swift中处理非可选选项/index.html","66235bc8f44251337f328e9b1a189a58"],["/在Swift中生成随机数/index.html","75a3acf37903c99a3466e436b23ec28b"],["/在Swift中重构单例模式用法/index.html","b71b296ebb9c182a2ca53aa7f12e382f"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","f6142ce9ddb7e5f311fa3ea28cdebca3"],["/如何为VIPER编写服务？/index.html","f3b1e67da1f079d05dbd5817747d663b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","672b221080e29a3643ce503bd6add6b0"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","3993a214f8a5eb44c2a5aa6d76a08550"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","48951139ceb792f1e381dca6333ecd71"],["/如何使用VIPER构建SwiftUI Apps？/index.html","244a03cc1a6f57432b2d66e68c8cd7ff"],["/掌握VIPER架构/index.html","f78f23dd1a26ad69a1fb98e154b6e430"],["/揭秘 WordPress Hook 系统/index.html","85660ab5f40c70c1ba968b998eb927bc"],["/比较工厂设计模式/index.html","3b246773e555385bb2c2475fd7977c1d"],["/深入了解Swift中的Grand Central Dispatch/index.html","8d40d0e179ed6525f6d4ca6f6030379e"],["/深入研究Swift框架/index.html","042680e67bc8f5577e8a26fd7b4fc99e"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e341dbfbc20a5d61d7dfbf4e23230f08"],["/选择Swift而不是Objective-C的5个理由/index.html","393b7e64b346cca95250fe69b64676c2"]];
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
