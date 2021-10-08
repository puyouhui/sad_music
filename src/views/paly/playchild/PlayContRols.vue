<!-- 播放界面的控件集 -->
<template>
  <div class="controls">

    <!-- 喜欢 下载 评论 更多 -->
    <div class="four" v-show='isshow==1'>
      <span class="iconfont">&#xe8ab;</span>
      <span class="iconfont">&#xebb4;</span>
      <span class="iconfont">&#xe66b;</span>
      <span class="iconfont">&#xe660;</span>
    </div>

    <!-- 进度条 -->
    <div class="progres_box">
      <!-- 开始时间 -->
      <span class="start_time">{{currentTime}}</span>
      <!-- 进度条 -->
      <span class="progres">
        <!-- 主进度条 -->
        <span class="main_progres" ref='progres'></span>
        <!-- 覆盖进度条 -->
        <span class="cover_progres" :style='progressScaleX' ref='progresX'></span>
        <!-- 小圆点 -->
        <span class="control_points" :style='dotProgressScaleX' ref='thumb' @touchstart='touchstartHandle'
          @touchmove='touchmoveHandle' @touchend='touchendHandle'>
          <span></span>
        </span>
      </span>
      <!-- 结束时间 -->
      <span class="stop_time">{{TotalTime}}</span>
    </div>

    <div class="main_controls">
      <!-- 播放模式 1.列表循环 2.随机播放 3.单曲循环 -->
      <span v-show='playType==1' @click='playTypeShow' class="iconfont list">&#xe677;</span>
      <span v-show='playType==2' @click='playTypeShow' class="iconfont random">&#xe88d;</span>
      <span v-show='playType==3' @click='playTypeShow' class="iconfont cycle">&#xe6ae;</span>
      <!-- 上一曲 -->
      <span class="iconfont song_before" @click='prevPlay'>&#xe6e1;</span>
      <!-- 播放按钮 -->
      <span class="iconfont play" v-show='playing==false' @click='play'>&#xe679;</span>
      <!-- 暂停按钮 -->
      <span class="iconfont stop" v-show='playing==true' @click='stop'>&#xe67b;</span>
      <!-- 下一首 -->
      <span class="iconfont song_next" @click='nextPlay'>&#xe718;</span>
      <!-- 播放列表 -->
      <span class="iconfont play_song_list" @click='isListShow'>&#xe6a7;</span>
    </div>
  </div>
</template>



<script>
  import { // 因为每次歌曲url会失效，这里导入url请求
    getSongPlayUrl
  } from '@/network/songlist.js'


  export default {
    name: 'PlayContRols',
    components: {},
    data() {
      return {
        thumbInitX: 0, // 进度条拖拽初始位置，刚开始拖拽时的位置,这里应该是百分比
        ultimateTime: 0 //最终滑动的百分比
      }
    },
    props: {
      isshow: {
        type: Number,
        default: 1
      }
    },
    methods: {
      playTypeShow() {
        this.$store.commit('playTypeShow')
      },
      play() {
        this.$store.commit('MusicPaly')
      },
      stop() {
        this.$store.commit('MusicPaly')
      },
      isListShow() {
        this.$store.commit('listShowisOn')
      },
      nextPlay() {
        this.$store.commit('nextPlay')
        this.getUrl()
      },
      prevPlay() {
        this.$store.commit('prevPlay')
        this.getUrl()
      },
      getUrl() { //请求新的url，以免失效
        let urldata = JSON.parse(localStorage.getItem('playsong'))
        getSongPlayUrl(urldata.id)
          .then(res => {
            this.$store.commit('setMusicUrl', res.data.data[0].url)
            this.$store.commit('InitializeSong')
          })
      },

      touchstartHandle() { //滑动初始操作
        let progressL = this.$refs.progres.offsetWidth //总长度
        let thumb = this.$refs.thumb //Dom元素
        this.thumbInitX = (parseInt(thumb.style.left) / 100 * progressL).toFixed(1); //滑动前的初始值单位px
        this.$store.commit('playStop') //暂停音乐
        this.$store.commit('setprogressScaleX', this.ultimateTime / 100) //重置初始长度
      },
      touchmoveHandle(e) { //滑动过程操作
        let progressL = this.$refs.progres.offsetWidth //获得容器总长度
        let progresX = this.$refs.progresX //获得进度条dom
        let thumb = this.$refs.thumb //获得按钮dom
        let element = e.targetTouches[0] //滑动的全部值
        let mouseInitX = element.clientX - this.thumbInitX //最终滑动的距离 单位px
        this.ultimateTime = (mouseInitX / progressL * 100).toFixed(1) //最终滑动的距离 单位百分比
        if (this.ultimateTime <= 0) {
          thumb.style.left = '0%'
        } else if (this.ultimateTime >= 100) {
          progresX.style.width = '100%' //进度条的宽度
        } else {
          thumb.style.left = this.ultimateTime + '%' //圆点的位置
          progresX.style.width = this.ultimateTime + '%' //进度条的宽度
        }
        this.thumbInitX = this.ultimateTime //重置初始长度
          // this.$store.commit('setprogressScaleX', this.ultimateTime / 100) //重置初始长度
      },
      touchendHandle() { //滑动结束操作
        let durationTime = this.$store.state.durationTime //歌曲总播放时长
        let palyTime = (durationTime * (this.ultimateTime / 100)).toFixed(1); //最终播放的时间
        if (this.ultimateTime >= 100) {
          this.$store.commit('nextPlay')
        } else {
          this.$store.commit('setPlayTime', palyTime)
        }
        // this.$store.commit('setprogressScaleX', this.ultimateTime / 100) //重置初始长度
      }
    },
    computed: {
      playType() { //循环状态
        return this.$store.state.playType
      },
      playing() { //播放状态
        return this.$store.state.playing
      },
      currentTime() { //当前播放时间
        return this.$store.state.currentTime
      },
      TotalTime() { //总播放时间
        return this.$store.state.totalTime
      },
      progressScaleX() { //播放进度百分比
        return 'width:' + (this.$store.state.progressScaleX * 100).toFixed(1) + '%;'
      },
      dotProgressScaleX() { //圆点的位置
        return 'left:' + (this.$store.state.progressScaleX * 100).toFixed(1) + '%;'
      }
    },
  }
</script>


<style scoped>
  .controls {
    position: relative;
    color: #fff;
    margin-top: 30px;
    font-size: 12px;
  }
  /* 主体结束 */
  
  .four {
    width: 100%;
    height: 44px;
    /* background-color: rgba(255, 255, 255, .3); */
    display: flex;
    /* border-radius: 22px; */
    text-align: center;
    line-height: 44px;
    color: #fff;
  }
  
  .four span {
    flex: 1;
    font-size: 26px;
  }
  /* 喜欢 下载 评论 更多区域结束 */
  
  .progres_box {
    display: flex;
    width: 100%;
    height: 30px;
    margin-top: 30px;
    text-align: center;
    line-height: 30px;
  }
  
  .progres_box .start_time {
    flex: 1;
    text-align: right;
    color: rgba(255, 255, 255, .5);
  }
  
  .progres_box .progres {
    width: 90%;
    box-sizing: border-box;
    position: relative;
    margin-top: 14px;
    margin-left: 14px;
    margin-right: 14px;
    flex: 6;
  }
  
  .progres_box .progres .main_progres {
    display: block;
    height: 2px;
    background-color: rgba(255, 255, 255, .3);
  }
  /* 进度条背景 */
  
  .progres_box .progres .cover_progres {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    /* width: 200px; */
    height: 2px;
    background-color: rgb(255, 255, 255);
  }
  /* 覆盖进度条 */
  
  .progres_box .stop_time {
    flex: 1;
    text-align: left;
    color: rgba(255, 255, 255, .5);
  }
  
  .progres_box .progres .control_points {
    position: absolute;
    top: -13px;
    width: 6px;
    padding: 10px;
    height: 6px;
  }
  /* 控制小圆点 */
  
  .control_points span {
    position: absolute;
    top: 11px;
    left: 0;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
  }
  
  .main_controls {
    margin-top: 40px;
    display: flex;
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: rgba(255, 255, 255, 1);
  }
  /* 主控件 */
  
  .main_controls span {
    flex: 1;
  }
  /* 播放模式 */
  
  .list {
    font-size: 24px;
  }
  
  .random {
    font-size: 18px;
  }
  
  .cycle {
    font-size: 22px;
  }
  
  .main_controls .song_before {
    font-size: 20px !important;
  }
  /* 上一曲 */
  
  .main_controls .stop {
    font-size: 55px !important;
  }
  /*暂停 */
  
  .main_controls .play {
    font-size: 55px !important;
  }
  
  .main_controls .song_next {
    font-size: 20px !important;
  }
  /* 下一曲 */
  
  .main_controls .play_song_list {
    font-size: 20px !important;
  }
  /* 播放模式 */
</style>