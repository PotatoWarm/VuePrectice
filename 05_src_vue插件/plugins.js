export default {
    install(Vue) {
        //vue帮你调用install方法时，会传入Vue构造函数
        //consile.log('install');
        //console.log(Vue);//vm的构造函数Vue

        //全局过滤
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4);
        });

        //全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                //console.log('bind');
                element.value = binding.value;
            },
            inserted(element, binding) {
                //console.log('inserted');
                element.focus();
            },
            //指令所在模板被重新解析时
            update(element, binding) {
                //console.log('update');
                element.value = binding.value;
            }
        });

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 1,
                    y: 2
                }
            }
        });

        //给Vue原型上添加一个方法（vm和vc都可以使用）
        Vue.prototype.hello = function() {
            alert('Hello,lingling');
        }
    }
}