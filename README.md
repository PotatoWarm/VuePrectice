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

1.被用来给元素或子组件注册引用信息（id的替代者）
2.应用html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）

3.使用方法：
1.打标识：

```<h1 ref="xxx">.....</h1>  /  <School ref="xxx"></School>```

2.获取：
```this.$refs.xxx```

#props配置项
1.功能：让组件接收外部传过来的数据
2.传递数据：```<Demo name="xxx"/>```
3.接收数据：
  1.第一种方法（只接收）：```props:['name'] ```
  2.第二种方法（限制类型）：```props:{name:String}```
  3.第三种方法（限制类型，限制必要性，指定默认值）：
  ```
      ```js
      props:{
      	name:{
      	type:String, //类型
      	required:true, //必要性
      	default:'老王' //默认值
      	}
      }











