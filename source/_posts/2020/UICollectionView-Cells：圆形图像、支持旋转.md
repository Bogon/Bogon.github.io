---
title: UICollectionView Cells：圆形图像、支持旋转
permalink: UICollectionView Cells：圆形图像、支持旋转
copyright: ture
date: 2020-04-27 10:37:04
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何通过旋转支持为包装在 ```UICollectionView``` 单元格内的 ```UIImageView``` 项制作圆角。

</br>

# **UICollectionView 中的圆形单元格**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实现目标相对容易，但是如果你不知道后台发生了什么，那可能会比你最初想的要难。 因此，让我们创建一个新项目，添加带有 ```UICollectionViewController``` 的情节提要，将 ```UIImageView``` 拖动到单元格内，调整其大小，添加一些约束，设置单元格标识符。

![UICollectionViewController](http://q8wtfza4q.bkt.clouddn.com/uc-stp1.png "")

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它看起来应该像上面的图像。 对于我们的示例应用程序而言，没有什么特别的简单的 ```UI``` 。 现在搜索一些随机图像，将其添加到项目中，让我们进行一些实际的编码。 首先，我将向你展示单元子类内部的小技巧。

``` Swift
class Cell: UICollectionViewCell {

    @IBOutlet weak var imageView: UIImageView!

    override var bounds: CGRect {
        didSet {
            self.layoutIfNeeded()
        }
    }

    override func awakeFromNib() {
        super.awakeFromNib()

        self.imageView.layer.masksToBounds = true
    }

    override func layoutSubviews() {
        super.layoutSubviews()

        self.setCircularImageView()
    }

    func setCircularImageView() {
        self.imageView.layer.cornerRadius = CGFloat(roundf(Float(self.imageView.frame.size.width / 2.0)))
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你能看见它吗？ 是的，你应该重写 ```bounds``` 属性。 下一步，我们必须为控制器类编写一些用于收集视图的基本数据源，并为旋转方法提供适当的支持。 🤓

``` Swift
class ViewController: UICollectionViewController {

    override func collectionView(_ collectionView: UICollectionView,
                                 numberOfItemsInSection section: Int) -> Int {
        return 30
    }

    override func collectionView(_ collectionView: UICollectionView,
                                 cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {

        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "Cell", for: indexPath) as! Cell

        cell.imageView.image = UIImage(named: "Example.jpg")
        cell.imageView.backgroundColor = .lightGray

        return cell
    }

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

        coordinator.animate(alongsideTransition: { context in

        }, completion: { context in
            self.collectionView?.collectionViewLayout.invalidateLayout()

            self.collectionView?.visibleCells.forEach { cell in
                guard let cell = cell as? Cell else {
                    return
                }
                cell.setCircularImageView()
            }
        })
    }
}

extension ViewController: UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {

        return CGSize(width: collectionView.frame.size.width/3.0 - 8,
                      height: collectionView.frame.size.width/3.0 - 8)
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际上，如果没有重写的 ```bounds``` 属性，则该示例在左侧看起来像这样。 😢

![UICollectionViewController2](http://q8wtfza4q.bkt.clouddn.com/uc-stp2.jpg "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好笑吧？ 右侧的图像是带有超出范围的实际结果，这是预期的行为。 如果你不覆盖边界并且不为可见视图重设 ```cornerRadius``` 属性，那么滚动和旋转将真的很奇怪。 你可能会问：但是为什么呢？ 🤔

</br>

# **Layers, springs & struts** 说明

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Apple``` 在 ```UIKit``` 中仍然具有基于 ```“ Springs＆Struts”``` 的代码。 这意味着框架和边界计算正在底层系统中进行，并且约束系统也在努力工作以找出适当的措施。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当有一个 ```init（frame :)``` 方法或一个必需的 ```init（coder :)``` 方法时，这些布局会糟透了。 我真的很喜欢 ```Interface Builder``` ，但是直到我们没有一个好的工具来创建出色的用户界面， ```IB``` 才可能是潜在错误的另一层。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果仅使用自动布局约束或布局锚从代码创建单元，则甚至不会出现此问题！ 这是因为IB根据你在设计原型时提供的框架来创建单元。 但是，如果你忘记了 ```init（frame :)``` ，而只是创建了一个新的 ```UIImageView``` 实例并让自动布局完成了艰苦的工作，则布局系统将解决所有其他问题。

``` Swift
class Cell: UICollectionViewCell {

    weak var imageView: UIImageView!

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override init(frame: CGRect) {
        super.init(frame: frame)

        self.translatesAutoresizingMaskIntoConstraints = false

        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        self.addSubview(imageView)
        self.imageView = imageView

        self.imageView.topAnchor.constraint(equalTo: self.topAnchor)
        self.imageView.bottomAnchor.constraint(equalTo: self.bottomAnchor)
        self.imageView.leadingAnchor.constraint(equalTo: self.leadingAnchor)
        self.imageView.trailingAnchor.constraint(equalTo: self.trailingAnchor)
    }

    override func layoutSubviews() {
        super.layoutSubviews()

        self.imageView.layer.masksToBounds = true
        self.imageView.layer.cornerRadius = CGFloat(roundf(Float(self.imageView.frame.size.width/2.0)))
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显然，你必须编写更多代码，在控制器类中手动注册单元格类，并且还必须重写单元格中的 ```layoutSubviews``` 方法，但是它将按预期执行。 🙄

``` Swift
self.collectionView?.register(Cell.self, forCellWithReuseIdentifier: "Cell")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，在注册以编程方式创建的单元格之后，你将有一种很好的方式来显示圆形图像。 使用这种技术非常棘手，但是在每种情况下它肯定都有效。 


