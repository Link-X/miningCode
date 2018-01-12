<style lang='less' scoped>
.layout {
  // padding-top: 40px;
}

.layout-bar {
  height: .565rem;
}

.iconfont {
  font-size: 0.2rem;
}

.tabSpan {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  position: relative;
}

.errorC {
  position: absolute;
  top: -35px;
  right: -2px;
}
</style>
<template>
  <div class="layout">
    <mt-header :title="headerTitle">
      <div slot="left" v-show="isBack">
        <mt-button icon="back" @click="back">返回</mt-button>
      </div>
    </mt-header>
    <mt-tabbar :fixed='true' v-model="selected" class="layout-bar">
      <mt-tab-item v-for="(item, index) in data" :key="index" :id='item.router' :ref="item.router" @touchstart.native="touchDom(item.router, 'add')" @touchend.native="touchDom(item.router, 'rem')" @click.native="goClick">
        <i slot='icon' class="iconfont" :class="item.icon"></i>
        <div class="tabSpan">
          {{item.name}}
          <mt-badge size="small" class="errorC" type="error" v-if="item.isBadge">{{newsNumber}}</mt-badge>
        </div>
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import resource from '@/utils/resource.json'
import { addClass, remClass } from '@/utils/index'
import { mapGetters } from 'vuex'
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
          router: '/anomaly',
          isBadge: true
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
    },
    touchDom (dom, name) {
      if (name === 'add') {
        addClass(this.$refs[dom][0].$el, 'home-li_click')
      } else {
        remClass(this.$refs[dom][0].$el, 'home-li_click')
      }
    }
  },
  computed: {
    headerTitle () {
      return resource.header[this.$route.name]
    },
    isBack () {
      return this.headerTitle !== '首页' && this.headerTitle !== '异常消息' && this.headerTitle !== '我的'
    },
    ...mapGetters([
      'newsNumber'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.selected = to.path
    }
  }
}
</script>