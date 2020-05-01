---
title: Swift UICollectionView使用指南
description: Swift UICollectionView使用指南
permalink: Swift UICollectionView使用指南
copyright: ture
date: 2020-04-27 10:56:48
keywords: iOS,Swift,自动化布局,用户体验, UICollectionView,UICollectionViewCell,自适应
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自适应布局]
    - [UICollectionView]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```UICollectionView``` ，具有高度可重用性的 ```UIKit``` 组件和一些 ```MVVM``` 模式，而不会费力地进行索引路径计算。

</br>

# **UICollectionView类的剖析**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不熟悉 ```UICollectionView``` ，建议立即熟悉此类。 它们是 ```Apple``` 和其他第三方开发人员提供的许多应用程序的基本构建块。 就像 ```UITableView``` 一样。 结合 ```IB``` 和 ```Swift``` 代码快速了解和使用它们。 💻

![UICollectionView](http://q8wtfza4q.bkt.clouddn.com/ug-stp1.png "")

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将仅使用强大的 ```UICollectionView``` 类来构建 ```Apple Music``` 目录，例如从零开始的外观。 标头，水平和垂直滚动，圆形图像，因此，基本上，构建强大的用户界面所需的几乎所有内容。 🤘🏻

</br>

# **如何使用Xcode中的Interface Builder（IB）创建 UICollectionView ？**

> **```提示:```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要使用 ```IB``` ！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你仍然想使用 ```IB``` ，这是绝对入门的真正快速教程：

![IB](http://q8wtfza4q.bkt.clouddn.com/ug-stp2.png "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建第一个基于 ```UICollectionView``` 的屏幕的主要步骤如下：

+ 将 ```UICollectionView``` 对象拖到你的视图控制器
+ 在集合视图上设置适当的约束
+ 设置数据源和集合视图的委托
+ 在控制器内部对单元布局进行原型设计
+ 在单元格内的视图中添加约束
+ 设置原型单元格类和重用标识符
+ 做一些编码：

</br>

``` Swift
import UIKit

class MyCell: UICollectionViewCell {
    @IBOutlet weak var textLabel: UILabel!
}

class ViewController: UIViewController {

    @IBOutlet weak var collectionView: UICollectionView!

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()

        if let flowLayout = self.collectionView.collectionViewLayout as? UICollectionViewFlowLayout {
            flowLayout.itemSize = CGSize(width: self.collectionView.bounds.width, height: 120)
        }
    }
}

extension ViewController: UICollectionViewDataSource {

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 10
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "MyCell", for: indexPath) as! MyCell
        cell.textLabel.text = String(indexPath.row + 1)
        return cell
    }
}

extension ViewController: UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        print(indexPath.item + 1)
    }
}
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，数据源将提供有关如何填充集合视图的所有必需数据，并且委托将处理用户事件，例如在单元格上轻按。 你应该对数据源和委托方法有清楚的了解，因此请稍候片刻。 ⌨️

</br>

# **如何在 ```Swift 5``` 中使用代码设置创建 ```UICollectionView```?**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能已经注意到，单元格是集合视图的核心组件。 它们是从可重用的视图派生的，这意味着，如果你有1000个元素的列表，则不会为每个元素创建一千个单元格，而只有少数几个可以填充屏幕大小，并且当你向下滚动列表时 这些项目将被重复使用以显示你的元素。 这仅仅是出于内存方面的考虑，因此与 ```UIScrollView``` 不同， ```UICollectionView``` （和 ```UITableView``` ）类是一个非常聪明且高效的类，但这也是每次显示之前都必须准备（重置内容）单元格的原因。 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初始化也由系统处理，但是值得一提的是，如果使用 ```Interface Builder``` ，则应该在 ```awakeFromNib``` 方法内进行自定义，但是如果使用代码，则 ```init（frame :)``` 是你的地方。

``` Swift
import UIKit

class MyCell: UICollectionViewCell {

    weak var textLabel: UILabel!

    override init(frame: CGRect) {
        super.init(frame: frame)

        let textLabel = UILabel(frame: .zero)
        textLabel.translatesAutoresizingMaskIntoConstraints = false
        self.contentView.addSubview(textLabel)
        NSLayoutConstraint.activate([
            textLabel.topAnchor.constraint(equalTo: self.contentView.topAnchor),
            textLabel.bottomAnchor.constraint(equalTo: self.contentView.bottomAnchor),
            textLabel.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor),
            textLabel.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor),
        ])
        self.textLabel = textLabel

        self.contentView.backgroundColor = .lightGray
        self.textLabel.textAlignment = .center
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        fatalError("Interface Builder is not supported!")
    }

    override func awakeFromNib() {
        super.awakeFromNib()

        fatalError("Interface Builder is not supported!")
    }

    override func prepareForReuse() {
        super.prepareForReuse()

        self.textLabel.text = nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来，我们必须实现负责管理集合视图的视图控制器，因为我们没有使用 ```IB``` ，所以必须在 ```loadView``` 方法内部使用自动布局锚点（如单元格中的 ```textLabel``` ）手动创建它。 在视图层次结构准备就绪后，我们还设置了数据源并委托并注册了我们的单元格类以供进一步重用。 请注意，如果你使用 ```IB``` ，则此操作由系统自动完成，但是如果你喜欢代码，则必须通过调用适当的注册方法来完成。 你可以注册 ```nibs``` 和 ```classes``` 。

``` Swift
import UIKit

class ViewController: UIViewController {

    weak var collectionView: UICollectionView!

    override func loadView() {
        super.loadView()

        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: self.view.topAnchor),
            collectionView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor),
            collectionView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor),
        ])
        self.collectionView = collectionView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.collectionView.backgroundColor = .white
        self.collectionView.dataSource = self
        self.collectionView.delegate = self

        self.collectionView.register(MyCell.self, forCellWithReuseIdentifier: "MyCell")
    }
}

extension ViewController: UICollectionViewDataSource {

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 10
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "MyCell", for: indexPath) as! MyCell
        cell.textLabel.text = String(indexPath.row + 1)
        return cell
    }
}

extension ViewController: UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        print(indexPath.row + 1)
    }
}

extension ViewController: UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {

        return CGSize(width: collectionView.bounds.size.width - 16, height: 120)
    }
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 8
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        return 0
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets.init(top: 8, left: 8, bottom: 8, right: 8)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次，你应该注意流布局委托方法。 你可以使用这些方法为布局系统提供支持。 流布局将基于这些数字和大小显示所有单元格。  ```sizeForItemAt``` 负责单元格的大小，```minimumInteritemSpacingForSectionAt``` 是水平填充，```minimumLineSpacingForSectionAt``` 是垂直填充，```insetForSectionAt``` 是集合视图部分的边距。

</br>

# **section headers and footers**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在本节中，我将同时使用 ```storyboards```，```nibs``` 和一些 ```Swift``` 代码。 由于某些原因，这是我通常的方法。 虽然我很喜欢用代码进行约束，但大多数人更喜欢视觉编辑器，因此所有单元格都在笔尖内部创建。 为什么是笔尖？ 因为如果你有多个集合视图，这几乎是在它们之间共享单元格的唯一好方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以像创建 ```section headers``` 一样完全地创建 ```section footers``` ，因此这就是我这次只关注 ```section headers``` 的原因，因为从字面上看，你只需要更改一个字即可使用 ```section footers``` 。 ⚽️

![footers](http://q8wtfza4q.bkt.clouddn.com/ug-stp3.png "")


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你只需要创建两个 ```xib``` 文件，一个用于单元格，一个用于头文件。 请注意，你可以使用完全相同的集合视图单元格来在 ```section``` 标题中显示内容，但这是一个演示，因此让我们处理两个不同的项目。 你甚至不必从 ```IB``` 设置重用标识符，因为我们必须在源代码中注册我们的可重用视图，因此只需设置单元类并连接你的 ```outlets``` 即可。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单元格的注册和 ```section headers and footers``` 的注册略有不同。

``` Swift
let cellNib = UINib(nibName: "Cell", bundle: nil)
self.collectionView.register(cellNib, forCellWithReuseIdentifier: "Cell")

let sectionNib = UINib(nibName: "Section", bundle: nil)
self.collectionView.register(sectionNib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: "Section")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实现 ```section header``` 的数据源如下所示。

``` Swift
func collectionView(_ collectionView: UICollectionView,
                        viewForSupplementaryElementOfKind kind: String,
                        at indexPath: IndexPath) -> UICollectionReusableView {

    guard kind == UICollectionView.elementKindSectionHeader else {
        return UICollectionReusableView()
    }
    let view = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: "Section", for: indexPath) as! Section

    view.textLabel.text = String(indexPath.section + 1)
    return view
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供流布局委托的大小也非常简单，但是有时我并没有得到 ```Apple``` 的命名约定。 一旦必须切换一种类型，而其他时候则有针对特定类型的确切方法。 🤷‍♂️

``` Swift
func collectionView(_ collectionView: UICollectionView,
                    layout collectionViewLayout: UICollectionViewLayout,
                    referenceSizeForHeaderInSection section: Int) -> CGSize {

    return CGSize(width: collectionView.bounds.size.width, height: 64)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 ```iOS9``` 开始，可以将 ```section headers and footers``` 固定在集合视图可见范围的顶部或底部。

``` Swift
if let flowLayout = self.collectionView.collectionViewLayout as? UICollectionViewFlowLayout {
    flowLayout.sectionHeadersPinToVisibleBounds = true
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是这样，现在你知道了如何使用集合视图构建基本布局。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;复杂的情况怎么样，例如在同一集合视图中使用多种单元格呢？ 索引路径会使事情变得很混乱，所以这就是为什么我基于一种技术来重新发明更好的方法，该技术如何使用 ```Apple``` 在 ```WWDC 2014``` 上展示的 [**```集合视图来构建高级用户界面```**](https://developer.apple.com/videos/wwdc2014 "") 。

</br>

# **基于 ```CollectionView``` 的 ```UI Framework```**

> CollectionView + ViewModel pattern = ❤️ .

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我将快速解释这些组件，然后，你将学习如何使用它们来构建起初我所谈论的 ```Apple``` 音乐风格的布局。 🎶

## ***网格系统***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集合视图的第一个问题是大小计算。你必须提供集合视图中每个单元的大小（宽度和高度）。

+ 如果在集合视图中所有内容都具有固定的大小，则只需在流布局本身上设置大小属性
+ 如果你需要每个项目的动态尺寸，则可以实施流布局委托。 ```UICollectionViewDelegateFlowLayout```（为什么在名称中间使用委托词？？？）并返回布局系统的确切大小
+ 如果你需要更多控制权，则可以创建一个从 ```CollectionView（Flow）Layout``` 派生的新布局子类，并在那里进行所有尺寸计算

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很好，但是你仍然必须弄乱索引路径，特征集合，框架等，以使简单的2、4，n列布局适用于所有设备。这就是为什么我创建了一个非常基本的网格系统进行尺寸计算的原因。使用我的网格类，你可以设置列数并获取x列数的大小，就像在基于 ```Web``` 的 ```CSS``` 网格系统中一样。 🕸

## ***单元格重用***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单元格的注册和重用应该并且可以以类型安全的方式自动化。 你只想使用单元，而根本不关心重用标识符和单元注册。 我做了一些辅助方法，以使进步更加愉快。 重用标识符是从单元格类的名称派生的，因此你不必担心。 大多数开发人员都使用这种做法。

## ***View model***

> **```view model = cell (view) + data (model)```**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用实际数据填充“模板”单元应该是视图模型的任务。 这就是 ```MVVM``` 发挥作用的地方。 我做了一个通用的基本视图模型类，应该将其子类化。 借助协议，你可以在单个集合视图中使用各种单元，而不必担心行和节的计算，并且你可以专注于一项简单的任务：将视图与模型联系起来。 😛

## ***Section***

> **```section = header + footer + cells```**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我要强调的是，你不想弄乱索引路径，只想将数据放在一起就可以了。 过去，我对“不必要的索引路径计算”进行了充分的努力，因此，我将 ```section``` 对象作为一个简单的容器来包装标题，页脚和该部分中的所有项目。 结果？ 通用数据源类，可以与多个单元格一起使用，而无需任何行或节索引计算。 👏👏👏

## ***数据源***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，为了使我上面提到的所有事情都能起作用，我需要实现集合视图委托，数据源和流布局委托方法。 这就是我的源代码类的诞生。 一切都在这里实现，我正在使用各部分，通过视图模型对网格系统进行建模以建立集合视图。 但是，从理论上讲，足够了，让我们在实践中进行观察。 👓

</br>

# **CollectionView 框架创建示例**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如何使任何列表或网格布局轻松自如？ 好吧，作为第一步，只需将我的 ```CollectionView``` 框架添加为依赖项。 它已经支持```Xcode 11``` ，因此你可以直接从文件菜单使用 ```Swift``` 软件包管理器来集成此软件包。

> **```提示：```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只需在 ```AppDelegate``` 文件中添加 ```@_exported import CollectionView``` 行，那么你不必担心逐个文件导入框架。

## ***创建 Cell***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此步骤与常规设置相同，除了你的单元必须是我的 ```Cell``` 类的子类。 添加你自己的单元并像往常一样执行所有操作。

``` Swift
import UIKit

class AlbumCell: Cell {

    @IBOutlet weak var textLabel: UILabel!
    @IBOutlet weak var detailTextLabel: UILabel!
    @IBOutlet weak var imageView: UIImageView!

    override func awakeFromNib() {
        super.awakeFromNib()

        self.textLabel.font = UIFont.systemFont(ofSize: 12, weight: .bold)
        self.textLabel.textColor = .black

        self.detailTextLabel.font = UIFont.systemFont(ofSize: 12, weight: .bold)
        self.detailTextLabel.textColor = .darkGray

        self.imageView.layer.cornerRadius = 8
        self.imageView.layer.masksToBounds = true
    }

    override func reset() {
        super.reset()

        self.textLabel.text = nil
        self.detailTextLabel.text = nil
        self.imageView.image = nil
    }
}
```

## ***创建 Model***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只需选择一个模型对象。 可以是任何东西，但是我的方法是使用 ```Model``` 后缀创建新的结构或类。 这样，我知道模型正在引用可重用组件文件夹中的集合视图模型。

``` Swift
import Foundation

struct AlbumModel {
    let artist: String
    let name: String
    let image: String
}
```

## ***创建 ViewModel***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，不用在委托内部或在某些地方的 ```configure``` 方法中配置单元格，而是为单元格和将通过视图表示的数据模型创建一个真实的视图模型。

``` Swift
import UIKit

class AlbumViewModel: ViewModel<AlbumCell, AlbumModel> {

    override func updateView() {
        self.view?.textLabel.text = self.model.artist
        self.view?.detailTextLabel.text = self.model.name
        self.view?.imageView.image = UIImage(named: self.model.image)
    }

    override func size(grid: Grid) -> CGSize {
        if
            (self.collectionView.traitCollection.userInterfaceIdiom == .phone &&
             self.collectionView.traitCollection.verticalSizeClass == .compact) ||
            self.collectionView?.traitCollection.userInterfaceIdiom == .pad
        {
            return grid.size(for: self.collectionView, ratio: 1.2, items: grid.columns / 4, gaps: grid.columns - 1)
        }
        if grid.columns == 1 {
            return grid.size(for: self.collectionView, ratio: 1.1)
        }
        return grid.size(for: self.collectionView, ratio: 1.2, items: grid.columns / 2, gaps: grid.columns - 1)
    }

}
```

## ***设置数据源***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，使用你的真实数据并使用视图模型填充你的集合视图。

``` Swift
let grid = Grid(columns: 1, margin: UIEdgeInsets(all: 8))
self.collectionView.source = .init(grid: grid, [
    [
        HeaderViewModel(.init(title: "Albums"))
        AlbumViewModel(self.album)
    ],
])
self.collectionView.reloadData()
```
 
## 🍺🤘🏻🎸

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;恭喜，你已完成第一个 ```collection``` 视图。 仅需几行代码，你便拥有了 ```ROCK SOLID ```代码，可在大多数情况下为你提供帮助！ 😎

![collection](http://q8wtfza4q.bkt.clouddn.com/ug-stp4.png "")

</br>

# **垂直滚动内的水平滚动**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们制作一个包含集合视图的单元格并使用与上述相同的方法怎么办？ 包含 ```collectionview``` 的 ```collection``` 视图... ```UICollectionViewception``` !!! 😂

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完全有可能并且确实很容易做到，为视图模型提供数据的将是一个集合视图源对象，你已经完成了。 示例应用程序中还包括轻松，神奇和超好实现的内容。

</br>

# **带有圆角图片的 Section**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多个部分？这也是小菜一碟，如果你阅读了我先前有关 [**```设置圆形Collection视图单元```**](http://www.xuebaonline.com/UICollectionView%20Cells%EF%BC%9A%E5%9C%86%E5%BD%A2%E5%9B%BE%E5%83%8F%E3%80%81%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC/ "") 的文章，你将知道该如何做，但是请从gitlab中查看源代码，并亲自进行操作。

</br>

# **Callbacks && Actions**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户事件可以非常容易地处理，因为视图模型可以具有委托或回调块，这仅取决于你喜欢哪一个。 该示例包含一个 ```onSelect``` 处理程序，该处理程序超级好并且内置于框架中。 😎

</br>

# **重新计算动态单元大小**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我也有一个关于[**``` UICollection视图自动调整大小单元格```**](http://www.xuebaonline.com/Swift%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E7%9A%84%E8%87%AA%E9%80%82%E5%BA%94%E5%8D%95%E5%85%83%E6%A0%BC/ "") 的文章。 在制作完网格系统并开始使用视图模型之后，我自己可以轻松计算出单元格的高度，大约需要两行额外的代码。 我相信这是值得的，因为就自动旋转而言，自定尺寸的单元格有点麻烦。

</br>

# **支持旋转，自适应**

不必担心太多，你可以根据需要简单地更改网格或检查视图模型中的特征集合。 我想说几乎所有事情都可以立即完成。 那就是它的美，可以随意做任何你想做的事情，并以自己喜欢的方式使用它。 📦


</br>

# **如果我告诉你...又一件事：SwiftUI**

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你喜欢这种方法很酷，但是如果我告诉你还有更多方法呢？ 你是否想在所有地方都使用相同的模式？ 我的意思是在 ```iOS``` ，```tvOS```，```macOS```甚至 ```watchOS``` 上。  我已经在 ```CoreKit``` 框架中创建了所有内容。 还支持 ```UITableViews``` ， ```WKInterfaceTables``` 。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我真的相信苹果今年会采用类似的方式处理下一代```UIKit / AppKit / UXKit```框架（当然是用```Swift```编写的）。 我不是在谈论视图模型模式，而是在每个平台上思考相同的```API```。 


