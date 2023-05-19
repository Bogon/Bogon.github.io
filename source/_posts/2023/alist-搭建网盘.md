---
title: 'alist: 搭建网盘'
description: 'alist: 搭建网盘'
permalink: 'alist: 搭建网盘'
copyright: true
abbrlink: 5150
date: 2023-05-06 18:09:25
keywords:
tags:
categories:
---


https://alist.nn.ci/zh/guide/install/docker.html#%E5%8F%91%E8%A1%8C%E7%89%88%E6%9C%AC

安装指令：
docker run -d --restart=always -v /home/senyas/data:/home/senyas/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist-aria2:latest

获取管理员密码：
docker exec -it alist ./alist admin