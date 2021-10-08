<!-- 验证码登录模块 -->
<template>
  <div>
    <div class="login_box">
      <nav-bar class="title">
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="title_center">验证码登录</span>
      </nav-bar>

      <div class="logo">
        <div class="logo_box">
          <img src="@/assets/img/logo/bswk.png" alt="">
        </div>
      </div>

      <div class="login_information">
        <div>
          <input type="text" id="" placeholder="请输入手机号" v-model="loginInfo.telephone">
          <input type="text" name="" id="" placeholder="验证码" class="obtain_input" v-model="loginInfo.ValidateCode">
          <input value="发送验证码" class="obtain" @click='sendValidateCode' ref="sendValidateCode" type="button"></input>
        </div>
        <button @click='QueryCode'>下一步</button>
      </div>
      <!-- 错误提示 -->
      <ErrorMessage ref='error'></ErrorMessage>
    </div>
  </div>
</template>

<script>
  import { //导入请求
    SendVerificationCode, //发送验证码
    QueryVerificationCode, //验证验证码信息
    VerificationCodeLogin, //验证码登录
  } from '@/network/login.js'

  import NavBar from '@/components/common/navbar/NavBar' //顶部信息
  import ErrorMessage from '@/components/common/errorviews/ErrorMessage' //错误信息
  export default {
    name: 'ValidaTion',
    components: {
      NavBar,
      ErrorMessage
    },
    data() {
      return {
        loginInfo: {}, //登录信息
        nums: 5, //定义验证码获取按钮禁止事件
        clock: {}, //定时器对象，方便到时候停止
      }
    },
    methods: {
      back() {
        this.$router.go(-1) //路由返回
      },

      sendValidateCode() { //发送验证码
        let telephone = this.loginInfo.telephone //获取用户输入的手机号
        if (!this.checkTelephone(telephone)) { //调用js方法，校验输入的手机号是否合法
          this.$refs.error.alertDia('请输入正确的手机号码～') //校验不通过,提示错误信息
        } else { //校验通过,发送验证码，并调用定时器禁止按钮点击
          SendVerificationCode(telephone) //发送验证码
          this.$refs.error.alertDia('已发送～请尽快验证哦～') //校验通过,提示信息
          this.clock = setInterval(() => { //校验通过,调用定时器禁止按钮点击
            this.doLoop()
          }, 1000)
        }
      },

      QueryCode() { //查询验证码
        let telephone = this.loginInfo.telephone //手机号
        let code = this.loginInfo.ValidateCode //验证码
        QueryVerificationCode(telephone, code)
          .then(res => {
            if (res.data) {
              this.CodeLogin() //验证码正确，调用登录请求
            }
          })
          .catch(res => {
            this.$refs.error.alertDia('请输入正确的验证码') //验证码不正确弹出提示框
          })
      },

      // 验证码登录
      CodeLogin() {
        let code = this.loginInfo.ValidateCode
        let phone = this.loginInfo.telephone
        VerificationCodeLogin(phone, code)
          .then(res => {
            console.log(res); //打印请求结果，把里面的data带到状态管理进行本地储存
            // console.log(this.$store);
            this.$store.commit('LoginState', JSON.stringify(res.data))
            this.$router.replace('/home')
          })
      },

      checkTelephone(telephone) { // 验证手机号码
        var reg = /^1(3\d|4[5-8]|5[0-35-9]|6[567]|7[01345-8]|8\d|9[025-9])\d{8}$/
        if (reg.test(telephone)) {
          return true;
        } else {
          return false;
        }
      },

      doLoop() { //禁用按钮60秒
        var button = this.$refs.sendValidateCode
        this.nums--
          if (this.nums > 0) {
            button.value = this.nums + '秒后再试';
            button.disabled = true
          } else {
            button.value = '重新获取';
            button.disabled = false
            clearInterval(this.clock)
            this.nums = 5
          }
      }
    }
  }
</script>

<style scoped>
  .error_word {
    position: absolute;
    top: 0;
    left: 100px;
    font-size: 12px;
  }

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
    /* top: 30px; */
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

  .login_information .obtain {
    width: 80px;
    height: 32px;
    font-size: 12px;
    position: absolute;
    padding: 0;
    top: 72px;
    right: 38px;
    margin: 0;
    color: #D43C33;
  }

  .obtain_input {
    margin-right: 92px;
    width: 50% !important;
    text-align: left;
  }
</style>
