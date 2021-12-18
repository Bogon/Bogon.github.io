---
title: MySQL 基本操作
description: MySQL 基本操作
permalink: MySQL 基本操作
copyright: true
keywords: 'linux,mysql,Linux,MySQL,MySQL学习'
tags:
  - - MySQL
  - - 数据库
categories:
  - - MySQL
  - - 数据库
abbrlink: 4800
date: 2021-05-29 08:31:41
---

## 1.1 数据库的发展历史
可以参看这篇文章：[数据库的发展历史](https://zhuanlan.zhihu.com/p/111209720)
## 1.2 数据库的作用

数据库是存放数据的仓库

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536628113363.png)

<!--more-->

数据库：数据库中存放的是表，一个数据库中可以存放多个表

表：表是用来存放数据的。 

## 1.3 数据库的发展史

### 1.3.1 萌芽阶段：文件系统

最初始的数据库是用磁盘来存储数据的。文件就是最早的数据库。

### 1.3.2  第一代数据库：层次模型、网状模型

#### **1.3.2.1 层次模型**

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536628336467.png)

 缺点：

1、     查找不同类的数据效率低了（导航的结构的缺点）

2、     数据不完整（不能区分到底是一个李白还是两个李白）

 **1.3.2.2 网状模型**

网状模型解决了层次数据的数据不完整的问题，但是没有解决层次模型的导航问题。

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536628485678.png)

### 1.3.3 第二代数据库：关系型数据库

特点：

1. 每个表都是独立的

2. 表与表之间通过公共字段来建立关系

![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536628687644.png)


优点：解决了导航问题，并且数据完整性得到解决

缺点：多表查询效率低了 

提示：我们现在用的主流的数据库都是关系模型的。 

```
多学一招：NoSQL（非关系型数据库）解决关系型数据库多表查询效率的问题，常见的非关系型数据库有：Redis、mongodb。数据库中存储格式是键值对。 
```

## 1.4 MySQL安装

### 1.4.1 获取安装文件

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629260375.png) 

### 1.4.2 双击安装

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629329271.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629355783.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629428241.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629613825.png)

![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629634342.png)
![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629705861.png)
![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629719332.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629774124.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629790901.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629803448.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629813638.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629824430.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629839409.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629900552.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536629997349.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536630150575.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536630241363.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536630387833.png)

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536630440697.png)

### 1.4.3 MySQL目录

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536630746684.png)

 

## 1.5 启动/关闭MySQL服务

### 1.5.1 方法一：在服务面板中启动或关闭

控制面板项——管理工具——服务，选择相应服务，右键执行操作。

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536631118948.png)

### 1.5.2 方法二：通过命令行启动\关闭

net start 服务名：		启动MySQL服务

net stop 服务器：		      关闭MySQL服务

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536631301616.png)

```
 注意：必须通过管理员身份启动命令行
```

## 1.6 SQL介绍

### 1.6.1 SQL是什么

Structured Query Language（结构化查询语言），是用来操作关系型数据库的一门语言。这是一个关系型数据库的通用操作语言，也成为标准SQL，也叫SQL-92。

```
多学一招：数据库的生产厂商为了占有市场份额，都会在标准SQL的基础上扩展一些自己的东西以吸引用户。
```

### 1.6.2  常见的关系型数据库

| 关系型数据库 | 开发公司                          | 使用语言 |
| ------------ | --------------------------------- | -------- |
| SQL Server   | 微软公司                          | T-SQL    |
| Oracle       | 甲骨文公司                        | PL/SQL   |
| MySQL        | MySQL AB 公司开发——甲骨文公司收购 | MySQL    |

**思考：**已知标准SQL可以在所有的关系型数据库上运行，在Oracle上编写的PL/SQL能否在MySQL上运行？

答：不能，只能运行标准SQL 

## 1.7  连接服务器

通过命令行面板连接

```
host：主机			-h
username：用户名	-u
password：密码		-p
port：端口			-P
```

![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536633424017.png)

***

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536633591923.png)

```
多学一招：如果MySQL服务器在本地，IP地址可以省略；如果MySQL服务器用的是3306端口，-P也是可以省略
```

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536633758241.png)

 

## 1.8 关闭连接

 ```SQL
方法一：exit

方法二：quit

方法三：\q
```

```
脚下留心：MySQL中的命令后面要加分号，windows命令行的命令后面不用加分号。
```



## 1.9 数据库的操作

### 1.9.1  显示数据库

```SQL
 语法：show databases
 
 mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
+--------------------+
4 rows in set (0.11 sec)
```

安装MySQL后，MySQL自带了4个数据库

1. information_schema：存储了MySQL服务器管理数据库的信息。
2. performance_schema：MySQL5.5新增的表，用来保存数据库服务器性能的参数
3. mysql：MySQL系统数据库，保存的登录用户名，密码，以及每个用户的权限等等
4. test：给用户学习和测试的数据库。

### 1.9.2  创建数据库

```SQL
语法：create database [if not exists] `数据名` [字符编码]
```

创建数据库：

```SQL
mysql> create database stu;
Query OK, 1 row affected (0.09 sec)
```

如果创建的数据库已存在，就会报错

```SQL
mysql> create database stu;
ERROR 1007 (HY000): Can't create database 'stu'; database exists
```

解决：创建数据库的时候判断一下数据库是否存在，如果不存在再创建

 ```SQL
mysql> create database if not exists stu;
Query OK, 1 row affected, 1 warning (0.00 sec)
 ```

如果数据库名是关键字和特殊字符要报错

 解决：在特殊字符、关键字行加上反引号

 ```SQL
mysql> create database `create`;
Query OK, 1 row affected (0.05 sec)
 ```

```php
多学一招：为了创建数据库时万无一失，我们可以在所有的数据库名上加上反引号
```

创建数据库的时候可以指定字符编码

 ```SQL
mysql> create database teacher charset=gbk;
Query OK, 1 row affected (0.01 sec)
gbk		简体中文
gb2312：	简体中文
utf8：	通用字符编码
 ```

```php
脚下留心：创建数据库如果不指定字符编码，默认和MySQL服务器的字符编码是一致的。
```

### 1.9.3 删除数据库

 ```SQL
语法：drop database [if exists] 数据库名
```

删除数据库

 ```SQL
mysql> drop database teacher;
Query OK, 0 rows affected (0.00 sec)
```

如果删除的数据库不存在，会报错

 ```SQL
mysql> drop database teacher;
ERROR 1008 (HY000): Can't drop database 'teacher'; database doesn't exist
mysql>
```

 解决：删除之前判断一下，如果存在就删除

 ```SQL
mysql> drop database if exists teacher;
Query OK, 0 rows affected, 1 warning (0.00 sec)
 ```

### 1.9.4 显示创建数据库的SQL语句

 ```SQL
语法：show create database 数据库名
```

 ```SQL
mysql> show create database stu;
+----------+--------------------------------------------------------------+
| Database | Create Database                                              |
+----------+--------------------------------------------------------------+
| stu      | CREATE DATABASE `stu` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+--------------------------------------------------------------+
1 row in set (0.01 sec)

mysql> show create database teacher;
+----------+-----------------------------------------------------------------+
| Database | Create Database                                                 |
+----------+-----------------------------------------------------------------+
| teacher  | CREATE DATABASE `teacher` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+-----------------------------------------------------------------+
1 row in set (0.00 sec)
```

### 1.9.5 修改数据库

修改数据库的字符编码

语法：

 ```SQL
alter database 数据库名 charset=字符编码
```

例题

 ```SQL
mysql> alter database teacher charset=utf8;
Query OK, 1 row affected (0.00 sec)

mysql> show create database teacher;
+----------+------------------------------------------------------------------+
| Database | Create Database                                                  |
+----------+------------------------------------------------------------------+
| teacher  | CREATE DATABASE `teacher` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+------------------------------------------------------------------+
1 row in set (0.00 sec)
```

### 1.9.6 选择数据库

语法：

 ```SQL
use 数据库名
```

选择数据库

 ```SQL
mysql> use stu;
Database changed
```

## 1.10 表的操作

### 1.10.1 显示所有表

语法：

 ```SQL
show tables
```



### 1.10.2 创建表

语法：

 ```SQL
create table [if not exists] 表名(
    字段名 数据类型 [null|not null] [auto_increment] [primary key] [comment],
    字段名 数据类型 [default]…
)engine=存储引擎
```

单词

 ```SQL
null | not null   	空|非空
default	          	默认值
auto_increment    	自动增长
primary key       	主键
comment           	备注
engine           	引擎   innodb  myisam  memory  引擎是决定数据存储的方式
```

创建简单的表

 ```SQL
mysql> create database itcast;
Query OK, 1 row affected (0.00 sec)

mysql> use itcast;
Database changed
mysql> show tables;
Empty set (0.05 sec)

# 创建表
mysql> create table stu(
    -> id int,
    -> name varchar(30)
    -> );
Query OK, 0 rows affected (0.13 sec)
# 查看创建的表
mysql> show tables;
+------------------+
| Tables_in_itcast |
+------------------+
| stu              |
+------------------+
 ```

 创建复杂的表

 ```SQL
mysql> set names gbk;   # 设置字符编码
Query OK, 0 rows affected (0.05 sec)

mysql> create table if not exists teacher(
    -> id int auto_increment primary key comment '主键',
    -> name varchar(20) not null comment '姓名',
    -> phone varchar(20) comment '电话号码',
    -> `add` varchar(100) default '地址不详' comment '地址'
    -> )engine=innodb;
Query OK, 0 rows affected (0.09 sec)

 ```

多学一招：create table 数据库名.表名，用于给指定的数据库创建表

 ```SQL
mysql> create table data.stu(  #给data数据库中创建stu表
    -> id int,
    -> name varchar(10));
Query OK, 0 rows affected (0.00 sec)
 ```

### 1.10.3  显示创建表的语句

语法：

 ```SQL
show create table 表名
```

显示创建teacher表的语句

 ```SQL
mysql> show create table teacher;
+---------+--------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------+
| Table   | Create Table


       |
+---------+--------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------+
| teacher | CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话号码',
  `add` varchar(100) DEFAULT '地址不详' COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8                         |
```

将两个字段竖着排列           show create table `表名`\G

 ```SQL
mysql> show create table teacher\G;
*************************** 1. row ***************************
       Table: teacher
Create Table: CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话号码',
  `add` varchar(100) DEFAULT '地址不详' COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)

 ```

### 1.10.4 查看表结构

语法：

 ```SQL
desc[ribe] 表名
```

查看teacher表的结构

 ```SQL
mysql> describe teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
+-------+--------------+------+-----+----------+----------------+
4 rows in set (0.08 sec)

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
+-------+--------------+------+-----+----------+----------------+
4 rows in set (0.01 sec)
```

### 1.10.5  删除表

语法：

 ```SQL
drop table [if exists] 表1，表2,… 
```

删除表

 ```SQL
mysql> drop table stu;
Query OK, 0 rows affected (0.08 sec)
```

如果删除一个不存在的表就会报错，删除的时候可以判断一下，存在就删除。

 ```SQL
mysql> drop table stu;
ERROR 1051 (42S02): Unknown table 'stu'

mysql> drop table if exists stu;
Query OK, 0 rows affected, 1 warning (0.00 sec)
```

可以一次删除多个表

 ```SQL
mysql> drop table a1,a2;
Query OK, 0 rows affected (0.00 sec)
 ```

### 1.10.6  修改表

 ```SQL
语法：alter table 表名
```

1、添加字段：alter table 表名add [column] 字段名 数据类型 [位置]

例题一：添加字段

 ```SQL
mysql> alter table teacher add age int;
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
5 rows in set (0.00 sec)
 ```

例题二：在第一个位置上添加字段

 ```SQL
mysql> alter table teacher add email varchar(30) first;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| email | varchar(30)  | YES  |     | NULL     |                |
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
```

例题三：在指定的字段后添加字段

 ```SQL
mysql> alter table teacher add sex varchar(2) after name;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| email | varchar(30)  | YES  |     | NULL     |                |
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| sex   | varchar(2)   | YES  |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
7 rows in set (0.00 sec)
```

2、删除字段：alter table 表 drop [column] 字段名

 ```SQL
mysql> alter table teacher drop email;
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

3、修改字段(改名改类型)：alter table 表 change [column] 原字段名 新字段名 数据类型 …

 将字段sex改为xingbie，数据类型为int

 ```SQL
mysql> alter table teacher change sex xingbie int;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

4、修改字段（不改名）:alter table 表 modify 字段名 字段属性…

将性别的数据类型改为varchar(2)

 ```SQL
mysql> alter table teacher modify xingbie varchar(2);
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

5、修改引擎：alter table 表名 engine=引擎名

 ```SQL
mysql> alter table teacher engine=myisam;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

6、修改表名：alter table 表名 rename to 新表名

 ```SQL
mysql> alter table teacher rename to stu;
Query OK, 0 rows affected (0.00 sec)

mysql> show tables;
+------------------+
| Tables_in_itcast |
+------------------+
| stu              |
+------------------+
1 row in set (0.00 sec)
 ```

### 1.10.5 复制表

 ```SQL
语法一：create table 新表 select 字段 from 旧表
```

 特点：不能复制父表的主键，能够复制父表的数据

 ```SQL
mysql> create table stu1 select * from stu;
Query OK, 1 row affected (0.06 sec)
Records: 1  Duplicates: 0  Warnings: 0

mysql> select * from stu1;    # 查看数据复制到新表中
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)

mysql> desc stu1;    #  主键没有复制
+-------+-------------+------+-----+----------+-------+
| Field | Type        | Null | Key | Default  | Extra |
+-------+-------------+------+-----+----------+-------+
| id    | int(11)     | NO   |     | 0        |       |
| name  | varchar(20) | NO   |     | NULL     |       |
| addr  | varchar(50) | YES  |     | 地址不详        |       |
| score | int(11)     | YES  |     | NULL     |       |
+-------+-------------+------+-----+----------+-------+
4 rows in set (0.00 sec)
```

 ```SQL
语法二：create table 新表 like 旧表
```

特点：只能复制表结构，不能复制表数据

 ```SQL
Query OK, 0 rows affected (0.00 sec)

mysql> select * from stu2;   # 数据没有复制
Empty set (0.01 sec)

mysql> desc stu2;   # 主键复制了
+-------+-------------+------+-----+----------+----------------+
| Field | Type        | Null | Key | Default  | Extra          |
+-------+-------------+------+-----+----------+----------------+
| id    | int(11)     | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20) | NO   |     | NULL     |                |
| addr  | varchar(50) | YES  |     | 地址不详        |                |
| score | int(11)     | YES  |     | NULL     |                |
+-------+-------------+------+-----+----------+----------------+
4 rows in set (0.00 sec)
```

## 1.11 数据操作

创建测试表

 ```SQL
mysql> create table stu(
    -> id int auto_increment primary key comment '主键',
    -> name varchar(20) not null,
    -> addr varchar(50) default '地址不详',
    -> score int comment '成绩'
    -> );
Query OK, 0 rows affected (0.01 sec)
```

### 1.11.1  插入数据

#### 插入一条数据

 ```SQL
语法：insert into 表名 (字段名, 字段名,…) values (值1, 值1,…)
```

例题一：插入数据

 ```SQL
mysql> insert into stu (id,name,addr,score) values (1,'tom','上海',88);
Query OK, 1 row affected (0.11 sec)
```

例题二：插入的字段可以和表的字段顺序不一致。值的顺序必须和插入字段的顺序一致。

 ```SQL
mysql> insert into stu (name,score,addr,id) values ('berry',77,'北京',2);
Query OK, 1 row affected (0.00 sec)
```

例题三：可以插入部分字段，但是，非空字段必须插入

 ```SQL
mysql> insert into stu (id,name,addr) values (3,'ketty','上海');
```

例题四：自动增长字段不用插入，数据库会自动插入增长的数字

 ```SQL
mysql> insert into stu (name,addr) values ('rose','北京');
Query OK, 1 row affected (0.00 sec)
```

例题五：自动增长列的值插入null即可

 ```SQL
mysql> insert into stu (id,name,addr,score) values (null,'李白','上海',66);
Query OK, 1 row affected (0.00 sec)
```

例题六：插入值的顺序和个数与表字段的顺序和个数一致，插入的字段可以省略

 ```SQL
mysql> insert into stu values (null,'杜甫','北京',null);
Query OK, 1 row affected (0.00 sec)
```

例题七：通过default关键字插入默认值

 ```SQL
mysql> insert into stu values (null,'李清照',default,66);
```

 ```SQL
脚下留心：
1、插入字段的顺序与值的顺序必须一致
```

#### 插入多条数据

 ```SQL
mysql> insert into stu values (null,'辛弃疾',default,66),(null,'岳飞','河南',77);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
 ```

### 1.11.2 更新数据

语法：

 ```SQL
update 表名 set 字段=值 [where 条件] 
```

例题一：将1号学生的地址改成山东

 ```SQL
mysql> update stu set addr='山东' where id=1
 ```

例题二：将ketty的成绩改为99

 ```SQL
mysql> update stu set score=99 where name='ketty';
```

例题三：将berry地址改成上海，成绩改成66

 ```SQL
mysql> update stu set addr='上海',score=66 where name='berry';
```

例题四：将上海的学生成绩改为60

 ```SQL
mysql> update stu set score=60 where addr='上海';
```

例题五：条件可以省略，如果省略，更改所有数据（将所有数据的地址改为湖南，成绩改为70）

 ```SQL
mysql> update stu set addr='湖南',score=70;
```

例题六：将2、3的学生成绩改为65

 ```SQL
mysql> update stu set score=65 where id=2 or id=3;
```

### 1.11.3 删除数据

语法

 ```SQL
delete from 表名 [where 条件] 
```

例题一：删除学号是1号的学生

 ```SQL
mysql> delete from stu where id=1;
 ```

例题二：删除成绩小于等于65分的

 ```SQL
mysql> delete from stu where score<=65;
 ```

例题三：删除表中所有记录

 ```SQL
mysql> delete from stu;
 ```

### 1.11.4 清空表

语法：

 ```SQL 
truncate table 表名
 ```

例题

 ```SQL
mysql> truncate table stu;
Query OK, 0 rows affected (0.00 sec)
```

```
脚下留心：delete from 表和truncate table 表区别？
delete from 表：遍历表记录，一条一条的删除
truncate table：将原表销毁，再创建一个同结构的新表。就清空表而言，这种方法效率高。
```

### 1.11.5查询表

语法：

 ```SQL
select 列名 from 表
```

例题：

 ```SQL
mysql> select name,score from stu;
+------+-------+
| name | score |
+------+-------+
| rose |    88 |
+------+-------+
1 row in set (0.00 sec)

mysql> select id,name,addr,score from stu;
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)

mysql> select * from stu;  # *表示所有字段
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)
```

## 1.12 SQL分类

DDL（data definition language）数据库定义语言CREATE、ALTER、DROP、SHOW

DML（data manipulation language）数据操纵语言SELECT、UPDATE、INSERT、DELETE

DCL（Data Control Language）数据库控制语言,是用来设置或更改数据库用户或角色权限的语句

 

## 1.13 数据表的文件介绍

一个数据库对应一个文件夹

一个表对应一个或多个文件

引擎是myisam，一个表对应三个文件

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536654269605.png)

引擎是innodb,一个表对应一个表结构文件

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536654519700.png)

所有的innodb引擎的数据统一的存放在data\ibdata1文件中。如果数据量很大，MySQL会自动的创建ibdata2，ibdata3，…，目的就是为了便于管理。

 引擎是memory，数据存储在内存中，重启服务数据丢失，但是读取速度非常快。

## 1.14 字符集

字符集：字符在保存和传输时对应的二进制编码集合。

创建测试数据库

 ```SQL
mysql> create table stu(
    -> id int primary key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.00 sec)
```

插入中文报错

![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536656529642.png)

***

分析原因：

客户端通过GBK发送的命令

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536656722512.png)

但是，服务用utf8解释命令

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536656805867.png)

设置服务器，用gbk字符编码接受客户端发来的命令

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536656911674.png)

测试：插入中文，成功

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536656946064.png)

查询数据，发现数据乱码

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536657018441.png)

原因：以utf返回的结果，客户端用gbk来接受

解决：服务器用gbk返回数据

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536657091653.png)

再次测试，查询数据

  ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536657126082.png)



总结：客户端编码、character_set_client、character_set_results三个编码的值一致即可操作中文。

多学一招：我们只要设置“set names 字符编码”，就可以更改character_set_client、character_set_results的值。

 ![](https://raw.githubusercontent.com/Bogon/mysql_manual/main/images/1536657249850.png)
 