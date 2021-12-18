---
title: UICollectionView data source and delegates
description: UICollectionView data source and delegates
permalink: UICollectionView data source and delegates
copyright: ture
keywords: 'iOS,Swift,data source,用户体验, UICollectionView,UICollectionViewCell,delegates'
tags:
  - - iOS
  - - Swift
  - - UIKit
  - - UICollectionView
categories:
  - - iOS
  - - Swift
  - - UIKit
  - - UICollectionView
abbrlink: 7672
date: 2020-04-28 10:31:38
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这个快速的 ```UIKit``` 教程中，我将向你展示如何在不使用 ```Interface Builder``` 而是仅使用 ```Swift``` 的情况下创建简单的 ```UICollectionView``` 。

</br>

# **```UICollectionViewCell``` 纯代码实现**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要向单元格中添加视图，则应使用 ```init（frame :)``` 方法，并在那里设置视图层次结构。 而不是 ```awakeFromNib``` ，你也应该在 ```init``` 方法中设置视图的样式。 你可以在常规的 ```prepareForReuse``` 方法中重置所有内容。 如你所见，有时使用锚点值得完全抛弃 ```IB``` 。 🎉

<!-- more -->


``` Swift
class Cell: UICollectionViewCell {

    static var identifier: String = "Cell"

    weak var textLabel: UILabel!

    override init(frame: CGRect) {
        super.init(frame: frame)

        let textLabel = UILabel(frame: .zero)
        textLabel.translatesAutoresizingMaskIntoConstraints = false
        self.contentView.addSubview(textLabel)
        NSLayoutConstraint.activate([
            self.contentView.centerXAnchor.constraint(equalTo: textLabel.centerXAnchor),
            self.contentView.centerYAnchor.constraint(equalTo: textLabel.centerYAnchor),
        ])
        self.textLabel = textLabel
        self.reset()
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func prepareForReuse() {
        super.prepareForReuse()
        self.reset()
    }

    func reset() {
        self.textLabel.textAlignment = .center
    }
}
```

</br>

# **``UICollectionView`` 纯代码创建**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仅使用 ```Swift``` 代码创建集合视图控制器仅需要几行。 你可以实现 ```loadView``` 并在那里创建你的 ```UICollectionView``` 对象。 将其的弱引用存储在控制器内部，其余部分相同。

``` Swift
class ViewController: UIViewController {

    weak var collectionView: UICollectionView!

    var data: [Int] = Array(0..<10)

    override func loadView() {
        super.loadView()

        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            self.view.topAnchor.constraint(equalTo: collectionView.topAnchor),
            self.view.bottomAnchor.constraint(equalTo: collectionView.bottomAnchor),
            self.view.leadingAnchor.constraint(equalTo: collectionView.leadingAnchor),
            self.view.trailingAnchor.constraint(equalTo: collectionView.trailingAnchor),
        ])
        self.collectionView = collectionView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.collectionView.dataSource = self
        self.collectionView.delegate = self
        self.collectionView.register(Cell.self, forCellWithReuseIdentifier: Cell.identifier)
        self.collectionView.alwaysBounceVertical = true
        self.collectionView.backgroundColor = .white
    }
}

extension ViewController: UICollectionViewDataSource {

    func collectionView(_ collectionView: UICollectionView,
                        numberOfItemsInSection section: Int) -> Int {
        return self.data.count
    }

    func collectionView(_ collectionView: UICollectionView,
                        cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: Cell.identifier, for: indexPath) as! Cell
        let data = self.data[indexPath.item]
        cell.textLabel.text = String(data)
        return cell
    }
}

extension ViewController: UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {

    }
}

extension ViewController: UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.bounds.width, height: 44)
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0) //.zero
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        return 0
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 0
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那很简单。 ```Anchors``` 确实非常强大， ```Interface Builder``` 很有帮助，但是有时从代码创建视图只是更快。 选择是你的，但请不要担心对用户界面进行编码！ 😅