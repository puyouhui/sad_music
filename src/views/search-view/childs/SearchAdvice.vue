<!-- 搜索时弹出的关联建议模块 -->
<template>
<div class="advice"  v-if='status'>

  <div class="directly" @click='directly_search'>
    <a href="#">搜“
      <i>{{wordvalue}}</i>
      ”相关的内容</a>
  </div>

  <div class="title"><span class="iconfont">&#xe6c0;</span><i>单曲</i></div>
  <div class="details" v-for='(i,index) in data_search.result.songs' @click='go_play(index)'>{{i.name}} - {{i.artists[0].name}}</div>

  <div  class="title"><span class="iconfont">&#xe687;</span><i>歌手</i></div>
  <div class="details" @click='go_author'>{{data_search.result.artists[0].name}}</div>

  <div  class="title"><span class="iconfont">&#xe654;</span><i>专辑</i></div>
  <div class="details" v-for='i in data_search.result.albums'>{{i.name}} - {{i.artist.name}}</div>

  <div  class="title"><span class="iconfont">&#xe6be;</span><i>歌单</i></div>
  <div class="details" v-for='(i,index) in data_search.result.playlists' @click='go_playlist(index)'>{{i.name}}</div>

</div>
</template>

<script>
  // 导入请求模块
  import {
    getInputSearch
  } from '@/network/search.js'
  import {
    getArtistDetailed
  } from '@/network/author.js'
  import {
    getSongPlayUrl,
    getSongDetailed
  } from '@/network/songlist.js'
  // const value_word = this.wordvalue,
  export default {
    name: 'SearchAdvice',
    components: {},

    data() {
      return {
        status: false,
        data_search: {} //搜索建议的数据
      }
    },
    props: {
      wordvalue: {
        type: String,
        default: ''
      }
    },
    watch: {
      // 这里主要监听wordvalue这个数据的变化，一有变化就发送请求获取最新的推荐数据
      wordvalue: {
        handler(newValue, oldValue) {
          let new_word = newValue
            // console.log(newValue);
            //发送请求
          getInputSearch(new_word)
            .then(res => {
              // console.log(res);
              this.data_search = res.data
                // console.log(this.data_search);
              this.status = true;
            })
        },
        immediate: true, //关键
        deep: true,
      }
    },
    methods: {
      directly_search() {
        this.$emit('directly_search', this.wordvalue)
      },
      go_author() { //前往歌手详情页
        getArtistDetailed(this.data_search.result.artists[0].id)
          .then(res => {
            console.log(res);
            localStorage.setItem('author', JSON.stringify(res.data.data));
            this.$router.push('author')
          })
      },

      go_playlist(index) { //前往歌单
        // 这里把点击的当前数据传给本地管理
        console.log(this.data_search.result.playlists[index]);
        // console.log(this.data_search.result.playlists[index]);
        localStorage.setItem('StorePlayList', JSON.stringify(this.data_search.result.playlists[index]))
        this.$router.push('playlist')
      },

      go_play(index) { //去播放
        // 因为这里拿不到歌曲封面和其他数据，需要再请求一下
        let music = this.data_search.result.songs[index] //获取当前数据
        console.log(music);
        getSongDetailed(music.id) //请求详细信息
          .then(res => {
            console.log(music);
            music = res.data.songs[0]

            getSongPlayUrl(music.id) //用数据里的id发送请求
              .then(res => {
                console.log(res);
                music.url = res.data.data[0].url
                console.log(music);
                this.$store.commit('SetPlayList', music) //把点击的数据送去保存
                this.$store.commit('setAddPlayMusic', music) //播放当前点击歌曲
                this.$router.push('play') //跳转play页
              })
          })
      }
    }
  }
</script>

<style scoped>
  .advice {
    box-sizing: border-box;
    z-index: 99;
    position: fixed;
    width: 285px;
    margin-left: 45px;
    font-size: 12px;
    color: #333;
    padding-left: 15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, .2);
  }

  .directly {
    height: 35px;
    line-height: 35px;
  }

  .directly a i {
    color: #D43C33;
  }

  .title {
    margin-top: 6px;
    height: 30px;
    line-height: 30px;
    color: #9A9999;
  }

  .title i {
    padding-left: 5px;
  }

  .details {
    height: 30px;
    line-height: 30px;
  }
</style>
