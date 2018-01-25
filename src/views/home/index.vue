<style lang='less' scoped>
.home-lun {
  height: 1.5rem;
}

.home-lun_img {
  width: 100%;
  height: 100%;
}

.home-statistics {
  height: .35rem;
  background-color: #EFEFEF;
  display: flex;
  justify-content: space-between;
  padding: 0 .15rem;
  align-items: center;
  border-bottom: 1px solid #DDD;
}

.home-global_header {
  height: .35rem;
  background-color: #EFEFEF;
  padding: 0 .15rem;
  line-height: .3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .global-header_btn {
    height: .25rem;
  }
}

.home-scroll {
  position: fixed;
  top: 2.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all .2s;
  overflow: hidden;
}

.home-global_ul {
  position: relative;
  padding-bottom: 1rem;
}

.home-global_li {
  padding: .14rem .15rem;
  border-bottom: 1px solid #eee;
  position: relative; // overflow: hidden;
  background-color: #fff;
  &:last-child {
    border: none;
  }
}

.li-left_span {
  display: block;
  margin-bottom: .2rem;
  font-size: .15rem;
  font-weight: bold;
}

.li-left_bottom {
  // display: flex;
  p {
    float: right;
    // margin-right: .3rem;
  }
}

.li-right_icon {
  position: absolute;
  top: .17rem;
  right: .05rem;
  bottom: 0;
  padding: 0.1rem 0.13rem;
  i {
    font-size: .2rem;
  }
}

.li-left_btn {
  margin-left: 0.08rem;
  padding: 0.08rem 0.1rem;
  border: 1px solid #eee;
  color: #333;
  border-radius: 5px;
  max-width: 188px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.home-null {
  text-align: center;
  height: 0.5rem;
  line-height: 1rem;
}

.bold {
  font-weight: bold;
  font-size: 0.15rem;
  margin: 0 0.05rem;
}
</style>
<style lang='less'>
.home {
  .picker-item {
    text-align: left;
  }
  .mint-popup {
    width: 75%;
  }
  .picker-selected {
    color: #26a2ff !important;
  }
}
</style>

<template>
  <div class="home">
    <mt-swipe :auto="4000" class="home-lun">
      <mt-swipe-item>
        <img class="home-lun_img" src="../../assets/img/longbo.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="home-lun_img" src="../../assets/img/lunbo2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="home-lun_img" src="../../assets/img/kuan.png" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="home-center">
      <div class="home-statistics">
        <div>矿机台数
          <span class="bold">{{list.length}}</span>台</div>
        <div>
          gpu数
          <span class="bold">{{gpuNub}}</span>个
        </div>
      </div>
      <div class="home-global">
        <div class="home-global_header">
          全局统计
          <mt-button class="global-header_btn" size='small' type='primary' @click="screenList">筛选</mt-button>
        </div>
        <Scroll :data='list' @scroll='scroll' @scrollEnd='scrollEnd' ref="homeScr" class="home-scroll">
          <ul class="home-global_ul" @touchstart="touchDom($event, 'add')" @touchend="touchDom($event, 'rem')">
            <long-din :logdin='logdin'></long-din>
            <li class="home-global_li" v-for="(item, index) in list" :key="item.id">
              <div class="global-li_left">
                <span class="li-left_span">{{item.hostname}}</span>
                <div class="li-left_bottom">
                  <span>gpu数{{item.gpus}}</span>
                  <!-- <span class="li-left_btn" @click="clickMining(item.id, index)">星火</span> -->
                   <span class="li-left_btn">{{item.proxypool1}}</span> 
                  <p>{{item.date}}</p>
                </div>
              </div>
              <div class="li-right_icon" @click="goPage(item.id)">
                <i class="iconfont icon-jiantouyou"></i>
              </div>
            </li>
          </ul>
        </Scroll>
        <div class="home-null" v-if="!list.length">暂无矿机</div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="center" popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import LongDin from '@/components/logdin.vue'
import { mapActions } from 'vuex'
import { touchDoms, getDate } from '@/utils/index'
export default {
  data () {
    return {
      id: '',
      index: 0,
      logdin: false,
      popupVisible: false,
      gpuNub: 0,
      scollY: 0,
      slots: [
        {
          flex: 1,
          values: ['双优', '鱼池', '星火[广州]', '星火[华北]', '星火[华南]', '鱼池2'],
          className: 'slot1',
          textAlign: 'right'
        }
      ],
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.gpuNub = 0
      this.getList().then(data => {
        this.scollY = 0
        let code = +data.code
        if (code === 200) {
          this.list = data.data.map(v => {
            v.date = getDate()
            v.gpus = +v.gpus
            this.gpuNub += v.gpus
            return v
          })
        }
      })
    },
    screenList () {
      this.$router.push({
        path: '/miningList'
      })
    },
    goPage (id) {
      this.$router.push({
        path: '/mineDetails',
        query: { id: id }
      })
    },
    clickMining (id, index) {
      this.id = id
      this.index = index
      this.popupVisible = true
    },
    onValuesChange (picker, value) {
      // if (this.index || this.index === 0) {
      //   this.list[this.index].mine = value[0]
      // }
    },
    touchDom (dom, name) {
      touchDoms(dom, name)
    },
    scroll (pos) {
      this.logdin = false
      this.scollY = pos.y
    },
    scrollEnd (pos) {
      if (this.scollY > 0) {
        this.logdin = true
        this.getData()
      }
    },
    ...mapActions([
      'getList'
    ])
  },
  components: {
    Scroll,
    LongDin
  }
}
</script>