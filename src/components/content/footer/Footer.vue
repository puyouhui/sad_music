<template>
  <div>
    <div class="footer">
      <div>
        <i>由  </i>
        <a href="https://binaryify.github.io/NeteaseCloudMusicApi/">NeteaseCloudMusicApi</a>
        <i>  提供接口</i>
      </div>
      <div>
        <span>
          <a href="#">联系作者</a>
        </span> |
        <span>
          <a href="#">github地址</a>
        </span> |
        <span>
          <a href="https://cn.vuejs.org/">vue.js</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer {
    border-top: 1px solid rgb(238, 238, 238);
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 12px;
    color: #666 !important;
  }
  
  .footer a {
    color: #666;
    font-size: 12px;
  }
</style>