<template>
<div  class="header-search">
  <slot></slot><slot name='icon'></slot>
</div>
</template>

<script>
  export default {
    name: 'SearchItem',
    components: {}
  }
</script>

<style scoped>
  .header-search {
    flex: 1;
  }
  
  .header-search:nth-child(2) {
    position: relative;
    display: block;
    flex: 6;
  }
  
  .header-search:nth-child(2) div span {
    position: absolute;
    left: 15px;
    top: 1px;
    color: #333;
  }
  
  .header-search:nth-child(2) input {
    display: inline-block;
    box-sizing: border-box;
    width: 95%;
    height: 25px;
    border-radius: 12px;
    outline: none;
    padding-left: 30px;
    font-size: 12px;
    font-weight: 400;
    color: #666;
  }
  
  .header-search:nth-child(3) .iconfont {
    font-size: 24px;
  }
  /* .search-logo {
    flex: 1;
  }
  
  .search-main {
    flex: 6;
  }
  
  .search-main input {
    width: 96%;
    height: 26px;
    border-radius: 13px;
  }
  
  .search-profile {
    flex: 1;
  }
  
  .search-profile span {
    font-size: 20px;
  } */
</style>