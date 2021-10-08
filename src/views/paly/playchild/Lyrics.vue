<template>
  <div>
    <div class="clock_box" @click='isshow'>
      <!-- 音量控制 -->
      <div class="volume_box">
        <!-- 音量图标 -->
        <span class="volume_icon iconfont">&#xea0d;</span>
        <!-- 最大容器 -->
        <span class="progres">
          <!-- 音量背景条 -->
          <span class="main_progres" ref='progres'></span>
          <!-- 覆盖大小条-->
          <span class="cover_progres" ref='progresX' :style='VolumeWidth'></span>
          <!-- 小圆点 -->
          <span class="control_points" ref='thumb' @touchstart='touchstartHandle' @touchmove='touchmoveHandle'
            @touchend='touchendHandle' :style='VolumeLeft'>
            <span></span>
          </span>
        </span>
        <!-- 投送按钮 -->
        <span class="tousong iconfont">&#xe6a1;</span>
      </div>
      <!-- 歌词部分 -->
      <div class="lyrics">
        <div class="lyrics_box" ref='scroll_box' style="top:240px">
          <div  class="line_lyrics"  v-for='(i,index) in lyric' :class='[{activecolor: i.time == ttt}, `line${index + 1}`]'>
            <span>{{i.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {
    GetLyric
  } from '@/network/songlist.js'
  export default {
    name: 'Lyrics',
    data() {
      return {
        ultimateVolume: 0, //滑动百分比
        thumbInitX: 0, //初始的位置
        volume: 0, //初始化音量值
        lyric: [], //歌词
        ttt: 0, //之前的时间
      }
    },
    methods: {
      isshow() { //隐藏和显示
        this.$emit('isshow')
      },
      touchstartHandle() { //滑动初始操作
        let progressL = this.$refs.progres.offsetWidth //总长度
        let thumb = this.$refs.thumb //Dom元素
        this.thumbInitX = 50; //滑动前的初始值单位px
      },
      touchmoveHandle(e) { //滑动过程操作
        let progressL = this.$refs.progres.offsetWidth //获得容器总长度
        let progresX = this.$refs.progresX //获得进度条dom
        let thumb = this.$refs.thumb //获得按钮dom
        let element = e.targetTouches[0] //滑动的全部值
        let mouseInitX = element.clientX - this.thumbInitX //最终滑动的距离 单位px
        this.ultimateVolume = (mouseInitX / progressL * 100).toFixed(1) //最终滑动的距离 单位百分比
        if (this.ultimateVolume <= 0) {
          thumb.style.left = '0%'
        } else if (this.ultimateVolume >= 100) {
          progresX.style.width = '100%' //进度条的宽度
        } else {
          thumb.style.left = this.ultimateVolume + '%' //圆点的位置
          progresX.style.width = this.ultimateVolume + '%' //进度条的宽度
        }
      },
      touchendHandle() { //滑动结束操作
        let value = (this.ultimateVolume / 100).toFixed(1)
        if (value > 1) {
          this.$store.commit('steVolume', 1)
        } else {
          this.$store.commit('steVolume', value)
        }
      },
      getlyrics(id) { // 获取歌词数据//这个方法主要是监听id的变化获取
        GetLyric(id)
          .then(res => {
            if (res.data.lrc == undefined) {
              this.lyric = [{
                text: '该歌曲没有歌词哦～',
                time: 0
              }]
            } else {
              this.formatLyric(res.data.lrc.lyric)
            }

          })
      },
      formatLyric(text) { //歌词处理方法
        this.lyric = []
        let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
        let row = arr.length; //获取歌词行数
        for (let i = 0; i < row; i++) {
          let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
          let temp_arr = temp_row.split("]"); //我们可以通过“]”对时间和文本进行分离
          let text = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
          //再对剩下的歌词时间进行处理
          temp_arr.forEach(element => {
            let obj = {};
            let time_arr = element.substr(1, element.length - 1).split(":"); //先把多余的“[”去掉，再分离出分、秒
            let s = parseInt(time_arr[0]) * 60 + Math.ceil(time_arr[1]); //把时间转换成与currentTime相同的类型，方便待会实现滚动效果
            obj.time = s;
            obj.text = text;
            this.lyric.push(obj); //每一行歌词对象存到组件的lyric歌词属性里
          });
        }
        this.lyric.sort(this.sortRule); //由于不同时间的相同歌词我们给排到一起了，所以这里要以时间顺序重新排列一下
        this.$store.commit("setLyric", this.lyric); //把歌词提交到store里，为了重新进入该组件时还能再次渲染
        localStorage.setItem('lyric', JSON.stringify(this.lyric))
      },
      sortRule(a, b) { //设置一下歌词排序规则
        return a.time - b.time;
      },
      scrollLrc(t) { //根据播放滚动
        const {
          item,
          index = 0
        } = this.currentlyric(Number(t));
        if (!item) return;
        this.ttt = item.time;
        const lineheight = document.querySelector(`.line${index + 1}`).clientHeight;
        // console.log(lineheight);
        // console.log((180 - index * lineheight));
        this.$refs.scroll_box.style.top = (240 - index * lineheight) + 'px'
      }
    },
    created() {
      this.volume = localStorage.getItem('volume') //获得音量
      let id = this.$store.state.song.id
      GetLyric(id)
        .then(res => {
          this.formatLyric(res.data.lrc.lyric)
        })
      this.lyric = JSON.parse(localStorage.getItem('lyric'))
    },
    mounted() {},
    watch: {
      '$store.state.song.id' (newFlag, oldFlag) { //监听id变化请求歌词
        this.getlyrics(newFlag)
      },
      '$store.state.currentTimeS' (newFlag, oldFlag) {
        if (newFlag == 0) {
          this.$refs.scroll_box.style.top = 240 + 'px'
        }
        this.scrollLrc(newFlag);

      }
    },
    computed: {
      VolumeLeft() {
        return 'left:' + this.volume * 100 + '%;'
      },
      VolumeWidth() {
        return 'width:' + this.volume * 100 + '%;'
      },
      playTime() {
        return this.$store.state.currentTimeS //获得秒数
      },
      currentlyric(t) {
        return function(t) {
          return {
            item: this.lyric.find(item => item.time === t),
            index: this.lyric.findIndex(item => item.time === t)
          }
        }
      },
      DetectionLyric() {
        if (this.lyric == []) {
          console.log(123);
        }
      }
    }
  }
</script>


<style scoped>
  .clock_box {
    position: relative;
    width: 100%;
    height: 440px;
    /* background-color: #456789; */
  }

  .volume_box {
    position: relative;
    height: 40px;
    /* background-color: cadetblue; */
  }

  .volume_icon {
    position: relative;
    top: -7px;
    left: 18px;
    font-size: 16px;
    color: rgba(255, 255, 255, .8);
  }

  .progres {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 44px;
    width: 280px;
    height: 6px;
    /* background-color: rgba(255, 255, 255, .1); */
  }

  .main_progres {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, .4);
  }

  .cover_progres {
    width: 20px;
    height: 2px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 1);
  }

  .control_points {
    width: 8px;
    height: 8px;
    display: inline-block;
    position: absolute;
    top: -3px;
    /* left: 20px; */
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
  }

  .tousong {
    position: absolute;
    top: 11px;
    right: 20px;
    font-size: 18px;
    color: rgba(255, 255, 255, .8);
  }

  .lyrics {
    position: relative;
    height: 420px;
    width: 100%;
    text-align: center;
    /* background-color: rgba(255, 255, 255, 1); */
    overflow: hidden;
  }

  .lyrics_box {
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
  }

  .line_lyrics {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: rgba(255, 255, 255, .5);
    overflow: hidden;
  }

  .activecolor {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
  }
</style>
