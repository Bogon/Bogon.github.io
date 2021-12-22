---
title: CocoaPods 设定版本说明
description: CocoaPods 设定版本说明
permalink: CocoaPods 设定版本说明
copyright: true
date: 2021-12-22 10:22:50
keywords: >-
  iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection
  Types,Arrays,Dictionaries,Sets,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced,CocoaPods
  Classes,面试题,Podfile
tags:
  - - iOS
  - - CocoaPods
categories:
  - - iOS
  - - CocoaPods
---

# Migrating from 0.x to 1.0
We have a blog post explaining the changes in depth.

# Specifying pod versions
When starting out with a project it is likely that you will want to use the latest version of a Pod. If this is the case, simply omit the version requirements.
```Bash
pod 'SSZipArchive'
```
Later on in the project you may want to freeze to a specific version of a Pod, in which case you can specify that version number.
```Bash
pod 'Objection', '0.9'
```

<!--more-->

Besides no version, or a specific one, it is also possible to use logical operators:

+ '> 0.1' Any version higher than 0.1
+ '>= 0.1' Version 0.1 and any higher version
+ '< 0.1' Any version lower than 0.1
+ '<= 0.1' Version 0.1 and any lower version


In addition to the logic operators CocoaPods has an optimistic operator ~>:

+ '~> 0.1.2' Version 0.1.2 and the versions up to 0.2, not including 0.2 and higher
+ '~> 0.1' Version 0.1 and the versions up to 1.0, not including 1.0 and higher
+ '~> 0' Version 0 and the versions up to 1.0, not including 1.0 and higher

# Using the files from a folder local to the machine.
> If you would like to develop a Pod in tandem with its client project you can use :path. 
> ```Bash
> pod 'Alamofire', :path => '~/Documents/Alamofire'
> ```

Using this option CocoaPods will assume the given folder to be the root of the Pod and will link the files directly from there in the Pods project. This means that your edits will persist between CocoaPods installations. The referenced folder can be a checkout of your favourite SCM or even a git submodule of the current repo.

Note that the podspec of the Pod file is expected to be in that the designated folder.
> a podspec in the root of a library repo.
Sometimes you may want to use the bleeding edge version of a Pod, a specific revision or your own fork. If this is the case, you can specify that with your pod declaration.

To use the master branch of the repo:
```Bash
pod 'Alamofire', :git => 'https://github.com/Alamofire/Alamofire.git'
```

To use a different branch of the repo:
```Bash
pod 'Alamofire', :git => 'https://github.com/Alamofire/Alamofire.git', :branch => 'dev'
```

To use a tag of the repo:
```Bash
pod 'Alamofire', :git => 'https://github.com/Alamofire/Alamofire.git', :tag => '3.1.1'
```
Or specify a commit:
```Bash
pod 'Alamofire', :git => 'https://github.com/Alamofire/Alamofire.git', :commit => '0f506b1c45'
```

It is important to note, though, that this means that the version will have to satisfy any other dependencies on the Pod by other Pods.

The podspec file is expected to be in the root of the repo, if this library does not have a podspec file in its repo yet, you will have to use one of the approaches outlined in the sections below.
