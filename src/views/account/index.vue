<style lang='less' scoped>
.account-top {
  // padding: .2rem 0;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF;
  background: url('../../assets/img/kuan.png') no-repeat center 50%;
  background-color: yellow;
  background-size: cover;
  background-size: 100%;
  margin-bottom: 10px;
  -webkit-filter: blur(5px);
  /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.account-img {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 10px;
  position: absolute;
  top: 0.75rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.account-center {
  height: 1.1rem;
  background-color: #fff;
  margin-bottom: 0.05rem;
}

.account-center_ul {
  display: flex;
  li {
    display: flex;
    width: 50%;
    justify-content: center;
    flex-wrap: wrap;
    padding: .1rem 0;
    p {
      width: 100%; 
      font-size: .18rem;
      text-align: center;
    }
    span {
      display: flex;
      justify-content: center;
      font-weight: bold;
      font-size: .45rem;
      color: #0d75e2;
      text-align: center;
    }
  }
}

.account-sisint {
  padding: 0.08rem 0.3rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #EFEFEF;
  span {
    display: flex;
    width: .28rem;
    height: .28rem;
    line-height: .29rem;
    background-color: #5Ca5DB;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  i {
    font-size: .18rem;
    color: #fff;
  }
  p {
    border-radius: 3px;
    height: .15rem;
    line-height: .165rem;
    background-color: #5Ca5DB;
    padding: 0.05rem;
    color: #fff;
    margin-left: 0.1rem;
  }
}

.account-color2 {
  background-color: #0E67B7!important;
}

.account-color {
  background-color: #7DD53F!important;
}

.account-sisint2 {
  i {
    font-size: .16rem;
  }
}
</style>

<template>
  <div class="account">
    <div class="account-top">
    </div>
    <div class="account-img">
      <img src="../../assets/img/toxian.jpg"  v-if="!imgSrc" />
      <img v-else :src="'http://47.91.249.184/Public/Upload/' + imgSrc" alt="" />
    </div>
    <div class="account-center">
      <ul class="account-center_ul">
        <li>
          <p>我的矿机数量</p>
           <span>{{listNumber}}</span> 
        </li>
        <li>
          <p>矿机总算力</p>
           <span>{{hashNumber}}</span> 
        </li>
      </ul>
    </div>
    <ul @touchstart="touchDom($event, 'add')" @touchend="touchDom($event, 'rem')">
      <router-link tag='li' :to="{path: '/anomaly'}" class="account-sisint">
        <span>
          <i class="iconfont icon-weibiaoti3"></i>
        </span>
        <p class="account-p">我的消息</p>
      </router-link>
      <router-link tag='li' :to="{path: '/miningList'}" class="account-sisint account-sisint2">
        <span class="account-color">
          <i class="iconfont icon-wodekuangji"></i>
        </span>
        <p class="account-p account-color">我的矿机</p>
      </router-link>
      <router-link tag='li' :to="{path: '/setting'}" class="account-sisint account-sisint3">
        <span class="account-color2">
          <i class="iconfont icon-shezhi"></i>
        </span>
        <p class="account-p account-color2">我的设置</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { touchDoms } from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      imgSrc: ''
    }
  },
  created () {
    this.imgSrc = localStorage.getItem('imgSrc')
  },
  methods: {
    touchDom (dom, name) {
      touchDoms(dom, name)
    }
  },
  computed: {
    ...mapGetters([
      'hashNumber',
      'listNumber'
    ])
  }
}
</script>