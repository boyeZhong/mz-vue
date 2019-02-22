<template>
    <div>
        <h2>登录</h2>
        <input type="text" placeholder="用户名" v-model="userName"><br>
        <input type="password" placeholder="密码" v-model="password"><br>
        <button @click="handleLogin">提交</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    /**
         * 登录方法
         */
    handleLogin () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.userName,
        password: this.password
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          alert('登录成功');
          // 将昵称保存在本地
          sessionStorage.setItem('nickname', data.data.nickname);
          console.log(data.data);
          // 保存成功以后让页面跳转到进来登录之前的页面,this.$route.query.redirect这是由上个页面的路由带过来的数据
          this.$router.push(this.$route.query.redirect);
        } else {
          alert(data.msg);
        }
        console.log(data);
      })
    }
  }
}
</script>
