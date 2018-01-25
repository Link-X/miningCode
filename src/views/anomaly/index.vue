
<style lang='less' scoped>
.home {
  width: 100%;
}

.hom-ul {
  padding-bottom: .75rem;
}

.home-scroll {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all .3s;
  overflow: hidden;
}

.home-li {
  display: flex;
  padding: .1rem .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border: none;
  }
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
  flex-wrap: wrap;
  padding: .1rem 0;
  align-content: space-between;
  h3 {
    width: 100%;
  }
}

.home-text_bottom {
  span {
    margin-right: 15px;
  }
}
</style>

<template>
  <div class="home">
    <Scroll :data='list' @scroll='scroll' @scrollEnd='scrollEnd' class="home-scroll">
      <ul class="hom-ul" @touchstart="touchDom($event, 'add')" @touchend="touchDom($event, 'rem')">
        <long-din :logdin='logdin'></long-din>
        <router-link tag='li' 
        :to="{path: '/anomalyDetals', 
        query: {id: item.id}}" 
        v-for="(item, index) in list" 
        :key="item.id" class="home-li">
          <div class="home-img">
            <img src='../../assets/img/abnormalp.png' />
          </div>
          <div class="home-text">
            <h3>{{item.hostname}}</h3>
            <div class="home-text_bottom">
              <span>温度:{{+item.cpu_temp}}</span>
              <span>算力:{{+item.hash}}</span>
              <span>显卡:{{item.gpus}}个</span>
            </div>
          </div>
        </router-link>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import LongDin from '@/components/logdin.vue'
import { mapActions, mapMutations } from 'vuex'
import { touchDoms } from '@/utils/index'
export default {
  data () {
    return {
      logdin: false,
      scollY: 0,
      list: []
    }
  },
  components: {
    Scroll,
    LongDin
  },
  created () {
    this.getData()
  },
  methods: {
    getAnomaly (id) {
      this.$router.push({
        path: '/anomalyDetals',
        query: { id: id }
      })
    },
    touchDom (dom, name) {
      touchDoms(dom, name)
    },
    getData () {
      this.getList({type: 2}).then(res => {
        if (res.code === '200') {
          this.SET_NEWSNUMBER('')
          this.list = res.data
          // res.data.forEach((v) => {
          //   if (+v.cpu_temp > 80 || +v.hash < 18) {
          //     this.list.push(v)
          //   }
          // })
        }
      })
    },
    scroll (pos) {
      this.logdin = false
      this.scollY = pos.y
    },
    scrollEnd (pos) {
      if (this.scollY > 0) {
        this.logdin = true
      }
    },
    ...mapMutations([
      'SET_NEWSNUMBER'
    ]),
    ...mapActions([
      'getList'
    ])
  }
}
</script>
