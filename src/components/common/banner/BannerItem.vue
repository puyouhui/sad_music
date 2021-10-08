<template>
  <div class="swiper-slide" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BannerItem"
  }
</script>

<style scoped>
  .swiper-slide {
    width: 100%;
  }

  .swiper-slide img {
    width: 99.8%;
    border-radius: 8px;
    overflow: hidden;
  }
</style>
