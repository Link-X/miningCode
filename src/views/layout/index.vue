<style lang='less' scoped>
.layout {
  // padding-top: 40px;
}

.layout-bar {
  height: .565rem;
}
</style>

<template>
  <div class="layout">
    <mt-header :title="headerTitle">
      <div slot="left" v-show="isBack">
        <mt-button icon="back" @click="back">返回</mt-button>
      </div>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar :fixed='true' v-model="selected" class="layout-bar">
      <mt-tab-item v-for="(item, index) in data" :key="index" :id='item.router' @click.native="goClick">
        <i slot='icon' class="iconfont" :class="item.icon"></i>{{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import resource from '@/utils/resource.json'
export default {
  name: 'layout',
  data () {
    return {
      selected: '',
      data: [
        {
          name: '首页',
          icon: 'icon-shouye',
          router: '/home'
        },
        {
          name: '异常消息',
          icon: 'icon-xiaoxi',
          router: '/anomaly'
        },
        {
          name: '我的',
          icon: 'icon-home',
          router: '/account'
        }
      ]
    }
  },
  created () {
    this.selected = this.$route.path
  },
  methods: {
    goClick () {
      this.$router.push({
        path: this.selected
      })
    },
    back () {
      this.$router.back()
    }
  },
  computed: {
    headerTitle () {
      return resource.header[this.$route.name]
    },
    isBack () {
      return this.headerTitle !== '首页' && this.headerTitle !== '异常消息' && this.headerTitle !== '我的'
    }
  },
  watch: {
    '$route' (to, from) {
      this.selected = to.path
    }
  }
}
</script>