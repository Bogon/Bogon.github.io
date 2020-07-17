/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020年iOS面试题总结(一)/index.html","2c3d90e46254817a1b1e9ae986ceed8b"],["/2020年iOS面试题总结(三)/index.html","4f91c89bd38a0e8e8571f2afbcefdd89"],["/2020年iOS面试题总结(二)/index.html","772e36ffeb136969b209437bad632337"],["/Advanced Swift系列(一): Swift 简介/index.html","4e1b87e6a1219a13724e68d19967d06a"],["/Advanced Swift系列(七): Strings/index.html","37c7f707e79686b6f1b51deb2b928311"],["/Advanced Swift系列(三):  Optionals/index.html","622e6db4313e3ef659c2483c3fb93d26"],["/Advanced Swift系列(九): Protocols/index.html","5f56e30a86ce04dfb42d7efd24052d61"],["/Advanced Swift系列(二): Build-in Collections/index.html","337f93da12324709f9cfe4f28f77037b"],["/Advanced Swift系列(五): Structs and Classes/index.html","1ec057b5bd77c1e19e7c6904311a32ac"],["/Advanced Swift系列(八): Generics/index.html","e1ba4ea8011a8e00aff708c497cf2745"],["/Advanced Swift系列(六):  Enums/index.html","7663262371d75c9d59ea2a65b5a103cb"],["/Advanced Swift系列(十): Collection Protocols/index.html","1d7f6f63a723fdea532685621914a4c0"],["/Advanced Swift系列(十一): Error Handling/index.html","0c1d39a96a8f4b530c5f32dc03850479"],["/Advanced Swift系列(十三): Interoperability/index.html","9d8aaf64de965ad1a4f58250f1c5ef88"],["/Advanced Swift系列(十二):  Encoding and Decoding/index.html","7492d00b31dcffc991a03d3c9fa94552"],["/Advanced Swift系列(四):  Functions/index.html","96832d0115ca2738dd2697113a2e68ec"],["/App Architecture系列(一):  简介/index.html","1357753280425d60ef315cd9b1b386da"],["/Functional Swift 初探/index.html","a04a047b8afba16f682550fef6cf92cc"],["/NSCODER和SWIFT初始化/index.html","c689f7fe2f577cee2b9babac1d2a5dea"],["/Swift 5使用UIImagePickerController拾取图像/index.html","3f7656b45a92857c5d88083cc8630402"],["/Swift Apprentice系列 (一) : 第一部分：Swift基础知识 - 1、表达式 变量和常量/index.html","39faa5340477d27bb1caf947ae98a17a"],["/Swift Apprentice系列 (七) : 第二部分：Collection Types/index.html","aef8753c1fa8f7989bafb52181829d72"],["/Swift Apprentice系列 (三) : 第一部分：Swift基础知识 - 3、基本控制流/index.html","0543bd8b14fb4f3a8f4238d07802c4b9"],["/Swift Apprentice系列 (九) : 第二部分：Collection Types - 8、使用闭包集合迭代/index.html","518079ddef7b3140c845e93c3f391d9b"],["/Swift Apprentice系列 (二) : 第一部分：Swift基础知识 - 2、类型与操作/index.html","cd954b26288e6e91332393eb58e058aa"],["/Swift Apprentice系列 (二十) : 第四部分：高级主题/index.html","ced23b685f0557be87b156c4afe48d37"],["/Swift Apprentice系列 (二十一) : 第四部分：高级主题 - 18、访问控制和代码组织/index.html","816800de7bddca66c2a06882974ee2e0"],["/Swift Apprentice系列 (二十七) : 第四部分：高级主题 - 24、值类型和值语义/index.html","7a270fc5f284d9f13dc91319b0df869a"],["/Swift Apprentice系列 (二十三) : 第四部分：高级主题 - 20、模式匹配/index.html","09e2c2b24c0f227830954466d9303cfe"],["/Swift Apprentice系列 (二十九) : 第四部分：高级主题 - 26、高级协议和泛型/index.html","93d7a46854e6a54d331b8e999e439424"],["/Swift Apprentice系列 (二十二) : 第四部分：高级主题 - 19、自定义运算符，下标和键路径/index.html","bddc9282d295b7b05c3b7d4793b45ec1"],["/Swift Apprentice系列 (二十五) : 第四部分：高级主题 - 22、Encoding 和 Decoding Types/index.html","6f5c289d07430ff59c8b3144f04382d7"],["/Swift Apprentice系列 (二十八) : 第四部分：高级主题 - 25、面向协议编程(OOP)/index.html","14ddc307b007089e3f88ded51b838e47"],["/Swift Apprentice系列 (二十六) : 第四部分：高级主题 - 23、内存管理/index.html","80d6c3b5b9dadc3a2c2b3ac8c6380b88"],["/Swift Apprentice系列 (二十四) : 第四部分：高级主题 - 21、错误处理/index.html","91a55bbe4ce18498e866f97926f2a3a7"],["/Swift Apprentice系列 (五) : 第一部分：Swift基础知识 - 5、Functions/index.html","301a2de0851f33cb691595bcdc8a400e"],["/Swift Apprentice系列 (八) : 第二部分：Collection Types - 7、Arrays, Dictionaries,Sets/index.html","df5fff51e686b8d43bfe8954711e2585"],["/Swift Apprentice系列 (六) : 第一部分：Swift基础知识 - 6、Optionals/index.html","d873ff55786c6256494d9904922c1053"],["/Swift Apprentice系列 (十) : 第二部分：Collection Types - 9、Strings/index.html","252bd24ca5ab43e89c3b040f0d375eb6"],["/Swift Apprentice系列 (十一) : 第三部分：构建自己的类型/index.html","4e50f17969643549b86c6e2f6ac7c2eb"],["/Swift Apprentice系列 (十七) : 第三部分：构建自定义类型 - 15、Enumerations/index.html","8a48985f8c5cd5f7173a3a1b917e8b78"],["/Swift Apprentice系列 (十三) : 第三部分：构建自定义类型 - 11、Properties/index.html","b0a07af0e62d36acc36fe680994ec465"],["/Swift Apprentice系列 (十九) : 第三部分：构建自定义类型 - 17、Generics/index.html","0117477801afa4541dc56a0202888074"],["/Swift Apprentice系列 (十二) : 第三部分：构建自定义类型 - 10、Structures/index.html","aa32e1c42afc0e7e00baa58338089511"],["/Swift Apprentice系列 (十五) : 第三部分：构建自定义类型 - 13、Classes/index.html","4d785497ae88771e640d10181e386357"],["/Swift Apprentice系列 (十八) : 第三部分：构建自定义类型 - 16、Protocols/index.html","e5cbd7d1b57bc81857e80dc7475a33d9"],["/Swift Apprentice系列 (十六) : 第三部分：构建自定义类型 - 14、Advanced Classes/index.html","5975be1246e3d628e8bb4ee505db1681"],["/Swift Apprentice系列 (十四) : 第三部分：构建自定义类型 - 12、Methods/index.html","04fad302a18d8b4c3ac75b7a303794d3"],["/Swift Apprentice系列 (四) : 第一部分：Swift基础知识 - 4、高级控制流/index.html","eb3d1b66a9f1db97d7d0f960470655df"],["/Swift CompactMap vs flatMap：差异说明/index.html","11bde5bebfa122a8113bb94d2526f4b9"],["/Swift Grand Central Dispatch 深入实践/index.html","03ad2450cb87efedf241d2687dc9f66f"],["/Swift Lazy属性初始化/index.html","69a4161d2231ef90fd309da5e0d26f7b"],["/Swift Promises 初体验/index.html","5bd3a5e6b314f70de13202003996200c"],["/Swift Promises 探究/index.html","c24ccb64fa89abd7f6d8009372cccd9a"],["/Swift UICollectionView使用指南/index.html","4a269ba000324092fe856e616c6f158a"],["/Swift URLSession && Combine framework/index.html","965a2bb3a4b277ddc45028342ccd7132"],["/Swift 唯一识别的视图/index.html","bc4828a8cc89a43129e0d937d5d83dc1"],["/Swift 如何学习现代UIKit？/index.html","6d960e67658b692922b430a7bf25b011"],["/Swift 用 compactMap 替换 flatMap/index.html","d70ba0730785aad82b6387621d462d84"],["/Swift 选择和播放视频/index.html","b6cc75a1e8a1d02265acfb95cd90639e"],["/Swift中UIColor最佳实践/index.html","ff6a72de3ae7f0235a78768d84945cb1"],["/Swift中快速简单的工厂设计模式/index.html","7576cf6c4dc2e42ed3acc27c28aabb7a"],["/Swift中构造函数与静态工厂方法的比较/index.html","15d79517b56bd83f2c4e1190e579eddc"],["/Swift中的UITableView教程/index.html","7f94e5dc28dfeabb39d034f70723f3f9"],["/Swift中的懒加载模式/index.html","b47c64678313c60fad169309086c84f5"],["/Swift中的模块和挂钩/index.html","41e619cdfabe656fbef15d8d808ad260"],["/Swift使用布局锚点添加约束/index.html","fc48d9bfbb8cc7cdd201f0d2b98de0f2"],["/Swift依赖注入设计模式/index.html","819f67df7fceb777063de369952f8b52"],["/Swift关于Dependency Injection (DI)/index.html","2abdb2fd4b2db9cd296c31b9d2a26d99"],["/Swift初始化模式/index.html","e01651e68a096238abad873b1f92ac87"],["/Swift单例模式/index.html","3bf08c79fa70d5a1b30b02e8f87b78ee"],["/Swift原型设计模式/index.html","73c6e6a1054eab889b68752f85d5b621"],["/Swift命令设计模式/index.html","ba95901e93850bd09fbf8667f4e674b3"],["/Swift外观设计模式/index.html","bd673095cb184454e4d1e32aa1730e6d"],["/Swift委托设计模式/index.html","f834ea3c7c2cff134fdef2fd1502dd6a"],["/Swift对象池设计模式/index.html","1d323e1ea9a1a804c4ddf72cd5b87c5f"],["/Swift工厂方法设计模式/index.html","1385b4d57e0f8eae071062a257eb25c6"],["/Swift带闭包的懒惰初始化/index.html","8bb4554eee8d9e471bdf164f80bdafaa"],["/Swift抽象工厂设计模式/index.html","c6eb6e85a10ee0b284d7cfcce63cec8e"],["/Swift掌握iOS自动布局锚点/index.html","ab5f182a732545706fb67338c1114253"],["/Swift支持旋转的自适应单元格/index.html","a4bd157f4aceda52403d1617c17038b3"],["/Swift枚举值/index.html","28f58e1feb44f008b1ee60c3e0fa9ea1"],["/Swift生成器模式/index.html","e2d560ed1e575f459d4fd8ef5d19ae94"],["/Swift结合Xib文件自定义UIView/index.html","a3d4247c986903f07a19ebd6f5a77f59"],["/Swift编写的20个iOS库(一)/index.html","b72878fb05f3b33da1d7b5760b373643"],["/Swift迭代器设计模式/index.html","32d479a2f93e74403d69304c81ebcf7e"],["/Swift适配器设计模式/index.html","fb6d026d38068fe7af1d49483e723fc0"],["/Swift静态工厂设计模式/index.html","88601b734bb14724bfe4e99ef566f6ed"],["/UICollectionView Cells：圆形图像、支持旋转/index.html","1d4e3507e8a7a298bcf0f1ceb783a0e7"],["/UICollectionView data source and delegates/index.html","84576eb7b1496e4ec63289908ba0e2cd"],["/UIKit初始化模式/index.html","dfe27dd73a18093439b5cef6934d947d"],["/Ubuntu18.04替换国内源/index.html","950b727a1e371b33586aedefbfb9bd91"],["/VIPER体系结构：我们的最佳实践，像老板一样构建应用程序/index.html","884fb250fd4ce1aff4ce4106cf35f2fe"],["/Vapor系列 (一) :  Vapor 初探/index.html","7286a0f1a4b5e0bf667173045d3cbe0d"],["/Vapor系列 (三) : 使用Leaf构建网站/index.html","298ca9cc44cd5277ec1ca40bc2c3f428"],["/Vapor系列 (二) :  Hello Vapor！/index.html","2df576d38f8e85ed298506be355e9694"],["/Vapor系列 (五) :  使用session进行authentication/index.html","742305ee105b9361d4489c22963f4e46"],["/Vapor系列 (四) :  创建博客数据库/index.html","015d20b65b2a240e9ee1e516582163d5"],["/Vapor系列(六): 徒手撸一个CMS/index.html","b4e30c0d6e771948e4d3f802339d1ddb"],["/Xcode扩展/index.html","77046b1f305117b4b13024d8abaeb21f"],["/about/index.html","9d240c2540189699937b9baf96b6e8c4"],["/appleOS的Networking示例/index.html","baf406a89d047fb855ac10e150361578"],["/archives/2020/03/index.html","42aca01c918e89de2487d5ad9c2565f3"],["/archives/2020/04/index.html","74694ec1c2e74245062bb51dc9bc1d50"],["/archives/2020/04/page/2/index.html","f9020bb1b9ca4d1a12828050745d9618"],["/archives/2020/04/page/3/index.html","1a7a9be76695736fdfd799516020f754"],["/archives/2020/04/page/4/index.html","4bb43fb99c284f003a1824316a36e060"],["/archives/2020/04/page/5/index.html","198ec70aef558f778178c2a1d2ad1738"],["/archives/2020/04/page/6/index.html","e0007ece63e33393246290357ba826b1"],["/archives/2020/04/page/7/index.html","3df627eda1140b4909cef21e32baa766"],["/archives/2020/04/page/8/index.html","7905ba435c2d8102cbbd5e4d92b7e189"],["/archives/2020/05/index.html","dfad4e0b00155665de0697cc0e4c28c7"],["/archives/2020/05/page/2/index.html","60b5e338a70609bc66ce2a047d55a600"],["/archives/2020/05/page/3/index.html","b21543662781c23953ab6bbd52d4c7a8"],["/archives/2020/05/page/4/index.html","c0d84b85e708d62936a0d8b50f7cc6cb"],["/archives/2020/05/page/5/index.html","0bce3b208bfb450271f8c44106e703f1"],["/archives/2020/06/index.html","a078b34f7d6fab3a009f7f5d31749ac5"],["/archives/2020/06/page/2/index.html","b862d3e380ed32c427cddb148e664eb8"],["/archives/2020/index.html","1052db11a9498b62d573a5c00c5c6491"],["/archives/2020/page/10/index.html","c9ed4761faec053eb1ae4d158378ef48"],["/archives/2020/page/11/index.html","be4ce4e6941e3c045e5b1eed5d88526b"],["/archives/2020/page/12/index.html","b6980cf3525dab686670f960b668d51c"],["/archives/2020/page/13/index.html","9fd173b1d7e887b3f94b6bac05c43c4f"],["/archives/2020/page/14/index.html","b5f2bca9cf8b8aea5a1c4a2f60f27e76"],["/archives/2020/page/2/index.html","be9663882a77128fbc3e080da06ed473"],["/archives/2020/page/3/index.html","c8a45bd83eb3843c78aea8c870dd6728"],["/archives/2020/page/4/index.html","e86aba3338f3ecea46d579d1786fe81f"],["/archives/2020/page/5/index.html","253ef1028e08ee14bc61d48d1eaa3030"],["/archives/2020/page/6/index.html","44710a811a61f9c09b901ae4bc7d9ec5"],["/archives/2020/page/7/index.html","02a508f3468e577318725f1850412504"],["/archives/2020/page/8/index.html","be6133fada72250be27b1d4dddeca279"],["/archives/2020/page/9/index.html","0e781d860be18b26a86ea7a79cd5919a"],["/archives/index.html","6e9eea5f2fbd474387c9d852ece29917"],["/archives/page/10/index.html","175f9fc667ffc5d4fae3be87c0a6749b"],["/archives/page/11/index.html","38abdd5a058b78167a72a8d82f8fcddf"],["/archives/page/12/index.html","445e95a15a204fb1608da4ad21287128"],["/archives/page/13/index.html","2efb7e4529644170c1dc86f0a82f3877"],["/archives/page/14/index.html","c79aff27b0f68cf1380f27616a6b5934"],["/archives/page/2/index.html","253d063f0ba1de8b07c05a2b1cb7c9a0"],["/archives/page/3/index.html","412b73c68b484c19e15731190ea7c370"],["/archives/page/4/index.html","bb8455f00016608fca6cb4d9300b6bb1"],["/archives/page/5/index.html","4a2641444c2afbbc6c3396a22757743d"],["/archives/page/6/index.html","a2de750a7365666bd327bb7145c28b06"],["/archives/page/7/index.html","b76aaedc4f2aa5c55ef4a6cf3d26b3b0"],["/archives/page/8/index.html","00782429fc21683014feffff93321dae"],["/archives/page/9/index.html","cd6deeffea2587875004a2d13a8b5a65"],["/categories/Advanced-Swift/index.html","b4ec45694471012fb1fb64b6c5fa6681"],["/categories/Advanced-Swift/page/2/index.html","d4fdf448d5e3c333c1d5d3d5a254eaf7"],["/categories/App-Architecture/index.html","780b589a6a06766dfdee9cd2d4e9d8b1"],["/categories/Codable-protocol/index.html","2c178fd6e5b2c352f3ac568780e458f1"],["/categories/Combine-framework/index.html","426e912d4b1a600aa9033e7c8cf21da0"],["/categories/Combine/index.html","47ed8ba5b87e94d7f50fd80d7e7cf377"],["/categories/Grand-Central-Dispatch/index.html","ae462761141d799cb85ded111a72c888"],["/categories/Hexo/index.html","a1ce36896be6565058c864fc525486f2"],["/categories/Promises/index.html","2f09a7cce2f7ef91907018cc51153b65"],["/categories/Result-Type/index.html","74168b0a3293355f9be063fb960ce568"],["/categories/Server/index.html","804c3dab22d0b61e5afd3ee2c40361bc"],["/categories/Swift-Apprentice/index.html","99dc98234df9442296b122114200fc75"],["/categories/Swift-Apprentice/page/2/index.html","58a53bdec631649abde198495194afeb"],["/categories/Swift-Apprentice/page/3/index.html","b9e1887f55acd1b9fad1daf00348b9ce"],["/categories/Swift/index.html","c30f0c76305dc678f5fc06064a8bc9b7"],["/categories/Swift/page/10/index.html","fa87bd792c8b2a73f853b0af22943e08"],["/categories/Swift/page/11/index.html","d8c36535de140e95d7a27b8ab6334d47"],["/categories/Swift/page/12/index.html","2816d6ff059be2750f6fe5ed1fd749cd"],["/categories/Swift/page/13/index.html","cbd0526e72f8ee9f28366d130f4e3858"],["/categories/Swift/page/2/index.html","e898917dd9388d381c4f7696e0b8e884"],["/categories/Swift/page/3/index.html","4d792040bada184b08104e45a0bf0d77"],["/categories/Swift/page/4/index.html","8c69d7980939705ec82b6aacf9f5969a"],["/categories/Swift/page/5/index.html","e237b72d626d16bae543968b3bc7266a"],["/categories/Swift/page/6/index.html","fbda318d2c4fa321d72e7d602d40a051"],["/categories/Swift/page/7/index.html","e27ff3cfae7c67a219a017ca191d7f13"],["/categories/Swift/page/8/index.html","cacd7431ee8d9cb352b2613ed8dc6ab8"],["/categories/Swift/page/9/index.html","688b29d3e7472b5e0bc87237fba8345e"],["/categories/Swift5-2/index.html","40d67ca887ab6da0f15c4f3e5a170d2a"],["/categories/SwiftUI/index.html","58dcea310361f2d7faa98c42503a716d"],["/categories/UICollectionView/index.html","7db941022aebe218d88772b3baaa8abc"],["/categories/UIImagePickerController/index.html","28d63c7a8ffff5afb0d770f386d2c8d9"],["/categories/UIKit/index.html","0de9e54201c6eb5b2ef38f3a5ae0af44"],["/categories/UIKit/page/2/index.html","785492581fff71e727faf79dbddb2e9a"],["/categories/UIKit/page/3/index.html","1ddbb60d261d23891281945980c42993"],["/categories/UIKit/page/4/index.html","2ca129cc4eaa799f1563755f9175b3aa"],["/categories/UIKit/page/5/index.html","4ad1abb28d7ef004df43b18fc1b2101d"],["/categories/UITableView/index.html","91c93dc33cf8fac1ab615267a87ce348"],["/categories/Ubuntu18-04/index.html","85e66ef67b670a9de2e5341922460d6b"],["/categories/Ubuntu软件源/index.html","798fb44b1f7cb5f830b78a3cdab82d31"],["/categories/Uniquely-identifying-views/index.html","1fa2ca97991777724c1df650ed38e7f0"],["/categories/VIPER/index.html","25898777763694b2be9214d88fe7333b"],["/categories/Vapor-4-0/index.html","075dd8125b9b731c6fc9774dff1f6ff0"],["/categories/Vapor4-0/index.html","ef588ea633ba9d6ac9a3a65ceba4ce74"],["/categories/Xcode/index.html","270aab99683739721cfaf3033d92da27"],["/categories/appleOS-Networking/index.html","eff4d9a635c14a69a970145c1d873106"],["/categories/enum/index.html","f512de00bf9160df8a2228d28fd997c5"],["/categories/iCloud/index.html","0b3c52054b742681a01512a25a26fb38"],["/categories/iOS/index.html","05644ad2eeff7fc53cebe1b7c4871be3"],["/categories/iOS/page/10/index.html","197bcdaafb29a60a319af7e4559a7f8f"],["/categories/iOS/page/11/index.html","fbebcc1dd6d72f92759a15ded340c26b"],["/categories/iOS/page/12/index.html","2524a6fa1cce2c9c5608bb6436025c80"],["/categories/iOS/page/13/index.html","de486c1577c49d1ad8cad700eb66adc0"],["/categories/iOS/page/2/index.html","c74bb9e31c6ffe5128a85784c16444f2"],["/categories/iOS/page/3/index.html","f1645467fb83cda61b4a700b80442b4c"],["/categories/iOS/page/4/index.html","7336e4f4bd665d3980f70ffbc3153a49"],["/categories/iOS/page/5/index.html","a83c8f081789f4dca5597c6107fbf429"],["/categories/iOS/page/6/index.html","bf252e7109bf602ab8db55c6814d5ba7"],["/categories/iOS/page/7/index.html","89d9ce6df098eb279fd7acda939242e8"],["/categories/iOS/page/8/index.html","47a52345ef45af5e4d52c6d577fec485"],["/categories/iOS/page/9/index.html","6c56526b5d9a45d5a7b1053cd058e84b"],["/categories/iOS面试题/index.html","9560983bb610a9783ba896763566b7e7"],["/categories/index.html","104482a876f1f269795e354a805410fb"],["/categories/random/index.html","b30e337a70b457ee6f02260c16cfd1f2"],["/categories/三方类库/index.html","d57338d67331e0e426da71bb1773d12f"],["/categories/函数式编程/index.html","38781a2cac5bbb3ed63cab86ef6de804"],["/categories/子类化样式/index.html","08560b0cccc342d7b3fffa96166661e4"],["/categories/架构设计/index.html","8110b656090c818f654502d6356545b7"],["/categories/用户体验/index.html","8970d268deb2f20fbf19dc9719f4574f"],["/categories/用户协议与隐私政策/index.html","5eb1d1b709726df8afebffc95188f473"],["/categories/设计模式/index.html","c7a7052b5f2f27d9ec096fecbb63daa2"],["/categories/设计模式/page/2/index.html","35d0b12ab452ab39c76b561b3edca229"],["/categories/设计模式/page/3/index.html","21f1ad4ea3557b2b74352b7d64dc50b7"],["/css/main.css","d92d8d2f64668c02547747739ef4a115"],["/geckoAppPrivacy/index.html","a3fe58d81493f0d980f6a59530c53671"],["/hello-world/index.html","f115ccf7c587cfae86a8e3227216a65d"],["/iOS VIPER架构深入实践/index.html","98f3b57f2f1c9c79e13ad2e272de8b10"],["/iOS 自定义视图，输入表单和错误提示/index.html","58a477ce0761b1c2d2250208b2299ce3"],["/iOS如何使用iCloud文档？/index.html","8eb86e1cf2723e217b8b8582aed5d25c"],["/iOS子类化样式/index.html","d81d8b2c3baf5d7e0361ce5c759c73ff"],["/iOS自动化布局编程/index.html","7e7724b5cd05354fd310d71e71c050da"],["/iOS自定义转场(By Swift)/index.html","011241df94d5c108c512d22a62eada8d"],["/iOS项目架构：使用VIPER/index.html","cac94d20aaea1b4fedd033bd1bc205b1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","4770d70c4db79da5fa5b59b82d5f95fa"],["/images/apple-touch-icon-next.png","95ccdd9f3b0c6d3905a1d309fd522a06"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6a82c155f6732a2c6bb9b6e2d5737e4"],["/images/favicon-32x32-next.png","b2922c2278f6d23b67a7a38932894a23"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/wechatpay.png","3aa4fd84ba409e973c5400d73c04abd0"],["/index.html","2c6ea0288c3b21c177106e8708c5097c"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","2df07c4abc11777117ead70a154af2cd"],["/page/11/index.html","cb0fe8126fd1cfb437a4598599f962a5"],["/page/12/index.html","8e34b3a215702e268e1f5c2552ae8c4d"],["/page/13/index.html","32d6602f9283866cc73fa531dd0be227"],["/page/14/index.html","a994ef14a01ba838acd72fd741d84f63"],["/page/2/index.html","ed2dcc397e5ce6c301e8a84c3df4b35d"],["/page/3/index.html","f365cee87691c1817d679c45f6f167ad"],["/page/4/index.html","fe52fa5c7594f2d41dfdec223f3c1e00"],["/page/5/index.html","7ed82bdde66a111498f1969a24dddbc6"],["/page/6/index.html","b0104dc438327042c88b219d09c38af1"],["/page/7/index.html","c8dd696c09ca0f8383ac1cb3aa016b1a"],["/page/8/index.html","9b9d4e2e06657d5798a4ee3454b07a76"],["/page/9/index.html","32e627982c996888bda84a124eb322f7"],["/schedule/index.html","a3d9603e6fb6c10f822c77c775d5ee10"],["/storyAppPrivacy/index.html","a1c6af5800985f8b34487c0c5fbbf10d"],["/sw-register.js","66862a134ac4d9b22116a8f62e0c16c5"],["/tags/Advanced-Classes/index.html","207ea2e20fd8774039f063ccc3be4a06"],["/tags/Advanced-Swift/index.html","2ca9a57dbaf06e600a3401f32fa0880d"],["/tags/Advanced-Swift/page/2/index.html","ba3c6fd220db2335b1eb7ff37882deae"],["/tags/App-Architecture/index.html","3cf7dd93bdcdcf94571a35fe2c0b1ab0"],["/tags/Arrays-Dictionaries-Sets/index.html","a0d80f371a4217a6e7be855d3a98fbfc"],["/tags/Authentication/index.html","a56f65532930b6921dd8139a4570ae7f"],["/tags/Build-in-Collections/index.html","3bdc77dea4d4a5a262ab14149a9471aa"],["/tags/Building-Your-Own-Types/index.html","f6928b23544dd04721cb8503b8f9bddd"],["/tags/CMS/index.html","b4fbbd14ca33b31afd8a5bfcf4742446"],["/tags/Classes/index.html","4260c8ebae839ca11d9ecdd1465e7b6b"],["/tags/Codable-protocol/index.html","d6acbff69d990c53345f3946e24e6834"],["/tags/Collection-Iteration-with-Closures/index.html","fb7407a288620071fea635d4f520b71e"],["/tags/Collection-Protocols/index.html","3d0afffa29a93f6794bac9cad61900ae"],["/tags/Collection-Types/index.html","a1dd3bb93fcdcd485680dd68cefeb06c"],["/tags/Collection/index.html","f53c6825fab3ccc5de4523dfbe8a4d00"],["/tags/Collections/index.html","b5f2b1138216ef212dc919ce515027ab"],["/tags/Combine-framework/index.html","3bde6277670a274b90e7656daa9ef053"],["/tags/Combine/index.html","a7bbbca04fcb8c9ac8daae6ae344837b"],["/tags/Dependency-Injection/index.html","a18aa7429053cd56021e2681418922f3"],["/tags/Encoding-Decoding-Types/index.html","d252c9ca425820c4562b0eaf3f95fa8b"],["/tags/Encoding-and-Decoding/index.html","cb6700e092ec420d1aa0563704a2591a"],["/tags/Enumerations/index.html","6e358c02690dcd531ed76a66f2b0f531"],["/tags/Enums/index.html","dcfd10f577980e0abea9fbc384bd5d9f"],["/tags/Error-Handling/index.html","aed5f32d5cd57f907fdf606e2fc23f6b"],["/tags/Functions/index.html","572ddb4d8a69055c2ee52a2688f95116"],["/tags/Generics/index.html","bb467c7ed2fdc29a5593ac8d0169dbc9"],["/tags/Grand-Central-Dispatch/index.html","88efb3f5ca689d7f52324114664d35df"],["/tags/Hello-Vapor/index.html","139d8308058f35db13089046cf07661a"],["/tags/Interoperability/index.html","5fa4d6cf7e8e64a2dea9b5959696fa92"],["/tags/Introduction/index.html","c334c2278405c43c30a3f2157f3dca4b"],["/tags/Leaf/index.html","d93c9fe5d832160e29086836bdd9627b"],["/tags/Methods/index.html","747e3347532051f7a183e4ba03493a21"],["/tags/Modules-And-Hooks/index.html","c5318aaed433e41831851ba1b49d48ba"],["/tags/Optionals/index.html","3aa34d1b84513eaf823429c8e600767d"],["/tags/Promises/index.html","e2c9f171b53d8dbfd9ea2eb40dfb9a5d"],["/tags/Properties/index.html","76c36fe41d2a597086cfa4321d8579b9"],["/tags/Protocols/index.html","47c722985fa26e1f28ac930bf9614289"],["/tags/Result-Type/index.html","3244a741f5b659842acddd7c8fd72d2c"],["/tags/Server/index.html","f923f0e81131b1baf5014a3492f1eff5"],["/tags/Session/index.html","7fa8b6e5b437b5947f5fd94298361b3f"],["/tags/Strings/index.html","451abc8c9fba89e42a2f53276708db04"],["/tags/Structs-and-Classes/index.html","bec3a55f729045042acee0b38552a803"],["/tags/Structures/index.html","9f882aa15eab3e7a52dc7ef24b76f741"],["/tags/Swift-5-0/index.html","872b9fe11b30355706d802136d4a74d3"],["/tags/Swift-5-0/page/2/index.html","4b60e1ef76e2f066589c0905ff2596da"],["/tags/Swift-5-0/page/3/index.html","1916c6aee63ca3baf1f87ca30dbeeb76"],["/tags/Swift-5-0/page/4/index.html","67f00e44fc1db449eac4fd849d5cf0ff"],["/tags/Swift-5-0/page/5/index.html","4b7d836afdf2184768bbe35b830281fa"],["/tags/Swift-Apprentice/index.html","b7acc7373af83f427fd037d4f4e51623"],["/tags/Swift-Apprentice/page/2/index.html","8c6c009b9ecd382bd80832b2ed8defca"],["/tags/Swift-Apprentice/page/3/index.html","3298a9c1e2c38231e81e528ed2bd79e9"],["/tags/Swift-Package-Manager/index.html","7f629c93cb9f94fec155def829b5ef7b"],["/tags/Swift/index.html","09d6d46e45b2362144897b1e709cf4cc"],["/tags/Swift/page/10/index.html","e1ca0e3ce835c0c31bed1480f0bf12e6"],["/tags/Swift/page/11/index.html","46187d0aacbbdf2f27df18d6a413bb15"],["/tags/Swift/page/12/index.html","830f98b09581eeaf65976e05932b8780"],["/tags/Swift/page/13/index.html","53ae650b1797a4102a8811d66b57e0f2"],["/tags/Swift/page/2/index.html","e82915f1801c7bef251c4b50bb9becdf"],["/tags/Swift/page/3/index.html","c4cc3feaeadda9e5f42ad31762ec1876"],["/tags/Swift/page/4/index.html","50c28d54ec485d1ef715cf4eda597ac8"],["/tags/Swift/page/5/index.html","0166c3f75b5c55302cb8f2d87e02fa22"],["/tags/Swift/page/6/index.html","47a2569f8ec1a47cd08fe6996be0ad6d"],["/tags/Swift/page/7/index.html","1944bb3899ff6e9c890443771c079300"],["/tags/Swift/page/8/index.html","618ef7176a6a941e647ae36a0630bdaa"],["/tags/Swift/page/9/index.html","c07920a9fc558ffb990945853db62d56"],["/tags/SwiftUI/index.html","2f65d5bf973e2fb23d2a0fee420ea7ed"],["/tags/UICollectionView/index.html","38319b8510772cdbaba23e42b3523c09"],["/tags/UIColor/index.html","202e643c35c36e318336f9c10ccf6e26"],["/tags/UIImagePickerController/index.html","2953e66d88643baa0367481b27fda539"],["/tags/UIKit/index.html","cafaa1195ef525006544d7bb8b9e6632"],["/tags/UIKit/page/2/index.html","89473f3fb618c28ff4f9f3a7216121f3"],["/tags/UIKit/page/3/index.html","e94b3fc7e3e05993ce53a6e4802a49f2"],["/tags/UIKit/page/4/index.html","55faad50d572f532b05c44c263e17cbe"],["/tags/UIKit/page/5/index.html","d80ada943317712e7cadee1096ee3090"],["/tags/UITableView/index.html","01640a64d6fb1954ae68c4f07a87b0ef"],["/tags/Ubuntu/index.html","f61c9816278cd256576acf40388eb043"],["/tags/Uniquely-identifying-views/index.html","862c43dbadce33ce7d2f876b93bc1514"],["/tags/VIPER/index.html","9f0d48de71a8fdb6115ab7b79b3ceaaa"],["/tags/VMware/index.html","30401a744860046c7a78c95907181081"],["/tags/Vapor-4-0/index.html","cbc7253a5134d6922d329f4899e33448"],["/tags/Vapor-初探/index.html","4f0503b9ed927fca6e9058b578dfbbdb"],["/tags/Xcode/index.html","ae715d44a8d0d863dcb6fa132b566904"],["/tags/appleOS-Networking/index.html","cde18f4c7898f4698a0e945591186ae0"],["/tags/enum/index.html","ed57dd25c34d5443b45c5be0ec15cc2a"],["/tags/iCloud/index.html","3507e31fb6a143ef25c7ed29fbdd81d9"],["/tags/iOS/index.html","ce88f35e224afcf218a23c63b87a4d0e"],["/tags/iOS/page/10/index.html","ca591ef67e3e247ee2fcbbb5a4d2d1ec"],["/tags/iOS/page/11/index.html","a026c78c37dc2b3596fbbc35e824c44e"],["/tags/iOS/page/12/index.html","104e54d0401f79f73aa47b77e33ba2a9"],["/tags/iOS/page/13/index.html","20c218cd07fd5e304c6b397dcd44b405"],["/tags/iOS/page/2/index.html","4e23aae83d78fe07ce06fabd9aef8a88"],["/tags/iOS/page/3/index.html","108c190245e4e46780cb1768f89cd532"],["/tags/iOS/page/4/index.html","17c3a6837efed6bcbbeb0c16ea622f09"],["/tags/iOS/page/5/index.html","392e852508d738b0c16659db4f09c57f"],["/tags/iOS/page/6/index.html","84f34c3949b1b6f340b61e737e146f48"],["/tags/iOS/page/7/index.html","ddc6ed3076a28e7e8bf200ba7d570467"],["/tags/iOS/page/8/index.html","c8b80267802697030342aa0403587a93"],["/tags/iOS/page/9/index.html","99af21889651eef53ea18ac3035d9dbd"],["/tags/iOS面试题/index.html","ebbc62a3a97828ec7760894540d8f440"],["/tags/index.html","3c913fb2ddc1afa965208e5ee3ed0799"],["/tags/non-optional/index.html","2ba89baef1c1f912a3c002817cac250a"],["/tags/random/index.html","2f4f48173284567607ac876ec2245a98"],["/tags/transition/index.html","e44272b56287b294ad85c5ca836e9e7c"],["/tags/三方类库/index.html","d4517b15fcbcbd2e207675fe81644a14"],["/tags/依赖注入设计模式/index.html","48f024cbe1cdf116e95cbc2c27c816db"],["/tags/值类型和值语义/index.html","9f4c0a70a44fde6ced32483532bd5e63"],["/tags/内存管理/index.html","e66c42c7a1ed5e0868c5b9533edfc80e"],["/tags/函数式编程/index.html","4062ef14f8b1fd945b7680489011fb38"],["/tags/创建博客数据库/index.html","080cd00cd108e030d5c5f8a6dee7f5b0"],["/tags/初始化模式/index.html","016af5bbe39e136faa38317b7fc6b3a1"],["/tags/单例模式/index.html","5c4ef922a06290fca20afb5a890a17cf"],["/tags/原型设计模式/index.html","e765e784ce83f9b028e4fe219f26b161"],["/tags/命令设计模式/index.html","af14ae468459c333391d002e506ad76d"],["/tags/基本控制流/index.html","6213b65ecaaf9bf0e93c56caa6d78f90"],["/tags/外观设计模式/index.html","0761d86acb993518c16c6d0c35dafdbc"],["/tags/委托设计模式/index.html","ef6d4c50dfef02c7a5b639f4790e6701"],["/tags/子类化样式/index.html","f58682d591c5d76e46d3d84beb5b7da5"],["/tags/对象池设计模式/index.html","0bd29f13bb503b9c58ac259b0b639323"],["/tags/工厂方法设计模式/index.html","a9b1ec2117c30ae4ab19d0c8e02a5cd7"],["/tags/工厂模式/index.html","f1ca3782c6f1e19ab65c84a327e0156c"],["/tags/工厂设计模式/index.html","33da03686ed2acf9ee1354e0fe631dbf"],["/tags/懒加载模式/index.html","f5b91f441bab3fcd3a70b0310256c3ad"],["/tags/抽象工厂设计模式/index.html","083aff77dc3df669bfd77d39f953fddd"],["/tags/构造函数/index.html","d5820977916f99d6c65b72b670d57227"],["/tags/架构设计/index.html","900feb40bd3110bf1a2bd06d734ef165"],["/tags/模式匹配/index.html","3d9ef37f325ab29080f1f51db20bdc5c"],["/tags/生成器模式/index.html","9d023bcb0fc89817cb10c9067c414bc0"],["/tags/用户体验/index.html","626772d1192bf56592214dd7ab3a21d8"],["/tags/用户协议与隐私政策/index.html","a512670cca05dd627e168640f28f7be2"],["/tags/类型与操作/index.html","a3f025ec6182aad0553736db934fd1c9"],["/tags/自动化布局/index.html","27e7928184849bb7c360984e5307714e"],["/tags/自定义UIView/index.html","22e2549c3b4e463532cbbf42279fdcc2"],["/tags/自定义转场/index.html","4140e5eca3d2064d9338cdcdf143aaad"],["/tags/自适应布局/index.html","c35ae28e9cdfe514183eff2a6f86668f"],["/tags/表达式、变量和常量/index.html","78668aa5f0f504248c07a410936e7340"],["/tags/设计模式/index.html","d3a5e4d1beef71decdfd866e538843be"],["/tags/设计模式/page/2/index.html","6d52920b8e9d05968d17f03dc80626d0"],["/tags/设计模式/page/3/index.html","1fadefa82d567d0c60c736d6ff7cf856"],["/tags/访问控制和代码组织/index.html","b3871ee3d6d4780bdbb9d79d3fe70284"],["/tags/运算符，下标和键路径/index.html","09c01194daf281bcf623ff5d12a272ec"],["/tags/迭代器设计模式/index.html","e4c355c55ef8898578cdf6a707c0634f"],["/tags/适配器设计模式/index.html","c170fb3b5b7b036cc790721360ca5ca0"],["/tags/错误处理/index.html","c11aa9c6e60c26d592a03f8b4cef46d1"],["/tags/静态工厂方法/index.html","66ad74bfa7ddcd71633a7fd16eb6490e"],["/tags/面向协议编程-OOP/index.html","e2ff728fd2ca9b11043e4b08aa455377"],["/tags/高级主题/index.html","39983e6822d78154b14a315f751c9e73"],["/tags/高级协议和泛型/index.html","3cc2512b6ac6bfa9bb7c574679e54da3"],["/tags/高级控制流/index.html","d2f5b5e1a27a211030c71ca4f7099e98"],["/zhizhiAppPrivacy/index.html","14fa01c30bac851fa6255019c0d16e8f"],["/为iOS应用构建输入表单/index.html","145105e5377fa223a35df3b040dff1d5"],["/产品开发的幕后花絮/index.html","f046726dfc628193945b0bec6138e88d"],["/作为Swift开发人员，如何提供更好的用户体验？/index.html","34e4e4aa4d7fa01b92b22756ce7b4657"],["/后端实践一:开发环境搭建VMware下安装Ubuntu18.04/index.html","a588bcb5515fdf14c94a4d5629364238"],["/后端实践三:Ubuntu18.04安装Vapor4.0/index.html","71745e367496692b3853b564e994b492"],["/后端实践二:Ubuntu18.04安装最新版Swift5.2/index.html","182af894f27b11c4b5e1e263c39665d2"],["/唤唤家政用户协议与隐私政策/index.html","461adf0523b202b62293f7019c5be316"],["/在2020年学习iOS / Swift的最佳实践是什么？/index.html","eab021b55afd21d4c92f0b7abe90aca7"],["/在Swift中创建自定义集合/index.html","49468ccbca29e8a72bf763c50053d267"],["/在Swift中处理非可选选项/index.html","a47e3aca401663922b7901b5df54733f"],["/在Swift中生成随机数/index.html","9d5d9dba65ed0ac254f6e82ec5fd45cf"],["/在Swift中重构单例模式用法/index.html","a11ba1622447b89f19048383e6ac907c"],["/如何为VIPER编写服务？/index.html","0d174953b9a6e2c9914ded836f22f3f4"],["/如何使用 Combine Publishers和Subscribers通过URLSession下载文件？/index.html","9a14b2d255995f2aaac1c53339212e25"],["/如何使用 Result Type来处理Swift 5中的Errors？/index.html","f4ce101f769beda41e2a4ee0752be635"],["/如何使用Codable protocol在Swift中解析JSON？/index.html","5cf911a3fd738c5f22573c399f8973ab"],["/如何使用VIPER构建SwiftUI Apps？/index.html","88e9ca29794a4f35ca82c3bd1554db29"],["/掌握VIPER架构/index.html","f44df2283354439aa793d0f818c0c8b2"],["/揭秘 WordPress Hook 系统/index.html","82bde1729098f4f0ab21a04834d814bc"],["/比较工厂设计模式/index.html","5dc3da97576fccb72f72386df982fd06"],["/深入了解Swift中的Grand Central Dispatch/index.html","7669ae743e9a5fbe3b27e806085f8be1"],["/深入研究Swift框架/index.html","390c385fe6dcc41eb5c6e29fe4bfc57a"],["/适用于iOS开发人员的VIPER最佳实践/index.html","cc3e4f9c25ff340e36eb11c7193909c7"],["/选择Swift而不是Objective-C的5个理由/index.html","db6bfb486b9215abac1f771518e62a5c"]];
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
