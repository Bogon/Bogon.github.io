---
title: 'minio: 部署分布式文件存储服务(纠删码EC)'
description: 'minio: 部署分布式文件存储服务(纠删码EC)'
permalink: 'minio: 部署分布式文件存储服务(纠删码EC)'
copyright: true
date: 2023-04-25 14:43:59
keywords: minio,分布式,文件存储
tags:
	- 分布式
categories:
	- 分布式
	- 文件存储
---

本文展示搭建一个具备纠删码机制的分布式文件存储服务。

# 单机部署
```Bash
sudo docker run -p 9000:9000 -p 9090:9090 --name minio \
-d --restart=always \
-e "MINIO_ACCESS_KEY=admin" \
-e "MINIO_SECRET_KEY=12345678" \
-v /data/minio/data:/data \
-v /data/minio/config:/root/.minio \ 
minio/minio server /data --console-address ":9090"
```

<!--more-->

## 部署纠删码
```Bash
sudo docker run -p 9000:9000 -p 50000:50000 --name minio \
-d --restart=always \
-e "MINIO_ACCESS_KEY=admin" \
-e "MINIO_SECRET_KEY=12345678" \
-v /data/minio/data1:/data1 \
-v /data/minio/data2:/data2 \
-v /data/minio/data3:/data3 \
-v /data/minio/data4:/data4 \
-v /data/minio/data5:/data5 \
-v /data/minio/data6:/data6 \
-v /data/minio/data7:/data7 \
-v /data/minio/data8:/data8 \
minio/minio server /data{1...8} --console-address ":50000"
```

![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-01.png)

![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-02.png)

![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-03.png)

## 常用命令
```Bash
mc config host ls
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-04.png)

```Bash
mc mb minio-server/images # 在 minio-server 节点下创建 buckets
```

```
mc ls minio-server  # 查询当前节点下的 buckets
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-05.png)

### 上传 下载

```Bash
mc cp minio/images/0vBc0hN.png minio-server/images		# 上传 图片 到 bucket images 下
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-06.png)

```Bash
mc ls minio-server/images  #  查询 bucket images 下的资源
mc cp minio-server/images/0vBc0hN.png ./ # 下载 bucket 中图片到当前目录
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-07.png)

```Bash
mc rm minio-server/images/0vBc0hN.png  # 删除 bucket 下的文件
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-08.png)


### bucket 管理
```Bash
# 创建 bucket
mc mb minio-server/bucket01
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-09.png)

```Bash
# 删除 bucket
mc mb minio-server/bucket01
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-10.png)

```Bash
# 强制删除  bucket 中有文件
mc rb --force minio-server/bucket01
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-11.png)


```Bash
# 查询磁盘使用情况
mc mc minio-server/images
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-12.png)


### mc admin使用
```
service     服务重启并停止所有MinIO服务器 
update      更新更新所有MinIO服务器 
info        信息显示MinIO服务器信息 
user        用户管理用户
group       小组管理小组
policy      MinIO服务器中定义的策略管理策略 
config      配置管理MinIO服务器配置
heal        修复MinIO服务器上的磁盘，存储桶和对象 
profile     概要文件生成概要文件数据以进行调试 
top         顶部提供MinIO的顶部统计信息
trace       跟踪显示MinIO服务器的http跟踪 
console     控制台显示MinIO服务器的控制台日志 
prometheus  Prometheus管理Prometheus配置 
kms         kms执行KMS管理操作
```

```Bash
mc admin user --help
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-13.png)

```Bash
# 创建 用户 
mc admin user add minio-server char	# 创建用户char
mc admin user add minio-server char01 12345678 # 创建用户：char01 密码:12345678
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-14.png)

```Bash
 mc admin user remove minio-server char01 # 删除用户 char01
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-15.png)


```Bash
# 禁用用户
mc admin user disable minio-server char
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-16.png)

```Bash
# 启用用户
mc admin user enable minio-server char
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-17.png)


### 策略管理
```Bash
mc admin policy --help
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-18.png)

```Bash
# 查看策略信息
mc admin policy info minio-server readonly
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-19.png)


#### 添加策略
编辑自定义策略：
```Json
{
    "Version": "2012-10-17", 
    "Statement": [
        {
            "Effect": "Allow", 
            "Action": [
                "s3:GetBucketLocation", 
                "s3:GetObject"
            ], 
            "Resource": [
                "arn:aws:s3:::images"
            ]
        }, 
        {
            "Effect": "Allow", 
            "Action": [
                "s3:*"
            ], 
            "Resource": [
                "arn:aws:s3:::images/*"
            ]
        }
    ]
}
```

可以在策略中设置的动作:
```JSON
"Action": [
		"s3:GetBucketLocation", 
    "s3:ListBucket",
    "s3:GetObject", 
    "s3:PutObject", 
    "s3:DeleteObject" 
 ]
```

将fileReadonly_imagesAll.json添加到策略数据库:
```Bash
mc admin policy create minio-server fileReadonlyImagesAll minio/config/fileReadonly_imagesAll.json
```
![](https://raw.githubusercontent.com/Bogon/blog_images/main/minio/minio-20.png)

