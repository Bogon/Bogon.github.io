---
title: 'docker: 部署MySQL,Redis实例'
description: 'docker: 部署MySQL,Redis实例'
permalink: 'docker: 部署MySQL,Redis实例'
copyright: true
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
