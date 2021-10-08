<template>
  <div>
    <Login v-show='isshow===1'></Login>
    <regis-tered v-show='isshow===2'></regis-tered>
    <email-login v-show='isshow===3'></email-login>
    <valida-tion v-show='isshow===4'></valida-tion>

    <!-- 切换其他方式 -->
    <div class="other">
      <span @click='go_password' v-show='isshow===2'>密码登录</span>
      <span @click='go_password' v-show='isshow===3'>密码登录</span>
      <span @click='go_password' v-show='isshow===4'>密码登录</span>
      <span @click='go_validation' v-show='isshow===1'>验证码登录</span>｜
      <span @click='go_registered'>注册账号</span>｜
      <span @click='go_email_login'>网易邮箱登录</span>
    </div>
  </div>
</template>

<script>
  // 组件都是登录的模式
  import Login from '@/components/content/login/Login' //登录页
  import RegisTered from '@/components/content/login/RegisTered.vue' //注册页面
  import EmailLogin from '@/components/content/login/EmailLogin.vue' //邮箱登录
  import ValidaTion from '@/components/content/login/ValidaTion.vue' //验证码登录
  export default {
    name: 'LoginHome',
    components: {
      Login,
      RegisTered,
      EmailLogin,
      ValidaTion
    },
    data() {
      return {
        isshow: 4
      }
    },
    methods: {
      go_validation() {
        //切换为验证码登录
        this.isshow = 4
      },
      go_password() {
        this.isshow = 1
      },
      //切换为注册
      go_registered() {
        this.isshow = 2
      },
      //切换为邮箱登录
      go_email_login() {
        this.isshow = 3
      }
    }
  }
</script>

<style scoped>
  .other {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    margin-top: 13px;
    font-size: 12px;
    color: #fff;
  }
</style>
