<template>
  <div>
    <h1>当前影片:{{ detailData.name === '' ? detailData.bannerId : detailData.name}}</h1>
    <img :src="detailData.imgUrl ? detailData.imgUrl : detailData.poster " alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailData: null
    }
  },
  created () {
    // 根据 id 去请求数据
    this.detailData = this.$route.params.id;
    console.log(this.detailData.bannerId);
    console.log(this.detailData.name);
    console.log(this.detailData);
  }
}
</script>
