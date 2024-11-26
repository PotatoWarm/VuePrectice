#笔记

###脚手架文件结构
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

##关于不同版本的vue
1.vue.js与vue.runtime.xxx.js的区别：
   - vue.js是完整Vue：包含：核心功能 + 模板解析器。
   - vue.runtime.xxx.js是运行版的Vue，只包含:核心功能；没有模板解析器。
2.vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需使用render函数接收到createElement函数去指定具体内容。

##vue.config.js配置文件

1.使用vue inspect > output.js可以查看到vue脚手架的默认配置。
2.使用vue.config.js可以对脚手架进行个性化定制，详情：https://cli.vuejs.org/zh



##ref属性
1.被用来给元素或子组件注册引用信息（id的替代者）。
2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象。（更推荐使用ref 获取组件实例对象 而不是 querySelector）
3.使用方法：
    - 打标识：```<h1 ref="xxx">```...</h1> 或 <School ref="xxx"></School>
    - 获取：this.refs.xxx


##props配置项  
1.功能：让组件接收外部传过来的数据。
2.传递数据：<Demo name="xxx"/>
3.接收数据：
    - 第一种方式（只接收）：props:['name']
    - 第二种方式（限制类型）：props:{name:String}
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

##mixin(混入)
1.功能：可以把多个组件共用的配置提取成一个混入对象。
2.使用方式：
    第一步定义混入：
```
    {
      data(){....},
      methods:{....}
    } 
```

第二步使用混入：
全局混入：```Vue.mixin(xxx)```
局部混入：```mixins:['xxx']```

##插件
1.功能：用于增强Vue。
2.本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
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

##scoped样式
1.作用：让样式在局部生效，防止冲突。
2.写法：```<style scoped>```

##总结vue中的数据流动
1.props/$emit
2.自定义事件
3.消息订阅与发布
4.集中式管理   

##总结化编码流程：
（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
（2）实现动态组件：考虑好数据的存放位置，数据是一个组件的，还是多个组件的。
    1）一个组件的：放在组件自身即可。
    2）多个组件的：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。
（3）实现交互：从绑定事件开始。



