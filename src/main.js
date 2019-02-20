import Vue from 'vue';
import App from './App.vue';
// 让浏览器console里面不出现生产的提示，他是vue的配置，在官网的配置目录可查询
// Vue.config.productionTip = false
import 'nprogress/nprogress.css';
import './assets/less/reset.less';
import router from './router';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
