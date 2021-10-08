<template>
  <!-- 精选歌单 -->
  <div class="Selected-playlists">
    <div class="playlists-title">
      <i>精选歌单</i>
    </div>
    <keep-alive>
      <div class="home-palylisi">
        <ul>
          <li v-for='(item,index) in PlayMusicList' @click='go_songlist(index)'>
            <div>
              <span class="iconfont amount-play">&#xe885;<i>{{(item.playCount/10000).toFixed(2)}}万</i></span>
              <img :src="item.coverImgUrl" alt="">
              <div class="playlist-name">{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </keep-alive>
  </div>
</template>

<script>
  import {
    getPlayMusicList
  } from '@/network/home.js'


  export default {
    name: 'HomePlayList',
    data() {
      return {
        PlayMusicList: []
      }
    },
    created() {
      getPlayMusicList()
        .then(res => {
          // console.log(res);
          this.PlayMusicList = res.data.playlists
            // console.log(this.PlayMusicList);
        })
    },
    methods: {
      go_songlist(index) {
        // 这里把点击的当前数据传给本地管理
        // console.log(this.PlayMusicList[index]);
        localStorage.setItem('StorePlayList', JSON.stringify(this.PlayMusicList[index]))
        this.$router.push('playlist')
      }
    }

  }
</script>

<style scoped>
  .Selected-playlists {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  
  .playlists-title {
    line-height: 30px;
    font-size: 12px;
    color: #333;
    font-style: normal;
  }
  
  .playlists-title i {
    border-left: 3px solid #D43C33;
    padding-left: 10px;
  }
  
  .amount-play {
    font-size: 18px;
    font-weight: 500;
  }
  
  .amount-play i {
    font-size: 12px;
    color: #fff !important;
    vertical-align: middle;
  }
  
  .playlist-name {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    color: #333;
    font-size: 10px;
    line-height: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  .home-palylisi ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    margin-top: 5px;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
  }
  
  .home-palylisi ul li {
    box-sizing: border-box;
    float: left;
    width: 33%;
    padding-left: 2px;
    padding-right: 2px;
    margin-bottom: 14px;
  }
  
  .home-palylisi ul li div {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .home-palylisi ul li div span {
    position: absolute;
    right: 4px;
    top: 3px;
    color: #fff;
  }
  
  .home-palylisi ul li div img {
    width: 100%;
    border-radius: 5px;
  }
  
  .home-palylisi ul li div p {
    padding: 2px;
    font-size: 12px;
    color: #333;
  }
</style>