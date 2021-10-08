<!-- 歌手详情页 -->
<template>
  <div class="author">
    <!-- 标题 -->
    <NavBar class="navbar">
      <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
      <!-- <span slot="center" class="iconfont title_center">今日推荐</span> -->
      <!-- <span slot="right" class="iconfont title_right">更多</span> -->
    </NavBar>
    <!-- 背景图片 -->
    <div class="background"><img :src="author_data.artist.cover" alt=""></div>
    <!-- 由于上方有浮动，下面这个div解决一下浮动 -->
    <div class="flot"></div>
    <!-- 主要信息 -->
    <div class="mian_data" v-if='store'>
      <div class="portrait"><img :src="author_data.artist.cover" alt=""></div>
      <div class="portrait_border"></div>
      <div class="author_name">{{author_data.artist.name}}
        <span class="identify_icon"><img :src="author_data.identify.imageUrl" alt=""></span>
      </div>

      <div class="author_word">
        <span>{{other_data.profile.follows}}<i> 关注</i> &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{{(other_data.profile.followeds/10000).toFixed(1)}}万 <i>粉丝</i> &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>lv.{{other_data.level}}</span>
      </div>
      <div class="identify">
        <span>{{author_data.identify.imageDesc}}</span>
      </div>
      <div class="focus">
        <span class="iconfont" v-show='focus==false'>&#xe715;</span>
        <span class="iconfont" v-show='focus==true'>&#xe697;</span>
      </div>
    </div>
    <!-- 歌曲和其他信息导航标题 -->
    <div class="square">
      <span @click='go_songs'><i :class='{square_active:square_active==1}'>歌曲</i></span>
      <span @click='go_album'><i :class='{square_active:square_active==2}'>专辑</i></span>
      <span @click='go_message'><i :class='{square_active:square_active==3}'>动态</i></span>
      <span @click='go_video'><i :class='{square_active:square_active==4}'>视频</i></span>
    </div>

    <!-- 歌曲 -->
    <div v-if='square_active==1'>
      <div class="play_all">
        <div class="play_icon"><img src="@/assets/img/play/bofang.png" alt=""></div>
        <div class="play_word">播放热门50首</div>
      </div>
      <scroll :scroll_data='sliding_data'>
        <div slot="main_body">
          <!-- 歌曲列表数据 -->
          <songlist :songs='author_songs_data'></songlist>
        </div>
      </scroll>
    </div>

    <div v-if='square_active==2'>
      <p>暂未开发</p>
    </div>
    <div v-if='square_active==3'>
      <p>暂未开发</p>
    </div>
    <div v-if='square_active==4'>
      <p>暂未开发</p>
    </div>
  </div>
</template>

<script>
  import {
    getArtistHotSong,
    getArtistDescribe
  } from '@/network/author.js'

  import NavBar from '@/components/common/navbar/NavBar' //顶部组件
  import Scroll from '@/components/common/scroll/Scroll' //滚动组件
  import Songlist from '@/components/content/songlist/SongList' //音乐列表
  export default {
    name: 'Author',
    components: {
      NavBar,
      Scroll,
      Songlist
    },
    data() {
      return {
        focus: false, //关注状态
        store: false,
        author_data: {}, //歌手信息
        author_songs_data: [], //歌曲列表
        other_data: {}, //其他信息
        square_active: 1, //活跃页面
        sliding_data: {
          bgc: '#f9f9f9', //传入子组件的导航栏背景颜色
          content_height: 56, //传入子组件的盒子总高度
          // jump_heigth: [200, 780, 990, 1350, 1560] //传入子组件的依次跳转高度
        },
      }
    },
    created() {
      this.store = true
      this.author_data = JSON.parse(localStorage.getItem("author")) // 读取请求到的歌曲信息
      console.log(JSON.parse(localStorage.getItem("author")));
      getArtistHotSong(this.author_data.artist.id) //请求歌曲
        .then(res => {
          this.author_songs_data = res.data.songs
          this.dentiyname = res.secondaryExpertIdentiy
        })
      getArtistDescribe(this.author_data.user.userId) // 获取粉丝和关注
        .then(res => {
          this.other_data = res.data
          console.log(this.other_data);
          this.focus = this.other_data.profile.followed
        })
    },
    methods: {
      back() { //路由返回
        this.$router.go(-1)
      },
      go_songs() { //前往精品
        this.square_active = 1
      },
      go_album() { //前往华语
        this.square_active = 2
      },
      go_message() { //前往民谣
        this.square_active = 3
      },
      go_video() { //前往流行
        this.square_active = 4
      },

    },
    filters: {
      FilterDentiy(value) {
        console.log(value);
      }
    }

  }
</script>


<style scoped>
  .author {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #F9F9F9;
  }

  .navbar {
    position: relative;
    top: 0;
  }

  .background {
    /* filter: blur(5px); */
    height: 185px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    /* border-radius: 0 0 10% 10%; */
  }

  .background img {
    position: absolute;
    top: -35px;
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

  .flot {
    width: 100%;
    height: 50px;
  }

  .mian_data {
    position: relative;
    width: 94%;
    height: 120px;
    margin: 0 auto;
    border-radius: 15px;
    background-color: #ffffff;
  }

  .portrait {
    box-sizing: border-box;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 35px;
  }

  .portrait_border {
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 35px;
    border: 3px solid rgba(255, 255, 255, 1);
  }

  .portrait img {
    height: 104%;
    position: absolute;
    top: -2px;
    left: -8px;
  }

  .author_name {
    position: absolute;
    font-size: 20px;
    top: 44px;
    left: 50%;
    transform: translateX(-35%);
    color: #333;
  }

  .author_word {
    position: absolute;
    font-size: 12px;
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    color: #333;
  }

  .author_word i {
    color: #888;
  }

  .focus {
    box-sizing: border-box;
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 14px;
    border-radius: 12px;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(to right, #FB5245, #E24337);
  }

  .focus span {
    font-size: 12px !important;
  }

  .square {
    display: flex;
    height: 30px;
    margin-top: 6px;
    background-color: #F9F9F9;
    color: rgba(0, 0, 0, 0.4);
  }

  .square>span {
    flex: 1;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }

  .square_active {
    color: rgb(0, 0, 0, .8);
    border-bottom: 3px solid #E24337;
  }

  .wikipedia {
    box-sizing: border-box;
    width: 94%;
    height: 110px;
    margin: 10px auto;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 10px;
  }

  .wikipedia div {
    height: 24px;
    line-height: 24px;
    color: #666;
  }

  .wikipedia_title {
    height: 35px;
    font-size: 14px;
    line-height: 35px;
    color: #333 !important;
  }

  .play_all {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(241, 241, 241);
  }

  .play_all .play_icon {
    float: left;
    width: 30px;
    height: 30px;
  }

  .play_all .play_icon img {
    height: 100%;
    padding-top: 6px;
  }

  .play_word {
    float: left;
    margin-left: 4px;
    margin-top: 2px;
    font-size: 14px;
    color: #333;
  }

  .icon {
    font-size: 16px;
    padding-right: 20px;
    text-align: right;
    color: #333;
  }

  .identify {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #666;
  }

  .identify_icon {
    display: inline-block;
    /* position: absolute;
    top: 50px;
    left: 214px;*/
    width: 16px;
    margin-right: 5px;
    font-size: 12px;
  }

  .identify_icon img {
    width: 100%;
  }
</style>
