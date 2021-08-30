<template>
<div class="banner-box">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201410%2F26%2F225146ajcs19i6n9p1solj.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632572247&t=762962311a0d1d8c29baef1ecac96b53" alt=""></div>
      <div class="swiper-slide"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201410%2F26%2F225146ajcs19i6n9p1solj.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632572247&t=762962311a0d1d8c29baef1ecac96b53" alt=""></div>      <div class="swiper-slide"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201410%2F26%2F225146ajcs19i6n9p1solj.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632572247&t=762962311a0d1d8c29baef1ecac96b53" alt=""></div>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
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
          loopAdditionalSlides: 3,
          loop: true,
          speed: 2000,
          autoplay: 3000,
          // pagination: '.swiper-pagination',
          dynamicBullets: true,
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
          parallax: true,
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          autoplayDisableOnInteraction: false /* 注意此参数，默认为true */
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
    height: 100%;
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
    margin: 5px auto;
    border-radius: 8px;
    overflow: hidden;
  }

  .swiper-container {
    width: 100%;
    height: 160px;
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
    background-color: #ffffff;
  }

  .swiper-pagination-bullet-active {
    background-color: #D43C33;
  }
</style>
