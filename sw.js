/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Advanced Swift系列(一): Swift 简介/index.html","095d11cc2d9226d192069bab91bb8e5f"],["/Advanced Swift系列(三):  Optionals/index.html","dc4c701e4f71edbba6602f39651a440a"],["/Advanced Swift系列(二): Build-in Collections/index.html","cc82e8f7dac7cd9010b78c2eb8303d47"],["/Functional Swift 初探/index.html","a2f74834238c844f101a985a681da37c"],["/NSCODER和SWIFT初始化/index.html","d1c72d4ea8b9acf497e7a912af0b7bd7"],["/Swift 5使用UIImagePickerController拾取图像/index.html","4baaef6d4351fbd8d43d39426df56531"],["/Swift CompactMap vs flatMap：差异说明/index.html","cf817332e822ca4452d412095b8c5455"],["/Swift Grand Central Dispatch 深入实践/index.html","759f7af0e7145df9f9e38b84bdef1628"],["/Swift Lazy属性初始化/index.html","069128b8e0496b4b7ca66bdb038e3756"],["/Swift Promises 初体验/index.html","3bd15167be1c34398ebdcbd397e4d8bc"],["/Swift Promises 探究/index.html","62e594c8365cc37b613c4cc457a08005"],["/Swift UICollectionView使用指南/index.html","b39af5ccb88ee8d37b5d58d458b5c48c"],["/Swift URLSession 和 Combine framework/index.html","144c94634cf2c16fd91ee8915d5ba3a7"],["/Swift 唯一识别的视图/index.html","4738da06d4ae92e528b5afbdc1a78319"],["/Swift 如何学习现代UIKit？/index.html","faca7be6df133514021e0ad3c78ebca4"],["/Swift 用 compactMap 替换 flatMap/index.html","0faee2089f6b8a5ed1cbc4ea75feb891"],["/Swift 选择和播放视频/index.html","fea327ba3aaf2a9a5e5a741e3fe87285"],["/Swift中UIColor最佳实践/index.html","d0a4765a18c724a83ed275ab3a302648"],["/Swift中快速简单的工厂设计模式/index.html","087ea36dceaa6a021c5a3201255bcb2f"],["/Swift中构造函数与静态工厂方法的比较/index.html","de7bd58f0da0edd0184c4555ffc08c47"],["/Swift中的UITableView教程/index.html","07555801cb9a55a3c9d7d624fc005857"],["/Swift中的懒加载模式/index.html","45a10083dd04a6ca441c4a94229a69be"],["/Swift中的模块和挂钩/index.html","803ef8d57fb52d07a3c1fbaa6aa5ae98"],["/Swift使用布局锚点添加约束/index.html","7e2db0883199060d69a24d6adc1ed3a5"],["/Swift依赖注入设计模式/index.html","6c3d459aa11b7d0747c5d8946fd68d94"],["/Swift关于Dependency Injection (DI)/index.html","38c9d58acc8fbbed2be5be8da0350742"],["/Swift初始化模式/index.html","0010c6659be44a469ab318bf473bddb0"],["/Swift单例模式/index.html","1796a2b2e63783bd796cc4988ad479e9"],["/Swift原型设计模式/index.html","09f03be611cdbcb11a304ba2a0f9cfa6"],["/Swift命令设计模式/index.html","b86a51e76cda7b88550aaab2840d9b2f"],["/Swift外观设计模式/index.html","0fb0c8dd1dd26d634452e4dd6bc391d0"],["/Swift委托设计模式/index.html","a5734b343e57a1ae6058b2b4754d5136"],["/Swift对象池设计模式/index.html","e7650bdeeb0dbdb89390f227714bf809"],["/Swift工厂方法设计模式/index.html","5fd26fd0758ecf1bd9db4284d2868342"],["/Swift带闭包的懒惰初始化/index.html","d9b12e24970fc7f464fbc6d9146e71fd"],["/Swift抽象工厂设计模式/index.html","f3e57f16b58d77d1ef80ccab64b03042"],["/Swift掌握iOS自动布局锚点/index.html","b08689b256a90f1fd9578b0e80c88de0"],["/Swift支持旋转的自适应单元格/index.html","75ce7a3a2d3ed5fdf00d260e72aa0799"],["/Swift枚举值/index.html","fe2bd34ee8d4165b2ccbd74a56ddd1fa"],["/Swift生成器模式/index.html","877d209d523537873929d909af6bfdcb"],["/Swift结合Xib文件自定义UIView/index.html","2d6236b847db52bf948b251b023d2780"],["/Swift编写的20个iOS库(一)/index.html","b7d9b712835796fa8e01e5a32733e9e9"],["/Swift迭代器设计模式/index.html","b470c83628a31fde25aa73f7c7ae0335"],["/Swift适配器设计模式/index.html","1e58911ff6992ac09d44ed7ea98d5dcc"],["/Swift静态工厂设计模式/index.html","67bf30d847b5c644dbbd05ccf3bc2301"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","f1c727859e5ddf06d8dd0eba98cbe1ae"],["/UICollectionView data source and delegates/index.html","7b95cebf92e10272e8b604d4558cedb3"],["/UIKit初始化模式/index.html","955b9016067e886db88d0f88ae6db42e"],["/Ubuntu18.04替换国内源/index.html","c48409d2e705b3adcb705b499f0d75e4"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","40a736248c453752642c463aaf2ce3db"],["/Xcode扩展/index.html","1d7accfda486245da91933aa2ee9e25c"],["/about/index.html","7251c75843758daa75e9a500d8d1f387"],["/appleOS的Networking示例/index.html","266a07f540a1d54c853d72269016244e"],["/archives/2020/04/index.html","086c0d51edcaf8c2c69d1b23b4741905"],["/archives/2020/04/page/2/index.html","faa387cc14177ea8ca7bf0ed1f2998f6"],["/archives/2020/04/page/3/index.html","2f6ca262fda988f7b3a46b77d7f4e66c"],["/archives/2020/04/page/4/index.html","dd92ba7c0474b42c12a407fb1b126c4e"],["/archives/2020/04/page/5/index.html","2b55ddb7b3475036f2dca7dccb42b894"],["/archives/2020/04/page/6/index.html","536a6c488fb0719b08e4dd12a6b7f905"],["/archives/2020/04/page/7/index.html","8388bec3f993bf2b3e0cf587f22d5618"],["/archives/2020/04/page/8/index.html","93cc2660b25d82531bf493d3d1f08d05"],["/archives/2020/05/index.html","cd5e67f21962a7fb62ba515df90101e0"],["/archives/2020/index.html","623fb76578fb97370e538d913aa2901c"],["/archives/2020/page/2/index.html","4e56d28ec9ee31d0b88cb22d33c3f774"],["/archives/2020/page/3/index.html","6f2dba3f4c2e1eda895e68418c45d3f7"],["/archives/2020/page/4/index.html","d7d284eb25693c8568c8d588360421c6"],["/archives/2020/page/5/index.html","35fd6de92efda53b7de71bbb3d129ea7"],["/archives/2020/page/6/index.html","48e4531d6a0ab1a6600e4108734eb980"],["/archives/2020/page/7/index.html","68c2f339889716c7879e711128b65c86"],["/archives/2020/page/8/index.html","a620dfad67faf0b82d1592a610b6aca0"],["/archives/2020/page/9/index.html","6ac0372645a65e7033b7d590b7571d49"],["/archives/index.html","d0efe8a053df9c3af7f0a01629e420f4"],["/archives/page/2/index.html","dae390a877af710f404c2b2d143a170d"],["/archives/page/3/index.html","9f956361aadba8e82470124968ada417"],["/archives/page/4/index.html","b5150abd41710156d9c1a8068e36d442"],["/archives/page/5/index.html","4514956514c12db1697a93957d4f6605"],["/archives/page/6/index.html","a9414b7bf29c98f45fc8b351fb9661b7"],["/archives/page/7/index.html","a8e9970859a28fb7402154b06a72805f"],["/archives/page/8/index.html","0dc81f7e1382d307e24903c88a6365f2"],["/archives/page/9/index.html","e5d703774e76ab9b48113cefd7331deb"],["/categories/Advanced-Swift/index.html","3ae5e79b93d9ea90da1e6c099be1deb4"],["/categories/Codable-protocol/index.html","8b80d7c27843e4c40ddbafc5594ae413"],["/categories/Combine-framework/index.html","163330ce6a0fff40f593222bbe772317"],["/categories/Combine/index.html","13b1396c7bdcfe0848d030d4c9247b7a"],["/categories/Grand-Central-Dispatch/index.html","ccd624854fa234f1b005bd98fc0701e5"],["/categories/Hexo/index.html","c3216a4d6080fdf879ae5da991cf0cd1"],["/categories/Promises/index.html","4f471df89d2acde5729eb1c2be594fe2"],["/categories/Result-Type/index.html","1964cee6174aecac4b70c27e84b1e6f4"],["/categories/Server/index.html","8dd5f181f1b769b0804e17b40d3b1d9e"],["/categories/Swift/index.html","a4bbf9ab8df7ad1bed65c2c2563f5e96"],["/categories/Swift/page/2/index.html","4634766191ca3b803ab8ac84541c205d"],["/categories/Swift/page/3/index.html","1b901c5709a0e87d87dc4b6c210e3ea3"],["/categories/Swift/page/4/index.html","91845c84f34380ece0367d7497c68e3b"],["/categories/Swift/page/5/index.html","4024f876d7884b33fb75ce2a6d8b875f"],["/categories/Swift/page/6/index.html","e44d9ef807c7b5d161c26edd4115e5ab"],["/categories/Swift/page/7/index.html","45c4f174fbcf37dd07d68d93011da5c3"],["/categories/Swift/page/8/index.html","d0313528460d6a6710fe09a55b7ba35f"],["/categories/Swift5-2/index.html","9bedf197f918943965c1a713b4a7a5dc"],["/categories/SwiftUI/index.html","557eb434e28e5ce0832f01d358a0f70f"],["/categories/UICollectionView/index.html","d4258efb9c6ad196c22cb274597a326f"],["/categories/UIImagePickerController/index.html","ff2a4a653cb2d7b9959743e7f55e24b8"],["/categories/UIKit/index.html","8f5722d806392afd11420d44204f3e8a"],["/categories/UIKit/page/2/index.html","ac1cf757637fcf2998867aa774ce712d"],["/categories/UIKit/page/3/index.html","a09c1afc607775c671d0a6e36ed05070"],["/categories/UIKit/page/4/index.html","5d348e4fb54b7017d4dc983cf8d0b205"],["/categories/UIKit/page/5/index.html","5f9ac2dc6343f60405f46f6a569abc21"],["/categories/UITableView/index.html","46551f61d4f67d97905a1ffe1e1e6329"],["/categories/Ubuntu18-04/index.html","8f0982f29158614fda3997b4d11f97d5"],["/categories/Ubuntu软件源/index.html","10fb1367b5249716d9dc6a93fb1b1162"],["/categories/Uniquely-identifying-views/index.html","ae02c9ae83f320c3a7488a2c44097a1d"],["/categories/VIPER/index.html","bb0e9bbda803ff208ddbae8d130eaa87"],["/categories/Vapor4-0/index.html","521c61928dee1ce8c15de44d4f093c2a"],["/categories/Xcode/index.html","17db5ca366116879004042593eaea082"],["/categories/appleOS-Networking/index.html","2b7d61d3cd52534db9faf2da091d1623"],["/categories/enum/index.html","3a2c607198f1f74995506ecafd0d9e8f"],["/categories/iCloud/index.html","51e2d437559be013528ecb2ccfd57a7b"],["/categories/iOS/index.html","8eb25d5968467638cd1173a857eef196"],["/categories/iOS/page/2/index.html","a913157cd6cd18a063d851506cbfb0e3"],["/categories/iOS/page/3/index.html","407362e7976c06092f4daca0e28300f0"],["/categories/iOS/page/4/index.html","d4a6420e0c5fbc2bdfd90a55b42eed4a"],["/categories/iOS/page/5/index.html","f836849e8647e09aaadc674970715da6"],["/categories/iOS/page/6/index.html","3f2d74188b6367b76ab2c60dd6fc7ea6"],["/categories/iOS/page/7/index.html","efc1fad4045c0f3741f71e1ced161397"],["/categories/iOS/page/8/index.html","62af1d649fc6fc9276a738bfe1eda168"],["/categories/index.html","865f79bec651f7d6bfbda680ab97e494"],["/categories/random/index.html","fc11d90207cb19ebb27557e66d1e55ed"],["/categories/三方类库/index.html","fcf9184776b5c1309fb30b8d5722339b"],["/categories/函数式编程/index.html","e98c207d0c35edd94d8ffc1bf5e1d7b6"],["/categories/子类化样式/index.html","8bf9c6c7a454f2b051bc6b2609eec57d"],["/categories/架构设计/index.html","84fe0b89b7b8321ad6b51a8fda15632b"],["/categories/用户体验/index.html","a7d66aca9d167a5b3275cb8a1d6c224c"],["/categories/设计模式/index.html","643130318047d1edc4c988a6e6aa63f1"],["/categories/设计模式/page/2/index.html","6595578e79cf34c950427a337256e6d6"],["/categories/设计模式/page/3/index.html","7b50dc76722df2e6d389889e44f79631"],["/css/main.css","b4f08700408e3f78f6cf1964c1d1b231"],["/hello-world/index.html","546a8e3039e9dd04fb94ca097c4b44fd"],["/iOS VIPER架构深入实践/index.html","9c119e5ecd0df89348895cafbc217fc5"],["/iOS 自定义视图，输入表单和错误提示/index.html","77476f0429c8a73b9f091695b4b954ff"],["/iOS如何使用iCloud文档？/index.html","32974fc9c6c4bb3005ee797461751e7a"],["/iOS子类化样式/index.html","f276737375452332fdf95ffd95610de1"],["/iOS自动化布局编程/index.html","ab5b96b770918e80d9eb5e0ace2a8fdd"],["/iOS自定义转场(By Swift)/index.html","221306254589560d54ba9c0075e724b8"],["/iOS项目架构：使用VIPER/index.html","f8d776d3cca4a1b690c94ea11649961a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","4f7f683121373c4917490383d5912176"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","dffe3b06fe585d35b402f8efd2554384"],["/page/3/index.html","7c62dd5af4879fa90940dd7b1ff9477d"],["/page/4/index.html","b0932bca8480faa9fea4ff72b2d12610"],["/page/5/index.html","4ff5600a5d15199c6466a2097d661b81"],["/page/6/index.html","01e562f22db092c5115ac33a9c11bc03"],["/page/7/index.html","88a085131396406946d53043d0a9aac3"],["/page/8/index.html","12bcdd3305f417c6468d885a4e17a5db"],["/page/9/index.html","27bfad79ce00035fd8f9de1354407d65"],["/schedule/index.html","2888488b1e6b905bf887f3f46482be30"],["/sw-register.js","22af4b9c97eba60aa44ec9de020542d6"],["/tags/Advanced-Swift/index.html","d816a2de44b3ff60fe8abb0b7c7bdebe"],["/tags/Build-in-Collections/index.html","25c216c9c533f3aa1ab254ee0fe428e1"],["/tags/Codable-protocol/index.html","f40a19d59eff45f9192f72533f52443f"],["/tags/Collection/index.html","4013c674da1f0c14f49ca38a30574cc1"],["/tags/Collections/index.html","ee8164d74d7fd5571c5f74f6ba1baa0d"],["/tags/Combine-framework/index.html","2436b0b552eb45d00e5d9db93a0b699d"],["/tags/Combine/index.html","4db3b8e6b646e80292f7757082ff1f99"],["/tags/Dependency-Injection/index.html","17984bd0f2b7c31f75f0f4accc84eda5"],["/tags/Grand-Central-Dispatch/index.html","45e337675186a261166dcd6040f8b4cf"],["/tags/Modules-And-Hooks/index.html","a47b990e254f30bc4bfd97b464a6e475"],["/tags/Promises/index.html","f6bcbe70e90b9a807a2b4f0012da7110"],["/tags/Result-Type/index.html","f9c1db85d4476c840fcc9955cdb73081"],["/tags/Server/index.html","9325b8890e6e5908e2020de79582bf88"],["/tags/Swift-5-0/index.html","b3a1264dfc8ed782b40ee456ce84bb10"],["/tags/Swift-Package-Manager/index.html","a7e0d2fb69195f1bd0ba610698c63d5e"],["/tags/Swift/index.html","fa0faa18e521a0f91e9dcea82fcdb51b"],["/tags/Swift/page/2/index.html","1170202ffdd0c6bc95bb41934b350490"],["/tags/Swift/page/3/index.html","86047ef7b0a92674ae9df13c2b03d24b"],["/tags/Swift/page/4/index.html","afa1d61c7ba7738a816267670f58b126"],["/tags/Swift/page/5/index.html","d8fd20ba8959c58c2e6f68e412cda8a9"],["/tags/Swift/page/6/index.html","380327a915314936362371c4653409ee"],["/tags/Swift/page/7/index.html","e609484849fbb54cedce7adab406cc79"],["/tags/Swift/page/8/index.html","f0d9a8bf7bb51fd23ff4942a5d02f7ac"],["/tags/Swift5-0/index.html","8481d2756d1b7f25e3b5d8ed89670403"],["/tags/SwiftUI/index.html","7076cc6ef541e19a1b9badb4ee05ca3a"],["/tags/UICollectionView/index.html","0e610af1e65d50c95f583c5bac5c483c"],["/tags/UIColor/index.html","8725375a4647af9755859bf91a3a1515"],["/tags/UIImagePickerController/index.html","5653f234f42094693ea722eae8dac896"],["/tags/UIKit/index.html","0e03e4e56f935d0664b7fde493532222"],["/tags/UIKit/page/2/index.html","03f6dc2967644284409157bb824bff65"],["/tags/UIKit/page/3/index.html","b30750a0adf0c2efbf813f7bd271d7af"],["/tags/UIKit/page/4/index.html","440681dd9f9990c7fbaf2f590aff89bd"],["/tags/UIKit/page/5/index.html","1a7414ba5094b8446d58befc66e162bd"],["/tags/UITableView/index.html","11f74a44ec194d192fe4607bff785ea0"],["/tags/Ubuntu/index.html","66051d5854989aedad54a723fc46bd94"],["/tags/Uniquely-identifying-views/index.html","d9a61b4f437dc9828d98e7b34d5746ce"],["/tags/VIPER/index.html","b3411505a439288a24723732776c78ee"],["/tags/VMware/index.html","e705f60a3caf4f9c692d47b0064d541c"],["/tags/Xcode/index.html","2f36c0e9a9fbb54d7e7d63798a044bed"],["/tags/appleOS-Networking/index.html","3232da9eef472ddcc53770d3e840234c"],["/tags/enum/index.html","4ab586ac13208a5ef70393fe149f9ae5"],["/tags/iCloud/index.html","f3655a9f8de70aab658845d29281c4a0"],["/tags/iOS/index.html","73c54ae067d93f79c15eb86f9c88932f"],["/tags/iOS/page/2/index.html","6499612ace9603dda9dac81e792d3b6d"],["/tags/iOS/page/3/index.html","f9f2a7d42ea6641b312a93208d5a7f42"],["/tags/iOS/page/4/index.html","73a67fc1e125cd0798fd05fcdb999d20"],["/tags/iOS/page/5/index.html","bee3a7139c8a499be5be2c0a0ac21c1b"],["/tags/iOS/page/6/index.html","db5b35aea7fca6072b9d14730bd99190"],["/tags/iOS/page/7/index.html","931107dab6351b58363c4f0525b71b85"],["/tags/iOS/page/8/index.html","e5648804ef70dbd148441d22b10304d0"],["/tags/index.html","4532d502063a17de2e9c84d67acb958e"],["/tags/non-optional/index.html","bdc02d610616f8e7f16f79a386cdb45c"],["/tags/optionals/index.html","e2efe7c3709c477372fcf66c0ba447dc"],["/tags/random/index.html","267af838914e4ce80554d078eff56051"],["/tags/transition/index.html","f0a3439cb36acab6860c264fd2597eb2"],["/tags/三方类库/index.html","2b001d9ace13dfdec66f1e17c963a0c5"],["/tags/依赖注入设计模式/index.html","2c5f93657f569afd7a5936f07a946f2b"],["/tags/函数式编程/index.html","b0de5a55e31dc2acfdefadb9e5b5396d"],["/tags/初始化模式/index.html","f7461cb0b58f76478f7372fc4e6bd46d"],["/tags/单例模式/index.html","9cbd8981ad0d2c2df2fd797c0387cbe0"],["/tags/原型设计模式/index.html","7a05d0a1641edba3456efc84e23e27dc"],["/tags/命令设计模式/index.html","5220402feeee31392db299e25bc5a9e6"],["/tags/外观设计模式/index.html","7bacc385a117f134c3b7f50fc54d60f6"],["/tags/委托设计模式/index.html","8175e0efbcdc6c1e27ebb7495e1293eb"],["/tags/子类化样式/index.html","8fd2ac852de4dcbf7d4bf3fb9c69d78f"],["/tags/对象池设计模式/index.html","fda42c1afcb8e3bde65c13acf3ff9fab"],["/tags/工厂方法设计模式/index.html","4b4fb2e9e490679dc887ef21855b4551"],["/tags/工厂模式/index.html","f43699c86e8503671aa41e1b8e787c93"],["/tags/工厂设计模式/index.html","ff867c414de6bca1d4349ee82ff9e01c"],["/tags/懒加载模式/index.html","aac36d405042afe35797f3993967b13f"],["/tags/抽象工厂设计模式/index.html","7bb44c2698ea3b7981750b7e703f65d5"],["/tags/构造函数/index.html","1ae0d01a60ccb6f72c0ad19dc3008d69"],["/tags/架构设计/index.html","555032397b9f8ac6312703d855120f1a"],["/tags/生成器模式/index.html","da417b925a99e88694edd7dbf723c5a8"],["/tags/用户体验/index.html","e135205da66af20cb349181ed6944046"],["/tags/自动化布局/index.html","0dc5ffd52ed1b38b8e619b34ceaaeba3"],["/tags/自定义UIView/index.html","abb9a64c7698bea98b1f6406ecbdc9ae"],["/tags/自定义转场/index.html","07856d5a0915931cef83772bf0887b76"],["/tags/自适应布局/index.html","949ce568e5ca11bfda3de337c46e1510"],["/tags/设计模式/index.html","00ff3e3803fe159b6eddd10acf940cea"],["/tags/设计模式/page/2/index.html","86954079192469bc87f342f4bf5ca969"],["/tags/设计模式/page/3/index.html","1c73060c9831a11c0d8cb7add7a4880b"],["/tags/迭代器设计模式/index.html","e168f31097b2037edbd7cd755d53da24"],["/tags/适配器设计模式/index.html","c3f109a2ec78c26484142221a4dd7da9"],["/tags/静态工厂方法/index.html","94312dc67c7925a37096851e495b0b25"],["/为iOS应用构建输入表单/index.html","97d3594fdebaf39e814fb137c0b42c63"],["/产品开发的幕后花絮/index.html","ac69856ef0006cc21ff55f7262313923"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","04e15eced3f183b983e9b98907102a3b"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","52b31fbc55b840881d752f106461c48b"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","bdca2e2e58012a3e75bb55185b7d5a93"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","70529cda64089ac87462ad1b1b2a4783"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","1fb0603eecc03ce412678075626cf552"],["/在Swift中创建自定义集合/index.html","455e7797f6c4888e951bc69c0b23fda9"],["/在Swift中处理非可选选项/index.html","4073526ddc33db42199a7226b0e866ed"],["/在Swift中生成随机数/index.html","366b1a21e0f59b2197f45b61b5f65a5b"],["/在Swift中重构单例模式用法/index.html","f826c2c23fe6e4b472565cdf1d996e57"],["/如何为VIPER编写服务？/index.html","487b36b2b0722561214b759c3de829fd"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","f9e94e951486d9f39baa34077bf0c142"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","aaebb27f05aa91c8eb82cfad74d71b6a"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","7c4cf369e5b98bac90a009276acfd8d2"],["/如何使用VIPER构建SwiftUI Apps？/index.html","8fea6b2084aa1165dbd614418736b830"],["/掌握VIPER架构/index.html","a4a7922a012bbd1a9d7d498667c02fad"],["/揭秘 WordPress Hook 系统/index.html","238171c94aa498f52946a0d212c300d3"],["/比较工厂设计模式/index.html","18929b74daca963be89232106c2dc90b"],["/深入了解Swift中的Grand Central Dispatch/index.html","24c4c3585a07df7a81f79b7f9039a5b8"],["/深入研究Swift框架/index.html","90632ff6abfa2d101240532f3b55a471"],["/适用于iOS开发人员的VIPER最佳实践/index.html","6fd177e67388d0c5cea0cbd0ac8ee10e"],["/选择Swift而不是Objective-C的5个理由/index.html","121eab5888ab41e93cda88ff8d9cf000"]];
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
