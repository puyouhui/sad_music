<template>
<div>
  <slot></slot><slot name='icon'></slot>
</div>
</template>

<script>
  export default {
    name: 'SearchItem',
    components: {}
  }
</script>

<style scoped>
  /* .search-logo {
    flex: 1;
  }

  .search-main {
    flex: 6;
  }

  .search-main input {
    width: 96%;
    height: 26px;
    border-radius: 13px;
  }

  .search-profile {
    flex: 1;
  }

  .search-profile span {
    font-size: 20px;
  } */
</style>
