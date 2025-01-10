<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!---
                跳转路由并携带params参数,to的字符串写法
                <router-link :to="'/home/message/detall/'+m.id+'/'+m.title">{{m.title}}</router-link> 
                跳转路由并携带params参数,to的对象写法
                -->
                <router-link 
                :to="{
                    //path: '/home/message/detall',
                    name: 'particulars',//利用路由名字直接跳转路由周化多级路由的path配置
                    //注意如果你这里使用params传递参数,不能配置path,只能配置name,一定要注意
                    query: {
                        id: m.id,
                        title: m.title
                    }
                    }">
                    {{ m.title }}
                </router-link>&nbsp;&nbsp;
                </li>
            </ul>
            <hr/>
            <router-view/>
            </div>
            </template>

            <script>
            export default{
                name: 'Message',
                data(){
                    return{
                        messageList: [
                            {id: '001', title: '新闻'},
                            {id: '002', title: '视频'},
                            {id: '003', title: '图片'},
                            {id: '004', title: '游戏'},
                            {id: '005', title: '音乐'},
                           {id: '006', title: '电影'},
                        ]
                    }
                }
            }
            </Script>

            <style scoped>
            </style>
