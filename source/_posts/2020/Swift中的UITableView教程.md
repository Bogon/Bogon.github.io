---
title: Swift中的UITableView教程
description: Swift中的UITableView教程
permalink: Swift中的UITableView教程
copyright: ture
date: 2020-04-28 11:46:56
keywords: iOS,Swift,Xib,用户体验,UITableView
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [UITableView]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [UITableView]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本指南是供初学者通过 ```Swift``` 中的自动布局以编程方式学习 ```UITableView``` 类的基础的。

</br>

# **如何以代码方式创建表视图？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们直接进入编码部分，但首先：启动 ```Xcode``` ，创建一个新的 ```iOS``` 单视图应用程序项目，像往常一样输入该项目的名称和详细信息，使用 ```Swift``` ，最后立即打开 ```ViewController.swift``` 文件。 现在抓住键盘！ ⌨️

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本教程中，我不会使用 ```Interface Builder``` ，那么我们如何以代码方式创建视图？ 有一个称为 ```loadView``` 的方法，你应该在其中将自定义视图添加到视图层次结构中。 你可以选择+单击Xcode中的方法名称并阅读有关 ```loadView``` 方法的讨论，但让我总结一下整个过程。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将使用弱属性来保存对表格视图的引用。 接下来，我们重写 ```loadView``` 方法并调用 ```super``` ，以使用视图对象（如果有控制器的话，在 ```nib or a storyboard``` 文件中）加载控制器的 ```self.view``` 属性。 之后，我们将全新的视图分配给本地属性，关闭系统提供的布局，然后将表视图插入到视图层次结构中。 最后，我们使用锚创建一些实际的约束，并保存指向弱属性的指针。 简单！ 🤪

``` Swift
class ViewController: UIViewController {

    weak var tableView: UITableView!

    override func loadView() {
        super.loadView()

        let tableView = UITableView(frame: .zero, style: .plain)
        tableView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(tableView)
        NSLayoutConstraint.activate([
        self.view.safeAreaLayoutGuide.topAnchor.constraint(equalTo: tableView.topAnchor),
            self.view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: tableView.bottomAnchor),
            self.view.leadingAnchor.constraint(equalTo: tableView.leadingAnchor),
            self.view.trailingAnchor.constraint(equalTo: tableView.trailingAnchor),
        ])
        self.tableView = tableView
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;始终使用自动布局锚来指定视图约束，如果你不知道如何使用它们，请查看 [***```《Swift使用布局锚点添加约束》```***](http://www.xuebaonline.com/Swift%E4%BD%BF%E7%94%A8%E5%B8%83%E5%B1%80%E9%94%9A%E7%82%B9%E6%B7%BB%E5%8A%A0%E7%BA%A6%E6%9D%9F/ "")，学习此 ```API``` 仅需15分钟，并且你不会后悔。 对于任何 ```iOS``` 开发者来说，这都是一个非常有用的工具！ 😉

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可能会问：我应该使用弱属性还是强属性作为视图引用？ 我会说，在大多数情况下，如果你不压制 ```self.view``` ，则应使用弱项！ 视图层次结构将通过强大的参考来保存你的自定义视图，因此不需要愚蠢的保留周期和内存泄漏。 相信我！ 🤥

</br>

# **UITableView DataSource**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好的，我们有一个空的表格视图，让我们显示一些单元格！ 为了用真实数据填充表格视图，我们必须遵守 ```UITableViewDataSource``` 协议。 通过简单的委托模式，我们可以为 ```UITableView``` 类提供各种信息，因此它将知道需要多少节和行，应该为每行显示哪种单元格以及更多的小细节。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一件事是，```UITableView``` 是一个非常有效的类。 它会重用当前屏幕上未显示的所有单元格，因此，如果你需要处理数百或数千个项目，它将消耗比 ```UIScrollView``` 更少的内存。 为了支持这种行为，我们必须使用重用标识符注册我们的单元格类，因此基础系统将知道特定位置需要哪种单元格。 ⚙️

``` Swift
class ViewController: UIViewController {

    var items: [String] = [
        "👽", "🐱", "🐔", "🐶", "🦊", "🐵", "🐼", "🐷", "💩", "🐰",
        "🤖", "🦄", "🐻", "🐲", "🦁", "💀", "🐨", "🐯", "👻", "🦖",
    ]

    override func viewDidLoad() {
        super.viewDidLoad()

        self.tableView.register(UITableViewCell.self, forCellReuseIdentifier: "UITableViewCell")

        self.tableView.dataSource = self
    }
}

extension ViewController: UITableViewDataSource {

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.items.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "UITableViewCell", for: indexPath)
        let item = self.items[indexPath.item]
        cell.textLabel?.text = item
        return cell
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在我们的视图控制器文件中添加几行代码后，表格视图现在可以显示一个漂亮的表情符号列表！ 我们正在使用 ```UIKit``` 的内置 ```UITableViewCell``` 类，如果你很好地使用 ```“iOS-system-like”``` 的单元格设计，那么它将非常方便。 通过告诉我们的节中有多少项（目前只有一个节），我们还符合数据源协议，并在 ```indexPath``` 委托方法的行中为行配置了我们的单元格。 😎

</br>

# **自定义UItableViewCell**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UITableViewCell``` 可以提供一些基本元素来显示数据（标题，详细信息，不同样式的图像），但是通常你需要自定义设计的单元格。 这是自定义单元格子类的基本模板，在代码之后，我将解释所有方法。

``` Swift
class MyCell: UITableViewCell {

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    func initialize() {

    }
    /*
    override func awakeFromNib() {
        super.awakeFromNib()

    }
    */
    override func prepareForReuse() {
        super.prepareForReuse()

    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```如果要以编程方式使用默认的UITableViewCell``` ，但使用不同的样式（在初始化单元格后没有设置 ```cellStyle``` 的选项），则 ```init（style：reuseIdentifier```） 方法是重写单元格样式属性的好地方。 例如，如果你需要一个 ```.value1``` 样式的单元格，只需将参数直接传递给超级调用即可。 这样，你可以使用 ```4``` 种预定义的单元格样式。

> ***``提示:``***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还必须实现 ```init（coder :)```，所以你应该创建一个通用的 ```initialize（）``` 函数，在其中你可以在视图层次结构中添加自定义视图，就像我们在上面的 ```loadView``` 方法中所做的那样。 如果使用的是 ```xib``` 文件和 ```IB``` ，则可以使用 ```awakeFromNib``` 方法通过标准 ```@IBOutlet``` 属性为视图添加额外的样式（或向层次结构中添加额外的视图）。 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要讨论的最后一个方法是 ```prepareForReuse``` 。 正如我之前提到的，单元格被重用，因此，如果要重置某些属性（例如单元格的背景），可以在此处进行操作。 在单元将被重用之前将调用此方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们创建两个新的单元格子类。

``` Swift
class DetailCell: UITableViewCell {

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .subtitle, reuseIdentifier: reuseIdentifier)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    func initialize() {
        // nothing to do here :)
    }

    override func prepareForReuse() {
        super.prepareForReuse()

        self.textLabel?.text = nil
        self.detailTextLabel?.text = nil
        self.imageView?.image = nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的自定义单元格将具有大的图像背景，并在视图的中心添加一个带有自定义大小的系统字体的标题标签。 另外，我已将 S```wift logo``` 作为 ```asset``` 添加到项目中，因此我们可以得到一个不错的演示图像。 🖼

``` Swift
class CustomCell: UITableViewCell {

    weak var coverView: UIImageView!
    weak var titleLabel: UILabel!

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    func initialize() {
        let coverView = UIImageView(frame: .zero)
        coverView.translatesAutoresizingMaskIntoConstraints = false
        self.contentView.addSubview(coverView)
        self.coverView = coverView

        let titleLabel = UILabel(frame: .zero)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        self.contentView.addSubview(titleLabel)
        self.titleLabel = titleLabel

        NSLayoutConstraint.activate([
            self.contentView.topAnchor.constraint(equalTo: self.coverView.topAnchor),
            self.contentView.bottomAnchor.constraint(equalTo: self.coverView.bottomAnchor),
            self.contentView.leadingAnchor.constraint(equalTo: self.coverView.leadingAnchor),
            self.contentView.trailingAnchor.constraint(equalTo: self.coverView.trailingAnchor),

            self.contentView.centerXAnchor.constraint(equalTo: self.titleLabel.centerXAnchor),
            self.contentView.centerYAnchor.constraint(equalTo: self.titleLabel.centerYAnchor),
        ])

        self.titleLabel.font = UIFont.systemFont(ofSize: 64)
    }

    override func prepareForReuse() {
        super.prepareForReuse()

        self.coverView.image = nil
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是这样，让我们开始使用这些新单元格。 我什至会告诉你如何为给定单元格设置自定义高度，以及如何正确处理单元格选择，但是首先我们需要了解另一个委托协议。 🤝

</br>

# **UITableViewDelegate 使用**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UITableViewDelegate``` 负责很多事情，但是现在，我们将只讨论一些有趣的方面，例如如何处理单元格选择以及为表格中的每个项目提供自定义单元格高度。 示例代码:

``` Swift
class ViewController: UIViewController {

    override func viewDidLoad() {
            super.viewDidLoad()

            self.tableView.register(UITableViewCell.self, forCellReuseIdentifier: "UITableViewCell")
            self.tableView.register(DetailCell.self, forCellReuseIdentifier: "DetailCell")
            self.tableView.register(CustomCell.self, forCellReuseIdentifier: "CustomCell")

            self.tableView.dataSource = self
            self.tableView.delegate = self
    }
}
extension ViewController: UITableViewDataSource {

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        let item = self.items[indexPath.item]
        cell.titleLabel.text = item
        cell.coverView.image = UIImage(named: "Swift")
        return cell
    }
}

extension ViewController: UITableViewDelegate {

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 128
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let item = self.items[indexPath.item]

        let alertController = UIAlertController(title: item, message: "is in da house!", preferredStyle: .alert)
        let action = UIAlertAction(title: "Ok", style: .default) { _ in }
        alertController.addAction(action)
        self.present(alertController, animated: true, completion: nil)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，我正在 ```viewDidLoad``` 方法中注册全新的自定义单元格类。 我还更改了 ```cellForRowAt indexPath``` 方法中的代码，因此我们可以使用 ```CustomCell``` 类代替 ```UITableViewCells``` 。 不必担心强制转换，如果此时出现问题，你的应用程序应该崩溃。 🙃

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在这里使用两种委托方法。 在第一个中，我们必须返回一个数字，系统将使用该高度作为单元格。 如果要在每行中使用不同的单元格高度，则也可以通过检查 ```indexPath``` 属性或类似属性来实现。 第二个是选择的处理程序。 如果有人点击某个单元格，则将调用此方法，你可以执行一些操作。

</br>

# **带标题和页脚的 Section**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;表格视图中可能有多个部分，我不会赘述，因为它非常简单。 你只需要使用 ```indexPaths``` 即可获取/设置/返回每个节和单元格的正确数据。

``` Swift
import UIKit

class ViewController: UIViewController {

    weak var tableView: UITableView!

    var placeholderView = UIView(frame: .zero)
    var isPullingDown = false

    enum Style {
        case `default`
        case subtitle
        case custom
    }

    var style = Style.default

    var items: [String: [String]] = [
        "Originals": ["👽", "🐱", "🐔", "🐶", "🦊", "🐵", "🐼", "🐷", "💩", "🐰","🤖", "🦄"],
        "iOS 11.3": ["🐻", "🐲", "🦁", "💀"],
        "iOS 12": ["🐨", "🐯", "👻", "🦖"],
    ]

    override func loadView() {
        super.loadView()

        let tableView = UITableView(frame: .zero, style: .plain)
        tableView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(tableView)
        NSLayoutConstraint.activate([
            self.view.safeAreaLayoutGuide.topAnchor.constraint(equalTo: tableView.topAnchor),
            self.view.safeAreaLayoutGuide.bottomAnchor.constraint(equalTo: tableView.bottomAnchor),
            self.view.leadingAnchor.constraint(equalTo: tableView.leadingAnchor),
            self.view.trailingAnchor.constraint(equalTo: tableView.trailingAnchor),
        ])
        self.tableView = tableView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.tableView.register(UITableViewCell.self, forCellReuseIdentifier: "UITableViewCell")
        self.tableView.register(DetailCell.self, forCellReuseIdentifier: "DetailCell")
        self.tableView.register(CustomCell.self, forCellReuseIdentifier: "CustomCell")

        self.tableView.dataSource = self
        self.tableView.delegate = self
        self.tableView.separatorStyle = .singleLine
        self.tableView.separatorColor = .lightGray
        self.tableView.separatorInset = .zero

        self.navigationItem.rightBarButtonItem = .init(barButtonSystemItem: .refresh, target: self, action: #selector(self.toggleCells))
    }

    @objc func toggleCells() {

        switch self.style {
        case .default:
            self.style = .subtitle
        case .subtitle:
            self.style = .custom
        case .custom:
            self.style = .default
        }

        DispatchQueue.main.async {
            self.tableView.reloadData()
        }
    }

    // MARK: - helpers

    func key(for section: Int) -> String {
        let keys = Array(self.items.keys).sorted { first, last -> Bool in
            if first == "Originals" {
                return true
            }
            return first < last
        }
        let key = keys[section]
        return key
    }

    func items(in section: Int) -> [String] {
        let key = self.key(for: section)
        return self.items[key]!
    }

    func item(at indexPath: IndexPath) -> String {
        let items = self.items(in: indexPath.section)
        return items[indexPath.item]
    }
}

extension ViewController: UITableViewDataSource {

    func numberOfSections(in tableView: UITableView) -> Int {
        return self.items.keys.count
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.items(in: section).count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let item = self.item(at: indexPath)
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        cell.titleLabel.text = item
        cell.coverView.image = UIImage(named: "Swift")
        return cell
    }

    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return self.key(for: section)
    }

}

extension ViewController: UITableViewDelegate {

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 128
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)

        let item = self.item(at: indexPath)
        let alertController = UIAlertController(title: item, message: "is in da house!", preferredStyle: .alert)
        let action = UIAlertAction(title: "Ok", style: .default) { _ in }
        alertController.addAction(action)
        self.present(alertController, animated: true, completion: nil)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管上面的代码片段中添加了一个有趣的内容。 你可以为每个部分都有一个自定义标题，只需添加 ```titleForHeaderInSection``` 数据源方法即可。 是的，看起来像狗屎一样，但这与 ```UI / UX``` 无关。 😂

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，如果你对部分标题的布局不满意，可以创建一个自定义类并使用它来代替内置类。 这是执行自定义节标题视图的方法。 这是可重用视图的实现：

``` Swift
class HeaderView: UITableViewHeaderFooterView {

    weak var titleLabel: UILabel!

    override init(reuseIdentifier: String?) {
        super.init(reuseIdentifier: reuseIdentifier)

        self.initialize()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    func initialize() {
        let titleLabel = UILabel(frame: .zero)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        self.contentView.addSubview(titleLabel)
        self.titleLabel = titleLabel

        NSLayoutConstraint.activate([
            self.contentView.centerXAnchor.constraint(equalTo: self.titleLabel.centerXAnchor),
            self.contentView.centerYAnchor.constraint(equalTo: self.titleLabel.centerYAnchor),
        ])

        self.contentView.backgroundColor = .black
        self.titleLabel.font = UIFont.boldSystemFont(ofSize: 16)
        self.titleLabel.textAlignment = .center
        self.titleLabel.textColor = .white
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只剩下几件事要做，你必须注册标题视图，就像你为单元格所做的一样。 完全相同，只是页眉和页脚视图有一个单独的注册“池”。 最后，你必须实现两个其他但相对简单（和熟悉）的委托方法。

``` Swift
// This goes to viewDidLoad, but I don't want to embedd that much code... :)
// self.tableView.register(HeaderView.self, forHeaderFooterViewReuseIdentifier: "HeaderView")


extension ViewController: UITableViewDelegate {

    /* ... */

    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 32
    }

    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let view = tableView.dequeueReusableHeaderFooterView(withIdentifier: "HeaderView") as! HeaderView
        view.titleLabel.text = self.key(for: section)
        return view
    }
}
```

***页脚的工作原理与页眉完全相同，只需支持相应的数据源和委托方法即可。***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据行或节的索引或任何特定的业务需求，你甚至可以在同一张表视图中具有多个单元格。 我不会在这里进行演示，因为我有一个更好的解决方案，用于混合和重用 [***```CoreKit```***](https://gitlab.com/corekit/CoreKit "") 框架中的单元格。  🤓

</br>

# **Section titles & indexes**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好吧，如果你的大脑还没有融化，我将向你展示另外两个对于初学者来说可能很有趣的小东西。 第一个基于两种其他数据源方法，对于长列表而言，这是一个非常令人愉快的添加。 （我更喜欢搜索栏！）🤯

``` Swift
extension ViewController: UITableViewDataSource {
    /* ... */

    func sectionIndexTitles(for tableView: UITableView) -> [String]? {
        return ["1", "2", "3"]
    }

    func tableView(_ tableView: UITableView, sectionForSectionIndexTitle title: String, at index: Int) -> Int {
        return index
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在上面实现这些方法，则可以在表视图的右侧为各节提供一个小的索引视图，因此最终用户将能够在各节之间快速跳转。 就像在官方联系人应用程序中一样。 📕

</br>

# **Selection vs highlight**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你用手指按住单元格时，单元格高亮。 如果你从单元格中松开手指，则将选择该单元格。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不要过于复杂。 你只需在自定义单元格类中实现两个方法即可使所有工作正常进行。 我更喜欢立即取消选择我的单元格（如果某些数据选择器布局未使用它们）。 这是代码：

``` Swift
class CustomCell: UITableViewCell {

    /* ... */

    override func setSelected(_ selected: Bool, animated: Bool) {
        self.coverView.backgroundColor = selected ? .red : .clear
    }

    override func setHighlighted(_ highlighted: Bool, animated: Bool) {
        self.coverView.backgroundColor = highlighted ? .blue : .clear
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，这非常简单，但是大多数初学者都不知道该怎么做。 此外，他们通常会在重用逻辑发生之前忘记重置单元格，因此列表会不断弄乱单元格状态。 不必太担心这些问题，它们会消失，因为你将对 ```UITableView API``` 更有经验。