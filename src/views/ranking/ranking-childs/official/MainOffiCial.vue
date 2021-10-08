<!-- 官方推荐模块 -->
<template>
  <div class="official_box">
    <!-- 标题区域 -->
    <div class="official_title">
      <span class="title_logo"><img src="@/assets/img/logo/yx.png" alt=""></span>
      <span class="title_word">官方榜</span>
    </div>
    <!-- 飙升榜 -->
    <child-offi-cial :ContentData='this.soaring_data' :bgc="soaring_color"></child-offi-cial>
    <!-- 新歌榜 -->
    <child-offi-cial :ContentData='this.newsong_data' :bgc="newsong_collor"></child-offi-cial>
    <!-- 热歌榜 -->
    <child-offi-cial :ContentData='this.hotsong_data' :bgc="hotsong_color"></child-offi-cial>
    <!-- 原创榜 -->
    <child-offi-cial :ContentData='original_data' :bgc="original_color"></child-offi-cial>

  </div>
</template>

<script>
  import ChildOffiCial from '@/views/ranking/ranking-childs/official/ChildOffiCial'
  export default {
    name: "MainOffiCial",
    components: {
      ChildOffiCial
    },
    props: {
      // 接收父组件传过来的值
      officialmian_data: {
        String: Object,
        default: {}
      }
    },

    data() {
      return {
        // 飙升榜数据和指定颜色
        soaring_data: {},
        soaring_color: {
          bgc_color: '#F6EAEE',
          title_color: '#D54277'
        },
        // 新歌榜数据和指定颜色
        newsong_data: {},
        newsong_collor: {
          bgc_color: '#EBF1F0',
          title_color: '#4B958A'
        },
        // 热歌榜数据和指定颜色
        hotsong_data: {},
        hotsong_color: {
          bgc_color: '#F5E9E9',
          title_color: '#D13931'
        },
        // 原创榜数据和指定颜色
        original_data: {},
        original_color: {
          bgc_color: '#EBEEF5',
          title_color: '#436FB9'
        }
      }
    },
    created() {
      this.soaring_data = this.officialmian_data.list[0]
      this.newsong_data = this.officialmian_data.list[1]
      this.hotsong_data = this.officialmian_data.list[3]
      this.original_data = this.officialmian_data.list[2]
    },
    mounted() {
      // console.log(this.officialmian_data.list);
    }
  }
</script>

<style scoped>
  .official_box {
    box-sizing: border-box;
    margin: 10px auto;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    /* background-color: #fff; */
  }

  .official_title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    vertical-align: middle;
  }

  .title_logo {
    width: 20px;
    height: 20px;
    overflow: hidden;
  }

  .title_logo img {
    height: 20px;
    padding-bottom: 15px;
  }

  .title_word {
    margin-left: 4px;
    font-size: 14px;
    color: #333;
  }

  .div {
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
    background-color: saddlebrown;
  }
</style>
