<!-- 邮箱登录 -->
<template>
  <div>
    <div class="login_box">
      <nav-bar class="title">
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="title_center">网易邮箱登录</span>
      </nav-bar>

      <div class="logo">
        <div class="logo_box">
          <img src="@/assets/img/logo/bswk.png" alt="">
        </div>
      </div>

      <div class="login_information">
        <form action="">
         <div>
           <input type="text" name="" id="" placeholder="请输入网易邮箱">
           <input type="password" name="" id="" placeholder="密码">
         </div>
          <button>下一步</button>
        </form>
      </div>


    </div>
  </div>
  </template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'EmailLogin',
    components: {
      NavBar
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .login_box {
    height: 100vh;
    width: 100%;
    background-color: #D43C33;
    color: mintcream;
  }

  .title {
    text-align: center;
    line-height: 44px;
  }

  .title_left {
    font-size: 26px;
    text-align: center;
  }

  .title_center {
    font-size: 16px;
  }

  .logo {
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .logo_box {
    box-sizing: border-box;
    width: 70%;
    margin: 0 auto;
  }

  .logo_box img {
    width: 100%;
  }

  .login_information {
    text-align: center;
  }

  .login_information input {
    margin-top: 20px;
    width: 75%;
    height: 30px;
    border-radius: 15px;
    padding-left: 15px;
    font-size: 14px;
    color: #333;
  }

  .login_information button {
    height: 30px;
    width: 100px;
    margin-top: 60px;
    border: solid 1px #ccc;
    border-radius: 15px;
    background-color: mintcream;
    color: #D43C33;
    font-size: 14px;
  }
</style>
