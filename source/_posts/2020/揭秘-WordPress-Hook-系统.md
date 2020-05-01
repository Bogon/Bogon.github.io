---
title: 揭秘 WordPress Hook 系统
description: 揭秘 WordPress Hook 系统
permalink: 揭秘 WordPress Hook 系统
copyright: ture
date: 2020-04-26 17:50:08
keywords: iOS,UIKit,设计模式,抽象,Swift,模块,WordPress,重构,Hook
tags:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
    - [Modules And Hooks]

categories:
    - [iOS]
    - [设计模式]
    - [UIKit]
    - [Swift]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你一直在使用 ```WordPress``` 开发网站（包括插件和主题开发），那么你可能已经听说过以下术语：```挂钩```，```操作```和```过滤器```。 这些是 ```WordPress``` 使用的 [```事件驱动架构模式(英文：Event-driven architecture)```](https://en.wikipedia.org/wiki/Event-driven_architecture "") 的一部分。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你是 ```WordPress``` 开发的新手还是发现难以理解基本概念？ 我不能推荐足够高的 [``` Simon Codrington```](https://www.sitepoint.com/author/scodrington/ "") 的 ```WordPress``` 插件开发简介教程。 他在解释 ```动作``` 和 ```过滤器``` 方面做得很出色。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本教程中，我将揭开 ```WordPress``` 钩子系统的神秘面纱，不遗余力。 事不宜迟，让我们开始吧。

<!-- more -->

</br>

# **挂钩，动作，过滤器。 这些是什么？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```“挂钩”```基本上是由 ```WordPress``` 核心，主题和插件在 ```PHP``` 执行或解释的各个阶段触发的事件。 当这些事件被触发时，挂钩或附加到它们的所有函数和/或类方法均以其正确顺序执行。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```挂钩```有两种形式，```动作```和```过滤器```。 前者用于在流程执行的各个阶段添加和删除功能部件，而后者则用于修改各种功能部件和实现的行为。 如果你仍然不了解，请不要担心。 当我们开始在下面看到一些代码示例时，你将看到。

</br>

# **WordPress中Hook系统的重要性**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```钩子系统``` 在 ```WordPress``` 中的重要性仅仅是可扩展性。 它使添加和删除功能以及调整/修改 ```WordPress``` 核心，插件和主题中功能的实现成为可能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当你编写可扩展的插件和主题时，其他开发人员无需编辑核心源代码就可以改进和扩展它们。

</br>

# **深入研究WordPress挂钩系统**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```WordPress``` 执行的各个阶段，通常会使用 ```do_actions（）```和``` a pply_filters（）``` ```PHP``` 函数来触发大量事件。 这些事件可以通过 ```add_action（）```和 ```add_filter（）```进行订阅或挂接。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意使用“普通”一词。 还有其他触发事件的方法。 我们将在本教程的第二部分中对此进行探讨。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下是插件中操作的示例。 在我的 ```ProfilePress``` 用户注册插件中成功注册用户后，将触发此操作。

``` Swift
/**
 * Fires after a user registration is completed.
 *
 * @param int $form_id ID of the registration form.
 * @param mixed $user_data array of registered user info.
 * @param int $user_id ID of the registered user.
 */
do_action( 'pp_after_registration', $form_id, $user_data, $user_id );
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在 ```WordPress``` 执行期间，将处理与该操作关联的所有功能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过滤器挂钩的一个示例是 ```WordPress``` 核心中的 ```the_content``` ，它过滤每个帖子内容。

``` PHP
 /**
     * Filter the post content.
     *
     * @since 0.71
     *
     * @param string $content Content of the current post.
     */
    $content = apply_filters( 'the_content', $content );
```

</br>

# **做个笔记**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在``` do_action（）```中，第一个参数是动作挂钩的名称，后续参数是可供挂钩到动作的函数使用的变量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在``` apply_filters（）```中，第一个参数是过滤器挂钩的名称，第二个参数是修改或应用连接到过滤器的函数的数据或值。 后面的参数是挂钩到过滤器的函数可用的变量/值。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不用担心，当我们检查代码示例时，所有这些将更有意义。

<br>

# **动作挂钩示例**
 
## ***实例1***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;试一下我的 ```ProfilePress``` 插件的 ```pp_after_registration``` 操作； 假设我们要实现一项功能，使用户在注册后会立即收到一条 ```SMS```（通过称为 ```Dolio``` 的消息传递服务），欢迎他们访问你的网站。 我们的函数挂钩可以采用以下形式：

``` PHP
add_action( 'pp_after_registration', 'send_users_welcome_sms', 20, 3 );

function send_users_welcome_sms( $form_id, $user_data, $user_id ) {
    global $service_locator;

    $username    = $user_data['username'];
    $firstName   = $user_data['first_name'];
    $lastName    = $user_data['last_name'];
    $phoneNumber = $user_data['phone_number'];

    $text = <<<SMS_CONTENT
Hello $firstName $lastName, Welcome to SitePoint. "\r\n"

User ID: $user_id "\r\n"
Username: $username "\r\n"
Password: The password you sign up with "\r\n"

SMS_CONTENT;

    $dolio = $service_locator->get( 'dolio_sdk' );
    $dolio->phone_number( $phoneNumber );
    $dolio->sms_content( $text );
    $dolio->send();

}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面代码中 ```add_action``` 的第三个参数是挂钩优先级，该挂钩优先级指定了挂钩到 ```pp_after_registration``` 动作的函数的执行顺序。 将其保留为空将默认为10。而第四个参数指定函数挂钩将接受的参数数量。 如果为空，则默认为1。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我省略了第四个参数，因此默认为1，则```$ user_data```和```$ user_id```变量将为```null```，因为我们只告诉函数仅接受一个参数。

## ***实例2***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```WordPress``` 包含以下动作挂钩- ```wp_head``` 和 ```wp_footer``` ，它们分别在```head```标签和前端的```body```标签之前触发。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些挂钩可用于在那些关键位置显示脚本和数据。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们看看一些代码示例。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下代码使用 ```wp_head``` 将 ```Google``` 的站点验证元标记添加到 ```WordPress``` 前端的标头中。

``` PHP
add_action( 'wp_head', 'google_site_verification' );

function google_site_verification() {
    echo '<meta name="google-site-verification" content="ytl89rlFsAzH7dWLs_U2mdlivbrr_jgV4Gq7wClHDUJ8" />';
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有挂钩函数都将是匿名的，而不是命名函数，以避免不必要的函数名称重复。 例如，上面的 ```Google``` 网站验证元标记的代码将变为：

``` PHP
add_action( 'wp_head', function () {
    echo '<meta name="google-site-verification" content="ytl89rlFsAzH7dWLs_U2mdlivbrr_jgV4Gq7wClHDUJ8" />';
});
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的代码使用 ```wp_footer``` 在 ```WordPress``` 前端的页脚区域中添加 ```JavaScript``` 。

``` PHP
add_action( 'wp_footer', function () {
    echo '<script type="text/javascript" src="http://example.com/wp-content/plugins/site-specific-plugin/hello-bar.js"></script>';
});
```

***动作钩子代码示例足够多，让我们看看过滤器。***

</br>

# **滤钩示例**

## ***示例1***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设我们正在开发一个广告插入器插件，该插件将以编程方式在每个帖子内容前后插入广告，因此我们需要 ```the_content``` 过滤器。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下代码在每个帖子内容前后都包含“我们喜欢 ```SitePoint``` ”文字。

``` PHP
add_filter( 'the_content',
    function ( $content ) {
        $text = sprintf( '<div class="notice alert">%s</div>', __( 'We love SitePoint', 'sp' ) );
        $content = $text . $content . $text;
        return $content;
    });
```

**代码说明**：```$text``` 变量的内容与<div class =“ notice alert”>我们喜欢SitePoint </ div>一样，尽管它已经国际化，所以可以本地化。 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，函数参数 ```$content``` 是提供帖子内容的变量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，我们在帖子内容前后添加自定义文本，将结果数据保存到 ```$content``` 中，然后返回。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意：所有滤镜挂钩函数都必须在操作或修改后返回变量参数。

## ***示例2***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将看到的另一个过滤器示例是 ```the_title``` 。 以下是 ```wp-includes/post-template.php``` 的158行中的定义方式。

``` PHP
 /**
     * Filter the post title.
     *
     * @since 0.71
     *
     * @param string $title The post title.
     * @param int    $id    The post ID.
     */
    return apply_filters( 'the_title', $title, $id );
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面的代码通过在其后面附加 ```-WeLoveSitePoint``` 来仅修改 ID 为 5978的帖子的标题。 这要归功于 ```$id``` 参数。

``` PHP
add_filter( 'the_title', function ( $title, $id ) {
        if ( $id == '5978' ) {
            $title .= ' - WeLoveSitePoint';
        }

        return $title;

    }, 10, 2 
);
```

</br>

# **总结**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```WordPress``` 之所以继续成为领先的内容管理系统的原因是其可扩展性。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```WordPress Hook``` 系统使 ```WordPress``` 可以转换为功能强大的 ```Web``` 应用程序，无论是 ```WooCommerce``` 的电子商务商店，```bbPress``` 的论坛还是 ```BuddyPress``` 的社交网站。