<template>
  <div>
    <h1>当前影片:{{ $route.params.id.name }}</h1>
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
