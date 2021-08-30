<template>
  <div class="tab-bar-item" @click='itemclick'>
    <div :style='activestyle'><slot name="item-icon" ></slot></div>
    <div :style='activestyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false,
        // path: '/home',
      }
    },
    computed: {
      isActive() {
        //判断是否活跃
        return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle() {
        //根据传过来的参数修改颜色
        return this.isActive ? {
          color: this.activecolor
        } : {}
      }
    },
    methods: {
      // 实现跳转
      itemclick() {
        this.$router.replace(this.path)
        console.log(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    margin-top: 5px;
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    color: #333;
  }
  
  .tab-bar-item span {
    font-size: 20px;
    font-weight: 300;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  
  .tab-bar-item div {
    margin-top: 2px;
  }
</style>