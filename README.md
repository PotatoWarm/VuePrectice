# 笔记
---
## 脚手架文件结构
```

项目根目录/
├── node_modules/         # 依赖包
├── public/              # 静态资源目录
│   ├── favicon.ico      # 网站图标
│   └── index.html       # 主 HTML 文件(不能修改)
├── src/（不能修改）                 # 源代码目录
│   ├── assets/         # 资源文件(图片、样式等)
│   ├── components/     # 公共组件
│   ├── views/          # 页面级组件
│   ├── router/         # 路由配置
│   │   └── index.js
│   ├── store/          # Vuex 状态管理
│   │   └── index.js
│   ├── api/            # API 接口管理
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件（不能修改）
├── .gitignore          # Git 忽略文件
├── babel.config.js     # Babel 配置
├── package.json        # 项目配置文件
├── README.md           # 项目说明文档
└── vue.config.js       # Vue CLI 配置文件

```

---
## 关于不同版本的vue

1.vue.js与vue.runtime.xxx.js的区别： 
   - vue.js是完整Vue：包含：核心功能 + 模板解析器。 
   - vue.runtime.xxx.js是运行版的Vue，只包含:核心功能；没有模板解析器。\
2.vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需使用render函数接收到createElement函数去指定具体内容。 

## vue.config.js配置文件

1.使用vue inspect > output.js可以查看到vue脚手架的默认配置。\
2.使用vue.config.js可以对脚手架进行个性化定制，详情：https://cli.vuejs.org/zh/\


---
## ref属性

1.被用来给元素或子组件注册引用信息（id的替代者）。\
2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象。（更推荐使用ref 获取组件实例对象 而不是 querySelector）\
3.使用方法：\
    - 打标识：```<h1 ref="xxx">```...</h1> 或 <School ref="xxx"></School>
    - 获取：this.refs.xxx

---
## props配置项  
1.功能：让组件接收外部传过来的数据。\
2.传递数据：```<Demo name="xxx"/>```\
3.接收数据：\
    - 第一种方式（只接收）：```props:['name']```\
    - 第二种方式（限制类型）：```props:{name:String}```\
    - 第三种方式（限制类型、限制必要性、指定默认值）：
```
    props:{
      name:{
         type:String,//类型
         required:true,//必要性
         default:'xxx'//默认值
      }
    }   
```

>注意：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后修改data中的数据。w
---
## mixin(混入)
1.功能：可以把多个组件共用的配置提取成一个混入对象。\
2.使用方式：\
    第一步定义混入：
```
    {
      data(){....},
      methods:{....}
    } 
```

第二步使用混入：\
全局混入：```Vue.mixin(xxx)```\
局部混入：```mixins:['xxx']```

---
## 插件
1.功能：用于增强Vue。\
2.本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。\
3.定义插件：
```js
对象.install = function (Vue, options) {
    // 1.添加全局过滤器
    Vue.filter(....)
    // 2.添加全局指令
    Vue.directive(....)
    // 3.配置全局混入
    Vue.mixin(....)
    // 4.添加实例方法
    Vue.prototype.$myMethod = function () {...}
    Vue.prototype.$myProperty = xxxx
    // 5.注册全局组件
    Vue.component(....)
}  
```

4.使用插件：```Vue.use(插件)```


---
## scoped样式
1.作用：让样式在局部生效，防止冲突。\
2.写法：```<style scoped>```

## 总结vue中的数据流动
1.props/$emit\
2.自定义事件\
3.消息订阅与发布\
4.集中式管理

---
## 总结TodoList案例
1.总结化编码流程：\
（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。\
（2）实现动态组件：考虑好数据的存放位置，数据是一个组件的，还是多个组件的。\
    1）一个组件的：放在组件自身即可。\
    2）多个组件的：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。\
（3）实现交互：从绑定事件开始。

2.props适用于：\
（1.）拆分静态组件：组件要按照功能拆分，命名不要与html元素冲突。\
（2.）实现动态组件：考虑好数据的存放位置，数据是一个组件的，还是多个组件的。\
    1）一个组件的：放在组件自身即可。\
    2）多个组件的：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。\
（3.）实现交互：从绑定事件开始。

2.props适用于：\
（1.）父组件传递数据给子组件。父组件 ==> 子组件 通信（<span style="color:red">父给子</span>）\
（2.）子组件给父组件传递数据。子组件 ==> 父组件 通信（要求父先给子一个函数）

3.使用v-model绑定输入框数据：\
（1.）默认情况下，v-model绑定的数据在子组件中。\
（2.）如果v-model绑定的是一个组件，那么子组件应该提供一个model的配置项，来指定将来v-model会绑定到子组件的哪个属性上。

4.props传递过来的若是对象类型的值，修改对象中的属性时，Vue不会检测到。（<span style="color:red">Vue只对props的简单类型数据检测</span>）

---
## webStorage
1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）。\
2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制。\
3.相关API：\
    - ```xxxxStorage.setItem('key','value')```\
    该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。\
    - ```xxxxStorage.getItem('key')```\
    该方法接受一个键名作为参数，返回键名对应的值。\
    - ```xxxxStorage.removeItem('key')```\
    该方法接受一个键名作为参数，并把该键名从存储中删除。\
    - ```xxxxStorage.clear()```\
    该方法会清空存储中的所有数据。


4.备注：\
    1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。\
    2.LocalStorage存储的内容，需要手动清除才会消失。\
    3.xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。\
    4.在存储数据时，最好使用JSON.stringify()序列化一下，在读取数据时，使用JSON.parse()解析一下，结果是null。

---
##组件的自定义事件
1.一种组件间通信的方式，适用于：<span style="color:red">子组件 ===> 父组件</span>\
2.使用场景：A是父组件，B是子组件，B想给A传递数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。    
3.绑定自定义事件：\
      1.第一种方法，在父组件中\
      ```<Demo @事件名="demo事件名"/>/<Demo @atguigu="test"/>```或```<Demo v-on：@事件名="demo事件名"/>```\
      2.第二种方法，在父组件中\
      ```js  <Demo ref="Demo"/>```，在子组件中```this.$refs.Demo.$emit('事件名',数据)```\
      4.触发自定义事件：```this.$emit('事件名',数据)```\
5.解绑自定义事件：```this.$off('事件名')```\
6.组件上也可以绑定原生```DOM```事件，需要使用```native```修饰符。\
7.注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，不能写成```this.$refs.xxx.$on('atguigu',回调函数)```，否则会报错。


---
## 全局事件总线(GlobalEventBus)
1.一种组件间通信的方式，适用于```<span style="color:red">```任意组件间通信</span>。
2.安装全局事件总线：
```js
new Vue({
  ......
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
  ......
})
```

3.使用事件总线：   
    1.接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身</span>。
```js
this.$bus.$on('事件名',回调)
```
    2.提供数据：
```js
this.$bus.$emit('事件名',数据)
```

4.最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">自定义事件</span>。


---
## 消息订阅与发布
1.一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。\
2.使用步骤：\
    1.安装pubsub：```npm install pubsub-js```\
    2.引入：```import pubsub from 'pubsub-js'```\
    3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身</span>。\
    ```this.token = pubsub.subscribe('消息名',回调函数)```\
    4.提供数据：```pubsub.publish('消息名',数据)```\
    5.最好在beforeDestroy钩子中，用```pubsub.unsubscribe(this.token)```去<span style="color:red">解绑</span>。



---
##nextTick
1.语法：```this.$nextTick(回调函数)```\
2.作用：在下一次DOM更新结束后执行其指定的回调。\
3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。



---
## Vue封装的过度与动画
1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。   

2.写法：\
    - 准备好样式：\
        1. 元素进入的样式：\
        ```v-enter```：进入的起点\
        ```v-enter-active```：进入过程中\
        ```v-enter-to```：进入的终点\
        2. 元素离开的样式：\
        ```v-leave```：离开的起点\
        ```v-leave-active```：离开过程中\
        ```v-leave-to```：离开的终点\
    - 使用```<transition>```包裹要过度的元素，并配置name属性：

3.使用```<transition name="hello">```包裹要过度的元素，并配置name属性，注意如果配置了appear属性的话就代表一开始挂载真实dom的时候就会有过渡效果。
```vue
<transition name="hello" appear>
    <h1 v-show="isShow">你好啊</h1>
</transition>
```

4.备注:若有多个元素需要过度，则需要使用```<transition-group>```，且每个元素都要指定```key```属性。



---
## vue脚手架配置代理

## 方法一
    在vue.config.js中添加如下配置：

```js
module.exports = {
    devServer: {
        proxy: 'http://localhost:5000'
    }
}
```

说明：\
    1.优点：配置简单，请求资源时直接发给前端（8080）即可。\
    2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。\
    3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给5000（优先匹配前端资源）。

## 方法二
    1.第一步：创建代理服务器。
    2.第二步：在vue.config.js中添加如下配置：
```js
module.exports = {
    devServer: {
        proxy: {
            '/api1': {//匹配所有以/api1开头的请求路径   
                target: 'http://localhost:5000',//代理目标的基础路径
                changeOrigin: true,//支持跨域
                pathRewrite: {'^/api1': ''}//重写路径

            }
            '/api2':{
                target: 'http://localhost:5001',//代理目标的基础路径
                changeOrigin: true,//支持跨域   
                pathRewrite: {'^/api2': ''} //重写路径
            }
        }
    }
}
/*
    1.changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
    2.changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
    3.changeOrigin默认值为true  
*/
```
说明：\
    1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理。\
    2.缺点：配置略微繁琐，请求资源时必须加前缀。

## 插槽
1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于```<span style="color:red">```父组件 ===> 子组件</span>。\
2.分类：默认插槽、具名插槽、作用域插槽。\
3.使用方式：\
    1.默认插槽：
    ```vue
    父组件中：
    <Category>
        <div>html结构1</div>
    </Category> 
    ``` 
    子组件中：
    ```vue
    <template>
        <div>
            <slot>插槽默认内容...</slot>
        </div>
    </template>
    ```

    2.具名插槽：
```vue
父组件中：
<Category>
    <template slot="center">
        <div>html结构1</div>
    </template>

    <template slot="footer">
        <div>html结构2</div>
    </template>
</Category>

子组件中：
```vue
<template>
    <div>
        <slot name="center">插槽默认内容...</slot>
        <slot name="footer">插槽默认内容...</slot>
    </div>
</template>
```

3.作用域插槽：\
    1.理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games组件数据在Category组件中，但根据数据生成的结构需要Category组件的使用者决定）\
    2.具体编码：\
    ```vue
    <Category>
        <template slot-scope="games">
            <ul>
                <li v-for="game in games" :key="game.id">{{game.name}}</li>
            </ul>
        </template>
    </Category>

    Category组件中：
    <Category>
    <template slot-scope="scopeData">
           <h4 v-for="g in scopeData.games" :key="g.id">{{g.name}}</h4>
    </template>
    </Category>
    ```

子组件中：
```vue
<template>
    <div>
        <slot :games="games"></slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
        return {
            games:[
                {id:'001',name:'塞尔达'},
            ]
        },
    }
}
</script>
```
---

## Vuex
### 1.概念
在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

### 2.何时使用？
     多个组件需要共享数据式

### 3.搭建vuex环境
1.创建文件：/
```src/store/index.js```
```js
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象一响应组件中用户的动作
const action = {}
//准备mutation对象---修改state中的数据
const mutations = {}
//准备state对象---保存具体的数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

2.在```main.js```中创建vm时传入```store```配置项
```js
······
//引入store
import store from './store'
······

//创建vm
new Vue（{
    el：'#app',
    render:h => h(App),
    store
}）
```

###  4.基本使用
1.初始化数据，配置```actions ```,```mutations ```,操作文件```store.js ```

```js
//引入vue核心库
import vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//引入Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
    jia(context,value){
        //console.log('actions中的jia被调用了'，miniStore，value)
        context.commit('JIA',value)
    },
}

const mutation = {
    //执行加
    JIA(state,value){
        //console.log('mutations中的JIA被调用了'，state，value)
        state.sum += value
    }
}

//初始化数据
const state = {
    sum:0
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
```

2.组件中读取vuex中的数据：```$store.state.sum ```\
3.组件中修改vuex中的数据：```$store.dispatch('action中的方法名'，数据) ```或```$store.commit('mutations中的方法名'，数据) ```\
     > 备注：若没有网络请求或其他业务逻辑，组件中也可以超越actions，即不写```dispatch ```，直接编写```commit ```
 

###  5.getters的使用
1.概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。\
2.在``` store.js ```中追加``` getters ```配置
```js
·····
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
·····
```

3.组件中读取vuex中的数据：``` $store.state.sum ```

### 6.四个map方法的使用
1.<strong>mapState方法：</strong>用于帮助我们映射``` state ```中的数据为计算属性

```js
computed:{
    //借助mapState生成计算属性：sum，school，subject（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性：sum，school，subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

2.<strong>mapGetters方法：</strong>用于帮助我们映射``` getters ```中的数据为计算属性

```js
computed:{
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'})，

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},

```

4.<strong>mapMutations方法：</strong>用于帮助我们生成与``` mutations ```对话的方法，即：包含``` $store.commit(xxx) ```的函数

```js
methods:{
    //靠mapActions生成：increment，decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //靠mapMutations生成：JIA,JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

> 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

### 7.模板化+命名空间
1.目的：让代码更好维护，让多种数据分类更加明确。

2.修改``` store.js ```

``` javascript
const countAbout = {
    namespaced:ture,//开启命名空间
    state:{x:1},
    mutations:{ ... },
    actions: { ... },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

 const personAbout = {
    namespaced:ture,//开启命名空间
    state:{...},
    mutations:( ... ),
    actions:{ ... }
 }

 const store = new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
 })
 ```

 3.开启命名空间后，组件中读取state数据：
 ```js
 //方式一：自己直接读取
 this.$store.state.personAbout.list
 //方式二：借助mapSate读取：
 ...mapState('countAbout',['sum','school','subject']),
 ```

 4.开启命名空间后，组件中读取getters数据：
 ```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
 ```

 5.开启命名空间后，组件中调用dispatch
 ```js
//方法一：自己直接didspatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{increment:'JIA',decrement:'JIAN'}),
 ```



## 路由



### 1.基本使用
1.安装vue-router：``` npm i vue-router ```\
2.在``` main.js ```中创建router实例对象
  应用插件：``` Vue.use(VueRouter) ```\
3.编写router配置对象：
``` js
//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

//创建router实例对象，去管理一组一组的路由规则
cosnt router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

//暴露router
export default router
```

4.实现切换（active-class可配置高亮样式）
```vue
<router-link to="/about" active-class="active" to="/about">About</router-link>
```

5.指定展示位置
```vue
<router-view></router-view>
```

### 2.几个注意点

1.路由组件通常放在``` papes```文件夹，一般组件通常放在``` components ```文件夹中。\
2.通过切换，“隐藏”了的路由组件，默认是被销毁的，需要的时候再去挂载。\
3.每个组件都有自己的``` $route ```属性，里面存蓄着自己的路由信息。\
4.整个应用只有唯一一个router实例，通过``` $router ``` 属性获取到。

### 3.多级路由（多级路由）

1.配置路由规则，使用children配置项：
```js
routes:[
    {
        path:'/about',
        component：About，
    }，
    {
        path:'/home',
        component:Home,
        children:[
            path:'news',//此处一定不要写：/news
            component:News
        ]，
        {
            path:'message',//此处一定不要写：/message
            cimponent:Message
        }
    }
]
····

2.跳转（要写完整路径）：
```vue
<router-link to="/home/news">News</router-link>
```

### 4.路由的query参数
1.传递参数：
```vue
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>

<!-- 跳转并携带query参数，to的对象写法 -->
<router-link
     :to="{
        path:'/home/message/detail',
        query:{id:666,
        title:'你好'}}"
        >跳转</router-link>
```
2.接收参数：
```js
$route.query.id
$route.query.title 
```

### 5.命名路由

1.作用：可以简化路由的跳转。

2.如何使用\
     1. 给路由命名：
     ```js
     {
        path:'/demo',
        component:Demo,
        children:[
            {
                path:'test',
                component:Test,
                children:[
                    {
                        name:'hello',//给路由命名
                        path:'welcome',
                        component:Hello,
                    }
                ]
            }
        ]
     }
     ```

     2.简化跳转：
     ```vue
     <!--- 简化前，需要写完整路径 --->
     <router-link to="/demo/test/welcome">欢迎</router-link>
     <!--  简化后，直接通过名字跳转 -->
     <router-link :to="{name:'hello'}">欢迎</router-link>
     <!--  简化写法配合传递参数 -->
     <rrouter-link 
     :to="{
        name:'hello',
        query:{
            id:666,
            title:'你好'
            }
            }>欢迎</router-link>
     ```


### 6.路由的params参数
1.配置路由，声明接收params参数：
```js
{
    path:'/home',
    comonent:Home,
    children:[
        {
            path:'news',
            component:News,
        },
        {
            component:Message,
            children:[
                {
                    name:'xiangqing',
                    path:'detail/:id/:title',//使用占位符声明接收params参数
                    component:Detail
                }
            ]
        }
    ]
}
```

2.传递params参数：
```vue
<!---  跳转并携带params参数，to的字符串写法 --->
<router-link :to="`/home/message/detail/666/你好`">跳转</router-link>

<!---  跳转并携带params参数，to的对象写法 --->
<router-link
    :to="{
        name:'xiangqing',
        params:{id:666,title:'你好'}
    }"
    >跳转</router-link>
   --->
```

>注意：路由携带params参数时，若使用to的对象写法，则不能使用path，必须使用name属性

3.接收params参数：
```js
$route.params.id
$route.params.title
```

### 7.路由的props配置
     作用：让路由组件更方便的收到参数

```js
{
    name:'xiangqing',
    path:'detail/:id',
    component:Detail,

    //第一种写法：props值为对象，该对象中所有的key-value都会以props的形式传给Detail组件
    // props:{a:900}

    //第二种写法：props值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
    //props:true,

    //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
    //props(route){
    //    return {
    //           id:route.params.id,
    //           title:route.params.title
    //           }
    //}
    //}
```

### 8.router-link>的replace属性

1.作用：控制路由跳转时操作浏览器历史记录的模式\
2.浏览器的历史记录有两种写入模式：分别为``` push ```（追加历史记录）和``` replace ```（替换当前记录），默认为``` push ```\
3.如何开启```replace```模式：``` <router-link replace ...>News</router-link>```

### 9.编程式导航
1.作用：不借助```<router-link>```实现路由跳转，让路由跳转更加灵活

2.具体编码：

```js
//$router的两个API
this.$router.push({
    name:'xiangqing',
    params:{
        id:XXX,
        title:XXX}
})

this.$router.forward()//前进
this.$router.back()//后退
this.$router.go(1)//可前进也可以后退，参数是number类型（正数为前进的步数，负数为后退的步数）
```

### 10.缓存路由组件
1.作用：让不常跳转的组件保持挂载，不被销毁，保持组件状态。

2.具体编码：
```vue
<keep-alive include="News">
<router-view></router-view>
</keep-alive>
```

### 11.两个新生的生命周期钩子
1.作用：路由组件所独有的两个生命周期，用于捕获路由组件的激活状态。\
2.具体名字：\
   1.```activated```：路由组件被激活时触发\
   2.```deactivated```：路由组件失活时触发

### 12.路由守卫
1.作用：对路由进行权限控制\
2.具体分类：全局守卫，独享守卫，组件内守卫\
3.全局守卫：
```js
//全局守卫：初始化时执行，每次路由切换前执行
router.beforeEach((to,from,next)=>{
    console.log('beforeEach',to,from)
    if(to.meta.isAuth){//判断是否需要进行权限控制
    if(localStorage.getItem('school')==='atguigu'){//权限控制的具体规则
     next()//放行
     }else{
        alert('暂无权限查看')
        //next({name:'home'})
     }
    }else{
        next()//放行
    }
    })

//全局后置守卫：初始化时执行，每次路由切换后执行
router.afterEach((to,from)=>{
    console.log('afterEach',to,from)
    if(to.meta.title){
        document.title=to.meta.title//修改网页的title
    }else{
        document.title='Vue_test'
    }
})
```

4.独享守卫：
```js
beforeEnter(to,from,next){
    console.log('beforeEnter',to,from)
    if(to.meta.isAuth){//判断是否需要进行权限控制})
             if(localStorage.getItem('school')==='atguigu'){//权限控制的具体规则}
                       next()//放行
                       }else{
                        alert('暂无权限查看')
                        //next({name:'home'})
                       }
                       }else{
                           next()

                       }
                       }
```
5.组件内守卫：
```js
//进入守卫：在路由规则被确认之前，且导航被触发。
beforeRouteEnter(to,from,next){
}，

//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave(to,from,next){
}
```

### 13.路由器的两种工作模式

1.对于一个url来说，什么是hash值？-----#及其后面的内容就是harsh值。\
3.hash模式：\
2.hash值不会包含在http请求中，即：hash值不会带给服务器。\
3.hash模式：\
    1.地址中永远带着#号，不美观。\
    2.若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。\
    3.兼容性较好。
4.history模式：\
    1.地址干净，美观。\
    2.兼容性和hash比略差，需要后台配置支持，才能解决刷新页面服务端404的问题。\
    3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

## Mylife
* [记录本章案例中的想法](MyLife/记录学习过程中想法.md)
## vue笔记S
* [vue笔记](main/vue笔记（原文Czy)