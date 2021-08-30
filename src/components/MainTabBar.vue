<template>
  <tab-bar>
    <tab-bar-item path='/home' activecolor='#D43C33'>
      <span slot="item-icon" class="iconfont">&#xe640;</span>
      <div slot="item-text">精选</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activecolor='#D43C33'>
      <span slot="item-icon" class="iconfont">&#xe782;</span>
      <div slot="item-text">榜单</div>
    </tab-bar-item>
    <tab-bar-item path='/search' activecolor='#D43C33'>
      <span slot="item-icon" class="iconfont">&#xe625;</span>
      <div slot="item-text">搜索</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activecolor='#D43C33'>
      <span slot="item-icon" class="iconfont">&#xe63b;</span>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '../components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
