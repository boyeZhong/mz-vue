import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

Vue.use(VueRouter);

// 配置路由
let router = new VueRouter({
  routes: [
    {
      path: '/films',
      component: Film
    },
    {
      path: '/cinemas',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

// 暴露路由
export default router;
