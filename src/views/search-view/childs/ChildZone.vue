<template>
  <div class="zone">
    <div @click='go_authorlist'><img src="@/assets/img/search/geshoufenlei.png" alt=""></div>
    <div @click='go_play_list'><img src="@/assets/img/search/guangchang.png" alt=""></div>
    <div><img src="@/assets/img/search/3.png" alt=""></div>
    <div><img src="@/assets/img/search/4.png" alt=""></div>
    <div><img src="@/assets/img/search/5.png" alt=""></div>
    <div><img src="@/assets/img/search/6.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: 'ChildZone',
    methods: {
      go_authorlist() {
        this.$router.push('/authorlist')
      },
      go_play_list() {
        this.$router.push('/playlistsquare')
      }
    }
  }
</script>

<style scoped>
  .zone {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .zone>div {
    box-sizing: border-box;
    width: 50%;
    padding: 3px;
  }
  
  .zone>div img {
    width: 100%;
  }
</style>