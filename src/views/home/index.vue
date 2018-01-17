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
    margin-right: .3rem;
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
        <img class="home-lun_img" src="../../assets/img/kuan.jpg" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="home-center">
      <div class="home-statistics">
        <div>矿机台数
          <span class="bold">{{2}}</span>台</div>
        <div>
          gpu数
          <span class="bold">{{3}}</span>个
        </div>
      </div>
      <div class="home-global">
        <div class="home-global_header">
          全局统计
          <mt-button class="global-header_btn" size='small' type='primary' @click="screenList">筛选</mt-button>
        </div>
        <Scroll :data='list' class="home-scroll">
          <ul class="home-global_ul" @touchstart="touchDom($event, 'add')" @touchend="touchDom($event, 'rem')">
            <li class="home-global_li" v-for="(item, index) in list" :key="item.id">
              <div class="global-li_left">
                <span class="li-left_span">{{item.name}}</span>
                <div class="li-left_bottom">
                  <span>gpu数{{item.gpu}}</span>
                  <span class="li-left_btn" @click="clickMining(item.id, index)">{{item.mine}}</span>
                  <p>{{item.date}}</p>
                </div>
              </div>
              <div class="li-right_icon" @click="goPage(item.id)">
                <i class="iconfont icon-jiantouyou"></i>
              </div>
            </li>
          </ul>
        </Scroll>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="center" popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import { mapActions } from 'vuex'
import { touchDoms } from '@/utils/index'
export default {
  data () {
    return {
      id: '',
      index: null,
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: ['双优', '鱼池', '星火[广州]', '星火[华北]', '星火[华南]', '鱼池2'],
          className: 'slot1',
          textAlign: 'right'
        }
      ],
      list: [
        {
          name: '矿机1',
          gpu: 2,
          mine: '星火[广州]',
          date: '2018.10.01',
          id: '12323'
        },
        {
          name: '矿机2',
          gpu: 2,
          mine: '双优',
          date: '2018.10.01',
          id: '123323'
        },
        {
          name: '矿机3',
          gpu: 2,
          mine: '星火',
          date: '2018.10.01',
          id: '121233'
        },
        {
          name: '矿机4',
          gpu: 2,
          mine: '星火[华北]',
          date: '2018.10.01',
          id: '12123323'
        },
        {
          name: '矿机1',
          gpu: 2,
          mine: '双优',
          date: '2018.10.01',
          id: '12121sf32fs3'
        },
        {
          name: '矿机1',
          gpu: 2,
          mine: '星火[华北]',
          date: '2018.10.01',
          id: '12123df232fs3'
        },
        {
          name: '矿机1',
          gpu: 2,
          mine: '星火[华南]',
          date: '2018.10.01',
          id: '12123asdf232fs3'
        }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
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
      if (this.index || this.index === 0) {
        this.list[this.index].mine = value[0]
      }
    },
    touchDom (dom, name) {
      touchDoms(dom, name)
    },
    ...mapActions([
      'getList'
    ])
  },
  components: {
    Scroll
  }
}
</script>