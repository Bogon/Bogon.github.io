---
title: UICollectionView、UICollectionViewFlowLayout使用技巧
description: UICollectionView、UICollectionViewFlowLayout使用技巧
permalink: UICollectionView、UICollectionViewFlowLayout使用技巧
copyright: ture
abbrlink: 16170
date: 2020-11-17 09:16:45
keywords: 'iOS,Swift,自动化布局,用户体验, UICollectionView,UICollectionViewCell,自适应'
tags:
  - iOS
	- Swift
	- UIKit
  - UICollectionView
categories:
  - iOS
	- Swift
	- UIKit
  - UICollectionView
---

通过对比发现 `UITableView` 和 `UICollectionView` 在开发中使用构建列表页面都很方便，常规的列表展示使用 `UITableView` 足以应对，在自定义特殊灵活的表格展示下 `UIcollectionView` 就显得很灵活。

<!--more-->

简单使用 UICollectionView 实现一下效果：

<img src="https://raw.githubusercontent.com/Bogon/blog_images/main/UIColleciton/collection_demo.gif" width = "300" height = "650" alt="图片名称" align=center />


## 创建 `UICollectionView` 
创建 `UICollectionView` 实例可以使用 `xib`  拖拽创建，也可使用纯代码创建，下面是代码创建：
```Swift
 private var contentCollectionView: UICollectionView = {
		let _lay_out: UICollectionViewFlowLayout = UICollectionViewFlowLayout()
		_lay_out.scrollDirection = .horizontal
		let collectionView:UICollectionView = UICollectionView(frame: CGRect.zero, collectionViewLayout: _lay_out)
		collectionView.keyboardDismissMode = .onDrag
		collectionView.showsHorizontalScrollIndicator = false
		collectionView.showsVerticalScrollIndicator = true
		collectionView.backgroundColor = UIColor.white
		return collectionView
}()
```

### `UICollectionViewFlowLayout`
`UICollectionViewFlowLayout` 负责对单元格进行布局，此处用到了滑动方向(`scrollDirection`)：横向。

## 添加实例
将实例添加到需要的内容视图并设置代理：
```Swift
contentCollectionView.delegate = self
contentCollectionView.dataSource = self
contentCollectionView.register(cellType: ExploreTourItemCollectionCell.self)
addSubview(contentCollectionView)

contentCollectionView.snp.remakeConstraints { (make) in
		make.left.equalTo(self.snp.left).offset(12)
		make.right.equalTo(self.snp.right)
		make.top.equalTo(self.snp.top).offset(15)
		make.height.equalTo(200)
}
```

## 实现代理和数据源方法
```Swift
// MARK: - UICollectionViewDelegateFlowLayout
extension ExploreContentView: UICollectionViewDelegateFlowLayout {
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        return 0
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: ExploreTourItemCollectionCell.width, height: ExploreTourItemCollectionCell.height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, backgroundColorForSectionAt section: Int) -> UIColor {
        return UIColor.clear
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 12
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0,left: 0,bottom: 20,right: 12)
    }
    
}

// MARK: - UICollectionViewDelegate
extension ExploreContentView: UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        
        
    }
}

// MARK: - UICollectionViewDataSource
extension ExploreContentView: UICollectionViewDataSource {
    
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
//        let m_dataSource: [CategoryDetailModel] = getDataSource()
        return 20
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: ExploreTourItemCollectionCell = collectionView.dequeueReusableCell(for: indexPath)
        
        return cell
    }

}
```

## 创建 `ExploreTourItemCollectionCell` 代码

使用的 `xib` 创建:
```Swift
import UIKit
import Reusable

fileprivate let ScreenWidth: CGFloat = UIScreen.main.bounds.width
fileprivate let wp_width: CGFloat = ScreenWidth - 76
fileprivate let wp_height: CGFloat = 180

class ExploreTourItemCollectionCell: UICollectionViewCell, NibReusable {

    static var reuseIdentifier: String { "ExploreTourItemCollectionCell" }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        contentView.backgroundColor = .red
        self.backgroundColor = .white
        
        contentView.layer.masksToBounds = true
        contentView.layer.cornerRadius = 15.0
  
    }
    
    static var height: CGFloat {
        return wp_height
    }
    
    static var width: CGFloat {
        return wp_width
    }

}
```

## 更多用法

+ [UICollectionView data source and delegates](https://xuebaonline.com/UICollectionView%20data%20source%20and%20delegates/)
+ [UICollectionView Cells：圆形图像、支持旋转](https://xuebaonline.com/UICollectionView%20Cells%EF%BC%9A%E5%9C%86%E5%BD%A2%E5%9B%BE%E5%83%8F%E3%80%81%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC/)
