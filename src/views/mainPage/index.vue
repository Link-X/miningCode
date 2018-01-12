
<template>
  <div class="main-page">
    <component :is="mainView"></component>
  </div>
</template>

<script>
import layout from '@/views/layout'
import Login from '@/views/login'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'main-page',
  components: {
    layout, Login
  },
  created () {
    this.GET_TOKEN_STORAGE()
  },
  methods: {
    ...mapMutations([
      'GET_TOKEN_STORAGE'
    ])
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ]),
    mainView () {
      return this.isLogin ? 'layout' : 'Login'
    }
  }
}
</script>
<style lang="less" scoped>
.main-page {
  width: 100%;
  height: 100%;
}
</style>