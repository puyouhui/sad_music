<template>
<div class="banner-box">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>

    </div>
     <!-- 添加分业器 -->
    <div class="swiper-pagination"></div>
    </div>


  </div>
</div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: 'Banner',
    mounted() {
      setTimeout(() => {
        this.mySwiper = new Swiper('.swiper-container', {
          loopAdditionalSlides: 0,
          loop: true,
          speed: 1300,
          autoplay: 3000,
          pagination: '.swiper-pagination',
          dynamicBullets: true,
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
          parallax: true,
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          autoplayDisableOnInteraction: false,
        });
      }, 100)
    }

  }
</script>

<style>
  @import '../../../../node_modules/swiper/dist/css/swiper.css';
  html,
  body {
    position: relative;
    /* height: 100%; */
  }

  body {
    /* background: #eee; */
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .banner-box {
    width: 96%;
    margin: 0 auto;
    height: 146px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    border-radius: 100%;
  }

  .swiper-pagination-bullet-active {
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-image: linear-gradient(90deg, #ffb23c 0%, #ff7a1d 100%), linear-gradient( #ffffff, #ffffff) !important;
  }
</style>
