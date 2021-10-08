<template>
  <div id="home">
    <HomeSearch></HomeSearch>
    <scroll :scroll_data='sliding_data'>
      <div slot="main_body">
        <home-banner></home-banner>
        <HomeNav></HomeNav>
        <home-play-list></home-play-list>
        <HomeSongList></HomeSongList>
        <Jump></Jump>
        <Footer></Footer>
      </div>
    </scroll>
    <PlayTabBar></PlayTabBar>
  </div>
</template>

<script>
  //导入组件
  import HomePlayList from './childcomponents/HomePlayList' //精选歌单
  import HomeSongList from './childcomponents/HomeSongList' //精选单曲
  import HomeNav from '@/components/content/homenav/HomeNav' //导航栏
  import HomeSearch from './childcomponents/HomeSearch' //搜索框
  import HomeBanner from './childcomponents/HomeBanner' //轮播图
  import PlayTabBar from '@/components/common/tabbar/PlayTabBar' //播放控件
  import Jump from '@/components/content/footer/Jump' //底部信息
  import Footer from '@/components/content/footer/Footer' //底部信息
  import Scroll from '@/components/common/scroll/Scroll' //滚动插件



  export default {
    name: 'Home',
    components: {
      HomePlayList,
      HomeSongList,
      HomeNav,
      HomeSearch,
      HomeBanner,
      PlayTabBar,
      Jump,
      Footer,
      Scroll,
      Audio

    },
    data() {
      return {
        login_store: false, //登录状态
        sliding_data: {
          content_height: 79,
          bgc: '#fff'
        },
      }
    },
    created() {
      this.login_store = this.$store.state.login_store
      console.log(this.login_store);
      if (!this.login_store) {
        this.$router.replace('/login')
      } else {}
    },

  }
</script>

<style scoped>

</style>
