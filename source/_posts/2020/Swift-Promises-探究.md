---
title: Swift Promises 探究
permalink: Swift Promises 探究
copyright: ture
keywords: 'iOS,Swift,Promises,iOS库'
description: Swift Promises 探究
tags:
  - - iOS
  - - Swift
  - - Promises
categories:
  - - iOS
  - - Swift
  - - Promises
abbrlink: 61515
date: 2020-05-01 09:40:21
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Promises``` 是链接异步任务的一种方法。 通常，异步任务以块的形式进行回调（或有时两个，一个用于成功，一个用于失败），该回调在异步操作完成时被调用。 要执行多个异步操作，你必须将第二个嵌套在第一个的完成块中：

``` Swift
APIClient.fetchCurrentUser(success: { currentUser in
	APIClient.fetchFollowers(user: currentUser, success: { followers in
		// you now have an array of followers
	}, failure: { error in
		// handle the error
	})
}, failure: { error in
	// handle the error
})
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Promises``` 是一种形式化这些完成模块的方法，以使链接异步过程变得更加容易。 如果系统知道成功和失败的代码，那么编写这些异步操作将变得更加容易。 例如，编写可重复使用的代码可以：

+ 最后执行一个相关的异步操作链，并带有一个完成块
+ 一个完成块同时执行许多独立的异步操作
+ 开启许多异步操作并返回第一个要完成的值
+ 重试异步操作
+ 为异步操作添加超时

<!-- more -->


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的代码示例转换为 ```Promise``` 时，如下所示：

``` Swift
APIClient.fetchCurrentUser().then({ currentUser in
	return APIClient.fetchFollowers(user: currentUser)
}).then({ followers in
	// you now have an array of followers
)}.onFailure({ error in
	// hooray, a single failure block!
})
```

（你会注意到， ```promise``` 是将嵌套/缩进代码转换为 ```flat``` 代码的东西： ```promise``` 是 ```monad``` 。）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```JavaScript社区``` 中， ```promise``` 逐渐兴起。因为 ```Node.js``` 被设计为具有许多异步功能，所以即使是简单的任务也需要具有异步回调的方法调用链。即使仅执行了其中的3或4个操作，操作也变得很笨拙。 ```Promise``` 挽救了这一天，现在已成为 ```JavaScript ES6``` 官方规范的一部分。这篇[**```博客文章```**](http://www.mattgreer.org/articles/promises-in-wicked-detail/ "") 详细介绍了 ```JavaScript``` 的 ```promise``` 如何运作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```JavaScript Promise``` 实现的一大优点是有一个非常明确定义的规范，称为 **A +** ，可以在 [**```promisejs.org```**](https://www.promisejs.org/ "") 中找到。这意味着由于 ```JavaScript``` 的弱类型系统，可能会出现多个 ```promise``` 实现，并且它们可以完全互操作。只要你的 ```Promise``` 实现具有符合规范的 ```then函数``` ，就可以将其与其他库中的 ```promise链接``` 在一起。这太棒了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编写 ```Backchannel API（位于Node中）``` 时，我开始喜欢 ```Promises``` 。  **A+规范** 具有一个非常不错的 ```API``` ，避免了你希望在 ```monad``` 上使用的功能名称，以便于这样更简单，更易于理解（将其重载为 ```flatMap和map``` ）。尽管该 ```API``` 并非适合所有人（特别是，我可以完全理解为什么你偏爱函数名称的显式性），但我确实很喜欢它，并且着手在 ```Swift``` 中实现类似的库。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以在 [**```Github```**](https://github.com/khanlou/Promise "") 上找到此库。编写过程很有启发性，我想分享一些我在这里学到的东西。

</br>

# **Enums**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是的，大家都知道。 枚举很棒。 但是因为 ```Promises``` 本质上是一个 **状态机** ，所以枚举在这里特别适合。  ```JavaScript``` 的 ```Promise``` 的参考实现开始如下：

``` Swift
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise() {
  // store state which can be PENDING, FULFILLED or REJECTED
  var state = PENDING;

  // store value or error once FULFILLED or REJECTED
  var value = null;

  // store success & failure handlers attached by calling .then or .done
  var handlers = [];
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果尝试，我无法为 ```Swift的枚举``` 构想出更完美的例子。 这是 ```Swift``` 中的相同代码：

``` Swift
enum State<Value> {
    case Pending
    case Fulfilled(value: Value)
    case Rejected(error: ErrorType)
}

final class Promise<Value> {    
    private var state: State<Value>
    private var callbacks: [Callback<Value>] = []
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于附加数据取决于 ```Promise``` 所处的特定状态，因此附加数据将作为关联值存储在每个枚举案例中。 由于将 ```Promise``` 置于 ```.Pending状态``` 并没有任何价值，因此枚举使其在类型系统中完全无法表达。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我唯一的批评是，泛型类型不能嵌套在其他类型中。

</br>

# **Type systems**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建新的 ```JavaScript Promise``` 时，可以使用便捷的初始化程序：

``` JavaScript
var promise = new Promise(function(resolve, reject) {
	someAsyncRequest(function(error, result) {
		if (error) {
			reject(error);
		}
		resolve(result);
	});
});
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你将其传递给一个具有以下两个功能的函数：一个用于 ```Promise``` 是否成功，另一个用于 ```Promise``` 是否失败。 对于这两个功能，顺序很重要。 而且由于 ```JavaScript``` 不是类型安全的，如果你在上面第一行中对函数进行了错误排序，编写了 ```reject``` ， ```resolve``` （我做得比我想承认的要多得多），你可以轻松地将错误传递给 resolve 功能。 ```另一方面，Swift``` 的类型安全性意味着 ```reject``` 函数的类型为 ```（ErrorType）-> Void``` ，并且不会接受你的成功结果。 担心我会搞混 ```reject``` 和 ```resolve``` 功能的顺序，这已经成为过去。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Promise类型``` 是 ```Value``` 之上的泛型， ```Value``` 是它产生的值的类型。 这意味着你可以依靠类型推断来编写没有类型的代码。

``` JS
let promise = Promise(value: "initialValue") // a fulfilled Promise<String>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ```promise``` 通常是链接在一起的，因此依靠推断来找出你的类型将是特别有用的。 必须在链中的每个步骤中添加显式类型将非常令人沮丧，并且最终不会特别像 ```Swift``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我对此的第一个破解也是对 ```Error的泛型``` 。 这种严格性意味着要实现 ```promise``` ，就需要你每次都预先指定错误的类型。

``` JS
let promise = Promise<String, APIError>(value: "initialValue")
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这在以前的简单代码行中增加了很多不必要的负担，因此我删除了指定错误类型的功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不幸的是，删除显式错误类型意味着我不得不错过一个小型的类型系统好东西。 如果你创建一个名为 ```NoError``` 的空枚举，则可以有效地表示诺言不会失败。 由于无法初始化空的枚举，因此无法使 ```promise``` 进入 ```rejected``` 状态。 这是一个可悲的损失，但是最终，我认为这是值得的，因为它使在其他情况下使用 ```promise``` 更加简单。 我希望在实践中使用该课程可以让我深入了解这是否是一个明智的决定。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与此相关， ```Swift``` 的泛型清单包含 ```“默认泛型参数”``` ，这将是解决此问题的好方法：你可以说默认值为 ```ErrorType``` ，并且如果有人想更具体地讲，他们就有这种能力。


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```Promise``` 类型是 ```monad``` ，这意味着你可以在其上调用 ```flatMap``` 。你传递给 ```flatMap``` 的函数将返回一个新的 ```Promise``` ，并且 ```Promise``` 的状态成为链的状态。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是， ```flatMap函数``` 的名称是完全不可理解的。它无法以一种易于阅读的方式来表示此处实际发生的情况。这是我偏爱 ```A+``` 的 ```Promise API``` 的部分原因。  ```JavaScript``` 中的 ```then函数``` 被重载，以充当 ```flatMap``` （为链返回一个新的承诺）和 ```map``` （为链中的下一个承诺返回一个新值）。那么现在的意思就是“不做下一步”，而不必考虑下一步的工作方式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 ```Swift的类型系统``` 知道函数何时返回 ```Void``` ，因此还可以重载以接受不返回任何内容的函数。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一旦编写了该类的基本实现，就编写了一些测试。 我对 ```XCTest``` 的 ```ExpectationWithDescription``` 和 ```waitForExpectationsWithTimeout``` 有了一些经验，它们是非常不错的 ```API``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为 ```Promise类``` 提供一整套测试非常有用。 与往常一样，编写测试会产生一些前期费用，但这完全值得。 当我重构和清理此代码时，测试捕获了许多错误。  ```promise``` 实现非常多样，有关代码执行顺序的微小细节以微妙的方式改变了类的行为。 拥有一个确认重构确实是同构的测试套件非常棒。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为 ```Promise``` 本质上处理 线程和异步性 ，所以它必须是 ```线程安全``` 的类。为了使该类具有线程安全性，需要从同一队列中全部访问其实例变量。这比我预期的要难。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特别是其中两个测试非常不稳定，我运行测试套件每5-10次就会失败一次。没有什么比片状测试更可怕的了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中一项不稳定的测试导致了 ```EXC_BAD_ACCESS``` 的产生，这非常令人困惑，因为我无法想到 ```Swift``` 中的一种方式来访问不良内存。我花了一段时间，但最终得到一条日志消息，提示它是线程问题。我正在同时将多个线程中的东西添加到数组中。我更正了访问实例变量的代码，以正确使用调度队列，并且不稳定的测试变得可靠。
