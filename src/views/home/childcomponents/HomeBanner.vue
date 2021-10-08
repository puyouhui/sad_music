<template>
  <div class="banner_div">
    <keep-alive>
      <Banner>
        <BannerItem v-for='item in homeBanners'>
          <img :src='item.imageUrl' alt="">
        </BannerItem>
      </Banner>
    </keep-alive>
  </div>
</template>

<script>
  //导入请求模块
  import {
    getHomeMultidata
  } from '@/network/home.js'

  //导入小组件
  import {
    Banner,
    BannerItem
  } from '@/components/common/banner/index'


  export default {
    name: 'HomeBanner',
    components: {
      Banner,
      BannerItem,
    },
    data() {
      return {
        homeBanners: []
      }
    },
    created() {
      // 请求多个数据
      getHomeMultidata()
        .then(res => {
          // console.log(res);
          this.homeBanners = res.data.banners
            // console.log(this.homeBanners);
        })
    },
  }
</script>

<style scoped>
  .banner_div {
    background-color: #fff
  }
</style>
