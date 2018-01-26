
<style lang='less' scoped>
  .article {
    text-align: center;
  }
</style>
<template>
  <div class="article">
    <span>文章{{index}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  created () {
    this.index = this.$route.query.id
  }
}
</script>
