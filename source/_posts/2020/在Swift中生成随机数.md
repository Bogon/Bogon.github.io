---
title: 在Swift中生成随机数
permalink: 在Swift中生成随机数
copyright: ture
keywords: 'iOS,Swift,random'
description: 在Swift中生成随机数
tags:
  - - iOS
  - - Swift
  - - random
categories:
  - - iOS
  - - Swift
  - - random
abbrlink: 28554
date: 2020-04-30 11:23:07
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用最新方法并涵盖一些旧技术，了解在 ```Swift``` 中生成随机值所需的一切。

</br>

# **如何使用Swift生成随机数？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幸运的是，自 ```Swift 4.2``` 起，统一了随机数生成功能。 这意味着你不再需要导入的 ```C API ```，只需在所有平台上使用本机 ```Swift``` 方法即可生成随机值！ 😍

``` Swift
let randomBool = Bool.random()
let randomInt = Int.random(in: 1...6) //dice roll
let randomFloat = Float.random(in: 0...1)
let randomDouble = Double.random(in: 1..<100)
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如你所见，借助 ```Swift语言``` 内置的加密安全随机发生器，现在非常容易生成骰子。 新的随机数生成器 ```API``` 也更擅长分配数字。 旧的 ```arc4random``` 函数存在一些问题，因为由于模偏差的影响，生成的值不均匀地分布在例如1到6之间。 🎲


<!-- more -->

</br>

# **随机数发生器（RNG）**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的这些示例隐式使用了 ```Swift标准库``` 提供的默认随机数生成器 ```（SystemRandomNumberGenerator）``` 。 每个方法都有第二个参数，因此你可以根据需要使用其他RNG。 如果你想改变分布的行为（或者只是给它一些“熵”！🤪），也可以实现自己的 [***```RNG或扩展内置生成器```***](https://github.com/t-ae/rng-extension "") 。

``` Swift
var rng = SystemRandomNumberGenerator()
let randomBool = Bool.random(using: &rng)
let randomInt = Int.random(in: 1...6, using: &rng) //dice roll
let randomFloat = Float.random(in: 0...1, using: &rng)
let randomDouble = Double.random(in: 1..<100, using: &rng)
```
</br>

## ***集合，随机元素***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新的随机 ```API``` 引入了一些不错的 ```集合类型扩展``` 。 现在，选择一个随机元素并混合一个集合中的元素顺序非常简单且高效（同时具有自定义RNG支持）。 😉

``` Swift
let array = ["🐶", "🐱", "🐮", "🐷", "🐔", "🐵"]
let randomArrayElement = array.randomElement()
let shuffledArray = array.shuffled()

let dictionary = [
    "🐵": "🍌",
    "🐱": "🥛",
    "🐶": "🍖",
]
let randomDictionaryElement = dictionary.randomElement()
let shuffledDictionary = dictionary.shuffled()

let sequence = 1..<10
let randomSequenceElement = sequence.randomElement()
let shuffledSequence = sequence.shuffled()

let set = Set<String>(arrayLiteral: "🐶", "🐱", "🐮", "🐷", "🐔", "🐵")
let randomSetElement = set.randomElement()
let shuffledSet = set.shuffled()
```

## ***随机化自定义类型***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也可以在自定义类型上实现随机函数。 为了遵循 ```Swift标准库模式``` ，应牢记两个简单的事情：

+ 为 ```自定义RNG``` 提供一个具有 ```（inout）``` 参数的静态方法
+ 制作使用 ```SystemRandomNumberGenerator``` 的 ```random()``` 方法

``` Swift
enum Animal: String, CaseIterable {
    case dog = "🐶"
    case cat = "🐱"
    case cow = "🐮"
    case pig = "🐷"
    case chicken = "🐔"
    case monkey = "🐵"
}

extension Animal {

    static func random<T: RandomNumberGenerator>(using generator: inout T) -> Animal {
        return self.allCases.randomElement(using: &generator)!
    }

    static func random() -> Animal {
        var rng = SystemRandomNumberGenerator()
        return Animal.random(using: &rng)
    }
}

let random: Animal = .random()
random.rawValue
```

</br>

# **使用GameplayKit生成随机值**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [***```GameplayKit```***](https://developer.apple.com/documentation/gameplaykit "") 提供了许多帮助你处理随机数生成的功能。 框架内提供了各种随机源和发行版，让我们快速看一下它们。

## ***GameplayKit中的随机来源***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```GameplayKit``` 实现了三种随机源算法，其背后的原因是很难生成随机数，但是通常你会使用 ```arc4随机源``` 。 你应该注意，Apple建议你在将其用于重要内容之前将其前769个值重置（将其舍入为1024以使其看起来更好），否则它将产生可猜测的序列。 🔑

**```GKARC4RandomSource```** -好的性能和随机性

**```GKLinearCongruentialRandomSource```** -快速，较少随机

**```GKMersenneTwisterRandomSource```** -随机性好，但速度慢

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以简单地在上述任何一个源上使用 ```nextInt() ```方法从 ```int min``` 到 ```int max``` 生成一个随机数，或者使用 ```nextInt(upperBound:) ```方法从0到上限生成一个随机数。

``` Swift
import GameplayKit

let arc4 = GKARC4RandomSource()
arc4.dropValues(1024) //drop first 1024 values first
arc4.nextInt(upperBound: 20)
let linearCongruential = GKLinearCongruentialRandomSource()
linearCongruential.nextInt(upperBound: 20)
let mersenneTwister = GKMersenneTwisterRandomSource()
mersenneTwister.nextInt(upperBound: 20)
```

## ***随机分布算法***

>**GKRandomDistribution** - 生成随机数的生成器，该随机数在特定范围内，并且在多个采样中表现出特定的分布。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本上可以说，该实现正在尝试为我们提供随机分布的值。 这是共享随机源的默认值。 🤨

>**GKGaussianDistribution** -随机数生成器，在多个采样中遵循高斯分布（也称为正态分布）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```高斯分布``` 是一个整形的随机数生成器，因此中间附近的数字更有可能出现。 换句话说，中间元素的发生率会更高，因此，如果你要模拟骰子掷骰，则3发生的可能性要大于1或6。 😅

>**GKShuffledDistribution** -生成随机数的发生器，这些随机数在许多采样中均匀分布，但是不可能出现相似值的短序列。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公平随机数生成器或混洗分布是一种以均等分布的相等数量生成其每个可能值的方法。 如果我们将骰子掷骰示例保留为6卷，则你可能会得到6、2、1、3、4、5，但永远不会得到6 6 6 1 2 6。

``` Swift
// 6 sided dice
let randomD6 = GKRandomDistribution.d6()
let shuffledD6 = GKShuffledDistribution.d6()
let gaussianD6 = GKGaussianDistribution.d6()
randomD6.nextInt()   // completely random
shuffledD6.nextInt() // see below... // eg. 1
gaussianD6.nextInt() // mostly 3, most likely 2, 4 less likely 1, 6

//goes through all the possible values again and again...
shuffledD6.nextInt() // eg. 3
shuffledD6.nextInt() // eg. 5
shuffledD6.nextInt() // eg. 2
shuffledD6.nextInt() // eg. 6
shuffledD6.nextInt() // eg. 4

// 20 sided dice
let randomD20 = GKRandomDistribution.d20()
let shuffledD20 = GKShuffledDistribution.d20()
let gaussianD20 = GKGaussianDistribution.d20()
randomD20.nextInt()
shuffledD20.nextInt()
gaussianD20.nextInt()

// using custom random source, by default it uses arc4
let mersenneTwister = GKMersenneTwisterRandomSource()
let mersoneTwisterRandomD6 = GKRandomDistribution(randomSource: mersenneTwister, lowestValue: 1, highestValue: 6)
mersoneTwisterRandomD6.nextInt()
mersoneTwisterRandomD6.nextInt(upperBound: 3) //limiting upper bound
```

## ***如何使用GameplayKit随机播放数组？***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以使用 ***arrayByShufflingObjects(in :)*** 方法来混合数组中的元素。 你也可以使用种子值来相同地随机播放元素。 这将是一个随机顺序，但可以预见。 如果你需要在多个设备之间同步两个随机阵列，这将很方便。 📱

``` Swift
let dice = [Int](1...6)

let random = GKRandomSource.sharedRandom()
let randomRolls = random.arrayByShufflingObjects(in: dice)

let mersenneTwister = GKMersenneTwisterRandomSource()
let mersenneTwisterRolls = mersenneTwister.arrayByShufflingObjects(in: dice)

let fixedSeed = GKMersenneTwisterRandomSource(seed: 1001)
let fixed1 = fixedSeed.arrayByShufflingObjects(in: dice) // always the same order
```

## ***GameplayKit最佳实践以生成随机值***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一个共享的随机源，可用于生成随机数。 如果你不想弄乱发行版或资源，这是理想的选择。 此共享的随机对象使用arc4作为源和随机分布。 😉

``` Swift
let sharedRandomSource = GKRandomSource.sharedRandom()
sharedRandomSource.nextBool() // true / false
sharedRandomSource.nextInt() //from int min - to int max
sharedRandomSource.nextInt(upperBound: 6) //dice roll
sharedRandomSource.nextUniform() //float between 0 - 1
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，不建议将 ```GameplayKit框架``` 提供的这些随机数生成解决方案用于加密目的！

</br>

# **Swift 4.2之前的随机生成方法**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于历史原因，我将在这里离开此部分。 😅

## ***arc4random***

``` Swift
arc4random() % 6 + 1 // dice roll
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个 ```C函数``` 在生成骰子掷骰时非常常见，但也很危险，因为它可能导致模偏差（或“孔洞原理”），这意味着某些数字的生成频率比其他数字高。 请不要使用它。 😅

## ***arc4random_uniform***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此方法将返回均匀分布的随机数。 这是在 ```Swift 4.2``` 之前生成随机数的最佳/推荐方式，因为如果上限不是2的幂，它可以避免模偏差问题。

``` Swift
func rndm(min: Int, max: Int) -> Int {
    if max < min {
        fatalError("The max value should be greater than the min value.")
    }
    if min == max {
        return min
    }
    return Int(arc4random_uniform(UInt32((max - min) + 1))) + min
}
rndm(min: 1, max: 6) //dice roll
```

## ***drand48***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```drand48函数``` 返回介于 ```0到1``` 之间的随机浮点数。它对于为随机 ```UIColor``` 对象生成颜色值非常有用。 另一面要注意的是，它会生成一个伪随机数序列，并且你必须使用 ```srand48``` 和通常是时间参数来提供种子值。 🤷‍♂️

``` Swift
let red = CGFloat(drand48())
let green = CGFloat(drand48())
let blue = CGFloat(drand48())
```

## ***Linux支持，glibc和rand方法***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我在下面使用此代码段，以便在 ```appleOS``` 和 ```linux平台``` 上生成随机数。 我知道这并不完美，但是它为我做了工作。 🤐

``` Swift
#!/usr/bin/env swift

#if os(iOS) || os(tvOS) || os(macOS) || os(watchOS)
    import Darwin
#endif
#if os(Linux)
    import Glibc
#endif

public func rndm(to max: Int, from min: Int = 0) -> Int {
    #if os(iOS) || os(tvOS) || os(macOS) || os(watchOS)
        let scale = Double(arc4random()) / Double(UInt32.max)
    #endif
    #if os(Linux)
        let scale = Double(rand()) / Double(RAND_MAX)
    #endif
    var value = max - min
    let maximum = value.addingReportingOverflow(1)
    if maximum.overflow {
        value = Int.max
    }
    else {
        value = maximum.partialValue
    }
    let partial = Int(Double(value) * scale)
    let result = partial.addingReportingOverflow(min)
    if result.overflow {
        return partial
    }
    return result.partialValue
}

rndm(to: 6)
```

现在我们已经有了 ```Swift 4.2``` ，我想鼓励大家改编新的随机数生成 API方法 。 我非常高兴 ```苹果公司和社区``` 能够很好地解决这个问题，结果令人赞叹！ 👏👏👏


