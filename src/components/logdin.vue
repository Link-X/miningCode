<template>
  <div class="home-global_login">
    <mt-spinner v-show="!logdin" color='#26a2ff' type="triple-bounce"></mt-spinner>
    <mt-spinner v-show="logdin" color='#26a2ff' :type="3"></mt-spinner>
  </div>
</template>

<script>
export default {
  props: {
    logdin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='less' scoped>
.home-global_login {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  top: -40px;
  margin: 0 auto;
}
</style>
