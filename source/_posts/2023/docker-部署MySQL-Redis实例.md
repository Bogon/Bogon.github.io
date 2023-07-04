---
title: 'docker: 部署MySQL,Redis实例'
description: 'docker: 部署MySQL,Redis实例'
permalink: 'docker: 部署MySQL,Redis实例'
copyright: true
abbrlink: 54619
date: 2023-05-06 18:58:08
keywords:
tags:
categories:
---

https://juejin.cn/post/6872210647287857165

Docker 安装 Mysql
docker pull mysql

创建mysql实例

docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 mysql


# mysql docker 下部署集群
https://learnku.com/articles/30439


# docker 下部署 redis
https://segmentfault.com/a/1190000039769819

docker run -itd -p 6379:6379 --name redis -v /home/senyas/data/redis/redis.conf:/etc/redis/redis.conf  -v /home/senyas/data/redis/data:/data:rw --privileged=true redis redis-server /etc/redis/redis.conf --appendonly yes


docker run -it --link redis:redis --rm redis redis-cli -h redis -p 6379

docker redis 主从
https://www.cnblogs.com/Yee-Q/p/16607538.html


# 将 docker 中文件拷贝到 宿主机
```Bash
#docker cp 容器名称:文件所在容器路径 宿主机路径
docker cp mysql-test:/xxxx.sql /Users/xxxx/Desktop/
```

# 将宿主机文件拷贝到 docker
```Bash
#docker cp 宿主机路径 容器名称:文件所在容器路径 
docker cp /Users/xxxx/Desktop/ mysql-test:/xxxx.sql 
```

# 将 Docker 中 mysql 数据导出

```Bash
# 进入到mysql下 整库导出
docker exec -it mysql-test /bin/sh
# mysqldump -u[用户名] -p[密码] -h 127.0.0.1 [数据库名称] > [文件名称].sql;
mysqldump -uroot -p123456 -h 127.0.0.1 rentee_booking > rentee_booking.sql;
mysqldump -uroot -p123456 -h 127.0.0.1 rentee_booking rentee_foods> rentee_booking_rentee_foods.sql;
mysqldump -uroot -p123456 -h 127.0.0.1 rentee_booking rentee_foods_detail> rentee_booking_rentee_foods_detail.sql;
mysqldump -uroot -p123456 -h 127.0.0.1 --databases rentee_booking --tables rentee_foods rentee_foods_detail > rentee_booking_foods_and_detail.sql
mysqldump -uroot -p123456 -h 127.0.0.1 --databases rentee_booking --tables rentee_books > rentee_booking_books.sql
```

# 将数据导入 Docker 的 mysql 中
```Bash
# 进入到mysql下 整库导出
docker exec -it mysql-test /bin/sh
# mysqldump -u[用户名] -p[密码] -h 127.0.0.1 [数据库名称] < [文件名称].sql;
mysqldump -uroot -p123456 -h 127.0.0.1 rentee_booking < rentee_booking.sql;
```

```Bash
# 进入到mysql下 整库导出
docker exec -it mysql-test /bin/sh

# 进入msyql
mysql -uroot -p123456

# 查看目标数据库是否存在
show databaes;

# 选择目标数据库
use renree_booking;

# 导入数据
source /xxx.sql;
```