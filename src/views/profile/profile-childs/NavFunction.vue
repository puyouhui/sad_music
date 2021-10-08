<template>
  <div class="nav_function">
    <span><img src="@/assets/img/profile/wdhy.gif" alt=""></span>
    <span><img src="@/assets/img/profile/schz.gif" alt=""></span>
    <span><img src="@/assets/img/profile/zjbf.gif" alt=""></span>
    <span><img src="@/assets/img/profile/yg.gif" alt=""></span>
  </div>
</template>

<script>
  export default {
    name: 'NavFunction',
  }
</script>


<style scoped>
  .nav_function {
    width: 90%;
    height: 60px;
    display: flex;
    margin: 20px auto;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
  }

  .nav_function span {
    z-index: 1;
    flex: 1;
    background-color: rgb(255, 255, 255);
  }

  .nav_function span img {
    height: 100%;
  }
</style>
