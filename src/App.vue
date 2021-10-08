<template>
  <div id="app">
    <Audio style="display: none;"></Audio>
    <PlayOrder></PlayOrder>
    <router-view></router-view>
  </div>
</template>

<script>
  //引用amfe-flexible解决适配
  import 'amfe-flexible'
  import Audio from '@/components/content/audio/Audio' //播放器
  import PlayOrder from '@/components/content/playorder/PlayOrder'
  import {
    getCookie,
    getloginData,
    getloginId,
    delCookie,
    QueryLogin
  } from '@/util/util.js'

  import {
    LoginRefresh
  } from '@/network/login.js'

  export default {
    name: 'App',
    components: {
      Audio,
      PlayOrder
    },
    created() {
      // console.log(localStorage.login_data);
      // console.log(Loginstatus());
      // console.log(getCookie());
      // console.log(getloginData());
      // console.log(LoginRefresh());
      // delCookie()
      // console.log(QueryLogin()); //检查登录状态
      this.$store.commit('SetLoginStore', QueryLogin())
      const login = this.$store.state.login_store
        // localStorage.clear(); //清除登录信息
      this.$store.commit('StorageLoginStore') //调用这个方法把数据存到vuex中
        // console.log(this.$store.state.login_state);
    },
    methods: {
      clickroot() {
        console.log(111);
      }
    }
  }
</script>

<style>
  @import url(./assets/css/base.css);
  /* 引入自定义css */

  @import url(./assets/iconfont/iconfont.css);
  /* //引用字体图标 */
</style>
