/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d9d9b2eeff9de2d39116e41f05843a10"],["/archives/2020/03/index.html","6aa5a78a15d0f523f7cc488366ebe174"],["/archives/2020/04/index.html","a334a6a47849d7e411f754fdac648c50"],["/archives/2020/04/page/2/index.html","49cb2dd65147a0f3f5c1aa23dfa1f98f"],["/archives/2020/04/page/3/index.html","c2f415e1ee20a779fec9a5f37f92d9ef"],["/archives/2020/04/page/4/index.html","d5affa71df3c8cbfeea62e034f2b1144"],["/archives/2020/04/page/5/index.html","2879c33e808b11a0b5cfbe8258f79e16"],["/archives/2020/04/page/6/index.html","af74b183738e693e81be668c44f08651"],["/archives/2020/04/page/7/index.html","074ec7f711b59366899e488ad5a69db6"],["/archives/2020/04/page/8/index.html","8fcfa547a8254437843af3a641a64a04"],["/archives/2020/05/index.html","16458dbf0cc8d082082a8bcaefaa2883"],["/archives/2020/05/page/2/index.html","3487e92f83434e231a3591e0ecd68e54"],["/archives/2020/05/page/3/index.html","bb130577dba37f1b242d63c1255b4664"],["/archives/2020/05/page/4/index.html","e9c4394f775b915865834296fc9fe7d7"],["/archives/2020/05/page/5/index.html","961596312932673247ec500cb365324c"],["/archives/2020/06/index.html","40864698084e2efe82f7b6f85cce905f"],["/archives/2020/06/page/2/index.html","f09cd03aa3b2031f76413d2f679d948f"],["/archives/2020/08/index.html","9842b82bebfb80019216199acc954d15"],["/archives/2020/09/index.html","6feb270a86d3ee6b40860b18db817640"],["/archives/2020/10/index.html","de24c8d0fd8752864a88e35f20dad1b2"],["/archives/2020/11/index.html","6440606fde88129a63b62a99a6cd2bdb"],["/archives/2020/12/index.html","e5b60b521bd57dc917ea5bea8c335c0e"],["/archives/2020/index.html","23e5a0f0e7c05e97ca23909c1decf303"],["/archives/2020/page/10/index.html","b38e5d21d5d2c66ac9c488907188a037"],["/archives/2020/page/11/index.html","f1f21f886cecadb31bf550c69297f6b8"],["/archives/2020/page/12/index.html","41bf97d79f1e33f39c09da4fbc12e7a9"],["/archives/2020/page/13/index.html","10b8cf4956b285fa2d0ed98229878948"],["/archives/2020/page/14/index.html","6da1fc4af38a06456296eeee304616ba"],["/archives/2020/page/15/index.html","6ce2c6c0663f519201d57a95ecfd4ab1"],["/archives/2020/page/2/index.html","f404c76c15f625ae8dbc444187527bd7"],["/archives/2020/page/3/index.html","5991804ff6deb0886c4c2402d68dd8ea"],["/archives/2020/page/4/index.html","abca43f33e907305f178948cc428f363"],["/archives/2020/page/5/index.html","18010c166078ae2d2b8d5560f2b38966"],["/archives/2020/page/6/index.html","699d77416658fd06b4524bbbf6919d83"],["/archives/2020/page/7/index.html","a497fe4891ed7e6518affd41dae6650b"],["/archives/2020/page/8/index.html","d9c20946bde0142fc32ce7fc061f43d3"],["/archives/2020/page/9/index.html","34c287fe5e7c2d77f25402b2c2f147b9"],["/archives/2021/03/index.html","a1c13b2c4fe39d187dc8a3b9a92e553f"],["/archives/2021/04/index.html","e82d1dcd06a4d9ef2c4786c23ef9ad15"],["/archives/2021/05/index.html","415d92e52d207008cc7c9bcd47f9e5f8"],["/archives/2021/06/index.html","b4be42e86de2791665086e2a89ce5fc7"],["/archives/2021/07/index.html","ba730b35689b68b4f00ce879d65be403"],["/archives/2021/08/index.html","373129e1861b38ac84e5c0712fdef1d6"],["/archives/2021/09/index.html","927e03c2c265321e05c29a8c24d75959"],["/archives/2021/11/index.html","c97f7ac58665ef4961f7447198789a22"],["/archives/2021/12/index.html","2f4d81010f5b00bcb045d14a6e5ab49d"],["/archives/2021/index.html","24ce678bbe6d45eec10544c773d4b979"],["/archives/2021/page/2/index.html","ad82e9b96c03dd56acae37f0cf1e4ec8"],["/archives/index.html","93331645a3b2d40d20b6e73ab1ef3b00"],["/archives/page/10/index.html","adaa35a0262edfb0b0a59f3ce024d0fc"],["/archives/page/11/index.html","b6c93175ef6379d39d7fcbe664423170"],["/archives/page/12/index.html","ae9d5fa89d3951f23cdab0242ed5e696"],["/archives/page/13/index.html","e381eaedb5ecabb37101c373d781a4f2"],["/archives/page/14/index.html","f1f0479b692d3536085662676e489675"],["/archives/page/15/index.html","d879eafa98285ce336fca334cb1a4a6c"],["/archives/page/16/index.html","9b8d38167a1206f1aba252ac9245ebca"],["/archives/page/17/index.html","808358f7c6cfda55a894c4b6e677726e"],["/archives/page/2/index.html","fa7f407fc31bfdb876ce114ed9b55c17"],["/archives/page/3/index.html","8f1944fec82cb439ae3657724698e6c0"],["/archives/page/4/index.html","f4606dce6a8ccf8b505f3bddfe005152"],["/archives/page/5/index.html","877a1f43f0385ca665b3dd9e498f61ba"],["/archives/page/6/index.html","5639cc34baf591b81d428fda356b6c4c"],["/archives/page/7/index.html","6949c7e52675b4f8f50df7018953f241"],["/archives/page/8/index.html","db671e5e2c01dbc46952297167b7fb30"],["/archives/page/9/index.html","0de91395e9fe724a66d981e4bb21bf0c"],["/categories/Advanced-Swift/index.html","01cb91e0e2cee5cb9d012ffee09c16fc"],["/categories/Advanced-Swift/page/2/index.html","4c2a98ea389d6239d9d0d9796cd89c22"],["/categories/App-Architecture/index.html","f8558fda6ff9b1936bb6c926b8500621"],["/categories/Array/index.html","aacdfaea46686899f50695efbaf041d4"],["/categories/Codable-protocol/index.html","00b9208bd27ac04272bd241e9d299f56"],["/categories/Combine-framework/index.html","c394788f5a70ace7de2388a8ac0b1bc7"],["/categories/Combine/index.html","4eda924b858f8e15a0e224b49d52d900"],["/categories/GO/index.html","bce357ec0a9a7a7ea9214439e34ac56a"],["/categories/GRDB/index.html","244829aab4252f3e6bb777fc9969dc2a"],["/categories/Go-入门篇/index.html","9816c7176db61853bde179829853f110"],["/categories/Grand-Central-Dispatch/index.html","bb5104f5f778787e379fb92cc4fa5cf9"],["/categories/Hexo/index.html","611c83a666d95a8f9a2a760bf806a27a"],["/categories/Homebrew/index.html","1068edaf36180c44f772cdc5a2cf5a33"],["/categories/Linux/index.html","e477de86ce3688d08692c4450c0fb5e4"],["/categories/MySQL/index.html","824b509bc5977cecd4e9b554fffb89fb"],["/categories/Promises/index.html","2e6de60a5c78639a28f13791711f32b4"],["/categories/Protobuf/index.html","bfd9c925560cdfb9c2e4782ea6d89833"],["/categories/Result-Type/index.html","569474359462f1c2b9c7ea0e2320e569"],["/categories/RxSwift/index.html","35dc47981dbd1f1d8911dee22ad393af"],["/categories/Server/index.html","74b68033a00d34c1c520f4f6375c8a61"],["/categories/Sqlite/index.html","bd5faf3b00fb51ab7201f5693f596c9a"],["/categories/Swift-Apprentice/index.html","fce1005f7650f1b17d8b1deef40d9704"],["/categories/Swift-Apprentice/page/2/index.html","ad86a47b2202ade9959e5bfa557ff211"],["/categories/Swift-Apprentice/page/3/index.html","aded10cb7ac03055b28451be2480ce90"],["/categories/Swift-源码阅读/index.html","2da043110c006e1514c411a4c14ada6b"],["/categories/Swift/index.html","0d36011310d13865538997c99c147334"],["/categories/Swift/page/10/index.html","a1d3903458c8f367001c5eb8e550b8d9"],["/categories/Swift/page/11/index.html","93fb9f6bef8b83017b1c26c4d477b8e3"],["/categories/Swift/page/12/index.html","dac4543be6b9968f86d6890381e4b94f"],["/categories/Swift/page/13/index.html","3f1310fccf331ec1c497c88b30a1a8b0"],["/categories/Swift/page/14/index.html","b487ce94b7042fa8c349c90f9345ec6e"],["/categories/Swift/page/2/index.html","f6d753168eda24872ee0988c4f9e9a27"],["/categories/Swift/page/3/index.html","1ee1b7dd070f1891c3f1738af380600a"],["/categories/Swift/page/4/index.html","f27f952092d488dc7ae3fe21095a5deb"],["/categories/Swift/page/5/index.html","a6fdae9d8f09a4e34c64b792f0133b2d"],["/categories/Swift/page/6/index.html","0521cdc18dcd674c5e4cc6228847ddef"],["/categories/Swift/page/7/index.html","55dddfd2ff6f9df85bf577df673bd553"],["/categories/Swift/page/8/index.html","7cae97a33eaf299c1514d5fee191265a"],["/categories/Swift/page/9/index.html","1586c7e9e8d49abb0756f878484e04f3"],["/categories/Swift5-2/index.html","82a07abc4964a161b2eadfe358a395bd"],["/categories/SwiftLint/index.html","3d3e9dd55f692dbaf5843394e862a8c1"],["/categories/SwiftUI/index.html","5e266e2a1d6502f5c96fb743df627487"],["/categories/UICollectionView/index.html","c4c41207adf8caab111e9c68913f0e6b"],["/categories/UIImagePickerController/index.html","d280e7cdaf8b35d3939f7969247a8162"],["/categories/UIKit/index.html","3e0eec7e8e9bb95158ea1f53ef2396db"],["/categories/UIKit/page/2/index.html","fa24e991492403cf2846a98cb2f9f00a"],["/categories/UIKit/page/3/index.html","a339f63923d5a71927122cd9b56e522f"],["/categories/UIKit/page/4/index.html","7926f88084306a348414edb71fedbac2"],["/categories/UIKit/page/5/index.html","e26dafcb3a35d8ac4094d2de8d489a2c"],["/categories/UITableView/index.html","7e2b87a87cd8ab63607838611be359a8"],["/categories/Ubuntu18-04/index.html","00074d5218579b441600e75691eae512"],["/categories/Ubuntu软件源/index.html","35c833a2076ce0fdf780fc5ef06c4018"],["/categories/Uniquely-identifying-views/index.html","c2cb7ddc6fe8dcf346663eceee21cffd"],["/categories/VIPER/index.html","a5ba826033b8dd64cf5f7cd00141efdf"],["/categories/Vapor-4-0/index.html","e407b834832f9b3db8f263d163340b19"],["/categories/Vapor4-0/index.html","db62ed4e52bc6d794958d97a7b138da4"],["/categories/Vim/index.html","79a8e527c3d09a2065a0f5d2301bd738"],["/categories/WKWebView/index.html","d1c156197200d087aab62367c7e9764c"],["/categories/Xcode/index.html","c4ab00e1ab02256bd2fc4bc2c2219b40"],["/categories/appleOS-Networking/index.html","4bbcf97e52752692114d41f0b35147f2"],["/categories/bugly/index.html","28adf007c77c0534e601767cb47cc9ad"],["/categories/enum/index.html","63b11b9348d50f2672d4974e2e1884db"],["/categories/git/index.html","e36e9fa3c105c4ec127ca1326df9f0ef"],["/categories/iCloud/index.html","3c410f9fd2cb1e7d412d4ad12a4b2008"],["/categories/iOS/index.html","6bbe3cb978a42bed2df9acb334ddaebc"],["/categories/iOS/page/10/index.html","6444749845cd9627f3e9be2337e7c7b9"],["/categories/iOS/page/11/index.html","874aa5c8ab4a518029f97bc4c838adc5"],["/categories/iOS/page/12/index.html","06351428c9e96b2b639008d919fe9bff"],["/categories/iOS/page/13/index.html","7200af98947f664d58839a76869f4cfd"],["/categories/iOS/page/14/index.html","df538671fd3d0bf26ebc2d4b5c974561"],["/categories/iOS/page/2/index.html","858e860eb1151770cda56b3b21cc9bab"],["/categories/iOS/page/3/index.html","50bb2463d968b72c6870f6402de820bc"],["/categories/iOS/page/4/index.html","f8ac67854a2432cc271fc5700f9e23e1"],["/categories/iOS/page/5/index.html","10f5baab5a0fef33851272660d18dd7f"],["/categories/iOS/page/6/index.html","903f2e4f130aea325416ec68cd334334"],["/categories/iOS/page/7/index.html","3a5801bc98e81eb588b96b85fff60e4f"],["/categories/iOS/page/8/index.html","5066fc012e4a9829bdee54c8c6c2cef0"],["/categories/iOS/page/9/index.html","776ec031d311e5e0e4d82216c8191e2f"],["/categories/iOS面试题/index.html","7dee7f1793292c4575826ef40a05a69f"],["/categories/index.html","12455179f5026e0a52c27d75d30dece3"],["/categories/random/index.html","37143f23071b5b19e24354128b4b40ae"],["/categories/三方类库/index.html","794071edf63992ce4cde94daf4c5716c"],["/categories/函数式编程/index.html","133f2b4644a6df513e1faedf72096215"],["/categories/子类化样式/index.html","df725bce003309f6248d876366984476"],["/categories/开发技巧/index.html","6eb737d2b4ef0271acb86e6792f83540"],["/categories/开发记录/index.html","f437f0241999a340ee2e9975d1c3d2f8"],["/categories/数据库/index.html","2acc7d5e9d7065582c6928bb54d63d92"],["/categories/架构设计/index.html","498a92f93d46c1d078766a859d351205"],["/categories/测试/index.html","9d9b41633833ade0f867a07d9f0fe731"],["/categories/用户体验/index.html","66e56556d28e732e2f17f0259b09d3e6"],["/categories/用户协议与隐私政策/index.html","37de7109ce48ae598862bb3021ff48d6"],["/categories/设计模式/index.html","4adfca6b7c58d79e652ab5a81fcf1f42"],["/categories/设计模式/page/2/index.html","4d07ea945a83aef629554d77bc6d795c"],["/categories/设计模式/page/3/index.html","5d79758062d16cc5199e17b233f661cc"],["/css/main.css","16db5c466c64520d0bcdcddc11dee570"],["/hello-world/index.html","69b1f4d85f21cd5e07e6b896c24432b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","e51e7d619a2db18ace51a0f3ef5cd5e1"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","76748b51f7cf41737cc828e5d7b56efd"],["/page/11/index.html","08ff4748492da61ec9c1e0956b177d33"],["/page/12/index.html","6c367f15b1d6019791035fdce1ea8db4"],["/page/13/index.html","1e1f090e5f30ac115744e28d2bacd268"],["/page/14/index.html","dec01eb3e6c49f1282bd5be143dee654"],["/page/15/index.html","88c0ae7994a1bff0c4c35c4f4c4e0679"],["/page/16/index.html","803cd99554bff4066a6602ee0ca3a319"],["/page/17/index.html","eb98a70195f1e2ec8cd6a90ea1841c23"],["/page/2/index.html","d1c300df14becd1ab7f8419626f7fb2a"],["/page/3/index.html","03d6810c0e681592d81eb0a378e8f7b8"],["/page/4/index.html","3e280721ec285ffa7e29427ff4327c93"],["/page/5/index.html","3475cdb828aaa774623c5aa063d5fe1f"],["/page/6/index.html","95143b065d3c9b1a3d0e938acd580985"],["/page/7/index.html","e332d492b38f73117c1172ec455a8ebb"],["/page/8/index.html","b24e3cc90947f5d0ebac9dbdb07608c1"],["/page/9/index.html","6f8fd8ab18e7d0a66556e0605467b8b2"],["/schedule/index.html","978cc8a867b56d22e008af3fe9f36679"],["/sw-register.js","467a616746d7cc3e752314d4d6457030"],["/tags/Advanced-Classes/index.html","25b51fea43f8ec266e951826b08e629d"],["/tags/Advanced-Swift/index.html","c4694c2f0b4260299cf15a218b26b169"],["/tags/Advanced-Swift/page/2/index.html","7bf7f43ab8b84f7c608dcb84614344ef"],["/tags/App-Architecture/index.html","5058d60c73cdfdb3175bbd311062f7be"],["/tags/Array/index.html","efd9643b2c46567c13e9222c8b8440d3"],["/tags/Arrays-Dictionaries-Sets/index.html","a1d8389613e415db1840cd539c69efcf"],["/tags/Authentication/index.html","e729b2ee6c1ec55b55cc3d38a1520357"],["/tags/Build-in-Collections/index.html","055d142ed6b8bbb98115ad6ddd77de21"],["/tags/Building-Your-Own-Types/index.html","72a44077317375648bb10189d0eba911"],["/tags/CMS/index.html","922fdabaa37dbde612fb2f068d5d4b4d"],["/tags/Classes/index.html","7ebe5e85f0818fe370e44b8beceb6dc5"],["/tags/Codable-protocol/index.html","a8546f73bb5e9f4919d9e2699f28d064"],["/tags/Collection-Iteration-with-Closures/index.html","29d33c9517ac220095b321d0f0b265fa"],["/tags/Collection-Protocols/index.html","cf9a77cc1cf4cce254411118c94a605e"],["/tags/Collection-Types/index.html","caa1eaad3852fbd20e2d179f46d388cd"],["/tags/Collection/index.html","60f7857cf5cf028202829b248f542f29"],["/tags/Collections/index.html","e54c48ef30941400732e0789547983bd"],["/tags/Combine-framework/index.html","753501061a97cf378290f7958a8af64c"],["/tags/Combine/index.html","b6347913b0cfb9954db619a3bb2ecb05"],["/tags/Dependency-Injection/index.html","66200459492e4a2fd2a7051b63c38794"],["/tags/Encoding-Decoding-Types/index.html","69c4ac539ea411f68e52d221089b289c"],["/tags/Encoding-and-Decoding/index.html","44df644c78ba3a61a5058565f752daff"],["/tags/Enumerations/index.html","455c67481cdbf987792c0618c1f21a35"],["/tags/Enums/index.html","d8d986adab6622d36f535d899d79900f"],["/tags/Error-Handling/index.html","9d5d4b6c8384d3388770e1fe0a11cf9e"],["/tags/Functions/index.html","f58af98f78c5f7c4ae8ed1d4915a15dd"],["/tags/GO/index.html","223f279fb23c4e08e809d100cb20ae3c"],["/tags/GRDB/index.html","6ff3bc1d0119a3b42eab1fddfe51f74e"],["/tags/Generics/index.html","21b29504194bfc4ebfa43955f154d4a3"],["/tags/Grand-Central-Dispatch/index.html","0fff1055a38f18c9a796fae66aeec030"],["/tags/Hello-Vapor/index.html","634dcb2627b4869b7edcf52325bfcd16"],["/tags/Homebrew/index.html","de80623912d09117b1ce526a1db75ce1"],["/tags/Interoperability/index.html","20558baa1c85fd4d466c0842510ce493"],["/tags/Introduction/index.html","c606214902589038e54f9de79cae25f9"],["/tags/Leaf/index.html","8dfed8835d59d454a8ae70bd4e2e5255"],["/tags/Linux/index.html","e7b5d87c66c2fa23f78e85171c01b84c"],["/tags/Methods/index.html","ead7d5fa475157d9d41bb8dd7e3a5016"],["/tags/Modules-And-Hooks/index.html","d8b831e8d33307b860440a6fde382e56"],["/tags/MySQL/index.html","bdd82ce2dfa21813b9017b4050d5e07e"],["/tags/Optionals/index.html","de10fdf64b98861b7947d28975dcf881"],["/tags/Promises/index.html","24a40f4673a3cdbe65f7389de7db6556"],["/tags/Properties/index.html","bee43e8efd27380a53e64aafd3297f13"],["/tags/Protobuf/index.html","80d8293d035cd2b197502e0b66c92e74"],["/tags/Protocols/index.html","ac97598cc336660a7865461ccfcfcf58"],["/tags/Result-Type/index.html","89a3270682efdfaa5d9ce3296cf9f70f"],["/tags/RxSwift/index.html","688002dd404b1cd5392690a16d62c0da"],["/tags/Server/index.html","f4115136e751bf9f27ea67d7a956321f"],["/tags/Session/index.html","3b85b24b448466948797483cfe8a39a9"],["/tags/Sqlite/index.html","1a5acc0383c97f09139d5d91b9a7e881"],["/tags/Strings/index.html","fd6e94f44e680eed42f60f315cbde7ae"],["/tags/Structs-and-Classes/index.html","7b5930236e4abc0bd6c141fbe8d657b4"],["/tags/Structures/index.html","b7bacfa5a97c1884c4146f5a41cbe19c"],["/tags/Swift-5-0/index.html","e1bf0061287ba11f2167386ff6ab4b04"],["/tags/Swift-5-0/page/2/index.html","866b3da3f965dc9dcafe5a63d2c8f2c0"],["/tags/Swift-5-0/page/3/index.html","6315f38a5a26706ea4cfc6c93f2c1af4"],["/tags/Swift-5-0/page/4/index.html","6a0d28a3f2ca235075c2ae1789b2474f"],["/tags/Swift-5-0/page/5/index.html","92d7d212427b77b5232b4bcfc201fe84"],["/tags/Swift-Apprentice/index.html","9778ad9a6f307c1bffcf64aebbfbb9cf"],["/tags/Swift-Apprentice/page/2/index.html","493300f2129969385187060dad710fcb"],["/tags/Swift-Apprentice/page/3/index.html","a5196965e5a5be6cfe52b9fdbfd55616"],["/tags/Swift-Package-Manager/index.html","ede9dcec5f8f93cdf899c71264f542ff"],["/tags/Swift-源码阅读/index.html","47b490eac30976371fe3edb6cd83d100"],["/tags/Swift/index.html","a2753f7ea20306efed9c40a2e7dd6ac8"],["/tags/Swift/page/10/index.html","0e93c1e0792fc4fb2e53282dd863520b"],["/tags/Swift/page/11/index.html","76cd6809a8c05b75544721ebf97d56d0"],["/tags/Swift/page/12/index.html","345824d2e19166767ae1e4a5a1765b08"],["/tags/Swift/page/13/index.html","1c8dc6230774ccc1a071df99b0871f2d"],["/tags/Swift/page/14/index.html","afd910d9312d123fb540263d6089e8ea"],["/tags/Swift/page/2/index.html","b26c2f82a9d64a6501fca0d26031089b"],["/tags/Swift/page/3/index.html","ad07dcb5fee3666049d30b6cd245d273"],["/tags/Swift/page/4/index.html","13b56a8f61ca29131c2c7728c5d5b722"],["/tags/Swift/page/5/index.html","599c1b0a4e82019feb5de12b4092642d"],["/tags/Swift/page/6/index.html","b22809dd996c35f77f8a8676882bbfdd"],["/tags/Swift/page/7/index.html","df549e72dd556b279afb4f053a2448e9"],["/tags/Swift/page/8/index.html","950b11510ffcac23b32d9bdcc8595e53"],["/tags/Swift/page/9/index.html","a192cd04ea85339f9883e9d42b071107"],["/tags/SwiftLint/index.html","2bb65b50cd8f18c4d0a93835d15c03a0"],["/tags/SwiftUI/index.html","4e145c4b964aece2bfb144cc7b05f832"],["/tags/UICollectionView/index.html","18b393db9d4cd075cf15217c46b85948"],["/tags/UIColor/index.html","2f7fc861fbd4562c04590a46abac5186"],["/tags/UIImagePickerController/index.html","a3241a77c5a82d0e4c727dbab2cdac77"],["/tags/UIKit/index.html","22bdf3a2a0b4f7175a73f40b1a5a07d6"],["/tags/UIKit/page/2/index.html","9b7422b023ba347c8931190097597538"],["/tags/UIKit/page/3/index.html","00a84778895f54b966e2c5a1db4c1bcd"],["/tags/UIKit/page/4/index.html","b4c97938ab1e7e89ff42af184197db4c"],["/tags/UIKit/page/5/index.html","c6cb422dad4c6f762be3a0e2e916e338"],["/tags/UITableView/index.html","66d4328fe16c9810ab2c05c62ed9e69b"],["/tags/Ubuntu/index.html","f59986a0035f21fc9db82ef9605bf0cf"],["/tags/Uniquely-identifying-views/index.html","eacadc6725e7ed2887e769b3e910ebe6"],["/tags/VIPER/index.html","6075d0689dab27e5b5255f6e24b9ecbe"],["/tags/VMware/index.html","7e81666ef88ef86b8be001157b52a5c0"],["/tags/Vapor-4-0/index.html","636d8ff04c7c33ce58729022f705ebfa"],["/tags/Vapor-初探/index.html","ef909d7bb43e8ee9cf434d3f24c464b1"],["/tags/Vim/index.html","ca00c11b85f57e2da627bee777b2d89d"],["/tags/WKWebView/index.html","8e0c540050e0385a78da25d3ed978a07"],["/tags/Xcode/index.html","27e478f84d60fab6d7d3cbacfb48199c"],["/tags/appleOS-Networking/index.html","53916c930a8707bf9a2eaaf45f8fb823"],["/tags/bugly/index.html","0ef784fc6695f1fbd6d93308681acc75"],["/tags/enum/index.html","6fbb8afd60067f0a1405dafe2676bcd4"],["/tags/git/index.html","ce5217615142a94ec80308e7ab053aaa"],["/tags/hexo/index.html","9b1a98d16937b9b0b04e85e91a8d4fa2"],["/tags/iCloud/index.html","a9e13f79de05ddde2bb75068deb9127f"],["/tags/iOS/index.html","6ebd9a4618c4bb8acee2038e0f9d6bb5"],["/tags/iOS/page/10/index.html","37a5cdb5c0b7bf310b2b4527518bc73e"],["/tags/iOS/page/11/index.html","265cdd9cd28b271b57c3a249c9595166"],["/tags/iOS/page/12/index.html","423f94953e173465f8ca81c79c6c02d1"],["/tags/iOS/page/13/index.html","ffb9615bd98fcfec85e1dd14c4eceb9a"],["/tags/iOS/page/14/index.html","8bbf3f6ab44de1c01d481c296dd1e28a"],["/tags/iOS/page/2/index.html","5401ada4e598c6eaa60f34b03ba3e3ef"],["/tags/iOS/page/3/index.html","a12afb21773cbbaa96a06389822830d1"],["/tags/iOS/page/4/index.html","313cd4b1a8cec17c94fe89d3506db50a"],["/tags/iOS/page/5/index.html","011d0cf722fb29597530dcfc8c70f938"],["/tags/iOS/page/6/index.html","8b9a488513bf04cc1a0787e49989b2f5"],["/tags/iOS/page/7/index.html","4e5f633d520aa3c4c97bcbb98c9274e3"],["/tags/iOS/page/8/index.html","d5be3c5c70383e311a0c205e4f7b189a"],["/tags/iOS/page/9/index.html","9c4ea6cc2b1c2c119ecdf98c6a329ba7"],["/tags/iOS面试题/index.html","a05c75dfdfa2b84a12d11cf01209c324"],["/tags/index.html","c567f5fc0e4ec33146696bbaf8aed8f3"],["/tags/non-optional/index.html","572adbfa00ac781711645b2f4b0e4222"],["/tags/random/index.html","66b69351ce9f91ce5d26c91297567df5"],["/tags/transition/index.html","d438d6eb19518b030b90d8ea0184e03d"],["/tags/三方类库/index.html","7d611986d2c2ea2d26121c69215ba3a6"],["/tags/依赖注入设计模式/index.html","ede04ce068c5bfd7379245d4a96098bb"],["/tags/值类型和值语义/index.html","fe0944c78c018a75b64d5cc60978cbaf"],["/tags/内存管理/index.html","a56dd25f886de662b2594d61ce832ccd"],["/tags/冒烟测试与回归测试/index.html","a1210e2654850b47b728d984a79a47f3"],["/tags/函数式编程/index.html","8beb1266f6f6110ef8832451fd32911b"],["/tags/创建博客数据库/index.html","2451efd7d1e234ec3d25c3614e17333e"],["/tags/初始化模式/index.html","1ce13d1292e78a7286fa940459f8c1c7"],["/tags/单例模式/index.html","34ef1ee0e8095e4b6f74217d6d7afdec"],["/tags/原型设计模式/index.html","0f24ca0dec363ffaf1d511e7b3f6fd0f"],["/tags/命令设计模式/index.html","543ef5f5ee5ac2c808418b5ef78ab44e"],["/tags/基本控制流/index.html","7b46d95ddc74d537a3e1d7db8d4aa03e"],["/tags/基础语法/index.html","1020298275296a9f9925cb926a897c74"],["/tags/外观设计模式/index.html","492a1e2ea9f5ddbab25f789236b73aff"],["/tags/委托设计模式/index.html","00e376bc15285e5fb1c3e88f9b4b5b68"],["/tags/子类化样式/index.html","48962c9b159435bb03f811e592cb9960"],["/tags/对象池设计模式/index.html","7243a70654b390a8d411c65a89dc79af"],["/tags/工厂方法设计模式/index.html","6cdf5f3f922ee167872c17456d0c6a9a"],["/tags/工厂模式/index.html","92c5eac0cf09d67c3a7098e897d45218"],["/tags/工厂设计模式/index.html","26f98e4acb73c7fd6593adb3f740aa22"],["/tags/开发技巧/index.html","89809ca5c660cd6f03a14b5fd72b201b"],["/tags/开发记录/index.html","d19ec6f82ca0176b2b71cdf2ce444a2a"],["/tags/懒加载模式/index.html","0ad8d5007a92d4d111f40ce6bd82e16a"],["/tags/抽象工厂设计模式/index.html","d0f20d7999ec49ce1693f31031ffaba2"],["/tags/数据库/index.html","9bd1fdcfd4224d5ce221eb2b4de449a6"],["/tags/构造函数/index.html","021e09f20791e4a570ccfc6b4ffac969"],["/tags/架构设计/index.html","b6c20f80a1f288230edfeb5118544486"],["/tags/模式匹配/index.html","25f46596101fd873ca580d9a8bc753c0"],["/tags/环境搭建与验证/index.html","f86bb6afefa53d3f33722b9d367d6164"],["/tags/生成器模式/index.html","e3cbd9d4d8e459b3daff86d3ac7a0a7c"],["/tags/用户体验/index.html","e450e845db3777ca65bd872566066b04"],["/tags/用户协议与隐私政策/index.html","28e016bf4ecdee948210c51d2d4837e1"],["/tags/类型与操作/index.html","3749b21f6cf8e720fe97fea5f328ccc9"],["/tags/自动化布局/index.html","799b78010fdc91ece56024779899e465"],["/tags/自定义UIView/index.html","9ed0e9d06bd4ee6a2fbbc28918a9077b"],["/tags/自定义转场/index.html","b2b5cd2804ad110f844749adb3594117"],["/tags/自适应布局/index.html","021f41ec16bab67bcbb0a089af36cb89"],["/tags/表达式、变量和常量/index.html","42b8e1c97aa865864cba8a693c51f7bd"],["/tags/设计模式/index.html","a5657bdf5c4bb50296b5e1dcfdc51e20"],["/tags/设计模式/page/2/index.html","dd67d4adb4375a6b4c1d6efd18fa0b03"],["/tags/设计模式/page/3/index.html","1379c101411cee1a9aa58d3f79ea8845"],["/tags/访问控制和代码组织/index.html","adc4efc6f8c4fb2626127a243f0e7e78"],["/tags/运算符，下标和键路径/index.html","1624dc948d27d4518c19f8bb2025a467"],["/tags/迭代器设计模式/index.html","7d6da6cc76cdc4d20a0e56664e2abbb3"],["/tags/适配器设计模式/index.html","fe15e0e31130f830bdfd8108b75cb909"],["/tags/错误处理/index.html","5d5f9cf021500c24ccf08a64687ad7f8"],["/tags/静态工厂方法/index.html","814facb942e1b1bfbdec18377871682c"],["/tags/面向协议编程-OOP/index.html","75989ae2128396ef983a2ecb33f915fd"],["/tags/高级主题/index.html","9b2f7f3d83628e00c1da350b6c8502ee"],["/tags/高级协议和泛型/index.html","d3336d05263cbc93ee56af089d8ec2b2"],["/tags/高级控制流/index.html","afe0954607f14727ee0b07ac4249b3ce"]];
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
