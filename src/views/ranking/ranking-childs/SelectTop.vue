<!-- 精选榜 -->
<template>
  <div class="select">
    <div>
      <ran-king-title :ranking_title="'精选榜'"></ran-king-title>
    </div>
    <div class="select_item">
      <ran-king-item :frontitem_data='front_data'></ran-king-item>
    </div>
  </div>
</template>

<script>
  import RanKingTitle from '@/components/content/ranking_child/RanKingTitle' //标题组件
  import RanKingItem from '@/components/content/ranking_child/RanKingItem' //小的item组件
  export default {
    name: 'SelectTop',
    components: {
      RanKingTitle,
      RanKingItem,
    },
    props: {
      select_data: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        // 数据
        front_data: [],
      }
    },
    created() {
      this.front_data.push(this.select_data.list[4])
      this.front_data.push(this.select_data.list[28])
      this.front_data.push(this.select_data.list[29])
    }
  }
</script>

<style scoped>
  .select {
    box-sizing: border-box;
    width: 95%;
    margin: 10px auto;
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }
</style>
