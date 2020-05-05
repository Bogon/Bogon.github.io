/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Build-in Collections/index.html","6476c0ed22e7d245641e98cce0bf5b15"],["/Advanced Swift系列(一): Swift 简介/index.html","342acda82917e60e36195fd0a5c74d82"],["/Functional Swift 初探/index.html","044f4b23d13e8c035fc03f75d8ceb0d4"],["/NSCODER和SWIFT初始化/index.html","fe87909425747803771ef909c86296f2"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d09794df50f065c01c4dac9d5fc0ec39"],["/Swift CompactMap vs flatMap：差异说明/index.html","672559224ecfad75c22e6cab074f3878"],["/Swift Grand Central Dispatch 深入实践/index.html","b69c4a8cdc72bf7e59c52b87bff8c749"],["/Swift Lazy属性初始化/index.html","1331ba2b3d1362e4a946eb17ca81afd9"],["/Swift Promises 初体验/index.html","53b20d444b5c07831711ee0ad0c9b5aa"],["/Swift Promises 探究/index.html","cf2e5855b57a0e408b158ba38bedf97a"],["/Swift UICollectionView使用指南/index.html","02c25b12961470f481c5fe779bc85316"],["/Swift URLSession 和 Combine framework/index.html","9bc6a5ff59d785ce2c6bdbf10bd9d85a"],["/Swift 唯一识别的视图/index.html","0c18c29768dc2dcfacc464778ee13e24"],["/Swift 如何学习现代UIKit？/index.html","6e60d104a1dd10a4176abd9e11d7df8f"],["/Swift 用 compactMap 替换 flatMap/index.html","425c9006ea36628be7e4b596dd72192f"],["/Swift 选择和播放视频/index.html","221f6797e6b72dec14050e6172e301fd"],["/Swift中UIColor最佳实践/index.html","9400cfb8b31d593b4a55033d0acd2d19"],["/Swift中快速简单的工厂设计模式/index.html","bf1502c7b5a26bc9b8c06a3f93898dff"],["/Swift中构造函数与静态工厂方法的比较/index.html","e92b13b84e6041b9300e1fcd0f7e2137"],["/Swift中的UITableView教程/index.html","792a132d05bce246c72782133a0063e7"],["/Swift中的懒加载模式/index.html","10530ee3a4d07039027225a010f4c563"],["/Swift中的模块和挂钩/index.html","069a3e257ae956c77da6a61a6295086e"],["/Swift使用布局锚点添加约束/index.html","a2db549c12fe377b945c0e6dd6858e59"],["/Swift依赖注入设计模式/index.html","53186575b1ce5b3845ca07857dca0778"],["/Swift关于Dependency Injection (DI)/index.html","bf44623321aaec6952e3bf71836d2fdd"],["/Swift初始化模式/index.html","3b1886120cceb19d3f0f414487829f37"],["/Swift单例模式/index.html","21f94899d9ff76f618d7987b67892393"],["/Swift原型设计模式/index.html","5a379931075284319f9eaaead9d8af76"],["/Swift命令设计模式/index.html","f3f12cb37b9a56d9fd786c8ee5502325"],["/Swift外观设计模式/index.html","1fd25e70cbc5c320d727a9d7b54e4dce"],["/Swift委托设计模式/index.html","ea1ddc9d48f27bc98ef4941794206221"],["/Swift对象池设计模式/index.html","f8048efcb513e9afa7bb9f0dcecf9783"],["/Swift工厂方法设计模式/index.html","3698df8c298f81b4a0a5bdf35218f077"],["/Swift带闭包的懒惰初始化/index.html","891be7f710aecf4002e0ee1993cc2446"],["/Swift抽象工厂设计模式/index.html","087f1effdd396b735ddb66cc1515cdc5"],["/Swift掌握iOS自动布局锚点/index.html","e4809be406c2bb7d18cfaf58d38d3949"],["/Swift支持旋转的自适应单元格/index.html","22837ddcbb590f0654eb03c9db15ebca"],["/Swift枚举值/index.html","5a7555d24afd5f1897fabd73c0558dd3"],["/Swift生成器模式/index.html","948eee5e18e02d64fc84802a6cabcabf"],["/Swift结合Xib文件自定义UIView/index.html","6c3ad69d7a0ae8670e7ae7e2ec05f23a"],["/Swift编写的20个iOS库(一)/index.html","c56a6c74637aac7669bb9ae21cd1a6f4"],["/Swift迭代器设计模式/index.html","0675ede5fbf678feeb623940ff793632"],["/Swift适配器设计模式/index.html","d9ec634be3d538309b33abac44a7a3ab"],["/Swift静态工厂设计模式/index.html","413f0972176b2539b05e379eb301120e"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","5445d129431abc7be25533b3cb319dbf"],["/UICollectionView data source and delegates/index.html","38d37da8a6466d2c58ea0e92f491dc2e"],["/UIKit初始化模式/index.html","647d1fad1008af6bc300a4876e84342d"],["/Ubuntu18.04替换国内源/index.html","66454fcac83fcda9986b772516306be3"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","10609dbb7d97df82544ca0e7c52b101f"],["/Xcode扩展/index.html","5d95b1da04f84ac7b159c5fd57402e01"],["/about/index.html","b566ffe028de7183bb4e25e0415b277d"],["/appleOS的Networking示例/index.html","cfc19a987137038964c7a79eca7f7519"],["/archives/2020/04/index.html","bfd6e834a7d2cbc4e2f2d8c9f5589bdf"],["/archives/2020/04/page/2/index.html","df13baaa37ab3d3aae64e15308c737c8"],["/archives/2020/04/page/3/index.html","1ee5e2d05208c0afbbcc81da38c99df1"],["/archives/2020/04/page/4/index.html","c50c14d59d15084579ca94e6b014d9d0"],["/archives/2020/04/page/5/index.html","af1e128202f13a72b6f8a0d5c715a0c6"],["/archives/2020/04/page/6/index.html","659aedf50a77df89f0df6289da36f1c3"],["/archives/2020/04/page/7/index.html","3bdb47c7c582b5deddae3d8a933a371c"],["/archives/2020/04/page/8/index.html","853785770bf066902ae507200198e5d5"],["/archives/2020/05/index.html","b109a1fe0bca98c8c947e2c95f688c04"],["/archives/2020/index.html","f8ef9c63ca608d69fcee63870307ea1e"],["/archives/2020/page/2/index.html","84239b572cdda997ec4d8c8ece9f04a4"],["/archives/2020/page/3/index.html","1b9b29cff5a54ee7911114ff47d3af85"],["/archives/2020/page/4/index.html","bd82b3339a7a3ddd1df6741d9ed3e32f"],["/archives/2020/page/5/index.html","3d0459af4e45dea0cd3af10a29814cbd"],["/archives/2020/page/6/index.html","ba077aac0e20723921e78e2654a6bb88"],["/archives/2020/page/7/index.html","508abe232bfafc4e5c5aa1700e8084fe"],["/archives/2020/page/8/index.html","080a3d5f26c1efac7deeaddb43e2c97c"],["/archives/2020/page/9/index.html","15e83c3fa2a9c4f6af86d7accea146b4"],["/archives/index.html","1421c9678f8007934044be92fccaf8e7"],["/archives/page/2/index.html","b9b10f15e45b7143f2f6d7db05901b98"],["/archives/page/3/index.html","f4b1aeec16e80df0afeda49bc25c12da"],["/archives/page/4/index.html","f1b5c48ee6993a9c0884494d9b5dd654"],["/archives/page/5/index.html","3ba1ac2023c49ef4b08593271d8c0f17"],["/archives/page/6/index.html","6f634560a4e7634437109178754072b4"],["/archives/page/7/index.html","c9700c99ca9b974aca9b9a8251075b45"],["/archives/page/8/index.html","f136572409ac40ea1afb372e6348b619"],["/archives/page/9/index.html","8bb06c2584996c2bfd735294c5dfacee"],["/categories/Advanced-Swift/index.html","aaf058389b7b3f1269048459f1104b67"],["/categories/Codable-protocol/index.html","6cc8677d00eda006bc837247e2ae57f8"],["/categories/Combine-framework/index.html","031947ae5bb97bfac3afe3c139e21520"],["/categories/Combine/index.html","21732507bb3cc5b468f83859743ce69b"],["/categories/Grand-Central-Dispatch/index.html","121bbd6ff095e975109ecdab0adaa0ea"],["/categories/Hexo/index.html","2cf4ca0ccf0aaf8106c88a599736d64c"],["/categories/Promises/index.html","bd85e1b86da95c6de169126bbc0c6960"],["/categories/Result-Type/index.html","2b95e7a50c9c5a7d19568603d0b19673"],["/categories/Server/index.html","353ca84d73ffb6fa31e08ace4205f941"],["/categories/Swift/index.html","bb7410aa17f8d001beff922c1d5bd4c9"],["/categories/Swift/page/2/index.html","aa75393cf1cc8792b7a6fe1e45558266"],["/categories/Swift/page/3/index.html","c2cece3d3eb22e90b400e651e8f9454a"],["/categories/Swift/page/4/index.html","4b4e6c83c7168e35fe6e6540c7e79f0c"],["/categories/Swift/page/5/index.html","b0552bb404dbb35f8941954e95384fac"],["/categories/Swift/page/6/index.html","8286f2e044b4f8ed60027c29e4c04dd7"],["/categories/Swift/page/7/index.html","59948579b458dd81e913237e81816a87"],["/categories/Swift/page/8/index.html","bacaf55792f957f3e4d845d3805bc03e"],["/categories/Swift5-2/index.html","4b26221aa40690aadf464538a95aef8f"],["/categories/SwiftUI/index.html","ddcbd2a5850769e3b335cd8b03f45b79"],["/categories/UICollectionView/index.html","3871ff8da6038c175d5420f07d5390e5"],["/categories/UIImagePickerController/index.html","b4a7156c5915ae8d4637b405e3a70db0"],["/categories/UIKit/index.html","09a37eabfb871b1d73b299634805fca1"],["/categories/UIKit/page/2/index.html","347bc272f531edfdc6830eb6060c0899"],["/categories/UIKit/page/3/index.html","d313aaf6a54ed0f576b1c29842611614"],["/categories/UIKit/page/4/index.html","79399730704d23e66f49af2e11832410"],["/categories/UIKit/page/5/index.html","2b60f6193d8446b89df0bd39c62d5553"],["/categories/UITableView/index.html","8d224943d1406bc644a2f5ba6b697712"],["/categories/Ubuntu18-04/index.html","80a13c10d5f82cab2e4ccdd65b1c64eb"],["/categories/Ubuntu软件源/index.html","28c792c5dab714b9595dda80057e3497"],["/categories/Uniquely-identifying-views/index.html","543cfdb2232f61f7381f390badb142c5"],["/categories/VIPER/index.html","ccb706ae985fb72094f9872a772159a7"],["/categories/Vapor4-0/index.html","1dcda8332fa9dd0559337b61ae31e160"],["/categories/Xcode/index.html","9e98d3849d6619c7e446f291d2f67cd5"],["/categories/appleOS-Networking/index.html","b735cd1c1166519b6346abafa3a71ea6"],["/categories/enum/index.html","1a181bf1551b4acdf4af19401e940765"],["/categories/iCloud/index.html","6425e66b58c1a936fa6c0d5ff680c6a9"],["/categories/iOS/index.html","6b8a459a6e70159e0726f1d2a2a4a820"],["/categories/iOS/page/2/index.html","3d5648df3fa3b0472c1eebd543395beb"],["/categories/iOS/page/3/index.html","4727f60ff6d2a352c40211d04d2796a5"],["/categories/iOS/page/4/index.html","aac09a74231a8b4f0365464bcd39603a"],["/categories/iOS/page/5/index.html","db0335381fda297941f95bfec2f7e017"],["/categories/iOS/page/6/index.html","f4183706a73924a8a87862d98a6ef67e"],["/categories/iOS/page/7/index.html","6135edc78485da3cdd4728be6da2e5a7"],["/categories/iOS/page/8/index.html","efd5ca7313612c50a616a2277d8f19f3"],["/categories/index.html","d445b7fc98417341830a50aab831477c"],["/categories/random/index.html","d76a67105babe0be76a95b412b8669fb"],["/categories/三方类库/index.html","d938b0810f47ec03419ebef7dc6b83cf"],["/categories/函数式编程/index.html","c3d3790a2700078a5fe56634bc0c7e44"],["/categories/子类化样式/index.html","f695cc09f85a74c511479cd9ddcf8087"],["/categories/架构设计/index.html","5f3fbd3dd9a277142208e29125954c64"],["/categories/用户体验/index.html","463c14e6f5edc64bd995f12361feaf56"],["/categories/设计模式/index.html","a4b6bc2f7dc86ec9ab3a2e012f6500e4"],["/categories/设计模式/page/2/index.html","ae9d339aef7a9bcd471879548118a147"],["/categories/设计模式/page/3/index.html","a7d1ea73927b1efb184c22aaaf334666"],["/css/main.css","b4b99476fa7c16642761a42b4cb5da6f"],["/hello-world/index.html","f0dd2152a7b25339f1647dbd617b2a20"],["/iOS VIPER架构深入实践/index.html","5c012587efc3706f3d2f687381ee7766"],["/iOS 自定义视图，输入表单和错误提示/index.html","6dc8506c2898f6a82e28feaaa280277d"],["/iOS如何使用iCloud文档？/index.html","a6ff56724ab1af8f33ab80791627f753"],["/iOS子类化样式/index.html","69d9035676ed221d91fbb57afad0628a"],["/iOS自动化布局编程/index.html","4baa0b3ef50f42f632b1f89e4a0687ff"],["/iOS自定义转场(By Swift)/index.html","a052e714975daf225006776c0d838f58"],["/iOS项目架构：使用VIPER/index.html","bb2f2de32ea72affcbb8de5acf67a43c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","bdbe81ce9d9548f307420364a927d75b"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","697c5a194722dbfdc09f3d3918b4a1ab"],["/page/3/index.html","ade4604cd7c95b7c6f9230d93b28b918"],["/page/4/index.html","feb0cd0d1c5bb0a8bb3b41776847326c"],["/page/5/index.html","1629ebb124b3d9f455848c1a21b69869"],["/page/6/index.html","b0e7fc949db76592d40075c03a41fc12"],["/page/7/index.html","89711b024c9fa0e3e99b557182c76576"],["/page/8/index.html","3b1b7bb5a4e036530602f2dc1ddc2279"],["/page/9/index.html","fc0c1c28678281fc9774c18fbfc3639f"],["/schedule/index.html","a14122385cc61fee3d10cc4705d91713"],["/sw-register.js","ae9852a72c2c903d8a31120180bae77d"],["/tags/Advanced-Swift/index.html","371d602ef6c3bb637e1a46430102808b"],["/tags/Build-in-Collections/index.html","e09fd97678e3616cad85fb2c621c1e65"],["/tags/Codable-protocol/index.html","8eef3e4cbf997bb27df6d821d1999ca7"],["/tags/Collection/index.html","6e282a52544be46e742977cdea67f944"],["/tags/Collections/index.html","e25f23ff96a766550d5796dc1c10a15e"],["/tags/Combine-framework/index.html","bcde81c70199dafb9d188fa1dbacc732"],["/tags/Combine/index.html","3504e88d0a429af37a2c684586452553"],["/tags/Dependency-Injection/index.html","013f6d6a7a5d70b40d6a28a8942db68b"],["/tags/Grand-Central-Dispatch/index.html","88beb34fc6045a053b0d53de5c9c4e94"],["/tags/Modules-And-Hooks/index.html","65260953cfd9ac34219fca8b6d240e79"],["/tags/Promises/index.html","c7bfc591efc8c7b3ca9beb0735d07166"],["/tags/Result-Type/index.html","d33d64c42f165a7296070985c016b8c1"],["/tags/Server/index.html","7da188340fd5a16993e9c8e56ed3575b"],["/tags/Swift-5-0/index.html","3c32883da61107988d3382c2464b91d8"],["/tags/Swift-Package-Manager/index.html","3a1518f471ca1c72d1529fe163c679fc"],["/tags/Swift/index.html","41c2da8de7550e918e367a842badaa94"],["/tags/Swift/page/2/index.html","dfd4e8cc0e24ffb68f7a586998408f98"],["/tags/Swift/page/3/index.html","a152ad5480f3c897f85fa1a77ad02719"],["/tags/Swift/page/4/index.html","5d7108250e8738075d9a65b51c3bcc0e"],["/tags/Swift/page/5/index.html","e9ef7e0c6fff6151785db84d49c624e9"],["/tags/Swift/page/6/index.html","d1b3f9fdc9d0dccb28e1fc426343897a"],["/tags/Swift/page/7/index.html","928855fa78d2005e6513a13bc47acf9f"],["/tags/Swift/page/8/index.html","4e6eeb8e5fd9cee3f893987ac9ff0bf9"],["/tags/Swift5-0/index.html","2a68e5b46be0c71f5cfa24ae74e9382c"],["/tags/SwiftUI/index.html","64e8d7d418a3ebbbaff0f43a0a654518"],["/tags/UICollectionView/index.html","76844dea30c3ef3480efe10f497cfefb"],["/tags/UIColor/index.html","543a75400cfac983c77c36539619d8b9"],["/tags/UIImagePickerController/index.html","39209bd9e518a50ad1a48ad700909df3"],["/tags/UIKit/index.html","c13f5927bf054a155c27f952c5c38cf1"],["/tags/UIKit/page/2/index.html","0f54522e3c97e4894c39a49b3d82a2e1"],["/tags/UIKit/page/3/index.html","aecfcfea0ab4a2a9175a64a9cfa1dc58"],["/tags/UIKit/page/4/index.html","9b0c2b8c8e4b362be436eea03b7985e6"],["/tags/UIKit/page/5/index.html","4405bbedf2b99a6cb5b3c8e1354fd9c1"],["/tags/UITableView/index.html","eccf5ee94794a53d0a48415b24e3c528"],["/tags/Ubuntu/index.html","61102ec6f4fd143b9a79971f6ab9d921"],["/tags/Uniquely-identifying-views/index.html","d8aea5a787da4c0c5e29becff017c337"],["/tags/VIPER/index.html","8c2f07bd7f9ac4de015eca1d82b82427"],["/tags/VMware/index.html","d69a8503d003a6d2d86ed4d7a5bba26c"],["/tags/Xcode/index.html","af569163ea522ac51ce1d751e19768e7"],["/tags/appleOS-Networking/index.html","e3e7724e4b1207141a8a37f3e85976f4"],["/tags/enum/index.html","abaf7e181ff47304813c0682c5710315"],["/tags/iCloud/index.html","a3aa937b5da50112d4c4cf6871601765"],["/tags/iOS/index.html","ca62631299da412177bb725974b31f44"],["/tags/iOS/page/2/index.html","963bd2ba05dec0fde9c54deb765972d1"],["/tags/iOS/page/3/index.html","99651e144b175f3f9afbd95ca82677f0"],["/tags/iOS/page/4/index.html","1da93bad2e12f69a77bc74a96e30bd87"],["/tags/iOS/page/5/index.html","805e3fdf515331883952e3df72d864cc"],["/tags/iOS/page/6/index.html","09ff7432aa86f53994ae35758f0ccd96"],["/tags/iOS/page/7/index.html","f197f230815ba720d5e4ac7446a08a00"],["/tags/iOS/page/8/index.html","d3714e4c22945df4db971a7bf7cef537"],["/tags/index.html","6aa8cc3a36b5ad962ff6907c871576a8"],["/tags/non-optional/index.html","1eb13443fe9913bbea52fe9e9847be8a"],["/tags/optionals/index.html","fd19db2b14e1a9ee7c156d022b36d125"],["/tags/random/index.html","1611166f7b2aa144d46e64494a7c42cd"],["/tags/transition/index.html","441f13c84640ee164bd4e08dc9d57069"],["/tags/三方类库/index.html","e87462b8d5980bd41a383e74b7440bac"],["/tags/依赖注入设计模式/index.html","3d9dc73d75282be9d1f0a052470ca0be"],["/tags/函数式编程/index.html","456775c0de4f3410e171d3167bb5d117"],["/tags/初始化模式/index.html","76a1255069052291549fd33fb6f8c373"],["/tags/单例模式/index.html","4c39e65bcd18468bf8fc59bc64538bcb"],["/tags/原型设计模式/index.html","9d25958d37347de3dd69c88324671f48"],["/tags/命令设计模式/index.html","d87e25b9835985cf66bbd5713892cbdc"],["/tags/外观设计模式/index.html","93f267945c478a4e93cfd42a032f35b6"],["/tags/委托设计模式/index.html","026f136c57bd2141d2eab9274b3e1cce"],["/tags/子类化样式/index.html","0d97570c8de9b85e81ba99c855f05b87"],["/tags/对象池设计模式/index.html","152026755bef73563b6d47bae4949581"],["/tags/工厂方法设计模式/index.html","9323a390488efa142154c7953b900c9e"],["/tags/工厂模式/index.html","738d68d972d9e1a25c2561e30dda3e2c"],["/tags/工厂设计模式/index.html","81f8b0059756244d0f225ac39292bdbe"],["/tags/懒加载模式/index.html","d133e279c068470a30bc7f5863d86af1"],["/tags/抽象工厂设计模式/index.html","03b1447e05c86239d19eb6cb60e6625d"],["/tags/构造函数/index.html","01dafc813200415150efc7ecc1feb190"],["/tags/架构设计/index.html","7f1befa88a7ce9982c339eeb3443026c"],["/tags/生成器模式/index.html","9039c83a86a53a042793cef62159ca0c"],["/tags/用户体验/index.html","95c69b9836bcd83c624984b1bdf665f9"],["/tags/自动化布局/index.html","3c8dc4ed07429b6f11e6b2ba482eab0c"],["/tags/自定义UIView/index.html","4060a61cd7c86fdb15d3f72a905d32ba"],["/tags/自定义转场/index.html","d2b976292811d5a46956d0e2d7ea171b"],["/tags/自适应布局/index.html","d3b6fadd69ad5095e5a0b2d674ca17ee"],["/tags/设计模式/index.html","6ce76458365310ce101f73039a2fc390"],["/tags/设计模式/page/2/index.html","f84ad5bc84d5da46e25c7c197c07da0f"],["/tags/设计模式/page/3/index.html","5b38c580cb7a76e14d3809327214f985"],["/tags/迭代器设计模式/index.html","d91a108f0a775293fde26b8fbf9039f6"],["/tags/适配器设计模式/index.html","2ad56e9f5225604e888a366b4e05d310"],["/tags/静态工厂方法/index.html","05ec923a8ae9437ccdd7ed57175e2700"],["/为iOS应用构建输入表单/index.html","2374df8adf339211d5a480b9d31164af"],["/产品开发的幕后花絮/index.html","58c42259f034ae0f164d42bb9ffe6693"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","9cbb40f8ee1a2a1ad85a981c156dd6bf"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","591b5fe0dea02ff9bdaeea03b0082f26"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","f40cdbabbebe6e24698fc9f26552ba10"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","41cffa2cd823440da12bc6fb093ef13a"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","b46e9f48752413fbfa46db820d7fb205"],["/在Swift中创建自定义集合/index.html","2b1b17755bdc772c657832d5d912354f"],["/在Swift中处理非可选选项/index.html","07c17a43145f834d814f0b10d79fd627"],["/在Swift中生成随机数/index.html","f295bba84f619d3bdbb8b6792abe28cc"],["/在Swift中重构单例模式用法/index.html","810bc09156c1127c45b6d7f228d25e9e"],["/如何为VIPER编写服务？/index.html","66aa0a9d5613fe75c928e401ed3b95f1"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","03701241fc3c5b4d1e753fe17b8143f9"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","1866ada9b94857b41dc35db2ee536221"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","6d6d5e963da56835f98f812dd5a5f1dc"],["/如何使用VIPER构建SwiftUI Apps？/index.html","65c66e4b91db84126d43911ea318d3dd"],["/掌握VIPER架构/index.html","120a908597f28e705bb4d09898c20352"],["/揭秘 WordPress Hook 系统/index.html","61fa957054195d527478c5c1a256aa21"],["/比较工厂设计模式/index.html","851b865c84185bfafaaf3f166fc595ed"],["/深入了解Swift中的Grand Central Dispatch/index.html","e1724164c8455b417018ded5b551f0d1"],["/深入研究Swift框架/index.html","630eb32df52cb56ef4549d8f75b21b2a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","9f45d0349af92d351ec7b8464f0ca621"],["/选择Swift而不是Objective-C的5个理由/index.html","5b62585b60a54d23a9e2e13ee17c9591"]];
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
