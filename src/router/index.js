//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/News';
import Message from '@/pages/Message.vue';
import Detail from '@/pages/Detail.vue';
import News from '../pages/News.vue';

export default new VueRouter({
  routes: [
    {
      name:'regard',
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
          {
            path:'message',
            component: Message,
            children:[
            {
              name:'particulasr',
              path: 'detail/:id/:title',
              component: Detail,
              props({query:{id,title}}){
                return {id,title}
              }
            }
          ]
        }
      ]
    }
  ]
});