/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","d8d6481bc2d9b265e603707a92af19e7"],["/Advanced Swift系列(三):  Optionals/index.html","bf3dee66248c7e6820a1ebb10695e9a6"],["/Advanced Swift系列(二): Build-in Collections/index.html","ea87b8ec5b7e2daeed9c1d1736b8ca06"],["/Advanced Swift系列(五): Structs and Classes/index.html","70b0f9b624fe8c18c0664779f5d8b960"],["/Advanced Swift系列(四):  Functions/index.html","b45ba5b079dcf6010985ade141617cf1"],["/Functional Swift 初探/index.html","9f9b12b6959909b58622cee9b53c188b"],["/NSCODER和SWIFT初始化/index.html","1f244aae765c356ce54f83880fccee28"],["/Swift 5使用UIImagePickerController拾取图像/index.html","d30515fa18910e31dd6899c28788eea2"],["/Swift CompactMap vs flatMap：差异说明/index.html","1c4f90b0c1d661de4a8d1795b8e768c1"],["/Swift Grand Central Dispatch 深入实践/index.html","b1a003d87a088a5c275b73592c86bc5d"],["/Swift Lazy属性初始化/index.html","7bf663853e4f5356c1228c87983587d2"],["/Swift Promises 初体验/index.html","ee5140fc630e81933cf2c0817b5c566d"],["/Swift Promises 探究/index.html","38b3a1497ef1dd3fd99036984af0fc28"],["/Swift UICollectionView使用指南/index.html","47b7fb3a0000153b4ad1843d0622e236"],["/Swift URLSession 和 Combine framework/index.html","4c3ecd5ae121eb04902d374ac9ea9937"],["/Swift 唯一识别的视图/index.html","6b4cc939122d34d387d3380db80dd8e1"],["/Swift 如何学习现代UIKit？/index.html","118a232de9627a30a4aaf0a61d042f98"],["/Swift 用 compactMap 替换 flatMap/index.html","9f6ca3927909a9c02fe217e517938d1d"],["/Swift 选择和播放视频/index.html","f632039e5661f1460628c06e9cd611eb"],["/Swift中UIColor最佳实践/index.html","9fdc0801a9774672f81ac18c2aac8cf9"],["/Swift中快速简单的工厂设计模式/index.html","21a47217e2b1a27f3a724be23d3080dd"],["/Swift中构造函数与静态工厂方法的比较/index.html","72923b4de3df4125e51f3c3ba4b63d84"],["/Swift中的UITableView教程/index.html","43e46a6695f63f6a894270001d82dffc"],["/Swift中的懒加载模式/index.html","c69b8e4de1d361f09a02cf3440877143"],["/Swift中的模块和挂钩/index.html","92a2705af815af871b654de075da5444"],["/Swift使用布局锚点添加约束/index.html","6cceb416f00883f4f95b52a0111b63c3"],["/Swift依赖注入设计模式/index.html","3b70a8d8b584af52ec85db6100ad741c"],["/Swift关于Dependency Injection (DI)/index.html","15d49dc53b7df966172dc828d6d6130c"],["/Swift初始化模式/index.html","742babc4cf16d9a193486cd0a78b0cf3"],["/Swift单例模式/index.html","2c781a2c1620a7a2d38d04ccb19ec379"],["/Swift原型设计模式/index.html","f729dd91eb78c568ec7bb94a39ac90ee"],["/Swift命令设计模式/index.html","8eb5961094ef27788b851f538269c6ff"],["/Swift外观设计模式/index.html","94e823d83b95ec0f7ac0a1e320af3ff8"],["/Swift委托设计模式/index.html","75e9b2827400a06e5bca18f0f66db133"],["/Swift对象池设计模式/index.html","6bbc8edcf4a00248ccfd2f5e591d3f5a"],["/Swift工厂方法设计模式/index.html","faa76661a188167e87a35576e5dd471b"],["/Swift带闭包的懒惰初始化/index.html","21decd735f2f4fdd352283afd6bedc7e"],["/Swift抽象工厂设计模式/index.html","4b38c1640e38165256e1eb5cc5222f36"],["/Swift掌握iOS自动布局锚点/index.html","dd7ac5529806d883292528fd5f79584c"],["/Swift支持旋转的自适应单元格/index.html","e8daf341112e797c9d2248e05c7ed4fe"],["/Swift枚举值/index.html","a7ee359bb240f0fa51acfdd8539c8edb"],["/Swift生成器模式/index.html","f2614fa174b6f20105427171b3e0597b"],["/Swift结合Xib文件自定义UIView/index.html","82b5dcb2e03b3b92e8d6b31015d67c12"],["/Swift编写的20个iOS库(一)/index.html","4473de850f8ce5c8617efccb71f61e61"],["/Swift迭代器设计模式/index.html","dfea784a81ca5b4372b094dff5fa0eca"],["/Swift适配器设计模式/index.html","df608075a7f25798ead1ce2f3877842e"],["/Swift静态工厂设计模式/index.html","223d8c9539389b2b6ad37c6f7de6ab78"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","577ed3741c8042adc4a1b1a019775825"],["/UICollectionView data source and delegates/index.html","45d8c80cdf3e929ae389e28492cf177b"],["/UIKit初始化模式/index.html","b4b31af01e8e63c4d62dc6eff02300c4"],["/Ubuntu18.04替换国内源/index.html","3978dc7b50ebae0124e3eef5c835909c"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","713eb546fdab4522c48e2a5915467ab2"],["/Xcode扩展/index.html","1831319696bdd6eb70a22fd3b14eaf83"],["/about/index.html","84fbaf3c6199b422a727f703a5a761f8"],["/appleOS的Networking示例/index.html","f0ce70f2a5a7da727d08177ef9cefdb6"],["/archives/2020/04/index.html","fe9642e66ac46f1f9e834a525d7d2137"],["/archives/2020/04/page/2/index.html","d728f2cd068455643ddbbfafa8b9cb41"],["/archives/2020/04/page/3/index.html","b650d1d3be3052ab65bbfa8ff7616b93"],["/archives/2020/04/page/4/index.html","fd084a0cd20d380a5fdc4ff6d75d7737"],["/archives/2020/04/page/5/index.html","73fb0487d1806b4a0cfcf03e42dadaf4"],["/archives/2020/04/page/6/index.html","fc21b63fe898f48c34fa0700eb488f40"],["/archives/2020/04/page/7/index.html","203cea39d108f335a841547c6b399670"],["/archives/2020/04/page/8/index.html","15a4fc686e047116abff24d38222599a"],["/archives/2020/05/index.html","6de2984054a72f4174780887e30722a9"],["/archives/2020/index.html","ca95249095208be1c0141bcd1ac3b5bc"],["/archives/2020/page/2/index.html","11b914454191444523e65d178db5fcad"],["/archives/2020/page/3/index.html","be6e1166fcf68d64ad868cad2f1dee69"],["/archives/2020/page/4/index.html","34ce48c707c596a80aad901347f9c1ec"],["/archives/2020/page/5/index.html","46cebad57e959c8e98a4847db8ce300f"],["/archives/2020/page/6/index.html","fc2ffc200a41577092dbf8e58769bd97"],["/archives/2020/page/7/index.html","4c530e66cb5ead9804cc1b704ce4115c"],["/archives/2020/page/8/index.html","d931e36c3c9020d6568ab5ebbcb4a45d"],["/archives/2020/page/9/index.html","d762ae325aa6ea30ddb11bf6c7452496"],["/archives/index.html","792590e008a73ead7353f4d051d45a14"],["/archives/page/2/index.html","274e7ed2e48309e71839d184034ce615"],["/archives/page/3/index.html","ac6af3b6bd2df5032c857d5764e4ed5d"],["/archives/page/4/index.html","b459be1cf02867237381d5233934767f"],["/archives/page/5/index.html","fbeee5dec0a27a26c4120cb4862cb9ce"],["/archives/page/6/index.html","f1703c2003777b4973a108a1bd42df9b"],["/archives/page/7/index.html","f692f6b4bb3571f39613a8927d6c9a3d"],["/archives/page/8/index.html","11cc06cca98789c1a4e34e5888b29c30"],["/archives/page/9/index.html","56b4b3590ba002cd9b6890ec6215a732"],["/categories/Advanced-Swift/index.html","e22c00ebb3c873a5f5248857572f5212"],["/categories/Codable-protocol/index.html","f89c3df47910d28b358e3cba7b290a03"],["/categories/Combine-framework/index.html","c73f5d11ec7f003ca6bf6dcde9d4359f"],["/categories/Combine/index.html","09f559392f08d134c423fbe9e3cecb34"],["/categories/Grand-Central-Dispatch/index.html","54512daa19f30a64ecfbdb7c83d201df"],["/categories/Hexo/index.html","c4a746efa1edb333b7aab431ffc11207"],["/categories/Promises/index.html","b096716c89a2aa586566fe6bed4632e3"],["/categories/Result-Type/index.html","496387676d449bd480c7f05f61a674f2"],["/categories/Server/index.html","d6343f46d5bc021d5eb3898af5f5b256"],["/categories/Swift/index.html","1d7bbe67bd3861fd3b9fb3c47d59676b"],["/categories/Swift/page/2/index.html","bd634fba0772563fedea27cdc377dbdd"],["/categories/Swift/page/3/index.html","1b429ebc7c0b690c0f52fe36cba45bab"],["/categories/Swift/page/4/index.html","81dfe1467db206bf30e31e5ba0c20f12"],["/categories/Swift/page/5/index.html","a2ced9cf87716b6d2d7e1cd62d9f0ebc"],["/categories/Swift/page/6/index.html","e4e85522e0b990354fc492258eb35cdd"],["/categories/Swift/page/7/index.html","33eb4cf245835f306fc83f632f94ac08"],["/categories/Swift/page/8/index.html","40005387ad261d6323116b1cebe060a3"],["/categories/Swift5-2/index.html","4be1dc05520a183743d4f3f279badcb5"],["/categories/SwiftUI/index.html","f34de9a02f7fbb05d72106951fcb47ed"],["/categories/UICollectionView/index.html","95458c9b6a9ec7e748b4bb246e5ded38"],["/categories/UIImagePickerController/index.html","3bc40fddabf2fe1a9581848e725df971"],["/categories/UIKit/index.html","79f436d14d4afb15a16ba12962659ea7"],["/categories/UIKit/page/2/index.html","c1c38d387204b6c8b584e323bca66937"],["/categories/UIKit/page/3/index.html","44f29b09caa3d8fe707f97b93a15892a"],["/categories/UIKit/page/4/index.html","7ca525cecb890365f83aee53ba578eef"],["/categories/UIKit/page/5/index.html","5e0da076dc4586dd8a9e241cf0468d80"],["/categories/UITableView/index.html","9521b05f7bf4cd65486194beab826760"],["/categories/Ubuntu18-04/index.html","fbdb33f77552fd438addcf80ecc872d3"],["/categories/Ubuntu软件源/index.html","7945e34fe560b3be9b1341ba004eccd4"],["/categories/Uniquely-identifying-views/index.html","84773f0d07dbdbdf7b4266e884021f30"],["/categories/VIPER/index.html","d94cc4a28b8d847eb8700b225b83ca18"],["/categories/Vapor4-0/index.html","4a30ddfaf5ee7d24f78e634fe5d13b09"],["/categories/Xcode/index.html","9f2badc1a36ca83e9d1fe7ba3cf14923"],["/categories/appleOS-Networking/index.html","43ce645ade3eef5d3d3d39dd9e77ea91"],["/categories/enum/index.html","6ea7d0cd75b7ce3b6472c690bf7297e3"],["/categories/iCloud/index.html","bcec2007af1d0caa45ca1e05eab46a73"],["/categories/iOS/index.html","b726f900cef2bcdfd9274d242f32e0f5"],["/categories/iOS/page/2/index.html","703213724d5df25e8fe7089e8830358c"],["/categories/iOS/page/3/index.html","58311252d21ab6291e4805c036a4e63b"],["/categories/iOS/page/4/index.html","1f3448ec2e01f68071f523087a472888"],["/categories/iOS/page/5/index.html","3736f9a7347c669f6e9eb0d4a7a038c7"],["/categories/iOS/page/6/index.html","b258e1ec7f70ec7a331fbecbf8a0d848"],["/categories/iOS/page/7/index.html","850a3b25e4a35c458917f328cc41fa04"],["/categories/iOS/page/8/index.html","245b936ba1d7e25ba6c03eb49ddf5603"],["/categories/index.html","ea47679dbcb6af8950f930444901c021"],["/categories/random/index.html","8411470906e424665385d896d0e3a851"],["/categories/三方类库/index.html","b9d5c3d3fcbf9c9785e29a7e238f7ea9"],["/categories/函数式编程/index.html","e78894dfab02fe3e7940d2cb1d546d0b"],["/categories/子类化样式/index.html","75b12b26ba79592c55d4a697de0e95ee"],["/categories/架构设计/index.html","e9e822b65e05877b22de72af0fd3ced8"],["/categories/用户体验/index.html","b94b83737d29cb54e921fe104f489a2c"],["/categories/设计模式/index.html","aba521056f2c2bb2a0eef9e66dd5e66f"],["/categories/设计模式/page/2/index.html","035230ffa77a976a8a864cf7abe01331"],["/categories/设计模式/page/3/index.html","19f2aac5dc2fd9263187abc07c517637"],["/css/main.css","efbc76610b4e1b86b509195a8f9d3062"],["/hello-world/index.html","fd68cdb32c6e4979de7d09b58dc9c718"],["/iOS VIPER架构深入实践/index.html","7d988772ec0674ed408c2fb4c9c0288f"],["/iOS 自定义视图，输入表单和错误提示/index.html","75a0a60c03c2783ff139e466da28f450"],["/iOS如何使用iCloud文档？/index.html","42876aab425e828ebb51e4f5398a33e3"],["/iOS子类化样式/index.html","35c2eaf40cf9e7ba37cc58ceb4568cd8"],["/iOS自动化布局编程/index.html","203fa532a9586cca200bdf77c36c1b7e"],["/iOS自定义转场(By Swift)/index.html","ed4bf6262d0aa8af238cbcf9aae99eed"],["/iOS项目架构：使用VIPER/index.html","b7e8575d8578f66f90c8a80aefdce963"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","422cfdb78166768c5ebd756f9ef9497a"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e5af04d5a1ea15842f1fbc152577d892"],["/page/3/index.html","dadc94024834ac51c5eb477cf35855d8"],["/page/4/index.html","1ca6fc44ad3f7596924cb25195512d0f"],["/page/5/index.html","72a399b7169a8451e1fba7b57ed76796"],["/page/6/index.html","df811b97ddf9a59983ed5bc477442196"],["/page/7/index.html","df819ced03946562b90714588efecd20"],["/page/8/index.html","4d75324552e68a10cd432c6261aac2f5"],["/page/9/index.html","95215b224ee7e125e09a8ae414696e90"],["/schedule/index.html","fdfc1f91e19d1d3bbb74d8c67f13bc0e"],["/sw-register.js","7171e705276b14f1335c8003a117a4a0"],["/tags/Advanced-Swift/index.html","03a9c435ddb1e7f1ba9bf153b8716ec0"],["/tags/Build-in-Collections/index.html","086930e3ba40a7164838341ddc8b2e0a"],["/tags/Codable-protocol/index.html","2bdce9d7b9148140367b700d62288a0e"],["/tags/Collection/index.html","807d249e901a73eda1914460c88ca744"],["/tags/Collections/index.html","97c21cc5df0579aa066b5c1d47004989"],["/tags/Combine-framework/index.html","0fc4bd6d8ce4b9d316f8b99a3c42d4a9"],["/tags/Combine/index.html","3465c4750b5341dd9171a152d01b499a"],["/tags/Dependency-Injection/index.html","d5ef97db19f08d40d35b73128398ec88"],["/tags/Functions/index.html","e43d347250aba84ec1c4fdd98ce958ca"],["/tags/Grand-Central-Dispatch/index.html","4b20b440f570f302367116b9e6be0a3e"],["/tags/Modules-And-Hooks/index.html","0102494bbae9b6cb76a072153180ba8c"],["/tags/Optionals/index.html","0e2fe695796350978028bcee4600a742"],["/tags/Promises/index.html","e7065e2ba5026e2af1750c5bf9e7bba9"],["/tags/Result-Type/index.html","b55824b80cbf5cdd9cbaf475c510ef76"],["/tags/Server/index.html","7b659714e16982a4190fbc51dd5f4786"],["/tags/Structs-and-Classes/index.html","35731ac1860c8980e3fd379eb43d5017"],["/tags/Swift-5-0/index.html","c4afcaaefa008ebc02a6acb6a3e40cbf"],["/tags/Swift-Package-Manager/index.html","5c97a7575d831514b6a93e01d91297fe"],["/tags/Swift/index.html","185c36366dfe0fb1113a1c72d7d46ff0"],["/tags/Swift/page/2/index.html","1b7859624cf35eed48c92978a903eda4"],["/tags/Swift/page/3/index.html","d75cb51c78dd1d03958f9467806218f9"],["/tags/Swift/page/4/index.html","9a34bf5b99a0ffd81c01e00aa38f938f"],["/tags/Swift/page/5/index.html","8c13cfc0b7d9b8108c88d412d6277d86"],["/tags/Swift/page/6/index.html","6f849a121a9b12b7631d8535b59f7986"],["/tags/Swift/page/7/index.html","1eec7f7d7b62468a3778573535b52e07"],["/tags/Swift/page/8/index.html","5706e022dd9a5c106c1160c484af98ab"],["/tags/Swift/page/9/index.html","9d903d1554e2aff21b63668c2a0e1a10"],["/tags/Swift5-0/index.html","868e0e1e1f148ffb0f34128364d8c116"],["/tags/SwiftUI/index.html","5526c1fa8edbe26740321a29387ebf9b"],["/tags/UICollectionView/index.html","6816a89590c0e379e7f8ef9fc227a2c1"],["/tags/UIColor/index.html","11e81fe88a3dafb170c5ba207e977d67"],["/tags/UIImagePickerController/index.html","506c077815d0a5c58d175ba703b471f1"],["/tags/UIKit/index.html","8cf04ab59d5f31fde1eb3c5ac356ad8f"],["/tags/UIKit/page/2/index.html","a58ce1803176cac708b5af92b6de5add"],["/tags/UIKit/page/3/index.html","7350b24d96bf98b8e2e777dc3a433835"],["/tags/UIKit/page/4/index.html","5be286191601d453982e09a29b830510"],["/tags/UIKit/page/5/index.html","af439200aa67bbc0c1fcdb08ec9352ec"],["/tags/UITableView/index.html","c3865bc575510894f9d2146441bc3f8c"],["/tags/Ubuntu/index.html","b1d63a4d8d96bf8b86986614800e285a"],["/tags/Uniquely-identifying-views/index.html","f0127a668076e473e0e131152f5295ba"],["/tags/VIPER/index.html","90cf6d647345c4a69fcf2f0434acbaff"],["/tags/VMware/index.html","35e0df097dd38bf50ed86a21cd83e48b"],["/tags/Xcode/index.html","aedf782b5760b5cbb994a0b4119d7a38"],["/tags/appleOS-Networking/index.html","833435b43a063912b94c0988292b2e36"],["/tags/enum/index.html","03e4b57d15eb0fbe0fb3de99dfb1f4ad"],["/tags/iCloud/index.html","aa32c4b92e56b24f7c4cf1d26ea74068"],["/tags/iOS/index.html","beb42836327c40583fae2a5e90e3b91f"],["/tags/iOS/page/2/index.html","ab84b8870913e8673a3308cb2c5dd69f"],["/tags/iOS/page/3/index.html","6e47e8075c6ec7ec6cb6d2332812a4e3"],["/tags/iOS/page/4/index.html","2915b07c03a9ce2ac12ee496917f39cf"],["/tags/iOS/page/5/index.html","01fb278199b0fb1ae4fae35174e5a805"],["/tags/iOS/page/6/index.html","39156ee999091084f418078a20cf56af"],["/tags/iOS/page/7/index.html","edc2b6b719e804b6ee00755b2c29a715"],["/tags/iOS/page/8/index.html","018ccdd70d8c73fb9a05d8e57bb8abe4"],["/tags/index.html","fa00fcb61ac9f9fde69e4c10923d617a"],["/tags/non-optional/index.html","a33e5ea223a550eb07197460d5009b34"],["/tags/random/index.html","7cafa1fc0401356d6506095d2b54ad7e"],["/tags/transition/index.html","f961cec02a2a571dc168942c04479c55"],["/tags/三方类库/index.html","79957dc3fafdcdedf947d88f30efe0dd"],["/tags/依赖注入设计模式/index.html","c28594de64f176b67dd70bda75752cdf"],["/tags/函数式编程/index.html","019894f0ff7c5bdcc662d91cb9a34c66"],["/tags/初始化模式/index.html","c7e84e2e50856076d08247889391f6c9"],["/tags/单例模式/index.html","a0f73afbbcbeac4157e73d9adddee0fe"],["/tags/原型设计模式/index.html","d81a10fd313d040c51cc4b50ed16bae0"],["/tags/命令设计模式/index.html","7ad29e057b4901f4eb010c1a6e6681cf"],["/tags/外观设计模式/index.html","bae0183d8284b6dea388470b201d7edf"],["/tags/委托设计模式/index.html","1fdd1f1cfa1a43d9e604c9708e605823"],["/tags/子类化样式/index.html","370a6b28b928085516acad32528fc038"],["/tags/对象池设计模式/index.html","a0999b51a80b538e7a7289757404c0d7"],["/tags/工厂方法设计模式/index.html","867425661d9d0d7f80b576c1940fc68e"],["/tags/工厂模式/index.html","8b56bf0c9883750424d5878e9e44969d"],["/tags/工厂设计模式/index.html","8920479088cadb204f02b33777ec6f65"],["/tags/懒加载模式/index.html","a46e25d53d4c7be75e172e9e3ebdd492"],["/tags/抽象工厂设计模式/index.html","6695830f563d835ea920804adb081294"],["/tags/构造函数/index.html","a8cbdabcbd0f23ab5b311bdbf64902b5"],["/tags/架构设计/index.html","a6bb991e839f17a237b7bf56d6dc3110"],["/tags/生成器模式/index.html","7a0aa51273edb274df180c9959a17f82"],["/tags/用户体验/index.html","d3701bdc604f3f20c1b3efe3b721a02f"],["/tags/自动化布局/index.html","a0dc799127e61895bc53f96655919d36"],["/tags/自定义UIView/index.html","462364fad105e5a9d6e8abc936930c23"],["/tags/自定义转场/index.html","2cbfd7e256bc49568175199bce7dab13"],["/tags/自适应布局/index.html","1548f39369c59406a5544dffcac8c8bc"],["/tags/设计模式/index.html","f43bef8722503d16aba09d16ad49c116"],["/tags/设计模式/page/2/index.html","2b165a557a51fdb05765ddf4a62f8b0c"],["/tags/设计模式/page/3/index.html","be846888f9bc882c7a87dc10b0d1ebff"],["/tags/迭代器设计模式/index.html","65bbc8f46c870880e0a8ee8d7f5f3021"],["/tags/适配器设计模式/index.html","8b9edcc1f343de3886d4601395783c1e"],["/tags/静态工厂方法/index.html","a1dbad03219c0f22cea8e1e4d76376db"],["/为iOS应用构建输入表单/index.html","9c3e84b5f14b5f8384011cfec096ee41"],["/产品开发的幕后花絮/index.html","a3a94b5e57b8a6116206b0f8d6f94e66"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","2410891423eed18863b675b407c2e439"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","e13da30335421ad83f3d60582c58c598"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","288770f5681f00a3388807338e78ec61"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","4a6379f447d6ec578f4aba5cabbde5a0"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","af2889dc06dc4d60d4abf2e8ae011bca"],["/在Swift中创建自定义集合/index.html","ae18cf24097771377afde7cab580030b"],["/在Swift中处理非可选选项/index.html","bc27f5d2dc1f299782f979d56c7ea6ec"],["/在Swift中生成随机数/index.html","59c090144e4642e9545fd133af1a3306"],["/在Swift中重构单例模式用法/index.html","0a1032069d08a732c82a4f040e522723"],["/如何为VIPER编写服务？/index.html","c3c9e87ff449ee5c346629a7b2ff6bae"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","e782da8d1af0edb543f8af99cfcc27f4"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","e4379fd4f4b43b389ebfd22772e9823b"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","1d9ac9b39017bd90841a356548dfad21"],["/如何使用VIPER构建SwiftUI Apps？/index.html","1bc75b596f77a5e3f519ce469008a560"],["/掌握VIPER架构/index.html","81dec86d67aa7ebc66a880c4b4948abc"],["/揭秘 WordPress Hook 系统/index.html","0925ed92c42d5b5f9127135ade47a663"],["/比较工厂设计模式/index.html","87acc39d4e5ba4b8b690b17205d95a32"],["/深入了解Swift中的Grand Central Dispatch/index.html","95abf08810ad486eca366be11316214c"],["/深入研究Swift框架/index.html","660f99f5de6854be9c53f211e1ffbec9"],["/适用于iOS开发人员的VIPER最佳实践/index.html","eb64c1c92ba5864da5f671c8588b99c4"],["/选择Swift而不是Objective-C的5个理由/index.html","25916667da71859a6b4a08618fc488ce"]];
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
