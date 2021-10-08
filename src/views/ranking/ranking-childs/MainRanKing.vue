<!-- 这里封装的是主体区域 -->
<template>
  <sli-ding-nav :sliding_data='sliding_data' v-if='status'>
    <div slot="main_body">
      <list-recommended :RanKingData='RanKingData'></list-recommended>
      <main-offi-cial :officialmian_data='RanKingData'></main-offi-cial>
      <select-top :select_data='RanKingData'></select-top>
      <style-list :style_data='RanKingData'></style-list>
      <glo-bal-list :global_data='RanKingData'></glo-bal-list>
      <MvList></MvList>
    </div>
  </sli-ding-nav>
</template>

<script>
  // 导入榜单全部请求
  import {
    getRanKingData
  } from '@/network/ranking.js'

  import SliDingNav from '@/components/common/sliding-nav/SliDingNav' //滚动组件
  import ListRecommended from '@/views/ranking/ranking-childs/ListRecommended' //推荐榜单
  import MainOffiCial from '@/views/ranking/ranking-childs/official/MainOffiCial' //官方榜
  import SelectTop from '@/views/ranking/ranking-childs/SelectTop' //精选榜
  import StyleList from '@/views/ranking/ranking-childs/StyleList' //曲风榜
  import GloBalList from '@/views/ranking/ranking-childs/GloBalList' //全球榜
  import MvList from '@/views/ranking/ranking-childs/MvList'
  export default {
    name: 'MainRanKing',
    components: {
      SliDingNav,
      ListRecommended,
      MainOffiCial,
      SelectTop,
      StyleList,
      GloBalList,
      MvList
    },
    data() {
      return {
        status: false,
        // sliding_data用来传数据给滚动组件
        sliding_data: {
          item_title: ['官方', '精选', '曲风', '全球', 'MV'], // 传入子组件顶部导航的数据
          bgc: '#C4483C', //传入子组件的导航栏背景颜色
          content_height: 85, //传入子组件的盒子总高度
          jump_heigth: [200, 780, 990, 1350, 1560] //传入子组件的依次跳转高度
        },
        RanKingData: {}
      }
    },

    created() {
      // 数据的请求
      getRanKingData()
        .then(res => {
          this.RanKingData = res.data
            // console.log(this.RanKingData);
          this.status = true;
        })

    }
  }
</script>

<style>

</style>
