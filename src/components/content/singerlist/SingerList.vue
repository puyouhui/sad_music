<template>
  <div class="singer_box">
    <div class="singer_list" v-for='(i,index) in Singer_list'>

      <div class="cover_img" @click='getDetailed(i.id)'>
        <div>
          <img :src="i.picUrl" alt="">
        </div>
      </div>

      <div class="name" @click='getDetailed(i.id)'>
        <p>{{i.name}}</p>
      </div>

      <div class="focus">
        <div>+ 关注</div>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    getArtistDetailed
  } from '@/network/author.js'

  export default {
    name: 'SingerList',
    props: {
      Singer_list: {
        type: Array,
        default: []
      }
    },
    methods: {
      getDetailed(id) {
        getArtistDetailed(id)
          .then(res => {
            console.log(res);
            this.$emit('click_name', res)
          })
      }
    },
  }
</script>

<style scoped>
  .singer_box {
    margin-top: 10px;
  }

  .singer_list {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50px;
  }

  .cover_img {
    flex: 1;
  }

  .cover_img div {
    position: relative;
    margin-top: 5px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    overflow: hidden;
  }

  .cover_img div img {
    height: 100%;
    position: absolute;
    /* top: 0; */
    left: -4px;
  }

  .name {
    box-sizing: border-box;
    flex: 5;
    font-size: 14px;
    line-height: 50px;
    color: #333;
    padding-left: 20px;
  }

  .focus {
    box-sizing: border-box;
    flex: 2;
    font-size: 14px;
    /* padding-left: 10px; */
    text-align: center;
  }

  .focus div {
    box-sizing: border-box;
    width: 55px;
    height: 22px;
    margin-top: 12px;
    margin-left: 10px;
    line-height: 22px;
    font-size: 12px;
    color: #C4483B;
    border-radius: 11px;
    border: 1px solid #C4483B;
  }
</style>
