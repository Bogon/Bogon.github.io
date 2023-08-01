---
title: 'docker: 部署 MongoDB'
description: 'docker: 部署 MongoDB'
permalink: 'docker: 部署 MongoDB'
copyright: true
date: 2023-08-01 07:43:19
keywords:
tags:
categories:
---

# 单节点安装
## 环境说明
+ Docker version 23.0.5, build bc4487a
+ MongoDB server version: 5.0.5

## 拉取镜像
```Bash
docker pull mongo
```

<!--more-->

## 部署 MongoDB
设置 MongoDB 数据目录地址，根据自己磁盘分配情况需要自己设定 `/home/xxx/mongodb/datadb`.
```Bash
sudo docker run -d --name mongodb -p 27018:27017 -v $PWD/:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin123 --privileged=true --restart always mongo
```
+ 参数说明：
    ```-d 后台运行容器
        –name mongodb 运行容器名
        -p 27018:27017 将容器的27017端口映射到主机的27018端口
        -v /home/xxx/mongodb/datadb:/data/db 文件挂载： 本机:容器
        -e MONGO_INITDB_ROOT_USERNAME=admin 指定用户名
        -e MONGO_INITDB_ROOT_PASSWORD=admin123 指定密码
        –privileged=true 使得容器内的root拥有真正的root权限
        –restart always 跟随docker一起启动，即docker启动时会自动运行容器
        mongo 运行的镜像名字```

## 测试安装是否成功
### 以管理员角色进入到MongoDB：
```Bash
docker exec -it  mongodb  mongo admin
```

### 创建管理员账户
```Bash
db.createUser({ user: 'admin', pwd: 'admin123456', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
```
#### 验证创建管理员进行验证：
```Bash
db.auth("admin","admin123456");
```

### 创建 用户、密码、数据库
```Bash
db.createUser({ user: 'user', pwd: 'user123', roles: [ { role: "readWrite", db: "item" } ] });
```

#### 对 user 身份进行认证
```Bash
db.auth("user","user123");
```

#### 切换数据库
```Bash
use item
```

#### 添加数据
```Bash
db.item.save({name:"zhangsan"});
```

#### 查询数据
```Bash
db.item.find();
```