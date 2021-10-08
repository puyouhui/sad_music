<template>
  <div class="like" @click='likeList'>
    <span class="cover">
      <div><img :src="like_list.coverImgUrl" alt="">
      </div>
    </span>
    <span class="title">
      <div>{{like_list.name}}</div>
      <i>{{like_list.trackCount}}&nbsp;首</i>
    </span>
    <span class="play">
      <div>
        <span class="iconfont">&#xe62d;</span>
        <i>播放</i>
      </div>
    </span>
  </div>
</template>

<script>
  import {
    getSongList
  } from '@/network/songlist.js'
  export default {
    name: 'Like',
    props: {
      like_list: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        song_list: []
      }
    },
    methods: {
      likeList() {
        getSongList(this.like_list.id)
          .then(res => {
            // console.log(res);
            // this.song_list = res.data.privileges
            localStorage.setItem('LikeMusicList', JSON.stringify(res.data.playlist))
            this.$router.push('likemusiclist')
          })
      }
    },
    created() {
      // console.log(this.like_list);
    }

  }
</script>


<style scoped>
  .like {
    display: flex;
    position: relative;
    width: 90%;
    height: 55px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
    /* border: #333 solid 1px; */
  }

  .cover {
    flex: 1;
    text-align: center;
    line-height: 55px;
  }

  .cover div {
    position: relative;
    margin-left: 8px;
    margin-top: 5px;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    overflow: hidden;
  }

  .cover div img {
    width: 100%;
  }

  .title {
    flex: 4;
    font-size: 13px;
    margin-left: 14px;
  }

  .title div {
    margin: 0;
    margin-top: 10px;
    color: #333;
  }

  .title i {
    font-size: 12px;
    color: #999;
  }

  .play {
    flex: 1;
  }

  .play div {
    width: 55px;
    height: 22px;
    margin-top: 17px;
    margin-right: 8px;
    position: relative;
    box-sizing: border-box;
    border-radius: 12px;
    /* background-color: #C4483B; */
    border: 1px solid #C4483B;
    /* text-align: center; */
    padding-left: 8px;
    line-height: 20px;
    font-size: 12px;
    color: #C4483B;
  }

  .play i {
    position: absolute;
    font-size: 10px;
    margin-left: 4px;
  }
</style>
