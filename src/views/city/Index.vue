<template>
  <div class="mz-city">
    <mz-header :title='"当前城市- "+ curCityName'></mz-header>
    <div class="citySearch">
          <input type="text" placeholder="请输入城市名或拼音">
          <i class="iconfont icon-magnifier"></i>
    </div>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="indelistId" >
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection" v-for="(item, index) in filterCityData" v-bind:key="index" :id='item.py'>
          <p class="lv-indexsection__index">{{item.py}}</p>
          <ul>
            <li v-for="city in item.list"
                v-bind:key="city.cityId"
                v-on:click='chgCity(city)'>{{city.name}}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
          v-for="(item, index) in filterLetters"
          v-bind:key="index"
          v-on:click="clickFilter(item)"
          >{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MzHeader from '../../components/MzHeader/Index';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      // // 城市列表数据集合
      // cityData: []
    };
  },
  computed: {
    ...mapState([
      'curCityName',
      'cityData'
    ]),
    ...mapGetters([
      'filterCityData',
      'filterLetters'
    ])
  },
  methods: {
    ...mapMutations([
      'chgCityName',
      'chgCityData'
    ]),
    ...mapActions([
      'getCityData'
    ]),
    /**
     * 点击右侧的首字母
     * @param {String} py点击的首字母
     * @returns undefinde
     */
    clickFilter (py) {
      // 1.获取左边元素到他父级元素的距离，只有在父级元素有定位属性的情况才是父级的距离，不然会找body
      let el = document.getElementById(py);
      // 2.操作滚动条让他和el距离相等
      document.getElementById('indelistId').scrollTop = el.offsetTop;
    },
    /**
     *
     * @param {obj} city 城市对象
     *
     */
    chgCity (city) {
      this.chgCityName(city.name);
    }
  },
  created () {
    this.getCityData();
  }
};
</script>
<style lang="less">
@import url("./index.less");
</style>
