<template>
  <div class="play_list_nav">

    <SliDingNav :sliding_data='sliding_data'>
      <div slot="main_body">
        <div>
          <div class="created">
            <!-- <div>创建歌单</div> -->
            <AlbumList :AlbumList='play_list'></AlbumList>
          </div>
          <!-- <div class="collection">收藏歌单</div> -->
        </div>
      </div>
    </SliDingNav>
  </div>
</template>

<script>
  import SliDingNav from '@/views/profile/profile-childs/PlayListScroll' //滚动
  import AlbumList from '@/components/content/albumlist/AlbumList'
  export default {
    name: 'PlayListSwitch',
    components: {
      SliDingNav,
      AlbumList
    },

    data() {
      return {
        sliding_data: {
          item_title: ['创建歌单', '收藏歌单'], // 传入子组件顶部导航的数据
          bgc: '#f6f6f6', //传入子组件的导航栏背景颜色
          content_height: 44, //传入子组件的盒子总高度
          jump_heigth: [0, 480], //传入子组件的依次跳转高度
        },
      }
    },
    props: {
      play_list: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .play_list_nav {
    font-size: 14px;
    color: #323233;
  }

  .play_list_nav span {
    flex: 1;
  }

  .active {
    border-bottom: 3px solid #CB6258;
  }
</style>
