
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
  padding: .05rem 0;
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
      <ul class="hom-ul">
        <li v-for="(item, index) in list" :key="item.card" class="home-li">
          <div class="home-img">
            <img src='../../assets/img/kuan.jpg' />
          </div>
          <div class="home-text">
            <h3>{{item.title}}</h3>
            <div class="home-text_bottom">
              <span>故障详情</span>
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
export default {
  data () {
    return {
      list: [
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障1',
          card: '2',
          date: '2018.01.03  15:00'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障13',
          date: '2018.01.03  15:00',
          card: '323'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障3',
          date: '2018.01.03  15:00',
          card: '4'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障4',
          date: '2018.01.03  15:00',
          card: '5'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障6',
          date: '2018.01.03  15:00',
          card: '8'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障4',
          date: '2018.01.03  15:00',
          card: '326'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障8',
          date: '2018.01.03  15:00',
          card: '77'
        },
        {
          img: '../../assets/img/kuan.jpg',
          title: '故障9',
          date: '2018.01.03  15:00',
          card: '33'
        }
      ]
    }
  },
  components: {
    Scroll
  }
}
</script>
