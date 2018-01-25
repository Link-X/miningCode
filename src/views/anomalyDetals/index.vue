
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
  background-color: #fff;
  padding: .1rem .15rem;
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
  flex-grow: 1;
  padding: .1rem 0;
  align-content: space-between;
  h3 {
    width: 100%;
  }
}

.home-text_bottom {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
</style>

<template>
  <div class="home">
    <Scroll :data='list' class="home-scroll">
      <ul 
      class="hom-ul"  
      @touchstart="touchDom($event, 'add')" 
      @touchend="touchDom($event, 'rem')">
        <li 
          v-for="(item, index) in list" 
          :key="item.card" 
          class="home-li" 
          @touchstart="touchDom(item.card, 'add')" 
          @touchend="touchDom(item.card, 'rem')">
          <div class="home-img">
            <img src='../../assets/img/minDetails.jpg' />
          </div>
          <div class="home-text">
            <h3>故障{{index + 1}}</h3>
            <div class="home-text_bottom">
              <span>{{item}}</span>
              <span class="text-bottom_right">{{item.date}}</span>
            </div>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import { mapActions } from 'vuex'
import { touchDoms } from '@/utils/index'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    touchDom (dom, name) {
      touchDoms(dom, name)
    },
    getData () {
      let data = {
        id: this.$route.query.id
      }
      this.getDetail(data).then(res => {
        if (res.code === 200) {
          if (+res.data.cpu_temp > 80) {
            this.list.push('cpu温度异常')
          }
          if (+res.data.hash < 18) {
            this.list.push('算力异常')
          }
          console.log(this.list)
        }
      })
    },
    ...mapActions([
      'getDetail'
    ])
  },
  components: {
    Scroll
  }
}
</script>
