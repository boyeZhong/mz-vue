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
      <div class="form-group">
        <input placeholder="确认密码" class="input-control" type="password" v-model="repassword" />
      </div>
      <div class="form-group">
        <input placeholder="昵称" class="input-control" type="text" v-model="nickName" />
      </div>
      <div class="submit login-btn" @click="handleRegister">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      userName: '',
      password: '',
      repassword: '',
      nickName: '',
      isAdmin: 0
    }
  },
  methods: {
    /**
         * 注册方法
         */
    handleRegister () {
      if (this.password === this.repassword) {
        axios.post('http://129.28.119.175:3000/user/register', {
          userName: this.userName,
          password: this.password,
          nickName: this.nickName,
          isAdmin: this.isAdmin
        }).then(res => {
          let data = res.data;
          if (data.code === 0) {
            alert('注册成功');
            sessionStorage.setItem('nickname', this.nickName);
            // 保存成功以后让页面跳转到进来登录之前的页面,this.$route.query.redirect这是由上个页面的路由带过来的数据
            this.$router.push({
              path: '/films/nowPlaying',
              query: { id: '注册成功' }
            });
          } else {
            alert(data.msg);
          }
        })
      } else {
        alert('两次密码输入不一致');
      }
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
  }
}
}
</style>
