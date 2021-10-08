<!-- 推荐搜索小模块 -->
<template>
  <div class="recommended">
    <span>推荐搜索：</span>
    <i v-for='(i,index) in recommendation' @click='goRearchResult(index)'>
      {{i.searchWord}}
    </i>
  </div>
</template>

<script>
  // 导入请求模块
  import {
    getRecommenDation
  } from '@/network/search.js'


  export default {
    name: 'Recommended',
    data() {
      return {
        recommendation: []
      }
    },
    created() {
      getRecommenDation()
        .then(res => {
          this.recommendation = res.data.data.slice(16, 19)
            // console.log(this.recommendation);
        })
    },
    methods: {
      goRearchResult(index) {
        this.$emit('go_search', this.recommendation[index].searchWord)
      }
    }
  }
</script>

<style scoped>
  .recommended {
    margin-top: 15px;
    padding-left: 10px;
    font-size: 14px;
    color: #686867;
  }

  .recommended span {
    margin-right: 4px;
  }

  .recommended i {
    margin-right: 12px;
    color: #597CAA;
  }
</style>
