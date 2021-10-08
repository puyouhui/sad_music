<!-- 注册模块 -->
<template>
  <div>
    <div class="login_box">
      <nav-bar class="title">
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="title_center">注册</span>
      </nav-bar>

      <div class="logo">
        <div class="logo_box">
          <img src="@/assets/img/logo/bswk.png" alt="">
        </div>
      </div>

      <div class="login_information">
        <form action="">
         <div>
           <input type="text" name="" id="" placeholder="请输入手机号">
           <input type="text" name="" id="" placeholder="验证码" class="obtain_input">
           <button class="obtain" >发送验证码</button>
           <input type="password" placeholder="设置密码">
           <input type="text" placeholder="输入昵称">
         </div>
          <button>下一步</button>
        </form>
      </div>


    </div>
  </div>
  </template>

<script>
  import {
    SendVerificationCode
  } from '@/network/login.js'

  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'RegisTered',
    components: {
      NavBar
    },
    methods: {
      back() {
        this.$router.go(-1)
      },

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
    position: relative;
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

  .obtain_input {
    margin-right: 92px;
    width: 50% !important;
    text-align: left;
  }

  .login_information button {
    height: 30px;
    width: 100px;
    margin-top: 40px;
    border: solid 1px #ccc;
    border-radius: 15px;
    background-color: mintcream;
    color: #D43C33;
    font-size: 14px;
  }

  .login_information .obtain {
    width: 80px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    top: 72px;
    right: 40px;
    margin: 0;
  }
</style>
