---
title: Swift对象池设计模式
permalink: Swift对象池设计模式
copyright: ture
date: 2020-04-26 10:56:07
keywords: iOS,UIKit,设计模式,抽象,Swift,对象池设计模式,重构,object pool design pattern
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [对象池设计模式]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本快速教程中，我将解释并向你展示如何使用 ```Swift``` 编程语言实现对象池设计模式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[```对象池（英语：object pool pattern）```](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E6%B1%A0%E6%A8%A1%E5%BC%8F "对象池")是一种设计模式。一个对象池包含一组已经初始化过且可以使用的对象，而可以在有需求时创建和销毁对象。池的用户可以从池子中取得对象，对其进行操作处理，并在不需要时归还给池子而非直接销毁它。这是一种特殊的工厂对象。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若初始化、实例化的代价高，且有需求需要经常实例化，但每次实例化的数量较少的情况下，使用对象池可以获得显著的效能提升。从池子中取得对象的时间是可预测的，但新建一个实例所需的时间是不确定。


<!-- more -->

</br>

# **Swift 中的通用对象池**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对象池模式是一种创新的设计模式。其背后的主要思想是，首先创建一组对象（一个池），然后从该池中获取和释放对象，而不是不断创建和释放它们。 👍

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么？性能改进。例如， ```Dispatch``` 框架使用对象池模式为开发人员提供预先创建的队列，因为创建队列（带有关联线程）是相对昂贵的操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对象池模式的另一个用例是 ```worker``` 。例如，您必须从Web上下载数百个图像，但是您只想同时下载5个图像，则可以使用5个工作对象池来完成。分配少量的工作程序（实际上将完成下载任务）可能要比为每个图像下载请求创建一个新的工作程序便宜得多。 🖼

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么这种模式的缺点呢？有一些。例如，如果池中有工作程序，则它们可能包含状态或敏感的用户数据。你也必须非常小心。重设所有内容。同样，如果你在多线程环境中运行，则还必须使池成为线程安全的。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个简单的通用线程安全对象池类：

``` Swift
import Foundation

class Pool<T> {

    private let lockQueue = DispatchQueue(label: "pool.lock.queue")
    private let semaphore: DispatchSemaphore
    private var items = [T]()

    init(_ items: [T]) {
        self.semaphore = DispatchSemaphore(value: items.count)
        self.items.reserveCapacity(items.count)
        self.items.append(contentsOf: items)
    }

    func acquire() -> T? {
        if self.semaphore.wait(timeout: .distantFuture) == .success, !self.items.isEmpty {
            return self.lockQueue.sync {
                return self.items.remove(at: 0)
            }
        }
        return nil
    }

    func release(_ item: T) {
        self.lockQueue.sync {
            self.items.append(item)
            self.semaphore.signal()
        }
    }
}


let pool = Pool<String>(["a", "b", "c"])

let a = pool.acquire()
print("\(a ?? "n/a") acquired")
let b = pool.acquire()
print("\(b ?? "n/a") acquired")
let c = pool.acquire()
print("\(c ?? "n/a") acquired")

DispatchQueue.global(qos: .default).asyncAfter(deadline: .now() + .seconds(2)) {
    if let item = b {
        pool.release(item)
    }
}

print("No more resource in the pool, blocking thread until...")
let x = pool.acquire()
print("\(x ?? "n/a") acquired again")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在示例中，实现仅几行。 你具有通用池项的线程安全数组，一个调度信号量（如果池中没有可用对象将阻塞该信号量）以及两个方法以实际使用对象池。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在示例中，你可以看到，如果池中没有剩余的对象，则当前队列将被阻塞，直到资源被释放并可以使用为止。 所以要当心，不要意外阻塞主线程！ 😉
