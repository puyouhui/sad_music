<template>
  <div class="homenav">
    <a @click='go_dayrecommended'>
        <img src="@/assets/img/home/icon1.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/home/icon2.jpg" alt="">
    </a>
    <a @click='goPlayListSquare'>
        <img src="@/assets/img/home/icon3.jpg" alt="">
    </a>
    <a @click='go_ranking'>
        <img src="@/assets/img/home/icon4.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/home/icon5.jpg" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HomeNav',
    methods: {
      go_dayrecommended() {
        this.$router.push('recommended')
      },
      go_ranking() {
        this.$router.push('ranking')
      },
      goPlayListSquare() {
        this.$router.push('playlistsquare')
      }
    }
  }
</script>

<style scoped>
  .homenav {
    margin-top: 4px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    background-color: #fff;
  }

  .homenav a {
    position: relative;
    flex: 1;
    text-align: center;
    /* background-color: rgb(104, 104, 104); */
  }

  .homenav a img {
    position: relative;
    top: 4px;
    /* left: 50%;
    transform: translateX(-50%); */
    width: 60px;
    height: 60px;
  }
</style>
