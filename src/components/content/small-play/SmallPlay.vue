<template>
  <div class="smallplay-box">
    <div class="cover" @click='go_playview'>
      <span><img :src="picUrl" alt=""></span>
    </div>
    <div class="musicmes" @click='go_playview'>
      <span class="mes"><i class="musicname">{{SongName}}</i><i class="translation"> - {{Artists}}</i></span>
      <!-- 播放进度条 -->
      <!-- 外壳 -->
      <div class="ap-progress-line"></div>
      <!-- 小圆点 -->
      <div class="current-time-dot" :style='dotProgressScaleX'></div>
      <!-- 已经播放的长度 -->
      <div class="current-time" :style='progressScaleX'></div>
    </div>
    <div class="control">
      <span v-show=' playing==false'><img src="@/assets/img/play/bofang.png" alt="" @click='play'></span>
      <span v-show='playing==true'><img src="@/assets/img/play/zanting.png" alt="" @click='stop'></span>
      <span class="list" @click='listShowisOn'><img src="@/assets/img/play/list.png" alt=""></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmallPlay',
    data() {
      return {}
    },
    created() {},
    methods: {
      play() {
        this.$store.commit('MusicPaly')
      },
      stop() {
        this.$store.commit('MusicPaly')
      },
      listShowisOn() {
        this.$store.commit('listShowisOn')
      },
      go_playview() { //去播放play页
        this.$router.push('play')
      }
    },
    computed: {
      picUrl() {
        if (this.$store.state.song.picUrl == null) {
          return this.$store.state.song.al.picUrl
        } else {
          return this.$store.state.song.picUrl
        }
      },
      SongName() {
        return this.$store.state.song.name
      },
      Artists() {
        if (this.$store.state.song.ar == null) {
          return this.$store.state.song.song.artists[0].name
        } else {
          return this.$store.state.song.ar[0].name
        }
      },
      playing() {
        return this.$store.state.playing
      },
      progressScaleX() { //播放进度百分比
        return 'width:' + this.$store.state.progressScaleX * 100 + '%;'
      },
      dotProgressScaleX() { //圆点的位置
        return 'left:' + this.$store.state.progressScaleX * 100 + '%;'
      }
    }
  }
</script>

<style scoped>
  .smallplay-box {
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 0px;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
  }

  .cover {
    display: inline-block;
    height: 36px;
    width: 36px;
    /* background-color: orange; */
    margin-top: 4px;
    margin-left: 10px;
    border-radius: 4px;
    overflow: hidden;
  }

  .cover img {
    width: 100%;
    height: 100%;
  }

  .musicmes {
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    left: 60px;
    top: 4px;
    width: 200px;
    height: 40px;
    font-size: 14px;
    /* line-height: 40px; */
    color: #333;
    text-overflow: ellipsis;
    /* background-color: orange; */
  }

  .translation {
    font-size: 12px;
    color: #666;
  }

  .ap-progress-line {
    position: absolute;
    top: 28px;
    width: 200px;
    height: 2px;
    background-color: #dadada;
  }

  .current-time {
    position: absolute;
    top: 28px;
    width: 100px;
    height: 2px;
    background-color: #C4483B;
  }

  .current-time-dot {
    position: absolute;
    top: 26px;
    left: 90px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #C4483B;
  }

  .control {
    display: inline-block;
    position: absolute;
    left: 285px;
    top: 6px;
    height: 40px;
    width: 100px;
    /* background-color: orchid; */
  }

  .control span {
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 26px;
    text-align: center;
  }

  .control span img {
    width: 100%;
  }

  .list {
    margin-left: 16px;
  }
</style>
