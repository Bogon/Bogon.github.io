/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Functional Swift 初探/index.html","2e9244fbabad3c5002bd42ebf2b12780"],["/NSCODER和SWIFT初始化/index.html","6501b728b8db3c4026e9216448f1e94f"],["/Swift 5使用UIImagePickerController拾取图像/index.html","8f7c4ef1f29d9499eb2da833ecdde46f"],["/Swift CompactMap vs flatMap：差异说明/index.html","38e482fac0d18c251c5ce3c2b9eabf54"],["/Swift Grand Central Dispatch 深入实践/index.html","c070f5bc3d170b109aeddf0abb7882ba"],["/Swift Lazy属性初始化/index.html","6e9ecbf8923bb64f8cc5fa7fade84bfa"],["/Swift Promises 初体验/index.html","7279d485b557a7e62adf45844c543b35"],["/Swift Promises 探究/index.html","4cb0a4ce31bf56a3fca1b2b7431ca827"],["/Swift UICollectionView使用指南/index.html","b4b078c064653bfbe382fd56e6d3057c"],["/Swift URLSession && Combine framework/index.html","e097274e3f49c23ab9562ad6091b3d78"],["/Swift 唯一识别的视图/index.html","5b0cabe603dfe01da92c59a8dd183b28"],["/Swift 如何学习现代UIKit？/index.html","3cee878d1cc69893828e38034d0dd5f7"],["/Swift 用 compactMap 替换 flatMap/index.html","3b4ab62be27f0582a3b254f6289bf5ac"],["/Swift 选择和播放视频/index.html","8c14674da8caeb846cf6c739e1b02e3d"],["/Swift中UIColor最佳实践/index.html","40f724935a30c2dddd501698e93f8aeb"],["/Swift中快速简单的工厂设计模式/index.html","23cefe667d54adef9fa484d19ea9f8ea"],["/Swift中构造函数与静态工厂方法的比较/index.html","c4c9ba7a8a8e1b16cc924d1c3a540f25"],["/Swift中的UITableView教程/index.html","bb29fbb730e8f6ad9271ba4b8aead869"],["/Swift中的懒加载模式/index.html","27e695d4f7827b0bd4da3677dc41b4d4"],["/Swift中的模块和挂钩/index.html","c8e1de41a6b6c65021bf2e645cb94249"],["/Swift使用布局锚点添加约束/index.html","57dada9e475db85ec5ee8b54a773fc66"],["/Swift依赖注入设计模式/index.html","ab9c7bf269c774b9ae1f5ff3250d13b1"],["/Swift关于Dependency Injection (DI)/index.html","0189757a9da293e7c9e44954f771e181"],["/Swift初始化模式/index.html","2adb34917d23c57ec93ac36a815d46d2"],["/Swift单例模式/index.html","a5e30912ca1261bc4f3cb28cebbd1d78"],["/Swift原型设计模式/index.html","a39ef1f383906a3f0e1b7286e5012147"],["/Swift命令设计模式/index.html","acb0da831a162ebe09c03a765769c71f"],["/Swift外观设计模式/index.html","105ffaca80460b41becfcc1863c2b140"],["/Swift委托设计模式/index.html","5a07559ea3831e21293029b707992ddd"],["/Swift对象池设计模式/index.html","063a91069580185e1735d2f587d0700d"],["/Swift工厂方法设计模式/index.html","ca13d6c1e0bc418ce8d208ee5cee457d"],["/Swift带闭包的懒惰初始化/index.html","b259b5e6809c1dd82952e98785408b46"],["/Swift抽象工厂设计模式/index.html","6e06212c7705bdd6f6be5531ddb8dd74"],["/Swift掌握iOS自动布局锚点/index.html","759bbc1bf7be0a7e1d9f1271a3ba75cf"],["/Swift支持旋转的自适应单元格/index.html","cef05019dd426ec0e0807a814c97725f"],["/Swift枚举值/index.html","2aed6594dcda9f60df8b9a48fe0b4d13"],["/Swift生成器模式/index.html","55e7d37e0f3c99951d99358963868ee9"],["/Swift结合Xib文件自定义UIView/index.html","4cea9c7c45e242c4fd8477c5dd3ba0da"],["/Swift编写的20个iOS库(一)/index.html","10ef69aa7b62668131f2f40df76e1eab"],["/Swift迭代器设计模式/index.html","e197d70fb44c68a91291a081fca48e40"],["/Swift适配器设计模式/index.html","15580fd426107095bf86af66a4357e56"],["/Swift静态工厂设计模式/index.html","9f948979e22051ea892866f300ab556f"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","2683b4501f332f52fd5f59040152442b"],["/UICollectionView data source and delegates/index.html","454b2d653b5426d33b05e748d2d8cbce"],["/UIKit初始化模式/index.html","0a05518040a77a6053a31476cad68eca"],["/Ubuntu18.04替换国内源/index.html","d604f8fb1dc671b25ee1d92a8ff915c1"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","d5f4cefb69d2f866e88d2898be009bea"],["/Xcode扩展/index.html","f9d3c2e050a6a93d875ae4b2637ebd7f"],["/about/index.html","644f87eac96b353242ac40854872014b"],["/appleOS的Networking示例/index.html","508691fcbd52833728c0b76a40ced8c0"],["/archives/2020/04/index.html","32833f11180fecadde4c4736ec75bc3f"],["/archives/2020/04/page/2/index.html","ffb90299ef42e42e8c77fd3886848785"],["/archives/2020/04/page/3/index.html","446b96304d9a0a306e146bd69ee4b25c"],["/archives/2020/04/page/4/index.html","5c1f670649789849cdf760dbfed05a97"],["/archives/2020/04/page/5/index.html","672e5e39e8432f31b95f6f65cd557fa6"],["/archives/2020/04/page/6/index.html","844a216c620ac30c12703a226dccbee3"],["/archives/2020/04/page/7/index.html","0d96a7f3b49789a3f52458a3693d3127"],["/archives/2020/04/page/8/index.html","7ea9cef58cbd44d3037fcf46153ede4a"],["/archives/2020/05/index.html","783f741cdb3d4dcf9d5de0dcde5c48c0"],["/archives/2020/index.html","584eaab21b0fc0eb07cabccf9a7eb1ed"],["/archives/2020/page/2/index.html","db617e754b7ef85e00a2e960d8b95373"],["/archives/2020/page/3/index.html","3a737a00b0a5631c1b9f1f09a29c7d05"],["/archives/2020/page/4/index.html","bef43136cbeb175190e964e69da031f7"],["/archives/2020/page/5/index.html","41d2ad58bb9fbeb4c63e45b10bcca892"],["/archives/2020/page/6/index.html","162fecf8c7f7a295b6a6ba4950fea595"],["/archives/2020/page/7/index.html","98a4c59b620cfd8dc03adbf561f8f1b5"],["/archives/2020/page/8/index.html","0f77388fadc18750182b08ac2a216f12"],["/archives/index.html","7d5bd41b1d7a7539a6b20377b588b3da"],["/archives/page/2/index.html","b2d0e25c109a9fc8d14fde3f887893ad"],["/archives/page/3/index.html","074aecf7709f0ee52c2378a0664b1d6b"],["/archives/page/4/index.html","1d5e407a0e6f278a50c3c9208d978e30"],["/archives/page/5/index.html","f70f8ede337eee4c8f21b16b7fe901cb"],["/archives/page/6/index.html","41bebb5b122e1c73719f40cfd63a55ec"],["/archives/page/7/index.html","25adf5c147c77539b791902d0aba0def"],["/archives/page/8/index.html","83ee5ee71f757dcb305c23d432eed2f9"],["/categories/Codable-protocol/index.html","9864548e535a896cd0bb7334c7d11452"],["/categories/Combine-framework/index.html","a2edcdeca05e617dddb9d5f634a1646a"],["/categories/Grand-Central-Dispatch/index.html","b6c4cf6d13ea875acca2cca5dfcba34a"],["/categories/Hexo/index.html","1d0a437806e34602dbeb215253ee9f2d"],["/categories/Promises/index.html","7729cd78a2a23a3d2babab21a61e019a"],["/categories/Result-Type/index.html","8eee3e930ba8ae2e89c9460bf5f4ca4e"],["/categories/Server/index.html","16d095b11aae564726241c6d59aedd54"],["/categories/Swift/index.html","3547c819f73db31969cb00f3670c3099"],["/categories/Swift/page/2/index.html","77d2830dc3d06615c9426e6bf0c1c74a"],["/categories/Swift/page/3/index.html","00eec73b9213cea94a404ac4faf24876"],["/categories/Swift/page/4/index.html","054877e4497309a3423a28c95f1b9f19"],["/categories/Swift/page/5/index.html","37800ce2b2eb31b0dddffb10c64b52f0"],["/categories/Swift/page/6/index.html","fdb03099242c90ff5f67ec4c803a470e"],["/categories/Swift/page/7/index.html","9af29852bbc5b418d436c925be0a591f"],["/categories/Swift/page/8/index.html","b46ded1af7a3d1428ecfbc4cbbad5327"],["/categories/Swift5-2/index.html","50f040a808795525494ebf1a54a66b7a"],["/categories/SwiftUI/index.html","9834f0d9c836641fc2c0e405f67d3b35"],["/categories/UICollectionView/index.html","f6f5345b8da43e499401dec7df74aa8f"],["/categories/UIImagePickerController/index.html","b232066c18e97df322df7dccad8e7a47"],["/categories/UIKit/index.html","064df7e76ffaf2f45941fc8caf24b450"],["/categories/UIKit/page/2/index.html","a253638692d24ec47f44e78488996ba4"],["/categories/UIKit/page/3/index.html","46d637fa809cca8661644470d5925aa9"],["/categories/UIKit/page/4/index.html","fa5ac43116433921357c4761cada0d32"],["/categories/UIKit/page/5/index.html","9390f96794775bec71ed930f5b25b4ec"],["/categories/UITableView/index.html","42bdd57e03da414679f0284955416c7a"],["/categories/Ubuntu18-04/index.html","53b262a323c4a753d069bb5d6e6da9a9"],["/categories/Ubuntu软件源/index.html","5186f5b639af09d8bc3c9505e2c2f7f7"],["/categories/Uniquely-identifying-views/index.html","08b0f17ed75e76cb00db95f287ee432e"],["/categories/VIPER/index.html","cf3764abcb76133823f9eea2d0fbd3c7"],["/categories/Vapor4-0/index.html","2a8453201c6085ccbbe2b2c7afbdce4a"],["/categories/Xcode/index.html","33137d834e0296c70923bd8ee2f0a243"],["/categories/appleOS-Networking/index.html","2f92d1410995d876cb9755c4114fec99"],["/categories/enum/index.html","dd8d8593022a666e6dd86de287c22f83"],["/categories/iCloud/index.html","69dd45851b3524ce33d68aa070c33529"],["/categories/iOS/index.html","f367e42a8410a1afa136aa0fa0a86e11"],["/categories/iOS/page/2/index.html","77a3ba6af1443e870a2ba73c2030ce58"],["/categories/iOS/page/3/index.html","760b42bd1f77a747207bcdeafc1792cf"],["/categories/iOS/page/4/index.html","359fee107946ec80dbf129705cbd02e5"],["/categories/iOS/page/5/index.html","1a20796f48aa3d520052da110345dc35"],["/categories/iOS/page/6/index.html","a197bdc9610ff213f6559e7b8c9bc2b5"],["/categories/iOS/page/7/index.html","940da3001a0e6e5553dc90f2aa2e9312"],["/categories/iOS/page/8/index.html","e45f6b56bd6bbb54b6aa697dac023191"],["/categories/index.html","cd0e4843e2b8293b20ddc4abc262610c"],["/categories/random/index.html","4debba256bf19a2d4b25b9de7746d6c7"],["/categories/三方类库/index.html","ff52a9a9ea75b85c191b9fe80883d4bb"],["/categories/函数式编程/index.html","3be0ff4bf5921829ec002aac61a59930"],["/categories/子类化样式/index.html","ff9d8a1127c80c296b2f830cbf58512f"],["/categories/架构设计/index.html","06288fc0b88918247f70c756ccd5fa66"],["/categories/用户体验/index.html","5dc92b42947cd6c108376f272ade701d"],["/categories/设计模式/index.html","fcfc200efea61b06847c7b034f2f833e"],["/categories/设计模式/page/2/index.html","1711426c6b18eabd2e2b38724cadec2f"],["/categories/设计模式/page/3/index.html","d490127333ddf080bbcb398b45d7d44f"],["/css/main.css","402f6037dbb7ba98fe24a555bc685450"],["/hello-world/index.html","5ecfe3615bf15698870789211aa6be51"],["/iOS VIPER架构深入实践/index.html","6781a39fd60bea984921b08261476946"],["/iOS 自定义视图，输入表单和错误提示/index.html","4a8ca8df77c95a554c05e3483b815c03"],["/iOS如何使用iCloud文档？/index.html","9bacfa0291bd1dfc62a2657c264d4ee9"],["/iOS子类化样式/index.html","ce5883af24384131f63be2d4cc88e700"],["/iOS自动化布局编程/index.html","f45d2d887f0aa7c8dcad8a789ac93b46"],["/iOS自定义转场(By Swift)/index.html","486f30261994cb803701bf814f9498c4"],["/iOS项目架构：使用VIPER/index.html","1a1ee1ac1ae6a4c6181c49a6c515eded"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","242309bf1700cc5d149975295c9a4998"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0a949ad439304c0678f245534d10ffa4"],["/page/3/index.html","e0ed6056db3729c8b6f5debb2a26269c"],["/page/4/index.html","be949a293d230c7219371f1d571a607e"],["/page/5/index.html","8391585b943019ebb0c75a54d5c61169"],["/page/6/index.html","1ad09ec23dbc8023058b7109ac7b4be2"],["/page/7/index.html","04f1b390a7f40af897bf947c5e2e3244"],["/page/8/index.html","2725c690202831a463814c886e79ff2e"],["/schedule/index.html","f353c0f42ad8199958fed429ca759757"],["/sw-register.js","8b1b422be83f3e6660ba68484e51263d"],["/tags/Codable-protocol/index.html","900282d81125b18cd74052d1eaddfd68"],["/tags/Collection/index.html","68ac1cd7a651e07df2180c5c8eb6b710"],["/tags/Collections/index.html","a161b36e0d2afe1147dd2d7eaed1c2f2"],["/tags/Combine-framework/index.html","b9372b27eb6eca4b6d65b6f1609d5e4b"],["/tags/Dependency-Injection/index.html","06a5794f55f45c42be90e12742e961f4"],["/tags/Grand-Central-Dispatch/index.html","02a95e0e88643bc5ec4b31b400427cf7"],["/tags/Modules-And-Hooks/index.html","61b819a9a2ca2dba6f6e276f04e2dc7d"],["/tags/Promises/index.html","621c9dd9bfe92d175b1f0ce7ef85d93e"],["/tags/Result-Type/index.html","fba0ddebbd6e4575711786edad6aeed9"],["/tags/Server/index.html","dc56170f12571f9d6b2de42c35b8408a"],["/tags/Swift-Package-Manager/index.html","e3cb9b4b4633c15d82a96a0064d3f919"],["/tags/Swift/index.html","fd0a0551e5a0fea5c69f5452890bd650"],["/tags/Swift/page/2/index.html","bb165c63ef5a9e7153e3dbef7ae3de7a"],["/tags/Swift/page/3/index.html","b3126c1920622a931a3319ef98553dcd"],["/tags/Swift/page/4/index.html","a393afcee4c8c9bf2b51a700b3118320"],["/tags/Swift/page/5/index.html","13d3a715f8c9732f0cd3f8f51c21b749"],["/tags/Swift/page/6/index.html","c339a74509f0591f57a2aff810394dc2"],["/tags/Swift/page/7/index.html","b05abad22485849427c8423820d86f21"],["/tags/Swift/page/8/index.html","eacd5247382cf880ec951755d6a1f88e"],["/tags/SwiftUI/index.html","844560f94de922773f8fab6429da067b"],["/tags/UICollectionView/index.html","648379246040b71e14624a4e31bdd2b3"],["/tags/UIColor/index.html","ff50d2af195921ccf0842cc384a4603c"],["/tags/UIImagePickerController/index.html","cab422d13a3001dd8411dd431fcd5123"],["/tags/UIKit/index.html","dbb56823b7e00c9ff84bda0592c8e9fe"],["/tags/UIKit/page/2/index.html","25003b18c8e2037b1da15de51c1a200b"],["/tags/UIKit/page/3/index.html","8e604adc8daebb6cd2c221bb84a8092d"],["/tags/UIKit/page/4/index.html","1fa0c20072743ae9abfd2772804c8cb3"],["/tags/UIKit/page/5/index.html","279c9f684c4f90beda7eb63bee592379"],["/tags/UITableView/index.html","dddfdfc925da27f50ece1c8385fbf11b"],["/tags/Ubuntu/index.html","032cc05481bd8a86066bb8e47f7ead8c"],["/tags/Uniquely-identifying-views/index.html","c2704105839eaddb06db1864afe02d6a"],["/tags/VIPER/index.html","c89bf50f75349dec4019cbee3dcfc802"],["/tags/VMware/index.html","6e13e5f1024bd7fc342efabb119761b4"],["/tags/Xcode/index.html","2467ae67bcba66c85dc482c607124c14"],["/tags/appleOS-Networking/index.html","0eed1e1f823050e68177a8046e13bac3"],["/tags/enum/index.html","bc759e81153a20f6188025310ea0952a"],["/tags/iCloud/index.html","917e14da63b0576638deab35feae58a1"],["/tags/iOS/index.html","28ad8ed242123cfac3c390324733b373"],["/tags/iOS/page/2/index.html","2bd0b80046cbc77192d134f2cb2749bb"],["/tags/iOS/page/3/index.html","5f1402b27a9a675b4de49b82cabe4ac5"],["/tags/iOS/page/4/index.html","608cc95a14c680c86632f9e043cc0cc0"],["/tags/iOS/page/5/index.html","1143ad85cca2411cf575d97174054647"],["/tags/iOS/page/6/index.html","6ec2db0721f0e4ef605446c4cb5dde7d"],["/tags/iOS/page/7/index.html","f46da8b8e5986ea755a0675faac4551b"],["/tags/iOS/page/8/index.html","b109c3f42115ba63ee077d91a45d1c07"],["/tags/index.html","2e86ece74ad4d989a1c9f55600646bd3"],["/tags/non-optional/index.html","2bf25307a0151921c13b3b4603756840"],["/tags/optionals/index.html","871a39370b91c891e2650c229edab399"],["/tags/random/index.html","1290889a7aa119c880590b043b04da15"],["/tags/transition/index.html","660373531a520a62efbed354bf89ade6"],["/tags/三方类库/index.html","ed628f6cbe30f96c21eb4f5d67b46cee"],["/tags/依赖注入设计模式/index.html","5d0760777221ba6cffda00553b214d20"],["/tags/函数式编程/index.html","b6bd9cc0f2c905859f5a1964bd4f6b83"],["/tags/初始化模式/index.html","4205199b244f53c430d88a72dd69ce79"],["/tags/单例模式/index.html","a2d4027b7de24304ba22a13af79ce366"],["/tags/原型设计模式/index.html","d1047f2f62eea3ee3feed116cdfbef51"],["/tags/命令设计模式/index.html","20a84d4413114610437910201c61d3ce"],["/tags/外观设计模式/index.html","f18bdd426d146efda34fcf8a40639bcc"],["/tags/委托设计模式/index.html","3bcc79845bdf756893d63b08837ce093"],["/tags/子类化样式/index.html","b6dd201c9a5a864e2e42ebd9b5ef259f"],["/tags/对象池设计模式/index.html","a8190266f8bef2ecad4176a9a835842c"],["/tags/工厂方法设计模式/index.html","fdbc9d5f861bb0a08730699cb37eec95"],["/tags/工厂模式/index.html","180e55357ce373144bb70ea8c4d49308"],["/tags/工厂设计模式/index.html","9aa9566f63135b244b4c8858a949d302"],["/tags/懒加载模式/index.html","9646ceed47c580ae35a1faf5a4e65887"],["/tags/抽象工厂设计模式/index.html","f44e668181528ea93802c73d24d2e8b0"],["/tags/构造函数/index.html","9329c6090637b54acbdb11cec6e5e640"],["/tags/架构设计/index.html","3bec1f50feb567ee9b54f6d6c8bda13f"],["/tags/生成器模式/index.html","b6aa53006e6f374a6279e83780af0c04"],["/tags/用户体验/index.html","68c7391725095c85249a4d2504b0bea8"],["/tags/自动化布局/index.html","655345daad5b56e697d5e15994fb52c2"],["/tags/自定义UIView/index.html","bb76fe80d30e13306892121856c8b3eb"],["/tags/自定义转场/index.html","86b9c787358ce5e0dab3d906e1efa6b8"],["/tags/自适应布局/index.html","269e2311b909919af3362fdaac2867b5"],["/tags/设计模式/index.html","271622f822eaae9d4c5676c03a638f65"],["/tags/设计模式/page/2/index.html","d608a457efc42b5a97d7b93ad9f87d1e"],["/tags/设计模式/page/3/index.html","c249e122c84f6e7723c445a4c0bad37d"],["/tags/迭代器设计模式/index.html","4928af6f7a04111f203921c48623b378"],["/tags/适配器设计模式/index.html","38890dab17f8e083b93dfec3a1f0c428"],["/tags/静态工厂方法/index.html","fdd08c36a97e5030a9dfb141489c5c8a"],["/为iOS应用构建输入表单/index.html","be44c6843c054370314286642a836e74"],["/产品开发的幕后花絮/index.html","01d86406f2607b46aec275f4585b3496"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","34760d1094236bdf865d7e9c26076c92"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","aa97d5bd6d5174afe949fb9a90a90b17"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","6f6e94800ab722ff690714cf97cf2d65"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","2000ec19bc56374319897e450dbe2f9d"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","1598740984178cc5e74dff459a4e16f4"],["/在Swift中创建自定义集合/index.html","b68e736695454ac81bf12df6b0400e7b"],["/在Swift中处理非可选选项/index.html","941ca876fa6875e985eac56c95bae1e5"],["/在Swift中生成随机数/index.html","00cb8bc79256288bf4e559a5f4a3fbfa"],["/在Swift中重构单例模式用法/index.html","236cd8eff0d1d9e06e54aa9e1ddc7420"],["/如何为VIPER编写服务？/index.html","01e9a907539db29a3c1dac9361df6ce5"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","783e7dff09d1bac31acb3be2ef961ea8"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","35a28bbaec291af5f45f3302b9597f1b"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","ff8f0bcb82b0adf6b9f1e47f068cd7c3"],["/如何使用VIPER构建SwiftUI Apps？/index.html","03838341f9383e0ec5b7f9e34c81c9fa"],["/掌握VIPER架构/index.html","0cd11497c5608538c61342005c261fb2"],["/揭秘 WordPress Hook 系统/index.html","8890a1ca458394d723bdfff1089433e7"],["/比较工厂设计模式/index.html","138297e893a68a6947dbe4a470107c10"],["/深入了解Swift中的Grand Central Dispatch/index.html","7aa14511deebf1d25eb12f4f857bce1a"],["/深入研究Swift框架/index.html","5cbb11ba9fb08fa6750bbee9b0823e59"],["/适用于iOS开发人员的VIPER最佳实践/index.html","c79c6379bdefff3da51c8b469d74546e"],["/选择Swift而不是Objective-C的5个理由/index.html","90be8d6c43f810600df2f85399bd3057"]];
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
