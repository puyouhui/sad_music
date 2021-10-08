<template>
  <div class="recommended">
    <!-- 背景和顶部标题 -->
    <div class="head_title">
      <!-- 标题 -->
      <NavBar class="navbar">
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="iconfont title_center">今日推荐</span>
        <!-- <span slot="right" class="iconfont title_right">更多</span> -->
      </NavBar>
      <!-- 背景图片 -->
      <div class="background">
        <img src="https://api.dujin.org/pic/ghibli" alt="">
      </div>
      <!-- 日期和运气-->
      <div>
        <div class="date">
          <span class="day">04</span>
          <span class="month">&nbsp;/&nbsp;09</span>
        </div>
        <div class="luck">
          <span>查看今日运势&nbsp;&nbsp;></span>
        </div>
      </div>
    </div>
    <!-- 背景和顶部标题结束 -->
    <!-- 由于上方有浮动，下面这个div解决一下浮动 -->
    <div class="flot">

    </div>
    <!-- 播放全部 -->
    <PlayAll></PlayAll>
    <!-- 引入滚动 -->
    <scroll :scroll_data='scroll_data'>
      <!-- 列表 -->
      <div slot="main_body">
        <song-list :songs='song_list'></song-list>
      </div>
    </scroll>
    <small-play></small-play>
  </div>
</template>

<script>
  //导入请求模块
  import {
    getDayRecommend
  } from '@/network/day-recommended.js'
  import NavBar from '@/components/common/navbar/NavBar' //顶部组件
  import SongList from '@/components/content/songlist/SongList' //歌曲列表
  import Scroll from '@/components/common/scroll/Scroll' //滚动组件
  import PlayAll from '@/components/content/playall/PlayAll' //播放全部
  import SmallPlay from '@/components/content/small-play/SmallPlay' //底部播放控件
  export default {
    name: 'DayRecommended',
    components: {
      NavBar,
      SongList,
      Scroll,
      PlayAll,
      SmallPlay
    },
    data() {
      return {
        song_list: [], //存放歌曲列表
        scroll_data: { //定义滚动高度
          content_height: 65
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
    created() {
      getDayRecommend()
        .then(res => {
          this.song_list = res.data.data.dailySongs
          console.log(res);
        })
    }

  }
</script>

<style scoped>
  .recommended {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #F9F9F9;
  }

  .head_title {
    font-size: 12px;
    text-align: center;
    line-height: 44px;
  }

  .navbar {
    position: relative;
    top: 0;
  }

  .background {
    /* filter: blur(20px) brightness(90%); */
    height: 180px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    /* border-radius: 0 0 10% 10%; */
  }

  .background img {
    width: 100%;
    /* z-index: 0; */
  }

  .title_left {
    font-size: 26px;
    color: mintcream;
  }

  .title_center {
    color: mintcream;
    font-size: 14px;
  }

  .date {
    color: mintcream;
    position: absolute;
    left: 20px;
    top: 110px;
    font-size: 20px;
  }

  .date .day {
    font-size: 40px;
  }

  .luck {
    position: absolute;
    left: 25px;
    top: 142px;
    color: mintcream;
  }

  .flot {
    width: 100%;
    height: 135px;
  }

  .list {
    margin-top: 170px;
  }
</style>
