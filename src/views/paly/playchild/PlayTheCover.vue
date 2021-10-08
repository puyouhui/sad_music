<!-- 播放界面的封面 -->
<template>
  <div class="cover">
    <!-- 背景图片 -->
    <div class="background" v-show='isshow==1'>
      <img :src="picUrl" alt="" class="coverimg"  @click='goLyrics'>
    </div>
    <div>
      <img :src="picUrl" alt="" class="bg">
    </div>
  </div>
</template>


<script>
  export default {
    name: 'PlayTheCover',
    props: {
      isshow: {
        type: Number,
        default: 1
      }
    },
    methods: {
      goLyrics() {
        this.$emit('coverClick')
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
    }
  }
</script>


<style scoped>
  .cover {
    width: 100%;
    /* height: 100vh; */
    overflow: hidden;
    background-size: cover;
  }

  .cover .bg {
    position: absolute;
    top: 0;
    left: 0;
    background-size: auto;
    height: 100%;
    width: 100%;
    filter: blur(20px) brightness(80%);
    overflow: hidden;
    /* filter: brightness(100%); */
  }

  .cover .bg img {
    height: 100%;
  }

  .background {
    margin: 0 auto;
    margin-top: 50px;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    z-index: 9;
  }

  .coverimg {
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 9;
  }

  .background img {
    width: 100%;
    overflow: hidden;
  }
</style>
