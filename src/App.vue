<template>
  <div id="app">

    <main-search></main-search>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  //引用amfe-flexible解决适配
  import 'amfe-flexible'
  import MainSearch from '@/components/MainSearch'
  import MainTabBar from '@/components/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainSearch,
      MainTabBar,
    }
  }
</script>

<style>
  @import url(./assets/css/base.css);
  /* 引入自定义css */

  @import url(./assets/iconfont/iconfont.css);
  /* //引用字体图标 */
</style>
