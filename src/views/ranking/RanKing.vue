<template>
  <div>
    <!-- 顶部信息 -->
    <div class="top_word">
      <nav-bar>
        <span slot="center">排行榜</span>
      </nav-bar>
    </div>
    <main-ran-king></main-ran-king>
    <!-- 底部导航栏 -->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  //底部导航
  import MainTabBar from '@/components/content/MainTabBar'
  //顶部组件
  import NavBar from '@/components/common/navbar/NavBar'
  // 主体内容
  import MainRanKing from '@/views/ranking/ranking-childs/MainRanKing'

  export default {
    name: 'RanKing',
    components: {
      MainTabBar,
      NavBar,
      MainRanKing
    }
  }
</script>

<style scoped>
  .top_word {
    font-size: 14px;
    line-height: 44px;
    text-align: center;
    background-color: #C4483C;
    color: #fff;
  }
</style>
