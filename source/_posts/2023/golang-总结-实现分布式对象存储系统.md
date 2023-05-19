---
title: 'golang(总结): 实现分布式对象存储系统'
description: 'golang(总结): 实现分布式对象存储系统'
permalink: 'golang(总结): 实现分布式对象存储系统'
copyright: true
date: 2023-04-13 13:52:25
keywords: golang,分布式,对象存储
tags: 
	- golang
	- 分布式
	- 对象存储
categories:
	- golang
	- 分布式
	- 对象存储
---

# 消息队列 [RabbitMQ](https://rabbitmq.com)

[工作模式(https://rabbitmq.com/getstarted.html)] 消息发布与订阅 (消费规则)

## RabbitMQ 安装
使用 Docker 安装 RabbitMQ:
```Bash
docker pull rabbitmq
docker pull rabbitmq:3.11-management
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management
```
启动成功：
```Bash
2023-04-13 06:29:58.921971+00:00 [info] <0.867.0> started TCP listener on [::]:5672
 completed with 4 plugins.
2023-04-13 06:29:59.143192+00:00 [info] <0.722.0> Server startup complete; 4 plugins started.
2023-04-13 06:29:59.143192+00:00 [info] <0.722.0>  * rabbitmq_prometheus
2023-04-13 06:29:59.143192+00:00 [info] <0.722.0>  * rabbitmq_management
2023-04-13 06:29:59.143192+00:00 [info] <0.722.0>  * rabbitmq_web_dispatch
2023-04-13 06:29:59.143192+00:00 [info] <0.722.0>  * rabbitmq_management_agent
```

进入终端操作 RabbitMQ：
```Bash
docker exec -it rabbitmq  /bin/bash
```

## 创建 Exchange 关系消息队列
这里采用 `Publish/Subscribe` 的工作模式，首先需要创建2个 Exchange：apiServices, dataServices,命令如下：
```Bash
rabbitmqadmin declare exchange name=apiServices type=fanout
rabbitmqadmin declare exchange name=dataServices type=fanout
```

创建用户：
```Bash
rabbitmqctl add_user test test
```

给用户设置权限：
```Bash
 rabbitmqctl set_permissions -p / test ".*" ".*" ".*"
```

帮助文档：
```
root@88344f80cbcb:/#  rabbitmqadmin help subcommands
Usage
=====
  rabbitmqadmin [options] subcommand

  where subcommand is one of:

Display
=======

  list connections [<column>...]
  list channels [<column>...]
  list consumers [<column>...]
  list exchanges [<column>...]
  list queues [<column>...]
  list bindings [<column>...]
  list users [<column>...]
  list vhosts [<column>...]
  list permissions [<column>...]
  list nodes [<column>...]
  list parameters [<column>...]
  list policies [<column>...]
  list operator_policies [<column>...]
  list vhost_limits [<column>...]
  show overview [<column>...]

Object Manipulation
===================

  declare exchange name=... type=... [auto_delete=... durable=... internal=... arguments=...]
  declare queue name=... [auto_delete=... durable=... arguments=... node=... queue_type=...]
  declare binding source=... destination=... [destination_type=... routing_key=... arguments=...]
  declare vhost name=... [tracing=...]
  declare user name=... password=... OR password_hash=... tags=... [hashing_algorithm=...]
  declare permission vhost=... user=... configure=... write=... read=...
  declare parameter component=... name=... value=...
  declare policy name=... pattern=... definition=... [priority=... apply-to=...]
  declare operator_policy name=... pattern=... definition=... [priority=... apply-to=...]
  declare vhost_limit vhost=... name=... value=...
  delete exchange name=...
  delete queue name=...
  delete binding source=... destination_type=... destination=... [properties_key=...]
  delete vhost name=...
  delete user name=...
  delete permission vhost=... user=...
  delete parameter component=... name=...
  delete policy name=...
  delete operator_policy name=...
  delete vhost_limit vhost=... name=...
  close connection name=...
  purge queue name=...

Broker Definitions
==================

  export <file>
  import <file>

Publishing and Consuming
========================

  publish routing_key=... [payload=... properties=... exchange=... payload_encoding=...]
  get queue=... [count=... ackmode=... payload_file=... encoding=...]

  * If payload is not specified on publish, standard input is used

  * If payload_file is not specified on get, the payload will be shown on
    standard output along with the message metadata

  * If payload_file is specified on get, count must not be set
```


