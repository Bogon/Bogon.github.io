/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","d0ff14ff592ce6b4e669a965de0085c0"],["/2020年iOS面试题总结(三)/index.html","6ddd62eb360c091119ef4e11e27e1b9d"],["/2020年iOS面试题总结(二)/index.html","087ea1372f3a6602149a50aed916c72e"],["/Advanced Swift系列(一): Swift 简介/index.html","3508c847a75b960a445456be79ebc33e"],["/Advanced Swift系列(七): Strings/index.html","6eaa646d61c9ae248ace580199115772"],["/Advanced Swift系列(三):  Optionals/index.html","b6c5a0b0bc861dfba48ee4c942677ab4"],["/Advanced Swift系列(九): Protocols/index.html","a97939eb59419f1d39b3017a12ebfe20"],["/Advanced Swift系列(二): Build-in Collections/index.html","baa6da113b4914c0f951ccc1dee91ae3"],["/Advanced Swift系列(五): Structs and Classes/index.html","0a71d45df73d29e1fd0ff0bc889a3372"],["/Advanced Swift系列(八): Generics/index.html","b2cb7d099a043501cbc426dc68c4547b"],["/Advanced Swift系列(六):  Enums/index.html","dbb49da0f747d9fd16f28835fe016e7e"],["/Advanced Swift系列(十): Collection Protocols/index.html","7a7f0e9e41f8617b730d3d5c56c1f8e7"],["/Advanced Swift系列(十一): Error Handling/index.html","cf71777b4f57088d261a2c89aeb76fb7"],["/Advanced Swift系列(十三): Interoperability/index.html","065029575feffacba43d3185e82defed"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","89c29e98dc86549cbe2ce2c55a71d3be"],["/Advanced Swift系列(四):  Functions/index.html","c78705e0829fc1170ac83eaf86029f29"],["/App Architecture系列(一):  简介/index.html","587f2e78bfe5309cb4bbd12f396e3a61"],["/CocoaPods 设定版本说明/index.html","1dd6cfd79e7f1afe5c0dae65969f20a1"],["/Functional Swift 初探/index.html","4ed4ddd5b243231fab6544aa543e3788"],["/Git 使用小技巧/index.html","6f3661a2810b772f57b3b387106f270d"],["/Go Protobuf 初探/index.html","e6cd26ee90927ca039d4303241bcd83a"],["/Go mysql Tips/index.html","eda3b7fe0f3ed754596a3cf4211f46f6"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","cdf009074117b4740516b5dfa2bf905c"],["/Go 入门篇：2、Go 实效编程/index.html","094021f6ffacee877ab01cfa86ff2b16"],["/Go 入门篇：3、Go 重要概念/index.html","762531a5fe978b0d57849eab6071ebbf"],["/Go 基本语法初探(一)/index.html","51cb415e6d2c53dbdba06656c0dd473f"],["/Linux VIM 命令及操作小结/index.html","d19caadfec82f69bc34dd6c82f0f12d3"],["/MySQL 基本操作/index.html","bac7cc012b7f74a846675b97103adfe9"],["/MySQL-列类型和数据完整性/index.html","35d08e5c04f7f758ce8ac0f4cbc66973"],["/MySQL-数据库设计和查询语句/index.html","daf7b6740609ef2d936ce5452f2fe488"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","3383e0f7f15c43552213015b79066fae"],["/NSCODER和SWIFT初始化/index.html","715ed1e96309114b21e0847df5ca3ab6"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","0f4c35e52bafac8b7da41f59ccd25447"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","f3c8509b5f1cc58c86703b505f8141c7"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","a8fa60ba06957a039836f6914a8ff439"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","f5907c281585830d642f4cb1d940abc4"],["/Sqlite 使用Tips/index.html","aae4d402bcdec3f3e7e63a57b72b1567"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","4bdaf19047fe57ad18b9cf4409635dbc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4c840b3e0d1781194ef468ae7baa936a"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","d0b8ea915b8603fb5e6d88a8e2919b70"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","417a449e1792933756add73deaece0f2"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","eaa5d3185e6c6d159baac8854696b506"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","4224e6995d23f63c98326f84994430be"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","976a4d52899274e8ffad9e004ea52e5c"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","8d9d758c9012a76a99c8d5dc60e49c3d"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","89cd30ac015445bd5b36483ce97af701"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b4f277b46ad92e272d055cb39b2b4c37"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","f5dd359639c2612d86b8947d7c4b293f"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","0ef050088a79a90f1ce61853d879c6ed"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","c0aa350de2edd6cd113ee051d912df81"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","a706c5658127e1db669ca8db3ef2c568"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","7a68c1db673f685bc8842d5154c345a1"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","849b2e25928d9c365d9c932a561ae491"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","b81ed4aa1c417042edf035d1e1f3b87a"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","4327f147f5ef7961a7f2c6c622f92b2d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","68b83ef5895534d15ee796cd725435ef"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","62c4c6d22cc9b74717210c38d181218c"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","d385a510f403924d4859fa411c142fc5"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","e25dd824abb9e8f37f72fddf1c7ef245"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","317546e2a8e056725f083421f0a79a3c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","e5b72ce6e5cd2b85d2674e24b151405a"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","80930984297222230dedac91f5aad201"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","1147bf3b514f6039d4826199efbfcd2f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","7a20d0be7d589578f47aa57f945e740c"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","ba2e75b026afb5f83d93c3d74c729ab8"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","fb6ed8a0c53a1a04906c9ebe91a5f808"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","b7325ae94010f9191f7a2545161e31cb"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","e946c8bde0446c850b1612a1c92c3c01"],["/Swift CompactMap vs flatMap：差异说明/index.html","9e37e6eca7861e3838caf4d714068a71"],["/Swift Grand Central Dispatch 深入实践/index.html","f1094869c59e70fac3262dd787fa3554"],["/Swift Lazy属性初始化/index.html","b185152310dbfe5e6859d9e78597c3b6"],["/Swift Promises 初体验/index.html","9dbb9584c21f3219188c5699b4491aca"],["/Swift Promises 探究/index.html","6ae82369602898250bdfc9cc5359e43c"],["/Swift UICollectionView使用指南/index.html","5763d2a287ddd71e46b691273d336d50"],["/Swift URLSession && Combine framework/index.html","3631205bd4557b247623add99f16764e"],["/Swift tips/index.html","81271c0adb2afa4d1659e503537bad83"],["/Swift 三方库：GRDB 使用指北/index.html","ca008ed0ca4a59407dd20ae82339094d"],["/Swift 唯一识别的视图/index.html","d461e6162d65febc2aa09635382c4ba9"],["/Swift 如何学习现代UIKit？/index.html","f576e4a5d54603465ac01e7de004ce4c"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","30002ab6993aeadf5ad64c780ae47e93"],["/Swift 用 compactMap 替换 flatMap/index.html","b3094f8f643b27b0e155d50b40ee233c"],["/Swift 选择和播放视频/index.html","462783e23b1bc5e2eebd9383e0cb1b3e"],["/SwiftUI 系列(一)：1、 简介/index.html","e13c8f24623041f32e55b2a4dbc314ef"],["/Swift中UIColor最佳实践/index.html","f31a63a41c93a9c7796739453903f277"],["/Swift中快速简单的工厂设计模式/index.html","4171904e1a8cede1c369fad569185831"],["/Swift中构造函数与静态工厂方法的比较/index.html","efa6f4edeff220404845f13d891f8f0d"],["/Swift中的UITableView教程/index.html","e198433fd3e29a6b8f3b6369e4f10939"],["/Swift中的懒加载模式/index.html","2c0d6ab2603692b111c8da67f33770e4"],["/Swift中的模块和挂钩/index.html","91b7c57dc1c16f5c231dd51e4d2b2b08"],["/Swift使用布局锚点添加约束/index.html","7ef9a12f2b64c5f781ffec5e02ae5ebe"],["/Swift依赖注入设计模式/index.html","603d4bff8e58edd687de1780375e5146"],["/Swift关于Dependency Injection (DI)/index.html","9359950571f6c1ff261680898c1e89aa"],["/Swift初始化模式/index.html","2c0233fb7a06b4535015ba9bee048426"],["/Swift单例模式/index.html","5a4a1bc39b7fb03d2c74a54f7c7443a9"],["/Swift原型设计模式/index.html","1b952062bc5644b07922c13a153ae4d7"],["/Swift命令设计模式/index.html","cc806ac5475d265a9a00cbe1becbaa85"],["/Swift外观设计模式/index.html","250cc92f1ee7c1d19dd277ab7de3f2db"],["/Swift委托设计模式/index.html","0ce0f608252ae5fe1767d82624715a30"],["/Swift对象池设计模式/index.html","eb8407374a41721c5d8836af6e9afd4e"],["/Swift工厂方法设计模式/index.html","42d632b206b3253a9e485ea40761d3c6"],["/Swift带闭包的懒惰初始化/index.html","6330bd74a733f64343f5eef54387186a"],["/Swift抽象工厂设计模式/index.html","e5e702e5a77ca457cc48804ed7e1a305"],["/Swift掌握iOS自动布局锚点/index.html","866acfdfc6040400c896f7fa311e9d79"],["/Swift支持旋转的自适应单元格/index.html","e48f94347a251ab3d5d9c7abf4351a37"],["/Swift枚举值/index.html","1241aa15eb205c0f2fc5dcb82f6e15a6"],["/Swift生成器模式/index.html","7da188970c044e8420a07834644cd802"],["/Swift结合Xib文件自定义UIView/index.html","6b570bb8586197c36df46ca0cef79ccd"],["/Swift编写的20个iOS库(一)/index.html","558ef1befb79005624c6e02bc7b78bd3"],["/Swift迭代器设计模式/index.html","7a668dcda04e54f0c36ac1f9fca49aa9"],["/Swift适配器设计模式/index.html","ac84d3bc81213bcc53722c6b5aad8294"],["/Swift静态工厂设计模式/index.html","4abc82ae408b403cc2b0d2e6ad402cb9"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f84c838ee527f2c1bc1704d6ade3e7da"],["/UICollectionView data source and delegates/index.html","162cd0e09e6d096cf4a4e46d839f274c"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","29cf6e72d9cd2be756e60cd82ab9041c"],["/UIKit初始化模式/index.html","32f9c2f742b876d2e2b14d4eadf1e498"],["/Ubuntu18.04替换国内源/index.html","51711343c14cf85e5229a1c3ed6e1cd4"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6db4e37b8f869d34ffc87f4943e5ad67"],["/Vapor系列 (一) :  Vapor 初探/index.html","24bcc03be5ea3d928728831254144c25"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9f323caeea6859c0d3b0a68fa836a852"],["/Vapor系列 (二) :  Hello Vapor！/index.html","1b7556e9a1979f1e85ab66d4611bd1ca"],["/Vapor系列 (五) :  使用session进行authentication/index.html","174df5d74d5f9908eeb8d67733d5110b"],["/Vapor系列 (四) :  创建博客数据库/index.html","fbc29d9fe3a42641b55e6e81a2caeb58"],["/Vapor系列(六): 徒手撸一个CMS/index.html","398e189afd269870df4fa86f7a3c66cd"],["/WKWebView与Native交互注意事项/index.html","8f0b1c7ebb955ef7f42fcd91888bccd6"],["/Xcode扩展/index.html","8949ce96ed824924813388987481adfc"],["/about/index.html","ac5406a61fe030c5a7910b568015e61d"],["/appleOS的Networking示例/index.html","6302281ab55b4d6dac0e2c6ee8c17e27"],["/archives/2020/03/index.html","814e0c49b96118edc2e8e099588b1cfe"],["/archives/2020/04/index.html","0b25314104f8249637526b519d49bdb1"],["/archives/2020/04/page/2/index.html","fc4b23a0839258bf13bcfe15d1653e6e"],["/archives/2020/04/page/3/index.html","552ab5782392f8ee82951754ef462b40"],["/archives/2020/04/page/4/index.html","9bbe608a49cbaf195478f195a58876cb"],["/archives/2020/04/page/5/index.html","a2c465b69e322289a12f5502fff2bd35"],["/archives/2020/04/page/6/index.html","d46087970261a54672363b8e8301354b"],["/archives/2020/04/page/7/index.html","8a17f846af3660e16eedcb34702a44e3"],["/archives/2020/04/page/8/index.html","f35c9a1a6236177c0e16bffdaa1da050"],["/archives/2020/05/index.html","cabaf281428ece0ff5c54dcfb0e56fd2"],["/archives/2020/05/page/2/index.html","3961b0d1017a0d9688f21895e231d75d"],["/archives/2020/05/page/3/index.html","f93c58b403ceb2ee841eabdb06d8acb4"],["/archives/2020/05/page/4/index.html","7d4ca6577e7b9ccaa372b11568b6e3e6"],["/archives/2020/05/page/5/index.html","1b57ddc9c852d3154622fc8a065a80cc"],["/archives/2020/06/index.html","1e95f3d8efda5effc7c937df22c59d17"],["/archives/2020/06/page/2/index.html","cba2bdcf34fccf3a6ea2ff69ea1be4b7"],["/archives/2020/08/index.html","1e8202829015810be452bba91e76c4b3"],["/archives/2020/09/index.html","58be37dd866354994513142a5fa71e99"],["/archives/2020/10/index.html","3d18e5a008b7be08074b1ca28afe8b73"],["/archives/2020/11/index.html","2adf32dc1af59ad5c951c0497e005235"],["/archives/2020/12/index.html","ebfe4849416891ebe802659bef7a6509"],["/archives/2020/index.html","b0ede414eb5266a54da23499f3e8311d"],["/archives/2020/page/10/index.html","d4f3ffcd573ebbfbdc5c30bbe62557db"],["/archives/2020/page/11/index.html","069a416f87a902d4bfcb977ef400eba4"],["/archives/2020/page/12/index.html","dd683b53b42ae55124bb76168ff8d73d"],["/archives/2020/page/13/index.html","7e0b8a31fb54d050482e69a66beacdef"],["/archives/2020/page/14/index.html","d1b6fae1c32d2f5c17975a55a5f965a7"],["/archives/2020/page/15/index.html","527f58cc29ca8292b393a4fed5b178ab"],["/archives/2020/page/2/index.html","596f067071278e82321956baef635c15"],["/archives/2020/page/3/index.html","333d79e21e8e569b326572dbaad358a3"],["/archives/2020/page/4/index.html","8d6ec68954a37c049b27230ab74147af"],["/archives/2020/page/5/index.html","180b181cbc7dbde977e860a40aa36071"],["/archives/2020/page/6/index.html","5d09b3b7555a17ad293e11dd48644c75"],["/archives/2020/page/7/index.html","1726b68b037af608e77068be5dcabdb2"],["/archives/2020/page/8/index.html","b6093735b9d8b3310bb864aaca01ff78"],["/archives/2020/page/9/index.html","3fb88151ec926551e5c48c60a62187b5"],["/archives/2021/03/index.html","3238de160d668fcd413fec88b0a4a905"],["/archives/2021/04/index.html","1f0124d00f4768374d975e4591c30620"],["/archives/2021/05/index.html","b059e86f9f9f02ee7bb0d61cffc3cd46"],["/archives/2021/06/index.html","a78a3030586d59e0083882c2b43d9f26"],["/archives/2021/07/index.html","1e1178b20377cc9122ed40701838df7e"],["/archives/2021/08/index.html","04a3912cb8bd8c6863e1568203fec79d"],["/archives/2021/09/index.html","8af5eec6e92b1824e104bc40df822ea1"],["/archives/2021/11/index.html","d59ac2906af78c16efe6f426ddf97952"],["/archives/2021/12/index.html","30cf9138b6b702694a93eb3da6961e64"],["/archives/2021/index.html","7f4fcfdff6786afddd6c82ce82c4fc96"],["/archives/2021/page/2/index.html","3352411f33508b5c7dca699f839f25d4"],["/archives/2021/page/3/index.html","9794ce04e1f1ab4f2384ea0671833770"],["/archives/index.html","adf66eb910ebc854484cac62d904eb50"],["/archives/page/10/index.html","3824b02f44b935fceaac6b1a770ad985"],["/archives/page/11/index.html","e22dc2725fe14b6a2d82a67983bbd340"],["/archives/page/12/index.html","c81d57a667fb014dd76bc3e4312fbcd2"],["/archives/page/13/index.html","a3bddf8e4d8a685f46ba1beb974e3724"],["/archives/page/14/index.html","aa9a2020051fc679123e07df98c85b4d"],["/archives/page/15/index.html","ca6b99573e0db2b555d1041101e6b098"],["/archives/page/16/index.html","f017b2e00fb40ff34932032713dd17c2"],["/archives/page/17/index.html","60e1de09875f8b895ab24ea0a040ffae"],["/archives/page/2/index.html","878ee9698649fae30a89e6360e1db222"],["/archives/page/3/index.html","45abbde8cfbed985b61945a14ec31a06"],["/archives/page/4/index.html","e062c049e46e3f8af70cf96e71e3a7b3"],["/archives/page/5/index.html","74e4e016cc15d4f23f71b99e13937d7e"],["/archives/page/6/index.html","8aedad3ccd95e4ff89f306331ebddd71"],["/archives/page/7/index.html","f0d090ee066c868418e31c3a380bcf3e"],["/archives/page/8/index.html","8ebf02e2719fdf93e2f233d0c7c474c3"],["/archives/page/9/index.html","eb112adba486f790220e1935a43ed594"],["/bugly 上传dYSM文件小记/index.html","8123de9e0f8c362953cbd248307aa6a4"],["/categories/Advanced-Swift/index.html","736af6f5e9076389216ffcceb3fd27ad"],["/categories/Advanced-Swift/page/2/index.html","36521da21f43079d4599f13fd2d3a13f"],["/categories/App-Architecture/index.html","adfd64f99d11cf6609d0ef0f77a8f99c"],["/categories/Array/index.html","f5def3604d3e5ebf70cfb5888a751a7e"],["/categories/CocoaPods/index.html","d3de25ef86113fc87de93cafb4962b8c"],["/categories/Codable-protocol/index.html","c7684de69b500892645a4e554c5498d9"],["/categories/Combine-framework/index.html","17eadfe3998ddda4d7f3121c54cc2f06"],["/categories/Combine/index.html","e3660ecf1a9e2211da119c8be42dbdfc"],["/categories/GO/index.html","52105dcdbe518f701eef702609bc4d9e"],["/categories/GRDB/index.html","7d29a4ce301195a8d62de9b95ac286bb"],["/categories/Go-入门篇/index.html","dbac4a69a2dba5a8e1651e4512b4ab18"],["/categories/Grand-Central-Dispatch/index.html","98f4cd048c104318d7e728ad1a4a8d7f"],["/categories/Homebrew/index.html","4f696539e417f3e29610d139ab53db62"],["/categories/Linux/index.html","2ebff012fee50c7438af1ca12c930d1b"],["/categories/MySQL/index.html","5d28ab7443a4a5a9855bc1fdf65257cc"],["/categories/Promises/index.html","167ba331296ceb92368e2836dd6bc81a"],["/categories/Protobuf/index.html","8549b1e4cdb49b2e6d3d202ca167653b"],["/categories/Result-Type/index.html","b0653b96fc57dc1ed385353af6d34bc8"],["/categories/RxSwift/index.html","43bedf5ef61701d98ce9a93b2a78dbf1"],["/categories/Server/index.html","f7e6960a8407762579de0fb3c2cc2a42"],["/categories/Sqlite/index.html","82ed00b8827c71ec06ab3fa9b82dd08c"],["/categories/Swift-Apprentice/index.html","e0b0aa7354e43c22441efd7ec1724353"],["/categories/Swift-Apprentice/page/2/index.html","20e36f9eea05fac810eae8fd2361cad0"],["/categories/Swift-Apprentice/page/3/index.html","780b1da1a53dd85e27bac5e0062bce19"],["/categories/Swift-源码阅读/index.html","2f0d31321994ca497587d0119d0ebcad"],["/categories/Swift/index.html","ea89584f6b56c3a4050e8cbc09f6420a"],["/categories/Swift/page/10/index.html","b9ede4a2e8f21d5d76cd284eca10597d"],["/categories/Swift/page/11/index.html","2a395558a9a471b386065ff75cf0e6c4"],["/categories/Swift/page/12/index.html","bb6fff30d29d217ff2e07dec6fd1df87"],["/categories/Swift/page/13/index.html","961b6281eb6aa49c2e012734087eb3a7"],["/categories/Swift/page/14/index.html","b4a8e254dda7ed2631dffc5f89b96234"],["/categories/Swift/page/2/index.html","0372775cb0608a5ab34bec7a96687445"],["/categories/Swift/page/3/index.html","1ca569e6492c72c84db10eff66624c3c"],["/categories/Swift/page/4/index.html","3d0ac69bf11f03f9f87e743eaf93ed6c"],["/categories/Swift/page/5/index.html","33343faeb57b34f5bcee60c4b7d7ae54"],["/categories/Swift/page/6/index.html","1add776a3428a22e62cad04f5e958cda"],["/categories/Swift/page/7/index.html","08ff76dd2ccee4a30d02b54ff43e2082"],["/categories/Swift/page/8/index.html","8fefa191138e6083880007bf2171086e"],["/categories/Swift/page/9/index.html","89a2b31fc992050d46cacd20ebae8557"],["/categories/Swift5-2/index.html","b469e41ea31add6e409cfa8c2cec1456"],["/categories/SwiftLint/index.html","869afee4c3c826ade613b5664d07ba48"],["/categories/SwiftUI/index.html","dcaa66f1d6f8213351f1178c0d489ff9"],["/categories/UICollectionView/index.html","f0a924cf1e8d69fa113131858f2707e0"],["/categories/UIImagePickerController/index.html","5665824222b2dcb7ba569c24559ade66"],["/categories/UIKit/index.html","4a1f57664e49c8f2566f10e7f0ebcb20"],["/categories/UIKit/page/2/index.html","d683801b70ddef6ce1f03b56301b86f0"],["/categories/UIKit/page/3/index.html","138eb7e57f6030d182682ee511103ddb"],["/categories/UIKit/page/4/index.html","19c3e01b046cdd558694aecec68516fd"],["/categories/UIKit/page/5/index.html","9b9354fdd8088846d630106e77a68305"],["/categories/UITableView/index.html","6cea4c0748cd59411d5b4f00137cd0cb"],["/categories/Ubuntu18-04/index.html","7428561269fcec767918801604e53c7b"],["/categories/Ubuntu软件源/index.html","66fc7bae2d90843178f12e06741d3095"],["/categories/Uniquely-identifying-views/index.html","1d1a5bf8334480127b5cb35deefc7a63"],["/categories/VIPER/index.html","f6c5e354921453d4f9a0c83c67d0ab4b"],["/categories/Vapor-4-0/index.html","25bee98fe392f9588337e7c973f6a982"],["/categories/Vapor4-0/index.html","012a68f9b0ac2ea7377e9b3e223f27ae"],["/categories/Vim/index.html","540cf49ec731ce861cd01e6cc469a86a"],["/categories/WKWebView/index.html","6e2cd6686de8a242165c50652bde2006"],["/categories/Xcode/index.html","585d81046cee6066653997562c9e493c"],["/categories/appleOS-Networking/index.html","bf1f17603f6688ea4e9d1cf60ab89de5"],["/categories/bugly/index.html","5c658058edff018bf5dd25863af0950f"],["/categories/enum/index.html","903c938d9c9f45d19ec96f7e6e5ddada"],["/categories/git/index.html","96a7f29c4ffb0bddecb8898bf45e6788"],["/categories/hexo/index.html","cb532e285522903c092b24c94abbb52f"],["/categories/iCloud/index.html","6a96bc0dc3a6ab7e5fe074287bdc293d"],["/categories/iOS/index.html","0315d8534df0a8231d2938926b48ba03"],["/categories/iOS/page/10/index.html","892e2eb6305cb3cbd082f3f1798425db"],["/categories/iOS/page/11/index.html","162191f55b8b384e2be9593c4cd5fc7a"],["/categories/iOS/page/12/index.html","ea4f6da83b558761717f30f2e1214fe7"],["/categories/iOS/page/13/index.html","0d8a51e6e5574a83d18a06cb0e256eea"],["/categories/iOS/page/14/index.html","7b0846f7cf121d8d1648aa7102dee7c1"],["/categories/iOS/page/2/index.html","ce6e69fb0ac1ace870de2caedd9681c6"],["/categories/iOS/page/3/index.html","b7a03d9c51bfa5bea3f7b45f09d4dcd4"],["/categories/iOS/page/4/index.html","b53876fc9528b4e85388e54dbfc2583e"],["/categories/iOS/page/5/index.html","6833c526576a74befe82ee368c9166bc"],["/categories/iOS/page/6/index.html","e3b11c40b5c33f920e42f8e8da247ace"],["/categories/iOS/page/7/index.html","135e8b0e78d40693da56d6ce19b4b3e0"],["/categories/iOS/page/8/index.html","2d30a5a5b3021734d849acfb8a9c178a"],["/categories/iOS/page/9/index.html","43ea6c614905115e93af3637d34675e9"],["/categories/iOS面试题/index.html","f714ee5e3b6f460b6b43528d16e1a638"],["/categories/index.html","d3bf4c3c20ffcca481d4b6ead6379e3d"],["/categories/random/index.html","9329b58e60d77ff826c69844aa347880"],["/categories/三方类库/index.html","2c539cdedec8ccda424ae871dbe3054c"],["/categories/函数式编程/index.html","e3e641ad7d595fb011a8b84fd5481c82"],["/categories/子类化样式/index.html","761d3f88c957c1dc99aa02534e9bfb2d"],["/categories/开发技巧/index.html","88e717cfd0db7dc4c1d7888811063bbb"],["/categories/开发记录/index.html","d866e7c89f163d9c06a34a4a6ffc24f4"],["/categories/数据库/index.html","8894a1982d076a7a5262737bb7b003a8"],["/categories/架构设计/index.html","2928b055982d1c174b8b463a207effde"],["/categories/测试/index.html","5178eb689e1ff76d785badaeac37c368"],["/categories/用户体验/index.html","2bfb53692201458951db6b85699dc1d1"],["/categories/用户协议与隐私政策/index.html","601d82c8557ca33d976a9347b2ff5c00"],["/categories/设计模式/index.html","ca5cfa364541f27edcccd8f464529b98"],["/categories/设计模式/page/2/index.html","b65d925728168517f105be68e7ff2c4e"],["/categories/设计模式/page/3/index.html","fc782a191fe374451e61b3667fb4709b"],["/css/main.css","ca7967e7f4782505973a060e7f440f03"],["/hexo部署失败/index.html","fd7874dc90de4bdaa082a93ea5700e37"],["/iOS 15 适配/index.html","f4655f0dba66d6f39ed5bfa082d083de"],["/iOS VIPER架构深入实践/index.html","710bd4873ac54c88f39d8c70240095b1"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","b1cef36d712c60eda2439001c3eb9831"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","8d0bbcd74bd1bbb3f08a8e2da5becf57"],["/iOS 自定义视图，输入表单和错误提示/index.html","615334a248332d4d4c3f5a6392b73860"],["/iOS如何使用iCloud文档？/index.html","8a6992106baa86fd7691d3ca15a7b353"],["/iOS子类化样式/index.html","ba748371a84689a7764c9d3baa811044"],["/iOS开发记录<一>/index.html","fe326fcf506732d6d666fa932a73ac3e"],["/iOS自动化布局编程/index.html","0afc8790aae0c85245acc7063aa04d82"],["/iOS自定义转场(By Swift)/index.html","1830cc349e8af1a6f2486b695fd9361e"],["/iOS项目架构：使用VIPER/index.html","0fe3d0c7e6802267bfb031098472b71f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","3a77a4ae2311d0623096a24ca75d6a32"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","37c7b358fe76cbad04f3bec5cadf8bc3"],["/page/10/index.html","da210d9ea79c32b573ef9707b73d08df"],["/page/11/index.html","ecbd5226f892c9d4f37a4a691504f0fd"],["/page/12/index.html","bc9f6bd396cffc8a88be937ac2a60c4e"],["/page/13/index.html","ae3849166c35f5b761278ff4d1aedcea"],["/page/14/index.html","763c143376bbb3ca251d0474eca1051b"],["/page/15/index.html","f0ae6de4af9c442c409cfbada97fca2d"],["/page/16/index.html","0cee4bdf9cd37419067318f3df8b6640"],["/page/17/index.html","5020cf8b05874e468029091dde190f32"],["/page/2/index.html","b5459cafb29528339de4d6bed052bddc"],["/page/3/index.html","fb550c57a11a9c20d4a17e113b3d59ca"],["/page/4/index.html","4e3f161cfc9bb91d313a3b521f72cdc3"],["/page/5/index.html","5024124c750fc41118e4f4f3f8dc9500"],["/page/6/index.html","8d943e8f76519f576f07e018372e3fc8"],["/page/7/index.html","6b397455955f0570e8da4f6eab3011cf"],["/page/8/index.html","6e6e71de7c8ca3150110e83d90d333cd"],["/page/9/index.html","2a132ed7c9aaafb496c4366f6d978a66"],["/schedule/index.html","fae81230fec4fd867315e38b348ee8ae"],["/storyAppPrivacy/index.html","2bc818ca5ca3125409ea351622b3a508"],["/sw-register.js","96477be4ee47a297b0efb0c410528798"],["/tags/Advanced-Classes/index.html","19c872c398451d80f927d5d0a4491dd6"],["/tags/Advanced-Swift/index.html","22729e74c8f626b6fa49dde69800837a"],["/tags/Advanced-Swift/page/2/index.html","79dfa45f55d7f625e6da4eaf8650eaee"],["/tags/App-Architecture/index.html","862116ff753d9d83387420e777aad560"],["/tags/Array/index.html","23368445fcf3a45ec016f3d3a2cc7727"],["/tags/Arrays-Dictionaries-Sets/index.html","0c1ddfe94738881c78ba272f0203caf6"],["/tags/Authentication/index.html","a9e503140796bd840e6d017d4502bd8f"],["/tags/Build-in-Collections/index.html","6669daa11ce50c793264e447cef97411"],["/tags/Building-Your-Own-Types/index.html","590457d80ecedc4638ef61fc304f4d20"],["/tags/CMS/index.html","ad7fe9a0e53243599f2b56c40c6b8124"],["/tags/Classes/index.html","5eb568e026134835d329d692d22b6ceb"],["/tags/CocoaPods/index.html","fb7ebbfd07ef08fc50f5316280207a87"],["/tags/Codable-protocol/index.html","f2740b8ff16d6605199c86a48fc8e178"],["/tags/Collection-Iteration-with-Closures/index.html","4bfca675e37d5b691c16670acfe976d9"],["/tags/Collection-Protocols/index.html","36a0bbcb75660a591c5769bad6c45b63"],["/tags/Collection-Types/index.html","4aec0f2705222850ce1421e801cb8edd"],["/tags/Collection/index.html","bcb65d09d9ed6fecb3d47442a0480e48"],["/tags/Collections/index.html","2dfbf7ac93dd33c0be2f2b59228a2f12"],["/tags/Combine-framework/index.html","216342c2fc7c74f93d89f8b36b2bed72"],["/tags/Combine/index.html","daedb8b3309ef45f92447a6a4199c351"],["/tags/Dependency-Injection/index.html","b4f9b526fb941b5256fe4301b93938cf"],["/tags/Encoding-Decoding-Types/index.html","a4b516a02e231b2d7fae80555f061ecc"],["/tags/Encoding-and-Decoding/index.html","0d0366cdc5dea7b82812b2e22b0ab226"],["/tags/Enumerations/index.html","838be952235d317a49b49e1e12d05b6d"],["/tags/Enums/index.html","5db35ce8d632dead2c6b11b608ec0a46"],["/tags/Error-Handling/index.html","9811d6b7a0b73176a65ae83307b53170"],["/tags/Functions/index.html","af33ec78e8fd466b392ecd43c7d99357"],["/tags/GO/index.html","11ee5bd596e3b18c1a9836f5f6be838f"],["/tags/GRDB/index.html","20c145a968cea9a5d176147d285d7677"],["/tags/Generics/index.html","2d1008e867a81b2f452c743c92ed298d"],["/tags/Grand-Central-Dispatch/index.html","a205508dce700293d21fbc53da063a7b"],["/tags/Hello-Vapor/index.html","08dc06d491384cde9e6c85c7ec363b3c"],["/tags/Homebrew/index.html","e3030fed26fb6e367f6000bb82bbef7d"],["/tags/Interoperability/index.html","b2933f9f51008046175a8683aed315da"],["/tags/Introduction/index.html","737cf22db2e12b429653f2b580e08efe"],["/tags/Leaf/index.html","704689cde3e311fe5979fe0307fa6a25"],["/tags/Linux/index.html","3dcbbdc254581bc4395c192152802ada"],["/tags/Methods/index.html","23864c033ea69ddc0f8fdec3f70c8cd5"],["/tags/Modules-And-Hooks/index.html","be193b28682f5d449c005c5fff6420ac"],["/tags/MySQL/index.html","18af36d9fac6537c62c360cd59a91181"],["/tags/Optionals/index.html","bbefbf50ecccfaf9a9316ffb9eaf8491"],["/tags/Promises/index.html","bd6184e899d5566e019ff2699261d77e"],["/tags/Properties/index.html","fa896ee86b68265725503f97ad9f9176"],["/tags/Protobuf/index.html","73247da061565d34632230a36c2c8f27"],["/tags/Protocols/index.html","20060a1897c08f7fe49d3397b0902ef4"],["/tags/Result-Type/index.html","22196e50612839e038211dab6d49d948"],["/tags/RxSwift/index.html","c75798ef76df68b557a2c396d8d7b9a3"],["/tags/Server/index.html","070147ed7dca6a70e7e71bda95d90e50"],["/tags/Session/index.html","ea980cd30606b6b0db50a7f7b980312f"],["/tags/Sqlite/index.html","c226f1308fd8a8ae86f62b1d3379d442"],["/tags/Strings/index.html","c20d7e70110a16a1bdf6dcdf0d2708de"],["/tags/Structs-and-Classes/index.html","cd4b59aaba39aeebd88f05620d6bcaa5"],["/tags/Structures/index.html","3585b3f0c5c4371aad0455bfe25638d6"],["/tags/Swift-5-0/index.html","5f38d847aa70a949564dfd1ced868a91"],["/tags/Swift-5-0/page/2/index.html","838ff003abb116e40d54d4c454d18fb7"],["/tags/Swift-5-0/page/3/index.html","ba136ee91660fb6f337bd7b65318ad24"],["/tags/Swift-5-0/page/4/index.html","5335fa13b9a709d70ba6b6e3ece14941"],["/tags/Swift-5-0/page/5/index.html","b9dad12921fde0e21b2c249fae11767b"],["/tags/Swift-Apprentice/index.html","fa7846bcd1465ed1d337311335e97531"],["/tags/Swift-Apprentice/page/2/index.html","26532c71962a099cf8fcdca05094b9ad"],["/tags/Swift-Apprentice/page/3/index.html","9fe00ae130fb3f7a14da23cfb00c1745"],["/tags/Swift-Package-Manager/index.html","ffd7f9e46f386def2d0fe4615aa88f07"],["/tags/Swift-源码阅读/index.html","2ed9791af8d662bf4f868db281d0afad"],["/tags/Swift/index.html","b4caed1d33b4853b0db886171c83b48c"],["/tags/Swift/page/10/index.html","e5bb0266ef7349d35bb7ce71fa9b083f"],["/tags/Swift/page/11/index.html","990b87590ced0cce52ec83f750924df4"],["/tags/Swift/page/12/index.html","827a0bf4e6ff6e5baf3646c5240d3842"],["/tags/Swift/page/13/index.html","5c358ca31c5ad7e191ae7cca03b14745"],["/tags/Swift/page/14/index.html","6d038a6fd377f1245917dca8a7cc6682"],["/tags/Swift/page/2/index.html","6cf0f66b3396d271bc372ceb911570d3"],["/tags/Swift/page/3/index.html","af36809eb73e1a173b3a79999b872645"],["/tags/Swift/page/4/index.html","b2d1271aa8f658f7b72719992849003a"],["/tags/Swift/page/5/index.html","5f5007976b47412c580a0e84db167221"],["/tags/Swift/page/6/index.html","27a5692f5d196b4d15a56779d61b94c2"],["/tags/Swift/page/7/index.html","2e695dbc10a8de9c388b1099859b7c76"],["/tags/Swift/page/8/index.html","c6da0c73db234d47789fc525e436cd4d"],["/tags/Swift/page/9/index.html","23f83fbe194e2c9f089b9712cae68053"],["/tags/SwiftLint/index.html","7466e330c64fe0fc004737986b242782"],["/tags/SwiftUI/index.html","dd22639a044fa6c7856f09f71a1b50ec"],["/tags/UICollectionView/index.html","dc85b9efecc8c1663f7e54036ff77f65"],["/tags/UIColor/index.html","71284320dd0349bad8a176a8551fd9bf"],["/tags/UIImagePickerController/index.html","0986e3373e223cdd85245b367b09cbb1"],["/tags/UIKit/index.html","9851a0fc2e501c8d139b391564f75952"],["/tags/UIKit/page/2/index.html","45bfb9418d2babfe0cd5a2253bd68857"],["/tags/UIKit/page/3/index.html","8175460eb46243419af90cb4ecee9e77"],["/tags/UIKit/page/4/index.html","c66521040a9bfbe9d09cb64303132f7c"],["/tags/UIKit/page/5/index.html","c32187a4b3d197ca043634c336b4d358"],["/tags/UITableView/index.html","2908680b84062f2422643958c60b600d"],["/tags/Ubuntu/index.html","c48ae50dfff6531b845afe7dd6d1a455"],["/tags/Uniquely-identifying-views/index.html","c0d0909f78042bdd0d0bdffa44883c3d"],["/tags/VIPER/index.html","8f106df4df96678ffdb9a7a9bc7b0bba"],["/tags/VMware/index.html","0f78cb67b2b4b4568314c1e8b705b332"],["/tags/Vapor-4-0/index.html","1c1fa102960b6b8962f8f5210e20fd1f"],["/tags/Vapor-初探/index.html","4be658f842c3ab44c3b9d80028a5e587"],["/tags/Vim/index.html","852c1a51adc75d6cccb978e230ae7eec"],["/tags/WKWebView/index.html","75167cabac45cf6aa5ad5a12debc67e1"],["/tags/Xcode/index.html","d29452d5a88d7b3b8a6ee739893c646e"],["/tags/appleOS-Networking/index.html","d0dd98d0cd10fb39cbc8cd3bcb68006a"],["/tags/bugly/index.html","873fa1ffabdac37c3afcb3aaf01aae6b"],["/tags/enum/index.html","5f6bfc75e1439083ce310ddd88bdcc79"],["/tags/git/index.html","fe1959a563ea503e40067e00541c24bd"],["/tags/hexo/index.html","f8b49100f0ce8358ee2aab1d8dc0032b"],["/tags/iCloud/index.html","772f7ecb64df666d09a0d23584420a8f"],["/tags/iOS/index.html","ef60dc2258a1bc22f1ba1f2d346db327"],["/tags/iOS/page/10/index.html","d1386575c3a56a90198723bed5685a20"],["/tags/iOS/page/11/index.html","6acc3e2a87a325dafcad59b4c756cc0f"],["/tags/iOS/page/12/index.html","6e9b979bc3b48573049c3b07db370918"],["/tags/iOS/page/13/index.html","64346c5dfc021565d6b8d4f220d24f99"],["/tags/iOS/page/14/index.html","bcb846be35a9fc8c41146b63d778ca86"],["/tags/iOS/page/2/index.html","1814b406246900053b456f2cf77695bc"],["/tags/iOS/page/3/index.html","973e8a467d5785d0a2f751f710a3bff7"],["/tags/iOS/page/4/index.html","84276335c6f86a654054c34149da4f41"],["/tags/iOS/page/5/index.html","5e23059e514597902e2d0a531cad7119"],["/tags/iOS/page/6/index.html","e62e9a762b8ff2b7bc12b4a7d5a8667c"],["/tags/iOS/page/7/index.html","e6ce445117b69c2dace43cbca861bd77"],["/tags/iOS/page/8/index.html","352579f2abb087aa05586403edead1ba"],["/tags/iOS/page/9/index.html","d3438cf9f4561c1cd9a7198d6fb21778"],["/tags/iOS面试题/index.html","84bb33cb41541924f0555ce509aa9873"],["/tags/index.html","18c6e5cc6b0606c838c1eac5456169d0"],["/tags/non-optional/index.html","b5e7a3a860d0b52a48d28fa9bb6bf52a"],["/tags/random/index.html","39be2605e3e3b84766edb6a2460528ee"],["/tags/transition/index.html","41796f3d199a7f521cd7ae23ed99fafe"],["/tags/三方类库/index.html","ff4ed2b79f15e78943145131528736a7"],["/tags/依赖注入设计模式/index.html","2e4cb6f262e07d0dbdc327903fc6ad72"],["/tags/值类型和值语义/index.html","750a7331e27df947ee75097d32c1f82d"],["/tags/内存管理/index.html","d246d2ebfd2c081cf38afe97f58f2e05"],["/tags/冒烟测试与回归测试/index.html","7a8850bf32fe06681f3eca134eaca1d9"],["/tags/函数式编程/index.html","738fb9fd88070caec4e653f279f14aaa"],["/tags/创建博客数据库/index.html","6496bc3ffc4393668b3df9b0ff7df78d"],["/tags/初始化模式/index.html","58c46989ce3e044a25d0f86e08b66c1b"],["/tags/单例模式/index.html","ae2b79c676e912245fd4bb3736bdd140"],["/tags/原型设计模式/index.html","a9dc4f2644c3ccb17a981bc4388f47c3"],["/tags/命令设计模式/index.html","e761bd63441eed48fa7e344310bef583"],["/tags/基本控制流/index.html","64ae16dcf2efbf2bce1f553f67f3d6ca"],["/tags/基础语法/index.html","9f28e4c753df7962d6f4c9f9b259e1ed"],["/tags/外观设计模式/index.html","7f4965cbae4c34adc1231ced718b96f8"],["/tags/委托设计模式/index.html","4b6b76b843a7fe5402ed0f726450b1dc"],["/tags/子类化样式/index.html","e42bb6acc62beea4e034a96c3863dc30"],["/tags/对象池设计模式/index.html","b3982627eee6bea70c06827750dfdb6e"],["/tags/工厂方法设计模式/index.html","8f00494df24a5bc2f0905f62d9d3b29b"],["/tags/工厂模式/index.html","6ec382831eb976f046dd08fa3a4fbd84"],["/tags/工厂设计模式/index.html","1a8cee0d5f52227f6ec89a234fcfef99"],["/tags/开发技巧/index.html","81e7f2df26ac41c56ae42b09a2fcfe93"],["/tags/开发记录/index.html","ccca33d9ab00c9008c24c73c7eb3f186"],["/tags/懒加载模式/index.html","b24ef7728a77de85de16c4a97c628828"],["/tags/抽象工厂设计模式/index.html","849b37b07db2adbb772c1e5927ed3f64"],["/tags/数据库/index.html","302f6c312a1a6b2b95d574ac48dd4f42"],["/tags/构造函数/index.html","7ecd09c783699933d7d685210137113f"],["/tags/架构设计/index.html","b7596a83ab87b7a18846d7ae9fc1e587"],["/tags/模式匹配/index.html","f9eefbaf48cb96307c0a9dc55d226975"],["/tags/环境搭建与验证/index.html","297c1fd00d4cb65d58ceddea041dfa3c"],["/tags/生成器模式/index.html","b33af81ed909f77c3726d889661cadec"],["/tags/用户体验/index.html","857a923967a0879dd5211c1496a69e0b"],["/tags/用户协议与隐私政策/index.html","25e1a821539080741c1007f6a2a27d11"],["/tags/类型与操作/index.html","d23055d6bd486ae0b5d7acdab3b79f96"],["/tags/自动化布局/index.html","b663790a8fce6ca95b0f2b3ffb8727dd"],["/tags/自定义UIView/index.html","db61520a17bcd894aca7927f25a17dd2"],["/tags/自定义转场/index.html","ee41caa82d7133bb856c0e30eada8f5c"],["/tags/自适应布局/index.html","dc8accec7be27a2d359c0ca69850ae66"],["/tags/表达式、变量和常量/index.html","c7da7e383f7050de587c64c0d9313ccd"],["/tags/设计模式/index.html","8c26e67b0ab1d7b05370e47873a96de7"],["/tags/设计模式/page/2/index.html","ef8bbdcd15be11d515930cf089a1e1b7"],["/tags/设计模式/page/3/index.html","b77be8ed4c366dd88b8d2bc9315b1fdf"],["/tags/访问控制和代码组织/index.html","086053f1c582eb991f1318153a8f908f"],["/tags/运算符，下标和键路径/index.html","a7c5b3f027292c47f1e270e6a83c60e8"],["/tags/迭代器设计模式/index.html","9d71c3336d6d98efc33b64fd576441f3"],["/tags/适配器设计模式/index.html","0a8840eeab4426ce2884126712b78e7c"],["/tags/错误处理/index.html","00151e311c5d492c68dce2ecb32e2e23"],["/tags/静态工厂方法/index.html","1814d64b345a5cbc9b68003a00529e9c"],["/tags/面向协议编程-OOP/index.html","b4c853535c056d15db632abdb7f1a727"],["/tags/高级主题/index.html","c91714fb38a9e3445a3864ba2961e6d1"],["/tags/高级协议和泛型/index.html","f9b428b5b560140c15024e7b2ececab8"],["/tags/高级控制流/index.html","cebd70d86f7ba5372b7ef2b62dccab73"],["/xcode 常用的快捷键/index.html","3019e0ef702ea4547b92981a9375eaeb"],["/为iOS应用构建输入表单/index.html","2bc38e4680c13c3fa6b2e7132e039c6f"],["/产品开发的幕后花絮/index.html","5648a0833f820bd7ae6ce4b1a6272973"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","39a0be51035646d67194f56c44b9456d"],["/冒烟测试与回归测试/index.html","a2b0cc3e1a72f1b1610cb1f3bad3ebea"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","7c3e0f435fb7438cf7d9af245fe321c7"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","812613b4fd73727cd9fcad8b7bc67f98"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","f620fb0914ab0c4270e68f8697d5cece"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","61bdef59ee1e49cc20bee17e02f9ae31"],["/在Swift中创建自定义集合/index.html","b4f393adfb3376b7fe43e6b6fab039bc"],["/在Swift中处理非可选选项/index.html","4d07c30548c84d4b30ad8ccc74384c1b"],["/在Swift中生成随机数/index.html","219949945bd30eea6f7ab3172c7fdcd1"],["/在Swift中重构单例模式用法/index.html","5fbe5fc61bb4217ed9033d18cf890692"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","53b40f7ac2fff942d62cffd645b505bf"],["/如何为VIPER编写服务？/index.html","6f0f0b84f00cee0354bc94d0092df95b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","233d5848529306d8a580e40a848b5486"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","d6bb232c1a501014a2bf8a5c61af4c17"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","068b90599cc1d74239809d0a1a02b601"],["/如何使用VIPER构建SwiftUI Apps？/index.html","86acdc7c54509953c5470daa72ef5d13"],["/掌握VIPER架构/index.html","0df268697564ed275e8209b5df0040cc"],["/揭秘 WordPress Hook 系统/index.html","c91ed94f8c99d59d5ec3492429a84307"],["/比较工厂设计模式/index.html","c3bb7d651b16a39bbe70ce48698e9305"],["/深入了解Swift中的Grand Central Dispatch/index.html","b349c7cad1dd0e342f31c443066d6601"],["/深入研究Swift框架/index.html","a446ed7ec65b21fdaa16266a78df2a79"],["/适用于iOS开发人员的VIPER最佳实践/index.html","2d28b893f4255f019d279c3e0e2e6749"],["/选择Swift而不是Objective-C的5个理由/index.html","c0a1badbc9b003082f0485a2dc472c21"]];
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
