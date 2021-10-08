<!-- 全球榜 -->
<template>
  <div class="select">
    <div>
      <ran-king-title :ranking_title="'全球榜'"></ran-king-title>
    </div>
    <div class="select_item">
      <ran-king-item :frontitem_data='global_data1'></ran-king-item>
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
      global_data: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        // 组件需要用的数据
        global_data1: [],
      }
    },
    created() {
      this.global_data1.push(this.global_data.list[12])
      this.global_data1.push(this.global_data.list[11])
      this.global_data1.push(this.global_data.list[15])
      this.global_data1.push(this.global_data.list[18])
      this.global_data1.push(this.global_data.list[16])
      this.global_data1.push(this.global_data.list[17])
      this.global_data1.push(this.global_data.list[9])
      this.global_data1.push(this.global_data.list[23])
      this.global_data1.push(this.global_data.list[30])

      // this.behind_data = this.select_data.list.slice(24, 30)
      // console.log(this.front_data);
      // console.log(this.behind_data);
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
