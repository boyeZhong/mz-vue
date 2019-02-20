<template>
  <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
        <img :src="item.imgUrl" alt>
        Slide 1
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
// 使用axios调用后台的接口。

// 1.引入他 axios
import axios from 'axios';
export default {
  data () {
    return {
      // 轮播图的数据
      bannerList: [],

      // 创建一个变量来接受swiper的实例对象
      mySwiper: null
    };
  },
  methods: {
    initSwiper () {
      /* eslint-disable */
      new Swiper(".swiper-container", {
         autoplay: true,
         loop: true, // 循环模式选项
         // 如果需要分页器
         pagination: {
           el: ".swiper-pagination"
         }
      });
      /* eslint-enable */
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/search', {
      // params才是get的参数
      params: {
        pageSize: 10
      }
    })
      . then(res => {
        // !!!res不是 后台给你返回的数据，真正后台给你返回的数据在res.data上
        let data = res.data;
        this.bannerList = data.data;
        if (data.code === 0) {
          // 1.数据更新之后，对轮播图做个更新
          this.$nextTick(() => {
            this.initSwiper();
          })
          // 2.数据更新之后,再做new Swiper（ps：数据得更新到页面真实dom的更新还需要一点时间，因为axios是异步的，$nextTick(),这个方法能够保证真实的dom更新，他是swiper实例的一个方法
          // this.$nextTick(() => {
          //   /* eslint-disable */
          //   new Swiper(".swiper-container", {
          //     autoplay: true,
          //     loop: true, // 循环模式选项
          //     // 如果需要分页器
          //     pagination: {
          //       el: ".swiper-pagination"
          //     }
          //   });
          //   /* eslint-enable */
          // }, 1000);
        } else {
          alert('网络异常请稍后')
        }
      });
  },
  mounted () {
  }
};
</script>
<style lang="less">
.mz-banner {
  height: 210px;
  width: 100%;
  div {
    img {
      width: 100%;
      height: 100%;
    };
    .swiper-pagination-bullet{
      opacity: 1;
    }
  }
}
</style>
