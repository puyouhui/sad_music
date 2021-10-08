<template>
  <div>
    <!-- 背景图片 -->
    <div class="background">
      <img src="http://p4.music.126.net/TmcyI4fCIb96o4gVkWs6Zg==/109951163622414843.jpg" alt="">
    </div>
    <!-- 用户信息和签到 -->
    <div class="user_word">
      <!--头像 -->
      <span class="head_portrait">
        <img :src="user_data.avatarUrl" alt="">
      </span>
      <!-- 用户信息 -->
      <span class="user_name">
        <div>{{user_data.nickname}}</div>
        <span class="level">Lv.{{user_data.followeds}}</span>
        <span class="fans">粉丝:{{user_data.follows}}</span>
      </span>
      <!-- 签到 -->
      <span class="sig_in" @click='Sign'>
        <div v-show='signin==2'>已签到</div>
        <div v-show='signin==1'>签到</div>
      </span>
    </div>
  </div>
</template>

<script>
  import {
    getloginData
  } from '@/util/util.js'

  import {
    getSignin
  } from '@/network/profile.js'
  export default {
    name: 'UserWord',
    data() {
      return {
        signin: 1,
        user_data: {}
      }
    },
    created() {
      this.user_data = getloginData() //获取用户信息
    },
    methods: {
      Sign() { //签到功能
        if (this.signin == 1) {
          getSignin()
            .then(res => {
              if (res.data.code == 200) {
                this.signin = 2
              } else {
                this.signin = 1
              }
            })
            .catch(res => {
              this.signin = 2
            })
        }
      }
    }
  }
</script>


<style scoped>
  .background {
    /* filter: blur(3px); */
    height: 195px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    /* border-radius: 0 0 10% 10%; */
  }
  
  .background img {
    width: 100%;
  }
  
  .user_word {
    display: flex;
    position: relative;
  }
  
  .head_portrait {
    margin-top: 35px;
    margin-left: 30px;
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    background-color: mintcream;
  }
  
  .head_portrait img {
    width: 103%;
  }
  
  .user_name {
    flex: 4;
    font-size: 16px;
    display: inline-block;
    /* text-align: center; */
  }
  
  .user_name>div:nth-child(1) {
    margin-top: 40px;
    margin-left: 30px;
    color: mintcream;
  }
  
  .level {
    display: inline-block;
    padding: 0 6px 0 6px;
    /* width: 35px; */
    height: 16px;
    margin-left: 30px;
    margin-top: 10px;
    background-color: mintcream;
    color: #555;
    border-radius: 8px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  
  .fans {
    display: inline-block;
    height: 16px;
    padding: 0 6px 0 6px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: mintcream;
    color: #555;
    border-radius: 8px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  
  .sig_in {
    flex: 2;
    font-size: 14px;
    text-align: center;
    margin-top: 50px;
  }
  
  .sig_in>div {
    width: 80px;
    height: 30px;
    background-color: mintcream;
    line-height: 30px;
    border-radius: 15px;
    font-size: 12px;
    color: #C4483C;
  }
</style>