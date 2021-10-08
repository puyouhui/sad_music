<template>
  <!-- v-show='play_isshow' -->
  <div class="play_all" >
    <div class="play_icon"><img src="@/assets/img/play/bofang.png" alt=""></div>
    <div class="play_word">播放全部</div>
    <div class="iconfont icon">&#xe67d;</div>
  </div>
</template>

<script>
  export default {
    name: 'PlayAll'
  }
</script>
<style scoped>
  .play_all {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(241, 241, 241);
  }

  .play_all .play_icon {
    float: left;
    width: 30px;
    height: 30px;
  }

  .play_all .play_icon img {
    height: 100%;
    padding-top: 6px;
  }

  .play_word {
    float: left;
    margin-left: 4px;
    margin-top: 2px;
    font-size: 14px;
    color: #333;
  }

  .icon {
    font-size: 16px;
    padding-right: 20px;
    text-align: right;
    color: #333;
  }
</style>
