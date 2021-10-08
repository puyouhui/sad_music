<template>
  <div>
    <!-- 顶部信息 -->
    <div class="navbar">
      <nav-bar>
        <span slot="left" class="iconfont" @click='back'>&#xe6a0;</span>
        <span slot="center" >热门歌手</span>
      </nav-bar>
    </div>
    <!-- 分类信息 -->
    <div class="classification">
      <div class="countries">
        <span @click='goChinese' :class='{active_item:list_is_show==2}'>华语</span>
        <span @click='goUnited' :class='{active_item:list_is_show==3}'>欧美</span>
        <span @click='goJapan' :class='{active_item:list_is_show==4}'>日本</span>
        <span @click='goKorea' :class='{active_item:list_is_show==5}'>韩国</span>
        <span @click='goOther' :class='{active_item:list_is_show==6}'>其他</span>
      </div>
      <div class="gender">
        <span :class='{active_item:gender==0}'>全部</span>
        <span :class='{active_item:gender==1}'>男</span>
        <span :class='{active_item:gender==2}'>女</span>
        <span :class='{active_item:gender==3}'>乐队/组合</span>
      </div>
    </div>
    <div class="title">
      <p>热门歌手</p>
    </div>
    <div>
      <scroll :scroll_data='scroll_data'>
        <div slot="main_body">
          <singer-list :Singer_list='Singer_list' v-show='list_is_show==1' @click_name='goDetailed'></singer-list>
          <singer-list :Singer_list='chinese_list' v-if='list_is_show==2' @click_name='goDetailed'></singer-list>
          <singer-list :Singer_list='united_list' v-if='list_is_show==3' @click_name='goDetailed'></singer-list>
          <singer-list :Singer_list='japan_list' v-if='list_is_show==4' @click_name='goDetailed'></singer-list>
          <singer-list :Singer_list='korea_list' v-if='list_is_show==5' @click_name='goDetailed'></singer-list>
          <singer-list :Singer_list='Singer_list' v-if='list_is_show==6' @click_name='goDetailed'></singer-list>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import {
    getAuthorlist,
    getChineselist,
    getUnitedlist,
    getJapanlist,
    getKorealist
  } from '@/network/author.js'

  import NavBar from '@/components/common/navbar/NavBar' //顶部组件
  import Scroll from '@/components/common/scroll/Scroll' //滚动组件
  import SingerList from '@/components/content/singerlist/SingerList' //歌手列表
  export default {
    name: 'AuthorList',
    components: {
      NavBar,
      Scroll,
      SingerList
    },
    data() {
      return {
        list_is_show: 1, //活跃列表
        gender: 0, //性别筛选
        Singer_list: [], //默认歌手列表
        chinese_list: [], //华语列表
        united_list: [], //欧美列表
        japan_list: [], //日本列表
        korea_list: [], //韩国列表
        scroll_data: { //定义滚动高度
          content_height: 78,
          bgc: '#fff'
        }
      }
    },
    created() {

      getAuthorlist() // 获取默认歌手
        .then(res => {
          console.log(res);
          this.Singer_list = res.data.artists
        })

      getChineselist() //获取华语歌手
        .then(res => {
          this.chinese_list = res.data.list.artists
        })
      getUnitedlist()
        .then(res => {
          this.united_list = res.data.list.artists

        })
      getJapanlist()
        .then(res => {
          this.japan_list = res.data.list.artists
            // console.log(res);
        })
      getKorealist()
        .then(res => {
          this.korea_list = res.data.list.artists
        })
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      goChinese() { //前往华语
        this.list_is_show = 2
      },
      goUnited() { //前往欧美
        this.list_is_show = 3
      },
      goJapan() { //前往日本
        this.list_is_show = 4
      },
      goKorea() { //前往韩国
        this.list_is_show = 5
      },
      goOther() { //前往其他
        this.list_is_show = 6
      },
      goDetailed(data) {
        // console.log(data.data.data);
        localStorage.setItem('author', JSON.stringify(data.data.data));
        this.$router.push('author')
      }
    }
  }
</script>


<style scoped>
  .navbar {
    height: 44px;
    background-color: #C4483B;
    color: #fff;
  }

  .classification {
    font-size: 14px;
    color: #666666;
  }

  .countries {
    height: 40px;
    line-height: 40px;
    margin-top: 5px;
    /* margin-left: 10px; */
  }

  .countries>span {
    padding-left: 15px;
    padding-right: 10px;
  }

  .gender {
    height: 40px;
    line-height: 40px;
    /* margin-left: 10px; */
  }

  .gender>span {
    padding-left: 15px;
    padding-right: 10px;
  }

  .title {
    height: 20px;
    font-size: 10px;
    padding-left: 15px;
    line-height: 20px;
    background-color: #F7F7F7;
    color: #666666;
  }

  .active_item {
    color: #C4483B;
  }
</style>
