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
2.vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需使用render函数接收到createElement函数去指定
