<!-- 播放顺序列表 -->
<template>
  <div class="order" v-if='listShow'>
    <div @click='offOrder' class="offorder"></div>
    <div class="order_box">
      <div class="order_title">
        <span class="left">当前播放</span>
        <i>&nbsp;({{songList.length}})</i>
      </div>
      <div class="controls">
        <span v-show='playType==1' @click='playTypeShow' class="iconfont list">&#xe677;&nbsp;</span>
        <i v-show='playType==1' @click='playTypeShow'>列表循环</i>
        <span v-show='playType==2' @click='playTypeShow' class="iconfont random">&#xe88d;&nbsp;</span>
        <i v-show='playType==2' @click='playTypeShow'>随机播放</i>
        <span v-show='playType==3' @click='playTypeShow' class="iconfont cycle">&#xe6ae;&nbsp;</span>
        <i v-show='playType==3' @click='playTypeShow'>单曲循环</i>
        <span class="iconfont remove" @click='remove'>&#xe650;</span>
      </div>
      <div>
        <scroll :scroll_data='sliding_data'>
          <div slot="main_body">
            <div class="list_content" v-for='(i,index) in songList'>
              <span class="iconfont activeicon" v-if='active(index)'>&#xe69f;</span>
              <span class="music_name"  @click='playIndex(index)'>
                <span :class="{active:active(index)}">{{i.name}}</span>
                <span class="author" :class="{active:active(index)}">- {{Artists(i)}}</span>
              </span>
              <span class="remove_song iconfont" @click='removeIndex(index)'>&#xeaf2;</span>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import { // 因为每次歌曲url会失效，这里导入url请求
    getSongPlayUrl
  } from '@/network/songlist.js'
  import Scroll from '@/components/common/scroll/Scroll' //滚动插件
  export default {
    name: 'PlayOrder',
    components: {
      Scroll,
    },
    data() {
      return {
        sliding_data: {
          content_height: 53,
          bgc: '#fff'
        },
      }
    },
    methods: {
      offOrder() { //关闭窗口
        this.$store.commit('listShowisOff')
      },

      playTypeShow() { //播放状态
        this.$store.commit('playTypeShow')
      },

      remove() { //删除播放列表
        this.$store.commit('removePlayList')
        this.$store.commit('InitializePlayList')
      },

      Artists(index) { //获得作者信息
        if (index.ar == null) {
          return index.song.artists[0].name
        } else {
          return index.ar[0].name
        }
      },

      active(index) { //当前播放状态图标的显示
        if (index == this.$store.state.index) {
          return true
        } else {
          return false
        }
      },

      playIndex(index) { //播放指定歌曲
        this.$store.commit('playCertain', index)
          // 这里重新获取下url，以免出现不播放的情况
        let urldata = JSON.parse(localStorage.getItem('playsong'))
        getSongPlayUrl(urldata.id)
          .then(res => {
            this.$store.commit('setMusicUrl', res.data.data[0].url)
            this.$store.commit('InitializeSong')
          })
      },

      removeIndex(index) { //删除指定歌曲
        this.$store.commit('removeSongIndex', index)
      }
    },
    computed: {
      listShow() { //窗口显示状态
        return this.$store.state.listShow
      },
      playType() { //循环状态
        return this.$store.state.playType
      },
      songList() { //歌曲列表
        return this.$store.state.songList
      },


    },
    created() {
      this.$store.commit('InitializePlayList')
    }
  }
</script>

<style scoped>
  .order {
    z-index: 999;
    height: 100vh;
    width: 96%;
    margin-left: 7px;
    position: fixed;
  }
  
  .offorder {
    width: 100%;
    height: 280px;
  }
  
  .order_box {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -1px 6px rgba(0, 0, 0, .3);
    overflow: hidden;
  }
  
  .order_title {
    position: relative;
    padding-left: 10px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #333;
  }
  
  .order_title i {
    font-size: 12px;
    color: #666;
  }
  
  .right {
    font-size: 24px;
    position: absolute;
    right: 0px;
    top: -4px;
    color: rgba(0, 0, 0, .5);
  }
  
  .controls {
    box-sizing: border-box;
    height: 20px;
    line-height: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #333;
  }
  
  .controls span i {
    font-size: 12px;
  }
  
  .controls .remove {
    float: right;
    margin-right: 20px;
    color: #666;
  }
  
  .list {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
  }
  
  .random {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #666;
  }
  
  .cycle {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #666;
  }
  
  .list_content {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 30px;
    padding-left: 10px;
    line-height: 30px;
    font-size: 14px;
  }
  
  .activeicon {
    flex: 1;
    color: #C4483B;
    font-size: 12px;
    /* margin-right: 8px; */
  }
  
  .active {
    color: #C4483B !important;
  }
  
  .music_name {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 14;
    color: #333;
  }
  
  .author {
    margin-left: 8px;
    font-size: 12px;
    color: #666;
    line-height: 32px;
  }
  
  .remove_song {
    flex: 2;
    text-align: right;
    margin-right: 20px;
    color: #999;
  }
</style>