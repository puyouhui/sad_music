<template>
  <div class="playlist">
    <div class="playlist_box" v-for='(i,index) in playlist' @click='go_songlist(index)'>
      <div class="item_img">
        <span class="iconfont play_num">&#xe690;{{(i.playCount/10000).toFixed(2)}}万</span>
        <img :src="i.coverImgUrl" alt="">
      </div>
      <div class="item_title">{{i.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MaxPlayList',
    props: {
      playlist: {
        type: Array,
        default: []
      }
    },
    methods: {
      go_songlist(index) {
        // 这里把点击的当前数据传给本地管理
        // console.log(this.PlayMusicList[index]);
        localStorage.setItem('StorePlayList', JSON.stringify(this.playlist[index]))
        this.$router.push('playlist')
      }
    }
  }
</script>

<style scoped>
  .playlist {
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px 0 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .playlist .playlist_box {
    box-sizing: border-box;
    width: 33%;
    /* background-color: rgb(144, 101, 49); */
    padding: 5px 6px 2px 6px;
  }

  .item_img {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 112px;
  }

  .item_img span {
    position: absolute;
    right: -0.05333rem;
    top: 0.08rem;
    height: 0.42667rem;
    line-height: 0.42667rem;
    padding-left: 0.13333rem;
    padding-right: 0.13333rem;
    border-radius: 0.18667rem;
    color: #fff;
    font-size: 0.32rem;
    background-color: rgba(0, 0, 0, .4);
    transform: scale(0.7);
  }

  .item_img img {
    width: 100%;
    border-radius: 8px;
  }

  .item_title {
    width: 90%;
    height: 30px;
    margin-top: 5px;
    padding-left: 3px;
    text-align: left;
    font-size: 10px;
    color: #333;
    overflow: hidden;
  }
</style>
