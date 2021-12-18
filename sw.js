/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7adb1d601e10ac4debd9f220a5db452a"],["/archives/2020/03/index.html","0d558cc4b38db38f607ae3e2a5f12b4c"],["/archives/2020/04/index.html","da349b693c849741a3ee72fc6d393a31"],["/archives/2020/04/page/2/index.html","9e60defe05212aaa6d106a463faee2bf"],["/archives/2020/04/page/3/index.html","d2b67c2b04d166bcf9765b2fcc7ff697"],["/archives/2020/04/page/4/index.html","9522c835ebe13f112ea54f24d9360713"],["/archives/2020/04/page/5/index.html","1c0e00e22b00920879991fb520b0c5e6"],["/archives/2020/04/page/6/index.html","c39543ac33949d72af94e43efe26dbf8"],["/archives/2020/04/page/7/index.html","cc607032989f02444017f9653128a87b"],["/archives/2020/04/page/8/index.html","930c007bd1fd474b95062e08adb2c953"],["/archives/2020/05/index.html","33152e62d1810bf0f335581a1f265ad2"],["/archives/2020/05/page/2/index.html","a285c961e974fe4f4d44077b19cecf11"],["/archives/2020/05/page/3/index.html","a33a5b4ce2b9a9685d494816faacce62"],["/archives/2020/05/page/4/index.html","2f8c6040b1a2645b1d9d27fe72c9d165"],["/archives/2020/05/page/5/index.html","9418f243a716dca8ba3a251c2a5bd67c"],["/archives/2020/06/index.html","9e1b7b073f3ee8ad66628bb39fea5d89"],["/archives/2020/06/page/2/index.html","59c543154ada5cca522e95e935dbc015"],["/archives/2020/08/index.html","bb126dd39a2fa119abb0431625303e14"],["/archives/2020/09/index.html","ef2cb5e6ade7591b46df3d73e9f55e15"],["/archives/2020/10/index.html","d6e4afe19f8d57399117aace216e8ece"],["/archives/2020/11/index.html","678570006de7bc4b0de858e1c3b54b04"],["/archives/2020/12/index.html","5dcc61ece618db09f51162e94e3cd2ac"],["/archives/2020/index.html","7105581aeb4d9939c08b577aca276a4f"],["/archives/2020/page/10/index.html","80ede8c900fd992677d3d1be0f1921e3"],["/archives/2020/page/11/index.html","dff7993276d3b9a11d9796fdbaf82da2"],["/archives/2020/page/12/index.html","efa69ec2ff7cfffd7e3ff8fd717d23a7"],["/archives/2020/page/13/index.html","22747a4f7487c535ee49f373f970dcbc"],["/archives/2020/page/14/index.html","a51eca8cbdcbdca216e5ad1d398cf986"],["/archives/2020/page/15/index.html","b7d23ce5103e15e29c3fc86278a061fa"],["/archives/2020/page/2/index.html","d4d98731613b02e45e1774c14c40557d"],["/archives/2020/page/3/index.html","482da2b0a4c4ab452941c621a0e69c1a"],["/archives/2020/page/4/index.html","86894d021282b2133d45d30268b6ddf9"],["/archives/2020/page/5/index.html","5316367f5fb0be4a136392318b81a0c5"],["/archives/2020/page/6/index.html","e597bc9a3fe65105f6c25416c623d059"],["/archives/2020/page/7/index.html","6f355c4d9cf70f6381996717e3c67702"],["/archives/2020/page/8/index.html","a3053f07c4856e7e71a284a9e12172cb"],["/archives/2020/page/9/index.html","b153f6bc8414caf2bd0a374db71e8602"],["/archives/2021/03/index.html","1bcba262253ec7c5846a2922d3b4a19e"],["/archives/2021/04/index.html","8b880b77d780dc9af8e782872a29c40f"],["/archives/2021/05/index.html","6dbf231f8c4a1736a781adb621fb4175"],["/archives/2021/06/index.html","00c4ce3d311a15a0a7686457459cfb7a"],["/archives/2021/07/index.html","7b22468eaf0f6b766b479cd96b8d118c"],["/archives/2021/08/index.html","a1210d5049cd405572889f703e65e944"],["/archives/2021/09/index.html","f15792ba98f83b90a355dd1169b4a76b"],["/archives/2021/11/index.html","47be69fdd344130b84e90f472c1e8a22"],["/archives/2021/12/index.html","4482789c0287e77eba6dbb3136b78817"],["/archives/2021/index.html","e7920311088410cf3f8b02b0a48c6e5f"],["/archives/2021/page/2/index.html","35743e67cbbb2b199ed47b760f1c5f48"],["/archives/index.html","2723fd09ff82a74efe166fe8d096df05"],["/archives/page/10/index.html","b724fd0689c70eecb4ef0175bb4bcaa3"],["/archives/page/11/index.html","1fc80955de354251896176ddfce66e69"],["/archives/page/12/index.html","620a30f8a72dae6bee2a88959ea9abdc"],["/archives/page/13/index.html","ff831adde9a4292de9a552ab4bc8f341"],["/archives/page/14/index.html","bd9808812cf4941a96728e53d1110356"],["/archives/page/15/index.html","878bce6571d00b7e8e15eb8e6f462eba"],["/archives/page/16/index.html","9033ea1e43df71f9e3d589cd06e909de"],["/archives/page/17/index.html","a7b9fbff00bea78af6fe62583bcf68a4"],["/archives/page/2/index.html","785faec272f8b5607d789617106f9188"],["/archives/page/3/index.html","22487a7cea02ec5d56f90b0580272237"],["/archives/page/4/index.html","ed1452c969a171c0382b37b7cfdcc1a0"],["/archives/page/5/index.html","d676d87a40823c350cf2a993dc9fa349"],["/archives/page/6/index.html","e3f6509c0da34c716e630ab447ea75cf"],["/archives/page/7/index.html","ca9b89703da70c05902faf2715a517e9"],["/archives/page/8/index.html","748356880591b639e31a7bdc3acdabf6"],["/archives/page/9/index.html","788514f6661ebf965e0328af466e1026"],["/categories/Advanced-Swift/index.html","b70a058f2f328a72d05640be5f3d1e1d"],["/categories/Advanced-Swift/page/2/index.html","5f08fac25daa0bb9a7a39f8641451a24"],["/categories/App-Architecture/index.html","82cfde7bfee70c0aed874fdc0fa2c88d"],["/categories/Array/index.html","8451f1b6e53933011287f5880cae107c"],["/categories/Codable-protocol/index.html","60b4b785ff55c201dfea2acd2b8499fd"],["/categories/Combine-framework/index.html","e2e8ac752d390845ec7dc6b49c58780b"],["/categories/Combine/index.html","2b7dbcea184aea7a30277340bc5af8b4"],["/categories/GO/index.html","cceb3a8fb4906f90f2115467642dac38"],["/categories/GRDB/index.html","0a0f58e2c1f09d8ec9633a1543940deb"],["/categories/Go-入门篇/index.html","9ede4f7cffd10efdfd27253c4aa68d32"],["/categories/Grand-Central-Dispatch/index.html","9aa0632ea2d520d5d361ecf18fb2ef3c"],["/categories/Hexo/index.html","f91e95a6068b7e6fbcafe924765e68b7"],["/categories/Homebrew/index.html","69e18537cfb387c91d1975212fee0bd9"],["/categories/Linux/index.html","32fc57d0d992e7ff7857aba88f76b6d2"],["/categories/MySQL/index.html","f29c73ff6b169be72093c482e0551c0a"],["/categories/Promises/index.html","718c4e2848630fda3b31f0d531513c81"],["/categories/Protobuf/index.html","98b2479fcde09446207fb1ad27b51cac"],["/categories/Result-Type/index.html","9ae654b53eee866068cd33fb25a32f2c"],["/categories/RxSwift/index.html","f84869896ca9df8c4aba7382be17b8db"],["/categories/Server/index.html","5441bca925d66c0aac8ed67785628a0b"],["/categories/Sqlite/index.html","32c63f3d3486cb2c6d4e0ba60b60e4cc"],["/categories/Swift-Apprentice/index.html","7f75cde841415b94cedcd79e2e103494"],["/categories/Swift-Apprentice/page/2/index.html","4b719e597dfeea2013698fe4e5303374"],["/categories/Swift-Apprentice/page/3/index.html","6435cf3005bd867f421d71c26cadd5ca"],["/categories/Swift-源码阅读/index.html","422c4c1b22df32119e3f39e2470f6386"],["/categories/Swift/index.html","caf199f0850bab853475850f6b36b4a0"],["/categories/Swift/page/10/index.html","4342a3098d5751f5bcb239022b5403c2"],["/categories/Swift/page/11/index.html","c7692c48164cdf1168b817ab37e08b8b"],["/categories/Swift/page/12/index.html","38ea4c3fb8b2036485b6baa82b6dc3c0"],["/categories/Swift/page/13/index.html","8b77c1c22e24a80f5dc9d10685c5d369"],["/categories/Swift/page/14/index.html","73c57fe73805a8a6124302648e7c0da3"],["/categories/Swift/page/2/index.html","84108e8f3dd5c73f669fb9439013fcff"],["/categories/Swift/page/3/index.html","0a03d2e12455f868fd821ce532720186"],["/categories/Swift/page/4/index.html","de53c69691c8fafcc3654a9cab5d3788"],["/categories/Swift/page/5/index.html","74b91b5a7dbb578708fc8ba7030f0448"],["/categories/Swift/page/6/index.html","35c3aa4766b610324e4ea6649f8ec1d8"],["/categories/Swift/page/7/index.html","d9c933586e5e6ecababcc840caad0d08"],["/categories/Swift/page/8/index.html","469cdd41b556aa0b97e1fcaff1fb8a19"],["/categories/Swift/page/9/index.html","6eb433cb8812bbbf34a213d11dbe124b"],["/categories/Swift5-2/index.html","bfbf012b486a6429cbdc7f60571e3352"],["/categories/SwiftLint/index.html","dda95f399ba95c07070f4a990c02d1da"],["/categories/SwiftUI/index.html","76614c51d8a8138df4e056254fac189e"],["/categories/UICollectionView/index.html","824b2cb77bcaf295891e07b20630ebcc"],["/categories/UIImagePickerController/index.html","b7ff48682febee3dc494e56206aa8ad8"],["/categories/UIKit/index.html","e9f651277dd7a8c9c06eb09a20efa43e"],["/categories/UIKit/page/2/index.html","31960256f9896d8b93d98ba52612747b"],["/categories/UIKit/page/3/index.html","933452e73acdc8ad1f30f21b8b6496f7"],["/categories/UIKit/page/4/index.html","e4dda8f31ef1ac47419b0002e07cb084"],["/categories/UIKit/page/5/index.html","5ebf0a4ea056725d88a2dd80216a59bb"],["/categories/UITableView/index.html","e55e8e0d54dde86d081635b08b9938e0"],["/categories/Ubuntu18-04/index.html","2dba96e4f4df25bf0fcea48e59f65832"],["/categories/Ubuntu软件源/index.html","9c9ee8ab693c53adbab230d7ee88ffc8"],["/categories/Uniquely-identifying-views/index.html","a57820afb3967332fef3fecc50e38952"],["/categories/VIPER/index.html","707ae96b70a84a346f61c217ee633fd5"],["/categories/Vapor-4-0/index.html","07dc42c1668c52e913f581681e1d8ccc"],["/categories/Vapor4-0/index.html","2fa3ada313fb1fe4296d3c5b23824967"],["/categories/Vim/index.html","fa54250747c0d208d2559bede254a018"],["/categories/WKWebView/index.html","9bb4f9915314efa4d2abb42fe838132e"],["/categories/Xcode/index.html","c8416da40b3d83a21e677830d860cd23"],["/categories/appleOS-Networking/index.html","058db0806524b16e6e043c7dafbbc17c"],["/categories/bugly/index.html","7adcd7d9802869be88d70985df82f704"],["/categories/enum/index.html","91fe6084349b923ee9efc76c7b2d1838"],["/categories/git/index.html","acacd21130bf26f33dd1f052e910fb4e"],["/categories/iCloud/index.html","643c1749394d6a3f29bd4f2daa29f5f1"],["/categories/iOS/index.html","6c59b97d7e43a43c3c64e393b6cb0e9b"],["/categories/iOS/page/10/index.html","28aa7a794a27a030757871b93b289707"],["/categories/iOS/page/11/index.html","96a7f4b6170d067f104e3997de4d0590"],["/categories/iOS/page/12/index.html","fdbaad1b2f10e9699475a52db0a2f9d9"],["/categories/iOS/page/13/index.html","71c06449bc2c57cca2ac39b08a735002"],["/categories/iOS/page/14/index.html","d88de9a4582537e88f3b82ca95336ca0"],["/categories/iOS/page/2/index.html","e8083668abb27252af50d5c1c2e34b05"],["/categories/iOS/page/3/index.html","6094eed52968d9649844b01b3cc249d7"],["/categories/iOS/page/4/index.html","f266c8be8705403e7a70633f4979ccf5"],["/categories/iOS/page/5/index.html","5422972416f2f43cfff40314c12d90c0"],["/categories/iOS/page/6/index.html","43c218c854bd2a66a44d683f17b8c441"],["/categories/iOS/page/7/index.html","43523ee231d3ae87a3722100ab388131"],["/categories/iOS/page/8/index.html","58eeb77f1f0ac9509ca082a6dbbb7531"],["/categories/iOS/page/9/index.html","d9fbd6b1b3a20c46982fce3e62bbf8b7"],["/categories/iOS面试题/index.html","f8add8d8f1996c49adaa9da659cdaef8"],["/categories/index.html","57fe5dcf70831b2cfd67645774b1a282"],["/categories/random/index.html","89842f7c7b4819d7ec03e1ad46982054"],["/categories/三方类库/index.html","e929002aaa1b4475bba034fe8ee6bcd8"],["/categories/函数式编程/index.html","0f19d7c87256a79e45b612353c731cb2"],["/categories/子类化样式/index.html","9aea86717a5b91c3758085e927e8228a"],["/categories/开发技巧/index.html","f5eb53daa1da1ab05f68338141c662a0"],["/categories/开发记录/index.html","e826fd8284ca7cd271466e3a3ee9e3ac"],["/categories/数据库/index.html","ebe016695ef0061787832930822895f6"],["/categories/架构设计/index.html","46cd9961d027fee85f258ec0ad4fc2ba"],["/categories/测试/index.html","7dc5d1cd1b3807ea27e818612255c64f"],["/categories/用户体验/index.html","e297d8451d8240644e905593843337e7"],["/categories/用户协议与隐私政策/index.html","7994f385ca7bf625a226a2864b7010ce"],["/categories/设计模式/index.html","202ce30840edc29c474f876eac4a5de2"],["/categories/设计模式/page/2/index.html","4439b680c5472b8b30186973d680d43b"],["/categories/设计模式/page/3/index.html","ba260b9276ff2313a8046d28c860dd48"],["/css/main.css","31c0c61647311c73122c4f7a2a5b0d0d"],["/hello-world/index.html","9cf0514ee8a93f1bc9eb31a77aa0f990"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","fbe4c32bedc798ccc25b9c938eb3fbe0"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","daccd9d268a6b6c43a74ca46e0a6cafe"],["/page/11/index.html","548cb180aef0444d57dc123ae14bfb08"],["/page/12/index.html","23d7fec2abab5f311f3aa25ebdcf24ad"],["/page/13/index.html","c3dc3d7745b7cbc0e564b20e53d574c9"],["/page/14/index.html","86a24200f232f375e73e68dca61c49a6"],["/page/15/index.html","3e7a52114960275f5853185479618ba0"],["/page/16/index.html","bc3360c1cc2b8764ac5ba49a21529e0a"],["/page/17/index.html","b929b1fd818d84cb170e801a56fc0803"],["/page/2/index.html","72ebcf81bdf508d13cb9ab3716709dc3"],["/page/3/index.html","859f4536112e378bd840ec819b4f8f81"],["/page/4/index.html","049ae6acdcc2ceb46d3350aaccafa1a5"],["/page/5/index.html","1cb7dae8dc435c16af8a2400e113e3ee"],["/page/6/index.html","2dd5addfc6c5701d0a42649fc171a414"],["/page/7/index.html","311096adbff1ac996b946edac48e9322"],["/page/8/index.html","313493281376fda87b628e1a6b9d427a"],["/page/9/index.html","43c24cda7aa81c730e05739b91ebce47"],["/schedule/index.html","ebc6236556ad258ccdc15252f833e703"],["/sw-register.js","2c8459235a16d4416ea830eb25cdffd8"],["/tags/Advanced-Classes/index.html","c28afaddddd0a2fe14d145ebc1e64cc6"],["/tags/Advanced-Swift/index.html","2a890cf19d6bfa33d404e4bab44ac8be"],["/tags/Advanced-Swift/page/2/index.html","ddf4258b7203a3752c20869dc1584289"],["/tags/App-Architecture/index.html","ed0266e4f4662dcdc626bbeaa6e6d3f5"],["/tags/Array/index.html","451c1e27cae7e10b94597e5b6907f8ab"],["/tags/Arrays-Dictionaries-Sets/index.html","cb00b1b2a7d0066e3bc133f15c1b89d1"],["/tags/Authentication/index.html","d23ca0eba755733b5549062188736e46"],["/tags/Build-in-Collections/index.html","e10bac80f4d1a4f24e2668500632d193"],["/tags/Building-Your-Own-Types/index.html","073a0cd566247ce9b2f0ae38cee1f3bf"],["/tags/CMS/index.html","133341014da7b92d7a7b78c01b3558be"],["/tags/Classes/index.html","5c54c298bce9929c4c8ef96c18438ba0"],["/tags/Codable-protocol/index.html","24e3db7b7c68d6dd4a620c09251519a4"],["/tags/Collection-Iteration-with-Closures/index.html","0890387174a2ac08b942a2a09abeebc6"],["/tags/Collection-Protocols/index.html","047cdc10e4b8c531c74f212d31eea47d"],["/tags/Collection-Types/index.html","672ce7e4198d61ec3ffa8bcc3bc65bb0"],["/tags/Collection/index.html","f4e6ec744129b1116bdf116926022860"],["/tags/Collections/index.html","f485aa825d7baa60850086a755ed9341"],["/tags/Combine-framework/index.html","15ca47a206400fbd14a74aa9c55c0c41"],["/tags/Combine/index.html","2df4bd1e006a34420d8b5ce08af62143"],["/tags/Dependency-Injection/index.html","aeeb0871d13a73021c9793f383e60a34"],["/tags/Encoding-Decoding-Types/index.html","1959559ff886c259c61040153936a88c"],["/tags/Encoding-and-Decoding/index.html","dd4c3a21cfc032ac39e0da638ee85ac1"],["/tags/Enumerations/index.html","e759c2a2d2e38fa21c26226ed5b87f5b"],["/tags/Enums/index.html","da071780f7981c9e0830cc44d26655c4"],["/tags/Error-Handling/index.html","1044dc467cbbdbd5c9451e3128f479ab"],["/tags/Functions/index.html","c2ab7160354a4d0561d0310bc4710626"],["/tags/GO/index.html","6e183450928c6265ae499b973db11cd8"],["/tags/GRDB/index.html","9ca82c61daf4ede023c9fe885b6de3da"],["/tags/Generics/index.html","df234a3c06575fa0a8ce90250901d22c"],["/tags/Grand-Central-Dispatch/index.html","a6367b9b1c873a9d2b2cea0d0b07512d"],["/tags/Hello-Vapor/index.html","f5e22c72699a2177cee8e99586f4fbc2"],["/tags/Homebrew/index.html","92df21fcdb7d708688c1a74905da39a6"],["/tags/Interoperability/index.html","1c4345f9a944c13e3c025c9a3bc2fad4"],["/tags/Introduction/index.html","cacaabd9572d2461234cc1b7537074c2"],["/tags/Leaf/index.html","8e53ebc0d001e92ec897b1ea59df0048"],["/tags/Linux/index.html","07f73e9f6a1a3cf4526e19e969ab11ce"],["/tags/Methods/index.html","8ddc87ae0eb70eeb46ac1a7735dd4ca7"],["/tags/Modules-And-Hooks/index.html","756759b10be9215ba63450a6fcae5065"],["/tags/MySQL/index.html","7a5f2629b38578da829791fe57a2ce50"],["/tags/Optionals/index.html","ba3aa05b8165df6b1cf5ae68185dd23a"],["/tags/Promises/index.html","ed69d4c3ef1aa22b0d3e6968529748f9"],["/tags/Properties/index.html","027d7ea00cd814cd4c6a9deaf38b3ab0"],["/tags/Protobuf/index.html","37c2b0ab90e93d87fd9497134b2e8c55"],["/tags/Protocols/index.html","3f9f9fb65df40cdaa88cc0e9ba376f64"],["/tags/Result-Type/index.html","79d869cf2db3b477e38b4b6726813e83"],["/tags/RxSwift/index.html","a72f0b0e0fdfbe78f97350e8ead1b256"],["/tags/Server/index.html","6488092af1ee86ce241b63abc180f4f7"],["/tags/Session/index.html","c6acd83d93b60056b082fcab1bcd341b"],["/tags/Sqlite/index.html","61d43958b360b15a64d1301ce8e5316a"],["/tags/Strings/index.html","e6483d0efdf3d7874e4bd670fbf1eb00"],["/tags/Structs-and-Classes/index.html","acc08990823d85ce357139709e90677a"],["/tags/Structures/index.html","dc17ad79709068c93444b44cb230a7c8"],["/tags/Swift-5-0/index.html","2c1f47b76b34bfd1b87974eff690bcd8"],["/tags/Swift-5-0/page/2/index.html","d2244497d84283f2a7c20b8878dff58c"],["/tags/Swift-5-0/page/3/index.html","1dd291cb4eff9f259f57e9ea5a97a5a4"],["/tags/Swift-5-0/page/4/index.html","4b2bd4f8bec7a48d382752fda1b2eb97"],["/tags/Swift-5-0/page/5/index.html","fa104723c5f8795ca7ae9bc6d54578a0"],["/tags/Swift-Apprentice/index.html","d13198b5afdbda53a5ea43761fb2ffb7"],["/tags/Swift-Apprentice/page/2/index.html","8abbeb4a0372a30fd18cb89f8ff33ffd"],["/tags/Swift-Apprentice/page/3/index.html","8f6c9bf10ac0619de2564f0560bc63e5"],["/tags/Swift-Package-Manager/index.html","a07b6f143979f175876729ff3d2481ad"],["/tags/Swift-源码阅读/index.html","2c4c66676dada19f2147c4aec065b69d"],["/tags/Swift/index.html","60dd300c8ab56a715456f9521dc90528"],["/tags/Swift/page/10/index.html","b8c08c9c4c513d1b1358bde0de905e35"],["/tags/Swift/page/11/index.html","45bd197c6214034f9ec97276efffe3e8"],["/tags/Swift/page/12/index.html","a5024291e546f93242bef1ee77478633"],["/tags/Swift/page/13/index.html","fed5c4720e1780d723819123c2a403d3"],["/tags/Swift/page/14/index.html","787222dda7724bc18b8244c6ac5b3aee"],["/tags/Swift/page/2/index.html","1ce88f1fa36492b08eafa1a2b591b9f6"],["/tags/Swift/page/3/index.html","f3974e97b883d1f1c445c827b55dca13"],["/tags/Swift/page/4/index.html","e42817c94cf59a991b06fc7fdfe8dfc4"],["/tags/Swift/page/5/index.html","b8791599128da78a66a833e88c8acdb3"],["/tags/Swift/page/6/index.html","a8de80301cf6f24cdd89413f77afc8a8"],["/tags/Swift/page/7/index.html","340e9ab36eaad2d3763b25b789c2228b"],["/tags/Swift/page/8/index.html","3cf6ecb0ef58c5e88f9b2b00ff7c5ede"],["/tags/Swift/page/9/index.html","3d742760d7c16b2d37e92262174858ec"],["/tags/SwiftLint/index.html","b6a3e20a64462d1e6f1d852584d59cf4"],["/tags/SwiftUI/index.html","74171168a075632d483b0d216251e586"],["/tags/UICollectionView/index.html","ce5d9a59a736fb1fe0d97557b9cc4d67"],["/tags/UIColor/index.html","ea277a0cd95bed53a97725bc5ebd188c"],["/tags/UIImagePickerController/index.html","5686a550776b505bca03a68d45d638c4"],["/tags/UIKit/index.html","1fa2aa90a9b35a54c957e15d499d6f2f"],["/tags/UIKit/page/2/index.html","d20a0f8225e7f93c2cead0f2e52745b2"],["/tags/UIKit/page/3/index.html","5e7e73b829c45de47ec9187d6d474aa7"],["/tags/UIKit/page/4/index.html","52f12e97a75b76182e9d32f24606e770"],["/tags/UIKit/page/5/index.html","0355b7e737522738a171c2bf279d8ecc"],["/tags/UITableView/index.html","8de651976e29f0bde1b9eafdcf14aa2e"],["/tags/Ubuntu/index.html","3e9e9095ccf8b250385b070acf3431c3"],["/tags/Uniquely-identifying-views/index.html","ef21c2ae9e8c1ee1eed0f89012831972"],["/tags/VIPER/index.html","ee49d37dd7f7ec5eb84893143459c86d"],["/tags/VMware/index.html","c0a68b308debd99ae2d2ab49c87dc57c"],["/tags/Vapor-4-0/index.html","12ed38d4fc6c5ff2f4e690b4463e423b"],["/tags/Vapor-初探/index.html","972e3d6c85567df4c28620dbdbcabf55"],["/tags/Vim/index.html","3513715974ce114d4a954fe87c98eb27"],["/tags/WKWebView/index.html","9bf902f0f4f7aaec72cada23f45b7184"],["/tags/Xcode/index.html","31f62eab23c0e6701f6958856c398fb7"],["/tags/appleOS-Networking/index.html","d45e20e82b45186316f03daf7bd8c515"],["/tags/bugly/index.html","8b78536add900d8a5e42dbe0702a17db"],["/tags/enum/index.html","3d900cc0cf1df60bea81d820adb0c7b8"],["/tags/git/index.html","4634d5b71597c4346518d16846667b13"],["/tags/hexo/index.html","a8307fde6fe32232580a8e8fbfe0486e"],["/tags/iCloud/index.html","afa82142e5d2674c9ed7d7fccb8ca306"],["/tags/iOS/index.html","9778bc45d9d670f5c961cae3021ca2c1"],["/tags/iOS/page/10/index.html","6ccade20f52d9d7dbd1a47a908769e94"],["/tags/iOS/page/11/index.html","f26dba8a66ba42574f2f5d004bbee7b2"],["/tags/iOS/page/12/index.html","4b00bd000cdffba12e160d25bc660c2b"],["/tags/iOS/page/13/index.html","77ad3946adf0e08e6ac5c3714ff68060"],["/tags/iOS/page/14/index.html","9030f3e4c608d33cd7adeb89253a1b09"],["/tags/iOS/page/2/index.html","0b49a2ea5a59b0460cc07c90e9f3bc26"],["/tags/iOS/page/3/index.html","5bdc27f112070259eb7315ea4398c664"],["/tags/iOS/page/4/index.html","f707cfce4f1fdd2a41fc0e69ce15d2ea"],["/tags/iOS/page/5/index.html","ae85afd6540b8132678f5884f7ec5915"],["/tags/iOS/page/6/index.html","dabd3a29af59b5427a5464864b6759fe"],["/tags/iOS/page/7/index.html","87ed58ce890146b667cefaf8052655c6"],["/tags/iOS/page/8/index.html","3c4171a96dd3d150d342600b15eff506"],["/tags/iOS/page/9/index.html","a0e62105039d939c99c2977e9492bce8"],["/tags/iOS面试题/index.html","1812acdc31b1ebc44b4314ed5e2b2f91"],["/tags/index.html","359656cea15dc30d39802c3ce921d349"],["/tags/non-optional/index.html","a99c7c61cd3e362a5170a10627cb544b"],["/tags/random/index.html","76387d192e33ef2f1b55ba42fa454d48"],["/tags/transition/index.html","7ff2463feb8a1d019009e0a1aa4facf7"],["/tags/三方类库/index.html","b67bfe13fb293531668cce8a71a024a7"],["/tags/依赖注入设计模式/index.html","896554a52a19c2d36644f218515f0e5d"],["/tags/值类型和值语义/index.html","690e9729af398f969132cee41e966777"],["/tags/内存管理/index.html","0517ca10f28451a5efb1e2915acc604a"],["/tags/冒烟测试与回归测试/index.html","baacd82562ae028fe000bc1b4ba08d22"],["/tags/函数式编程/index.html","01397b0ccf249c304fb9cfc067bb0e4a"],["/tags/创建博客数据库/index.html","e7b2a1be0079d2ca6e00d6bf16203bc5"],["/tags/初始化模式/index.html","9d84e290f8c1c218c75a7c47388d3adc"],["/tags/单例模式/index.html","9014c12ba0beccfbd1917c78b52457db"],["/tags/原型设计模式/index.html","e105c59c475f928e8d67c691675daed7"],["/tags/命令设计模式/index.html","90f79e40f2ba896ed59375ce9c14e3d2"],["/tags/基本控制流/index.html","b3dfe0c82ba42df648cc764d2b7529e0"],["/tags/基础语法/index.html","c809894d68fc450ff8ee45bfb30f8102"],["/tags/外观设计模式/index.html","c4e2c1e1328fa218cbd0c522fb3517f0"],["/tags/委托设计模式/index.html","a5c0dfe5c2d03f5a216b03b9f7e729d1"],["/tags/子类化样式/index.html","8c42bbd23135f80c4a448577dec97e39"],["/tags/对象池设计模式/index.html","c4ae42dde65b880c039389b2e2c15266"],["/tags/工厂方法设计模式/index.html","5884475e1bc23a9288de1489229f8041"],["/tags/工厂模式/index.html","5c5c10cca7d1542241b7ae2d56c6d1ab"],["/tags/工厂设计模式/index.html","aa16f89b6915977e34def4efa91865bd"],["/tags/开发技巧/index.html","5b3d18f35f7dd29cb495281b3b2b6959"],["/tags/开发记录/index.html","323355f81fa3ee75337192f910eb13a3"],["/tags/懒加载模式/index.html","4f787c80613d377f30d2c4316aec4155"],["/tags/抽象工厂设计模式/index.html","5fa631df5ab917945554f3b4618da9b2"],["/tags/数据库/index.html","dc845412148263746edbc22be61bfe3e"],["/tags/构造函数/index.html","2d6a229b72ed318701ec5cc768199b36"],["/tags/架构设计/index.html","6573d9c8f4f527f88aa71ae7c2e89b1f"],["/tags/模式匹配/index.html","44b69cf4e5af15fffc9f85a8265aff52"],["/tags/环境搭建与验证/index.html","010909ed9ae8f710088dc0c2ef05fd62"],["/tags/生成器模式/index.html","1713da52db9d805bdf3a3378c3087eca"],["/tags/用户体验/index.html","2a5eb8c753c4316c5f756b0b4fcba587"],["/tags/用户协议与隐私政策/index.html","70c0a60056af07c14739370b3b19844e"],["/tags/类型与操作/index.html","5f85c905c184ee6492f538dac200e284"],["/tags/自动化布局/index.html","41e394369d302052ec68abdbd133efb3"],["/tags/自定义UIView/index.html","22ff69a5dab60ff5ace240d535f4b0e0"],["/tags/自定义转场/index.html","4ae05e315ef6126c4f9e4699c195c2ac"],["/tags/自适应布局/index.html","c91d560bbf5e5bc50875bb29dbef36fb"],["/tags/表达式、变量和常量/index.html","11e2d5f15d0c7156774bc7557e39fd7e"],["/tags/设计模式/index.html","b7c9c670d8108bc211a43b24b8728bd3"],["/tags/设计模式/page/2/index.html","8f9fa6d9107b0d054ee2d4cea4a7b171"],["/tags/设计模式/page/3/index.html","158277182145450dd7787fdeedc8b784"],["/tags/访问控制和代码组织/index.html","b6563990e3e0bfaca72f2686d29f2b7b"],["/tags/运算符，下标和键路径/index.html","3a9da690232ca0c8bf29b4c758b1a1af"],["/tags/迭代器设计模式/index.html","79e8498e32cc1ff6b3b2fe920325a3a4"],["/tags/适配器设计模式/index.html","c609418eb1aac38011242e59d9c7b713"],["/tags/错误处理/index.html","a173738c4c15581e6538eab39e87b5f3"],["/tags/静态工厂方法/index.html","12b17e38c735e55c1937e5b7df3d5032"],["/tags/面向协议编程-OOP/index.html","23d7f19919adc6bf8ae787f5c4d743e7"],["/tags/高级主题/index.html","f906d1a9892d1ee602b146b3370f227c"],["/tags/高级协议和泛型/index.html","1f10290ccc2064c0fa9003565eca80f7"],["/tags/高级控制流/index.html","e669b92aafd0e859dc535c38839750b1"]];
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
