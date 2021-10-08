<!-- 封装的小的歌单列表，一个歌单一行 -->
<template>
  <div class="album_box">
    <div class="album_list" v-for='(i,index) in AlbumList' @click='go_songlist(index)'>
      <div class="cover_img">
        <div>
          <img :src="i.coverImgUrl" alt="">
        </div>
      </div>
      <div class="album_data">
        <div>
          <div class="album_name">{{i.name}}&nbsp;&nbsp;</div>
          <div class="album_message">
            <i>{{i.trackCount}}首音乐&nbsp;&nbsp;</i>
            <i>by&nbsp;{{i.creator.nickname}}&nbsp;</i>
            <i>播放{{(i.playCount/10000).toFixed(1)}}万次</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlbumList',
    props: {
      AlbumList: {
        type: Array,
        default: []
      }
    },
    methods: {
      go_songlist(index) {
        localStorage.setItem('StorePlayList', JSON.stringify(this.AlbumList[index]))
        this.$router.push('playlist')
      }
    }
  }
</script>

<style scoped>
  .album_box {
    margin-top: 10px;
  }

  .album_list {
    display: flex;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
  }

  .cover_img {
    flex: 1;
    /* background-color: sandybrown; */
  }

  .cover_img div {
    margin-top: 8px;
    margin-left: 10px;
    width: 46px;
    height: 46px;
    border-radius: 4px;
    overflow: hidden;
    /* background-color: seagreen; */
  }

  .cover_img div img {
    width: 100%;
  }

  .album_data {
    flex: 4;
    padding-top: 10px;
  }

  .album_name {
    font-size: 14px;
  }

  .album_message {
    margin-top: 4px;
    font-size: 12px;
    color: #888;
  }
</style>
