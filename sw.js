/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","1430588da6102d5fcff2c6a7b8a1608f"],["/2020年iOS面试题总结(三)/index.html","df2f6254595464ec1861662c9eb27d36"],["/2020年iOS面试题总结(二)/index.html","ee97afaf91de94283c2ecae11e7b6c84"],["/Advanced Swift系列(一): Swift 简介/index.html","7567877a4a23316a9a156f683ecf6db1"],["/Advanced Swift系列(七): Strings/index.html","f7d39b4df98a277041ca78b1c1846428"],["/Advanced Swift系列(三):  Optionals/index.html","3135710bbee32e01919d4f788855740f"],["/Advanced Swift系列(九): Protocols/index.html","b9583f79fda1bef86f552f6faf8a4411"],["/Advanced Swift系列(二): Build-in Collections/index.html","932b73acbec3c7682da5c386e5833874"],["/Advanced Swift系列(五): Structs and Classes/index.html","805dde09c503eafb061873a6ecd27c05"],["/Advanced Swift系列(八): Generics/index.html","4bf83d45c17559060528d4a81f82891b"],["/Advanced Swift系列(六):  Enums/index.html","32ad90e31fac38d04ea9c57f2150fa3f"],["/Advanced Swift系列(十): Collection Protocols/index.html","a70cc2e7398f3ed85b32094ee35a4d09"],["/Advanced Swift系列(十一): Error Handling/index.html","8311f77ffcead5941744540625bf0d8a"],["/Advanced Swift系列(十三): Interoperability/index.html","d7ec990745b2da48d02e120d20d6234a"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","b94e9a4bb4101ad31bfbd4508c4ea6bb"],["/Advanced Swift系列(四):  Functions/index.html","0506d7bb6af880adfc27128c1c64de0f"],["/App Architecture系列(一):  简介/index.html","93e0658383c1706c0bdd0be6e1aff4b8"],["/CocoaPods 设定版本说明/index.html","ce67316ad50e6ecaba6542104d198fff"],["/Functional Swift 初探/index.html","3e3c591d1ed063cd22e8cbb69e17d54f"],["/Git 使用小技巧/index.html","15124a93a0c08cc7c4a34775602f3bc1"],["/Go Protobuf 初探/index.html","dd2deb8dd1710ac6ea4fa6c3d62d86ed"],["/Go mysql Tips/index.html","fd05780a821e4eb20ce6161ea5d3a15f"],["/Go 入门篇：1、Go 环境搭建与验证/index.html","a85f7f8d0151faf2d12111c1d77e103e"],["/Go 入门篇：2、Go 实效编程/index.html","6a4f04f5c504ba52df0529d5b6251581"],["/Go 入门篇：3、Go 重要概念/index.html","f5ae8e7ed5dcc71e2cd58f11f8888c42"],["/Go 基本语法初探(一)/index.html","f813a0f2539c9af5b20b93bcad48ec2d"],["/Linux VIM 命令及操作小结/index.html","ca05db27cc27e3e8f1ea5af0a77fe50b"],["/MySQL 基本操作/index.html","793744aeb079357097ad8a96da9f0330"],["/MySQL-列类型和数据完整性/index.html","64c3d7733c1c2deb57f170da8c1c4394"],["/MySQL-数据库设计和查询语句/index.html","350885767a15e7f852fb09dbc021ea16"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","c4c850d735db3481927bb8097afe49f8"],["/NSCODER和SWIFT初始化/index.html","f1ac835b01e2c5c3089f6c8cce8c5153"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","fabcc04006b1d508f0c19c54724dc8bf"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","94e6e2d2e973fa7bee6e5db31e28b686"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","036e2fc500a1b8d8cf0cf36cd35233e7"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","00d30a087cd33f77adcd5d0dd80c83e7"],["/Sqlite 使用Tips/index.html","9516cf38a6c7989ff10ddf0ddc38c572"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","8858f7120845cc6887e1d8d8359f94d3"],["/Swift 5使用UIImagePickerController拾取图像/index.html","6b8dabe89495f2fcc6125d07b7e4878c"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","185a26b1b45d56b86033b795c3707621"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","0f79e643380b41f228a29a210477495e"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","09e3d76c7e0f92b8f26c204af487c29f"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","6e524815008edf3b915d5cf6614c9277"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","53f822aed50022dc3870b7549797f1e2"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","1aeae92877dcbd7cc1a600a58fac9998"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","d0b6b2199ff469d2e2b5cb8a15602f40"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","7f74a1feaa2d18e300b4b788dce4dc8f"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","7f36c24849dbef4c5d1e42e11c8f7bb5"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","e8886f7a2c72c2845eed5039dc38f402"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","c4d6d3f121c4398fc6c0cdb9967e0941"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","2df4359fff44e880d6ef577ae5ec9192"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","d1900869bf0ff6650c2831cf0abe7c2d"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","f595f15cf77c765979ff5ef5a0d85ed8"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","ba978d43da4d25f7c15cc601f3b51745"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","7c3f17110ff35e5b919a9a3a5afa4084"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","fca5674539f012a3820e8ed146f1a6b4"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","cecf64bcb7d9249768450589e2440d19"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","b3fef9b7d3d69ca752bf4b485e1a51df"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","ff6505c988b69e19b051352c134c31c9"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","611587a080fc9c326de4b960ef8088fb"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","701caeb81101b3a21ce214684bf8ae0b"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","723f48efd30e3f5c43a22fe7dea6e42b"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","ba2259302ed06db5379cc72760194e2f"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","d798a3bc6229b43e40bb2e4a54593b96"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","f2eafc0decbad416dfd12532e3a9db2b"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","efe42262847a9f7c0e9f5a8a08ae050a"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","ccbd23b6460db87052cc3b7cdffcd729"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","93279da6e1e8cbfb1c816c5f71286a44"],["/Swift CompactMap vs flatMap：差异说明/index.html","8588b7402ab31c64b1156082948449ab"],["/Swift Grand Central Dispatch 深入实践/index.html","19237bfee46130a0b4aa66bc6011b4cb"],["/Swift Lazy属性初始化/index.html","b97d094956d5f392010833cfddf2eb4f"],["/Swift Promises 初体验/index.html","e16d0f5ab8dc1364544df0da15865dab"],["/Swift Promises 探究/index.html","5ab38e1cb18e23fb6ed89578794bf8db"],["/Swift UICollectionView使用指南/index.html","93b4e5730c3fb744a359908c70516779"],["/Swift URLSession && Combine framework/index.html","cae91dedaccfd09b869bbf823cfa099a"],["/Swift tips/index.html","4255790e469aed3f1a4e29581b55c936"],["/Swift 三方库：GRDB 使用指北/index.html","39a0db8f61abed7562d582e43de1cdf9"],["/Swift 唯一识别的视图/index.html","5f6a29bf069f1585dc0d3c133bec550f"],["/Swift 如何学习现代UIKit？/index.html","30329d5c777005db211ab2c989792f7d"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","d5250dc1fbbceaf8c5ce49cdaf79f79e"],["/Swift 用 compactMap 替换 flatMap/index.html","8feb8b4c9d5bf8ef994da1585fe60614"],["/Swift 选择和播放视频/index.html","574004269d259f66f3d6141c89ff2b00"],["/SwiftUI 系列(一)：1、 简介/index.html","3dd21574735a2ae216f665a122442a4b"],["/Swift中UIColor最佳实践/index.html","026f6acb39c4dd79466ca9c167e8a5bd"],["/Swift中快速简单的工厂设计模式/index.html","63758ce3fac2213965fd74e8c028abd2"],["/Swift中构造函数与静态工厂方法的比较/index.html","8f503c44534482612a5f64d8bf3c8d5c"],["/Swift中的UITableView教程/index.html","d61ab7882c93544108c3b6a430f228d3"],["/Swift中的懒加载模式/index.html","e2024c80ba57f150acb393928a0928b1"],["/Swift中的模块和挂钩/index.html","609a88334c58690530b65e0b2340d9df"],["/Swift使用布局锚点添加约束/index.html","4e229dd5b0530bd2c8b0da8d11fb86f8"],["/Swift依赖注入设计模式/index.html","73e050d374d173b8dbfbd18f747b5651"],["/Swift关于Dependency Injection (DI)/index.html","fb9af8b8101590062b841db51413d48d"],["/Swift初始化模式/index.html","8a7ac4c120ec2d1809dc967911341deb"],["/Swift单例模式/index.html","ff4dd65dfe3afa36b6b6eeb360fa1b0d"],["/Swift原型设计模式/index.html","0128f77cad4141df46cf9e8fc220a8e9"],["/Swift命令设计模式/index.html","dece6efc0a246240faa165e713240946"],["/Swift外观设计模式/index.html","e2b40c7026f2c92ee54fb892d500d96c"],["/Swift委托设计模式/index.html","95857f026e47b2d1b6c168055349321e"],["/Swift对象池设计模式/index.html","aecffa43f39db24b0d2c0496d0149e7a"],["/Swift工厂方法设计模式/index.html","c5cf2afb871f06f0683cda1ac992fbd2"],["/Swift带闭包的懒惰初始化/index.html","2ec32e844f08449f123d5dcfee23f528"],["/Swift抽象工厂设计模式/index.html","41a9bfdfcab6441729de2274558b68b3"],["/Swift掌握iOS自动布局锚点/index.html","1ad805caa8b6bc10ac69557f5530059f"],["/Swift支持旋转的自适应单元格/index.html","b1c149d782c845126f3b7498524ab7cd"],["/Swift枚举值/index.html","b41560541fe5de75e50df3b0704ce34a"],["/Swift生成器模式/index.html","37005b74e812322b8c0bad9eebd38d46"],["/Swift结合Xib文件自定义UIView/index.html","3bfe1d740de3eefa2d020ca3ed9c8e3e"],["/Swift编写的20个iOS库(一)/index.html","a41b2ed14f56b6b714e5808a6a8ce536"],["/Swift迭代器设计模式/index.html","1672c250eda4310afef07879c49edadc"],["/Swift适配器设计模式/index.html","a5c54b91e9115cd88f2b851006df41ca"],["/Swift静态工厂设计模式/index.html","664154eaad42b8b4f4c4cd5a9b87c59c"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","9edceb62834b5eb2eef0f5ffda0b6592"],["/UICollectionView data source and delegates/index.html","5e5b118f62e4243be349af9a912f6b39"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","5fb6ec51dfcb375958e0fad727a70324"],["/UIKit初始化模式/index.html","48de52dbc6382f38bbe5906678e8885f"],["/Ubuntu18.04替换国内源/index.html","37a58f2a5d170bfb92783258c026dbc7"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","2fb22661c48be81bc2e25e1a04297121"],["/Vapor系列 (一) :  Vapor 初探/index.html","2915762dbd5ab6ee87629a394b89bc0e"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","9b31d4c6d628949e10035bc47415a5ab"],["/Vapor系列 (二) :  Hello Vapor！/index.html","35dd518e161e973675f37a6491da6ba9"],["/Vapor系列 (五) :  使用session进行authentication/index.html","bac06d11f5bdb240191e0ca3d6396bc0"],["/Vapor系列 (四) :  创建博客数据库/index.html","5dd4ebe13db5122c27232598a289f04c"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b1d72ea9f4a56dc43c9176ba781c1b60"],["/WKWebView与Native交互注意事项/index.html","6058f7d35b4e980e30ec1b08052f70f7"],["/Xcode扩展/index.html","4ffa977e3adeaaaa0a8685bedc20470f"],["/about/index.html","bd80a8a383179679fed4999f17bc3662"],["/appleOS的Networking示例/index.html","a7f1b0402a8b340b1bb218ea98cb4ab9"],["/archives/2020/03/index.html","53d55638d6b56a892c6d870669dda9cd"],["/archives/2020/04/index.html","1963423bf5206338fb39c19e32ac0d75"],["/archives/2020/04/page/2/index.html","82dd8069a089e7cc13879b8a591ce33d"],["/archives/2020/04/page/3/index.html","d1ba20820b72aa42936915a27524fc58"],["/archives/2020/04/page/4/index.html","7bb53f3d3b8649343731eb3275b05501"],["/archives/2020/04/page/5/index.html","058dfaaf7e8f7114251d8094c3a86438"],["/archives/2020/04/page/6/index.html","2ff665efdb05199886aa9a1d1e60a045"],["/archives/2020/04/page/7/index.html","b6133ccb8ae0fa3db9c8d2706179a29a"],["/archives/2020/04/page/8/index.html","48df624da8aa2dd20b5f2417cd22eddd"],["/archives/2020/05/index.html","e6f4b673c28eeec119ff4d93db54ce96"],["/archives/2020/05/page/2/index.html","b581dba9f72164d8c40d60af2b1822d8"],["/archives/2020/05/page/3/index.html","a645135d85575ce84b60da408f38a39d"],["/archives/2020/05/page/4/index.html","00a57b2b59d8dc706a2607742fb1c0f1"],["/archives/2020/05/page/5/index.html","779f78925622608236c00fb3f3abf813"],["/archives/2020/06/index.html","169e33f38f46839b78e7da61db17e236"],["/archives/2020/06/page/2/index.html","1c8ecb63b3b886af2434670bcaecf8fb"],["/archives/2020/08/index.html","2946f99fc9340db2759c3aa791740f68"],["/archives/2020/09/index.html","50e2a83bc2cf498d463541222dc7b1f2"],["/archives/2020/10/index.html","c90c94fc60550fb08d708322ed2b798d"],["/archives/2020/11/index.html","04a96ca39a49c6adea937cbb8ddd5763"],["/archives/2020/12/index.html","cdc96bc9fae804889fcf38a21036b3d5"],["/archives/2020/index.html","3bad27492642bf2cb24f103dd6249d7a"],["/archives/2020/page/10/index.html","e48e634702e062b77d4d96956135718f"],["/archives/2020/page/11/index.html","8f047f64c83c85db914e8fe4fb8bb448"],["/archives/2020/page/12/index.html","0d9a0bd1b86464703ce02ad9e508a55e"],["/archives/2020/page/13/index.html","add01cfe259e101a62a063074f818745"],["/archives/2020/page/14/index.html","6f3514148730d9f436109bea9fadc65f"],["/archives/2020/page/15/index.html","aeba3a94d1abe2be65e13db6c51354a2"],["/archives/2020/page/2/index.html","c7b097138a8b8f00a896f11b6dd2873e"],["/archives/2020/page/3/index.html","7734d238e442e7748440401761fa007b"],["/archives/2020/page/4/index.html","3c7b89df28f62083c172c7da9397f248"],["/archives/2020/page/5/index.html","1ae42574abca8a68452164afb60db0bd"],["/archives/2020/page/6/index.html","2d6032b8494893f56d053dddd9a0ef40"],["/archives/2020/page/7/index.html","31b611d44c53c924f3d91b0b975ead82"],["/archives/2020/page/8/index.html","4ea93314f44dc17cf84f80d3ebfde0ac"],["/archives/2020/page/9/index.html","2bb90f2250d7fb7f11c0a22e41fda1ca"],["/archives/2021/03/index.html","9a149458037584d9b6ed1d3fa6cc2054"],["/archives/2021/04/index.html","12a66cb0d83b06b29ab0f0502919a9ca"],["/archives/2021/05/index.html","8bb4c3c70df9478c50c98c267ca9cb0b"],["/archives/2021/06/index.html","0499109f7f20f4f0a2a612ea9ed051ee"],["/archives/2021/07/index.html","f65eea305692ff1fcbf3ebbd8fcb9714"],["/archives/2021/08/index.html","c83e7559d4547ab8e10c39c904329c95"],["/archives/2021/09/index.html","41d7b39a44480b29aa9d3ef1b4bfb142"],["/archives/2021/11/index.html","a45eaa2238f6a2d286117c8df2b60c8c"],["/archives/2021/12/index.html","b8ca2f06bc3d6cf8d03efbc911f6ce7f"],["/archives/2021/index.html","aca83a4bfbd5153492ce68f871c93906"],["/archives/2021/page/2/index.html","60fb501528ff31411c037b03a7ee1e27"],["/archives/2021/page/3/index.html","8a925d200947eca15c0794df40a00794"],["/archives/2022/03/index.html","7423d396a92d93667edcd7f4cd05bda0"],["/archives/2022/04/index.html","8de499f75b9fd202299ca3f24a49f557"],["/archives/2022/05/index.html","b02272a028bd1125d798e16a41dc7b9f"],["/archives/2022/06/index.html","8e50cbb069b9c6c8884787f7bc497c93"],["/archives/2022/index.html","3d0d82af889f3017ecc646b85488b848"],["/archives/index.html","a6c04ec220a51beb13dad5fa0830f04c"],["/archives/page/10/index.html","48ac6c69207ab3d3dbeac3011ff4676d"],["/archives/page/11/index.html","d658f410f28e28b19e73f8834c158917"],["/archives/page/12/index.html","7185ffdc0bf00c535e8426516a9e55eb"],["/archives/page/13/index.html","0b6a9460d55f0f9f4fc8e39a730e172a"],["/archives/page/14/index.html","a7032265b384b4a201205e608083214a"],["/archives/page/15/index.html","78f82e9d10ee4c788b4e822b653396b8"],["/archives/page/16/index.html","f48428599a896f594a9bb90a4e971d79"],["/archives/page/17/index.html","6bc34b3d59c65777c977d4643ff88068"],["/archives/page/18/index.html","ff4ad4f0db1404acc1f6cf7d042978cc"],["/archives/page/2/index.html","fe2cb69bfc9937193224614e8986fee2"],["/archives/page/3/index.html","f45dbdcfca477ce79b09ddd1f38fb0a0"],["/archives/page/4/index.html","17b2937a667d0f3c68844d2c4dbef978"],["/archives/page/5/index.html","0645d45ad9dd548aff17c72ed99e83cc"],["/archives/page/6/index.html","d7d278d8c7095b60f17ced7361b362bc"],["/archives/page/7/index.html","53d0c9914f6c47508bb2217729863449"],["/archives/page/8/index.html","fe1e6fbb0a51557ffbf900a7edb9a41c"],["/archives/page/9/index.html","b9054d51e8685348ad3450f9de15cf65"],["/bugly 上传dYSM文件小记/index.html","b3fddacf6b87211b82a31ed59b9a0243"],["/categories/Advanced-Swift/index.html","b3ad08c5d5a91ccc1e2be77fd6a91bf7"],["/categories/Advanced-Swift/page/2/index.html","0ff8d85c6d0474ccbaca3cc68d4d8460"],["/categories/App-Architecture/index.html","19ba4886bf7357d621a4de96b17e0b23"],["/categories/Array/index.html","058ff599ed1d60f72c8358f2dc9665dc"],["/categories/CocoaPods/index.html","ef68273788293877e5b3a84a00bb9fab"],["/categories/Codable-protocol/index.html","92892786173668a15ea1a76d6751b16f"],["/categories/Combine-framework/index.html","f4aac32dc508bb9c2eba1c501cd45d05"],["/categories/Combine/index.html","5e0510356a7edba81d1f1900a5062428"],["/categories/GRDB/index.html","03bb18c5714412fac53c6d5ae0ca780c"],["/categories/Go-入门篇/index.html","adef554e68fb40d1bea72d4ef31f06f2"],["/categories/Grand-Central-Dispatch/index.html","092c2fb5b5d5f03016a045fb27848382"],["/categories/Homebrew/index.html","5c6787e701c80cfb3eba42254baa02ae"],["/categories/Linux/index.html","179940161028e23bbda8caec485a4dd0"],["/categories/MySQL/index.html","a0c14a66014bb04cde584e5086e92b8a"],["/categories/Promises/index.html","36f10a2c79d9a5feebb7b107b5257224"],["/categories/Protobuf/index.html","6c97bbc329311d3f0f8fba87d3daaaf2"],["/categories/Result-Type/index.html","2cc207f6e32a3343241a923adf7326a3"],["/categories/RxSwift/index.html","4a4a9c5ecfd0ea9cd6eaf06aa8ae08d8"],["/categories/Server/index.html","9a6b3461a9ce164a4dc680a9d1d38958"],["/categories/Sqlite/index.html","1e498983acdcf086077b17045b56af38"],["/categories/Swift-Apprentice/index.html","b3f935b82128d7a9fa3c9c83876c5058"],["/categories/Swift-Apprentice/page/2/index.html","3d1dfde61c962470185528f5d48e146b"],["/categories/Swift-Apprentice/page/3/index.html","717ebbefa545de9384218ab22c012b23"],["/categories/Swift-源码阅读/index.html","23b901924c95f390a57915d55b75b15e"],["/categories/Swift/index.html","578149b0e20baffb2d4e9aaf447293e9"],["/categories/Swift/page/10/index.html","47a5153d9120bcb3d8ba7f1c72c0be81"],["/categories/Swift/page/11/index.html","3a328a539ba90ca9b64e252999f491a1"],["/categories/Swift/page/12/index.html","70350d117e01fb41bd7316477a69a45a"],["/categories/Swift/page/13/index.html","1b13a0c626cb1bc4f3d0fde38bf08c83"],["/categories/Swift/page/14/index.html","bb80bac7bf9d9268c9e895bbb5e5799e"],["/categories/Swift/page/2/index.html","59c9612b3067a176ea6f084be8ba60c0"],["/categories/Swift/page/3/index.html","995e4e456aef62a5b7e0b996222ce25f"],["/categories/Swift/page/4/index.html","fb2cb308ebd5991318971b38c11337ec"],["/categories/Swift/page/5/index.html","0e566ce76f169c17470d5eb1db761775"],["/categories/Swift/page/6/index.html","d34e444ecc95a7782f3f4076e40be124"],["/categories/Swift/page/7/index.html","031c11a8d8edd0091b80500bde1124d3"],["/categories/Swift/page/8/index.html","d6294a65c5f3d7f1410b0e4a3792f2d2"],["/categories/Swift/page/9/index.html","e98014817935559260e4177bd7802fb4"],["/categories/Swift5-2/index.html","794446552984a1a815b51931f7d28ccf"],["/categories/SwiftLint/index.html","371a1ad26ef8bb16ccc275cc77f08e95"],["/categories/SwiftUI/index.html","45e6f1ad48dad504f91a2df78d958d64"],["/categories/UICollectionView/index.html","2d28d7968338853312a88ba3f460ea25"],["/categories/UIImagePickerController/index.html","e6842fb56b4488d3fc1e2bfa1abbdaf4"],["/categories/UIKit/index.html","408b4f21d19b1d9661530955c4771b56"],["/categories/UIKit/page/2/index.html","e08834f553b7aac53640b67d4d99be44"],["/categories/UIKit/page/3/index.html","d70fb0d7ef94a84dc1babfd4e04be765"],["/categories/UIKit/page/4/index.html","817a797d291614c136eb1b407adf8427"],["/categories/UIKit/page/5/index.html","956972c58dcca19a3770e1fa67fd5335"],["/categories/UITableView/index.html","c44ebfe4077746bf992ad8ff574bc170"],["/categories/Ubuntu18-04/index.html","c5f2b803af02691e627f4ea4ab8da184"],["/categories/Ubuntu软件源/index.html","c5bc969f8baee19880692e219b68abc6"],["/categories/Uniquely-identifying-views/index.html","16ca85a29fd7eb6a75f68cc16f70e0a8"],["/categories/VIPER/index.html","1d14e1376d57bd6cba3902a853b295e6"],["/categories/Vapor-4-0/index.html","f8ddc90c187faf1cf61bbee92d32c753"],["/categories/Vapor4-0/index.html","e17f0a92b64012ed1ed040c385030e4a"],["/categories/Vim/index.html","697a832df260389139eb9725994be085"],["/categories/WKWebView/index.html","b1b9bd77cfe557dab27789ed7b8bf435"],["/categories/Xcode/index.html","05d78b5cd04d6075c950dee200451a53"],["/categories/appleOS-Networking/index.html","bf71a2879f50cb880f0aef9e3124330d"],["/categories/bugly/index.html","ea309637fb8ed41606e045c374fb5726"],["/categories/enum/index.html","ceac038e3b93419d0af5b28ac33c0d05"],["/categories/git/index.html","2e80c6e7d9431ca73e84807d98021789"],["/categories/go/index.html","e2cad385ef024c5495aab5c398e2bf7f"],["/categories/go/interface/index.html","71845995ede87d66150d0686686ff22c"],["/categories/hexo/index.html","2fdac427643fa6d7cd65967628887f5c"],["/categories/iCloud/index.html","f78377987232c25d91f07fdadc445e77"],["/categories/iOS/index.html","1ba8976f610ba47df5e0a0d48e979edb"],["/categories/iOS/page/10/index.html","b09ed7ae1c8241754effb90a9efda9b8"],["/categories/iOS/page/11/index.html","fe166f39efb6593a3ae6bab7afc3f2ca"],["/categories/iOS/page/12/index.html","b02746c21367abf76dbf0532338e2338"],["/categories/iOS/page/13/index.html","0fc9b059195897c893c0a03b9ffdb56e"],["/categories/iOS/page/14/index.html","7d23c665a0ffee66aaed724e3308c72f"],["/categories/iOS/page/2/index.html","6384949ea23a21079f4166ab1c38343d"],["/categories/iOS/page/3/index.html","6700ee6a65a0ff002ae3e69adb33c023"],["/categories/iOS/page/4/index.html","7bf40a5580ec1e4ce7c6b9659727e501"],["/categories/iOS/page/5/index.html","c5b6724d8b41dd751be99e84b5a2d678"],["/categories/iOS/page/6/index.html","138307abdb40ef5a7f0558522a1dd02f"],["/categories/iOS/page/7/index.html","3cb98e656d7cb521c18a672b635cf122"],["/categories/iOS/page/8/index.html","8da446ab8c7cceef247d8c5f59769d3e"],["/categories/iOS/page/9/index.html","f9bd81cf7bcac7acc932be029ec4a6c1"],["/categories/iOS面试题/index.html","6698f39b1b2c542e5f7de9bae9babc79"],["/categories/index.html","521c94e6bdc7fc18f5e748baf79e4686"],["/categories/random/index.html","8115d0b579c6d10f5282b2845487be87"],["/categories/三方类库/index.html","93b3a236c422d0630334f469f43837b6"],["/categories/函数式编程/index.html","67696b76ff133e4460322e701257bf7d"],["/categories/子类化样式/index.html","0f1de46310a757d9bca5fd6446c909c1"],["/categories/开发技巧/index.html","d1dba8a1365e1fb0d07fac5d24167503"],["/categories/开发记录/index.html","7051993e63927440d4147244ccd91dec"],["/categories/数据库/index.html","f7d9f1893af39f09cbbf889174eac625"],["/categories/架构设计/index.html","e34a7ca6c3dd95814847aac46f3c752e"],["/categories/测试/index.html","cb945355ec2b37a8c448ae5bf6a59692"],["/categories/用户体验/index.html","2712e1ee4381c1cfc27f0e1b5e4fdd82"],["/categories/用户协议与隐私政策/index.html","16206f44f5ea4f6876d41ee094b4ff8e"],["/categories/组件化/SDK/index.html","7cb9283b4a5b74dfa163196c6ffc98d3"],["/categories/组件化/index.html","b6663be36e2fb688e112bae7ae1fc0ad"],["/categories/组件化/模块化/index.html","3e0fbcd9d94a63fa22a0abc084b74a4f"],["/categories/设计模式/index.html","2977209bbdbde83f392232c6b9c4938d"],["/categories/设计模式/page/2/index.html","22ff7d86477951df1aad71332c149409"],["/categories/设计模式/page/3/index.html","238e24e8610ad05f04607cfdfc140545"],["/categories/逆向/index.html","21b7d13667f499e126a5a7c2ddb6647b"],["/css/main.css","efaacffaea3264830e9d236ebcdbb3f0"],["/go moudle 导入本地包/index.html","1072740b49267d4424de7b31b3cd0908"],["/go 每日一问/index.html","b21045f3d33510934109b03ebf705622"],["/hexo部署失败/index.html","68bbdcad6679bd9404621529171e56da"],["/iOS 15 适配/index.html","398d48adf4453ce965a681c24c6a64df"],["/iOS VIPER架构深入实践/index.html","a7de48a659427b5e8fe8cfee60eab197"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","c28dceabecef26750f2d0f6f8e93066e"],["/iOS 自定义功能界面点击空白处隐藏的优雅解法/index.html","71cc8adeeca5470287ef8cd3ca96630b"],["/iOS 自定义视图，输入表单和错误提示/index.html","a069b922a5b3586c9e36da3e66e05f15"],["/iOS如何使用iCloud文档？/index.html","fdcc1ec13ca6ff213eee02d27cce2352"],["/iOS子类化样式/index.html","11bc667ee49ec56e00e9c41f7e4b8bf6"],["/iOS开发记录<一>/index.html","2a5e4e587d9544c8d346f496b64526ea"],["/iOS自动化布局编程/index.html","efc0de7678b5db7eff772dbe34406077"],["/iOS自定义转场(By Swift)/index.html","4d835dbe8a3aa3b390eb739425e84710"],["/iOS项目架构：使用VIPER/index.html","cf8ee68e7b8beef42ff2277c54601406"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","8ca6db291f77e58824aa66a6220fa9c7"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mac 下载 AppStore 上 App IPA安装包/index.html","5e4ebf556919529ebd53652d4da3034e"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","d812207db3b638b578c703b42938cc7d"],["/page/10/index.html","389d87f894bd2784f6fe66be0229bd17"],["/page/11/index.html","4bcd0d19cf08ee89cb943a0132e05049"],["/page/12/index.html","112cb057d4d479309033301e58600707"],["/page/13/index.html","c2faa8969941cb16686f8bfdddbe24f1"],["/page/14/index.html","5ce19dddb9a0bfb1f138e5bd18966f16"],["/page/15/index.html","036e71fc0987937a109f7cb4decba469"],["/page/16/index.html","4c4bc3e8b66c0dbd1dd81418d46afc8e"],["/page/17/index.html","8661429fd539dc055ef47a436d4db612"],["/page/18/index.html","7fb964bdec14ba4c5657c680c85097c7"],["/page/2/index.html","99c43ba3bcb4533dd3857cba889f3af1"],["/page/3/index.html","5697209409453e0fcc8e262f01f162aa"],["/page/4/index.html","3d4c3f2e13f7733af972e80d6ed4c1ad"],["/page/5/index.html","412c442493c03a04035e8f5be3c6b4c2"],["/page/6/index.html","953ebbb63e70415aa7c7dab4cd07ce2f"],["/page/7/index.html","698ceeccba77a7dd295b3d1ca3509ec8"],["/page/8/index.html","5b40572174bd8c5b70d5539a2b2d2dc5"],["/page/9/index.html","af9a01aa16d35e978bd4dba15dd0d2be"],["/schedule/index.html","ac6f65b2f0487156d06ff8c94b2c0006"],["/storyAppPrivacy/index.html","5bc9492badfc2f1723adf35a2d432e57"],["/sw-register.js","7a2abb21493e2debb8fa1d0533824899"],["/swift 专题：函数/index.html","608a0e91f4dc7af9122a78f465e2e785"],["/swift 专题：闭包/index.html","bc0099251ba6419561b0ec2bc3979edb"],["/tags/Advanced-Classes/index.html","134e83f9759e0539eec75283c7f13a67"],["/tags/Advanced-Swift/index.html","4200aef88703d1bcc2586863ce1540ba"],["/tags/Advanced-Swift/page/2/index.html","a4b70db9bf6a11733f583b3a7d124635"],["/tags/App-Architecture/index.html","f4d713055a0ccd291f1a38b6eff292b4"],["/tags/Array/index.html","9907dc27c8b539d9ef60c520923e6e67"],["/tags/Arrays-Dictionaries-Sets/index.html","b42afb2f34bbe88b5e12c32d07b60ad0"],["/tags/Authentication/index.html","39c66948e401278f1825ed1af57008bd"],["/tags/Build-in-Collections/index.html","5afc18be8d5f68c870e859bd6b7e0e22"],["/tags/Building-Your-Own-Types/index.html","3b97aea56d6f7ee3a594e19b71d79b89"],["/tags/CMS/index.html","906be72ad0a3d75a1cebf809ad867454"],["/tags/Classes/index.html","c7652f3afc841582adb7495cb148ca1f"],["/tags/CocoaPods/index.html","141c8b01357b2e6447e8f959ac7abbe6"],["/tags/Codable-protocol/index.html","8ef617f3d5d9fe4cb1f9ffa99538b464"],["/tags/Collection-Iteration-with-Closures/index.html","00c79fa2e949bd0732b074422525ee25"],["/tags/Collection-Protocols/index.html","3d6d2e592f43cfd302bf12782186c898"],["/tags/Collection-Types/index.html","500c22fdaa6a0e9015a4514cf8335e42"],["/tags/Collection/index.html","1e5799b1836e73aca6812a572db3139b"],["/tags/Collections/index.html","88a15f49f2ce711d4c2eb4e8f3e75c7b"],["/tags/Combine-framework/index.html","7663845bd865e87ec274c3ea3250c940"],["/tags/Combine/index.html","23bee97a7fce640b3b35d60e66eb1b40"],["/tags/Dependency-Injection/index.html","14b03d2ce4f3ac1e61e47c8f02004a63"],["/tags/Encoding-Decoding-Types/index.html","fee9563cebd6c1ac96ae91920a1b5d92"],["/tags/Encoding-and-Decoding/index.html","ff0a9f4b6eb1197ced8a467423b18ecb"],["/tags/Enumerations/index.html","95f57ce2362998a41b2323f0397c6106"],["/tags/Enums/index.html","ffdbb334ca0f1fe1358b0bc1bc69071f"],["/tags/Error-Handling/index.html","980b3d3da3dd5a6229fe1d17b289a9c9"],["/tags/Functions/index.html","4310769bd293f091f8f994db464214b4"],["/tags/GRDB/index.html","1ffb7337080c6a592570f9ca54ee645f"],["/tags/Generics/index.html","5fad5058aa16fc4dcd33b882083bdd97"],["/tags/Grand-Central-Dispatch/index.html","2db764a26ba1f63d0c9c1d6f94118e78"],["/tags/Hello-Vapor/index.html","47809d3bda88557a0a9ea99cf751f932"],["/tags/Homebrew/index.html","e12b1ca9e5e7af061461f936359b3ddc"],["/tags/Interoperability/index.html","63711ef122a438364b3fd65d8f99a5c9"],["/tags/Introduction/index.html","b6c2c290ed4336f70428ab0f9477c161"],["/tags/Leaf/index.html","0c3d5c3b2ba19363d836dec43673a1f9"],["/tags/Linux/index.html","ca3ea2934c2bf9d73be51db29789746d"],["/tags/MAC/index.html","71d4391edcfab729aae2fd26c9cbe895"],["/tags/Methods/index.html","b8fb690efe397ade453260369793692f"],["/tags/Modules-And-Hooks/index.html","dfc2618415d66bc9280289dd03b772a9"],["/tags/MySQL/index.html","4eef8e3b3159d7c60d67588e1fc8c293"],["/tags/Optionals/index.html","3838ec05af6a75496d94d2f7e3ad406a"],["/tags/Promises/index.html","e378cf44b538acce4622943b655837af"],["/tags/Properties/index.html","3126a69497773da62491b40bb52d8b67"],["/tags/Protobuf/index.html","f8b8c95f2577fe04e5811553d8c481ef"],["/tags/Protocols/index.html","b0a139f6916de75054b4daab9f9edc5d"],["/tags/Result-Type/index.html","79ae2763dbab0dd50cb27dc266455842"],["/tags/RxSwift/index.html","4303481c32df8e68ecc18dfdf9aafcbe"],["/tags/Server/index.html","be062c046a36021637bbf264126a8766"],["/tags/Session/index.html","09a4ea425a107b653f7ec0e525fa8489"],["/tags/Sqlite/index.html","008b48a55586f339e7eaede177526934"],["/tags/Strings/index.html","02a6d8e862e66daae76df5c5303e94c7"],["/tags/Structs-and-Classes/index.html","1290bee8522a1b9ad62f5e4c6dde7813"],["/tags/Structures/index.html","4e781ce6fb0932c7bd3cf5481915a99e"],["/tags/Swift-5-0/index.html","99309a4f61b845e9caf309b7a8ca22de"],["/tags/Swift-5-0/page/2/index.html","3ec70102525857067d860bc097f3f731"],["/tags/Swift-5-0/page/3/index.html","8341e91b84f0d3a893e57ef7accfdcdc"],["/tags/Swift-5-0/page/4/index.html","a072f8c8b552bb693e1da9e45b196f27"],["/tags/Swift-5-0/page/5/index.html","5384cd5efc82fdd9d541c4b07765d43f"],["/tags/Swift-Apprentice/index.html","67a752ca817be28c35b3cba0c66d890b"],["/tags/Swift-Apprentice/page/2/index.html","0ce508129c9711adf5784d762b5f1174"],["/tags/Swift-Apprentice/page/3/index.html","ed95cee5dd6f17eb015bdf92fd22790b"],["/tags/Swift-Package-Manager/index.html","754780e443ed062036b67ae0d8d274cd"],["/tags/Swift-源码阅读/index.html","315d12c641530d2828ac73aaa548e0dc"],["/tags/Swift/index.html","dc005f8fe90877a95c2d9fa2030f048a"],["/tags/Swift/page/10/index.html","00339cdbe3d655452a9833381e2281f9"],["/tags/Swift/page/11/index.html","6a9090f8c0aa3cb876cbe3a1fe8d03da"],["/tags/Swift/page/12/index.html","6998dd1df754bd9d98cd43d6ca0980bf"],["/tags/Swift/page/13/index.html","ffbae41c895830efab1f205eaccf4b87"],["/tags/Swift/page/14/index.html","0c95b19d7b1befd7991b392449ee7b7d"],["/tags/Swift/page/2/index.html","dd2c0ea0033793a53256daa51d802caf"],["/tags/Swift/page/3/index.html","5e1a6e66cb91f9d50841ec62295b8d0a"],["/tags/Swift/page/4/index.html","9cd4085a82638960e4854c02df41facd"],["/tags/Swift/page/5/index.html","c4b00fd8997bab2742b9aa6bf891f495"],["/tags/Swift/page/6/index.html","67a95cc9abe64f9406a6dd87efb215ec"],["/tags/Swift/page/7/index.html","d6a466b67af74a0e23bd8ab1d08a1131"],["/tags/Swift/page/8/index.html","ac90cdb7d8297fb0b0572fa363458a93"],["/tags/Swift/page/9/index.html","a8d8694da1ab3ba5549ecbfe7647d654"],["/tags/SwiftLint/index.html","5e503c6b9eb91e35f6e6363e1f79ef9d"],["/tags/SwiftUI/index.html","ce9949a82a56caa0a397e906362edb10"],["/tags/UICollectionView/index.html","2f7acb805ce134bca33a7d71e0564e4a"],["/tags/UIColor/index.html","0bb293ad514cbfb852b5fcc8b9f69c15"],["/tags/UIImagePickerController/index.html","418dc543e4381d7ef772068e114bf452"],["/tags/UIKit/index.html","4d20b5d25e8426ca82102d8091247c05"],["/tags/UIKit/page/2/index.html","9974212e172830d975fff809e98961d1"],["/tags/UIKit/page/3/index.html","752dc01d48885abeb65a78a5ac2ae996"],["/tags/UIKit/page/4/index.html","33a7416202b5ed84b4e78e393b18bdfe"],["/tags/UIKit/page/5/index.html","6deb337c4a3526865d752ddae0f7f727"],["/tags/UITableView/index.html","3b5de3b610b8ac10124c06d8f3446901"],["/tags/Ubuntu/index.html","166685913e292a269be51c5730bf8d2e"],["/tags/Uniquely-identifying-views/index.html","6c47b5f204534dad6dfec7a9ce6e6362"],["/tags/VIPER/index.html","58d34671b5b09ab5f1b555ef11a64fd4"],["/tags/VMware/index.html","6fe1c3d879874b8a6972f47da511708f"],["/tags/Vapor-4-0/index.html","facfe6a688fc645e2aecd656789b4b8c"],["/tags/Vapor-初探/index.html","aadf2a4102059436c2aa9d20dd75c096"],["/tags/Vim/index.html","091e9170a7fa31dd873f14321e4ccdd1"],["/tags/WKWebView/index.html","72373236c211958f442c25a9d6d4a288"],["/tags/Xcode/index.html","ca187388e921496053bab6a9d3196616"],["/tags/appleOS-Networking/index.html","7b7a94ba2d3e52b43c90eaf563d638ff"],["/tags/bugly/index.html","5c8e0c01931e300db2d2e2c2af25d980"],["/tags/enum/index.html","6af9c67e5604c32c98dd9040c57f1ab1"],["/tags/git/index.html","ff783b6963ba3b1317dab86ab2906b53"],["/tags/go/index.html","32b6b211e094d6022814109083aac275"],["/tags/hexo/index.html","0630c1532957d99c25514142cc2fa1f3"],["/tags/iCloud/index.html","0b1e6a1c9a25d29d8dc7bfd807bd6bca"],["/tags/iOS/index.html","9fd21bd8a689c752b14ea9c7cbeeb8ce"],["/tags/iOS/page/10/index.html","f1d8b00929c9944596002d60b53322e9"],["/tags/iOS/page/11/index.html","9f20d54580b04db0d084daa7d8fa4d60"],["/tags/iOS/page/12/index.html","328cb341f4785bed6196035a5bc2e641"],["/tags/iOS/page/13/index.html","7f25f5550c6ddca47975757124e7cb2a"],["/tags/iOS/page/14/index.html","249cb02b497cb5e4997b3edb8b40df11"],["/tags/iOS/page/2/index.html","efc2147290afeab7f76477eb69137187"],["/tags/iOS/page/3/index.html","b0600860b60f3daf487548a9eeb80d87"],["/tags/iOS/page/4/index.html","df0613c0aaa57ca3632bcf1a9ff9a825"],["/tags/iOS/page/5/index.html","bbe00d2859fb7119bbcf4968203676da"],["/tags/iOS/page/6/index.html","e7a90023f80cdc43d22b50f4d6fde440"],["/tags/iOS/page/7/index.html","0b859791bfc355ce4e8d29ff510e4abb"],["/tags/iOS/page/8/index.html","e1cfb42d7510382ea4c358c56b3470f4"],["/tags/iOS/page/9/index.html","0b84f19db526924d030eea46fd64392a"],["/tags/iOS面试题/index.html","64dd549ded6e30de7e9e5ba9aab3fb4e"],["/tags/index.html","6667eb944ec0b4dce51d9f673d6bc987"],["/tags/interface/index.html","44fd6b8da0c5345530e32ca3f7e85066"],["/tags/non-optional/index.html","7e46190fe94b3cd9a3f4b8d50c750ac8"],["/tags/package/index.html","926907afd4ac2ac7be6aa2478b67379e"],["/tags/random/index.html","b65d56316405c3a520668e484fe15b91"],["/tags/transition/index.html","b80c416e83f389fe4cfc85be7517997c"],["/tags/三方类库/index.html","c4786d1d47a90a715379a8b39080e206"],["/tags/依赖注入设计模式/index.html","6abb42a74a3ecfef06c6181bb24b95ab"],["/tags/值类型和值语义/index.html","7164d1f72eb257ce30aea0548eeb5b85"],["/tags/内存管理/index.html","1af43208d1bb54a570872090b71acad6"],["/tags/冒烟测试与回归测试/index.html","6bad6d1d774ad22d29cb3bcba001dfc6"],["/tags/函数式编程/index.html","a8c2ff64e79b167c95cd4d7bddd1de32"],["/tags/创建博客数据库/index.html","8ab86da03dd1cd4fb5b379f0ea2a0aeb"],["/tags/初始化模式/index.html","dec856da5216376fc0c946988c16155c"],["/tags/单例模式/index.html","2eaf48bdaccc82c70e08a8d14b39f918"],["/tags/原型设计模式/index.html","2f9c8aba3189204a3aea75ff47c6305c"],["/tags/命令设计模式/index.html","e3a2af9b875bdc3c081ab53a41da40d2"],["/tags/基本控制流/index.html","a777bb0e1cfcf999cadc62d0520fce58"],["/tags/基础语法/index.html","92c7c9d3f8fec25d303b82b109a677ec"],["/tags/外观设计模式/index.html","605be455342118d4550cbc2716febdfa"],["/tags/委托设计模式/index.html","10bab73498e84858fc50edb993920c97"],["/tags/子类化样式/index.html","df4c433274aab3102cc0bb27c1ea6083"],["/tags/对象池设计模式/index.html","94a572a7d6055300e10d42c3ca2d96ac"],["/tags/工厂方法设计模式/index.html","7af5afffad4ad6dfcf4f16c020dede41"],["/tags/工厂模式/index.html","efbde0e5048ce22112b22b4e2ab828c6"],["/tags/工厂设计模式/index.html","e6e3405bb7aecad5ee3d88b7b7a21cfa"],["/tags/开发技巧/index.html","51d8dacc6ee209ea398750e73b0f2f57"],["/tags/开发记录/index.html","7fa06950f51213314978aed440e6b510"],["/tags/懒加载模式/index.html","319a1fbb78de3fdcc7663871c8946b79"],["/tags/抽象工厂设计模式/index.html","10a5e98b91b4a96ea66c729bc5d0423e"],["/tags/数据库/index.html","5984b61d0b305777665ebe14a4119952"],["/tags/构造函数/index.html","352816ea2ee444c6389f1ef85c1a9beb"],["/tags/架构设计/index.html","d4cecf5c2ec4c1e7da3ff9e73861661e"],["/tags/模块化/index.html","6aa32173c650eadabba6ebe0049440b7"],["/tags/模式匹配/index.html","6561702981334bd9e4f7113395b27815"],["/tags/环境搭建与验证/index.html","8fd648faef62b7714cb20095b33073b2"],["/tags/生成器模式/index.html","540f3654cfe571b2dec615e30978a1ee"],["/tags/用户体验/index.html","6885d064c85e7404ecc14f4807dd3c76"],["/tags/用户协议与隐私政策/index.html","d91516a1d3ca224af81c3f3b95229c6e"],["/tags/类型与操作/index.html","9f6b8ad78bdb9935d08a96fed6f17882"],["/tags/组件化/index.html","23f314025db51b8bb9b74738dad3c5fb"],["/tags/自动化布局/index.html","7011a18be2fedc3b71a1a94c7b4685f1"],["/tags/自定义UIView/index.html","ff8771c8f868af2cb9cd5ed317a37609"],["/tags/自定义转场/index.html","fb235ff93a7f294c5962085aa82be98b"],["/tags/自适应布局/index.html","5838d443f23121e3c7b36b771e33404e"],["/tags/表达式、变量和常量/index.html","d290c1547928496e75569726e8e88e98"],["/tags/设计模式/index.html","fd1ee1a10db4860332cba51a6ceda03a"],["/tags/设计模式/page/2/index.html","edecdd3497895861301337b763bc7476"],["/tags/设计模式/page/3/index.html","3bc9876d96bd3a7a497d027a03ae751d"],["/tags/访问控制和代码组织/index.html","fe70dbc17374213b603384133ebd42f2"],["/tags/运算符，下标和键路径/index.html","036ba43e9aded0d52a7005d36d01a49c"],["/tags/迭代器设计模式/index.html","673c2611a390c0336e85360ef0ac9f30"],["/tags/适配器设计模式/index.html","a33c738c039646091a95fba2b3ffc057"],["/tags/逆向/index.html","6df968918c7aca3e667a224abde6984d"],["/tags/错误处理/index.html","626dafa4c2938312d900052057aab673"],["/tags/静态工厂方法/index.html","7f44aaeb27a154aa349ccf45fb205f74"],["/tags/面向协议编程-OOP/index.html","86b8d88994e86294ad5e920d2ea893b2"],["/tags/高级主题/index.html","a28fbb49f0f7203f9d4deeb95cc93feb"],["/tags/高级协议和泛型/index.html","9e8c04204431a2b0f3d2dfd0a29b2e5c"],["/tags/高级控制流/index.html","b0fa242d23fa46c98a40e5c05988b8b6"],["/xcode 常用的快捷键/index.html","7141cba0136673e516757d06bc4cc601"],["/为iOS应用构建输入表单/index.html","7aaa244dc1e40898016a31f5572b57ee"],["/产品开发的幕后花絮/index.html","9ec4f4637ceb898dcc9e1a1d0ca3d028"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","bedd377442b34ca5695757f9a46c14a3"],["/冒烟测试与回归测试/index.html","e821f5fe70da5775ddb198969034c891"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","32009cbe4a7e17b87877e867c0ce4f4c"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","24478060a28ee9e19fb773a015f33a02"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","aa212cab6056878cd699b92eac2f1326"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","3ed338851638b14b5f17f310d45ae85c"],["/在Swift中创建自定义集合/index.html","95538b36bcc29d45d51bcc1062bdb202"],["/在Swift中处理非可选选项/index.html","a549b70d850b80ea584a39e6678b794b"],["/在Swift中生成随机数/index.html","9772b5942ed4f666c2e9fb42c1143430"],["/在Swift中重构单例模式用法/index.html","555d86695f0c55fba34486e28ebf4e9b"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","371a0ee7db90ddecccc1c5c7a0b3ee1b"],["/如何为VIPER编写服务？/index.html","5bae45bacb75e77df885cf102f12874c"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","425c4c33391c7411ce02c7123bf461e1"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","aa0799f69f25652374e7699a12cbf8da"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","fd8cd1520515606e657cf6c040e315ea"],["/如何使用VIPER构建SwiftUI Apps？/index.html","0e7f3e2031fc3613433a171bded4a008"],["/掌握VIPER架构/index.html","3e8c0542e79b4e90b7172cb7a6d3953e"],["/揭秘 WordPress Hook 系统/index.html","eda42d1eb7511140b26e9ad99dc91101"],["/比较工厂设计模式/index.html","5c49ae0788d822997246610f30ea4e36"],["/深入了解Swift中的Grand Central Dispatch/index.html","db9a509c36edfb0bbc016a673b0f9d50"],["/深入研究Swift框架/index.html","0ae3f2bfd36f98154d487e86cc6ef2f4"],["/组件化插件化与模块化/index.html","7c7d6a65bbdab38af97f8e2202091f93"],["/组件设计与SDK开发基本规范/index.html","e0994f7be50f8a41c1b1bf15aa66ecb0"],["/适用于iOS开发人员的VIPER最佳实践/index.html","db4e02fd23bf2c9dd155113d8b2f5dda"],["/选择Swift而不是Objective-C的5个理由/index.html","f21603832ff79085e5376f7457ef2678"]];
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
