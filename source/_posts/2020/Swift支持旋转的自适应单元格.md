---
title: Swift支持旋转的自适应单元格
description: Swift支持旋转的自适应单元格
permalink: Swift支持旋转的自适应单元格
copyright: ture
date: 2020-04-27 10:12:39
keywords: iOS,Swift,自动化布局,用户体验, UITableView,UITableViewCell,自适应
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [自适应布局]
    - [UITableView]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如何在Swift中为表格视图和集合视图制作自定义大小的单元格，以支持方向更改和动态字体类型。

</br>

# **UITableView**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，让我们从 ```iOS``` 的标准单视图模板开始。 命名项目，然后直接转到 ```Main.storyboard``` 文件。 选择你的 ```ViewController``` ，将其删除并创建一个新的 ```UITableViewController``` ```scene``` 。

<!-- more -->


![Main.storyboard](https://cdn.xuebaonline.com/sc-stp1.jpg "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将表视图控制器场景设置为初始视图控制器，并使用相应的类创建 ```TableViewController.swift``` 文件。

``` Swift
import UIKit

class TableViewController: UITableViewController {

    var dataSource: [String] = [
        "Donec id elit non mi porta gravida at eget metus.",
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
        "Maecenas faucibus mollis interdum.",
        "Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.",
    ]
}

extension TableViewController {

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.dataSource.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as! TableViewCell

        cell.dynamicLabel?.text = self.dataSource[indexPath.row]
        cell.dynamicLabel.font  = UIFont.preferredFont(forTextStyle: .body)

        return cell
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该设置实际上是自我描述的。 你已经有了一个字符串数组作为数据源，以及 ```UITableViewDataSource``` 协议的必需实现。

唯一缺少的是 ```TableViewCell``` 类:

``` Swift
class TableViewCell: UITableViewCell {

    @IBOutlet weak var dynamicLabel: UILabel!
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，创建类本身，然后使用界面构建器选择表视图控制器场景并将标签拖到原型单元中。 将原型单元格的类设置为 ```TableViewCell``` 。 可重复使用的标识符可以简单地是 ```“ Cell” ```。 将 ```dynamicLabel``` 插座连接到视图。 将标签的上，下，前，尾约束赋予父视图，默认值为8。选择标签，将字体设置为主体样式，并将 ```lines``` 属性设置为零。 就是这么简单。 😂

![TableViewCell](https://cdn.xuebaonline.com/sc-stp2.jpg "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在你已经准备好了。 你只需要在表格视图上设置估计的行高。 在 ```TableViewController``` 类内部，更改 ```viewDidLoad``` 方法，如下所示：

``` Swift
override func viewDidLoad() {
    super.viewDidLoad()

    self.tableView.estimatedRowHeight = 44
    self.tableView.rowHeight = UITableView.automaticDimension
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```EstimateRowHeight``` 属性将告诉系统 ```tableview``` 应该尝试动态计算每个单元格的高度。 你还应该将 ```rowHeight``` 属性更改为自动尺寸，如果不这样做，则系统将使用静态单元格高度-你可以在单元格上设置的界面生成器高度。 现在构建并运行。 你将拥有一个带有自定义尺寸单元格的绝佳表格视图。 你甚至可以旋转设备，它将在两个方向上都能正常工作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你在 ```iOS``` 辅助功能设置下更改了文字大小，表格视图将反映这些更改，因此它将使布局适应新值。 表格视图的字体大小将使 ```comcorint``` 更改为滑块值。 你可能想要订阅 ```UIContentSizeCategory.didChangeNotification``` 以便检测大小更改并重新加载 ```UI``` 。 此功能称为动态类型。

``` Swift
NotificationCenter.default.addObserver(self.tableView, selector: #selector(UITableView.reloadData), name: UIContentSizeCategory.didChangeNotification,, object: nil)
```

</br>

# **UICollectionView**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此，我们完成了简单的部分。 现在，让我们尝试通过集合视图实现相同的功能。 ```UICollectionView``` 是一个通用类，旨在创建自定义布局，因为这种通用行为，你将无法从界面生成器创建自定义单元格。 你必须通过代码来完成。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在开始之前，我们仍然可以使用 ```IB``` 。 创建一个新的集合视图控制器场景，然后将一个推键从上一个表视图单元格拖到这个新的控制器上。 最后，将整个内容嵌入导航控制器中。

![UICollectionView](https://cdn.xuebaonline.com/sc-stp3.jpg "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该单元将与我们用于表视图的单元完全相同，但是它是 ```UICollectionViewCell``` 的子类，并且我们将直接从代码构造布局。

``` Swift
class CollectionViewCell: UICollectionViewCell {

    weak var dynamicLabel: UILabel!

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override init(frame: CGRect) {
        super.init(frame: frame)

        self.translatesAutoresizingMaskIntoConstraints = false

        let label = UILabel(frame: self.bounds)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.preferredFont(forTextStyle: .body)
        label.backgroundColor = UIColor.darkGray
        label.numberOfLines = 0
        label.preferredMaxLayoutWidth = frame.size.width

        self.contentView.addSubview(label)
        self.dynamicLabel = label

        NSLayoutConstraint.activate([
            self.contentView.topAnchor.constraint(equalTo: self.dynamicLabel.topAnchor),
            self.contentView.bottomAnchor.constraint(equalTo: self.dynamicLabel.bottomAnchor),
            self.contentView.leadingAnchor.constraint(equalTo: self.dynamicLabel.leadingAnchor),
            self.contentView.trailingAnchor.constraint(equalTo: self.dynamicLabel.trailingAnchor),
        ])
    }

    override func prepareForReuse() {
        super.prepareForReuse()

        self.dynamicLabel.font = UIFont.preferredFont(forTextStyle: .body)
    }

    func setPreferred(width: CGFloat) {
        self.dynamicLabel.preferredMaxLayoutWidth = width
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们为单元格提供了一个子类，现在让我们创建视图控制器类。 在 ```viewDidLoad``` 方法内部，你必须在集合视图上设置 ```EstimatedItemSize``` 属性。 如果输入的尺寸错误，自动旋转将无法正常工作。

``` Swift
override func viewDidLoad() {
    super.viewDidLoad()

    self.navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .refresh, target: self, action: #selector(self.toggleColumns))

    self.collectionView?.register(CollectionViewCell.self, forCellWithReuseIdentifier: "Cell")

    if let flowLayout = self.collectionView?.collectionViewLayout as? UICollectionViewFlowLayout {
        flowLayout.itemSize = CGSize(width: 64, height: 64)
        flowLayout.minimumInteritemSpacing = 10
        flowLayout.minimumLineSpacing = 20
        flowLayout.sectionInset = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
        flowLayout.estimatedItemSize = CGSize(width: self.preferredWith(forSize: self.view.bounds.size), height: 64)
    }

    self.collectionView?.reloadData()

    NotificationCenter.default.addObserver(self.collectionView!, selector: #selector(UICollectionView.reloadData), name: UIContentSizeCategory.didChangeNotification, object: nil)
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在旋转方法内部，必须使集合视图布局无效，并在发生过渡时重新计算可见的单元格大小。

``` Swift
override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
    super.traitCollectionDidChange(previousTraitCollection)

    guard
        let previousTraitCollection = previousTraitCollection,
        self.traitCollection.verticalSizeClass != previousTraitCollection.verticalSizeClass ||
        self.traitCollection.horizontalSizeClass != previousTraitCollection.horizontalSizeClass
    else {
        return
    }

    self.collectionView?.collectionViewLayout.invalidateLayout()
    self.collectionView?.reloadData()
}

override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
    super.viewWillTransition(to: size, with: coordinator)

    self.collectionView?.collectionViewLayout.invalidateLayout()
    self.estimateVisibleCellSizes(to: size)

    coordinator.animate(alongsideTransition: { context in

    }, completion: { context in
        self.collectionView?.collectionViewLayout.invalidateLayout()
    })
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有两种辅助方法可以计算估计的项目大小的首选宽度并重新计算可见的单元格大小。

``` Swift
func preferredWith(forSize size: CGSize) -> CGFloat {
    var columnFactor: CGFloat = 1.0
    if self.twoColumns {
        columnFactor = 2.0
    }
    return (size.width - 30) / columnFactor
}

func estimateVisibleCellSizes(to size: CGSize) {
    guard let collectionView = self.collectionView else {
        return
    }

    if let flowLayout = self.collectionView?.collectionViewLayout as? UICollectionViewFlowLayout {
        flowLayout.estimatedItemSize = CGSize(width: self.preferredWith(forSize: size), height: 64)
    }

    collectionView.visibleCells.forEach({ cell in
        if let cell = cell as? CollectionViewCell {
            cell.setPreferred(width: self.preferredWith(forSize: size))
        }
    })
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果进行适当的计算，甚至可以包含多列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我只有一件事无法解决，但这只是一条日志消息。 如果向后旋转设备，则某些单元格将不可见，布局引擎将无法对这些单元格进行快照。

***快照尚未渲染的视图将导致快照为空。 确保在快照之前或屏幕更新后快照至少已渲染一次视图。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你可以通过某种方式使此消息消失 ```OS_ACTIVITY_MODE = disable``` 。 😉

