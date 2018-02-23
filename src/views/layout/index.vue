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
        <mt-button icon="back" @click="back" v-show="!serch">返回</mt-button>
        <mt-button icon="back" @click="back2" v-show="serch">返回</mt-button>
      </div>
      <mt-button v-show="isShou" @click="search" icon="search" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar :fixed='true' v-show="!isBack" v-model="selected" class="layout-bar">
      <mt-tab-item v-for="(item, index) in data" :key="index" :id='item.router' :ref="item.router" @touchstart.native="touchDom(item.router, 'add')" @touchend.native="touchDom(item.router, 'rem')" @click.native="goClick">
        <i slot='icon' class="iconfont" :class="item.icon"></i>
        <div class="tabSpan">
          {{item.name}}
          <mt-badge size="small" class="errorC" type="error" v-if="item.isBadge && newsNumber">{{newsNumber}}</mt-badge>
        </div>
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import resource from '@/utils/resource.json'
import { addClass, remClass } from '@/utils/index'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'layout',
  data () {
    return {
      searchData: '',
      result: [{
        title: '1',
        value: '2'
      }],
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
    this.getNunber()
    this.selected = this.$route.path
  },
  mounted () {
    setInterval(() => {
      this.getNunber()
    }, 70000)
  },
  methods: {
    getNunber () {
      let num = 0
      this.getList().then(res => {
        if (res.code === '200') {
          let hasNumber = 0
          res.data.forEach((v) => {
            hasNumber += +v.hash
            if (+v.cpu_temp > 80 || +v.hash < 18) {
              num++
            }
          })
          this.SET_LISTNUMBER(res.data.length)
          this.SET_HASHNUMBER(hasNumber)
          this.SET_NEWSNUMBER(num)
        }
      })
    },
    goClick () {
      this.$router.push({
        path: this.selected
      })
    },
    back () {
      this.SET_SERCH(false)
      this.$router.back()
    },
    back2 () {
      this.SET_SERCH(false)
    },
    search () {
      this.SET_SERCH(true)
    },
    touchDom (dom, name) {
      if (name === 'add') {
        addClass(this.$refs[dom][0].$el, 'home-li_click')
      } else {
        remClass(this.$refs[dom][0].$el, 'home-li_click')
      }
    },
    ...mapActions([
      'getList'
    ]),
    ...mapMutations([
      'SET_SERCH',
      'SET_NEWSNUMBER',
      'SET_LISTNUMBER',
      'SET_HASHNUMBER'
    ])
  },
  computed: {
    headerTitle () {
      return resource.header[this.$route.name]
    },
    isBack () {
      const data = ['首页', '异常消息', '我的']
      data.forEach(v => {
        if (this.headerTitle !== v) {
          return true
        }
        return false
      })
    },
    isShou () {
      return this.headerTitle === '矿机筛选' && !this.serch
    },
    ...mapGetters([
      'newsNumber',
      'serch'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.selected = to.path
    }
  }
}
</script>