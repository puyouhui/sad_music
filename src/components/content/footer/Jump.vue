<template>
  <div>
    <span @click='go_scarch'>试试搜索吧  ></span>
  </div>
</template>

<script>
  export default {
    name: 'Jump',
    methods: {
      go_scarch() {
        this.$router.replace('./search')
      }
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
  }

  span {
    display: inline-block;
    width: 120px;
    height: 26px;
    line-height: 27px;
    border: solid 1px #ccc;
    border-radius: 13px;
    color: #666;
  }
</style>
