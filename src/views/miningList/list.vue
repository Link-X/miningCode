<style lang='less' scoped>

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

.home-ul_top {
  margin-top: 20px;
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
  <ul class="hom-ul" :class="{'home-ul_top': isSearch === true}">
    <li 
    v-for="(item, index) in list" 
    :key="item.id" 
    class="home-li" 
    :ref='item.id' 
    @touchstart="touchDom(item.id, 'add')" 
    @touchend="touchDom(item.id, 'rem')">
      <div class="home-img">
        <img src='../../assets/img/kuan.png' />
      </div>
      <div class="home-text">
        <h3 class="list-title">
          {{item.hostname}}
          <mt-button 
          class="list-header_btn" 
          size='small' 
          type='primary' 
          @click="screenList(item.id)">查看详情</mt-button>
        </h3>
        <div class="home-text_bottom">
          <div>
            <span>矿池:{{item.proxypool1}}</span>
            <span>显卡:{{item.gpus}}个</span>
          </div>
          <div>{{item.date}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { addClass, remClass } from '@/utils/index'
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    touchDom (dom, name) {
      if (name === 'add') {
        addClass(this.$refs[dom][0], 'home-li_click')
      } else {
        remClass(this.$refs[dom][0], 'home-li_click')
      }
    },
    screenList (id) {
      this.$emit('screenList', id)
    }
  }
}
</script>
