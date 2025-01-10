# Vue3.0新特性
Vue3.0的设计目标可以概括为体积更小,速度更快,加强TypeScrip支持,加强API设计一致性,提高自身可维护性,开放更多底层功能.

## 描述
从Vue2到Vue3在一些比较重要的方面的详细对比.

*** 生命周期的变化 ***
* Vue2.0 -> Vue3.0
* beforeCreate -> setup
* created -> setup
* beforeMount -> onBeforeMount
* mounted -> onMounted
* beforeUpdate -> onBeforeUpdate
* updated -> onUpdated
* beforeDestroy -> onBeforeUnmount
* destroyed -> onUnmounted
* activated -> onActivated
* deactivated -> onDeactivated
* errorCaptured -> onErrorCaptured
* renderTracked -> onRenderTracked
* renderTriggered -> onRenderTriggered

这里主要是增加了setup这个生命周期,而其他的生命周期都是以API的形式调用,实际上随着Composition API的引入,我们访问这些钩子函数的方式已经改变,我们所有的生命周期都应该写在setup中,此方法我们应该实现大多数组件代码,并处理响应式,生命周期钩子函数等.

```
import{
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onActivated,
    onDeactivated,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onBeforeRouteUpdate,
    onBeforeRouteLeave
    } from 'vue'
    export default {
        setup(){
            onBeforeMount(()=>{
                // ...
            })
            onMounted(()=>{
                // ...
            })
            onBeforeUpdate(()=>{
                // ...
            })
            onUpdated(()=>{
                // ...
            })
            onBeforeUnmount(()=>{
                // ...
            })
            onUnmounted(()=>{
                // ...
            })
            onActivated(()=>{
                // ...
            })
            onDeactivated(()=>{
                // ...
            })
            onErrorCaptured(()=>{
                // ...
            })
            onRenderTracked(()=>{
                // ...
            })
            onRenderTriggered(()=>{
                // ...
            })
            onBeforeRouteUpdate(()=>{
                // ...
            })
            onBeforeRouteLeave(()=>{
                // ...
            })
            return {
            }
        }
    }
```

## 使用proxy替代defineProperty
Vue2是通过数据劫持的方式来实现响应式的,其中最核心的方法便是通过Object.definePropert()来实现对属性的劫持,该方法允许精确地添加或修改对象的属性,对数据添加属性描述符合getter与setter存取描述符合现实劫持.Vue2之所以只能兼顾到IE8主要就是因为defineProperty无法兼容IE8,其他浏览器也会存在轻微兼容问题.

```
var obj = {_x:1};
Object.defineProperty(obj,'x',{
    set:function(x){console.log("watch");this._x = x;},
    get:function(){return this._x;}
});
Obj.x = 11; //watch
console.log(obj.x); //11

```

Vue3 使用Proxy实现数据劫持,Object.defineProperty只能监听属性,而Proxy能监听整个对象,通过调用new Proxy(),可以创建一个代理用来替代另一个对象被称为目标,这个代理对目标对象进行了虚拟,因此该代理与目标对象表面上....

## 