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

