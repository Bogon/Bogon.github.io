---
title: Docker 启动 MySQL 指北
description: Docker 启动 MySQL 指北
permalink: Docker 启动 MySQL 指北
copyright: true
keywords: 'go,docker,MySQL'
tags:
  - Docker
  - go
  - MySQL
categories:
  - Docker
  - go
  - MySQL
abbrlink: 32426
date: 2022-07-29 21:27:17
---

# 搜索 `MySQL` 镜像
```Bash
docker search mysql
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-01.png)

<!--more--->

# 拉取 `MySQL` 镜像
```Bash
docker pull mysql:lastest
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-02.png)

# 安装 `MySQL`
```Bash
docker run -itd --name mysql-demo -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

+ `-t`： 选项让 `Docker` 分配一个伪终端`（pseudo-tty）`并绑定到容器的标准输入上
+ `-i`： 则让容器的标准输入保持打开
+ `-d`： 后台运行
+ `--name`： 容器名称
+ `-p`： 映射端口，3307 本机端口，:3306 容器端口
+ `-e`：设置环境变量

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-03.png)


![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-04.png)


# 查看启动的容器
```Bash
docker ps
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-06.png)

# 查询已创建容器
```Bash
docker ps -a
# 创建在运行容器
docker ps -s
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-05.png)

# 启动容器
```Bash
docker start 容器名称|容器ID
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-07.png)

# 停止容器
```Bash
docker stop 容器名称|容器ID
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/docker-mysql/docker-mysql-08.png)

# 补充操作
```Bash
# 删除容器
docker rm 容器名称|容器ID

# 重启容器
docker restart 容器名称|容器ID

# 杀掉运行中的容器
docker kill 容器名称|容器ID
```