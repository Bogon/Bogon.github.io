/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","20d1aa136a6bb1d706285221ed1ef0c5"],["/2020年iOS面试题总结(三)/index.html","765efce1654abc6d8ab147c664a6f847"],["/2020年iOS面试题总结(二)/index.html","d822058dd49363f1bea06f3890025d8f"],["/Advanced Swift系列(一): Swift 简介/index.html","5f41de0127b286d6ec418c2c529c14fb"],["/Advanced Swift系列(七): Strings/index.html","dc68e52ce9b7a99a57e725fa7f3896b0"],["/Advanced Swift系列(三):  Optionals/index.html","dfb218bf1245ae51d64942a0b662a5b7"],["/Advanced Swift系列(九): Protocols/index.html","deea659dbd83fffdd0e555757cb21daf"],["/Advanced Swift系列(二): Build-in Collections/index.html","9de4e37c590af6b3ff64549306e0ad83"],["/Advanced Swift系列(五): Structs and Classes/index.html","d33c2f8958b988ee9b3fa2105f12f0ea"],["/Advanced Swift系列(八): Generics/index.html","1d20dc8f4d0bf55a80cd447d87139fb7"],["/Advanced Swift系列(六):  Enums/index.html","ca6778b3c44bb270be28141fd7b3eaa1"],["/Advanced Swift系列(十): Collection Protocols/index.html","2af42141b885c52ca97d3534131c5351"],["/Advanced Swift系列(十一): Error Handling/index.html","0a19f168a36c3a1db38d3235bd26a451"],["/Advanced Swift系列(十三): Interoperability/index.html","74e678c69486919666493c85f80a99b4"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","c1b7a4efe48790143ad5a813eb6af22d"],["/Advanced Swift系列(四):  Functions/index.html","7afabbad0c8021a841443b778dbb0571"],["/App Architecture系列(一):  简介/index.html","06589cd7fe37112feee690e3ab2a7474"],["/Functional Swift 初探/index.html","58d616730d3eef9204799b5752209c5f"],["/Git 使用小技巧/index.html","8e791d39b82ed49304a622b795832210"],["/Go 基本语法初探(一)/index.html","bbbf841b2c9c3948aadcd9b8e38eb01c"],["/Linux VIM 命令及操作小结/index.html","04573baa11232dd9f4f909b250a63012"],["/MySQL 基本操作/index.html","51635938385367d9321d5936fdeadf43"],["/MySQL-列类型和数据完整性/index.html","2d38ff4eec579d0a9c55bba57919d9de"],["/MySQL-数据库设计和查询语句/index.html","b0384062fc1c61a89154787b6813f4c7"],["/NSCODER和SWIFT初始化/index.html","05aa7d9e20602fecbb05e10e53570a37"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","fc8cb5db2130803b787fafb6b93cf302"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","f1876560bbb2665812be5f46427da167"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","fd633ad647e7827684512b6bd70d7b08"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","fbb6c435831468a52efe9ce78cc11ad1"],["/Sqlite 使用Tips/index.html","51859d6604c0925b417f832c2ebfa10e"],["/Swift 5使用UIImagePickerController拾取图像/index.html","16fc623a385e1d1bb3c7a1583fc4c81f"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","6108dfee4e0d42364d2575706243cfea"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","069478cf348ddc5f2067f1224f114a97"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f65de27f9b022c38c4fdeb7a880e372c"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","574c000be4ffbfa7bff42dc739151cac"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","b67bfa3a2dc678d2f4e8d3288d71debe"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","d30b5d2d9cd23f06df8b773964bf5763"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","72bf9977ed2cdd3c1bffc5c78123e869"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","350fb5ee04a44d36d6f09785b11a367b"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","c5b0251317c6949301a080019e14b130"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","ebeb783529d4d80e2877dcc28149eec3"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","1f45f9ae96adb0e122aca4d6980f0a7a"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","692ce19e156d36d86b5cfc249660435f"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","71d11a41556736713b78c70d6f786dd6"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","d4414747105cde75fe9785301a309326"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","adaa89b0475719e19ff14cf1b1b3b172"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","48da6f089d0442179a675de209541c89"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","152ad39b1e5740d0e9b14d389704d916"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","9e4d94c8586273ce255158c033e897a4"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","457dd650b70f6f66a8a16a2f24d22da7"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","fef64e733bc7baef8a9132dc99b6a5dd"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","1d69e6d62596a61e42611bb31e594207"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ad3eb7b9c04eabad791cbbeef164764b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","69296ceef1e8493c3f99a61ed7f3204c"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","8718dd4fa2643a06d17769665731e404"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","8657a28024e97377c9a9c0524a9da726"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","14c84f65f9045b8f7cfccdf568a45846"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","c8da81c5c031a2ed5edfaeb5cdb949e4"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","822e6bd5c032cab93b0dcdd5a016e4ec"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","f75e407c4e4525e84d3b28d3129f7117"],["/Swift CompactMap vs flatMap：差异说明/index.html","b849d963c0abed22f16239ec970562d7"],["/Swift Grand Central Dispatch 深入实践/index.html","4e431f90ec94d9eb84fc45a753177aa4"],["/Swift Lazy属性初始化/index.html","c25d399f10a42ac0fd2129110466e2e4"],["/Swift Promises 初体验/index.html","c0e86e3de185feb53f07e34fcb6ce89d"],["/Swift Promises 探究/index.html","8f8386ed5a5413fd42e12329372e1005"],["/Swift UICollectionView使用指南/index.html","b0498db0bb04907bb9b98f7674a5eece"],["/Swift URLSession && Combine framework/index.html","28896f41a39af016b008a635508f68d6"],["/Swift tips/index.html","19f81ab4c8b2f1cb2f7976ebf1a1fff4"],["/Swift 唯一识别的视图/index.html","f0e8a949e3daa0bd6360f5fd8c0f68fe"],["/Swift 如何学习现代UIKit？/index.html","5f75674f51f66801143fa2f1d482bce2"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","f5531f0a3bd5fbb59feea1ee9d5488c7"],["/Swift 用 compactMap 替换 flatMap/index.html","3fff35a0d7ce632d8f2a2a150513c67d"],["/Swift 选择和播放视频/index.html","406c97d5123a1e035c6771ef120ca0eb"],["/Swift中UIColor最佳实践/index.html","03cc481f6d64de135d3eec02e1545f7a"],["/Swift中快速简单的工厂设计模式/index.html","e1ca649ebb22e815f2da5a0880b8aba9"],["/Swift中构造函数与静态工厂方法的比较/index.html","602cfe0b60458e1955f2a5ea4c8164b9"],["/Swift中的UITableView教程/index.html","48e2b611f522fd219fd36212c4628f7f"],["/Swift中的懒加载模式/index.html","f5370ede35f5f0ba6d7bdb2ff77b895f"],["/Swift中的模块和挂钩/index.html","ed85dba2717b40fc1797bb0c84cabdc2"],["/Swift使用布局锚点添加约束/index.html","f4c4b6a3a9ed0442fab666995adf21d5"],["/Swift依赖注入设计模式/index.html","b4f74899ea81b4348c79594c4283b540"],["/Swift关于Dependency Injection (DI)/index.html","9901b9b6535245bedbc0bd88ab834d9c"],["/Swift初始化模式/index.html","f582999e55ae9f73a40e27d9e8b16d72"],["/Swift单例模式/index.html","83e81bb71af347ca70cd779079b8cdeb"],["/Swift原型设计模式/index.html","c99964d196bcfb88500beeb2d9c71145"],["/Swift命令设计模式/index.html","30e65e6a21c4f3fa85e32efccad25fbb"],["/Swift外观设计模式/index.html","89ba38a29cf12981b70479baeca63843"],["/Swift委托设计模式/index.html","e5a4438019bedaf12e8d33c9309494d0"],["/Swift对象池设计模式/index.html","e2c37a13e868fa23a34d7cb706623601"],["/Swift工厂方法设计模式/index.html","aeacb1351383220d7d86d695080fb8a7"],["/Swift带闭包的懒惰初始化/index.html","ccbecd54ae7c90cab09f86b974281dea"],["/Swift抽象工厂设计模式/index.html","c180acd1277f22611abbaf745eb9be15"],["/Swift掌握iOS自动布局锚点/index.html","9b8b90b3aa22a690b960151ea3e1351d"],["/Swift支持旋转的自适应单元格/index.html","3db4f0ad1a127327ba97eed4f11e6a13"],["/Swift枚举值/index.html","079bd016bdbb57a8620da0e56e623501"],["/Swift生成器模式/index.html","5437eaadf8b5bca29c9b462c64be5b29"],["/Swift结合Xib文件自定义UIView/index.html","eb4117b0fa2ad5a6f222ecba7ba4bfcd"],["/Swift编写的20个iOS库(一)/index.html","a320b9e1123cd6ef592822687fde8c12"],["/Swift迭代器设计模式/index.html","116809cb7de789f2c54a0ecc40200f4f"],["/Swift适配器设计模式/index.html","366549bba886f15d79942a420f2d8ab0"],["/Swift静态工厂设计模式/index.html","4d74386e5f79bdea8a621c4e34cd3611"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1e61b4331a5f1a053732a268f7a76295"],["/UICollectionView data source and delegates/index.html","a96f52f560b4f07de815c3b3ef3abb43"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","299af678170200bddf77d73b8934692e"],["/UIKit初始化模式/index.html","c66bc379539856f9f3e8b6e1243b9702"],["/Ubuntu18.04替换国内源/index.html","1b29b5611f0a9c52c675c90418b5aa0d"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","26d4acbf6f3e88e7ec28b2db0a2536f8"],["/Vapor系列 (一) :  Vapor 初探/index.html","a115ddf8e0d31f6eaae3488aa3660584"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","27ef0dc72fb12b6b0feea5be62bcd92f"],["/Vapor系列 (二) :  Hello Vapor！/index.html","e1618ce24c99d226a0e084adeb014540"],["/Vapor系列 (五) :  使用session进行authentication/index.html","a6d27ee6bdd428d9c7a6b3106d2ad7ba"],["/Vapor系列 (四) :  创建博客数据库/index.html","8e477121e115febdf796b60feaa082a4"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3e54135ddd72db416f72095b27d852df"],["/WKWebView与Native交互注意事项/index.html","b8ebdbf653d5c671d71a7cff7f741298"],["/Xcode扩展/index.html","3f1c1e7b6b46aec85d2c6ec555e7df8f"],["/about/index.html","ba51a0b3fd26138d862e0cc35aba5789"],["/appleOS的Networking示例/index.html","cd817e23f5585b3216f5cef3330c30d8"],["/archives/2020/03/index.html","477d786fe618e6a07bb899806784054a"],["/archives/2020/04/index.html","5017e4543f92a1014652618c8d13e180"],["/archives/2020/04/page/2/index.html","9d4f3163ce5793879e36993b60700f0c"],["/archives/2020/04/page/3/index.html","24d6de616689b638a793b089116954ca"],["/archives/2020/04/page/4/index.html","60a488467a83752563edfa28c58b3d17"],["/archives/2020/04/page/5/index.html","f048598eef8800c8f8d0708e1d66125a"],["/archives/2020/04/page/6/index.html","23899b662539b9b8693346b642c788e3"],["/archives/2020/04/page/7/index.html","a07a82a49b71e4f44d4f04eaf91ecb03"],["/archives/2020/04/page/8/index.html","d576fed5c86a5441dd1196c6cddb044a"],["/archives/2020/05/index.html","14df59173f15db1984cfb8b0783cf760"],["/archives/2020/05/page/2/index.html","f63a51a0290bf8ad6d17f4e43c8b12ca"],["/archives/2020/05/page/3/index.html","1319c0aed13b47b8174558d425ec4b50"],["/archives/2020/05/page/4/index.html","fa1621841d2fa352f004e1feeed3340e"],["/archives/2020/05/page/5/index.html","55fb75afb5012f69d18f1538beb72d81"],["/archives/2020/06/index.html","a1ed4b4ba0d10719dbcb5c9a5ab31461"],["/archives/2020/06/page/2/index.html","6b4344ce7c62a5df558b970399f2a698"],["/archives/2020/08/index.html","0659bb9700e83642cb5cf7a1f784fdb9"],["/archives/2020/09/index.html","9f655d9dc3b715650eafecde36a84df2"],["/archives/2020/10/index.html","0bebce69bbfc7bc85bfb821bceac2ed7"],["/archives/2020/11/index.html","0ddd7765606c0d81d78a1a0629874c13"],["/archives/2020/12/index.html","463fd349815ac0a8cdd8353c64753231"],["/archives/2020/index.html","5342fda508c44c0dd86f41d6fb00e257"],["/archives/2020/page/10/index.html","2eb629ba577c10c66057ba294d7401a2"],["/archives/2020/page/11/index.html","f2c62dcb831f99a6ce48d5e3e663ca73"],["/archives/2020/page/12/index.html","d226be7794c776addb7c874c2f8cc117"],["/archives/2020/page/13/index.html","ed330086d6c849acbc26839731bc4078"],["/archives/2020/page/14/index.html","bc8faa267b276f32174a61b5e5e369f1"],["/archives/2020/page/15/index.html","6fb8ae04d1a2620462a43699b7e5d64d"],["/archives/2020/page/2/index.html","19e1c7b6f49830ab7e9dc9911d93d533"],["/archives/2020/page/3/index.html","03d00887f42abe4d45f3e38d72b19228"],["/archives/2020/page/4/index.html","0e29a29a338278b9518f35d7731f87d6"],["/archives/2020/page/5/index.html","db524226592238928aaffafe7ab9f488"],["/archives/2020/page/6/index.html","a832c43038d781359464e1b663c48fa8"],["/archives/2020/page/7/index.html","715cfcf0d966ef23837094c29e1083ee"],["/archives/2020/page/8/index.html","33099f96dc612ea153a572b6a90f2a0d"],["/archives/2020/page/9/index.html","e58ae07f62db19ae190fb70cc0988702"],["/archives/2021/03/index.html","2011ed8dadce8a08ff658c28aa1d0e31"],["/archives/2021/04/index.html","04804827157fcbe17e24dc524be0763f"],["/archives/2021/05/index.html","b08510387c100260688fdda6905b7176"],["/archives/2021/index.html","fe3a155ced489248331f5add5f3432cb"],["/archives/index.html","70f79200380550c410e2a99718252d75"],["/archives/page/10/index.html","1ab839b2b49a0adafde11f5792257899"],["/archives/page/11/index.html","95065f05a2f78fc3e1056032df7aa87e"],["/archives/page/12/index.html","956d044adf04154d5827fac26a1aa12a"],["/archives/page/13/index.html","2f7af1acff892a20aca49de6827422e3"],["/archives/page/14/index.html","e50dc08205c6c03f2c1fe63399e05c74"],["/archives/page/15/index.html","1da6860e9af719c31541c54f01debb08"],["/archives/page/16/index.html","d70674d666047a18e2757d49cf22cb51"],["/archives/page/2/index.html","77e29d1a69867091047c86cba1128787"],["/archives/page/3/index.html","33f991bacab1382c7686a1e016051e54"],["/archives/page/4/index.html","c18a9e3bab496c1a7d473ed6c344db32"],["/archives/page/5/index.html","0e18c92084dba4f87c3014a60f5b00b6"],["/archives/page/6/index.html","1e3e2d3478a197e0c87858fc8a783d17"],["/archives/page/7/index.html","addc6fd16c72834aa91f5d51abafaeca"],["/archives/page/8/index.html","165004842d27222479f9bdda19337a5b"],["/archives/page/9/index.html","0bbb80cbea471ba1b86bd1dc8d4189c9"],["/bugly 上传dYSM文件小记/index.html","226ce9da3d2b0e7319f032329f336c03"],["/categories/Advanced-Swift/index.html","c7ff646b35b9d70b5ab28b0f72cc2224"],["/categories/Advanced-Swift/page/2/index.html","18bc03126b120e3599f6cffc4c484eab"],["/categories/App-Architecture/index.html","9bed495a1f8e7990063fe522df163a27"],["/categories/Array/index.html","6642e5cc517bbabc364bf3c535c82d91"],["/categories/Codable-protocol/index.html","873e3c43c98dc3de0b04a8ee35e66300"],["/categories/Combine-framework/index.html","8bcef10b6065d845f6efb86a02795132"],["/categories/Combine/index.html","2df769304a13c4521273de404a560414"],["/categories/Go/index.html","728d6bcd61c4ec34d5909e5956da6706"],["/categories/Grand-Central-Dispatch/index.html","841b22b319c5f7349780f06c38e7f13b"],["/categories/Hexo/index.html","aed3462e3ede402ebd3b3519052ef9cd"],["/categories/Homebrew/index.html","33846685f29379e787be627a01bbe8e6"],["/categories/Linux/index.html","cf579eccdb4ac4a44ab74a1e23f56d22"],["/categories/MySQL/index.html","8c5b79f29c78e393535c7218315b5c2c"],["/categories/Promises/index.html","5a31755866a2b0fa600a5961599cca99"],["/categories/Result-Type/index.html","9a03f26ba8711738a1e6ad91f9492ba9"],["/categories/RxSwift/index.html","f2e91d787235c3c4d5cb7424de00228f"],["/categories/Server/index.html","b5cc1fe21788af8339cdc66a83be1ea1"],["/categories/Swift-Apprentice/index.html","8299d3f75b1c22cb599f914f15d94941"],["/categories/Swift-Apprentice/page/2/index.html","e664720ca29ad8dbfd49b4858fa85d9a"],["/categories/Swift-Apprentice/page/3/index.html","87e1fc3b81cecfbf21d6f8e0d43aba52"],["/categories/Swift-源码阅读/index.html","17780dbba9d07d7f5e548bf4dfe190d9"],["/categories/Swift/index.html","979bbb3426c164544fb8070b18f8d32e"],["/categories/Swift/page/10/index.html","b6aed0d2463c9106afa30efedd09bbfd"],["/categories/Swift/page/11/index.html","ca93de5f0732b51b9b28f6156eb744bb"],["/categories/Swift/page/12/index.html","3f2d684cb8a132c51387c8e2232ebd40"],["/categories/Swift/page/13/index.html","9ed3c7dc195ae358be83dd832529a02b"],["/categories/Swift/page/2/index.html","2d2e0c070fe145e6981c03306b11f991"],["/categories/Swift/page/3/index.html","a33e948a91b70cf8af48a45578040aa9"],["/categories/Swift/page/4/index.html","859cb38c3beac90fdf1b48b89c60e6f0"],["/categories/Swift/page/5/index.html","94bbdc06a033242c590168d79d9acc7f"],["/categories/Swift/page/6/index.html","0c55d2ca72358b752c4cfc6346fb8faa"],["/categories/Swift/page/7/index.html","d7e9df76d4247b9e847a85226e843da3"],["/categories/Swift/page/8/index.html","9c3131f6c9f92cf300c7e74bdf092e6c"],["/categories/Swift/page/9/index.html","ae324c95a5bc6fac17767667c578f2ae"],["/categories/Swift5-2/index.html","d5ae207f42c35782791ab34bbb4cd417"],["/categories/SwiftLint/index.html","ea4364ad9cd60cf7faa94ad1272144a3"],["/categories/SwiftUI/index.html","5051d5db94f583b0acd671d288968cdc"],["/categories/UICollectionView/index.html","11e2cdaf70e8990d856fd7778e4dee42"],["/categories/UIImagePickerController/index.html","b5bfd770242ba38a8f0efc406ab746cd"],["/categories/UIKit/index.html","9d1c37fbd3ccf7aac68b44c89e7d2594"],["/categories/UIKit/page/2/index.html","ec2f9f2c1a8c6cca5fe088933ca545ca"],["/categories/UIKit/page/3/index.html","47701fee6f2bb34ddf698cff46f7fac6"],["/categories/UIKit/page/4/index.html","e292eef43518d71e705aeca311622aaf"],["/categories/UIKit/page/5/index.html","0b12574a75e77202af391fab435b83ad"],["/categories/UITableView/index.html","e3125dcdfd97a33453ade951f8679458"],["/categories/Ubuntu18-04/index.html","eea15b3fd0a0469b639ab54481c1b1ac"],["/categories/Ubuntu软件源/index.html","4c501505b27dda395ce42e56b8e13c53"],["/categories/Uniquely-identifying-views/index.html","aab62a80fa6504b844cc3ff2fdac22b8"],["/categories/VIPER/index.html","633ecf7def7619536a2df74b0f8c1b0e"],["/categories/Vapor-4-0/index.html","1c3c740423327ca48a64e6febe3b9a96"],["/categories/Vapor4-0/index.html","c56e94141e29278d52a059de902f3183"],["/categories/Vim/index.html","341b265fe67dfd61961a02a848d03e11"],["/categories/Xcode/index.html","65dfdf27f7432f03808f09f4e64099ca"],["/categories/appleOS-Networking/index.html","ae9cc9d718ffb5bf0960245f02054c98"],["/categories/bugly/index.html","01657357740ec81da170ca1fe93cbe7a"],["/categories/enum/index.html","36e47dc42696d7e06b282391c9b27e22"],["/categories/git/index.html","c8f95fa3c3e69d2170c345afa1c2615d"],["/categories/iCloud/index.html","37a7b2b2bfa56031ea302b98520bb976"],["/categories/iOS/index.html","dba7da8261029d2443b1be9a64bf635c"],["/categories/iOS/page/10/index.html","3b3ed642aa2d28329e10c177cab66917"],["/categories/iOS/page/11/index.html","1dbcf70dd2aaac98a553088bd0ce3376"],["/categories/iOS/page/12/index.html","b8f3de9ac41f415bd2f8aba74287c712"],["/categories/iOS/page/13/index.html","03ca3f5cc1d0c5ae4462bfff5126a955"],["/categories/iOS/page/2/index.html","858671f5efd30496ad2ebcf9121ae2a1"],["/categories/iOS/page/3/index.html","317f459da33bb30bc64defe5c49fa166"],["/categories/iOS/page/4/index.html","7be322996545b2d8611c5601c4e72031"],["/categories/iOS/page/5/index.html","98ddebdf22b943431caad4778d595628"],["/categories/iOS/page/6/index.html","fe366c9c301ebf2d92da2573699fb7c7"],["/categories/iOS/page/7/index.html","eabbeaa1256f787d0af083b2e4c22c84"],["/categories/iOS/page/8/index.html","124c554fcf55707a5728ef366c1f976d"],["/categories/iOS/page/9/index.html","188b13fea14554fac39eda56886a4758"],["/categories/iOS面试题/index.html","1a5a9f67bf07bfbb1d02fdaaf7470613"],["/categories/index.html","290e3ec60ac4b287207773d2b279301e"],["/categories/random/index.html","dd7d3332a59aee9c0fab7ebab326d462"],["/categories/三方类库/index.html","583880cd0c88e5d955a3adda0b4e8b47"],["/categories/函数式编程/index.html","a7d263797750d1e03ea9a9d6a4ea6ca2"],["/categories/子类化样式/index.html","5a599692982e4dd611a36c67cde09522"],["/categories/开发技巧/index.html","532b05cc880dfc740f50fc1a3763b65f"],["/categories/开发记录/index.html","e73724fc57d4300f8a3288b064c6cc77"],["/categories/技术支持/index.html","6e27a6dcb38831ad0d7d44c4b9a4e0e1"],["/categories/数据库/index.html","9ee7c246becdc17dcd521609497cabed"],["/categories/架构设计/index.html","d8f43d8bb915992b50d9cd1230726cd8"],["/categories/测试/index.html","37c7d93aec148d3cb601d099c2e0021c"],["/categories/用户体验/index.html","98caa1eb4607d51433620a89ad655c4c"],["/categories/用户协议与隐私政策/index.html","706057885d45a983969210f16f1cf256"],["/categories/设计模式/index.html","1e7e920fb4cfa975446ca655f0f19f35"],["/categories/设计模式/page/2/index.html","ed34f2f703f995fbb44468fac8cbad36"],["/categories/设计模式/page/3/index.html","a4b39498fdd5023cb663937b02d32593"],["/css/main.css","a8036be7affea646c9806f7deee519b5"],["/hello-world/index.html","bfd362c342f45cfee067aed5afd48bdc"],["/hexo部署失败/index.html","334a0cd874beb0d70f4dd9cb9e893ca3"],["/iOS VIPER架构深入实践/index.html","61d6593f1a8a8b141077d20fb52c2083"],["/iOS 自定义视图，输入表单和错误提示/index.html","448c19d0f98e019b7cbdf20ae11ffc6c"],["/iOS如何使用iCloud文档？/index.html","66cdc02db8236db7113ae916fa49839f"],["/iOS子类化样式/index.html","37f130fb5680dbb014a0fe708edaeaaf"],["/iOS开发记录<一>/index.html","e15f7ccf517f664cee0fa891ef4d94af"],["/iOS自动化布局编程/index.html","79250401c20aff448d46986d6789b229"],["/iOS自定义转场(By Swift)/index.html","5429032b4eaa545497297fea9c8c56d5"],["/iOS项目架构：使用VIPER/index.html","822db2808a872beed5b68b4be124d890"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","af5de47d321c4a36601ea5043c60537c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","79d4b472fab08fdebf6eff58882f22e0"],["/page/10/index.html","8ae1f994e6b5da948ee3048ffded28d2"],["/page/11/index.html","32345c85f9ca202db26b3e5da973b159"],["/page/12/index.html","6fa22df8ed766f1ddf4c198014a12d53"],["/page/13/index.html","c2d30ee67a09a5bdda6546dd680977f0"],["/page/14/index.html","c11978e6df28f2a5c9cacd284d9c33d8"],["/page/15/index.html","23cedd4585cbaa1dee385b938e020b2a"],["/page/16/index.html","0ad93593eb881148f386e364ebe60278"],["/page/2/index.html","991b393b9574de0f45d8bc59bd68a420"],["/page/3/index.html","ab25448625de28bfcf439142d078f03a"],["/page/4/index.html","988f3263907778e771a1fe20f7dafdbc"],["/page/5/index.html","a6786992cdc652abd996e9278eba5105"],["/page/6/index.html","6cc56db862be69d986cf21c20a74e836"],["/page/7/index.html","141770522caf7ddc94bbb517978ee7fc"],["/page/8/index.html","f4d3b18176bb087d9178f453f27ae9d6"],["/page/9/index.html","c48116f9f318e5a44f2cf00c1a772be2"],["/schedule/index.html","39c4f0cf8ec32eaf51e56f6c062b6a96"],["/storyAppPrivacy/index.html","fd7dbf670e448a3a79e5d65a87407472"],["/sw-register.js","3a348ddad5dac2e843c07c3c3a4a0b78"],["/tags/Advanced-Classes/index.html","edb8c31a437370cdeefdee6ea9f4df54"],["/tags/Advanced-Swift/index.html","a7fb7fa33ecb9fc7afee4ea200879bcf"],["/tags/Advanced-Swift/page/2/index.html","bf55abc7aaee9b1256e77463e794d93d"],["/tags/App-Architecture/index.html","7997cfb3e3e4bd76561101e9b86dfbe3"],["/tags/Array/index.html","4a54de9e0c6f78f2656f1bed55880ab7"],["/tags/Arrays-Dictionaries-Sets/index.html","0b1755b81df1322f0c4abed5e5b062e9"],["/tags/Authentication/index.html","bf9d54bf893056dc7fba5c70143b1547"],["/tags/Build-in-Collections/index.html","01a270ae6c0280187853c5a3a73f3391"],["/tags/Building-Your-Own-Types/index.html","974c110b6605095323d211beea6fe364"],["/tags/CMS/index.html","84c9683ecbf045c0c80c66b7a7b49a53"],["/tags/Classes/index.html","88d6f3a3c281f4b421a3b779c70c68d7"],["/tags/Codable-protocol/index.html","6ef8cdd340a327825668c090505d00e4"],["/tags/Collection-Iteration-with-Closures/index.html","a05579ce2b88e6fa640ec3af03bce95d"],["/tags/Collection-Protocols/index.html","e7cb1017edc7215773f8ce0f6e598192"],["/tags/Collection-Types/index.html","c6ebb5608978b564975fbb04523fd3e1"],["/tags/Collection/index.html","8ec1751bf24c42841a3552e452696b26"],["/tags/Collections/index.html","9d31e96b6039302e50ddb0c8c843c730"],["/tags/Combine-framework/index.html","c200b21893ee4f6c798c96ee7978b1a2"],["/tags/Combine/index.html","170e16b0d28ab3c714774fc9043e7656"],["/tags/Dependency-Injection/index.html","2b195e0f2266e5bc811cc994c5458c20"],["/tags/Encoding-Decoding-Types/index.html","6d91090b1797228850a7b4ff2cc7c1d5"],["/tags/Encoding-and-Decoding/index.html","86c406914511ae326f55625b75f7c83c"],["/tags/Enumerations/index.html","55de836afbf8e6c728ca4c0dbdb9deaa"],["/tags/Enums/index.html","db543444974dc2571d2882422eb7f8a2"],["/tags/Error-Handling/index.html","0c2a3175971bd84db4d609aec22f171f"],["/tags/Functions/index.html","abddcf8d06a981681133434fa70732f5"],["/tags/Generics/index.html","bdf0bd726911a080c6327bed54208ea8"],["/tags/Go/index.html","da634181d6fdfbd50cd07b0ab8211e37"],["/tags/Grand-Central-Dispatch/index.html","fa8c52c5c73a1a054d757c63547aee83"],["/tags/Hello-Vapor/index.html","5b84748ea443d18f0ddfd53afc508020"],["/tags/Homebrew/index.html","04690a9c66bf558f33673ff476ab5413"],["/tags/Interoperability/index.html","bf5a09309d8089d83f02aad6a5872c32"],["/tags/Introduction/index.html","c2540e101de7e78c9dbc9b2e5e49dcb8"],["/tags/Leaf/index.html","5af4c2ca148d67502bfb4420878ab434"],["/tags/Linux/index.html","4eb5a1d18904d21d5ff77ba5c6ea20f4"],["/tags/Methods/index.html","bcf94652ea7738670c8c6e8316e503ca"],["/tags/Modules-And-Hooks/index.html","a7b15c8308d46095a5846366555392e0"],["/tags/MySQL/index.html","a3608eef311fc5e40d71e0cfd185b6ed"],["/tags/Optionals/index.html","b1ad62a3c0593ce579315a2d2a21e406"],["/tags/Promises/index.html","127832694807c2b2f3a3ade1b41f4ab5"],["/tags/Properties/index.html","8c006154098fcfbb620fa8e9db9522d0"],["/tags/Protocols/index.html","63bdf2d17d84bec7231fee7708af9034"],["/tags/Result-Type/index.html","9b697cae639eda42191236c9a82597dc"],["/tags/RxSwift/index.html","e5f51becf9bdc185d2c0dbdf61c971bb"],["/tags/Server/index.html","02a54cfcf0fe4d4a32d66b8bd8c66949"],["/tags/Session/index.html","9ef50da49f9df2fe15a4630d8a0366e7"],["/tags/Strings/index.html","0d6ce70ca0b9a21f7eb404648aba7681"],["/tags/Structs-and-Classes/index.html","9a113dab71d3884c40075265c7914675"],["/tags/Structures/index.html","cb14a642656328e53a143e1333a4c802"],["/tags/Swift-5-0/index.html","3e1031d856722278652849473c6270ce"],["/tags/Swift-5-0/page/2/index.html","893955178a4633d7dd512d6f7ea4f83f"],["/tags/Swift-5-0/page/3/index.html","202d2c6ab41f9864db198dcea319357e"],["/tags/Swift-5-0/page/4/index.html","e0da15d66dc25b3862410619eff83a88"],["/tags/Swift-5-0/page/5/index.html","c35f84fac323905b9b4155e78c064899"],["/tags/Swift-Apprentice/index.html","f56c5827435d64136a30754e22d84041"],["/tags/Swift-Apprentice/page/2/index.html","14601ae15bcb6f7717350248f67a10d9"],["/tags/Swift-Apprentice/page/3/index.html","3bfe7d80f56c20270f1a5713763c5c70"],["/tags/Swift-Package-Manager/index.html","1e564befac6fca2776ad3b57bf395f63"],["/tags/Swift-源码阅读/index.html","4d0d132e35d6e44bb817676c78ff47e0"],["/tags/Swift/index.html","94919f8dce078dea2069e52b5219e765"],["/tags/Swift/page/10/index.html","cf003f2c5ebc22c99c3ef7a9eed7688d"],["/tags/Swift/page/11/index.html","7975f522282f9a21156bc1d1280cd1a8"],["/tags/Swift/page/12/index.html","426a93c9e8a741da5be6dafb3912e02a"],["/tags/Swift/page/13/index.html","45cf8888618d27fc48ac136ba922bddd"],["/tags/Swift/page/2/index.html","d324912f21fd3f4b2c631e35227ab656"],["/tags/Swift/page/3/index.html","ea833f7d61ec2c84665910bd8558855f"],["/tags/Swift/page/4/index.html","fe7c088cac304bb802d177a656260777"],["/tags/Swift/page/5/index.html","4f7da707e5b50918d9fda747a359cc9d"],["/tags/Swift/page/6/index.html","b4c718abfbbc324c77e30475ca0fb908"],["/tags/Swift/page/7/index.html","9d48bc69f63e1942dcddb367c4f8e237"],["/tags/Swift/page/8/index.html","04eff361a8af8597b86e15f7e9652230"],["/tags/Swift/page/9/index.html","8835f1b5c81efa05c69fa68c6a879d0b"],["/tags/SwiftLint/index.html","c8a74262f379376db9ba41f91aacfa1d"],["/tags/SwiftUI/index.html","aef96ac86541e74291fdade0aead9b5f"],["/tags/UICollectionView/index.html","661fc35736b70cc757d04a037bdd892d"],["/tags/UIColor/index.html","14b24a0d5a929310d1ccef2bb873f3ab"],["/tags/UIImagePickerController/index.html","97ebbf3a82642f037abcc4bd2b3436f8"],["/tags/UIKit/index.html","76f465d85e9c1c866b948243b6b49d34"],["/tags/UIKit/page/2/index.html","fc08965df474a518c40326374fac8b9e"],["/tags/UIKit/page/3/index.html","17a74b969bdfb8acb9378333685fdc83"],["/tags/UIKit/page/4/index.html","cd7b8c635157bcab217c93a2589f529d"],["/tags/UIKit/page/5/index.html","77ad49a9782a48059dbacc4f41e7594e"],["/tags/UITableView/index.html","c1dbd404dcc6a611ab8d742ca609d13d"],["/tags/Ubuntu/index.html","3223f67044c2e9e85f42cb360df436f4"],["/tags/Uniquely-identifying-views/index.html","24421112f6d8d2d09b0caa071934da48"],["/tags/VIPER/index.html","ea7113c3eca6df9c253318cb04052e5a"],["/tags/VMware/index.html","b6ed21bd8f17f7da52e3cc6953b70215"],["/tags/Vapor-4-0/index.html","f8b6ac086e4ca88476ab6519549e29f2"],["/tags/Vapor-初探/index.html","0619701874b3224dd1603e1dde8fdcc1"],["/tags/Vim/index.html","0e14ed60623c21f5c60ec479f2da1665"],["/tags/Xcode/index.html","01ad769353553ee8c7ca5ae3a0163b51"],["/tags/appleOS-Networking/index.html","120560994b6ad5a30779a0f121fcfc05"],["/tags/bugly/index.html","49b68dc33100caf3376caeb825c1ef30"],["/tags/enum/index.html","d7bf68b0d1894a81487b4c99da5e5ac1"],["/tags/git/index.html","a3771d318caa2cce1586792b5c133c22"],["/tags/hexo/index.html","ec4c8d8ef2f03ece52a125fdd62ab48b"],["/tags/iCloud/index.html","c156bdbbde05e9fee725a01ec22d9832"],["/tags/iOS/index.html","4b90d11898612c3acaabd306b14cd2a0"],["/tags/iOS/page/10/index.html","f056c3eee3748ea83a3eedc02d3b1570"],["/tags/iOS/page/11/index.html","8f01aeba811bc8df61837ebeedf0f8c4"],["/tags/iOS/page/12/index.html","c941219cd7d2d6e9a0f61a0d44b2d5cc"],["/tags/iOS/page/13/index.html","b94e4744452b562ab4cf17071df043fc"],["/tags/iOS/page/2/index.html","45ff682d1ca4d2bff05f12d8821d168b"],["/tags/iOS/page/3/index.html","7f73b9735222e4ec59e0839da4fbcfd1"],["/tags/iOS/page/4/index.html","d74749920f9a656027c642ddd61d28e8"],["/tags/iOS/page/5/index.html","f8eaa7388f92e8b2a8f8178e44b637e2"],["/tags/iOS/page/6/index.html","f2e63a4fe8c4c53994f0d531113a9cc6"],["/tags/iOS/page/7/index.html","bb0c09887023257760fd1035769bbaec"],["/tags/iOS/page/8/index.html","070c3bef917da489ee1577d1c57449dd"],["/tags/iOS/page/9/index.html","b4e2478d3bcaf8fb711a479fc08e3e2a"],["/tags/iOS面试题/index.html","3d39190b4f187a2a7f5da80ba98fc177"],["/tags/index.html","c568125b4c7b93dd3d600b80d619c950"],["/tags/non-optional/index.html","9c8b7fb6605d549447c30dfc8cf9dce2"],["/tags/random/index.html","01a756fd6ba6b23297a5ca274325b1f6"],["/tags/transition/index.html","622c326ee554a5f9121aa5f11a4b3c4f"],["/tags/三方类库/index.html","09e0de66fde9c8ffcbd0a03f33f2c655"],["/tags/依赖注入设计模式/index.html","196a3134396c9e194156fc138911d4d2"],["/tags/值类型和值语义/index.html","b39b706e7d9d5c09ccd3eb5576558449"],["/tags/内存管理/index.html","f251acd91947885b35b3fb0c067903ea"],["/tags/冒烟测试与回归测试/index.html","8a03e83864b8135a59e61510ac954b3e"],["/tags/函数式编程/index.html","5a57329ff47af1db281c25548fb7504b"],["/tags/创建博客数据库/index.html","9385ba4467e813c2dad688a7df43e565"],["/tags/初始化模式/index.html","4a4e73a5957d3cf53e5a30dddd6a84d3"],["/tags/单例模式/index.html","978aa24368f66b87a57d18d30e52ce7c"],["/tags/原型设计模式/index.html","8a10a513bcef3dcc7b3d6bd58bf8e306"],["/tags/命令设计模式/index.html","d8fb7aafb8d5407f3a3566d48826cdaa"],["/tags/基本控制流/index.html","5324dd9b623662ff264a961531afede9"],["/tags/外观设计模式/index.html","d0bef242f3009fc02cf7cd635b4761fb"],["/tags/委托设计模式/index.html","49797d6d54898516c6f9f2061a8359bf"],["/tags/子类化样式/index.html","fb71b900a93555662a5eab7c0957b4fb"],["/tags/对象池设计模式/index.html","88b44c8a57ec9313c37b80cf2b8acffb"],["/tags/工厂方法设计模式/index.html","5de1af251e87fc5e1d5a6879c888b28d"],["/tags/工厂模式/index.html","398611f26ff20df8ea079fb6b793a672"],["/tags/工厂设计模式/index.html","827a5dab6bad677c2570640e659cb743"],["/tags/开发技巧/index.html","023c8ef83c4b497ed159a7c640117183"],["/tags/开发记录/index.html","c95a3b4cb0bd965d7cc16cb81bdb431a"],["/tags/懒加载模式/index.html","8d8a365b07ba14f34a8fee009f419c60"],["/tags/技术支持/index.html","73029f46782bc42f58e8d6eaad1eed3d"],["/tags/抽象工厂设计模式/index.html","9418ae9204a4098a642c62af8427bbcd"],["/tags/数据库/index.html","97838972e59454552334ba5237236526"],["/tags/构造函数/index.html","5b5e64408ee9d7b378db4e398329edb8"],["/tags/架构设计/index.html","365f8aa4868624bee283e5a7c11dfd57"],["/tags/模式匹配/index.html","a654f7325065514b10f19c8e8301c22d"],["/tags/生成器模式/index.html","e4e0daae7df06e1fadb4f0e92c8a432b"],["/tags/用户体验/index.html","e4fe85ff826b8ab297d7d84a21e50d12"],["/tags/用户协议与隐私政策/index.html","942053057b6d3947f8d5fb050f6745e9"],["/tags/类型与操作/index.html","ce637a94cd2c2835d60637b80caf93db"],["/tags/自动化布局/index.html","0dd9acbd67c5285d107d1000185e5102"],["/tags/自定义UIView/index.html","2cfd0d06d0b9bd0688f25ff78ed9fbb6"],["/tags/自定义转场/index.html","204fc578b013976dfbfd41c50f2253cc"],["/tags/自适应布局/index.html","aa2ca74f0b731983dfa74214999e341e"],["/tags/表达式、变量和常量/index.html","6544d8bc17c55b235ec63fcc6cc7bcce"],["/tags/设计模式/index.html","863e2e5b40e51481e14360f21bc97702"],["/tags/设计模式/page/2/index.html","5e73297852e287a8b86e66e5a0b22a01"],["/tags/设计模式/page/3/index.html","63a21db0a9768f754faeb476ba029c0c"],["/tags/访问控制和代码组织/index.html","cd10215e9d363100f863ede36a19961f"],["/tags/运算符，下标和键路径/index.html","37254d8a8406a4d7c9651b72bb14d7be"],["/tags/迭代器设计模式/index.html","5253006a7510110ff4887912e54b2822"],["/tags/适配器设计模式/index.html","87d249708b617edac7899f39f87c76e6"],["/tags/错误处理/index.html","b80e84a4683daf43a56b4385eb1059b2"],["/tags/静态工厂方法/index.html","6b0930991347d5d9329d00df448bf129"],["/tags/面向协议编程-OOP/index.html","b33a6bb723ce5fe8731a8e94d906380e"],["/tags/高级主题/index.html","214ea2ffddc13a304b62728e1c1ddb75"],["/tags/高级协议和泛型/index.html","6bf2525a17be34237acf064f84143815"],["/tags/高级控制流/index.html","7d0f11b1237a077a76121fcaf70c200d"],["/为iOS应用构建输入表单/index.html","31a2d4f1709f8ff8cd4125137dca20f4"],["/产品开发的幕后花絮/index.html","4f80edfa969feffe204851d8d703d326"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","81e5c643a7c9b3297d99d43d66a3bea7"],["/冒烟测试与回归测试/index.html","09a7a938c69ee725a442a6e30e927e9b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","182cf93b602b571532cbc6ea3dad9585"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","1524800ded3797e25006448a908018b4"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","eaa309fd0e7e8805c83c27cd15115367"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","c84a75c77b18d86e97672f838257e0d1"],["/在Swift中创建自定义集合/index.html","64bb1a3434baaa937e5ddb4bba8d7fcb"],["/在Swift中处理非可选选项/index.html","ea1deb627aece9d3d963b0cfb14613a9"],["/在Swift中生成随机数/index.html","be6b1868cfac5d3a82233a267fc66155"],["/在Swift中重构单例模式用法/index.html","2703cc674797311ca4190cd6ffaf9bdc"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","f7989eae18ff47caafd4d02ff9a1b595"],["/如何为VIPER编写服务？/index.html","127ce279171f7338c61da7caea184309"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","8801c700a8d0b19c18669296826fd998"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","2d05f0fd6942b8edef67c155860548e0"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1ac0b812764aeeb44254048713964069"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1c989c2cd113ce9b16dc35598e4313f2"],["/掌握VIPER架构/index.html","e59d7b9b4ab78d4c31e6cad7274f6e06"],["/揭秘 WordPress Hook 系统/index.html","7aa282d1008c94415b7c126f0d525bcc"],["/比较工厂设计模式/index.html","1fa26f19f455d7eb0ecaa03adb96ec60"],["/深入了解Swift中的Grand Central Dispatch/index.html","edad2d7c062e5574df4070fa35a730d9"],["/深入研究Swift框架/index.html","77a7e1b3e92d162c172c31e7e056bd58"],["/美豫直聘技术支持/index.html","cd7147bf88264c442dd867f093f9d58d"],["/美豫直聘用户协议与隐私政策/index.html","99d2551ac3356ec14960b8f8993d2110"],["/适用于iOS开发人员的VIPER最佳实践/index.html","8c0bb877246f6601f6260d2e069759b5"],["/选择Swift而不是Objective-C的5个理由/index.html","7fa15b9a416aec6068ccbdde0bef3a02"]];
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
