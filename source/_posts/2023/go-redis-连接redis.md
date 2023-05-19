---
title: 'go-redis: 连接redis'
description: 'go-redis: 连接redis'
permalink: 'go-redis: 连接redis'
copyright: true
date: 2023-05-08 11:44:43
keywords:
tags:
categories:
---

# 什么是 `Redis`
首先要说 `Redis`,应该先说一下 `nosql`,NoSQL(NoSQL = Not Only SQL )，意即“不仅仅是SQL”，泛指非关系型的数据库。随着互联网web2.0网站的兴起，传统的关系数据库在应对web2.0网站，特别是超大规模和高并发的SNS类型的web2.0纯动态网站已经显得力不从心，暴露了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL数据库的产生就是为了解决**大规模数据集合多重数据种类**带来的挑战，尤其是大数据应用难题，包括超大规模数据的存储。

`Redis`:`REmote Dictionary Server`(远程字典服务器)是完全开源免费的，用C语言编写的，遵守BSD协议，是一个高性能的`(key/value)`分布式内存数据库，基于内存运行并支持持久化的NoSQL数据库，是当前最热门的NoSql数据库之一,也被人们称为数据结构服务器。

# `Redis` 使用场景

## 热点数据缓存
由于 `Redis` 访问速度块、支持的数据类型比较丰富，所以 `Redis` 很适合用来存储热点数据，另外结合 `expire` ，我们可以设置过期时间然后再进行缓存更新操作，这个功能最为常见，我们几乎所有的项目都有所运用。

## 限时业务运用
`redis`中可以使用`expire`命令设置一个键的生存时间，到时间后redis会删除它。利用这一特性可以运用在限时的优惠活动信息、手机验证码等业务场景。

## 计数相关业务
`Redis`由于`incrby`命令可以实现原子性的递增，所以可以运用于高并发的秒杀活动、分布式序列号的生成、具体业务还体现在比如限制一个手机号发多少条短信、一个接口一分钟限制多少请求、一个接口一天限制调用多少次等等。

## 排行榜问题
关系型数据库在排行榜方面查询速度普遍偏慢，所以可以借助`Redis`的`SortedSet`进行热点数据的排序。

在奶茶活动中，我们需要展示各个部门的点赞排行榜， 所以我针对每个部门做了一个 `SortedSet`,然后以用户的 `openid` 作为上面的 `username` ,以用户的点赞数作为上面的 `score` , 然后针对每个用户做一个 `hash` ,通过`zrangebyscore`就可以按照点赞数获取排行榜，然后再根据`username`获取用户的`hash`信息，这个当时在实际运用中性能体验也蛮不错的。

## 分布式锁
这个主要利用`Redis`的`setnx`命令进行，`setnx："set if not exists"`就是如果不存在则成功设置缓存同时返回1，否则返回0 ，这个特性在后台中有所运用，因为我们服务器是集群的，定时任务可能在两台机器上都会运行，所以在定时任务中首先 通过`setnx`设置一个`lock`，如果成功设置则执行，如果没有成功设置，则表明该定时任务已执行。 当然结合具体业务，我们可以给这个`lock`加一个过期时间，比如说30分钟执行一次的定时任务，那么这个过期时间设置为小于30分钟的一个时间 就可以，这个与定时任务的周期以及定时任务执行消耗时间相关。

当然我们可以将这个特性运用于其他需要分布式锁的场景中，结合过期时间主要是防止死锁的出现。

## 延时操作
这个目前我做过相关测试，但是还没有运用到我们的实际项目中，下面我举个该特性的应用场景。 比如在订单生产后我们占用了库存，10分钟后去检验用户是够真正购买，如果没有购买将该单据设置无效，同时还原库存。 由于`redis`自2.8.0之后版本提供`Keyspace Notifications`功能，允许客户订阅`Pub/Sub`频道，以便以某种方式接收影响`Redis`数据集的事件。 所以我们对于上面的需求就可以用以下解决方案，我们在订单生产时，设置一个`key`，同时设置10分钟后过期， 我们在后台实现一个监听器，监听`key`的实效，监听到`key`失效时将后续逻辑加上。 当然我们也可以利用`rabbitmq`、`activemq`等消息中间件的延迟队列服务实现该需求。

## 分页、模糊搜索
`Redis`的`set`集合中提供了一个`zrangebylex`方法，语法如下：`ZRANGEBYLEX key min max [LIMIT offset count]`。通过`ZRANGEBYLEX zset - + LIMIT 0 10` 可以进行分页数据查询，其中`- +`表示获取全部数据，`zrangebylex key min max` 这个就可以返回字典区间的数据，利用这个特性可以进行模糊查询功能，这个也是目前我在`redis`中发现的唯一一个支持对存储内容进行模糊查询的特性。

## 点赞、好友等相互关系的存储
`Redis set`对外提供的功能与`list`类似是一个列表的功能，特殊之处在于`set`是可以自动排重的，当你需要存储一个列表数据，又不希望出现重复数据时，`set`是一个很好的选择，并且`set`提供了判断某个成员是否在一个`set`集合内的重要接口，这个也是`list`所不能提供的。 又或者在微博应用中，每个用户关注的人存在一个集合中，就很容易实现求两个人的共同好友功能。

## 队列
由于`Redis`有`list push`和`list pop`这样的命令，所以能够很方便的执行队列操作。　


# `Redis` 演示
首先在自己的服务器上安装 `Redis`，推荐使用 `Docker` 安装，便于管理。安装完成之后使用 [`go-redis`](https://github.com/redis/go-redis) 完成数据库链接, `go-redis` [使用文档](https://redis.uptrace.dev/zh/guide/go-redis.html)。

## 创建项目
在 `go/src` 下初始化：
```bash
go mod init go-redis/demo
```

安装 `go-redis/v9` :
```Bash
go get github.com/redis/go-redis/v9
```

显示下面提示表示安装成功：
```Bash
➜  day01 go get github.com/redis/go-redis/v9
go: downloading github.com/redis/go-redis/v9 v9.0.4
go: downloading github.com/redis/go-redis v6.15.9+incompatible
go: downloading github.com/cespare/xxhash/v2 v2.2.0
go: downloading github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f
go: added github.com/cespare/xxhash/v2 v2.2.0
go: added github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f
go: added github.com/redis/go-redis/v9 v9.0.4
```
