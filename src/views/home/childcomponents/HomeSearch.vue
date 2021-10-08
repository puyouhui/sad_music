<template>
  <div>
    <search>
      <search-item class="logo">
        <span><img src="@/assets/img/logo/bswk.png" alt=""></span>
      </search-item>
      <search-item class="main">
        <div @click='go_search'>
          <span class="iconfont" slot="icon">&#xe625;</span>
          <!-- <input type="text" name="" id="" value="薛之谦新歌"> -->
          <div class="input"><span>薛之谦新歌</span></div>
        </div>
      </search-item>
      <search-item class="edf">
        <span class="profile_img" @click='go_profile' v-if='isshow==1'><img :src="profile_img" alt=""></span>
        <span class="login_icon" @click='go_login' v-if='isshow==2'>登录</span>
      </search-item>
    </search>
    <collapse></collapse>
  </div>

</template>

<script>
  import Search from '@/components/common/search/Search'
  import SearchItem from '@/components/common/search/SearchItem'
  //下面这个组件解决顶部塌陷的
  import Collapse from '@/components/common/search/Collapse'
  export default {
    name: 'MainSearch',
    components: {
      Search,
      SearchItem,
      Collapse
    },
    data() {
      return {
        isshow: 2
      }
    },
    methods: {
      go_login() {
        this.$router.push('./login')
      },
      go_profile() {
        this.$router.push('./profile')
      },
      go_search() {
        this.$router.push('./search')
      }
    },
    computed: {
      profile_img() {
        return this.$store.state.login_state.profile.avatarUrl
      },
    },
    created() {
      if (this.$store.state.login_state) {
        this.isshow = 1
      } else {
        this.isshow = 2
      }
    }
  }
</script>

<style scoped>
  .logo,
  .edf {
    flex: 1;
  }

  .logo img {
    width: 60%;
    margin-top: 12px;
  }

  .main {
    position: relative;
    display: block;
    flex: 6;
  }

  .main div span {
    position: absolute;
    left: 15px;
    top: 1px;
    color: #333;
  }

  .main .input {
    display: inline-block;
    box-sizing: border-box;
    width: 95%;
    height: 25px;
    border-radius: 12px;
    outline: none;
    margin-top: 13px;
    padding-left: 30px;
    font-size: 12px;
    font-weight: 400;
    background-color: #fff;
  }

  .main .input span {
    margin-left: 22px;
    color: #666;
  }

  .edf .iconfont {
    font-size: 24px;
  }

  .profile_img {
    margin-top: 9px;
    margin-left: 7px;
    display: block;
    width: 26px;
    height: 26px;
    /* overflow: hidden; */
    /* background-color: aqua; */
  }

  .login_icon {
    font-size: 12px;
  }

  .profile_img img {
    width: 100%;
    border-radius: 13px;
    /* height: 100%; */
  }
</style>
