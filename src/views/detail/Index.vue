<template>
  <div>
    详情页面

    哈哈哈哈哈哈

    <h1>当前影片的 id是 {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  created () {
    // 根据 id 去请求数据
    console.log(this.$route.params.id);
    console.log(this.$router);
  }
}
</script>
