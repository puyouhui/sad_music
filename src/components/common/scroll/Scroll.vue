<!-- 使用说明，使用的参数多，记不住 -->

<!-- 一、关于插槽 -->
<!-- 1. main_body-主体的内容传入这个具名插槽-->

<!-- 二、关于传入的数据 -->
<!-- 注意：传入必须是一个对象名为sliding_data ，其中包含下面属性-->
<!-- content_height -盒子高度，默认85vh，根据需要的高度定义-->


<template>
  <div >
    <!-- 内容区 -->
    <div class="wrapper" ref="wrapper" :style='height'>
      <div class="content" ref="scroll" :style='bgc'>
        <!-- 这里使用个插槽放内容 -->
        <slot name="main_body"></slot>
      </div>
    </div>
  </div>


</template>

</div>
</template>


<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'Scroll',
    components: {},
    data() {
      return {
        scrollY_value: 0, //滚动的值
        activeitem: 0
      }
    },
    props: {
      scroll_data: {
        type: Object,
        default: {}
      }

    },
    mounted() {
      // scroll实例
      // if (!this.$refs.wrapper) {
      //   return
      // }
      this.$nextTick(() => {
        // 使用better scroll 插件
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3,
          click: true,
          scrollY: true,
          mouseWheel: true,
          observeDOM: true,
          // pullDownRefresh: {
          // threshold: 30, // 下拉距离超过30px触发pullingDown事件
          // stop: 20 // 回弹停留在距离顶部20px的位置
          // }
        })

        // 如果需要下拉刷新
        // this.scroll.on('pullingDown', () => {
        //   console.log(111);
        //   this.scroll.finishPullDown();
        // })

        //如果需要位置
        // 这里需要监听位置，位置大于某个值就把activeitem 这个值改变
        // this.scroll.on('scroll', (position) => {
        //   console.log(position.y);
        //   console.log(this.scroll);
        //   this.scrollY_value = position.y
        // })
      })
    },

    methods: {

    },

    watch: {
      // 这里监听scrollY_value ，变化了就改变样式
      // scrollY_value() {
      //   let value = this.scrollY_value
      //   if (value >= -this.sliding_data.jump_heigth[0]) {
      //     this.activeitem = 0
      //   }
      //   if (value <= -this.sliding_data.jump_heigth[1]) {
      //     this.activeitem = 1
      //   }
      //   if (value <= -this.sliding_data.jump_heigth[2]) {
      //     this.activeitem = 2
      //   }
      //   if (value <= -this.sliding_data.jump_heigth[3]) {
      //     this.activeitem = 3
      //   }
      //   if (value <= -this.sliding_data.jump_heigth[4]) {
      //     this.activeitem = 4
      //   }
      // }
    },

    computed: {
      // 这里计算传进来的值，并计算样式
      bgc() {
        return 'backgroundColor:' + this.scroll_data.bgc;
      },
      height() {
        return 'height:' + this.scroll_data.content_height + 'vh'
      }
    },
  }
</script>


<style scoped>
  .title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    font-size: 12px;
    text-align: center;
    /* background-color: #C4483C; */
    color: rgba(255, 255, 255, .6);
  }
  
  .title span {
    flex: 1;
  }
  
  .active_item {
    color: rgba(255, 255, 255, 1);
    border-bottom: 3px solid rgba(255, 255, 255, );
  }
  
  .wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #F9F9F9;
  }
</style>