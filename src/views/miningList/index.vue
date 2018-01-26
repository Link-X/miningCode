
<style lang='less' scoped>
.home {
  width: 100%;
}

.search-ul {
  margin-top: 20px;
  padding-bottom: .75rem;
}
.home-scroll {
  position: absolute;
  top: 95px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all .3s;
  overflow: hidden;
}
.home-scroll2 {
  top: 98px;
}
.home-li {
  display: flex;
  padding: .1rem .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.home-img {
  width: .75rem;
  height: .75rem;
  margin-right: .15rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.home-text {
  display: flex;
  width: 77%;
  flex-wrap: wrap;
  padding: .05rem 0;
  align-content: space-between;
  h3 {
    width: 100%;
  }
}

.list-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-text_bottom {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 5px;
  }
}

.list-header_btn {
  height: .25rem;
}

.mining-list_refresh {
  position: fixed;
  bottom: .7rem;
  right: .25rem;
  padding: .09rem;
  i {
    color: #afa489;
    font-weight: bold;
    font-size: .25rem;
  }
}

.xuan {
  animation: myfirst 1s infinite;
}

@keyframes myfirst {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
.search {
      position: absolute;
    width: 100%;
    top: 40px;
}
</style>

<template>
  <div class="home">
    <mt-navbar v-model="selected" @click.native="select">
      <mt-tab-item id="0">全部矿机</mt-tab-item>
      <mt-tab-item id="1">掉线矿机</mt-tab-item>
      <mt-tab-item id="2">异常矿机</mt-tab-item>
    </mt-navbar>
    <Scroll :data='list' class="home-scroll" v-show="!serch">
      <MiningList :list='list' @screenList='screenList'></MiningList>
    </Scroll>
    <div 
    class="mining-list_refresh" 
    :class="{'xuan': upajx === true}"
    @click="upData">
      <i class="iconfont icon-shuaxin"></i>
    </div>
    <mt-search class="search" v-model="searchValue" v-show="serch">
      <mt-cell>
        <MiningList 
        :list='searchData' 
        @screenList='screenList' 
        :isSearch='true'></MiningList>
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import MiningList from '@/views/miningList/list'
import { getDate } from '@/utils/index'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      selected: '0',
      list: [],
      searchData: [],
      searchValue: '',
      upajx: false
    }
  },
  components: {
    Scroll, MiningList
  },
  created () {
    this.getData()
  },
  mounted () {
    this.$emit('serc', () => {
      console.log(2)
    })
  },
  methods: {
    getData () {
      this.upajx = true
      let data = this.setSelectData()
      this.getList(data).then(data => {
        let code = +data.code
        setTimeout(() => {
          this.upajx = false
        }, 1000)
        if (code === 200) {
          this.list = data.data.map(v => {
            v.date = getDate()
            v.gpus = +v.gpus
            return v
          })
        }
      })
    },
    getSearch () {
      this.getList({
        type: 3,
        value: this.searchValue
      }).then(res => {
        if (res.code === '200') {
          this.searchData = res.data
        }
      })
    },
    select () {
      this.getData()
    },
    screenList (id) {
      this.$router.push({
        path: '/mineDetails',
        query: { id: id }
      })
    },
    switchover (data) {
      this.active = data
    },
    setSelectData () {
      return {
        type: this.selected !== '0' ? this.selected : undefined
      }
    },
    upData () {
      this.getData()
    },
    ...mapActions([
      'getList'
    ]),
    ...mapMutations([
      'SET_SERCH'
    ])
  },
  watch: {
    searchValue () {
      if (this.searchValue === '') {
        this.SET_SERCH(false)
      } else {
        this.getSearch()
      }
    }
  },
  computed: {
    ...mapGetters([
      'serch'
    ])
  }
}
</script>
