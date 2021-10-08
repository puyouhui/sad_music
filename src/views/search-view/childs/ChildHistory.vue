<!-- 搜索记录模块 -->
<template>
<div>
  <div class="history_box">
  <div class="history_head">
    <span class="title">搜索记录</span>
    <span class="remove iconfont" @click='emptyHistory'>&#xe650;</span>
  </div>

  <div class="history_body">
    <span  v-for='(i,index) in result_history' @click='goRearchResult(index)'>{{i}}</span>
  </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ChildHistory',
    props: {
      result_history: {
        type: Array,
        default: []
      }
    },
    methods: {
      goRearchResult(index) { // 点击搜索事件
        // console.log(this.recommendation[index].searchWord);
        this.$emit('go_search', this.result_history[index])
      },
      emptyHistory() {
        // console.log(123);
        this.$emit('empty_history')
      }
    }
  }
</script>

<style scoped>
  .history_box {
    width: 100%;
    padding-top: 14px;
  }

  .history_head {
    width: 100%;
    font-size: 14px;
    color: #333;
  }

  .history_head .title {
    margin-top: 15px;
    padding-left: 10px;
  }

  .history_head .remove {
    position: absolute;
    right: 20px;
    font-size: 18px;
  }

  .history_body {
    /* position: absolute;
    top: 18px; */
    box-sizing: border-box;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
  }

  .history_body span {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    margin-right: 10px;
    margin-top: 0;
    border-radius: 15px;
    padding: 0 10px 0 10px;
    font-size: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, .04);
    color: #3c3c3c;
  }
</style>
