<template>
    <div>
        个人中心
        <ul>
          <router-link tag="li" to="/mzcard" >卖座卡</router-link>
          <router-link tag="li" to="/balance">余额</router-link>
          <router-link tag="li" to="/system">设置</router-link>
        </ul>
    </div>
</template>
<script>
export default {
  components: {
  }
}
</script>
