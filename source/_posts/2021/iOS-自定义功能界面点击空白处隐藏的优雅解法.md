---
title: iOS 自定义功能界面点击空白处隐藏的优雅解法
description: iOS 自定义功能界面点击空白处隐藏的优雅解法
permalink: iOS 自定义功能界面点击空白处隐藏的优雅解法
copyright: true
abbrlink: 46746
date: 2021-12-21 15:05:23
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced
  Classes,面试题
tags:
  - - iOS
  - - Swift
categories:
  - - iOS
  - - Swift
---

先上一段代码，具体的用法后面补上：

```Swift

let tap = UITapGestureRecognizer.init(target: self, action: #selector(tapEvent))
tap.delegate = self
self.isUserInteractionEnabled = true
self.addGestureRecognizer(tap)

/// tap event
@objc private func tapEvent() {
	isHidden = true
}     

/// MARK: - UIGestureRecognizerDelegate
extension FilterByTimeContentView: UIGestureRecognizerDelegate {
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
        if touch.view?.isDescendant(of: m_collectionView) ?? true {
            return false
        }
        return true
    }
}
```