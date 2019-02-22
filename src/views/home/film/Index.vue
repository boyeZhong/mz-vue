<template>
    <div>
        <mz-banner></mz-banner>
        <mz-tabs></mz-tabs>
        <button v-on:click='goCity'>城市页面</button>
        <ul>
          <router-link tag="li" to="/detail/100">蓝色生死恋</router-link>
          <router-link tag="li" to="/detail/200">50米之恋</router-link>
          <router-link tag="li" to="/detail/300">流浪地球</router-link>
        </ul>
    </div>
</template>
<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index';
export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    goCity () {
      // 字符串类型传参
      // this.$router.push('/city');
      // 对象类型传参，但是path和params不能同时使用
      this.$router.push({
        // 根据路由的path路径
        path: '/city',
        // 路由传参
        // params: {
        //   id: 10
        // },
        query: {
          id: 10
        },
        // 命名传参，和routerjs里面的路由name一致就去哪个路由
        name: '呵呵'
      })
    }
  }
}
</script>
