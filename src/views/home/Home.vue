<template>
<div>
  <Banner></Banner>
  <HomeNav></HomeNav>
  <home-play-list></home-play-list>
  <HomeSongList></HomeSongList>
</div>

</template>

<script>
  import HomePlayList from './HomePlayList'
  import HomeSongList from './HomeSongList'
  import Banner from '@/components/common/banner/Banner'
  import HomeNav from '@/components/common/homenav/HomeNav'
  export default {
    name: 'Home',
    components: {
      HomePlayList,
      HomeSongList,
      Banner,
      HomeNav
    }
  }
</script>

<style scoped>

</style>
