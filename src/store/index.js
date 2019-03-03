import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
// 创建仓库对象
let store = new Vuex.Store({
  // 状态 - 项目中需要使用的复用数据
  state: {
    // 当前城市定位
    curCityName: '深圳',
    // 当前城市Id
    curCityId: 440300,
    // 城市列表数据
    cityData: [],
    // 电影类型
    filmType: 'nowPlaying'
  },
  getters: {
    /**
    * 对state中的cityData做二次数据处理
    * @param {Object} state 仓库中的store
    */
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];

      state.cityData.forEach(item => {
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
    /**
     * @param {Object} state 仓库中的store
     * @param {Object} getters 仓库中的getters
     */
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => { // 这样可以返回一个数组的value值，也可以返回index
        return item.py;
      })
    }
  },
  mutations: {
    /**
     *
     * @param {state} state就是仓库中的state
     * @param {payload}
     */
    changeFilmType (state, payload) {
      state.filmType = payload;
    },
    //   key: value
    /**
     * 修改curCityName
     * @param {obj}satte就是当前仓库的state
     * @prame {String} name 城市名
     */
    chgCityName (state, city) {
      state.curCityName = city.name;
      state.curCityId = city.cityId
    },
    /**
     *
     * @param {obj} state
     * @param {array} payload
     */
    chgCityData (state, payload) {
      state.cityData = payload;
    }
  },
  actions: {
    /**
     *
     * 获取城市列表数据
     *
     */
    getCityData ({ commit }) {
      axios.get('./json/city.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 获取成功
          // this.$store.commit('chgCityData', res.data.cities);
          // this.chgCityData(res.data.cities);
          let citiesData = [];
          citiesData = citiesData.concat(res.data.cities);
          commit('chgCityData', citiesData);
        } else {
          // 获取失败
          alert(res.msg);
        }
      })
    }
  }
})
// 暴露store
export default store;
