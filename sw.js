/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","fc286f64a8cfbdfd625a36b6f2b92590"],["/2020年iOS面试题总结(三)/index.html","100f6f2bc9537b31412779343b224412"],["/2020年iOS面试题总结(二)/index.html","a019082fa3bc53c34b9066f73c7c1b3c"],["/Advanced Swift系列(一): Swift 简介/index.html","6186c0e9766a953dd24c9da39051cc66"],["/Advanced Swift系列(七): Strings/index.html","61c9e5984823957d3e42ebeda769fb33"],["/Advanced Swift系列(三):  Optionals/index.html","b1120042206f914c459e59e617b3dab3"],["/Advanced Swift系列(九): Protocols/index.html","f9fa28f6d248b37f870c58933d4fe376"],["/Advanced Swift系列(二): Build-in Collections/index.html","a3eb3216322165639f5e9c7c30cfbe36"],["/Advanced Swift系列(五): Structs and Classes/index.html","9ccd05db8617de528a95af92c4f88b6b"],["/Advanced Swift系列(八): Generics/index.html","6d650305a13842abd996b2cc7cc3c3fe"],["/Advanced Swift系列(六):  Enums/index.html","5ce54c2203589a8679cf538ed8d176ff"],["/Advanced Swift系列(十): Collection Protocols/index.html","f9102144628cd998ce441fb2277cf2c2"],["/Advanced Swift系列(十一): Error Handling/index.html","7f51feacb0def5a0b7bc9ae0b5a2f41d"],["/Advanced Swift系列(十三): Interoperability/index.html","0504057858ad9c00aa27605ca35b16d0"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","4b8a21dd5339591c0065a5831fff2d78"],["/Advanced Swift系列(四):  Functions/index.html","ab8a17081a4a3ee99153ed9296c2ebdd"],["/App Architecture系列(一):  简介/index.html","ae0eeba02a5be851d35f55481a9b581b"],["/Functional Swift 初探/index.html","7190ce817a7c72c069d6d712c6c823e2"],["/Git 使用小技巧/index.html","c24568273491fc263e24aa08fef503f3"],["/Go 基本语法初探(一)/index.html","0c6c793c0ce600a8e43a0bbd6ff5b237"],["/Linux VIM 命令及操作小结/index.html","bf694ee8cd0e024aebc377ee3dc24d53"],["/MySQL 基本操作/index.html","641f2a33c8668eddaff0f45c6c907776"],["/MySQL-列类型和数据完整性/index.html","978ecdb0c6836bcf7181cb1dbaf77abd"],["/MySQL-数据库设计和查询语句/index.html","ae469313795308f10df9a196096b3d14"],["/MySQL-视图、事务、索引、函数、GO连接MySQL/index.html","a59fba72243a14d64550eb1de230ad00"],["/NSCODER和SWIFT初始化/index.html","e71aef71b174a59144d77d874be837c5"],["/RxSwift系列(一): 第一部分：RxSwift入门 - 1、初识RxSwift/index.html","25585ac87d50b127500b1b15d5fcfbe4"],["/RxSwift系列(三): 第一部分：RxSwift入门 - 3、Subjects/index.html","c3c00837ecdf46f9b767ab521a656d54"],["/RxSwift系列(二): 第一部分：RxSwift入门 - 2、Observables/index.html","3eedd67093e62204a2e150e3c71c879e"],["/RxSwift系列(四): 第一部分：RxSwift入门 - 4、Observables & Subjects 练习/index.html","73b7293445e3ce5aeca0e01a6ef97d2a"],["/Sqlite 使用Tips/index.html","cd6a265e4fcb3724ce1492ac4968e1bd"],["/Swift 5使用UIImagePickerController拾取图像/index.html","ba1829330483b8bcf9fc89832da4b665"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","0e4efba0da7784237a65f6e83f53165c"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","5c9bbdc4723c2a11427125bdb8312cc1"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","003b8f4222f1288b84b288c4218dc83a"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","7edcd4754db02b15b40a628167e50090"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","7c1b068d20f6bed9da5a6c7937d3d06a"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","030f950e571f9a7eea4ad29b0075543b"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","66d99c89bd18ea7d71e545d5b5c1cef6"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","16965ee91ebd2162f6ab429023ddbeea"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","5bfd68add6ee43509ec13fd2461aaa88"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","0001da8c7e588cc802ee68a42042fa7e"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","320d2d96263e7c600398708949c3638b"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","7296697c24dabbdc1d17ad0007a34a91"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","f54b7c26353fb2589eb6dd744e530437"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","4b0e53695d397cffb988ecd261f014cf"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","908c3b7522d6b0e89cfda27fd8d7c730"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","e61fb29dc450a66371f00573d8317b2d"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","fe4a98bdb8a30945f47c700b7ab378ca"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","ba9c02dbd8c9befb7bd9c39a7b4e5419"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","5c528db11d2e1d539a793c661cf5a51f"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","25404d647d12d70afb0c189d7b5468b0"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","848a5593d560d8355276715fe7e7032a"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","7488e3fadd040ff45795164a5ba0fcb8"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","bf1596860755235ecdd58423ca60e4a8"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","22ec42135c445c794b2b6047a2980a09"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","398b327e5e93d612b10b827721250eff"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","b190f58866ea034241beaba4928a8409"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","0364220e670182de2c6eb523dbf0e54d"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","cda2a2287bc7a0540aa3827725b2e137"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","2ac19dd7d340c1429b2d2ac74d884dbd"],["/Swift CompactMap vs flatMap：差异说明/index.html","7fc787b9878aa37f5c55da525c3d0b18"],["/Swift Grand Central Dispatch 深入实践/index.html","a7bcead21cf905e8211be402920dc761"],["/Swift Lazy属性初始化/index.html","97ce844635493d470df167472f154be4"],["/Swift Promises 初体验/index.html","88d333705202cd6e007e8950d4788923"],["/Swift Promises 探究/index.html","d15b987d44dbde5e3763f852d45b34ac"],["/Swift UICollectionView使用指南/index.html","5da8be193e8c210b7c673ff034e61ce2"],["/Swift URLSession && Combine framework/index.html","f50c443fd277bee79b6a25e272a86964"],["/Swift tips/index.html","435031859e588932c40021c12a6d0fbf"],["/Swift 唯一识别的视图/index.html","6e602fda8a090817a3bfeb6609b1ec0a"],["/Swift 如何学习现代UIKit？/index.html","da0911c926ff933830be79fcfe9a7019"],["/Swift 源码系列(一)：Array的实现原理探究/index.html","2e71cb1896fccd786457e802fb9a42b3"],["/Swift 用 compactMap 替换 flatMap/index.html","4a2c68eddd0e2c1c52164c475beada60"],["/Swift 选择和播放视频/index.html","cd9d805073236066262ab115eb584df6"],["/Swift中UIColor最佳实践/index.html","5d7bfe3717e4c74685b0d1744e6b94fd"],["/Swift中快速简单的工厂设计模式/index.html","b8d13ea41a34bdf81f23f670d5a9bab7"],["/Swift中构造函数与静态工厂方法的比较/index.html","4a9b823f10d8100c1156d133d7da2604"],["/Swift中的UITableView教程/index.html","a2c97eb0ed17a054f6b98020b4630729"],["/Swift中的懒加载模式/index.html","7db3c450ca43794dc3212cda2495111d"],["/Swift中的模块和挂钩/index.html","0daa0a393f3112492a2632e708666263"],["/Swift使用布局锚点添加约束/index.html","0db68a00f7748744f31cbab842a748b0"],["/Swift依赖注入设计模式/index.html","69a9c568f982faef2ea2af673091dd06"],["/Swift关于Dependency Injection (DI)/index.html","8b88e3270f3973e55a303de725791dfb"],["/Swift初始化模式/index.html","5a034bd30d620183f0f659c53582cdb3"],["/Swift单例模式/index.html","71c9bc0f30995f58fd6dff36a8da028b"],["/Swift原型设计模式/index.html","f7e059db9790a868fb11b12a1206ab97"],["/Swift命令设计模式/index.html","c9875c4bbeee81f46823f7fdc2ba621c"],["/Swift外观设计模式/index.html","d3ca5bf44dd5457705a8ad9cfaedbf49"],["/Swift委托设计模式/index.html","dda6785d2516cf1204b5a13d5b5ad6ad"],["/Swift对象池设计模式/index.html","107c7c8525eb2596caf6a8865bc668b2"],["/Swift工厂方法设计模式/index.html","633c2f9ea3ec4c88936be99c420e77a4"],["/Swift带闭包的懒惰初始化/index.html","ac5dc22a149a8106a7fefaee67bdc939"],["/Swift抽象工厂设计模式/index.html","66af219b479529afa4c2969cd3b77c4a"],["/Swift掌握iOS自动布局锚点/index.html","f3b2533a0dfceb9d94e1c05a9a114012"],["/Swift支持旋转的自适应单元格/index.html","15b3a70cbef09b6b0107db3f17ecc113"],["/Swift枚举值/index.html","2a90313802b510f8651cb704e6ff26f5"],["/Swift生成器模式/index.html","18acc50107f0f973b5176acfcf849d81"],["/Swift结合Xib文件自定义UIView/index.html","fd8bd5fd6692a14fba7e79d55be256e5"],["/Swift编写的20个iOS库(一)/index.html","f7a9a6efef7b3eb0ff0e31043ba86b72"],["/Swift迭代器设计模式/index.html","2d3ad107e2be65ee16a2bf15ce924303"],["/Swift适配器设计模式/index.html","c1c518724df63c57aa3423cba45b4e0e"],["/Swift静态工厂设计模式/index.html","9c272b1f503a58b531f8db5fbbf6714a"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","b1a4038ececf93b26470f8b1425b7a5a"],["/UICollectionView data source and delegates/index.html","45cc380c8d8d649eccc1f4795280d796"],["/UICollectionView、UICollectionViewFlowLayout使用技巧/index.html","741299ee95fa3d417a481821fbbb294e"],["/UIKit初始化模式/index.html","23371e8bba42e04cdb6fb03e64060928"],["/Ubuntu18.04替换国内源/index.html","feeacdc7163af2fdf9d3a777f6206337"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","1895f8823ab83601e284c6baa6c07bde"],["/Vapor系列 (一) :  Vapor 初探/index.html","ff6c3bc82153db146897a465260a9188"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","360047bee7f7b19d94ae68b9e0ba6537"],["/Vapor系列 (二) :  Hello Vapor！/index.html","45aea0f215286ae40884edd5300befa3"],["/Vapor系列 (五) :  使用session进行authentication/index.html","311abd2b430c5555a30d18ff6472693c"],["/Vapor系列 (四) :  创建博客数据库/index.html","28d418d18fd1ced0a30ab00e52028fd4"],["/Vapor系列(六): 徒手撸一个CMS/index.html","ac4c4c6f7452bec16a5f1fba2b05c674"],["/WKWebView与Native交互注意事项/index.html","bc0f505247693707ef51b3f9420fac68"],["/Xcode扩展/index.html","8685de88ee91168f95ab2467bdb097d1"],["/about/index.html","d68f5cac822ff2d86fce28b329deb751"],["/appleOS的Networking示例/index.html","93e0a2909297bc044d004b096d63bbb3"],["/archives/index.html","cde8e9b6e9ae2a505efd7d8f287fc0f6"],["/bugly 上传dYSM文件小记/index.html","826827e71faaf8c18555c50898b38eb2"],["/categories/index.html","9e3ae65ba2b11549cf819b17675496a6"],["/hello-world/index.html","29483b9699d8d0d8624702f99038482e"],["/hexo部署失败/index.html","abcafb6205cdb4c4b146e956317dbd43"],["/iOS VIPER架构深入实践/index.html","598d9c75902868e97bba71284af7da75"],["/iOS 自定义视图，输入表单和错误提示/index.html","19aa7a053e699af2b9c067988d61ef30"],["/iOS如何使用iCloud文档？/index.html","37c68c9bf967e8f0a3f057fc3a62c14e"],["/iOS子类化样式/index.html","ae02118ebe391819721d607946543c8f"],["/iOS开发记录<一>/index.html","319738611e01609a1859cae09d7f1e9c"],["/iOS自动化布局编程/index.html","d7f485dcaa9165a4c7f827c840eb7fb7"],["/iOS自定义转场(By Swift)/index.html","a4572d0285e194e214a81356be93334c"],["/iOS项目架构：使用VIPER/index.html","caefd3041396a18326af54be5919ecd9"],["/images/algolia_logo.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/alipay.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/apple-touch-icon-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/avatar.gif","d41d8cd98f00b204e9800998ecf8427e"],["/images/beian.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nc.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-by.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/cc-zero.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon-16x16-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon-32x32-next.png","d41d8cd98f00b204e9800998ecf8427e"],["/images/logo.svg","d41d8cd98f00b204e9800998ecf8427e"],["/images/wechatpay.png","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","fe1b97097757bfe586d68f4e3b10886a"],["/macOS Big Sur 11.1 Arm架构安装使用Homebrew/index.html","fedad9dc877a31f8573ba1a2f26f9506"],["/schedule/index.html","dc23c429e2da291be9f07b7d3730f2f3"],["/storyAppPrivacy/index.html","a7996e1945c676deb160c3f089230b8b"],["/sw-register.js","02b4360aa78aa3020fbb1af2d872c7ad"],["/tags/index.html","e89345fb3806672dd6172baabaee575c"],["/为iOS应用构建输入表单/index.html","a4b5baeabfb69af8eafd4bd3375bb891"],["/产品开发的幕后花絮/index.html","aeefa7a39fe87087f3742e7141533e31"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","a655fd75045ce811fc2b9bce34ba40fe"],["/冒烟测试与回归测试/index.html","2056feb8f48b1b153101cecfd50163e5"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","31230c21b93cc4c99b1a727daee6df62"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","116f6d9e8fb66657194355e6240a3b00"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4f62713e168bce912b148cd03a3ba944"],["/在Swift中创建自定义集合/index.html","452bdf419bab4e21793ea73860fff67e"],["/在Swift中处理非可选选项/index.html","e771feb3b63dc6a0d4ea7c2c9a48e282"],["/在Swift中生成随机数/index.html","3abf851da9d878b711570d4998ca267c"],["/在Swift中重构单例模式用法/index.html","4e8f4b048770c1891de2afa8449ed6d2"],["/在iOS工程中Swift代码进行约束保持团队内部代码风格一致性的实践/index.html","46793229fadf65d1ad11e3df803d6a87"],["/如何为VIPER编写服务？/index.html","e58d127b9445f5549d629ad4b0b323af"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","4f5908b824c5cbe30d4f1d3caaff5d28"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","c1be538bb236095ac3f1788ab21078ac"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","57c40fe696e7fefd213d4136d8426fe1"],["/如何使用VIPER构建SwiftUI Apps？/index.html","d13f0657db4b2cdb53c298633af30310"],["/掌握VIPER架构/index.html","82642d1414773f0bdb018ddf15bf4a4e"],["/揭秘 WordPress Hook 系统/index.html","09e144c04ac14c771a1695514bc3c026"],["/比较工厂设计模式/index.html","e2d6e57d244123e97b2ae701b435c832"],["/深入了解Swift中的Grand Central Dispatch/index.html","a28724dcbf0e9766e2c019f529fe2ab0"],["/深入研究Swift框架/index.html","e94e0038bbb2b5fe7db5a6f646d975b8"],["/美豫直聘技术支持/index.html","63967223178bb414bb5e80f024e5f0b5"],["/美豫直聘用户协议与隐私政策/index.html","f2b5070bd2efeb92215eb4fb000affc2"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6c574d011d04db612ba9addd4e8b7403"],["/选择Swift而不是Objective-C的5个理由/index.html","11d8e6d7bf20fd324ba6faa378acc098"]];
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
