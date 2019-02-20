import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import Home from './views/Home.vue';
import City from './views/City.vue';
import Detail from './views/Detail.vue';

Vue.use(VueRouter);

// 配置路由
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // Ps:不是一级路由的话，path路径前面不要加/
        // 二级或者二级以上的路由，他们的url地址，会从一级路由开始加
        // localhost:8080/#/home/films
        {
          path: 'films',
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      name: '呵呵',
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      props: true,
      component: Detail
    },
    {
      path: '*',
      redirect: './films'
    }
  ]
})

// 暴露路由
export default router;
