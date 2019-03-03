<template>
  <div class="home-cinema">

    <MzHeader title="影院"></MzHeader>

    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label>
          <span>全城</span>
          <i class="iconfont icon-xiala"></i>
        </label>
        <label>
          <span>最近去过</span>
          <i class="iconfont icon-xiala"></i>
        </label>
      </div>
    </div>

    <div class="cinema-list-wrap">
      <div class="cinema-list">
        <li v-for="cinema in this.cinemaDate" :key="cinema.cityId"  class="cinema-list-item">
          <a href="#/cinema/6269/film" class="cinema-item-wrap">
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">{{cinema.name}}</span>
              <span class="cinema-address">{{cinema.address}}</span>
            </div>
            <div class="cinema-info-rt cinema-info">
              <div class="">
                <span class="cinema-lowPrice price-fmt">
                  <i>￥</i>
                  <span class="interge">{{cinema.lowPrice/100}}</span>
                  <!-- <span class="spot">.</span>
                  <span class="decimal">9</span> -->
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
            </div>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/Index';
import axios from 'axios';
export default {
  data () {
    return {
      cinemaDate: []
    }
  },
  components: {
    MzHeader
  },
  methods: {
    GetCinemaDate () {
      axios.get('/api/gateway', {
        params: {
          cityId: 440300,
          k: 4461800
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1551529566476741372746"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        let data = res.data;
        if (data.status === 0) {
          this.cinemaDate = this.cinemaDate.concat(data.data.cinemas);// 使用concat拼接数组，但是他不会改变原数组，所以要赋值
        } else {
          alert(res.data.msg)
        }
      })
    }
  },
  created () {
    this.GetCinemaDate();
  }
}
</script>

<style lang="less">
@import url('../../../assets/less/mixins.less');
@import url('./index.less');
</style>
