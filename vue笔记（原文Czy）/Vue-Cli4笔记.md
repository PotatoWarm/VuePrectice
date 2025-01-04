# Vue-Cli与Vue-Cli2区别浅谈

> 当时学习Vue-Cli的时候看的是Vue-Cli2的相关教程,当把package.json上传github的时候提醒有安全问题,于是准备使用最新版本的Vue-Cli,我当时一直认为才更新到Vue-Cli3,没想到都到Vue-Cli4了
可能有很多特性在Vue-Cli3时就有了,学习一下.

## 创建工程
Vue-Cli4文档推荐一下两种方式创建项目

```
vue create my-project
package.json文件里的browserslist字段 (或一个单独的.browserslistrc文件)，指定了项目的目标浏览器的范围。这个值会被@babel/preset-env和Autoprefixer用来确定需要转译的JavaScript特性和需要添加的CSS浏览器前缀。查阅 此处 了解如何指定浏览器范围

代码拆分
# or
Vue ui #可视化操作
```
