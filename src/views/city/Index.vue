<template>
  <div class="mz-city">
    <mz-header></mz-header>
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
            <li v-for="city in item.list" v-bind:key="city.cityId">{{city.name}}</li>
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
import axios from 'axios';
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      // 城市列表数据集合
      cityData: []
    };
  },
  computed: {
    /**
     *
     * 在计算属性对获取的数据列表数据进行处理得到我们需要的数据格式
     *
     */
    filterCityData () {
      let hash = {};
      let i = 0;
      let res = [];

      this.cityData.forEach(item => {
        // 1.得到当前城市的首字母,每个item都是一个对象，每个对象里面有城市名字的拼音，截取拼音的首字母，变成大写
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // 通过首字母判断，这个首字母之前是否存储过，如果有，就直接将这个对象的城市名字存储到res数组的这个首字母对象，如果没有，就要新建一个首字母对象存入res数组。
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1; // 比如进来的是A hash[A] = 1，nameA模块在res的下标是0
          res[index].list.push(item);
        } else { // 不存在
          hash[firstLetter] = ++i;// hash 是一个对象hash[A] = ++i,相当于给hash添加属性A：1，当第二次又字母进来就是B：2..
          let obj = {};// 这个对象是用来保存城市模块，比如所有首字母用A开头的城市
          obj.py = firstLetter;// 这组城市的首字母
          obj.list = [];// 这组城市的所有城市对象
          obj.list.push(item);// 添加城市对象
          res.push(obj);
        }
      })
      let temp = res.sort((a, b) => { // sort 数组排序，charCodeAt()转换为阿斯克码
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    },

    filterLetters () {
      return this.filterCityData.map(item => { // 这样可以返回一个数组的value值，也可以返回index
        return item.py;
      })
    }

  },
  methods: {
    /**
     *
     * 获取城市列表数据
     *
     */
    getCityData () {
      axios.get('./json/city.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 获取成功
          this.cityData = res.data.cities;
        } else {
          // 获取失败
          alert(res.msg);
        }
      })
    },
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
