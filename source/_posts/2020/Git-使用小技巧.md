---
title: Git 使用小技巧
description: Git 使用小技巧
permalink: Git 使用小技巧
copyright: ture
keywords: 'Git,git,github,git使用, 技巧'
tags:
  - - git
categories:
  - - git
abbrlink: 54010
date: 2020-10-09 08:59:12
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

## 查看提交的log

```Bash
git reflog
```

```
39d4aad4 (HEAD -> Feature_v2.2.8.1, origin/Feature_v2.2.8.1) 
d142095a HEAD@{1}: commit (merge): merge: v2.2.8 -> v2.2.8.1
39d4aad4 (HEAD -> Feature_v2.2.8.1, origin/Feature_v2.2.8.1) HEAD@{2}: checkout: mo
8f428017 (origin/Feature_v2.2.8, Feature_v2.2.8) HEAD@{3}:
268ec08b HEAD@{4}: commit: refactor: 
aa7851ff HEAD@{5}: checkout: moving from Feature_v2.2.8.1 to 
39d4aad4 (HEAD -> Feature_v2.2.8.1, origin/Feature_v2.2.8.1) 
1d7f575b HEAD@{7}: checkout: moving from Feature_v2.2.8 to 
aa7851ff HEAD@{8}: commit: feature:
f4664271 HEAD@{9}: checkout: moving from Feature_v2.2.8.1 to 
1d7f575b HEAD@{10}: checkout: moving from 
```

> `39d4aad4` 作为基线号

## Reset
reset 到 merge 前的版本，然后再重做接下来的操作，要求每个合作者都晓得怎么将本地的 HEAD 都回滚回去：

```Bash
git checkout 【 merge 操作时所在的分支】
git reset --hard 【merge前的版本号】
```

## Revert

merge 以后还有别的操作和改动时，git 正好也有办法能撤销 merge，用 git revert：

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

```
合并时遇到冲突想取消操作，恢复index，用git merge --abort
git reset --hard 可以回退到某个提交
git revert可以撤销某个提交，撤销会产生一个新的提交

git rebase还木有仔细研究过。
```

## merge 合并分支
合并分支一般遵循下面几个步骤即可完成合并：
+ 切换到目标分支；
+ 将待合并的分支拉取到目标分支(此时待合并分支的内容已经合并到本地目标分支中)；
	> 合并之后会出冲突现象，查看冲突的内容，保留必要的代码即可；解决完冲突之后，将冲突文件标记为冲突已解。
+ ***将合并后的内容提交到远程代码仓库***。
	> 这一步尤为重要，在使用不熟练的情况在合并未出现冲突的情况下，很容易忘记将本地内容提交到远程仓库。
	
## 查看远程分支
+ 查看本地和远程仓库的所有分支: `git branch -a` ；
+ 查看远程仓库的分支: `git branch -r` ；

## 与远程分支同步
+ 本地所有分支与远程保持同步： `git fetch --all` ;
+ 拉取所有分支代码: `git pull --all` ;

# git push提交到远程报错
进行远程提交报错：
```Bash
Username for 'https://github.com': 
Password for 'https://Bogon@github.com':
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: Authentication failed for 'https://github.com/xxx/xxx.git/'

+ 原因
从2021年8月13日，GitHub不再支持用密码提交代码。
```

# git 修改 tag 名称

```Bash
git tag new old
git tag -d old
git push origin :refs/tags/old
git push --tags
```

```Bash
git tag v2.2.8.2_build2365 Release_v2.2.8.2_build2365
git tag -d Release_v2.2.8.2_build2365
git push origin :refs/tags/Release_v2.2.8.2_build2365
git push --tags
```

# git 删除 tag 名称

```Bash
git tag -d old
git push origin :refs/tags/old
```

```Bash
git tag -d Release_v2.2.8.2_build2365
git push origin :refs/tags/Release_v2.2.8.2_build2365
```

# 拉取远程分支(同步远程分支到本地)

```Bash
git fetch -p
```

# 删除报错分支

```Bash
git branch -D *
```
# 检出报错分支

```Bash
git checkout *
```