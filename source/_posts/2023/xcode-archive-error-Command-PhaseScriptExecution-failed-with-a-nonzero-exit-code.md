---
title: >-
  xcode archive error: Command PhaseScriptExecution failed with a nonzero exit
  code
description: >-
  xcode archive error: Command PhaseScriptExecution failed with a nonzero exit
  code
permalink: >-
  xcode archive error: Command PhaseScriptExecution failed with a nonzero exit
  code
copyright: true
keywords: 'iOS,Archive,Build,14.3'
tags:
  - iOS
  - Archive
categories:
  - iOS
  - Archive
abbrlink: 52495
date: 2023-05-26 18:03:05
---

升级 `Xcode14.3` 后打包报错 `Command PhaseScriptExecution failed with a nonzero exit code`

+ 报错内容：
  ```
  rsync error: some files could not be transferred (code 23) at /AppleInternal/Library/BuildRoots/810eba08-405a-11ed-86e9-6af958a02716/Library/Caches/com.apple.xbs/Sources/rsync/rsync/main.c(996) [sender=2.6.9]
  Command PhaseScriptExecution failed with a nonzero exit code
  ```

+ 解决方法：
在Xcode项目目录中进入 `Pods -> Targets Support Files -> Pods-项目名 -> Pods-项目名-frameworks.sh 中搜索source="$(readlink "${source}")"`，找到后将其替换为 `source="$(readlink -f "${source}")"` ，然后重新进行打包操作。

<!--more-->