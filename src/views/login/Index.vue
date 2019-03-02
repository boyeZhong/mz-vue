<template>
  <div class="mz-login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png">
    </div>
    <div class="login-form">
      <div class="form-group">
        <input placeholder="用户名" class="input-control" type="text" v-model="userName" />
      </div>
      <div class="form-group">
        <input placeholder="密码" class="input-control" type="password" v-model="password" />
      </div>
      <div class="submit login-btn" @click="handleLogin">
        <span>登录</span>
      </div>
      <router-link tag="div" class="noRegister" to="/register">未注册？</router-link>
    </div>
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
      axios.post('http://129.28.119.175:3000/user/login', {
        userName: this.userName,
        password: this.password
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          alert('登录成功');
          // 将昵称保存在本地
          console.log(data.data);
          sessionStorage.setItem('nickname', data.data.nickName);
          // 保存成功以后让页面跳转到进来登录之前的页面,this.$route.query.redirect这是由上个页面的路由带过来的数据
          let loginPath = {
            path: '/center',
            query: { id: '个人中心' }
          };
          this.$router.push(this.$route.query.redirect === undefined ? loginPath : this.$route.query.redirect);
        } else {
          alert(data.msg);
        }
      })
    }
  }
}
</script>
<style lang="less">
body{
  background: white;

.mz-login {
  font-size: 16px;

  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }

  .login-form {

    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;

      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
        border-bottom: 1px solid #d6d5d4;
      }
    }

    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
    }
    .noRegister {
      text-align: center;
      height: 44px;
      line-height: 44px;
      color: black;
      width: 100%;
    }
  }
}
}
</style>
