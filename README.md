# 笔记
---
### 脚手架文件结构
```

项目根目录/
├── node_modules/         # 依赖包
├── public/              # 静态资源目录
│   ├── favicon.ico      # 网站图标
│   └── index.html       # 主 HTML 文件
├── src/                 # 源代码目录
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
│   └── main.js         # 入口文件
├── .gitignore          # Git 忽略文件
├── babel.config.js     # Babel 配置
├── package.json        # 项目配置文件
├── README.md           # 项目说明文档
└── vue.config.js       # Vue CLI 配置文件

```

---
## 关于不同版本的vue

1.vue.js与vue.runtime.xxx.js的区别：\
   - vue.js是完整Vue：包含：核心功能 + 模板解析器。\
   - vue.runtime.xxx.js是运行版的Vue，只包含:核心功能；没有模板解析器。\
2.vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需使用render函数接收到createElement函数去指定具体内容。\

## vue.config.js配置文件

1.使用vue inspect > output.js可以查看到vue脚手架的默认配置。\
2.使用vue.config.js可以对脚手架进行个性化定制，详情：https://cli.vuejs.org/zh/\


---
## ref属性
1.被用来给元素或子组件注册引用信息（id的替代者）。\
2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象。（更推荐使用ref 获取组件实例对象 而不是 querySelector）\
3.使用方法：\
    - 打标识：\```<h1 ref="xxx">```...</h1> 或 <School ref="xxx"></School>\
    - 获取：this.refs.xxx\

---
## props配置项  
1.功能：让组件接收外部传过来的数据。\
2.传递数据：<Demo name="xxx"/>\
3.接收数据：\
    - 第一种方式（只接收）：props:['name']\
    - 第二种方式（限制类型）：props:{name:String}\
    - 第三种方式（限制类型、限制必要性、指定默认值）：\
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
    第一步定义混入：\
```
    {
      data(){....},
      methods:{....}
    } 
```

第二步使用混入：\
全局混入：```Vue.mixin(xxx)```\
局部混入：```mixins:['xxx']```\

---
## 插件
1.功能：用于增强Vue。\
2.本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。\
3.定义插件：\
```js
对象.install = function (Vue, options) {
    // 1.添加全局过滤器
    Vue.filter(....)\
    // 2.添加全局指令
    Vue.directive(....)\
    // 3.配置全局混入
    Vue.mixin(....)\
    // 4.添加实例方法
    Vue.prototype.$myMethod = function () {...}\
    Vue.prototype.$myProperty = xxxx\
    // 5.注册全局组件
    Vue.component(....)\
}  
```

4.使用插件：```Vue.use(插件)```\


---
## scoped样式
1.作用：让样式在局部生效，防止冲突。\
2.写法：```<style scoped>```

## 总结vue中的数据流动
1.props/$emit\
2.自定义事件\
3.消息订阅与发布\
4.集中式管理\

---
## 总结TodoList案例
1.总结化编码流程：\
（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。\
（2）实现动态组件：考虑好数据的存放位置，数据是一个组件的，还是多个组件的。\
    1）一个组件的：放在组件自身即可。\
    2）多个组件的：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。\
（3）实现交互：从绑定事件开始。\

2.props适用于：\
（1.）拆分静态组件：组件要按照功能拆分，命名不要与html元素冲突。\
（2.）实现动态组件：考虑好数据的存放位置，数据是一个组件的，还是多个组件的。\
    1）一个组件的：放在组件自身即可。\
    2）多个组件的：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。\
（3.）实现交互：从绑定事件开始。\

2.props适用于：\
（1.）父组件传递数据给子组件。父组件 ==> 子组件 通信（<span style="color:red">父给子</span>）\
（2.）子组件给父组件传递数据。子组件 ==> 父组件 通信（要求父先给子一个函数）\

3.使用v-model绑定输入框数据：\
（1.）默认情况下，v-model绑定的数据在子组件中。\
（2.）如果v-model绑定的是一个组件，那么子组件应该提供一个model的配置项，来指定将来v-model会绑定到子组件的哪个属性上。\

4.props传递过来的若是对象类型的值，修改对象中的属性时，Vue不会检测到。（<span style="color:red">Vue只对props的简单类型数据检测</span>）\

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
    该方法会清空存储中的所有数据。\


4.备注：\
    1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。\
    2.LocalStorage存储的内容，需要手动清除才会消失。\
    3.xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。\
    4.在存储数据时，最好使用JSON.stringify()序列化一下，在读取数据时，使用JSON.parse()解析一下，结果是null。\

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
7.注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，不能写成```this.$refs.xxx.$on('atguigu',回调函数)```，否则会报错。\


---
## 全局事件总线(GlobalEventBus)
1.一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。\
2.安装全局事件总线：\
```js
new Vue({
  ......
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
  ......
})
```

3.使用事件总线：\   
    1.接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身</span>。\
```js
this.$bus.$on('事件名',回调)
```
    2.提供数据：
```js
this.$bus.$emit('事件名',数据)
```

4.最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">自定义事件</span>。\


---
## 消息订阅与发布
1.一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。\
2.使用步骤：\
    1.安装pubsub：```npm install pubsub-js```\
    2.引入：```import pubsub from 'pubsub-js'```\
    3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身</span>。\
    ```this.token = pubsub.subscribe('消息名',回调函数)```\
    4.提供数据：```pubsub.publish('消息名',数据)```\
    5.最好在beforeDestroy钩子中，用```pubsub.unsubscribe(this.token)```去<span style="color:red">解绑</span>。\



---
##nextTick
1.语法：```this.$nextTick(回调函数)```\
2.作用：在下一次DOM更新结束后执行其指定的回调。\
3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。\



---
## Vue封装的过度与动画
1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。\      
2.图示：<img src="[./assets/vue-transitions.png](https://ts1.cn.mm.bing.net/th/id/R-C.a4ed42e2baf1c650adb03b9d7e458b62?rik=Y3EWtRkEFq9PwQ&riu=http%3a%2f%2fpic11.nipic.com%2f20101115%2f6163721_102552846000_2.jpg&ehk=KpQEThDayaHRqDzwFc1bKmayeje8Gk%2fDj6Zrcf5x868%3d&risl=&pid=ImgRaw&r=0)" alt="vue-transitions">\
3.写法：\
    - 准备好样式：\
        1. 元素进入的样式：\
        ```v-enter```：进入的起点\
        ```v-enter-active```：进入过程中\
        ```v-enter-to```：进入的终点\
        2. 元素离开的样式：\
        ```v-leave```：离开的起点\
        ```v-leave-active```：离开过程中\
        ```v-leave-to```：离开的终点\
    - 使用```<transition>```包裹要过度的元素，并配置name属性：\

2.使用```<transition name="hello">```包裹要过度的元素，并配置name属性，注意如果配置了appear属性的话就代表一开始挂载真实dom的时候就会有过渡效果。\
```vue
<transition name="hello" appear>
    <h1 v-show="isShow">你好啊</h1>
</transition>
```

3.备注:若有多个元素需要过度，则需要使用```<transition-group>```，且每个元素都要指定```key```属性。\



---
## vue脚手架配置代理

## 方法一\
    在vue.config.js中添加如下配置：\
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
    3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给5000（优先匹配前端资源）。\

## 方法二\
    1.第一步：创建代理服务器。\
    2.第二步：在vue.config.js中添加如下配置：\
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
    2.缺点：配置略微繁琐，请求资源时必须加前缀。\

## 插槽
1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于<span style="color:red">父组件 ===> 子组件</span>。\
2.分类：默认插槽、具名插槽、作用域插槽。\
3.使用方式：\
    1.默认插槽：\
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

    2.具名插槽：\
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

子组件中：\
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

子组件中：\
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