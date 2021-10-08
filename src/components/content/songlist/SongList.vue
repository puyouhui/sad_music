<template>

  <div>
    <!-- 播放全部按钮 -->

    <!-- 歌曲列表 -->
    <div class="information" v-for='(i,index) in songs' @click='musicUrl(index)'>
      <span class="head_portrait">
        <img :src="i.al.picUrl" alt="">
      </span>
      <span class="song_message">
        <p>{{i.name}}</p>
        <i>{{i.ar[0].name}}</i>
      </span>
      <span class="btn_function">
        <span class="iconfont play_icon">&#xe62d;</span>
        <span class="iconfont play_more">&#xe660;</span>
      </span>
    </div>
  </div>

</template>

<script>
  import {
    getSongPlayUrl
  } from '@/network/songlist.js'

  export default {
    name: 'Songlist',
    props: {
      songs: {
        type: Array,
        default: []
      },
      play_isshow: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      musicUrl(index) {
        let music = this.songs[index] //获取当前数据
        console.log(music);
        getSongPlayUrl(this.songs[index].id) //用数据里的id发送请求
          .then(res => {
            console.log(res);
            music.url = res.data.data[0].url
            this.$store.commit('SetPlayList', music) //把点击的数据送去保存
            this.$store.commit('setAddPlayMusic', music) //播放当前点击歌曲
          })
      }
    }
  }
</script>

<style scoped>
  .information {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    margin-top: 6px;
    font-size: 14px;
    border-bottom: 1px solid rgb(241, 241, 241);
    color: #333;
  }

  .head_portrait {
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 7px;
    width: 32px;
    height: 32px;
  }

  .head_portrait img {
    width: 100%;
    border-radius: 4px;
  }

  .information .song_message {
    box-sizing: border-box;
    flex: 7;
    padding-left: 10px;
    padding-top: 4px;
    overflow: hidden;
    white-space: nowrap
  }

  .information .song_message p {
    margin: 0;
  }

  .information .song_message i {
    text-align: center;
    font-size: 12px;
    color: #888;
  }

  .btn_function {
    box-sizing: border-box;
    text-align: center;
    flex: 3;
    display: flex;
  }

  .information .play_icon {
    box-sizing: border-box;
    flex: 1;
    font-size: 20px;
    line-height: 48px;
    color: #888;
    text-align: right;
  }

  .information .play_more {
    box-sizing: border-box;
    flex: 1;
    font-size: 20px;
    padding-top: 2px;
    line-height: 45px;
    text-align: center;
    color: #666;
  }
</style>
