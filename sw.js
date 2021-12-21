/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","3e411473c2f0673b855d3ef0a01b0f0a"],["/2020年iOS面试题总结(三)/index.html","58a326a37a492430d5d41c46b494b4e4"],["/2020年iOS面试题总结(二)/index.html","0d54abab08f086ea9236d68c76be6de5"],["/Advanced Swift系列(一): Swift 简介/index.html","87ae22fac8a8c7040207967b89e09fd2"],["/Advanced Swift系列(七): Strings/index.html","d899f7301197e5846d83c3f340748e3e"],["/Advanced Swift系列(三):  Optionals/index.html","9b7bebaeed58a8e38b5834ed603706a1"],["/Advanced Swift系列(九): Protocols/index.html","05250bfac3db05912db42c86069fadcc"],["/Advanced Swift系列(二): Build-in Collections/index.html","dce43fac44505e9554198aa3d92c6070"],["/Advanced Swift系列(五): Structs and Classes/index.html","be3eb23911b58d37bb940192805089ae"],["/Advanced Swift系列(八): Generics/index.html","48f955b5001ade9e306caef065f9f4d2"],["/Advanced Swift系列(六):  Enums/index.html","d7aa38968f4718b130b6486f932edba6"],["/Advanced Swift系列(十): Collection Protocols/index.html","869d2f25014600af650f0127d82b8d0e"],["/Advanced Swift系列(十一): Error Handling/index.html","50480864b5b18c1bfcb3c7c4d4ed60b1"],["/Advanced Swift系列(十三): Interoperability/index.html","34f4077830fec6617e59fec79f5bc6d8"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","44dc5f29da816930cd3cf39fb64861e4"],["/Advanced Swift系列(四):  Functions/index.html","a42c5fa7345a6994c1b8a35a3301f32b"],["/App Architecture系列(一):  简介/index.html","5b476a2634a2a6ba01074de5593a90ee"],["/Functional Swift 初探/index.html","25db512294ec6cc67e0545830be9be8c"],["/Git 使用小技巧/index.html","dacfe48717050b7f36bfa4c02181871d"],["/Go Protobuf 初探/index.html","e67d3cee37049ead32f7d2eaca3a3e83"],["/Go mysql Tips/index.html","e14d837ba3d797190c6ef068765ebde2"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","13052750b40155061d592a9f7ac6e25c"],["/Go 入门篇：2、Go 实效编程/index.html","a9d750cfea991a36122f5ab7dab95f53"],["/Go 基本语法初探(一)/index.html","c5dd285b01e3b170be76ab72fc94a23c"],["/Linux VIM 命令及操作小结/index.html","fa4b8d7be4f9a6d96797b3c572a74739"],["/MySQL 基本操作/index.html","9b5dbeff90d2455105c63d1146b33703"],["/MySQL-列类型和数据完整性/index.html","abee47adf9ce8253279e569fa40c2e2e"],["/MySQL-数据库设计和查询语句/index.html","cdc7f59db38a0004651e10146d7970b3"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","90233ae74eb03586ea5c0b93bb6b01bb"],["/NSCODER和SWIFT初始化/index.html","1f8e0ddfe75e90d77f447d4a4096aa6e"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","8dab9d5d02c7d7836682d40cbf0fab26"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","f279175233c18948d7628addb580c13a"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","91405181e2e4cb6c4de97f5ef5f6f52f"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","65586c54bd9fde4ad066abd354d64874"],["/Sqlite 使用Tips/index.html","1fa980cb75f53ad775275d417d072c10"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","7d29f2d67cb6ed468576a1dab2287c2b"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9e3b6ae606fe289dfb297d5b6462b682"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","7cc548083ba677bddc8c56bed7afbf22"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","771811aae0e76ed9761dfb222216f4ea"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","863b415517dcb290d28e6f000761ac24"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","c027cf0a1c7aa98673f0787614edb00c"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","0c6af38f5275a7d2765b89699e16239a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","47d02e22f6c191d4bdadd09ad55ffbe6"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","3d18e465517bac20ccda791901b18d6b"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","fc54d29969f730f2e929e759f3dc27c3"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","813edd497caf4cb50a857772d8524c8c"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","59c4e4023cf55a9b7cbbff99d314561c"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","e59f8477157b83175f4ea3c83fd2c6e5"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","5570373171bc3d98d5b406e14344abfa"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","df705d557c86e027f124d51726170d54"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","6afa4a7c51025a5506ec8700ac88f93e"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","36b8e90ccc5a7d77de9e1347a350f88d"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","5d0c9702a036548bdcb263eb2e30061d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","eaba25daf954b84ed49e12a8ccf7ea5f"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","b9502e9e5e9db4e0942b14988ee36207"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","36b1601a01ccf87ed459214a037cac32"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","b8b02a2e89322d9bfc68810036d90ee2"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","e6a2c5a110b0935529196496fb209903"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7b24ee9896ac72e40287560a8fe112cd"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","49b0a869a46e961cf27fd2251aa2adf1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","b99321cd562e47b418ec5ffbb4e8c975"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","6e1bb3da8ac782a7119bcf6a870af3ca"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","6910a240210588d077cae086b8ac6b9f"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","2dc9dc97edba7db8e02232044e423981"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","289eb720cc91048d9bea4814ed57487a"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","6e368b95dc5af2019463c5f48fbff724"],["/Swift CompactMap vs flatMap：差异说明/index.html","f59c96bc4c7775c64d1a66170a51d057"],["/Swift Grand Central Dispatch 深入实践/index.html","121b93ee3cac31abdcca9ffd10ec0fc7"],["/Swift Lazy属性初始化/index.html","c692d555752795171f2b38998dc78995"],["/Swift Promises 初体验/index.html","01c3501b5ee441c8f94a7aa4cc759677"],["/Swift Promises 探究/index.html","e673d227da76cf0c631b62a6fac01334"],["/Swift UICollectionView使用指南/index.html","8b97ccfd98c2600b7329e8c124a36375"],["/Swift URLSession && Combine framework/index.html","1dea34e13236fcdb2a26e1ee63e4f77f"],["/Swift tips/index.html","20125cc6fab25967d1d7f144958a6138"],["/Swift 三方库：GRDB 使用指北/index.html","ba9964e5e016c352df0f4c79b338b7a8"],["/Swift 唯一识别的视图/index.html","547168ac559d5cb36fcded90520dd87d"],["/Swift 如何学习现代UIKit？/index.html","75d60c0c9645ef4c3632e18da9732a7c"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","215000a2a98fb750e7650c3347ebb19a"],["/Swift 用 compactMap 替换 flatMap/index.html","8d42d870bc79a4a1795999871951e636"],["/Swift 选择和播放视频/index.html","f0534399676cfd62e2daba35f9f41c87"],["/SwiftUI 系列(一)：1、 简介/index.html","c1dd30076ae4f4089a1917ddaf2331fd"],["/Swift中UIColor最佳实践/index.html","5ac04fa53d3e595aeb926bdcba13d676"],["/Swift中快速简单的工厂设计模式/index.html","1f5368aea410ae2ff90f7af0ee970a63"],["/Swift中构造函数与静态工厂方法的比较/index.html","e611433541aacc7d492f6cea69a45465"],["/Swift中的UITableView教程/index.html","50f156180747a22425ba70c349250ca5"],["/Swift中的懒加载模式/index.html","ca514e0d1bf6875248a29eec72f65485"],["/Swift中的模块和挂钩/index.html","6b013f08749454453d7c1405f0e6a899"],["/Swift使用布局锚点添加约束/index.html","0bd5cf3abccb74bf921c44e687910e70"],["/Swift依赖注入设计模式/index.html","0cb0608af82b974f57009651853814d5"],["/Swift关于Dependency Injection (DI)/index.html","f386dd30268414e87a0477b587829293"],["/Swift初始化模式/index.html","1c4d93d80c554a2fbe94b5a0cace0a05"],["/Swift单例模式/index.html","948e97c327bff2499137c93096491afe"],["/Swift原型设计模式/index.html","a27ef16f961b26c6b03d82e0dec2eb52"],["/Swift命令设计模式/index.html","165df0752a05cffc3263af0990c7c2b9"],["/Swift外观设计模式/index.html","bf56767fbe56a2ce1b958412be46361c"],["/Swift委托设计模式/index.html","7a7cdd943236eb9cf0a194952f1eef55"],["/Swift对象池设计模式/index.html","953c6adfe06cbbc6badf9c0e24065c29"],["/Swift工厂方法设计模式/index.html","c67f0c029e5031568998c4578e8877b7"],["/Swift带闭包的懒惰初始化/index.html","f434ef727e739b14efbe1bc25a181058"],["/Swift抽象工厂设计模式/index.html","24bb6c63f29dab3a818f2ec1ded99df2"],["/Swift掌握iOS自动布局锚点/index.html","64b22e794b57c683d30c6e267395488d"],["/Swift支持旋转的自适应单元格/index.html","810b014236541c7d3a9ae66622115779"],["/Swift枚举值/index.html","c11c8085043ce19e87a1ad39bf6617b9"],["/Swift生成器模式/index.html","e493d92f2fdf3f5b2ccd977c47924817"],["/Swift结合Xib文件自定义UIView/index.html","9b3c2ae3b9b5fcf9f496c9c5673ba81b"],["/Swift编写的20个iOS库(一)/index.html","9da8f93828c6a434f06f0506960e0749"],["/Swift迭代器设计模式/index.html","134a0da2f68dba5bf1682aeffec42351"],["/Swift适配器设计模式/index.html","ad03e0d2bf28424d13d68f8d76174d62"],["/Swift静态工厂设计模式/index.html","ff4f49e6aeed17791e387e31e40e3990"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","0fdab9a2578d92b6cce6a12532d489a1"],["/UICollectionView data source and delegates/index.html","06cd43434e00be27290d9a2b3836ac9e"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","a3d0324a0d0a2e3763c8fcf74518a4e1"],["/UIKit初始化模式/index.html","4fa24d1cb877a55f01036416557a62bd"],["/Ubuntu18.04替换国内源/index.html","037aa6d6060d86be7cbd3310ef7a6f9f"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","cd260b66c61c252cdabd2d50512e5800"],["/Vapor系列 (一) :  Vapor 初探/index.html","63a61349ee306b8eb316895c2566106a"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","396dd77f105fb5c208497a1a32814a29"],["/Vapor系列 (二) :  Hello Vapor！/index.html","7111db600bb715fe5aa1c35634dcf5f8"],["/Vapor系列 (五) :  使用session进行authentication/index.html","318ee4fa1aa58001de77b6ebd5d07286"],["/Vapor系列 (四) :  创建博客数据库/index.html","c3642b9c68f0cdc2422c713ae297e1f5"],["/Vapor系列(六): 徒手撸一个CMS/index.html","3cb4eea801df3092aecbda166638e2e4"],["/WKWebView与Native交互注意事项/index.html","50c6a6633ea79e505ecf07b89170ca47"],["/Xcode扩展/index.html","058504f814970621e7e2be137869b05d"],["/about/index.html","3aacc6e6f5565971e1c3f261521fed1f"],["/appleOS的Networking示例/index.html","e0400560810e3940337ac768a606a622"],["/archives/2020/03/index.html","ebeec6d8e487974ddde5502cda71fc6b"],["/archives/2020/04/index.html","14389a2cbfcde81c21058c9cbffa1232"],["/archives/2020/04/page/2/index.html","e81cee79e0e0a1c524e33b7a3c67cb15"],["/archives/2020/04/page/3/index.html","56ed43c73b17f65a3a1f5561ed24831e"],["/archives/2020/04/page/4/index.html","571af11a2f88d99932ff6c23ba480b10"],["/archives/2020/04/page/5/index.html","d59dcee56a088858c49926589e8c4856"],["/archives/2020/04/page/6/index.html","318500b8250ccc8832b441ce7cc06c3d"],["/archives/2020/04/page/7/index.html","c1d9c78b7b67b77129db39b8246d32de"],["/archives/2020/04/page/8/index.html","1052b0f2c1e299428b8a24c0e959ac10"],["/archives/2020/05/index.html","991b1b2c7fbf1fd5351b3f2490da8c6c"],["/archives/2020/05/page/2/index.html","e89fd7116fddde9ec040649e600d807f"],["/archives/2020/05/page/3/index.html","e0558e15c43c855dd553cdf22a2a032d"],["/archives/2020/05/page/4/index.html","a95a9a822a762b0370a90e2c86d79cfe"],["/archives/2020/05/page/5/index.html","8cb3f1216078d542043431cc112dfdde"],["/archives/2020/06/index.html","3dc8d66680a07b40fc5001aeb2613266"],["/archives/2020/06/page/2/index.html","7b18dbc416caeb1c1dca74145c0249a2"],["/archives/2020/08/index.html","9c60a772662377b6c2f17eb64218694d"],["/archives/2020/09/index.html","c6d27132994519cd2394cedd84ab5234"],["/archives/2020/10/index.html","a304ba70f7919ab2273f48f037949f2c"],["/archives/2020/11/index.html","ab33ac86c3a3ce069fd429224535bd35"],["/archives/2020/12/index.html","b6f5e04fafb7cdb1f6a6d32815488908"],["/archives/2020/index.html","26b12c5ee214aa59016c1cae6b2b95ae"],["/archives/2020/page/10/index.html","8971aed4eb317bebb2be92cf7de44091"],["/archives/2020/page/11/index.html","0b049ebdd96b44694ab7187088926571"],["/archives/2020/page/12/index.html","abe39eb1017abfa70d2a3d1602808d06"],["/archives/2020/page/13/index.html","bb152ef7c3aad58033793155d019066b"],["/archives/2020/page/14/index.html","c36ae1b7bfb52aa794055b4fd06f93bc"],["/archives/2020/page/15/index.html","9423f181b82af00ef93aafbbe5ab9369"],["/archives/2020/page/2/index.html","5a3801510136ca3d80be55593a809ecb"],["/archives/2020/page/3/index.html","75e59a15bb76c57cdf394ad889abadf4"],["/archives/2020/page/4/index.html","17f83d46c81ef329cd27397ebba5b290"],["/archives/2020/page/5/index.html","bdadc1d0558c34fc0ad94ff77010b4f9"],["/archives/2020/page/6/index.html","e8102ea56c0d77984dde3e22c76a1b26"],["/archives/2020/page/7/index.html","9f9e18a7538e2caf7246b8bacd943dc7"],["/archives/2020/page/8/index.html","fad0587454761d48cf51d6f59178ae0a"],["/archives/2020/page/9/index.html","c62393fb383bfe40801d9e58b43aa19e"],["/archives/2021/03/index.html","5e5162fec232af215f009937dea2bd18"],["/archives/2021/04/index.html","4ed63b03a4a32a076efda84406548c39"],["/archives/2021/05/index.html","4ffca2b6c004f24b8db74cda310b2a99"],["/archives/2021/06/index.html","55d18973c6804cec46ef737ae5479365"],["/archives/2021/07/index.html","11952fd21940e70bbe5177c3e53c2f64"],["/archives/2021/08/index.html","1677213e9a26846f5e54ec58a414e9de"],["/archives/2021/09/index.html","f62219c0549fea14e831272ae61a0b5c"],["/archives/2021/11/index.html","f5aef2d3c0f86e4779c34d8afa1df086"],["/archives/2021/12/index.html","6780f4f6a498ca28b8815561f6201dc0"],["/archives/2021/index.html","259f3e422564eb4eace818d970fa0097"],["/archives/2021/page/2/index.html","fc19436e326139ab40adf6a9be89ee32"],["/archives/2021/page/3/index.html","e2452887d7b38b767cd726147d6a8bfc"],["/archives/index.html","a00573b51c65a044918701d3dab63fb5"],["/archives/page/10/index.html","05a2291dd21b7e8de8896295cc62c0d4"],["/archives/page/11/index.html","2742a147816279a9f93f00d3774d42ab"],["/archives/page/12/index.html","18f53992127bdd894915554531e61a8c"],["/archives/page/13/index.html","92569d155017a46a466e2cec67f5f6d3"],["/archives/page/14/index.html","7a76500c51156f1cba914a32decf2485"],["/archives/page/15/index.html","59e98d4d053558f1cbdbd2801df3755c"],["/archives/page/16/index.html","401c4b7d076353a123e6a6653babc16f"],["/archives/page/17/index.html","8513e3a0b07356a04509d6d92d6de52e"],["/archives/page/2/index.html","e41e3bf0579963f0a9d927dce6cfec41"],["/archives/page/3/index.html","7108950f9733a71ef75c05a2df33a50c"],["/archives/page/4/index.html","7a3161bc02156f0316ffe018327f2a16"],["/archives/page/5/index.html","877cad9ad52e22595969f32c876e5e45"],["/archives/page/6/index.html","0946c6878c189a25403ad11123e3af2d"],["/archives/page/7/index.html","9df4af1be946471fc81772dcbe41bd96"],["/archives/page/8/index.html","95ddef4aaf47d4fd3a5992bd15b78488"],["/archives/page/9/index.html","4b6a13ec2bd46292f0512cec3d1a24cd"],["/bugly 上传dYSM文件小记/index.html","86813ca663780bab4196265d7463c394"],["/categories/Advanced-Swift/index.html","cc87c8e4c90bb466786af82b06f040a0"],["/categories/Advanced-Swift/page/2/index.html","dc4241276d39e5bf9e26932ca1880170"],["/categories/App-Architecture/index.html","0e288736137418670edb01a7783c0737"],["/categories/Array/index.html","6fbd173191048925c07f4fb5cb1e2eea"],["/categories/Codable-protocol/index.html","7d3d5e54a51539ea76a03262e39384e5"],["/categories/Combine-framework/index.html","398f03d8f340b0ffb501fa22e024d320"],["/categories/Combine/index.html","7cabe2f07d117f10355fe5952f378dd1"],["/categories/GRDB/index.html","40b52cf7a462dac1a196f9983b4cc670"],["/categories/Go-入门篇/index.html","8fbdbb7024a818e3012425331f36c672"],["/categories/Go/index.html","690f261b32271f47d5d003a9828898ac"],["/categories/Grand-Central-Dispatch/index.html","97b2ecc6ecb9b371cc35e4b048cd73ce"],["/categories/Hexo/index.html","300ca186295961fa908d8b96afeda9ab"],["/categories/Homebrew/index.html","0aab839579547338298fcb9a39680bfe"],["/categories/Linux/index.html","4a5683ed280bec35e6e82498d61beff1"],["/categories/MySQL/index.html","64fcdf42d52f0cad403aa9b15d17e111"],["/categories/Promises/index.html","566fc5591974bce5a75602a8733a5a69"],["/categories/Protobuf/index.html","d7b8e53b654e6555124586d9855581c7"],["/categories/Result-Type/index.html","c2e16ad39dc2e09bde783f768db9b256"],["/categories/RxSwift/index.html","5b9a912e494e17083d6f0568f974c2c6"],["/categories/Server/index.html","7250d5d7b5968991f2b1b05854fd2c25"],["/categories/Sqlite/index.html","25206ce3c8228ddafa63cf6c9b562dfe"],["/categories/Swift-Apprentice/index.html","d19fe5ad3eec8db10b168aad71862e48"],["/categories/Swift-Apprentice/page/2/index.html","82b2016a1f405deaee7fde2338eb19c4"],["/categories/Swift-Apprentice/page/3/index.html","cfaade056c4fd1586ce809f8d0441c88"],["/categories/Swift-源码阅读/index.html","6da460353ecfc79b59385867aa731aa8"],["/categories/Swift/index.html","fffb18b7016950c79368c8041512583e"],["/categories/Swift/page/10/index.html","9969da233c0ed6da8c99fa21cd557678"],["/categories/Swift/page/11/index.html","fb8c7412e2094c7506c12783837260fb"],["/categories/Swift/page/12/index.html","172b3bdff5cb38afbe4776f93f625b27"],["/categories/Swift/page/13/index.html","86bf6e904bbf8cb802788c225da846e4"],["/categories/Swift/page/14/index.html","0f78fb9b1517a7a4cff0c395ea768114"],["/categories/Swift/page/2/index.html","1bfaa619e5dc549c8888d3f937ea1d4c"],["/categories/Swift/page/3/index.html","5227a6b3c76fdee80dc4ab8bf8a6eccb"],["/categories/Swift/page/4/index.html","def2cd664e8c244a700cc67b311481c0"],["/categories/Swift/page/5/index.html","c7aafb62a5c5baef0aeb33aeeac43e3d"],["/categories/Swift/page/6/index.html","5ebd2837cd5b1b6ddbb8c7c31db1d384"],["/categories/Swift/page/7/index.html","75ff529351313a10087da58e57f17d47"],["/categories/Swift/page/8/index.html","49226490c95f9555ffcf862a0088fc3b"],["/categories/Swift/page/9/index.html","870b7189b83f0ccb22903872ca52f2cc"],["/categories/Swift5-2/index.html","09b917d45f29fd00274b5b69e10c91e8"],["/categories/SwiftLint/index.html","6a84021b370d9a2d65c0857cd25b21a3"],["/categories/SwiftUI/index.html","e5c4e4b46ccfc091c5c0509cc4a7c3e8"],["/categories/UICollectionView/index.html","25aafd4dd397b17cbd1d3023bfe1ad4b"],["/categories/UIImagePickerController/index.html","dbe2c91d2cfac45871903d4c33a836b4"],["/categories/UIKit/index.html","4f196c428409f8e0625da0ff9242a88f"],["/categories/UIKit/page/2/index.html","0d8dee2d86822ebf3c80fb975c469546"],["/categories/UIKit/page/3/index.html","0189c4e9a11353643b2d5e3a9f6269f3"],["/categories/UIKit/page/4/index.html","73640d32810929e128564b08952aeb52"],["/categories/UIKit/page/5/index.html","03f7ea614f198ebc1fc4a250c7cd4179"],["/categories/UITableView/index.html","b9a0e5091ba8dd411cfeea1030a49186"],["/categories/Ubuntu18-04/index.html","f833c4e384b5cb33cfcd65222c43cf9b"],["/categories/Ubuntu软件源/index.html","8fb94728ce387d485c2221a9e91e1719"],["/categories/Uniquely-identifying-views/index.html","05a970812b9ed7714ebeed701f00dd4e"],["/categories/VIPER/index.html","635e9e0284580456bdfebf957b3b3d50"],["/categories/Vapor-4-0/index.html","380a2b6c97429dbedbbc0f06c6cb25d4"],["/categories/Vapor4-0/index.html","db7227b725aa57eaaba75fdee28abbdd"],["/categories/Vim/index.html","2ff645921773e854ca0c31ba6812554e"],["/categories/WKWebView/index.html","b35b045e17768e19adff39978729ba96"],["/categories/Xcode/index.html","e812308d4d775b93335d3d65237e56b6"],["/categories/appleOS-Networking/index.html","b87e573d2eb458cebeccfd96cfacdc58"],["/categories/bugly/index.html","2d55f78def26c02a733424590873885b"],["/categories/enum/index.html","4fd7f7c5cc439ae9c144dfe5fdb75720"],["/categories/git/index.html","41d2e0436fcf98ef5f9b8e35e5425018"],["/categories/iCloud/index.html","a8d9e63529c6d217c407329dd17043c8"],["/categories/iOS/index.html","f46857f0e5615e3a2bfa1adb727a46b1"],["/categories/iOS/page/10/index.html","553cb01cd0a8e733116c96d0da2b9dba"],["/categories/iOS/page/11/index.html","3c856a1270cd35ee23c899adaad781a0"],["/categories/iOS/page/12/index.html","bb2ae19f61d0c9f0f1a7c595bb040119"],["/categories/iOS/page/13/index.html","4b052cb334ea13f9215808077bccaa99"],["/categories/iOS/page/14/index.html","1082257d28a95fb3a1d2778f37d40a00"],["/categories/iOS/page/2/index.html","4a48c8c29539c18d373f58b02bd2fa69"],["/categories/iOS/page/3/index.html","6f4147c082bd32b22e4311324f22492b"],["/categories/iOS/page/4/index.html","727d3ed4423237b9c6149794a41031b6"],["/categories/iOS/page/5/index.html","3eab0f6f19dcd8406f631dfc176557ca"],["/categories/iOS/page/6/index.html","209e86c0e29c0b2f9ce918054f901ca0"],["/categories/iOS/page/7/index.html","1eb2bef6004e8f0ff98f633848336240"],["/categories/iOS/page/8/index.html","7d84e652104dd60172118193d457e1e1"],["/categories/iOS/page/9/index.html","5e6fd07368a000252a9373881c5348f8"],["/categories/iOS面试题/index.html","86f109eeb6ce4f9167eed696d7c61a68"],["/categories/index.html","04455cdad77c893f24ffc0d41a88a201"],["/categories/random/index.html","75d3c97870c66c96adeb8a24d1382a10"],["/categories/三方类库/index.html","3dc9c67c046a35288eac17bc6152e917"],["/categories/函数式编程/index.html","d18351134d6a5f0f8c56681cc1ccbbc7"],["/categories/子类化样式/index.html","938ae36e232347af4f634992d53b2d55"],["/categories/开发技巧/index.html","2a31d5e34c51bc41f501ab6649411d1b"],["/categories/开发记录/index.html","0adc39e26af3595cf6d4bc7ff8338772"],["/categories/数据库/index.html","5b376d82e305d7d3ac719a9deda044e0"],["/categories/架构设计/index.html","da8d9fa902d564b6fc92c84837279167"],["/categories/测试/index.html","834ac922f3771f76bb420ce1b78d87a8"],["/categories/用户体验/index.html","bec71e2d7f149cfebb9183245885ef33"],["/categories/用户协议与隐私政策/index.html","53b77943244e0d277206a82bcc3d5d5c"],["/categories/设计模式/index.html","f22e730879cf8fd9ca1ac5be9619a375"],["/categories/设计模式/page/2/index.html","375d768fe52ef4001623b942c424e801"],["/categories/设计模式/page/3/index.html","a66640634ca73d14a81a4913484bd01f"],["/css/main.css","46cbc35875c796fe24d6f65fc9a94af2"],["/hello-world/index.html","ce265e1609ad51870cc47872ff454aae"],["/hexo部署失败/index.html","3a840dacfa580f6ac8e85ca6fd2f73d0"],["/iOS 15 适配/index.html","afa1a9b600b5de23cd3b67e3bdaedd81"],["/iOS VIPER架构深入实践/index.html","8a194a05f726d8984e22dfd4a61fb061"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","27430502d5cbf6455a4d41b6445f62e8"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","47a7d88f79912260844b543d144e2730"],["/iOS 自定义视图，输入表单和错误提示/index.html","8aa51cd101c368335eb5da13103bf89d"],["/iOS如何使用iCloud文档？/index.html","2a80bce13c2da9fb50494fc3f3f197cd"],["/iOS子类化样式/index.html","c722c98e79f8c5166fea6ab315d4d371"],["/iOS开发记录<一>/index.html","ed50691ddf19efe61268443795f4d388"],["/iOS自动化布局编程/index.html","051b077db5fbb5fa9e2d5d8edc75dd92"],["/iOS自定义转场(By Swift)/index.html","31727741b83b91803413cfb19673afec"],["/iOS项目架构：使用VIPER/index.html","5ddaf460d49dbdf19836be483ac35f3b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","76b9bda06438425be6a38b057d67f68f"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","e293f1ece7831d6f26fec9e8f6a45efb"],["/page/10/index.html","587e6555690f7c7da66d86f3672780f1"],["/page/11/index.html","7a6a5a4e8a34eceaf8c7ac7ac8ad7a02"],["/page/12/index.html","4f20e83c255ac9f8aef9e39e1771f424"],["/page/13/index.html","cbaffa4ef47234d19bcf9a8355539f8d"],["/page/14/index.html","fde4c5eae6d606fe50e084de532241d4"],["/page/15/index.html","09527f92a058f27a44885a8b4f2b8151"],["/page/16/index.html","16590b04f3f102328ffd197102f84707"],["/page/17/index.html","273e5ab25ae271d1603afba2489013b3"],["/page/2/index.html","affec505ca5df7468c3e8b06153abc52"],["/page/3/index.html","1e6454ecdc998459213d88763e6eb818"],["/page/4/index.html","0322bc0ff8cd2379a737366a4d60bdbd"],["/page/5/index.html","0c30881cc958bb1f4290aeb5b5b628c5"],["/page/6/index.html","7a8ffeafc2bc833efc01ad4bbed7f4e5"],["/page/7/index.html","81820bdb95bcd00bb8eceb795bf158eb"],["/page/8/index.html","40c4677719f3c1a4509af7ead770d11a"],["/page/9/index.html","72e216c283a424bd3b5d0e4bb664d31b"],["/schedule/index.html","2215e7a59b82a94a3f1627c6f216a89b"],["/storyAppPrivacy/index.html","258aa77b52d7b9d9669b01946b023c92"],["/sw-register.js","6f1d81eb8a3ae17bfe3f36457b62ecb8"],["/tags/Advanced-Classes/index.html","971a255125483b7f97c795a79e7ec85a"],["/tags/Advanced-Swift/index.html","488e2cd5a00e23816584f6b0b9b24376"],["/tags/Advanced-Swift/page/2/index.html","84a05a15c91521a4ff66e4a7f4b399e9"],["/tags/App-Architecture/index.html","5133d865bea222e1eaf0b007071038a6"],["/tags/Array/index.html","a812f71b77a81022ae5fafcbcb597cd1"],["/tags/Arrays-Dictionaries-Sets/index.html","5c6f73a4bc991ae5006db9b4bd6be85c"],["/tags/Authentication/index.html","7c26dad16c98c6a103f8a3bc938205a3"],["/tags/Build-in-Collections/index.html","1c51d6a864f1e34ba05005286677c1ab"],["/tags/Building-Your-Own-Types/index.html","6b2ddccf434e301e6b703de85d3bee51"],["/tags/CMS/index.html","68a6b9c2fd27992668a107644b024701"],["/tags/Classes/index.html","b56f7e6b7b0bf475552937a7d87cfac7"],["/tags/Codable-protocol/index.html","6b7ffb234a186edc81ba43458cd80634"],["/tags/Collection-Iteration-with-Closures/index.html","4399ff1245a491b75fa4118b22617392"],["/tags/Collection-Protocols/index.html","9a8d05ed9c819a8fbc2a4ee31790bbb2"],["/tags/Collection-Types/index.html","fa870c8f5550da2871aa7e5fa949ef49"],["/tags/Collection/index.html","794d6f85826d50f33dc70deb26ccc806"],["/tags/Collections/index.html","6c27bbb781b381d96607ebc2bb69352b"],["/tags/Combine-framework/index.html","c7dcd2e930a2c6621fce9d21153b9725"],["/tags/Combine/index.html","dc08c62dbb2784af27bd2afd76236814"],["/tags/Dependency-Injection/index.html","a0d8e0941b1bbb18b96c6ab5c1bd0e31"],["/tags/Encoding-Decoding-Types/index.html","690f7f5bd7183bdde494d2694adbb02b"],["/tags/Encoding-and-Decoding/index.html","a613e509c807681700443e8903924750"],["/tags/Enumerations/index.html","fa9550a30a5426ad33055dd7c6b2e838"],["/tags/Enums/index.html","6d4f001b86a5cdcf937da54ba786b164"],["/tags/Error-Handling/index.html","66f8da66d31bea224a25d9a03c9e835b"],["/tags/Functions/index.html","c3d995ab129dcd9eca9f9e6d14e4fae6"],["/tags/GRDB/index.html","d79f5c2d5b17482b2ca8be069ffe8297"],["/tags/Generics/index.html","8f83ed3f8ef3a5bc0f90670e12c20aef"],["/tags/Go/index.html","13969ca91d5c5a3b6e260397ef12c2d7"],["/tags/Grand-Central-Dispatch/index.html","d8c0be7e76aaee39e7eb53eac8d75dfa"],["/tags/Hello-Vapor/index.html","9a89dde17e70999ad4929183ecd7f0ea"],["/tags/Homebrew/index.html","a3fc608e536b15d8eda5e76379a97447"],["/tags/Interoperability/index.html","9bbfd5f492c41aa1d1d17945dcc80a65"],["/tags/Introduction/index.html","19649b61e5f71f9e28964f95eca34fab"],["/tags/Leaf/index.html","1bb16eca1b9ebc6ae8bd88e5a0f1728d"],["/tags/Linux/index.html","e1736b0d6dbae26f14565dacd9c9aa15"],["/tags/Methods/index.html","cf25df44f3ebb0fde72f8c4aef9c854e"],["/tags/Modules-And-Hooks/index.html","e4462d4c912572f2aeb9ff81873807bf"],["/tags/MySQL/index.html","4d9e09d98265f8ea6e2467dacdcddd38"],["/tags/Optionals/index.html","f874075c90b3e572440a035d84a11432"],["/tags/Promises/index.html","569744c46e7d9dc5d562370bc38b6656"],["/tags/Properties/index.html","d246ab5a4f9a982e83ef75c86d8b417b"],["/tags/Protobuf/index.html","56368f57adb25f8780e718c767630116"],["/tags/Protocols/index.html","f1b183a35097e7ee53537a345eaab3e7"],["/tags/Result-Type/index.html","bd211f7d96b3ad7a9d8a070fe842bfd9"],["/tags/RxSwift/index.html","b1499f9ceee00b3d6d7760c6a52d9422"],["/tags/Server/index.html","d7456217500b7c9c5de929bc2078df76"],["/tags/Session/index.html","14d24ea8b4ce6e415a8fe3d6aeea18db"],["/tags/Sqlite/index.html","9e2407afaeec16786bdbfb6b5a1ab236"],["/tags/Strings/index.html","c6ce4aac840fb7944184301760ca2dd8"],["/tags/Structs-and-Classes/index.html","7e70f38912d43e4db7fdb557ce33bc7c"],["/tags/Structures/index.html","c7e379f99e53c1b25db2b54ef3dee8c0"],["/tags/Swift-5-0/index.html","c8217c5c4e50d723b6bb28b8096d116e"],["/tags/Swift-5-0/page/2/index.html","92c793d75a79d46f0993eb4d0bb089cf"],["/tags/Swift-5-0/page/3/index.html","fc9ce79aa26600c4f62b55245767911a"],["/tags/Swift-5-0/page/4/index.html","761445bafdb447e4b6de5e616d5d1c6a"],["/tags/Swift-5-0/page/5/index.html","37781043c0415d3de7845a85807b4600"],["/tags/Swift-Apprentice/index.html","7e078ece3b96fe49c0c140f094bbd9bc"],["/tags/Swift-Apprentice/page/2/index.html","b417f72ec4d47f87e95b7ecf1e1f3fb0"],["/tags/Swift-Apprentice/page/3/index.html","a2d23549d33c80a505a050486ae57a37"],["/tags/Swift-Package-Manager/index.html","e9bb27f24c6e0a8214884478073fc323"],["/tags/Swift-源码阅读/index.html","8d18fd2f0566f1501e9f1daaf1d15cda"],["/tags/Swift/index.html","1730038295d36d82c5738af191d434a0"],["/tags/Swift/page/10/index.html","991b740e111198dee571ce1b94a38739"],["/tags/Swift/page/11/index.html","dda43601223592f3ba35756e20fd4764"],["/tags/Swift/page/12/index.html","ccf1aa77bde9f4dd2a9c3b5f7796138e"],["/tags/Swift/page/13/index.html","3db4e94e8993287395fb63349a66a768"],["/tags/Swift/page/14/index.html","eb5fd7aea6717f192a60858dee12bbd1"],["/tags/Swift/page/2/index.html","2b7fd838610317b98a0b35a8b15da0b2"],["/tags/Swift/page/3/index.html","610eb765cd16280985e3f7c1637755b5"],["/tags/Swift/page/4/index.html","d9cd1b86e0011acf945f03c29f0f829e"],["/tags/Swift/page/5/index.html","b74c2fadb844d832959c4bfe7c208e99"],["/tags/Swift/page/6/index.html","b38d78b85bcf666614fdbe2e5a8b12f9"],["/tags/Swift/page/7/index.html","03c0d2fb837729dd0155c4c7e915d529"],["/tags/Swift/page/8/index.html","f9baf859f778060018c487ef4aae9f50"],["/tags/Swift/page/9/index.html","980f239d022cddcf4c92f840b3d26306"],["/tags/SwiftLint/index.html","913bc4a1734e88f13d80e92827de0719"],["/tags/SwiftUI/index.html","d4b02ecd1fcd6db8d5288ee95f268623"],["/tags/UICollectionView/index.html","c7683fed00ac939f0452ef86513a6f4e"],["/tags/UIColor/index.html","6b27e012e7b4f635bf1bf63b95630a5e"],["/tags/UIImagePickerController/index.html","2f53d07b1b9d9791d924e08490b22c32"],["/tags/UIKit/index.html","afa31f58349b028ec989eaba16941c1c"],["/tags/UIKit/page/2/index.html","0fbd2ba66df41bc0220aad0402f03270"],["/tags/UIKit/page/3/index.html","eaf0a378f6832492be39b0604fb38f08"],["/tags/UIKit/page/4/index.html","5a0b99b28a34970b3815aebcf430603c"],["/tags/UIKit/page/5/index.html","f1a95932ff17777e995d81b4686bc4ad"],["/tags/UITableView/index.html","b875d43920d46fef18e14c762c03b148"],["/tags/Ubuntu/index.html","0a79686b9163ca90682394fcc719664d"],["/tags/Uniquely-identifying-views/index.html","218e87cd64117f7772c5fc57f918e2e1"],["/tags/VIPER/index.html","cbf3c1d6c0a729560a3c7cf58769c8ba"],["/tags/VMware/index.html","3547e9ef71603c812210734a7fcc6313"],["/tags/Vapor-4-0/index.html","b1c945f5a4c4d6a4eb0976c5057bb277"],["/tags/Vapor-初探/index.html","8e8688b0ba40dbe18c7ae4dd63741607"],["/tags/Vim/index.html","19c038dc29b33cf89e450808f576cb66"],["/tags/WKWebView/index.html","cb60eac76c0dfa06b4fa3c5ba1f257a6"],["/tags/Xcode/index.html","02aa2125dd6195a65a1e3694bf264587"],["/tags/appleOS-Networking/index.html","594e05a2c8b3b9d6cc74717875a5afa8"],["/tags/bugly/index.html","fc9578a13b175bb29b4ffa683df8c58d"],["/tags/enum/index.html","b1faef8f131b3aa2e446b9b5ff4b87d2"],["/tags/git/index.html","2c8eccd6d121962fc173d4ae7d254b2e"],["/tags/hexo/index.html","e82e6be25dce75c69a4a49e9b5164b5b"],["/tags/iCloud/index.html","9c28bf4e5080b1984835ea16c94c84d1"],["/tags/iOS/index.html","b17577c59b67a0b1d18dff84d24ffefd"],["/tags/iOS/page/10/index.html","b57b78b51ba0e37f89313c0833afd0e5"],["/tags/iOS/page/11/index.html","9f7643c54a6d28e5db10cdc601ec549b"],["/tags/iOS/page/12/index.html","d5fb2f96b4f4ad733802bc8ad4958f5f"],["/tags/iOS/page/13/index.html","623f5a76e4579515e005b6036a23a790"],["/tags/iOS/page/14/index.html","10019041b584be376df051997ac9d655"],["/tags/iOS/page/2/index.html","e244df1d190e59ac62677cb426c2758d"],["/tags/iOS/page/3/index.html","5b9426a23bc91fa4f60234b3d22fab30"],["/tags/iOS/page/4/index.html","a2097e147511d110c40d7e6676a55009"],["/tags/iOS/page/5/index.html","926cbf90a487730d5cc877b35d064ed2"],["/tags/iOS/page/6/index.html","a82bb6c097cc859b008531020a0e2574"],["/tags/iOS/page/7/index.html","d9dab48c040355a6c2b85f17d0178fea"],["/tags/iOS/page/8/index.html","c28579aa6e5975bc08f26d4d0be04416"],["/tags/iOS/page/9/index.html","6dccf9b68a743e6f0cd89f0e699fa9f5"],["/tags/iOS面试题/index.html","54eb198246606187d01f6a827ddb1b7e"],["/tags/index.html","add88a0ee47d0b6ca812351f803e3c6e"],["/tags/non-optional/index.html","00b3736027f254efbf242cd36370a83a"],["/tags/random/index.html","1b44e715875c4d34323c3b45f6dec66b"],["/tags/transition/index.html","55db83a184229637b936e4d9f955bc88"],["/tags/三方类库/index.html","2af8e18ed71be24d143068c2dfd6aa97"],["/tags/依赖注入设计模式/index.html","d6d95193061a75ebc67da1f9ce2b54cf"],["/tags/值类型和值语义/index.html","23c4fd261a9d0a6f5d976712909c4c89"],["/tags/内存管理/index.html","1192c3efed6441d2c6482d74cb08b8c5"],["/tags/冒烟测试与回归测试/index.html","3cc1505dc5f2a8e06b7f3efbe1aaf89c"],["/tags/函数式编程/index.html","26af1becc99c58e09900676fd0637511"],["/tags/创建博客数据库/index.html","bcd8ad6726ab131ea218c807aadba569"],["/tags/初始化模式/index.html","5854a6f4b8f75c45be73a06bd0f8077a"],["/tags/单例模式/index.html","a97d35298dbbfa843ea10f48b058d125"],["/tags/原型设计模式/index.html","5cdf19b1a7e5c8015797b72fe6f6a0f7"],["/tags/命令设计模式/index.html","1c280d008fe3ceefdca398c2eba2e430"],["/tags/基本控制流/index.html","19cf3afda074bd5eeebe0aec03e04196"],["/tags/基础语法/index.html","3a074499fd53b5bc31281528464544a2"],["/tags/外观设计模式/index.html","b9eb677876d4664e52aceaffacc38639"],["/tags/委托设计模式/index.html","88cfce44c470124cb5541d0d12191b95"],["/tags/子类化样式/index.html","b4e515b3191667ef832980b213419543"],["/tags/对象池设计模式/index.html","e3935fa5e3076eee3e56e3b58f5bdae1"],["/tags/工厂方法设计模式/index.html","891f20ff3590506eb46d91b46631e187"],["/tags/工厂模式/index.html","4df402861425278b8c54c050a665b7c6"],["/tags/工厂设计模式/index.html","764c268c6638fb2b8a22cf7c16e9ef42"],["/tags/开发技巧/index.html","e3d2b49adb324aed3234abf1519384f6"],["/tags/开发记录/index.html","ab4d200e146419b6b6ec02fff8cdb445"],["/tags/懒加载模式/index.html","50c218aa5a6bf687192a1fb7d4b61bb6"],["/tags/抽象工厂设计模式/index.html","1d8d01e021557d7e864e210db1a2d235"],["/tags/数据库/index.html","782b0fff535e236e0cda184928db3523"],["/tags/构造函数/index.html","93e003cf8f8887ec0e56a50ba54c4b6d"],["/tags/架构设计/index.html","dca6b8b711717b5bba9595002a81954c"],["/tags/模式匹配/index.html","f6e973d94919059d6356af04397bb46e"],["/tags/环境搭建与验证/index.html","3f537b1250ff43821da6116966fffa69"],["/tags/生成器模式/index.html","5d63c4c83c15e622b5506c81bedfee2c"],["/tags/用户体验/index.html","c4f307ced466fbc452752b999f67b983"],["/tags/用户协议与隐私政策/index.html","c77d86048f4c19343d4926005a9183aa"],["/tags/类型与操作/index.html","162c8afcdf6605f085f0c5e8ba40d156"],["/tags/自动化布局/index.html","bca48a52d9709a602dbdf1811de7fd80"],["/tags/自定义UIView/index.html","1665f7c6a9840eacc287e70bfa83b5cb"],["/tags/自定义转场/index.html","f3fd66c2e055bf5b2aebf02b7aa46583"],["/tags/自适应布局/index.html","665afd616ab9fd5b344c5bf4f7e24fe4"],["/tags/表达式、变量和常量/index.html","122ca2fa4bb97ea477f06a223d283cb7"],["/tags/设计模式/index.html","0de84d23fb9dae71c4f22bb358a7e3ae"],["/tags/设计模式/page/2/index.html","4f6ad5702e60957b43948f660a2a936c"],["/tags/设计模式/page/3/index.html","8b061b6f1716235cbba6a5c9c0c4e0a3"],["/tags/访问控制和代码组织/index.html","6d6ac49b981df4f0941bfc224bef14b8"],["/tags/运算符，下标和键路径/index.html","1901b66eb84209a5ddea88f6663df244"],["/tags/迭代器设计模式/index.html","c0ff04a95224c6ba44fce1af2f88600d"],["/tags/适配器设计模式/index.html","5b55f93c940f6b44fc10c6d65c7e2692"],["/tags/错误处理/index.html","e48cbd7d697b934d9d8a0092e9bb5a50"],["/tags/静态工厂方法/index.html","4f71aebb641f244ba6f08e0b8133154b"],["/tags/面向协议编程-OOP/index.html","d8f83485e80a76ceab95c8798c3c357e"],["/tags/高级主题/index.html","ed679cec71b72f91ea069bf2a83966e8"],["/tags/高级协议和泛型/index.html","090b29804b42d216cdcfa12119969567"],["/tags/高级控制流/index.html","6e47dc79a0767974df79e8124ace341b"],["/xcode 常用的快捷键/index.html","0e51ac169e69e3a7bfb8d682e6395f31"],["/为iOS应用构建输入表单/index.html","bd56723f3039beb04b74f486964aa366"],["/产品开发的幕后花絮/index.html","9f62bcf2eb05211f9b859a914cbf5cdd"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","36fe7dc6ef11baf2883e1569f786982b"],["/冒烟测试与回归测试/index.html","e204b46d186e0c8f29633b1a30f1d199"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","984bea1d275ae98def1b3b7316e6e133"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","9c1389e8090535d5c92d443884f566fc"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","b8ad870dd7e635ed3b72783a2e4e2ba5"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","eb7c5403d1beb96cb8cb9ab156e0f77f"],["/在Swift中创建自定义集合/index.html","c85b665ed67934fde9acf8214f5538d5"],["/在Swift中处理非可选选项/index.html","291d9c8c60a5be504f3bc792e7316161"],["/在Swift中生成随机数/index.html","91a151652833817395216203a3b4a31c"],["/在Swift中重构单例模式用法/index.html","9ec92696691282ac69d5b641f0c131a8"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","260063ced730f03395459edefbda4424"],["/如何为VIPER编写服务？/index.html","424014d4d88fab0999b82e8d6e9b2b2b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","3ac32f16ef55c721e32b12ee03c78182"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","19832f045a6a0a33fb044c8dd686b5ac"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","2f2e64385668e855b82577c42cde7a95"],["/如何使用VIPER构建SwiftUI Apps？/index.html","d20badf911744956d55dfd35436a9434"],["/掌握VIPER架构/index.html","35efdccf2c6297d83bf8ea139c545918"],["/揭秘 WordPress Hook 系统/index.html","86efb4c309374097fcfdcae19be571c3"],["/比较工厂设计模式/index.html","6b01f019e75f5d63223ebd11cfc6b191"],["/深入了解Swift中的Grand Central Dispatch/index.html","b9971b8bdc511cac940ddc2ad2189387"],["/深入研究Swift框架/index.html","2af8841566e3bba0200008cc414168bc"],["/适用于iOS开发人员的VIPER最佳实践/index.html","86394193bc49e2bb71675aadf5173375"],["/选择Swift而不是Objective-C的5个理由/index.html","bdb84df5ae195a1bf42a2a461d9d0dd8"]];
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
