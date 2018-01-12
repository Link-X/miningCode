
<style lang='less' scoped>
.home {
  width: 100%;
}

.hom-ul {
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
</style>

<template>
  <div class="home">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部矿机</mt-tab-item>
      <mt-tab-item id="2">掉线矿机</mt-tab-item>
      <mt-tab-item id="3">异常矿机</mt-tab-item>
    </mt-navbar>
    <Scroll :data='list' class="home-scroll">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="hom-ul">
            <li 
            v-for="(item, index) in list" 
            :key="item.card" 
            class="home-li" 
            :ref='item.card'
            @touchstart="touchDom(item.card, 'add')" 
            @touchend="touchDom(item.card, 'rem')">
              <div class="home-img">
                <img src='../../assets/img/kuan.jpg' />
              </div>
              <div class="home-text">
                <h3 class="list-title">
                  {{item.title}}
                  <mt-button class="list-header_btn" size='small' type='primary' @click="screenList(item.id)">查看详情</mt-button>
                </h3>
                <div class="home-text_bottom">
                  <div>
                    <span>矿池:{{item.hashrate}}</span>
                    <span>显卡:{{item.card}}个</span>
                  </div>
                  <div>{{item.date}}</div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(n, index) in 5" :key="index" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="(n, index) in 7" :key="index" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import { addClass, remClass } from '@/utils/index'
export default {
  data () {
    return {
      selected: '1',
      list: [
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '2',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '323',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '4',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '5',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '8',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '326',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '77',
          date: '2018.1.1',
          id: '123423'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '1号矿机',
          hashrate: '鱼池子',
          card: '33',
          date: '2018.1.1',
          id: '123423'
        }
      ]
    }
  },
  components: {
    Scroll
  },
  methods: {
    screenList (id) {
      this.$router.push({
        path: '/mineDetails',
        query: { id: id }
      })
    },
    switchover (data) {
      this.active = data
    },
    touchDom (dom, name) {
      if (name === 'add') {
        addClass(this.$refs[dom][0], 'home-li_click')
      } else {
        remClass(this.$refs[dom][0], 'home-li_click')
      }
    }
  }
}
</script>
