---
title: 'docker: 部署 zookeeper'
description: 'docker: 部署 zookeeper'
permalink: 'docker: 部署 zookeeper'
copyright: true
date: 2023-08-01 07:18:50
keywords:
tags:
categories:
---


# 单节点安装
## 环境说明
+ Docker version 23.0.5, build bc4487a
+ zookeeper 5.19.0-46-generic

## 拉取镜像
```Bash
docker pull zookeeper
```

<!--more-->

## 部署 zookeeper
设置 zookeeper 数据目录地址，根据自己磁盘分配情况需要自己设定 `/home/xxx/zookeeper/data`.
```Bash
docker run -d -e TZ="Asia/Shanghai" -p 2181:2181 -v $PWD/data:/data --name zookeeper --restart always zookeeper
```
+ 参数说明：
    ```-e TZ="Asia/Shanghai" # 指定上海时区 
    -d # 表示在一直在后台运行容器
    -p 2181:2181 # 对端口进行映射，将本地2181端口映射到容器内部的2181端口
    --name # 设置创建的容器名称
    -v # 将本地目录(文件)挂载到容器指定目录；
    --restart always #始终重新启动zookeeper```

## 测试安装是否成功
使用zk命令行客户端连接zk：
```Bash
docker run -it --rm --link zookeeper:zookeeper zookeeper zkCli.sh -server zookeeper
```


> [参考地址](https://www.cnblogs.com/caoweixiong/p/12325410.html)