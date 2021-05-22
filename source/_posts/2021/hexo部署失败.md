---
title: hexo部署失败
description: hexo部署失败
permalink: hexo部署失败
copyright: true
date: 2021-05-20 09:22:03
keywords: iOS,Swift,Swift Apprentice,Swift学习,Swift进阶,Protocols,协议编程,泛型,编程,多态,Collection Types,Arrays,Dictionaries,Sets,CFArray,使用闭包集合迭代,Strings,构建自己的类型,Structures,结构体,Methods,Classes,Advanced Classes,面试题
tags:
    - [hexo]
categories:
    - [hexo]
---

在升级 `Node` 之后，发现之前部署在 `github` 上的博客部署起来总是失败。错误主要是使用的 `hexo` 版本与 `Node` 版本不兼容。 
> 所以我们希望既能够解决现有的问题，又能够在不同 `Node` 版本间切换。
```Bash
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
TypeError [ERR_INVALID_ARG_TYPE]: The "mode" argument must be integer. Received an instance of Object
    at copyFile (fs.js:1890:10)
    at tryCatcher (C:\Users\Administrator\blog\node_modules\bluebird\js\release\util.js:16:23)
    at ret (eval at makeNodePromisifiedEval (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promisify.js:184:12), <anonymous>:13:39)
    at C:\Users\Administrator\blog\node_modules\hexo-deployer-git\node_modules\hexo-fs\lib\fs.js:144:39
    at tryCatcher (C:\Users\Administrator\blog\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:517:31)
    at Promise._settlePromise (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:574:18)
    at Promise._settlePromise0 (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:619:10)
    at Promise._settlePromises (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:699:18)
    at Promise._fulfill (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:643:18)
    at Promise._resolveCallback (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:437:57)
    at Promise._settlePromiseFromHandler (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:529:17)
    at Promise._settlePromise (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:574:18)
    at Promise._settlePromise0 (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:619:10)
    at Promise._settlePromises (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:699:18)
    at Promise._fulfill (C:\Users\Administrator\blog\node_modules\bluebird\js\release\promise.js:643:18)

```

<!-- more -->

## 解决方案：
`hexo` 在 `github` 上给出的建议：
+ 降低 `node` 版本；
+ 升级最新 `hexo@4.2.1+` 。

检查 hexo 版本信息：`hexo --version`
```Bash
hexo-cli: 3.1.0
os: Darwin 20.4.0 darwin x64
node: 12.16.3
v8: 7.8.279.23-node.35
uv: 1.34.2
zlib: 1.2.11
brotli: 1.0.7
ares: 1.16.0
modules: 72
nghttp2: 1.40.0
napi: 5
llhttp: 2.0.4
http_parser: 2.9.3
openssl: 1.1.1g
cldr: 36.0
icu: 65.1
tz: 2019c
unicode: 12.1
```

## Node多版本管理

+ 工具 [n](https://github.com/tj/n)

+ 安装
	+ node 命令安装
	```Bash
	npm install -g n
	```
	+ brew进行安装
	```Bash
	brew install n
	```
+ 使用(版本切换)
	+ 最新版本
	```Bash
	n latest
	```
	+ 分别 `sudo n 12.18.2`、`sudo n 8.17.0`、`sudo n 10.21.0` 之后，查看所有的node版本。
	终端输入 `n`:
	```Bash
  	ο node/12.16.3
      node/16.2.0

	Use up/down arrow keys to select a version, return key to install, d to delete, q to quit
	```
+ 切换版本
	+ 查看当前版本
		```Bash
		node -v
		```
		可看到版本信息：`v12.16.3`
	+ 按 `n` 之后，选择相应版本并切换，可以看到版本已经切换。