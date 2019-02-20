import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import Home from './views/Home.vue';
import City from './views/City.vue';
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';
import nprogress from 'nprogress';
Vue.use(VueRouter);

// 配置路由
let router = new VueRouter({
  // mode: 'history',一般用hash，history需要后台配合，在生产模式的时候
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
    },
    {
      path: '/mzcard',
      component: {
        render (h) {
          return h('div', '卖座卡')
        }
      }
    },
    {
      path: '/balance',
      component: {
        render (h) {
          return h('div', '余额')
        }
      }
    },
    {
      path: '/system',
      component: {
        render (h) {
          return h('div', '设置')
        }
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start();
  // to and from are both route objects. must call `next`.
  if (to.path === '/mzcard' || to.path === '/balance' || to.path === '/system') {
    next('/login');
  } else {
    next();
  }
});
// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.configure({ showSpinner: false });
  nprogress.done();
});
// 暴露路由
export default router;
