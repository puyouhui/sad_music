<template>
  <div class="audio">
    <div>
      <audio :src='this.$store.state.song.url' ref='audio' @ended='audioEnd' @timeupdate='timeupdate' autoplay></audio>
    </div>
  </div>
</template>
<script>
  import { // 因为每次歌曲url会失效，这里导入url请求
    getSongPlayUrl
  } from '@/network/songlist.js'

  export default {
    name: 'Audio',
    data() {
      return {
        song: {}, // 当前播放歌曲信息
        songList: [] //播放列表
      }
    },
    mounted() {
      // 重新请求url，防止失效
      let urldata = JSON.parse(localStorage.getItem('playsong'))
      getSongPlayUrl(urldata.id)
        .then(res => {
          this.$store.commit('setMusicUrl', res.data.data[0].url)
          this.$store.commit('InitializeSong')
        })
        //初始化给state里面song赋值，防止数据丢失
      this.$store.commit('InitializeSong')
      console.log(this.$store.state.playing);
    },
    watch: {
      '$store.state.playing' (newFlag, oldFlag) { //监听播放状态
        let audio = this.$refs.audio //获取audio得DOM
        if (newFlag) {
          audio.play() //如果状态为true就播放
        } else {
          audio.pause(); //如果状态为false就暂停
        }
      },
      '$store.state.playTime' (newFlag, oldFlag) {
        let audio = this.$refs.audio //获取audio得DOM
        audio.currentTime = newFlag;
        this.$store.commit('MusicPaly')
      },
      '$store.state.volume' (newFlag, oldFlag) {
        let audio = this.$refs.audio //获取audio得DOM
        audio.volume = newFlag;
      },
    },
    methods: {
      audioEnd() { //监听播放完播放下一首
        this.$store.commit('nextPlay')
          // 重新请求url，防止失效
        let urldata = JSON.parse(localStorage.getItem('playsong'))
        getSongPlayUrl(urldata.id)
          .then(res => {
            console.log(res);
            this.$store.commit('setMusicUrl', res.data.data[0].url)
            this.$store.commit('InitializeSong')
          })
      },

      timeupdate() { //播放时监听/秒
        let audio = this.$refs.audio //获取audio得DOM
        this.$store.commit('setdurationTime', audio.duration) //监听当前播放时间，修改状态管理里面的值
        this.$store.commit('CurrentTime', audio.currentTime.toFixed(0)) //监听当前播放时间，修改状态管理里面的值
        this.$store.commit('setCurrentTime', this.timeToString(audio.currentTime)) //监听当前播放时间，修改状态管理里面的值
        this.$store.commit('setTotalTime', this.timeToString(audio.duration)) //监听总播放时间，修改状态管理里面的值
        let precent = audio.currentTime / audio.duration || 0;
        this.$store.commit('setProgressScaleX', precent) //监听进度实时计算已播放的长度
      },
      timeToString(param) { //这个方法把拿到的时间进行转换
        param = parseInt(param);
        let hh = '',
          mm = '',
          ss = '';
        if (param >= 0 && param < 60) {
          param < 10 ? ss = '0' + param : ss = param;
          return '00:' + ss;
        } else if (param >= 60 && param < 3600) {
          mm = parseInt(param / 60);
          mm < 10 ? mm = '0' + mm : mm;
          (param - parseInt(mm * 60)) < 10 ? ss = '0' + String(param - parseInt(mm * 60)) : ss = param - parseInt(mm * 60);
          return mm + ':' + ss;
        }
      },
    },
    created() {
      let audio = this.$refs.audio //获取audio得DOM
      this.$store.commit('palyIndex') //获取初始index
    },
  }
</script>


<style scoped>
  .audio {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>