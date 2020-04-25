---
title: NSCODER和SWIFT初始化
permalink: NSCODER和SWIFT初始化
date: 2020-04-25 09:36:42
keywords: iOS,UIKit,设计模式,初始化,NSCoder,Swift
copyright: ture
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您正在使用 ```Swift``` 并想对实现 ```NSCoding``` 的东西进行子类化（例如 ```UIView```，```UIViewController``` 等），则可能会遇到麻烦的情况。即，```NSCoding``` 协议需要 ```init(coder：aDecoder)``` 初始化程序，这意味着如果你为超类重写了指定的初始化程序，则需要实现该初始化程序。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那就好了，但是 ```Swift``` 在确保对类的所有属性进行超级严格的调用之前，都要确保在 ```init()``` 中分配了一个值。这意味着，如果您想提供自己的初始化程序，则无法执行以下操作：

``` Swift
class FooViewController: UIViewController {  
  let name: String

  init() {
    name = "Bar"
    super.init(nibName: nil, bundle:nil)
  }

  required init(coder: NSCoder) {
    super.init(coder: coder)
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```init（coder :)``` 初始值设定项未设置 ```name``` 属性，因此不会进行编译。你可以在两个初始值设定项中都重复初始化和设置名称，但是当你在init中进行了很多工作时，这很糟糕（如果希望尽可能避免使用可选属性，则应该这样做）。

在 Objective-C 中，如果要在多个 ```init``` 方法之间共享初始化逻辑，则只需定义一个通用的 **“setup”** 方法即可执行所有共享的东西，并从两个初始化器中调用它：

``` Swift
- (instancetype) init {
  self = [super init];
  if (!self) { return self; }

  [self setup];
  return self;
}

- (instancetype) initWithCoder:(NSCoder *)aDecoder {
  self = [super initWithCoder:aDecoder];
  if (!self) { return self; }

  [self setup];
  return self;
}

- (void) setup {
  self.name = @"Foo";
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  这种方式不会立即就创建出你想要的对象。问题在于，在这两个初始化程序中，我们都在调用    ```[super init]``` 之前，先给 ```self.name``` 分配了一个值，但这在 ```Swift``` 语法中是不可行的。我们也不能将对 ```self.setup``` 的调用移到对 ```super.init（）``` 的调用之上，因为在类通过调用 ```super.init（）``` 完全初始化之后，才允许您引用 ```self``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  那么，如何将这只鸡从鸡蛋中取出并放到盘子上呢？好吧，我们要等到初始化后才能对 ```self``` 调用方法，但是只要我们从 **“convienience”** 初始化程序中调用它，就可以调用另一个 ```init``` 。仅通过示例进行解释可能更容易：

``` Swift

class FooViewController: UIViewController {  
  let name: String

  init(_ coder: NSCoder? = nil) {
    name = "Bar"

    if let coder = coder {
      super.init(coder: coder)
    } else {
      super.init(nibName: nil, bundle:nil)
    }
  }

  required convenience init(coder: NSCoder) {
    self.init(coder)
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在指定的初始化程序中添加了一个可选的 ```NSCoder``` 参数，并将其默认设置为 ```nil``` ，因此我们仍然可以像以前一样在没有任何参数的情况下调用它。但是，现在已将```NSCoding``` 协议中要求的 ```init（coder :)``` 初始值设定项标记为**convienience**，这意味着它可以调用指定的初始值设定项并传入编码器。

在指定的 ```init``` 中，我们检查 ```coder``` 是否为非 ```nil``` （如果让coder = conditional为条件），如果是，则调用 ```super.init（coder :)``` 。如果为 ```nil```，我们将执行本来应该做的事情，并调用 ```super.init（nibName：nil，bundle：nil）```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，编译器很高兴在调用 ```super.init（）``` 之前为属性分配值，并且可以将初始化逻辑放在一个地方。如果要在情节提要中使用 ```ViewController``` ，则框架将调用init（coder :)，如果要以编程方式创建一个，则可以说 ```let fooVC = FooViewController（）```。