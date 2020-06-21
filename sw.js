/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","11fca7384d387776938217ec8df8ab03"],["/2020年iOS面试题总结(三)/index.html","d768383dcbb64ce5211920e612587037"],["/2020年iOS面试题总结(二)/index.html","2d7419833e5124fcabddc591453b069f"],["/Advanced Swift系列(一): Swift 简介/index.html","bb91ac3a4c6eca5221f78b624dec21b7"],["/Advanced Swift系列(七): Strings/index.html","a43b6bbac299da692464276580beb938"],["/Advanced Swift系列(三):  Optionals/index.html","33a84e3734ef33379532e4f39222ba7c"],["/Advanced Swift系列(九): Protocols/index.html","facd004e8cedc22d960433c6e36dfcf1"],["/Advanced Swift系列(二): Build-in Collections/index.html","c17ffb67a9e2a2c520456be0546259b8"],["/Advanced Swift系列(五): Structs and Classes/index.html","965e056b779b8b852eb9a6bb16c74258"],["/Advanced Swift系列(八): Generics/index.html","a292d59718207023c40eb6c95bf72af4"],["/Advanced Swift系列(六):  Enums/index.html","6a33bd70229d99021781f45bda13fcf9"],["/Advanced Swift系列(十): Collection Protocols/index.html","f10f431c668bb73002c02226f229693d"],["/Advanced Swift系列(十一): Error Handling/index.html","4fdfbe2f24e6b256a78607929277c12c"],["/Advanced Swift系列(十三): Interoperability/index.html","6d18bed550268e341ddd208a0bdb830c"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","d3187d60c7ff976925472734ed772118"],["/Advanced Swift系列(四):  Functions/index.html","ae4ec242d5cf5624997363f6adec9215"],["/App Architecture系列(一):  简介/index.html","96bf754ecca0c6f06dc3d097602bc170"],["/Functional Swift 初探/index.html","287c2cee634c8a395547085518cdf4b1"],["/NSCODER和SWIFT初始化/index.html","5391134ff7d2b064ac0ec486e5644afc"],["/Swift 5使用UIImagePickerController拾取图像/index.html","c74a187fd238d2f4db1f89f5a34ee0f8"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","cc74565cdb937b07755984898ebe4224"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","dcfe3a25e26d7af5b42adb485408bf8c"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","f89810eff772f79a4556cc64fe97c2bc"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","2f1e0abf16ef007bb5ef3aa8440a8074"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","0f32ae516d5989d2d0a850fce43545f6"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","a18a9dc510be784f1c63295e72f11e7a"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","17f31adf3c8446b0a0c103530a3c73dc"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","bba419aeee5777e57983110c944b7237"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","45222e1c3116ff2372a5825013b91718"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","2b60993ea5d10563c790116a685e99ad"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","fc57e16ac33f63a430914491b075d598"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","ddd3803cf64a717a0b4eeaa1d3db5842"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","90044a45503f4cbb48af98ec9b3cca2a"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","56f6e2e3226cfd7f35eeed2a4addef48"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","95a7a25fac046a23b5e45b03bf0df4c4"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","c634918161f1fb5ef36536f3c2c4cdcd"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","967b9f489f72043f7b88c5d92378516d"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","df110b68a6a1ac061a2316990543457e"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","1f44f5da8f3f263bce7540474b831d1b"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","fab5094f27cd342869d8591d8394af20"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","d49af2cd43e9410ce6b51b4b18e0ec6a"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","03153a4d5b443284e921574b8c73d612"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","5b22342d673f9b37e6d9ebcd8cd6e973"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","97108d7b90c26ed6d75b95d85fd7e7c9"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","65d3072ff37b98c8fe3801bc9966e895"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","bfaacb3103887c01bf0194c3daeaaab1"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0afb9500e76f2d836cc8949480acdda6"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","a6d41ff3ce13980be24f7b221d36c524"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","d7d7fda54808b131d15309008a5eb6e1"],["/Swift CompactMap vs flatMap：差异说明/index.html","f1e8a12d2a5d409cffd58abe46391855"],["/Swift Grand Central Dispatch 深入实践/index.html","8b27ac1f5ea24d6575f9528b26d40891"],["/Swift Lazy属性初始化/index.html","b17a6c43977916ddd7eaed431a4ce882"],["/Swift Promises 初体验/index.html","ca76ff19c61bc0d5f2b46e6f0dc802ff"],["/Swift Promises 探究/index.html","3196666ef4c4e8d75402c84fc4147db7"],["/Swift UICollectionView使用指南/index.html","31a2015096c0526a1f460bd3cbb87045"],["/Swift URLSession 和 Combine framework/index.html","6836721e279d4f4136b8cfb4ceb5e6d3"],["/Swift 唯一识别的视图/index.html","6d34d170cff364271c256c333de6f424"],["/Swift 如何学习现代UIKit？/index.html","fe4f600530d6ec163af242b14d22aff7"],["/Swift 用 compactMap 替换 flatMap/index.html","36e29df3d01f44acd6b69946e58530a9"],["/Swift 选择和播放视频/index.html","1592dc7a9bb63ebd0ad8b33e829bc8a2"],["/Swift中UIColor最佳实践/index.html","8b8d0239dc09662994fec66496fafd3f"],["/Swift中快速简单的工厂设计模式/index.html","b35eb689e86499de4031bca1deebf77b"],["/Swift中构造函数与静态工厂方法的比较/index.html","769168a0041c9c684518808fc7496bde"],["/Swift中的UITableView教程/index.html","2b070186238a96fd39f999df551a395e"],["/Swift中的懒加载模式/index.html","92768f6312d9782030a4b885a17967e1"],["/Swift中的模块和挂钩/index.html","2264075c43bd533ad9703651b553bc75"],["/Swift使用布局锚点添加约束/index.html","a64ce88f23dd6dee3da98d5f3dcff2e9"],["/Swift依赖注入设计模式/index.html","5d1b4dae8b608b60206822c29221b492"],["/Swift关于Dependency Injection (DI)/index.html","6ce4ff371da4b65e75b1f244c39c6737"],["/Swift初始化模式/index.html","2477995ed02c08abe8178bf79c68a9c8"],["/Swift单例模式/index.html","708bdfc9a75e6772c4505b8e67c9cd80"],["/Swift原型设计模式/index.html","9cacf8864f929e3c278dbfb9bf71c8e7"],["/Swift命令设计模式/index.html","60da9af264b0aa73f9b4588e5985f8d9"],["/Swift外观设计模式/index.html","9ad1bc6467bef7e01784d25a9d8fa22e"],["/Swift委托设计模式/index.html","92a265bf8f3ed16c42044215c1e81aa8"],["/Swift对象池设计模式/index.html","9e553cc6d99b6ddeab250b5f690469ab"],["/Swift工厂方法设计模式/index.html","e664cf5c6f0a32abea0643a3c265eb4c"],["/Swift带闭包的懒惰初始化/index.html","d0b806314960b82a5f428c961e26d4e4"],["/Swift抽象工厂设计模式/index.html","c82cf93ffdf86b0f1ae88a41f4463869"],["/Swift掌握iOS自动布局锚点/index.html","a24bd8fa6c79db4023055fe7fdc655de"],["/Swift支持旋转的自适应单元格/index.html","d05b1ea23aa8631aad23eb608d3770ca"],["/Swift枚举值/index.html","c8e48eb9829fe619d512752f57aef028"],["/Swift生成器模式/index.html","2c01b3ba0fc0dfdde4dcda4d7c4020df"],["/Swift结合Xib文件自定义UIView/index.html","d260c5f5eaa3fbfd00267f684633a8bb"],["/Swift编写的20个iOS库(一)/index.html","7c3af0e3a844f044a85e9a094590a1d3"],["/Swift迭代器设计模式/index.html","0e5060b1b113683e49050021e74a26b4"],["/Swift适配器设计模式/index.html","68782020d6dd74c6403731e0e4d83e9c"],["/Swift静态工厂设计模式/index.html","da8580a962bd57b0d97d8fc0388b6b36"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","ee11fcd4f79ae88fd7ad3a91a2ece858"],["/UICollectionView data source and delegates/index.html","8a7c658f497a003d3629c285ddc9437d"],["/UIKit初始化模式/index.html","d948b0973f9d4ba322a1d6bd99fb9e64"],["/Ubuntu18.04替换国内源/index.html","73bec08c59e0e18bd1b3238d0c5a536e"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","6a3c9d51b8e9afec9a93f27806abc881"],["/Xcode扩展/index.html","b2d01886691527e696c9d9faa9058823"],["/about/index.html","df1f30887f10ddb16177f1c43d2e4d0d"],["/appleOS的Networking示例/index.html","1a16e63ed247243433976185ee497bff"],["/archives/2020/04/index.html","e8809cbaa8538c7c251c43d05ad88c7b"],["/archives/2020/04/page/2/index.html","9da4f866c2ba96325955585cfa22be86"],["/archives/2020/04/page/3/index.html","1a04c98e0e404a29e9d5c8b6c210f037"],["/archives/2020/04/page/4/index.html","1d93f0005e2eb8cff8f9740663001a36"],["/archives/2020/04/page/5/index.html","e17e9173440b54e6a75fbc8e870f6ee2"],["/archives/2020/04/page/6/index.html","eda856a93ef26cb062b5ac9ba8b2db6b"],["/archives/2020/04/page/7/index.html","88af8e7d8026be0438088624076e8520"],["/archives/2020/04/page/8/index.html","3942e8f4169cf2817c372fbf17e4aba9"],["/archives/2020/05/index.html","482fb1637b4f9cd2eaa8ab080da1e953"],["/archives/2020/05/page/2/index.html","d554142780d8669cac30b2ed26ac5a3f"],["/archives/2020/05/page/3/index.html","02b0528a2a397fa64e0e797a60511ed0"],["/archives/2020/05/page/4/index.html","95e17132a34f8def31135b6155484ee3"],["/archives/2020/05/page/5/index.html","18aceafddfa21c19d3ea741b1bd7894e"],["/archives/2020/06/index.html","c9dcf2d228c2a9ae6af58985c8bb77a4"],["/archives/2020/index.html","cd0d710039067881a0696bb991a1b162"],["/archives/2020/page/10/index.html","bdf1951db3810b364bfafa9ada6f0dd8"],["/archives/2020/page/11/index.html","5c560bc7af3c126d12f25557633f1506"],["/archives/2020/page/12/index.html","cf2ed454deb2c7c47f9f9627468a9e32"],["/archives/2020/page/13/index.html","d72ba824562eaca2f93dc6677984f929"],["/archives/2020/page/2/index.html","838580b8134c77cc704cc802e8115b1e"],["/archives/2020/page/3/index.html","a77db8d9d33b54e169d8130022b7128e"],["/archives/2020/page/4/index.html","dea5408356119a7f1c648343b9e35b39"],["/archives/2020/page/5/index.html","5ca2fb8cba1875614c79de7b3bc0e021"],["/archives/2020/page/6/index.html","1f9d8513c0ecf1ad33e476274e8c681d"],["/archives/2020/page/7/index.html","6f21020c637c856b367ab6ab1d60042d"],["/archives/2020/page/8/index.html","e63e77d4ced9316da58891dde88b1d74"],["/archives/2020/page/9/index.html","ea0e44f9511cde2cafcd844485e9e7f3"],["/archives/index.html","9e96bd4d6fdf4d7596b2b2974e9c8094"],["/archives/page/10/index.html","0cd3762319759575da91aa7393c95eef"],["/archives/page/11/index.html","db27bc14ca858f996f20fac43b53b323"],["/archives/page/12/index.html","cc2a590e4cab72b01633050b84e051f6"],["/archives/page/13/index.html","9bf9c9dcd13559be83a918b8248d44db"],["/archives/page/2/index.html","098ba5286de27bd3f4758339d2104b56"],["/archives/page/3/index.html","4f6051c111cc87a31604790cb91a5bc5"],["/archives/page/4/index.html","799b8bda48c3ced77775035616883896"],["/archives/page/5/index.html","6e8b02a563cda886203f7dc48eeaf948"],["/archives/page/6/index.html","3ab404afe4262212906afd6d8f51cab1"],["/archives/page/7/index.html","65694202a90c2cba57df1398e37f31a4"],["/archives/page/8/index.html","a2f6690768fd410b7c582f143605900f"],["/archives/page/9/index.html","46824462cf9f3329bdd2ceaad6253e71"],["/categories/Advanced-Swift/index.html","b08e16439b6fe3c54a150d6c313b3990"],["/categories/Advanced-Swift/page/2/index.html","e65dfa5a931b9a93ad07d9d6ade0819b"],["/categories/App-Architecture/index.html","b5d6c6af16fa45cdec534378162ce158"],["/categories/Codable-protocol/index.html","33355a043848fb1b99557fa08b2af883"],["/categories/Combine-framework/index.html","1eeda2ceb4c691e851204a7f286d9c46"],["/categories/Combine/index.html","e522c39d9f5ede905efe47c8160b6a46"],["/categories/Grand-Central-Dispatch/index.html","a8e09ac09bb8da7645b00f6293944de9"],["/categories/Hexo/index.html","ea494bd44b580f1485b55a640bbe646f"],["/categories/Promises/index.html","4c7f8960404c30619131576e0e75bf1f"],["/categories/Result-Type/index.html","2f501d34748cd31ecf4d4cf708e9aed5"],["/categories/Server/index.html","620c0ea515464de514ad809b40976eae"],["/categories/Swift-Apprentice/index.html","12cba390d4f5972449b8e8de9f88c529"],["/categories/Swift-Apprentice/page/2/index.html","ea238ae3cd0165606ff52013c45f7231"],["/categories/Swift-Apprentice/page/3/index.html","c0499cedfcce15db1138a6375e64d759"],["/categories/Swift/index.html","4e2e6224df939075bc8bd961fe69dd04"],["/categories/Swift/page/10/index.html","c044c0ad7e7745b0c207255107654c81"],["/categories/Swift/page/11/index.html","b94103479455e9bc036da99a556da773"],["/categories/Swift/page/12/index.html","980942561270fab300ea11c0a3ce928b"],["/categories/Swift/page/13/index.html","37811466c4e242a31228625c28a37c16"],["/categories/Swift/page/2/index.html","f6a975d8b0f432d5a21c2a0e767e5855"],["/categories/Swift/page/3/index.html","554ca4ec0b7f1b3690c2e9723c704650"],["/categories/Swift/page/4/index.html","f5db3ef64ae9fc4f107377f16ec3a2e0"],["/categories/Swift/page/5/index.html","bd705671818dad00c45e63fe91f63eaf"],["/categories/Swift/page/6/index.html","007d7cdb4415dad06e5cfcef4bff2bcd"],["/categories/Swift/page/7/index.html","f6d97b8d6886de62e422017c2d1fb7af"],["/categories/Swift/page/8/index.html","e97a33c8ce8915369a50f35c2128b91c"],["/categories/Swift/page/9/index.html","d16de1aec7de14ec4a78c4ebf7627c32"],["/categories/Swift5-2/index.html","3f2abfede2d1388de0fbd1dbc2226c92"],["/categories/SwiftUI/index.html","cade2c6c17ea4017e5a73c4b11904269"],["/categories/UICollectionView/index.html","cdc1f1a23b808408466df0de57a6ff4f"],["/categories/UIImagePickerController/index.html","3e32456c505da3aae5d2473564cb6e23"],["/categories/UIKit/index.html","3714104b58442f025c7a8e08415ad33b"],["/categories/UIKit/page/2/index.html","19edfcc3d84020b43ba0221ca71716e0"],["/categories/UIKit/page/3/index.html","173be521f70c51f7f96a2ad5f701b0e9"],["/categories/UIKit/page/4/index.html","eca8b0559a0751419d1d3e4a45c0e419"],["/categories/UIKit/page/5/index.html","2158add40772049021083408fdd66a1f"],["/categories/UITableView/index.html","b8a1e0c0cee087ca41bb152904535c02"],["/categories/Ubuntu18-04/index.html","81c98525bbf32dd176edd3baa2459abf"],["/categories/Ubuntu软件源/index.html","88f7de1b4ebd29c2b2ee0429e26cc329"],["/categories/Uniquely-identifying-views/index.html","4e02a218e6e37fa45025d71b32d1db5c"],["/categories/VIPER/index.html","e012bba0c154f00cdbda89b310571a67"],["/categories/Vapor4-0/index.html","3dd293c45fb04465227c8550423ac6e7"],["/categories/Xcode/index.html","e7d870c00e647a4a39c2d321270db112"],["/categories/appleOS-Networking/index.html","d4efdc0b636b5551c535fb381ed17c00"],["/categories/enum/index.html","5ef0ad911276270616da0fd73ad7beba"],["/categories/iCloud/index.html","53b3464f349fa5db4f1e40afebbc9c2a"],["/categories/iOS/index.html","8ce38b86a81ad8f46b361be6177055e5"],["/categories/iOS/page/10/index.html","b2999c42172d3255550f492f7126747e"],["/categories/iOS/page/11/index.html","4bee36320ecee66952b54b3b3c054384"],["/categories/iOS/page/12/index.html","779569ff36b7d7a76e6e8470750c0636"],["/categories/iOS/page/13/index.html","b8778901b87d50afd964d5cad2b2fe98"],["/categories/iOS/page/2/index.html","4fffc7bbe95e48abc7c5e1ed2749bcea"],["/categories/iOS/page/3/index.html","2bca5cfd41d0131f88853ac5cbafd66b"],["/categories/iOS/page/4/index.html","c945095cacbaf4f8b74a09393e51705a"],["/categories/iOS/page/5/index.html","455b80779daffa3aca372094cbe13cb5"],["/categories/iOS/page/6/index.html","7c6ae016548587c58d4ecf056a468410"],["/categories/iOS/page/7/index.html","f18a41f1c0a62d9a2bb9211fc8acb7c9"],["/categories/iOS/page/8/index.html","22a7099b6f6d63af27cc07726e213f9d"],["/categories/iOS/page/9/index.html","4d7b2f6fce0e69a63f5ff4393aa8a95a"],["/categories/iOS面试题/index.html","907f3b815c1857e42614ec2e11318d0b"],["/categories/index.html","204c561ba4d1fba2038e1757adec8f1b"],["/categories/random/index.html","a39f967d031ebaa10975a8f1707024a1"],["/categories/三方类库/index.html","5000e81017469c32be811f344a7911a4"],["/categories/函数式编程/index.html","e13f5ea5bb89f1643531570b21b56f7d"],["/categories/子类化样式/index.html","8608a012fe45494e25274536b5e2593f"],["/categories/架构设计/index.html","27fbbd072c8399cd222f5ae51ff56606"],["/categories/用户体验/index.html","05150010975f486f9be0e1a373ce5b55"],["/categories/设计模式/index.html","eb69daed8344e8e9cfddf361baf4674b"],["/categories/设计模式/page/2/index.html","6ce2441619a6eaa161a223e1af9e9c46"],["/categories/设计模式/page/3/index.html","21c82a717a353401c35c435e47833c55"],["/css/main.css","48b44dddf19b03371b0c8b7740adcf8e"],["/hello-world/index.html","5e346ccdfdb94fc8ff41b7cf14ff072d"],["/iOS VIPER架构深入实践/index.html","ecca9dc106d9831fe89ae7e510f852fe"],["/iOS 自定义视图，输入表单和错误提示/index.html","974e2c2527241724d0ebfe6e1d1bc5f0"],["/iOS如何使用iCloud文档？/index.html","270657b21e08daa706e745dd8a9d351f"],["/iOS子类化样式/index.html","227f3b9b458392bc7c8c3d6314de0de7"],["/iOS自动化布局编程/index.html","b4e3dc62934855adf4da1c96f66daad2"],["/iOS自定义转场(By Swift)/index.html","314e5f08a234db8c01cf60e710c2875b"],["/iOS项目架构：使用VIPER/index.html","f16285039ae8a8b13c854df43b36ce05"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","f50176b6444ce52cd11e34a33bb5aef9"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","b608f325cd9ce3ace603a07dd151533d"],["/page/11/index.html","8548d3ae4d01c9f64b8e03ac58d6212f"],["/page/12/index.html","b5cd715672dbd191230be5aa97934760"],["/page/13/index.html","a515de8b4cf8dad1fdb2ccd1d7a94aa9"],["/page/2/index.html","3d3f705b2a4690404b2dbac309fb5c92"],["/page/3/index.html","c1e893349eb925c6169b12c254f8396b"],["/page/4/index.html","59021e2c2050f414a7a176b1f76110f6"],["/page/5/index.html","93cf4ad13790b4550c7320361a728080"],["/page/6/index.html","ad9e6933240749ea015f0cbc0d9edc19"],["/page/7/index.html","28110fd977b8e33d2b2e8e8fca6af3b0"],["/page/8/index.html","5040059f75dd6979718c647f409ba1df"],["/page/9/index.html","138812bce6ad7cf91d418b5d3850b2a6"],["/schedule/index.html","9a64b635abd1786dd4f0722fa93c8dbc"],["/sw-register.js","81c53a533619a63011f1b01da9014b8b"],["/tags/Advanced-Classes/index.html","b8894ec8b3961129e8d3a511330d8a43"],["/tags/Advanced-Swift/index.html","980944b8cbe1883fa9889fe369073f5e"],["/tags/Advanced-Swift/page/2/index.html","386db302c2b7f3e48ea48f1a8d1e7934"],["/tags/App-Architecture/index.html","6e019831c43c2a0a7aaea418fc631775"],["/tags/Arrays-Dictionaries-Sets/index.html","d7456d9a2c566d4ad7285d161f6976b6"],["/tags/Build-in-Collections/index.html","8893c58db94e2850a1f006f41b5771c4"],["/tags/Building-Your-Own-Types/index.html","c6eed2fe9312b6dc85dc28e3d48b6bff"],["/tags/Classes/index.html","79c6df6c2ec88b1d7dbeee42d2c25747"],["/tags/Codable-protocol/index.html","84ae7deb45ec873ec630d83743e2fcf6"],["/tags/Collection-Iteration-with-Closures/index.html","5be6a111dbc20eaf6988a5a7cff420e6"],["/tags/Collection-Protocols/index.html","7af7d06bec0f2198db25615728bb9e4d"],["/tags/Collection-Types/index.html","c5cd19d7d7b02752f623b20688052680"],["/tags/Collection/index.html","bd6dafedc356265fb807f4b42351f7b7"],["/tags/Collections/index.html","9f5f0d8e5b8795aa4273a061fc387244"],["/tags/Combine-framework/index.html","963663b38c5b84aa7d92265af7d0baa2"],["/tags/Combine/index.html","841c88a6af41e75428bba881898b2f3a"],["/tags/Dependency-Injection/index.html","6993ee03db35d5ad5174f2068c727ea2"],["/tags/Encoding-Decoding-Types/index.html","1699620c8797aace3473d26f602d587b"],["/tags/Encoding-and-Decoding/index.html","8d472e1d8c9ef1e4185a718c943279ef"],["/tags/Enumerations/index.html","053747a1b9caaf14cb8662c3d7a23526"],["/tags/Enums/index.html","39f567a2cb751c20b5002811a6e0d7e5"],["/tags/Error-Handling/index.html","305820519af4faa90dfe4c70cc503a74"],["/tags/Functions/index.html","68659774a4f66e4c06a5a77226c8afc6"],["/tags/Generics/index.html","ff8ca0b1dc41b3d0fe8e303592109ce6"],["/tags/Grand-Central-Dispatch/index.html","8cb59dc7be3eb86137aaf981d4dbd044"],["/tags/Interoperability/index.html","81a487686adb344e2b6b01f6a390f97d"],["/tags/Introduction/index.html","811bb63d7adf55462bb5378b4ad71e3f"],["/tags/Methods/index.html","cdb9d5a1388c524441a9336f8e8b2317"],["/tags/Modules-And-Hooks/index.html","760a2956c23e7af1f09d4b29aeb0a483"],["/tags/Optionals/index.html","6ca3c0ac68064449927a6d0324b15c40"],["/tags/Promises/index.html","e79917329aa6fa6c1d3bd2b072055a26"],["/tags/Properties/index.html","7bd0c600c4c822e64128c717ca352fec"],["/tags/Protocols/index.html","e4dd3f3ac7b133f64311b5c1cab40b2f"],["/tags/Result-Type/index.html","2fdbbc0dd5ababe138fb8dd32f769474"],["/tags/Server/index.html","05d5f2e9881e8502f6111c7760a9ab2d"],["/tags/Strings/index.html","e45104317ae052f965590ab9a0135158"],["/tags/Structs-and-Classes/index.html","ab11bf0d347bb327667256cfae433627"],["/tags/Structures/index.html","2070260e161df5fea705a63f47334b82"],["/tags/Swift-5-0/index.html","0ed0c4ab562e93fc571c59f0ca3434f3"],["/tags/Swift-5-0/page/2/index.html","4102a7cbbd156ddce41b75932fe77ea1"],["/tags/Swift-5-0/page/3/index.html","fb75e782532d68086c6be72a5f082629"],["/tags/Swift-5-0/page/4/index.html","78e92bb9f2c7aa6e09db03a108b2b09e"],["/tags/Swift-5-0/page/5/index.html","93936b36b7a6a6e76bb8ea4376c2dc66"],["/tags/Swift-Apprentice/index.html","f660d04ff6589af5137c8333eb61e214"],["/tags/Swift-Apprentice/page/2/index.html","002dbd0a9838e5a62ecd3ac98d662e4a"],["/tags/Swift-Apprentice/page/3/index.html","2719ab3abc7c39e5e0007e7778c79fdb"],["/tags/Swift-Package-Manager/index.html","504fb50ef24ce1a69b1f23826f198cc6"],["/tags/Swift/index.html","2f3823bf04db0142f8fc3fa88a34b911"],["/tags/Swift/page/10/index.html","ab2a3fb0e2b9a20f12ad310d1beb2220"],["/tags/Swift/page/11/index.html","8b960b6bb3a7afc39e09a37e31ec1709"],["/tags/Swift/page/12/index.html","5e2fcd5c17bfcbe8c7ee28f4c1ca9dad"],["/tags/Swift/page/13/index.html","897bc3f59ddac05fbb3c85b148dd5f8e"],["/tags/Swift/page/2/index.html","d6969cf6235ee003e8943a22ff4c5e1b"],["/tags/Swift/page/3/index.html","9ab276db8984bf04e396398fd9627dda"],["/tags/Swift/page/4/index.html","8e7ae026b01acf35dfd76add17826e87"],["/tags/Swift/page/5/index.html","65839a4a622c221866d45a818795045e"],["/tags/Swift/page/6/index.html","9744e85481a16a438bceef55e0975033"],["/tags/Swift/page/7/index.html","9864b68975c7a0cda13fd8408f71e0e8"],["/tags/Swift/page/8/index.html","54846586a17546973e6e53252fc5614f"],["/tags/Swift/page/9/index.html","5c4a3271bcefa7977a7a1f9783f40a5f"],["/tags/SwiftUI/index.html","f544d1f0433cd17e7bdfea5b6608dd31"],["/tags/UICollectionView/index.html","935ad70eedede874a68a01e6280666a2"],["/tags/UIColor/index.html","1150f99ee166eac0cb6d393993ba97f4"],["/tags/UIImagePickerController/index.html","0745bd328ddfa507be7621caee791d95"],["/tags/UIKit/index.html","5688a51105b02235a759e6fc7b17d015"],["/tags/UIKit/page/2/index.html","838a0e10a8444537b0d4149bd17f94de"],["/tags/UIKit/page/3/index.html","0dcf3b5c8566c77916403dc6152aac58"],["/tags/UIKit/page/4/index.html","04e03f8c76b3bf42e0f4353940d0e409"],["/tags/UIKit/page/5/index.html","00408e2ee6b26eeda7ae2b2a077f4b68"],["/tags/UITableView/index.html","9611b4b25e768197b9807ff5558a1d78"],["/tags/Ubuntu/index.html","016fd6cfc5df5d77a4771f7f94454f3f"],["/tags/Uniquely-identifying-views/index.html","25caee2a82a762d7b76e64d00283e66a"],["/tags/VIPER/index.html","7409225bc0dde605c5529462b03405f5"],["/tags/VMware/index.html","be8d7ada6adc75e226b47d3a1949b17d"],["/tags/Xcode/index.html","c53fef73d452da361a8fc21c3c7795b2"],["/tags/appleOS-Networking/index.html","979b00b00ed1ac6e6d9f0569d6ba54b6"],["/tags/enum/index.html","172a8467abd3f5cc2c1837853db2bb28"],["/tags/iCloud/index.html","59dc77644a26f116e754f4b3a03772ad"],["/tags/iOS/index.html","43fb285c3e8ceb491bd3fecbef40369a"],["/tags/iOS/page/10/index.html","c6358a59bb61e21402b9746c61489ded"],["/tags/iOS/page/11/index.html","7f0825ff16016ab738ab4479f6883266"],["/tags/iOS/page/12/index.html","88056ee0f16e704642082931736e8bce"],["/tags/iOS/page/13/index.html","476d23c50cf933c4d7de581669f077c1"],["/tags/iOS/page/2/index.html","e3ee3103117ae515003f3abdf8a6341d"],["/tags/iOS/page/3/index.html","f7bb4b7a15d0388bc999f3920edfc629"],["/tags/iOS/page/4/index.html","bfbcfe0fa40014ddeac46e53fbc616a1"],["/tags/iOS/page/5/index.html","166ac61c1436148cbf5509387fc39baa"],["/tags/iOS/page/6/index.html","fce9b0e8280eca04e9542e8842a8dc38"],["/tags/iOS/page/7/index.html","dd0abc5e84e33f7506eafcc06eb88cba"],["/tags/iOS/page/8/index.html","3b3262d13a71eee70f063644880a3844"],["/tags/iOS/page/9/index.html","620f6cae9c3edec15aa875375d59d94f"],["/tags/iOS面试题/index.html","63a4da8e218195002f3aba283c12034f"],["/tags/index.html","c921a674f6b698843e60419a0699865b"],["/tags/non-optional/index.html","7442d563e0f1840a0124905d506bf1fe"],["/tags/random/index.html","423cd407d0a364e03c038f0aeb5ea034"],["/tags/transition/index.html","4babe036faee2882dec7db8717561f45"],["/tags/三方类库/index.html","d1c5fc7273b41e00cdd33b40321a245c"],["/tags/依赖注入设计模式/index.html","7cd3417b3258bed73e162f307ce17f99"],["/tags/值类型和值语义/index.html","1af280dacd90513477f2fdcce94b1468"],["/tags/内存管理/index.html","5510542888d749d451212138d942e537"],["/tags/函数式编程/index.html","a251de41ddd6285b93e063388304b046"],["/tags/初始化模式/index.html","3b73bcb7906a977ce283458135be31cb"],["/tags/单例模式/index.html","be4efd89c6f3fbf5ac3a36251ca7e724"],["/tags/原型设计模式/index.html","da2300b9234081121040274f54743551"],["/tags/命令设计模式/index.html","8036b17d300f050e5ebc2bfb28751bbd"],["/tags/基本控制流/index.html","e80ada7b28d64df75a04686827910e00"],["/tags/外观设计模式/index.html","64aecda28a392c46575a83d28683d66f"],["/tags/委托设计模式/index.html","ee4940b7d999743ddbd0b46b34249312"],["/tags/子类化样式/index.html","a5cc1c9d3141f5b10ca29ce3ce6b60af"],["/tags/对象池设计模式/index.html","f344e1cdba6c8eaf9642406b9177c0e0"],["/tags/工厂方法设计模式/index.html","34cb17c545a7407ddeb8dfe6f229a5b4"],["/tags/工厂模式/index.html","a0f24203b2945d904a3a3bbd3ac7b49b"],["/tags/工厂设计模式/index.html","114f6826881dbc85e57c4731747a43eb"],["/tags/懒加载模式/index.html","507d12477d1dc8204fbde682386aace0"],["/tags/抽象工厂设计模式/index.html","93de4820bda78ccd8cce8ec28671e9f2"],["/tags/构造函数/index.html","1b744219605a3777ac2b2b41ee609039"],["/tags/架构设计/index.html","d5f1681bd70bd744606d2094ce862bf0"],["/tags/模式匹配/index.html","798375dd95250a2f60d6e0a7b875e90d"],["/tags/生成器模式/index.html","43d72f0c82d260af11a8ffe6af04df5b"],["/tags/用户体验/index.html","532a3260a9057146fc634ca678bcbacc"],["/tags/类型与操作/index.html","185ba8f3f67c1717e756e18b08757b32"],["/tags/自动化布局/index.html","aa798cbdda6a4611fe84830f6cd05135"],["/tags/自定义UIView/index.html","3a845983da680337d6e9bb13a03bbeb1"],["/tags/自定义转场/index.html","c66d2baf6f65c2695a4326b02618bd1d"],["/tags/自适应布局/index.html","6e2f0d727227fa1a06a5ed4bda49d21c"],["/tags/表达式、变量和常量/index.html","adf76056e64c63665a6b05ea7ea0bb16"],["/tags/设计模式/index.html","20313c8534da4c32c3fcbdf52e1337b0"],["/tags/设计模式/page/2/index.html","de4328afc8b06e403314d3181e29a62c"],["/tags/设计模式/page/3/index.html","8605e6c7e7354b401d05e19561782bc4"],["/tags/访问控制和代码组织/index.html","2f7e489aed5a00154f23a7c25de0d7bd"],["/tags/运算符，下标和键路径/index.html","c519b540a4a839cb0acfc1688a2ea1ea"],["/tags/迭代器设计模式/index.html","60649a815e8528a10dc7db1909b3e67f"],["/tags/适配器设计模式/index.html","ceece7ead74aef42281e86b7cf5fb8b4"],["/tags/错误处理/index.html","4fa20d885938df68525a84d3226e16c2"],["/tags/静态工厂方法/index.html","83a81ab78077d3980132156fa3165c27"],["/tags/面向协议编程-OOP/index.html","55430c62edb4d968c61fe04173d1d759"],["/tags/高级主题/index.html","b3df1884bdc1a629370956e41dae0151"],["/tags/高级协议和泛型/index.html","57f708518aa2a5c8a2b0ad8729c8c45b"],["/tags/高级控制流/index.html","e83bfa87881a427d6d75a1aeda841a9d"],["/为iOS应用构建输入表单/index.html","8cf7557f3eaea10d6e7fde487d47700d"],["/产品开发的幕后花絮/index.html","774fe3fb82d0ca5334628c080193f70c"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","58e29d8dccc645522f693e1ceb85cd24"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","6316face4abaaf812a609dfb7ecb9ccb"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","5741180bc7e7146fd041a6b6b98f8b8b"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","866e77a993c351c3224c261941f0e5e4"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","3c88061b0151751c3620f5bff4b13dd5"],["/在Swift中创建自定义集合/index.html","c3130f6ead80826eaa20de46a1ff381d"],["/在Swift中处理非可选选项/index.html","1e392519c9a81aa16ff3b96bb6666bde"],["/在Swift中生成随机数/index.html","968d63148e736836c2c2a243249767d5"],["/在Swift中重构单例模式用法/index.html","2552c43ccfdfc53cb8a148497b22b184"],["/如何为VIPER编写服务？/index.html","a61cb8884fec60bed75a4749e87a21e1"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","05ab71d4ff8832fd819a507630497664"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","9ddb18ec086affa7fbd6f8250a4e23e9"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","29609754a75cfeda7173eb81e47463cd"],["/如何使用VIPER构建SwiftUI Apps？/index.html","f356a4aaa2de941fa7bed8b9a96d8222"],["/掌握VIPER架构/index.html","5907ca90bc325105ff0eb6f29ec33eaa"],["/揭秘 WordPress Hook 系统/index.html","d11e27765750bc4c544f99095ceeb30f"],["/比较工厂设计模式/index.html","8b0071a1affb510d6992225088dc29e7"],["/深入了解Swift中的Grand Central Dispatch/index.html","5a9a7d924683a7cfd7b4379ff558f25c"],["/深入研究Swift框架/index.html","0eb5242af681bb4bf6488061ed019e7a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","e993f8023b703ec72e9b5ee6fb6fd4be"],["/选择Swift而不是Objective-C的5个理由/index.html","1a1c19ecc782a03184761c891da812de"]];
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
