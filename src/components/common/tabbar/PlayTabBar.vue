<template>
  <div class="addflot">
    <SmallPlay class="smallplay"></SmallPlay>
    <MainTabBar></MainTabBar>
  </div>
  </template>

<script>
  import SmallPlay from '@/components/content/small-play/SmallPlay'
  import MainTabBar from '@/components/content/MainTabBar'
  export default {
    name: "PlayTabBar",
    components: {
      SmallPlay,
      MainTabBar
    }
  }
</script>

<style scoped>
  .smallplay {
    bottom: 49px;
  }

  .addflot {
    height: 93px;
    width: 100%;
  }

  #tab-bar {
    box-sizing: border-box;
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>
