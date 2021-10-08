<template>
    <div class="nav-bar">
      <div class="left"><slot name='left'></slot></div>
      <div class="center"><slot name='center'></slot></div>
      <div class="right"><slot name ='right'></slot></div>
    </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    box-sizing: border-box;
    z-index: 999;
    height: 44px;
    text-align: center;
    display: flex;
    line-height: 44px;
  }
  
  .left,
  .right {
    width: 60px;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
  }
  
  .center {
    flex: 1;
    line-height: 44px;
    font-size: 14px;
  }
</style>