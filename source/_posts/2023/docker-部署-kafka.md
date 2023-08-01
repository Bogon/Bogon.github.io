---
title: 'docker: 部署 kafka'
description: 'docker: 部署 kafka'
permalink: 'docker: 部署 kafka'
copyright: true
date: 2023-08-01 08:51:19
keywords:
tags:
categories:
---

# 单节点安装
## 环境说明
+ Docker version 23.0.5, build bc4487a
+ kafka 

## 拉取镜像
```Bash
docker pull wurstmeister/kafka
```

<!--more-->

## 部署 kafka
```Bash
docker run -d --name kafka -p 9002:9002 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.9:2181/kafka -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.9:9002 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9002 -v /etc/localtime:/etc/localtime wurstmeister/kafka

docker run -d --restart=always --log-driver json-file --log-opt max-size=100m --log-opt max-file=2 --name kafka -p 9002:9002 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.9:2181/kafka -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.9:9002 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9002 -v /etc/localtime:/etc/localtime wurstmeister/kafka
```
+ 参数说明：
    ```-e KAFKA_BROKER_ID=0  在kafka集群中，每个kafka都有一个BROKER_ID来区分自己
        -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.9:2181/kafka 配置zookeeper管理kafka的路径192.168.1.9:2181/kafka
        -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.9:9002  把kafka的地址端口注册给zookeeper，如果是远程访问要改成外网IP,类如Java程序访问出现无法连接。
        -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9002 配置kafka的监听端口
        -v /etc/localtime:/etc/localtime 容器时间同步虚拟机的时间```

## 测试安装是否成功
### 进入到 kafka 容器
```Bash
docker exec -it 容器id bash
cd /opt/kafka_2.13-2.8.1/bin
```

### 创建主题
```Bash
kafka-topics.sh --create --zookeeper 192.168.1.9:2181/kafka --replication-factor 1 --partitions 1 --topic kafkatest
```

### 开启终端 添加消息
```Bash
kafka-console-producer.sh --broker-list localhost:9002 --topic kafkatest
```
### 消费消息
```Bash
kafka-console-consumer.sh --bootstrap-server 192.168.1.9:9002 --topic kafkatest --from-beginning
```

> kafka v2.5 之后 消费消息使用  --bootstrap-server 参数；端口使用：9092 或者是如上配置的 9002。