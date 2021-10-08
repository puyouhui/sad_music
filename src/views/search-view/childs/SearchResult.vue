<!-- 这里是点击搜索后结果展示的列表区 -->
<template>
  <div class="resilt">
    <SliDingNav :sliding_data='sliding_data'
                >
      <div slot="main_body">
        <song-list :songs='songs'></song-list>

        <div class="albumlist">相关歌单</div>
        <album-list :AlbumList='album_list'></album-list>

        <div class="albumlist">相关歌手</div>
        <SingerList :Singer_list='Singer_list'></SingerList>

        <div class="albumlist">相关MV</div>
        <mv-list :mv_list='mv_list'></mv-list>
      </div>
    </SliDingNav>
  </div>
</template>

<script>
  // import {
  //   getAlbumList,
  //   getSingerList,
  //   getMvdata,
  // } from '@/network/search.js'

  import SliDingNav from '@/components/common/sliding-nav/SliDingNav' // 导入滚动
  import SongList from '@/components/content/songlist/SongList' //歌曲列表
  import AlbumList from '@/components/content/albumlist/AlbumList' //歌单列表
  import SingerList from '@/components/content/singerlist/SingerList' //歌手列表
  import MvList from '@/components/content/mvlist/MvList' //mv列表

  export default {
    name: 'SearchResult',
    components: {
      SliDingNav,
      SongList,
      AlbumList,
      SingerList,
      MvList
    },
    data() {
      return {
        sliding_data: {
          item_title: ['单曲', '歌单', '歌手', 'MV'], // 传入子组件顶部导航的数据
          bgc: '#C4483C', //传入子组件的导航栏背景颜色
          content_height: 81, //传入子组件的盒子总高度
          jump_heigth: [0, 1750, 3120, 3246] //传入子组件的依次跳转高度
        },
      }
    },
    props: {
      songs: {
        type: Array,
        default: []
      },
      wordvalue: {
        type: String,
        default: ""
      },
      album_list: {
        type: Array,
        default: []
      },
      Singer_list: {
        type: Array,
        default: []
      },
      mv_list: {
        type: Array,
        default: []
      }
    },
  }
</script>


<style>
  .resilt {
    width: 100%;
    height: 100vh;
    z-index: 9;
    position: fixed;
  }

  .albumlist {
    margin-top: 20px;
    height: 20px;
    line-height: 20px;
    padding-left: 14px;
    font-size: 14px;
    color: #333;
    border-left: 3px solid #C4483B;
  }
</style>
