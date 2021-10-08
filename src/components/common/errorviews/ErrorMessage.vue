<template>

  <div class="error_box" :style="{display: displayStsates}" ref="alertMsg">
    <div class="main_error">{{aletMsg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    data() {
      return {
        aletMsg: '', // 弹出框中的提示语
        displayStsates: 'none'
      }
    },

    methods: {
      alertDia(msg) {
        this.displayStsates = 'block'
        this.aletMsg = msg

        // 延迟2秒后消失 自己可以更改时间
        window.setTimeout(() => {
          this.displayStsates = 'none'
        }, 2000)
      },
    },
  }
</script>


<style scoped>
  .error_box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .main_error {
    transition: all 0.5;
    height: 30px;
    width: 60%;
    margin: 65% auto;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    color: #D43C33;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, .2);
  }
</style>
