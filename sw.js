/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","b01ed37e73ad9500870df2d45639bf5b"],["/2020年iOS面试题总结(三)/index.html","bd21810bce8460ae46fc33be9010e18c"],["/2020年iOS面试题总结(二)/index.html","6723b3de26f47d5b975a96e4ffc18701"],["/Advanced Swift系列(一): Swift 简介/index.html","c49035a20a7d0f4c6d86cb90785cfc82"],["/Advanced Swift系列(七): Strings/index.html","55053998b8d8b6b96c688a84838ccbb4"],["/Advanced Swift系列(三):  Optionals/index.html","23ad1a59c2303a58404410a6ba79071e"],["/Advanced Swift系列(九): Protocols/index.html","52d32cf3b2df8be283968287ca0a8c16"],["/Advanced Swift系列(二): Build-in Collections/index.html","15c87566d637f7238c41b9b45213d5f7"],["/Advanced Swift系列(五): Structs and Classes/index.html","17a79420f1a8d25a097d3132ae6efa79"],["/Advanced Swift系列(八): Generics/index.html","b1129ed553387327e87c3fcccf378c60"],["/Advanced Swift系列(六):  Enums/index.html","310d2d26f77cb3d702a32e395054e0ad"],["/Advanced Swift系列(十): Collection Protocols/index.html","c64b51a4266a680d0216e4a4bfe23a80"],["/Advanced Swift系列(十一): Error Handling/index.html","b3ed864c78dbf24ea9e04b4a31204f3f"],["/Advanced Swift系列(十三): Interoperability/index.html","bd059c9b2c8b083a468a174496aea3c0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","2c3bc4e292d01e439d484859500f91da"],["/Advanced Swift系列(四):  Functions/index.html","6ec1c463c74edc5f0862a48347887332"],["/App Architecture系列(一):  简介/index.html","c86a938fb400388214ecba4f5028fd1c"],["/Functional Swift 初探/index.html","bcf7597ee692c28428736fd331eb24bd"],["/Git 使用小技巧/index.html","76db924fb575f97283d9b95a8fa8045f"],["/Go mysql Tips/index.html","a41c5e88dbfd6b73c6ecf894e6960c6b"],["/Go 基本语法初探(一)/index.html","e37c7f65a17061d0be74193f2827e90b"],["/Linux VIM 命令及操作小结/index.html","1c8d3daa7c9a68b7a24258a17840eb38"],["/MySQL 基本操作/index.html","feba8b87212f1d9c1c0a6d5c0dc53e2c"],["/MySQL-列类型和数据完整性/index.html","530ff69c84f67be5be0ae9f94fa6e373"],["/MySQL-数据库设计和查询语句/index.html","f48336fa4129f3d71191f9d8d85df835"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","9476e1d69bb37cc70c6b7ec295d5edfd"],["/NSCODER和SWIFT初始化/index.html","8f8e75ff8c3acf11e5a874e0b832c671"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","df5102d68ffd176d62173fa51a5cb96e"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","be13bb59a40567259422a4488588f541"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","262fbd1c048085af1ad9822e334311a0"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","8196a217ddd1e1e07465805c127da14c"],["/Sqlite 使用Tips/index.html","0ea6bd7ace9d94f5900d041a03031c25"],["/Swift - Array,Set操作（交集，并集，差集，子集）/index.html","b58682d1566999de3b7ec52d1160c70f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","2ad031a971987c920134d77cdd48f256"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","a1d9be1a58aa8b5a8de5050e0e80a6ea"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","768405d2947f1c41a4855568ec3b640f"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","5e5ab5dccf9c3034bad78f444a65f14b"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","435db309f201ae66fd4d03df5469e42d"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","5fceebd9c041d66555ce0915b3b7e5c6"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","188bc3ed29d0ccb9d5e1199ff56f9c38"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","dd8e10368ac4b81b81cf5620b1f0d6d3"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","b2993a8b6df620b569718ed363d0fb0e"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","39f9cfd100a8ac281482cbd2b80ba3fa"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","0f3f5165762f82920792be5cf0786406"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","62e897fa64f364784644f2d411f57683"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","6a06121f644171c6ae2ec6990c7ef082"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","cfed03412b7dd857b33668ba4264b173"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","2c5d9e702ff0af38c663637e6644bc62"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","3684054573886845cb79c2dd40f6cb01"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e5bc6ec820846030e6f5c764f783127d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","bb5adca756ab85b16833829f011504ae"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","00bb8d1e3aa38aac97eef3e33e285a4a"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","bc4fe16517cc9cca526ff085aa4db068"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4d36d0ea03c5d05db17bea3c88def7e8"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","1f50a7ac23521251b6293340ef6a541c"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","ffa852076a3a64bbea2a5e9f77f56125"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","0268cbafbf15d2e33403aa92b90e99e1"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","6177fa0ff7945ad1bab715fbfd099f23"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","b79c6980734eabffd710c4dff1b6ec24"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","87b42c4e53ba8cc38c8bc354fe4cf3f9"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","9d04dc36859bf68cb5c20114ead1392d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","c8cd8e7935265b7bb97e0b3fea77550d"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","c8ccdd828f10d687e747000122f1e578"],["/Swift CompactMap vs flatMap：差异说明/index.html","a5433f31e18a3e90ff44e1fac6d6a6a7"],["/Swift Grand Central Dispatch 深入实践/index.html","9d21c49b2e8b16a216a84c03ec8368b7"],["/Swift Lazy属性初始化/index.html","aebdd911e6fec8edcdd03744602af41c"],["/Swift Promises 初体验/index.html","fdf565d058b1e7b60f5e7f95bcc16c49"],["/Swift Promises 探究/index.html","8bf0416d517dc99121aca9feb130840b"],["/Swift UICollectionView使用指南/index.html","dd832b5504bc490cd16c9aad9d197804"],["/Swift URLSession && Combine framework/index.html","f46ba5bf8dcb0d673718d52c447ccf00"],["/Swift tips/index.html","35f17da90d4422acbeafa2e48bd97e82"],["/Swift 三方库：GRDB 使用指北/index.html","1022ea9c367ba870dcfb42390df408a5"],["/Swift 唯一识别的视图/index.html","d41fcd5edd9e7583ac767645da4dbac2"],["/Swift 如何学习现代UIKit？/index.html","62c30b47be6b46c923d22fbcdcd449fc"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","dcb0a4f68fe6cfa30a1db9bfdd9f79f2"],["/Swift 用 compactMap 替换 flatMap/index.html","ba0f9cc2eee2992789106c9ea1463a0d"],["/Swift 选择和播放视频/index.html","167ac2530066a6c1cd751f61fda33abe"],["/Swift中UIColor最佳实践/index.html","c970fc7fee7bd5cb97235b472d997357"],["/Swift中快速简单的工厂设计模式/index.html","da0930eb16eb7fa7b7c59b61f3fa723d"],["/Swift中构造函数与静态工厂方法的比较/index.html","8bb5ca0425011fc9a3985104826e75d0"],["/Swift中的UITableView教程/index.html","55e77e2afd78e1c2f6e2e4941bb4f8bc"],["/Swift中的懒加载模式/index.html","2fb4d00cd4426ba8a209d05900212ac5"],["/Swift中的模块和挂钩/index.html","3aa69688fbc6e9c573e4db0051cbbe64"],["/Swift使用布局锚点添加约束/index.html","5c056a8a9afc19d50270418dc452bf31"],["/Swift依赖注入设计模式/index.html","3da0a8780e0b7c26c19deffaf5a66271"],["/Swift关于Dependency Injection (DI)/index.html","feba02506c1cdc7de9293306d27a2231"],["/Swift初始化模式/index.html","cd0c714c2415566e613ebce682e931d2"],["/Swift单例模式/index.html","d15913b417ea2ceffb1eaa0e25d8fd01"],["/Swift原型设计模式/index.html","cb7718378e3da5732366da1c7bd94cae"],["/Swift命令设计模式/index.html","ecd2f27068346846fa0519e1d2117c4c"],["/Swift外观设计模式/index.html","4d6bb499d30719b11a49838e21c07398"],["/Swift委托设计模式/index.html","f34fbba4efe619bf5e726a78747d1289"],["/Swift对象池设计模式/index.html","b2ece07460e87993e03af8f1e4b8f54d"],["/Swift工厂方法设计模式/index.html","127166d37bc4316c2ab2193b294844ce"],["/Swift带闭包的懒惰初始化/index.html","bbd9219a067f051b460df046fb646423"],["/Swift抽象工厂设计模式/index.html","cb7f7455f37ab8293b10e5990481cc8e"],["/Swift掌握iOS自动布局锚点/index.html","f26cfe118ca92a488fa2a7c4484ed1f7"],["/Swift支持旋转的自适应单元格/index.html","24d9fc2cc057b10b60ebd7c37e20a1a1"],["/Swift枚举值/index.html","21b948359dacb9849f3d7acb20322317"],["/Swift生成器模式/index.html","17adf814c386f2756cc3252a2e240de7"],["/Swift结合Xib文件自定义UIView/index.html","0d9af3c77e7030a6bf9141ae310d38a5"],["/Swift编写的20个iOS库(一)/index.html","0f79bbd5a8c53a1fb9c36fbaefcf13d0"],["/Swift迭代器设计模式/index.html","cbe920a785dbd93fc64a1b56bbc7deda"],["/Swift适配器设计模式/index.html","97d730be29eabf8792c872112eccd19a"],["/Swift静态工厂设计模式/index.html","7c00604a00ccc57be1dbcc75e61c4065"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","0bf22ece891930219bd0a68a0ed81b7e"],["/UICollectionView data source and delegates/index.html","9d4d9c129d11a8e645638a10f757dbd6"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","1cf38ab44d4e9a576b785bcc2db11d17"],["/UIKit初始化模式/index.html","4c3884f475a7692bd77d52facbc343e7"],["/Ubuntu18.04替换国内源/index.html","4cc712203f4d477682ae239e08a228da"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","88e4f89805a1a6808330f7ee8f68c8db"],["/Vapor系列 (一) :  Vapor 初探/index.html","45a34994d89360bbe5f962c40a6002de"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","3063c852c5c933f25555dd6cbd8a20c3"],["/Vapor系列 (二) :  Hello Vapor！/index.html","f1012a6207f059466b0c8402756f44b4"],["/Vapor系列 (五) :  使用session进行authentication/index.html","b24fbad5943222033f5d57606f11d4f6"],["/Vapor系列 (四) :  创建博客数据库/index.html","f4d67e24defe3121f8effe897794f75e"],["/Vapor系列(六): 徒手撸一个CMS/index.html","11e8fec2795d97b72e45aaa19aaf5228"],["/WKWebView与Native交互注意事项/index.html","7924014c3616fc1106b54dddab2e0e99"],["/Xcode扩展/index.html","ff1d58f4f2acf6562813bb8b687988bc"],["/about/index.html","d4a373d58f099be6aa603ebc874af13d"],["/appleOS的Networking示例/index.html","04f857ecd1cdf86b0e1d8cce37093eff"],["/archives/2020/03/index.html","4c55c5b40c67fea49980c224308af8f0"],["/archives/2020/04/index.html","a36b34e4b5763002121d9a1cee3a3a34"],["/archives/2020/04/page/2/index.html","f63a9b0ba9f764f39708287b2cedbbfa"],["/archives/2020/04/page/3/index.html","0df3b064e988593e1d2dadb3babfd6b8"],["/archives/2020/04/page/4/index.html","91acb83c73f43fa8d1eb778982e93e3f"],["/archives/2020/04/page/5/index.html","0990193357e9b9ad60d7ca79b5b1c788"],["/archives/2020/04/page/6/index.html","aca8dfba60e8c92f7e7e819af2892841"],["/archives/2020/04/page/7/index.html","998083bd230216c79a23c9791e8e5cd3"],["/archives/2020/04/page/8/index.html","8897c1858841556c3401d29fc6538ba0"],["/archives/2020/05/index.html","77884f38c821f93707f4a1b5feecd785"],["/archives/2020/05/page/2/index.html","9b141d3fa3f9353dea936a51f3eec06b"],["/archives/2020/05/page/3/index.html","cbcdce083a4244468ab9cf4256b69fc2"],["/archives/2020/05/page/4/index.html","83b8076a9c97c5f6afb0128c55d8e945"],["/archives/2020/05/page/5/index.html","d711777360ee208adab6c0670e6b04fd"],["/archives/2020/06/index.html","98b7ee968ba79089c2fbc659842eab6a"],["/archives/2020/06/page/2/index.html","2fa2edc098e5c6edcd3295e012d68b5e"],["/archives/2020/08/index.html","c90aad34655812840e9ed31927688b09"],["/archives/2020/09/index.html","feae7dd7120f38f2598c88326cb4e1d0"],["/archives/2020/10/index.html","bfb6b3c5c42d189fb18ae881f444ab47"],["/archives/2020/11/index.html","1bb2960aa6910fa3d07fc9426c1eff55"],["/archives/2020/12/index.html","77bf2a148239e2622d9961eb1839519f"],["/archives/2020/index.html","a950b4387c9c777fc0e9f6fa5c830641"],["/archives/2020/page/10/index.html","6c43c7c791d185d25e325b34a95b8ccf"],["/archives/2020/page/11/index.html","281d686d8bb06c620bb7ec4837a6e600"],["/archives/2020/page/12/index.html","85e889e60131e264823b0179d819ee23"],["/archives/2020/page/13/index.html","dbe413435b8da509f35c76f59997e43e"],["/archives/2020/page/14/index.html","390a464420e0e2f684f3de52b6884979"],["/archives/2020/page/15/index.html","2b7d9b19d555cab25e45d9bef7eb8a8e"],["/archives/2020/page/2/index.html","3d09830809dfc461523c78ae00de4fb7"],["/archives/2020/page/3/index.html","ee998595230a3a45f186e399d318f318"],["/archives/2020/page/4/index.html","aa24510d55240fed200c0f4a21eaa13e"],["/archives/2020/page/5/index.html","ea774ac3b86f14e70cd8f35e805efd31"],["/archives/2020/page/6/index.html","d34561c34668874440b1e0357180e57c"],["/archives/2020/page/7/index.html","719213fb65d8142d7c00dc5965a6cc5d"],["/archives/2020/page/8/index.html","2ad7065949deaf4f5ec921bef21d73d5"],["/archives/2020/page/9/index.html","b8dbc38f789e46433a89ae41f5252642"],["/archives/2021/03/index.html","059a5534a3210300e99b02239a6e3e25"],["/archives/2021/04/index.html","2ffc1dd106b8576d44c3e034eeded5ba"],["/archives/2021/05/index.html","348c17da34ebf1d817515d6c04a152d0"],["/archives/2021/06/index.html","e1e70e1d607697776928c739350e4d7b"],["/archives/2021/07/index.html","983a087f690c45b7e7c8d51f657a2aec"],["/archives/2021/08/index.html","92ff3fb8b996a5730c5aba78c89d2321"],["/archives/2021/index.html","7052ffe025e444750c014ed50b927666"],["/archives/2021/page/2/index.html","6d1a1add01dbb6e2ec9e7d56cde30b97"],["/archives/index.html","ed9793adec9abb172734a5a32160cdcf"],["/archives/page/10/index.html","5c5dc96c84947ec291f79ffa71433492"],["/archives/page/11/index.html","811184bb6f2a30d941e5954e6e449268"],["/archives/page/12/index.html","277028506c7d77938dccc05587a37a86"],["/archives/page/13/index.html","525fa2ed92c2923bcd5e2d9793100f6a"],["/archives/page/14/index.html","4887f38af8af6b97d51754e0596b316f"],["/archives/page/15/index.html","ffe149c98c40e566a1201d1f316795fc"],["/archives/page/16/index.html","6be50afa5c7272049e01e16dbc65e7f8"],["/archives/page/17/index.html","d03f8caaa779fa6306d170ff487a0d39"],["/archives/page/2/index.html","01753e651cc02ee821161353aed1925c"],["/archives/page/3/index.html","f01bcea9a7571f3e734d07aa02e83a34"],["/archives/page/4/index.html","5101581e1ea8bce25f5509b211cf0d71"],["/archives/page/5/index.html","bc33e12fbc646d2ef67e22cd27d28ae9"],["/archives/page/6/index.html","644e3035b7e1b5e19049293297b409d7"],["/archives/page/7/index.html","372f2376260476979584957484819501"],["/archives/page/8/index.html","b358e46f07e00c7e26b46dc31ce08182"],["/archives/page/9/index.html","c5b75b68e5a088cfc040177c9a18020f"],["/bugly 上传dYSM文件小记/index.html","f724a90b4af530b5d055fd5e820d9392"],["/categories/Advanced-Swift/index.html","871bb71e3da66d5e7c891906c933975a"],["/categories/Advanced-Swift/page/2/index.html","e8cd03db3b5c91925df38ab50c5b6350"],["/categories/App-Architecture/index.html","d3941300a04a92e2ea3b550092c9484e"],["/categories/Array/index.html","adcc46cfc20ea77ac631b50bd0686233"],["/categories/Codable-protocol/index.html","4d53505f17349ffa65c40e49a6f5f014"],["/categories/Combine-framework/index.html","826788c6fd9150cd7ca53ed40c6fb70a"],["/categories/Combine/index.html","d56e162733b50870be0a9e1f3ff5da07"],["/categories/GRDB/index.html","b2a9757717af4919bcfbe500703f6918"],["/categories/Go/index.html","a47a36a95e94cbe7b57847a36f0814ce"],["/categories/Grand-Central-Dispatch/index.html","12107910e4aba3a7857b787a807ed788"],["/categories/Hexo/index.html","593ae080844b0d454bb79838b1ec78bd"],["/categories/Homebrew/index.html","0c5f2cceccae234536c0b4395e0b8931"],["/categories/Linux/index.html","cd5e1852eb4606b162df5070d8d7c270"],["/categories/MySQL/index.html","a225101483292660be57ce2b2c4f7859"],["/categories/Promises/index.html","27cf74dbfdd0bb784a0825c7ef406cbf"],["/categories/Result-Type/index.html","7bd62b9126ff173a2fcdf716d47a91cb"],["/categories/RxSwift/index.html","2ec8aabd1c5f2f9da583b3a4d39fcb14"],["/categories/Server/index.html","b3a9dc5d761c9aca23a04548dc0dc53a"],["/categories/Sqlite/index.html","06db2f317c88788416c5a9515f8a3117"],["/categories/Swift-Apprentice/index.html","139935373ebf0430bef0e0155a86dade"],["/categories/Swift-Apprentice/page/2/index.html","39d1b993e37d41b567dd2d595e59963f"],["/categories/Swift-Apprentice/page/3/index.html","526c7ffe06c06d6a65871d1eb2748d53"],["/categories/Swift-源码阅读/index.html","a31c41ddc289921828265fd8e2ec1bd5"],["/categories/Swift/index.html","a421f7d17f1c426402226d2c207c78de"],["/categories/Swift/page/10/index.html","9e7dda6bc447f8002012bf0a2417b941"],["/categories/Swift/page/11/index.html","9d2435c6abb962ae37dea8a4e954d276"],["/categories/Swift/page/12/index.html","877a7c1579a5e02df694bddc0f5cdcd6"],["/categories/Swift/page/13/index.html","ceacad8b378775f781b02cf7414604a2"],["/categories/Swift/page/2/index.html","09219fa5681f489010bf8ba9ac7a0a17"],["/categories/Swift/page/3/index.html","f705f8b6bba9e11cc5e88a7cebc3c8f6"],["/categories/Swift/page/4/index.html","6c84c934ea2d1e8d0fcca23b49ec7992"],["/categories/Swift/page/5/index.html","dd457241647b184b954861bab1af6fb2"],["/categories/Swift/page/6/index.html","8a7ddf4572d82b10a6cd4845dc542f1e"],["/categories/Swift/page/7/index.html","6fc99308a928b9de565c73773fb26480"],["/categories/Swift/page/8/index.html","8e0f69b8726a8657a7ad35acd8acb755"],["/categories/Swift/page/9/index.html","a089786386798f7e6b745987dbc6fe57"],["/categories/Swift5-2/index.html","c84808080b31794fe41bad3df5d7c778"],["/categories/SwiftLint/index.html","9549d690df8bac81a14bfae1ff3d5df6"],["/categories/SwiftUI/index.html","af0cf288407982eae7e116077c18e5db"],["/categories/UICollectionView/index.html","ea6de2a1c4cf74b4e08bb9b8ea9ad68c"],["/categories/UIImagePickerController/index.html","85509f7612aa8d0e47c0f7c40f1b15ce"],["/categories/UIKit/index.html","3e4a426bacd631da9751df9ef440647b"],["/categories/UIKit/page/2/index.html","2be911c1bc8d60627fb6316b386d0191"],["/categories/UIKit/page/3/index.html","54b709342e693d63f1cc8f84837c2806"],["/categories/UIKit/page/4/index.html","7e848c9304d3a2f0fe5e13c54d43ac4d"],["/categories/UIKit/page/5/index.html","b10f541f531799aff78dffae8cd89e79"],["/categories/UITableView/index.html","ba78ef56774060210d5e5663688afe52"],["/categories/Ubuntu18-04/index.html","3a460e5f40e358741306df13604430e7"],["/categories/Ubuntu软件源/index.html","941ae20e154a76deefc6f376169b478f"],["/categories/Uniquely-identifying-views/index.html","e0bc8c979e6fc147a1dde183b169ce58"],["/categories/VIPER/index.html","85fd740e21fef9b7ebc40baf750ea5ec"],["/categories/Vapor-4-0/index.html","ae8e44837d70594fe15a6ad1d8307b4e"],["/categories/Vapor4-0/index.html","57125e20ac8c2615cbc178c21afb97da"],["/categories/Vim/index.html","d253489ade2d55af39c545ba1bcf8ab6"],["/categories/WKWebView/index.html","b8e850cc5a673ca3b6f599261340ee17"],["/categories/Xcode/index.html","8906e9640faa9d9eead9dd1a02e7988a"],["/categories/appleOS-Networking/index.html","2d8bb3651f55d8f8ea5098a425ae114a"],["/categories/bugly/index.html","02f6ee1279b8d25a191eeb3aff44d4d9"],["/categories/enum/index.html","f1d9daaa88f708fb20389bb924502ff0"],["/categories/git/index.html","72835a8a9d26340641458f258da15de3"],["/categories/iCloud/index.html","7a879e1a5ec5df4630e8c6a18dbc06c1"],["/categories/iOS/index.html","816fb1beec7a510ec1250b97bad81dbb"],["/categories/iOS/page/10/index.html","07f5d36418a859c0e1cb97a559a3f2d4"],["/categories/iOS/page/11/index.html","96540d5501a81c7c7139ff6676b96b20"],["/categories/iOS/page/12/index.html","46119e22deefbe1767d7e258c19d6055"],["/categories/iOS/page/13/index.html","f36b32b9083cc6439fd6f2fff54c79b2"],["/categories/iOS/page/14/index.html","ff39b8c765b4a120e3d27b588390363b"],["/categories/iOS/page/2/index.html","bc1b3c389d900a7d1408556ad0fb6bef"],["/categories/iOS/page/3/index.html","4637981938cd5ea2acc478ca832f2499"],["/categories/iOS/page/4/index.html","3f5952634dc5f9b0a531101975379dfa"],["/categories/iOS/page/5/index.html","a39a12df6f625132398a1ba744de0e17"],["/categories/iOS/page/6/index.html","8edb360f3defaa7a208edbe43aeeed18"],["/categories/iOS/page/7/index.html","bd81b6055200a58bf44b8f9921c29d59"],["/categories/iOS/page/8/index.html","e4569032e3ce9efac60dbf6d9809688e"],["/categories/iOS/page/9/index.html","770466f556907c39a04ce2f096f54307"],["/categories/iOS面试题/index.html","b0c6c3aafb692d7a503de344b1085df2"],["/categories/index.html","806824540a404f3c0c90c1adf949afa3"],["/categories/random/index.html","e74ccf45717883b4ede56f7a6aff7434"],["/categories/三方类库/index.html","1e504408c177ef805cc8577fd79a23b8"],["/categories/函数式编程/index.html","079ea64e0abdb3f5fb266d806adbdc80"],["/categories/子类化样式/index.html","6fd061a3037e6b4e4317709beab07e88"],["/categories/开发技巧/index.html","1ff81fd78277fb160e3d5cac005c820d"],["/categories/开发记录/index.html","b0de15b706a2507c4c0295b3f79d6e50"],["/categories/技术支持/index.html","eadeb8039c2edf8d676ac0365728174b"],["/categories/数据库/index.html","bbafccfa4a4e89aae8d36075a1705f42"],["/categories/架构设计/index.html","b7770cf44b5c6baa87b53b33628dc9b1"],["/categories/测试/index.html","fc9e378555900a1be4ef618ae2e0f4fd"],["/categories/用户体验/index.html","45364370de5a9165cd36a31fb059ef27"],["/categories/用户协议与隐私政策/index.html","266681480452f0c885a862a4cbe3d8f3"],["/categories/设计模式/index.html","bfc733159d5401cd18313fb330537d45"],["/categories/设计模式/page/2/index.html","6c949a256077cd0c82bec8c15e249de1"],["/categories/设计模式/page/3/index.html","ce906c82c426faee5807b99b04a16b81"],["/css/main.css","9eca93a02606c897a59688828793c804"],["/hello-world/index.html","299686b2744e65acafe7b6a94c870b23"],["/hexo部署失败/index.html","ffe995bec50d20c3d565bb35c4e52bb1"],["/iOS VIPER架构深入实践/index.html","0c0de2bad8f7c259ac08cdd18e6bcc55"],["/iOS navigatinBar的isTranslucent属性对View布局的影响 /index.html","2c517a047afe24ce2410ddb31e844eba"],["/iOS 自定义视图，输入表单和错误提示/index.html","74a4d8e2f082281ae70a49c76db9a188"],["/iOS如何使用iCloud文档？/index.html","37ff24e314eec6f7953c38cc00510d4b"],["/iOS子类化样式/index.html","f9bbff860512055cf261aa13100f2555"],["/iOS开发记录<一>/index.html","6da1ddcadbb5381d9ed88f98109a27b3"],["/iOS自动化布局编程/index.html","0283537a5485df80b8b190b14ce20268"],["/iOS自定义转场(By Swift)/index.html","f2af85f0521a3f318106c7b1b9c47f28"],["/iOS项目架构：使用VIPER/index.html","bdfe4346669a4acc8f4fdf75101b98e8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","0b1f35297f71cd611e189ffc7b15b454"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","8ac7ee69cf20a53f6d2f2c703a0780ec"],["/page/10/index.html","138433aede1eb1ce47184d05d3728e22"],["/page/11/index.html","e491fcd90629f554f0b5c604268feeff"],["/page/12/index.html","25dbf3f1fde060698b0fe8ddd44db68a"],["/page/13/index.html","477bcb192d97a795b8a65ac275931b4e"],["/page/14/index.html","d333aa4f698e106d2e7c91d24edc16fe"],["/page/15/index.html","09571b36a37cca275d2abcd5f961a1a5"],["/page/16/index.html","991360f3aebc41290fad8c8a7a355f3b"],["/page/17/index.html","75f7358c930cc49730590439a445448b"],["/page/2/index.html","c4538173ae7c0500dd68a354b9fccfcf"],["/page/3/index.html","a5ad942de3819d8c7089af6912c060e7"],["/page/4/index.html","6fdb6b2627aa99cc2d8e08d4cc142a00"],["/page/5/index.html","ea68b591383207287c54877e62d241e7"],["/page/6/index.html","ce7e79791491de5a0bb7a82694b7a7af"],["/page/7/index.html","11fb80b262e35e53c8de5adef455a525"],["/page/8/index.html","64dc34f9426cb9891c50e6c43666948d"],["/page/9/index.html","a40811322becbd45082783363c266c9d"],["/schedule/index.html","70b1e8e57954fbe40873ab55e30f48ea"],["/storyAppPrivacy/index.html","6ff34439a357bc677aa3d0c954c157fc"],["/sw-register.js","aa69185920c990232805e3b1c3b89037"],["/tags/Advanced-Classes/index.html","22e7a7eee26bf952dc3e568a18c2e4ea"],["/tags/Advanced-Swift/index.html","8cbf728766a4a94401b5bd506fc3362d"],["/tags/Advanced-Swift/page/2/index.html","b38e89d5ed6aedf790caa7d226570035"],["/tags/App-Architecture/index.html","f765995c2eb0eb44c93f594611121d51"],["/tags/Array/index.html","378f826e4fe738526a889ffdfbf06069"],["/tags/Arrays-Dictionaries-Sets/index.html","c2e2737e7b7833b014a3a9e0d41fb680"],["/tags/Authentication/index.html","b35b4180e030c452ec2ea45c559e3b9e"],["/tags/Build-in-Collections/index.html","a1bfc698c05dd173d590d2d01120912a"],["/tags/Building-Your-Own-Types/index.html","36c1d1aca9c3babb72af0125a2b2eb49"],["/tags/CMS/index.html","924844715d99b30aea4cbb27c659f08f"],["/tags/Classes/index.html","20d1b50d694a4cf21fdbc8d3d3e8d24d"],["/tags/Codable-protocol/index.html","cb84a5a4313eaf257680bab194cbec07"],["/tags/Collection-Iteration-with-Closures/index.html","643891127e8fa4ea1683dc040399a221"],["/tags/Collection-Protocols/index.html","0970ce12b699e21d7d07929737c46881"],["/tags/Collection-Types/index.html","bcf3b4581ed40d24268fbec828054136"],["/tags/Collection/index.html","66787ec440210174eef95dce578a273a"],["/tags/Collections/index.html","d090a62b340efd23deea56b37c95a4ed"],["/tags/Combine-framework/index.html","8d8abad1e5efb90af0d17dc2fa9c60bd"],["/tags/Combine/index.html","d2e053a9ed2127a2936c3863e5a6cb21"],["/tags/Dependency-Injection/index.html","9a5fdf93efce3f2ca2b806dc1d541070"],["/tags/Encoding-Decoding-Types/index.html","4b7ac7f8decb14c5a631a44ee8e46455"],["/tags/Encoding-and-Decoding/index.html","733227db4c2f1586b9f900812140f609"],["/tags/Enumerations/index.html","8dfde3241415a99880776e296f2f95e6"],["/tags/Enums/index.html","b967b30e40e87171a340428646bf12a9"],["/tags/Error-Handling/index.html","aa8028ba3f1cc15aa7dd0b369dbcc654"],["/tags/Functions/index.html","1507697381a0169a388a29024bd93096"],["/tags/GRDB/index.html","90ecf19bfc149df38694b467964ded21"],["/tags/Generics/index.html","546288bb8b05d5193df937c68d7b926c"],["/tags/Go/index.html","6352ae3d6d94c20bf60aad83ce77491d"],["/tags/Grand-Central-Dispatch/index.html","9b9b5a88bef612ec34c1936727178ff6"],["/tags/Hello-Vapor/index.html","bc4703ee41823397ab204bdede230f9a"],["/tags/Homebrew/index.html","3be8c2631a0822536f850cfe941ddf0f"],["/tags/Interoperability/index.html","27a6b56999264489bd142bc287267773"],["/tags/Introduction/index.html","b94c629839a3a6e2e0d413f3fe66e0ee"],["/tags/Leaf/index.html","873f4928a5ff6edd34c45e42bbf59fa5"],["/tags/Linux/index.html","78baaae8414e29402dd32f1816446e35"],["/tags/Methods/index.html","fe913bc9d466c6a886d34be07ccae06c"],["/tags/Modules-And-Hooks/index.html","0562530354a4318b73aba822820ba1a8"],["/tags/MySQL/index.html","832e216ce4d928decdd8ede466bbfeb2"],["/tags/Optionals/index.html","42e545342138f7eab9d971b290bcae6f"],["/tags/Promises/index.html","85bcc233c8766d97e1accdb65023ee94"],["/tags/Properties/index.html","1493065b4b006004fe705aca51016af3"],["/tags/Protocols/index.html","ed2aa8dbf5eebf41f1b627a3a1a94e0d"],["/tags/Result-Type/index.html","d4833390a35cba5455530704486e14bb"],["/tags/RxSwift/index.html","9c8ba220ab9f9f161ba27dff9052f699"],["/tags/Server/index.html","f19be31ec0a91b0b7d4cbb15e72865b8"],["/tags/Session/index.html","b0f428ee883ebb6f3ead2c9bdffdc128"],["/tags/Sqlite/index.html","cead2d591a95d628518335aca239a57e"],["/tags/Strings/index.html","03e73c3b96ecd064f1fc159077f69c31"],["/tags/Structs-and-Classes/index.html","d93714bb5ec9bcce44e77ed37ccc892d"],["/tags/Structures/index.html","af9abe52ce0d439e9f6b2f6853f7cf78"],["/tags/Swift-5-0/index.html","bffc7dbe0a640da6b5adaf94d2384f68"],["/tags/Swift-5-0/page/2/index.html","e387b4285cc7c60693741c642b1f40a2"],["/tags/Swift-5-0/page/3/index.html","9a957f3bd1611355885b2aef6e76da55"],["/tags/Swift-5-0/page/4/index.html","6bc6af15366c664a0edac09ec817c538"],["/tags/Swift-5-0/page/5/index.html","c96f04cb6339d3de0dab11c0bcfc02ef"],["/tags/Swift-Apprentice/index.html","35881fd8ffc6af4791cbac4e3a47c0ac"],["/tags/Swift-Apprentice/page/2/index.html","3dc28d7e190697eb41194dbda09584a5"],["/tags/Swift-Apprentice/page/3/index.html","31576a6017696d80e923febb29b358ea"],["/tags/Swift-Package-Manager/index.html","ee06338acbbf836accc7d62e3baed7d5"],["/tags/Swift-源码阅读/index.html","6ec0ec1303a31ea2feed8fdca7829b8e"],["/tags/Swift/index.html","f639462f35428aad3c6fab7018c87d2f"],["/tags/Swift/page/10/index.html","143fd77d6f8446c72eb9efc97394f08d"],["/tags/Swift/page/11/index.html","20063e6c94fe08dca98c45c3e04ebd8e"],["/tags/Swift/page/12/index.html","509446a5ec87eb61e311bc9848e58596"],["/tags/Swift/page/13/index.html","cbf54d9c0cad344b05079f4f5a897804"],["/tags/Swift/page/14/index.html","9bf5711a11d5677b734288bc01ca2fba"],["/tags/Swift/page/2/index.html","918f57fe0d33862d17cd9ea0c448ae83"],["/tags/Swift/page/3/index.html","92afa04cc18fdf05e894dbe1aa0ee421"],["/tags/Swift/page/4/index.html","9a835399e5bb6066947ec1de42472082"],["/tags/Swift/page/5/index.html","8e8e83b478ba49fbfa9c82c58d87eaa4"],["/tags/Swift/page/6/index.html","353dfa86d92e8b954dd889406b34df46"],["/tags/Swift/page/7/index.html","9949e1abea0cf303ec27854502a6fa4f"],["/tags/Swift/page/8/index.html","94672e6513744c47114cc7090ffbaeea"],["/tags/Swift/page/9/index.html","7a166dc5544fe5caffcd93fe2b2a8d55"],["/tags/SwiftLint/index.html","683aa4c1c01c9c4e17751d554a2a28dd"],["/tags/SwiftUI/index.html","ae14abead631f0eb982fbbf928cb4fcb"],["/tags/UICollectionView/index.html","f855579f7a31355a6846f7a249905389"],["/tags/UIColor/index.html","d8251077684f9499656fa2257d4dc4dc"],["/tags/UIImagePickerController/index.html","8761be66fec32a5118a52043ad5575d6"],["/tags/UIKit/index.html","d5634601ffad5592ed79c84634ae489e"],["/tags/UIKit/page/2/index.html","3549fb5a9bbc176347f65a9c1ccf2073"],["/tags/UIKit/page/3/index.html","24fb1e5b3f05bf04777fc5187fc30ad5"],["/tags/UIKit/page/4/index.html","c1298978bb452ef1d02a16efb3908e4f"],["/tags/UIKit/page/5/index.html","b680f73e6e2129ab1664db0a87df4812"],["/tags/UITableView/index.html","1e2ce38e330f5a8b2eb6db78bb198205"],["/tags/Ubuntu/index.html","55e22e9a80200ff04cb348115b165715"],["/tags/Uniquely-identifying-views/index.html","1552c7f96869baa84e1d0165b4740fca"],["/tags/VIPER/index.html","b8d90decd7c11888235bbb598ccf60c9"],["/tags/VMware/index.html","8dbd139518fbe6b7995a24b942179fb6"],["/tags/Vapor-4-0/index.html","342d134eb3ca30928a12d1104cd09e87"],["/tags/Vapor-初探/index.html","7a7ca45219305169e1e58854f005505e"],["/tags/Vim/index.html","1386496de6295851c79d6a5c57048959"],["/tags/WKWebView/index.html","b805e7674e25a82a816dd7485cd4e4b6"],["/tags/Xcode/index.html","1a2ff319906bd6e91d9e02c276db0a4d"],["/tags/appleOS-Networking/index.html","05da40ea262d2adecd72f4d1fae9b0f7"],["/tags/bugly/index.html","60fa51f43c063f74938502e75ae112e3"],["/tags/enum/index.html","e95349f57f0275d96e2543545da9b037"],["/tags/git/index.html","b2208c744dfcb14091329f019f2fb01d"],["/tags/hexo/index.html","57d932528b1922978238541dfbd42eba"],["/tags/iCloud/index.html","060dc3b0a754a2a6f61bdc1f380bc41d"],["/tags/iOS/index.html","0e91c62fe0e1d62b64f6478f6fc00bcd"],["/tags/iOS/page/10/index.html","cce5c2bf543023a5ec091e9cc922dc4e"],["/tags/iOS/page/11/index.html","eea925757411769301bcbae7ed14ace8"],["/tags/iOS/page/12/index.html","663fb482b050ea37fc3a4afb52d66ed5"],["/tags/iOS/page/13/index.html","0b4f4d838dc1d34082fa60adba0cba40"],["/tags/iOS/page/14/index.html","dcd88c21fc312397c06aa54e8fa45c05"],["/tags/iOS/page/2/index.html","1ac430ab3f3f143ad5f4bf349191cf10"],["/tags/iOS/page/3/index.html","2fa63bea5f6bd86f7618222cc641c1c8"],["/tags/iOS/page/4/index.html","fd8cb350e6bb8c22b336de0db00dbcaf"],["/tags/iOS/page/5/index.html","749fae503ac677d04a6fda6dc67b7558"],["/tags/iOS/page/6/index.html","0896307da67b84bcc98e2d2576a2b68b"],["/tags/iOS/page/7/index.html","19523f59ac6426f35d42b02006e4f3ff"],["/tags/iOS/page/8/index.html","1a8d54f3f0d17cfb0009359b78286da0"],["/tags/iOS/page/9/index.html","860d4f7af5116daf48489b04461e2fee"],["/tags/iOS面试题/index.html","de19bd842b60dac8ce403e389bde96c6"],["/tags/index.html","ad59ec98784998789a290c93bd150239"],["/tags/non-optional/index.html","fec989e48b806b7aa28b0c07ee244320"],["/tags/random/index.html","cda297875fc8b7032272bd138d7dcd36"],["/tags/transition/index.html","c530985d260cf2e6602c2824824e2fc9"],["/tags/三方类库/index.html","57496b98c918dd140552e5b2a24787e6"],["/tags/依赖注入设计模式/index.html","2b66109082b214d2a8ecf70b009d6cdf"],["/tags/值类型和值语义/index.html","5d4773b5bf0f2a5641e1c7ba47413fdd"],["/tags/内存管理/index.html","b1d06b63f2db7593e4121922a7147908"],["/tags/冒烟测试与回归测试/index.html","bcc2b0caec8cce5acccef623dc0b1f2f"],["/tags/函数式编程/index.html","0b8d7d6c32c79cfd960e9584e2b22029"],["/tags/创建博客数据库/index.html","cb2c51762cba2167913678dc23c8a069"],["/tags/初始化模式/index.html","acc187b58081ff65d813e6782c7bab10"],["/tags/单例模式/index.html","3071336b32d4abe32285ca52f99fa2a1"],["/tags/原型设计模式/index.html","ac0ff24d1fa8b1fd272276751d1911f1"],["/tags/命令设计模式/index.html","01cdff952f572dd974b3894b5cb54d24"],["/tags/基本控制流/index.html","2b9c3e0959f086033174b9c3cece42da"],["/tags/外观设计模式/index.html","9cc54f09f5babea215b6381c2debbeb1"],["/tags/委托设计模式/index.html","5949338d13de78f05e64bb1708cf6f72"],["/tags/子类化样式/index.html","2626e3d3153be0e7a048b54cb7e01dc9"],["/tags/对象池设计模式/index.html","e17dd11c88fbf225ace4247c7122d835"],["/tags/工厂方法设计模式/index.html","8dd367505d8b947b77410d478571bcc9"],["/tags/工厂模式/index.html","184cf208492cb65eb7de76d1e7f70af0"],["/tags/工厂设计模式/index.html","3408376de8d5324d9a89354e27df31fb"],["/tags/开发技巧/index.html","44aa4bd44423d86f48e815a7fd649a16"],["/tags/开发记录/index.html","403ca0e7ec7f5e7370d15cec962d9d7e"],["/tags/懒加载模式/index.html","4a8ac48ea038d79692e1e6dc6a298961"],["/tags/技术支持/index.html","e8bbabde20b50fd71792d8d1edd97415"],["/tags/抽象工厂设计模式/index.html","9389f8c49617eedf7c0edff4e96e54aa"],["/tags/数据库/index.html","dbb280d8122280ed2223651d6624d174"],["/tags/构造函数/index.html","712fecaa1bf7c1b77feb04a5dacbab75"],["/tags/架构设计/index.html","2c9668f9dcf48d0231c46442a95b2a8d"],["/tags/模式匹配/index.html","30336ad800c86f27498406c50ebf6dcb"],["/tags/生成器模式/index.html","30badcd3a276b7b3084bebc2fa55878e"],["/tags/用户体验/index.html","059cbd5db1acd7d282512350a6572976"],["/tags/用户协议与隐私政策/index.html","533656a075e4f80ce531c7f2f96669c8"],["/tags/类型与操作/index.html","29ffdfeb22c4c8564eac70e494e4f1f4"],["/tags/自动化布局/index.html","875b6526fe76d11a50a393e23f81cb30"],["/tags/自定义UIView/index.html","ca35c2e3ab3d88ee1560cde0bb665812"],["/tags/自定义转场/index.html","67677bd6b40ac2e8ed946692cd881aa2"],["/tags/自适应布局/index.html","d753b76ccda365a0809983f066b6ed54"],["/tags/表达式、变量和常量/index.html","cf57806bbadc66885ca25190e0273a78"],["/tags/设计模式/index.html","5c2afcfddd91079dec9c22aff5a5b33f"],["/tags/设计模式/page/2/index.html","18d7d75fc3c278d49f939c78f1e26015"],["/tags/设计模式/page/3/index.html","86570c68ad3ce2e6cce2b46e0b827eca"],["/tags/访问控制和代码组织/index.html","9ae518dfa2e2c3f55964f57d5cc426e5"],["/tags/运算符，下标和键路径/index.html","91dadb03f16994565cd643ec8838ea14"],["/tags/迭代器设计模式/index.html","6b9674c97f97e717a0c4cc3211693d47"],["/tags/适配器设计模式/index.html","5f8d654a043d60ba9f82f2e6be6222e9"],["/tags/错误处理/index.html","01d628320fa129a52f7551700424e471"],["/tags/静态工厂方法/index.html","684d96e059a5a03317b1105caeb95eec"],["/tags/面向协议编程-OOP/index.html","91077d9a347b2b34192ed981f58c1dd2"],["/tags/高级主题/index.html","0ce2b6b7593496dc397be97b1a56d288"],["/tags/高级协议和泛型/index.html","6892faf15bf603bd5fa19567e4313e6c"],["/tags/高级控制流/index.html","f995157e510971509840314f7289a325"],["/xcode 常用的快捷键/index.html","b4c860be6dde617fae132721f5e85cd1"],["/为iOS应用构建输入表单/index.html","71a7dd477c1016557df9985176c5d964"],["/产品开发的幕后花絮/index.html","c386e019120464f452436bac8b0e8030"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","6881d85ecb126997bb95907dd11588b1"],["/冒烟测试与回归测试/index.html","ab6f585999b901188cedc28fc71e48dc"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","e9ce561a2857096a17d07aff7f0281be"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5378170465cfe019f722b5517cfa0c0d"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","9aed5165ff28370fd19b1e346907d507"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","05363348aed575abd8beff8b6eb4a3b3"],["/在Swift中创建自定义集合/index.html","139f8d8aeeb3d739fd0435caa7416243"],["/在Swift中处理非可选选项/index.html","ebcd805714b7bbaa9a63a98fcfa1d831"],["/在Swift中生成随机数/index.html","b3e8b1fdbc6e12354d2d9e89dfc73777"],["/在Swift中重构单例模式用法/index.html","fb23dfc74eb9cc607cd9b9a2775e01cb"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","2b8486fabb2c1de369a9cea844269823"],["/如何为VIPER编写服务？/index.html","0be3467e939f703d99dc3ddb9b9efcb4"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","cfac8471ca910eccb0ac57a30e3101ad"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","caa520e502993666fe0e247c096053a6"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","cdb859f038fde3d490f8d537d30ebf97"],["/如何使用VIPER构建SwiftUI Apps？/index.html","70e9a14118321a692d8c03c4af13fdd5"],["/掌握VIPER架构/index.html","014eec6812f93061bf0df21a4cb1b859"],["/揭秘 WordPress Hook 系统/index.html","f0aeab61645125a35aeebeae2908fb64"],["/比较工厂设计模式/index.html","32d3b4b3311b56b1a3a569064ba73191"],["/深入了解Swift中的Grand Central Dispatch/index.html","fbc439822b5d0176a066cd6a4ce30ccb"],["/深入研究Swift框架/index.html","7a003feafdb660c1f4e9d3a38315d82e"],["/美豫直聘技术支持/index.html","cae8b50640af66d2248aaef486504801"],["/美豫直聘用户协议与隐私政策/index.html","96bed414a3cb333f950d3b2f43a836bb"],["/适用于iOS开发人员的VIPER最佳实践/index.html","ed5626fd70c653d1dc70954fb46fb810"],["/选择Swift而不是Objective-C的5个理由/index.html","62e68a1478a46212cf1c4302c1a7453f"]];
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
