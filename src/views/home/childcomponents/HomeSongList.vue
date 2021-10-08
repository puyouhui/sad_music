<template>
  <div>
    <div class="Selected-song">
      <span class="playlists-title">
        <i>精选新歌</i>
      </span>
    </div>
    <div class="list">
      <songlist :songs='NewMusicList'></songlist>
    </div>
  </div>
</template>

<script>
  import {
    getNewMusicList
  } from '@/network/home.js'
  import Songlist from '@/views/home/childcomponents/SongList' //音乐列表
  export default {
    name: 'HomePlayList',
    components: {
      Songlist
    },
    data() {
      return {
        NewMusicList: []
      }
    },
    created() {
      getNewMusicList()
        .then(res => {
          this.NewMusicList = res.data.result
            // console.log(this.NewMusicList);
        })
    },
  }
</script>


<style scoped>
  .Selected-song {
    margin-top: 0px;
  }

  .playlists-title {
    font-size: 12px;
    color: #333;
    padding-left: 10px;
    font-style: normal;
    border-left: 3px solid #D43C33;
  }

  .list {
    width: 100%;
    overflow: hidden;
  }
</style>
