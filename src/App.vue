<template>
  <div id="app">
    <transition :name="className">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      className: 'all'
    }
  }
  // watch: {
  //   '$route' (to, from) {
  //     console.log(to)
  //     console.log(from)
  //   }
  // }
}
</script>
<style lang='less'>
@import 'http://at.alicdn.com/t/font_534889_1zkg5j3u8mvaemi.css';
#app {
  width: 100%;
  height: 100%;
}

.all-enter-active {
  transition: all 1.2s ease;
}

.all-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}

.all-enter,
.all-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
