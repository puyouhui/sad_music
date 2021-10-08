<template>
  <div>
    <NavBar>
      <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
      <span slot="center" class="iconfont title_center"><i>我喜欢的音乐</i></span>
      <!-- <span slot="right" class="iconfont title_right">&#xe618;</span> -->
    </NavBar>
    <!-- 背景图片  -->
    <div class="background">

      <img :src="cover_word.coverImgUrl" alt="">
    </div>
    <!-- 歌单信息 -->
    <div class="play_data">
      <div class="cover">
        <span class="iconfont play_num">&#xe690;
          {{(cover_word.playCount/10000).toFixed(0)}}万
        </span>
        <img :src="cover_word.coverImgUrl" alt="">
      </div>
      <div class="play_name">
        <!-- 名字 -->
        <div class="list_name">
          <p>{{cover_word.name}}</p>
        </div>
        <!-- 创建者信息 -->
        <div class="created_name">
          <span>
            <i class="user_photo">
              <img :src="cover_word.creator.avatarUrl" alt="">
            </i>
            &nbsp;&nbsp;
            <span>
              {{cover_word.creator.nickname}}
            </span>
          </span>
        </div>
        <!-- 简介 -->
        <div class="brief">
          <span>{{cover_word.copywriter}}</span>
        </div>
      </div>
    </div>
    <!-- 控件按钮 -->
    <div class="control">
      <div class="control_left">
        <div>
          <!-- <span class="iconfont">&#xe689;&nbsp;</span> -->
          <span class=" iconfont">&#xe689;&nbsp;{{cover_word.subscribedCount}}</span>
        </div>
      </div>
      <div class="control_center">
        <div>
          <!-- <span class="iconfont"></span> -->
          <span class=" iconfont">&#xe67f;&nbsp;{{cover_word.commentCount}}</span>
        </div>
      </div>
      <div class="control_right">
        <div>
          <!-- <span class="iconfont">&#xe648;&nbsp;</span> -->
          <span class=" iconfont">&#xe648;&nbsp;{{cover_word.shareCount}}</span>
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <!-- 播放全部按钮 -->
    <play-all></play-all>
    <!-- 歌曲列表 -->
    <scroll :scroll_data='sliding_data'>
      <div slot="main_body">
        <song-list :play_isshow='false' :songs='song_list'>
        </song-list>
      </div>
    </scroll>
  </div>
</template>


<script>
  // 导入请求
  import {
    getSongList,
    getSongDetailed
  } from '@/network/songlist.js'

  import NavBar from '@/components/common/navbar/NavBar' //导航栏
  import SongList from '@/components/content/songlist/SongList' //歌曲列表
  import Scroll from '@/components/common/scroll/Scroll' //滚动插件
  import PlayAll from '@/components/content/playall/PlayAll' //播放全部
  export default {
    name: 'LikeMusicList',
    components: {
      NavBar,
      SongList,
      Scroll,
      PlayAll
    },
    data() {
      return {
        sliding_data: {
          content_height: 61
        },
        cover_word: {}, //歌单封面和信息
        song_list: [], //歌曲列表,
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
    },
    created() {
      console.log(JSON.parse(localStorage.getItem('LikeMusicList')));
      this.cover_word = JSON.parse(localStorage.getItem('LikeMusicList'))
      this.song_list = JSON.parse(localStorage.getItem('LikeMusicList')).tracks
    }
  }
</script>


<style scoped>
  .recommended {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .head_title {
    z-index: 999;
    font-size: 12px;
    line-height: 44px;
  }

  .background {
    box-sizing: border-box;
    filter: blur(20px)brightness(70%);
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    /* border-radius: 0 0 10% 10%; */
  }

  .background img {
    width: 100%;
  }

  .title_left {
    display: block;
    font-size: 22px;
    color: mintcream;
  }

  .title_center {
    /* line-height: 10px; */
    color: mintcream;
    font-size: 14px;
  }

  .title_center i {
    display: block;
    /* padding-bottom: 10px; */
  }

  .title_right {
    display: block;
    color: #fff;
    font-size: 20px;
  }

  .play_data {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 135px;
  }

  .cover {
    /* flex: 1; */
    position: relative;
    height: 100px;
    width: 100px;
    margin-left: 20px;
    margin-top: 10px;
    text-align: center;
    /* background-color: rosybrown; */
  }

  .cover img {
    width: 100%;
    border-radius: 10px;
  }

  .cover .play_num {
    position: absolute;
    right: -2px;
    top: 3px;
    height: 16px;
    line-height: 16px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 7px;
    color: #fff;
    font-size: 12px;
    background-color: rgba(0, 0, 0, .4);
    transform: scale(0.7);
  }

  .user_photo {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    vertical-align: middle;
    overflow: hidden;
  }

  .user_photo img {
    width: 100%;
  }

  .play_name {
    line-height: 20px;
    flex: 1;
    padding-left: 20px;
    color: #fff;
  }

  .play_name div {
    width: 80%;
    overflow: hidden;
    font-size: 12px;
  }

  .play_name .list_name {
    height: 42px;
    font-size: 14px;
    margin-top: 10px;
    overflow: hidden;
  }

  .play_name .created_name {
    font-size: 12px;
    margin-top: 8px;
  }

  .brief {
    margin-top: 10px;
  }

  .icon_focus {
    display: inline;
    width: 35px;
    height: 20px;
    margin-left: 10px;
    border-radius: 10px;
    text-align: center;
    background-color: rgba(255, 255, 255, .2);
  }

  .icon_focus i {
    padding-left: 8px;
    padding-right: 8px;
    line-height: 0px;
    font-size: 16px;
  }

  .control {
    display: flex;
    width: 66%;
    height: 40px;
    margin: 0 auto;
    border-radius: 22px;
    text-align: center;
    font-size: 12px !important;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, .1);
  }

  .control_left {
    flex: 1;
  }

  .control_left>div {
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
    height: 20px;
    line-height: 20px;
    color: #323133;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .control_left>div span {
    text-align: center;
  }

  .control_center {
    flex: 1;
  }

  .control_center>div {
    margin-top: 10px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    color: #323133;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .control_center>div div {
    float: left;
  }

  .control_right {
    flex: 1;
  }

  .control_right>div {
    margin-top: 10px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    color: #323133;
  }

  .control_right>div div {
    float: left;
  }

  .play_all {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    /* background-color: salmon; */
    border-bottom: 1px solid rgb(241, 241, 241);
    font-size: 16px;
  }

  .play_word {
    float: left;
    margin-left: 4px;
    margin-top: 2px;
    font-size: 14px;
    color: #333;
  }

  .icon {
    padding-right: 20px;
    text-align: right;
    color: #333;
  }
</style>
