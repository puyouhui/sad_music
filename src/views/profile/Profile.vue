<template>
  <div class="profile">
    <!-- 顶部信息 -->
    <div class="top_word">
      <nav-bar>
        <span slot="center"></span>
        <span slot="right" class="iconfont">&#xe662;</span>
      </nav-bar>
    </div>
    <!-- 用户信息和签到 -->
    <user-word></user-word>
    <!-- 功能导航 -->
    <nav-function></nav-function>
    <!-- 喜欢的音乐 -->
    <like :like_list='like_list'></like>
    <!-- 歌单部分 -->
    <play-list-switch :play_list='play_list'></play-list-switch>
    <!-- 底部主导航 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import {
    getProfilePlayList
  } from '@/network/profile.js'
  //底部导航
  import MainTabBar from '@/components/content/MainTabBar'
  //顶部组件
  import NavBar from '@/components/common/navbar/NavBar'
  // 用户信息和签到
  import UserWord from '@/views/profile/profile-childs/UserWord'
  //功能导航
  import NavFunction from '@/views/profile/profile-childs/NavFunction'
  //喜欢功能块
  import Like from '@/views/profile/profile-childs/Like.vue'
  //歌单切换模块
  import PlayListSwitch from '@/views/profile/profile-childs/PlayListSwitch.vue'

  export default {
    name: 'Profile',
    components: {
      MainTabBar,
      NavBar,
      UserWord,
      NavFunction,
      Like,
      PlayListSwitch
    },
    data() {
      return {
        like_list: {}, //喜欢的
        play_list: [],
      }
    },
    created() {
      getProfilePlayList()
        .then(res => {
          this.play_list = res.data.playlist.slice(1, res.data.playlist.length) //把第一个数据截掉，应为已经在上面展示了
          this.like_list = res.data.playlist[0]
        })
    },
  }
</script>

<style scoped>
  .profile {
    position: relative;
    background-color: #f6f6f6;
    /* z-index: -1; */
  }
  
  .top_word {
    position: relative;
    z-index: 1;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    color: rgb(255, 255, 255);
  }
</style>