<template>
  <div>
    <div class="login_box">
      <nav-bar class="title">
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="title_center">登录</span>
      </nav-bar>

      <div class="logo">
        <div class="logo_box">
          <img src="@/assets/img/logo/bswk.png" alt="">
        </div>
      </div>

      <div class="login_information">
          <div>
            <input type="text" name="" id="" placeholder="手机号/账号" v-model='loginInfo.phone'>
            <input type="password" name="" id="" placeholder="密码" v-model='loginInfo.password'>
          </div>
          <button @click='Login'>下一步</button>
      </div>

      <!-- 错误提示 -->
      <ErrorMessage ref='error'></ErrorMessage>
    </div>
  </div>
</template>

<script>
  import {
    PasswordLogin
  } from '@/network/login.js'


  import NavBar from '@/components/common/navbar/NavBar'
  import ErrorMessage from '@/components/common/errorviews/ErrorMessage' //错误信息
  export default {
    name: 'Login',
    components: {
      NavBar,
      ErrorMessage
    },
    data() {
      return {
        loginInfo: {}
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      // 密码登录
      Login() {

        let phone = this.loginInfo.phone
        let password = this.loginInfo.password
        if (this.checkTelephone(phone)) {
          PasswordLogin(phone, password)
            .then(res => {
              if (res.data.code == 200) {
                console.log(res); //打印请求结果，把里面的data带到状态管理进行本地储存
                this.$store.commit('LoginState', JSON.stringify(res.data))
                this.$refs.error.alertDia('登录成功！')
                  // this.$router.replace('/home')
              } else if (res.data.code != 200) {
                this.$refs.error.alertDia('密码错误或信息有误～')
              }
            })
            .catch(res => {
              console.log(res);
              this.$refs.error.alertDia('无法登录，稍后重试～') //密码不正确弹出提示框
            })
        } else if (password == undefined) {
          this.$refs.error.alertDia('别忘记输入密码哦～')
        } else if (phone == undefined) {
          this.$refs.error.alertDia('别忘记输入手机号码～')
        } else {
          this.$refs.error.alertDia('请输入正确的手机号码哦～')
        }

      },

      checkTelephone(telephone) { // 验证手机号码
        var reg = /^1(3\d|4[5-8]|5[0-35-9]|6[567]|7[01345-8]|8\d|9[025-9])\d{8}$/
        if (reg.test(telephone)) {
          return true;
        } else {
          return false;
        }
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
