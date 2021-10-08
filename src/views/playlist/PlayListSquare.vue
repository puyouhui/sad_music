<template>
  <div>
    <!-- 顶部信息 -->
    <div class="nav">
      <NavBar>
        <span slot="left" class="iconfont title_left" @click='back'>&#xe6a0;</span>
        <span slot="center" class="iconfont title_center"><i>歌单广场</i></span>
      </NavBar>
    </div>
    <div class="square">
      <span @click='go_rcd' :class='{square_active:square_active==1}'>推荐</span>
      <span @click='go_goods' :class='{square_active:square_active==2}'>精品</span>
      <span @click='go_chinese' :class='{square_active:square_active==3}'>华语</span>
      <span @click='go_folk' :class='{square_active:square_active==4}'>民谣</span>
      <span @click='go_popular' :class='{square_active:square_active==5}'>流行</span>
    </div>
    <!-- 推荐页面 -->
    <scroll :scroll_data='sliding_data' v-show='square_active==1'>
      <div slot="main_body">
        <!-- 今日推荐 -->
        <div class="rcd_title">
          <span>今日推荐</span>
          <span class="iconfont refresh">&#xe65d; 换一批</span>
        </div>
        <max-play-list :playlist='recommended_data'></max-play-list>
        <!-- 这些歌单，正合你意 -->
        <div class="rcd_title other">
          <span>这些歌单，正合你意</span>
        </div>
        <max-play-list :playlist='other_play'></max-play-list>
      </div>
    </scroll>
    <!-- 精品页面 -->
    <scroll :scroll_data='sliding_data' v-if='square_active==2'>
      <div slot="main_body">
        <div class="magin">
          <max-play-list :playlist='goods_data'></max-play-list>
        </div>
      </div>
    </scroll>
    <!-- 华语 -->
    <scroll :scroll_data='sliding_data' v-if='square_active==3'>
      <div slot="main_body">
        <div class="magin">
          <max-play-list :playlist='chinese_data'></max-play-list>
        </div>
      </div>
    </scroll>
    <!-- 民谣 -->
    <scroll :scroll_data='sliding_data' v-if='square_active==4'>
      <div slot="main_body">
        <div class="magin">
          <max-play-list :playlist='folk_data'></max-play-list>
        </div>
      </div>
    </scroll>
    <!-- 流行 -->
    <scroll :scroll_data='sliding_data' v-if='square_active==5'>
      <div slot="main_body">
        <div class="magin">
          <max-play-list :playlist='popular_data'></max-play-list>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import {
    getPlayListCatList,
    getGoodsList,
    getChinese,
    getFolk,
    getPopular
  } from '@/network/playlist.js'

  import NavBar from '@/components/common/navbar/NavBar' //导航栏
  import Scroll from '@/components/common/scroll/Scroll' //滚动组件
  import MaxPlayList from '@/views/playlist/childs/MaxPlayList'
  export default {
    name: 'PlayListSquare',
    components: {
      NavBar,
      Scroll,
      MaxPlayList,

    },
    data() {
      return {
        square_active: 1, //活跃页面 1推荐 2精品 3华语 4民谣 5流行
        recommended_data: [], //今日推荐数据
        goods_data: [], //精品歌单数据
        chinese_data: [], //华语数据
        folk_data: [], //民谣数据
        popular_data: [], //流行数据
        other_play: [], //这些歌单，正合你意的内容
        sliding_data: {
          item_title: ['推荐', '精品', '华语', '民谣', '流行'], // 传入子组件顶部导航的数据
          bgc: '#f7f7f7', //传入子组件的导航栏背景颜色
          content_height: 89, //传入子组件的盒子总高度
          jump_heigth: [200, 780, 990, 1350, 1560] //传入子组件的依次跳转高度
        },
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      go_rcd() { //前往推荐
        this.square_active = 1
      },
      go_goods() { //前往精品
        this.square_active = 2
      },
      go_chinese() { //前往华语
        this.square_active = 3
      },
      go_folk() { //前往民谣
        this.square_active = 4
      },
      go_popular() { //前往流行
        this.square_active = 5
      }
    },
    created() {
      getPlayListCatList() // 请求推荐页数据
        .then(res => {
          this.recommended_data = res.data.playlists.slice(0, 9)
          this.other_play = res.data.playlists.slice(10, 22)
        })
      getGoodsList() // 获取精品数据
        .then(res => {
          this.goods_data = res.data.playlists
        })
      getChinese() //获取华语数据
        .then(res => {
          this.chinese_data = res.data.playlists
        })
      getFolk() // 获取民谣数据
        .then(res => {
          this.folk_data = res.data.playlists
        })
      getPopular() //获取流行数据
        .then(res => {
          this.popular_data = res.data.playlists
        })


    }
  }
</script>


<style scoped>
  .nav {
    background-color: #C4483B;
  }

  .title_left {
    display: block;
    font-size: 26px;
    color: rgb(255, 255, 255);
  }

  .title_center {
    /* line-height: 10px; */
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .title_center i {
    display: block;
    /* padding-bottom: 10px; */
  }

  .square {
    display: flex;
    height: 30px;
    background-color: #C4483B;
    color: rgba(255, 255, 255, .3);
  }

  .square>span {
    flex: 1;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }

  .square_active {
    color: rgba(255, 255, 255, 1);
  }

  .rcd_title {
    position: relative;
    height: 30px;
    padding: 0 14px 0 14px;
    font-size: 14px;
    line-height: 30px;
    color: #333;
  }

  .refresh {
    /* box-sizing: border-box; */
    position: absolute;
    right: 18px;
    top: 8px;
    height: 14px;
    padding: 0px 6px 0px 6px;
    font-size: 10px;
    line-height: 14px;
    border: 1px solid #ccc;
    border-radius: 7px;
    transform: scale(0.9);
  }

  .other {
    margin-top: 16px;
  }

  .magin {
    margin-top: 10px;
  }
</style>
