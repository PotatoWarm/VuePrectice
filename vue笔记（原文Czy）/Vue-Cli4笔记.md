# Vue-Cli与Vue-Cli2区别浅谈

> 当时学习Vue-Cli的时候看的是Vue-Cli2的相关教程,当把package.json上传github的时候提醒有安全问题,于是准备使用最新版本的Vue-Cli,我当时一直认为才更新到Vue-Cli3,没想到都到Vue-Cli4了
可能有很多特性在Vue-Cli3时就有了,学习一下.

## 创建工程
Vue-Cli4文档推荐一下两种方式创建项目

```
vue create my-project
# OR
vue ui #可视化操作
```
如果仍然需要使用vue init webpack初始化项目的话,则需要安装cli-init,但是拉取的仍然是Vue-Cli2的版本
```
npm install -g @vue/cli-init
```

## 启动服务
```
"script":{
    "serve":"vue-cli-service serve"
    "build":"vue-cli-service build"
}
```
也可以使用vue ui进行可视化操作

## 浏览器兼容
package.json文件里的browserslist字段(或一个单独的.browserslistrc文件),指定了.项目的目标浏览器的范围.这个值会被@babel/preset-env和Autoprefixerr用来确定需要转译的JavaScript特性和需要添加的CSS前缀.查阅此处了解如何指定浏览器范围.

## 代码拆分
```
//route level code-splitting
//this generates a separate chunk (about.[hash].js) for this route
//which is lazy-loaded when the route is visited.https://cli.vuejs.org/zh/guide/
```
vue-router提供了一个About组件示例,为此路由生成单独的块,访问路由时延迟加载,可参阅Prefetch与Preload

## 配置相关
VUe-Clli4没有了配置webpack的config与build目录,配置由vue.config.js定义,vue.config.js文件定义于根目录,相关配置
信息参阅Webpack配置

## 配置代理
```
module.exports = {
    deServer:{
        proxy:{
            '//':{
                target:'http://localhost:4000',
                ws:true,
                changeOrigin:true,
                pathRewrite:{}
            }
        }
    }
}
```
