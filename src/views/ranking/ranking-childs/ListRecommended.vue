<!-- 推荐榜单 -->
<template>
  <div v-if='RanKingData.list.slice!=undefined'>
    <div class="recommended">
      <!-- 大标题 -->
      <p class="recommended_title">榜单推荐</p>
      <!-- 主体大盒子 -->
      <div class="recommended_box">
        <!-- 每个小盒子 -->
        <div v-for='(i,index) in RanKingData.list.slice(6, 9)' v-if='RanKingData'>
          <!-- 封面相关 -->
          <div class="cover">
            <img :src="i.coverImgUrl" alt="">
            <span class="iconfont icon">&#xe62b;</span>
            <span class="min_title"><i>{{i.updateFrequency}}</i></span>
          </div>
          <!-- 榜单名 -->
          <div class="top_title">{{i.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListRecommended',
    props: {
      RanKingData: {
        type: Object,
        default: {}
      }
    },
  }
</script>

<style scoped>
  .recommended {
    box-sizing: border-box;
    width: 95%;
    margin: 10px auto;
    margin-top: 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }

  .recommended_title {
    font-size: 14px;
    padding-left: 12px;
    color: #333;
  }

  .recommended_box {
    width: 100%;
    height: 120px;
    margin-top: 5px;
    display: flex;
  }

  .recommended_box div {
    flex: 1;
    /* margin: 3px; */
    text-align: center;
  }

  .recommended_box div .cover {
    position: relative;
    box-sizing: border-box;
    width: 98px;
    height: 98px;
    padding: 6px;
    margin-left: 5px;
  }

  .recommended_box div .cover .icon {
    position: absolute;
    bottom: 12px;
    right: 14px;
    font-size: 14px;
    color: rgba(255, 255, 255, .5);
  }

  .recommended_box div .cover .min_title {
    position: absolute;
    height: 16px;
    width: 70px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .3);
    top: 9px;
    right: 4px;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    transform: scale(0.8);
  }

  .recommended_box div img {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

  .top_title {
    font-size: 12px;
    color: #333;
  }
</style>
