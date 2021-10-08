<!-- 官方推荐的子模块 -->
<template>
  <!-- v-if='status' -->
  <div class="child_oficial" :style='bgcColor' v-if='status'>
    <!-- 左侧盒子 -->
    <div class="left">
      <div class="left_title" :style='titleColor'>
        {{ContentData.name}}
      </div>
      <div class="left_cover">
        <span class="iconfont play_icon">&#xe62b;</span>
        <div class="left_cover1">
          <img :src="top_three[0].al.picUrl" alt="">
        </div>
        <div class="left_cover2">
          <img :src="top_three[1].al.picUrl" alt="">
        </div>
        <div class="left_cover3">
          <img :src="top_three[2].al.picUrl" alt="">
        </div>
      </div>
    </div>
    <!-- 右侧盒子 -->
    <div class="rigth">
      <div class="update_date">
        <i>{{ContentData.updateFrequency}}</i>
      </div>

      <div class="simple_top">

        <div v-for='(i, index) in top_three' :key="index" class="three">
          <i class="top_num">{{index+1}}.</i>
          <span>{{i.name}}</span>
          <i class="author"> - {{i.ar[0].name}}</i>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  //  导入请求
  import {
    getOfficialdetailed
  } from '@/network/ranking.js'


  export default {
    name: "ChildOffiCial",
    props: {
      ContentData: {
        type: Object,
        default: {}
      },
      bgc: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {
        status: false,
        // 存放组件上需要展示的详细数据
        // 存放排名前三的信息
        top_three: []
      }
    },

    computed: {
      // 这里主要计算传过来的颜色
      bgcColor() {
        return 'backgroundColor:' + this.bgc.bgc_color
      },
      titleColor() {
        return 'color:' + this.bgc.title_color
      }
    },
    created() {
      getOfficialdetailed(this.ContentData.id)
        .then(res => {
          // console.log(res);
          this.top_three = res.data.playlist.tracks.slice(0, 3)
            // console.log(this.top_three);
          this.status = true;
        })
    }
  }
</script>

<style scoped>
  .child_oficial {
    display: flex;
    width: 100%;
    height: 110px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: #fff;
  }

  .left_title {
    box-sizing: border-box;
    padding-top: 10px;
    padding-left: 20px;
    height: 40px;
    /* text-align: center; */
    font-size: 18px;
    /* line-height: 40px; */
  }

  .child_oficial .left {
    flex: 3
  }

  .left_cover {
    width: 80px;
    height: 54px;
    position: relative;
    margin-top: 0px;
    margin-left: 18px;
  }

  .left_cover .left_cover1 {
    z-index: 2;
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 5px;
    overflow: hidden;
  }

  .left_cover .left_cover1 img,
  .left_cover .left_cover2 img,
  .left_cover .left_cover3 img {
    width: 100%;
  }

  .left_cover .left_cover2 {
    z-index: 1;
    position: absolute;
    left: 20px;
    bottom: 0;
    width: 44px;
    height: 44px;
    border-radius: 5px;
    overflow: hidden;
    opacity: 0.7;
  }

  .left_cover .left_cover3 {
    position: absolute;
    left: 40px;
    bottom: 0;
    width: 34px;
    height: 34px;
    border-radius: 5px;
    overflow: hidden;
    opacity: 0.4;
  }

  .play_icon {
    z-index: 9;
    position: absolute;
    top: 16px;
    left: 18px;
    font-size: 20px;
    color: rgba(255, 255, 255, .5);
  }

  .child_oficial .rigth {
    flex: 6
  }

  .update_date {
    position: relative;
  }

  .update_date i {
    position: absolute;
    right: 10px;
    top: 6px;
    font-size: 12px;
    color: rgba(0, 0, 0, .3);
  }

  .simple_top {
    padding-top: 10px;
    width: 90%;
    overflow: hidden;
    font-size: 14px;
    color: #2F3031;
    white-space: nowrap
  }
  /* 右边的简单排行 */

  .three {
    line-height: 30px;
    color: #2F3031;
  }

  .top_num {
    font-size: 14px;
    color: #2F3031;
    margin-right: 4px;
  }

  .author {
    font-size: 12px;
    color: #888;
  }
</style>
