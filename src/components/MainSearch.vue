<template>

<div>
  <search>
  <search-item>
    <span >logo</span>
  </search-item>

  <search-item>
    <div><span class="iconfont" slot="icon">&#xe625;</span>
      <input type="text" name="" id="" value="薛之谦新歌"></div>
  </search-item>

  <search-item>
    <span class="iconfont">&#xe637;</span>
  </search-item>

</search>
<collapse></collapse>
</div>

</template>

<script>
  import Search from '@/components/common/search/Search'
  import SearchItem from '@/components/common/search/SearchItem'
  //下面这个组件解决顶部塌陷的
  import Collapse from '@/components/common/search/Collapse'
  export default {
    name: 'MainSearch',
    components: {
      Search,
      SearchItem,
      Collapse
    }
  }
</script>

<style scoped>

</style>
