<template>
  <div id="search-box">
    <slot></slot>
    <!-- <div class="search-logo"><slot name='index-logo'></slot></div>
    <div class="search-main"><slot name='index-seaarch'></slot></div>
    <div class="search-profile"><slot name='index-profile'></slot></div> -->
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style scoped>
  #search-box {
    width: 100%;
    height: 49px;
    line-height: 49px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #D43C33;
    font-size: 14px;
    color: #fff;
    text-align: center;
    z-index: 9;
  }
</style>