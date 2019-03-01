import Vue from 'vue';
import VueRouter from 'vue-router';
import nprogress from 'nprogress';
Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
  // mode: 'history',一般用hash，history需要后台配合，在生产模式的时候
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('./views/home/Index.vue'),
      children: [
        // Ps:不是一级路由的话，path路径前面不要加/
        // 二级或者二级以上的路由，他们的url地址，会从一级路由开始加
        // localhost:8080/#/home/films
        {
          path: 'films',
          component: () => import('./views/home/film/Index.vue'),
          children: [
            {
              path: 'nowPlaying',
              component: () => import('./views/home/film/NowPlaying.vue')
            },
            {
              path: 'comingSoon',
              component: () => import('./views/home/film/ComingSoon.vue')
            },
            {
              path: '',
              redirect: '/films/nowPlaying'
            }
          ]
        },
        {
          path: 'cinemas',
          component: () => import('./views/home/cinema/Index.vue')
        },
        {
          path: 'center',
          component: () => import('./views/home/center/Index.vue')
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
      component: () => import('./views/city/Index'),
      children: [
        {
          path: 'mz-header',
          component: () => import('./components/MzHeader/Index.vue')
        }
      ]
    },
    {
      path: '/detail/:id',
      props: true,
      component: () => import('./views/detail/Index.vue')
    },
    {
      path: '*',
      redirect: './films'
    },
    {
      path: '/mzcard',
      component: () => import('./views/mycard/Index.vue')
    },
    {
      path: '/balance',
      component: () => import('./views/balance/Index.vue')
    },
    {
      path: '/system',
      component: () => import('./views/system/Index.vue')
    },
    {
      path: '/login',
      component: () => import('./views/login/Index.vue')
    }
  ]
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start();
  // 通过sessionStorage存储的本地昵称来判断是否登录
  // (to.path === '/mzcard' || to.path === '/balance' || to.path === '/system') && !sessionStorage.getItem('nickname')
  let list = ['/mzcard', '/balance', '/system'];
  let nickname = !sessionStorage.getItem('nickname');
  if (list.indexOf(to.path) > -1 && nickname) {
    next({
      path: '/login',
      query: {
        // 登录成功以后将之前点击的完整地址传过登录页面
        redirect: to.fullPath
      }
    });
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
