<template>
    <div class="mz-films">
        <div class="city-fixed" v-on:click='goCity'>
          <span>{{curCityName}}</span>
          <i class="iconfont icon-xiala" style="font-size: 10px;"></i>
        </div>
        <mz-banner></mz-banner>
        <mz-tabs></mz-tabs>
        <router-view></router-view>
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
  computed: {
    curCityName () {
      // 借助computed返回仓库的数据
      return this.$store.state.curCityName;
    }
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
<style lang="less">
  .mz-films{
      .city-fixed {
        position: absolute;
        top: 18px;
        left: 7px;
        color: #fff;
        z-index: 10;
        font-size: 13px;
        background: rgba(0,0,0,.2);
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        padding: 0 5px;
      }
  }
  // 热映 预售样式，三级路由
  .nowPlaying {
  background-color: white;
  width: 100%;
  padding-bottom: 50px;
  .nowPlayingFilm-item {
    border-bottom: 1px solid #ededed;
    padding: 15px;
    width: 100%;
    height: 124px;
    box-sizing: border-box;
    .nowPlayingFilm-wrap {
      display: flex;
      flex-direction: row;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .img-box {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        overflow: hidden;
        flex: 1;
        img {
          height: 94px;
          min-width: 66px;
        }
        .nowPlayingFilm-info {
          flex: 1;
          height: 81px;
          padding: 0 10px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .label {
            font-size: 14px;
            line-height: 18px;
            color: #797d82;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            display: inline-block;
          }
          .labe {
            font-size: 14px;
            line-height: 18px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
        }
      }
      .nowPlayingFilm-buy {
        min-width: 50px;
        height: 25px;
        border: 1px solid #ff5f16;
        text-align: center;
        line-height: 25px;
        color: #ff5f16;
        border-radius: 3px;
      }
    }
  }
  .xiala {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    background: #eaeae9;
    border-bottom: 1px solid #ededed;
    color: #ff5f16;
  }
}
</style>
