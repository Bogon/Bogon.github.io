---
title: Go mysql Tips
description: Go mysql Tips
permalink: Go mysql Tips
copyright: true
keywords: 'linux,mysql,Linux,MySQL,MySQL学习,ubuntu,go'
tags:
  - - MySQL
  - - 数据库
categories:
  - - MySQL
  - - 数据库
abbrlink: 37213
date: 2021-07-31 13:10:45
---


+ 解决 `Ubuntu` 首次安装 `Mysql` 之后，首次登录出现 `ERROR 1698 (28000): Access denied for user 'root'@'localhost'` 的方法

	解决步骤：
	+ 查看 `mysql` 版本
		```Bash
		char@senyas:~/GoLand-2021.1.3/bin$ mysql --version
		mysql  Ver 8.0.26-0 ubuntu0.20.04.2 for Linux on aarch64 ((Ubuntu))
		```

	+ 打开终端，输入: 
		```Bash
		sudo vi /etc/mysql/debian.cnf
		```

		打开 `/etc/mysql/debian.cnf` 文件，显示如下：

		```Bash
		# Automatically generated for Debian scripts. DO NOT TOUCH!
		[client]
		host     = localhost
		user     = debian-sys-maint
		password = HszR9Tt89bS0Pt57
		socket   = /var/run/mysqld/mysqld.sock
		[mysql_upgrade]
		host     = localhost
		user     = debian-sys-maint
		password = HszR9Tt89bS0Pt57
		socket   = /var/run/mysqld/mysqld.sock
		```

	+ 打开 `mysql`
	
		<!--more-->

		使用如下命令打开 `Mysql` :
		```Bash
		mysql -udebian-sys-maint -p 
		```
		输入密码为上图中 `password` 字段
		```Bash
		char@senyas:~/GoLand-2021.1.3/bin$ mysql -udebian-sys-maint -p
		Enter password: 
		Welcome to the MySQL monitor.  Commands end with ; or \g.
		Your MySQL connection id is 13
		Server version: 8.0.26-0ubuntu0.20.04.2 (Ubuntu)

		Copyright (c) 2000, 2021, Oracle and/or its affiliates.

		Oracle is a registered trademark of Oracle Corporation and/or its
		affiliates. Other names may be trademarks of their respective
		owners.

		Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

		mysql> 
		```
	+ 修改 `root` 密码
		```Bash
		mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
		Query OK, 0 rows affected (0.00 sec)
		```

	+ 刷新并退出

		```Bash
		mysql> FLUSH PRIVILEGES;
		Query OK, 0 rows affected (0.00 sec)
		
		mysql> quit
		Bye
		```
	+ 重新登录
	输入修改后的密码：123456
		```Bash
		char@senyas:~/GoLand-2021.1.3/bin$ mysql -u root -p
		Enter password: 
		Welcome to the MySQL monitor.  Commands end with ; or \g.
		Your MySQL connection id is 14
		Server version: 8.0.26-0ubuntu0.20.04.2 (Ubuntu)

		Copyright (c) 2000, 2021, Oracle and/or its affiliates.

		Oracle is a registered trademark of Oracle Corporation and/or its
		affiliates. Other names may be trademarks of their respective
		owners.

		Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

		mysql> 
		```

	+ 执行成功
	![](https://github.com/Bogon/mysql_manual/blob/main/goMysql/gm_1.png?raw=true)

+ 安装 `Mysql`
按照如下命令，按顺序执行即可完成 `Mysql` 安装：
	```Bash
	# 更新软件源
	sudo apt-get update
	# 安装 mysql 客户端
	sudo apt install mysql-client-core-8.0 
	# 安装 mysql 服务端
	sudo apt-get install mysql-server
	# 查看是否安装成功
	systemctl status mysql
	# 登录 mysql
	sudo mysql -u root -p
	```

+ 定义 `Model` 和 初始化数据库链接案例

	```Go
	package models

	import (
		"github.com/astaxie/beego/orm"
		_ "github.com/go-sql-driver/mysql"
	)

	/// 1.结构体，表设计
	type UserInfo struct {
		Id int
		Name string
	}

	/// 2.初始化语句
	func init()  {

		/// 1.注册表
		orm.RegisterModel(new(UserInfo))

		/// 2.注册 mysql driver
		orm.RegisterDriver("mysql", orm.DRMySQL)

		/// 3.链接数据库
		orm.RegisterDataBase("default", "mysql", "root:123456@tcp(127.0.0.1:3306)/class1?charset=utf8")

		/// 4.生成表
		orm.RunSyncdb("default", false, true)

	}
	```