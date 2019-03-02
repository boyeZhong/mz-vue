<template>
  <div class="comingSoon">
    <ul infinite-scroll-disabled="loading" infinite-scroll-distance="100" class="comingSoonList">
      <li  v-for='film in comingFilmData' :key = 'film.filmId' class="comingSoon-item">
        <a class="comingSoon-wrap">
          <div class="img-box">
            <img
              :src="film.poster"
            >
            <div class="comingSoon-info">
              <div class="comingSoon-name">
                <span class="name">{{film.name}}</span>
                <span class="item">{{film.filmType && film.filmType.name}}</span>
              </div>
              <div class="comingSoon-grade">
                <span class="labe">{{film.grade ? '观众评分' : '  '}}</span>
                <span class="grade">{{film.grade}}</span>
              </div>
              <div class="comingSoon-actors">
                <span class="label">主演：{{film.actors ? film.actors.map(item => item.name).join(' ') : '暂无主演'}}</span>
              </div>
              <div class="comingSoon-detail">
                <span class="label">{{film.nation}} | {{film.runtime}}分钟</span>
              </div>
            </div>
          </div>
          <div class="comingSoon-buy">预售</div>
        </a>
      </li>
    </ul>
    <div class="comingXiala" v-if="comingPages <= comingPageNum">别拉啦，我是有底线的</div>
    <div class="comingXiala" v-else @click="comingLoadMore">加载下一页</div>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      comingFilmData: [],
      comingPageNum: 1,
      comingPageSize: 10,
      comingTotal: 0
    }
  },
  computed: {
    comingPages () {
      // 向上取整得到最大页数
      return Math.ceil(this.comingTotal / this.comingPageSize);
    }
  },
  methods: {
    comingGetFilmDate () {
      axios.get('/api/gateway', {
        params: {
          cityId: 440300,
          pageNum: this.comingPageNum,
          pageSize: this.comingPageSize,
          type: 2,
          k: 4230516
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1551354485231928235027"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        let data = res.data;
        this.comingTotal = data.data.total;
        if (data.status === 0) {
          this.comingFilmData = this.comingFilmData.concat(data.data.films);
        } else {
          alert(this.comingFilmData.msg)
        }
      })
    },
    comingLoadMore () {
      this.comingPageNum++;
      this.comingGetFilmDate();
    }
  },
  created () {
    this.comingGetFilmDate();
  }
}
</script>
<style lang="less">
 // 预售样式
.comingSoon {
  background-color: white;
  width: 100%;
  padding-bottom: 50px;
  .comingSoon-item {
    border-bottom: 1px solid #ededed;
    padding: 15px;
    width: 100%;
    height: 124px;
    box-sizing: border-box;
    .comingSoon-wrap {
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
        .comingSoon-info {
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
      .comingSoon-buy {
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
  .comingXiala {
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
