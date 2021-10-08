<template>
  <div id="play" class="play">
    <play-top-nav></play-top-nav>
    <PlayTheCover @coverClick='coverClick' :isshow='isshow'></PlayTheCover>
    <Lyrics v-show='isshow==2' @isshow='coverClick'></Lyrics>
    <PlayContRols :isshow='isshow'></PlayContRols>
  </div>
</template>

<script>
  //顶部信息插件
  import PlayTopNav from '@/views/paly/playchild/PlayTopNav.vue'
  //播放封面
  import PlayTheCover from './playchild/PlayTheCover'
  //播放控件
  import PlayContRols from './playchild/PlayContRols'
  // 歌词组件
  import Lyrics from '@/views/paly/playchild/Lyrics'

  export default {
    name: 'Play',
    data() {
      return {
        isshow: 1
      }
    },
    components: {
      PlayTopNav,
      PlayTheCover,
      PlayContRols,
      Lyrics
    },
    methods: {
      coverClick() {
        if (this.isshow == 2) {
          this.isshow = 1
        } else {
          this.isshow = 2
        }
      }
    }

  }
</script>

<style scoped>
  .play {
    height: 100vh;
  }
</style>
