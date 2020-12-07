---
title: Git 使用小技巧
description: Git 使用小技巧
permalink: Git 使用小技巧
copyright: ture
date: 2020-10-09 08:59:12
keywords: Git,git,github,git使用, 技巧
tags:
	- [git]
categories:
	- [git]
---

# 分支管理

## 根据现有的tag创建新的分支
### 创建分支

在项目中我们需要根据tag创建分支.现将创建步骤总结一下.假设在你的主分支上有一个tag为v1.0,主分支的名字为master.

1. 获得最新仓库信息：
	```Bash
	git origin fetch
	```

2. 根据tag创建新的分支:
	```Bash
	git branch <new-branch-name> <tag-name>
	```

	补充：
	```Bash
	git branch branchname
	//创建并切换到新分支
	git checkout -b branchname
	//远程分支
	git push origin branchname
	//查看远程分支
	git branch -r
	```

	>例如:	```git branch newbranch v1.0``` . 会以 tag v1.0创建新的分支newbranch;


<!-- more -->

3. 切换到新的分支：
	```Bash
	git checkout newbranch
	```

4. 将本地创建的分支提交到远程仓库：
	```Bash
	git push origin newbranch
	```

现在远程仓库也会有新创建的分支啦.

### 删除分支
1. 强制删除分支(删除本地分支（-D强制删除）)
	```Bash
	git branch -d <branchname>
	```
2. 删除远程分支
	```Bash
	git push origin :<branchname>
	```

### tag管理

1. 创建tag
	```Bash
	git tag -a v1.1 -m "注释"
	git push origin v1.1
	//查看所有tag
	git tag -l
	```
2. 删除tag（删除本地tag）
	```Bash
	git tag -d v1.1
	```
3. 删除远程tag
	```Bash
	git push origin :v1.1 
	#也可以这样
	git push origin --delete tag V1.1
	```

4. 查看远程tag
	```Bash
	git tag
	```

# 撤销操作

在使用 ```git``` 过程中会出现想要撤销当前操作： ```merge``` 、 ```commit``` 等

## Reset
reset 到 merge 前的版本，然后再重做接下来的操作，要求每个合作者都晓得怎么将本地的 HEAD 都回滚回去：

```Bash
git checkout 【 merge 操作时所在的分支】
git reset --hard 【merge前的版本号】
```

## Revert

```merge``` 以后还有别的操作和改动时，```git``` 正好也有办法能撤销 ```merge```，用 ```git revert```：

```Bash
$ git revert -m 【要撤销的那条merge线的编号，从1开始计算（怎么看哪条线是几啊？）】 【merge前的版本号】
Finished one revert.
[master 88edd6d] Revert "Merge branch 'xxx/post-checkout'"
 1 files changed, 0 insertions(+), 2 deletions(-)
```

撤销 ```revert``` 操作：

```Bash
$ git revert [撤销merge时提交的commit的版本号，这里是88edd6d]
Finished one revert.
[master 268e243] Revert "Revert "Merge branch 'xxx/post-checkout'""
 1 files changed, 2 insertions(+), 0 deletions(-)
```