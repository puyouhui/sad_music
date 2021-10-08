<template>
  <div class="ranking_item_box">
    <div v-for='i in frontitem_data' class="ranking_item">
      <!-- 封面 -->
      <div class="ranking_cover">
        <img :src="i.coverImgUrl" alt="">
        <span class="update_date">{{i.updateFrequency}}</span>
        <span class="iconfont icon">&#xe62b;</span>
      </div>
      <div class="item_title">{{i.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RanKingItem',
    props: {
      frontitem_data: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .ranking_item_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .ranking_item {
    display: inline-block;
    box-sizing: border-box;
    width: 31%;
    margin: 4px;
    overflow: hidden;
  }

  .ranking_cover {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 110px;
  }

  .ranking_cover img {
    width: 100%;
  }

  .update_date {
    position: absolute;
    right: -22px;
    display: inline-block;
    font-size: 16px;
    height: 24px;
    border-radius: 12px;
    width: 110px;
    background-color: rgba(0, 0, 0, .1);
    color: #fff;
    text-align: center;
    transform: scale(0.5);
  }

  .item_title {
    width: 95%;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 5px;
    font-size: 12px;
    color: #323233;
    text-align: center;
  }

  .icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    color: rgba(255, 255, 255, .4);
  }
</style>
