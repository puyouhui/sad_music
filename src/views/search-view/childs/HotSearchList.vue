<!-- 热搜榜 -->
<template>
  <div class="hotlist">
    <div class="hotlist_title">热搜榜</div>
    <div class="hotlist_body">
      <ul>
        <li v-for='(i,index) in recommendation' @click='goRearchResult(index)'>
          <i>{{index+1}}</i>
          {{i.searchWord}}
          <i class="hot_icon" v-show='i.iconType===1'>
            <img src="@/assets/img/search/hot.png" alt="">
          </i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // 导入请求模块
  import {
    getRecommenDation
  } from '@/network/search.js'

  export default {
    name: 'HotSearchList',
    data() {
      return {
        //热搜榜单
        recommendation: [],
        defaultValue: ''
      }
    },
    created() {
      getRecommenDation()
        .then(res => {
          this.recommendation = res.data.data.slice(0, 10)
            // console.log(this.recommendation);
        })
    },
    methods: {
      goRearchResult(index) { // 点击搜索事件
        // console.log(this.recommendation[index].searchWord);
        this.$emit('go_search', this.recommendation[index].searchWord)
      }
    }
  }
</script>

<style scoped>
  .hotlist {
    margin-top: 15px;
  }

  .hotlist_title {
    padding-left: 10px;
    font-size: 14px;
    border-left: 3px solid #C4483C;
    color: #333;
  }

  .hotlist_body {
    box-sizing: border-box;
    width: 94%;
    margin-left: 3%;
    margin-top: 10px;
    border-radius: 6px;
    height: 155px;
    background-color: rgb(245, 245, 245);
  }

  .hotlist_body li {
    position: relative;
    width: 50%;
    height: 30px;
    line-height: 30px;
    float: left;
    font-size: 14px;
  }

  .hotlist_body li i {
    margin: 0 12px 0 10px;
  }

  .hotlist_body ul>li:nth-child(-n+3) {
    font-weight: 400;
  }

  .hotlist_body ul>li:nth-child(-n+3) i {
    color: #C4483C;
    font-weight: 700;
  }

  .hotlist_body ul>li:nth-child(n+4) {
    color: #555;
  }

  .hotlist_body ul>li:nth-child(10) i {
    margin-right: 7px;
  }

  .hot_icon {
    margin-left: 4px !important;
    position: absolute;
    top: 6px;
    display: inline-block;
    width: 18px;
    height: 18px;
  }

  .hot_icon img {
    width: 100%;
  }
</style>
