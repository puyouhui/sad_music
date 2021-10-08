<template>
  <div class="ranking_title">
    {{ranking_title}}
  </div>
</template>

<script>
  export default {
    name: 'RanKingTitle',
    props: {
      ranking_title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style scoped>
  .ranking_title {
    text-align: left;
    font-size: 14px;
    padding-left: 12px;
    color: #333;
  }
</style>
