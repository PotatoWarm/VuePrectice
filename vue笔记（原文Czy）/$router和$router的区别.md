# $router和$route的区别

`$router`和`$route`都是`vue-router`提供的对象，但是`$router`是整个路由实例，而`$route`是当前路由对象。

`Vue Router`是`Vue.js`的路由管理器，路由就是`SPA`单页应用的访问路径，在`Vue`实例内部，可以通过`$router`访问路由实例。\
即在路由定义文件中`export default`的`new Router `路由实例，通过`$route`可以访问当前激活的路由状态信息，包含了当前URL解析得到的信息，还有`URL`匹配到的路由记录，可以将`$router`理解为一个容器去管理了一组`$route`,而`$route`是进行了当前URL和组件的映射。

## router对象属性

* `$router.app`：配置了router的Vue实例。
* `$router.mode`：路由的使用模式。
* `$router.currentRoute`：当前路由对应的路由信息对象。

## route对象方法

* `$router.beforeEach(to, from, next)`:\
全局前置守卫，守卫是异步解析执行，此时导航在所有守卫`resolve`完之前一直处于等待中。

守卫方法接受三个参数：
`to:Route` 即将要进入的目标路由对象 \
`from:Route`： 当前导航正要离开的路由 \
`next:Function`： 一定要调用该方法来 \
`resolve`这个钩子，执行效果依赖 

`next`方法的调用参数： \
例如`next()`，`next(false)`，`next('/')`或`next(vm)`，`next（error）`等\
通常在`main.js`中`import`的`Vue Router`实例中直接定义导航守卫，当然也可以在Vue实列中访问`$router`来定义。

* `$router.beforeResolve(to, from, next)`:\
全局解析守卫，在(`beforeRouterEnter`调用之后调用)导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

* `$router.afterEach(to, from)`:\
全局后置钩子，在导航被确认之后，且导航被完成时调用。\
参数`to`和`from`是路由对象，`next()`必须调用。

* `$router.push(location, onComplete?, onAbort?)`:\
导航到不同的`URL`。导航式编程，使用`$router.push`方法导航到不同的`URL`，此方法会向`history`栈添加一个新的记录，点击浏览器的前进和后退按钮，会按照`history`栈的顺序，进行前进和后退。

* `$router.replace(location, onComplete?, onAbort?)`:\
导航到不同的`UR`L，但是不会向`history`栈添加新的记录，而是跟着他的方法名一样替换掉当前的`hisstory`记录。

* `$router.go(n)`:\
在`history`栈中，通过`n`的值，可以前进或者后退`n`个记录。这个方法参数是一个整数，如果是正数，则前进，如果是负数，则后退。类似于 `window.history.go(n)`。

* `$router.back()`:\
编程式导航，后退一步记录，等同于 `$router.go(-1)`。

* `$router.forward()`:\
编程式导航，前进一步记录，等同于 `$router.go(1)`。

* `router.getMatchedComponents([location])`:\
返回目标位置或是当前路由匹配的组件数据，式数据的定义或构造类，不是实例，通常在服务端渲染的数据预加载是使用。

*` $router.resolve(location, current, append)`:\
解析路由，返回一个对象，包含两个属性：`route`和`href`，`route`是路由对象，`href`是解析后的`URL`。\
解析目标位置，格式和`<router-link>`的`to prop`一样，`current`是当前路由对象，`append`是附加参数，默认为`false`。

* `$router.addRoutes(routes)`:\
动态添加更多的路由规则，参数必须是一个符合`touters`选项要求的数组。

* `$router.onReady(callback, errorCallback)`:\
第一个方法回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件，这可以有效确保服务端渲染时服务端和客户端输出的一致。\
第二个参数`errorCallback`会在初始化路由解析运行出错时被调用。

* `$router.isReady(callback)`：\
注册一个回调，该回调会在路由导航过程中出错时被调用，被调用的错误必须是下列情形中的一种，错误在一个路由守卫函数中被同步抛出。\
错误在一个路由守卫函数中通过`next（err）`的方式异步捕获并处理，渲染一个路由的过程中需要尝试解析一个异步组件时发生错误。

## route对象属性

* `$route.path`：\
返回字符串，对应当前路由的路径，总是解析为绝对路径。

* `$route.params`:\
返回一个key-value对象，包含了动态片段和全局片段，如果没有路由参数，就是一个空对象。

* `$route.query`:\
返回一个key-value对象，表示URL查询参数。

* `4route.hash`:\
返回当前路由的带#的hash值，如果没有hash值，则为空字符串。

* `$route.fullPath`:\
返回当前路由的完整路径（完成解析后的URl），包含查询参数和hash的完整路径。

* `$route.matched`:\
返回一个数组，包含了当前路由的所有嵌套路径片段的路由记录，路由记录就是routers配置数组中的对象副本。

* `$route.name`:\
如果存在当前路由名则返回当前路由的名称。

*` $route.redirectedFrom:`\
如果存在重定向，即为重定向来源的路由的名字。

## 学习： 
https://router.vuejs.org/zh/api/#routes
https://juejin.im/post/6844903665388486664
https://juejin.im/post/6844903608534695943
https://juejin.im/post/6844903892560379917
https://juejin.im/post/6844904005236162568
https://segmentfault.com/a/1190000016662929

