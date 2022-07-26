---
title: MySQL Tips
description: MySQL Tips
permalink: MySQL Tips
copyright: true
keywords: 'go,MySQL,数据库'
tags:
  - go
  - MySQL
  - 数据库
categories:
  - go
  - MySQL
abbrlink: 37554
date: 2022-07-25 21:54:18
---


# 清空表 `(truncate)` 与删除表中数据 `(delete)`

删除表信息的方式有两种:
```SQL
truncate table table_name;
delete * from table_name;
```
> 注: `truncate` 操作中的 `table` 可以省略，`delete` 操作中的 `*` 可以省略

`truncate`、`delete` 清空表数据的区别 :
+ `truncate` 是整体删除 (速度较快)，`delete` 是逐条删除 (速度较慢);
+ `truncate` 不写服务器 `log`，`delete` 写服务器 `log`，也就是 `truncate` 效率比 `delete` 高的原因;
+ `truncate` 不激活 `trigger` (触发器)，但是会重置 `Identity` (标识列、自增字段)，相当于自增列会被置为初始值，又重新从1开始记录，而不是接着原来的 `ID` 数。而 `delete` 删除以后，`identity` 依旧是接着被删除的最近的那一条记录 `ID` 加1后进行记录。如果只需删除表中的部分记录，只能使用 `DELETE` 语句配合 `where` 条件s