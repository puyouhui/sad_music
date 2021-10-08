<template>
  <nav-bar class="home-nav">
    <div slot="left" class="left"><span class="iconfont" @click='back'>&#xe627;</span></div>
    <div slot="center" class="center">
      <div class="nav_word">
        <span>{{SongName}}</span>
        <span @click="go_artists">{{Artists}} ></span>
      </div>
    </div>
    <div slot="right" class="right">
      <span class="iconfont">&#xe648;</span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'PlayTopNav',
    components: {
      NavBar
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      go_artists() {
        console.log('去作者');
      }
    },
    computed: {
      // 拿到封面
      picUrl() { //由于网易云歌曲数据不一致，这里需要判断一下
        if (this.$store.state.song.picUrl == null) {
          return this.$store.state.song.al.picUrl
        } else {
          return this.$store.state.song.picUrl
        }
      },
      // 拿到歌曲名称
      SongName() {
        return this.$store.state.song.name
      },
      // 拿到作者信息
      Artists() { //由于网易云歌曲数据不一致，这里需要判断一下
        if (this.$store.state.song.ar == null) {
          return this.$store.state.song.song.artists[0].name
        } else {
          return this.$store.state.song.ar[0].name
        }
      },
      playing() {
        return this.$store.state.playing
      }
    }
  }
</script>

<style>
  .home-nav {
    z-index: 9;
    position: relative;
    text-align: center;
    /* background-color: rgb(77, 77, 30); */
    overflow: hidden;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, .3);
  }
  
  .home-nav .left span {
    position: absolute;
    top: 10px;
    left: 15px;
    color: #fff;
    font-size: 24px;
  }
  
  .home-nav .nav_word {
    z-index: 999;
    position: relative;
    color: #fff;
    width: 100%;
    height: 48px;
  }
  
  .home-nav .nav_word>span:nth-child(1) {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
  }
  
  .home-nav .nav_word>span:nth-child(2) {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: #fff;
  }
  
  .home-nav .right {
    position: relative;
  }
  
  .home-nav .right span {
    color: #fff;
    font-size: 22px;
    position: absolute;
    top: 12px;
    left: 18px;
  }
</style>