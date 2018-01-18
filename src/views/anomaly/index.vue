
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
    <Scroll :data='list' class="home-scroll">
      <ul class="hom-ul" 
      @touchstart="touchDom($event, 'add')" 
      @touchend="touchDom($event, 'rem')">
        <router-link 
        tag='li' 
        :to="{path: '/anomalyDetals', query: {id: item.card}}" 
        v-for="(item, index) in list" 
        :key="item.card" 
        class="home-li">
          <div class="home-img">
            <img src='../../assets/img/kuan.jpg' />
          </div>
          <div class="home-text">
            <h3>{{item.title}}</h3>
            <div class="home-text_bottom">
              <span>温度:{{item.temperature}}</span>
              <span>算力:{{item.hashrate}}</span>
              <span>显卡:{{item.card}}个</span>
            </div>
          </div>
        </router-link>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import { touchDoms } from '@/utils/index'
export default {
  data () {
    return {
      list: [
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '2'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '323'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '4'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '5'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '8'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '326'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '77'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          temperature: '50',
          hashrate: '58.65',
          card: '33'
        }
      ]
    }
  },
  components: {
    Scroll
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
    }
  }
}
</script>
