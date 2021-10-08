<!-- mv列表的封装，一行一个mv，小的 -->
<template>
  <div class="mv_box">
    <div class="mv_list" v-for='i in mv_list'>
      <div class="cover">
        <span class="paly_num">{{(i.playCount/10000).toFixed(1)}}万</span>
        <span class="play_icon iconfont">&#xe62b;</span>
        <div class="cover_img"><img :src="i.cover" alt=""></div>
      </div>
      <div class="name">
        <div>
          <h6>{{i.name}}</h6>
          <span>{{i.artistName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MvList',
    props: {
      mv_list: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .mv_list {
    display: flex;
    height: 100px;
    margin-top: 10px;
    /* background-color: blue; */
  }

  .mv_list .cover {
    padding-top: 5px;
    padding-left: 10px;
    position: relative;
    flex: 1;
  }

  .paly_num {
    position: absolute;
    bottom: 0;
    right: 14px;
    font-size: 20px;
    transform: scale(.5);
    color: rgba(255, 255, 255, .8);
  }

  .play_icon {
    position: absolute;
    top: 40px;
    left: 80px;
    font-size: 20px;
    color: rgba(255, 255, 255, .5);
  }

  .cover_img {
    width: 160px;
    overflow: hidden;
  }

  .cover_img img {
    width: 100%;
    border-radius: 5px;
  }

  .name {
    flex: 1;
  }

  .name div {
    width: 90%;
    overflow: hidden;
  }

  .name div h6 {
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 20px;
    overflow: hidden;
    font-size: 14px;
    /* text-align:0 center; */
    font-weight: 400;
    color: #333;
  }

  .name div span {
    display: block;
    font-size: 12px;
    color: rgba(0, 0, 0, .4);
  }
</style>
