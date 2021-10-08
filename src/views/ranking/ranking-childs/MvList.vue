<!-- 精选榜 -->
<template>
  <div class="select">
    <div>
      <ran-king-title :ranking_title="'云音乐MV榜'"></ran-king-title>
    </div>
    <div v-for='(i,index) in mv_list_data.data' class="mvstyle">
      <span class="cover">
        <span class="top_num">{{index+1}}</span>
        <span class="playcount iconfont">&#xe679;&nbsp;{{(i.playCount/1000).toFixed(1)}}万</span>
        <div><img :src="i.cover" alt=""></div>
      </span>
      <span class="mv_name">
        <div>{{i.name}}</div>
        <div>{{i.artistName}}</div>
      </span>

    </div>
  </div>
</template>

<script>
  import {
    getMVData
  } from '@/network/ranking.js'

  import RanKingTitle from '@/components/content/ranking_child/RanKingTitle' //标题组件
  import RanKingItem from '@/components/content/ranking_child/RanKingItem' //小的item组件
  export default {
    name: 'SelectTop',
    components: {
      RanKingTitle,
      RanKingItem,
    },
    data() {
      return {
        // 组件需要用的数据
        mv_list_data: {},
      }
    },
    created() {
      getMVData().then(res => {
        this.mv_list_data = res.data
          // console.log(this.mv_list_data);
      })
    }
  }
</script>

<style scoped>
  .select {
    box-sizing: border-box;
    width: 95%;
    margin: 10px auto;
    margin-top: 10px;
    /* padding-top: 10px; */
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }

  .mvstyle {
    display: flex;
    width: 100%;
    height: 70px;
    /* background-color: rosybrown; */
    margin-bottom: 10px;
  }

  .cover {
    position: relative;
    flex: 3;
    font-size: 12px;
    /* line-height: 70px; */
  }

  .cover div {
    margin-top: 8px;
    width: 100px;
  }

  .cover div img {
    width: 100%;
    border-radius: 6px;
  }

  .top_num {
    display: block;
    position: absolute;
    left: 2px;
    top: 10px;
    font-size: 12px;
    width: 24px;
    height: 13px;
    border-radius: 3px;
    line-height: 14px;
    text-align: center;
    background-color: #D73921;
    color: #fff;
    transform: scale(0.8);
    /* padding-left: 8px; */
  }

  .playcount {
    display: block;
    position: absolute;
    right: 25px;
    bottom: 6px;
    font-size: 12px;
    width: 60px;
    height: 13px;
    border-radius: 3px;
    line-height: 14px;
    text-align: center;
    /* background-color: #000000; */
    color: #fff;
    transform: scale(0.7);
  }

  .mv_name {
    flex: 5;
    font-size: 14px;
    padding-top: 15px;
    white-space: nowrap;
    overflow: hidden;
  }

  .mv_name>div:nth-child(1) {
    width: 95%;
    color: #333;
  }

  .mv_name>div:nth-child(2) {
    margin-top: 6px;
    color: #888;
    font-size: 12px;
  }
</style>
