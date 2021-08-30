<template>
  <div class="homenav">
    <a>
        <img src="@/assets/img/icon1.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/icon2.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/icon3.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/icon4.jpg" alt="">
    </a>
    <a>
        <img src="@/assets/img/icon5.jpg" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HomeNav',

  }
</script>

<style scoped>
  .homenav {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
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
