/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","63b6488ccd7b05f6b42c0e70e0674d57"],["/Advanced Swift系列(七): Strings/index.html","7b23558f15589ca0794c351155602e37"],["/Advanced Swift系列(三):  Optionals/index.html","2a57494181e926959f151c5c22ae14cd"],["/Advanced Swift系列(九): Protocols/index.html","0bfd94d330af0bd13fc31d7f5bbde14e"],["/Advanced Swift系列(二): Build-in Collections/index.html","0940aa0c47e3d737d2893d939d2fc9ff"],["/Advanced Swift系列(五): Structs and Classes/index.html","64d607d4a497df81f5dedadb142cf05a"],["/Advanced Swift系列(八): Generics/index.html","82360a45f311f59c59bbdd49f7cc2a93"],["/Advanced Swift系列(六):  Enums/index.html","16942ba78fa24c85d01ab738b113298d"],["/Advanced Swift系列(十): Collection Protocols/index.html","f54bf647c630dc4282e00feeed253b37"],["/Advanced Swift系列(十一): Error Handling/index.html","1149d25275d0d12290d77c2370eedffe"],["/Advanced Swift系列(十三): Interoperability/index.html","e979ae83fd6d4a8986c11d41b886e0df"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","a23f9645b535cd677502ef9ef3785491"],["/Advanced Swift系列(四):  Functions/index.html","8f934d56ecb965246916434624f73455"],["/Functional Swift 初探/index.html","eae82cf95d39b1f4f2c624ca5493eb9c"],["/NSCODER和SWIFT初始化/index.html","295526df0153f1b3dbce7b850a7c7e83"],["/Swift 5使用UIImagePickerController拾取图像/index.html","9551dee615942d20c6df3b388cd0cb45"],["/Swift CompactMap vs flatMap：差异说明/index.html","9af2ca3f4d4663e2975a03ef7032995c"],["/Swift Grand Central Dispatch 深入实践/index.html","7366ffaae4ad17d28c3e96ccd7999e16"],["/Swift Lazy属性初始化/index.html","69df33c865136389d4a7c638d0d81b6b"],["/Swift Promises 初体验/index.html","5cb68e4dfbdfded40bb83dde015b59aa"],["/Swift Promises 探究/index.html","d0aa5b4e82d89b03a6e2f9bef30f0e9b"],["/Swift UICollectionView使用指南/index.html","6a60d7cd5842cec54cde1376b8b46c21"],["/Swift URLSession 和 Combine framework/index.html","d4d364c567d66b8366d4409d4cfb7bb3"],["/Swift 唯一识别的视图/index.html","f0c93c106f9a141e45c20e0cdedfca3c"],["/Swift 如何学习现代UIKit？/index.html","6a70b59895514da534601625f6eea669"],["/Swift 用 compactMap 替换 flatMap/index.html","e8f8abbec662a9de47b93420799f65b1"],["/Swift 选择和播放视频/index.html","0769c8b758a3f571b4f87bb3d4fb4ccf"],["/Swift中UIColor最佳实践/index.html","88f6e1970bd785a034cf1cc0dce66459"],["/Swift中快速简单的工厂设计模式/index.html","f1da5772ba8fc98ab40ba4c6915460d4"],["/Swift中构造函数与静态工厂方法的比较/index.html","3401675e15053d778f323cf6f1fd2833"],["/Swift中的UITableView教程/index.html","9b282302bb369362c470911dd18829da"],["/Swift中的懒加载模式/index.html","4edfb0db8c123d879c5991982b6f6c47"],["/Swift中的模块和挂钩/index.html","e40756c5c28a6820f75153a1af7749a7"],["/Swift使用布局锚点添加约束/index.html","d0f4f90b7dffafd08789bee3e487d656"],["/Swift依赖注入设计模式/index.html","2f1bda446d69568f705fd6d518905de0"],["/Swift关于Dependency Injection (DI)/index.html","74343987fd2cdc0c94ac463f54631b65"],["/Swift初始化模式/index.html","754eb2111bd7025182cfe44053e68b29"],["/Swift单例模式/index.html","252d8dd71d9c1ede290a13479930b67a"],["/Swift原型设计模式/index.html","a55d84691cd23eda8b01ba2aa1defb25"],["/Swift命令设计模式/index.html","7eda2c982f5401f7a87452bd706ea7b2"],["/Swift外观设计模式/index.html","dc7c94e11b9d1b4dba7d9399cab1225a"],["/Swift委托设计模式/index.html","bd838de1ab6671235ee6017c21f1d269"],["/Swift对象池设计模式/index.html","dfa195d85d23e3269bd298c0bd0f25ec"],["/Swift工厂方法设计模式/index.html","0993fd493bafc29eaa6e97c338507e65"],["/Swift带闭包的懒惰初始化/index.html","4021166cf4eab58f824dfe115c8c9c18"],["/Swift抽象工厂设计模式/index.html","2d460faea115b708101d962bd9384dbc"],["/Swift掌握iOS自动布局锚点/index.html","38c40a915eaaa60611fb202307da50db"],["/Swift支持旋转的自适应单元格/index.html","bc9f88a0d78c11b33c43abd10aa07d51"],["/Swift枚举值/index.html","6fc112c45affa6dc6a9bc7850d48fa7f"],["/Swift生成器模式/index.html","723e56c6a272112a9f576ee440017e28"],["/Swift结合Xib文件自定义UIView/index.html","83c2b1ec553bcd5cfaddeff538c0c9c4"],["/Swift编写的20个iOS库(一)/index.html","8e95d21beec4f6dbab01c476e3ed9a2d"],["/Swift迭代器设计模式/index.html","1063baa0023d4dba57a0ddc881d8e780"],["/Swift适配器设计模式/index.html","c34bd4615c9b1975cb28fa2a0cd7e703"],["/Swift静态工厂设计模式/index.html","bc4ff57348d515e4ec3e799b3567a8e5"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","978caa746bf292564fc9fc13711f6512"],["/UICollectionView data source and delegates/index.html","fa0928dc5bc19fa78bf2da24dbfef463"],["/UIKit初始化模式/index.html","22190040816193c826f59c7458c61a4f"],["/Ubuntu18.04替换国内源/index.html","50db4ccaaa1b4223383749ed2a51c3d5"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","22e8d7c23ac2aaab47f54394786df675"],["/Xcode扩展/index.html","260510b1099a0ea52b73442f39fe6e08"],["/about/index.html","071e5e0a1ef8d01c21ca12bd269e683c"],["/appleOS的Networking示例/index.html","968c37419994e5cc16a78e57892efb61"],["/archives/2020/04/index.html","1f30d21fa79e1b385955b9a412624fd9"],["/archives/2020/04/page/2/index.html","0a647f4bfb1e955ce9d14666bd37dc5a"],["/archives/2020/04/page/3/index.html","d5762a51e5d4e0c12e56682b6cf237ce"],["/archives/2020/04/page/4/index.html","0e8a033c640976e612e78ec84f909fd5"],["/archives/2020/04/page/5/index.html","0e0e2232c7c39aee0cdab6d7d8405249"],["/archives/2020/04/page/6/index.html","d958209bfccb0284db2a3347da4437ea"],["/archives/2020/04/page/7/index.html","97fe3cc32137e84d5997f582b7ff8bc0"],["/archives/2020/04/page/8/index.html","65cf4a286d5ee390102579ba3d0d9970"],["/archives/2020/05/index.html","ab4c5b0cb262a1bcbd6664723718503f"],["/archives/2020/05/page/2/index.html","48e76b54f04689ba36bfe8d914ba7341"],["/archives/2020/index.html","72cd0aac817e481b5924a2304faa7a60"],["/archives/2020/page/10/index.html","f81a283a6a361f73a1c17c611f2b9df2"],["/archives/2020/page/2/index.html","b2185fcae07dbefe9ac6b492b3839ee7"],["/archives/2020/page/3/index.html","fa50364ade769a60c402d673482e3bbe"],["/archives/2020/page/4/index.html","b6bb5bfd70a1ed2d365b04e3b9c6a3dd"],["/archives/2020/page/5/index.html","7b117bb4ffb19b6ce51952de8fbe8232"],["/archives/2020/page/6/index.html","2da7cb3c21412e374684d732f17235c9"],["/archives/2020/page/7/index.html","3772153f217f89e0f89fc5ae9a386441"],["/archives/2020/page/8/index.html","c9463f264f510fa7461f99cfc45fd3ac"],["/archives/2020/page/9/index.html","6eedaadb46462ae67e4e78ad3e9488c2"],["/archives/index.html","d38c969fe294dd777bd1d32cded88286"],["/archives/page/10/index.html","bb30d096d57410bac9382e93b195bff0"],["/archives/page/2/index.html","62ab58e95f4a3a951b94d79fc49d5c3b"],["/archives/page/3/index.html","7a051ecd6b4401f0c30405cc54dd0c38"],["/archives/page/4/index.html","c54c4a74748e561ff022da4438bb42c4"],["/archives/page/5/index.html","d059fbe4b28a10ed6ab70a9e20359f95"],["/archives/page/6/index.html","39fcc2f529cd22e30ec1eac80ed670f8"],["/archives/page/7/index.html","00aa60007b71c9bbd46ed890606c4156"],["/archives/page/8/index.html","3b1c7298acc4f41fe3c348091c0b0cdc"],["/archives/page/9/index.html","b42c3c2bf048d5a7d92aa74d421ea706"],["/categories/Advanced-Swift/index.html","17d939f250a8b845801cee2c81030964"],["/categories/Advanced-Swift/page/2/index.html","aedf3584ec0db8cfecc74eaaf99ffb56"],["/categories/Codable-protocol/index.html","c7a5d5a495d4fe138f7f0f55fce98b11"],["/categories/Combine-framework/index.html","b9be4be0af78ebe19ba695f0e6103cf7"],["/categories/Combine/index.html","a7439b00b97252de0a8adedc1804f9f0"],["/categories/Grand-Central-Dispatch/index.html","448ed768e317e44da9eafee6215011a3"],["/categories/Hexo/index.html","5a73745cc2d1b3ad6c334f7a7a4fc6e8"],["/categories/Promises/index.html","e456eb5bd31a613705cb0765e328e361"],["/categories/Result-Type/index.html","f03d626a26274bf3de8e126eb650c86d"],["/categories/Server/index.html","b7dd621a186aa426ab685cbef5dd3c62"],["/categories/Swift/index.html","7bc16a1bb1067d7caa199615c146ed8b"],["/categories/Swift/page/2/index.html","da033ddc598f4e0471bf47c1b82fba51"],["/categories/Swift/page/3/index.html","35a14266faa36dbdd8599f8c41037341"],["/categories/Swift/page/4/index.html","ec088b488ccb89cc0c15ed3f75135e3c"],["/categories/Swift/page/5/index.html","71b635ebdca659b58afdbd5d5b8ba677"],["/categories/Swift/page/6/index.html","07e0f6cfb6fb968ca67ecc909581898b"],["/categories/Swift/page/7/index.html","3ff40874bf7f809e4dd26f3b0cdfdef6"],["/categories/Swift/page/8/index.html","fcb7406a904bb1f905324afece42dafa"],["/categories/Swift/page/9/index.html","a89361a5c16c158676108f6fbabaedbe"],["/categories/Swift5-2/index.html","9806c8f4b9c195e64ac36a5a18ea3ac5"],["/categories/SwiftUI/index.html","a3a7410a8f99ab35ee34595a66a780cf"],["/categories/UICollectionView/index.html","96b70ceb9aaa0e01889567d56df0e8f9"],["/categories/UIImagePickerController/index.html","b74c2bf24b8aa443469369e91e8abb31"],["/categories/UIKit/index.html","2280356a31470d1625d3d05d5f548b32"],["/categories/UIKit/page/2/index.html","a2df07a036df90f5c00f111206f36509"],["/categories/UIKit/page/3/index.html","3ecab77958205dfe1bb0f35792f4eaa0"],["/categories/UIKit/page/4/index.html","f86b5e00eb65e9cb6d17a1df2e8c6d99"],["/categories/UIKit/page/5/index.html","a81e178d752ec782f8c69ad68b09c126"],["/categories/UITableView/index.html","38025465ca598cf24ae83cac5e5b2b7c"],["/categories/Ubuntu18-04/index.html","842d147dd2865aa5e11052a69d9c6d7a"],["/categories/Ubuntu软件源/index.html","3114e1d92fa27f79246a1525510a82ab"],["/categories/Uniquely-identifying-views/index.html","0a7bc059c06418772f97b8e5a90e36d8"],["/categories/VIPER/index.html","3640404512997b030f224f2c3513430d"],["/categories/Vapor4-0/index.html","a0671b1db73451c7c549b432e2646e8d"],["/categories/Xcode/index.html","10291cd6d6af58d5f85dda412dc15be8"],["/categories/appleOS-Networking/index.html","109133a329143c1ca37ef7aa4afcfcb7"],["/categories/enum/index.html","ee42f790aeb32a726f8174cff4134e46"],["/categories/iCloud/index.html","58e3ac86ac36f2a7066455639fa372e0"],["/categories/iOS/index.html","5a1e63ff80cfdd9fc14f99e54675c258"],["/categories/iOS/page/2/index.html","cdbd2ebec8505c3978d1ad79765d4f59"],["/categories/iOS/page/3/index.html","47d63c409b08ac5d56fd8c3df07f2d4b"],["/categories/iOS/page/4/index.html","c9b799a9c155e10b5fc0b7d0c5376c34"],["/categories/iOS/page/5/index.html","5f93b8c26bbcddb03849a83144c2249e"],["/categories/iOS/page/6/index.html","805bbf1bd64b47c65832097210ce53a5"],["/categories/iOS/page/7/index.html","2e88545a2147267e376292a250be7e03"],["/categories/iOS/page/8/index.html","c69264383b933bbc29a2a8d28beca17f"],["/categories/iOS/page/9/index.html","dd165cece197363a551d9d16098f3de2"],["/categories/index.html","7623a6e1ab0ea88cd52233b9319c4c69"],["/categories/random/index.html","9caa06ea1ae47e77e48dd71e8b6d41ce"],["/categories/三方类库/index.html","e645ba0f30dbaf9540967c08399381cf"],["/categories/函数式编程/index.html","5bbb25452678d68da618c625d1aeb923"],["/categories/子类化样式/index.html","71a4e21ee0c8caee015d08f03d7db1a2"],["/categories/架构设计/index.html","c264c7d922f2edd9c1fedb96a5b9ba3a"],["/categories/用户体验/index.html","ce5cf0de7c3fcc266acd4b5b8979b529"],["/categories/设计模式/index.html","6c1498a07ea3de52aa28adda8aafda15"],["/categories/设计模式/page/2/index.html","ee9b20a91b231437175896a7ae722816"],["/categories/设计模式/page/3/index.html","d6701753c7faf2da1e2d5c70d299e8b8"],["/css/main.css","e6be28110884766d3b998d797c59b0a5"],["/hello-world/index.html","aa8d2b334707dd8549019f14231bdd61"],["/iOS VIPER架构深入实践/index.html","ee0aafcdac58485064260c0aa546a9ff"],["/iOS 自定义视图，输入表单和错误提示/index.html","e24e0d55eb2868eb07f8aeeedaa5ca71"],["/iOS如何使用iCloud文档？/index.html","9ca2cbc2f67bb15d5474d404d389eb63"],["/iOS子类化样式/index.html","33de24364d821607174e675d8d0d7ea2"],["/iOS自动化布局编程/index.html","7a6aff5fd39f3060a9730fd8d5b83f9b"],["/iOS自定义转场(By Swift)/index.html","4fdc4f6f024f4084907f7cecefda154e"],["/iOS项目架构：使用VIPER/index.html","acea081f9a9852a7abfa1a22aab49d49"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","52045c8fc5f9fee955d7e9adf087cc8c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","7483a12141f5d74b4e8c246a414856d0"],["/page/2/index.html","4287cb34bf13726befbb7f6311122966"],["/page/3/index.html","5bdd35115914f3a91a26bc6beacefa86"],["/page/4/index.html","da395faa770ffaf81018fe2a638ac95a"],["/page/5/index.html","caf2c8835205c2e48d0ed95680609279"],["/page/6/index.html","189db32d407b3ee95604f06b1b24c329"],["/page/7/index.html","5489583e6d6bb600d45821313fc7856e"],["/page/8/index.html","7e74784fdb6e4451806b65ff46034ffd"],["/page/9/index.html","5dbe9f367c3118f0ba0b0995349f087a"],["/schedule/index.html","9d827e05ba599d153cc4fe1b7fce7f4c"],["/sw-register.js","af106e3f2bcf23b0c6ffdc85b2017867"],["/tags/Advanced-Swift/index.html","642197caabd177437b22173b3e1dc672"],["/tags/Advanced-Swift/page/2/index.html","d3d0bc04e31b6cc22ffff56cd48f392b"],["/tags/Build-in-Collections/index.html","85d05fdc31d513923f91652f10ff57e3"],["/tags/Codable-protocol/index.html","16244e645034f605bb2bb506c4ae95f6"],["/tags/Collection-Protocols/index.html","f16ac9d422fe6ef66ad0058800e19e9b"],["/tags/Collection/index.html","5e1dfbea3878129619437483a466dfd0"],["/tags/Collections/index.html","3d9f70147afdb77bf15c0248bf709ba5"],["/tags/Combine-framework/index.html","20509e0c531af3b8b5a2b6dd2780bc35"],["/tags/Combine/index.html","fba97175d81d8da481e4a4344ea76794"],["/tags/Dependency-Injection/index.html","fc76533994392d696dac76d33d79af1c"],["/tags/Encoding-and-Decoding/index.html","a71622b97ce771fb4b2b368056bb58bc"],["/tags/Enums/index.html","80e8089f01c613cc9ea8c34fa7b083f9"],["/tags/Error-Handling/index.html","4e7e4ee932b2f23a0f8a2e933d37a11c"],["/tags/Functions/index.html","e858029a6a16338e87bdbc12be5b71b6"],["/tags/Generics/index.html","6682fd1a046607541827b9b341f8cd76"],["/tags/Grand-Central-Dispatch/index.html","1b5667d21a6bbc8f4aa5257740e2875a"],["/tags/Interoperability/index.html","62c2beaf434b1b76a28b5b0fcafead83"],["/tags/Modules-And-Hooks/index.html","47f7bf9ce7d44274b8e036b45a711505"],["/tags/Optionals/index.html","5089023f1720b8541b2f516ba7319f64"],["/tags/Promises/index.html","5d02485cb1e7f9c325f7e490c2a24cb5"],["/tags/Protocols/index.html","c5ad05e3e64438624360bfa67d7a9a45"],["/tags/Result-Type/index.html","db50d5bd81329e5bd6431b26965ca9c4"],["/tags/Server/index.html","672c771c22d4da1b1f0c2cf8bdafff29"],["/tags/Strings/index.html","36b40a73c2fad3368df380e9c86db498"],["/tags/Structs-and-Classes/index.html","9c08dd6909923e20d88e8c2e7907253c"],["/tags/Swift-5-0/index.html","d6253561c12b52a824106c41fd64c1a2"],["/tags/Swift-5-0/page/2/index.html","769a1622614a916b31119f48e220c649"],["/tags/Swift-Package-Manager/index.html","df94cd2c4d92f6f91eb6727a49f1dde3"],["/tags/Swift/index.html","54666e65711fab655b01397c4272bc5c"],["/tags/Swift/page/2/index.html","d5b6a40b4e7298467eb557e6bbf8cf03"],["/tags/Swift/page/3/index.html","06bacf11773179c640443e8bf02a8827"],["/tags/Swift/page/4/index.html","d030d9fd8c96a8cc80a758304a7743b2"],["/tags/Swift/page/5/index.html","be392a9b36ce1def3d4478482e39f77f"],["/tags/Swift/page/6/index.html","b17b0e23f6150650ab3168a1456022b7"],["/tags/Swift/page/7/index.html","12099b10cc1dd1064d94fedd5e806841"],["/tags/Swift/page/8/index.html","49e4c5ceaf110a10aafabe1204bd8e6a"],["/tags/Swift/page/9/index.html","8112e891c105a1b45141f88af1c7d680"],["/tags/SwiftUI/index.html","75fa01bb5a9b6341c59a1a72d44fffdb"],["/tags/UICollectionView/index.html","caa5c8e9f67adceefae970584c168cb7"],["/tags/UIColor/index.html","e3b995bafa9a900c0e031fa8d1533afb"],["/tags/UIImagePickerController/index.html","dd7e45f063d2ed79bf77e333127d0c2a"],["/tags/UIKit/index.html","a82033b0a4e4d671fe8d6d7bb44518a8"],["/tags/UIKit/page/2/index.html","b46fe94b7bbab88df6af618e0a5762ea"],["/tags/UIKit/page/3/index.html","7a3dbe87f4c20220247eeab68afb576c"],["/tags/UIKit/page/4/index.html","18c84a8e88e47ec99c861681a9574e67"],["/tags/UIKit/page/5/index.html","1d395a94a0d98fa00d3d9b33ee8ce21e"],["/tags/UITableView/index.html","1f1a274e24daa6e10d46d06de4dfc4cc"],["/tags/Ubuntu/index.html","163ff94f9cff539ebc7533a40a852fda"],["/tags/Uniquely-identifying-views/index.html","7197d3b184725f99fe6a10b4841e6b25"],["/tags/VIPER/index.html","15c976147a0a15355a153949296d6493"],["/tags/VMware/index.html","a55c0620ae5baebbddc03cfad95bc47e"],["/tags/Xcode/index.html","4e98c825e887c42127dc0f6cccf65f79"],["/tags/appleOS-Networking/index.html","63d12a3717b1ddebf2a59e70d09b89ca"],["/tags/enum/index.html","5c1616524e8cfdc69e8e1d4caf16f9a4"],["/tags/iCloud/index.html","9efb692d0cb2158bc5300cb7df1079b6"],["/tags/iOS/index.html","2295812dd2ede6103d6c4df5d9b4604a"],["/tags/iOS/page/2/index.html","d2f5cfbfd81ef7a00dc95c9382a21576"],["/tags/iOS/page/3/index.html","d9f727b412f1f55e41fc5054daedcd36"],["/tags/iOS/page/4/index.html","bf5633539a87f0f8ee301481e5b888dd"],["/tags/iOS/page/5/index.html","567f89e7a939ec11910a0d3bbaf35c9a"],["/tags/iOS/page/6/index.html","c8d33aa127bb3d47bca61f52aa393f63"],["/tags/iOS/page/7/index.html","bf5938e3a8a459ab196eda9d3ae04456"],["/tags/iOS/page/8/index.html","ff389411c9d1fc30e0bbdecb5d64381c"],["/tags/iOS/page/9/index.html","38024460a7f3f88005e4c467c7c6a375"],["/tags/index.html","64a81b14f124f7a60a7c6f59812e2849"],["/tags/non-optional/index.html","f094b250e55508be18cd03b7426dd55a"],["/tags/random/index.html","18dbe35d5666221505686628d1ac1885"],["/tags/transition/index.html","097864a1c0020c912b705c1fad11a2c4"],["/tags/三方类库/index.html","d8cc25f18570bbadea6eed54ddceba3f"],["/tags/依赖注入设计模式/index.html","1e86c60d7494bb435dc3923708aedd32"],["/tags/函数式编程/index.html","8494ce74a7bb0eaa1706faed6cc4a0ea"],["/tags/初始化模式/index.html","528e3f782028dd314a788c6535a29fcc"],["/tags/单例模式/index.html","2d1c96e53fa81a1dc53d60153252bd18"],["/tags/原型设计模式/index.html","aa6e0004e9053953c80097bc655f34c4"],["/tags/命令设计模式/index.html","3cf84969553c1bdaf707d7c87f0fc328"],["/tags/外观设计模式/index.html","f7233cb6d737f7d36959926ea3863ba7"],["/tags/委托设计模式/index.html","cfab3d730692713286d8c1afbebe5acd"],["/tags/子类化样式/index.html","c575d012781f6152b09cbea2ebfed681"],["/tags/对象池设计模式/index.html","fea72f44fdaa2b5e06c268cad7218932"],["/tags/工厂方法设计模式/index.html","22df2352cd4510186ec7e05d1a1740c7"],["/tags/工厂模式/index.html","571a688e6f535cc3a73a4d4956192c83"],["/tags/工厂设计模式/index.html","e62b8a20cbcfba8a97477426a3f269d7"],["/tags/懒加载模式/index.html","82b6194744278ac6fd352c36c8a83a2d"],["/tags/抽象工厂设计模式/index.html","c96934451ed4e44e021f18d1679ef2eb"],["/tags/构造函数/index.html","9a5ffa8d77002b49c1777891e843eeaf"],["/tags/架构设计/index.html","1c2d5fb022414caaf7e98888e8e4aa09"],["/tags/生成器模式/index.html","edc05020c6e97c2221b221288a12babf"],["/tags/用户体验/index.html","0bb594f3105d26ecc9771ce234a64a5f"],["/tags/自动化布局/index.html","60c7eec2f41522bcd44205ee96bfcf97"],["/tags/自定义UIView/index.html","9349ef76184337f4b865efebf5284652"],["/tags/自定义转场/index.html","7acc6bbad0d8f1b22887e1dd819f5e9c"],["/tags/自适应布局/index.html","1695af3d8278a1dc40d9ec7d26705207"],["/tags/设计模式/index.html","d5981b98f92ddbf3e158c57a7201995b"],["/tags/设计模式/page/2/index.html","dedb72c3cd39a6c2bbd015dcf336395d"],["/tags/设计模式/page/3/index.html","6b7f21b8bd4c68dcba4a78c4266154ac"],["/tags/迭代器设计模式/index.html","eb7facdc2e0a09252640eec3cab6ae47"],["/tags/适配器设计模式/index.html","e5f75362d3e7f3f7414eb89a508d8478"],["/tags/静态工厂方法/index.html","3894a6f8a8f327bcc26b7ebfb506deb6"],["/为iOS应用构建输入表单/index.html","aa37c3903d5b225507f87ebdc73d90cd"],["/产品开发的幕后花絮/index.html","f7e4b8817f80b355bfadfbc6b10a6499"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","e66682d1f782cadaa342bc904102f623"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","94638c22defa4dc8812ba9379f553abd"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","21f417912614b011ca5ec28b74695de4"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","5e1de4fd51a7a42d49826ffb8642ed6f"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","4f7156d37ea7f2711eabdeea938584fa"],["/在Swift中创建自定义集合/index.html","f81a21586940611003dc016102fcc1f8"],["/在Swift中处理非可选选项/index.html","49f3699c01cd215a1cb99e3f294f5c1c"],["/在Swift中生成随机数/index.html","e0cc2c735ef4bfb6435cab6cc1059b85"],["/在Swift中重构单例模式用法/index.html","2d91e1b45f91e1a0d1d140688aa67586"],["/如何为VIPER编写服务？/index.html","3db23d9b22e32c230e4cbdbad7f9a17b"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","4923d8a347fb333e203476b5bda25f11"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","91da037e05510997657c60b98a4ce7b6"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","982077fdf1df4b3ce0f5946b0f17d3ed"],["/如何使用VIPER构建SwiftUI Apps？/index.html","2d2d3363a00e6162e17147473c4199da"],["/掌握VIPER架构/index.html","f357fb45c61705f765e4a9e2f10efd6d"],["/揭秘 WordPress Hook 系统/index.html","a939d2869111a534b70a21edc01e3811"],["/比较工厂设计模式/index.html","b3bae5b423ec95c5c0af730dae62a5d0"],["/深入了解Swift中的Grand Central Dispatch/index.html","13516f24e1539b20dd4618d59f33601a"],["/深入研究Swift框架/index.html","acde2a90bf745efb932578659efe0365"],["/适用于iOS开发人员的VIPER最佳实践/index.html","eefd8276165d48f263903a60ac30b259"],["/选择Swift而不是Objective-C的5个理由/index.html","6b21e212bba1de0c426d6f25a002ea55"]];
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
