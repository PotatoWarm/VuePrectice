<template>
    <div class="demo">
        <!-- 使用props传递过来的值是不能改的（尽量避免去改，控制台会有警告） -->
        <h1>{{ msg }}</h1>
        <h2>乘客姓名：{{ Passenger }}</h2>
        <h2>乘客年龄：{{ age }}</h2>
        <h2>乘客性别：{{ sex }}</h2>
        <button @click="updateName">点我提示乘客姓名</button>
    </div>  
</template>

<script>
export default {
    name: 'Passenger',
    //props:['name','age','sex'],//简单声明接收
    data() {
        console.log(this);
        return {
            //如果props和data存在同名的属性，会报错，但props传递的属性值为：
            //1.props优先级高于data
            //2.props的属性值不能改，如果非要改，可以使用计算属性
            //注意props属性名是不能是vue底层已征用的属性名（比如：ref、class、style等等）
            msg: 'hello,world',
            myname:this.name,//把props传递过来的值当场vc的状态，这样改name是不会出问题，因为你没有直接去修改props
            Passenger: '我是lingling',
        }
    },
    methods: {
        updateName() {
            alert(this.Passenger);
        }
    },

    //限制props：{
    //         name:String, 
    //         age:Number,
    //         sex:String
    //}
    //接收时不仅限制类型，还限制必要性
    props: {
        name: {
            type: String,//类型
            required: true//必要的
        },
        age: {
            type: Number,
            required: 99
        },
        sex: {
            type: String,
            required: true
        }
    }
}
</script>
